"use strict";(()=>{var de=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Sm=de((mA,Em)=>{"use strict";var P0=document.getElementById("loader"),R0=P0&&P0.querySelector(".loader-name"),Jc=0,Of=0,If=!1,G4=performance.now(),O0=.06,N0=0,c1=0,bm=!1,$4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function q4(e){if(!R0)return;let t=R0.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";R0.style.webkitMaskPosition=n,R0.style.maskPosition=n}function Mm(e){let t=Math.min(.05,c1?(e-c1)/1e3:.016);c1=e;let o=If?.75:.22+(O0-N0)*1.2;if(N0=Math.min(O0,N0+Math.max(0,o)*t),$4&&(N0=O0),q4(N0),If&&N0>=.999){bm||(bm=!0,setTimeout(km,650));return}requestAnimationFrame(Mm)}R0&&requestAnimationFrame(Mm);function wm(){let e=Jc?Of/Math.max(Jc,24):0;O0=Math.max(O0,Math.min(.9,.06+e*.84))}function km(){P0&&(P0.classList.add("done"),setTimeout(()=>P0.remove(),1400))}function l1(){If||(If=!0,window.__galleryReady=!0,P0&&(O0=1,R0||km()))}var _m=null;function H4(){clearTimeout(_m),Of>=Jc&&performance.now()-G4>600&&(_m=setTimeout(()=>{Of>=Jc&&l1()},450))}setTimeout(l1,2e4);var U4=e=>/(^|\/)(res|images)\//.test(e),Pf=window.fetch.bind(window);async function B4(e,t){let o=await Pf(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!U4(o))return Pf(e,t);Jc++,wm();let n=a=>(Of++,wm(),H4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=B4(o,t).catch(()=>Pf(e,t)):r=Pf(e,t),r.then(n,a=>{throw n(),a})};Em.exports={finish:l1}});var ha=de((gA,Lm)=>{"use strict";var Am=typeof navigator!="undefined"&&navigator.userAgent||"",j4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Va=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Am)||/Macintosh/.test(Am)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||j4,Ff=typeof window!="undefined"&&window.devicePixelRatio||1,W4=typeof location!="undefined"&&/[?&](studio|redroom)\b/.test(location.search),vo={isPhone:Va,pixelRatio:W4?Va?Math.min(Ff,1.25):Math.min(Ff,1.5):Va?Math.min(Ff,1.5):Math.min(Ff,2),reflection:!Va,gardenDetail:Va?0:1,leafShare:Va?.65:1,motion:!Va,post:Va?1:2,level:Va?1:0};vo.scale=1;var V4=Va?.55:.6,el=0,Df=0,tl=0,ol=0,I0=1,nl=0,Gf=48,F0=null,f1=0;function X4(e){F0={fps:e,scale:vo.scale},vo.scale>.86?vo.scale=.85:vo.reflection?vo.stepDown():vo.scale>.71?vo.scale=.7:vo.stepDown()||(vo.scale=Math.max(V4,vo.scale-.1))}var Tm=!0;try{/[?&]noadapt\b/.test(location.search)&&(Tm=!1)}catch(e){}vo.frame=e=>{if(!Tm)return;if(!(e>0)||e>1){el=0,Df=0;return}if(el+=e,Df++,el<.75)return;let t=Df/el;if(el=0,Df=0,nl>0&&(nl-=.75,nl<=0&&(I0=1)),F0){if(t<F0.fps*1.08&&F0.scale>vo.scale){if(++f1>=2){vo.scale=1,I0=1,nl=0,Gf=Math.min(Gf,t*.85),f1=0,tl=0,F0=null;return}}else f1=0;F0=null}if(t<Gf){if(ol=0,++tl>=2){if(tl=0,vo.scale>.61&&vo.climbed){I0=vo.scale-.05,nl=40,vo.scale=I0,vo.climbed=!1;return}X4(t)}}else t>Math.max(Gf*1.15,55)?(tl=0,++ol>=6&&vo.scale<I0-.001?(vo.scale=Math.min(I0,vo.scale+.05),vo.climbed=!0,ol=0):ol>=6&&(vo.climbed=!1)):(tl=0,ol=0)};vo.stepDown=()=>{if(vo.reflection)vo.reflection=!1;else if(vo.gardenDetail>0||vo.motion)vo.gardenDetail=0,vo.motion=!1,vo.leafShare=Math.min(vo.leafShare,.65);else if(vo.post>0)vo.post--;else return!1;return vo.level++,!0};Lm.exports=vo});var h1=de((xA,zm)=>{"use strict";zm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var $f=de((yA,Rm)=>{"use strict";var Sr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Cm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Nm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Sr.instagramUrl="https://instagram.com/"+Sr.instagram;Sr.mailUrl="mailto:"+Sr.email+"?subject="+encodeURIComponent("Your paintings");Sr.icons=e=>`
	<a class="${e}" href="${Sr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Sr.instagram}" title="Instagram">${Cm}</a>
	<a class="${e}" href="${Sr.mailUrl}" aria-label="Email ${Sr.email}" title="Email">${Nm}</a>`;Sr.line=e=>`
	<span class="${e}">
		<a href="${Sr.instagramUrl}" target="_blank" rel="noopener">${Cm}<span>@${Sr.instagram}</span></a>
		<a href="${Sr.mailUrl}">${Nm}<span>${Sr.email}</span></a>
	</span>`;Rm.exports=Sr});var rl=de((bA,Pm)=>{"use strict";Pm.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var u1=de((wA,Fm)=>{"use strict";var Y4=h1(),K4=$f(),Om=rl(),Q4=ha(),Ni=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Z4=`
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
`,Ar=null;function J4(e){if(Ar){Ar.hidden=!1,requestAnimationFrame(()=>Ar.classList.add("on"));return}let t=document.createElement("style");t.textContent=Z4,document.head.appendChild(t);let o=!Q4.isPhone;Ar=document.createElement("div"),Ar.className="plist",Ar.setAttribute("role","region"),Ar.setAttribute("aria-label","All paintings"),Ar.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${K4.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${Y4.map(r=>`
			<article class="plist-item" id="${Ni(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Ni(r.title)}, ${Ni(Om(r))}"
					src="images/web/${Ni(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Ni(r.file)}'">
				<p class="plist-meta">${Ni(Om(r))}</p>
				<h2>${Ni(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Ni(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Ar.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Ar.querySelector(".plist-close");n&&n.addEventListener("click",Im),document.body.appendChild(Ar),requestAnimationFrame(()=>Ar.classList.add("on"))}function Im(){Ar&&(Ar.classList.remove("on"),setTimeout(()=>{Ar.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Fm.exports={show:J4,hide:Im}});var Dm=de((d1,p1)=>{(function(e,t){typeof d1=="object"&&typeof p1!="undefined"?p1.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(d1,function(){var e=function(){function t(u){return r.appendChild(u.dom),u}function o(u){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===u?"block":"none";n=u}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(u){u.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),l=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var u=(performance||Date).now();if(l.update(u-a,200),u>i+1e3&&(c.update(1e3*s/(u-i),100),i=u,s=0,f)){var h=performance.memory;f.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,l=48*s,f=3*s,u=2*s,h=3*s,d=15*s,v=74*s,p=30*s,m=document.createElement("canvas");m.width=c,m.height=l,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,l),g.fillStyle=o,g.fillText(t,f,u),g.fillRect(h,d,v,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,d,v,p),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,d),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",f,u),g.drawImage(m,h+s,d,v-s,p,h,d,v-s,p),g.fillRect(h+v-s,d,s,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+v-s,d,s,i((1-y/b)*p))}}},e})});var Gm=de((v1,m1)=>{(function(e,t){typeof v1=="object"&&typeof m1!="undefined"?m1.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(v1,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,M){for(var C=Object.keys(M),J=0;J<C.length;++J)x[C[J]]=M[C[J]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var M=new Error("(regl) "+x);throw console.error(M),M}function a(x,M){x||r(M)}function i(x){return x?": "+x:""}function s(x,M,C){x in M||r("unknown parameter ("+x+")"+i(C)+". possible values: "+Object.keys(M).join())}function c(x,M){e(x)||r("invalid parameter type"+i(M)+". must be a typed array")}function l(x,M){switch(M){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function f(x,M,C){l(x,M)||r("invalid parameter type"+i(C)+". expected "+M+", got "+typeof x)}function u(x,M){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(M)+". must be a nonnegative integer")}function h(x,M,C){M.indexOf(x)<0&&r("invalid value"+i(C)+". must be one of: "+M)}var d=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function v(x){Object.keys(x).forEach(function(M){d.indexOf(M)<0&&r('invalid regl constructor argument "'+M+'". must be one of '+d)})}function p(x,M){for(x=x+"";x.length<M;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,M){this.number=x,this.line=M,this.errors=[]}function y(x,M,C){this.file=x,this.line=M,this.message=C}function b(){var x=new Error,M=(x.stack||x).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(M);if(C)return C[1];var J=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(M);return J?J[1]:"unknown"}function k(){var x=new Error,M=(x.stack||x).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(M);if(C)return C[1];var J=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(M);return J?J[1]:"unknown"}function E(x,M){var C=x.split(`
`),J=1,se=0,Q={unknown:new m,0:new m};Q.unknown.name=Q[0].name=M||b(),Q.unknown.lines.push(new g(0,""));for(var oe=0;oe<C.length;++oe){var ge=C[oe],we=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(ge);if(we)switch(we[1]){case"line":var Ee=/(\d+)(\s+\d+)?/.exec(we[2]);Ee&&(J=Ee[1]|0,Ee[2]&&(se=Ee[2]|0,se in Q||(Q[se]=new m)));break;case"define":var _e=/SHADER_NAME(_B64)?\s+(.*)$/.exec(we[2]);_e&&(Q[se].name=_e[1]?n(_e[2]):_e[2]);break}Q[se].lines.push(new g(J++,ge))}return Object.keys(Q).forEach(function(Le){var Fe=Q[Le];Fe.lines.forEach(function(xe){Fe.index[xe.number]=xe})}),Q}function L(x){var M=[];return x.split(`
`).forEach(function(C){if(!(C.length<5)){var J=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);J?M.push(new y(J[1]|0,J[2]|0,J[3].trim())):C.length>0&&M.push(new y("unknown",0,C))}}),M}function N(x,M){M.forEach(function(C){var J=x[C.file];if(J){var se=J.index[C.line];if(se){se.errors.push(C),J.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(C)})}function W(x,M,C,J,se){if(!x.getShaderParameter(M,x.COMPILE_STATUS)){var Q=x.getShaderInfoLog(M),oe=J===x.FRAGMENT_SHADER?"fragment":"vertex";be(C,"string",oe+" shader source must be a string",se);var ge=E(C,se),we=L(Q);N(ge,we),Object.keys(ge).forEach(function(Ee){var _e=ge[Ee];if(!_e.hasErrors)return;var Le=[""],Fe=[""];function xe(Ce,B){Le.push(Ce),Fe.push(B||"")}xe("file number "+Ee+": "+_e.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),_e.lines.forEach(function(Ce){if(Ce.errors.length>0){xe(p(Ce.number,4)+"|  ","background-color:yellow; font-weight:bold"),xe(Ce.line+o,"color:red; background-color:yellow; font-weight:bold");var B=0;Ce.errors.forEach(function(ne){var ke=ne.message,Ue=/^\s*'(.*)'\s*:\s*(.*)$/.exec(ke);if(Ue){var ue=Ue[1];switch(ke=Ue[2],ue){case"assign":ue="=";break}B=Math.max(Ce.line.indexOf(ue,B),0)}else B=0;xe(p("| ",6)),xe(p("^^^",B+3)+o,"font-weight:bold"),xe(p("| ",6)),xe(ke+o,"font-weight:bold")}),xe(p("| ",6)+o)}else xe(p(Ce.number,4)+"|  "),xe(Ce.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Fe[0]=Le.join("%c"),console.log.apply(console,Fe)):console.log(Le.join(""))}),a.raise("Error compiling "+oe+" shader, "+ge[0].name)}}function O(x,M,C,J,se){if(!x.getProgramParameter(M,x.LINK_STATUS)){var Q=x.getProgramInfoLog(M),oe=E(C,se),ge=E(J,se),we='Error linking program with vertex shader, "'+ge[0].name+'", and fragment shader "'+oe[0].name+'"';typeof document!="undefined"?console.log("%c"+we+o+"%c"+Q,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(we+o+Q),a.raise(we)}}function te(x){x._commandRef=b()}function G(x,M,C,J){te(x);function se(we){return we?J.id(we):0}x._fragId=se(x.static.frag),x._vertId=se(x.static.vert);function Q(we,Ee){Object.keys(Ee).forEach(function(_e){we[J.id(_e)]=!0})}var oe=x._uniformSet={};Q(oe,M.static),Q(oe,M.dynamic);var ge=x._attributeSet={};Q(ge,C.static),Q(ge,C.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function re(x,M){var C=k();r(x+" in command "+(M||b())+(C==="unknown"?"":" called from "+C))}function q(x,M,C){x||re(M,C||b())}function Y(x,M,C,J){x in M||re("unknown parameter ("+x+")"+i(C)+". possible values: "+Object.keys(M).join(),J||b())}function be(x,M,C,J){l(x,M)||re("invalid parameter type"+i(C)+". expected "+M+", got "+typeof x,J||b())}function qe(x){x()}function Ae(x,M,C){x.texture?h(x.texture._texture.internalformat,M,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var he=33071,Te=9728,dt=9984,qt=9985,He=9986,pt=9987,St=5120,Zt=5121,ao=5122,Ho=5123,Xe=5124,ht=5125,vt=5126,Jt=32819,po=32820,Lt=33635,mt=34042,me=36193,tt={};tt[St]=tt[Zt]=1,tt[ao]=tt[Ho]=tt[me]=tt[Lt]=tt[Jt]=tt[po]=2,tt[Xe]=tt[ht]=tt[vt]=tt[mt]=4;function zt(x,M){return x===po||x===Jt||x===Lt?2:x===mt?4:tt[x]*M}function ct(x){return!(x&x-1)&&!!x}function Ve(x,M,C){var J,se=M.width,Q=M.height,oe=M.channels;a(se>0&&se<=C.maxTextureSize&&Q>0&&Q<=C.maxTextureSize,"invalid texture shape"),(x.wrapS!==he||x.wrapT!==he)&&a(ct(se)&&ct(Q),"incompatible wrap mode for texture, both width and height must be power of 2"),M.mipmask===1?se!==1&&Q!==1&&a(x.minFilter!==dt&&x.minFilter!==He&&x.minFilter!==qt&&x.minFilter!==pt,"min filter requires mipmap"):(a(ct(se)&&ct(Q),"texture must be a square power of 2 to support mipmapping"),a(M.mipmask===(se<<1)-1,"missing or incomplete mipmap data")),M.type===vt&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===Te&&x.magFilter===Te,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var ge=M.images;for(J=0;J<16;++J)if(ge[J]){var we=se>>J,Ee=Q>>J;a(M.mipmask&1<<J,"missing mipmap data");var _e=ge[J];if(a(_e.width===we&&_e.height===Ee,"invalid shape for mip images"),a(_e.format===M.format&&_e.internalformat===M.internalformat&&_e.type===M.type,"incompatible type for mip image"),!_e.compressed)if(_e.data){var Le=Math.ceil(zt(_e.type,oe)*we/_e.unpackAlignment)*_e.unpackAlignment;a(_e.data.byteLength===Le*Ee,"invalid data for image, buffer size is inconsistent with image format")}else _e.element||_e.copy}else x.genMipmaps||a((M.mipmask&1<<J)===0,"extra mipmap data");M.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function go(x,M,C,J){var se=x.width,Q=x.height,oe=x.channels;a(se>0&&se<=J.maxTextureSize&&Q>0&&Q<=J.maxTextureSize,"invalid texture shape"),a(se===Q,"cube map must be square"),a(M.wrapS===he&&M.wrapT===he,"wrap mode not supported by cube map");for(var ge=0;ge<C.length;++ge){var we=C[ge];a(we.width===se&&we.height===Q,"inconsistent cube map face shape"),M.genMipmaps&&(a(!we.compressed,"can not generate mipmap for compressed textures"),a(we.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Ee=we.images,_e=0;_e<16;++_e){var Le=Ee[_e];if(Le){var Fe=se>>_e,xe=Q>>_e;a(we.mipmask&1<<_e,"missing mipmap data"),a(Le.width===Fe&&Le.height===xe,"invalid shape for mip images"),a(Le.format===x.format&&Le.internalformat===x.internalformat&&Le.type===x.type,"incompatible type for mip image"),Le.compressed||(Le.data?a(Le.data.byteLength===Fe*xe*Math.max(zt(Le.type,oe),Le.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Le.element||Le.copy)}}}}var _=t(a,{optional:qe,raise:r,commandRaise:re,command:q,parameter:s,commandParameter:Y,constructor:v,type:f,commandType:be,isTypedArray:c,nni:u,oneOf:h,shaderError:W,linkError:O,callSite:k,saveCommandRef:te,saveDrawInfo:G,framebufferFormat:Ae,guessCommand:b,texture2D:Ve,textureCube:go}),oo=0,Wt=0,xo=5,Eo=6;function un(x,M){this.id=oo++,this.type=x,this.data=M}function br(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Hn(x){if(x.length===0)return[];var M=x.charAt(0),C=x.charAt(x.length-1);if(x.length>1&&M===C&&(M==='"'||M==="'"))return['"'+br(x.substr(1,x.length-2))+'"'];var J=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(J)return Hn(x.substr(0,J.index)).concat(Hn(J[1])).concat(Hn(x.substr(J.index+J[0].length)));var se=x.split(".");if(se.length===1)return['"'+br(x)+'"'];for(var Q=[],oe=0;oe<se.length;++oe)Q=Q.concat(Hn(se[oe]));return Q}function Ha(x){return"["+Hn(x).join("][")+"]"}function Ei(x,M){return new un(x,Ha(M+""))}function p0(x){return typeof x=="function"&&!x._reglType||x instanceof un}function K(x,M){if(typeof x=="function")return new un(Wt,x);if(typeof x=="number"||typeof x=="boolean")return new un(xo,x);if(Array.isArray(x))return new un(Eo,x.map((C,J)=>K(C,M+"["+J+"]")));if(x instanceof un)return x;_(!1,"invalid option type in uniform "+M)}var Ne={DynamicVariable:un,define:Ei,isDynamic:p0,unbox:K,accessor:Ha},Ie={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},ze=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function at(){var x={"":0},M=[""];return{id:function(C){var J=x[C];return J||(J=x[C]=M.length,M.push(C),J)},str:function(C){return M[C]}}}function Mt(x,M,C){var J=document.createElement("canvas");t(J.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(J),x===document.body&&(J.style.position="absolute",t(x.style,{margin:0,padding:0}));function se(){var ge=window.innerWidth,we=window.innerHeight;if(x!==document.body){var Ee=x.getBoundingClientRect();ge=Ee.right-Ee.left,we=Ee.bottom-Ee.top}J.width=C*ge,J.height=C*we,t(J.style,{width:ge+"px",height:we+"px"})}var Q;x!==document.body&&typeof ResizeObserver=="function"?(Q=new ResizeObserver(function(){setTimeout(se)}),Q.observe(x)):window.addEventListener("resize",se,!1);function oe(){Q?Q.disconnect():window.removeEventListener("resize",se),x.removeChild(J)}return se(),{canvas:J,onDestroy:oe}}function bt(x,M){function C(J){try{return x.getContext(J,M)}catch(se){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function lt(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function Nt(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function gt(x){return typeof x=="string"?x.split():(_(Array.isArray(x),"invalid extension array"),x)}function Ht(x){return typeof x=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function _t(x){var M=x||{},C,J,se,Q,oe={},ge=[],we=[],Ee=typeof window=="undefined"?1:window.devicePixelRatio,_e=!1,Le=function(Ce){Ce&&_.raise(Ce)},Fe=function(){};if(typeof M=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(M),_(C,"invalid query string for element")):typeof M=="object"?lt(M)?C=M:Nt(M)?(Q=M,se=Q.canvas):(_.constructor(M),"gl"in M?Q=M.gl:"canvas"in M?se=Ht(M.canvas):"container"in M&&(J=Ht(M.container)),"attributes"in M&&(oe=M.attributes,_.type(oe,"object","invalid context attributes")),"extensions"in M&&(ge=gt(M.extensions)),"optionalExtensions"in M&&(we=gt(M.optionalExtensions)),"onDone"in M&&(_.type(M.onDone,"function","invalid or missing onDone callback"),Le=M.onDone),"profile"in M&&(_e=!!M.profile),"pixelRatio"in M&&(Ee=+M.pixelRatio,_(Ee>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?se=C:J=C),!Q){if(!se){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var xe=Mt(J||document.body,Le,Ee);if(!xe)return null;se=xe.canvas,Fe=xe.onDestroy}oe.premultipliedAlpha===void 0&&(oe.premultipliedAlpha=!0),Q=bt(se,oe)}return Q?{gl:Q,canvas:se,container:J,extensions:ge,optionalExtensions:we,pixelRatio:Ee,profile:_e,onDone:Le,onDestroy:Fe}:(Fe(),Le("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function kt(x,M){var C={};function J(oe){_.type(oe,"string","extension name must be string");var ge=oe.toLowerCase(),we;try{we=C[ge]=x.getExtension(ge)}catch(Ee){}return!!we}for(var se=0;se<M.extensions.length;++se){var Q=M.extensions[se];if(!J(Q))return M.onDestroy(),M.onDone('"'+Q+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return M.optionalExtensions.forEach(J),{extensions:C,restore:function(){Object.keys(C).forEach(function(oe){if(C[oe]&&!J(oe))throw new Error("(regl): error restoring extension "+oe)})}}}function Bt(x,M){for(var C=Array(x),J=0;J<x;++J)C[J]=M(J);return C}var ft=5120,no=5121,_o=5122,xt=5123,Po=5124,sa=5125,ri=5126;function Kt(x){for(var M=16;M<=1<<28;M*=16)if(x<=M)return M;return 0}function so(x){var M,C;return M=(x>65535)<<4,x>>>=M,C=(x>255)<<3,x>>>=C,M|=C,C=(x>15)<<2,x>>>=C,M|=C,C=(x>3)<<1,x>>>=C,M|=C,M|x>>1}function zn(){var x=Bt(8,function(){return[]});function M(Q){var oe=Kt(Q),ge=x[so(oe)>>2];return ge.length>0?ge.pop():new ArrayBuffer(oe)}function C(Q){x[so(Q.byteLength)>>2].push(Q)}function J(Q,oe){var ge=null;switch(Q){case ft:ge=new Int8Array(M(oe),0,oe);break;case no:ge=new Uint8Array(M(oe),0,oe);break;case _o:ge=new Int16Array(M(2*oe),0,oe);break;case xt:ge=new Uint16Array(M(2*oe),0,oe);break;case Po:ge=new Int32Array(M(4*oe),0,oe);break;case sa:ge=new Uint32Array(M(4*oe),0,oe);break;case ri:ge=new Float32Array(M(4*oe),0,oe);break;default:return null}return ge.length!==oe?ge.subarray(0,oe):ge}function se(Q){C(Q.buffer)}return{alloc:M,free:C,allocType:J,freeType:se}}var U=zn();U.zero=zn();var le=3408,Be=3410,ot=3411,nt=3412,Xo=3413,Cn=3414,wr=3415,Uo=33901,Fr=33902,Jo=3379,So=3386,rn=34921,Co=36347,Un=36348,_r=35661,sr=35660,an=34930,cr=36349,Mr=34076,Qn=34024,co=7936,Yo=7937,ca=7938,us=35724,Ua=34047,ds=36063,rf=34852,Si=3553,v0=34067,Pc=34069,pu=33984,ai=6408,Oc=5126,pr=5121,Ic=36160,ps=36053,w5=36064,_5=16384,M5=function(x,M){var C=1;M.ext_texture_filter_anisotropic&&(C=x.getParameter(Ua));var J=1,se=1;M.webgl_draw_buffers&&(J=x.getParameter(rf),se=x.getParameter(ds));var Q=!!M.oes_texture_float;if(Q){var oe=x.createTexture();x.bindTexture(Si,oe),x.texImage2D(Si,0,ai,1,1,0,ai,Oc,null);var ge=x.createFramebuffer();if(x.bindFramebuffer(Ic,ge),x.framebufferTexture2D(Ic,w5,Si,oe,0),x.bindTexture(Si,null),x.checkFramebufferStatus(Ic)!==ps)Q=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(_5);var we=U.allocType(Oc,4);x.readPixels(0,0,1,1,ai,Oc,we),x.getError()?Q=!1:(x.deleteFramebuffer(ge),x.deleteTexture(oe),Q=we[0]===1),U.freeType(we)}}var Ee=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),_e=!0;if(!Ee){var Le=x.createTexture(),Fe=U.allocType(pr,36);x.activeTexture(pu),x.bindTexture(v0,Le),x.texImage2D(Pc,0,ai,3,3,0,ai,pr,Fe),U.freeType(Fe),x.bindTexture(v0,null),x.deleteTexture(Le),_e=!x.getError()}return{colorBits:[x.getParameter(Be),x.getParameter(ot),x.getParameter(nt),x.getParameter(Xo)],depthBits:x.getParameter(Cn),stencilBits:x.getParameter(wr),subpixelBits:x.getParameter(le),extensions:Object.keys(M).filter(function(xe){return!!M[xe]}),maxAnisotropic:C,maxDrawbuffers:J,maxColorAttachments:se,pointSizeDims:x.getParameter(Uo),lineWidthDims:x.getParameter(Fr),maxViewportDims:x.getParameter(So),maxCombinedTextureUnits:x.getParameter(_r),maxCubeMapSize:x.getParameter(Mr),maxRenderbufferSize:x.getParameter(Qn),maxTextureUnits:x.getParameter(an),maxTextureSize:x.getParameter(Jo),maxAttributes:x.getParameter(rn),maxVertexUniforms:x.getParameter(Co),maxVertexTextureUnits:x.getParameter(sr),maxVaryingVectors:x.getParameter(Un),maxFragmentUniforms:x.getParameter(cr),glsl:x.getParameter(us),renderer:x.getParameter(Yo),vendor:x.getParameter(co),version:x.getParameter(ca),readFloat:Q,npotTextureCube:_e}};function Ea(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var Xr=function(x){return Object.keys(x).map(function(M){return x[M]})},af={shape:A5,flatten:S5};function k5(x,M,C){for(var J=0;J<M;++J)C[J]=x[J]}function E5(x,M,C,J){for(var se=0,Q=0;Q<M;++Q)for(var oe=x[Q],ge=0;ge<C;++ge)J[se++]=oe[ge]}function Np(x,M,C,J,se,Q){for(var oe=Q,ge=0;ge<M;++ge)for(var we=x[ge],Ee=0;Ee<C;++Ee)for(var _e=we[Ee],Le=0;Le<J;++Le)se[oe++]=_e[Le]}function Rp(x,M,C,J,se){for(var Q=1,oe=C+1;oe<M.length;++oe)Q*=M[oe];var ge=M[C];if(M.length-C===4){var we=M[C+1],Ee=M[C+2],_e=M[C+3];for(oe=0;oe<ge;++oe)Np(x[oe],we,Ee,_e,J,se),se+=Q}else for(oe=0;oe<ge;++oe)Rp(x[oe],M,C+1,J,se),se+=Q}function S5(x,M,C,J){var se=1;if(M.length)for(var Q=0;Q<M.length;++Q)se*=M[Q];else se=0;var oe=J||U.allocType(C,se);switch(M.length){case 0:break;case 1:k5(x,M[0],oe);break;case 2:E5(x,M[0],M[1],oe);break;case 3:Np(x,M[0],M[1],M[2],oe,0);break;default:Rp(x,M,0,oe,0)}return oe}function A5(x){for(var M=[],C=x;C.length;C=C[0])M.push(C.length);return M}var vu={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},T5=5120,L5=5122,z5=5124,C5=5121,N5=5123,R5=5125,P5=5126,O5=5126,vs={int8:T5,int16:L5,int32:z5,uint8:C5,uint16:N5,uint32:R5,float:P5,float32:O5},I5=35048,F5=35040,sf={dynamic:I5,stream:F5,static:35044},mu=af.flatten,Pp=af.shape,Op=35044,D5=35040,gu=5121,xu=5126,Ai=[];Ai[5120]=1,Ai[5122]=2,Ai[5124]=4,Ai[5121]=1,Ai[5123]=2,Ai[5125]=4,Ai[5126]=4;function cf(x){return vu[Object.prototype.toString.call(x)]|0}function Ip(x,M){for(var C=0;C<M.length;++C)x[C]=M[C]}function Fp(x,M,C,J,se,Q,oe){for(var ge=0,we=0;we<C;++we)for(var Ee=0;Ee<J;++Ee)x[ge++]=M[se*we+Q*Ee+oe]}function G5(x,M,C,J){var se=0,Q={};function oe(B){this.id=se++,this.buffer=x.createBuffer(),this.type=B,this.usage=Op,this.byteLength=0,this.dimension=1,this.dtype=gu,this.persistentData=null,C.profile&&(this.stats={size:0})}oe.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},oe.prototype.destroy=function(){Fe(this)};var ge=[];function we(B,ne){var ke=ge.pop();return ke||(ke=new oe(B)),ke.bind(),Le(ke,ne,D5,0,1,!1),ke}function Ee(B){ge.push(B)}function _e(B,ne,ke){B.byteLength=ne.byteLength,x.bufferData(B.type,ne,ke)}function Le(B,ne,ke,Ue,ue,je){var ve;if(B.usage=ke,Array.isArray(ne)){if(B.dtype=Ue||xu,ne.length>0){var Re;if(Array.isArray(ne[0])){ve=Pp(ne);for(var pe=1,Pe=1;Pe<ve.length;++Pe)pe*=ve[Pe];B.dimension=pe,Re=mu(ne,ve,B.dtype),_e(B,Re,ke),je?B.persistentData=Re:U.freeType(Re)}else if(typeof ne[0]=="number"){B.dimension=ue;var ut=U.allocType(B.dtype,ne.length);Ip(ut,ne),_e(B,ut,ke),je?B.persistentData=ut:U.freeType(ut)}else e(ne[0])?(B.dimension=ne[0].length,B.dtype=Ue||cf(ne[0])||xu,Re=mu(ne,[ne.length,ne[0].length],B.dtype),_e(B,Re,ke),je?B.persistentData=Re:U.freeType(Re)):_.raise("invalid buffer data")}}else if(e(ne))B.dtype=Ue||cf(ne),B.dimension=ue,_e(B,ne,ke),je&&(B.persistentData=new Uint8Array(new Uint8Array(ne.buffer)));else if(Ea(ne)){ve=ne.shape;var Ct=ne.stride,De=ne.offset,Se=0,fe=0,At=0,Dt=0;ve.length===1?(Se=ve[0],fe=1,At=Ct[0],Dt=0):ve.length===2?(Se=ve[0],fe=ve[1],At=Ct[0],Dt=Ct[1]):_.raise("invalid shape"),B.dtype=Ue||cf(ne.data)||xu,B.dimension=fe;var Qe=U.allocType(B.dtype,Se*fe);Fp(Qe,ne.data,Se,fe,At,Dt,De),_e(B,Qe,ke),je?B.persistentData=Qe:U.freeType(Qe)}else ne instanceof ArrayBuffer?(B.dtype=gu,B.dimension=ue,_e(B,ne,ke),je&&(B.persistentData=new Uint8Array(new Uint8Array(ne)))):_.raise("invalid buffer data")}function Fe(B){M.bufferCount--,J(B);var ne=B.buffer;_(ne,"buffer must not be deleted already"),x.deleteBuffer(ne),B.buffer=null,delete Q[B.id]}function xe(B,ne,ke,Ue){M.bufferCount++;var ue=new oe(ne);Q[ue.id]=ue;function je(pe){var Pe=Op,ut=null,Ct=0,De=0,Se=1;return Array.isArray(pe)||e(pe)||Ea(pe)||pe instanceof ArrayBuffer?ut=pe:typeof pe=="number"?Ct=pe|0:pe&&(_.type(pe,"object","buffer arguments must be an object, a number or an array"),"data"in pe&&(_(ut===null||Array.isArray(ut)||e(ut)||Ea(ut),"invalid data for buffer"),ut=pe.data),"usage"in pe&&(_.parameter(pe.usage,sf,"invalid buffer usage"),Pe=sf[pe.usage]),"type"in pe&&(_.parameter(pe.type,vs,"invalid buffer type"),De=vs[pe.type]),"dimension"in pe&&(_.type(pe.dimension,"number","invalid dimension"),Se=pe.dimension|0),"length"in pe&&(_.nni(Ct,"buffer length must be a nonnegative integer"),Ct=pe.length|0)),ue.bind(),ut?Le(ue,ut,Pe,De,Se,Ue):(Ct&&x.bufferData(ue.type,Ct,Pe),ue.dtype=De||gu,ue.usage=Pe,ue.dimension=Se,ue.byteLength=Ct),C.profile&&(ue.stats.size=ue.byteLength*Ai[ue.dtype]),je}function ve(pe,Pe){_(Pe+pe.byteLength<=ue.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+pe.byteLength+" starting from offset "+Pe+" to a buffer of size "+ue.byteLength),x.bufferSubData(ue.type,Pe,pe)}function Re(pe,Pe){var ut=(Pe||0)|0,Ct;if(ue.bind(),e(pe)||pe instanceof ArrayBuffer)ve(pe,ut);else if(Array.isArray(pe)){if(pe.length>0)if(typeof pe[0]=="number"){var De=U.allocType(ue.dtype,pe.length);Ip(De,pe),ve(De,ut),U.freeType(De)}else if(Array.isArray(pe[0])||e(pe[0])){Ct=Pp(pe);var Se=mu(pe,Ct,ue.dtype);ve(Se,ut),U.freeType(Se)}else _.raise("invalid buffer data")}else if(Ea(pe)){Ct=pe.shape;var fe=pe.stride,At=0,Dt=0,Qe=0,Vt=0;Ct.length===1?(At=Ct[0],Dt=1,Qe=fe[0],Vt=0):Ct.length===2?(At=Ct[0],Dt=Ct[1],Qe=fe[0],Vt=fe[1]):_.raise("invalid shape");var Rt=Array.isArray(pe.data)?ue.dtype:cf(pe.data),Ut=U.allocType(Rt,At*Dt);Fp(Ut,pe.data,At,Dt,Qe,Vt,pe.offset),ve(Ut,ut),U.freeType(Ut)}else _.raise("invalid data for buffer subdata");return je}return ke||je(B),je._reglType="buffer",je._buffer=ue,je.subdata=Re,C.profile&&(je.stats=ue.stats),je.destroy=function(){Fe(ue)},je}function Ce(){Xr(Q).forEach(function(B){B.buffer=x.createBuffer(),x.bindBuffer(B.type,B.buffer),x.bufferData(B.type,B.persistentData||B.byteLength,B.usage)})}return C.profile&&(M.getTotalBufferSize=function(){var B=0;return Object.keys(Q).forEach(function(ne){B+=Q[ne].stats.size}),B}),{create:xe,createStream:we,destroyStream:Ee,clear:function(){Xr(Q).forEach(Fe),ge.forEach(Fe)},getBuffer:function(B){return B&&B._buffer instanceof oe?B._buffer:null},restore:Ce,_initBuffer:Le}}var $5=0,q5=0,H5=1,U5=1,B5=4,j5=4,m0={points:$5,point:q5,lines:H5,line:U5,triangles:B5,triangle:j5,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},W5=0,V5=1,Fc=4,X5=5120,g0=5121,Dp=5122,x0=5123,Gp=5124,ms=5125,yu=34963,Y5=35040,K5=35044;function Q5(x,M,C,J){var se={},Q=0,oe={uint8:g0,uint16:x0};M.oes_element_index_uint&&(oe.uint32=ms);function ge(Ce){this.id=Q++,se[this.id]=this,this.buffer=Ce,this.primType=Fc,this.vertCount=0,this.type=0}ge.prototype.bind=function(){this.buffer.bind()};var we=[];function Ee(Ce){var B=we.pop();return B||(B=new ge(C.create(null,yu,!0,!1)._buffer)),Le(B,Ce,Y5,-1,-1,0,0),B}function _e(Ce){we.push(Ce)}function Le(Ce,B,ne,ke,Ue,ue,je){Ce.buffer.bind();var ve;if(B){var Re=je;!je&&(!e(B)||Ea(B)&&!e(B.data))&&(Re=M.oes_element_index_uint?ms:x0),C._initBuffer(Ce.buffer,B,ne,Re,3)}else x.bufferData(yu,ue,ne),Ce.buffer.dtype=ve||g0,Ce.buffer.usage=ne,Ce.buffer.dimension=3,Ce.buffer.byteLength=ue;if(ve=je,!je){switch(Ce.buffer.dtype){case g0:case X5:ve=g0;break;case x0:case Dp:ve=x0;break;case ms:case Gp:ve=ms;break;default:_.raise("unsupported type for element array")}Ce.buffer.dtype=ve}Ce.type=ve,_(ve!==ms||!!M.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var pe=Ue;pe<0&&(pe=Ce.buffer.byteLength,ve===x0?pe>>=1:ve===ms&&(pe>>=2)),Ce.vertCount=pe;var Pe=ke;if(ke<0){Pe=Fc;var ut=Ce.buffer.dimension;ut===1&&(Pe=W5),ut===2&&(Pe=V5),ut===3&&(Pe=Fc)}Ce.primType=Pe}function Fe(Ce){J.elementsCount--,_(Ce.buffer!==null,"must not double destroy elements"),delete se[Ce.id],Ce.buffer.destroy(),Ce.buffer=null}function xe(Ce,B){var ne=C.create(null,yu,!0),ke=new ge(ne._buffer);J.elementsCount++;function Ue(ue){if(!ue)ne(),ke.primType=Fc,ke.vertCount=0,ke.type=g0;else if(typeof ue=="number")ne(ue),ke.primType=Fc,ke.vertCount=ue|0,ke.type=g0;else{var je=null,ve=K5,Re=-1,pe=-1,Pe=0,ut=0;Array.isArray(ue)||e(ue)||Ea(ue)?je=ue:(_.type(ue,"object","invalid arguments for elements"),"data"in ue&&(je=ue.data,_(Array.isArray(je)||e(je)||Ea(je),"invalid data for element buffer")),"usage"in ue&&(_.parameter(ue.usage,sf,"invalid element buffer usage"),ve=sf[ue.usage]),"primitive"in ue&&(_.parameter(ue.primitive,m0,"invalid element buffer primitive"),Re=m0[ue.primitive]),"count"in ue&&(_(typeof ue.count=="number"&&ue.count>=0,"invalid vertex count for elements"),pe=ue.count|0),"type"in ue&&(_.parameter(ue.type,oe,"invalid buffer type"),ut=oe[ue.type]),"length"in ue?Pe=ue.length|0:(Pe=pe,ut===x0||ut===Dp?Pe*=2:(ut===ms||ut===Gp)&&(Pe*=4))),Le(ke,je,ve,Re,pe,Pe,ut)}return Ue}return Ue(Ce),Ue._reglType="elements",Ue._elements=ke,Ue.subdata=function(ue,je){return ne.subdata(ue,je),Ue},Ue.destroy=function(){Fe(ke)},Ue}return{create:xe,createStream:Ee,destroyStream:_e,getElements:function(Ce){return typeof Ce=="function"&&Ce._elements instanceof ge?Ce._elements:null},clear:function(){Xr(se).forEach(Fe)}}}var $p=new Float32Array(1),Z5=new Uint32Array($p.buffer),J5=5123;function qp(x){for(var M=U.allocType(J5,x.length),C=0;C<x.length;++C)if(isNaN(x[C]))M[C]=65535;else if(x[C]===1/0)M[C]=31744;else if(x[C]===-1/0)M[C]=64512;else{$p[0]=x[C];var J=Z5[0],se=J>>>31<<15,Q=(J<<1>>>24)-127,oe=J>>13&1023;if(Q<-24)M[C]=se;else if(Q<-14){var ge=-14-Q;M[C]=se+(oe+1024>>ge)}else Q>15?M[C]=se+31744:M[C]=se+(Q+15<<10)+oe}return M}function sn(x){return Array.isArray(x)||e(x)}var Hp=function(x){return!(x&x-1)&&!!x},ew=34467,Ba=3553,bu=34067,lf=34069,gs=6408,wu=6406,ff=6407,Dc=6409,hf=6410,Up=32854,_u=32855,Bp=36194,tw=32819,ow=32820,nw=33635,rw=34042,Mu=6402,uf=34041,ku=35904,Eu=35906,y0=36193,Su=33776,Au=33777,Tu=33778,Lu=33779,jp=35986,Wp=35987,Vp=34798,Xp=35840,Yp=35841,Kp=35842,Qp=35843,Zp=36196,b0=5121,zu=5123,Cu=5125,Gc=5126,aw=10242,iw=10243,sw=10497,Nu=33071,cw=33648,lw=10240,fw=10241,Ru=9728,hw=9729,Pu=9984,Jp=9985,ev=9986,Ou=9987,uw=33170,df=4352,dw=4353,pw=4354,vw=34046,mw=3317,gw=37440,xw=37441,yw=37443,tv=37444,$c=33984,bw=[Pu,ev,Jp,Ou],pf=[0,Dc,hf,ff,gs],la={};la[Dc]=la[wu]=la[Mu]=1,la[uf]=la[hf]=2,la[ff]=la[ku]=3,la[gs]=la[Eu]=4;function w0(x){return"[object "+x+"]"}var ov=w0("HTMLCanvasElement"),nv=w0("OffscreenCanvas"),rv=w0("CanvasRenderingContext2D"),av=w0("ImageBitmap"),iv=w0("HTMLImageElement"),sv=w0("HTMLVideoElement"),ww=Object.keys(vu).concat([ov,nv,rv,av,iv,sv]),_0=[];_0[b0]=1,_0[Gc]=4,_0[y0]=2,_0[zu]=2,_0[Cu]=4;var Zn=[];Zn[Up]=2,Zn[_u]=2,Zn[Bp]=2,Zn[uf]=4,Zn[Su]=.5,Zn[Au]=.5,Zn[Tu]=1,Zn[Lu]=1,Zn[jp]=.5,Zn[Wp]=1,Zn[Vp]=1,Zn[Xp]=.5,Zn[Yp]=.25,Zn[Kp]=.5,Zn[Qp]=.25,Zn[Zp]=.5;function cv(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function lv(x){if(!Array.isArray(x))return!1;var M=x.length;return!(M===0||!sn(x[0]))}function xs(x){return Object.prototype.toString.call(x)}function fv(x){return xs(x)===ov}function hv(x){return xs(x)===nv}function _w(x){return xs(x)===rv}function Mw(x){return xs(x)===av}function kw(x){return xs(x)===iv}function Ew(x){return xs(x)===sv}function Iu(x){if(!x)return!1;var M=xs(x);return ww.indexOf(M)>=0?!0:cv(x)||lv(x)||Ea(x)}function uv(x){return vu[Object.prototype.toString.call(x)]|0}function Sw(x,M){var C=M.length;switch(x.type){case b0:case zu:case Cu:case Gc:var J=U.allocType(x.type,C);J.set(M),x.data=J;break;case y0:x.data=qp(M);break;default:_.raise("unsupported texture type, must specify a typed array")}}function dv(x,M){return U.allocType(x.type===y0?Gc:x.type,M)}function pv(x,M){x.type===y0?(x.data=qp(M),U.freeType(M)):x.data=M}function Aw(x,M,C,J,se,Q){for(var oe=x.width,ge=x.height,we=x.channels,Ee=oe*ge*we,_e=dv(x,Ee),Le=0,Fe=0;Fe<ge;++Fe)for(var xe=0;xe<oe;++xe)for(var Ce=0;Ce<we;++Ce)_e[Le++]=M[C*xe+J*Fe+se*Ce+Q];pv(x,_e)}function vf(x,M,C,J,se,Q){var oe;if(typeof Zn[x]!="undefined"?oe=Zn[x]:oe=la[x]*_0[M],Q&&(oe*=6),se){for(var ge=0,we=C;we>=1;)ge+=oe*we*we,we/=2;return ge}else return oe*C*J}function Tw(x,M,C,J,se,Q,oe){var ge={"don't care":df,"dont care":df,nice:pw,fast:dw},we={repeat:sw,clamp:Nu,mirror:cw},Ee={nearest:Ru,linear:hw},_e=t({mipmap:Ou,"nearest mipmap nearest":Pu,"linear mipmap nearest":Jp,"nearest mipmap linear":ev,"linear mipmap linear":Ou},Ee),Le={none:0,browser:tv},Fe={uint8:b0,rgba4:tw,rgb565:nw,"rgb5 a1":ow},xe={alpha:wu,luminance:Dc,"luminance alpha":hf,rgb:ff,rgba:gs,rgba4:Up,"rgb5 a1":_u,rgb565:Bp},Ce={};M.ext_srgb&&(xe.srgb=ku,xe.srgba=Eu),M.oes_texture_float&&(Fe.float32=Fe.float=Gc),M.oes_texture_half_float&&(Fe.float16=Fe["half float"]=y0),M.webgl_depth_texture&&(t(xe,{depth:Mu,"depth stencil":uf}),t(Fe,{uint16:zu,uint32:Cu,"depth stencil":rw})),M.webgl_compressed_texture_s3tc&&t(Ce,{"rgb s3tc dxt1":Su,"rgba s3tc dxt1":Au,"rgba s3tc dxt3":Tu,"rgba s3tc dxt5":Lu}),M.webgl_compressed_texture_atc&&t(Ce,{"rgb atc":jp,"rgba atc explicit alpha":Wp,"rgba atc interpolated alpha":Vp}),M.webgl_compressed_texture_pvrtc&&t(Ce,{"rgb pvrtc 4bppv1":Xp,"rgb pvrtc 2bppv1":Yp,"rgba pvrtc 4bppv1":Kp,"rgba pvrtc 2bppv1":Qp}),M.webgl_compressed_texture_etc1&&(Ce["rgb etc1"]=Zp);var B=Array.prototype.slice.call(x.getParameter(ew));Object.keys(Ce).forEach(function(z){var ee=Ce[z];B.indexOf(ee)>=0&&(xe[z]=ee)});var ne=Object.keys(xe);C.textureFormats=ne;var ke=[];Object.keys(xe).forEach(function(z){var ee=xe[z];ke[ee]=z});var Ue=[];Object.keys(Fe).forEach(function(z){var ee=Fe[z];Ue[ee]=z});var ue=[];Object.keys(Ee).forEach(function(z){var ee=Ee[z];ue[ee]=z});var je=[];Object.keys(_e).forEach(function(z){var ee=_e[z];je[ee]=z});var ve=[];Object.keys(we).forEach(function(z){var ee=we[z];ve[ee]=z});var Re=ne.reduce(function(z,ee){var X=xe[ee];return X===Dc||X===wu||X===Dc||X===hf||X===Mu||X===uf||M.ext_srgb&&(X===ku||X===Eu)?z[X]=X:X===_u||ee.indexOf("rgba")>=0?z[X]=gs:z[X]=ff,z},{});function pe(){this.internalformat=gs,this.format=gs,this.type=b0,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=tv,this.width=0,this.height=0,this.channels=0}function Pe(z,ee){z.internalformat=ee.internalformat,z.format=ee.format,z.type=ee.type,z.compressed=ee.compressed,z.premultiplyAlpha=ee.premultiplyAlpha,z.flipY=ee.flipY,z.unpackAlignment=ee.unpackAlignment,z.colorSpace=ee.colorSpace,z.width=ee.width,z.height=ee.height,z.channels=ee.channels}function ut(z,ee){if(!(typeof ee!="object"||!ee)){if("premultiplyAlpha"in ee&&(_.type(ee.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),z.premultiplyAlpha=ee.premultiplyAlpha),"flipY"in ee&&(_.type(ee.flipY,"boolean","invalid texture flip"),z.flipY=ee.flipY),"alignment"in ee&&(_.oneOf(ee.alignment,[1,2,4,8],"invalid texture unpack alignment"),z.unpackAlignment=ee.alignment),"colorSpace"in ee&&(_.parameter(ee.colorSpace,Le,"invalid colorSpace"),z.colorSpace=Le[ee.colorSpace]),"type"in ee){var X=ee.type;_(M.oes_texture_float||!(X==="float"||X==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(M.oes_texture_half_float||!(X==="half float"||X==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(M.webgl_depth_texture||!(X==="uint16"||X==="uint32"||X==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(X,Fe,"invalid texture type"),z.type=Fe[X]}var Ye=z.width,Xt=z.height,A=z.channels,w=!1;"shape"in ee?(_(Array.isArray(ee.shape)&&ee.shape.length>=2,"shape must be an array"),Ye=ee.shape[0],Xt=ee.shape[1],ee.shape.length===3&&(A=ee.shape[2],_(A>0&&A<=4,"invalid number of channels"),w=!0),_(Ye>=0&&Ye<=C.maxTextureSize,"invalid width"),_(Xt>=0&&Xt<=C.maxTextureSize,"invalid height")):("radius"in ee&&(Ye=Xt=ee.radius,_(Ye>=0&&Ye<=C.maxTextureSize,"invalid radius")),"width"in ee&&(Ye=ee.width,_(Ye>=0&&Ye<=C.maxTextureSize,"invalid width")),"height"in ee&&(Xt=ee.height,_(Xt>=0&&Xt<=C.maxTextureSize,"invalid height")),"channels"in ee&&(A=ee.channels,_(A>0&&A<=4,"invalid number of channels"),w=!0)),z.width=Ye|0,z.height=Xt|0,z.channels=A|0;var P=!1;if("format"in ee){var H=ee.format;_(M.webgl_depth_texture||!(H==="depth"||H==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(H,xe,"invalid texture format");var j=z.internalformat=xe[H];z.format=Re[j],H in Fe&&("type"in ee||(z.type=Fe[H])),H in Ce&&(z.compressed=!0),P=!0}!w&&P?z.channels=la[z.format]:w&&!P?z.channels!==pf[z.format]&&(z.format=z.internalformat=pf[z.channels]):P&&w&&_(z.channels===la[z.format],"number of channels inconsistent with specified format")}}function Ct(z){x.pixelStorei(gw,z.flipY),x.pixelStorei(xw,z.premultiplyAlpha),x.pixelStorei(yw,z.colorSpace),x.pixelStorei(mw,z.unpackAlignment)}function De(){pe.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Se(z,ee){var X=null;if(Iu(ee)?X=ee:ee&&(_.type(ee,"object","invalid pixel data type"),ut(z,ee),"x"in ee&&(z.xOffset=ee.x|0),"y"in ee&&(z.yOffset=ee.y|0),Iu(ee.data)&&(X=ee.data)),_(!z.compressed||X instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ee.copy){_(!X,"can not specify copy and data field for the same texture");var Ye=se.viewportWidth,Xt=se.viewportHeight;z.width=z.width||Ye-z.xOffset,z.height=z.height||Xt-z.yOffset,z.needsCopy=!0,_(z.xOffset>=0&&z.xOffset<Ye&&z.yOffset>=0&&z.yOffset<Xt&&z.width>0&&z.width<=Ye&&z.height>0&&z.height<=Xt,"copy texture read out of bounds")}else if(!X)z.width=z.width||1,z.height=z.height||1,z.channels=z.channels||4;else if(e(X))z.channels=z.channels||4,z.data=X,!("type"in ee)&&z.type===b0&&(z.type=uv(X));else if(cv(X))z.channels=z.channels||4,Sw(z,X),z.alignment=1,z.needsFree=!0;else if(Ea(X)){var A=X.data;!Array.isArray(A)&&z.type===b0&&(z.type=uv(A));var w=X.shape,P=X.stride,H,j,F,I,D,T;w.length===3?(F=w[2],T=P[2]):(_(w.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,T=1),H=w[0],j=w[1],I=P[0],D=P[1],z.alignment=1,z.width=H,z.height=j,z.channels=F,z.format=z.internalformat=pf[F],z.needsFree=!0,Aw(z,A,I,D,T,X.offset)}else if(fv(X)||hv(X)||_w(X))fv(X)||hv(X)?z.element=X:z.element=X.canvas,z.width=z.element.width,z.height=z.element.height,z.channels=4;else if(Mw(X))z.element=X,z.width=X.width,z.height=X.height,z.channels=4;else if(kw(X))z.element=X,z.width=X.naturalWidth,z.height=X.naturalHeight,z.channels=4;else if(Ew(X))z.element=X,z.width=X.videoWidth,z.height=X.videoHeight,z.channels=4;else if(lv(X)){var R=z.width||X[0].length,S=z.height||X.length,$=z.channels;sn(X[0][0])?$=$||X[0][0].length:$=$||1;for(var V=af.shape(X),ie=1,ce=0;ce<V.length;++ce)ie*=V[ce];var ae=dv(z,ie);af.flatten(X,V,"",ae),pv(z,ae),z.alignment=1,z.width=R,z.height=S,z.channels=$,z.format=z.internalformat=pf[$],z.needsFree=!0}z.type===Gc?_(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):z.type===y0&&_(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function fe(z,ee,X){var Ye=z.element,Xt=z.data,A=z.internalformat,w=z.format,P=z.type,H=z.width,j=z.height;Ct(z),Ye?x.texImage2D(ee,X,w,w,P,Ye):z.compressed?x.compressedTexImage2D(ee,X,A,H,j,0,Xt):z.needsCopy?(J(),x.copyTexImage2D(ee,X,w,z.xOffset,z.yOffset,H,j,0)):x.texImage2D(ee,X,w,H,j,0,w,P,Xt||null)}function At(z,ee,X,Ye,Xt){var A=z.element,w=z.data,P=z.internalformat,H=z.format,j=z.type,F=z.width,I=z.height;Ct(z),A?x.texSubImage2D(ee,Xt,X,Ye,H,j,A):z.compressed?x.compressedTexSubImage2D(ee,Xt,X,Ye,P,F,I,w):z.needsCopy?(J(),x.copyTexSubImage2D(ee,Xt,X,Ye,z.xOffset,z.yOffset,F,I)):x.texSubImage2D(ee,Xt,X,Ye,F,I,H,j,w)}var Dt=[];function Qe(){return Dt.pop()||new De}function Vt(z){z.needsFree&&U.freeType(z.data),De.call(z),Dt.push(z)}function Rt(){pe.call(this),this.genMipmaps=!1,this.mipmapHint=df,this.mipmask=0,this.images=Array(16)}function Ut(z,ee,X){var Ye=z.images[0]=Qe();z.mipmask=1,Ye.width=z.width=ee,Ye.height=z.height=X,Ye.channels=z.channels=4}function ho(z,ee){var X=null;if(Iu(ee))X=z.images[0]=Qe(),Pe(X,z),Se(X,ee),z.mipmask=1;else if(ut(z,ee),Array.isArray(ee.mipmap))for(var Ye=ee.mipmap,Xt=0;Xt<Ye.length;++Xt)X=z.images[Xt]=Qe(),Pe(X,z),X.width>>=Xt,X.height>>=Xt,Se(X,Ye[Xt]),z.mipmask|=1<<Xt;else X=z.images[0]=Qe(),Pe(X,z),Se(X,ee),z.mipmask=1;Pe(z,z.images[0]),z.compressed&&(z.internalformat===Su||z.internalformat===Au||z.internalformat===Tu||z.internalformat===Lu)&&_(z.width%4===0&&z.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function pn(z,ee){for(var X=z.images,Ye=0;Ye<X.length;++Ye){if(!X[Ye])return;fe(X[Ye],ee,Ye)}}var Nn=[];function eo(){var z=Nn.pop()||new Rt;pe.call(z),z.mipmask=0;for(var ee=0;ee<16;++ee)z.images[ee]=null;return z}function _n(z){for(var ee=z.images,X=0;X<ee.length;++X)ee[X]&&Vt(ee[X]),ee[X]=null;Nn.push(z)}function Fo(){this.minFilter=Ru,this.magFilter=Ru,this.wrapS=Nu,this.wrapT=Nu,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=df}function vn(z,ee){if("min"in ee){var X=ee.min;_.parameter(X,_e),z.minFilter=_e[X],bw.indexOf(z.minFilter)>=0&&!("faces"in ee)&&(z.genMipmaps=!0)}if("mag"in ee){var Ye=ee.mag;_.parameter(Ye,Ee),z.magFilter=Ee[Ye]}var Xt=z.wrapS,A=z.wrapT;if("wrap"in ee){var w=ee.wrap;typeof w=="string"?(_.parameter(w,we),Xt=A=we[w]):Array.isArray(w)&&(_.parameter(w[0],we),_.parameter(w[1],we),Xt=we[w[0]],A=we[w[1]])}else{if("wrapS"in ee){var P=ee.wrapS;_.parameter(P,we),Xt=we[P]}if("wrapT"in ee){var H=ee.wrapT;_.parameter(H,we),A=we[H]}}if(z.wrapS=Xt,z.wrapT=A,"anisotropic"in ee){var j=ee.anisotropic;_(typeof j=="number"&&j>=1&&j<=C.maxAnisotropic,"aniso samples must be between 1 and "),z.anisotropic=ee.anisotropic}if("mipmap"in ee){var F=!1;switch(typeof ee.mipmap){case"string":_.parameter(ee.mipmap,ge,"invalid mipmap hint"),z.mipmapHint=ge[ee.mipmap],z.genMipmaps=!0,F=!0;break;case"boolean":F=z.genMipmaps=ee.mipmap;break;case"object":_(Array.isArray(ee.mipmap),"invalid mipmap type"),z.genMipmaps=!1,F=!0;break;default:_.raise("invalid mipmap type")}F&&!("min"in ee)&&(z.minFilter=Pu)}}function Mn(z,ee){x.texParameteri(ee,fw,z.minFilter),x.texParameteri(ee,lw,z.magFilter),x.texParameteri(ee,aw,z.wrapS),x.texParameteri(ee,iw,z.wrapT),M.ext_texture_filter_anisotropic&&x.texParameteri(ee,vw,z.anisotropic),z.genMipmaps&&(x.hint(uw,z.mipmapHint),x.generateMipmap(ee))}var kn=0,Bn={},Jn=C.maxTextureUnits,cn=Array(Jn).map(function(){return null});function Gt(z){pe.call(this),this.mipmask=0,this.internalformat=gs,this.id=kn++,this.refCount=1,this.target=z,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Fo,oe.profile&&(this.stats={size:0})}function er(z){x.activeTexture($c),x.bindTexture(z.target,z.texture)}function yo(){var z=cn[0];z?x.bindTexture(z.target,z.texture):x.bindTexture(Ba,null)}function yt(z){var ee=z.texture;_(ee,"must not double destroy texture");var X=z.unit,Ye=z.target;X>=0&&(x.activeTexture($c+X),x.bindTexture(Ye,null),cn[X]=null),x.deleteTexture(ee),z.texture=null,z.params=null,z.pixels=null,z.refCount=0,delete Bn[z.id],Q.textureCount--}t(Gt.prototype,{bind:function(){var z=this;z.bindCount+=1;var ee=z.unit;if(ee<0){for(var X=0;X<Jn;++X){var Ye=cn[X];if(Ye){if(Ye.bindCount>0)continue;Ye.unit=-1}cn[X]=z,ee=X;break}ee>=Jn&&_.raise("insufficient number of texture units"),oe.profile&&Q.maxTextureUnits<ee+1&&(Q.maxTextureUnits=ee+1),z.unit=ee,x.activeTexture($c+ee),x.bindTexture(z.target,z.texture)}return ee},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&yt(this)}});function Qt(z,ee){var X=new Gt(Ba);Bn[X.id]=X,Q.textureCount++;function Ye(w,P){var H=X.texInfo;Fo.call(H);var j=eo();return typeof w=="number"?typeof P=="number"?Ut(j,w|0,P|0):Ut(j,w|0,w|0):w?(_.type(w,"object","invalid arguments to regl.texture"),vn(H,w),ho(j,w)):Ut(j,1,1),H.genMipmaps&&(j.mipmask=(j.width<<1)-1),X.mipmask=j.mipmask,Pe(X,j),_.texture2D(H,j,C),X.internalformat=j.internalformat,Ye.width=j.width,Ye.height=j.height,er(X),pn(j,Ba),Mn(H,Ba),yo(),_n(j),oe.profile&&(X.stats.size=vf(X.internalformat,X.type,j.width,j.height,H.genMipmaps,!1)),Ye.format=ke[X.internalformat],Ye.type=Ue[X.type],Ye.mag=ue[H.magFilter],Ye.min=je[H.minFilter],Ye.wrapS=ve[H.wrapS],Ye.wrapT=ve[H.wrapT],Ye}function Xt(w,P,H,j){_(!!w,"must specify image data");var F=P|0,I=H|0,D=j|0,T=Qe();return Pe(T,X),T.width=0,T.height=0,Se(T,w),T.width=T.width||(X.width>>D)-F,T.height=T.height||(X.height>>D)-I,_(X.type===T.type&&X.format===T.format&&X.internalformat===T.internalformat,"incompatible format for texture.subimage"),_(F>=0&&I>=0&&F+T.width<=X.width&&I+T.height<=X.height,"texture.subimage write out of bounds"),_(X.mipmask&1<<D,"missing mipmap data"),_(T.data||T.element||T.needsCopy,"missing image data"),er(X),At(T,Ba,F,I,D),yo(),Vt(T),Ye}function A(w,P){var H=w|0,j=P|0||H;if(H===X.width&&j===X.height)return Ye;Ye.width=X.width=H,Ye.height=X.height=j,er(X);for(var F=0;X.mipmask>>F;++F){var I=H>>F,D=j>>F;if(!I||!D)break;x.texImage2D(Ba,F,X.format,I,D,0,X.format,X.type,null)}return yo(),oe.profile&&(X.stats.size=vf(X.internalformat,X.type,H,j,!1,!1)),Ye}return Ye(z,ee),Ye.subimage=Xt,Ye.resize=A,Ye._reglType="texture2d",Ye._texture=X,oe.profile&&(Ye.stats=X.stats),Ye.destroy=function(){X.decRef()},Ye}function io(z,ee,X,Ye,Xt,A){var w=new Gt(bu);Bn[w.id]=w,Q.cubeCount++;var P=new Array(6);function H(I,D,T,R,S,$){var V,ie=w.texInfo;for(Fo.call(ie),V=0;V<6;++V)P[V]=eo();if(typeof I=="number"||!I){var ce=I|0||1;for(V=0;V<6;++V)Ut(P[V],ce,ce)}else if(typeof I=="object")if(D)ho(P[0],I),ho(P[1],D),ho(P[2],T),ho(P[3],R),ho(P[4],S),ho(P[5],$);else if(vn(ie,I),ut(w,I),"faces"in I){var ae=I.faces;for(_(Array.isArray(ae)&&ae.length===6,"cube faces must be a length 6 array"),V=0;V<6;++V)_(typeof ae[V]=="object"&&!!ae[V],"invalid input for cube map face"),Pe(P[V],w),ho(P[V],ae[V])}else for(V=0;V<6;++V)ho(P[V],I);else _.raise("invalid arguments to cube map");for(Pe(w,P[0]),C.npotTextureCube||_(Hp(w.width)&&Hp(w.height),"your browser does not support non power or two texture dimensions"),ie.genMipmaps?w.mipmask=(P[0].width<<1)-1:w.mipmask=P[0].mipmask,_.textureCube(w,ie,P,C),w.internalformat=P[0].internalformat,H.width=P[0].width,H.height=P[0].height,er(w),V=0;V<6;++V)pn(P[V],lf+V);for(Mn(ie,bu),yo(),oe.profile&&(w.stats.size=vf(w.internalformat,w.type,H.width,H.height,ie.genMipmaps,!0)),H.format=ke[w.internalformat],H.type=Ue[w.type],H.mag=ue[ie.magFilter],H.min=je[ie.minFilter],H.wrapS=ve[ie.wrapS],H.wrapT=ve[ie.wrapT],V=0;V<6;++V)_n(P[V]);return H}function j(I,D,T,R,S){_(!!D,"must specify image data"),_(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var $=T|0,V=R|0,ie=S|0,ce=Qe();return Pe(ce,w),ce.width=0,ce.height=0,Se(ce,D),ce.width=ce.width||(w.width>>ie)-$,ce.height=ce.height||(w.height>>ie)-V,_(w.type===ce.type&&w.format===ce.format&&w.internalformat===ce.internalformat,"incompatible format for texture.subimage"),_($>=0&&V>=0&&$+ce.width<=w.width&&V+ce.height<=w.height,"texture.subimage write out of bounds"),_(w.mipmask&1<<ie,"missing mipmap data"),_(ce.data||ce.element||ce.needsCopy,"missing image data"),er(w),At(ce,lf+I,$,V,ie),yo(),Vt(ce),H}function F(I){var D=I|0;if(D!==w.width){H.width=w.width=D,H.height=w.height=D,er(w);for(var T=0;T<6;++T)for(var R=0;w.mipmask>>R;++R)x.texImage2D(lf+T,R,w.format,D>>R,D>>R,0,w.format,w.type,null);return yo(),oe.profile&&(w.stats.size=vf(w.internalformat,w.type,H.width,H.height,!1,!0)),H}}return H(z,ee,X,Ye,Xt,A),H.subimage=j,H.resize=F,H._reglType="textureCube",H._texture=w,oe.profile&&(H.stats=w.stats),H.destroy=function(){w.decRef()},H}function ln(){for(var z=0;z<Jn;++z)x.activeTexture($c+z),x.bindTexture(Ba,null),cn[z]=null;Xr(Bn).forEach(yt),Q.cubeCount=0,Q.textureCount=0}oe.profile&&(Q.getTotalTextureSize=function(){var z=0;return Object.keys(Bn).forEach(function(ee){z+=Bn[ee].stats.size}),z});function Wa(){for(var z=0;z<Jn;++z){var ee=cn[z];ee&&(ee.bindCount=0,ee.unit=-1,cn[z]=null)}Xr(Bn).forEach(function(X){X.texture=x.createTexture(),x.bindTexture(X.target,X.texture);for(var Ye=0;Ye<32;++Ye)if(X.mipmask&1<<Ye)if(X.target===Ba)x.texImage2D(Ba,Ye,X.internalformat,X.width>>Ye,X.height>>Ye,0,X.internalformat,X.type,null);else for(var Xt=0;Xt<6;++Xt)x.texImage2D(lf+Xt,Ye,X.internalformat,X.width>>Ye,X.height>>Ye,0,X.internalformat,X.type,null);Mn(X.texInfo,X.target)})}function Es(){for(var z=0;z<Jn;++z){var ee=cn[z];ee&&(ee.bindCount=0,ee.unit=-1,cn[z]=null),x.activeTexture($c+z),x.bindTexture(Ba,null),x.bindTexture(bu,null)}}return{create2D:Qt,createCube:io,clear:ln,getTexture:function(z){return null},restore:Wa,refresh:Es}}var Ti=36161,mf=32854,vv=32855,mv=36194,gv=33189,xv=36168,yv=34041,bv=35907,wv=34836,_v=34842,Mv=34843,Sa=[];Sa[mf]=2,Sa[vv]=2,Sa[mv]=2,Sa[gv]=2,Sa[xv]=1,Sa[yv]=4,Sa[bv]=4,Sa[wv]=16,Sa[_v]=8,Sa[Mv]=6;function kv(x,M,C){return Sa[x]*M*C}var Lw=function(x,M,C,J,se){var Q={rgba4:mf,rgb565:mv,"rgb5 a1":vv,depth:gv,stencil:xv,"depth stencil":yv};M.ext_srgb&&(Q.srgba=bv),M.ext_color_buffer_half_float&&(Q.rgba16f=_v,Q.rgb16f=Mv),M.webgl_color_buffer_float&&(Q.rgba32f=wv);var oe=[];Object.keys(Q).forEach(function(xe){var Ce=Q[xe];oe[Ce]=xe});var ge=0,we={};function Ee(xe){this.id=ge++,this.refCount=1,this.renderbuffer=xe,this.format=mf,this.width=0,this.height=0,se.profile&&(this.stats={size:0})}Ee.prototype.decRef=function(){--this.refCount<=0&&_e(this)};function _e(xe){var Ce=xe.renderbuffer;_(Ce,"must not double destroy renderbuffer"),x.bindRenderbuffer(Ti,null),x.deleteRenderbuffer(Ce),xe.renderbuffer=null,xe.refCount=0,delete we[xe.id],J.renderbufferCount--}function Le(xe,Ce){var B=new Ee(x.createRenderbuffer());we[B.id]=B,J.renderbufferCount++;function ne(Ue,ue){var je=0,ve=0,Re=mf;if(typeof Ue=="object"&&Ue){var pe=Ue;if("shape"in pe){var Pe=pe.shape;_(Array.isArray(Pe)&&Pe.length>=2,"invalid renderbuffer shape"),je=Pe[0]|0,ve=Pe[1]|0}else"radius"in pe&&(je=ve=pe.radius|0),"width"in pe&&(je=pe.width|0),"height"in pe&&(ve=pe.height|0);"format"in pe&&(_.parameter(pe.format,Q,"invalid renderbuffer format"),Re=Q[pe.format])}else typeof Ue=="number"?(je=Ue|0,typeof ue=="number"?ve=ue|0:ve=je):Ue?_.raise("invalid arguments to renderbuffer constructor"):je=ve=1;if(_(je>0&&ve>0&&je<=C.maxRenderbufferSize&&ve<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(je===B.width&&ve===B.height&&Re===B.format))return ne.width=B.width=je,ne.height=B.height=ve,B.format=Re,x.bindRenderbuffer(Ti,B.renderbuffer),x.renderbufferStorage(Ti,Re,je,ve),_(x.getError()===0,"invalid render buffer format"),se.profile&&(B.stats.size=kv(B.format,B.width,B.height)),ne.format=oe[B.format],ne}function ke(Ue,ue){var je=Ue|0,ve=ue|0||je;return je===B.width&&ve===B.height||(_(je>0&&ve>0&&je<=C.maxRenderbufferSize&&ve<=C.maxRenderbufferSize,"invalid renderbuffer size"),ne.width=B.width=je,ne.height=B.height=ve,x.bindRenderbuffer(Ti,B.renderbuffer),x.renderbufferStorage(Ti,B.format,je,ve),_(x.getError()===0,"invalid render buffer format"),se.profile&&(B.stats.size=kv(B.format,B.width,B.height))),ne}return ne(xe,Ce),ne.resize=ke,ne._reglType="renderbuffer",ne._renderbuffer=B,se.profile&&(ne.stats=B.stats),ne.destroy=function(){B.decRef()},ne}se.profile&&(J.getTotalRenderbufferSize=function(){var xe=0;return Object.keys(we).forEach(function(Ce){xe+=we[Ce].stats.size}),xe});function Fe(){Xr(we).forEach(function(xe){xe.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(Ti,xe.renderbuffer),x.renderbufferStorage(Ti,xe.format,xe.width,xe.height)}),x.bindRenderbuffer(Ti,null)}return{create:Le,clear:function(){Xr(we).forEach(_e)},restore:Fe}},ii=36160,Fu=36161,ys=3553,gf=34069,Ev=36064,Sv=36096,Av=36128,Tv=33306,Lv=36053,zw=36054,Cw=36055,Nw=36057,Rw=36061,Pw=36193,Ow=5121,Iw=5126,zv=6407,Cv=6408,Fw=6402,Dw=[zv,Cv],Du=[];Du[Cv]=4,Du[zv]=3;var xf=[];xf[Ow]=1,xf[Iw]=4,xf[Pw]=2;var Gw=32854,$w=32855,qw=36194,Hw=33189,Uw=36168,Nv=34041,Bw=35907,jw=34836,Ww=34842,Vw=34843,Xw=[Gw,$w,qw,Bw,Ww,Vw,jw],M0={};M0[Lv]="complete",M0[zw]="incomplete attachment",M0[Nw]="incomplete dimensions",M0[Cw]="incomplete, missing attachment",M0[Rw]="unsupported";function Yw(x,M,C,J,se,Q){var oe={cur:null,next:null,dirty:!1,setFBO:null},ge=["rgba"],we=["rgba4","rgb565","rgb5 a1"];M.ext_srgb&&we.push("srgba"),M.ext_color_buffer_half_float&&we.push("rgba16f","rgb16f"),M.webgl_color_buffer_float&&we.push("rgba32f");var Ee=["uint8"];M.oes_texture_half_float&&Ee.push("half float","float16"),M.oes_texture_float&&Ee.push("float","float32");function _e(De,Se,fe){this.target=De,this.texture=Se,this.renderbuffer=fe;var At=0,Dt=0;Se?(At=Se.width,Dt=Se.height):fe&&(At=fe.width,Dt=fe.height),this.width=At,this.height=Dt}function Le(De){De&&(De.texture&&De.texture._texture.decRef(),De.renderbuffer&&De.renderbuffer._renderbuffer.decRef())}function Fe(De,Se,fe){if(De)if(De.texture){var At=De.texture._texture,Dt=Math.max(1,At.width),Qe=Math.max(1,At.height);_(Dt===Se&&Qe===fe,"inconsistent width/height for supplied texture"),At.refCount+=1}else{var Vt=De.renderbuffer._renderbuffer;_(Vt.width===Se&&Vt.height===fe,"inconsistent width/height for renderbuffer"),Vt.refCount+=1}}function xe(De,Se){Se&&(Se.texture?x.framebufferTexture2D(ii,De,Se.target,Se.texture._texture.texture,0):x.framebufferRenderbuffer(ii,De,Fu,Se.renderbuffer._renderbuffer.renderbuffer))}function Ce(De){var Se=ys,fe=null,At=null,Dt=De;typeof De=="object"&&(Dt=De.data,"target"in De&&(Se=De.target|0)),_.type(Dt,"function","invalid attachment data");var Qe=Dt._reglType;return Qe==="texture2d"?(fe=Dt,_(Se===ys)):Qe==="textureCube"?(fe=Dt,_(Se>=gf&&Se<gf+6,"invalid cube map target")):Qe==="renderbuffer"?(At=Dt,Se=Fu):_.raise("invalid regl object for attachment"),new _e(Se,fe,At)}function B(De,Se,fe,At,Dt){if(fe){var Qe=J.create2D({width:De,height:Se,format:At,type:Dt});return Qe._texture.refCount=0,new _e(ys,Qe,null)}else{var Vt=se.create({width:De,height:Se,format:At});return Vt._renderbuffer.refCount=0,new _e(Fu,null,Vt)}}function ne(De){return De&&(De.texture||De.renderbuffer)}function ke(De,Se,fe){De&&(De.texture?De.texture.resize(Se,fe):De.renderbuffer&&De.renderbuffer.resize(Se,fe),De.width=Se,De.height=fe)}var Ue=0,ue={};function je(){this.id=Ue++,ue[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ve(De){De.colorAttachments.forEach(Le),Le(De.depthAttachment),Le(De.stencilAttachment),Le(De.depthStencilAttachment)}function Re(De){var Se=De.framebuffer;_(Se,"must not double destroy framebuffer"),x.deleteFramebuffer(Se),De.framebuffer=null,Q.framebufferCount--,delete ue[De.id]}function pe(De){var Se;x.bindFramebuffer(ii,De.framebuffer);var fe=De.colorAttachments;for(Se=0;Se<fe.length;++Se)xe(Ev+Se,fe[Se]);for(Se=fe.length;Se<C.maxColorAttachments;++Se)x.framebufferTexture2D(ii,Ev+Se,ys,null,0);x.framebufferTexture2D(ii,Tv,ys,null,0),x.framebufferTexture2D(ii,Sv,ys,null,0),x.framebufferTexture2D(ii,Av,ys,null,0),xe(Sv,De.depthAttachment),xe(Av,De.stencilAttachment),xe(Tv,De.depthStencilAttachment);var At=x.checkFramebufferStatus(ii);!x.isContextLost()&&At!==Lv&&_.raise("framebuffer configuration not supported, status = "+M0[At]),x.bindFramebuffer(ii,oe.next?oe.next.framebuffer:null),oe.cur=oe.next,x.getError()}function Pe(De,Se){var fe=new je;Q.framebufferCount++;function At(Qe,Vt){var Rt;_(oe.next!==fe,"can not update framebuffer which is currently in use");var Ut=0,ho=0,pn=!0,Nn=!0,eo=null,_n=!0,Fo="rgba",vn="uint8",Mn=1,kn=null,Bn=null,Jn=null,cn=!1;if(typeof Qe=="number")Ut=Qe|0,ho=Vt|0||Ut;else if(!Qe)Ut=ho=1;else{_.type(Qe,"object","invalid arguments for framebuffer");var Gt=Qe;if("shape"in Gt){var er=Gt.shape;_(Array.isArray(er)&&er.length>=2,"invalid shape for framebuffer"),Ut=er[0],ho=er[1]}else"radius"in Gt&&(Ut=ho=Gt.radius),"width"in Gt&&(Ut=Gt.width),"height"in Gt&&(ho=Gt.height);("color"in Gt||"colors"in Gt)&&(eo=Gt.color||Gt.colors,Array.isArray(eo)&&_(eo.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),eo||("colorCount"in Gt&&(Mn=Gt.colorCount|0,_(Mn>0,"invalid color buffer count")),"colorTexture"in Gt&&(_n=!!Gt.colorTexture,Fo="rgba4"),"colorType"in Gt&&(vn=Gt.colorType,_n?(_(M.oes_texture_float||!(vn==="float"||vn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(M.oes_texture_half_float||!(vn==="half float"||vn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):vn==="half float"||vn==="float16"?(_(M.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Fo="rgba16f"):(vn==="float"||vn==="float32")&&(_(M.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Fo="rgba32f"),_.oneOf(vn,Ee,"invalid color type")),"colorFormat"in Gt&&(Fo=Gt.colorFormat,ge.indexOf(Fo)>=0?_n=!0:we.indexOf(Fo)>=0?_n=!1:_n?_.oneOf(Gt.colorFormat,ge,"invalid color format for texture"):_.oneOf(Gt.colorFormat,we,"invalid color format for renderbuffer"))),("depthTexture"in Gt||"depthStencilTexture"in Gt)&&(cn=!!(Gt.depthTexture||Gt.depthStencilTexture),_(!cn||M.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Gt&&(typeof Gt.depth=="boolean"?pn=Gt.depth:(kn=Gt.depth,Nn=!1)),"stencil"in Gt&&(typeof Gt.stencil=="boolean"?Nn=Gt.stencil:(Bn=Gt.stencil,pn=!1)),"depthStencil"in Gt&&(typeof Gt.depthStencil=="boolean"?pn=Nn=Gt.depthStencil:(Jn=Gt.depthStencil,pn=!1,Nn=!1))}var yo=null,yt=null,Qt=null,io=null;if(Array.isArray(eo))yo=eo.map(Ce);else if(eo)yo=[Ce(eo)];else for(yo=new Array(Mn),Rt=0;Rt<Mn;++Rt)yo[Rt]=B(Ut,ho,_n,Fo,vn);_(M.webgl_draw_buffers||yo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(yo.length<=C.maxColorAttachments,"too many color attachments, not supported"),Ut=Ut||yo[0].width,ho=ho||yo[0].height,kn?yt=Ce(kn):pn&&!Nn&&(yt=B(Ut,ho,cn,"depth","uint32")),Bn?Qt=Ce(Bn):Nn&&!pn&&(Qt=B(Ut,ho,!1,"stencil","uint8")),Jn?io=Ce(Jn):!kn&&!Bn&&Nn&&pn&&(io=B(Ut,ho,cn,"depth stencil","depth stencil")),_(!!kn+!!Bn+!!Jn<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var ln=null;for(Rt=0;Rt<yo.length;++Rt)if(Fe(yo[Rt],Ut,ho),_(!yo[Rt]||yo[Rt].texture&&Dw.indexOf(yo[Rt].texture._texture.format)>=0||yo[Rt].renderbuffer&&Xw.indexOf(yo[Rt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Rt+" is invalid"),yo[Rt]&&yo[Rt].texture){var Wa=Du[yo[Rt].texture._texture.format]*xf[yo[Rt].texture._texture.type];ln===null?ln=Wa:_(ln===Wa,"all color attachments much have the same number of bits per pixel.")}return Fe(yt,Ut,ho),_(!yt||yt.texture&&yt.texture._texture.format===Fw||yt.renderbuffer&&yt.renderbuffer._renderbuffer.format===Hw,"invalid depth attachment for framebuffer object"),Fe(Qt,Ut,ho),_(!Qt||Qt.renderbuffer&&Qt.renderbuffer._renderbuffer.format===Uw,"invalid stencil attachment for framebuffer object"),Fe(io,Ut,ho),_(!io||io.texture&&io.texture._texture.format===Nv||io.renderbuffer&&io.renderbuffer._renderbuffer.format===Nv,"invalid depth-stencil attachment for framebuffer object"),ve(fe),fe.width=Ut,fe.height=ho,fe.colorAttachments=yo,fe.depthAttachment=yt,fe.stencilAttachment=Qt,fe.depthStencilAttachment=io,At.color=yo.map(ne),At.depth=ne(yt),At.stencil=ne(Qt),At.depthStencil=ne(io),At.width=fe.width,At.height=fe.height,pe(fe),At}function Dt(Qe,Vt){_(oe.next!==fe,"can not resize a framebuffer which is currently in use");var Rt=Math.max(Qe|0,1),Ut=Math.max(Vt|0||Rt,1);if(Rt===fe.width&&Ut===fe.height)return At;for(var ho=fe.colorAttachments,pn=0;pn<ho.length;++pn)ke(ho[pn],Rt,Ut);return ke(fe.depthAttachment,Rt,Ut),ke(fe.stencilAttachment,Rt,Ut),ke(fe.depthStencilAttachment,Rt,Ut),fe.width=At.width=Rt,fe.height=At.height=Ut,pe(fe),At}return At(De,Se),t(At,{resize:Dt,_reglType:"framebuffer",_framebuffer:fe,destroy:function(){Re(fe),ve(fe)},use:function(Qe){oe.setFBO({framebuffer:At},Qe)}})}function ut(De){var Se=Array(6);function fe(Dt){var Qe;_(Se.indexOf(oe.next)<0,"can not update framebuffer which is currently in use");var Vt={color:null},Rt=0,Ut=null,ho="rgba",pn="uint8",Nn=1;if(typeof Dt=="number")Rt=Dt|0;else if(!Dt)Rt=1;else{_.type(Dt,"object","invalid arguments for framebuffer");var eo=Dt;if("shape"in eo){var _n=eo.shape;_(Array.isArray(_n)&&_n.length>=2,"invalid shape for framebuffer"),_(_n[0]===_n[1],"cube framebuffer must be square"),Rt=_n[0]}else"radius"in eo&&(Rt=eo.radius|0),"width"in eo?(Rt=eo.width|0,"height"in eo&&_(eo.height===Rt,"must be square")):"height"in eo&&(Rt=eo.height|0);("color"in eo||"colors"in eo)&&(Ut=eo.color||eo.colors,Array.isArray(Ut)&&_(Ut.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),Ut||("colorCount"in eo&&(Nn=eo.colorCount|0,_(Nn>0,"invalid color buffer count")),"colorType"in eo&&(_.oneOf(eo.colorType,Ee,"invalid color type"),pn=eo.colorType),"colorFormat"in eo&&(ho=eo.colorFormat,_.oneOf(eo.colorFormat,ge,"invalid color format for texture"))),"depth"in eo&&(Vt.depth=eo.depth),"stencil"in eo&&(Vt.stencil=eo.stencil),"depthStencil"in eo&&(Vt.depthStencil=eo.depthStencil)}var Fo;if(Ut)if(Array.isArray(Ut))for(Fo=[],Qe=0;Qe<Ut.length;++Qe)Fo[Qe]=Ut[Qe];else Fo=[Ut];else{Fo=Array(Nn);var vn={radius:Rt,format:ho,type:pn};for(Qe=0;Qe<Nn;++Qe)Fo[Qe]=J.createCube(vn)}for(Vt.color=Array(Fo.length),Qe=0;Qe<Fo.length;++Qe){var Mn=Fo[Qe];_(typeof Mn=="function"&&Mn._reglType==="textureCube","invalid cube map"),Rt=Rt||Mn.width,_(Mn.width===Rt&&Mn.height===Rt,"invalid cube map shape"),Vt.color[Qe]={target:gf,data:Fo[Qe]}}for(Qe=0;Qe<6;++Qe){for(var kn=0;kn<Fo.length;++kn)Vt.color[kn].target=gf+Qe;Qe>0&&(Vt.depth=Se[0].depth,Vt.stencil=Se[0].stencil,Vt.depthStencil=Se[0].depthStencil),Se[Qe]?Se[Qe](Vt):Se[Qe]=Pe(Vt)}return t(fe,{width:Rt,height:Rt,color:Fo})}function At(Dt){var Qe,Vt=Dt|0;if(_(Vt>0&&Vt<=C.maxCubeMapSize,"invalid radius for cube fbo"),Vt===fe.width)return fe;var Rt=fe.color;for(Qe=0;Qe<Rt.length;++Qe)Rt[Qe].resize(Vt);for(Qe=0;Qe<6;++Qe)Se[Qe].resize(Vt);return fe.width=fe.height=Vt,fe}return fe(De),t(fe,{faces:Se,resize:At,_reglType:"framebufferCube",destroy:function(){Se.forEach(function(Dt){Dt.destroy()})}})}function Ct(){oe.cur=null,oe.next=null,oe.dirty=!0,Xr(ue).forEach(function(De){De.framebuffer=x.createFramebuffer(),pe(De)})}return t(oe,{getFramebuffer:function(De){if(typeof De=="function"&&De._reglType==="framebuffer"){var Se=De._framebuffer;if(Se instanceof je)return Se}return null},create:Pe,createCube:ut,clear:function(){Xr(ue).forEach(Re)},restore:Ct})}var Kw=5126,Rv=34962;function Gu(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Kw,this.offset=0,this.stride=0,this.divisor=0}function Qw(x,M,C,J,se){for(var Q=C.maxAttributes,oe=new Array(Q),ge=0;ge<Q;++ge)oe[ge]=new Gu;var we=0,Ee={},_e={Record:Gu,scope:{},state:oe,currentVAO:null,targetVAO:null,restore:Fe()?ue:function(){},createVAO:je,getVAO:Ce,destroyBuffer:Le,setVAO:Fe()?B:ne,clear:Fe()?ke:function(){}};function Le(ve){for(var Re=0;Re<oe.length;++Re){var pe=oe[Re];pe.buffer===ve&&(x.disableVertexAttribArray(Re),pe.buffer=null)}}function Fe(){return M.oes_vertex_array_object}function xe(){return M.angle_instanced_arrays}function Ce(ve){return typeof ve=="function"&&ve._vao?ve._vao:null}function B(ve){if(ve!==_e.currentVAO){var Re=Fe();ve?Re.bindVertexArrayOES(ve.vao):Re.bindVertexArrayOES(null),_e.currentVAO=ve}}function ne(ve){if(ve!==_e.currentVAO){if(ve)ve.bindAttrs();else for(var Re=xe(),pe=0;pe<oe.length;++pe){var Pe=oe[pe];Pe.buffer?(x.enableVertexAttribArray(pe),x.vertexAttribPointer(pe,Pe.size,Pe.type,Pe.normalized,Pe.stride,Pe.offfset),Re&&Pe.divisor&&Re.vertexAttribDivisorANGLE(pe,Pe.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,Pe.x,Pe.y,Pe.z,Pe.w))}_e.currentVAO=ve}}function ke(){Xr(Ee).forEach(function(ve){ve.destroy()})}function Ue(){this.id=++we,this.attributes=[];var ve=Fe();ve?this.vao=ve.createVertexArrayOES():this.vao=null,Ee[this.id]=this,this.buffers=[]}Ue.prototype.bindAttrs=function(){for(var ve=xe(),Re=this.attributes,pe=0;pe<Re.length;++pe){var Pe=Re[pe];Pe.buffer?(x.enableVertexAttribArray(pe),x.bindBuffer(Rv,Pe.buffer.buffer),x.vertexAttribPointer(pe,Pe.size,Pe.type,Pe.normalized,Pe.stride,Pe.offset),ve&&Pe.divisor&&ve.vertexAttribDivisorANGLE(pe,Pe.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,Pe.x,Pe.y,Pe.z,Pe.w))}for(var ut=Re.length;ut<Q;++ut)x.disableVertexAttribArray(ut)},Ue.prototype.refresh=function(){var ve=Fe();ve&&(ve.bindVertexArrayOES(this.vao),this.bindAttrs(),_e.currentVAO=this)},Ue.prototype.destroy=function(){if(this.vao){var ve=Fe();this===_e.currentVAO&&(_e.currentVAO=null,ve.bindVertexArrayOES(null)),ve.deleteVertexArrayOES(this.vao),this.vao=null}Ee[this.id]&&(delete Ee[this.id],J.vaoCount-=1)};function ue(){var ve=Fe();ve&&Xr(Ee).forEach(function(Re){Re.refresh()})}function je(ve){var Re=new Ue;J.vaoCount+=1;function pe(Pe){_(Array.isArray(Pe),"arguments to vertex array constructor must be an array"),_(Pe.length<Q,"too many attributes"),_(Pe.length>0,"must specify at least one attribute");var ut={},Ct=Re.attributes;Ct.length=Pe.length;for(var De=0;De<Pe.length;++De){var Se=Pe[De],fe=Ct[De]=new Gu,At=Se.data||Se;if(Array.isArray(At)||e(At)||Ea(At)){var Dt;Re.buffers[De]&&(Dt=Re.buffers[De],e(At)&&Dt._buffer.byteLength>=At.byteLength?Dt.subdata(At):(Dt.destroy(),Re.buffers[De]=null)),Re.buffers[De]||(Dt=Re.buffers[De]=se.create(Se,Rv,!1,!0)),fe.buffer=se.getBuffer(Dt),fe.size=fe.buffer.dimension|0,fe.normalized=!1,fe.type=fe.buffer.dtype,fe.offset=0,fe.stride=0,fe.divisor=0,fe.state=1,ut[De]=1}else se.getBuffer(Se)?(fe.buffer=se.getBuffer(Se),fe.size=fe.buffer.dimension|0,fe.normalized=!1,fe.type=fe.buffer.dtype,fe.offset=0,fe.stride=0,fe.divisor=0,fe.state=1):se.getBuffer(Se.buffer)?(fe.buffer=se.getBuffer(Se.buffer),fe.size=(+Se.size||fe.buffer.dimension)|0,fe.normalized=!!Se.normalized||!1,"type"in Se?(_.parameter(Se.type,vs,"invalid buffer type"),fe.type=vs[Se.type]):fe.type=fe.buffer.dtype,fe.offset=(Se.offset||0)|0,fe.stride=(Se.stride||0)|0,fe.divisor=(Se.divisor||0)|0,fe.state=1,_(fe.size>=1&&fe.size<=4,"size must be between 1 and 4"),_(fe.offset>=0,"invalid offset"),_(fe.stride>=0&&fe.stride<=255,"stride must be between 0 and 255"),_(fe.divisor>=0,"divisor must be positive"),_(!fe.divisor||!!M.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Se?(_(De>0,"first attribute must not be a constant"),fe.x=+Se.x||0,fe.y=+Se.y||0,fe.z=+Se.z||0,fe.w=+Se.w||0,fe.state=2):_(!1,"invalid attribute spec for location "+De)}for(var Qe=0;Qe<Re.buffers.length;++Qe)!ut[Qe]&&Re.buffers[Qe]&&(Re.buffers[Qe].destroy(),Re.buffers[Qe]=null);return Re.refresh(),pe}return pe.destroy=function(){for(var Pe=0;Pe<Re.buffers.length;++Pe)Re.buffers[Pe]&&Re.buffers[Pe].destroy();Re.buffers.length=0,Re.destroy()},pe._vao=Re,pe._reglType="vao",pe(ve)}return _e}var Pv=35632,Zw=35633,Jw=35718,e4=35721;function t4(x,M,C,J){var se={},Q={};function oe(B,ne,ke,Ue){this.name=B,this.id=ne,this.location=ke,this.info=Ue}function ge(B,ne){for(var ke=0;ke<B.length;++ke)if(B[ke].id===ne.id){B[ke].location=ne.location;return}B.push(ne)}function we(B,ne,ke){var Ue=B===Pv?se:Q,ue=Ue[ne];if(!ue){var je=M.str(ne);ue=x.createShader(B),x.shaderSource(ue,je),x.compileShader(ue),_.shaderError(x,ue,je,B,ke),Ue[ne]=ue}return ue}var Ee={},_e=[],Le=0;function Fe(B,ne){this.id=Le++,this.fragId=B,this.vertId=ne,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,J.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function xe(B,ne,ke){var Ue,ue,je=we(Pv,B.fragId),ve=we(Zw,B.vertId),Re=B.program=x.createProgram();if(x.attachShader(Re,je),x.attachShader(Re,ve),ke)for(Ue=0;Ue<ke.length;++Ue){var pe=ke[Ue];x.bindAttribLocation(Re,pe[0],pe[1])}x.linkProgram(Re),_.linkError(x,Re,M.str(B.fragId),M.str(B.vertId),ne);var Pe=x.getProgramParameter(Re,Jw);J.profile&&(B.stats.uniformsCount=Pe);var ut=B.uniforms;for(Ue=0;Ue<Pe;++Ue)if(ue=x.getActiveUniform(Re,Ue),ue)if(ue.size>1)for(var Ct=0;Ct<ue.size;++Ct){var De=ue.name.replace("[0]","["+Ct+"]");ge(ut,new oe(De,M.id(De),x.getUniformLocation(Re,De),ue))}else ge(ut,new oe(ue.name,M.id(ue.name),x.getUniformLocation(Re,ue.name),ue));var Se=x.getProgramParameter(Re,e4);J.profile&&(B.stats.attributesCount=Se);var fe=B.attributes;for(Ue=0;Ue<Se;++Ue)ue=x.getActiveAttrib(Re,Ue),ue&&ge(fe,new oe(ue.name,M.id(ue.name),x.getAttribLocation(Re,ue.name),ue))}J.profile&&(C.getMaxUniformsCount=function(){var B=0;return _e.forEach(function(ne){ne.stats.uniformsCount>B&&(B=ne.stats.uniformsCount)}),B},C.getMaxAttributesCount=function(){var B=0;return _e.forEach(function(ne){ne.stats.attributesCount>B&&(B=ne.stats.attributesCount)}),B});function Ce(){se={},Q={};for(var B=0;B<_e.length;++B)xe(_e[B],null,_e[B].attributes.map(function(ne){return[ne.location,ne.name]}))}return{clear:function(){var B=x.deleteShader.bind(x);Xr(se).forEach(B),se={},Xr(Q).forEach(B),Q={},_e.forEach(function(ne){x.deleteProgram(ne.program)}),_e.length=0,Ee={},C.shaderCount=0},program:function(B,ne,ke,Ue){_.command(B>=0,"missing vertex shader",ke),_.command(ne>=0,"missing fragment shader",ke);var ue=Ee[ne];ue||(ue=Ee[ne]={});var je=ue[B];if(je&&(je.refCount++,!Ue))return je;var ve=new Fe(ne,B);return C.shaderCount++,xe(ve,ke,Ue),je||(ue[B]=ve),_e.push(ve),t(ve,{destroy:function(){if(ve.refCount--,ve.refCount<=0){x.deleteProgram(ve.program);var Re=_e.indexOf(ve);_e.splice(Re,1),C.shaderCount--}ue[ve.vertId].refCount<=0&&(x.deleteShader(Q[ve.vertId]),delete Q[ve.vertId],delete Ee[ve.fragId][ve.vertId]),Object.keys(Ee[ve.fragId]).length||(x.deleteShader(se[ve.fragId]),delete se[ve.fragId],delete Ee[ve.fragId])}})},restore:Ce,shader:we,frag:-1,vert:-1}}var o4=6408,qc=5121,n4=3333,yf=5126;function r4(x,M,C,J,se,Q,oe){function ge(_e){var Le;M.next===null?(_(se.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Le=qc):(_(M.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Le=M.next.colorAttachments[0].texture._texture.type,Q.oes_texture_float?(_(Le===qc||Le===yf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Le===yf&&_(oe.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(Le===qc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Fe=0,xe=0,Ce=J.framebufferWidth,B=J.framebufferHeight,ne=null;e(_e)?ne=_e:_e&&(_.type(_e,"object","invalid arguments to regl.read()"),Fe=_e.x|0,xe=_e.y|0,_(Fe>=0&&Fe<J.framebufferWidth,"invalid x offset for regl.read"),_(xe>=0&&xe<J.framebufferHeight,"invalid y offset for regl.read"),Ce=(_e.width||J.framebufferWidth-Fe)|0,B=(_e.height||J.framebufferHeight-xe)|0,ne=_e.data||null),ne&&(Le===qc?_(ne instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Le===yf&&_(ne instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(Ce>0&&Ce+Fe<=J.framebufferWidth,"invalid width for read pixels"),_(B>0&&B+xe<=J.framebufferHeight,"invalid height for read pixels"),C();var ke=Ce*B*4;return ne||(Le===qc?ne=new Uint8Array(ke):Le===yf&&(ne=ne||new Float32Array(ke))),_.isTypedArray(ne,"data buffer for regl.read() must be a typedarray"),_(ne.byteLength>=ke,"data buffer for regl.read() too small"),x.pixelStorei(n4,4),x.readPixels(Fe,xe,Ce,B,o4,Le,ne),ne}function we(_e){var Le;return M.setFBO({framebuffer:_e.framebuffer},function(){Le=ge(_e)}),Le}function Ee(_e){return!_e||!("framebuffer"in _e)?ge(_e):we(_e)}return Ee}function k0(x){return Array.prototype.slice.call(x)}function E0(x){return k0(x).join("")}function a4(){var x=0,M=[],C=[];function J(Le){for(var Fe=0;Fe<C.length;++Fe)if(C[Fe]===Le)return M[Fe];var xe="g"+x++;return M.push(xe),C.push(Le),xe}function se(){var Le=[];function Fe(){Le.push.apply(Le,k0(arguments))}var xe=[];function Ce(){var B="v"+x++;return xe.push(B),arguments.length>0&&(Le.push(B,"="),Le.push.apply(Le,k0(arguments)),Le.push(";")),B}return t(Fe,{def:Ce,toString:function(){return E0([xe.length>0?"var "+xe.join(",")+";":"",E0(Le)])}})}function Q(){var Le=se(),Fe=se(),xe=Le.toString,Ce=Fe.toString;function B(ne,ke){Fe(ne,ke,"=",Le.def(ne,ke),";")}return t(function(){Le.apply(Le,k0(arguments))},{def:Le.def,entry:Le,exit:Fe,save:B,set:function(ne,ke,Ue){B(ne,ke),Le(ne,ke,"=",Ue,";")},toString:function(){return xe()+Ce()}})}function oe(){var Le=E0(arguments),Fe=Q(),xe=Q(),Ce=Fe.toString,B=xe.toString;return t(Fe,{then:function(){return Fe.apply(Fe,k0(arguments)),this},else:function(){return xe.apply(xe,k0(arguments)),this},toString:function(){var ne=B();return ne&&(ne="else{"+ne+"}"),E0(["if(",Le,"){",Ce(),"}",ne])}})}var ge=se(),we={};function Ee(Le,Fe){var xe=[];function Ce(){var ue="a"+xe.length;return xe.push(ue),ue}Fe=Fe||0;for(var B=0;B<Fe;++B)Ce();var ne=Q(),ke=ne.toString,Ue=we[Le]=t(ne,{arg:Ce,toString:function(){return E0(["function(",xe.join(),"){",ke(),"}"])}});return Ue}function _e(){var Le=['"use strict";',ge,"return {"];Object.keys(we).forEach(function(Ce){Le.push('"',Ce,'":',we[Ce].toString(),",")}),Le.push("}");var Fe=E0(Le).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),xe=Function.apply(null,M.concat(Fe));return xe.apply(null,C)}return{global:ge,link:J,block:se,proc:Ee,scope:Q,cond:oe,compile:_e}}var S0="xyzw".split(""),Ov=5121,A0=1,$u=2,qu=0,Hu=1,Uu=2,Bu=3,bf=4,Iv=5,Fv=6,Dv="dither",Gv="blend.enable",$v="blend.color",ju="blend.equation",Wu="blend.func",qv="depth.enable",Hv="depth.func",Uv="depth.range",Bv="depth.mask",Vu="colorMask",jv="cull.enable",Wv="cull.face",Xu="frontFace",Yu="lineWidth",Vv="polygonOffset.enable",Ku="polygonOffset.offset",Xv="sample.alpha",Yv="sample.enable",Qu="sample.coverage",Kv="stencil.enable",Qv="stencil.mask",Zu="stencil.func",Ju="stencil.opFront",Hc="stencil.opBack",Zv="scissor.enable",wf="scissor.box",si="viewport",Uc="profile",bs="framebuffer",Bc="vert",jc="frag",ws="elements",_s="primitive",Ms="count",_f="offset",Mf="instances",Wc="vao",e1="Width",t1="Height",T0=bs+e1,L0=bs+t1,i4=si+e1,s4=si+t1,Jv="drawingBuffer",em=Jv+e1,tm=Jv+t1,c4=[Wu,ju,Zu,Ju,Hc,Qu,si,wf,Ku],z0=34962,l4=34963,f4=35632,h4=35633,om=3553,u4=34067,d4=2884,p4=3042,v4=3024,m4=2960,g4=2929,x4=3089,y4=32823,b4=32926,w4=32928,o1=5126,kf=35664,Ef=35665,Sf=35666,n1=5124,Af=35667,Tf=35668,Lf=35669,r1=35670,zf=35671,Cf=35672,Nf=35673,Vc=35674,Xc=35675,Yc=35676,Kc=35678,Qc=35680,nm=4,Zc=1028,ks=1029,rm=2304,a1=2305,_4=32775,M4=32776,k4=519,Li=7680,am=0,im=1,sm=32774,E4=513,cm=36160,S4=36064,ja={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},lm=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],C0={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},zi={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},fm={frag:f4,vert:h4},i1={cw:rm,ccw:a1};function Rf(x){return Array.isArray(x)||e(x)||Ea(x)}function hm(x){return x.sort(function(M,C){return M===si?-1:C===si?1:M<C?-1:1})}function kr(x,M,C,J){this.thisDep=x,this.contextDep=M,this.propDep=C,this.append=J}function Ci(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function dn(x){return new kr(!1,!1,!1,x)}function Dr(x,M){var C=x.type;if(C===qu){var J=x.data.length;return new kr(!0,J>=1,J>=2,M)}else if(C===bf){var se=x.data;return new kr(se.thisDep,se.contextDep,se.propDep,M)}else{if(C===Iv)return new kr(!1,!1,!1,M);if(C===Fv){for(var Q=!1,oe=!1,ge=!1,we=0;we<x.data.length;++we){var Ee=x.data[we];if(Ee.type===Hu)ge=!0;else if(Ee.type===Uu)oe=!0;else if(Ee.type===Bu)Q=!0;else if(Ee.type===qu){Q=!0;var _e=Ee.data;_e>=1&&(oe=!0),_e>=2&&(ge=!0)}else Ee.type===bf&&(Q=Q||Ee.data.thisDep,oe=oe||Ee.data.contextDep,ge=ge||Ee.data.propDep)}return new kr(Q,oe,ge,M)}else return new kr(C===Bu,C===Uu,C===Hu,M)}}var um=new kr(!1,!1,!1,function(){});function A4(x,M,C,J,se,Q,oe,ge,we,Ee,_e,Le,Fe,xe,Ce){var B=Ee.Record,ne={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(ne.min=_4,ne.max=M4);var ke=C.angle_instanced_arrays,Ue=C.webgl_draw_buffers,ue={dirty:!0,profile:Ce.profile},je={},ve=[],Re={},pe={};function Pe(A){return A.replace(".","_")}function ut(A,w,P){var H=Pe(A);ve.push(A),je[H]=ue[H]=!!P,Re[H]=w}function Ct(A,w,P){var H=Pe(A);ve.push(A),Array.isArray(P)?(ue[H]=P.slice(),je[H]=P.slice()):ue[H]=je[H]=P,pe[H]=w}ut(Dv,v4),ut(Gv,p4),Ct($v,"blendColor",[0,0,0,0]),Ct(ju,"blendEquationSeparate",[sm,sm]),Ct(Wu,"blendFuncSeparate",[im,am,im,am]),ut(qv,g4,!0),Ct(Hv,"depthFunc",E4),Ct(Uv,"depthRange",[0,1]),Ct(Bv,"depthMask",!0),Ct(Vu,Vu,[!0,!0,!0,!0]),ut(jv,d4),Ct(Wv,"cullFace",ks),Ct(Xu,Xu,a1),Ct(Yu,Yu,1),ut(Vv,y4),Ct(Ku,"polygonOffset",[0,0]),ut(Xv,b4),ut(Yv,w4),Ct(Qu,"sampleCoverage",[1,!1]),ut(Kv,m4),Ct(Qv,"stencilMask",-1),Ct(Zu,"stencilFunc",[k4,0,-1]),Ct(Ju,"stencilOpSeparate",[Zc,Li,Li,Li]),Ct(Hc,"stencilOpSeparate",[ks,Li,Li,Li]),ut(Zv,x4),Ct(wf,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Ct(si,si,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var De={gl:x,context:Fe,strings:M,next:je,current:ue,draw:Le,elements:Q,buffer:se,shader:_e,attributes:Ee.state,vao:Ee,uniforms:we,framebuffer:ge,extensions:C,timer:xe,isBufferArgs:Rf},Se={primTypes:m0,compareFuncs:C0,blendFuncs:ja,blendEquations:ne,stencilOps:zi,glTypes:vs,orientationType:i1};_.optional(function(){De.isArrayLike=sn}),Ue&&(Se.backBuffer=[ks],Se.drawBuffer=Bt(J.maxDrawbuffers,function(A){return A===0?[0]:Bt(A,function(w){return S4+w})}));var fe=0;function At(){var A=a4(),w=A.link,P=A.global;A.id=fe++,A.batchId="0";var H=w(De),j=A.shared={props:"a0"};Object.keys(De).forEach(function(R){j[R]=P.def(H,".",R)}),_.optional(function(){A.CHECK=w(_),A.commandStr=_.guessCommand(),A.command=w(A.commandStr),A.assert=function(R,S,$){R("if(!(",S,"))",this.CHECK,".commandRaise(",w($),",",this.command,");")},Se.invalidBlendCombinations=lm});var F=A.next={},I=A.current={};Object.keys(pe).forEach(function(R){Array.isArray(ue[R])&&(F[R]=P.def(j.next,".",R),I[R]=P.def(j.current,".",R))});var D=A.constants={};Object.keys(Se).forEach(function(R){D[R]=P.def(JSON.stringify(Se[R]))}),A.invoke=function(R,S){switch(S.type){case qu:var $=["this",j.context,j.props,A.batchId];return R.def(w(S.data),".call(",$.slice(0,Math.max(S.data.length+1,4)),")");case Hu:return R.def(j.props,S.data);case Uu:return R.def(j.context,S.data);case Bu:return R.def("this",S.data);case bf:return S.data.append(A,R),S.data.ref;case Iv:return S.data.toString();case Fv:return S.data.map(function(V){return A.invoke(R,V)})}},A.attribCache={};var T={};return A.scopeAttrib=function(R){var S=M.id(R);if(S in T)return T[S];var $=Ee.scope[S];$||($=Ee.scope[S]=new B);var V=T[S]=w($);return V},A}function Dt(A){var w=A.static,P=A.dynamic,H;if(Uc in w){var j=!!w[Uc];H=dn(function(I,D){return j}),H.enable=j}else if(Uc in P){var F=P[Uc];H=Dr(F,function(I,D){return I.invoke(D,F)})}return H}function Qe(A,w){var P=A.static,H=A.dynamic;if(bs in P){var j=P[bs];return j?(j=ge.getFramebuffer(j),_.command(j,"invalid framebuffer object"),dn(function(I,D){var T=I.link(j),R=I.shared;D.set(R.framebuffer,".next",T);var S=R.context;return D.set(S,"."+T0,T+".width"),D.set(S,"."+L0,T+".height"),T})):dn(function(I,D){var T=I.shared;D.set(T.framebuffer,".next","null");var R=T.context;return D.set(R,"."+T0,R+"."+em),D.set(R,"."+L0,R+"."+tm),"null"})}else if(bs in H){var F=H[bs];return Dr(F,function(I,D){var T=I.invoke(D,F),R=I.shared,S=R.framebuffer,$=D.def(S,".getFramebuffer(",T,")");_.optional(function(){I.assert(D,"!"+T+"||"+$,"invalid framebuffer object")}),D.set(S,".next",$);var V=R.context;return D.set(V,"."+T0,$+"?"+$+".width:"+V+"."+em),D.set(V,"."+L0,$+"?"+$+".height:"+V+"."+tm),$})}else return null}function Vt(A,w,P){var H=A.static,j=A.dynamic;function F(T){if(T in H){var R=H[T];_.commandType(R,"object","invalid "+T,P.commandStr);var S=!0,$=R.x|0,V=R.y|0,ie,ce;return"width"in R?(ie=R.width|0,_.command(ie>=0,"invalid "+T,P.commandStr)):S=!1,"height"in R?(ce=R.height|0,_.command(ce>=0,"invalid "+T,P.commandStr)):S=!1,new kr(!S&&w&&w.thisDep,!S&&w&&w.contextDep,!S&&w&&w.propDep,function(it,$t){var Ze=it.shared.context,wt=ie;"width"in R||(wt=$t.def(Ze,".",T0,"-",$));var Pt=ce;return"height"in R||(Pt=$t.def(Ze,".",L0,"-",V)),[$,V,wt,Pt]})}else if(T in j){var ae=j[T],Me=Dr(ae,function(it,$t){var Ze=it.invoke($t,ae);_.optional(function(){it.assert($t,Ze+"&&typeof "+Ze+'==="object"',"invalid "+T)});var wt=it.shared.context,Pt=$t.def(Ze,".x|0"),uo=$t.def(Ze,".y|0"),en=$t.def('"width" in ',Ze,"?",Ze,".width|0:","(",wt,".",T0,"-",Pt,")"),Er=$t.def('"height" in ',Ze,"?",Ze,".height|0:","(",wt,".",L0,"-",uo,")");return _.optional(function(){it.assert($t,en+">=0&&"+Er+">=0","invalid "+T)}),[Pt,uo,en,Er]});return w&&(Me.thisDep=Me.thisDep||w.thisDep,Me.contextDep=Me.contextDep||w.contextDep,Me.propDep=Me.propDep||w.propDep),Me}else return w?new kr(w.thisDep,w.contextDep,w.propDep,function(it,$t){var Ze=it.shared.context;return[0,0,$t.def(Ze,".",T0),$t.def(Ze,".",L0)]}):null}var I=F(si);if(I){var D=I;I=new kr(I.thisDep,I.contextDep,I.propDep,function(T,R){var S=D.append(T,R),$=T.shared.context;return R.set($,"."+i4,S[2]),R.set($,"."+s4,S[3]),S})}return{viewport:I,scissor_box:F(wf)}}function Rt(A,w){var P=A.static,H=typeof P[jc]=="string"&&typeof P[Bc]=="string";if(H){if(Object.keys(w.dynamic).length>0)return null;var j=w.static,F=Object.keys(j);if(F.length>0&&typeof j[F[0]]=="number"){for(var I=[],D=0;D<F.length;++D)_(typeof j[F[D]]=="number","must specify all vertex attribute locations when using vaos"),I.push([j[F[D]]|0,F[D]]);return I}}return null}function Ut(A,w,P){var H=A.static,j=A.dynamic;function F(S){if(S in H){var $=M.id(H[S]);_.optional(function(){_e.shader(fm[S],$,_.guessCommand())});var V=dn(function(){return $});return V.id=$,V}else if(S in j){var ie=j[S];return Dr(ie,function(ce,ae){var Me=ce.invoke(ae,ie),it=ae.def(ce.shared.strings,".id(",Me,")");return _.optional(function(){ae(ce.shared.shader,".shader(",fm[S],",",it,",",ce.command,");")}),it})}return null}var I=F(jc),D=F(Bc),T=null,R;return Ci(I)&&Ci(D)?(T=_e.program(D.id,I.id,null,P),R=dn(function(S,$){return S.link(T)})):R=new kr(I&&I.thisDep||D&&D.thisDep,I&&I.contextDep||D&&D.contextDep,I&&I.propDep||D&&D.propDep,function(S,$){var V=S.shared.shader,ie;I?ie=I.append(S,$):ie=$.def(V,".",jc);var ce;D?ce=D.append(S,$):ce=$.def(V,".",Bc);var ae=V+".program("+ce+","+ie;return _.optional(function(){ae+=","+S.command}),$.def(ae+")")}),{frag:I,vert:D,progVar:R,program:T}}function ho(A,w){var P=A.static,H=A.dynamic;function j(){if(ws in P){var S=P[ws];Rf(S)?S=Q.getElements(Q.create(S,!0)):S&&(S=Q.getElements(S),_.command(S,"invalid elements",w.commandStr));var $=dn(function(ie,ce){if(S){var ae=ie.link(S);return ie.ELEMENTS=ae,ae}return ie.ELEMENTS=null,null});return $.value=S,$}else if(ws in H){var V=H[ws];return Dr(V,function(ie,ce){var ae=ie.shared,Me=ae.isBufferArgs,it=ae.elements,$t=ie.invoke(ce,V),Ze=ce.def("null"),wt=ce.def(Me,"(",$t,")"),Pt=ie.cond(wt).then(Ze,"=",it,".createStream(",$t,");").else(Ze,"=",it,".getElements(",$t,");");return _.optional(function(){ie.assert(Pt.else,"!"+$t+"||"+Ze,"invalid elements")}),ce.entry(Pt),ce.exit(ie.cond(wt).then(it,".destroyStream(",Ze,");")),ie.ELEMENTS=Ze,Ze})}return null}var F=j();function I(){if(_s in P){var S=P[_s];return _.commandParameter(S,m0,"invalid primitve",w.commandStr),dn(function(V,ie){return m0[S]})}else if(_s in H){var $=H[_s];return Dr($,function(V,ie){var ce=V.constants.primTypes,ae=V.invoke(ie,$);return _.optional(function(){V.assert(ie,ae+" in "+ce,"invalid primitive, must be one of "+Object.keys(m0))}),ie.def(ce,"[",ae,"]")})}else if(F)return Ci(F)?F.value?dn(function(V,ie){return ie.def(V.ELEMENTS,".primType")}):dn(function(){return nm}):new kr(F.thisDep,F.contextDep,F.propDep,function(V,ie){var ce=V.ELEMENTS;return ie.def(ce,"?",ce,".primType:",nm)});return null}function D(S,$){if(S in P){var V=P[S]|0;return _.command(!$||V>=0,"invalid "+S,w.commandStr),dn(function(ce,ae){return $&&(ce.OFFSET=V),V})}else if(S in H){var ie=H[S];return Dr(ie,function(ce,ae){var Me=ce.invoke(ae,ie);return $&&(ce.OFFSET=Me,_.optional(function(){ce.assert(ae,Me+">=0","invalid "+S)})),Me})}else if($&&F)return dn(function(ce,ae){return ce.OFFSET="0",0});return null}var T=D(_f,!0);function R(){if(Ms in P){var S=P[Ms]|0;return _.command(typeof S=="number"&&S>=0,"invalid vertex count",w.commandStr),dn(function(){return S})}else if(Ms in H){var $=H[Ms];return Dr($,function(ce,ae){var Me=ce.invoke(ae,$);return _.optional(function(){ce.assert(ae,"typeof "+Me+'==="number"&&'+Me+">=0&&"+Me+"===("+Me+"|0)","invalid vertex count")}),Me})}else if(F)if(Ci(F)){if(F)return T?new kr(T.thisDep,T.contextDep,T.propDep,function(ce,ae){var Me=ae.def(ce.ELEMENTS,".vertCount-",ce.OFFSET);return _.optional(function(){ce.assert(ae,Me+">=0","invalid vertex offset/element buffer too small")}),Me}):dn(function(ce,ae){return ae.def(ce.ELEMENTS,".vertCount")});var V=dn(function(){return-1});return _.optional(function(){V.MISSING=!0}),V}else{var ie=new kr(F.thisDep||T.thisDep,F.contextDep||T.contextDep,F.propDep||T.propDep,function(ce,ae){var Me=ce.ELEMENTS;return ce.OFFSET?ae.def(Me,"?",Me,".vertCount-",ce.OFFSET,":-1"):ae.def(Me,"?",Me,".vertCount:-1")});return _.optional(function(){ie.DYNAMIC=!0}),ie}return null}return{elements:F,primitive:I(),count:R(),instances:D(Mf,!1),offset:T}}function pn(A,w){var P=A.static,H=A.dynamic,j={};return ve.forEach(function(F){var I=Pe(F);function D(T,R){if(F in P){var S=T(P[F]);j[I]=dn(function(){return S})}else if(F in H){var $=H[F];j[I]=Dr($,function(V,ie){return R(V,ie,V.invoke(ie,$))})}}switch(F){case jv:case Gv:case Dv:case Kv:case qv:case Zv:case Vv:case Xv:case Yv:case Bv:return D(function(T){return _.commandType(T,"boolean",F,w.commandStr),T},function(T,R,S){return _.optional(function(){T.assert(R,"typeof "+S+'==="boolean"',"invalid flag "+F,T.commandStr)}),S});case Hv:return D(function(T){return _.commandParameter(T,C0,"invalid "+F,w.commandStr),C0[T]},function(T,R,S){var $=T.constants.compareFuncs;return _.optional(function(){T.assert(R,S+" in "+$,"invalid "+F+", must be one of "+Object.keys(C0))}),R.def($,"[",S,"]")});case Uv:return D(function(T){return _.command(sn(T)&&T.length===2&&typeof T[0]=="number"&&typeof T[1]=="number"&&T[0]<=T[1],"depth range is 2d array",w.commandStr),T},function(T,R,S){_.optional(function(){T.assert(R,T.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var $=R.def("+",S,"[0]"),V=R.def("+",S,"[1]");return[$,V]});case Wu:return D(function(T){_.commandType(T,"object","blend.func",w.commandStr);var R="srcRGB"in T?T.srcRGB:T.src,S="srcAlpha"in T?T.srcAlpha:T.src,$="dstRGB"in T?T.dstRGB:T.dst,V="dstAlpha"in T?T.dstAlpha:T.dst;return _.commandParameter(R,ja,I+".srcRGB",w.commandStr),_.commandParameter(S,ja,I+".srcAlpha",w.commandStr),_.commandParameter($,ja,I+".dstRGB",w.commandStr),_.commandParameter(V,ja,I+".dstAlpha",w.commandStr),_.command(lm.indexOf(R+", "+$)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+R+", "+$+")",w.commandStr),[ja[R],ja[$],ja[S],ja[V]]},function(T,R,S){var $=T.constants.blendFuncs;_.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function V(Ze,wt){var Pt=R.def('"',Ze,wt,'" in ',S,"?",S,".",Ze,wt,":",S,".",Ze);return _.optional(function(){T.assert(R,Pt+" in "+$,"invalid "+F+"."+Ze+wt+", must be one of "+Object.keys(ja))}),Pt}var ie=V("src","RGB"),ce=V("dst","RGB");_.optional(function(){var Ze=T.constants.invalidBlendCombinations;T.assert(R,Ze+".indexOf("+ie+'+", "+'+ce+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ae=R.def($,"[",ie,"]"),Me=R.def($,"[",V("src","Alpha"),"]"),it=R.def($,"[",ce,"]"),$t=R.def($,"[",V("dst","Alpha"),"]");return[ae,it,Me,$t]});case ju:return D(function(T){if(typeof T=="string")return _.commandParameter(T,ne,"invalid "+F,w.commandStr),[ne[T],ne[T]];if(typeof T=="object")return _.commandParameter(T.rgb,ne,F+".rgb",w.commandStr),_.commandParameter(T.alpha,ne,F+".alpha",w.commandStr),[ne[T.rgb],ne[T.alpha]];_.commandRaise("invalid blend.equation",w.commandStr)},function(T,R,S){var $=T.constants.blendEquations,V=R.def(),ie=R.def(),ce=T.cond("typeof ",S,'==="string"');return _.optional(function(){function ae(Me,it,$t){T.assert(Me,$t+" in "+$,"invalid "+it+", must be one of "+Object.keys(ne))}ae(ce.then,F,S),T.assert(ce.else,S+"&&typeof "+S+'==="object"',"invalid "+F),ae(ce.else,F+".rgb",S+".rgb"),ae(ce.else,F+".alpha",S+".alpha")}),ce.then(V,"=",ie,"=",$,"[",S,"];"),ce.else(V,"=",$,"[",S,".rgb];",ie,"=",$,"[",S,".alpha];"),R(ce),[V,ie]});case $v:return D(function(T){return _.command(sn(T)&&T.length===4,"blend.color must be a 4d array",w.commandStr),Bt(4,function(R){return+T[R]})},function(T,R,S){return _.optional(function(){T.assert(R,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),Bt(4,function($){return R.def("+",S,"[",$,"]")})});case Qv:return D(function(T){return _.commandType(T,"number",I,w.commandStr),T|0},function(T,R,S){return _.optional(function(){T.assert(R,"typeof "+S+'==="number"',"invalid stencil.mask")}),R.def(S,"|0")});case Zu:return D(function(T){_.commandType(T,"object",I,w.commandStr);var R=T.cmp||"keep",S=T.ref||0,$="mask"in T?T.mask:-1;return _.commandParameter(R,C0,F+".cmp",w.commandStr),_.commandType(S,"number",F+".ref",w.commandStr),_.commandType($,"number",F+".mask",w.commandStr),[C0[R],S,$]},function(T,R,S){var $=T.constants.compareFuncs;_.optional(function(){function ae(){T.assert(R,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ae(S+"&&typeof ",S,'==="object"'),ae('!("cmp" in ',S,")||(",S,".cmp in ",$,")")});var V=R.def('"cmp" in ',S,"?",$,"[",S,".cmp]",":",Li),ie=R.def(S,".ref|0"),ce=R.def('"mask" in ',S,"?",S,".mask|0:-1");return[V,ie,ce]});case Ju:case Hc:return D(function(T){_.commandType(T,"object",I,w.commandStr);var R=T.fail||"keep",S=T.zfail||"keep",$=T.zpass||"keep";return _.commandParameter(R,zi,F+".fail",w.commandStr),_.commandParameter(S,zi,F+".zfail",w.commandStr),_.commandParameter($,zi,F+".zpass",w.commandStr),[F===Hc?ks:Zc,zi[R],zi[S],zi[$]]},function(T,R,S){var $=T.constants.stencilOps;_.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid "+F)});function V(ie){return _.optional(function(){T.assert(R,'!("'+ie+'" in '+S+")||("+S+"."+ie+" in "+$+")","invalid "+F+"."+ie+", must be one of "+Object.keys(zi))}),R.def('"',ie,'" in ',S,"?",$,"[",S,".",ie,"]:",Li)}return[F===Hc?ks:Zc,V("fail"),V("zfail"),V("zpass")]});case Ku:return D(function(T){_.commandType(T,"object",I,w.commandStr);var R=T.factor|0,S=T.units|0;return _.commandType(R,"number",I+".factor",w.commandStr),_.commandType(S,"number",I+".units",w.commandStr),[R,S]},function(T,R,S){_.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid "+F)});var $=R.def(S,".factor|0"),V=R.def(S,".units|0");return[$,V]});case Wv:return D(function(T){var R=0;return T==="front"?R=Zc:T==="back"&&(R=ks),_.command(!!R,I,w.commandStr),R},function(T,R,S){return _.optional(function(){T.assert(R,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),R.def(S,'==="front"?',Zc,":",ks)});case Yu:return D(function(T){return _.command(typeof T=="number"&&T>=J.lineWidthDims[0]&&T<=J.lineWidthDims[1],"invalid line width, must be a positive number between "+J.lineWidthDims[0]+" and "+J.lineWidthDims[1],w.commandStr),T},function(T,R,S){return _.optional(function(){T.assert(R,"typeof "+S+'==="number"&&'+S+">="+J.lineWidthDims[0]+"&&"+S+"<="+J.lineWidthDims[1],"invalid line width")}),S});case Xu:return D(function(T){return _.commandParameter(T,i1,I,w.commandStr),i1[T]},function(T,R,S){return _.optional(function(){T.assert(R,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),R.def(S+'==="cw"?'+rm+":"+a1)});case Vu:return D(function(T){return _.command(sn(T)&&T.length===4,"color.mask must be length 4 array",w.commandStr),T.map(function(R){return!!R})},function(T,R,S){return _.optional(function(){T.assert(R,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),Bt(4,function($){return"!!"+S+"["+$+"]"})});case Qu:return D(function(T){_.command(typeof T=="object"&&T,I,w.commandStr);var R="value"in T?T.value:1,S=!!T.invert;return _.command(typeof R=="number"&&R>=0&&R<=1,"sample.coverage.value must be a number between 0 and 1",w.commandStr),[R,S]},function(T,R,S){_.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var $=R.def('"value" in ',S,"?+",S,".value:1"),V=R.def("!!",S,".invert");return[$,V]})}}),j}function Nn(A,w){var P=A.static,H=A.dynamic,j={};return Object.keys(P).forEach(function(F){var I=P[F],D;if(typeof I=="number"||typeof I=="boolean")D=dn(function(){return I});else if(typeof I=="function"){var T=I._reglType;T==="texture2d"||T==="textureCube"?D=dn(function(R){return R.link(I)}):T==="framebuffer"||T==="framebufferCube"?(_.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',w.commandStr),D=dn(function(R){return R.link(I.color[0])})):_.commandRaise('invalid data for uniform "'+F+'"',w.commandStr)}else sn(I)?D=dn(function(R){var S=R.global.def("[",Bt(I.length,function($){return _.command(typeof I[$]=="number"||typeof I[$]=="boolean","invalid uniform "+F,R.commandStr),I[$]}),"]");return S}):_.commandRaise('invalid or missing data for uniform "'+F+'"',w.commandStr);D.value=I,j[F]=D}),Object.keys(H).forEach(function(F){var I=H[F];j[F]=Dr(I,function(D,T){return D.invoke(T,I)})}),j}function eo(A,w){var P=A.static,H=A.dynamic,j={};return Object.keys(P).forEach(function(F){var I=P[F],D=M.id(F),T=new B;if(Rf(I))T.state=A0,T.buffer=se.getBuffer(se.create(I,z0,!1,!0)),T.type=0;else{var R=se.getBuffer(I);if(R)T.state=A0,T.buffer=R,T.type=0;else if(_.command(typeof I=="object"&&I,"invalid data for attribute "+F,w.commandStr),"constant"in I){var S=I.constant;T.buffer="null",T.state=$u,typeof S=="number"?T.x=S:(_.command(sn(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+F,w.commandStr),S0.forEach(function(it,$t){$t<S.length&&(T[it]=S[$t])}))}else{Rf(I.buffer)?R=se.getBuffer(se.create(I.buffer,z0,!1,!0)):R=se.getBuffer(I.buffer),_.command(!!R,'missing buffer for attribute "'+F+'"',w.commandStr);var $=I.offset|0;_.command($>=0,'invalid offset for attribute "'+F+'"',w.commandStr);var V=I.stride|0;_.command(V>=0&&V<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',w.commandStr);var ie=I.size|0;_.command(!("size"in I)||ie>0&&ie<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',w.commandStr);var ce=!!I.normalized,ae=0;"type"in I&&(_.commandParameter(I.type,vs,"invalid type for attribute "+F,w.commandStr),ae=vs[I.type]);var Me=I.divisor|0;"divisor"in I&&(_.command(Me===0||ke,'cannot specify divisor for attribute "'+F+'", instancing not supported',w.commandStr),_.command(Me>=0,'invalid divisor for attribute "'+F+'"',w.commandStr)),_.optional(function(){var it=w.commandStr,$t=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(Ze){_.command($t.indexOf(Ze)>=0,'unknown parameter "'+Ze+'" for attribute pointer "'+F+'" (valid parameters are '+$t+")",it)})}),T.buffer=R,T.state=A0,T.size=ie,T.normalized=ce,T.type=ae||R.dtype,T.offset=$,T.stride=V,T.divisor=Me}}j[F]=dn(function(it,$t){var Ze=it.attribCache;if(D in Ze)return Ze[D];var wt={isStream:!1};return Object.keys(T).forEach(function(Pt){wt[Pt]=T[Pt]}),T.buffer&&(wt.buffer=it.link(T.buffer),wt.type=wt.type||wt.buffer+".dtype"),Ze[D]=wt,wt})}),Object.keys(H).forEach(function(F){var I=H[F];function D(T,R){var S=T.invoke(R,I),$=T.shared,V=T.constants,ie=$.isBufferArgs,ce=$.buffer;_.optional(function(){T.assert(R,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+ie+"("+S+")||"+ce+".getBuffer("+S+")||"+ce+".getBuffer("+S+".buffer)||"+ie+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+$.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+F+'"')});var ae={isStream:R.def(!1)},Me=new B;Me.state=A0,Object.keys(Me).forEach(function(wt){ae[wt]=R.def(""+Me[wt])});var it=ae.buffer,$t=ae.type;R("if(",ie,"(",S,")){",ae.isStream,"=true;",it,"=",ce,".createStream(",z0,",",S,");",$t,"=",it,".dtype;","}else{",it,"=",ce,".getBuffer(",S,");","if(",it,"){",$t,"=",it,".dtype;",'}else if("constant" in ',S,"){",ae.state,"=",$u,";","if(typeof "+S+'.constant === "number"){',ae[S0[0]],"=",S,".constant;",S0.slice(1).map(function(wt){return ae[wt]}).join("="),"=0;","}else{",S0.map(function(wt,Pt){return ae[wt]+"="+S+".constant.length>"+Pt+"?"+S+".constant["+Pt+"]:0;"}).join(""),"}}else{","if(",ie,"(",S,".buffer)){",it,"=",ce,".createStream(",z0,",",S,".buffer);","}else{",it,"=",ce,".getBuffer(",S,".buffer);","}",$t,'="type" in ',S,"?",V.glTypes,"[",S,".type]:",it,".dtype;",ae.normalized,"=!!",S,".normalized;");function Ze(wt){R(ae[wt],"=",S,".",wt,"|0;")}return Ze("size"),Ze("offset"),Ze("stride"),Ze("divisor"),R("}}"),R.exit("if(",ae.isStream,"){",ce,".destroyStream(",it,");","}"),ae}j[F]=Dr(I,D)}),j}function _n(A,w){var P=A.static,H=A.dynamic;if(Wc in P){var j=P[Wc];return j!==null&&Ee.getVAO(j)===null&&(j=Ee.createVAO(j)),dn(function(I){return I.link(Ee.getVAO(j))})}else if(Wc in H){var F=H[Wc];return Dr(F,function(I,D){var T=I.invoke(D,F);return D.def(I.shared.vao+".getVAO("+T+")")})}return null}function Fo(A){var w=A.static,P=A.dynamic,H={};return Object.keys(w).forEach(function(j){var F=w[j];H[j]=dn(function(I,D){return typeof F=="number"||typeof F=="boolean"?""+F:I.link(F)})}),Object.keys(P).forEach(function(j){var F=P[j];H[j]=Dr(F,function(I,D){return I.invoke(D,F)})}),H}function vn(A,w,P,H,j){var F=A.static,I=A.dynamic;_.optional(function(){var Ze=[bs,Bc,jc,ws,_s,_f,Ms,Mf,Uc,Wc].concat(ve);function wt(Pt){Object.keys(Pt).forEach(function(uo){_.command(Ze.indexOf(uo)>=0,'unknown parameter "'+uo+'"',j.commandStr)})}wt(F),wt(I)});var D=Rt(A,w),T=Qe(A,j),R=Vt(A,T,j),S=ho(A,j),$=pn(A,j),V=Ut(A,j,D);function ie(Ze){var wt=R[Ze];wt&&($[Ze]=wt)}ie(si),ie(Pe(wf));var ce=Object.keys($).length>0,ae={framebuffer:T,draw:S,shader:V,state:$,dirty:ce,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ae.profile=Dt(A,j),ae.uniforms=Nn(P,j),ae.drawVAO=ae.scopeVAO=_n(A,j),!ae.drawVAO&&V.program&&!D&&C.angle_instanced_arrays){var Me=!0,it=V.program.attributes.map(function(Ze){var wt=w.static[Ze];return Me=Me&&!!wt,wt});if(Me&&it.length>0){var $t=Ee.getVAO(Ee.createVAO(it));ae.drawVAO=new kr(null,null,null,function(Ze,wt){return Ze.link($t)}),ae.useVAO=!0}}return D?ae.useVAO=!0:ae.attributes=eo(w,j),ae.context=Fo(H,j),ae}function Mn(A,w,P){var H=A.shared,j=H.context,F=A.scope();Object.keys(P).forEach(function(I){w.save(j,"."+I);var D=P[I],T=D.append(A,w);Array.isArray(T)?F(j,".",I,"=[",T.join(),"];"):F(j,".",I,"=",T,";")}),w(F)}function kn(A,w,P,H){var j=A.shared,F=j.gl,I=j.framebuffer,D;Ue&&(D=w.def(j.extensions,".webgl_draw_buffers"));var T=A.constants,R=T.drawBuffer,S=T.backBuffer,$;P?$=P.append(A,w):$=w.def(I,".next"),H||w("if(",$,"!==",I,".cur){"),w("if(",$,"){",F,".bindFramebuffer(",cm,",",$,".framebuffer);"),Ue&&w(D,".drawBuffersWEBGL(",R,"[",$,".colorAttachments.length]);"),w("}else{",F,".bindFramebuffer(",cm,",null);"),Ue&&w(D,".drawBuffersWEBGL(",S,");"),w("}",I,".cur=",$,";"),H||w("}")}function Bn(A,w,P){var H=A.shared,j=H.gl,F=A.current,I=A.next,D=H.current,T=H.next,R=A.cond(D,".dirty");ve.forEach(function(S){var $=Pe(S);if(!($ in P.state)){var V,ie;if($ in I){V=I[$],ie=F[$];var ce=Bt(ue[$].length,function(Me){return R.def(V,"[",Me,"]")});R(A.cond(ce.map(function(Me,it){return Me+"!=="+ie+"["+it+"]"}).join("||")).then(j,".",pe[$],"(",ce,");",ce.map(function(Me,it){return ie+"["+it+"]="+Me}).join(";"),";"))}else{V=R.def(T,".",$);var ae=A.cond(V,"!==",D,".",$);R(ae),$ in Re?ae(A.cond(V).then(j,".enable(",Re[$],");").else(j,".disable(",Re[$],");"),D,".",$,"=",V,";"):ae(j,".",pe[$],"(",V,");",D,".",$,"=",V,";")}}}),Object.keys(P.state).length===0&&R(D,".dirty=false;"),w(R)}function Jn(A,w,P,H){var j=A.shared,F=A.current,I=j.current,D=j.gl;hm(Object.keys(P)).forEach(function(T){var R=P[T];if(!(H&&!H(R))){var S=R.append(A,w);if(Re[T]){var $=Re[T];Ci(R)?S?w(D,".enable(",$,");"):w(D,".disable(",$,");"):w(A.cond(S).then(D,".enable(",$,");").else(D,".disable(",$,");")),w(I,".",T,"=",S,";")}else if(sn(S)){var V=F[T];w(D,".",pe[T],"(",S,");",S.map(function(ie,ce){return V+"["+ce+"]="+ie}).join(";"),";")}else w(D,".",pe[T],"(",S,");",I,".",T,"=",S,";")}})}function cn(A,w){ke&&(A.instancing=w.def(A.shared.extensions,".angle_instanced_arrays"))}function Gt(A,w,P,H,j){var F=A.shared,I=A.stats,D=F.current,T=F.timer,R=P.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var $,V;function ie(Ze){$=w.def(),Ze($,"=",S(),";"),typeof j=="string"?Ze(I,".count+=",j,";"):Ze(I,".count++;"),xe&&(H?(V=w.def(),Ze(V,"=",T,".getNumPendingQueries();")):Ze(T,".beginQuery(",I,");"))}function ce(Ze){Ze(I,".cpuTime+=",S(),"-",$,";"),xe&&(H?Ze(T,".pushScopeStats(",V,",",T,".getNumPendingQueries(),",I,");"):Ze(T,".endQuery();"))}function ae(Ze){var wt=w.def(D,".profile");w(D,".profile=",Ze,";"),w.exit(D,".profile=",wt,";")}var Me;if(R){if(Ci(R)){R.enable?(ie(w),ce(w.exit),ae("true")):ae("false");return}Me=R.append(A,w),ae(Me)}else Me=w.def(D,".profile");var it=A.block();ie(it),w("if(",Me,"){",it,"}");var $t=A.block();ce($t),w.exit("if(",Me,"){",$t,"}")}function er(A,w,P,H,j){var F=A.shared;function I(T){switch(T){case kf:case Af:case zf:return 2;case Ef:case Tf:case Cf:return 3;case Sf:case Lf:case Nf:return 4;default:return 1}}function D(T,R,S){var $=F.gl,V=w.def(T,".location"),ie=w.def(F.attributes,"[",V,"]"),ce=S.state,ae=S.buffer,Me=[S.x,S.y,S.z,S.w],it=["buffer","normalized","offset","stride"];function $t(){w("if(!",ie,".buffer){",$,".enableVertexAttribArray(",V,");}");var wt=S.type,Pt;if(S.size?Pt=w.def(S.size,"||",R):Pt=R,w("if(",ie,".type!==",wt,"||",ie,".size!==",Pt,"||",it.map(function(en){return ie+"."+en+"!=="+S[en]}).join("||"),"){",$,".bindBuffer(",z0,",",ae,".buffer);",$,".vertexAttribPointer(",[V,Pt,wt,S.normalized,S.stride,S.offset],");",ie,".type=",wt,";",ie,".size=",Pt,";",it.map(function(en){return ie+"."+en+"="+S[en]+";"}).join(""),"}"),ke){var uo=S.divisor;w("if(",ie,".divisor!==",uo,"){",A.instancing,".vertexAttribDivisorANGLE(",[V,uo],");",ie,".divisor=",uo,";}")}}function Ze(){w("if(",ie,".buffer){",$,".disableVertexAttribArray(",V,");",ie,".buffer=null;","}if(",S0.map(function(wt,Pt){return ie+"."+wt+"!=="+Me[Pt]}).join("||"),"){",$,".vertexAttrib4f(",V,",",Me,");",S0.map(function(wt,Pt){return ie+"."+wt+"="+Me[Pt]+";"}).join(""),"}")}ce===A0?$t():ce===$u?Ze():(w("if(",ce,"===",A0,"){"),$t(),w("}else{"),Ze(),w("}"))}H.forEach(function(T){var R=T.name,S=P.attributes[R],$;if(S){if(!j(S))return;$=S.append(A,w)}else{if(!j(um))return;var V=A.scopeAttrib(R);_.optional(function(){A.assert(w,V+".state","missing attribute "+R)}),$={},Object.keys(new B).forEach(function(ie){$[ie]=w.def(V,".",ie)})}D(A.link(T),I(T.info.type),$)})}function yo(A,w,P,H,j){for(var F=A.shared,I=F.gl,D,T=0;T<H.length;++T){var R=H[T],S=R.name,$=R.info.type,V=P.uniforms[S],ie=A.link(R),ce=ie+".location",ae;if(V){if(!j(V))continue;if(Ci(V)){var Me=V.value;if(_.command(Me!==null&&typeof Me!="undefined",'missing uniform "'+S+'"',A.commandStr),$===Kc||$===Qc){_.command(typeof Me=="function"&&($===Kc&&(Me._reglType==="texture2d"||Me._reglType==="framebuffer")||$===Qc&&(Me._reglType==="textureCube"||Me._reglType==="framebufferCube")),"invalid texture for uniform "+S,A.commandStr);var it=A.link(Me._texture||Me.color[0]._texture);w(I,".uniform1i(",ce,",",it+".bind());"),w.exit(it,".unbind();")}else if($===Vc||$===Xc||$===Yc){_.optional(function(){_.command(sn(Me),"invalid matrix for uniform "+S,A.commandStr),_.command($===Vc&&Me.length===4||$===Xc&&Me.length===9||$===Yc&&Me.length===16,"invalid length for matrix uniform "+S,A.commandStr)});var $t=A.global.def("new Float32Array(["+Array.prototype.slice.call(Me)+"])"),Ze=2;$===Xc?Ze=3:$===Yc&&(Ze=4),w(I,".uniformMatrix",Ze,"fv(",ce,",false,",$t,");")}else{switch($){case o1:_.commandType(Me,"number","uniform "+S,A.commandStr),D="1f";break;case kf:_.command(sn(Me)&&Me.length===2,"uniform "+S,A.commandStr),D="2f";break;case Ef:_.command(sn(Me)&&Me.length===3,"uniform "+S,A.commandStr),D="3f";break;case Sf:_.command(sn(Me)&&Me.length===4,"uniform "+S,A.commandStr),D="4f";break;case r1:_.commandType(Me,"boolean","uniform "+S,A.commandStr),D="1i";break;case n1:_.commandType(Me,"number","uniform "+S,A.commandStr),D="1i";break;case zf:_.command(sn(Me)&&Me.length===2,"uniform "+S,A.commandStr),D="2i";break;case Af:_.command(sn(Me)&&Me.length===2,"uniform "+S,A.commandStr),D="2i";break;case Cf:_.command(sn(Me)&&Me.length===3,"uniform "+S,A.commandStr),D="3i";break;case Tf:_.command(sn(Me)&&Me.length===3,"uniform "+S,A.commandStr),D="3i";break;case Nf:_.command(sn(Me)&&Me.length===4,"uniform "+S,A.commandStr),D="4i";break;case Lf:_.command(sn(Me)&&Me.length===4,"uniform "+S,A.commandStr),D="4i";break}w(I,".uniform",D,"(",ce,",",sn(Me)?Array.prototype.slice.call(Me):Me,");")}continue}else ae=V.append(A,w)}else{if(!j(um))continue;ae=w.def(F.uniforms,"[",M.id(S),"]")}$===Kc?(_(!Array.isArray(ae),"must specify a scalar prop for textures"),w("if(",ae,"&&",ae,'._reglType==="framebuffer"){',ae,"=",ae,".color[0];","}")):$===Qc&&(_(!Array.isArray(ae),"must specify a scalar prop for cube maps"),w("if(",ae,"&&",ae,'._reglType==="framebufferCube"){',ae,"=",ae,".color[0];","}")),_.optional(function(){function Er(Aa,ym){A.assert(w,Aa,'bad data or missing for uniform "'+S+'".  '+ym)}function s1(Aa){_(!Array.isArray(ae),"must not specify an array type for uniform"),Er("typeof "+ae+'==="'+Aa+'"',"invalid type, expected "+Aa)}function fa(Aa,ym){Array.isArray(ae)?_(ae.length===Aa,"must have length "+Aa):Er(F.isArrayLike+"("+ae+")&&"+ae+".length==="+Aa,"invalid vector, should have length "+Aa,A.commandStr)}function xm(Aa){_(!Array.isArray(ae),"must not specify a value type"),Er("typeof "+ae+'==="function"&&'+ae+'._reglType==="texture'+(Aa===om?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch($){case n1:s1("number");break;case Af:fa(2,"number");break;case Tf:fa(3,"number");break;case Lf:fa(4,"number");break;case o1:s1("number");break;case kf:fa(2,"number");break;case Ef:fa(3,"number");break;case Sf:fa(4,"number");break;case r1:s1("boolean");break;case zf:fa(2,"boolean");break;case Cf:fa(3,"boolean");break;case Nf:fa(4,"boolean");break;case Vc:fa(4,"number");break;case Xc:fa(9,"number");break;case Yc:fa(16,"number");break;case Kc:xm(om);break;case Qc:xm(u4);break}});var wt=1;switch($){case Kc:case Qc:var Pt=w.def(ae,"._texture");w(I,".uniform1i(",ce,",",Pt,".bind());"),w.exit(Pt,".unbind();");continue;case n1:case r1:D="1i";break;case Af:case zf:D="2i",wt=2;break;case Tf:case Cf:D="3i",wt=3;break;case Lf:case Nf:D="4i",wt=4;break;case o1:D="1f";break;case kf:D="2f",wt=2;break;case Ef:D="3f",wt=3;break;case Sf:D="4f",wt=4;break;case Vc:D="Matrix2fv";break;case Xc:D="Matrix3fv";break;case Yc:D="Matrix4fv";break}if(w(I,".uniform",D,"(",ce,","),D.charAt(0)==="M"){var uo=Math.pow($-Vc+2,2),en=A.global.def("new Float32Array(",uo,")");Array.isArray(ae)?w("false,(",Bt(uo,function(Er){return en+"["+Er+"]="+ae[Er]}),",",en,")"):w("false,(Array.isArray(",ae,")||",ae," instanceof Float32Array)?",ae,":(",Bt(uo,function(Er){return en+"["+Er+"]="+ae+"["+Er+"]"}),",",en,")")}else wt>1?w(Bt(wt,function(Er){return Array.isArray(ae)?ae[Er]:ae+"["+Er+"]"})):(_(!Array.isArray(ae),"uniform value must not be an array"),w(ae));w(");")}}function yt(A,w,P,H){var j=A.shared,F=j.gl,I=j.draw,D=H.draw;function T(){var Pt=D.elements,uo,en=w;return Pt?((Pt.contextDep&&H.contextDynamic||Pt.propDep)&&(en=P),uo=Pt.append(A,en)):uo=en.def(I,".",ws),uo&&en("if("+uo+")"+F+".bindBuffer("+l4+","+uo+".buffer.buffer);"),uo}function R(){var Pt=D.count,uo,en=w;return Pt?((Pt.contextDep&&H.contextDynamic||Pt.propDep)&&(en=P),uo=Pt.append(A,en),_.optional(function(){Pt.MISSING&&A.assert(w,"false","missing vertex count"),Pt.DYNAMIC&&A.assert(en,uo+">=0","missing vertex count")})):(uo=en.def(I,".",Ms),_.optional(function(){A.assert(en,uo+">=0","missing vertex count")})),uo}var S=T();function $(Pt){var uo=D[Pt];return uo?uo.contextDep&&H.contextDynamic||uo.propDep?uo.append(A,P):uo.append(A,w):w.def(I,".",Pt)}var V=$(_s),ie=$(_f),ce=R();if(typeof ce=="number"){if(ce===0)return}else P("if(",ce,"){"),P.exit("}");var ae,Me;ke&&(ae=$(Mf),Me=A.instancing);var it=S+".type",$t=D.elements&&Ci(D.elements);function Ze(){function Pt(){P(Me,".drawElementsInstancedANGLE(",[V,ce,it,ie+"<<(("+it+"-"+Ov+")>>1)",ae],");")}function uo(){P(Me,".drawArraysInstancedANGLE(",[V,ie,ce,ae],");")}S?$t?Pt():(P("if(",S,"){"),Pt(),P("}else{"),uo(),P("}")):uo()}function wt(){function Pt(){P(F+".drawElements("+[V,ce,it,ie+"<<(("+it+"-"+Ov+")>>1)"]+");")}function uo(){P(F+".drawArrays("+[V,ie,ce]+");")}S?$t?Pt():(P("if(",S,"){"),Pt(),P("}else{"),uo(),P("}")):uo()}ke&&(typeof ae!="number"||ae>=0)?typeof ae=="string"?(P("if(",ae,">0){"),Ze(),P("}else if(",ae,"<0){"),wt(),P("}")):Ze():wt()}function Qt(A,w,P,H,j){var F=At(),I=F.proc("body",j);return _.optional(function(){F.commandStr=w.commandStr,F.command=F.link(w.commandStr)}),ke&&(F.instancing=I.def(F.shared.extensions,".angle_instanced_arrays")),A(F,I,P,H),F.compile().body}function io(A,w,P,H){cn(A,w),P.useVAO?P.drawVAO?w(A.shared.vao,".setVAO(",P.drawVAO.append(A,w),");"):w(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(w(A.shared.vao,".setVAO(null);"),er(A,w,P,H.attributes,function(){return!0})),yo(A,w,P,H.uniforms,function(){return!0}),yt(A,w,w,P)}function ln(A,w){var P=A.proc("draw",1);cn(A,P),Mn(A,P,w.context),kn(A,P,w.framebuffer),Bn(A,P,w),Jn(A,P,w.state),Gt(A,P,w,!1,!0);var H=w.shader.progVar.append(A,P);if(P(A.shared.gl,".useProgram(",H,".program);"),w.shader.program)io(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var j=A.global.def("{}"),F=P.def(H,".id"),I=P.def(j,"[",F,"]");P(A.cond(I).then(I,".call(this,a0);").else(I,"=",j,"[",F,"]=",A.link(function(D){return Qt(io,A,w,D,1)}),"(",H,");",I,".call(this,a0);"))}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function Wa(A,w,P,H){A.batchId="a1",cn(A,w);function j(){return!0}er(A,w,P,H.attributes,j),yo(A,w,P,H.uniforms,j),yt(A,w,w,P)}function Es(A,w,P,H){cn(A,w);var j=P.contextDep,F=w.def(),I="a0",D="a1",T=w.def();A.shared.props=T,A.batchId=F;var R=A.scope(),S=A.scope();w(R.entry,"for(",F,"=0;",F,"<",D,";++",F,"){",T,"=",I,"[",F,"];",S,"}",R.exit);function $(it){return it.contextDep&&j||it.propDep}function V(it){return!$(it)}if(P.needsContext&&Mn(A,S,P.context),P.needsFramebuffer&&kn(A,S,P.framebuffer),Jn(A,S,P.state,$),P.profile&&$(P.profile)&&Gt(A,S,P,!1,!0),H)P.useVAO?P.drawVAO?$(P.drawVAO)?S(A.shared.vao,".setVAO(",P.drawVAO.append(A,S),");"):R(A.shared.vao,".setVAO(",P.drawVAO.append(A,R),");"):R(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(R(A.shared.vao,".setVAO(null);"),er(A,R,P,H.attributes,V),er(A,S,P,H.attributes,$)),yo(A,R,P,H.uniforms,V),yo(A,S,P,H.uniforms,$),yt(A,R,S,P);else{var ie=A.global.def("{}"),ce=P.shader.progVar.append(A,S),ae=S.def(ce,".id"),Me=S.def(ie,"[",ae,"]");S(A.shared.gl,".useProgram(",ce,".program);","if(!",Me,"){",Me,"=",ie,"[",ae,"]=",A.link(function(it){return Qt(Wa,A,P,it,2)}),"(",ce,");}",Me,".call(this,a0[",F,"],",F,");")}}function z(A,w){var P=A.proc("batch",2);A.batchId="0",cn(A,P);var H=!1,j=!0;Object.keys(w.context).forEach(function(ie){H=H||w.context[ie].propDep}),H||(Mn(A,P,w.context),j=!1);var F=w.framebuffer,I=!1;F?(F.propDep?H=I=!0:F.contextDep&&H&&(I=!0),I||kn(A,P,F)):kn(A,P,null),w.state.viewport&&w.state.viewport.propDep&&(H=!0);function D(ie){return ie.contextDep&&H||ie.propDep}Bn(A,P,w),Jn(A,P,w.state,function(ie){return!D(ie)}),(!w.profile||!D(w.profile))&&Gt(A,P,w,!1,"a1"),w.contextDep=H,w.needsContext=j,w.needsFramebuffer=I;var T=w.shader.progVar;if(T.contextDep&&H||T.propDep)Es(A,P,w,null);else{var R=T.append(A,P);if(P(A.shared.gl,".useProgram(",R,".program);"),w.shader.program)Es(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var S=A.global.def("{}"),$=P.def(R,".id"),V=P.def(S,"[",$,"]");P(A.cond(V).then(V,".call(this,a0,a1);").else(V,"=",S,"[",$,"]=",A.link(function(ie){return Qt(Es,A,w,ie,2)}),"(",R,");",V,".call(this,a0,a1);"))}}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function ee(A,w){var P=A.proc("scope",3);A.batchId="a2";var H=A.shared,j=H.current;Mn(A,P,w.context),w.framebuffer&&w.framebuffer.append(A,P),hm(Object.keys(w.state)).forEach(function(I){var D=w.state[I],T=D.append(A,P);sn(T)?T.forEach(function(R,S){P.set(A.next[I],"["+S+"]",R)}):P.set(H.next,"."+I,T)}),Gt(A,P,w,!0,!0),[ws,_f,Ms,Mf,_s].forEach(function(I){var D=w.draw[I];D&&P.set(H.draw,"."+I,""+D.append(A,P))}),Object.keys(w.uniforms).forEach(function(I){var D=w.uniforms[I].append(A,P);Array.isArray(D)&&(D="["+D.join()+"]"),P.set(H.uniforms,"["+M.id(I)+"]",D)}),Object.keys(w.attributes).forEach(function(I){var D=w.attributes[I].append(A,P),T=A.scopeAttrib(I);Object.keys(new B).forEach(function(R){P.set(T,"."+R,D[R])})}),w.scopeVAO&&P.set(H.vao,".targetVAO",w.scopeVAO.append(A,P));function F(I){var D=w.shader[I];D&&P.set(H.shader,"."+I,D.append(A,P))}F(Bc),F(jc),Object.keys(w.state).length>0&&(P(j,".dirty=true;"),P.exit(j,".dirty=true;")),P("a1(",A.shared.context,",a0,",A.batchId,");")}function X(A){if(!(typeof A!="object"||sn(A))){for(var w=Object.keys(A),P=0;P<w.length;++P)if(Ne.isDynamic(A[w[P]]))return!0;return!1}}function Ye(A,w,P){var H=w.static[P];if(!H||!X(H))return;var j=A.global,F=Object.keys(H),I=!1,D=!1,T=!1,R=A.global.def("{}");F.forEach(function($){var V=H[$];if(Ne.isDynamic(V)){typeof V=="function"&&(V=H[$]=Ne.unbox(V));var ie=Dr(V,null);I=I||ie.thisDep,T=T||ie.propDep,D=D||ie.contextDep}else{switch(j(R,".",$,"="),typeof V){case"number":j(V);break;case"string":j('"',V,'"');break;case"object":Array.isArray(V)&&j("[",V.join(),"]");break;default:j(A.link(V));break}j(";")}});function S($,V){F.forEach(function(ie){var ce=H[ie];if(Ne.isDynamic(ce)){var ae=$.invoke(V,ce);V(R,".",ie,"=",ae,";")}})}w.dynamic[P]=new Ne.DynamicVariable(bf,{thisDep:I,contextDep:D,propDep:T,ref:R,append:S}),delete w.static[P]}function Xt(A,w,P,H,j){var F=At();F.stats=F.link(j),Object.keys(w.static).forEach(function(D){Ye(F,w,D)}),c4.forEach(function(D){Ye(F,A,D)});var I=vn(A,w,P,H,F);return ln(F,I),ee(F,I),z(F,I),t(F.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:je,current:ue,procs:function(){var A=At(),w=A.proc("poll"),P=A.proc("refresh"),H=A.block();w(H),P(H);var j=A.shared,F=j.gl,I=j.next,D=j.current;H(D,".dirty=false;"),kn(A,w),kn(A,P,null,!0);var T;ke&&(T=A.link(ke)),C.oes_vertex_array_object&&P(A.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var R=0;R<J.maxAttributes;++R){var S=P.def(j.attributes,"[",R,"]"),$=A.cond(S,".buffer");$.then(F,".enableVertexAttribArray(",R,");",F,".bindBuffer(",z0,",",S,".buffer.buffer);",F,".vertexAttribPointer(",R,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(F,".disableVertexAttribArray(",R,");",F,".vertexAttrib4f(",R,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),P($),ke&&P(T,".vertexAttribDivisorANGLE(",R,",",S,".divisor);")}return P(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Re).forEach(function(V){var ie=Re[V],ce=H.def(I,".",V),ae=A.block();ae("if(",ce,"){",F,".enable(",ie,")}else{",F,".disable(",ie,")}",D,".",V,"=",ce,";"),P(ae),w("if(",ce,"!==",D,".",V,"){",ae,"}")}),Object.keys(pe).forEach(function(V){var ie=pe[V],ce=ue[V],ae,Me,it=A.block();if(it(F,".",ie,"("),sn(ce)){var $t=ce.length;ae=A.global.def(I,".",V),Me=A.global.def(D,".",V),it(Bt($t,function(Ze){return ae+"["+Ze+"]"}),");",Bt($t,function(Ze){return Me+"["+Ze+"]="+ae+"["+Ze+"];"}).join("")),w("if(",Bt($t,function(Ze){return ae+"["+Ze+"]!=="+Me+"["+Ze+"]"}).join("||"),"){",it,"}")}else ae=H.def(I,".",V),Me=H.def(D,".",V),it(ae,");",D,".",V,"=",ae,";"),w("if(",ae,"!==",Me,"){",it,"}");P(it)}),A.compile()}(),compile:Xt}}function T4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var L4=34918,z4=34919,dm=35007,C4=function(x,M){if(!M.ext_disjoint_timer_query)return null;var C=[];function J(){return C.pop()||M.ext_disjoint_timer_query.createQueryEXT()}function se(ke){C.push(ke)}var Q=[];function oe(ke){var Ue=J();M.ext_disjoint_timer_query.beginQueryEXT(dm,Ue),Q.push(Ue),xe(Q.length-1,Q.length,ke)}function ge(){M.ext_disjoint_timer_query.endQueryEXT(dm)}function we(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Ee=[];function _e(){return Ee.pop()||new we}function Le(ke){Ee.push(ke)}var Fe=[];function xe(ke,Ue,ue){var je=_e();je.startQueryIndex=ke,je.endQueryIndex=Ue,je.sum=0,je.stats=ue,Fe.push(je)}var Ce=[],B=[];function ne(){var ke,Ue,ue=Q.length;if(ue!==0){B.length=Math.max(B.length,ue+1),Ce.length=Math.max(Ce.length,ue+1),Ce[0]=0,B[0]=0;var je=0;for(ke=0,Ue=0;Ue<Q.length;++Ue){var ve=Q[Ue];M.ext_disjoint_timer_query.getQueryObjectEXT(ve,z4)?(je+=M.ext_disjoint_timer_query.getQueryObjectEXT(ve,L4),se(ve)):Q[ke++]=ve,Ce[Ue+1]=je,B[Ue+1]=ke}for(Q.length=ke,ke=0,Ue=0;Ue<Fe.length;++Ue){var Re=Fe[Ue],pe=Re.startQueryIndex,Pe=Re.endQueryIndex;Re.sum+=Ce[Pe]-Ce[pe];var ut=B[pe],Ct=B[Pe];Ct===ut?(Re.stats.gpuTime+=Re.sum/1e6,Le(Re)):(Re.startQueryIndex=ut,Re.endQueryIndex=Ct,Fe[ke++]=Re)}Fe.length=ke}}return{beginQuery:oe,endQuery:ge,pushScopeStats:xe,update:ne,getNumPendingQueries:function(){return Q.length},clear:function(){C.push.apply(C,Q);for(var ke=0;ke<C.length;ke++)M.ext_disjoint_timer_query.deleteQueryEXT(C[ke]);Q.length=0,C.length=0},restore:function(){Q.length=0,C.length=0}}},N4=16384,R4=256,P4=1024,O4=34962,pm="webglcontextlost",vm="webglcontextrestored",mm=1,I4=2,F4=3;function gm(x,M){for(var C=0;C<x.length;++C)if(x[C]===M)return C;return-1}function D4(x){var M=_t(x);if(!M)return null;var C=M.gl,J=C.getContextAttributes(),se=C.isContextLost(),Q=kt(C,M);if(!Q)return null;var oe=at(),ge=T4(),we=Q.extensions,Ee=C4(C,we),_e=ze(),Le=C.drawingBufferWidth,Fe=C.drawingBufferHeight,xe={tick:0,time:0,viewportWidth:Le,viewportHeight:Fe,framebufferWidth:Le,framebufferHeight:Fe,drawingBufferWidth:Le,drawingBufferHeight:Fe,pixelRatio:M.pixelRatio},Ce={},B={elements:null,primitive:4,count:-1,offset:0,instances:-1},ne=M5(C,we),ke=G5(C,ge,M,ue),Ue=Qw(C,we,ne,ge,ke);function ue(yt){return Ue.destroyBuffer(yt)}var je=Q5(C,we,ke,ge),ve=t4(C,oe,ge,M),Re=Tw(C,we,ne,function(){ut.procs.poll()},xe,ge,M),pe=Lw(C,we,ne,ge,M),Pe=Yw(C,we,ne,Re,pe,ge),ut=A4(C,oe,we,ne,ke,je,Re,Pe,Ce,Ue,ve,B,xe,Ee,M),Ct=r4(C,Pe,ut.procs.poll,xe,J,we,ne),De=ut.next,Se=C.canvas,fe=[],At=[],Dt=[],Qe=[M.onDestroy],Vt=null;function Rt(){if(fe.length===0){Ee&&Ee.update(),Vt=null;return}Vt=Ie.next(Rt),Jn();for(var yt=fe.length-1;yt>=0;--yt){var Qt=fe[yt];Qt&&Qt(xe,null,0)}C.flush(),Ee&&Ee.update()}function Ut(){!Vt&&fe.length>0&&(Vt=Ie.next(Rt))}function ho(){Vt&&(Ie.cancel(Rt),Vt=null)}function pn(yt){yt.preventDefault(),se=!0,ho(),At.forEach(function(Qt){Qt()})}function Nn(yt){C.getError(),se=!1,Q.restore(),ve.restore(),ke.restore(),Re.restore(),pe.restore(),Pe.restore(),Ue.restore(),Ee&&Ee.restore(),ut.procs.refresh(),Ut(),Dt.forEach(function(Qt){Qt()})}Se&&(Se.addEventListener(pm,pn,!1),Se.addEventListener(vm,Nn,!1));function eo(){fe.length=0,ho(),Se&&(Se.removeEventListener(pm,pn),Se.removeEventListener(vm,Nn)),ve.clear(),Pe.clear(),pe.clear(),Re.clear(),je.clear(),ke.clear(),Ue.clear(),Ee&&Ee.clear(),Qe.forEach(function(yt){yt()})}function _n(yt){_(!!yt,"invalid args to regl({...})"),_.type(yt,"object","invalid args to regl({...})");function Qt(j){var F=t({},j);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function I(D){if(D in F){var T=F[D];delete F[D],Object.keys(T).forEach(function(R){F[D+"."+R]=T[R]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in j&&(F.vao=j.vao),F}function io(j,F){var I={},D={};return Object.keys(j).forEach(function(T){var R=j[T];if(Ne.isDynamic(R)){D[T]=Ne.unbox(R,T);return}else if(F&&Array.isArray(R)){for(var S=0;S<R.length;++S)if(Ne.isDynamic(R[S])){D[T]=Ne.unbox(R,T);return}}I[T]=R}),{dynamic:D,static:I}}var ln=io(yt.context||{},!0),Wa=io(yt.uniforms||{},!0),Es=io(yt.attributes||{},!1),z=io(Qt(yt),!1),ee={gpuTime:0,cpuTime:0,count:0},X=ut.compile(z,Es,Wa,ln,ee),Ye=X.draw,Xt=X.batch,A=X.scope,w=[];function P(j){for(;w.length<j;)w.push(null);return w}function H(j,F){var I;if(se&&_.raise("context lost"),typeof j=="function")return A.call(this,null,j,0);if(typeof F=="function")if(typeof j=="number")for(I=0;I<j;++I)A.call(this,null,F,I);else if(Array.isArray(j))for(I=0;I<j.length;++I)A.call(this,j[I],F,I);else return A.call(this,j,F,0);else if(typeof j=="number"){if(j>0)return Xt.call(this,P(j|0),j|0)}else if(Array.isArray(j)){if(j.length)return Xt.call(this,j,j.length)}else return Ye.call(this,j)}return t(H,{stats:ee,destroy:function(){X.destroy()}})}var Fo=Pe.setFBO=_n({framebuffer:Ne.define.call(null,mm,"framebuffer")});function vn(yt,Qt){var io=0;ut.procs.poll();var ln=Qt.color;ln&&(C.clearColor(+ln[0]||0,+ln[1]||0,+ln[2]||0,+ln[3]||0),io|=N4),"depth"in Qt&&(C.clearDepth(+Qt.depth),io|=R4),"stencil"in Qt&&(C.clearStencil(Qt.stencil|0),io|=P4),_(!!io,"called regl.clear with no buffer specified"),C.clear(io)}function Mn(yt){if(_(typeof yt=="object"&&yt,"regl.clear() takes an object as input"),"framebuffer"in yt)if(yt.framebuffer&&yt.framebuffer_reglType==="framebufferCube")for(var Qt=0;Qt<6;++Qt)Fo(t({framebuffer:yt.framebuffer.faces[Qt]},yt),vn);else Fo(yt,vn);else vn(null,yt)}function kn(yt){_.type(yt,"function","regl.frame() callback must be a function"),fe.push(yt);function Qt(){var io=gm(fe,yt);_(io>=0,"cannot cancel a frame twice");function ln(){var Wa=gm(fe,ln);fe[Wa]=fe[fe.length-1],fe.length-=1,fe.length<=0&&ho()}fe[io]=ln}return Ut(),{cancel:Qt}}function Bn(){var yt=De.viewport,Qt=De.scissor_box;yt[0]=yt[1]=Qt[0]=Qt[1]=0,xe.viewportWidth=xe.framebufferWidth=xe.drawingBufferWidth=yt[2]=Qt[2]=C.drawingBufferWidth,xe.viewportHeight=xe.framebufferHeight=xe.drawingBufferHeight=yt[3]=Qt[3]=C.drawingBufferHeight}function Jn(){xe.tick+=1,xe.time=Gt(),Bn(),ut.procs.poll()}function cn(){Re.refresh(),Bn(),ut.procs.refresh(),Ee&&Ee.update()}function Gt(){return(ze()-_e)/1e3}cn();function er(yt,Qt){_.type(Qt,"function","listener callback must be a function");var io;switch(yt){case"frame":return kn(Qt);case"lost":io=At;break;case"restore":io=Dt;break;case"destroy":io=Qe;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return io.push(Qt),{cancel:function(){for(var ln=0;ln<io.length;++ln)if(io[ln]===Qt){io[ln]=io[io.length-1],io.pop();return}}}}var yo=t(_n,{clear:Mn,prop:Ne.define.bind(null,mm),context:Ne.define.bind(null,I4),this:Ne.define.bind(null,F4),draw:_n({}),buffer:function(yt){return ke.create(yt,O4,!1,!1)},elements:function(yt){return je.create(yt,!1)},texture:Re.create2D,cube:Re.createCube,renderbuffer:pe.create,framebuffer:Pe.create,framebufferCube:Pe.createCube,vao:Ue.createVAO,attributes:J,frame:kn,on:er,limits:ne,hasExtension:function(yt){return ne.extensions.indexOf(yt.toLowerCase())>=0},read:Ct,destroy:eo,_gl:C,_refresh:cn,poll:function(){Jn(),Ee&&Ee.update()},now:Gt,stats:ge});return M.onDone(null,yo),yo}return D4})});var Ss=de((_A,$m)=>{"use strict";var ci=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],li=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Xa=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],qf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],al=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],g1=e=>Math.hypot(e[0],e[1],e[2]),ua=e=>{let t=g1(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function D0(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],l=e[Math.min(o,r+2)],f=[0,0,0];for(let u=0;u<3;u++)f[u]=.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-l[u])*a*a+(-i[u]+3*s[u]-3*c[u]+l[u])*a*a*a);return f}function e_(e,t){return D0(e.map(o=>[o,0,0]),t)[0]}function t_(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,d)=>{let v=new Array(9);for(let p=0;p<3;p++)for(let m=0;m<3;m++)v[p*3+m]=h[p*3]*d[m]+h[p*3+1]*d[3+m]+h[p*3+2]*d[6+m];return v},l=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,d,v)=>{let p=l([h,d,v]);i.t=[i.t[0]+p[0]*i.s,i.t[1]+p[1]*i.s,i.t[2]+p[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let d=Math.cos(h),v=Math.sin(h);i.r=c(i.r,[d,0,v,0,1,0,-v,0,d])},r.vert=(h,d,v)=>{let p=v||r.curMat,m=l(h),g=ua(l(d));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(p[0],p[1],p[2]),e.length/3-1};let f=h=>[e[h*3],e[h*3+1],e[h*3+2]],u=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,d,v)=>{let p=f(h),m=al(ci(f(d),p),ci(f(v),p)),g=li(li(u(h),u(d)),u(v));qf(m,g)<0?o.push(h,v,d):o.push(h,d,v)},r.box=(h,d,v,p,m,g,y)=>{let b=[[[h,d,v],[p,d,v],[h,m,v],[p,m,v],[0,0,-1]],[[p,d,g],[h,d,g],[p,m,g],[h,m,g],[0,0,1]],[[h,d,g],[h,d,v],[h,m,g],[h,m,v],[-1,0,0]],[[p,d,v],[p,d,g],[p,m,v],[p,m,g],[1,0,0]],[[h,m,v],[p,m,v],[h,m,g],[p,m,g],[0,1,0]],[[h,d,g],[p,d,g],[h,d,v],[p,d,v],[0,-1,0]]];for(let k of b){let E=r.vert(k[0],k[4],y),L=r.vert(k[1],k[4],y),N=r.vert(k[2],k[4],y),W=r.vert(k[3],k[4],y);r.tri(E,L,N),r.tri(L,W,N)}},r.surface=(h,d,v,p)=>{p=p||{};let m=.001,g=E=>Math.min(1,Math.max(0,E)),y=[],b=[];for(let E=0;E<=d;E++){let L=[],N=[];for(let W=0;W<=v;W++){let O=E/d,te=W/v,G=h(O,te),re=Math.min(1-m,Math.max(m,O)),q=p.wrapV?te:Math.min(1-m,Math.max(m,te)),Y=ci(h(g(re+m),q),h(g(re-m),q)),be=p.wrapV?q+m:g(q+m),qe=p.wrapV?q-m:g(q-m),Ae=ci(h(re,be),h(re,qe)),he=al(Y,Ae);g1(he)<1e-14&&(he=p.inside?ci(G,p.inside(O,te)):[0,1,0]),he=ua(he),p.inside&&qf(he,ci(G,p.inside(O,te)))<0&&(he=Xa(he,-1));let Te=p.mat?p.mat(O,te,G):null;L.push(r.vert(G,he,Te)),p.double&&N.push(r.vert(G,Xa(he,-1),Te))}y.push(L),b.push(N)}let k=E=>{for(let L=0;L<d;L++)for(let N=0;N<v;N++){let W=E[L][N],O=E[L+1][N],te=E[L][N+1],G=E[L+1][N+1];r.tri(W,O,te),r.tri(O,G,te)}};k(y),p.double&&k(b)},r.ellipsoid=(h,d,v,p,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let k=y*Math.PI,E=b*Math.PI*2,L=g?g(y,b):1;return[h[0]+d[0]*L*Math.sin(k)*Math.cos(E),h[1]+d[1]*L*Math.cos(k),h[2]+d[2]*L*Math.sin(k)*Math.sin(E)]},v||10,p||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,d,v,p,m)=>{m=m||{};let g=40,y=[],b=null;for(let L=0;L<=g;L++){let N=L/g,W=D0(h,Math.max(0,N-.01)),O=D0(h,Math.min(1,N+.01)),te=ua(ci(O,W)),G;if(b)G=ua(ci(b,Xa(te,qf(b,te))));else{let re=Math.abs(te[1])<.9?[0,1,0]:[1,0,0];G=ua(al(te,re))}y.push({N:G,B:ua(al(te,G))}),b=G}let k=L=>{let N=Math.min(Math.max(L,0),1)*g,W=Math.min(g-1,Math.floor(N)),O=N-W,te=y[W],G=y[W+1];return{N:ua(li(Xa(te.N,1-O),Xa(G.N,O))),B:ua(li(Xa(te.B,1-O),Xa(G.B,O)))}},E=m.squash||[1,1];r.surface((L,N)=>{let W=D0(h,L),O=k(L),te=d(L),G=N*Math.PI*2;return li(W,li(Xa(O.N,Math.cos(G)*te*E[0]),Xa(O.B,Math.sin(G)*te*E[1])))},v||12,p||8,{wrapV:!0,inside:L=>D0(h,L),mat:m.mat})},r.lathe=(h,d,v,p,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],k=h[y+1][1]-h[y][1];g.push(ua([k,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],k=h[y+1],E=y===0||b[2]===1,L=y===h.length-2||k[2]===1,N=E?g[y]:ua(li(g[y-1],g[y])),W=L?g[y]:ua(li(g[y],g[y+1])),O=[],te=[];for(let G=0;G<=p;G++){let re=G/p*Math.PI*2,q=Math.cos(re),Y=Math.sin(re),be=m.mat?m.mat(re,b[1]):null,qe=m.mat?m.mat(re,k[1]):null;O.push(r.vert([d+b[0]*q,b[1],v+b[0]*Y],[N[0]*q,N[1],N[0]*Y],be)),te.push(r.vert([d+k[0]*q,k[1],v+k[0]*Y],[W[0]*q,W[1],W[0]*Y],qe))}for(let G=0;G<p;G++)r.tri(O[G],O[G+1],te[G]),r.tri(O[G+1],te[G+1],te[G])}},r}$m.exports={createBuilder:t_,catmull:D0,curve1:e_,sub:ci,add:li,mul:Xa,dot:qf,cross:al,norm:ua,len:g1}});var Bm=de((MA,Um)=>{"use strict";var{norm:Hf,add:Uf,mul:Ri,sub:o_,cross:qm}=Ss(),Hm=Math.PI*2,n_=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function r_(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function a_(e,t,o,n,r,a){let i=(h,d)=>[7,h*a,d];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,l=20,f=6,u=a*.075;return e.surface((h,d)=>{let v=s+h*c,p=a*(.96-.12*h),m=d*Hm,g=d*l%1,y=p-u*4*g*(1-g);return[t+y*Math.cos(m),v,o+y*Math.sin(m)]},10,l*f,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,d)=>[7,d*Hm*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function i_(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function s_(e,t,o,n,r){e.save(),e.translate(t,0,o),i_(e,n,r),e.restore()}function c_(e,t,o,n,r,a){let i=r_(n),s=a?Hf([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,l=.86;for(let f=0;f<c;f++){let u=f>=c-2,h=f*2.399963+i()*.5,d=[Math.cos(h),0,Math.sin(h)],v=[-Math.sin(h),0,Math.cos(h)],p=f*.618%1,m=u?.06+i()*.06:.12+.62*p,g=1;if(s){let he=d[0]*s[0]+d[2]*s[2];g=.25+.75*n_(-.7,.5,he),m*=g}let y=u?1.1+i()*.25:.85+.55*(1-p*.55)+i()*.15,b=u?1+i()*.2:.95+i()*.28,k=u?.055:.215+i()*.05,E=.04+i()*.05,L=[d[0]*E,l,d[2]*E],N=[L[0]+d[0]*Math.sin(m)*y*.92,L[1]+Math.cos(m)*y,L[2]+d[2]*Math.sin(m)*y*.92],W=[L[0]+d[0]*Math.sin(m*.5)*y*.45,L[1]+y*.5,L[2]+d[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([L,W,N],he=>.02-.008*he,8,7);let O=24,te=m*.9+.05,G=m+(u?.12:(.95+.45*p)*(.35+.65*g)),re=[N],q=[],Y=N;for(let he=0;he<O;he++){let Te=he/O,dt=te+(G-te)*Te*Te,qt=[d[0]*Math.sin(dt),Math.cos(dt),d[2]*Math.sin(dt)];q.push(qt),Y=Uf(Y,Ri(qt,b/O)),re.push(Y)}q.push(q[q.length-1]);let be=he=>{let Te=he*O,dt=Math.min(O-1,Math.floor(Te)),qt=Te-dt;return Uf(Ri(re[dt],1-qt),Ri(re[dt+1],qt))},qe=he=>{let Te=he*O,dt=Math.min(O,Math.floor(Te)),qt=Math.min(O,dt+1),He=Te-dt;return Hf(Uf(Ri(q[dt],1-He),Ri(q[qt],He)))},Ae=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((he,Te)=>{let dt=Te*2-1,qt=be(he),He=qe(he),pt=Ae*he,St=Uf(Ri(v,Math.cos(pt)),Ri(qm(He,v),Math.sin(pt)));St=Hf(o_(St,Ri(He,St[0]*He[0]+St[1]*He[1]+St[2]*He[2])));let Zt=Hf(qm(St,He)),ao=k*Math.pow(Math.sin(Math.PI*Math.pow(he,.72)),.85),Ho=.3*ao*Math.abs(dt)+.012*Math.sin(he*40+dt*2)*Math.abs(dt)*(u?0:1),Xe=-.1*ao*dt*dt*dt*dt,ht=Ho+Xe;return[qt[0]+St[0]*dt*ao+Zt[0]*ht,qt[1]+St[1]*dt*ao+Zt[1]*ht,qt[2]+St[2]*dt*ao+Zt[2]*ht]},14,8,{double:!0,mat:(he,Te)=>[2,Te*2-1,he]})}e.restore()}Um.exports={addFlutedColumn:a_,addStatue:s_,addPlant:c_}});var Pi=de((kA,Xm)=>{"use strict";var ye={xc:7,r:2.5,spring:4.7};ye.x0=ye.xc-ye.r;ye.x1=ye.xc+ye.r;ye.top=ye.spring+ye.r;var Tr=.06,Bo=.1,jm=.08,Bf=ye.r,jf=[ye.x0+Bf/3,ye.x0+2*Bf/3,ye.xc+Bf/3,ye.xc+2*Bf/3],G0=.28,x1=[.95,1.65,2.35,3.05,3.75],Wm=[1.05,1.8],il=[8,0,0],Yr=[0,0,0];function da(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function $0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Wf(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let l=(f,u,h)=>[ye.xc+u*Math.cos(f),ye.spring+u*Math.sin(f),h];for(let f=0;f<i;f++){let u=s+(c-s)*f/i,h=s+(c-s)*(f+1)/i,d=(u+h)/2;$0(e,l(u,t,r),l(h,t,r),l(h,o,r),l(u,o,r),[0,0,1],a),$0(e,l(u,o,n),l(h,o,n),l(h,t,n),l(u,t,n),[0,0,-1],a),$0(e,l(u,t,n),l(h,t,n),l(h,t,r),l(u,t,r),[-Math.cos(d),-Math.sin(d),0],a),$0(e,l(h,o,n),l(u,o,n),l(u,o,r),l(h,o,r),[Math.cos(d),Math.sin(d),0],a)}}function l_(e){let n=a=>[ye.xc+ye.r*Math.cos(a),ye.spring+ye.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?ye.r/Math.abs(i):1/0,l=s>1e-6?(8-ye.spring)/s:1/0,f=Math.min(c,l);return[Math.min(ye.x1,Math.max(ye.x0,ye.xc+i*f)),Math.min(8,ye.spring+s*f)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),l=n(s),f=r(i),u=r(s);for(let[d,v]of[[.35,1],[-.35,-1]])$0(e,[c[0],c[1],d],[l[0],l[1],d],[u[0],u[1],d],[f[0],f[1],d],[0,0,v],Yr);let h=(i+s)/2;$0(e,[c[0],c[1],-.35],[l[0],l[1],-.35],[l[0],l[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Yr)}}function f_(e){da(e,-.35,0,-.35,ye.x0,8,.35,Yr),da(e,ye.x1,0,-.35,14+.35,8,.35,Yr),l_(e),Vm(e)}function Vm(e){da(e,ye.x0-.32,.3,.35,ye.x0,ye.spring,.35+.07,Yr),da(e,ye.x1,.3,.35,ye.x1+.32,ye.spring,.35+.07,Yr),da(e,ye.x0-.32-.05,0,.35,ye.x0,.3,.35+.07+.04,Yr),da(e,ye.x1,0,.35,ye.x1+.32+.05,.3,.35+.07+.04,Yr),da(e,ye.x0-.32-.06,ye.spring-.12,.35,ye.x0,ye.spring,.35+.07+.05,Yr),da(e,ye.x1,ye.spring-.12,.35,ye.x1+.32+.06,ye.spring,.35+.07+.05,Yr),Wf(e,ye.r,ye.r+.32,.35,.35+.07,Yr),Wf(e,ye.r+.32,ye.r+.32+.06,.35,.35+.07+.03,Yr),da(e,ye.xc-.22,ye.top-.08,.35,ye.xc+.22,ye.top+.32+.12,.35+.07+.06,Yr)}function h_(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-jm/2,a=jm/2,i=(h,d,v,p,m=0)=>da(e,h-m,d,r,v+m,p,a,il),s=h=>ye.spring+Math.sqrt(Math.max(0,ye.r*ye.r-(h-ye.xc)*(h-ye.xc))),c=t==="right"?ye.xc:ye.x0,l=t==="left"?ye.xc:ye.x1,f=h=>o||t==="left"&&h<ye.xc||t==="right"&&h>ye.xc,u=o?null:ye.spring-.06;if(n){i(ye.x0,0,ye.x0+Bo,ye.spring),i(ye.x1-Bo,0,ye.x1,ye.spring),Wf(e,ye.r-Bo,ye.r,r,a,il,64),i(ye.x0,0,ye.x1,.05),i(ye.x0,ye.spring-.06,ye.x1,ye.spring+.06);for(let h of Wm)Wf(e,h-Tr/2,h+Tr/2,r,a,il,48)}if(o){i(ye.x0,0,ye.x1,G0),i(ye.xc-Bo/2,0,ye.xc+Bo/2,ye.top-Bo*.5);for(let h of jf)i(h-Tr/2,G0,h+Tr/2,s(h)-Bo*.5);for(let h of x1)i(ye.x0,h-Tr/2,ye.x1,h+Tr/2)}else if(t==="fixed"){i(ye.xc-Bo/2,ye.spring+.06,ye.xc+Bo/2,ye.top-Bo*.5);for(let h of jf)i(h-Tr/2,ye.spring+.06,h+Tr/2,s(h)-Bo*.5)}else{let h=t==="left"?ye.x0+Bo:ye.x1-Bo;i(Math.min(h,h+(t==="left"?Bo*.8:-Bo*.8)),.05,Math.max(h,h+(t==="left"?Bo*.8:-Bo*.8)),u),i(c,.05,l,G0),i(c,u-.07,l,u);let d=t==="left"?ye.xc-Bo/2:ye.xc;i(d,.05,d+Bo/2,u);for(let v of jf)f(v)&&i(v-Tr/2,G0,v+Tr/2,u-.07);for(let v of x1)i(c,v-Tr/2,l,v+Tr/2)}for(let h of[-1,1]){let d=ye.xc+h*.16;f(d)&&(da(e,d-.02,1.05,a,d+.02,1.13,a+.06,il),da(e,d-(h>0?0:.14),1.07,a+.05,d+(h>0?.14:0),1.11,a+.08,il))}}function u_(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=ye;if(e!=="fixed"){let l=e==="right"?a:n,f=e==="left"?a:r;if(t.push([l,0,o],[f,0,o],[f,s,o],[l,0,o],[f,s,o],[l,s,o]),e!=="all")return t}let c=48;for(let l=0;l<c;l++){let f=Math.PI*l/c,u=Math.PI*(l+1)/c;t.push([a,s,o],[a+i*Math.cos(f),s+i*Math.sin(f),o],[a+i*Math.cos(u),s+i*Math.sin(u),o])}return t}var Ao=e=>e.toFixed(4);function d_(){let e=jf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Ao(n)}), ${Ao(Tr/2)}, soft));`).join(`
		`),t=x1.map(n=>`hb = max(hb, barCover(abs(q.y - ${Ao(n)}), ${Ao(Tr/2)}, soft));`).join(`
		`),o=Wm.map(n=>`ab = max(ab, barCover(abs(rr - ${Ao(n)}), ${Ao(Tr/2)}, soft));`).join(`
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
		hb = max(hb, 1.0 - smoothstep(${Ao(G0)} - soft, ${Ao(G0)} + soft, q.y));
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
	}`}Xm.exports={addEntranceWall:f_,addSurround:Vm,addFrames:h_,glassPanes:u_,doorLightGLSL:d_,DOOR:ye,WALL:.35}});var H0=de((EA,e2)=>{"use strict";var Ts=1.1583333333333334,Ls=(13.05-8*.16)/9,b1=Ts+.16,w1=Ls+.16,hi=14/2-7.75/2,Kr=15,sl=hi+7.75,fi=Kr+13.05,Qr=.3,ui={y:8+.18,inset:.15},As={y:8+.36,inset:Qr},_1=8+.2,cl=8+.62,M1=8+.9,k1=.016,Zm=.28,Jm=.66,p_=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),v_=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),m_=[9,0,0],tr=[10,0,0];function q0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Lr(e,t,o,n,r,a,i){q0(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function y1(e,t,o,n,r,a,i,s){q0(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),q0(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),q0(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),q0(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function Ym(e,t,o,n,r){Lr(e,t[0],t[1],t[2],o[1],n,r),Lr(e,t[0],o[3],t[2],t[3],n,r),Lr(e,t[0],o[1],o[0],o[3],n,r),Lr(e,o[2],o[1],t[2],o[3],n,r)}var Km=e=>hi+e*b1,Qm=e=>Kr+e*w1;function g_(e,t,o=48){let n=[hi-Qr,Kr-Qr,sl+Qr,fi+Qr],r=(l,f)=>[l[0]+f,l[1]+f,l[2]-f,l[3]-f],a=r(n,ui.inset),i=r(n,As.inset);Lr(e,0,0,14,n[1],8,t),Lr(e,0,n[3],14,o,8,t),Lr(e,0,n[1],n[0],n[3],8,t),Lr(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],tr),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,tr),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],tr),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],tr),y1(e,...n.slice(0,2),...n.slice(2),8,ui.y,tr),Ym(e,n,a,ui.y,tr),y1(e,...a.slice(0,2),...a.slice(2),ui.y,As.y,tr),Ym(e,a,i,As.y,tr);for(let l=1;l<6;l++){let f=Km(l)-.16;e.box(f,_1,Kr,f+.16,As.y,fi,tr)}for(let l=1;l<9;l++){let f=Qm(l)-.16;e.box(hi,_1,f,sl,As.y,f+.16,tr)}for(let l=0;l<9;l++)for(let f=0;f<6;f++){let u=Km(f),h=Qm(l);y1(e,u,h,u+Ts,h+Ls,As.y,M1,tr),Lr(e,u,h,u+Ts,h+Ls,M1,m_),x_(e,u+Ts/2,h+Ls/2,Ts/2,Ls/2)}}function x_(e,t,o,n,r){let a=cl,i=k1;Lr(e,t-n,o-i,t+n,o+i,a,tr),Lr(e,t-i,o-r,t+i,o+r,a,tr);for(let s of[1,-1]){let c=Math.hypot(n,r),l=n/c,f=s*r/c,u=-f*i,h=l*i;q0(e,[t-l*c+u,a,o-f*c+h],[t+l*c+u,a,o+f*c+h],[t+l*c-u,a,o+f*c-h],[t-l*c-u,a,o-f*c-h],[0,-1,0],tr)}for(let s of[Zm,Jm]){let c=s*n,l=s*r;Lr(e,t-c-i,o-l-i,t+c+i,o-l+i,a,tr),Lr(e,t-c-i,o+l-i,t+c+i,o+l+i,a,tr),Lr(e,t-c-i,o-l+i,t-c+i,o+l-i,a,tr),Lr(e,t+c-i,o-l+i,t+c+i,o+l-i,a,tr)}}var Ot=e=>e.toFixed(4);function y_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${p_.map(Ot).join(", ")});
	const vec3 SKY_MOON = vec3(${v_.map(Ot).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Ot(hi)}, ${Ot(Kr)});
		vec2 pitch = vec2(${Ot(b1)}, ${Ot(w1)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Ot(5)} || cell.y > ${Ot(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Ot(Ts)}, ${Ot(Ls)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Ot(k1)} - soft, ${Ot(k1)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Ot(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Ot(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Ot(ui.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Ot(_1)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Ot(As.y)} - p.y) / L.y)).xz;
		float tG = (${Ot(cl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Ot(M1)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Ot(hi-Qr)}, ${Ot(Kr-Qr)}, ${Ot(sl+Qr)}, ${Ot(fi+Qr)}), soft)
		           * rectOpen(q1, vec4(${Ot(hi-Qr+ui.inset)}, ${Ot(Kr-Qr+ui.inset)}, ${Ot(sl+Qr-ui.inset)}, ${Ot(fi+Qr-ui.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Ot(hi)}, ${Ot(Kr)});
		vec2 pitch = vec2(${Ot(b1)}, ${Ot(w1)});
		vec2 paneHalf = vec2(${Ot(Ts/2)}, ${Ot(Ls/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Ot(Zm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Ot(Jm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Ot(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Ot(cl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Ot(hi)}, ${Ot(Kr)}, ${Ot(sl)}, ${Ot(fi)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Ot(14/2)}, ${Ot((Kr+fi)/2)}) - L.xz * (${Ot(cl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Ot(7.75/2)}, ${Ot(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Ot(Kr-3)}, ${Ot(Kr+2)}, p.z)
		        * (1.0 - smoothstep(${Ot(fi-2)}, ${Ot(fi+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Ot(7.75/2)}, ${Ot(14/2)}, abs(p.x - ${Ot(14/2)}));
		return z * x;
	}`}e2.exports={addSkylight:g_,skylightGLSL:y_,Z_START:Kr,Z_END:fi,GLASS_Y:cl,HEIGHT:8}});var lr=de((SA,a2)=>{"use strict";var B0=Pi(),T1=8,jo=.35,$e={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:T1},t2=($e.z1-$e.z0)/2,E1=$e.crown-$e.spring,A1=(E1*E1+t2*t2)/(2*E1),L1=$e.crown-A1;function U0(e){let t=e-$e.zc;return L1+Math.sqrt(Math.max(0,A1*A1-t*t))}var Et={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Ta=Array.from({length:Et.count},(e,t)=>Et.first+t*Et.pitch),n2=Ta.slice(1).map(e=>e-Et.pitch/2),b_=[Ta[0],Ta[2],Ta[4]],Xf=[Ta[1],Ta[3]],Gr={r:1.3,sill:.62,spring:3.3},No=[0,0,0],ll=[11,0,0],Oi=[10,0,0],fl=[8,0,0];function jn(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function $r(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function hl(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,l=new Set([o,n]);for(let p of s){l.add(p.u0),l.add(p.u1);let m=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.08)));for(let g=1;g<m;g++)l.add(p.u0+(p.u1-p.u0)*g/m)}for(let p of t.cuts||[])l.add(p);let f=t.topStep||.5;for(let p=o;p<n;p+=f)l.add(p);let u=[...l].filter(p=>p>=o-1e-9&&p<=n+1e-9).sort((p,m)=>p-m),h=(p,m)=>p.bot?p.bot(m):p.bottom,d=(p,m)=>{let g=i(p),y=m.map(E=>[Math.max(0,h(E,p)),Math.min(E.head(p),g)]).filter(E=>E[1]>E[0]).sort((E,L)=>E[0]-L[0]),b=[],k=0;for(let E of y)E[0]>k+1e-6&&b.push([k,E[0]]),k=Math.max(k,E[1]);return g>k+1e-6&&b.push([k,g]),b},v=(p,m,g)=>[p,m,g];for(let p=0;p<u.length-1;p++){let m=u[p],g=u[p+1],y=(m+g)/2,b=s.filter(O=>y>O.u0&&y<O.u1),k=b.length?Math.max(m,Math.max(...b.map(O=>O.u0))+1e-7):m,E=b.length?Math.min(g,Math.min(...b.map(O=>O.u1))-1e-7):g,L=d(k,b),N=d(E,b),W=Math.min(L.length,N.length);for(let O=0;O<W;O++){let[te,G]=L[O],[re,q]=N[O];G-te<1e-6&&q-re<1e-6||(jn(e,v(m,te,a),v(g,re,a),v(g,q,a),v(m,G,a),[0,0,1],c),t.frontOnly||jn(e,v(g,re,r),v(m,te,r),v(m,G,r),v(g,q,r),[0,0,-1],c))}}t.noEnds||(jn(e,v(o,0,r),v(o,0,a),v(o,i(o),a),v(o,i(o),r),[-1,0,0],c),jn(e,v(n,0,a),v(n,0,r),v(n,i(n),r),v(n,i(n),a),[1,0,0],c));for(let p of s){if(p.noReveal)continue;let m=p.mat||t.revealMat||c,g=Math.max(0,h(p,p.u0+1e-7)),y=Math.max(0,h(p,p.u1-1e-7)),b=Math.min(p.head(p.u0+1e-7),i(p.u0)),k=Math.min(p.head(p.u1-1e-7),i(p.u1));b>g+1e-6&&jn(e,v(p.u0,g,a),v(p.u0,g,r),v(p.u0,b,r),v(p.u0,b,a),[1,0,0],m),k>y+1e-6&&jn(e,v(p.u1,y,r),v(p.u1,y,a),v(p.u1,k,a),v(p.u1,k,r),[-1,0,0],m);let E=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.06)));for(let L=0;L<E;L++){let N=p.u0+(p.u1-p.u0)*L/E,W=p.u0+(p.u1-p.u0)*(L+1)/E,O=Math.max(N,p.u0+1e-7),te=Math.min(W,p.u1-1e-7),G=Math.min(p.head(O),i(N)),re=Math.min(p.head(te),i(W));if(!(G>=i(N)-1e-6&&re>=i(W)-1e-6)){let be=W-N,qe=re-G,Ae=Math.hypot(be,qe)||1;jn(e,v(N,G,r),v(W,re,r),v(W,re,a),v(N,G,a),[qe/Ae,-be/Ae,0],m)}let q=h(p,O),Y=h(p,te);if(q>1e-6||Y>1e-6){let be=W-N,qe=Y-q,Ae=Math.hypot(be,qe)||1;jn(e,v(W,Y,r),v(N,q,r),v(N,q,a),v(W,Y,a),[-qe/Ae,be/Ae,0],m)}}}}var S1=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function w_(e,t){let o=Gr.r,n=Gr.sill,r=Gr.spring,a=$e.z0,i=24,s=(d,v,p)=>[t+Math.cos(d)*v,p,a-Math.sin(d)*v];for(let d=0;d<i;d++){let v=Math.PI*d/i,p=Math.PI*(d+1)/i,m=[-Math.cos(v),0,Math.sin(v)],g=[-Math.cos(p),0,Math.sin(p)],y=[e.vert(s(v,o,n),m,No),e.vert(s(p,o,n),g,No),e.vert(s(p,o,r),g,No),e.vert(s(v,o,r),m,No)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,l=(d,v)=>[t+Math.cos(d)*Math.cos(v)*o,r+Math.sin(v)*o,a-Math.sin(d)*Math.cos(v)*o],f=(d,v)=>[-Math.cos(d)*Math.cos(v),-Math.sin(v),Math.sin(d)*Math.cos(v)];for(let d=0;d<i;d++)for(let v=0;v<c;v++){let p=Math.PI*d/i,m=Math.PI*(d+1)/i,g=Math.PI/2*v/c,y=Math.PI/2*(v+1)/c,b=[e.vert(l(p,g),f(p,g),Oi),e.vert(l(m,g),f(m,g),Oi),e.vert(l(m,y),f(m,y),Oi),e.vert(l(p,y),f(p,y),Oi)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let d=1;d<8;d++){let v=Math.PI*d/8,p=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;p.push(l(v,g).map((y,b)=>y-f(v,g)[b]*.02))}e.tube(p,m=>.035*(1-m*.6),12,6,{mat:()=>Oi})}let u=e.vert([t,n,a],[0,1,0],No);for(let d=0;d<i;d++){let v=Math.PI*d/i,p=Math.PI*(d+1)/i;e.tri(u,e.vert(s(v,o,n),[0,1,0],No),e.vert(s(p,o,n),[0,1,0],No))}$r(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,No),$r(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,No);let h=.16;for(let d=0;d<i;d++){let v=Math.PI*d/i,p=Math.PI*(d+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];jn(e,m(v,o,a+.05),m(p,o,a+.05),m(p,o+h,a+.05),m(v,o+h,a+.05),[0,0,1],No),jn(e,m(v,o+h,a),m(p,o+h,a),m(p,o+h,a+.05),m(v,o+h,a+.05),[Math.cos((v+p)/2),Math.sin((v+p)/2),0],No),jn(e,m(v,o,a),m(p,o,a),m(p,o,a+.05),m(v,o,a+.05),[-Math.cos((v+p)/2),-Math.sin((v+p)/2),0],No)}for(let d of[-1,1]){let v=t+d*o,p=t+d*(o+h);$r(e,v,n,a,p,r,a+.05,No),$r(e,v-d*.02,r-.12,a,p+d*.06,r,a+.09,No)}$r(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,No),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>No})}var __=Gr.sill+.4,M_=$e.z0-.62;function k_(e){jn(e,[14,0,$e.z0-jo],[$e.x1+jo,0,$e.z0-jo],[$e.x1+jo,0,$e.z1+jo],[14,0,$e.z1+jo],[0,1,0],No),e.curMat=ll,hl(e,{u0:14+jo,u1:$e.x1+2*jo,w0:$e.z0-2*jo,w1:$e.z0,top:()=>$e.spring,holes:Xf.map(l=>({u0:l-Gr.r,u1:l+Gr.r,bottom:Gr.sill,head:S1(l,Gr.r,Gr.spring),noReveal:!0})),mat:ll,cuts:[$e.x1]});for(let l of Xf)w_(e,l);e.save(),e.translate(0,0,$e.z1),e.rotateY(Math.PI),e.translate(-($e.x1+2*jo),0,-2*jo);let t=l=>$e.x1+2*jo-l;hl(e,{u0:t($e.x1+2*jo),u1:t(13.65),w0:0,w1:2*jo,top:()=>$e.spring,holes:Ta.map(l=>({u0:t(l+Et.halfW),u1:t(l-Et.halfW),bottom:Et.sill,head:S1(t(l),Et.halfW,Et.spring)})),mat:ll,revealMat:No}),e.restore(),e.save(),e.translate($e.x1,0,0),e.rotateY(-Math.PI/2);let o=B0.DOOR,n=$e.zc,r=o.r;hl(e,{u0:$e.z0-2*jo,u1:$e.z1+2*jo,w0:-2*jo,w1:0,top:l=>l<$e.z0||l>$e.z1?$e.spring:U0(l),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:S1(n,r,o.spring)}],mat:ll,revealMat:No}),e.restore(),e.save(),e.translate(14+jo,0,0),e.rotateY(-Math.PI/2),hl(e,{u0:$e.z0,u1:$e.z1,w0:-0,w1:2*jo,top:()=>T1,topStep:.15,holes:[{u0:$e.z0,u1:$e.z1,bottom:0,head:l=>U0(l)}],mat:ll,revealMat:No}),e.restore();let a=14+jo,i=Math.ceil(($e.x1-a)/1),s=28,c=[];for(let l=0;l<=i;l++){let f=a+($e.x1-a)*l/i,u=[];for(let h=0;h<=s;h++){let d=$e.z0+($e.z1-$e.z0)*h/s,v=U0(d),p=[0,L1-v,$e.zc-d],m=Math.hypot(p[1],p[2]);u.push(e.vert([f,v,d],[0,p[1]/m,p[2]/m],Oi))}c.push(u)}for(let l=0;l<i;l++)for(let f=0;f<s;f++)e.tri(c[l][f],c[l+1][f],c[l][f+1]),e.tri(c[l+1][f],c[l+1][f+1],c[l][f+1])}function o2(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=$e.z0+($e.z1-$e.z0)*i/32,c=U0(s),l=L1-c,f=$e.zc-s,u=Math.hypot(l,f),h=[c+l/u*n,s+f/u*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,l/u,f/u]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];jn(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,No),jn(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],No),jn(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],No)}}function Vf(e,t,o,n){let i=o,s=o+n*.16;$r(e,t-.28,0,i,t+.28,$e.spring-.3,s,No),$r(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),No),$r(e,t-.28-.05,$e.spring-.3,i,t+.28+.05,$e.spring-.1,o+n*(.16+.05),No),$r(e,t-.28-.1,$e.spring-.1,i,t+.28+.1,$e.spring,o+n*(.16+.1),No)}function E_(e,t){let o=U0($e.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,$e.zc,48,{mat:()=>Oi});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=$e.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=Oi,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function S_(e){e.curMat=No;for(let[t,o]of[[$e.z0,1],[$e.z1,-1]])$r(e,14.35,$e.spring-.12,t,$e.x1,$e.spring,t+o*.1,No),$r(e,14.35,$e.spring-.04,t,$e.x1,$e.spring+.05,t+o*.18,No);for(let[t,o]of[[$e.z0,1],[$e.z1,-1]])$r(e,14.35,0,t,$e.x1,.42,t+o*.12,No),$r(e,14.35,.42,t,$e.x1,.5,t+o*.07,No);for(let t of n2)o2(e,t,.24,.16),Vf(e,t,$e.z0,1),Vf(e,t,$e.z1,-1);for(let t of[14.35+.28,$e.x1-.28])o2(e,t,.28,.22),Vf(e,t,$e.z0,1),Vf(e,t,$e.z1,-1);for(let t of Ta)E_(e,t)}function A_(e){let t=$e.z1+jo,o=t-.04,n=t+.04,r=(s,c,l,f)=>$r(e,s,c,o,l,f,n,fl),a=Et.halfW,i=(s,c,l,f,u,h)=>{let d=(v,p,m)=>[s+p*Math.cos(v),Et.spring+p*Math.sin(v),m];for(let v=0;v<h;v++){let p=f+(u-f)*v/h,m=f+(u-f)*(v+1)/h;jn(e,d(p,c,o),d(m,c,o),d(m,l,o),d(p,l,o),[0,0,-1],fl),jn(e,d(p,l,n),d(m,l,n),d(m,c,n),d(p,c,n),[0,0,1],fl)}};for(let s of Ta){let c=s-a,l=s+a;r(c,Et.sill,c+.07,Et.spring),r(l-.07,Et.sill,l,Et.spring),r(c,Et.sill,l,Et.sill+.07),r(c,Et.spring-.04,l,Et.spring+.04);for(let u of[-.5,0,.5])r(s+u*a-.022,Et.sill,s+u*a+.022,Et.spring);let f=6;for(let u=1;u<f;u++){let h=Et.sill+(Et.spring-Et.sill)*u/f;r(c,h-.02,l,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let u=1;u<6;u++){let h=Math.PI*u/6,d=Math.cos(h),v=Math.sin(h),p=.02,m=(g,y)=>[s+d*g-v*p*y,Et.spring+v*g+d*p*y];jn(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],fl),jn(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],fl)}}}function T_(){let e=[],t=$e.z1+jo;for(let o of Ta){let n=o-Et.halfW,r=o+Et.halfW;e.push([n,Et.sill,t],[r,Et.sill,t],[r,Et.spring,t],[n,Et.sill,t],[r,Et.spring,t],[n,Et.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,Et.spring,t],[o+Et.halfW*Math.cos(i),Et.spring+Et.halfW*Math.sin(i),t],[o+Et.halfW*Math.cos(s),Et.spring+Et.halfW*Math.sin(s),t])}}return e}function r2(e,t){e.save(),e.translate($e.x1+jo,0,$e.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function L_(e){r2(e,()=>{B0.addSurround(e),B0.addFrames(e,"fixed")})}function z_(e){return B0.glassPanes(e||"fixed").map(([o,n,r])=>[$e.x1+jo-r,n,$e.zc-7+o])}function C_(e){k_(e),S_(e),A_(e),L_(e),e.curMat=[0,0,0]}var N_={x:$e.x1+jo,zLo:$e.zc-B0.DOOR.r,zHi:$e.zc+B0.DOOR.r},lo=e=>e.toFixed(4);function R_(){return`
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
		${Xf.map(e=>`{ float d = abs(p.x - ${lo(e)}); if (d < best) { best = d; lamp = vec3(${lo(e)}, ${lo(Gr.spring+.55)}, ${lo($e.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${lo($e.z0+1.6)} || p.z < ${lo($e.z0-Gr.r-.1)} || p.x < ${lo($e.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${lo(Gr.r)}, ${lo(Gr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${lo($e.x0-1)}) return 0.0;
		float inC = smoothstep(${lo($e.z0-1.5)}, ${lo($e.z0)}, p.z) * smoothstep(${lo($e.x0-1)}, ${lo($e.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${lo($e.z0)}, ${lo($e.z1)}, p.z);
		return inC * near;
	}`}a2.exports={wallWithHoles:hl,windowLightGLSL:R_,addWing:C_,windowGlass:T_,farDoorGlass:z_,atFarDoor:r2,FAR_DOOR:N_,vaultY:U0,C:$e,NICHE_X:Xf,NICHE:Gr,NICHE_PLINTH_TOP:__,NICHE_STATUE_Z:M_,WIN:Et,winCentres:Ta,piers:n2,PAINTING_X:b_,HEIGHT:T1}});var pa=de((AA,c2)=>{"use strict";var z1=lr(),Go=8,V0=.35,zs=14,W0=4,Ke={x0:zs+V0,x1:zs+V0+2*W0,z0:5.9-W0,z1:5.9+W0,zc:5.9,cx:zs+V0+W0,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Go},oculus:3.3};Ke.domeTop=Ke.dome.base+Ke.dome.r;var X0={spokes:16,ringE:[.42,.95],bar:.035},Rn={sxz:1.32,sy:1.6,yaw:.6};Rn.crownC=[Ke.cx,.4+3.4*Rn.sy,Ke.zc];Rn.crownR=[2.3*Rn.sxz,1.9*Rn.sy,2.3*Rn.sxz];Rn.trunkR=.26*Rn.sxz;Rn.trunkTop=.4+2.2*Rn.sy;var i2={inner:1.05,outer:1.62,seat:.48,soil:.4},Qf=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),Wn=[0,0,0],j0=[11,0,0],Yf=[10,0,0],Kf=[9,0,0],P_=[5,0,0],C1=[3,0,0];function di(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function zr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var O_=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function I_(e){e.save(),e.translate(zs+V0,0,0),e.rotateY(-Math.PI/2),z1.wallWithHoles(e,{u0:0,u1:z1.C.z0,w0:0,w1:2*V0,top:()=>Go,holes:[{u0:Ke.zc-Ke.arch.r,u1:Ke.zc+Ke.arch.r,bottom:0,head:O_(Ke.zc,Ke.arch.r,Ke.arch.spring),step:.05}],mat:j0,revealMat:Wn,topStep:1}),e.restore();let t=zs-V0;for(let[i,s]of[[0,Ke.zc-Ke.arch.r],[Ke.zc+Ke.arch.r,z1.C.z0]])zr(e,t-.12,0,i,t,.42,s,Wn),zr(e,t-.07,.42,i,t,.5,s,Wn);let o=t,n=.24,r=40,a=(i,s,c)=>[c,Ke.arch.spring+Math.sin(i)*s,Ke.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;di(e,a(s,Ke.arch.r,o-.07),a(c,Ke.arch.r,o-.07),a(c,Ke.arch.r+n,o-.07),a(s,Ke.arch.r+n,o-.07),[-1,0,0],Wn),di(e,a(s,Ke.arch.r+n,o),a(c,Ke.arch.r+n,o),a(c,Ke.arch.r+n,o-.07),a(s,Ke.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Wn),di(e,a(s,Ke.arch.r,o),a(c,Ke.arch.r,o),a(c,Ke.arch.r,o-.07),a(s,Ke.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Wn)}zr(e,o-.12,Ke.arch.spring+Ke.arch.r-.06,Ke.zc-.17,o,Ke.arch.spring+Ke.arch.r+n+.16,Ke.zc+.17,Wn);for(let i of[-1,1]){let s=Ke.zc+i*Ke.arch.r,c=Ke.zc+i*(Ke.arch.r+n);zr(e,o-.07,0,s,o,Ke.arch.spring,c,Wn),zr(e,o-.13,Ke.arch.spring-.16,s-i*.03,o,Ke.arch.spring,c+i*.08,Wn),zr(e,o-.12,0,s-i*.03,o,.5,c+i*.06,Wn)}}function F_(e){let{x0:t,x1:o,z0:n,z1:r}=Ke;di(e,[zs,0,n],[o,0,n],[o,0,r],[zs,0,r],[0,1,0],Wn),e.curMat=j0,di(e,[o,0,n],[o,0,r],[o,Go,r],[o,Go,n],[-1,0,0],j0),di(e,[t,0,n],[o,0,n],[o,Go,n],[t,Go,n],[0,0,1],j0),di(e,[o,0,r],[t,0,r],[t,Go,r],[o,Go,r],[0,0,-1],j0),di(e,[t,0,r],[t,0,n],[t,Go,n],[t,Go,r],[1,0,0],j0),zr(e,o-.12,0,n,o,.42,r,Wn),zr(e,t,0,n,o,.42,n+.12,Wn),zr(e,t,0,r-.12,o,.42,r,Wn),zr(e,o-.2,Go-.3,n,o,Go,r,Wn),zr(e,t,Go-.3,n,o,Go,n+.2,Wn),zr(e,t,Go-.3,r-.2,o,Go,r,Wn),zr(e,t,Go-.3,n,t+.2,Go,r,Wn);let a=Ke.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([Ke.cx+Math.cos(y)*a,Ke.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(W0/Math.max(y,1e-6),W0/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,k=c(y),E=c(b),L=[Ke.cx+Math.cos(y)*k,Go,Ke.zc+Math.sin(y)*k],N=[Ke.cx+Math.cos(b)*E,Go,Ke.zc+Math.sin(b)*E];di(e,[s[g][0],Go,s[g][1]],[s[g+1][0],Go,s[g+1][1]],N,L,[0,-1,0],Yf)}e.lathe([[a+.02,Go-.18,1],[a-.12,Go-.18,1],[a-.12,Go-.06,1],[a-.05,Go,1],[a,Go+.02]],Ke.cx,Ke.zc,i,{mat:()=>Wn});let l=16,f=(g,y,b)=>[Ke.cx+Math.cos(g)*Math.cos(y)*b,Ke.dome.base+Math.sin(y)*b,Ke.zc+Math.sin(g)*Math.cos(y)*b],u=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<l;y++){let b=Math.PI*2*g/i,k=Math.PI*2*(g+1)/i,E=u*y/l,L=u*(y+1)/l,N=(O,te)=>[-Math.cos(O)*Math.cos(te),-Math.sin(te),-Math.sin(O)*Math.cos(te)],W=[e.vert(f(b,E,a),N(b,E),Kf),e.vert(f(k,E,a),N(k,E),Kf),e.vert(f(k,L,a),N(k,L),Kf),e.vert(f(b,L,a),N(b,L),Kf)];e.tri(W[0],W[1],W[2]),e.tri(W[0],W[2],W[3])}for(let g=0;g<X0.spokes;g++){let y=Math.PI*2*g/X0.spokes,b=[];for(let k=0;k<=14;k++)b.push(f(y,(u-.06)*k/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>Yf})}for(let g of X0.ringE){let y=Math.cos(g)*(a-.04),b=Ke.dome.base+Math.sin(g)*(a-.04),k=[];for(let E=0;E<=72;E++){let L=Math.PI*2*E/72;k.push([Ke.cx+Math.cos(L)*y,b,Ke.zc+Math.sin(L)*y])}e.tube(k,()=>.035,72,6,{mat:()=>Yf})}e.ellipsoid([Ke.cx,Ke.dome.base+a-.06,Ke.zc],[.16,.08,.16],6,12,{mat:()=>Yf});let h=.46,d=.55,v=.12,p=(g,y,b,k)=>{zr(e,g,h-.08,y,b,h,k,C1);let E=b-g>k-y?[g+.25,b-.25]:[g+.06,b-.06],L=b-g>k-y?[y+.06,k-.06]:[y+.25,k-.25];zr(e,E[0],0,L[0],E[1],h-.08,L[1],C1)};p(o-v-d,n+1.1,o-v,r-1.1),p(t+1,n+v,o-1.1,n+v+d),p(t+1,r-v-d,o-1.1,r-v);let m=i2;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],Ke.cx,Ke.zc,64,{mat:()=>C1}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],Ke.cx,Ke.zc,48,{mat:()=>P_})}function D_(e){I_(e),F_(e),e.curMat=[0,0,0]}var Ro=e=>e.toFixed(4);function s2(){let e=Ke.dome.r,t=X0.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${Ro(Qf[0])}, ${Ro(Qf[1])}, ${Ro(Qf[2])});

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
		float hw = ${Ro(X0.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Ro(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Ro(Math.PI*2/X0.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Ro(Rn.crownC[0])}, ${Ro(Rn.crownC[1])}, ${Ro(Rn.crownC[2])});
		vec3 r = vec3(${Ro(Rn.crownR[0])}, ${Ro(Rn.crownR[1])}, ${Ro(Rn.crownR[2])});
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
		float tt = (${Ro(Rn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Ro(Ke.cx)}, ${Ro(Ke.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Ro(Rn.trunkR*.7)}, ${Ro(Rn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function G_(){return`
	${s2()}

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
	}`}c2.exports={addAlcove:D_,alcoveLightGLSL:G_,oculusGLSL:s2,A:Ke,BENCH:i2,SHAFT:Qf,TREE:Rn}});var or=de((TA,f2)=>{"use strict";var La=0;try{let e=location.search;/[?&]night\b/.test(e)&&(La=1)}catch(e){}var pi=La,N1=0,l2=[],Zf={tick(e){let t=N1?Math.min(.1,e-N1):0;if(N1=e,pi!==La){let o=t/2.4;pi=La>pi?Math.min(La,pi+o):Math.max(La,pi-o)}return Zf.night},get night(){return pi*pi*(3-2*pi)},get isNight(){return La===1},get settled(){return pi===La},set(e){La=e?1:0,l2.forEach(t=>t(La))},toggle(){Zf.set(!La)},onChange(e){l2.push(e)}};Zf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;f2.exports=Zf});var Fi=de((LA,pl)=>{"use strict";var R1=or(),{C:P1}=lr(),{A:Jf,BENCH:ul}=pa(),Pn=Math.PI,$_=[18,29,40],eh=.575,Ii=[],dl=(e,t,o,n,r,a,i)=>Ii.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));$_.forEach(e=>{dl(1.25+eh+.48,3.25,e,[1,0],.48,eh,{s:1.2}),dl(12.75-eh-.48,3.25,e,[-1,0],.48,eh,{s:1.2})});[3,11].forEach(e=>dl(e,3.45,P1.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var q_=[14.63,19.63,24.03,28.43,32.83,P1.x1-.28];q_.forEach(e=>dl(e,3.15,P1.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>dl(.35+.44,2.75,e,[1,0],.44,99));{let e=(ul.inner+ul.outer)/2,t=Math.atan2(-1.12,-.98);Ii.push({x:Jf.cx+Math.cos(t)*e,y:ul.seat+.155,z:Jf.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[Jf.cx,Jf.zc,ul.outer+.07,ul.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var O1=.13,th=.21,Vn=O1/Math.cos(Pn/6),ko=e=>e.toFixed(4);function h2(e){let o=(e||Ii.map((n,r)=>r)).map(n=>{let r=Ii[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
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
		float t = mod(az + ${ko(Pn/6)}, ${ko(Pn/3)}) - ${ko(Pn/6)};
		float U = tan(t) / ${ko(Math.tan(Pn/6))};
		float V = (q.y / h) * (${ko(O1/th)} / cos(t));
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
	}`}var Wo=0,H_=1;function U_(){let e=[],t=[],o=[],n=[],r=[],a=(d,v,p,m)=>(e.push(d[0],d[1],d[2]),t.push(v[0],v[1],v[2]),o.push(p),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(d,v)=>[d[0]-v[0],d[1]-v[1],d[2]-v[2]],s=(d,v)=>[d[1]*v[2]-d[2]*v[1],d[2]*v[0]-d[0]*v[2],d[0]*v[1]-d[1]*v[0]],c=d=>{let v=Math.hypot(d[0],d[1],d[2])||1;return[d[0]/v,d[1]/v,d[2]/v]};function l(d,v,p,m,g,y){let b=c(s(i(v,d),i(m,d))),k=a(d,b,g,[0,0]),E=a(v,b,g,[1,0]),L=a(p,b,g,[1,1]),N=a(m,b,g,[0,1]);r.push(k,E,L,k,L,N),y&&r.push(k,L,E,k,N,L)}function f(d,v,p){for(let y=0;y<d.length;y++){let b=d[Math.max(0,y-1)],k=d[Math.min(d.length-1,y+1)],E=c(i(k,b)),L=Math.abs(E[1])>.9?[1,0,0]:[0,1,0],N=c(s(E,L)),W=s(N,E),O=typeof v=="function"?v(y/(d.length-1)):v;for(let te=0;te<=6;te++){let G=te/6*Pn*2,re=Math.cos(G),q=Math.sin(G),Y=[N[0]*re+W[0]*q,N[1]*re+W[1]*q,N[2]*re+W[2]*q];a([d[y][0]+Y[0]*O,d[y][1]+Y[1]*O,d[y][2]+Y[2]*O],Y,p)}}let g=e.length/3-d.length*7;for(let y=0;y<d.length-1;y++)for(let b=0;b<6;b++){let k=g+y*7+b,E=k+6+1;r.push(k,E,k+1,k+1,E,E+1)}}function u(d,v,p,m,g,y,b,k,E){let L=(N,W,O)=>{let te=y+Pn/6+O*Pn/3;return[d[0]+Math.cos(te)*N,W,d[2]+Math.sin(te)*N]};for(let N=0;N<6;N++)l(L(m,v,N+1),L(m,v,N),L(g,p,N),L(g,p,N+1),b);if(k&&g>0)for(let N=0;N<6;N++){let W=a([d[0],p,d[2]],[0,1,0],b),O=a(L(g,p,N),[0,1,0],b),te=a(L(g,p,N+1),[0,1,0],b);r.push(W,te,O)}if(E&&m>0)for(let N=0;N<6;N++){let W=a([d[0],v,d[2]],[0,-1,0],b),O=a(L(m,v,N),[0,-1,0],b),te=a(L(m,v,N+1),[0,-1,0],b);r.push(W,O,te)}}function h(d,v,p,m,g,y,b){let k=[];for(let L=0;L<=18;L++){let N=L/18,W=(b||0)+N*m*Pn*2,O=p*(1-.75*N);k.push([d[0]+v[0]*Math.cos(W)*O,d[1]+Math.sin(W)*O,d[2]+v[2]*Math.cos(W)*O])}f(k,g,y)}return Ii.forEach(d=>{let v=d.s,p=Math.atan2(d.o[1],d.o[0]),m=[d.x,d.y,d.z],g=(k,E,L)=>[d.x+d.o[0]*k-d.o[1]*(L||0),d.y+E,d.z+d.o[1]*k+d.o[0]*(L||0)],y=d.y-th*v,b=d.y+th*v;for(let k=0;k<6;k++){let E=p+Pn/6+k*Pn/3,L=E+Pn/3,N=Vn*v*.97,W=[d.x+Math.cos(E)*N,y,d.z+Math.sin(E)*N],O=[d.x+Math.cos(L)*N,y,d.z+Math.sin(L)*N];l(O,W,[W[0],b,W[2]],[O[0],b,O[2]],H_,!0)}for(let k=0;k<6;k++){let E=p+Pn/6+k*Pn/3,L=Vn*v;f([[d.x+Math.cos(E)*L,y-.02*v,d.z+Math.sin(E)*L],[d.x+Math.cos(E)*L,b+.02*v,d.z+Math.sin(E)*L]],.011*v,Wo)}u(m,y-.035*v,y,Vn*v*1.12,Vn*v*1.12,p,Wo,!0,!0),u(m,y-.1*v,y-.035*v,Vn*v*.55,Vn*v*1,p,Wo,!1,!0),u(m,y-.17*v,y-.1*v,0,Vn*v*.55,p,Wo,!1,!1);for(let k=0;k<6;k++){let E=p+k*Pn/3,L=O1*v*1.06,N=[d.x+Math.cos(E)*L,y-.06*v,d.z+Math.sin(E)*L];h(N,[-Math.sin(E),0,Math.cos(E)],.03*v,.85,.004*v,Wo,.3)}u(m,b,b+.03*v,Vn*v*1.14,Vn*v*1.14,p,Wo,!1,!0),u(m,b+.03*v,b+.2*v,Vn*v*1.14,Vn*v*.32,p,Wo,!1,!1),u(m,b+.2*v,b+.27*v,Vn*v*.34,Vn*v*.34,p,Wo,!1,!1),u(m,b+.27*v,b+.37*v,Vn*v*.42,0,p,Wo,!1,!0),f([[d.x,b+.36*v,d.z],[d.x,b+.47*v,d.z]],k=>.01*v*(1-.7*k),Wo),u([d.x,0,d.z],b+.44*v,b+.47*v,.018*v,0,p,Wo,!1,!0);for(let k=0;k<6;k++){let E=p+Pn/6+k*Pn/3,L=Vn*v*1.14,N=[d.x+Math.cos(E)*L,b+.03*v,d.z+Math.sin(E)*L];f([N,[N[0],N[1]+.09*v,N[2]]],W=>.008*v*(1-.8*W),Wo),u([N[0],0,N[2]],N[1]+.035*v,N[1]+.06*v,.014*v,.014*v,E,Wo,!0,!0)}if(d.mount==="wall"){let k=d.back,E=y-.32,L=g(-k,0,0);((G,re,q)=>{let Y=[d.o[0],0,d.o[1]],be=[-d.o[1],0,d.o[0]],qe=(Te,dt,qt)=>[L[0]+be[0]*Te+Y[0]*qt,dt,L[2]+be[2]*Te+Y[2]*qt],Ae=.03,he=.065;l(qe(-q,G,he),qe(q,G,he),qe(q,re,he),qe(-q,re,he),Wo,!0),l(qe(q,G,Ae),qe(q,G,he),qe(q,re,he),qe(q,re,Ae),Wo,!0),l(qe(-q,G,he),qe(-q,G,Ae),qe(-q,re,Ae),qe(-q,re,he),Wo,!0),l(qe(-q,re,he),qe(q,re,he),qe(q,re,Ae),qe(-q,re,Ae),Wo,!0),l(qe(-q,G,Ae),qe(q,G,Ae),qe(q,G,he),qe(-q,G,he),Wo,!0),u([L[0]+Y[0]*he,0,L[2]+Y[2]*he],re,re+.05,q*.6,0,p,Wo,!1,!0),u([L[0]+Y[0]*he,0,L[2]+Y[2]*he],G-.05,G,0,q*.6,p,Wo,!1,!1)})(E-.2,E+.2,.07);let W=[];for(let G=0;G<=14;G++){let re=G/14,q=-k+.05+re*(k-.05),Y=E+.04+(y-.17*v-E-.04)*Math.pow(re,2.2);W.push(g(q,Y-d.y,0))}f(W,G=>.022*(1-.3*G),Wo);let O=[];for(let G=0;G<=10;G++){let re=G/10;O.push(g(-k+.05+re*k*.6,E-.14+re*.16+.05*Math.sin(re*Pn)-d.y,0))}f(O,.009,Wo);let te=O[O.length-1];h([te[0]-d.o[0]*.03,te[1]+.02,te[2]-d.o[1]*.03],[d.o[0],0,d.o[1]],.045,1.1,.007,Wo,-.4),[.3,.55].forEach(G=>{let re=W[Math.round(G*14)],q=O[Math.round(G/.62*10)]||O[10];f([re,q],.006,Wo)}),[-1,1].forEach(G=>{let re=g(-.05,-th*v-.2*v,0);h([re[0]-d.o[1]*G*.05,re[1],re[2]+d.o[0]*G*.05],[-d.o[1]*G,0,d.o[0]*G],.05*v,.9,.006,Wo,Pn)})}else for(let k=0;k<3;k++){let E=p+k*Pn*2/3,L=[d.x+Math.cos(E)*Vn*v*.7,y-.035*v,d.z+Math.sin(E)*Vn*v*.7],N=[d.x+Math.cos(E)*Vn*v*1.25,y-.17*v,d.z+Math.sin(E)*Vn*v*1.25];f([L,N],.012*v,Wo)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}pl.exports=e=>{let t=U_(),o=e({vert:`
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
		${h2()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>R1.night}}),n=[],r=[];Ii.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>R1.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),R1.night>.01&&a()}};pl.exports.lanternGLSL=h2;pl.exports.LANTERNS=Ii;pl.exports.TREE_LANTERN=[Ii.length-1]});var $i=de((zA,qr)=>{"use strict";var B_=or(),To=Math.PI,On=e=>(+e).toFixed(4),j_=e=>`vec3(${On(e[0])}, ${On(e[1])}, ${On(e[2])})`,Tt={x:-7,z:44.5},jt=5.2,nr=15,Je={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},Ya={z0:42.2,z1:46.8,top:6.3,x:.35},rh=[Tt.x-Math.sqrt(jt*jt-3.05*3.05),0,0],mn={x0:-2.05+rh[0],x1:rh[0],z0:41.45,z1:47.55,top:4.3},I1=[[mn.x1+.05,2.35,mn.z0-.45],[mn.x1+.05,2.35,mn.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-Tt.z,e-Tt.x);return[Tt.x+Math.cos(n)*(jt-.16),t,Tt.z+Math.sin(n)*(jt-.16)]}),bo={ri:3.4,ro:jt,a0:-35*To/180,rise:.1836,step:3.6*To/180,n:88,thick:.36};bo.k=bo.rise/bo.step;var Cr=e=>bo.a0-e,Gi=e=>e*bo.k,Ko={x:Tt.x+.1,z:Tt.z-.15,yaw:-To/2,scale:1.3},vi=Ko.scale/1.1,vl={keyX0:Ko.x-.524*vi,keyX1:Ko.x+.491*vi,keyTop:.647*vi,keyFront:Ko.z+.808*vi,keyBack:Ko.z+.72*vi,stoolX:Ko.x-.041*vi,stoolZ:Ko.z+1.122*vi,stoolFront:Ko.z+.96*vi,stoolTop:.37*vi,heading:To},nh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function d2(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function W_(e,t){let o=1e9;for(let n=0;n<nh.length-1;n++){let[r,a]=nh[n],[i,s]=nh[n+1],c=i-r,l=s-a,f=Math.max(0,Math.min(1,((e-r)*c+(t-a)*l)/(c*c+l*l)));o=Math.min(o,Math.hypot(e-r-c*f,t-a-l*f))}return o}var oh=e=>Je.spring+Math.sqrt(Math.max(0,Je.r*Je.r-(e-Je.zc)*(e-Je.zc))),Di=e=>Tt.x+Math.sqrt(Math.max(0,jt*jt-(e-Tt.z)*(e-Tt.z)));function Y0(e,t){return Math.hypot(e-Tt.x,t-Tt.z)<jt||e<=0&&e>Tt.x&&t>Je.z0&&t<Je.z1||e>mn.x0&&e<mn.x1&&t>mn.z0&&t<mn.z1}function V_(e,t){if(Math.hypot(e-Tt.x,t-Tt.z)<bo.ri-.05)return 99;let n=Math.atan2(t-Tt.z,e-Tt.x),r=bo.a0-n;for(;r<0;)r+=2*To;for(;r>=2*To;)r-=2*To;return r>bo.n*bo.step?99:Gi(r)-bo.thick}function X_(){let e=[],t=d2(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let l=e[c];if(!(l[1]>.01)&&Math.hypot(l[0]-a,l[2]-i)<s+l[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-Ko.x,c=i-Ko.z,l=Math.cos(Ko.yaw),f=Math.sin(Ko.yaw),u=(l*s-f*c)/Ko.scale,h=(f*s+l*c)/Ko.scale;return u>-1.05&&u<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(jt-1.45),s=t()*2*To,c=Tt.x+Math.cos(s)*i,l=Tt.z+Math.sin(s)*i;if(!Y0(c,l)||i>jt-.18||n(c,l)||W_(c,l)<.62||V_(c,l)<2.3||c<mn.x1+.9)continue;let f=.022+t()*.02;if(o(c,l,f))continue;let u=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,l,f,u,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*bo.step,l=Cr(c),f=bo.ri+.55+t()*(bo.ro-bo.ri-.75),u=.022+t()*.016;e.push([Tt.x+Math.cos(l)*f,(a+1)*bo.rise,Tt.z+Math.sin(l)*f,u,.05+t()*.14,t()*100])}}for(let a of I1)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[mn.z0-.35,mn.z1+.35])for(let i=0;i<9;i++){let s=mn.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-Tt.x,c-Tt.z)>jt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function Y_(e){let o=d2(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,l=1e9;n.forEach((f,u)=>{let h=(s[0]-f[0])**2+(s[1]-f[1])**2*4+(s[2]-f[2])**2;h<l&&(l=h,c=u)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var F1=X_(),u2=Y_(F1.filter(e=>e[1]<2||e[1]>2.5)).concat(I1.map(e=>[e[0],e[1]+.35,e[2],.035]));function p2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${u2.map((t,o)=>`
		{
			vec3 d = ${j_(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${On(5.3+o*.71)} + ${On(o*1.9)}) + 0.06 * sin(time * ${On(11.7+o*1.3)} + ${On(o*.7)});
			float w = ${On(t[3]*u2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${On(nr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${On(Tt.x)}, ${On(nr)}, ${On(Tt.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${On(vl.stoolX)}, ${On(vl.keyFront+.1)})));
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
	}`}var Ft={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function v2(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),l=e.v(o,a,i,s&&s[1]),f=e.v(n,a,i,s&&s[2]),u=e.v(r,a,i,s&&s[3]);e.idx.push(c,l,f,c,f,u)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function K_(){let e=v2(),t=(n,r,a)=>[Tt.x+Math.cos(n)*r,a,Tt.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>mn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,l=a+.2;if(!(Y0(i,c)||Y0(s,c)||Y0(i,l)||Y0(s,l)||Y0((i+s)/2,(c+l)/2)))continue;let f=c,u=l;i>Di(Je.z0)-.3&&(f=Math.max(f,Je.z0),u=Math.min(u,Je.z1),u<=f)||e.quad([i,0,f],[i,0,u],[s,0,u],[s,0,f],[0,1,0],Ft.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*To,i=(r+1)/360*2*To,s=(a+i)/2,c=t(s,jt,0),l=0;c[0]>Tt.x&&c[2]>Je.z0-.02&&c[2]<Je.z1+.02&&(l=Math.max(oh(Math.min(Math.max(t(a,jt,0)[2],Je.z0),Je.z1)),oh(Math.min(Math.max(t(i,jt,0)[2],Je.z0),Je.z1)))),c[0]<Tt.x&&c[2]>mn.z0-.02&&c[2]<mn.z1+.02&&(l=mn.top);let f=a*jt,u=i*jt,h=o(a).map(p=>-p),d=o(i).map(p=>-p),v=[l];for(let p=Math.ceil(l/2.5)*2.5;p<nr;p+=2.5)p>l+.01&&v.push(p);v.push(nr);for(let p=0;p<v.length-1;p++){let m=v[p],g=v[p+1],y=e.v(t(a,jt,m),h,Ft.WALL,[f,m]),b=e.v(t(i,jt,m),d,Ft.WALL,[u,m]),k=e.v(t(i,jt,g),d,Ft.WALL,[u,g]),E=e.v(t(a,jt,g),h,Ft.WALL,[f,g]);e.idx.push(y,b,k,y,k,E)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*To,l=(s+1)/360*2*To,f=(c+l)/2,u=t(f,jt,0);if(r<1&&(u[0]>Tt.x&&u[2]>Je.z0&&u[2]<Je.z1||u[0]<Tt.x&&u[2]>mn.z0&&u[2]<mn.z1))continue;let h=jt-i;e.quad(t(c,h,r),t(l,h,r),t(l,h,r+a),t(c,h,r+a),o(f).map(d=>-d),Ft.WALL,[[c*jt,r+100],[l*jt,r+100],[l*jt,r+a+100],[c*jt,r+a+100]]),e.quad(t(c,h,r+a),t(l,h,r+a),t(l,jt,r+a),t(c,jt,r+a),[0,1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,jt,r),t(l,jt,r),t(l,h,r),t(c,h,r),[0,-1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=Ya.x;for(let[a,i]of[[Je.z0,1],[Je.z1,-1]]){let s=Di(a);e.quad([n,0,a],[s,0,a],[s,Je.spring,a],[n,Je.spring,a],[0,0,i],Ft.WALL,[[n,0],[s,0],[s,Je.spring],[n,Je.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*To,s=(a+1)/r*To,c=Je.zc-Math.cos(i)*Je.r,l=Je.zc-Math.cos(s)*Je.r,f=Je.spring+Math.sin(i)*Je.r,u=Je.spring+Math.sin(s)*Je.r,h=[0,-Math.sin(i),Math.cos(i)],d=[0,-Math.sin(s),Math.cos(s)],v=e.v([n,f,c],h,Ft.WALL,[n,i*Je.r]),p=e.v([Di(c),f,c],h,Ft.WALL,[Di(c),i*Je.r]),m=e.v([Di(l),u,l],d,Ft.WALL,[Di(l),s*Je.r]),g=e.v([n,u,l],d,Ft.WALL,[n,s*Je.r]);e.idx.push(v,p,m,v,m,g)}}{let n=Ya.x,r=.05;for(let l=Ya.z0;l<Ya.z1-1e-6;l+=r){let f=l,u=Math.min(Ya.z1,l+r),d=(v=>v>Je.z0&&v<Je.z1)((f+u)/2)?Math.max(oh(f),oh(u)):0;e.quad([n,d,f],[n,d,u],[n,Ya.top,u],[n,Ya.top,f],[1,0,0],Ft.HALLSTONE,[[f,d],[u,d],[u,Ya.top],[f,Ya.top]])}let a=.32,i=.06,s=n+i,c=36;for(let l=0;l<c;l++){let f=l/c*To,u=(l+1)/c*To,h=(g,y)=>[s,Je.spring+Math.sin(g)*y,Je.zc-Math.cos(g)*y],d=Je.r,v=Je.r+a;e.quad(h(f,d),h(u,d),h(u,v),h(f,v),[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let p=(g,y,b)=>[b,Je.spring+Math.sin(g)*y,Je.zc-Math.cos(g)*y],m=[0,Math.sin((f+u)/2),-Math.cos((f+u)/2)];e.quad(p(f,v,n),p(u,v,n),p(u,v,s),p(f,v,s),m,Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(p(f,d,n),p(u,d,n),p(u,d,s),p(f,d,s),m.map(g=>-g),Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[l,f,u]of[[Je.z0-a,Je.z0,-1],[Je.z1,Je.z1+a,1]]){e.quad([s,0,l],[s,0,f],[s,Je.spring,f],[s,Je.spring,l],[1,0,0],Ft.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=u<0?l:f,d=u<0?f:l;e.quad([n,0,h],[s,0,h],[s,Je.spring,h],[n,Je.spring,h],[0,0,u],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,d],[s,0,d],[s,Je.spring,d],[n,Je.spring,d],[0,0,-u],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let v=Je.spring-.16,p=.16,m=.11,g=Math.min(l,f)-.05,y=Math.max(l,f)+.05;e.quad([n+m,v,g],[n+m,v,y],[n+m,v+p,y],[n+m,v+p,g],[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v+p,g],[n+m,v+p,g],[n+m,v+p,y],[n,v+p,y],[0,1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v,g],[n,v,y],[n+m,v,y],[n+m,v,g],[0,-1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,v,b],[n+m,v,b],[n+m,v+p,b],[n,v+p,b],[0,0,b===g?-1:1],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let l=Je.spring+Je.r-.05,f=Je.spring+Je.r+a+.12,u=.16,h=.22,d=s+.04;e.quad([d,l,Je.zc-u],[d,l,Je.zc+u],[d,f,Je.zc+h],[d,f,Je.zc-h],[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let v of[-1,1])e.quad([n,l,Je.zc+v*u],[d,l,Je.zc+v*u],[d,f,Je.zc+v*h],[n,f,Je.zc+v*h],[0,0,v],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,f,Je.zc-h],[d,f,Je.zc-h],[d,f,Je.zc+h],[n,f,Je.zc+h],[0,1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=mn;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],Ft.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[l,f]of[[a,1],[i,-1]]){let u=Tt.x-Math.sqrt(jt*jt-(l-Tt.z)*(l-Tt.z));e.quad([n,0,l],[u,0,l],[u,s,l],[n,s,l],[0,0,f],Ft.WALL,[[n,0],[u,0],[u,s],[n,s]])}let c=24;for(let l=0;l<c;l++){let f=a+(i-a)*l/c,u=a+(i-a)*(l+1)/c,h=Tt.x-Math.sqrt(jt*jt-(f-Tt.z)**2),d=Tt.x-Math.sqrt(jt*jt-(u-Tt.z)**2);e.quad([n,s,f],[h,s,f],[d,s,u],[n,s,u],[0,-1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let l=0;l<c;l++){let f=a+(i-a)*l/c,u=a+(i-a)*(l+1)/c,h=Tt.x-Math.sqrt(jt*jt-(f-Tt.z)**2)+.05,d=Tt.x-Math.sqrt(jt*jt-(u-Tt.z)**2)+.05;e.quad([h,s-.3,f],[d,s-.3,u],[d,s,u],[h,s,f],[1,0,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,jt];for(let a=0;a<120;a++){let i=a/120*2*To,s=(a+1)/120*2*To,c=(i+s)/2;c>To&&(c-=2*To);for(let l=0;l<r.length-1;l++){let f=r[l],u=r[l+1],h=c*180/To;f>=3.3&&h>8&&h<85||e.quad(t(i,f,nr),t(i,u,nr),t(s,u,nr),t(s,f,nr),[0,-1,0],Ft.CEIL,[[i*f,f],[i*u,u],[s*u,u],[s*f,f]])}e.quad(t(i,1.15,nr),t(s,1.15,nr),t(s,1.15,nr+.7),t(i,1.15,nr+.7),o(c).map(l=>-l),Ft.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([Tt.x,nr+.7,Tt.z],t(s,1.15,nr+.7),t(i,1.15,nr+.7),[0,-1,0],Ft.OCULUS)}}{let n=bo.ri,r=bo.ro,a=bo.n*bo.step;for(let c=0;c<bo.n;c++){let l=c*bo.step,f=(c+1)*bo.step,u=Cr(l),h=Cr(f),d=(c+1)*bo.rise,v=c*bo.rise,p=2;for(let y=0;y<p;y++){let b=u+(h-u)*y/p-(y===0?.004:0),k=u+(h-u)*(y+1)/p;e.quad(t(b,n,d),t(b,r,d),t(k,r,d),t(k,n,d),[0,1,0],Ft.STEP,[[n*b,c],[r*b,c],[r*k,c],[n*k,c]])}let m=[-Math.sin(u),0,Math.cos(u)],g=u-.004;e.quad(t(g,n,v),t(g,r,v),t(g,r,d),t(g,n,d),m,Ft.STEP,[[n*u,c+.5],[r*u,c+.5],[r*u,c+.5],[n*u,c+.5]]),e.quad(t(u,n,Gi(l)+.06),t(h,n,Gi(f)+.06),t(h,n,d),t(g,n,d),o((u+h)/2).map(y=>-y),Ft.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*To/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let l=c/i*a,f=(c+1)/i*a,u=Cr(l),h=Cr(f),d=Gi(l),v=Gi(f),p=d-bo.thick,m=v-bo.thick,g=o(u).map(N=>-N),y=o(h).map(N=>-N),b=e.v(t(u,n,p),g,Ft.STRING,[l*n,0]),k=e.v(t(h,n,m),y,Ft.STRING,[f*n,0]),E=e.v(t(h,n,v+.06),y,Ft.STRING,[f*n,1]),L=e.v(t(u,n,d+.06),g,Ft.STRING,[l*n,1]);e.idx.push(b,k,E,b,E,L);for(let N=0;N<s.length-1;N++){let W=s[N],O=s[N+1],te=G=>{let re=o(G);return[-re[0]*.12,-.99,-re[2]*.12]};e.quad(t(u,W,p),t(u,O,p),t(h,O,m),t(h,W,m),te((u+h)/2),Ft.SOFFIT,[[l*W,W],[l*O,O],[f*O,O],[f*W,W]])}}}return e}function Q_(){let e=v2(),t=bo.ri+.045,o=bo.n*bo.step,n=Math.ceil(o/(.8*To/180)),r=.92,a=(c,l,f)=>[Tt.x+Math.cos(c)*l,f,Tt.z+Math.sin(c)*l],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let l=c/n*o,f=(c+1)/n*o,u=Cr(l),h=Cr(f),d=Gi(l)+.06,v=Gi(f)+.06,p=i(u).map(N=>-N),m=i(h).map(N=>-N),g=l*t,y=f*t,b=e.v(a(u,t,d),p,Ft.RAILING,[g,0]),k=e.v(a(h,t,v),m,Ft.RAILING,[y,0]),E=e.v(a(h,t,v+r),m,Ft.RAILING,[y,r]),L=e.v(a(u,t,d+r),p,Ft.RAILING,[g,r]);e.idx.push(b,k,E,b,E,L)}((c,l,f,u)=>{let d=p=>{let m=Cr(p),g=Gi(p)+.06+l,y=a(m,t+c,g),b=i(m),k=[];for(let E=0;E<8;E++){let L=E/8*2*To,N=[b[0]*Math.cos(L),Math.sin(L),b[2]*Math.cos(L)];k.push([[y[0]+N[0]*f,y[1]+N[1]*f,y[2]+N[2]*f],N])}return k},v=d(0);for(let p=1;p<=n;p++){let m=d(p/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(v[g][0],v[g][1],u),k=e.v(m[g][0],m[g][1],u),E=e.v(m[y][0],m[y][1],u),L=e.v(v[y][0],v[y][1],u);e.idx.push(b,k,E,b,E,L)}v=m}})(0,r+.02,.028,Ft.IRON);for(let c of I1){let l=Math.atan2(c[2]-Tt.z,c[0]-Tt.x),f=[Math.cos(l),0,Math.sin(l)],u=12;for(let p=0;p<u;p++){let m=p/u*2*To,g=(p+1)/u*2*To,y=(b,k,E)=>[c[0]+Math.cos(b)*k,E,c[2]+Math.sin(b)*k];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Ft.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Ft.IRON)}let h=[c[0]+f[0]*.16,c[1]-.35,c[2]+f[2]*.16],d=[-f[2],0,f[0]],v=.018;e.quad([h[0]-d[0]*v,h[1],h[2]-d[2]*v],[h[0]+d[0]*v,h[1],h[2]+d[2]*v],[c[0]+d[0]*v,c[1]-.05,c[2]+d[2]*v],[c[0]-d[0]*v,c[1]-.05,c[2]-d[2]*v],[-f[0],.5,-f[2]],Ft.IRON)}{let c=Cr(0),l=a(c,t,0),f=10;for(let u=0;u<f;u++){let h=u/f*2*To,d=(u+1)/f*2*To,v=(p,m,g)=>[l[0]+Math.cos(p)*m,g,l[2]+Math.sin(p)*m];e.quad(v(h,.035,0),v(d,.035,0),v(d,.035,r+.1),v(h,.035,r+.1),[Math.cos((h+d)/2),0,Math.sin((h+d)/2)],Ft.IRON),e.quad(v(h,.06,r+.1),v(d,.06,r+.1),v(d,.03,r+.2),v(h,.03,r+.2),[Math.cos((h+d)/2)*.8,.6,Math.sin((h+d)/2)*.8],Ft.IRON)}}return e}function Z_(){let e=[],t=[],o=[],n=[];for(let a of F1){let[i,s,c,l,f,u]=a,h=e.length/3;for(let v=0;v<=7;v++){let p=v/7*2*To+u,m=Math.cos(p),g=Math.sin(p);e.push(i+m*l,s,c+g*l,i+m*l,s+f,c+g*l),t.push(m,0,g,m,0,g),o.push(0,f,u,1,f,u)}for(let v=0;v<7;v++){let p=h+v*2;n.push(p,p+2,p+3,p,p+3,p+1)}let d=e.length/3;e.push(i,s+f-.006,c),t.push(0,1,0),o.push(2,f,u);for(let v=0;v<7;v++){let p=v/7*2*To+u;e.push(i+Math.cos(p)*l,s+f,c+Math.sin(p)*l),t.push(0,1,0),o.push(1,f,u)}for(let v=0;v<7;v++)n.push(d,d+1+v,d+1+(v+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function J_(){let e=[],t=[],o=[],n=[];for(let r of F1){let[a,i,s,,c,l]=r,f=e.length/3;for(let u of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(u[0],u[1]),o.push(l);n.push(f,f+1,f+2,f,f+2,f+3)}return{ctr:e,corner:t,ph:o,idx:n}}function e6(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let l=new Int8Array(e,i,o*3);i+=o*3;let f=new Uint8Array(e,i,o),u=new Float32Array(o*3),h=new Float32Array(o*3),d=new Float32Array(o),v=Math.cos(Ko.yaw),p=Math.sin(Ko.yaw),m=Ko.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,k=(r[2]+s[g*3+2]/65535*a[2])*m;u[g*3]=Ko.x+v*y+p*k,u[g*3+1]=b,u[g*3+2]=Ko.z-p*y+v*k;let E=l[g*3]/127,L=l[g*3+1]/127,N=l[g*3+2]/127;h[g*3]=v*E+p*N,h[g*3+1]=L,h[g*3+2]=-p*E+v*N,d[g]=f[g]}return{pos:u,nrm:h,mat:d,idx:new Uint32Array(c)}}function t6(){let e=[],t=(u,h)=>[Tt.x+Math.cos(u)*h,Tt.z+Math.sin(u)*h];e.push([[0,Je.z0],[Di(Je.z0),Je.z0]]),e.push([[Di(Je.z1),Je.z1],[0,Je.z1]]);let o=Math.asin((Je.z1-Tt.z)/jt),n=72;for(let u=0;u<n;u++){let h=o+u/n*(2*To-2*o),d=o+(u+1)/n*(2*To-2*o);e.push([t(h,jt-.25),t(d,jt-.25)])}let r=rh[0]-.55+.35;e.push([[r,mn.z0],[r,mn.z1]]);let a=2.4/bo.k,i=12;for(let u=0;u<i;u++){let h=Cr(u/i*a),d=Cr((u+1)/i*a);e.push([t(h,bo.ri-.2),t(d,bo.ri-.2)])}e.push([t(Cr(0),bo.ri-.2),t(Cr(0),jt)]),e.push([t(Cr(a),bo.ri-.2),t(Cr(a),jt)]);let s=Math.cos(Ko.yaw),c=Math.sin(Ko.yaw),l=Ko.scale,f=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([u,h])=>[Ko.x+(s*u+c*h)*l,Ko.z+(-c*u+s*h)*l]);for(let u=0;u<4;u++)e.push([f[u],f[(u+1)%4]]);return e}qr.exports=e=>{let t=K_(),o=Q_(),n=Z_(),r=J_(),a=Fi(),i=`
	precision highp float;
	${B_.GLSL}
	uniform float time;
	${p2()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${On(nr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${On(Tt.x)}, ${On(Tt.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${On((bo.ri+bo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${On(Tt.x)}, ${On(Tt.z)});
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:new Uint32Array(t.idx),cull:{enable:!1}}),l=e({vert:s,frag:`${i}
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
		}`,attributes:{position:o.pos,normal:o.nrm,kind:o.kind,uv:o.uv},elements:new Uint32Array(o.idx),cull:{enable:!1}}),f=e({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=e6(m);h=e({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let d=(()=>{let m=[],g=[],y=[],b=[],E=[Tt.x,nr-.3,Tt.z],L=[vl.stoolX,.02,vl.keyFront+.1],N=1.25,W=2.35;for(let O=0;O<=40;O++){let te=O/40*2*To,G=Math.cos(te),re=Math.sin(te);m.push(E[0]+G*N,E[1],E[2]+re*N,L[0]+G*W,L[1],L[2]+re*W),g.push(G,.08,re,G,.08,re),y.push(1,0)}for(let O=0;O<40;O++){let te=O*2;b.push(te,te+1,te+3,te,te+3,te+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),v=e({vert:`
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
		}`,attributes:{position:d.pos,normal:d.nrm,hh:d.hh},elements:d.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function p(m){let g=m&&m.reflected;c(),l(),f(),h&&h(),g||(v(),u({halo:1}),u({halo:0}))}return p};qr.exports.C=Tt;qr.exports.R=jt;qr.exports.PASS=Je;qr.exports.SURR=Ya;qr.exports.OFF=rh;qr.exports.BAY=mn;qr.exports.PATH=nh;qr.exports.PIANO=Ko;qr.exports.PLAY=vl;qr.exports.TOP=nr;qr.exports.roomGLSL=p2;qr.exports.segments=t6});var E2=de((CA,k2)=>{"use strict";var o6=Ss(),{addFlutedColumn:m2,addStatue:n6,addPlant:r6}=Bm(),g2=Pi(),a6=H0(),za=lr(),i6=pa(),Q0=$i(),fo=14,xn=za.C.hallEnd+.35,Oo=8,Mo=.35,D1=1.15,G1=1.15,$1=[18,29,40],s6=[[[0,0],[0,Q0.PASS.z0]],[[0,Q0.PASS.z1],[0,xn]],[[fo,xn],[fo,0]],[[0,0],[fo,0]],[[fo,xn],[0,xn]]],w2=[];for(let e of $1)for(let t of[1.25,fo-1.25]){let o=D1/2,n=G1/2;w2.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var ih=12,_2=2.95,M2=.62,lh=_2+M2,sh=[{file:"venus.bin",x:1.85,z:xn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:fo-2.1,z:xn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:za.NICHE_X[0],z:za.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:za.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:za.NICHE_X[1],z:za.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:za.NICHE_PLINTH_TOP,mat:3}],c6={x0:Mo,x1:3.15,z0:3.6,z1:8.2,top:1},x2=.8,fh=1.17,ml=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{ml.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),ml.push({x:fo-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function q1(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var hh=[];for(let e of[-1,1])hh.push(...q1(fo/2+e*lh,ih,.85,.85));for(let e of sh.filter(t=>t.pedestal))hh.push(...q1(e.x,e.z,fh*1.1,fh*1.1));for(let e of ml)hh.push(...q1(e.x,e.z,.42,.42));var l6=s6.concat(w2,hh,Q0.segments());function f6(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let l=a;l<=i;l++)for(let f=s;f<=c;f++)n(l,f,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let l=-1;l<=1;l++)for(let f=-1;f<=1;f++){let u=o.get(i+l+":"+(s+f));u&&c.push(...u)}return[...new Set(c)]}}}var ch=[],gn={curMat:[0,0,0]};function H1(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=gn.curMat;return ch.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function wo(e,t,o,n,r,a,i,s,c){let l=(f,u,h,d,v)=>{o.push(...H1(e,t,f,u,h,d,v))};l([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),l([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),l([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),l([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),l([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),l([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function K0(e,t,o,n,r){let a=gn,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),l=a.vert(n,r);a.tri(i,s,c),a.tri(s,l,c)}function y2(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,f=Math.cos(c),u=Math.sin(c),h=Math.cos(l),d=Math.sin(l),v=[e+o*f,t+o*u],p=[e+o*h,t+o*d],m=[e+n*f,t+n*u],g=[e+n*h,t+n*d];K0([v[0],v[1],r],[p[0],p[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),K0([v[0],v[1],a],[p[0],p[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+l)/2;K0([v[0],v[1],r],[p[0],p[1],r],[v[0],v[1],a],[p[0],p[1],a],[-Math.cos(y),-Math.sin(y),0]),K0([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function h6(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,f=e+o*Math.cos(c),u=t+o*Math.sin(c),h=e+o*Math.cos(l),d=t+o*Math.sin(l);K0([f,u,r],[h,d,r],[f,n,r],[h,n,r],[0,0,-1]),K0([f,u,a],[h,d,a],[f,n,a],[h,n,a],[0,0,1])}}function u6(e,t,o,n){let r=fo/2,a=_2,i=3,s=a+.42,c=s+.15,l=M2,f=lh,u=5.98,h=n-.45,d=n+.45,v=64,p=m2(gn,r-f,n,0,u,l);m2(gn,r+f,n,0,u,l),gn.curMat=[0,0,0],y2(r,i,a,s,h,d,v),y2(r,i,s,c,h-.07,d+.07,v),h6(r,i,c,p+.05,h,d,v);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*f;wo(e,t,o,Math.min(y,b),i,h,Math.max(y,b),p+.05,d)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);wo(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=f+l*1.42+.45;wo(e,t,o,r-m,p,n-.7,r+m,p+.44,n+.7),wo(e,t,o,r-m+.12,p+.44,n-.62,r+m-.12,p+.7,n+.62),wo(e,t,o,r-m-.1,p+.7,n-.84,r+m+.1,p+.84,n+.84),wo(e,t,o,r-m-.22,p+.84,n-.96,r+m+.22,p+1,n+.96),wo(e,t,o,r-.3,i+a-.1,n-.56,r+.3,p,n+.56)}function b2(e,t,o,n,r){wo(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),wo(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),wo(e,t,o,n-D1/2,.4,r-G1/2,n+D1/2,Oo-1.35,r+G1/2),wo(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),wo(e,t,o,n-.67,Oo-1.58,r-.67,n+.67,Oo-1.35,r+.67),wo(e,t,o,n-.82,Oo-1.35,r-.82,n+.82,Oo-1.05,r+.82),wo(e,t,o,n-.66,Oo-1.05,r-.66,n+.66,Oo-.78,r+.66),wo(e,t,o,n-.92,Oo-.78,r-.92,n+.92,Oo-.55,r+.92),wo(e,t,o,n-.78,Oo-.55,r-.78,n+.78,Oo-.3,r+.78),wo(e,t,o,n-.92,Oo-.3,r-.92,n+.92,Oo-.1,r+.92)}function ah(e,t,o,n,r){r==="left"?(wo(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),wo(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(wo(e,t,o,fo-.14,1,n-3.8/2,fo+.08,5.7,n+3.8/2),wo(e,t,o,fo-.18,1+.18,n-3.8/2+.18,fo+.08+.04,5.7-.18,n+3.8/2-.18))}function d6(e,t,o,n){wo(e,t,o,.65,Oo-.16,n-1.65,.65+.22,Oo,n+1.65),wo(e,t,o,fo-.65-.22,Oo-.16,n-1.65,fo-.65,Oo,n+1.65),wo(e,t,o,.65,Oo-.16,n-1.65,fo-.65,Oo,n-1.43),wo(e,t,o,.65,Oo-.16,n+1.43,fo-.65,Oo,n+1.65),o.push(...H1(e,t,[.65+.22,Oo-.16,n-1.43],[fo-.65-.22,Oo-.16,n-1.43],[.65+.22,Oo-.16,n+1.43],[fo-.65-.22,Oo-.16,n+1.43],[0,-1,0]))}k2.exports=function(){let e=[],t=[],o=[];ch=[],gn=o6.createBuilder(e,t,o,ch),o.push(...H1(e,t,[0,0,0],[fo,0,0],[0,0,xn],[fo,0,xn],[0,1,0])),a6.addSkylight(gn,[0,0,0],xn),gn.curMat=[0,0,0];{let c=Q0.SURR;wo(e,t,o,-Mo,0,0,Mo,Oo,c.z0),wo(e,t,o,-Mo,0,c.z1,Mo,Oo,xn),wo(e,t,o,-Mo,c.top,c.z0,Mo,Oo,c.z1)}wo(e,t,o,fo-Mo,0,za.C.z1,fo+Mo,Oo,xn-Mo),wo(e,t,o,fo-Mo-.12,0,za.C.z1+2*Mo,fo-Mo,.42,xn-Mo),wo(e,t,o,fo-Mo-.07,.42,za.C.z1+2*Mo,fo-Mo,.5,xn-Mo);for(let[c,l]of[[0,Q0.SURR.z0],[Q0.SURR.z1,xn-Mo]])wo(e,t,o,Mo,0,c,Mo+.12,.42,l),wo(e,t,o,Mo,.42,c,Mo+.07,.5,l);wo(e,t,o,Mo,0,xn-Mo-.12,fo-Mo,.42,xn-Mo),wo(e,t,o,Mo,.42,xn-Mo-.07,fo-Mo,.5,xn-Mo),g2.addEntranceWall(gn),g2.addFrames(gn),gn.curMat=[0,0,0],wo(e,t,o,-Mo,0,xn-Mo,fo+Mo,Oo,xn+Mo),u6(e,t,o,ih);for(let c of $1)b2(e,t,o,1.25,c),b2(e,t,o,fo-1.25,c);ah(e,t,o,22,"left"),ah(e,t,o,25,"right"),ah(e,t,o,33,"left"),ah(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)d6(e,t,o,c);za.addWing(gn),gn.curMat=[0,0,0];for(let c of sh.filter(l=>l.pedestal))n6(gn,c.x,c.z,fh,x2);{let c=c6;gn.curMat=[0,0,0],gn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),gn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),gn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),gn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}i6.addAlcove(gn);for(let c of ml)r6(gn,c.x,c.z,c.seed,1,c.away);gn.curMat=[0,0,0];let r=[[[fo,xn-.35],[0,xn-.35]],[[0,3],[0,10]],[[fo,15],[fo,22]],[[0,24],[0,31]],[[fo,33],[fo,40]],[[0,41],[0,46]]],a=f6(l6),i=(c,l)=>{let f=0,u=1/0;return r.forEach((h,d)=>{let v=(h[0][0]+h[1][0])/2,p=(h[0][1]+h[1][1])/2,m=Math.hypot(c-v,l-p);m<u&&(u=m,f=d)}),f},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:sh,occluders:[...$1.flatMap(c=>[[1.25,c,.78],[fo-1.25,c,.78]]),[fo/2-lh,ih,.86],[fo/2+lh,ih,.86],...sh.filter(c=>c.pedestal).map(c=>[c.x,c.z,fh*1.12]),...ml.map(c=>[c.x,c.z,.34])],pedestalTop:x2,mat:ch,getAreaIndex:i,getGridSegments:(c,l)=>a.get(c,l),getGridParts:(c,l)=>a.get(c,l),position:e,normal:t,elements:o}}});var U1=de((NA,S2)=>{"use strict";var{doorLightGLSL:p6}=Pi(),{skylightGLSL:v6}=H0(),{windowLightGLSL:m6,C:Zr}=lr(),{alcoveLightGLSL:g6}=pa(),va=e=>e.toFixed(4),x6=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();S2.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([d,v,p])=>`ao = min(ao, contact(v_pos.xz, vec2(${d.toFixed(3)}, ${v.toFixed(3)}), ${p.toFixed(3)}));`).join(`
      `),i={c:[0,0,0,0],d:[1,0,0,0]},s=-1,c=[],l=d=>{let v=d&&d.tick!==void 0?d.tick:0;if(v!==s||c.length===0){s=v;let p=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-p[0],m.c[2]-p[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(i)}return c},f={},u="",h="";for(let d=0;d<8;d++)f["lightC"+d]=v=>l(v)[d].c,f["lightD"+d]=v=>l(v)[d].d,u+="uniform vec4 lightC"+d+", lightD"+d+`;
`,h+="pic += pictureLight(lightC"+d+", lightD"+d+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Fi().lanternGLSL()}

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

    ${p6()}

    ${v6()}

    ${m6()}

    ${g6()}

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
        step(abs(v_pos.z - ${va(Zr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${va((Zr.z0+Zr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${va(Zr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${x6}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${va(Zr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${va(Zr.z0)} || v_pos.z > ${va(Zr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${va(Zr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${va(Zr.z0)}), ${va(Zr.z1)} - v_pos.z), ${va(Zr.x1)} - v_pos.x);
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
        if (v_pos.z < ${va(Zr.z0+.3)} && v_pos.x > ${va(Zr.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:f,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var T2=de((RA,A2)=>{"strict mode";var y6="https://api.artic.edu/api/v1/artworks/search",b6=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,w6="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",_6="&fields=image_id,title,artist_title",M6={low:400,mid:843,high:1686};A2.exports={fetchList:async function(e,t){let o=y6+w6+_6+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=b6(e,M6[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var C2=de((PA,z2)=>{"use strict";var k6=h1(),E6=ha(),S6=e=>"images/web/"+e.slug+(E6.isPhone?"-1024":"")+".webp";async function L2(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}z2.exports={fetchList:async function(e,t){return k6.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await L2(S6(e))}catch(o){t=await L2("images/"+e.file)}return{title:e.title,image:t}}}});var R2=de((OA,N2)=>{"strict mode";N2.exports={default:"local",artic:T2(),local:C2()}});var j1=de((IA,O2)=>{"strict mode";var Cs=document.createElement("canvas"),B1=Cs.width=Cs.height=1024,qi=Cs.getContext("2d");qi.mozImageSmoothingEnabled=!1;qi.webkitImageSmoothingEnabled=!1;qi.font="32px Verdana";qi.textBaseline="bottom";qi.fillStyle="#aaa";function P2(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),l,f;for(l=f=c.length;e.measureText(r).width>o&&l>1;){l--,r=a="";for(var u=0;u<f;u++)u<l?(r+=c[u],u+1<l&&(r+=" ")):(a+=c[u],u+1<f&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=P2(e,a,o,n),i>s&&(s=i)),s}O2.exports={init(e,t,o=B1){var n=[];P2(qi,t,Math.min(o*B1,B1),n),qi.clearRect(0,0,Cs.width,Cs.height);for(var r=0;r<n.length;r++)qi.fillText(n[r],0,Cs.height-(Math.max(n.length,3)-r)*32);return e({data:Cs,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var D2=de((FA,F2)=>{"strict mode";var W1=R2(),A6=new URLSearchParams(window.location.search).get("api"),I2=W1[A6]||W1[W1.default],T6=j1(),V1={},J0=[],L6=2;function z6(e){return(!navigator.connection||navigator.connection.downlink<L6)&&(e=e=="high"?"mid":"low"),e}var C6=ha(),Z0=document.createElement("canvas");Z0.width=Z0.height=C6.isPhone?1024:2048;var K1=Z0.getContext("2d");K1.imageSmoothingEnabled=!0;K1.imageSmoothingQuality="high";var X1=!1,N6=e=>[(J0.pop()||e.texture)([[[200,200,200]]]),t=>(J0.pop()||e.texture)([[[0,0,0,0]]]),1];async function Y1(e,t,o){X1===!1&&(X1=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await I2.fetchImage(t,z6(o));r=a.title,n=await createImageBitmap(a.image),K1.drawImage(n,0,0,Z0.width,Z0.height)}catch(a){return console.error(a),o=="high"?await Y1(e,t,"low"):N6(e)}return[(J0.pop()||e.texture)({data:Z0,min:"mipmap",mipmap:"nice",aniso:X1,flipY:!0}),a=>T6.init(J0.pop()||e.texture,r,a),n.width/n.height]}F2.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(V1).length;I2.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(V1[s.image_id]){--t===0&&r();return}V1[s.image_id]=s,Y1(e,s,o).then(([c,l,f])=>{n({...s,tex:c,textGen:l,aspect:f}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,Y1(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(J0.push(e.tex),e.tex=void 0),e.text&&(J0.push(e.text),e.text=void 0)}}});var $2=de((DA,G2)=>{G2.exports=R6;function R6(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var H2=de((GA,q2)=>{q2.exports=P6;function P6(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var B2=de(($A,U2)=>{U2.exports=O6;function O6(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Q1=de((qA,j2)=>{j2.exports=I6;function I6(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var V2=de((HA,W2)=>{W2.exports=F6;function F6(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var Y2=de((UA,X2)=>{X2.exports=D6;function D6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],d=t[11],v=t[12],p=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,k=o*l-a*i,E=n*c-r*s,L=n*l-a*s,N=r*l-a*c,W=f*p-u*v,O=f*m-h*v,te=f*g-d*v,G=u*m-h*p,re=u*g-d*p,q=h*g-d*m,Y=y*q-b*re+k*G+E*te-L*O+N*W;return Y?(Y=1/Y,e[0]=(s*q-c*re+l*G)*Y,e[1]=(r*re-n*q-a*G)*Y,e[2]=(p*N-m*L+g*E)*Y,e[3]=(h*L-u*N-d*E)*Y,e[4]=(c*te-i*q-l*O)*Y,e[5]=(o*q-r*te+a*O)*Y,e[6]=(m*k-v*N-g*b)*Y,e[7]=(f*N-h*k+d*b)*Y,e[8]=(i*re-s*te+l*W)*Y,e[9]=(n*te-o*re-a*W)*Y,e[10]=(v*L-p*k+g*y)*Y,e[11]=(u*k-f*L-d*y)*Y,e[12]=(s*O-i*G-c*W)*Y,e[13]=(o*G-n*O+r*W)*Y,e[14]=(p*b-v*E-m*y)*Y,e[15]=(f*E-u*b+h*y)*Y,e):null}});var Q2=de((BA,K2)=>{K2.exports=G6;function G6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],d=t[11],v=t[12],p=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-d*m)-u*(c*g-l*m)+p*(c*d-l*h),e[1]=-(n*(h*g-d*m)-u*(r*g-a*m)+p*(r*d-a*h)),e[2]=n*(c*g-l*m)-s*(r*g-a*m)+p*(r*l-a*c),e[3]=-(n*(c*d-l*h)-s*(r*d-a*h)+u*(r*l-a*c)),e[4]=-(i*(h*g-d*m)-f*(c*g-l*m)+v*(c*d-l*h)),e[5]=o*(h*g-d*m)-f*(r*g-a*m)+v*(r*d-a*h),e[6]=-(o*(c*g-l*m)-i*(r*g-a*m)+v*(r*l-a*c)),e[7]=o*(c*d-l*h)-i*(r*d-a*h)+f*(r*l-a*c),e[8]=i*(u*g-d*p)-f*(s*g-l*p)+v*(s*d-l*u),e[9]=-(o*(u*g-d*p)-f*(n*g-a*p)+v*(n*d-a*u)),e[10]=o*(s*g-l*p)-i*(n*g-a*p)+v*(n*l-a*s),e[11]=-(o*(s*d-l*u)-i*(n*d-a*u)+f*(n*l-a*s)),e[12]=-(i*(u*m-h*p)-f*(s*m-c*p)+v*(s*h-c*u)),e[13]=o*(u*m-h*p)-f*(n*m-r*p)+v*(n*h-r*u),e[14]=-(o*(s*m-c*p)-i*(n*m-r*p)+v*(n*c-r*s)),e[15]=o*(s*h-c*u)-i*(n*h-r*u)+f*(n*c-r*s),e}});var J2=de((jA,Z2)=>{Z2.exports=$6;function $6(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],l=e[8],f=e[9],u=e[10],h=e[11],d=e[12],v=e[13],p=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,k=o*s-n*i,E=o*c-r*i,L=n*c-r*s,N=l*v-f*d,W=l*p-u*d,O=l*m-h*d,te=f*p-u*v,G=f*m-h*v,re=u*m-h*p;return g*re-y*G+b*te+k*O-E*W+L*N}});var tg=de((WA,eg)=>{eg.exports=q6;function q6(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],l=t[6],f=t[7],u=t[8],h=t[9],d=t[10],v=t[11],p=t[12],m=t[13],g=t[14],y=t[15],b=o[0],k=o[1],E=o[2],L=o[3];return e[0]=b*n+k*s+E*u+L*p,e[1]=b*r+k*c+E*h+L*m,e[2]=b*a+k*l+E*d+L*g,e[3]=b*i+k*f+E*v+L*y,b=o[4],k=o[5],E=o[6],L=o[7],e[4]=b*n+k*s+E*u+L*p,e[5]=b*r+k*c+E*h+L*m,e[6]=b*a+k*l+E*d+L*g,e[7]=b*i+k*f+E*v+L*y,b=o[8],k=o[9],E=o[10],L=o[11],e[8]=b*n+k*s+E*u+L*p,e[9]=b*r+k*c+E*h+L*m,e[10]=b*a+k*l+E*d+L*g,e[11]=b*i+k*f+E*v+L*y,b=o[12],k=o[13],E=o[14],L=o[15],e[12]=b*n+k*s+E*u+L*p,e[13]=b*r+k*c+E*h+L*m,e[14]=b*a+k*l+E*d+L*g,e[15]=b*i+k*f+E*v+L*y,e}});var ng=de((VA,og)=>{og.exports=H6;function H6(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,l,f,u,h,d,v,p,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],l=t[3],f=t[4],u=t[5],h=t[6],d=t[7],v=t[8],p=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=l,e[4]=f,e[5]=u,e[6]=h,e[7]=d,e[8]=v,e[9]=p,e[10]=m,e[11]=g,e[12]=i*n+f*r+v*a+t[12],e[13]=s*n+u*r+p*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=l*n+d*r+g*a+t[15]),e}});var ag=de((XA,rg)=>{rg.exports=U6;function U6(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var sg=de((YA,ig)=>{ig.exports=B6;function B6(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,l,f,u,h,d,v,p,m,g,y,b,k,E,L,N,W,O,te,G,re,q,Y,be;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),l=Math.cos(o),f=1-l,u=t[0],h=t[1],d=t[2],v=t[3],p=t[4],m=t[5],g=t[6],y=t[7],b=t[8],k=t[9],E=t[10],L=t[11],N=r*r*f+l,W=a*r*f+i*c,O=i*r*f-a*c,te=r*a*f-i*c,G=a*a*f+l,re=i*a*f+r*c,q=r*i*f+a*c,Y=a*i*f-r*c,be=i*i*f+l,e[0]=u*N+p*W+b*O,e[1]=h*N+m*W+k*O,e[2]=d*N+g*W+E*O,e[3]=v*N+y*W+L*O,e[4]=u*te+p*G+b*re,e[5]=h*te+m*G+k*re,e[6]=d*te+g*G+E*re,e[7]=v*te+y*G+L*re,e[8]=u*q+p*Y+b*be,e[9]=h*q+m*Y+k*be,e[10]=d*q+g*Y+E*be,e[11]=v*q+y*Y+L*be,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var lg=de((KA,cg)=>{cg.exports=j6;function j6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],l=t[8],f=t[9],u=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+l*n,e[5]=i*r+f*n,e[6]=s*r+u*n,e[7]=c*r+h*n,e[8]=l*r-a*n,e[9]=f*r-i*n,e[10]=u*r-s*n,e[11]=h*r-c*n,e}});var hg=de((QA,fg)=>{fg.exports=W6;function W6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],l=t[8],f=t[9],u=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-l*n,e[1]=i*r-f*n,e[2]=s*r-u*n,e[3]=c*r-h*n,e[8]=a*n+l*r,e[9]=i*n+f*r,e[10]=s*n+u*r,e[11]=c*n+h*r,e}});var dg=de((ZA,ug)=>{ug.exports=V6;function V6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],l=t[4],f=t[5],u=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+l*n,e[1]=i*r+f*n,e[2]=s*r+u*n,e[3]=c*r+h*n,e[4]=l*r-a*n,e[5]=f*r-i*n,e[6]=u*r-s*n,e[7]=h*r-c*n,e}});var vg=de((JA,pg)=>{pg.exports=X6;function X6(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],l=Math.sqrt(i*i+s*s+c*c);return Math.abs(l)<1e-6?null:(l=1/l,i*=l,s*=l,c*=l,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var gg=de((eT,mg)=>{mg.exports=Y6;function Y6(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,l=a+a,f=n*s,u=n*c,h=n*l,d=r*c,v=r*l,p=a*l,m=i*s,g=i*c,y=i*l;return e[0]=1-(d+p),e[1]=u+y,e[2]=h-g,e[3]=0,e[4]=u-y,e[5]=1-(f+p),e[6]=v+m,e[7]=0,e[8]=h+g,e[9]=v-m,e[10]=1-(f+d),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var yg=de((tT,xg)=>{xg.exports=K6;function K6(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var wg=de((oT,bg)=>{bg.exports=Q6;function Q6(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var Mg=de((nT,_g)=>{_g.exports=Z6;function Z6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Eg=de((rT,kg)=>{kg.exports=J6;function J6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Ag=de((aT,Sg)=>{Sg.exports=eM;function eM(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Lg=de((iT,Tg)=>{Tg.exports=tM;function tM(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,l=o*i,f=n*i,u=n*s,h=r*i,d=r*s,v=r*c,p=a*i,m=a*s,g=a*c;return e[0]=1-u-v,e[1]=f+g,e[2]=h-m,e[3]=0,e[4]=f-g,e[5]=1-l-v,e[6]=d+p,e[7]=0,e[8]=h+m,e[9]=d-p,e[10]=1-l-u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Cg=de((sT,zg)=>{zg.exports=oM;function oM(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),l=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*l,e[15]=0,e}});var Rg=de((cT,Ng)=>{Ng.exports=nM;function nM(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var Og=de((lT,Pg)=>{Pg.exports=rM;function rM(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),l=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*l*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var Fg=de((fT,Ig)=>{Ig.exports=aM;function aM(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),l=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*l,e[15]=1,e}});var Gg=de((hT,Dg)=>{var iM=Q1();Dg.exports=sM;function sM(e,t,o,n){var r,a,i,s,c,l,f,u,h,d,v=t[0],p=t[1],m=t[2],g=n[0],y=n[1],b=n[2],k=o[0],E=o[1],L=o[2];return Math.abs(v-k)<1e-6&&Math.abs(p-E)<1e-6&&Math.abs(m-L)<1e-6?iM(e):(f=v-k,u=p-E,h=m-L,d=1/Math.sqrt(f*f+u*u+h*h),f*=d,u*=d,h*=d,r=y*h-b*u,a=b*f-g*h,i=g*u-y*f,d=Math.sqrt(r*r+a*a+i*i),d?(d=1/d,r*=d,a*=d,i*=d):(r=0,a=0,i=0),s=u*i-h*a,c=h*r-f*i,l=f*a-u*r,d=Math.sqrt(s*s+c*c+l*l),d?(d=1/d,s*=d,c*=d,l*=d):(s=0,c=0,l=0),e[0]=r,e[1]=s,e[2]=f,e[3]=0,e[4]=a,e[5]=c,e[6]=u,e[7]=0,e[8]=i,e[9]=l,e[10]=h,e[11]=0,e[12]=-(r*v+a*p+i*m),e[13]=-(s*v+c*p+l*m),e[14]=-(f*v+u*p+h*m),e[15]=1,e)}});var qg=de((uT,$g)=>{$g.exports=cM;function cM(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var ec=de((dT,Hg)=>{Hg.exports={create:$2(),clone:H2(),copy:B2(),identity:Q1(),transpose:V2(),invert:Y2(),adjoint:Q2(),determinant:J2(),multiply:tg(),translate:ng(),scale:ag(),rotate:sg(),rotateX:lg(),rotateY:hg(),rotateZ:dg(),fromRotation:vg(),fromRotationTranslation:gg(),fromScaling:yg(),fromTranslation:wg(),fromXRotation:Mg(),fromYRotation:Eg(),fromZRotation:Ag(),fromQuat:Lg(),frustum:Cg(),perspective:Rg(),perspectiveFromFieldOfView:Og(),ortho:Fg(),lookAt:Gg(),str:qg()}});var jg=de((pT,Bg)=>{"use strict";var Ug=D2(),fn=ec(),Ns=lr(),lM=3e3,uh="high",Z1,xl=.36,yl=13.64,tc=Ns.C.hallEnd-.01,bl=Ns.C.z0+.01,fM=.356,hM=13.644,uM=Ns.C.hallEnd-.006,dM=Ns.C.z0+.006,pM=.12,ph=4,oc=e=>fr[e]&&fr[e].cy||ph,J1=.26,vM=5.6,mM=7,fr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:tc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Ns.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Ns.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Ns.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function gM(e,t){let o=t&&t.maxH||vM,n=t&&t.maxW||mM,r=Math.min(o,n/e);return{width:r*e,height:r}}function xM(e,t,o){let n=fr[o],r=[],a=oc(o)-t/2;return n.side==="left"?(fn.fromTranslation(r,[xl,a,n.z+e/2]),fn.rotateY(r,r,Math.PI/2)):n.side==="right"?(fn.fromTranslation(r,[yl,a,n.z-e/2]),fn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?fn.fromTranslation(r,[n.x-e/2,a,bl]):(fn.fromTranslation(r,[7+e/2,a,tc]),fn.rotateY(r,r,Math.PI)),fn.scale(r,r,[e,t,pM]),r}function yM(e,t,o){let n=fr[o],r=[],a=oc(o)-t/2;return n.side==="left"?(fn.fromTranslation(r,[xl,a,n.z+e/2]),fn.rotateY(r,r,Math.PI/2)):n.side==="right"?(fn.fromTranslation(r,[yl,a,n.z-e/2]),fn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?fn.fromTranslation(r,[n.x-e/2,a,bl]):(fn.fromTranslation(r,[7+e/2,a,tc]),fn.rotateY(r,r,Math.PI)),r}function bM(e,t,o){let n=fr[o],r=[],a=oc(o)-t/2-J1-.38;return n.side==="left"?(fn.fromTranslation(r,[fM,a,n.z+e/2]),fn.rotateY(r,r,Math.PI/2)):n.side==="right"?(fn.fromTranslation(r,[hM,a,n.z-e/2]),fn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?fn.fromTranslation(r,[n.x-e/2,a,dM]):(fn.fromTranslation(r,[7+e/2,a,uM]),fn.rotateY(r,r,Math.PI)),fn.scale(r,r,[2,2,2]),r}function wM(e,t,o){let n=fr[o],r=oc(o)-t/2-J1-.38;return n.side==="left"?[xl+.55,r,n.z]:n.side==="right"?[yl-.55,r,n.z]:n.side==="corridor"?[n.x,r,bl+.55]:[7,r,tc-.55]}var gl=.42;function dh(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function _M(e,t,o){let n=fr[o],r,a,i;n.side==="left"?(r=[xl,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[yl,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,bl],a=[1,0,0],i=[0,0,1]):(r=[7,tc],a=[1,0,0],i=[0,0,-1]);let s=oc(o)+t/2+J1+.3,c=Math.min(2.4,Math.max(.9,e*.55)),l=(d,v)=>[r[0]+i[0]*d,v,r[1]+i[2]*d],f=[.075,.062,.05],u=[{fixmodel:dh(l(.014,s),a,i,.1,.13,.028),fixcol:f,fixglow:0},{fixmodel:dh(l(gl/2,s),a,i,.02,.02,gl),fixcol:f,fixglow:0},{fixmodel:dh(l(gl,s),a,i,c,.034,.05),fixcol:f,fixglow:0},{fixmodel:dh(l(gl-.012,s-.019),a,i,c*.94,.006,.028),fixcol:f,fixglow:1}],h=l(gl,s-.02);return{fixtures:u,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}Bg.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!fr[i])return;let{width:s,height:c}=gM(a.aspect,fr[i]),l=_M(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=l.light),o.push({...a,fixtures:l.fixtures,side:fr[i].side,model:xM(s,c,i),framemodel:yM(s,c,i),framesize:[s,c],textmodel:bM(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:wM(s,c,i),paintingPosition:fr[i].side==="left"?[xl+.05,ph,fr[i].z]:fr[i].side==="right"?[yl-.05,ph,fr[i].z]:fr[i].side==="corridor"?[fr[i].x,oc(i),bl+.05]:[7,ph,tc-.05],textGen:null})};return Ug.fetch(e,fr.length,uh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Ug.load(e,a,uh)}),uh="low",Z1&&clearTimeout(Z1),Z1=setTimeout(()=>{uh="high"},lM)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Yg=de((vT,Xg)=>{"use strict";var MM=j1(),Wg=ha(),Vg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function kM(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];Vg.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<Vg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,l=(n+1)*4+a;o.push(i,s,l,i,l,c)}return{verts:t,elems:o}}var EM=`#extension GL_OES_standard_derivatives : enable
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
}`,SM=`
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
}`;Xg.exports=e=>{let t=MM.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Fi().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(Wg.isPhone?1024:2048),detail:()=>Wg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=kM(),r=e({frag:EM,vert:SM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var vh=de((mT,Kg)=>{"use strict";var mi=[-90,0,0],ed=16,td=27.5,od=11.6;Kg.exports={O:mi,W:ed,L:td,RIDGE:od,BOX:[mi[0]-.8,0,mi[2]-11.5,mi[0]+ed+.8,od+.5,mi[2]+td+.8],AIR_BOX:[mi[0],0,mi[2],mi[0]+ed,od,mi[2]+td]}});var gh=de((gT,ox)=>{"use strict";var{A:rr}=pa(),{C:En}=lr(),{DOOR:nc}=Pi(),Xn=$i(),rc=vh(),Jg=En.hallEnd+.35,ex={arch:[13.6,0,rr.zc-rr.arch.r-.3,14.4,rr.arch.spring+rr.arch.r+.3,rr.zc+rr.arch.r+.3],mouth:[13.3,0,En.z0-.3,14.3,8.2,En.z1+.3],stair:[-.5,0,Xn.SURR.z0-.2,.5,Xn.SURR.top+.3,Xn.SURR.z1+.2],door:[nc.x0-.4,0,-.5,nc.x1+.4,nc.top+.4,.5],windows:[15.6,.4,En.z1-.2,36.9,6.4,En.z1+.9],farDoor:[En.x1-.2,0,En.zc-nc.r-.4,En.x1+.9,nc.top+.4,En.zc+nc.r+.4]},gi={court:[rr.x0-.4,0,rr.z0-.3,rr.x1+.3,rr.domeTop+.5,rr.z1+.3],stair:[Xn.C.x-Xn.R-2.6,0,Xn.C.z-Xn.R-1.5,.5,15.6,Xn.C.z+Xn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,En.z1,46,60,En.z1+110],florence:[En.x1,-1,En.zc-30,En.x1+80,60,En.zc+30],studio:rc.BOX},AM=[[0,0,0,14,0,Jg],[13.6,0,En.z0,En.x1+.4,0,En.z1],[rr.x0-.4,0,rr.z0,rr.x1,0,rr.z1],[Xn.C.x-Xn.R-2.6,0,Xn.C.z-Xn.R,.4,0,Xn.C.z+Xn.R],[rc.BOX[0],0,rc.BOX[2],rc.BOX[3],0,rc.BOX[5]]],TM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Ml=new Float64Array(24),Ca=[7,2,2],tx=0,xi="out",mh=!0;try{/[?&]nocull\b/.test(location.search)&&(mh=!1)}catch(e){}var wl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},_l={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Qg=!0;function LM(e){let t=s=>[e[s],e[4+s],e[8+s],e[12+s]],o=t(0),n=t(1),r=t(2),a=t(3),i=(s,c,l,f)=>{for(let u=0;u<4;u++)Ml[s*4+u]=c[u]+l*f[u]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function Hi(e,t){if(!mh)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=Ml[r*4],i=Ml[r*4+1],s=Ml[r*4+2],c=Ml[r*4+3],l=a>0?e[3]:e[0],f=i>0?n:o,u=s>0?e[5]:e[2];if(a*l+i*f+s*u+c<0)return!1}return!0}var nd=(e,t)=>Ca[0]>e[0]-t&&Ca[0]<e[3]+t&&Ca[2]>e[2]-t&&Ca[2]<e[5]+t;function zM(e){if(nd(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-Ca[0],a=(n&2?e[5]:e[2])-Ca[2],i=Math.atan2(r,a)-tx;i-=Math.round(i/(2*Math.PI))*2*Math.PI,t=Math.min(t,i),o=Math.max(o,i)}return o-t>Math.PI?null:[t,o]}function Zg(e,t,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=zM(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of e){let s=ex[i];if(!nd(s,.6)&&(!Hi(s,o)||!a(s)))return!1}return Hi(t,o)&&a(t)}function CM(){let e=Ca[0],t=Ca[2],o=rc.BOX;return e>o[0]&&e<o[3]&&t>o[2]&&t<o[5]?"studio":e<0&&t>Xn.C.z-Xn.R-1.5&&e>Xn.C.x-Xn.R-2.6?"stair":e>14.1&&t>rr.z0-.3&&t<rr.z1+.3&&e<rr.x1+.3?"court":e>13.9&&t>En.z0-.4&&t<En.z1+.1&&e<En.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<Jg?"hall":"out"}var NM={PORTAL:ex,ROOM:gi,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*e[r*4+s];n[r*4+a]=i}LM(n),Ca[0]=o[0],Ca[1]=o[1],Ca[2]=o[2],tx=Math.atan2(-e[2],-e[10]),xi=CM();for(let r in gi){if(r==="studio"||xi==="studio"){wl[r]=_l[r]=r==="studio"&&xi==="studio";continue}if(!mh||xi==="out"||xi===r||nd(gi[r],.3))wl[r]=Hi(gi[r],!1)||xi===r,_l[r]=Hi(gi[r],!0)||xi===r;else{let a=TM[xi][r];wl[r]=a?Zg(a,gi[r],!1):Hi(gi[r],!1),_l[r]=a?Zg(a,gi[r],!0):Hi(gi[r],!0)}}Qg=!mh||AM.some(r=>Hi(r,!1))},get zone(){return xi},room(e,t){return t?_l[e]:wl[e]},box(e,t,o){return o&&!(t?_l[o]:wl[o])?!1:Hi(e,t)},get floor(){return Qg}};ox.exports=NM});var rx=de((xT,nx)=>{"use strict";var RM=U1(),PM=gh();function OM(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let u=0;u<3;u++)a.push(t.getFloat32(12+u*4,!0)),i.push(t.getFloat32(24+u*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let l=new Uint16Array(e,s,r);s+=r*2;let f=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:l,nrm:f}}nx.exports=(e,t)=>{let o=[],n=[],r=[],a=[],i=null,s=t.statues.length,c=[],l=(u,h)=>{let d=o.length/3,v=h.height*.75,p=h.base!==void 0?h.base:t.pedestalTop;c.push({offset:a.length,count:u.nI,box:[h.x-v,p-.1,h.z-v,h.x+v,p+h.height+.2,h.z+v]});let m=h.height,g=Math.cos(h.yaw),y=Math.sin(h.yaw),b=h.base!==void 0?h.base:t.pedestalTop;for(let k=0;k<u.nV;k++){let E=(u.mn[0]+u.pos[k*3]/65535*u.sz[0])*m,L=(u.mn[1]+u.pos[k*3+1]/65535*u.sz[1])*m,N=(u.mn[2]+u.pos[k*3+2]/65535*u.sz[2])*m;o.push(h.x+g*E+y*N,b+L,h.z-y*E+g*N);let W=u.nrm[k*3]/127,O=u.nrm[k*3+1]/127,te=u.nrm[k*3+2]/127;n.push(g*W+y*te,O,-y*W+g*te),r.push(h.mat||1,0,0)}for(let k=0;k<u.nI;k++)a.push(d+u.idx[k])},f=()=>{a.length!==0&&(i=RM(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1,!0))};return t.statues.forEach(u=>{fetch("res/"+u.file).then(h=>{if(!h.ok)throw new Error("Could not load "+u.file);return h.arrayBuffer()}).then(h=>l(OM(h),u)).catch(h=>console.error(h)).then(()=>{--s===0&&f()})}),function(u){if(!i)return;let h=!!(u&&u.reflected),d=c.filter(v=>PM.box(v.box,h));d.length&&i(d)}}});var vx=de((yT,ad)=>{"use strict";var IM=Ss(),In=1.29032,Ps=[9.2968,2,5.9],FM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],xh=2147.64,ax=725,ix=1288,sx=1450,cx=2576,Hr=-5.197,Is=3.865,Ui=10.135,Fs=-14.679,kl=-30.229,El=7.232,lx=-45.713,ac=17.1*In,Os=16.6*In,Sl=16.6*In,fx=[6.9,17.1],yh=[2.95,16.6],DM=1.6,GM=0,$M=1,hx=2,rd=3,ux=4,dx=5,qM=6;function HM(){let e=[],t=[],o=[],n=[],r=IM.createBuilder(e,t,o,n),a=(l,f,u,h,d,v,p=1,m=1)=>{let g=[];for(let y=0;y<=p;y++){let b=[];for(let k=0;k<=m;k++){let E=[l[0]+f[0]*y/p+u[0]*k/m,l[1]+f[1]*y/p+u[1]*k/m,l[2]+f[2]*y/p+u[2]*k/m],L=v(E);b.push(r.vert(E,h,[d,L[0],L[1]]))}g.push(b)}for(let y=0;y<p;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=l=>f=>[(Ps[2]-f[2])/In-l,f[1]/In];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],GM,l=>[l[0]/In,l[2]/In],13,14),a([Is,0,Hr],[0,0,Fs-Hr],[0,ac,0],[1,0,0],$M,i(8.6),6,6),a([-40,0,Hr],[Is+40,0,0],[0,ac,0],[0,0,1],hx,l=>[(Is-l[0])/In,l[1]/In],8,4),a([-40,0,-.36],[0,0,Hr+.36],[0,ac,0],[1,0,0],hx,l=>[-l[2]/In,l[1]/In]),a([Ui,0,-80],[0,0,Hr+80],[0,Os,0],[-1,0,0],ux,i(8.6),12,6),a([Ui,0,Hr],[60,0,0],[0,Os,0],[0,0,1],dx,l=>[(l[0]-Ui)/In,l[1]/In],8,4),a([70,0,Hr],[0,0,-.36-Hr],[0,Os,0],[-1,0,0],dx,l=>[-l[2]/In,l[1]/In]);let s=l=>[(l[0]-Ps[0])/In+4.18,l[1]/In];a([-20,0,kl],[El+20,0,0],[0,Sl,0],[0,0,1],rd,s,8,6),a([El,0,kl],[0,0,lx-kl],[0,Sl,0],[1,0,0],rd,i(28),4,4),a([El,0,lx],[Ui-El,0,0],[0,Os,0],[0,0,1],ux,l=>[(l[0]-Ps[0])/In,l[1]/In],2,4),a([-20,0,Fs],[0,0,kl-Fs],[0,Sl,0],[1,0,0],rd,i(16),4,4);let c=(l,f,u,h)=>a(l,f,u,h,qM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function Rs(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Na=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",UM=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Fs],[Is,ac,Hr]],[[Ui,0,-80],[70,Os,Hr]],[[-20,0,-80],[El,Sl,kl]],[[-40,0,-80],[-20,Sl,Fs]]],BM=UM.map(e=>`if (hitBox(ro, rd, ${Na(e[0])}, ${Na(e[1])}, 1e4) ) return 0.0;`).join(`
		`),px="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>FM[t][e].toFixed(6)).join(", ")).join(", ")+")",jM=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Na([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	vec3 ro = ${Na(Ps)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Na([-40,0,Fs])}, ${Na([Is-.02,ac,Hr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Na([Ui+.02,0,-80])}, ${Na([70,Os,Hr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${px} * (p - ${Na(Ps)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${ax.toFixed(2)} + ${xh.toFixed(3)} * pc.x / pc.z) / ${sx.toFixed(1)},
		(${ix.toFixed(2)} - ${xh.toFixed(3)} * pc.y / pc.z) / ${cx.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${px} * (p - ${Na(Ps)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${ax.toFixed(2)} + ${xh.toFixed(3)} * pc.x / pc.z) / ${sx.toFixed(1)},
		(${ix.toFixed(2)} - ${xh.toFixed(3)} * pc.y / pc.z) / ${cx.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Na(Ps)}), n));
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
		base = texture2D(cobbleTex, fuv / ${DM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${fx[0].toFixed(2)}, 1.0 - fuv.y / ${fx[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${yh[0].toFixed(2)}, 1.0 - fuv.y / ${yh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${yh[0].toFixed(2)}, 1.0 - fuv.y / ${yh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Is-.05).toFixed(3)} && v_pos.x < ${(Ui+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Fs.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Hr+4.5).toFixed(3)};
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
}`,WM=`
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
}`,VM=or();ad.exports=e=>{let t=HM(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Rs(e,"res/street/photo.jpg",o,[190,160,120]),i=Rs(e,"res/street/photo_night.jpg",o,[12,14,22]),s=Rs(e,"res/street/photo_mask.png",o,[255,255,255]),c=Rs(e,"res/street/facade_pink.jpg",n,[200,150,135]),l=Rs(e,"res/street/facade_yellow.jpg",n,[225,180,95]),f=Rs(e,"res/street/facade_cream.jpg",n,[215,200,175]),u=Rs(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),d=e({frag:jM,vert:WM,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:l,creamTex:f,cobbleTex:u,photoNight:i,night:()=>VM.night,time:()=>(Date.now()-h)/1e3}});return function(){d()}};ad.exports.layout={MOUTH_Z:Hr,PINK_X:Is,RIGHT_X:Ui,PINK_H:ac,CREAM_H:Os,S:In}});var xx=de((bT,gx)=>{"use strict";var XM=or().GLSL,{glassPanes:YM}=Pi(),mx=lr();function KM(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(YM(),[0,0,1]),o(mx.windowGlass(),[0,0,1]),o(mx.farDoorGlass(),[1,0,0]),{position:e,normal:t}}gx.exports=e=>{let t=KM(),o=e({frag:`
		precision highp float;
		${XM}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var Ox=de((wT,fd)=>{"use strict";var kx=or().GLSL,QM=Ss(),id=ha(),{wallWithHoles:ZM,C:Wi}=lr(),rt=.28,Z={westBack:14.4,westCol:15-rt,eastCol:37.4+rt,eastBack:41.8,south:Wi.z1+.7,northCol:Wi.z1+.7+16,northBack:Wi.z1+.7+19,cx:(15+37.4)/2,cz:(Wi.z1+.7+Wi.z1+.7+16-rt)/2},Lo={x0:Z.westCol+rt,x1:Z.eastCol-rt,z0:Z.south,z1:Z.northCol-rt},vr=3.3,Ll=.92,Vi=5.6,yx=6,ma=11.9,ji=9.6,ro={x0:Z.cx-2.9,x1:Z.cx+2.9,top:14.4},Sh=7,Ex=4,cd=(Z.eastCol-Z.westCol)/Sh,JM=(Z.northCol-Z.south)/Ex,Sx=3,Cl=.26,qs=1.4,Gs=1.1,wh=3,Ka=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),We={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},Qa=[],Ax=(e,t,o)=>[Z.cx+e,t,Z.cz+o],_h=Ax(-5.9,0,3.4),Xi=.85,Bi={c:[_h[0],4.6*Xi+.5,_h[2]],r:[5*Xi,3.6*Xi,4.5*Xi]},Tx=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[_h[0]+e.d[0]*Xi,e.d[1]*Xi+.5,_h[2]+e.d[2]*Xi],r:e.r.map(t=>t*Xi),n:e.n}));for(let e of Tx)Qa.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var ek=[3.6,6.3,9];for(let e of ek){let t=8.6+e%1.7*.6;Qa.push({c:Ax(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var tk=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:Z.cx+e.d[0],z:Z.cz+e.d[1],bloom:e.bloom}));for(let e of tk)Qa.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var ld=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[Z.cx+Math.cos(t)*2.3,Z.cz+Math.sin(t)*2.3]});for(let[e,t]of ld)Qa.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Lx=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),l=Math.floor(c/.9);for(let f=0;f<=l;f++){let u=f/l,h=o+(r-o)*u,d=n+(a-n)*u;i!==void 0&&Math.abs((r!==o?h:d)-i)<s||Lx.push([h,d])}};e(Lo.x0+.45,Lo.z0+1.2,Lo.x0+.45,Lo.z1-.45,Z.cz,1),e(Lo.x1-.45,Lo.z0+1.2,Lo.x1-.45,Lo.z1-.45,Z.cz,1),e(Lo.x0+.45,Lo.z1-.45,Lo.x1-.45,Lo.z1-.45,Z.cx,1.9)}var ok=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Mh=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function sc(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Fn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function nk(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var rk={north:[e=>[e[0],e[1],Z.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[Z.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[Z.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function zx(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var ak=zx(Z.westCol,cd,Sh,rt+Cl,rt+Cl),bx=zx(Z.south,JM,Ex,.32,rt+Cl),ic=[Z.cx-32.35,Z.northCol-77],ik=Array.from({length:Sh-1},(e,t)=>Z.westCol+(t+1)*cd),Cx=e=>(e[1]-e[0])/2-.2,zl=e=>(e[0]+e[1])/2;function sk(e,t){let o=zl(e),n=Cx(e);return{u0:e[0],u1:e[1],bottom:t?0:Ll,head:r=>{let a=Math.abs(r-o);return a<n?vr+Math.sqrt(n*n-a*a):vr},step:.05}}function ck(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[We.STONE,0,0]}}function lk(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[We.STONE,0,0]}}function wx(e,t,o){let[n,r]=rk[t],a=nk(e,n,r),i=[];o.arches.forEach((f,u)=>i.push(sk(f,u===o.open)));let s=[];for(let f of o.bays||o.arches){let u=zl(f);o.oculi&&i.push(ck(u,6.85,.3)),s.push({c:u,y0:o.win[0],y1:o.win[1],w:1.05})}for(let f of o.extraWindows||[])s.push(f);for(let f of s)i.push(lk(f.c,f.w,f.y0,f.y1));for(let f of o.extraHoles||[])i.push(f);ZM(a,{u0:o.u0,u1:o.u1,w0:-rt,w1:rt,top:o.top,holes:i,mat:[We.BRICK,0,0],revealMat:[We.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(f,u,h,d,v,p,m)=>{let g=n([f,u,h]),y=n([d,v,p]);Fn(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},l=(f,u,h,d,v,p)=>sc(a,f,u,h,d,v,[p,0,0]);for(let f of o.arches){let u=zl(f),h=Cx(f),d=28;for(let v of[rt,-rt]){let p=v>0?1:-1,m=v+p*.025;for(let g=0;g<d;g++){let y=Math.PI*g/d,b=Math.PI*(g+1)/d,k=(G,re)=>[u+Math.cos(G)*re,vr+Math.sin(G)*re],E=k(y,h),L=k(b,h),N=k(y,h+.26),W=k(b,h+.26);l([E[0],E[1],m],[L[0],L[1],m],[W[0],W[1],m],[N[0],N[1],m],[0,0,p],We.STONE);let O=Math.cos((y+b)/2),te=Math.sin((y+b)/2);l([N[0],N[1],v],[W[0],W[1],v],[W[0],W[1],m],[N[0],N[1],m],[O,te,0],We.STONE)}}}if(o.arches.forEach((f,u)=>{u!==o.open&&c(f[0]-.02,Ll,-rt-.05,f[1]+.02,Ll+.09,rt+.05,We.STONE)}),c(o.u0,yx,-rt,o.u1,yx+.18,rt+.09,We.STONE),c(o.u0,o.win[0]-.12,rt-.01,o.u1,o.win[0],rt+.06,We.STONE),o.cornice)for(let[f,u,h]of o.cornice)c(f,h-.22,rt-.01,u,h,rt+.16,We.STONE),c(f,h,rt-.01,u,h+.16,rt+.42,We.STONE);for(let{c:f,y0:u,y1:h,w:d,door:v}of s){let p=d/2;if(l([f-p-.01,u,.06],[f+p+.01,u,.06],[f+p+.01,h,.06],[f-p-.01,h,.06],[0,0,1],v?We.DARK:We.PANE),v){c(f-p-.16,0,rt-.01,f-p,h+.16,rt+.07,We.STONE),c(f+p,0,rt-.01,f+p+.16,h+.16,rt+.07,We.STONE),c(f-p-.16,h,rt-.01,f+p+.16,h+.2,rt+.09,We.STONE),c(f-p,0,.07,f+p,h-.02,.12,We.SHUTTER),c(f-.012,0,.12,f+.012,h-.02,.14,We.DARK);continue}for(let m of[-1,1]){let g=f+m*p;c(g+m*.02,u+.02,rt+.02,g+m*(p+.025),h-.02,rt+.06,We.SHUTTER)}c(f-p-.09,h,rt-.01,f+p+.09,h+.16,rt+.05,We.STONE),c(f-p-.09,u-.1,rt-.01,f+p+.09,u,rt+.09,We.STONE),c(f-.015,u,.06,f+.015,h,.09,We.SHUTTER),c(f-p,(u+h)/2-.015,.06,f+p,(u+h)/2+.015,.09,We.SHUTTER)}if(o.oculi)for(let f of o.bays||o.arches){let u=zl(f);l([u-.31,6.54,0],[u+.31,6.54,0],[u+.31,7.16,0],[u-.31,7.16,0],[0,0,1],We.DARK)}for(let f of o.cols){let u=Ll+.09,h=n([f,0,0]);Fn(e,h[0]-.24,u,h[2]-.24,h[0]+.24,u+.12,h[2]+.24,We.MARBLE),e.lathe([[.23,u+.12,1],[.24,u+.17],[.2,u+.24],[.215,u+.28],[.17,u+.34,1],[.165,u+.6],[.155,vr-.5],[.15,vr-.38,1],[.175,vr-.34,1],[.17,vr-.3],[.2,vr-.22],[.27,vr-.15],[.29,vr-.12,1]],h[0],h[2],18,{mat:()=>[We.MARBLE,0,0]}),Fn(e,h[0]-.29,vr-.12,h[2]-.29,h[0]+.29,vr+.01,h[2]+.29,We.STONE)}o.walk&&o.walk(e)}function fk(e){let t=[-1,0,1].map(r=>{let a=Z.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[We.STONE,0,0]}});wx(e,"north",{u0:Z.westCol-rt,u1:Z.eastCol+rt,top:r=>r>ro.x0+1e-6&&r<ro.x1-1e-6?ro.top:ma,cuts:[ro.x0,ro.x0+1e-5,ro.x1-1e-5,ro.x1],arches:ak,open:Sx,cols:ik,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[Z.westCol-rt-3.3,ro.x0,ma],[ro.x1,Z.eastCol+rt+3.3,ma],[ro.x0-.2,ro.x1+.2,ro.top]],walk:r=>{Fn(r,Lo.x0,Vi,Z.northCol+rt,Lo.x1,Vi+.2,Z.northBack,We.PLASTER),Fn(r,Lo.x0,0,Z.northBack,Lo.x1,Vi,Z.northBack+.3,We.PLASTER);for(let a of[Z.cx-7.2,Z.cx,Z.cx+7.2])sc(r,[a-.8,0,Z.northBack-.01],[a+.8,0,Z.northBack-.01],[a+.8,2.9,Z.northBack-.01],[a-.8,2.9,Z.northBack-.01],[0,0,-1],[We.DARK,0,0]),Fn(r,a-.98,0,Z.northBack-.06,a+.98,3.12,Z.northBack,We.STONE),sc(r,[a-.8,0,Z.northBack-.07],[a+.8,0,Z.northBack-.07],[a+.8,2.9,Z.northBack-.07],[a-.8,2.9,Z.northBack-.07],[0,0,-1],[We.DARK,0,0])}}),sc(e,[ro.x0,11,Z.northCol+.2],[ro.x1,11,Z.northCol+.2],[ro.x1,13.6,Z.northCol+.2],[ro.x0,13.6,Z.northCol+.2],[0,0,-1],[We.DARK,0,0]),Fn(e,ro.x0+.3,10.88,Z.northCol-rt-.06,ro.x1-.3,11,Z.northCol-rt+.1,We.STONE),Fn(e,Z.westBack,Vi+.2,Z.northBack,Z.eastBack,ma,Z.northBack+3.4,We.BRICK),Fn(e,Z.westBack,ji,Z.northCol-rt,Z.westCol-rt,ma,Z.northCol+rt,We.BRICK),Fn(e,Z.eastCol+rt,ji,Z.northCol-rt,Z.eastBack,ma,Z.northCol+rt,We.BRICK),Fn(e,Z.westBack,Vi+.2,Z.northCol+rt+.12,Z.eastBack,ma,Z.northBack,We.BRICK),Al(e,[Z.westBack-.5,ma+.16,Z.northCol-rt-.42],[ro.x0-Z.westBack+.5,0,0],[0,2.6,4.4],We.ROOF),Al(e,[ro.x1,ma+.16,Z.northCol-rt-.42],[Z.eastBack+.5-ro.x1,0,0],[0,2.6,4.4],We.ROOF),Al(e,[ro.x0-.3,ro.top+.16,Z.northCol-rt-.42],[ro.x1-ro.x0+.6,0,0],[0,1.4,3],We.ROOF),_x(e,[ro.x0-.3,ro.top+.16,Z.northCol-rt-.42],[ro.x0-.3,ro.top+1.56,Z.northCol-rt+2.58],[ro.x0-.3,ro.top+.16,Z.northCol-rt+2.58],[-1,0,0],We.BRICK),_x(e,[ro.x1+.3,ro.top+.16,Z.northCol-rt-.42],[ro.x1+.3,ro.top+1.56,Z.northCol-rt+2.58],[ro.x1+.3,ro.top+.16,Z.northCol-rt+2.58],[1,0,0],We.BRICK),Fn(e,ro.x0,ma,Z.northCol+rt,ro.x1,ro.top,Z.northCol+2.6,We.BRICK);for(let[r,a]of[[Z.cx-9.8,Z.northBack+.6],[Z.cx+9.4,Z.northBack+.4],[Z.cx-4.6,Z.northBack+1]])Fn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,We.BRICK),Fn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,We.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];bx.forEach((u,h)=>{let d=zl(u);h===1?c.push({c:d,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:d,y0:1,y1:2.75,w:1.05}),c.push({c:d,y0:3.85,y1:5.45,w:1.05})}),wx(e,r,{u0:Z.south,u1:Z.northCol-rt,top:()=>ji,arches:[],bays:bx,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[Z.south,Z.northCol-rt,ji]]}),Fn(e,a,0,Z.south,i+s*(rt+.12),ji,Z.northBack+.3,We.BRICK);let l=i-s*rt;Fn(e,l,0,Z.south,l-s*.06,.55,Z.northCol-rt,We.STONE);let f=i-s*(rt+.42);Al(e,[f,ji+.16,Z.south],[0,0,Z.northCol-rt-Z.south],[a-f+s*.4,1.9,0],We.ROOF)};o("west",Z.westBack,Z.westCol),o("east",Z.eastBack,Z.eastCol);let n=Wi.x1+.7;Fn(e,13.65,7.4,Z.south-.02,n,7.62,Z.south+.14,We.STONE),Fn(e,13.65,10.4,Z.south-.02,n,10.6,Z.south+.38,We.STONE),Al(e,[13.65,10.6,Z.south+.38],[n-13.65,0,0],[0,2.2,-5],We.ROOF)}function _x(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function Al(e,t,o,n,r){let a=Mh([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(l=>-l):a,s=(l,f)=>[t[0]+o[0]*l+n[0]*f,t[1]+o[1]*l+n[1]*f,t[2]+o[2]*l+n[2]*f];sc(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;sc(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],Mh([-n[0],0,-n[2]]),[r,0,0])}function hk(e){let t=Z.westBack,o=Z.eastBack,n=Z.south,r=Z.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let l=0;l<=i;l++){let f=[t+(o-t)*c/a,0,n+(r-n)*l/i];s[c].push(e.vert(f,[0,1,0],[We.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let l=0;l<i;l++)e.tri(s[c][l],s[c+1][l],s[c+1][l+1]),e.tri(s[c][l],s[c+1][l+1],s[c][l+1])}var Tl=.46,$s=.58,Ds=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function uk(e,t,o){let n=Gs+o,r=(e>0?Lo.x1-Z.cx:Z.cx-Lo.x0)-qs-o,a=Gs+o,i=(t>0?Lo.z1-Z.cz:Z.cz-Lo.z0)-qs-o,s=wh+o,c=Math.sqrt(s*s-n*n),l=Math.sqrt(s*s-a*a),f=[[n,c],[n,i],[r,i],[r,a],[l,a]],u=Math.atan2(a,l),h=Math.atan2(c,n);for(let d=1;d<10;d++){let v=u+(h-u)*d/10;f.push([Math.cos(v)*s,Math.sin(v)*s])}return f.map(([d,v])=>[Z.cx+e*d,Z.cz+t*v])}function dk(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,l=i,f=Tl*.5,u=-f,h=a+f,d=[],v=Math.max(1,Math.ceil((h-u)/1));for(let p=0;p<=v;p++){let m=u+(h-u)*p/v,g=[];for(let y=0;y<Ds.length;y++){let[b,k]=Ds[y],E=Math.min(Ds.length-2,y),L=Ds[Math.max(0,y-1)],N=Ds[Math.min(Ds.length-1,y+1)],W=(N[0]-L[0])*Tl,te=(N[1]-L[1])*$s,G=-W,re=Math.hypot(te,G)||1,q=[t[0]+i*m+c*b*Tl,k*$s,t[1]+s*m+l*b*Tl],Y=[c*(-te/re),-G/re,l*(-te/re)];g.push(e.vert(q,Y[1]<-.2?[c*Math.sign(b),.3,l*Math.sign(b)]:Y,[We.HEDGE,0,0]))}d.push(g)}for(let p=0;p<v;p++)for(let m=0;m<Ds.length-1;m++)e.tri(d[p][m],d[p+1][m],d[p+1][m+1]),e.tri(d[p][m],d[p+1][m+1],d[p][m+1]);for(let[p,m]of[[0,-1],[v,1]]){let g=d[p],y=e.vert([t[0]+i*(p?h:u),$s*.5,t[1]+s*(p?h:u)],[i*m,0,s*m],[We.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function pk(e){for(let t of[-1,1])for(let o of[-1,1]){let n=uk(t,o,.3);for(let r=0;r<n.length;r++)dk(e,n[r],n[(r+1)%n.length])}}function vk(e){let t=Z.cx,o=Z.cz,n=()=>[We.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[We.DARK,0,0]});let r={mat:()=>[We.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let l=c/12*Math.PI*1.6,f=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(l)*f*i*-1+0),1.95+Math.sin(l)*f,o])}e.tube(s,()=>.016,16,5,r)}}function mk(e){for(let[t,o]of ld)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[We.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[We.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[We.BARK,0,0]})}function gk(e){let[t,,o]=Bi.c,n=Rx(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,l=>.2*(1-l*.75),14,9,{mat:()=>[We.BARK,0,0]});for(let l=0;l<2;l++){let f=.55+l*.2,u=[t+a*f,s*f,o+i*f],h=n()*Math.PI*2;e.tube([u,[u[0]+Math.cos(h)*1.3,u[1]+.9,u[2]+Math.sin(h)*1.3],[u[0]+Math.cos(h)*2.3,u[1]+1.4+n(),u[2]+Math.sin(h)*2.3]],d=>.08*(1-d*.7),8,6,{mat:()=>[We.BARK,0,0]})}}for(let a of Qa.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[We.BARK,0,0]})}function xk(e){let t=()=>[We.FARBRICK,0,0],o=()=>[We.LEAD,0,0],n=(a,i,s,c,l,f)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let u=[];for(let d=0;d<=12;d++){let v=d/12*Math.PI/2,p=Math.cos(v)*s,m=Math.sin(v)*l;f&&(p*=1-.18*Math.sin(v*2)),u.push([Math.max(p,s*.12),c+m])}e.lathe(u,a,i,28,{mat:o});let h=c+l;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};Fn(e,14,0,104,52,26,150,We.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{Fn(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,We.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function yk(e){let o=[Z.cx,0,Z.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let l=Math.PI/2*(c/r)-.05,f=[Math.sin(s)*Math.cos(l),Math.sin(l),Math.cos(s)*Math.cos(l)],u=[o[0]+f[0]*420,o[1]+f[1]*420,o[2]+f[2]*420];a[i].push(e.vert(u,[-f[0],-f[1],-f[2]],[We.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function bk(){let e=[],t=[],o=[],n=[],r=QM.createBuilder(e,t,o,n);return hk(r),fk(r),pk(r),vk(r),mk(r),gk(r),r.save(),r.translate(ic[0],0,ic[1]),xk(r),r.restore(),yk(r),{position:e,normal:t,elements:o,attr:n}}var Nx=[[[13.65,0,Wi.z0-.7],[Wi.x1+.7,10.6,Z.south]],[[Z.westBack,Vi,Z.northCol-rt],[Z.eastBack,ma,Z.northBack+3.4]],[[ro.x0,ma,Z.northCol-rt],[ro.x1,ro.top,Z.northCol+2.6]],[[Z.westBack,0,Z.south],[Z.westCol+rt,ji,Z.northBack+.3]],[[Z.eastCol-rt,0,Z.south],[Z.eastBack,ji,Z.northBack+.3]],[[14+ic[0],0,104+ic[1]],[52+ic[0],26,150+ic[1]]]];function wk(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function bh(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,l=s*s-i*c;if(l<=0)return 0;let f=Math.sqrt(l),u=Math.max(0,(-s-f)/i),h=(-s+f)/i;return Math.max(0,h-u)}function sd(e){for(let[t,o]of Nx)if(wk(e,Ka,t,o))return 0;return 1}function Rx(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function _k(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=Rx(21),c=(v,p,m,g,y,b,k)=>{let E=e.length/3;for(let[L,N]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...v),t.push(L,N),o.push(p,m,g),n.push(...y),r.push(...b),a.push(...k);i.push(E,E+1,E+2,E,E+2,E+3)},l=(v,p)=>{let m=1;for(let g of Qa){if(g===p||!g.shadow)continue;let y=bh(v,Ka,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},f=Qa.map(v=>({...v,pts:null}));for(let v of f)for(let p=0;p<v.n;p++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(v.spindle){let q=b[1],Y=Math.sqrt(Math.max(.02,1-q*q))*(q>0?1-q*.55:1+q*.25),be=Math.hypot(b[0],b[2])||1,qe=Y*Math.min(1,be*1.4);b=[b[0]/be*qe,q,b[2]/be*qe]}v.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let k=[v.c[0]+b[0]*v.r[0],v.c[1]+b[1]*v.r[1],v.c[2]+b[2]*v.r[2]],E,L;if(v.magnolia){let q=0;for(let qe of Tx)q=Math.max(q,bh(k,Ka,qe.c,qe.r));E=Math.exp(-q*1.1);let Y=1;for(let qe of Qa)if(!qe.magnolia&&qe.shadow){let Ae=bh(k,Ka,qe.c,qe.r);Ae>0&&(Y*=Math.exp(-Ae*.9))}E*=sd(k)*Y;let be=ok(k,Bi.c);L=Mh([be[0]/Bi.r[0]+b[0]*.5,be[1]/Bi.r[1]+b[1]*.5,be[2]/Bi.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(be[0]/Bi.r[0],be[1]/Bi.r[1],be[2]/Bi.r[2])*.6+y*.4)}else{let q=bh(k,Ka,v.c,v.r);E=Math.exp(-q*(v.spindle?2.2:1.25)),E*=sd(k)*l(k,Qa[f.indexOf(v)]),L=Mh([b[0]/v.r[0],b[1]/v.r[1],b[2]/v.r[2]])}let N=Math.max(0,L[0]*Ka[0]+L[1]*Ka[1]+L[2]*Ka[2]),W=.25+.75*Math.pow(y,1.5)*(.65+.35*(L[1]*.5+.5)),O=v.size[0]+(v.size[1]-v.size[0])*s(),te=.85+s()*.3,G=v.leaf.map(q=>q*te),re=v.cell;v.cell===3&&s()<.35&&(re=2),c(k,O,re,s()*Math.PI*2,[E,W,.35+.65*N],G,v.bloom)}for(let[v,p]of Lx){let m=s()<.5;for(let g=0;g<3;g++){let y=[v+(s()-.5)*.7,.28+s()*.22,p+(s()-.5)*.5],b=sd(y)*l(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let u=i.length/6,h=Array.from({length:u},(v,p)=>p);for(let v=u-1;v>0;v--){let p=Math.floor(s()*(v+1));[h[v],h[p]]=[h[p],h[v]]}let d=[];for(let v of h)for(let p=0;p<6;p++)d.push(i[v*6+p]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:d}}var et=e=>e.toFixed(4),Nl=e=>`vec3(${et(e[0])}, ${et(e[1])}, ${et(e[2])})`,Px=`
const vec3 SUN = ${Nl(Ka)};
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
`,Mk=Nx.map(([e,t])=>`if (hitBox(ro, SUN, ${Nl(e)}, ${Nl(t)})) return 0.0;`).join(`
	`),kk=Qa.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${Nl(e.c)}, ${Nl(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),Ek=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${et(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${et(Vi)} && u > ${et(o-rt)} && u < ${et(o+n*r+rt)}) {
				float k = floor((u - ${et(o)}) / ${et(n)});
				float a = ${et(o)} + k * ${et(n)} + (k < 0.5 ? ${et(a)} : 0.02);
				float b = ${et(o)} + (k + 1.0) * ${et(n)} - (k > ${et(r-1.5)} ? ${et(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${et(s)}) < 0.5 ? 0.0 : ${et(Ll+.09)};
				bool hole = (q.y > sill && q.y < ${et(vr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${et(vr)} && d * d + (q.y - ${et(vr)}) * (q.y - ${et(vr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,kh=Gs+.3,Eh=Gs+.3,Rl=wh+.3,Mx=Lo.x1-Z.cx-qs-.3,Sk=Lo.z1-Z.cz-qs-.3,Ak=Z.cz-Lo.z0-qs-.3,Tk=Math.sqrt(Rl*Rl-kh*kh),Lk=Math.sqrt(Rl*Rl-Eh*Eh),zk=[[Z.cx,Z.cz,.86,1.18],[Z.cx,Z.cz,1.25,.3],...ld.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${et(e)}, ${et(t)}), ${et(o)}, ${et(n)})) return 0.0;`).join(`
	`),Ck=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${et(Z.cx)}, ${et(Z.cz)}));
	float b1 = xz.y > ${et(Z.cz)} ? ${et(Sk)} : ${et(Ak)};
	vec2 A = vec2(${et(kh)}, ${et(Tk)}), Bp = vec2(${et(kh)}, b1), C = vec2(${et(Mx)}, b1);
	vec2 D = vec2(${et(Mx)}, ${et(Eh)}), E = vec2(${et(Lk)}, ${et(Eh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${et(Rl)}));
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
	${Mk}
	${Ek("z",Z.northCol,Z.westCol,cd,Sh,rt+Cl,rt+Cl,Sx,"ro.z > "+et(Z.northCol-rt))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${zk}
	if (ro.y < ${et($s)} && ro.x > ${et(Lo.x0)} && ro.x < ${et(Lo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${et($s)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${et(Tl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${et($s)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${kk}
	return tr;
}
`,Nk=`
precision highp float;
${kx}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Px}
${Ck}

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
			if (edge < ${et(qs)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${et(qs)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${et(wh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${et(Z.cz)}, P.x - ${et(Z.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${et(wh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${et(Gs)} || dz < ${et(Gs)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${et(Gs)} - min(dx, dz), 1.0);
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${et($s)}, P.y) * (0.6 + 0.4 * n);
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
	bool walk = (P.x < ${et(Z.westCol)} || P.x > ${et(Z.eastCol)} || P.z > ${et(Z.northCol)}) && P.y < ${et(Vi+.05)} && P.z > ${et(Z.south-.1)} && P.z < ${et(Z.northBack+.5)};
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
}`,Rk=`
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
}`,Pk=`
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
}`,Ok=`
precision highp float;
${kx}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Px}
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
}`;function Ik(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}fd.exports=e=>{let t=bk(),o=_k(),n=Ik(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>id.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:Nk,vert:Rk,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>id.gardenDetail}}),s=e({frag:Ok,vert:Pk,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*id.leafShare/6)*6});return function(){i(),s()}};fd.exports.layout={G:Z,YARD:Lo,SUN:Ka}});var $x=de((_T,Gx)=>{"use strict";var Fk=or().GLSL,Dk=Ss(),{C:Dx}=lr(),mr=Dx.x1+.35,pd=Dx.zc,hd=[mr-7.3,2,pd],Ix=5.2*Math.PI/180,Fx=2100,Gk=725,$k=1288,qk=1450,Hk=2576,yi=pd-3.2,Lh=pd+3.3,ud=mr+5,dd=mr+11.7,cc=3.9,Pl=mr+22.7,Ah=40;function Uk(){let e=[],t=[],o=[],n=[],r=Dk.createBuilder(e,t,o,n),a=(f,u,h,d,v,p)=>{let m=[];for(let g=0;g<=v;g++){m.push([]);for(let y=0;y<=p;y++){let b=[0,1,2].map(k=>f[k]+u[k]*g/v+h[k]*y/p);m[g].push(r.vert(b,d,[0,0,0]))}}for(let g=0;g<v;g++)for(let y=0;y<p;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=Lh-yi,s=.7;a([mr-s,0,yi],[ud-mr+s,0,0],[0,0,i],[0,1,0],6,4);let c=dd-ud,l=Math.hypot(c,cc);return a([ud,0,yi],[c,cc,0],[0,0,i],[-cc/l,c/l,0],6,4),a([dd,cc,yi],[Pl-dd,0,0],[0,0,i],[0,1,0],6,4),a([mr-s,0,yi],[Pl-mr+s,0,0],[0,Ah,0],[0,0,1],12,12),a([mr-s,0,Lh],[Pl-mr+s,0,0],[0,Ah,0],[0,0,-1],12,12),a([Pl,0,yi],[0,Ah,0],[0,0,i],[-1,0,0],8,4),a([mr-s,Ah,yi],[Pl-mr+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var Nr=e=>e.toFixed(5),Th=[[mr+3.4,3.7,yi+.01,1],[mr+8.6,4.1,Lh-.01,-1],[mr+14.8,cc+3.3,yi+.01,1],[mr+19.6,cc+3.6,Lh-.01,-1]],Bk=`
precision highp float;
${Fk}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Th.length};
vec4 LAMP[NLAMP];

void main() {
	${Th.map((e,t)=>`LAMP[${t}] = vec4(${Nr(e[0])}, ${Nr(e[1])}, ${Nr(e[2])}, ${Nr(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Nr(hd[0])}, ${Nr(hd[1])}, ${Nr(hd[2])});
	float c = ${Nr(Math.cos(Ix))}, s = ${Nr(Math.sin(Ix))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Nr(Gk)} + ${Nr(Fx)} * d.z / fw, ${Nr($k)} - ${Nr(Fx)} * up / fw);
	vec2 uv = px / vec2(${Nr(qk)}, ${Nr(Hk)});
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
	for (int i = 0; i < ${Th.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,jk=`
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
}`;Gx.exports=e=>{let t=Uk(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:Bk,vert:jk,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,l)=>{let[f,u,h]=s,d=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[v,p,m]of d){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(f+v[0]*c[0]+p[0]*y*c[0]+m[0]*b*c[0],u+v[1]*c[1]+p[1]*y*c[1]+m[1]*b*c[1],h+v[2]*c[2]+p[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...v),r.k.push(l);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of Th){let c=s[3],l=s[2]+c*.42;a([s[0],s[1],l],[.11,.17,.11],1);for(let f of[-1,1])for(let u of[-1,1])a([s[0]+f*.11,s[1],l+u*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,l],[.15,.03,.15],0),a([s[0],s[1]+.27,l],[.05,.05,.05],0),a([s[0],s[1]-.19,l],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var jx=de((MT,Bx)=>{"use strict";var Wk=or().GLSL,{A:Ch,BENCH:md,SHAFT:vd,TREE:Ol,oculusGLSL:Vk}=pa(),Xk=ha(),zh=Ol.sxz,qx=Ol.sy,Hx=Ol.yaw;function Yk(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let l=new Uint16Array(e,s,o*2);s+=o*4;let f=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let u=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:l,nrm:f,idx:u}}function Kk(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(Hx),i=Math.sin(Hx);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*zh,l=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*qx,f=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*zh;t[s*3]=Ch.cx+a*c+i*f,t[s*3+1]=md.soil+.02+l,t[s*3+2]=Ch.zc-i*c+a*f;let u=e.nrm[s*3]/127/zh,h=e.nrm[s*3+1]/127/qx,d=e.nrm[s*3+2]/127/zh,v=Math.hypot(u,h,d)||1;u/=v,h/=v,d/=v,o[s*3]=a*u+i*d,o[s*3+1]=h,o[s*3+2]=-i*u+a*d,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function Ux(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var Yn=e=>e.toFixed(4),lc=Ol.crownC,fc=Ol.crownR,Qk=`
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

const vec3 SHAFT = vec3(${Yn(vd[0])}, ${Yn(vd[1])}, ${Yn(vd[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${Yn(Ch.cx)}, ${Yn(Ch.zc)});
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
	vec3 cc = vec3(${Yn(lc[0])}, ${Yn(lc[1])}, ${Yn(lc[2])});
	vec3 cr = vec3(${Yn(fc[0])}, ${Yn(fc[1])}, ${Yn(fc[2])});
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
}`,Yi=Fi(),Zk=`
precision highp float;
${Wk}
uniform float time;
${Yi.lanternGLSL(Yi.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Yi.LANTERNS[Yi.TREE_LANTERN[0]].x.toFixed(3)}, ${Yi.LANTERNS[Yi.TREE_LANTERN[0]].y.toFixed(3)}, ${Yi.LANTERNS[Yi.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${Vk()}

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
	vec3 rel = (v_pos - vec3(${Yn(lc[0])}, ${Yn(lc[1])}, ${Yn(lc[2])})) / vec3(${Yn(fc[0])}, ${Yn(fc[1])}, ${Yn(fc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${Yn(md.soil)}, ${Yn(md.soil+.5)}, v_pos.y);

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
}`;Bx.exports=e=>{let t=null,o=Ux(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Ux(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=Kk(Yk(a));t=e({vert:Qk,frag:Zk,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>Xk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Oh=de((kT,Yx)=>{"use strict";var hc=$i(),Jk="res/audio/go-tomorrow.mp3",eE="res/audio/go-tomorrow.json",Vx="gallery-sound",Nh=[hc.PIANO.x,1,hc.PIANO.z],tE=hc.R,Ur=!0;try{localStorage.getItem(Vx)==="off"&&(Ur=!1)}catch(e){}var yn=null,hr=null,Il=null,Fl=null,Ki=null,bi=null,Hs=!1,Rh=null,Wx=[],oE=(typeof performance!="undefined"?performance.now():0)/1e3;function nE(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let i=o.getChannelData(a),s=0;for(let c=0;c<t;c++){let l=c/e.sampleRate,f=.25+.6*Math.exp(-l*2.2);s+=(r()-s)*f,i[c]=s*Math.pow(1-c/t,2.2)*Math.exp(-l*1.5)*(l<.012?l/.012:1)}}return o}function rE(){if(yn)return;yn=new Audio,yn.src=Jk,yn.loop=!0,yn.preload="auto",yn.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){yn.volume=.2;return}try{hr=new e;let t=hr.createMediaElementSource(yn);Ki=hr.createBiquadFilter(),Ki.type="lowpass",Ki.frequency.value=1500,Ki.Q.value=.4,Il=hr.createGain(),Il.gain.value=0,Fl=hr.createGain(),Fl.gain.value=0;let o=hr.createConvolver();o.buffer=nE(hr),bi=hr.createGain(),bi.gain.value=Ur?1:0,t.connect(Ki),Ki.connect(Il),Il.connect(bi),Ki.connect(o),o.connect(Fl),Fl.connect(bi),bi.connect(hr.destination)}catch(t){hr=null,yn.volume=.2}}function Xx(){if(Hs||!Ur)return;rE();let e=()=>yn.play().then(()=>{Hs=!0}).catch(()=>{});hr&&hr.state==="suspended"?hr.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,Xx,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!yn||!Hs||(document.hidden?yn.pause():Ur&&yn.play().catch(()=>{}))}),fetch(eE).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(i=>i[2]).sort((i,s)=>i-s),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(i=>({t:i[0],w:i[1],x:Math.max(0,Math.min(1,(i[2]-r)/Math.max(a-r,.001)))}))};Rh={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var Ph={AT:Nh,listen(e){if(!hr||!Hs)return;let t=e[0]-Nh[0],o=e[2]-Nh[2],n=Math.hypot(t,o,(e[1]-Nh[1])*.5),r=Math.hypot(e[0]-hc.C.x,e[2]-hc.C.z)<tE+.4||e[0]<-.2&&Math.abs(e[2]-hc.C.z)<4,a,i,s;if(r){let l=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*l,i=.22+.16*l,s=16e3}else{let l=5.5/Math.max(n,5.5),f=e[0]>14.2&&e[2]<12?.6:1;a=.5*Math.pow(l,1.5)*f,i=.34*Math.pow(l,.95)*f,s=(650+9e3*Math.pow(l,1.3))*(f<1?.7:1)}let c=hr.currentTime;Il.gain.setTargetAtTime(a,c,.35),Fl.gain.setTargetAtTime(i,c,.35),Ki.frequency.setTargetAtTime(s,c,.35)},time(){let e=Rh&&Rh.dur||158;return yn&&Hs&&!yn.paused||yn&&Hs?yn.currentTime%e:((performance.now()/1e3-oE)%e+e)%e},get cues(){return Rh},get on(){return Ur},set(e){Ur=!!e;try{localStorage.setItem(Vx,Ur?"on":"off")}catch(t){}Ur?(Xx(),yn&&Hs&&yn.play().catch(()=>{}),bi&&bi.gain.setTargetAtTime(1,hr.currentTime,.2)):bi?bi.gain.setTargetAtTime(0,hr.currentTime,.15):yn&&yn.pause(),Wx.forEach(t=>t(Ur))},toggle(){Ph.set(!Ur)},onChange(e){Wx.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=Ur?t:o,n.setAttribute("aria-label",Ur?"Turn the music off":"Turn the music on"),n.title=Ur?"Music on":"Music off",n.setAttribute("aria-pressed",Ur?"true":"false")};return r(),Ph.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,i=>i.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Ph.toggle()}),n}};Yx.exports=Ph});var iy=de((ET,wd)=>{"use strict";var yd=or().GLSL,{A:Kx,BENCH:oy,oculusGLSL:ny}=pa(),Qx=ha(),ry=$i(),Zx=Oh(),aE=1.74,iE=1.877,gr=aE/iE,Bs={x:Kx.cx-1.22,z:Kx.zc+.02,hipY:oy.seat+.115},$o=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Ra=e=>[-e[0],-e[1],-e[2],e[3]],Zi=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},Ih=(e,t,o)=>$o(Zi([0,0,1],o*Math.PI/180),$o(Zi([0,1,0],t*Math.PI/180),Zi([1,0,0],e*Math.PI/180))),bd=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},Za=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Gl=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Qi=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],xd=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Dh=e=>Math.hypot(e[0],e[1],e[2]),Dl=e=>{let t=Dh(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},$h=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],sE=(e,t)=>{let o=[e[0],e[1],e[2]],n=Qi($h(o,t),2);return Gl(Gl(t,Qi(n,e[3])),$h(o,n))},cE=(e,t)=>{let o=$h(e,t),n=1+xd(e,t);return n<1e-6?[0,0,1,0]:bd([o[0],o[1],o[2],n])};function Jr(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,l=a*a,f=n*r,u=n*a,h=r*a,d=i*n,v=i*r,p=i*a;return[(1-2*(c+l))*o[0],2*(f+p)*o[0],2*(u-v)*o[0],0,2*(f-p)*o[1],(1-2*(s+l))*o[1],2*(h+d)*o[1],0,2*(u+v)*o[2],2*(h-d)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function Dn(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function gd(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,l=e[6]/o,f=e[8]/n,u=e[9]/n,h=e[10]/n,d=r+c+h,v;if(d>0){let p=Math.sqrt(d+1)*2;v=[(l-u)/p,(f-i)/p,(a-s)/p,p/4]}else if(r>c&&r>h){let p=Math.sqrt(1+r-c-h)*2;v=[p/4,(s+a)/p,(f+i)/p,(l-u)/p]}else if(c>h){let p=Math.sqrt(1+c-r-h)*2;v=[(s+a)/p,p/4,(u+l)/p,(f-i)/p]}else{let p=Math.sqrt(1+h-r-c)*2;v=[(f+i)/p,(u+l)/p,p/4,(a-s)/p]}return bd(v)}var Gh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Gh[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],Gh[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],Gh[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function Us(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function Jx(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*Us(e,.14,.07)+57*Us(e,.72,.12),n=5*Us(e,.06,.04)-9*Us(e,.42,.12)+17*Us(e,.62,.05)-3*Us(e,.85,.1),r=-26*Us(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function lE(e){let t=(e%1+1)%1,o=Jx(t),n=Jx(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var ey=`
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
}`,qh=Fi(),ty=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${yd}
uniform float time;
${ry.roomGLSL()}
${qh.lanternGLSL(qh.TREE_LANTERN)}
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
${ny()}
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
}`;function fE(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var ay={w:.13,h:.2},Fh=e=>.011*(1-Math.pow(1-e,3));function hE(){let e=[],t=[],o=[],n=[],r=[],a=(p,m,g,y,b,k,E)=>{let L=e.length/3;[p,m,g,y].forEach((N,W)=>{e.push(...N),t.push(...b),o.push(...E[W]),n.push(k)}),r.push(L,L+1,L+2,L,L+2,L+3)},{w:i,h:s}=ay,c=s/2,l=[[0,1],[1,1],[1,0],[0,0]],f=-.006,u=i+.001,h=c+.001;a([0,f,-h],[u,f,-h],[u,f,h],[0,f,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,f+.001,-h],[0,f+.001,h],[u,f+.001,h],[u,f+.001,-h],[0,1,0],2,l),a([-u,f,-h],[0,f,-h],[0,f,h],[-u,f,h],[0,-1,0],2,l),a([-u,f+.001,-h],[-u,f+.001,h],[0,f+.001,h],[0,f+.001,-h],[0,1,0],2,l);let d=8;for(let p of[1,-1]){for(let g=0;g<d;g++){let y=g/d,b=(g+1)/d,k=(.002+y*(i-.002))*p,E=(.002+b*(i-.002))*p,L=Fh(y),N=Fh(b),W=p>0?y:1-y,O=p>0?b:1-b,te=1,G=-(N-L)/(E-k);a([k,L,-c],[E,N,-c],[E,N,c],[k,L,c],[G,te,0],3,[[W,1],[O,1],[O,0],[W,0]]),a([k,f+.001,c],[E,f+.001,c],[E,N,c],[k,L,c],[0,0,1],4,l),a([k,L,-c],[E,N,-c],[E,f+.001,-c],[k,f+.001,-c],[0,0,-1],4,l)}let m=i*p;a([m,f+.001,-c],[m,Fh(1),-c],[m,Fh(1),c],[m,f+.001,c],[p,0,0],4,l)}let v=10;for(let p=0;p<v;p++){let m=p/v,g=(p+1)/v,y=e.length/3;for(let[b,k]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,k),t.push(0,1,0),o.push(b,(k+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function uE(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,l,f,u,h)=>{for(let d=0;d<u;d++){let v=i+(n()-.5)*c*2,p=s+(n()-.5)*l*2,m=20+n()*60,g=t.createRadialGradient(v,p,0,v,p,m);g.addColorStop(0,`rgba(${f},${h})`),g.addColorStop(1,`rgba(${f},0)`),t.fillStyle=g,t.fillRect(v-m,p-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,l])=>{t.lineWidth=l,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var dE=`
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
		float r = u * ${ay.w.toFixed(3)};
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
}`,pE=`
precision highp float;
${yd}
uniform float time;
${qh.lanternGLSL(qh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${ny()}
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
}`;function vE(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],l=[.8,.55,.22],f=[[0,-.15,l,2],[.0012,-.147,l,2],[.004,-.138,l,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],u=16;for(let h=0;h<f.length;h++){let[d,v,p,m]=f[h],g=m===2?.45:1;for(let y=0;y<=u;y++){let b=y/u*Math.PI*2;e.push(Math.cos(b)*d,v,Math.sin(b)*d*g);let k=Math.max(h-1,0),E=Math.min(h+1,f.length-1),L=f[E][0]-f[k][0],N=f[E][1]-f[k][1],W=Math.hypot(L,N)||1;t.push(Math.cos(b)*N/W,-L/W,Math.sin(b)*N/W/g),o.push(...p),n.push(m)}}for(let h=0;h<f.length-1;h++)for(let d=0;d<u;d++){let v=h*(u+1)+d,p=v+u+1;r.push(v,p,v+1,v+1,p,p+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var mE=`
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
}`,gE=`
precision highp float;
${yd}
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
}`,xE=`
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
}`,yE=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;wd.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Bs.x,1.9,Bs.z],glow:0};Promise.all([fetch(t+"avatar.json").then(O=>O.json()),fetch(t+"avatar.bin").then(O=>O.arrayBuffer())]).then(([O,te])=>{o=l(O,te)}).catch(O=>console.error(O));let i=null;Promise.all([fetch(t+"motion.json").then(O=>O.ok?O.json():null),fetch(t+"motion.bin").then(O=>O.ok?O.arrayBuffer():null)]).then(([O,te])=>{if(!O||!te)return;let G={};for(let re in O.clips){let q=O.clips[re],Y=q.bones.length,be=new Float32Array(te,q.mean,Y*4),qe={};q.bones.forEach((Ae,he)=>{qe[Ae]=[be[he*4],be[he*4+1],be[he*4+2],be[he*4+3]]}),G[re]=Object.assign({},q,{Q:new Int16Array(te,q.q,q.frames*Y*4),H:new Float32Array(te,q.hips,q.frames*3),meanQ:qe})}i=G}).catch(()=>{});function s(O,te){let G=O.frames,re=O.bones.length,q=(te%G+G)%G,Y=Math.floor(q)%G,be=(Y+1)%G,qe=q-Math.floor(q),Ae={};for(let dt=0;dt<re;dt++){let qt=(Y*re+dt)*4,He=(be*re+dt)*4,pt=O.Q[qt],St=O.Q[qt+1],Zt=O.Q[qt+2],ao=O.Q[qt+3],Ho=O.Q[He],Xe=O.Q[He+1],ht=O.Q[He+2],vt=O.Q[He+3];pt*Ho+St*Xe+Zt*ht+ao*vt<0&&(Ho=-Ho,Xe=-Xe,ht=-ht,vt=-vt),Ae[O.bones[dt]]=bd([pt+(Ho-pt)*qe,St+(Xe-St)*qe,Zt+(ht-Zt)*qe,ao+(vt-ao)*qe])}let he=Y*3,Te=be*3;return{q:Ae,hips:[O.H[he]+(O.H[Te]-O.H[he])*qe,O.H[he+1]+(O.H[Te+1]-O.H[he+1])*qe,O.H[he+2]+(O.H[Te+2]-O.H[he+2])*qe]}}let c=e.texture({data:[[[255,255,255,255]]]});function l(O,te){let G=(K,Ne)=>new Float32Array(te,K,Ne),re=O.bones,q=re.length,Y={};re.forEach((K,Ne)=>{Y[K.name]=Ne});let be=[];for(let K=0;K<q;K++)be.push(Array.from(G(O.ibm+K*64,16)));let qe=re.map(K=>Jr(K.t,K.r,K.s)),Ae=[];for(let K=0;K<q;K++){let Ne=re[K].parent;Ae[K]=Ne<0?qe[K]:Dn(Ae[Ne],qe[K])}let he=Ae.map(gd),Te=O.meshes.map(K=>{let Ne=G(K.pos,K.n*3),Ie=G(K.nrm,K.n*3),ze=G(K.uv,K.n*2),at=new Uint8Array(te,K.jnt,K.n*4),Mt=G(K.wgt,K.n*4),bt=new Uint16Array(te,K.idx,K.ni),lt={};for(let xt in K.morphs){let Po=K.morphs[xt];lt[xt]={idx:new Uint16Array(te,Po.idx,Po.n),d:G(Po.d,Po.n*3)}}let Nt=new Float32Array(K.n*3),gt=new Float32Array(K.n*3),Ht=new Float32Array(K.n*3),_t=e.buffer({data:Nt,usage:"dynamic"}),kt=e.buffer({data:gt,usage:"dynamic"}),Bt=/avaturn_hair/.test(K.name),ft=/EyeAO|Eyelash/.test(K.name),no=/Body|Head/.test(K.name),_o=K.kind||0;return{m:K,pos:Ne,nrm:Ie,uv:ze,jnt:at,wgt:Mt,idx:bt,morphs:lt,outP:Nt,outN:gt,work:Ht,pb:_t,nbuf:kt,tex:K.tex?fE(e,t+K.tex):c,kind:_o,alphaScale:/EyeAO/.test(K.name)?.25:1,blend:K.blend||Bt,alphaCut:Bt?.35:ft?.02:0,skin:no?1:0}}),dt=e({vert:ey,frag:ty,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!N?L.lamp:[0,0,0,0],court:()=>L||N?0:1,candle:()=>N?1:0},cull:{enable:!1}}),qt=e({vert:ey,frag:ty,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!N?L.lamp:[0,0,0,0],court:()=>L||N?0:1,candle:()=>N?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),He=.3;for(let K of Te)if(K.uvBuf=e.buffer(K.uv),/Body/.test(K.m.name)){let Ne=[],Ie=[];for(let ze=0;ze<K.idx.length;ze+=3){let at=K.idx[ze],Mt=K.idx[ze+1],bt=K.idx[ze+2];(K.pos[at*3+1]<He&&K.pos[Mt*3+1]<He&&K.pos[bt*3+1]<He?Ie:Ne).push(at,Mt,bt)}K.el=e.elements({data:new Uint16Array(Ne),type:"uint16"}),Ie.length&&(K.sockEl=e.elements({data:new Uint16Array(Ie),type:"uint16"}))}else K.el=e.elements({data:K.idx,type:"uint16"});let pt=Ae[Y.Hips],St=Zi([1,0,0],-Math.PI/2),Zt=Dn(Jr([Bs.x-pt[12]*gr,Bs.hipY-pt[14]*gr,Bs.z+pt[13]*gr],St,[1,1,1]),Jr([0,0,0],[0,0,0,1],[gr,gr,gr])),ao=new Array(q),Ho=-1,Xe=(K,Ne,Ie)=>Dn(Jr([K,0,Ne],Zi([0,1,0],Ie),[1,1,1]),Jr([0,0,0],[0,0,0,1],[gr,gr,gr])),ht=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(K=>Y[K]),vt=ht.map(K=>Ae[K][13]*gr);function Jt(K){if(i&&i.walk)return po(K);let Ne=lE(K.phase),Ie={},ze=gt=>{for(let Ht in gt){let _t=gt[Ht],kt=Ih(_t[0],_t[1],_t[2]);Ie[Ht]=Ie[Ht]?$o(Ie[Ht],kt):kt}};ze(Ne.swing),ze(Ne.pose);let at=Math.cos(K.heading),Mt=-Math.sin(K.heading),bt=Xe(K.x+at*Ne.sway,K.z+Mt*Ne.sway,K.heading),lt=new Array(q);for(let gt=0;gt<q;gt++){let Ht=re[gt],_t=qe[gt],kt=Ie[Ht.name];if(kt){let Bt=he[gt],ft=$o(Ra(Bt),$o(kt,Bt));_t=Jr(Ht.t,$o(Ht.r,ft),Ht.s)}lt[gt]=Ht.parent<0?Dn(bt,_t):Dn(lt[Ht.parent],_t)}let Nt=1/0;ht.forEach((gt,Ht)=>{Nt=Math.min(Nt,lt[gt][13]-vt[Ht])});for(let gt=0;gt<q;gt++)lt[gt]=lt[gt].slice(),lt[gt][13]-=Nt,ao[gt]=Dn(lt[gt],be[gt]);return{blink:0}}function po(K){let Ne=i.walk,Ie=s(Ne,(K.phase+Ne.phase0)*Ne.frames),ze=Xe(K.x,K.z,K.heading),at=new Array(q),Mt=Y.Hips;for(let lt=0;lt<q;lt++){let Nt=re[lt],gt=qe[lt],Ht=Ie.q[Nt.name];if(Ht){let _t=he[lt],kt=$o(Ra(_t),$o(Ht,_t)),Bt=lt===Mt?[Nt.t[0]+Ie.hips[0],Nt.t[1]+Ie.hips[1],Nt.t[2]+Ie.hips[2]]:Nt.t;gt=Jr(Bt,$o(Nt.r,kt),Nt.s)}at[lt]=Nt.parent<0?Dn(ze,gt):Dn(at[Nt.parent],gt)}let bt=1/0;ht.forEach((lt,Nt)=>{bt=Math.min(bt,at[lt][13]-vt[Nt])});for(let lt=0;lt<q;lt++)at[lt]=at[lt].slice(),at[lt][13]-=bt,ao[lt]=Dn(at[lt],be[lt]);return{blink:0}}function Lt(K,Ne){let Ie=Math.sin(K*2*Math.PI/4.6),ze=Math.sin(K*.37)*.6+Math.sin(K*.83+1)*.4,at={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Ie*.8,0,0],Spine2:[4+Ie*.6,0,0],Neck:[10,0,0],Head:[12+ze*2,ze*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Mt={};for(let _t in at){let kt=at[_t];Mt[_t]=Ih(kt[0],kt[1],kt[2])}let bt=Xe(Ne.x,Ne.z,Ne.heading),lt=new Array(q);for(let _t=0;_t<q;_t++){let kt=re[_t],Bt=qe[_t],ft=Mt[kt.name];if(ft){let no=he[_t],_o=$o(Ra(no),$o(ft,no));Bt=Jr(kt.t,$o(kt.r,_o),kt.s)}lt[_t]=kt.parent<0?Dn(bt,Bt):Dn(lt[kt.parent],Bt)}let gt=lt[Y.Hips][13]-(Ne.y+.1);for(let _t=0;_t<q;_t++)lt[_t]=lt[_t].slice(),lt[_t][13]-=gt,ao[_t]=Dn(lt[_t],be[_t]);let Ht=K%4.1;return{blink:Ht<.16?Math.sin(Ht/.16*Math.PI):0}}let mt=K=>[Ae[K][12],Ae[K][13],Ae[K][14]],me=(K,Ne)=>{let Ie=Dl(K),ze=Dl(Za(Ne,Qi(Ie,xd(Ne,Ie)))),at=$h(Ie,ze);return gd([Ie[0],Ie[1],Ie[2],0,ze[0],ze[1],ze[2],0,at[0],at[1],at[2],0,0,0,0,1])},tt={};for(let K of["Left","Right"]){let Ne=Y[K+"Arm"],Ie=Y[K+"ForeArm"],ze=Y[K+"Hand"],at=Y[K+"HandMiddle1"];tt[K]={a:Ne,f:Ie,h:ze,upper:Dh(Za(mt(Ie),mt(Ne)))*gr,fore:Dh(Za(mt(ze),mt(Ie)))*gr,dir0:Dl(Za(mt(Ie),mt(Ne))),qf0:me(Za(mt(ze),mt(Ie)),[0,1,0]),qh0:me(Za(mt(at),mt(ze)),[0,1,0])}}let zt={};for(let K of["Left","Right"])zt[tt[K].a]={side:K,part:0},zt[tt[K].f]={side:K,part:1},zt[tt[K].h]={side:K,part:2};function ct(K,Ne,Ie){if(!K||!K.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let ze=0,at=K.length-1,Mt=-1;for(;ze<=at;){let Po=ze+at>>1;K[Po].t<=Ne?(Mt=Po,ze=Po+1):at=Po-1}let bt=K[K.length-1],lt=K[0],Nt=Mt>=0?K[Mt]:{t:bt.t-Ie,x:bt.x,w:bt.w},gt=Mt+1<K.length?K[Mt+1]:{t:lt.t+Ie,x:lt.x,w:lt.w},Ht=Math.max(.05,gt.t-Nt.t),_t=Math.min(.14,Ht*.45),kt=Math.max(0,Math.min(1,(Ne-Nt.t-_t)/Math.max(Ht-_t-.03,.02))),Bt=kt*kt*(3-2*kt),ft=Ne-Nt.t,no=(.55+.45*Nt.w)*Math.exp(-ft/.11),_o=gt.t-Ne,xt=_o<.05?(.55+.45*gt.w)*(1-_o/.05):0;return{x:Nt.x+(gt.x-Nt.x)*Bt,lift:Math.sin(Math.PI*kt)*Math.min(.05,.012+Ht*.03)*(Ht>2.5?.4:1),press:Math.max(no,xt),finger:xt>no?((Mt+1)*7+3)%4:(Math.max(Mt,0)*7+3)%4,busy:Math.exp(-ft/.9)}}let Ve={lean:0,turn:0,nod:0,pedal:0,last:-1},go=["Index","Middle","Ring","Pinky"];function _(K){let Ne=ry.PLAY,Ie=Zx.cues,ze=Zx.time(),at=Ie&&Ie.dur||158,Mt={Left:ct(Ie&&Ie.left,ze,at),Right:ct(Ie&&Ie.right,ze,at)},bt=.35;if(Ie&&Ie.level&&Ie.level.length){let Kt=ze*8,so=Math.floor(Kt)%Ie.level.length,zn=(so+1)%Ie.level.length;bt=Ie.level[so]+(Ie.level[zn]-Ie.level[so])*(Kt-Math.floor(Kt))}let lt=Ve.last<0?0:Math.min(.1,Math.max(0,K-Ve.last));Ve.last=K;let Nt=Kt=>Math.min(1,lt*Kt);Ve.lean+=(bt-Ve.lean)*Nt(1.2),Ve.turn+=(Mt.Right.busy-Mt.Left.busy-Ve.turn)*Nt(1.5),Ve.nod+=(Math.max(Mt.Right.press,Mt.Left.press*.7)-Ve.nod)*Nt(6),Ve.pedal+=((Mt.Left.busy>.35?1:.15)-Ve.pedal)*Nt(5);let gt=Math.sin(K*2*Math.PI/4.6),Ht=Math.sin(ze*.41)*.6+Math.sin(ze*.17+1)*.4,_t={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Ve.pedal,0,0],Spine:[9+3.5*Ve.lean+Ht*1.6,Ve.turn*2.5,-Ve.turn*1.6],Spine1:[7+gt*.8+2.5*Ve.lean,Ve.turn*2.5,-Ve.turn*1.2],Spine2:[6+gt*.6+Ht*.8,Ve.turn*1.5,0],Neck:[13+3*Ve.lean,Ve.turn*3,0],Head:[15+Ve.nod*3.5+Ht*1.5,Ve.turn*5,Ht*1.5]};for(let Kt of["Left","Right"]){let so=Kt==="Left"?-1:1,zn=Mt[Kt];go.forEach((U,le)=>{let Be=le===zn.finger?zn.press:zn.press*.2;_t[Kt+"Hand"+U+"1"]=[0,0,so*(20+3*le+20*Be)],_t[Kt+"Hand"+U+"2"]=[0,0,so*(26+4*le-6*Be)],_t[Kt+"Hand"+U+"3"]=[0,0,so*14]}),_t[Kt+"HandThumb1"]=[0,so*-18,so*10]}let kt={};for(let Kt in _t){let so=_t[Kt];kt[Kt]=Ih(so[0],so[1],so[2])}let Bt=Ae[Y.Hips][13]*gr,ft=Dn(Jr([Ne.stoolX,Ne.stoolTop+.1-Bt,Ne.stoolFront+.15],Zi([0,1,0],Ne.heading),[1,1,1]),Jr([0,0,0],[0,0,0,1],[gr,gr,gr])),no=(Ne.keyX0+Ne.keyX1)/2,_o={};for(let Kt of["Left","Right"]){let so=Mt[Kt],zn=Kt==="Left"?no-.4+.33*so.x:no+.07+.33*so.x;_o[Kt]=[zn,Ne.keyTop+.062+so.lift-so.press*.012,Ne.keyFront+.075]}let xt=new Array(q),Po={},sa=[0,1,0];for(let Kt=0;Kt<q;Kt++){let so=re[Kt],zn=qe[Kt],U=kt[so.name],le=zt[Kt];if(le){let Be=tt[le.side];if(le.part===0){let ot=xt[so.parent],nt=Dn(ot,qe[Kt]),Xo=[nt[12],nt[13],nt[14]],Cn=$o(gd(ot),Ra(he[so.parent])),wr=Za(_o[le.side],Xo),Uo=Dh(wr),Fr=(Be.upper+Be.fore)*.995;Uo>Fr&&(wr=Qi(wr,Fr/Uo),Uo=Fr);let Jo=Qi(wr,1/Uo),So=(Be.upper*Be.upper-Be.fore*Be.fore+Uo*Uo)/(2*Uo),rn=Math.sqrt(Math.max(0,Be.upper*Be.upper-So*So)),Co=[le.side==="Left"?-.6:.6,-.8,.3];Co=Dl(Za(Co,Qi(Jo,xd(Co,Jo))));let Un=Gl(Xo,Gl(Qi(Jo,So),Qi(Co,rn)));Be.T=Gl(Xo,wr),Be.elbow=Un;let _r=Dl(Za(Un,Xo)),sr=$o(cE(sE(Cn,Be.dir0),_r),Cn);Po[Kt]=sr,U=$o(Ra(Cn),sr)}else if(le.part===1){let ot=$o(me(Za(Be.T,Be.elbow),sa),Ra(Be.qf0));Po[Kt]=ot,U=$o(Ra(Po[so.parent]),ot)}else{let ot=Mt[le.side],nt=$o(me([le.side==="Left"?.12:-.12,-.2-.1*ot.press,-1],sa),Ra(Be.qh0));Po[Kt]=nt,U=$o(Ra(Po[so.parent]),nt)}}if(U){let Be=he[Kt],ot=$o(Ra(Be),$o(U,Be));zn=Jr(so.t,$o(so.r,ot),so.s)}xt[Kt]=so.parent<0?Dn(ft,zn):Dn(xt[so.parent],zn)}for(let Kt=0;Kt<q;Kt++)ao[Kt]=Dn(xt[Kt],be[Kt]);a.pianist={head:[xt[Y.Head][12],xt[Y.Head][13],xt[Y.Head][14]]};let ri=K%4.3;return{blink:ri<.16?Math.sin(ri/.16*Math.PI):0}}function oo(K,Ne){if(N)return _(K);if(L)return Lt(K,L);if(Ne)return Jt(Ne);let Ie=Math.sin(K*2*Math.PI/4.2),ze=K%3.7,at=ze<.16?Math.sin(ze/.16*Math.PI):0,Mt=Math.sin(K*.45),bt=Math.sin(K*.31+.8),lt=Math.max(0,Math.sin(K*.085)-.75)*4,Nt={RightArm:[0,-22*lt,11*Mt],RightForeArm:[0,8+26*lt,0],RightHand:[38*bt,0,6*Math.sin(K*.7)],LeftUpLeg:[0,0,3.2*Math.sin(K*.36)],RightFoot:[5*Math.sin(K*.52+.4),0,0],Head:[0,1.6*Math.sin(K*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ft,no)=>{let _o=Math.sin(K*1.1-no*.5);Nt["RightHand"+ft+"1"]=[0,0,8+12*_o],Nt["RightHand"+ft+"2"]=[0,0,6+10*_o]});let gt={},Ht=(ft,no)=>{for(let _o in ft){let xt=ft[_o],Po=Ih(xt[0]*no,xt[1]*no,xt[2]*no);gt[_o]=gt[_o]?$o(gt[_o],Po):Po}};Ht(Gh,1),Ht({Spine1:[Ie*.8,0,0],Spine2:[Ie*.6,0,0]},1),Ht(Nt,1);let _t=new Array(q),kt=new Array(q);for(let ft=0;ft<q;ft++){let no=re[ft],_o=qe[ft],xt=gt[no.name];if(xt){let Po=he[ft],sa=$o(Ra(Po),$o(xt,Po));_o=Jr(no.t,$o(no.r,sa),no.s)}_t[ft]=no.parent<0?Dn(Zt,_o):Dn(_t[no.parent],_o),kt[ft]=null}for(let ft=0;ft<q;ft++)ao[ft]=Dn(_t[ft],be[ft]);let Bt=ft=>[ft[12],ft[13],ft[14]];return a.headPos=Bt(_t[Y.Head]),a.hipsPos=Bt(_t[Y.Hips]),a.headM=_t[Y.Head],{blink:at}}function Wt(K,Ne){let{pos:Ie,nrm:ze,jnt:at,wgt:Mt,outP:bt,outN:lt,work:Nt,m:gt}=K,Ht=gt.n,_t=Ie;if(Ne){Nt.set(Ie);for(let kt in K.morphs){let Bt=Ne[kt]||0;if(Bt<=0)continue;let ft=K.morphs[kt];for(let no=0;no<ft.idx.length;no++){let _o=ft.idx[no]*3;Nt[_o]+=ft.d[no*3]*Bt,Nt[_o+1]+=ft.d[no*3+1]*Bt,Nt[_o+2]+=ft.d[no*3+2]*Bt}}_t=Nt}for(let kt=0;kt<Ht;kt++){let Bt=_t[kt*3],ft=_t[kt*3+1],no=_t[kt*3+2],_o=ze[kt*3],xt=ze[kt*3+1],Po=ze[kt*3+2],sa=0,ri=0,Kt=0,so=0,zn=0,U=0;for(let Be=0;Be<4;Be++){let ot=Mt[kt*4+Be];if(ot===0)continue;let nt=ao[at[kt*4+Be]];sa+=ot*(nt[0]*Bt+nt[4]*ft+nt[8]*no+nt[12]),ri+=ot*(nt[1]*Bt+nt[5]*ft+nt[9]*no+nt[13]),Kt+=ot*(nt[2]*Bt+nt[6]*ft+nt[10]*no+nt[14]),so+=ot*(nt[0]*_o+nt[4]*xt+nt[8]*Po),zn+=ot*(nt[1]*_o+nt[5]*xt+nt[9]*Po),U+=ot*(nt[2]*_o+nt[6]*xt+nt[10]*Po)}bt[kt*3]=sa,bt[kt*3+1]=ri,bt[kt*3+2]=Kt;let le=Math.hypot(so,zn,U)||1;lt[kt*3]=so/le,lt[kt*3+1]=zn/le,lt[kt*3+2]=U/le}gt.grid&&!Eo&&!L&&!N&&xo(K),K.sway&&Ei(K),K.pb.subdata(bt),K.nbuf.subdata(lt)}function xo(K){let[Ne,Ie]=K.m.grid,ze=K.outP,at=K.outN,Mt=oy.seat+.012;for(let bt=1;bt<Ne;bt++){let lt=Math.pow(1-bt/(Ne-1),1.5);for(let Nt=0;Nt<Ie;Nt++){let gt=(bt*Ie+Nt)*3;ze[gt+1]>Mt?ze[gt+1]=Mt+(ze[gt+1]-Mt)*Math.max(lt,.15):ze[gt+1]=Mt}}for(let bt=0;bt<at.length;bt+=3)at[bt]=0,at[bt+1]=1,at[bt+2]=0}let Eo=!1,un=(K,Ne,Ie,ze,at)=>({bone:Y[K],rate:Ne,damp:Ie,drag:ze,most:at,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),br={head:un("Head",15,.32,.012,.035),chest:un("Spine2",9,.38,.03,.1),hips:un("Hips",7,.42,.045,.16)},Hn=-1;function Ha(K){let Ne=Hn<0?0:K-Hn;Hn=K;for(let Ie in br){let ze=br[Ie],at=ao[ze.bone],Mt=Ae[ze.bone],bt=Mt[12],lt=Mt[13],Nt=Mt[14],gt=[at[0]*bt+at[4]*lt+at[8]*Nt+at[12],at[1]*bt+at[5]*lt+at[9]*Nt+at[13],at[2]*bt+at[6]*lt+at[10]*Nt+at[14]];if(!ze.p||!(Ne>0)||Ne>.25||Math.hypot(gt[0]-ze.p[0],gt[1]-ze.p[1],gt[2]-ze.p[2])>.5){ze.p=gt,ze.x=[0,0,0],ze.v=[0,0,0],ze.vel=[0,0,0];continue}let Ht=[(gt[0]-ze.p[0])/Ne,(gt[1]-ze.p[1])/Ne,(gt[2]-ze.p[2])/Ne],_t=Math.max(1,Math.ceil(Ne/.016)),kt=Ne/_t;for(let ft=0;ft<3;ft++){let no=Math.max(-30,Math.min(30,(Ht[ft]-ze.vel[ft])/Ne)),_o=-Ht[ft]*ze.drag;for(let xt=0;xt<_t;xt++)ze.v[ft]+=((_o-ze.x[ft])*ze.rate*ze.rate-2*ze.damp*ze.rate*ze.v[ft]-no)*kt,ze.x[ft]+=ze.v[ft]*kt}let Bt=Math.hypot(ze.x[0],ze.x[1],ze.x[2]);if(Bt>ze.most){let ft=ze.most/Bt;ze.x=[ze.x[0]*ft,ze.x[1]*ft,ze.x[2]*ft]}ze.p=gt,ze.vel=Ht}}for(let K of Te){let Ne=K.m,Ie=Ne.n,ze=null,at=null;if(Ne.kind===9){at="head",ze=new Float32Array(Ie);for(let Mt=0;Mt<Ie;Mt++){let bt=K.uv[Mt*2]<-.5?0:K.uv[Mt*2+1];ze[Mt]=bt*bt}}else if(Ne.name==="scarf"){at="chest",ze=new Float32Array(Ie);for(let Mt=0;Mt<Ie;Mt++)ze[Mt]=f(1.52,1.12,K.pos[Mt*3+1])}else if(Ne.grid){at="hips",ze=new Float32Array(Ie);let Mt=Ne.grid[0],bt=Ne.grid[1];for(let lt=0;lt<Ie;lt++)ze[lt]=Math.pow(Math.floor(lt/bt)/(Mt-1),1.6)}ze&&(K.sway=ze,K.spring=br[at],K.loose=at)}function Ei(K){if(!Eo&&!N&&!L)return;let Ne=K.spring.x,Ie=K.sway,ze=K.outP;if(!(Math.abs(Ne[0])+Math.abs(Ne[1])+Math.abs(Ne[2])<1e-5))for(let at=0,Mt=Ie.length;at<Mt;at++){let bt=Ie[at];bt>0&&(ze[at*3]+=Ne[0]*bt,ze[at*3+1]+=Ne[1]*bt,ze[at*3+2]+=Ne[2]*bt)}}function p0(K,Ne){Eo=!!Ne;let Ie=oo(K,Ne);Ha(K);let ze={eyeBlinkLeft:Ie.blink,eyeBlinkRight:Ie.blink};for(let at of Te)Wt(at,Object.keys(at.morphs).length?ze:null);a.pose=Ie}return{parts:Te,update:p0,drawOpaque:dt,drawBlend:qt,state:a}}function f(O,te,G){let re=Math.min(1,Math.max(0,(G-O)/(te-O)));return re*re*(3-2*re)}let u=hE(),h=uE(),d=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,v=e({vert:dE,frag:pE,attributes:{position:u.pos,normal:u.nrm,uv:u.uv,kind:u.kind},elements:new Uint16Array(u.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:d},cull:{enable:!1}}),p=vE(),m=e({vert:mE,frag:gE,attributes:{position:p.pos,normal:p.nrm,color:p.col,mat:p.mat},elements:new Uint16Array(p.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),g=e({vert:xE,frag:yE,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(O){let te=O.headM,G=Te=>{let dt=Math.hypot(...Te)||1;return Te.map(qt=>qt/dt)},re=G([te[4],te[5],te[6]]),q=G([te[8],te[9],te[10]]),Y=re,be=q.map(Te=>-Te),qe=[be[1]*Y[2]-be[2]*Y[1],be[2]*Y[0]-be[0]*Y[2],be[0]*Y[1]-be[1]*Y[0]],Ae=O.headPos,he=[0,1,2].map(Te=>Ae[Te]+re[Te]*.06+q[Te]*.185);return[qe[0],qe[1],qe[2],0,be[0],be[1],be[2],0,Y[0],Y[1],Y[2],0,he[0],he[1],he[2],1]}let b=-1,k="",E=null,L=null,N=!1;function W(O){if(!o)return;let te=(Qx.motion,r()),G=E?[E.x,E.z,E.heading,E.phase].map(q=>q.toFixed(4)).join():"";(L||N||G!==k||!E&&Math.abs(te-b)>(Qx.isPhone?1/30:0))&&(o.update(te,E),b=te,k=G);for(let q of o.parts)q.blend||(o.drawOpaque({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.el,tex:q.tex,alphaCut:q.alphaCut,skin:q.skin,kind:q.kind,alphaScale:q.alphaScale}),q.sockEl&&o.drawOpaque({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let re=o.state;if(re.headM&&!E&&!L&&!N){v({model:y(re)});let q=re.headPos,Y=Math.sin(te*1.3)*.02,be=[q[0],q[1]+.62+Y,q[2]+.05],qe=te*.6,Ae=Jr(be,$o(Zi([0,1,0],qe),Zi([0,0,1],.18)),[1.2,1.2,1.2]),he=.5+.5*Math.sin(te*2);m({model:Ae,pulse:he}),a.glowPos=be,a.glow=.06+.03*he,g({center:[be[0],be[1]-.12,be[2]],size:.1,pulse:he})}for(let q of o.parts)q.blend&&o.drawBlend({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.el,tex:q.tex,alphaCut:q.alphaCut,skin:q.skin,kind:q.kind,alphaScale:q.alphaScale})}return W.state=a,W.place=Bs,W.setWalk=O=>{E=O||null,E&&(a.glow=0)},W.setSeat=O=>{L=O||null,a.glow=L?0:a.glow,b=-1},W.setPiano=O=>{O=!!O,O!==N&&(N=O,N&&(a.glow=0),b=-1)},W};wd.exports.PLACE=Bs});var _d=de((ST,sy)=>{"use strict";sy.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var kd=de((AT,dy)=>{"use strict";var hy=ha(),cy=rl(),Ji=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Md(){return hy.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var bE=`
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
`,ly=!1;function uy(){if(ly)return;ly=!0;let e=document.createElement("style");e.textContent=bE,document.head.appendChild(e)}var wE='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function _E(e){return!e||!e.visit||!Md()?"":(uy(),`<button type="button" class="visit-btn" data-visit="${Ji(e.slug||"")}" aria-label="Visit what remained: watch ${Ji(e.title)} come to life">${wE}<span>Visit what remained</span></button>`)}function ME(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let l=Math.random()*255;s[c]=s[c+1]=s[c+2]=l,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var $l=null;function kE(e){if($l||!e||!e.visit)return;uy();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(hy.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${Ji(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Ji(e.title)}, ${Ji(cy(e))}" src="${Ji(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Ji(e.title)}</span>
			<span class="visit-meta">${Ji(cy(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=ME(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),l=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,l));let f=m=>{m.key==="Escape"?(m.preventDefault(),p()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),d()),m.stopImmediatePropagation()};window.addEventListener("keydown",f,!0);let u=m=>m.stopImmediatePropagation();window.addEventListener("keyup",u,!0);let h=!1;function d(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function v(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>d()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&d()}),r.addEventListener("ended",d),r.addEventListener("error",d);function p(){if($l){$l=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",f,!0),window.removeEventListener("keyup",u,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",p),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}d()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&p(),g.dataset.act==="again"&&(s.forEach(clearTimeout),v()))}),r.src=e.visit.video,$l={close:p},requestAnimationFrame(()=>{n.classList.add("on"),c(v,1300)})}var fy={};function EE(e){if(!e||!e.visit||fy[e.visit.video]||!Md())return;fy[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}dy.exports={available:Md,button:_E,open:kE,warm:EE,get active(){return!!$l}}});var my=de((TT,vy)=>{"use strict";var SE=ha(),mc=[0,0],uc=[0,0],wi=null,Sd=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(mc[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),mc[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),Sd=performance.now())},{passive:!0});let e=()=>{Sd=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(wi||(wi=[t.gamma,t.beta]),wi[0]+=(t.gamma-wi[0])*.01,wi[1]+=(t.beta-wi[1])*.01,mc[0]=Math.max(-1,Math.min(1,(t.gamma-wi[0])/14)),mc[1]=Math.max(-1,Math.min(1,(t.beta-wi[1])/14)))},{passive:!0})}var py=0,dc=null,Hh=null,Ja=[0,0,0],Ed=0,pc=null,vc=0,js={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},AE={apply(e,t){let o=Math.min(.1,Math.max(0,t-py));py=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let l=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],f=!dc;if(dc&&o>0){let b=[n[0]-dc[0],n[1]-dc[1],n[2]-dc[2]],k=Math.hypot(b[0],b[1],b[2]);if(k>2.5)f=!0;else{let L=Math.min(1,o*5);for(let N=0;N<3;N++)Ja[N]+=(b[N]/o-Ja[N])*L}let E=Math.hypot(r[0]-Hh[0],r[1]-Hh[1],r[2]-Hh[2]);vc=k/o<.12&&E/o<.2?vc+o:0}f&&(Ja[0]=Ja[1]=Ja[2]=0,vc=0),dc=n.slice(),Hh=r.slice(),Ed=Math.hypot(Ja[0],Ja[1],Ja[2]);let u=Math.min(1,o*2.6);uc[0]+=(mc[0]-uc[0])*u,uc[1]+=(mc[1]-uc[1])*u;let h=Math.max(.03,Math.min(.32,i*.05)),d=(SE.isPhone&&!wi?1.5:1)*Math.min(1,vc/2.5),v=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*d,p=Math.sin(t*.097+.6)*h*.16*d,m=uc[0]*h+v,g=-uc[1]*h*.45+p;for(let b=0;b<3;b++)js.eye[b]=n[b]+s[b]*m+l[b]*g,js.target[b]=r[b]+(s[b]*m+l[b]*g)*.12;n[1]>.05&&(js.eye[1]=Math.max(.05,js.eye[1]));let y=Ja[0]*s[0]+Ja[2]*s[2];return js.fov=e.fov+Math.min(3.5,Ed*.55),js.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),js},pull(e,t){(pc===null||!(Math.abs(e.focus-pc)<40))&&(pc=e.focus);let o=1/60;pc+=(e.focus-pc)*Math.min(1,o*3.2),e.focus=pc,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,vc/3))},get speed(){return Ed},get resting(){return vc>2&&performance.now()-Sd>2e3}};vy.exports=AE});var Ad=de((LT,gy)=>{gy.exports=1e-6});var Td=de((zT,xy)=>{xy.exports=TE;function TE(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var by=de((CT,yy)=>{yy.exports=LE;function LE(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Ld=de((NT,wy)=>{wy.exports=zE;function zE(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var zd=de((RT,_y)=>{_y.exports=CE;function CE(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var Cd=de((PT,My)=>{My.exports=NE;function NE(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Ay=de((OT,Sy)=>{Sy.exports=PE;var ky=Ld(),Ey=zd(),RE=Cd();function PE(e,t){var o=ky(e[0],e[1],e[2]),n=ky(t[0],t[1],t[2]);Ey(o,o),Ey(n,n);var r=RE(o,n);return r>1?0:Math.acos(r)}});var Ly=de((IT,Ty)=>{Ty.exports=OE;function OE(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Cy=de((FT,zy)=>{zy.exports=IE;function IE(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var Ry=de((DT,Ny)=>{Ny.exports=FE;var Nd=Ad();function FE(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=Nd*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=Nd*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=Nd*Math.max(1,Math.abs(r),Math.abs(s))}});var Oy=de((GT,Py)=>{Py.exports=DE;function DE(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var Fy=de(($T,Iy)=>{Iy.exports=GE;function GE(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var Rd=de((qT,Dy)=>{Dy.exports=$E;function $E(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var $y=de((HT,Gy)=>{Gy.exports=Rd()});var Pd=de((UT,qy)=>{qy.exports=qE;function qE(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var Uy=de((BT,Hy)=>{Hy.exports=Pd()});var Od=de((jT,By)=>{By.exports=HE;function HE(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var Wy=de((WT,jy)=>{jy.exports=Od()});var Xy=de((VT,Vy)=>{Vy.exports=UE;function UE(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var Ky=de((XT,Yy)=>{Yy.exports=BE;function BE(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var Zy=de((YT,Qy)=>{Qy.exports=jE;function jE(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var e3=de((KT,Jy)=>{Jy.exports=WE;function WE(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var o3=de((QT,t3)=>{t3.exports=VE;function VE(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var r3=de((ZT,n3)=>{n3.exports=XE;function XE(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var i3=de((JT,a3)=>{a3.exports=YE;function YE(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var Id=de((eL,s3)=>{s3.exports=KE;function KE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var l3=de((tL,c3)=>{c3.exports=Id()});var Fd=de((oL,f3)=>{f3.exports=QE;function QE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var u3=de((nL,h3)=>{h3.exports=Fd()});var Dd=de((rL,d3)=>{d3.exports=ZE;function ZE(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var v3=de((aL,p3)=>{p3.exports=Dd()});var Gd=de((iL,m3)=>{m3.exports=JE;function JE(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var x3=de((sL,g3)=>{g3.exports=Gd()});var b3=de((cL,y3)=>{y3.exports=e8;function e8(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var _3=de((lL,w3)=>{w3.exports=t8;function t8(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var k3=de((fL,M3)=>{M3.exports=o8;function o8(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var S3=de((hL,E3)=>{E3.exports=n8;function n8(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var T3=de((uL,A3)=>{A3.exports=r8;function r8(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var z3=de((dL,L3)=>{L3.exports=a8;function a8(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var N3=de((pL,C3)=>{C3.exports=i8;function i8(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var P3=de((vL,R3)=>{R3.exports=s8;function s8(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],l=o[3],f=l*n+s*a-c*r,u=l*r+c*n-i*a,h=l*a+i*r-s*n,d=-i*n-s*r-c*a;return e[0]=f*l+d*-i+u*-c-h*-s,e[1]=u*l+d*-s+h*-i-f*-c,e[2]=h*l+d*-c+f*-s-u*-i,e}});var I3=de((mL,O3)=>{O3.exports=c8;function c8(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=t[0],e[1]=r+i*l-s*c,e[2]=a+i*c+s*l,e}});var D3=de((gL,F3)=>{F3.exports=l8;function l8(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=r+s*c+i*l,e[1]=t[1],e[2]=a+s*l-i*c,e}});var $3=de((xL,G3)=>{G3.exports=f8;function f8(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=r+i*l-s*c,e[1]=a+i*c+s*l,e[2]=t[2],e}});var H3=de((yL,q3)=>{q3.exports=h8;var es=Td()();function h8(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)es[0]=e[i],es[1]=e[i+1],es[2]=e[i+2],r(es,es,a),e[i]=es[0],e[i+1]=es[1],e[i+2]=es[2];return e}});var B3=de((bL,U3)=>{U3.exports={EPSILON:Ad(),create:Td(),clone:by(),angle:Ay(),fromValues:Ld(),copy:Ly(),set:Cy(),equals:Ry(),exactEquals:Oy(),add:Fy(),subtract:Rd(),sub:$y(),multiply:Pd(),mul:Uy(),divide:Od(),div:Wy(),min:Xy(),max:Ky(),floor:Zy(),ceil:e3(),round:o3(),scale:r3(),scaleAndAdd:i3(),distance:Id(),dist:l3(),squaredDistance:Fd(),sqrDist:u3(),length:Dd(),len:v3(),squaredLength:Gd(),sqrLen:x3(),negate:b3(),inverse:_3(),normalize:zd(),dot:Cd(),cross:k3(),lerp:S3(),random:T3(),transformMat4:z3(),transformMat3:N3(),transformQuat:P3(),rotateX:I3(),rotateY:D3(),rotateZ:$3(),forEach:H3()}});var V3=de((wL,W3)=>{"use strict";function j3(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}W3.exports=function(t){let o=t.ownerDocument||document,n=j3(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let f=t.requestPointerLock||t.webkitRequestPointerLock;if(f)try{let u=f.call(t);u&&u.catch&&u.catch(()=>{})}catch(u){}};t.addEventListener("mousedown",c,!1);let l=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=j3(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",l),o.addEventListener("webkitpointerlockchange",l),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",f=>{r&&(a.dx=f.movementX||f.webkitMovementX||0,a.dy=f.movementY||f.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var Z3=de((kL,Q3)=>{"use strict";var Ws=ec(),Vs=B3(),u8=V3(),_L=Math.PI/4,ML=Math.PI/6,X3=2,d8=1,p8=2.4,v8=2.4,m8=1e3,g8=5,x8=7,$d=lr().C,ql=[[7,1.6],[7,$d.zc],[$d.x1-2.95,$d.zc]],ts=ql.slice(1).map((e,t)=>{let o=ql[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),qd=ts.reduce((e,t)=>e+t.len,0);function Y3(e){let t=Math.max(0,Math.min(qd,e));for(let n of ts){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=ql[ql.length-1];return[o[0],o[1]]}function y8(e){let t=0;for(let n=0;n<ts.length;n++){let r=ts[n],a=t+r.len;if(e<a-1e-4||n===ts.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?ts[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=ts[ts.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var b8=Math.PI/4,w8=7,_8=140,M8=70,K3=(e,t,o)=>(1-e)*t+e*o,k8=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Q3.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[x8,X3,ql[0][1]],c=0,l=1,f=0,u=[.707,0,.707],h=[0,1,0],d=[0,0,0],v=.5,p=Ws.identity([]),m=Ws.identity([]),g=!1,y=[0,0,0],b=[0,0,0],k=1,E=!1;let L=Xe=>{n[1]+=Xe*b8},N=(Xe,ht,vt)=>{if(Xe=Math.max(Math.min(Xe,100),-100),ht=Math.max(Math.min(ht,100),-100),n[0]=0,E){a=0;return}for(a+=Xe;a>=vt;)L(1),a-=vt;for(;a<=-vt;)L(-1),a+=vt};u8(document.body).on("attain",Xe=>{Xe.on("data",ht=>{N(ht.dx,ht.dy,_8)})});let O=null,te=null,G=0,re={x:0,y:0},q=58,Y=document.createElement("div");Y.id="museum-mobile-controls",Y.innerHTML=`

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
	`,document.body.appendChild(Y);let be=Y.querySelector("#museum-joystick"),qe=Y.querySelector("#museum-joystick-knob"),Ae=()=>{qe.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},he=Xe=>{let ht=Xe.clientX-re.x,vt=Xe.clientY-re.y,Jt=Math.hypot(ht,vt);if(Jt>q&&(ht=ht/Jt*q,vt=vt/Jt*q),qe.style.transform=`translate(
				calc(-50% + ${ht}px),
				calc(-50% + ${vt}px)
			)`,Jt<10){i[0]=0,i[2]=0;return}let Lt=ht/q,mt=vt/q;i[0]=0,i[2]=Math.abs(mt)>.15?mt:0},Te=(Xe,ht)=>{for(let vt=0;vt<Xe.length;vt++)if(Xe[vt].identifier===ht)return Xe[vt];return null},dt=Xe=>!!(Xe&&Xe.closest&&Xe.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),qt=Xe=>{if(!dt(Xe.target)&&(Xe.cancelable&&Xe.preventDefault(),!E))for(let ht=0;ht<Xe.changedTouches.length;ht++){let vt=Xe.changedTouches[ht];if(O===null&&vt.clientX<window.innerWidth*.48){O=vt.identifier;let Jt=be.getBoundingClientRect();re.x=Jt.left+Jt.width/2,re.y=Jt.top+Jt.height/2,he(vt)}else te===null&&vt.clientX>=window.innerWidth*.48&&(te=vt.identifier,G=vt.clientX,a=0)}},He=Xe=>{if(dt(Xe.target)||(Xe.cancelable&&Xe.preventDefault(),E))return;let ht=O===null?null:Te(Xe.touches,O);ht&&he(ht);let vt=te===null?null:Te(Xe.touches,te);if(vt){let Jt=vt.clientX-G;G=vt.clientX,N(Jt,0,M8)}},pt=Xe=>{if(!dt(Xe.target)){Xe.cancelable&&Xe.preventDefault();for(let ht=0;ht<Xe.changedTouches.length;ht++){let vt=Xe.changedTouches[ht];vt.identifier===O&&(O=null,Ae()),vt.identifier===te&&(te=null)}}};document.addEventListener("touchstart",qt,{passive:!1}),document.addEventListener("touchmove",He,{passive:!1}),document.addEventListener("touchend",pt,{passive:!1}),document.addEventListener("touchcancel",pt,{passive:!1});let St=document.createElement("style");St.textContent=`

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
	`,document.head.appendChild(St);var Zt={};let ao=Xe=>{if(document.body.classList.contains("in-conservatory")){Zt={};return}if(Xe.defaultPrevented||Xe.ctrlKey||Xe.altKey||Xe.metaKey)return;let ht=Xe.type==="keydown";Zt[Xe.code]=ht,ht&&!Xe.repeat&&!E&&((Xe.code==="KeyA"||Xe.code==="ArrowLeft")&&L(-1),(Xe.code==="KeyD"||Xe.code==="ArrowRight")&&L(1)),g=!1;let vt=Zt.KeyW||Zt.ArrowUp?1:0;i=[0,0,(Zt.KeyS||Zt.ArrowDown?1:0)-vt],Xe.preventDefault()};window.addEventListener("keydown",ao),window.addEventListener("keyup",ao);var Ho=0;return{pos:s,fmouse:r,forward:u,up:h,setPaused:Xe=>{E=!!Xe,E&&(i[0]=0,i[2]=0,Ae())},place:(Xe,ht)=>{c=Math.max(0,Math.min(qd,Xe));let vt=Y3(c);s[0]=vt[0],s[2]=vt[1],n[1]=ht,r[1]=ht,a=0,l=1},view:()=>p,proj:()=>(Ws.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Xe})=>{let ht=Xe-Ho;Ho=Xe;let vt=[0,0,0],Jt=[];Vs.set(u,Math.sin(r[1]),0,-Math.cos(r[1])),Vs.set(h,0,1,0);let po=g?v8:p8,Lt=Math.sin(n[1]),mt=-Math.cos(n[1]),me=y8(c),tt=Lt*me.ahead[0]+mt*me.ahead[1],zt=Lt*me.back[0]+mt*me.back[1],ct=l;Math.max(tt,zt)>.3&&(ct=tt>=zt?1:-1);let Ve=E?0:-i[2]*po;f+=(Ve-f)*(1-Math.exp(-Math.min(ht,.1)*5.5)),Ve===0&&Math.abs(f)<.01&&(f=0);let go=f*ct*Math.min(ht,.1);E&&(i[0]=0,i[2]=0,go=0,f=0),go!==0&&(l=Math.sign(go)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(qd,c+go));let _=Y3(c);Vs.set(d,_[0]-s[0],0,_[1]-s[2]);let oo=Vs.len(d);oo===0&&v!==.25&&(v=(Math.abs((v+.5)%1-.5)-.25)*.8+.25,(v+.01)%.25<.02&&(v=.25));let Wt=v;if(v+=oo/(g?g8:m8),s[1]=X3,Vs.add(s,s,d),k<1){k+=ht/d8,k=Math.min(k,1);let xo=k8(k);Vs.set(s,K3(xo,y[0],b[0]),s[1],K3(xo,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(ht,.1)*w8),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),Ws.identity(p),Ws.rotateX(p,p,0),Ws.rotateY(p,p,r[1]),Ws.translate(p,p,Vs.scale(vt,s,-1))}}}});var eb=de((EL,J3)=>{"use strict";var{skylightGLSL:E8,Z_START:S8,Z_END:A8,GLASS_Y:T8}=H0(),{oculusGLSL:L8,A:Xs}=pa(),{windowLightGLSL:z8,C:Uh}=lr(),{doorLightGLSL:C8}=Pi(),Bh=or(),os=gh(),N8=vh(),gc=null,ga=e=>e.toFixed(4),Hd=.1,Ud=700,xc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function R8(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],d=t[11],v=t[12],p=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,k=o*l-a*i,E=n*c-r*s,L=n*l-a*s,N=r*l-a*c,W=f*p-u*v,O=f*m-h*v,te=f*g-d*v,G=u*m-h*p,re=u*g-d*p,q=h*g-d*m,Y=y*q-b*re+k*G+E*te-L*O+N*W;return Y?(Y=1/Y,e[0]=(s*q-c*re+l*G)*Y,e[1]=(r*re-n*q-a*G)*Y,e[2]=(p*N-m*L+g*E)*Y,e[3]=(h*L-u*N-d*E)*Y,e[4]=(c*te-i*q-l*O)*Y,e[5]=(o*q-r*te+a*O)*Y,e[6]=(m*k-v*N-g*b)*Y,e[7]=(f*N-h*k+d*b)*Y,e[8]=(i*re-s*te+l*W)*Y,e[9]=(n*te-o*re-a*W)*Y,e[10]=(v*L-p*k+g*y)*Y,e[11]=(u*k-f*L-d*y)*Y,e[12]=(s*O-i*G-c*W)*Y,e[13]=(o*G-n*O+r*W)*Y,e[14]=(p*b-v*E-m*y)*Y,e[15]=(f*E-u*b+h*y)*Y,e):null}function P8(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var O8=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;J3.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>os.zone==="studio"?4:t.post>=2?2:4,i=o?7:11,s=He=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},He||{})),c=()=>e.framebuffer({color:s(),depth:!1}),l=s(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,u=e.framebuffer({color:l,depth:f||!0}),h=[c(),c()],d=[c(),c()],v=[c(),c()],p=[c(),c()],m=new Array(16).fill(0),g=new Array(16).fill(0),y=[0,0,0],b={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0,glitch:0},k={position:[-1,-1,3,-1,-1,3]},E=(He,pt,St)=>e(Object.assign({vert:O8,frag:He,attributes:k,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:pt,framebuffer:e.prop("out")},St||{})),L=[2.6,0,S8-3.2,12.6,T8,A8+.4],N=[Xs.x0-.2,0,Xs.z0,Xs.x1,Xs.domeTop,Xs.z1],W=[Uh.x0,0,Uh.z0,Uh.x1,7.6,Uh.z1],O=[.35,0,.35,13.65,7.6,9],te=N8.AIR_BOX,G=He=>`vec3(${ga(He[0])}, ${ga(He[1])}, ${ga(He[2])}), vec3(${ga(He[3])}, ${ga(He[4])}, ${ga(He[5])})`,re=`
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

	${E8()}
	${L8()}
	${z8()}
	${C8()}
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
			vec2 t = hitBox(eye, rd, ${G(L)});
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
			vec2 t = hitBox(eye, rd, ${G(N)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${ga(Xs.dome.base)} && p.x > ${ga(Xs.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${G(W)});
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
			vec2 t = hitBox(eye, rd, ${G(te)});
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
	}`,{depthTex:()=>f,invVP:()=>m,eye:()=>y,time:e.context("time"),night:()=>Bh.night,strength:()=>be,strength5:()=>qe,...He===re?{}:{studioBake:()=>gc.bakedSun(e)}}),Y=q(re),be=[0,0,0,0],qe=0;function Ae(){let He=xc.shafts*b.shafts,pt=Bh.night;return be[0]=os.box(L)?.06*He*(1+.9*pt):0,be[1]=os.box(N,!1,"court")?.1*He*(1+.9*pt):0,be[2]=os.box(W)?.07*He*(1+.4*pt):0,be[3]=os.box(O)?.04*He*(1-.75*pt):0,os.zone==="studio"?(be[0]=be[1]=be[2]=be[3]=0,qe=.065*He*(1+1*pt)):qe=0,be[0]+be[1]+be[2]+be[3]+qe>5e-4}let he=E(`
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
	uniform float time, exposure, vignette, grain, letterbox, fade, aperture, focus, hasDepth, bloomK, night, glitch;
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
		return 2.0 * ${ga(Hd)} * ${ga(Ud)} / (${ga(Ud+Hd)} - z * ${ga(Ud-Hd)});
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

		// the picture breaking up: lines slipping sideways, blocks torn out
		// and shifted, the frame rolling
		float gfr = floor(time * 18.0);
		if (glitch > 0.0) {
			float row = floor(p.y * mix(14.0, 60.0, hash12(vec2(gfr, 1.0))));
			float slip = step(1.0 - glitch * 0.65, hash12(vec2(row, gfr)));
			p.x = fract(p.x + (hash12(vec2(row * 2.3, gfr + 7.0)) - 0.5) * 0.25 * glitch * slip);
			vec2 blk = floor(p * vec2(12.0, 8.0));
			if (hash12(blk + gfr * 1.3) > 1.0 - glitch * 0.35) p = fract(p + (vec2(hash12(blk + gfr), hash12(blk.yx + gfr)) - 0.5) * 0.18 * glitch);
			p.y = fract(p.y + glitch * glitch * 0.3 * step(0.7, hash12(vec2(gfr, 4.0))) * hash12(vec2(gfr, 5.0)));
		}

		vec3 c = fxaa(p);
		if (glitch > 0.0) {
			// the colours parting
			float sh = 0.012 * glitch * (0.5 + hash12(vec2(gfr, 9.0)));
			c.r = texture2D(scene, p + vec2(sh, 0.0)).r;
			c.b = texture2D(scene, p - vec2(sh, 0.0)).b;
		}

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

		if (glitch > 0.0) {
			// scan lines, a crush of snow, and the odd frame gone wrong
			col *= 1.0 - 0.35 * glitch * step(0.5, fract(gl_FragCoord.y * 0.5));
			float sn = hash12(floor(gl_FragCoord.xy / 3.0) + gfr * 31.0);
			col = mix(col, vec3(sn), glitch * 0.35 * step(0.55, hash12(vec2(floor(p.y * 40.0), gfr))));
			if (hash12(vec2(gfr, 11.0)) > 1.0 - glitch * 0.12) col = vec3(1.0) - col;
			col = mix(col, floor(col * 4.0) / 4.0, glitch * 0.5);
		}
		col = mix(col, fadeColor, fade);
		gl_FragColor = vec4(col, 1.0);
	}`,{scene:()=>l,depthTex:()=>f||l,soft:()=>h[0],bloomA:()=>d[0],bloomB:()=>v[0],shafts:()=>p[0],res:()=>[u.width,u.height],time:e.context("time"),exposure:()=>xc.exposure*b.exposure,vignette:()=>Math.min(1,xc.vignette+b.vignette+.22*Bh.night+(os.zone==="studio"?.2:0)),night:()=>Bh.night,grain:()=>xc.grain,bloomK:()=>xc.bloom,letterbox:()=>b.letterbox,fade:()=>b.fade,fadeColor:()=>b.fadeColor,glitch:()=>b.glitch||0,aperture:()=>t.post>=2?b.aperture:0,focus:()=>b.focus,hasDepth:n?1:0},{framebuffer:null}),qt=e({framebuffer:()=>u});return{shot:b,look:xc,hasDepth:n,useStudio(He){gc!==He&&(gc=He,Y=q(He?He.sunGLSL():re))},capture(He,pt,St){let Zt=Math.max(.4,Math.min(1,t.scale||1)),ao=Math.max(2,Math.round(He.drawingBufferWidth*Zt/2)*2),Ho=Math.max(2,Math.round(He.drawingBufferHeight*Zt/2)*2);(u.width!==ao||u.height!==Ho)&&u.resize(ao,Ho);let Xe=Math.max(1,Math.ceil(ao/2)),ht=Math.max(1,Math.ceil(Ho/2));h.forEach(vt=>vt.resize(Xe,ht)),d.forEach(vt=>vt.resize(Math.max(1,Math.ceil(ao/4)),Math.max(1,Math.ceil(Ho/4)))),v.forEach(vt=>vt.resize(Math.max(1,Math.ceil(ao/8)),Math.max(1,Math.ceil(Ho/8)))),p.forEach(vt=>vt.resize(Math.max(1,Math.ceil(ao/a())),Math.max(1,Math.ceil(Ho/a())))),P8(g,pt.proj,pt.view),R8(m,g),y[0]=pt.eye[0],y[1]=pt.eye[1],y[2]=pt.eye[2],qt(()=>{e.clear({color:[0,0,0,1],depth:1}),St()})},present(){let He=pt=>[pt.width,pt.height];n&&t.post>=1&&Ae()?(Y({out:p[0]}),he({out:p[1],src:p[0],dir:[1,0],size:He(p[0])}),he({out:p[0],src:p[1],dir:[0,1],size:He(p[0])})):e.clear({color:[0,0,0,1],framebuffer:p[0]}),Te({out:h[0],src:l,size:[u.width,u.height],threshold:0}),he({out:h[1],src:h[0],dir:[1,0],size:He(h[0])}),he({out:h[0],src:h[1],dir:[0,1],size:He(h[0])}),Te({out:d[0],src:h[0],size:He(h[0]),threshold:os.zone==="studio"&&gc&&gc.POST&&gc.POST.threshold||.42}),he({out:d[1],src:d[0],dir:[1,0],size:He(d[0])}),he({out:d[0],src:d[1],dir:[0,1],size:He(d[0])}),Te({out:v[0],src:d[0],size:He(d[0]),threshold:0}),he({out:v[1],src:v[0],dir:[1.5,0],size:He(v[0])}),he({out:v[0],src:v[1],dir:[0,1.5],size:He(v[0])}),dt({out:null})}}}});var ab=de((SL,rb)=>{"use strict";var tb=or().GLSL,I8=Ss(),Bd=Pi(),{C:F8,FAR_DOOR:D8}=lr(),G8=100*Math.PI/180,ob=e=>[D8.x-e[2],e[1],F8.zc-7+e[0]],nb=e=>[-e[2],e[1],e[0]];function $8(e){let t=[],o=[],n=[],r=[],a=I8.createBuilder(t,o,n,r);Bd.addFrames(a,e);let i=Bd.glassPanes(e),s=c=>{let l=[];for(let f=0;f<c.length;f+=3)l.push([c[f],c[f+1],c[f+2]]);return l};return{position:s(t),normal:s(o),elements:n,glass:i}}rb.exports=e=>{let t=Bd.DOOR,o=["left","right"].map(f=>{let u=$8(f),h=u.position.length;return{part:f,hinge:f==="left"?t.x0:t.x1,sign:f==="left"?-1:1,src:u.position.map(d=>d.slice()),srcN:u.normal.map(d=>d.slice()),srcG:u.glass.map(d=>d.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(u.elements),type:"uint32"}),glassCount:u.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(u.glass.length*3),outGN:new Float32Array(u.glass.length*3)}}),n=null;function r(f){if(f!==n){n=f;for(let u of o){let h=u.sign*f,d=Math.cos(h),v=Math.sin(h),p=y=>{let b=y[0]-u.hinge,k=y[2];return[u.hinge+b*d+k*v,y[1],-b*v+k*d]},m=y=>[y[0]*d+y[2]*v,y[1],-y[0]*v+y[2]*d];u.src.forEach((y,b)=>{let k=ob(p(y));u.outP.set(k,b*3),u.outN.set(nb(m(u.srcN[b])),b*3)});let g=nb(m([0,0,1]));u.srcG.forEach((y,b)=>{u.outG.set(ob(p(y)),b*3),u.outGN.set(g,b*3)}),u.pos.subdata(u.outP),u.nrm.subdata(u.outN),u.gpos.subdata(u.outG),u.gnrm.subdata(u.outGN)}}}r(0);let a=`
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
		${tb}
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
		${tb}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,l=()=>{r(c*G8);for(let f of o)i({pos:f.pos,nrm:f.nrm,el:f.el})};return l.glass=()=>{for(let f of o)s({pos:f.gpos,nrm:f.gnrm,count:f.glassCount})},l.setOpen=f=>{c=f||0},l.openNow=()=>c,l}});var sb=de((AL,ib)=>{"use strict";var q8=or().GLSL,{skylightGLSL:H8}=H0(),{oculusGLSL:U8}=pa(),{windowLightGLSL:B8}=lr(),Pa=.22;function j8(){let e=[],t=[],o=[],n=[],i=(f,u)=>{let h=Pa*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9)*(u>0?1.06:.94),d=f*Pa-Pa*.12,v=u*h,p=Math.abs(u)*h*.42-.14*f*f*Pa;p+=Math.sin(f*17+(u>0?0:2.1))*.012*Pa*u*u;let m=(f-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=p*g-v*y,k=p*y+v*g;return[d,b,k+.05*Pa*f*f]},s=(f,u)=>{let d=i(Math.min(1,f+.01),u),v=i(Math.max(0,f-.01),u),p=i(f,Math.min(1,u+.01)),m=i(f,Math.max(-1,u-.01)),g=[d[0]-v[0],d[1]-v[1],d[2]-v[2]],y=[p[0]-m[0],p[1]-m[1],p[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],k=Math.hypot(b[0],b[1],b[2])||1,E=b[1]<0?-1:1;return[b[0]/k*E,b[1]/k*E,b[2]/k*E]};for(let f=0;f<=18;f++){let u=f/18;for(let h=0;h<=5*2;h++){let d=h/5-1;e.push(i(u,d)),t.push(s(Math.min(.97,Math.max(.03,u)),d)),o.push([u,d])}}let c=5*2+1;for(let f=0;f<18;f++)for(let u=0;u<c-1;u++){let h=f*c+u,d=h+1,v=h+c,p=v+1;n.push([h,v,d],[d,v,p])}let l=e.length;return e.push([-Pa*.12,0,-.003],[-Pa*.12,0,.003],[-Pa*.24,-.01,.0015],[-Pa*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([l,l+2,l+1],[l,l+3,l+2]),{pos:e,nrm:t,uv:o,idx:n}}ib.exports=e=>{let t=j8(),o=e({vert:`
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
		${q8}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${H8()}
		${U8()}
		${B8()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=or(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Pa*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var fb=de((TL,lb)=>{"use strict";var{skylightGLSL:W8,Z_START:cb,Z_END:V8}=H0(),{oculusGLSL:X8,A:yc}=pa(),{windowLightGLSL:Y8,C:Ys}=lr();lb.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=Ys.x0+.6,l=Ys.x1-.3,f=[];for(let v=0;v<o;v++)f.push([2.5+s()*10.5,.3+s()*8,cb-3.5+s()*(V8-cb+4.5),s()]);for(let v=0;v<n;v++)f.push([yc.x0+.3+s()*(yc.x1-yc.x0-.6),.3+s()*7.5,yc.z0+.3+s()*(yc.z1-yc.z0-.6),s()]);for(let v=0;v<r;v++)f.push([c+s()*(l-c),.2+s()*5.6,Ys.z0+.25+s()*(Ys.z1-Ys.z0-.5),s()]);let u=v=>v.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],d=e({vert:`
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

		${W8()}
		${X8()}
		${Y8()}

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
				p.x = ${u(c)} + mod(p.x - ${u(c)} - gust.x * (0.55 + 0.9 * seed.w), ${u(l-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${u(Ys.z0+.1)}, ${u(Ys.z1-.1)});
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
		}`,attributes:{seed:f},count:f.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:v=>v.viewportHeight*.006,focus:(v,p)=>p&&p.focus||6,aperture:(v,p)=>p&&p.aperture||0,wake0:(v,p)=>(p&&p.wake||h)[0],wake1:(v,p)=>(p&&p.wake||h)[1],wake2:(v,p)=>(p&&p.wake||h)[2],wake3:(v,p)=>(p&&p.wake||h)[3],wakeDir:(v,p)=>p&&p.wakeDir||[0,0,1],gust:(v,p)=>p&&p.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return v=>d(v||{})}});var mb=de((LL,vb)=>{"use strict";var{C:pb}=lr(),hb=or(),ub=15.3,K8=37.1,db=pb.z1+.9,Q8=pb.z1+.7+16-.6;vb.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let l=0;l<o;l++){let f=.35+Math.pow(r(),1.8)*2.4;a.push([ub+r()*(K8-ub),f,db+r()*(Q8-db),r()])}let i=[],s=[];a.forEach(l=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(f=>{i.push(f[0],f[1]),s.push(...l)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>hb.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){hb.night>.01&&c()}}});var Vh=de((zL,oa)=>{"use strict";var gb=or(),ei=$i(),Z8=ec(),rs=Math.PI,st=e=>(+e).toFixed(4),Oa=e=>`vec3(${st(e[0])}, ${st(e[1])}, ${st(e[2])})`,Do={x0:-2.05,z0:41.45,z1:47.55,top:5.1},mo=-.55,$n=-2,tn=42.25,An=43.65,ba=45.35,Rr=46.75,Kn=2.75,ea=.12,J8=(mo+$n)/2,zo={x:-1.3,y:1.42,w:.42,h:.52,z:An,cell:.026},It={x0:-1.85,x1:-.75,top:.98,z0:An-.3,z1:An-.02},xa={x0:-1.44,x1:-1.16,y0:It.top-.002,y1:It.top+.018},ta={cx:-1.3,cz:An-.165,w:.2,d:.255,y:It.top+.0012},ar={x:-1.03,z:An-.14,r:.042,h:.075},qo={x:-.86,z:An-.12,h:.085,r:.019};qo.flame=[qo.x,It.top+.012+qo.h+.028,qo.z];var Wh={a:[ar.x-.004,It.top+.03,ar.z+.004],b:[ar.x-.13,It.top+.34,ar.z-.12]},on=[-1.5,2.42,44.66],Sn=[-1.78,1.95,tn+.09],ya={x:-1.32,z:44.08,y:.64,heading:.32},bb={window:{eye:[-1.3,1.33,42.8],target:[zo.x,1.37,An],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[ta.cx,It.top,ta.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},xr={z0:(tn+An)/2+.03,z1:(tn+An)/2+.56,y0:.98,y1:1.78,x:mo+.03,cell:.047};bb.peek={eye:[-1.2,1.42,42.95],target:[ei.PLAY.stoolX-ei.OFF[0],.85,ei.PLAY.keyFront+.2],fov:30};var ns={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function xb(){return`
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
		vec3 d = p - ${Oa(on)};
		if (d.z > -0.001) return 0.0;
		float t = (${st(zo.z)} - ${st(on[2])}) / d.z;
		vec2 g = (${Oa(on)} + d * t).xy - vec2(${st(zo.x)}, ${st(zo.y)});
		float inWin = (1.0 - smoothstep(${st(zo.w/2-.01)}, ${st(zo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${st(zo.h/2-.01)}, ${st(zo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${st(zo.z)}) / abs(${st(zo.z)} - ${st(on[2])}) / ${st(zo.cell)};
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
		vec3 c = ${Oa(qo.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${st(ar.x)}, ${st(ar.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${st(ar.x)}, ${st(ar.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${st(ar.r*.7)}, ${st(ar.r*1.6)}, r)) * (1.0 - smoothstep(${st(It.top+ar.h*.8)}, ${st(It.top+ar.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Oa(Wh.a)}, qb = ${Oa(Wh.b)};
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
		bool inB1 = p.z < ${st(An)} && p.z > ${st(tn-.04)} && p.x < ${st(mo+.02)};
		bool inPriest = p.z >= ${st(An)} && p.z < ${st(ba)} && p.x < ${st(mo)};
		bool inB2 = p.z >= ${st(ba)} && p.z < ${st(Rr+.04)} && p.x < ${st(mo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${st($n)}, ${st(mo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${st(Do.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Oa(ei.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Oa(on)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Oa(Sn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Oa(qo.flame)} - p;
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
	}`}var Gn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function wb(){let e=[],t=[],o=[],n=[],r=[],a=(l,f)=>[l[0]-f[0],l[1]-f[1],l[2]-f[2]],i=(l,f)=>[l[1]*f[2]-l[2]*f[1],l[2]*f[0]-l[0]*f[2],l[0]*f[1]-l[1]*f[0]],s=l=>{let f=Math.hypot(l[0],l[1],l[2])||1;return[l[0]/f,l[1]/f,l[2]/f]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(l,f,u,h)=>(e.push(l[0],l[1],l[2]),t.push(f[0],f[1],f[2]),o.push(u),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(l,f,u,h,d,v)=>{let p=s(i(a(f,l),a(h,l)));v=v||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(l,p,d,v[0]),g=c.v(f,p,d,v[1]),y=c.v(u,p,d,v[2]),b=c.v(h,p,d,v[3]);r.push(m,g,y,m,y,b)},c.box=(l,f,u,h,d,v,p)=>{let m=(g,y,b,k,E,L,N,W)=>c.quad(g,y,b,k,p,[[E,N],[L,N],[L,W],[E,W]]);m([h,f,u],[h,f,v],[h,d,v],[h,d,u],u,v,f,d),m([l,f,v],[l,f,u],[l,d,u],[l,d,v],v,u,f,d),m([l,d,u],[h,d,u],[h,d,v],[l,d,v],l,h,u,v),m([l,f,v],[h,f,v],[h,f,u],[l,f,u],l,h,v,u),m([l,f,v],[h,f,v],[h,d,v],[l,d,v],l,h,f,d),m([h,f,u],[l,f,u],[l,d,u],[h,d,u],h,l,f,d)},c.tube=(l,f,u,h)=>{h=h||6;let d=e.length/3;for(let v=0;v<l.length;v++){let p=l[Math.max(0,v-1)],m=l[Math.min(l.length-1,v+1)],g=s(a(m,p)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),k=i(b,g),E=typeof f=="function"?f(v/(l.length-1)):f;for(let L=0;L<=h;L++){let N=L/h*rs*2,W=Math.cos(N),O=Math.sin(N),te=[b[0]*W+k[0]*O,b[1]*W+k[1]*O,b[2]*W+k[2]*O];c.v([l[v][0]+te[0]*E,l[v][1]+te[1]*E,l[v][2]+te[2]*E],te,u,[v/(l.length-1),L/h])}}for(let v=0;v<l.length-1;v++)for(let p=0;p<h;p++){let m=d+v*(h+1)+p,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(l,f,u,h,d)=>{d=d||20;let v=e.length/3;for(let p=0;p<u.length;p++){let[m,g]=u[p],y=u[Math.max(0,p-1)],b=u[Math.min(u.length-1,p+1)],k=b[0]-y[0],E=b[1]-y[1];for(let L=0;L<=d;L++){let N=L/d*rs*2,W=Math.cos(N),O=Math.sin(N),te=s([E*W,-k,E*O]);c.v([l+W*m,g,f+O*m],te,h,[L/d,p/(u.length-1)])}}for(let p=0;p<u.length-1;p++)for(let m=0;m<d;m++){let g=v+p*(d+1)+m,y=g+d+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(l,f,u,h,d,v)=>{let p=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=p[m],y=p[(m+1)%4],b=[l+g[0],u,f+g[1]],k=[l+y[0],u,f+y[1]],E=[l,d,f],L=s(i(a(E,b),a(k,b))),N=c.v(b,L,v,[0,0]),W=c.v(k,L,v,[1,0]),O=c.v(E,L,v,[.5,1]);r.push(N,O,W)}},c.orient=()=>{for(let l=0;l<r.length;l+=3){let[f,u,h]=[r[l],r[l+1],r[l+2]],d=m=>[e[m*3],e[m*3+1],e[m*3+2]],v=i(a(d(u),d(f)),a(d(h),d(f))),p=[0,1,2].map(m=>t[f*3+m]+t[u*3+m]+t[h*3+m]);v[0]*p[0]+v[1]*p[1]+v[2]*p[2]<0&&(r[l+1]=h,r[l+2]=u)}return c},c}function jh(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var Qo={ys:1.78,a:.56,r:.78};Qo.apex=Qo.ys+Math.sqrt(Qo.r*Qo.r-(Qo.r-Qo.a)*(Qo.r-Qo.a));function eS(){let e=wb(),t=Gn.WOOD,o=Gn.CARVED,n=Gn.DARKWOOD,r=.06;e.box($n,0,tn,mo+.08,ea,Rr,n),e.box($n,Kn-.06,tn-.04,mo+.1,Kn,Rr+.04,t),e.box(mo,Kn-.2,tn-.06,mo+.12,Kn-.06,Rr+.06,t),e.box(mo+.02,Kn,tn-.08,mo+.14,Kn+.07,Rr+.08,n),e.box($n,ea,tn,$n+.04,Kn-.06,Rr,t);for(let[f,u,h]of[[tn-r,tn,-1],[Rr,Rr+r,1]]){e.box($n,0,f,mo+.08,Kn,u,t);let d=h<0?f-.018:u;e.box($n+.18,.45,Math.min(d,d+.018),mo-.12,2.35,Math.max(d,d+.018),n),e.box($n+.26,.55,Math.min(d,d+.03*h),mo-.2,2.25,Math.max(d,d+.03*h),t)}{let f=An-.02,u=An+.02,h=zo.x-zo.w/2,d=zo.x+zo.w/2,v=zo.y-zo.h/2,p=zo.y+zo.h/2;e.box($n,ea,f,mo,xa.y0,u,t),e.box($n,xa.y0,f,xa.x0,xa.y1,u,t),e.box(xa.x1,xa.y0,f,mo,xa.y1,u,t),e.box($n,xa.y1,f,mo,v,u,t),e.box($n,v,f,h,p,u,t),e.box(d,v,f,mo,p,u,t),e.box($n,p,f,mo,Kn-.06,u,t);let m=.05,g=f-.025;e.box(h-m,v-m,g,d+m,v,f,n),e.box(h-m,p,g,d+m,p+m,f,n),e.box(h-m,v,g,h,p,f,n),e.box(d,v,g,d+m,p,f,n),e.box(h-m-.02,p+m,g-.015,d+m+.02,p+m+.03,f,t),e.box(xa.x0-.01,xa.y1,f-.006,xa.x1+.01,xa.y1+.008,f,Gn.BRASS)}{let f=xr,u=mo+.008,h=mo+.052;e.box(u,f.y0,f.z0-.035,h,f.y1,f.z0,n),e.box(u,f.y0,f.z0,h,f.y0+.04,f.z1,n),e.box(u,f.y1-.04,f.z0,h,f.y1,f.z1,n),e.box(u+.008,ea,f.z0-.035,h-.008,f.y0,f.z1,t),e.box(h-.008,ea+.12,f.z0+.03,h,f.y0-.08,f.z1-.06,n),e.box(u-.004,f.y0-.012,f.z0-.045,h+.012,f.y0,f.z1,Gn.BRASS)}e.box($n,ea,ba-.02,mo,Kn-.06,ba+.02,t),e.box(It.x0,It.top-.035,It.z0,It.x1,It.top,It.z1,t),e.tube([[It.x0,It.top-.018,It.z0],[It.x1,It.top-.018,It.z0]],.02,t,8);for(let f of[It.x0+.1,It.x1-.1]){let u=[];for(let h=0;h<=8;h++){let d=h/8;u.push([f,It.top-.04-.22*d,It.z1-.02-.22*Math.cos(d*rs/2)])}e.tube(u,.018,n,6)}e.box($n+.06,.12,tn,mo-.1,.44,tn+.42,n),e.box($n+.08,.44,tn+.01,mo-.12,.52,tn+.41,Gn.CUSHION),e.box($n+.06,.12,Rr-.42,mo-.1,.44,Rr,n),e.box(Sn[0]-.05,Sn[1]-.16,tn,Sn[0]+.05,Sn[1]-.02,tn+.012,Gn.BRASS),e.tube([[Sn[0],Sn[1]-.09,tn+.012],[Sn[0],Sn[1]-.09,Sn[2]-.01],[Sn[0],Sn[1]-.05,Sn[2]]],.006,Gn.BRASS,6),e.lathe(Sn[0],Sn[2],[[0,Sn[1]-.05],[.028,Sn[1]-.035],[.034,Sn[1]+.01],[.024,Sn[1]+.06],[.026,Sn[1]+.065]],Gn.LAMPGLASS,16),e.box(ya.x-.22,.12,ya.z-.24,ya.x+.22,ya.y-.05,ya.z+.16,n),e.box(ya.x-.24,ya.y-.05,ya.z-.26,ya.x+.24,ya.y,ya.z+.18,Gn.CUSHION),e.tube([[on[0],Kn-.06,on[2]],[on[0],on[1]+.07,on[2]]],.005,Gn.BRASS,5),e.lathe(on[0],on[2],[[0,on[1]+.09],[.03,on[1]+.08],[.02,on[1]+.06]],Gn.BRASS,12),e.lathe(on[0],on[2],[[0,on[1]-.06],[.035,on[1]-.04],[.045,on[1]],[.035,on[1]+.05],[.018,on[1]+.07]],Gn.LAMPGLASS,16);let a=mo,i=mo+r;function s(f,u,h){let d=(f+u)/2,v=40,p=[];for(let g=0;g<=v;g++)p.push(ea+(Kn-.2-ea)*g/v);let m=[];p.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(Qo.ys+(Qo.apex-Qo.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let k=h?jh(y,Qo.ys,Qo.a,Qo.r):0,E=h?jh(b,Qo.ys,Qo.a,Qo.r):0,L=(N,W)=>[N,W];e.quad([i,y,d-k],[i,y,f],[i,b,f],[i,b,d-E],t,[L(d-k,y),L(f,y),L(f,b),L(d-E,b)]),e.quad([i,y,u],[i,y,d+k],[i,b,d+E],[i,b,u],t,[L(u,y),L(d+k,y),L(d+E,b),L(u,b)]),(k>0||E>0)&&(e.quad([a,y,d-k],[i,y,d-k],[i,b,d-E],[a,b,d-E],n),e.quad([i,y,d+k],[a,y,d+k],[a,b,d+E],[i,b,d+E],n),e.quad([a,y,f],[a,y,d-k],[a,b,d-E],[a,b,f],t),e.quad([a,y,d+k],[a,y,u],[a,b,u],[a,b,d+E],t))}if(e.box(a,Kn-.2,f,i,Kn-.06,u,t),e.box(i,Kn-.42,f+.05,i+.012,Kn-.24,u-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,k=b<.5?ea+(Qo.apex-ea)*(b*2):Qo.apex-(Qo.apex-ea)*((b-.5)*2),E=b<.5?-1:1;g.push([i+.01,Math.min(k,Qo.apex-.002),d+E*(jh(k,Qo.ys,Qo.a,Qo.r)+.03)])}e.tube(g,.022,n,6)}}s(tn,An,!0),s(ba,Rr,!0);{let f=An,u=ba,h=(f+u)/2;e.box(a,ea,f,i,Kn-.06,u,t);let d={ys:1.85,a:.55,r:.8},v=[];for(let p=0;p<=40;p++){let m=p/40,g=d.ys+Math.sqrt(d.r*d.r-(d.r-d.a)*(d.r-d.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;v.push([i+.012,Math.min(y,g-.002),h+b*jh(y,d.ys,d.a,d.r)])}v.push(v[0]),e.tube(v,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,u-.13],[i+.06,1.12,u-.13],[i+.06,1.12,u-.2]],.009,Gn.BRASS,6)}[tn-.02,An,ba,Rr+.02].forEach((f,u)=>{let h=u===1||u===2,d=.075,v=Kn+(h?.62:.4);e.box(mo+.06,0,f-d,mo+.06+2*d,v,f+d,t),e.box(mo+.04,v-.04,f-d-.02,mo+.08+2*d,v,f+d+.02,n);let p=mo+.06+d,m=h?.62:.5;e.spire(p,f,v,d*.95,v+m,t);for(let g=1;g<=3;g++){let y=v+m*g/4.2,b=d*.95*(1-g/4.2)+.02;for(let[k,E]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[p+k*(b-.02),y-.02,f+E*(b-.02)],[p+k*(b+.015),y+.03,f+E*(b+.015)]],.008,n,4)}e.lathe(p,f,[[0,v+m-.02],[.03,v+m+.03],[.022,v+m+.07],[0,v+m+.1]],t,10)});let l=(f,u,h)=>{let d=(f+u)/2,v=mo+.075,p=Kn+.07,m=p+h,g=[1,0,0],y=e.v([v,p,f],g,o,[f,p]),b=e.v([v,p,u],g,o,[u,p]),k=e.v([v,m,d],g,o,[d,m]);e.idx.push(y,b,k);let E=e.v([v-.04,p,f],[-1,0,0],t),L=e.v([v-.04,p,u],[-1,0,0],t),N=e.v([v-.04,m,d],[-1,0,0],t);e.idx.push(E,N,L);let W=[],O=[];for(let q=0;q<=10;q++){let Y=q/10;W.push([v+.02,p+h*Y,f+(d-f)*Y]),O.push([v+.02,p+h*Y,u+(d-u)*Y])}e.tube(W,.022,n,6),e.tube(O,.022,n,6);for(let q=2;q<=8;q+=2)for(let Y of[W[q],O[q]])e.tube([Y,[Y[0]+.01,Y[1]+.06,Y[2]+(Y===W[q]?-.02:.02)]],.01,n,4);e.lathe(v,d,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([q,Y])=>[q,Y]),t,10);let te=Math.min(.17,h*.32),G=p+h*.38,re=[];for(let q=0;q<=24;q++){let Y=q/24*rs*2;re.push([v+.012,G+Math.sin(Y)*te,d+Math.cos(Y)*te])}e.tube(re,.012,n,5)};l(tn-.02,An,.52),l(An,ba,.82),l(ba,Rr+.02,.52),e.lathe(ar.x,ar.z,[[0,It.top],[.036,It.top+.001],[ar.r,It.top+.012],[ar.r*1.02,It.top+.035],[.036,It.top+.052],[.02,It.top+.062],[.016,It.top+.068]],Gn.INKGLASS,24),e.lathe(ar.x,ar.z,[[.016,It.top+.064],[.021,It.top+.066],[.022,It.top+.075],[.016,It.top+.076],[0,It.top+.072]],Gn.BRASS,20);{let f=Wh.a,u=Wh.b,h=26,d=y=>{let b=Math.sin(y*rs)*.025;return[f[0]+(u[0]-f[0])*y+b*.6,f[1]+(u[1]-f[1])*y+b*.4,f[2]+(u[2]-f[2])*y+b]},v=[];for(let y=0;y<=h;y++)v.push(d(y/h));e.tube(v,y=>.0028*(1-.7*y)+6e-4,Gn.QUILL,5);let p=e.norm(e.sub(u,f)),m=e.norm(e.cross(p,[.2,1,.1])),g=e.cross(m,p);for(let y of[-1,1]){let b=e.pos.length/3;for(let k=0;k<=h;k++){let E=k/h,L=d(E),N=E<.28?0:(y>0?.03:.02)*Math.sin(rs*Math.pow((E-.28)/.72,.75)),W=N*.25,O=[L[0]+m[0]*y*N-g[0]*W,L[1]+m[1]*y*N-g[1]*W,L[2]+m[2]*y*N-g[2]*W];e.v(L,g,Gn.QUILL,[E,0]),e.v(O,g,Gn.QUILL,[E,y])}for(let k=0;k<h;k++){let E=b+k*2;e.idx.push(E,E+2,E+1,E+1,E+2,E+3)}}}return e.orient()}function tS(e,t){let n=Do.top,r=Do.x0;e(r-.35,0,Do.z0-.35,r,n+.35,Do.z1+.35),e(r,0,Do.z0-.35,-.35,n,Do.z0),e(r,0,Do.z1,-.35,n,Do.z1+.35),e(r,n,Do.z0,-.35,n+.35,Do.z1),e(.35,0,Do.z0-.42,.35+.16,n,Do.z0),e(.35,0,Do.z1,.35+.16,n,Do.z1+.42),e(.35,n,Do.z0-.5,.35+.18,n+.42,Do.z1+.5),e(.35,n+.42,Do.z0-.6,.35+.26,n+.52,Do.z1+.6),e(.35,0,Do.z0-.5,.35+.22,.42,Do.z0),e(.35,0,Do.z1,.35+.22,.42,Do.z1+.5),e(-.35-.01,0,Do.z0,.35+.12,.02,Do.z1),t(r,Do.z0,-.35,Do.z1)}oa.exports=e=>{let t=Fi(),o=gb.GLSL,n=eS(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${ei.roomGLSL()}
	${xb()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(Ae,he,Te,dt){let qt=[],He=[],pt=[],St=[],Zt=[],Xe=mo-.02,ht=Qo.apex+.08,vt=ea+.015;for(let Jt=0;Jt<=40;Jt++){let po=Jt/40,Lt=ht+(vt-ht)*po;for(let mt=0;mt<=90;mt++){let me=mt/90,tt=Te?.2+.13*po*po:he-Ae,zt=Ae+me*tt,ct=Te?.05+.02*po:.035+.01*Math.sin(me*7),Ve=me*dt*rs*2+Math.sin(po*2+me*5)*.6,go=Xe-ct*(.5+.5*Math.sin(Ve))-(Te?.02*po:0),oo=[1,0,-(-ct*.5*Math.cos(Ve)*dt*rs*2/tt)],Wt=Math.hypot(oo[0],oo[1],oo[2]);qt.push(go,Lt,zt),He.push(oo[0]/Wt,0,oo[2]/Wt),pt.push(2),St.push(Math.sin(Ve),po)}}for(let Jt=0;Jt<40;Jt++)for(let po=0;po<90;po++){let Lt=Jt*91+po,mt=Lt+90+1;Zt.push(Lt,mt,Lt+1,Lt+1,mt,mt+1)}for(let Jt=0;Jt<Zt.length;Jt+=3){let[po,Lt,mt]=[Zt[Jt],Zt[Jt+1],Zt[Jt+2]],me=Ve=>[qt[Ve*3],qt[Ve*3+1],qt[Ve*3+2]],tt=[0,1,2].map(Ve=>me(Lt)[Ve]-me(po)[Ve]),zt=[0,1,2].map(Ve=>me(mt)[Ve]-me(po)[Ve]);tt[1]*zt[2]-tt[2]*zt[1]<0&&(Zt[Jt+1]=mt,Zt[Jt+2]=Lt)}return{pos:qt,nrm:He,kind:pt,uv:St,idx:Zt}}let c=s(tn+.02,tn+.4,!0,6),l=s(ba+.04,Rr-.04,!1,9),f={pos:c.pos.concat(l.pos),nrm:c.nrm.concat(l.nrm),kind:c.kind.concat(l.kind),uv:c.uv.concat(l.uv),idx:c.idx.concat(l.idx.map(Ae=>Ae+c.pos.length/3))},u=e({vert:`
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
		}`,attributes:{position:f.pos,normal:f.nrm,uv:f.uv},elements:f.idx}),h=e({vert:`
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
			vec3 p = vec3(${st(xr.x)}, ${st((xr.y0+xr.y1)/2)} + corner.y * ${st((xr.y1-xr.y0)/2-.04)}, ${st((xr.z0+xr.z1)/2)} + corner.x * ${st((xr.z1-xr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${st((xr.z0+xr.z1)/2)}, ${st((xr.y0+xr.y1)/2)})) * ${st(zo.cell/xr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${st(xr.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${st(zo.x)} + corner.x * 0.75, ${st(zo.y)} + corner.y * 0.9, ${st(ba-.03)});
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
			vec3 p = vec3(${st(J8)} + c.x * ${st((mo-$n)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${st(An-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${xb().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Oa(on)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let Ae=document.createElement("canvas");Ae.width=512,Ae.height=652;let he=Ae.getContext("2d");he.fillStyle="#cdb38a",he.fillRect(0,0,Ae.width,Ae.height);let Te=7,dt=()=>(Te=Te*1664525+1013904223>>>0,Te/4294967296);for(let He=0;He<2400;He++){he.fillStyle=`rgba(${dt()<.5?"90,62,30":"245,230,200"},${.03+dt()*.05})`;let pt=dt()*Ae.width,St=dt()*Ae.height;he.fillRect(pt,St,1+dt()*14,1)}for(let He=0;He<26;He++){let pt=dt()*Ae.width,St=dt()*Ae.height,Zt=20+dt()*90,ao=he.createRadialGradient(pt,St,0,pt,St,Zt);ao.addColorStop(0,`rgba(120,80,35,${.04+dt()*.06})`),ao.addColorStop(1,"rgba(120,80,35,0)"),he.fillStyle=ao,he.fillRect(pt-Zt,St-Zt,Zt*2,Zt*2)}let qt=he.createRadialGradient(Ae.width/2,Ae.height/2,Ae.width*.3,Ae.width/2,Ae.height/2,Ae.height*.72);return qt.addColorStop(0,"rgba(110,70,30,0)"),qt.addColorStop(1,"rgba(110,70,30,0.38)"),he.fillStyle=qt,he.fillRect(0,0,Ae.width,Ae.height),Ae})(),b=y?e.texture({data:y,min:"linear",mag:"linear",flipY:!1}):e.texture(),k=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),E=[18,24],L=[],N=[];for(let Ae=0;Ae<=E[1];Ae++)for(let he=0;he<=E[0];he++)L.push(he/E[0],Ae/E[1]);for(let Ae=0;Ae<E[1];Ae++)for(let he=0;he<E[0];he++){let Te=Ae*(E[0]+1)+he,dt=Te+E[0]+1;N.push(Te,Te+1,dt,Te+1,dt+1,dt)}let W=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${st(ta.cx+ta.w/2)} - s * ${st(ta.w)};
			float zNear = ${st(ta.cz-ta.d/2)};
			vec3 p = vec3(x, ${st(ta.y)}, zNear + t * ${st(ta.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${st(ta.d)};
				float zf = zNear + 0.5 * ${st(ta.d)};
				p.z = zf - dd * cos(a);
				p.y = ${st(ta.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${st(An+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(L),size:2}},elements:N,uniforms:{fold:()=>ns.fold,slide:()=>ns.slide,paperTex:b,inkTex:k},cull:{enable:!1}}),O=wb();O.lathe(qo.x,qo.z,[[0,It.top],[.048,It.top+.002],[.052,It.top+.012],[.046,It.top+.014],[.022,It.top+.012],[0,It.top+.012]],Gn.BRASS,24),O.lathe(qo.x,qo.z,[[0,It.top+.012],[qo.r,It.top+.012],[qo.r*1.02,It.top+.012+qo.h*.6],[qo.r,It.top+.012+qo.h],[qo.r*.75,It.top+.012+qo.h-.004],[0,It.top+.012+qo.h-.008]],9,20),O.tube([[qo.x,It.top+.012+qo.h-.008,qo.z],[qo.x+.001,It.top+.012+qo.h+.012,qo.z]],.0012,8,4),O.orient();let te=e({vert:a,frag:`${r}
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
		}`,attributes:{position:O.pos,normal:O.nrm,kind:O.kind,uv:O.uv},elements:O.idx}),G=e({vert:`
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
			vec3 p = ${Oa(qo.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),re=[0,0],q=e({uniforms:{view:e.prop("view")}}),Y=new Float32Array(16);function be(Ae){Z8.translate(Y,Ae.view,ei.OFF),q({view:Y},()=>qe(Ae))}function qe(Ae){let he=Ae&&Ae.reflected;if(i(),u(),h(),d(),ns.ink&&ns.inkDirty){let Te=ns.ink;re[0]!==Te.width||re[1]!==Te.height?(k({data:Te,min:"linear",mag:"linear",flipY:!1}),re=[Te.width,Te.height]):k.subimage(Te),ns.inkDirty=!1}ns.shown&&W(),gb.night>.01&&(te(),he||(G({halo:1}),G({halo:0}))),he||(v(),g())}return be};oa.exports.addBay=tS;oa.exports.BAY=Do;oa.exports.OFF=ei.OFF;oa.exports.STATE=ns;var yb=e=>[e[0]+ei.OFF[0],e[1]+ei.OFF[1],e[2]+ei.OFF[2]];oa.exports.SHOTS=Object.fromEntries(Object.entries(bb).map(([e,t])=>[e,Object.assign({},t,{eye:yb(t.eye),target:yb(t.target)})]));oa.exports.SEAT=ya;oa.exports.LAMP=on;oa.exports.SCONCE=Sn;oa.exports.GRILLE=zo;oa.exports.PAPER=ta;oa.exports.ZONE={FRONT:mo,BACK:$n,ZA:tn,ZB:An,ZC:ba,ZD:Rr}});var Zd=de((CL,Ob)=>{"use strict";var wc=or(),oS=vh(),jd="love-me-like-i-am-already-dead",nS=3621206063,rS=e=>{let t=2166136261;for(let o=0;o<e.length;o++)t^=e.charCodeAt(o),t=Math.imul(t,16777619)>>>0;return t>>>0},jl=/[?&]redroom\b/.test(location.search),_b="a-private-eulogy",aS=[.5,.31],t0=jl||/[?&]studio\b/.test(location.search),Ks=[.32,.02,.05],iS=[.3,.37],Ul=e=>Math.max(0,Math.min(1,e)),Qs=e=>(e=Ul(e),e*e*(3-2*e)),sS=e=>(e=Ul(e),e*e*e),Js=(e,t,o)=>e+(t-e)*o,Mb=(e,t,o)=>[Js(e[0],t[0],o),Js(e[1],t[1],o),Js(e[2],t[2],o)],Zs={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0,glitch:0},cS=`
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
`,Lb='<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8.5c-2.2 0-3.6-1.6-3.6-3.4C8.4 3.6 10 2.5 12 3.6c2-1.1 3.6 0 3.6 1.5 0 1.8-1.4 3.4-3.6 3.4z"/><path d="M12 8.5V21"/><path d="M12 15c-2.5-.2-4-1.6-4.4-3.4 2.3.1 3.8 1.1 4.4 3.4z"/><path d="M12 13c1.8-.4 3-1.6 3.3-3 -1.7.1-2.9 1-3.3 3z"/></svg>',lS='<svg aria-hidden="true" width="16" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V9a6 6 0 0 1 12 0v12"/><path d="M4 21h16"/><path d="M14.5 13.5v1"/></svg>',Xh={},nn=jl?"red":"cons";function Xd(e){return e=e||nn,Xh[e]||(Xh[e]=new Promise((t,o)=>{let n=e==="red"?"__redRoom":"__conservatoryRoom";if(window[n]){t(window[n]);return}let r=document.createElement("script");r.src=e==="red"?"redroom.js?v=897d53792a":"conservatory.js?v=c88022ce79",r.async=!0,r.onload=()=>window[n]?t(window[n]):o(new Error("The room did not load")),r.onerror=()=>{Xh[e]=null,o(new Error("The room could not be fetched"))},document.head.appendChild(r)})),Xh[e]}var fS={cons:["res/pond/lilypad.webp","res/pond/petals.webp","res/studio/rock_col.webp","res/studio/rock_nrm.webp","res/studio/oldstone_col.webp","res/studio/oldstone_nrm.webp","res/studio/floor_col.webp","res/studio/floor_nrm.webp","res/nymph.bin","res/studio/grave.webp","res/studio/grave.bin","res/conservatory/flower.webp","res/conservatory/flower.bin","res/conservatory/rose_lo.bin","res/tree/leaves.webp","res/studio/plants.webp","res/studio/vleaves.webp","res/studio/rose_col.webp","res/studio/rose.bin","res/pond/gravel.jpg","res/koi.webp","res/koi.bin"],red:["res/redroom/memories.webp","res/redroom/polaroids.webp","res/redroom/print.webp","res/redroom/woman_all.bin","res/redroom/woman_0.webp","res/redroom/veil.bin","res/redroom/tv_crt.bin","res/redroom/tv_old.bin","res/redroom/tv_sony.bin","res/redroom/proj_body.bin","res/redroom/proj_0.webp","res/redroom/enlarger_all.bin","res/redroom/enlarger_0.webp","res/redroom/camera_all.bin","res/redroom/rose_all.bin","res/redroom/rose_0.webp"]},kb={};function Eb(e){if(kb[e]||t0||typeof fetch=="undefined")return;kb[e]=!0;let t=()=>{Xd(e).catch(()=>{});let o=fS[e].slice(),n=()=>{let r=o.shift();if(!r)return;let a;try{a=fetch(r,{priority:"low"})}catch(i){a=fetch(r)}a.then(i=>i.blob()).catch(()=>{}).finally(n)};n(),n()};window.requestIdleCallback?window.requestIdleCallback(t,{timeout:1500}):setTimeout(t,300)}function hS(e){return Xd(e).then(t=>{if(oi[e]=t,!o0[e]){let o=performance.now();o0[e]=t.studio(Bl),/tourdebug/.test(location.search)&&console.log("room built in "+Math.round(performance.now()-o)+" ms")}return t})}var zb="api/roses",Cb="cons-roses-v1",Sb="cons-rose-day",Nb=()=>{try{let e=JSON.parse(localStorage.getItem(Cb));return Array.isArray(e)?e:[]}catch(e){return[]}};function uS(){return fetch(zb,{cache:"no-store"}).then(e=>{if(!e.ok)throw new Error("no roses");return e.json()}).then(e=>({first:e.first||0,roses:Array.isArray(e.roses)?e.roses:[],shared:!0})).catch(()=>({first:0,roses:Nb(),shared:!1}))}function Yd(e,t){return uS().then(o=>{let n=oi.cons;return n&&n.studio.setRoses(o.roses,o.first,t||0,e),o})}function dS(){let e=new Date().toISOString().slice(0,10),t=null;try{t=localStorage.getItem(Sb)}catch(r){}if(t===e&&!/tourdebug/.test(location.search))return;try{localStorage.setItem(Sb,e)}catch(r){}let o=Math.random(),n=()=>{try{let r=Nb();return r.push({t:Date.now(),s:o}),localStorage.setItem(Cb,JSON.stringify(r.slice(-300))),r}catch(r){return[{t:Date.now(),s:o}]}};fetch(zb,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({s:o})}).then(r=>{if(!r.ok)throw new Error("not kept");return r.json()}).then(r=>{if(!Array.isArray(r.roses))throw new Error("not kept");let a=oi.cons;a&&a.studio.setRoses(r.roses,r.first||0,r.added?1:0,!!r.added)}).catch(()=>{let r=n(),a=oi.cons;a&&a.studio.setRoses(r,0,1,!0)})}var Bl=null,Yh=null,ur=null,Wl=null,o0={},oi={};function Qh(e){!oi[e]||!o0[e]||(ur=oi[e],Wl=o0[e],Yh&&Yh.useStudio&&Yh.useStudio(ur.studio))}var Ab=null,ra=null,Tn="idle",Rb=0,bc=0,as=null,na=null,_i=null,Hl=null,Ia=null,yr=null,qn=null,pS=!1;function ti(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}function e0(e){Tn=e,Rb=bc}function Zh(e){return e=e||nn,Xd(e).then(t=>{if(oi[e]=t,!o0[e]){let o=performance.now();o0[e]=t.studio(Bl),/tourdebug/.test(location.search)&&console.log("room built in "+Math.round(performance.now()-o)+" ms")}return e===nn&&Qh(e),t})}var Wd=!1;function vS(e){if(e&&e.slug===jd&&Eb("cons"),e&&e.slug===_b&&Eb("red"),e&&e.slug===_b&&!t0)return gS(e);if(!e||e.slug!==jd||t0||Wd)return null;let t=ti("button","cons-btn",lS+"<span>The Conservatory of Unsaid Things</span>");return t.type="button",t.setAttribute("aria-label","The Conservatory of Unsaid Things: answer its question to go in"),t.addEventListener("pointerdown",o=>o.stopPropagation()),t.addEventListener("click",o=>{o.stopPropagation(),xS(e)}),t}var mS='<svg aria-hidden="true" width="16" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 0-5 2.6-5 6.2 0 2.5-1 4.4-2.6 6.3C6.6 18 9 21 12 21s5.4-3 7.6-5.5C18 13.6 17 11.7 17 9.2 17 5.6 15 3 12 3z"/><path d="M9.5 9.5c.7 1.6 1.6 2.5 2.5 2.5s1.8-.9 2.5-2.5"/></svg>';function gS(e){let t=ti("button","cons-btn",mS+"<span>Step through the door of her thoughts</span>");return t.type="button",t.setAttribute("aria-label","Step through the door of her thoughts: go into the room of A Private Eulogy"),t.addEventListener("pointerdown",o=>o.stopPropagation()),t.addEventListener("click",o=>{if(o.stopPropagation(),Tn==="idle"){try{let n=window.AudioContext||window.webkitAudioContext;n&&!window.__redAudio&&(window.__redAudio=new n),window.__redAudio&&window.__redAudio.state==="suspended"&&window.__redAudio.resume()}catch(n){}Zh("red").catch(n=>console.error(n)),nn="red",Qh("red"),Kd(e)}}),t}function xS(e){if(Tn!=="idle"||Wd)return;document.body.classList.add("cons-asking"),setTimeout(()=>{hS("cons").catch(s=>console.error(s))},120);let t=ti("div","cons-ask");t.setAttribute("role","dialog"),t.setAttribute("aria-label","The Conservatory of Unsaid Things");let o=ti("div","cons-card",`
		<button type="button" class="cons-x" aria-label="Close">\xD7</button>
		<span class="cons-kicker">The Conservatory of Unsaid Things</span>
		<p class="cons-q">They are offered only at the end,<br>and heal nothing they touch.<br>What are they?</p>
		<form class="cons-form" autocomplete="off">
			<input class="cons-in" type="text" aria-label="Your answer" spellcheck="false" autocapitalize="off">
			<button type="submit" class="cons-go">Answer</button>
		</form>
		<p class="cons-msg" aria-live="polite"></p>`);t.appendChild(o),document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("on"));let n=o.querySelector(".cons-in"),r=o.querySelector(".cons-msg"),a=()=>{t.classList.remove("on"),document.body.classList.remove("cons-asking"),setTimeout(()=>t.remove(),600),window.removeEventListener("keydown",i,!0)},i=s=>{s.stopPropagation(),s.key==="Escape"&&a()};window.addEventListener("keydown",i,!0),["pointerdown","wheel","touchstart","touchmove"].forEach(s=>t.addEventListener(s,c=>c.stopPropagation(),{passive:!0})),t.addEventListener("click",s=>{s.target===t&&a()}),o.querySelector(".cons-x").addEventListener("click",a),setTimeout(()=>n.focus(),350),o.querySelector("form").addEventListener("submit",s=>{s.preventDefault();let c=n.value.trim().replace(/[.!?]+$/,"").toLowerCase();if(rS(c)===nS){nn="cons",Qh("cons"),Zh("cons").then(()=>Yd(!1,0)).catch(l=>console.error(l)),o.innerHTML=`
				<button type="button" class="cons-x" aria-label="Close">\xD7</button>
				<span class="cons-kicker">The Conservatory of Unsaid Things</span>
				<p class="cons-q">Flowers.</p>
				<button type="button" class="cons-flower">${Lb}<span>Bring a flower while it still matters</span></button>`,o.querySelector(".cons-x").addEventListener("click",a),o.querySelector(".cons-flower").addEventListener("click",()=>{a(),Kd(e)}),setTimeout(()=>{let l=o.querySelector(".cons-flower");l&&l.focus()},50);return}Wd=!0,n.disabled=!0,o.querySelector(".cons-go").disabled=!0,r.textContent="Not this time.",r.classList.add("on"),document.querySelectorAll(".cons-btn").forEach(l=>l.remove()),setTimeout(a,1800)})}function Kd(e){let t=e.paintingPosition,o=e.width||1.6,n=e.height||1.1,r=e.side==="right",a=r?[-1,0,0]:[1,0,0],i=r?[0,0,1]:[0,0,-1],s=nn==="red"?aS:iS,c=(s[0]-.5)*o,l=(.5-s[1])*n;na={at:[t[0]+i[0]*c-a[0]*.04,t[1]+l,t[2]+i[2]*c],n:a},as=null,pS=!1,Hl=null,document.body.classList.add("in-conservatory"),e0("zoom"),yS()}function yS(){if(Ia){Ia.classList.add("on");let o=Ia.querySelector(".cons-sky");o&&(o.style.display=nn==="red"?"none":""),nn!=="red"&&!qn&&(qn=ti("div","cons-name","The Conservatory of Unsaid Things"),document.body.appendChild(qn)),window.addEventListener("keydown",Vd);return}Ia=ti("div","cons-ui");let e=ti("button","cons-sky",wc.night>.5?"\u2600":"\u263E");e.type="button",e.setAttribute("aria-label","Day or night"),e.addEventListener("click",o=>{o.stopPropagation(),wc.toggle(),setTimeout(()=>{e.textContent=wc.night>.5?"\u2600":"\u263E"},50)});let t=ti("button","cons-back","\u2190 Back to the gallery");t.type="button",t.setAttribute("aria-label","Back to the gallery"),t.addEventListener("click",o=>{o.stopPropagation(),Qd()}),Ia.appendChild(e),Ia.appendChild(t),nn==="red"&&(e.style.display="none"),["pointerdown","pointerup"].forEach(o=>Ia.addEventListener(o,n=>n.stopPropagation())),document.body.appendChild(Ia),requestAnimationFrame(()=>Ia.classList.add("on")),nn!=="red"&&(qn=ti("div","cons-name","The Conservatory of Unsaid Things"),document.body.appendChild(qn)),window.addEventListener("keydown",Vd)}var Vd=e=>{e.key==="Escape"&&(Tn==="room"||Tn==="wait")&&Qd()};function Tb(){yr&&yr.remove(),yr=ti("div","cons-note",`
		<p>You brought a flower while it still matters.<br>Lay it down.</p>
		<button type="button" class="cons-flower">${Lb}<span>Place the flower</span></button>`),["pointerdown","pointerup"].forEach(e=>yr.addEventListener(e,t=>t.stopPropagation())),yr.querySelector("button").addEventListener("click",e=>{e.stopPropagation(),ra&&ra.placeFlower(),setTimeout(()=>{Tn==="room"&&nn==="cons"&&dS()},6500),yr.classList.remove("on"),setTimeout(()=>{yr&&(yr.remove(),yr=null)},1300)}),document.body.appendChild(yr),requestAnimationFrame(()=>yr.classList.add("on"))}function Qd(){Tn!=="room"&&Tn!=="wait"||(e0("leave"),yr&&yr.classList.remove("on"),qn&&qn.classList.remove("on"))}var Kh=!1;function bS(){Tn==="room"&&(Kh=!0,Pb())}function Pb(){ra&&(ra.dispose(),ra=null),ur&&(ur.studio.setFlower(-1),ur.studio.setGuide({vis:!1})),yr&&(yr.remove(),yr=null),Ia&&Ia.classList.remove("on"),qn&&(qn.remove(),qn=null),window.removeEventListener("keydown",Vd),document.body.classList.remove("in-conservatory"),e0("back")}function wS(e,t,o){if(bc=e,t0){if(!ra)return null;let r=ra.update(e);return{eye:r.eye,target:r.target,fov:r.fov,roll:r.roll,moving:r.moving,look:Object.assign({},Zs,r.look)}}if(Tn==="idle")return o&&(_i=o),null;let n=e-Rb;if(Tn==="zoom"){if(!as&&(as=t?{eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:t.roll||0}:null,_i=o||Zs,!as))return null;let a=Ul(n/2.8),i=Qs(a),s=sS(a),c=[na.at[0]+na.n[0]*.09,na.at[1],na.at[2]+na.n[2]*.09],l=Mb(as.eye,c,Js(i,1,s*.6)),f=Mb(as.target,na.at,Qs(a*1.6)),u=_i&&_i.letterbox||0,h=Object.assign({},Zs,_i,{fade:Qs((a-.72)/.28),fadeColor:nn==="red"?[0,0,0]:Ks,aperture:0,letterbox:nn==="red"?u:Js(u,.55,Qs(a))});return a>=1&&e0("wait"),{eye:l,target:f,fov:Js(as.fov,26,i),roll:Js(as.roll,0,i),look:h,moving:!0}}if(Tn==="wait"){let r=ur&&Wl&&ur===oi[nn]&&Wl===o0[nn];if(r&&nn!=="red"&&ur.tour.introStart){Hl===null&&(Hl=bc);let c=bc-Hl;(ur.studio.ready()&&c>.6||c>3)&&(ra=ur.tour({intro:!0,onLanded:Tb,onFlowerSettled:()=>{}}),qn&&setTimeout(()=>{qn&&Tn==="room"&&qn.classList.add("on"),setTimeout(()=>{qn&&qn.classList.remove("on")},5200)},2600),Hl=null,e0("room"));let l=ur.tour.introStart(),f=.92+.08*Math.sin(bc*2.1);return{eye:l.eye,target:l.target,fov:l.fov,roll:0,look:Object.assign({},Zs,{letterbox:.55,fade:1,fadeColor:[Ks[0]*f,Ks[1]*f,Ks[2]*f]}),moving:!0}}r&&ur.studio.ready()&&n>(nn==="red"?.9:.35)&&(ra=nn==="red"?ur.tour({onExpel:bS}):ur.tour({intro:!0,onLanded:Tb,onFlowerSettled:()=>{}}),qn&&setTimeout(()=>{qn&&Tn==="room"&&qn.classList.add("on"),setTimeout(()=>{qn&&qn.classList.remove("on")},5200)},2600),e0("room"));let i=[na.at[0]+na.n[0]*.09,na.at[1],na.at[2]+na.n[2]*.09],s=nn==="red"?1:.92+.08*Math.sin(bc*2.1);return{eye:i,target:na.at,fov:26,roll:0,look:Object.assign({},Zs,_i,{fade:1,fadeColor:nn==="red"?[0,0,0]:[Ks[0]*s,Ks[1]*s,Ks[2]*s],letterbox:nn==="red"?_i&&_i.letterbox||0:.55}),moving:nn!=="red"}}if(Tn==="room"||Tn==="leave"){let r=ra.update(e),a=Object.assign({},Zs,r.look);if(Tn==="leave"){let i=Ul(n/.9);a.fade=Math.max(a.fade||0,Qs(i)),a.fadeColor=[0,0,0],i>=1&&Pb()}return{eye:r.eye,target:r.target,fov:r.fov,roll:r.roll,moving:r.moving,look:a}}if(Tn==="back"){let a=Ul(n/(Kh?2.4:1.2));if(a>=1)return e0("idle"),Kh=!1,null;if(!t)return null;let i=0,s=1-Qs(a);return Kh&&(s=1-Qs(n/.9),i=Math.max(0,.7*(1-n/.8))+(n>1.7&&n<1.82?.55:0)),{eye:t.eye,target:t.target,fov:t.fov,roll:t.roll||0,look:Object.assign({},Zs,o||_i,{fade:s,fadeColor:[0,0,0],glitch:i}),moving:!0}}return null}typeof window!="undefined"&&/tourdebug/.test(location.search)&&(window.__consDebug={go(e,t){nn=t,Qh(t),Zh(t).then(()=>{t==="cons"&&Yd(!1,0)}).catch(o=>console.error(o)),Kd(e)},leave:Qd,roses(e,t,o){let n=[];for(let r=0;r<e;r++)n.push({t:r,s:r*.618%1});oi.cons&&oi.cons.studio.setRoses(n,0,t||0,!!o)},place(){ra&&ra.placeFlower()}});Ob.exports={SLUG:jd,PREVIEW:t0,box:oS,init(e){Bl=e.regl,Yh=e.post;let t=document.createElement("style");t.textContent=cS,document.head.appendChild(t),Ab=Bl.texture({width:1,height:1,data:[0,0,0,0]}),t0&&_S()},button:vS,update:wS,get draw(){return Wl},get active(){return Tn!=="idle"||t0},get alwaysMirror(){return nn==="red"&&!!Wl&&(jl||Tn==="room"||Tn==="wait")},bake(){return ur?ur.studio.bakedSun(Bl):Ab}};function _S(){let e=document.createElement("style");if(e.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; } .st-ui { position: fixed; top: 18px; right: 18px; z-index: 30; width: 42px; padding: 0; font-size: 20px; letter-spacing: 0; }",document.head.appendChild(e),Zh().then(()=>{ra=ur.tour({}),jl||Yd(!1,0)}).catch(o=>console.error(o)),jl)return;let t=document.createElement("button");t.type="button",t.className="st-ui",t.setAttribute("aria-label","Day or night"),t.textContent="\u263E",document.body.appendChild(t),t.addEventListener("pointerdown",o=>o.stopPropagation()),t.addEventListener("click",o=>{o.stopPropagation(),wc.toggle(),setTimeout(()=>{t.textContent=wc.night>.5?"\u2600":"\u263E"},50)}),window.addEventListener("keydown",o=>{o.key==="n"&&wc.toggle()})}});var Jd=de((NL,Fb)=>{"use strict";function MS(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var Ib={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},kS=["th","ng","er"];function ES(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(Ib).forEach(p=>{r[p]=Ib[p]*o.pace});let a=[],i=0,s=0,c=0,l=[];function f(p,m){let g=MS(o.seed),y=o.xh,b={},k=Y=>{let be=t[Y];if(!be)return null;let qe=Math.floor(g()*be.length);return be.length>1&&qe===b[Y]&&(qe=(qe+1)%be.length),b[Y]=qe,be[qe]},E=Y=>{if(t[Y])return{g:k(Y),sc:1};let be=Y.toLowerCase();return t[be]?{g:k(be),sc:/[A-Z]/.test(Y)?1.32:1}:null},L=[],N=.15,W=0,O=0,te=(g()-.5)*.02,G=m/y,re=p.split(/\n\s*\n/);re.forEach((Y,be)=>{Y.replace(/\s+/g," ").trim().split(" ").forEach(Ae=>{let he=[];for(let He=0;He<Ae.length;He++){let pt=Ae.substr(He,2).toLowerCase();if(kS.indexOf(pt)>=0&&t[pt]&&g()<.55&&Ae[He]===Ae[He].toLowerCase()){he.push({ch:pt,gl:{g:k(pt),sc:1}}),He++;continue}let St=E(Ae[He]);St&&St.g&&he.push({ch:Ae[He],gl:St})}let Te=he.map(()=>.17+g()*.07),dt=he.reduce((He,pt,St)=>He+pt.gl.g.w*pt.gl.sc+Te[St],0);W>0&&W+dt>G&&(W=0,O++,N+=r.line,te=(g()-.5)*.02),he.forEach((He,pt)=>{let St=He.gl.g,Zt=He.gl.sc*(.95+g()*.1),ao=(g()-.5)*.06,Ho=(g()-.5)*.08+te*W,Xe=W,ht=O*o.lineHeight+1.9+Ho,vt=Math.cos(ao),Jt=Math.sin(ao),po=mt=>[(Xe+(mt[0]*vt-mt[1]*Jt)*Zt)*y,(ht+(mt[0]*Jt+mt[1]*vt)*Zt)*y],Lt=(mt,me)=>{let tt=0;for(let ct=1;ct<mt.length;ct++)tt+=Math.hypot(mt[ct][0]-mt[ct-1][0],mt[ct][1]-mt[ct-1][1]);let zt=Math.max(o.minDur||(me?.06:.07),tt/(o.speed*y));L.push({pts:mt,L:tt,start:N,dur:zt,dot:me}),N+=zt};if(St.s.forEach((mt,me)=>{me>0&&(N+=r.stroke),Lt(mt.map(po),!1)}),St.dot){let mt=St.s[0][0];St.s.forEach(tt=>tt.forEach(zt=>{zt[1]<mt[1]&&(mt=zt)}));let me=po([mt[0]+.1,-1.36]);N+=r.stroke*1.4,Lt([me,[me[0]+y*.05,me[1]+y*.03]],!0)}N+=r.letter*(.6+g()*.8),W+=St.w*Zt+Te[pt]});let qt=Ae[Ae.length-1];N+=/[.!?]/.test(qt)?r.stop:/[,;:]/.test(qt)?r.comma:r.word,W+=.55+g()*.2}),be<re.length-1&&(W=0,O+=1.6,N+=r.para)});let q=(O+1)*o.lineHeight*y+y*1.55;return{strokes:L,total:N,height:q}}function u(p,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(p*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=p+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,p,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;function d(p,m){let g=l[p.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let k=1;k<p.pts.length;k++){let E=p.pts[k-1],L=p.pts[k],N=Math.hypot(L[0]-E[0],L[1]-E[1]),W=b,O=b+N;if(b=O,O<=g||N===0)continue;if(W>=m)break;let te=Math.max(0,(g-W)/N),G=Math.min(1,(m-W)/N),re=[E[0]+(L[0]-E[0])*te,E[1]+(L[1]-E[1])*te],q=[E[0]+(L[0]-E[0])*G,E[1]+(L[1]-E[1])*G],Y=(W+O)/2/(p.L||1),be=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,Y)));n.lineWidth=y*be,n.globalAlpha=.86+.14*be,n.beginPath(),n.moveTo(re[0],re[1]),n.lineTo(q[0],q[1]),n.stroke()}p.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(p.pts[0][0],p.pts[0][1],y*.75,0,Math.PI*2),n.fill()),l[p.i]=m}function v(p){let m=(p-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);d(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(v):o.onDone&&o.onDone()}return{write(p,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=f(p,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(p):o.maxTime;if(b&&i>b){let E=b/i;a.forEach(L=>{L.start*=E,L.dur*=E}),i=b}a.forEach((E,L)=>{E.i=L}),l=[],u(g,y.height);let k=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||k){a.forEach(E=>d(E,E.L));return}return c=performance.now(),s=requestAnimationFrame(v),i},finish(){cancelAnimationFrame(s),a.forEach(p=>d(p,p.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}Fb.exports=ES});var tp=de((RL,Db)=>{"use strict";var ep=or(),SS='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',AS='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Db.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=ep.isNight;o.innerHTML=r?SS:AS,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),ep.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),ep.toggle()}),o}});var Hb=de((PL,qb)=>{"use strict";var Ln=Vh(),TS=$i(),LS=Jd(),zS="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Gb=100,Mi=e=>Math.max(0,Math.min(1,e)),Br=(e,t,o)=>{let n=Mi((o-e)/(t-e));return n*n*(3-2*n)},Fa=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,wa=(e,t,o)=>e+(t-e)*o,Xl=(e,t,o)=>[wa(e[0],t[0],o),wa(e[1],t[1],o),wa(e[2],t[2],o)];function n0(e,t){let o=e.length-1,n=Mi(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],l=e[Math.min(o,r+2)];return[0,1,2].map(f=>.5*(2*s[f]+(-i[f]+c[f])*a+(2*i[f]-5*s[f]+4*c[f]-l[f])*a*a+(-i[f]+3*s[f]-3*c[f]+l[f])*a*a*a))}var Jh=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function op(e,t,o){return{eye:Xl(e.eye,t.eye,o),target:Xl(e.target,t.target,o),fov:wa(e.fov,t.fov,o),roll:wa(e.roll||0,t.roll||0,o)}}var Yl=TS.PLAY,Da=[Yl.stoolX,1,Yl.keyFront+.25],eu=[Yl.stoolX,Yl.keyTop+.03,Yl.keyFront-.05],rp=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[Da[0]+Math.cos(t)*o,1.15+.4*e,Da[2]+Math.sin(t)*o]},_c=[{eye:rp(1),target:[Da[0],.92,Da[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:eu},{eye:[Da[0]+1,1.14,Da[2]+1.72],target:[eu[0]+.05,.8,eu[2]+.05],fov:40,aperture:1,to:eu}],$b=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),tu=e=>({fade:0,letterbox:.55,exposure:1.3,focus:$b(e.eye,e.to||Da),aperture:e.aperture,vignette:.42,shafts:0}),np={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Mc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Vl={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},CS=`
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
`;qb.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=CS,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),l=a.querySelector(".conf-hint"),f=a.querySelector(".conf-close"),u=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,d=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let me=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Gb-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>Gb&&me&&(s.value=me[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(me=>s.addEventListener(me,tt=>tt.stopPropagation())),a.addEventListener("pointerdown",me=>me.stopPropagation()),a.addEventListener("click",me=>{let tt=me.target.closest("button");tt&&(me.stopPropagation(),tt.dataset.act==="send"&&be(),tt.dataset.act==="leave"&&he())});let v=!1,p="",m=0,g=null,y=null,b="",k=null,E=0,L="",N=document.createElement("canvas");N.width=512,N.height=652;function W(me){me!==L&&(L=me,i.classList.toggle("on",me==="write"),l.classList.toggle("on",me==="hint"),f.classList.toggle("on",v&&me==="hint"&&(p==="room"||p==="peek")),u.classList.toggle("on",me==="final"),me==="write"&&setTimeout(()=>{if(p==="write")try{s.focus({preventScroll:!0})}catch(tt){}},900))}function O(me){p=me,m=0}function te(me,tt){if(v)return;v=!0,g={eye:me.eye.slice(),target:me.target.slice(),fov:me.fov,roll:me.roll||0},y=Object.assign({},tt),b="",s.value="",c.disabled=!0,Ln.STATE.fold=0,Ln.STATE.slide=0,Ln.STATE.shown=!0,Ln.STATE.active=!0;let zt=N.getContext("2d");zt.setTransform(1,0,0,1,0,0),zt.clearRect(0,0,N.width,N.height),Ln.STATE.ink=N,Ln.STATE.inkDirty=!0,document.body.classList.add("confessing");let ct=_c[0],Ve=d?.3:5.5,go=d?.3:3.6;G.i=0,G.u=0,G.T=Ve+go,G.moving=!0,G.rest=0,G.raw=!0,G.lookFrom=y,G.lookTo=tu(ct);let _=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],rp(0)],oo=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Da[0],1,Da[2]-.1],ct.target];G.path=Wt=>{let xo=Wt*(Ve+go);if(xo<Ve){let br=xo/Ve,Hn=1-Math.cos(br*Math.PI/2);return{eye:n0(_,Hn),target:n0(oo,Br(0,1,Hn*1.05)),fov:wa(g.fov,52,Br(.4,1,Hn)),roll:(g.roll||0)*(1-Hn)}}let Eo=(xo-Ve)/go,un=1-Math.pow(1-Eo,2.4);return{eye:rp(un),target:ct.target,fov:wa(52,ct.fov,un),roll:.05*Math.sin(Math.PI*un)}},O("room"),W("")}let G={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},re=()=>h?"Scroll on":"Swipe up";function q(me){let tt=qt,zt=_c[me],ct={eye:tt.eye.slice(),target:tt.target.slice(),fov:tt.fov,roll:tt.roll||0},Ve=Xl(ct.eye,zt.eye,.5),go=[Ve[0]-Da[0],0,Ve[2]-Da[2]],_=Math.hypot(go[0],go[2])||1,oo=[Ve[0]+go[0]/_*.6,Ve[1]+.3,Ve[2]+go[2]/_*.6];G.path=Wt=>{let xo=1-Wt;return{eye:[0,1,2].map(Eo=>xo*xo*ct.eye[Eo]+2*xo*Wt*oo[Eo]+Wt*Wt*zt.eye[Eo]),target:Xl(ct.target,zt.target,Br(0,1,Wt)),fov:wa(ct.fov,zt.fov,Wt),roll:ct.roll*xo}},G.lookFrom=Y||tu(_c[G.i]),G.lookTo=tu(zt),G.i=me,G.u=0,G.moving=!0,G.rest=0,G.raw=!1,G.T=d?.4:Math.max(2.8,Math.min(4.4,$b(ct.eye,zt.eye)*1+1.6)),W("")}let Y=null;function be(){if(p!=="write"||(b=s.value.trim(),!b))return;s.blur(),W("");let me=Math.max(10,Math.min(22,24-b.length/28));k=LS(N,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:me,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:tt=>2.4+tt.length/160,fixed:{mx:46,my:40},onPen:()=>{Ln.STATE.inkDirty=!0},onDone:()=>{Ln.STATE.inkDirty=!0}}),O("down")}function qe(){try{let me={access_key:zS,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(me),keepalive:!0}).catch(()=>{})}catch(me){}}function Ae(){p==="ready"&&(qe(),O("fold"),W(""))}function he(){!v||p==="leave"||(W(""),s.blur(),Te=qt,dt=Y,O("leave"))}let Te=null,dt=null,qt=null,He=Ln.SHOTS.window,pt=Ln.OFF,St=me=>[me[0]+pt[0],me[1],me[2]],Zt=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],St([1.25,1.5,43.25]),St([-.55,1.36,42.92])],ao=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],St([-1,1.55,43.6]),St([-1.4,1.35,43.1]),St([-1.5,1.33,43.3])];function Ho(me){let tt=Fa(Mi(me)),zt=[g.eye,...Zt,He.eye],ct=[g.target,...ao,He.target];return{eye:n0(zt,tt),target:n0(ct,Br(0,1,tt*1.03)),fov:wa(g.fov,He.fov,Br(.6,.97,tt)),roll:(g.roll||0)*(1-tt)}}function Xe(me,tt){if(d)return me;let zt=performance.now()/1e3,ct=.004*tt,Ve=Math.sin(zt*.61)*.6+Math.sin(zt*1.37+1.3)*.4,go=Math.sin(zt*.47+2.1)*.6+Math.sin(zt*1.13+.4)*.4;return{eye:[me.eye[0]+Ve*ct,me.eye[1]+go*ct*.7,me.eye[2]],target:[me.target[0]+go*ct*1.5,me.target[1]+Ve*ct,me.target[2]],fov:me.fov,roll:me.roll}}function ht(me,tt,zt){let ct={};for(let Ve in tt)ct[Ve]=typeof tt[Ve]=="number"&&typeof me[Ve]=="number"?wa(me[Ve],tt[Ve],zt):tt[Ve];return ct}function vt(me){me*=window.__confSpeed||1,m+=me;let tt=Jh(He),zt=Jh(Ln.SHOTS.paper),ct,Ve,go=Jh(Ln.SHOTS.peek);if(p==="room")G.moving?(G.u=Math.min(1,G.u+me/G.T),ct=G.path(G.raw?G.u:Fa(G.u)),Ve=ht(G.lookFrom,G.lookTo,Br(.1,.9,G.u)),G.raw&&(Ve.fade=(y.fade||0)*(1-Br(0,.12,G.u))),G.u>=1&&(G.moving=!1,G.rest=0,l.textContent=re(),W("hint"))):(G.rest+=me,ct=Xe(Jh(_c[G.i]),2.5),Ve=tu(_c[G.i]));else if(p==="enter"){let oo=Mi(m/(d?.6:9)),Wt=Fa(oo),xo=[Jt.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],St([.75,1.5,42.95]),St([-.25,1.42,42.82]),St([-.9,1.42,42.82]),go.eye];ct={eye:n0(xo,Wt),target:Xl(Jt.target,go.target,Br(0,.35,Wt)),fov:wa(Jt.fov,go.fov,Br(.3,1,Wt)),roll:0},Ve=ht(po,np,Br(.2,.9,oo)),oo>=1&&O("peek")}else if(p==="peek")ct=Xe(go,1.5),Ve=np,m>(d?.5:3.2)&&O("turn");else if(p==="turn"){let _=Mi(m/(d?.4:3.2));ct=op(go,tt,Fa(_)),Ve=ht(np,Mc,Fa(_)),_>=1&&(O("write"),W("write"))}else if(p==="write")ct=Xe(tt,1),Ve=Mc;else if(p==="down"){let _=Mi(m/(d?.4:2));ct=op(tt,zt,Fa(_)),Ve=ht(Mc,Vl,Fa(_)),_>=1&&(E=k.write(b,d)||0,Ln.STATE.inkDirty=!0,O("writing"))}else if(p==="writing")ct=Xe(zt,.6),Ve=Vl,m>E+.8&&(O("ready"),l.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",W("hint"));else if(p==="ready")ct=Xe(zt,.6),Ve=Vl;else if(p==="fold"){let _=Mi(m/(d?.3:1.5));Ln.STATE.fold=Fa(_),ct=Xe(zt,.6),Ve=Vl,_>=1&&O("slide")}else if(p==="slide"){let oo=Mi(m/(d?.6:3.4));Ln.STATE.slide=Fa(Br(0,.7,oo));let Wt=Fa(Br(.35,1,oo));ct=op(zt,tt,Wt),Ve=ht(Vl,Mc,Wt),oo>=1&&(Ln.STATE.shown=!1,O("final"),W("final"))}else if(p==="final")ct=Xe(tt,1),Ve=Mc;else if(p==="leave"){let _=d?.6:Te.eye[0]<pt[0]-.3?12:7,oo=Mi(m/_),Wt={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},xo=Fa(oo),Eo=Te.eye[0]<pt[0]-.3,un=Eo?[Te.eye,St([-.55,1.4,42.8]),St([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Wt.eye]:[Te.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Wt.eye],br=Eo?[Te.target,St([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Wt.target]:[Te.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Wt.target];if(ct={eye:n0(un,xo),target:n0(br,xo),fov:wa(Te.fov,Wt.fov,xo),roll:Wt.roll*xo},Ve=ht(dt||Mc,y,Br(.1,.7,oo)),Ve.fade=(y.fade||0)*Br(.82,1,oo),oo>=1){v=!1,Ln.STATE.active=!1,Ln.STATE.shown=!0,Ln.STATE.fold=0,Ln.STATE.slide=0;let Hn=N.getContext("2d");Hn.setTransform(1,0,0,1,0,0),Hn.clearRect(0,0,N.width,N.height),Ln.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return qt=ct,Y=Ve,{camera:ct,look:Ve}}let Jt=null,po=null;function Lt(){if(p==="room"){if(G.moving||G.rest<.4)return;G.i<_c.length-1?q(G.i+1):(Jt=qt,po=Y,W(""),O("enter"));return}if(p==="peek"){m>.4&&O("turn");return}p==="ready"?Ae():p==="writing"&&k&&(k.finish(),m=Math.max(m,E))}function mt(){p==="room"&&!G.moving&&G.rest>.4&&G.i>0&&q(G.i-1)}return{start:te,update:vt,leave:he,get active(){return v},get stage(){return p},wheel(me){me>8?Lt():me<-8&&mt()},swipe(me){me>0?Lt():me<0&&mt()},tap(){Lt()},key(me){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(me)>=0?(Lt(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(me)>=0?(mt(),!0):me==="Escape"?(he(),!0):!1},_setNote(me){s.value=me,s.dispatchEvent(new Event("input"))}}}});var Qb=de((OL,Kb)=>{"use strict";var kc=ec(),ou=_d(),ap=$f(),NS=rl(),ip=kd(),RS=ha(),nu=!RS.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:aa}=pa(),{C:ir,PAINTING_X:Tc}=lr(),Wr=e=>Math.max(0,Math.min(1,e)),Ge=(e,t,o)=>e+(t-e)*o,Io=(e,t,o)=>[Ge(e[0],t[0],o),Ge(e[1],t[1],o),Ge(e[2],t[2],o)],to=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],sp=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Pr=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Oe=(e,t,o)=>{let n=Wr((o-e)/(t-e));return n*n*(3-2*n)};function PS(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),l=a*n,f=Math.max(-l,Math.min(l,e-t)),u=e-f,h=(o+i*f)*r,d=(o-i*h)*c,v=u+(f+h)*c;return t-e>0==v>t&&(v=t,d=0),[v,d]}var Ub=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,OS=e=>e*e*e,cp=e=>1-Math.pow(1-e,3),hn=e=>-(Math.cos(Math.PI*e)-1)/2;function bn(e,t){let o=e.length-1,n=Wr(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],l=e[Math.min(o,r+2)],f=a*a,u=f*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-l[h])*f+(-i[h]+3*s[h]-3*c[h]+l[h])*u))}var Yt=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function c0(e,t,o){return Yt(Io(e.eye,t.eye,o),Io(e.target,t.target,o),Ge(e.fov,t.fov,o),Ge(e.roll,t.roll,o))}var dp=()=>Oe(.75,1.3,window.innerWidth/window.innerHeight),Or=(e,t)=>c0(e,t,dp()),ru=[7,3.95,ir.hallEnd-.05],IS=[ir.x1,2.9,ir.zc],Sc=[16.75,4.55,6.75],pp=[6.92,2.72,14.5],Ga=[7.3,.015,47.1],FS=[Sc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],pp],DS=[pp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Ga],a0=[Tc[0],3,ir.z0],i0=[Tc[1],3,ir.z0],fp=47.45,Yb=4.6,GS=13.2,$S=1.57,Kl=[7.55,1.25,46.75],vp=[17.25,2.42,46],mp=[26.05,1.95,46],Ql=[36.15,.015,44],cu=()=>Ge(6.8,6.15,dp()),qS=[Kl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],vp],HS=[vp,[20.2,2.05,45.6],[23.2,1.8,45],mp],s0=[Tc[2],3,ir.z0],hp=[34.8,1.35,46],ss=[7.89,.03,19.03],Bb=.36,jb=13.64,dr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function _a(e){let t=e.side==="left"?1:-1;return Io([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],dp())}function US(e){return e.side==="left"?Or(Yt([8.6,3.9,e.z],[Bb,1.45,e.z],76),Yt([8,3.6,e.z+.7],[Bb,3.95,e.z-2],46,-.008)):Or(Yt([5.4,3.9,e.z],[jb,1.45,e.z],76),Yt([6,3.6,e.z-.7],[jb,3.95,e.z+2],46,-.008))}var BS=()=>[Ql,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],_a(dr[0])],jS=()=>[_a(dr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],_a(dr[3])],WS=()=>[_a(dr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],ss],Wb={2:{pos:()=>pp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Kl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>vp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>mp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>hp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>_a(dr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>_a(dr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>_a(dr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>_a(dr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>_a(dr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>_a(dr[5]),amp:[.12,.08,.1],tumble:.5}},is=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Or(Yt([ir.x0+.9,1.85,ir.zc+.25],[ir.x1,2.85,ir.zc-.1],64),Yt([ir.x0+1.2,2,ir.zc+.35],[ir.x1,2.6,ir.zc-.15],50));return n.eye=to(to(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Or(Yt([16.6,1.9,9.2],[17.3,.4,5.6],64),Yt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=to(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Or(Yt([7,1.35,13],[7.2,7.6,20.4],74,.05),Yt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=to(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Or(Yt([7,3.6,43.7],[7,3.85,ru[2]],74),Yt([7,3.6,41.3],[7,3.95,ru[2]],46));return o.eye=to(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Or(Yt([7,3.9,40.3],[7,1.35,ru[2]],76),Yt([6.3,3.6,41.2],[3.7,3.95,ru[2]],46,-.008));return o.eye=to(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Or(Yt([7.15,.15,46],[7.3,.04,Ga[2]],50),Yt([7.05,.14,45.9],[7.25,.05,Ga[2]],32));return o.eye=to(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Or(Yt([7.15,.1,46.3],[7.05,.1,fp],50),Yt([7.1,.12,45.85],[7,.2,fp],30));return o.eye=to(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Or(Yt([7.3,.85,45.65],[7.6,1.38,47.1],64),Yt([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=to(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Or(Yt([a0[0],2.3,46.85],[a0[0],1.25,a0[2]],74),Yt([a0[0]-.6,2.55,46.85],[a0[0]+1.9,2.9,a0[2]],46,.008));return o.eye=to(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Or(Yt([i0[0],1.95,46.85],[i0[0],1,i0[2]],74),Yt([i0[0]-.6,2.1,46.85],[i0[0]+1.9,2.75,i0[2]],46,.008));return o.eye=to(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Or(Yt([s0[0],1.4,46.85],[s0[0],.6,s0[2]],74),Yt([s0[0]-.6,1.45,46.85],[s0[0]+1.9,2,s0[2]],46,.008));return o.eye=to(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Or(Yt([34.75,.5,44.15],[ir.x1,.8,43.95],66),Yt([34.75,.45,44.3],[ir.x1,.35,43.95],50));return o.eye=to(o.eye,t),o}},...dr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=US(e);return r.eye=to(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Or(Yt([7.75,2.6,18.6],[7.89,0,19.08],60),Yt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-ss[0],r=o.eye[2]-ss[2];return o.eye=[ss[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],ss[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],VS=[1,.96,.88];function Vb(e,t){return{dur:t,cam(o,n,r){let a=hn(o),i=c0(n,r,a),s=dr[e].side==="left"?1:-1;return i.eye=to(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=Ge(n[i],r[i],o));return a.aperture=Ge(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=hn(o),r=_a(dr[e]),a=_a(dr[e+1]),i=dr[e].side==="left"?1:-1,s=to(Io(r,a,.5),[i*1.2,.5,0]),c=bn([r,Io(r,s,.6),s,Io(a,s,.6),a],n);return{phase:"fly",pos:to(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var lp=[{dur:6.2,cam(e,t,o){if(e<.5){let s=OS(e/.5),c=Io(t.eye,[ir.x1-3.2,2.6,ir.zc],s),l=Io(t.target,IS,Oe(0,.6,e/.5));return Yt(c,l,Ge(t.fov,t.fov-8,s),Ge(t.roll,.04,s))}let n=cp((e-.5)/.5),r=[[aa.cx+.4,10.4,aa.zc+.6],[aa.cx-.6,7.6,aa.zc+1.3],[aa.cx-1.9,4.6,aa.zc+1.75],o.eye],a=[[aa.cx-.1,0,aa.zc-.2],[aa.cx-1,.4,aa.zc-.1],[aa.cx-1.1,.8,aa.zc-.2],o.target];return Yt(bn(r,n),bn(a,n),Ge(o.fov+14,o.fov,n),Ge(-.25,o.roll,n))},look(e,t,o){let n=Oe(.22,.5,e),r=1-Oe(.5,.74,e);return{fade:e<.5?n:r,fadeColor:VS,exposure:Ge(t.exposure,o.exposure,Oe(.5,.9,e))*(1+2.2*(e<.5?Oe(.15,.5,e):1-Oe(.5,.8,e))),letterbox:Ge(t.letterbox,o.letterbox,Oe(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Oe(.6,1,e),focus:Ge(4,o.focus,Oe(.5,1,e)),shafts:Ge(t.shafts,o.shafts,Oe(.4,.6,e)),vignette:Ge(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=bn(r,hn(e)),i=Oe(0,.12,e)*(1-Oe(.82,1,e)),s=Io(Io(t.target,o.target,Oe(.55,1,e)),n.pos,i),c=Ge(t.fov,o.fov,Oe(.3,1,e))-6*Math.sin(Math.PI*e),l=Ge(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return Yt(a,s,c,l)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ge(t.exposure,o.exposure,Oe(.25,.75,e)),letterbox:Ge(t.letterbox,o.letterbox,e),focus:Ge(a,o.focus,Oe(.8,1,e)),aperture:Ge(.7,o.aperture,Oe(.8,1,e)),shafts:Ge(t.shafts,o.shafts,Oe(.3,.8,e)),vignette:Ge(t.vignette,o.vignette,e)}},leaf(e){let t=Ub(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:to(bn(FS,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Oe(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=bn([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Oe(0,.8,e)*.6+hn(Wr(e/.8))*.4),a=bn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],hn(Oe(.8,1,e))),i=e<.8?r:a,s=Io(Io(t.target,n.pos,Oe(.03,.22,e)),o.target,Oe(.82,1,e)),c=Ge(t.fov,o.fov,Oe(.15,.7,e))-6*Oe(.6,.8,e)*(1-Oe(.85,1,e)),l=Ge(t.roll,o.roll,Oe(0,.6,e))-.04*Math.sin(Math.PI*e);return Yt(i,s,c,l)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ge(t.exposure,o.exposure,Oe(.5,1,e)),letterbox:Ge(t.letterbox,o.letterbox,e),focus:Ge(a,o.focus,Oe(.84,1,e)),aperture:Ge(1.1,o.aperture,Oe(.84,1,e)),shafts:Ge(t.shafts,o.shafts,Oe(.2,.9,e)),vignette:Ge(t.vignette,o.vignette,Oe(.5,1,e))}},leaf(e){let t=Ge(Ub(e),e,.35),o=bn(DS,Oe(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Oe(.55,.76,e)),r=Oe(.7,.8,e);return{phase:"fly",pos:to(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=hn(e),r=c0(t,o,n);return r.eye=to(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=hn(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ge(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=hn(e),r=bn([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Io(t.target,o.target,Oe(.1,.85,e));return Yt(r,a,Ge(t.fov,o.fov,Oe(.2,1,e)),Ge(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ge(t[r],o[r],Oe(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(e,t,o){return c0(t,o,hn(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ge(t[r],o[r],hn(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Ge(Yb,cu(),e)}},{dur:11,kick:e=>Wr((e-Ec())/(1-Ec())),cam(e,t,o,n){let r=Ec(),a=Oe(0,r,e)*(1-Oe(r+.12,r+.35,e)),i=Xb(Math.min(e,Ac)),s=to(t.target,[(i-t.target[0])*.15*a,0,0]),c=Oe(r+.12,1,e),l=bn([t.eye,t.eye,to(t.eye,[0,.12,-.3]),o.eye],c);return s=Io(s,n.pos,Oe(r+.06,r+.24,e)*(1-Oe(.9,1,e))),s=Io(s,o.target,Oe(.88,1,e)),Yt(l,s,Ge(t.fov,o.fov,c),Ge(t.roll,o.roll,c))},look(e,t,o,n,r){let a=Ec(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Oe(0,.12,e)*(1-Oe(a+.25,a+.5,e));return{letterbox:Ge(Ge(t.letterbox,o.letterbox,Oe(a,1,e)),1.75,s),exposure:Ge(t.exposure,o.exposure,Oe(a,1,e)),focus:e<a?t.focus:Ge(t.focus,i,Oe(a,a+.2,e)),aperture:Ge(t.aperture,o.aperture,Oe(a,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)}},leaf(e){let t=Wr((e-Ec())/(1-Ec()));if(t<=0)return{phase:"floor"};let o=Oe(0,.85,t)*.85+cp(Oe(0,.15,t))*.15;return{phase:"fly",pos:to(Ga,[(Kl[0]-Ga[0])*o+Math.sin(t*9)*.08*(1-t),(Kl[1]-Ga[1])*o,(Kl[2]-Ga[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?Xb(e):null}},{dur:9,cam(e,t,o,n){let r=hn(e),a=bn([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Oe(.6,.92,e),s=Io(Io(t.target,n.pos,Oe(0,.15,e)),o.target,1-i),c=Ge(t.fov,o.fov,Oe(.3,1,e)),l=Ge(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return Yt(a,s,c,l)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ge(t.letterbox,o.letterbox,e),exposure:Ge(t.exposure,o.exposure,Oe(.3,.8,e)),focus:Ge(a,o.focus,Oe(.6,.95,e)),aperture:Ge(t.aperture,o.aperture,Oe(.6,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,Oe(.3,.8,e))}},leaf(e){let t=hn(e);return{phase:"fly",pos:to(bn(qS,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=hn(e),r=c0(t,o,n);return r.eye=to(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ge(t[r],o[r],e));return n.aperture=Ge(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=hn(e);return{phase:"fly",pos:to(bn(HS,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=hn(e),r=c0(t,o,n);return r.eye=to(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ge(t[r],o[r],e));return n.aperture=Ge(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=hn(e);return{phase:"fly",pos:to(bn([mp,[29.2,1.75,45.5],[32.2,1.5,45.4],hp],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=hn(e),a=bn([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Oe(.05,.3,e)*(1-Oe(.8,1,e)),s=Io(Io(t.target,o.target,Oe(.6,1,e)),n.pos,i);return Yt(a,s,Ge(t.fov,o.fov,Oe(.2,1,e)),Ge(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ge(t.letterbox,o.letterbox,e),exposure:Ge(t.exposure,o.exposure,e),focus:Ge(a,o.focus,Oe(.8,1,e)),aperture:Ge(.9,o.aperture,Oe(.8,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)}},leaf(e){let t=bn([hp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ql],Oe(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Oe(.35,.82,e)),n=Oe(.78,.88,e);return{phase:"fly",pos:to(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=Wr((e-.02)/.09);return cp(t)+.07*Math.sin(Wr((e-.08)/.18)*Math.PI)*(1-Wr((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Oe(.02,.05,e)*(1-Oe(.08,.16,e)),a=Oe(.06,1,e),i=bn([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+hn(a)*.45),s=to(n.pos,[1,-.2,-1.45]);i=Io(i,s,Oe(.1,.22,e)*(1-Oe(.52,.72,e)));let c=Oe(.06,.16,e)*(1-Oe(.86,1,e)),l=Io(t.target,n.pos,c);l=Io(l,o.target,Oe(.86,1,e));let f=Ge(t.fov,o.fov,Oe(.1,1,e))+6*Math.sin(Math.PI*Oe(.08,.9,e)),u=Ge(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Oe(.1,.9,e))+r;return Yt(to(i,[0,r,0]),l,f,u)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Oe(.02,.06,e)*(1-Oe(.08,.3,e));return{letterbox:Ge(t.letterbox,o.letterbox,Oe(.1,.4,e)),exposure:Ge(t.exposure,o.exposure,e)*(1+.8*i),focus:Ge(a,o.focus,Oe(.86,1,e)),aperture:Ge(.8,o.aperture,Oe(.86,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)+i}},leaf(e){let t=Wr((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=bn(BS(),t*.6+hn(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:to(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>Vb(e,7.5)),{dur:10,cam(e,t,o,n){let r=hn(e),a=bn([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Oe(0,.15,e)*(1-Oe(.85,1,e)),s=Io(Io(t.target,o.target,Oe(.5,1,e)),n.pos,i);return Yt(a,s,Ge(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ge(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ge(t.letterbox,o.letterbox,e),exposure:Ge(t.exposure,o.exposure,e),focus:Ge(a,o.focus,Oe(.85,1,e)),aperture:Ge(.6,o.aperture,Oe(.85,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)}},leaf(e){let t=hn(e),o=bn(jS(),t);return{phase:"fly",pos:to(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>Vb(e,7.5)),{dur:10,cam(e,t,o,n){let r=hn(e),a=bn([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Oe(0,.2,e)*(1-Oe(.9,1,e)),s=Io(Io(t.target,o.target,Oe(.5,1,e)),n.pos,i);return Yt(a,s,Ge(t.fov,o.fov,r),Ge(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ge(t.letterbox,o.letterbox,e),exposure:Ge(t.exposure,o.exposure,e),focus:Ge(a,o.focus,Oe(.85,1,e)),aperture:Ge(.7,o.aperture,Oe(.85,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)}},leaf(e){let t=bn(WS(),Oe(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Oe(.4,.84,e)),n=Oe(.8,.9,e);return{phase:"fly",pos:to(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],up=9.2,Ac=.72;function Xb(e){return e<Ac?Ge(cu(),up,e/Ac):Ge(up,GS,(e-Ac)/(1-Ac))}function Ec(){return Ac*Wr((Ga[0]+.15-cu())/(up-cu()))}var su={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},au=e=>Object.assign({},su,is[e].look),XS=`
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
`;function jr(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var r0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function iu(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}Kb.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let U=document.createElement("link");U.rel="stylesheet",U.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",U.setAttribute("data-tour-font",""),document.head.appendChild(U)}let r=Jd(),a=null;fetch("res/hand.json").then(U=>U.ok?U.json():null).then(U=>{a=U}).catch(()=>{});let i=document.createElement("style");i.textContent=XS+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=jr("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=jr("div","tour-mark",r0(ou.name)),l=jr("button","tour-free","Explore freely");l.type="button";let f=jr("div","tour-links",ap.icons("tour-icon"));f.insertBefore(tp()("tour-icon"),f.firstChild),f.insertBefore(Oh().button("tour-icon"),f.firstChild.nextSibling);let u=jr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');u.type="button",u.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),f.appendChild(u),nu&&f.appendChild(l);let h=jr("div","tour-progress",is.map(()=>"<i></i>").join("")),d=jr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),v=d.querySelector("span"),p=jr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${r0(ou.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);iu(p,.4,.35);let m=ou.text.split(/\n\s*\n/).map(U=>`<p class="tour-line">${r0(U.trim())}</p>`).join(""),g=jr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${r0(ou.title)}</h2>
		<span class="tour-rule"></span>
		${ap.line("tour-line tour-contact")}
		${m}`);iu(g,.25,.28);let y=jr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);iu(y,.6,.3);let b=jr("div","tour-card tour-master","");function k(U){let le=jr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Be=le.querySelector(".tour-title"),ot=le.querySelector(".tour-body");return le.filled=!1,le.body=ot,le.fill=()=>{let nt=U();if(!nt||le.filled)return;le.filled=!0;let Xo=nt.title||"";le.querySelector(".tour-kicker").textContent=NS(nt)||"Oil on canvas";let Cn=le.querySelector(".visit-row");Cn.innerHTML=ip.button(nt),Cn.hidden=!Cn.innerHTML;let wr=Cn.querySelector(".visit-btn");wr&&(wr.addEventListener("click",rn=>{rn.stopPropagation(),ip.open(nt)}),le.warm=()=>ip.warm(nt));let Uo=Zd().button(nt);Uo&&(Cn.appendChild(Uo),Cn.hidden=!1);let Fr=0;Be.innerHTML=Xo.split(" ").map(rn=>'<span class="tour-word">'+rn.split("").map(Co=>`<span style="transition-delay:${(.35+Fr++*.045).toFixed(3)}s">${r0(Co)}</span>`).join("")+"</span>").join(" "),Be.setAttribute("aria-label",Xo);let Jo=.35+Xo.length*.045+.2;le.querySelector(".tour-rule").style.transitionDelay=Jo.toFixed(2)+"s";let So=String(nt.description||"").split(/\n\s*\n/).filter(rn=>rn.trim());if(le.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&So.length){ot.innerHTML=So.map(Qn=>`<p class="hand-text">${r0(Qn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let rn=ot.querySelector("canvas"),Co=So.map(Qn=>Qn.trim()).join(`

`),Un=!1,_r=!1,sr=0;ot.addEventListener("wheel",()=>{Un=!0},{passive:!0}),ot.addEventListener("touchmove",()=>{Un=!0},{passive:!0});let an=parseFloat(getComputedStyle(ot).fontSize)||17,cr=r(rn,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,an*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:Qn=>3.5+Qn.length/420,seed:3+Xo.length,onPen:Qn=>{if(Un)return;let co=Qn-ot.clientHeight*.55;co>ot.scrollTop+4&&(ot.scrollTop+=Math.min(16,co-ot.scrollTop))}});rn.addEventListener("click",Qn=>{Qn.stopPropagation(),clearTimeout(sr),_r?cr.finish():(_r=!0,cr.write(Co,!0))}),le.write=()=>{if(clearTimeout(sr),Un=!1,_r){cr.write(Co,!0);return}cr.write("",!0),sr=setTimeout(()=>{_r=!0,cr.write(Co)},Jo*.6*1e3)},le.stopWrite=()=>{clearTimeout(sr),cr.stop()};let Mr=0;window.addEventListener("resize",()=>{clearTimeout(Mr),Mr=setTimeout(()=>{_r&&le.classList.contains("on")&&cr.write(Co,!0)},250)})}else ot.innerHTML=So.map(rn=>`<p class="tour-line">${r0(rn.trim())}</p>`).join(""),ot.querySelectorAll(".tour-line").forEach((rn,Co)=>{rn.style.transitionDelay=(Jo+.3+Math.min(Co,6)*.35).toFixed(2)+"s"})},le}let E=()=>t.paintings?t.paintings():[],L=U=>E().find(le=>le.side==="corridor"&&Math.abs(le.paintingPosition[0]-U)<.5),N=k(()=>E().find(U=>U.side==="end")),W=()=>jr("div","tour-card",""),O=k(()=>L(a0[0])),te=k(()=>L(i0[0])),G=k(()=>L(s0[0])),re=dr.map(U=>k(()=>E().find(le=>le.side===U.side&&Math.abs(le.paintingPosition[2]-U.z)<.5))),q=jr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${nu?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${ap.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${nu?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);iu(q,.5,.35);let Y=[p,g,y,b,N,W(),W(),W(),O,te,G,W(),...re,q];s.append(...Y,c,f,h,d),document.body.appendChild(s);let be=Hb()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{ct=-1,lt&&(ft={start:_},lt=!1)}});document.body.classList.add("touring");let qe=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Ae=qe?"Scroll":"Swipe",he=is.map((U,le)=>le===0?qe?"Scroll to begin":"Swipe up to begin":le===1?Ae+" to follow the leaf":le===2?Ae+" to follow the light":le===3?Ae+" for its story":le===6||le===7||le===is.length-1?"":Ae+" on"),Te=[0];lp.forEach(U=>Te.push(Te[Te.length-1]+U.dur));let dt=Te[Te.length-1],qt=210,He=95,pt=.35,St=1.4,Zt=.32,ao=1,Ho=1.3,Xe=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ht=2.2,vt=.7,Jt=.9,po=!0,Lt=0,mt=0,me=0,tt=-10,zt=!1,ct=-1,Ve=0,go=0,_=0,oo=null,Wt=Object.assign({},au(0)),xo=is[0].cam(0),Eo={phase:"home",pos:Sc.slice(),tumble:0},un=0,br=U=>{let le=0;for(let Be=1;Be<Te.length;Be++)Math.abs(Te[Be]-U)<Math.abs(Te[le]-U)&&(le=Be);return le};function Hn(U){let le=Y[U];le&&le.fill&&(le.fill(),le.body.scrollTop=0,le.offsetWidth),Y.forEach((Be,ot)=>{let nt=Be.classList.contains("on");Be.classList.toggle("on",ot===U),ot===U&&!nt&&Be.write&&Be.write(),ot!==U&&nt&&Be.stopWrite&&Be.stopWrite()}),le&&le.warm&&le.warm(),v.textContent=he[U]||"",d.classList.toggle("on",!!he[U])}function Ha(){Y.forEach(U=>{U.stopWrite&&U.classList.contains("on")&&U.stopWrite(),U.classList.remove("on")}),d.classList.remove("on")}let Ei=null,p0=-1;function K(U){if(be.active||!po||oo)return;let le=_-tt>pt;if(tt=_,le||!Ei){let Be=0,ot=dt;for(let nt=0;nt<Te.length;nt++)if(Te[nt]<=Lt-.02&&(Be=Te[nt]),Te[nt]>=Lt+.02){ot=Te[nt];break}Ei={lo:Be,hi:ot}}_<p0||(zt=!1,me=Math.max(Ei.lo,Math.min(Ei.hi,me+U)),me=Math.max(Lt-ht,Math.min(Lt+ht,me)))}function Ne(U){if(be.active||!po||oo)return;let le=zt?me:Lt,Be;if(U>0)Be=Te.findIndex(ot=>ot>le+.05);else{Be=-1;for(let ot=Te.length-1;ot>=0;ot--)if(Te[ot]<le-.05){Be=ot;break}}Be<0||(me=Te[Be],zt=!0,tt=_)}let Ie=null,ze=U=>U.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(U=>s.addEventListener(U,ze)),s.addEventListener("pointerdown",U=>{if(U.stopPropagation(),!(U.target.closest("button, a")||U.target.closest(".tour-body"))){Ie={x:U.clientX,y:U.clientY,lx:U.clientX,ly:U.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(U.pointerId)}catch(le){}}}),s.addEventListener("pointermove",U=>{if(!Ie)return;let le=U.clientX-Ie.lx,Be=U.clientY-Ie.ly;Ie.lx=U.clientX,Ie.ly=U.clientY;let ot=Math.abs(Be)>=Math.abs(le)?-Be:-le;Ie.moved+=Math.abs(ot);let nt=performance.now(),Xo=ot/He;Ie.v=Ie.v*.6+Xo/Math.max(.008,(nt-Ie.lt)/1e3)*.4,Ie.lt=nt,Ie.moved>6&&K(Xo)});let at=U=>{let le=Ie;if(Ie=null,!!le){if(be.active){le.moved<10&&performance.now()-le.t<500?be.tap():le.y-(U?U.clientY:le.ly)>30&&be.swipe(1);return}le.moved<10&&performance.now()-le.t<500?Ne(1):performance.now()-le.lt<120&&K(Math.max(-1.6,Math.min(1.6,le.v*.22)))}};s.addEventListener("pointerup",U=>{U.stopPropagation(),at(U)}),s.addEventListener("pointercancel",()=>{Ie=null}),s.addEventListener("wheel",U=>{if(be.active){if(U.target.closest(".conf-ui"))return;U.preventDefault(),be.wheel(U.deltaY);return}if(U.target.closest(".tour-body")){let Be=U.target.closest(".tour-body"),ot=Be.scrollTop+Be.clientHeight>=Be.scrollHeight-2&&U.deltaY>0,nt=Be.scrollTop<=0&&U.deltaY<0;if(!ot&&!nt)return}U.preventDefault();let le=U.deltaMode===1?U.deltaY*16:U.deltaMode===2?U.deltaY*window.innerHeight:U.deltaY;K(le/qt)},{passive:!1}),window.addEventListener("keydown",U=>{if(!po||oo||document.body.classList.contains("visiting")||document.body.classList.contains("in-conservatory")||document.body.classList.contains("cons-asking"))return;if(be.active){if(U.stopImmediatePropagation(),U.target&&/TEXTAREA|INPUT|BUTTON/.test(U.target.tagName))return;be.key(U.key)&&U.preventDefault();return}let le=U.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(le)>=0){if((le==="Enter"||le===" ")&&U.target&&U.target.tagName==="BUTTON")return;U.preventDefault(),U.stopImmediatePropagation(),Ne(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(le)>=0?(U.preventDefault(),U.stopImmediatePropagation(),Ne(-1)):le==="Escape"?(U.preventDefault(),kt()):/^[wasdzq]$/i.test(le)&&U.stopImmediatePropagation()},!0),window.addEventListener("keyup",U=>{po&&!oo&&/^(Arrow|[wasdzq]$)/i.test(U.key)&&U.stopImmediatePropagation()},!0),l.addEventListener("click",U=>{U.stopPropagation(),kt()}),["mousedown","pointerdown"].forEach(U=>u.addEventListener(U,le=>le.stopPropagation())),u.addEventListener("click",U=>{U.stopPropagation(),Nt()});let Mt=Yt([8.6,1.75,44.3],[-3,1.85,44.5],55,0),bt=null,lt=!1;function Nt(){if(!po||oo||be.active||bt)return;Ha(),ct=-2;let U=xo.eye;if(U[0]>.5&&U[0]<13.5&&U[2]>36&&U[2]<50){lt=!1,be.start(xo,Wt);return}bt={t:0}}q.addEventListener("click",U=>{let le=U.target.closest("button");le&&(U.stopPropagation(),le.dataset.act==="free"&&kt(),le.dataset.act==="replay"&&Bt(),le.dataset.act==="list"&&u1().show(!1),le.dataset.act==="confess"&&(Ha(),ct=-2,be.start(xo,Wt)))});let gt=[null,[aa.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Tc[0]-7,0],[42.5+Tc[1]-7,0],[42.5+Tc[2]-7,0],[1e3,Math.PI/2],...dr.map(U=>[U.z-1.6,U.side==="left"?-Math.PI/2:Math.PI/2]),[ss[2]-1.6,Math.PI]],Ht=null,_t=0;function kt(){if(!po||oo||!nu)return;let U=br(Lt),le=gt[U];Ht=U<=1?{phase:"home",pos:Sc.slice()}:U>=3&&U<=6?{phase:"floor",pos:Ga.slice()}:U===11?{phase:"floor",pos:Ql.slice()}:U===18?{phase:"floor",pos:ss.slice()}:null,_t=U>=12?1:0,le&&n.place&&n.place(le[0],le[1]),oo={start:_,fromCam:xo,fromLook:Object.assign({},Wt)},Ha(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Bt(){Lt=me=0,mt=0,zt=!1,ct=-1,Ve=0,go=0,Eo={phase:"home",pos:Sc.slice(),tumble:0},ft={start:_}}let ft={start:-1},no=!1,_o=[],xt={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Po(U){un+=U*(Eo.phase==="floor"?0:1);let le=Eo.tumble===void 0?0:Eo.tumble,Be=kc.fromTranslation(_o,Eo.pos);if(Eo.phase==="home")Be=kc.rotateY(Be,Be,2.2+Math.sin(un*.9)*.15),Be=kc.rotateZ(Be,Be,-1+Math.sin(un*1.3)*.12),Be=kc.rotateX(Be,Be,.4);else if(Eo.phase==="floor")Be=kc.rotateY(Be,Be,.65),Be=kc.rotateX(Be,Be,.16);else{let ot=Eo.pos;if(xt.prev&&U>0){let pr=[ot[0]-xt.prev[0],ot[1]-xt.prev[1],ot[2]-xt.prev[2]];if(Math.hypot(pr[0],pr[1],pr[2])<1.5){let Ic=Math.min(1,U*6);for(let ps=0;ps<3;ps++)xt.vel[ps]+=(pr[ps]/U-xt.vel[ps])*Ic}else xt.vel=[0,0,0]}xt.prev=ot.slice();let nt=xt.vel,Xo=Math.hypot(nt[0],nt[1],nt[2]),Cn=Oe(.25,1.4,Xo),wr=Oe(.5,2,-nt[1]),Uo=un*.35*(.3+le)+.65,Fr=[Math.cos(Uo),0,Math.sin(Uo)];Xo>.001&&(Fr=Io(Fr,Pr(nt,-1/Xo),Cn));let Jo=Math.min(1,U*4);xt.axis=Io(xt.axis,Fr,xt.fresh?1:Jo);let So=xt.axis,rn=Math.hypot(So[0],So[1],So[2])||1;So=Pr(So,1/rn);let Co=xo.eye,Un=[Co[0]-ot[0],Co[1]-ot[1],Co[2]-ot[2]],_r=Math.hypot(Un[0],Un[1],Un[2])||1,sr=Ge(.6,.22,Cn),an=[Un[0]/_r*sr,1+Un[1]/_r*sr,Un[2]/_r*sr],cr=So[0]*an[0]+So[1]*an[1]+So[2]*an[2];an=sp(an,Pr(So,cr));let Mr=Math.hypot(an[0],an[1],an[2])||1;an=Pr(an,1/Mr);let Qn=[So[1]*an[2]-So[2]*an[1],So[2]*an[0]-So[0]*an[2],So[0]*an[1]-So[1]*an[0]],co=Math.hypot(nt[0],nt[2]),Yo=0;if(co>.15&&xt.dir&&U>0){let pr=[nt[0]/co,nt[2]/co];Yo=(xt.dir[0]*pr[1]-xt.dir[1]*pr[0])/U,xt.dir=pr}else co>.15&&(xt.dir=[nt[0]/co,nt[2]/co]);xt.bank+=(Math.max(-.8,Math.min(.8,Yo*.3))*Cn-xt.bank)*Math.min(1,U*3),xt.rock+=U*(1.5+2.4*Cn),xt.spin+=U*wr*7*(.4+le);let ca=Math.sin(xt.rock)*(.26+.45*le)*(1-.5*wr)+xt.bank+xt.spin,us=Math.sin(xt.rock*.63+1)*(.16+.3*le)+(Eo.swing||0)*.9,Ua=Math.cos(ca),ds=Math.sin(ca),rf=to(Pr(an,Ua),Pr(Qn,ds)),Si=to(Pr(Qn,Ua),Pr(an,-ds));Ua=Math.cos(us),ds=Math.sin(us);let v0=to(Pr(So,Ua),Pr(rf,ds)),Pc=to(Pr(rf,Ua),Pr(So,-ds)),pu=Math.sin(xt.rock+1.5708)*.035*(.3+le)*(1-.5*Cn),ai=to(ot,Pr(Qn,pu)),Oc=[v0[0],v0[1],v0[2],0,Pc[0],Pc[1],Pc[2],0,Si[0],Si[1],Si[2],0,ai[0],ai[1],ai[2],1];for(let pr=0;pr<16;pr++)Be[pr]=Oc[pr];xt.fresh=!1}return Eo.phase!=="fly"&&(xt.prev=null,xt.vel=[0,0,0],xt.fresh=!0,xt.spin=0,xt.bank=0,xt.dir=null),{visible:!0,model:Be}}function sa(U){for(let le in su)Wt[le]=U[le]!==void 0?U[le]:su[le]}function ri(U,le){if(U<=1)return{phase:"home",pos:Sc.slice(),tumble:0};let Be=Wb[U];if(Be){let ot=Be.amp;return{phase:"fly",pos:to(Be.pos(),[Math.sin(le*.55)*ot[0],Math.sin(le*.8)*ot[1],(1-Math.cos(le*.45))*ot[2]]),tumble:Be.tumble}}return{phase:"floor",pos:(U>=18?ss:U>=10?Ql:Ga).slice(),tumble:0}}let Kt=0,so=null;function zn(U){let le=Math.min(.1,Math.max(0,U-Kt));if(Kt=U,_=U,no||(no=!0,ft.start=U),oo)return null;if(bt&&(bt.t+=le,bt.t>=.7&&(bt=null,lt=!0,be.start(Mt,Object.assign({},su,{fade:1,fadeColor:[0,0,0]})))),be.active){let co=be.update(le);return xo=co.camera,sa(co.look),o&&window.__camOverride&&(xo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Wt,window.__lookOverride),{camera:xo,walker:null,door:1,look:Wt,leaf:Po(le)}}if(!zt&&!Ie&&_-tt>vt){let co=br(me);Math.abs(Te[co]-me)<Jt&&(me=Te[co])}let Be=me-Lt;if(zt){let Yo=Math.sign(Be)*Math.min(ao,Math.sqrt(2*Ho*Math.abs(Be)))-mt;mt+=Math.sign(Yo)*Math.min(Math.abs(Yo),Ho*le),Lt+=mt*le,(Be>0&&Lt>=me||Be<0&&Lt<=me||Math.abs(me-Lt)<1e-4)&&(Lt=me,mt=0,zt=!1)}else{let co=PS(Lt,me,mt,Zt,le,3);Lt=co[0],mt=co[1],Math.abs(me-Lt)<1e-4&&Math.abs(mt)<.001&&(Lt=me,mt=0)}let ot=0;for(;ot<lp.length-1&&Lt>=Te[ot+1];)ot++;let nt=lp[ot],Xo=Wr((Lt-Te[ot])/nt.dur),Cn=is[ot],wr=is[ot+1],Uo=br(Lt);Uo!==Ve&&(Ve=Uo,go=0);let Fr=Math.abs(Lt-Te[Uo])<.02;Fr&&(go+=le);let Jo=1-Oe(0,1.2,Math.abs(Lt-Te[Uo])),So=nt.leaf(Xo);if(So.pos?Eo=Object.assign({},So):Eo=Object.assign({},So,{pos:So.phase==="home"?Sc.slice():(ot>=10?Ql:Ga).slice()}),Wb[Uo]&&Jo>0){let co=ri(Uo,go);Eo.pos=Io(Eo.pos,co.pos,Jo)}let rn=nt.walker&&(Xo>.01||ot===6)?nt.walker(Xo):null;so=rn==null?null:{x:rn,z:fp,heading:Math.PI/2,phase:(rn-Yb)/$S};let Co=nt.cam(Xo,Cn.cam(0),wr.cam(0),Eo);if(Jo>0&&go>0){let co=is[Uo],Yo=co.cam(0),ca=co.cam(go);Co=Yt(to(Co.eye,Pr(sp(ca.eye,Yo.eye),Jo)),to(Co.target,Pr(sp(ca.target,Yo.target),Jo)),Co.fov+(ca.fov-Yo.fov)*Jo,Co.roll+(ca.roll-Yo.roll)*Jo)}if(Jo>0&&!Xe){let co=_,Yo=.006*Jo,ca=Math.sin(co*.61)*.6+Math.sin(co*1.37+1.3)*.4,us=Math.sin(co*.47+2.1)*.6+Math.sin(co*1.13+.4)*.4,Ua=Math.sin(co*.53+4)*.5+Math.sin(co*.97+2.6)*.5;Co=Yt(to(Co.eye,[ca*Yo,us*Yo*.7,Ua*Yo]),to(Co.target,[us*Yo*1.8,ca*Yo*1.4,0]),Co.fov,Co.roll+Ua*.0012*Jo)}xo=Co;let Un=au(ot),_r=au(ot+1),sr=Object.assign({},Un,nt.look(Xo,Un,_r,Eo,Co.eye));if(Jo>0){let co=au(Uo);for(let Yo in co)typeof co[Yo]=="number"&&(sr[Yo]=Ge(sr[Yo],co[Yo],Jo))}sa(sr);let cr=Fr&&Math.abs(me-Lt)<.02?Uo:-1;cr!==ct&&(cr>=0&&(p0=_+St),ct=cr,cr>=0?Hn(cr):Ha()),h.querySelectorAll("i").forEach((co,Yo)=>co.classList.toggle("on",Yo===Uo));let Mr=ct>=0?Y[ct]:null;Mr&&Mr.fill&&!Mr.filled&&(Mr.fill(),Mr.filled&&(Mr.classList.remove("on"),Mr.offsetWidth,Mr.classList.add("on")));let Qn=Wr((U-ft.start)/2.6);return Qn<1&&(Wt.fade=Math.max(Wt.fade,1-Oe(0,1,Qn)),Wt.fadeColor=[0,0,0]),o&&window.__camOverride&&(xo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Wt,window.__lookOverride),{camera:xo,walker:so,door:nt.door?nt.door(Xo):ot>=12?1:0,look:bt?Object.assign(Wt,{fade:Math.max(Wt.fade||0,Wr(bt.t/.6)),fadeColor:[0,0,0]}):Wt,leaf:Po(le)}}return o&&(window.__tour={go:Ne,exit:kt,wind:K,confess(){Ha(),ct=-2,be.start(xo,Wt)},note:()=>Nt(),conf:be,paper:Vh().STATE,seek(U,le){Lt=me=Te[U]+(Te[U+1]-Te[U])*le,mt=0,zt=!1,tt=_+1e6,ft.start=_-10,no=!0},jump(U){Lt=me=Te[U],mt=0,zt=!1,go=0,tt=_,ft.start=_-10,no=!0},state:()=>({current:br(Lt),scroll:+Lt.toFixed(3),target:+me.toFixed(3),shown:ct,move:Math.abs(me-Lt)>.02?{p:Lt}:null,camNow:xo,leaf:Eo,look:Wt})}),{update:zn,get active(){return po&&!oo},handover(U){if(!oo)return null;let le=Wr((U-oo.start)/1.8);return le>=1?(po=!1,null):{from:oo.fromCam,fromLook:oo.fromLook,k:hn(le)}},restingDoor:()=>_t,restingLeaf(){return Ht?(Eo=Ht,Po(0)):null},mix:c0,cam:Yt}}});var YS=Sm(),$a=ha(),Tp=u1(),ef=$a.reflection,KS=!1,p5=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),Lp=()=>p5(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Lp=()=>p5(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var v5=()=>2*Math.atan(Math.tan(Lp()*.5)*window.innerHeight/window.innerWidth),QS=Dm(),tf=new QS;tf.showPanel(0);KS&&document.body.appendChild(tf.dom);var Zo,Rc,wp,ls,_p,Vo;function ZS(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!ZS())throw YS.finish(),Tp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Zo=Gm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:$a.pixelRatio});location.hash==="#list"&&Tp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Tp.show(!1)});Rc=E2()();var JS=U1();wp=JS(Zo,Rc,ef);ls=jg()(Zo,Rc);_p=Yg()(Zo);var Zb=rx()(Zo,Rc),Jb=vx()(Zo),e5=xx()(Zo),t5=Ox()(Zo),o5=$x()(Zo),n5=jx()(Zo),fs=iy()(Zo),Mp=_d(),m5=$f(),eA=rl(),kp=kd(),uu=or(),wn=gh(),Ep=my(),g5=Oh(),{A:Nc}=pa();Vo=Z3()(Rc,v5);var u0=eb()(Zo,$a),cs=ab()(Zo),r5=sb()(Zo),tA=fb()(Zo,$a),oA=mb()(Zo,$a),a5=Fi()(Zo),i5=Vh()(Zo),s5=$i()(Zo),qa=Zd();qa.init({regl:Zo,post:u0});/tourdebug/.test(location.search)&&(window.__enterCons=()=>{let e=ls.interactables().find(t=>t.slug===qa.SLUG);return e&&window.__consDebug.go(e,"cons"),!!e});/tourdebug/.test(location.search)&&(window.__enterRed=()=>{let e=ls.interactables().find(o=>o.slug==="a-private-eulogy"),t=e&&qa.button(e);return t&&t.click(),!!t});var zc=e=>{let t=qa.draw;t&&t(e)};zc.reflect=(e,t)=>{let o=qa.draw;o&&o.reflect(e,t)};var ni=Qb()({fps:Vo,paintings:()=>ls.interactables(),avatar:fs,onExit:()=>Vo.setPaused(!1)});Vo.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=u0);var f0=[],nf=[],Ma=[7,2,1.6];Rc.viewer=Ma;var nA=Zo({cull:{enable:!0,face:"back"},uniforms:{view:()=>f0,proj:()=>nf,yScale:1,mirrorOn:()=>ef?1:0,night:()=>uu.night,studioBake:()=>qa.bake(),candleT:Zo.context("time"),time:Zo.context("time")}}),c5=Zo({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),x5=document.createElement("style");x5.textContent=`

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
`;document.head.appendChild(x5);var ka=document.createElement("button");ka.className="painting-plaque";ka.type="button";ka.setAttribute("aria-label","Read painting");document.body.appendChild(ka);var Ir=document.createElement("div");Ir.className="story-overlay";Ir.innerHTML=`

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

		${m5.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Ir);var hs=document.createElement("div");hs.className="museum-links";hs.innerHTML=m5.icons("museum-link");hs.insertBefore(tp()("museum-link"),hs.firstChild);hs.insertBefore(g5.button("museum-link"),hs.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>hs.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(hs);var rA=Ir.querySelector("#story-title"),aA=Ir.querySelector("#story-body"),l5=Ir.querySelector("#story-meta"),iA=Ir.querySelector(".story-contact"),Cc=Ir.querySelector(".story-visit");Cc.addEventListener("click",e=>{e.target.closest(".visit-btn")&&d0&&kp.open(d0)});var sA=Ir.querySelector(".story-close"),d0=null,Vr={p:0,target:0,last:0},y5={title:Mp.title,description:Mp.text,isAbout:!0},ki=null;function zp(e){if(e){if(d0=e,rA.textContent=e.title||"",aA.textContent=e.description||"",l5.textContent=e.isAbout?"":eA(e),l5.hidden=!!e.isAbout,iA.hidden=!e.isAbout,Cc.innerHTML=e.isAbout?"":kp.button(e),!e.isAbout&&e.paintingPosition){let t=qa.button(e);t&&e.slug!==qa.SLUG&&(t.addEventListener("click",()=>du()),Cc.appendChild(t))}Cc.hidden=!Cc.innerHTML,Cc.hidden||kp.warm(e),Ir.classList.toggle("about-mode",!!e.isAbout),Ir.classList.add("open"),Vr.target=e.isAbout?1:0,ki=e,ka.classList.remove("visible"),Vo.setPaused(!0)}}function du(){Ir.classList.remove("open"),Vr.target=0,d0=null,ki=null,Vo.setPaused(!1)}function b5(e){e&&(e.preventDefault(),e.stopPropagation()),ki&&zp(ki)}ka.addEventListener("pointerup",b5,!0);ka.addEventListener("touchend",b5,{passive:!1,capture:!0});ka.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),d0===null&&ki&&zp(ki)},!0);sA.addEventListener("click",du);Ir.addEventListener("click",e=>{e.target===Ir&&du()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Ir.classList.contains("open")&&du()});function f5(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function cA(){if(d0)return;if(ni.active){ki=null,ka.classList.remove("visible");return}let e=ls.interactables(),t=Vo.forward[0],o=Vo.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,l=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?l=1:l=-1;let f=s[0]-Vo.pos[0],u=s[2]-Vo.pos[2],h=-(f*c+u*l),d=Math.abs(f*l-u*c),v=-(t*c+o*l)/n,p=i.side==="end"?11:8,m=(i.width||2)/2;v>.9&&h>.5&&h<p&&d<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=Vo.pos[0],s=Vo.pos[2];t/n>.85&&i<13.6&&s>Nc.z0-.5&&s<Nc.z1+.5&&(r=Object.assign({},y5,{plaqueTitle:Mp.name}))}r?(ki=r,ka.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,ka.classList.add("visible")):(ki=null,ka.classList.remove("visible"))}var Cp=ec();function lA(){let e=fs.state;if(!e||!e.glowPos)return null;let t=f5(Vo.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=f5(Vo.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Sp=null;window.addEventListener("pointerdown",e=>{Sp={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Sp;if(Sp=null,!t||d0||ni.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=lA();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),zp(y5))},!0);function fA(e){let t=Math.min(Math.max(e-Vr.last,0),.1);Vr.last=e;let o=t/1.6;if(Vr.p=Vr.target>Vr.p?Math.min(1,Vr.p+o):Math.max(0,Vr.p-o),Vr.p<=0)return;let n=Vr.p<.5?2*Vr.p*Vr.p:1-Math.pow(-2*Vr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=fs.state,i=a&&a.hipsPos?a.hipsPos[0]:Nc.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Nc.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],l=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],f=Vo.pos,u=Vo.forward,h=[f[0],f[1],f[2]],d=[f[0]+u[0],f[1]+u[1],f[2]+u[2]],v=(y,b)=>y.map((k,E)=>k+(b[E]-k)*n),p=[Nc.cx-6.2,1.7,Nc.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*p[b]+n*n*c[b]);Cp.lookAt(Vo.view(),g,v(d,l),[0,1,0])}var IL=qa.PREVIEW,l0={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0,glitch:0},h0=null,of=!1,lu=!1;function hA(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),l=Math.sin(n);return Cp.lookAt(e,t,o,[i[0]*l,c,i[2]*l])}function uA(e){let t=window.innerWidth/window.innerHeight,o=u0.shot,n=ni.active?ni.update(e):null,r=n?null:ni.handover(e),a=null,i=l0;if(n){a=n.camera,i=n.look,h0=n.leaf;let s=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;fs.setWalk(s),of=!!s,cs.setOpen(n.door||0)}else h0=ni.restingLeaf(),fs.setWalk(null),of=!1,cs.setOpen(ni.restingDoor());if(r){let s=Vo.pos,c=Vo.forward,l=ni.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],v5()*180/Math.PI,0);a=ni.mix(r.from,l,r.k),i={};for(let f in l0)i[f]=Array.isArray(l0[f])?l0[f]:r.fromLook[f]+(l0[f]-r.fromLook[f])*r.k}if(a&&n&&(a=Ep.apply(a,e)),!(/tourdebug/.test(location.search)&&window.__camOverride)){let s=a;if(!s){let l=Vo.view(),f=l[12],u=l[13],h=l[14],d=[-(l[0]*f+l[1]*u+l[2]*h),-(l[4]*f+l[5]*u+l[6]*h),-(l[8]*f+l[9]*u+l[10]*h)];s={eye:d,target:[d[0]-l[2],d[1]-l[6],d[2]-l[10]],fov:2*Math.atan(1/Vo.proj()[5])*180/Math.PI,roll:0}}let c=qa.update(e,s,i);c&&(Ap=c.moving!==!1,a=c,i=c.look)}if(a)hA(f0,a.eye,a.target,a.roll||0),Cp.perspective(nf,a.fov*Math.PI/180,t,.1,700),Ma[0]=a.eye[0],Ma[1]=a.eye[1],Ma[2]=a.eye[2];else{let s=Vo.view(),c=Vo.proj();for(let h=0;h<16;h++)f0[h]=s[h],nf[h]=c[h];let l=s[12],f=s[13],u=s[14];Ma[0]=-(s[0]*l+s[1]*f+s[2]*u),Ma[1]=-(s[4]*l+s[5]*f+s[6]*u),Ma[2]=-(s[8]*l+s[9]*f+s[10]*u)}for(let s in l0)o[s]=i[s]!==void 0?i[s]:l0[s];n&&Ep.pull(o,e)}var ia={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},gp=[9,9,9,9],h5=[0,0,0,0],Zl=0,xp=0,Lc=null,u5=0,d5=0,Jl=0;function dA(e){let t=Math.min(.1,Math.max(0,e-u5));u5=e,ia.focus=u0.shot.focus,ia.aperture=$a.post>=2?u0.shot.aperture:0;for(let i=0;i<4;i++)gp[i]+=t,ia.wake[i][3]=h5[i]*Math.exp(-gp[i]/1.1);let o=h0&&h0.visible?h0.model:null;if(o&&t>0){let i=[o[12],o[13],o[14]];if(Lc){let s=[i[0]-Lc[0],i[1]-Lc[1],i[2]-Lc[2]],c=Math.hypot(s[0],s[1],s[2]),l=c/t;if(c<1.5&&l>.12){let f=Math.min(1,t*8);for(let h=0;h<3;h++)ia.wakeDir[h]+=(s[h]/c-ia.wakeDir[h])*f;let u=Math.hypot(ia.wakeDir[0],ia.wakeDir[1],ia.wakeDir[2])||1;for(let h=0;h<3;h++)ia.wakeDir[h]/=u;if(xp+=t,xp>.14){xp=0;let h=ia.wake[Zl];h[0]=i[0],h[1]=i[1],h[2]=i[2],h5[Zl]=Math.min(1,(l-.12)/1.6)*.5,gp[Zl]=0,Zl=(Zl+1)%4}}}Lc=i}else o||(Lc=null);let n=cs.openNow?cs.openNow():0,r=t>0?(n-d5)/t:0;d5=n;let a=Math.max(-1,Math.min(1,r*1.2));Jl+=(a-Jl)*Math.min(1,t*(Math.abs(a)>Math.abs(Jl)?6:.7)),ia.gust[0]+=Jl*5.5*t,ia.gust[1]=Math.abs(Jl)}var yp=0,fu=!1,bp=0,hu=0,Ap=!0,pA=/[?&]nocap\b/.test(location.search);Zo.frame(function({time:e}){if(document.body.classList.contains("visiting")){yp=0;return}if(bp++,wn.zone==="studio"&&!pA&&hu>0&&e>hu){let r=Ap||!uu.settled?.03333333333333333:.041666666666666664;if(e-hu<r-.006)return}hu=e;let t=Math.max(1,bp);bp=0,tf.begin(),uu.tick(e);let o=ni.active&&Ep.resting&&uu.settled&&($a.isPhone||$a.scale<1||$a.level>0);if(o){if(fu=!fu,fu){tf.end();return}}else fu=!1;let n=e-yp;yp=e,$a.frame(o?n/2:n/t),ef=$a.reflection,qa.alwaysMirror&&(ef=!0),Vo.tick({time:e}),fA(e),ls.update(Vo.pos,Vo.fmouse[1],Lp()),cA(),uA(e),wn.update(f0,nf,Ma),g5.listen(Ma),lu=!of&&wn.room("stair")&&(!wn.room("court")||Ma[0]<.5||Ma[2]>30),fs.setPiano(lu),dA(e),u0.capture(arguments[0],{view:f0,proj:nf,eye:Ma},()=>{nA(()=>{ef&&wn.floor&&(wn.zone==="studio"&&zc.reflect?zc.reflect(()=>c5(()=>zc({reflected:!0})),Ap?2:4):c5(()=>{wn.room("studio",!0)&&zc({reflected:!0}),wn.zone!=="studio"&&(wp(),Zb({reflected:!0}),a5(),wn.room("stair",!0)&&(s5({reflected:!0}),i5({reflected:!0,view:f0})),wn.room("court",!0)&&n5(),(lu||wn.room("court",!0)||of)&&fs(),_p(ls.batch()),wn.room("street",!0)&&Jb(),wn.room("garden",!0)&&t5(),wn.room("florence",!0)&&o5(),r5(h0),cs(),e5(),cs.glass())})),wn.room("studio")&&zc(),wn.zone!=="studio"&&(wp(),Zb(),a5(),wn.room("stair")&&(s5(),i5({view:f0})),wn.room("court")&&n5(),(lu||wn.room("court")||of)&&fs(),_p(ls.batch()),wn.room("street")&&Jb(),wn.room("garden")&&(t5(),oA()),wn.room("florence")&&o5(),r5(h0),cs(),tA(ia),e5(),cs.glass())})}),u0.present(),tf.end()});})();
