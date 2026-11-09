"use strict";(()=>{var pe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var d1=pe((NE,u1)=>{"use strict";var Ki=document.getElementById("loader"),Yi=Ki&&Ki.querySelector(".loader-name"),Ks=0,dc=0,pc=!1,n3=performance.now(),Qi=.06,Xi=0,wf=0,s1=!1,o3=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function a3(e){if(!Yi)return;let t=Yi.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";Yi.style.webkitMaskPosition=n,Yi.style.maskPosition=n}function f1(e){let t=Math.min(.05,wf?(e-wf)/1e3:.016);wf=e;let r=pc?.75:.22+(Qi-Xi)*1.2;if(Xi=Math.min(Qi,Xi+Math.max(0,r)*t),o3&&(Xi=Qi),a3(Xi),pc&&Xi>=.999){s1||(s1=!0,setTimeout(h1,650));return}requestAnimationFrame(f1)}Yi&&requestAnimationFrame(f1);function c1(){let e=Ks?dc/Math.max(Ks,24):0;Qi=Math.max(Qi,Math.min(.9,.06+e*.84))}function h1(){Ki&&(Ki.classList.add("done"),setTimeout(()=>Ki.remove(),1400))}function _f(){pc||(pc=!0,window.__galleryReady=!0,Ki&&(Qi=1,Yi||h1()))}var l1=null;function i3(){clearTimeout(l1),dc>=Ks&&performance.now()-n3>600&&(l1=setTimeout(()=>{dc>=Ks&&_f()},450))}setTimeout(_f,2e4);var s3=e=>/(^|\/)(res|images)\//.test(e),uc=window.fetch.bind(window);async function c3(e,t){let r=await uc(e+".gz",t);if(!r.ok)throw new Error("no .gz");let n=new Uint8Array(await r.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let o=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(o).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let r=typeof e=="string"?e:e&&e.url||"";if(!s3(r))return uc(e,t);Ks++,c1();let n=a=>(dc++,c1(),i3(),a),o;return/\.bin$/.test(r)&&typeof DecompressionStream!="undefined"?o=c3(r,t).catch(()=>uc(e,t)):o=uc(e,t),o.then(n,a=>{throw n(),a})};u1.exports={finish:_f}});var wo=pe((PE,m1)=>{"use strict";var p1=typeof navigator!="undefined"&&navigator.userAgent||"",l3=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,ha=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(p1)||/Macintosh/.test(p1)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||l3,v1=typeof window!="undefined"&&window.devicePixelRatio||1,Wn={isPhone:ha,pixelRatio:ha?Math.min(v1,1.5):Math.min(v1,2),reflection:!ha,gardenDetail:ha?0:1,leafShare:ha?.65:1,motion:!ha,post:ha?1:2,level:ha?1:0};Wn.stepDown=()=>{if(Wn.reflection)Wn.reflection=!1;else if(Wn.gardenDetail>0||Wn.motion)Wn.gardenDetail=0,Wn.motion=!1,Wn.leafShare=Math.min(Wn.leafShare,.65);else if(Wn.post>0)Wn.post--;else return!1;return Wn.level++,!0};m1.exports=Wn});var Ef=pe((IE,g1)=>{"use strict";g1.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var vc=pe((OE,b1)=>{"use strict";var Ln={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},x1='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',y1='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Ln.instagramUrl="https://instagram.com/"+Ln.instagram;Ln.mailUrl="mailto:"+Ln.email+"?subject="+encodeURIComponent("Your paintings");Ln.icons=e=>`
	<a class="${e}" href="${Ln.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Ln.instagram}" title="Instagram">${x1}</a>
	<a class="${e}" href="${Ln.mailUrl}" aria-label="Email ${Ln.email}" title="Email">${y1}</a>`;Ln.line=e=>`
	<span class="${e}">
		<a href="${Ln.instagramUrl}" target="_blank" rel="noopener">${x1}<span>@${Ln.instagram}</span></a>
		<a href="${Ln.mailUrl}">${y1}<span>${Ln.email}</span></a>
	</span>`;b1.exports=Ln});var Qs=pe((GE,w1)=>{"use strict";w1.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var Mf=pe((FE,M1)=>{"use strict";var f3=Ef(),h3=vc(),_1=Qs(),u3=wo(),ua=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),d3=`
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
`,zn=null;function p3(e){if(zn){zn.hidden=!1,requestAnimationFrame(()=>zn.classList.add("on"));return}let t=document.createElement("style");t.textContent=d3,document.head.appendChild(t);let r=!u3.isPhone;zn=document.createElement("div"),zn.className="plist",zn.setAttribute("role","region"),zn.setAttribute("aria-label","All paintings"),zn.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${h3.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${f3.map(o=>`
			<article class="plist-item" id="${ua(o.slug)}">
				<img loading="lazy" decoding="async" alt="${ua(o.title)}, ${ua(_1(o))}"
					src="images/web/${ua(o.slug)}${r?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${ua(o.file)}'">
				<p class="plist-meta">${ua(_1(o))}</p>
				<h2>${ua(o.title)}</h2>
				<details><summary>Read its story</summary>
					${String(o.description).split(/\n\s*\n/).map(a=>`<p>${ua(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(o=>zn.addEventListener(o,a=>a.stopPropagation(),{passive:!0}));let n=zn.querySelector(".plist-close");n&&n.addEventListener("click",E1),document.body.appendChild(zn),requestAnimationFrame(()=>zn.classList.add("on"))}function E1(){zn&&(zn.classList.remove("on"),setTimeout(()=>{zn.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}M1.exports={show:p3,hide:E1}});var S1=pe((Sf,Af)=>{(function(e,t){typeof Sf=="object"&&typeof Af!="undefined"?Af.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Sf,function(){var e=function(){function t(m){return o.appendChild(m.dom),m}function r(m){for(var h=0;h<o.children.length;h++)o.children[h].style.display=h===m?"block":"none";n=m}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),r(++n%o.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var m=(performance||Date).now();if(f.update(m-a,200),m>i+1e3&&(c.update(1e3*s/(m-i),100),i=m,s=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return m},update:function(){a=this.end()},domElement:o,setMode:r}};return e.Panel=function(t,r,n){var o=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,l=3*s,m=2*s,h=3*s,u=15*s,d=74*s,p=30*s,g=document.createElement("canvas");g.width=c,g.height=f,g.style.cssText="width:80px;height:48px";var x=g.getContext("2d");return x.font="bold "+9*s+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=n,x.fillRect(0,0,c,f),x.fillStyle=r,x.fillText(t,l,m),x.fillRect(h,u,d,p),x.fillStyle=n,x.globalAlpha=.9,x.fillRect(h,u,d,p),{dom:g,update:function(y,w){o=Math.min(o,y),a=Math.max(a,y),x.fillStyle=n,x.globalAlpha=1,x.fillRect(0,0,c,u),x.fillStyle=r,x.fillText(i(y)+" "+t+" ("+i(o)+"-"+i(a)+")",l,m),x.drawImage(g,h+s,u,d-s,p,h,u,d-s,p),x.fillRect(h+d-s,u,s,p),x.fillStyle=n,x.globalAlpha=.9,x.fillRect(h+d-s,u,s,i((1-y/w)*p))}}},e})});var A1=pe((Tf,kf)=>{(function(e,t){typeof Tf=="object"&&typeof kf!="undefined"?kf.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(Tf,function(){"use strict";var e=function(v){return v instanceof Uint8Array||v instanceof Uint16Array||v instanceof Uint32Array||v instanceof Int8Array||v instanceof Int16Array||v instanceof Int32Array||v instanceof Float32Array||v instanceof Float64Array||v instanceof Uint8ClampedArray},t=function(v,E){for(var C=Object.keys(E),Y=0;Y<C.length;++Y)v[C[Y]]=E[C[Y]];return v},r=`
`;function n(v){return typeof atob!="undefined"?atob(v):"base64:"+v}function o(v){var E=new Error("(regl) "+v);throw console.error(E),E}function a(v,E){v||o(E)}function i(v){return v?": "+v:""}function s(v,E,C){v in E||o("unknown parameter ("+v+")"+i(C)+". possible values: "+Object.keys(E).join())}function c(v,E){e(v)||o("invalid parameter type"+i(E)+". must be a typed array")}function f(v,E){switch(E){case"number":return typeof v=="number";case"object":return typeof v=="object";case"string":return typeof v=="string";case"boolean":return typeof v=="boolean";case"function":return typeof v=="function";case"undefined":return typeof v=="undefined";case"symbol":return typeof v=="symbol"}}function l(v,E,C){f(v,E)||o("invalid parameter type"+i(C)+". expected "+E+", got "+typeof v)}function m(v,E){v>=0&&(v|0)===v||o("invalid parameter type, ("+v+")"+i(E)+". must be a nonnegative integer")}function h(v,E,C){E.indexOf(v)<0&&o("invalid value"+i(C)+". must be one of: "+E)}var u=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function d(v){Object.keys(v).forEach(function(E){u.indexOf(E)<0&&o('invalid regl constructor argument "'+E+'". must be one of '+u)})}function p(v,E){for(v=v+"";v.length<E;)v=" "+v;return v}function g(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function x(v,E){this.number=v,this.line=E,this.errors=[]}function y(v,E,C){this.file=v,this.line=E,this.message=C}function w(){var v=new Error,E=(v.stack||v).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(E);if(C)return C[1];var Y=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(E);return Y?Y[1]:"unknown"}function T(){var v=new Error,E=(v.stack||v).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(E);if(C)return C[1];var Y=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(E);return Y?Y[1]:"unknown"}function z(v,E){var C=v.split(`
`),Y=1,ie=0,V={unknown:new g,0:new g};V.unknown.name=V[0].name=E||w(),V.unknown.lines.push(new x(0,""));for(var ee=0;ee<C.length;++ee){var me=C[ee],ye=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(me);if(ye)switch(ye[1]){case"line":var Me=/(\d+)(\s+\d+)?/.exec(ye[2]);Me&&(Y=Me[1]|0,Me[2]&&(ie=Me[2]|0,ie in V||(V[ie]=new g)));break;case"define":var be=/SHADER_NAME(_B64)?\s+(.*)$/.exec(ye[2]);be&&(V[ie].name=be[1]?n(be[2]):be[2]);break}V[ie].lines.push(new x(Y++,me))}return Object.keys(V).forEach(function(Te){var Ne=V[Te];Ne.lines.forEach(function(ge){Ne.index[ge.number]=ge})}),V}function L(v){var E=[];return v.split(`
`).forEach(function(C){if(!(C.length<5)){var Y=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);Y?E.push(new y(Y[1]|0,Y[2]|0,Y[3].trim())):C.length>0&&E.push(new y("unknown",0,C))}}),E}function O(v,E){E.forEach(function(C){var Y=v[C.file];if(Y){var ie=Y.index[C.line];if(ie){ie.errors.push(C),Y.hasErrors=!0;return}}v.unknown.hasErrors=!0,v.unknown.lines[0].errors.push(C)})}function U(v,E,C,Y,ie){if(!v.getShaderParameter(E,v.COMPILE_STATUS)){var V=v.getShaderInfoLog(E),ee=Y===v.FRAGMENT_SHADER?"fragment":"vertex";de(C,"string",ee+" shader source must be a string",ie);var me=z(C,ie),ye=L(V);O(me,ye),Object.keys(me).forEach(function(Me){var be=me[Me];if(!be.hasErrors)return;var Te=[""],Ne=[""];function ge(ke,$){Te.push(ke),Ne.push($||"")}ge("file number "+Me+": "+be.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),be.lines.forEach(function(ke){if(ke.errors.length>0){ge(p(ke.number,4)+"|  ","background-color:yellow; font-weight:bold"),ge(ke.line+r,"color:red; background-color:yellow; font-weight:bold");var $=0;ke.errors.forEach(function(te){var Ee=te.message,Fe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Ee);if(Fe){var fe=Fe[1];switch(Ee=Fe[2],fe){case"assign":fe="=";break}$=Math.max(ke.line.indexOf(fe,$),0)}else $=0;ge(p("| ",6)),ge(p("^^^",$+3)+r,"font-weight:bold"),ge(p("| ",6)),ge(Ee+r,"font-weight:bold")}),ge(p("| ",6)+r)}else ge(p(ke.number,4)+"|  "),ge(ke.line+r,"color:red")}),typeof document!="undefined"&&!window.chrome?(Ne[0]=Te.join("%c"),console.log.apply(console,Ne)):console.log(Te.join(""))}),a.raise("Error compiling "+ee+" shader, "+me[0].name)}}function K(v,E,C,Y,ie){if(!v.getProgramParameter(E,v.LINK_STATUS)){var V=v.getProgramInfoLog(E),ee=z(C,ie),me=z(Y,ie),ye='Error linking program with vertex shader, "'+me[0].name+'", and fragment shader "'+ee[0].name+'"';typeof document!="undefined"?console.log("%c"+ye+r+"%c"+V,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(ye+r+V),a.raise(ye)}}function Z(v){v._commandRef=w()}function J(v,E,C,Y){Z(v);function ie(ye){return ye?Y.id(ye):0}v._fragId=ie(v.static.frag),v._vertId=ie(v.static.vert);function V(ye,Me){Object.keys(Me).forEach(function(be){ye[Y.id(be)]=!0})}var ee=v._uniformSet={};V(ee,E.static),V(ee,E.dynamic);var me=v._attributeSet={};V(me,C.static),V(me,C.dynamic),v._hasCount="count"in v.static||"count"in v.dynamic||"elements"in v.static||"elements"in v.dynamic}function ce(v,E){var C=T();o(v+" in command "+(E||w())+(C==="unknown"?"":" called from "+C))}function H(v,E,C){v||ce(E,C||w())}function j(v,E,C,Y){v in E||ce("unknown parameter ("+v+")"+i(C)+". possible values: "+Object.keys(E).join(),Y||w())}function de(v,E,C,Y){f(v,E)||ce("invalid parameter type"+i(C)+". expected "+E+", got "+typeof v,Y||w())}function ve(v){v()}function it(v,E,C){v.texture?h(v.texture._texture.internalformat,E,"unsupported texture format for attachment"):h(v.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var _e=33071,ht=9728,bt=9984,_t=9985,Le=9986,vt=9987,pt=5120,Tt=5121,Gt=5122,Ft=5123,Ge=5124,Ze=5125,et=5126,Ot=32819,mt=32820,cr=33635,ne=34042,Ke=36193,ot={};ot[pt]=ot[Tt]=1,ot[Gt]=ot[Ft]=ot[Ke]=ot[cr]=ot[Ot]=ot[mt]=2,ot[Ge]=ot[Ze]=ot[et]=ot[ne]=4;function Rt(v,E){return v===mt||v===Ot||v===cr?2:v===ne?4:ot[v]*E}function Pt(v){return!(v&v-1)&&!!v}function lr(v,E,C){var Y,ie=E.width,V=E.height,ee=E.channels;a(ie>0&&ie<=C.maxTextureSize&&V>0&&V<=C.maxTextureSize,"invalid texture shape"),(v.wrapS!==_e||v.wrapT!==_e)&&a(Pt(ie)&&Pt(V),"incompatible wrap mode for texture, both width and height must be power of 2"),E.mipmask===1?ie!==1&&V!==1&&a(v.minFilter!==bt&&v.minFilter!==Le&&v.minFilter!==_t&&v.minFilter!==vt,"min filter requires mipmap"):(a(Pt(ie)&&Pt(V),"texture must be a square power of 2 to support mipmapping"),a(E.mipmask===(ie<<1)-1,"missing or incomplete mipmap data")),E.type===et&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(v.minFilter===ht&&v.magFilter===ht,"filter not supported, must enable oes_texture_float_linear"),a(!v.genMipmaps,"mipmap generation not supported with float textures"));var me=E.images;for(Y=0;Y<16;++Y)if(me[Y]){var ye=ie>>Y,Me=V>>Y;a(E.mipmask&1<<Y,"missing mipmap data");var be=me[Y];if(a(be.width===ye&&be.height===Me,"invalid shape for mip images"),a(be.format===E.format&&be.internalformat===E.internalformat&&be.type===E.type,"incompatible type for mip image"),!be.compressed)if(be.data){var Te=Math.ceil(Rt(be.type,ee)*ye/be.unpackAlignment)*be.unpackAlignment;a(be.data.byteLength===Te*Me,"invalid data for image, buffer size is inconsistent with image format")}else be.element||be.copy}else v.genMipmaps||a((E.mipmask&1<<Y)===0,"extra mipmap data");E.compressed&&a(!v.genMipmaps,"mipmap generation for compressed images not supported")}function Et(v,E,C,Y){var ie=v.width,V=v.height,ee=v.channels;a(ie>0&&ie<=Y.maxTextureSize&&V>0&&V<=Y.maxTextureSize,"invalid texture shape"),a(ie===V,"cube map must be square"),a(E.wrapS===_e&&E.wrapT===_e,"wrap mode not supported by cube map");for(var me=0;me<C.length;++me){var ye=C[me];a(ye.width===ie&&ye.height===V,"inconsistent cube map face shape"),E.genMipmaps&&(a(!ye.compressed,"can not generate mipmap for compressed textures"),a(ye.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Me=ye.images,be=0;be<16;++be){var Te=Me[be];if(Te){var Ne=ie>>be,ge=V>>be;a(ye.mipmask&1<<be,"missing mipmap data"),a(Te.width===Ne&&Te.height===ge,"invalid shape for mip images"),a(Te.format===v.format&&Te.internalformat===v.internalformat&&Te.type===v.type,"incompatible type for mip image"),Te.compressed||(Te.data?a(Te.data.byteLength===Ne*ge*Math.max(Rt(Te.type,ee),Te.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Te.element||Te.copy)}}}}var _=t(a,{optional:ve,raise:o,commandRaise:ce,command:H,parameter:s,commandParameter:j,constructor:d,type:l,commandType:de,isTypedArray:c,nni:m,oneOf:h,shaderError:U,linkError:K,callSite:T,saveCommandRef:Z,saveDrawInfo:J,framebufferFormat:it,guessCommand:w,texture2D:lr,textureCube:Et}),qt=0,st=0,kt=5,Lt=6;function We(v,E){this.id=qt++,this.type=v,this.data=E}function Yt(v){return v.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Ht(v){if(v.length===0)return[];var E=v.charAt(0),C=v.charAt(v.length-1);if(v.length>1&&E===C&&(E==='"'||E==="'"))return['"'+Yt(v.substr(1,v.length-2))+'"'];var Y=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(v);if(Y)return Ht(v.substr(0,Y.index)).concat(Ht(Y[1])).concat(Ht(v.substr(Y.index+Y[0].length)));var ie=v.split(".");if(ie.length===1)return['"'+Yt(v)+'"'];for(var V=[],ee=0;ee<ie.length;++ee)V=V.concat(Ht(ie[ee]));return V}function fr(v){return"["+Ht(v).join("][")+"]"}function Rr(v,E){return new We(v,fr(E+""))}function Sn(v){return typeof v=="function"&&!v._reglType||v instanceof We}function wn(v,E){if(typeof v=="function")return new We(st,v);if(typeof v=="number"||typeof v=="boolean")return new We(kt,v);if(Array.isArray(v))return new We(Lt,v.map((C,Y)=>wn(C,E+"["+Y+"]")));if(v instanceof We)return v;_(!1,"invalid option type in uniform "+E)}var tr={DynamicVariable:We,define:Rr,isDynamic:Sn,unbox:wn,accessor:fr},ra={next:typeof requestAnimationFrame=="function"?function(v){return requestAnimationFrame(v)}:function(v){return setTimeout(v,16)},cancel:typeof cancelAnimationFrame=="function"?function(v){return cancelAnimationFrame(v)}:clearTimeout},Oa=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Ga(){var v={"":0},E=[""];return{id:function(C){var Y=v[C];return Y||(Y=v[C]=E.length,E.push(C),Y)},str:function(C){return E[C]}}}function Ho(v,E,C){var Y=document.createElement("canvas");t(Y.style,{border:0,margin:0,padding:0,top:0,left:0}),v.appendChild(Y),v===document.body&&(Y.style.position="absolute",t(v.style,{margin:0,padding:0}));function ie(){var me=window.innerWidth,ye=window.innerHeight;if(v!==document.body){var Me=v.getBoundingClientRect();me=Me.right-Me.left,ye=Me.bottom-Me.top}Y.width=C*me,Y.height=C*ye,t(Y.style,{width:me+"px",height:ye+"px"})}var V;v!==document.body&&typeof ResizeObserver=="function"?(V=new ResizeObserver(function(){setTimeout(ie)}),V.observe(v)):window.addEventListener("resize",ie,!1);function ee(){V?V.disconnect():window.removeEventListener("resize",ie),v.removeChild(Y)}return ie(),{canvas:Y,onDestroy:ee}}function na(v,E){function C(Y){try{return v.getContext(Y,E)}catch(ie){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function Lo(v){return typeof v.nodeName=="string"&&typeof v.appendChild=="function"&&typeof v.getBoundingClientRect=="function"}function oa(v){return typeof v.drawArrays=="function"||typeof v.drawElements=="function"}function _n(v){return typeof v=="string"?v.split():(_(Array.isArray(v),"invalid extension array"),v)}function ur(v){return typeof v=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(v)):v}function _l(v){var E=v||{},C,Y,ie,V,ee={},me=[],ye=[],Me=typeof window=="undefined"?1:window.devicePixelRatio,be=!1,Te=function(ke){ke&&_.raise(ke)},Ne=function(){};if(typeof E=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(E),_(C,"invalid query string for element")):typeof E=="object"?Lo(E)?C=E:oa(E)?(V=E,ie=V.canvas):(_.constructor(E),"gl"in E?V=E.gl:"canvas"in E?ie=ur(E.canvas):"container"in E&&(Y=ur(E.container)),"attributes"in E&&(ee=E.attributes,_.type(ee,"object","invalid context attributes")),"extensions"in E&&(me=_n(E.extensions)),"optionalExtensions"in E&&(ye=_n(E.optionalExtensions)),"onDone"in E&&(_.type(E.onDone,"function","invalid or missing onDone callback"),Te=E.onDone),"profile"in E&&(be=!!E.profile),"pixelRatio"in E&&(Me=+E.pixelRatio,_(Me>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?ie=C:Y=C),!V){if(!ie){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var ge=Ho(Y||document.body,Te,Me);if(!ge)return null;ie=ge.canvas,Ne=ge.onDestroy}ee.premultipliedAlpha===void 0&&(ee.premultipliedAlpha=!0),V=na(ie,ee)}return V?{gl:V,canvas:ie,container:Y,extensions:me,optionalExtensions:ye,pixelRatio:Me,profile:be,onDone:Te,onDestroy:Ne}:(Ne(),Te("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Rs(v,E){var C={};function Y(ee){_.type(ee,"string","extension name must be string");var me=ee.toLowerCase(),ye;try{ye=C[me]=v.getExtension(me)}catch(Me){}return!!ye}for(var ie=0;ie<E.extensions.length;++ie){var V=E.extensions[ie];if(!Y(V))return E.onDestroy(),E.onDone('"'+V+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return E.optionalExtensions.forEach(Y),{extensions:C,restore:function(){Object.keys(C).forEach(function(ee){if(C[ee]&&!Y(ee))throw new Error("(regl): error restoring extension "+ee)})}}}function gn(v,E){for(var C=Array(v),Y=0;Y<v;++Y)C[Y]=E(Y);return C}var El=5120,N0=5121,P0=5122,Ml=5123,ae=5124,Ae=5125,Ye=5126;function lt(v){for(var E=16;E<=1<<28;E*=16)if(v<=E)return E;return 0}function Dt(v){var E,C;return E=(v>65535)<<4,v>>>=E,C=(v>255)<<3,v>>>=C,E|=C,C=(v>15)<<2,v>>>=C,E|=C,C=(v>3)<<1,v>>>=C,E|=C,E|v>>1}function Kt(){var v=gn(8,function(){return[]});function E(V){var ee=lt(V),me=v[Dt(ee)>>2];return me.length>0?me.pop():new ArrayBuffer(ee)}function C(V){v[Dt(V.byteLength)>>2].push(V)}function Y(V,ee){var me=null;switch(V){case El:me=new Int8Array(E(ee),0,ee);break;case N0:me=new Uint8Array(E(ee),0,ee);break;case P0:me=new Int16Array(E(2*ee),0,ee);break;case Ml:me=new Uint16Array(E(2*ee),0,ee);break;case ae:me=new Int32Array(E(4*ee),0,ee);break;case Ae:me=new Uint32Array(E(4*ee),0,ee);break;case Ye:me=new Float32Array(E(4*ee),0,ee);break;default:return null}return me.length!==ee?me.subarray(0,ee):me}function ie(V){C(V.buffer)}return{alloc:E,free:C,allocType:Y,freeType:ie}}var rr=Kt();rr.zero=Kt();var Hr=3408,xn=3410,eo=3411,Br=3412,Er=3413,An=3414,tn=3415,zo=33901,aa=33902,Fa=3379,Co=3386,Ro=34921,Xr=36347,Da=36348,dr=35661,Nr=35660,Bo=34930,I0=36349,O0=34076,kx=34024,Lx=7936,zx=7937,Cx=7938,Rx=35724,Nx=34047,Px=36063,Ix=34852,G0=3553,gu=34067,Ox=34069,Gx=33984,Ns=6408,Sl=5126,xu=5121,Al=36160,Fx=36053,Dx=36064,$x=16384,qx=function(v,E){var C=1;E.ext_texture_filter_anisotropic&&(C=v.getParameter(Nx));var Y=1,ie=1;E.webgl_draw_buffers&&(Y=v.getParameter(Ix),ie=v.getParameter(Px));var V=!!E.oes_texture_float;if(V){var ee=v.createTexture();v.bindTexture(G0,ee),v.texImage2D(G0,0,Ns,1,1,0,Ns,Sl,null);var me=v.createFramebuffer();if(v.bindFramebuffer(Al,me),v.framebufferTexture2D(Al,Dx,G0,ee,0),v.bindTexture(G0,null),v.checkFramebufferStatus(Al)!==Fx)V=!1;else{v.viewport(0,0,1,1),v.clearColor(1,0,0,1),v.clear($x);var ye=rr.allocType(Sl,4);v.readPixels(0,0,1,1,Ns,Sl,ye),v.getError()?V=!1:(v.deleteFramebuffer(me),v.deleteTexture(ee),V=ye[0]===1),rr.freeType(ye)}}var Me=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),be=!0;if(!Me){var Te=v.createTexture(),Ne=rr.allocType(xu,36);v.activeTexture(Gx),v.bindTexture(gu,Te),v.texImage2D(Ox,0,Ns,3,3,0,Ns,xu,Ne),rr.freeType(Ne),v.bindTexture(gu,null),v.deleteTexture(Te),be=!v.getError()}return{colorBits:[v.getParameter(xn),v.getParameter(eo),v.getParameter(Br),v.getParameter(Er)],depthBits:v.getParameter(An),stencilBits:v.getParameter(tn),subpixelBits:v.getParameter(Hr),extensions:Object.keys(E).filter(function(ge){return!!E[ge]}),maxAnisotropic:C,maxDrawbuffers:Y,maxColorAttachments:ie,pointSizeDims:v.getParameter(zo),lineWidthDims:v.getParameter(aa),maxViewportDims:v.getParameter(Co),maxCombinedTextureUnits:v.getParameter(dr),maxCubeMapSize:v.getParameter(O0),maxRenderbufferSize:v.getParameter(kx),maxTextureUnits:v.getParameter(Bo),maxTextureSize:v.getParameter(Fa),maxAttributes:v.getParameter(Ro),maxVertexUniforms:v.getParameter(Xr),maxVertexTextureUnits:v.getParameter(Nr),maxVaryingVectors:v.getParameter(Da),maxFragmentUniforms:v.getParameter(I0),glsl:v.getParameter(Rx),renderer:v.getParameter(zx),vendor:v.getParameter(Lx),version:v.getParameter(Cx),readFloat:V,npotTextureCube:be}};function xo(v){return!!v&&typeof v=="object"&&Array.isArray(v.shape)&&Array.isArray(v.stride)&&typeof v.offset=="number"&&v.shape.length===v.stride.length&&(Array.isArray(v.data)||e(v.data))}var jn=function(v){return Object.keys(v).map(function(E){return v[E]})},F0={shape:jx,flatten:Ux};function Hx(v,E,C){for(var Y=0;Y<E;++Y)C[Y]=v[Y]}function Bx(v,E,C,Y){for(var ie=0,V=0;V<E;++V)for(var ee=v[V],me=0;me<C;++me)Y[ie++]=ee[me]}function yu(v,E,C,Y,ie,V){for(var ee=V,me=0;me<E;++me)for(var ye=v[me],Me=0;Me<C;++Me)for(var be=ye[Me],Te=0;Te<Y;++Te)ie[ee++]=be[Te]}function bu(v,E,C,Y,ie){for(var V=1,ee=C+1;ee<E.length;++ee)V*=E[ee];var me=E[C];if(E.length-C===4){var ye=E[C+1],Me=E[C+2],be=E[C+3];for(ee=0;ee<me;++ee)yu(v[ee],ye,Me,be,Y,ie),ie+=V}else for(ee=0;ee<me;++ee)bu(v[ee],E,C+1,Y,ie),ie+=V}function Ux(v,E,C,Y){var ie=1;if(E.length)for(var V=0;V<E.length;++V)ie*=E[V];else ie=0;var ee=Y||rr.allocType(C,ie);switch(E.length){case 0:break;case 1:Hx(v,E[0],ee);break;case 2:Bx(v,E[0],E[1],ee);break;case 3:yu(v,E[0],E[1],E[2],ee,0);break;default:bu(v,E,0,ee,0)}return ee}function jx(v){for(var E=[],C=v;C.length;C=C[0])E.push(C.length);return E}var Tl={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Wx=5120,Vx=5122,Xx=5124,Yx=5121,Kx=5123,Qx=5125,Zx=5126,Jx=5126,$a={int8:Wx,int16:Vx,int32:Xx,uint8:Yx,uint16:Kx,uint32:Qx,float:Zx,float32:Jx},ey=35048,ty=35040,D0={dynamic:ey,stream:ty,static:35044},kl=F0.flatten,wu=F0.shape,_u=35044,ry=35040,Ll=5121,zl=5126,ia=[];ia[5120]=1,ia[5122]=2,ia[5124]=4,ia[5121]=1,ia[5123]=2,ia[5125]=4,ia[5126]=4;function $0(v){return Tl[Object.prototype.toString.call(v)]|0}function Eu(v,E){for(var C=0;C<E.length;++C)v[C]=E[C]}function Mu(v,E,C,Y,ie,V,ee){for(var me=0,ye=0;ye<C;++ye)for(var Me=0;Me<Y;++Me)v[me++]=E[ie*ye+V*Me+ee]}function ny(v,E,C,Y){var ie=0,V={};function ee($){this.id=ie++,this.buffer=v.createBuffer(),this.type=$,this.usage=_u,this.byteLength=0,this.dimension=1,this.dtype=Ll,this.persistentData=null,C.profile&&(this.stats={size:0})}ee.prototype.bind=function(){v.bindBuffer(this.type,this.buffer)},ee.prototype.destroy=function(){Ne(this)};var me=[];function ye($,te){var Ee=me.pop();return Ee||(Ee=new ee($)),Ee.bind(),Te(Ee,te,ry,0,1,!1),Ee}function Me($){me.push($)}function be($,te,Ee){$.byteLength=te.byteLength,v.bufferData($.type,te,Ee)}function Te($,te,Ee,Fe,fe,De){var ue;if($.usage=Ee,Array.isArray(te)){if($.dtype=Fe||zl,te.length>0){var ze;if(Array.isArray(te[0])){ue=wu(te);for(var he=1,Ce=1;Ce<ue.length;++Ce)he*=ue[Ce];$.dimension=he,ze=kl(te,ue,$.dtype),be($,ze,Ee),De?$.persistentData=ze:rr.freeType(ze)}else if(typeof te[0]=="number"){$.dimension=fe;var Qe=rr.allocType($.dtype,te.length);Eu(Qe,te),be($,Qe,Ee),De?$.persistentData=Qe:rr.freeType(Qe)}else e(te[0])?($.dimension=te[0].length,$.dtype=Fe||$0(te[0])||zl,ze=kl(te,[te.length,te[0].length],$.dtype),be($,ze,Ee),De?$.persistentData=ze:rr.freeType(ze)):_.raise("invalid buffer data")}}else if(e(te))$.dtype=Fe||$0(te),$.dimension=fe,be($,te,Ee),De&&($.persistentData=new Uint8Array(new Uint8Array(te.buffer)));else if(xo(te)){ue=te.shape;var ct=te.stride,Pe=te.offset,Se=0,le=0,at=0,gt=0;ue.length===1?(Se=ue[0],le=1,at=ct[0],gt=0):ue.length===2?(Se=ue[0],le=ue[1],at=ct[0],gt=ct[1]):_.raise("invalid shape"),$.dtype=Fe||$0(te.data)||zl,$.dimension=le;var Be=rr.allocType($.dtype,Se*le);Mu(Be,te.data,Se,le,at,gt,Pe),be($,Be,Ee),De?$.persistentData=Be:rr.freeType(Be)}else te instanceof ArrayBuffer?($.dtype=Ll,$.dimension=fe,be($,te,Ee),De&&($.persistentData=new Uint8Array(new Uint8Array(te)))):_.raise("invalid buffer data")}function Ne($){E.bufferCount--,Y($);var te=$.buffer;_(te,"buffer must not be deleted already"),v.deleteBuffer(te),$.buffer=null,delete V[$.id]}function ge($,te,Ee,Fe){E.bufferCount++;var fe=new ee(te);V[fe.id]=fe;function De(he){var Ce=_u,Qe=null,ct=0,Pe=0,Se=1;return Array.isArray(he)||e(he)||xo(he)||he instanceof ArrayBuffer?Qe=he:typeof he=="number"?ct=he|0:he&&(_.type(he,"object","buffer arguments must be an object, a number or an array"),"data"in he&&(_(Qe===null||Array.isArray(Qe)||e(Qe)||xo(Qe),"invalid data for buffer"),Qe=he.data),"usage"in he&&(_.parameter(he.usage,D0,"invalid buffer usage"),Ce=D0[he.usage]),"type"in he&&(_.parameter(he.type,$a,"invalid buffer type"),Pe=$a[he.type]),"dimension"in he&&(_.type(he.dimension,"number","invalid dimension"),Se=he.dimension|0),"length"in he&&(_.nni(ct,"buffer length must be a nonnegative integer"),ct=he.length|0)),fe.bind(),Qe?Te(fe,Qe,Ce,Pe,Se,Fe):(ct&&v.bufferData(fe.type,ct,Ce),fe.dtype=Pe||Ll,fe.usage=Ce,fe.dimension=Se,fe.byteLength=ct),C.profile&&(fe.stats.size=fe.byteLength*ia[fe.dtype]),De}function ue(he,Ce){_(Ce+he.byteLength<=fe.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+he.byteLength+" starting from offset "+Ce+" to a buffer of size "+fe.byteLength),v.bufferSubData(fe.type,Ce,he)}function ze(he,Ce){var Qe=(Ce||0)|0,ct;if(fe.bind(),e(he)||he instanceof ArrayBuffer)ue(he,Qe);else if(Array.isArray(he)){if(he.length>0)if(typeof he[0]=="number"){var Pe=rr.allocType(fe.dtype,he.length);Eu(Pe,he),ue(Pe,Qe),rr.freeType(Pe)}else if(Array.isArray(he[0])||e(he[0])){ct=wu(he);var Se=kl(he,ct,fe.dtype);ue(Se,Qe),rr.freeType(Se)}else _.raise("invalid buffer data")}else if(xo(he)){ct=he.shape;var le=he.stride,at=0,gt=0,Be=0,St=0;ct.length===1?(at=ct[0],gt=1,Be=le[0],St=0):ct.length===2?(at=ct[0],gt=ct[1],Be=le[0],St=le[1]):_.raise("invalid shape");var ft=Array.isArray(he.data)?fe.dtype:$0(he.data),wt=rr.allocType(ft,at*gt);Mu(wt,he.data,at,gt,Be,St,he.offset),ue(wt,Qe),rr.freeType(wt)}else _.raise("invalid data for buffer subdata");return De}return Ee||De($),De._reglType="buffer",De._buffer=fe,De.subdata=ze,C.profile&&(De.stats=fe.stats),De.destroy=function(){Ne(fe)},De}function ke(){jn(V).forEach(function($){$.buffer=v.createBuffer(),v.bindBuffer($.type,$.buffer),v.bufferData($.type,$.persistentData||$.byteLength,$.usage)})}return C.profile&&(E.getTotalBufferSize=function(){var $=0;return Object.keys(V).forEach(function(te){$+=V[te].stats.size}),$}),{create:ge,createStream:ye,destroyStream:Me,clear:function(){jn(V).forEach(Ne),me.forEach(Ne)},getBuffer:function($){return $&&$._buffer instanceof ee?$._buffer:null},restore:ke,_initBuffer:Te}}var oy=0,ay=0,iy=1,sy=1,cy=4,ly=4,Ri={points:oy,point:ay,lines:iy,line:sy,triangles:cy,triangle:ly,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},fy=0,hy=1,Ps=4,uy=5120,Ni=5121,Su=5122,Pi=5123,Au=5124,qa=5125,Cl=34963,dy=35040,py=35044;function vy(v,E,C,Y){var ie={},V=0,ee={uint8:Ni,uint16:Pi};E.oes_element_index_uint&&(ee.uint32=qa);function me(ke){this.id=V++,ie[this.id]=this,this.buffer=ke,this.primType=Ps,this.vertCount=0,this.type=0}me.prototype.bind=function(){this.buffer.bind()};var ye=[];function Me(ke){var $=ye.pop();return $||($=new me(C.create(null,Cl,!0,!1)._buffer)),Te($,ke,dy,-1,-1,0,0),$}function be(ke){ye.push(ke)}function Te(ke,$,te,Ee,Fe,fe,De){ke.buffer.bind();var ue;if($){var ze=De;!De&&(!e($)||xo($)&&!e($.data))&&(ze=E.oes_element_index_uint?qa:Pi),C._initBuffer(ke.buffer,$,te,ze,3)}else v.bufferData(Cl,fe,te),ke.buffer.dtype=ue||Ni,ke.buffer.usage=te,ke.buffer.dimension=3,ke.buffer.byteLength=fe;if(ue=De,!De){switch(ke.buffer.dtype){case Ni:case uy:ue=Ni;break;case Pi:case Su:ue=Pi;break;case qa:case Au:ue=qa;break;default:_.raise("unsupported type for element array")}ke.buffer.dtype=ue}ke.type=ue,_(ue!==qa||!!E.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var he=Fe;he<0&&(he=ke.buffer.byteLength,ue===Pi?he>>=1:ue===qa&&(he>>=2)),ke.vertCount=he;var Ce=Ee;if(Ee<0){Ce=Ps;var Qe=ke.buffer.dimension;Qe===1&&(Ce=fy),Qe===2&&(Ce=hy),Qe===3&&(Ce=Ps)}ke.primType=Ce}function Ne(ke){Y.elementsCount--,_(ke.buffer!==null,"must not double destroy elements"),delete ie[ke.id],ke.buffer.destroy(),ke.buffer=null}function ge(ke,$){var te=C.create(null,Cl,!0),Ee=new me(te._buffer);Y.elementsCount++;function Fe(fe){if(!fe)te(),Ee.primType=Ps,Ee.vertCount=0,Ee.type=Ni;else if(typeof fe=="number")te(fe),Ee.primType=Ps,Ee.vertCount=fe|0,Ee.type=Ni;else{var De=null,ue=py,ze=-1,he=-1,Ce=0,Qe=0;Array.isArray(fe)||e(fe)||xo(fe)?De=fe:(_.type(fe,"object","invalid arguments for elements"),"data"in fe&&(De=fe.data,_(Array.isArray(De)||e(De)||xo(De),"invalid data for element buffer")),"usage"in fe&&(_.parameter(fe.usage,D0,"invalid element buffer usage"),ue=D0[fe.usage]),"primitive"in fe&&(_.parameter(fe.primitive,Ri,"invalid element buffer primitive"),ze=Ri[fe.primitive]),"count"in fe&&(_(typeof fe.count=="number"&&fe.count>=0,"invalid vertex count for elements"),he=fe.count|0),"type"in fe&&(_.parameter(fe.type,ee,"invalid buffer type"),Qe=ee[fe.type]),"length"in fe?Ce=fe.length|0:(Ce=he,Qe===Pi||Qe===Su?Ce*=2:(Qe===qa||Qe===Au)&&(Ce*=4))),Te(Ee,De,ue,ze,he,Ce,Qe)}return Fe}return Fe(ke),Fe._reglType="elements",Fe._elements=Ee,Fe.subdata=function(fe,De){return te.subdata(fe,De),Fe},Fe.destroy=function(){Ne(Ee)},Fe}return{create:ge,createStream:Me,destroyStream:be,getElements:function(ke){return typeof ke=="function"&&ke._elements instanceof me?ke._elements:null},clear:function(){jn(ie).forEach(Ne)}}}var Tu=new Float32Array(1),my=new Uint32Array(Tu.buffer),gy=5123;function ku(v){for(var E=rr.allocType(gy,v.length),C=0;C<v.length;++C)if(isNaN(v[C]))E[C]=65535;else if(v[C]===1/0)E[C]=31744;else if(v[C]===-1/0)E[C]=64512;else{Tu[0]=v[C];var Y=my[0],ie=Y>>>31<<15,V=(Y<<1>>>24)-127,ee=Y>>13&1023;if(V<-24)E[C]=ie;else if(V<-14){var me=-14-V;E[C]=ie+(ee+1024>>me)}else V>15?E[C]=ie+31744:E[C]=ie+(V+15<<10)+ee}return E}function Tr(v){return Array.isArray(v)||e(v)}var Lu=function(v){return!(v&v-1)&&!!v},xy=34467,No=3553,Rl=34067,q0=34069,Ha=6408,Nl=6406,H0=6407,Is=6409,B0=6410,zu=32854,Pl=32855,Cu=36194,yy=32819,by=32820,wy=33635,_y=34042,Il=6402,U0=34041,Ol=35904,Gl=35906,Ii=36193,Fl=33776,Dl=33777,$l=33778,ql=33779,Ru=35986,Nu=35987,Pu=34798,Iu=35840,Ou=35841,Gu=35842,Fu=35843,Du=36196,Oi=5121,Hl=5123,Bl=5125,Os=5126,Ey=10242,My=10243,Sy=10497,Ul=33071,Ay=33648,Ty=10240,ky=10241,jl=9728,Ly=9729,Wl=9984,$u=9985,qu=9986,Vl=9987,zy=33170,j0=4352,Cy=4353,Ry=4354,Ny=34046,Py=3317,Iy=37440,Oy=37441,Gy=37443,Hu=37444,Gs=33984,Fy=[Wl,qu,$u,Vl],W0=[0,Is,B0,H0,Ha],to={};to[Is]=to[Nl]=to[Il]=1,to[U0]=to[B0]=2,to[H0]=to[Ol]=3,to[Ha]=to[Gl]=4;function Gi(v){return"[object "+v+"]"}var Bu=Gi("HTMLCanvasElement"),Uu=Gi("OffscreenCanvas"),ju=Gi("CanvasRenderingContext2D"),Wu=Gi("ImageBitmap"),Vu=Gi("HTMLImageElement"),Xu=Gi("HTMLVideoElement"),Dy=Object.keys(Tl).concat([Bu,Uu,ju,Wu,Vu,Xu]),Fi=[];Fi[Oi]=1,Fi[Os]=4,Fi[Ii]=2,Fi[Hl]=2,Fi[Bl]=4;var hn=[];hn[zu]=2,hn[Pl]=2,hn[Cu]=2,hn[U0]=4,hn[Fl]=.5,hn[Dl]=.5,hn[$l]=1,hn[ql]=1,hn[Ru]=.5,hn[Nu]=1,hn[Pu]=1,hn[Iu]=.5,hn[Ou]=.25,hn[Gu]=.5,hn[Fu]=.25,hn[Du]=.5;function Yu(v){return Array.isArray(v)&&(v.length===0||typeof v[0]=="number")}function Ku(v){if(!Array.isArray(v))return!1;var E=v.length;return!(E===0||!Tr(v[0]))}function Ba(v){return Object.prototype.toString.call(v)}function Qu(v){return Ba(v)===Bu}function Zu(v){return Ba(v)===Uu}function $y(v){return Ba(v)===ju}function qy(v){return Ba(v)===Wu}function Hy(v){return Ba(v)===Vu}function By(v){return Ba(v)===Xu}function Xl(v){if(!v)return!1;var E=Ba(v);return Dy.indexOf(E)>=0?!0:Yu(v)||Ku(v)||xo(v)}function Ju(v){return Tl[Object.prototype.toString.call(v)]|0}function Uy(v,E){var C=E.length;switch(v.type){case Oi:case Hl:case Bl:case Os:var Y=rr.allocType(v.type,C);Y.set(E),v.data=Y;break;case Ii:v.data=ku(E);break;default:_.raise("unsupported texture type, must specify a typed array")}}function ed(v,E){return rr.allocType(v.type===Ii?Os:v.type,E)}function td(v,E){v.type===Ii?(v.data=ku(E),rr.freeType(E)):v.data=E}function jy(v,E,C,Y,ie,V){for(var ee=v.width,me=v.height,ye=v.channels,Me=ee*me*ye,be=ed(v,Me),Te=0,Ne=0;Ne<me;++Ne)for(var ge=0;ge<ee;++ge)for(var ke=0;ke<ye;++ke)be[Te++]=E[C*ge+Y*Ne+ie*ke+V];td(v,be)}function V0(v,E,C,Y,ie,V){var ee;if(typeof hn[v]!="undefined"?ee=hn[v]:ee=to[v]*Fi[E],V&&(ee*=6),ie){for(var me=0,ye=C;ye>=1;)me+=ee*ye*ye,ye/=2;return me}else return ee*C*Y}function Wy(v,E,C,Y,ie,V,ee){var me={"don't care":j0,"dont care":j0,nice:Ry,fast:Cy},ye={repeat:Sy,clamp:Ul,mirror:Ay},Me={nearest:jl,linear:Ly},be=t({mipmap:Vl,"nearest mipmap nearest":Wl,"linear mipmap nearest":$u,"nearest mipmap linear":qu,"linear mipmap linear":Vl},Me),Te={none:0,browser:Hu},Ne={uint8:Oi,rgba4:yy,rgb565:wy,"rgb5 a1":by},ge={alpha:Nl,luminance:Is,"luminance alpha":B0,rgb:H0,rgba:Ha,rgba4:zu,"rgb5 a1":Pl,rgb565:Cu},ke={};E.ext_srgb&&(ge.srgb=Ol,ge.srgba=Gl),E.oes_texture_float&&(Ne.float32=Ne.float=Os),E.oes_texture_half_float&&(Ne.float16=Ne["half float"]=Ii),E.webgl_depth_texture&&(t(ge,{depth:Il,"depth stencil":U0}),t(Ne,{uint16:Hl,uint32:Bl,"depth stencil":_y})),E.webgl_compressed_texture_s3tc&&t(ke,{"rgb s3tc dxt1":Fl,"rgba s3tc dxt1":Dl,"rgba s3tc dxt3":$l,"rgba s3tc dxt5":ql}),E.webgl_compressed_texture_atc&&t(ke,{"rgb atc":Ru,"rgba atc explicit alpha":Nu,"rgba atc interpolated alpha":Pu}),E.webgl_compressed_texture_pvrtc&&t(ke,{"rgb pvrtc 4bppv1":Iu,"rgb pvrtc 2bppv1":Ou,"rgba pvrtc 4bppv1":Gu,"rgba pvrtc 2bppv1":Fu}),E.webgl_compressed_texture_etc1&&(ke["rgb etc1"]=Du);var $=Array.prototype.slice.call(v.getParameter(xy));Object.keys(ke).forEach(function(k){var Q=ke[k];$.indexOf(Q)>=0&&(ge[k]=Q)});var te=Object.keys(ge);C.textureFormats=te;var Ee=[];Object.keys(ge).forEach(function(k){var Q=ge[k];Ee[Q]=k});var Fe=[];Object.keys(Ne).forEach(function(k){var Q=Ne[k];Fe[Q]=k});var fe=[];Object.keys(Me).forEach(function(k){var Q=Me[k];fe[Q]=k});var De=[];Object.keys(be).forEach(function(k){var Q=be[k];De[Q]=k});var ue=[];Object.keys(ye).forEach(function(k){var Q=ye[k];ue[Q]=k});var ze=te.reduce(function(k,Q){var W=ge[Q];return W===Is||W===Nl||W===Is||W===B0||W===Il||W===U0||E.ext_srgb&&(W===Ol||W===Gl)?k[W]=W:W===Pl||Q.indexOf("rgba")>=0?k[W]=Ha:k[W]=H0,k},{});function he(){this.internalformat=Ha,this.format=Ha,this.type=Oi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Hu,this.width=0,this.height=0,this.channels=0}function Ce(k,Q){k.internalformat=Q.internalformat,k.format=Q.format,k.type=Q.type,k.compressed=Q.compressed,k.premultiplyAlpha=Q.premultiplyAlpha,k.flipY=Q.flipY,k.unpackAlignment=Q.unpackAlignment,k.colorSpace=Q.colorSpace,k.width=Q.width,k.height=Q.height,k.channels=Q.channels}function Qe(k,Q){if(!(typeof Q!="object"||!Q)){if("premultiplyAlpha"in Q&&(_.type(Q.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),k.premultiplyAlpha=Q.premultiplyAlpha),"flipY"in Q&&(_.type(Q.flipY,"boolean","invalid texture flip"),k.flipY=Q.flipY),"alignment"in Q&&(_.oneOf(Q.alignment,[1,2,4,8],"invalid texture unpack alignment"),k.unpackAlignment=Q.alignment),"colorSpace"in Q&&(_.parameter(Q.colorSpace,Te,"invalid colorSpace"),k.colorSpace=Te[Q.colorSpace]),"type"in Q){var W=Q.type;_(E.oes_texture_float||!(W==="float"||W==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(E.oes_texture_half_float||!(W==="half float"||W==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(E.webgl_depth_texture||!(W==="uint16"||W==="uint32"||W==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(W,Ne,"invalid texture type"),k.type=Ne[W]}var qe=k.width,At=k.height,S=k.channels,b=!1;"shape"in Q?(_(Array.isArray(Q.shape)&&Q.shape.length>=2,"shape must be an array"),qe=Q.shape[0],At=Q.shape[1],Q.shape.length===3&&(S=Q.shape[2],_(S>0&&S<=4,"invalid number of channels"),b=!0),_(qe>=0&&qe<=C.maxTextureSize,"invalid width"),_(At>=0&&At<=C.maxTextureSize,"invalid height")):("radius"in Q&&(qe=At=Q.radius,_(qe>=0&&qe<=C.maxTextureSize,"invalid radius")),"width"in Q&&(qe=Q.width,_(qe>=0&&qe<=C.maxTextureSize,"invalid width")),"height"in Q&&(At=Q.height,_(At>=0&&At<=C.maxTextureSize,"invalid height")),"channels"in Q&&(S=Q.channels,_(S>0&&S<=4,"invalid number of channels"),b=!0)),k.width=qe|0,k.height=At|0,k.channels=S|0;var N=!1;if("format"in Q){var D=Q.format;_(E.webgl_depth_texture||!(D==="depth"||D==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(D,ge,"invalid texture format");var q=k.internalformat=ge[D];k.format=ze[q],D in Ne&&("type"in Q||(k.type=Ne[D])),D in ke&&(k.compressed=!0),N=!0}!b&&N?k.channels=to[k.format]:b&&!N?k.channels!==W0[k.format]&&(k.format=k.internalformat=W0[k.channels]):N&&b&&_(k.channels===to[k.format],"number of channels inconsistent with specified format")}}function ct(k){v.pixelStorei(Iy,k.flipY),v.pixelStorei(Oy,k.premultiplyAlpha),v.pixelStorei(Gy,k.colorSpace),v.pixelStorei(Py,k.unpackAlignment)}function Pe(){he.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Se(k,Q){var W=null;if(Xl(Q)?W=Q:Q&&(_.type(Q,"object","invalid pixel data type"),Qe(k,Q),"x"in Q&&(k.xOffset=Q.x|0),"y"in Q&&(k.yOffset=Q.y|0),Xl(Q.data)&&(W=Q.data)),_(!k.compressed||W instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),Q.copy){_(!W,"can not specify copy and data field for the same texture");var qe=ie.viewportWidth,At=ie.viewportHeight;k.width=k.width||qe-k.xOffset,k.height=k.height||At-k.yOffset,k.needsCopy=!0,_(k.xOffset>=0&&k.xOffset<qe&&k.yOffset>=0&&k.yOffset<At&&k.width>0&&k.width<=qe&&k.height>0&&k.height<=At,"copy texture read out of bounds")}else if(!W)k.width=k.width||1,k.height=k.height||1,k.channels=k.channels||4;else if(e(W))k.channels=k.channels||4,k.data=W,!("type"in Q)&&k.type===Oi&&(k.type=Ju(W));else if(Yu(W))k.channels=k.channels||4,Uy(k,W),k.alignment=1,k.needsFree=!0;else if(xo(W)){var S=W.data;!Array.isArray(S)&&k.type===Oi&&(k.type=Ju(S));var b=W.shape,N=W.stride,D,q,I,P,G,A;b.length===3?(I=b[2],A=N[2]):(_(b.length===2,"invalid ndarray pixel data, must be 2 or 3D"),I=1,A=1),D=b[0],q=b[1],P=N[0],G=N[1],k.alignment=1,k.width=D,k.height=q,k.channels=I,k.format=k.internalformat=W0[I],k.needsFree=!0,jy(k,S,P,G,A,W.offset)}else if(Qu(W)||Zu(W)||$y(W))Qu(W)||Zu(W)?k.element=W:k.element=W.canvas,k.width=k.element.width,k.height=k.element.height,k.channels=4;else if(qy(W))k.element=W,k.width=W.width,k.height=W.height,k.channels=4;else if(Hy(W))k.element=W,k.width=W.naturalWidth,k.height=W.naturalHeight,k.channels=4;else if(By(W))k.element=W,k.width=W.videoWidth,k.height=W.videoHeight,k.channels=4;else if(Ku(W)){var R=k.width||W[0].length,M=k.height||W.length,F=k.channels;Tr(W[0][0])?F=F||W[0][0].length:F=F||1;for(var B=F0.shape(W),oe=1,se=0;se<B.length;++se)oe*=B[se];var re=ed(k,oe);F0.flatten(W,B,"",re),td(k,re),k.alignment=1,k.width=R,k.height=M,k.channels=F,k.format=k.internalformat=W0[F],k.needsFree=!0}k.type===Os?_(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):k.type===Ii&&_(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function le(k,Q,W){var qe=k.element,At=k.data,S=k.internalformat,b=k.format,N=k.type,D=k.width,q=k.height;ct(k),qe?v.texImage2D(Q,W,b,b,N,qe):k.compressed?v.compressedTexImage2D(Q,W,S,D,q,0,At):k.needsCopy?(Y(),v.copyTexImage2D(Q,W,b,k.xOffset,k.yOffset,D,q,0)):v.texImage2D(Q,W,b,D,q,0,b,N,At||null)}function at(k,Q,W,qe,At){var S=k.element,b=k.data,N=k.internalformat,D=k.format,q=k.type,I=k.width,P=k.height;ct(k),S?v.texSubImage2D(Q,At,W,qe,D,q,S):k.compressed?v.compressedTexSubImage2D(Q,At,W,qe,N,I,P,b):k.needsCopy?(Y(),v.copyTexSubImage2D(Q,At,W,qe,k.xOffset,k.yOffset,I,P)):v.texSubImage2D(Q,At,W,qe,I,P,D,q,b)}var gt=[];function Be(){return gt.pop()||new Pe}function St(k){k.needsFree&&rr.freeType(k.data),Pe.call(k),gt.push(k)}function ft(){he.call(this),this.genMipmaps=!1,this.mipmapHint=j0,this.mipmask=0,this.images=Array(16)}function wt(k,Q,W){var qe=k.images[0]=Be();k.mipmask=1,qe.width=k.width=Q,qe.height=k.height=W,qe.channels=k.channels=4}function Wt(k,Q){var W=null;if(Xl(Q))W=k.images[0]=Be(),Ce(W,k),Se(W,Q),k.mipmask=1;else if(Qe(k,Q),Array.isArray(Q.mipmap))for(var qe=Q.mipmap,At=0;At<qe.length;++At)W=k.images[At]=Be(),Ce(W,k),W.width>>=At,W.height>>=At,Se(W,qe[At]),k.mipmask|=1<<At;else W=k.images[0]=Be(),Ce(W,k),Se(W,Q),k.mipmask=1;Ce(k,k.images[0]),k.compressed&&(k.internalformat===Fl||k.internalformat===Dl||k.internalformat===$l||k.internalformat===ql)&&_(k.width%4===0&&k.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Ir(k,Q){for(var W=k.images,qe=0;qe<W.length;++qe){if(!W[qe])return;le(W[qe],Q,qe)}}var Yr=[];function Nt(){var k=Yr.pop()||new ft;he.call(k),k.mipmask=0;for(var Q=0;Q<16;++Q)k.images[Q]=null;return k}function Ur(k){for(var Q=k.images,W=0;W<Q.length;++W)Q[W]&&St(Q[W]),Q[W]=null;Yr.push(k)}function pr(){this.minFilter=jl,this.magFilter=jl,this.wrapS=Ul,this.wrapT=Ul,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=j0}function Or(k,Q){if("min"in Q){var W=Q.min;_.parameter(W,be),k.minFilter=be[W],Fy.indexOf(k.minFilter)>=0&&!("faces"in Q)&&(k.genMipmaps=!0)}if("mag"in Q){var qe=Q.mag;_.parameter(qe,Me),k.magFilter=Me[qe]}var At=k.wrapS,S=k.wrapT;if("wrap"in Q){var b=Q.wrap;typeof b=="string"?(_.parameter(b,ye),At=S=ye[b]):Array.isArray(b)&&(_.parameter(b[0],ye),_.parameter(b[1],ye),At=ye[b[0]],S=ye[b[1]])}else{if("wrapS"in Q){var N=Q.wrapS;_.parameter(N,ye),At=ye[N]}if("wrapT"in Q){var D=Q.wrapT;_.parameter(D,ye),S=ye[D]}}if(k.wrapS=At,k.wrapT=S,"anisotropic"in Q){var q=Q.anisotropic;_(typeof q=="number"&&q>=1&&q<=C.maxAnisotropic,"aniso samples must be between 1 and "),k.anisotropic=Q.anisotropic}if("mipmap"in Q){var I=!1;switch(typeof Q.mipmap){case"string":_.parameter(Q.mipmap,me,"invalid mipmap hint"),k.mipmapHint=me[Q.mipmap],k.genMipmaps=!0,I=!0;break;case"boolean":I=k.genMipmaps=Q.mipmap;break;case"object":_(Array.isArray(Q.mipmap),"invalid mipmap type"),k.genMipmaps=!1,I=!0;break;default:_.raise("invalid mipmap type")}I&&!("min"in Q)&&(k.minFilter=Wl)}}function jr(k,Q){v.texParameteri(Q,ky,k.minFilter),v.texParameteri(Q,Ty,k.magFilter),v.texParameteri(Q,Ey,k.wrapS),v.texParameteri(Q,My,k.wrapT),E.ext_texture_filter_anisotropic&&v.texParameteri(Q,Ny,k.anisotropic),k.genMipmaps&&(v.hint(zy,k.mipmapHint),v.generateMipmap(Q))}var Wr=0,rn={},un=C.maxTextureUnits,kr=Array(un).map(function(){return null});function xt(k){he.call(this),this.mipmask=0,this.internalformat=Ha,this.id=Wr++,this.refCount=1,this.target=k,this.texture=v.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new pr,ee.profile&&(this.stats={size:0})}function dn(k){v.activeTexture(Gs),v.bindTexture(k.target,k.texture)}function Qt(){var k=kr[0];k?v.bindTexture(k.target,k.texture):v.bindTexture(No,null)}function Je(k){var Q=k.texture;_(Q,"must not double destroy texture");var W=k.unit,qe=k.target;W>=0&&(v.activeTexture(Gs+W),v.bindTexture(qe,null),kr[W]=null),v.deleteTexture(Q),k.texture=null,k.params=null,k.pixels=null,k.refCount=0,delete rn[k.id],V.textureCount--}t(xt.prototype,{bind:function(){var k=this;k.bindCount+=1;var Q=k.unit;if(Q<0){for(var W=0;W<un;++W){var qe=kr[W];if(qe){if(qe.bindCount>0)continue;qe.unit=-1}kr[W]=k,Q=W;break}Q>=un&&_.raise("insufficient number of texture units"),ee.profile&&V.maxTextureUnits<Q+1&&(V.maxTextureUnits=Q+1),k.unit=Q,v.activeTexture(Gs+Q),v.bindTexture(k.target,k.texture)}return Q},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Je(this)}});function zt(k,Q){var W=new xt(No);rn[W.id]=W,V.textureCount++;function qe(b,N){var D=W.texInfo;pr.call(D);var q=Nt();return typeof b=="number"?typeof N=="number"?wt(q,b|0,N|0):wt(q,b|0,b|0):b?(_.type(b,"object","invalid arguments to regl.texture"),Or(D,b),Wt(q,b)):wt(q,1,1),D.genMipmaps&&(q.mipmask=(q.width<<1)-1),W.mipmask=q.mipmask,Ce(W,q),_.texture2D(D,q,C),W.internalformat=q.internalformat,qe.width=q.width,qe.height=q.height,dn(W),Ir(q,No),jr(D,No),Qt(),Ur(q),ee.profile&&(W.stats.size=V0(W.internalformat,W.type,q.width,q.height,D.genMipmaps,!1)),qe.format=Ee[W.internalformat],qe.type=Fe[W.type],qe.mag=fe[D.magFilter],qe.min=De[D.minFilter],qe.wrapS=ue[D.wrapS],qe.wrapT=ue[D.wrapT],qe}function At(b,N,D,q){_(!!b,"must specify image data");var I=N|0,P=D|0,G=q|0,A=Be();return Ce(A,W),A.width=0,A.height=0,Se(A,b),A.width=A.width||(W.width>>G)-I,A.height=A.height||(W.height>>G)-P,_(W.type===A.type&&W.format===A.format&&W.internalformat===A.internalformat,"incompatible format for texture.subimage"),_(I>=0&&P>=0&&I+A.width<=W.width&&P+A.height<=W.height,"texture.subimage write out of bounds"),_(W.mipmask&1<<G,"missing mipmap data"),_(A.data||A.element||A.needsCopy,"missing image data"),dn(W),at(A,No,I,P,G),Qt(),St(A),qe}function S(b,N){var D=b|0,q=N|0||D;if(D===W.width&&q===W.height)return qe;qe.width=W.width=D,qe.height=W.height=q,dn(W);for(var I=0;W.mipmask>>I;++I){var P=D>>I,G=q>>I;if(!P||!G)break;v.texImage2D(No,I,W.format,P,G,0,W.format,W.type,null)}return Qt(),ee.profile&&(W.stats.size=V0(W.internalformat,W.type,D,q,!1,!1)),qe}return qe(k,Q),qe.subimage=At,qe.resize=S,qe._reglType="texture2d",qe._texture=W,ee.profile&&(qe.stats=W.stats),qe.destroy=function(){W.decRef()},qe}function $t(k,Q,W,qe,At,S){var b=new xt(Rl);rn[b.id]=b,V.cubeCount++;var N=new Array(6);function D(P,G,A,R,M,F){var B,oe=b.texInfo;for(pr.call(oe),B=0;B<6;++B)N[B]=Nt();if(typeof P=="number"||!P){var se=P|0||1;for(B=0;B<6;++B)wt(N[B],se,se)}else if(typeof P=="object")if(G)Wt(N[0],P),Wt(N[1],G),Wt(N[2],A),Wt(N[3],R),Wt(N[4],M),Wt(N[5],F);else if(Or(oe,P),Qe(b,P),"faces"in P){var re=P.faces;for(_(Array.isArray(re)&&re.length===6,"cube faces must be a length 6 array"),B=0;B<6;++B)_(typeof re[B]=="object"&&!!re[B],"invalid input for cube map face"),Ce(N[B],b),Wt(N[B],re[B])}else for(B=0;B<6;++B)Wt(N[B],P);else _.raise("invalid arguments to cube map");for(Ce(b,N[0]),C.npotTextureCube||_(Lu(b.width)&&Lu(b.height),"your browser does not support non power or two texture dimensions"),oe.genMipmaps?b.mipmask=(N[0].width<<1)-1:b.mipmask=N[0].mipmask,_.textureCube(b,oe,N,C),b.internalformat=N[0].internalformat,D.width=N[0].width,D.height=N[0].height,dn(b),B=0;B<6;++B)Ir(N[B],q0+B);for(jr(oe,Rl),Qt(),ee.profile&&(b.stats.size=V0(b.internalformat,b.type,D.width,D.height,oe.genMipmaps,!0)),D.format=Ee[b.internalformat],D.type=Fe[b.type],D.mag=fe[oe.magFilter],D.min=De[oe.minFilter],D.wrapS=ue[oe.wrapS],D.wrapT=ue[oe.wrapT],B=0;B<6;++B)Ur(N[B]);return D}function q(P,G,A,R,M){_(!!G,"must specify image data"),_(typeof P=="number"&&P===(P|0)&&P>=0&&P<6,"invalid face");var F=A|0,B=R|0,oe=M|0,se=Be();return Ce(se,b),se.width=0,se.height=0,Se(se,G),se.width=se.width||(b.width>>oe)-F,se.height=se.height||(b.height>>oe)-B,_(b.type===se.type&&b.format===se.format&&b.internalformat===se.internalformat,"incompatible format for texture.subimage"),_(F>=0&&B>=0&&F+se.width<=b.width&&B+se.height<=b.height,"texture.subimage write out of bounds"),_(b.mipmask&1<<oe,"missing mipmap data"),_(se.data||se.element||se.needsCopy,"missing image data"),dn(b),at(se,q0+P,F,B,oe),Qt(),St(se),D}function I(P){var G=P|0;if(G!==b.width){D.width=b.width=G,D.height=b.height=G,dn(b);for(var A=0;A<6;++A)for(var R=0;b.mipmask>>R;++R)v.texImage2D(q0+A,R,b.format,G>>R,G>>R,0,b.format,b.type,null);return Qt(),ee.profile&&(b.stats.size=V0(b.internalformat,b.type,D.width,D.height,!1,!0)),D}}return D(k,Q,W,qe,At,S),D.subimage=q,D.resize=I,D._reglType="textureCube",D._texture=b,ee.profile&&(D.stats=b.stats),D.destroy=function(){b.decRef()},D}function Lr(){for(var k=0;k<un;++k)v.activeTexture(Gs+k),v.bindTexture(No,null),kr[k]=null;jn(rn).forEach(Je),V.cubeCount=0,V.textureCount=0}ee.profile&&(V.getTotalTextureSize=function(){var k=0;return Object.keys(rn).forEach(function(Q){k+=rn[Q].stats.size}),k});function Io(){for(var k=0;k<un;++k){var Q=kr[k];Q&&(Q.bindCount=0,Q.unit=-1,kr[k]=null)}jn(rn).forEach(function(W){W.texture=v.createTexture(),v.bindTexture(W.target,W.texture);for(var qe=0;qe<32;++qe)if(W.mipmask&1<<qe)if(W.target===No)v.texImage2D(No,qe,W.internalformat,W.width>>qe,W.height>>qe,0,W.internalformat,W.type,null);else for(var At=0;At<6;++At)v.texImage2D(q0+At,qe,W.internalformat,W.width>>qe,W.height>>qe,0,W.internalformat,W.type,null);jr(W.texInfo,W.target)})}function Ka(){for(var k=0;k<un;++k){var Q=kr[k];Q&&(Q.bindCount=0,Q.unit=-1,kr[k]=null),v.activeTexture(Gs+k),v.bindTexture(No,null),v.bindTexture(Rl,null)}}return{create2D:zt,createCube:$t,clear:Lr,getTexture:function(k){return null},restore:Io,refresh:Ka}}var sa=36161,X0=32854,rd=32855,nd=36194,od=33189,ad=36168,id=34041,sd=35907,cd=34836,ld=34842,fd=34843,yo=[];yo[X0]=2,yo[rd]=2,yo[nd]=2,yo[od]=2,yo[ad]=1,yo[id]=4,yo[sd]=4,yo[cd]=16,yo[ld]=8,yo[fd]=6;function hd(v,E,C){return yo[v]*E*C}var Vy=function(v,E,C,Y,ie){var V={rgba4:X0,rgb565:nd,"rgb5 a1":rd,depth:od,stencil:ad,"depth stencil":id};E.ext_srgb&&(V.srgba=sd),E.ext_color_buffer_half_float&&(V.rgba16f=ld,V.rgb16f=fd),E.webgl_color_buffer_float&&(V.rgba32f=cd);var ee=[];Object.keys(V).forEach(function(ge){var ke=V[ge];ee[ke]=ge});var me=0,ye={};function Me(ge){this.id=me++,this.refCount=1,this.renderbuffer=ge,this.format=X0,this.width=0,this.height=0,ie.profile&&(this.stats={size:0})}Me.prototype.decRef=function(){--this.refCount<=0&&be(this)};function be(ge){var ke=ge.renderbuffer;_(ke,"must not double destroy renderbuffer"),v.bindRenderbuffer(sa,null),v.deleteRenderbuffer(ke),ge.renderbuffer=null,ge.refCount=0,delete ye[ge.id],Y.renderbufferCount--}function Te(ge,ke){var $=new Me(v.createRenderbuffer());ye[$.id]=$,Y.renderbufferCount++;function te(Fe,fe){var De=0,ue=0,ze=X0;if(typeof Fe=="object"&&Fe){var he=Fe;if("shape"in he){var Ce=he.shape;_(Array.isArray(Ce)&&Ce.length>=2,"invalid renderbuffer shape"),De=Ce[0]|0,ue=Ce[1]|0}else"radius"in he&&(De=ue=he.radius|0),"width"in he&&(De=he.width|0),"height"in he&&(ue=he.height|0);"format"in he&&(_.parameter(he.format,V,"invalid renderbuffer format"),ze=V[he.format])}else typeof Fe=="number"?(De=Fe|0,typeof fe=="number"?ue=fe|0:ue=De):Fe?_.raise("invalid arguments to renderbuffer constructor"):De=ue=1;if(_(De>0&&ue>0&&De<=C.maxRenderbufferSize&&ue<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(De===$.width&&ue===$.height&&ze===$.format))return te.width=$.width=De,te.height=$.height=ue,$.format=ze,v.bindRenderbuffer(sa,$.renderbuffer),v.renderbufferStorage(sa,ze,De,ue),_(v.getError()===0,"invalid render buffer format"),ie.profile&&($.stats.size=hd($.format,$.width,$.height)),te.format=ee[$.format],te}function Ee(Fe,fe){var De=Fe|0,ue=fe|0||De;return De===$.width&&ue===$.height||(_(De>0&&ue>0&&De<=C.maxRenderbufferSize&&ue<=C.maxRenderbufferSize,"invalid renderbuffer size"),te.width=$.width=De,te.height=$.height=ue,v.bindRenderbuffer(sa,$.renderbuffer),v.renderbufferStorage(sa,$.format,De,ue),_(v.getError()===0,"invalid render buffer format"),ie.profile&&($.stats.size=hd($.format,$.width,$.height))),te}return te(ge,ke),te.resize=Ee,te._reglType="renderbuffer",te._renderbuffer=$,ie.profile&&(te.stats=$.stats),te.destroy=function(){$.decRef()},te}ie.profile&&(Y.getTotalRenderbufferSize=function(){var ge=0;return Object.keys(ye).forEach(function(ke){ge+=ye[ke].stats.size}),ge});function Ne(){jn(ye).forEach(function(ge){ge.renderbuffer=v.createRenderbuffer(),v.bindRenderbuffer(sa,ge.renderbuffer),v.renderbufferStorage(sa,ge.format,ge.width,ge.height)}),v.bindRenderbuffer(sa,null)}return{create:Te,clear:function(){jn(ye).forEach(be)},restore:Ne}},Uo=36160,Yl=36161,Ua=3553,Y0=34069,ud=36064,dd=36096,pd=36128,vd=33306,md=36053,Xy=36054,Yy=36055,Ky=36057,Qy=36061,Zy=36193,Jy=5121,eb=5126,gd=6407,xd=6408,tb=6402,rb=[gd,xd],Kl=[];Kl[xd]=4,Kl[gd]=3;var K0=[];K0[Jy]=1,K0[eb]=4,K0[Zy]=2;var nb=32854,ob=32855,ab=36194,ib=33189,sb=36168,yd=34041,cb=35907,lb=34836,fb=34842,hb=34843,ub=[nb,ob,ab,cb,fb,hb,lb],Di={};Di[md]="complete",Di[Xy]="incomplete attachment",Di[Ky]="incomplete dimensions",Di[Yy]="incomplete, missing attachment",Di[Qy]="unsupported";function db(v,E,C,Y,ie,V){var ee={cur:null,next:null,dirty:!1,setFBO:null},me=["rgba"],ye=["rgba4","rgb565","rgb5 a1"];E.ext_srgb&&ye.push("srgba"),E.ext_color_buffer_half_float&&ye.push("rgba16f","rgb16f"),E.webgl_color_buffer_float&&ye.push("rgba32f");var Me=["uint8"];E.oes_texture_half_float&&Me.push("half float","float16"),E.oes_texture_float&&Me.push("float","float32");function be(Pe,Se,le){this.target=Pe,this.texture=Se,this.renderbuffer=le;var at=0,gt=0;Se?(at=Se.width,gt=Se.height):le&&(at=le.width,gt=le.height),this.width=at,this.height=gt}function Te(Pe){Pe&&(Pe.texture&&Pe.texture._texture.decRef(),Pe.renderbuffer&&Pe.renderbuffer._renderbuffer.decRef())}function Ne(Pe,Se,le){if(Pe)if(Pe.texture){var at=Pe.texture._texture,gt=Math.max(1,at.width),Be=Math.max(1,at.height);_(gt===Se&&Be===le,"inconsistent width/height for supplied texture"),at.refCount+=1}else{var St=Pe.renderbuffer._renderbuffer;_(St.width===Se&&St.height===le,"inconsistent width/height for renderbuffer"),St.refCount+=1}}function ge(Pe,Se){Se&&(Se.texture?v.framebufferTexture2D(Uo,Pe,Se.target,Se.texture._texture.texture,0):v.framebufferRenderbuffer(Uo,Pe,Yl,Se.renderbuffer._renderbuffer.renderbuffer))}function ke(Pe){var Se=Ua,le=null,at=null,gt=Pe;typeof Pe=="object"&&(gt=Pe.data,"target"in Pe&&(Se=Pe.target|0)),_.type(gt,"function","invalid attachment data");var Be=gt._reglType;return Be==="texture2d"?(le=gt,_(Se===Ua)):Be==="textureCube"?(le=gt,_(Se>=Y0&&Se<Y0+6,"invalid cube map target")):Be==="renderbuffer"?(at=gt,Se=Yl):_.raise("invalid regl object for attachment"),new be(Se,le,at)}function $(Pe,Se,le,at,gt){if(le){var Be=Y.create2D({width:Pe,height:Se,format:at,type:gt});return Be._texture.refCount=0,new be(Ua,Be,null)}else{var St=ie.create({width:Pe,height:Se,format:at});return St._renderbuffer.refCount=0,new be(Yl,null,St)}}function te(Pe){return Pe&&(Pe.texture||Pe.renderbuffer)}function Ee(Pe,Se,le){Pe&&(Pe.texture?Pe.texture.resize(Se,le):Pe.renderbuffer&&Pe.renderbuffer.resize(Se,le),Pe.width=Se,Pe.height=le)}var Fe=0,fe={};function De(){this.id=Fe++,fe[this.id]=this,this.framebuffer=v.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ue(Pe){Pe.colorAttachments.forEach(Te),Te(Pe.depthAttachment),Te(Pe.stencilAttachment),Te(Pe.depthStencilAttachment)}function ze(Pe){var Se=Pe.framebuffer;_(Se,"must not double destroy framebuffer"),v.deleteFramebuffer(Se),Pe.framebuffer=null,V.framebufferCount--,delete fe[Pe.id]}function he(Pe){var Se;v.bindFramebuffer(Uo,Pe.framebuffer);var le=Pe.colorAttachments;for(Se=0;Se<le.length;++Se)ge(ud+Se,le[Se]);for(Se=le.length;Se<C.maxColorAttachments;++Se)v.framebufferTexture2D(Uo,ud+Se,Ua,null,0);v.framebufferTexture2D(Uo,vd,Ua,null,0),v.framebufferTexture2D(Uo,dd,Ua,null,0),v.framebufferTexture2D(Uo,pd,Ua,null,0),ge(dd,Pe.depthAttachment),ge(pd,Pe.stencilAttachment),ge(vd,Pe.depthStencilAttachment);var at=v.checkFramebufferStatus(Uo);!v.isContextLost()&&at!==md&&_.raise("framebuffer configuration not supported, status = "+Di[at]),v.bindFramebuffer(Uo,ee.next?ee.next.framebuffer:null),ee.cur=ee.next,v.getError()}function Ce(Pe,Se){var le=new De;V.framebufferCount++;function at(Be,St){var ft;_(ee.next!==le,"can not update framebuffer which is currently in use");var wt=0,Wt=0,Ir=!0,Yr=!0,Nt=null,Ur=!0,pr="rgba",Or="uint8",jr=1,Wr=null,rn=null,un=null,kr=!1;if(typeof Be=="number")wt=Be|0,Wt=St|0||wt;else if(!Be)wt=Wt=1;else{_.type(Be,"object","invalid arguments for framebuffer");var xt=Be;if("shape"in xt){var dn=xt.shape;_(Array.isArray(dn)&&dn.length>=2,"invalid shape for framebuffer"),wt=dn[0],Wt=dn[1]}else"radius"in xt&&(wt=Wt=xt.radius),"width"in xt&&(wt=xt.width),"height"in xt&&(Wt=xt.height);("color"in xt||"colors"in xt)&&(Nt=xt.color||xt.colors,Array.isArray(Nt)&&_(Nt.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),Nt||("colorCount"in xt&&(jr=xt.colorCount|0,_(jr>0,"invalid color buffer count")),"colorTexture"in xt&&(Ur=!!xt.colorTexture,pr="rgba4"),"colorType"in xt&&(Or=xt.colorType,Ur?(_(E.oes_texture_float||!(Or==="float"||Or==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(E.oes_texture_half_float||!(Or==="half float"||Or==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Or==="half float"||Or==="float16"?(_(E.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),pr="rgba16f"):(Or==="float"||Or==="float32")&&(_(E.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),pr="rgba32f"),_.oneOf(Or,Me,"invalid color type")),"colorFormat"in xt&&(pr=xt.colorFormat,me.indexOf(pr)>=0?Ur=!0:ye.indexOf(pr)>=0?Ur=!1:Ur?_.oneOf(xt.colorFormat,me,"invalid color format for texture"):_.oneOf(xt.colorFormat,ye,"invalid color format for renderbuffer"))),("depthTexture"in xt||"depthStencilTexture"in xt)&&(kr=!!(xt.depthTexture||xt.depthStencilTexture),_(!kr||E.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in xt&&(typeof xt.depth=="boolean"?Ir=xt.depth:(Wr=xt.depth,Yr=!1)),"stencil"in xt&&(typeof xt.stencil=="boolean"?Yr=xt.stencil:(rn=xt.stencil,Ir=!1)),"depthStencil"in xt&&(typeof xt.depthStencil=="boolean"?Ir=Yr=xt.depthStencil:(un=xt.depthStencil,Ir=!1,Yr=!1))}var Qt=null,Je=null,zt=null,$t=null;if(Array.isArray(Nt))Qt=Nt.map(ke);else if(Nt)Qt=[ke(Nt)];else for(Qt=new Array(jr),ft=0;ft<jr;++ft)Qt[ft]=$(wt,Wt,Ur,pr,Or);_(E.webgl_draw_buffers||Qt.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(Qt.length<=C.maxColorAttachments,"too many color attachments, not supported"),wt=wt||Qt[0].width,Wt=Wt||Qt[0].height,Wr?Je=ke(Wr):Ir&&!Yr&&(Je=$(wt,Wt,kr,"depth","uint32")),rn?zt=ke(rn):Yr&&!Ir&&(zt=$(wt,Wt,!1,"stencil","uint8")),un?$t=ke(un):!Wr&&!rn&&Yr&&Ir&&($t=$(wt,Wt,kr,"depth stencil","depth stencil")),_(!!Wr+!!rn+!!un<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var Lr=null;for(ft=0;ft<Qt.length;++ft)if(Ne(Qt[ft],wt,Wt),_(!Qt[ft]||Qt[ft].texture&&rb.indexOf(Qt[ft].texture._texture.format)>=0||Qt[ft].renderbuffer&&ub.indexOf(Qt[ft].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+ft+" is invalid"),Qt[ft]&&Qt[ft].texture){var Io=Kl[Qt[ft].texture._texture.format]*K0[Qt[ft].texture._texture.type];Lr===null?Lr=Io:_(Lr===Io,"all color attachments much have the same number of bits per pixel.")}return Ne(Je,wt,Wt),_(!Je||Je.texture&&Je.texture._texture.format===tb||Je.renderbuffer&&Je.renderbuffer._renderbuffer.format===ib,"invalid depth attachment for framebuffer object"),Ne(zt,wt,Wt),_(!zt||zt.renderbuffer&&zt.renderbuffer._renderbuffer.format===sb,"invalid stencil attachment for framebuffer object"),Ne($t,wt,Wt),_(!$t||$t.texture&&$t.texture._texture.format===yd||$t.renderbuffer&&$t.renderbuffer._renderbuffer.format===yd,"invalid depth-stencil attachment for framebuffer object"),ue(le),le.width=wt,le.height=Wt,le.colorAttachments=Qt,le.depthAttachment=Je,le.stencilAttachment=zt,le.depthStencilAttachment=$t,at.color=Qt.map(te),at.depth=te(Je),at.stencil=te(zt),at.depthStencil=te($t),at.width=le.width,at.height=le.height,he(le),at}function gt(Be,St){_(ee.next!==le,"can not resize a framebuffer which is currently in use");var ft=Math.max(Be|0,1),wt=Math.max(St|0||ft,1);if(ft===le.width&&wt===le.height)return at;for(var Wt=le.colorAttachments,Ir=0;Ir<Wt.length;++Ir)Ee(Wt[Ir],ft,wt);return Ee(le.depthAttachment,ft,wt),Ee(le.stencilAttachment,ft,wt),Ee(le.depthStencilAttachment,ft,wt),le.width=at.width=ft,le.height=at.height=wt,he(le),at}return at(Pe,Se),t(at,{resize:gt,_reglType:"framebuffer",_framebuffer:le,destroy:function(){ze(le),ue(le)},use:function(Be){ee.setFBO({framebuffer:at},Be)}})}function Qe(Pe){var Se=Array(6);function le(gt){var Be;_(Se.indexOf(ee.next)<0,"can not update framebuffer which is currently in use");var St={color:null},ft=0,wt=null,Wt="rgba",Ir="uint8",Yr=1;if(typeof gt=="number")ft=gt|0;else if(!gt)ft=1;else{_.type(gt,"object","invalid arguments for framebuffer");var Nt=gt;if("shape"in Nt){var Ur=Nt.shape;_(Array.isArray(Ur)&&Ur.length>=2,"invalid shape for framebuffer"),_(Ur[0]===Ur[1],"cube framebuffer must be square"),ft=Ur[0]}else"radius"in Nt&&(ft=Nt.radius|0),"width"in Nt?(ft=Nt.width|0,"height"in Nt&&_(Nt.height===ft,"must be square")):"height"in Nt&&(ft=Nt.height|0);("color"in Nt||"colors"in Nt)&&(wt=Nt.color||Nt.colors,Array.isArray(wt)&&_(wt.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),wt||("colorCount"in Nt&&(Yr=Nt.colorCount|0,_(Yr>0,"invalid color buffer count")),"colorType"in Nt&&(_.oneOf(Nt.colorType,Me,"invalid color type"),Ir=Nt.colorType),"colorFormat"in Nt&&(Wt=Nt.colorFormat,_.oneOf(Nt.colorFormat,me,"invalid color format for texture"))),"depth"in Nt&&(St.depth=Nt.depth),"stencil"in Nt&&(St.stencil=Nt.stencil),"depthStencil"in Nt&&(St.depthStencil=Nt.depthStencil)}var pr;if(wt)if(Array.isArray(wt))for(pr=[],Be=0;Be<wt.length;++Be)pr[Be]=wt[Be];else pr=[wt];else{pr=Array(Yr);var Or={radius:ft,format:Wt,type:Ir};for(Be=0;Be<Yr;++Be)pr[Be]=Y.createCube(Or)}for(St.color=Array(pr.length),Be=0;Be<pr.length;++Be){var jr=pr[Be];_(typeof jr=="function"&&jr._reglType==="textureCube","invalid cube map"),ft=ft||jr.width,_(jr.width===ft&&jr.height===ft,"invalid cube map shape"),St.color[Be]={target:Y0,data:pr[Be]}}for(Be=0;Be<6;++Be){for(var Wr=0;Wr<pr.length;++Wr)St.color[Wr].target=Y0+Be;Be>0&&(St.depth=Se[0].depth,St.stencil=Se[0].stencil,St.depthStencil=Se[0].depthStencil),Se[Be]?Se[Be](St):Se[Be]=Ce(St)}return t(le,{width:ft,height:ft,color:pr})}function at(gt){var Be,St=gt|0;if(_(St>0&&St<=C.maxCubeMapSize,"invalid radius for cube fbo"),St===le.width)return le;var ft=le.color;for(Be=0;Be<ft.length;++Be)ft[Be].resize(St);for(Be=0;Be<6;++Be)Se[Be].resize(St);return le.width=le.height=St,le}return le(Pe),t(le,{faces:Se,resize:at,_reglType:"framebufferCube",destroy:function(){Se.forEach(function(gt){gt.destroy()})}})}function ct(){ee.cur=null,ee.next=null,ee.dirty=!0,jn(fe).forEach(function(Pe){Pe.framebuffer=v.createFramebuffer(),he(Pe)})}return t(ee,{getFramebuffer:function(Pe){if(typeof Pe=="function"&&Pe._reglType==="framebuffer"){var Se=Pe._framebuffer;if(Se instanceof De)return Se}return null},create:Ce,createCube:Qe,clear:function(){jn(fe).forEach(ze)},restore:ct})}var pb=5126,bd=34962;function Ql(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=pb,this.offset=0,this.stride=0,this.divisor=0}function vb(v,E,C,Y,ie){for(var V=C.maxAttributes,ee=new Array(V),me=0;me<V;++me)ee[me]=new Ql;var ye=0,Me={},be={Record:Ql,scope:{},state:ee,currentVAO:null,targetVAO:null,restore:Ne()?fe:function(){},createVAO:De,getVAO:ke,destroyBuffer:Te,setVAO:Ne()?$:te,clear:Ne()?Ee:function(){}};function Te(ue){for(var ze=0;ze<ee.length;++ze){var he=ee[ze];he.buffer===ue&&(v.disableVertexAttribArray(ze),he.buffer=null)}}function Ne(){return E.oes_vertex_array_object}function ge(){return E.angle_instanced_arrays}function ke(ue){return typeof ue=="function"&&ue._vao?ue._vao:null}function $(ue){if(ue!==be.currentVAO){var ze=Ne();ue?ze.bindVertexArrayOES(ue.vao):ze.bindVertexArrayOES(null),be.currentVAO=ue}}function te(ue){if(ue!==be.currentVAO){if(ue)ue.bindAttrs();else for(var ze=ge(),he=0;he<ee.length;++he){var Ce=ee[he];Ce.buffer?(v.enableVertexAttribArray(he),v.vertexAttribPointer(he,Ce.size,Ce.type,Ce.normalized,Ce.stride,Ce.offfset),ze&&Ce.divisor&&ze.vertexAttribDivisorANGLE(he,Ce.divisor)):(v.disableVertexAttribArray(he),v.vertexAttrib4f(he,Ce.x,Ce.y,Ce.z,Ce.w))}be.currentVAO=ue}}function Ee(){jn(Me).forEach(function(ue){ue.destroy()})}function Fe(){this.id=++ye,this.attributes=[];var ue=Ne();ue?this.vao=ue.createVertexArrayOES():this.vao=null,Me[this.id]=this,this.buffers=[]}Fe.prototype.bindAttrs=function(){for(var ue=ge(),ze=this.attributes,he=0;he<ze.length;++he){var Ce=ze[he];Ce.buffer?(v.enableVertexAttribArray(he),v.bindBuffer(bd,Ce.buffer.buffer),v.vertexAttribPointer(he,Ce.size,Ce.type,Ce.normalized,Ce.stride,Ce.offset),ue&&Ce.divisor&&ue.vertexAttribDivisorANGLE(he,Ce.divisor)):(v.disableVertexAttribArray(he),v.vertexAttrib4f(he,Ce.x,Ce.y,Ce.z,Ce.w))}for(var Qe=ze.length;Qe<V;++Qe)v.disableVertexAttribArray(Qe)},Fe.prototype.refresh=function(){var ue=Ne();ue&&(ue.bindVertexArrayOES(this.vao),this.bindAttrs(),be.currentVAO=this)},Fe.prototype.destroy=function(){if(this.vao){var ue=Ne();this===be.currentVAO&&(be.currentVAO=null,ue.bindVertexArrayOES(null)),ue.deleteVertexArrayOES(this.vao),this.vao=null}Me[this.id]&&(delete Me[this.id],Y.vaoCount-=1)};function fe(){var ue=Ne();ue&&jn(Me).forEach(function(ze){ze.refresh()})}function De(ue){var ze=new Fe;Y.vaoCount+=1;function he(Ce){_(Array.isArray(Ce),"arguments to vertex array constructor must be an array"),_(Ce.length<V,"too many attributes"),_(Ce.length>0,"must specify at least one attribute");var Qe={},ct=ze.attributes;ct.length=Ce.length;for(var Pe=0;Pe<Ce.length;++Pe){var Se=Ce[Pe],le=ct[Pe]=new Ql,at=Se.data||Se;if(Array.isArray(at)||e(at)||xo(at)){var gt;ze.buffers[Pe]&&(gt=ze.buffers[Pe],e(at)&&gt._buffer.byteLength>=at.byteLength?gt.subdata(at):(gt.destroy(),ze.buffers[Pe]=null)),ze.buffers[Pe]||(gt=ze.buffers[Pe]=ie.create(Se,bd,!1,!0)),le.buffer=ie.getBuffer(gt),le.size=le.buffer.dimension|0,le.normalized=!1,le.type=le.buffer.dtype,le.offset=0,le.stride=0,le.divisor=0,le.state=1,Qe[Pe]=1}else ie.getBuffer(Se)?(le.buffer=ie.getBuffer(Se),le.size=le.buffer.dimension|0,le.normalized=!1,le.type=le.buffer.dtype,le.offset=0,le.stride=0,le.divisor=0,le.state=1):ie.getBuffer(Se.buffer)?(le.buffer=ie.getBuffer(Se.buffer),le.size=(+Se.size||le.buffer.dimension)|0,le.normalized=!!Se.normalized||!1,"type"in Se?(_.parameter(Se.type,$a,"invalid buffer type"),le.type=$a[Se.type]):le.type=le.buffer.dtype,le.offset=(Se.offset||0)|0,le.stride=(Se.stride||0)|0,le.divisor=(Se.divisor||0)|0,le.state=1,_(le.size>=1&&le.size<=4,"size must be between 1 and 4"),_(le.offset>=0,"invalid offset"),_(le.stride>=0&&le.stride<=255,"stride must be between 0 and 255"),_(le.divisor>=0,"divisor must be positive"),_(!le.divisor||!!E.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Se?(_(Pe>0,"first attribute must not be a constant"),le.x=+Se.x||0,le.y=+Se.y||0,le.z=+Se.z||0,le.w=+Se.w||0,le.state=2):_(!1,"invalid attribute spec for location "+Pe)}for(var Be=0;Be<ze.buffers.length;++Be)!Qe[Be]&&ze.buffers[Be]&&(ze.buffers[Be].destroy(),ze.buffers[Be]=null);return ze.refresh(),he}return he.destroy=function(){for(var Ce=0;Ce<ze.buffers.length;++Ce)ze.buffers[Ce]&&ze.buffers[Ce].destroy();ze.buffers.length=0,ze.destroy()},he._vao=ze,he._reglType="vao",he(ue)}return be}var wd=35632,mb=35633,gb=35718,xb=35721;function yb(v,E,C,Y){var ie={},V={};function ee($,te,Ee,Fe){this.name=$,this.id=te,this.location=Ee,this.info=Fe}function me($,te){for(var Ee=0;Ee<$.length;++Ee)if($[Ee].id===te.id){$[Ee].location=te.location;return}$.push(te)}function ye($,te,Ee){var Fe=$===wd?ie:V,fe=Fe[te];if(!fe){var De=E.str(te);fe=v.createShader($),v.shaderSource(fe,De),v.compileShader(fe),_.shaderError(v,fe,De,$,Ee),Fe[te]=fe}return fe}var Me={},be=[],Te=0;function Ne($,te){this.id=Te++,this.fragId=$,this.vertId=te,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,Y.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function ge($,te,Ee){var Fe,fe,De=ye(wd,$.fragId),ue=ye(mb,$.vertId),ze=$.program=v.createProgram();if(v.attachShader(ze,De),v.attachShader(ze,ue),Ee)for(Fe=0;Fe<Ee.length;++Fe){var he=Ee[Fe];v.bindAttribLocation(ze,he[0],he[1])}v.linkProgram(ze),_.linkError(v,ze,E.str($.fragId),E.str($.vertId),te);var Ce=v.getProgramParameter(ze,gb);Y.profile&&($.stats.uniformsCount=Ce);var Qe=$.uniforms;for(Fe=0;Fe<Ce;++Fe)if(fe=v.getActiveUniform(ze,Fe),fe)if(fe.size>1)for(var ct=0;ct<fe.size;++ct){var Pe=fe.name.replace("[0]","["+ct+"]");me(Qe,new ee(Pe,E.id(Pe),v.getUniformLocation(ze,Pe),fe))}else me(Qe,new ee(fe.name,E.id(fe.name),v.getUniformLocation(ze,fe.name),fe));var Se=v.getProgramParameter(ze,xb);Y.profile&&($.stats.attributesCount=Se);var le=$.attributes;for(Fe=0;Fe<Se;++Fe)fe=v.getActiveAttrib(ze,Fe),fe&&me(le,new ee(fe.name,E.id(fe.name),v.getAttribLocation(ze,fe.name),fe))}Y.profile&&(C.getMaxUniformsCount=function(){var $=0;return be.forEach(function(te){te.stats.uniformsCount>$&&($=te.stats.uniformsCount)}),$},C.getMaxAttributesCount=function(){var $=0;return be.forEach(function(te){te.stats.attributesCount>$&&($=te.stats.attributesCount)}),$});function ke(){ie={},V={};for(var $=0;$<be.length;++$)ge(be[$],null,be[$].attributes.map(function(te){return[te.location,te.name]}))}return{clear:function(){var $=v.deleteShader.bind(v);jn(ie).forEach($),ie={},jn(V).forEach($),V={},be.forEach(function(te){v.deleteProgram(te.program)}),be.length=0,Me={},C.shaderCount=0},program:function($,te,Ee,Fe){_.command($>=0,"missing vertex shader",Ee),_.command(te>=0,"missing fragment shader",Ee);var fe=Me[te];fe||(fe=Me[te]={});var De=fe[$];if(De&&(De.refCount++,!Fe))return De;var ue=new Ne(te,$);return C.shaderCount++,ge(ue,Ee,Fe),De||(fe[$]=ue),be.push(ue),t(ue,{destroy:function(){if(ue.refCount--,ue.refCount<=0){v.deleteProgram(ue.program);var ze=be.indexOf(ue);be.splice(ze,1),C.shaderCount--}fe[ue.vertId].refCount<=0&&(v.deleteShader(V[ue.vertId]),delete V[ue.vertId],delete Me[ue.fragId][ue.vertId]),Object.keys(Me[ue.fragId]).length||(v.deleteShader(ie[ue.fragId]),delete ie[ue.fragId],delete Me[ue.fragId])}})},restore:ke,shader:ye,frag:-1,vert:-1}}var bb=6408,Fs=5121,wb=3333,Q0=5126;function _b(v,E,C,Y,ie,V,ee){function me(be){var Te;E.next===null?(_(ie.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Te=Fs):(_(E.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Te=E.next.colorAttachments[0].texture._texture.type,V.oes_texture_float?(_(Te===Fs||Te===Q0,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Te===Q0&&_(ee.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(Te===Fs,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Ne=0,ge=0,ke=Y.framebufferWidth,$=Y.framebufferHeight,te=null;e(be)?te=be:be&&(_.type(be,"object","invalid arguments to regl.read()"),Ne=be.x|0,ge=be.y|0,_(Ne>=0&&Ne<Y.framebufferWidth,"invalid x offset for regl.read"),_(ge>=0&&ge<Y.framebufferHeight,"invalid y offset for regl.read"),ke=(be.width||Y.framebufferWidth-Ne)|0,$=(be.height||Y.framebufferHeight-ge)|0,te=be.data||null),te&&(Te===Fs?_(te instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Te===Q0&&_(te instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(ke>0&&ke+Ne<=Y.framebufferWidth,"invalid width for read pixels"),_($>0&&$+ge<=Y.framebufferHeight,"invalid height for read pixels"),C();var Ee=ke*$*4;return te||(Te===Fs?te=new Uint8Array(Ee):Te===Q0&&(te=te||new Float32Array(Ee))),_.isTypedArray(te,"data buffer for regl.read() must be a typedarray"),_(te.byteLength>=Ee,"data buffer for regl.read() too small"),v.pixelStorei(wb,4),v.readPixels(Ne,ge,ke,$,bb,Te,te),te}function ye(be){var Te;return E.setFBO({framebuffer:be.framebuffer},function(){Te=me(be)}),Te}function Me(be){return!be||!("framebuffer"in be)?me(be):ye(be)}return Me}function $i(v){return Array.prototype.slice.call(v)}function qi(v){return $i(v).join("")}function Eb(){var v=0,E=[],C=[];function Y(Te){for(var Ne=0;Ne<C.length;++Ne)if(C[Ne]===Te)return E[Ne];var ge="g"+v++;return E.push(ge),C.push(Te),ge}function ie(){var Te=[];function Ne(){Te.push.apply(Te,$i(arguments))}var ge=[];function ke(){var $="v"+v++;return ge.push($),arguments.length>0&&(Te.push($,"="),Te.push.apply(Te,$i(arguments)),Te.push(";")),$}return t(Ne,{def:ke,toString:function(){return qi([ge.length>0?"var "+ge.join(",")+";":"",qi(Te)])}})}function V(){var Te=ie(),Ne=ie(),ge=Te.toString,ke=Ne.toString;function $(te,Ee){Ne(te,Ee,"=",Te.def(te,Ee),";")}return t(function(){Te.apply(Te,$i(arguments))},{def:Te.def,entry:Te,exit:Ne,save:$,set:function(te,Ee,Fe){$(te,Ee),Te(te,Ee,"=",Fe,";")},toString:function(){return ge()+ke()}})}function ee(){var Te=qi(arguments),Ne=V(),ge=V(),ke=Ne.toString,$=ge.toString;return t(Ne,{then:function(){return Ne.apply(Ne,$i(arguments)),this},else:function(){return ge.apply(ge,$i(arguments)),this},toString:function(){var te=$();return te&&(te="else{"+te+"}"),qi(["if(",Te,"){",ke(),"}",te])}})}var me=ie(),ye={};function Me(Te,Ne){var ge=[];function ke(){var fe="a"+ge.length;return ge.push(fe),fe}Ne=Ne||0;for(var $=0;$<Ne;++$)ke();var te=V(),Ee=te.toString,Fe=ye[Te]=t(te,{arg:ke,toString:function(){return qi(["function(",ge.join(),"){",Ee(),"}"])}});return Fe}function be(){var Te=['"use strict";',me,"return {"];Object.keys(ye).forEach(function(ke){Te.push('"',ke,'":',ye[ke].toString(),",")}),Te.push("}");var Ne=qi(Te).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),ge=Function.apply(null,E.concat(Ne));return ge.apply(null,C)}return{global:me,link:Y,block:ie,proc:Me,scope:V,cond:ee,compile:be}}var Hi="xyzw".split(""),_d=5121,Bi=1,Zl=2,Jl=0,ef=1,tf=2,rf=3,Z0=4,Ed=5,Md=6,Sd="dither",Ad="blend.enable",Td="blend.color",nf="blend.equation",of="blend.func",kd="depth.enable",Ld="depth.func",zd="depth.range",Cd="depth.mask",af="colorMask",Rd="cull.enable",Nd="cull.face",sf="frontFace",cf="lineWidth",Pd="polygonOffset.enable",lf="polygonOffset.offset",Id="sample.alpha",Od="sample.enable",ff="sample.coverage",Gd="stencil.enable",Fd="stencil.mask",hf="stencil.func",uf="stencil.opFront",Ds="stencil.opBack",Dd="scissor.enable",J0="scissor.box",jo="viewport",$s="profile",ja="framebuffer",qs="vert",Hs="frag",Wa="elements",Va="primitive",Xa="count",ec="offset",tc="instances",Bs="vao",df="Width",pf="Height",Ui=ja+df,ji=ja+pf,Mb=jo+df,Sb=jo+pf,$d="drawingBuffer",qd=$d+df,Hd=$d+pf,Ab=[of,nf,hf,uf,Ds,ff,jo,J0,lf],Wi=34962,Tb=34963,kb=35632,Lb=35633,Bd=3553,zb=34067,Cb=2884,Rb=3042,Nb=3024,Pb=2960,Ib=2929,Ob=3089,Gb=32823,Fb=32926,Db=32928,vf=5126,rc=35664,nc=35665,oc=35666,mf=5124,ac=35667,ic=35668,sc=35669,gf=35670,cc=35671,lc=35672,fc=35673,Us=35674,js=35675,Ws=35676,Vs=35678,Xs=35680,Ud=4,Ys=1028,Ya=1029,jd=2304,xf=2305,$b=32775,qb=32776,Hb=519,ca=7680,Wd=0,Vd=1,Xd=32774,Bb=513,Yd=36160,Ub=36064,Po={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Kd=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Vi={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},la={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Qd={frag:kb,vert:Lb},yf={cw:jd,ccw:xf};function hc(v){return Array.isArray(v)||e(v)||xo(v)}function Zd(v){return v.sort(function(E,C){return E===jo?-1:C===jo?1:E<C?-1:1})}function Tn(v,E,C,Y){this.thisDep=v,this.contextDep=E,this.propDep=C,this.append=Y}function fa(v){return v&&!(v.thisDep||v.contextDep||v.propDep)}function Pr(v){return new Tn(!1,!1,!1,v)}function Dn(v,E){var C=v.type;if(C===Jl){var Y=v.data.length;return new Tn(!0,Y>=1,Y>=2,E)}else if(C===Z0){var ie=v.data;return new Tn(ie.thisDep,ie.contextDep,ie.propDep,E)}else{if(C===Ed)return new Tn(!1,!1,!1,E);if(C===Md){for(var V=!1,ee=!1,me=!1,ye=0;ye<v.data.length;++ye){var Me=v.data[ye];if(Me.type===ef)me=!0;else if(Me.type===tf)ee=!0;else if(Me.type===rf)V=!0;else if(Me.type===Jl){V=!0;var be=Me.data;be>=1&&(ee=!0),be>=2&&(me=!0)}else Me.type===Z0&&(V=V||Me.data.thisDep,ee=ee||Me.data.contextDep,me=me||Me.data.propDep)}return new Tn(V,ee,me,E)}else return new Tn(C===rf,C===tf,C===ef,E)}}var Jd=new Tn(!1,!1,!1,function(){});function jb(v,E,C,Y,ie,V,ee,me,ye,Me,be,Te,Ne,ge,ke){var $=Me.Record,te={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(te.min=$b,te.max=qb);var Ee=C.angle_instanced_arrays,Fe=C.webgl_draw_buffers,fe={dirty:!0,profile:ke.profile},De={},ue=[],ze={},he={};function Ce(S){return S.replace(".","_")}function Qe(S,b,N){var D=Ce(S);ue.push(S),De[D]=fe[D]=!!N,ze[D]=b}function ct(S,b,N){var D=Ce(S);ue.push(S),Array.isArray(N)?(fe[D]=N.slice(),De[D]=N.slice()):fe[D]=De[D]=N,he[D]=b}Qe(Sd,Nb),Qe(Ad,Rb),ct(Td,"blendColor",[0,0,0,0]),ct(nf,"blendEquationSeparate",[Xd,Xd]),ct(of,"blendFuncSeparate",[Vd,Wd,Vd,Wd]),Qe(kd,Ib,!0),ct(Ld,"depthFunc",Bb),ct(zd,"depthRange",[0,1]),ct(Cd,"depthMask",!0),ct(af,af,[!0,!0,!0,!0]),Qe(Rd,Cb),ct(Nd,"cullFace",Ya),ct(sf,sf,xf),ct(cf,cf,1),Qe(Pd,Gb),ct(lf,"polygonOffset",[0,0]),Qe(Id,Fb),Qe(Od,Db),ct(ff,"sampleCoverage",[1,!1]),Qe(Gd,Pb),ct(Fd,"stencilMask",-1),ct(hf,"stencilFunc",[Hb,0,-1]),ct(uf,"stencilOpSeparate",[Ys,ca,ca,ca]),ct(Ds,"stencilOpSeparate",[Ya,ca,ca,ca]),Qe(Dd,Ob),ct(J0,"scissor",[0,0,v.drawingBufferWidth,v.drawingBufferHeight]),ct(jo,jo,[0,0,v.drawingBufferWidth,v.drawingBufferHeight]);var Pe={gl:v,context:Ne,strings:E,next:De,current:fe,draw:Te,elements:V,buffer:ie,shader:be,attributes:Me.state,vao:Me,uniforms:ye,framebuffer:me,extensions:C,timer:ge,isBufferArgs:hc},Se={primTypes:Ri,compareFuncs:Vi,blendFuncs:Po,blendEquations:te,stencilOps:la,glTypes:$a,orientationType:yf};_.optional(function(){Pe.isArrayLike=Tr}),Fe&&(Se.backBuffer=[Ya],Se.drawBuffer=gn(Y.maxDrawbuffers,function(S){return S===0?[0]:gn(S,function(b){return Ub+b})}));var le=0;function at(){var S=Eb(),b=S.link,N=S.global;S.id=le++,S.batchId="0";var D=b(Pe),q=S.shared={props:"a0"};Object.keys(Pe).forEach(function(R){q[R]=N.def(D,".",R)}),_.optional(function(){S.CHECK=b(_),S.commandStr=_.guessCommand(),S.command=b(S.commandStr),S.assert=function(R,M,F){R("if(!(",M,"))",this.CHECK,".commandRaise(",b(F),",",this.command,");")},Se.invalidBlendCombinations=Kd});var I=S.next={},P=S.current={};Object.keys(he).forEach(function(R){Array.isArray(fe[R])&&(I[R]=N.def(q.next,".",R),P[R]=N.def(q.current,".",R))});var G=S.constants={};Object.keys(Se).forEach(function(R){G[R]=N.def(JSON.stringify(Se[R]))}),S.invoke=function(R,M){switch(M.type){case Jl:var F=["this",q.context,q.props,S.batchId];return R.def(b(M.data),".call(",F.slice(0,Math.max(M.data.length+1,4)),")");case ef:return R.def(q.props,M.data);case tf:return R.def(q.context,M.data);case rf:return R.def("this",M.data);case Z0:return M.data.append(S,R),M.data.ref;case Ed:return M.data.toString();case Md:return M.data.map(function(B){return S.invoke(R,B)})}},S.attribCache={};var A={};return S.scopeAttrib=function(R){var M=E.id(R);if(M in A)return A[M];var F=Me.scope[M];F||(F=Me.scope[M]=new $);var B=A[M]=b(F);return B},S}function gt(S){var b=S.static,N=S.dynamic,D;if($s in b){var q=!!b[$s];D=Pr(function(P,G){return q}),D.enable=q}else if($s in N){var I=N[$s];D=Dn(I,function(P,G){return P.invoke(G,I)})}return D}function Be(S,b){var N=S.static,D=S.dynamic;if(ja in N){var q=N[ja];return q?(q=me.getFramebuffer(q),_.command(q,"invalid framebuffer object"),Pr(function(P,G){var A=P.link(q),R=P.shared;G.set(R.framebuffer,".next",A);var M=R.context;return G.set(M,"."+Ui,A+".width"),G.set(M,"."+ji,A+".height"),A})):Pr(function(P,G){var A=P.shared;G.set(A.framebuffer,".next","null");var R=A.context;return G.set(R,"."+Ui,R+"."+qd),G.set(R,"."+ji,R+"."+Hd),"null"})}else if(ja in D){var I=D[ja];return Dn(I,function(P,G){var A=P.invoke(G,I),R=P.shared,M=R.framebuffer,F=G.def(M,".getFramebuffer(",A,")");_.optional(function(){P.assert(G,"!"+A+"||"+F,"invalid framebuffer object")}),G.set(M,".next",F);var B=R.context;return G.set(B,"."+Ui,F+"?"+F+".width:"+B+"."+qd),G.set(B,"."+ji,F+"?"+F+".height:"+B+"."+Hd),F})}else return null}function St(S,b,N){var D=S.static,q=S.dynamic;function I(A){if(A in D){var R=D[A];_.commandType(R,"object","invalid "+A,N.commandStr);var M=!0,F=R.x|0,B=R.y|0,oe,se;return"width"in R?(oe=R.width|0,_.command(oe>=0,"invalid "+A,N.commandStr)):M=!1,"height"in R?(se=R.height|0,_.command(se>=0,"invalid "+A,N.commandStr)):M=!1,new Tn(!M&&b&&b.thisDep,!M&&b&&b.contextDep,!M&&b&&b.propDep,function(Xe,yt){var Ue=Xe.shared.context,tt=oe;"width"in R||(tt=yt.def(Ue,".",Ui,"-",F));var ut=se;return"height"in R||(ut=yt.def(Ue,".",ji,"-",B)),[F,B,tt,ut]})}else if(A in q){var re=q[A],we=Dn(re,function(Xe,yt){var Ue=Xe.invoke(yt,re);_.optional(function(){Xe.assert(yt,Ue+"&&typeof "+Ue+'==="object"',"invalid "+A)});var tt=Xe.shared.context,ut=yt.def(Ue,".x|0"),Vt=yt.def(Ue,".y|0"),Mr=yt.def('"width" in ',Ue,"?",Ue,".width|0:","(",tt,".",Ui,"-",ut,")"),kn=yt.def('"height" in ',Ue,"?",Ue,".height|0:","(",tt,".",ji,"-",Vt,")");return _.optional(function(){Xe.assert(yt,Mr+">=0&&"+kn+">=0","invalid "+A)}),[ut,Vt,Mr,kn]});return b&&(we.thisDep=we.thisDep||b.thisDep,we.contextDep=we.contextDep||b.contextDep,we.propDep=we.propDep||b.propDep),we}else return b?new Tn(b.thisDep,b.contextDep,b.propDep,function(Xe,yt){var Ue=Xe.shared.context;return[0,0,yt.def(Ue,".",Ui),yt.def(Ue,".",ji)]}):null}var P=I(jo);if(P){var G=P;P=new Tn(P.thisDep,P.contextDep,P.propDep,function(A,R){var M=G.append(A,R),F=A.shared.context;return R.set(F,"."+Mb,M[2]),R.set(F,"."+Sb,M[3]),M})}return{viewport:P,scissor_box:I(J0)}}function ft(S,b){var N=S.static,D=typeof N[Hs]=="string"&&typeof N[qs]=="string";if(D){if(Object.keys(b.dynamic).length>0)return null;var q=b.static,I=Object.keys(q);if(I.length>0&&typeof q[I[0]]=="number"){for(var P=[],G=0;G<I.length;++G)_(typeof q[I[G]]=="number","must specify all vertex attribute locations when using vaos"),P.push([q[I[G]]|0,I[G]]);return P}}return null}function wt(S,b,N){var D=S.static,q=S.dynamic;function I(M){if(M in D){var F=E.id(D[M]);_.optional(function(){be.shader(Qd[M],F,_.guessCommand())});var B=Pr(function(){return F});return B.id=F,B}else if(M in q){var oe=q[M];return Dn(oe,function(se,re){var we=se.invoke(re,oe),Xe=re.def(se.shared.strings,".id(",we,")");return _.optional(function(){re(se.shared.shader,".shader(",Qd[M],",",Xe,",",se.command,");")}),Xe})}return null}var P=I(Hs),G=I(qs),A=null,R;return fa(P)&&fa(G)?(A=be.program(G.id,P.id,null,N),R=Pr(function(M,F){return M.link(A)})):R=new Tn(P&&P.thisDep||G&&G.thisDep,P&&P.contextDep||G&&G.contextDep,P&&P.propDep||G&&G.propDep,function(M,F){var B=M.shared.shader,oe;P?oe=P.append(M,F):oe=F.def(B,".",Hs);var se;G?se=G.append(M,F):se=F.def(B,".",qs);var re=B+".program("+se+","+oe;return _.optional(function(){re+=","+M.command}),F.def(re+")")}),{frag:P,vert:G,progVar:R,program:A}}function Wt(S,b){var N=S.static,D=S.dynamic;function q(){if(Wa in N){var M=N[Wa];hc(M)?M=V.getElements(V.create(M,!0)):M&&(M=V.getElements(M),_.command(M,"invalid elements",b.commandStr));var F=Pr(function(oe,se){if(M){var re=oe.link(M);return oe.ELEMENTS=re,re}return oe.ELEMENTS=null,null});return F.value=M,F}else if(Wa in D){var B=D[Wa];return Dn(B,function(oe,se){var re=oe.shared,we=re.isBufferArgs,Xe=re.elements,yt=oe.invoke(se,B),Ue=se.def("null"),tt=se.def(we,"(",yt,")"),ut=oe.cond(tt).then(Ue,"=",Xe,".createStream(",yt,");").else(Ue,"=",Xe,".getElements(",yt,");");return _.optional(function(){oe.assert(ut.else,"!"+yt+"||"+Ue,"invalid elements")}),se.entry(ut),se.exit(oe.cond(tt).then(Xe,".destroyStream(",Ue,");")),oe.ELEMENTS=Ue,Ue})}return null}var I=q();function P(){if(Va in N){var M=N[Va];return _.commandParameter(M,Ri,"invalid primitve",b.commandStr),Pr(function(B,oe){return Ri[M]})}else if(Va in D){var F=D[Va];return Dn(F,function(B,oe){var se=B.constants.primTypes,re=B.invoke(oe,F);return _.optional(function(){B.assert(oe,re+" in "+se,"invalid primitive, must be one of "+Object.keys(Ri))}),oe.def(se,"[",re,"]")})}else if(I)return fa(I)?I.value?Pr(function(B,oe){return oe.def(B.ELEMENTS,".primType")}):Pr(function(){return Ud}):new Tn(I.thisDep,I.contextDep,I.propDep,function(B,oe){var se=B.ELEMENTS;return oe.def(se,"?",se,".primType:",Ud)});return null}function G(M,F){if(M in N){var B=N[M]|0;return _.command(!F||B>=0,"invalid "+M,b.commandStr),Pr(function(se,re){return F&&(se.OFFSET=B),B})}else if(M in D){var oe=D[M];return Dn(oe,function(se,re){var we=se.invoke(re,oe);return F&&(se.OFFSET=we,_.optional(function(){se.assert(re,we+">=0","invalid "+M)})),we})}else if(F&&I)return Pr(function(se,re){return se.OFFSET="0",0});return null}var A=G(ec,!0);function R(){if(Xa in N){var M=N[Xa]|0;return _.command(typeof M=="number"&&M>=0,"invalid vertex count",b.commandStr),Pr(function(){return M})}else if(Xa in D){var F=D[Xa];return Dn(F,function(se,re){var we=se.invoke(re,F);return _.optional(function(){se.assert(re,"typeof "+we+'==="number"&&'+we+">=0&&"+we+"===("+we+"|0)","invalid vertex count")}),we})}else if(I)if(fa(I)){if(I)return A?new Tn(A.thisDep,A.contextDep,A.propDep,function(se,re){var we=re.def(se.ELEMENTS,".vertCount-",se.OFFSET);return _.optional(function(){se.assert(re,we+">=0","invalid vertex offset/element buffer too small")}),we}):Pr(function(se,re){return re.def(se.ELEMENTS,".vertCount")});var B=Pr(function(){return-1});return _.optional(function(){B.MISSING=!0}),B}else{var oe=new Tn(I.thisDep||A.thisDep,I.contextDep||A.contextDep,I.propDep||A.propDep,function(se,re){var we=se.ELEMENTS;return se.OFFSET?re.def(we,"?",we,".vertCount-",se.OFFSET,":-1"):re.def(we,"?",we,".vertCount:-1")});return _.optional(function(){oe.DYNAMIC=!0}),oe}return null}return{elements:I,primitive:P(),count:R(),instances:G(tc,!1),offset:A}}function Ir(S,b){var N=S.static,D=S.dynamic,q={};return ue.forEach(function(I){var P=Ce(I);function G(A,R){if(I in N){var M=A(N[I]);q[P]=Pr(function(){return M})}else if(I in D){var F=D[I];q[P]=Dn(F,function(B,oe){return R(B,oe,B.invoke(oe,F))})}}switch(I){case Rd:case Ad:case Sd:case Gd:case kd:case Dd:case Pd:case Id:case Od:case Cd:return G(function(A){return _.commandType(A,"boolean",I,b.commandStr),A},function(A,R,M){return _.optional(function(){A.assert(R,"typeof "+M+'==="boolean"',"invalid flag "+I,A.commandStr)}),M});case Ld:return G(function(A){return _.commandParameter(A,Vi,"invalid "+I,b.commandStr),Vi[A]},function(A,R,M){var F=A.constants.compareFuncs;return _.optional(function(){A.assert(R,M+" in "+F,"invalid "+I+", must be one of "+Object.keys(Vi))}),R.def(F,"[",M,"]")});case zd:return G(function(A){return _.command(Tr(A)&&A.length===2&&typeof A[0]=="number"&&typeof A[1]=="number"&&A[0]<=A[1],"depth range is 2d array",b.commandStr),A},function(A,R,M){_.optional(function(){A.assert(R,A.shared.isArrayLike+"("+M+")&&"+M+".length===2&&typeof "+M+'[0]==="number"&&typeof '+M+'[1]==="number"&&'+M+"[0]<="+M+"[1]","depth range must be a 2d array")});var F=R.def("+",M,"[0]"),B=R.def("+",M,"[1]");return[F,B]});case of:return G(function(A){_.commandType(A,"object","blend.func",b.commandStr);var R="srcRGB"in A?A.srcRGB:A.src,M="srcAlpha"in A?A.srcAlpha:A.src,F="dstRGB"in A?A.dstRGB:A.dst,B="dstAlpha"in A?A.dstAlpha:A.dst;return _.commandParameter(R,Po,P+".srcRGB",b.commandStr),_.commandParameter(M,Po,P+".srcAlpha",b.commandStr),_.commandParameter(F,Po,P+".dstRGB",b.commandStr),_.commandParameter(B,Po,P+".dstAlpha",b.commandStr),_.command(Kd.indexOf(R+", "+F)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+R+", "+F+")",b.commandStr),[Po[R],Po[F],Po[M],Po[B]]},function(A,R,M){var F=A.constants.blendFuncs;_.optional(function(){A.assert(R,M+"&&typeof "+M+'==="object"',"invalid blend func, must be an object")});function B(Ue,tt){var ut=R.def('"',Ue,tt,'" in ',M,"?",M,".",Ue,tt,":",M,".",Ue);return _.optional(function(){A.assert(R,ut+" in "+F,"invalid "+I+"."+Ue+tt+", must be one of "+Object.keys(Po))}),ut}var oe=B("src","RGB"),se=B("dst","RGB");_.optional(function(){var Ue=A.constants.invalidBlendCombinations;A.assert(R,Ue+".indexOf("+oe+'+", "+'+se+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var re=R.def(F,"[",oe,"]"),we=R.def(F,"[",B("src","Alpha"),"]"),Xe=R.def(F,"[",se,"]"),yt=R.def(F,"[",B("dst","Alpha"),"]");return[re,Xe,we,yt]});case nf:return G(function(A){if(typeof A=="string")return _.commandParameter(A,te,"invalid "+I,b.commandStr),[te[A],te[A]];if(typeof A=="object")return _.commandParameter(A.rgb,te,I+".rgb",b.commandStr),_.commandParameter(A.alpha,te,I+".alpha",b.commandStr),[te[A.rgb],te[A.alpha]];_.commandRaise("invalid blend.equation",b.commandStr)},function(A,R,M){var F=A.constants.blendEquations,B=R.def(),oe=R.def(),se=A.cond("typeof ",M,'==="string"');return _.optional(function(){function re(we,Xe,yt){A.assert(we,yt+" in "+F,"invalid "+Xe+", must be one of "+Object.keys(te))}re(se.then,I,M),A.assert(se.else,M+"&&typeof "+M+'==="object"',"invalid "+I),re(se.else,I+".rgb",M+".rgb"),re(se.else,I+".alpha",M+".alpha")}),se.then(B,"=",oe,"=",F,"[",M,"];"),se.else(B,"=",F,"[",M,".rgb];",oe,"=",F,"[",M,".alpha];"),R(se),[B,oe]});case Td:return G(function(A){return _.command(Tr(A)&&A.length===4,"blend.color must be a 4d array",b.commandStr),gn(4,function(R){return+A[R]})},function(A,R,M){return _.optional(function(){A.assert(R,A.shared.isArrayLike+"("+M+")&&"+M+".length===4","blend.color must be a 4d array")}),gn(4,function(F){return R.def("+",M,"[",F,"]")})});case Fd:return G(function(A){return _.commandType(A,"number",P,b.commandStr),A|0},function(A,R,M){return _.optional(function(){A.assert(R,"typeof "+M+'==="number"',"invalid stencil.mask")}),R.def(M,"|0")});case hf:return G(function(A){_.commandType(A,"object",P,b.commandStr);var R=A.cmp||"keep",M=A.ref||0,F="mask"in A?A.mask:-1;return _.commandParameter(R,Vi,I+".cmp",b.commandStr),_.commandType(M,"number",I+".ref",b.commandStr),_.commandType(F,"number",I+".mask",b.commandStr),[Vi[R],M,F]},function(A,R,M){var F=A.constants.compareFuncs;_.optional(function(){function re(){A.assert(R,Array.prototype.join.call(arguments,""),"invalid stencil.func")}re(M+"&&typeof ",M,'==="object"'),re('!("cmp" in ',M,")||(",M,".cmp in ",F,")")});var B=R.def('"cmp" in ',M,"?",F,"[",M,".cmp]",":",ca),oe=R.def(M,".ref|0"),se=R.def('"mask" in ',M,"?",M,".mask|0:-1");return[B,oe,se]});case uf:case Ds:return G(function(A){_.commandType(A,"object",P,b.commandStr);var R=A.fail||"keep",M=A.zfail||"keep",F=A.zpass||"keep";return _.commandParameter(R,la,I+".fail",b.commandStr),_.commandParameter(M,la,I+".zfail",b.commandStr),_.commandParameter(F,la,I+".zpass",b.commandStr),[I===Ds?Ya:Ys,la[R],la[M],la[F]]},function(A,R,M){var F=A.constants.stencilOps;_.optional(function(){A.assert(R,M+"&&typeof "+M+'==="object"',"invalid "+I)});function B(oe){return _.optional(function(){A.assert(R,'!("'+oe+'" in '+M+")||("+M+"."+oe+" in "+F+")","invalid "+I+"."+oe+", must be one of "+Object.keys(la))}),R.def('"',oe,'" in ',M,"?",F,"[",M,".",oe,"]:",ca)}return[I===Ds?Ya:Ys,B("fail"),B("zfail"),B("zpass")]});case lf:return G(function(A){_.commandType(A,"object",P,b.commandStr);var R=A.factor|0,M=A.units|0;return _.commandType(R,"number",P+".factor",b.commandStr),_.commandType(M,"number",P+".units",b.commandStr),[R,M]},function(A,R,M){_.optional(function(){A.assert(R,M+"&&typeof "+M+'==="object"',"invalid "+I)});var F=R.def(M,".factor|0"),B=R.def(M,".units|0");return[F,B]});case Nd:return G(function(A){var R=0;return A==="front"?R=Ys:A==="back"&&(R=Ya),_.command(!!R,P,b.commandStr),R},function(A,R,M){return _.optional(function(){A.assert(R,M+'==="front"||'+M+'==="back"',"invalid cull.face")}),R.def(M,'==="front"?',Ys,":",Ya)});case cf:return G(function(A){return _.command(typeof A=="number"&&A>=Y.lineWidthDims[0]&&A<=Y.lineWidthDims[1],"invalid line width, must be a positive number between "+Y.lineWidthDims[0]+" and "+Y.lineWidthDims[1],b.commandStr),A},function(A,R,M){return _.optional(function(){A.assert(R,"typeof "+M+'==="number"&&'+M+">="+Y.lineWidthDims[0]+"&&"+M+"<="+Y.lineWidthDims[1],"invalid line width")}),M});case sf:return G(function(A){return _.commandParameter(A,yf,P,b.commandStr),yf[A]},function(A,R,M){return _.optional(function(){A.assert(R,M+'==="cw"||'+M+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),R.def(M+'==="cw"?'+jd+":"+xf)});case af:return G(function(A){return _.command(Tr(A)&&A.length===4,"color.mask must be length 4 array",b.commandStr),A.map(function(R){return!!R})},function(A,R,M){return _.optional(function(){A.assert(R,A.shared.isArrayLike+"("+M+")&&"+M+".length===4","invalid color.mask")}),gn(4,function(F){return"!!"+M+"["+F+"]"})});case ff:return G(function(A){_.command(typeof A=="object"&&A,P,b.commandStr);var R="value"in A?A.value:1,M=!!A.invert;return _.command(typeof R=="number"&&R>=0&&R<=1,"sample.coverage.value must be a number between 0 and 1",b.commandStr),[R,M]},function(A,R,M){_.optional(function(){A.assert(R,M+"&&typeof "+M+'==="object"',"invalid sample.coverage")});var F=R.def('"value" in ',M,"?+",M,".value:1"),B=R.def("!!",M,".invert");return[F,B]})}}),q}function Yr(S,b){var N=S.static,D=S.dynamic,q={};return Object.keys(N).forEach(function(I){var P=N[I],G;if(typeof P=="number"||typeof P=="boolean")G=Pr(function(){return P});else if(typeof P=="function"){var A=P._reglType;A==="texture2d"||A==="textureCube"?G=Pr(function(R){return R.link(P)}):A==="framebuffer"||A==="framebufferCube"?(_.command(P.color.length>0,'missing color attachment for framebuffer sent to uniform "'+I+'"',b.commandStr),G=Pr(function(R){return R.link(P.color[0])})):_.commandRaise('invalid data for uniform "'+I+'"',b.commandStr)}else Tr(P)?G=Pr(function(R){var M=R.global.def("[",gn(P.length,function(F){return _.command(typeof P[F]=="number"||typeof P[F]=="boolean","invalid uniform "+I,R.commandStr),P[F]}),"]");return M}):_.commandRaise('invalid or missing data for uniform "'+I+'"',b.commandStr);G.value=P,q[I]=G}),Object.keys(D).forEach(function(I){var P=D[I];q[I]=Dn(P,function(G,A){return G.invoke(A,P)})}),q}function Nt(S,b){var N=S.static,D=S.dynamic,q={};return Object.keys(N).forEach(function(I){var P=N[I],G=E.id(I),A=new $;if(hc(P))A.state=Bi,A.buffer=ie.getBuffer(ie.create(P,Wi,!1,!0)),A.type=0;else{var R=ie.getBuffer(P);if(R)A.state=Bi,A.buffer=R,A.type=0;else if(_.command(typeof P=="object"&&P,"invalid data for attribute "+I,b.commandStr),"constant"in P){var M=P.constant;A.buffer="null",A.state=Zl,typeof M=="number"?A.x=M:(_.command(Tr(M)&&M.length>0&&M.length<=4,"invalid constant for attribute "+I,b.commandStr),Hi.forEach(function(Xe,yt){yt<M.length&&(A[Xe]=M[yt])}))}else{hc(P.buffer)?R=ie.getBuffer(ie.create(P.buffer,Wi,!1,!0)):R=ie.getBuffer(P.buffer),_.command(!!R,'missing buffer for attribute "'+I+'"',b.commandStr);var F=P.offset|0;_.command(F>=0,'invalid offset for attribute "'+I+'"',b.commandStr);var B=P.stride|0;_.command(B>=0&&B<256,'invalid stride for attribute "'+I+'", must be integer betweeen [0, 255]',b.commandStr);var oe=P.size|0;_.command(!("size"in P)||oe>0&&oe<=4,'invalid size for attribute "'+I+'", must be 1,2,3,4',b.commandStr);var se=!!P.normalized,re=0;"type"in P&&(_.commandParameter(P.type,$a,"invalid type for attribute "+I,b.commandStr),re=$a[P.type]);var we=P.divisor|0;"divisor"in P&&(_.command(we===0||Ee,'cannot specify divisor for attribute "'+I+'", instancing not supported',b.commandStr),_.command(we>=0,'invalid divisor for attribute "'+I+'"',b.commandStr)),_.optional(function(){var Xe=b.commandStr,yt=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(P).forEach(function(Ue){_.command(yt.indexOf(Ue)>=0,'unknown parameter "'+Ue+'" for attribute pointer "'+I+'" (valid parameters are '+yt+")",Xe)})}),A.buffer=R,A.state=Bi,A.size=oe,A.normalized=se,A.type=re||R.dtype,A.offset=F,A.stride=B,A.divisor=we}}q[I]=Pr(function(Xe,yt){var Ue=Xe.attribCache;if(G in Ue)return Ue[G];var tt={isStream:!1};return Object.keys(A).forEach(function(ut){tt[ut]=A[ut]}),A.buffer&&(tt.buffer=Xe.link(A.buffer),tt.type=tt.type||tt.buffer+".dtype"),Ue[G]=tt,tt})}),Object.keys(D).forEach(function(I){var P=D[I];function G(A,R){var M=A.invoke(R,P),F=A.shared,B=A.constants,oe=F.isBufferArgs,se=F.buffer;_.optional(function(){A.assert(R,M+"&&(typeof "+M+'==="object"||typeof '+M+'==="function")&&('+oe+"("+M+")||"+se+".getBuffer("+M+")||"+se+".getBuffer("+M+".buffer)||"+oe+"("+M+'.buffer)||("constant" in '+M+"&&(typeof "+M+'.constant==="number"||'+F.isArrayLike+"("+M+".constant))))",'invalid dynamic attribute "'+I+'"')});var re={isStream:R.def(!1)},we=new $;we.state=Bi,Object.keys(we).forEach(function(tt){re[tt]=R.def(""+we[tt])});var Xe=re.buffer,yt=re.type;R("if(",oe,"(",M,")){",re.isStream,"=true;",Xe,"=",se,".createStream(",Wi,",",M,");",yt,"=",Xe,".dtype;","}else{",Xe,"=",se,".getBuffer(",M,");","if(",Xe,"){",yt,"=",Xe,".dtype;",'}else if("constant" in ',M,"){",re.state,"=",Zl,";","if(typeof "+M+'.constant === "number"){',re[Hi[0]],"=",M,".constant;",Hi.slice(1).map(function(tt){return re[tt]}).join("="),"=0;","}else{",Hi.map(function(tt,ut){return re[tt]+"="+M+".constant.length>"+ut+"?"+M+".constant["+ut+"]:0;"}).join(""),"}}else{","if(",oe,"(",M,".buffer)){",Xe,"=",se,".createStream(",Wi,",",M,".buffer);","}else{",Xe,"=",se,".getBuffer(",M,".buffer);","}",yt,'="type" in ',M,"?",B.glTypes,"[",M,".type]:",Xe,".dtype;",re.normalized,"=!!",M,".normalized;");function Ue(tt){R(re[tt],"=",M,".",tt,"|0;")}return Ue("size"),Ue("offset"),Ue("stride"),Ue("divisor"),R("}}"),R.exit("if(",re.isStream,"){",se,".destroyStream(",Xe,");","}"),re}q[I]=Dn(P,G)}),q}function Ur(S,b){var N=S.static,D=S.dynamic;if(Bs in N){var q=N[Bs];return q!==null&&Me.getVAO(q)===null&&(q=Me.createVAO(q)),Pr(function(P){return P.link(Me.getVAO(q))})}else if(Bs in D){var I=D[Bs];return Dn(I,function(P,G){var A=P.invoke(G,I);return G.def(P.shared.vao+".getVAO("+A+")")})}return null}function pr(S){var b=S.static,N=S.dynamic,D={};return Object.keys(b).forEach(function(q){var I=b[q];D[q]=Pr(function(P,G){return typeof I=="number"||typeof I=="boolean"?""+I:P.link(I)})}),Object.keys(N).forEach(function(q){var I=N[q];D[q]=Dn(I,function(P,G){return P.invoke(G,I)})}),D}function Or(S,b,N,D,q){var I=S.static,P=S.dynamic;_.optional(function(){var Ue=[ja,qs,Hs,Wa,Va,ec,Xa,tc,$s,Bs].concat(ue);function tt(ut){Object.keys(ut).forEach(function(Vt){_.command(Ue.indexOf(Vt)>=0,'unknown parameter "'+Vt+'"',q.commandStr)})}tt(I),tt(P)});var G=ft(S,b),A=Be(S,q),R=St(S,A,q),M=Wt(S,q),F=Ir(S,q),B=wt(S,q,G);function oe(Ue){var tt=R[Ue];tt&&(F[Ue]=tt)}oe(jo),oe(Ce(J0));var se=Object.keys(F).length>0,re={framebuffer:A,draw:M,shader:B,state:F,dirty:se,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(re.profile=gt(S,q),re.uniforms=Yr(N,q),re.drawVAO=re.scopeVAO=Ur(S,q),!re.drawVAO&&B.program&&!G&&C.angle_instanced_arrays){var we=!0,Xe=B.program.attributes.map(function(Ue){var tt=b.static[Ue];return we=we&&!!tt,tt});if(we&&Xe.length>0){var yt=Me.getVAO(Me.createVAO(Xe));re.drawVAO=new Tn(null,null,null,function(Ue,tt){return Ue.link(yt)}),re.useVAO=!0}}return G?re.useVAO=!0:re.attributes=Nt(b,q),re.context=pr(D,q),re}function jr(S,b,N){var D=S.shared,q=D.context,I=S.scope();Object.keys(N).forEach(function(P){b.save(q,"."+P);var G=N[P],A=G.append(S,b);Array.isArray(A)?I(q,".",P,"=[",A.join(),"];"):I(q,".",P,"=",A,";")}),b(I)}function Wr(S,b,N,D){var q=S.shared,I=q.gl,P=q.framebuffer,G;Fe&&(G=b.def(q.extensions,".webgl_draw_buffers"));var A=S.constants,R=A.drawBuffer,M=A.backBuffer,F;N?F=N.append(S,b):F=b.def(P,".next"),D||b("if(",F,"!==",P,".cur){"),b("if(",F,"){",I,".bindFramebuffer(",Yd,",",F,".framebuffer);"),Fe&&b(G,".drawBuffersWEBGL(",R,"[",F,".colorAttachments.length]);"),b("}else{",I,".bindFramebuffer(",Yd,",null);"),Fe&&b(G,".drawBuffersWEBGL(",M,");"),b("}",P,".cur=",F,";"),D||b("}")}function rn(S,b,N){var D=S.shared,q=D.gl,I=S.current,P=S.next,G=D.current,A=D.next,R=S.cond(G,".dirty");ue.forEach(function(M){var F=Ce(M);if(!(F in N.state)){var B,oe;if(F in P){B=P[F],oe=I[F];var se=gn(fe[F].length,function(we){return R.def(B,"[",we,"]")});R(S.cond(se.map(function(we,Xe){return we+"!=="+oe+"["+Xe+"]"}).join("||")).then(q,".",he[F],"(",se,");",se.map(function(we,Xe){return oe+"["+Xe+"]="+we}).join(";"),";"))}else{B=R.def(A,".",F);var re=S.cond(B,"!==",G,".",F);R(re),F in ze?re(S.cond(B).then(q,".enable(",ze[F],");").else(q,".disable(",ze[F],");"),G,".",F,"=",B,";"):re(q,".",he[F],"(",B,");",G,".",F,"=",B,";")}}}),Object.keys(N.state).length===0&&R(G,".dirty=false;"),b(R)}function un(S,b,N,D){var q=S.shared,I=S.current,P=q.current,G=q.gl;Zd(Object.keys(N)).forEach(function(A){var R=N[A];if(!(D&&!D(R))){var M=R.append(S,b);if(ze[A]){var F=ze[A];fa(R)?M?b(G,".enable(",F,");"):b(G,".disable(",F,");"):b(S.cond(M).then(G,".enable(",F,");").else(G,".disable(",F,");")),b(P,".",A,"=",M,";")}else if(Tr(M)){var B=I[A];b(G,".",he[A],"(",M,");",M.map(function(oe,se){return B+"["+se+"]="+oe}).join(";"),";")}else b(G,".",he[A],"(",M,");",P,".",A,"=",M,";")}})}function kr(S,b){Ee&&(S.instancing=b.def(S.shared.extensions,".angle_instanced_arrays"))}function xt(S,b,N,D,q){var I=S.shared,P=S.stats,G=I.current,A=I.timer,R=N.profile;function M(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var F,B;function oe(Ue){F=b.def(),Ue(F,"=",M(),";"),typeof q=="string"?Ue(P,".count+=",q,";"):Ue(P,".count++;"),ge&&(D?(B=b.def(),Ue(B,"=",A,".getNumPendingQueries();")):Ue(A,".beginQuery(",P,");"))}function se(Ue){Ue(P,".cpuTime+=",M(),"-",F,";"),ge&&(D?Ue(A,".pushScopeStats(",B,",",A,".getNumPendingQueries(),",P,");"):Ue(A,".endQuery();"))}function re(Ue){var tt=b.def(G,".profile");b(G,".profile=",Ue,";"),b.exit(G,".profile=",tt,";")}var we;if(R){if(fa(R)){R.enable?(oe(b),se(b.exit),re("true")):re("false");return}we=R.append(S,b),re(we)}else we=b.def(G,".profile");var Xe=S.block();oe(Xe),b("if(",we,"){",Xe,"}");var yt=S.block();se(yt),b.exit("if(",we,"){",yt,"}")}function dn(S,b,N,D,q){var I=S.shared;function P(A){switch(A){case rc:case ac:case cc:return 2;case nc:case ic:case lc:return 3;case oc:case sc:case fc:return 4;default:return 1}}function G(A,R,M){var F=I.gl,B=b.def(A,".location"),oe=b.def(I.attributes,"[",B,"]"),se=M.state,re=M.buffer,we=[M.x,M.y,M.z,M.w],Xe=["buffer","normalized","offset","stride"];function yt(){b("if(!",oe,".buffer){",F,".enableVertexAttribArray(",B,");}");var tt=M.type,ut;if(M.size?ut=b.def(M.size,"||",R):ut=R,b("if(",oe,".type!==",tt,"||",oe,".size!==",ut,"||",Xe.map(function(Mr){return oe+"."+Mr+"!=="+M[Mr]}).join("||"),"){",F,".bindBuffer(",Wi,",",re,".buffer);",F,".vertexAttribPointer(",[B,ut,tt,M.normalized,M.stride,M.offset],");",oe,".type=",tt,";",oe,".size=",ut,";",Xe.map(function(Mr){return oe+"."+Mr+"="+M[Mr]+";"}).join(""),"}"),Ee){var Vt=M.divisor;b("if(",oe,".divisor!==",Vt,"){",S.instancing,".vertexAttribDivisorANGLE(",[B,Vt],");",oe,".divisor=",Vt,";}")}}function Ue(){b("if(",oe,".buffer){",F,".disableVertexAttribArray(",B,");",oe,".buffer=null;","}if(",Hi.map(function(tt,ut){return oe+"."+tt+"!=="+we[ut]}).join("||"),"){",F,".vertexAttrib4f(",B,",",we,");",Hi.map(function(tt,ut){return oe+"."+tt+"="+we[ut]+";"}).join(""),"}")}se===Bi?yt():se===Zl?Ue():(b("if(",se,"===",Bi,"){"),yt(),b("}else{"),Ue(),b("}"))}D.forEach(function(A){var R=A.name,M=N.attributes[R],F;if(M){if(!q(M))return;F=M.append(S,b)}else{if(!q(Jd))return;var B=S.scopeAttrib(R);_.optional(function(){S.assert(b,B+".state","missing attribute "+R)}),F={},Object.keys(new $).forEach(function(oe){F[oe]=b.def(B,".",oe)})}G(S.link(A),P(A.info.type),F)})}function Qt(S,b,N,D,q){for(var I=S.shared,P=I.gl,G,A=0;A<D.length;++A){var R=D[A],M=R.name,F=R.info.type,B=N.uniforms[M],oe=S.link(R),se=oe+".location",re;if(B){if(!q(B))continue;if(fa(B)){var we=B.value;if(_.command(we!==null&&typeof we!="undefined",'missing uniform "'+M+'"',S.commandStr),F===Vs||F===Xs){_.command(typeof we=="function"&&(F===Vs&&(we._reglType==="texture2d"||we._reglType==="framebuffer")||F===Xs&&(we._reglType==="textureCube"||we._reglType==="framebufferCube")),"invalid texture for uniform "+M,S.commandStr);var Xe=S.link(we._texture||we.color[0]._texture);b(P,".uniform1i(",se,",",Xe+".bind());"),b.exit(Xe,".unbind();")}else if(F===Us||F===js||F===Ws){_.optional(function(){_.command(Tr(we),"invalid matrix for uniform "+M,S.commandStr),_.command(F===Us&&we.length===4||F===js&&we.length===9||F===Ws&&we.length===16,"invalid length for matrix uniform "+M,S.commandStr)});var yt=S.global.def("new Float32Array(["+Array.prototype.slice.call(we)+"])"),Ue=2;F===js?Ue=3:F===Ws&&(Ue=4),b(P,".uniformMatrix",Ue,"fv(",se,",false,",yt,");")}else{switch(F){case vf:_.commandType(we,"number","uniform "+M,S.commandStr),G="1f";break;case rc:_.command(Tr(we)&&we.length===2,"uniform "+M,S.commandStr),G="2f";break;case nc:_.command(Tr(we)&&we.length===3,"uniform "+M,S.commandStr),G="3f";break;case oc:_.command(Tr(we)&&we.length===4,"uniform "+M,S.commandStr),G="4f";break;case gf:_.commandType(we,"boolean","uniform "+M,S.commandStr),G="1i";break;case mf:_.commandType(we,"number","uniform "+M,S.commandStr),G="1i";break;case cc:_.command(Tr(we)&&we.length===2,"uniform "+M,S.commandStr),G="2i";break;case ac:_.command(Tr(we)&&we.length===2,"uniform "+M,S.commandStr),G="2i";break;case lc:_.command(Tr(we)&&we.length===3,"uniform "+M,S.commandStr),G="3i";break;case ic:_.command(Tr(we)&&we.length===3,"uniform "+M,S.commandStr),G="3i";break;case fc:_.command(Tr(we)&&we.length===4,"uniform "+M,S.commandStr),G="4i";break;case sc:_.command(Tr(we)&&we.length===4,"uniform "+M,S.commandStr),G="4i";break}b(P,".uniform",G,"(",se,",",Tr(we)?Array.prototype.slice.call(we):we,");")}continue}else re=B.append(S,b)}else{if(!q(Jd))continue;re=b.def(I.uniforms,"[",E.id(M),"]")}F===Vs?(_(!Array.isArray(re),"must specify a scalar prop for textures"),b("if(",re,"&&",re,'._reglType==="framebuffer"){',re,"=",re,".color[0];","}")):F===Xs&&(_(!Array.isArray(re),"must specify a scalar prop for cube maps"),b("if(",re,"&&",re,'._reglType==="framebufferCube"){',re,"=",re,".color[0];","}")),_.optional(function(){function kn(bo,i1){S.assert(b,bo,'bad data or missing for uniform "'+M+'".  '+i1)}function bf(bo){_(!Array.isArray(re),"must not specify an array type for uniform"),kn("typeof "+re+'==="'+bo+'"',"invalid type, expected "+bo)}function ro(bo,i1){Array.isArray(re)?_(re.length===bo,"must have length "+bo):kn(I.isArrayLike+"("+re+")&&"+re+".length==="+bo,"invalid vector, should have length "+bo,S.commandStr)}function a1(bo){_(!Array.isArray(re),"must not specify a value type"),kn("typeof "+re+'==="function"&&'+re+'._reglType==="texture'+(bo===Bd?"2d":"Cube")+'"',"invalid texture type",S.commandStr)}switch(F){case mf:bf("number");break;case ac:ro(2,"number");break;case ic:ro(3,"number");break;case sc:ro(4,"number");break;case vf:bf("number");break;case rc:ro(2,"number");break;case nc:ro(3,"number");break;case oc:ro(4,"number");break;case gf:bf("boolean");break;case cc:ro(2,"boolean");break;case lc:ro(3,"boolean");break;case fc:ro(4,"boolean");break;case Us:ro(4,"number");break;case js:ro(9,"number");break;case Ws:ro(16,"number");break;case Vs:a1(Bd);break;case Xs:a1(zb);break}});var tt=1;switch(F){case Vs:case Xs:var ut=b.def(re,"._texture");b(P,".uniform1i(",se,",",ut,".bind());"),b.exit(ut,".unbind();");continue;case mf:case gf:G="1i";break;case ac:case cc:G="2i",tt=2;break;case ic:case lc:G="3i",tt=3;break;case sc:case fc:G="4i",tt=4;break;case vf:G="1f";break;case rc:G="2f",tt=2;break;case nc:G="3f",tt=3;break;case oc:G="4f",tt=4;break;case Us:G="Matrix2fv";break;case js:G="Matrix3fv";break;case Ws:G="Matrix4fv";break}if(b(P,".uniform",G,"(",se,","),G.charAt(0)==="M"){var Vt=Math.pow(F-Us+2,2),Mr=S.global.def("new Float32Array(",Vt,")");Array.isArray(re)?b("false,(",gn(Vt,function(kn){return Mr+"["+kn+"]="+re[kn]}),",",Mr,")"):b("false,(Array.isArray(",re,")||",re," instanceof Float32Array)?",re,":(",gn(Vt,function(kn){return Mr+"["+kn+"]="+re+"["+kn+"]"}),",",Mr,")")}else tt>1?b(gn(tt,function(kn){return Array.isArray(re)?re[kn]:re+"["+kn+"]"})):(_(!Array.isArray(re),"uniform value must not be an array"),b(re));b(");")}}function Je(S,b,N,D){var q=S.shared,I=q.gl,P=q.draw,G=D.draw;function A(){var ut=G.elements,Vt,Mr=b;return ut?((ut.contextDep&&D.contextDynamic||ut.propDep)&&(Mr=N),Vt=ut.append(S,Mr)):Vt=Mr.def(P,".",Wa),Vt&&Mr("if("+Vt+")"+I+".bindBuffer("+Tb+","+Vt+".buffer.buffer);"),Vt}function R(){var ut=G.count,Vt,Mr=b;return ut?((ut.contextDep&&D.contextDynamic||ut.propDep)&&(Mr=N),Vt=ut.append(S,Mr),_.optional(function(){ut.MISSING&&S.assert(b,"false","missing vertex count"),ut.DYNAMIC&&S.assert(Mr,Vt+">=0","missing vertex count")})):(Vt=Mr.def(P,".",Xa),_.optional(function(){S.assert(Mr,Vt+">=0","missing vertex count")})),Vt}var M=A();function F(ut){var Vt=G[ut];return Vt?Vt.contextDep&&D.contextDynamic||Vt.propDep?Vt.append(S,N):Vt.append(S,b):b.def(P,".",ut)}var B=F(Va),oe=F(ec),se=R();if(typeof se=="number"){if(se===0)return}else N("if(",se,"){"),N.exit("}");var re,we;Ee&&(re=F(tc),we=S.instancing);var Xe=M+".type",yt=G.elements&&fa(G.elements);function Ue(){function ut(){N(we,".drawElementsInstancedANGLE(",[B,se,Xe,oe+"<<(("+Xe+"-"+_d+")>>1)",re],");")}function Vt(){N(we,".drawArraysInstancedANGLE(",[B,oe,se,re],");")}M?yt?ut():(N("if(",M,"){"),ut(),N("}else{"),Vt(),N("}")):Vt()}function tt(){function ut(){N(I+".drawElements("+[B,se,Xe,oe+"<<(("+Xe+"-"+_d+")>>1)"]+");")}function Vt(){N(I+".drawArrays("+[B,oe,se]+");")}M?yt?ut():(N("if(",M,"){"),ut(),N("}else{"),Vt(),N("}")):Vt()}Ee&&(typeof re!="number"||re>=0)?typeof re=="string"?(N("if(",re,">0){"),Ue(),N("}else if(",re,"<0){"),tt(),N("}")):Ue():tt()}function zt(S,b,N,D,q){var I=at(),P=I.proc("body",q);return _.optional(function(){I.commandStr=b.commandStr,I.command=I.link(b.commandStr)}),Ee&&(I.instancing=P.def(I.shared.extensions,".angle_instanced_arrays")),S(I,P,N,D),I.compile().body}function $t(S,b,N,D){kr(S,b),N.useVAO?N.drawVAO?b(S.shared.vao,".setVAO(",N.drawVAO.append(S,b),");"):b(S.shared.vao,".setVAO(",S.shared.vao,".targetVAO);"):(b(S.shared.vao,".setVAO(null);"),dn(S,b,N,D.attributes,function(){return!0})),Qt(S,b,N,D.uniforms,function(){return!0}),Je(S,b,b,N)}function Lr(S,b){var N=S.proc("draw",1);kr(S,N),jr(S,N,b.context),Wr(S,N,b.framebuffer),rn(S,N,b),un(S,N,b.state),xt(S,N,b,!1,!0);var D=b.shader.progVar.append(S,N);if(N(S.shared.gl,".useProgram(",D,".program);"),b.shader.program)$t(S,N,b,b.shader.program);else{N(S.shared.vao,".setVAO(null);");var q=S.global.def("{}"),I=N.def(D,".id"),P=N.def(q,"[",I,"]");N(S.cond(P).then(P,".call(this,a0);").else(P,"=",q,"[",I,"]=",S.link(function(G){return zt($t,S,b,G,1)}),"(",D,");",P,".call(this,a0);"))}Object.keys(b.state).length>0&&N(S.shared.current,".dirty=true;")}function Io(S,b,N,D){S.batchId="a1",kr(S,b);function q(){return!0}dn(S,b,N,D.attributes,q),Qt(S,b,N,D.uniforms,q),Je(S,b,b,N)}function Ka(S,b,N,D){kr(S,b);var q=N.contextDep,I=b.def(),P="a0",G="a1",A=b.def();S.shared.props=A,S.batchId=I;var R=S.scope(),M=S.scope();b(R.entry,"for(",I,"=0;",I,"<",G,";++",I,"){",A,"=",P,"[",I,"];",M,"}",R.exit);function F(Xe){return Xe.contextDep&&q||Xe.propDep}function B(Xe){return!F(Xe)}if(N.needsContext&&jr(S,M,N.context),N.needsFramebuffer&&Wr(S,M,N.framebuffer),un(S,M,N.state,F),N.profile&&F(N.profile)&&xt(S,M,N,!1,!0),D)N.useVAO?N.drawVAO?F(N.drawVAO)?M(S.shared.vao,".setVAO(",N.drawVAO.append(S,M),");"):R(S.shared.vao,".setVAO(",N.drawVAO.append(S,R),");"):R(S.shared.vao,".setVAO(",S.shared.vao,".targetVAO);"):(R(S.shared.vao,".setVAO(null);"),dn(S,R,N,D.attributes,B),dn(S,M,N,D.attributes,F)),Qt(S,R,N,D.uniforms,B),Qt(S,M,N,D.uniforms,F),Je(S,R,M,N);else{var oe=S.global.def("{}"),se=N.shader.progVar.append(S,M),re=M.def(se,".id"),we=M.def(oe,"[",re,"]");M(S.shared.gl,".useProgram(",se,".program);","if(!",we,"){",we,"=",oe,"[",re,"]=",S.link(function(Xe){return zt(Io,S,N,Xe,2)}),"(",se,");}",we,".call(this,a0[",I,"],",I,");")}}function k(S,b){var N=S.proc("batch",2);S.batchId="0",kr(S,N);var D=!1,q=!0;Object.keys(b.context).forEach(function(oe){D=D||b.context[oe].propDep}),D||(jr(S,N,b.context),q=!1);var I=b.framebuffer,P=!1;I?(I.propDep?D=P=!0:I.contextDep&&D&&(P=!0),P||Wr(S,N,I)):Wr(S,N,null),b.state.viewport&&b.state.viewport.propDep&&(D=!0);function G(oe){return oe.contextDep&&D||oe.propDep}rn(S,N,b),un(S,N,b.state,function(oe){return!G(oe)}),(!b.profile||!G(b.profile))&&xt(S,N,b,!1,"a1"),b.contextDep=D,b.needsContext=q,b.needsFramebuffer=P;var A=b.shader.progVar;if(A.contextDep&&D||A.propDep)Ka(S,N,b,null);else{var R=A.append(S,N);if(N(S.shared.gl,".useProgram(",R,".program);"),b.shader.program)Ka(S,N,b,b.shader.program);else{N(S.shared.vao,".setVAO(null);");var M=S.global.def("{}"),F=N.def(R,".id"),B=N.def(M,"[",F,"]");N(S.cond(B).then(B,".call(this,a0,a1);").else(B,"=",M,"[",F,"]=",S.link(function(oe){return zt(Ka,S,b,oe,2)}),"(",R,");",B,".call(this,a0,a1);"))}}Object.keys(b.state).length>0&&N(S.shared.current,".dirty=true;")}function Q(S,b){var N=S.proc("scope",3);S.batchId="a2";var D=S.shared,q=D.current;jr(S,N,b.context),b.framebuffer&&b.framebuffer.append(S,N),Zd(Object.keys(b.state)).forEach(function(P){var G=b.state[P],A=G.append(S,N);Tr(A)?A.forEach(function(R,M){N.set(S.next[P],"["+M+"]",R)}):N.set(D.next,"."+P,A)}),xt(S,N,b,!0,!0),[Wa,ec,Xa,tc,Va].forEach(function(P){var G=b.draw[P];G&&N.set(D.draw,"."+P,""+G.append(S,N))}),Object.keys(b.uniforms).forEach(function(P){var G=b.uniforms[P].append(S,N);Array.isArray(G)&&(G="["+G.join()+"]"),N.set(D.uniforms,"["+E.id(P)+"]",G)}),Object.keys(b.attributes).forEach(function(P){var G=b.attributes[P].append(S,N),A=S.scopeAttrib(P);Object.keys(new $).forEach(function(R){N.set(A,"."+R,G[R])})}),b.scopeVAO&&N.set(D.vao,".targetVAO",b.scopeVAO.append(S,N));function I(P){var G=b.shader[P];G&&N.set(D.shader,"."+P,G.append(S,N))}I(qs),I(Hs),Object.keys(b.state).length>0&&(N(q,".dirty=true;"),N.exit(q,".dirty=true;")),N("a1(",S.shared.context,",a0,",S.batchId,");")}function W(S){if(!(typeof S!="object"||Tr(S))){for(var b=Object.keys(S),N=0;N<b.length;++N)if(tr.isDynamic(S[b[N]]))return!0;return!1}}function qe(S,b,N){var D=b.static[N];if(!D||!W(D))return;var q=S.global,I=Object.keys(D),P=!1,G=!1,A=!1,R=S.global.def("{}");I.forEach(function(F){var B=D[F];if(tr.isDynamic(B)){typeof B=="function"&&(B=D[F]=tr.unbox(B));var oe=Dn(B,null);P=P||oe.thisDep,A=A||oe.propDep,G=G||oe.contextDep}else{switch(q(R,".",F,"="),typeof B){case"number":q(B);break;case"string":q('"',B,'"');break;case"object":Array.isArray(B)&&q("[",B.join(),"]");break;default:q(S.link(B));break}q(";")}});function M(F,B){I.forEach(function(oe){var se=D[oe];if(tr.isDynamic(se)){var re=F.invoke(B,se);B(R,".",oe,"=",re,";")}})}b.dynamic[N]=new tr.DynamicVariable(Z0,{thisDep:P,contextDep:G,propDep:A,ref:R,append:M}),delete b.static[N]}function At(S,b,N,D,q){var I=at();I.stats=I.link(q),Object.keys(b.static).forEach(function(G){qe(I,b,G)}),Ab.forEach(function(G){qe(I,S,G)});var P=Or(S,b,N,D,I);return Lr(I,P),Q(I,P),k(I,P),t(I.compile(),{destroy:function(){P.shader.program.destroy()}})}return{next:De,current:fe,procs:function(){var S=at(),b=S.proc("poll"),N=S.proc("refresh"),D=S.block();b(D),N(D);var q=S.shared,I=q.gl,P=q.next,G=q.current;D(G,".dirty=false;"),Wr(S,b),Wr(S,N,null,!0);var A;Ee&&(A=S.link(Ee)),C.oes_vertex_array_object&&N(S.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var R=0;R<Y.maxAttributes;++R){var M=N.def(q.attributes,"[",R,"]"),F=S.cond(M,".buffer");F.then(I,".enableVertexAttribArray(",R,");",I,".bindBuffer(",Wi,",",M,".buffer.buffer);",I,".vertexAttribPointer(",R,",",M,".size,",M,".type,",M,".normalized,",M,".stride,",M,".offset);").else(I,".disableVertexAttribArray(",R,");",I,".vertexAttrib4f(",R,",",M,".x,",M,".y,",M,".z,",M,".w);",M,".buffer=null;"),N(F),Ee&&N(A,".vertexAttribDivisorANGLE(",R,",",M,".divisor);")}return N(S.shared.vao,".currentVAO=null;",S.shared.vao,".setVAO(",S.shared.vao,".targetVAO);"),Object.keys(ze).forEach(function(B){var oe=ze[B],se=D.def(P,".",B),re=S.block();re("if(",se,"){",I,".enable(",oe,")}else{",I,".disable(",oe,")}",G,".",B,"=",se,";"),N(re),b("if(",se,"!==",G,".",B,"){",re,"}")}),Object.keys(he).forEach(function(B){var oe=he[B],se=fe[B],re,we,Xe=S.block();if(Xe(I,".",oe,"("),Tr(se)){var yt=se.length;re=S.global.def(P,".",B),we=S.global.def(G,".",B),Xe(gn(yt,function(Ue){return re+"["+Ue+"]"}),");",gn(yt,function(Ue){return we+"["+Ue+"]="+re+"["+Ue+"];"}).join("")),b("if(",gn(yt,function(Ue){return re+"["+Ue+"]!=="+we+"["+Ue+"]"}).join("||"),"){",Xe,"}")}else re=D.def(P,".",B),we=D.def(G,".",B),Xe(re,");",G,".",B,"=",re,";"),b("if(",re,"!==",we,"){",Xe,"}");N(Xe)}),S.compile()}(),compile:At}}function Wb(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var Vb=34918,Xb=34919,e1=35007,Yb=function(v,E){if(!E.ext_disjoint_timer_query)return null;var C=[];function Y(){return C.pop()||E.ext_disjoint_timer_query.createQueryEXT()}function ie(Ee){C.push(Ee)}var V=[];function ee(Ee){var Fe=Y();E.ext_disjoint_timer_query.beginQueryEXT(e1,Fe),V.push(Fe),ge(V.length-1,V.length,Ee)}function me(){E.ext_disjoint_timer_query.endQueryEXT(e1)}function ye(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Me=[];function be(){return Me.pop()||new ye}function Te(Ee){Me.push(Ee)}var Ne=[];function ge(Ee,Fe,fe){var De=be();De.startQueryIndex=Ee,De.endQueryIndex=Fe,De.sum=0,De.stats=fe,Ne.push(De)}var ke=[],$=[];function te(){var Ee,Fe,fe=V.length;if(fe!==0){$.length=Math.max($.length,fe+1),ke.length=Math.max(ke.length,fe+1),ke[0]=0,$[0]=0;var De=0;for(Ee=0,Fe=0;Fe<V.length;++Fe){var ue=V[Fe];E.ext_disjoint_timer_query.getQueryObjectEXT(ue,Xb)?(De+=E.ext_disjoint_timer_query.getQueryObjectEXT(ue,Vb),ie(ue)):V[Ee++]=ue,ke[Fe+1]=De,$[Fe+1]=Ee}for(V.length=Ee,Ee=0,Fe=0;Fe<Ne.length;++Fe){var ze=Ne[Fe],he=ze.startQueryIndex,Ce=ze.endQueryIndex;ze.sum+=ke[Ce]-ke[he];var Qe=$[he],ct=$[Ce];ct===Qe?(ze.stats.gpuTime+=ze.sum/1e6,Te(ze)):(ze.startQueryIndex=Qe,ze.endQueryIndex=ct,Ne[Ee++]=ze)}Ne.length=Ee}}return{beginQuery:ee,endQuery:me,pushScopeStats:ge,update:te,getNumPendingQueries:function(){return V.length},clear:function(){C.push.apply(C,V);for(var Ee=0;Ee<C.length;Ee++)E.ext_disjoint_timer_query.deleteQueryEXT(C[Ee]);V.length=0,C.length=0},restore:function(){V.length=0,C.length=0}}},Kb=16384,Qb=256,Zb=1024,Jb=34962,t1="webglcontextlost",r1="webglcontextrestored",n1=1,e3=2,t3=3;function o1(v,E){for(var C=0;C<v.length;++C)if(v[C]===E)return C;return-1}function r3(v){var E=_l(v);if(!E)return null;var C=E.gl,Y=C.getContextAttributes(),ie=C.isContextLost(),V=Rs(C,E);if(!V)return null;var ee=Ga(),me=Wb(),ye=V.extensions,Me=Yb(C,ye),be=Oa(),Te=C.drawingBufferWidth,Ne=C.drawingBufferHeight,ge={tick:0,time:0,viewportWidth:Te,viewportHeight:Ne,framebufferWidth:Te,framebufferHeight:Ne,drawingBufferWidth:Te,drawingBufferHeight:Ne,pixelRatio:E.pixelRatio},ke={},$={elements:null,primitive:4,count:-1,offset:0,instances:-1},te=qx(C,ye),Ee=ny(C,me,E,fe),Fe=vb(C,ye,te,me,Ee);function fe(Je){return Fe.destroyBuffer(Je)}var De=vy(C,ye,Ee,me),ue=yb(C,ee,me,E),ze=Wy(C,ye,te,function(){Qe.procs.poll()},ge,me,E),he=Vy(C,ye,te,me,E),Ce=db(C,ye,te,ze,he,me),Qe=jb(C,ee,ye,te,Ee,De,ze,Ce,ke,Fe,ue,$,ge,Me,E),ct=_b(C,Ce,Qe.procs.poll,ge,Y,ye,te),Pe=Qe.next,Se=C.canvas,le=[],at=[],gt=[],Be=[E.onDestroy],St=null;function ft(){if(le.length===0){Me&&Me.update(),St=null;return}St=ra.next(ft),un();for(var Je=le.length-1;Je>=0;--Je){var zt=le[Je];zt&&zt(ge,null,0)}C.flush(),Me&&Me.update()}function wt(){!St&&le.length>0&&(St=ra.next(ft))}function Wt(){St&&(ra.cancel(ft),St=null)}function Ir(Je){Je.preventDefault(),ie=!0,Wt(),at.forEach(function(zt){zt()})}function Yr(Je){C.getError(),ie=!1,V.restore(),ue.restore(),Ee.restore(),ze.restore(),he.restore(),Ce.restore(),Fe.restore(),Me&&Me.restore(),Qe.procs.refresh(),wt(),gt.forEach(function(zt){zt()})}Se&&(Se.addEventListener(t1,Ir,!1),Se.addEventListener(r1,Yr,!1));function Nt(){le.length=0,Wt(),Se&&(Se.removeEventListener(t1,Ir),Se.removeEventListener(r1,Yr)),ue.clear(),Ce.clear(),he.clear(),ze.clear(),De.clear(),Ee.clear(),Fe.clear(),Me&&Me.clear(),Be.forEach(function(Je){Je()})}function Ur(Je){_(!!Je,"invalid args to regl({...})"),_.type(Je,"object","invalid args to regl({...})");function zt(q){var I=t({},q);delete I.uniforms,delete I.attributes,delete I.context,delete I.vao,"stencil"in I&&I.stencil.op&&(I.stencil.opBack=I.stencil.opFront=I.stencil.op,delete I.stencil.op);function P(G){if(G in I){var A=I[G];delete I[G],Object.keys(A).forEach(function(R){I[G+"."+R]=A[R]})}}return P("blend"),P("depth"),P("cull"),P("stencil"),P("polygonOffset"),P("scissor"),P("sample"),"vao"in q&&(I.vao=q.vao),I}function $t(q,I){var P={},G={};return Object.keys(q).forEach(function(A){var R=q[A];if(tr.isDynamic(R)){G[A]=tr.unbox(R,A);return}else if(I&&Array.isArray(R)){for(var M=0;M<R.length;++M)if(tr.isDynamic(R[M])){G[A]=tr.unbox(R,A);return}}P[A]=R}),{dynamic:G,static:P}}var Lr=$t(Je.context||{},!0),Io=$t(Je.uniforms||{},!0),Ka=$t(Je.attributes||{},!1),k=$t(zt(Je),!1),Q={gpuTime:0,cpuTime:0,count:0},W=Qe.compile(k,Ka,Io,Lr,Q),qe=W.draw,At=W.batch,S=W.scope,b=[];function N(q){for(;b.length<q;)b.push(null);return b}function D(q,I){var P;if(ie&&_.raise("context lost"),typeof q=="function")return S.call(this,null,q,0);if(typeof I=="function")if(typeof q=="number")for(P=0;P<q;++P)S.call(this,null,I,P);else if(Array.isArray(q))for(P=0;P<q.length;++P)S.call(this,q[P],I,P);else return S.call(this,q,I,0);else if(typeof q=="number"){if(q>0)return At.call(this,N(q|0),q|0)}else if(Array.isArray(q)){if(q.length)return At.call(this,q,q.length)}else return qe.call(this,q)}return t(D,{stats:Q,destroy:function(){W.destroy()}})}var pr=Ce.setFBO=Ur({framebuffer:tr.define.call(null,n1,"framebuffer")});function Or(Je,zt){var $t=0;Qe.procs.poll();var Lr=zt.color;Lr&&(C.clearColor(+Lr[0]||0,+Lr[1]||0,+Lr[2]||0,+Lr[3]||0),$t|=Kb),"depth"in zt&&(C.clearDepth(+zt.depth),$t|=Qb),"stencil"in zt&&(C.clearStencil(zt.stencil|0),$t|=Zb),_(!!$t,"called regl.clear with no buffer specified"),C.clear($t)}function jr(Je){if(_(typeof Je=="object"&&Je,"regl.clear() takes an object as input"),"framebuffer"in Je)if(Je.framebuffer&&Je.framebuffer_reglType==="framebufferCube")for(var zt=0;zt<6;++zt)pr(t({framebuffer:Je.framebuffer.faces[zt]},Je),Or);else pr(Je,Or);else Or(null,Je)}function Wr(Je){_.type(Je,"function","regl.frame() callback must be a function"),le.push(Je);function zt(){var $t=o1(le,Je);_($t>=0,"cannot cancel a frame twice");function Lr(){var Io=o1(le,Lr);le[Io]=le[le.length-1],le.length-=1,le.length<=0&&Wt()}le[$t]=Lr}return wt(),{cancel:zt}}function rn(){var Je=Pe.viewport,zt=Pe.scissor_box;Je[0]=Je[1]=zt[0]=zt[1]=0,ge.viewportWidth=ge.framebufferWidth=ge.drawingBufferWidth=Je[2]=zt[2]=C.drawingBufferWidth,ge.viewportHeight=ge.framebufferHeight=ge.drawingBufferHeight=Je[3]=zt[3]=C.drawingBufferHeight}function un(){ge.tick+=1,ge.time=xt(),rn(),Qe.procs.poll()}function kr(){ze.refresh(),rn(),Qe.procs.refresh(),Me&&Me.update()}function xt(){return(Oa()-be)/1e3}kr();function dn(Je,zt){_.type(zt,"function","listener callback must be a function");var $t;switch(Je){case"frame":return Wr(zt);case"lost":$t=at;break;case"restore":$t=gt;break;case"destroy":$t=Be;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return $t.push(zt),{cancel:function(){for(var Lr=0;Lr<$t.length;++Lr)if($t[Lr]===zt){$t[Lr]=$t[$t.length-1],$t.pop();return}}}}var Qt=t(Ur,{clear:jr,prop:tr.define.bind(null,n1),context:tr.define.bind(null,e3),this:tr.define.bind(null,t3),draw:Ur({}),buffer:function(Je){return Ee.create(Je,Jb,!1,!1)},elements:function(Je){return De.create(Je,!1)},texture:ze.create2D,cube:ze.createCube,renderbuffer:he.create,framebuffer:Ce.create,framebufferCube:Ce.createCube,vao:Fe.createVAO,attributes:Y,frame:Wr,on:dn,limits:te,hasExtension:function(Je){return te.extensions.indexOf(Je.toLowerCase())>=0},read:ct,destroy:Nt,_gl:C,_refresh:kr,poll:function(){un(),Me&&Me.update()},now:xt,stats:me});return E.onDone(null,Qt),Qt}return r3})});var Qa=pe((DE,T1)=>{"use strict";var Wo=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Vo=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Oo=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],mc=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Zs=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Lf=e=>Math.hypot(e[0],e[1],e[2]),no=e=>{let t=Lf(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function Zi(e,t){let r=e.length-1,n=Math.min(Math.max(t,0),1)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],l=[0,0,0];for(let m=0;m<3;m++)l[m]=.5*(2*s[m]+(-i[m]+c[m])*a+(2*i[m]-5*s[m]+4*c[m]-f[m])*a*a+(-i[m]+3*s[m]-3*c[m]+f[m])*a*a*a);return l}function v3(e,t){return Zi(e.map(r=>[r,0,0]),t)[0]}function m3(e,t,r,n){let o={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];o.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},o.restore=()=>{i=s.pop()};let c=(h,u)=>{let d=new Array(9);for(let p=0;p<3;p++)for(let g=0;g<3;g++)d[p*3+g]=h[p*3]*u[g]+h[p*3+1]*u[3+g]+h[p*3+2]*u[6+g];return d},f=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];o.translate=(h,u,d)=>{let p=f([h,u,d]);i.t=[i.t[0]+p[0]*i.s,i.t[1]+p[1]*i.s,i.t[2]+p[2]*i.s]},o.scale=h=>{i.s*=h},o.rotateY=h=>{let u=Math.cos(h),d=Math.sin(h);i.r=c(i.r,[u,0,d,0,1,0,-d,0,u])},o.vert=(h,u,d)=>{let p=d||o.curMat,g=f(h),x=no(f(u));return e.push(g[0]*i.s+i.t[0],g[1]*i.s+i.t[1],g[2]*i.s+i.t[2]),t.push(x[0],x[1],x[2]),n.push(p[0],p[1],p[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],m=h=>[t[h*3],t[h*3+1],t[h*3+2]];return o.tri=(h,u,d)=>{let p=l(h),g=Zs(Wo(l(u),p),Wo(l(d),p)),x=Vo(Vo(m(h),m(u)),m(d));mc(g,x)<0?r.push(h,d,u):r.push(h,u,d)},o.box=(h,u,d,p,g,x,y)=>{let w=[[[h,u,d],[p,u,d],[h,g,d],[p,g,d],[0,0,-1]],[[p,u,x],[h,u,x],[p,g,x],[h,g,x],[0,0,1]],[[h,u,x],[h,u,d],[h,g,x],[h,g,d],[-1,0,0]],[[p,u,d],[p,u,x],[p,g,d],[p,g,x],[1,0,0]],[[h,g,d],[p,g,d],[h,g,x],[p,g,x],[0,1,0]],[[h,u,x],[p,u,x],[h,u,d],[p,u,d],[0,-1,0]]];for(let T of w){let z=o.vert(T[0],T[4],y),L=o.vert(T[1],T[4],y),O=o.vert(T[2],T[4],y),U=o.vert(T[3],T[4],y);o.tri(z,L,O),o.tri(L,U,O)}},o.surface=(h,u,d,p)=>{p=p||{};let g=.001,x=z=>Math.min(1,Math.max(0,z)),y=[],w=[];for(let z=0;z<=u;z++){let L=[],O=[];for(let U=0;U<=d;U++){let K=z/u,Z=U/d,J=h(K,Z),ce=Math.min(1-g,Math.max(g,K)),H=p.wrapV?Z:Math.min(1-g,Math.max(g,Z)),j=Wo(h(x(ce+g),H),h(x(ce-g),H)),de=p.wrapV?H+g:x(H+g),ve=p.wrapV?H-g:x(H-g),it=Wo(h(ce,de),h(ce,ve)),_e=Zs(j,it);Lf(_e)<1e-14&&(_e=p.inside?Wo(J,p.inside(K,Z)):[0,1,0]),_e=no(_e),p.inside&&mc(_e,Wo(J,p.inside(K,Z)))<0&&(_e=Oo(_e,-1));let ht=p.mat?p.mat(K,Z,J):null;L.push(o.vert(J,_e,ht)),p.double&&O.push(o.vert(J,Oo(_e,-1),ht))}y.push(L),w.push(O)}let T=z=>{for(let L=0;L<u;L++)for(let O=0;O<d;O++){let U=z[L][O],K=z[L+1][O],Z=z[L][O+1],J=z[L+1][O+1];o.tri(U,K,Z),o.tri(K,J,Z)}};T(y),p.double&&T(w)},o.ellipsoid=(h,u,d,p,g)=>{g=g||{};let x=g.warp||null;o.surface((y,w)=>{let T=y*Math.PI,z=w*Math.PI*2,L=x?x(y,w):1;return[h[0]+u[0]*L*Math.sin(T)*Math.cos(z),h[1]+u[1]*L*Math.cos(T),h[2]+u[2]*L*Math.sin(T)*Math.sin(z)]},d||10,p||14,{wrapV:!0,inside:()=>h,mat:g.mat})},o.tube=(h,u,d,p,g)=>{g=g||{};let x=40,y=[],w=null;for(let L=0;L<=x;L++){let O=L/x,U=Zi(h,Math.max(0,O-.01)),K=Zi(h,Math.min(1,O+.01)),Z=no(Wo(K,U)),J;if(w)J=no(Wo(w,Oo(Z,mc(w,Z))));else{let ce=Math.abs(Z[1])<.9?[0,1,0]:[1,0,0];J=no(Zs(Z,ce))}y.push({N:J,B:no(Zs(Z,J))}),w=J}let T=L=>{let O=Math.min(Math.max(L,0),1)*x,U=Math.min(x-1,Math.floor(O)),K=O-U,Z=y[U],J=y[U+1];return{N:no(Vo(Oo(Z.N,1-K),Oo(J.N,K))),B:no(Vo(Oo(Z.B,1-K),Oo(J.B,K)))}},z=g.squash||[1,1];o.surface((L,O)=>{let U=Zi(h,L),K=T(L),Z=u(L),J=O*Math.PI*2;return Vo(U,Vo(Oo(K.N,Math.cos(J)*Z*z[0]),Oo(K.B,Math.sin(J)*Z*z[1])))},d||12,p||8,{wrapV:!0,inside:L=>Zi(h,L),mat:g.mat})},o.lathe=(h,u,d,p,g)=>{g=g||{};let x=[];for(let y=0;y<h.length-1;y++){let w=h[y+1][0]-h[y][0],T=h[y+1][1]-h[y][1];x.push(no([T,-w,0]))}for(let y=0;y<h.length-1;y++){let w=h[y],T=h[y+1],z=y===0||w[2]===1,L=y===h.length-2||T[2]===1,O=z?x[y]:no(Vo(x[y-1],x[y])),U=L?x[y]:no(Vo(x[y],x[y+1])),K=[],Z=[];for(let J=0;J<=p;J++){let ce=J/p*Math.PI*2,H=Math.cos(ce),j=Math.sin(ce),de=g.mat?g.mat(ce,w[1]):null,ve=g.mat?g.mat(ce,T[1]):null;K.push(o.vert([u+w[0]*H,w[1],d+w[0]*j],[O[0]*H,O[1],O[0]*j],de)),Z.push(o.vert([u+T[0]*H,T[1],d+T[0]*j],[U[0]*H,U[1],U[0]*j],ve))}for(let J=0;J<p;J++)o.tri(K[J],K[J+1],Z[J]),o.tri(K[J+1],Z[J+1],Z[J])}},o}T1.exports={createBuilder:m3,catmull:Zi,curve1:v3,sub:Wo,add:Vo,mul:Oo,dot:mc,cross:Zs,norm:no,len:Lf}});var C1=pe(($E,z1)=>{"use strict";var{norm:gc,add:xc,mul:da,sub:g3,cross:k1}=Qa(),L1=Math.PI*2,x3=(e,t,r)=>{let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)};function y3(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function b3(e,t,r,n,o,a){let i=(h,u)=>[7,h*a,u];e.curMat=[0,0,0],e.box(t-a*1.36,n,r-a*1.36,t+a*1.36,n+.22,r+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,r,56,{mat:i});let s=n+.55,c=o-s,f=20,l=6,m=a*.075;return e.surface((h,u)=>{let d=s+h*c,p=a*(.96-.12*h),g=u*L1,x=u*f%1,y=p-m*4*x*(1-x);return[t+y*Math.cos(g),d,r+y*Math.sin(g)]},10,f*l,{wrapV:!0,inside:h=>[t,s+h*c,r],mat:(h,u)=>[7,u*L1*a,s+h*c]}),e.lathe([[a*.8,o-.02,1],[a*.9,o+.02],[a*.9,o+.07,1],[a*.82,o+.09,1],[a*.86,o+.13],[a*1.06,o+.2],[a*1.22,o+.28],[a*1.28,o+.33,1]],t,r,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,o+.33,r-a*1.42,t+a*1.42,o+.53,r+a*1.42),o+.53}function w3(e,t,r){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,r*.14,1],[t*1.04,r*.14,1],[t*1.04,r*.2],[t*.97,r*.26,1],[t*.95,r*.26,1],[t*.95,r*.8,1],[t*.98,r*.8,1],[t*1.03,r*.86],[t*1.05,r*.92,1],[t*1.05,r,1],[t*.5,r,1],[0,r]],0,0,72)}function _3(e,t,r,n,o){e.save(),e.translate(t,0,r),w3(e,n,o),e.restore()}function E3(e,t,r,n,o,a){let i=y3(n),s=a?gc([a[0],0,a[1]]):null;e.save(),e.translate(t,0,r),e.scale(o||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let m=l>=c-2,h=l*2.399963+i()*.5,u=[Math.cos(h),0,Math.sin(h)],d=[-Math.sin(h),0,Math.cos(h)],p=l*.618%1,g=m?.06+i()*.06:.12+.62*p,x=1;if(s){let _e=u[0]*s[0]+u[2]*s[2];x=.25+.75*x3(-.7,.5,_e),g*=x}let y=m?1.1+i()*.25:.85+.55*(1-p*.55)+i()*.15,w=m?1+i()*.2:.95+i()*.28,T=m?.055:.215+i()*.05,z=.04+i()*.05,L=[u[0]*z,f,u[2]*z],O=[L[0]+u[0]*Math.sin(g)*y*.92,L[1]+Math.cos(g)*y,L[2]+u[2]*Math.sin(g)*y*.92],U=[L[0]+u[0]*Math.sin(g*.5)*y*.45,L[1]+y*.5,L[2]+u[2]*Math.sin(g*.5)*y*.45];e.curMat=[4,0,0],e.tube([L,U,O],_e=>.02-.008*_e,8,7);let K=24,Z=g*.9+.05,J=g+(m?.12:(.95+.45*p)*(.35+.65*x)),ce=[O],H=[],j=O;for(let _e=0;_e<K;_e++){let ht=_e/K,bt=Z+(J-Z)*ht*ht,_t=[u[0]*Math.sin(bt),Math.cos(bt),u[2]*Math.sin(bt)];H.push(_t),j=xc(j,da(_t,w/K)),ce.push(j)}H.push(H[H.length-1]);let de=_e=>{let ht=_e*K,bt=Math.min(K-1,Math.floor(ht)),_t=ht-bt;return xc(da(ce[bt],1-_t),da(ce[bt+1],_t))},ve=_e=>{let ht=_e*K,bt=Math.min(K,Math.floor(ht)),_t=Math.min(K,bt+1),Le=ht-bt;return gc(xc(da(H[bt],1-Le),da(H[_t],Le)))},it=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((_e,ht)=>{let bt=ht*2-1,_t=de(_e),Le=ve(_e),vt=it*_e,pt=xc(da(d,Math.cos(vt)),da(k1(Le,d),Math.sin(vt)));pt=gc(g3(pt,da(Le,pt[0]*Le[0]+pt[1]*Le[1]+pt[2]*Le[2])));let Tt=gc(k1(pt,Le)),Gt=T*Math.pow(Math.sin(Math.PI*Math.pow(_e,.72)),.85),Ft=.3*Gt*Math.abs(bt)+.012*Math.sin(_e*40+bt*2)*Math.abs(bt)*(m?0:1),Ge=-.1*Gt*bt*bt*bt*bt,Ze=Ft+Ge;return[_t[0]+pt[0]*bt*Gt+Tt[0]*Ze,_t[1]+pt[1]*bt*Gt+Tt[1]*Ze,_t[2]+pt[2]*bt*Gt+Tt[2]*Ze]},14,8,{double:!0,mat:(_e,ht)=>[2,ht*2-1,_e]})}e.restore()}z1.exports={addFlutedColumn:b3,addStatue:_3,addPlant:E3}});var Za=pe((qE,I1)=>{"use strict";var xe={xc:7,r:2.5,spring:4.7};xe.x0=xe.xc-xe.r;xe.x1=xe.xc+xe.r;xe.top=xe.spring+xe.r;var Cn=.06,yr=.1,R1=.08,yc=xe.r,bc=[xe.x0+yc/3,xe.x0+2*yc/3,xe.xc+yc/3,xe.xc+2*yc/3],Ji=.28,zf=[.95,1.65,2.35,3.05,3.75],N1=[1.05,1.8],Js=[8,0,0],Vn=[0,0,0];function oo(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function es(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function wc(e,t,r,n,o,a,i=48,s=0,c=Math.PI){let f=(l,m,h)=>[xe.xc+m*Math.cos(l),xe.spring+m*Math.sin(l),h];for(let l=0;l<i;l++){let m=s+(c-s)*l/i,h=s+(c-s)*(l+1)/i,u=(m+h)/2;es(e,f(m,t,o),f(h,t,o),f(h,r,o),f(m,r,o),[0,0,1],a),es(e,f(m,r,n),f(h,r,n),f(h,t,n),f(m,t,n),[0,0,-1],a),es(e,f(m,t,n),f(h,t,n),f(h,t,o),f(m,t,o),[-Math.cos(u),-Math.sin(u),0],a),es(e,f(h,r,n),f(m,r,n),f(m,r,o),f(h,r,o),[Math.cos(u),Math.sin(u),0],a)}}function M3(e){let n=a=>[xe.xc+xe.r*Math.cos(a),xe.spring+xe.r*Math.sin(a)],o=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?xe.r/Math.abs(i):1/0,f=s>1e-6?(8-xe.spring)/s:1/0,l=Math.min(c,f);return[Math.min(xe.x1,Math.max(xe.x0,xe.xc+i*l)),Math.min(8,xe.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),l=o(i),m=o(s);for(let[u,d]of[[.35,1],[-.35,-1]])es(e,[c[0],c[1],u],[f[0],f[1],u],[m[0],m[1],u],[l[0],l[1],u],[0,0,d],Vn);let h=(i+s)/2;es(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Vn)}}function S3(e){oo(e,-.35,0,-.35,xe.x0,8,.35,Vn),oo(e,xe.x1,0,-.35,14+.35,8,.35,Vn),M3(e),P1(e)}function P1(e){oo(e,xe.x0-.32,.3,.35,xe.x0,xe.spring,.35+.07,Vn),oo(e,xe.x1,.3,.35,xe.x1+.32,xe.spring,.35+.07,Vn),oo(e,xe.x0-.32-.05,0,.35,xe.x0,.3,.35+.07+.04,Vn),oo(e,xe.x1,0,.35,xe.x1+.32+.05,.3,.35+.07+.04,Vn),oo(e,xe.x0-.32-.06,xe.spring-.12,.35,xe.x0,xe.spring,.35+.07+.05,Vn),oo(e,xe.x1,xe.spring-.12,.35,xe.x1+.32+.06,xe.spring,.35+.07+.05,Vn),wc(e,xe.r,xe.r+.32,.35,.35+.07,Vn),wc(e,xe.r+.32,xe.r+.32+.06,.35,.35+.07+.03,Vn),oo(e,xe.xc-.22,xe.top-.08,.35,xe.xc+.22,xe.top+.32+.12,.35+.07+.06,Vn)}function A3(e,t){t=t||"all";let r=t==="all",n=r||t==="fixed",o=-R1/2,a=R1/2,i=(h,u,d,p,g=0)=>oo(e,h-g,u,o,d+g,p,a,Js),s=h=>xe.spring+Math.sqrt(Math.max(0,xe.r*xe.r-(h-xe.xc)*(h-xe.xc))),c=t==="right"?xe.xc:xe.x0,f=t==="left"?xe.xc:xe.x1,l=h=>r||t==="left"&&h<xe.xc||t==="right"&&h>xe.xc,m=r?null:xe.spring-.06;if(n){i(xe.x0,0,xe.x0+yr,xe.spring),i(xe.x1-yr,0,xe.x1,xe.spring),wc(e,xe.r-yr,xe.r,o,a,Js,64),i(xe.x0,0,xe.x1,.05),i(xe.x0,xe.spring-.06,xe.x1,xe.spring+.06);for(let h of N1)wc(e,h-Cn/2,h+Cn/2,o,a,Js,48)}if(r){i(xe.x0,0,xe.x1,Ji),i(xe.xc-yr/2,0,xe.xc+yr/2,xe.top-yr*.5);for(let h of bc)i(h-Cn/2,Ji,h+Cn/2,s(h)-yr*.5);for(let h of zf)i(xe.x0,h-Cn/2,xe.x1,h+Cn/2)}else if(t==="fixed"){i(xe.xc-yr/2,xe.spring+.06,xe.xc+yr/2,xe.top-yr*.5);for(let h of bc)i(h-Cn/2,xe.spring+.06,h+Cn/2,s(h)-yr*.5)}else{let h=t==="left"?xe.x0+yr:xe.x1-yr;i(Math.min(h,h+(t==="left"?yr*.8:-yr*.8)),.05,Math.max(h,h+(t==="left"?yr*.8:-yr*.8)),m),i(c,.05,f,Ji),i(c,m-.07,f,m);let u=t==="left"?xe.xc-yr/2:xe.xc;i(u,.05,u+yr/2,m);for(let d of bc)l(d)&&i(d-Cn/2,Ji,d+Cn/2,m-.07);for(let d of zf)i(c,d-Cn/2,f,d+Cn/2)}for(let h of[-1,1]){let u=xe.xc+h*.16;l(u)&&(oo(e,u-.02,1.05,a,u+.02,1.13,a+.06,Js),oo(e,u-(h>0?0:.14),1.07,a+.05,u+(h>0?.14:0),1.11,a+.08,Js))}}function T3(e){e=e||"all";let t=[],r=0,{x0:n,x1:o,xc:a,r:i,spring:s}=xe;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:o;if(t.push([f,0,r],[l,0,r],[l,s,r],[f,0,r],[l,s,r],[f,s,r]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,m=Math.PI*(f+1)/c;t.push([a,s,r],[a+i*Math.cos(l),s+i*Math.sin(l),r],[a+i*Math.cos(m),s+i*Math.sin(m),r])}return t}var nr=e=>e.toFixed(4);function k3(){let e=bc.map(n=>`vb = max(vb, barCover(abs(q.x - ${nr(n)}), ${nr(Cn/2)}, soft));`).join(`
		`),t=zf.map(n=>`hb = max(hb, barCover(abs(q.y - ${nr(n)}), ${nr(Cn/2)}, soft));`).join(`
		`),r=N1.map(n=>`ab = max(ab, barCover(abs(rr - ${nr(n)}), ${nr(Cn/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${nr(xe.x0)} - soft, ${nr(xe.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${nr(xe.x1)} - soft, ${nr(xe.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${nr(xe.xc)}, ${nr(xe.spring)}));
		float arch = q.y < ${nr(xe.spring)} ? 1.0 : 1.0 - smoothstep(${nr(xe.r)} - soft, ${nr(xe.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${nr(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${nr(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${nr(xe.xc)}, ${nr(xe.spring)}));
		float vb = barCover(abs(q.x - ${nr(xe.xc)}), ${nr(yr/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${nr(xe.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${nr(Ji)} - soft, ${nr(Ji)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${nr(xe.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${r}
		ab = q.y > ${nr(xe.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${nr(xe.x0+yr/2)}), ${nr(yr/2)}, soft),
			barCover(abs(q.x - ${nr(xe.x1-yr/2)}), ${nr(yr/2)}, soft));
		frame = q.y < ${nr(xe.spring)} ? frame : barCover(abs(rr - ${nr(xe.r-yr/2)}), ${nr(yr/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}I1.exports={addEntranceWall:S3,addSurround:P1,addFrames:A3,glassPanes:T3,doorLightGLSL:k3,DOOR:xe,WALL:.35}});var rs=pe((HE,q1)=>{"use strict";var ei=1.1583333333333334,ti=(13.05-8*.16)/9,Rf=ei+.16,Nf=ti+.16,Xo=14/2-7.75/2,ao=15,e0=Xo+7.75,pa=ao+13.05,Xn=.3,Yo={y:8+.18,inset:.15},Ja={y:8+.36,inset:Xn},Pf=8+.2,_c=8+.62,If=8+.9,Of=.016,D1=.28,$1=.66,L3=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>r/t)})(),z3=[9,0,0],pn=[10,0,0];function ts(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Rn(e,t,r,n,o,a,i){ts(e,[t,a,r],[n,a,r],[n,a,o],[t,a,o],[0,-1,0],i)}function Cf(e,t,r,n,o,a,i,s){ts(e,[t,a,r],[n,a,r],[n,i,r],[t,i,r],[0,0,1],s),ts(e,[n,a,o],[t,a,o],[t,i,o],[n,i,o],[0,0,-1],s),ts(e,[t,a,o],[t,a,r],[t,i,r],[t,i,o],[1,0,0],s),ts(e,[n,a,r],[n,a,o],[n,i,o],[n,i,r],[-1,0,0],s)}function O1(e,t,r,n,o){Rn(e,t[0],t[1],t[2],r[1],n,o),Rn(e,t[0],r[3],t[2],t[3],n,o),Rn(e,t[0],r[1],r[0],r[3],n,o),Rn(e,r[2],r[1],t[2],r[3],n,o)}var G1=e=>Xo+e*Rf,F1=e=>ao+e*Nf;function C3(e,t,r=48){let n=[Xo-Xn,ao-Xn,e0+Xn,pa+Xn],o=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=o(n,Yo.inset),i=o(n,Ja.inset);Rn(e,0,0,14,n[1],8,t),Rn(e,0,n[3],14,r,8,t),Rn(e,0,n[1],n[0],n[3],8,t),Rn(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],pn),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,pn),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],pn),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],pn),Cf(e,...n.slice(0,2),...n.slice(2),8,Yo.y,pn),O1(e,n,a,Yo.y,pn),Cf(e,...a.slice(0,2),...a.slice(2),Yo.y,Ja.y,pn),O1(e,a,i,Ja.y,pn);for(let f=1;f<6;f++){let l=G1(f)-.16;e.box(l,Pf,ao,l+.16,Ja.y,pa,pn)}for(let f=1;f<9;f++){let l=F1(f)-.16;e.box(Xo,Pf,l,e0,Ja.y,l+.16,pn)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let m=G1(l),h=F1(f);Cf(e,m,h,m+ei,h+ti,Ja.y,If,pn),Rn(e,m,h,m+ei,h+ti,If,z3),R3(e,m+ei/2,h+ti/2,ei/2,ti/2)}}function R3(e,t,r,n,o){let a=_c,i=Of;Rn(e,t-n,r-i,t+n,r+i,a,pn),Rn(e,t-i,r-o,t+i,r+o,a,pn);for(let s of[1,-1]){let c=Math.hypot(n,o),f=n/c,l=s*o/c,m=-l*i,h=f*i;ts(e,[t-f*c+m,a,r-l*c+h],[t+f*c+m,a,r+l*c+h],[t+f*c-m,a,r+l*c-h],[t-f*c-m,a,r-l*c-h],[0,-1,0],pn)}for(let s of[D1,$1]){let c=s*n,f=s*o;Rn(e,t-c-i,r-f-i,t+c+i,r-f+i,a,pn),Rn(e,t-c-i,r+f-i,t+c+i,r+f+i,a,pn),Rn(e,t-c-i,r-f+i,t-c+i,r+f-i,a,pn),Rn(e,t+c-i,r-f+i,t+c+i,r+f-i,a,pn)}}var Mt=e=>e.toFixed(4);function N3(){return`
	const vec3 SKY_SUN = vec3(${L3.map(Mt).join(", ")});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Mt(Xo)}, ${Mt(ao)});
		vec2 pitch = vec2(${Mt(Rf)}, ${Mt(Nf)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Mt(5)} || cell.y > ${Mt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Mt(ei)}, ${Mt(ti)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Mt(Of)} - soft, ${Mt(Of)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Mt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Mt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Mt(Yo.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Mt(Pf)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Mt(Ja.y)} - p.y) / L.y)).xz;
		float tG = (${Mt(_c)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Mt(If)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Mt(Xo-Xn)}, ${Mt(ao-Xn)}, ${Mt(e0+Xn)}, ${Mt(pa+Xn)}), soft)
		           * rectOpen(q1, vec4(${Mt(Xo-Xn+Yo.inset)}, ${Mt(ao-Xn+Yo.inset)}, ${Mt(e0+Xn-Yo.inset)}, ${Mt(pa+Xn-Yo.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Mt(Xo)}, ${Mt(ao)});
		vec2 pitch = vec2(${Mt(Rf)}, ${Mt(Nf)});
		vec2 paneHalf = vec2(${Mt(ei/2)}, ${Mt(ti/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Mt(D1)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Mt($1)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Mt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Mt(_c)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Mt(Xo)}, ${Mt(ao)}, ${Mt(e0)}, ${Mt(pa)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Mt(ao-3)}, ${Mt(ao+2)}, p.z)
		        * (1.0 - smoothstep(${Mt(pa-2)}, ${Mt(pa+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Mt(7.75/2)}, ${Mt(14/2)}, abs(p.x - ${Mt(14/2)}));
		return z * x;
	}`}q1.exports={addSkylight:C3,skylightGLSL:N3,Z_START:ao,Z_END:pa,GLASS_Y:_c,HEIGHT:8}});var Nn=pe((BE,W1)=>{"use strict";var os=Za(),$f=8,br=.35,Ie={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:$f},H1=(Ie.z1-Ie.z0)/2,Gf=Ie.crown-Ie.spring,Df=(Gf*Gf+H1*H1)/(2*Gf),qf=Ie.crown-Df;function ns(e){let t=e-Ie.zc;return qf+Math.sqrt(Math.max(0,Df*Df-t*t))}var nt={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},_o=Array.from({length:nt.count},(e,t)=>nt.first+t*nt.pitch),U1=_o.slice(1).map(e=>e-nt.pitch/2),P3=[_o[0],_o[2],_o[4]],Mc=[_o[1],_o[3]],$n={r:1.3,sill:.62,spring:3.3},ar=[0,0,0],t0=[11,0,0],va=[10,0,0],r0=[8,0,0];function nn(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function qn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function n0(e,t){let{u0:r,u1:n,w0:o,w1:a,top:i,holes:s,mat:c}=t,f=new Set([r,n]);for(let p of s){f.add(p.u0),f.add(p.u1);let g=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.08)));for(let x=1;x<g;x++)f.add(p.u0+(p.u1-p.u0)*x/g)}for(let p of t.cuts||[])f.add(p);let l=t.topStep||.5;for(let p=r;p<n;p+=l)f.add(p);let m=[...f].filter(p=>p>=r-1e-9&&p<=n+1e-9).sort((p,g)=>p-g),h=(p,g)=>p.bot?p.bot(g):p.bottom,u=(p,g)=>{let x=i(p),y=g.map(z=>[Math.max(0,h(z,p)),Math.min(z.head(p),x)]).filter(z=>z[1]>z[0]).sort((z,L)=>z[0]-L[0]),w=[],T=0;for(let z of y)z[0]>T+1e-6&&w.push([T,z[0]]),T=Math.max(T,z[1]);return x>T+1e-6&&w.push([T,x]),w},d=(p,g,x)=>[p,g,x];for(let p=0;p<m.length-1;p++){let g=m[p],x=m[p+1],y=(g+x)/2,w=s.filter(K=>y>K.u0&&y<K.u1),T=w.length?Math.max(g,Math.max(...w.map(K=>K.u0))+1e-7):g,z=w.length?Math.min(x,Math.min(...w.map(K=>K.u1))-1e-7):x,L=u(T,w),O=u(z,w),U=Math.min(L.length,O.length);for(let K=0;K<U;K++){let[Z,J]=L[K],[ce,H]=O[K];J-Z<1e-6&&H-ce<1e-6||(nn(e,d(g,Z,a),d(x,ce,a),d(x,H,a),d(g,J,a),[0,0,1],c),t.frontOnly||nn(e,d(x,ce,o),d(g,Z,o),d(g,J,o),d(x,H,o),[0,0,-1],c))}}t.noEnds||(nn(e,d(r,0,o),d(r,0,a),d(r,i(r),a),d(r,i(r),o),[-1,0,0],c),nn(e,d(n,0,a),d(n,0,o),d(n,i(n),o),d(n,i(n),a),[1,0,0],c));for(let p of s){if(p.noReveal)continue;let g=p.mat||t.revealMat||c,x=Math.max(0,h(p,p.u0+1e-7)),y=Math.max(0,h(p,p.u1-1e-7)),w=Math.min(p.head(p.u0+1e-7),i(p.u0)),T=Math.min(p.head(p.u1-1e-7),i(p.u1));w>x+1e-6&&nn(e,d(p.u0,x,a),d(p.u0,x,o),d(p.u0,w,o),d(p.u0,w,a),[1,0,0],g),T>y+1e-6&&nn(e,d(p.u1,y,o),d(p.u1,y,a),d(p.u1,T,a),d(p.u1,T,o),[-1,0,0],g);let z=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.06)));for(let L=0;L<z;L++){let O=p.u0+(p.u1-p.u0)*L/z,U=p.u0+(p.u1-p.u0)*(L+1)/z,K=Math.max(O,p.u0+1e-7),Z=Math.min(U,p.u1-1e-7),J=Math.min(p.head(K),i(O)),ce=Math.min(p.head(Z),i(U));if(!(J>=i(O)-1e-6&&ce>=i(U)-1e-6)){let de=U-O,ve=ce-J,it=Math.hypot(de,ve)||1;nn(e,d(O,J,o),d(U,ce,o),d(U,ce,a),d(O,J,a),[ve/it,-de/it,0],g)}let H=h(p,K),j=h(p,Z);if(H>1e-6||j>1e-6){let de=U-O,ve=j-H,it=Math.hypot(de,ve)||1;nn(e,d(U,j,o),d(O,H,o),d(O,H,a),d(U,j,a),[-ve/it,de/it,0],g)}}}}var Ff=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function I3(e,t){let r=$n.r,n=$n.sill,o=$n.spring,a=Ie.z0,i=24,s=(u,d,p)=>[t+Math.cos(u)*d,p,a-Math.sin(u)*d];for(let u=0;u<i;u++){let d=Math.PI*u/i,p=Math.PI*(u+1)/i,g=[-Math.cos(d),0,Math.sin(d)],x=[-Math.cos(p),0,Math.sin(p)],y=[e.vert(s(d,r,n),g,ar),e.vert(s(p,r,n),x,ar),e.vert(s(p,r,o),x,ar),e.vert(s(d,r,o),g,ar)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,f=(u,d)=>[t+Math.cos(u)*Math.cos(d)*r,o+Math.sin(d)*r,a-Math.sin(u)*Math.cos(d)*r],l=(u,d)=>[-Math.cos(u)*Math.cos(d),-Math.sin(d),Math.sin(u)*Math.cos(d)];for(let u=0;u<i;u++)for(let d=0;d<c;d++){let p=Math.PI*u/i,g=Math.PI*(u+1)/i,x=Math.PI/2*d/c,y=Math.PI/2*(d+1)/c,w=[e.vert(f(p,x),l(p,x),va),e.vert(f(g,x),l(g,x),va),e.vert(f(g,y),l(g,y),va),e.vert(f(p,y),l(p,y),va)];e.tri(w[0],w[1],w[2]),e.tri(w[0],w[2],w[3])}for(let u=1;u<8;u++){let d=Math.PI*u/8,p=[];for(let g=0;g<=10;g++){let x=Math.PI/2*g/10*.97;p.push(f(d,x).map((y,w)=>y-l(d,x)[w]*.02))}e.tube(p,g=>.035*(1-g*.6),12,6,{mat:()=>va})}let m=e.vert([t,n,a],[0,1,0],ar);for(let u=0;u<i;u++){let d=Math.PI*u/i,p=Math.PI*(u+1)/i;e.tri(m,e.vert(s(d,r,n),[0,1,0],ar),e.vert(s(p,r,n),[0,1,0],ar))}qn(e,t-r-.12,n-.1,a,t+r+.12,n+.02,a+.12,ar),qn(e,t-r-.16,n-.2,a,t+r+.16,n-.1,a+.07,ar);let h=.16;for(let u=0;u<i;u++){let d=Math.PI*u/i,p=Math.PI*(u+1)/i,g=(x,y,w)=>[t+Math.cos(x)*y,o+Math.sin(x)*y,w];nn(e,g(d,r,a+.05),g(p,r,a+.05),g(p,r+h,a+.05),g(d,r+h,a+.05),[0,0,1],ar),nn(e,g(d,r+h,a),g(p,r+h,a),g(p,r+h,a+.05),g(d,r+h,a+.05),[Math.cos((d+p)/2),Math.sin((d+p)/2),0],ar),nn(e,g(d,r,a),g(p,r,a),g(p,r,a+.05),g(d,r,a+.05),[-Math.cos((d+p)/2),-Math.sin((d+p)/2),0],ar)}for(let u of[-1,1]){let d=t+u*r,p=t+u*(r+h);qn(e,d,n,a,p,o,a+.05,ar),qn(e,d-u*.02,o-.12,a,p+u*.06,o,a+.09,ar)}qn(e,t-.11,o+r-.04,a,t+.11,o+r+h+.1,a+.09,ar),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>ar})}var O3=$n.sill+.4,G3=Ie.z0-.62;function F3(e){nn(e,[14,0,Ie.z0-br],[Ie.x1+br,0,Ie.z0-br],[Ie.x1+br,0,Ie.z1+br],[14,0,Ie.z1+br],[0,1,0],ar),e.curMat=t0,n0(e,{u0:14+br,u1:Ie.x1+2*br,w0:Ie.z0-2*br,w1:Ie.z0,top:()=>Ie.spring,holes:Mc.map(f=>({u0:f-$n.r,u1:f+$n.r,bottom:$n.sill,head:Ff(f,$n.r,$n.spring),noReveal:!0})),mat:t0,cuts:[Ie.x1]});for(let f of Mc)I3(e,f);e.save(),e.translate(0,0,Ie.z1),e.rotateY(Math.PI),e.translate(-(Ie.x1+2*br),0,-2*br);let t=f=>Ie.x1+2*br-f;n0(e,{u0:t(Ie.x1+2*br),u1:t(13.65),w0:0,w1:2*br,top:()=>Ie.spring,holes:_o.map(f=>({u0:t(f+nt.halfW),u1:t(f-nt.halfW),bottom:nt.sill,head:Ff(t(f),nt.halfW,nt.spring)})),mat:t0,revealMat:ar}),e.restore(),e.save(),e.translate(Ie.x1,0,0),e.rotateY(-Math.PI/2);let r=os.DOOR,n=Ie.zc,o=r.r;n0(e,{u0:Ie.z0-2*br,u1:Ie.z1+2*br,w0:-2*br,w1:0,top:f=>f<Ie.z0||f>Ie.z1?Ie.spring:ns(f),topStep:.15,holes:[{u0:n-o,u1:n+o,bottom:0,head:Ff(n,o,r.spring)}],mat:t0,revealMat:ar}),e.restore(),e.save(),e.translate(14+br,0,0),e.rotateY(-Math.PI/2),n0(e,{u0:Ie.z0,u1:Ie.z1,w0:-0,w1:2*br,top:()=>$f,topStep:.15,holes:[{u0:Ie.z0,u1:Ie.z1,bottom:0,head:f=>ns(f)}],mat:t0,revealMat:ar}),e.restore();let a=14+br,i=Math.ceil((Ie.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let l=a+(Ie.x1-a)*f/i,m=[];for(let h=0;h<=s;h++){let u=Ie.z0+(Ie.z1-Ie.z0)*h/s,d=ns(u),p=[0,qf-d,Ie.zc-u],g=Math.hypot(p[1],p[2]);m.push(e.vert([l,d,u],[0,p[1]/g,p[2]/g],va))}c.push(m)}for(let f=0;f<i;f++)for(let l=0;l<s;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function B1(e,t,r,n){let a=[];for(let i=0;i<=32;i++){let s=Ie.z0+(Ie.z1-Ie.z0)*i/32,c=ns(s),f=qf-c,l=Ie.zc-s,m=Math.hypot(f,l),h=[c+f/m*n,s+l/m*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,f/m,l/m]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];nn(e,[t-r,s.iy,s.iz],[t+r,s.iy,s.iz],[t+r,c.iy,c.iz],[t-r,c.iy,c.iz],s.n,ar),nn(e,[t-r,s.y,s.z],[t-r,s.iy,s.iz],[t-r,c.iy,c.iz],[t-r,c.y,c.z],[-1,0,0],ar),nn(e,[t+r,s.iy,s.iz],[t+r,s.y,s.z],[t+r,c.y,c.z],[t+r,c.iy,c.iz],[1,0,0],ar)}}function Ec(e,t,r,n){let i=r,s=r+n*.16;qn(e,t-.28,0,i,t+.28,Ie.spring-.3,s,ar),qn(e,t-.28-.06,0,i,t+.28+.06,.32,r+n*(.16+.05),ar),qn(e,t-.28-.05,Ie.spring-.3,i,t+.28+.05,Ie.spring-.1,r+n*(.16+.05),ar),qn(e,t-.28-.1,Ie.spring-.1,i,t+.28+.1,Ie.spring,r+n*(.16+.1),ar)}function D3(e,t){let r=ns(Ie.zc),n=[[0,r-.13,1],[.05,r-.125],[.12,r-.1],[.16,r-.06,1],[.22,r-.05],[.3,r-.075],[.4,r-.06],[.48,r-.03,1],[.55,r-.035],[.7,r-.025],[.82,r-.012,1],[.95,r+.03]];e.lathe(n,t,Ie.zc,48,{mat:()=>va});for(let o=0;o<8;o++){let a=o*Math.PI/4,i=t+Math.cos(a)*.32,s=Ie.zc+Math.sin(a)*.32;e.save(),e.translate(i,r-.07,s),e.rotateY(-a),e.curMat=va,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function $3(e){e.curMat=ar;for(let[t,r]of[[Ie.z0,1],[Ie.z1,-1]])qn(e,14.35,Ie.spring-.12,t,Ie.x1,Ie.spring,t+r*.1,ar),qn(e,14.35,Ie.spring-.04,t,Ie.x1,Ie.spring+.05,t+r*.18,ar);for(let[t,r]of[[Ie.z0,1],[Ie.z1,-1]])qn(e,14.35,0,t,Ie.x1,.42,t+r*.12,ar),qn(e,14.35,.42,t,Ie.x1,.5,t+r*.07,ar);for(let t of U1)B1(e,t,.24,.16),Ec(e,t,Ie.z0,1),Ec(e,t,Ie.z1,-1);for(let t of[14.35+.28,Ie.x1-.28])B1(e,t,.28,.22),Ec(e,t,Ie.z0,1),Ec(e,t,Ie.z1,-1);for(let t of _o)D3(e,t)}function q3(e){let t=Ie.z1+br,r=t-.04,n=t+.04,o=(s,c,f,l)=>qn(e,s,c,r,f,l,n,r0),a=nt.halfW,i=(s,c,f,l,m,h)=>{let u=(d,p,g)=>[s+p*Math.cos(d),nt.spring+p*Math.sin(d),g];for(let d=0;d<h;d++){let p=l+(m-l)*d/h,g=l+(m-l)*(d+1)/h;nn(e,u(p,c,r),u(g,c,r),u(g,f,r),u(p,f,r),[0,0,-1],r0),nn(e,u(p,f,n),u(g,f,n),u(g,c,n),u(p,c,n),[0,0,1],r0)}};for(let s of _o){let c=s-a,f=s+a;o(c,nt.sill,c+.07,nt.spring),o(f-.07,nt.sill,f,nt.spring),o(c,nt.sill,f,nt.sill+.07),o(c,nt.spring-.04,f,nt.spring+.04);for(let m of[-.5,0,.5])o(s+m*a-.022,nt.sill,s+m*a+.022,nt.spring);let l=6;for(let m=1;m<l;m++){let h=nt.sill+(nt.spring-nt.sill)*m/l;o(c,h-.02,f,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let m=1;m<6;m++){let h=Math.PI*m/6,u=Math.cos(h),d=Math.sin(h),p=.02,g=(x,y)=>[s+u*x-d*p*y,nt.spring+d*x+u*p*y];nn(e,[...g(.44,-1),r],[...g(a-.05,-1),r],[...g(a-.05,1),r],[...g(.44,1),r],[0,0,-1],r0),nn(e,[...g(.44,1),n],[...g(a-.05,1),n],[...g(a-.05,-1),n],[...g(.44,-1),n],[0,0,1],r0)}}}function H3(){let e=[],t=Ie.z1+br;for(let r of _o){let n=r-nt.halfW,o=r+nt.halfW;e.push([n,nt.sill,t],[o,nt.sill,t],[o,nt.spring,t],[n,nt.sill,t],[o,nt.spring,t],[n,nt.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([r,nt.spring,t],[r+nt.halfW*Math.cos(i),nt.spring+nt.halfW*Math.sin(i),t],[r+nt.halfW*Math.cos(s),nt.spring+nt.halfW*Math.sin(s),t])}}return e}function j1(e,t){e.save(),e.translate(Ie.x1+br,0,Ie.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function B3(e){j1(e,()=>{os.addSurround(e),os.addFrames(e,"fixed")})}function U3(e){return os.glassPanes(e||"fixed").map(([r,n,o])=>[Ie.x1+br-o,n,Ie.zc-7+r])}function j3(e){F3(e),$3(e),q3(e),B3(e),e.curMat=[0,0,0]}var W3={x:Ie.x1+br,zLo:Ie.zc-os.DOOR.r,zHi:Ie.zc+os.DOOR.r},Bt=e=>e.toFixed(4);function V3(){return`
	const vec3 WIN_SKY = vec3(0.0, 0.58, 0.81);

	float winBar(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the window wall is at (x, y) on its plane, 0..1
	float winOpen(vec2 q, float soft) {
		float k = floor((q.x - ${Bt(nt.first)}) / ${Bt(nt.pitch)} + 0.5);
		if (k < 0.0 || k > ${Bt(nt.count-1)}) return 0.0;
		float dx = q.x - (${Bt(nt.first)} + k * ${Bt(nt.pitch)});
		float side = 1.0 - smoothstep(${Bt(nt.halfW)} - soft, ${Bt(nt.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Bt(nt.sill)} - soft, ${Bt(nt.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Bt(nt.spring)}));
		float head = q.y < ${Bt(nt.spring)} ? 1.0 : 1.0 - smoothstep(${Bt(nt.halfW)} - soft, ${Bt(nt.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Bt(nt.halfW*.5)}), 0.022, soft));
		float rowH = ${Bt((nt.spring-nt.sill)/6)};
		float ry = (q.y - ${Bt(nt.sill)}) / rowH;
		cover = max(cover, q.y < ${Bt(nt.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Bt(nt.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Bt(Ie.x0)} || p.z < ${Bt(Ie.z0-.1)} || p.z > ${Bt(Ie.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Bt(Ie.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Bt(Ie.z1+2*br)} - p.z) / WIN_SKY.z;
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
		${Mc.map(e=>`{ float d = abs(p.x - ${Bt(e)}); if (d < best) { best = d; lamp = vec3(${Bt(e)}, ${Bt($n.spring+.55)}, ${Bt(Ie.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Bt(Ie.z0+1.6)} || p.z < ${Bt(Ie.z0-$n.r-.1)} || p.x < ${Bt(Ie.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Bt($n.r)}, ${Bt($n.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Bt(Ie.x0-1)}) return 0.0;
		float inC = smoothstep(${Bt(Ie.z0-1.5)}, ${Bt(Ie.z0)}, p.z) * smoothstep(${Bt(Ie.x0-1)}, ${Bt(Ie.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Bt(Ie.z0)}, ${Bt(Ie.z1)}, p.z);
		return inC * near;
	}`}W1.exports={wallWithHoles:n0,windowLightGLSL:V3,addWing:j3,windowGlass:H3,farDoorGlass:U3,atFarDoor:j1,FAR_DOOR:W3,vaultY:ns,C:Ie,NICHE_X:Mc,NICHE:$n,NICHE_PLINTH_TOP:O3,NICHE_STATUE_Z:G3,WIN:nt,winCentres:_o,piers:U1,PAINTING_X:P3,HEIGHT:$f}});var Eo=pe((UE,Y1)=>{"use strict";var Hf=Nn(),mr=8,ss=.35,ri=14,is=4,He={x0:ri+ss,x1:ri+ss+2*is,z0:5.9-is,z1:5.9+is,zc:5.9,cx:ri+ss+is,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:mr},oculus:3.3};He.domeTop=He.dome.base+He.dome.r;var cs={spokes:16,ringE:[.42,.95],bar:.035},Kr={sxz:1.32,sy:1.6,yaw:.6};Kr.crownC=[He.cx,.4+3.4*Kr.sy,He.zc];Kr.crownR=[2.3*Kr.sxz,1.9*Kr.sy,2.3*Kr.sxz];Kr.trunkR=.26*Kr.sxz;Kr.trunkTop=.4+2.2*Kr.sy;var V1={inner:1.05,outer:1.62,seat:.48,soil:.4},Tc=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(r=>r/t)})(),on=[0,0,0],as=[11,0,0],Sc=[10,0,0],Ac=[9,0,0],X3=[5,0,0],Bf=[3,0,0];function Ko(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Pn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}var Y3=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function K3(e){e.save(),e.translate(ri+ss,0,0),e.rotateY(-Math.PI/2),Hf.wallWithHoles(e,{u0:0,u1:Hf.C.z0,w0:0,w1:2*ss,top:()=>mr,holes:[{u0:He.zc-He.arch.r,u1:He.zc+He.arch.r,bottom:0,head:Y3(He.zc,He.arch.r,He.arch.spring),step:.05}],mat:as,revealMat:on,topStep:1}),e.restore();let t=ri-ss;for(let[i,s]of[[0,He.zc-He.arch.r],[He.zc+He.arch.r,Hf.C.z0]])Pn(e,t-.12,0,i,t,.42,s,on),Pn(e,t-.07,.42,i,t,.5,s,on);let r=t,n=.24,o=40,a=(i,s,c)=>[c,He.arch.spring+Math.sin(i)*s,He.zc+Math.cos(i)*s];for(let i=0;i<o;i++){let s=Math.PI*i/o,c=Math.PI*(i+1)/o;Ko(e,a(s,He.arch.r,r-.07),a(c,He.arch.r,r-.07),a(c,He.arch.r+n,r-.07),a(s,He.arch.r+n,r-.07),[-1,0,0],on),Ko(e,a(s,He.arch.r+n,r),a(c,He.arch.r+n,r),a(c,He.arch.r+n,r-.07),a(s,He.arch.r+n,r-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],on),Ko(e,a(s,He.arch.r,r),a(c,He.arch.r,r),a(c,He.arch.r,r-.07),a(s,He.arch.r,r-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],on)}Pn(e,r-.12,He.arch.spring+He.arch.r-.06,He.zc-.17,r,He.arch.spring+He.arch.r+n+.16,He.zc+.17,on);for(let i of[-1,1]){let s=He.zc+i*He.arch.r,c=He.zc+i*(He.arch.r+n);Pn(e,r-.07,0,s,r,He.arch.spring,c,on),Pn(e,r-.13,He.arch.spring-.16,s-i*.03,r,He.arch.spring,c+i*.08,on),Pn(e,r-.12,0,s-i*.03,r,.5,c+i*.06,on)}}function Q3(e){let{x0:t,x1:r,z0:n,z1:o}=He;Ko(e,[ri,0,n],[r,0,n],[r,0,o],[ri,0,o],[0,1,0],on),e.curMat=as,Ko(e,[r,0,n],[r,0,o],[r,mr,o],[r,mr,n],[-1,0,0],as),Ko(e,[t,0,n],[r,0,n],[r,mr,n],[t,mr,n],[0,0,1],as),Ko(e,[r,0,o],[t,0,o],[t,mr,o],[r,mr,o],[0,0,-1],as),Ko(e,[t,0,o],[t,0,n],[t,mr,n],[t,mr,o],[1,0,0],as),Pn(e,r-.12,0,n,r,.42,o,on),Pn(e,t,0,n,r,.42,n+.12,on),Pn(e,t,0,o-.12,r,.42,o,on),Pn(e,r-.2,mr-.3,n,r,mr,o,on),Pn(e,t,mr-.3,n,r,mr,n+.2,on),Pn(e,t,mr-.3,o-.2,r,mr,o,on),Pn(e,t,mr-.3,n,t+.2,mr,o,on);let a=He.dome.r,i=48,s=[];for(let x=0;x<=i;x++){let y=Math.PI*2*x/i;s.push([He.cx+Math.cos(y)*a,He.zc+Math.sin(y)*a])}let c=x=>{let y=Math.abs(Math.cos(x)),w=Math.abs(Math.sin(x));return Math.min(is/Math.max(y,1e-6),is/Math.max(w,1e-6))};for(let x=0;x<i;x++){let y=Math.PI*2*x/i,w=Math.PI*2*(x+1)/i,T=c(y),z=c(w),L=[He.cx+Math.cos(y)*T,mr,He.zc+Math.sin(y)*T],O=[He.cx+Math.cos(w)*z,mr,He.zc+Math.sin(w)*z];Ko(e,[s[x][0],mr,s[x][1]],[s[x+1][0],mr,s[x+1][1]],O,L,[0,-1,0],Sc)}e.lathe([[a+.02,mr-.18,1],[a-.12,mr-.18,1],[a-.12,mr-.06,1],[a-.05,mr,1],[a,mr+.02]],He.cx,He.zc,i,{mat:()=>on});let f=16,l=(x,y,w)=>[He.cx+Math.cos(x)*Math.cos(y)*w,He.dome.base+Math.sin(y)*w,He.zc+Math.sin(x)*Math.cos(y)*w],m=Math.PI/2;for(let x=0;x<i;x++)for(let y=0;y<f;y++){let w=Math.PI*2*x/i,T=Math.PI*2*(x+1)/i,z=m*y/f,L=m*(y+1)/f,O=(K,Z)=>[-Math.cos(K)*Math.cos(Z),-Math.sin(Z),-Math.sin(K)*Math.cos(Z)],U=[e.vert(l(w,z,a),O(w,z),Ac),e.vert(l(T,z,a),O(T,z),Ac),e.vert(l(T,L,a),O(T,L),Ac),e.vert(l(w,L,a),O(w,L),Ac)];e.tri(U[0],U[1],U[2]),e.tri(U[0],U[2],U[3])}for(let x=0;x<cs.spokes;x++){let y=Math.PI*2*x/cs.spokes,w=[];for(let T=0;T<=14;T++)w.push(l(y,(m-.06)*T/14,a-.04));e.tube(w,()=>.04,20,6,{mat:()=>Sc})}for(let x of cs.ringE){let y=Math.cos(x)*(a-.04),w=He.dome.base+Math.sin(x)*(a-.04),T=[];for(let z=0;z<=72;z++){let L=Math.PI*2*z/72;T.push([He.cx+Math.cos(L)*y,w,He.zc+Math.sin(L)*y])}e.tube(T,()=>.035,72,6,{mat:()=>Sc})}e.ellipsoid([He.cx,He.dome.base+a-.06,He.zc],[.16,.08,.16],6,12,{mat:()=>Sc});let h=.46,u=.55,d=.12,p=(x,y,w,T)=>{Pn(e,x,h-.08,y,w,h,T,Bf);let z=w-x>T-y?[x+.25,w-.25]:[x+.06,w-.06],L=w-x>T-y?[y+.06,T-.06]:[y+.25,T-.25];Pn(e,z[0],0,L[0],z[1],h-.08,L[1],Bf)};p(r-d-u,n+1.1,r-d,o-1.1),p(t+1,n+d,r-1.1,n+d+u),p(t+1,o-d-u,r-1.1,o-d);let g=V1;e.lathe([[g.outer,0,1],[g.outer,g.seat-.1,1],[g.outer+.07,g.seat-.07,1],[g.outer+.07,g.seat,1],[g.inner-.05,g.seat,1],[g.inner-.05,g.seat-.06,1],[g.inner,g.seat-.08,1],[g.inner,g.soil]],He.cx,He.zc,64,{mat:()=>Bf}),e.lathe([[g.inner,g.soil,1],[0,g.soil+.03]],He.cx,He.zc,48,{mat:()=>X3})}function Z3(e){K3(e),Q3(e),e.curMat=[0,0,0]}var ir=e=>e.toFixed(4);function X1(){let e=He.dome.r,t=cs.ringE.map(r=>Math.cos(r)*e);return`
	const vec3 SHAFT = vec3(${ir(Tc[0])}, ${ir(Tc[1])}, ${ir(Tc[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${ir(He.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${ir(He.cx)}, ${ir(He.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${ir(e-.15)} - soft, ${ir(e-.15)} + soft, d);
		float hw = ${ir(cs.bar)};
		float cover = 0.0;
		${t.map(r=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${ir(r)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${ir(Math.PI*2/cs.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${ir(Kr.crownC[0])}, ${ir(Kr.crownC[1])}, ${ir(Kr.crownC[2])});
		vec3 r = vec3(${ir(Kr.crownR[0])}, ${ir(Kr.crownR[1])}, ${ir(Kr.crownR[2])});
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
		float tt = (${ir(Kr.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${ir(He.cx)}, ${ir(He.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${ir(Kr.trunkR*.7)}, ${ir(Kr.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function J3(){return`
	${X1()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${ir(He.x0-.75)} || p.z < ${ir(He.z0-.5)} || p.z > ${ir(He.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${ir(He.x0-1.5)} || p.z < ${ir(He.z0-1.5)} || p.z > ${ir(He.z1+1.5)}) return 0.0;
		float inside = smoothstep(${ir(He.x0-1.2)}, ${ir(He.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${ir(He.cx)}, ${ir(He.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Y1.exports={addAlcove:Z3,alcoveLightGLSL:J3,oculusGLSL:X1,A:He,BENCH:V1,SHAFT:Tc,TREE:Kr}});var En=pe((jE,Q1)=>{"use strict";var Go=0;try{let e=location.search;/[?&]night\b/.test(e)&&(Go=1)}catch(e){}var ma=Go,Uf=0,K1=[],kc={tick(e){let t=Uf?Math.min(.1,e-Uf):0;if(Uf=e,ma!==Go){let r=t/2.4;ma=Go>ma?Math.min(Go,ma+r):Math.max(Go,ma-r)}return kc.night},get night(){return ma*ma*(3-2*ma)},get isNight(){return Go===1},set(e){Go=e?1:0,K1.forEach(t=>t(Go))},toggle(){kc.set(!Go)},onChange(e){K1.push(e)}};kc.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;Q1.exports=kc});var ni=pe((WE,i0)=>{"use strict";var jf=En(),{C:Wf}=Nn(),{A:Lc,BENCH:o0}=Eo(),Qr=Math.PI,e5=[18,29,40],zc=.575,ga=[],a0=(e,t,r,n,o,a,i)=>ga.push(Object.assign({x:e,y:t,z:r,o:n,back:o,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));e5.forEach(e=>{a0(1.25+zc+.48,3.25,e,[1,0],.48,zc,{s:1.2}),a0(12.75-zc-.48,3.25,e,[-1,0],.48,zc,{s:1.2})});[3,11].forEach(e=>a0(e,3.45,Wf.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var t5=[14.63,19.63,24.03,28.43,32.83,Wf.x1-.28];t5.forEach(e=>a0(e,3.15,Wf.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>a0(.35+.44,2.75,e,[1,0],.44,99));{let e=(o0.inner+o0.outer)/2,t=Math.atan2(-1.12,-.98);ga.push({x:Lc.cx+Math.cos(t)*e,y:o0.seat+.155,z:Lc.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[Lc.cx,Lc.zc,o0.outer+.07,o0.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Vf=.13,Cc=.21,an=Vf/Math.cos(Qr/6),Jt=e=>e.toFixed(4);function Z1(e){let r=(e||ga.map((n,o)=>o)).map(n=>{let o=ga[n],a=-o.o[1],i=o.o[0],s=o.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Jt(o.ring[3]-.03)}) {
					float tt = ${Jt(o.y-o.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Jt(o.x)}, ${Jt(o.z)}) + D.xz * tt - vec2(${Jt(o.ring[0])}, ${Jt(o.ring[1])});
					T *= smoothstep(${Jt(o.ring[2]-.02)}, ${Jt(o.ring[2]+.12)}, length(hit));
				}`:"",c=o.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Jt(o.o[0])}, ${Jt(o.o[1])}));
					if (behind > ${Jt(o.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Jt(a)}, ${Jt(i)}))) * ${Jt(o.back)} / behind;
						T *= smoothstep(${Jt(o.hw-.04)}, ${Jt(o.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Jt(o.x)}, ${Jt(o.y)}, ${Jt(o.z)});
				float d2 = dot(D, D);
				if (d2 < ${Jt(o.range*o.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Jt(Math.cos(Math.atan2(o.o[1],o.o[0])))}, s = ${Jt(Math.sin(Math.atan2(o.o[1],o.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Jt(n*1.7)}) + 0.04 * sin(time * 15.3 + ${Jt(n*2.9)}) * sin(time * 1.9 + ${Jt(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Jt(1/(o.s*o.s))}) * (1.0 - smoothstep(${Jt(o.range*.6)}, ${Jt(o.range)}, d));
					sum += ${Jt(o.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Jt(Qr/6)}, ${Jt(Qr/3)}) - ${Jt(Qr/6)};
		float U = tan(t) / ${Jt(Math.tan(Qr/6))};
		float V = (q.y / h) * (${Jt(Vf/Cc)} / cos(t));
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
		${r}
		return vec3(1.0, 0.72, 0.38) * sum * 2.8 * night;
	}`}var wr=0,r5=1;function n5(){let e=[],t=[],r=[],n=[],o=[],a=(u,d,p,g)=>(e.push(u[0],u[1],u[2]),t.push(d[0],d[1],d[2]),r.push(p),n.push(g?g[0]:0,g?g[1]:0),e.length/3-1),i=(u,d)=>[u[0]-d[0],u[1]-d[1],u[2]-d[2]],s=(u,d)=>[u[1]*d[2]-u[2]*d[1],u[2]*d[0]-u[0]*d[2],u[0]*d[1]-u[1]*d[0]],c=u=>{let d=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/d,u[1]/d,u[2]/d]};function f(u,d,p,g,x,y){let w=c(s(i(d,u),i(g,u))),T=a(u,w,x,[0,0]),z=a(d,w,x,[1,0]),L=a(p,w,x,[1,1]),O=a(g,w,x,[0,1]);o.push(T,z,L,T,L,O),y&&o.push(T,L,z,T,O,L)}function l(u,d,p){for(let y=0;y<u.length;y++){let w=u[Math.max(0,y-1)],T=u[Math.min(u.length-1,y+1)],z=c(i(T,w)),L=Math.abs(z[1])>.9?[1,0,0]:[0,1,0],O=c(s(z,L)),U=s(O,z),K=typeof d=="function"?d(y/(u.length-1)):d;for(let Z=0;Z<=6;Z++){let J=Z/6*Qr*2,ce=Math.cos(J),H=Math.sin(J),j=[O[0]*ce+U[0]*H,O[1]*ce+U[1]*H,O[2]*ce+U[2]*H];a([u[y][0]+j[0]*K,u[y][1]+j[1]*K,u[y][2]+j[2]*K],j,p)}}let x=e.length/3-u.length*7;for(let y=0;y<u.length-1;y++)for(let w=0;w<6;w++){let T=x+y*7+w,z=T+6+1;o.push(T,z,T+1,T+1,z,z+1)}}function m(u,d,p,g,x,y,w,T,z){let L=(O,U,K)=>{let Z=y+Qr/6+K*Qr/3;return[u[0]+Math.cos(Z)*O,U,u[2]+Math.sin(Z)*O]};for(let O=0;O<6;O++)f(L(g,d,O+1),L(g,d,O),L(x,p,O),L(x,p,O+1),w);if(T&&x>0)for(let O=0;O<6;O++){let U=a([u[0],p,u[2]],[0,1,0],w),K=a(L(x,p,O),[0,1,0],w),Z=a(L(x,p,O+1),[0,1,0],w);o.push(U,Z,K)}if(z&&g>0)for(let O=0;O<6;O++){let U=a([u[0],d,u[2]],[0,-1,0],w),K=a(L(g,d,O),[0,-1,0],w),Z=a(L(g,d,O+1),[0,-1,0],w);o.push(U,K,Z)}}function h(u,d,p,g,x,y,w){let T=[];for(let L=0;L<=18;L++){let O=L/18,U=(w||0)+O*g*Qr*2,K=p*(1-.75*O);T.push([u[0]+d[0]*Math.cos(U)*K,u[1]+Math.sin(U)*K,u[2]+d[2]*Math.cos(U)*K])}l(T,x,y)}return ga.forEach(u=>{let d=u.s,p=Math.atan2(u.o[1],u.o[0]),g=[u.x,u.y,u.z],x=(T,z,L)=>[u.x+u.o[0]*T-u.o[1]*(L||0),u.y+z,u.z+u.o[1]*T+u.o[0]*(L||0)],y=u.y-Cc*d,w=u.y+Cc*d;for(let T=0;T<6;T++){let z=p+Qr/6+T*Qr/3,L=z+Qr/3,O=an*d*.97,U=[u.x+Math.cos(z)*O,y,u.z+Math.sin(z)*O],K=[u.x+Math.cos(L)*O,y,u.z+Math.sin(L)*O];f(K,U,[U[0],w,U[2]],[K[0],w,K[2]],r5,!0)}for(let T=0;T<6;T++){let z=p+Qr/6+T*Qr/3,L=an*d;l([[u.x+Math.cos(z)*L,y-.02*d,u.z+Math.sin(z)*L],[u.x+Math.cos(z)*L,w+.02*d,u.z+Math.sin(z)*L]],.011*d,wr)}m(g,y-.035*d,y,an*d*1.12,an*d*1.12,p,wr,!0,!0),m(g,y-.1*d,y-.035*d,an*d*.55,an*d*1,p,wr,!1,!0),m(g,y-.17*d,y-.1*d,0,an*d*.55,p,wr,!1,!1);for(let T=0;T<6;T++){let z=p+T*Qr/3,L=Vf*d*1.06,O=[u.x+Math.cos(z)*L,y-.06*d,u.z+Math.sin(z)*L];h(O,[-Math.sin(z),0,Math.cos(z)],.03*d,.85,.004*d,wr,.3)}m(g,w,w+.03*d,an*d*1.14,an*d*1.14,p,wr,!1,!0),m(g,w+.03*d,w+.2*d,an*d*1.14,an*d*.32,p,wr,!1,!1),m(g,w+.2*d,w+.27*d,an*d*.34,an*d*.34,p,wr,!1,!1),m(g,w+.27*d,w+.37*d,an*d*.42,0,p,wr,!1,!0),l([[u.x,w+.36*d,u.z],[u.x,w+.47*d,u.z]],T=>.01*d*(1-.7*T),wr),m([u.x,0,u.z],w+.44*d,w+.47*d,.018*d,0,p,wr,!1,!0);for(let T=0;T<6;T++){let z=p+Qr/6+T*Qr/3,L=an*d*1.14,O=[u.x+Math.cos(z)*L,w+.03*d,u.z+Math.sin(z)*L];l([O,[O[0],O[1]+.09*d,O[2]]],U=>.008*d*(1-.8*U),wr),m([O[0],0,O[2]],O[1]+.035*d,O[1]+.06*d,.014*d,.014*d,z,wr,!0,!0)}if(u.mount==="wall"){let T=u.back,z=y-.32,L=x(-T,0,0);((J,ce,H)=>{let j=[u.o[0],0,u.o[1]],de=[-u.o[1],0,u.o[0]],ve=(ht,bt,_t)=>[L[0]+de[0]*ht+j[0]*_t,bt,L[2]+de[2]*ht+j[2]*_t],it=.03,_e=.065;f(ve(-H,J,_e),ve(H,J,_e),ve(H,ce,_e),ve(-H,ce,_e),wr,!0),f(ve(H,J,it),ve(H,J,_e),ve(H,ce,_e),ve(H,ce,it),wr,!0),f(ve(-H,J,_e),ve(-H,J,it),ve(-H,ce,it),ve(-H,ce,_e),wr,!0),f(ve(-H,ce,_e),ve(H,ce,_e),ve(H,ce,it),ve(-H,ce,it),wr,!0),f(ve(-H,J,it),ve(H,J,it),ve(H,J,_e),ve(-H,J,_e),wr,!0),m([L[0]+j[0]*_e,0,L[2]+j[2]*_e],ce,ce+.05,H*.6,0,p,wr,!1,!0),m([L[0]+j[0]*_e,0,L[2]+j[2]*_e],J-.05,J,0,H*.6,p,wr,!1,!1)})(z-.2,z+.2,.07);let U=[];for(let J=0;J<=14;J++){let ce=J/14,H=-T+.05+ce*(T-.05),j=z+.04+(y-.17*d-z-.04)*Math.pow(ce,2.2);U.push(x(H,j-u.y,0))}l(U,J=>.022*(1-.3*J),wr);let K=[];for(let J=0;J<=10;J++){let ce=J/10;K.push(x(-T+.05+ce*T*.6,z-.14+ce*.16+.05*Math.sin(ce*Qr)-u.y,0))}l(K,.009,wr);let Z=K[K.length-1];h([Z[0]-u.o[0]*.03,Z[1]+.02,Z[2]-u.o[1]*.03],[u.o[0],0,u.o[1]],.045,1.1,.007,wr,-.4),[.3,.55].forEach(J=>{let ce=U[Math.round(J*14)],H=K[Math.round(J/.62*10)]||K[10];l([ce,H],.006,wr)}),[-1,1].forEach(J=>{let ce=x(-.05,-Cc*d-.2*d,0);h([ce[0]-u.o[1]*J*.05,ce[1],ce[2]+u.o[0]*J*.05],[-u.o[1]*J,0,u.o[0]*J],.05*d,.9,.006,wr,Qr)})}else for(let T=0;T<3;T++){let z=p+T*Qr*2/3,L=[u.x+Math.cos(z)*an*d*.7,y-.035*d,u.z+Math.sin(z)*an*d*.7],O=[u.x+Math.cos(z)*an*d*1.25,y-.17*d,u.z+Math.sin(z)*an*d*1.25];l([L,O],.012*d,wr)}}),{pos:e,nrm:t,kind:r,uv:n,elems:o}}i0.exports=e=>{let t=n5(),r=e({vert:`
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
		${Z1()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>jf.night}}),n=[],o=[];ga.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),o.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{corner:n,at:o},count:n.length/2,uniforms:{time:e.context("time"),night:()=>jf.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r(),jf.night>.01&&a()}};i0.exports.lanternGLSL=Z1;i0.exports.LANTERNS=ga;i0.exports.TREE_LANTERN=[ga.length-1]});var s0=pe((VE,lo)=>{"use strict";var J1=En(),ya=Math.PI,rt=e=>(+e).toFixed(4),Fo=e=>`vec3(${rt(e[0])}, ${rt(e[1])}, ${rt(e[2])})`,vr={x0:-2.05,z0:41.45,z1:47.55,top:5.1},er=-.55,Zr=-2,Gr=42.25,ln=43.65,co=45.35,In=46.75,sn=2.75,Mo=.12,o5=(er+Zr)/2,sr={x:-1.3,y:1.42,w:.42,h:.52,z:ln,cell:.026},dt={x0:-1.85,x1:-.75,top:.98,z0:ln-.3,z1:ln-.02},io={x0:-1.44,x1:-1.16,y0:dt.top-.002,y1:dt.top+.018},Yn={cx:-1.3,cz:ln-.165,w:.2,d:.255,y:dt.top+.0012},vn={x:-1.03,z:ln-.14,r:.042,h:.075},gr={x:-.86,z:ln-.12,h:.085,r:.019};gr.flame=[gr.x,dt.top+.012+gr.h+.028,gr.z];var Nc={a:[vn.x-.004,dt.top+.03,vn.z+.004],b:[vn.x-.13,dt.top+.34,vn.z-.12]},Sr=[-1.5,2.42,44.66],Vr=[-1.78,1.95,Gr+.09],so={x:-1.32,z:44.08,y:.64,heading:.32},a5={window:{eye:[-1.3,1.33,42.8],target:[sr.x,1.37,ln],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[Yn.cx,dt.top,Yn.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},xa={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function ep(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${rt(sr.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Fo(Sr)};
		if (d.z > -0.001) return 0.0;
		float t = (${rt(sr.z)} - ${rt(Sr[2])}) / d.z;
		vec2 g = (${Fo(Sr)} + d * t).xy - vec2(${rt(sr.x)}, ${rt(sr.y)});
		float inWin = (1.0 - smoothstep(${rt(sr.w/2-.01)}, ${rt(sr.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${rt(sr.h/2-.01)}, ${rt(sr.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${rt(sr.z)}) / abs(${rt(sr.z)} - ${rt(Sr[2])}) / ${rt(sr.cell)};
		vec2 qc = fract(g / ${rt(sr.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Fo(gr.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${rt(vn.x)}, ${rt(vn.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${rt(vn.x)}, ${rt(vn.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${rt(vn.r*.7)}, ${rt(vn.r*1.6)}, r)) * (1.0 - smoothstep(${rt(dt.top+vn.h*.8)}, ${rt(dt.top+vn.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Fo(Nc.a)}, qb = ${Fo(Nc.b)};
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
		bool inB1 = p.z < ${rt(ln)} && p.z > ${rt(Gr-.04)} && p.x < ${rt(er+.02)};
		bool inPriest = p.z >= ${rt(ln)} && p.z < ${rt(co)} && p.x < ${rt(er)};
		bool inB2 = p.z >= ${rt(co)} && p.z < ${rt(In+.04)} && p.x < ${rt(er)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${rt(Zr)}, ${rt(er)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${rt(vr.x0)}, 0.3, p.x));
		vec3 hall = vec3(1.25, 1.12, 0.94) * (0.62 + 0.38 * max(N.x, 0.0)) * (0.8 + 0.2 * N.y);
		vec3 col = toNight(hall * open, 0.55) * mix(1.0, (inB1 || inPriest || inB2) ? 0.3 : 0.55, night);
		// the lamp, warm, behind the brass
		vec3 Ld = ${Fo(Sr)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Fo(Vr)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Fo(gr.flame)} - p;
			float dc = length(Cd);
			vec3 Lc = Cd / dc;
			float fl = candleFlicker();
			float sh = candleShadow(p);
			vec3 cc = vec3(1.0, 0.60, 0.28) * fl * sh * night * (inPriest || inB2 ? 0.0 : 1.0);
			col += cc * (max(dot(N, Lc), 0.0) * 0.85 + 0.15) * 0.42 / (0.02 + dc * dc * 1.2);
			spec += cc * pow(max(dot(N, normalize(Lc + V)), 0.0), mix(8.0, 70.0, gloss)) * gloss * 0.10 / (0.02 + dc * dc * 1.2);
		}
		// the gallery's lanterns, outside the booths
		if (!(inB1 || inPriest || inB2)) col += lanternLight(p, N) * open;
		return col;
	}`}var cn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function tp(){let e=[],t=[],r=[],n=[],o=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],i=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],s=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:r,uv:n,idx:o,norm:s,cross:i,sub:a};return c.v=(f,l,m,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),r.push(m),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,m,h,u,d)=>{let p=s(i(a(l,f),a(h,f)));d=d||[[0,0],[1,0],[1,1],[0,1]];let g=c.v(f,p,u,d[0]),x=c.v(l,p,u,d[1]),y=c.v(m,p,u,d[2]),w=c.v(h,p,u,d[3]);o.push(g,x,y,g,y,w)},c.box=(f,l,m,h,u,d,p)=>{let g=(x,y,w,T,z,L,O,U)=>c.quad(x,y,w,T,p,[[z,O],[L,O],[L,U],[z,U]]);g([h,l,m],[h,l,d],[h,u,d],[h,u,m],m,d,l,u),g([f,l,d],[f,l,m],[f,u,m],[f,u,d],d,m,l,u),g([f,u,m],[h,u,m],[h,u,d],[f,u,d],f,h,m,d),g([f,l,d],[h,l,d],[h,l,m],[f,l,m],f,h,d,m),g([f,l,d],[h,l,d],[h,u,d],[f,u,d],f,h,l,u),g([h,l,m],[f,l,m],[f,u,m],[h,u,m],h,f,l,u)},c.tube=(f,l,m,h)=>{h=h||6;let u=e.length/3;for(let d=0;d<f.length;d++){let p=f[Math.max(0,d-1)],g=f[Math.min(f.length-1,d+1)],x=s(a(g,p)),y=Math.abs(x[1])>.9?[1,0,0]:[0,1,0],w=s(i(x,y)),T=i(w,x),z=typeof l=="function"?l(d/(f.length-1)):l;for(let L=0;L<=h;L++){let O=L/h*ya*2,U=Math.cos(O),K=Math.sin(O),Z=[w[0]*U+T[0]*K,w[1]*U+T[1]*K,w[2]*U+T[2]*K];c.v([f[d][0]+Z[0]*z,f[d][1]+Z[1]*z,f[d][2]+Z[2]*z],Z,m,[d/(f.length-1),L/h])}}for(let d=0;d<f.length-1;d++)for(let p=0;p<h;p++){let g=u+d*(h+1)+p,x=g+h+1;o.push(g,g+1,x,g+1,x+1,x)}},c.lathe=(f,l,m,h,u)=>{u=u||20;let d=e.length/3;for(let p=0;p<m.length;p++){let[g,x]=m[p],y=m[Math.max(0,p-1)],w=m[Math.min(m.length-1,p+1)],T=w[0]-y[0],z=w[1]-y[1];for(let L=0;L<=u;L++){let O=L/u*ya*2,U=Math.cos(O),K=Math.sin(O),Z=s([z*U,-T,z*K]);c.v([f+U*g,x,l+K*g],Z,h,[L/u,p/(m.length-1)])}}for(let p=0;p<m.length-1;p++)for(let g=0;g<u;g++){let x=d+p*(u+1)+g,y=x+u+1;o.push(x,y,x+1,x+1,y,y+1)}},c.spire=(f,l,m,h,u,d)=>{let p=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let g=0;g<4;g++){let x=p[g],y=p[(g+1)%4],w=[f+x[0],m,l+x[1]],T=[f+y[0],m,l+y[1]],z=[f,u,l],L=s(i(a(z,w),a(T,w))),O=c.v(w,L,d,[0,0]),U=c.v(T,L,d,[1,0]),K=c.v(z,L,d,[.5,1]);o.push(O,K,U)}},c.orient=()=>{for(let f=0;f<o.length;f+=3){let[l,m,h]=[o[f],o[f+1],o[f+2]],u=g=>[e[g*3],e[g*3+1],e[g*3+2]],d=i(a(u(m),u(l)),a(u(h),u(l))),p=[0,1,2].map(g=>t[l*3+g]+t[m*3+g]+t[h*3+g]);d[0]*p[0]+d[1]*p[1]+d[2]*p[2]<0&&(o[f+1]=h,o[f+2]=m)}return c},c}function Rc(e,t,r,n){if(e<=t)return r;let o=e-t;return o>=n?0:Math.max(0,Math.sqrt(n*n-o*o)-(n-r))}var _r={ys:1.78,a:.56,r:.78};_r.apex=_r.ys+Math.sqrt(_r.r*_r.r-(_r.r-_r.a)*(_r.r-_r.a));function i5(){let e=tp(),t=cn.WOOD,r=cn.CARVED,n=cn.DARKWOOD,o=.06;e.box(Zr,0,Gr,er+.08,Mo,In,n),e.box(Zr,sn-.06,Gr-.04,er+.1,sn,In+.04,t),e.box(er,sn-.2,Gr-.06,er+.12,sn-.06,In+.06,t),e.box(er+.02,sn,Gr-.08,er+.14,sn+.07,In+.08,n),e.box(Zr,Mo,Gr,Zr+.04,sn-.06,In,t);for(let[l,m,h]of[[Gr-o,Gr,-1],[In,In+o,1]]){e.box(Zr,0,l,er+.08,sn,m,t);let u=h<0?l-.018:m;e.box(Zr+.18,.45,Math.min(u,u+.018),er-.12,2.35,Math.max(u,u+.018),n),e.box(Zr+.26,.55,Math.min(u,u+.03*h),er-.2,2.25,Math.max(u,u+.03*h),t)}{let l=ln-.02,m=ln+.02,h=sr.x-sr.w/2,u=sr.x+sr.w/2,d=sr.y-sr.h/2,p=sr.y+sr.h/2;e.box(Zr,Mo,l,er,io.y0,m,t),e.box(Zr,io.y0,l,io.x0,io.y1,m,t),e.box(io.x1,io.y0,l,er,io.y1,m,t),e.box(Zr,io.y1,l,er,d,m,t),e.box(Zr,d,l,h,p,m,t),e.box(u,d,l,er,p,m,t),e.box(Zr,p,l,er,sn-.06,m,t);let g=.05,x=l-.025;e.box(h-g,d-g,x,u+g,d,l,n),e.box(h-g,p,x,u+g,p+g,l,n),e.box(h-g,d,x,h,p,l,n),e.box(u,d,x,u+g,p,l,n),e.box(h-g-.02,p+g,x-.015,u+g+.02,p+g+.03,l,t),e.box(io.x0-.01,io.y1,l-.006,io.x1+.01,io.y1+.008,l,cn.BRASS)}e.box(Zr,Mo,co-.02,er,sn-.06,co+.02,t),e.box(dt.x0,dt.top-.035,dt.z0,dt.x1,dt.top,dt.z1,t),e.tube([[dt.x0,dt.top-.018,dt.z0],[dt.x1,dt.top-.018,dt.z0]],.02,t,8);for(let l of[dt.x0+.1,dt.x1-.1]){let m=[];for(let h=0;h<=8;h++){let u=h/8;m.push([l,dt.top-.04-.22*u,dt.z1-.02-.22*Math.cos(u*ya/2)])}e.tube(m,.018,n,6)}e.box(Zr+.06,.12,Gr,er-.1,.44,Gr+.42,n),e.box(Zr+.08,.44,Gr+.01,er-.12,.52,Gr+.41,cn.CUSHION),e.box(Zr+.06,.12,In-.42,er-.1,.44,In,n),e.box(Vr[0]-.05,Vr[1]-.16,Gr,Vr[0]+.05,Vr[1]-.02,Gr+.012,cn.BRASS),e.tube([[Vr[0],Vr[1]-.09,Gr+.012],[Vr[0],Vr[1]-.09,Vr[2]-.01],[Vr[0],Vr[1]-.05,Vr[2]]],.006,cn.BRASS,6),e.lathe(Vr[0],Vr[2],[[0,Vr[1]-.05],[.028,Vr[1]-.035],[.034,Vr[1]+.01],[.024,Vr[1]+.06],[.026,Vr[1]+.065]],cn.LAMPGLASS,16),e.box(so.x-.22,.12,so.z-.24,so.x+.22,so.y-.05,so.z+.16,n),e.box(so.x-.24,so.y-.05,so.z-.26,so.x+.24,so.y,so.z+.18,cn.CUSHION),e.tube([[Sr[0],sn-.06,Sr[2]],[Sr[0],Sr[1]+.07,Sr[2]]],.005,cn.BRASS,5),e.lathe(Sr[0],Sr[2],[[0,Sr[1]+.09],[.03,Sr[1]+.08],[.02,Sr[1]+.06]],cn.BRASS,12),e.lathe(Sr[0],Sr[2],[[0,Sr[1]-.06],[.035,Sr[1]-.04],[.045,Sr[1]],[.035,Sr[1]+.05],[.018,Sr[1]+.07]],cn.LAMPGLASS,16);let a=er,i=er+o;function s(l,m,h){let u=(l+m)/2,d=40,p=[];for(let x=0;x<=d;x++)p.push(Mo+(sn-.2-Mo)*x/d);let g=[];p.forEach(x=>g.push(x));for(let x=1;x<24;x++)g.push(_r.ys+(_r.apex-_r.ys)*x/24);g.sort((x,y)=>x-y);for(let x=0;x<g.length-1;x++){let y=g[x],w=g[x+1];if(w-y<1e-4)continue;let T=h?Rc(y,_r.ys,_r.a,_r.r):0,z=h?Rc(w,_r.ys,_r.a,_r.r):0,L=(O,U)=>[O,U];e.quad([i,y,u-T],[i,y,l],[i,w,l],[i,w,u-z],t,[L(u-T,y),L(l,y),L(l,w),L(u-z,w)]),e.quad([i,y,m],[i,y,u+T],[i,w,u+z],[i,w,m],t,[L(m,y),L(u+T,y),L(u+z,w),L(m,w)]),(T>0||z>0)&&(e.quad([a,y,u-T],[i,y,u-T],[i,w,u-z],[a,w,u-z],n),e.quad([i,y,u+T],[a,y,u+T],[a,w,u+z],[i,w,u+z],n),e.quad([a,y,l],[a,y,u-T],[a,w,u-z],[a,w,l],t),e.quad([a,y,u+T],[a,y,m],[a,w,m],[a,w,u+z],t))}if(e.box(a,sn-.2,l,i,sn-.06,m,t),e.box(i,sn-.42,l+.05,i+.012,sn-.24,m-.05,r),h){let x=[];for(let y=0;y<=30;y++){let w=y/30,T=w<.5?Mo+(_r.apex-Mo)*(w*2):_r.apex-(_r.apex-Mo)*((w-.5)*2),z=w<.5?-1:1;x.push([i+.01,Math.min(T,_r.apex-.002),u+z*(Rc(T,_r.ys,_r.a,_r.r)+.03)])}e.tube(x,.022,n,6)}}s(Gr,ln,!0),s(co,In,!0);{let l=ln,m=co,h=(l+m)/2;e.box(a,Mo,l,i,sn-.06,m,t);let u={ys:1.85,a:.55,r:.8},d=[];for(let p=0;p<=40;p++){let g=p/40,x=u.ys+Math.sqrt(u.r*u.r-(u.r-u.a)*(u.r-u.a)),y=g<.5?.35+(x-.35)*(g*2):x-(x-.35)*((g-.5)*2),w=g<.5?-1:1;d.push([i+.012,Math.min(y,x-.002),h+w*Rc(y,u.ys,u.a,u.r)])}d.push(d[0]),e.tube(d,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,r),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,m-.13],[i+.06,1.12,m-.13],[i+.06,1.12,m-.2]],.009,cn.BRASS,6)}[Gr-.02,ln,co,In+.02].forEach((l,m)=>{let h=m===1||m===2,u=.075,d=sn+(h?.62:.4);e.box(er+.06,0,l-u,er+.06+2*u,d,l+u,t),e.box(er+.04,d-.04,l-u-.02,er+.08+2*u,d,l+u+.02,n);let p=er+.06+u,g=h?.62:.5;e.spire(p,l,d,u*.95,d+g,t);for(let x=1;x<=3;x++){let y=d+g*x/4.2,w=u*.95*(1-x/4.2)+.02;for(let[T,z]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[p+T*(w-.02),y-.02,l+z*(w-.02)],[p+T*(w+.015),y+.03,l+z*(w+.015)]],.008,n,4)}e.lathe(p,l,[[0,d+g-.02],[.03,d+g+.03],[.022,d+g+.07],[0,d+g+.1]],t,10)});let f=(l,m,h)=>{let u=(l+m)/2,d=er+.075,p=sn+.07,g=p+h,x=[1,0,0],y=e.v([d,p,l],x,r,[l,p]),w=e.v([d,p,m],x,r,[m,p]),T=e.v([d,g,u],x,r,[u,g]);e.idx.push(y,w,T);let z=e.v([d-.04,p,l],[-1,0,0],t),L=e.v([d-.04,p,m],[-1,0,0],t),O=e.v([d-.04,g,u],[-1,0,0],t);e.idx.push(z,O,L);let U=[],K=[];for(let H=0;H<=10;H++){let j=H/10;U.push([d+.02,p+h*j,l+(u-l)*j]),K.push([d+.02,p+h*j,m+(u-m)*j])}e.tube(U,.022,n,6),e.tube(K,.022,n,6);for(let H=2;H<=8;H+=2)for(let j of[U[H],K[H]])e.tube([j,[j[0]+.01,j[1]+.06,j[2]+(j===U[H]?-.02:.02)]],.01,n,4);e.lathe(d,u,[[0,g],[.035,g+.06],[.022,g+.12],[0,g+.16]].map(([H,j])=>[H,j]),t,10);let Z=Math.min(.17,h*.32),J=p+h*.38,ce=[];for(let H=0;H<=24;H++){let j=H/24*ya*2;ce.push([d+.012,J+Math.sin(j)*Z,u+Math.cos(j)*Z])}e.tube(ce,.012,n,5)};f(Gr-.02,ln,.52),f(ln,co,.82),f(co,In+.02,.52),e.lathe(vn.x,vn.z,[[0,dt.top],[.036,dt.top+.001],[vn.r,dt.top+.012],[vn.r*1.02,dt.top+.035],[.036,dt.top+.052],[.02,dt.top+.062],[.016,dt.top+.068]],cn.INKGLASS,24),e.lathe(vn.x,vn.z,[[.016,dt.top+.064],[.021,dt.top+.066],[.022,dt.top+.075],[.016,dt.top+.076],[0,dt.top+.072]],cn.BRASS,20);{let l=Nc.a,m=Nc.b,h=26,u=y=>{let w=Math.sin(y*ya)*.025;return[l[0]+(m[0]-l[0])*y+w*.6,l[1]+(m[1]-l[1])*y+w*.4,l[2]+(m[2]-l[2])*y+w]},d=[];for(let y=0;y<=h;y++)d.push(u(y/h));e.tube(d,y=>.0028*(1-.7*y)+6e-4,cn.QUILL,5);let p=e.norm(e.sub(m,l)),g=e.norm(e.cross(p,[.2,1,.1])),x=e.cross(g,p);for(let y of[-1,1]){let w=e.pos.length/3;for(let T=0;T<=h;T++){let z=T/h,L=u(z),O=z<.28?0:(y>0?.03:.02)*Math.sin(ya*Math.pow((z-.28)/.72,.75)),U=O*.25,K=[L[0]+g[0]*y*O-x[0]*U,L[1]+g[1]*y*O-x[1]*U,L[2]+g[2]*y*O-x[2]*U];e.v(L,x,cn.QUILL,[z,0]),e.v(K,x,cn.QUILL,[z,y])}for(let T=0;T<h;T++){let z=w+T*2;e.idx.push(z,z+2,z+1,z+1,z+2,z+3)}}}return e.orient()}function s5(e,t){let n=vr.top,o=vr.x0;e(o-.35,0,vr.z0-.35,o,n+.35,vr.z1+.35),e(o,0,vr.z0-.35,-.35,n,vr.z0),e(o,0,vr.z1,-.35,n,vr.z1+.35),e(o,n,vr.z0,-.35,n+.35,vr.z1),e(.35,0,vr.z0-.42,.35+.16,n,vr.z0),e(.35,0,vr.z1,.35+.16,n,vr.z1+.42),e(.35,n,vr.z0-.5,.35+.18,n+.42,vr.z1+.5),e(.35,n+.42,vr.z0-.6,.35+.26,n+.52,vr.z1+.6),e(.35,0,vr.z0-.5,.35+.22,.42,vr.z0),e(.35,0,vr.z1,.35+.22,.42,vr.z1+.5),e(-.35-.01,0,vr.z0,.35+.12,.02,vr.z1),t(o,vr.z0,-.35,vr.z1)}lo.exports=e=>{let t=ni(),r=J1.GLSL,n=i5(),o=`
	precision highp float;
	${r}
	uniform float time;
	${t.lanternGLSL()}
	${ep()}
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
	}`,i=e({vert:a,frag:`${o}
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
				base = k < 2.5 ? vec3(0.20, 0.022, 0.040) : vec3(0.21, 0.035, 0.038);
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(H,j,de,ve){let it=[],_e=[],ht=[],bt=[],_t=[],pt=er-.02,Tt=_r.apex+.08,Gt=Mo+.015;for(let Ft=0;Ft<=40;Ft++){let Ge=Ft/40,Ze=Tt+(Gt-Tt)*Ge;for(let et=0;et<=90;et++){let Ot=et/90,mt=de?.2+.13*Ge*Ge:j-H,cr=H+Ot*mt,ne=de?.05+.02*Ge:.035+.01*Math.sin(Ot*7),Ke=Ot*ve*ya*2+Math.sin(Ge*2+Ot*5)*.6,ot=pt-ne*(.5+.5*Math.sin(Ke))-(de?.02*Ge:0),Pt=[1,0,-(-ne*.5*Math.cos(Ke)*ve*ya*2/mt)],lr=Math.hypot(Pt[0],Pt[1],Pt[2]);it.push(ot,Ze,cr),_e.push(Pt[0]/lr,0,Pt[2]/lr),ht.push(2),bt.push(Math.sin(Ke),Ge)}}for(let Ft=0;Ft<40;Ft++)for(let Ge=0;Ge<90;Ge++){let Ze=Ft*91+Ge,et=Ze+90+1;_t.push(Ze,et,Ze+1,Ze+1,et,et+1)}for(let Ft=0;Ft<_t.length;Ft+=3){let[Ge,Ze,et]=[_t[Ft],_t[Ft+1],_t[Ft+2]],Ot=Ke=>[it[Ke*3],it[Ke*3+1],it[Ke*3+2]],mt=[0,1,2].map(Ke=>Ot(Ze)[Ke]-Ot(Ge)[Ke]),cr=[0,1,2].map(Ke=>Ot(et)[Ke]-Ot(Ge)[Ke]);mt[1]*cr[2]-mt[2]*cr[1]<0&&(_t[Ft+1]=et,_t[Ft+2]=Ze)}return{pos:it,nrm:_e,kind:ht,uv:bt,idx:_t}}let c=s(Gr+.02,Gr+.4,!0,6),f=s(co+.04,In-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(H=>H+c.pos.length/3))},m=e({vert:`
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
		}`,frag:`${o}
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
			vec3 p = vec3(${rt(sr.x)} + corner.x * ${rt(sr.w/2)}, ${rt(sr.y)} + corner.y * ${rt(sr.h/2)}, ${rt(sr.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${o}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${rt(sr.x)}, ${rt(sr.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${rt(sr.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),u=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${rt(sr.x)} + corner.x * 0.75, ${rt(sr.y)} + corner.y * 0.9, ${rt(co-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=14,p=[];for(let H=0;H<d;H++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(j=>p.push(j[0],j[1],(H+.5)/d));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${rt(o5)} + c.x * ${rt((er-Zr)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${rt(ln-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${ep().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Fo(Sr)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(p),size:3}},count:p.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let H=document.createElement("canvas");H.width=512,H.height=652;let j=H.getContext("2d");j.fillStyle="#cdb38a",j.fillRect(0,0,H.width,H.height);let de=7,ve=()=>(de=de*1664525+1013904223>>>0,de/4294967296);for(let _e=0;_e<2400;_e++){j.fillStyle=`rgba(${ve()<.5?"90,62,30":"245,230,200"},${.03+ve()*.05})`;let ht=ve()*H.width,bt=ve()*H.height;j.fillRect(ht,bt,1+ve()*14,1)}for(let _e=0;_e<26;_e++){let ht=ve()*H.width,bt=ve()*H.height,_t=20+ve()*90,Le=j.createRadialGradient(ht,bt,0,ht,bt,_t);Le.addColorStop(0,`rgba(120,80,35,${.04+ve()*.06})`),Le.addColorStop(1,"rgba(120,80,35,0)"),j.fillStyle=Le,j.fillRect(ht-_t,bt-_t,_t*2,_t*2)}let it=j.createRadialGradient(H.width/2,H.height/2,H.width*.3,H.width/2,H.height/2,H.height*.72);return it.addColorStop(0,"rgba(110,70,30,0)"),it.addColorStop(1,"rgba(110,70,30,0.38)"),j.fillStyle=it,j.fillRect(0,0,H.width,H.height),H})(),y=x?e.texture({data:x,min:"linear",mag:"linear",flipY:!1}):e.texture(),w=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),T=[18,24],z=[],L=[];for(let H=0;H<=T[1];H++)for(let j=0;j<=T[0];j++)z.push(j/T[0],H/T[1]);for(let H=0;H<T[1];H++)for(let j=0;j<T[0];j++){let de=H*(T[0]+1)+j,ve=de+T[0]+1;L.push(de,de+1,ve,de+1,ve+1,ve)}let O=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${rt(Yn.cx+Yn.w/2)} - s * ${rt(Yn.w)};
			float zNear = ${rt(Yn.cz-Yn.d/2)};
			vec3 p = vec3(x, ${rt(Yn.y)}, zNear + t * ${rt(Yn.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${rt(Yn.d)};
				float zf = zNear + 0.5 * ${rt(Yn.d)};
				p.z = zf - dd * cos(a);
				p.y = ${rt(Yn.y)} + dd * sin(a) + 0.0016 * fold;
				n = vec3(0.0, cos(a), sin(a));
			}
			// then the whole of it slides through the slit
			p.z += slide * 0.40;
			p.y += 0.004 * fold;
			v_pos = p; v_n = n; v_st = st; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${o}
		uniform sampler2D paperTex, inkTex;
		uniform float fold;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// beyond the slit it is inside the wall
			if (v_pos.z > ${rt(ln+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(z),size:2}},elements:L,uniforms:{fold:()=>xa.fold,slide:()=>xa.slide,paperTex:y,inkTex:w},cull:{enable:!1}}),U=tp();U.lathe(gr.x,gr.z,[[0,dt.top],[.048,dt.top+.002],[.052,dt.top+.012],[.046,dt.top+.014],[.022,dt.top+.012],[0,dt.top+.012]],cn.BRASS,24),U.lathe(gr.x,gr.z,[[0,dt.top+.012],[gr.r,dt.top+.012],[gr.r*1.02,dt.top+.012+gr.h*.6],[gr.r,dt.top+.012+gr.h],[gr.r*.75,dt.top+.012+gr.h-.004],[0,dt.top+.012+gr.h-.008]],9,20),U.tube([[gr.x,dt.top+.012+gr.h-.008,gr.z],[gr.x+.001,dt.top+.012+gr.h+.012,gr.z]],.0012,8,4),U.orient();let K=e({vert:a,frag:`${o}
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
				float up = smoothstep(${rt(dt.top+gr.h*.4)}, ${rt(dt.top+.012+gr.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:U.pos,normal:U.nrm,kind:U.kind,uv:U.uv},elements:U.idx}),Z=e({vert:`
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
			vec3 p = ${Fo(gr.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),J=[0,0];function ce(H){let j=H&&H.reflected;if(i(),m(),h(),xa.ink&&xa.inkDirty){let de=xa.ink;J[0]!==de.width||J[1]!==de.height?(w({data:de,min:"linear",mag:"linear",flipY:!1}),J=[de.width,de.height]):w.subimage(de),xa.inkDirty=!1}xa.shown&&O(),J1.night>.01&&(K(),j||(Z({halo:1}),Z({halo:0}))),j||(u(),g())}return ce};lo.exports.addBay=s5;lo.exports.BAY=vr;lo.exports.STATE=xa;lo.exports.SHOTS=a5;lo.exports.SEAT=so;lo.exports.LAMP=Sr;lo.exports.SCONCE=Vr;lo.exports.GRILLE=sr;lo.exports.PAPER=Yn;lo.exports.ZONE={FRONT:er,BACK:Zr,ZA:Gr,ZB:ln,ZC:co,ZD:In}});var hp=pe((XE,fp)=>{"use strict";var c5=Qa(),{addFlutedColumn:rp,addStatue:l5,addPlant:f5}=C1(),np=Za(),h5=rs(),So=Nn(),u5=Eo(),Pc=s0(),Ut=14,Dr=So.C.hallEnd+.35,hr=8,Zt=.35,Xf=1.15,Yf=1.15,Kf=[18,29,40],d5=[[[0,0],[0,Dr]],[[Ut,Dr],[Ut,0]],[[0,0],[Ut,0]],[[Ut,Dr],[0,Dr]]],sp=[];for(let e of Kf)for(let t of[1.25,Ut-1.25]){let r=Xf/2,n=Yf/2;sp.push([[t-r,e-n],[t+r,e-n]],[[t+r,e-n],[t+r,e+n]],[[t+r,e+n],[t-r,e+n]],[[t-r,e+n],[t-r,e-n]])}var Oc=12,cp=2.95,lp=.62,Dc=cp+lp,Gc=[{file:"venus.bin",x:1.85,z:Dr-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Ut-2.1,z:Dr-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:So.NICHE_X[0],z:So.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:So.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:So.NICHE_X[1],z:So.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:So.NICHE_PLINTH_TOP,mat:3}],p5={x0:Zt,x1:3.15,z0:3.6,z1:8.2,top:1},op=.8,$c=1.17,c0=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{c0.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),c0.push({x:Ut-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function Qf(e,t,r,n){return[[[e-r,t-n],[e+r,t-n]],[[e+r,t-n],[e+r,t+n]],[[e+r,t+n],[e-r,t+n]],[[e-r,t+n],[e-r,t-n]]]}var Hc=[];for(let e of[-1,1])Hc.push(...Qf(Ut/2+e*Dc,Oc,.85,.85));for(let e of Gc.filter(t=>t.pedestal))Hc.push(...Qf(e.x,e.z,$c*1.1,$c*1.1));for(let e of c0)Hc.push(...Qf(e.x,e.z,.42,.42));var v5=d5.concat(sp,Hc);function m5(e){let r=new Map,n=(o,a,i)=>{let s=o+":"+a;r.has(s)||r.set(s,[]);let c=r.get(s);c.includes(i)||c.push(i)};for(let o of e){let a=Math.floor(Math.min(o[0][0],o[1][0])/4)-1,i=Math.floor(Math.max(o[0][0],o[1][0])/4)+1,s=Math.floor(Math.min(o[0][1],o[1][1])/4)-1,c=Math.floor(Math.max(o[0][1],o[1][1])/4)+1;for(let f=a;f<=i;f++)for(let l=s;l<=c;l++)n(f,l,o)}return{get(o,a){let i=Math.floor(o/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let m=r.get(i+f+":"+(s+l));m&&c.push(...m)}return[...new Set(c)]}}}var Fc=[],Fr={curMat:[0,0,0]};function qc(e,t,r,n,o,a,i){let s=e.length/3;e.push(...r,...n,...o,...a),t.push(...i,...i,...i,...i);let c=Fr.curMat;return Fc.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function Xt(e,t,r,n,o,a,i,s,c){let f=(l,m,h,u,d)=>{r.push(...qc(e,t,l,m,h,u,d))};f([n,o,a],[i,o,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,o,c],[n,o,c],[i,s,c],[n,s,c],[0,0,1]),f([n,o,c],[n,o,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,o,a],[i,o,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,o,c],[i,o,c],[n,o,a],[i,o,a],[0,-1,0])}function ls(e,t,r,n,o){let a=Fr,i=a.vert(e,o),s=a.vert(t,o),c=a.vert(r,o),f=a.vert(n,o);a.tri(i,s,c),a.tri(s,f,c)}function ap(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=Math.cos(c),m=Math.sin(c),h=Math.cos(f),u=Math.sin(f),d=[e+r*l,t+r*m],p=[e+r*h,t+r*u],g=[e+n*l,t+n*m],x=[e+n*h,t+n*u];ls([d[0],d[1],o],[p[0],p[1],o],[g[0],g[1],o],[x[0],x[1],o],[0,0,-1]),ls([d[0],d[1],a],[p[0],p[1],a],[g[0],g[1],a],[x[0],x[1],a],[0,0,1]);let y=(c+f)/2;ls([d[0],d[1],o],[p[0],p[1],o],[d[0],d[1],a],[p[0],p[1],a],[-Math.cos(y),-Math.sin(y),0]),ls([g[0],g[1],o],[x[0],x[1],o],[g[0],g[1],a],[x[0],x[1],a],[Math.cos(y),Math.sin(y),0])}}function g5(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=e+r*Math.cos(c),m=t+r*Math.sin(c),h=e+r*Math.cos(f),u=t+r*Math.sin(f);ls([l,m,o],[h,u,o],[l,n,o],[h,n,o],[0,0,-1]),ls([l,m,a],[h,u,a],[l,n,a],[h,n,a],[0,0,1])}}function x5(e,t,r,n){let o=Ut/2,a=cp,i=3,s=a+.42,c=s+.15,f=lp,l=Dc,m=5.98,h=n-.45,u=n+.45,d=64,p=rp(Fr,o-l,n,0,m,f);rp(Fr,o+l,n,0,m,f),Fr.curMat=[0,0,0],ap(o,i,a,s,h,u,d),ap(o,i,s,c,h-.07,u+.07,d),g5(o,i,c,p+.05,h,u,d);for(let x of[-1,1]){let y=o+x*(c-.02),w=o+x*l;Xt(e,t,r,Math.min(y,w),i,h,Math.max(y,w),p+.05,u)}for(let x of[-1,1]){let y=o+x*(a-.05),w=o+x*(a+.85);Xt(e,t,r,Math.min(y,w),i-.16,n-.6,Math.max(y,w),i,n+.6)}let g=l+f*1.42+.45;Xt(e,t,r,o-g,p,n-.7,o+g,p+.44,n+.7),Xt(e,t,r,o-g+.12,p+.44,n-.62,o+g-.12,p+.7,n+.62),Xt(e,t,r,o-g-.1,p+.7,n-.84,o+g+.1,p+.84,n+.84),Xt(e,t,r,o-g-.22,p+.84,n-.96,o+g+.22,p+1,n+.96),Xt(e,t,r,o-.3,i+a-.1,n-.56,o+.3,p,n+.56)}function ip(e,t,r,n,o){Xt(e,t,r,n-.72,0,o-.72,n+.72,.2,o+.72),Xt(e,t,r,n-.58,.2,o-.58,n+.58,.4,o+.58),Xt(e,t,r,n-Xf/2,.4,o-Yf/2,n+Xf/2,hr-1.35,o+Yf/2),Xt(e,t,r,n-.67,.42,o-.67,n+.67,.62,o+.67),Xt(e,t,r,n-.67,hr-1.58,o-.67,n+.67,hr-1.35,o+.67),Xt(e,t,r,n-.82,hr-1.35,o-.82,n+.82,hr-1.05,o+.82),Xt(e,t,r,n-.66,hr-1.05,o-.66,n+.66,hr-.78,o+.66),Xt(e,t,r,n-.92,hr-.78,o-.92,n+.92,hr-.55,o+.92),Xt(e,t,r,n-.78,hr-.55,o-.78,n+.78,hr-.3,o+.78),Xt(e,t,r,n-.92,hr-.3,o-.92,n+.92,hr-.1,o+.92)}function Ic(e,t,r,n,o){o==="left"?(Xt(e,t,r,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Xt(e,t,r,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Xt(e,t,r,Ut-.14,1,n-3.8/2,Ut+.08,5.7,n+3.8/2),Xt(e,t,r,Ut-.18,1+.18,n-3.8/2+.18,Ut+.08+.04,5.7-.18,n+3.8/2-.18))}function y5(e,t,r,n){Xt(e,t,r,.65,hr-.16,n-1.65,.65+.22,hr,n+1.65),Xt(e,t,r,Ut-.65-.22,hr-.16,n-1.65,Ut-.65,hr,n+1.65),Xt(e,t,r,.65,hr-.16,n-1.65,Ut-.65,hr,n-1.43),Xt(e,t,r,.65,hr-.16,n+1.43,Ut-.65,hr,n+1.65),r.push(...qc(e,t,[.65+.22,hr-.16,n-1.43],[Ut-.65-.22,hr-.16,n-1.43],[.65+.22,hr-.16,n+1.43],[Ut-.65-.22,hr-.16,n+1.43],[0,-1,0]))}fp.exports=function(){let e=[],t=[],r=[];Fc=[],Fr=c5.createBuilder(e,t,r,Fc),r.push(...qc(e,t,[0,0,0],[Ut,0,0],[0,0,Dr],[Ut,0,Dr],[0,1,0])),h5.addSkylight(Fr,[0,0,0],Dr),Fr.curMat=[0,0,0];{let c=Pc.BAY;Xt(e,t,r,-Zt,0,0,Zt,hr,c.z0),Xt(e,t,r,-Zt,0,c.z1,Zt,hr,Dr),Xt(e,t,r,-Zt,c.top,c.z0,Zt,hr,c.z1),Pc.addBay((f,l,m,h,u,d)=>Xt(e,t,r,f,l,m,h,u,d),(f,l,m,h)=>r.push(...qc(e,t,[f,0,l],[m,0,l],[f,0,h],[m,0,h],[0,1,0])))}Xt(e,t,r,Ut-Zt,0,So.C.z1,Ut+Zt,hr,Dr-Zt),Xt(e,t,r,Ut-Zt-.12,0,So.C.z1+2*Zt,Ut-Zt,.42,Dr-Zt),Xt(e,t,r,Ut-Zt-.07,.42,So.C.z1+2*Zt,Ut-Zt,.5,Dr-Zt);for(let[c,f]of[[0,Pc.BAY.z0-.5],[Pc.BAY.z1+.5,Dr-Zt]])Xt(e,t,r,Zt,0,c,Zt+.12,.42,f),Xt(e,t,r,Zt,.42,c,Zt+.07,.5,f);Xt(e,t,r,Zt,0,Dr-Zt-.12,Ut-Zt,.42,Dr-Zt),Xt(e,t,r,Zt,.42,Dr-Zt-.07,Ut-Zt,.5,Dr-Zt),np.addEntranceWall(Fr),np.addFrames(Fr),Fr.curMat=[0,0,0],Xt(e,t,r,-Zt,0,Dr-Zt,Ut+Zt,hr,Dr+Zt),x5(e,t,r,Oc);for(let c of Kf)ip(e,t,r,1.25,c),ip(e,t,r,Ut-1.25,c);Ic(e,t,r,22,"left"),Ic(e,t,r,25,"right"),Ic(e,t,r,33,"left"),Ic(e,t,r,36,"right");let n=[4,9,34,39,44,49];for(let c of n)y5(e,t,r,c);So.addWing(Fr),Fr.curMat=[0,0,0];for(let c of Gc.filter(f=>f.pedestal))l5(Fr,c.x,c.z,$c,op);{let c=p5;Fr.curMat=[0,0,0],Fr.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Fr.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Fr.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Fr.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}u5.addAlcove(Fr);for(let c of c0)f5(Fr,c.x,c.z,c.seed,1,c.away);Fr.curMat=[0,0,0];let o=[[[Ut,Dr-.35],[0,Dr-.35]],[[0,3],[0,10]],[[Ut,15],[Ut,22]],[[0,24],[0,31]],[[Ut,33],[Ut,40]],[[0,41],[0,46]]],a=m5(v5),i=(c,f)=>{let l=0,m=1/0;return o.forEach((h,u)=>{let d=(h[0][0]+h[1][0])/2,p=(h[0][1]+h[1][1])/2,g=Math.hypot(c-d,f-p);g<m&&(m=g,l=u)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:o,lights:s,statues:Gc,occluders:[...Kf.flatMap(c=>[[1.25,c,.78],[Ut-1.25,c,.78]]),[Ut/2-Dc,Oc,.86],[Ut/2+Dc,Oc,.86],...Gc.filter(c=>c.pedestal).map(c=>[c.x,c.z,$c*1.12]),...c0.map(c=>[c.x,c.z,.34])],pedestalTop:op,mat:Fc,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:r}}});var Zf=pe((YE,up)=>{"use strict";var{doorLightGLSL:b5}=Za(),{skylightGLSL:w5}=rs(),{windowLightGLSL:_5,C:Kn}=Nn(),{alcoveLightGLSL:E5}=Eo(),fo=e=>e.toFixed(4),M5=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>(r/t).toFixed(4)).join(", ")})();up.exports=(e,t,r)=>{let o=(t.occluders||[]).slice(0,24).map(([h,u,d])=>`ao = min(ao, contact(v_pos.xz, vec2(${h.toFixed(3)}, ${u.toFixed(3)}), ${d.toFixed(3)}));`).join(`
      `),a={c:[0,0,0,0],d:[1,0,0,0]},i=-1,s=[],c=h=>{let u=h&&h.tick!==void 0?h.tick:0;if(u!==i||s.length===0){i=u;let d=t.viewer||[7,2,20];for(s=t.lights.filter(p=>p.c[3]>.5).map(p=>({l:p,d:Math.hypot(p.c[0]-d[0],p.c[2]-d[2])})).sort((p,g)=>p.d-g.d).slice(0,8).map(p=>p.l);s.length<8;)s.push(a)}return s},f={},l="",m="";for(let h=0;h<8;h++)f["lightC"+h]=u=>c(u)[h].c,f["lightD"+h]=u=>c(u)[h].d,l+="uniform vec4 lightC"+h+", lightD"+h+`;
`,m+="pic += pictureLight(lightC"+h+", lightD"+h+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${ni().lanternGLSL()}

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    ${l}

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

    ${b5()}

    ${w5()}

    ${_5()}

    ${E5()}

    vec3 skyAbove(vec3 dir) {
      float h = clamp(dir.y, 0.0, 1.0);
      vec3 col = mix(vec3(0.80, 0.86, 0.92), vec3(0.42, 0.60, 0.86), smoothstep(0.55, 1.0, h));
      vec2 cp = dir.xz / max(dir.y, 0.2) * 1.6;
      float c = smoothstep(0.50, 0.78, fbm(cp * 0.7 + vec2(3.1, 7.4)));
      vec3 day = mix(col, vec3(0.97, 0.96, 0.93), c * 0.65);
      // night: deep blue-black, thin moonlit cloud and a scatter of stars
      vec3 nsky = mix(vec3(0.035, 0.05, 0.09), vec3(0.012, 0.018, 0.04), smoothstep(0.3, 1.0, h));
      nsky = mix(nsky, vec3(0.16, 0.19, 0.25), c * 0.45);
      vec2 sp = dir.xz / max(dir.y, 0.15) * 60.0;
      float star = step(0.996, hash12(floor(sp))) * (1.0 - c) * smoothstep(0.15, 0.4, h);
      nsky += vec3(0.75, 0.8, 0.9) * star;
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
        step(abs(v_pos.z - ${fo(Kn.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${fo((Kn.z0+Kn.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      ${m}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${fo(Kn.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
      light *= mix(1.0, 0.38, night);

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
          float through = doorLight(v_pos, vec3(${M5}));
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
      light += sun * 0.85 * mix(1.0, 0.72, night) + glow * 0.05 * (1.0 - isCeiling) * mix(1.0, 0.25, night);
      // the coffers glow with daylight, brighter towards the glass
      light += isCream * (0.18 + 0.42 * smoothstep(8.0, 8.62, v_pos.y)) * glow * mix(1.0, 0.22, night);

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
      light += winL * 0.48 * mix(1.0, 0.62, night) + cg * 0.16 * (1.0 - 0.4 * isCeiling) * mix(1.0, 0.25, night);

      // the little lamps in the statue niches
      float nl = nicheLight(v_pos, N);
      light += nl * 1.1;

      // soft contact shadows where pillars, statues and plants meet the floor
      if (isFloor > 0.5) {
        float ao = 1.0;
        ${o}
        // and a little darker along the foot of the walls
        float wallD = v_pos.x - 0.35;
        if (v_pos.x < 14.0) wallD = min(wallD, ${fo(Kn.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${fo(Kn.z0)} || v_pos.z > ${fo(Kn.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${fo(Kn.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${fo(Kn.z0)}), ${fo(Kn.z1)} - v_pos.z), ${fo(Kn.x1)} - v_pos.x);
        ao *= mix(0.72, 1.0, smoothstep(0.0, 0.55, wallD));
        light *= ao;
      }

      // tungsten-warm picture lights against cooler daylight from the
      // skylight, the windows and the dome: the mix of the two is what
      // real gallery light looks like
      // (at night the picture lights burn lower and yellower, like lanterns,
      // so the moon and the lanterns carry the room)
      vec3 pictureTint = mix(vec3(1.0, 0.90, 0.74), vec3(1.0, 0.80, 0.46) * 0.52, night);
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
        if (v_pos.z < ${fo(Kn.z0+.3)} && v_pos.x > ${fo(Kn.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:f,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements)})}});var pp=pe((KE,dp)=>{"strict mode";var S5="https://api.artic.edu/api/v1/artworks/search",A5=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,T5="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",k5="&fields=image_id,title,artist_title",L5={low:400,mid:843,high:1686};dp.exports={fetchList:async function(e,t){let r=S5+T5+k5+`&from=${e}&size=${t}`;return(await fetch(r).then(o=>o.json())).data.filter(o=>o.image_id)},fetchImage:async function(e,t){let r=A5(e,L5[t]),n=await fetch(r).then(o=>o.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var gp=pe((QE,mp)=>{"use strict";var z5=Ef(),C5=wo(),R5=e=>"images/web/"+e.slug+(C5.isPhone?"-1024":"")+".webp";async function vp(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}mp.exports={fetchList:async function(e,t){return z5.slice(e,e+t).map((r,n)=>({...r,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await vp(R5(e))}catch(r){t=await vp("images/"+e.file)}return{title:e.title,image:t}}}});var yp=pe((ZE,xp)=>{"strict mode";xp.exports={default:"local",artic:pp(),local:gp()}});var eh=pe((JE,wp)=>{"strict mode";var oi=document.createElement("canvas"),Jf=oi.width=oi.height=1024,ba=oi.getContext("2d");ba.mozImageSmoothingEnabled=!1;ba.webkitImageSmoothingEnabled=!1;ba.font="32px Verdana";ba.textBaseline="bottom";ba.fillStyle="#aaa";function bp(e,t,r,n){var o=t,a,i=0,s=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(o).width>r&&f>1;){f--,o=a="";for(var m=0;m<l;m++)m<f?(o+=c[m],m+1<f&&(o+=" ")):(a+=c[m],m+1<l&&(a+=" "))}return n.push(o),s=e.measureText(o).width,a&&(i=bp(e,a,r,n),i>s&&(s=i)),s}wp.exports={init(e,t,r=Jf){var n=[];bp(ba,t,Math.min(r*Jf,Jf),n),ba.clearRect(0,0,oi.width,oi.height);for(var o=0;o<n.length;o++)ba.fillText(n[o],0,oi.height-(Math.max(n.length,3)-o)*32);return e({data:oi,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Mp=pe((eM,Ep)=>{"strict mode";var th=yp(),N5=new URLSearchParams(window.location.search).get("api"),_p=th[N5]||th[th.default],P5=eh(),rh={},hs=[],I5=2;function O5(e){return(!navigator.connection||navigator.connection.downlink<I5)&&(e=e=="high"?"mid":"low"),e}var G5=wo(),fs=document.createElement("canvas");fs.width=fs.height=G5.isPhone?1024:2048;var ah=fs.getContext("2d");ah.imageSmoothingEnabled=!0;ah.imageSmoothingQuality="high";var nh=!1,F5=e=>[(hs.pop()||e.texture)([[[200,200,200]]]),t=>(hs.pop()||e.texture)([[[0,0,0,0]]]),1];async function oh(e,t,r){nh===!1&&(nh=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,o;try{let a=await _p.fetchImage(t,O5(r));o=a.title,n=await createImageBitmap(a.image),ah.drawImage(n,0,0,fs.width,fs.height)}catch(a){return console.error(a),r=="high"?await oh(e,t,"low"):F5(e)}return[(hs.pop()||e.texture)({data:fs,min:"mipmap",mipmap:"nice",aniso:nh,flipY:!0}),a=>P5.init(hs.pop()||e.texture,o,a),n.width/n.height]}Ep.exports={fetch:(e,t=10,r="low",n,o)=>{let a=Object.keys(rh).length;_p.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(rh[s.image_id]){--t===0&&o();return}rh[s.image_id]=s,oh(e,s,r).then(([c,f,l])=>{n({...s,tex:c,textGen:f,aspect:l}),--t===0&&o()})})})},load:(e,t,r="low")=>{t.tex||t.loading||(t.loading=!0,oh(e,t,r).then(([n,o])=>{t.loading=!1,t.tex=n,t.text=o(t.width)}))},unload:e=>{e.tex&&(hs.push(e.tex),e.tex=void 0),e.text&&(hs.push(e.text),e.text=void 0)}}});var Ap=pe((tM,Sp)=>{Sp.exports=D5;function D5(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var kp=pe((rM,Tp)=>{Tp.exports=$5;function $5(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var zp=pe((nM,Lp)=>{Lp.exports=q5;function q5(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var ih=pe((oM,Cp)=>{Cp.exports=H5;function H5(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Np=pe((aM,Rp)=>{Rp.exports=B5;function B5(e,t){if(e===t){var r=t[1],n=t[2],o=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=o,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var Ip=pe((iM,Pp)=>{Pp.exports=U5;function U5(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],m=t[9],h=t[10],u=t[11],d=t[12],p=t[13],g=t[14],x=t[15],y=r*s-n*i,w=r*c-o*i,T=r*f-a*i,z=n*c-o*s,L=n*f-a*s,O=o*f-a*c,U=l*p-m*d,K=l*g-h*d,Z=l*x-u*d,J=m*g-h*p,ce=m*x-u*p,H=h*x-u*g,j=y*H-w*ce+T*J+z*Z-L*K+O*U;return j?(j=1/j,e[0]=(s*H-c*ce+f*J)*j,e[1]=(o*ce-n*H-a*J)*j,e[2]=(p*O-g*L+x*z)*j,e[3]=(h*L-m*O-u*z)*j,e[4]=(c*Z-i*H-f*K)*j,e[5]=(r*H-o*Z+a*K)*j,e[6]=(g*T-d*O-x*w)*j,e[7]=(l*O-h*T+u*w)*j,e[8]=(i*ce-s*Z+f*U)*j,e[9]=(n*Z-r*ce-a*U)*j,e[10]=(d*L-p*T+x*y)*j,e[11]=(m*T-l*L-u*y)*j,e[12]=(s*K-i*J-c*U)*j,e[13]=(r*J-n*K+o*U)*j,e[14]=(p*w-d*z-g*y)*j,e[15]=(l*z-m*w+h*y)*j,e):null}});var Gp=pe((sM,Op)=>{Op.exports=j5;function j5(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],m=t[9],h=t[10],u=t[11],d=t[12],p=t[13],g=t[14],x=t[15];return e[0]=s*(h*x-u*g)-m*(c*x-f*g)+p*(c*u-f*h),e[1]=-(n*(h*x-u*g)-m*(o*x-a*g)+p*(o*u-a*h)),e[2]=n*(c*x-f*g)-s*(o*x-a*g)+p*(o*f-a*c),e[3]=-(n*(c*u-f*h)-s*(o*u-a*h)+m*(o*f-a*c)),e[4]=-(i*(h*x-u*g)-l*(c*x-f*g)+d*(c*u-f*h)),e[5]=r*(h*x-u*g)-l*(o*x-a*g)+d*(o*u-a*h),e[6]=-(r*(c*x-f*g)-i*(o*x-a*g)+d*(o*f-a*c)),e[7]=r*(c*u-f*h)-i*(o*u-a*h)+l*(o*f-a*c),e[8]=i*(m*x-u*p)-l*(s*x-f*p)+d*(s*u-f*m),e[9]=-(r*(m*x-u*p)-l*(n*x-a*p)+d*(n*u-a*m)),e[10]=r*(s*x-f*p)-i*(n*x-a*p)+d*(n*f-a*s),e[11]=-(r*(s*u-f*m)-i*(n*u-a*m)+l*(n*f-a*s)),e[12]=-(i*(m*g-h*p)-l*(s*g-c*p)+d*(s*h-c*m)),e[13]=r*(m*g-h*p)-l*(n*g-o*p)+d*(n*h-o*m),e[14]=-(r*(s*g-c*p)-i*(n*g-o*p)+d*(n*c-o*s)),e[15]=r*(s*h-c*m)-i*(n*h-o*m)+l*(n*c-o*s),e}});var Dp=pe((cM,Fp)=>{Fp.exports=W5;function W5(e){var t=e[0],r=e[1],n=e[2],o=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],l=e[9],m=e[10],h=e[11],u=e[12],d=e[13],p=e[14],g=e[15],x=t*i-r*a,y=t*s-n*a,w=t*c-o*a,T=r*s-n*i,z=r*c-o*i,L=n*c-o*s,O=f*d-l*u,U=f*p-m*u,K=f*g-h*u,Z=l*p-m*d,J=l*g-h*d,ce=m*g-h*p;return x*ce-y*J+w*Z+T*K-z*U+L*O}});var qp=pe((lM,$p)=>{$p.exports=V5;function V5(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],l=t[7],m=t[8],h=t[9],u=t[10],d=t[11],p=t[12],g=t[13],x=t[14],y=t[15],w=r[0],T=r[1],z=r[2],L=r[3];return e[0]=w*n+T*s+z*m+L*p,e[1]=w*o+T*c+z*h+L*g,e[2]=w*a+T*f+z*u+L*x,e[3]=w*i+T*l+z*d+L*y,w=r[4],T=r[5],z=r[6],L=r[7],e[4]=w*n+T*s+z*m+L*p,e[5]=w*o+T*c+z*h+L*g,e[6]=w*a+T*f+z*u+L*x,e[7]=w*i+T*l+z*d+L*y,w=r[8],T=r[9],z=r[10],L=r[11],e[8]=w*n+T*s+z*m+L*p,e[9]=w*o+T*c+z*h+L*g,e[10]=w*a+T*f+z*u+L*x,e[11]=w*i+T*l+z*d+L*y,w=r[12],T=r[13],z=r[14],L=r[15],e[12]=w*n+T*s+z*m+L*p,e[13]=w*o+T*c+z*h+L*g,e[14]=w*a+T*f+z*u+L*x,e[15]=w*i+T*l+z*d+L*y,e}});var Bp=pe((fM,Hp)=>{Hp.exports=X5;function X5(e,t,r){var n=r[0],o=r[1],a=r[2],i,s,c,f,l,m,h,u,d,p,g,x;return t===e?(e[12]=t[0]*n+t[4]*o+t[8]*a+t[12],e[13]=t[1]*n+t[5]*o+t[9]*a+t[13],e[14]=t[2]*n+t[6]*o+t[10]*a+t[14],e[15]=t[3]*n+t[7]*o+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],l=t[4],m=t[5],h=t[6],u=t[7],d=t[8],p=t[9],g=t[10],x=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=l,e[5]=m,e[6]=h,e[7]=u,e[8]=d,e[9]=p,e[10]=g,e[11]=x,e[12]=i*n+l*o+d*a+t[12],e[13]=s*n+m*o+p*a+t[13],e[14]=c*n+h*o+g*a+t[14],e[15]=f*n+u*o+x*a+t[15]),e}});var jp=pe((hM,Up)=>{Up.exports=Y5;function Y5(e,t,r){var n=r[0],o=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Vp=pe((uM,Wp)=>{Wp.exports=K5;function K5(e,t,r,n){var o=n[0],a=n[1],i=n[2],s=Math.sqrt(o*o+a*a+i*i),c,f,l,m,h,u,d,p,g,x,y,w,T,z,L,O,U,K,Z,J,ce,H,j,de;return Math.abs(s)<1e-6?null:(s=1/s,o*=s,a*=s,i*=s,c=Math.sin(r),f=Math.cos(r),l=1-f,m=t[0],h=t[1],u=t[2],d=t[3],p=t[4],g=t[5],x=t[6],y=t[7],w=t[8],T=t[9],z=t[10],L=t[11],O=o*o*l+f,U=a*o*l+i*c,K=i*o*l-a*c,Z=o*a*l-i*c,J=a*a*l+f,ce=i*a*l+o*c,H=o*i*l+a*c,j=a*i*l-o*c,de=i*i*l+f,e[0]=m*O+p*U+w*K,e[1]=h*O+g*U+T*K,e[2]=u*O+x*U+z*K,e[3]=d*O+y*U+L*K,e[4]=m*Z+p*J+w*ce,e[5]=h*Z+g*J+T*ce,e[6]=u*Z+x*J+z*ce,e[7]=d*Z+y*J+L*ce,e[8]=m*H+p*j+w*de,e[9]=h*H+g*j+T*de,e[10]=u*H+x*j+z*de,e[11]=d*H+y*j+L*de,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var Yp=pe((dM,Xp)=>{Xp.exports=Q5;function Q5(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],l=t[9],m=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*o+f*n,e[5]=i*o+l*n,e[6]=s*o+m*n,e[7]=c*o+h*n,e[8]=f*o-a*n,e[9]=l*o-i*n,e[10]=m*o-s*n,e[11]=h*o-c*n,e}});var Qp=pe((pM,Kp)=>{Kp.exports=Z5;function Z5(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],l=t[9],m=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o-f*n,e[1]=i*o-l*n,e[2]=s*o-m*n,e[3]=c*o-h*n,e[8]=a*n+f*o,e[9]=i*n+l*o,e[10]=s*n+m*o,e[11]=c*n+h*o,e}});var Jp=pe((vM,Zp)=>{Zp.exports=J5;function J5(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],l=t[5],m=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o+f*n,e[1]=i*o+l*n,e[2]=s*o+m*n,e[3]=c*o+h*n,e[4]=f*o-a*n,e[5]=l*o-i*n,e[6]=m*o-s*n,e[7]=h*o-c*n,e}});var tv=pe((mM,ev)=>{ev.exports=ew;function ew(e,t,r){var n,o,a,i=r[0],s=r[1],c=r[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),o=Math.cos(t),a=1-o,e[0]=i*i*a+o,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+o,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var nv=pe((gM,rv)=>{rv.exports=tw;function tw(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=n+n,c=o+o,f=a+a,l=n*s,m=n*c,h=n*f,u=o*c,d=o*f,p=a*f,g=i*s,x=i*c,y=i*f;return e[0]=1-(u+p),e[1]=m+y,e[2]=h-x,e[3]=0,e[4]=m-y,e[5]=1-(l+p),e[6]=d+g,e[7]=0,e[8]=h+x,e[9]=d-g,e[10]=1-(l+u),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}});var av=pe((xM,ov)=>{ov.exports=rw;function rw(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var sv=pe((yM,iv)=>{iv.exports=nw;function nw(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var lv=pe((bM,cv)=>{cv.exports=ow;function ow(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var hv=pe((wM,fv)=>{fv.exports=aw;function aw(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var dv=pe((_M,uv)=>{uv.exports=iw;function iw(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var vv=pe((EM,pv)=>{pv.exports=sw;function sw(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r+r,s=n+n,c=o+o,f=r*i,l=n*i,m=n*s,h=o*i,u=o*s,d=o*c,p=a*i,g=a*s,x=a*c;return e[0]=1-m-d,e[1]=l+x,e[2]=h-g,e[3]=0,e[4]=l-x,e[5]=1-f-d,e[6]=u+p,e[7]=0,e[8]=h+g,e[9]=u-p,e[10]=1-f-m,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var gv=pe((MM,mv)=>{mv.exports=cw;function cw(e,t,r,n,o,a,i){var s=1/(r-t),c=1/(o-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var yv=pe((SM,xv)=>{xv.exports=lw;function lw(e,t,r,n,o){var a=1/Math.tan(t/2),i=1/(n-o);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*n*i,e[15]=0,e}});var wv=pe((AM,bv)=>{bv.exports=fw;function fw(e,t,r,n){var o=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(o+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(o-a)*f*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}});var Ev=pe((TM,_v)=>{_v.exports=hw;function hw(e,t,r,n,o,a,i){var s=1/(t-r),c=1/(n-o),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+r)*s,e[13]=(o+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var Sv=pe((kM,Mv)=>{var uw=ih();Mv.exports=dw;function dw(e,t,r,n){var o,a,i,s,c,f,l,m,h,u,d=t[0],p=t[1],g=t[2],x=n[0],y=n[1],w=n[2],T=r[0],z=r[1],L=r[2];return Math.abs(d-T)<1e-6&&Math.abs(p-z)<1e-6&&Math.abs(g-L)<1e-6?uw(e):(l=d-T,m=p-z,h=g-L,u=1/Math.sqrt(l*l+m*m+h*h),l*=u,m*=u,h*=u,o=y*h-w*m,a=w*l-x*h,i=x*m-y*l,u=Math.sqrt(o*o+a*a+i*i),u?(u=1/u,o*=u,a*=u,i*=u):(o=0,a=0,i=0),s=m*i-h*a,c=h*o-l*i,f=l*a-m*o,u=Math.sqrt(s*s+c*c+f*f),u?(u=1/u,s*=u,c*=u,f*=u):(s=0,c=0,f=0),e[0]=o,e[1]=s,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=m,e[7]=0,e[8]=i,e[9]=f,e[10]=h,e[11]=0,e[12]=-(o*d+a*p+i*g),e[13]=-(s*d+c*p+f*g),e[14]=-(l*d+m*p+h*g),e[15]=1,e)}});var Tv=pe((LM,Av)=>{Av.exports=pw;function pw(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var l0=pe((zM,kv)=>{kv.exports={create:Ap(),clone:kp(),copy:zp(),identity:ih(),transpose:Np(),invert:Ip(),adjoint:Gp(),determinant:Dp(),multiply:qp(),translate:Bp(),scale:jp(),rotate:Vp(),rotateX:Yp(),rotateY:Qp(),rotateZ:Jp(),fromRotation:tv(),fromRotationTranslation:nv(),fromScaling:av(),fromTranslation:sv(),fromXRotation:lv(),fromYRotation:hv(),fromZRotation:dv(),fromQuat:vv(),frustum:gv(),perspective:yv(),perspectiveFromFieldOfView:wv(),ortho:Ev(),lookAt:Sv(),str:Tv()}});var Cv=pe((CM,zv)=>{"use strict";var Lv=Mp(),zr=l0(),ai=Nn(),vw=3e3,Bc="high",sh,h0=.36,u0=13.64,us=ai.C.hallEnd-.01,d0=ai.C.z0+.01,mw=.356,gw=13.644,xw=ai.C.hallEnd-.006,yw=ai.C.z0+.006,bw=.12,jc=4,ds=e=>yn[e]&&yn[e].cy||jc,ch=.26,ww=5.6,_w=7,yn=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:us},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:ai.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ai.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ai.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function Ew(e,t){let r=t&&t.maxH||ww,n=t&&t.maxW||_w,o=Math.min(r,n/e);return{width:o*e,height:o}}function Mw(e,t,r){let n=yn[r],o=[],a=ds(r)-t/2;return n.side==="left"?(zr.fromTranslation(o,[h0,a,n.z+e/2]),zr.rotateY(o,o,Math.PI/2)):n.side==="right"?(zr.fromTranslation(o,[u0,a,n.z-e/2]),zr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?zr.fromTranslation(o,[n.x-e/2,a,d0]):(zr.fromTranslation(o,[7+e/2,a,us]),zr.rotateY(o,o,Math.PI)),zr.scale(o,o,[e,t,bw]),o}function Sw(e,t,r){let n=yn[r],o=[],a=ds(r)-t/2;return n.side==="left"?(zr.fromTranslation(o,[h0,a,n.z+e/2]),zr.rotateY(o,o,Math.PI/2)):n.side==="right"?(zr.fromTranslation(o,[u0,a,n.z-e/2]),zr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?zr.fromTranslation(o,[n.x-e/2,a,d0]):(zr.fromTranslation(o,[7+e/2,a,us]),zr.rotateY(o,o,Math.PI)),o}function Aw(e,t,r){let n=yn[r],o=[],a=ds(r)-t/2-ch-.38;return n.side==="left"?(zr.fromTranslation(o,[mw,a,n.z+e/2]),zr.rotateY(o,o,Math.PI/2)):n.side==="right"?(zr.fromTranslation(o,[gw,a,n.z-e/2]),zr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?zr.fromTranslation(o,[n.x-e/2,a,yw]):(zr.fromTranslation(o,[7+e/2,a,xw]),zr.rotateY(o,o,Math.PI)),zr.scale(o,o,[2,2,2]),o}function Tw(e,t,r){let n=yn[r],o=ds(r)-t/2-ch-.38;return n.side==="left"?[h0+.55,o,n.z]:n.side==="right"?[u0-.55,o,n.z]:n.side==="corridor"?[n.x,o,d0+.55]:[7,o,us-.55]}var f0=.42;function Uc(e,t,r,n,o,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,o,0,0,r[0]*a,r[1]*a,r[2]*a,0,e[0],e[1],e[2],1]}function kw(e,t,r){let n=yn[r],o,a,i;n.side==="left"?(o=[h0,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(o=[u0,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(o=[n.x,d0],a=[1,0,0],i=[0,0,1]):(o=[7,us],a=[1,0,0],i=[0,0,-1]);let s=ds(r)+t/2+ch+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(u,d)=>[o[0]+i[0]*u,d,o[1]+i[2]*u],l=[.075,.062,.05],m=[{fixmodel:Uc(f(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Uc(f(f0/2,s),a,i,.02,.02,f0),fixcol:l,fixglow:0},{fixmodel:Uc(f(f0,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Uc(f(f0-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(f0,s-.02);return{fixtures:m,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}zv.exports=(e,t)=>{let r=[],n=[],o=a=>{let i=a.image_id;if(!yn[i])return;let{width:s,height:c}=Ew(a.aspect,yn[i]),f=kw(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),r.push({...a,fixtures:f.fixtures,side:yn[i].side,model:Mw(s,c,i),framemodel:Sw(s,c,i),framesize:[s,c],textmodel:Aw(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:Tw(s,c,i),paintingPosition:yn[i].side==="left"?[h0+.05,jc,yn[i].z]:yn[i].side==="right"?[u0-.05,jc,yn[i].z]:yn[i].side==="corridor"?[yn[i].x,ds(i),d0+.05]:[7,jc,us-.05],textGen:null})};return Lv.fetch(e,yn.length,Bc,o,()=>{}),{update:()=>{n=r,n.forEach(a=>{Lv.load(e,a,Bc)}),Bc="low",sh&&clearTimeout(sh),sh=setTimeout(()=>{Bc="high"},vw)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Iv=pe((RM,Pv)=>{"use strict";var Lw=eh(),Rv=wo(),Nv=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function zw(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];Nv.forEach(([n,o])=>{e.forEach(([a,i])=>t.push([a,i,n,o]))});let r=[];for(let n=0;n<Nv.length-1;n++)for(let o=0;o<4;o++){let a=(o+1)%4,i=n*4+o,s=n*4+a,c=(n+1)*4+o,f=(n+1)*4+a;r.push(i,s,f,i,f,c)}return{verts:t,elems:r}}var Cw=`#extension GL_OES_standard_derivatives : enable
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
}`,Rw=`
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
}`;Pv.exports=e=>{let t=Lw.draw(e),r=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${ni().lanternGLSL()}
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

				// ---- the paint itself: a gentle relief that follows the
				// brushwork in the photograph (kept low so it never looks
				// embossed)
				float tx = texel * 2.0;
				float lx = luma(texture2D(tex, st + vec2(tx, 0.0)).rgb) - luma(texture2D(tex, st - vec2(tx, 0.0)).rgb);
				float ly = luma(texture2D(tex, st + vec2(0.0, tx)).rgb) - luma(texture2D(tex, st - vec2(0.0, tx)).rgb);
				g += vec2(lx, ly) * 0.75;

				N = normalize(v_n - v_t * g.x - v_b * g.y);

				// weave shading: the tops of the threads catch the light,
				// the hollows between them hold a little shadow
				vec3 Lw = normalize(v_lamp - v_world);
				float flatL = max(dot(v_n, Lw), 0.05);
				float lit = max(dot(N, Lw), 0.0) / flatL;
				col *= mix(1.0, clamp(lit, 0.8, 1.2), 0.35);
				col *= 1.0 - 0.05 * wAmp * (1.0 - abs(f.x - 0.5) * 2.0) * (1.0 - abs(f.y - 0.5) * 2.0);

				// ---- the varnish: a soft satin highlight of the lamp that
				// slides over the canvas as you move, and a faint veil at
				// low angles
				vec3 V = normalize(v_eye - v_world);
				vec3 H = normalize(Lw + V);
				float nh = max(dot(N, H), 0.0);
				float fres = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
				sheen = (pow(nh, 80.0) * 0.045 + pow(nh, 16.0) * 0.012) * min(pool, 1.2) + fres * 0.035;
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
			col *= mix(vec3(1.0), vec3(0.58, 0.50, 0.36), night);
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(Rv.isPhone?1024:2048),detail:()=>Rv.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=zw(),o=e({frag:Cw,vert:Rw,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){r(i),o(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Gv=pe((NM,Ov)=>{"use strict";var Nw=Zf();function Pw(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),o=t.getUint32(8,!0),a=[],i=[];for(let m=0;m<3;m++)a.push(t.getFloat32(12+m*4,!0)),i.push(t.getFloat32(24+m*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,o);s+=o*2;let l=new Int8Array(e,s,n*3);return{nV:n,nI:o,mn:a,sz:i,pos:c,idx:f,nrm:l}}Ov.exports=(e,t)=>{let r=[],n=[],o=[],a=[],i=null,s=t.statues.length,c=(l,m)=>{let h=r.length/3,u=m.height,d=Math.cos(m.yaw),p=Math.sin(m.yaw),g=m.base!==void 0?m.base:t.pedestalTop;for(let x=0;x<l.nV;x++){let y=(l.mn[0]+l.pos[x*3]/65535*l.sz[0])*u,w=(l.mn[1]+l.pos[x*3+1]/65535*l.sz[1])*u,T=(l.mn[2]+l.pos[x*3+2]/65535*l.sz[2])*u;r.push(m.x+d*y+p*T,g+w,m.z-p*y+d*T);let z=l.nrm[x*3]/127,L=l.nrm[x*3+1]/127,O=l.nrm[x*3+2]/127;n.push(d*z+p*O,L,-p*z+d*O),o.push(m.mat||1,0,0)}for(let x=0;x<l.nI;x++)a.push(h+l.idx[x])},f=()=>{a.length!==0&&(i=Nw(e,{position:r,normal:n,mat:o,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1))};return t.statues.forEach(l=>{fetch("res/"+l.file).then(m=>{if(!m.ok)throw new Error("Could not load "+l.file);return m.arrayBuffer()}).then(m=>c(Pw(m),l)).catch(m=>console.error(m)).then(()=>{--s===0&&f()})}),function(){i&&i()}}});var Xv=pe((PM,fh)=>{"use strict";var Iw=Qa(),Jr=1.29032,si=[9.2968,2,5.9],Ow=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Wc=2147.64,Fv=725,Dv=1288,$v=1450,qv=2576,Hn=-5.197,li=3.865,wa=10.135,fi=-14.679,p0=-30.229,v0=7.232,Hv=-45.713,ps=17.1*Jr,ci=16.6*Jr,m0=16.6*Jr,Bv=[6.9,17.1],Vc=[2.95,16.6],Gw=1.6,Fw=0,Dw=1,Uv=2,lh=3,jv=4,Wv=5,$w=6;function qw(){let e=[],t=[],r=[],n=[],o=Iw.createBuilder(e,t,r,n),a=(f,l,m,h,u,d,p=1,g=1)=>{let x=[];for(let y=0;y<=p;y++){let w=[];for(let T=0;T<=g;T++){let z=[f[0]+l[0]*y/p+m[0]*T/g,f[1]+l[1]*y/p+m[1]*T/g,f[2]+l[2]*y/p+m[2]*T/g],L=d(z);w.push(o.vert(z,h,[u,L[0],L[1]]))}x.push(w)}for(let y=0;y<p;y++)for(let w=0;w<g;w++)o.tri(x[y][w],x[y+1][w],x[y][w+1]),o.tri(x[y+1][w],x[y+1][w+1],x[y][w+1])},i=f=>l=>[(si[2]-l[2])/Jr-f,l[1]/Jr];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],Fw,f=>[f[0]/Jr,f[2]/Jr],13,14),a([li,0,Hn],[0,0,fi-Hn],[0,ps,0],[1,0,0],Dw,i(8.6),6,6),a([-40,0,Hn],[li+40,0,0],[0,ps,0],[0,0,1],Uv,f=>[(li-f[0])/Jr,f[1]/Jr],8,4),a([-40,0,-.36],[0,0,Hn+.36],[0,ps,0],[1,0,0],Uv,f=>[-f[2]/Jr,f[1]/Jr]),a([wa,0,-80],[0,0,Hn+80],[0,ci,0],[-1,0,0],jv,i(8.6),12,6),a([wa,0,Hn],[60,0,0],[0,ci,0],[0,0,1],Wv,f=>[(f[0]-wa)/Jr,f[1]/Jr],8,4),a([70,0,Hn],[0,0,-.36-Hn],[0,ci,0],[-1,0,0],Wv,f=>[-f[2]/Jr,f[1]/Jr]);let s=f=>[(f[0]-si[0])/Jr+4.18,f[1]/Jr];a([-20,0,p0],[v0+20,0,0],[0,m0,0],[0,0,1],lh,s,8,6),a([v0,0,p0],[0,0,Hv-p0],[0,m0,0],[1,0,0],lh,i(28),4,4),a([v0,0,Hv],[wa-v0,0,0],[0,ci,0],[0,0,1],jv,f=>[(f[0]-si[0])/Jr,f[1]/Jr],2,4),a([-20,0,fi],[0,0,p0-fi],[0,m0,0],[1,0,0],lh,i(16),4,4);let c=(f,l,m,h)=>a(f,l,m,h,$w,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:r,attr:n}}function ii(e,t,r,n){let o=e.texture({data:[[n]],...r,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{o({data:a,...r,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),o}var Ao=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",Hw=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,fi],[li,ps,Hn]],[[wa,0,-80],[70,ci,Hn]],[[-20,0,-80],[v0,m0,p0]],[[-40,0,-80],[-20,m0,fi]]],Bw=Hw.map(e=>`if (hitBox(ro, rd, ${Ao(e[0])}, ${Ao(e[1])}, 1e4) ) return 0.0;`).join(`
		`),Vv="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>Ow[t][e].toFixed(6)).join(", ")).join(", ")+")",Uw=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Ao([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${Bw}
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
	vec3 ro = ${Ao(si)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Ao([-40,0,fi])}, ${Ao([li-.02,ps,Hn])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Ao([wa+.02,0,-80])}, ${Ao([70,ci,Hn])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${Vv} * (p - ${Ao(si)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Fv.toFixed(2)} + ${Wc.toFixed(3)} * pc.x / pc.z) / ${$v.toFixed(1)},
		(${Dv.toFixed(2)} - ${Wc.toFixed(3)} * pc.y / pc.z) / ${qv.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${Vv} * (p - ${Ao(si)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Fv.toFixed(2)} + ${Wc.toFixed(3)} * pc.x / pc.z) / ${$v.toFixed(1)},
		(${Dv.toFixed(2)} - ${Wc.toFixed(3)} * pc.y / pc.z) / ${qv.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Ao(si)}), n));
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
		ns += vec3(0.8, 0.85, 0.95) * step(0.997, hash(floor(nd.xz / max(nd.y, 0.1) * 70.0)));
		gl_FragColor = vec4(mix(sk, ns, night), 1.0);
		return;
	}

	// ---------- painted fallback ----------
	vec3 base;
	if (kind < 0.5) {
		base = texture2D(cobbleTex, fuv / ${Gw.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Bv[0].toFixed(2)}, 1.0 - fuv.y / ${Bv[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Vc[0].toFixed(2)}, 1.0 - fuv.y / ${Vc[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Vc[0].toFixed(2)}, 1.0 - fuv.y / ${Vc[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(li-.05).toFixed(3)} && v_pos.x < ${(wa+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${fi.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Hn+4.5).toFixed(3)};
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
}`,jw=`
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
}`,Ww=En();fh.exports=e=>{let t=qw(),r={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},o={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=ii(e,"res/street/photo.jpg",r,[190,160,120]),i=ii(e,"res/street/photo_night.jpg",r,[12,14,22]),s=ii(e,"res/street/photo_mask.png",r,[255,255,255]),c=ii(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=ii(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=ii(e,"res/street/facade_cream.jpg",n,[215,200,175]),m=ii(e,"res/street/cobbles.jpg",o,[95,95,95]),h=Date.now(),u=e({frag:Uw,vert:jw,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:m,photoNight:i,night:()=>Ww.night,time:()=>(Date.now()-h)/1e3}});return function(){u()}};fh.exports.layout={MOUTH_Z:Hn,PINK_X:li,RIGHT_X:wa,PINK_H:ps,CREAM_H:ci,S:Jr}});var Qv=pe((IM,Kv)=>{"use strict";var Vw=En().GLSL,{glassPanes:Xw}=Za(),Yv=Nn();function Yw(){let e=[],t=[],r=(n,o)=>{for(let a of n)e.push(a),t.push(o)};return r(Xw(),[0,0,1]),r(Yv.windowGlass(),[0,0,1]),r(Yv.farDoorGlass(),[1,0,0]),{position:e,normal:t}}Kv.exports=e=>{let t=Yw(),r=e({frag:`
		precision highp float;
		${Vw}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r()}}});var pm=pe((OM,vh)=>{"use strict";var nm=En().GLSL,Kw=Qa(),hh=wo(),{wallWithHoles:Qw,C:Ma}=Nn(),Ve=.28,X={westBack:14.4,westCol:15-Ve,eastCol:37.4+Ve,eastBack:41.8,south:Ma.z1+.7,northCol:Ma.z1+.7+16,northBack:Ma.z1+.7+19,cx:(15+37.4)/2,cz:(Ma.z1+.7+Ma.z1+.7+16-Ve)/2},or={x0:X.westCol+Ve,x1:X.eastCol-Ve,z0:X.south,z1:X.northCol-Ve},Mn=3.3,y0=.92,Sa=5.6,Zv=6,ho=11.9,Ea=9.6,It={x0:X.cx-2.9,x1:X.cx+2.9,top:14.4},el=7,om=4,dh=(X.eastCol-X.westCol)/el,Zw=(X.northCol-X.south)/om,am=3,w0=.26,pi=1.4,ui=1.1,Yc=3,Do=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(r=>r/t)})(),$e={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},$o=[],im=(e,t,r)=>[X.cx+e,t,X.cz+r],Kc=im(-5.9,0,3.4),Aa=.85,_a={c:[Kc[0],4.6*Aa+.5,Kc[2]],r:[5*Aa,3.6*Aa,4.5*Aa]},sm=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[Kc[0]+e.d[0]*Aa,e.d[1]*Aa+.5,Kc[2]+e.d[2]*Aa],r:e.r.map(t=>t*Aa),n:e.n}));for(let e of sm)$o.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var Jw=[3.6,6.3,9];for(let e of Jw){let t=8.6+e%1.7*.6;$o.push({c:im(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var e4=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:X.cx+e.d[0],z:X.cz+e.d[1],bloom:e.bloom}));for(let e of e4)$o.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var ph=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[X.cx+Math.cos(t)*2.3,X.cz+Math.sin(t)*2.3]});for(let[e,t]of ph)$o.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var cm=[];{let e=(r,n,o,a,i,s)=>{let c=Math.hypot(o-r,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let m=l/f,h=r+(o-r)*m,u=n+(a-n)*m;i!==void 0&&Math.abs((o!==r?h:u)-i)<s||cm.push([h,u])}};e(or.x0+.45,or.z0+1.2,or.x0+.45,or.z1-.45,X.cz,1),e(or.x1-.45,or.z0+1.2,or.x1-.45,or.z1-.45,X.cz,1),e(or.x0+.45,or.z1-.45,or.x1-.45,or.z1-.45,X.cx,1.9)}var t4=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Qc=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function ms(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function en(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),[s,0,0])}function r4(e,t,r){return{vert:(n,o,a)=>e.vert(t(n),r(o),a),tri:e.tri}}var n4={north:[e=>[e[0],e[1],X.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[X.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[X.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function lm(e,t,r,n,o){let a=[];for(let i=0;i<r;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===r-1?o:.02);a.push([s,c,e+(i+.5)*t])}return a}var o4=lm(X.westCol,dh,el,Ve+w0,Ve+w0),Jv=lm(X.south,Zw,om,.32,Ve+w0),vs=[X.cx-32.35,X.northCol-77],a4=Array.from({length:el-1},(e,t)=>X.westCol+(t+1)*dh),fm=e=>(e[1]-e[0])/2-.2,b0=e=>(e[0]+e[1])/2;function i4(e,t){let r=b0(e),n=fm(e);return{u0:e[0],u1:e[1],bottom:t?0:y0,head:o=>{let a=Math.abs(o-r);return a<n?Mn+Math.sqrt(n*n-a*a):Mn},step:.05}}function s4(e,t,r){return{u0:e-r,u1:e+r,bot:n=>t-Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),step:.04,mat:[$e.STONE,0,0]}}function c4(e,t,r,n){return{u0:e-t/2,u1:e+t/2,bottom:r,head:()=>n,step:.5,mat:[$e.STONE,0,0]}}function em(e,t,r){let[n,o]=n4[t],a=r4(e,n,o),i=[];r.arches.forEach((l,m)=>i.push(i4(l,m===r.open)));let s=[];for(let l of r.bays||r.arches){let m=b0(l);r.oculi&&i.push(s4(m,6.85,.3)),s.push({c:m,y0:r.win[0],y1:r.win[1],w:1.05})}for(let l of r.extraWindows||[])s.push(l);for(let l of s)i.push(c4(l.c,l.w,l.y0,l.y1));for(let l of r.extraHoles||[])i.push(l);Qw(a,{u0:r.u0,u1:r.u1,w0:-Ve,w1:Ve,top:r.top,holes:i,mat:[$e.BRICK,0,0],revealMat:[$e.BRICK,0,0],noEnds:r.noEnds,cuts:r.cuts,topStep:.25});let c=(l,m,h,u,d,p,g)=>{let x=n([l,m,h]),y=n([u,d,p]);en(e,x[0],x[1],x[2],y[0],y[1],y[2],g)},f=(l,m,h,u,d,p)=>ms(a,l,m,h,u,d,[p,0,0]);for(let l of r.arches){let m=b0(l),h=fm(l),u=28;for(let d of[Ve,-Ve]){let p=d>0?1:-1,g=d+p*.025;for(let x=0;x<u;x++){let y=Math.PI*x/u,w=Math.PI*(x+1)/u,T=(J,ce)=>[m+Math.cos(J)*ce,Mn+Math.sin(J)*ce],z=T(y,h),L=T(w,h),O=T(y,h+.26),U=T(w,h+.26);f([z[0],z[1],g],[L[0],L[1],g],[U[0],U[1],g],[O[0],O[1],g],[0,0,p],$e.STONE);let K=Math.cos((y+w)/2),Z=Math.sin((y+w)/2);f([O[0],O[1],d],[U[0],U[1],d],[U[0],U[1],g],[O[0],O[1],g],[K,Z,0],$e.STONE)}}}if(r.arches.forEach((l,m)=>{m!==r.open&&c(l[0]-.02,y0,-Ve-.05,l[1]+.02,y0+.09,Ve+.05,$e.STONE)}),c(r.u0,Zv,-Ve,r.u1,Zv+.18,Ve+.09,$e.STONE),c(r.u0,r.win[0]-.12,Ve-.01,r.u1,r.win[0],Ve+.06,$e.STONE),r.cornice)for(let[l,m,h]of r.cornice)c(l,h-.22,Ve-.01,m,h,Ve+.16,$e.STONE),c(l,h,Ve-.01,m,h+.16,Ve+.42,$e.STONE);for(let{c:l,y0:m,y1:h,w:u,door:d}of s){let p=u/2;if(f([l-p-.01,m,.06],[l+p+.01,m,.06],[l+p+.01,h,.06],[l-p-.01,h,.06],[0,0,1],d?$e.DARK:$e.PANE),d){c(l-p-.16,0,Ve-.01,l-p,h+.16,Ve+.07,$e.STONE),c(l+p,0,Ve-.01,l+p+.16,h+.16,Ve+.07,$e.STONE),c(l-p-.16,h,Ve-.01,l+p+.16,h+.2,Ve+.09,$e.STONE),c(l-p,0,.07,l+p,h-.02,.12,$e.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,$e.DARK);continue}for(let g of[-1,1]){let x=l+g*p;c(x+g*.02,m+.02,Ve+.02,x+g*(p+.025),h-.02,Ve+.06,$e.SHUTTER)}c(l-p-.09,h,Ve-.01,l+p+.09,h+.16,Ve+.05,$e.STONE),c(l-p-.09,m-.1,Ve-.01,l+p+.09,m,Ve+.09,$e.STONE),c(l-.015,m,.06,l+.015,h,.09,$e.SHUTTER),c(l-p,(m+h)/2-.015,.06,l+p,(m+h)/2+.015,.09,$e.SHUTTER)}if(r.oculi)for(let l of r.bays||r.arches){let m=b0(l);f([m-.31,6.54,0],[m+.31,6.54,0],[m+.31,7.16,0],[m-.31,7.16,0],[0,0,1],$e.DARK)}for(let l of r.cols){let m=y0+.09,h=n([l,0,0]);en(e,h[0]-.24,m,h[2]-.24,h[0]+.24,m+.12,h[2]+.24,$e.MARBLE),e.lathe([[.23,m+.12,1],[.24,m+.17],[.2,m+.24],[.215,m+.28],[.17,m+.34,1],[.165,m+.6],[.155,Mn-.5],[.15,Mn-.38,1],[.175,Mn-.34,1],[.17,Mn-.3],[.2,Mn-.22],[.27,Mn-.15],[.29,Mn-.12,1]],h[0],h[2],18,{mat:()=>[$e.MARBLE,0,0]}),en(e,h[0]-.29,Mn-.12,h[2]-.29,h[0]+.29,Mn+.01,h[2]+.29,$e.STONE)}r.walk&&r.walk(e)}function l4(e){let t=[-1,0,1].map(o=>{let a=X.cx+o*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[$e.STONE,0,0]}});em(e,"north",{u0:X.westCol-Ve,u1:X.eastCol+Ve,top:o=>o>It.x0+1e-6&&o<It.x1-1e-6?It.top:ho,cuts:[It.x0,It.x0+1e-5,It.x1-1e-5,It.x1],arches:o4,open:am,cols:a4,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[X.westCol-Ve-3.3,It.x0,ho],[It.x1,X.eastCol+Ve+3.3,ho],[It.x0-.2,It.x1+.2,It.top]],walk:o=>{en(o,or.x0,Sa,X.northCol+Ve,or.x1,Sa+.2,X.northBack,$e.PLASTER),en(o,or.x0,0,X.northBack,or.x1,Sa,X.northBack+.3,$e.PLASTER);for(let a of[X.cx-7.2,X.cx,X.cx+7.2])ms(o,[a-.8,0,X.northBack-.01],[a+.8,0,X.northBack-.01],[a+.8,2.9,X.northBack-.01],[a-.8,2.9,X.northBack-.01],[0,0,-1],[$e.DARK,0,0]),en(o,a-.98,0,X.northBack-.06,a+.98,3.12,X.northBack,$e.STONE),ms(o,[a-.8,0,X.northBack-.07],[a+.8,0,X.northBack-.07],[a+.8,2.9,X.northBack-.07],[a-.8,2.9,X.northBack-.07],[0,0,-1],[$e.DARK,0,0])}}),ms(e,[It.x0,11,X.northCol+.2],[It.x1,11,X.northCol+.2],[It.x1,13.6,X.northCol+.2],[It.x0,13.6,X.northCol+.2],[0,0,-1],[$e.DARK,0,0]),en(e,It.x0+.3,10.88,X.northCol-Ve-.06,It.x1-.3,11,X.northCol-Ve+.1,$e.STONE),en(e,X.westBack,Sa+.2,X.northBack,X.eastBack,ho,X.northBack+3.4,$e.BRICK),en(e,X.westBack,Ea,X.northCol-Ve,X.westCol-Ve,ho,X.northCol+Ve,$e.BRICK),en(e,X.eastCol+Ve,Ea,X.northCol-Ve,X.eastBack,ho,X.northCol+Ve,$e.BRICK),en(e,X.westBack,Sa+.2,X.northCol+Ve+.12,X.eastBack,ho,X.northBack,$e.BRICK),g0(e,[X.westBack-.5,ho+.16,X.northCol-Ve-.42],[It.x0-X.westBack+.5,0,0],[0,2.6,4.4],$e.ROOF),g0(e,[It.x1,ho+.16,X.northCol-Ve-.42],[X.eastBack+.5-It.x1,0,0],[0,2.6,4.4],$e.ROOF),g0(e,[It.x0-.3,It.top+.16,X.northCol-Ve-.42],[It.x1-It.x0+.6,0,0],[0,1.4,3],$e.ROOF),tm(e,[It.x0-.3,It.top+.16,X.northCol-Ve-.42],[It.x0-.3,It.top+1.56,X.northCol-Ve+2.58],[It.x0-.3,It.top+.16,X.northCol-Ve+2.58],[-1,0,0],$e.BRICK),tm(e,[It.x1+.3,It.top+.16,X.northCol-Ve-.42],[It.x1+.3,It.top+1.56,X.northCol-Ve+2.58],[It.x1+.3,It.top+.16,X.northCol-Ve+2.58],[1,0,0],$e.BRICK),en(e,It.x0,ho,X.northCol+Ve,It.x1,It.top,X.northCol+2.6,$e.BRICK);for(let[o,a]of[[X.cx-9.8,X.northBack+.6],[X.cx+9.4,X.northBack+.4],[X.cx-4.6,X.northBack+1]])en(e,o-.4,12.5,a-.4,o+.4,15.4,a+.4,$e.BRICK),en(e,o-.52,15.4,a-.52,o+.52,15.62,a+.52,$e.STONE);let r=(o,a,i)=>{let s=o==="west"?-1:1,c=[];Jv.forEach((m,h)=>{let u=b0(m);h===1?c.push({c:u,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:u,y0:1,y1:2.75,w:1.05}),c.push({c:u,y0:3.85,y1:5.45,w:1.05})}),em(e,o,{u0:X.south,u1:X.northCol-Ve,top:()=>Ea,arches:[],bays:Jv,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[X.south,X.northCol-Ve,Ea]]}),en(e,a,0,X.south,i+s*(Ve+.12),Ea,X.northBack+.3,$e.BRICK);let f=i-s*Ve;en(e,f,0,X.south,f-s*.06,.55,X.northCol-Ve,$e.STONE);let l=i-s*(Ve+.42);g0(e,[l,Ea+.16,X.south],[0,0,X.northCol-Ve-X.south],[a-l+s*.4,1.9,0],$e.ROOF)};r("west",X.westBack,X.westCol),r("east",X.eastBack,X.eastCol);let n=Ma.x1+.7;en(e,13.65,7.4,X.south-.02,n,7.62,X.south+.14,$e.STONE),en(e,13.65,10.4,X.south-.02,n,10.6,X.south+.38,$e.STONE),g0(e,[13.65,10.6,X.south+.38],[n-13.65,0,0],[0,2.2,-5],$e.ROOF)}function tm(e,t,r,n,o,a){let i=[a,0,0];e.tri(e.vert(t,o,i),e.vert(r,o,i),e.vert(n,o,i))}function g0(e,t,r,n,o){let a=Qc([r[1]*n[2]-r[2]*n[1],r[2]*n[0]-r[0]*n[2],r[0]*n[1]-r[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,l)=>[t[0]+r[0]*f+n[0]*l,t[1]+r[1]*f+n[1]*l,t[2]+r[2]*f+n[2]*l];ms(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[o,0,0]);let c=.08;ms(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],Qc([-n[0],0,-n[2]]),[o,0,0])}function f4(e){let t=X.westBack,r=X.eastBack,n=X.south,o=X.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let l=[t+(r-t)*c/a,0,n+(o-n)*f/i];s[c].push(e.vert(l,[0,1,0],[$e.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var x0=.46,di=.58,hi=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function h4(e,t,r){let n=ui+r,o=(e>0?or.x1-X.cx:X.cx-or.x0)-pi-r,a=ui+r,i=(t>0?or.z1-X.cz:X.cz-or.z0)-pi-r,s=Yc+r,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[o,i],[o,a],[f,a]],m=Math.atan2(a,f),h=Math.atan2(c,n);for(let u=1;u<10;u++){let d=m+(h-m)*u/10;l.push([Math.cos(d)*s,Math.sin(d)*s])}return l.map(([u,d])=>[X.cx+e*u,X.cz+t*d])}function u4(e,t,r){let n=r[0]-t[0],o=r[1]-t[1],a=Math.hypot(n,o),i=n/a,s=o/a,c=-s,f=i,l=x0*.5,m=-l,h=a+l,u=[],d=Math.max(1,Math.ceil((h-m)/1));for(let p=0;p<=d;p++){let g=m+(h-m)*p/d,x=[];for(let y=0;y<hi.length;y++){let[w,T]=hi[y],z=Math.min(hi.length-2,y),L=hi[Math.max(0,y-1)],O=hi[Math.min(hi.length-1,y+1)],U=(O[0]-L[0])*x0,Z=(O[1]-L[1])*di,J=-U,ce=Math.hypot(Z,J)||1,H=[t[0]+i*g+c*w*x0,T*di,t[1]+s*g+f*w*x0],j=[c*(-Z/ce),-J/ce,f*(-Z/ce)];x.push(e.vert(H,j[1]<-.2?[c*Math.sign(w),.3,f*Math.sign(w)]:j,[$e.HEDGE,0,0]))}u.push(x)}for(let p=0;p<d;p++)for(let g=0;g<hi.length-1;g++)e.tri(u[p][g],u[p+1][g],u[p+1][g+1]),e.tri(u[p][g],u[p+1][g+1],u[p][g+1]);for(let[p,g]of[[0,-1],[d,1]]){let x=u[p],y=e.vert([t[0]+i*(p?h:m),di*.5,t[1]+s*(p?h:m)],[i*g,0,s*g],[$e.HEDGE,0,0]);for(let w=0;w<x.length-1;w++)e.tri(y,x[w],x[w+1])}}function d4(e){for(let t of[-1,1])for(let r of[-1,1]){let n=h4(t,r,.3);for(let o=0;o<n.length;o++)u4(e,n[o],n[(o+1)%n.length])}}function p4(e){let t=X.cx,r=X.cz,n=()=>[$e.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,r,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,r,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,r,16,{mat:()=>[$e.DARK,0,0]});let o={mat:()=>[$e.IRON,0,0]};e.tube([[t-.72,1.1,r],[t-.72,1.9,r],[t-.7,2.3,r]],()=>.035,8,6,o),e.tube([[t+.72,1.1,r],[t+.72,1.9,r],[t+.7,2.3,r]],()=>.035,8,6,o);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,r])}e.tube(a,()=>.03,20,6,o),e.tube([[t-.45,2.25,r],[t,2.38,r],[t+.45,2.25,r]],()=>.02,8,5,o),e.ellipsoid([t,2.32,r],[.03,.13,.13],6,10,o);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*l*i*-1+0),1.95+Math.sin(f)*l,r])}e.tube(s,()=>.016,16,5,o)}}function v4(e){for(let[t,r]of ph)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,r,20,{mat:()=>[$e.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,r,12,{mat:()=>[$e.SOIL,0,0]}),e.tube([[t,.6,r],[t+.02,1,r-.01],[t-.01,1.45,r+.02]],n=>.045-n*.02,6,6,{mat:()=>[$e.BARK,0,0]})}function m4(e){let[t,,r]=_a.c,n=um(7),o=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of o){let c=[[t+a*.05,0,r+i*.05],[t+a*.25,s*.35,r+i*.25],[t+a*.6,s*.7,r+i*.6],[t+a,s,r+i],[t+a*1.35+(n()-.5),s+1.4,r+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[$e.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,m=[t+a*l,s*l,r+i*l],h=n()*Math.PI*2;e.tube([m,[m[0]+Math.cos(h)*1.3,m[1]+.9,m[2]+Math.sin(h)*1.3],[m[0]+Math.cos(h)*2.3,m[1]+1.4+n(),m[2]+Math.sin(h)*2.3]],u=>.08*(1-u*.7),8,6,{mat:()=>[$e.BARK,0,0]})}}for(let a of $o.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[$e.BARK,0,0]})}function g4(e){let t=()=>[$e.FARBRICK,0,0],r=()=>[$e.LEAD,0,0],n=(a,i,s,c,f,l)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let m=[];for(let u=0;u<=12;u++){let d=u/12*Math.PI/2,p=Math.cos(d)*s,g=Math.sin(d)*f;l&&(p*=1-.18*Math.sin(d*2)),m.push([Math.max(p,s*.12),c+g])}e.lathe(m,a,i,28,{mat:r});let h=c+f;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:r})};en(e,14,0,104,52,26,150,$e.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:r});let o=(a,i,s)=>{en(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,$e.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};o(20.5,109,36),o(46.5,112,38)}function x4(e){let r=[X.cx,0,X.cz],n=24,o=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=o;c++){let f=Math.PI/2*(c/o)-.05,l=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],m=[r[0]+l[0]*420,r[1]+l[1]*420,r[2]+l[2]*420];a[i].push(e.vert(m,[-l[0],-l[1],-l[2]],[$e.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<o;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function y4(){let e=[],t=[],r=[],n=[],o=Kw.createBuilder(e,t,r,n);return f4(o),l4(o),d4(o),p4(o),v4(o),m4(o),o.save(),o.translate(vs[0],0,vs[1]),g4(o),o.restore(),x4(o),{position:e,normal:t,elements:r,attr:n}}var hm=[[[13.65,0,Ma.z0-.7],[Ma.x1+.7,10.6,X.south]],[[X.westBack,Sa,X.northCol-Ve],[X.eastBack,ho,X.northBack+3.4]],[[It.x0,ho,X.northCol-Ve],[It.x1,It.top,X.northCol+2.6]],[[X.westBack,0,X.south],[X.westCol+Ve,Ea,X.northBack+.3]],[[X.eastCol-Ve,0,X.south],[X.eastBack,Ea,X.northBack+.3]],[[14+vs[0],0,104+vs[1]],[52+vs[0],26,150+vs[1]]]];function b4(e,t,r,n){let o=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<r[i]||e[i]>n[i])return!1;continue}let s=(r[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),o=Math.max(o,s),a=Math.min(a,c),o>a)return!1}return!0}function Xc(e,t,r,n){let o=[(e[0]-r[0])/n[0],(e[1]-r[1])/n[1],(e[2]-r[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=o[0]*a[0]+o[1]*a[1]+o[2]*a[2],c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-1,f=s*s-i*c;if(f<=0)return 0;let l=Math.sqrt(f),m=Math.max(0,(-s-l)/i),h=(-s+l)/i;return Math.max(0,h-m)}function uh(e){for(let[t,r]of hm)if(b4(e,Do,t,r))return 0;return 1}function um(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function w4(){let e=[],t=[],r=[],n=[],o=[],a=[],i=[],s=um(21),c=(d,p,g,x,y,w,T)=>{let z=e.length/3;for(let[L,O]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...d),t.push(L,O),r.push(p,g,x),n.push(...y),o.push(...w),a.push(...T);i.push(z,z+1,z+2,z,z+2,z+3)},f=(d,p)=>{let g=1;for(let x of $o){if(x===p||!x.shadow)continue;let y=Xc(d,Do,x.c,x.r);y>0&&(g*=Math.exp(-y*.9))}return g},l=$o.map(d=>({...d,pts:null}));for(let d of l)for(let p=0;p<d.n;p++){let g;do g=[s()*2-1,s()*2-1,s()*2-1];while(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]>1);let x=Math.hypot(g[0],g[1],g[2])||1,y=Math.pow(s(),.35)*.98,w=[g[0]/x*y,g[1]/x*y,g[2]/x*y];if(d.spindle){let H=w[1],j=Math.sqrt(Math.max(.02,1-H*H))*(H>0?1-H*.55:1+H*.25),de=Math.hypot(w[0],w[2])||1,ve=j*Math.min(1,de*1.4);w=[w[0]/de*ve,H,w[2]/de*ve]}d.magnolia&&w[1]<-.55&&(w[1]=-.55+(w[1]+.55)*.35);let T=[d.c[0]+w[0]*d.r[0],d.c[1]+w[1]*d.r[1],d.c[2]+w[2]*d.r[2]],z,L;if(d.magnolia){let H=0;for(let ve of sm)H=Math.max(H,Xc(T,Do,ve.c,ve.r));z=Math.exp(-H*1.1);let j=1;for(let ve of $o)if(!ve.magnolia&&ve.shadow){let it=Xc(T,Do,ve.c,ve.r);it>0&&(j*=Math.exp(-it*.9))}z*=uh(T)*j;let de=t4(T,_a.c);L=Qc([de[0]/_a.r[0]+w[0]*.5,de[1]/_a.r[1]+w[1]*.5,de[2]/_a.r[2]+w[2]*.5]),y=Math.min(1,Math.hypot(de[0]/_a.r[0],de[1]/_a.r[1],de[2]/_a.r[2])*.6+y*.4)}else{let H=Xc(T,Do,d.c,d.r);z=Math.exp(-H*(d.spindle?2.2:1.25)),z*=uh(T)*f(T,$o[l.indexOf(d)]),L=Qc([w[0]/d.r[0],w[1]/d.r[1],w[2]/d.r[2]])}let O=Math.max(0,L[0]*Do[0]+L[1]*Do[1]+L[2]*Do[2]),U=.25+.75*Math.pow(y,1.5)*(.65+.35*(L[1]*.5+.5)),K=d.size[0]+(d.size[1]-d.size[0])*s(),Z=.85+s()*.3,J=d.leaf.map(H=>H*Z),ce=d.cell;d.cell===3&&s()<.35&&(ce=2),c(T,K,ce,s()*Math.PI*2,[z,U,.35+.65*O],J,d.bloom)}for(let[d,p]of cm){let g=s()<.5;for(let x=0;x<3;x++){let y=[d+(s()-.5)*.7,.28+s()*.22,p+(s()-.5)*.5],w=uh(y)*f(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[w,.6+s()*.3,.8],[.75,.9,.6],g?[1,.55,.75]:[.85,.8,1.15])}}let m=i.length/6,h=Array.from({length:m},(d,p)=>p);for(let d=m-1;d>0;d--){let p=Math.floor(s()*(d+1));[h[d],h[p]]=[h[p],h[d]]}let u=[];for(let d of h)for(let p=0;p<6;p++)u.push(i[d*6+p]);return{center:e,corner:t,par:r,light:n,tint:o,bloom:a,elements:u}}var je=e=>e.toFixed(4),_0=e=>`vec3(${je(e[0])}, ${je(e[1])}, ${je(e[2])})`,dm=`
const vec3 SUN = ${_0(Do)};
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
`,_4=hm.map(([e,t])=>`if (hitBox(ro, SUN, ${_0(e)}, ${_0(t)})) return 0.0;`).join(`
	`),E4=$o.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${_0(e.c)}, ${_0(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),M4=(e,t,r,n,o,a,i,s,c)=>`
	{
		float t = (${je(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${je(Sa)} && u > ${je(r-Ve)} && u < ${je(r+n*o+Ve)}) {
				float k = floor((u - ${je(r)}) / ${je(n)});
				float a = ${je(r)} + k * ${je(n)} + (k < 0.5 ? ${je(a)} : 0.02);
				float b = ${je(r)} + (k + 1.0) * ${je(n)} - (k > ${je(o-1.5)} ? ${je(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${je(s)}) < 0.5 ? 0.0 : ${je(y0+.09)};
				bool hole = (q.y > sill && q.y < ${je(Mn)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${je(Mn)} && d * d + (q.y - ${je(Mn)}) * (q.y - ${je(Mn)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Zc=ui+.3,Jc=ui+.3,E0=Yc+.3,rm=or.x1-X.cx-pi-.3,S4=or.z1-X.cz-pi-.3,A4=X.cz-or.z0-pi-.3,T4=Math.sqrt(E0*E0-Zc*Zc),k4=Math.sqrt(E0*E0-Jc*Jc),L4=[[X.cx,X.cz,.86,1.18],[X.cx,X.cz,1.25,.3],...ph.map(([e,t])=>[e,t,.42,.65])].map(([e,t,r,n])=>`if (hitCyl(ro, vec2(${je(e)}, ${je(t)}), ${je(r)}, ${je(n)})) return 0.0;`).join(`
	`),z4=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${je(X.cx)}, ${je(X.cz)}));
	float b1 = xz.y > ${je(X.cz)} ? ${je(S4)} : ${je(A4)};
	vec2 A = vec2(${je(Zc)}, ${je(T4)}), Bp = vec2(${je(Zc)}, b1), C = vec2(${je(rm)}, b1);
	vec2 D = vec2(${je(rm)}, ${je(Jc)}), E = vec2(${je(k4)}, ${je(Jc)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${je(E0)}));
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
	${_4}
	${M4("z",X.northCol,X.westCol,dh,el,Ve+w0,Ve+w0,am,"ro.z > "+je(X.northCol-Ve))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${L4}
	if (ro.y < ${je(di)} && ro.x > ${je(or.x0)} && ro.x < ${je(or.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${je(di)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${je(x0*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${je(di)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${E4}
	return tr;
}
`,C4=`
precision highp float;
${nm}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${dm}
${z4}

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

	if (kind == ${$e.SKY}.0) {
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

	if (kind == ${$e.GROUND}.0) {
		bool yard = P.x > ${je(or.x0)} && P.x < ${je(or.x1)} && P.z < ${je(or.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${je(or.x0)}, ${je(or.x1)} - P.x);
			float ez = min(P.z - ${je(or.z0)}, ${je(or.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${je(X.cx)}), dz = abs(P.z - ${je(X.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${je(pi)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${je(pi)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${je(Yc)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${je(X.cz)}, P.x - ${je(X.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${je(Yc)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${je(ui)} || dz < ${je(ui)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${je(ui)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${je(X.cx)}, ${je(X.cz)})));
		}
	} else if (kind == ${$e.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${$e.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${$e.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${$e.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${je(di)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${$e.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${$e.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${$e.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${$e.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${$e.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${$e.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${$e.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${$e.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${$e.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${$e.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${$e.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${je(X.westCol)} || P.x > ${je(X.eastCol)} || P.z > ${je(X.northCol)}) && P.y < ${je(Sa+.05)} && P.z > ${je(X.south-.1)} && P.z < ${je(X.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${je(X.northCol)} ? P.z - ${je(X.northCol)} : (P.x < ${je(X.westCol)} ? ${je(X.westCol)} - P.x : P.x - ${je(X.eastCol)});
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
}`,R4=`
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
}`,N4=`
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
}`,P4=`
precision highp float;
${nm}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${dm}
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
}`;function I4(e,t,r){let n=e.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(t).then(o=>{if(!o.ok)throw new Error("Could not load "+t);return o.blob()}).then(o=>createImageBitmap(o,{premultiplyAlpha:"none"})).then(o=>n({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o)),n}vh.exports=e=>{let t=y4(),r=w4(),n=I4(e,"res/garden/foliage.webp",[0,0,0,0]),o=Date.now(),a=()=>hh.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:20,i=e({frag:C4,vert:R4,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>hh.gardenDetail}}),s=e({frag:P4,vert:N4,attributes:{center:r.center,corner:r.corner,par:r.par,light:r.light,tint:r.tint,bloom:r.bloom},elements:new Uint32Array(r.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(r.elements.length*hh.leafShare/6)*6});return function(){i(),s()}};vh.exports.layout={G:X,YARD:or,SUN:Do}});var bm=pe((GM,ym)=>{"use strict";var O4=En().GLSL,G4=Qa(),{C:xm}=Nn(),uo=xm.x1+.35,yh=xm.zc,mh=[uo-7.3,2,yh],vm=5.2*Math.PI/180,mm=2100,F4=725,D4=1288,$4=1450,q4=2576,vi=yh-3.2,gm=yh+3.3,gh=uo+5,xh=uo+11.7,tl=3.9,M0=uo+22.7,rl=40;function H4(){let e=[],t=[],r=[],n=[],o=G4.createBuilder(e,t,r,n),a=(l,m,h,u,d,p)=>{let g=[];for(let x=0;x<=d;x++){g.push([]);for(let y=0;y<=p;y++){let w=[0,1,2].map(T=>l[T]+m[T]*x/d+h[T]*y/p);g[x].push(o.vert(w,u,[0,0,0]))}}for(let x=0;x<d;x++)for(let y=0;y<p;y++)o.tri(g[x][y],g[x+1][y],g[x+1][y+1]),o.tri(g[x][y],g[x+1][y+1],g[x][y+1])},i=gm-vi,s=.7;a([uo-s,0,vi],[gh-uo+s,0,0],[0,0,i],[0,1,0],6,4);let c=xh-gh,f=Math.hypot(c,tl);return a([gh,0,vi],[c,tl,0],[0,0,i],[-tl/f,c/f,0],6,4),a([xh,tl,vi],[M0-xh,0,0],[0,0,i],[0,1,0],6,4),a([uo-s,0,vi],[M0-uo+s,0,0],[0,rl,0],[0,0,1],12,12),a([uo-s,0,gm],[M0-uo+s,0,0],[0,rl,0],[0,0,-1],12,12),a([M0,0,vi],[0,rl,0],[0,0,i],[-1,0,0],8,4),a([uo-s,rl,vi],[M0-uo+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:r,attr:n}}var To=e=>e.toFixed(5),B4=`
precision highp float;
${O4}
uniform sampler2D photo;
varying vec3 v_pos;

void main() {
	vec3 d = v_pos - vec3(${To(mh[0])}, ${To(mh[1])}, ${To(mh[2])});
	float c = ${To(Math.cos(vm))}, s = ${To(Math.sin(vm))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${To(F4)} + ${To(mm)} * d.z / fw, ${To(D4)} - ${To(mm)} * up / fw);
	vec2 uv = px / vec2(${To($4)}, ${To(q4)});
	vec2 cuv = clamp(uv, vec2(0.002), vec2(0.998));
	vec3 col = texture2D(photo, cuv).rgb;
	// beyond the edge of the photo, soften what is smeared in from the edge
	float outside = length(max(abs(uv - 0.5) - 0.5, 0.0));
	// (a very blurred sample there, so it reads as a wall in shade, not as streaks)
	vec3 soft = texture2D(photo, cuv, 7.0).rgb * vec3(0.95, 0.9, 0.82);
	col = mix(col, soft, smoothstep(0.0, 0.06, outside));
	// the photo is a little dark for a sunny day
	col = pow(col, vec3(0.9)) * 1.08;
	gl_FragColor = vec4(toNight(col, 0.22), 1.0);
}`,U4=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position;
varying vec3 v_pos;
void main() {
	v_pos = position;
	vec3 p = position;
	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`;ym.exports=e=>{let t=H4(),r=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(o=>{if(!o.ok)throw new Error("Could not load the Florence photo");return o.blob()}).then(o=>createImageBitmap(o)).then(o=>r({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o));let n=e({frag:B4,vert:U4,attributes:{position:t.position},elements:new Uint32Array(t.elements),uniforms:{photo:r},cull:{enable:!1}});return function(){n()}}});var Am=pe((FM,Sm)=>{"use strict";var j4=En().GLSL,{A:wm,BENCH:W4,SHAFT:bh,TREE:S0,oculusGLSL:V4}=Eo(),X4=wo(),nl=S0.sxz,_m=S0.sy,Em=S0.yaw;function Y4(e){let t=new DataView(e),r=t.getUint32(4,!0),n=t.getUint32(8,!0),o=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,r*3);s+=r*6;let f=new Uint16Array(e,s,r*2);s+=r*4;let l=new Int8Array(e,s,r*3);s+=r*3,s=s+3&-4;let m=new Uint32Array(e,s,o);return{nV:r,nWood:n,nI:o,mn:a,sz:i,pos:c,uv:f,nrm:l,idx:m}}function K4(e){let t=new Float32Array(e.nV*3),r=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),o=new Float32Array(e.nV),a=Math.cos(Em),i=Math.sin(Em);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*nl,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*_m,l=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*nl;t[s*3]=wm.cx+a*c+i*l,t[s*3+1]=W4.soil+.02+f,t[s*3+2]=wm.zc-i*c+a*l;let m=e.nrm[s*3]/127/nl,h=e.nrm[s*3+1]/127/_m,u=e.nrm[s*3+2]/127/nl,d=Math.hypot(m,h,u)||1;m/=d,h/=d,u/=d,r[s*3]=a*m+i*u,r[s*3+1]=h,r[s*3+2]=-i*m+a*u,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,o[s]=s>=e.nWood?1:0}return{position:t,normal:r,uv:n,leaf:o,elements:e.idx}}function Mm(e,t,r,n){let o=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>o({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...r})).catch(a=>console.error(a)),o}var On=e=>e.toFixed(4),gs=S0.crownC,xs=S0.crownR,Q4=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

const vec3 SHAFT = vec3(${On(bh[0])}, ${On(bh[1])}, ${On(bh[2])});

void main() {
	vec3 p = position;
	// leaves stir a little
	float h = max(p.y - 1.5, 0.0);
	p.x += leaf * sin(time * 1.7 + p.y * 2.3 + p.z * 1.9) * 0.012 * h;
	p.z += leaf * cos(time * 1.3 + p.x * 2.1) * 0.010 * h;
	v_pos = p;
	v_n = normal;
	v_uv = uv;
	v_leaf = leaf;

	// how much of the crown lies between this point and the oculus
	vec3 cc = vec3(${On(gs[0])}, ${On(gs[1])}, ${On(gs[2])});
	vec3 cr = vec3(${On(xs[0])}, ${On(xs[1])}, ${On(xs[2])});
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
}`,Ta=ni(),Z4=`
precision highp float;
${j4}
uniform float time;
${Ta.lanternGLSL(Ta.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Ta.LANTERNS[Ta.TREE_LANTERN[0]].x.toFixed(3)}, ${Ta.LANTERNS[Ta.TREE_LANTERN[0]].y.toFixed(3)}, ${Ta.LANTERNS[Ta.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

${V4()}

float oculusSun(vec3 p) {
	return oculusOpen(p);
}

void main() {
	vec3 N = normalize(v_n);
	vec3 base;
	if (v_leaf > 0.5) {
		vec4 t = texture2D(leaves, v_uv);
		if (t.a < 0.5) discard;
		base = t.rgb * vec3(0.92, 1.0, 0.86);
		if (!gl_FrontFacing) N = -N;
	} else {
		// bark from the three sides, blended by the normal
		vec3 w = abs(N);
		w = pow(w, vec3(4.0));
		w /= (w.x + w.y + w.z);
		vec3 q = v_pos * 0.9;
		base = texture2D(bark, q.yz).rgb * w.x + texture2D(bark, q.xz).rgb * w.y + texture2D(bark, q.xy).rgb * w.z;
		base *= 0.85;
	}

	// depth in the crown: darker deep inside
	vec3 rel = (v_pos - vec3(${On(gs[0])}, ${On(gs[1])}, ${On(gs[2])})) / vec3(${On(xs[0])}, ${On(xs[1])}, ${On(xs[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.45, 1.0, outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));

	// soft daylight in the court, coming mostly from above
	float up = 0.6 + 0.4 * N.y;
	float light = (0.42 + 0.22 * up) * ao;

	// the shaft of sun through the oculus
	float ndl = v_leaf > 0.5 ? (0.35 + 0.65 * abs(dot(N, SHAFT))) : max(dot(N, SHAFT), 0.0);
	float sun = oculusSun(v_pos) * v_shade * ndl;
	light += sun * 1.45;

	vec3 col = base * light * vec3(1.03, 1.0, 0.94);
	// leaves glow a little where the sun comes through them
	col += v_leaf * base * vec3(0.55, 0.65, 0.25) * oculusSun(v_pos) * v_shade * 0.35;
	// at night the little lantern on the bench glints on the bark and
	// the undersides of the leaves
	vec3 lan = lanternLight(v_pos, v_leaf > 0.5 ? normalize(LANTERN_POS - v_pos) : N);
	gl_FragColor = vec4(toNight(col, 1.15) + base * lan * 1.2, 1.0);
}`;Sm.exports=e=>{let t=null,r=Mm(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Mm(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),o=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=K4(Y4(a));t=e({vert:Q4,frag:Z4,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:r,bark:n,time:()=>X4.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Im=pe((DM,Mh)=>{"use strict";var Eh=En().GLSL,{A:Tm,BENCH:Rm,oculusGLSL:Nm}=Eo(),km=wo(),J4=1.74,e_=1.877,qo=J4/e_,gi={x:Tm.cx-1.22,z:Tm.zc+.02,hipY:Rm.seat+.115},Bn=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],wh=e=>[-e[0],-e[1],-e[2],e[3]],xi=(e,t)=>{let r=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/r*n,e[1]/r*n,e[2]/r*n,Math.cos(t/2)]},_h=(e,t,r)=>Bn(xi([0,0,1],r*Math.PI/180),Bn(xi([0,1,0],t*Math.PI/180),xi([1,0,0],e*Math.PI/180))),t_=e=>{let t=Math.hypot(...e)||1;return e.map(r=>r/t)};function Qo(e,t,r){let[n,o,a,i]=t,s=n*n,c=o*o,f=a*a,l=n*o,m=n*a,h=o*a,u=i*n,d=i*o,p=i*a;return[(1-2*(c+f))*r[0],2*(l+p)*r[0],2*(m-d)*r[0],0,2*(l-p)*r[1],(1-2*(s+f))*r[1],2*(h+u)*r[1],0,2*(m+d)*r[2],2*(h-u)*r[2],(1-2*(s+c))*r[2],0,e[0],e[1],e[2],1]}function po(e,t){let r=new Array(16);for(let n=0;n<4;n++)for(let o=0;o<4;o++)r[n*4+o]=e[o]*t[n*4]+e[4+o]*t[n*4+1]+e[8+o]*t[n*4+2]+e[12+o]*t[n*4+3];return r}function r_(e){let t=Math.hypot(e[0],e[1],e[2]),r=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),o=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/r,c=e[5]/r,f=e[6]/r,l=e[8]/n,m=e[9]/n,h=e[10]/n,u=o+c+h,d;if(u>0){let p=Math.sqrt(u+1)*2;d=[(f-m)/p,(l-i)/p,(a-s)/p,p/4]}else if(o>c&&o>h){let p=Math.sqrt(1+o-c-h)*2;d=[p/4,(s+a)/p,(l+i)/p,(f-m)/p]}else if(c>h){let p=Math.sqrt(1+c-o-h)*2;d=[(s+a)/p,p/4,(m+f)/p,(l-i)/p]}else{let p=Math.sqrt(1+h-o-c)*2;d=[(l+i)/p,(m+f)/p,p/4,(a-s)/p]}return t_(d)}var al={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,r=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,o)=>{al[e+"Hand"+n+"1"]=[0,0,t*(18+o*6)*r],al[e+"Hand"+n+"2"]=[0,0,t*(26+o*6)*r],al[e+"Hand"+n+"3"]=[0,0,t*16*r]})}function mi(e,t,r){let n=e-t;return n-=Math.round(n),Math.exp(-(n/r)*(n/r))}function Lm(e){let t=9+20*Math.cos(2*Math.PI*e),r=4+13*mi(e,.14,.07)+57*mi(e,.72,.12),n=5*mi(e,.06,.04)-9*mi(e,.42,.12)+17*mi(e,.62,.05)-3*mi(e,.85,.1),o=-26*mi(e,.58,.06);return{hip:t,knee:r,ankle:n,toe:o}}function n_(e){let t=(e%1+1)%1,r=Lm(t),n=Lm(t+.5),o=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*o,0,0],RightArm:[-16*o,0,0],LeftForeArm:[0,-14-8*Math.max(0,-o),0],RightForeArm:[0,14+8*Math.max(0,o),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-r.hip,0,0],LeftLeg:[r.knee,0,0],LeftFoot:[r.ankle,0,0],LeftToeBase:[r.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*o}}var zm=`
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
}`,il=ni(),Cm=`
precision highp float;
${Eh}
uniform float time;
${il.lanternGLSL(il.TREE_LANTERN)}
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
// in the confessional: the priest's lamp (xyz, strength), and how much of
// the court's own light reaches him (0 there)
uniform vec4 boothLamp;
uniform float court;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${Nm()}
void main() {
	vec4 t = texture2D(tex, v_uv);
	t.a *= alphaScale;
	if (t.a < alphaCut) discard;
	float gloss = 0.0;
	// the outfit: black wool coat, ribbed turtleneck, pinstriped trousers,
	// leather belt and shoes
	if (kind > 0.5) {
		float n = fract(sin(dot(floor(v_uv * vec2(900.0, 900.0)), vec2(12.9898, 78.233))) * 43758.5453);
		if (kind < 1.5) {
			t.rgb = vec3(0.038, 0.037, 0.040) * (0.9 + 0.2 * n);
			gloss = 0.05;
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
		} else {
			// the scarf: dark maroon wool, knitted in soft ribs
			float rib = abs(fract(v_uv.x / 0.006) - 0.5) * 2.0;
			float st = abs(fract(v_uv.y / 0.008 + 0.5 * step(0.5, fract(v_uv.x / 0.012))) - 0.5) * 2.0;
			t.rgb = vec3(0.24, 0.04, 0.055) * (0.7 + 0.25 * smoothstep(0.1, 0.9, rib) + 0.12 * st + 0.12 * n);
			gloss = 0.0;
		}
	}
	vec3 N = normalize(v_n);
	if (!gl_FrontFacing) N = -N;
	vec3 V = normalize(v_eye - v_pos);
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
	vec3 H = normalize(SHAFT + V);
	col += vec3(1.0, 0.95, 0.85) * pow(max(dot(N, H), 0.0), 40.0) * sun * (0.06 + 0.1 * skin);
	// polish on leather and metal, and a soft sheen on the cloth
	vec3 R = reflect(-V, N);
	col += vec3(0.9, 0.88, 0.85) * gloss * (pow(max(dot(R, SHAFT), 0.0), 30.0) * (0.3 + sun) + 0.08 * smoothstep(0.2, 1.0, R.y));
	col += vec3(0.05, 0.05, 0.055) * step(0.5, kind) * pow(1.0 - max(dot(N, V), 0.0), 3.0);
	col = toNight(col, 0.85);
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
	vec3 lan = lanternLight(v_pos, N);
	col += t.rgb * lan * (1.3 + 1.2 * skin) + lan * gloss * 0.4;
	gl_FragColor = vec4(col, t.a);
}`;function o_(e,t){let r=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((o,a)=>{let i=new Image;i.onload=()=>o(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}var Pm={w:.13,h:.2},ol=e=>.011*(1-Math.pow(1-e,3));function a_(){let e=[],t=[],r=[],n=[],o=[],a=(p,g,x,y,w,T,z)=>{let L=e.length/3;[p,g,x,y].forEach((O,U)=>{e.push(...O),t.push(...w),r.push(...z[U]),n.push(T)}),o.push(L,L+1,L+2,L,L+2,L+3)},{w:i,h:s}=Pm,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,m=i+.001,h=c+.001;a([0,l,-h],[m,l,-h],[m,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[m,l+.001,h],[m,l+.001,-h],[0,1,0],2,f),a([-m,l,-h],[0,l,-h],[0,l,h],[-m,l,h],[0,-1,0],2,f),a([-m,l+.001,-h],[-m,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let u=8;for(let p of[1,-1]){for(let x=0;x<u;x++){let y=x/u,w=(x+1)/u,T=(.002+y*(i-.002))*p,z=(.002+w*(i-.002))*p,L=ol(y),O=ol(w),U=p>0?y:1-y,K=p>0?w:1-w,Z=1,J=-(O-L)/(z-T);a([T,L,-c],[z,O,-c],[z,O,c],[T,L,c],[J,Z,0],3,[[U,1],[K,1],[K,0],[U,0]]),a([T,l+.001,c],[z,l+.001,c],[z,O,c],[T,L,c],[0,0,1],4,f),a([T,L,-c],[z,O,-c],[z,l+.001,-c],[T,l+.001,-c],[0,0,-1],4,f)}let g=i*p;a([g,l+.001,-c],[g,ol(1),-c],[g,ol(1),c],[g,l+.001,c],[p,0,0],4,f)}let d=10;for(let p=0;p<d;p++){let g=p/d,x=(p+1)/d,y=e.length/3;for(let[w,T]of[[g,-c],[x,-c],[x,c],[g,c]])e.push(w,0,T),t.push(0,1,0),r.push(w,(T+c)/s),n.push(5);o.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:r,kind:n,idx:o}}function i_(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let r=7,n=()=>(r=r*16807%2147483647,r/2147483647),o=(i,s,c,f,l,m,h)=>{for(let u=0;u<m;u++){let d=i+(n()-.5)*c*2,p=s+(n()-.5)*f*2,g=20+n()*60,x=t.createRadialGradient(d,p,0,d,p,g);x.addColorStop(0,`rgba(${l},${h})`),x.addColorStop(1,`rgba(${l},0)`),t.fillStyle=x,t.fillRect(d-g,p-g,g*2,g*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var s_=`
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
		float r = u * ${Pm.w.toFixed(3)};
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
}`,c_=`
precision highp float;
${Eh}
uniform float time;
${il.lanternGLSL(il.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Nm()}
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
}`;function l_(){let e=[],t=[],r=[],n=[],o=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],m=16;for(let h=0;h<l.length;h++){let[u,d,p,g]=l[h],x=g===2?.45:1;for(let y=0;y<=m;y++){let w=y/m*Math.PI*2;e.push(Math.cos(w)*u,d,Math.sin(w)*u*x);let T=Math.max(h-1,0),z=Math.min(h+1,l.length-1),L=l[z][0]-l[T][0],O=l[z][1]-l[T][1],U=Math.hypot(L,O)||1;t.push(Math.cos(w)*O/U,-L/U,Math.sin(w)*O/U/x),r.push(...p),n.push(g)}}for(let h=0;h<l.length-1;h++)for(let u=0;u<m;u++){let d=h*(m+1)+u,p=d+m+1;o.push(d,p,d+1,d+1,p,p+1)}return{pos:e,nrm:t,col:r,mat:n,idx:o}}var f_=`
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
}`,h_=`
precision highp float;
${Eh}
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
}`,u_=`
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
}`,d_=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Mh.exports=e=>{let t="res/avatar/",r=null,n=Date.now(),o=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[gi.x,1.9,gi.z],glow:0};Promise.all([fetch(t+"avatar.json").then(L=>L.json()),fetch(t+"avatar.bin").then(L=>L.arrayBuffer())]).then(([L,O])=>{r=s(L,O)}).catch(L=>console.error(L));let i=e.texture({data:[[[255,255,255,255]]]});function s(L,O){let U=(ne,Ke)=>new Float32Array(O,ne,Ke),K=L.bones,Z=K.length,J={};K.forEach((ne,Ke)=>{J[ne.name]=Ke});let ce=[];for(let ne=0;ne<Z;ne++)ce.push(Array.from(U(L.ibm+ne*64,16)));let H=K.map(ne=>Qo(ne.t,ne.r,ne.s)),j=[];for(let ne=0;ne<Z;ne++){let Ke=K[ne].parent;j[ne]=Ke<0?H[ne]:po(j[Ke],H[ne])}let de=j.map(r_),ve=L.meshes.map(ne=>{let Ke=U(ne.pos,ne.n*3),ot=U(ne.nrm,ne.n*3),Rt=U(ne.uv,ne.n*2),Pt=new Uint8Array(O,ne.jnt,ne.n*4),lr=U(ne.wgt,ne.n*4),Et=new Uint16Array(O,ne.idx,ne.ni),_={};for(let Sn in ne.morphs){let wn=ne.morphs[Sn];_[Sn]={idx:new Uint16Array(O,wn.idx,wn.n),d:U(wn.d,wn.n*3)}}let qt=new Float32Array(ne.n*3),st=new Float32Array(ne.n*3),kt=new Float32Array(ne.n*3),Lt=e.buffer({data:qt,usage:"dynamic"}),We=e.buffer({data:st,usage:"dynamic"}),Yt=/hair/.test(ne.name),Ht=/EyeAO|Eyelash/.test(ne.name),fr=/Body|Head/.test(ne.name),Rr=ne.kind||0;return{m:ne,pos:Ke,nrm:ot,uv:Rt,jnt:Pt,wgt:lr,idx:Et,morphs:_,outP:qt,outN:st,work:kt,pb:Lt,nbuf:We,tex:ne.tex?o_(e,t+ne.tex):i,kind:Rr,alphaScale:/EyeAO/.test(ne.name)?.25:1,blend:ne.blend||Yt,alphaCut:Yt?.35:Ht?.02:0,skin:fr?1:0}}),it=e({vert:zm,frag:Cm,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>T?T.lamp:[0,0,0,0],court:()=>T?0:1},cull:{enable:!1}}),_e=e({vert:zm,frag:Cm,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>T?T.lamp:[0,0,0,0],court:()=>T?0:1},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}});for(let ne of ve)ne.uvBuf=e.buffer(ne.uv),ne.el=e.elements({data:ne.idx,type:"uint16"});let ht=j[J.Hips],bt=xi([1,0,0],-Math.PI/2),_t=po(Qo([gi.x-ht[12]*qo,gi.hipY-ht[14]*qo,gi.z+ht[13]*qo],bt,[1,1,1]),Qo([0,0,0],[0,0,0,1],[qo,qo,qo])),Le=new Array(Z),vt=-1,pt=(ne,Ke,ot)=>po(Qo([ne,0,Ke],xi([0,1,0],ot),[1,1,1]),Qo([0,0,0],[0,0,0,1],[qo,qo,qo])),Tt=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(ne=>J[ne]),Gt=Tt.map(ne=>j[ne][13]*qo);function Ft(ne){let Ke=n_(ne.phase),ot={},Rt=st=>{for(let kt in st){let Lt=st[kt],We=_h(Lt[0],Lt[1],Lt[2]);ot[kt]=ot[kt]?Bn(ot[kt],We):We}};Rt(Ke.swing),Rt(Ke.pose);let Pt=Math.cos(ne.heading),lr=-Math.sin(ne.heading),Et=pt(ne.x+Pt*Ke.sway,ne.z+lr*Ke.sway,ne.heading),_=new Array(Z);for(let st=0;st<Z;st++){let kt=K[st],Lt=H[st],We=ot[kt.name];if(We){let Yt=de[st],Ht=Bn(wh(Yt),Bn(We,Yt));Lt=Qo(kt.t,Bn(kt.r,Ht),kt.s)}_[st]=kt.parent<0?po(Et,Lt):po(_[kt.parent],Lt)}let qt=1/0;Tt.forEach((st,kt)=>{qt=Math.min(qt,_[st][13]-Gt[kt])});for(let st=0;st<Z;st++)_[st]=_[st].slice(),_[st][13]-=qt,Le[st]=po(_[st],ce[st]);return{blink:0}}function Ge(ne,Ke){let ot=Math.sin(ne*2*Math.PI/4.6),Rt=Math.sin(ne*.37)*.6+Math.sin(ne*.83+1)*.4,Pt={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+ot*.8,0,0],Spine2:[4+ot*.6,0,0],Neck:[10,0,0],Head:[12+Rt*2,Rt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},lr={};for(let Lt in Pt){let We=Pt[Lt];lr[Lt]=_h(We[0],We[1],We[2])}let Et=pt(Ke.x,Ke.z,Ke.heading),_=new Array(Z);for(let Lt=0;Lt<Z;Lt++){let We=K[Lt],Yt=H[Lt],Ht=lr[We.name];if(Ht){let fr=de[Lt],Rr=Bn(wh(fr),Bn(Ht,fr));Yt=Qo(We.t,Bn(We.r,Rr),We.s)}_[Lt]=We.parent<0?po(Et,Yt):po(_[We.parent],Yt)}let st=_[J.Hips][13]-(Ke.y+.1);for(let Lt=0;Lt<Z;Lt++)_[Lt]=_[Lt].slice(),_[Lt][13]-=st,Le[Lt]=po(_[Lt],ce[Lt]);let kt=ne%4.1;return{blink:kt<.16?Math.sin(kt/.16*Math.PI):0}}function Ze(ne,Ke){if(T)return Ge(ne,T);if(Ke)return Ft(Ke);let ot=Math.sin(ne*2*Math.PI/4.2),Rt=ne%3.7,Pt=Rt<.16?Math.sin(Rt/.16*Math.PI):0,Et={RightArm:[0,0,11*Math.sin(ne*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((We,Yt)=>{let Ht=Math.sin(ne*1.1-Yt*.5);Et["RightHand"+We+"1"]=[0,0,8+12*Ht],Et["RightHand"+We+"2"]=[0,0,6+10*Ht]});let _={},qt=(We,Yt)=>{for(let Ht in We){let fr=We[Ht],Rr=_h(fr[0]*Yt,fr[1]*Yt,fr[2]*Yt);_[Ht]=_[Ht]?Bn(_[Ht],Rr):Rr}};qt(al,1),qt({Spine1:[ot*.8,0,0],Spine2:[ot*.6,0,0]},1),qt(Et,1);let st=new Array(Z),kt=new Array(Z);for(let We=0;We<Z;We++){let Yt=K[We],Ht=H[We],fr=_[Yt.name];if(fr){let Rr=de[We],Sn=Bn(wh(Rr),Bn(fr,Rr));Ht=Qo(Yt.t,Bn(Yt.r,Sn),Yt.s)}st[We]=Yt.parent<0?po(_t,Ht):po(st[Yt.parent],Ht),kt[We]=null}for(let We=0;We<Z;We++)Le[We]=po(st[We],ce[We]);let Lt=We=>[We[12],We[13],We[14]];return a.headPos=Lt(st[J.Head]),a.hipsPos=Lt(st[J.Hips]),a.headM=st[J.Head],{blink:Pt}}function et(ne,Ke){let{pos:ot,nrm:Rt,jnt:Pt,wgt:lr,outP:Et,outN:_,work:qt,m:st}=ne,kt=st.n,Lt=ot;if(Ke){qt.set(ot);for(let We in ne.morphs){let Yt=Ke[We]||0;if(Yt<=0)continue;let Ht=ne.morphs[We];for(let fr=0;fr<Ht.idx.length;fr++){let Rr=Ht.idx[fr]*3;qt[Rr]+=Ht.d[fr*3]*Yt,qt[Rr+1]+=Ht.d[fr*3+1]*Yt,qt[Rr+2]+=Ht.d[fr*3+2]*Yt}}Lt=qt}for(let We=0;We<kt;We++){let Yt=Lt[We*3],Ht=Lt[We*3+1],fr=Lt[We*3+2],Rr=Rt[We*3],Sn=Rt[We*3+1],wn=Rt[We*3+2],tr=0,ra=0,Oa=0,Ga=0,Ho=0,na=0;for(let oa=0;oa<4;oa++){let _n=lr[We*4+oa];if(_n===0)continue;let ur=Le[Pt[We*4+oa]];tr+=_n*(ur[0]*Yt+ur[4]*Ht+ur[8]*fr+ur[12]),ra+=_n*(ur[1]*Yt+ur[5]*Ht+ur[9]*fr+ur[13]),Oa+=_n*(ur[2]*Yt+ur[6]*Ht+ur[10]*fr+ur[14]),Ga+=_n*(ur[0]*Rr+ur[4]*Sn+ur[8]*wn),Ho+=_n*(ur[1]*Rr+ur[5]*Sn+ur[9]*wn),na+=_n*(ur[2]*Rr+ur[6]*Sn+ur[10]*wn)}Et[We*3]=tr,Et[We*3+1]=ra,Et[We*3+2]=Oa;let Lo=Math.hypot(Ga,Ho,na)||1;_[We*3]=Ga/Lo,_[We*3+1]=Ho/Lo,_[We*3+2]=na/Lo}st.grid&&!mt&&!T&&Ot(ne),ne.pb.subdata(Et),ne.nbuf.subdata(_)}function Ot(ne){let[Ke,ot]=ne.m.grid,Rt=ne.outP,Pt=ne.outN,lr=Rm.seat+.012;for(let Et=1;Et<Ke;Et++){let _=Math.pow(1-Et/(Ke-1),1.5);for(let qt=0;qt<ot;qt++){let st=(Et*ot+qt)*3;Rt[st+1]>lr?Rt[st+1]=lr+(Rt[st+1]-lr)*Math.max(_,.15):Rt[st+1]=lr}}for(let Et=0;Et<Pt.length;Et+=3)Pt[Et]=0,Pt[Et+1]=1,Pt[Et+2]=0}let mt=!1;function cr(ne,Ke){mt=!!Ke;let ot=Ze(ne,Ke),Rt={eyeBlinkLeft:ot.blink,eyeBlinkRight:ot.blink};for(let Pt of ve)et(Pt,Object.keys(Pt.morphs).length?Rt:null);a.pose=ot}return{parts:ve,update:cr,drawOpaque:it,drawBlend:_e,state:a}}function c(L,O,U){let K=Math.min(1,Math.max(0,(U-L)/(O-L)));return K*K*(3-2*K)}let f=a_(),l=i_(),m=l?e.texture({data:l,flipY:!1,min:"linear",mag:"linear"}):i,h=e({vert:s_,frag:c_,attributes:{position:f.pos,normal:f.nrm,uv:f.uv,kind:f.kind},elements:new Uint16Array(f.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:m},cull:{enable:!1}}),u=l_(),d=e({vert:f_,frag:h_,attributes:{position:u.pos,normal:u.nrm,color:u.col,mat:u.mat},elements:new Uint16Array(u.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),p=e({vert:u_,frag:d_,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function g(L){let O=L.headM,U=ve=>{let it=Math.hypot(...ve)||1;return ve.map(_e=>_e/it)},K=U([O[4],O[5],O[6]]),Z=U([O[8],O[9],O[10]]),J=K,ce=Z.map(ve=>-ve),H=[ce[1]*J[2]-ce[2]*J[1],ce[2]*J[0]-ce[0]*J[2],ce[0]*J[1]-ce[1]*J[0]],j=L.headPos,de=[0,1,2].map(ve=>j[ve]+K[ve]*.06+Z[ve]*.185);return[H[0],H[1],H[2],0,ce[0],ce[1],ce[2],0,J[0],J[1],J[2],0,de[0],de[1],de[2],1]}let x=-1,y="",w=null,T=null;function z(L){if(!r)return;let O=(km.motion,o()),U=w?[w.x,w.z,w.heading,w.phase].map(Z=>Z.toFixed(4)).join():"";(T||U!==y||!w&&Math.abs(O-x)>(km.isPhone?1/30:0))&&(r.update(O,w),x=O,y=U);for(let Z of r.parts)Z.blend||r.drawOpaque({pb:Z.pb,nb:Z.nbuf,uv:Z.uvBuf,el:Z.el,tex:Z.tex,alphaCut:Z.alphaCut,skin:Z.skin,kind:Z.kind,alphaScale:Z.alphaScale});let K=r.state;if(K.headM&&!w&&!T){h({model:g(K)});let Z=K.headPos,J=Math.sin(O*1.3)*.02,ce=[Z[0],Z[1]+.62+J,Z[2]+.05],H=O*.6,j=Qo(ce,Bn(xi([0,1,0],H),xi([0,0,1],.18)),[1.2,1.2,1.2]),de=.5+.5*Math.sin(O*2);d({model:j,pulse:de}),a.glowPos=ce,a.glow=.06+.03*de,p({center:[ce[0],ce[1]-.12,ce[2]],size:.1,pulse:de})}for(let Z of r.parts)Z.blend&&r.drawBlend({pb:Z.pb,nb:Z.nbuf,uv:Z.uvBuf,el:Z.el,tex:Z.tex,alphaCut:Z.alphaCut,skin:Z.skin,kind:Z.kind,alphaScale:Z.alphaScale})}return z.state=a,z.place=gi,z.setWalk=L=>{w=L||null,w&&(a.glow=0)},z.setSeat=L=>{T=L||null,a.glow=T?0:a.glow,x=-1},z};Mh.exports.PLACE=gi});var Sh=pe(($M,Om)=>{"use strict";Om.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Th=pe((qM,Hm)=>{"use strict";var $m=wo(),Gm=Qs(),ka=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Ah(){return $m.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var p_=`
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
`,Fm=!1;function qm(){if(Fm)return;Fm=!0;let e=document.createElement("style");e.textContent=p_,document.head.appendChild(e)}var v_='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function m_(e){return!e||!e.visit||!Ah()?"":(qm(),`<button type="button" class="visit-btn" data-visit="${ka(e.slug||"")}" aria-label="Visit what remained: watch ${ka(e.title)} come to life">${v_}<span>Visit what remained</span></button>`)}function g_(e){let t=e.getContext("2d");e.width=e.height=160;let r=t.createImageData(160,160),n=!0,o=0;return function a(i){if(n){if(i-o>70){o=i;let s=r.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(r,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var A0=null;function x_(e){if(A0||!e||!e.visit)return;qm();let t=document.activeElement;document.body.classList.add("visiting");let r="images/web/"+e.slug+($m.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${ka(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${ka(e.title)}, ${ka(Gm(e))}" src="${ka(r)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${ka(e.title)}</span>
			<span class="visit-meta">${ka(Gm(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let o=n.querySelector("video"),a=n.querySelector(".visit-title"),i=g_(n.querySelector(".visit-grain")),s=[],c=(g,x)=>s.push(setTimeout(g,x)),f=g=>g.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(g=>n.addEventListener(g,f));let l=g=>{g.key==="Escape"?(g.preventDefault(),p()):g.key===" "&&!(g.target&&g.target.tagName==="BUTTON")&&(g.preventDefault(),u()),g.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let m=g=>g.stopImmediatePropagation();window.addEventListener("keyup",m,!0);let h=!1;function u(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let g=n.querySelector('[data-act="back"]');g&&g.focus({preventScroll:!0})},1300))}function d(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{o.currentTime=0}catch(x){}let g=o.play();g&&g.catch&&g.catch(()=>u()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}o.addEventListener("timeupdate",()=>{o.duration&&o.currentTime>o.duration-1.2&&u()}),o.addEventListener("ended",u),o.addEventListener("error",u);function p(){if(A0){A0=null,s.forEach(clearTimeout),n.classList.remove("on");try{o.pause()}catch(g){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",m,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",p),n.querySelector(".visit-skip").addEventListener("click",()=>{try{o.pause()}catch(g){}u()}),n.querySelector(".visit-end").addEventListener("click",g=>{let x=g.target.closest("button");x&&(x.dataset.act==="back"&&p(),x.dataset.act==="again"&&(s.forEach(clearTimeout),d()))}),o.src=e.visit.video,A0={close:p},requestAnimationFrame(()=>{n.classList.add("on"),c(d,1300)})}var Dm={};function y_(e){if(!e||!e.visit||Dm[e.visit.video]||!Ah())return;Dm[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}Hm.exports={available:Ah,button:m_,open:x_,warm:y_,get active(){return!!A0}}});var kh=pe((HM,Bm)=>{Bm.exports=1e-6});var Lh=pe((BM,Um)=>{Um.exports=b_;function b_(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var Wm=pe((UM,jm)=>{jm.exports=w_;function w_(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var zh=pe((jM,Vm)=>{Vm.exports=__;function __(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}});var Ch=pe((WM,Xm)=>{Xm.exports=E_;function E_(e,t){var r=t[0],n=t[1],o=t[2],a=r*r+n*n+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var Rh=pe((VM,Ym)=>{Ym.exports=M_;function M_(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Jm=pe((XM,Zm)=>{Zm.exports=A_;var Km=zh(),Qm=Ch(),S_=Rh();function A_(e,t){var r=Km(e[0],e[1],e[2]),n=Km(t[0],t[1],t[2]);Qm(r,r),Qm(n,n);var o=S_(r,n);return o>1?0:Math.acos(o)}});var t2=pe((YM,e2)=>{e2.exports=T_;function T_(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var n2=pe((KM,r2)=>{r2.exports=k_;function k_(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}});var a2=pe((QM,o2)=>{o2.exports=L_;var Nh=kh();function L_(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(r-a)<=Nh*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=Nh*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(o-s)<=Nh*Math.max(1,Math.abs(o),Math.abs(s))}});var s2=pe((ZM,i2)=>{i2.exports=z_;function z_(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var l2=pe((JM,c2)=>{c2.exports=C_;function C_(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}});var Ph=pe((eS,f2)=>{f2.exports=R_;function R_(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}});var u2=pe((tS,h2)=>{h2.exports=Ph()});var Ih=pe((rS,d2)=>{d2.exports=N_;function N_(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}});var v2=pe((nS,p2)=>{p2.exports=Ih()});var Oh=pe((oS,m2)=>{m2.exports=P_;function P_(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}});var x2=pe((aS,g2)=>{g2.exports=Oh()});var b2=pe((iS,y2)=>{y2.exports=I_;function I_(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}});var _2=pe((sS,w2)=>{w2.exports=O_;function O_(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}});var M2=pe((cS,E2)=>{E2.exports=G_;function G_(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var A2=pe((lS,S2)=>{S2.exports=F_;function F_(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var k2=pe((fS,T2)=>{T2.exports=D_;function D_(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var z2=pe((hS,L2)=>{L2.exports=$_;function $_(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}});var R2=pe((uS,C2)=>{C2.exports=q_;function q_(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}});var Gh=pe((dS,N2)=>{N2.exports=H_;function H_(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}});var I2=pe((pS,P2)=>{P2.exports=Gh()});var Fh=pe((vS,O2)=>{O2.exports=B_;function B_(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}});var F2=pe((mS,G2)=>{G2.exports=Fh()});var Dh=pe((gS,D2)=>{D2.exports=U_;function U_(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}});var q2=pe((xS,$2)=>{$2.exports=Dh()});var $h=pe((yS,H2)=>{H2.exports=j_;function j_(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}});var U2=pe((bS,B2)=>{B2.exports=$h()});var W2=pe((wS,j2)=>{j2.exports=W_;function W_(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var X2=pe((_S,V2)=>{V2.exports=V_;function V_(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var K2=pe((ES,Y2)=>{Y2.exports=X_;function X_(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2];return e[0]=o*c-a*s,e[1]=a*i-n*c,e[2]=n*s-o*i,e}});var Z2=pe((MS,Q2)=>{Q2.exports=Y_;function Y_(e,t,r,n){var o=t[0],a=t[1],i=t[2];return e[0]=o+n*(r[0]-o),e[1]=a+n*(r[1]-a),e[2]=i+n*(r[2]-i),e}});var eg=pe((SS,J2)=>{J2.exports=K_;function K_(e,t){t=t||1;var r=Math.random()*2*Math.PI,n=Math.random()*2-1,o=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=n*t,e}});var rg=pe((AS,tg)=>{tg.exports=Q_;function Q_(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[3]*n+r[7]*o+r[11]*a+r[15];return i=i||1,e[0]=(r[0]*n+r[4]*o+r[8]*a+r[12])/i,e[1]=(r[1]*n+r[5]*o+r[9]*a+r[13])/i,e[2]=(r[2]*n+r[6]*o+r[10]*a+r[14])/i,e}});var og=pe((TS,ng)=>{ng.exports=Z_;function Z_(e,t,r){var n=t[0],o=t[1],a=t[2];return e[0]=n*r[0]+o*r[3]+a*r[6],e[1]=n*r[1]+o*r[4]+a*r[7],e[2]=n*r[2]+o*r[5]+a*r[8],e}});var ig=pe((kS,ag)=>{ag.exports=J_;function J_(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2],f=r[3],l=f*n+s*a-c*o,m=f*o+c*n-i*a,h=f*a+i*o-s*n,u=-i*n-s*o-c*a;return e[0]=l*f+u*-i+m*-c-h*-s,e[1]=m*f+u*-s+h*-i-l*-c,e[2]=h*f+u*-c+l*-s-m*-i,e}});var cg=pe((LS,sg)=>{sg.exports=e6;function e6(e,t,r,n){var o=r[1],a=r[2],i=t[1]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=o+i*f-s*c,e[2]=a+i*c+s*f,e}});var fg=pe((zS,lg)=>{lg.exports=t6;function t6(e,t,r,n){var o=r[0],a=r[2],i=t[0]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var ug=pe((CS,hg)=>{hg.exports=r6;function r6(e,t,r,n){var o=r[0],a=r[1],i=t[0]-o,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var pg=pe((RS,dg)=>{dg.exports=n6;var La=Lh()();function n6(e,t,r,n,o,a){var i,s;for(t||(t=3),r||(r=0),n?s=Math.min(n*t+r,e.length):s=e.length,i=r;i<s;i+=t)La[0]=e[i],La[1]=e[i+1],La[2]=e[i+2],o(La,La,a),e[i]=La[0],e[i+1]=La[1],e[i+2]=La[2];return e}});var mg=pe((NS,vg)=>{vg.exports={EPSILON:kh(),create:Lh(),clone:Wm(),angle:Jm(),fromValues:zh(),copy:t2(),set:n2(),equals:a2(),exactEquals:s2(),add:l2(),subtract:Ph(),sub:u2(),multiply:Ih(),mul:v2(),divide:Oh(),div:x2(),min:b2(),max:_2(),floor:M2(),ceil:A2(),round:k2(),scale:z2(),scaleAndAdd:R2(),distance:Gh(),dist:I2(),squaredDistance:Fh(),sqrDist:F2(),length:Dh(),len:q2(),squaredLength:$h(),sqrLen:U2(),negate:W2(),inverse:X2(),normalize:Ch(),dot:Rh(),cross:K2(),lerp:Z2(),random:eg(),transformMat4:rg(),transformMat3:og(),transformQuat:ig(),rotateX:cg(),rotateY:fg(),rotateZ:ug(),forEach:pg()}});var yg=pe((PS,xg)=>{"use strict";function gg(){let e={};return{on(t,r){return(e[t]=e[t]||[]).push(r),this},emit(t,r){(e[t]||[]).slice().forEach(n=>n(r))}}}xg.exports=function(t){let r=t.ownerDocument||document,n=gg(),o=null,a={dx:0,dy:0,dt:0},i=0,s=()=>r.pointerLockElement||r.webkitPointerLockElement||null,c=()=>{if(s())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let m=l.call(t);m&&m.catch&&m.catch(()=>{})}catch(m){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){o&&(n.emit("release"),o.emit("end"),o=null);return}o=gg(),i=Date.now(),n.emit("attain",o)};return r.addEventListener("pointerlockchange",f),r.addEventListener("webkitpointerlockchange",f),r.addEventListener("pointerlockerror",()=>n.emit("error")),(r.body||t).addEventListener("mousemove",l=>{o&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),o.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(r.exitPointerLock||r.webkitExitPointerLock).call(r)},n}});var Mg=pe((GS,Eg)=>{"use strict";var yi=l0(),bi=mg(),o6=yg(),IS=Math.PI/4,OS=Math.PI/6,bg=2,a6=1,i6=2.4,s6=2.4,c6=1e3,l6=5,f6=7,qh=Nn().C,T0=[[7,1.6],[7,qh.zc],[qh.x1-2.95,qh.zc]],za=T0.slice(1).map((e,t)=>{let r=T0[t],n=e[0]-r[0],o=e[1]-r[1],a=Math.hypot(n,o);return{a:r,len:a,dir:[n/a,o/a]}}),Hh=za.reduce((e,t)=>e+t.len,0);function wg(e){let t=Math.max(0,Math.min(Hh,e));for(let n of za){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let r=T0[T0.length-1];return[r[0],r[1]]}function h6(e){let t=0;for(let n=0;n<za.length;n++){let o=za[n],a=t+o.len;if(e<a-1e-4||n===za.length-1){let i=o.dir,c=e<=t+1e-4&&n>0?za[n-1].dir:o.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let r=za[za.length-1].dir;return{ahead:r,back:[-r[0],-r[1]]}}var u6=Math.PI/4,d6=7,p6=140,v6=70,_g=(e,t,r)=>(1-e)*t+e*r,m6=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Eg.exports=function({getGridSegments:e,getGridParts:t},r){var n=[0,Math.PI],o=[0,Math.PI],a=0,i=[0,0,0],s=[f6,bg,T0[0][1]],c=0,f=1,l=0,m=[.707,0,.707],h=[0,1,0],u=[0,0,0],d=.5,p=yi.identity([]),g=yi.identity([]),x=!1,y=[0,0,0],w=[0,0,0],T=1,z=!1;let L=Ge=>{n[1]+=Ge*u6},O=(Ge,Ze,et)=>{if(Ge=Math.max(Math.min(Ge,100),-100),Ze=Math.max(Math.min(Ze,100),-100),n[0]=0,z){a=0;return}for(a+=Ge;a>=et;)L(1),a-=et;for(;a<=-et;)L(-1),a+=et};o6(document.body).on("attain",Ge=>{Ge.on("data",Ze=>{O(Ze.dx,Ze.dy,p6)})});let K=null,Z=null,J=0,ce={x:0,y:0},H=58,j=document.createElement("div");j.id="museum-mobile-controls",j.innerHTML=`

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
	`,document.body.appendChild(j);let de=j.querySelector("#museum-joystick"),ve=j.querySelector("#museum-joystick-knob"),it=()=>{ve.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},_e=Ge=>{let Ze=Ge.clientX-ce.x,et=Ge.clientY-ce.y,Ot=Math.hypot(Ze,et);if(Ot>H&&(Ze=Ze/Ot*H,et=et/Ot*H),ve.style.transform=`translate(
				calc(-50% + ${Ze}px),
				calc(-50% + ${et}px)
			)`,Ot<10){i[0]=0,i[2]=0;return}let cr=Ze/H,ne=et/H;i[0]=0,i[2]=Math.abs(ne)>.15?ne:0},ht=(Ge,Ze)=>{for(let et=0;et<Ge.length;et++)if(Ge[et].identifier===Ze)return Ge[et];return null},bt=Ge=>!!(Ge&&Ge.closest&&Ge.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),_t=Ge=>{if(!bt(Ge.target)&&(Ge.cancelable&&Ge.preventDefault(),!z))for(let Ze=0;Ze<Ge.changedTouches.length;Ze++){let et=Ge.changedTouches[Ze];if(K===null&&et.clientX<window.innerWidth*.48){K=et.identifier;let Ot=de.getBoundingClientRect();ce.x=Ot.left+Ot.width/2,ce.y=Ot.top+Ot.height/2,_e(et)}else Z===null&&et.clientX>=window.innerWidth*.48&&(Z=et.identifier,J=et.clientX,a=0)}},Le=Ge=>{if(bt(Ge.target)||(Ge.cancelable&&Ge.preventDefault(),z))return;let Ze=K===null?null:ht(Ge.touches,K);Ze&&_e(Ze);let et=Z===null?null:ht(Ge.touches,Z);if(et){let Ot=et.clientX-J;J=et.clientX,O(Ot,0,v6)}},vt=Ge=>{if(!bt(Ge.target)){Ge.cancelable&&Ge.preventDefault();for(let Ze=0;Ze<Ge.changedTouches.length;Ze++){let et=Ge.changedTouches[Ze];et.identifier===K&&(K=null,it()),et.identifier===Z&&(Z=null)}}};document.addEventListener("touchstart",_t,{passive:!1}),document.addEventListener("touchmove",Le,{passive:!1}),document.addEventListener("touchend",vt,{passive:!1}),document.addEventListener("touchcancel",vt,{passive:!1});let pt=document.createElement("style");pt.textContent=`

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
	`,document.head.appendChild(pt);var Tt={};let Gt=Ge=>{if(Ge.defaultPrevented||Ge.ctrlKey||Ge.altKey||Ge.metaKey)return;let Ze=Ge.type==="keydown";Tt[Ge.code]=Ze,Ze&&!Ge.repeat&&!z&&((Ge.code==="KeyA"||Ge.code==="ArrowLeft")&&L(-1),(Ge.code==="KeyD"||Ge.code==="ArrowRight")&&L(1)),x=!1;let et=Tt.KeyW||Tt.ArrowUp?1:0;i=[0,0,(Tt.KeyS||Tt.ArrowDown?1:0)-et],Ge.preventDefault()};window.addEventListener("keydown",Gt),window.addEventListener("keyup",Gt);var Ft=0;return{pos:s,fmouse:o,forward:m,up:h,setPaused:Ge=>{z=!!Ge,z&&(i[0]=0,i[2]=0,it())},place:(Ge,Ze)=>{c=Math.max(0,Math.min(Hh,Ge));let et=wg(c);s[0]=et[0],s[2]=et[1],n[1]=Ze,o[1]=Ze,a=0,f=1},view:()=>p,proj:()=>(yi.perspective(g,r(),window.innerWidth/window.innerHeight,.1,700),g),tick:({time:Ge})=>{let Ze=Ge-Ft;Ft=Ge;let et=[0,0,0],Ot=[];bi.set(m,Math.sin(o[1]),0,-Math.cos(o[1])),bi.set(h,0,1,0);let mt=x?s6:i6,cr=Math.sin(n[1]),ne=-Math.cos(n[1]),Ke=h6(c),ot=cr*Ke.ahead[0]+ne*Ke.ahead[1],Rt=cr*Ke.back[0]+ne*Ke.back[1],Pt=f;Math.max(ot,Rt)>.3&&(Pt=ot>=Rt?1:-1);let lr=z?0:-i[2]*mt;l+=(lr-l)*(1-Math.exp(-Math.min(Ze,.1)*5.5)),lr===0&&Math.abs(l)<.01&&(l=0);let Et=l*Pt*Math.min(Ze,.1);z&&(i[0]=0,i[2]=0,Et=0,l=0),Et!==0&&(f=Math.sign(Et)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(Hh,c+Et));let _=wg(c);bi.set(u,_[0]-s[0],0,_[1]-s[2]);let qt=bi.len(u);qt===0&&d!==.25&&(d=(Math.abs((d+.5)%1-.5)-.25)*.8+.25,(d+.01)%.25<.02&&(d=.25));let st=d;if(d+=qt/(x?l6:c6),s[1]=bg,bi.add(s,s,u),T<1){T+=Ze/a6,T=Math.min(T,1);let kt=m6(T);bi.set(s,_g(kt,y[0],w[0]),s[1],_g(kt,y[2],w[2]))}o[0]=0,o[1]+=(n[1]-o[1])*Math.min(1,Math.min(Ze,.1)*d6),Math.abs(n[1]-o[1])<5e-4&&(o[1]=n[1]),yi.identity(p),yi.rotateX(p,p,0),yi.rotateY(p,p,o[1]),yi.translate(p,p,bi.scale(et,s,-1))}}}});var Ag=pe((FS,Sg)=>{"use strict";var{skylightGLSL:g6,Z_START:x6,Z_END:y6,GLASS_Y:b6}=rs(),{oculusGLSL:w6,A:wi}=Eo(),{windowLightGLSL:_6,C:sl}=Nn(),{doorLightGLSL:E6}=Za(),cl=En(),vo=e=>e.toFixed(4),Bh=.1,Uh=700,_i={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.045};function M6(e,t){let r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],m=t[9],h=t[10],u=t[11],d=t[12],p=t[13],g=t[14],x=t[15],y=r*s-n*i,w=r*c-o*i,T=r*f-a*i,z=n*c-o*s,L=n*f-a*s,O=o*f-a*c,U=l*p-m*d,K=l*g-h*d,Z=l*x-u*d,J=m*g-h*p,ce=m*x-u*p,H=h*x-u*g,j=y*H-w*ce+T*J+z*Z-L*K+O*U;return j?(j=1/j,e[0]=(s*H-c*ce+f*J)*j,e[1]=(o*ce-n*H-a*J)*j,e[2]=(p*O-g*L+x*z)*j,e[3]=(h*L-m*O-u*z)*j,e[4]=(c*Z-i*H-f*K)*j,e[5]=(r*H-o*Z+a*K)*j,e[6]=(g*T-d*O-x*w)*j,e[7]=(l*O-h*T+u*w)*j,e[8]=(i*ce-s*Z+f*U)*j,e[9]=(n*Z-r*ce-a*U)*j,e[10]=(d*L-p*T+x*y)*j,e[11]=(m*T-l*L-u*y)*j,e[12]=(s*K-i*J-c*U)*j,e[13]=(r*J-n*K+o*U)*j,e[14]=(p*w-d*z-g*y)*j,e[15]=(l*z-m*w+h*y)*j,e):null}function S6(e,t,r){let n=new Array(16);for(let o=0;o<4;o++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*r[o*4+s];n[o*4+a]=i}for(let o=0;o<16;o++)e[o]=n[o];return e}var A6=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Sg.exports=(e,t)=>{let r=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),o=r?10:22,a=()=>t.post>=2?2:4,i=de=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},de||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=e.framebuffer({color:c,depth:f||!0}),m=[s(),s()],h=[s(),s()],u=[s(),s()],d=[s(),s()],p=new Array(16).fill(0),g=new Array(16).fill(0),x=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},w={position:[-1,-1,3,-1,-1,3]},T=(de,ve,it)=>e(Object.assign({vert:A6,frag:de,attributes:w,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:ve,framebuffer:e.prop("out")},it||{})),z=[2.6,0,x6-3.2,12.6,b6,y6+.4],L=[wi.x0-.2,0,wi.z0,wi.x1,wi.domeTop,wi.z1],O=[sl.x0,0,sl.z0,sl.x1,7.6,sl.z1],U=[.35,0,.35,13.65,7.6,9],K=de=>`vec3(${vo(de[0])}, ${vo(de[1])}, ${vo(de[2])}), vec3(${vo(de[3])}, ${vo(de[4])}, ${vo(de[5])})`,Z=T(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D depthTex;
	uniform mat4 invVP;
	uniform vec3 eye;
	uniform float time;
	uniform float night;
	uniform vec4 strength;   // skylight, dome, windows, door

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

	${g6()}
	${w6()}
	${_6()}
	${E6()}

	// the air is not perfectly even: slow drifting wisps of dust
	float air(vec3 p) {
		vec2 a = p.xz * 0.55 + vec2(p.y * 0.35 + time * 0.05, -p.y * 0.2 - time * 0.03);
		vec2 b = p.zy * 0.9 + vec2(time * 0.04, p.x * 0.3);
		float n = vnoise(a) * vnoise(b + 3.7);
		float day = 0.3 + 1.6 * n * n;
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
		const int N = ${o};
		vec3 sum = vec3(0.0);

		// the skylight
		if (strength.x > 0.0) {
			vec2 t = hitBox(eye, rd, ${K(z)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += mix(skylightVol(p), skylightAt(p), night) * air(p);
				}
				float ph = phase(dot(rd, SKY_SUN), 0.55) + 0.05;
				sum += mix(vec3(1.0, 0.86, 0.64), vec3(0.62, 0.74, 1.0) * 1.15, night) * acc * st * ph * strength.x;
			}
		}

		// the glass dome over the tree
		if (strength.y > 0.0) {
			vec2 t = hitBox(eye, rd, ${K(L)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${vo(wi.dome.base)} && p.x > ${vo(wi.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${K(O)});
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
			vec2 t = hitBox(eye, rd, ${K(U)});
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

		gl_FragColor = vec4(sum, 1.0);
	}`,{depthTex:()=>f,invVP:()=>p,eye:()=>x,time:e.context("time"),night:()=>cl.night,strength:()=>{let de=_i.shafts*y.shafts,ve=cl.night;return[.06*de*(1+.9*ve),.1*de*(1+.9*ve),.07*de*(1+.4*ve),.04*de*(1-.75*ve)]}}),J=T(`
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
	}`,{src:e.prop("src"),dir:(de,ve)=>[ve.dir[0]/ve.size[0],ve.dir[1]/ve.size[1]]}),ce=T(`
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
	}`,{src:e.prop("src"),texel:(de,ve)=>[.5/ve.size[0],.5/ve.size[1]],threshold:e.prop("threshold")}),H=T(`
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
		return 2.0 * ${vo(Bh)} * ${vo(Uh)} / (${vo(Uh+Bh)} - z * ${vo(Uh-Bh)});
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
		lin *= mix(0.68, 1.0, smoothstep(0.05, 0.6, L)) * exposure;

		// the light shafts and the glow add light
		lin += texture2D(shafts, p).rgb;
		lin += (texture2D(bloomA, p).rgb * 0.45 + texture2D(bloomB, p).rgb * 0.6) * bloomK;

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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>m[0],bloomA:()=>h[0],bloomB:()=>u[0],shafts:()=>d[0],res:de=>[de.drawingBufferWidth,de.drawingBufferHeight],time:e.context("time"),exposure:()=>_i.exposure*y.exposure,vignette:()=>Math.min(1,_i.vignette+y.vignette+.22*cl.night),night:()=>cl.night,grain:()=>_i.grain,bloomK:()=>_i.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>t.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),j=e({framebuffer:()=>l});return{shot:y,look:_i,hasDepth:n,capture(de,ve,it){let _e=de.drawingBufferWidth,ht=de.drawingBufferHeight;l.resize(_e,ht);let bt=Math.max(1,Math.ceil(_e/2)),_t=Math.max(1,Math.ceil(ht/2));m.forEach(Le=>Le.resize(bt,_t)),h.forEach(Le=>Le.resize(Math.max(1,Math.ceil(_e/4)),Math.max(1,Math.ceil(ht/4)))),u.forEach(Le=>Le.resize(Math.max(1,Math.ceil(_e/8)),Math.max(1,Math.ceil(ht/8)))),d.forEach(Le=>Le.resize(Math.max(1,Math.ceil(_e/a())),Math.max(1,Math.ceil(ht/a())))),S6(g,ve.proj,ve.view),M6(p,g),x[0]=ve.eye[0],x[1]=ve.eye[1],x[2]=ve.eye[2],j(()=>{e.clear({color:[0,0,0,1],depth:1}),it()})},present(){let de=ve=>[ve.width,ve.height];n&&t.post>=1&&_i.shafts*y.shafts>.001?(Z({out:d[0]}),J({out:d[1],src:d[0],dir:[1,0],size:de(d[0])}),J({out:d[0],src:d[1],dir:[0,1],size:de(d[0])})):e.clear({color:[0,0,0,1],framebuffer:d[0]}),ce({out:m[0],src:c,size:[l.width,l.height],threshold:0}),J({out:m[1],src:m[0],dir:[1,0],size:de(m[0])}),J({out:m[0],src:m[1],dir:[0,1],size:de(m[0])}),ce({out:h[0],src:m[0],size:de(m[0]),threshold:.42}),J({out:h[1],src:h[0],dir:[1,0],size:de(h[0])}),J({out:h[0],src:h[1],dir:[0,1],size:de(h[0])}),ce({out:u[0],src:h[0],size:de(h[0]),threshold:0}),J({out:u[1],src:u[0],dir:[1.5,0],size:de(u[0])}),J({out:u[0],src:u[1],dir:[0,1.5],size:de(u[0])}),H({out:null})}}}});var Cg=pe((DS,zg)=>{"use strict";var Tg=En().GLSL,T6=Qa(),jh=Za(),{C:k6,FAR_DOOR:L6}=Nn(),z6=100*Math.PI/180,kg=e=>[L6.x-e[2],e[1],k6.zc-7+e[0]],Lg=e=>[-e[2],e[1],e[0]];function C6(e){let t=[],r=[],n=[],o=[],a=T6.createBuilder(t,r,n,o);jh.addFrames(a,e);let i=jh.glassPanes(e),s=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:s(t),normal:s(r),elements:n,glass:i}}zg.exports=e=>{let t=jh.DOOR,r=["left","right"].map(l=>{let m=C6(l),h=m.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:m.position.map(u=>u.slice()),srcN:m.normal.map(u=>u.slice()),srcG:m.glass.map(u=>u.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(m.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(m.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(m.elements),type:"uint32"}),glassCount:m.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(m.glass.length*3),outGN:new Float32Array(m.glass.length*3)}}),n=null;function o(l){if(l!==n){n=l;for(let m of r){let h=m.sign*l,u=Math.cos(h),d=Math.sin(h),p=y=>{let w=y[0]-m.hinge,T=y[2];return[m.hinge+w*u+T*d,y[1],-w*d+T*u]},g=y=>[y[0]*u+y[2]*d,y[1],-y[0]*d+y[2]*u];m.src.forEach((y,w)=>{let T=kg(p(y));m.outP.set(T,w*3),m.outN.set(Lg(g(m.srcN[w])),w*3)});let x=Lg(g([0,0,1]));m.srcG.forEach((y,w)=>{m.outG.set(kg(p(y)),w*3),m.outGN.set(x,w*3)}),m.pos.subdata(m.outP),m.nrm.subdata(m.outN),m.gpos.subdata(m.outG),m.gnrm.subdata(m.outGN)}}}o(0);let a=`
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
		${Tg}
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
		${Tg}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{o(c*z6);for(let l of r)i({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of r)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f}});var Ng=pe(($S,Rg)=>{"use strict";var R6=En().GLSL,{skylightGLSL:N6}=rs(),{oculusGLSL:P6}=Eo(),{windowLightGLSL:I6}=Nn(),Zo=.22;function O6(){let e=[],t=[],r=[],n=[];for(let c=0;c<=14;c++){let f=c/14,l=Zo*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9);for(let m=0;m<=4*2;m++){let h=m/4-1,u=f*Zo-Zo*.12,d=h*l,p=Math.abs(h)*l*.35-.12*f*f*Zo;e.push([u,p,d]),t.push([0,1,0]),r.push([f,h])}}let i=4*2+1;for(let c=0;c<14;c++)for(let f=0;f<i-1;f++){let l=c*i+f,m=l+1,h=l+i,u=h+1;n.push([l,h,m],[m,h,u])}let s=e.length;return e.push([-Zo*.12,0,-.003],[-Zo*.12,0,.003],[-Zo*.24,-.01,.0015],[-Zo*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),r.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([s,s+2,s+1],[s,s+3,s+2]),{pos:e,nrm:t,uv:r,idx:n}}Rg.exports=e=>{let t=O6(),r=e({vert:`
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
		${R6}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${N6()}
		${P6()}
		${I6()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=En(),o=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Zo*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(r({model:a.model}),n.night>.01&&o({model:a.model}))}}});var Og=pe((qS,Ig)=>{"use strict";var{skylightGLSL:G6,Z_START:Pg,Z_END:F6}=rs(),{oculusGLSL:D6,A:ys}=Eo();Ig.exports=(e,t)=>{let r=t.isPhone?900:2600,n=t.isPhone?350:900,o=7,a=()=>(o=o*16807%2147483647,(o-1)/2147483646),i=[];for(let s=0;s<r;s++)i.push([2.5+a()*10.5,.3+a()*8,Pg-3.5+a()*(F6-Pg+4.5),a()]);for(let s=0;s<n;s++)i.push([ys.x0+.3+a()*(ys.x1-ys.x0-.6),.3+a()*7.5,ys.z0+.3+a()*(ys.z1-ys.z0-.6),a()]);return e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;

		${G6()}
		${D6()}

		void main() {
			vec3 p = seed.xyz;
			float s = seed.w * 6.2831;
			// slow drifting, the way dust hangs and turns in still air
			p += vec3(sin(time * 0.11 + s * 3.0) * 0.35, sin(time * 0.07 + s * 5.0) * 0.25 - 0.02 * time * (0.5 + seed.w), cos(time * 0.09 + s * 2.0) * 0.35);
			p.y = mod(p.y - 0.3, 8.0) + 0.3;

			float light = skylightAt(p);
			if (p.x > 14.0) light = oculusOpen(p) * treeShade(p);
			v_light = light;
			v_seed = seed.w;

			vec4 vp = view * vec4(p, 1.0);
			float dist = max(-vp.z, 0.1);
			gl_Position = proj * vp;
			// motes that catch no light are not drawn at all
			gl_PointSize = light > 0.02 ? clamp(pixelScale * (0.9 + seed.w) / dist, 1.0, 6.0) : 0.0;
			if (light <= 0.02) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
		}`,frag:`
		precision highp float;
		uniform float time;
		uniform float night;
		varying float v_light;
		varying float v_seed;
		void main() {
			vec2 c = gl_PointCoord - 0.5;
			float a = 1.0 - smoothstep(0.15, 0.5, length(c));
			// each mote twinkles as it turns
			float tw = 0.55 + 0.45 * sin(time * (1.5 + v_seed * 3.0) + v_seed * 40.0);
			// warm gold motes in the sun; silver ones, a little brighter against
			// the dark, in the moonlight
			gl_FragColor = vec4(mix(vec3(1.0, 0.93, 0.80), vec3(0.78, 0.86, 1.0) * 1.3, night) * a * v_light * tw * 0.75, 1.0);
		}`,attributes:{seed:i},count:i.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:s=>s.viewportHeight*.006},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}})}});var Hg=pe((HS,qg)=>{"use strict";var{C:$g}=Nn(),Gg=En(),Fg=15.3,$6=37.1,Dg=$g.z1+.9,q6=$g.z1+.7+16-.6;qg.exports=(e,t)=>{let r=t.isPhone?36:80,n=11,o=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<r;f++){let l=.35+Math.pow(o(),1.8)*2.4;a.push([Fg+o()*($6-Fg),l,Dg+o()*(q6-Dg),o()])}let i=[],s=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>Gg.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Gg.night>.01&&c()}}});var Wh=pe((BS,Ug)=>{"use strict";function H6(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var Bg={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},B6=["th","ng","er"];function U6(e,t,r){r=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},r||{});let n=e.getContext("2d"),o={};Object.keys(Bg).forEach(p=>{o[p]=Bg[p]*r.pace});let a=[],i=0,s=0,c=0,f=[];function l(p,g){let x=H6(r.seed),y=r.xh,w={},T=j=>{let de=t[j];if(!de)return null;let ve=Math.floor(x()*de.length);return de.length>1&&ve===w[j]&&(ve=(ve+1)%de.length),w[j]=ve,de[ve]},z=j=>{if(t[j])return{g:T(j),sc:1};let de=j.toLowerCase();return t[de]?{g:T(de),sc:/[A-Z]/.test(j)?1.32:1}:null},L=[],O=.15,U=0,K=0,Z=(x()-.5)*.02,J=g/y,ce=p.split(/\n\s*\n/);ce.forEach((j,de)=>{j.replace(/\s+/g," ").trim().split(" ").forEach(it=>{let _e=[];for(let Le=0;Le<it.length;Le++){let vt=it.substr(Le,2).toLowerCase();if(B6.indexOf(vt)>=0&&t[vt]&&x()<.55&&it[Le]===it[Le].toLowerCase()){_e.push({ch:vt,gl:{g:T(vt),sc:1}}),Le++;continue}let pt=z(it[Le]);pt&&pt.g&&_e.push({ch:it[Le],gl:pt})}let ht=_e.map(()=>.17+x()*.07),bt=_e.reduce((Le,vt,pt)=>Le+vt.gl.g.w*vt.gl.sc+ht[pt],0);U>0&&U+bt>J&&(U=0,K++,O+=o.line,Z=(x()-.5)*.02),_e.forEach((Le,vt)=>{let pt=Le.gl.g,Tt=Le.gl.sc*(.95+x()*.1),Gt=(x()-.5)*.06,Ft=(x()-.5)*.08+Z*U,Ge=U,Ze=K*r.lineHeight+1.9+Ft,et=Math.cos(Gt),Ot=Math.sin(Gt),mt=ne=>[(Ge+(ne[0]*et-ne[1]*Ot)*Tt)*y,(Ze+(ne[0]*Ot+ne[1]*et)*Tt)*y],cr=(ne,Ke)=>{let ot=0;for(let Pt=1;Pt<ne.length;Pt++)ot+=Math.hypot(ne[Pt][0]-ne[Pt-1][0],ne[Pt][1]-ne[Pt-1][1]);let Rt=Math.max(r.minDur||(Ke?.06:.07),ot/(r.speed*y));L.push({pts:ne,L:ot,start:O,dur:Rt,dot:Ke}),O+=Rt};if(pt.s.forEach((ne,Ke)=>{Ke>0&&(O+=o.stroke),cr(ne.map(mt),!1)}),pt.dot){let ne=pt.s[0][0];pt.s.forEach(ot=>ot.forEach(Rt=>{Rt[1]<ne[1]&&(ne=Rt)}));let Ke=mt([ne[0]+.1,-1.36]);O+=o.stroke*1.4,cr([Ke,[Ke[0]+y*.05,Ke[1]+y*.03]],!0)}O+=o.letter*(.6+x()*.8),U+=pt.w*Tt+ht[vt]});let _t=it[it.length-1];O+=/[.!?]/.test(_t)?o.stop:/[,;:]/.test(_t)?o.comma:o.word,U+=.55+x()*.2}),de<ce.length-1&&(U=0,K+=1.6,O+=o.para)});let H=(K+1)*r.lineHeight*y+y*1.55;return{strokes:L,total:O,height:H}}function m(p,g){if(r.fixed){let x=r.fixed;n.setTransform(1,0,0,1,x.mx,x.my),n.clearRect(-x.mx,-x.my,e.width,e.height)}else{let x=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(p*x),e.height=Math.round(g*x),e.style.height=g+"px",e.style.width=p+"px",n.setTransform(x,0,0,x,0,0),n.clearRect(0,0,p,g)}n.strokeStyle=r.ink,n.fillStyle=r.ink,n.lineCap="round",n.lineJoin="round",r.shadow&&(n.shadowColor=r.shadow,n.shadowBlur=r.shadowBlur||6)}let h=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;function u(p,g){let x=f[p.i]||0;if(g<=x)return;let y=r.width*r.xh,w=0;for(let T=1;T<p.pts.length;T++){let z=p.pts[T-1],L=p.pts[T],O=Math.hypot(L[0]-z[0],L[1]-z[1]),U=w,K=w+O;if(w=K,K<=x||O===0)continue;if(U>=g)break;let Z=Math.max(0,(x-U)/O),J=Math.min(1,(g-U)/O),ce=[z[0]+(L[0]-z[0])*Z,z[1]+(L[1]-z[1])*Z],H=[z[0]+(L[0]-z[0])*J,z[1]+(L[1]-z[1])*J],j=(U+K)/2/(p.L||1),de=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,j)));n.lineWidth=y*de,n.globalAlpha=.86+.14*de,n.beginPath(),n.moveTo(ce[0],ce[1]),n.lineTo(H[0],H[1]),n.stroke()}p.dot&&x===0&&(n.globalAlpha=1,n.beginPath(),n.arc(p.pts[0][0],p.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[p.i]=g}function d(p){let g=(p-c)/1e3;for(let x=0;x<a.length;x++){let y=a[x];if(y.start>g)break;let w=Math.min(1,(g-y.start)/y.dur);u(y,h(w)*y.L)}if(r.onPen){let x=0;for(;x+1<a.length&&a[x+1].start<=g;)x++;a[x]&&r.onPen(a[x].pts[0][1])}g<i?s=requestAnimationFrame(d):r.onDone&&r.onDone()}return{write(p,g){cancelAnimationFrame(s);let x=r.fixed?e.width-2*r.fixed.mx:e.parentElement.clientWidth,y=l(p,x);a=y.strokes,i=y.total;let w=typeof r.maxTime=="function"?r.maxTime(p):r.maxTime;if(w&&i>w){let z=w/i;a.forEach(L=>{L.start*=z,L.dur*=z}),i=w}a.forEach((z,L)=>{z.i=L}),f=[],m(x,y.height);let T=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(g||T){a.forEach(z=>u(z,z.L));return}return c=performance.now(),s=requestAnimationFrame(d),i},finish(){cancelAnimationFrame(s),a.forEach(p=>u(p,p.L)),r.onDone&&r.onDone()},stop(){cancelAnimationFrame(s)}}}Ug.exports=U6});var Xh=pe((US,jg)=>{"use strict";var Vh=En(),j6='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',W6='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';jg.exports=function(t){let r=document.createElement("button");r.type="button",r.className=t+" light-toggle";let n=()=>{let o=Vh.isNight;r.innerHTML=o?j6:W6,r.setAttribute("aria-label",o?"Switch to day":"Switch to night"),r.title=o?"Day":"Night",r.setAttribute("aria-pressed",o?"true":"false")};return n(),Vh.onChange(n),["mousedown","pointerdown"].forEach(o=>r.addEventListener(o,a=>a.stopPropagation())),r.addEventListener("click",o=>{o.stopPropagation(),Vh.toggle()}),r}});var Qg=pe((jS,Kg)=>{"use strict";var fn=s0(),V6=Wh(),X6="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Wg=100,Ca=e=>Math.max(0,Math.min(1,e)),bs=(e,t,r)=>{let n=Ca((r-e)/(t-e));return n*n*(3-2*n)},Ei=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Ra=(e,t,r)=>e+(t-e)*r,Vg=(e,t,r)=>[Ra(e[0],t[0],r),Ra(e[1],t[1],r),Ra(e[2],t[2],r)];function ll(e,t){let r=e.length-1,n=Ca(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-f[l])*a*a+(-i[l]+3*s[l]-3*c[l]+f[l])*a*a*a))}var Xg=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function Yg(e,t,r){return{eye:Vg(e.eye,t.eye,r),target:Vg(e.target,t.target,r),fov:Ra(e.fov,t.fov,r),roll:Ra(e.roll||0,t.roll||0,r)}}var ws={letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},k0={letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},Y6=`
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
`;Kg.exports=function(t){let{root:r,avatar:n}=t,o=document.createElement("style");o.textContent=Y6,document.head.appendChild(o);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		<div class="conf-final">
			<p>It\u2019s with me now.</p>
			<p class="small">Whatever it was, you don\u2019t have to carry it out of here.</p>
			<button type="button" class="conf-btn" data-act="leave">Return to the gallery</button>
		</div>`,r.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-final"),m=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,h=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let Le=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Wg-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>Wg&&Le&&(s.value=Le[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(Le=>s.addEventListener(Le,vt=>vt.stopPropagation())),a.addEventListener("pointerdown",Le=>Le.stopPropagation()),a.addEventListener("click",Le=>{let vt=Le.target.closest("button");vt&&(Le.stopPropagation(),vt.dataset.act==="send"&&Z(),vt.dataset.act==="leave"&&H())});let u=!1,d="",p=0,g=null,x=null,y="",w=null,T=0,z="",L=document.createElement("canvas");L.width=512,L.height=652;function O(Le){Le!==z&&(z=Le,i.classList.toggle("on",Le==="write"),f.classList.toggle("on",Le==="hint"),l.classList.toggle("on",Le==="final"),Le==="write"&&setTimeout(()=>{if(d==="write")try{s.focus({preventScroll:!0})}catch(vt){}},900))}function U(Le){d=Le,p=0}function K(Le,vt){if(u)return;u=!0,g={eye:Le.eye.slice(),target:Le.target.slice(),fov:Le.fov,roll:Le.roll||0},x=Object.assign({},vt),y="",s.value="",c.disabled=!0,fn.STATE.fold=0,fn.STATE.slide=0,fn.STATE.shown=!0,fn.STATE.active=!0;let pt=L.getContext("2d");pt.setTransform(1,0,0,1,0,0),pt.clearRect(0,0,L.width,L.height),fn.STATE.ink=L,fn.STATE.inkDirty=!0,document.body.classList.add("confessing"),U("approach"),O("")}function Z(){if(d!=="write"||(y=s.value.trim(),!y))return;s.blur(),O("");let Le=Math.max(10,Math.min(22,24-y.length/28));w=V6(L,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:Le,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:vt=>2.4+vt.length/160,fixed:{mx:46,my:40},onPen:()=>{fn.STATE.inkDirty=!0},onDone:()=>{fn.STATE.inkDirty=!0}}),U("down")}function J(){try{let Le={access_key:X6,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Le),keepalive:!0}).catch(()=>{})}catch(Le){}}function ce(){d==="ready"&&(J(),U("fold"),O(""))}function H(){!u||d==="leave"||(O(""),s.blur(),j=de,U("leave"))}let j=null,de=null,ve=fn.SHOTS.window;function it(Le){let vt=Ei(Ca(Le)),pt=[g.eye,[4.6,1.9,43.4],[1.3,1.5,43],[-.55,1.36,42.92],ve.eye],Tt=[g.target,[-.6,1.6,43.6],[-1.4,1.35,43.1],[-1.5,1.33,43.3],ve.target];return{eye:ll(pt,vt),target:ll(Tt,bs(0,1,vt*1.04)),fov:Ra(g.fov,ve.fov,bs(.2,.9,vt)),roll:(g.roll||0)*(1-vt)}}function _e(Le,vt){if(h)return Le;let pt=performance.now()/1e3,Tt=.004*vt,Gt=Math.sin(pt*.61)*.6+Math.sin(pt*1.37+1.3)*.4,Ft=Math.sin(pt*.47+2.1)*.6+Math.sin(pt*1.13+.4)*.4;return{eye:[Le.eye[0]+Gt*Tt,Le.eye[1]+Ft*Tt*.7,Le.eye[2]],target:[Le.target[0]+Ft*Tt*1.5,Le.target[1]+Gt*Tt,Le.target[2]],fov:Le.fov,roll:Le.roll}}function ht(Le,vt,pt){let Tt={};for(let Gt in vt)Tt[Gt]=typeof vt[Gt]=="number"&&typeof Le[Gt]=="number"?Ra(Le[Gt],vt[Gt],pt):vt[Gt];return Tt}function bt(Le){Le*=window.__confSpeed||1,p+=Le;let vt=Xg(ve),pt=Xg(fn.SHOTS.paper),Tt,Gt;if(d==="approach"){let Ge=Ca(p/(h?.6:6.5));Tt=it(Ge),Gt=ht(x,ws,bs(.35,.95,Ge)),Ge>=1&&(U("write"),O("write"))}else if(d==="write")Tt=_e(vt,1),Gt=ws;else if(d==="down"){let Ft=Ca(p/(h?.4:2));Tt=Yg(vt,pt,Ei(Ft)),Gt=ht(ws,k0,Ei(Ft)),Ft>=1&&(T=w.write(y,h)||0,fn.STATE.inkDirty=!0,U("writing"))}else if(d==="writing")Tt=_e(pt,.6),Gt=k0,p>T+.8&&(U("ready"),f.textContent=m?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",O("hint"));else if(d==="ready")Tt=_e(pt,.6),Gt=k0;else if(d==="fold"){let Ft=Ca(p/(h?.3:1.5));fn.STATE.fold=Ei(Ft),Tt=_e(pt,.6),Gt=k0,Ft>=1&&U("slide")}else if(d==="slide"){let Ge=Ca(p/(h?.6:3.4));fn.STATE.slide=Ei(bs(0,.7,Ge));let Ze=Ei(bs(.35,1,Ge));Tt=Yg(pt,vt,Ze),Gt=ht(k0,ws,Ze),Ge>=1&&(fn.STATE.shown=!1,U("final"),O("final"))}else if(d==="final")Tt=_e(vt,1),Gt=ws;else if(d==="leave"){let Ge=Ca(p/(h?.6:5.5)),Ze={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},et=Ei(Ge),Ot=[j.eye,[-.55,1.4,42.95],[1.6,1.65,43.2],Ze.eye],mt=[j.target,[1.5,1.45,43.3],[6,1.5,46],Ze.target];if(Tt={eye:ll(Ot,et),target:ll(mt,et),fov:Ra(j.fov,Ze.fov,et),roll:Ze.roll*et},Gt=ht(ws,x,bs(.1,.7,Ge)),Ge>=1){u=!1,fn.STATE.active=!1,fn.STATE.shown=!0,fn.STATE.fold=0,fn.STATE.slide=0;let cr=L.getContext("2d");cr.setTransform(1,0,0,1,0,0),cr.clearRect(0,0,L.width,L.height),fn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return de=Tt,{camera:Tt,look:Gt}}function _t(){d==="ready"?ce():d==="writing"&&w&&(w.finish(),p=Math.max(p,T))}return{start:K,update:bt,leave:H,get active(){return u},get stage(){return d},wheel(Le){Le>8&&_t()},swipe(Le){Le>0&&_t()},tap(){_t()},key(Le){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(Le)>=0?(_t(),!0):Le==="Escape"?(H(),!0):!1},_setNote(Le){s.value=Le,s.dispatchEvent(new Event("input"))}}}});var cx=pe((WS,sx)=>{"use strict";var Jo=l0(),fl=Sh(),Yh=vc(),K6=Qs(),Kh=Th(),Q6=wo(),hl=!Q6.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Zn}=Eo(),{C:mn,PAINTING_X:Ss}=Nn(),Jn=e=>Math.max(0,Math.min(1,e)),Oe=(e,t,r)=>e+(t-e)*r,xr=(e,t,r)=>[Oe(e[0],t[0],r),Oe(e[1],t[1],r),Oe(e[2],t[2],r)],jt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Zg=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Jg=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Re=(e,t,r)=>{let n=Jn((r-e)/(t-e));return n*n*(3-2*n)};function Z6(e,t,r,n,o,a){if(o<=0)return[e,r];let i=2/n,s=i*o,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,l=Math.max(-f,Math.min(f,e-t)),m=e-l,h=(r+i*l)*o,u=(r-i*h)*c,d=m+(l+h)*c;return t-e>0==d>t&&(d=t,u=0),[d,u]}var ex=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,J6=e=>e*e*e,Qh=e=>1-Math.pow(1-e,3),Cr=e=>-(Math.cos(Math.PI*e)-1)/2;function $r(e,t){let r=e.length-1,n=Jn(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],l=a*a,m=l*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-f[h])*l+(-i[h]+3*s[h]-3*c[h]+f[h])*m))}var Ct=(e,t,r,n)=>({eye:e,target:t,fov:r,roll:n||0});function ki(e,t,r){return Ct(xr(e.eye,t.eye,r),xr(e.target,t.target,r),Oe(e.fov,t.fov,r),Oe(e.roll,t.roll,r))}var nu=()=>Re(.75,1.3,window.innerWidth/window.innerHeight),Gn=(e,t)=>ki(e,t,nu()),ul=[7,3.95,mn.hallEnd-.05],eE=[mn.x1,2.9,mn.zc],Es=[16.75,4.55,6.75],ou=[6.92,2.72,14.5],ko=[7.3,.015,47.1],tE=[Es,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],ou],rE=[ou,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],ko],Si=[Ss[0],3,mn.z0],Ai=[Ss[1],3,mn.z0],Jh=47.45,ix=4.6,nE=13.2,oE=1.42,L0=[7.55,1.25,46.75],au=[17.25,2.42,46],iu=[26.05,1.95,46],z0=[36.15,.015,44],vl=()=>Oe(6.8,6.15,nu()),aE=[L0,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],au],iE=[au,[20.2,2.05,45.6],[23.2,1.8,45],iu],Ti=[Ss[2],3,mn.z0],eu=[34.8,1.35,46],Pa=[7.89,.03,19.03],tx=.36,rx=13.64,bn=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function mo(e){let t=e.side==="left"?1:-1;return xr([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],nu())}function sE(e){return e.side==="left"?Gn(Ct([8.6,3.9,e.z],[tx,1.45,e.z],76),Ct([8,3.6,e.z+.7],[tx,3.95,e.z-2],46,-.008)):Gn(Ct([5.4,3.9,e.z],[rx,1.45,e.z],76),Ct([6,3.6,e.z-.7],[rx,3.95,e.z+2],46,-.008))}var cE=()=>[z0,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],mo(bn[0])],lE=()=>[mo(bn[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],mo(bn[3])],fE=()=>[mo(bn[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Pa],nx={2:{pos:()=>ou,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>L0,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>au,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>iu,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>eu,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>mo(bn[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>mo(bn[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>mo(bn[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>mo(bn[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>mo(bn[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>mo(bn[5]),amp:[.12,.08,.1],tumble:.5}},Na=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),r=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Gn(Ct([mn.x0+.9,1.85,mn.zc+.25],[mn.x1,2.85,mn.zc-.1],64),Ct([mn.x0+1.2,2,mn.zc+.35],[mn.x1,2.6,mn.zc-.15],50));return n.eye=jt(jt(n.eye,[t,0,0]),r),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],r=Gn(Ct([16.6,1.9,9.2],[17.3,.4,5.6],64),Ct([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return r.eye=jt(r.eye,t),r}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],r=Gn(Ct([7,1.35,13],[7.2,7.6,20.4],74,.05),Ct([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return r.eye=jt(r.eye,t),r}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],r=Gn(Ct([7,3.6,43.7],[7,3.85,ul[2]],74),Ct([7,3.6,41.3],[7,3.95,ul[2]],46));return r.eye=jt(r.eye,t),r}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=Gn(Ct([7,3.9,40.3],[7,1.35,ul[2]],76),Ct([6.3,3.6,41.2],[3.7,3.95,ul[2]],46,-.008));return r.eye=jt(r.eye,t),r}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=Gn(Ct([7.15,.15,46],[7.3,.04,ko[2]],50),Ct([7.05,.14,45.9],[7.25,.05,ko[2]],32));return r.eye=jt(r.eye,t),r}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],r=Gn(Ct([7.15,.1,46.3],[7.05,.1,Jh],50),Ct([7.1,.12,45.85],[7,.2,Jh],30));return r.eye=jt(r.eye,t),r}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],r=Gn(Ct([7.3,.85,45.65],[7.6,1.38,47.1],64),Ct([7.25,.82,45.8],[7.65,1.35,47.1],44));return r.eye=jt(r.eye,t),r}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=Gn(Ct([Si[0],2.3,46.85],[Si[0],1.25,Si[2]],74),Ct([Si[0]-.6,2.55,46.85],[Si[0]+1.9,2.9,Si[2]],46,.008));return r.eye=jt(r.eye,t),r}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=Gn(Ct([Ai[0],1.95,46.85],[Ai[0],1,Ai[2]],74),Ct([Ai[0]-.6,2.1,46.85],[Ai[0]+1.9,2.75,Ai[2]],46,.008));return r.eye=jt(r.eye,t),r}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=Gn(Ct([Ti[0],1.4,46.85],[Ti[0],.6,Ti[2]],74),Ct([Ti[0]-.6,1.45,46.85],[Ti[0]+1.9,2,Ti[2]],46,.008));return r.eye=jt(r.eye,t),r}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=Gn(Ct([34.75,.5,44.15],[mn.x1,.8,43.95],66),Ct([34.75,.45,44.3],[mn.x1,.35,43.95],50));return r.eye=jt(r.eye,t),r}},...bn.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(r){let n=[Math.sin(r*.15)*.04,Math.sin(r*.25)*.015,Math.sin(r*.11)*.04],o=sE(e);return o.eye=jt(o.eye,n),o}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,r=Gn(Ct([7.75,2.6,18.6],[7.89,0,19.08],60),Ct([7.75,2.3,18.45],[7.89,0,19.08],46)),n=r.eye[0]-Pa[0],o=r.eye[2]-Pa[2];return r.eye=[Pa[0]+n*Math.cos(t)-o*Math.sin(t),r.eye[1],Pa[2]+n*Math.sin(t)+o*Math.cos(t)],r}}],hE=[1,.96,.88];function ox(e,t){return{dur:t,cam(r,n,o){let a=Cr(r),i=ki(n,o,a),s=bn[e].side==="left"?1:-1;return i.eye=jt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(r,n,o){let a={};for(let i in o)typeof o[i]=="number"&&(a[i]=Oe(n[i],o[i],r));return a.aperture=Oe(n.aperture,o.aperture,r)*(1-.5*Math.sin(Math.PI*r)),a},leaf(r){let n=Cr(r),o=mo(bn[e]),a=mo(bn[e+1]),i=bn[e].side==="left"?1:-1,s=jt(xr(o,a,.5),[i*1.2,.5,0]),c=$r([o,xr(o,s,.6),s,xr(a,s,.6),a],n);return{phase:"fly",pos:jt(c,[0,Math.sin(r*Math.PI*5)*.07*Math.sin(Math.PI*r),0]),tumble:.5+.35*Math.sin(Math.PI*r)}}}}var Zh=[{dur:6.2,cam(e,t,r){if(e<.5){let s=J6(e/.5),c=xr(t.eye,[mn.x1-3.2,2.6,mn.zc],s),f=xr(t.target,eE,Re(0,.6,e/.5));return Ct(c,f,Oe(t.fov,t.fov-8,s),Oe(t.roll,.04,s))}let n=Qh((e-.5)/.5),o=[[Zn.cx+.4,10.4,Zn.zc+.6],[Zn.cx-.6,7.6,Zn.zc+1.3],[Zn.cx-1.9,4.6,Zn.zc+1.75],r.eye],a=[[Zn.cx-.1,0,Zn.zc-.2],[Zn.cx-1,.4,Zn.zc-.1],[Zn.cx-1.1,.8,Zn.zc-.2],r.target];return Ct($r(o,n),$r(a,n),Oe(r.fov+14,r.fov,n),Oe(-.25,r.roll,n))},look(e,t,r){let n=Re(.22,.5,e),o=1-Re(.5,.74,e);return{fade:e<.5?n:o,fadeColor:hE,exposure:Oe(t.exposure,r.exposure,Re(.5,.9,e))*(1+2.2*(e<.5?Re(.15,.5,e):1-Re(.5,.8,e))),letterbox:Oe(t.letterbox,r.letterbox,Re(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):r.aperture*Re(.6,1,e),focus:Oe(4,r.focus,Re(.5,1,e)),shafts:Oe(t.shafts,r.shafts,Re(.4,.6,e)),vignette:Oe(t.vignette,r.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,r,n){let o=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],r.eye],a=$r(o,Cr(e)),i=Re(0,.12,e)*(1-Re(.82,1,e)),s=xr(xr(t.target,r.target,Re(.55,1,e)),n.pos,i),c=Oe(t.fov,r.fov,Re(.3,1,e))-6*Math.sin(Math.PI*e),f=Oe(t.roll,r.roll,e)+.05*Math.sin(Math.PI*2*e);return Ct(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Oe(t.exposure,r.exposure,Re(.25,.75,e)),letterbox:Oe(t.letterbox,r.letterbox,e),focus:Oe(a,r.focus,Re(.8,1,e)),aperture:Oe(.7,r.aperture,Re(.8,1,e)),shafts:Oe(t.shafts,r.shafts,Re(.3,.8,e)),vignette:Oe(t.vignette,r.vignette,e)}},leaf(e){let t=ex(e),r=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:jt($r(tE,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),r]),tumble:1-.5*Re(.8,1,e)}}},{dur:11.5,cam(e,t,r,n){let o=$r([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Re(0,.8,e)*.6+Cr(Jn(e/.8))*.4),a=$r([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],r.eye],Cr(Re(.8,1,e))),i=e<.8?o:a,s=xr(xr(t.target,n.pos,Re(.03,.22,e)),r.target,Re(.82,1,e)),c=Oe(t.fov,r.fov,Re(.15,.7,e))-6*Re(.6,.8,e)*(1-Re(.85,1,e)),f=Oe(t.roll,r.roll,Re(0,.6,e))-.04*Math.sin(Math.PI*e);return Ct(i,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Oe(t.exposure,r.exposure,Re(.5,1,e)),letterbox:Oe(t.letterbox,r.letterbox,e),focus:Oe(a,r.focus,Re(.84,1,e)),aperture:Oe(1.1,r.aperture,Re(.84,1,e)),shafts:Oe(t.shafts,r.shafts,Re(.2,.9,e)),vignette:Oe(t.vignette,r.vignette,Re(.5,1,e))}},leaf(e){let t=Oe(ex(e),e,.35),r=$r(rE,Re(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Re(.55,.76,e)),o=Re(.7,.8,e);return{phase:"fly",pos:jt(r,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-o),0]),tumble:1-o,swing:n}}},{dur:2.6,cam(e,t,r){let n=Cr(e),o=ki(t,r,n);return o.eye=jt(o.eye,[0,0,-.35*Math.sin(Math.PI*n)]),o},look(e,t,r){let n=Cr(e),o={};for(let a in r)typeof r[a]=="number"&&(o[a]=Oe(t[a],r[a],n));return o},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,r){let n=Cr(e),o=$r([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],r.eye],n),a=xr(t.target,r.target,Re(.1,.85,e));return Ct(o,a,Oe(t.fov,r.fov,Re(.2,1,e)),Oe(t.roll,r.roll,n))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Oe(t[o],r[o],Re(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,r){return ki(t,r,Cr(e))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Oe(t[o],r[o],Cr(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Oe(ix,vl(),e)}},{dur:7.5,kick:e=>Jn((e-_s())/(1-_s())),cam(e,t,r,n){let o=_s(),a=Re(0,o,e)*(1-Re(o+.12,o+.35,e)),i=ax(Math.min(e,Ms)),s=jt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Re(o+.12,1,e),f=$r([t.eye,t.eye,jt(t.eye,[0,.12,-.3]),r.eye],c);return s=xr(s,n.pos,Re(o+.06,o+.24,e)*(1-Re(.9,1,e))),s=xr(s,r.target,Re(.88,1,e)),Ct(f,s,Oe(t.fov,r.fov,c),Oe(t.roll,r.roll,c))},look(e,t,r,n,o){let a=_s(),i=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),s=Re(0,.12,e)*(1-Re(a+.25,a+.5,e));return{letterbox:Oe(Oe(t.letterbox,r.letterbox,Re(a,1,e)),1.75,s),exposure:Oe(t.exposure,r.exposure,Re(a,1,e)),focus:e<a?t.focus:Oe(t.focus,i,Re(a,a+.2,e)),aperture:Oe(t.aperture,r.aperture,Re(a,1,e)),vignette:Oe(t.vignette,r.vignette,e),shafts:Oe(t.shafts,r.shafts,e)}},leaf(e){let t=Jn((e-_s())/(1-_s()));if(t<=0)return{phase:"floor"};let r=Re(0,.85,t)*.85+Qh(Re(0,.15,t))*.15;return{phase:"fly",pos:jt(ko,[(L0[0]-ko[0])*r+Math.sin(t*9)*.08*(1-t),(L0[1]-ko[1])*r,(L0[2]-ko[2])*r+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?ax(e):null}},{dur:9,cam(e,t,r,n){let o=Cr(e),a=$r([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],r.eye],o),i=1-Re(.6,.92,e),s=xr(xr(t.target,n.pos,Re(0,.15,e)),r.target,1-i),c=Oe(t.fov,r.fov,Re(.3,1,e)),f=Oe(t.roll,r.roll,o)+.04*Math.sin(Math.PI*e);return Ct(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Oe(t.letterbox,r.letterbox,e),exposure:Oe(t.exposure,r.exposure,Re(.3,.8,e)),focus:Oe(a,r.focus,Re(.6,.95,e)),aperture:Oe(t.aperture,r.aperture,Re(.6,1,e)),vignette:Oe(t.vignette,r.vignette,e),shafts:Oe(t.shafts,r.shafts,Re(.3,.8,e))}},leaf(e){let t=Cr(e);return{phase:"fly",pos:jt($r(aE,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=Cr(e),o=ki(t,r,n);return o.eye=jt(o.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Oe(t[o],r[o],e));return n.aperture=Oe(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=Cr(e);return{phase:"fly",pos:jt($r(iE,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=Cr(e),o=ki(t,r,n);return o.eye=jt(o.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Oe(t[o],r[o],e));return n.aperture=Oe(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=Cr(e);return{phase:"fly",pos:jt($r([iu,[29.2,1.75,45.5],[32.2,1.5,45.4],eu],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,r,n){let o=Cr(e),a=$r([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],r.eye],o),i=Re(.05,.3,e)*(1-Re(.8,1,e)),s=xr(xr(t.target,r.target,Re(.6,1,e)),n.pos,i);return Ct(a,s,Oe(t.fov,r.fov,Re(.2,1,e)),Oe(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Oe(t.letterbox,r.letterbox,e),exposure:Oe(t.exposure,r.exposure,e),focus:Oe(a,r.focus,Re(.8,1,e)),aperture:Oe(.9,r.aperture,Re(.8,1,e)),vignette:Oe(t.vignette,r.vignette,e),shafts:Oe(t.shafts,r.shafts,e)}},leaf(e){let t=$r([eu,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],z0],Re(0,.85,e)),r=Math.sin(e*Math.PI*6)*.25*(1-Re(.35,.82,e)),n=Re(.78,.88,e);return{phase:"fly",pos:jt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),r]),tumble:.7*(1-n),swing:r}}},{dur:12,door(e){let t=Jn((e-.02)/.09);return Qh(t)+.07*Math.sin(Jn((e-.08)/.18)*Math.PI)*(1-Jn((e-.08)/.3))},cam(e,t,r,n){let o=Math.sin(e*340)*.012*Re(.02,.05,e)*(1-Re(.08,.16,e)),a=Re(.06,1,e),i=$r([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],r.eye],a*.55+Cr(a)*.45),s=jt(n.pos,[1,-.2,-1.45]);i=xr(i,s,Re(.1,.22,e)*(1-Re(.52,.72,e)));let c=Re(.06,.16,e)*(1-Re(.86,1,e)),f=xr(t.target,n.pos,c);f=xr(f,r.target,Re(.86,1,e));let l=Oe(t.fov,r.fov,Re(.1,1,e))+6*Math.sin(Math.PI*Re(.08,.9,e)),m=Oe(t.roll,r.roll,e)+.06*Math.sin(Math.PI*2*Re(.1,.9,e))+o;return Ct(jt(i,[0,o,0]),f,l,m)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),i=Re(.02,.06,e)*(1-Re(.08,.3,e));return{letterbox:Oe(t.letterbox,r.letterbox,Re(.1,.4,e)),exposure:Oe(t.exposure,r.exposure,e)*(1+.8*i),focus:Oe(a,r.focus,Re(.86,1,e)),aperture:Oe(.8,r.aperture,Re(.86,1,e)),vignette:Oe(t.vignette,r.vignette,e),shafts:Oe(t.shafts,r.shafts,e)+i}},leaf(e){let t=Jn((e-.05)/.95);if(t<=0)return{phase:"floor"};let r=$r(cE(),t*.6+Cr(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:jt(r,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>ox(e,7.5)),{dur:10,cam(e,t,r,n){let o=Cr(e),a=$r([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],r.eye],o),i=Re(0,.15,e)*(1-Re(.85,1,e)),s=xr(xr(t.target,r.target,Re(.5,1,e)),n.pos,i);return Ct(a,s,Oe(t.fov,r.fov,o)+4*Math.sin(Math.PI*o),Oe(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Oe(t.letterbox,r.letterbox,e),exposure:Oe(t.exposure,r.exposure,e),focus:Oe(a,r.focus,Re(.85,1,e)),aperture:Oe(.6,r.aperture,Re(.85,1,e)),vignette:Oe(t.vignette,r.vignette,e),shafts:Oe(t.shafts,r.shafts,e)}},leaf(e){let t=Cr(e),r=$r(lE(),t);return{phase:"fly",pos:jt(r,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>ox(e,7.5)),{dur:10,cam(e,t,r,n){let o=Cr(e),a=$r([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],r.eye],o),i=Re(0,.2,e)*(1-Re(.9,1,e)),s=xr(xr(t.target,r.target,Re(.5,1,e)),n.pos,i);return Ct(a,s,Oe(t.fov,r.fov,o),Oe(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Oe(t.letterbox,r.letterbox,e),exposure:Oe(t.exposure,r.exposure,e),focus:Oe(a,r.focus,Re(.85,1,e)),aperture:Oe(.7,r.aperture,Re(.85,1,e)),vignette:Oe(t.vignette,r.vignette,e),shafts:Oe(t.shafts,r.shafts,e)}},leaf(e){let t=$r(fE(),Re(0,.86,e)),r=Math.sin(e*Math.PI*7)*.3*(1-Re(.4,.84,e)),n=Re(.8,.9,e);return{phase:"fly",pos:jt(t,[r,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:r}}}],tu=9.2,Ms=.6;function ax(e){return e<Ms?Oe(vl(),tu,e/Ms):Oe(tu,nE,(e-Ms)/(1-Ms))}function _s(){return Ms*Jn((ko[0]+.15-vl())/(tu-vl()))}var ru={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},dl=e=>Object.assign({},ru,Na[e].look),uE=`
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
`;function Qn(e,t,r){let n=document.createElement(e);return t&&(n.className=t),r!==void 0&&(n.innerHTML=r),n}var Mi=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function pl(e,t,r){e.querySelectorAll(".tour-line").forEach((n,o)=>{n.style.transitionDelay=(t+o*r).toFixed(2)+"s"})}sx.exports=function(t){let r=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let ae=document.createElement("link");ae.rel="stylesheet",ae.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",ae.setAttribute("data-tour-font",""),document.head.appendChild(ae)}let o=Wh(),a=null;fetch("res/hand.json").then(ae=>ae.ok?ae.json():null).then(ae=>{a=ae}).catch(()=>{});let i=document.createElement("style");i.textContent=uE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=Qn("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Qn("div","tour-mark",Mi(fl.name)),f=Qn("button","tour-free","Explore freely");f.type="button";let l=Qn("div","tour-links",Yh.icons("tour-icon"));l.insertBefore(Xh()("tour-icon"),l.firstChild),hl&&l.appendChild(f);let m=Qn("div","tour-progress",Na.map(()=>"<i></i>").join("")),h=Qn("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),u=h.querySelector("span"),d=Qn("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Mi(fl.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);pl(d,.4,.35);let p=fl.text.split(/\n\s*\n/).map(ae=>`<p class="tour-line">${Mi(ae.trim())}</p>`).join(""),g=Qn("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Mi(fl.title)}</h2>
		<span class="tour-rule"></span>
		${Yh.line("tour-line tour-contact")}
		${p}`);pl(g,.25,.28);let x=Qn("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);pl(x,.6,.3);let y=Qn("div","tour-card tour-master","");function w(ae){let Ae=Qn("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Ye=Ae.querySelector(".tour-title"),lt=Ae.querySelector(".tour-body");return Ae.filled=!1,Ae.body=lt,Ae.fill=()=>{let Dt=ae();if(!Dt||Ae.filled)return;Ae.filled=!0;let Kt=Dt.title||"";Ae.querySelector(".tour-kicker").textContent=K6(Dt)||"Oil on canvas";let rr=Ae.querySelector(".visit-row");rr.innerHTML=Kh.button(Dt),rr.hidden=!rr.innerHTML;let Hr=rr.querySelector(".visit-btn");Hr&&(Hr.addEventListener("click",Er=>{Er.stopPropagation(),Kh.open(Dt)}),Ae.warm=()=>Kh.warm(Dt));let xn=0;Ye.innerHTML=Kt.split(" ").map(Er=>'<span class="tour-word">'+Er.split("").map(An=>`<span style="transition-delay:${(.35+xn++*.045).toFixed(3)}s">${Mi(An)}</span>`).join("")+"</span>").join(" "),Ye.setAttribute("aria-label",Kt);let eo=.35+Kt.length*.045+.2;Ae.querySelector(".tour-rule").style.transitionDelay=eo.toFixed(2)+"s";let Br=String(Dt.description||"").split(/\n\s*\n/).filter(Er=>Er.trim());if(Ae.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&Br.length){lt.innerHTML=Br.map(Xr=>`<p class="hand-text">${Mi(Xr.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let Er=lt.querySelector("canvas"),An=Br.map(Xr=>Xr.trim()).join(`

`),tn=!1,zo=!1,aa=0;lt.addEventListener("wheel",()=>{tn=!0},{passive:!0}),lt.addEventListener("touchmove",()=>{tn=!0},{passive:!0});let Fa=parseFloat(getComputedStyle(lt).fontSize)||17,Co=o(Er,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Fa*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:Xr=>3.5+Xr.length/420,seed:3+Kt.length,onPen:Xr=>{if(tn)return;let Da=Xr-lt.clientHeight*.55;Da>lt.scrollTop+4&&(lt.scrollTop+=Math.min(16,Da-lt.scrollTop))}});Er.addEventListener("click",Xr=>{Xr.stopPropagation(),clearTimeout(aa),zo?Co.finish():(zo=!0,Co.write(An,!0))}),Ae.write=()=>{if(clearTimeout(aa),tn=!1,zo){Co.write(An,!0);return}Co.write("",!0),aa=setTimeout(()=>{zo=!0,Co.write(An)},eo*.6*1e3)},Ae.stopWrite=()=>{clearTimeout(aa),Co.stop()};let Ro=0;window.addEventListener("resize",()=>{clearTimeout(Ro),Ro=setTimeout(()=>{zo&&Ae.classList.contains("on")&&Co.write(An,!0)},250)})}else lt.innerHTML=Br.map(Er=>`<p class="tour-line">${Mi(Er.trim())}</p>`).join(""),lt.querySelectorAll(".tour-line").forEach((Er,An)=>{Er.style.transitionDelay=(eo+.3+Math.min(An,6)*.35).toFixed(2)+"s"})},Ae}let T=()=>t.paintings?t.paintings():[],z=ae=>T().find(Ae=>Ae.side==="corridor"&&Math.abs(Ae.paintingPosition[0]-ae)<.5),L=w(()=>T().find(ae=>ae.side==="end")),O=()=>Qn("div","tour-card",""),U=w(()=>z(Si[0])),K=w(()=>z(Ai[0])),Z=w(()=>z(Ti[0])),J=bn.map(ae=>w(()=>T().find(Ae=>Ae.side===ae.side&&Math.abs(Ae.paintingPosition[2]-ae.z)<.5))),ce=Qn("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${hl?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Yh.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${hl?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);pl(ce,.5,.35);let H=[d,g,x,y,L,O(),O(),O(),U,K,Z,O(),...J,ce];s.append(...H,c,l,m,h),document.body.appendChild(s);let j=Qg()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{Rt=-1}});document.body.classList.add("touring");let de=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,ve=de?"Scroll":"Swipe",it=Na.map((ae,Ae)=>Ae===0?de?"Scroll to begin":"Swipe up to begin":Ae===1?ve+" to follow the leaf":Ae===2?ve+" to follow the light":Ae===3?ve+" for its story":Ae===6||Ae===7||Ae===Na.length-1?"":ve+" on"),_e=[0];Zh.forEach(ae=>_e.push(_e[_e.length-1]+ae.dur));let ht=_e[_e.length-1],bt=210,_t=95,Le=.35,vt=1.4,pt=.32,Tt=1,Gt=1.3,Ft=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ge=2.2,Ze=.7,et=.9,Ot=!0,mt=0,cr=0,ne=0,Ke=-10,ot=!1,Rt=-1,Pt=0,lr=0,Et=0,_=null,qt=Object.assign({},dl(0)),st=Na[0].cam(0),kt={phase:"home",pos:Es.slice(),tumble:0},Lt=0,We=ae=>{let Ae=0;for(let Ye=1;Ye<_e.length;Ye++)Math.abs(_e[Ye]-ae)<Math.abs(_e[Ae]-ae)&&(Ae=Ye);return Ae};function Yt(ae){let Ae=H[ae];Ae&&Ae.fill&&(Ae.fill(),Ae.body.scrollTop=0,Ae.offsetWidth),H.forEach((Ye,lt)=>{let Dt=Ye.classList.contains("on");Ye.classList.toggle("on",lt===ae),lt===ae&&!Dt&&Ye.write&&Ye.write(),lt!==ae&&Dt&&Ye.stopWrite&&Ye.stopWrite()}),Ae&&Ae.warm&&Ae.warm(),u.textContent=it[ae]||"",h.classList.toggle("on",!!it[ae])}function Ht(){H.forEach(ae=>{ae.stopWrite&&ae.classList.contains("on")&&ae.stopWrite(),ae.classList.remove("on")}),h.classList.remove("on")}let fr=null,Rr=-1;function Sn(ae){if(j.active||!Ot||_)return;let Ae=Et-Ke>Le;if(Ke=Et,Ae||!fr){let Ye=0,lt=ht;for(let Dt=0;Dt<_e.length;Dt++)if(_e[Dt]<=mt-.02&&(Ye=_e[Dt]),_e[Dt]>=mt+.02){lt=_e[Dt];break}fr={lo:Ye,hi:lt}}Et<Rr||(ot=!1,ne=Math.max(fr.lo,Math.min(fr.hi,ne+ae)),ne=Math.max(mt-Ge,Math.min(mt+Ge,ne)))}function wn(ae){if(j.active||!Ot||_)return;let Ae=ot?ne:mt,Ye;if(ae>0)Ye=_e.findIndex(lt=>lt>Ae+.05);else{Ye=-1;for(let lt=_e.length-1;lt>=0;lt--)if(_e[lt]<Ae-.05){Ye=lt;break}}Ye<0||(ne=_e[Ye],ot=!0,Ke=Et)}let tr=null,ra=ae=>ae.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(ae=>s.addEventListener(ae,ra)),s.addEventListener("pointerdown",ae=>{if(ae.stopPropagation(),!(ae.target.closest("button, a")||ae.target.closest(".tour-body"))){tr={x:ae.clientX,y:ae.clientY,lx:ae.clientX,ly:ae.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(ae.pointerId)}catch(Ae){}}}),s.addEventListener("pointermove",ae=>{if(!tr)return;let Ae=ae.clientX-tr.lx,Ye=ae.clientY-tr.ly;tr.lx=ae.clientX,tr.ly=ae.clientY;let lt=Math.abs(Ye)>=Math.abs(Ae)?-Ye:-Ae;tr.moved+=Math.abs(lt);let Dt=performance.now(),Kt=lt/_t;tr.v=tr.v*.6+Kt/Math.max(.008,(Dt-tr.lt)/1e3)*.4,tr.lt=Dt,tr.moved>6&&Sn(Kt)});let Oa=ae=>{let Ae=tr;if(tr=null,!!Ae){if(j.active){Ae.moved<10&&performance.now()-Ae.t<500?j.tap():Ae.y-(ae?ae.clientY:Ae.ly)>30&&j.swipe(1);return}Ae.moved<10&&performance.now()-Ae.t<500?wn(1):performance.now()-Ae.lt<120&&Sn(Math.max(-1.6,Math.min(1.6,Ae.v*.22)))}};s.addEventListener("pointerup",ae=>{ae.stopPropagation(),Oa(ae)}),s.addEventListener("pointercancel",()=>{tr=null}),s.addEventListener("wheel",ae=>{if(j.active){if(ae.target.closest(".conf-ui"))return;ae.preventDefault(),j.wheel(ae.deltaY);return}if(ae.target.closest(".tour-body")){let Ye=ae.target.closest(".tour-body"),lt=Ye.scrollTop+Ye.clientHeight>=Ye.scrollHeight-2&&ae.deltaY>0,Dt=Ye.scrollTop<=0&&ae.deltaY<0;if(!lt&&!Dt)return}ae.preventDefault();let Ae=ae.deltaMode===1?ae.deltaY*16:ae.deltaMode===2?ae.deltaY*window.innerHeight:ae.deltaY;Sn(Ae/bt)},{passive:!1}),window.addEventListener("keydown",ae=>{if(!Ot||_||document.body.classList.contains("visiting"))return;if(j.active){if(ae.stopImmediatePropagation(),ae.target&&/TEXTAREA|INPUT|BUTTON/.test(ae.target.tagName))return;j.key(ae.key)&&ae.preventDefault();return}let Ae=ae.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(Ae)>=0){if((Ae==="Enter"||Ae===" ")&&ae.target&&ae.target.tagName==="BUTTON")return;ae.preventDefault(),ae.stopImmediatePropagation(),wn(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(Ae)>=0?(ae.preventDefault(),ae.stopImmediatePropagation(),wn(-1)):Ae==="Escape"?(ae.preventDefault(),Lo()):/^[wasdzq]$/i.test(Ae)&&ae.stopImmediatePropagation()},!0),window.addEventListener("keyup",ae=>{Ot&&!_&&/^(Arrow|[wasdzq]$)/i.test(ae.key)&&ae.stopImmediatePropagation()},!0),f.addEventListener("click",ae=>{ae.stopPropagation(),Lo()}),ce.addEventListener("click",ae=>{let Ae=ae.target.closest("button");Ae&&(ae.stopPropagation(),Ae.dataset.act==="free"&&Lo(),Ae.dataset.act==="replay"&&oa(),Ae.dataset.act==="list"&&Mf().show(!1),Ae.dataset.act==="confess"&&(Ht(),Rt=-2,j.start(st,qt)))});let Ga=[null,[Zn.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Ss[0]-7,0],[42.5+Ss[1]-7,0],[42.5+Ss[2]-7,0],[1e3,Math.PI/2],...bn.map(ae=>[ae.z-1.6,ae.side==="left"?-Math.PI/2:Math.PI/2]),[Pa[2]-1.6,Math.PI]],Ho=null,na=0;function Lo(){if(!Ot||_||!hl)return;let ae=We(mt),Ae=Ga[ae];Ho=ae<=1?{phase:"home",pos:Es.slice()}:ae>=3&&ae<=6?{phase:"floor",pos:ko.slice()}:ae===11?{phase:"floor",pos:z0.slice()}:ae===18?{phase:"floor",pos:Pa.slice()}:null,na=ae>=12?1:0,Ae&&n.place&&n.place(Ae[0],Ae[1]),_={start:Et,fromCam:st,fromLook:Object.assign({},qt)},Ht(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function oa(){mt=ne=0,cr=0,ot=!1,Rt=-1,Pt=0,lr=0,kt={phase:"home",pos:Es.slice(),tumble:0},_n={start:Et}}let _n={start:-1},ur=!1,_l=[];function Rs(ae){Lt+=ae*(kt.phase==="floor"?0:1);let Ae=kt.tumble===void 0?0:kt.tumble,Ye=Jo.fromTranslation(_l,kt.pos);if(kt.phase==="home")Ye=Jo.rotateY(Ye,Ye,2.2+Math.sin(Lt*.9)*.15),Ye=Jo.rotateZ(Ye,Ye,-1+Math.sin(Lt*1.3)*.12),Ye=Jo.rotateX(Ye,Ye,.4);else if(kt.phase==="floor")Ye=Jo.rotateY(Ye,Ye,.65),Ye=Jo.rotateX(Ye,Ye,.16);else{let lt=st.eye,Dt=kt.pos,Kt=[lt[0]-Dt[0],lt[1]-Dt[1],lt[2]-Dt[2]],rr=Math.hypot(Kt[0],Kt[1],Kt[2])||1;Kt=[Kt[0]/rr,Kt[1]/rr,Kt[2]/rr];let Hr=[Kt[2],0,-Kt[0]],xn=Math.hypot(Hr[0],Hr[2])||1;Hr=[Hr[0]/xn,0,Hr[2]/xn];let eo=[Hr[1]*Kt[2]-Hr[2]*Kt[1],Hr[2]*Kt[0]-Hr[0]*Kt[2],Hr[0]*Kt[1]-Hr[1]*Kt[0]],Br=[Hr[0],Hr[1],Hr[2],0,Kt[0],Kt[1],Kt[2],0,eo[0],eo[1],eo[2],0,Dt[0],Dt[1],Dt[2],1];for(let Er=0;Er<16;Er++)Ye[Er]=Br[Er];Ye=Jo.rotateY(Ye,Ye,Lt*.9*Ae+.65),Ye=Jo.rotateX(Ye,Ye,Math.sin(Lt*2.3)*.9*Ae),Ye=Jo.rotateZ(Ye,Ye,Math.sin(Lt*1.7+1)*1.1*Ae+(kt.swing||0)*.9)}return{visible:!0,model:Ye}}function gn(ae){for(let Ae in ru)qt[Ae]=ae[Ae]!==void 0?ae[Ae]:ru[Ae]}function El(ae,Ae){if(ae<=1)return{phase:"home",pos:Es.slice(),tumble:0};let Ye=nx[ae];if(Ye){let lt=Ye.amp;return{phase:"fly",pos:jt(Ye.pos(),[Math.sin(Ae*.55)*lt[0],Math.sin(Ae*.8)*lt[1],(1-Math.cos(Ae*.45))*lt[2]]),tumble:Ye.tumble}}return{phase:"floor",pos:(ae>=18?Pa:ae>=10?z0:ko).slice(),tumble:0}}let N0=0,P0=null;function Ml(ae){let Ae=Math.min(.1,Math.max(0,ae-N0));if(N0=ae,Et=ae,ur||(ur=!0,_n.start=ae),_)return null;if(j.active){let dr=j.update(Ae);return st=dr.camera,gn(dr.look),r&&window.__camOverride&&(st=window.__camOverride),r&&window.__lookOverride&&Object.assign(qt,window.__lookOverride),{camera:st,walker:null,door:1,look:qt,leaf:Rs(Ae)}}if(!ot&&!tr&&Et-Ke>Ze){let dr=We(ne);Math.abs(_e[dr]-ne)<et&&(ne=_e[dr])}let Ye=ne-mt;if(ot){let Nr=Math.sign(Ye)*Math.min(Tt,Math.sqrt(2*Gt*Math.abs(Ye)))-cr;cr+=Math.sign(Nr)*Math.min(Math.abs(Nr),Gt*Ae),mt+=cr*Ae,(Ye>0&&mt>=ne||Ye<0&&mt<=ne||Math.abs(ne-mt)<1e-4)&&(mt=ne,cr=0,ot=!1)}else{let dr=Z6(mt,ne,cr,pt,Ae,3);mt=dr[0],cr=dr[1],Math.abs(ne-mt)<1e-4&&Math.abs(cr)<.001&&(mt=ne,cr=0)}let lt=0;for(;lt<Zh.length-1&&mt>=_e[lt+1];)lt++;let Dt=Zh[lt],Kt=Jn((mt-_e[lt])/Dt.dur),rr=Na[lt],Hr=Na[lt+1],xn=We(mt);xn!==Pt&&(Pt=xn,lr=0);let eo=Math.abs(mt-_e[xn])<.02;eo&&(lr+=Ae);let Br=1-Re(0,1.2,Math.abs(mt-_e[xn])),Er=Dt.leaf(Kt);if(Er.pos?kt=Object.assign({},Er):kt=Object.assign({},Er,{pos:Er.phase==="home"?Es.slice():(lt>=10?z0:ko).slice()}),nx[xn]&&Br>0){let dr=El(xn,lr);kt.pos=xr(kt.pos,dr.pos,Br)}let An=Dt.walker&&(Kt>.01||lt===6)?Dt.walker(Kt):null;P0=An==null?null:{x:An,z:Jh,heading:Math.PI/2,phase:(An-ix)/oE};let tn=Dt.cam(Kt,rr.cam(0),Hr.cam(0),kt);if(Br>0&&lr>0){let dr=Na[xn],Nr=dr.cam(0),Bo=dr.cam(lr);tn=Ct(jt(tn.eye,Jg(Zg(Bo.eye,Nr.eye),Br)),jt(tn.target,Jg(Zg(Bo.target,Nr.target),Br)),tn.fov+(Bo.fov-Nr.fov)*Br,tn.roll+(Bo.roll-Nr.roll)*Br)}if(Br>0&&!Ft){let dr=Et,Nr=.006*Br,Bo=Math.sin(dr*.61)*.6+Math.sin(dr*1.37+1.3)*.4,I0=Math.sin(dr*.47+2.1)*.6+Math.sin(dr*1.13+.4)*.4,O0=Math.sin(dr*.53+4)*.5+Math.sin(dr*.97+2.6)*.5;tn=Ct(jt(tn.eye,[Bo*Nr,I0*Nr*.7,O0*Nr]),jt(tn.target,[I0*Nr*1.8,Bo*Nr*1.4,0]),tn.fov,tn.roll+O0*.0012*Br)}st=tn;let zo=dl(lt),aa=dl(lt+1),Fa=Object.assign({},zo,Dt.look(Kt,zo,aa,kt,tn.eye));if(Br>0){let dr=dl(xn);for(let Nr in dr)typeof dr[Nr]=="number"&&(Fa[Nr]=Oe(Fa[Nr],dr[Nr],Br))}gn(Fa);let Ro=eo&&Math.abs(ne-mt)<.02?xn:-1;Ro!==Rt&&(Ro>=0&&(Rr=Et+vt),Rt=Ro,Ro>=0?Yt(Ro):Ht()),m.querySelectorAll("i").forEach((dr,Nr)=>dr.classList.toggle("on",Nr===xn));let Xr=Rt>=0?H[Rt]:null;Xr&&Xr.fill&&!Xr.filled&&(Xr.fill(),Xr.filled&&(Xr.classList.remove("on"),Xr.offsetWidth,Xr.classList.add("on")));let Da=Jn((ae-_n.start)/2.6);return Da<1&&(qt.fade=Math.max(qt.fade,1-Re(0,1,Da)),qt.fadeColor=[0,0,0]),r&&window.__camOverride&&(st=window.__camOverride),r&&window.__lookOverride&&Object.assign(qt,window.__lookOverride),{camera:st,walker:P0,door:Dt.door?Dt.door(Kt):lt>=12?1:0,look:qt,leaf:Rs(Ae)}}return r&&(window.__tour={go:wn,exit:Lo,wind:Sn,confess(){Ht(),Rt=-2,j.start(st,qt)},conf:j,paper:s0().STATE,seek(ae,Ae){mt=ne=_e[ae]+(_e[ae+1]-_e[ae])*Ae,cr=0,ot=!1,Ke=Et+1e6,_n.start=Et-10,ur=!0},jump(ae){mt=ne=_e[ae],cr=0,ot=!1,lr=0,Ke=Et,_n.start=Et-10,ur=!0},state:()=>({current:We(mt),scroll:+mt.toFixed(3),target:+ne.toFixed(3),shown:Rt,move:Math.abs(ne-mt)>.02?{p:mt}:null,camNow:st,leaf:kt,look:qt})}),{update:Ml,get active(){return Ot&&!_},handover(ae){if(!_)return null;let Ae=Jn((ae-_.start)/1.8);return Ae>=1?(Ot=!1,null):{from:_.fromCam,fromLook:_.fromLook,k:Cr(Ae)}},restingDoor:()=>na,restingLeaf(){return Ho?(kt=Ho,Rs(0)):null},mix:ki,cam:Ct}}});var dE=d1(),Li=wo(),uu=Mf(),ml=Li.reflection,pE=!1,wx=(e,t,r,n,o)=>n+(e-t)*(o-n)/(r-t),du=()=>wx(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(du=()=>wx(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var _x=()=>2*Math.atan(Math.tan(du()*.5)*window.innerHeight/window.innerWidth),vE=S1(),gl=new vE;gl.showPanel(0);pE&&document.body.appendChild(gl.dom);var qr,Cs,su,Ls,cu,Ar;function mE(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!mE())throw dE.finish(),uu.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");qr=A1()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Li.pixelRatio});location.hash==="#list"&&uu.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&uu.show(!1)});Cs=hp()();var gE=Zf();su=gE(qr,Cs,ml);Ls=Cv()(qr,Cs);cu=Iv()(qr);var lx=Gv()(qr,Cs),fx=Xv()(qr),hx=Qv()(qr),ux=pm()(qr),dx=bm()(qr),px=Am()(qr),zi=Im()(qr),lu=Sh(),Ex=vc(),xE=Qs(),fu=Th(),Mx=En(),{A:Ts}=Eo();Ar=Mg()(Cs,_x);var xl=Ag()(qr,Li),ks=Cg()(qr),vx=Ng()(qr),yE=Og()(qr,Li),bE=Hg()(qr,Li),mx=ni()(qr),gx=s0()(qr),ea=cx()({fps:Ar,paintings:()=>Ls.interactables(),avatar:zi,onExit:()=>Ar.setPaused(!1)});Ar.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=xl);var yl=[],bl=[],Ia=[7,2,1.6];Cs.viewer=Ia;var wE=qr({cull:{enable:!0,face:"back"},uniforms:{view:()=>yl,proj:()=>bl,yScale:1,mirrorOn:()=>ml?1:0,night:()=>Mx.night,time:qr.context("time")}}),_E=qr({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),Sx=document.createElement("style");Sx.textContent=`

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
`;document.head.appendChild(Sx);var go=document.createElement("button");go.className="painting-plaque";go.type="button";go.setAttribute("aria-label","Read painting");document.body.appendChild(go);var Fn=document.createElement("div");Fn.className="story-overlay";Fn.innerHTML=`

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

		${Ex.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Fn);var zs=document.createElement("div");zs.className="museum-links";zs.innerHTML=Ex.icons("museum-link");zs.insertBefore(Xh()("museum-link"),zs.firstChild);["mousedown","pointerdown","click"].forEach(e=>zs.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(zs);var EE=Fn.querySelector("#story-title"),ME=Fn.querySelector("#story-body"),xx=Fn.querySelector("#story-meta"),SE=Fn.querySelector(".story-contact"),R0=Fn.querySelector(".story-visit");R0.addEventListener("click",e=>{e.target.closest(".visit-btn")&&Ci&&fu.open(Ci)});var AE=Fn.querySelector(".story-close"),Ci=null,Un={p:0,target:0,last:0},Ax={title:lu.title,description:lu.text,isAbout:!0},ta=null;function pu(e){e&&(Ci=e,EE.textContent=e.title||"",ME.textContent=e.description||"",xx.textContent=e.isAbout?"":xE(e),xx.hidden=!!e.isAbout,SE.hidden=!e.isAbout,R0.innerHTML=e.isAbout?"":fu.button(e),R0.hidden=!R0.innerHTML,R0.hidden||fu.warm(e),Fn.classList.toggle("about-mode",!!e.isAbout),Fn.classList.add("open"),Un.target=e.isAbout?1:0,ta=e,go.classList.remove("visible"),Ar.setPaused(!0))}function vu(){Fn.classList.remove("open"),Un.target=0,Ci=null,ta=null,Ar.setPaused(!1)}function Tx(e){e&&(e.preventDefault(),e.stopPropagation()),ta&&pu(ta)}go.addEventListener("pointerup",Tx,!0);go.addEventListener("touchend",Tx,{passive:!1,capture:!0});go.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),Ci===null&&ta&&pu(ta)},!0);AE.addEventListener("click",vu);Fn.addEventListener("click",e=>{e.target===Fn&&vu()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Fn.classList.contains("open")&&vu()});function yx(e,t){let r=t[0],n=t[1],o=t[2];return[e[0]*r+e[4]*n+e[8]*o+e[12],e[1]*r+e[5]*n+e[9]*o+e[13],e[2]*r+e[6]*n+e[10]*o+e[14],e[3]*r+e[7]*n+e[11]*o+e[15]]}function TE(){if(Ci)return;if(ea.active){ta=null,go.classList.remove("visible");return}let e=Ls.interactables(),t=Ar.forward[0],r=Ar.forward[2],n=Math.hypot(t,r)||1,o=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let l=s[0]-Ar.pos[0],m=s[2]-Ar.pos[2],h=-(l*c+m*f),u=Math.abs(l*f-m*c),d=-(t*c+r*f)/n,p=i.side==="end"?11:8,g=(i.width||2)/2;d>.9&&h>.5&&h<p&&u<g+.8&&h<a&&(o=i,a=h)}if(!o){let i=Ar.pos[0],s=Ar.pos[2];t/n>.85&&i<13.6&&s>Ts.z0-.5&&s<Ts.z1+.5&&(o=Object.assign({},Ax,{plaqueTitle:lu.name}))}o?(ta=o,go.textContent=o.isAbout?"ABOUT  \xB7  "+o.plaqueTitle:"READ  \xB7  "+o.title,go.classList.add("visible")):(ta=null,go.classList.remove("visible"))}var mu=l0();function kE(){let e=zi.state;if(!e||!e.glowPos)return null;let t=yx(Ar.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),r=yx(Ar.proj(),t);return r[3]<=.05?null:[(r[0]/r[3]*.5+.5)*window.innerWidth,(.5-r[1]/r[3]*.5)*window.innerHeight,r[3]]}var hu=null;window.addEventListener("pointerdown",e=>{hu={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=hu;if(hu=null,!t||Ci||ea.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let r=kE();if(!r)return;let n=!!document.pointerLockElement,o=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/r[2]);Math.hypot(o-r[0],a-r[1])<i&&(e.preventDefault(),e.stopPropagation(),pu(Ax))},!0);function LE(e){let t=Math.min(Math.max(e-Un.last,0),.1);Un.last=e;let r=t/1.6;if(Un.p=Un.target>Un.p?Math.min(1,Un.p+r):Math.max(0,Un.p-r),Un.p<=0)return;let n=Un.p<.5?2*Un.p*Un.p:1-Math.pow(-2*Un.p+2,2)/2,o=window.innerHeight>window.innerWidth,a=zi.state,i=a&&a.hipsPos?a.hipsPos[0]:Ts.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Ts.zc,c=o?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=o?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=Ar.pos,m=Ar.forward,h=[l[0],l[1],l[2]],u=[l[0]+m[0],l[1]+m[1],l[2]+m[2]],d=(y,w)=>y.map((T,z)=>T+(w[z]-T)*n),p=[Ts.cx-6.2,1.7,Ts.zc],g=1-n,x=h.map((y,w)=>g*g*y+2*g*n*p[w]+n*n*c[w]);mu.lookAt(Ar.view(),x,d(u,f),[0,1,0])}var As={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},wl=null;function zE(e,t,r,n){let o=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],a=Math.hypot(o[0],o[1],o[2])||1,i=[-o[2]/a,0,o[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return mu.lookAt(e,t,r,[i[0]*f,c,i[2]*f])}function CE(e){let t=window.innerWidth/window.innerHeight,r=xl.shot,n=ea.active?ea.update(e):null,o=n?null:ea.handover(e),a=null,i=As;if(n?(a=n.camera,i=n.look,wl=n.leaf,zi.setWalk(n.walker||null),ks.setOpen(n.door||0)):(wl=ea.restingLeaf(),zi.setWalk(null),ks.setOpen(ea.restingDoor())),o){let s=Ar.pos,c=Ar.forward,f=ea.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],_x()*180/Math.PI,0);a=ea.mix(o.from,f,o.k),i={};for(let l in As)i[l]=Array.isArray(As[l])?As[l]:o.fromLook[l]+(As[l]-o.fromLook[l])*o.k}if(a)zE(yl,a.eye,a.target,a.roll||0),mu.perspective(bl,a.fov*Math.PI/180,t,.1,700),Ia[0]=a.eye[0],Ia[1]=a.eye[1],Ia[2]=a.eye[2];else{let s=Ar.view(),c=Ar.proj();for(let h=0;h<16;h++)yl[h]=s[h],bl[h]=c[h];let f=s[12],l=s[13],m=s[14];Ia[0]=-(s[0]*f+s[1]*l+s[2]*m),Ia[1]=-(s[4]*f+s[5]*l+s[6]*m),Ia[2]=-(s[8]*f+s[9]*l+s[10]*m)}for(let s in As)r[s]=i[s]}var C0=0,bx=0;qr.frame(function({time:e}){if(document.body.classList.contains("visiting")){C0=0;return}gl.begin(),Mx.tick(e),C0++,C0===60&&(bx=e),C0===180&&120/Math.max(e-bx,.001)<32&&Li.stepDown()&&(ml=Li.reflection,C0=0),Ar.tick({time:e}),LE(e),Ls.update(Ar.pos,Ar.fmouse[1],du()),TE(),CE(e),xl.capture(arguments[0],{view:yl,proj:bl,eye:Ia},()=>{wE(()=>{ml&&_E(()=>{su(),lx(),mx(),gx({reflected:!0}),px(),zi(),cu(Ls.batch()),fx(),ux(),dx(),vx(wl),ks(),hx(),ks.glass()}),su(),lx(),mx(),gx(),px(),zi(),cu(Ls.batch()),fx(),ux(),dx(),bE(),vx(wl),ks(),yE(),hx(),ks.glass()})}),xl.present(),gl.end()});})();
