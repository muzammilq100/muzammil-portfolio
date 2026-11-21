"use strict";(()=>{var Mt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var _m=Mt((lz,wm)=>{"use strict";var Fi=document.getElementById("loader"),Ii=Fi&&Fi.querySelector(".loader-name"),al=0,Uf=0,Bf=!1,N4=performance.now(),qi=.06,$i=0,uu=0,mm=!1,R4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function O4(t){if(!Ii)return;let e=Ii.offsetWidth||1,n=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Ii.style.webkitMaskPosition=n,Ii.style.maskPosition=n}function ym(t){let e=Math.min(.05,uu?(t-uu)/1e3:.016);uu=t;let o=Bf?.75:.22+(qi-$i)*1.2;if($i=Math.min(qi,$i+Math.max(0,o)*e),R4&&($i=qi),O4($i),Bf&&$i>=.999){mm||(mm=!0,setTimeout(bm,650));return}requestAnimationFrame(ym)}Ii&&requestAnimationFrame(ym);function gm(){let t=al?Uf/Math.max(al,24):0;qi=Math.max(qi,Math.min(.9,.06+t*.84))}function bm(){Fi&&(Fi.classList.add("done"),setTimeout(()=>Fi.remove(),1400))}function du(){Bf||(Bf=!0,window.__galleryReady=!0,Fi&&(qi=1,Ii||bm()))}var xm=null;function C4(){clearTimeout(xm),Uf>=al&&performance.now()-N4>600&&(xm=setTimeout(()=>{Uf>=al&&du()},450))}setTimeout(du,2e4);var P4=t=>/(^|\/)(res|images)\//.test(t),Hf=window.fetch.bind(window);async function $4(t,e){let o=await Hf(t+".gz",e);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!P4(o))return Hf(t,e);al++,gm();let n=a=>(Uf++,gm(),C4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=$4(o,e).catch(()=>Hf(t,e)):r=Hf(t,e),r.then(n,a=>{throw n(),a})};wm.exports={finish:du}});var S0=Mt((fz,Em)=>{"use strict";var Mm=typeof navigator!="undefined"&&navigator.userAgent||"",I4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,ba=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Mm)||/Macintosh/.test(Mm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||I4,km=typeof window!="undefined"&&window.devicePixelRatio||1,Lo={isPhone:ba,pixelRatio:ba?Math.min(km,1.5):Math.min(km,2),reflection:!ba,gardenDetail:ba?0:1,leafShare:ba?.65:1,motion:!ba,post:ba?1:2,level:ba?1:0};Lo.scale=1;var F4=ba?.55:.6,sl=0,jf=0,il=0,cl=0,Di=1,ll=0,Wf=48,Gi=null,pu=0;function q4(t){Gi={fps:t,scale:Lo.scale},Lo.scale>.86?Lo.scale=.85:Lo.reflection?Lo.stepDown():Lo.scale>.71?Lo.scale=.7:Lo.stepDown()||(Lo.scale=Math.max(F4,Lo.scale-.1))}var Sm=!0;try{/[?&]noadapt\b/.test(location.search)&&(Sm=!1)}catch(t){}Lo.frame=t=>{if(!Sm)return;if(!(t>0)||t>1){sl=0,jf=0;return}if(sl+=t,jf++,sl<.75)return;let e=jf/sl;if(sl=0,jf=0,ll>0&&(ll-=.75,ll<=0&&(Di=1)),Gi){if(e<Gi.fps*1.08&&Gi.scale>Lo.scale){if(++pu>=2){Lo.scale=1,Di=1,ll=0,Wf=Math.min(Wf,e*.85),pu=0,il=0,Gi=null;return}}else pu=0;Gi=null}if(e<Wf){if(cl=0,++il>=2){if(il=0,Lo.scale>.61&&Lo.climbed){Di=Lo.scale-.05,ll=40,Lo.scale=Di,Lo.climbed=!1;return}q4(e)}}else e>Math.max(Wf*1.15,55)?(il=0,++cl>=6&&Lo.scale<Di-.001?(Lo.scale=Math.min(Di,Lo.scale+.05),Lo.climbed=!0,cl=0):cl>=6&&(Lo.climbed=!1)):(il=0,cl=0)};Lo.stepDown=()=>{if(Lo.reflection)Lo.reflection=!1;else if(Lo.gardenDetail>0||Lo.motion)Lo.gardenDetail=0,Lo.motion=!1,Lo.leafShare=Math.min(Lo.leafShare,.65);else if(Lo.post>0)Lo.post--;else return!1;return Lo.level++,!0};Em.exports=Lo});var vu=Mt((hz,zm)=>{"use strict";zm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Vf=Mt((uz,Lm)=>{"use strict";var $r={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Am='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Tm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';$r.instagramUrl="https://instagram.com/"+$r.instagram;$r.mailUrl="mailto:"+$r.email+"?subject="+encodeURIComponent("Your paintings");$r.icons=t=>`
	<a class="${t}" href="${$r.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${$r.instagram}" title="Instagram">${Am}</a>
	<a class="${t}" href="${$r.mailUrl}" aria-label="Email ${$r.email}" title="Email">${Tm}</a>`;$r.line=t=>`
	<span class="${t}">
		<a href="${$r.instagramUrl}" target="_blank" rel="noopener">${Am}<span>@${$r.instagram}</span></a>
		<a href="${$r.mailUrl}">${Tm}<span>${$r.email}</span></a>
	</span>`;Lm.exports=$r});var fl=Mt((dz,Nm)=>{"use strict";Nm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var mu=Mt((pz,Cm)=>{"use strict";var D4=vu(),G4=Vf(),Rm=fl(),H4=S0(),Ua=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),U4=`
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
`,Ir=null;function B4(t){if(Ir){Ir.hidden=!1,requestAnimationFrame(()=>Ir.classList.add("on"));return}let e=document.createElement("style");e.textContent=U4,document.head.appendChild(e);let o=!H4.isPhone;Ir=document.createElement("div"),Ir.className="plist",Ir.setAttribute("role","region"),Ir.setAttribute("aria-label","All paintings"),Ir.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${G4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${D4.map(r=>`
			<article class="plist-item" id="${Ua(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Ua(r.title)}, ${Ua(Rm(r))}"
					src="images/web/${Ua(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Ua(r.file)}'">
				<p class="plist-meta">${Ua(Rm(r))}</p>
				<h2>${Ua(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Ua(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Ir.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Ir.querySelector(".plist-close");n&&n.addEventListener("click",Om),document.body.appendChild(Ir),requestAnimationFrame(()=>Ir.classList.add("on"))}function Om(){Ir&&(Ir.classList.remove("on"),setTimeout(()=>{Ir.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Cm.exports={show:B4,hide:Om}});var Pm=Mt((gu,xu)=>{(function(t,e){typeof gu=="object"&&typeof xu!="undefined"?xu.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(gu,function(){var t=function(){function e(u){return r.appendChild(u.dom),u}function o(u){for(var d=0;d<r.children.length;d++)r.children[d].style.display=d===u?"block":"none";n=u}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(u){u.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),h=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var u=(performance||Date).now();if(h.update(u-a,200),u>s+1e3&&(c.update(1e3*i/(u-s),100),s=u,i=0,l)){var d=performance.memory;l.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return u},update:function(){a=this.end()},domElement:r,setMode:o}};return t.Panel=function(e,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,h=48*i,l=3*i,u=2*i,d=3*i,p=15*i,f=74*i,v=30*i,m=document.createElement("canvas");m.width=c,m.height=h,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,h),g.fillStyle=o,g.fillText(e,l,u),g.fillRect(d,p,f,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d,p,f,v),{dom:m,update:function(x,b){r=Math.min(r,x),a=Math.max(a,x),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,p),g.fillStyle=o,g.fillText(s(x)+" "+e+" ("+s(r)+"-"+s(a)+")",l,u),g.drawImage(m,d+i,p,f-i,v,d,p,f-i,v),g.fillRect(d+f-i,p,i,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d+f-i,p,i,s((1-x/b)*v))}}},t})});var $m=Mt((yu,bu)=>{(function(t,e){typeof yu=="object"&&typeof bu!="undefined"?bu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(yu,function(){"use strict";var t=function(y){return y instanceof Uint8Array||y instanceof Uint16Array||y instanceof Uint32Array||y instanceof Int8Array||y instanceof Int16Array||y instanceof Int32Array||y instanceof Float32Array||y instanceof Float64Array||y instanceof Uint8ClampedArray},e=function(y,z){for(var C=Object.keys(z),ot=0;ot<C.length;++ot)y[C[ot]]=z[C[ot]];return y},o=`
`;function n(y){return typeof atob!="undefined"?atob(y):"base64:"+y}function r(y){var z=new Error("(regl) "+y);throw console.error(z),z}function a(y,z){y||r(z)}function s(y){return y?": "+y:""}function i(y,z,C){y in z||r("unknown parameter ("+y+")"+s(C)+". possible values: "+Object.keys(z).join())}function c(y,z){t(y)||r("invalid parameter type"+s(z)+". must be a typed array")}function h(y,z){switch(z){case"number":return typeof y=="number";case"object":return typeof y=="object";case"string":return typeof y=="string";case"boolean":return typeof y=="boolean";case"function":return typeof y=="function";case"undefined":return typeof y=="undefined";case"symbol":return typeof y=="symbol"}}function l(y,z,C){h(y,z)||r("invalid parameter type"+s(C)+". expected "+z+", got "+typeof y)}function u(y,z){y>=0&&(y|0)===y||r("invalid parameter type, ("+y+")"+s(z)+". must be a nonnegative integer")}function d(y,z,C){z.indexOf(y)<0&&r("invalid value"+s(C)+". must be one of: "+z)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function f(y){Object.keys(y).forEach(function(z){p.indexOf(z)<0&&r('invalid regl constructor argument "'+z+'". must be one of '+p)})}function v(y,z){for(y=y+"";y.length<z;)y=" "+y;return y}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(y,z){this.number=y,this.line=z,this.errors=[]}function x(y,z,C){this.file=y,this.line=z,this.message=C}function b(){var y=new Error,z=(y.stack||y).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(z);if(C)return C[1];var ot=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(z);return ot?ot[1]:"unknown"}function w(){var y=new Error,z=(y.stack||y).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(z);if(C)return C[1];var ot=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(z);return ot?ot[1]:"unknown"}function M(y,z){var C=y.split(`
`),ot=1,pt=0,tt={unknown:new m,0:new m};tt.unknown.name=tt[0].name=z||b(),tt.unknown.lines.push(new g(0,""));for(var st=0;st<C.length;++st){var At=C[st],Ot=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(At);if(Ot)switch(Ot[1]){case"line":var It=/(\d+)(\s+\d+)?/.exec(Ot[2]);It&&(ot=It[1]|0,It[2]&&(pt=It[2]|0,pt in tt||(tt[pt]=new m)));break;case"define":var Ct=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Ot[2]);Ct&&(tt[pt].name=Ct[1]?n(Ct[2]):Ct[2]);break}tt[pt].lines.push(new g(ot++,At))}return Object.keys(tt).forEach(function(Dt){var Xt=tt[Dt];Xt.lines.forEach(function(Tt){Xt.index[Tt.number]=Tt})}),tt}function _(y){var z=[];return y.split(`
`).forEach(function(C){if(!(C.length<5)){var ot=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);ot?z.push(new x(ot[1]|0,ot[2]|0,ot[3].trim())):C.length>0&&z.push(new x("unknown",0,C))}}),z}function S(y,z){z.forEach(function(C){var ot=y[C.file];if(ot){var pt=ot.index[C.line];if(pt){pt.errors.push(C),ot.hasErrors=!0;return}}y.unknown.hasErrors=!0,y.unknown.lines[0].errors.push(C)})}function O(y,z,C,ot,pt){if(!y.getShaderParameter(z,y.COMPILE_STATUS)){var tt=y.getShaderInfoLog(z),st=ot===y.FRAGMENT_SHADER?"fragment":"vertex";ut(C,"string",st+" shader source must be a string",pt);var At=M(C,pt),Ot=_(tt);S(At,Ot),Object.keys(At).forEach(function(It){var Ct=At[It];if(!Ct.hasErrors)return;var Dt=[""],Xt=[""];function Tt(Gt,Y){Dt.push(Gt),Xt.push(Y||"")}Tt("file number "+It+": "+Ct.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Ct.lines.forEach(function(Gt){if(Gt.errors.length>0){Tt(v(Gt.number,4)+"|  ","background-color:yellow; font-weight:bold"),Tt(Gt.line+o,"color:red; background-color:yellow; font-weight:bold");var Y=0;Gt.errors.forEach(function(it){var $t=it.message,te=/^\s*'(.*)'\s*:\s*(.*)$/.exec($t);if(te){var wt=te[1];switch($t=te[2],wt){case"assign":wt="=";break}Y=Math.max(Gt.line.indexOf(wt,Y),0)}else Y=0;Tt(v("| ",6)),Tt(v("^^^",Y+3)+o,"font-weight:bold"),Tt(v("| ",6)),Tt($t+o,"font-weight:bold")}),Tt(v("| ",6)+o)}else Tt(v(Gt.number,4)+"|  "),Tt(Gt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Xt[0]=Dt.join("%c"),console.log.apply(console,Xt)):console.log(Dt.join(""))}),a.raise("Error compiling "+st+" shader, "+At[0].name)}}function N(y,z,C,ot,pt){if(!y.getProgramParameter(z,y.LINK_STATUS)){var tt=y.getProgramInfoLog(z),st=M(C,pt),At=M(ot,pt),Ot='Error linking program with vertex shader, "'+At[0].name+'", and fragment shader "'+st[0].name+'"';typeof document!="undefined"?console.log("%c"+Ot+o+"%c"+tt,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Ot+o+tt),a.raise(Ot)}}function G(y){y._commandRef=b()}function F(y,z,C,ot){G(y);function pt(Ot){return Ot?ot.id(Ot):0}y._fragId=pt(y.static.frag),y._vertId=pt(y.static.vert);function tt(Ot,It){Object.keys(It).forEach(function(Ct){Ot[ot.id(Ct)]=!0})}var st=y._uniformSet={};tt(st,z.static),tt(st,z.dynamic);var At=y._attributeSet={};tt(At,C.static),tt(At,C.dynamic),y._hasCount="count"in y.static||"count"in y.dynamic||"elements"in y.static||"elements"in y.dynamic}function j(y,z){var C=w();r(y+" in command "+(z||b())+(C==="unknown"?"":" called from "+C))}function D(y,z,C){y||j(z,C||b())}function B(y,z,C,ot){y in z||j("unknown parameter ("+y+")"+s(C)+". possible values: "+Object.keys(z).join(),ot||b())}function ut(y,z,C,ot){h(y,z)||j("invalid parameter type"+s(C)+". expected "+z+", got "+typeof y,ot||b())}function Rt(y){y()}function Nt(y,z,C){y.texture?d(y.texture._texture.internalformat,z,"unsupported texture format for attachment"):d(y.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var bt=33071,rt=9728,qt=9984,xe=9985,he=9986,De=9987,Ae=5120,ho=5121,yo=5122,Uo=5123,se=5124,Se=5125,Ge=5126,ao=32819,uo=32820,Ue=33635,Le=34042,kt=36193,ue={};ue[Ae]=ue[ho]=1,ue[yo]=ue[Uo]=ue[kt]=ue[Ue]=ue[ao]=ue[uo]=2,ue[se]=ue[Se]=ue[Ge]=ue[Le]=4;function ft(y,z){return y===uo||y===ao||y===Ue?2:y===Le?4:ue[y]*z}function ct(y){return!(y&y-1)&&!!y}function Q(y,z,C){var ot,pt=z.width,tt=z.height,st=z.channels;a(pt>0&&pt<=C.maxTextureSize&&tt>0&&tt<=C.maxTextureSize,"invalid texture shape"),(y.wrapS!==bt||y.wrapT!==bt)&&a(ct(pt)&&ct(tt),"incompatible wrap mode for texture, both width and height must be power of 2"),z.mipmask===1?pt!==1&&tt!==1&&a(y.minFilter!==qt&&y.minFilter!==he&&y.minFilter!==xe&&y.minFilter!==De,"min filter requires mipmap"):(a(ct(pt)&&ct(tt),"texture must be a square power of 2 to support mipmapping"),a(z.mipmask===(pt<<1)-1,"missing or incomplete mipmap data")),z.type===Ge&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(y.minFilter===rt&&y.magFilter===rt,"filter not supported, must enable oes_texture_float_linear"),a(!y.genMipmaps,"mipmap generation not supported with float textures"));var At=z.images;for(ot=0;ot<16;++ot)if(At[ot]){var Ot=pt>>ot,It=tt>>ot;a(z.mipmask&1<<ot,"missing mipmap data");var Ct=At[ot];if(a(Ct.width===Ot&&Ct.height===It,"invalid shape for mip images"),a(Ct.format===z.format&&Ct.internalformat===z.internalformat&&Ct.type===z.type,"incompatible type for mip image"),!Ct.compressed)if(Ct.data){var Dt=Math.ceil(ft(Ct.type,st)*Ot/Ct.unpackAlignment)*Ct.unpackAlignment;a(Ct.data.byteLength===Dt*It,"invalid data for image, buffer size is inconsistent with image format")}else Ct.element||Ct.copy}else y.genMipmaps||a((z.mipmask&1<<ot)===0,"extra mipmap data");z.compressed&&a(!y.genMipmaps,"mipmap generation for compressed images not supported")}function ye(y,z,C,ot){var pt=y.width,tt=y.height,st=y.channels;a(pt>0&&pt<=ot.maxTextureSize&&tt>0&&tt<=ot.maxTextureSize,"invalid texture shape"),a(pt===tt,"cube map must be square"),a(z.wrapS===bt&&z.wrapT===bt,"wrap mode not supported by cube map");for(var At=0;At<C.length;++At){var Ot=C[At];a(Ot.width===pt&&Ot.height===tt,"inconsistent cube map face shape"),z.genMipmaps&&(a(!Ot.compressed,"can not generate mipmap for compressed textures"),a(Ot.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var It=Ot.images,Ct=0;Ct<16;++Ct){var Dt=It[Ct];if(Dt){var Xt=pt>>Ct,Tt=tt>>Ct;a(Ot.mipmask&1<<Ct,"missing mipmap data"),a(Dt.width===Xt&&Dt.height===Tt,"invalid shape for mip images"),a(Dt.format===y.format&&Dt.internalformat===y.internalformat&&Dt.type===y.type,"incompatible type for mip image"),Dt.compressed||(Dt.data?a(Dt.data.byteLength===Xt*Tt*Math.max(ft(Dt.type,st),Dt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Dt.element||Dt.copy)}}}}var k=e(a,{optional:Rt,raise:r,commandRaise:j,command:D,parameter:i,commandParameter:B,constructor:f,type:l,commandType:ut,isTypedArray:c,nni:u,oneOf:d,shaderError:O,linkError:N,callSite:w,saveCommandRef:G,saveDrawInfo:F,framebufferFormat:Nt,guessCommand:b,texture2D:Q,textureCube:ye}),Jt=0,Wt=0,Te=5,Re=6;function eo(y,z){this.id=Jt++,this.type=y,this.data=z}function zo(y){return y.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function wo(y){if(y.length===0)return[];var z=y.charAt(0),C=y.charAt(y.length-1);if(y.length>1&&z===C&&(z==='"'||z==="'"))return['"'+zo(y.substr(1,y.length-2))+'"'];var ot=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(y);if(ot)return wo(y.substr(0,ot.index)).concat(wo(ot[1])).concat(wo(y.substr(ot.index+ot[0].length)));var pt=y.split(".");if(pt.length===1)return['"'+zo(y)+'"'];for(var tt=[],st=0;st<pt.length;++st)tt=tt.concat(wo(pt[st]));return tt}function Xo(y){return"["+wo(y).join("][")+"]"}function gn(y,z){return new eo(y,Xo(z+""))}function on(y){return typeof y=="function"&&!y._reglType||y instanceof eo}function V(y,z){if(typeof y=="function")return new eo(Wt,y);if(typeof y=="number"||typeof y=="boolean")return new eo(Te,y);if(Array.isArray(y))return new eo(Re,y.map((C,ot)=>V(C,z+"["+ot+"]")));if(y instanceof eo)return y;k(!1,"invalid option type in uniform "+z)}var mt={DynamicVariable:eo,define:gn,isDynamic:on,unbox:V,accessor:Xo},zt={next:typeof requestAnimationFrame=="function"?function(y){return requestAnimationFrame(y)}:function(y){return setTimeout(y,16)},cancel:typeof cancelAnimationFrame=="function"?function(y){return cancelAnimationFrame(y)}:clearTimeout},Et=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Qt(){var y={"":0},z=[""];return{id:function(C){var ot=y[C];return ot||(ot=y[C]=z.length,z.push(C),ot)},str:function(C){return z[C]}}}function oe(y,z,C){var ot=document.createElement("canvas");e(ot.style,{border:0,margin:0,padding:0,top:0,left:0}),y.appendChild(ot),y===document.body&&(ot.style.position="absolute",e(y.style,{margin:0,padding:0}));function pt(){var At=window.innerWidth,Ot=window.innerHeight;if(y!==document.body){var It=y.getBoundingClientRect();At=It.right-It.left,Ot=It.bottom-It.top}ot.width=C*At,ot.height=C*Ot,e(ot.style,{width:At+"px",height:Ot+"px"})}var tt;y!==document.body&&typeof ResizeObserver=="function"?(tt=new ResizeObserver(function(){setTimeout(pt)}),tt.observe(y)):window.addEventListener("resize",pt,!1);function st(){tt?tt.disconnect():window.removeEventListener("resize",pt),y.removeChild(ot)}return pt(),{canvas:ot,onDestroy:st}}function ee(y,z){function C(ot){try{return y.getContext(ot,z)}catch(pt){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function Bt(y){return typeof y.nodeName=="string"&&typeof y.appendChild=="function"&&typeof y.getBoundingClientRect=="function"}function le(y){return typeof y.drawArrays=="function"||typeof y.drawElements=="function"}function Ee(y){return typeof y=="string"?y.split():(k(Array.isArray(y),"invalid extension array"),y)}function We(y){return typeof y=="string"?(k(typeof document!="undefined","not supported outside of DOM"),document.querySelector(y)):y}function $e(y){var z=y||{},C,ot,pt,tt,st={},At=[],Ot=[],It=typeof window=="undefined"?1:window.devicePixelRatio,Ct=!1,Dt=function(Gt){Gt&&k.raise(Gt)},Xt=function(){};if(typeof z=="string"?(k(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(z),k(C,"invalid query string for element")):typeof z=="object"?Bt(z)?C=z:le(z)?(tt=z,pt=tt.canvas):(k.constructor(z),"gl"in z?tt=z.gl:"canvas"in z?pt=We(z.canvas):"container"in z&&(ot=We(z.container)),"attributes"in z&&(st=z.attributes,k.type(st,"object","invalid context attributes")),"extensions"in z&&(At=Ee(z.extensions)),"optionalExtensions"in z&&(Ot=Ee(z.optionalExtensions)),"onDone"in z&&(k.type(z.onDone,"function","invalid or missing onDone callback"),Dt=z.onDone),"profile"in z&&(Ct=!!z.profile),"pixelRatio"in z&&(It=+z.pixelRatio,k(It>0,"invalid pixel ratio"))):k.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?pt=C:ot=C),!tt){if(!pt){k(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Tt=oe(ot||document.body,Dt,It);if(!Tt)return null;pt=Tt.canvas,Xt=Tt.onDestroy}st.premultipliedAlpha===void 0&&(st.premultipliedAlpha=!0),tt=ee(pt,st)}return tt?{gl:tt,canvas:pt,container:ot,extensions:At,optionalExtensions:Ot,pixelRatio:It,profile:Ct,onDone:Dt,onDestroy:Xt}:(Xt(),Dt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Ie(y,z){var C={};function ot(st){k.type(st,"string","extension name must be string");var At=st.toLowerCase(),Ot;try{Ot=C[At]=y.getExtension(At)}catch(It){}return!!Ot}for(var pt=0;pt<z.extensions.length;++pt){var tt=z.extensions[pt];if(!ot(tt))return z.onDestroy(),z.onDone('"'+tt+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return z.optionalExtensions.forEach(ot),{extensions:C,restore:function(){Object.keys(C).forEach(function(st){if(C[st]&&!ot(st))throw new Error("(regl): error restoring extension "+st)})}}}function no(y,z){for(var C=Array(y),ot=0;ot<y;++ot)C[ot]=z(ot);return C}var ze=5120,go=5121,$o=5122,Oe=5123,Wo=5124,b0=5125,ma=5126;function lo(y){for(var z=16;z<=1<<28;z*=16)if(y<=z)return z;return 0}function ko(y){var z,C;return z=(y>65535)<<4,y>>>=z,C=(y>255)<<3,y>>>=C,z|=C,C=(y>15)<<2,y>>>=C,z|=C,C=(y>3)<<1,y>>>=C,z|=C,z|y>>1}function jn(){var y=no(8,function(){return[]});function z(tt){var st=lo(tt),At=y[ko(st)>>2];return At.length>0?At.pop():new ArrayBuffer(st)}function C(tt){y[ko(tt.byteLength)>>2].push(tt)}function ot(tt,st){var At=null;switch(tt){case ze:At=new Int8Array(z(st),0,st);break;case go:At=new Uint8Array(z(st),0,st);break;case $o:At=new Int16Array(z(2*st),0,st);break;case Oe:At=new Uint16Array(z(2*st),0,st);break;case Wo:At=new Int32Array(z(4*st),0,st);break;case b0:At=new Uint32Array(z(4*st),0,st);break;case ma:At=new Float32Array(z(4*st),0,st);break;default:return null}return At.length!==st?At.subarray(0,st):At}function pt(tt){C(tt.buffer)}return{alloc:z,free:C,allocType:ot,freeType:pt}}var X=jn();X.zero=jn();var xt=3408,ne=3410,ge=3411,we=3412,hn=3413,ur=3414,Or=3415,un=33901,Er=33902,dn=3379,bo=3386,nr=34921,Jo=36347,Wn=36348,Xr=35661,Yr=35660,Qo=34930,w0=36349,An=34076,q0=34024,Ro=7936,pn=7937,_0=7938,ks=35724,na=34047,Ss=36063,df=34852,Ia=3553,yi=34067,Dc=34069,x1=33984,ga=6408,Gc=5126,zr=5121,Hc=36160,Es=36053,d5=36064,p5=16384,v5=function(y,z){var C=1;z.ext_texture_filter_anisotropic&&(C=y.getParameter(na));var ot=1,pt=1;z.webgl_draw_buffers&&(ot=y.getParameter(df),pt=y.getParameter(Ss));var tt=!!z.oes_texture_float;if(tt){var st=y.createTexture();y.bindTexture(Ia,st),y.texImage2D(Ia,0,ga,1,1,0,ga,Gc,null);var At=y.createFramebuffer();if(y.bindFramebuffer(Hc,At),y.framebufferTexture2D(Hc,d5,Ia,st,0),y.bindTexture(Ia,null),y.checkFramebufferStatus(Hc)!==Es)tt=!1;else{y.viewport(0,0,1,1),y.clearColor(1,0,0,1),y.clear(p5);var Ot=X.allocType(Gc,4);y.readPixels(0,0,1,1,ga,Gc,Ot),y.getError()?tt=!1:(y.deleteFramebuffer(At),y.deleteTexture(st),tt=Ot[0]===1),X.freeType(Ot)}}var It=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Ct=!0;if(!It){var Dt=y.createTexture(),Xt=X.allocType(zr,36);y.activeTexture(x1),y.bindTexture(yi,Dt),y.texImage2D(Dc,0,ga,3,3,0,ga,zr,Xt),X.freeType(Xt),y.bindTexture(yi,null),y.deleteTexture(Dt),Ct=!y.getError()}return{colorBits:[y.getParameter(ne),y.getParameter(ge),y.getParameter(we),y.getParameter(hn)],depthBits:y.getParameter(ur),stencilBits:y.getParameter(Or),subpixelBits:y.getParameter(xt),extensions:Object.keys(z).filter(function(Tt){return!!z[Tt]}),maxAnisotropic:C,maxDrawbuffers:ot,maxColorAttachments:pt,pointSizeDims:y.getParameter(un),lineWidthDims:y.getParameter(Er),maxViewportDims:y.getParameter(bo),maxCombinedTextureUnits:y.getParameter(Xr),maxCubeMapSize:y.getParameter(An),maxRenderbufferSize:y.getParameter(q0),maxTextureUnits:y.getParameter(Qo),maxTextureSize:y.getParameter(dn),maxAttributes:y.getParameter(nr),maxVertexUniforms:y.getParameter(Jo),maxVertexTextureUnits:y.getParameter(Yr),maxVaryingVectors:y.getParameter(Wn),maxFragmentUniforms:y.getParameter(w0),glsl:y.getParameter(ks),renderer:y.getParameter(pn),vendor:y.getParameter(Ro),version:y.getParameter(_0),readFloat:tt,npotTextureCube:Ct}};function D0(y){return!!y&&typeof y=="object"&&Array.isArray(y.shape)&&Array.isArray(y.stride)&&typeof y.offset=="number"&&y.shape.length===y.stride.length&&(Array.isArray(y.data)||t(y.data))}var i0=function(y){return Object.keys(y).map(function(z){return y[z]})},pf={shape:y5,flatten:x5};function m5(y,z,C){for(var ot=0;ot<z;++ot)C[ot]=y[ot]}function g5(y,z,C,ot){for(var pt=0,tt=0;tt<z;++tt)for(var st=y[tt],At=0;At<C;++At)ot[pt++]=st[At]}function Ap(y,z,C,ot,pt,tt){for(var st=tt,At=0;At<z;++At)for(var Ot=y[At],It=0;It<C;++It)for(var Ct=Ot[It],Dt=0;Dt<ot;++Dt)pt[st++]=Ct[Dt]}function Tp(y,z,C,ot,pt){for(var tt=1,st=C+1;st<z.length;++st)tt*=z[st];var At=z[C];if(z.length-C===4){var Ot=z[C+1],It=z[C+2],Ct=z[C+3];for(st=0;st<At;++st)Ap(y[st],Ot,It,Ct,ot,pt),pt+=tt}else for(st=0;st<At;++st)Tp(y[st],z,C+1,ot,pt),pt+=tt}function x5(y,z,C,ot){var pt=1;if(z.length)for(var tt=0;tt<z.length;++tt)pt*=z[tt];else pt=0;var st=ot||X.allocType(C,pt);switch(z.length){case 0:break;case 1:m5(y,z[0],st);break;case 2:g5(y,z[0],z[1],st);break;case 3:Ap(y,z[0],z[1],z[2],st,0);break;default:Tp(y,z,0,st,0)}return st}function y5(y){for(var z=[],C=y;C.length;C=C[0])z.push(C.length);return z}var y1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},b5=5120,w5=5122,_5=5124,M5=5121,k5=5123,S5=5125,E5=5126,z5=5126,zs={int8:b5,int16:w5,int32:_5,uint8:M5,uint16:k5,uint32:S5,float:E5,float32:z5},A5=35048,T5=35040,vf={dynamic:A5,stream:T5,static:35044},b1=pf.flatten,Lp=pf.shape,Np=35044,L5=35040,w1=5121,_1=5126,Fa=[];Fa[5120]=1,Fa[5122]=2,Fa[5124]=4,Fa[5121]=1,Fa[5123]=2,Fa[5125]=4,Fa[5126]=4;function mf(y){return y1[Object.prototype.toString.call(y)]|0}function Rp(y,z){for(var C=0;C<z.length;++C)y[C]=z[C]}function Op(y,z,C,ot,pt,tt,st){for(var At=0,Ot=0;Ot<C;++Ot)for(var It=0;It<ot;++It)y[At++]=z[pt*Ot+tt*It+st]}function N5(y,z,C,ot){var pt=0,tt={};function st(Y){this.id=pt++,this.buffer=y.createBuffer(),this.type=Y,this.usage=Np,this.byteLength=0,this.dimension=1,this.dtype=w1,this.persistentData=null,C.profile&&(this.stats={size:0})}st.prototype.bind=function(){y.bindBuffer(this.type,this.buffer)},st.prototype.destroy=function(){Xt(this)};var At=[];function Ot(Y,it){var $t=At.pop();return $t||($t=new st(Y)),$t.bind(),Dt($t,it,L5,0,1,!1),$t}function It(Y){At.push(Y)}function Ct(Y,it,$t){Y.byteLength=it.byteLength,y.bufferData(Y.type,it,$t)}function Dt(Y,it,$t,te,wt,re){var St;if(Y.usage=$t,Array.isArray(it)){if(Y.dtype=te||_1,it.length>0){var Ht;if(Array.isArray(it[0])){St=Lp(it);for(var _t=1,Ut=1;Ut<St.length;++Ut)_t*=St[Ut];Y.dimension=_t,Ht=b1(it,St,Y.dtype),Ct(Y,Ht,$t),re?Y.persistentData=Ht:X.freeType(Ht)}else if(typeof it[0]=="number"){Y.dimension=wt;var Ne=X.allocType(Y.dtype,it.length);Rp(Ne,it),Ct(Y,Ne,$t),re?Y.persistentData=Ne:X.freeType(Ne)}else t(it[0])?(Y.dimension=it[0].length,Y.dtype=te||mf(it[0])||_1,Ht=b1(it,[it.length,it[0].length],Y.dtype),Ct(Y,Ht,$t),re?Y.persistentData=Ht:X.freeType(Ht)):k.raise("invalid buffer data")}}else if(t(it))Y.dtype=te||mf(it),Y.dimension=wt,Ct(Y,it,$t),re&&(Y.persistentData=new Uint8Array(new Uint8Array(it.buffer)));else if(D0(it)){St=it.shape;var je=it.stride,Yt=it.offset,Ft=0,yt=0,He=0,Ze=0;St.length===1?(Ft=St[0],yt=1,He=je[0],Ze=0):St.length===2?(Ft=St[0],yt=St[1],He=je[0],Ze=je[1]):k.raise("invalid shape"),Y.dtype=te||mf(it.data)||_1,Y.dimension=yt;var de=X.allocType(Y.dtype,Ft*yt);Op(de,it.data,Ft,yt,He,Ze,Yt),Ct(Y,de,$t),re?Y.persistentData=de:X.freeType(de)}else it instanceof ArrayBuffer?(Y.dtype=w1,Y.dimension=wt,Ct(Y,it,$t),re&&(Y.persistentData=new Uint8Array(new Uint8Array(it)))):k.raise("invalid buffer data")}function Xt(Y){z.bufferCount--,ot(Y);var it=Y.buffer;k(it,"buffer must not be deleted already"),y.deleteBuffer(it),Y.buffer=null,delete tt[Y.id]}function Tt(Y,it,$t,te){z.bufferCount++;var wt=new st(it);tt[wt.id]=wt;function re(_t){var Ut=Np,Ne=null,je=0,Yt=0,Ft=1;return Array.isArray(_t)||t(_t)||D0(_t)||_t instanceof ArrayBuffer?Ne=_t:typeof _t=="number"?je=_t|0:_t&&(k.type(_t,"object","buffer arguments must be an object, a number or an array"),"data"in _t&&(k(Ne===null||Array.isArray(Ne)||t(Ne)||D0(Ne),"invalid data for buffer"),Ne=_t.data),"usage"in _t&&(k.parameter(_t.usage,vf,"invalid buffer usage"),Ut=vf[_t.usage]),"type"in _t&&(k.parameter(_t.type,zs,"invalid buffer type"),Yt=zs[_t.type]),"dimension"in _t&&(k.type(_t.dimension,"number","invalid dimension"),Ft=_t.dimension|0),"length"in _t&&(k.nni(je,"buffer length must be a nonnegative integer"),je=_t.length|0)),wt.bind(),Ne?Dt(wt,Ne,Ut,Yt,Ft,te):(je&&y.bufferData(wt.type,je,Ut),wt.dtype=Yt||w1,wt.usage=Ut,wt.dimension=Ft,wt.byteLength=je),C.profile&&(wt.stats.size=wt.byteLength*Fa[wt.dtype]),re}function St(_t,Ut){k(Ut+_t.byteLength<=wt.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+_t.byteLength+" starting from offset "+Ut+" to a buffer of size "+wt.byteLength),y.bufferSubData(wt.type,Ut,_t)}function Ht(_t,Ut){var Ne=(Ut||0)|0,je;if(wt.bind(),t(_t)||_t instanceof ArrayBuffer)St(_t,Ne);else if(Array.isArray(_t)){if(_t.length>0)if(typeof _t[0]=="number"){var Yt=X.allocType(wt.dtype,_t.length);Rp(Yt,_t),St(Yt,Ne),X.freeType(Yt)}else if(Array.isArray(_t[0])||t(_t[0])){je=Lp(_t);var Ft=b1(_t,je,wt.dtype);St(Ft,Ne),X.freeType(Ft)}else k.raise("invalid buffer data")}else if(D0(_t)){je=_t.shape;var yt=_t.stride,He=0,Ze=0,de=0,so=0;je.length===1?(He=je[0],Ze=1,de=yt[0],so=0):je.length===2?(He=je[0],Ze=je[1],de=yt[0],so=yt[1]):k.raise("invalid shape");var Ve=Array.isArray(_t.data)?wt.dtype:mf(_t.data),oo=X.allocType(Ve,He*Ze);Op(oo,_t.data,He,Ze,de,so,_t.offset),St(oo,Ne),X.freeType(oo)}else k.raise("invalid data for buffer subdata");return re}return $t||re(Y),re._reglType="buffer",re._buffer=wt,re.subdata=Ht,C.profile&&(re.stats=wt.stats),re.destroy=function(){Xt(wt)},re}function Gt(){i0(tt).forEach(function(Y){Y.buffer=y.createBuffer(),y.bindBuffer(Y.type,Y.buffer),y.bufferData(Y.type,Y.persistentData||Y.byteLength,Y.usage)})}return C.profile&&(z.getTotalBufferSize=function(){var Y=0;return Object.keys(tt).forEach(function(it){Y+=tt[it].stats.size}),Y}),{create:Tt,createStream:Ot,destroyStream:It,clear:function(){i0(tt).forEach(Xt),At.forEach(Xt)},getBuffer:function(Y){return Y&&Y._buffer instanceof st?Y._buffer:null},restore:Gt,_initBuffer:Dt}}var R5=0,O5=0,C5=1,P5=1,$5=4,I5=4,bi={points:R5,point:O5,lines:C5,line:P5,triangles:$5,triangle:I5,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},F5=0,q5=1,Uc=4,D5=5120,wi=5121,Cp=5122,_i=5123,Pp=5124,As=5125,M1=34963,G5=35040,H5=35044;function U5(y,z,C,ot){var pt={},tt=0,st={uint8:wi,uint16:_i};z.oes_element_index_uint&&(st.uint32=As);function At(Gt){this.id=tt++,pt[this.id]=this,this.buffer=Gt,this.primType=Uc,this.vertCount=0,this.type=0}At.prototype.bind=function(){this.buffer.bind()};var Ot=[];function It(Gt){var Y=Ot.pop();return Y||(Y=new At(C.create(null,M1,!0,!1)._buffer)),Dt(Y,Gt,G5,-1,-1,0,0),Y}function Ct(Gt){Ot.push(Gt)}function Dt(Gt,Y,it,$t,te,wt,re){Gt.buffer.bind();var St;if(Y){var Ht=re;!re&&(!t(Y)||D0(Y)&&!t(Y.data))&&(Ht=z.oes_element_index_uint?As:_i),C._initBuffer(Gt.buffer,Y,it,Ht,3)}else y.bufferData(M1,wt,it),Gt.buffer.dtype=St||wi,Gt.buffer.usage=it,Gt.buffer.dimension=3,Gt.buffer.byteLength=wt;if(St=re,!re){switch(Gt.buffer.dtype){case wi:case D5:St=wi;break;case _i:case Cp:St=_i;break;case As:case Pp:St=As;break;default:k.raise("unsupported type for element array")}Gt.buffer.dtype=St}Gt.type=St,k(St!==As||!!z.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var _t=te;_t<0&&(_t=Gt.buffer.byteLength,St===_i?_t>>=1:St===As&&(_t>>=2)),Gt.vertCount=_t;var Ut=$t;if($t<0){Ut=Uc;var Ne=Gt.buffer.dimension;Ne===1&&(Ut=F5),Ne===2&&(Ut=q5),Ne===3&&(Ut=Uc)}Gt.primType=Ut}function Xt(Gt){ot.elementsCount--,k(Gt.buffer!==null,"must not double destroy elements"),delete pt[Gt.id],Gt.buffer.destroy(),Gt.buffer=null}function Tt(Gt,Y){var it=C.create(null,M1,!0),$t=new At(it._buffer);ot.elementsCount++;function te(wt){if(!wt)it(),$t.primType=Uc,$t.vertCount=0,$t.type=wi;else if(typeof wt=="number")it(wt),$t.primType=Uc,$t.vertCount=wt|0,$t.type=wi;else{var re=null,St=H5,Ht=-1,_t=-1,Ut=0,Ne=0;Array.isArray(wt)||t(wt)||D0(wt)?re=wt:(k.type(wt,"object","invalid arguments for elements"),"data"in wt&&(re=wt.data,k(Array.isArray(re)||t(re)||D0(re),"invalid data for element buffer")),"usage"in wt&&(k.parameter(wt.usage,vf,"invalid element buffer usage"),St=vf[wt.usage]),"primitive"in wt&&(k.parameter(wt.primitive,bi,"invalid element buffer primitive"),Ht=bi[wt.primitive]),"count"in wt&&(k(typeof wt.count=="number"&&wt.count>=0,"invalid vertex count for elements"),_t=wt.count|0),"type"in wt&&(k.parameter(wt.type,st,"invalid buffer type"),Ne=st[wt.type]),"length"in wt?Ut=wt.length|0:(Ut=_t,Ne===_i||Ne===Cp?Ut*=2:(Ne===As||Ne===Pp)&&(Ut*=4))),Dt($t,re,St,Ht,_t,Ut,Ne)}return te}return te(Gt),te._reglType="elements",te._elements=$t,te.subdata=function(wt,re){return it.subdata(wt,re),te},te.destroy=function(){Xt($t)},te}return{create:Tt,createStream:It,destroyStream:Ct,getElements:function(Gt){return typeof Gt=="function"&&Gt._elements instanceof At?Gt._elements:null},clear:function(){i0(pt).forEach(Xt)}}}var $p=new Float32Array(1),B5=new Uint32Array($p.buffer),j5=5123;function Ip(y){for(var z=X.allocType(j5,y.length),C=0;C<y.length;++C)if(isNaN(y[C]))z[C]=65535;else if(y[C]===1/0)z[C]=31744;else if(y[C]===-1/0)z[C]=64512;else{$p[0]=y[C];var ot=B5[0],pt=ot>>>31<<15,tt=(ot<<1>>>24)-127,st=ot>>13&1023;if(tt<-24)z[C]=pt;else if(tt<-14){var At=-14-tt;z[C]=pt+(st+1024>>At)}else tt>15?z[C]=pt+31744:z[C]=pt+(tt+15<<10)+st}return z}function Mn(y){return Array.isArray(y)||t(y)}var Fp=function(y){return!(y&y-1)&&!!y},W5=34467,ra=3553,k1=34067,gf=34069,Ts=6408,S1=6406,xf=6407,Bc=6409,yf=6410,qp=32854,E1=32855,Dp=36194,V5=32819,X5=32820,Y5=33635,K5=34042,z1=6402,bf=34041,A1=35904,T1=35906,Mi=36193,L1=33776,N1=33777,R1=33778,O1=33779,Gp=35986,Hp=35987,Up=34798,Bp=35840,jp=35841,Wp=35842,Vp=35843,Xp=36196,ki=5121,C1=5123,P1=5125,jc=5126,Q5=10242,Z5=10243,J5=10497,$1=33071,tw=33648,ew=10240,ow=10241,I1=9728,nw=9729,F1=9984,Yp=9985,Kp=9986,q1=9987,rw=33170,wf=4352,aw=4353,sw=4354,iw=34046,cw=3317,lw=37440,fw=37441,hw=37443,Qp=37444,Wc=33984,uw=[F1,Kp,Yp,q1],_f=[0,Bc,yf,xf,Ts],M0={};M0[Bc]=M0[S1]=M0[z1]=1,M0[bf]=M0[yf]=2,M0[xf]=M0[A1]=3,M0[Ts]=M0[T1]=4;function Si(y){return"[object "+y+"]"}var Zp=Si("HTMLCanvasElement"),Jp=Si("OffscreenCanvas"),tv=Si("CanvasRenderingContext2D"),ev=Si("ImageBitmap"),ov=Si("HTMLImageElement"),nv=Si("HTMLVideoElement"),dw=Object.keys(y1).concat([Zp,Jp,tv,ev,ov,nv]),Ei=[];Ei[ki]=1,Ei[jc]=4,Ei[Mi]=2,Ei[C1]=2,Ei[P1]=4;var dr=[];dr[qp]=2,dr[E1]=2,dr[Dp]=2,dr[bf]=4,dr[L1]=.5,dr[N1]=.5,dr[R1]=1,dr[O1]=1,dr[Gp]=.5,dr[Hp]=1,dr[Up]=1,dr[Bp]=.5,dr[jp]=.25,dr[Wp]=.5,dr[Vp]=.25,dr[Xp]=.5;function rv(y){return Array.isArray(y)&&(y.length===0||typeof y[0]=="number")}function av(y){if(!Array.isArray(y))return!1;var z=y.length;return!(z===0||!Mn(y[0]))}function Ls(y){return Object.prototype.toString.call(y)}function sv(y){return Ls(y)===Zp}function iv(y){return Ls(y)===Jp}function pw(y){return Ls(y)===tv}function vw(y){return Ls(y)===ev}function mw(y){return Ls(y)===ov}function gw(y){return Ls(y)===nv}function D1(y){if(!y)return!1;var z=Ls(y);return dw.indexOf(z)>=0?!0:rv(y)||av(y)||D0(y)}function cv(y){return y1[Object.prototype.toString.call(y)]|0}function xw(y,z){var C=z.length;switch(y.type){case ki:case C1:case P1:case jc:var ot=X.allocType(y.type,C);ot.set(z),y.data=ot;break;case Mi:y.data=Ip(z);break;default:k.raise("unsupported texture type, must specify a typed array")}}function lv(y,z){return X.allocType(y.type===Mi?jc:y.type,z)}function fv(y,z){y.type===Mi?(y.data=Ip(z),X.freeType(z)):y.data=z}function yw(y,z,C,ot,pt,tt){for(var st=y.width,At=y.height,Ot=y.channels,It=st*At*Ot,Ct=lv(y,It),Dt=0,Xt=0;Xt<At;++Xt)for(var Tt=0;Tt<st;++Tt)for(var Gt=0;Gt<Ot;++Gt)Ct[Dt++]=z[C*Tt+ot*Xt+pt*Gt+tt];fv(y,Ct)}function Mf(y,z,C,ot,pt,tt){var st;if(typeof dr[y]!="undefined"?st=dr[y]:st=M0[y]*Ei[z],tt&&(st*=6),pt){for(var At=0,Ot=C;Ot>=1;)At+=st*Ot*Ot,Ot/=2;return At}else return st*C*ot}function bw(y,z,C,ot,pt,tt,st){var At={"don't care":wf,"dont care":wf,nice:sw,fast:aw},Ot={repeat:J5,clamp:$1,mirror:tw},It={nearest:I1,linear:nw},Ct=e({mipmap:q1,"nearest mipmap nearest":F1,"linear mipmap nearest":Yp,"nearest mipmap linear":Kp,"linear mipmap linear":q1},It),Dt={none:0,browser:Qp},Xt={uint8:ki,rgba4:V5,rgb565:Y5,"rgb5 a1":X5},Tt={alpha:S1,luminance:Bc,"luminance alpha":yf,rgb:xf,rgba:Ts,rgba4:qp,"rgb5 a1":E1,rgb565:Dp},Gt={};z.ext_srgb&&(Tt.srgb=A1,Tt.srgba=T1),z.oes_texture_float&&(Xt.float32=Xt.float=jc),z.oes_texture_half_float&&(Xt.float16=Xt["half float"]=Mi),z.webgl_depth_texture&&(e(Tt,{depth:z1,"depth stencil":bf}),e(Xt,{uint16:C1,uint32:P1,"depth stencil":K5})),z.webgl_compressed_texture_s3tc&&e(Gt,{"rgb s3tc dxt1":L1,"rgba s3tc dxt1":N1,"rgba s3tc dxt3":R1,"rgba s3tc dxt5":O1}),z.webgl_compressed_texture_atc&&e(Gt,{"rgb atc":Gp,"rgba atc explicit alpha":Hp,"rgba atc interpolated alpha":Up}),z.webgl_compressed_texture_pvrtc&&e(Gt,{"rgb pvrtc 4bppv1":Bp,"rgb pvrtc 2bppv1":jp,"rgba pvrtc 4bppv1":Wp,"rgba pvrtc 2bppv1":Vp}),z.webgl_compressed_texture_etc1&&(Gt["rgb etc1"]=Xp);var Y=Array.prototype.slice.call(y.getParameter(W5));Object.keys(Gt).forEach(function(R){var nt=Gt[R];Y.indexOf(nt)>=0&&(Tt[R]=nt)});var it=Object.keys(Tt);C.textureFormats=it;var $t=[];Object.keys(Tt).forEach(function(R){var nt=Tt[R];$t[nt]=R});var te=[];Object.keys(Xt).forEach(function(R){var nt=Xt[R];te[nt]=R});var wt=[];Object.keys(It).forEach(function(R){var nt=It[R];wt[nt]=R});var re=[];Object.keys(Ct).forEach(function(R){var nt=Ct[R];re[nt]=R});var St=[];Object.keys(Ot).forEach(function(R){var nt=Ot[R];St[nt]=R});var Ht=it.reduce(function(R,nt){var J=Tt[nt];return J===Bc||J===S1||J===Bc||J===yf||J===z1||J===bf||z.ext_srgb&&(J===A1||J===T1)?R[J]=J:J===E1||nt.indexOf("rgba")>=0?R[J]=Ts:R[J]=xf,R},{});function _t(){this.internalformat=Ts,this.format=Ts,this.type=ki,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Qp,this.width=0,this.height=0,this.channels=0}function Ut(R,nt){R.internalformat=nt.internalformat,R.format=nt.format,R.type=nt.type,R.compressed=nt.compressed,R.premultiplyAlpha=nt.premultiplyAlpha,R.flipY=nt.flipY,R.unpackAlignment=nt.unpackAlignment,R.colorSpace=nt.colorSpace,R.width=nt.width,R.height=nt.height,R.channels=nt.channels}function Ne(R,nt){if(!(typeof nt!="object"||!nt)){if("premultiplyAlpha"in nt&&(k.type(nt.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),R.premultiplyAlpha=nt.premultiplyAlpha),"flipY"in nt&&(k.type(nt.flipY,"boolean","invalid texture flip"),R.flipY=nt.flipY),"alignment"in nt&&(k.oneOf(nt.alignment,[1,2,4,8],"invalid texture unpack alignment"),R.unpackAlignment=nt.alignment),"colorSpace"in nt&&(k.parameter(nt.colorSpace,Dt,"invalid colorSpace"),R.colorSpace=Dt[nt.colorSpace]),"type"in nt){var J=nt.type;k(z.oes_texture_float||!(J==="float"||J==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),k(z.oes_texture_half_float||!(J==="half float"||J==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),k(z.webgl_depth_texture||!(J==="uint16"||J==="uint32"||J==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),k.parameter(J,Xt,"invalid texture type"),R.type=Xt[J]}var ie=R.width,io=R.height,T=R.channels,E=!1;"shape"in nt?(k(Array.isArray(nt.shape)&&nt.shape.length>=2,"shape must be an array"),ie=nt.shape[0],io=nt.shape[1],nt.shape.length===3&&(T=nt.shape[2],k(T>0&&T<=4,"invalid number of channels"),E=!0),k(ie>=0&&ie<=C.maxTextureSize,"invalid width"),k(io>=0&&io<=C.maxTextureSize,"invalid height")):("radius"in nt&&(ie=io=nt.radius,k(ie>=0&&ie<=C.maxTextureSize,"invalid radius")),"width"in nt&&(ie=nt.width,k(ie>=0&&ie<=C.maxTextureSize,"invalid width")),"height"in nt&&(io=nt.height,k(io>=0&&io<=C.maxTextureSize,"invalid height")),"channels"in nt&&(T=nt.channels,k(T>0&&T<=4,"invalid number of channels"),E=!0)),R.width=ie|0,R.height=io|0,R.channels=T|0;var $=!1;if("format"in nt){var W=nt.format;k(z.webgl_depth_texture||!(W==="depth"||W==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),k.parameter(W,Tt,"invalid texture format");var K=R.internalformat=Tt[W];R.format=Ht[K],W in Xt&&("type"in nt||(R.type=Xt[W])),W in Gt&&(R.compressed=!0),$=!0}!E&&$?R.channels=M0[R.format]:E&&!$?R.channels!==_f[R.format]&&(R.format=R.internalformat=_f[R.channels]):$&&E&&k(R.channels===M0[R.format],"number of channels inconsistent with specified format")}}function je(R){y.pixelStorei(lw,R.flipY),y.pixelStorei(fw,R.premultiplyAlpha),y.pixelStorei(hw,R.colorSpace),y.pixelStorei(cw,R.unpackAlignment)}function Yt(){_t.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Ft(R,nt){var J=null;if(D1(nt)?J=nt:nt&&(k.type(nt,"object","invalid pixel data type"),Ne(R,nt),"x"in nt&&(R.xOffset=nt.x|0),"y"in nt&&(R.yOffset=nt.y|0),D1(nt.data)&&(J=nt.data)),k(!R.compressed||J instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),nt.copy){k(!J,"can not specify copy and data field for the same texture");var ie=pt.viewportWidth,io=pt.viewportHeight;R.width=R.width||ie-R.xOffset,R.height=R.height||io-R.yOffset,R.needsCopy=!0,k(R.xOffset>=0&&R.xOffset<ie&&R.yOffset>=0&&R.yOffset<io&&R.width>0&&R.width<=ie&&R.height>0&&R.height<=io,"copy texture read out of bounds")}else if(!J)R.width=R.width||1,R.height=R.height||1,R.channels=R.channels||4;else if(t(J))R.channels=R.channels||4,R.data=J,!("type"in nt)&&R.type===ki&&(R.type=cv(J));else if(rv(J))R.channels=R.channels||4,xw(R,J),R.alignment=1,R.needsFree=!0;else if(D0(J)){var T=J.data;!Array.isArray(T)&&R.type===ki&&(R.type=cv(T));var E=J.shape,$=J.stride,W,K,q,I,H,L;E.length===3?(q=E[2],L=$[2]):(k(E.length===2,"invalid ndarray pixel data, must be 2 or 3D"),q=1,L=1),W=E[0],K=E[1],I=$[0],H=$[1],R.alignment=1,R.width=W,R.height=K,R.channels=q,R.format=R.internalformat=_f[q],R.needsFree=!0,yw(R,T,I,H,L,J.offset)}else if(sv(J)||iv(J)||pw(J))sv(J)||iv(J)?R.element=J:R.element=J.canvas,R.width=R.element.width,R.height=R.element.height,R.channels=4;else if(vw(J))R.element=J,R.width=J.width,R.height=J.height,R.channels=4;else if(mw(J))R.element=J,R.width=J.naturalWidth,R.height=J.naturalHeight,R.channels=4;else if(gw(J))R.element=J,R.width=J.videoWidth,R.height=J.videoHeight,R.channels=4;else if(av(J)){var P=R.width||J[0].length,A=R.height||J.length,U=R.channels;Mn(J[0][0])?U=U||J[0][0].length:U=U||1;for(var Z=pf.shape(J),ht=1,vt=0;vt<Z.length;++vt)ht*=Z[vt];var lt=lv(R,ht);pf.flatten(J,Z,"",lt),fv(R,lt),R.alignment=1,R.width=P,R.height=A,R.channels=U,R.format=R.internalformat=_f[U],R.needsFree=!0}R.type===jc?k(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):R.type===Mi&&k(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function yt(R,nt,J){var ie=R.element,io=R.data,T=R.internalformat,E=R.format,$=R.type,W=R.width,K=R.height;je(R),ie?y.texImage2D(nt,J,E,E,$,ie):R.compressed?y.compressedTexImage2D(nt,J,T,W,K,0,io):R.needsCopy?(ot(),y.copyTexImage2D(nt,J,E,R.xOffset,R.yOffset,W,K,0)):y.texImage2D(nt,J,E,W,K,0,E,$,io||null)}function He(R,nt,J,ie,io){var T=R.element,E=R.data,$=R.internalformat,W=R.format,K=R.type,q=R.width,I=R.height;je(R),T?y.texSubImage2D(nt,io,J,ie,W,K,T):R.compressed?y.compressedTexSubImage2D(nt,io,J,ie,$,q,I,E):R.needsCopy?(ot(),y.copyTexSubImage2D(nt,io,J,ie,R.xOffset,R.yOffset,q,I)):y.texSubImage2D(nt,io,J,ie,q,I,W,K,E)}var Ze=[];function de(){return Ze.pop()||new Yt}function so(R){R.needsFree&&X.freeType(R.data),Yt.call(R),Ze.push(R)}function Ve(){_t.call(this),this.genMipmaps=!1,this.mipmapHint=wf,this.mipmask=0,this.images=Array(16)}function oo(R,nt,J){var ie=R.images[0]=de();R.mipmask=1,ie.width=R.width=nt,ie.height=R.height=J,ie.channels=R.channels=4}function Ao(R,nt){var J=null;if(D1(nt))J=R.images[0]=de(),Ut(J,R),Ft(J,nt),R.mipmask=1;else if(Ne(R,nt),Array.isArray(nt.mipmap))for(var ie=nt.mipmap,io=0;io<ie.length;++io)J=R.images[io]=de(),Ut(J,R),J.width>>=io,J.height>>=io,Ft(J,ie[io]),R.mipmask|=1<<io;else J=R.images[0]=de(),Ut(J,R),Ft(J,nt),R.mipmask=1;Ut(R,R.images[0]),R.compressed&&(R.internalformat===L1||R.internalformat===N1||R.internalformat===R1||R.internalformat===O1)&&k(R.width%4===0&&R.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Ln(R,nt){for(var J=R.images,ie=0;ie<J.length;++ie){if(!J[ie])return;yt(J[ie],nt,ie)}}var Vn=[];function po(){var R=Vn.pop()||new Ve;_t.call(R),R.mipmask=0;for(var nt=0;nt<16;++nt)R.images[nt]=null;return R}function In(R){for(var nt=R.images,J=0;J<nt.length;++J)nt[J]&&so(nt[J]),nt[J]=null;Vn.push(R)}function tn(){this.minFilter=I1,this.magFilter=I1,this.wrapS=$1,this.wrapT=$1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=wf}function Nn(R,nt){if("min"in nt){var J=nt.min;k.parameter(J,Ct),R.minFilter=Ct[J],uw.indexOf(R.minFilter)>=0&&!("faces"in nt)&&(R.genMipmaps=!0)}if("mag"in nt){var ie=nt.mag;k.parameter(ie,It),R.magFilter=It[ie]}var io=R.wrapS,T=R.wrapT;if("wrap"in nt){var E=nt.wrap;typeof E=="string"?(k.parameter(E,Ot),io=T=Ot[E]):Array.isArray(E)&&(k.parameter(E[0],Ot),k.parameter(E[1],Ot),io=Ot[E[0]],T=Ot[E[1]])}else{if("wrapS"in nt){var $=nt.wrapS;k.parameter($,Ot),io=Ot[$]}if("wrapT"in nt){var W=nt.wrapT;k.parameter(W,Ot),T=Ot[W]}}if(R.wrapS=io,R.wrapT=T,"anisotropic"in nt){var K=nt.anisotropic;k(typeof K=="number"&&K>=1&&K<=C.maxAnisotropic,"aniso samples must be between 1 and "),R.anisotropic=nt.anisotropic}if("mipmap"in nt){var q=!1;switch(typeof nt.mipmap){case"string":k.parameter(nt.mipmap,At,"invalid mipmap hint"),R.mipmapHint=At[nt.mipmap],R.genMipmaps=!0,q=!0;break;case"boolean":q=R.genMipmaps=nt.mipmap;break;case"object":k(Array.isArray(nt.mipmap),"invalid mipmap type"),R.genMipmaps=!1,q=!0;break;default:k.raise("invalid mipmap type")}q&&!("min"in nt)&&(R.minFilter=F1)}}function Fn(R,nt){y.texParameteri(nt,ow,R.minFilter),y.texParameteri(nt,ew,R.magFilter),y.texParameteri(nt,Q5,R.wrapS),y.texParameteri(nt,Z5,R.wrapT),z.ext_texture_filter_anisotropic&&y.texParameteri(nt,iw,R.anisotropic),R.genMipmaps&&(y.hint(rw,R.mipmapHint),y.generateMipmap(nt))}var qn=0,rr={},pr=C.maxTextureUnits,kn=Array(pr).map(function(){return null});function Je(R){_t.call(this),this.mipmask=0,this.internalformat=Ts,this.id=qn++,this.refCount=1,this.target=R,this.texture=y.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new tn,st.profile&&(this.stats={size:0})}function vr(R){y.activeTexture(Wc),y.bindTexture(R.target,R.texture)}function Oo(){var R=kn[0];R?y.bindTexture(R.target,R.texture):y.bindTexture(ra,null)}function Ce(R){var nt=R.texture;k(nt,"must not double destroy texture");var J=R.unit,ie=R.target;J>=0&&(y.activeTexture(Wc+J),y.bindTexture(ie,null),kn[J]=null),y.deleteTexture(nt),R.texture=null,R.params=null,R.pixels=null,R.refCount=0,delete rr[R.id],tt.textureCount--}e(Je.prototype,{bind:function(){var R=this;R.bindCount+=1;var nt=R.unit;if(nt<0){for(var J=0;J<pr;++J){var ie=kn[J];if(ie){if(ie.bindCount>0)continue;ie.unit=-1}kn[J]=R,nt=J;break}nt>=pr&&k.raise("insufficient number of texture units"),st.profile&&tt.maxTextureUnits<nt+1&&(tt.maxTextureUnits=nt+1),R.unit=nt,y.activeTexture(Wc+nt),y.bindTexture(R.target,R.texture)}return nt},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ce(this)}});function fo(R,nt){var J=new Je(ra);rr[J.id]=J,tt.textureCount++;function ie(E,$){var W=J.texInfo;tn.call(W);var K=po();return typeof E=="number"?typeof $=="number"?oo(K,E|0,$|0):oo(K,E|0,E|0):E?(k.type(E,"object","invalid arguments to regl.texture"),Nn(W,E),Ao(K,E)):oo(K,1,1),W.genMipmaps&&(K.mipmask=(K.width<<1)-1),J.mipmask=K.mipmask,Ut(J,K),k.texture2D(W,K,C),J.internalformat=K.internalformat,ie.width=K.width,ie.height=K.height,vr(J),Ln(K,ra),Fn(W,ra),Oo(),In(K),st.profile&&(J.stats.size=Mf(J.internalformat,J.type,K.width,K.height,W.genMipmaps,!1)),ie.format=$t[J.internalformat],ie.type=te[J.type],ie.mag=wt[W.magFilter],ie.min=re[W.minFilter],ie.wrapS=St[W.wrapS],ie.wrapT=St[W.wrapT],ie}function io(E,$,W,K){k(!!E,"must specify image data");var q=$|0,I=W|0,H=K|0,L=de();return Ut(L,J),L.width=0,L.height=0,Ft(L,E),L.width=L.width||(J.width>>H)-q,L.height=L.height||(J.height>>H)-I,k(J.type===L.type&&J.format===L.format&&J.internalformat===L.internalformat,"incompatible format for texture.subimage"),k(q>=0&&I>=0&&q+L.width<=J.width&&I+L.height<=J.height,"texture.subimage write out of bounds"),k(J.mipmask&1<<H,"missing mipmap data"),k(L.data||L.element||L.needsCopy,"missing image data"),vr(J),He(L,ra,q,I,H),Oo(),so(L),ie}function T(E,$){var W=E|0,K=$|0||W;if(W===J.width&&K===J.height)return ie;ie.width=J.width=W,ie.height=J.height=K,vr(J);for(var q=0;J.mipmask>>q;++q){var I=W>>q,H=K>>q;if(!I||!H)break;y.texImage2D(ra,q,J.format,I,H,0,J.format,J.type,null)}return Oo(),st.profile&&(J.stats.size=Mf(J.internalformat,J.type,W,K,!1,!1)),ie}return ie(R,nt),ie.subimage=io,ie.resize=T,ie._reglType="texture2d",ie._texture=J,st.profile&&(ie.stats=J.stats),ie.destroy=function(){J.decRef()},ie}function _o(R,nt,J,ie,io,T){var E=new Je(k1);rr[E.id]=E,tt.cubeCount++;var $=new Array(6);function W(I,H,L,P,A,U){var Z,ht=E.texInfo;for(tn.call(ht),Z=0;Z<6;++Z)$[Z]=po();if(typeof I=="number"||!I){var vt=I|0||1;for(Z=0;Z<6;++Z)oo($[Z],vt,vt)}else if(typeof I=="object")if(H)Ao($[0],I),Ao($[1],H),Ao($[2],L),Ao($[3],P),Ao($[4],A),Ao($[5],U);else if(Nn(ht,I),Ne(E,I),"faces"in I){var lt=I.faces;for(k(Array.isArray(lt)&&lt.length===6,"cube faces must be a length 6 array"),Z=0;Z<6;++Z)k(typeof lt[Z]=="object"&&!!lt[Z],"invalid input for cube map face"),Ut($[Z],E),Ao($[Z],lt[Z])}else for(Z=0;Z<6;++Z)Ao($[Z],I);else k.raise("invalid arguments to cube map");for(Ut(E,$[0]),C.npotTextureCube||k(Fp(E.width)&&Fp(E.height),"your browser does not support non power or two texture dimensions"),ht.genMipmaps?E.mipmask=($[0].width<<1)-1:E.mipmask=$[0].mipmask,k.textureCube(E,ht,$,C),E.internalformat=$[0].internalformat,W.width=$[0].width,W.height=$[0].height,vr(E),Z=0;Z<6;++Z)Ln($[Z],gf+Z);for(Fn(ht,k1),Oo(),st.profile&&(E.stats.size=Mf(E.internalformat,E.type,W.width,W.height,ht.genMipmaps,!0)),W.format=$t[E.internalformat],W.type=te[E.type],W.mag=wt[ht.magFilter],W.min=re[ht.minFilter],W.wrapS=St[ht.wrapS],W.wrapT=St[ht.wrapT],Z=0;Z<6;++Z)In($[Z]);return W}function K(I,H,L,P,A){k(!!H,"must specify image data"),k(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var U=L|0,Z=P|0,ht=A|0,vt=de();return Ut(vt,E),vt.width=0,vt.height=0,Ft(vt,H),vt.width=vt.width||(E.width>>ht)-U,vt.height=vt.height||(E.height>>ht)-Z,k(E.type===vt.type&&E.format===vt.format&&E.internalformat===vt.internalformat,"incompatible format for texture.subimage"),k(U>=0&&Z>=0&&U+vt.width<=E.width&&Z+vt.height<=E.height,"texture.subimage write out of bounds"),k(E.mipmask&1<<ht,"missing mipmap data"),k(vt.data||vt.element||vt.needsCopy,"missing image data"),vr(E),He(vt,gf+I,U,Z,ht),Oo(),so(vt),W}function q(I){var H=I|0;if(H!==E.width){W.width=E.width=H,W.height=E.height=H,vr(E);for(var L=0;L<6;++L)for(var P=0;E.mipmask>>P;++P)y.texImage2D(gf+L,P,E.format,H>>P,H>>P,0,E.format,E.type,null);return Oo(),st.profile&&(E.stats.size=Mf(E.internalformat,E.type,W.width,W.height,!1,!0)),W}}return W(R,nt,J,ie,io,T),W.subimage=K,W.resize=q,W._reglType="textureCube",W._texture=E,st.profile&&(W.stats=E.stats),W.destroy=function(){E.decRef()},W}function Sn(){for(var R=0;R<pr;++R)y.activeTexture(Wc+R),y.bindTexture(ra,null),kn[R]=null;i0(rr).forEach(Ce),tt.cubeCount=0,tt.textureCount=0}st.profile&&(tt.getTotalTextureSize=function(){var R=0;return Object.keys(rr).forEach(function(nt){R+=rr[nt].stats.size}),R});function sa(){for(var R=0;R<pr;++R){var nt=kn[R];nt&&(nt.bindCount=0,nt.unit=-1,kn[R]=null)}i0(rr).forEach(function(J){J.texture=y.createTexture(),y.bindTexture(J.target,J.texture);for(var ie=0;ie<32;++ie)if(J.mipmask&1<<ie)if(J.target===ra)y.texImage2D(ra,ie,J.internalformat,J.width>>ie,J.height>>ie,0,J.internalformat,J.type,null);else for(var io=0;io<6;++io)y.texImage2D(gf+io,ie,J.internalformat,J.width>>ie,J.height>>ie,0,J.internalformat,J.type,null);Fn(J.texInfo,J.target)})}function Is(){for(var R=0;R<pr;++R){var nt=kn[R];nt&&(nt.bindCount=0,nt.unit=-1,kn[R]=null),y.activeTexture(Wc+R),y.bindTexture(ra,null),y.bindTexture(k1,null)}}return{create2D:fo,createCube:_o,clear:Sn,getTexture:function(R){return null},restore:sa,refresh:Is}}var qa=36161,kf=32854,hv=32855,uv=36194,dv=33189,pv=36168,vv=34041,mv=35907,gv=34836,xv=34842,yv=34843,G0=[];G0[kf]=2,G0[hv]=2,G0[uv]=2,G0[dv]=2,G0[pv]=1,G0[vv]=4,G0[mv]=4,G0[gv]=16,G0[xv]=8,G0[yv]=6;function bv(y,z,C){return G0[y]*z*C}var ww=function(y,z,C,ot,pt){var tt={rgba4:kf,rgb565:uv,"rgb5 a1":hv,depth:dv,stencil:pv,"depth stencil":vv};z.ext_srgb&&(tt.srgba=mv),z.ext_color_buffer_half_float&&(tt.rgba16f=xv,tt.rgb16f=yv),z.webgl_color_buffer_float&&(tt.rgba32f=gv);var st=[];Object.keys(tt).forEach(function(Tt){var Gt=tt[Tt];st[Gt]=Tt});var At=0,Ot={};function It(Tt){this.id=At++,this.refCount=1,this.renderbuffer=Tt,this.format=kf,this.width=0,this.height=0,pt.profile&&(this.stats={size:0})}It.prototype.decRef=function(){--this.refCount<=0&&Ct(this)};function Ct(Tt){var Gt=Tt.renderbuffer;k(Gt,"must not double destroy renderbuffer"),y.bindRenderbuffer(qa,null),y.deleteRenderbuffer(Gt),Tt.renderbuffer=null,Tt.refCount=0,delete Ot[Tt.id],ot.renderbufferCount--}function Dt(Tt,Gt){var Y=new It(y.createRenderbuffer());Ot[Y.id]=Y,ot.renderbufferCount++;function it(te,wt){var re=0,St=0,Ht=kf;if(typeof te=="object"&&te){var _t=te;if("shape"in _t){var Ut=_t.shape;k(Array.isArray(Ut)&&Ut.length>=2,"invalid renderbuffer shape"),re=Ut[0]|0,St=Ut[1]|0}else"radius"in _t&&(re=St=_t.radius|0),"width"in _t&&(re=_t.width|0),"height"in _t&&(St=_t.height|0);"format"in _t&&(k.parameter(_t.format,tt,"invalid renderbuffer format"),Ht=tt[_t.format])}else typeof te=="number"?(re=te|0,typeof wt=="number"?St=wt|0:St=re):te?k.raise("invalid arguments to renderbuffer constructor"):re=St=1;if(k(re>0&&St>0&&re<=C.maxRenderbufferSize&&St<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(re===Y.width&&St===Y.height&&Ht===Y.format))return it.width=Y.width=re,it.height=Y.height=St,Y.format=Ht,y.bindRenderbuffer(qa,Y.renderbuffer),y.renderbufferStorage(qa,Ht,re,St),k(y.getError()===0,"invalid render buffer format"),pt.profile&&(Y.stats.size=bv(Y.format,Y.width,Y.height)),it.format=st[Y.format],it}function $t(te,wt){var re=te|0,St=wt|0||re;return re===Y.width&&St===Y.height||(k(re>0&&St>0&&re<=C.maxRenderbufferSize&&St<=C.maxRenderbufferSize,"invalid renderbuffer size"),it.width=Y.width=re,it.height=Y.height=St,y.bindRenderbuffer(qa,Y.renderbuffer),y.renderbufferStorage(qa,Y.format,re,St),k(y.getError()===0,"invalid render buffer format"),pt.profile&&(Y.stats.size=bv(Y.format,Y.width,Y.height))),it}return it(Tt,Gt),it.resize=$t,it._reglType="renderbuffer",it._renderbuffer=Y,pt.profile&&(it.stats=Y.stats),it.destroy=function(){Y.decRef()},it}pt.profile&&(ot.getTotalRenderbufferSize=function(){var Tt=0;return Object.keys(Ot).forEach(function(Gt){Tt+=Ot[Gt].stats.size}),Tt});function Xt(){i0(Ot).forEach(function(Tt){Tt.renderbuffer=y.createRenderbuffer(),y.bindRenderbuffer(qa,Tt.renderbuffer),y.renderbufferStorage(qa,Tt.format,Tt.width,Tt.height)}),y.bindRenderbuffer(qa,null)}return{create:Dt,clear:function(){i0(Ot).forEach(Ct)},restore:Xt}},xa=36160,G1=36161,Ns=3553,Sf=34069,wv=36064,_v=36096,Mv=36128,kv=33306,Sv=36053,_w=36054,Mw=36055,kw=36057,Sw=36061,Ew=36193,zw=5121,Aw=5126,Ev=6407,zv=6408,Tw=6402,Lw=[Ev,zv],H1=[];H1[zv]=4,H1[Ev]=3;var Ef=[];Ef[zw]=1,Ef[Aw]=4,Ef[Ew]=2;var Nw=32854,Rw=32855,Ow=36194,Cw=33189,Pw=36168,Av=34041,$w=35907,Iw=34836,Fw=34842,qw=34843,Dw=[Nw,Rw,Ow,$w,Fw,qw,Iw],zi={};zi[Sv]="complete",zi[_w]="incomplete attachment",zi[kw]="incomplete dimensions",zi[Mw]="incomplete, missing attachment",zi[Sw]="unsupported";function Gw(y,z,C,ot,pt,tt){var st={cur:null,next:null,dirty:!1,setFBO:null},At=["rgba"],Ot=["rgba4","rgb565","rgb5 a1"];z.ext_srgb&&Ot.push("srgba"),z.ext_color_buffer_half_float&&Ot.push("rgba16f","rgb16f"),z.webgl_color_buffer_float&&Ot.push("rgba32f");var It=["uint8"];z.oes_texture_half_float&&It.push("half float","float16"),z.oes_texture_float&&It.push("float","float32");function Ct(Yt,Ft,yt){this.target=Yt,this.texture=Ft,this.renderbuffer=yt;var He=0,Ze=0;Ft?(He=Ft.width,Ze=Ft.height):yt&&(He=yt.width,Ze=yt.height),this.width=He,this.height=Ze}function Dt(Yt){Yt&&(Yt.texture&&Yt.texture._texture.decRef(),Yt.renderbuffer&&Yt.renderbuffer._renderbuffer.decRef())}function Xt(Yt,Ft,yt){if(Yt)if(Yt.texture){var He=Yt.texture._texture,Ze=Math.max(1,He.width),de=Math.max(1,He.height);k(Ze===Ft&&de===yt,"inconsistent width/height for supplied texture"),He.refCount+=1}else{var so=Yt.renderbuffer._renderbuffer;k(so.width===Ft&&so.height===yt,"inconsistent width/height for renderbuffer"),so.refCount+=1}}function Tt(Yt,Ft){Ft&&(Ft.texture?y.framebufferTexture2D(xa,Yt,Ft.target,Ft.texture._texture.texture,0):y.framebufferRenderbuffer(xa,Yt,G1,Ft.renderbuffer._renderbuffer.renderbuffer))}function Gt(Yt){var Ft=Ns,yt=null,He=null,Ze=Yt;typeof Yt=="object"&&(Ze=Yt.data,"target"in Yt&&(Ft=Yt.target|0)),k.type(Ze,"function","invalid attachment data");var de=Ze._reglType;return de==="texture2d"?(yt=Ze,k(Ft===Ns)):de==="textureCube"?(yt=Ze,k(Ft>=Sf&&Ft<Sf+6,"invalid cube map target")):de==="renderbuffer"?(He=Ze,Ft=G1):k.raise("invalid regl object for attachment"),new Ct(Ft,yt,He)}function Y(Yt,Ft,yt,He,Ze){if(yt){var de=ot.create2D({width:Yt,height:Ft,format:He,type:Ze});return de._texture.refCount=0,new Ct(Ns,de,null)}else{var so=pt.create({width:Yt,height:Ft,format:He});return so._renderbuffer.refCount=0,new Ct(G1,null,so)}}function it(Yt){return Yt&&(Yt.texture||Yt.renderbuffer)}function $t(Yt,Ft,yt){Yt&&(Yt.texture?Yt.texture.resize(Ft,yt):Yt.renderbuffer&&Yt.renderbuffer.resize(Ft,yt),Yt.width=Ft,Yt.height=yt)}var te=0,wt={};function re(){this.id=te++,wt[this.id]=this,this.framebuffer=y.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function St(Yt){Yt.colorAttachments.forEach(Dt),Dt(Yt.depthAttachment),Dt(Yt.stencilAttachment),Dt(Yt.depthStencilAttachment)}function Ht(Yt){var Ft=Yt.framebuffer;k(Ft,"must not double destroy framebuffer"),y.deleteFramebuffer(Ft),Yt.framebuffer=null,tt.framebufferCount--,delete wt[Yt.id]}function _t(Yt){var Ft;y.bindFramebuffer(xa,Yt.framebuffer);var yt=Yt.colorAttachments;for(Ft=0;Ft<yt.length;++Ft)Tt(wv+Ft,yt[Ft]);for(Ft=yt.length;Ft<C.maxColorAttachments;++Ft)y.framebufferTexture2D(xa,wv+Ft,Ns,null,0);y.framebufferTexture2D(xa,kv,Ns,null,0),y.framebufferTexture2D(xa,_v,Ns,null,0),y.framebufferTexture2D(xa,Mv,Ns,null,0),Tt(_v,Yt.depthAttachment),Tt(Mv,Yt.stencilAttachment),Tt(kv,Yt.depthStencilAttachment);var He=y.checkFramebufferStatus(xa);!y.isContextLost()&&He!==Sv&&k.raise("framebuffer configuration not supported, status = "+zi[He]),y.bindFramebuffer(xa,st.next?st.next.framebuffer:null),st.cur=st.next,y.getError()}function Ut(Yt,Ft){var yt=new re;tt.framebufferCount++;function He(de,so){var Ve;k(st.next!==yt,"can not update framebuffer which is currently in use");var oo=0,Ao=0,Ln=!0,Vn=!0,po=null,In=!0,tn="rgba",Nn="uint8",Fn=1,qn=null,rr=null,pr=null,kn=!1;if(typeof de=="number")oo=de|0,Ao=so|0||oo;else if(!de)oo=Ao=1;else{k.type(de,"object","invalid arguments for framebuffer");var Je=de;if("shape"in Je){var vr=Je.shape;k(Array.isArray(vr)&&vr.length>=2,"invalid shape for framebuffer"),oo=vr[0],Ao=vr[1]}else"radius"in Je&&(oo=Ao=Je.radius),"width"in Je&&(oo=Je.width),"height"in Je&&(Ao=Je.height);("color"in Je||"colors"in Je)&&(po=Je.color||Je.colors,Array.isArray(po)&&k(po.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),po||("colorCount"in Je&&(Fn=Je.colorCount|0,k(Fn>0,"invalid color buffer count")),"colorTexture"in Je&&(In=!!Je.colorTexture,tn="rgba4"),"colorType"in Je&&(Nn=Je.colorType,In?(k(z.oes_texture_float||!(Nn==="float"||Nn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),k(z.oes_texture_half_float||!(Nn==="half float"||Nn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Nn==="half float"||Nn==="float16"?(k(z.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),tn="rgba16f"):(Nn==="float"||Nn==="float32")&&(k(z.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),tn="rgba32f"),k.oneOf(Nn,It,"invalid color type")),"colorFormat"in Je&&(tn=Je.colorFormat,At.indexOf(tn)>=0?In=!0:Ot.indexOf(tn)>=0?In=!1:In?k.oneOf(Je.colorFormat,At,"invalid color format for texture"):k.oneOf(Je.colorFormat,Ot,"invalid color format for renderbuffer"))),("depthTexture"in Je||"depthStencilTexture"in Je)&&(kn=!!(Je.depthTexture||Je.depthStencilTexture),k(!kn||z.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Je&&(typeof Je.depth=="boolean"?Ln=Je.depth:(qn=Je.depth,Vn=!1)),"stencil"in Je&&(typeof Je.stencil=="boolean"?Vn=Je.stencil:(rr=Je.stencil,Ln=!1)),"depthStencil"in Je&&(typeof Je.depthStencil=="boolean"?Ln=Vn=Je.depthStencil:(pr=Je.depthStencil,Ln=!1,Vn=!1))}var Oo=null,Ce=null,fo=null,_o=null;if(Array.isArray(po))Oo=po.map(Gt);else if(po)Oo=[Gt(po)];else for(Oo=new Array(Fn),Ve=0;Ve<Fn;++Ve)Oo[Ve]=Y(oo,Ao,In,tn,Nn);k(z.webgl_draw_buffers||Oo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),k(Oo.length<=C.maxColorAttachments,"too many color attachments, not supported"),oo=oo||Oo[0].width,Ao=Ao||Oo[0].height,qn?Ce=Gt(qn):Ln&&!Vn&&(Ce=Y(oo,Ao,kn,"depth","uint32")),rr?fo=Gt(rr):Vn&&!Ln&&(fo=Y(oo,Ao,!1,"stencil","uint8")),pr?_o=Gt(pr):!qn&&!rr&&Vn&&Ln&&(_o=Y(oo,Ao,kn,"depth stencil","depth stencil")),k(!!qn+!!rr+!!pr<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var Sn=null;for(Ve=0;Ve<Oo.length;++Ve)if(Xt(Oo[Ve],oo,Ao),k(!Oo[Ve]||Oo[Ve].texture&&Lw.indexOf(Oo[Ve].texture._texture.format)>=0||Oo[Ve].renderbuffer&&Dw.indexOf(Oo[Ve].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Ve+" is invalid"),Oo[Ve]&&Oo[Ve].texture){var sa=H1[Oo[Ve].texture._texture.format]*Ef[Oo[Ve].texture._texture.type];Sn===null?Sn=sa:k(Sn===sa,"all color attachments much have the same number of bits per pixel.")}return Xt(Ce,oo,Ao),k(!Ce||Ce.texture&&Ce.texture._texture.format===Tw||Ce.renderbuffer&&Ce.renderbuffer._renderbuffer.format===Cw,"invalid depth attachment for framebuffer object"),Xt(fo,oo,Ao),k(!fo||fo.renderbuffer&&fo.renderbuffer._renderbuffer.format===Pw,"invalid stencil attachment for framebuffer object"),Xt(_o,oo,Ao),k(!_o||_o.texture&&_o.texture._texture.format===Av||_o.renderbuffer&&_o.renderbuffer._renderbuffer.format===Av,"invalid depth-stencil attachment for framebuffer object"),St(yt),yt.width=oo,yt.height=Ao,yt.colorAttachments=Oo,yt.depthAttachment=Ce,yt.stencilAttachment=fo,yt.depthStencilAttachment=_o,He.color=Oo.map(it),He.depth=it(Ce),He.stencil=it(fo),He.depthStencil=it(_o),He.width=yt.width,He.height=yt.height,_t(yt),He}function Ze(de,so){k(st.next!==yt,"can not resize a framebuffer which is currently in use");var Ve=Math.max(de|0,1),oo=Math.max(so|0||Ve,1);if(Ve===yt.width&&oo===yt.height)return He;for(var Ao=yt.colorAttachments,Ln=0;Ln<Ao.length;++Ln)$t(Ao[Ln],Ve,oo);return $t(yt.depthAttachment,Ve,oo),$t(yt.stencilAttachment,Ve,oo),$t(yt.depthStencilAttachment,Ve,oo),yt.width=He.width=Ve,yt.height=He.height=oo,_t(yt),He}return He(Yt,Ft),e(He,{resize:Ze,_reglType:"framebuffer",_framebuffer:yt,destroy:function(){Ht(yt),St(yt)},use:function(de){st.setFBO({framebuffer:He},de)}})}function Ne(Yt){var Ft=Array(6);function yt(Ze){var de;k(Ft.indexOf(st.next)<0,"can not update framebuffer which is currently in use");var so={color:null},Ve=0,oo=null,Ao="rgba",Ln="uint8",Vn=1;if(typeof Ze=="number")Ve=Ze|0;else if(!Ze)Ve=1;else{k.type(Ze,"object","invalid arguments for framebuffer");var po=Ze;if("shape"in po){var In=po.shape;k(Array.isArray(In)&&In.length>=2,"invalid shape for framebuffer"),k(In[0]===In[1],"cube framebuffer must be square"),Ve=In[0]}else"radius"in po&&(Ve=po.radius|0),"width"in po?(Ve=po.width|0,"height"in po&&k(po.height===Ve,"must be square")):"height"in po&&(Ve=po.height|0);("color"in po||"colors"in po)&&(oo=po.color||po.colors,Array.isArray(oo)&&k(oo.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),oo||("colorCount"in po&&(Vn=po.colorCount|0,k(Vn>0,"invalid color buffer count")),"colorType"in po&&(k.oneOf(po.colorType,It,"invalid color type"),Ln=po.colorType),"colorFormat"in po&&(Ao=po.colorFormat,k.oneOf(po.colorFormat,At,"invalid color format for texture"))),"depth"in po&&(so.depth=po.depth),"stencil"in po&&(so.stencil=po.stencil),"depthStencil"in po&&(so.depthStencil=po.depthStencil)}var tn;if(oo)if(Array.isArray(oo))for(tn=[],de=0;de<oo.length;++de)tn[de]=oo[de];else tn=[oo];else{tn=Array(Vn);var Nn={radius:Ve,format:Ao,type:Ln};for(de=0;de<Vn;++de)tn[de]=ot.createCube(Nn)}for(so.color=Array(tn.length),de=0;de<tn.length;++de){var Fn=tn[de];k(typeof Fn=="function"&&Fn._reglType==="textureCube","invalid cube map"),Ve=Ve||Fn.width,k(Fn.width===Ve&&Fn.height===Ve,"invalid cube map shape"),so.color[de]={target:Sf,data:tn[de]}}for(de=0;de<6;++de){for(var qn=0;qn<tn.length;++qn)so.color[qn].target=Sf+de;de>0&&(so.depth=Ft[0].depth,so.stencil=Ft[0].stencil,so.depthStencil=Ft[0].depthStencil),Ft[de]?Ft[de](so):Ft[de]=Ut(so)}return e(yt,{width:Ve,height:Ve,color:tn})}function He(Ze){var de,so=Ze|0;if(k(so>0&&so<=C.maxCubeMapSize,"invalid radius for cube fbo"),so===yt.width)return yt;var Ve=yt.color;for(de=0;de<Ve.length;++de)Ve[de].resize(so);for(de=0;de<6;++de)Ft[de].resize(so);return yt.width=yt.height=so,yt}return yt(Yt),e(yt,{faces:Ft,resize:He,_reglType:"framebufferCube",destroy:function(){Ft.forEach(function(Ze){Ze.destroy()})}})}function je(){st.cur=null,st.next=null,st.dirty=!0,i0(wt).forEach(function(Yt){Yt.framebuffer=y.createFramebuffer(),_t(Yt)})}return e(st,{getFramebuffer:function(Yt){if(typeof Yt=="function"&&Yt._reglType==="framebuffer"){var Ft=Yt._framebuffer;if(Ft instanceof re)return Ft}return null},create:Ut,createCube:Ne,clear:function(){i0(wt).forEach(Ht)},restore:je})}var Hw=5126,Tv=34962;function U1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Hw,this.offset=0,this.stride=0,this.divisor=0}function Uw(y,z,C,ot,pt){for(var tt=C.maxAttributes,st=new Array(tt),At=0;At<tt;++At)st[At]=new U1;var Ot=0,It={},Ct={Record:U1,scope:{},state:st,currentVAO:null,targetVAO:null,restore:Xt()?wt:function(){},createVAO:re,getVAO:Gt,destroyBuffer:Dt,setVAO:Xt()?Y:it,clear:Xt()?$t:function(){}};function Dt(St){for(var Ht=0;Ht<st.length;++Ht){var _t=st[Ht];_t.buffer===St&&(y.disableVertexAttribArray(Ht),_t.buffer=null)}}function Xt(){return z.oes_vertex_array_object}function Tt(){return z.angle_instanced_arrays}function Gt(St){return typeof St=="function"&&St._vao?St._vao:null}function Y(St){if(St!==Ct.currentVAO){var Ht=Xt();St?Ht.bindVertexArrayOES(St.vao):Ht.bindVertexArrayOES(null),Ct.currentVAO=St}}function it(St){if(St!==Ct.currentVAO){if(St)St.bindAttrs();else for(var Ht=Tt(),_t=0;_t<st.length;++_t){var Ut=st[_t];Ut.buffer?(y.enableVertexAttribArray(_t),y.vertexAttribPointer(_t,Ut.size,Ut.type,Ut.normalized,Ut.stride,Ut.offfset),Ht&&Ut.divisor&&Ht.vertexAttribDivisorANGLE(_t,Ut.divisor)):(y.disableVertexAttribArray(_t),y.vertexAttrib4f(_t,Ut.x,Ut.y,Ut.z,Ut.w))}Ct.currentVAO=St}}function $t(){i0(It).forEach(function(St){St.destroy()})}function te(){this.id=++Ot,this.attributes=[];var St=Xt();St?this.vao=St.createVertexArrayOES():this.vao=null,It[this.id]=this,this.buffers=[]}te.prototype.bindAttrs=function(){for(var St=Tt(),Ht=this.attributes,_t=0;_t<Ht.length;++_t){var Ut=Ht[_t];Ut.buffer?(y.enableVertexAttribArray(_t),y.bindBuffer(Tv,Ut.buffer.buffer),y.vertexAttribPointer(_t,Ut.size,Ut.type,Ut.normalized,Ut.stride,Ut.offset),St&&Ut.divisor&&St.vertexAttribDivisorANGLE(_t,Ut.divisor)):(y.disableVertexAttribArray(_t),y.vertexAttrib4f(_t,Ut.x,Ut.y,Ut.z,Ut.w))}for(var Ne=Ht.length;Ne<tt;++Ne)y.disableVertexAttribArray(Ne)},te.prototype.refresh=function(){var St=Xt();St&&(St.bindVertexArrayOES(this.vao),this.bindAttrs(),Ct.currentVAO=this)},te.prototype.destroy=function(){if(this.vao){var St=Xt();this===Ct.currentVAO&&(Ct.currentVAO=null,St.bindVertexArrayOES(null)),St.deleteVertexArrayOES(this.vao),this.vao=null}It[this.id]&&(delete It[this.id],ot.vaoCount-=1)};function wt(){var St=Xt();St&&i0(It).forEach(function(Ht){Ht.refresh()})}function re(St){var Ht=new te;ot.vaoCount+=1;function _t(Ut){k(Array.isArray(Ut),"arguments to vertex array constructor must be an array"),k(Ut.length<tt,"too many attributes"),k(Ut.length>0,"must specify at least one attribute");var Ne={},je=Ht.attributes;je.length=Ut.length;for(var Yt=0;Yt<Ut.length;++Yt){var Ft=Ut[Yt],yt=je[Yt]=new U1,He=Ft.data||Ft;if(Array.isArray(He)||t(He)||D0(He)){var Ze;Ht.buffers[Yt]&&(Ze=Ht.buffers[Yt],t(He)&&Ze._buffer.byteLength>=He.byteLength?Ze.subdata(He):(Ze.destroy(),Ht.buffers[Yt]=null)),Ht.buffers[Yt]||(Ze=Ht.buffers[Yt]=pt.create(Ft,Tv,!1,!0)),yt.buffer=pt.getBuffer(Ze),yt.size=yt.buffer.dimension|0,yt.normalized=!1,yt.type=yt.buffer.dtype,yt.offset=0,yt.stride=0,yt.divisor=0,yt.state=1,Ne[Yt]=1}else pt.getBuffer(Ft)?(yt.buffer=pt.getBuffer(Ft),yt.size=yt.buffer.dimension|0,yt.normalized=!1,yt.type=yt.buffer.dtype,yt.offset=0,yt.stride=0,yt.divisor=0,yt.state=1):pt.getBuffer(Ft.buffer)?(yt.buffer=pt.getBuffer(Ft.buffer),yt.size=(+Ft.size||yt.buffer.dimension)|0,yt.normalized=!!Ft.normalized||!1,"type"in Ft?(k.parameter(Ft.type,zs,"invalid buffer type"),yt.type=zs[Ft.type]):yt.type=yt.buffer.dtype,yt.offset=(Ft.offset||0)|0,yt.stride=(Ft.stride||0)|0,yt.divisor=(Ft.divisor||0)|0,yt.state=1,k(yt.size>=1&&yt.size<=4,"size must be between 1 and 4"),k(yt.offset>=0,"invalid offset"),k(yt.stride>=0&&yt.stride<=255,"stride must be between 0 and 255"),k(yt.divisor>=0,"divisor must be positive"),k(!yt.divisor||!!z.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Ft?(k(Yt>0,"first attribute must not be a constant"),yt.x=+Ft.x||0,yt.y=+Ft.y||0,yt.z=+Ft.z||0,yt.w=+Ft.w||0,yt.state=2):k(!1,"invalid attribute spec for location "+Yt)}for(var de=0;de<Ht.buffers.length;++de)!Ne[de]&&Ht.buffers[de]&&(Ht.buffers[de].destroy(),Ht.buffers[de]=null);return Ht.refresh(),_t}return _t.destroy=function(){for(var Ut=0;Ut<Ht.buffers.length;++Ut)Ht.buffers[Ut]&&Ht.buffers[Ut].destroy();Ht.buffers.length=0,Ht.destroy()},_t._vao=Ht,_t._reglType="vao",_t(St)}return Ct}var Lv=35632,Bw=35633,jw=35718,Ww=35721;function Vw(y,z,C,ot){var pt={},tt={};function st(Y,it,$t,te){this.name=Y,this.id=it,this.location=$t,this.info=te}function At(Y,it){for(var $t=0;$t<Y.length;++$t)if(Y[$t].id===it.id){Y[$t].location=it.location;return}Y.push(it)}function Ot(Y,it,$t){var te=Y===Lv?pt:tt,wt=te[it];if(!wt){var re=z.str(it);wt=y.createShader(Y),y.shaderSource(wt,re),y.compileShader(wt),k.shaderError(y,wt,re,Y,$t),te[it]=wt}return wt}var It={},Ct=[],Dt=0;function Xt(Y,it){this.id=Dt++,this.fragId=Y,this.vertId=it,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,ot.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Tt(Y,it,$t){var te,wt,re=Ot(Lv,Y.fragId),St=Ot(Bw,Y.vertId),Ht=Y.program=y.createProgram();if(y.attachShader(Ht,re),y.attachShader(Ht,St),$t)for(te=0;te<$t.length;++te){var _t=$t[te];y.bindAttribLocation(Ht,_t[0],_t[1])}y.linkProgram(Ht),k.linkError(y,Ht,z.str(Y.fragId),z.str(Y.vertId),it);var Ut=y.getProgramParameter(Ht,jw);ot.profile&&(Y.stats.uniformsCount=Ut);var Ne=Y.uniforms;for(te=0;te<Ut;++te)if(wt=y.getActiveUniform(Ht,te),wt)if(wt.size>1)for(var je=0;je<wt.size;++je){var Yt=wt.name.replace("[0]","["+je+"]");At(Ne,new st(Yt,z.id(Yt),y.getUniformLocation(Ht,Yt),wt))}else At(Ne,new st(wt.name,z.id(wt.name),y.getUniformLocation(Ht,wt.name),wt));var Ft=y.getProgramParameter(Ht,Ww);ot.profile&&(Y.stats.attributesCount=Ft);var yt=Y.attributes;for(te=0;te<Ft;++te)wt=y.getActiveAttrib(Ht,te),wt&&At(yt,new st(wt.name,z.id(wt.name),y.getAttribLocation(Ht,wt.name),wt))}ot.profile&&(C.getMaxUniformsCount=function(){var Y=0;return Ct.forEach(function(it){it.stats.uniformsCount>Y&&(Y=it.stats.uniformsCount)}),Y},C.getMaxAttributesCount=function(){var Y=0;return Ct.forEach(function(it){it.stats.attributesCount>Y&&(Y=it.stats.attributesCount)}),Y});function Gt(){pt={},tt={};for(var Y=0;Y<Ct.length;++Y)Tt(Ct[Y],null,Ct[Y].attributes.map(function(it){return[it.location,it.name]}))}return{clear:function(){var Y=y.deleteShader.bind(y);i0(pt).forEach(Y),pt={},i0(tt).forEach(Y),tt={},Ct.forEach(function(it){y.deleteProgram(it.program)}),Ct.length=0,It={},C.shaderCount=0},program:function(Y,it,$t,te){k.command(Y>=0,"missing vertex shader",$t),k.command(it>=0,"missing fragment shader",$t);var wt=It[it];wt||(wt=It[it]={});var re=wt[Y];if(re&&(re.refCount++,!te))return re;var St=new Xt(it,Y);return C.shaderCount++,Tt(St,$t,te),re||(wt[Y]=St),Ct.push(St),e(St,{destroy:function(){if(St.refCount--,St.refCount<=0){y.deleteProgram(St.program);var Ht=Ct.indexOf(St);Ct.splice(Ht,1),C.shaderCount--}wt[St.vertId].refCount<=0&&(y.deleteShader(tt[St.vertId]),delete tt[St.vertId],delete It[St.fragId][St.vertId]),Object.keys(It[St.fragId]).length||(y.deleteShader(pt[St.fragId]),delete pt[St.fragId],delete It[St.fragId])}})},restore:Gt,shader:Ot,frag:-1,vert:-1}}var Xw=6408,Vc=5121,Yw=3333,zf=5126;function Kw(y,z,C,ot,pt,tt,st){function At(Ct){var Dt;z.next===null?(k(pt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Dt=Vc):(k(z.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Dt=z.next.colorAttachments[0].texture._texture.type,tt.oes_texture_float?(k(Dt===Vc||Dt===zf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Dt===zf&&k(st.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):k(Dt===Vc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Xt=0,Tt=0,Gt=ot.framebufferWidth,Y=ot.framebufferHeight,it=null;t(Ct)?it=Ct:Ct&&(k.type(Ct,"object","invalid arguments to regl.read()"),Xt=Ct.x|0,Tt=Ct.y|0,k(Xt>=0&&Xt<ot.framebufferWidth,"invalid x offset for regl.read"),k(Tt>=0&&Tt<ot.framebufferHeight,"invalid y offset for regl.read"),Gt=(Ct.width||ot.framebufferWidth-Xt)|0,Y=(Ct.height||ot.framebufferHeight-Tt)|0,it=Ct.data||null),it&&(Dt===Vc?k(it instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Dt===zf&&k(it instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),k(Gt>0&&Gt+Xt<=ot.framebufferWidth,"invalid width for read pixels"),k(Y>0&&Y+Tt<=ot.framebufferHeight,"invalid height for read pixels"),C();var $t=Gt*Y*4;return it||(Dt===Vc?it=new Uint8Array($t):Dt===zf&&(it=it||new Float32Array($t))),k.isTypedArray(it,"data buffer for regl.read() must be a typedarray"),k(it.byteLength>=$t,"data buffer for regl.read() too small"),y.pixelStorei(Yw,4),y.readPixels(Xt,Tt,Gt,Y,Xw,Dt,it),it}function Ot(Ct){var Dt;return z.setFBO({framebuffer:Ct.framebuffer},function(){Dt=At(Ct)}),Dt}function It(Ct){return!Ct||!("framebuffer"in Ct)?At(Ct):Ot(Ct)}return It}function Ai(y){return Array.prototype.slice.call(y)}function Ti(y){return Ai(y).join("")}function Qw(){var y=0,z=[],C=[];function ot(Dt){for(var Xt=0;Xt<C.length;++Xt)if(C[Xt]===Dt)return z[Xt];var Tt="g"+y++;return z.push(Tt),C.push(Dt),Tt}function pt(){var Dt=[];function Xt(){Dt.push.apply(Dt,Ai(arguments))}var Tt=[];function Gt(){var Y="v"+y++;return Tt.push(Y),arguments.length>0&&(Dt.push(Y,"="),Dt.push.apply(Dt,Ai(arguments)),Dt.push(";")),Y}return e(Xt,{def:Gt,toString:function(){return Ti([Tt.length>0?"var "+Tt.join(",")+";":"",Ti(Dt)])}})}function tt(){var Dt=pt(),Xt=pt(),Tt=Dt.toString,Gt=Xt.toString;function Y(it,$t){Xt(it,$t,"=",Dt.def(it,$t),";")}return e(function(){Dt.apply(Dt,Ai(arguments))},{def:Dt.def,entry:Dt,exit:Xt,save:Y,set:function(it,$t,te){Y(it,$t),Dt(it,$t,"=",te,";")},toString:function(){return Tt()+Gt()}})}function st(){var Dt=Ti(arguments),Xt=tt(),Tt=tt(),Gt=Xt.toString,Y=Tt.toString;return e(Xt,{then:function(){return Xt.apply(Xt,Ai(arguments)),this},else:function(){return Tt.apply(Tt,Ai(arguments)),this},toString:function(){var it=Y();return it&&(it="else{"+it+"}"),Ti(["if(",Dt,"){",Gt(),"}",it])}})}var At=pt(),Ot={};function It(Dt,Xt){var Tt=[];function Gt(){var wt="a"+Tt.length;return Tt.push(wt),wt}Xt=Xt||0;for(var Y=0;Y<Xt;++Y)Gt();var it=tt(),$t=it.toString,te=Ot[Dt]=e(it,{arg:Gt,toString:function(){return Ti(["function(",Tt.join(),"){",$t(),"}"])}});return te}function Ct(){var Dt=['"use strict";',At,"return {"];Object.keys(Ot).forEach(function(Gt){Dt.push('"',Gt,'":',Ot[Gt].toString(),",")}),Dt.push("}");var Xt=Ti(Dt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Tt=Function.apply(null,z.concat(Xt));return Tt.apply(null,C)}return{global:At,link:ot,block:pt,proc:It,scope:tt,cond:st,compile:Ct}}var Li="xyzw".split(""),Nv=5121,Ni=1,B1=2,j1=0,W1=1,V1=2,X1=3,Af=4,Rv=5,Ov=6,Cv="dither",Pv="blend.enable",$v="blend.color",Y1="blend.equation",K1="blend.func",Iv="depth.enable",Fv="depth.func",qv="depth.range",Dv="depth.mask",Q1="colorMask",Gv="cull.enable",Hv="cull.face",Z1="frontFace",J1="lineWidth",Uv="polygonOffset.enable",tu="polygonOffset.offset",Bv="sample.alpha",jv="sample.enable",eu="sample.coverage",Wv="stencil.enable",Vv="stencil.mask",ou="stencil.func",nu="stencil.opFront",Xc="stencil.opBack",Xv="scissor.enable",Tf="scissor.box",ya="viewport",Yc="profile",Rs="framebuffer",Kc="vert",Qc="frag",Os="elements",Cs="primitive",Ps="count",Lf="offset",Nf="instances",Zc="vao",ru="Width",au="Height",Ri=Rs+ru,Oi=Rs+au,Zw=ya+ru,Jw=ya+au,Yv="drawingBuffer",Kv=Yv+ru,Qv=Yv+au,t4=[K1,Y1,ou,nu,Xc,eu,ya,Tf,tu],Ci=34962,e4=34963,o4=35632,n4=35633,Zv=3553,r4=34067,a4=2884,s4=3042,i4=3024,c4=2960,l4=2929,f4=3089,h4=32823,u4=32926,d4=32928,su=5126,Rf=35664,Of=35665,Cf=35666,iu=5124,Pf=35667,$f=35668,If=35669,cu=35670,Ff=35671,qf=35672,Df=35673,Jc=35674,tl=35675,el=35676,ol=35678,nl=35680,Jv=4,rl=1028,$s=1029,tm=2304,lu=2305,p4=32775,v4=32776,m4=519,Da=7680,em=0,om=1,nm=32774,g4=513,rm=36160,x4=36064,aa={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},am=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Pi={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ga={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},sm={frag:o4,vert:n4},fu={cw:tm,ccw:lu};function Gf(y){return Array.isArray(y)||t(y)||D0(y)}function im(y){return y.sort(function(z,C){return z===ya?-1:C===ya?1:z<C?-1:1})}function Cr(y,z,C,ot){this.thisDep=y,this.contextDep=z,this.propDep=C,this.append=ot}function Ha(y){return y&&!(y.thisDep||y.contextDep||y.propDep)}function Tn(y){return new Cr(!1,!1,!1,y)}function Kr(y,z){var C=y.type;if(C===j1){var ot=y.data.length;return new Cr(!0,ot>=1,ot>=2,z)}else if(C===Af){var pt=y.data;return new Cr(pt.thisDep,pt.contextDep,pt.propDep,z)}else{if(C===Rv)return new Cr(!1,!1,!1,z);if(C===Ov){for(var tt=!1,st=!1,At=!1,Ot=0;Ot<y.data.length;++Ot){var It=y.data[Ot];if(It.type===W1)At=!0;else if(It.type===V1)st=!0;else if(It.type===X1)tt=!0;else if(It.type===j1){tt=!0;var Ct=It.data;Ct>=1&&(st=!0),Ct>=2&&(At=!0)}else It.type===Af&&(tt=tt||It.data.thisDep,st=st||It.data.contextDep,At=At||It.data.propDep)}return new Cr(tt,st,At,z)}else return new Cr(C===X1,C===V1,C===W1,z)}}var cm=new Cr(!1,!1,!1,function(){});function y4(y,z,C,ot,pt,tt,st,At,Ot,It,Ct,Dt,Xt,Tt,Gt){var Y=It.Record,it={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(it.min=p4,it.max=v4);var $t=C.angle_instanced_arrays,te=C.webgl_draw_buffers,wt={dirty:!0,profile:Gt.profile},re={},St=[],Ht={},_t={};function Ut(T){return T.replace(".","_")}function Ne(T,E,$){var W=Ut(T);St.push(T),re[W]=wt[W]=!!$,Ht[W]=E}function je(T,E,$){var W=Ut(T);St.push(T),Array.isArray($)?(wt[W]=$.slice(),re[W]=$.slice()):wt[W]=re[W]=$,_t[W]=E}Ne(Cv,i4),Ne(Pv,s4),je($v,"blendColor",[0,0,0,0]),je(Y1,"blendEquationSeparate",[nm,nm]),je(K1,"blendFuncSeparate",[om,em,om,em]),Ne(Iv,l4,!0),je(Fv,"depthFunc",g4),je(qv,"depthRange",[0,1]),je(Dv,"depthMask",!0),je(Q1,Q1,[!0,!0,!0,!0]),Ne(Gv,a4),je(Hv,"cullFace",$s),je(Z1,Z1,lu),je(J1,J1,1),Ne(Uv,h4),je(tu,"polygonOffset",[0,0]),Ne(Bv,u4),Ne(jv,d4),je(eu,"sampleCoverage",[1,!1]),Ne(Wv,c4),je(Vv,"stencilMask",-1),je(ou,"stencilFunc",[m4,0,-1]),je(nu,"stencilOpSeparate",[rl,Da,Da,Da]),je(Xc,"stencilOpSeparate",[$s,Da,Da,Da]),Ne(Xv,f4),je(Tf,"scissor",[0,0,y.drawingBufferWidth,y.drawingBufferHeight]),je(ya,ya,[0,0,y.drawingBufferWidth,y.drawingBufferHeight]);var Yt={gl:y,context:Xt,strings:z,next:re,current:wt,draw:Dt,elements:tt,buffer:pt,shader:Ct,attributes:It.state,vao:It,uniforms:Ot,framebuffer:At,extensions:C,timer:Tt,isBufferArgs:Gf},Ft={primTypes:bi,compareFuncs:Pi,blendFuncs:aa,blendEquations:it,stencilOps:Ga,glTypes:zs,orientationType:fu};k.optional(function(){Yt.isArrayLike=Mn}),te&&(Ft.backBuffer=[$s],Ft.drawBuffer=no(ot.maxDrawbuffers,function(T){return T===0?[0]:no(T,function(E){return x4+E})}));var yt=0;function He(){var T=Qw(),E=T.link,$=T.global;T.id=yt++,T.batchId="0";var W=E(Yt),K=T.shared={props:"a0"};Object.keys(Yt).forEach(function(P){K[P]=$.def(W,".",P)}),k.optional(function(){T.CHECK=E(k),T.commandStr=k.guessCommand(),T.command=E(T.commandStr),T.assert=function(P,A,U){P("if(!(",A,"))",this.CHECK,".commandRaise(",E(U),",",this.command,");")},Ft.invalidBlendCombinations=am});var q=T.next={},I=T.current={};Object.keys(_t).forEach(function(P){Array.isArray(wt[P])&&(q[P]=$.def(K.next,".",P),I[P]=$.def(K.current,".",P))});var H=T.constants={};Object.keys(Ft).forEach(function(P){H[P]=$.def(JSON.stringify(Ft[P]))}),T.invoke=function(P,A){switch(A.type){case j1:var U=["this",K.context,K.props,T.batchId];return P.def(E(A.data),".call(",U.slice(0,Math.max(A.data.length+1,4)),")");case W1:return P.def(K.props,A.data);case V1:return P.def(K.context,A.data);case X1:return P.def("this",A.data);case Af:return A.data.append(T,P),A.data.ref;case Rv:return A.data.toString();case Ov:return A.data.map(function(Z){return T.invoke(P,Z)})}},T.attribCache={};var L={};return T.scopeAttrib=function(P){var A=z.id(P);if(A in L)return L[A];var U=It.scope[A];U||(U=It.scope[A]=new Y);var Z=L[A]=E(U);return Z},T}function Ze(T){var E=T.static,$=T.dynamic,W;if(Yc in E){var K=!!E[Yc];W=Tn(function(I,H){return K}),W.enable=K}else if(Yc in $){var q=$[Yc];W=Kr(q,function(I,H){return I.invoke(H,q)})}return W}function de(T,E){var $=T.static,W=T.dynamic;if(Rs in $){var K=$[Rs];return K?(K=At.getFramebuffer(K),k.command(K,"invalid framebuffer object"),Tn(function(I,H){var L=I.link(K),P=I.shared;H.set(P.framebuffer,".next",L);var A=P.context;return H.set(A,"."+Ri,L+".width"),H.set(A,"."+Oi,L+".height"),L})):Tn(function(I,H){var L=I.shared;H.set(L.framebuffer,".next","null");var P=L.context;return H.set(P,"."+Ri,P+"."+Kv),H.set(P,"."+Oi,P+"."+Qv),"null"})}else if(Rs in W){var q=W[Rs];return Kr(q,function(I,H){var L=I.invoke(H,q),P=I.shared,A=P.framebuffer,U=H.def(A,".getFramebuffer(",L,")");k.optional(function(){I.assert(H,"!"+L+"||"+U,"invalid framebuffer object")}),H.set(A,".next",U);var Z=P.context;return H.set(Z,"."+Ri,U+"?"+U+".width:"+Z+"."+Kv),H.set(Z,"."+Oi,U+"?"+U+".height:"+Z+"."+Qv),U})}else return null}function so(T,E,$){var W=T.static,K=T.dynamic;function q(L){if(L in W){var P=W[L];k.commandType(P,"object","invalid "+L,$.commandStr);var A=!0,U=P.x|0,Z=P.y|0,ht,vt;return"width"in P?(ht=P.width|0,k.command(ht>=0,"invalid "+L,$.commandStr)):A=!1,"height"in P?(vt=P.height|0,k.command(vt>=0,"invalid "+L,$.commandStr)):A=!1,new Cr(!A&&E&&E.thisDep,!A&&E&&E.contextDep,!A&&E&&E.propDep,function(Me,to){var pe=Me.shared.context,Pe=ht;"width"in P||(Pe=to.def(pe,".",Ri,"-",U));var Xe=vt;return"height"in P||(Xe=to.def(pe,".",Oi,"-",Z)),[U,Z,Pe,Xe]})}else if(L in K){var lt=K[L],Pt=Kr(lt,function(Me,to){var pe=Me.invoke(to,lt);k.optional(function(){Me.assert(to,pe+"&&typeof "+pe+'==="object"',"invalid "+L)});var Pe=Me.shared.context,Xe=to.def(pe,".x|0"),To=to.def(pe,".y|0"),xn=to.def('"width" in ',pe,"?",pe,".width|0:","(",Pe,".",Ri,"-",Xe,")"),Pr=to.def('"height" in ',pe,"?",pe,".height|0:","(",Pe,".",Oi,"-",To,")");return k.optional(function(){Me.assert(to,xn+">=0&&"+Pr+">=0","invalid "+L)}),[Xe,To,xn,Pr]});return E&&(Pt.thisDep=Pt.thisDep||E.thisDep,Pt.contextDep=Pt.contextDep||E.contextDep,Pt.propDep=Pt.propDep||E.propDep),Pt}else return E?new Cr(E.thisDep,E.contextDep,E.propDep,function(Me,to){var pe=Me.shared.context;return[0,0,to.def(pe,".",Ri),to.def(pe,".",Oi)]}):null}var I=q(ya);if(I){var H=I;I=new Cr(I.thisDep,I.contextDep,I.propDep,function(L,P){var A=H.append(L,P),U=L.shared.context;return P.set(U,"."+Zw,A[2]),P.set(U,"."+Jw,A[3]),A})}return{viewport:I,scissor_box:q(Tf)}}function Ve(T,E){var $=T.static,W=typeof $[Qc]=="string"&&typeof $[Kc]=="string";if(W){if(Object.keys(E.dynamic).length>0)return null;var K=E.static,q=Object.keys(K);if(q.length>0&&typeof K[q[0]]=="number"){for(var I=[],H=0;H<q.length;++H)k(typeof K[q[H]]=="number","must specify all vertex attribute locations when using vaos"),I.push([K[q[H]]|0,q[H]]);return I}}return null}function oo(T,E,$){var W=T.static,K=T.dynamic;function q(A){if(A in W){var U=z.id(W[A]);k.optional(function(){Ct.shader(sm[A],U,k.guessCommand())});var Z=Tn(function(){return U});return Z.id=U,Z}else if(A in K){var ht=K[A];return Kr(ht,function(vt,lt){var Pt=vt.invoke(lt,ht),Me=lt.def(vt.shared.strings,".id(",Pt,")");return k.optional(function(){lt(vt.shared.shader,".shader(",sm[A],",",Me,",",vt.command,");")}),Me})}return null}var I=q(Qc),H=q(Kc),L=null,P;return Ha(I)&&Ha(H)?(L=Ct.program(H.id,I.id,null,$),P=Tn(function(A,U){return A.link(L)})):P=new Cr(I&&I.thisDep||H&&H.thisDep,I&&I.contextDep||H&&H.contextDep,I&&I.propDep||H&&H.propDep,function(A,U){var Z=A.shared.shader,ht;I?ht=I.append(A,U):ht=U.def(Z,".",Qc);var vt;H?vt=H.append(A,U):vt=U.def(Z,".",Kc);var lt=Z+".program("+vt+","+ht;return k.optional(function(){lt+=","+A.command}),U.def(lt+")")}),{frag:I,vert:H,progVar:P,program:L}}function Ao(T,E){var $=T.static,W=T.dynamic;function K(){if(Os in $){var A=$[Os];Gf(A)?A=tt.getElements(tt.create(A,!0)):A&&(A=tt.getElements(A),k.command(A,"invalid elements",E.commandStr));var U=Tn(function(ht,vt){if(A){var lt=ht.link(A);return ht.ELEMENTS=lt,lt}return ht.ELEMENTS=null,null});return U.value=A,U}else if(Os in W){var Z=W[Os];return Kr(Z,function(ht,vt){var lt=ht.shared,Pt=lt.isBufferArgs,Me=lt.elements,to=ht.invoke(vt,Z),pe=vt.def("null"),Pe=vt.def(Pt,"(",to,")"),Xe=ht.cond(Pe).then(pe,"=",Me,".createStream(",to,");").else(pe,"=",Me,".getElements(",to,");");return k.optional(function(){ht.assert(Xe.else,"!"+to+"||"+pe,"invalid elements")}),vt.entry(Xe),vt.exit(ht.cond(Pe).then(Me,".destroyStream(",pe,");")),ht.ELEMENTS=pe,pe})}return null}var q=K();function I(){if(Cs in $){var A=$[Cs];return k.commandParameter(A,bi,"invalid primitve",E.commandStr),Tn(function(Z,ht){return bi[A]})}else if(Cs in W){var U=W[Cs];return Kr(U,function(Z,ht){var vt=Z.constants.primTypes,lt=Z.invoke(ht,U);return k.optional(function(){Z.assert(ht,lt+" in "+vt,"invalid primitive, must be one of "+Object.keys(bi))}),ht.def(vt,"[",lt,"]")})}else if(q)return Ha(q)?q.value?Tn(function(Z,ht){return ht.def(Z.ELEMENTS,".primType")}):Tn(function(){return Jv}):new Cr(q.thisDep,q.contextDep,q.propDep,function(Z,ht){var vt=Z.ELEMENTS;return ht.def(vt,"?",vt,".primType:",Jv)});return null}function H(A,U){if(A in $){var Z=$[A]|0;return k.command(!U||Z>=0,"invalid "+A,E.commandStr),Tn(function(vt,lt){return U&&(vt.OFFSET=Z),Z})}else if(A in W){var ht=W[A];return Kr(ht,function(vt,lt){var Pt=vt.invoke(lt,ht);return U&&(vt.OFFSET=Pt,k.optional(function(){vt.assert(lt,Pt+">=0","invalid "+A)})),Pt})}else if(U&&q)return Tn(function(vt,lt){return vt.OFFSET="0",0});return null}var L=H(Lf,!0);function P(){if(Ps in $){var A=$[Ps]|0;return k.command(typeof A=="number"&&A>=0,"invalid vertex count",E.commandStr),Tn(function(){return A})}else if(Ps in W){var U=W[Ps];return Kr(U,function(vt,lt){var Pt=vt.invoke(lt,U);return k.optional(function(){vt.assert(lt,"typeof "+Pt+'==="number"&&'+Pt+">=0&&"+Pt+"===("+Pt+"|0)","invalid vertex count")}),Pt})}else if(q)if(Ha(q)){if(q)return L?new Cr(L.thisDep,L.contextDep,L.propDep,function(vt,lt){var Pt=lt.def(vt.ELEMENTS,".vertCount-",vt.OFFSET);return k.optional(function(){vt.assert(lt,Pt+">=0","invalid vertex offset/element buffer too small")}),Pt}):Tn(function(vt,lt){return lt.def(vt.ELEMENTS,".vertCount")});var Z=Tn(function(){return-1});return k.optional(function(){Z.MISSING=!0}),Z}else{var ht=new Cr(q.thisDep||L.thisDep,q.contextDep||L.contextDep,q.propDep||L.propDep,function(vt,lt){var Pt=vt.ELEMENTS;return vt.OFFSET?lt.def(Pt,"?",Pt,".vertCount-",vt.OFFSET,":-1"):lt.def(Pt,"?",Pt,".vertCount:-1")});return k.optional(function(){ht.DYNAMIC=!0}),ht}return null}return{elements:q,primitive:I(),count:P(),instances:H(Nf,!1),offset:L}}function Ln(T,E){var $=T.static,W=T.dynamic,K={};return St.forEach(function(q){var I=Ut(q);function H(L,P){if(q in $){var A=L($[q]);K[I]=Tn(function(){return A})}else if(q in W){var U=W[q];K[I]=Kr(U,function(Z,ht){return P(Z,ht,Z.invoke(ht,U))})}}switch(q){case Gv:case Pv:case Cv:case Wv:case Iv:case Xv:case Uv:case Bv:case jv:case Dv:return H(function(L){return k.commandType(L,"boolean",q,E.commandStr),L},function(L,P,A){return k.optional(function(){L.assert(P,"typeof "+A+'==="boolean"',"invalid flag "+q,L.commandStr)}),A});case Fv:return H(function(L){return k.commandParameter(L,Pi,"invalid "+q,E.commandStr),Pi[L]},function(L,P,A){var U=L.constants.compareFuncs;return k.optional(function(){L.assert(P,A+" in "+U,"invalid "+q+", must be one of "+Object.keys(Pi))}),P.def(U,"[",A,"]")});case qv:return H(function(L){return k.command(Mn(L)&&L.length===2&&typeof L[0]=="number"&&typeof L[1]=="number"&&L[0]<=L[1],"depth range is 2d array",E.commandStr),L},function(L,P,A){k.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===2&&typeof "+A+'[0]==="number"&&typeof '+A+'[1]==="number"&&'+A+"[0]<="+A+"[1]","depth range must be a 2d array")});var U=P.def("+",A,"[0]"),Z=P.def("+",A,"[1]");return[U,Z]});case K1:return H(function(L){k.commandType(L,"object","blend.func",E.commandStr);var P="srcRGB"in L?L.srcRGB:L.src,A="srcAlpha"in L?L.srcAlpha:L.src,U="dstRGB"in L?L.dstRGB:L.dst,Z="dstAlpha"in L?L.dstAlpha:L.dst;return k.commandParameter(P,aa,I+".srcRGB",E.commandStr),k.commandParameter(A,aa,I+".srcAlpha",E.commandStr),k.commandParameter(U,aa,I+".dstRGB",E.commandStr),k.commandParameter(Z,aa,I+".dstAlpha",E.commandStr),k.command(am.indexOf(P+", "+U)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+P+", "+U+")",E.commandStr),[aa[P],aa[U],aa[A],aa[Z]]},function(L,P,A){var U=L.constants.blendFuncs;k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid blend func, must be an object")});function Z(pe,Pe){var Xe=P.def('"',pe,Pe,'" in ',A,"?",A,".",pe,Pe,":",A,".",pe);return k.optional(function(){L.assert(P,Xe+" in "+U,"invalid "+q+"."+pe+Pe+", must be one of "+Object.keys(aa))}),Xe}var ht=Z("src","RGB"),vt=Z("dst","RGB");k.optional(function(){var pe=L.constants.invalidBlendCombinations;L.assert(P,pe+".indexOf("+ht+'+", "+'+vt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var lt=P.def(U,"[",ht,"]"),Pt=P.def(U,"[",Z("src","Alpha"),"]"),Me=P.def(U,"[",vt,"]"),to=P.def(U,"[",Z("dst","Alpha"),"]");return[lt,Me,Pt,to]});case Y1:return H(function(L){if(typeof L=="string")return k.commandParameter(L,it,"invalid "+q,E.commandStr),[it[L],it[L]];if(typeof L=="object")return k.commandParameter(L.rgb,it,q+".rgb",E.commandStr),k.commandParameter(L.alpha,it,q+".alpha",E.commandStr),[it[L.rgb],it[L.alpha]];k.commandRaise("invalid blend.equation",E.commandStr)},function(L,P,A){var U=L.constants.blendEquations,Z=P.def(),ht=P.def(),vt=L.cond("typeof ",A,'==="string"');return k.optional(function(){function lt(Pt,Me,to){L.assert(Pt,to+" in "+U,"invalid "+Me+", must be one of "+Object.keys(it))}lt(vt.then,q,A),L.assert(vt.else,A+"&&typeof "+A+'==="object"',"invalid "+q),lt(vt.else,q+".rgb",A+".rgb"),lt(vt.else,q+".alpha",A+".alpha")}),vt.then(Z,"=",ht,"=",U,"[",A,"];"),vt.else(Z,"=",U,"[",A,".rgb];",ht,"=",U,"[",A,".alpha];"),P(vt),[Z,ht]});case $v:return H(function(L){return k.command(Mn(L)&&L.length===4,"blend.color must be a 4d array",E.commandStr),no(4,function(P){return+L[P]})},function(L,P,A){return k.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","blend.color must be a 4d array")}),no(4,function(U){return P.def("+",A,"[",U,"]")})});case Vv:return H(function(L){return k.commandType(L,"number",I,E.commandStr),L|0},function(L,P,A){return k.optional(function(){L.assert(P,"typeof "+A+'==="number"',"invalid stencil.mask")}),P.def(A,"|0")});case ou:return H(function(L){k.commandType(L,"object",I,E.commandStr);var P=L.cmp||"keep",A=L.ref||0,U="mask"in L?L.mask:-1;return k.commandParameter(P,Pi,q+".cmp",E.commandStr),k.commandType(A,"number",q+".ref",E.commandStr),k.commandType(U,"number",q+".mask",E.commandStr),[Pi[P],A,U]},function(L,P,A){var U=L.constants.compareFuncs;k.optional(function(){function lt(){L.assert(P,Array.prototype.join.call(arguments,""),"invalid stencil.func")}lt(A+"&&typeof ",A,'==="object"'),lt('!("cmp" in ',A,")||(",A,".cmp in ",U,")")});var Z=P.def('"cmp" in ',A,"?",U,"[",A,".cmp]",":",Da),ht=P.def(A,".ref|0"),vt=P.def('"mask" in ',A,"?",A,".mask|0:-1");return[Z,ht,vt]});case nu:case Xc:return H(function(L){k.commandType(L,"object",I,E.commandStr);var P=L.fail||"keep",A=L.zfail||"keep",U=L.zpass||"keep";return k.commandParameter(P,Ga,q+".fail",E.commandStr),k.commandParameter(A,Ga,q+".zfail",E.commandStr),k.commandParameter(U,Ga,q+".zpass",E.commandStr),[q===Xc?$s:rl,Ga[P],Ga[A],Ga[U]]},function(L,P,A){var U=L.constants.stencilOps;k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+q)});function Z(ht){return k.optional(function(){L.assert(P,'!("'+ht+'" in '+A+")||("+A+"."+ht+" in "+U+")","invalid "+q+"."+ht+", must be one of "+Object.keys(Ga))}),P.def('"',ht,'" in ',A,"?",U,"[",A,".",ht,"]:",Da)}return[q===Xc?$s:rl,Z("fail"),Z("zfail"),Z("zpass")]});case tu:return H(function(L){k.commandType(L,"object",I,E.commandStr);var P=L.factor|0,A=L.units|0;return k.commandType(P,"number",I+".factor",E.commandStr),k.commandType(A,"number",I+".units",E.commandStr),[P,A]},function(L,P,A){k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+q)});var U=P.def(A,".factor|0"),Z=P.def(A,".units|0");return[U,Z]});case Hv:return H(function(L){var P=0;return L==="front"?P=rl:L==="back"&&(P=$s),k.command(!!P,I,E.commandStr),P},function(L,P,A){return k.optional(function(){L.assert(P,A+'==="front"||'+A+'==="back"',"invalid cull.face")}),P.def(A,'==="front"?',rl,":",$s)});case J1:return H(function(L){return k.command(typeof L=="number"&&L>=ot.lineWidthDims[0]&&L<=ot.lineWidthDims[1],"invalid line width, must be a positive number between "+ot.lineWidthDims[0]+" and "+ot.lineWidthDims[1],E.commandStr),L},function(L,P,A){return k.optional(function(){L.assert(P,"typeof "+A+'==="number"&&'+A+">="+ot.lineWidthDims[0]+"&&"+A+"<="+ot.lineWidthDims[1],"invalid line width")}),A});case Z1:return H(function(L){return k.commandParameter(L,fu,I,E.commandStr),fu[L]},function(L,P,A){return k.optional(function(){L.assert(P,A+'==="cw"||'+A+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),P.def(A+'==="cw"?'+tm+":"+lu)});case Q1:return H(function(L){return k.command(Mn(L)&&L.length===4,"color.mask must be length 4 array",E.commandStr),L.map(function(P){return!!P})},function(L,P,A){return k.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","invalid color.mask")}),no(4,function(U){return"!!"+A+"["+U+"]"})});case eu:return H(function(L){k.command(typeof L=="object"&&L,I,E.commandStr);var P="value"in L?L.value:1,A=!!L.invert;return k.command(typeof P=="number"&&P>=0&&P<=1,"sample.coverage.value must be a number between 0 and 1",E.commandStr),[P,A]},function(L,P,A){k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid sample.coverage")});var U=P.def('"value" in ',A,"?+",A,".value:1"),Z=P.def("!!",A,".invert");return[U,Z]})}}),K}function Vn(T,E){var $=T.static,W=T.dynamic,K={};return Object.keys($).forEach(function(q){var I=$[q],H;if(typeof I=="number"||typeof I=="boolean")H=Tn(function(){return I});else if(typeof I=="function"){var L=I._reglType;L==="texture2d"||L==="textureCube"?H=Tn(function(P){return P.link(I)}):L==="framebuffer"||L==="framebufferCube"?(k.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+q+'"',E.commandStr),H=Tn(function(P){return P.link(I.color[0])})):k.commandRaise('invalid data for uniform "'+q+'"',E.commandStr)}else Mn(I)?H=Tn(function(P){var A=P.global.def("[",no(I.length,function(U){return k.command(typeof I[U]=="number"||typeof I[U]=="boolean","invalid uniform "+q,P.commandStr),I[U]}),"]");return A}):k.commandRaise('invalid or missing data for uniform "'+q+'"',E.commandStr);H.value=I,K[q]=H}),Object.keys(W).forEach(function(q){var I=W[q];K[q]=Kr(I,function(H,L){return H.invoke(L,I)})}),K}function po(T,E){var $=T.static,W=T.dynamic,K={};return Object.keys($).forEach(function(q){var I=$[q],H=z.id(q),L=new Y;if(Gf(I))L.state=Ni,L.buffer=pt.getBuffer(pt.create(I,Ci,!1,!0)),L.type=0;else{var P=pt.getBuffer(I);if(P)L.state=Ni,L.buffer=P,L.type=0;else if(k.command(typeof I=="object"&&I,"invalid data for attribute "+q,E.commandStr),"constant"in I){var A=I.constant;L.buffer="null",L.state=B1,typeof A=="number"?L.x=A:(k.command(Mn(A)&&A.length>0&&A.length<=4,"invalid constant for attribute "+q,E.commandStr),Li.forEach(function(Me,to){to<A.length&&(L[Me]=A[to])}))}else{Gf(I.buffer)?P=pt.getBuffer(pt.create(I.buffer,Ci,!1,!0)):P=pt.getBuffer(I.buffer),k.command(!!P,'missing buffer for attribute "'+q+'"',E.commandStr);var U=I.offset|0;k.command(U>=0,'invalid offset for attribute "'+q+'"',E.commandStr);var Z=I.stride|0;k.command(Z>=0&&Z<256,'invalid stride for attribute "'+q+'", must be integer betweeen [0, 255]',E.commandStr);var ht=I.size|0;k.command(!("size"in I)||ht>0&&ht<=4,'invalid size for attribute "'+q+'", must be 1,2,3,4',E.commandStr);var vt=!!I.normalized,lt=0;"type"in I&&(k.commandParameter(I.type,zs,"invalid type for attribute "+q,E.commandStr),lt=zs[I.type]);var Pt=I.divisor|0;"divisor"in I&&(k.command(Pt===0||$t,'cannot specify divisor for attribute "'+q+'", instancing not supported',E.commandStr),k.command(Pt>=0,'invalid divisor for attribute "'+q+'"',E.commandStr)),k.optional(function(){var Me=E.commandStr,to=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(pe){k.command(to.indexOf(pe)>=0,'unknown parameter "'+pe+'" for attribute pointer "'+q+'" (valid parameters are '+to+")",Me)})}),L.buffer=P,L.state=Ni,L.size=ht,L.normalized=vt,L.type=lt||P.dtype,L.offset=U,L.stride=Z,L.divisor=Pt}}K[q]=Tn(function(Me,to){var pe=Me.attribCache;if(H in pe)return pe[H];var Pe={isStream:!1};return Object.keys(L).forEach(function(Xe){Pe[Xe]=L[Xe]}),L.buffer&&(Pe.buffer=Me.link(L.buffer),Pe.type=Pe.type||Pe.buffer+".dtype"),pe[H]=Pe,Pe})}),Object.keys(W).forEach(function(q){var I=W[q];function H(L,P){var A=L.invoke(P,I),U=L.shared,Z=L.constants,ht=U.isBufferArgs,vt=U.buffer;k.optional(function(){L.assert(P,A+"&&(typeof "+A+'==="object"||typeof '+A+'==="function")&&('+ht+"("+A+")||"+vt+".getBuffer("+A+")||"+vt+".getBuffer("+A+".buffer)||"+ht+"("+A+'.buffer)||("constant" in '+A+"&&(typeof "+A+'.constant==="number"||'+U.isArrayLike+"("+A+".constant))))",'invalid dynamic attribute "'+q+'"')});var lt={isStream:P.def(!1)},Pt=new Y;Pt.state=Ni,Object.keys(Pt).forEach(function(Pe){lt[Pe]=P.def(""+Pt[Pe])});var Me=lt.buffer,to=lt.type;P("if(",ht,"(",A,")){",lt.isStream,"=true;",Me,"=",vt,".createStream(",Ci,",",A,");",to,"=",Me,".dtype;","}else{",Me,"=",vt,".getBuffer(",A,");","if(",Me,"){",to,"=",Me,".dtype;",'}else if("constant" in ',A,"){",lt.state,"=",B1,";","if(typeof "+A+'.constant === "number"){',lt[Li[0]],"=",A,".constant;",Li.slice(1).map(function(Pe){return lt[Pe]}).join("="),"=0;","}else{",Li.map(function(Pe,Xe){return lt[Pe]+"="+A+".constant.length>"+Xe+"?"+A+".constant["+Xe+"]:0;"}).join(""),"}}else{","if(",ht,"(",A,".buffer)){",Me,"=",vt,".createStream(",Ci,",",A,".buffer);","}else{",Me,"=",vt,".getBuffer(",A,".buffer);","}",to,'="type" in ',A,"?",Z.glTypes,"[",A,".type]:",Me,".dtype;",lt.normalized,"=!!",A,".normalized;");function pe(Pe){P(lt[Pe],"=",A,".",Pe,"|0;")}return pe("size"),pe("offset"),pe("stride"),pe("divisor"),P("}}"),P.exit("if(",lt.isStream,"){",vt,".destroyStream(",Me,");","}"),lt}K[q]=Kr(I,H)}),K}function In(T,E){var $=T.static,W=T.dynamic;if(Zc in $){var K=$[Zc];return K!==null&&It.getVAO(K)===null&&(K=It.createVAO(K)),Tn(function(I){return I.link(It.getVAO(K))})}else if(Zc in W){var q=W[Zc];return Kr(q,function(I,H){var L=I.invoke(H,q);return H.def(I.shared.vao+".getVAO("+L+")")})}return null}function tn(T){var E=T.static,$=T.dynamic,W={};return Object.keys(E).forEach(function(K){var q=E[K];W[K]=Tn(function(I,H){return typeof q=="number"||typeof q=="boolean"?""+q:I.link(q)})}),Object.keys($).forEach(function(K){var q=$[K];W[K]=Kr(q,function(I,H){return I.invoke(H,q)})}),W}function Nn(T,E,$,W,K){var q=T.static,I=T.dynamic;k.optional(function(){var pe=[Rs,Kc,Qc,Os,Cs,Lf,Ps,Nf,Yc,Zc].concat(St);function Pe(Xe){Object.keys(Xe).forEach(function(To){k.command(pe.indexOf(To)>=0,'unknown parameter "'+To+'"',K.commandStr)})}Pe(q),Pe(I)});var H=Ve(T,E),L=de(T,K),P=so(T,L,K),A=Ao(T,K),U=Ln(T,K),Z=oo(T,K,H);function ht(pe){var Pe=P[pe];Pe&&(U[pe]=Pe)}ht(ya),ht(Ut(Tf));var vt=Object.keys(U).length>0,lt={framebuffer:L,draw:A,shader:Z,state:U,dirty:vt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(lt.profile=Ze(T,K),lt.uniforms=Vn($,K),lt.drawVAO=lt.scopeVAO=In(T,K),!lt.drawVAO&&Z.program&&!H&&C.angle_instanced_arrays){var Pt=!0,Me=Z.program.attributes.map(function(pe){var Pe=E.static[pe];return Pt=Pt&&!!Pe,Pe});if(Pt&&Me.length>0){var to=It.getVAO(It.createVAO(Me));lt.drawVAO=new Cr(null,null,null,function(pe,Pe){return pe.link(to)}),lt.useVAO=!0}}return H?lt.useVAO=!0:lt.attributes=po(E,K),lt.context=tn(W,K),lt}function Fn(T,E,$){var W=T.shared,K=W.context,q=T.scope();Object.keys($).forEach(function(I){E.save(K,"."+I);var H=$[I],L=H.append(T,E);Array.isArray(L)?q(K,".",I,"=[",L.join(),"];"):q(K,".",I,"=",L,";")}),E(q)}function qn(T,E,$,W){var K=T.shared,q=K.gl,I=K.framebuffer,H;te&&(H=E.def(K.extensions,".webgl_draw_buffers"));var L=T.constants,P=L.drawBuffer,A=L.backBuffer,U;$?U=$.append(T,E):U=E.def(I,".next"),W||E("if(",U,"!==",I,".cur){"),E("if(",U,"){",q,".bindFramebuffer(",rm,",",U,".framebuffer);"),te&&E(H,".drawBuffersWEBGL(",P,"[",U,".colorAttachments.length]);"),E("}else{",q,".bindFramebuffer(",rm,",null);"),te&&E(H,".drawBuffersWEBGL(",A,");"),E("}",I,".cur=",U,";"),W||E("}")}function rr(T,E,$){var W=T.shared,K=W.gl,q=T.current,I=T.next,H=W.current,L=W.next,P=T.cond(H,".dirty");St.forEach(function(A){var U=Ut(A);if(!(U in $.state)){var Z,ht;if(U in I){Z=I[U],ht=q[U];var vt=no(wt[U].length,function(Pt){return P.def(Z,"[",Pt,"]")});P(T.cond(vt.map(function(Pt,Me){return Pt+"!=="+ht+"["+Me+"]"}).join("||")).then(K,".",_t[U],"(",vt,");",vt.map(function(Pt,Me){return ht+"["+Me+"]="+Pt}).join(";"),";"))}else{Z=P.def(L,".",U);var lt=T.cond(Z,"!==",H,".",U);P(lt),U in Ht?lt(T.cond(Z).then(K,".enable(",Ht[U],");").else(K,".disable(",Ht[U],");"),H,".",U,"=",Z,";"):lt(K,".",_t[U],"(",Z,");",H,".",U,"=",Z,";")}}}),Object.keys($.state).length===0&&P(H,".dirty=false;"),E(P)}function pr(T,E,$,W){var K=T.shared,q=T.current,I=K.current,H=K.gl;im(Object.keys($)).forEach(function(L){var P=$[L];if(!(W&&!W(P))){var A=P.append(T,E);if(Ht[L]){var U=Ht[L];Ha(P)?A?E(H,".enable(",U,");"):E(H,".disable(",U,");"):E(T.cond(A).then(H,".enable(",U,");").else(H,".disable(",U,");")),E(I,".",L,"=",A,";")}else if(Mn(A)){var Z=q[L];E(H,".",_t[L],"(",A,");",A.map(function(ht,vt){return Z+"["+vt+"]="+ht}).join(";"),";")}else E(H,".",_t[L],"(",A,");",I,".",L,"=",A,";")}})}function kn(T,E){$t&&(T.instancing=E.def(T.shared.extensions,".angle_instanced_arrays"))}function Je(T,E,$,W,K){var q=T.shared,I=T.stats,H=q.current,L=q.timer,P=$.profile;function A(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var U,Z;function ht(pe){U=E.def(),pe(U,"=",A(),";"),typeof K=="string"?pe(I,".count+=",K,";"):pe(I,".count++;"),Tt&&(W?(Z=E.def(),pe(Z,"=",L,".getNumPendingQueries();")):pe(L,".beginQuery(",I,");"))}function vt(pe){pe(I,".cpuTime+=",A(),"-",U,";"),Tt&&(W?pe(L,".pushScopeStats(",Z,",",L,".getNumPendingQueries(),",I,");"):pe(L,".endQuery();"))}function lt(pe){var Pe=E.def(H,".profile");E(H,".profile=",pe,";"),E.exit(H,".profile=",Pe,";")}var Pt;if(P){if(Ha(P)){P.enable?(ht(E),vt(E.exit),lt("true")):lt("false");return}Pt=P.append(T,E),lt(Pt)}else Pt=E.def(H,".profile");var Me=T.block();ht(Me),E("if(",Pt,"){",Me,"}");var to=T.block();vt(to),E.exit("if(",Pt,"){",to,"}")}function vr(T,E,$,W,K){var q=T.shared;function I(L){switch(L){case Rf:case Pf:case Ff:return 2;case Of:case $f:case qf:return 3;case Cf:case If:case Df:return 4;default:return 1}}function H(L,P,A){var U=q.gl,Z=E.def(L,".location"),ht=E.def(q.attributes,"[",Z,"]"),vt=A.state,lt=A.buffer,Pt=[A.x,A.y,A.z,A.w],Me=["buffer","normalized","offset","stride"];function to(){E("if(!",ht,".buffer){",U,".enableVertexAttribArray(",Z,");}");var Pe=A.type,Xe;if(A.size?Xe=E.def(A.size,"||",P):Xe=P,E("if(",ht,".type!==",Pe,"||",ht,".size!==",Xe,"||",Me.map(function(xn){return ht+"."+xn+"!=="+A[xn]}).join("||"),"){",U,".bindBuffer(",Ci,",",lt,".buffer);",U,".vertexAttribPointer(",[Z,Xe,Pe,A.normalized,A.stride,A.offset],");",ht,".type=",Pe,";",ht,".size=",Xe,";",Me.map(function(xn){return ht+"."+xn+"="+A[xn]+";"}).join(""),"}"),$t){var To=A.divisor;E("if(",ht,".divisor!==",To,"){",T.instancing,".vertexAttribDivisorANGLE(",[Z,To],");",ht,".divisor=",To,";}")}}function pe(){E("if(",ht,".buffer){",U,".disableVertexAttribArray(",Z,");",ht,".buffer=null;","}if(",Li.map(function(Pe,Xe){return ht+"."+Pe+"!=="+Pt[Xe]}).join("||"),"){",U,".vertexAttrib4f(",Z,",",Pt,");",Li.map(function(Pe,Xe){return ht+"."+Pe+"="+Pt[Xe]+";"}).join(""),"}")}vt===Ni?to():vt===B1?pe():(E("if(",vt,"===",Ni,"){"),to(),E("}else{"),pe(),E("}"))}W.forEach(function(L){var P=L.name,A=$.attributes[P],U;if(A){if(!K(A))return;U=A.append(T,E)}else{if(!K(cm))return;var Z=T.scopeAttrib(P);k.optional(function(){T.assert(E,Z+".state","missing attribute "+P)}),U={},Object.keys(new Y).forEach(function(ht){U[ht]=E.def(Z,".",ht)})}H(T.link(L),I(L.info.type),U)})}function Oo(T,E,$,W,K){for(var q=T.shared,I=q.gl,H,L=0;L<W.length;++L){var P=W[L],A=P.name,U=P.info.type,Z=$.uniforms[A],ht=T.link(P),vt=ht+".location",lt;if(Z){if(!K(Z))continue;if(Ha(Z)){var Pt=Z.value;if(k.command(Pt!==null&&typeof Pt!="undefined",'missing uniform "'+A+'"',T.commandStr),U===ol||U===nl){k.command(typeof Pt=="function"&&(U===ol&&(Pt._reglType==="texture2d"||Pt._reglType==="framebuffer")||U===nl&&(Pt._reglType==="textureCube"||Pt._reglType==="framebufferCube")),"invalid texture for uniform "+A,T.commandStr);var Me=T.link(Pt._texture||Pt.color[0]._texture);E(I,".uniform1i(",vt,",",Me+".bind());"),E.exit(Me,".unbind();")}else if(U===Jc||U===tl||U===el){k.optional(function(){k.command(Mn(Pt),"invalid matrix for uniform "+A,T.commandStr),k.command(U===Jc&&Pt.length===4||U===tl&&Pt.length===9||U===el&&Pt.length===16,"invalid length for matrix uniform "+A,T.commandStr)});var to=T.global.def("new Float32Array(["+Array.prototype.slice.call(Pt)+"])"),pe=2;U===tl?pe=3:U===el&&(pe=4),E(I,".uniformMatrix",pe,"fv(",vt,",false,",to,");")}else{switch(U){case su:k.commandType(Pt,"number","uniform "+A,T.commandStr),H="1f";break;case Rf:k.command(Mn(Pt)&&Pt.length===2,"uniform "+A,T.commandStr),H="2f";break;case Of:k.command(Mn(Pt)&&Pt.length===3,"uniform "+A,T.commandStr),H="3f";break;case Cf:k.command(Mn(Pt)&&Pt.length===4,"uniform "+A,T.commandStr),H="4f";break;case cu:k.commandType(Pt,"boolean","uniform "+A,T.commandStr),H="1i";break;case iu:k.commandType(Pt,"number","uniform "+A,T.commandStr),H="1i";break;case Ff:k.command(Mn(Pt)&&Pt.length===2,"uniform "+A,T.commandStr),H="2i";break;case Pf:k.command(Mn(Pt)&&Pt.length===2,"uniform "+A,T.commandStr),H="2i";break;case qf:k.command(Mn(Pt)&&Pt.length===3,"uniform "+A,T.commandStr),H="3i";break;case $f:k.command(Mn(Pt)&&Pt.length===3,"uniform "+A,T.commandStr),H="3i";break;case Df:k.command(Mn(Pt)&&Pt.length===4,"uniform "+A,T.commandStr),H="4i";break;case If:k.command(Mn(Pt)&&Pt.length===4,"uniform "+A,T.commandStr),H="4i";break}E(I,".uniform",H,"(",vt,",",Mn(Pt)?Array.prototype.slice.call(Pt):Pt,");")}continue}else lt=Z.append(T,E)}else{if(!K(cm))continue;lt=E.def(q.uniforms,"[",z.id(A),"]")}U===ol?(k(!Array.isArray(lt),"must specify a scalar prop for textures"),E("if(",lt,"&&",lt,'._reglType==="framebuffer"){',lt,"=",lt,".color[0];","}")):U===nl&&(k(!Array.isArray(lt),"must specify a scalar prop for cube maps"),E("if(",lt,"&&",lt,'._reglType==="framebufferCube"){',lt,"=",lt,".color[0];","}")),k.optional(function(){function Pr(H0,vm){T.assert(E,H0,'bad data or missing for uniform "'+A+'".  '+vm)}function hu(H0){k(!Array.isArray(lt),"must not specify an array type for uniform"),Pr("typeof "+lt+'==="'+H0+'"',"invalid type, expected "+H0)}function k0(H0,vm){Array.isArray(lt)?k(lt.length===H0,"must have length "+H0):Pr(q.isArrayLike+"("+lt+")&&"+lt+".length==="+H0,"invalid vector, should have length "+H0,T.commandStr)}function pm(H0){k(!Array.isArray(lt),"must not specify a value type"),Pr("typeof "+lt+'==="function"&&'+lt+'._reglType==="texture'+(H0===Zv?"2d":"Cube")+'"',"invalid texture type",T.commandStr)}switch(U){case iu:hu("number");break;case Pf:k0(2,"number");break;case $f:k0(3,"number");break;case If:k0(4,"number");break;case su:hu("number");break;case Rf:k0(2,"number");break;case Of:k0(3,"number");break;case Cf:k0(4,"number");break;case cu:hu("boolean");break;case Ff:k0(2,"boolean");break;case qf:k0(3,"boolean");break;case Df:k0(4,"boolean");break;case Jc:k0(4,"number");break;case tl:k0(9,"number");break;case el:k0(16,"number");break;case ol:pm(Zv);break;case nl:pm(r4);break}});var Pe=1;switch(U){case ol:case nl:var Xe=E.def(lt,"._texture");E(I,".uniform1i(",vt,",",Xe,".bind());"),E.exit(Xe,".unbind();");continue;case iu:case cu:H="1i";break;case Pf:case Ff:H="2i",Pe=2;break;case $f:case qf:H="3i",Pe=3;break;case If:case Df:H="4i",Pe=4;break;case su:H="1f";break;case Rf:H="2f",Pe=2;break;case Of:H="3f",Pe=3;break;case Cf:H="4f",Pe=4;break;case Jc:H="Matrix2fv";break;case tl:H="Matrix3fv";break;case el:H="Matrix4fv";break}if(E(I,".uniform",H,"(",vt,","),H.charAt(0)==="M"){var To=Math.pow(U-Jc+2,2),xn=T.global.def("new Float32Array(",To,")");Array.isArray(lt)?E("false,(",no(To,function(Pr){return xn+"["+Pr+"]="+lt[Pr]}),",",xn,")"):E("false,(Array.isArray(",lt,")||",lt," instanceof Float32Array)?",lt,":(",no(To,function(Pr){return xn+"["+Pr+"]="+lt+"["+Pr+"]"}),",",xn,")")}else Pe>1?E(no(Pe,function(Pr){return Array.isArray(lt)?lt[Pr]:lt+"["+Pr+"]"})):(k(!Array.isArray(lt),"uniform value must not be an array"),E(lt));E(");")}}function Ce(T,E,$,W){var K=T.shared,q=K.gl,I=K.draw,H=W.draw;function L(){var Xe=H.elements,To,xn=E;return Xe?((Xe.contextDep&&W.contextDynamic||Xe.propDep)&&(xn=$),To=Xe.append(T,xn)):To=xn.def(I,".",Os),To&&xn("if("+To+")"+q+".bindBuffer("+e4+","+To+".buffer.buffer);"),To}function P(){var Xe=H.count,To,xn=E;return Xe?((Xe.contextDep&&W.contextDynamic||Xe.propDep)&&(xn=$),To=Xe.append(T,xn),k.optional(function(){Xe.MISSING&&T.assert(E,"false","missing vertex count"),Xe.DYNAMIC&&T.assert(xn,To+">=0","missing vertex count")})):(To=xn.def(I,".",Ps),k.optional(function(){T.assert(xn,To+">=0","missing vertex count")})),To}var A=L();function U(Xe){var To=H[Xe];return To?To.contextDep&&W.contextDynamic||To.propDep?To.append(T,$):To.append(T,E):E.def(I,".",Xe)}var Z=U(Cs),ht=U(Lf),vt=P();if(typeof vt=="number"){if(vt===0)return}else $("if(",vt,"){"),$.exit("}");var lt,Pt;$t&&(lt=U(Nf),Pt=T.instancing);var Me=A+".type",to=H.elements&&Ha(H.elements);function pe(){function Xe(){$(Pt,".drawElementsInstancedANGLE(",[Z,vt,Me,ht+"<<(("+Me+"-"+Nv+")>>1)",lt],");")}function To(){$(Pt,".drawArraysInstancedANGLE(",[Z,ht,vt,lt],");")}A?to?Xe():($("if(",A,"){"),Xe(),$("}else{"),To(),$("}")):To()}function Pe(){function Xe(){$(q+".drawElements("+[Z,vt,Me,ht+"<<(("+Me+"-"+Nv+")>>1)"]+");")}function To(){$(q+".drawArrays("+[Z,ht,vt]+");")}A?to?Xe():($("if(",A,"){"),Xe(),$("}else{"),To(),$("}")):To()}$t&&(typeof lt!="number"||lt>=0)?typeof lt=="string"?($("if(",lt,">0){"),pe(),$("}else if(",lt,"<0){"),Pe(),$("}")):pe():Pe()}function fo(T,E,$,W,K){var q=He(),I=q.proc("body",K);return k.optional(function(){q.commandStr=E.commandStr,q.command=q.link(E.commandStr)}),$t&&(q.instancing=I.def(q.shared.extensions,".angle_instanced_arrays")),T(q,I,$,W),q.compile().body}function _o(T,E,$,W){kn(T,E),$.useVAO?$.drawVAO?E(T.shared.vao,".setVAO(",$.drawVAO.append(T,E),");"):E(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(E(T.shared.vao,".setVAO(null);"),vr(T,E,$,W.attributes,function(){return!0})),Oo(T,E,$,W.uniforms,function(){return!0}),Ce(T,E,E,$)}function Sn(T,E){var $=T.proc("draw",1);kn(T,$),Fn(T,$,E.context),qn(T,$,E.framebuffer),rr(T,$,E),pr(T,$,E.state),Je(T,$,E,!1,!0);var W=E.shader.progVar.append(T,$);if($(T.shared.gl,".useProgram(",W,".program);"),E.shader.program)_o(T,$,E,E.shader.program);else{$(T.shared.vao,".setVAO(null);");var K=T.global.def("{}"),q=$.def(W,".id"),I=$.def(K,"[",q,"]");$(T.cond(I).then(I,".call(this,a0);").else(I,"=",K,"[",q,"]=",T.link(function(H){return fo(_o,T,E,H,1)}),"(",W,");",I,".call(this,a0);"))}Object.keys(E.state).length>0&&$(T.shared.current,".dirty=true;")}function sa(T,E,$,W){T.batchId="a1",kn(T,E);function K(){return!0}vr(T,E,$,W.attributes,K),Oo(T,E,$,W.uniforms,K),Ce(T,E,E,$)}function Is(T,E,$,W){kn(T,E);var K=$.contextDep,q=E.def(),I="a0",H="a1",L=E.def();T.shared.props=L,T.batchId=q;var P=T.scope(),A=T.scope();E(P.entry,"for(",q,"=0;",q,"<",H,";++",q,"){",L,"=",I,"[",q,"];",A,"}",P.exit);function U(Me){return Me.contextDep&&K||Me.propDep}function Z(Me){return!U(Me)}if($.needsContext&&Fn(T,A,$.context),$.needsFramebuffer&&qn(T,A,$.framebuffer),pr(T,A,$.state,U),$.profile&&U($.profile)&&Je(T,A,$,!1,!0),W)$.useVAO?$.drawVAO?U($.drawVAO)?A(T.shared.vao,".setVAO(",$.drawVAO.append(T,A),");"):P(T.shared.vao,".setVAO(",$.drawVAO.append(T,P),");"):P(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(P(T.shared.vao,".setVAO(null);"),vr(T,P,$,W.attributes,Z),vr(T,A,$,W.attributes,U)),Oo(T,P,$,W.uniforms,Z),Oo(T,A,$,W.uniforms,U),Ce(T,P,A,$);else{var ht=T.global.def("{}"),vt=$.shader.progVar.append(T,A),lt=A.def(vt,".id"),Pt=A.def(ht,"[",lt,"]");A(T.shared.gl,".useProgram(",vt,".program);","if(!",Pt,"){",Pt,"=",ht,"[",lt,"]=",T.link(function(Me){return fo(sa,T,$,Me,2)}),"(",vt,");}",Pt,".call(this,a0[",q,"],",q,");")}}function R(T,E){var $=T.proc("batch",2);T.batchId="0",kn(T,$);var W=!1,K=!0;Object.keys(E.context).forEach(function(ht){W=W||E.context[ht].propDep}),W||(Fn(T,$,E.context),K=!1);var q=E.framebuffer,I=!1;q?(q.propDep?W=I=!0:q.contextDep&&W&&(I=!0),I||qn(T,$,q)):qn(T,$,null),E.state.viewport&&E.state.viewport.propDep&&(W=!0);function H(ht){return ht.contextDep&&W||ht.propDep}rr(T,$,E),pr(T,$,E.state,function(ht){return!H(ht)}),(!E.profile||!H(E.profile))&&Je(T,$,E,!1,"a1"),E.contextDep=W,E.needsContext=K,E.needsFramebuffer=I;var L=E.shader.progVar;if(L.contextDep&&W||L.propDep)Is(T,$,E,null);else{var P=L.append(T,$);if($(T.shared.gl,".useProgram(",P,".program);"),E.shader.program)Is(T,$,E,E.shader.program);else{$(T.shared.vao,".setVAO(null);");var A=T.global.def("{}"),U=$.def(P,".id"),Z=$.def(A,"[",U,"]");$(T.cond(Z).then(Z,".call(this,a0,a1);").else(Z,"=",A,"[",U,"]=",T.link(function(ht){return fo(Is,T,E,ht,2)}),"(",P,");",Z,".call(this,a0,a1);"))}}Object.keys(E.state).length>0&&$(T.shared.current,".dirty=true;")}function nt(T,E){var $=T.proc("scope",3);T.batchId="a2";var W=T.shared,K=W.current;Fn(T,$,E.context),E.framebuffer&&E.framebuffer.append(T,$),im(Object.keys(E.state)).forEach(function(I){var H=E.state[I],L=H.append(T,$);Mn(L)?L.forEach(function(P,A){$.set(T.next[I],"["+A+"]",P)}):$.set(W.next,"."+I,L)}),Je(T,$,E,!0,!0),[Os,Lf,Ps,Nf,Cs].forEach(function(I){var H=E.draw[I];H&&$.set(W.draw,"."+I,""+H.append(T,$))}),Object.keys(E.uniforms).forEach(function(I){var H=E.uniforms[I].append(T,$);Array.isArray(H)&&(H="["+H.join()+"]"),$.set(W.uniforms,"["+z.id(I)+"]",H)}),Object.keys(E.attributes).forEach(function(I){var H=E.attributes[I].append(T,$),L=T.scopeAttrib(I);Object.keys(new Y).forEach(function(P){$.set(L,"."+P,H[P])})}),E.scopeVAO&&$.set(W.vao,".targetVAO",E.scopeVAO.append(T,$));function q(I){var H=E.shader[I];H&&$.set(W.shader,"."+I,H.append(T,$))}q(Kc),q(Qc),Object.keys(E.state).length>0&&($(K,".dirty=true;"),$.exit(K,".dirty=true;")),$("a1(",T.shared.context,",a0,",T.batchId,");")}function J(T){if(!(typeof T!="object"||Mn(T))){for(var E=Object.keys(T),$=0;$<E.length;++$)if(mt.isDynamic(T[E[$]]))return!0;return!1}}function ie(T,E,$){var W=E.static[$];if(!W||!J(W))return;var K=T.global,q=Object.keys(W),I=!1,H=!1,L=!1,P=T.global.def("{}");q.forEach(function(U){var Z=W[U];if(mt.isDynamic(Z)){typeof Z=="function"&&(Z=W[U]=mt.unbox(Z));var ht=Kr(Z,null);I=I||ht.thisDep,L=L||ht.propDep,H=H||ht.contextDep}else{switch(K(P,".",U,"="),typeof Z){case"number":K(Z);break;case"string":K('"',Z,'"');break;case"object":Array.isArray(Z)&&K("[",Z.join(),"]");break;default:K(T.link(Z));break}K(";")}});function A(U,Z){q.forEach(function(ht){var vt=W[ht];if(mt.isDynamic(vt)){var lt=U.invoke(Z,vt);Z(P,".",ht,"=",lt,";")}})}E.dynamic[$]=new mt.DynamicVariable(Af,{thisDep:I,contextDep:H,propDep:L,ref:P,append:A}),delete E.static[$]}function io(T,E,$,W,K){var q=He();q.stats=q.link(K),Object.keys(E.static).forEach(function(H){ie(q,E,H)}),t4.forEach(function(H){ie(q,T,H)});var I=Nn(T,E,$,W,q);return Sn(q,I),nt(q,I),R(q,I),e(q.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:re,current:wt,procs:function(){var T=He(),E=T.proc("poll"),$=T.proc("refresh"),W=T.block();E(W),$(W);var K=T.shared,q=K.gl,I=K.next,H=K.current;W(H,".dirty=false;"),qn(T,E),qn(T,$,null,!0);var L;$t&&(L=T.link($t)),C.oes_vertex_array_object&&$(T.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var P=0;P<ot.maxAttributes;++P){var A=$.def(K.attributes,"[",P,"]"),U=T.cond(A,".buffer");U.then(q,".enableVertexAttribArray(",P,");",q,".bindBuffer(",Ci,",",A,".buffer.buffer);",q,".vertexAttribPointer(",P,",",A,".size,",A,".type,",A,".normalized,",A,".stride,",A,".offset);").else(q,".disableVertexAttribArray(",P,");",q,".vertexAttrib4f(",P,",",A,".x,",A,".y,",A,".z,",A,".w);",A,".buffer=null;"),$(U),$t&&$(L,".vertexAttribDivisorANGLE(",P,",",A,".divisor);")}return $(T.shared.vao,".currentVAO=null;",T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"),Object.keys(Ht).forEach(function(Z){var ht=Ht[Z],vt=W.def(I,".",Z),lt=T.block();lt("if(",vt,"){",q,".enable(",ht,")}else{",q,".disable(",ht,")}",H,".",Z,"=",vt,";"),$(lt),E("if(",vt,"!==",H,".",Z,"){",lt,"}")}),Object.keys(_t).forEach(function(Z){var ht=_t[Z],vt=wt[Z],lt,Pt,Me=T.block();if(Me(q,".",ht,"("),Mn(vt)){var to=vt.length;lt=T.global.def(I,".",Z),Pt=T.global.def(H,".",Z),Me(no(to,function(pe){return lt+"["+pe+"]"}),");",no(to,function(pe){return Pt+"["+pe+"]="+lt+"["+pe+"];"}).join("")),E("if(",no(to,function(pe){return lt+"["+pe+"]!=="+Pt+"["+pe+"]"}).join("||"),"){",Me,"}")}else lt=W.def(I,".",Z),Pt=W.def(H,".",Z),Me(lt,");",H,".",Z,"=",lt,";"),E("if(",lt,"!==",Pt,"){",Me,"}");$(Me)}),T.compile()}(),compile:io}}function b4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var w4=34918,_4=34919,lm=35007,M4=function(y,z){if(!z.ext_disjoint_timer_query)return null;var C=[];function ot(){return C.pop()||z.ext_disjoint_timer_query.createQueryEXT()}function pt($t){C.push($t)}var tt=[];function st($t){var te=ot();z.ext_disjoint_timer_query.beginQueryEXT(lm,te),tt.push(te),Tt(tt.length-1,tt.length,$t)}function At(){z.ext_disjoint_timer_query.endQueryEXT(lm)}function Ot(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var It=[];function Ct(){return It.pop()||new Ot}function Dt($t){It.push($t)}var Xt=[];function Tt($t,te,wt){var re=Ct();re.startQueryIndex=$t,re.endQueryIndex=te,re.sum=0,re.stats=wt,Xt.push(re)}var Gt=[],Y=[];function it(){var $t,te,wt=tt.length;if(wt!==0){Y.length=Math.max(Y.length,wt+1),Gt.length=Math.max(Gt.length,wt+1),Gt[0]=0,Y[0]=0;var re=0;for($t=0,te=0;te<tt.length;++te){var St=tt[te];z.ext_disjoint_timer_query.getQueryObjectEXT(St,_4)?(re+=z.ext_disjoint_timer_query.getQueryObjectEXT(St,w4),pt(St)):tt[$t++]=St,Gt[te+1]=re,Y[te+1]=$t}for(tt.length=$t,$t=0,te=0;te<Xt.length;++te){var Ht=Xt[te],_t=Ht.startQueryIndex,Ut=Ht.endQueryIndex;Ht.sum+=Gt[Ut]-Gt[_t];var Ne=Y[_t],je=Y[Ut];je===Ne?(Ht.stats.gpuTime+=Ht.sum/1e6,Dt(Ht)):(Ht.startQueryIndex=Ne,Ht.endQueryIndex=je,Xt[$t++]=Ht)}Xt.length=$t}}return{beginQuery:st,endQuery:At,pushScopeStats:Tt,update:it,getNumPendingQueries:function(){return tt.length},clear:function(){C.push.apply(C,tt);for(var $t=0;$t<C.length;$t++)z.ext_disjoint_timer_query.deleteQueryEXT(C[$t]);tt.length=0,C.length=0},restore:function(){tt.length=0,C.length=0}}},k4=16384,S4=256,E4=1024,z4=34962,fm="webglcontextlost",hm="webglcontextrestored",um=1,A4=2,T4=3;function dm(y,z){for(var C=0;C<y.length;++C)if(y[C]===z)return C;return-1}function L4(y){var z=$e(y);if(!z)return null;var C=z.gl,ot=C.getContextAttributes(),pt=C.isContextLost(),tt=Ie(C,z);if(!tt)return null;var st=Qt(),At=b4(),Ot=tt.extensions,It=M4(C,Ot),Ct=Et(),Dt=C.drawingBufferWidth,Xt=C.drawingBufferHeight,Tt={tick:0,time:0,viewportWidth:Dt,viewportHeight:Xt,framebufferWidth:Dt,framebufferHeight:Xt,drawingBufferWidth:Dt,drawingBufferHeight:Xt,pixelRatio:z.pixelRatio},Gt={},Y={elements:null,primitive:4,count:-1,offset:0,instances:-1},it=v5(C,Ot),$t=N5(C,At,z,wt),te=Uw(C,Ot,it,At,$t);function wt(Ce){return te.destroyBuffer(Ce)}var re=U5(C,Ot,$t,At),St=Vw(C,st,At,z),Ht=bw(C,Ot,it,function(){Ne.procs.poll()},Tt,At,z),_t=ww(C,Ot,it,At,z),Ut=Gw(C,Ot,it,Ht,_t,At),Ne=y4(C,st,Ot,it,$t,re,Ht,Ut,Gt,te,St,Y,Tt,It,z),je=Kw(C,Ut,Ne.procs.poll,Tt,ot,Ot,it),Yt=Ne.next,Ft=C.canvas,yt=[],He=[],Ze=[],de=[z.onDestroy],so=null;function Ve(){if(yt.length===0){It&&It.update(),so=null;return}so=zt.next(Ve),pr();for(var Ce=yt.length-1;Ce>=0;--Ce){var fo=yt[Ce];fo&&fo(Tt,null,0)}C.flush(),It&&It.update()}function oo(){!so&&yt.length>0&&(so=zt.next(Ve))}function Ao(){so&&(zt.cancel(Ve),so=null)}function Ln(Ce){Ce.preventDefault(),pt=!0,Ao(),He.forEach(function(fo){fo()})}function Vn(Ce){C.getError(),pt=!1,tt.restore(),St.restore(),$t.restore(),Ht.restore(),_t.restore(),Ut.restore(),te.restore(),It&&It.restore(),Ne.procs.refresh(),oo(),Ze.forEach(function(fo){fo()})}Ft&&(Ft.addEventListener(fm,Ln,!1),Ft.addEventListener(hm,Vn,!1));function po(){yt.length=0,Ao(),Ft&&(Ft.removeEventListener(fm,Ln),Ft.removeEventListener(hm,Vn)),St.clear(),Ut.clear(),_t.clear(),Ht.clear(),re.clear(),$t.clear(),te.clear(),It&&It.clear(),de.forEach(function(Ce){Ce()})}function In(Ce){k(!!Ce,"invalid args to regl({...})"),k.type(Ce,"object","invalid args to regl({...})");function fo(K){var q=e({},K);delete q.uniforms,delete q.attributes,delete q.context,delete q.vao,"stencil"in q&&q.stencil.op&&(q.stencil.opBack=q.stencil.opFront=q.stencil.op,delete q.stencil.op);function I(H){if(H in q){var L=q[H];delete q[H],Object.keys(L).forEach(function(P){q[H+"."+P]=L[P]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in K&&(q.vao=K.vao),q}function _o(K,q){var I={},H={};return Object.keys(K).forEach(function(L){var P=K[L];if(mt.isDynamic(P)){H[L]=mt.unbox(P,L);return}else if(q&&Array.isArray(P)){for(var A=0;A<P.length;++A)if(mt.isDynamic(P[A])){H[L]=mt.unbox(P,L);return}}I[L]=P}),{dynamic:H,static:I}}var Sn=_o(Ce.context||{},!0),sa=_o(Ce.uniforms||{},!0),Is=_o(Ce.attributes||{},!1),R=_o(fo(Ce),!1),nt={gpuTime:0,cpuTime:0,count:0},J=Ne.compile(R,Is,sa,Sn,nt),ie=J.draw,io=J.batch,T=J.scope,E=[];function $(K){for(;E.length<K;)E.push(null);return E}function W(K,q){var I;if(pt&&k.raise("context lost"),typeof K=="function")return T.call(this,null,K,0);if(typeof q=="function")if(typeof K=="number")for(I=0;I<K;++I)T.call(this,null,q,I);else if(Array.isArray(K))for(I=0;I<K.length;++I)T.call(this,K[I],q,I);else return T.call(this,K,q,0);else if(typeof K=="number"){if(K>0)return io.call(this,$(K|0),K|0)}else if(Array.isArray(K)){if(K.length)return io.call(this,K,K.length)}else return ie.call(this,K)}return e(W,{stats:nt,destroy:function(){J.destroy()}})}var tn=Ut.setFBO=In({framebuffer:mt.define.call(null,um,"framebuffer")});function Nn(Ce,fo){var _o=0;Ne.procs.poll();var Sn=fo.color;Sn&&(C.clearColor(+Sn[0]||0,+Sn[1]||0,+Sn[2]||0,+Sn[3]||0),_o|=k4),"depth"in fo&&(C.clearDepth(+fo.depth),_o|=S4),"stencil"in fo&&(C.clearStencil(fo.stencil|0),_o|=E4),k(!!_o,"called regl.clear with no buffer specified"),C.clear(_o)}function Fn(Ce){if(k(typeof Ce=="object"&&Ce,"regl.clear() takes an object as input"),"framebuffer"in Ce)if(Ce.framebuffer&&Ce.framebuffer_reglType==="framebufferCube")for(var fo=0;fo<6;++fo)tn(e({framebuffer:Ce.framebuffer.faces[fo]},Ce),Nn);else tn(Ce,Nn);else Nn(null,Ce)}function qn(Ce){k.type(Ce,"function","regl.frame() callback must be a function"),yt.push(Ce);function fo(){var _o=dm(yt,Ce);k(_o>=0,"cannot cancel a frame twice");function Sn(){var sa=dm(yt,Sn);yt[sa]=yt[yt.length-1],yt.length-=1,yt.length<=0&&Ao()}yt[_o]=Sn}return oo(),{cancel:fo}}function rr(){var Ce=Yt.viewport,fo=Yt.scissor_box;Ce[0]=Ce[1]=fo[0]=fo[1]=0,Tt.viewportWidth=Tt.framebufferWidth=Tt.drawingBufferWidth=Ce[2]=fo[2]=C.drawingBufferWidth,Tt.viewportHeight=Tt.framebufferHeight=Tt.drawingBufferHeight=Ce[3]=fo[3]=C.drawingBufferHeight}function pr(){Tt.tick+=1,Tt.time=Je(),rr(),Ne.procs.poll()}function kn(){Ht.refresh(),rr(),Ne.procs.refresh(),It&&It.update()}function Je(){return(Et()-Ct)/1e3}kn();function vr(Ce,fo){k.type(fo,"function","listener callback must be a function");var _o;switch(Ce){case"frame":return qn(fo);case"lost":_o=He;break;case"restore":_o=Ze;break;case"destroy":_o=de;break;default:k.raise("invalid event, must be one of frame,lost,restore,destroy")}return _o.push(fo),{cancel:function(){for(var Sn=0;Sn<_o.length;++Sn)if(_o[Sn]===fo){_o[Sn]=_o[_o.length-1],_o.pop();return}}}}var Oo=e(In,{clear:Fn,prop:mt.define.bind(null,um),context:mt.define.bind(null,A4),this:mt.define.bind(null,T4),draw:In({}),buffer:function(Ce){return $t.create(Ce,z4,!1,!1)},elements:function(Ce){return re.create(Ce,!1)},texture:Ht.create2D,cube:Ht.createCube,renderbuffer:_t.create,framebuffer:Ut.create,framebufferCube:Ut.createCube,vao:te.createVAO,attributes:ot,frame:qn,on:vr,limits:it,hasExtension:function(Ce){return it.extensions.indexOf(Ce.toLowerCase())>=0},read:je,destroy:po,_gl:C,_refresh:kn,poll:function(){pr(),It&&It.update()},now:Je,stats:At});return z.onDone(null,Oo),Oo}return L4})});var Fs=Mt((vz,Im)=>{"use strict";var wa=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],_a=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ia=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Xf=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],hl=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],wu=t=>Math.hypot(t[0],t[1],t[2]),E0=t=>{let e=wu(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Hi(t,e){let o=t.length-1,n=Math.min(Math.max(e,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],h=t[Math.min(o,r+2)],l=[0,0,0];for(let u=0;u<3;u++)l[u]=.5*(2*i[u]+(-s[u]+c[u])*a+(2*s[u]-5*i[u]+4*c[u]-h[u])*a*a+(-s[u]+3*i[u]-3*c[u]+h[u])*a*a*a);return l}function j4(t,e){return Hi(t.map(o=>[o,0,0]),e)[0]}function W4(t,e,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(d,p)=>{let f=new Array(9);for(let v=0;v<3;v++)for(let m=0;m<3;m++)f[v*3+m]=d[v*3]*p[m]+d[v*3+1]*p[3+m]+d[v*3+2]*p[6+m];return f},h=d=>[s.r[0]*d[0]+s.r[1]*d[1]+s.r[2]*d[2],s.r[3]*d[0]+s.r[4]*d[1]+s.r[5]*d[2],s.r[6]*d[0]+s.r[7]*d[1]+s.r[8]*d[2]];r.translate=(d,p,f)=>{let v=h([d,p,f]);s.t=[s.t[0]+v[0]*s.s,s.t[1]+v[1]*s.s,s.t[2]+v[2]*s.s]},r.scale=d=>{s.s*=d},r.rotateY=d=>{let p=Math.cos(d),f=Math.sin(d);s.r=c(s.r,[p,0,f,0,1,0,-f,0,p])},r.vert=(d,p,f)=>{let v=f||r.curMat,m=h(d),g=E0(h(p));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),n.push(v[0],v[1],v[2]),t.length/3-1};let l=d=>[t[d*3],t[d*3+1],t[d*3+2]],u=d=>[e[d*3],e[d*3+1],e[d*3+2]];return r.tri=(d,p,f)=>{let v=l(d),m=hl(wa(l(p),v),wa(l(f),v)),g=_a(_a(u(d),u(p)),u(f));Xf(m,g)<0?o.push(d,f,p):o.push(d,p,f)},r.box=(d,p,f,v,m,g,x)=>{let b=[[[d,p,f],[v,p,f],[d,m,f],[v,m,f],[0,0,-1]],[[v,p,g],[d,p,g],[v,m,g],[d,m,g],[0,0,1]],[[d,p,g],[d,p,f],[d,m,g],[d,m,f],[-1,0,0]],[[v,p,f],[v,p,g],[v,m,f],[v,m,g],[1,0,0]],[[d,m,f],[v,m,f],[d,m,g],[v,m,g],[0,1,0]],[[d,p,g],[v,p,g],[d,p,f],[v,p,f],[0,-1,0]]];for(let w of b){let M=r.vert(w[0],w[4],x),_=r.vert(w[1],w[4],x),S=r.vert(w[2],w[4],x),O=r.vert(w[3],w[4],x);r.tri(M,_,S),r.tri(_,O,S)}},r.surface=(d,p,f,v)=>{v=v||{};let m=.001,g=M=>Math.min(1,Math.max(0,M)),x=[],b=[];for(let M=0;M<=p;M++){let _=[],S=[];for(let O=0;O<=f;O++){let N=M/p,G=O/f,F=d(N,G),j=Math.min(1-m,Math.max(m,N)),D=v.wrapV?G:Math.min(1-m,Math.max(m,G)),B=wa(d(g(j+m),D),d(g(j-m),D)),ut=v.wrapV?D+m:g(D+m),Rt=v.wrapV?D-m:g(D-m),Nt=wa(d(j,ut),d(j,Rt)),bt=hl(B,Nt);wu(bt)<1e-14&&(bt=v.inside?wa(F,v.inside(N,G)):[0,1,0]),bt=E0(bt),v.inside&&Xf(bt,wa(F,v.inside(N,G)))<0&&(bt=ia(bt,-1));let rt=v.mat?v.mat(N,G,F):null;_.push(r.vert(F,bt,rt)),v.double&&S.push(r.vert(F,ia(bt,-1),rt))}x.push(_),b.push(S)}let w=M=>{for(let _=0;_<p;_++)for(let S=0;S<f;S++){let O=M[_][S],N=M[_+1][S],G=M[_][S+1],F=M[_+1][S+1];r.tri(O,N,G),r.tri(N,F,G)}};w(x),v.double&&w(b)},r.ellipsoid=(d,p,f,v,m)=>{m=m||{};let g=m.warp||null;r.surface((x,b)=>{let w=x*Math.PI,M=b*Math.PI*2,_=g?g(x,b):1;return[d[0]+p[0]*_*Math.sin(w)*Math.cos(M),d[1]+p[1]*_*Math.cos(w),d[2]+p[2]*_*Math.sin(w)*Math.sin(M)]},f||10,v||14,{wrapV:!0,inside:()=>d,mat:m.mat})},r.tube=(d,p,f,v,m)=>{m=m||{};let g=40,x=[],b=null;for(let _=0;_<=g;_++){let S=_/g,O=Hi(d,Math.max(0,S-.01)),N=Hi(d,Math.min(1,S+.01)),G=E0(wa(N,O)),F;if(b)F=E0(wa(b,ia(G,Xf(b,G))));else{let j=Math.abs(G[1])<.9?[0,1,0]:[1,0,0];F=E0(hl(G,j))}x.push({N:F,B:E0(hl(G,F))}),b=F}let w=_=>{let S=Math.min(Math.max(_,0),1)*g,O=Math.min(g-1,Math.floor(S)),N=S-O,G=x[O],F=x[O+1];return{N:E0(_a(ia(G.N,1-N),ia(F.N,N))),B:E0(_a(ia(G.B,1-N),ia(F.B,N)))}},M=m.squash||[1,1];r.surface((_,S)=>{let O=Hi(d,_),N=w(_),G=p(_),F=S*Math.PI*2;return _a(O,_a(ia(N.N,Math.cos(F)*G*M[0]),ia(N.B,Math.sin(F)*G*M[1])))},f||12,v||8,{wrapV:!0,inside:_=>Hi(d,_),mat:m.mat})},r.lathe=(d,p,f,v,m)=>{m=m||{};let g=[];for(let x=0;x<d.length-1;x++){let b=d[x+1][0]-d[x][0],w=d[x+1][1]-d[x][1];g.push(E0([w,-b,0]))}for(let x=0;x<d.length-1;x++){let b=d[x],w=d[x+1],M=x===0||b[2]===1,_=x===d.length-2||w[2]===1,S=M?g[x]:E0(_a(g[x-1],g[x])),O=_?g[x]:E0(_a(g[x],g[x+1])),N=[],G=[];for(let F=0;F<=v;F++){let j=F/v*Math.PI*2,D=Math.cos(j),B=Math.sin(j),ut=m.mat?m.mat(j,b[1]):null,Rt=m.mat?m.mat(j,w[1]):null;N.push(r.vert([p+b[0]*D,b[1],f+b[0]*B],[S[0]*D,S[1],S[0]*B],ut)),G.push(r.vert([p+w[0]*D,w[1],f+w[0]*B],[O[0]*D,O[1],O[0]*B],Rt))}for(let F=0;F<v;F++)r.tri(N[F],N[F+1],G[F]),r.tri(N[F+1],G[F+1],G[F])}},r}Im.exports={createBuilder:W4,catmull:Hi,curve1:j4,sub:wa,add:_a,mul:ia,dot:Xf,cross:hl,norm:E0,len:wu}});var Gm=Mt((mz,Dm)=>{"use strict";var{norm:Yf,add:Kf,mul:Ba,sub:V4,cross:Fm}=Fs(),qm=Math.PI*2,X4=(t,e,o)=>{let n=Math.min(1,Math.max(0,(o-t)/(e-t)));return n*n*(3-2*n)};function Y4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function K4(t,e,o,n,r,a){let s=(d,p)=>[7,d*a,p];t.curMat=[0,0,0],t.box(e-a*1.36,n,o-a*1.36,e+a*1.36,n+.22,o+a*1.36),t.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],e,o,56,{mat:s});let i=n+.55,c=r-i,h=20,l=6,u=a*.075;return t.surface((d,p)=>{let f=i+d*c,v=a*(.96-.12*d),m=p*qm,g=p*h%1,x=v-u*4*g*(1-g);return[e+x*Math.cos(m),f,o+x*Math.sin(m)]},10,h*l,{wrapV:!0,inside:d=>[e,i+d*c,o],mat:(d,p)=>[7,p*qm*a,i+d*c]}),t.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,r+.33,o-a*1.42,e+a*1.42,r+.53,o+a*1.42),r+.53}function Q4(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function Z4(t,e,o,n,r){t.save(),t.translate(e,0,o),Q4(t,n,r),t.restore()}function J4(t,e,o,n,r,a){let s=Y4(n),i=a?Yf([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(r||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,h=.86;for(let l=0;l<c;l++){let u=l>=c-2,d=l*2.399963+s()*.5,p=[Math.cos(d),0,Math.sin(d)],f=[-Math.sin(d),0,Math.cos(d)],v=l*.618%1,m=u?.06+s()*.06:.12+.62*v,g=1;if(i){let bt=p[0]*i[0]+p[2]*i[2];g=.25+.75*X4(-.7,.5,bt),m*=g}let x=u?1.1+s()*.25:.85+.55*(1-v*.55)+s()*.15,b=u?1+s()*.2:.95+s()*.28,w=u?.055:.215+s()*.05,M=.04+s()*.05,_=[p[0]*M,h,p[2]*M],S=[_[0]+p[0]*Math.sin(m)*x*.92,_[1]+Math.cos(m)*x,_[2]+p[2]*Math.sin(m)*x*.92],O=[_[0]+p[0]*Math.sin(m*.5)*x*.45,_[1]+x*.5,_[2]+p[2]*Math.sin(m*.5)*x*.45];t.curMat=[4,0,0],t.tube([_,O,S],bt=>.02-.008*bt,8,7);let N=24,G=m*.9+.05,F=m+(u?.12:(.95+.45*v)*(.35+.65*g)),j=[S],D=[],B=S;for(let bt=0;bt<N;bt++){let rt=bt/N,qt=G+(F-G)*rt*rt,xe=[p[0]*Math.sin(qt),Math.cos(qt),p[2]*Math.sin(qt)];D.push(xe),B=Kf(B,Ba(xe,b/N)),j.push(B)}D.push(D[D.length-1]);let ut=bt=>{let rt=bt*N,qt=Math.min(N-1,Math.floor(rt)),xe=rt-qt;return Kf(Ba(j[qt],1-xe),Ba(j[qt+1],xe))},Rt=bt=>{let rt=bt*N,qt=Math.min(N,Math.floor(rt)),xe=Math.min(N,qt+1),he=rt-qt;return Yf(Kf(Ba(D[qt],1-he),Ba(D[xe],he)))},Nt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((bt,rt)=>{let qt=rt*2-1,xe=ut(bt),he=Rt(bt),De=Nt*bt,Ae=Kf(Ba(f,Math.cos(De)),Ba(Fm(he,f),Math.sin(De)));Ae=Yf(V4(Ae,Ba(he,Ae[0]*he[0]+Ae[1]*he[1]+Ae[2]*he[2])));let ho=Yf(Fm(Ae,he)),yo=w*Math.pow(Math.sin(Math.PI*Math.pow(bt,.72)),.85),Uo=.3*yo*Math.abs(qt)+.012*Math.sin(bt*40+qt*2)*Math.abs(qt)*(u?0:1),se=-.1*yo*qt*qt*qt*qt,Se=Uo+se;return[xe[0]+Ae[0]*qt*yo+ho[0]*Se,xe[1]+Ae[1]*qt*yo+ho[1]*Se,xe[2]+Ae[2]*qt*yo+ho[2]*Se]},14,8,{double:!0,mat:(bt,rt)=>[2,rt*2-1,bt]})}t.restore()}Dm.exports={addFlutedColumn:K4,addStatue:Z4,addPlant:J4}});var ja=Mt((gz,jm)=>{"use strict";var Lt={xc:7,r:2.5,spring:4.7};Lt.x0=Lt.xc-Lt.r;Lt.x1=Lt.xc+Lt.r;Lt.top=Lt.spring+Lt.r;var Fr=.06,cn=.1,Hm=.08,Qf=Lt.r,Zf=[Lt.x0+Qf/3,Lt.x0+2*Qf/3,Lt.xc+Qf/3,Lt.xc+2*Qf/3],Ui=.28,_u=[.95,1.65,2.35,3.05,3.75],Um=[1.05,1.8],ul=[8,0,0],c0=[0,0,0];function z0(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function Bi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function Jf(t,e,o,n,r,a,s=48,i=0,c=Math.PI){let h=(l,u,d)=>[Lt.xc+u*Math.cos(l),Lt.spring+u*Math.sin(l),d];for(let l=0;l<s;l++){let u=i+(c-i)*l/s,d=i+(c-i)*(l+1)/s,p=(u+d)/2;Bi(t,h(u,e,r),h(d,e,r),h(d,o,r),h(u,o,r),[0,0,1],a),Bi(t,h(u,o,n),h(d,o,n),h(d,e,n),h(u,e,n),[0,0,-1],a),Bi(t,h(u,e,n),h(d,e,n),h(d,e,r),h(u,e,r),[-Math.cos(p),-Math.sin(p),0],a),Bi(t,h(d,o,n),h(u,o,n),h(u,o,r),h(d,o,r),[Math.cos(p),Math.sin(p),0],a)}}function t_(t){let n=a=>[Lt.xc+Lt.r*Math.cos(a),Lt.spring+Lt.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?Lt.r/Math.abs(s):1/0,h=i>1e-6?(8-Lt.spring)/i:1/0,l=Math.min(c,h);return[Math.min(Lt.x1,Math.max(Lt.x0,Lt.xc+s*l)),Math.min(8,Lt.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),h=n(i),l=r(s),u=r(i);for(let[p,f]of[[.35,1],[-.35,-1]])Bi(t,[c[0],c[1],p],[h[0],h[1],p],[u[0],u[1],p],[l[0],l[1],p],[0,0,f],c0);let d=(s+i)/2;Bi(t,[c[0],c[1],-.35],[h[0],h[1],-.35],[h[0],h[1],.35],[c[0],c[1],.35],[-Math.cos(d),-Math.sin(d),0],c0)}}function e_(t){z0(t,-.35,0,-.35,Lt.x0,8,.35,c0),z0(t,Lt.x1,0,-.35,14+.35,8,.35,c0),t_(t),Bm(t)}function Bm(t){z0(t,Lt.x0-.32,.3,.35,Lt.x0,Lt.spring,.35+.07,c0),z0(t,Lt.x1,.3,.35,Lt.x1+.32,Lt.spring,.35+.07,c0),z0(t,Lt.x0-.32-.05,0,.35,Lt.x0,.3,.35+.07+.04,c0),z0(t,Lt.x1,0,.35,Lt.x1+.32+.05,.3,.35+.07+.04,c0),z0(t,Lt.x0-.32-.06,Lt.spring-.12,.35,Lt.x0,Lt.spring,.35+.07+.05,c0),z0(t,Lt.x1,Lt.spring-.12,.35,Lt.x1+.32+.06,Lt.spring,.35+.07+.05,c0),Jf(t,Lt.r,Lt.r+.32,.35,.35+.07,c0),Jf(t,Lt.r+.32,Lt.r+.32+.06,.35,.35+.07+.03,c0),z0(t,Lt.xc-.22,Lt.top-.08,.35,Lt.xc+.22,Lt.top+.32+.12,.35+.07+.06,c0)}function o_(t,e){e=e||"all";let o=e==="all",n=o||e==="fixed",r=-Hm/2,a=Hm/2,s=(d,p,f,v,m=0)=>z0(t,d-m,p,r,f+m,v,a,ul),i=d=>Lt.spring+Math.sqrt(Math.max(0,Lt.r*Lt.r-(d-Lt.xc)*(d-Lt.xc))),c=e==="right"?Lt.xc:Lt.x0,h=e==="left"?Lt.xc:Lt.x1,l=d=>o||e==="left"&&d<Lt.xc||e==="right"&&d>Lt.xc,u=o?null:Lt.spring-.06;if(n){s(Lt.x0,0,Lt.x0+cn,Lt.spring),s(Lt.x1-cn,0,Lt.x1,Lt.spring),Jf(t,Lt.r-cn,Lt.r,r,a,ul,64),s(Lt.x0,0,Lt.x1,.05),s(Lt.x0,Lt.spring-.06,Lt.x1,Lt.spring+.06);for(let d of Um)Jf(t,d-Fr/2,d+Fr/2,r,a,ul,48)}if(o){s(Lt.x0,0,Lt.x1,Ui),s(Lt.xc-cn/2,0,Lt.xc+cn/2,Lt.top-cn*.5);for(let d of Zf)s(d-Fr/2,Ui,d+Fr/2,i(d)-cn*.5);for(let d of _u)s(Lt.x0,d-Fr/2,Lt.x1,d+Fr/2)}else if(e==="fixed"){s(Lt.xc-cn/2,Lt.spring+.06,Lt.xc+cn/2,Lt.top-cn*.5);for(let d of Zf)s(d-Fr/2,Lt.spring+.06,d+Fr/2,i(d)-cn*.5)}else{let d=e==="left"?Lt.x0+cn:Lt.x1-cn;s(Math.min(d,d+(e==="left"?cn*.8:-cn*.8)),.05,Math.max(d,d+(e==="left"?cn*.8:-cn*.8)),u),s(c,.05,h,Ui),s(c,u-.07,h,u);let p=e==="left"?Lt.xc-cn/2:Lt.xc;s(p,.05,p+cn/2,u);for(let f of Zf)l(f)&&s(f-Fr/2,Ui,f+Fr/2,u-.07);for(let f of _u)s(c,f-Fr/2,h,f+Fr/2)}for(let d of[-1,1]){let p=Lt.xc+d*.16;l(p)&&(z0(t,p-.02,1.05,a,p+.02,1.13,a+.06,ul),z0(t,p-(d>0?0:.14),1.07,a+.05,p+(d>0?.14:0),1.11,a+.08,ul))}}function n_(t){t=t||"all";let e=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=Lt;if(t!=="fixed"){let h=t==="right"?a:n,l=t==="left"?a:r;if(e.push([h,0,o],[l,0,o],[l,i,o],[h,0,o],[l,i,o],[h,i,o]),t!=="all")return e}let c=48;for(let h=0;h<c;h++){let l=Math.PI*h/c,u=Math.PI*(h+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(u),i+s*Math.sin(u),o])}return e}var qo=t=>t.toFixed(4);function r_(){let t=Zf.map(n=>`vb = max(vb, barCover(abs(q.x - ${qo(n)}), ${qo(Fr/2)}, soft));`).join(`
		`),e=_u.map(n=>`hb = max(hb, barCover(abs(q.y - ${qo(n)}), ${qo(Fr/2)}, soft));`).join(`
		`),o=Um.map(n=>`ab = max(ab, barCover(abs(rr - ${qo(n)}), ${qo(Fr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${qo(Lt.x0)} - soft, ${qo(Lt.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${qo(Lt.x1)} - soft, ${qo(Lt.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${qo(Lt.xc)}, ${qo(Lt.spring)}));
		float arch = q.y < ${qo(Lt.spring)} ? 1.0 : 1.0 - smoothstep(${qo(Lt.r)} - soft, ${qo(Lt.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${qo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${qo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${qo(Lt.xc)}, ${qo(Lt.spring)}));
		float vb = barCover(abs(q.x - ${qo(Lt.xc)}), ${qo(cn/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${qo(Lt.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${qo(Ui)} - soft, ${qo(Ui)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${qo(Lt.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${qo(Lt.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${qo(Lt.x0+cn/2)}), ${qo(cn/2)}, soft),
			barCover(abs(q.x - ${qo(Lt.x1-cn/2)}), ${qo(cn/2)}, soft));
		frame = q.y < ${qo(Lt.spring)} ? frame : barCover(abs(rr - ${qo(Lt.r-cn/2)}), ${qo(cn/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}jm.exports={addEntranceWall:e_,addSurround:Bm,addFrames:o_,glassPanes:n_,doorLightGLSL:r_,DOOR:Lt,WALL:.35}});var Wi=Mt((xz,Qm)=>{"use strict";var Ds=1.1583333333333334,Gs=(13.05-8*.16)/9,ku=Ds+.16,Su=Gs+.16,ka=14/2-7.75/2,l0=15,dl=ka+7.75,Ma=l0+13.05,f0=.3,Sa={y:8+.18,inset:.15},qs={y:8+.36,inset:f0},Eu=8+.2,pl=8+.62,zu=8+.9,Au=.016,Ym=.28,Km=.66,a_=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),s_=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),i_=[9,0,0],mr=[10,0,0];function ji(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function qr(t,e,o,n,r,a,s){ji(t,[e,a,o],[n,a,o],[n,a,r],[e,a,r],[0,-1,0],s)}function Mu(t,e,o,n,r,a,s,i){ji(t,[e,a,o],[n,a,o],[n,s,o],[e,s,o],[0,0,1],i),ji(t,[n,a,r],[e,a,r],[e,s,r],[n,s,r],[0,0,-1],i),ji(t,[e,a,r],[e,a,o],[e,s,o],[e,s,r],[1,0,0],i),ji(t,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function Wm(t,e,o,n,r){qr(t,e[0],e[1],e[2],o[1],n,r),qr(t,e[0],o[3],e[2],e[3],n,r),qr(t,e[0],o[1],o[0],o[3],n,r),qr(t,o[2],o[1],e[2],o[3],n,r)}var Vm=t=>ka+t*ku,Xm=t=>l0+t*Su;function c_(t,e,o=48){let n=[ka-f0,l0-f0,dl+f0,Ma+f0],r=(h,l)=>[h[0]+l,h[1]+l,h[2]-l,h[3]-l],a=r(n,Sa.inset),s=r(n,qs.inset);qr(t,0,0,14,n[1],8,e),qr(t,0,n[3],14,o,8,e),qr(t,0,n[1],n[0],n[3],8,e),qr(t,n[2],n[1],14,n[3],8,e);let i=.06,c=.06;t.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],mr),t.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,mr),t.box(n[0]-i,8-c,n[1],n[0],8,n[3],mr),t.box(n[2],8-c,n[1],n[2]+i,8,n[3],mr),Mu(t,...n.slice(0,2),...n.slice(2),8,Sa.y,mr),Wm(t,n,a,Sa.y,mr),Mu(t,...a.slice(0,2),...a.slice(2),Sa.y,qs.y,mr),Wm(t,a,s,qs.y,mr);for(let h=1;h<6;h++){let l=Vm(h)-.16;t.box(l,Eu,l0,l+.16,qs.y,Ma,mr)}for(let h=1;h<9;h++){let l=Xm(h)-.16;t.box(ka,Eu,l,dl,qs.y,l+.16,mr)}for(let h=0;h<9;h++)for(let l=0;l<6;l++){let u=Vm(l),d=Xm(h);Mu(t,u,d,u+Ds,d+Gs,qs.y,zu,mr),qr(t,u,d,u+Ds,d+Gs,zu,i_),l_(t,u+Ds/2,d+Gs/2,Ds/2,Gs/2)}}function l_(t,e,o,n,r){let a=pl,s=Au;qr(t,e-n,o-s,e+n,o+s,a,mr),qr(t,e-s,o-r,e+s,o+r,a,mr);for(let i of[1,-1]){let c=Math.hypot(n,r),h=n/c,l=i*r/c,u=-l*s,d=h*s;ji(t,[e-h*c+u,a,o-l*c+d],[e+h*c+u,a,o+l*c+d],[e+h*c-u,a,o+l*c-d],[e-h*c-u,a,o-l*c-d],[0,-1,0],mr)}for(let i of[Ym,Km]){let c=i*n,h=i*r;qr(t,e-c-s,o-h-s,e+c+s,o-h+s,a,mr),qr(t,e-c-s,o+h-s,e+c+s,o+h+s,a,mr),qr(t,e-c-s,o-h+s,e-c+s,o+h-s,a,mr),qr(t,e+c-s,o-h+s,e+c+s,o+h-s,a,mr)}}var Ye=t=>t.toFixed(4);function f_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${a_.map(Ye).join(", ")});
	const vec3 SKY_MOON = vec3(${s_.map(Ye).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Ye(ka)}, ${Ye(l0)});
		vec2 pitch = vec2(${Ye(ku)}, ${Ye(Su)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Ye(5)} || cell.y > ${Ye(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Ye(Ds)}, ${Ye(Gs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Ye(Au)} - soft, ${Ye(Au)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Ye(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Ye(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Ye(Sa.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Ye(Eu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Ye(qs.y)} - p.y) / L.y)).xz;
		float tG = (${Ye(pl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Ye(zu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Ye(ka-f0)}, ${Ye(l0-f0)}, ${Ye(dl+f0)}, ${Ye(Ma+f0)}), soft)
		           * rectOpen(q1, vec4(${Ye(ka-f0+Sa.inset)}, ${Ye(l0-f0+Sa.inset)}, ${Ye(dl+f0-Sa.inset)}, ${Ye(Ma+f0-Sa.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Ye(ka)}, ${Ye(l0)});
		vec2 pitch = vec2(${Ye(ku)}, ${Ye(Su)});
		vec2 paneHalf = vec2(${Ye(Ds/2)}, ${Ye(Gs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Ye(Ym)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Ye(Km)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Ye(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Ye(pl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Ye(ka)}, ${Ye(l0)}, ${Ye(dl)}, ${Ye(Ma)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Ye(14/2)}, ${Ye((l0+Ma)/2)}) - L.xz * (${Ye(pl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Ye(7.75/2)}, ${Ye(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Ye(l0-3)}, ${Ye(l0+2)}, p.z)
		        * (1.0 - smoothstep(${Ye(Ma-2)}, ${Ye(Ma+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Ye(7.75/2)}, ${Ye(14/2)}, abs(p.x - ${Ye(14/2)}));
		return z * x;
	}`}Qm.exports={addSkylight:c_,skylightGLSL:f_,Z_START:l0,Z_END:Ma,GLASS_Y:pl,HEIGHT:8}});var _r=Mt((yz,o2)=>{"use strict";var Xi=ja(),Ru=8,ln=.35,Zt={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Ru},Zm=(Zt.z1-Zt.z0)/2,Tu=Zt.crown-Zt.spring,Nu=(Tu*Tu+Zm*Zm)/(2*Tu),Ou=Zt.crown-Nu;function Vi(t){let e=t-Zt.zc;return Ou+Math.sqrt(Math.max(0,Nu*Nu-e*e))}var Fe={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},U0=Array.from({length:Fe.count},(t,e)=>Fe.first+e*Fe.pitch),t2=U0.slice(1).map(t=>t-Fe.pitch/2),h_=[U0[0],U0[2],U0[4]],eh=[U0[1],U0[3]],Qr={r:1.3,sill:.62,spring:3.3},Bo=[0,0,0],vl=[11,0,0],Wa=[10,0,0],ml=[8,0,0];function ar(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function Zr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function gl(t,e){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=e,h=new Set([o,n]);for(let v of i){h.add(v.u0),h.add(v.u1);let m=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.08)));for(let g=1;g<m;g++)h.add(v.u0+(v.u1-v.u0)*g/m)}for(let v of e.cuts||[])h.add(v);let l=e.topStep||.5;for(let v=o;v<n;v+=l)h.add(v);let u=[...h].filter(v=>v>=o-1e-9&&v<=n+1e-9).sort((v,m)=>v-m),d=(v,m)=>v.bot?v.bot(m):v.bottom,p=(v,m)=>{let g=s(v),x=m.map(M=>[Math.max(0,d(M,v)),Math.min(M.head(v),g)]).filter(M=>M[1]>M[0]).sort((M,_)=>M[0]-_[0]),b=[],w=0;for(let M of x)M[0]>w+1e-6&&b.push([w,M[0]]),w=Math.max(w,M[1]);return g>w+1e-6&&b.push([w,g]),b},f=(v,m,g)=>[v,m,g];for(let v=0;v<u.length-1;v++){let m=u[v],g=u[v+1],x=(m+g)/2,b=i.filter(N=>x>N.u0&&x<N.u1),w=b.length?Math.max(m,Math.max(...b.map(N=>N.u0))+1e-7):m,M=b.length?Math.min(g,Math.min(...b.map(N=>N.u1))-1e-7):g,_=p(w,b),S=p(M,b),O=Math.min(_.length,S.length);for(let N=0;N<O;N++){let[G,F]=_[N],[j,D]=S[N];F-G<1e-6&&D-j<1e-6||(ar(t,f(m,G,a),f(g,j,a),f(g,D,a),f(m,F,a),[0,0,1],c),e.frontOnly||ar(t,f(g,j,r),f(m,G,r),f(m,F,r),f(g,D,r),[0,0,-1],c))}}e.noEnds||(ar(t,f(o,0,r),f(o,0,a),f(o,s(o),a),f(o,s(o),r),[-1,0,0],c),ar(t,f(n,0,a),f(n,0,r),f(n,s(n),r),f(n,s(n),a),[1,0,0],c));for(let v of i){if(v.noReveal)continue;let m=v.mat||e.revealMat||c,g=Math.max(0,d(v,v.u0+1e-7)),x=Math.max(0,d(v,v.u1-1e-7)),b=Math.min(v.head(v.u0+1e-7),s(v.u0)),w=Math.min(v.head(v.u1-1e-7),s(v.u1));b>g+1e-6&&ar(t,f(v.u0,g,a),f(v.u0,g,r),f(v.u0,b,r),f(v.u0,b,a),[1,0,0],m),w>x+1e-6&&ar(t,f(v.u1,x,r),f(v.u1,x,a),f(v.u1,w,a),f(v.u1,w,r),[-1,0,0],m);let M=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.06)));for(let _=0;_<M;_++){let S=v.u0+(v.u1-v.u0)*_/M,O=v.u0+(v.u1-v.u0)*(_+1)/M,N=Math.max(S,v.u0+1e-7),G=Math.min(O,v.u1-1e-7),F=Math.min(v.head(N),s(S)),j=Math.min(v.head(G),s(O));if(!(F>=s(S)-1e-6&&j>=s(O)-1e-6)){let ut=O-S,Rt=j-F,Nt=Math.hypot(ut,Rt)||1;ar(t,f(S,F,r),f(O,j,r),f(O,j,a),f(S,F,a),[Rt/Nt,-ut/Nt,0],m)}let D=d(v,N),B=d(v,G);if(D>1e-6||B>1e-6){let ut=O-S,Rt=B-D,Nt=Math.hypot(ut,Rt)||1;ar(t,f(O,B,r),f(S,D,r),f(S,D,a),f(O,B,a),[-Rt/Nt,ut/Nt,0],m)}}}}var Lu=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function u_(t,e){let o=Qr.r,n=Qr.sill,r=Qr.spring,a=Zt.z0,s=24,i=(p,f,v)=>[e+Math.cos(p)*f,v,a-Math.sin(p)*f];for(let p=0;p<s;p++){let f=Math.PI*p/s,v=Math.PI*(p+1)/s,m=[-Math.cos(f),0,Math.sin(f)],g=[-Math.cos(v),0,Math.sin(v)],x=[t.vert(i(f,o,n),m,Bo),t.vert(i(v,o,n),g,Bo),t.vert(i(v,o,r),g,Bo),t.vert(i(f,o,r),m,Bo)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,h=(p,f)=>[e+Math.cos(p)*Math.cos(f)*o,r+Math.sin(f)*o,a-Math.sin(p)*Math.cos(f)*o],l=(p,f)=>[-Math.cos(p)*Math.cos(f),-Math.sin(f),Math.sin(p)*Math.cos(f)];for(let p=0;p<s;p++)for(let f=0;f<c;f++){let v=Math.PI*p/s,m=Math.PI*(p+1)/s,g=Math.PI/2*f/c,x=Math.PI/2*(f+1)/c,b=[t.vert(h(v,g),l(v,g),Wa),t.vert(h(m,g),l(m,g),Wa),t.vert(h(m,x),l(m,x),Wa),t.vert(h(v,x),l(v,x),Wa)];t.tri(b[0],b[1],b[2]),t.tri(b[0],b[2],b[3])}for(let p=1;p<8;p++){let f=Math.PI*p/8,v=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;v.push(h(f,g).map((x,b)=>x-l(f,g)[b]*.02))}t.tube(v,m=>.035*(1-m*.6),12,6,{mat:()=>Wa})}let u=t.vert([e,n,a],[0,1,0],Bo);for(let p=0;p<s;p++){let f=Math.PI*p/s,v=Math.PI*(p+1)/s;t.tri(u,t.vert(i(f,o,n),[0,1,0],Bo),t.vert(i(v,o,n),[0,1,0],Bo))}Zr(t,e-o-.12,n-.1,a,e+o+.12,n+.02,a+.12,Bo),Zr(t,e-o-.16,n-.2,a,e+o+.16,n-.1,a+.07,Bo);let d=.16;for(let p=0;p<s;p++){let f=Math.PI*p/s,v=Math.PI*(p+1)/s,m=(g,x,b)=>[e+Math.cos(g)*x,r+Math.sin(g)*x,b];ar(t,m(f,o,a+.05),m(v,o,a+.05),m(v,o+d,a+.05),m(f,o+d,a+.05),[0,0,1],Bo),ar(t,m(f,o+d,a),m(v,o+d,a),m(v,o+d,a+.05),m(f,o+d,a+.05),[Math.cos((f+v)/2),Math.sin((f+v)/2),0],Bo),ar(t,m(f,o,a),m(v,o,a),m(v,o,a+.05),m(f,o,a+.05),[-Math.cos((f+v)/2),-Math.sin((f+v)/2),0],Bo)}for(let p of[-1,1]){let f=e+p*o,v=e+p*(o+d);Zr(t,f,n,a,v,r,a+.05,Bo),Zr(t,f-p*.02,r-.12,a,v+p*.06,r,a+.09,Bo)}Zr(t,e-.11,r+o-.04,a,e+.11,r+o+d+.1,a+.09,Bo),t.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],e,a-.62,40,{mat:()=>Bo})}var d_=Qr.sill+.4,p_=Zt.z0-.62;function v_(t){ar(t,[14,0,Zt.z0-ln],[Zt.x1+ln,0,Zt.z0-ln],[Zt.x1+ln,0,Zt.z1+ln],[14,0,Zt.z1+ln],[0,1,0],Bo),t.curMat=vl,gl(t,{u0:14+ln,u1:Zt.x1+2*ln,w0:Zt.z0-2*ln,w1:Zt.z0,top:()=>Zt.spring,holes:eh.map(h=>({u0:h-Qr.r,u1:h+Qr.r,bottom:Qr.sill,head:Lu(h,Qr.r,Qr.spring),noReveal:!0})),mat:vl,cuts:[Zt.x1]});for(let h of eh)u_(t,h);t.save(),t.translate(0,0,Zt.z1),t.rotateY(Math.PI),t.translate(-(Zt.x1+2*ln),0,-2*ln);let e=h=>Zt.x1+2*ln-h;gl(t,{u0:e(Zt.x1+2*ln),u1:e(13.65),w0:0,w1:2*ln,top:()=>Zt.spring,holes:U0.map(h=>({u0:e(h+Fe.halfW),u1:e(h-Fe.halfW),bottom:Fe.sill,head:Lu(e(h),Fe.halfW,Fe.spring)})),mat:vl,revealMat:Bo}),t.restore(),t.save(),t.translate(Zt.x1,0,0),t.rotateY(-Math.PI/2);let o=Xi.DOOR,n=Zt.zc,r=o.r;gl(t,{u0:Zt.z0-2*ln,u1:Zt.z1+2*ln,w0:-2*ln,w1:0,top:h=>h<Zt.z0||h>Zt.z1?Zt.spring:Vi(h),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:Lu(n,r,o.spring)}],mat:vl,revealMat:Bo}),t.restore(),t.save(),t.translate(14+ln,0,0),t.rotateY(-Math.PI/2),gl(t,{u0:Zt.z0,u1:Zt.z1,w0:-0,w1:2*ln,top:()=>Ru,topStep:.15,holes:[{u0:Zt.z0,u1:Zt.z1,bottom:0,head:h=>Vi(h)}],mat:vl,revealMat:Bo}),t.restore();let a=14+ln,s=Math.ceil((Zt.x1-a)/1),i=28,c=[];for(let h=0;h<=s;h++){let l=a+(Zt.x1-a)*h/s,u=[];for(let d=0;d<=i;d++){let p=Zt.z0+(Zt.z1-Zt.z0)*d/i,f=Vi(p),v=[0,Ou-f,Zt.zc-p],m=Math.hypot(v[1],v[2]);u.push(t.vert([l,f,p],[0,v[1]/m,v[2]/m],Wa))}c.push(u)}for(let h=0;h<s;h++)for(let l=0;l<i;l++)t.tri(c[h][l],c[h+1][l],c[h][l+1]),t.tri(c[h+1][l],c[h+1][l+1],c[h][l+1])}function Jm(t,e,o,n){let a=[];for(let s=0;s<=32;s++){let i=Zt.z0+(Zt.z1-Zt.z0)*s/32,c=Vi(i),h=Ou-c,l=Zt.zc-i,u=Math.hypot(h,l),d=[c+h/u*n,i+l/u*n];a.push({y:c,z:i,iy:d[0],iz:d[1],n:[0,h/u,l/u]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];ar(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,Bo),ar(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],Bo),ar(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],Bo)}}function th(t,e,o,n){let s=o,i=o+n*.16;Zr(t,e-.28,0,s,e+.28,Zt.spring-.3,i,Bo),Zr(t,e-.28-.06,0,s,e+.28+.06,.32,o+n*(.16+.05),Bo),Zr(t,e-.28-.05,Zt.spring-.3,s,e+.28+.05,Zt.spring-.1,o+n*(.16+.05),Bo),Zr(t,e-.28-.1,Zt.spring-.1,s,e+.28+.1,Zt.spring,o+n*(.16+.1),Bo)}function m_(t,e){let o=Vi(Zt.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(n,e,Zt.zc,48,{mat:()=>Wa});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=e+Math.cos(a)*.32,i=Zt.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=Wa,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function g_(t){t.curMat=Bo;for(let[e,o]of[[Zt.z0,1],[Zt.z1,-1]])Zr(t,14.35,Zt.spring-.12,e,Zt.x1,Zt.spring,e+o*.1,Bo),Zr(t,14.35,Zt.spring-.04,e,Zt.x1,Zt.spring+.05,e+o*.18,Bo);for(let[e,o]of[[Zt.z0,1],[Zt.z1,-1]])Zr(t,14.35,0,e,Zt.x1,.42,e+o*.12,Bo),Zr(t,14.35,.42,e,Zt.x1,.5,e+o*.07,Bo);for(let e of t2)Jm(t,e,.24,.16),th(t,e,Zt.z0,1),th(t,e,Zt.z1,-1);for(let e of[14.35+.28,Zt.x1-.28])Jm(t,e,.28,.22),th(t,e,Zt.z0,1),th(t,e,Zt.z1,-1);for(let e of U0)m_(t,e)}function x_(t){let e=Zt.z1+ln,o=e-.04,n=e+.04,r=(i,c,h,l)=>Zr(t,i,c,o,h,l,n,ml),a=Fe.halfW,s=(i,c,h,l,u,d)=>{let p=(f,v,m)=>[i+v*Math.cos(f),Fe.spring+v*Math.sin(f),m];for(let f=0;f<d;f++){let v=l+(u-l)*f/d,m=l+(u-l)*(f+1)/d;ar(t,p(v,c,o),p(m,c,o),p(m,h,o),p(v,h,o),[0,0,-1],ml),ar(t,p(v,h,n),p(m,h,n),p(m,c,n),p(v,c,n),[0,0,1],ml)}};for(let i of U0){let c=i-a,h=i+a;r(c,Fe.sill,c+.07,Fe.spring),r(h-.07,Fe.sill,h,Fe.spring),r(c,Fe.sill,h,Fe.sill+.07),r(c,Fe.spring-.04,h,Fe.spring+.04);for(let u of[-.5,0,.5])r(i+u*a-.022,Fe.sill,i+u*a+.022,Fe.spring);let l=6;for(let u=1;u<l;u++){let d=Fe.sill+(Fe.spring-Fe.sill)*u/l;r(c,d-.02,h,d+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let u=1;u<6;u++){let d=Math.PI*u/6,p=Math.cos(d),f=Math.sin(d),v=.02,m=(g,x)=>[i+p*g-f*v*x,Fe.spring+f*g+p*v*x];ar(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],ml),ar(t,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],ml)}}}function y_(){let t=[],e=Zt.z1+ln;for(let o of U0){let n=o-Fe.halfW,r=o+Fe.halfW;t.push([n,Fe.sill,e],[r,Fe.sill,e],[r,Fe.spring,e],[n,Fe.sill,e],[r,Fe.spring,e],[n,Fe.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Fe.spring,e],[o+Fe.halfW*Math.cos(s),Fe.spring+Fe.halfW*Math.sin(s),e],[o+Fe.halfW*Math.cos(i),Fe.spring+Fe.halfW*Math.sin(i),e])}}return t}function e2(t,e){t.save(),t.translate(Zt.x1+ln,0,Zt.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function b_(t){e2(t,()=>{Xi.addSurround(t),Xi.addFrames(t,"fixed")})}function w_(t){return Xi.glassPanes(t||"fixed").map(([o,n,r])=>[Zt.x1+ln-r,n,Zt.zc-7+o])}function __(t){v_(t),g_(t),x_(t),b_(t),t.curMat=[0,0,0]}var M_={x:Zt.x1+ln,zLo:Zt.zc-Xi.DOOR.r,zHi:Zt.zc+Xi.DOOR.r},So=t=>t.toFixed(4);function k_(){return`
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
		float k = floor((q.x - ${So(Fe.first)}) / ${So(Fe.pitch)} + 0.5);
		if (k < 0.0 || k > ${So(Fe.count-1)}) return 0.0;
		float dx = q.x - (${So(Fe.first)} + k * ${So(Fe.pitch)});
		float side = 1.0 - smoothstep(${So(Fe.halfW)} - soft, ${So(Fe.halfW)} + soft, abs(dx));
		float sill = smoothstep(${So(Fe.sill)} - soft, ${So(Fe.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${So(Fe.spring)}));
		float head = q.y < ${So(Fe.spring)} ? 1.0 : 1.0 - smoothstep(${So(Fe.halfW)} - soft, ${So(Fe.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${So(Fe.halfW*.5)}), 0.022, soft));
		float rowH = ${So((Fe.spring-Fe.sill)/6)};
		float ry = (q.y - ${So(Fe.sill)}) / rowH;
		cover = max(cover, q.y < ${So(Fe.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${So(Fe.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${So(Zt.x0)} || p.z < ${So(Zt.z0-.1)} || p.z > ${So(Zt.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${So(Zt.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${So(Zt.z1+2*ln)} - p.z) / WIN_SKY.z;
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
		${eh.map(t=>`{ float d = abs(p.x - ${So(t)}); if (d < best) { best = d; lamp = vec3(${So(t)}, ${So(Qr.spring+.55)}, ${So(Zt.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${So(Zt.z0+1.6)} || p.z < ${So(Zt.z0-Qr.r-.1)} || p.x < ${So(Zt.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${So(Qr.r)}, ${So(Qr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${So(Zt.x0-1)}) return 0.0;
		float inC = smoothstep(${So(Zt.z0-1.5)}, ${So(Zt.z0)}, p.z) * smoothstep(${So(Zt.x0-1)}, ${So(Zt.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${So(Zt.z0)}, ${So(Zt.z1)}, p.z);
		return inC * near;
	}`}o2.exports={wallWithHoles:gl,windowLightGLSL:k_,addWing:__,windowGlass:y_,farDoorGlass:w_,atFarDoor:e2,FAR_DOOR:M_,vaultY:Vi,C:Zt,NICHE_X:eh,NICHE:Qr,NICHE_PLINTH_TOP:d_,NICHE_STATUE_Z:p_,WIN:Fe,winCentres:U0,piers:t2,PAINTING_X:h_,HEIGHT:Ru}});var A0=Mt((bz,a2)=>{"use strict";var Cu=_r(),nn=8,Qi=.35,Hs=14,Ki=4,ce={x0:Hs+Qi,x1:Hs+Qi+2*Ki,z0:5.9-Ki,z1:5.9+Ki,zc:5.9,cx:Hs+Qi+Ki,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:nn},oculus:3.3};ce.domeTop=ce.dome.base+ce.dome.r;var Zi={spokes:16,ringE:[.42,.95],bar:.035},Xn={sxz:1.32,sy:1.6,yaw:.6};Xn.crownC=[ce.cx,.4+3.4*Xn.sy,ce.zc];Xn.crownR=[2.3*Xn.sxz,1.9*Xn.sy,2.3*Xn.sxz];Xn.trunkR=.26*Xn.sxz;Xn.trunkTop=.4+2.2*Xn.sy;var n2={inner:1.05,outer:1.62,seat:.48,soil:.4},rh=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),sr=[0,0,0],Yi=[11,0,0],oh=[10,0,0],nh=[9,0,0],S_=[5,0,0],Pu=[3,0,0];function Ea(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function Dr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}var E_=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function z_(t){t.save(),t.translate(Hs+Qi,0,0),t.rotateY(-Math.PI/2),Cu.wallWithHoles(t,{u0:0,u1:Cu.C.z0,w0:0,w1:2*Qi,top:()=>nn,holes:[{u0:ce.zc-ce.arch.r,u1:ce.zc+ce.arch.r,bottom:0,head:E_(ce.zc,ce.arch.r,ce.arch.spring),step:.05}],mat:Yi,revealMat:sr,topStep:1}),t.restore();let e=Hs-Qi;for(let[s,i]of[[0,ce.zc-ce.arch.r],[ce.zc+ce.arch.r,Cu.C.z0]])Dr(t,e-.12,0,s,e,.42,i,sr),Dr(t,e-.07,.42,s,e,.5,i,sr);let o=e,n=.24,r=40,a=(s,i,c)=>[c,ce.arch.spring+Math.sin(s)*i,ce.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;Ea(t,a(i,ce.arch.r,o-.07),a(c,ce.arch.r,o-.07),a(c,ce.arch.r+n,o-.07),a(i,ce.arch.r+n,o-.07),[-1,0,0],sr),Ea(t,a(i,ce.arch.r+n,o),a(c,ce.arch.r+n,o),a(c,ce.arch.r+n,o-.07),a(i,ce.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],sr),Ea(t,a(i,ce.arch.r,o),a(c,ce.arch.r,o),a(c,ce.arch.r,o-.07),a(i,ce.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],sr)}Dr(t,o-.12,ce.arch.spring+ce.arch.r-.06,ce.zc-.17,o,ce.arch.spring+ce.arch.r+n+.16,ce.zc+.17,sr);for(let s of[-1,1]){let i=ce.zc+s*ce.arch.r,c=ce.zc+s*(ce.arch.r+n);Dr(t,o-.07,0,i,o,ce.arch.spring,c,sr),Dr(t,o-.13,ce.arch.spring-.16,i-s*.03,o,ce.arch.spring,c+s*.08,sr),Dr(t,o-.12,0,i-s*.03,o,.5,c+s*.06,sr)}}function A_(t){let{x0:e,x1:o,z0:n,z1:r}=ce;Ea(t,[Hs,0,n],[o,0,n],[o,0,r],[Hs,0,r],[0,1,0],sr),t.curMat=Yi,Ea(t,[o,0,n],[o,0,r],[o,nn,r],[o,nn,n],[-1,0,0],Yi),Ea(t,[e,0,n],[o,0,n],[o,nn,n],[e,nn,n],[0,0,1],Yi),Ea(t,[o,0,r],[e,0,r],[e,nn,r],[o,nn,r],[0,0,-1],Yi),Ea(t,[e,0,r],[e,0,n],[e,nn,n],[e,nn,r],[1,0,0],Yi),Dr(t,o-.12,0,n,o,.42,r,sr),Dr(t,e,0,n,o,.42,n+.12,sr),Dr(t,e,0,r-.12,o,.42,r,sr),Dr(t,o-.2,nn-.3,n,o,nn,r,sr),Dr(t,e,nn-.3,n,o,nn,n+.2,sr),Dr(t,e,nn-.3,r-.2,o,nn,r,sr),Dr(t,e,nn-.3,n,e+.2,nn,r,sr);let a=ce.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let x=Math.PI*2*g/s;i.push([ce.cx+Math.cos(x)*a,ce.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(Ki/Math.max(x,1e-6),Ki/Math.max(b,1e-6))};for(let g=0;g<s;g++){let x=Math.PI*2*g/s,b=Math.PI*2*(g+1)/s,w=c(x),M=c(b),_=[ce.cx+Math.cos(x)*w,nn,ce.zc+Math.sin(x)*w],S=[ce.cx+Math.cos(b)*M,nn,ce.zc+Math.sin(b)*M];Ea(t,[i[g][0],nn,i[g][1]],[i[g+1][0],nn,i[g+1][1]],S,_,[0,-1,0],oh)}t.lathe([[a+.02,nn-.18,1],[a-.12,nn-.18,1],[a-.12,nn-.06,1],[a-.05,nn,1],[a,nn+.02]],ce.cx,ce.zc,s,{mat:()=>sr});let h=16,l=(g,x,b)=>[ce.cx+Math.cos(g)*Math.cos(x)*b,ce.dome.base+Math.sin(x)*b,ce.zc+Math.sin(g)*Math.cos(x)*b],u=Math.PI/2;for(let g=0;g<s;g++)for(let x=0;x<h;x++){let b=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,M=u*x/h,_=u*(x+1)/h,S=(N,G)=>[-Math.cos(N)*Math.cos(G),-Math.sin(G),-Math.sin(N)*Math.cos(G)],O=[t.vert(l(b,M,a),S(b,M),nh),t.vert(l(w,M,a),S(w,M),nh),t.vert(l(w,_,a),S(w,_),nh),t.vert(l(b,_,a),S(b,_),nh)];t.tri(O[0],O[1],O[2]),t.tri(O[0],O[2],O[3])}for(let g=0;g<Zi.spokes;g++){let x=Math.PI*2*g/Zi.spokes,b=[];for(let w=0;w<=14;w++)b.push(l(x,(u-.06)*w/14,a-.04));t.tube(b,()=>.04,20,6,{mat:()=>oh})}for(let g of Zi.ringE){let x=Math.cos(g)*(a-.04),b=ce.dome.base+Math.sin(g)*(a-.04),w=[];for(let M=0;M<=72;M++){let _=Math.PI*2*M/72;w.push([ce.cx+Math.cos(_)*x,b,ce.zc+Math.sin(_)*x])}t.tube(w,()=>.035,72,6,{mat:()=>oh})}t.ellipsoid([ce.cx,ce.dome.base+a-.06,ce.zc],[.16,.08,.16],6,12,{mat:()=>oh});let d=.46,p=.55,f=.12,v=(g,x,b,w)=>{Dr(t,g,d-.08,x,b,d,w,Pu);let M=b-g>w-x?[g+.25,b-.25]:[g+.06,b-.06],_=b-g>w-x?[x+.06,w-.06]:[x+.25,w-.25];Dr(t,M[0],0,_[0],M[1],d-.08,_[1],Pu)};v(o-f-p,n+1.1,o-f,r-1.1),v(e+1,n+f,o-1.1,n+f+p),v(e+1,r-f-p,o-1.1,r-f);let m=n2;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],ce.cx,ce.zc,64,{mat:()=>Pu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],ce.cx,ce.zc,48,{mat:()=>S_})}function T_(t){z_(t),A_(t),t.curMat=[0,0,0]}var jo=t=>t.toFixed(4);function r2(){let t=ce.dome.r,e=Zi.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${jo(rh[0])}, ${jo(rh[1])}, ${jo(rh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${jo(ce.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${jo(ce.cx)}, ${jo(ce.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${jo(t-.15)} - soft, ${jo(t-.15)} + soft, d);
		float hw = ${jo(Zi.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${jo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${jo(Math.PI*2/Zi.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${jo(Xn.crownC[0])}, ${jo(Xn.crownC[1])}, ${jo(Xn.crownC[2])});
		vec3 r = vec3(${jo(Xn.crownR[0])}, ${jo(Xn.crownR[1])}, ${jo(Xn.crownR[2])});
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
		float tt = (${jo(Xn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${jo(ce.cx)}, ${jo(ce.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${jo(Xn.trunkR*.7)}, ${jo(Xn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function L_(){return`
	${r2()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${jo(ce.x0-.75)} || p.z < ${jo(ce.z0-.5)} || p.z > ${jo(ce.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${jo(ce.x0-1.5)} || p.z < ${jo(ce.z0-1.5)} || p.z > ${jo(ce.z1+1.5)}) return 0.0;
		float inside = smoothstep(${jo(ce.x0-1.2)}, ${jo(ce.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${jo(ce.cx)}, ${jo(ce.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}a2.exports={addAlcove:T_,alcoveLightGLSL:L_,oculusGLSL:r2,A:ce,BENCH:n2,SHAFT:rh,TREE:Xn}});var ir=Mt((wz,i2)=>{"use strict";var B0=0;try{let t=location.search;/[?&]night\b/.test(t)&&(B0=1)}catch(t){}var za=B0,$u=0,s2=[],ah={tick(t){let e=$u?Math.min(.1,t-$u):0;if($u=t,za!==B0){let o=e/2.4;za=B0>za?Math.min(B0,za+o):Math.max(B0,za-o)}return ah.night},get night(){return za*za*(3-2*za)},get isNight(){return B0===1},get settled(){return za===B0},set(t){B0=t?1:0,s2.forEach(e=>e(B0))},toggle(){ah.set(!B0)},onChange(t){s2.push(t)}};ah.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;i2.exports=ah});var Xa=Mt((_z,bl)=>{"use strict";var Iu=ir(),{C:Fu}=_r(),{A:sh,BENCH:xl}=A0(),Yn=Math.PI,N_=[18,29,40],ih=.575,Va=[],yl=(t,e,o,n,r,a,s)=>Va.push(Object.assign({x:t,y:e,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));N_.forEach(t=>{yl(1.25+ih+.48,3.25,t,[1,0],.48,ih,{s:1.2}),yl(12.75-ih-.48,3.25,t,[-1,0],.48,ih,{s:1.2})});[3,11].forEach(t=>yl(t,3.45,Fu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var R_=[14.63,19.63,24.03,28.43,32.83,Fu.x1-.28];R_.forEach(t=>yl(t,3.15,Fu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>yl(.35+.44,2.75,t,[1,0],.44,99));{let t=(xl.inner+xl.outer)/2,e=Math.atan2(-1.12,-.98);Va.push({x:sh.cx+Math.cos(e)*t,y:xl.seat+.155,z:sh.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[sh.cx,sh.zc,xl.outer+.07,xl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var qu=.13,ch=.21,cr=qu/Math.cos(Yn/6),Fo=t=>t.toFixed(4);function c2(t){let o=(t||Va.map((n,r)=>r)).map(n=>{let r=Va[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Fo(r.ring[3]-.03)}) {
					float tt = ${Fo(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Fo(r.x)}, ${Fo(r.z)}) + D.xz * tt - vec2(${Fo(r.ring[0])}, ${Fo(r.ring[1])});
					T *= smoothstep(${Fo(r.ring[2]-.02)}, ${Fo(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Fo(r.o[0])}, ${Fo(r.o[1])}));
					if (behind > ${Fo(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Fo(a)}, ${Fo(s)}))) * ${Fo(r.back)} / behind;
						T *= smoothstep(${Fo(r.hw-.04)}, ${Fo(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Fo(r.x)}, ${Fo(r.y)}, ${Fo(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${Fo(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Fo(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${Fo(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Fo(n*1.7)}) + 0.04 * sin(time * 15.3 + ${Fo(n*2.9)}) * sin(time * 1.9 + ${Fo(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Fo(1/(r.s*r.s))}) * (1.0 - smoothstep(${Fo(r.range*.6)}, ${Fo(r.range)}, d));
					sum += ${Fo(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Fo(Yn/6)}, ${Fo(Yn/3)}) - ${Fo(Yn/6)};
		float U = tan(t) / ${Fo(Math.tan(Yn/6))};
		float V = (q.y / h) * (${Fo(qu/ch)} / cos(t));
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
	}`}var fn=0,O_=1;function C_(){let t=[],e=[],o=[],n=[],r=[],a=(p,f,v,m)=>(t.push(p[0],p[1],p[2]),e.push(f[0],f[1],f[2]),o.push(v),n.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(p,f)=>[p[0]-f[0],p[1]-f[1],p[2]-f[2]],i=(p,f)=>[p[1]*f[2]-p[2]*f[1],p[2]*f[0]-p[0]*f[2],p[0]*f[1]-p[1]*f[0]],c=p=>{let f=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/f,p[1]/f,p[2]/f]};function h(p,f,v,m,g,x){let b=c(i(s(f,p),s(m,p))),w=a(p,b,g,[0,0]),M=a(f,b,g,[1,0]),_=a(v,b,g,[1,1]),S=a(m,b,g,[0,1]);r.push(w,M,_,w,_,S),x&&r.push(w,_,M,w,S,_)}function l(p,f,v){for(let x=0;x<p.length;x++){let b=p[Math.max(0,x-1)],w=p[Math.min(p.length-1,x+1)],M=c(s(w,b)),_=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],S=c(i(M,_)),O=i(S,M),N=typeof f=="function"?f(x/(p.length-1)):f;for(let G=0;G<=6;G++){let F=G/6*Yn*2,j=Math.cos(F),D=Math.sin(F),B=[S[0]*j+O[0]*D,S[1]*j+O[1]*D,S[2]*j+O[2]*D];a([p[x][0]+B[0]*N,p[x][1]+B[1]*N,p[x][2]+B[2]*N],B,v)}}let g=t.length/3-p.length*7;for(let x=0;x<p.length-1;x++)for(let b=0;b<6;b++){let w=g+x*7+b,M=w+6+1;r.push(w,M,w+1,w+1,M,M+1)}}function u(p,f,v,m,g,x,b,w,M){let _=(S,O,N)=>{let G=x+Yn/6+N*Yn/3;return[p[0]+Math.cos(G)*S,O,p[2]+Math.sin(G)*S]};for(let S=0;S<6;S++)h(_(m,f,S+1),_(m,f,S),_(g,v,S),_(g,v,S+1),b);if(w&&g>0)for(let S=0;S<6;S++){let O=a([p[0],v,p[2]],[0,1,0],b),N=a(_(g,v,S),[0,1,0],b),G=a(_(g,v,S+1),[0,1,0],b);r.push(O,G,N)}if(M&&m>0)for(let S=0;S<6;S++){let O=a([p[0],f,p[2]],[0,-1,0],b),N=a(_(m,f,S),[0,-1,0],b),G=a(_(m,f,S+1),[0,-1,0],b);r.push(O,N,G)}}function d(p,f,v,m,g,x,b){let w=[];for(let _=0;_<=18;_++){let S=_/18,O=(b||0)+S*m*Yn*2,N=v*(1-.75*S);w.push([p[0]+f[0]*Math.cos(O)*N,p[1]+Math.sin(O)*N,p[2]+f[2]*Math.cos(O)*N])}l(w,g,x)}return Va.forEach(p=>{let f=p.s,v=Math.atan2(p.o[1],p.o[0]),m=[p.x,p.y,p.z],g=(w,M,_)=>[p.x+p.o[0]*w-p.o[1]*(_||0),p.y+M,p.z+p.o[1]*w+p.o[0]*(_||0)],x=p.y-ch*f,b=p.y+ch*f;for(let w=0;w<6;w++){let M=v+Yn/6+w*Yn/3,_=M+Yn/3,S=cr*f*.97,O=[p.x+Math.cos(M)*S,x,p.z+Math.sin(M)*S],N=[p.x+Math.cos(_)*S,x,p.z+Math.sin(_)*S];h(N,O,[O[0],b,O[2]],[N[0],b,N[2]],O_,!0)}for(let w=0;w<6;w++){let M=v+Yn/6+w*Yn/3,_=cr*f;l([[p.x+Math.cos(M)*_,x-.02*f,p.z+Math.sin(M)*_],[p.x+Math.cos(M)*_,b+.02*f,p.z+Math.sin(M)*_]],.011*f,fn)}u(m,x-.035*f,x,cr*f*1.12,cr*f*1.12,v,fn,!0,!0),u(m,x-.1*f,x-.035*f,cr*f*.55,cr*f*1,v,fn,!1,!0),u(m,x-.17*f,x-.1*f,0,cr*f*.55,v,fn,!1,!1);for(let w=0;w<6;w++){let M=v+w*Yn/3,_=qu*f*1.06,S=[p.x+Math.cos(M)*_,x-.06*f,p.z+Math.sin(M)*_];d(S,[-Math.sin(M),0,Math.cos(M)],.03*f,.85,.004*f,fn,.3)}u(m,b,b+.03*f,cr*f*1.14,cr*f*1.14,v,fn,!1,!0),u(m,b+.03*f,b+.2*f,cr*f*1.14,cr*f*.32,v,fn,!1,!1),u(m,b+.2*f,b+.27*f,cr*f*.34,cr*f*.34,v,fn,!1,!1),u(m,b+.27*f,b+.37*f,cr*f*.42,0,v,fn,!1,!0),l([[p.x,b+.36*f,p.z],[p.x,b+.47*f,p.z]],w=>.01*f*(1-.7*w),fn),u([p.x,0,p.z],b+.44*f,b+.47*f,.018*f,0,v,fn,!1,!0);for(let w=0;w<6;w++){let M=v+Yn/6+w*Yn/3,_=cr*f*1.14,S=[p.x+Math.cos(M)*_,b+.03*f,p.z+Math.sin(M)*_];l([S,[S[0],S[1]+.09*f,S[2]]],O=>.008*f*(1-.8*O),fn),u([S[0],0,S[2]],S[1]+.035*f,S[1]+.06*f,.014*f,.014*f,M,fn,!0,!0)}if(p.mount==="wall"){let w=p.back,M=x-.32,_=g(-w,0,0);((F,j,D)=>{let B=[p.o[0],0,p.o[1]],ut=[-p.o[1],0,p.o[0]],Rt=(rt,qt,xe)=>[_[0]+ut[0]*rt+B[0]*xe,qt,_[2]+ut[2]*rt+B[2]*xe],Nt=.03,bt=.065;h(Rt(-D,F,bt),Rt(D,F,bt),Rt(D,j,bt),Rt(-D,j,bt),fn,!0),h(Rt(D,F,Nt),Rt(D,F,bt),Rt(D,j,bt),Rt(D,j,Nt),fn,!0),h(Rt(-D,F,bt),Rt(-D,F,Nt),Rt(-D,j,Nt),Rt(-D,j,bt),fn,!0),h(Rt(-D,j,bt),Rt(D,j,bt),Rt(D,j,Nt),Rt(-D,j,Nt),fn,!0),h(Rt(-D,F,Nt),Rt(D,F,Nt),Rt(D,F,bt),Rt(-D,F,bt),fn,!0),u([_[0]+B[0]*bt,0,_[2]+B[2]*bt],j,j+.05,D*.6,0,v,fn,!1,!0),u([_[0]+B[0]*bt,0,_[2]+B[2]*bt],F-.05,F,0,D*.6,v,fn,!1,!1)})(M-.2,M+.2,.07);let O=[];for(let F=0;F<=14;F++){let j=F/14,D=-w+.05+j*(w-.05),B=M+.04+(x-.17*f-M-.04)*Math.pow(j,2.2);O.push(g(D,B-p.y,0))}l(O,F=>.022*(1-.3*F),fn);let N=[];for(let F=0;F<=10;F++){let j=F/10;N.push(g(-w+.05+j*w*.6,M-.14+j*.16+.05*Math.sin(j*Yn)-p.y,0))}l(N,.009,fn);let G=N[N.length-1];d([G[0]-p.o[0]*.03,G[1]+.02,G[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,fn,-.4),[.3,.55].forEach(F=>{let j=O[Math.round(F*14)],D=N[Math.round(F/.62*10)]||N[10];l([j,D],.006,fn)}),[-1,1].forEach(F=>{let j=g(-.05,-ch*f-.2*f,0);d([j[0]-p.o[1]*F*.05,j[1],j[2]+p.o[0]*F*.05],[-p.o[1]*F,0,p.o[0]*F],.05*f,.9,.006,fn,Yn)})}else for(let w=0;w<3;w++){let M=v+w*Yn*2/3,_=[p.x+Math.cos(M)*cr*f*.7,x-.035*f,p.z+Math.sin(M)*cr*f*.7],S=[p.x+Math.cos(M)*cr*f*1.25,x-.17*f,p.z+Math.sin(M)*cr*f*1.25];l([_,S],.012*f,fn)}}),{pos:t,nrm:e,kind:o,uv:n,elems:r}}bl.exports=t=>{let e=C_(),o=t({vert:`
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
		${c2()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>Iu.night}}),n=[],r=[];Va.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:t.context("time"),night:()=>Iu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Iu.night>.01&&a()}};bl.exports.lanternGLSL=c2;bl.exports.LANTERNS=Va;bl.exports.TREE_LANTERN=[Va.length-1]});var Qa=Mt((Mz,Jr)=>{"use strict";var P_=ir(),Do=Math.PI,Kn=t=>(+t).toFixed(4),$_=t=>`vec3(${Kn(t[0])}, ${Kn(t[1])}, ${Kn(t[2])})`,Be={x:-7,z:44.5},ro=5.2,gr=15,ve={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},ca={z0:42.2,z1:46.8,top:6.3,x:.35},hh=[Be.x-Math.sqrt(ro*ro-3.05*3.05),0,0],Rn={x0:-2.05+hh[0],x1:hh[0],z0:41.45,z1:47.55,top:4.3},Du=[[Rn.x1+.05,2.35,Rn.z0-.45],[Rn.x1+.05,2.35,Rn.z1+.45]].map(([t,e,o])=>{let n=Math.atan2(o-Be.z,t-Be.x);return[Be.x+Math.cos(n)*(ro-.16),e,Be.z+Math.sin(n)*(ro-.16)]}),Co={ri:3.4,ro,a0:-35*Do/180,rise:.1836,step:3.6*Do/180,n:88,thick:.36};Co.k=Co.rise/Co.step;var Gr=t=>Co.a0-t,Ka=t=>t*Co.k,vn={x:Be.x+.1,z:Be.z-.15,yaw:-Do/2,scale:1.3},Aa=vn.scale/1.1,wl={keyX0:vn.x-.524*Aa,keyX1:vn.x+.491*Aa,keyTop:.647*Aa,keyFront:vn.z+.808*Aa,keyBack:vn.z+.72*Aa,stoolX:vn.x-.041*Aa,stoolZ:vn.z+1.122*Aa,stoolFront:vn.z+.96*Aa,stoolTop:.37*Aa,heading:Do},fh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function f2(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function I_(t,e){let o=1e9;for(let n=0;n<fh.length-1;n++){let[r,a]=fh[n],[s,i]=fh[n+1],c=s-r,h=i-a,l=Math.max(0,Math.min(1,((t-r)*c+(e-a)*h)/(c*c+h*h)));o=Math.min(o,Math.hypot(t-r-c*l,e-a-h*l))}return o}var lh=t=>ve.spring+Math.sqrt(Math.max(0,ve.r*ve.r-(t-ve.zc)*(t-ve.zc))),Ya=t=>Be.x+Math.sqrt(Math.max(0,ro*ro-(t-Be.z)*(t-Be.z)));function Ji(t,e){return Math.hypot(t-Be.x,e-Be.z)<ro||t<=0&&t>Be.x&&e>ve.z0&&e<ve.z1||t>Rn.x0&&t<Rn.x1&&e>Rn.z0&&e<Rn.z1}function F_(t,e){if(Math.hypot(t-Be.x,e-Be.z)<Co.ri-.05)return 99;let n=Math.atan2(e-Be.z,t-Be.x),r=Co.a0-n;for(;r<0;)r+=2*Do;for(;r>=2*Do;)r-=2*Do;return r>Co.n*Co.step?99:Ka(r)-Co.thick}function q_(){let t=[],e=f2(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let h=t[c];if(!(h[1]>.01)&&Math.hypot(h[0]-a,h[2]-s)<i+h[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-vn.x,c=s-vn.z,h=Math.cos(vn.yaw),l=Math.sin(vn.yaw),u=(h*i-l*c)/vn.scale,d=(l*i+h*c)/vn.scale;return u>-1.05&&u<1.3&&d>-.7&&d<.72},r=0;for(;t.length<980&&r<6e4;){r++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(ro-1.45),i=e()*2*Do,c=Be.x+Math.cos(i)*s,h=Be.z+Math.sin(i)*s;if(!Ji(c,h)||s>ro-.18||n(c,h)||I_(c,h)<.62||F_(c,h)<2.3||c<Rn.x1+.9)continue;let l=.022+e()*.02;if(o(c,h,l))continue;let u=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,h,l,u,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Co.step,h=Gr(c),l=Co.ri+.55+e()*(Co.ro-Co.ri-.75),u=.022+e()*.016;t.push([Be.x+Math.cos(h)*l,(a+1)*Co.rise,Be.z+Math.sin(h)*l,u,.05+e()*.14,e()*100])}}for(let a of Du)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[Rn.z0-.35,Rn.z1+.35])for(let s=0;s<9;s++){let i=Rn.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-Be.x,c-Be.z)>ro-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function D_(t){let o=f2(77),n=[];for(let r=0;r<14;r++){let a=t[Math.floor(o()*t.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,h=1e9;n.forEach((l,u)=>{let d=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;d<h&&(h=d,c=u)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/t.length])}var Gu=q_(),l2=D_(Gu.filter(t=>t[1]<2||t[1]>2.5)).concat(Du.map(t=>[t[0],t[1]+.35,t[2],.035]));function h2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${l2.map((e,o)=>`
		{
			vec3 d = ${$_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Kn(5.3+o*.71)} + ${Kn(o*1.9)}) + 0.06 * sin(time * ${Kn(11.7+o*1.3)} + ${Kn(o*.7)});
			float w = ${Kn(e[3]*l2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Kn(gr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Kn(Be.x)}, ${Kn(gr)}, ${Kn(Be.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Kn(wl.stoolX)}, ${Kn(wl.keyFront+.1)})));
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
	}`}var Qe={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function u2(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),h=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),u=t.v(r,a,s,i&&i[3]);t.idx.push(c,h,l,c,l,u)},t.tri=(e,o,n,r,a)=>{let s=t.v(e,r,a),i=t.v(o,r,a),c=t.v(n,r,a);t.idx.push(s,i,c)},t}function G_(){let t=u2(),e=(n,r,a)=>[Be.x+Math.cos(n)*r,a,Be.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Rn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,h=a+.2;if(!(Ji(s,c)||Ji(i,c)||Ji(s,h)||Ji(i,h)||Ji((s+i)/2,(c+h)/2)))continue;let l=c,u=h;s>Ya(ve.z0)-.3&&(l=Math.max(l,ve.z0),u=Math.min(u,ve.z1),u<=l)||t.quad([s,0,l],[s,0,u],[i,0,u],[i,0,l],[0,1,0],Qe.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*Do,s=(r+1)/360*2*Do,i=(a+s)/2,c=e(i,ro,0),h=0;c[0]>Be.x&&c[2]>ve.z0-.02&&c[2]<ve.z1+.02&&(h=Math.max(lh(Math.min(Math.max(e(a,ro,0)[2],ve.z0),ve.z1)),lh(Math.min(Math.max(e(s,ro,0)[2],ve.z0),ve.z1)))),c[0]<Be.x&&c[2]>Rn.z0-.02&&c[2]<Rn.z1+.02&&(h=Rn.top);let l=a*ro,u=s*ro,d=o(a).map(v=>-v),p=o(s).map(v=>-v),f=[h];for(let v=Math.ceil(h/2.5)*2.5;v<gr;v+=2.5)v>h+.01&&f.push(v);f.push(gr);for(let v=0;v<f.length-1;v++){let m=f[v],g=f[v+1],x=t.v(e(a,ro,m),d,Qe.WALL,[l,m]),b=t.v(e(s,ro,m),p,Qe.WALL,[u,m]),w=t.v(e(s,ro,g),p,Qe.WALL,[u,g]),M=t.v(e(a,ro,g),d,Qe.WALL,[l,g]);t.idx.push(x,b,w,x,w,M)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*Do,h=(i+1)/360*2*Do,l=(c+h)/2,u=e(l,ro,0);if(r<1&&(u[0]>Be.x&&u[2]>ve.z0&&u[2]<ve.z1||u[0]<Be.x&&u[2]>Rn.z0&&u[2]<Rn.z1))continue;let d=ro-s;t.quad(e(c,d,r),e(h,d,r),e(h,d,r+a),e(c,d,r+a),o(l).map(p=>-p),Qe.WALL,[[c*ro,r+100],[h*ro,r+100],[h*ro,r+a+100],[c*ro,r+a+100]]),t.quad(e(c,d,r+a),e(h,d,r+a),e(h,ro,r+a),e(c,ro,r+a),[0,1,0],Qe.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&t.quad(e(c,ro,r),e(h,ro,r),e(h,d,r),e(c,d,r),[0,-1,0],Qe.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=ca.x;for(let[a,s]of[[ve.z0,1],[ve.z1,-1]]){let i=Ya(a);t.quad([n,0,a],[i,0,a],[i,ve.spring,a],[n,ve.spring,a],[0,0,s],Qe.WALL,[[n,0],[i,0],[i,ve.spring],[n,ve.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*Do,i=(a+1)/r*Do,c=ve.zc-Math.cos(s)*ve.r,h=ve.zc-Math.cos(i)*ve.r,l=ve.spring+Math.sin(s)*ve.r,u=ve.spring+Math.sin(i)*ve.r,d=[0,-Math.sin(s),Math.cos(s)],p=[0,-Math.sin(i),Math.cos(i)],f=t.v([n,l,c],d,Qe.WALL,[n,s*ve.r]),v=t.v([Ya(c),l,c],d,Qe.WALL,[Ya(c),s*ve.r]),m=t.v([Ya(h),u,h],p,Qe.WALL,[Ya(h),i*ve.r]),g=t.v([n,u,h],p,Qe.WALL,[n,i*ve.r]);t.idx.push(f,v,m,f,m,g)}}{let n=ca.x,r=.05;for(let h=ca.z0;h<ca.z1-1e-6;h+=r){let l=h,u=Math.min(ca.z1,h+r),p=(f=>f>ve.z0&&f<ve.z1)((l+u)/2)?Math.max(lh(l),lh(u)):0;t.quad([n,p,l],[n,p,u],[n,ca.top,u],[n,ca.top,l],[1,0,0],Qe.HALLSTONE,[[l,p],[u,p],[u,ca.top],[l,ca.top]])}let a=.32,s=.06,i=n+s,c=36;for(let h=0;h<c;h++){let l=h/c*Do,u=(h+1)/c*Do,d=(g,x)=>[i,ve.spring+Math.sin(g)*x,ve.zc-Math.cos(g)*x],p=ve.r,f=ve.r+a;t.quad(d(l,p),d(u,p),d(u,f),d(l,f),[1,0,0],Qe.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let v=(g,x,b)=>[b,ve.spring+Math.sin(g)*x,ve.zc-Math.cos(g)*x],m=[0,Math.sin((l+u)/2),-Math.cos((l+u)/2)];t.quad(v(l,f,n),v(u,f,n),v(u,f,i),v(l,f,i),m,Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(v(l,p,n),v(u,p,n),v(u,p,i),v(l,p,i),m.map(g=>-g),Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[h,l,u]of[[ve.z0-a,ve.z0,-1],[ve.z1,ve.z1+a,1]]){t.quad([i,0,h],[i,0,l],[i,ve.spring,l],[i,ve.spring,h],[1,0,0],Qe.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let d=u<0?h:l,p=u<0?l:h;t.quad([n,0,d],[i,0,d],[i,ve.spring,d],[n,ve.spring,d],[0,0,u],Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,0,p],[i,0,p],[i,ve.spring,p],[n,ve.spring,p],[0,0,-u],Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let f=ve.spring-.16,v=.16,m=.11,g=Math.min(h,l)-.05,x=Math.max(h,l)+.05;t.quad([n+m,f,g],[n+m,f,x],[n+m,f+v,x],[n+m,f+v,g],[1,0,0],Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,f+v,g],[n+m,f+v,g],[n+m,f+v,x],[n,f+v,x],[0,1,0],Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,f,g],[n,f,x],[n+m,f,x],[n+m,f,g],[0,-1,0],Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,x])t.quad([n,f,b],[n+m,f,b],[n+m,f+v,b],[n,f+v,b],[0,0,b===g?-1:1],Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let h=ve.spring+ve.r-.05,l=ve.spring+ve.r+a+.12,u=.16,d=.22,p=i+.04;t.quad([p,h,ve.zc-u],[p,h,ve.zc+u],[p,l,ve.zc+d],[p,l,ve.zc-d],[1,0,0],Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let f of[-1,1])t.quad([n,h,ve.zc+f*u],[p,h,ve.zc+f*u],[p,l,ve.zc+f*d],[n,l,ve.zc+f*d],[0,0,f],Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([n,l,ve.zc-d],[p,l,ve.zc-d],[p,l,ve.zc+d],[n,l,ve.zc+d],[0,1,0],Qe.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=Rn;t.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],Qe.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[h,l]of[[a,1],[s,-1]]){let u=Be.x-Math.sqrt(ro*ro-(h-Be.z)*(h-Be.z));t.quad([n,0,h],[u,0,h],[u,i,h],[n,i,h],[0,0,l],Qe.WALL,[[n,0],[u,0],[u,i],[n,i]])}let c=24;for(let h=0;h<c;h++){let l=a+(s-a)*h/c,u=a+(s-a)*(h+1)/c,d=Be.x-Math.sqrt(ro*ro-(l-Be.z)**2),p=Be.x-Math.sqrt(ro*ro-(u-Be.z)**2);t.quad([n,i,l],[d,i,l],[p,i,u],[n,i,u],[0,-1,0],Qe.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let h=0;h<c;h++){let l=a+(s-a)*h/c,u=a+(s-a)*(h+1)/c,d=Be.x-Math.sqrt(ro*ro-(l-Be.z)**2)+.05,p=Be.x-Math.sqrt(ro*ro-(u-Be.z)**2)+.05;t.quad([d,i-.3,l],[p,i-.3,u],[p,i,u],[d,i,l],[1,0,0],Qe.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,ro];for(let a=0;a<120;a++){let s=a/120*2*Do,i=(a+1)/120*2*Do,c=(s+i)/2;c>Do&&(c-=2*Do);for(let h=0;h<r.length-1;h++){let l=r[h],u=r[h+1],d=c*180/Do;l>=3.3&&d>8&&d<85||t.quad(e(s,l,gr),e(s,u,gr),e(i,u,gr),e(i,l,gr),[0,-1,0],Qe.CEIL,[[s*l,l],[s*u,u],[i*u,u],[i*l,l]])}t.quad(e(s,1.15,gr),e(i,1.15,gr),e(i,1.15,gr+.7),e(s,1.15,gr+.7),o(c).map(h=>-h),Qe.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([Be.x,gr+.7,Be.z],e(i,1.15,gr+.7),e(s,1.15,gr+.7),[0,-1,0],Qe.OCULUS)}}{let n=Co.ri,r=Co.ro,a=Co.n*Co.step;for(let c=0;c<Co.n;c++){let h=c*Co.step,l=(c+1)*Co.step,u=Gr(h),d=Gr(l),p=(c+1)*Co.rise,f=c*Co.rise,v=2;for(let x=0;x<v;x++){let b=u+(d-u)*x/v-(x===0?.004:0),w=u+(d-u)*(x+1)/v;t.quad(e(b,n,p),e(b,r,p),e(w,r,p),e(w,n,p),[0,1,0],Qe.STEP,[[n*b,c],[r*b,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(u),0,Math.cos(u)],g=u-.004;t.quad(e(g,n,f),e(g,r,f),e(g,r,p),e(g,n,p),m,Qe.STEP,[[n*u,c+.5],[r*u,c+.5],[r*u,c+.5],[n*u,c+.5]]),t.quad(e(u,n,Ka(h)+.06),e(d,n,Ka(l)+.06),e(d,n,p),e(g,n,p),o((u+d)/2).map(x=>-x),Qe.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*Do/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let h=c/s*a,l=(c+1)/s*a,u=Gr(h),d=Gr(l),p=Ka(h),f=Ka(l),v=p-Co.thick,m=f-Co.thick,g=o(u).map(S=>-S),x=o(d).map(S=>-S),b=t.v(e(u,n,v),g,Qe.STRING,[h*n,0]),w=t.v(e(d,n,m),x,Qe.STRING,[l*n,0]),M=t.v(e(d,n,f+.06),x,Qe.STRING,[l*n,1]),_=t.v(e(u,n,p+.06),g,Qe.STRING,[h*n,1]);t.idx.push(b,w,M,b,M,_);for(let S=0;S<i.length-1;S++){let O=i[S],N=i[S+1],G=F=>{let j=o(F);return[-j[0]*.12,-.99,-j[2]*.12]};t.quad(e(u,O,v),e(u,N,v),e(d,N,m),e(d,O,m),G((u+d)/2),Qe.SOFFIT,[[h*O,O],[h*N,N],[l*N,N],[l*O,O]])}}}return t}function H_(){let t=u2(),e=Co.ri+.045,o=Co.n*Co.step,n=Math.ceil(o/(.8*Do/180)),r=.92,a=(c,h,l)=>[Be.x+Math.cos(c)*h,l,Be.z+Math.sin(c)*h],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let h=c/n*o,l=(c+1)/n*o,u=Gr(h),d=Gr(l),p=Ka(h)+.06,f=Ka(l)+.06,v=s(u).map(S=>-S),m=s(d).map(S=>-S),g=h*e,x=l*e,b=t.v(a(u,e,p),v,Qe.RAILING,[g,0]),w=t.v(a(d,e,f),m,Qe.RAILING,[x,0]),M=t.v(a(d,e,f+r),m,Qe.RAILING,[x,r]),_=t.v(a(u,e,p+r),v,Qe.RAILING,[g,r]);t.idx.push(b,w,M,b,M,_)}((c,h,l,u)=>{let p=v=>{let m=Gr(v),g=Ka(v)+.06+h,x=a(m,e+c,g),b=s(m),w=[];for(let M=0;M<8;M++){let _=M/8*2*Do,S=[b[0]*Math.cos(_),Math.sin(_),b[2]*Math.cos(_)];w.push([[x[0]+S[0]*l,x[1]+S[1]*l,x[2]+S[2]*l],S])}return w},f=p(0);for(let v=1;v<=n;v++){let m=p(v/n*o);for(let g=0;g<8;g++){let x=(g+1)%8,b=t.v(f[g][0],f[g][1],u),w=t.v(m[g][0],m[g][1],u),M=t.v(m[x][0],m[x][1],u),_=t.v(f[x][0],f[x][1],u);t.idx.push(b,w,M,b,M,_)}f=m}})(0,r+.02,.028,Qe.IRON);for(let c of Du){let h=Math.atan2(c[2]-Be.z,c[0]-Be.x),l=[Math.cos(h),0,Math.sin(h)],u=12;for(let v=0;v<u;v++){let m=v/u*2*Do,g=(v+1)/u*2*Do,x=(b,w,M)=>[c[0]+Math.cos(b)*w,M,c[2]+Math.sin(b)*w];t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,.13,c[1]-.05),x(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Qe.IRON),t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,0,c[1]+.002),x(m,0,c[1]+.002),[0,1,0],Qe.IRON)}let d=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],p=[-l[2],0,l[0]],f=.018;t.quad([d[0]-p[0]*f,d[1],d[2]-p[2]*f],[d[0]+p[0]*f,d[1],d[2]+p[2]*f],[c[0]+p[0]*f,c[1]-.05,c[2]+p[2]*f],[c[0]-p[0]*f,c[1]-.05,c[2]-p[2]*f],[-l[0],.5,-l[2]],Qe.IRON)}{let c=Gr(0),h=a(c,e,0),l=10;for(let u=0;u<l;u++){let d=u/l*2*Do,p=(u+1)/l*2*Do,f=(v,m,g)=>[h[0]+Math.cos(v)*m,g,h[2]+Math.sin(v)*m];t.quad(f(d,.035,0),f(p,.035,0),f(p,.035,r+.1),f(d,.035,r+.1),[Math.cos((d+p)/2),0,Math.sin((d+p)/2)],Qe.IRON),t.quad(f(d,.06,r+.1),f(p,.06,r+.1),f(p,.03,r+.2),f(d,.03,r+.2),[Math.cos((d+p)/2)*.8,.6,Math.sin((d+p)/2)*.8],Qe.IRON)}}return t}function U_(){let t=[],e=[],o=[],n=[];for(let a of Gu){let[s,i,c,h,l,u]=a,d=t.length/3;for(let f=0;f<=7;f++){let v=f/7*2*Do+u,m=Math.cos(v),g=Math.sin(v);t.push(s+m*h,i,c+g*h,s+m*h,i+l,c+g*h),e.push(m,0,g,m,0,g),o.push(0,l,u,1,l,u)}for(let f=0;f<7;f++){let v=d+f*2;n.push(v,v+2,v+3,v,v+3,v+1)}let p=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,u);for(let f=0;f<7;f++){let v=f/7*2*Do+u;t.push(s+Math.cos(v)*h,i+l,c+Math.sin(v)*h),e.push(0,1,0),o.push(1,l,u)}for(let f=0;f<7;f++)n.push(p,p+1+f,p+1+(f+1)%7)}return{pos:t,nrm:e,info:o,idx:n}}function B_(){let t=[],e=[],o=[],n=[];for(let r of Gu){let[a,s,i,,c,h]=r,l=t.length/3;for(let u of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(u[0],u[1]),o.push(h);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:n}}function j_(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let h=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),u=new Float32Array(o*3),d=new Float32Array(o*3),p=new Float32Array(o),f=Math.cos(vn.yaw),v=Math.sin(vn.yaw),m=vn.scale;for(let g=0;g<o;g++){let x=(r[0]+i[g*3]/65535*a[0])*m,b=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;u[g*3]=vn.x+f*x+v*w,u[g*3+1]=b,u[g*3+2]=vn.z-v*x+f*w;let M=h[g*3]/127,_=h[g*3+1]/127,S=h[g*3+2]/127;d[g*3]=f*M+v*S,d[g*3+1]=_,d[g*3+2]=-v*M+f*S,p[g]=l[g]}return{pos:u,nrm:d,mat:p,idx:new Uint32Array(c)}}function W_(){let t=[],e=(u,d)=>[Be.x+Math.cos(u)*d,Be.z+Math.sin(u)*d];t.push([[0,ve.z0],[Ya(ve.z0),ve.z0]]),t.push([[Ya(ve.z1),ve.z1],[0,ve.z1]]);let o=Math.asin((ve.z1-Be.z)/ro),n=72;for(let u=0;u<n;u++){let d=o+u/n*(2*Do-2*o),p=o+(u+1)/n*(2*Do-2*o);t.push([e(d,ro-.25),e(p,ro-.25)])}let r=hh[0]-.55+.35;t.push([[r,Rn.z0],[r,Rn.z1]]);let a=2.4/Co.k,s=12;for(let u=0;u<s;u++){let d=Gr(u/s*a),p=Gr((u+1)/s*a);t.push([e(d,Co.ri-.2),e(p,Co.ri-.2)])}t.push([e(Gr(0),Co.ri-.2),e(Gr(0),ro)]),t.push([e(Gr(a),Co.ri-.2),e(Gr(a),ro)]);let i=Math.cos(vn.yaw),c=Math.sin(vn.yaw),h=vn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([u,d])=>[vn.x+(i*u+c*d)*h,vn.z+(-c*u+i*d)*h]);for(let u=0;u<4;u++)t.push([l[u],l[(u+1)%4]]);return t}Jr.exports=t=>{let e=G_(),o=H_(),n=U_(),r=B_(),a=Xa(),s=`
	precision highp float;
	${P_.GLSL}
	uniform float time;
	${h2()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Kn(gr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Kn(Be.x)}, ${Kn(Be.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Kn((Co.ri+Co.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Kn(Be.x)}, ${Kn(Be.z)});
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),u=t({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=j_(m);d=t({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let p=(()=>{let m=[],g=[],x=[],b=[],M=[Be.x,gr-.3,Be.z],_=[wl.stoolX,.02,wl.keyFront+.1],S=1.25,O=2.35;for(let N=0;N<=40;N++){let G=N/40*2*Do,F=Math.cos(G),j=Math.sin(G);m.push(M[0]+F*S,M[1],M[2]+j*S,_[0]+F*O,_[1],_[2]+j*O),g.push(F,.08,j,F,.08,j),x.push(1,0)}for(let N=0;N<40;N++){let G=N*2;b.push(G,G+1,G+3,G,G+3,G+2)}return{pos:m,nrm:g,hh:x,idx:b}})(),f=t({vert:`
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
		}`,attributes:{position:p.pos,normal:p.nrm,hh:p.hh},elements:p.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function v(m){let g=m&&m.reflected;c(),h(),l(),d&&d(),g||(f(),u({halo:1}),u({halo:0}))}return v};Jr.exports.C=Be;Jr.exports.R=ro;Jr.exports.PASS=ve;Jr.exports.SURR=ca;Jr.exports.OFF=hh;Jr.exports.BAY=Rn;Jr.exports.PATH=fh;Jr.exports.PIANO=vn;Jr.exports.PLAY=wl;Jr.exports.TOP=gr;Jr.exports.roomGLSL=h2;Jr.exports.segments=W_});var _2=Mt((kz,w2)=>{"use strict";var V_=Fs(),{addFlutedColumn:d2,addStatue:X_,addPlant:Y_}=Gm(),p2=ja(),K_=Wi(),j0=_r(),Q_=A0(),ec=Qa(),Eo=14,Cn=j0.C.hallEnd+.35,Yo=8,Io=.35,Hu=1.15,Uu=1.15,Bu=[18,29,40],Z_=[[[0,0],[0,ec.PASS.z0]],[[0,ec.PASS.z1],[0,Cn]],[[Eo,Cn],[Eo,0]],[[0,0],[Eo,0]],[[Eo,Cn],[0,Cn]]],x2=[];for(let t of Bu)for(let e of[1.25,Eo-1.25]){let o=Hu/2,n=Uu/2;x2.push([[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]])}var dh=12,y2=2.95,b2=.62,mh=y2+b2,ph=[{file:"venus.bin",x:1.85,z:Cn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Eo-2.1,z:Cn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:j0.NICHE_X[0],z:j0.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:j0.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:j0.NICHE_X[1],z:j0.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:j0.NICHE_PLINTH_TOP,mat:3}],J_={x0:Io,x1:3.15,z0:3.6,z1:8.2,top:1},v2=.8,gh=1.17,_l=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{_l.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),_l.push({x:Eo-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function ju(t,e,o,n){return[[[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]]]}var xh=[];for(let t of[-1,1])xh.push(...ju(Eo/2+t*mh,dh,.85,.85));for(let t of ph.filter(e=>e.pedestal))xh.push(...ju(t.x,t.z,gh*1.1,gh*1.1));for(let t of _l)xh.push(...ju(t.x,t.z,.42,.42));var t6=Z_.concat(x2,xh,ec.segments());function e6(t){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of t){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let h=a;h<=s;h++)for(let l=i;l<=c;l++)n(h,l,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let h=-1;h<=1;h++)for(let l=-1;l<=1;l++){let u=o.get(s+h+":"+(i+l));u&&c.push(...u)}return[...new Set(c)]}}}var vh=[],On={curMat:[0,0,0]};function Wu(t,e,o,n,r,a,s){let i=t.length/3;t.push(...o,...n,...r,...a),e.push(...s,...s,...s,...s);let c=On.curMat;return vh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Po(t,e,o,n,r,a,s,i,c){let h=(l,u,d,p,f)=>{o.push(...Wu(t,e,l,u,d,p,f))};h([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),h([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),h([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),h([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),h([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),h([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function tc(t,e,o,n,r){let a=On,s=a.vert(t,r),i=a.vert(e,r),c=a.vert(o,r),h=a.vert(n,r);a.tri(s,i,c),a.tri(i,h,c)}function m2(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,l=Math.cos(c),u=Math.sin(c),d=Math.cos(h),p=Math.sin(h),f=[t+o*l,e+o*u],v=[t+o*d,e+o*p],m=[t+n*l,e+n*u],g=[t+n*d,e+n*p];tc([f[0],f[1],r],[v[0],v[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),tc([f[0],f[1],a],[v[0],v[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+h)/2;tc([f[0],f[1],r],[v[0],v[1],r],[f[0],f[1],a],[v[0],v[1],a],[-Math.cos(x),-Math.sin(x),0]),tc([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function o6(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,l=t+o*Math.cos(c),u=e+o*Math.sin(c),d=t+o*Math.cos(h),p=e+o*Math.sin(h);tc([l,u,r],[d,p,r],[l,n,r],[d,n,r],[0,0,-1]),tc([l,u,a],[d,p,a],[l,n,a],[d,n,a],[0,0,1])}}function n6(t,e,o,n){let r=Eo/2,a=y2,s=3,i=a+.42,c=i+.15,h=b2,l=mh,u=5.98,d=n-.45,p=n+.45,f=64,v=d2(On,r-l,n,0,u,h);d2(On,r+l,n,0,u,h),On.curMat=[0,0,0],m2(r,s,a,i,d,p,f),m2(r,s,i,c,d-.07,p+.07,f),o6(r,s,c,v+.05,d,p,f);for(let g of[-1,1]){let x=r+g*(c-.02),b=r+g*l;Po(t,e,o,Math.min(x,b),s,d,Math.max(x,b),v+.05,p)}for(let g of[-1,1]){let x=r+g*(a-.05),b=r+g*(a+.85);Po(t,e,o,Math.min(x,b),s-.16,n-.6,Math.max(x,b),s,n+.6)}let m=l+h*1.42+.45;Po(t,e,o,r-m,v,n-.7,r+m,v+.44,n+.7),Po(t,e,o,r-m+.12,v+.44,n-.62,r+m-.12,v+.7,n+.62),Po(t,e,o,r-m-.1,v+.7,n-.84,r+m+.1,v+.84,n+.84),Po(t,e,o,r-m-.22,v+.84,n-.96,r+m+.22,v+1,n+.96),Po(t,e,o,r-.3,s+a-.1,n-.56,r+.3,v,n+.56)}function g2(t,e,o,n,r){Po(t,e,o,n-.72,0,r-.72,n+.72,.2,r+.72),Po(t,e,o,n-.58,.2,r-.58,n+.58,.4,r+.58),Po(t,e,o,n-Hu/2,.4,r-Uu/2,n+Hu/2,Yo-1.35,r+Uu/2),Po(t,e,o,n-.67,.42,r-.67,n+.67,.62,r+.67),Po(t,e,o,n-.67,Yo-1.58,r-.67,n+.67,Yo-1.35,r+.67),Po(t,e,o,n-.82,Yo-1.35,r-.82,n+.82,Yo-1.05,r+.82),Po(t,e,o,n-.66,Yo-1.05,r-.66,n+.66,Yo-.78,r+.66),Po(t,e,o,n-.92,Yo-.78,r-.92,n+.92,Yo-.55,r+.92),Po(t,e,o,n-.78,Yo-.55,r-.78,n+.78,Yo-.3,r+.78),Po(t,e,o,n-.92,Yo-.3,r-.92,n+.92,Yo-.1,r+.92)}function uh(t,e,o,n,r){r==="left"?(Po(t,e,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Po(t,e,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Po(t,e,o,Eo-.14,1,n-3.8/2,Eo+.08,5.7,n+3.8/2),Po(t,e,o,Eo-.18,1+.18,n-3.8/2+.18,Eo+.08+.04,5.7-.18,n+3.8/2-.18))}function r6(t,e,o,n){Po(t,e,o,.65,Yo-.16,n-1.65,.65+.22,Yo,n+1.65),Po(t,e,o,Eo-.65-.22,Yo-.16,n-1.65,Eo-.65,Yo,n+1.65),Po(t,e,o,.65,Yo-.16,n-1.65,Eo-.65,Yo,n-1.43),Po(t,e,o,.65,Yo-.16,n+1.43,Eo-.65,Yo,n+1.65),o.push(...Wu(t,e,[.65+.22,Yo-.16,n-1.43],[Eo-.65-.22,Yo-.16,n-1.43],[.65+.22,Yo-.16,n+1.43],[Eo-.65-.22,Yo-.16,n+1.43],[0,-1,0]))}w2.exports=function(){let t=[],e=[],o=[];vh=[],On=V_.createBuilder(t,e,o,vh),o.push(...Wu(t,e,[0,0,0],[Eo,0,0],[0,0,Cn],[Eo,0,Cn],[0,1,0])),K_.addSkylight(On,[0,0,0],Cn),On.curMat=[0,0,0];{let c=ec.SURR;Po(t,e,o,-Io,0,0,Io,Yo,c.z0),Po(t,e,o,-Io,0,c.z1,Io,Yo,Cn),Po(t,e,o,-Io,c.top,c.z0,Io,Yo,c.z1)}Po(t,e,o,Eo-Io,0,j0.C.z1,Eo+Io,Yo,Cn-Io),Po(t,e,o,Eo-Io-.12,0,j0.C.z1+2*Io,Eo-Io,.42,Cn-Io),Po(t,e,o,Eo-Io-.07,.42,j0.C.z1+2*Io,Eo-Io,.5,Cn-Io);for(let[c,h]of[[0,ec.SURR.z0],[ec.SURR.z1,Cn-Io]])Po(t,e,o,Io,0,c,Io+.12,.42,h),Po(t,e,o,Io,.42,c,Io+.07,.5,h);Po(t,e,o,Io,0,Cn-Io-.12,Eo-Io,.42,Cn-Io),Po(t,e,o,Io,.42,Cn-Io-.07,Eo-Io,.5,Cn-Io),p2.addEntranceWall(On),p2.addFrames(On),On.curMat=[0,0,0],Po(t,e,o,-Io,0,Cn-Io,Eo+Io,Yo,Cn+Io),n6(t,e,o,dh);for(let c of Bu)g2(t,e,o,1.25,c),g2(t,e,o,Eo-1.25,c);uh(t,e,o,22,"left"),uh(t,e,o,25,"right"),uh(t,e,o,33,"left"),uh(t,e,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)r6(t,e,o,c);j0.addWing(On),On.curMat=[0,0,0];for(let c of ph.filter(h=>h.pedestal))X_(On,c.x,c.z,gh,v2);{let c=J_;On.curMat=[0,0,0],On.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),On.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),On.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),On.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}Q_.addAlcove(On);for(let c of _l)Y_(On,c.x,c.z,c.seed,1,c.away);On.curMat=[0,0,0];let r=[[[Eo,Cn-.35],[0,Cn-.35]],[[0,3],[0,10]],[[Eo,15],[Eo,22]],[[0,24],[0,31]],[[Eo,33],[Eo,40]],[[0,41],[0,46]]],a=e6(t6),s=(c,h)=>{let l=0,u=1/0;return r.forEach((d,p)=>{let f=(d[0][0]+d[1][0])/2,v=(d[0][1]+d[1][1])/2,m=Math.hypot(c-f,h-v);m<u&&(u=m,l=p)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:ph,occluders:[...Bu.flatMap(c=>[[1.25,c,.78],[Eo-1.25,c,.78]]),[Eo/2-mh,dh,.86],[Eo/2+mh,dh,.86],...ph.filter(c=>c.pedestal).map(c=>[c.x,c.z,gh*1.12]),..._l.map(c=>[c.x,c.z,.34])],pedestalTop:v2,mat:vh,getAreaIndex:s,getGridSegments:(c,h)=>a.get(c,h),getGridParts:(c,h)=>a.get(c,h),position:t,normal:e,elements:o}}});var Vu=Mt((Sz,M2)=>{"use strict";var{doorLightGLSL:a6}=ja(),{skylightGLSL:s6}=Wi(),{windowLightGLSL:i6,C:h0}=_r(),{alcoveLightGLSL:c6}=A0(),T0=t=>t.toFixed(4),l6=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();M2.exports=(t,e,o,n)=>{let a=(e.occluders||[]).slice(0,24).map(([p,f,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${p.toFixed(3)}, ${f.toFixed(3)}), ${v.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],h=p=>{let f=p&&p.tick!==void 0?p.tick:0;if(f!==i||c.length===0){i=f;let v=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-v[0],m.c[2]-v[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},u="",d="";for(let p=0;p<8;p++)l["lightC"+p]=f=>h(f)[p].c,l["lightD"+p]=f=>h(f)[p].d,u+="uniform vec4 lightC"+p+", lightD"+p+`;
`,d+="pic += pictureLight(lightC"+p+", lightD"+p+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Xa().lanternGLSL()}

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

    ${a6()}

    ${s6()}

    ${i6()}

    ${c6()}

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
        step(abs(v_pos.z - ${T0(h0.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${T0((h0.z0+h0.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${T0(h0.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${l6}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${T0(h0.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${T0(h0.z0)} || v_pos.z > ${T0(h0.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${T0(h0.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${T0(h0.z0)}), ${T0(h0.z1)} - v_pos.z), ${T0(h0.x1)} - v_pos.x);
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
        if (v_pos.z < ${T0(h0.z0+.3)} && v_pos.x > ${T0(h0.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:n?t.prop("offset"):0,count:n?t.prop("count"):e.elements.length})}});var S2=Mt((Ez,k2)=>{"strict mode";var f6="https://api.artic.edu/api/v1/artworks/search",h6=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,u6="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",d6="&fields=image_id,title,artist_title",p6={low:400,mid:843,high:1686};k2.exports={fetchList:async function(t,e){let o=f6+u6+d6+`&from=${t}&size=${e}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(t,e){let o=h6(t,p6[e]),n=await fetch(o).then(r=>r.blob());return{title:t.title+" - "+t.artist_title,image:n}}}});var A2=Mt((zz,z2)=>{"use strict";var v6=vu(),m6=S0(),g6=t=>"images/web/"+t.slug+(m6.isPhone?"-1024":"")+".webp";async function E2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}z2.exports={fetchList:async function(t,e){return v6.slice(t,t+e).map((o,n)=>({...o,image_id:t+n}))},fetchImage:async function(t){let e;try{e=await E2(g6(t))}catch(o){e=await E2("images/"+t.file)}return{title:t.title,image:e}}}});var L2=Mt((Az,T2)=>{"strict mode";T2.exports={default:"local",artic:S2(),local:A2()}});var Yu=Mt((Tz,R2)=>{"strict mode";var Us=document.createElement("canvas"),Xu=Us.width=Us.height=1024,Za=Us.getContext("2d");Za.mozImageSmoothingEnabled=!1;Za.webkitImageSmoothingEnabled=!1;Za.font="32px Verdana";Za.textBaseline="bottom";Za.fillStyle="#aaa";function N2(t,e,o,n){var r=e,a,s=0,i=0,c=e.split(" "),h,l;for(h=l=c.length;t.measureText(r).width>o&&h>1;){h--,r=a="";for(var u=0;u<l;u++)u<h?(r+=c[u],u+1<h&&(r+=" ")):(a+=c[u],u+1<l&&(a+=" "))}return n.push(r),i=t.measureText(r).width,a&&(s=N2(t,a,o,n),s>i&&(i=s)),i}R2.exports={init(t,e,o=Xu){var n=[];N2(Za,e,Math.min(o*Xu,Xu),n),Za.clearRect(0,0,Us.width,Us.height);for(var r=0;r<n.length;r++)Za.fillText(n[r],0,Us.height-(Math.max(n.length,3)-r)*32);return t({data:Us,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var P2=Mt((Lz,C2)=>{"strict mode";var Ku=L2(),x6=new URLSearchParams(window.location.search).get("api"),O2=Ku[x6]||Ku[Ku.default],y6=Yu(),Qu={},nc=[],b6=2;function w6(t){return(!navigator.connection||navigator.connection.downlink<b6)&&(t=t=="high"?"mid":"low"),t}var _6=S0(),oc=document.createElement("canvas");oc.width=oc.height=_6.isPhone?1024:2048;var td=oc.getContext("2d");td.imageSmoothingEnabled=!0;td.imageSmoothingQuality="high";var Zu=!1,M6=t=>[(nc.pop()||t.texture)([[[200,200,200]]]),e=>(nc.pop()||t.texture)([[[0,0,0,0]]]),1];async function Ju(t,e,o){Zu===!1&&(Zu=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await O2.fetchImage(e,w6(o));r=a.title,n=await createImageBitmap(a.image),td.drawImage(n,0,0,oc.width,oc.height)}catch(a){return console.error(a),o=="high"?await Ju(t,e,"low"):M6(t)}return[(nc.pop()||t.texture)({data:oc,min:"mipmap",mipmap:"nice",aniso:Zu,flipY:!0}),a=>y6.init(nc.pop()||t.texture,r,a),n.width/n.height]}C2.exports={fetch:(t,e=10,o="low",n,r)=>{let a=Object.keys(Qu).length;O2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(Qu[i.image_id]){--e===0&&r();return}Qu[i.image_id]=i,Ju(t,i,o).then(([c,h,l])=>{n({...i,tex:c,textGen:h,aspect:l}),--e===0&&r()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,Ju(t,e,o).then(([n,r])=>{e.loading=!1,e.tex=n,e.text=r(e.width)}))},unload:t=>{t.tex&&(nc.push(t.tex),t.tex=void 0),t.text&&(nc.push(t.text),t.text=void 0)}}});var I2=Mt((Nz,$2)=>{$2.exports=k6;function k6(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var q2=Mt((Rz,F2)=>{F2.exports=S6;function S6(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var G2=Mt((Oz,D2)=>{D2.exports=E6;function E6(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var ed=Mt((Cz,H2)=>{H2.exports=z6;function z6(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var B2=Mt((Pz,U2)=>{U2.exports=A6;function A6(t,e){if(t===e){var o=e[1],n=e[2],r=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=r,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var W2=Mt(($z,j2)=>{j2.exports=T6;function T6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],l=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],x=o*i-n*s,b=o*c-r*s,w=o*h-a*s,M=n*c-r*i,_=n*h-a*i,S=r*h-a*c,O=l*v-u*f,N=l*m-d*f,G=l*g-p*f,F=u*m-d*v,j=u*g-p*v,D=d*g-p*m,B=x*D-b*j+w*F+M*G-_*N+S*O;return B?(B=1/B,t[0]=(i*D-c*j+h*F)*B,t[1]=(r*j-n*D-a*F)*B,t[2]=(v*S-m*_+g*M)*B,t[3]=(d*_-u*S-p*M)*B,t[4]=(c*G-s*D-h*N)*B,t[5]=(o*D-r*G+a*N)*B,t[6]=(m*w-f*S-g*b)*B,t[7]=(l*S-d*w+p*b)*B,t[8]=(s*j-i*G+h*O)*B,t[9]=(n*G-o*j-a*O)*B,t[10]=(f*_-v*w+g*x)*B,t[11]=(u*w-l*_-p*x)*B,t[12]=(i*N-s*F-c*O)*B,t[13]=(o*F-n*N+r*O)*B,t[14]=(v*b-f*M-m*x)*B,t[15]=(l*M-u*b+d*x)*B,t):null}});var X2=Mt((Iz,V2)=>{V2.exports=L6;function L6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],l=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15];return t[0]=i*(d*g-p*m)-u*(c*g-h*m)+v*(c*p-h*d),t[1]=-(n*(d*g-p*m)-u*(r*g-a*m)+v*(r*p-a*d)),t[2]=n*(c*g-h*m)-i*(r*g-a*m)+v*(r*h-a*c),t[3]=-(n*(c*p-h*d)-i*(r*p-a*d)+u*(r*h-a*c)),t[4]=-(s*(d*g-p*m)-l*(c*g-h*m)+f*(c*p-h*d)),t[5]=o*(d*g-p*m)-l*(r*g-a*m)+f*(r*p-a*d),t[6]=-(o*(c*g-h*m)-s*(r*g-a*m)+f*(r*h-a*c)),t[7]=o*(c*p-h*d)-s*(r*p-a*d)+l*(r*h-a*c),t[8]=s*(u*g-p*v)-l*(i*g-h*v)+f*(i*p-h*u),t[9]=-(o*(u*g-p*v)-l*(n*g-a*v)+f*(n*p-a*u)),t[10]=o*(i*g-h*v)-s*(n*g-a*v)+f*(n*h-a*i),t[11]=-(o*(i*p-h*u)-s*(n*p-a*u)+l*(n*h-a*i)),t[12]=-(s*(u*m-d*v)-l*(i*m-c*v)+f*(i*d-c*u)),t[13]=o*(u*m-d*v)-l*(n*m-r*v)+f*(n*d-r*u),t[14]=-(o*(i*m-c*v)-s*(n*m-r*v)+f*(n*c-r*i)),t[15]=o*(i*d-c*u)-s*(n*d-r*u)+l*(n*c-r*i),t}});var K2=Mt((Fz,Y2)=>{Y2.exports=N6;function N6(t){var e=t[0],o=t[1],n=t[2],r=t[3],a=t[4],s=t[5],i=t[6],c=t[7],h=t[8],l=t[9],u=t[10],d=t[11],p=t[12],f=t[13],v=t[14],m=t[15],g=e*s-o*a,x=e*i-n*a,b=e*c-r*a,w=o*i-n*s,M=o*c-r*s,_=n*c-r*i,S=h*f-l*p,O=h*v-u*p,N=h*m-d*p,G=l*v-u*f,F=l*m-d*f,j=u*m-d*v;return g*j-x*F+b*G+w*N-M*O+_*S}});var Z2=Mt((qz,Q2)=>{Q2.exports=R6;function R6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=e[4],c=e[5],h=e[6],l=e[7],u=e[8],d=e[9],p=e[10],f=e[11],v=e[12],m=e[13],g=e[14],x=e[15],b=o[0],w=o[1],M=o[2],_=o[3];return t[0]=b*n+w*i+M*u+_*v,t[1]=b*r+w*c+M*d+_*m,t[2]=b*a+w*h+M*p+_*g,t[3]=b*s+w*l+M*f+_*x,b=o[4],w=o[5],M=o[6],_=o[7],t[4]=b*n+w*i+M*u+_*v,t[5]=b*r+w*c+M*d+_*m,t[6]=b*a+w*h+M*p+_*g,t[7]=b*s+w*l+M*f+_*x,b=o[8],w=o[9],M=o[10],_=o[11],t[8]=b*n+w*i+M*u+_*v,t[9]=b*r+w*c+M*d+_*m,t[10]=b*a+w*h+M*p+_*g,t[11]=b*s+w*l+M*f+_*x,b=o[12],w=o[13],M=o[14],_=o[15],t[12]=b*n+w*i+M*u+_*v,t[13]=b*r+w*c+M*d+_*m,t[14]=b*a+w*h+M*p+_*g,t[15]=b*s+w*l+M*f+_*x,t}});var tg=Mt((Dz,J2)=>{J2.exports=O6;function O6(t,e,o){var n=o[0],r=o[1],a=o[2],s,i,c,h,l,u,d,p,f,v,m,g;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],h=e[3],l=e[4],u=e[5],d=e[6],p=e[7],f=e[8],v=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=h,t[4]=l,t[5]=u,t[6]=d,t[7]=p,t[8]=f,t[9]=v,t[10]=m,t[11]=g,t[12]=s*n+l*r+f*a+e[12],t[13]=i*n+u*r+v*a+e[13],t[14]=c*n+d*r+m*a+e[14],t[15]=h*n+p*r+g*a+e[15]),t}});var og=Mt((Gz,eg)=>{eg.exports=C6;function C6(t,e,o){var n=o[0],r=o[1],a=o[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var rg=Mt((Hz,ng)=>{ng.exports=P6;function P6(t,e,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,h,l,u,d,p,f,v,m,g,x,b,w,M,_,S,O,N,G,F,j,D,B,ut;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),h=Math.cos(o),l=1-h,u=e[0],d=e[1],p=e[2],f=e[3],v=e[4],m=e[5],g=e[6],x=e[7],b=e[8],w=e[9],M=e[10],_=e[11],S=r*r*l+h,O=a*r*l+s*c,N=s*r*l-a*c,G=r*a*l-s*c,F=a*a*l+h,j=s*a*l+r*c,D=r*s*l+a*c,B=a*s*l-r*c,ut=s*s*l+h,t[0]=u*S+v*O+b*N,t[1]=d*S+m*O+w*N,t[2]=p*S+g*O+M*N,t[3]=f*S+x*O+_*N,t[4]=u*G+v*F+b*j,t[5]=d*G+m*F+w*j,t[6]=p*G+g*F+M*j,t[7]=f*G+x*F+_*j,t[8]=u*D+v*B+b*ut,t[9]=d*D+m*B+w*ut,t[10]=p*D+g*B+M*ut,t[11]=f*D+x*B+_*ut,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var sg=Mt((Uz,ag)=>{ag.exports=$6;function $6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],h=e[8],l=e[9],u=e[10],d=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*r+h*n,t[5]=s*r+l*n,t[6]=i*r+u*n,t[7]=c*r+d*n,t[8]=h*r-a*n,t[9]=l*r-s*n,t[10]=u*r-i*n,t[11]=d*r-c*n,t}});var cg=Mt((Bz,ig)=>{ig.exports=I6;function I6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],h=e[8],l=e[9],u=e[10],d=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r-h*n,t[1]=s*r-l*n,t[2]=i*r-u*n,t[3]=c*r-d*n,t[8]=a*n+h*r,t[9]=s*n+l*r,t[10]=i*n+u*r,t[11]=c*n+d*r,t}});var fg=Mt((jz,lg)=>{lg.exports=F6;function F6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],h=e[4],l=e[5],u=e[6],d=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r+h*n,t[1]=s*r+l*n,t[2]=i*r+u*n,t[3]=c*r+d*n,t[4]=h*r-a*n,t[5]=l*r-s*n,t[6]=u*r-i*n,t[7]=d*r-c*n,t}});var ug=Mt((Wz,hg)=>{hg.exports=q6;function q6(t,e,o){var n,r,a,s=o[0],i=o[1],c=o[2],h=Math.sqrt(s*s+i*i+c*c);return Math.abs(h)<1e-6?null:(h=1/h,s*=h,i*=h,c*=h,n=Math.sin(e),r=Math.cos(e),a=1-r,t[0]=s*s*a+r,t[1]=i*s*a+c*n,t[2]=c*s*a-i*n,t[3]=0,t[4]=s*i*a-c*n,t[5]=i*i*a+r,t[6]=c*i*a+s*n,t[7]=0,t[8]=s*c*a+i*n,t[9]=i*c*a-s*n,t[10]=c*c*a+r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var pg=Mt((Vz,dg)=>{dg.exports=D6;function D6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=n+n,c=r+r,h=a+a,l=n*i,u=n*c,d=n*h,p=r*c,f=r*h,v=a*h,m=s*i,g=s*c,x=s*h;return t[0]=1-(p+v),t[1]=u+x,t[2]=d-g,t[3]=0,t[4]=u-x,t[5]=1-(l+v),t[6]=f+m,t[7]=0,t[8]=d+g,t[9]=f-m,t[10]=1-(l+p),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var mg=Mt((Xz,vg)=>{vg.exports=G6;function G6(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var xg=Mt((Yz,gg)=>{gg.exports=H6;function H6(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var bg=Mt((Kz,yg)=>{yg.exports=U6;function U6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var _g=Mt((Qz,wg)=>{wg.exports=B6;function B6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var kg=Mt((Zz,Mg)=>{Mg.exports=j6;function j6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Eg=Mt((Jz,Sg)=>{Sg.exports=W6;function W6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=o+o,i=n+n,c=r+r,h=o*s,l=n*s,u=n*i,d=r*s,p=r*i,f=r*c,v=a*s,m=a*i,g=a*c;return t[0]=1-u-f,t[1]=l+g,t[2]=d-m,t[3]=0,t[4]=l-g,t[5]=1-h-f,t[6]=p+v,t[7]=0,t[8]=d+m,t[9]=p-v,t[10]=1-h-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Ag=Mt((tA,zg)=>{zg.exports=V6;function V6(t,e,o,n,r,a,s){var i=1/(o-e),c=1/(r-n),h=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(r+n)*c,t[10]=(s+a)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*h,t[15]=0,t}});var Lg=Mt((eA,Tg)=>{Tg.exports=X6;function X6(t,e,o,n,r){var a=1/Math.tan(e/2),s=1/(n-r);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*s,t[15]=0,t}});var Rg=Mt((oA,Ng)=>{Ng.exports=Y6;function Y6(t,e,o,n){var r=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),h=2/(r+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(r-a)*h*.5,t[10]=n/(o-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*o/(o-n),t[15]=0,t}});var Cg=Mt((nA,Og)=>{Og.exports=K6;function K6(t,e,o,n,r,a,s){var i=1/(e-o),c=1/(n-r),h=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+o)*i,t[13]=(r+n)*c,t[14]=(s+a)*h,t[15]=1,t}});var $g=Mt((rA,Pg)=>{var Q6=ed();Pg.exports=Z6;function Z6(t,e,o,n){var r,a,s,i,c,h,l,u,d,p,f=e[0],v=e[1],m=e[2],g=n[0],x=n[1],b=n[2],w=o[0],M=o[1],_=o[2];return Math.abs(f-w)<1e-6&&Math.abs(v-M)<1e-6&&Math.abs(m-_)<1e-6?Q6(t):(l=f-w,u=v-M,d=m-_,p=1/Math.sqrt(l*l+u*u+d*d),l*=p,u*=p,d*=p,r=x*d-b*u,a=b*l-g*d,s=g*u-x*l,p=Math.sqrt(r*r+a*a+s*s),p?(p=1/p,r*=p,a*=p,s*=p):(r=0,a=0,s=0),i=u*s-d*a,c=d*r-l*s,h=l*a-u*r,p=Math.sqrt(i*i+c*c+h*h),p?(p=1/p,i*=p,c*=p,h*=p):(i=0,c=0,h=0),t[0]=r,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=u,t[7]=0,t[8]=s,t[9]=h,t[10]=d,t[11]=0,t[12]=-(r*f+a*v+s*m),t[13]=-(i*f+c*v+h*m),t[14]=-(l*f+u*v+d*m),t[15]=1,t)}});var Fg=Mt((aA,Ig)=>{Ig.exports=J6;function J6(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var rc=Mt((sA,qg)=>{qg.exports={create:I2(),clone:q2(),copy:G2(),identity:ed(),transpose:B2(),invert:W2(),adjoint:X2(),determinant:K2(),multiply:Z2(),translate:tg(),scale:og(),rotate:rg(),rotateX:sg(),rotateY:cg(),rotateZ:fg(),fromRotation:ug(),fromRotationTranslation:pg(),fromScaling:mg(),fromTranslation:xg(),fromXRotation:bg(),fromYRotation:_g(),fromZRotation:kg(),fromQuat:Eg(),frustum:Ag(),perspective:Lg(),perspectiveFromFieldOfView:Rg(),ortho:Cg(),lookAt:$g(),str:Fg()}});var Hg=Mt((iA,Gg)=>{"use strict";var Dg=P2(),En=rc(),Bs=_r(),tM=3e3,yh="high",od,kl=.36,Sl=13.64,ac=Bs.C.hallEnd-.01,El=Bs.C.z0+.01,eM=.356,oM=13.644,nM=Bs.C.hallEnd-.006,rM=Bs.C.z0+.006,aM=.12,wh=4,sc=t=>Mr[t]&&Mr[t].cy||wh,nd=.26,sM=5.6,iM=7,Mr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:ac},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Bs.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Bs.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Bs.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function cM(t,e){let o=e&&e.maxH||sM,n=e&&e.maxW||iM,r=Math.min(o,n/t);return{width:r*t,height:r}}function lM(t,e,o){let n=Mr[o],r=[],a=sc(o)-e/2;return n.side==="left"?(En.fromTranslation(r,[kl,a,n.z+t/2]),En.rotateY(r,r,Math.PI/2)):n.side==="right"?(En.fromTranslation(r,[Sl,a,n.z-t/2]),En.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?En.fromTranslation(r,[n.x-t/2,a,El]):(En.fromTranslation(r,[7+t/2,a,ac]),En.rotateY(r,r,Math.PI)),En.scale(r,r,[t,e,aM]),r}function fM(t,e,o){let n=Mr[o],r=[],a=sc(o)-e/2;return n.side==="left"?(En.fromTranslation(r,[kl,a,n.z+t/2]),En.rotateY(r,r,Math.PI/2)):n.side==="right"?(En.fromTranslation(r,[Sl,a,n.z-t/2]),En.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?En.fromTranslation(r,[n.x-t/2,a,El]):(En.fromTranslation(r,[7+t/2,a,ac]),En.rotateY(r,r,Math.PI)),r}function hM(t,e,o){let n=Mr[o],r=[],a=sc(o)-e/2-nd-.38;return n.side==="left"?(En.fromTranslation(r,[eM,a,n.z+t/2]),En.rotateY(r,r,Math.PI/2)):n.side==="right"?(En.fromTranslation(r,[oM,a,n.z-t/2]),En.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?En.fromTranslation(r,[n.x-t/2,a,rM]):(En.fromTranslation(r,[7+t/2,a,nM]),En.rotateY(r,r,Math.PI)),En.scale(r,r,[2,2,2]),r}function uM(t,e,o){let n=Mr[o],r=sc(o)-e/2-nd-.38;return n.side==="left"?[kl+.55,r,n.z]:n.side==="right"?[Sl-.55,r,n.z]:n.side==="corridor"?[n.x,r,El+.55]:[7,r,ac-.55]}var Ml=.42;function bh(t,e,o,n,r,a){return[e[0]*n,e[1]*n,e[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function dM(t,e,o){let n=Mr[o],r,a,s;n.side==="left"?(r=[kl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[Sl,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,El],a=[1,0,0],s=[0,0,1]):(r=[7,ac],a=[1,0,0],s=[0,0,-1]);let i=sc(o)+e/2+nd+.3,c=Math.min(2.4,Math.max(.9,t*.55)),h=(p,f)=>[r[0]+s[0]*p,f,r[1]+s[2]*p],l=[.075,.062,.05],u=[{fixmodel:bh(h(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:bh(h(Ml/2,i),a,s,.02,.02,Ml),fixcol:l,fixglow:0},{fixmodel:bh(h(Ml,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:bh(h(Ml-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],d=h(Ml,i-.02);return{fixtures:u,light:{c:[d[0],d[1],d[2],1],d:[a[0],a[1],a[2],c/2]}}}Gg.exports=(t,e)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!Mr[s])return;let{width:i,height:c}=cM(a.aspect,Mr[s]),h=dM(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=h.light),o.push({...a,fixtures:h.fixtures,side:Mr[s].side,model:lM(i,c,s),framemodel:fM(i,c,s),framesize:[i,c],textmodel:hM(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:uM(i,c,s),paintingPosition:Mr[s].side==="left"?[kl+.05,wh,Mr[s].z]:Mr[s].side==="right"?[Sl-.05,wh,Mr[s].z]:Mr[s].side==="corridor"?[Mr[s].x,sc(s),El+.05]:[7,wh,ac-.05],textGen:null})};return Dg.fetch(t,Mr.length,yh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Dg.load(t,a,yh)}),yh="low",od&&clearTimeout(od),od=setTimeout(()=>{yh="high"},tM)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Wg=Mt((cA,jg)=>{"use strict";var pM=Yu(),Ug=S0(),Bg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function vM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Bg.forEach(([n,r])=>{t.forEach(([a,s])=>e.push([a,s,n,r]))});let o=[];for(let n=0;n<Bg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,h=(n+1)*4+a;o.push(s,i,h,s,h,c)}return{verts:e,elems:o}}var mM=`#extension GL_OES_standard_derivatives : enable
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
}`,gM=`
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
}`;jg.exports=t=>{let e=pM.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Xa().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Ug.isPhone?1024:2048),detail:()=>Ug.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=vM(),r=t({frag:mM,vert:gM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var Ws=Mt((fA,V0)=>{"use strict";var Mo=Math.PI,at=t=>(+t).toFixed(4),_e=[-90,0,0],Vt=16,qe=22,vo=7.8,u0=11.6,xr=.55,d0=(u0-vo)/(Vt/2),fe={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};fe.top=fe.spring+fe.hw;var Hr={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Vo={rafter:qe/12,rafterW:.1,purlin:1,purlinW:.07},Ll=[5.5,11,16.5],Ko={cx:Vt/2,hw:1.12,spring:3.95,pier:1.05,face:qe-1.45,back:qe-.2,floor:.66,top:6.55};Ko.x0=Ko.cx-Ko.hw-Ko.pier;Ko.x1=Ko.cx+Ko.hw+Ko.pier;var dt={x0:Vt/2-1.7,x1:Vt/2+1.7,z0:7.2,z1:Ko.face-.44,curb:.5,top:.36},Dn=t=>dt.z0+(t-5.6)/11*(dt.z1-dt.z0),rn={x:Vt/2,z:qe-1,plinth:Ko.floor+.26,height:2.75,yaw:Mo+.35,file:"res/nymph.bin"},la=(()=>{let t=[-.68,.6,-.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),rd=t=>[t[0]+_e[0],t[1]+_e[1],t[2]+_e[2]];function Qg(){let t=fe.c.map(o=>`
		{
			float dz = q.z - ${at(o)};
			float inside = smoothstep(-b, b, ${at(fe.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${at(fe.sill)});
			float arch = smoothstep(-b, b, ${at(fe.hw)} - length(vec2(dz, max(q.y - ${at(fe.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=fe.c.map(o=>`
		{
			float dz = q.z - ${at(o)};
			if (abs(dz) < ${at(fe.hw+.2)}) {
				${Hr.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${at(Hr.w*.5)} - b, ${at(Hr.w*.5)} + b, abs(dz - ${at(n)})));`).join(`
				`)}
				float ry = q.y - ${at(fe.sill)};
				float tr = abs(ry - ${at(Hr.rowH)} * floor(ry / ${at(Hr.rowH)} + 0.5));
				if (q.y < ${at(fe.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${at(Hr.w*.5)} - b, ${at(Hr.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${at(fe.spring)}));
				if (q.y > ${at(fe.spring)}) bar = max(bar, 1.0 - smoothstep(${at(Hr.w*.5)} - b, ${at(Hr.w*.5)} + b, abs(rr - ${at(Hr.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${at(fe.hw)} - max(abs(dz), q.y > ${at(fe.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${at(la[0])}, ${at(la[1])}, ${at(la[2])});

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
	// coordinates (centre 0, half size ${at(Vo.purlin/2)} x ${at(Vo.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${at(Vo.purlin/2)}, ${at(Vo.rafter/2)});
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
		vec3 p = pw - vec3(${at(_e[0])}, ${at(_e[1])}, ${at(_e[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			float dxn = p.x - ${at(Ko.cx)};
			if (abs(dxn) < ${at(Ko.hw)} && p.z > ${at(Ko.face)} && p.y > ${at(Ko.floor-.05)} && p.y < ${at(Ko.spring)} + sqrt(max(${at(Ko.hw*Ko.hw)} - dxn * dxn, 0.0))) {
				if (S.z >= 0.0) return 0.0;
				vec3 hf = p + S * ((${at(Ko.face)} - p.z) / S.z);
				float hx = hf.x - ${at(Ko.cx)};
				float edge = ${at(Ko.hw)} - abs(hx);
				float topY = ${at(Ko.spring)} + sqrt(max(${at(Ko.hw*Ko.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${at(Ko.face)} - p.z) / S.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${at(Ko.x0-.2)}, 0.0, ${at(Ko.face-.3)}), bmax = vec3(${at(Ko.x1+.2)}, ${at(6.95)}, ${at(qe)});
				vec3 inv = 1.0 / S;
				vec3 t0 = (bmin - p) * inv, t1 = (bmax - p) * inv;
				vec3 tn = min(t0, t1), tf = max(t0, t1);
				float a = max(max(tn.x, tn.y), tn.z), bb = min(min(tf.x, tf.y), tf.z);
				if (bb > max(a, 0.0) && a > 0.0) return 0.0;
			}
		}
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${at(vo)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${at(qe)}) return 0.0;
			vec3 h1 = p + S * ((${at(-xr)} - p.x) / S.x);
			vec3 hm = p + S * ((${at(-xr*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${at(vo)}) {
			if (he.z < 0.0 || he.z > ${at(qe)} || he.x < 0.0 || he.x > ${at(Vt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${Ll.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${at(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${lc.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${at(n)}, he.x, he.z, ${at(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${at(d0)} * p.x - p.y + ${at(vo)}) / (S.y - ${at(d0)} * S.x);
		float tr = (${at(d0)} * (${at(Vt)} - p.x) - p.y + ${at(vo)}) / (S.y + ${at(d0)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${at(Vt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${at(Vt/2-.01)} && hr.x <= ${at(Vt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${at(qe)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${at(Vo.rafter)} * floor(h.z / ${at(Vo.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${at(Vo.rafterW*.5)} - b, ${at(Vo.rafterW*.5)} + b, rz);
		float ux = h.x < ${at(Vt/2)} ? h.x : ${at(Vt)} - h.x;
		float rx = abs(ux - ${at(Vo.purlin)} * floor(ux / ${at(Vo.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${at(Vo.purlinW*.5)} - b, ${at(Vo.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${at(Vt/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${at(Vo.purlin)} * floor(ux / ${at(Vo.purlin)}) - ${at(Vo.purlin/2)}, h.z - ${at(Vo.rafter)} * floor(h.z / ${at(Vo.rafter)}) - ${at(Vo.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${lc.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${at(n)}, h.x, h.z, ${at(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${at(Vt/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function fc(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var gt={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30};function ad(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,n,r)=>(t.pos.push(e[0]+_e[0],e[1]+_e[1],e[2]+_e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.float?t.anchor.push(t.float[0]+_e[0],t.float[1]+_e[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),h=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),u=t.v(r,a,s,i&&i[3]);t.idx.push(c,h,l,c,l,u)},t.box=(e,o,n,r,a,s,i,c)=>{let h=c||{};h.top||t.quad([e,a,n],[e,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[e,n],[e,s],[r,s],[r,n]]),h.bottom||t.quad([e,o,n],[r,o,n],[r,o,s],[e,o,s],[0,-1,0],i,[[e,n],[r,n],[r,s],[e,s]]),h.x0||t.quad([e,o,n],[e,o,s],[e,a,s],[e,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),h.x1||t.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),h.z0||t.quad([r,o,n],[e,o,n],[e,a,n],[r,a,n],[0,0,-1],i,[[r,o],[e,o],[e,a],[r,a]]),h.z1||t.quad([e,o,s],[r,o,s],[r,a,s],[e,a,s],[0,0,1],i,[[e,o],[r,o],[r,a],[e,a]])},t.tbox=(e,o,n,r,a,s,i,c,h)=>{let l=Math.cos(n),u=Math.sin(n),d=Math.cos(h||0),p=Math.sin(h||0),f=(g,x,b)=>{let w=a+(x-a)*d-b*p*0,M=b+(x-a)*p,_=a+(x-a)*d;return[e+l*g+u*M,_,o-u*g+l*M]},v=g=>{let x=g[1]*d-g[2]*p,b=g[2]*d+g[1]*p;return[l*g[0]+u*b,x,-u*g[0]+l*b]},m=(g,x,b,w,M)=>t.quad(f(...g),f(...x),f(...b),f(...w),v(M),c,[[g[0]+g[2],g[1]],[x[0]+x[2],x[1]],[b[0]+b[2],b[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},t.beam=(e,o,n,r,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(f=>f/i),h=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],u=Math.hypot(...l);l=l.map(f=>f/u),h=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let d=(f,v,m)=>[f[0]+l[0]*n*v+h[0]*n*m,f[1]+l[1]*n*v+h[1]*n*m,f[2]+l[2]*n*v+h[2]*n*m],p=[[[1,-1],[1,1],l],[[1,1],[-1,1],h],[[-1,1],[-1,-1],l.map(f=>-f)],[[-1,-1],[1,-1],h.map(f=>-f)]];for(let[f,v,m]of p)t.quad(d(e,...f),d(o,...f),d(o,...v),d(e,...v),m,r,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,n,r,a)=>{let s=a||32,i=n.map(([c,h],l)=>{let u=n[Math.max(0,l-1)],d=n[Math.min(n.length-1,l+1)],p=d[0]-u[0],f=d[1]-u[1],v=Math.hypot(p,f)||1,m=f/v,g=-p/v,x=[];for(let b=0;b<=s;b++){let w=b/s*2*Mo;x.push(t.v([e+Math.cos(w)*c,h,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[b/s*c*2*Mo,h]))}return x});for(let c=0;c<i.length-1;c++)for(let h=0;h<s;h++){let l=i[c][h],u=i[c][h+1],d=i[c+1][h+1],p=i[c+1][h];t.idx.push(l,p,d,l,d,u)}},t}var cc=t=>Math.abs(t)>=fe.hw?null:fe.spring+Math.sqrt(fe.hw*fe.hw-t*t),lc=[["truss",Ll[0],3.1],["truss",Ll[1],5.4],["truss",Ll[2],7.7],["rafter",Vo.rafter*2,1.7],["rafter",Vo.rafter*5,8.5],["rafter",Vo.rafter*8,13.6],["rafter",Vo.rafter*10,17],["ridge",Vt/2,.9]],kh=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,xM=t=>t<Vt/2?vo+d0*t:vo+d0*(Vt-t);function Sh(t,e,o){return t==="truss"?[o,vo-.12,e]:t==="rafter"?[o,xM(o)-.2,e]:[e,u0-.32,o]}var Eh=t=>t==="ridge"?[.4,qe-.4]:[.35,Vt-.35],t0={w:1.72,spring:2.05,r:2.05,frame:.21,zl:qe-.05,zf:qe-.13};t0.c=t0.r-t0.w/2;var L0=(t,e)=>{let o=t0.r+(e||0),n=Math.abs(t)+t0.c;return n>=o?t0.spring:t0.spring+Math.sqrt(o*o-n*n)};t0.top=L0(0);function yM(t){let e=Vt/2,{w:o,frame:n,zl:r,zf:a}=t0,s=o/2,i=s+n,c=.02;for(let _=-i;_<i-1e-6;_+=c){let S=_,O=Math.min(i,_+c),N=(S+O)/2,G=L0(S,n),F=L0(O,n),j=0,D=0;Math.abs(N)<s&&(j=L0(S),D=L0(O)),Math.abs(N)>=s;{let B=Math.abs(N)<s?j:0,ut=Math.abs(N)<s?D:0;t.quad([e+O,ut,a],[e+S,B,a],[e+S,G,a],[e+O,F,a],[0,0,-1],gt.DARKWOOD,[[O,ut],[S,B],[S,G],[O,F]])}t.quad([e+S,G,a],[e+S,G,qe],[e+O,F,qe],[e+O,F,a],[0,1,0],gt.DARKWOOD,[[S,0],[S,1],[O,1],[O,0]]),Math.abs(N)<s&&t.quad([e+S,j,a],[e+O,D,a],[e+O,D,r],[e+S,j,r],[0,-1,0],gt.DARKWOOD,[[S,0],[O,0],[O,1],[S,1]])}for(let _ of[-1,1])t.quad([e+_*i,0,a],[e+_*i,0,qe],[e+_*i,t0.spring,qe],[e+_*i,t0.spring,a],[_,0,0],gt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+_*s,0,a],[e+_*s,t0.spring,a],[e+_*s,t0.spring,r],[e+_*s,0,r],[-_,0,0],gt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+_*(s+n/2)-n/2-.04,0,a-.04,e+_*(s+n/2)+n/2+.04,.42,qe,gt.DARKWOOD);let h=40;for(let _=0;_<h;_++){let S=-s+2*s*_/h,O=-s+2*s*(_+1)/h;t.beam([e+S,L0(S)+.03,a-.015],[e+O,L0(O)+.03,a-.015],.018,gt.DARKWOOD)}for(let _ of[-1,1])t.beam([e+_*(s+.03),.42,a-.015],[e+_*(s+.03),t0.spring+.02,a-.015],.018,gt.DARKWOOD);for(let _=-s;_<s-1e-6;_+=c){let S=_,O=Math.min(s,_+c),N=L0(S),G=L0(O);t.quad([e+O,0,r],[e+S,0,r],[e+S,N,r],[e+O,G,r],[0,0,-1],gt.REDDOOR,[[O,0],[S,0],[S,N],[O,G]])}let l=s-.2,u=.3,d=2.12,p=r-.006,f=.05,v=(_,S,O,N)=>t.box(e+_,S,p-.018,e+O,N,p,gt.REDDOOR);v(-l,u,l,u+f),v(-l,d-f,l,d),v(-l,u,-l+f,d),v(l-f,u,l,d),t.box(e-l+.14,u+.14,p-.022,e+l-.14,d-.14,p,gt.REDDOOR);let m=2.36;v(-s+.08,d+.06,s-.08,d+.12);for(let _ of[-1,1]){let O=s-.17;for(let N=.07;N<O-1e-6;N+=c){let G=N,F=Math.min(O,N+c),j=L0(G,-.18),D=L0(F,-.18);if(j<=m+.02&&D<=m+.02)continue;let B=Rt=>e+_*Rt,ut=[[B(G),m,p+.004],[B(F),m,p+.004],[B(F),Math.max(m,D),p+.004],[B(G),Math.max(m,j),p+.004]];_>0?t.quad(ut[1],ut[0],ut[3],ut[2],[0,0,-1],gt.REDPANEL,[[F,0],[G,0],[G,1],[F,1]]):t.quad(...ut,[0,0,-1],gt.REDPANEL,[[G,0],[F,0],[F,1],[G,1]])}}t.beam([e,m-.02,p-.008],[e,L0(0,-.12),p-.008],.03,gt.REDDOOR),t.beam([e-s+.1,m-.01,p-.006],[e+s-.1,m-.01,p-.006],.014,gt.REDDOOR);let g=e-s+.15,x=1.06,b=p-.03;t.box(g-.034,x-.2,b-.008,g+.034,x+.17,b+.012,gt.BRASS);for(let[_,S]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(g,b-.002,[[0,_-S],[S,_-S*.4],[S,_+S*.4],[0,_+S]],gt.BRASS,12);for(let _=0;_<6;_++){let S=x-.17+_*.065;for(let O of[-1,1])t.beam([g+O*.034,S,b-.01],[g+O*.041,S+.03,b-.01],.006,gt.BRASS)}let w=b-.008,M=(_,S,O)=>{for(let N=0;N<O;N++){let G=Mo*N/O,F=Mo*(N+1)/O;for(let j=0;j<16;j++){let D=2*Mo*j/16,B=2*Mo*(j+1)/16,ut=(xe,he)=>[g+S*Math.sin(xe)*Math.cos(he),x+.03+S*Math.sin(xe)*Math.sin(he),_-S*Math.cos(xe)],Rt=(xe,he)=>[Math.sin(xe)*Math.cos(he),Math.sin(xe)*Math.sin(he),-Math.cos(xe)],Nt=t.v(ut(G,D),Rt(G,D),gt.BRASS),bt=t.v(ut(G,B),Rt(G,B),gt.BRASS),rt=t.v(ut(F,B),Rt(F,B),gt.BRASS),qt=t.v(ut(F,D),Rt(F,D),gt.BRASS);t.idx.push(Nt,bt,rt,Nt,rt,qt)}}};t.beam([g,x+.03,w],[g,x+.03,w-.05],.011,gt.BRASS),M(w-.075,.034,10),t.box(g-.008,x-.1,b-.0125,g+.008,x-.06,b-.0085,gt.KEYHOLE)}function bM(t,e){let o=t.pos.length/3;for(let n=0;n<e.pos.length;n+=3){let r=e.pos[n]-_e[0],a=e.pos[n+2]-_e[2];t.pos.push(Vt-r+_e[0],e.pos[n+1],qe-a+_e[2]),t.nrm.push(-e.nrm[n],e.nrm[n+1],-e.nrm[n+2])}t.kind.push(...e.kind),t.uv.push(...e.uv),t.anchor.push(...e.anchor);for(let n of e.idx)t.idx.push(n+o)}function wM(t){let{cx:e,hw:o,spring:n,pier:r,face:a,back:s,floor:i,x0:c,x1:h}=Ko,l=gt.OLDSTONE,u=gt.HOLLOW,d=s-o,p=5.35,f=m=>n+Math.sqrt(Math.max(0,o*o-(m-e)*(m-e)));t.box(c-.1,0,a-.28,h+.1,i-.06,qe,l,{bottom:!0}),t.box(c-.14,i-.06,a-.34,h+.14,i,qe,l),t.box(e-.95,dt.top,a-.62,e+.95,dt.top+.15,a-.28,l,{bottom:!0});for(let[m,g]of[[c,e-o],[e+o,h]]){t.box(m,i,a+.03,g,p,qe,u,{bottom:!0});let x=m<e?m:g,b=m<e?g:m,w=m<e?1:-1,M=11,_=(p-.38-i)/M;for(let S=0;S<M;S++){let O=i+S*_+.018,N=i+(S+1)*_-.018,G=S%2===0,F=x+w*.01,j=G?b-w*.01:x+w*(r*.66);if(t.box(Math.min(F,j),O,a-.06,Math.max(F,j),N,a+.03,l,{z1:!0}),!G){let B=x+w*(r*.66+.025),ut=b-w*.01;t.box(Math.min(B,ut),O,a-.02,Math.max(B,ut),N,a+.03,l,{z1:!0})}let D=x-w*.035;t.box(Math.min(D,x+w*.02),O,a-.035,Math.max(D,x+w*.02),N,G?a+.9:a+.55,l)}t.box(m-.05,p-.38,a-.07,g+.05,p-.3,qe,l),t.box(m-.02,p-.3,a-.03,g+.02,p-.12,qe,l),t.box(m-.09,p-.12,a-.11,g+.09,p,qe,l)}let v=.03;for(let m=e-o;m<e+o-1e-6;m+=v){let g=m,x=Math.min(e+o,m+v);t.quad([x,f(x),a+.02],[g,f(g),a+.02],[g,p,a+.02],[x,p,a+.02],[0,0,-1],l,[[x,f(x)],[g,f(g)],[g,p],[x,p]])}{let g=o+.07;for(let b=0;b<36;b++){let w=Mo*b/36,M=Mo*(b+1)/36;t.beam([e+Math.cos(w)*g,n+Math.sin(w)*g,a-.02],[e+Math.cos(M)*g,n+Math.sin(M)*g,a-.02],.065,l,[0,0,1])}for(let b of[-1,1])t.box(e+b*o-.16,n-.14,a-.06,e+b*o+.16,n,a+.4,l);let x=n+o;t.quad([e-.17,x+.32,a-.08],[e+.17,x+.32,a-.08],[e+.11,x-.06,a-.08],[e-.11,x-.06,a-.08],[0,0,-1],l,[[0,1],[1,1],[1,0],[0,0]]);for(let b of[-1,1])t.quad([e+b*.11,x-.06,a-.08],[e+b*.17,x+.32,a-.08],[e+b*.17,x+.32,a+.02],[e+b*.11,x-.06,a+.02],[b,-.15,0],l,[[0,0],[1,0],[1,1],[0,1]]);t.quad([e-.11,x-.06,a-.08],[e+.11,x-.06,a-.08],[e+.11,x-.06,a+.02],[e-.11,x-.06,a+.02],[0,-1,0],l,[[0,0],[1,0],[1,1],[0,1]])}for(let m of[-1,1]){let g=e+m*o;t.quad([g,i,a],[g,i,d],[g,n,d],[g,n,a],[-m,0,0],u,[[a,i],[d,i],[d,n],[a,n]])}{for(let b=0;b<40;b++){let w=Mo*b/40,M=Mo*(b+1)/40,_=(O,N)=>[e+Math.cos(O)*o,n+Math.sin(O)*o,N],S=[-Math.cos((w+M)/2),-Math.sin((w+M)/2),0];t.quad(_(w,a),_(M,a),_(M,d),_(w,d),S,u,[[o*w+0,a],[o*M,a],[o*M,d],[o*w,d]])}for(let b=0;b<40;b++){let w=Mo*b/40,M=Mo*(b+1)/40,_=(j,D)=>[e+Math.cos(j)*o,D,d+Math.sin(j)*o],S=j=>[-Math.cos(j),0,-Math.sin(j)],O=t.v(_(w,i),S(w),u,[o*w,i]),N=t.v(_(M,i),S(M),u,[o*M,i]),G=t.v(_(M,n),S(M),u,[o*M,n]),F=t.v(_(w,n),S(w),u,[o*w,n]);t.idx.push(O,N,G,O,G,F)}let x=[];for(let b=0;b<=14;b++){let w=Mo/2*b/14,M=[];for(let _=0;_<=40;_++){let S=Mo*_/40,O=[Math.cos(S)*Math.cos(w),Math.sin(w),Math.sin(S)*Math.cos(w)];M.push(t.v([e+o*O[0],n+o*O[1],d+o*O[2]],O.map(N=>-N),u,[o*S,n+o*w]))}x.push(M)}for(let b=0;b<14;b++)for(let w=0;w<40;w++){let M=x[b][w],_=x[b][w+1],S=x[b+1][w+1],O=x[b+1][w];t.idx.push(M,_,S,M,S,O)}t.box(e-o,i-.02,a-.02,e+o,i,s,u,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(rn.x-.6,i,rn.z-.55,rn.x+.6,rn.plinth-.05,rn.z+.5,l,{bottom:!0}),t.box(rn.x-.64,rn.plinth-.05,rn.z-.59,rn.x+.64,rn.plinth,rn.z+.54,l),t.box(c-.06,p,a-.08,h+.06,p+.32,qe,l),t.box(c-.02,p+.32,a-.02,h+.02,p+.78,qe,l),t.box(c-.12,p+.78,a-.16,h+.12,p+.86,qe,l),t.box(c-.2,p+.86,a-.26,h+.2,p+1.02,qe,l);{let m=p+.55,g=.34,x=.2,b=28,w=[];for(let M=0;M<=4;M++){let _=M/4,S=[];for(let O=0;O<=b;O++){let N=2*Mo*O/b,G=.09*Math.sqrt(Math.max(0,1-_*_))+.01;S.push(t.v([e+Math.cos(N)*g*_,m+Math.sin(N)*x*_,a-.02-G],[Math.cos(N)*_*.6,Math.sin(N)*_*.6,-1],l,[Math.cos(N)*_,Math.sin(N)*_]))}w.push(S)}for(let M=0;M<4;M++)for(let _=0;_<b;_++){let S=w[M][_],O=w[M][_+1],N=w[M+1][_+1],G=w[M+1][_];t.idx.push(S,G,N,S,N,O)}for(let M=0;M<b;M++){let _=2*Mo*M/b,S=2*Mo*(M+1)/b;t.beam([e+Math.cos(_)*(g+.03),m+Math.sin(_)*(x+.03),a-.04],[e+Math.cos(S)*(g+.03),m+Math.sin(S)*(x+.03),a-.04],.025,l,[0,0,1])}for(let M of[-1,1])for(let _=0;_<14;_++){let S=1.8*Mo*_/14,O=1.8*Mo*(_+1)/14,N=.1*(1-_/16),G=.1*(1-(_+1)/16),F=e+M*(g+.16),j=m;t.beam([F+M*Math.cos(S)*N,j+Math.sin(S)*N,a-.04],[F+M*Math.cos(O)*G,j+Math.sin(O)*G,a-.04],.018,l,[0,0,1])}}{let m=p+1.02,g=.62,x=(h-c)/2+.2,b=a-.2,w=_=>m+g*(1-Math.abs(_-e)/x);for(let _=e-x;_<e+x-1e-6;_+=.1){let S=_,O=Math.min(e+x,_+.1);t.quad([O,m,b],[S,m,b],[S,w(S),b],[O,w(O),b],[0,0,-1],l,[[O,m],[S,m],[S,w(S)],[O,w(O)]])}let M=Math.hypot(x,g);for(let _ of[-1,1]){let S=[_*g/M,x/M,0],O=e+_*(x+.06);t.quad([e,m+g+.06,b-.06],[O,m-.02,b-.06],[O,m-.02,qe],[e,m+g+.06,qe],S,l,[[0,b],[M,b],[M,qe],[0,qe]]),t.quad([e,m+g+.06,b-.06],[e,m+g-.06,b-.06],[O,m-.12,b-.06],[O,m-.02,b-.06],[0,0,-1],l,[[0,1],[0,0],[M,0],[M,1]])}}}function _M(t){let e=fc(77);for(let[o,n,r]of lc){let[a,s]=Eh(o);for(let i=0;i<2;i++){let c=null;for(let h=a;h<=s;h+=.18){let l=Sh(o,n,h),u=Math.sin(h*3.1+i*2+r)*.07,d=Math.cos(h*2.3+i+r)*.05,p=o==="ridge"?[l[0]+u,l[1]+d+.12,l[2]]:[l[0],l[1]+d+.12,l[2]+u];c&&(kh(h,r)||e()<.5)&&t.beam(c,p,.012+.008*e(),gt.WOOD),c=p}}}}function MM(t){let e=fc(4242),o=(r,a)=>!(r>dt.x0-dt.curb-.1&&r<dt.x1+dt.curb+.1&&a>dt.z0-dt.curb-.1&&a<dt.z1+dt.curb+.1)&&r>.2&&r<Vt-.2&&a>.3&&a<qe-.4,n=(r,a,s,i)=>{let c=.022+e()*.022,h=e()*2*Mo,l=Math.cos(h),u=Math.sin(h),d=(f,v)=>[r+(f*l-v*u)*c,a+.004*f*v,s+(f*u+v*l)*c],p=i?2:0;t.quad(d(-1,-1),d(-1,1),d(1,1),d(1,-1),[0,1,0],gt.BRACT,[[p,0],[p,1],[p+1,1],[p+1,0]])};for(let[r,a,s]of lc){let[i,c]=Eh(r);for(let h=i;h<=c;h+=.05){if(!kh(h,s)||e()>.55)continue;let l=Sh(r,a,h),u=l[0]+(e()-.5)*1.8,d=l[2]+(e()-.5)*1.8;o(u,d)&&n(u,.004,d,e()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(e()*4),s,i;a<2?(s=a?dt.x1+dt.curb+.12+e()*e()*.9:dt.x0-dt.curb-.12-e()*e()*.9,i=dt.z0+e()*(dt.z1-dt.z0)):(i=a===2?dt.z0-dt.curb-.12-e()*e()*.9:dt.z1+dt.curb+.12+e()*e()*.9,s=dt.x0+e()*(dt.x1-dt.x0)),o(s,i)&&n(s,.004,i,e()<.18)}for(let r=0;r<70;r++){let a=dt.x0+.08+e()*(dt.x1-dt.x0-.16),s=dt.z0+.08+e()*(dt.z1-dt.z0-.16);Math.hypot(a-rn.x,s-rn.z)<.6||(t.float=[a,s,a*5.1+s*2.9],n(a,.016,s,e()<.2),t.float=null)}}function kM(t,e,o){let n=(r,a,s,i,c)=>{let h=t.pos.length/3,l=Math.cos(s),u=Math.sin(s),d=Math.cos(i),p=Math.sin(i),f=[l,0,-u],v=[u*p,d,l*p],m=[f[1]*v[2]-f[2]*v[1],f[2]*v[0]-f[0]*v[2],f[0]*v[1]-f[1]*v[0]],g=c?.95:o()*.8;for(let[x,b]of[[0,0],[1,0],[1,1],[0,1]]){let w=(x-.5)*a,M=(b-.5)*a;t.pos.push(r[0]+f[0]*w+v[0]*M+_e[0],r[1]+f[1]*w+v[1]*M+_e[1],r[2]+f[2]*w+v[2]*M+_e[2]),t.nrm.push(...m),t.uv.push(x,b),t.shade.push(g),t.flower.push(1)}t.idx.push(h,h+1,h+2,h,h+2,h+3)};for(let[r,a,s]of lc){let[i,c]=Eh(r);for(let h=i;h<=c;h+=.1){if(!kh(h,s))continue;let l=Sh(r,a,h),u=()=>(o()-.5)*.7,d=4+Math.floor(o()*4);for(let p=0;p<d;p++){let f=r==="ridge"?[l[0]+u(),l[1]-o()*.25,l[2]+u()*.4]:[l[0]+u()*.4,l[1]-o()*.25,l[2]+u()];n(f,.42+o()*.4,o()*2*Mo,(o()-.5)*2.4,o()<.16)}for(let p=0;p<5;p++){let f=o()*2*Mo;e([l[0]+u()*.6,l[1]-o()*.2,l[2]+u()*.6],[Math.cos(f),-.3-o()*.5,Math.sin(f)],[-Math.sin(f),0,Math.cos(f)],.08+o()*.06,.1)}if(o()<.22){let p=.5+o()*2,f=[l[0],l[1],l[2]],v=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<p;m+=.13){f=[f[0]+v[0],f[1]-.13,f[2]+v[1]];let g=(.3+o()*.22)*(1-.4*m/p);if(n([f[0]+(o()-.5)*.08,f[1],f[2]+(o()-.5)*.08],g,o()*2*Mo,(o()-.5)*.8,o()<.15),o()<.6){let x=o()*2*Mo;e([f[0],f[1],f[2]],[Math.cos(x),-.6,Math.sin(x)],[-Math.sin(x),0,Math.cos(x)],.05+o()*.04,.1)}}}}}}var Vg=(()=>{let t=fc(9001),e=[],o=[];for(let[r,a,s]of lc){let[i,c]=Eh(r);for(let h=i;h<=c;h+=.1)kh(h,s)&&o.push(Sh(r,a,h))}let n=o.filter(r=>r[0]>dt.x0-.6&&r[0]<dt.x1+.6&&r[2]>dt.z0&&r[2]<dt.z1);for(let r=0;r<64;r++){let a=r%2===0&&n.length?n:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),es=[dt.x0+.06,dt.z0+.06,dt.x1-.06,dt.z1-.06];function SM(t,e){let o=e+t.offset,n=Math.floor(o/t.period),r=o-n*t.period,a=.6+.4*Math.sin(n*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>es[0]&&s<es[2]&&i>es[1]&&i<es[3],h=c?.017:.006,l=(t.start[1]-h)/t.speed;return{ph:r,Tf:l,lx:s,lz:i,inPool:c}}var W0=[{at:[Vt/2-.8,Dn(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[Vt/2+.9,Dn(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[Vt/2-.3,Dn(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[Vt/2+1,Dn(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[Vt/2-1.1,Dn(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[Vt/2+.4,Dn(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[Vt/2-.9,Dn(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[Vt/2+1.1,Dn(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],js=[dt.x0+.5,dt.z0+.5,dt.x1-.5,dt.z1-.55],zl=[dt.x0+.25,dt.z0+.25,dt.x1-.25,dt.z1-.3],Tl=12,Al=-.36,sd=[];function EM(){let t=u=>{let d=Math.sin(u*12.9898+78.233)*43758.5453;return d-Math.floor(d)},e=W0.map((u,d)=>({k:u,i:d,x:u.at[0],z:u.at[1],th:u.dir,w:0,v:.08,y:-.17,ph:d*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:d%2===0,modeT:t(d*3.1)*3,aim:u.dir,nextAim:t(d*7.7)*5,yAim:-.17,nextY:t(d*5.9)*8,gx:u.at[0],gz:u.at[1],nextSip:u.first,sipT:-1,bite:0,notice:0})),o=[],n=[];for(let u=0;u<Tl;u++)n.push({x:0,z:0,alive:0,born:0,seed:u*.37});let r={on:!1,x:0,z:0,t0:0},a=0,s=0,i=u=>Math.atan2(Math.sin(u),Math.cos(u)),c=()=>t(++s*1.618+a*.37);return{fish:e,events:o,crumbs:n,feed:r,drop:(u,d)=>{u=Math.max(zl[0],Math.min(zl[2],u)),d=Math.max(zl[1],Math.min(zl[3],d)),Object.assign(r,{on:!0,x:u,z:d,t0:a}),n.forEach((p,f)=>{let v=t(a+f)*Math.PI*2,m=.04+.16*Math.sqrt(t(a*1.7+f*3.1));Object.assign(p,{x:u+Math.cos(v)*m,z:d+Math.sin(v)*m,alive:1,born:a+t(f*5.3+a)*.35})}),o.push([u,d,a,1]);for(let p of e)p.notice=a+.3+Math.hypot(p.x-u,p.z-d)*.35+t(p.i*9.1+a)*.7},step:u=>{a+=u;let d=a,p=0;for(let f of n)!f.alive||d<f.born||(p++,f.x+=Math.sin(d*.7+f.seed*11)*.004*u,f.z+=Math.cos(d*.6+f.seed*7)*.004*u);if(r.on&&(p===0&&d>r.t0+1||d>r.t0+40)){r.on=!1;for(let f of n)f.alive=0}for(let f of e){let{k:v}=f,m=v.len,g=r.on&&d>f.notice;(d>f.nextAim||Math.hypot(f.gx-f.x,f.gz-f.z)<.7)&&(f.gx=js[0]+c()*(js[2]-js[0]),f.gz=js[1]+c()*(js[3]-js[1]),f.nextAim=d+12+c()*14),f.aim=Math.atan2(f.gz-f.z,f.gx-f.x)+.35*Math.sin(d*.21+f.i*1.7);let x=f.aim,b=.7,w=null;if(g){let rt=1e9;for(let he of n){if(!he.alive||d<he.born)continue;let De=Math.hypot(he.x-f.x,he.z-f.z)+.1*Math.sin(f.i*3.3+he.seed*9);De<rt&&(rt=De,w=he)}let qt=w?w.x:r.x,xe=w?w.z:r.z;x=Math.atan2(xe-f.z,qt-f.x),f.aim=x,b=1.8}let M=.6+m*.8+f.v*2,_=g?zl:js,S=0;for(let rt of[0,.5,-.5]){let qt=f.x+Math.cos(f.th+rt)*M,xe=f.z+Math.sin(f.th+rt)*M;S=Math.max(S,Math.max(_[0]-qt,qt-_[2],_[1]-xe,xe-_[3],0))}if(S>0){let rt=(_[0]+_[2])/2,qt=(_[1]+_[3])/2+Math.sin(f.i*2.3)*1.5,xe=Math.atan2(qt-f.z,rt-f.x),he=Math.min(1,S*2.2);x=f.th+i(xe-f.th)*he+i(x-f.th)*(1-he),g||(f.aim=x),b=Math.max(b,.6+he*.8)}let O=0;for(let rt of e){if(rt===f)continue;let qt=rt.x-f.x,xe=rt.z-f.z,he=Math.hypot(qt,xe),De=(g?.4:1)*(m+rt.k.len)/2+.2;if(he<De&&Math.abs(rt.y-f.y)<.14){let Ae=i(Math.atan2(xe,qt)-f.th);(Math.abs(Ae)<1.6||he<De*.5)&&(O-=Math.sign(Ae||1)*(De-he)/De*(Math.abs(Ae)<1.6?1:.6))}}let N=i(x-f.th)+O*(g?.4:2);f.modeT-=u,g?(f.stroking=!0,f.modeT=Math.max(f.modeT,.4)):f.modeT<=0&&(f.stroking=!f.stroking,f.modeT=f.stroking?1.2+c()*1.6:1.6+c()*3.2),!f.stroking&&(Math.abs(N)>.9||f.v<.035)&&(f.stroking=!0,f.modeT=1+c()*.8),!g&&f.sipT<0&&d>f.nextSip&&(f.sipT=0,f.nextSip=d+v.sip*(.7+.6*c()));let G=0;if(f.sipT>=0){let rt=f.sipT;f.sipT+=u,G=Math.min(1,rt/1.6)*(1-Math.max(0,Math.min(1,(rt-2.6)/1.6))),rt<1.7&&f.sipT>=1.7&&o.push([f.x+Math.cos(f.th)*.03,f.z+Math.sin(f.th)*.03,d,.9]),rt<2.4&&f.sipT>=2.4&&o.push([f.x,f.z,d,.55]),(f.sipT>4.2||g)&&(f.sipT=-1)}let F=(f.stroking?g?2.4:1:0)*(1-.6*G);f.thrust+=(F-f.thrust)*Math.min(u*3,1);let j=g?.9:.55;f.v+=(f.thrust*.085*(.7+.4*m)-j*f.v)*u,f.v=Math.max(f.v,.008);let D=.35+.65*Math.min(1,f.thrust),B=Math.max(-b,Math.min(b,N*1.3))*D;f.w+=(B-f.w)*Math.min(u*2.2,1),f.th+=f.w*u,d>f.nextY&&(f.yAim=-(.13+c()*.1),f.nextY=d+6+c()*10);let ut=f.yAim;if(G>0&&(ut+=(-.045-ut)*G),g){let rt=w?w.x:r.x,qt=w?w.z:r.z,xe=1-Math.min(1,Math.max(0,(Math.hypot(rt-f.x,qt-f.z)-.15)/.9));if(ut+=(-.04-ut)*xe,w&&d>f.bite&&f.y>-.08){let he=f.x+Math.cos(f.th)*.02,De=f.z+Math.sin(f.th)*.02;Math.hypot(w.x-he,w.z-De)<.09&&(w.alive=0,f.bite=d+1.3,o.push([w.x,w.z,d,.75]))}}f.x+=Math.cos(f.th)*f.v*u,f.z+=Math.sin(f.th)*f.v*u,f.x=Math.max(dt.x0+.15,Math.min(dt.x1-.15,f.x)),f.z=Math.max(dt.z0+.15,Math.min(dt.z1-.15,f.z));let Rt=(ut-f.y)*Math.min(u*(g?2:.8),1);f.y+=Rt,f.pitch+=(Math.max(-.4,Math.min(.4,Rt/u/Math.max(f.v,.06)))-f.pitch)*Math.min(u*2.5,1);let Nt=Math.max(-1/m,Math.min(1/m,f.w/Math.max(f.v,.1)));f.kappa+=(Nt-f.kappa)*Math.min(u*4,1);let bt=.12+.88*Math.min(1.4,f.thrust)+.4*Math.min(1,Math.abs(f.w));f.amp+=(bt-f.amp)*Math.min(u*2,1),f.ph+=u*(2+5.5*Math.min(1.6,f.thrust))*(.75+.35/Math.sqrt(m))}for(;o.length&&d-o[0][2]>10;)o.shift()},get t(){return a}}}function zM(){let t=ad();{let e=dt.x0-dt.curb,o=dt.x1+dt.curb,n=dt.z0-dt.curb,r=dt.z1+dt.curb,a=[[0,0,Vt,n],[0,r,Vt,qe],[0,n,e,r],[o,n,Vt,r]];for(let[s,i,c,h]of a)for(let u=s;u<c-1e-6;u+=1)for(let d=i;d<h-1e-6;d+=1){let p=u,f=Math.min(c,u+1),v=d,m=Math.min(h,d+1);t.quad([p,0,v],[p,0,m],[f,0,m],[f,0,v],[0,1,0],gt.FLOOR,[[p,v],[p,m],[f,m],[f,v]])}}for(let e of[0,1]){let o=e?Vt:0,n=e?Vt+xr:-xr,r=e?[-1,0,0]:[1,0,0],a=.04;for(let m=0;m<qe-1e-6;m+=a){let g=m,x=Math.min(qe,m+a),b=(g+x)/2,w=null;if(!e)for(let _ of fe.c)cc(b-_)!==null&&(w=[fe.sill,Math.min(cc(g-_)||fe.spring,cc(x-_)||fe.spring)]);let M=w?[[0,w[0]],[w[1],vo]]:[[0,vo]];for(let[_,S]of M)S<=_||(e?t.quad([o,_,x],[o,_,g],[o,S,g],[o,S,x],r,gt.ROCK,[[x,_],[g,_],[g,S],[x,S]]):t.quad([o,_,g],[o,_,x],[o,S,x],[o,S,g],r,gt.PLASTER,[[g,_],[x,_],[x,S],[g,S]]))}if(!e)for(let m of fe.c){for(let w of[-1,1]){let M=m+w*fe.hw,_=[0,0,-w],S=[o,fe.sill,M],O=[n,fe.sill,M],N=[n,fe.spring,M],G=[o,fe.spring,M];w>0!=!!e?t.quad(S,O,N,G,_,gt.PLASTER,[[0,fe.sill],[xr,fe.sill],[xr,fe.spring],[0,fe.spring]]):t.quad(G,N,O,S,_,gt.PLASTER,[[0,fe.spring],[xr,fe.spring],[xr,fe.sill],[0,fe.sill]])}let g=28;for(let w=0;w<g;w++){let M=w/g*Mo,_=(w+1)/g*Mo,S=m+Math.cos(M)*fe.hw,O=m+Math.cos(_)*fe.hw,N=fe.spring+Math.sin(M)*fe.hw,G=fe.spring+Math.sin(_)*fe.hw,F=[0,-Math.sin((M+_)/2),-Math.cos((M+_)/2)];e?t.quad([o,N,S],[n,N,S],[n,G,O],[o,G,O],F,gt.PLASTER,[[0,M],[xr,M],[xr,_],[0,_]]):t.quad([o,G,O],[n,G,O],[n,N,S],[o,N,S],F,gt.PLASTER,[[0,_],[xr,_],[xr,M],[0,M]])}let x=e?Vt-.08:-xr,b=e?Vt+xr:.08;t.box(x,fe.sill-.09,m-fe.hw-.12,b,fe.sill,m+fe.hw+.12,gt.STONE)}let s=e?Vt:0,i=e?-1:1,c=[.6,...fe.c.slice(1).map((m,g)=>(m+fe.c[g])/2),qe-.6];if(!e)for(let m of c){let g=Math.min(s,s+i*.14),x=Math.max(s,s+i*.14);t.box(g,0,m-.34,x,vo-.7,m+.34,gt.STONE,{bottom:!0});let b=Math.min(s,s+i*.24),w=Math.max(s,s+i*.24);t.box(b,0,m-.44,w,.55,m+.44,gt.STONE,{bottom:!0}),t.box(b,vo-.95,m-.46,w,vo-.7,m+.46,gt.STONE)}let h=Math.min(s,s+i*.05),l=Math.max(s,s+i*.05);e||t.box(h,0,0,l,.22,qe,gt.STONE,{bottom:!0});let u=e?gt.OLDSTONE:gt.STONE,d=Math.min(s,s+i*.32),p=Math.max(s,s+i*.32);t.box(d,vo-.55,0,p,vo-.3,qe,u);let f=Math.min(s,s+i*.42),v=Math.max(s,s+i*.42);t.box(f,vo-.3,0,v,vo-.12,qe,u)}for(let[e,o]of[[0,1],[qe,-1]]){for(let s=0;s<32;s++){let i=s/32*Vt,c=(s+1)/32*Vt,h=u=>u<Vt/2?vo+d0*u:vo+d0*(Vt-u),l=o>0?[[c,0],[i,0],[i,h(i)],[c,h(c)]]:[[i,0],[c,0],[c,h(c)],[i,h(i)]];t.quad(...l.map(([u,d])=>[u,d,e]),[0,0,o],gt.ROCK,l.map(([u,d])=>[u,d]))}let r=o>0?0:qe-.32,a=o>0?.32:qe;t.box(0,vo-.55,r,Vt,vo-.3,a,gt.OLDSTONE)}{let e=ad();yM(e),bM(t,e)}wM(t);{let{x0:e,x1:o,z0:n,z1:r,curb:a,top:s}=dt,i=.06,c=.08;t.box(e-a,0,n-a,e,s-c,r+a,gt.OLDSTONE,{bottom:!0}),t.box(o,0,n-a,o+a,s-c,r+a,gt.OLDSTONE,{bottom:!0}),t.box(e,0,n-a,o,s-c,n,gt.OLDSTONE,{bottom:!0}),t.box(e,0,r,o,s-c,r+a,gt.OLDSTONE,{bottom:!0}),t.box(e-a-i,s-c,n-a-i,e+i*.5,s,r+a+i,gt.OLDSTONE),t.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,gt.OLDSTONE),t.box(e+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,gt.OLDSTONE),t.box(e+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,gt.OLDSTONE);let h=.5;for(let l=e;l<o-1e-6;l+=h)for(let u=n;u<r-1e-6;u+=h){let d=l,p=Math.min(o,l+h),f=u,v=Math.min(r,u+h);t.quad([d,0,f],[d,0,v],[p,0,v],[p,0,f],[0,1,0],gt.WATER,[[d,f],[d,v],[p,v],[p,f]])}}return t}function AM(t){for(let o of[0]){let n=o?Vt+xr*.5:-xr*.5,r=.05,a=Hr.w*.5;for(let s of fe.c){for(let i of Hr.cols){let c=cc(i)-.01;t.box(n-r,fe.sill,s+i-a,n+r,c,s+i+a,gt.STEEL)}for(let i=fe.sill+Hr.rowH;i<fe.spring+.01;i+=Hr.rowH)t.box(n-r,i-a,s-fe.hw,n+r,i+a,s+fe.hw,gt.STEEL);for(let[i,c]of[[fe.hw-.03,.06],[Hr.ring,a]])for(let l=0;l<24;l++){let u=l/24*Mo,d=(l+1)/24*Mo;t.beam([n,fe.spring+Math.sin(u)*i,s+Math.cos(u)*i],[n,fe.spring+Math.sin(d)*i,s+Math.cos(d)*i],c,gt.STEEL,[1,0,0])}for(let i of[-1,1])t.box(n-r,fe.sill,s+i*(fe.hw-.03)-.03,n+r,fe.spring,s+i*(fe.hw-.03)+.03,gt.STEEL);t.box(n-r,fe.sill,s-fe.hw,n+r,fe.sill+.06,s+fe.hw,gt.STEEL)}}let e=o=>o<Vt/2?vo+d0*o:vo+d0*(Vt-o);for(let o=0;o<=12;o++){let n=o*Vo.rafter;for(let[r,a]of[[-.3,Vt/2],[Vt/2,Vt+.3]])t.beam([r,e(Math.max(0,Math.min(Vt,r)))-.1,n],[a,e(a)-.1,n],.06,gt.STEEL)}for(let o=Vo.purlin;o<Vt/2-.2;o+=Vo.purlin)for(let n of[o,Vt-o])t.beam([n,e(n)-.06,-.2],[n,e(n)-.06,qe+.2],.035,gt.STEEL);t.beam([Vt/2,u0-.14,-.2],[Vt/2,u0-.14,qe+.2],.12,gt.STEEL);for(let o of[.05,Vt-.05])t.beam([o,vo-.05,0],[o,vo-.05,qe],.1,gt.STEEL);for(let o of Ll){t.box(-.05,vo-.13,o-.08,Vt+.05,vo+.13,o+.08,gt.STEEL),t.beam([Vt/2,vo,o],[Vt/2,u0-.2,o],.07,gt.STEEL);for(let n of[-1,1])t.beam([Vt/2+n*Vt/4,vo,o],[Vt/2,u0-.4,o],.055,gt.STEEL),t.beam([Vt/2+n*Vt/4,vo,o],[Vt/2+n*Vt/4,e(Vt/2+n*Vt/4)-.2,o],.045,gt.STEEL),t.beam([Vt/2+n*(Vt/2-.1),vo,o],[Vt/2+n*Vt/4,e(Vt/2+n*Vt/4)-.2,o],.045,gt.STEEL);for(let n of[-1,1])t.box(Vt/2+n*Vt/4-.12,vo-.18,o-.1,Vt/2+n*Vt/4+.12,vo+.18,o+.1,gt.STEEL)}}function TM(t){let e=fc(311),o=[],n=[[dt.x0+.9,Dn(6.6),.9,11],[dt.x1-.8,Dn(8.4),.85,10],[dt.x0+.8,Dn(10.6),.8,9],[dt.x1-.9,Dn(12.4),.9,11],[dt.x0+1,Dn(13.9),.65,7],[Vt/2+.2,Dn(9.6),.5,4],[dt.x1-.7,Dn(15.9),.6,6]];for(let[a,s,i,c]of n)for(let h=0;h<c;h++)for(let l=0;l<40;l++){let u=e()*2*Mo,d=i*Math.sqrt(e()),p=a+Math.cos(u)*d,f=s+Math.sin(u)*d,v=.15+e()*.17;if(!(p-v<dt.x0+.04||p+v>dt.x1-.04||f-v<dt.z0+.04||f+v>dt.z1-.04)&&!(Math.hypot(p-rn.x,f-rn.z)<.62+v)&&!o.some(m=>Math.hypot(m[0]-p,m[1]-f)<(m[2]+v)*.93)){o.push([p,f,v,e()*2*Mo,e()]);break}}for(let[a,s,i,c,h]of o){sd.push([a,s,i]),t.float=[a,s,h*7.3+i*13];let l=28,u=4,d=i*1.08,p=[];for(let f=0;f<=u;f++){let v=[];for(let m=0;m<l;m++){let g=m/l*2*Mo,x=f/u,b=g-c,w=.012+.004*(1-x*x)+.006*Math.pow(x,6)*(.5+.5*Math.sin(g*3+h*9));v.push(t.v([a+Math.cos(g)*d*x,w,s+Math.sin(g)*d*x],[0,1,0],gt.PAD,[.5+.5*x*Math.sin(b),.5+.5*x*Math.cos(b)]))}p.push(v)}for(let f=0;f<u;f++)for(let v=0;v<l;v++){let m=p[f][v],g=p[f][(v+1)%l],x=p[f+1][(v+1)%l],b=p[f+1][v];t.idx.push(m,g,x,m,x,b)}}t.float=null;let r=[[dt.x0+.75,Dn(6.9),1],[dt.x1-.65,Dn(8.1),.85],[dt.x1-.95,Dn(12.6),1.1],[dt.x0+.95,Dn(10.3),.8],[dt.x1-.55,Dn(15.6),.9],[dt.x0+1.05,Dn(13.7),.75]];for(let[a,s,i]of r){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,u,d],p)=>{for(let f=0;f<l;f++){let v=2*Mo*f/l+p*.33,m=(90-(90-d)*i)*Mo/180,g=6,x=4,b=[];for(let w=0;w<=g;w++){let M=w/g,_=(.18+.82*Math.sin(Mo*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*u*c,S=[];for(let O=0;O<=x;O++){let N=O/x*2-1,G=N*_,F=Math.abs(N)*Math.abs(N)*.12*u*c,j=M*u*c,D=j*Math.cos(m),B=j*Math.sin(m)+F,ut=a+Math.cos(v)*D-Math.sin(v)*G,Rt=s+Math.sin(v)*D+Math.cos(v)*G;S.push(t.v([ut,.03+B,Rt],[-Math.cos(v)*Math.sin(m)*.6,.8,-Math.sin(v)*Math.sin(m)*.6],gt.PETAL,[(p===2?.5:0)+.5*(.5+.5*N*.92),.98-M*.96]))}b.push(S)}for(let w=0;w<g;w++)for(let M=0;M<x;M++){let _=b[w][M],S=b[w][M+1],O=b[w+1][M+1],N=b[w+1][M];t.idx.push(_,S,O,_,O,N,_,O,S,_,N,O)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],gt.STAMEN,12)}t.float=null}function LM(t){let e=fc(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,gt.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,gt.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,gt.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,h=11.1+(e()-.5)*2.2,l=.035+e()*.04,u=.09+e()*.14;if(t.lathe(c,h,[[0,.86],[l,.86],[l*1.02,.86+u*.9],[l*.9,.86+u],[0,.86+u]],i%3?gt.JAR:gt.POT,14),i%3===0)for(let d=0;d<7;d++){let p=e()*2*Mo,f=.28+e()*.12,v=.12+e()*.2;t.beam([c,.86+.03,h],[c+Math.cos(p)*v*f,.86+.03+f,h+Math.sin(p)*v*f],.0055,gt.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,gt.WOOD)}for(let o=0;o<5;o++){let n=.55+e()*.6,r=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+r*Math.sin(i)*0,r,a];t.quad([s+.18,0,a-n/2],[s+.18,0,a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a-n/2],[Math.cos(i),Math.sin(i),0],o%2?gt.WOOD:gt.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of Zg)t.beam([o[0],vo,o[2]],[o[0],o[1]+.05,o[2]],.008,gt.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],gt.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],gt.BULB,12)}var Zg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],lA=[[dt.x0-1,dt.z0-1,1],[dt.x1+1,dt.z0-1,.95],[dt.x0-1,dt.z1+1,1.15],[dt.x1+1,dt.z1+1,1.1],[.9,1.3,1.25],[Vt-.9,qe-1.2,1.3]],Xg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function NM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=fc(1213),o=(n,r,a,s,i)=>{let c=Xg[Math.floor(e()*Xg.length)],h=(c[2]-c[0])/(c[3]-c[1]),l=s*h*1,u=5,d=t.pos.length/3,p=.6+e()*.4;for(let f=0;f<=u;f++){let v=f/u,m=i*v*v*s,g=[n[0]+r[0]*v*s,n[1]+r[1]*v*s-m,n[2]+r[2]*v*s];for(let x of[-.5,.5]){t.pos.push(g[0]+a[0]*x*l+_e[0],g[1]+a[1]*x*l-Math.abs(x)*.08*l+_e[1],g[2]+a[2]*x*l+_e[2]);let b=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...b)||1;t.nrm.push(b[0]/w,Math.abs(b[1]/w)+.2,b[2]/w),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*v),t.shade.push(p),t.flower.push(0)}}for(let f=0;f<u;f++){let v=d+f*2;t.idx.push(v,v+1,v+3,v,v+3,v+2)}};kM(t,o,e);for(let[n,r,a]of[[dt.x0-.3,dt.z0-.3,-1],[dt.x1+.3,dt.z1+.3,1],[dt.x0-.3,dt.z1+.2,-1]])for(let s=0;s<26;s++){let i=e()*2*Mo,c=n+(e()-.3)*.5*-a,h=r+(e()-.5)*.8,l=dt.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*e();o([c,Math.max(.05,l),h],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function RM(){let t=ad();for(let o of[0]){let n=o?Vt+xr*.5+.01:-xr*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of fe.c)for(let i=a-fe.hw;i<a+fe.hw-1e-6;i+=.05){let c=i,h=Math.min(a+fe.hw,i+.05),l=cc(c-a+1e-4)||fe.spring,u=cc(h-a-1e-4)||fe.spring;o?t.quad([n,fe.sill,h],[n,fe.sill,c],[n,l,c],[n,u,h],r,0,[[h,fe.sill],[c,fe.sill],[c,l],[h,u]]):t.quad([n,fe.sill,c],[n,fe.sill,h],[n,u,h],[n,l,c],r,0,[[c,fe.sill],[h,fe.sill],[h,u],[c,l]])}}let e=Math.hypot(d0,1);return t.quad([0,vo+.002,qe],[0,vo+.002,0],[Vt/2,u0+.002,0],[Vt/2,u0+.002,qe],[d0/e,-1/e,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,qe],[0,0],[Vt/2,0],[Vt/2,qe]]),t.quad([Vt,vo+.002,0],[Vt,vo+.002,qe],[Vt/2,u0+.002,qe],[Vt/2,u0+.002,0],[-d0/e,-1/e,0],1,[[Vt,0],[Vt,qe],[Vt/2,qe],[Vt/2,0]]),t}var OM=`
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
`,CM=Zg.map(t=>rd([t[0],t[1]-.22,t[2]])),Ja=`
	${OM}
	${Qg()}

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
		vec3 p = pw - vec3(${at(_e[0])}, ${at(_e[1])}, ${at(_e[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${at(vo)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${at(Vt)} - p.x), min(p.z, ${at(qe)} - p.z));
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
			${CM.map(t=>`
			{
				vec3 d = vec3(${at(t[0])}, ${at(t[1])}, ${at(t[2])}) - pw;
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
`;function PM(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let h=new Int8Array(t,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:h}}function Ta(t,e,o){let n=o&&o.wrap||"clamp",r=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:r,ready:!1};return fetch(e).then(s=>{if(!s.ok)throw new Error("Could not load "+e);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let h=new Image;h.onload=()=>i(h),h.onerror=c,h.src=URL.createObjectURL(s)}))).then(s=>{r({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:n}),a.ready=!0}).catch(s=>console.error(s)),a}var _h=128,Mh=Math.round((dt.z1-dt.z0)/(11/372)),Nl=(dt.x1-dt.x0)/_h,Jg=(dt.z1-dt.z0)/Mh,$M=.02,t3=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,ts=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${t3}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${_h-1}.0, ${Mh-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${_h}.0, ${Mh}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${at(dt.x0+_e[0])}, ${at(dt.z0+_e[2])})) / vec2(${at(Nl)}, ${at(Jg)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${at($M)};
#endif
		return h;
	}
`,Yg=`
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
	${ts}
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
	}`,IM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${ts}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${Ja}

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
		vec3 p = pw - vec3(${at(_e[0])}, ${at(_e[1])}, ${at(_e[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${gt.PETAL}.0)) N = -N;
		if (is(${gt.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${gt.FLOOR}.0) || is(${gt.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${gt.BRACT}.0)) {
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

		if (is(${gt.ROCK}.0)) {
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
			base *= mix(1.0, 0.84, smoothstep(${at(vo-2.2)}, ${at(vo)}, p.y));
			N = bumped(N, T, B, tn, 1.4);
			aoK = mix(0.42, 1.0, tn.b);
			gloss = 0.05;
		} else if (is(${gt.OLDSTONE}.0) || is(${gt.HOLLOW}.0)) {
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
			float low = 1.0 - smoothstep(0.0, ${at(dt.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${gt.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${at(Ko.floor)}, ${at(Ko.spring)}, p.y));
			}
			N = bumped(N, T, B, tn, 1.1);
			aoK = mix(0.5, 1.0, tn.b);
			gloss = 0.08;
		} else if (is(${gt.PLASTER}.0) || is(${gt.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${at(vo-2)}, ${at(vo)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${gt.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${gt.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${gt.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${gt.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${gt.FLOOR}.0)) {
			// the gallery's own floor: polished chequered marble, black and
			// dark cream, laid on the diagonal, with fine veins and hair-line
			// grout, the polish duller where people walk
			vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (p.xz - vec2(${at(Vt/2)}, 0.0));
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
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${at(Vt)} - p.x), min(p.z, ${at(qe)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${at(dt.x0-dt.curb)} - p.x, p.x - ${at(dt.x1+dt.curb)}), vec2(${at(dt.z0-dt.curb)} - p.z, p.z - ${at(dt.z1+dt.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${gt.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${gt.REDDOOR}.0) || is(${gt.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${gt.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${gt.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${gt.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${gt.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${gt.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${gt.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${gt.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${gt.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${gt.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${gt.MARBLE}.0)) {
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
			float foot = 1.0 - smoothstep(${at(rn.plinth)}, ${at(rn.plinth+.7)}, p.y);
			base = mix(base, base * vec3(0.55, 0.62, 0.48), foot * smoothstep(0.4, 0.7, fbm3(p * 6.0)));
			sss = 0.06;
			gloss = 0.14;
		} else if (is(${gt.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${gt.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${gt.PAINT}.0)) {
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
		} else if (is(${gt.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${gt.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${gt.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${gt.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${gt.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${gt.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${at(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${gt.CLOTH}.0)) {
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
		if (is(${gt.POT}.0) || is(${gt.STEEL}.0) || is(${gt.SHADE}.0) || is(${gt.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${gt.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${gt.REDDOOR}.0) || is(${gt.REDPANEL}.0) || is(${gt.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${gt.FLOOR}.0)) {
			// as polished as the gallery's: a clear reflection even looking
			// down, a mirror at grazing angles, more on the black tiles
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
			refl *= mix(0.72, 1.0, checker);
			refl *= gloss;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.4, 0.0, 0.45));
		}
		if (is(${gt.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${at(Nl)};
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
	}`;V0.exports=function(t){let e=zM();AM(e),TM(e),LM(e),_M(e),MM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),r={t:0},a=0,s=t._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=ft=>i?ft:`#define NO_SIM
`+ft,h=(()=>{let ft=_h,ct=Mh,Q=new Uint8Array(ft*ct*4);for(let mt=0;mt<ft*ct;mt++)Q[mt*4]=128,Q[mt*4+2]=128;let ye=()=>t.framebuffer({color:t.texture({width:ft,height:ct,data:Q,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),k=[ye(),ye()],Jt=0,Wt=new Uint8Array(ft*ct*4);for(let mt=0;mt<ct;mt++)for(let zt=0;zt<ft;zt++){let Et=dt.x0+(zt+.5)*Nl,Qt=dt.z0+(mt+.5)*Jg,oe=Math.abs(Et-rn.x)<.43&&Math.abs(Qt-rn.z)<.43,ee=0;for(let le of sd)ee=Math.max(ee,1-Math.min(1,Math.max(0,(Math.hypot(Et-le[0],Qt-le[1])-le[2]*.7)/(le[2]*.3))));let Bt=(mt*ft+zt)*4;Wt[Bt]=oe?0:255,Wt[Bt+1]=Math.round(ee*255),Wt[Bt+3]=255}let Te=t.texture({width:ft,height:ct,data:Wt,min:"nearest",mag:"nearest",wrap:"clamp"}),Re=16,eo=[];for(let mt=0;mt<Re;mt++)eo.push([0,0,0,.04]);let zo={prev:t.prop("prev"),mask:Te};for(let mt=0;mt<Re;mt++)zo["src["+mt+"]"]=(zt=>()=>eo[zt])(mt);let wo=Math.pow(.36*(1/60)/Nl,2),Xo=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${Re}];
			varying vec2 uv;
			${t3}
			void main() {
				vec2 px = 1.0 / vec2(${ft}.0, ${ct}.0);
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
				float hn = h + (h - hp) * damp + ${at(wo)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${at(dt.x0+_e[0])}, ${at(dt.z0+_e[2])}) + uv * vec2(${at(dt.x1-dt.x0)}, ${at(dt.z1-dt.z0)});
				for (int i = 0; i < ${Re}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:zo,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:ft,height:ct}}),gn=[],on=0,V=0;return{tex:()=>k[Jt].color[0],drop(mt,zt,Et,Qt){gn.push([mt,zt,on,Et,0,Qt||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([mt,zt,on,Et])},advance(mt,zt){let Et=mt-on-V;if(Et<0||Et>2){on=mt,V=0;return}V+=Et;let Qt=0;for(;V>=1/60&&Qt<8;){V-=1/60,on+=1/60,Qt++;let oe=0;for(let ee=gn.length-1;ee>=0;ee--){let Bt=gn[ee],le=on-Bt[2];if(le>1.4){gn.splice(ee,1);continue}if(oe>=Re)continue;let Ee=Bt[3]*.05*Math.sin(le*2*Math.PI*2.4)*Math.exp(-le*3.2),We=eo[oe++];We[0]=Bt[0],We[1]=Bt[1],We[2]=Ee,We[3]=Bt[5]}for(let ee of zt){if(oe>=Re)break;let Bt=eo[oe++];Bt[0]=ee[0],Bt[1]=ee[1],Bt[2]=ee[2],Bt[3]=ee[3]}for(;oe<Re;oe++)eo[oe][2]=0;Xo({prev:k[Jt].color[0],out:k[1-Jt]}),Jt=1-Jt}Qt===8&&(V=0,on=mt)},read(){return t.read({framebuffer:k[Jt]})}}})(),l=()=>{r.t=(performance.now()-n)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(r.t=window.__studioFreeze);for(let Q of Vg){let ye=SM(Q,r.t),k=ye.ph-ye.Tf;ye.inPool&&k>=0&&k<.5&&!(Q.heard>r.t-1)&&(Q.heard=r.t,h.drop(ye.lx+_e[0],ye.lz+_e[2],1.1,.04))}let ft=r.t-Rt.sim.t;for((ft<0||ft>120)&&(ft=Math.min(Math.max(ft,0),120));ft>1e-6;){let Q=Math.min(ft,.05);Rt.sim.step(Q),ft-=Q}for(let Q of Rt.sim.events)Q[2]>a&&(a=Q[2],h.drop(Q[0]+_e[0],Q[1]+_e[2],Q[3]*1.3,Q[3]>=1?.07:.04));let ct=[];for(let Q of Rt.sim.fish){let ye=Math.min(1,Math.max(0,(Q.y+.15)/.09));if(ye<=0)continue;let k=.008*ye*Math.min(1.5,Q.v/.15);ct.push([Q.x+_e[0]+Math.cos(Q.th)*.02,Q.z+_e[2]+Math.sin(Q.th)*.02,k,.045]),ct.push([Q.x+_e[0]-Math.cos(Q.th)*.14,Q.z+_e[2]-Math.sin(Q.th)*.14,-k,.055])}h.advance(r.t,ct)},u={stime:()=>r.t,simTex:()=>h.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=r,window.__pondSim=h);let d=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=[4,4],f=0,v=t({}),m=()=>v(ft=>{let ct=ft.viewportWidth,Q=ft.viewportHeight;d.width!==ct||d.height!==Q?d({copy:!0,width:ct,height:Q,min:"linear",mag:"linear",wrap:"clamp"}):d.subimage({copy:!0,width:ct,height:Q}),p[0]=ct,p[1]=Q,f=1}),g=Ta(t,"res/pond/lilypad.webp"),x=Ta(t,"res/pond/petals.webp"),b=Ta(t,"res/studio/rock_col.webp",{wrap:"repeat"}),w=Ta(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),M=Ta(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),_=Ta(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),S=Object.assign({padTex:()=>g.tex,petalTex:()=>x.tex,reflTex:()=>d,reflSize:()=>p,reflOn:()=>f,rockCol:()=>b.tex,rockNrm:()=>w.tex,oldCol:()=>M.tex,oldNrm:()=>_.tex},u),O=(ft,ct)=>t({vert:c(Yg),frag:IM,attributes:{position:ft.pos,normal:ft.nrm,kind:ft.kind,uv:ft.uv,anchor:ft.anchor&&ft.anchor.length?ft.anchor:new Float32Array(ft.pos.length/3*4)},elements:new Uint32Array(ft.idx),count:ct||ft.idx.length,uniforms:S,cull:{enable:!1},blend:o}),N=O(e),G=null;fetch(rn.file).then(ft=>{if(!ft.ok)throw new Error("Could not load "+rn.file);return ft.arrayBuffer()}).then(ft=>{let ct=PM(ft),Q={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},ye=rn.height,k=Math.cos(rn.yaw),Jt=Math.sin(rn.yaw);for(let Wt=0;Wt<ct.nV;Wt++){let Te=(ct.mn[0]+ct.pos[Wt*3]/65535*ct.sz[0])*ye,Re=(ct.mn[1]+ct.pos[Wt*3+1]/65535*ct.sz[1])*ye,eo=(ct.mn[2]+ct.pos[Wt*3+2]/65535*ct.sz[2])*ye;Q.pos.push(rn.x+k*Te+Jt*eo+_e[0],rn.plinth+Re+_e[1],rn.z-Jt*Te+k*eo+_e[2]);let zo=ct.nrm[Wt*3]/127,wo=ct.nrm[Wt*3+1]/127,Xo=ct.nrm[Wt*3+2]/127;Q.nrm.push(k*zo+Jt*Xo,wo,-Jt*zo+k*Xo),Q.kind.push(gt.MARBLE),Q.uv.push(0,0)}for(let Wt=0;Wt<ct.nI;Wt++)Q.idx.push(ct.idx[Wt]);G=O(Q)}).catch(ft=>console.error(ft));let F=Ta(t,"res/tree/leaves.webp"),j=NM(),D=t({vert:c(`
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
		${Ja}
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
		}`,attributes:{position:j.pos,normal:j.nrm,uv:j.uv,shade:j.shade,flower:j.flower},elements:new Uint32Array(j.idx),uniforms:{tex:F.tex},cull:{enable:!1}}),B=(()=>{let ft={corner:[],start:[],par:[],misc:[],idx:[]};return Vg.forEach((ct,Q)=>{for(let ye of[[-1,-1],[1,-1],[1,1],[-1,1]])ft.corner.push(ye[0],ye[1]),ft.start.push(ct.start[0]+_e[0],ct.start[1],ct.start[2]+_e[2]),ft.par.push(ct.period,ct.offset,ct.drift[0],ct.drift[1]),ft.misc.push(ct.speed,ct.seed,ct.white);ft.idx.push(Q*4,Q*4+1,Q*4+2,Q*4,Q*4+2,Q*4+3)}),ft})(),ut=t({vert:c(`
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
		${ts}
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
			vec2 lq = land - vec2(${at(_e[0])}, ${at(_e[2])});
			bool inPool = lq.x > ${at(es[0])} && lq.x < ${at(es[2])} && lq.y > ${at(es[1])} && lq.y < ${at(es[3])};
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
		${Ja}
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
		}`,attributes:{corner:B.corner,start:B.start,par:B.par,misc:B.misc},elements:new Uint32Array(B.idx),uniforms:u,cull:{enable:!1}}),Rt={sim:EM(),ready:!1};Rl=Rt.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=Rt.sim);let Nt=Object.assign({},u);W0.forEach((ft,ct)=>{Nt["koiA["+ct+"]"]=()=>{let Q=Rt.sim.fish[ct];return[Q.x+_e[0],Q.y,Q.z+_e[2],Q.th]},Nt["koiB["+ct+"]"]=()=>{let Q=Rt.sim.fish[ct];return[Q.kappa,Q.ph,Q.amp,Q.pitch]}});let bt=(()=>{let ct=Math.round(96*(dt.z1-dt.z0)/(dt.x1-dt.x0)),Q=new Uint8Array(96*ct*4),ye=[-la[0]/la[1]*-Al,-la[2]/la[1]*-Al],k=96/(dt.x1-dt.x0),Jt=ct/(dt.z1-dt.z0);for(let Wt=0;Wt<ct;Wt++)for(let Te=0;Te<96;Te++){let Re=dt.x0+(Te+.5)/k,eo=dt.z0+(Wt+.5)/Jt,zo=0;for(let wo of sd){let Xo=Math.hypot(Re-(wo[0]+ye[0]),eo-(wo[1]+ye[1]));zo=Math.max(zo,1-Math.min(1,Math.max(0,(Xo-wo[2]*.82)/(wo[2]*.35))))}Q[(Wt*96+Te)*4]=Math.round(zo*255),Q[(Wt*96+Te)*4+3]=255}return t.texture({width:96,height:ct,data:Q,min:"linear",mag:"linear"})})(),rt=`
		uniform vec4 koiA[${W0.length}], koiB[${W0.length}];
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
	`,qt=`
		uniform vec4 koiA[${W0.length}], koiB[${W0.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${at(la[0])}, ${at(la[1])}, ${at(la[2])});
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
			vec2 lp = pw.xz - vec2(${at(_e[0])}, ${at(_e[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${at(Al)});
			vec2 uv = (lp - back - vec2(${at(dt.x0)}, ${at(dt.z0)})) / vec2(${at(dt.x1-dt.x0)}, ${at(dt.z1-dt.z0)});
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
			float e = ${at(Nl)};
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
	`,xe=(()=>{let ft=[],ct=[],Q=[],ye=[],k=(wo,Xo,gn,on,V)=>(ft.push(wo+_e[0],Xo,gn+_e[2]),ct.push(...on),Q.push(V),ft.length/3-1),Jt=(wo,Xo,gn,on,V,mt,zt)=>{let Et=ft.length/3;for(let Qt=0;Qt<=on;Qt++)for(let oe=0;oe<=V;oe++)k(wo[0]+Xo[0]*Qt/on+gn[0]*oe/V,wo[1]+Xo[1]*Qt/on+gn[1]*oe/V,wo[2]+Xo[2]*Qt/on+gn[2]*oe/V,mt,zt);for(let Qt=0;Qt<on;Qt++)for(let oe=0;oe<V;oe++){let ee=Et+Qt*(V+1)+oe;ye.push(ee,ee+1,ee+V+2,ee,ee+V+2,ee+V+1)}},{x0:Wt,x1:Te,z0:Re,z1:eo}=dt,zo=Al;return Jt([Wt,zo,Re],[Te-Wt,0,0],[0,0,eo-Re],8,22,[0,1,0],0),Jt([Wt,0,Re],[0,0,eo-Re],[0,zo,0],22,2,[1,0,0],1),Jt([Te,0,Re],[0,0,eo-Re],[0,zo,0],22,2,[-1,0,0],1),Jt([Wt,0,Re],[Te-Wt,0,0],[0,zo,0],8,2,[0,0,1],1),Jt([Wt,0,eo],[Te-Wt,0,0],[0,zo,0],8,2,[0,0,-1],1),{pos:ft,nrm:ct,kd:Q,idx:ye}})(),he=Ta(t,"res/pond/gravel.jpg",{wrap:"repeat"}),De=Object.assign({padShadow:bt,gravel:()=>he.tex,reflTex:()=>d,reflSize:()=>p,reflOn:()=>f},Nt),Ae=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${ts}
		${rt}
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
		${ts}
		${Ja}
		${qt}
		float klen(int i) {
			${W0.map((ft,ct)=>`if (i == ${ct}) return ${at(ft.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${at(Al)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${W0.length}; i++) {
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
		}`,attributes:{position:xe.pos,normal:xe.nrm,kd:xe.kd},elements:new Uint16Array(xe.idx),uniforms:De,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),ho=Ta(t,"res/koi.webp"),yo=null,Uo=null;fetch("res/koi.bin").then(ft=>{if(!ft.ok)throw new Error("Could not load res/koi.bin");return ft.arrayBuffer()}).then(ft=>{let ct=new DataView(ft),Q=ct.getUint32(4,!0),ye=ct.getUint32(8,!0),k=ct.getFloat32(12,!0),Jt=16,Wt=new Uint16Array(ft,Jt,Q);Jt+=Q*2;let Te=new Int16Array(ft,Jt,Q*2);Jt+=Q*4;let Re=new Uint16Array(ft,Jt,Q*2);Jt+=Q*4;let eo=new Uint16Array(ft,Jt,ye);Jt+=ye*2;let zo=new Int8Array(ft,Jt,Q*3);Jt+=Q*3;let wo=new Uint8Array(ft,Jt,Q*2),Xo=W0.length,gn=new Float32Array(Q*3*Xo),on=new Float32Array(Q*3*Xo),V=new Float32Array(Q*2*Xo),mt=new Float32Array(Q*2*Xo),zt=new Float32Array(Q*4*Xo);W0.forEach((oe,ee)=>{for(let Bt=0;Bt<Q;Bt++){let le=ee*Q+Bt;gn[le*3]=Wt[Bt]/65535*1.2,gn[le*3+1]=Te[Bt*2]/32767*k,gn[le*3+2]=Te[Bt*2+1]/32767*k,on[le*3]=zo[Bt*3]/127,on[le*3+1]=zo[Bt*3+1]/127,on[le*3+2]=zo[Bt*3+2]/127,V[le*2]=Re[Bt*2]/65535,V[le*2+1]=Re[Bt*2+1]/65535,mt[le*2]=wo[Bt*2]/255,mt[le*2+1]=wo[Bt*2+1]/255,zt[le*4]=oe.len,zt[le*4+1]=oe.kind,zt[le*4+2]=ee,zt[le*4+3]=0}});let Et=[],Qt=[];for(let oe=0;oe<Xo;oe++)for(let ee=0;ee<ye;ee+=3){let Bt=eo[ee],le=eo[ee+1],Ee=eo[ee+2];(Math.max(wo[Bt*2],wo[le*2],wo[Ee*2])>140?Qt:Et).push(Bt+oe*Q,le+oe*Q,Ee+oe*Q)}Uo={body:t.elements({data:new Uint32Array(Et),type:"uint32"}),fins:t.elements({data:new Uint32Array(Qt),type:"uint32"})},yo=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${ts}
				${rt}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${W0.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
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
				${ts}
				${Ja}
				${qt}
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
				}`,attributes:{loc:gn,nrm:on,uv:V,fin:mt,km:zt},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>ho.tex,padShadow:bt,reflTex:()=>d,reflSize:()=>p,reflOn:()=>f},Nt),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),Rt.ready=!0}).catch(ft=>console.error(ft));let se=()=>{yo&&(yo({els:Uo.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),yo({els:Uo.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),yo({els:Uo.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},Se=(()=>{let ft={cp:[],ci:[],idx:[]};for(let ct=0;ct<Tl;ct++){let Q=ft.cp.length/3,ye=5,k=7;for(let Jt=0;Jt<=ye;Jt++)for(let Wt=0;Wt<k;Wt++){let Te=Jt/ye*Math.PI,Re=Wt/k*Math.PI*2,eo=1+.35*Math.sin(Re*3+ct*1.7)*Math.sin(Te*2+ct);ft.cp.push(Math.sin(Te)*Math.cos(Re)*eo,Math.cos(Te)*.6,Math.sin(Te)*Math.sin(Re)*eo*(.8+.4*(ct*.37%1))),ft.ci.push(ct)}for(let Jt=0;Jt<ye;Jt++)for(let Wt=0;Wt<k;Wt++){let Te=Q+Jt*k+Wt,Re=Q+Jt*k+(Wt+1)%k,eo=Q+(Jt+1)*k+Wt,zo=Q+(Jt+1)*k+(Wt+1)%k;ft.idx.push(Te,Re,zo,Te,zo,eo)}}return ft})(),Ge=Object.assign({},u);for(let ft=0;ft<Tl;ft++)Ge["crumbs["+ft+"]"]=()=>{let ct=Rt.sim.crumbs[ft],Q=Rt.sim.t,ye=ct.alive?Math.min(1,Math.max(0,(Q-ct.born)/.25)):0;return[ct.x+_e[0],ct.z+_e[2],ye,ct.seed]};let ao=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Tl}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${ts}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Tl}; i++) if (i == k) c = crumbs[i];
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
		${Ja}
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
		}`,attributes:{cp:Se.cp,ci:Se.ci},elements:new Uint32Array(Se.idx),uniforms:Ge,cull:{enable:!1}}),uo=RM(),Ue=t({vert:c(Yg),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${Ja}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${at(_e[0])}, ${at(_e[1])}, ${at(_e[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${at(Vt/2)} ? p.x : ${at(Vt)} - p.x;
				vec2 pq = vec2(ux - ${at(Vo.purlin)} * floor(ux / ${at(Vo.purlin)}) - ${at(Vo.purlin/2)}, p.z - ${at(Vo.rafter)} * floor(p.z / ${at(Vo.rafter)}) - ${at(Vo.rafter/2)});
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
		}`,attributes:{position:uo.pos,normal:uo.nrm,kind:uo.kind,uv:uo.uv,anchor:uo.anchor},uniforms:u,elements:new Uint32Array(uo.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),Le=(()=>{let ft={pos:[],idx:[]},ct=300,Q=24,ye=12;for(let k=0;k<=ye;k++){let Jt=-.25*Mo+k/ye*.75*Mo;for(let Wt=0;Wt<=Q;Wt++){let Te=Wt/Q*2*Mo;ft.pos.push(_e[0]+Vt/2+ct*Math.cos(Jt)*Math.cos(Te),ct*Math.sin(Jt),_e[2]+qe/2+ct*Math.cos(Jt)*Math.sin(Te))}}for(let k=0;k<ye;k++)for(let Jt=0;Jt<Q;Jt++){let Wt=k*(Q+1)+Jt,Te=Wt+1,Re=Wt+Q+2,eo=Wt+Q+1;ft.idx.push(Wt,Te,Re,Wt,Re,eo)}return ft})(),kt=t({vert:c(`
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
		${Ja}
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
		void main() {`),attributes:{position:Le.pos},elements:new Uint32Array(Le.idx),cull:{enable:!1}});function ue(ft){ft&&ft.reflected||(m(),l()),kt(),N(),ft&&ft.reflected||(Ae(),se(),ao()),G&&G(),D(),ut(),ft&&ft.reflected||Ue()}return ue};var Rl=null;function FM(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],n=t[0]+e[0]*o-_e[0],r=t[2]+e[2]*o-_e[2];return n<dt.x0||n>dt.x1||r<dt.z0||r>dt.z1?null:[n+_e[0],r+_e[2]]}function qM(t,e){Rl&&Rl.drop(t-_e[0],e-_e[2])}function DM(){return!!(Rl&&Rl.feed.on)}var Kg=[{from:[8,1.65,.9],to:[8,1.7,2.9],at:[8,2.4,21],fov:58},{from:[12.4,1.65,1.5],to:[11.4,1.75,3.3],at:[7.2,2.7,20.5],fov:58},{from:[8,1.45,10.8],to:[8,1.55,13.6],at:[8,2.5,21.5],fov:46},{from:[7.1,3.9,10.6],to:[8.6,3.7,11.8],at:[8,-.2,14.8],fov:50,pond:!0},{from:[10.9,1.5,16.2],to:[10.3,1.7,17.4],at:[8,2.6,21.2],fov:44},{from:[5.4,1.6,19.6],to:[6.3,1.7,18.4],at:[8,2.4,0],fov:60},{from:[13.4,1.5,3],to:[12.4,1.6,4.6],at:[8,6.8,14],fov:62}],ic=11;function GM(t){let e=Kg.length,o=Math.floor(t/ic)%e,n=t%ic/ic,r=n*n*(3-2*n),a=Kg[o],s=a.from.map((c,h)=>c+(a.to[h]-c)*r),i=Math.max(0,1-Math.min(n*ic,(1-n)*ic)/.7);return{eye:rd(s),target:rd(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/ic)}}V0.exports.previewCam=GM;V0.exports.poolHit=FM;V0.exports.feedAt=qM;V0.exports.feeding=DM;V0.exports.sunGLSL=Qg;V0.exports.O=_e;V0.exports.SIZE={W:Vt,L:qe,H:vo,RIDGE:u0};V0.exports.BOX=[_e[0]-.8,0,_e[2]-.8,_e[0]+Vt+.8,u0+.5,_e[2]+qe+.8];V0.exports.AIR_BOX=[_e[0],0,_e[2],_e[0]+Vt,u0,_e[2]+qe]});var Ah=Mt((hA,s3)=>{"use strict";var{A:yr}=A0(),{C:Gn}=_r(),{DOOR:hc}=ja(),lr=Qa(),uc=Ws(),n3=Gn.hallEnd+.35,r3={arch:[13.6,0,yr.zc-yr.arch.r-.3,14.4,yr.arch.spring+yr.arch.r+.3,yr.zc+yr.arch.r+.3],mouth:[13.3,0,Gn.z0-.3,14.3,8.2,Gn.z1+.3],stair:[-.5,0,lr.SURR.z0-.2,.5,lr.SURR.top+.3,lr.SURR.z1+.2],door:[hc.x0-.4,0,-.5,hc.x1+.4,hc.top+.4,.5],windows:[15.6,.4,Gn.z1-.2,36.9,6.4,Gn.z1+.9],farDoor:[Gn.x1-.2,0,Gn.zc-hc.r-.4,Gn.x1+.9,hc.top+.4,Gn.zc+hc.r+.4]},La={court:[yr.x0-.4,0,yr.z0-.3,yr.x1+.3,yr.domeTop+.5,yr.z1+.3],stair:[lr.C.x-lr.R-2.6,0,lr.C.z-lr.R-1.5,.5,15.6,lr.C.z+lr.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Gn.z1,46,60,Gn.z1+110],florence:[Gn.x1,-1,Gn.zc-30,Gn.x1+80,60,Gn.zc+30],studio:uc.BOX},HM=[[0,0,0,14,0,n3],[13.6,0,Gn.z0,Gn.x1+.4,0,Gn.z1],[yr.x0-.4,0,yr.z0,yr.x1,0,yr.z1],[lr.C.x-lr.R-2.6,0,lr.C.z-lr.R,.4,0,lr.C.z+lr.R],[uc.BOX[0],0,uc.BOX[2],uc.BOX[3],0,uc.BOX[5]]],UM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Pl=new Float64Array(24),X0=[7,2,2],a3=0,Na="out",zh=!0;try{/[?&]nocull\b/.test(location.search)&&(zh=!1)}catch(t){}var Ol={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Cl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},e3=!0;function BM(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),n=e(1),r=e(2),a=e(3),s=(i,c,h,l)=>{for(let u=0;u<4;u++)Pl[i*4+u]=c[u]+h*l[u]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function os(t,e){if(!zh)return!0;let o=e?-t[4]:t[1],n=e?-t[1]:t[4];for(let r=0;r<6;r++){let a=Pl[r*4],s=Pl[r*4+1],i=Pl[r*4+2],c=Pl[r*4+3],h=a>0?t[3]:t[0],l=s>0?n:o,u=i>0?t[5]:t[2];if(a*h+s*l+i*u+c<0)return!1}return!0}var id=(t,e)=>X0[0]>t[0]-e&&X0[0]<t[3]+e&&X0[2]>t[2]-e&&X0[2]<t[5]+e;function jM(t){if(id(t,.6))return null;let e=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?t[3]:t[0])-X0[0],a=(n&2?t[5]:t[2])-X0[2],s=Math.atan2(r,a)-a3;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function o3(t,e,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=jM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of t){let i=r3[s];if(!id(i,.6)&&(!os(i,o)||!a(i)))return!1}return os(e,o)&&a(e)}function WM(){let t=X0[0],e=X0[2],o=uc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>lr.C.z-lr.R-1.5&&t>lr.C.x-lr.R-2.6?"stair":t>14.1&&e>yr.z0-.3&&e<yr.z1+.3&&t<yr.x1+.3?"court":t>13.9&&e>Gn.z0-.4&&e<Gn.z1+.1&&t<Gn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<n3?"hall":"out"}var VM={PORTAL:r3,ROOM:La,update(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[r*4+i];n[r*4+a]=s}BM(n),X0[0]=o[0],X0[1]=o[1],X0[2]=o[2],a3=Math.atan2(-t[2],-t[10]),Na=WM();for(let r in La){if(r==="studio"||Na==="studio"){Ol[r]=Cl[r]=r==="studio"&&Na==="studio";continue}if(!zh||Na==="out"||Na===r||id(La[r],.3))Ol[r]=os(La[r],!1)||Na===r,Cl[r]=os(La[r],!0)||Na===r;else{let a=UM[Na][r];Ol[r]=a?o3(a,La[r],!1):os(La[r],!1),Cl[r]=a?o3(a,La[r],!0):os(La[r],!0)}}e3=!zh||HM.some(r=>os(r,!1))},get zone(){return Na},room(t,e){return e?Cl[t]:Ol[t]},box(t,e,o){return o&&!(e?Cl[o]:Ol[o])?!1:os(t,e)},get floor(){return e3}};s3.exports=VM});var c3=Mt((uA,i3)=>{"use strict";var XM=Vu(),YM=Ah();function KM(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=[],s=[];for(let u=0;u<3;u++)a.push(e.getFloat32(12+u*4,!0)),s.push(e.getFloat32(24+u*4,!0));let i=36,c=new Uint16Array(t,i,n*3);i+=n*6;let h=new Uint16Array(t,i,r);i+=r*2;let l=new Int8Array(t,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:h,nrm:l}}i3.exports=(t,e)=>{let o=[],n=[],r=[],a=[],s=null,i=e.statues.length,c=[],h=(u,d)=>{let p=o.length/3,f=d.height*.75,v=d.base!==void 0?d.base:e.pedestalTop;c.push({offset:a.length,count:u.nI,box:[d.x-f,v-.1,d.z-f,d.x+f,v+d.height+.2,d.z+f]});let m=d.height,g=Math.cos(d.yaw),x=Math.sin(d.yaw),b=d.base!==void 0?d.base:e.pedestalTop;for(let w=0;w<u.nV;w++){let M=(u.mn[0]+u.pos[w*3]/65535*u.sz[0])*m,_=(u.mn[1]+u.pos[w*3+1]/65535*u.sz[1])*m,S=(u.mn[2]+u.pos[w*3+2]/65535*u.sz[2])*m;o.push(d.x+g*M+x*S,b+_,d.z-x*M+g*S);let O=u.nrm[w*3]/127,N=u.nrm[w*3+1]/127,G=u.nrm[w*3+2]/127;n.push(g*O+x*G,N,-x*O+g*G),r.push(d.mat||1,0,0)}for(let w=0;w<u.nI;w++)a.push(p+u.idx[w])},l=()=>{a.length!==0&&(s=XM(t,{position:o,normal:n,mat:r,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(u=>{fetch("res/"+u.file).then(d=>{if(!d.ok)throw new Error("Could not load "+u.file);return d.arrayBuffer()}).then(d=>h(KM(d),u)).catch(d=>console.error(d)).then(()=>{--i===0&&l()})}),function(u){if(!s)return;let d=!!(u&&u.reflected),p=c.filter(f=>YM.box(f.box,d));p.length&&s(p)}}});var y3=Mt((dA,ld)=>{"use strict";var QM=Fs(),Qn=1.29032,Xs=[9.2968,2,5.9],ZM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Th=2147.64,l3=725,f3=1288,h3=1450,u3=2576,e0=-5.197,Ks=3.865,ns=10.135,Qs=-14.679,$l=-30.229,Il=7.232,d3=-45.713,dc=17.1*Qn,Ys=16.6*Qn,Fl=16.6*Qn,p3=[6.9,17.1],Lh=[2.95,16.6],JM=1.6,t8=0,e8=1,v3=2,cd=3,m3=4,g3=5,o8=6;function n8(){let t=[],e=[],o=[],n=[],r=QM.createBuilder(t,e,o,n),a=(h,l,u,d,p,f,v=1,m=1)=>{let g=[];for(let x=0;x<=v;x++){let b=[];for(let w=0;w<=m;w++){let M=[h[0]+l[0]*x/v+u[0]*w/m,h[1]+l[1]*x/v+u[1]*w/m,h[2]+l[2]*x/v+u[2]*w/m],_=f(M);b.push(r.vert(M,d,[p,_[0],_[1]]))}g.push(b)}for(let x=0;x<v;x++)for(let b=0;b<m;b++)r.tri(g[x][b],g[x+1][b],g[x][b+1]),r.tri(g[x+1][b],g[x+1][b+1],g[x][b+1])},s=h=>l=>[(Xs[2]-l[2])/Qn-h,l[1]/Qn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],t8,h=>[h[0]/Qn,h[2]/Qn],13,14),a([Ks,0,e0],[0,0,Qs-e0],[0,dc,0],[1,0,0],e8,s(8.6),6,6),a([-40,0,e0],[Ks+40,0,0],[0,dc,0],[0,0,1],v3,h=>[(Ks-h[0])/Qn,h[1]/Qn],8,4),a([-40,0,-.36],[0,0,e0+.36],[0,dc,0],[1,0,0],v3,h=>[-h[2]/Qn,h[1]/Qn]),a([ns,0,-80],[0,0,e0+80],[0,Ys,0],[-1,0,0],m3,s(8.6),12,6),a([ns,0,e0],[60,0,0],[0,Ys,0],[0,0,1],g3,h=>[(h[0]-ns)/Qn,h[1]/Qn],8,4),a([70,0,e0],[0,0,-.36-e0],[0,Ys,0],[-1,0,0],g3,h=>[-h[2]/Qn,h[1]/Qn]);let i=h=>[(h[0]-Xs[0])/Qn+4.18,h[1]/Qn];a([-20,0,$l],[Il+20,0,0],[0,Fl,0],[0,0,1],cd,i,8,6),a([Il,0,$l],[0,0,d3-$l],[0,Fl,0],[1,0,0],cd,s(28),4,4),a([Il,0,d3],[ns-Il,0,0],[0,Ys,0],[0,0,1],m3,h=>[(h[0]-Xs[0])/Qn,h[1]/Qn],2,4),a([-20,0,Qs],[0,0,$l-Qs],[0,Fl,0],[1,0,0],cd,s(16),4,4);let c=(h,l,u,d)=>a(h,l,u,d,o8,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:n}}function Vs(t,e,o,n){let r=t.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Y0=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",r8=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Qs],[Ks,dc,e0]],[[ns,0,-80],[70,Ys,e0]],[[-20,0,-80],[Il,Fl,$l]],[[-40,0,-80],[-20,Fl,Qs]]],a8=r8.map(t=>`if (hitBox(ro, rd, ${Y0(t[0])}, ${Y0(t[1])}, 1e4) ) return 0.0;`).join(`
		`),x3="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>ZM[e][t].toFixed(6)).join(", ")).join(", ")+")",s8=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Y0([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${a8}
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
	vec3 ro = ${Y0(Xs)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Y0([-40,0,Qs])}, ${Y0([Ks-.02,dc,e0])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Y0([ns+.02,0,-80])}, ${Y0([70,Ys,e0])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${x3} * (p - ${Y0(Xs)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${l3.toFixed(2)} + ${Th.toFixed(3)} * pc.x / pc.z) / ${h3.toFixed(1)},
		(${f3.toFixed(2)} - ${Th.toFixed(3)} * pc.y / pc.z) / ${u3.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${x3} * (p - ${Y0(Xs)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${l3.toFixed(2)} + ${Th.toFixed(3)} * pc.x / pc.z) / ${h3.toFixed(1)},
		(${f3.toFixed(2)} - ${Th.toFixed(3)} * pc.y / pc.z) / ${u3.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Y0(Xs)}), n));
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
		base = texture2D(cobbleTex, fuv / ${JM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${p3[0].toFixed(2)}, 1.0 - fuv.y / ${p3[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Lh[0].toFixed(2)}, 1.0 - fuv.y / ${Lh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Lh[0].toFixed(2)}, 1.0 - fuv.y / ${Lh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Ks-.05).toFixed(3)} && v_pos.x < ${(ns+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Qs.toFixed(3)};
		projectable = projectable && v_pos.z < ${(e0+4.5).toFixed(3)};
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
}`,i8=`
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
}`,c8=ir();ld.exports=t=>{let e=n8(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Vs(t,"res/street/photo.jpg",o,[190,160,120]),s=Vs(t,"res/street/photo_night.jpg",o,[12,14,22]),i=Vs(t,"res/street/photo_mask.png",o,[255,255,255]),c=Vs(t,"res/street/facade_pink.jpg",n,[200,150,135]),h=Vs(t,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Vs(t,"res/street/facade_cream.jpg",n,[215,200,175]),u=Vs(t,"res/street/cobbles.jpg",r,[95,95,95]),d=Date.now(),p=t({frag:s8,vert:i8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:h,creamTex:l,cobbleTex:u,photoNight:s,night:()=>c8.night,time:()=>(Date.now()-d)/1e3}});return function(){p()}};ld.exports.layout={MOUTH_Z:e0,PINK_X:Ks,RIGHT_X:ns,PINK_H:dc,CREAM_H:Ys,S:Qn}});var _3=Mt((pA,w3)=>{"use strict";var l8=ir().GLSL,{glassPanes:f8}=ja(),b3=_r();function h8(){let t=[],e=[],o=(n,r)=>{for(let a of n)t.push(a),e.push(r)};return o(f8(),[0,0,1]),o(b3.windowGlass(),[0,0,1]),o(b3.farDoorGlass(),[1,0,0]),{position:t,normal:e}}w3.exports=t=>{let e=h8(),o=t({frag:`
		precision highp float;
		${l8}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var q3=Mt((vA,pd)=>{"use strict";var A3=ir().GLSL,u8=Fs(),fd=S0(),{wallWithHoles:d8,C:ss}=_r(),be=.28,et={westBack:14.4,westCol:15-be,eastCol:37.4+be,eastBack:41.8,south:ss.z1+.7,northCol:ss.z1+.7+16,northBack:ss.z1+.7+19,cx:(15+37.4)/2,cz:(ss.z1+.7+ss.z1+.7+16-be)/2},Go={x0:et.westCol+be,x1:et.eastCol-be,z0:et.south,z1:et.northCol-be},Ar=3.3,Gl=.92,is=5.6,M3=6,N0=11.9,as=9.6,xo={x0:et.cx-2.9,x1:et.cx+2.9,top:14.4},Ih=7,T3=4,ud=(et.eastCol-et.westCol)/Ih,p8=(et.northCol-et.south)/T3,L3=3,Ul=.26,ei=1.4,Js=1.1,Rh=3,fa=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),ae={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},ha=[],N3=(t,e,o)=>[et.cx+t,e,et.cz+o],Oh=N3(-5.9,0,3.4),cs=.85,rs={c:[Oh[0],4.6*cs+.5,Oh[2]],r:[5*cs,3.6*cs,4.5*cs]},R3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[Oh[0]+t.d[0]*cs,t.d[1]*cs+.5,Oh[2]+t.d[2]*cs],r:t.r.map(e=>e*cs),n:t.n}));for(let t of R3)ha.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var v8=[3.6,6.3,9];for(let t of v8){let e=8.6+t%1.7*.6;ha.push({c:N3(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var m8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:et.cx+t.d[0],z:et.cz+t.d[1],bloom:t.bloom}));for(let t of m8)ha.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var dd=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[et.cx+Math.cos(e)*2.3,et.cz+Math.sin(e)*2.3]});for(let[t,e]of dd)ha.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var O3=[];{let t=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),h=Math.floor(c/.9);for(let l=0;l<=h;l++){let u=l/h,d=o+(r-o)*u,p=n+(a-n)*u;s!==void 0&&Math.abs((r!==o?d:p)-s)<i||O3.push([d,p])}};t(Go.x0+.45,Go.z0+1.2,Go.x0+.45,Go.z1-.45,et.cz,1),t(Go.x1-.45,Go.z0+1.2,Go.x1-.45,Go.z1-.45,et.cz,1),t(Go.x0+.45,Go.z1-.45,Go.x1-.45,Go.z1-.45,et.cx,1.9)}var g8=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ch=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function vc(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function Zn(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function x8(t,e,o){return{vert:(n,r,a)=>t.vert(e(n),o(r),a),tri:t.tri}}var y8={north:[t=>[t[0],t[1],et.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[et.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[et.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function C3(t,e,o,n,r){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?n:.02),c=t+(s+1)*e-(s===o-1?r:.02);a.push([i,c,t+(s+.5)*e])}return a}var b8=C3(et.westCol,ud,Ih,be+Ul,be+Ul),k3=C3(et.south,p8,T3,.32,be+Ul),pc=[et.cx-32.35,et.northCol-77],w8=Array.from({length:Ih-1},(t,e)=>et.westCol+(e+1)*ud),P3=t=>(t[1]-t[0])/2-.2,Hl=t=>(t[0]+t[1])/2;function _8(t,e){let o=Hl(t),n=P3(t);return{u0:t[0],u1:t[1],bottom:e?0:Gl,head:r=>{let a=Math.abs(r-o);return a<n?Ar+Math.sqrt(n*n-a*a):Ar},step:.05}}function M8(t,e,o){return{u0:t-o,u1:t+o,bot:n=>e-Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),head:n=>e+Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),step:.04,mat:[ae.STONE,0,0]}}function k8(t,e,o,n){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>n,step:.5,mat:[ae.STONE,0,0]}}function S3(t,e,o){let[n,r]=y8[e],a=x8(t,n,r),s=[];o.arches.forEach((l,u)=>s.push(_8(l,u===o.open)));let i=[];for(let l of o.bays||o.arches){let u=Hl(l);o.oculi&&s.push(M8(u,6.85,.3)),i.push({c:u,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(k8(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);d8(a,{u0:o.u0,u1:o.u1,w0:-be,w1:be,top:o.top,holes:s,mat:[ae.BRICK,0,0],revealMat:[ae.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,u,d,p,f,v,m)=>{let g=n([l,u,d]),x=n([p,f,v]);Zn(t,g[0],g[1],g[2],x[0],x[1],x[2],m)},h=(l,u,d,p,f,v)=>vc(a,l,u,d,p,f,[v,0,0]);for(let l of o.arches){let u=Hl(l),d=P3(l),p=28;for(let f of[be,-be]){let v=f>0?1:-1,m=f+v*.025;for(let g=0;g<p;g++){let x=Math.PI*g/p,b=Math.PI*(g+1)/p,w=(F,j)=>[u+Math.cos(F)*j,Ar+Math.sin(F)*j],M=w(x,d),_=w(b,d),S=w(x,d+.26),O=w(b,d+.26);h([M[0],M[1],m],[_[0],_[1],m],[O[0],O[1],m],[S[0],S[1],m],[0,0,v],ae.STONE);let N=Math.cos((x+b)/2),G=Math.sin((x+b)/2);h([S[0],S[1],f],[O[0],O[1],f],[O[0],O[1],m],[S[0],S[1],m],[N,G,0],ae.STONE)}}}if(o.arches.forEach((l,u)=>{u!==o.open&&c(l[0]-.02,Gl,-be-.05,l[1]+.02,Gl+.09,be+.05,ae.STONE)}),c(o.u0,M3,-be,o.u1,M3+.18,be+.09,ae.STONE),c(o.u0,o.win[0]-.12,be-.01,o.u1,o.win[0],be+.06,ae.STONE),o.cornice)for(let[l,u,d]of o.cornice)c(l,d-.22,be-.01,u,d,be+.16,ae.STONE),c(l,d,be-.01,u,d+.16,be+.42,ae.STONE);for(let{c:l,y0:u,y1:d,w:p,door:f}of i){let v=p/2;if(h([l-v-.01,u,.06],[l+v+.01,u,.06],[l+v+.01,d,.06],[l-v-.01,d,.06],[0,0,1],f?ae.DARK:ae.PANE),f){c(l-v-.16,0,be-.01,l-v,d+.16,be+.07,ae.STONE),c(l+v,0,be-.01,l+v+.16,d+.16,be+.07,ae.STONE),c(l-v-.16,d,be-.01,l+v+.16,d+.2,be+.09,ae.STONE),c(l-v,0,.07,l+v,d-.02,.12,ae.SHUTTER),c(l-.012,0,.12,l+.012,d-.02,.14,ae.DARK);continue}for(let m of[-1,1]){let g=l+m*v;c(g+m*.02,u+.02,be+.02,g+m*(v+.025),d-.02,be+.06,ae.SHUTTER)}c(l-v-.09,d,be-.01,l+v+.09,d+.16,be+.05,ae.STONE),c(l-v-.09,u-.1,be-.01,l+v+.09,u,be+.09,ae.STONE),c(l-.015,u,.06,l+.015,d,.09,ae.SHUTTER),c(l-v,(u+d)/2-.015,.06,l+v,(u+d)/2+.015,.09,ae.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let u=Hl(l);h([u-.31,6.54,0],[u+.31,6.54,0],[u+.31,7.16,0],[u-.31,7.16,0],[0,0,1],ae.DARK)}for(let l of o.cols){let u=Gl+.09,d=n([l,0,0]);Zn(t,d[0]-.24,u,d[2]-.24,d[0]+.24,u+.12,d[2]+.24,ae.MARBLE),t.lathe([[.23,u+.12,1],[.24,u+.17],[.2,u+.24],[.215,u+.28],[.17,u+.34,1],[.165,u+.6],[.155,Ar-.5],[.15,Ar-.38,1],[.175,Ar-.34,1],[.17,Ar-.3],[.2,Ar-.22],[.27,Ar-.15],[.29,Ar-.12,1]],d[0],d[2],18,{mat:()=>[ae.MARBLE,0,0]}),Zn(t,d[0]-.29,Ar-.12,d[2]-.29,d[0]+.29,Ar+.01,d[2]+.29,ae.STONE)}o.walk&&o.walk(t)}function S8(t){let e=[-1,0,1].map(r=>{let a=et.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[ae.STONE,0,0]}});S3(t,"north",{u0:et.westCol-be,u1:et.eastCol+be,top:r=>r>xo.x0+1e-6&&r<xo.x1-1e-6?xo.top:N0,cuts:[xo.x0,xo.x0+1e-5,xo.x1-1e-5,xo.x1],arches:b8,open:L3,cols:w8,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[et.westCol-be-3.3,xo.x0,N0],[xo.x1,et.eastCol+be+3.3,N0],[xo.x0-.2,xo.x1+.2,xo.top]],walk:r=>{Zn(r,Go.x0,is,et.northCol+be,Go.x1,is+.2,et.northBack,ae.PLASTER),Zn(r,Go.x0,0,et.northBack,Go.x1,is,et.northBack+.3,ae.PLASTER);for(let a of[et.cx-7.2,et.cx,et.cx+7.2])vc(r,[a-.8,0,et.northBack-.01],[a+.8,0,et.northBack-.01],[a+.8,2.9,et.northBack-.01],[a-.8,2.9,et.northBack-.01],[0,0,-1],[ae.DARK,0,0]),Zn(r,a-.98,0,et.northBack-.06,a+.98,3.12,et.northBack,ae.STONE),vc(r,[a-.8,0,et.northBack-.07],[a+.8,0,et.northBack-.07],[a+.8,2.9,et.northBack-.07],[a-.8,2.9,et.northBack-.07],[0,0,-1],[ae.DARK,0,0])}}),vc(t,[xo.x0,11,et.northCol+.2],[xo.x1,11,et.northCol+.2],[xo.x1,13.6,et.northCol+.2],[xo.x0,13.6,et.northCol+.2],[0,0,-1],[ae.DARK,0,0]),Zn(t,xo.x0+.3,10.88,et.northCol-be-.06,xo.x1-.3,11,et.northCol-be+.1,ae.STONE),Zn(t,et.westBack,is+.2,et.northBack,et.eastBack,N0,et.northBack+3.4,ae.BRICK),Zn(t,et.westBack,as,et.northCol-be,et.westCol-be,N0,et.northCol+be,ae.BRICK),Zn(t,et.eastCol+be,as,et.northCol-be,et.eastBack,N0,et.northCol+be,ae.BRICK),Zn(t,et.westBack,is+.2,et.northCol+be+.12,et.eastBack,N0,et.northBack,ae.BRICK),ql(t,[et.westBack-.5,N0+.16,et.northCol-be-.42],[xo.x0-et.westBack+.5,0,0],[0,2.6,4.4],ae.ROOF),ql(t,[xo.x1,N0+.16,et.northCol-be-.42],[et.eastBack+.5-xo.x1,0,0],[0,2.6,4.4],ae.ROOF),ql(t,[xo.x0-.3,xo.top+.16,et.northCol-be-.42],[xo.x1-xo.x0+.6,0,0],[0,1.4,3],ae.ROOF),E3(t,[xo.x0-.3,xo.top+.16,et.northCol-be-.42],[xo.x0-.3,xo.top+1.56,et.northCol-be+2.58],[xo.x0-.3,xo.top+.16,et.northCol-be+2.58],[-1,0,0],ae.BRICK),E3(t,[xo.x1+.3,xo.top+.16,et.northCol-be-.42],[xo.x1+.3,xo.top+1.56,et.northCol-be+2.58],[xo.x1+.3,xo.top+.16,et.northCol-be+2.58],[1,0,0],ae.BRICK),Zn(t,xo.x0,N0,et.northCol+be,xo.x1,xo.top,et.northCol+2.6,ae.BRICK);for(let[r,a]of[[et.cx-9.8,et.northBack+.6],[et.cx+9.4,et.northBack+.4],[et.cx-4.6,et.northBack+1]])Zn(t,r-.4,12.5,a-.4,r+.4,15.4,a+.4,ae.BRICK),Zn(t,r-.52,15.4,a-.52,r+.52,15.62,a+.52,ae.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];k3.forEach((u,d)=>{let p=Hl(u);d===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),S3(t,r,{u0:et.south,u1:et.northCol-be,top:()=>as,arches:[],bays:k3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[et.south,et.northCol-be,as]]}),Zn(t,a,0,et.south,s+i*(be+.12),as,et.northBack+.3,ae.BRICK);let h=s-i*be;Zn(t,h,0,et.south,h-i*.06,.55,et.northCol-be,ae.STONE);let l=s-i*(be+.42);ql(t,[l,as+.16,et.south],[0,0,et.northCol-be-et.south],[a-l+i*.4,1.9,0],ae.ROOF)};o("west",et.westBack,et.westCol),o("east",et.eastBack,et.eastCol);let n=ss.x1+.7;Zn(t,13.65,7.4,et.south-.02,n,7.62,et.south+.14,ae.STONE),Zn(t,13.65,10.4,et.south-.02,n,10.6,et.south+.38,ae.STONE),ql(t,[13.65,10.6,et.south+.38],[n-13.65,0,0],[0,2.2,-5],ae.ROOF)}function E3(t,e,o,n,r,a){let s=[a,0,0];t.tri(t.vert(e,r,s),t.vert(o,r,s),t.vert(n,r,s))}function ql(t,e,o,n,r){let a=Ch([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(h=>-h):a,i=(h,l)=>[e[0]+o[0]*h+n[0]*l,e[1]+o[1]*h+n[1]*l,e[2]+o[2]*h+n[2]*l];vc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;vc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],Ch([-n[0],0,-n[2]]),[r,0,0])}function E8(t){let e=et.westBack,o=et.eastBack,n=et.south,r=et.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let h=0;h<=s;h++){let l=[e+(o-e)*c/a,0,n+(r-n)*h/s];i[c].push(t.vert(l,[0,1,0],[ae.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let h=0;h<s;h++)t.tri(i[c][h],i[c+1][h],i[c+1][h+1]),t.tri(i[c][h],i[c+1][h+1],i[c][h+1])}var Dl=.46,ti=.58,Zs=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function z8(t,e,o){let n=Js+o,r=(t>0?Go.x1-et.cx:et.cx-Go.x0)-ei-o,a=Js+o,s=(e>0?Go.z1-et.cz:et.cz-Go.z0)-ei-o,i=Rh+o,c=Math.sqrt(i*i-n*n),h=Math.sqrt(i*i-a*a),l=[[n,c],[n,s],[r,s],[r,a],[h,a]],u=Math.atan2(a,h),d=Math.atan2(c,n);for(let p=1;p<10;p++){let f=u+(d-u)*p/10;l.push([Math.cos(f)*i,Math.sin(f)*i])}return l.map(([p,f])=>[et.cx+t*p,et.cz+e*f])}function A8(t,e,o){let n=o[0]-e[0],r=o[1]-e[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,h=s,l=Dl*.5,u=-l,d=a+l,p=[],f=Math.max(1,Math.ceil((d-u)/1));for(let v=0;v<=f;v++){let m=u+(d-u)*v/f,g=[];for(let x=0;x<Zs.length;x++){let[b,w]=Zs[x],M=Math.min(Zs.length-2,x),_=Zs[Math.max(0,x-1)],S=Zs[Math.min(Zs.length-1,x+1)],O=(S[0]-_[0])*Dl,G=(S[1]-_[1])*ti,F=-O,j=Math.hypot(G,F)||1,D=[e[0]+s*m+c*b*Dl,w*ti,e[1]+i*m+h*b*Dl],B=[c*(-G/j),-F/j,h*(-G/j)];g.push(t.vert(D,B[1]<-.2?[c*Math.sign(b),.3,h*Math.sign(b)]:B,[ae.HEDGE,0,0]))}p.push(g)}for(let v=0;v<f;v++)for(let m=0;m<Zs.length-1;m++)t.tri(p[v][m],p[v+1][m],p[v+1][m+1]),t.tri(p[v][m],p[v+1][m+1],p[v][m+1]);for(let[v,m]of[[0,-1],[f,1]]){let g=p[v],x=t.vert([e[0]+s*(v?d:u),ti*.5,e[1]+i*(v?d:u)],[s*m,0,i*m],[ae.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)t.tri(x,g[b],g[b+1])}}function T8(t){for(let e of[-1,1])for(let o of[-1,1]){let n=z8(e,o,.3);for(let r=0;r<n.length;r++)A8(t,n[r],n[(r+1)%n.length])}}function L8(t){let e=et.cx,o=et.cz,n=()=>[ae.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:n}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:n}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[ae.DARK,0,0]});let r={mat:()=>[ae.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,r),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,r),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,r),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let h=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(h)*l*s*-1+0),1.95+Math.sin(h)*l,o])}t.tube(i,()=>.016,16,5,r)}}function N8(t){for(let[e,o]of dd)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[ae.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[ae.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[ae.BARK,0,0]})}function R8(t){let[e,,o]=rs.c,n=I3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];t.tube(c,h=>.2*(1-h*.75),14,9,{mat:()=>[ae.BARK,0,0]});for(let h=0;h<2;h++){let l=.55+h*.2,u=[e+a*l,i*l,o+s*l],d=n()*Math.PI*2;t.tube([u,[u[0]+Math.cos(d)*1.3,u[1]+.9,u[2]+Math.sin(d)*1.3],[u[0]+Math.cos(d)*2.3,u[1]+1.4+n(),u[2]+Math.sin(d)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[ae.BARK,0,0]})}}for(let a of ha.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[ae.BARK,0,0]})}function O8(t){let e=()=>[ae.FARBRICK,0,0],o=()=>[ae.LEAD,0,0],n=(a,s,i,c,h,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let u=[];for(let p=0;p<=12;p++){let f=p/12*Math.PI/2,v=Math.cos(f)*i,m=Math.sin(f)*h;l&&(v*=1-.18*Math.sin(f*2)),u.push([Math.max(v,i*.12),c+m])}t.lathe(u,a,s,28,{mat:o});let d=c+h;t.lathe([[i*.13,d-.2,1],[i*.13,d+3,1],[i*.18,d+3.2,1],[i*.02,d+6.4]],a,s,10,{mat:o})};Zn(t,14,0,104,52,26,150,ae.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{Zn(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,ae.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};r(20.5,109,36),r(46.5,112,38)}function C8(t){let o=[et.cx,0,et.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let h=Math.PI/2*(c/r)-.05,l=[Math.sin(i)*Math.cos(h),Math.sin(h),Math.cos(i)*Math.cos(h)],u=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(u,[-l[0],-l[1],-l[2]],[ae.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function P8(){let t=[],e=[],o=[],n=[],r=u8.createBuilder(t,e,o,n);return E8(r),S8(r),T8(r),L8(r),N8(r),R8(r),r.save(),r.translate(pc[0],0,pc[1]),O8(r),r.restore(),C8(r),{position:t,normal:e,elements:o,attr:n}}var $3=[[[13.65,0,ss.z0-.7],[ss.x1+.7,10.6,et.south]],[[et.westBack,is,et.northCol-be],[et.eastBack,N0,et.northBack+3.4]],[[xo.x0,N0,et.northCol-be],[xo.x1,xo.top,et.northCol+2.6]],[[et.westBack,0,et.south],[et.westCol+be,as,et.northBack+.3]],[[et.eastCol-be,0,et.south],[et.eastBack,as,et.northBack+.3]],[[14+pc[0],0,104+pc[1]],[52+pc[0],26,150+pc[1]]]];function $8(t,e,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>n[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(n[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function Nh(t,e,o,n){let r=[(t[0]-o[0])/n[0],(t[1]-o[1])/n[1],(t[2]-o[2])/n[2]],a=[e[0]/n[0],e[1]/n[1],e[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,h=i*i-s*c;if(h<=0)return 0;let l=Math.sqrt(h),u=Math.max(0,(-i-l)/s),d=(-i+l)/s;return Math.max(0,d-u)}function hd(t){for(let[e,o]of $3)if($8(t,fa,e,o))return 0;return 1}function I3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function I8(){let t=[],e=[],o=[],n=[],r=[],a=[],s=[],i=I3(21),c=(f,v,m,g,x,b,w)=>{let M=t.length/3;for(let[_,S]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...f),e.push(_,S),o.push(v,m,g),n.push(...x),r.push(...b),a.push(...w);s.push(M,M+1,M+2,M,M+2,M+3)},h=(f,v)=>{let m=1;for(let g of ha){if(g===v||!g.shadow)continue;let x=Nh(f,fa,g.c,g.r);x>0&&(m*=Math.exp(-x*.9))}return m},l=ha.map(f=>({...f,pts:null}));for(let f of l)for(let v=0;v<f.n;v++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,x=Math.pow(i(),.35)*.98,b=[m[0]/g*x,m[1]/g*x,m[2]/g*x];if(f.spindle){let D=b[1],B=Math.sqrt(Math.max(.02,1-D*D))*(D>0?1-D*.55:1+D*.25),ut=Math.hypot(b[0],b[2])||1,Rt=B*Math.min(1,ut*1.4);b=[b[0]/ut*Rt,D,b[2]/ut*Rt]}f.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let w=[f.c[0]+b[0]*f.r[0],f.c[1]+b[1]*f.r[1],f.c[2]+b[2]*f.r[2]],M,_;if(f.magnolia){let D=0;for(let Rt of R3)D=Math.max(D,Nh(w,fa,Rt.c,Rt.r));M=Math.exp(-D*1.1);let B=1;for(let Rt of ha)if(!Rt.magnolia&&Rt.shadow){let Nt=Nh(w,fa,Rt.c,Rt.r);Nt>0&&(B*=Math.exp(-Nt*.9))}M*=hd(w)*B;let ut=g8(w,rs.c);_=Ch([ut[0]/rs.r[0]+b[0]*.5,ut[1]/rs.r[1]+b[1]*.5,ut[2]/rs.r[2]+b[2]*.5]),x=Math.min(1,Math.hypot(ut[0]/rs.r[0],ut[1]/rs.r[1],ut[2]/rs.r[2])*.6+x*.4)}else{let D=Nh(w,fa,f.c,f.r);M=Math.exp(-D*(f.spindle?2.2:1.25)),M*=hd(w)*h(w,ha[l.indexOf(f)]),_=Ch([b[0]/f.r[0],b[1]/f.r[1],b[2]/f.r[2]])}let S=Math.max(0,_[0]*fa[0]+_[1]*fa[1]+_[2]*fa[2]),O=.25+.75*Math.pow(x,1.5)*(.65+.35*(_[1]*.5+.5)),N=f.size[0]+(f.size[1]-f.size[0])*i(),G=.85+i()*.3,F=f.leaf.map(D=>D*G),j=f.cell;f.cell===3&&i()<.35&&(j=2),c(w,N,j,i()*Math.PI*2,[M,O,.35+.65*S],F,f.bloom)}for(let[f,v]of O3){let m=i()<.5;for(let g=0;g<3;g++){let x=[f+(i()-.5)*.7,.28+i()*.22,v+(i()-.5)*.5],b=hd(x)*h(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[b,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let u=s.length/6,d=Array.from({length:u},(f,v)=>v);for(let f=u-1;f>0;f--){let v=Math.floor(i()*(f+1));[d[f],d[v]]=[d[v],d[f]]}let p=[];for(let f of d)for(let v=0;v<6;v++)p.push(s[f*6+v]);return{center:t,corner:e,par:o,light:n,tint:r,bloom:a,elements:p}}var me=t=>t.toFixed(4),Bl=t=>`vec3(${me(t[0])}, ${me(t[1])}, ${me(t[2])})`,F3=`
const vec3 SUN = ${Bl(fa)};
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
`,F8=$3.map(([t,e])=>`if (hitBox(ro, SUN, ${Bl(t)}, ${Bl(e)})) return 0.0;`).join(`
	`),q8=ha.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Bl(t.c)}, ${Bl(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),D8=(t,e,o,n,r,a,s,i,c)=>`
	{
		float t = (${me(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${me(is)} && u > ${me(o-be)} && u < ${me(o+n*r+be)}) {
				float k = floor((u - ${me(o)}) / ${me(n)});
				float a = ${me(o)} + k * ${me(n)} + (k < 0.5 ? ${me(a)} : 0.02);
				float b = ${me(o)} + (k + 1.0) * ${me(n)} - (k > ${me(r-1.5)} ? ${me(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${me(i)}) < 0.5 ? 0.0 : ${me(Gl+.09)};
				bool hole = (q.y > sill && q.y < ${me(Ar)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${me(Ar)} && d * d + (q.y - ${me(Ar)}) * (q.y - ${me(Ar)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Ph=Js+.3,$h=Js+.3,jl=Rh+.3,z3=Go.x1-et.cx-ei-.3,G8=Go.z1-et.cz-ei-.3,H8=et.cz-Go.z0-ei-.3,U8=Math.sqrt(jl*jl-Ph*Ph),B8=Math.sqrt(jl*jl-$h*$h),j8=[[et.cx,et.cz,.86,1.18],[et.cx,et.cz,1.25,.3],...dd.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,n])=>`if (hitCyl(ro, vec2(${me(t)}, ${me(e)}), ${me(o)}, ${me(n)})) return 0.0;`).join(`
	`),W8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${me(et.cx)}, ${me(et.cz)}));
	float b1 = xz.y > ${me(et.cz)} ? ${me(G8)} : ${me(H8)};
	vec2 A = vec2(${me(Ph)}, ${me(U8)}), Bp = vec2(${me(Ph)}, b1), C = vec2(${me(z3)}, b1);
	vec2 D = vec2(${me(z3)}, ${me($h)}), E = vec2(${me(B8)}, ${me($h)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${me(jl)}));
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
	${F8}
	${D8("z",et.northCol,et.westCol,ud,Ih,be+Ul,be+Ul,L3,"ro.z > "+me(et.northCol-be))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${j8}
	if (ro.y < ${me(ti)} && ro.x > ${me(Go.x0)} && ro.x < ${me(Go.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${me(ti)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${me(Dl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${me(ti)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${q8}
	return tr;
}
`,V8=`
precision highp float;
${A3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${F3}
${W8}

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

	if (kind == ${ae.SKY}.0) {
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

	if (kind == ${ae.GROUND}.0) {
		bool yard = P.x > ${me(Go.x0)} && P.x < ${me(Go.x1)} && P.z < ${me(Go.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${me(Go.x0)}, ${me(Go.x1)} - P.x);
			float ez = min(P.z - ${me(Go.z0)}, ${me(Go.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${me(et.cx)}), dz = abs(P.z - ${me(et.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${me(ei)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${me(ei)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${me(Rh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${me(et.cz)}, P.x - ${me(et.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${me(Rh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${me(Js)} || dz < ${me(Js)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${me(Js)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${me(et.cx)}, ${me(et.cz)})));
		}
	} else if (kind == ${ae.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${ae.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${ae.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${ae.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${me(ti)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${ae.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${ae.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${ae.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${ae.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${ae.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${ae.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${ae.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${ae.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${ae.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${ae.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${ae.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${me(et.westCol)} || P.x > ${me(et.eastCol)} || P.z > ${me(et.northCol)}) && P.y < ${me(is+.05)} && P.z > ${me(et.south-.1)} && P.z < ${me(et.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${me(et.northCol)} ? P.z - ${me(et.northCol)} : (P.x < ${me(et.westCol)} ? ${me(et.westCol)} - P.x : P.x - ${me(et.eastCol)});
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
}`,X8=`
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
}`,Y8=`
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
}`,K8=`
precision highp float;
${A3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${F3}
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
}`;function Q8(t,e,o){let n=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}pd.exports=t=>{let e=P8(),o=I8(),n=Q8(t,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>fd.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=t({frag:V8,vert:X8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>fd.gardenDetail}}),i=t({frag:K8,vert:Y8,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*fd.leafShare/6)*6});return function(){s(),i()}};pd.exports.layout={G:et,YARD:Go,SUN:fa}});var B3=Mt((mA,U3)=>{"use strict";var Z8=ir().GLSL,J8=Fs(),{C:H3}=_r(),Tr=H3.x1+.35,xd=H3.zc,vd=[Tr-7.3,2,xd],D3=5.2*Math.PI/180,G3=2100,tk=725,ek=1288,ok=1450,nk=2576,Ra=xd-3.2,Dh=xd+3.3,md=Tr+5,gd=Tr+11.7,mc=3.9,Wl=Tr+22.7,Fh=40;function rk(){let t=[],e=[],o=[],n=[],r=J8.createBuilder(t,e,o,n),a=(l,u,d,p,f,v)=>{let m=[];for(let g=0;g<=f;g++){m.push([]);for(let x=0;x<=v;x++){let b=[0,1,2].map(w=>l[w]+u[w]*g/f+d[w]*x/v);m[g].push(r.vert(b,p,[0,0,0]))}}for(let g=0;g<f;g++)for(let x=0;x<v;x++)r.tri(m[g][x],m[g+1][x],m[g+1][x+1]),r.tri(m[g][x],m[g+1][x+1],m[g][x+1])},s=Dh-Ra,i=.7;a([Tr-i,0,Ra],[md-Tr+i,0,0],[0,0,s],[0,1,0],6,4);let c=gd-md,h=Math.hypot(c,mc);return a([md,0,Ra],[c,mc,0],[0,0,s],[-mc/h,c/h,0],6,4),a([gd,mc,Ra],[Wl-gd,0,0],[0,0,s],[0,1,0],6,4),a([Tr-i,0,Ra],[Wl-Tr+i,0,0],[0,Fh,0],[0,0,1],12,12),a([Tr-i,0,Dh],[Wl-Tr+i,0,0],[0,Fh,0],[0,0,-1],12,12),a([Wl,0,Ra],[0,Fh,0],[0,0,s],[-1,0,0],8,4),a([Tr-i,Fh,Ra],[Wl-Tr+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:n}}var Ur=t=>t.toFixed(5),qh=[[Tr+3.4,3.7,Ra+.01,1],[Tr+8.6,4.1,Dh-.01,-1],[Tr+14.8,mc+3.3,Ra+.01,1],[Tr+19.6,mc+3.6,Dh-.01,-1]],ak=`
precision highp float;
${Z8}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${qh.length};
vec4 LAMP[NLAMP];

void main() {
	${qh.map((t,e)=>`LAMP[${e}] = vec4(${Ur(t[0])}, ${Ur(t[1])}, ${Ur(t[2])}, ${Ur(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Ur(vd[0])}, ${Ur(vd[1])}, ${Ur(vd[2])});
	float c = ${Ur(Math.cos(D3))}, s = ${Ur(Math.sin(D3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Ur(tk)} + ${Ur(G3)} * d.z / fw, ${Ur(ek)} - ${Ur(G3)} * up / fw);
	vec2 uv = px / vec2(${Ur(ok)}, ${Ur(nk)});
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
	for (int i = 0; i < ${qh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,sk=`
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
}`;U3.exports=t=>{let e=rk(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=t({frag:ak,vert:sk,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,h)=>{let[l,u,d]=i,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[f,v,m]of p){let g=r.pos.length/3;for(let[x,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+f[0]*c[0]+v[0]*x*c[0]+m[0]*b*c[0],u+f[1]*c[1]+v[1]*x*c[1]+m[1]*b*c[1],d+f[2]*c[2]+v[2]*x*c[2]+m[2]*b*c[2]),r.nrm.push(...f),r.k.push(h);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of qh){let c=i[3],h=i[2]+c*.42;a([i[0],i[1],h],[.11,.17,.11],1);for(let l of[-1,1])for(let u of[-1,1])a([i[0]+l*.11,i[1],h+u*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,h],[.15,.03,.15],0),a([i[0],i[1]+.27,h],[.05,.05,.05],0),a([i[0],i[1]-.19,h],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var Y3=Mt((gA,X3)=>{"use strict";var ik=ir().GLSL,{A:Hh,BENCH:bd,SHAFT:yd,TREE:Vl,oculusGLSL:ck}=A0(),lk=S0(),Gh=Vl.sxz,j3=Vl.sy,W3=Vl.yaw;function fk(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0),a=[0,1,2].map(d=>e.getFloat32(16+d*4,!0)),s=[0,1,2].map(d=>e.getFloat32(28+d*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let h=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let u=new Uint32Array(t,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:h,nrm:l,idx:u}}function hk(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),n=new Float32Array(t.nV*2),r=new Float32Array(t.nV),a=Math.cos(W3),s=Math.sin(W3);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*Gh,h=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*j3,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*Gh;e[i*3]=Hh.cx+a*c+s*l,e[i*3+1]=bd.soil+.02+h,e[i*3+2]=Hh.zc-s*c+a*l;let u=t.nrm[i*3]/127/Gh,d=t.nrm[i*3+1]/127/j3,p=t.nrm[i*3+2]/127/Gh,f=Math.hypot(u,d,p)||1;u/=f,d/=f,p/=f,o[i*3]=a*u+s*p,o[i*3+1]=d,o[i*3+2]=-s*u+a*p,n[i*2]=t.uv[i*2]/65535,n[i*2+1]=t.uv[i*2+1]/65535,r[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:n,leaf:r,elements:t.idx}}function V3(t,e,o,n){let r=t.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var fr=t=>t.toFixed(4),gc=Vl.crownC,xc=Vl.crownR,uk=`
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

const vec3 SHAFT = vec3(${fr(yd[0])}, ${fr(yd[1])}, ${fr(yd[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${fr(Hh.cx)}, ${fr(Hh.zc)});
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
	vec3 cc = vec3(${fr(gc[0])}, ${fr(gc[1])}, ${fr(gc[2])});
	vec3 cr = vec3(${fr(xc[0])}, ${fr(xc[1])}, ${fr(xc[2])});
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
}`,ls=Xa(),dk=`
precision highp float;
${ik}
uniform float time;
${ls.lanternGLSL(ls.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${ls.LANTERNS[ls.TREE_LANTERN[0]].x.toFixed(3)}, ${ls.LANTERNS[ls.TREE_LANTERN[0]].y.toFixed(3)}, ${ls.LANTERNS[ls.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${ck()}

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
	vec3 rel = (v_pos - vec3(${fr(gc[0])}, ${fr(gc[1])}, ${fr(gc[2])})) / vec3(${fr(xc[0])}, ${fr(xc[1])}, ${fr(xc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${fr(bd.soil)}, ${fr(bd.soil+.5)}, v_pos.y);

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
}`;X3.exports=t=>{let e=null,o=V3(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=V3(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=hk(fk(a));e=t({vert:uk,frag:dk,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>lk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Wh=Mt((xA,J3)=>{"use strict";var yc=Qa(),pk="res/audio/go-tomorrow.mp3",vk="res/audio/go-tomorrow.json",Q3="gallery-sound",Uh=[yc.PIANO.x,1,yc.PIANO.z],mk=yc.R,o0=!0;try{localStorage.getItem(Q3)==="off"&&(o0=!1)}catch(t){}var Pn=null,kr=null,Xl=null,Yl=null,fs=null,Oa=null,oi=!1,Bh=null,K3=[],gk=(typeof performance!="undefined"?performance.now():0)/1e3;function xk(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let h=c/t.sampleRate,l=.25+.6*Math.exp(-h*2.2);i+=(r()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-h*1.5)*(h<.012?h/.012:1)}}return o}function yk(){if(Pn)return;Pn=new Audio,Pn.src=pk,Pn.loop=!0,Pn.preload="auto",Pn.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){Pn.volume=.2;return}try{kr=new t;let e=kr.createMediaElementSource(Pn);fs=kr.createBiquadFilter(),fs.type="lowpass",fs.frequency.value=1500,fs.Q.value=.4,Xl=kr.createGain(),Xl.gain.value=0,Yl=kr.createGain(),Yl.gain.value=0;let o=kr.createConvolver();o.buffer=xk(kr),Oa=kr.createGain(),Oa.gain.value=o0?1:0,e.connect(fs),fs.connect(Xl),Xl.connect(Oa),fs.connect(o),o.connect(Yl),Yl.connect(Oa),Oa.connect(kr.destination)}catch(e){kr=null,Pn.volume=.2}}function Z3(){if(oi||!o0)return;yk();let t=()=>Pn.play().then(()=>{oi=!0}).catch(()=>{});kr&&kr.state==="suspended"?kr.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,Z3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Pn||!oi||(document.hidden?Pn.pause():o0&&Pn.play().catch(()=>{}))}),fetch(vk).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};Bh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var jh={AT:Uh,listen(t){if(!kr||!oi)return;let e=t[0]-Uh[0],o=t[2]-Uh[2],n=Math.hypot(e,o,(t[1]-Uh[1])*.5),r=Math.hypot(t[0]-yc.C.x,t[2]-yc.C.z)<mk+.4||t[0]<-.2&&Math.abs(t[2]-yc.C.z)<4,a,s,i;if(r){let h=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*h,s=.22+.16*h,i=16e3}else{let h=5.5/Math.max(n,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(h,1.5)*l,s=.34*Math.pow(h,.95)*l,i=(650+9e3*Math.pow(h,1.3))*(l<1?.7:1)}let c=kr.currentTime;Xl.gain.setTargetAtTime(a,c,.35),Yl.gain.setTargetAtTime(s,c,.35),fs.frequency.setTargetAtTime(i,c,.35)},time(){let t=Bh&&Bh.dur||158;return Pn&&oi&&!Pn.paused||Pn&&oi?Pn.currentTime%t:((performance.now()/1e3-gk)%t+t)%t},get cues(){return Bh},get on(){return o0},set(t){o0=!!t;try{localStorage.setItem(Q3,o0?"on":"off")}catch(e){}o0?(Z3(),Pn&&oi&&Pn.play().catch(()=>{}),Oa&&Oa.gain.setTargetAtTime(1,kr.currentTime,.2)):Oa?Oa.gain.setTargetAtTime(0,kr.currentTime,.15):Pn&&Pn.pause(),K3.forEach(e=>e(o0))},toggle(){jh.set(!o0)},onChange(t){K3.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=t+" sound-toggle";let r=()=>{n.innerHTML=o0?e:o,n.setAttribute("aria-label",o0?"Turn the music off":"Turn the music on"),n.title=o0?"Music on":"Music off",n.setAttribute("aria-pressed",o0?"true":"false")};return r(),jh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),jh.toggle()}),n}};J3.exports=jh});var fx=Mt((yA,Sd)=>{"use strict";var Md=ir().GLSL,{A:tx,BENCH:sx,oculusGLSL:ix}=A0(),ex=S0(),cx=Qa(),ox=Wh(),bk=1.74,wk=1.877,Lr=bk/wk,ri={x:tx.cx-1.22,z:tx.zc+.02,hipY:sx.seat+.115},an=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],K0=t=>[-t[0],-t[1],-t[2],t[3]],us=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,n=Math.sin(e/2);return[t[0]/o*n,t[1]/o*n,t[2]/o*n,Math.cos(e/2)]},Vh=(t,e,o)=>an(us([0,0,1],o*Math.PI/180),an(us([0,1,0],e*Math.PI/180),us([1,0,0],t*Math.PI/180))),kd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},ua=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ql=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],hs=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],_d=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Yh=t=>Math.hypot(t[0],t[1],t[2]),Kl=t=>{let e=Yh(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},Qh=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],_k=(t,e)=>{let o=[t[0],t[1],t[2]],n=hs(Qh(o,e),2);return Ql(Ql(e,hs(n,t[3])),Qh(o,n))},Mk=(t,e)=>{let o=Qh(t,e),n=1+_d(t,e);return n<1e-6?[0,0,1,0]:kd([o[0],o[1],o[2],n])};function p0(t,e,o){let[n,r,a,s]=e,i=n*n,c=r*r,h=a*a,l=n*r,u=n*a,d=r*a,p=s*n,f=s*r,v=s*a;return[(1-2*(c+h))*o[0],2*(l+v)*o[0],2*(u-f)*o[0],0,2*(l-v)*o[1],(1-2*(i+h))*o[1],2*(d+p)*o[1],0,2*(u+f)*o[2],2*(d-p)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function Jn(t,e){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=t[r]*e[n*4]+t[4+r]*e[n*4+1]+t[8+r]*e[n*4+2]+t[12+r]*e[n*4+3];return o}function wd(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),n=Math.hypot(t[8],t[9],t[10]),r=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,h=t[6]/o,l=t[8]/n,u=t[9]/n,d=t[10]/n,p=r+c+d,f;if(p>0){let v=Math.sqrt(p+1)*2;f=[(h-u)/v,(l-s)/v,(a-i)/v,v/4]}else if(r>c&&r>d){let v=Math.sqrt(1+r-c-d)*2;f=[v/4,(i+a)/v,(l+s)/v,(h-u)/v]}else if(c>d){let v=Math.sqrt(1+c-r-d)*2;f=[(i+a)/v,v/4,(u+h)/v,(l-s)/v]}else{let v=Math.sqrt(1+d-r-c)*2;f=[(l+s)/v,(u+h)/v,v/4,(a-i)/v]}return kd(f)}var Kh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Kh[t+"Hand"+n+"1"]=[0,0,e*(18+r*6)*o],Kh[t+"Hand"+n+"2"]=[0,0,e*(26+r*6)*o],Kh[t+"Hand"+n+"3"]=[0,0,e*16*o]})}function ni(t,e,o){let n=t-e;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function nx(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*ni(t,.14,.07)+57*ni(t,.72,.12),n=5*ni(t,.06,.04)-9*ni(t,.42,.12)+17*ni(t,.62,.05)-3*ni(t,.85,.1),r=-26*ni(t,.58,.06);return{hip:e,knee:o,ankle:n,toe:r}}function kk(t){let e=(t%1+1)%1,o=nx(e),n=nx(e+.5),r=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var rx=`
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
}`,Zh=Xa(),ax=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${Md}
uniform float time;
${cx.roomGLSL()}
${Zh.lanternGLSL(Zh.TREE_LANTERN)}
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
}`;function Sk(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var lx={w:.13,h:.2},Xh=t=>.011*(1-Math.pow(1-t,3));function Ek(){let t=[],e=[],o=[],n=[],r=[],a=(v,m,g,x,b,w,M)=>{let _=t.length/3;[v,m,g,x].forEach((S,O)=>{t.push(...S),e.push(...b),o.push(...M[O]),n.push(w)}),r.push(_,_+1,_+2,_,_+2,_+3)},{w:s,h:i}=lx,c=i/2,h=[[0,1],[1,1],[1,0],[0,0]],l=-.006,u=s+.001,d=c+.001;a([0,l,-d],[u,l,-d],[u,l,d],[0,l,d],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-d],[0,l+.001,d],[u,l+.001,d],[u,l+.001,-d],[0,1,0],2,h),a([-u,l,-d],[0,l,-d],[0,l,d],[-u,l,d],[0,-1,0],2,h),a([-u,l+.001,-d],[-u,l+.001,d],[0,l+.001,d],[0,l+.001,-d],[0,1,0],2,h);let p=8;for(let v of[1,-1]){for(let g=0;g<p;g++){let x=g/p,b=(g+1)/p,w=(.002+x*(s-.002))*v,M=(.002+b*(s-.002))*v,_=Xh(x),S=Xh(b),O=v>0?x:1-x,N=v>0?b:1-b,G=1,F=-(S-_)/(M-w);a([w,_,-c],[M,S,-c],[M,S,c],[w,_,c],[F,G,0],3,[[O,1],[N,1],[N,0],[O,0]]),a([w,l+.001,c],[M,l+.001,c],[M,S,c],[w,_,c],[0,0,1],4,h),a([w,_,-c],[M,S,-c],[M,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,h)}let m=s*v;a([m,l+.001,-c],[m,Xh(1),-c],[m,Xh(1),c],[m,l+.001,c],[v,0,0],4,h)}let f=10;for(let v=0;v<f;v++){let m=v/f,g=(v+1)/f,x=t.length/3;for(let[b,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(b,0,w),e.push(0,1,0),o.push(b,(w+c)/i),n.push(5);r.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:n,idx:r}}function zk(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,h,l,u,d)=>{for(let p=0;p<u;p++){let f=s+(n()-.5)*c*2,v=i+(n()-.5)*h*2,m=20+n()*60,g=e.createRadialGradient(f,v,0,f,v,m);g.addColorStop(0,`rgba(${l},${d})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(f-m,v-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+n()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,h])=>{e.lineWidth=h,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${n()*.05})`,e.fillRect(n()*512,n()*768,1,1);return t}var Ak=`
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
}`,Tk=`
precision highp float;
${Md}
uniform float time;
${Zh.lanternGLSL(Zh.TREE_LANTERN)}
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
}`;function Lk(){let t=[],e=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],h=[.8,.55,.22],l=[[0,-.15,h,2],[.0012,-.147,h,2],[.004,-.138,h,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],u=16;for(let d=0;d<l.length;d++){let[p,f,v,m]=l[d],g=m===2?.45:1;for(let x=0;x<=u;x++){let b=x/u*Math.PI*2;t.push(Math.cos(b)*p,f,Math.sin(b)*p*g);let w=Math.max(d-1,0),M=Math.min(d+1,l.length-1),_=l[M][0]-l[w][0],S=l[M][1]-l[w][1],O=Math.hypot(_,S)||1;e.push(Math.cos(b)*S/O,-_/O,Math.sin(b)*S/O/g),o.push(...v),n.push(m)}}for(let d=0;d<l.length-1;d++)for(let p=0;p<u;p++){let f=d*(u+1)+p,v=f+u+1;r.push(f,v,f+1,f+1,v,v+1)}return{pos:t,nrm:e,col:o,mat:n,idx:r}}var Nk=`
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
}`,Rk=`
precision highp float;
${Md}
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
}`,Ok=`
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
}`,Ck=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Sd.exports=t=>{let e="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[ri.x,1.9,ri.z],glow:0};Promise.all([fetch(e+"avatar.json").then(N=>N.json()),fetch(e+"avatar.bin").then(N=>N.arrayBuffer())]).then(([N,G])=>{o=h(N,G)}).catch(N=>console.error(N));let s=null;Promise.all([fetch(e+"motion.json").then(N=>N.ok?N.json():null),fetch(e+"motion.bin").then(N=>N.ok?N.arrayBuffer():null)]).then(([N,G])=>{if(!N||!G)return;let F={};for(let j in N.clips){let D=N.clips[j],B=D.bones.length,ut=new Float32Array(G,D.mean,B*4),Rt={};D.bones.forEach((Nt,bt)=>{Rt[Nt]=[ut[bt*4],ut[bt*4+1],ut[bt*4+2],ut[bt*4+3]]}),F[j]=Object.assign({},D,{Q:new Int16Array(G,D.q,D.frames*B*4),H:new Float32Array(G,D.hips,D.frames*3),meanQ:Rt})}s=F}).catch(()=>{});function i(N,G){let F=N.frames,j=N.bones.length,D=(G%F+F)%F,B=Math.floor(D)%F,ut=(B+1)%F,Rt=D-Math.floor(D),Nt={};for(let qt=0;qt<j;qt++){let xe=(B*j+qt)*4,he=(ut*j+qt)*4,De=N.Q[xe],Ae=N.Q[xe+1],ho=N.Q[xe+2],yo=N.Q[xe+3],Uo=N.Q[he],se=N.Q[he+1],Se=N.Q[he+2],Ge=N.Q[he+3];De*Uo+Ae*se+ho*Se+yo*Ge<0&&(Uo=-Uo,se=-se,Se=-Se,Ge=-Ge),Nt[N.bones[qt]]=kd([De+(Uo-De)*Rt,Ae+(se-Ae)*Rt,ho+(Se-ho)*Rt,yo+(Ge-yo)*Rt])}let bt=B*3,rt=ut*3;return{q:Nt,hips:[N.H[bt]+(N.H[rt]-N.H[bt])*Rt,N.H[bt+1]+(N.H[rt+1]-N.H[bt+1])*Rt,N.H[bt+2]+(N.H[rt+2]-N.H[bt+2])*Rt]}}let c=t.texture({data:[[[255,255,255,255]]]});function h(N,G){let F=(V,mt)=>new Float32Array(G,V,mt),j=N.bones,D=j.length,B={};j.forEach((V,mt)=>{B[V.name]=mt});let ut=[];for(let V=0;V<D;V++)ut.push(Array.from(F(N.ibm+V*64,16)));let Rt=j.map(V=>p0(V.t,V.r,V.s)),Nt=[];for(let V=0;V<D;V++){let mt=j[V].parent;Nt[V]=mt<0?Rt[V]:Jn(Nt[mt],Rt[V])}let bt=Nt.map(wd),rt=N.meshes.map(V=>{let mt=F(V.pos,V.n*3),zt=F(V.nrm,V.n*3),Et=F(V.uv,V.n*2),Qt=new Uint8Array(G,V.jnt,V.n*4),oe=F(V.wgt,V.n*4),ee=new Uint16Array(G,V.idx,V.ni),Bt={};for(let Oe in V.morphs){let Wo=V.morphs[Oe];Bt[Oe]={idx:new Uint16Array(G,Wo.idx,Wo.n),d:F(Wo.d,Wo.n*3)}}let le=new Float32Array(V.n*3),Ee=new Float32Array(V.n*3),We=new Float32Array(V.n*3),$e=t.buffer({data:le,usage:"dynamic"}),Ie=t.buffer({data:Ee,usage:"dynamic"}),no=/avaturn_hair/.test(V.name),ze=/EyeAO|Eyelash/.test(V.name),go=/Body|Head/.test(V.name),$o=V.kind||0;return{m:V,pos:mt,nrm:zt,uv:Et,jnt:Qt,wgt:oe,idx:ee,morphs:Bt,outP:le,outN:Ee,work:We,pb:$e,nbuf:Ie,tex:V.tex?Sk(t,e+V.tex):c,kind:$o,alphaScale:/EyeAO/.test(V.name)?.25:1,blend:V.blend||no,alphaCut:no?.35:ze?.02:0,skin:go?1:0}}),qt=t({vert:rx,frag:ax,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!S?_.lamp:[0,0,0,0],court:()=>_||S?0:1,candle:()=>S?1:0},cull:{enable:!1}}),xe=t({vert:rx,frag:ax,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!S?_.lamp:[0,0,0,0],court:()=>_||S?0:1,candle:()=>S?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),he=.3;for(let V of rt)if(V.uvBuf=t.buffer(V.uv),/Body/.test(V.m.name)){let mt=[],zt=[];for(let Et=0;Et<V.idx.length;Et+=3){let Qt=V.idx[Et],oe=V.idx[Et+1],ee=V.idx[Et+2];(V.pos[Qt*3+1]<he&&V.pos[oe*3+1]<he&&V.pos[ee*3+1]<he?zt:mt).push(Qt,oe,ee)}V.el=t.elements({data:new Uint16Array(mt),type:"uint16"}),zt.length&&(V.sockEl=t.elements({data:new Uint16Array(zt),type:"uint16"}))}else V.el=t.elements({data:V.idx,type:"uint16"});let De=Nt[B.Hips],Ae=us([1,0,0],-Math.PI/2),ho=Jn(p0([ri.x-De[12]*Lr,ri.hipY-De[14]*Lr,ri.z+De[13]*Lr],Ae,[1,1,1]),p0([0,0,0],[0,0,0,1],[Lr,Lr,Lr])),yo=new Array(D),Uo=-1,se=(V,mt,zt)=>Jn(p0([V,0,mt],us([0,1,0],zt),[1,1,1]),p0([0,0,0],[0,0,0,1],[Lr,Lr,Lr])),Se=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(V=>B[V]),Ge=Se.map(V=>Nt[V][13]*Lr);function ao(V){if(s&&s.walk)return uo(V);let mt=kk(V.phase),zt={},Et=Ee=>{for(let We in Ee){let $e=Ee[We],Ie=Vh($e[0],$e[1],$e[2]);zt[We]=zt[We]?an(zt[We],Ie):Ie}};Et(mt.swing),Et(mt.pose);let Qt=Math.cos(V.heading),oe=-Math.sin(V.heading),ee=se(V.x+Qt*mt.sway,V.z+oe*mt.sway,V.heading),Bt=new Array(D);for(let Ee=0;Ee<D;Ee++){let We=j[Ee],$e=Rt[Ee],Ie=zt[We.name];if(Ie){let no=bt[Ee],ze=an(K0(no),an(Ie,no));$e=p0(We.t,an(We.r,ze),We.s)}Bt[Ee]=We.parent<0?Jn(ee,$e):Jn(Bt[We.parent],$e)}let le=1/0;Se.forEach((Ee,We)=>{le=Math.min(le,Bt[Ee][13]-Ge[We])});for(let Ee=0;Ee<D;Ee++)Bt[Ee]=Bt[Ee].slice(),Bt[Ee][13]-=le,yo[Ee]=Jn(Bt[Ee],ut[Ee]);return{blink:0}}function uo(V){let mt=s.walk,zt=i(mt,(V.phase+mt.phase0)*mt.frames),Et=se(V.x,V.z,V.heading),Qt=new Array(D),oe=B.Hips;for(let Bt=0;Bt<D;Bt++){let le=j[Bt],Ee=Rt[Bt],We=zt.q[le.name];if(We){let $e=bt[Bt],Ie=an(K0($e),an(We,$e)),no=Bt===oe?[le.t[0]+zt.hips[0],le.t[1]+zt.hips[1],le.t[2]+zt.hips[2]]:le.t;Ee=p0(no,an(le.r,Ie),le.s)}Qt[Bt]=le.parent<0?Jn(Et,Ee):Jn(Qt[le.parent],Ee)}let ee=1/0;Se.forEach((Bt,le)=>{ee=Math.min(ee,Qt[Bt][13]-Ge[le])});for(let Bt=0;Bt<D;Bt++)Qt[Bt]=Qt[Bt].slice(),Qt[Bt][13]-=ee,yo[Bt]=Jn(Qt[Bt],ut[Bt]);return{blink:0}}function Ue(V,mt){let zt=Math.sin(V*2*Math.PI/4.6),Et=Math.sin(V*.37)*.6+Math.sin(V*.83+1)*.4,Qt={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+zt*.8,0,0],Spine2:[4+zt*.6,0,0],Neck:[10,0,0],Head:[12+Et*2,Et*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},oe={};for(let $e in Qt){let Ie=Qt[$e];oe[$e]=Vh(Ie[0],Ie[1],Ie[2])}let ee=se(mt.x,mt.z,mt.heading),Bt=new Array(D);for(let $e=0;$e<D;$e++){let Ie=j[$e],no=Rt[$e],ze=oe[Ie.name];if(ze){let go=bt[$e],$o=an(K0(go),an(ze,go));no=p0(Ie.t,an(Ie.r,$o),Ie.s)}Bt[$e]=Ie.parent<0?Jn(ee,no):Jn(Bt[Ie.parent],no)}let Ee=Bt[B.Hips][13]-(mt.y+.1);for(let $e=0;$e<D;$e++)Bt[$e]=Bt[$e].slice(),Bt[$e][13]-=Ee,yo[$e]=Jn(Bt[$e],ut[$e]);let We=V%4.1;return{blink:We<.16?Math.sin(We/.16*Math.PI):0}}let Le=V=>[Nt[V][12],Nt[V][13],Nt[V][14]],kt=(V,mt)=>{let zt=Kl(V),Et=Kl(ua(mt,hs(zt,_d(mt,zt)))),Qt=Qh(zt,Et);return wd([zt[0],zt[1],zt[2],0,Et[0],Et[1],Et[2],0,Qt[0],Qt[1],Qt[2],0,0,0,0,1])},ue={};for(let V of["Left","Right"]){let mt=B[V+"Arm"],zt=B[V+"ForeArm"],Et=B[V+"Hand"],Qt=B[V+"HandMiddle1"];ue[V]={a:mt,f:zt,h:Et,upper:Yh(ua(Le(zt),Le(mt)))*Lr,fore:Yh(ua(Le(Et),Le(zt)))*Lr,dir0:Kl(ua(Le(zt),Le(mt))),qf0:kt(ua(Le(Et),Le(zt)),[0,1,0]),qh0:kt(ua(Le(Qt),Le(Et)),[0,1,0])}}let ft={};for(let V of["Left","Right"])ft[ue[V].a]={side:V,part:0},ft[ue[V].f]={side:V,part:1},ft[ue[V].h]={side:V,part:2};function ct(V,mt,zt){if(!V||!V.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Et=0,Qt=V.length-1,oe=-1;for(;Et<=Qt;){let Wo=Et+Qt>>1;V[Wo].t<=mt?(oe=Wo,Et=Wo+1):Qt=Wo-1}let ee=V[V.length-1],Bt=V[0],le=oe>=0?V[oe]:{t:ee.t-zt,x:ee.x,w:ee.w},Ee=oe+1<V.length?V[oe+1]:{t:Bt.t+zt,x:Bt.x,w:Bt.w},We=Math.max(.05,Ee.t-le.t),$e=Math.min(.14,We*.45),Ie=Math.max(0,Math.min(1,(mt-le.t-$e)/Math.max(We-$e-.03,.02))),no=Ie*Ie*(3-2*Ie),ze=mt-le.t,go=(.55+.45*le.w)*Math.exp(-ze/.11),$o=Ee.t-mt,Oe=$o<.05?(.55+.45*Ee.w)*(1-$o/.05):0;return{x:le.x+(Ee.x-le.x)*no,lift:Math.sin(Math.PI*Ie)*Math.min(.05,.012+We*.03)*(We>2.5?.4:1),press:Math.max(go,Oe),finger:Oe>go?((oe+1)*7+3)%4:(Math.max(oe,0)*7+3)%4,busy:Math.exp(-ze/.9)}}let Q={lean:0,turn:0,nod:0,pedal:0,last:-1},ye=["Index","Middle","Ring","Pinky"];function k(V){let mt=cx.PLAY,zt=ox.cues,Et=ox.time(),Qt=zt&&zt.dur||158,oe={Left:ct(zt&&zt.left,Et,Qt),Right:ct(zt&&zt.right,Et,Qt)},ee=.35;if(zt&&zt.level&&zt.level.length){let lo=Et*8,ko=Math.floor(lo)%zt.level.length,jn=(ko+1)%zt.level.length;ee=zt.level[ko]+(zt.level[jn]-zt.level[ko])*(lo-Math.floor(lo))}let Bt=Q.last<0?0:Math.min(.1,Math.max(0,V-Q.last));Q.last=V;let le=lo=>Math.min(1,Bt*lo);Q.lean+=(ee-Q.lean)*le(1.2),Q.turn+=(oe.Right.busy-oe.Left.busy-Q.turn)*le(1.5),Q.nod+=(Math.max(oe.Right.press,oe.Left.press*.7)-Q.nod)*le(6),Q.pedal+=((oe.Left.busy>.35?1:.15)-Q.pedal)*le(5);let Ee=Math.sin(V*2*Math.PI/4.6),We=Math.sin(Et*.41)*.6+Math.sin(Et*.17+1)*.4,$e={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Q.pedal,0,0],Spine:[9+3.5*Q.lean+We*1.6,Q.turn*2.5,-Q.turn*1.6],Spine1:[7+Ee*.8+2.5*Q.lean,Q.turn*2.5,-Q.turn*1.2],Spine2:[6+Ee*.6+We*.8,Q.turn*1.5,0],Neck:[13+3*Q.lean,Q.turn*3,0],Head:[15+Q.nod*3.5+We*1.5,Q.turn*5,We*1.5]};for(let lo of["Left","Right"]){let ko=lo==="Left"?-1:1,jn=oe[lo];ye.forEach((X,xt)=>{let ne=xt===jn.finger?jn.press:jn.press*.2;$e[lo+"Hand"+X+"1"]=[0,0,ko*(20+3*xt+20*ne)],$e[lo+"Hand"+X+"2"]=[0,0,ko*(26+4*xt-6*ne)],$e[lo+"Hand"+X+"3"]=[0,0,ko*14]}),$e[lo+"HandThumb1"]=[0,ko*-18,ko*10]}let Ie={};for(let lo in $e){let ko=$e[lo];Ie[lo]=Vh(ko[0],ko[1],ko[2])}let no=Nt[B.Hips][13]*Lr,ze=Jn(p0([mt.stoolX,mt.stoolTop+.1-no,mt.stoolFront+.15],us([0,1,0],mt.heading),[1,1,1]),p0([0,0,0],[0,0,0,1],[Lr,Lr,Lr])),go=(mt.keyX0+mt.keyX1)/2,$o={};for(let lo of["Left","Right"]){let ko=oe[lo],jn=lo==="Left"?go-.4+.33*ko.x:go+.07+.33*ko.x;$o[lo]=[jn,mt.keyTop+.062+ko.lift-ko.press*.012,mt.keyFront+.075]}let Oe=new Array(D),Wo={},b0=[0,1,0];for(let lo=0;lo<D;lo++){let ko=j[lo],jn=Rt[lo],X=Ie[ko.name],xt=ft[lo];if(xt){let ne=ue[xt.side];if(xt.part===0){let ge=Oe[ko.parent],we=Jn(ge,Rt[lo]),hn=[we[12],we[13],we[14]],ur=an(wd(ge),K0(bt[ko.parent])),Or=ua($o[xt.side],hn),un=Yh(Or),Er=(ne.upper+ne.fore)*.995;un>Er&&(Or=hs(Or,Er/un),un=Er);let dn=hs(Or,1/un),bo=(ne.upper*ne.upper-ne.fore*ne.fore+un*un)/(2*un),nr=Math.sqrt(Math.max(0,ne.upper*ne.upper-bo*bo)),Jo=[xt.side==="Left"?-.6:.6,-.8,.3];Jo=Kl(ua(Jo,hs(dn,_d(Jo,dn))));let Wn=Ql(hn,Ql(hs(dn,bo),hs(Jo,nr)));ne.T=Ql(hn,Or),ne.elbow=Wn;let Xr=Kl(ua(Wn,hn)),Yr=an(Mk(_k(ur,ne.dir0),Xr),ur);Wo[lo]=Yr,X=an(K0(ur),Yr)}else if(xt.part===1){let ge=an(kt(ua(ne.T,ne.elbow),b0),K0(ne.qf0));Wo[lo]=ge,X=an(K0(Wo[ko.parent]),ge)}else{let ge=oe[xt.side],we=an(kt([xt.side==="Left"?.12:-.12,-.2-.1*ge.press,-1],b0),K0(ne.qh0));Wo[lo]=we,X=an(K0(Wo[ko.parent]),we)}}if(X){let ne=bt[lo],ge=an(K0(ne),an(X,ne));jn=p0(ko.t,an(ko.r,ge),ko.s)}Oe[lo]=ko.parent<0?Jn(ze,jn):Jn(Oe[ko.parent],jn)}for(let lo=0;lo<D;lo++)yo[lo]=Jn(Oe[lo],ut[lo]);a.pianist={head:[Oe[B.Head][12],Oe[B.Head][13],Oe[B.Head][14]]};let ma=V%4.3;return{blink:ma<.16?Math.sin(ma/.16*Math.PI):0}}function Jt(V,mt){if(S)return k(V);if(_)return Ue(V,_);if(mt)return ao(mt);let zt=Math.sin(V*2*Math.PI/4.2),Et=V%3.7,Qt=Et<.16?Math.sin(Et/.16*Math.PI):0,oe=Math.sin(V*.45),ee=Math.sin(V*.31+.8),Bt=Math.max(0,Math.sin(V*.085)-.75)*4,le={RightArm:[0,-22*Bt,11*oe],RightForeArm:[0,8+26*Bt,0],RightHand:[38*ee,0,6*Math.sin(V*.7)],LeftUpLeg:[0,0,3.2*Math.sin(V*.36)],RightFoot:[5*Math.sin(V*.52+.4),0,0],Head:[0,1.6*Math.sin(V*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ze,go)=>{let $o=Math.sin(V*1.1-go*.5);le["RightHand"+ze+"1"]=[0,0,8+12*$o],le["RightHand"+ze+"2"]=[0,0,6+10*$o]});let Ee={},We=(ze,go)=>{for(let $o in ze){let Oe=ze[$o],Wo=Vh(Oe[0]*go,Oe[1]*go,Oe[2]*go);Ee[$o]=Ee[$o]?an(Ee[$o],Wo):Wo}};We(Kh,1),We({Spine1:[zt*.8,0,0],Spine2:[zt*.6,0,0]},1),We(le,1);let $e=new Array(D),Ie=new Array(D);for(let ze=0;ze<D;ze++){let go=j[ze],$o=Rt[ze],Oe=Ee[go.name];if(Oe){let Wo=bt[ze],b0=an(K0(Wo),an(Oe,Wo));$o=p0(go.t,an(go.r,b0),go.s)}$e[ze]=go.parent<0?Jn(ho,$o):Jn($e[go.parent],$o),Ie[ze]=null}for(let ze=0;ze<D;ze++)yo[ze]=Jn($e[ze],ut[ze]);let no=ze=>[ze[12],ze[13],ze[14]];return a.headPos=no($e[B.Head]),a.hipsPos=no($e[B.Hips]),a.headM=$e[B.Head],{blink:Qt}}function Wt(V,mt){let{pos:zt,nrm:Et,jnt:Qt,wgt:oe,outP:ee,outN:Bt,work:le,m:Ee}=V,We=Ee.n,$e=zt;if(mt){le.set(zt);for(let Ie in V.morphs){let no=mt[Ie]||0;if(no<=0)continue;let ze=V.morphs[Ie];for(let go=0;go<ze.idx.length;go++){let $o=ze.idx[go]*3;le[$o]+=ze.d[go*3]*no,le[$o+1]+=ze.d[go*3+1]*no,le[$o+2]+=ze.d[go*3+2]*no}}$e=le}for(let Ie=0;Ie<We;Ie++){let no=$e[Ie*3],ze=$e[Ie*3+1],go=$e[Ie*3+2],$o=Et[Ie*3],Oe=Et[Ie*3+1],Wo=Et[Ie*3+2],b0=0,ma=0,lo=0,ko=0,jn=0,X=0;for(let ne=0;ne<4;ne++){let ge=oe[Ie*4+ne];if(ge===0)continue;let we=yo[Qt[Ie*4+ne]];b0+=ge*(we[0]*no+we[4]*ze+we[8]*go+we[12]),ma+=ge*(we[1]*no+we[5]*ze+we[9]*go+we[13]),lo+=ge*(we[2]*no+we[6]*ze+we[10]*go+we[14]),ko+=ge*(we[0]*$o+we[4]*Oe+we[8]*Wo),jn+=ge*(we[1]*$o+we[5]*Oe+we[9]*Wo),X+=ge*(we[2]*$o+we[6]*Oe+we[10]*Wo)}ee[Ie*3]=b0,ee[Ie*3+1]=ma,ee[Ie*3+2]=lo;let xt=Math.hypot(ko,jn,X)||1;Bt[Ie*3]=ko/xt,Bt[Ie*3+1]=jn/xt,Bt[Ie*3+2]=X/xt}Ee.grid&&!Re&&!_&&!S&&Te(V),V.sway&&gn(V),V.pb.subdata(ee),V.nbuf.subdata(Bt)}function Te(V){let[mt,zt]=V.m.grid,Et=V.outP,Qt=V.outN,oe=sx.seat+.012;for(let ee=1;ee<mt;ee++){let Bt=Math.pow(1-ee/(mt-1),1.5);for(let le=0;le<zt;le++){let Ee=(ee*zt+le)*3;Et[Ee+1]>oe?Et[Ee+1]=oe+(Et[Ee+1]-oe)*Math.max(Bt,.15):Et[Ee+1]=oe}}for(let ee=0;ee<Qt.length;ee+=3)Qt[ee]=0,Qt[ee+1]=1,Qt[ee+2]=0}let Re=!1,eo=(V,mt,zt,Et,Qt)=>({bone:B[V],rate:mt,damp:zt,drag:Et,most:Qt,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),zo={head:eo("Head",15,.32,.012,.035),chest:eo("Spine2",9,.38,.03,.1),hips:eo("Hips",7,.42,.045,.16)},wo=-1;function Xo(V){let mt=wo<0?0:V-wo;wo=V;for(let zt in zo){let Et=zo[zt],Qt=yo[Et.bone],oe=Nt[Et.bone],ee=oe[12],Bt=oe[13],le=oe[14],Ee=[Qt[0]*ee+Qt[4]*Bt+Qt[8]*le+Qt[12],Qt[1]*ee+Qt[5]*Bt+Qt[9]*le+Qt[13],Qt[2]*ee+Qt[6]*Bt+Qt[10]*le+Qt[14]];if(!Et.p||!(mt>0)||mt>.25||Math.hypot(Ee[0]-Et.p[0],Ee[1]-Et.p[1],Ee[2]-Et.p[2])>.5){Et.p=Ee,Et.x=[0,0,0],Et.v=[0,0,0],Et.vel=[0,0,0];continue}let We=[(Ee[0]-Et.p[0])/mt,(Ee[1]-Et.p[1])/mt,(Ee[2]-Et.p[2])/mt],$e=Math.max(1,Math.ceil(mt/.016)),Ie=mt/$e;for(let ze=0;ze<3;ze++){let go=Math.max(-30,Math.min(30,(We[ze]-Et.vel[ze])/mt)),$o=-We[ze]*Et.drag;for(let Oe=0;Oe<$e;Oe++)Et.v[ze]+=(($o-Et.x[ze])*Et.rate*Et.rate-2*Et.damp*Et.rate*Et.v[ze]-go)*Ie,Et.x[ze]+=Et.v[ze]*Ie}let no=Math.hypot(Et.x[0],Et.x[1],Et.x[2]);if(no>Et.most){let ze=Et.most/no;Et.x=[Et.x[0]*ze,Et.x[1]*ze,Et.x[2]*ze]}Et.p=Ee,Et.vel=We}}for(let V of rt){let mt=V.m,zt=mt.n,Et=null,Qt=null;if(mt.kind===9){Qt="head",Et=new Float32Array(zt);for(let oe=0;oe<zt;oe++){let ee=V.uv[oe*2]<-.5?0:V.uv[oe*2+1];Et[oe]=ee*ee}}else if(mt.name==="scarf"){Qt="chest",Et=new Float32Array(zt);for(let oe=0;oe<zt;oe++)Et[oe]=l(1.52,1.12,V.pos[oe*3+1])}else if(mt.grid){Qt="hips",Et=new Float32Array(zt);let oe=mt.grid[0],ee=mt.grid[1];for(let Bt=0;Bt<zt;Bt++)Et[Bt]=Math.pow(Math.floor(Bt/ee)/(oe-1),1.6)}Et&&(V.sway=Et,V.spring=zo[Qt],V.loose=Qt)}function gn(V){if(!Re&&!S&&!_)return;let mt=V.spring.x,zt=V.sway,Et=V.outP;if(!(Math.abs(mt[0])+Math.abs(mt[1])+Math.abs(mt[2])<1e-5))for(let Qt=0,oe=zt.length;Qt<oe;Qt++){let ee=zt[Qt];ee>0&&(Et[Qt*3]+=mt[0]*ee,Et[Qt*3+1]+=mt[1]*ee,Et[Qt*3+2]+=mt[2]*ee)}}function on(V,mt){Re=!!mt;let zt=Jt(V,mt);Xo(V);let Et={eyeBlinkLeft:zt.blink,eyeBlinkRight:zt.blink};for(let Qt of rt)Wt(Qt,Object.keys(Qt.morphs).length?Et:null);a.pose=zt}return{parts:rt,update:on,drawOpaque:qt,drawBlend:xe,state:a}}function l(N,G,F){let j=Math.min(1,Math.max(0,(F-N)/(G-N)));return j*j*(3-2*j)}let u=Ek(),d=zk(),p=d?t.texture({data:d,flipY:!1,min:"linear",mag:"linear"}):c,f=t({vert:Ak,frag:Tk,attributes:{position:u.pos,normal:u.nrm,uv:u.uv,kind:u.kind},elements:new Uint16Array(u.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),v=Lk(),m=t({vert:Nk,frag:Rk,attributes:{position:v.pos,normal:v.nrm,color:v.col,mat:v.mat},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:Ok,frag:Ck,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(N){let G=N.headM,F=rt=>{let qt=Math.hypot(...rt)||1;return rt.map(xe=>xe/qt)},j=F([G[4],G[5],G[6]]),D=F([G[8],G[9],G[10]]),B=j,ut=D.map(rt=>-rt),Rt=[ut[1]*B[2]-ut[2]*B[1],ut[2]*B[0]-ut[0]*B[2],ut[0]*B[1]-ut[1]*B[0]],Nt=N.headPos,bt=[0,1,2].map(rt=>Nt[rt]+j[rt]*.06+D[rt]*.185);return[Rt[0],Rt[1],Rt[2],0,ut[0],ut[1],ut[2],0,B[0],B[1],B[2],0,bt[0],bt[1],bt[2],1]}let b=-1,w="",M=null,_=null,S=!1;function O(N){if(!o)return;let G=(ex.motion,r()),F=M?[M.x,M.z,M.heading,M.phase].map(D=>D.toFixed(4)).join():"";(_||S||F!==w||!M&&Math.abs(G-b)>(ex.isPhone?1/30:0))&&(o.update(G,M),b=G,w=F);for(let D of o.parts)D.blend||(o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale}),D.sockEl&&o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let j=o.state;if(j.headM&&!M&&!_&&!S){f({model:x(j)});let D=j.headPos,B=Math.sin(G*1.3)*.02,ut=[D[0],D[1]+.62+B,D[2]+.05],Rt=G*.6,Nt=p0(ut,an(us([0,1,0],Rt),us([0,0,1],.18)),[1.2,1.2,1.2]),bt=.5+.5*Math.sin(G*2);m({model:Nt,pulse:bt}),a.glowPos=ut,a.glow=.06+.03*bt,g({center:[ut[0],ut[1]-.12,ut[2]],size:.1,pulse:bt})}for(let D of o.parts)D.blend&&o.drawBlend({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale})}return O.state=a,O.place=ri,O.setWalk=N=>{M=N||null,M&&(a.glow=0)},O.setSeat=N=>{_=N||null,a.glow=_?0:a.glow,b=-1},O.setPiano=N=>{N=!!N,N!==S&&(S=N,S&&(a.glow=0),b=-1)},O};Sd.exports.PLACE=ri});var Ed=Mt((bA,hx)=>{"use strict";hx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Ad=Mt((wA,gx)=>{"use strict";var vx=S0(),ux=fl(),ds=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function zd(){return vx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Pk=`
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
`,dx=!1;function mx(){if(dx)return;dx=!0;let t=document.createElement("style");t.textContent=Pk,document.head.appendChild(t)}var $k='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Ik(t){return!t||!t.visit||!zd()?"":(mx(),`<button type="button" class="visit-btn" data-visit="${ds(t.slug||"")}" aria-label="Visit what remained: watch ${ds(t.title)} come to life">${$k}<span>Visit what remained</span></button>`)}function Fk(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let h=Math.random()*255;i[c]=i[c+1]=i[c+2]=h,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Zl=null;function qk(t){if(Zl||!t||!t.visit)return;mx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(vx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+t.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${ds(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${ds(t.title)}, ${ds(ux(t))}" src="${ds(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${ds(t.title)}</span>
			<span class="visit-meta">${ds(ux(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=Fk(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),h=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,h));let l=m=>{m.key==="Escape"?(m.preventDefault(),v()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),p()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let u=m=>m.stopImmediatePropagation();window.addEventListener("keyup",u,!0);let d=!1;function p(){d||(d=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function f(){d=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>p()),n.classList.add("playing"),c(()=>{d||a.classList.add("on")},1600),c(()=>{d||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&p()}),r.addEventListener("ended",p),r.addEventListener("error",p);function v(){if(Zl){Zl=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",u,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",v),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}p()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&v(),g.dataset.act==="again"&&(i.forEach(clearTimeout),f()))}),r.src=t.visit.video,Zl={close:v},requestAnimationFrame(()=>{n.classList.add("on"),c(f,1300)})}var px={};function Dk(t){if(!t||!t.visit||px[t.visit.video]||!zd())return;px[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}gx.exports={available:zd,button:Ik,open:qk,warm:Dk,get active(){return!!Zl}}});var bx=Mt((_A,yx)=>{"use strict";var Gk=S0(),kc=[0,0],bc=[0,0],Ca=null,Ld=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(kc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),kc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),Ld=performance.now())},{passive:!0});let t=()=>{Ld=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(Ca||(Ca=[e.gamma,e.beta]),Ca[0]+=(e.gamma-Ca[0])*.01,Ca[1]+=(e.beta-Ca[1])*.01,kc[0]=Math.max(-1,Math.min(1,(e.gamma-Ca[0])/14)),kc[1]=Math.max(-1,Math.min(1,(e.beta-Ca[1])/14)))},{passive:!0})}var xx=0,wc=null,Jh=null,da=[0,0,0],Td=0,_c=null,Mc=0,ai={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Hk={apply(t,e){let o=Math.min(.1,Math.max(0,e-xx));xx=e;let n=t.eye,r=t.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let h=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!wc;if(wc&&o>0){let b=[n[0]-wc[0],n[1]-wc[1],n[2]-wc[2]],w=Math.hypot(b[0],b[1],b[2]);if(w>2.5)l=!0;else{let _=Math.min(1,o*5);for(let S=0;S<3;S++)da[S]+=(b[S]/o-da[S])*_}let M=Math.hypot(r[0]-Jh[0],r[1]-Jh[1],r[2]-Jh[2]);Mc=w/o<.12&&M/o<.2?Mc+o:0}l&&(da[0]=da[1]=da[2]=0,Mc=0),wc=n.slice(),Jh=r.slice(),Td=Math.hypot(da[0],da[1],da[2]);let u=Math.min(1,o*2.6);bc[0]+=(kc[0]-bc[0])*u,bc[1]+=(kc[1]-bc[1])*u;let d=Math.max(.03,Math.min(.32,s*.05)),p=(Gk.isPhone&&!Ca?1.5:1)*Math.min(1,Mc/2.5),f=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*d*.55*p,v=Math.sin(e*.097+.6)*d*.16*p,m=bc[0]*d+f,g=-bc[1]*d*.45+v;for(let b=0;b<3;b++)ai.eye[b]=n[b]+i[b]*m+h[b]*g,ai.target[b]=r[b]+(i[b]*m+h[b]*g)*.12;n[1]>.05&&(ai.eye[1]=Math.max(.05,ai.eye[1]));let x=da[0]*i[0]+da[2]*i[2];return ai.fov=t.fov+Math.min(3.5,Td*.55),ai.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),ai},pull(t,e){(_c===null||!(Math.abs(t.focus-_c)<40))&&(_c=t.focus);let o=1/60;_c+=(t.focus-_c)*Math.min(1,o*3.2),t.focus=_c,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,Mc/3))},get speed(){return Td},get resting(){return Mc>2&&performance.now()-Ld>2e3}};yx.exports=Hk});var Nd=Mt((MA,wx)=>{wx.exports=1e-6});var Rd=Mt((kA,_x)=>{_x.exports=Uk;function Uk(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var kx=Mt((SA,Mx)=>{Mx.exports=Bk;function Bk(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Od=Mt((EA,Sx)=>{Sx.exports=jk;function jk(t,e,o){var n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=o,n}});var Cd=Mt((zA,Ex)=>{Ex.exports=Wk;function Wk(t,e){var o=e[0],n=e[1],r=e[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var Pd=Mt((AA,zx)=>{zx.exports=Vk;function Vk(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var Nx=Mt((TA,Lx)=>{Lx.exports=Yk;var Ax=Od(),Tx=Cd(),Xk=Pd();function Yk(t,e){var o=Ax(t[0],t[1],t[2]),n=Ax(e[0],e[1],e[2]);Tx(o,o),Tx(n,n);var r=Xk(o,n);return r>1?0:Math.acos(r)}});var Ox=Mt((LA,Rx)=>{Rx.exports=Kk;function Kk(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Px=Mt((NA,Cx)=>{Cx.exports=Qk;function Qk(t,e,o,n){return t[0]=e,t[1]=o,t[2]=n,t}});var Ix=Mt((RA,$x)=>{$x.exports=Zk;var $d=Nd();function Zk(t,e){var o=t[0],n=t[1],r=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=$d*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=$d*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=$d*Math.max(1,Math.abs(r),Math.abs(i))}});var qx=Mt((OA,Fx)=>{Fx.exports=Jk;function Jk(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var Gx=Mt((CA,Dx)=>{Dx.exports=tS;function tS(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var Id=Mt((PA,Hx)=>{Hx.exports=eS;function eS(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Bx=Mt(($A,Ux)=>{Ux.exports=Id()});var Fd=Mt((IA,jx)=>{jx.exports=oS;function oS(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Vx=Mt((FA,Wx)=>{Wx.exports=Fd()});var qd=Mt((qA,Xx)=>{Xx.exports=nS;function nS(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Kx=Mt((DA,Yx)=>{Yx.exports=qd()});var Zx=Mt((GA,Qx)=>{Qx.exports=rS;function rS(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var ty=Mt((HA,Jx)=>{Jx.exports=aS;function aS(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var oy=Mt((UA,ey)=>{ey.exports=sS;function sS(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var ry=Mt((BA,ny)=>{ny.exports=iS;function iS(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var sy=Mt((jA,ay)=>{ay.exports=cS;function cS(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var cy=Mt((WA,iy)=>{iy.exports=lS;function lS(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var fy=Mt((VA,ly)=>{ly.exports=fS;function fS(t,e,o,n){return t[0]=e[0]+o[0]*n,t[1]=e[1]+o[1]*n,t[2]=e[2]+o[2]*n,t}});var Dd=Mt((XA,hy)=>{hy.exports=hS;function hS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(o*o+n*n+r*r)}});var dy=Mt((YA,uy)=>{uy.exports=Dd()});var Gd=Mt((KA,py)=>{py.exports=uS;function uS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return o*o+n*n+r*r}});var my=Mt((QA,vy)=>{vy.exports=Gd()});var Hd=Mt((ZA,gy)=>{gy.exports=dS;function dS(t){var e=t[0],o=t[1],n=t[2];return Math.sqrt(e*e+o*o+n*n)}});var yy=Mt((JA,xy)=>{xy.exports=Hd()});var Ud=Mt((tT,by)=>{by.exports=pS;function pS(t){var e=t[0],o=t[1],n=t[2];return e*e+o*o+n*n}});var _y=Mt((eT,wy)=>{wy.exports=Ud()});var ky=Mt((oT,My)=>{My.exports=vS;function vS(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var Ey=Mt((nT,Sy)=>{Sy.exports=mS;function mS(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var Ay=Mt((rT,zy)=>{zy.exports=gS;function gS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=r*c-a*i,t[1]=a*s-n*c,t[2]=n*i-r*s,t}});var Ly=Mt((aT,Ty)=>{Ty.exports=xS;function xS(t,e,o,n){var r=e[0],a=e[1],s=e[2];return t[0]=r+n*(o[0]-r),t[1]=a+n*(o[1]-a),t[2]=s+n*(o[2]-s),t}});var Ry=Mt((sT,Ny)=>{Ny.exports=yS;function yS(t,e){e=e||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t[2]=n*e,t}});var Cy=Mt((iT,Oy)=>{Oy.exports=bS;function bS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,t[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,t[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,t}});var $y=Mt((cT,Py)=>{Py.exports=wS;function wS(t,e,o){var n=e[0],r=e[1],a=e[2];return t[0]=n*o[0]+r*o[3]+a*o[6],t[1]=n*o[1]+r*o[4]+a*o[7],t[2]=n*o[2]+r*o[5]+a*o[8],t}});var Fy=Mt((lT,Iy)=>{Iy.exports=_S;function _S(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2],h=o[3],l=h*n+i*a-c*r,u=h*r+c*n-s*a,d=h*a+s*r-i*n,p=-s*n-i*r-c*a;return t[0]=l*h+p*-s+u*-c-d*-i,t[1]=u*h+p*-i+d*-s-l*-c,t[2]=d*h+p*-c+l*-i-u*-s,t}});var Dy=Mt((fT,qy)=>{qy.exports=MS;function MS(t,e,o,n){var r=o[1],a=o[2],s=e[1]-r,i=e[2]-a,c=Math.sin(n),h=Math.cos(n);return t[0]=e[0],t[1]=r+s*h-i*c,t[2]=a+s*c+i*h,t}});var Hy=Mt((hT,Gy)=>{Gy.exports=kS;function kS(t,e,o,n){var r=o[0],a=o[2],s=e[0]-r,i=e[2]-a,c=Math.sin(n),h=Math.cos(n);return t[0]=r+i*c+s*h,t[1]=e[1],t[2]=a+i*h-s*c,t}});var By=Mt((uT,Uy)=>{Uy.exports=SS;function SS(t,e,o,n){var r=o[0],a=o[1],s=e[0]-r,i=e[1]-a,c=Math.sin(n),h=Math.cos(n);return t[0]=r+s*h-i*c,t[1]=a+s*c+i*h,t[2]=e[2],t}});var Wy=Mt((dT,jy)=>{jy.exports=ES;var ps=Rd()();function ES(t,e,o,n,r,a){var s,i;for(e||(e=3),o||(o=0),n?i=Math.min(n*e+o,t.length):i=t.length,s=o;s<i;s+=e)ps[0]=t[s],ps[1]=t[s+1],ps[2]=t[s+2],r(ps,ps,a),t[s]=ps[0],t[s+1]=ps[1],t[s+2]=ps[2];return t}});var Xy=Mt((pT,Vy)=>{Vy.exports={EPSILON:Nd(),create:Rd(),clone:kx(),angle:Nx(),fromValues:Od(),copy:Ox(),set:Px(),equals:Ix(),exactEquals:qx(),add:Gx(),subtract:Id(),sub:Bx(),multiply:Fd(),mul:Vx(),divide:qd(),div:Kx(),min:Zx(),max:ty(),floor:oy(),ceil:ry(),round:sy(),scale:cy(),scaleAndAdd:fy(),distance:Dd(),dist:dy(),squaredDistance:Gd(),sqrDist:my(),length:Hd(),len:yy(),squaredLength:Ud(),sqrLen:_y(),negate:ky(),inverse:Ey(),normalize:Cd(),dot:Pd(),cross:Ay(),lerp:Ly(),random:Ry(),transformMat4:Cy(),transformMat3:$y(),transformQuat:Fy(),rotateX:Dy(),rotateY:Hy(),rotateZ:By(),forEach:Wy()}});var Qy=Mt((vT,Ky)=>{"use strict";function Yy(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(n=>n(o))}}}Ky.exports=function(e){let o=e.ownerDocument||document,n=Yy(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let u=l.call(e);u&&u.catch&&u.catch(()=>{})}catch(u){}};e.addEventListener("mousedown",c,!1);let h=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=Yy(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",h),o.addEventListener("webkitpointerlockchange",h),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||e).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var ob=Mt((xT,eb)=>{"use strict";var si=rc(),ii=Xy(),zS=Qy(),mT=Math.PI/4,gT=Math.PI/6,Zy=2,AS=1,TS=2.4,LS=2.4,NS=1e3,RS=5,OS=7,Bd=_r().C,Jl=[[7,1.6],[7,Bd.zc],[Bd.x1-2.95,Bd.zc]],vs=Jl.slice(1).map((t,e)=>{let o=Jl[e],n=t[0]-o[0],r=t[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),jd=vs.reduce((t,e)=>t+e.len,0);function Jy(t){let e=Math.max(0,Math.min(jd,t));for(let n of vs){if(e<=n.len)return[n.a[0]+n.dir[0]*e,n.a[1]+n.dir[1]*e];e-=n.len}let o=Jl[Jl.length-1];return[o[0],o[1]]}function CS(t){let e=0;for(let n=0;n<vs.length;n++){let r=vs[n],a=e+r.len;if(t<a-1e-4||n===vs.length-1){let s=r.dir,c=t<=e+1e-4&&n>0?vs[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=vs[vs.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var PS=Math.PI/4,$S=7,IS=140,FS=70,tb=(t,e,o)=>(1-t)*e+t*o,qS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;eb.exports=function({getGridSegments:t,getGridParts:e},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[OS,Zy,Jl[0][1]],c=0,h=1,l=0,u=[.707,0,.707],d=[0,1,0],p=[0,0,0],f=.5,v=si.identity([]),m=si.identity([]),g=!1,x=[0,0,0],b=[0,0,0],w=1,M=!1;let _=se=>{n[1]+=se*PS},S=(se,Se,Ge)=>{if(se=Math.max(Math.min(se,100),-100),Se=Math.max(Math.min(Se,100),-100),n[0]=0,M){a=0;return}for(a+=se;a>=Ge;)_(1),a-=Ge;for(;a<=-Ge;)_(-1),a+=Ge};zS(document.body).on("attain",se=>{se.on("data",Se=>{S(Se.dx,Se.dy,IS)})});let N=null,G=null,F=0,j={x:0,y:0},D=58,B=document.createElement("div");B.id="museum-mobile-controls",B.innerHTML=`

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
	`,document.body.appendChild(B);let ut=B.querySelector("#museum-joystick"),Rt=B.querySelector("#museum-joystick-knob"),Nt=()=>{Rt.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},bt=se=>{let Se=se.clientX-j.x,Ge=se.clientY-j.y,ao=Math.hypot(Se,Ge);if(ao>D&&(Se=Se/ao*D,Ge=Ge/ao*D),Rt.style.transform=`translate(
				calc(-50% + ${Se}px),
				calc(-50% + ${Ge}px)
			)`,ao<10){s[0]=0,s[2]=0;return}let Ue=Se/D,Le=Ge/D;s[0]=0,s[2]=Math.abs(Le)>.15?Le:0},rt=(se,Se)=>{for(let Ge=0;Ge<se.length;Ge++)if(se[Ge].identifier===Se)return se[Ge];return null},qt=se=>!!(se&&se.closest&&se.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),xe=se=>{if(!qt(se.target)&&(se.cancelable&&se.preventDefault(),!M))for(let Se=0;Se<se.changedTouches.length;Se++){let Ge=se.changedTouches[Se];if(N===null&&Ge.clientX<window.innerWidth*.48){N=Ge.identifier;let ao=ut.getBoundingClientRect();j.x=ao.left+ao.width/2,j.y=ao.top+ao.height/2,bt(Ge)}else G===null&&Ge.clientX>=window.innerWidth*.48&&(G=Ge.identifier,F=Ge.clientX,a=0)}},he=se=>{if(qt(se.target)||(se.cancelable&&se.preventDefault(),M))return;let Se=N===null?null:rt(se.touches,N);Se&&bt(Se);let Ge=G===null?null:rt(se.touches,G);if(Ge){let ao=Ge.clientX-F;F=Ge.clientX,S(ao,0,FS)}},De=se=>{if(!qt(se.target)){se.cancelable&&se.preventDefault();for(let Se=0;Se<se.changedTouches.length;Se++){let Ge=se.changedTouches[Se];Ge.identifier===N&&(N=null,Nt()),Ge.identifier===G&&(G=null)}}};document.addEventListener("touchstart",xe,{passive:!1}),document.addEventListener("touchmove",he,{passive:!1}),document.addEventListener("touchend",De,{passive:!1}),document.addEventListener("touchcancel",De,{passive:!1});let Ae=document.createElement("style");Ae.textContent=`

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
	`,document.head.appendChild(Ae);var ho={};let yo=se=>{if(se.defaultPrevented||se.ctrlKey||se.altKey||se.metaKey)return;let Se=se.type==="keydown";ho[se.code]=Se,Se&&!se.repeat&&!M&&((se.code==="KeyA"||se.code==="ArrowLeft")&&_(-1),(se.code==="KeyD"||se.code==="ArrowRight")&&_(1)),g=!1;let Ge=ho.KeyW||ho.ArrowUp?1:0;s=[0,0,(ho.KeyS||ho.ArrowDown?1:0)-Ge],se.preventDefault()};window.addEventListener("keydown",yo),window.addEventListener("keyup",yo);var Uo=0;return{pos:i,fmouse:r,forward:u,up:d,setPaused:se=>{M=!!se,M&&(s[0]=0,s[2]=0,Nt())},place:(se,Se)=>{c=Math.max(0,Math.min(jd,se));let Ge=Jy(c);i[0]=Ge[0],i[2]=Ge[1],n[1]=Se,r[1]=Se,a=0,h=1},view:()=>v,proj:()=>(si.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:se})=>{let Se=se-Uo;Uo=se;let Ge=[0,0,0],ao=[];ii.set(u,Math.sin(r[1]),0,-Math.cos(r[1])),ii.set(d,0,1,0);let uo=g?LS:TS,Ue=Math.sin(n[1]),Le=-Math.cos(n[1]),kt=CS(c),ue=Ue*kt.ahead[0]+Le*kt.ahead[1],ft=Ue*kt.back[0]+Le*kt.back[1],ct=h;Math.max(ue,ft)>.3&&(ct=ue>=ft?1:-1);let Q=M?0:-s[2]*uo;l+=(Q-l)*(1-Math.exp(-Math.min(Se,.1)*5.5)),Q===0&&Math.abs(l)<.01&&(l=0);let ye=l*ct*Math.min(Se,.1);M&&(s[0]=0,s[2]=0,ye=0,l=0),ye!==0&&(h=Math.sign(ye)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(jd,c+ye));let k=Jy(c);ii.set(p,k[0]-i[0],0,k[1]-i[2]);let Jt=ii.len(p);Jt===0&&f!==.25&&(f=(Math.abs((f+.5)%1-.5)-.25)*.8+.25,(f+.01)%.25<.02&&(f=.25));let Wt=f;if(f+=Jt/(g?RS:NS),i[1]=Zy,ii.add(i,i,p),w<1){w+=Se/AS,w=Math.min(w,1);let Te=qS(w);ii.set(i,tb(Te,x[0],b[0]),i[1],tb(Te,x[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(Se,.1)*$S),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),si.identity(v),si.rotateX(v,v,0),si.rotateY(v,v,r[1]),si.translate(v,v,ii.scale(Ge,i,-1))}}}});var ab=Mt((yT,rb)=>{"use strict";var{skylightGLSL:DS,Z_START:GS,Z_END:HS,GLASS_Y:US}=Wi(),{oculusGLSL:BS,A:ci}=A0(),{windowLightGLSL:jS,C:t1}=_r(),{doorLightGLSL:WS}=ja(),e1=ir(),tf=Ah(),nb=Ws(),R0=t=>t.toFixed(4),Wd=.1,Vd=700,Sc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function VS(t,e){let o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],l=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],x=o*i-n*s,b=o*c-r*s,w=o*h-a*s,M=n*c-r*i,_=n*h-a*i,S=r*h-a*c,O=l*v-u*f,N=l*m-d*f,G=l*g-p*f,F=u*m-d*v,j=u*g-p*v,D=d*g-p*m,B=x*D-b*j+w*F+M*G-_*N+S*O;return B?(B=1/B,t[0]=(i*D-c*j+h*F)*B,t[1]=(r*j-n*D-a*F)*B,t[2]=(v*S-m*_+g*M)*B,t[3]=(d*_-u*S-p*M)*B,t[4]=(c*G-s*D-h*N)*B,t[5]=(o*D-r*G+a*N)*B,t[6]=(m*w-f*S-g*b)*B,t[7]=(l*S-d*w+p*b)*B,t[8]=(s*j-i*G+h*O)*B,t[9]=(n*G-o*j-a*O)*B,t[10]=(f*_-v*w+g*x)*B,t[11]=(u*w-l*_-p*x)*B,t[12]=(i*N-s*F-c*O)*B,t[13]=(o*F-n*N+r*O)*B,t[14]=(v*b-f*M-m*x)*B,t[15]=(l*M-u*b+d*x)*B,t):null}function XS(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)t[r]=n[r];return t}var YS=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;rb.exports=(t,e)=>{let o=!!e.isPhone,n=t.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>e.post>=2?2:4,s=rt=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},rt||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),h=n?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:h||!0}),u=[i(),i()],d=[i(),i()],p=[i(),i()],f=[i(),i()],v=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},w=(rt,qt,xe)=>t(Object.assign({vert:YS,frag:rt,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:qt,framebuffer:t.prop("out")},xe||{})),M=[2.6,0,GS-3.2,12.6,US,HS+.4],_=[ci.x0-.2,0,ci.z0,ci.x1,ci.domeTop,ci.z1],S=[t1.x0,0,t1.z0,t1.x1,7.6,t1.z1],O=[.35,0,.35,13.65,7.6,9],N=nb.AIR_BOX,G=rt=>`vec3(${R0(rt[0])}, ${R0(rt[1])}, ${R0(rt[2])}), vec3(${R0(rt[3])}, ${R0(rt[4])}, ${R0(rt[5])})`,F=w(`
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

	${DS()}
	${BS()}
	${jS()}
	${WS()}
	${nb.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${G(M)});
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
			vec2 t = hitBox(eye, rd, ${G(_)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${R0(ci.dome.base)} && p.x > ${R0(ci.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${G(S)});
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
			vec2 t = hitBox(eye, rd, ${G(O)});
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
			vec2 t = hitBox(eye, rd, ${G(N)});
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
	}`,{depthTex:()=>h,invVP:()=>v,eye:()=>g,time:t.context("time"),night:()=>e1.night,strength:()=>j,strength5:()=>D}),j=[0,0,0,0],D=0;function B(){let rt=Sc.shafts*x.shafts,qt=e1.night;return j[0]=tf.box(M)?.06*rt*(1+.9*qt):0,j[1]=tf.box(_,!1,"court")?.1*rt*(1+.9*qt):0,j[2]=tf.box(S)?.07*rt*(1+.4*qt):0,j[3]=tf.box(O)?.04*rt*(1-.75*qt):0,tf.zone==="studio"?(j[0]=j[1]=j[2]=j[3]=0,D=.03*rt*(1+1.3*qt)):D=0,j[0]+j[1]+j[2]+j[3]+D>5e-4}let ut=w(`
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
	}`,{src:t.prop("src"),dir:(rt,qt)=>[qt.dir[0]/qt.size[0],qt.dir[1]/qt.size[1]]}),Rt=w(`
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
	}`,{src:t.prop("src"),texel:(rt,qt)=>[.5/qt.size[0],.5/qt.size[1]],threshold:t.prop("threshold")}),Nt=w(`
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
		return 2.0 * ${R0(Wd)} * ${R0(Vd)} / (${R0(Vd+Wd)} - z * ${R0(Vd-Wd)});
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
	}`,{scene:()=>c,depthTex:()=>h||c,soft:()=>u[0],bloomA:()=>d[0],bloomB:()=>p[0],shafts:()=>f[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>Sc.exposure*x.exposure,vignette:()=>Math.min(1,Sc.vignette+x.vignette+.22*e1.night),night:()=>e1.night,grain:()=>Sc.grain,bloomK:()=>Sc.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>e.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:n?1:0},{framebuffer:null}),bt=t({framebuffer:()=>l});return{shot:x,look:Sc,hasDepth:n,capture(rt,qt,xe){let he=Math.max(.4,Math.min(1,e.scale||1)),De=Math.max(2,Math.round(rt.drawingBufferWidth*he/2)*2),Ae=Math.max(2,Math.round(rt.drawingBufferHeight*he/2)*2);(l.width!==De||l.height!==Ae)&&l.resize(De,Ae);let ho=Math.max(1,Math.ceil(De/2)),yo=Math.max(1,Math.ceil(Ae/2));u.forEach(Uo=>Uo.resize(ho,yo)),d.forEach(Uo=>Uo.resize(Math.max(1,Math.ceil(De/4)),Math.max(1,Math.ceil(Ae/4)))),p.forEach(Uo=>Uo.resize(Math.max(1,Math.ceil(De/8)),Math.max(1,Math.ceil(Ae/8)))),f.forEach(Uo=>Uo.resize(Math.max(1,Math.ceil(De/a())),Math.max(1,Math.ceil(Ae/a())))),XS(m,qt.proj,qt.view),VS(v,m),g[0]=qt.eye[0],g[1]=qt.eye[1],g[2]=qt.eye[2],bt(()=>{t.clear({color:[0,0,0,1],depth:1}),xe()})},present(){let rt=qt=>[qt.width,qt.height];n&&e.post>=1&&B()?(F({out:f[0]}),ut({out:f[1],src:f[0],dir:[1,0],size:rt(f[0])}),ut({out:f[0],src:f[1],dir:[0,1],size:rt(f[0])})):t.clear({color:[0,0,0,1],framebuffer:f[0]}),Rt({out:u[0],src:c,size:[l.width,l.height],threshold:0}),ut({out:u[1],src:u[0],dir:[1,0],size:rt(u[0])}),ut({out:u[0],src:u[1],dir:[0,1],size:rt(u[0])}),Rt({out:d[0],src:u[0],size:rt(u[0]),threshold:.42}),ut({out:d[1],src:d[0],dir:[1,0],size:rt(d[0])}),ut({out:d[0],src:d[1],dir:[0,1],size:rt(d[0])}),Rt({out:p[0],src:d[0],size:rt(d[0]),threshold:0}),ut({out:p[1],src:p[0],dir:[1.5,0],size:rt(p[0])}),ut({out:p[0],src:p[1],dir:[0,1.5],size:rt(p[0])}),Nt({out:null})}}}});var fb=Mt((bT,lb)=>{"use strict";var sb=ir().GLSL,KS=Fs(),Xd=ja(),{C:QS,FAR_DOOR:ZS}=_r(),JS=100*Math.PI/180,ib=t=>[ZS.x-t[2],t[1],QS.zc-7+t[0]],cb=t=>[-t[2],t[1],t[0]];function tE(t){let e=[],o=[],n=[],r=[],a=KS.createBuilder(e,o,n,r);Xd.addFrames(a,t);let s=Xd.glassPanes(t),i=c=>{let h=[];for(let l=0;l<c.length;l+=3)h.push([c[l],c[l+1],c[l+2]]);return h};return{position:i(e),normal:i(o),elements:n,glass:s}}lb.exports=t=>{let e=Xd.DOOR,o=["left","right"].map(l=>{let u=tE(l),d=u.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:u.position.map(p=>p.slice()),srcN:u.normal.map(p=>p.slice()),srcG:u.glass.map(p=>p.slice()),pos:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(u.elements),type:"uint32"}),glassCount:u.glass.length,outP:new Float32Array(d*3),outN:new Float32Array(d*3),outG:new Float32Array(u.glass.length*3),outGN:new Float32Array(u.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let u of o){let d=u.sign*l,p=Math.cos(d),f=Math.sin(d),v=x=>{let b=x[0]-u.hinge,w=x[2];return[u.hinge+b*p+w*f,x[1],-b*f+w*p]},m=x=>[x[0]*p+x[2]*f,x[1],-x[0]*f+x[2]*p];u.src.forEach((x,b)=>{let w=ib(v(x));u.outP.set(w,b*3),u.outN.set(cb(m(u.srcN[b])),b*3)});let g=cb(m([0,0,1]));u.srcG.forEach((x,b)=>{u.outG.set(ib(v(x)),b*3),u.outGN.set(g,b*3)}),u.pos.subdata(u.outP),u.nrm.subdata(u.outN),u.gpos.subdata(u.outG),u.gnrm.subdata(u.outGN)}}}r(0);let a=`
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
		${sb}
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
		${sb}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,h=()=>{r(c*JS);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return h.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},h.setOpen=l=>{c=l||0},h.openNow=()=>c,h}});var ub=Mt((wT,hb)=>{"use strict";var eE=ir().GLSL,{skylightGLSL:oE}=Wi(),{oculusGLSL:nE}=A0(),{windowLightGLSL:rE}=_r(),Q0=.22;function aE(){let t=[],e=[],o=[],n=[],s=(l,u)=>{let d=Q0*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(u>0?1.06:.94),p=l*Q0-Q0*.12,f=u*d,v=Math.abs(u)*d*.42-.14*l*l*Q0;v+=Math.sin(l*17+(u>0?0:2.1))*.012*Q0*u*u;let m=(l-.3)*.55,g=Math.cos(m),x=Math.sin(m),b=v*g-f*x,w=v*x+f*g;return[p,b,w+.05*Q0*l*l]},i=(l,u)=>{let p=s(Math.min(1,l+.01),u),f=s(Math.max(0,l-.01),u),v=s(l,Math.min(1,u+.01)),m=s(l,Math.max(-1,u-.01)),g=[p[0]-f[0],p[1]-f[1],p[2]-f[2]],x=[v[0]-m[0],v[1]-m[1],v[2]-m[2]],b=[x[1]*g[2]-x[2]*g[1],x[2]*g[0]-x[0]*g[2],x[0]*g[1]-x[1]*g[0]],w=Math.hypot(b[0],b[1],b[2])||1,M=b[1]<0?-1:1;return[b[0]/w*M,b[1]/w*M,b[2]/w*M]};for(let l=0;l<=18;l++){let u=l/18;for(let d=0;d<=5*2;d++){let p=d/5-1;t.push(s(u,p)),e.push(i(Math.min(.97,Math.max(.03,u)),p)),o.push([u,p])}}let c=5*2+1;for(let l=0;l<18;l++)for(let u=0;u<c-1;u++){let d=l*c+u,p=d+1,f=d+c,v=f+1;n.push([d,f,p],[p,f,v])}let h=t.length;return t.push([-Q0*.12,0,-.003],[-Q0*.12,0,.003],[-Q0*.24,-.01,.0015],[-Q0*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([h,h+2,h+1],[h,h+3,h+2]),{pos:t,nrm:e,uv:o,idx:n}}hb.exports=t=>{let e=aE(),o=t({vert:`
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
		${eE}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${oE()}
		${nE()}
		${rE()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),n=ir(),r=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Q0*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var vb=Mt((_T,pb)=>{"use strict";var{skylightGLSL:sE,Z_START:db,Z_END:iE}=Wi(),{oculusGLSL:cE,A:Ec}=A0(),{windowLightGLSL:lE,C:li}=_r();pb.exports=(t,e)=>{let o=e.isPhone?900:2600,n=e.isPhone?350:900,r=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=li.x0+.6,h=li.x1-.3,l=[];for(let f=0;f<o;f++)l.push([2.5+i()*10.5,.3+i()*8,db-3.5+i()*(iE-db+4.5),i()]);for(let f=0;f<n;f++)l.push([Ec.x0+.3+i()*(Ec.x1-Ec.x0-.6),.3+i()*7.5,Ec.z0+.3+i()*(Ec.z1-Ec.z0-.6),i()]);for(let f=0;f<r;f++)l.push([c+i()*(h-c),.2+i()*5.6,li.z0+.25+i()*(li.z1-li.z0-.5),i()]);let u=f=>f.toFixed(4),d=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=t({vert:`
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

		${sE()}
		${cE()}
		${lE()}

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
				p.x = ${u(c)} + mod(p.x - ${u(c)} - gust.x * (0.55 + 0.9 * seed.w), ${u(h-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${u(li.z0+.1)}, ${u(li.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:f=>f.viewportHeight*.006,focus:(f,v)=>v&&v.focus||6,aperture:(f,v)=>v&&v.aperture||0,wake0:(f,v)=>(v&&v.wake||d)[0],wake1:(f,v)=>(v&&v.wake||d)[1],wake2:(f,v)=>(v&&v.wake||d)[2],wake3:(f,v)=>(v&&v.wake||d)[3],wakeDir:(f,v)=>v&&v.wakeDir||[0,0,1],gust:(f,v)=>v&&v.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return f=>p(f||{})}});var wb=Mt((MT,bb)=>{"use strict";var{C:yb}=_r(),mb=ir(),gb=15.3,fE=37.1,xb=yb.z1+.9,hE=yb.z1+.7+16-.6;bb.exports=(t,e)=>{let o=e.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let h=0;h<o;h++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([gb+r()*(fE-gb),l,xb+r()*(hE-xb),r()])}let s=[],i=[];a.forEach(h=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...h)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>mb.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){mb.night>.01&&c()}}});var r1=Mt((kT,g0)=>{"use strict";var _b=ir(),pa=Qa(),uE=rc(),gs=Math.PI,ke=t=>(+t).toFixed(4),Z0=t=>`vec3(${ke(t[0])}, ${ke(t[1])}, ${ke(t[2])})`,en={x0:-2.05,z0:41.45,z1:47.55,top:5.1},No=-.55,er=-2,yn=42.25,Un=43.65,P0=45.35,Br=46.75,hr=2.75,v0=.12,dE=(No+er)/2,Ho={x:-1.3,y:1.42,w:.42,h:.52,z:Un,cell:.026},Ke={x0:-1.85,x1:-.75,top:.98,z0:Un-.3,z1:Un-.02},O0={x0:-1.44,x1:-1.16,y0:Ke.top-.002,y1:Ke.top+.018},m0={cx:-1.3,cz:Un-.165,w:.2,d:.255,y:Ke.top+.0012},br={x:-1.03,z:Un-.14,r:.042,h:.075},sn={x:-.86,z:Un-.12,h:.085,r:.019};sn.flame=[sn.x,Ke.top+.012+sn.h+.028,sn.z];var n1={a:[br.x-.004,Ke.top+.03,br.z+.004],b:[br.x-.13,Ke.top+.34,br.z-.12]},bn=[-1.5,2.42,44.66],Hn=[-1.78,1.95,yn+.09],C0={x:-1.32,z:44.08,y:.64,heading:.32},Sb={window:{eye:[-1.3,1.33,42.8],target:[Ho.x,1.37,Un],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[m0.cx,Ke.top,m0.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Nr={z0:(yn+Un)/2+.03,z1:(yn+Un)/2+.56,y0:.98,y1:1.78,x:No+.03,cell:.047};Sb.peek={eye:[-1.2,1.42,42.95],target:[pa.PLAY.stoolX-pa.OFF[0],.85,pa.PLAY.keyFront+.2],fov:30};var ms={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function Mb(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${ke(Ho.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Z0(bn)};
		if (d.z > -0.001) return 0.0;
		float t = (${ke(Ho.z)} - ${ke(bn[2])}) / d.z;
		vec2 g = (${Z0(bn)} + d * t).xy - vec2(${ke(Ho.x)}, ${ke(Ho.y)});
		float inWin = (1.0 - smoothstep(${ke(Ho.w/2-.01)}, ${ke(Ho.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${ke(Ho.h/2-.01)}, ${ke(Ho.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${ke(Ho.z)}) / abs(${ke(Ho.z)} - ${ke(bn[2])}) / ${ke(Ho.cell)};
		vec2 qc = fract(g / ${ke(Ho.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Z0(sn.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${ke(br.x)}, ${ke(br.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${ke(br.x)}, ${ke(br.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${ke(br.r*.7)}, ${ke(br.r*1.6)}, r)) * (1.0 - smoothstep(${ke(Ke.top+br.h*.8)}, ${ke(Ke.top+br.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Z0(n1.a)}, qb = ${Z0(n1.b)};
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
		bool inB1 = p.z < ${ke(Un)} && p.z > ${ke(yn-.04)} && p.x < ${ke(No+.02)};
		bool inPriest = p.z >= ${ke(Un)} && p.z < ${ke(P0)} && p.x < ${ke(No)};
		bool inB2 = p.z >= ${ke(P0)} && p.z < ${ke(Br+.04)} && p.x < ${ke(No)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${ke(er)}, ${ke(No)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${ke(en.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Z0(pa.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Z0(bn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Z0(Hn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Z0(sn.flame)} - p;
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
	}`}var tr={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function Eb(){let t=[],e=[],o=[],n=[],r=[],a=(h,l)=>[h[0]-l[0],h[1]-l[1],h[2]-l[2]],s=(h,l)=>[h[1]*l[2]-h[2]*l[1],h[2]*l[0]-h[0]*l[2],h[0]*l[1]-h[1]*l[0]],i=h=>{let l=Math.hypot(h[0],h[1],h[2])||1;return[h[0]/l,h[1]/l,h[2]/l]},c={pos:t,nrm:e,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(h,l,u,d)=>(t.push(h[0],h[1],h[2]),e.push(l[0],l[1],l[2]),o.push(u),n.push(d?d[0]:0,d?d[1]:0),t.length/3-1),c.quad=(h,l,u,d,p,f)=>{let v=i(s(a(l,h),a(d,h)));f=f||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(h,v,p,f[0]),g=c.v(l,v,p,f[1]),x=c.v(u,v,p,f[2]),b=c.v(d,v,p,f[3]);r.push(m,g,x,m,x,b)},c.box=(h,l,u,d,p,f,v)=>{let m=(g,x,b,w,M,_,S,O)=>c.quad(g,x,b,w,v,[[M,S],[_,S],[_,O],[M,O]]);m([d,l,u],[d,l,f],[d,p,f],[d,p,u],u,f,l,p),m([h,l,f],[h,l,u],[h,p,u],[h,p,f],f,u,l,p),m([h,p,u],[d,p,u],[d,p,f],[h,p,f],h,d,u,f),m([h,l,f],[d,l,f],[d,l,u],[h,l,u],h,d,f,u),m([h,l,f],[d,l,f],[d,p,f],[h,p,f],h,d,l,p),m([d,l,u],[h,l,u],[h,p,u],[d,p,u],d,h,l,p)},c.tube=(h,l,u,d)=>{d=d||6;let p=t.length/3;for(let f=0;f<h.length;f++){let v=h[Math.max(0,f-1)],m=h[Math.min(h.length-1,f+1)],g=i(a(m,v)),x=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=i(s(g,x)),w=s(b,g),M=typeof l=="function"?l(f/(h.length-1)):l;for(let _=0;_<=d;_++){let S=_/d*gs*2,O=Math.cos(S),N=Math.sin(S),G=[b[0]*O+w[0]*N,b[1]*O+w[1]*N,b[2]*O+w[2]*N];c.v([h[f][0]+G[0]*M,h[f][1]+G[1]*M,h[f][2]+G[2]*M],G,u,[f/(h.length-1),_/d])}}for(let f=0;f<h.length-1;f++)for(let v=0;v<d;v++){let m=p+f*(d+1)+v,g=m+d+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(h,l,u,d,p)=>{p=p||20;let f=t.length/3;for(let v=0;v<u.length;v++){let[m,g]=u[v],x=u[Math.max(0,v-1)],b=u[Math.min(u.length-1,v+1)],w=b[0]-x[0],M=b[1]-x[1];for(let _=0;_<=p;_++){let S=_/p*gs*2,O=Math.cos(S),N=Math.sin(S),G=i([M*O,-w,M*N]);c.v([h+O*m,g,l+N*m],G,d,[_/p,v/(u.length-1)])}}for(let v=0;v<u.length-1;v++)for(let m=0;m<p;m++){let g=f+v*(p+1)+m,x=g+p+1;r.push(g,x,g+1,g+1,x,x+1)}},c.spire=(h,l,u,d,p,f)=>{let v=[[-d,-d],[d,-d],[d,d],[-d,d]];for(let m=0;m<4;m++){let g=v[m],x=v[(m+1)%4],b=[h+g[0],u,l+g[1]],w=[h+x[0],u,l+x[1]],M=[h,p,l],_=i(s(a(M,b),a(w,b))),S=c.v(b,_,f,[0,0]),O=c.v(w,_,f,[1,0]),N=c.v(M,_,f,[.5,1]);r.push(S,N,O)}},c.orient=()=>{for(let h=0;h<r.length;h+=3){let[l,u,d]=[r[h],r[h+1],r[h+2]],p=m=>[t[m*3],t[m*3+1],t[m*3+2]],f=s(a(p(u),p(l)),a(p(d),p(l))),v=[0,1,2].map(m=>e[l*3+m]+e[u*3+m]+e[d*3+m]);f[0]*v[0]+f[1]*v[1]+f[2]*v[2]<0&&(r[h+1]=d,r[h+2]=u)}return c},c}function o1(t,e,o,n){if(t<=e)return o;let r=t-e;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var mn={ys:1.78,a:.56,r:.78};mn.apex=mn.ys+Math.sqrt(mn.r*mn.r-(mn.r-mn.a)*(mn.r-mn.a));function pE(){let t=Eb(),e=tr.WOOD,o=tr.CARVED,n=tr.DARKWOOD,r=.06;t.box(er,0,yn,No+.08,v0,Br,n),t.box(er,hr-.06,yn-.04,No+.1,hr,Br+.04,e),t.box(No,hr-.2,yn-.06,No+.12,hr-.06,Br+.06,e),t.box(No+.02,hr,yn-.08,No+.14,hr+.07,Br+.08,n),t.box(er,v0,yn,er+.04,hr-.06,Br,e);for(let[l,u,d]of[[yn-r,yn,-1],[Br,Br+r,1]]){t.box(er,0,l,No+.08,hr,u,e);let p=d<0?l-.018:u;t.box(er+.18,.45,Math.min(p,p+.018),No-.12,2.35,Math.max(p,p+.018),n),t.box(er+.26,.55,Math.min(p,p+.03*d),No-.2,2.25,Math.max(p,p+.03*d),e)}{let l=Un-.02,u=Un+.02,d=Ho.x-Ho.w/2,p=Ho.x+Ho.w/2,f=Ho.y-Ho.h/2,v=Ho.y+Ho.h/2;t.box(er,v0,l,No,O0.y0,u,e),t.box(er,O0.y0,l,O0.x0,O0.y1,u,e),t.box(O0.x1,O0.y0,l,No,O0.y1,u,e),t.box(er,O0.y1,l,No,f,u,e),t.box(er,f,l,d,v,u,e),t.box(p,f,l,No,v,u,e),t.box(er,v,l,No,hr-.06,u,e);let m=.05,g=l-.025;t.box(d-m,f-m,g,p+m,f,l,n),t.box(d-m,v,g,p+m,v+m,l,n),t.box(d-m,f,g,d,v,l,n),t.box(p,f,g,p+m,v,l,n),t.box(d-m-.02,v+m,g-.015,p+m+.02,v+m+.03,l,e),t.box(O0.x0-.01,O0.y1,l-.006,O0.x1+.01,O0.y1+.008,l,tr.BRASS)}{let l=Nr,u=No+.008,d=No+.052;t.box(u,l.y0,l.z0-.035,d,l.y1,l.z0,n),t.box(u,l.y0,l.z0,d,l.y0+.04,l.z1,n),t.box(u,l.y1-.04,l.z0,d,l.y1,l.z1,n),t.box(u+.008,v0,l.z0-.035,d-.008,l.y0,l.z1,e),t.box(d-.008,v0+.12,l.z0+.03,d,l.y0-.08,l.z1-.06,n),t.box(u-.004,l.y0-.012,l.z0-.045,d+.012,l.y0,l.z1,tr.BRASS)}t.box(er,v0,P0-.02,No,hr-.06,P0+.02,e),t.box(Ke.x0,Ke.top-.035,Ke.z0,Ke.x1,Ke.top,Ke.z1,e),t.tube([[Ke.x0,Ke.top-.018,Ke.z0],[Ke.x1,Ke.top-.018,Ke.z0]],.02,e,8);for(let l of[Ke.x0+.1,Ke.x1-.1]){let u=[];for(let d=0;d<=8;d++){let p=d/8;u.push([l,Ke.top-.04-.22*p,Ke.z1-.02-.22*Math.cos(p*gs/2)])}t.tube(u,.018,n,6)}t.box(er+.06,.12,yn,No-.1,.44,yn+.42,n),t.box(er+.08,.44,yn+.01,No-.12,.52,yn+.41,tr.CUSHION),t.box(er+.06,.12,Br-.42,No-.1,.44,Br,n),t.box(Hn[0]-.05,Hn[1]-.16,yn,Hn[0]+.05,Hn[1]-.02,yn+.012,tr.BRASS),t.tube([[Hn[0],Hn[1]-.09,yn+.012],[Hn[0],Hn[1]-.09,Hn[2]-.01],[Hn[0],Hn[1]-.05,Hn[2]]],.006,tr.BRASS,6),t.lathe(Hn[0],Hn[2],[[0,Hn[1]-.05],[.028,Hn[1]-.035],[.034,Hn[1]+.01],[.024,Hn[1]+.06],[.026,Hn[1]+.065]],tr.LAMPGLASS,16),t.box(C0.x-.22,.12,C0.z-.24,C0.x+.22,C0.y-.05,C0.z+.16,n),t.box(C0.x-.24,C0.y-.05,C0.z-.26,C0.x+.24,C0.y,C0.z+.18,tr.CUSHION),t.tube([[bn[0],hr-.06,bn[2]],[bn[0],bn[1]+.07,bn[2]]],.005,tr.BRASS,5),t.lathe(bn[0],bn[2],[[0,bn[1]+.09],[.03,bn[1]+.08],[.02,bn[1]+.06]],tr.BRASS,12),t.lathe(bn[0],bn[2],[[0,bn[1]-.06],[.035,bn[1]-.04],[.045,bn[1]],[.035,bn[1]+.05],[.018,bn[1]+.07]],tr.LAMPGLASS,16);let a=No,s=No+r;function i(l,u,d){let p=(l+u)/2,f=40,v=[];for(let g=0;g<=f;g++)v.push(v0+(hr-.2-v0)*g/f);let m=[];v.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(mn.ys+(mn.apex-mn.ys)*g/24);m.sort((g,x)=>g-x);for(let g=0;g<m.length-1;g++){let x=m[g],b=m[g+1];if(b-x<1e-4)continue;let w=d?o1(x,mn.ys,mn.a,mn.r):0,M=d?o1(b,mn.ys,mn.a,mn.r):0,_=(S,O)=>[S,O];t.quad([s,x,p-w],[s,x,l],[s,b,l],[s,b,p-M],e,[_(p-w,x),_(l,x),_(l,b),_(p-M,b)]),t.quad([s,x,u],[s,x,p+w],[s,b,p+M],[s,b,u],e,[_(u,x),_(p+w,x),_(p+M,b),_(u,b)]),(w>0||M>0)&&(t.quad([a,x,p-w],[s,x,p-w],[s,b,p-M],[a,b,p-M],n),t.quad([s,x,p+w],[a,x,p+w],[a,b,p+M],[s,b,p+M],n),t.quad([a,x,l],[a,x,p-w],[a,b,p-M],[a,b,l],e),t.quad([a,x,p+w],[a,x,u],[a,b,u],[a,b,p+M],e))}if(t.box(a,hr-.2,l,s,hr-.06,u,e),t.box(s,hr-.42,l+.05,s+.012,hr-.24,u-.05,o),d){let g=[];for(let x=0;x<=30;x++){let b=x/30,w=b<.5?v0+(mn.apex-v0)*(b*2):mn.apex-(mn.apex-v0)*((b-.5)*2),M=b<.5?-1:1;g.push([s+.01,Math.min(w,mn.apex-.002),p+M*(o1(w,mn.ys,mn.a,mn.r)+.03)])}t.tube(g,.022,n,6)}}i(yn,Un,!0),i(P0,Br,!0);{let l=Un,u=P0,d=(l+u)/2;t.box(a,v0,l,s,hr-.06,u,e);let p={ys:1.85,a:.55,r:.8},f=[];for(let v=0;v<=40;v++){let m=v/40,g=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),x=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;f.push([s+.012,Math.min(x,g-.002),d+b*o1(x,p.ys,p.a,p.r)])}f.push(f[0]),t.tube(f,.02,n,6),t.box(s,.95,d-.22,s+.015,1.3,d+.22,o),t.box(s,.35,d-.42,s+.01,.75,d+.42,n),t.tube([[s+.03,1.12,u-.13],[s+.06,1.12,u-.13],[s+.06,1.12,u-.2]],.009,tr.BRASS,6)}[yn-.02,Un,P0,Br+.02].forEach((l,u)=>{let d=u===1||u===2,p=.075,f=hr+(d?.62:.4);t.box(No+.06,0,l-p,No+.06+2*p,f,l+p,e),t.box(No+.04,f-.04,l-p-.02,No+.08+2*p,f,l+p+.02,n);let v=No+.06+p,m=d?.62:.5;t.spire(v,l,f,p*.95,f+m,e);for(let g=1;g<=3;g++){let x=f+m*g/4.2,b=p*.95*(1-g/4.2)+.02;for(let[w,M]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[v+w*(b-.02),x-.02,l+M*(b-.02)],[v+w*(b+.015),x+.03,l+M*(b+.015)]],.008,n,4)}t.lathe(v,l,[[0,f+m-.02],[.03,f+m+.03],[.022,f+m+.07],[0,f+m+.1]],e,10)});let h=(l,u,d)=>{let p=(l+u)/2,f=No+.075,v=hr+.07,m=v+d,g=[1,0,0],x=t.v([f,v,l],g,o,[l,v]),b=t.v([f,v,u],g,o,[u,v]),w=t.v([f,m,p],g,o,[p,m]);t.idx.push(x,b,w);let M=t.v([f-.04,v,l],[-1,0,0],e),_=t.v([f-.04,v,u],[-1,0,0],e),S=t.v([f-.04,m,p],[-1,0,0],e);t.idx.push(M,S,_);let O=[],N=[];for(let D=0;D<=10;D++){let B=D/10;O.push([f+.02,v+d*B,l+(p-l)*B]),N.push([f+.02,v+d*B,u+(p-u)*B])}t.tube(O,.022,n,6),t.tube(N,.022,n,6);for(let D=2;D<=8;D+=2)for(let B of[O[D],N[D]])t.tube([B,[B[0]+.01,B[1]+.06,B[2]+(B===O[D]?-.02:.02)]],.01,n,4);t.lathe(f,p,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([D,B])=>[D,B]),e,10);let G=Math.min(.17,d*.32),F=v+d*.38,j=[];for(let D=0;D<=24;D++){let B=D/24*gs*2;j.push([f+.012,F+Math.sin(B)*G,p+Math.cos(B)*G])}t.tube(j,.012,n,5)};h(yn-.02,Un,.52),h(Un,P0,.82),h(P0,Br+.02,.52),t.lathe(br.x,br.z,[[0,Ke.top],[.036,Ke.top+.001],[br.r,Ke.top+.012],[br.r*1.02,Ke.top+.035],[.036,Ke.top+.052],[.02,Ke.top+.062],[.016,Ke.top+.068]],tr.INKGLASS,24),t.lathe(br.x,br.z,[[.016,Ke.top+.064],[.021,Ke.top+.066],[.022,Ke.top+.075],[.016,Ke.top+.076],[0,Ke.top+.072]],tr.BRASS,20);{let l=n1.a,u=n1.b,d=26,p=x=>{let b=Math.sin(x*gs)*.025;return[l[0]+(u[0]-l[0])*x+b*.6,l[1]+(u[1]-l[1])*x+b*.4,l[2]+(u[2]-l[2])*x+b]},f=[];for(let x=0;x<=d;x++)f.push(p(x/d));t.tube(f,x=>.0028*(1-.7*x)+6e-4,tr.QUILL,5);let v=t.norm(t.sub(u,l)),m=t.norm(t.cross(v,[.2,1,.1])),g=t.cross(m,v);for(let x of[-1,1]){let b=t.pos.length/3;for(let w=0;w<=d;w++){let M=w/d,_=p(M),S=M<.28?0:(x>0?.03:.02)*Math.sin(gs*Math.pow((M-.28)/.72,.75)),O=S*.25,N=[_[0]+m[0]*x*S-g[0]*O,_[1]+m[1]*x*S-g[1]*O,_[2]+m[2]*x*S-g[2]*O];t.v(_,g,tr.QUILL,[M,0]),t.v(N,g,tr.QUILL,[M,x])}for(let w=0;w<d;w++){let M=b+w*2;t.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return t.orient()}function vE(t,e){let n=en.top,r=en.x0;t(r-.35,0,en.z0-.35,r,n+.35,en.z1+.35),t(r,0,en.z0-.35,-.35,n,en.z0),t(r,0,en.z1,-.35,n,en.z1+.35),t(r,n,en.z0,-.35,n+.35,en.z1),t(.35,0,en.z0-.42,.35+.16,n,en.z0),t(.35,0,en.z1,.35+.16,n,en.z1+.42),t(.35,n,en.z0-.5,.35+.18,n+.42,en.z1+.5),t(.35,n+.42,en.z0-.6,.35+.26,n+.52,en.z1+.6),t(.35,0,en.z0-.5,.35+.22,.42,en.z0),t(.35,0,en.z1,.35+.22,.42,en.z1+.5),t(-.35-.01,0,en.z0,.35+.12,.02,en.z1),e(r,en.z0,-.35,en.z1)}g0.exports=t=>{let e=Xa(),o=_b.GLSL,n=pE(),r=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${pa.roomGLSL()}
	${Mb()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(Nt,bt,rt,qt){let xe=[],he=[],De=[],Ae=[],ho=[],se=No-.02,Se=mn.apex+.08,Ge=v0+.015;for(let ao=0;ao<=40;ao++){let uo=ao/40,Ue=Se+(Ge-Se)*uo;for(let Le=0;Le<=90;Le++){let kt=Le/90,ue=rt?.2+.13*uo*uo:bt-Nt,ft=Nt+kt*ue,ct=rt?.05+.02*uo:.035+.01*Math.sin(kt*7),Q=kt*qt*gs*2+Math.sin(uo*2+kt*5)*.6,ye=se-ct*(.5+.5*Math.sin(Q))-(rt?.02*uo:0),Jt=[1,0,-(-ct*.5*Math.cos(Q)*qt*gs*2/ue)],Wt=Math.hypot(Jt[0],Jt[1],Jt[2]);xe.push(ye,Ue,ft),he.push(Jt[0]/Wt,0,Jt[2]/Wt),De.push(2),Ae.push(Math.sin(Q),uo)}}for(let ao=0;ao<40;ao++)for(let uo=0;uo<90;uo++){let Ue=ao*91+uo,Le=Ue+90+1;ho.push(Ue,Le,Ue+1,Ue+1,Le,Le+1)}for(let ao=0;ao<ho.length;ao+=3){let[uo,Ue,Le]=[ho[ao],ho[ao+1],ho[ao+2]],kt=Q=>[xe[Q*3],xe[Q*3+1],xe[Q*3+2]],ue=[0,1,2].map(Q=>kt(Ue)[Q]-kt(uo)[Q]),ft=[0,1,2].map(Q=>kt(Le)[Q]-kt(uo)[Q]);ue[1]*ft[2]-ue[2]*ft[1]<0&&(ho[ao+1]=Le,ho[ao+2]=Ue)}return{pos:xe,nrm:he,kind:De,uv:Ae,idx:ho}}let c=i(yn+.02,yn+.4,!0,6),h=i(P0+.04,Br-.04,!1,9),l={pos:c.pos.concat(h.pos),nrm:c.nrm.concat(h.nrm),kind:c.kind.concat(h.kind),uv:c.uv.concat(h.uv),idx:c.idx.concat(h.idx.map(Nt=>Nt+c.pos.length/3))},u=t({vert:`
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
			vec3 p = vec3(${ke(Ho.x)} + corner.x * ${ke(Ho.w/2)}, ${ke(Ho.y)} + corner.y * ${ke(Ho.h/2)}, ${ke(Ho.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${ke(Ho.x)}, ${ke(Ho.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${ke(Ho.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${ke(Nr.x)}, ${ke((Nr.y0+Nr.y1)/2)} + corner.y * ${ke((Nr.y1-Nr.y0)/2-.04)}, ${ke((Nr.z0+Nr.z1)/2)} + corner.x * ${ke((Nr.z1-Nr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${ke((Nr.z0+Nr.z1)/2)}, ${ke((Nr.y0+Nr.y1)/2)})) * ${ke(Ho.cell/Nr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${ke(Nr.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),f=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${ke(Ho.x)} + corner.x * 0.75, ${ke(Ho.y)} + corner.y * 0.9, ${ke(P0-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),v=14,m=[];for(let Nt=0;Nt<v;Nt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(bt=>m.push(bt[0],bt[1],(Nt+.5)/v));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${ke(dE)} + c.x * ${ke((No-er)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${ke(Un-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${Mb().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Z0(bn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let Nt=document.createElement("canvas");Nt.width=512,Nt.height=652;let bt=Nt.getContext("2d");bt.fillStyle="#cdb38a",bt.fillRect(0,0,Nt.width,Nt.height);let rt=7,qt=()=>(rt=rt*1664525+1013904223>>>0,rt/4294967296);for(let he=0;he<2400;he++){bt.fillStyle=`rgba(${qt()<.5?"90,62,30":"245,230,200"},${.03+qt()*.05})`;let De=qt()*Nt.width,Ae=qt()*Nt.height;bt.fillRect(De,Ae,1+qt()*14,1)}for(let he=0;he<26;he++){let De=qt()*Nt.width,Ae=qt()*Nt.height,ho=20+qt()*90,yo=bt.createRadialGradient(De,Ae,0,De,Ae,ho);yo.addColorStop(0,`rgba(120,80,35,${.04+qt()*.06})`),yo.addColorStop(1,"rgba(120,80,35,0)"),bt.fillStyle=yo,bt.fillRect(De-ho,Ae-ho,ho*2,ho*2)}let xe=bt.createRadialGradient(Nt.width/2,Nt.height/2,Nt.width*.3,Nt.width/2,Nt.height/2,Nt.height*.72);return xe.addColorStop(0,"rgba(110,70,30,0)"),xe.addColorStop(1,"rgba(110,70,30,0.38)"),bt.fillStyle=xe,bt.fillRect(0,0,Nt.width,Nt.height),Nt})(),b=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],_=[],S=[];for(let Nt=0;Nt<=M[1];Nt++)for(let bt=0;bt<=M[0];bt++)_.push(bt/M[0],Nt/M[1]);for(let Nt=0;Nt<M[1];Nt++)for(let bt=0;bt<M[0];bt++){let rt=Nt*(M[0]+1)+bt,qt=rt+M[0]+1;S.push(rt,rt+1,qt,rt+1,qt+1,qt)}let O=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${ke(m0.cx+m0.w/2)} - s * ${ke(m0.w)};
			float zNear = ${ke(m0.cz-m0.d/2)};
			vec3 p = vec3(x, ${ke(m0.y)}, zNear + t * ${ke(m0.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${ke(m0.d)};
				float zf = zNear + 0.5 * ${ke(m0.d)};
				p.z = zf - dd * cos(a);
				p.y = ${ke(m0.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${ke(Un+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(_),size:2}},elements:S,uniforms:{fold:()=>ms.fold,slide:()=>ms.slide,paperTex:b,inkTex:w},cull:{enable:!1}}),N=Eb();N.lathe(sn.x,sn.z,[[0,Ke.top],[.048,Ke.top+.002],[.052,Ke.top+.012],[.046,Ke.top+.014],[.022,Ke.top+.012],[0,Ke.top+.012]],tr.BRASS,24),N.lathe(sn.x,sn.z,[[0,Ke.top+.012],[sn.r,Ke.top+.012],[sn.r*1.02,Ke.top+.012+sn.h*.6],[sn.r,Ke.top+.012+sn.h],[sn.r*.75,Ke.top+.012+sn.h-.004],[0,Ke.top+.012+sn.h-.008]],9,20),N.tube([[sn.x,Ke.top+.012+sn.h-.008,sn.z],[sn.x+.001,Ke.top+.012+sn.h+.012,sn.z]],.0012,8,4),N.orient();let G=t({vert:a,frag:`${r}
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
				float up = smoothstep(${ke(Ke.top+sn.h*.4)}, ${ke(Ke.top+.012+sn.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:N.pos,normal:N.nrm,kind:N.kind,uv:N.uv},elements:N.idx}),F=t({vert:`
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
			vec3 p = ${Z0(sn.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),j=[0,0],D=t({uniforms:{view:t.prop("view")}}),B=new Float32Array(16);function ut(Nt){uE.translate(B,Nt.view,pa.OFF),D({view:B},()=>Rt(Nt))}function Rt(Nt){let bt=Nt&&Nt.reflected;if(s(),u(),d(),p(),ms.ink&&ms.inkDirty){let rt=ms.ink;j[0]!==rt.width||j[1]!==rt.height?(w({data:rt,min:"linear",mag:"linear",flipY:!1}),j=[rt.width,rt.height]):w.subimage(rt),ms.inkDirty=!1}ms.shown&&O(),_b.night>.01&&(G(),bt||(F({halo:1}),F({halo:0}))),bt||(f(),g())}return ut};g0.exports.addBay=vE;g0.exports.BAY=en;g0.exports.OFF=pa.OFF;g0.exports.STATE=ms;var kb=t=>[t[0]+pa.OFF[0],t[1]+pa.OFF[1],t[2]+pa.OFF[2]];g0.exports.SHOTS=Object.fromEntries(Object.entries(Sb).map(([t,e])=>[t,Object.assign({},e,{eye:kb(e.eye),target:kb(e.target)})]));g0.exports.SEAT=C0;g0.exports.LAMP=bn;g0.exports.SCONCE=Hn;g0.exports.GRILLE=Ho;g0.exports.PAPER=m0;g0.exports.ZONE={FRONT:No,BACK:er,ZA:yn,ZB:Un,ZC:P0,ZD:Br}});var Yd=Mt((ST,Ab)=>{"use strict";function mE(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var zb={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},gE=["th","ng","er"];function xE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=t.getContext("2d"),r={};Object.keys(zb).forEach(v=>{r[v]=zb[v]*o.pace});let a=[],s=0,i=0,c=0,h=[];function l(v,m){let g=mE(o.seed),x=o.xh,b={},w=B=>{let ut=e[B];if(!ut)return null;let Rt=Math.floor(g()*ut.length);return ut.length>1&&Rt===b[B]&&(Rt=(Rt+1)%ut.length),b[B]=Rt,ut[Rt]},M=B=>{if(e[B])return{g:w(B),sc:1};let ut=B.toLowerCase();return e[ut]?{g:w(ut),sc:/[A-Z]/.test(B)?1.32:1}:null},_=[],S=.15,O=0,N=0,G=(g()-.5)*.02,F=m/x,j=v.split(/\n\s*\n/);j.forEach((B,ut)=>{B.replace(/\s+/g," ").trim().split(" ").forEach(Nt=>{let bt=[];for(let he=0;he<Nt.length;he++){let De=Nt.substr(he,2).toLowerCase();if(gE.indexOf(De)>=0&&e[De]&&g()<.55&&Nt[he]===Nt[he].toLowerCase()){bt.push({ch:De,gl:{g:w(De),sc:1}}),he++;continue}let Ae=M(Nt[he]);Ae&&Ae.g&&bt.push({ch:Nt[he],gl:Ae})}let rt=bt.map(()=>.17+g()*.07),qt=bt.reduce((he,De,Ae)=>he+De.gl.g.w*De.gl.sc+rt[Ae],0);O>0&&O+qt>F&&(O=0,N++,S+=r.line,G=(g()-.5)*.02),bt.forEach((he,De)=>{let Ae=he.gl.g,ho=he.gl.sc*(.95+g()*.1),yo=(g()-.5)*.06,Uo=(g()-.5)*.08+G*O,se=O,Se=N*o.lineHeight+1.9+Uo,Ge=Math.cos(yo),ao=Math.sin(yo),uo=Le=>[(se+(Le[0]*Ge-Le[1]*ao)*ho)*x,(Se+(Le[0]*ao+Le[1]*Ge)*ho)*x],Ue=(Le,kt)=>{let ue=0;for(let ct=1;ct<Le.length;ct++)ue+=Math.hypot(Le[ct][0]-Le[ct-1][0],Le[ct][1]-Le[ct-1][1]);let ft=Math.max(o.minDur||(kt?.06:.07),ue/(o.speed*x));_.push({pts:Le,L:ue,start:S,dur:ft,dot:kt}),S+=ft};if(Ae.s.forEach((Le,kt)=>{kt>0&&(S+=r.stroke),Ue(Le.map(uo),!1)}),Ae.dot){let Le=Ae.s[0][0];Ae.s.forEach(ue=>ue.forEach(ft=>{ft[1]<Le[1]&&(Le=ft)}));let kt=uo([Le[0]+.1,-1.36]);S+=r.stroke*1.4,Ue([kt,[kt[0]+x*.05,kt[1]+x*.03]],!0)}S+=r.letter*(.6+g()*.8),O+=Ae.w*ho+rt[De]});let xe=Nt[Nt.length-1];S+=/[.!?]/.test(xe)?r.stop:/[,;:]/.test(xe)?r.comma:r.word,O+=.55+g()*.2}),ut<j.length-1&&(O=0,N+=1.6,S+=r.para)});let D=(N+1)*o.lineHeight*x+x*1.55;return{strokes:_,total:S,height:D}}function u(v,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(v*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=v+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,v,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let d=v=>v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;function p(v,m){let g=h[v.i]||0;if(m<=g)return;let x=o.width*o.xh,b=0;for(let w=1;w<v.pts.length;w++){let M=v.pts[w-1],_=v.pts[w],S=Math.hypot(_[0]-M[0],_[1]-M[1]),O=b,N=b+S;if(b=N,N<=g||S===0)continue;if(O>=m)break;let G=Math.max(0,(g-O)/S),F=Math.min(1,(m-O)/S),j=[M[0]+(_[0]-M[0])*G,M[1]+(_[1]-M[1])*G],D=[M[0]+(_[0]-M[0])*F,M[1]+(_[1]-M[1])*F],B=(O+N)/2/(v.L||1),ut=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,B)));n.lineWidth=x*ut,n.globalAlpha=.86+.14*ut,n.beginPath(),n.moveTo(j[0],j[1]),n.lineTo(D[0],D[1]),n.stroke()}v.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(v.pts[0][0],v.pts[0][1],x*.75,0,Math.PI*2),n.fill()),h[v.i]=m}function f(v){let m=(v-c)/1e3;for(let g=0;g<a.length;g++){let x=a[g];if(x.start>m)break;let b=Math.min(1,(m-x.start)/x.dur);p(x,d(b)*x.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(f):o.onDone&&o.onDone()}return{write(v,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=l(v,g);a=x.strokes,s=x.total;let b=typeof o.maxTime=="function"?o.maxTime(v):o.maxTime;if(b&&s>b){let M=b/s;a.forEach(_=>{_.start*=M,_.dur*=M}),s=b}a.forEach((M,_)=>{M.i=_}),h=[],u(g,x.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(M=>p(M,M.L));return}return c=performance.now(),i=requestAnimationFrame(f),s},finish(){cancelAnimationFrame(i),a.forEach(v=>p(v,v.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}Ab.exports=xE});var Qd=Mt((ET,Tb)=>{"use strict";var Kd=ir(),yE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',bE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Tb.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let n=()=>{let r=Kd.isNight;o.innerHTML=r?yE:bE,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Kd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Kd.toggle()}),o}});var Ob=Mt((zT,Rb)=>{"use strict";var Bn=r1(),wE=Qa(),_E=Yd(),ME="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Lb=100,Pa=t=>Math.max(0,Math.min(1,t)),n0=(t,e,o)=>{let n=Pa((o-t)/(e-t));return n*n*(3-2*n)},J0=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,$0=(t,e,o)=>t+(e-t)*o,of=(t,e,o)=>[$0(t[0],e[0],o),$0(t[1],e[1],o),$0(t[2],e[2],o)];function fi(t,e){let o=t.length-1,n=Pa(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],h=t[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-h[l])*a*a+(-s[l]+3*i[l]-3*c[l]+h[l])*a*a*a))}var a1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function Zd(t,e,o){return{eye:of(t.eye,e.eye,o),target:of(t.target,e.target,o),fov:$0(t.fov,e.fov,o),roll:$0(t.roll||0,e.roll||0,o)}}var nf=wE.PLAY,ta=[nf.stoolX,1,nf.keyFront+.25],s1=[nf.stoolX,nf.keyTop+.03,nf.keyFront-.05],tp=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[ta[0]+Math.cos(e)*o,1.15+.4*t,ta[2]+Math.sin(e)*o]},zc=[{eye:tp(1),target:[ta[0],.92,ta[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:s1},{eye:[ta[0]+1,1.14,ta[2]+1.72],target:[s1[0]+.05,.8,s1[2]+.05],fov:40,aperture:1,to:s1}],Nb=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),i1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:Nb(t.eye,t.to||ta),aperture:t.aperture,vignette:.42,shafts:0}),Jd={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Ac={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},ef={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},kE=`
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
`;Rb.exports=function(e){let{root:o,avatar:n}=e,r=document.createElement("style");r.textContent=kE,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),h=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),u=a.querySelector(".conf-final"),d=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,p=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let kt=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Lb-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>Lb&&kt&&(i.value=kt[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(kt=>i.addEventListener(kt,ue=>ue.stopPropagation())),a.addEventListener("pointerdown",kt=>kt.stopPropagation()),a.addEventListener("click",kt=>{let ue=kt.target.closest("button");ue&&(kt.stopPropagation(),ue.dataset.act==="send"&&ut(),ue.dataset.act==="leave"&&bt())});let f=!1,v="",m=0,g=null,x=null,b="",w=null,M=0,_="",S=document.createElement("canvas");S.width=512,S.height=652;function O(kt){kt!==_&&(_=kt,s.classList.toggle("on",kt==="write"),h.classList.toggle("on",kt==="hint"),l.classList.toggle("on",f&&kt==="hint"&&(v==="room"||v==="peek")),u.classList.toggle("on",kt==="final"),kt==="write"&&setTimeout(()=>{if(v==="write")try{i.focus({preventScroll:!0})}catch(ue){}},900))}function N(kt){v=kt,m=0}function G(kt,ue){if(f)return;f=!0,g={eye:kt.eye.slice(),target:kt.target.slice(),fov:kt.fov,roll:kt.roll||0},x=Object.assign({},ue),b="",i.value="",c.disabled=!0,Bn.STATE.fold=0,Bn.STATE.slide=0,Bn.STATE.shown=!0,Bn.STATE.active=!0;let ft=S.getContext("2d");ft.setTransform(1,0,0,1,0,0),ft.clearRect(0,0,S.width,S.height),Bn.STATE.ink=S,Bn.STATE.inkDirty=!0,document.body.classList.add("confessing");let ct=zc[0],Q=p?.3:5.5,ye=p?.3:3.6;F.i=0,F.u=0,F.T=Q+ye,F.moving=!0,F.rest=0,F.raw=!0,F.lookFrom=x,F.lookTo=i1(ct);let k=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],tp(0)],Jt=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[ta[0],1,ta[2]-.1],ct.target];F.path=Wt=>{let Te=Wt*(Q+ye);if(Te<Q){let zo=Te/Q,wo=1-Math.cos(zo*Math.PI/2);return{eye:fi(k,wo),target:fi(Jt,n0(0,1,wo*1.05)),fov:$0(g.fov,52,n0(.4,1,wo)),roll:(g.roll||0)*(1-wo)}}let Re=(Te-Q)/ye,eo=1-Math.pow(1-Re,2.4);return{eye:tp(eo),target:ct.target,fov:$0(52,ct.fov,eo),roll:.05*Math.sin(Math.PI*eo)}},N("room"),O("")}let F={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},j=()=>d?"Scroll on":"Swipe up";function D(kt){let ue=xe,ft=zc[kt],ct={eye:ue.eye.slice(),target:ue.target.slice(),fov:ue.fov,roll:ue.roll||0},Q=of(ct.eye,ft.eye,.5),ye=[Q[0]-ta[0],0,Q[2]-ta[2]],k=Math.hypot(ye[0],ye[2])||1,Jt=[Q[0]+ye[0]/k*.6,Q[1]+.3,Q[2]+ye[2]/k*.6];F.path=Wt=>{let Te=1-Wt;return{eye:[0,1,2].map(Re=>Te*Te*ct.eye[Re]+2*Te*Wt*Jt[Re]+Wt*Wt*ft.eye[Re]),target:of(ct.target,ft.target,n0(0,1,Wt)),fov:$0(ct.fov,ft.fov,Wt),roll:ct.roll*Te}},F.lookFrom=B||i1(zc[F.i]),F.lookTo=i1(ft),F.i=kt,F.u=0,F.moving=!0,F.rest=0,F.raw=!1,F.T=p?.4:Math.max(2.8,Math.min(4.4,Nb(ct.eye,ft.eye)*1+1.6)),O("")}let B=null;function ut(){if(v!=="write"||(b=i.value.trim(),!b))return;i.blur(),O("");let kt=Math.max(10,Math.min(22,24-b.length/28));w=_E(S,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:kt,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:ue=>2.4+ue.length/160,fixed:{mx:46,my:40},onPen:()=>{Bn.STATE.inkDirty=!0},onDone:()=>{Bn.STATE.inkDirty=!0}}),N("down")}function Rt(){try{let kt={access_key:ME,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(kt),keepalive:!0}).catch(()=>{})}catch(kt){}}function Nt(){v==="ready"&&(Rt(),N("fold"),O(""))}function bt(){!f||v==="leave"||(O(""),i.blur(),rt=xe,qt=B,N("leave"))}let rt=null,qt=null,xe=null,he=Bn.SHOTS.window,De=Bn.OFF,Ae=kt=>[kt[0]+De[0],kt[1],kt[2]],ho=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],Ae([1.25,1.5,43.25]),Ae([-.55,1.36,42.92])],yo=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],Ae([-1,1.55,43.6]),Ae([-1.4,1.35,43.1]),Ae([-1.5,1.33,43.3])];function Uo(kt){let ue=J0(Pa(kt)),ft=[g.eye,...ho,he.eye],ct=[g.target,...yo,he.target];return{eye:fi(ft,ue),target:fi(ct,n0(0,1,ue*1.03)),fov:$0(g.fov,he.fov,n0(.6,.97,ue)),roll:(g.roll||0)*(1-ue)}}function se(kt,ue){if(p)return kt;let ft=performance.now()/1e3,ct=.004*ue,Q=Math.sin(ft*.61)*.6+Math.sin(ft*1.37+1.3)*.4,ye=Math.sin(ft*.47+2.1)*.6+Math.sin(ft*1.13+.4)*.4;return{eye:[kt.eye[0]+Q*ct,kt.eye[1]+ye*ct*.7,kt.eye[2]],target:[kt.target[0]+ye*ct*1.5,kt.target[1]+Q*ct,kt.target[2]],fov:kt.fov,roll:kt.roll}}function Se(kt,ue,ft){let ct={};for(let Q in ue)ct[Q]=typeof ue[Q]=="number"&&typeof kt[Q]=="number"?$0(kt[Q],ue[Q],ft):ue[Q];return ct}function Ge(kt){kt*=window.__confSpeed||1,m+=kt;let ue=a1(he),ft=a1(Bn.SHOTS.paper),ct,Q,ye=a1(Bn.SHOTS.peek);if(v==="room")F.moving?(F.u=Math.min(1,F.u+kt/F.T),ct=F.path(F.raw?F.u:J0(F.u)),Q=Se(F.lookFrom,F.lookTo,n0(.1,.9,F.u)),F.raw&&(Q.fade=(x.fade||0)*(1-n0(0,.12,F.u))),F.u>=1&&(F.moving=!1,F.rest=0,h.textContent=j(),O("hint"))):(F.rest+=kt,ct=se(a1(zc[F.i]),2.5),Q=i1(zc[F.i]));else if(v==="enter"){let Jt=Pa(m/(p?.6:9)),Wt=J0(Jt),Te=[ao.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],Ae([.75,1.5,42.95]),Ae([-.25,1.42,42.82]),Ae([-.9,1.42,42.82]),ye.eye];ct={eye:fi(Te,Wt),target:of(ao.target,ye.target,n0(0,.35,Wt)),fov:$0(ao.fov,ye.fov,n0(.3,1,Wt)),roll:0},Q=Se(uo,Jd,n0(.2,.9,Jt)),Jt>=1&&N("peek")}else if(v==="peek")ct=se(ye,1.5),Q=Jd,m>(p?.5:3.2)&&N("turn");else if(v==="turn"){let k=Pa(m/(p?.4:3.2));ct=Zd(ye,ue,J0(k)),Q=Se(Jd,Ac,J0(k)),k>=1&&(N("write"),O("write"))}else if(v==="write")ct=se(ue,1),Q=Ac;else if(v==="down"){let k=Pa(m/(p?.4:2));ct=Zd(ue,ft,J0(k)),Q=Se(Ac,ef,J0(k)),k>=1&&(M=w.write(b,p)||0,Bn.STATE.inkDirty=!0,N("writing"))}else if(v==="writing")ct=se(ft,.6),Q=ef,m>M+.8&&(N("ready"),h.textContent=d?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",O("hint"));else if(v==="ready")ct=se(ft,.6),Q=ef;else if(v==="fold"){let k=Pa(m/(p?.3:1.5));Bn.STATE.fold=J0(k),ct=se(ft,.6),Q=ef,k>=1&&N("slide")}else if(v==="slide"){let Jt=Pa(m/(p?.6:3.4));Bn.STATE.slide=J0(n0(0,.7,Jt));let Wt=J0(n0(.35,1,Jt));ct=Zd(ft,ue,Wt),Q=Se(ef,Ac,Wt),Jt>=1&&(Bn.STATE.shown=!1,N("final"),O("final"))}else if(v==="final")ct=se(ue,1),Q=Ac;else if(v==="leave"){let k=p?.6:rt.eye[0]<De[0]-.3?12:7,Jt=Pa(m/k),Wt={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},Te=J0(Jt),Re=rt.eye[0]<De[0]-.3,eo=Re?[rt.eye,Ae([-.55,1.4,42.8]),Ae([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Wt.eye]:[rt.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Wt.eye],zo=Re?[rt.target,Ae([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Wt.target]:[rt.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Wt.target];if(ct={eye:fi(eo,Te),target:fi(zo,Te),fov:$0(rt.fov,Wt.fov,Te),roll:Wt.roll*Te},Q=Se(qt||Ac,x,n0(.1,.7,Jt)),Q.fade=(x.fade||0)*n0(.82,1,Jt),Jt>=1){f=!1,Bn.STATE.active=!1,Bn.STATE.shown=!0,Bn.STATE.fold=0,Bn.STATE.slide=0;let wo=S.getContext("2d");wo.setTransform(1,0,0,1,0,0),wo.clearRect(0,0,S.width,S.height),Bn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return xe=ct,B=Q,{camera:ct,look:Q}}let ao=null,uo=null;function Ue(){if(v==="room"){if(F.moving||F.rest<.4)return;F.i<zc.length-1?D(F.i+1):(ao=xe,uo=B,O(""),N("enter"));return}if(v==="peek"){m>.4&&N("turn");return}v==="ready"?Nt():v==="writing"&&w&&(w.finish(),m=Math.max(m,M))}function Le(){v==="room"&&!F.moving&&F.rest>.4&&F.i>0&&D(F.i-1)}return{start:G,update:Ge,leave:bt,get active(){return f},get stage(){return v},wheel(kt){kt>8?Ue():kt<-8&&Le()},swipe(kt){kt>0?Ue():kt<0&&Le()},tap(){Ue()},key(kt){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(kt)>=0?(Ue(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(kt)>=0?(Le(),!0):kt==="Escape"?(bt(),!0):!1},_setNote(kt){i.value=kt,i.dispatchEvent(new Event("input"))}}}});var Hb=Mt((AT,Gb)=>{"use strict";var Tc=rc(),c1=Ed(),ep=Vf(),SE=fl(),op=Ad(),EE=S0(),l1=!EE.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:x0}=A0(),{C:wr,PAINTING_X:Oc}=_r(),a0=t=>Math.max(0,Math.min(1,t)),Kt=(t,e,o)=>t+(e-t)*o,Zo=(t,e,o)=>[Kt(t[0],e[0],o),Kt(t[1],e[1],o),Kt(t[2],e[2],o)],mo=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],np=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],jr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],jt=(t,e,o)=>{let n=a0((o-t)/(e-t));return n*n*(3-2*n)};function zE(t,e,o,n,r,a){if(r<=0)return[t,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),h=a*n,l=Math.max(-h,Math.min(h,t-e)),u=t-l,d=(o+s*l)*r,p=(o-s*d)*c,f=u+(l+d)*c;return e-t>0==f>e&&(f=e,p=0),[f,p]}var Cb=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,AE=t=>t*t*t,rp=t=>1-Math.pow(1-t,3),zn=t=>-(Math.cos(Math.PI*t)-1)/2;function $n(t,e){let o=t.length-1,n=a0(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],h=t[Math.min(o,r+2)],l=a*a,u=l*a;return[0,1,2].map(d=>.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-h[d])*l+(-s[d]+3*i[d]-3*c[d]+h[d])*u))}var co=(t,e,o,n)=>({eye:t,target:e,fov:o,roll:n||0});function vi(t,e,o){return co(Zo(t.eye,e.eye,o),Zo(t.target,e.target,o),Kt(t.fov,e.fov,o),Kt(t.roll,e.roll,o))}var lp=()=>jt(.75,1.3,window.innerWidth/window.innerHeight),Wr=(t,e)=>vi(t,e,lp()),f1=[7,3.95,wr.hallEnd-.05],TE=[wr.x1,2.9,wr.zc],Nc=[16.75,4.55,6.75],fp=[6.92,2.72,14.5],ea=[7.3,.015,47.1],LE=[Nc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],fp],NE=[fp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],ea],ui=[Oc[0],3,wr.z0],di=[Oc[1],3,wr.z0],sp=47.45,Db=4.6,RE=13.2,OE=1.57,rf=[7.55,1.25,46.75],hp=[17.25,2.42,46],up=[26.05,1.95,46],af=[36.15,.015,44],p1=()=>Kt(6.8,6.15,lp()),CE=[rf,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],hp],PE=[hp,[20.2,2.05,45.6],[23.2,1.8,45],up],pi=[Oc[2],3,wr.z0],ip=[34.8,1.35,46],ys=[7.89,.03,19.03],Pb=.36,$b=13.64,Sr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function I0(t){let e=t.side==="left"?1:-1;return Zo([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],lp())}function $E(t){return t.side==="left"?Wr(co([8.6,3.9,t.z],[Pb,1.45,t.z],76),co([8,3.6,t.z+.7],[Pb,3.95,t.z-2],46,-.008)):Wr(co([5.4,3.9,t.z],[$b,1.45,t.z],76),co([6,3.6,t.z-.7],[$b,3.95,t.z+2],46,-.008))}var IE=()=>[af,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],I0(Sr[0])],FE=()=>[I0(Sr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],I0(Sr[3])],qE=()=>[I0(Sr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],ys],Ib={2:{pos:()=>fp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>rf,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>hp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>up,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>ip,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>I0(Sr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>I0(Sr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>I0(Sr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>I0(Sr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>I0(Sr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>I0(Sr[5]),amp:[.12,.08,.1],tumble:.5}},xs=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],n=Wr(co([wr.x0+.9,1.85,wr.zc+.25],[wr.x1,2.85,wr.zc-.1],64),co([wr.x0+1.2,2,wr.zc+.35],[wr.x1,2.6,wr.zc-.15],50));return n.eye=mo(mo(n.eye,[e,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=Wr(co([16.6,1.9,9.2],[17.3,.4,5.6],64),co([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=mo(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=Wr(co([7,1.35,13],[7.2,7.6,20.4],74,.05),co([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=mo(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=Wr(co([7,3.6,43.7],[7,3.85,f1[2]],74),co([7,3.6,41.3],[7,3.95,f1[2]],46));return o.eye=mo(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Wr(co([7,3.9,40.3],[7,1.35,f1[2]],76),co([6.3,3.6,41.2],[3.7,3.95,f1[2]],46,-.008));return o.eye=mo(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Wr(co([7.15,.15,46],[7.3,.04,ea[2]],50),co([7.05,.14,45.9],[7.25,.05,ea[2]],32));return o.eye=mo(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=Wr(co([7.15,.1,46.3],[7.05,.1,sp],50),co([7.1,.12,45.85],[7,.2,sp],30));return o.eye=mo(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=Wr(co([7.3,.85,45.65],[7.6,1.38,47.1],64),co([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=mo(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Wr(co([ui[0],2.3,46.85],[ui[0],1.25,ui[2]],74),co([ui[0]-.6,2.55,46.85],[ui[0]+1.9,2.9,ui[2]],46,.008));return o.eye=mo(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Wr(co([di[0],1.95,46.85],[di[0],1,di[2]],74),co([di[0]-.6,2.1,46.85],[di[0]+1.9,2.75,di[2]],46,.008));return o.eye=mo(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Wr(co([pi[0],1.4,46.85],[pi[0],.6,pi[2]],74),co([pi[0]-.6,1.45,46.85],[pi[0]+1.9,2,pi[2]],46,.008));return o.eye=mo(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Wr(co([34.75,.5,44.15],[wr.x1,.8,43.95],66),co([34.75,.45,44.3],[wr.x1,.35,43.95],50));return o.eye=mo(o.eye,e),o}},...Sr.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=$E(t);return r.eye=mo(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=Wr(co([7.75,2.6,18.6],[7.89,0,19.08],60),co([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-ys[0],r=o.eye[2]-ys[2];return o.eye=[ys[0]+n*Math.cos(e)-r*Math.sin(e),o.eye[1],ys[2]+n*Math.sin(e)+r*Math.cos(e)],o}}],DE=[1,.96,.88];function Fb(t,e){return{dur:e,cam(o,n,r){let a=zn(o),s=vi(n,r,a),i=Sr[t].side==="left"?1:-1;return s.eye=mo(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=Kt(n[s],r[s],o));return a.aperture=Kt(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=zn(o),r=I0(Sr[t]),a=I0(Sr[t+1]),s=Sr[t].side==="left"?1:-1,i=mo(Zo(r,a,.5),[s*1.2,.5,0]),c=$n([r,Zo(r,i,.6),i,Zo(a,i,.6),a],n);return{phase:"fly",pos:mo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var ap=[{dur:6.2,cam(t,e,o){if(t<.5){let i=AE(t/.5),c=Zo(e.eye,[wr.x1-3.2,2.6,wr.zc],i),h=Zo(e.target,TE,jt(0,.6,t/.5));return co(c,h,Kt(e.fov,e.fov-8,i),Kt(e.roll,.04,i))}let n=rp((t-.5)/.5),r=[[x0.cx+.4,10.4,x0.zc+.6],[x0.cx-.6,7.6,x0.zc+1.3],[x0.cx-1.9,4.6,x0.zc+1.75],o.eye],a=[[x0.cx-.1,0,x0.zc-.2],[x0.cx-1,.4,x0.zc-.1],[x0.cx-1.1,.8,x0.zc-.2],o.target];return co($n(r,n),$n(a,n),Kt(o.fov+14,o.fov,n),Kt(-.25,o.roll,n))},look(t,e,o){let n=jt(.22,.5,t),r=1-jt(.5,.74,t);return{fade:t<.5?n:r,fadeColor:DE,exposure:Kt(e.exposure,o.exposure,jt(.5,.9,t))*(1+2.2*(t<.5?jt(.15,.5,t):1-jt(.5,.8,t))),letterbox:Kt(e.letterbox,o.letterbox,jt(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*jt(.6,1,t),focus:Kt(4,o.focus,jt(.5,1,t)),shafts:Kt(e.shafts,o.shafts,jt(.4,.6,t)),vignette:Kt(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,n){let r=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=$n(r,zn(t)),s=jt(0,.12,t)*(1-jt(.82,1,t)),i=Zo(Zo(e.target,o.target,jt(.55,1,t)),n.pos,s),c=Kt(e.fov,o.fov,jt(.3,1,t))-6*Math.sin(Math.PI*t),h=Kt(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return co(a,i,c,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Kt(e.exposure,o.exposure,jt(.25,.75,t)),letterbox:Kt(e.letterbox,o.letterbox,t),focus:Kt(a,o.focus,jt(.8,1,t)),aperture:Kt(.7,o.aperture,jt(.8,1,t)),shafts:Kt(e.shafts,o.shafts,jt(.3,.8,t)),vignette:Kt(e.vignette,o.vignette,t)}},leaf(t){let e=Cb(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:mo($n(LE,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*jt(.8,1,t)}}},{dur:11.5,cam(t,e,o,n){let r=$n([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],jt(0,.8,t)*.6+zn(a0(t/.8))*.4),a=$n([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],zn(jt(.8,1,t))),s=t<.8?r:a,i=Zo(Zo(e.target,n.pos,jt(.03,.22,t)),o.target,jt(.82,1,t)),c=Kt(e.fov,o.fov,jt(.15,.7,t))-6*jt(.6,.8,t)*(1-jt(.85,1,t)),h=Kt(e.roll,o.roll,jt(0,.6,t))-.04*Math.sin(Math.PI*t);return co(s,i,c,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Kt(e.exposure,o.exposure,jt(.5,1,t)),letterbox:Kt(e.letterbox,o.letterbox,t),focus:Kt(a,o.focus,jt(.84,1,t)),aperture:Kt(1.1,o.aperture,jt(.84,1,t)),shafts:Kt(e.shafts,o.shafts,jt(.2,.9,t)),vignette:Kt(e.vignette,o.vignette,jt(.5,1,t))}},leaf(t){let e=Kt(Cb(t),t,.35),o=$n(NE,jt(0,.78,e)),n=Math.sin(t*Math.PI*8)*.35*(1-jt(.55,.76,t)),r=jt(.7,.8,t);return{phase:"fly",pos:mo(o,[n,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(t,e,o){let n=zn(t),r=vi(e,o,n);return r.eye=mo(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(t,e,o){let n=zn(t),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Kt(e[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let n=zn(t),r=$n([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Zo(e.target,o.target,jt(.1,.85,t));return co(r,a,Kt(e.fov,o.fov,jt(.2,1,t)),Kt(e.roll,o.roll,n))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Kt(e[r],o[r],jt(.2,1,t)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return vi(e,o,zn(t))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Kt(e[r],o[r],zn(t)));return n},leaf(){return{phase:"floor"}},walker(t){return Kt(Db,p1(),t)}},{dur:11,kick:t=>a0((t-Lc())/(1-Lc())),cam(t,e,o,n){let r=Lc(),a=jt(0,r,t)*(1-jt(r+.12,r+.35,t)),s=qb(Math.min(t,Rc)),i=mo(e.target,[(s-e.target[0])*.15*a,0,0]),c=jt(r+.12,1,t),h=$n([e.eye,e.eye,mo(e.eye,[0,.12,-.3]),o.eye],c);return i=Zo(i,n.pos,jt(r+.06,r+.24,t)*(1-jt(.9,1,t))),i=Zo(i,o.target,jt(.88,1,t)),co(h,i,Kt(e.fov,o.fov,c),Kt(e.roll,o.roll,c))},look(t,e,o,n,r){let a=Lc(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=jt(0,.12,t)*(1-jt(a+.25,a+.5,t));return{letterbox:Kt(Kt(e.letterbox,o.letterbox,jt(a,1,t)),1.75,i),exposure:Kt(e.exposure,o.exposure,jt(a,1,t)),focus:t<a?e.focus:Kt(e.focus,s,jt(a,a+.2,t)),aperture:Kt(e.aperture,o.aperture,jt(a,1,t)),vignette:Kt(e.vignette,o.vignette,t),shafts:Kt(e.shafts,o.shafts,t)}},leaf(t){let e=a0((t-Lc())/(1-Lc()));if(e<=0)return{phase:"floor"};let o=jt(0,.85,e)*.85+rp(jt(0,.15,e))*.15;return{phase:"fly",pos:mo(ea,[(rf[0]-ea[0])*o+Math.sin(e*9)*.08*(1-e),(rf[1]-ea[1])*o,(rf[2]-ea[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?qb(t):null}},{dur:9,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-jt(.6,.92,t),i=Zo(Zo(e.target,n.pos,jt(0,.15,t)),o.target,1-s),c=Kt(e.fov,o.fov,jt(.3,1,t)),h=Kt(e.roll,o.roll,r)+.04*Math.sin(Math.PI*t);return co(a,i,c,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Kt(e.letterbox,o.letterbox,t),exposure:Kt(e.exposure,o.exposure,jt(.3,.8,t)),focus:Kt(a,o.focus,jt(.6,.95,t)),aperture:Kt(e.aperture,o.aperture,jt(.6,1,t)),vignette:Kt(e.vignette,o.vignette,t),shafts:Kt(e.shafts,o.shafts,jt(.3,.8,t))}},leaf(t){let e=zn(t);return{phase:"fly",pos:mo($n(CE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=zn(t),r=vi(e,o,n);return r.eye=mo(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Kt(e[r],o[r],t));return n.aperture=Kt(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=zn(t);return{phase:"fly",pos:mo($n(PE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=zn(t),r=vi(e,o,n);return r.eye=mo(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Kt(e[r],o[r],t));return n.aperture=Kt(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=zn(t);return{phase:"fly",pos:mo($n([up,[29.2,1.75,45.5],[32.2,1.5,45.4],ip],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=jt(.05,.3,t)*(1-jt(.8,1,t)),i=Zo(Zo(e.target,o.target,jt(.6,1,t)),n.pos,s);return co(a,i,Kt(e.fov,o.fov,jt(.2,1,t)),Kt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Kt(e.letterbox,o.letterbox,t),exposure:Kt(e.exposure,o.exposure,t),focus:Kt(a,o.focus,jt(.8,1,t)),aperture:Kt(.9,o.aperture,jt(.8,1,t)),vignette:Kt(e.vignette,o.vignette,t),shafts:Kt(e.shafts,o.shafts,t)}},leaf(t){let e=$n([ip,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],af],jt(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-jt(.35,.82,t)),n=jt(.78,.88,t);return{phase:"fly",pos:mo(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(t){let e=a0((t-.02)/.09);return rp(e)+.07*Math.sin(a0((t-.08)/.18)*Math.PI)*(1-a0((t-.08)/.3))},cam(t,e,o,n){let r=Math.sin(t*340)*.012*jt(.02,.05,t)*(1-jt(.08,.16,t)),a=jt(.06,1,t),s=$n([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+zn(a)*.45),i=mo(n.pos,[1,-.2,-1.45]);s=Zo(s,i,jt(.1,.22,t)*(1-jt(.52,.72,t)));let c=jt(.06,.16,t)*(1-jt(.86,1,t)),h=Zo(e.target,n.pos,c);h=Zo(h,o.target,jt(.86,1,t));let l=Kt(e.fov,o.fov,jt(.1,1,t))+6*Math.sin(Math.PI*jt(.08,.9,t)),u=Kt(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*jt(.1,.9,t))+r;return co(mo(s,[0,r,0]),h,l,u)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=jt(.02,.06,t)*(1-jt(.08,.3,t));return{letterbox:Kt(e.letterbox,o.letterbox,jt(.1,.4,t)),exposure:Kt(e.exposure,o.exposure,t)*(1+.8*s),focus:Kt(a,o.focus,jt(.86,1,t)),aperture:Kt(.8,o.aperture,jt(.86,1,t)),vignette:Kt(e.vignette,o.vignette,t),shafts:Kt(e.shafts,o.shafts,t)+s}},leaf(t){let e=a0((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=$n(IE(),e*.6+zn(e)*.4),n=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:mo(o,[0,n*.6,n]),tumble:1.4-.8*e}}},...[0,1].map(t=>Fb(t,7.5)),{dur:10,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=jt(0,.15,t)*(1-jt(.85,1,t)),i=Zo(Zo(e.target,o.target,jt(.5,1,t)),n.pos,s);return co(a,i,Kt(e.fov,o.fov,r)+4*Math.sin(Math.PI*r),Kt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Kt(e.letterbox,o.letterbox,t),exposure:Kt(e.exposure,o.exposure,t),focus:Kt(a,o.focus,jt(.85,1,t)),aperture:Kt(.6,o.aperture,jt(.85,1,t)),vignette:Kt(e.vignette,o.vignette,t),shafts:Kt(e.shafts,o.shafts,t)}},leaf(t){let e=zn(t),o=$n(FE(),e);return{phase:"fly",pos:mo(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>Fb(t,7.5)),{dur:10,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=jt(0,.2,t)*(1-jt(.9,1,t)),i=Zo(Zo(e.target,o.target,jt(.5,1,t)),n.pos,s);return co(a,i,Kt(e.fov,o.fov,r),Kt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Kt(e.letterbox,o.letterbox,t),exposure:Kt(e.exposure,o.exposure,t),focus:Kt(a,o.focus,jt(.85,1,t)),aperture:Kt(.7,o.aperture,jt(.85,1,t)),vignette:Kt(e.vignette,o.vignette,t),shafts:Kt(e.shafts,o.shafts,t)}},leaf(t){let e=$n(qE(),jt(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-jt(.4,.84,t)),n=jt(.8,.9,t);return{phase:"fly",pos:mo(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],cp=9.2,Rc=.72;function qb(t){return t<Rc?Kt(p1(),cp,t/Rc):Kt(cp,RE,(t-Rc)/(1-Rc))}function Lc(){return Rc*a0((ea[0]+.15-p1())/(cp-p1()))}var d1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},h1=t=>Object.assign({},d1,xs[t].look),GE=`
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
`;function r0(t,e,o){let n=document.createElement(t);return e&&(n.className=e),o!==void 0&&(n.innerHTML=o),n}var hi=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function u1(t,e,o){t.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(e+r*o).toFixed(2)+"s"})}Gb.exports=function(e){let o=/tourdebug/.test(location.search),{fps:n}=e;if(!document.querySelector("link[data-tour-font]")){let X=document.createElement("link");X.rel="stylesheet",X.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",X.setAttribute("data-tour-font",""),document.head.appendChild(X)}let r=Yd(),a=null;fetch("res/hand.json").then(X=>X.ok?X.json():null).then(X=>{a=X}).catch(()=>{});let s=document.createElement("style");s.textContent=GE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=r0("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=r0("div","tour-mark",hi(c1.name)),h=r0("button","tour-free","Explore freely");h.type="button";let l=r0("div","tour-links",ep.icons("tour-icon"));l.insertBefore(Qd()("tour-icon"),l.firstChild),l.insertBefore(Wh().button("tour-icon"),l.firstChild.nextSibling);let u=r0("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');u.type="button",u.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(u),l1&&l.appendChild(h);let d=r0("div","tour-progress",xs.map(()=>"<i></i>").join("")),p=r0("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),f=p.querySelector("span"),v=r0("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${hi(c1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);u1(v,.4,.35);let m=c1.text.split(/\n\s*\n/).map(X=>`<p class="tour-line">${hi(X.trim())}</p>`).join(""),g=r0("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${hi(c1.title)}</h2>
		<span class="tour-rule"></span>
		${ep.line("tour-line tour-contact")}
		${m}`);u1(g,.25,.28);let x=r0("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);u1(x,.6,.3);let b=r0("div","tour-card tour-master","");function w(X){let xt=r0("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),ne=xt.querySelector(".tour-title"),ge=xt.querySelector(".tour-body");return xt.filled=!1,xt.body=ge,xt.fill=()=>{let we=X();if(!we||xt.filled)return;xt.filled=!0;let hn=we.title||"";xt.querySelector(".tour-kicker").textContent=SE(we)||"Oil on canvas";let ur=xt.querySelector(".visit-row");ur.innerHTML=op.button(we),ur.hidden=!ur.innerHTML;let Or=ur.querySelector(".visit-btn");Or&&(Or.addEventListener("click",bo=>{bo.stopPropagation(),op.open(we)}),xt.warm=()=>op.warm(we));let un=0;ne.innerHTML=hn.split(" ").map(bo=>'<span class="tour-word">'+bo.split("").map(nr=>`<span style="transition-delay:${(.35+un++*.045).toFixed(3)}s">${hi(nr)}</span>`).join("")+"</span>").join(" "),ne.setAttribute("aria-label",hn);let Er=.35+hn.length*.045+.2;xt.querySelector(".tour-rule").style.transitionDelay=Er.toFixed(2)+"s";let dn=String(we.description||"").split(/\n\s*\n/).filter(bo=>bo.trim());if(xt.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&dn.length){ge.innerHTML=dn.map(An=>`<p class="hand-text">${hi(An.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let bo=ge.querySelector("canvas"),nr=dn.map(An=>An.trim()).join(`

`),Jo=!1,Wn=!1,Xr=0;ge.addEventListener("wheel",()=>{Jo=!0},{passive:!0}),ge.addEventListener("touchmove",()=>{Jo=!0},{passive:!0});let Yr=parseFloat(getComputedStyle(ge).fontSize)||17,Qo=r(bo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Yr*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:An=>3.5+An.length/420,seed:3+hn.length,onPen:An=>{if(Jo)return;let q0=An-ge.clientHeight*.55;q0>ge.scrollTop+4&&(ge.scrollTop+=Math.min(16,q0-ge.scrollTop))}});bo.addEventListener("click",An=>{An.stopPropagation(),clearTimeout(Xr),Wn?Qo.finish():(Wn=!0,Qo.write(nr,!0))}),xt.write=()=>{if(clearTimeout(Xr),Jo=!1,Wn){Qo.write(nr,!0);return}Qo.write("",!0),Xr=setTimeout(()=>{Wn=!0,Qo.write(nr)},Er*.6*1e3)},xt.stopWrite=()=>{clearTimeout(Xr),Qo.stop()};let w0=0;window.addEventListener("resize",()=>{clearTimeout(w0),w0=setTimeout(()=>{Wn&&xt.classList.contains("on")&&Qo.write(nr,!0)},250)})}else ge.innerHTML=dn.map(bo=>`<p class="tour-line">${hi(bo.trim())}</p>`).join(""),ge.querySelectorAll(".tour-line").forEach((bo,nr)=>{bo.style.transitionDelay=(Er+.3+Math.min(nr,6)*.35).toFixed(2)+"s"})},xt}let M=()=>e.paintings?e.paintings():[],_=X=>M().find(xt=>xt.side==="corridor"&&Math.abs(xt.paintingPosition[0]-X)<.5),S=w(()=>M().find(X=>X.side==="end")),O=()=>r0("div","tour-card",""),N=w(()=>_(ui[0])),G=w(()=>_(di[0])),F=w(()=>_(pi[0])),j=Sr.map(X=>w(()=>M().find(xt=>xt.side===X.side&&Math.abs(xt.paintingPosition[2]-X.z)<.5))),D=r0("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${l1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${ep.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${l1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);u1(D,.5,.35);let B=[v,g,x,b,S,O(),O(),O(),N,G,F,O(),...j,D];i.append(...B,c,l,d,p),document.body.appendChild(i);let ut=Ob()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{ct=-1,Bt&&(ze={start:k},Bt=!1)}});document.body.classList.add("touring");let Rt=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Nt=Rt?"Scroll":"Swipe",bt=xs.map((X,xt)=>xt===0?Rt?"Scroll to begin":"Swipe up to begin":xt===1?Nt+" to follow the leaf":xt===2?Nt+" to follow the light":xt===3?Nt+" for its story":xt===6||xt===7||xt===xs.length-1?"":Nt+" on"),rt=[0];ap.forEach(X=>rt.push(rt[rt.length-1]+X.dur));let qt=rt[rt.length-1],xe=210,he=95,De=.35,Ae=1.4,ho=.32,yo=1,Uo=1.3,se=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Se=2.2,Ge=.7,ao=.9,uo=!0,Ue=0,Le=0,kt=0,ue=-10,ft=!1,ct=-1,Q=0,ye=0,k=0,Jt=null,Wt=Object.assign({},h1(0)),Te=xs[0].cam(0),Re={phase:"home",pos:Nc.slice(),tumble:0},eo=0,zo=X=>{let xt=0;for(let ne=1;ne<rt.length;ne++)Math.abs(rt[ne]-X)<Math.abs(rt[xt]-X)&&(xt=ne);return xt};function wo(X){let xt=B[X];xt&&xt.fill&&(xt.fill(),xt.body.scrollTop=0,xt.offsetWidth),B.forEach((ne,ge)=>{let we=ne.classList.contains("on");ne.classList.toggle("on",ge===X),ge===X&&!we&&ne.write&&ne.write(),ge!==X&&we&&ne.stopWrite&&ne.stopWrite()}),xt&&xt.warm&&xt.warm(),f.textContent=bt[X]||"",p.classList.toggle("on",!!bt[X])}function Xo(){B.forEach(X=>{X.stopWrite&&X.classList.contains("on")&&X.stopWrite(),X.classList.remove("on")}),p.classList.remove("on")}let gn=null,on=-1;function V(X){if(ut.active||!uo||Jt)return;let xt=k-ue>De;if(ue=k,xt||!gn){let ne=0,ge=qt;for(let we=0;we<rt.length;we++)if(rt[we]<=Ue-.02&&(ne=rt[we]),rt[we]>=Ue+.02){ge=rt[we];break}gn={lo:ne,hi:ge}}k<on||(ft=!1,kt=Math.max(gn.lo,Math.min(gn.hi,kt+X)),kt=Math.max(Ue-Se,Math.min(Ue+Se,kt)))}function mt(X){if(ut.active||!uo||Jt)return;let xt=ft?kt:Ue,ne;if(X>0)ne=rt.findIndex(ge=>ge>xt+.05);else{ne=-1;for(let ge=rt.length-1;ge>=0;ge--)if(rt[ge]<xt-.05){ne=ge;break}}ne<0||(kt=rt[ne],ft=!0,ue=k)}let zt=null,Et=X=>X.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(X=>i.addEventListener(X,Et)),i.addEventListener("pointerdown",X=>{if(X.stopPropagation(),!(X.target.closest("button, a")||X.target.closest(".tour-body"))){zt={x:X.clientX,y:X.clientY,lx:X.clientX,ly:X.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(X.pointerId)}catch(xt){}}}),i.addEventListener("pointermove",X=>{if(!zt)return;let xt=X.clientX-zt.lx,ne=X.clientY-zt.ly;zt.lx=X.clientX,zt.ly=X.clientY;let ge=Math.abs(ne)>=Math.abs(xt)?-ne:-xt;zt.moved+=Math.abs(ge);let we=performance.now(),hn=ge/he;zt.v=zt.v*.6+hn/Math.max(.008,(we-zt.lt)/1e3)*.4,zt.lt=we,zt.moved>6&&V(hn)});let Qt=X=>{let xt=zt;if(zt=null,!!xt){if(ut.active){xt.moved<10&&performance.now()-xt.t<500?ut.tap():xt.y-(X?X.clientY:xt.ly)>30&&ut.swipe(1);return}xt.moved<10&&performance.now()-xt.t<500?mt(1):performance.now()-xt.lt<120&&V(Math.max(-1.6,Math.min(1.6,xt.v*.22)))}};i.addEventListener("pointerup",X=>{X.stopPropagation(),Qt(X)}),i.addEventListener("pointercancel",()=>{zt=null}),i.addEventListener("wheel",X=>{if(ut.active){if(X.target.closest(".conf-ui"))return;X.preventDefault(),ut.wheel(X.deltaY);return}if(X.target.closest(".tour-body")){let ne=X.target.closest(".tour-body"),ge=ne.scrollTop+ne.clientHeight>=ne.scrollHeight-2&&X.deltaY>0,we=ne.scrollTop<=0&&X.deltaY<0;if(!ge&&!we)return}X.preventDefault();let xt=X.deltaMode===1?X.deltaY*16:X.deltaMode===2?X.deltaY*window.innerHeight:X.deltaY;V(xt/xe)},{passive:!1}),window.addEventListener("keydown",X=>{if(!uo||Jt||document.body.classList.contains("visiting"))return;if(ut.active){if(X.stopImmediatePropagation(),X.target&&/TEXTAREA|INPUT|BUTTON/.test(X.target.tagName))return;ut.key(X.key)&&X.preventDefault();return}let xt=X.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(xt)>=0){if((xt==="Enter"||xt===" ")&&X.target&&X.target.tagName==="BUTTON")return;X.preventDefault(),X.stopImmediatePropagation(),mt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(xt)>=0?(X.preventDefault(),X.stopImmediatePropagation(),mt(-1)):xt==="Escape"?(X.preventDefault(),Ie()):/^[wasdzq]$/i.test(xt)&&X.stopImmediatePropagation()},!0),window.addEventListener("keyup",X=>{uo&&!Jt&&/^(Arrow|[wasdzq]$)/i.test(X.key)&&X.stopImmediatePropagation()},!0),h.addEventListener("click",X=>{X.stopPropagation(),Ie()}),["mousedown","pointerdown"].forEach(X=>u.addEventListener(X,xt=>xt.stopPropagation())),u.addEventListener("click",X=>{X.stopPropagation(),le()});let oe=co([8.6,1.75,44.3],[-3,1.85,44.5],55,0),ee=null,Bt=!1;function le(){if(!uo||Jt||ut.active||ee)return;Xo(),ct=-2;let X=Te.eye;if(X[0]>.5&&X[0]<13.5&&X[2]>36&&X[2]<50){Bt=!1,ut.start(Te,Wt);return}ee={t:0}}D.addEventListener("click",X=>{let xt=X.target.closest("button");xt&&(X.stopPropagation(),xt.dataset.act==="free"&&Ie(),xt.dataset.act==="replay"&&no(),xt.dataset.act==="list"&&mu().show(!1),xt.dataset.act==="confess"&&(Xo(),ct=-2,ut.start(Te,Wt)))});let Ee=[null,[x0.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Oc[0]-7,0],[42.5+Oc[1]-7,0],[42.5+Oc[2]-7,0],[1e3,Math.PI/2],...Sr.map(X=>[X.z-1.6,X.side==="left"?-Math.PI/2:Math.PI/2]),[ys[2]-1.6,Math.PI]],We=null,$e=0;function Ie(){if(!uo||Jt||!l1)return;let X=zo(Ue),xt=Ee[X];We=X<=1?{phase:"home",pos:Nc.slice()}:X>=3&&X<=6?{phase:"floor",pos:ea.slice()}:X===11?{phase:"floor",pos:af.slice()}:X===18?{phase:"floor",pos:ys.slice()}:null,$e=X>=12?1:0,xt&&n.place&&n.place(xt[0],xt[1]),Jt={start:k,fromCam:Te,fromLook:Object.assign({},Wt)},Xo(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function no(){Ue=kt=0,Le=0,ft=!1,ct=-1,Q=0,ye=0,Re={phase:"home",pos:Nc.slice(),tumble:0},ze={start:k}}let ze={start:-1},go=!1,$o=[],Oe={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Wo(X){eo+=X*(Re.phase==="floor"?0:1);let xt=Re.tumble===void 0?0:Re.tumble,ne=Tc.fromTranslation($o,Re.pos);if(Re.phase==="home")ne=Tc.rotateY(ne,ne,2.2+Math.sin(eo*.9)*.15),ne=Tc.rotateZ(ne,ne,-1+Math.sin(eo*1.3)*.12),ne=Tc.rotateX(ne,ne,.4);else if(Re.phase==="floor")ne=Tc.rotateY(ne,ne,.65),ne=Tc.rotateX(ne,ne,.16);else{let ge=Re.pos;if(Oe.prev&&X>0){let zr=[ge[0]-Oe.prev[0],ge[1]-Oe.prev[1],ge[2]-Oe.prev[2]];if(Math.hypot(zr[0],zr[1],zr[2])<1.5){let Hc=Math.min(1,X*6);for(let Es=0;Es<3;Es++)Oe.vel[Es]+=(zr[Es]/X-Oe.vel[Es])*Hc}else Oe.vel=[0,0,0]}Oe.prev=ge.slice();let we=Oe.vel,hn=Math.hypot(we[0],we[1],we[2]),ur=jt(.25,1.4,hn),Or=jt(.5,2,-we[1]),un=eo*.35*(.3+xt)+.65,Er=[Math.cos(un),0,Math.sin(un)];hn>.001&&(Er=Zo(Er,jr(we,-1/hn),ur));let dn=Math.min(1,X*4);Oe.axis=Zo(Oe.axis,Er,Oe.fresh?1:dn);let bo=Oe.axis,nr=Math.hypot(bo[0],bo[1],bo[2])||1;bo=jr(bo,1/nr);let Jo=Te.eye,Wn=[Jo[0]-ge[0],Jo[1]-ge[1],Jo[2]-ge[2]],Xr=Math.hypot(Wn[0],Wn[1],Wn[2])||1,Yr=Kt(.6,.22,ur),Qo=[Wn[0]/Xr*Yr,1+Wn[1]/Xr*Yr,Wn[2]/Xr*Yr],w0=bo[0]*Qo[0]+bo[1]*Qo[1]+bo[2]*Qo[2];Qo=np(Qo,jr(bo,w0));let An=Math.hypot(Qo[0],Qo[1],Qo[2])||1;Qo=jr(Qo,1/An);let q0=[bo[1]*Qo[2]-bo[2]*Qo[1],bo[2]*Qo[0]-bo[0]*Qo[2],bo[0]*Qo[1]-bo[1]*Qo[0]],Ro=Math.hypot(we[0],we[2]),pn=0;if(Ro>.15&&Oe.dir&&X>0){let zr=[we[0]/Ro,we[2]/Ro];pn=(Oe.dir[0]*zr[1]-Oe.dir[1]*zr[0])/X,Oe.dir=zr}else Ro>.15&&(Oe.dir=[we[0]/Ro,we[2]/Ro]);Oe.bank+=(Math.max(-.8,Math.min(.8,pn*.3))*ur-Oe.bank)*Math.min(1,X*3),Oe.rock+=X*(1.5+2.4*ur),Oe.spin+=X*Or*7*(.4+xt);let _0=Math.sin(Oe.rock)*(.26+.45*xt)*(1-.5*Or)+Oe.bank+Oe.spin,ks=Math.sin(Oe.rock*.63+1)*(.16+.3*xt)+(Re.swing||0)*.9,na=Math.cos(_0),Ss=Math.sin(_0),df=mo(jr(Qo,na),jr(q0,Ss)),Ia=mo(jr(q0,na),jr(Qo,-Ss));na=Math.cos(ks),Ss=Math.sin(ks);let yi=mo(jr(bo,na),jr(df,Ss)),Dc=mo(jr(df,na),jr(bo,-Ss)),x1=Math.sin(Oe.rock+1.5708)*.035*(.3+xt)*(1-.5*ur),ga=mo(ge,jr(q0,x1)),Gc=[yi[0],yi[1],yi[2],0,Dc[0],Dc[1],Dc[2],0,Ia[0],Ia[1],Ia[2],0,ga[0],ga[1],ga[2],1];for(let zr=0;zr<16;zr++)ne[zr]=Gc[zr];Oe.fresh=!1}return Re.phase!=="fly"&&(Oe.prev=null,Oe.vel=[0,0,0],Oe.fresh=!0,Oe.spin=0,Oe.bank=0,Oe.dir=null),{visible:!0,model:ne}}function b0(X){for(let xt in d1)Wt[xt]=X[xt]!==void 0?X[xt]:d1[xt]}function ma(X,xt){if(X<=1)return{phase:"home",pos:Nc.slice(),tumble:0};let ne=Ib[X];if(ne){let ge=ne.amp;return{phase:"fly",pos:mo(ne.pos(),[Math.sin(xt*.55)*ge[0],Math.sin(xt*.8)*ge[1],(1-Math.cos(xt*.45))*ge[2]]),tumble:ne.tumble}}return{phase:"floor",pos:(X>=18?ys:X>=10?af:ea).slice(),tumble:0}}let lo=0,ko=null;function jn(X){let xt=Math.min(.1,Math.max(0,X-lo));if(lo=X,k=X,go||(go=!0,ze.start=X),Jt)return null;if(ee&&(ee.t+=xt,ee.t>=.7&&(ee=null,Bt=!0,ut.start(oe,Object.assign({},d1,{fade:1,fadeColor:[0,0,0]})))),ut.active){let Ro=ut.update(xt);return Te=Ro.camera,b0(Ro.look),o&&window.__camOverride&&(Te=window.__camOverride),o&&window.__lookOverride&&Object.assign(Wt,window.__lookOverride),{camera:Te,walker:null,door:1,look:Wt,leaf:Wo(xt)}}if(!ft&&!zt&&k-ue>Ge){let Ro=zo(kt);Math.abs(rt[Ro]-kt)<ao&&(kt=rt[Ro])}let ne=kt-Ue;if(ft){let pn=Math.sign(ne)*Math.min(yo,Math.sqrt(2*Uo*Math.abs(ne)))-Le;Le+=Math.sign(pn)*Math.min(Math.abs(pn),Uo*xt),Ue+=Le*xt,(ne>0&&Ue>=kt||ne<0&&Ue<=kt||Math.abs(kt-Ue)<1e-4)&&(Ue=kt,Le=0,ft=!1)}else{let Ro=zE(Ue,kt,Le,ho,xt,3);Ue=Ro[0],Le=Ro[1],Math.abs(kt-Ue)<1e-4&&Math.abs(Le)<.001&&(Ue=kt,Le=0)}let ge=0;for(;ge<ap.length-1&&Ue>=rt[ge+1];)ge++;let we=ap[ge],hn=a0((Ue-rt[ge])/we.dur),ur=xs[ge],Or=xs[ge+1],un=zo(Ue);un!==Q&&(Q=un,ye=0);let Er=Math.abs(Ue-rt[un])<.02;Er&&(ye+=xt);let dn=1-jt(0,1.2,Math.abs(Ue-rt[un])),bo=we.leaf(hn);if(bo.pos?Re=Object.assign({},bo):Re=Object.assign({},bo,{pos:bo.phase==="home"?Nc.slice():(ge>=10?af:ea).slice()}),Ib[un]&&dn>0){let Ro=ma(un,ye);Re.pos=Zo(Re.pos,Ro.pos,dn)}let nr=we.walker&&(hn>.01||ge===6)?we.walker(hn):null;ko=nr==null?null:{x:nr,z:sp,heading:Math.PI/2,phase:(nr-Db)/OE};let Jo=we.cam(hn,ur.cam(0),Or.cam(0),Re);if(dn>0&&ye>0){let Ro=xs[un],pn=Ro.cam(0),_0=Ro.cam(ye);Jo=co(mo(Jo.eye,jr(np(_0.eye,pn.eye),dn)),mo(Jo.target,jr(np(_0.target,pn.target),dn)),Jo.fov+(_0.fov-pn.fov)*dn,Jo.roll+(_0.roll-pn.roll)*dn)}if(dn>0&&!se){let Ro=k,pn=.006*dn,_0=Math.sin(Ro*.61)*.6+Math.sin(Ro*1.37+1.3)*.4,ks=Math.sin(Ro*.47+2.1)*.6+Math.sin(Ro*1.13+.4)*.4,na=Math.sin(Ro*.53+4)*.5+Math.sin(Ro*.97+2.6)*.5;Jo=co(mo(Jo.eye,[_0*pn,ks*pn*.7,na*pn]),mo(Jo.target,[ks*pn*1.8,_0*pn*1.4,0]),Jo.fov,Jo.roll+na*.0012*dn)}Te=Jo;let Wn=h1(ge),Xr=h1(ge+1),Yr=Object.assign({},Wn,we.look(hn,Wn,Xr,Re,Jo.eye));if(dn>0){let Ro=h1(un);for(let pn in Ro)typeof Ro[pn]=="number"&&(Yr[pn]=Kt(Yr[pn],Ro[pn],dn))}b0(Yr);let w0=Er&&Math.abs(kt-Ue)<.02?un:-1;w0!==ct&&(w0>=0&&(on=k+Ae),ct=w0,w0>=0?wo(w0):Xo()),d.querySelectorAll("i").forEach((Ro,pn)=>Ro.classList.toggle("on",pn===un));let An=ct>=0?B[ct]:null;An&&An.fill&&!An.filled&&(An.fill(),An.filled&&(An.classList.remove("on"),An.offsetWidth,An.classList.add("on")));let q0=a0((X-ze.start)/2.6);return q0<1&&(Wt.fade=Math.max(Wt.fade,1-jt(0,1,q0)),Wt.fadeColor=[0,0,0]),o&&window.__camOverride&&(Te=window.__camOverride),o&&window.__lookOverride&&Object.assign(Wt,window.__lookOverride),{camera:Te,walker:ko,door:we.door?we.door(hn):ge>=12?1:0,look:ee?Object.assign(Wt,{fade:Math.max(Wt.fade||0,a0(ee.t/.6)),fadeColor:[0,0,0]}):Wt,leaf:Wo(xt)}}return o&&(window.__tour={go:mt,exit:Ie,wind:V,confess(){Xo(),ct=-2,ut.start(Te,Wt)},note:()=>le(),conf:ut,paper:r1().STATE,seek(X,xt){Ue=kt=rt[X]+(rt[X+1]-rt[X])*xt,Le=0,ft=!1,ue=k+1e6,ze.start=k-10,go=!0},jump(X){Ue=kt=rt[X],Le=0,ft=!1,ye=0,ue=k,ze.start=k-10,go=!0},state:()=>({current:zo(Ue),scroll:+Ue.toFixed(3),target:+kt.toFixed(3),shown:ct,move:Math.abs(kt-Ue)>.02?{p:Ue}:null,camNow:Te,leaf:Re,look:Wt})}),{update:jn,get active(){return uo&&!Jt},handover(X){if(!Jt)return null;let xt=a0((X-Jt.start)/1.8);return xt>=1?(uo=!1,null):{from:Jt.fromCam,fromLook:Jt.fromLook,k:zn(xt)}},restingDoor:()=>$e,restingLeaf(){return We?(Re=We,Wo(0)):null},mix:vi,cam:co}}});var HE=_m(),oa=S0(),kp=mu(),g1=oa.reflection,UE=!1,a5=(t,e,o,n,r)=>n+(t-e)*(r-n)/(o-e),Sp=()=>a5(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Sp=()=>a5(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var s5=()=>2*Math.atan(Math.tan(Sp()*.5)*window.innerHeight/window.innerWidth),BE=Pm(),ff=new BE;ff.showPanel(0);UE&&document.body.appendChild(ff.dom);var _n,qc,mp,$c,gp,wn;function jE(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!jE())throw HE.finish(),kp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");_n=$m()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:oa.pixelRatio});location.hash==="#list"&&kp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&kp.show(!1)});qc=_2()();var WE=Vu();mp=WE(_n,qc,g1);$c=Hg()(_n,qc);gp=Wg()(_n);var Ub=c3()(_n,qc),Bb=y3()(_n),jb=_3()(_n),Wb=q3()(_n),Vb=B3()(_n),Xb=Y3()(_n),_s=fx()(_n),xp=Ed(),i5=Vf(),VE=fl(),yp=Ad(),bp=ir(),or=Ah(),wp=bx(),c5=Wh(),{A:Pc}=A0();wn=ob()(qc,s5);var Ic=ab()(_n,oa),bs=fb()(_n),Yb=ub()(_n),XE=vb()(_n,oa),YE=wb()(_n,oa),Kb=Xa()(_n),Qb=r1()(_n),Zb=Qa()(_n),Jb=Ws()(_n),va=Hb()({fps:wn,paintings:()=>$c.interactables(),avatar:_s,onExit:()=>wn.setPaused(!1)});wn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Ic);var ws=[],Fc=[],Rr=[7,2,1.6];qc.viewer=Rr;var KE=_n({cull:{enable:!0,face:"back"},uniforms:{view:()=>ws,proj:()=>Fc,yScale:1,mirrorOn:()=>g1?1:0,night:()=>bp.night,time:_n.context("time")}}),QE=_n({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),l5=document.createElement("style");l5.textContent=`

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
`;document.head.appendChild(l5);var F0=document.createElement("button");F0.className="painting-plaque";F0.type="button";F0.setAttribute("aria-label","Read painting");document.body.appendChild(F0);var Vr=document.createElement("div");Vr.className="story-overlay";Vr.innerHTML=`

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

		${i5.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Vr);var Ms=document.createElement("div");Ms.className="museum-links";Ms.innerHTML=i5.icons("museum-link");Ms.insertBefore(Qd()("museum-link"),Ms.firstChild);Ms.insertBefore(c5.button("museum-link"),Ms.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>Ms.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(Ms);var ZE=Vr.querySelector("#story-title"),JE=Vr.querySelector("#story-body"),t5=Vr.querySelector("#story-meta"),tz=Vr.querySelector(".story-contact"),lf=Vr.querySelector(".story-visit");lf.addEventListener("click",t=>{t.target.closest(".visit-btn")&&xi&&yp.open(xi)});var ez=Vr.querySelector(".story-close"),xi=null,s0={p:0,target:0,last:0},f5={title:xp.title,description:xp.text,isAbout:!0},$a=null;function Ep(t){t&&(xi=t,ZE.textContent=t.title||"",JE.textContent=t.description||"",t5.textContent=t.isAbout?"":VE(t),t5.hidden=!!t.isAbout,tz.hidden=!t.isAbout,lf.innerHTML=t.isAbout?"":yp.button(t),lf.hidden=!lf.innerHTML,lf.hidden||yp.warm(t),Vr.classList.toggle("about-mode",!!t.isAbout),Vr.classList.add("open"),s0.target=t.isAbout?1:0,$a=t,F0.classList.remove("visible"),wn.setPaused(!0))}function zp(){Vr.classList.remove("open"),s0.target=0,xi=null,$a=null,wn.setPaused(!1)}function h5(t){t&&(t.preventDefault(),t.stopPropagation()),$a&&Ep($a)}F0.addEventListener("pointerup",h5,!0);F0.addEventListener("touchend",h5,{passive:!1,capture:!0});F0.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),xi===null&&$a&&Ep($a)},!0);ez.addEventListener("click",zp);Vr.addEventListener("click",t=>{t.target===Vr&&zp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&Vr.classList.contains("open")&&zp()});function e5(t,e){let o=e[0],n=e[1],r=e[2];return[t[0]*o+t[4]*n+t[8]*r+t[12],t[1]*o+t[5]*n+t[9]*r+t[13],t[2]*o+t[6]*n+t[10]*r+t[14],t[3]*o+t[7]*n+t[11]*r+t[15]]}function oz(){if(xi)return;if(va.active){$a=null,F0.classList.remove("visible");return}let t=$c.interactables(),e=wn.forward[0],o=wn.forward[2],n=Math.hypot(e,o)||1,r=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,h=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?h=1:h=-1;let l=i[0]-wn.pos[0],u=i[2]-wn.pos[2],d=-(l*c+u*h),p=Math.abs(l*h-u*c),f=-(e*c+o*h)/n,v=s.side==="end"?11:8,m=(s.width||2)/2;f>.9&&d>.5&&d<v&&p<m+.8&&d<a&&(r=s,a=d)}if(!r){let s=wn.pos[0],i=wn.pos[2];e/n>.85&&s<13.6&&i>Pc.z0-.5&&i<Pc.z1+.5&&(r=Object.assign({},f5,{plaqueTitle:xp.name}))}r?($a=r,F0.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,F0.classList.add("visible")):($a=null,F0.classList.remove("visible"))}var uf=rc();function nz(){let t=_s.state;if(!t||!t.glowPos)return null;let e=e5(wn.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=e5(wn.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var _p=null;window.addEventListener("pointerdown",t=>{_p={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=_p;if(_p=null,!e||xi||va.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=nz();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:t.clientX,a=n?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),Ep(f5))},!0);function rz(t){let e=Math.min(Math.max(t-s0.last,0),.1);s0.last=t;let o=e/1.6;if(s0.p=s0.target>s0.p?Math.min(1,s0.p+o):Math.max(0,s0.p-o),s0.p<=0)return;let n=s0.p<.5?2*s0.p*s0.p:1-Math.pow(-2*s0.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=_s.state,s=a&&a.hipsPos?a.hipsPos[0]:Pc.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:Pc.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],h=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=wn.pos,u=wn.forward,d=[l[0],l[1],l[2]],p=[l[0]+u[0],l[1]+u[1],l[2]+u[2]],f=(x,b)=>x.map((w,M)=>w+(b[M]-w)*n),v=[Pc.cx-6.2,1.7,Pc.zc],m=1-n,g=d.map((x,b)=>m*m*x+2*m*n*v[b]+n*n*c[b]);uf.lookAt(wn.view(),g,f(p,h),[0,1,0])}var u5=/[?&]studio\b/.test(location.search);if(u5){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",e=>{Mp.takes(e)||ir().toggle()}),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&ir().toggle()})}var Mp=(()=>{let t={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},e=null,o=null,n=null,r=(c,h)=>{n&&(n.textContent=c,n.classList.add("on"),t.hintUntil=h?t.now+h:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),e=document.createElement("div"),e.className="koi-feed",e.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(e),o=e.querySelector(".koi-feed-btn"),n=e.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",h=>{h.stopPropagation(),t.mode==="idle"&&(t.mode="aim",t.holdAt=t.now-t.offset,t.since=t.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),r("Touch the water where it should fall"))})},s=(c,h)=>{let l=uf.multiply([],Fc,ws),u=uf.invert([],l);if(!u)return null;let d=c/window.innerWidth*2-1,p=1-h/window.innerHeight*2,f=[0,0,0,0];for(let v=0;v<4;v++)f[v]=u[v]*d+u[4+v]*p+u[8+v]*1+u[12+v];return[f[0]/f[3]-Rr[0],f[1]/f[3]-Rr[1],f[2]/f[3]-Rr[2]]},i=()=>{t.holdAt!==null&&(t.offset=t.now-t.holdAt),t.holdAt=null,t.mode="idle",t.doneShot=t.lastShot,document.body.classList.remove("koi-aim"),n&&n.classList.remove("on")};return{time(c){return t.now=c,t.holdAt!==null?t.holdAt:c-t.offset},update(c){e||a(),c.shot!==t.lastShot&&(t.lastShot=c.shot);let h=Ws();t.mode==="idle"?o.classList.toggle("on",!!c.pond&&t.doneShot!==c.shot):t.mode==="aim"?t.now-t.since>40&&i():t.mode==="watch"&&(h.feeding()&&(t.fedTill=t.now),(t.now-t.fedTill>5&&t.now-t.since>8||t.now-t.since>60)&&i()),t.hintUntil&&t.now>t.hintUntil&&(n.classList.remove("on"),t.hintUntil=0)},takes(c){if(t.mode==="idle")return!1;let h=Ws(),l=s(c.clientX,c.clientY),u=l&&h.poolHit(Rr,l);return u?(h.feedAt(u[0],u[1]),t.fedTill=t.now,t.mode==="aim"&&r("and they come, like embers through the dark",5),t.mode="watch",t.since=t.now,document.body.classList.remove("koi-aim"),!0):(t.mode==="aim"&&r("Upon the water, there\u2026"),!0)}}})(),mi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},gi=null,hf=!1,v1=!1;function az(t,e,o,n){let r=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),h=Math.sin(n);return uf.lookAt(t,e,o,[s[0]*h,c,s[2]*h])}function sz(t){let e=window.innerWidth/window.innerHeight,o=Ic.shot,n=va.active?va.update(t):null,r=n?null:va.handover(t),a=null,s=mi;if(n){a=n.camera,s=n.look,gi=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;_s.setWalk(i),hf=!!i,bs.setOpen(n.door||0)}else gi=va.restingLeaf(),_s.setWalk(null),hf=!1,bs.setOpen(va.restingDoor());if(r){let i=wn.pos,c=wn.forward,h=va.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],s5()*180/Math.PI,0);a=va.mix(r.from,h,r.k),s={};for(let l in mi)s[l]=Array.isArray(mi[l])?mi[l]:r.fromLook[l]+(mi[l]-r.fromLook[l])*r.k}if(a&&n&&(a=wp.apply(a,t)),u5&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=Ws().previewCam(Mp.time(t));Mp.update(i),a=i,s=Object.assign({},mi,{fade:i.fade,focus:8})}if(a)az(ws,a.eye,a.target,a.roll||0),uf.perspective(Fc,a.fov*Math.PI/180,e,.1,700),Rr[0]=a.eye[0],Rr[1]=a.eye[1],Rr[2]=a.eye[2];else{let i=wn.view(),c=wn.proj();for(let d=0;d<16;d++)ws[d]=i[d],Fc[d]=c[d];let h=i[12],l=i[13],u=i[14];Rr[0]=-(i[0]*h+i[1]*l+i[2]*u),Rr[1]=-(i[4]*h+i[5]*l+i[6]*u),Rr[2]=-(i[8]*h+i[9]*l+i[10]*u)}for(let i in mi)o[i]=s[i];n&&wp.pull(o,t)}var y0={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},dp=[9,9,9,9],o5=[0,0,0,0],sf=0,pp=0,Cc=null,n5=0,r5=0,cf=0;function iz(t){let e=Math.min(.1,Math.max(0,t-n5));n5=t,y0.focus=Ic.shot.focus,y0.aperture=oa.post>=2?Ic.shot.aperture:0;for(let s=0;s<4;s++)dp[s]+=e,y0.wake[s][3]=o5[s]*Math.exp(-dp[s]/1.1);let o=gi&&gi.visible?gi.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(Cc){let i=[s[0]-Cc[0],s[1]-Cc[1],s[2]-Cc[2]],c=Math.hypot(i[0],i[1],i[2]),h=c/e;if(c<1.5&&h>.12){let l=Math.min(1,e*8);for(let d=0;d<3;d++)y0.wakeDir[d]+=(i[d]/c-y0.wakeDir[d])*l;let u=Math.hypot(y0.wakeDir[0],y0.wakeDir[1],y0.wakeDir[2])||1;for(let d=0;d<3;d++)y0.wakeDir[d]/=u;if(pp+=e,pp>.14){pp=0;let d=y0.wake[sf];d[0]=s[0],d[1]=s[1],d[2]=s[2],o5[sf]=Math.min(1,(h-.12)/1.6)*.5,dp[sf]=0,sf=(sf+1)%4}}}Cc=s}else o||(Cc=null);let n=bs.openNow?bs.openNow():0,r=e>0?(n-r5)/e:0;r5=n;let a=Math.max(-1,Math.min(1,r*1.2));cf+=(a-cf)*Math.min(1,e*(Math.abs(a)>Math.abs(cf)?6:.7)),y0.gust[0]+=cf*5.5*e,y0.gust[1]=Math.abs(cf)}var vp=0,m1=!1;_n.frame(function({time:t}){if(document.body.classList.contains("visiting")){vp=0;return}ff.begin(),bp.tick(t);let e=va.active&&wp.resting&&bp.settled&&(oa.isPhone||oa.scale<1||oa.level>0);if(e){if(m1=!m1,m1){ff.end();return}}else m1=!1;let o=t-vp;vp=t,oa.frame(e?o/2:o),g1=oa.reflection,wn.tick({time:t}),rz(t),$c.update(wn.pos,wn.fmouse[1],Sp()),oz(),sz(t),or.update(ws,Fc,Rr),c5.listen(Rr),v1=!hf&&or.room("stair")&&(!or.room("court")||Rr[0]<.5||Rr[2]>30),_s.setPiano(v1),iz(t),Ic.capture(arguments[0],{view:ws,proj:Fc,eye:Rr},()=>{KE(()=>{g1&&or.floor&&QE(()=>{or.room("studio",!0)&&Jb({reflected:!0}),or.zone!=="studio"&&(mp(),Ub({reflected:!0}),Kb(),or.room("stair",!0)&&(Zb({reflected:!0}),Qb({reflected:!0,view:ws})),or.room("court",!0)&&Xb(),(v1||or.room("court",!0)||hf)&&_s(),gp($c.batch()),or.room("street",!0)&&Bb(),or.room("garden",!0)&&Wb(),or.room("florence",!0)&&Vb(),Yb(gi),bs(),jb(),bs.glass())}),or.room("studio")&&Jb(),or.zone!=="studio"&&(mp(),Ub(),Kb(),or.room("stair")&&(Zb(),Qb({view:ws})),or.room("court")&&Xb(),(v1||or.room("court")||hf)&&_s(),gp($c.batch()),or.room("street")&&Bb(),or.room("garden")&&(Wb(),YE()),or.room("florence")&&Vb(),Yb(gi),bs(),XE(y0),jb(),bs.glass())})}),Ic.present(),ff.end()});})();
