"use strict";(()=>{var Q=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var Bf=Q(($M,Uf)=>{"use strict";var qa=document.getElementById("loader"),ji=qa&&qa.querySelector(".loader-bar i"),$a=0,Vi=0,qf=!1,Lx=performance.now();function $f(){if(!ji)return;let e=$a?Vi/Math.max($a,24):0;ji.style.transform="scaleX("+Math.min(1,.06+e*.94).toFixed(3)+")"}function q0(){qf||(qf=!0,window.__galleryReady=!0,qa&&(ji&&(ji.style.transform="scaleX(1)"),qa.classList.add("done"),setTimeout(()=>qa.remove(),1400)))}var Hf=null;function zx(){clearTimeout(Hf),Vi>=$a&&performance.now()-Lx>600&&(Hf=setTimeout(()=>{Vi>=$a&&q0()},450))}setTimeout(q0,2e4);var Cx=e=>/(^|\/)(res|images)\//.test(e),Bi=window.fetch.bind(window);async function Rx(e,t){let r=await Bi(e+".gz",t);if(!r.ok)throw new Error("no .gz");let n=new Uint8Array(await r.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let o=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(o).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let r=typeof e=="string"?e:e&&e.url||"";if(!Cx(r))return Bi(e,t);$a++,$f();let n=a=>(Vi++,$f(),zx(),a),o;return/\.bin$/.test(r)&&typeof DecompressionStream!="undefined"?o=Rx(r,t).catch(()=>Bi(e,t)):o=Bi(e,t),o.then(n,a=>{throw n(),a})};Uf.exports={finish:q0}});var Ir=Q((HM,Wf)=>{"use strict";var jf=typeof navigator!="undefined"&&navigator.userAgent||"",Ix=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,pn=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(jf)||/Macintosh/.test(jf)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||Ix,Vf=typeof window!="undefined"&&window.devicePixelRatio||1,ur={isPhone:pn,pixelRatio:pn?Math.min(Vf,1.5):Math.min(Vf,2),reflection:!pn,gardenDetail:pn?0:1,leafShare:pn?.65:1,motion:!pn,post:pn?1:2,level:pn?1:0};ur.stepDown=()=>{if(ur.reflection)ur.reflection=!1;else if(ur.gardenDetail>0||ur.motion)ur.gardenDetail=0,ur.motion=!1,ur.leafShare=Math.min(ur.leafShare,.65);else if(ur.post>0)ur.post--;else return!1;return ur.level++,!0};Wf.exports=ur});var $0=Q((UM,Xf)=>{"use strict";Xf.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Wi=Q((BM,Qf)=>{"use strict";var Xt={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Yf='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Kf='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Xt.instagramUrl="https://instagram.com/"+Xt.instagram;Xt.mailUrl="mailto:"+Xt.email+"?subject="+encodeURIComponent("Your paintings");Xt.icons=e=>`
	<a class="${e}" href="${Xt.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Xt.instagram}" title="Instagram">${Yf}</a>
	<a class="${e}" href="${Xt.mailUrl}" aria-label="Email ${Xt.email}" title="Email">${Kf}</a>`;Xt.line=e=>`
	<span class="${e}">
		<a href="${Xt.instagramUrl}" target="_blank" rel="noopener">${Yf}<span>@${Xt.instagram}</span></a>
		<a href="${Xt.mailUrl}">${Kf}<span>${Xt.email}</span></a>
	</span>`;Qf.exports=Xt});var Ha=Q((jM,Zf)=>{"use strict";Zf.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var H0=Q((VM,th)=>{"use strict";var Px=$0(),Nx=Wi(),Jf=Ha(),Ox=Ir(),mn=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Gx=`
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
`,Yt=null;function Dx(e){if(Yt){Yt.hidden=!1,requestAnimationFrame(()=>Yt.classList.add("on"));return}let t=document.createElement("style");t.textContent=Gx,document.head.appendChild(t);let r=!Ox.isPhone;Yt=document.createElement("div"),Yt.className="plist",Yt.setAttribute("role","region"),Yt.setAttribute("aria-label","All paintings"),Yt.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${Nx.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${Px.map(o=>`
			<article class="plist-item" id="${mn(o.slug)}">
				<img loading="lazy" decoding="async" alt="${mn(o.title)}, ${mn(Jf(o))}"
					src="images/web/${mn(o.slug)}${r?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${mn(o.file)}'">
				<p class="plist-meta">${mn(Jf(o))}</p>
				<h2>${mn(o.title)}</h2>
				<details><summary>Read its story</summary>
					${String(o.description).split(/\n\s*\n/).map(a=>`<p>${mn(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(o=>Yt.addEventListener(o,a=>a.stopPropagation(),{passive:!0}));let n=Yt.querySelector(".plist-close");n&&n.addEventListener("click",eh),document.body.appendChild(Yt),requestAnimationFrame(()=>Yt.classList.add("on"))}function eh(){Yt&&(Yt.classList.remove("on"),setTimeout(()=>{Yt.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}th.exports={show:Dx,hide:eh}});var rh=Q((U0,B0)=>{(function(e,t){typeof U0=="object"&&typeof B0!="undefined"?B0.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(U0,function(){var e=function(){function t(v){return o.appendChild(v.dom),v}function r(v){for(var h=0;h<o.children.length;h++)o.children[h].style.display=h===v?"block":"none";n=v}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(v){v.preventDefault(),r(++n%o.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),l=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var v=(performance||Date).now();if(l.update(v-a,200),v>i+1e3&&(c.update(1e3*s/(v-i),100),i=v,s=0,f)){var h=performance.memory;f.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return v},update:function(){a=this.end()},domElement:o,setMode:r}};return e.Panel=function(t,r,n){var o=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,l=48*s,f=3*s,v=2*s,h=3*s,u=15*s,m=74*s,d=30*s,p=document.createElement("canvas");p.width=c,p.height=l,p.style.cssText="width:80px;height:48px";var g=p.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,l),g.fillStyle=r,g.fillText(t,f,v),g.fillRect(h,u,m,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,u,m,d),{dom:p,update:function(x,w){o=Math.min(o,x),a=Math.max(a,x),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,u),g.fillStyle=r,g.fillText(i(x)+" "+t+" ("+i(o)+"-"+i(a)+")",f,v),g.drawImage(p,h+s,u,m-s,d,h,u,m-s,d),g.fillRect(h+m-s,u,s,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+m-s,u,s,i((1-x/w)*d))}}},e})});var Br=Q((WM,nh)=>{nh.exports=function(e){return e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Float32Array||e instanceof Float64Array||e instanceof Uint8ClampedArray}});var Qr=Q((XM,oh)=>{oh.exports=function(e,t){for(var r=Object.keys(t),n=0;n<r.length;++n)e[r[n]]=t[r[n]];return e}});var or=Q((YM,yh)=>{var Fx=Br(),qx=Qr(),Vn=`
`;function $x(e){return typeof atob!="undefined"?atob(e):"base64:"+e}function Zr(e){var t=new Error("(regl) "+e);throw console.error(t),t}function mt(e,t){e||Zr(t)}function Wn(e){return e?": "+e:""}function Hx(e,t,r){e in t||Zr("unknown parameter ("+e+")"+Wn(r)+". possible values: "+Object.keys(t).join())}function Ux(e,t){Fx(e)||Zr("invalid parameter type"+Wn(t)+". must be a typed array")}function lh(e,t){switch(t){case"number":return typeof e=="number";case"object":return typeof e=="object";case"string":return typeof e=="string";case"boolean":return typeof e=="boolean";case"function":return typeof e=="function";case"undefined":return typeof e=="undefined";case"symbol":return typeof e=="symbol"}}function Bx(e,t,r){lh(e,t)||Zr("invalid parameter type"+Wn(r)+". expected "+t+", got "+typeof e)}function jx(e,t){e>=0&&(e|0)===e||Zr("invalid parameter type, ("+e+")"+Wn(t)+". must be a nonnegative integer")}function V0(e,t,r){t.indexOf(e)<0&&Zr("invalid value"+Wn(r)+". must be one of: "+t)}var ah=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function Vx(e){Object.keys(e).forEach(function(t){ah.indexOf(t)<0&&Zr('invalid regl constructor argument "'+t+'". must be one of '+ah)})}function Do(e,t){for(e=e+"";e.length<t;)e=" "+e;return e}function j0(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function ih(e,t){this.number=e,this.line=t,this.errors=[]}function sh(e,t,r){this.file=e,this.line=t,this.message=r}function Xn(){var e=new Error,t=(e.stack||e).toString(),r=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(t);if(r)return r[1];var n=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(t);return n?n[1]:"unknown"}function fh(){var e=new Error,t=(e.stack||e).toString(),r=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(t);if(r)return r[1];var n=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(t);return n?n[1]:"unknown"}function W0(e,t){var r=e.split(`
`),n=1,o=0,a={unknown:new j0,0:new j0};a.unknown.name=a[0].name=t||Xn(),a.unknown.lines.push(new ih(0,""));for(var i=0;i<r.length;++i){var s=r[i],c=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(s);if(c)switch(c[1]){case"line":var l=/(\d+)(\s+\d+)?/.exec(c[2]);l&&(n=l[1]|0,l[2]&&(o=l[2]|0,o in a||(a[o]=new j0)));break;case"define":var f=/SHADER_NAME(_B64)?\s+(.*)$/.exec(c[2]);f&&(a[o].name=f[1]?$x(f[2]):f[2]);break}a[o].lines.push(new ih(n++,s))}return Object.keys(a).forEach(function(v){var h=a[v];h.lines.forEach(function(u){h.index[u.number]=u})}),a}function Wx(e){var t=[];return e.split(`
`).forEach(function(r){if(!(r.length<5)){var n=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(r);n?t.push(new sh(n[1]|0,n[2]|0,n[3].trim())):r.length>0&&t.push(new sh("unknown",0,r))}}),t}function Xx(e,t){t.forEach(function(r){var n=e[r.file];if(n){var o=n.index[r.line];if(o){o.errors.push(r),n.hasErrors=!0;return}}e.unknown.hasErrors=!0,e.unknown.lines[0].errors.push(r)})}function Yx(e,t,r,n,o){if(!e.getShaderParameter(t,e.COMPILE_STATUS)){var a=e.getShaderInfoLog(t),i=n===e.FRAGMENT_SHADER?"fragment":"vertex";uh(r,"string",i+" shader source must be a string",o);var s=W0(r,o),c=Wx(a);Xx(s,c),Object.keys(s).forEach(function(l){var f=s[l];if(!f.hasErrors)return;var v=[""],h=[""];function u(m,d){v.push(m),h.push(d||"")}u("file number "+l+": "+f.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),f.lines.forEach(function(m){if(m.errors.length>0){u(Do(m.number,4)+"|  ","background-color:yellow; font-weight:bold"),u(m.line+Vn,"color:red; background-color:yellow; font-weight:bold");var d=0;m.errors.forEach(function(p){var g=p.message,x=/^\s*'(.*)'\s*:\s*(.*)$/.exec(g);if(x){var w=x[1];g=x[2],w==="assign"&&(w="="),d=Math.max(m.line.indexOf(w,d),0)}else d=0;u(Do("| ",6)),u(Do("^^^",d+3)+Vn,"font-weight:bold"),u(Do("| ",6)),u(g+Vn,"font-weight:bold")}),u(Do("| ",6)+Vn)}else u(Do(m.number,4)+"|  "),u(m.line+Vn,"color:red")}),typeof document!="undefined"&&!window.chrome?(h[0]=v.join("%c"),console.log.apply(console,h)):console.log(v.join(""))}),mt.raise("Error compiling "+i+" shader, "+s[0].name)}}function Kx(e,t,r,n,o){if(!e.getProgramParameter(t,e.LINK_STATUS)){var a=e.getProgramInfoLog(t),i=W0(r,o),s=W0(n,o),c='Error linking program with vertex shader, "'+s[0].name+'", and fragment shader "'+i[0].name+'"';typeof document!="undefined"?console.log("%c"+c+Vn+"%c"+a,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(c+Vn+a),mt.raise(c)}}function hh(e){e._commandRef=Xn()}function Qx(e,t,r,n){hh(e);function o(c){return c?n.id(c):0}e._fragId=o(e.static.frag),e._vertId=o(e.static.vert);function a(c,l){Object.keys(l).forEach(function(f){c[n.id(f)]=!0})}var i=e._uniformSet={};a(i,t.static),a(i,t.dynamic);var s=e._attributeSet={};a(s,r.static),a(s,r.dynamic),e._hasCount="count"in e.static||"count"in e.dynamic||"elements"in e.static||"elements"in e.dynamic}function Ki(e,t){var r=fh();Zr(e+" in command "+(t||Xn())+(r==="unknown"?"":" called from "+r))}function Zx(e,t,r){e||Ki(t,r||Xn())}function Jx(e,t,r,n){e in t||Ki("unknown parameter ("+e+")"+Wn(r)+". possible values: "+Object.keys(t).join(),n||Xn())}function uh(e,t,r,n){lh(e,t)||Ki("invalid parameter type"+Wn(r)+". expected "+t+", got "+typeof e,n||Xn())}function ey(e){e()}function ty(e,t,r){e.texture?V0(e.texture._texture.internalformat,t,"unsupported texture format for attachment"):V0(e.renderbuffer._renderbuffer.format,r,"unsupported renderbuffer format for attachment")}var Yi=33071,ch=9728,ry=9984,ny=9985,oy=9986,ay=9987,iy=5120,sy=5121,cy=5122,ly=5123,fy=5124,hy=5125,dh=5126,ph=32819,mh=32820,vh=33635,gh=34042,uy=36193,dr={};dr[iy]=dr[sy]=1;dr[cy]=dr[ly]=dr[uy]=dr[vh]=dr[ph]=dr[mh]=2;dr[fy]=dr[hy]=dr[dh]=dr[gh]=4;function xh(e,t){return e===mh||e===ph||e===vh?2:e===gh?4:dr[e]*t}function Xi(e){return!(e&e-1)&&!!e}function dy(e,t,r){var n,o=t.width,a=t.height,i=t.channels;mt(o>0&&o<=r.maxTextureSize&&a>0&&a<=r.maxTextureSize,"invalid texture shape"),(e.wrapS!==Yi||e.wrapT!==Yi)&&mt(Xi(o)&&Xi(a),"incompatible wrap mode for texture, both width and height must be power of 2"),t.mipmask===1?o!==1&&a!==1&&mt(e.minFilter!==ry&&e.minFilter!==oy&&e.minFilter!==ny&&e.minFilter!==ay,"min filter requires mipmap"):(mt(Xi(o)&&Xi(a),"texture must be a square power of 2 to support mipmapping"),mt(t.mipmask===(o<<1)-1,"missing or incomplete mipmap data")),t.type===dh&&(r.extensions.indexOf("oes_texture_float_linear")<0&&mt(e.minFilter===ch&&e.magFilter===ch,"filter not supported, must enable oes_texture_float_linear"),mt(!e.genMipmaps,"mipmap generation not supported with float textures"));var s=t.images;for(n=0;n<16;++n)if(s[n]){var c=o>>n,l=a>>n;mt(t.mipmask&1<<n,"missing mipmap data");var f=s[n];if(mt(f.width===c&&f.height===l,"invalid shape for mip images"),mt(f.format===t.format&&f.internalformat===t.internalformat&&f.type===t.type,"incompatible type for mip image"),!f.compressed)if(f.data){var v=Math.ceil(xh(f.type,i)*c/f.unpackAlignment)*f.unpackAlignment;mt(f.data.byteLength===v*l,"invalid data for image, buffer size is inconsistent with image format")}else f.element||f.copy}else e.genMipmaps||mt((t.mipmask&1<<n)===0,"extra mipmap data");t.compressed&&mt(!e.genMipmaps,"mipmap generation for compressed images not supported")}function py(e,t,r,n){var o=e.width,a=e.height,i=e.channels;mt(o>0&&o<=n.maxTextureSize&&a>0&&a<=n.maxTextureSize,"invalid texture shape"),mt(o===a,"cube map must be square"),mt(t.wrapS===Yi&&t.wrapT===Yi,"wrap mode not supported by cube map");for(var s=0;s<r.length;++s){var c=r[s];mt(c.width===o&&c.height===a,"inconsistent cube map face shape"),t.genMipmaps&&(mt(!c.compressed,"can not generate mipmap for compressed textures"),mt(c.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var l=c.images,f=0;f<16;++f){var v=l[f];if(v){var h=o>>f,u=a>>f;mt(c.mipmask&1<<f,"missing mipmap data"),mt(v.width===h&&v.height===u,"invalid shape for mip images"),mt(v.format===e.format&&v.internalformat===e.internalformat&&v.type===e.type,"incompatible type for mip image"),v.compressed||(v.data?mt(v.data.byteLength===h*u*Math.max(xh(v.type,i),v.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):v.element||v.copy)}}}}yh.exports=qx(mt,{optional:ey,raise:Zr,commandRaise:Ki,command:Zx,parameter:Hx,commandParameter:Jx,constructor:Vx,type:Bx,commandType:uh,isTypedArray:Ux,nni:jx,oneOf:V0,shaderError:Yx,linkError:Kx,callSite:fh,saveCommandRef:hh,saveDrawInfo:Qx,framebufferFormat:ty,guessCommand:Xn,texture2D:dy,textureCube:py})});var X0=Q((KM,Eh)=>{var my=or(),vy=0,gy=0,xy=5,yy=6;function Yn(e,t){this.id=vy++,this.type=e,this.data=t}function bh(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Ua(e){if(e.length===0)return[];var t=e.charAt(0),r=e.charAt(e.length-1);if(e.length>1&&t===r&&(t==='"'||t==="'"))return['"'+bh(e.substr(1,e.length-2))+'"'];var n=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(e);if(n)return Ua(e.substr(0,n.index)).concat(Ua(n[1])).concat(Ua(e.substr(n.index+n[0].length)));var o=e.split(".");if(o.length===1)return['"'+bh(e)+'"'];for(var a=[],i=0;i<o.length;++i)a=a.concat(Ua(o[i]));return a}function wh(e){return"["+Ua(e).join("][")+"]"}function by(e,t){return new Yn(e,wh(t+""))}function wy(e){return typeof e=="function"&&!e._reglType||e instanceof Yn}function _h(e,t){if(typeof e=="function")return new Yn(gy,e);if(typeof e=="number"||typeof e=="boolean")return new Yn(xy,e);if(Array.isArray(e))return new Yn(yy,e.map(function(r,n){return _h(r,t+"["+n+"]")}));if(e instanceof Yn)return e;my(!1,"invalid option type in uniform "+t)}Eh.exports={DynamicVariable:Yn,define:by,isDynamic:wy,unbox:_h,accessor:wh}});var Ah=Q((QM,Mh)=>{Mh.exports={next:typeof requestAnimationFrame=="function"?function(e){return requestAnimationFrame(e)}:function(e){return setTimeout(e,16)},cancel:typeof cancelAnimationFrame=="function"?function(e){return cancelAnimationFrame(e)}:clearTimeout}});var Sh=Q((ZM,Th)=>{Th.exports=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date}});var Lh=Q((JM,kh)=>{kh.exports=function(){var t={"":0},r=[""];return{id:function(n){var o=t[n];return o||(o=t[n]=r.length,r.push(n),o)},str:function(n){return r[n]}}}});var Ph=Q((eA,Ih)=>{var Pr=or(),zh=Qr();function _y(e,t,r){var n=document.createElement("canvas");zh(n.style,{border:0,margin:0,padding:0,top:0,left:0,width:"100%",height:"100%"}),e.appendChild(n),e===document.body&&(n.style.position="absolute",zh(e.style,{margin:0,padding:0}));function o(){var s=window.innerWidth,c=window.innerHeight;if(e!==document.body){var l=n.getBoundingClientRect();s=l.right-l.left,c=l.bottom-l.top}n.width=r*s,n.height=r*c}var a;e!==document.body&&typeof ResizeObserver=="function"?(a=new ResizeObserver(function(){setTimeout(o)}),a.observe(e)):window.addEventListener("resize",o,!1);function i(){a?a.disconnect():window.removeEventListener("resize",o),e.removeChild(n)}return o(),{canvas:n,onDestroy:i}}function Ey(e,t){function r(n){try{return e.getContext(n,t)}catch(o){return null}}return r("webgl")||r("experimental-webgl")||r("webgl-experimental")}function My(e){return typeof e.nodeName=="string"&&typeof e.appendChild=="function"&&typeof e.getBoundingClientRect=="function"}function Ay(e){return typeof e.drawArrays=="function"||typeof e.drawElements=="function"}function Ch(e){return typeof e=="string"?e.split():(Pr(Array.isArray(e),"invalid extension array"),e)}function Rh(e){return typeof e=="string"?(Pr(typeof document!="undefined","not supported outside of DOM"),document.querySelector(e)):e}Ih.exports=function(t){var r=t||{},n,o,a,i,s={},c=[],l=[],f=typeof window=="undefined"?1:window.devicePixelRatio,v=!1,h=function(d){d&&Pr.raise(d)},u=function(){};if(typeof r=="string"?(Pr(typeof document!="undefined","selector queries only supported in DOM environments"),n=document.querySelector(r),Pr(n,"invalid query string for element")):typeof r=="object"?My(r)?n=r:Ay(r)?(i=r,a=i.canvas):(Pr.constructor(r),"gl"in r?i=r.gl:"canvas"in r?a=Rh(r.canvas):"container"in r&&(o=Rh(r.container)),"attributes"in r&&(s=r.attributes,Pr.type(s,"object","invalid context attributes")),"extensions"in r&&(c=Ch(r.extensions)),"optionalExtensions"in r&&(l=Ch(r.optionalExtensions)),"onDone"in r&&(Pr.type(r.onDone,"function","invalid or missing onDone callback"),h=r.onDone),"profile"in r&&(v=!!r.profile),"pixelRatio"in r&&(f=+r.pixelRatio,Pr(f>0,"invalid pixel ratio"))):Pr.raise("invalid arguments to regl"),n&&(n.nodeName.toLowerCase()==="canvas"?a=n:o=n),!i){if(!a){Pr(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var m=_y(o||document.body,h,f);if(!m)return null;a=m.canvas,u=m.onDestroy}s.premultipliedAlpha===void 0&&(s.premultipliedAlpha=!0),i=Ey(a,s)}return i?{gl:i,canvas:a,container:o,extensions:c,optionalExtensions:l,pixelRatio:f,profile:v,onDone:h,onDestroy:u}:(u(),h("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}});var Oh=Q((tA,Nh)=>{var Ty=or();Nh.exports=function(t,r){var n={};function o(s){Ty.type(s,"string","extension name must be string");var c=s.toLowerCase(),l;try{l=n[c]=t.getExtension(c)}catch(f){}return!!l}for(var a=0;a<r.extensions.length;++a){var i=r.extensions[a];if(!o(i))return r.onDestroy(),r.onDone('"'+i+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return r.optionalExtensions.forEach(o),{extensions:n,restore:function(){Object.keys(n).forEach(function(s){if(n[s]&&!o(s))throw new Error("(regl): error restoring extension "+s)})}}}});var Y0=Q((rA,Gh)=>{Gh.exports=function(t,r){for(var n=Array(t),o=0;o<t;++o)n[o]=r(o);return n}});var Fo=Q((nA,$h)=>{var Sy=Y0(),ky=5120,Ly=5121,zy=5122,Cy=5123,Ry=5124,Iy=5125,Py=5126;function Ny(e){for(var t=16;t<=1<<28;t*=16)if(e<=t)return t;return 0}function Dh(e){var t,r;return t=(e>65535)<<4,e>>>=t,r=(e>255)<<3,e>>>=r,t|=r,r=(e>15)<<2,e>>>=r,t|=r,r=(e>3)<<1,e>>>=r,t|=r,t|e>>1}function Fh(){var e=Sy(8,function(){return[]});function t(a){var i=Ny(a),s=e[Dh(i)>>2];return s.length>0?s.pop():new ArrayBuffer(i)}function r(a){e[Dh(a.byteLength)>>2].push(a)}function n(a,i){var s=null;switch(a){case ky:s=new Int8Array(t(i),0,i);break;case Ly:s=new Uint8Array(t(i),0,i);break;case zy:s=new Int16Array(t(2*i),0,i);break;case Cy:s=new Uint16Array(t(2*i),0,i);break;case Ry:s=new Int32Array(t(4*i),0,i);break;case Iy:s=new Uint32Array(t(4*i),0,i);break;case Py:s=new Float32Array(t(4*i),0,i);break;default:return null}return s.length!==i?s.subarray(0,i):s}function o(a){r(a.buffer)}return{alloc:t,free:r,allocType:n,freeType:o}}var qh=Fh();qh.zero=Fh();$h.exports=qh});var jh=Q((oA,Bh)=>{var Qi=Fo(),Oy=3408,Gy=3410,Dy=3411,Fy=3412,qy=3413,$y=3414,Hy=3415,Uy=33901,By=33902,jy=3379,Vy=3386,Wy=34921,Xy=36347,Yy=36348,Ky=35661,Qy=35660,Zy=34930,Jy=36349,eb=34076,tb=34024,rb=7936,nb=7937,ob=7938,ab=35724,ib=34047,sb=36063,cb=34852,Zi=3553,Hh=34067,lb=34069,fb=33984,Ba=6408,K0=5126,Uh=5121,Q0=36160,hb=36053,ub=36064,db=16384;Bh.exports=function(e,t){var r=1;t.ext_texture_filter_anisotropic&&(r=e.getParameter(ib));var n=1,o=1;t.webgl_draw_buffers&&(n=e.getParameter(cb),o=e.getParameter(sb));var a=!!t.oes_texture_float;if(a){var i=e.createTexture();e.bindTexture(Zi,i),e.texImage2D(Zi,0,Ba,1,1,0,Ba,K0,null);var s=e.createFramebuffer();if(e.bindFramebuffer(Q0,s),e.framebufferTexture2D(Q0,ub,Zi,i,0),e.bindTexture(Zi,null),e.checkFramebufferStatus(Q0)!==hb)a=!1;else{e.viewport(0,0,1,1),e.clearColor(1,0,0,1),e.clear(db);var c=Qi.allocType(K0,4);e.readPixels(0,0,1,1,Ba,K0,c),e.getError()?a=!1:(e.deleteFramebuffer(s),e.deleteTexture(i),a=c[0]===1),Qi.freeType(c)}}var l=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),f=!0;if(!l){var v=e.createTexture(),h=Qi.allocType(Uh,36);e.activeTexture(fb),e.bindTexture(Hh,v),e.texImage2D(lb,0,Ba,3,3,0,Ba,Uh,h),Qi.freeType(h),e.bindTexture(Hh,null),e.deleteTexture(v),f=!e.getError()}return{colorBits:[e.getParameter(Gy),e.getParameter(Dy),e.getParameter(Fy),e.getParameter(qy)],depthBits:e.getParameter($y),stencilBits:e.getParameter(Hy),subpixelBits:e.getParameter(Oy),extensions:Object.keys(t).filter(function(u){return!!t[u]}),maxAnisotropic:r,maxDrawbuffers:n,maxColorAttachments:o,pointSizeDims:e.getParameter(Uy),lineWidthDims:e.getParameter(By),maxViewportDims:e.getParameter(Vy),maxCombinedTextureUnits:e.getParameter(Ky),maxCubeMapSize:e.getParameter(eb),maxRenderbufferSize:e.getParameter(tb),maxTextureUnits:e.getParameter(Zy),maxTextureSize:e.getParameter(jy),maxAttributes:e.getParameter(Wy),maxVertexUniforms:e.getParameter(Xy),maxVertexTextureUnits:e.getParameter(Qy),maxVaryingVectors:e.getParameter(Yy),maxFragmentUniforms:e.getParameter(Jy),glsl:e.getParameter(ab),renderer:e.getParameter(nb),vendor:e.getParameter(rb),version:e.getParameter(ob),readFloat:a,npotTextureCube:f}}});var qo=Q((aA,Vh)=>{var pb=Br();Vh.exports=function(t){return!!t&&typeof t=="object"&&Array.isArray(t.shape)&&Array.isArray(t.stride)&&typeof t.offset=="number"&&t.shape.length===t.stride.length&&(Array.isArray(t.data)||pb(t.data))}});var vn=Q((iA,Wh)=>{Wh.exports=function(e){return Object.keys(e).map(function(t){return e[t]})}});var Z0=Q((sA,Kh)=>{var mb=Fo();Kh.exports={shape:yb,flatten:xb};function vb(e,t,r){for(var n=0;n<t;++n)r[n]=e[n]}function gb(e,t,r,n){for(var o=0,a=0;a<t;++a)for(var i=e[a],s=0;s<r;++s)n[o++]=i[s]}function Xh(e,t,r,n,o,a){for(var i=a,s=0;s<t;++s)for(var c=e[s],l=0;l<r;++l)for(var f=c[l],v=0;v<n;++v)o[i++]=f[v]}function Yh(e,t,r,n,o){for(var a=1,i=r+1;i<t.length;++i)a*=t[i];var s=t[r];if(t.length-r===4){var c=t[r+1],l=t[r+2],f=t[r+3];for(i=0;i<s;++i)Xh(e[i],c,l,f,n,o),o+=a}else for(i=0;i<s;++i)Yh(e[i],t,r+1,n,o),o+=a}function xb(e,t,r,n){var o=1;if(t.length)for(var a=0;a<t.length;++a)o*=t[a];else o=0;var i=n||mb.allocType(r,o);switch(t.length){case 0:break;case 1:vb(e,t[0],i);break;case 2:gb(e,t[0],t[1],i);break;case 3:Xh(e,t[0],t[1],t[2],i,0);break;default:Yh(e,t,0,i,0)}return i}function yb(e){for(var t=[],r=e;r.length;r=r[0])t.push(r.length);return t}});var Ji=Q((cA,bb)=>{bb.exports={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121}});var es=Q((lA,wb)=>{wb.exports={int8:5120,int16:5122,int32:5124,uint8:5121,uint16:5123,uint32:5125,float:5126,float32:5126}});var J0=Q((fA,_b)=>{_b.exports={static:35044,dynamic:35048,stream:35040}});var iu=Q((hA,au)=>{var ar=or(),$o=Br(),ts=qo(),Qh=vn(),Nr=Fo(),ou=Z0(),ec=ou.flatten,Zh=ou.shape,Eb=Ji(),Jh=es(),eu=J0(),tu=35044,Mb=35040,tc=5121,rc=5126,gn=[];gn[5120]=1;gn[5122]=2;gn[5124]=4;gn[5121]=1;gn[5123]=2;gn[5125]=4;gn[5126]=4;function rs(e){return Eb[Object.prototype.toString.call(e)]|0}function ru(e,t){for(var r=0;r<t.length;++r)e[r]=t[r]}function nu(e,t,r,n,o,a,i){for(var s=0,c=0;c<r;++c)for(var l=0;l<n;++l)e[s++]=t[o*c+a*l+i]}au.exports=function(t,r,n,o){var a=0,i={};function s(p){this.id=a++,this.buffer=t.createBuffer(),this.type=p,this.usage=tu,this.byteLength=0,this.dimension=1,this.dtype=tc,this.persistentData=null,n.profile&&(this.stats={size:0})}s.prototype.bind=function(){t.bindBuffer(this.type,this.buffer)},s.prototype.destroy=function(){u(this)};var c=[];function l(p,g){var x=c.pop();return x||(x=new s(p)),x.bind(),h(x,g,Mb,0,1,!1),x}function f(p){c.push(p)}function v(p,g,x){p.byteLength=g.byteLength,t.bufferData(p.type,g,x)}function h(p,g,x,w,b,A){var T;if(p.usage=x,Array.isArray(g)){if(p.dtype=w||rc,g.length>0){var P;if(Array.isArray(g[0])){T=Zh(g);for(var C=1,k=1;k<T.length;++k)C*=T[k];p.dimension=C,P=ec(g,T,p.dtype),v(p,P,x),A?p.persistentData=P:Nr.freeType(P)}else if(typeof g[0]=="number"){p.dimension=b;var U=Nr.allocType(p.dtype,g.length);ru(U,g),v(p,U,x),A?p.persistentData=U:Nr.freeType(U)}else $o(g[0])?(p.dimension=g[0].length,p.dtype=w||rs(g[0])||rc,P=ec(g,[g.length,g[0].length],p.dtype),v(p,P,x),A?p.persistentData=P:Nr.freeType(P)):ar.raise("invalid buffer data")}}else if($o(g))p.dtype=w||rs(g),p.dimension=b,v(p,g,x),A&&(p.persistentData=new Uint8Array(new Uint8Array(g.buffer)));else if(ts(g)){T=g.shape;var R=g.stride,D=g.offset,q=0,B=0,K=0,te=0;T.length===1?(q=T[0],B=1,K=R[0],te=0):T.length===2?(q=T[0],B=T[1],K=R[0],te=R[1]):ar.raise("invalid shape"),p.dtype=w||rs(g.data)||rc,p.dimension=B;var re=Nr.allocType(p.dtype,q*B);nu(re,g.data,q,B,K,te,D),v(p,re,x),A?p.persistentData=re:Nr.freeType(re)}else g instanceof ArrayBuffer?(p.dtype=tc,p.dimension=b,v(p,g,x),A&&(p.persistentData=new Uint8Array(new Uint8Array(g)))):ar.raise("invalid buffer data")}function u(p){r.bufferCount--,o(p);var g=p.buffer;ar(g,"buffer must not be deleted already"),t.deleteBuffer(g),p.buffer=null,delete i[p.id]}function m(p,g,x,w){r.bufferCount++;var b=new s(g);i[b.id]=b;function A(C){var k=tu,U=null,R=0,D=0,q=1;return Array.isArray(C)||$o(C)||ts(C)||C instanceof ArrayBuffer?U=C:typeof C=="number"?R=C|0:C&&(ar.type(C,"object","buffer arguments must be an object, a number or an array"),"data"in C&&(ar(U===null||Array.isArray(U)||$o(U)||ts(U),"invalid data for buffer"),U=C.data),"usage"in C&&(ar.parameter(C.usage,eu,"invalid buffer usage"),k=eu[C.usage]),"type"in C&&(ar.parameter(C.type,Jh,"invalid buffer type"),D=Jh[C.type]),"dimension"in C&&(ar.type(C.dimension,"number","invalid dimension"),q=C.dimension|0),"length"in C&&(ar.nni(R,"buffer length must be a nonnegative integer"),R=C.length|0)),b.bind(),U?h(b,U,k,D,q,w):(R&&t.bufferData(b.type,R,k),b.dtype=D||tc,b.usage=k,b.dimension=q,b.byteLength=R),n.profile&&(b.stats.size=b.byteLength*gn[b.dtype]),A}function T(C,k){ar(k+C.byteLength<=b.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+C.byteLength+" starting from offset "+k+" to a buffer of size "+b.byteLength),t.bufferSubData(b.type,k,C)}function P(C,k){var U=(k||0)|0,R;if(b.bind(),$o(C)||C instanceof ArrayBuffer)T(C,U);else if(Array.isArray(C)){if(C.length>0)if(typeof C[0]=="number"){var D=Nr.allocType(b.dtype,C.length);ru(D,C),T(D,U),Nr.freeType(D)}else if(Array.isArray(C[0])||$o(C[0])){R=Zh(C);var q=ec(C,R,b.dtype);T(q,U),Nr.freeType(q)}else ar.raise("invalid buffer data")}else if(ts(C)){R=C.shape;var B=C.stride,K=0,te=0,re=0,J=0;R.length===1?(K=R[0],te=1,re=B[0],J=0):R.length===2?(K=R[0],te=R[1],re=B[0],J=B[1]):ar.raise("invalid shape");var me=Array.isArray(C.data)?b.dtype:rs(C.data),xe=Nr.allocType(me,K*te);nu(xe,C.data,K,te,re,J,C.offset),T(xe,U),Nr.freeType(xe)}else ar.raise("invalid data for buffer subdata");return A}return x||A(p),A._reglType="buffer",A._buffer=b,A.subdata=P,n.profile&&(A.stats=b.stats),A.destroy=function(){u(b)},A}function d(){Qh(i).forEach(function(p){p.buffer=t.createBuffer(),t.bindBuffer(p.type,p.buffer),t.bufferData(p.type,p.persistentData||p.byteLength,p.usage)})}return n.profile&&(r.getTotalBufferSize=function(){var p=0;return Object.keys(i).forEach(function(g){p+=i[g].stats.size}),p}),{create:m,createStream:l,destroyStream:f,clear:function(){Qh(i).forEach(u),c.forEach(u)},getBuffer:function(p){return p&&p._buffer instanceof s?p._buffer:null},restore:d,_initBuffer:h}}});var ns=Q((uA,Ab)=>{Ab.exports={points:0,point:0,lines:1,line:1,"line loop":2,"line strip":3,triangles:4,triangle:4,"triangle strip":5,"triangle fan":6}});var uu=Q((dA,hu)=>{var Jr=or(),os=Br(),nc=qo(),Tb=vn(),su=ns(),cu=J0(),Sb=0,kb=1,ja=4,Lb=5120,Ho=5121,lu=5122,Uo=5123,fu=5124,Kn=5125,oc=34963,zb=35040,Cb=35044;hu.exports=function(t,r,n,o){var a={},i=0,s={uint8:Ho,uint16:Uo};r.oes_element_index_uint&&(s.uint32=Kn);function c(d){this.id=i++,a[this.id]=this,this.buffer=d,this.primType=ja,this.vertCount=0,this.type=0}c.prototype.bind=function(){this.buffer.bind()};var l=[];function f(d){var p=l.pop();return p||(p=new c(n.create(null,oc,!0,!1)._buffer)),h(p,d,zb,-1,-1,0,0),p}function v(d){l.push(d)}function h(d,p,g,x,w,b,A){d.buffer.bind();var T;if(p){var P=A;!A&&(!os(p)||nc(p)&&!os(p.data))&&(P=r.oes_element_index_uint?Kn:Uo),n._initBuffer(d.buffer,p,g,P,3)}else t.bufferData(oc,b,g),d.buffer.dtype=T||Ho,d.buffer.usage=g,d.buffer.dimension=3,d.buffer.byteLength=b;if(T=A,!A){switch(d.buffer.dtype){case Ho:case Lb:T=Ho;break;case Uo:case lu:T=Uo;break;case Kn:case fu:T=Kn;break;default:Jr.raise("unsupported type for element array")}d.buffer.dtype=T}d.type=T,Jr(T!==Kn||!!r.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var C=w;C<0&&(C=d.buffer.byteLength,T===Uo?C>>=1:T===Kn&&(C>>=2)),d.vertCount=C;var k=x;if(x<0){k=ja;var U=d.buffer.dimension;U===1&&(k=Sb),U===2&&(k=kb),U===3&&(k=ja)}d.primType=k}function u(d){o.elementsCount--,Jr(d.buffer!==null,"must not double destroy elements"),delete a[d.id],d.buffer.destroy(),d.buffer=null}function m(d,p){var g=n.create(null,oc,!0),x=new c(g._buffer);o.elementsCount++;function w(b){if(!b)g(),x.primType=ja,x.vertCount=0,x.type=Ho;else if(typeof b=="number")g(b),x.primType=ja,x.vertCount=b|0,x.type=Ho;else{var A=null,T=Cb,P=-1,C=-1,k=0,U=0;Array.isArray(b)||os(b)||nc(b)?A=b:(Jr.type(b,"object","invalid arguments for elements"),"data"in b&&(A=b.data,Jr(Array.isArray(A)||os(A)||nc(A),"invalid data for element buffer")),"usage"in b&&(Jr.parameter(b.usage,cu,"invalid element buffer usage"),T=cu[b.usage]),"primitive"in b&&(Jr.parameter(b.primitive,su,"invalid element buffer primitive"),P=su[b.primitive]),"count"in b&&(Jr(typeof b.count=="number"&&b.count>=0,"invalid vertex count for elements"),C=b.count|0),"type"in b&&(Jr.parameter(b.type,s,"invalid buffer type"),U=s[b.type]),"length"in b?k=b.length|0:(k=C,U===Uo||U===lu?k*=2:(U===Kn||U===fu)&&(k*=4))),h(x,A,T,P,C,k,U)}return w}return w(d),w._reglType="elements",w._elements=x,w.subdata=function(b,A){return g.subdata(b,A),w},w.destroy=function(){u(x)},w}return{create:m,createStream:f,destroyStream:v,getElements:function(d){return typeof d=="function"&&d._elements instanceof c?d._elements:null},clear:function(){Tb(a).forEach(u)}}}});var mu=Q((pA,pu)=>{var Rb=Fo(),du=new Float32Array(1),Ib=new Uint32Array(du.buffer),Pb=5123;pu.exports=function(t){for(var r=Rb.allocType(Pb,t.length),n=0;n<t.length;++n)if(isNaN(t[n]))r[n]=65535;else if(t[n]===1/0)r[n]=31744;else if(t[n]===-1/0)r[n]=64512;else{du[0]=t[n];var o=Ib[0],a=o>>>31<<15,i=(o<<1>>>24)-127,s=o>>13&1023;if(i<-24)r[n]=a;else if(i<-14){var c=-14-i;r[n]=a+(s+1024>>c)}else i>15?r[n]=a+31744:r[n]=a+(i+15<<10)+s}return r}});var ac=Q((mA,vu)=>{var Nb=Br();vu.exports=function(t){return Array.isArray(t)||Nb(t)}});var xu=Q((vA,gu)=>{gu.exports=function(e){return!(e&e-1)&&!!e}});var ed=Q((gA,Ju)=>{var Oe=or(),Qn=Qr(),yu=vn(),Ob=Br(),Tu=qo(),ds=Fo(),Su=mu(),ku=ac(),bu=Z0(),wu=xu(),Gb=Ji(),Db=Ji(),Fb=34467,jr=3553,ic=34067,as=34069,Zn=6408,fc=6406,ls=6407,Wa=6409,fs=6410,yc=32854,hs=32855,bc=36194,Lu=32819,zu=32820,Cu=33635,Ru=34042,us=6402,Xa=34041,hc=35904,uc=35906,jo=36193,dc=33776,pc=33777,mc=33778,vc=33779,Iu=35986,Pu=35987,Nu=34798,Ou=35840,Gu=35841,Du=35842,Fu=35843,qu=36196,Bo=5121,wc=5123,ps=5125,Ya=5126,qb=10242,$b=10243,Hb=10497,sc=33071,Ub=33648,Bb=10240,jb=10241,cc=9728,Vb=9729,gc=9984,$u=9985,Hu=9986,xc=9987,Wb=33170,is=4352,Xb=4353,Yb=4354,Kb=34046,Qb=3317,Zb=37440,Jb=37441,e3=37443,_u=37444,Va=33984,t3=[gc,Hu,$u,xc],ss=[0,Wa,fs,ls,Zn],br={};br[Wa]=br[fc]=br[us]=1;br[Xa]=br[fs]=2;br[ls]=br[hc]=3;br[Zn]=br[uc]=4;var Ka={};Ka[yc]=Lu;Ka[bc]=Cu;Ka[hs]=zu;Ka[us]=ps;Ka[Xa]=Ru;function Vo(e){return"[object "+e+"]"}var Uu=Vo("HTMLCanvasElement"),Bu=Vo("OffscreenCanvas"),ju=Vo("CanvasRenderingContext2D"),Vu=Vo("ImageBitmap"),Wu=Vo("HTMLImageElement"),Xu=Vo("HTMLVideoElement"),r3=Object.keys(Gb).concat([Uu,Bu,ju,Vu,Wu,Xu]),Wo=[];Wo[Bo]=1;Wo[Ya]=4;Wo[jo]=2;Wo[wc]=2;Wo[ps]=4;var $t=[];$t[yc]=2;$t[hs]=2;$t[bc]=2;$t[Xa]=4;$t[dc]=.5;$t[pc]=.5;$t[mc]=1;$t[vc]=1;$t[Iu]=.5;$t[Pu]=1;$t[Nu]=1;$t[Ou]=.5;$t[Gu]=.25;$t[Du]=.5;$t[Fu]=.25;$t[qu]=.5;function Yu(e){return Array.isArray(e)&&(e.length===0||typeof e[0]=="number")}function Ku(e){if(!Array.isArray(e))return!1;var t=e.length;return!(t===0||!ku(e[0]))}function Jn(e){return Object.prototype.toString.call(e)}function Eu(e){return Jn(e)===Uu}function Mu(e){return Jn(e)===Bu}function n3(e){return Jn(e)===ju}function o3(e){return Jn(e)===Vu}function a3(e){return Jn(e)===Wu}function i3(e){return Jn(e)===Xu}function lc(e){if(!e)return!1;var t=Jn(e);return r3.indexOf(t)>=0?!0:Yu(e)||Ku(e)||Tu(e)}function Au(e){return Db[Object.prototype.toString.call(e)]|0}function s3(e,t){var r=t.length;switch(e.type){case Bo:case wc:case ps:case Ya:var n=ds.allocType(e.type,r);n.set(t),e.data=n;break;case jo:e.data=Su(t);break;default:Oe.raise("unsupported texture type, must specify a typed array")}}function Qu(e,t){return ds.allocType(e.type===jo?Ya:e.type,t)}function Zu(e,t){e.type===jo?(e.data=Su(t),ds.freeType(t)):e.data=t}function c3(e,t,r,n,o,a){for(var i=e.width,s=e.height,c=e.channels,l=i*s*c,f=Qu(e,l),v=0,h=0;h<s;++h)for(var u=0;u<i;++u)for(var m=0;m<c;++m)f[v++]=t[r*u+n*h+o*m+a];Zu(e,f)}function cs(e,t,r,n,o,a){var i;if(typeof $t[e]!="undefined"?i=$t[e]:i=br[e]*Wo[t],a&&(i*=6),o){for(var s=0,c=r;c>=1;)s+=i*c*c,c/=2;return s}else return i*r*n}Ju.exports=function(t,r,n,o,a,i,s){var c={"don't care":is,"dont care":is,nice:Yb,fast:Xb},l={repeat:Hb,clamp:sc,mirror:Ub},f={nearest:cc,linear:Vb},v=Qn({mipmap:xc,"nearest mipmap nearest":gc,"linear mipmap nearest":$u,"nearest mipmap linear":Hu,"linear mipmap linear":xc},f),h={none:0,browser:_u},u={uint8:Bo,rgba4:Lu,rgb565:Cu,"rgb5 a1":zu},m={alpha:fc,luminance:Wa,"luminance alpha":fs,rgb:ls,rgba:Zn,rgba4:yc,"rgb5 a1":hs,rgb565:bc},d={};r.ext_srgb&&(m.srgb=hc,m.srgba=uc),r.oes_texture_float&&(u.float32=u.float=Ya),r.oes_texture_half_float&&(u.float16=u["half float"]=jo),r.webgl_depth_texture&&(Qn(m,{depth:us,"depth stencil":Xa}),Qn(u,{uint16:wc,uint32:ps,"depth stencil":Ru})),r.webgl_compressed_texture_s3tc&&Qn(d,{"rgb s3tc dxt1":dc,"rgba s3tc dxt1":pc,"rgba s3tc dxt3":mc,"rgba s3tc dxt5":vc}),r.webgl_compressed_texture_atc&&Qn(d,{"rgb atc":Iu,"rgba atc explicit alpha":Pu,"rgba atc interpolated alpha":Nu}),r.webgl_compressed_texture_pvrtc&&Qn(d,{"rgb pvrtc 4bppv1":Ou,"rgb pvrtc 2bppv1":Gu,"rgba pvrtc 4bppv1":Du,"rgba pvrtc 2bppv1":Fu}),r.webgl_compressed_texture_etc1&&(d["rgb etc1"]=qu);var p=Array.prototype.slice.call(t.getParameter(Fb));Object.keys(d).forEach(function(M){var W=d[M];p.indexOf(W)>=0&&(m[M]=W)});var g=Object.keys(m);n.textureFormats=g;var x=[];Object.keys(m).forEach(function(M){var W=m[M];x[W]=M});var w=[];Object.keys(u).forEach(function(M){var W=u[M];w[W]=M});var b=[];Object.keys(f).forEach(function(M){var W=f[M];b[W]=M});var A=[];Object.keys(v).forEach(function(M){var W=v[M];A[W]=M});var T=[];Object.keys(l).forEach(function(M){var W=l[M];T[W]=M});var P=g.reduce(function(M,W){var N=m[W];return N===Wa||N===fc||N===Wa||N===fs||N===us||N===Xa||r.ext_srgb&&(N===hc||N===uc)?M[N]=N:N===hs||W.indexOf("rgba")>=0?M[N]=Zn:M[N]=ls,M},{});function C(){this.internalformat=Zn,this.format=Zn,this.type=Bo,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=_u,this.width=0,this.height=0,this.channels=0}function k(M,W){M.internalformat=W.internalformat,M.format=W.format,M.type=W.type,M.compressed=W.compressed,M.premultiplyAlpha=W.premultiplyAlpha,M.flipY=W.flipY,M.unpackAlignment=W.unpackAlignment,M.colorSpace=W.colorSpace,M.width=W.width,M.height=W.height,M.channels=W.channels}function U(M,W){if(!(typeof W!="object"||!W)){if("premultiplyAlpha"in W&&(Oe.type(W.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),M.premultiplyAlpha=W.premultiplyAlpha),"flipY"in W&&(Oe.type(W.flipY,"boolean","invalid texture flip"),M.flipY=W.flipY),"alignment"in W&&(Oe.oneOf(W.alignment,[1,2,4,8],"invalid texture unpack alignment"),M.unpackAlignment=W.alignment),"colorSpace"in W&&(Oe.parameter(W.colorSpace,h,"invalid colorSpace"),M.colorSpace=h[W.colorSpace]),"type"in W){var N=W.type;Oe(r.oes_texture_float||!(N==="float"||N==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),Oe(r.oes_texture_half_float||!(N==="half float"||N==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),Oe(r.webgl_depth_texture||!(N==="uint16"||N==="uint32"||N==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),Oe.parameter(N,u,"invalid texture type"),M.type=u[N]}var ie=M.width,Se=M.height,E=M.channels,y=!1;"shape"in W?(Oe(Array.isArray(W.shape)&&W.shape.length>=2,"shape must be an array"),ie=W.shape[0],Se=W.shape[1],W.shape.length===3&&(E=W.shape[2],Oe(E>0&&E<=4,"invalid number of channels"),y=!0),Oe(ie>=0&&ie<=n.maxTextureSize,"invalid width"),Oe(Se>=0&&Se<=n.maxTextureSize,"invalid height")):("radius"in W&&(ie=Se=W.radius,Oe(ie>=0&&ie<=n.maxTextureSize,"invalid radius")),"width"in W&&(ie=W.width,Oe(ie>=0&&ie<=n.maxTextureSize,"invalid width")),"height"in W&&(Se=W.height,Oe(Se>=0&&Se<=n.maxTextureSize,"invalid height")),"channels"in W&&(E=W.channels,Oe(E>0&&E<=4,"invalid number of channels"),y=!0)),M.width=ie|0,M.height=Se|0,M.channels=E|0;var z=!1;if("format"in W){var G=W.format;Oe(r.webgl_depth_texture||!(G==="depth"||G==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),Oe.parameter(G,m,"invalid texture format");var j=M.internalformat=m[G];M.format=P[j],G in u&&("type"in W||(M.type=u[G])),G in d&&(M.compressed=!0),z=!0}!y&&z?M.channels=br[M.format]:y&&!z?M.channels!==ss[M.format]&&(M.format=M.internalformat=ss[M.channels]):z&&y&&Oe(M.channels===br[M.format],"number of channels inconsistent with specified format")}}function R(M){t.pixelStorei(Zb,M.flipY),t.pixelStorei(Jb,M.premultiplyAlpha),t.pixelStorei(e3,M.colorSpace),t.pixelStorei(Qb,M.unpackAlignment)}function D(){C.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function q(M,W){var N=null;if(lc(W)?N=W:W&&(Oe.type(W,"object","invalid pixel data type"),U(M,W),"x"in W&&(M.xOffset=W.x|0),"y"in W&&(M.yOffset=W.y|0),lc(W.data)&&(N=W.data)),Oe(!M.compressed||N instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),W.copy){Oe(!N,"can not specify copy and data field for the same texture");var ie=a.viewportWidth,Se=a.viewportHeight;M.width=M.width||ie-M.xOffset,M.height=M.height||Se-M.yOffset,M.needsCopy=!0,Oe(M.xOffset>=0&&M.xOffset<ie&&M.yOffset>=0&&M.yOffset<Se&&M.width>0&&M.width<=ie&&M.height>0&&M.height<=Se,"copy texture read out of bounds")}else if(!N)M.width=M.width||1,M.height=M.height||1,M.channels=M.channels||4;else if(Ob(N))M.channels=M.channels||4,M.data=N,!("type"in W)&&M.type===Bo&&(M.type=Au(N));else if(Yu(N))M.channels=M.channels||4,s3(M,N),M.alignment=1,M.needsFree=!0;else if(Tu(N)){var E=N.data;!Array.isArray(E)&&M.type===Bo&&(M.type=Au(E));var y=N.shape,z=N.stride,G,j,O,I,F,_;y.length===3?(O=y[2],_=z[2]):(Oe(y.length===2,"invalid ndarray pixel data, must be 2 or 3D"),O=1,_=1),G=y[0],j=y[1],I=z[0],F=z[1],M.alignment=1,M.width=G,M.height=j,M.channels=O,M.format=M.internalformat=ss[O],M.needsFree=!0,c3(M,E,I,F,_,N.offset)}else if(Eu(N)||Mu(N)||n3(N))Eu(N)||Mu(N)?M.element=N:M.element=N.canvas,M.width=M.element.width,M.height=M.element.height,M.channels=4;else if(o3(N))M.element=N,M.width=N.width,M.height=N.height,M.channels=4;else if(a3(N))M.element=N,M.width=N.naturalWidth,M.height=N.naturalHeight,M.channels=4;else if(i3(N))M.element=N,M.width=N.videoWidth,M.height=N.videoHeight,M.channels=4;else if(Ku(N)){var L=M.width||N[0].length,S=M.height||N.length,$=M.channels;ku(N[0][0])?$=$||N[0][0].length:$=$||1;for(var V=bu.shape(N),Z=1,ce=0;ce<V.length;++ce)Z*=V[ce];var le=Qu(M,Z);bu.flatten(N,V,"",le),Zu(M,le),M.alignment=1,M.width=L,M.height=S,M.channels=$,M.format=M.internalformat=ss[$],M.needsFree=!0}M.type===Ya?Oe(n.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):M.type===jo&&Oe(n.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function B(M,W,N){var ie=M.element,Se=M.data,E=M.internalformat,y=M.format,z=M.type,G=M.width,j=M.height;R(M),ie?t.texImage2D(W,N,y,y,z,ie):M.compressed?t.compressedTexImage2D(W,N,E,G,j,0,Se):M.needsCopy?(o(),t.copyTexImage2D(W,N,y,M.xOffset,M.yOffset,G,j,0)):t.texImage2D(W,N,y,G,j,0,y,z,Se||null)}function K(M,W,N,ie,Se){var E=M.element,y=M.data,z=M.internalformat,G=M.format,j=M.type,O=M.width,I=M.height;R(M),E?t.texSubImage2D(W,Se,N,ie,G,j,E):M.compressed?t.compressedTexSubImage2D(W,Se,N,ie,z,O,I,y):M.needsCopy?(o(),t.copyTexSubImage2D(W,Se,N,ie,M.xOffset,M.yOffset,O,I)):t.texSubImage2D(W,Se,N,ie,O,I,G,j,y)}var te=[];function re(){return te.pop()||new D}function J(M){M.needsFree&&ds.freeType(M.data),D.call(M),te.push(M)}function me(){C.call(this),this.genMipmaps=!1,this.mipmapHint=is,this.mipmask=0,this.images=Array(16)}function xe(M,W,N){var ie=M.images[0]=re();M.mipmask=1,ie.width=M.width=W,ie.height=M.height=N,ie.channels=M.channels=4}function Ce(M,W){var N=null;if(lc(W))N=M.images[0]=re(),k(N,M),q(N,W),M.mipmask=1;else if(U(M,W),Array.isArray(W.mipmap))for(var ie=W.mipmap,Se=0;Se<ie.length;++Se)N=M.images[Se]=re(),k(N,M),N.width>>=Se,N.height>>=Se,q(N,ie[Se]),M.mipmask|=1<<Se;else N=M.images[0]=re(),k(N,M),q(N,W),M.mipmask=1;k(M,M.images[0]),M.compressed&&(M.internalformat===dc||M.internalformat===pc||M.internalformat===mc||M.internalformat===vc)&&Oe(M.width%4===0&&M.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function He(M,W){for(var N=M.images,ie=0;ie<N.length;++ie){if(!N[ie])return;B(N[ie],W,ie)}}var Ze=[];function Ne(){var M=Ze.pop()||new me;C.call(M),M.mipmask=0;for(var W=0;W<16;++W)M.images[W]=null;return M}function Je(M){for(var W=M.images,N=0;N<W.length;++N)W[N]&&J(W[N]),W[N]=null;Ze.push(M)}function Xe(){this.minFilter=cc,this.magFilter=cc,this.wrapS=sc,this.wrapT=sc,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=is}function ct(M,W){if("min"in W){var N=W.min;Oe.parameter(N,v),M.minFilter=v[N],t3.indexOf(M.minFilter)>=0&&!("faces"in W)&&(M.genMipmaps=!0)}if("mag"in W){var ie=W.mag;Oe.parameter(ie,f),M.magFilter=f[ie]}var Se=M.wrapS,E=M.wrapT;if("wrap"in W){var y=W.wrap;typeof y=="string"?(Oe.parameter(y,l),Se=E=l[y]):Array.isArray(y)&&(Oe.parameter(y[0],l),Oe.parameter(y[1],l),Se=l[y[0]],E=l[y[1]])}else{if("wrapS"in W){var z=W.wrapS;Oe.parameter(z,l),Se=l[z]}if("wrapT"in W){var G=W.wrapT;Oe.parameter(G,l),E=l[G]}}if(M.wrapS=Se,M.wrapT=E,"anisotropic"in W){var j=W.anisotropic;Oe(typeof j=="number"&&j>=1&&j<=n.maxAnisotropic,"aniso samples must be between 1 and "),M.anisotropic=W.anisotropic}if("mipmap"in W){var O=!1;switch(typeof W.mipmap){case"string":Oe.parameter(W.mipmap,c,"invalid mipmap hint"),M.mipmapHint=c[W.mipmap],M.genMipmaps=!0,O=!0;break;case"boolean":O=M.genMipmaps=W.mipmap;break;case"object":Oe(Array.isArray(W.mipmap),"invalid mipmap type"),M.genMipmaps=!1,O=!0;break;default:Oe.raise("invalid mipmap type")}O&&!("min"in W)&&(M.minFilter=gc)}}function ye(M,W){t.texParameteri(W,jb,M.minFilter),t.texParameteri(W,Bb,M.magFilter),t.texParameteri(W,qb,M.wrapS),t.texParameteri(W,$b,M.wrapT),r.ext_texture_filter_anisotropic&&t.texParameteri(W,Kb,M.anisotropic),M.genMipmaps&&(t.hint(Wb,M.mipmapHint),t.generateMipmap(W))}var ve=0,ze={},De=n.maxTextureUnits,ae=Array(De).map(function(){return null});function ge(M){C.call(this),this.mipmask=0,this.internalformat=Zn,this.id=ve++,this.refCount=1,this.target=M,this.texture=t.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Xe,s.profile&&(this.stats={size:0})}function qe(M){t.activeTexture(Va),t.bindTexture(M.target,M.texture)}function Pe(){var M=ae[0];M?t.bindTexture(M.target,M.texture):t.bindTexture(jr,null)}function be(M){var W=M.texture;Oe(W,"must not double destroy texture");var N=M.unit,ie=M.target;N>=0&&(t.activeTexture(Va+N),t.bindTexture(ie,null),ae[N]=null),t.deleteTexture(W),M.texture=null,M.params=null,M.pixels=null,M.refCount=0,delete ze[M.id],i.textureCount--}Qn(ge.prototype,{bind:function(){var M=this;M.bindCount+=1;var W=M.unit;if(W<0){for(var N=0;N<De;++N){var ie=ae[N];if(ie){if(ie.bindCount>0)continue;ie.unit=-1}ae[N]=M,W=N;break}W>=De&&Oe.raise("insufficient number of texture units"),s.profile&&i.maxTextureUnits<W+1&&(i.maxTextureUnits=W+1),M.unit=W,t.activeTexture(Va+W),t.bindTexture(M.target,M.texture)}return W},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&be(this)}});function ke(M,W){var N=new ge(jr);ze[N.id]=N,i.textureCount++;function ie(y,z){var G=N.texInfo;Xe.call(G);var j=Ne();return typeof y=="number"?typeof z=="number"?xe(j,y|0,z|0):xe(j,y|0,y|0):y?(Oe.type(y,"object","invalid arguments to regl.texture"),ct(G,y),Ce(j,y)):xe(j,1,1),G.genMipmaps&&(j.mipmask=(j.width<<1)-1),N.mipmask=j.mipmask,k(N,j),Oe.texture2D(G,j,n),N.internalformat=j.internalformat,ie.width=j.width,ie.height=j.height,qe(N),He(j,jr),ye(G,jr),Pe(),Je(j),s.profile&&(N.stats.size=cs(N.internalformat,N.type,j.width,j.height,G.genMipmaps,!1)),ie.format=x[N.internalformat],ie.type=w[N.type],ie.mag=b[G.magFilter],ie.min=A[G.minFilter],ie.wrapS=T[G.wrapS],ie.wrapT=T[G.wrapT],ie}function Se(y,z,G,j){Oe(!!y,"must specify image data");var O=z|0,I=G|0,F=j|0,_=re();return k(_,N),_.width=0,_.height=0,q(_,y),_.width=_.width||(N.width>>F)-O,_.height=_.height||(N.height>>F)-I,Oe(N.type===_.type&&N.format===_.format&&N.internalformat===_.internalformat,"incompatible format for texture.subimage"),Oe(O>=0&&I>=0&&O+_.width<=N.width&&I+_.height<=N.height,"texture.subimage write out of bounds"),Oe(N.mipmask&1<<F,"missing mipmap data"),Oe(_.data||_.element||_.needsCopy,"missing image data"),qe(N),K(_,jr,O,I,F),Pe(),J(_),ie}function E(y,z){var G=y|0,j=z|0||G;if(G===N.width&&j===N.height)return ie;ie.width=N.width=G,ie.height=N.height=j,qe(N);for(var O=0;N.mipmask>>O;++O){var I=G>>O,F=j>>O;if(!I||!F)break;t.texImage2D(jr,O,N.format,I,F,0,N.format,N.type,null)}return Pe(),s.profile&&(N.stats.size=cs(N.internalformat,N.type,G,j,!1,!1)),ie}return ie(M,W),ie.subimage=Se,ie.resize=E,ie._reglType="texture2d",ie._texture=N,s.profile&&(ie.stats=N.stats),ie.destroy=function(){N.decRef()},ie}function Ae(M,W,N,ie,Se,E){var y=new ge(ic);ze[y.id]=y,i.cubeCount++;var z=new Array(6);function G(I,F,_,L,S,$){var V,Z=y.texInfo;for(Xe.call(Z),V=0;V<6;++V)z[V]=Ne();if(typeof I=="number"||!I){var ce=I|0||1;for(V=0;V<6;++V)xe(z[V],ce,ce)}else if(typeof I=="object")if(F)Ce(z[0],I),Ce(z[1],F),Ce(z[2],_),Ce(z[3],L),Ce(z[4],S),Ce(z[5],$);else if(ct(Z,I),U(y,I),"faces"in I){var le=I.faces;for(Oe(Array.isArray(le)&&le.length===6,"cube faces must be a length 6 array"),V=0;V<6;++V)Oe(typeof le[V]=="object"&&!!le[V],"invalid input for cube map face"),k(z[V],y),Ce(z[V],le[V])}else for(V=0;V<6;++V)Ce(z[V],I);else Oe.raise("invalid arguments to cube map");for(k(y,z[0]),Oe.optional(function(){n.npotTextureCube||Oe(wu(y.width)&&wu(y.height),"your browser does not support non power or two texture dimensions")}),Z.genMipmaps?y.mipmask=(z[0].width<<1)-1:y.mipmask=z[0].mipmask,Oe.textureCube(y,Z,z,n),y.internalformat=z[0].internalformat,G.width=z[0].width,G.height=z[0].height,qe(y),V=0;V<6;++V)He(z[V],as+V);for(ye(Z,ic),Pe(),s.profile&&(y.stats.size=cs(y.internalformat,y.type,G.width,G.height,Z.genMipmaps,!0)),G.format=x[y.internalformat],G.type=w[y.type],G.mag=b[Z.magFilter],G.min=A[Z.minFilter],G.wrapS=T[Z.wrapS],G.wrapT=T[Z.wrapT],V=0;V<6;++V)Je(z[V]);return G}function j(I,F,_,L,S){Oe(!!F,"must specify image data"),Oe(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var $=_|0,V=L|0,Z=S|0,ce=re();return k(ce,y),ce.width=0,ce.height=0,q(ce,F),ce.width=ce.width||(y.width>>Z)-$,ce.height=ce.height||(y.height>>Z)-V,Oe(y.type===ce.type&&y.format===ce.format&&y.internalformat===ce.internalformat,"incompatible format for texture.subimage"),Oe($>=0&&V>=0&&$+ce.width<=y.width&&V+ce.height<=y.height,"texture.subimage write out of bounds"),Oe(y.mipmask&1<<Z,"missing mipmap data"),Oe(ce.data||ce.element||ce.needsCopy,"missing image data"),qe(y),K(ce,as+I,$,V,Z),Pe(),J(ce),G}function O(I){var F=I|0;if(F!==y.width){G.width=y.width=F,G.height=y.height=F,qe(y);for(var _=0;_<6;++_)for(var L=0;y.mipmask>>L;++L)t.texImage2D(as+_,L,y.format,F>>L,F>>L,0,y.format,y.type,null);return Pe(),s.profile&&(y.stats.size=cs(y.internalformat,y.type,G.width,G.height,!1,!0)),G}}return G(M,W,N,ie,Se,E),G.subimage=j,G.resize=O,G._reglType="textureCube",G._texture=y,s.profile&&(G.stats=y.stats),G.destroy=function(){y.decRef()},G}function Fe(){for(var M=0;M<De;++M)t.activeTexture(Va+M),t.bindTexture(jr,null),ae[M]=null;yu(ze).forEach(be),i.cubeCount=0,i.textureCount=0}s.profile&&(i.getTotalTextureSize=function(){var M=0;return Object.keys(ze).forEach(function(W){M+=ze[W].stats.size}),M});function je(){for(var M=0;M<De;++M){var W=ae[M];W&&(W.bindCount=0,W.unit=-1,ae[M]=null)}yu(ze).forEach(function(N){N.texture=t.createTexture(),t.bindTexture(N.target,N.texture);for(var ie=0;ie<32;++ie)if((N.mipmask&1<<ie)!==0)if(N.target===jr)t.texImage2D(jr,ie,N.internalformat,N.width>>ie,N.height>>ie,0,N.internalformat,N.type,null);else for(var Se=0;Se<6;++Se)t.texImage2D(as+Se,ie,N.internalformat,N.width>>ie,N.height>>ie,0,N.internalformat,N.type,null);ye(N.texInfo,N.target)})}function Re(){for(var M=0;M<De;++M){var W=ae[M];W&&(W.bindCount=0,W.unit=-1,ae[M]=null),t.activeTexture(Va+M),t.bindTexture(jr,null),t.bindTexture(ic,null)}}return{create2D:ke,createCube:Ae,clear:Fe,getTexture:function(M){return null},restore:je,refresh:Re}}});var dd=Q((xA,ud)=>{var xn=or(),td=vn(),yn=36161,ms=32854,nd=32855,od=36194,ad=33189,id=36168,sd=34041,cd=35907,ld=34836,fd=34842,hd=34843,Or=[];Or[ms]=2;Or[nd]=2;Or[od]=2;Or[ad]=2;Or[id]=1;Or[sd]=4;Or[cd]=4;Or[ld]=16;Or[fd]=8;Or[hd]=6;function rd(e,t,r){return Or[e]*t*r}ud.exports=function(e,t,r,n,o){var a={rgba4:ms,rgb565:od,"rgb5 a1":nd,depth:ad,stencil:id,"depth stencil":sd};t.ext_srgb&&(a.srgba=cd),t.ext_color_buffer_half_float&&(a.rgba16f=fd,a.rgb16f=hd),t.webgl_color_buffer_float&&(a.rgba32f=ld);var i=[];Object.keys(a).forEach(function(u){var m=a[u];i[m]=u});var s=0,c={};function l(u){this.id=s++,this.refCount=1,this.renderbuffer=u,this.format=ms,this.width=0,this.height=0,o.profile&&(this.stats={size:0})}l.prototype.decRef=function(){--this.refCount<=0&&f(this)};function f(u){var m=u.renderbuffer;xn(m,"must not double destroy renderbuffer"),e.bindRenderbuffer(yn,null),e.deleteRenderbuffer(m),u.renderbuffer=null,u.refCount=0,delete c[u.id],n.renderbufferCount--}function v(u,m){var d=new l(e.createRenderbuffer());c[d.id]=d,n.renderbufferCount++;function p(x,w){var b=0,A=0,T=ms;if(typeof x=="object"&&x){var P=x;if("shape"in P){var C=P.shape;xn(Array.isArray(C)&&C.length>=2,"invalid renderbuffer shape"),b=C[0]|0,A=C[1]|0}else"radius"in P&&(b=A=P.radius|0),"width"in P&&(b=P.width|0),"height"in P&&(A=P.height|0);"format"in P&&(xn.parameter(P.format,a,"invalid renderbuffer format"),T=a[P.format])}else typeof x=="number"?(b=x|0,typeof w=="number"?A=w|0:A=b):x?xn.raise("invalid arguments to renderbuffer constructor"):b=A=1;if(xn(b>0&&A>0&&b<=r.maxRenderbufferSize&&A<=r.maxRenderbufferSize,"invalid renderbuffer size"),!(b===d.width&&A===d.height&&T===d.format))return p.width=d.width=b,p.height=d.height=A,d.format=T,e.bindRenderbuffer(yn,d.renderbuffer),e.renderbufferStorage(yn,T,b,A),xn(e.getError()===0,"invalid render buffer format"),o.profile&&(d.stats.size=rd(d.format,d.width,d.height)),p.format=i[d.format],p}function g(x,w){var b=x|0,A=w|0||b;return b===d.width&&A===d.height||(xn(b>0&&A>0&&b<=r.maxRenderbufferSize&&A<=r.maxRenderbufferSize,"invalid renderbuffer size"),p.width=d.width=b,p.height=d.height=A,e.bindRenderbuffer(yn,d.renderbuffer),e.renderbufferStorage(yn,d.format,b,A),xn(e.getError()===0,"invalid render buffer format"),o.profile&&(d.stats.size=rd(d.format,d.width,d.height))),p}return p(u,m),p.resize=g,p._reglType="renderbuffer",p._renderbuffer=d,o.profile&&(p.stats=d.stats),p.destroy=function(){d.decRef()},p}o.profile&&(n.getTotalRenderbufferSize=function(){var u=0;return Object.keys(c).forEach(function(m){u+=c[m].stats.size}),u});function h(){td(c).forEach(function(u){u.renderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(yn,u.renderbuffer),e.renderbufferStorage(yn,u.format,u.width,u.height)}),e.bindRenderbuffer(yn,null)}return{create:v,clear:function(){td(c).forEach(f)},restore:h}}});var Md=Q((yA,Ed)=>{var Ve=or(),pd=vn(),vs=Qr(),en=36160,_c=36161,eo=3553,gs=34069,md=36064,vd=36096,gd=36128,xd=33306,bd=36053,l3=36054,f3=36055,h3=36057,u3=36061,d3=36193,p3=5121,m3=5126,wd=6407,_d=6408,v3=6402,g3=[wd,_d],Ec=[];Ec[_d]=4;Ec[wd]=3;var xs=[];xs[p3]=1;xs[m3]=4;xs[d3]=2;var x3=32854,y3=32855,b3=36194,w3=33189,_3=36168,yd=34041,E3=35907,M3=34836,A3=34842,T3=34843,S3=[x3,y3,b3,E3,A3,T3,M3],Xo={};Xo[bd]="complete";Xo[l3]="incomplete attachment";Xo[h3]="incomplete dimensions";Xo[f3]="incomplete, missing attachment";Xo[u3]="unsupported";Ed.exports=function(t,r,n,o,a,i){var s={cur:null,next:null,dirty:!1,setFBO:null},c=["rgba"],l=["rgba4","rgb565","rgb5 a1"];r.ext_srgb&&l.push("srgba"),r.ext_color_buffer_half_float&&l.push("rgba16f","rgb16f"),r.webgl_color_buffer_float&&l.push("rgba32f");var f=["uint8"];r.oes_texture_half_float&&f.push("half float","float16"),r.oes_texture_float&&f.push("float","float32");function v(D,q,B){this.target=D,this.texture=q,this.renderbuffer=B;var K=0,te=0;q?(K=q.width,te=q.height):B&&(K=B.width,te=B.height),this.width=K,this.height=te}function h(D){D&&(D.texture&&D.texture._texture.decRef(),D.renderbuffer&&D.renderbuffer._renderbuffer.decRef())}function u(D,q,B){if(D)if(D.texture){var K=D.texture._texture,te=Math.max(1,K.width),re=Math.max(1,K.height);Ve(te===q&&re===B,"inconsistent width/height for supplied texture"),K.refCount+=1}else{var J=D.renderbuffer._renderbuffer;Ve(J.width===q&&J.height===B,"inconsistent width/height for renderbuffer"),J.refCount+=1}}function m(D,q){q&&(q.texture?t.framebufferTexture2D(en,D,q.target,q.texture._texture.texture,0):t.framebufferRenderbuffer(en,D,_c,q.renderbuffer._renderbuffer.renderbuffer))}function d(D){var q=eo,B=null,K=null,te=D;typeof D=="object"&&(te=D.data,"target"in D&&(q=D.target|0)),Ve.type(te,"function","invalid attachment data");var re=te._reglType;return re==="texture2d"?(B=te,Ve(q===eo)):re==="textureCube"?(B=te,Ve(q>=gs&&q<gs+6,"invalid cube map target")):re==="renderbuffer"?(K=te,q=_c):Ve.raise("invalid regl object for attachment"),new v(q,B,K)}function p(D,q,B,K,te){if(B){var re=o.create2D({width:D,height:q,format:K,type:te});return re._texture.refCount=0,new v(eo,re,null)}else{var J=a.create({width:D,height:q,format:K});return J._renderbuffer.refCount=0,new v(_c,null,J)}}function g(D){return D&&(D.texture||D.renderbuffer)}function x(D,q,B){D&&(D.texture?D.texture.resize(q,B):D.renderbuffer&&D.renderbuffer.resize(q,B),D.width=q,D.height=B)}var w=0,b={};function A(){this.id=w++,b[this.id]=this,this.framebuffer=t.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function T(D){D.colorAttachments.forEach(h),h(D.depthAttachment),h(D.stencilAttachment),h(D.depthStencilAttachment)}function P(D){var q=D.framebuffer;Ve(q,"must not double destroy framebuffer"),t.deleteFramebuffer(q),D.framebuffer=null,i.framebufferCount--,delete b[D.id]}function C(D){var q;t.bindFramebuffer(en,D.framebuffer);var B=D.colorAttachments;for(q=0;q<B.length;++q)m(md+q,B[q]);for(q=B.length;q<n.maxColorAttachments;++q)t.framebufferTexture2D(en,md+q,eo,null,0);t.framebufferTexture2D(en,xd,eo,null,0),t.framebufferTexture2D(en,vd,eo,null,0),t.framebufferTexture2D(en,gd,eo,null,0),m(vd,D.depthAttachment),m(gd,D.stencilAttachment),m(xd,D.depthStencilAttachment);var K=t.checkFramebufferStatus(en);!t.isContextLost()&&K!==bd&&Ve.raise("framebuffer configuration not supported, status = "+Xo[K]),t.bindFramebuffer(en,s.next?s.next.framebuffer:null),s.cur=s.next,t.getError()}function k(D,q){var B=new A;i.framebufferCount++;function K(re,J){var me;Ve(s.next!==B,"can not update framebuffer which is currently in use");var xe=0,Ce=0,He=!0,Ze=!0,Ne=null,Je=!0,Xe="rgba",ct="uint8",ye=1,ve=null,ze=null,De=null,ae=!1;if(typeof re=="number")xe=re|0,Ce=J|0||xe;else if(!re)xe=Ce=1;else{Ve.type(re,"object","invalid arguments for framebuffer");var ge=re;if("shape"in ge){var qe=ge.shape;Ve(Array.isArray(qe)&&qe.length>=2,"invalid shape for framebuffer"),xe=qe[0],Ce=qe[1]}else"radius"in ge&&(xe=Ce=ge.radius),"width"in ge&&(xe=ge.width),"height"in ge&&(Ce=ge.height);("color"in ge||"colors"in ge)&&(Ne=ge.color||ge.colors,Array.isArray(Ne)&&Ve(Ne.length===1||r.webgl_draw_buffers,"multiple render targets not supported")),Ne||("colorCount"in ge&&(ye=ge.colorCount|0,Ve(ye>0,"invalid color buffer count")),"colorTexture"in ge&&(Je=!!ge.colorTexture,Xe="rgba4"),"colorType"in ge&&(ct=ge.colorType,Je?(Ve(r.oes_texture_float||!(ct==="float"||ct==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),Ve(r.oes_texture_half_float||!(ct==="half float"||ct==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):ct==="half float"||ct==="float16"?(Ve(r.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Xe="rgba16f"):(ct==="float"||ct==="float32")&&(Ve(r.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Xe="rgba32f"),Ve.oneOf(ct,f,"invalid color type")),"colorFormat"in ge&&(Xe=ge.colorFormat,c.indexOf(Xe)>=0?Je=!0:l.indexOf(Xe)>=0?Je=!1:Ve.optional(function(){Je?Ve.oneOf(ge.colorFormat,c,"invalid color format for texture"):Ve.oneOf(ge.colorFormat,l,"invalid color format for renderbuffer")}))),("depthTexture"in ge||"depthStencilTexture"in ge)&&(ae=!!(ge.depthTexture||ge.depthStencilTexture),Ve(!ae||r.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in ge&&(typeof ge.depth=="boolean"?He=ge.depth:(ve=ge.depth,Ze=!1)),"stencil"in ge&&(typeof ge.stencil=="boolean"?Ze=ge.stencil:(ze=ge.stencil,He=!1)),"depthStencil"in ge&&(typeof ge.depthStencil=="boolean"?He=Ze=ge.depthStencil:(De=ge.depthStencil,He=!1,Ze=!1))}var Pe=null,be=null,ke=null,Ae=null;if(Array.isArray(Ne))Pe=Ne.map(d);else if(Ne)Pe=[d(Ne)];else for(Pe=new Array(ye),me=0;me<ye;++me)Pe[me]=p(xe,Ce,Je,Xe,ct);Ve(r.webgl_draw_buffers||Pe.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),Ve(Pe.length<=n.maxColorAttachments,"too many color attachments, not supported"),xe=xe||Pe[0].width,Ce=Ce||Pe[0].height,ve?be=d(ve):He&&!Ze&&(be=p(xe,Ce,ae,"depth","uint32")),ze?ke=d(ze):Ze&&!He&&(ke=p(xe,Ce,!1,"stencil","uint8")),De?Ae=d(De):!ve&&!ze&&Ze&&He&&(Ae=p(xe,Ce,ae,"depth stencil","depth stencil")),Ve(!!ve+!!ze+!!De<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var Fe=null;for(me=0;me<Pe.length;++me)if(u(Pe[me],xe,Ce),Ve(!Pe[me]||Pe[me].texture&&g3.indexOf(Pe[me].texture._texture.format)>=0||Pe[me].renderbuffer&&S3.indexOf(Pe[me].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+me+" is invalid"),Pe[me]&&Pe[me].texture){var je=Ec[Pe[me].texture._texture.format]*xs[Pe[me].texture._texture.type];Fe===null?Fe=je:Ve(Fe===je,"all color attachments much have the same number of bits per pixel.")}return u(be,xe,Ce),Ve(!be||be.texture&&be.texture._texture.format===v3||be.renderbuffer&&be.renderbuffer._renderbuffer.format===w3,"invalid depth attachment for framebuffer object"),u(ke,xe,Ce),Ve(!ke||ke.renderbuffer&&ke.renderbuffer._renderbuffer.format===_3,"invalid stencil attachment for framebuffer object"),u(Ae,xe,Ce),Ve(!Ae||Ae.texture&&Ae.texture._texture.format===yd||Ae.renderbuffer&&Ae.renderbuffer._renderbuffer.format===yd,"invalid depth-stencil attachment for framebuffer object"),T(B),B.width=xe,B.height=Ce,B.colorAttachments=Pe,B.depthAttachment=be,B.stencilAttachment=ke,B.depthStencilAttachment=Ae,K.color=Pe.map(g),K.depth=g(be),K.stencil=g(ke),K.depthStencil=g(Ae),K.width=B.width,K.height=B.height,C(B),K}function te(re,J){Ve(s.next!==B,"can not resize a framebuffer which is currently in use");var me=Math.max(re|0,1),xe=Math.max(J|0||me,1);if(me===B.width&&xe===B.height)return K;for(var Ce=B.colorAttachments,He=0;He<Ce.length;++He)x(Ce[He],me,xe);return x(B.depthAttachment,me,xe),x(B.stencilAttachment,me,xe),x(B.depthStencilAttachment,me,xe),B.width=K.width=me,B.height=K.height=xe,C(B),K}return K(D,q),vs(K,{resize:te,_reglType:"framebuffer",_framebuffer:B,destroy:function(){P(B),T(B)},use:function(re){s.setFBO({framebuffer:K},re)}})}function U(D){var q=Array(6);function B(te){var re;Ve(q.indexOf(s.next)<0,"can not update framebuffer which is currently in use");var J={color:null},me=0,xe=null,Ce="rgba",He="uint8",Ze=1;if(typeof te=="number")me=te|0;else if(!te)me=1;else{Ve.type(te,"object","invalid arguments for framebuffer");var Ne=te;if("shape"in Ne){var Je=Ne.shape;Ve(Array.isArray(Je)&&Je.length>=2,"invalid shape for framebuffer"),Ve(Je[0]===Je[1],"cube framebuffer must be square"),me=Je[0]}else"radius"in Ne&&(me=Ne.radius|0),"width"in Ne?(me=Ne.width|0,"height"in Ne&&Ve(Ne.height===me,"must be square")):"height"in Ne&&(me=Ne.height|0);("color"in Ne||"colors"in Ne)&&(xe=Ne.color||Ne.colors,Array.isArray(xe)&&Ve(xe.length===1||r.webgl_draw_buffers,"multiple render targets not supported")),xe||("colorCount"in Ne&&(Ze=Ne.colorCount|0,Ve(Ze>0,"invalid color buffer count")),"colorType"in Ne&&(Ve.oneOf(Ne.colorType,f,"invalid color type"),He=Ne.colorType),"colorFormat"in Ne&&(Ce=Ne.colorFormat,Ve.oneOf(Ne.colorFormat,c,"invalid color format for texture"))),"depth"in Ne&&(J.depth=Ne.depth),"stencil"in Ne&&(J.stencil=Ne.stencil),"depthStencil"in Ne&&(J.depthStencil=Ne.depthStencil)}var Xe;if(xe)if(Array.isArray(xe))for(Xe=[],re=0;re<xe.length;++re)Xe[re]=xe[re];else Xe=[xe];else{Xe=Array(Ze);var ct={radius:me,format:Ce,type:He};for(re=0;re<Ze;++re)Xe[re]=o.createCube(ct)}for(J.color=Array(Xe.length),re=0;re<Xe.length;++re){var ye=Xe[re];Ve(typeof ye=="function"&&ye._reglType==="textureCube","invalid cube map"),me=me||ye.width,Ve(ye.width===me&&ye.height===me,"invalid cube map shape"),J.color[re]={target:gs,data:Xe[re]}}for(re=0;re<6;++re){for(var ve=0;ve<Xe.length;++ve)J.color[ve].target=gs+re;re>0&&(J.depth=q[0].depth,J.stencil=q[0].stencil,J.depthStencil=q[0].depthStencil),q[re]?q[re](J):q[re]=k(J)}return vs(B,{width:me,height:me,color:Xe})}function K(te){var re,J=te|0;if(Ve(J>0&&J<=n.maxCubeMapSize,"invalid radius for cube fbo"),J===B.width)return B;var me=B.color;for(re=0;re<me.length;++re)me[re].resize(J);for(re=0;re<6;++re)q[re].resize(J);return B.width=B.height=J,B}return B(D),vs(B,{faces:q,resize:K,_reglType:"framebufferCube",destroy:function(){q.forEach(function(te){te.destroy()})}})}function R(){s.cur=null,s.next=null,s.dirty=!0,pd(b).forEach(function(D){D.framebuffer=t.createFramebuffer(),C(D)})}return vs(s,{getFramebuffer:function(D){if(typeof D=="function"&&D._reglType==="framebuffer"){var q=D._framebuffer;if(q instanceof A)return q}return null},create:k,createCube:U,clear:function(){pd(b).forEach(P)},restore:R})}});var Rd=Q((bA,Cd)=>{var Vt=or(),Ad=vn(),Td=es(),Sd=Br(),k3=qo(),kd=ns(),L3=5126,Ld=34962,ys=34963,zd=["attributes","elements","offset","count","primitive","instances"];function Mc(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=L3,this.offset=0,this.stride=0,this.divisor=0}Cd.exports=function(t,r,n,o,a,i,s){for(var c=n.maxAttributes,l=new Array(c),f=0;f<c;++f)l[f]=new Mc;var v=0,h={},u={Record:Mc,scope:{},state:l,currentVAO:null,targetVAO:null,restore:d()?T:function(){},createVAO:P,getVAO:g,destroyBuffer:m,setVAO:d()?x:w,clear:d()?b:function(){}};function m(C){for(var k=0;k<l.length;++k){var U=l[k];U.buffer===C&&(t.disableVertexAttribArray(k),U.buffer=null)}}function d(){return r.oes_vertex_array_object}function p(){return r.angle_instanced_arrays}function g(C){return typeof C=="function"&&C._vao?C._vao:null}function x(C){if(C!==u.currentVAO){var k=d();C?k.bindVertexArrayOES(C.vao):k.bindVertexArrayOES(null),u.currentVAO=C}}function w(C){if(C!==u.currentVAO){if(C)C.bindAttrs();else{for(var k=p(),U=0;U<l.length;++U){var R=l[U];R.buffer?(t.enableVertexAttribArray(U),R.buffer.bind(),t.vertexAttribPointer(U,R.size,R.type,R.normalized,R.stride,R.offfset),k&&R.divisor&&k.vertexAttribDivisorANGLE(U,R.divisor)):(t.disableVertexAttribArray(U),t.vertexAttrib4f(U,R.x,R.y,R.z,R.w))}s.elements?t.bindBuffer(ys,s.elements.buffer.buffer):t.bindBuffer(ys,null)}u.currentVAO=C}}function b(){Ad(h).forEach(function(C){C.destroy()})}function A(){this.id=++v,this.attributes=[],this.elements=null,this.ownsElements=!1,this.count=0,this.offset=0,this.instances=-1,this.primitive=4;var C=d();C?this.vao=C.createVertexArrayOES():this.vao=null,h[this.id]=this,this.buffers=[]}A.prototype.bindAttrs=function(){for(var C=p(),k=this.attributes,U=0;U<k.length;++U){var R=k[U];R.buffer?(t.enableVertexAttribArray(U),t.bindBuffer(Ld,R.buffer.buffer),t.vertexAttribPointer(U,R.size,R.type,R.normalized,R.stride,R.offset),C&&R.divisor&&C.vertexAttribDivisorANGLE(U,R.divisor)):(t.disableVertexAttribArray(U),t.vertexAttrib4f(U,R.x,R.y,R.z,R.w))}for(var D=k.length;D<c;++D)t.disableVertexAttribArray(D);var q=i.getElements(this.elements);q?t.bindBuffer(ys,q.buffer.buffer):t.bindBuffer(ys,null)},A.prototype.refresh=function(){var C=d();C&&(C.bindVertexArrayOES(this.vao),this.bindAttrs(),u.currentVAO=null,C.bindVertexArrayOES(null))},A.prototype.destroy=function(){if(this.vao){var C=d();this===u.currentVAO&&(u.currentVAO=null,C.bindVertexArrayOES(null)),C.deleteVertexArrayOES(this.vao),this.vao=null}this.ownsElements&&(this.elements.destroy(),this.elements=null,this.ownsElements=!1),h[this.id]&&(delete h[this.id],o.vaoCount-=1)};function T(){var C=d();C&&Ad(h).forEach(function(k){k.refresh()})}function P(C){var k=new A;o.vaoCount+=1;function U(R){var D;if(Array.isArray(R))D=R,k.elements&&k.ownsElements&&k.elements.destroy(),k.elements=null,k.ownsElements=!1,k.offset=0,k.count=0,k.instances=-1,k.primitive=4;else{if(Vt(typeof R=="object","invalid arguments for create vao"),Vt("attributes"in R,"must specify attributes for vao"),R.elements){var q=R.elements;k.ownsElements?typeof q=="function"&&q._reglType==="elements"?(k.elements.destroy(),k.ownsElements=!1):(k.elements(q),k.ownsElements=!1):i.getElements(R.elements)?(k.elements=R.elements,k.ownsElements=!1):(k.elements=i.create(R.elements),k.ownsElements=!0)}else k.elements=null,k.ownsElements=!1;D=R.attributes,k.offset=0,k.count=-1,k.instances=-1,k.primitive=4,k.elements&&(k.count=k.elements._elements.vertCount,k.primitive=k.elements._elements.primType),"offset"in R&&(k.offset=R.offset|0),"count"in R&&(k.count=R.count|0),"instances"in R&&(k.instances=R.instances|0),"primitive"in R&&(Vt(R.primitive in kd,"bad primitive type: "+R.primitive),k.primitive=kd[R.primitive]),Vt.optional(()=>{for(var He=Object.keys(R),Ze=0;Ze<He.length;++Ze)Vt(zd.indexOf(He[Ze])>=0,'invalid option for vao: "'+He[Ze]+'" valid options are '+zd)}),Vt(Array.isArray(D),"attributes must be an array")}Vt(D.length<c,"too many attributes"),Vt(D.length>0,"must specify at least one attribute");var B={},K=k.attributes;K.length=D.length;for(var te=0;te<D.length;++te){var re=D[te],J=K[te]=new Mc,me=re.data||re;if(Array.isArray(me)||Sd(me)||k3(me)){var xe;k.buffers[te]&&(xe=k.buffers[te],Sd(me)&&xe._buffer.byteLength>=me.byteLength?xe.subdata(me):(xe.destroy(),k.buffers[te]=null)),k.buffers[te]||(xe=k.buffers[te]=a.create(re,Ld,!1,!0)),J.buffer=a.getBuffer(xe),J.size=J.buffer.dimension|0,J.normalized=!1,J.type=J.buffer.dtype,J.offset=0,J.stride=0,J.divisor=0,J.state=1,B[te]=1}else a.getBuffer(re)?(J.buffer=a.getBuffer(re),J.size=J.buffer.dimension|0,J.normalized=!1,J.type=J.buffer.dtype,J.offset=0,J.stride=0,J.divisor=0,J.state=1):a.getBuffer(re.buffer)?(J.buffer=a.getBuffer(re.buffer),J.size=(+re.size||J.buffer.dimension)|0,J.normalized=!!re.normalized||!1,"type"in re?(Vt.parameter(re.type,Td,"invalid buffer type"),J.type=Td[re.type]):J.type=J.buffer.dtype,J.offset=(re.offset||0)|0,J.stride=(re.stride||0)|0,J.divisor=(re.divisor||0)|0,J.state=1,Vt(J.size>=1&&J.size<=4,"size must be between 1 and 4"),Vt(J.offset>=0,"invalid offset"),Vt(J.stride>=0&&J.stride<=255,"stride must be between 0 and 255"),Vt(J.divisor>=0,"divisor must be positive"),Vt(!J.divisor||!!r.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in re?(Vt(te>0,"first attribute must not be a constant"),J.x=+re.x||0,J.y=+re.y||0,J.z=+re.z||0,J.w=+re.w||0,J.state=2):Vt(!1,"invalid attribute spec for location "+te)}for(var Ce=0;Ce<k.buffers.length;++Ce)!B[Ce]&&k.buffers[Ce]&&(k.buffers[Ce].destroy(),k.buffers[Ce]=null);return k.refresh(),U}return U.destroy=function(){for(var R=0;R<k.buffers.length;++R)k.buffers[R]&&k.buffers[R].destroy();k.buffers.length=0,k.ownsElements&&(k.elements.destroy(),k.elements=null,k.ownsElements=!1),k.destroy()},U._vao=k,U._reglType="vao",U(C)}return u}});var Od=Q((wA,Nd)=>{var bs=or(),z3=Qr(),Id=vn(),Pd=35632,C3=35633,R3=35718,I3=35721;Nd.exports=function(t,r,n,o){var a={},i={};function s(p,g,x,w){this.name=p,this.id=g,this.location=x,this.info=w}function c(p,g){for(var x=0;x<p.length;++x)if(p[x].id===g.id){p[x].location=g.location;return}p.push(g)}function l(p,g,x){var w=p===Pd?a:i,b=w[g];if(!b){var A=r.str(g);b=t.createShader(p),t.shaderSource(b,A),t.compileShader(b),bs.shaderError(t,b,A,p,x),w[g]=b}return b}var f={},v=[],h=0;function u(p,g){this.id=h++,this.fragId=p,this.vertId=g,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,o.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function m(p,g,x){var w,b,A=l(Pd,p.fragId),T=l(C3,p.vertId),P=p.program=t.createProgram();if(t.attachShader(P,A),t.attachShader(P,T),x)for(w=0;w<x.length;++w){var C=x[w];t.bindAttribLocation(P,C[0],C[1])}t.linkProgram(P),bs.linkError(t,P,r.str(p.fragId),r.str(p.vertId),g);var k=t.getProgramParameter(P,R3);o.profile&&(p.stats.uniformsCount=k);var U=p.uniforms;for(w=0;w<k;++w)if(b=t.getActiveUniform(P,w),b)if(b.size>1)for(var R=0;R<b.size;++R){var D=b.name.replace("[0]","["+R+"]");c(U,new s(D,r.id(D),t.getUniformLocation(P,D),b))}else c(U,new s(b.name,r.id(b.name),t.getUniformLocation(P,b.name),b));var q=t.getProgramParameter(P,I3);o.profile&&(p.stats.attributesCount=q);var B=p.attributes;for(w=0;w<q;++w)b=t.getActiveAttrib(P,w),b&&c(B,new s(b.name,r.id(b.name),t.getAttribLocation(P,b.name),b))}o.profile&&(n.getMaxUniformsCount=function(){var p=0;return v.forEach(function(g){g.stats.uniformsCount>p&&(p=g.stats.uniformsCount)}),p},n.getMaxAttributesCount=function(){var p=0;return v.forEach(function(g){g.stats.attributesCount>p&&(p=g.stats.attributesCount)}),p});function d(){a={},i={};for(var p=0;p<v.length;++p)m(v[p],null,v[p].attributes.map(function(g){return[g.location,g.name]}))}return{clear:function(){var p=t.deleteShader.bind(t);Id(a).forEach(p),a={},Id(i).forEach(p),i={},v.forEach(function(g){t.deleteProgram(g.program)}),v.length=0,f={},n.shaderCount=0},program:function(p,g,x,w){bs.command(p>=0,"missing vertex shader",x),bs.command(g>=0,"missing fragment shader",x);var b=f[g];b||(b=f[g]={});var A=b[p];if(A&&(A.refCount++,!w))return A;var T=new u(g,p);return n.shaderCount++,m(T,x,w),A||(b[p]=T),v.push(T),z3(T,{destroy:function(){if(T.refCount--,T.refCount<=0){t.deleteProgram(T.program);var P=v.indexOf(T);v.splice(P,1),n.shaderCount--}b[T.vertId].refCount<=0&&(t.deleteShader(i[T.vertId]),delete i[T.vertId],delete f[T.fragId][T.vertId]),Object.keys(f[T.fragId]).length||(t.deleteShader(a[T.fragId]),delete a[T.fragId],delete f[T.fragId])}})},restore:d,shader:l,frag:-1,vert:-1}}});var Dd=Q((_A,Gd)=>{var Kt=or(),P3=Br(),N3=6408,Qa=5121,O3=3333,ws=5126;Gd.exports=function(t,r,n,o,a,i,s){function c(v){var h;r.next===null?(Kt(a.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),h=Qa):(Kt(r.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),h=r.next.colorAttachments[0].texture._texture.type,Kt.optional(function(){i.oes_texture_float?(Kt(h===Qa||h===ws,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),h===ws&&Kt(s.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):Kt(h===Qa,"Reading from a framebuffer is only allowed for the type 'uint8'")}));var u=0,m=0,d=o.framebufferWidth,p=o.framebufferHeight,g=null;P3(v)?g=v:v&&(Kt.type(v,"object","invalid arguments to regl.read()"),u=v.x|0,m=v.y|0,Kt(u>=0&&u<o.framebufferWidth,"invalid x offset for regl.read"),Kt(m>=0&&m<o.framebufferHeight,"invalid y offset for regl.read"),d=(v.width||o.framebufferWidth-u)|0,p=(v.height||o.framebufferHeight-m)|0,g=v.data||null),g&&(h===Qa?Kt(g instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):h===ws&&Kt(g instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),Kt(d>0&&d+u<=o.framebufferWidth,"invalid width for read pixels"),Kt(p>0&&p+m<=o.framebufferHeight,"invalid height for read pixels"),n();var x=d*p*4;return g||(h===Qa?g=new Uint8Array(x):h===ws&&(g=g||new Float32Array(x))),Kt.isTypedArray(g,"data buffer for regl.read() must be a typedarray"),Kt(g.byteLength>=x,"data buffer for regl.read() too small"),t.pixelStorei(O3,4),t.readPixels(u,m,d,p,N3,h,g),g}function l(v){var h;return r.setFBO({framebuffer:v.framebuffer},function(){h=c(v)}),h}function f(v){return!v||!("framebuffer"in v)?c(v):l(v)}return f}});var qd=Q((EA,Fd)=>{var _s=Qr();function Ko(e){return Array.prototype.slice.call(e)}function Yo(e){return Ko(e).join("")}Fd.exports=function(){var t=0,r=[],n=[];function o(h){for(var u=0;u<n.length;++u)if(n[u]===h)return r[u];var m="g"+t++;return r.push(m),n.push(h),m}function a(){var h=[];function u(){h.push.apply(h,Ko(arguments))}var m=[];function d(){var p="v"+t++;return m.push(p),arguments.length>0&&(h.push(p,"="),h.push.apply(h,Ko(arguments)),h.push(";")),p}return _s(u,{def:d,toString:function(){return Yo([m.length>0?"var "+m.join(",")+";":"",Yo(h)])}})}function i(){var h=a(),u=a(),m=h.toString,d=u.toString;function p(g,x){u(g,x,"=",h.def(g,x),";")}return _s(function(){h.apply(h,Ko(arguments))},{def:h.def,entry:h,exit:u,save:p,set:function(g,x,w){p(g,x),h(g,x,"=",w,";")},toString:function(){return m()+d()}})}function s(){var h=Yo(arguments),u=i(),m=i(),d=u.toString,p=m.toString;return _s(u,{then:function(){return u.apply(u,Ko(arguments)),this},else:function(){return m.apply(m,Ko(arguments)),this},toString:function(){var g=p();return g&&(g="else{"+g+"}"),Yo(["if(",h,"){",d(),"}",g])}})}var c=a(),l={};function f(h,u){var m=[];function d(){var b="a"+m.length;return m.push(b),b}u=u||0;for(var p=0;p<u;++p)d();var g=i(),x=g.toString,w=l[h]=_s(g,{arg:d,toString:function(){return Yo(["function(",m.join(),"){",x(),"}"])}});return w}function v(){var h=['"use strict";',c,"return {"];Object.keys(l).forEach(function(d){h.push('"',d,'":',l[d].toString(),",")}),h.push("}");var u=Yo(h).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),m=Function.apply(null,r.concat(u));return m.apply(null,n)}return{global:c,link:o,block:a,proc:f,scope:i,cond:s,compile:v}}});var y1=Q((MA,x1)=>{var ne=or(),G3=Qr(),D3=qd(),wr=Y0(),F3=Br(),q3=qo(),Lt=ac(),Za=X0(),Es=ns(),Ac=es(),Qo="xyzw".split(""),$d=5121,Zo=1,Tc=2,Oc=0,Gc=1,Dc=2,Fc=3,Gs=4,p1=5,m1=6,Hd="dither",Ud="blend.enable",Bd="blend.color",qc="blend.equation",$c="blend.func",jd="depth.enable",Vd="depth.func",Wd="depth.range",Xd="depth.mask",Sc="colorMask",Yd="cull.enable",Kd="cull.face",kc="frontFace",Lc="lineWidth",Qd="polygonOffset.enable",Hc="polygonOffset.offset",Zd="sample.alpha",Jd="sample.enable",Uc="sample.coverage",e1="stencil.enable",t1="stencil.mask",Bc="stencil.func",jc="stencil.opFront",li="stencil.opBack",r1="scissor.enable",Os="scissor.box",tn="viewport",Ja="profile",ao="framebuffer",ei="vert",ti="frag",to="elements",ro="primitive",no="count",Ms="offset",As="instances",ri="vao",Wc="Width",Xc="Height",Jo=ao+Wc,ea=ao+Xc,$3=tn+Wc,H3=tn+Xc,v1="drawingBuffer",n1=v1+Wc,o1=v1+Xc,U3=[$c,qc,Bc,jc,li,Uc,tn,Os,Hc],ta=34962,zc=34963,B3=35632,j3=35633,a1=3553,V3=34067,W3=2884,X3=3042,Y3=3024,K3=2960,Q3=2929,Z3=3089,J3=32823,e5=32926,t5=32928,Cc=5126,Ts=35664,Ss=35665,ks=35666,Rc=5124,Ls=35667,zs=35668,Cs=35669,Ic=35670,Rs=35671,Is=35672,Ps=35673,ni=35674,oi=35675,ai=35676,ii=35678,si=35680,Pc=4,ci=1028,oo=1029,g1=2304,Vc=2305,r5=32775,n5=32776,o5=519,bn=7680,i1=0,s1=1,c1=32774,a5=513,l1=36160,i5=36064,Vr={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},f1=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],ra={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},wn={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},h1={frag:B3,vert:j3},Nc={cw:g1,ccw:Vc};function Ns(e){return Array.isArray(e)||F3(e)||q3(e)}function u1(e){return e.sort(function(t,r){return t===tn?-1:r===tn?1:t<r?-1:1})}function It(e,t,r,n){this.thisDep=e,this.contextDep=t,this.propDep=r,this.append=n}function _n(e){return e&&!(e.thisDep||e.contextDep||e.propDep)}function Tt(e){return new It(!1,!1,!1,e)}function ir(e,t){var r=e.type;if(r===Oc){var n=e.data.length;return new It(!0,n>=1,n>=2,t)}else if(r===Gs){var o=e.data;return new It(o.thisDep,o.contextDep,o.propDep,t)}else{if(r===p1)return new It(!1,!1,!1,t);if(r===m1){for(var a=!1,i=!1,s=!1,c=0;c<e.data.length;++c){var l=e.data[c];if(l.type===Gc)s=!0;else if(l.type===Dc)i=!0;else if(l.type===Fc)a=!0;else if(l.type===Oc){a=!0;var f=l.data;f>=1&&(i=!0),f>=2&&(s=!0)}else l.type===Gs&&(a=a||l.data.thisDep,i=i||l.data.contextDep,s=s||l.data.propDep)}return new It(a,i,s,t)}else return new It(r===Fc,r===Dc,r===Gc,t)}}var d1=new It(!1,!1,!1,function(){});x1.exports=function(t,r,n,o,a,i,s,c,l,f,v,h,u,m,d){var p=f.Record,g={add:32774,subtract:32778,"reverse subtract":32779};n.ext_blend_minmax&&(g.min=r5,g.max=n5);var x=n.angle_instanced_arrays,w=n.webgl_draw_buffers,b=n.oes_vertex_array_object,A={dirty:!0,profile:d.profile},T={},P=[],C={},k={};function U(E){return E.replace(".","_")}function R(E,y,z){var G=U(E);P.push(E),T[G]=A[G]=!!z,C[G]=y}function D(E,y,z){var G=U(E);P.push(E),Array.isArray(z)?(A[G]=z.slice(),T[G]=z.slice()):A[G]=T[G]=z,k[G]=y}R(Hd,Y3),R(Ud,X3),D(Bd,"blendColor",[0,0,0,0]),D(qc,"blendEquationSeparate",[c1,c1]),D($c,"blendFuncSeparate",[s1,i1,s1,i1]),R(jd,Q3,!0),D(Vd,"depthFunc",a5),D(Wd,"depthRange",[0,1]),D(Xd,"depthMask",!0),D(Sc,Sc,[!0,!0,!0,!0]),R(Yd,W3),D(Kd,"cullFace",oo),D(kc,kc,Vc),D(Lc,Lc,1),R(Qd,J3),D(Hc,"polygonOffset",[0,0]),R(Zd,e5),R(Jd,t5),D(Uc,"sampleCoverage",[1,!1]),R(e1,K3),D(t1,"stencilMask",-1),D(Bc,"stencilFunc",[o5,0,-1]),D(jc,"stencilOpSeparate",[ci,bn,bn,bn]),D(li,"stencilOpSeparate",[oo,bn,bn,bn]),R(r1,Z3),D(Os,"scissor",[0,0,t.drawingBufferWidth,t.drawingBufferHeight]),D(tn,tn,[0,0,t.drawingBufferWidth,t.drawingBufferHeight]);var q={gl:t,context:u,strings:r,next:T,current:A,draw:h,elements:i,buffer:a,shader:v,attributes:f.state,vao:f,uniforms:l,framebuffer:c,extensions:n,timer:m,isBufferArgs:Ns},B={primTypes:Es,compareFuncs:ra,blendFuncs:Vr,blendEquations:g,stencilOps:wn,glTypes:Ac,orientationType:Nc};ne.optional(function(){q.isArrayLike=Lt}),w&&(B.backBuffer=[oo],B.drawBuffer=wr(o.maxDrawbuffers,function(E){return E===0?[0]:wr(E,function(y){return i5+y})}));var K=0;function te(){var E=D3(),y=E.link,z=E.global;E.id=K++,E.batchId="0";var G=y(q),j=E.shared={props:"a0"};Object.keys(q).forEach(function(L){j[L]=z.def(G,".",L)}),ne.optional(function(){E.CHECK=y(ne),E.commandStr=ne.guessCommand(),E.command=y(E.commandStr),E.assert=function(L,S,$){L("if(!(",S,"))",this.CHECK,".commandRaise(",y($),",",this.command,");")},B.invalidBlendCombinations=f1});var O=E.next={},I=E.current={};Object.keys(k).forEach(function(L){Array.isArray(A[L])&&(O[L]=z.def(j.next,".",L),I[L]=z.def(j.current,".",L))});var F=E.constants={};Object.keys(B).forEach(function(L){F[L]=z.def(JSON.stringify(B[L]))}),E.invoke=function(L,S){switch(S.type){case Oc:var $=["this",j.context,j.props,E.batchId];return L.def(y(S.data),".call(",$.slice(0,Math.max(S.data.length+1,4)),")");case Gc:return L.def(j.props,S.data);case Dc:return L.def(j.context,S.data);case Fc:return L.def("this",S.data);case Gs:return S.data.append(E,L),S.data.ref;case p1:return S.data.toString();case m1:return S.data.map(function(V){return E.invoke(L,V)})}},E.attribCache={};var _={};return E.scopeAttrib=function(L){var S=r.id(L);if(S in _)return _[S];var $=f.scope[S];$||($=f.scope[S]=new p);var V=_[S]=y($);return V},E}function re(E){var y=E.static,z=E.dynamic,G;if(Ja in y){var j=!!y[Ja];G=Tt(function(I,F){return j}),G.enable=j}else if(Ja in z){var O=z[Ja];G=ir(O,function(I,F){return I.invoke(F,O)})}return G}function J(E,y){var z=E.static,G=E.dynamic;if(ao in z){var j=z[ao];return j?(j=c.getFramebuffer(j),ne.command(j,"invalid framebuffer object"),Tt(function(I,F){var _=I.link(j),L=I.shared;F.set(L.framebuffer,".next",_);var S=L.context;return F.set(S,"."+Jo,_+".width"),F.set(S,"."+ea,_+".height"),_})):Tt(function(I,F){var _=I.shared;F.set(_.framebuffer,".next","null");var L=_.context;return F.set(L,"."+Jo,L+"."+n1),F.set(L,"."+ea,L+"."+o1),"null"})}else if(ao in G){var O=G[ao];return ir(O,function(I,F){var _=I.invoke(F,O),L=I.shared,S=L.framebuffer,$=F.def(S,".getFramebuffer(",_,")");ne.optional(function(){I.assert(F,"!"+_+"||"+$,"invalid framebuffer object")}),F.set(S,".next",$);var V=L.context;return F.set(V,"."+Jo,$+"?"+$+".width:"+V+"."+n1),F.set(V,"."+ea,$+"?"+$+".height:"+V+"."+o1),$})}else return null}function me(E,y,z){var G=E.static,j=E.dynamic;function O(_){if(_ in G){var L=G[_];ne.commandType(L,"object","invalid "+_,z.commandStr);var S=!0,$=L.x|0,V=L.y|0,Z,ce;return"width"in L?(Z=L.width|0,ne.command(Z>=0,"invalid "+_,z.commandStr)):S=!1,"height"in L?(ce=L.height|0,ne.command(ce>=0,"invalid "+_,z.commandStr)):S=!1,new It(!S&&y&&y.thisDep,!S&&y&&y.contextDep,!S&&y&&y.propDep,function(se,Ee){var we=se.shared.context,H=Z;"width"in L||(H=Ee.def(we,".",Jo,"-",$));var X=ce;return"height"in L||(X=Ee.def(we,".",ea,"-",V)),[$,V,H,X]})}else if(_ in j){var le=j[_],pe=ir(le,function(se,Ee){var we=se.invoke(Ee,le);ne.optional(function(){se.assert(Ee,we+"&&typeof "+we+'==="object"',"invalid "+_)});var H=se.shared.context,X=Ee.def(we,".x|0"),ee=Ee.def(we,".y|0"),fe=Ee.def('"width" in ',we,"?",we,".width|0:","(",H,".",Jo,"-",X,")"),Ie=Ee.def('"height" in ',we,"?",we,".height|0:","(",H,".",ea,"-",ee,")");return ne.optional(function(){se.assert(Ee,fe+">=0&&"+Ie+">=0","invalid "+_)}),[X,ee,fe,Ie]});return y&&(pe.thisDep=pe.thisDep||y.thisDep,pe.contextDep=pe.contextDep||y.contextDep,pe.propDep=pe.propDep||y.propDep),pe}else return y?new It(y.thisDep,y.contextDep,y.propDep,function(se,Ee){var we=se.shared.context;return[0,0,Ee.def(we,".",Jo),Ee.def(we,".",ea)]}):null}var I=O(tn);if(I){var F=I;I=new It(I.thisDep,I.contextDep,I.propDep,function(_,L){var S=F.append(_,L),$=_.shared.context;return L.set($,"."+$3,S[2]),L.set($,"."+H3,S[3]),S})}return{viewport:I,scissor_box:O(Os)}}function xe(E,y){var z=E.static,G=typeof z[ti]=="string"&&typeof z[ei]=="string";if(G){if(Object.keys(y.dynamic).length>0)return null;var j=y.static,O=Object.keys(j);if(O.length>0&&typeof j[O[0]]=="number"){for(var I=[],F=0;F<O.length;++F)ne(typeof j[O[F]]=="number","must specify all vertex attribute locations when using vaos"),I.push([j[O[F]]|0,O[F]]);return I}}return null}function Ce(E,y,z){var G=E.static,j=E.dynamic;function O(S){if(S in G){var $=r.id(G[S]);ne.optional(function(){v.shader(h1[S],$,ne.guessCommand())});var V=Tt(function(){return $});return V.id=$,V}else if(S in j){var Z=j[S];return ir(Z,function(ce,le){var pe=ce.invoke(le,Z),se=le.def(ce.shared.strings,".id(",pe,")");return ne.optional(function(){le(ce.shared.shader,".shader(",h1[S],",",se,",",ce.command,");")}),se})}return null}var I=O(ti),F=O(ei),_=null,L;return _n(I)&&_n(F)?(_=v.program(F.id,I.id,null,z),L=Tt(function(S,$){return S.link(_)})):L=new It(I&&I.thisDep||F&&F.thisDep,I&&I.contextDep||F&&F.contextDep,I&&I.propDep||F&&F.propDep,function(S,$){var V=S.shared.shader,Z;I?Z=I.append(S,$):Z=$.def(V,".",ti);var ce;F?ce=F.append(S,$):ce=$.def(V,".",ei);var le=V+".program("+ce+","+Z;return ne.optional(function(){le+=","+S.command}),$.def(le+")")}),{frag:I,vert:F,progVar:L,program:_}}function He(E,y){var z=E.static,G=E.dynamic,j={},O=!1;function I(){if(ri in z){var Ee=z[ri];return Ee!==null&&f.getVAO(Ee)===null&&(Ee=f.createVAO(Ee)),O=!0,j.vao=Ee,Tt(function(H){var X=f.getVAO(Ee);return X?H.link(X):"null"})}else if(ri in G){O=!0;var we=G[ri];return ir(we,function(H,X){var ee=H.invoke(X,we);return X.def(H.shared.vao+".getVAO("+ee+")")})}return null}var F=I(),_=!1;function L(){if(to in z){var Ee=z[to];if(j.elements=Ee,Ns(Ee)){var we=j.elements=i.create(Ee,!0);Ee=i.getElements(we),_=!0}else Ee&&(Ee=i.getElements(Ee),_=!0,ne.command(Ee,"invalid elements",y.commandStr));var H=Tt(function(ee,fe){if(Ee){var Ie=ee.link(Ee);return ee.ELEMENTS=Ie,Ie}return ee.ELEMENTS=null,null});return H.value=Ee,H}else if(to in G){_=!0;var X=G[to];return ir(X,function(ee,fe){var Ie=ee.shared,$e=Ie.isBufferArgs,Ct=Ie.elements,lt=ee.invoke(fe,X),yt=fe.def("null"),pt=fe.def($e,"(",lt,")"),ht=ee.cond(pt).then(yt,"=",Ct,".createStream(",lt,");").else(yt,"=",Ct,".getElements(",lt,");");return ne.optional(function(){ee.assert(ht.else,"!"+lt+"||"+yt,"invalid elements")}),fe.entry(ht),fe.exit(ee.cond(pt).then(Ct,".destroyStream(",yt,");")),ee.ELEMENTS=yt,yt})}else if(O)return new It(F.thisDep,F.contextDep,F.propDep,function(ee,fe){return fe.def(ee.shared.vao+".currentVAO?"+ee.shared.elements+".getElements("+ee.shared.vao+".currentVAO.elements):null")});return null}var S=L();function $(){if(ro in z){var Ee=z[ro];return j.primitive=Ee,ne.commandParameter(Ee,Es,"invalid primitve",y.commandStr),Tt(function(H,X){return Es[Ee]})}else if(ro in G){var we=G[ro];return ir(we,function(H,X){var ee=H.constants.primTypes,fe=H.invoke(X,we);return ne.optional(function(){H.assert(X,fe+" in "+ee,"invalid primitive, must be one of "+Object.keys(Es))}),X.def(ee,"[",fe,"]")})}else{if(_)return _n(S)?S.value?Tt(function(H,X){return X.def(H.ELEMENTS,".primType")}):Tt(function(){return Pc}):new It(S.thisDep,S.contextDep,S.propDep,function(H,X){var ee=H.ELEMENTS;return X.def(ee,"?",ee,".primType:",Pc)});if(O)return new It(F.thisDep,F.contextDep,F.propDep,function(H,X){return X.def(H.shared.vao+".currentVAO?"+H.shared.vao+".currentVAO.primitive:"+Pc)})}return null}function V(Ee,we){if(Ee in z){var H=z[Ee]|0;return we?j.offset=H:j.instances=H,ne.command(!we||H>=0,"invalid "+Ee,y.commandStr),Tt(function(ee,fe){return we&&(ee.OFFSET=H),H})}else if(Ee in G){var X=G[Ee];return ir(X,function(ee,fe){var Ie=ee.invoke(fe,X);return we&&(ee.OFFSET=Ie,ne.optional(function(){ee.assert(fe,Ie+">=0","invalid "+Ee)})),Ie})}else if(we){if(_)return Tt(function(ee,fe){return ee.OFFSET=0,0});if(O)return new It(F.thisDep,F.contextDep,F.propDep,function(ee,fe){return fe.def(ee.shared.vao+".currentVAO?"+ee.shared.vao+".currentVAO.offset:0")})}else if(O)return new It(F.thisDep,F.contextDep,F.propDep,function(ee,fe){return fe.def(ee.shared.vao+".currentVAO?"+ee.shared.vao+".currentVAO.instances:-1")});return null}var Z=V(Ms,!0);function ce(){if(no in z){var Ee=z[no]|0;return j.count=Ee,ne.command(typeof Ee=="number"&&Ee>=0,"invalid vertex count",y.commandStr),Tt(function(){return Ee})}else if(no in G){var we=G[no];return ir(we,function(fe,Ie){var $e=fe.invoke(Ie,we);return ne.optional(function(){fe.assert(Ie,"typeof "+$e+'==="number"&&'+$e+">=0&&"+$e+"===("+$e+"|0)","invalid vertex count")}),$e})}else if(_)if(_n(S)){if(S)return Z?new It(Z.thisDep,Z.contextDep,Z.propDep,function(fe,Ie){var $e=Ie.def(fe.ELEMENTS,".vertCount-",fe.OFFSET);return ne.optional(function(){fe.assert(Ie,$e+">=0","invalid vertex offset/element buffer too small")}),$e}):Tt(function(fe,Ie){return Ie.def(fe.ELEMENTS,".vertCount")});var H=Tt(function(){return-1});return ne.optional(function(){H.MISSING=!0}),H}else{var X=new It(S.thisDep||Z.thisDep,S.contextDep||Z.contextDep,S.propDep||Z.propDep,function(fe,Ie){var $e=fe.ELEMENTS;return fe.OFFSET?Ie.def($e,"?",$e,".vertCount-",fe.OFFSET,":-1"):Ie.def($e,"?",$e,".vertCount:-1")});return ne.optional(function(){X.DYNAMIC=!0}),X}else if(O){var ee=new It(F.thisDep,F.contextDep,F.propDep,function(fe,Ie){return Ie.def(fe.shared.vao,".currentVAO?",fe.shared.vao,".currentVAO.count:-1")});return ee}return null}var le=$(),pe=ce(),se=V(As,!1);return{elements:S,primitive:le,count:pe,instances:se,offset:Z,vao:F,vaoActive:O,elementsActive:_,static:j}}function Ze(E,y){var z=E.static,G=E.dynamic,j={};return P.forEach(function(O){var I=U(O);function F(_,L){if(O in z){var S=_(z[O]);j[I]=Tt(function(){return S})}else if(O in G){var $=G[O];j[I]=ir($,function(V,Z){return L(V,Z,V.invoke(Z,$))})}}switch(O){case Yd:case Ud:case Hd:case e1:case jd:case r1:case Qd:case Zd:case Jd:case Xd:return F(function(_){return ne.commandType(_,"boolean",O,y.commandStr),_},function(_,L,S){return ne.optional(function(){_.assert(L,"typeof "+S+'==="boolean"',"invalid flag "+O,_.commandStr)}),S});case Vd:return F(function(_){return ne.commandParameter(_,ra,"invalid "+O,y.commandStr),ra[_]},function(_,L,S){var $=_.constants.compareFuncs;return ne.optional(function(){_.assert(L,S+" in "+$,"invalid "+O+", must be one of "+Object.keys(ra))}),L.def($,"[",S,"]")});case Wd:return F(function(_){return ne.command(Lt(_)&&_.length===2&&typeof _[0]=="number"&&typeof _[1]=="number"&&_[0]<=_[1],"depth range is 2d array",y.commandStr),_},function(_,L,S){ne.optional(function(){_.assert(L,_.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var $=L.def("+",S,"[0]"),V=L.def("+",S,"[1]");return[$,V]});case $c:return F(function(_){ne.commandType(_,"object","blend.func",y.commandStr);var L="srcRGB"in _?_.srcRGB:_.src,S="srcAlpha"in _?_.srcAlpha:_.src,$="dstRGB"in _?_.dstRGB:_.dst,V="dstAlpha"in _?_.dstAlpha:_.dst;return ne.commandParameter(L,Vr,I+".srcRGB",y.commandStr),ne.commandParameter(S,Vr,I+".srcAlpha",y.commandStr),ne.commandParameter($,Vr,I+".dstRGB",y.commandStr),ne.commandParameter(V,Vr,I+".dstAlpha",y.commandStr),ne.command(f1.indexOf(L+", "+$)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+L+", "+$+")",y.commandStr),[Vr[L],Vr[$],Vr[S],Vr[V]]},function(_,L,S){var $=_.constants.blendFuncs;ne.optional(function(){_.assert(L,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function V(we,H){var X=L.def('"',we,H,'" in ',S,"?",S,".",we,H,":",S,".",we);return ne.optional(function(){_.assert(L,X+" in "+$,"invalid "+O+"."+we+H+", must be one of "+Object.keys(Vr))}),X}var Z=V("src","RGB"),ce=V("dst","RGB");ne.optional(function(){var we=_.constants.invalidBlendCombinations;_.assert(L,we+".indexOf("+Z+'+", "+'+ce+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var le=L.def($,"[",Z,"]"),pe=L.def($,"[",V("src","Alpha"),"]"),se=L.def($,"[",ce,"]"),Ee=L.def($,"[",V("dst","Alpha"),"]");return[le,se,pe,Ee]});case qc:return F(function(_){if(typeof _=="string")return ne.commandParameter(_,g,"invalid "+O,y.commandStr),[g[_],g[_]];if(typeof _=="object")return ne.commandParameter(_.rgb,g,O+".rgb",y.commandStr),ne.commandParameter(_.alpha,g,O+".alpha",y.commandStr),[g[_.rgb],g[_.alpha]];ne.commandRaise("invalid blend.equation",y.commandStr)},function(_,L,S){var $=_.constants.blendEquations,V=L.def(),Z=L.def(),ce=_.cond("typeof ",S,'==="string"');return ne.optional(function(){function le(pe,se,Ee){_.assert(pe,Ee+" in "+$,"invalid "+se+", must be one of "+Object.keys(g))}le(ce.then,O,S),_.assert(ce.else,S+"&&typeof "+S+'==="object"',"invalid "+O),le(ce.else,O+".rgb",S+".rgb"),le(ce.else,O+".alpha",S+".alpha")}),ce.then(V,"=",Z,"=",$,"[",S,"];"),ce.else(V,"=",$,"[",S,".rgb];",Z,"=",$,"[",S,".alpha];"),L(ce),[V,Z]});case Bd:return F(function(_){return ne.command(Lt(_)&&_.length===4,"blend.color must be a 4d array",y.commandStr),wr(4,function(L){return+_[L]})},function(_,L,S){return ne.optional(function(){_.assert(L,_.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),wr(4,function($){return L.def("+",S,"[",$,"]")})});case t1:return F(function(_){return ne.commandType(_,"number",I,y.commandStr),_|0},function(_,L,S){return ne.optional(function(){_.assert(L,"typeof "+S+'==="number"',"invalid stencil.mask")}),L.def(S,"|0")});case Bc:return F(function(_){ne.commandType(_,"object",I,y.commandStr);var L=_.cmp||"keep",S=_.ref||0,$="mask"in _?_.mask:-1;return ne.commandParameter(L,ra,O+".cmp",y.commandStr),ne.commandType(S,"number",O+".ref",y.commandStr),ne.commandType($,"number",O+".mask",y.commandStr),[ra[L],S,$]},function(_,L,S){var $=_.constants.compareFuncs;ne.optional(function(){function le(){_.assert(L,Array.prototype.join.call(arguments,""),"invalid stencil.func")}le(S+"&&typeof ",S,'==="object"'),le('!("cmp" in ',S,")||(",S,".cmp in ",$,")")});var V=L.def('"cmp" in ',S,"?",$,"[",S,".cmp]",":",bn),Z=L.def(S,".ref|0"),ce=L.def('"mask" in ',S,"?",S,".mask|0:-1");return[V,Z,ce]});case jc:case li:return F(function(_){ne.commandType(_,"object",I,y.commandStr);var L=_.fail||"keep",S=_.zfail||"keep",$=_.zpass||"keep";return ne.commandParameter(L,wn,O+".fail",y.commandStr),ne.commandParameter(S,wn,O+".zfail",y.commandStr),ne.commandParameter($,wn,O+".zpass",y.commandStr),[O===li?oo:ci,wn[L],wn[S],wn[$]]},function(_,L,S){var $=_.constants.stencilOps;ne.optional(function(){_.assert(L,S+"&&typeof "+S+'==="object"',"invalid "+O)});function V(Z){return ne.optional(function(){_.assert(L,'!("'+Z+'" in '+S+")||("+S+"."+Z+" in "+$+")","invalid "+O+"."+Z+", must be one of "+Object.keys(wn))}),L.def('"',Z,'" in ',S,"?",$,"[",S,".",Z,"]:",bn)}return[O===li?oo:ci,V("fail"),V("zfail"),V("zpass")]});case Hc:return F(function(_){ne.commandType(_,"object",I,y.commandStr);var L=_.factor|0,S=_.units|0;return ne.commandType(L,"number",I+".factor",y.commandStr),ne.commandType(S,"number",I+".units",y.commandStr),[L,S]},function(_,L,S){ne.optional(function(){_.assert(L,S+"&&typeof "+S+'==="object"',"invalid "+O)});var $=L.def(S,".factor|0"),V=L.def(S,".units|0");return[$,V]});case Kd:return F(function(_){var L=0;return _==="front"?L=ci:_==="back"&&(L=oo),ne.command(!!L,I,y.commandStr),L},function(_,L,S){return ne.optional(function(){_.assert(L,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),L.def(S,'==="front"?',ci,":",oo)});case Lc:return F(function(_){return ne.command(typeof _=="number"&&_>=o.lineWidthDims[0]&&_<=o.lineWidthDims[1],"invalid line width, must be a positive number between "+o.lineWidthDims[0]+" and "+o.lineWidthDims[1],y.commandStr),_},function(_,L,S){return ne.optional(function(){_.assert(L,"typeof "+S+'==="number"&&'+S+">="+o.lineWidthDims[0]+"&&"+S+"<="+o.lineWidthDims[1],"invalid line width")}),S});case kc:return F(function(_){return ne.commandParameter(_,Nc,I,y.commandStr),Nc[_]},function(_,L,S){return ne.optional(function(){_.assert(L,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),L.def(S+'==="cw"?'+g1+":"+Vc)});case Sc:return F(function(_){return ne.command(Lt(_)&&_.length===4,"color.mask must be length 4 array",y.commandStr),_.map(function(L){return!!L})},function(_,L,S){return ne.optional(function(){_.assert(L,_.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),wr(4,function($){return"!!"+S+"["+$+"]"})});case Uc:return F(function(_){ne.command(typeof _=="object"&&_,I,y.commandStr);var L="value"in _?_.value:1,S=!!_.invert;return ne.command(typeof L=="number"&&L>=0&&L<=1,"sample.coverage.value must be a number between 0 and 1",y.commandStr),[L,S]},function(_,L,S){ne.optional(function(){_.assert(L,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var $=L.def('"value" in ',S,"?+",S,".value:1"),V=L.def("!!",S,".invert");return[$,V]})}}),j}function Ne(E,y){var z=E.static,G=E.dynamic,j={};return Object.keys(z).forEach(function(O){var I=z[O],F;if(typeof I=="number"||typeof I=="boolean")F=Tt(function(){return I});else if(typeof I=="function"){var _=I._reglType;_==="texture2d"||_==="textureCube"?F=Tt(function(L){return L.link(I)}):_==="framebuffer"||_==="framebufferCube"?(ne.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+O+'"',y.commandStr),F=Tt(function(L){return L.link(I.color[0])})):ne.commandRaise('invalid data for uniform "'+O+'"',y.commandStr)}else Lt(I)?F=Tt(function(L){var S=L.global.def("[",wr(I.length,function($){return ne.command(typeof I[$]=="number"||typeof I[$]=="boolean","invalid uniform "+O,L.commandStr),I[$]}),"]");return S}):ne.commandRaise('invalid or missing data for uniform "'+O+'"',y.commandStr);F.value=I,j[O]=F}),Object.keys(G).forEach(function(O){var I=G[O];j[O]=ir(I,function(F,_){return F.invoke(_,I)})}),j}function Je(E,y){var z=E.static,G=E.dynamic,j={};return Object.keys(z).forEach(function(O){var I=z[O],F=r.id(O),_=new p;if(Ns(I))_.state=Zo,_.buffer=a.getBuffer(a.create(I,ta,!1,!0)),_.type=0;else{var L=a.getBuffer(I);if(L)_.state=Zo,_.buffer=L,_.type=0;else if(ne.command(typeof I=="object"&&I,"invalid data for attribute "+O,y.commandStr),"constant"in I){var S=I.constant;_.buffer="null",_.state=Tc,typeof S=="number"?_.x=S:(ne.command(Lt(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+O,y.commandStr),Qo.forEach(function(se,Ee){Ee<S.length&&(_[se]=S[Ee])}))}else{Ns(I.buffer)?L=a.getBuffer(a.create(I.buffer,ta,!1,!0)):L=a.getBuffer(I.buffer),ne.command(!!L,'missing buffer for attribute "'+O+'"',y.commandStr);var $=I.offset|0;ne.command($>=0,'invalid offset for attribute "'+O+'"',y.commandStr);var V=I.stride|0;ne.command(V>=0&&V<256,'invalid stride for attribute "'+O+'", must be integer betweeen [0, 255]',y.commandStr);var Z=I.size|0;ne.command(!("size"in I)||Z>0&&Z<=4,'invalid size for attribute "'+O+'", must be 1,2,3,4',y.commandStr);var ce=!!I.normalized,le=0;"type"in I&&(ne.commandParameter(I.type,Ac,"invalid type for attribute "+O,y.commandStr),le=Ac[I.type]);var pe=I.divisor|0;ne.optional(function(){"divisor"in I&&(ne.command(pe===0||x,'cannot specify divisor for attribute "'+O+'", instancing not supported',y.commandStr),ne.command(pe>=0,'invalid divisor for attribute "'+O+'"',y.commandStr));var se=y.commandStr,Ee=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(we){ne.command(Ee.indexOf(we)>=0,'unknown parameter "'+we+'" for attribute pointer "'+O+'" (valid parameters are '+Ee+")",se)})}),_.buffer=L,_.state=Zo,_.size=Z,_.normalized=ce,_.type=le||L.dtype,_.offset=$,_.stride=V,_.divisor=pe}}j[O]=Tt(function(se,Ee){var we=se.attribCache;if(F in we)return we[F];var H={isStream:!1};return Object.keys(_).forEach(function(X){H[X]=_[X]}),_.buffer&&(H.buffer=se.link(_.buffer),H.type=H.type||H.buffer+".dtype"),we[F]=H,H})}),Object.keys(G).forEach(function(O){var I=G[O];function F(_,L){var S=_.invoke(L,I),$=_.shared,V=_.constants,Z=$.isBufferArgs,ce=$.buffer;ne.optional(function(){_.assert(L,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+Z+"("+S+")||"+ce+".getBuffer("+S+")||"+ce+".getBuffer("+S+".buffer)||"+Z+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+$.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+O+'"')});var le={isStream:L.def(!1)},pe=new p;pe.state=Zo,Object.keys(pe).forEach(function(H){le[H]=L.def(""+pe[H])});var se=le.buffer,Ee=le.type;L("if(",Z,"(",S,")){",le.isStream,"=true;",se,"=",ce,".createStream(",ta,",",S,");",Ee,"=",se,".dtype;","}else{",se,"=",ce,".getBuffer(",S,");","if(",se,"){",Ee,"=",se,".dtype;",'}else if("constant" in ',S,"){",le.state,"=",Tc,";","if(typeof "+S+'.constant === "number"){',le[Qo[0]],"=",S,".constant;",Qo.slice(1).map(function(H){return le[H]}).join("="),"=0;","}else{",Qo.map(function(H,X){return le[H]+"="+S+".constant.length>"+X+"?"+S+".constant["+X+"]:0;"}).join(""),"}}else{","if(",Z,"(",S,".buffer)){",se,"=",ce,".createStream(",ta,",",S,".buffer);","}else{",se,"=",ce,".getBuffer(",S,".buffer);","}",Ee,'="type" in ',S,"?",V.glTypes,"[",S,".type]:",se,".dtype;",le.normalized,"=!!",S,".normalized;");function we(H){L(le[H],"=",S,".",H,"|0;")}return we("size"),we("offset"),we("stride"),we("divisor"),L("}}"),L.exit("if(",le.isStream,"){",ce,".destroyStream(",se,");","}"),le}j[O]=ir(I,F)}),j}function Xe(E){var y=E.static,z=E.dynamic,G={};return Object.keys(y).forEach(function(j){var O=y[j];G[j]=Tt(function(I,F){return typeof O=="number"||typeof O=="boolean"?""+O:I.link(O)})}),Object.keys(z).forEach(function(j){var O=z[j];G[j]=ir(O,function(I,F){return I.invoke(F,O)})}),G}function ct(E,y,z,G,j){var O=E.static,I=E.dynamic;ne.optional(function(){var we=[ao,ei,ti,to,ro,Ms,no,As,Ja,ri].concat(P);function H(X){Object.keys(X).forEach(function(ee){ne.command(we.indexOf(ee)>=0,'unknown parameter "'+ee+'"',j.commandStr)})}H(O),H(I)});var F=xe(E,y),_=J(E,j),L=me(E,_,j),S=He(E,j),$=Ze(E,j),V=Ce(E,j,F);function Z(we){var H=L[we];H&&($[we]=H)}Z(tn),Z(U(Os));var ce=Object.keys($).length>0,le={framebuffer:_,draw:S,shader:V,state:$,dirty:ce,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(le.profile=re(E,j),le.uniforms=Ne(z,j),le.drawVAO=le.scopeVAO=S.vao,!le.drawVAO&&V.program&&!F&&n.angle_instanced_arrays&&S.static.elements){var pe=!0,se=V.program.attributes.map(function(we){var H=y.static[we];return pe=pe&&!!H,H});if(pe&&se.length>0){var Ee=f.getVAO(f.createVAO({attributes:se,elements:S.static.elements}));le.drawVAO=new It(null,null,null,function(we,H){return we.link(Ee)}),le.useVAO=!0}}return F?le.useVAO=!0:le.attributes=Je(y,j),le.context=Xe(G,j),le}function ye(E,y,z){var G=E.shared,j=G.context,O=E.scope();Object.keys(z).forEach(function(I){y.save(j,"."+I);var F=z[I],_=F.append(E,y);Array.isArray(_)?O(j,".",I,"=[",_.join(),"];"):O(j,".",I,"=",_,";")}),y(O)}function ve(E,y,z,G){var j=E.shared,O=j.gl,I=j.framebuffer,F;w&&(F=y.def(j.extensions,".webgl_draw_buffers"));var _=E.constants,L=_.drawBuffer,S=_.backBuffer,$;z?$=z.append(E,y):$=y.def(I,".next"),G||y("if(",$,"!==",I,".cur){"),y("if(",$,"){",O,".bindFramebuffer(",l1,",",$,".framebuffer);"),w&&y(F,".drawBuffersWEBGL(",L,"[",$,".colorAttachments.length]);"),y("}else{",O,".bindFramebuffer(",l1,",null);"),w&&y(F,".drawBuffersWEBGL(",S,");"),y("}",I,".cur=",$,";"),G||y("}")}function ze(E,y,z){var G=E.shared,j=G.gl,O=E.current,I=E.next,F=G.current,_=G.next,L=E.cond(F,".dirty");P.forEach(function(S){var $=U(S);if(!($ in z.state)){var V,Z;if($ in I){V=I[$],Z=O[$];var ce=wr(A[$].length,function(pe){return L.def(V,"[",pe,"]")});L(E.cond(ce.map(function(pe,se){return pe+"!=="+Z+"["+se+"]"}).join("||")).then(j,".",k[$],"(",ce,");",ce.map(function(pe,se){return Z+"["+se+"]="+pe}).join(";"),";"))}else{V=L.def(_,".",$);var le=E.cond(V,"!==",F,".",$);L(le),$ in C?le(E.cond(V).then(j,".enable(",C[$],");").else(j,".disable(",C[$],");"),F,".",$,"=",V,";"):le(j,".",k[$],"(",V,");",F,".",$,"=",V,";")}}}),Object.keys(z.state).length===0&&L(F,".dirty=false;"),y(L)}function De(E,y,z,G){var j=E.shared,O=E.current,I=j.current,F=j.gl;u1(Object.keys(z)).forEach(function(_){var L=z[_];if(!(G&&!G(L))){var S=L.append(E,y);if(C[_]){var $=C[_];_n(L)?S?y(F,".enable(",$,");"):y(F,".disable(",$,");"):y(E.cond(S).then(F,".enable(",$,");").else(F,".disable(",$,");")),y(I,".",_,"=",S,";")}else if(Lt(S)){var V=O[_];y(F,".",k[_],"(",S,");",S.map(function(Z,ce){return V+"["+ce+"]="+Z}).join(";"),";")}else y(F,".",k[_],"(",S,");",I,".",_,"=",S,";")}})}function ae(E,y){x&&(E.instancing=y.def(E.shared.extensions,".angle_instanced_arrays"))}function ge(E,y,z,G,j){var O=E.shared,I=E.stats,F=O.current,_=O.timer,L=z.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var $,V;function Z(we){$=y.def(),we($,"=",S(),";"),typeof j=="string"?we(I,".count+=",j,";"):we(I,".count++;"),m&&(G?(V=y.def(),we(V,"=",_,".getNumPendingQueries();")):we(_,".beginQuery(",I,");"))}function ce(we){we(I,".cpuTime+=",S(),"-",$,";"),m&&(G?we(_,".pushScopeStats(",V,",",_,".getNumPendingQueries(),",I,");"):we(_,".endQuery();"))}function le(we){var H=y.def(F,".profile");y(F,".profile=",we,";"),y.exit(F,".profile=",H,";")}var pe;if(L){if(_n(L)){L.enable?(Z(y),ce(y.exit),le("true")):le("false");return}pe=L.append(E,y),le(pe)}else pe=y.def(F,".profile");var se=E.block();Z(se),y("if(",pe,"){",se,"}");var Ee=E.block();ce(Ee),y.exit("if(",pe,"){",Ee,"}")}function qe(E,y,z,G,j){var O=E.shared;function I(_){switch(_){case Ts:case Ls:case Rs:return 2;case Ss:case zs:case Is:return 3;case ks:case Cs:case Ps:return 4;default:return 1}}function F(_,L,S){var $=O.gl,V=y.def(_,".location"),Z=y.def(O.attributes,"[",V,"]"),ce=S.state,le=S.buffer,pe=[S.x,S.y,S.z,S.w],se=["buffer","normalized","offset","stride"];function Ee(){y("if(!",Z,".buffer){",$,".enableVertexAttribArray(",V,");}");var H=S.type,X;if(S.size?X=y.def(S.size,"||",L):X=L,y("if(",Z,".type!==",H,"||",Z,".size!==",X,"||",se.map(function(fe){return Z+"."+fe+"!=="+S[fe]}).join("||"),"){",$,".bindBuffer(",ta,",",le,".buffer);",$,".vertexAttribPointer(",[V,X,H,S.normalized,S.stride,S.offset],");",Z,".type=",H,";",Z,".size=",X,";",se.map(function(fe){return Z+"."+fe+"="+S[fe]+";"}).join(""),"}"),x){var ee=S.divisor;y("if(",Z,".divisor!==",ee,"){",E.instancing,".vertexAttribDivisorANGLE(",[V,ee],");",Z,".divisor=",ee,";}")}}function we(){y("if(",Z,".buffer){",$,".disableVertexAttribArray(",V,");",Z,".buffer=null;","}if(",Qo.map(function(H,X){return Z+"."+H+"!=="+pe[X]}).join("||"),"){",$,".vertexAttrib4f(",V,",",pe,");",Qo.map(function(H,X){return Z+"."+H+"="+pe[X]+";"}).join(""),"}")}ce===Zo?Ee():ce===Tc?we():(y("if(",ce,"===",Zo,"){"),Ee(),y("}else{"),we(),y("}"))}G.forEach(function(_){var L=_.name,S=z.attributes[L],$;if(S){if(!j(S))return;$=S.append(E,y)}else{if(!j(d1))return;var V=E.scopeAttrib(L);ne.optional(function(){E.assert(y,V+".state","missing attribute "+L)}),$={},Object.keys(new p).forEach(function(Z){$[Z]=y.def(V,".",Z)})}F(E.link(_),I(_.info.type),$)})}function Pe(E,y,z,G,j,O){for(var I=E.shared,F=I.gl,_,L=0;L<G.length;++L){var S=G[L],$=S.name,V=S.info.type,Z=z.uniforms[$],ce=E.link(S),le=ce+".location",pe;if(Z){if(!j(Z))continue;if(_n(Z)){var se=Z.value;if(ne.command(se!==null&&typeof se!="undefined",'missing uniform "'+$+'"',E.commandStr),V===ii||V===si){ne.command(typeof se=="function"&&(V===ii&&(se._reglType==="texture2d"||se._reglType==="framebuffer")||V===si&&(se._reglType==="textureCube"||se._reglType==="framebufferCube")),"invalid texture for uniform "+$,E.commandStr);var Ee=E.link(se._texture||se.color[0]._texture);y(F,".uniform1i(",le,",",Ee+".bind());"),y.exit(Ee,".unbind();")}else if(V===ni||V===oi||V===ai){ne.optional(function(){ne.command(Lt(se),"invalid matrix for uniform "+$,E.commandStr),ne.command(V===ni&&se.length===4||V===oi&&se.length===9||V===ai&&se.length===16,"invalid length for matrix uniform "+$,E.commandStr)});var we=E.global.def("new Float32Array(["+Array.prototype.slice.call(se)+"])"),H=2;V===oi?H=3:V===ai&&(H=4),y(F,".uniformMatrix",H,"fv(",le,",false,",we,");")}else{switch(V){case Cc:ne.commandType(se,"number","uniform "+$,E.commandStr),_="1f";break;case Ts:ne.command(Lt(se)&&se.length===2,"uniform "+$,E.commandStr),_="2f";break;case Ss:ne.command(Lt(se)&&se.length===3,"uniform "+$,E.commandStr),_="3f";break;case ks:ne.command(Lt(se)&&se.length===4,"uniform "+$,E.commandStr),_="4f";break;case Ic:ne.commandType(se,"boolean","uniform "+$,E.commandStr),_="1i";break;case Rc:ne.commandType(se,"number","uniform "+$,E.commandStr),_="1i";break;case Rs:ne.command(Lt(se)&&se.length===2,"uniform "+$,E.commandStr),_="2i";break;case Ls:ne.command(Lt(se)&&se.length===2,"uniform "+$,E.commandStr),_="2i";break;case Is:ne.command(Lt(se)&&se.length===3,"uniform "+$,E.commandStr),_="3i";break;case zs:ne.command(Lt(se)&&se.length===3,"uniform "+$,E.commandStr),_="3i";break;case Ps:ne.command(Lt(se)&&se.length===4,"uniform "+$,E.commandStr),_="4i";break;case Cs:ne.command(Lt(se)&&se.length===4,"uniform "+$,E.commandStr),_="4i";break}y(F,".uniform",_,"(",le,",",Lt(se)?Array.prototype.slice.call(se):se,");")}continue}else pe=Z.append(E,y)}else{if(!j(d1))continue;pe=y.def(I.uniforms,"[",r.id($),"]")}V===ii?(ne(!Array.isArray(pe),"must specify a scalar prop for textures"),y("if(",pe,"&&",pe,'._reglType==="framebuffer"){',pe,"=",pe,".color[0];","}")):V===si&&(ne(!Array.isArray(pe),"must specify a scalar prop for cube maps"),y("if(",pe,"&&",pe,'._reglType==="framebufferCube"){',pe,"=",pe,".color[0];","}")),ne.optional(function(){function pt(bt,Da){E.assert(y,bt,'bad data or missing for uniform "'+$+'".  '+Da)}function ht(bt){ne(!Array.isArray(pe),"must not specify an array type for uniform"),pt("typeof "+pe+'==="'+bt+'"',"invalid type, expected "+bt)}function ot(bt,Da){Array.isArray(pe)?ne(pe.length===bt,"must have length "+bt):pt(I.isArrayLike+"("+pe+")&&"+pe+".length==="+bt,"invalid vector, should have length "+bt,E.commandStr)}function Rr(bt){ne(!Array.isArray(pe),"must not specify a value type"),pt("typeof "+pe+'==="function"&&'+pe+'._reglType==="texture'+(bt===a1?"2d":"Cube")+'"',"invalid texture type",E.commandStr)}switch(V){case Rc:ht("number");break;case Ls:ot(2,"number");break;case zs:ot(3,"number");break;case Cs:ot(4,"number");break;case Cc:ht("number");break;case Ts:ot(2,"number");break;case Ss:ot(3,"number");break;case ks:ot(4,"number");break;case Ic:ht("boolean");break;case Rs:ot(2,"boolean");break;case Is:ot(3,"boolean");break;case Ps:ot(4,"boolean");break;case ni:ot(4,"number");break;case oi:ot(9,"number");break;case ai:ot(16,"number");break;case ii:Rr(a1);break;case si:Rr(V3);break}});var X=1;switch(V){case ii:case si:var ee=y.def(pe,"._texture");y(F,".uniform1i(",le,",",ee,".bind());"),y.exit(ee,".unbind();");continue;case Rc:case Ic:_="1i";break;case Ls:case Rs:_="2i",X=2;break;case zs:case Is:_="3i",X=3;break;case Cs:case Ps:_="4i",X=4;break;case Cc:_="1f";break;case Ts:_="2f",X=2;break;case Ss:_="3f",X=3;break;case ks:_="4f",X=4;break;case ni:_="Matrix2fv";break;case oi:_="Matrix3fv";break;case ai:_="Matrix4fv";break}if(_.charAt(0)==="M"){y(F,".uniform",_,"(",le,",");var fe=Math.pow(V-ni+2,2),Ie=E.global.def("new Float32Array(",fe,")");Array.isArray(pe)?y("false,(",wr(fe,function(pt){return Ie+"["+pt+"]="+pe[pt]}),",",Ie,")"):y("false,(Array.isArray(",pe,")||",pe," instanceof Float32Array)?",pe,":(",wr(fe,function(pt){return Ie+"["+pt+"]="+pe+"["+pt+"]"}),",",Ie,")"),y(");")}else if(X>1){for(var $e=[],Ct=[],lt=0;lt<X;++lt)Array.isArray(pe)?Ct.push(pe[lt]):Ct.push(y.def(pe+"["+lt+"]")),O&&$e.push(y.def());O&&y("if(!",E.batchId,"||",$e.map(function(pt,ht){return pt+"!=="+Ct[ht]}).join("||"),"){",$e.map(function(pt,ht){return pt+"="+Ct[ht]+";"}).join("")),y(F,".uniform",_,"(",le,",",Ct.join(","),");"),O&&y("}")}else{if(ne(!Array.isArray(pe),"uniform value must not be an array"),O){var yt=y.def();y("if(!",E.batchId,"||",yt,"!==",pe,"){",yt,"=",pe,";")}y(F,".uniform",_,"(",le,",",pe,");"),O&&y("}")}}}function be(E,y,z,G){var j=E.shared,O=j.gl,I=j.draw,F=G.draw;function _(){var X=F.elements,ee,fe=y;return X?((X.contextDep&&G.contextDynamic||X.propDep)&&(fe=z),ee=X.append(E,fe),F.elementsActive&&fe("if("+ee+")"+O+".bindBuffer("+zc+","+ee+".buffer.buffer);")):(ee=fe.def(),fe(ee,"=",I,".",to,";","if(",ee,"){",O,".bindBuffer(",zc,",",ee,".buffer.buffer);}","else if(",j.vao,".currentVAO){",ee,"=",E.shared.elements+".getElements("+j.vao,".currentVAO.elements);",b?"":"if("+ee+")"+O+".bindBuffer("+zc+","+ee+".buffer.buffer);","}")),ee}function L(){var X=F.count,ee,fe=y;return X?((X.contextDep&&G.contextDynamic||X.propDep)&&(fe=z),ee=X.append(E,fe),ne.optional(function(){X.MISSING&&E.assert(y,"false","missing vertex count"),X.DYNAMIC&&E.assert(fe,ee+">=0","missing vertex count")})):(ee=fe.def(I,".",no),ne.optional(function(){E.assert(fe,ee+">=0","missing vertex count")})),ee}var S=_();function $(X){var ee=F[X];return ee?ee.contextDep&&G.contextDynamic||ee.propDep?ee.append(E,z):ee.append(E,y):y.def(I,".",X)}var V=$(ro),Z=$(Ms),ce=L();if(typeof ce=="number"){if(ce===0)return}else z("if(",ce,"){"),z.exit("}");var le,pe;x&&(le=$(As),pe=E.instancing);var se=S+".type",Ee=F.elements&&_n(F.elements)&&!F.vaoActive;function we(){function X(){z(pe,".drawElementsInstancedANGLE(",[V,ce,se,Z+"<<(("+se+"-"+$d+")>>1)",le],");")}function ee(){z(pe,".drawArraysInstancedANGLE(",[V,Z,ce,le],");")}S&&S!=="null"?Ee?X():(z("if(",S,"){"),X(),z("}else{"),ee(),z("}")):ee()}function H(){function X(){z(O+".drawElements("+[V,ce,se,Z+"<<(("+se+"-"+$d+")>>1)"]+");")}function ee(){z(O+".drawArrays("+[V,Z,ce]+");")}S&&S!=="null"?Ee?X():(z("if(",S,"){"),X(),z("}else{"),ee(),z("}")):ee()}x&&(typeof le!="number"||le>=0)?typeof le=="string"?(z("if(",le,">0){"),we(),z("}else if(",le,"<0){"),H(),z("}")):we():H()}function ke(E,y,z,G,j){var O=te(),I=O.proc("body",j);return ne.optional(function(){O.commandStr=y.commandStr,O.command=O.link(y.commandStr)}),x&&(O.instancing=I.def(O.shared.extensions,".angle_instanced_arrays")),E(O,I,z,G),O.compile().body}function Ae(E,y,z,G){ae(E,y),z.useVAO?z.drawVAO?y(E.shared.vao,".setVAO(",z.drawVAO.append(E,y),");"):y(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(y(E.shared.vao,".setVAO(null);"),qe(E,y,z,G.attributes,function(){return!0})),Pe(E,y,z,G.uniforms,function(){return!0},!1),be(E,y,y,z)}function Fe(E,y){var z=E.proc("draw",1);ae(E,z),ye(E,z,y.context),ve(E,z,y.framebuffer),ze(E,z,y),De(E,z,y.state),ge(E,z,y,!1,!0);var G=y.shader.progVar.append(E,z);if(z(E.shared.gl,".useProgram(",G,".program);"),y.shader.program)Ae(E,z,y,y.shader.program);else{z(E.shared.vao,".setVAO(null);");var j=E.global.def("{}"),O=z.def(G,".id"),I=z.def(j,"[",O,"]");z(E.cond(I).then(I,".call(this,a0);").else(I,"=",j,"[",O,"]=",E.link(function(F){return ke(Ae,E,y,F,1)}),"(",G,");",I,".call(this,a0);"))}Object.keys(y.state).length>0&&z(E.shared.current,".dirty=true;"),E.shared.vao&&z(E.shared.vao,".setVAO(null);")}function je(E,y,z,G){E.batchId="a1",ae(E,y);function j(){return!0}qe(E,y,z,G.attributes,j),Pe(E,y,z,G.uniforms,j,!1),be(E,y,y,z)}function Re(E,y,z,G){ae(E,y);var j=z.contextDep,O=y.def(),I="a0",F="a1",_=y.def();E.shared.props=_,E.batchId=O;var L=E.scope(),S=E.scope();y(L.entry,"for(",O,"=0;",O,"<",F,";++",O,"){",_,"=",I,"[",O,"];",S,"}",L.exit);function $(se){return se.contextDep&&j||se.propDep}function V(se){return!$(se)}if(z.needsContext&&ye(E,S,z.context),z.needsFramebuffer&&ve(E,S,z.framebuffer),De(E,S,z.state,$),z.profile&&$(z.profile)&&ge(E,S,z,!1,!0),G)z.useVAO?z.drawVAO?$(z.drawVAO)?S(E.shared.vao,".setVAO(",z.drawVAO.append(E,S),");"):L(E.shared.vao,".setVAO(",z.drawVAO.append(E,L),");"):L(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(L(E.shared.vao,".setVAO(null);"),qe(E,L,z,G.attributes,V),qe(E,S,z,G.attributes,$)),Pe(E,L,z,G.uniforms,V,!1),Pe(E,S,z,G.uniforms,$,!0),be(E,L,S,z);else{var Z=E.global.def("{}"),ce=z.shader.progVar.append(E,S),le=S.def(ce,".id"),pe=S.def(Z,"[",le,"]");S(E.shared.gl,".useProgram(",ce,".program);","if(!",pe,"){",pe,"=",Z,"[",le,"]=",E.link(function(se){return ke(je,E,z,se,2)}),"(",ce,");}",pe,".call(this,a0[",O,"],",O,");")}}function M(E,y){var z=E.proc("batch",2);E.batchId="0",ae(E,z);var G=!1,j=!0;Object.keys(y.context).forEach(function(Z){G=G||y.context[Z].propDep}),G||(ye(E,z,y.context),j=!1);var O=y.framebuffer,I=!1;O?(O.propDep?G=I=!0:O.contextDep&&G&&(I=!0),I||ve(E,z,O)):ve(E,z,null),y.state.viewport&&y.state.viewport.propDep&&(G=!0);function F(Z){return Z.contextDep&&G||Z.propDep}ze(E,z,y),De(E,z,y.state,function(Z){return!F(Z)}),(!y.profile||!F(y.profile))&&ge(E,z,y,!1,"a1"),y.contextDep=G,y.needsContext=j,y.needsFramebuffer=I;var _=y.shader.progVar;if(_.contextDep&&G||_.propDep)Re(E,z,y,null);else{var L=_.append(E,z);if(z(E.shared.gl,".useProgram(",L,".program);"),y.shader.program)Re(E,z,y,y.shader.program);else{z(E.shared.vao,".setVAO(null);");var S=E.global.def("{}"),$=z.def(L,".id"),V=z.def(S,"[",$,"]");z(E.cond(V).then(V,".call(this,a0,a1);").else(V,"=",S,"[",$,"]=",E.link(function(Z){return ke(Re,E,y,Z,2)}),"(",L,");",V,".call(this,a0,a1);"))}}Object.keys(y.state).length>0&&z(E.shared.current,".dirty=true;"),E.shared.vao&&z(E.shared.vao,".setVAO(null);")}function W(E,y){var z=E.proc("scope",3);E.batchId="a2";var G=E.shared,j=G.current;ye(E,z,y.context),y.framebuffer&&y.framebuffer.append(E,z),u1(Object.keys(y.state)).forEach(function(I){var F=y.state[I],_=F.append(E,z);Lt(_)?_.forEach(function(L,S){z.set(E.next[I],"["+S+"]",L)}):z.set(G.next,"."+I,_)}),ge(E,z,y,!0,!0),[to,Ms,no,As,ro].forEach(function(I){var F=y.draw[I];F&&z.set(G.draw,"."+I,""+F.append(E,z))}),Object.keys(y.uniforms).forEach(function(I){var F=y.uniforms[I].append(E,z);Array.isArray(F)&&(F="["+F.join()+"]"),z.set(G.uniforms,"["+r.id(I)+"]",F)}),Object.keys(y.attributes).forEach(function(I){var F=y.attributes[I].append(E,z),_=E.scopeAttrib(I);Object.keys(new p).forEach(function(L){z.set(_,"."+L,F[L])})}),y.scopeVAO&&z.set(G.vao,".targetVAO",y.scopeVAO.append(E,z));function O(I){var F=y.shader[I];F&&z.set(G.shader,"."+I,F.append(E,z))}O(ei),O(ti),Object.keys(y.state).length>0&&(z(j,".dirty=true;"),z.exit(j,".dirty=true;")),z("a1(",E.shared.context,",a0,",E.batchId,");")}function N(E){if(!(typeof E!="object"||Lt(E))){for(var y=Object.keys(E),z=0;z<y.length;++z)if(Za.isDynamic(E[y[z]]))return!0;return!1}}function ie(E,y,z){var G=y.static[z];if(!G||!N(G))return;var j=E.global,O=Object.keys(G),I=!1,F=!1,_=!1,L=E.global.def("{}");O.forEach(function($){var V=G[$];if(Za.isDynamic(V)){typeof V=="function"&&(V=G[$]=Za.unbox(V));var Z=ir(V,null);I=I||Z.thisDep,_=_||Z.propDep,F=F||Z.contextDep}else{switch(j(L,".",$,"="),typeof V){case"number":j(V);break;case"string":j('"',V,'"');break;case"object":Array.isArray(V)&&j("[",V.join(),"]");break;default:j(E.link(V));break}j(";")}});function S($,V){O.forEach(function(Z){var ce=G[Z];if(Za.isDynamic(ce)){var le=$.invoke(V,ce);V(L,".",Z,"=",le,";")}})}y.dynamic[z]=new Za.DynamicVariable(Gs,{thisDep:I,contextDep:F,propDep:_,ref:L,append:S}),delete y.static[z]}function Se(E,y,z,G,j){var O=te();O.stats=O.link(j),Object.keys(y.static).forEach(function(F){ie(O,y,F)}),U3.forEach(function(F){ie(O,E,F)});var I=ct(E,y,z,G,O);return Fe(O,I),W(O,I),M(O,I),G3(O.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:T,current:A,procs:(function(){var E=te(),y=E.proc("poll"),z=E.proc("refresh"),G=E.block();y(G),z(G);var j=E.shared,O=j.gl,I=j.next,F=j.current;G(F,".dirty=false;"),ve(E,y),ve(E,z,null,!0);var _;x&&(_=E.link(x)),n.oes_vertex_array_object&&z(E.link(n.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var L=0;L<o.maxAttributes;++L){var S=z.def(j.attributes,"[",L,"]"),$=E.cond(S,".buffer");$.then(O,".enableVertexAttribArray(",L,");",O,".bindBuffer(",ta,",",S,".buffer.buffer);",O,".vertexAttribPointer(",L,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(O,".disableVertexAttribArray(",L,");",O,".vertexAttrib4f(",L,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),z($),x&&z(_,".vertexAttribDivisorANGLE(",L,",",S,".divisor);")}return z(E.shared.vao,".currentVAO=null;",E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"),Object.keys(C).forEach(function(V){var Z=C[V],ce=G.def(I,".",V),le=E.block();le("if(",ce,"){",O,".enable(",Z,")}else{",O,".disable(",Z,")}",F,".",V,"=",ce,";"),z(le),y("if(",ce,"!==",F,".",V,"){",le,"}")}),Object.keys(k).forEach(function(V){var Z=k[V],ce=A[V],le,pe,se=E.block();if(se(O,".",Z,"("),Lt(ce)){var Ee=ce.length;le=E.global.def(I,".",V),pe=E.global.def(F,".",V),se(wr(Ee,function(we){return le+"["+we+"]"}),");",wr(Ee,function(we){return pe+"["+we+"]="+le+"["+we+"];"}).join("")),y("if(",wr(Ee,function(we){return le+"["+we+"]!=="+pe+"["+we+"]"}).join("||"),"){",se,"}")}else le=G.def(I,".",V),pe=G.def(F,".",V),se(le,");",F,".",V,"=",le,";"),y("if(",le,"!==",pe,"){",se,"}");z(se)}),E.compile()})(),compile:Se}}});var w1=Q((AA,b1)=>{b1.exports=function(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}});var M1=Q((TA,E1)=>{var s5=34918,c5=34919,_1=35007;E1.exports=function(e,t){if(!t.ext_disjoint_timer_query)return null;var r=[];function n(){return r.pop()||t.ext_disjoint_timer_query.createQueryEXT()}function o(g){r.push(g)}var a=[];function i(g){var x=n();t.ext_disjoint_timer_query.beginQueryEXT(_1,x),a.push(x),u(a.length-1,a.length,g)}function s(){t.ext_disjoint_timer_query.endQueryEXT(_1)}function c(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var l=[];function f(){return l.pop()||new c}function v(g){l.push(g)}var h=[];function u(g,x,w){var b=f();b.startQueryIndex=g,b.endQueryIndex=x,b.sum=0,b.stats=w,h.push(b)}var m=[],d=[];function p(){var g,x,w=a.length;if(w!==0){d.length=Math.max(d.length,w+1),m.length=Math.max(m.length,w+1),m[0]=0,d[0]=0;var b=0;for(g=0,x=0;x<a.length;++x){var A=a[x];t.ext_disjoint_timer_query.getQueryObjectEXT(A,c5)?(b+=t.ext_disjoint_timer_query.getQueryObjectEXT(A,s5),o(A)):a[g++]=A,m[x+1]=b,d[x+1]=g}for(a.length=g,g=0,x=0;x<h.length;++x){var T=h[x],P=T.startQueryIndex,C=T.endQueryIndex;T.sum+=m[C]-m[P];var k=d[P],U=d[C];U===k?(T.stats.gpuTime+=T.sum/1e6,v(T)):(T.startQueryIndex=k,T.endQueryIndex=U,h[g++]=T)}h.length=g}}return{beginQuery:i,endQuery:s,pushScopeStats:u,update:p,getNumPendingQueries:function(){return a.length},clear:function(){r.push.apply(r,a);for(var g=0;g<r.length;g++)t.ext_disjoint_timer_query.deleteQueryEXT(r[g]);a.length=0,r.length=0},restore:function(){a.length=0,r.length=0}}}});var C1=Q((SA,z1)=>{var rn=or(),Ds=Qr(),En=X0(),Yc=Ah(),A1=Sh(),l5=Lh(),f5=Ph(),h5=Oh(),u5=jh(),d5=iu(),p5=uu(),m5=ed(),v5=dd(),g5=Md(),x5=Rd(),y5=Od(),b5=Dd(),w5=y1(),_5=w1(),E5=M1(),M5=16384,A5=256,T5=1024,S5=34962,T1="webglcontextlost",S1="webglcontextrestored",k1=1,k5=2,L5=3;function L1(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return r;return-1}z1.exports=function(t){var r=f5(t);if(!r)return null;var n=r.gl,o=n.getContextAttributes(),a=n.isContextLost(),i=h5(n,r);if(!i)return null;var s=l5(),c=_5(),l=i.extensions,f=E5(n,l),v=A1(),h=n.drawingBufferWidth,u=n.drawingBufferHeight,m={tick:0,time:0,viewportWidth:h,viewportHeight:u,framebufferWidth:h,framebufferHeight:u,drawingBufferWidth:h,drawingBufferHeight:u,pixelRatio:r.pixelRatio},d={},p={elements:null,primitive:4,count:-1,offset:0,instances:-1},g=u5(n,l),x=d5(n,c,r,A),w=p5(n,l,x,c),b=x5(n,l,g,c,x,w,p);function A(be){return b.destroyBuffer(be)}var T=y5(n,s,c,r),P=m5(n,l,g,function(){U.procs.poll()},m,c,r),C=v5(n,l,g,c,r),k=g5(n,l,g,P,C,c),U=w5(n,s,l,g,x,w,P,k,d,b,T,p,m,f,r),R=b5(n,k,U.procs.poll,m,o,l,g),D=U.next,q=n.canvas,B=[],K=[],te=[],re=[r.onDestroy],J=null;function me(){if(B.length===0){f&&f.update(),J=null;return}J=Yc.next(me),De();for(var be=B.length-1;be>=0;--be){var ke=B[be];ke&&ke(m,null,0)}n.flush(),f&&f.update()}function xe(){!J&&B.length>0&&(J=Yc.next(me))}function Ce(){J&&(Yc.cancel(me),J=null)}function He(be){be.preventDefault(),a=!0,Ce(),K.forEach(function(ke){ke()})}function Ze(be){n.getError(),a=!1,i.restore(),T.restore(),x.restore(),P.restore(),C.restore(),k.restore(),b.restore(),f&&f.restore(),U.procs.refresh(),xe(),te.forEach(function(ke){ke()})}q&&(q.addEventListener(T1,He,!1),q.addEventListener(S1,Ze,!1));function Ne(){B.length=0,Ce(),q&&(q.removeEventListener(T1,He),q.removeEventListener(S1,Ze)),T.clear(),k.clear(),C.clear(),b.clear(),P.clear(),w.clear(),x.clear(),f&&f.clear(),re.forEach(function(be){be()})}function Je(be){rn(!!be,"invalid args to regl({...})"),rn.type(be,"object","invalid args to regl({...})");function ke(j){var O=Ds({},j);delete O.uniforms,delete O.attributes,delete O.context,delete O.vao,"stencil"in O&&O.stencil.op&&(O.stencil.opBack=O.stencil.opFront=O.stencil.op,delete O.stencil.op);function I(F){if(F in O){var _=O[F];delete O[F],Object.keys(_).forEach(function(L){O[F+"."+L]=_[L]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in j&&(O.vao=j.vao),O}function Ae(j,O){var I={},F={};return Object.keys(j).forEach(function(_){var L=j[_];if(En.isDynamic(L)){F[_]=En.unbox(L,_);return}else if(O&&Array.isArray(L)){for(var S=0;S<L.length;++S)if(En.isDynamic(L[S])){F[_]=En.unbox(L,_);return}}I[_]=L}),{dynamic:F,static:I}}var Fe=Ae(be.context||{},!0),je=Ae(be.uniforms||{},!0),Re=Ae(be.attributes||{},!1),M=Ae(ke(be),!1),W={gpuTime:0,cpuTime:0,count:0},N=U.compile(M,Re,je,Fe,W),ie=N.draw,Se=N.batch,E=N.scope,y=[];function z(j){for(;y.length<j;)y.push(null);return y}function G(j,O){var I;if(a&&rn.raise("context lost"),typeof j=="function")return E.call(this,null,j,0);if(typeof O=="function")if(typeof j=="number")for(I=0;I<j;++I)E.call(this,null,O,I);else if(Array.isArray(j))for(I=0;I<j.length;++I)E.call(this,j[I],O,I);else return E.call(this,j,O,0);else if(typeof j=="number"){if(j>0)return Se.call(this,z(j|0),j|0)}else if(Array.isArray(j)){if(j.length)return Se.call(this,j,j.length)}else return ie.call(this,j)}return Ds(G,{stats:W,destroy:function(){N.destroy()}})}var Xe=k.setFBO=Je({framebuffer:En.define.call(null,k1,"framebuffer")});function ct(be,ke){var Ae=0;U.procs.poll();var Fe=ke.color;Fe&&(n.clearColor(+Fe[0]||0,+Fe[1]||0,+Fe[2]||0,+Fe[3]||0),Ae|=M5),"depth"in ke&&(n.clearDepth(+ke.depth),Ae|=A5),"stencil"in ke&&(n.clearStencil(ke.stencil|0),Ae|=T5),rn(!!Ae,"called regl.clear with no buffer specified"),n.clear(Ae)}function ye(be){if(rn(typeof be=="object"&&be,"regl.clear() takes an object as input"),"framebuffer"in be)if(be.framebuffer&&be.framebuffer_reglType==="framebufferCube")for(var ke=0;ke<6;++ke)Xe(Ds({framebuffer:be.framebuffer.faces[ke]},be),ct);else Xe(be,ct);else ct(null,be)}function ve(be){rn.type(be,"function","regl.frame() callback must be a function"),B.push(be);function ke(){var Ae=L1(B,be);rn(Ae>=0,"cannot cancel a frame twice");function Fe(){var je=L1(B,Fe);B[je]=B[B.length-1],B.length-=1,B.length<=0&&Ce()}B[Ae]=Fe}return xe(),{cancel:ke}}function ze(){var be=D.viewport,ke=D.scissor_box;be[0]=be[1]=ke[0]=ke[1]=0,m.viewportWidth=m.framebufferWidth=m.drawingBufferWidth=be[2]=ke[2]=n.drawingBufferWidth,m.viewportHeight=m.framebufferHeight=m.drawingBufferHeight=be[3]=ke[3]=n.drawingBufferHeight}function De(){m.tick+=1,m.time=ge(),ze(),U.procs.poll()}function ae(){P.refresh(),ze(),U.procs.refresh(),f&&f.update()}function ge(){return(A1()-v)/1e3}ae();function qe(be,ke){rn.type(ke,"function","listener callback must be a function");var Ae;switch(be){case"frame":return ve(ke);case"lost":Ae=K;break;case"restore":Ae=te;break;case"destroy":Ae=re;break;default:rn.raise("invalid event, must be one of frame,lost,restore,destroy")}return Ae.push(ke),{cancel:function(){for(var Fe=0;Fe<Ae.length;++Fe)if(Ae[Fe]===ke){Ae[Fe]=Ae[Ae.length-1],Ae.pop();return}}}}var Pe=Ds(Je,{clear:ye,prop:En.define.bind(null,k1),context:En.define.bind(null,k5),this:En.define.bind(null,L5),draw:Je({}),buffer:function(be){return x.create(be,S5,!1,!1)},elements:function(be){return w.create(be,!1)},texture:P.create2D,cube:P.createCube,renderbuffer:C.create,framebuffer:k.create,framebufferCube:k.createCube,vao:b.createVAO,attributes:o,frame:ve,on:qe,limits:g,hasExtension:function(be){return g.extensions.indexOf(be.toLowerCase())>=0},read:R,destroy:Ne,_gl:n,_refresh:ae,poll:function(){De(),f&&f.update()},now:ge,stats:c});return r.onDone(null,Pe),Pe}});var io=Q((kA,R1)=>{"use strict";var nn=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],on=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Wr=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Fs=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],fi=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Kc=e=>Math.hypot(e[0],e[1],e[2]),_r=e=>{let t=Kc(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function na(e,t){let r=e.length-1,n=Math.min(Math.max(t,0),1)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],l=e[Math.min(r,o+2)],f=[0,0,0];for(let v=0;v<3;v++)f[v]=.5*(2*s[v]+(-i[v]+c[v])*a+(2*i[v]-5*s[v]+4*c[v]-l[v])*a*a+(-i[v]+3*s[v]-3*c[v]+l[v])*a*a*a);return f}function z5(e,t){return na(e.map(r=>[r,0,0]),t)[0]}function C5(e,t,r,n){let o={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];o.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},o.restore=()=>{i=s.pop()};let c=(h,u)=>{let m=new Array(9);for(let d=0;d<3;d++)for(let p=0;p<3;p++)m[d*3+p]=h[d*3]*u[p]+h[d*3+1]*u[3+p]+h[d*3+2]*u[6+p];return m},l=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];o.translate=(h,u,m)=>{let d=l([h,u,m]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},o.scale=h=>{i.s*=h},o.rotateY=h=>{let u=Math.cos(h),m=Math.sin(h);i.r=c(i.r,[u,0,m,0,1,0,-m,0,u])},o.vert=(h,u,m)=>{let d=m||o.curMat,p=l(h),g=_r(l(u));return e.push(p[0]*i.s+i.t[0],p[1]*i.s+i.t[1],p[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let f=h=>[e[h*3],e[h*3+1],e[h*3+2]],v=h=>[t[h*3],t[h*3+1],t[h*3+2]];return o.tri=(h,u,m)=>{let d=f(h),p=fi(nn(f(u),d),nn(f(m),d)),g=on(on(v(h),v(u)),v(m));Fs(p,g)<0?r.push(h,m,u):r.push(h,u,m)},o.box=(h,u,m,d,p,g,x)=>{let w=[[[h,u,m],[d,u,m],[h,p,m],[d,p,m],[0,0,-1]],[[d,u,g],[h,u,g],[d,p,g],[h,p,g],[0,0,1]],[[h,u,g],[h,u,m],[h,p,g],[h,p,m],[-1,0,0]],[[d,u,m],[d,u,g],[d,p,m],[d,p,g],[1,0,0]],[[h,p,m],[d,p,m],[h,p,g],[d,p,g],[0,1,0]],[[h,u,g],[d,u,g],[h,u,m],[d,u,m],[0,-1,0]]];for(let b of w){let A=o.vert(b[0],b[4],x),T=o.vert(b[1],b[4],x),P=o.vert(b[2],b[4],x),C=o.vert(b[3],b[4],x);o.tri(A,T,P),o.tri(T,C,P)}},o.surface=(h,u,m,d)=>{d=d||{};let p=.001,g=A=>Math.min(1,Math.max(0,A)),x=[],w=[];for(let A=0;A<=u;A++){let T=[],P=[];for(let C=0;C<=m;C++){let k=A/u,U=C/m,R=h(k,U),D=Math.min(1-p,Math.max(p,k)),q=d.wrapV?U:Math.min(1-p,Math.max(p,U)),B=nn(h(g(D+p),q),h(g(D-p),q)),K=d.wrapV?q+p:g(q+p),te=d.wrapV?q-p:g(q-p),re=nn(h(D,K),h(D,te)),J=fi(B,re);Kc(J)<1e-14&&(J=d.inside?nn(R,d.inside(k,U)):[0,1,0]),J=_r(J),d.inside&&Fs(J,nn(R,d.inside(k,U)))<0&&(J=Wr(J,-1));let me=d.mat?d.mat(k,U,R):null;T.push(o.vert(R,J,me)),d.double&&P.push(o.vert(R,Wr(J,-1),me))}x.push(T),w.push(P)}let b=A=>{for(let T=0;T<u;T++)for(let P=0;P<m;P++){let C=A[T][P],k=A[T+1][P],U=A[T][P+1],R=A[T+1][P+1];o.tri(C,k,U),o.tri(k,R,U)}};b(x),d.double&&b(w)},o.ellipsoid=(h,u,m,d,p)=>{p=p||{};let g=p.warp||null;o.surface((x,w)=>{let b=x*Math.PI,A=w*Math.PI*2,T=g?g(x,w):1;return[h[0]+u[0]*T*Math.sin(b)*Math.cos(A),h[1]+u[1]*T*Math.cos(b),h[2]+u[2]*T*Math.sin(b)*Math.sin(A)]},m||10,d||14,{wrapV:!0,inside:()=>h,mat:p.mat})},o.tube=(h,u,m,d,p)=>{p=p||{};let g=40,x=[],w=null;for(let T=0;T<=g;T++){let P=T/g,C=na(h,Math.max(0,P-.01)),k=na(h,Math.min(1,P+.01)),U=_r(nn(k,C)),R;if(w)R=_r(nn(w,Wr(U,Fs(w,U))));else{let D=Math.abs(U[1])<.9?[0,1,0]:[1,0,0];R=_r(fi(U,D))}x.push({N:R,B:_r(fi(U,R))}),w=R}let b=T=>{let P=Math.min(Math.max(T,0),1)*g,C=Math.min(g-1,Math.floor(P)),k=P-C,U=x[C],R=x[C+1];return{N:_r(on(Wr(U.N,1-k),Wr(R.N,k))),B:_r(on(Wr(U.B,1-k),Wr(R.B,k)))}},A=p.squash||[1,1];o.surface((T,P)=>{let C=na(h,T),k=b(T),U=u(T),R=P*Math.PI*2;return on(C,on(Wr(k.N,Math.cos(R)*U*A[0]),Wr(k.B,Math.sin(R)*U*A[1])))},m||12,d||8,{wrapV:!0,inside:T=>na(h,T),mat:p.mat})},o.lathe=(h,u,m,d,p)=>{p=p||{};let g=[];for(let x=0;x<h.length-1;x++){let w=h[x+1][0]-h[x][0],b=h[x+1][1]-h[x][1];g.push(_r([b,-w,0]))}for(let x=0;x<h.length-1;x++){let w=h[x],b=h[x+1],A=x===0||w[2]===1,T=x===h.length-2||b[2]===1,P=A?g[x]:_r(on(g[x-1],g[x])),C=T?g[x]:_r(on(g[x],g[x+1])),k=[],U=[];for(let R=0;R<=d;R++){let D=R/d*Math.PI*2,q=Math.cos(D),B=Math.sin(D),K=p.mat?p.mat(D,w[1]):null,te=p.mat?p.mat(D,b[1]):null;k.push(o.vert([u+w[0]*q,w[1],m+w[0]*B],[P[0]*q,P[1],P[0]*B],K)),U.push(o.vert([u+b[0]*q,b[1],m+b[0]*B],[C[0]*q,C[1],C[0]*B],te))}for(let R=0;R<d;R++)o.tri(k[R],k[R+1],U[R]),o.tri(k[R+1],U[R+1],U[R])}},o}R1.exports={createBuilder:C5,catmull:na,curve1:z5,sub:nn,add:on,mul:Wr,dot:Fs,cross:fi,norm:_r,len:Kc}});var O1=Q((LA,N1)=>{"use strict";var{norm:qs,add:$s,mul:Mn,sub:R5,cross:I1}=io(),P1=Math.PI*2,I5=(e,t,r)=>{let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)};function P5(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function N5(e,t,r,n,o,a){let i=(h,u)=>[7,h*a,u];e.curMat=[0,0,0],e.box(t-a*1.36,n,r-a*1.36,t+a*1.36,n+.22,r+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,r,56,{mat:i});let s=n+.55,c=o-s,l=20,f=6,v=a*.075;return e.surface((h,u)=>{let m=s+h*c,d=a*(.96-.12*h),p=u*P1,g=u*l%1,x=d-v*4*g*(1-g);return[t+x*Math.cos(p),m,r+x*Math.sin(p)]},10,l*f,{wrapV:!0,inside:h=>[t,s+h*c,r],mat:(h,u)=>[7,u*P1*a,s+h*c]}),e.lathe([[a*.8,o-.02,1],[a*.9,o+.02],[a*.9,o+.07,1],[a*.82,o+.09,1],[a*.86,o+.13],[a*1.06,o+.2],[a*1.22,o+.28],[a*1.28,o+.33,1]],t,r,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,o+.33,r-a*1.42,t+a*1.42,o+.53,r+a*1.42),o+.53}function O5(e,t,r){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,r*.14,1],[t*1.04,r*.14,1],[t*1.04,r*.2],[t*.97,r*.26,1],[t*.95,r*.26,1],[t*.95,r*.8,1],[t*.98,r*.8,1],[t*1.03,r*.86],[t*1.05,r*.92,1],[t*1.05,r,1],[t*.5,r,1],[0,r]],0,0,72)}function G5(e,t,r,n,o){e.save(),e.translate(t,0,r),O5(e,n,o),e.restore()}function D5(e,t,r,n,o,a){let i=P5(n),s=a?qs([a[0],0,a[1]]):null;e.save(),e.translate(t,0,r),e.scale(o||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,l=.86;for(let f=0;f<c;f++){let v=f>=c-2,h=f*2.399963+i()*.5,u=[Math.cos(h),0,Math.sin(h)],m=[-Math.sin(h),0,Math.cos(h)],d=f*.618%1,p=v?.06+i()*.06:.12+.62*d,g=1;if(s){let J=u[0]*s[0]+u[2]*s[2];g=.25+.75*I5(-.7,.5,J),p*=g}let x=v?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,w=v?1+i()*.2:.95+i()*.28,b=v?.055:.215+i()*.05,A=.04+i()*.05,T=[u[0]*A,l,u[2]*A],P=[T[0]+u[0]*Math.sin(p)*x*.92,T[1]+Math.cos(p)*x,T[2]+u[2]*Math.sin(p)*x*.92],C=[T[0]+u[0]*Math.sin(p*.5)*x*.45,T[1]+x*.5,T[2]+u[2]*Math.sin(p*.5)*x*.45];e.curMat=[4,0,0],e.tube([T,C,P],J=>.02-.008*J,8,7);let k=24,U=p*.9+.05,R=p+(v?.12:(.95+.45*d)*(.35+.65*g)),D=[P],q=[],B=P;for(let J=0;J<k;J++){let me=J/k,xe=U+(R-U)*me*me,Ce=[u[0]*Math.sin(xe),Math.cos(xe),u[2]*Math.sin(xe)];q.push(Ce),B=$s(B,Mn(Ce,w/k)),D.push(B)}q.push(q[q.length-1]);let K=J=>{let me=J*k,xe=Math.min(k-1,Math.floor(me)),Ce=me-xe;return $s(Mn(D[xe],1-Ce),Mn(D[xe+1],Ce))},te=J=>{let me=J*k,xe=Math.min(k,Math.floor(me)),Ce=Math.min(k,xe+1),He=me-xe;return qs($s(Mn(q[xe],1-He),Mn(q[Ce],He)))},re=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((J,me)=>{let xe=me*2-1,Ce=K(J),He=te(J),Ze=re*J,Ne=$s(Mn(m,Math.cos(Ze)),Mn(I1(He,m),Math.sin(Ze)));Ne=qs(R5(Ne,Mn(He,Ne[0]*He[0]+Ne[1]*He[1]+Ne[2]*He[2])));let Je=qs(I1(Ne,He)),Xe=b*Math.pow(Math.sin(Math.PI*Math.pow(J,.72)),.85),ct=.3*Xe*Math.abs(xe)+.012*Math.sin(J*40+xe*2)*Math.abs(xe)*(v?0:1),ye=-.1*Xe*xe*xe*xe*xe,ve=ct+ye;return[Ce[0]+Ne[0]*xe*Xe+Je[0]*ve,Ce[1]+Ne[1]*xe*Xe+Je[1]*ve,Ce[2]+Ne[2]*xe*Xe+Je[2]*ve]},14,8,{double:!0,mat:(J,me)=>[2,me*2-1,J]})}e.restore()}N1.exports={addFlutedColumn:N5,addStatue:G5,addPlant:D5}});var so=Q((zA,q1)=>{"use strict";var oe={xc:7,r:2.5,spring:4.7};oe.x0=oe.xc-oe.r;oe.x1=oe.xc+oe.r;oe.top=oe.spring+oe.r;var Qt=.06,vt=.1,G1=.08,Hs=oe.r,Us=[oe.x0+Hs/3,oe.x0+2*Hs/3,oe.xc+Hs/3,oe.xc+2*Hs/3],oa=.28,Qc=[.95,1.65,2.35,3.05,3.75],D1=[1.05,1.8],hi=[8,0,0],pr=[0,0,0];function Er(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function aa(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),f=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Bs(e,t,r,n,o,a,i=48,s=0,c=Math.PI){let l=(f,v,h)=>[oe.xc+v*Math.cos(f),oe.spring+v*Math.sin(f),h];for(let f=0;f<i;f++){let v=s+(c-s)*f/i,h=s+(c-s)*(f+1)/i,u=(v+h)/2;aa(e,l(v,t,o),l(h,t,o),l(h,r,o),l(v,r,o),[0,0,1],a),aa(e,l(v,r,n),l(h,r,n),l(h,t,n),l(v,t,n),[0,0,-1],a),aa(e,l(v,t,n),l(h,t,n),l(h,t,o),l(v,t,o),[-Math.cos(u),-Math.sin(u),0],a),aa(e,l(h,r,n),l(v,r,n),l(v,r,o),l(h,r,o),[Math.cos(u),Math.sin(u),0],a)}}function F5(e){let n=a=>[oe.xc+oe.r*Math.cos(a),oe.spring+oe.r*Math.sin(a)],o=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?oe.r/Math.abs(i):1/0,l=s>1e-6?(8-oe.spring)/s:1/0,f=Math.min(c,l);return[Math.min(oe.x1,Math.max(oe.x0,oe.xc+i*f)),Math.min(8,oe.spring+s*f)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),l=n(s),f=o(i),v=o(s);for(let[u,m]of[[.35,1],[-.35,-1]])aa(e,[c[0],c[1],u],[l[0],l[1],u],[v[0],v[1],u],[f[0],f[1],u],[0,0,m],pr);let h=(i+s)/2;aa(e,[c[0],c[1],-.35],[l[0],l[1],-.35],[l[0],l[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],pr)}}function q5(e){Er(e,-.35,0,-.35,oe.x0,8,.35,pr),Er(e,oe.x1,0,-.35,14+.35,8,.35,pr),F5(e),F1(e)}function F1(e){Er(e,oe.x0-.32,.3,.35,oe.x0,oe.spring,.35+.07,pr),Er(e,oe.x1,.3,.35,oe.x1+.32,oe.spring,.35+.07,pr),Er(e,oe.x0-.32-.05,0,.35,oe.x0,.3,.35+.07+.04,pr),Er(e,oe.x1,0,.35,oe.x1+.32+.05,.3,.35+.07+.04,pr),Er(e,oe.x0-.32-.06,oe.spring-.12,.35,oe.x0,oe.spring,.35+.07+.05,pr),Er(e,oe.x1,oe.spring-.12,.35,oe.x1+.32+.06,oe.spring,.35+.07+.05,pr),Bs(e,oe.r,oe.r+.32,.35,.35+.07,pr),Bs(e,oe.r+.32,oe.r+.32+.06,.35,.35+.07+.03,pr),Er(e,oe.xc-.22,oe.top-.08,.35,oe.xc+.22,oe.top+.32+.12,.35+.07+.06,pr)}function $5(e,t){t=t||"all";let r=t==="all",n=r||t==="fixed",o=-G1/2,a=G1/2,i=(h,u,m,d,p=0)=>Er(e,h-p,u,o,m+p,d,a,hi),s=h=>oe.spring+Math.sqrt(Math.max(0,oe.r*oe.r-(h-oe.xc)*(h-oe.xc))),c=t==="right"?oe.xc:oe.x0,l=t==="left"?oe.xc:oe.x1,f=h=>r||t==="left"&&h<oe.xc||t==="right"&&h>oe.xc,v=r?null:oe.spring-.06;if(n){i(oe.x0,0,oe.x0+vt,oe.spring),i(oe.x1-vt,0,oe.x1,oe.spring),Bs(e,oe.r-vt,oe.r,o,a,hi,64),i(oe.x0,0,oe.x1,.05),i(oe.x0,oe.spring-.06,oe.x1,oe.spring+.06);for(let h of D1)Bs(e,h-Qt/2,h+Qt/2,o,a,hi,48)}if(r){i(oe.x0,0,oe.x1,oa),i(oe.xc-vt/2,0,oe.xc+vt/2,oe.top-vt*.5);for(let h of Us)i(h-Qt/2,oa,h+Qt/2,s(h)-vt*.5);for(let h of Qc)i(oe.x0,h-Qt/2,oe.x1,h+Qt/2)}else if(t==="fixed"){i(oe.xc-vt/2,oe.spring+.06,oe.xc+vt/2,oe.top-vt*.5);for(let h of Us)i(h-Qt/2,oe.spring+.06,h+Qt/2,s(h)-vt*.5)}else{let h=t==="left"?oe.x0+vt:oe.x1-vt;i(Math.min(h,h+(t==="left"?vt*.8:-vt*.8)),.05,Math.max(h,h+(t==="left"?vt*.8:-vt*.8)),v),i(c,.05,l,oa),i(c,v-.07,l,v);let u=t==="left"?oe.xc-vt/2:oe.xc;i(u,.05,u+vt/2,v);for(let m of Us)f(m)&&i(m-Qt/2,oa,m+Qt/2,v-.07);for(let m of Qc)i(c,m-Qt/2,l,m+Qt/2)}for(let h of[-1,1]){let u=oe.xc+h*.16;f(u)&&(Er(e,u-.02,1.05,a,u+.02,1.13,a+.06,hi),Er(e,u-(h>0?0:.14),1.07,a+.05,u+(h>0?.14:0),1.11,a+.08,hi))}}function H5(e){e=e||"all";let t=[],r=0,{x0:n,x1:o,xc:a,r:i,spring:s}=oe;if(e!=="fixed"){let l=e==="right"?a:n,f=e==="left"?a:o;if(t.push([l,0,r],[f,0,r],[f,s,r],[l,0,r],[f,s,r],[l,s,r]),e!=="all")return t}let c=48;for(let l=0;l<c;l++){let f=Math.PI*l/c,v=Math.PI*(l+1)/c;t.push([a,s,r],[a+i*Math.cos(f),s+i*Math.sin(f),r],[a+i*Math.cos(v),s+i*Math.sin(v),r])}return t}var rt=e=>e.toFixed(4);function U5(){let e=Us.map(n=>`vb = max(vb, barCover(abs(q.x - ${rt(n)}), ${rt(Qt/2)}, soft));`).join(`
		`),t=Qc.map(n=>`hb = max(hb, barCover(abs(q.y - ${rt(n)}), ${rt(Qt/2)}, soft));`).join(`
		`),r=D1.map(n=>`ab = max(ab, barCover(abs(rr - ${rt(n)}), ${rt(Qt/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${rt(oe.x0)} - soft, ${rt(oe.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${rt(oe.x1)} - soft, ${rt(oe.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${rt(oe.xc)}, ${rt(oe.spring)}));
		float arch = q.y < ${rt(oe.spring)} ? 1.0 : 1.0 - smoothstep(${rt(oe.r)} - soft, ${rt(oe.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${rt(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${rt(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${rt(oe.xc)}, ${rt(oe.spring)}));
		float vb = barCover(abs(q.x - ${rt(oe.xc)}), ${rt(vt/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${rt(oe.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${rt(oa)} - soft, ${rt(oa)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${rt(oe.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${r}
		ab = q.y > ${rt(oe.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${rt(oe.x0+vt/2)}), ${rt(vt/2)}, soft),
			barCover(abs(q.x - ${rt(oe.x1-vt/2)}), ${rt(vt/2)}, soft));
		frame = q.y < ${rt(oe.spring)} ? frame : barCover(abs(rr - ${rt(oe.r-vt/2)}), ${rt(vt/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}q1.exports={addEntranceWall:q5,addSurround:F1,addFrames:$5,glassPanes:H5,doorLightGLSL:U5,DOOR:oe,WALL:.35}});var sa=Q((CA,V1)=>{"use strict";var lo=1.1583333333333334,fo=(13.05-8*.16)/9,Jc=lo+.16,el=fo+.16,an=14/2-7.75/2,Mr=15,ui=an+7.75,An=Mr+13.05,mr=.3,sn={y:8+.18,inset:.15},co={y:8+.36,inset:mr},tl=8+.2,js=8+.62,rl=8+.9,nl=.016,B1=.28,j1=.66,B5=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>r/t)})(),j5=[9,0,0],Ht=[10,0,0];function ia(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),f=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Zt(e,t,r,n,o,a,i){ia(e,[t,a,r],[n,a,r],[n,a,o],[t,a,o],[0,-1,0],i)}function Zc(e,t,r,n,o,a,i,s){ia(e,[t,a,r],[n,a,r],[n,i,r],[t,i,r],[0,0,1],s),ia(e,[n,a,o],[t,a,o],[t,i,o],[n,i,o],[0,0,-1],s),ia(e,[t,a,o],[t,a,r],[t,i,r],[t,i,o],[1,0,0],s),ia(e,[n,a,r],[n,a,o],[n,i,o],[n,i,r],[-1,0,0],s)}function $1(e,t,r,n,o){Zt(e,t[0],t[1],t[2],r[1],n,o),Zt(e,t[0],r[3],t[2],t[3],n,o),Zt(e,t[0],r[1],r[0],r[3],n,o),Zt(e,r[2],r[1],t[2],r[3],n,o)}var H1=e=>an+e*Jc,U1=e=>Mr+e*el;function V5(e,t,r=48){let n=[an-mr,Mr-mr,ui+mr,An+mr],o=(l,f)=>[l[0]+f,l[1]+f,l[2]-f,l[3]-f],a=o(n,sn.inset),i=o(n,co.inset);Zt(e,0,0,14,n[1],8,t),Zt(e,0,n[3],14,r,8,t),Zt(e,0,n[1],n[0],n[3],8,t),Zt(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],Ht),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,Ht),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],Ht),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],Ht),Zc(e,...n.slice(0,2),...n.slice(2),8,sn.y,Ht),$1(e,n,a,sn.y,Ht),Zc(e,...a.slice(0,2),...a.slice(2),sn.y,co.y,Ht),$1(e,a,i,co.y,Ht);for(let l=1;l<6;l++){let f=H1(l)-.16;e.box(f,tl,Mr,f+.16,co.y,An,Ht)}for(let l=1;l<9;l++){let f=U1(l)-.16;e.box(an,tl,f,ui,co.y,f+.16,Ht)}for(let l=0;l<9;l++)for(let f=0;f<6;f++){let v=H1(f),h=U1(l);Zc(e,v,h,v+lo,h+fo,co.y,rl,Ht),Zt(e,v,h,v+lo,h+fo,rl,j5),W5(e,v+lo/2,h+fo/2,lo/2,fo/2)}}function W5(e,t,r,n,o){let a=js,i=nl;Zt(e,t-n,r-i,t+n,r+i,a,Ht),Zt(e,t-i,r-o,t+i,r+o,a,Ht);for(let s of[1,-1]){let c=Math.hypot(n,o),l=n/c,f=s*o/c,v=-f*i,h=l*i;ia(e,[t-l*c+v,a,r-f*c+h],[t+l*c+v,a,r+f*c+h],[t+l*c-v,a,r+f*c-h],[t-l*c-v,a,r-f*c-h],[0,-1,0],Ht)}for(let s of[B1,j1]){let c=s*n,l=s*o;Zt(e,t-c-i,r-l-i,t+c+i,r-l+i,a,Ht),Zt(e,t-c-i,r+l-i,t+c+i,r+l+i,a,Ht),Zt(e,t-c-i,r-l+i,t-c+i,r+l-i,a,Ht),Zt(e,t+c-i,r-l+i,t+c+i,r+l-i,a,Ht)}}var Ue=e=>e.toFixed(4);function X5(){return`
	const vec3 SKY_SUN = vec3(${B5.map(Ue).join(", ")});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Ue(an)}, ${Ue(Mr)});
		vec2 pitch = vec2(${Ue(Jc)}, ${Ue(el)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Ue(5)} || cell.y > ${Ue(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Ue(lo)}, ${Ue(fo)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Ue(nl)} - soft, ${Ue(nl)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Ue(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Ue(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Ue(sn.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Ue(tl)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Ue(co.y)} - p.y) / L.y)).xz;
		float tG = (${Ue(js)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Ue(rl)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Ue(an-mr)}, ${Ue(Mr-mr)}, ${Ue(ui+mr)}, ${Ue(An+mr)}), soft)
		           * rectOpen(q1, vec4(${Ue(an-mr+sn.inset)}, ${Ue(Mr-mr+sn.inset)}, ${Ue(ui+mr-sn.inset)}, ${Ue(An+mr-sn.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Ue(an)}, ${Ue(Mr)});
		vec2 pitch = vec2(${Ue(Jc)}, ${Ue(el)});
		vec2 paneHalf = vec2(${Ue(lo/2)}, ${Ue(fo/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Ue(B1)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Ue(j1)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Ue(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Ue(js)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Ue(an)}, ${Ue(Mr)}, ${Ue(ui)}, ${Ue(An)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Ue(Mr-3)}, ${Ue(Mr+2)}, p.z)
		        * (1.0 - smoothstep(${Ue(An-2)}, ${Ue(An+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Ue(7.75/2)}, ${Ue(14/2)}, abs(p.x - ${Ue(14/2)}));
		return z * x;
	}`}V1.exports={addSkylight:V5,skylightGLSL:X5,Z_START:Mr,Z_END:An,GLASS_Y:js,HEIGHT:8}});var Jt=Q((RA,Q1)=>{"use strict";var la=so(),sl=8,gt=.35,ue={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:sl},W1=(ue.z1-ue.z0)/2,ol=ue.crown-ue.spring,il=(ol*ol+W1*W1)/(2*ol),cl=ue.crown-il;function ca(e){let t=e-ue.zc;return cl+Math.sqrt(Math.max(0,il*il-t*t))}var Ge={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Gr=Array.from({length:Ge.count},(e,t)=>Ge.first+t*Ge.pitch),Y1=Gr.slice(1).map(e=>e-Ge.pitch/2),Y5=[Gr[0],Gr[2],Gr[4]],Ws=[Gr[1],Gr[3]],sr={r:1.3,sill:.62,spring:3.3},at=[0,0,0],di=[11,0,0],Tn=[10,0,0],pi=[8,0,0];function Dt(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),f=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,f)}function cr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function mi(e,t){let{u0:r,u1:n,w0:o,w1:a,top:i,holes:s,mat:c}=t,l=new Set([r,n]);for(let d of s){l.add(d.u0),l.add(d.u1);let p=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let g=1;g<p;g++)l.add(d.u0+(d.u1-d.u0)*g/p)}for(let d of t.cuts||[])l.add(d);let f=t.topStep||.5;for(let d=r;d<n;d+=f)l.add(d);let v=[...l].filter(d=>d>=r-1e-9&&d<=n+1e-9).sort((d,p)=>d-p),h=(d,p)=>d.bot?d.bot(p):d.bottom,u=(d,p)=>{let g=i(d),x=p.map(A=>[Math.max(0,h(A,d)),Math.min(A.head(d),g)]).filter(A=>A[1]>A[0]).sort((A,T)=>A[0]-T[0]),w=[],b=0;for(let A of x)A[0]>b+1e-6&&w.push([b,A[0]]),b=Math.max(b,A[1]);return g>b+1e-6&&w.push([b,g]),w},m=(d,p,g)=>[d,p,g];for(let d=0;d<v.length-1;d++){let p=v[d],g=v[d+1],x=(p+g)/2,w=s.filter(k=>x>k.u0&&x<k.u1),b=w.length?Math.max(p,Math.max(...w.map(k=>k.u0))+1e-7):p,A=w.length?Math.min(g,Math.min(...w.map(k=>k.u1))-1e-7):g,T=u(b,w),P=u(A,w),C=Math.min(T.length,P.length);for(let k=0;k<C;k++){let[U,R]=T[k],[D,q]=P[k];R-U<1e-6&&q-D<1e-6||(Dt(e,m(p,U,a),m(g,D,a),m(g,q,a),m(p,R,a),[0,0,1],c),t.frontOnly||Dt(e,m(g,D,o),m(p,U,o),m(p,R,o),m(g,q,o),[0,0,-1],c))}}t.noEnds||(Dt(e,m(r,0,o),m(r,0,a),m(r,i(r),a),m(r,i(r),o),[-1,0,0],c),Dt(e,m(n,0,a),m(n,0,o),m(n,i(n),o),m(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let p=d.mat||t.revealMat||c,g=Math.max(0,h(d,d.u0+1e-7)),x=Math.max(0,h(d,d.u1-1e-7)),w=Math.min(d.head(d.u0+1e-7),i(d.u0)),b=Math.min(d.head(d.u1-1e-7),i(d.u1));w>g+1e-6&&Dt(e,m(d.u0,g,a),m(d.u0,g,o),m(d.u0,w,o),m(d.u0,w,a),[1,0,0],p),b>x+1e-6&&Dt(e,m(d.u1,x,o),m(d.u1,x,a),m(d.u1,b,a),m(d.u1,b,o),[-1,0,0],p);let A=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let T=0;T<A;T++){let P=d.u0+(d.u1-d.u0)*T/A,C=d.u0+(d.u1-d.u0)*(T+1)/A,k=Math.max(P,d.u0+1e-7),U=Math.min(C,d.u1-1e-7),R=Math.min(d.head(k),i(P)),D=Math.min(d.head(U),i(C));if(!(R>=i(P)-1e-6&&D>=i(C)-1e-6)){let K=C-P,te=D-R,re=Math.hypot(K,te)||1;Dt(e,m(P,R,o),m(C,D,o),m(C,D,a),m(P,R,a),[te/re,-K/re,0],p)}let q=h(d,k),B=h(d,U);if(q>1e-6||B>1e-6){let K=C-P,te=B-q,re=Math.hypot(K,te)||1;Dt(e,m(C,B,o),m(P,q,o),m(P,q,a),m(C,B,a),[-te/re,K/re,0],p)}}}}var al=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function K5(e,t){let r=sr.r,n=sr.sill,o=sr.spring,a=ue.z0,i=24,s=(u,m,d)=>[t+Math.cos(u)*m,d,a-Math.sin(u)*m];for(let u=0;u<i;u++){let m=Math.PI*u/i,d=Math.PI*(u+1)/i,p=[-Math.cos(m),0,Math.sin(m)],g=[-Math.cos(d),0,Math.sin(d)],x=[e.vert(s(m,r,n),p,at),e.vert(s(d,r,n),g,at),e.vert(s(d,r,o),g,at),e.vert(s(m,r,o),p,at)];e.tri(x[0],x[1],x[2]),e.tri(x[0],x[2],x[3])}let c=12,l=(u,m)=>[t+Math.cos(u)*Math.cos(m)*r,o+Math.sin(m)*r,a-Math.sin(u)*Math.cos(m)*r],f=(u,m)=>[-Math.cos(u)*Math.cos(m),-Math.sin(m),Math.sin(u)*Math.cos(m)];for(let u=0;u<i;u++)for(let m=0;m<c;m++){let d=Math.PI*u/i,p=Math.PI*(u+1)/i,g=Math.PI/2*m/c,x=Math.PI/2*(m+1)/c,w=[e.vert(l(d,g),f(d,g),Tn),e.vert(l(p,g),f(p,g),Tn),e.vert(l(p,x),f(p,x),Tn),e.vert(l(d,x),f(d,x),Tn)];e.tri(w[0],w[1],w[2]),e.tri(w[0],w[2],w[3])}for(let u=1;u<8;u++){let m=Math.PI*u/8,d=[];for(let p=0;p<=10;p++){let g=Math.PI/2*p/10*.97;d.push(l(m,g).map((x,w)=>x-f(m,g)[w]*.02))}e.tube(d,p=>.035*(1-p*.6),12,6,{mat:()=>Tn})}let v=e.vert([t,n,a],[0,1,0],at);for(let u=0;u<i;u++){let m=Math.PI*u/i,d=Math.PI*(u+1)/i;e.tri(v,e.vert(s(m,r,n),[0,1,0],at),e.vert(s(d,r,n),[0,1,0],at))}cr(e,t-r-.12,n-.1,a,t+r+.12,n+.02,a+.12,at),cr(e,t-r-.16,n-.2,a,t+r+.16,n-.1,a+.07,at);let h=.16;for(let u=0;u<i;u++){let m=Math.PI*u/i,d=Math.PI*(u+1)/i,p=(g,x,w)=>[t+Math.cos(g)*x,o+Math.sin(g)*x,w];Dt(e,p(m,r,a+.05),p(d,r,a+.05),p(d,r+h,a+.05),p(m,r+h,a+.05),[0,0,1],at),Dt(e,p(m,r+h,a),p(d,r+h,a),p(d,r+h,a+.05),p(m,r+h,a+.05),[Math.cos((m+d)/2),Math.sin((m+d)/2),0],at),Dt(e,p(m,r,a),p(d,r,a),p(d,r,a+.05),p(m,r,a+.05),[-Math.cos((m+d)/2),-Math.sin((m+d)/2),0],at)}for(let u of[-1,1]){let m=t+u*r,d=t+u*(r+h);cr(e,m,n,a,d,o,a+.05,at),cr(e,m-u*.02,o-.12,a,d+u*.06,o,a+.09,at)}cr(e,t-.11,o+r-.04,a,t+.11,o+r+h+.1,a+.09,at),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>at})}var Q5=sr.sill+.4,Z5=ue.z0-.62;function J5(e){Dt(e,[14,0,ue.z0-gt],[ue.x1+gt,0,ue.z0-gt],[ue.x1+gt,0,ue.z1+gt],[14,0,ue.z1+gt],[0,1,0],at),e.curMat=di,mi(e,{u0:14+gt,u1:ue.x1+2*gt,w0:ue.z0-2*gt,w1:ue.z0,top:()=>ue.spring,holes:Ws.map(l=>({u0:l-sr.r,u1:l+sr.r,bottom:sr.sill,head:al(l,sr.r,sr.spring),noReveal:!0})),mat:di,cuts:[ue.x1]});for(let l of Ws)K5(e,l);e.save(),e.translate(0,0,ue.z1),e.rotateY(Math.PI),e.translate(-(ue.x1+2*gt),0,-2*gt);let t=l=>ue.x1+2*gt-l;mi(e,{u0:t(ue.x1+2*gt),u1:t(13.65),w0:0,w1:2*gt,top:()=>ue.spring,holes:Gr.map(l=>({u0:t(l+Ge.halfW),u1:t(l-Ge.halfW),bottom:Ge.sill,head:al(t(l),Ge.halfW,Ge.spring)})),mat:di,revealMat:at}),e.restore(),e.save(),e.translate(ue.x1,0,0),e.rotateY(-Math.PI/2);let r=la.DOOR,n=ue.zc,o=r.r;mi(e,{u0:ue.z0-2*gt,u1:ue.z1+2*gt,w0:-2*gt,w1:0,top:l=>l<ue.z0||l>ue.z1?ue.spring:ca(l),topStep:.15,holes:[{u0:n-o,u1:n+o,bottom:0,head:al(n,o,r.spring)}],mat:di,revealMat:at}),e.restore(),e.save(),e.translate(14+gt,0,0),e.rotateY(-Math.PI/2),mi(e,{u0:ue.z0,u1:ue.z1,w0:-0,w1:2*gt,top:()=>sl,topStep:.15,holes:[{u0:ue.z0,u1:ue.z1,bottom:0,head:l=>ca(l)}],mat:di,revealMat:at}),e.restore();let a=14+gt,i=Math.ceil((ue.x1-a)/1),s=28,c=[];for(let l=0;l<=i;l++){let f=a+(ue.x1-a)*l/i,v=[];for(let h=0;h<=s;h++){let u=ue.z0+(ue.z1-ue.z0)*h/s,m=ca(u),d=[0,cl-m,ue.zc-u],p=Math.hypot(d[1],d[2]);v.push(e.vert([f,m,u],[0,d[1]/p,d[2]/p],Tn))}c.push(v)}for(let l=0;l<i;l++)for(let f=0;f<s;f++)e.tri(c[l][f],c[l+1][f],c[l][f+1]),e.tri(c[l+1][f],c[l+1][f+1],c[l][f+1])}function X1(e,t,r,n){let a=[];for(let i=0;i<=32;i++){let s=ue.z0+(ue.z1-ue.z0)*i/32,c=ca(s),l=cl-c,f=ue.zc-s,v=Math.hypot(l,f),h=[c+l/v*n,s+f/v*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,l/v,f/v]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Dt(e,[t-r,s.iy,s.iz],[t+r,s.iy,s.iz],[t+r,c.iy,c.iz],[t-r,c.iy,c.iz],s.n,at),Dt(e,[t-r,s.y,s.z],[t-r,s.iy,s.iz],[t-r,c.iy,c.iz],[t-r,c.y,c.z],[-1,0,0],at),Dt(e,[t+r,s.iy,s.iz],[t+r,s.y,s.z],[t+r,c.y,c.z],[t+r,c.iy,c.iz],[1,0,0],at)}}function Vs(e,t,r,n){let i=r,s=r+n*.16;cr(e,t-.28,0,i,t+.28,ue.spring-.3,s,at),cr(e,t-.28-.06,0,i,t+.28+.06,.32,r+n*(.16+.05),at),cr(e,t-.28-.05,ue.spring-.3,i,t+.28+.05,ue.spring-.1,r+n*(.16+.05),at),cr(e,t-.28-.1,ue.spring-.1,i,t+.28+.1,ue.spring,r+n*(.16+.1),at)}function ew(e,t){let r=ca(ue.zc),n=[[0,r-.13,1],[.05,r-.125],[.12,r-.1],[.16,r-.06,1],[.22,r-.05],[.3,r-.075],[.4,r-.06],[.48,r-.03,1],[.55,r-.035],[.7,r-.025],[.82,r-.012,1],[.95,r+.03]];e.lathe(n,t,ue.zc,48,{mat:()=>Tn});for(let o=0;o<8;o++){let a=o*Math.PI/4,i=t+Math.cos(a)*.32,s=ue.zc+Math.sin(a)*.32;e.save(),e.translate(i,r-.07,s),e.rotateY(-a),e.curMat=Tn,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function tw(e){e.curMat=at;for(let[t,r]of[[ue.z0,1],[ue.z1,-1]])cr(e,14.35,ue.spring-.12,t,ue.x1,ue.spring,t+r*.1,at),cr(e,14.35,ue.spring-.04,t,ue.x1,ue.spring+.05,t+r*.18,at);for(let[t,r]of[[ue.z0,1],[ue.z1,-1]])cr(e,14.35,0,t,ue.x1,.42,t+r*.12,at),cr(e,14.35,.42,t,ue.x1,.5,t+r*.07,at);for(let t of Y1)X1(e,t,.24,.16),Vs(e,t,ue.z0,1),Vs(e,t,ue.z1,-1);for(let t of[14.35+.28,ue.x1-.28])X1(e,t,.28,.22),Vs(e,t,ue.z0,1),Vs(e,t,ue.z1,-1);for(let t of Gr)ew(e,t)}function rw(e){let t=ue.z1+gt,r=t-.04,n=t+.04,o=(s,c,l,f)=>cr(e,s,c,r,l,f,n,pi),a=Ge.halfW,i=(s,c,l,f,v,h)=>{let u=(m,d,p)=>[s+d*Math.cos(m),Ge.spring+d*Math.sin(m),p];for(let m=0;m<h;m++){let d=f+(v-f)*m/h,p=f+(v-f)*(m+1)/h;Dt(e,u(d,c,r),u(p,c,r),u(p,l,r),u(d,l,r),[0,0,-1],pi),Dt(e,u(d,l,n),u(p,l,n),u(p,c,n),u(d,c,n),[0,0,1],pi)}};for(let s of Gr){let c=s-a,l=s+a;o(c,Ge.sill,c+.07,Ge.spring),o(l-.07,Ge.sill,l,Ge.spring),o(c,Ge.sill,l,Ge.sill+.07),o(c,Ge.spring-.04,l,Ge.spring+.04);for(let v of[-.5,0,.5])o(s+v*a-.022,Ge.sill,s+v*a+.022,Ge.spring);let f=6;for(let v=1;v<f;v++){let h=Ge.sill+(Ge.spring-Ge.sill)*v/f;o(c,h-.02,l,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let v=1;v<6;v++){let h=Math.PI*v/6,u=Math.cos(h),m=Math.sin(h),d=.02,p=(g,x)=>[s+u*g-m*d*x,Ge.spring+m*g+u*d*x];Dt(e,[...p(.44,-1),r],[...p(a-.05,-1),r],[...p(a-.05,1),r],[...p(.44,1),r],[0,0,-1],pi),Dt(e,[...p(.44,1),n],[...p(a-.05,1),n],[...p(a-.05,-1),n],[...p(.44,-1),n],[0,0,1],pi)}}}function nw(){let e=[],t=ue.z1+gt;for(let r of Gr){let n=r-Ge.halfW,o=r+Ge.halfW;e.push([n,Ge.sill,t],[o,Ge.sill,t],[o,Ge.spring,t],[n,Ge.sill,t],[o,Ge.spring,t],[n,Ge.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([r,Ge.spring,t],[r+Ge.halfW*Math.cos(i),Ge.spring+Ge.halfW*Math.sin(i),t],[r+Ge.halfW*Math.cos(s),Ge.spring+Ge.halfW*Math.sin(s),t])}}return e}function K1(e,t){e.save(),e.translate(ue.x1+gt,0,ue.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function ow(e){K1(e,()=>{la.addSurround(e),la.addFrames(e,"fixed")})}function aw(e){return la.glassPanes(e||"fixed").map(([r,n,o])=>[ue.x1+gt-o,n,ue.zc-7+r])}function iw(e){J5(e),tw(e),rw(e),ow(e),e.curMat=[0,0,0]}var sw={x:ue.x1+gt,zLo:ue.zc-la.DOOR.r,zHi:ue.zc+la.DOOR.r},Ye=e=>e.toFixed(4);function cw(){return`
	const vec3 WIN_SKY = vec3(0.0, 0.58, 0.81);

	float winBar(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the window wall is at (x, y) on its plane, 0..1
	float winOpen(vec2 q, float soft) {
		float k = floor((q.x - ${Ye(Ge.first)}) / ${Ye(Ge.pitch)} + 0.5);
		if (k < 0.0 || k > ${Ye(Ge.count-1)}) return 0.0;
		float dx = q.x - (${Ye(Ge.first)} + k * ${Ye(Ge.pitch)});
		float side = 1.0 - smoothstep(${Ye(Ge.halfW)} - soft, ${Ye(Ge.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Ye(Ge.sill)} - soft, ${Ye(Ge.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Ye(Ge.spring)}));
		float head = q.y < ${Ye(Ge.spring)} ? 1.0 : 1.0 - smoothstep(${Ye(Ge.halfW)} - soft, ${Ye(Ge.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Ye(Ge.halfW*.5)}), 0.022, soft));
		float rowH = ${Ye((Ge.spring-Ge.sill)/6)};
		float ry = (q.y - ${Ye(Ge.sill)}) / rowH;
		cover = max(cover, q.y < ${Ye(Ge.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Ye(Ge.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Ye(ue.x0)} || p.z < ${Ye(ue.z0-.1)} || p.z > ${Ye(ue.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Ye(ue.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Ye(ue.z1+2*gt)} - p.z) / WIN_SKY.z;
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
		${Ws.map(e=>`{ float d = abs(p.x - ${Ye(e)}); if (d < best) { best = d; lamp = vec3(${Ye(e)}, ${Ye(sr.spring+.55)}, ${Ye(ue.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Ye(ue.z0+1.6)} || p.z < ${Ye(ue.z0-sr.r-.1)} || p.x < ${Ye(ue.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Ye(sr.r)}, ${Ye(sr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Ye(ue.x0-1)}) return 0.0;
		float inC = smoothstep(${Ye(ue.z0-1.5)}, ${Ye(ue.z0)}, p.z) * smoothstep(${Ye(ue.x0-1)}, ${Ye(ue.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Ye(ue.z0)}, ${Ye(ue.z1)}, p.z);
		return inC * near;
	}`}Q1.exports={wallWithHoles:mi,windowLightGLSL:cw,addWing:iw,windowGlass:nw,farDoorGlass:aw,atFarDoor:K1,FAR_DOOR:sw,vaultY:ca,C:ue,NICHE_X:Ws,NICHE:sr,NICHE_PLINTH_TOP:Q5,NICHE_STATUE_Z:Z5,WIN:Ge,winCentres:Gr,piers:Y1,PAINTING_X:Y5,HEIGHT:sl}});var Dr=Q((IA,ep)=>{"use strict";var ll=Jt(),ut=8,ua=.35,ho=14,ha=4,Me={x0:ho+ua,x1:ho+ua+2*ha,z0:5.9-ha,z1:5.9+ha,zc:5.9,cx:ho+ua+ha,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:ut},oculus:3.3};Me.domeTop=Me.dome.base+Me.dome.r;var da={spokes:16,ringE:[.42,.95],bar:.035},Pt={sxz:1.32,sy:1.6,yaw:.6};Pt.crownC=[Me.cx,.4+3.4*Pt.sy,Me.zc];Pt.crownR=[2.3*Pt.sxz,1.9*Pt.sy,2.3*Pt.sxz];Pt.trunkR=.26*Pt.sxz;Pt.trunkTop=.4+2.2*Pt.sy;var Z1={inner:1.05,outer:1.62,seat:.48,soil:.4},Ks=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(r=>r/t)})(),Ft=[0,0,0],fa=[11,0,0],Xs=[10,0,0],Ys=[9,0,0],lw=[5,0,0],fl=[3,0,0];function cn(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),f=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,f)}function er(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}var fw=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function hw(e){e.save(),e.translate(ho+ua,0,0),e.rotateY(-Math.PI/2),ll.wallWithHoles(e,{u0:0,u1:ll.C.z0,w0:0,w1:2*ua,top:()=>ut,holes:[{u0:Me.zc-Me.arch.r,u1:Me.zc+Me.arch.r,bottom:0,head:fw(Me.zc,Me.arch.r,Me.arch.spring),step:.05}],mat:fa,revealMat:Ft,topStep:1}),e.restore();let t=ho-ua;for(let[i,s]of[[0,Me.zc-Me.arch.r],[Me.zc+Me.arch.r,ll.C.z0]])er(e,t-.12,0,i,t,.42,s,Ft),er(e,t-.07,.42,i,t,.5,s,Ft);let r=t,n=.24,o=40,a=(i,s,c)=>[c,Me.arch.spring+Math.sin(i)*s,Me.zc+Math.cos(i)*s];for(let i=0;i<o;i++){let s=Math.PI*i/o,c=Math.PI*(i+1)/o;cn(e,a(s,Me.arch.r,r-.07),a(c,Me.arch.r,r-.07),a(c,Me.arch.r+n,r-.07),a(s,Me.arch.r+n,r-.07),[-1,0,0],Ft),cn(e,a(s,Me.arch.r+n,r),a(c,Me.arch.r+n,r),a(c,Me.arch.r+n,r-.07),a(s,Me.arch.r+n,r-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Ft),cn(e,a(s,Me.arch.r,r),a(c,Me.arch.r,r),a(c,Me.arch.r,r-.07),a(s,Me.arch.r,r-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Ft)}er(e,r-.12,Me.arch.spring+Me.arch.r-.06,Me.zc-.17,r,Me.arch.spring+Me.arch.r+n+.16,Me.zc+.17,Ft);for(let i of[-1,1]){let s=Me.zc+i*Me.arch.r,c=Me.zc+i*(Me.arch.r+n);er(e,r-.07,0,s,r,Me.arch.spring,c,Ft),er(e,r-.13,Me.arch.spring-.16,s-i*.03,r,Me.arch.spring,c+i*.08,Ft),er(e,r-.12,0,s-i*.03,r,.5,c+i*.06,Ft)}}function uw(e){let{x0:t,x1:r,z0:n,z1:o}=Me;cn(e,[ho,0,n],[r,0,n],[r,0,o],[ho,0,o],[0,1,0],Ft),e.curMat=fa,cn(e,[r,0,n],[r,0,o],[r,ut,o],[r,ut,n],[-1,0,0],fa),cn(e,[t,0,n],[r,0,n],[r,ut,n],[t,ut,n],[0,0,1],fa),cn(e,[r,0,o],[t,0,o],[t,ut,o],[r,ut,o],[0,0,-1],fa),cn(e,[t,0,o],[t,0,n],[t,ut,n],[t,ut,o],[1,0,0],fa),er(e,r-.12,0,n,r,.42,o,Ft),er(e,t,0,n,r,.42,n+.12,Ft),er(e,t,0,o-.12,r,.42,o,Ft),er(e,r-.2,ut-.3,n,r,ut,o,Ft),er(e,t,ut-.3,n,r,ut,n+.2,Ft),er(e,t,ut-.3,o-.2,r,ut,o,Ft),er(e,t,ut-.3,n,t+.2,ut,o,Ft);let a=Me.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let x=Math.PI*2*g/i;s.push([Me.cx+Math.cos(x)*a,Me.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),w=Math.abs(Math.sin(g));return Math.min(ha/Math.max(x,1e-6),ha/Math.max(w,1e-6))};for(let g=0;g<i;g++){let x=Math.PI*2*g/i,w=Math.PI*2*(g+1)/i,b=c(x),A=c(w),T=[Me.cx+Math.cos(x)*b,ut,Me.zc+Math.sin(x)*b],P=[Me.cx+Math.cos(w)*A,ut,Me.zc+Math.sin(w)*A];cn(e,[s[g][0],ut,s[g][1]],[s[g+1][0],ut,s[g+1][1]],P,T,[0,-1,0],Xs)}e.lathe([[a+.02,ut-.18,1],[a-.12,ut-.18,1],[a-.12,ut-.06,1],[a-.05,ut,1],[a,ut+.02]],Me.cx,Me.zc,i,{mat:()=>Ft});let l=16,f=(g,x,w)=>[Me.cx+Math.cos(g)*Math.cos(x)*w,Me.dome.base+Math.sin(x)*w,Me.zc+Math.sin(g)*Math.cos(x)*w],v=Math.PI/2;for(let g=0;g<i;g++)for(let x=0;x<l;x++){let w=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,A=v*x/l,T=v*(x+1)/l,P=(k,U)=>[-Math.cos(k)*Math.cos(U),-Math.sin(U),-Math.sin(k)*Math.cos(U)],C=[e.vert(f(w,A,a),P(w,A),Ys),e.vert(f(b,A,a),P(b,A),Ys),e.vert(f(b,T,a),P(b,T),Ys),e.vert(f(w,T,a),P(w,T),Ys)];e.tri(C[0],C[1],C[2]),e.tri(C[0],C[2],C[3])}for(let g=0;g<da.spokes;g++){let x=Math.PI*2*g/da.spokes,w=[];for(let b=0;b<=14;b++)w.push(f(x,(v-.06)*b/14,a-.04));e.tube(w,()=>.04,20,6,{mat:()=>Xs})}for(let g of da.ringE){let x=Math.cos(g)*(a-.04),w=Me.dome.base+Math.sin(g)*(a-.04),b=[];for(let A=0;A<=72;A++){let T=Math.PI*2*A/72;b.push([Me.cx+Math.cos(T)*x,w,Me.zc+Math.sin(T)*x])}e.tube(b,()=>.035,72,6,{mat:()=>Xs})}e.ellipsoid([Me.cx,Me.dome.base+a-.06,Me.zc],[.16,.08,.16],6,12,{mat:()=>Xs});let h=.46,u=.55,m=.12,d=(g,x,w,b)=>{er(e,g,h-.08,x,w,h,b,fl);let A=w-g>b-x?[g+.25,w-.25]:[g+.06,w-.06],T=w-g>b-x?[x+.06,b-.06]:[x+.25,b-.25];er(e,A[0],0,T[0],A[1],h-.08,T[1],fl)};d(r-m-u,n+1.1,r-m,o-1.1),d(t+1,n+m,r-1.1,n+m+u),d(t+1,o-m-u,r-1.1,o-m);let p=Z1;e.lathe([[p.outer,0,1],[p.outer,p.seat-.1,1],[p.outer+.07,p.seat-.07,1],[p.outer+.07,p.seat,1],[p.inner-.05,p.seat,1],[p.inner-.05,p.seat-.06,1],[p.inner,p.seat-.08,1],[p.inner,p.soil]],Me.cx,Me.zc,64,{mat:()=>fl}),e.lathe([[p.inner,p.soil,1],[0,p.soil+.03]],Me.cx,Me.zc,48,{mat:()=>lw})}function dw(e){hw(e),uw(e),e.curMat=[0,0,0]}var it=e=>e.toFixed(4);function J1(){let e=Me.dome.r,t=da.ringE.map(r=>Math.cos(r)*e);return`
	const vec3 SHAFT = vec3(${it(Ks[0])}, ${it(Ks[1])}, ${it(Ks[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${it(Me.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${it(Me.cx)}, ${it(Me.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${it(e-.15)} - soft, ${it(e-.15)} + soft, d);
		float hw = ${it(da.bar)};
		float cover = 0.0;
		${t.map(r=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${it(r)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${it(Math.PI*2/da.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${it(Pt.crownC[0])}, ${it(Pt.crownC[1])}, ${it(Pt.crownC[2])});
		vec3 r = vec3(${it(Pt.crownR[0])}, ${it(Pt.crownR[1])}, ${it(Pt.crownR[2])});
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
		float tt = (${it(Pt.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${it(Me.cx)}, ${it(Me.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${it(Pt.trunkR*.7)}, ${it(Pt.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function pw(){return`
	${J1()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${it(Me.x0-.75)} || p.z < ${it(Me.z0-.5)} || p.z > ${it(Me.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${it(Me.x0-1.5)} || p.z < ${it(Me.z0-1.5)} || p.z > ${it(Me.z1+1.5)}) return 0.0;
		float inside = smoothstep(${it(Me.x0-1.2)}, ${it(Me.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${it(Me.cx)}, ${it(Me.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}ep.exports={addAlcove:dw,alcoveLightGLSL:pw,oculusGLSL:J1,A:Me,BENCH:Z1,SHAFT:Ks,TREE:Pt}});var fp=Q((PA,lp)=>{"use strict";var mw=io(),{addFlutedColumn:tp,addStatue:vw,addPlant:gw}=O1(),rp=so(),xw=sa(),Fr=Jt(),yw=Dr(),Ke=14,Et=Fr.C.hallEnd+.35,ft=8,st=.35,hl=1.15,ul=1.15,dl=[18,29,40],bw=[[[0,0],[0,Et]],[[Ke,Et],[Ke,0]],[[0,0],[Ke,0]],[[Ke,Et],[0,Et]]],ip=[];for(let e of dl)for(let t of[1.25,Ke-1.25]){let r=hl/2,n=ul/2;ip.push([[t-r,e-n],[t+r,e-n]],[[t+r,e-n],[t+r,e+n]],[[t+r,e+n],[t-r,e+n]],[[t-r,e+n],[t-r,e-n]])}var Qs=12,sp=2.95,cp=.62,e0=sp+cp,Zs=[{file:"venus.bin",x:1.85,z:Et-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Ke-2.1,z:Et-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Fr.NICHE_X[0],z:Fr.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Fr.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Fr.NICHE_X[1],z:Fr.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Fr.NICHE_PLINTH_TOP,mat:3}],ww={x0:st,x1:3.15,z0:3.6,z1:8.2,top:1},np=.8,t0=1.17,gi=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{gi.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),gi.push({x:Ke-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function pl(e,t,r,n){return[[[e-r,t-n],[e+r,t-n]],[[e+r,t-n],[e+r,t+n]],[[e+r,t+n],[e-r,t+n]],[[e-r,t+n],[e-r,t-n]]]}var r0=[];for(let e of[-1,1])r0.push(...pl(Ke/2+e*e0,Qs,.85,.85));for(let e of Zs.filter(t=>t.pedestal))r0.push(...pl(e.x,e.z,t0*1.1,t0*1.1));for(let e of gi)r0.push(...pl(e.x,e.z,.42,.42));var _w=bw.concat(ip,r0);function Ew(e){let r=new Map,n=(o,a,i)=>{let s=o+":"+a;r.has(s)||r.set(s,[]);let c=r.get(s);c.includes(i)||c.push(i)};for(let o of e){let a=Math.floor(Math.min(o[0][0],o[1][0])/4)-1,i=Math.floor(Math.max(o[0][0],o[1][0])/4)+1,s=Math.floor(Math.min(o[0][1],o[1][1])/4)-1,c=Math.floor(Math.max(o[0][1],o[1][1])/4)+1;for(let l=a;l<=i;l++)for(let f=s;f<=c;f++)n(l,f,o)}return{get(o,a){let i=Math.floor(o/4),s=Math.floor(a/4),c=[];for(let l=-1;l<=1;l++)for(let f=-1;f<=1;f++){let v=r.get(i+l+":"+(s+f));v&&c.push(...v)}return[...new Set(c)]}}}var Js=[],St={curMat:[0,0,0]};function ml(e,t,r,n,o,a,i){let s=e.length/3;e.push(...r,...n,...o,...a),t.push(...i,...i,...i,...i);let c=St.curMat;return Js.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function et(e,t,r,n,o,a,i,s,c){let l=(f,v,h,u,m)=>{r.push(...ml(e,t,f,v,h,u,m))};l([n,o,a],[i,o,a],[n,s,a],[i,s,a],[0,0,-1]),l([i,o,c],[n,o,c],[i,s,c],[n,s,c],[0,0,1]),l([n,o,c],[n,o,a],[n,s,c],[n,s,a],[-1,0,0]),l([i,o,a],[i,o,c],[i,s,a],[i,s,c],[1,0,0]),l([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),l([n,o,c],[i,o,c],[n,o,a],[i,o,a],[0,-1,0])}function pa(e,t,r,n,o){let a=St,i=a.vert(e,o),s=a.vert(t,o),c=a.vert(r,o),l=a.vert(n,o);a.tri(i,s,c),a.tri(s,l,c)}function op(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,f=Math.cos(c),v=Math.sin(c),h=Math.cos(l),u=Math.sin(l),m=[e+r*f,t+r*v],d=[e+r*h,t+r*u],p=[e+n*f,t+n*v],g=[e+n*h,t+n*u];pa([m[0],m[1],o],[d[0],d[1],o],[p[0],p[1],o],[g[0],g[1],o],[0,0,-1]),pa([m[0],m[1],a],[d[0],d[1],a],[p[0],p[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+l)/2;pa([m[0],m[1],o],[d[0],d[1],o],[m[0],m[1],a],[d[0],d[1],a],[-Math.cos(x),-Math.sin(x),0]),pa([p[0],p[1],o],[g[0],g[1],o],[p[0],p[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function Mw(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,f=e+r*Math.cos(c),v=t+r*Math.sin(c),h=e+r*Math.cos(l),u=t+r*Math.sin(l);pa([f,v,o],[h,u,o],[f,n,o],[h,n,o],[0,0,-1]),pa([f,v,a],[h,u,a],[f,n,a],[h,n,a],[0,0,1])}}function Aw(e,t,r,n){let o=Ke/2,a=sp,i=3,s=a+.42,c=s+.15,l=cp,f=e0,v=5.98,h=n-.45,u=n+.45,m=64,d=tp(St,o-f,n,0,v,l);tp(St,o+f,n,0,v,l),St.curMat=[0,0,0],op(o,i,a,s,h,u,m),op(o,i,s,c,h-.07,u+.07,m),Mw(o,i,c,d+.05,h,u,m);for(let g of[-1,1]){let x=o+g*(c-.02),w=o+g*f;et(e,t,r,Math.min(x,w),i,h,Math.max(x,w),d+.05,u)}for(let g of[-1,1]){let x=o+g*(a-.05),w=o+g*(a+.85);et(e,t,r,Math.min(x,w),i-.16,n-.6,Math.max(x,w),i,n+.6)}let p=f+l*1.42+.45;et(e,t,r,o-p,d,n-.7,o+p,d+.44,n+.7),et(e,t,r,o-p+.12,d+.44,n-.62,o+p-.12,d+.7,n+.62),et(e,t,r,o-p-.1,d+.7,n-.84,o+p+.1,d+.84,n+.84),et(e,t,r,o-p-.22,d+.84,n-.96,o+p+.22,d+1,n+.96),et(e,t,r,o-.3,i+a-.1,n-.56,o+.3,d,n+.56)}function ap(e,t,r,n,o){et(e,t,r,n-.72,0,o-.72,n+.72,.2,o+.72),et(e,t,r,n-.58,.2,o-.58,n+.58,.4,o+.58),et(e,t,r,n-hl/2,.4,o-ul/2,n+hl/2,ft-1.35,o+ul/2),et(e,t,r,n-.67,.42,o-.67,n+.67,.62,o+.67),et(e,t,r,n-.67,ft-1.58,o-.67,n+.67,ft-1.35,o+.67),et(e,t,r,n-.82,ft-1.35,o-.82,n+.82,ft-1.05,o+.82),et(e,t,r,n-.66,ft-1.05,o-.66,n+.66,ft-.78,o+.66),et(e,t,r,n-.92,ft-.78,o-.92,n+.92,ft-.55,o+.92),et(e,t,r,n-.78,ft-.55,o-.78,n+.78,ft-.3,o+.78),et(e,t,r,n-.92,ft-.3,o-.92,n+.92,ft-.1,o+.92)}function vi(e,t,r,n,o){o==="left"?(et(e,t,r,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),et(e,t,r,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(et(e,t,r,Ke-.14,1,n-3.8/2,Ke+.08,5.7,n+3.8/2),et(e,t,r,Ke-.18,1+.18,n-3.8/2+.18,Ke+.08+.04,5.7-.18,n+3.8/2-.18))}function Tw(e,t,r,n){et(e,t,r,.65,ft-.16,n-1.65,.65+.22,ft,n+1.65),et(e,t,r,Ke-.65-.22,ft-.16,n-1.65,Ke-.65,ft,n+1.65),et(e,t,r,.65,ft-.16,n-1.65,Ke-.65,ft,n-1.43),et(e,t,r,.65,ft-.16,n+1.43,Ke-.65,ft,n+1.65),r.push(...ml(e,t,[.65+.22,ft-.16,n-1.43],[Ke-.65-.22,ft-.16,n-1.43],[.65+.22,ft-.16,n+1.43],[Ke-.65-.22,ft-.16,n+1.43],[0,-1,0]))}lp.exports=function(){let e=[],t=[],r=[];Js=[],St=mw.createBuilder(e,t,r,Js),r.push(...ml(e,t,[0,0,0],[Ke,0,0],[0,0,Et],[Ke,0,Et],[0,1,0])),xw.addSkylight(St,[0,0,0],Et),St.curMat=[0,0,0],et(e,t,r,-st,0,0,st,ft,Et),et(e,t,r,Ke-st,0,Fr.C.z1,Ke+st,ft,Et-st),et(e,t,r,Ke-st-.12,0,Fr.C.z1+2*st,Ke-st,.42,Et-st),et(e,t,r,Ke-st-.07,.42,Fr.C.z1+2*st,Ke-st,.5,Et-st),et(e,t,r,st,0,0,st+.12,.42,Et-st),et(e,t,r,st,.42,0,st+.07,.5,Et-st),et(e,t,r,st,0,Et-st-.12,Ke-st,.42,Et-st),et(e,t,r,st,.42,Et-st-.07,Ke-st,.5,Et-st),rp.addEntranceWall(St),rp.addFrames(St),St.curMat=[0,0,0],et(e,t,r,-st,0,Et-st,Ke+st,ft,Et+st),Aw(e,t,r,Qs);for(let c of dl)ap(e,t,r,1.25,c),ap(e,t,r,Ke-1.25,c);vi(e,t,r,22,"left"),vi(e,t,r,25,"right"),vi(e,t,r,33,"left"),vi(e,t,r,36,"right"),vi(e,t,r,43,"left");let n=[4,9,34,39,44,49];for(let c of n)Tw(e,t,r,c);Fr.addWing(St),St.curMat=[0,0,0];for(let c of Zs.filter(l=>l.pedestal))vw(St,c.x,c.z,t0,np);{let c=ww;St.curMat=[0,0,0],St.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),St.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),St.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),St.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}yw.addAlcove(St);for(let c of gi)gw(St,c.x,c.z,c.seed,1,c.away);St.curMat=[0,0,0];let o=[[[Ke,Et-.35],[0,Et-.35]],[[0,3],[0,10]],[[Ke,15],[Ke,22]],[[0,24],[0,31]],[[Ke,33],[Ke,40]],[[0,41],[0,46]]],a=Ew(_w),i=(c,l)=>{let f=0,v=1/0;return o.forEach((h,u)=>{let m=(h[0][0]+h[1][0])/2,d=(h[0][1]+h[1][1])/2,p=Math.hypot(c-m,l-d);p<v&&(v=p,f=u)}),f},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:o,lights:s,statues:Zs,occluders:[...dl.flatMap(c=>[[1.25,c,.78],[Ke-1.25,c,.78]]),[Ke/2-e0,Qs,.86],[Ke/2+e0,Qs,.86],...Zs.filter(c=>c.pedestal).map(c=>[c.x,c.z,t0*1.12]),...gi.map(c=>[c.x,c.z,.34])],pedestalTop:np,mat:Js,getAreaIndex:i,getGridSegments:(c,l)=>a.get(c,l),getGridParts:(c,l)=>a.get(c,l),position:e,normal:t,elements:r}}});var lr=Q((NA,dp)=>{"use strict";var up="gallery-light",Ar=0;try{let e=location.search;/[?&]night\b/.test(e)?Ar=1:/[?&]day\b/.test(e)?Ar=0:localStorage.getItem(up)==="night"&&(Ar=1)}catch(e){}var Sn=Ar,vl=0,hp=[],n0={tick(e){let t=vl?Math.min(.1,e-vl):0;if(vl=e,Sn!==Ar){let r=t/2.4;Sn=Ar>Sn?Math.min(Ar,Sn+r):Math.max(Ar,Sn-r)}return n0.night},get night(){return Sn*Sn*(3-2*Sn)},get isNight(){return Ar===1},set(e){Ar=e?1:0;try{localStorage.setItem(up,e?"night":"day")}catch(t){}hp.forEach(t=>t(Ar))},toggle(){n0.set(!Ar)},onChange(e){hp.push(e)}};n0.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;dp.exports=n0});var ma=Q((OA,bi)=>{"use strict";var gl=lr(),{C:xl}=Jt(),{A:o0,BENCH:xi}=Dr(),Nt=Math.PI,Sw=[18,29,40],a0=.575,kn=[],yi=(e,t,r,n,o,a,i)=>kn.push(Object.assign({x:e,y:t,z:r,o:n,back:o,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));Sw.forEach(e=>{yi(1.25+a0+.48,3.25,e,[1,0],.48,a0,{s:1.2}),yi(12.75-a0-.48,3.25,e,[-1,0],.48,a0,{s:1.2})});[3,11].forEach(e=>yi(e,3.45,xl.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var kw=[14.63,19.63,24.03,28.43,32.83,xl.x1-.28];kw.forEach(e=>yi(e,3.15,xl.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>yi(.35+.44,2.75,e,[1,0],.44,99));{let e=(xi.inner+xi.outer)/2,t=Math.atan2(-1.12,-.98);kn.push({x:o0.cx+Math.cos(t)*e,y:xi.seat+.155,z:o0.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[o0.cx,o0.zc,xi.outer+.07,xi.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var yl=.13,i0=.21,qt=yl/Math.cos(Nt/6),tt=e=>e.toFixed(4);function pp(e){let r=(e||kn.map((n,o)=>o)).map(n=>{let o=kn[n],a=-o.o[1],i=o.o[0],s=o.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${tt(o.ring[3]-.03)}) {
					float tt = ${tt(o.y-o.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${tt(o.x)}, ${tt(o.z)}) + D.xz * tt - vec2(${tt(o.ring[0])}, ${tt(o.ring[1])});
					T *= smoothstep(${tt(o.ring[2]-.02)}, ${tt(o.ring[2]+.12)}, length(hit));
				}`:"",c=o.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${tt(o.o[0])}, ${tt(o.o[1])}));
					if (behind > ${tt(o.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${tt(a)}, ${tt(i)}))) * ${tt(o.back)} / behind;
						T *= smoothstep(${tt(o.hw-.04)}, ${tt(o.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${tt(o.x)}, ${tt(o.y)}, ${tt(o.z)});
				float d2 = dot(D, D);
				if (d2 < ${tt(o.range*o.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${tt(Math.cos(Math.atan2(o.o[1],o.o[0])))}, s = ${tt(Math.sin(Math.atan2(o.o[1],o.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${tt(n*1.7)}) + 0.04 * sin(time * 15.3 + ${tt(n*2.9)}) * sin(time * 1.9 + ${tt(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${tt(1/(o.s*o.s))}) * (1.0 - smoothstep(${tt(o.range*.6)}, ${tt(o.range)}, d));
					sum += ${tt(o.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${tt(Nt/6)}, ${tt(Nt/3)}) - ${tt(Nt/6)};
		float U = tan(t) / ${tt(Math.tan(Nt/6))};
		float V = (q.y / h) * (${tt(yl/i0)} / cos(t));
		// the diamond lattice of lead
		float s1 = U * 1.5 + V * 2.0, s2 = U * 1.5 - V * 2.0;
		float e1 = 0.5 - abs(fract(s1) - 0.5), e2 = 0.5 - abs(fract(s2) - 0.5);
		float lead = 1.0 - smoothstep(0.03, 0.085, min(e1, e2));
		float T = 1.0 - 0.82 * lead;
		// the iron posts at the corners
		T *= 1.0 - 0.92 * smoothstep(0.84, 0.95, abs(U));
		// the rails at top and bottom, and beyond them the roof and base
		float inGlass = 1.0 - smoothstep(0.90, 1.02, abs(V));
		float leak = V > 0.0 ? 0.10 : 0.28;
		return mix(leak, T, inGlass);
	}
	vec3 lanternLight(vec3 p, vec3 N) {
		if (night <= 0.001) return vec3(0.0);
		float sum = 0.0;
		${r}
		return vec3(1.0, 0.72, 0.38) * sum * 2.8 * night;
	}`}var xt=0,Lw=1;function zw(){let e=[],t=[],r=[],n=[],o=[],a=(u,m,d,p)=>(e.push(u[0],u[1],u[2]),t.push(m[0],m[1],m[2]),r.push(d),n.push(p?p[0]:0,p?p[1]:0),e.length/3-1),i=(u,m)=>[u[0]-m[0],u[1]-m[1],u[2]-m[2]],s=(u,m)=>[u[1]*m[2]-u[2]*m[1],u[2]*m[0]-u[0]*m[2],u[0]*m[1]-u[1]*m[0]],c=u=>{let m=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/m,u[1]/m,u[2]/m]};function l(u,m,d,p,g,x){let w=c(s(i(m,u),i(p,u))),b=a(u,w,g,[0,0]),A=a(m,w,g,[1,0]),T=a(d,w,g,[1,1]),P=a(p,w,g,[0,1]);o.push(b,A,T,b,T,P),x&&o.push(b,T,A,b,P,T)}function f(u,m,d){for(let x=0;x<u.length;x++){let w=u[Math.max(0,x-1)],b=u[Math.min(u.length-1,x+1)],A=c(i(b,w)),T=Math.abs(A[1])>.9?[1,0,0]:[0,1,0],P=c(s(A,T)),C=s(P,A),k=typeof m=="function"?m(x/(u.length-1)):m;for(let U=0;U<=6;U++){let R=U/6*Nt*2,D=Math.cos(R),q=Math.sin(R),B=[P[0]*D+C[0]*q,P[1]*D+C[1]*q,P[2]*D+C[2]*q];a([u[x][0]+B[0]*k,u[x][1]+B[1]*k,u[x][2]+B[2]*k],B,d)}}let g=e.length/3-u.length*7;for(let x=0;x<u.length-1;x++)for(let w=0;w<6;w++){let b=g+x*7+w,A=b+6+1;o.push(b,A,b+1,b+1,A,A+1)}}function v(u,m,d,p,g,x,w,b,A){let T=(P,C,k)=>{let U=x+Nt/6+k*Nt/3;return[u[0]+Math.cos(U)*P,C,u[2]+Math.sin(U)*P]};for(let P=0;P<6;P++)l(T(p,m,P+1),T(p,m,P),T(g,d,P),T(g,d,P+1),w);if(b&&g>0)for(let P=0;P<6;P++){let C=a([u[0],d,u[2]],[0,1,0],w),k=a(T(g,d,P),[0,1,0],w),U=a(T(g,d,P+1),[0,1,0],w);o.push(C,U,k)}if(A&&p>0)for(let P=0;P<6;P++){let C=a([u[0],m,u[2]],[0,-1,0],w),k=a(T(p,m,P),[0,-1,0],w),U=a(T(p,m,P+1),[0,-1,0],w);o.push(C,k,U)}}function h(u,m,d,p,g,x,w){let b=[];for(let T=0;T<=18;T++){let P=T/18,C=(w||0)+P*p*Nt*2,k=d*(1-.75*P);b.push([u[0]+m[0]*Math.cos(C)*k,u[1]+Math.sin(C)*k,u[2]+m[2]*Math.cos(C)*k])}f(b,g,x)}return kn.forEach(u=>{let m=u.s,d=Math.atan2(u.o[1],u.o[0]),p=[u.x,u.y,u.z],g=(b,A,T)=>[u.x+u.o[0]*b-u.o[1]*(T||0),u.y+A,u.z+u.o[1]*b+u.o[0]*(T||0)],x=u.y-i0*m,w=u.y+i0*m;for(let b=0;b<6;b++){let A=d+Nt/6+b*Nt/3,T=A+Nt/3,P=qt*m*.97,C=[u.x+Math.cos(A)*P,x,u.z+Math.sin(A)*P],k=[u.x+Math.cos(T)*P,x,u.z+Math.sin(T)*P];l(k,C,[C[0],w,C[2]],[k[0],w,k[2]],Lw,!0)}for(let b=0;b<6;b++){let A=d+Nt/6+b*Nt/3,T=qt*m;f([[u.x+Math.cos(A)*T,x-.02*m,u.z+Math.sin(A)*T],[u.x+Math.cos(A)*T,w+.02*m,u.z+Math.sin(A)*T]],.011*m,xt)}v(p,x-.035*m,x,qt*m*1.12,qt*m*1.12,d,xt,!0,!0),v(p,x-.1*m,x-.035*m,qt*m*.55,qt*m*1,d,xt,!1,!0),v(p,x-.17*m,x-.1*m,0,qt*m*.55,d,xt,!1,!1);for(let b=0;b<6;b++){let A=d+b*Nt/3,T=yl*m*1.06,P=[u.x+Math.cos(A)*T,x-.06*m,u.z+Math.sin(A)*T];h(P,[-Math.sin(A),0,Math.cos(A)],.03*m,.85,.004*m,xt,.3)}v(p,w,w+.03*m,qt*m*1.14,qt*m*1.14,d,xt,!1,!0),v(p,w+.03*m,w+.2*m,qt*m*1.14,qt*m*.32,d,xt,!1,!1),v(p,w+.2*m,w+.27*m,qt*m*.34,qt*m*.34,d,xt,!1,!1),v(p,w+.27*m,w+.37*m,qt*m*.42,0,d,xt,!1,!0),f([[u.x,w+.36*m,u.z],[u.x,w+.47*m,u.z]],b=>.01*m*(1-.7*b),xt),v([u.x,0,u.z],w+.44*m,w+.47*m,.018*m,0,d,xt,!1,!0);for(let b=0;b<6;b++){let A=d+Nt/6+b*Nt/3,T=qt*m*1.14,P=[u.x+Math.cos(A)*T,w+.03*m,u.z+Math.sin(A)*T];f([P,[P[0],P[1]+.09*m,P[2]]],C=>.008*m*(1-.8*C),xt),v([P[0],0,P[2]],P[1]+.035*m,P[1]+.06*m,.014*m,.014*m,A,xt,!0,!0)}if(u.mount==="wall"){let b=u.back,A=x-.32,T=g(-b,0,0);((R,D,q)=>{let B=[u.o[0],0,u.o[1]],K=[-u.o[1],0,u.o[0]],te=(me,xe,Ce)=>[T[0]+K[0]*me+B[0]*Ce,xe,T[2]+K[2]*me+B[2]*Ce],re=.03,J=.065;l(te(-q,R,J),te(q,R,J),te(q,D,J),te(-q,D,J),xt,!0),l(te(q,R,re),te(q,R,J),te(q,D,J),te(q,D,re),xt,!0),l(te(-q,R,J),te(-q,R,re),te(-q,D,re),te(-q,D,J),xt,!0),l(te(-q,D,J),te(q,D,J),te(q,D,re),te(-q,D,re),xt,!0),l(te(-q,R,re),te(q,R,re),te(q,R,J),te(-q,R,J),xt,!0),v([T[0]+B[0]*J,0,T[2]+B[2]*J],D,D+.05,q*.6,0,d,xt,!1,!0),v([T[0]+B[0]*J,0,T[2]+B[2]*J],R-.05,R,0,q*.6,d,xt,!1,!1)})(A-.2,A+.2,.07);let C=[];for(let R=0;R<=14;R++){let D=R/14,q=-b+.05+D*(b-.05),B=A+.04+(x-.17*m-A-.04)*Math.pow(D,2.2);C.push(g(q,B-u.y,0))}f(C,R=>.022*(1-.3*R),xt);let k=[];for(let R=0;R<=10;R++){let D=R/10;k.push(g(-b+.05+D*b*.6,A-.14+D*.16+.05*Math.sin(D*Nt)-u.y,0))}f(k,.009,xt);let U=k[k.length-1];h([U[0]-u.o[0]*.03,U[1]+.02,U[2]-u.o[1]*.03],[u.o[0],0,u.o[1]],.045,1.1,.007,xt,-.4),[.3,.55].forEach(R=>{let D=C[Math.round(R*14)],q=k[Math.round(R/.62*10)]||k[10];f([D,q],.006,xt)}),[-1,1].forEach(R=>{let D=g(-.05,-i0*m-.2*m,0);h([D[0]-u.o[1]*R*.05,D[1],D[2]+u.o[0]*R*.05],[-u.o[1]*R,0,u.o[0]*R],.05*m,.9,.006,xt,Nt)})}else for(let b=0;b<3;b++){let A=d+b*Nt*2/3,T=[u.x+Math.cos(A)*qt*m*.7,x-.035*m,u.z+Math.sin(A)*qt*m*.7],P=[u.x+Math.cos(A)*qt*m*1.25,x-.17*m,u.z+Math.sin(A)*qt*m*1.25];f([T,P],.012*m,xt)}}),{pos:e,nrm:t,kind:r,uv:n,elems:o}}bi.exports=e=>{let t=zw(),r=e({vert:`
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
		${pp()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>gl.night}}),n=[],o=[];kn.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),o.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
			vec3 p = at.xyz + (right * corner.x + up * corner.y) * 0.75 * floor(at.w * 100.0 + 0.5) / 100.0;
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
			vec3 col = vec3(1.0, 0.62, 0.28) * pow(max(1.0 - r, 0.0), 3.0) * 0.22 * v_fl;
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{corner:n,at:o},count:n.length/2,uniforms:{time:e.context("time"),night:()=>gl.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r(),gl.night>.01&&a()}};bi.exports.lanternGLSL=pp;bi.exports.LANTERNS=kn;bi.exports.TREE_LANTERN=[kn.length-1]});var bl=Q((GA,mp)=>{"use strict";var{doorLightGLSL:Cw}=so(),{skylightGLSL:Rw}=sa(),{windowLightGLSL:Iw,C:vr}=Jt(),{alcoveLightGLSL:Pw}=Dr(),Tr=e=>e.toFixed(4),Nw=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>(r/t).toFixed(4)).join(", ")})();mp.exports=(e,t,r)=>{let o=(t.occluders||[]).slice(0,24).map(([h,u,m])=>`ao = min(ao, contact(v_pos.xz, vec2(${h.toFixed(3)}, ${u.toFixed(3)}), ${m.toFixed(3)}));`).join(`
      `),a={c:[0,0,0,0],d:[1,0,0,0]},i=-1,s=[],c=h=>{let u=h&&h.tick!==void 0?h.tick:0;if(u!==i||s.length===0){i=u;let m=t.viewer||[7,2,20];for(s=t.lights.filter(d=>d.c[3]>.5).map(d=>({l:d,d:Math.hypot(d.c[0]-m[0],d.c[2]-m[2])})).sort((d,p)=>d.d-p.d).slice(0,8).map(d=>d.l);s.length<8;)s.push(a)}return s},l={},f="",v="";for(let h=0;h<8;h++)l["lightC"+h]=u=>c(u)[h].c,l["lightD"+h]=u=>c(u)[h].d,f+="uniform vec4 lightC"+h+", lightD"+h+`;
`,v+="pic += pictureLight(lightC"+h+", lightD"+h+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${ma().lanternGLSL()}

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    ${f}

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

    ${Cw()}

    ${Rw()}

    ${Iw()}

    ${Pw()}

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
        step(abs(v_pos.z - ${Tr(vr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Tr((vr.z0+vr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      ${v}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Tr(vr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${Nw}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Tr(vr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Tr(vr.z0)} || v_pos.z > ${Tr(vr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Tr(vr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Tr(vr.z0)}), ${Tr(vr.z1)} - v_pos.z), ${Tr(vr.x1)} - v_pos.x);
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
        if (v_pos.z < ${Tr(vr.z0+.3)} && v_pos.x > ${Tr(vr.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements)})}});var gp=Q((DA,vp)=>{"strict mode";var Ow="https://api.artic.edu/api/v1/artworks/search",Gw=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,Dw="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",Fw="&fields=image_id,title,artist_title",qw={low:400,mid:843,high:1686};vp.exports={fetchList:async function(e,t){let r=Ow+Dw+Fw+`&from=${e}&size=${t}`;return(await fetch(r).then(o=>o.json())).data.filter(o=>o.image_id)},fetchImage:async function(e,t){let r=Gw(e,qw[t]),n=await fetch(r).then(o=>o.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var bp=Q((FA,yp)=>{"use strict";var $w=$0(),Hw=Ir(),Uw=e=>"images/web/"+e.slug+(Hw.isPhone?"-1024":"")+".webp";async function xp(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}yp.exports={fetchList:async function(e,t){return $w.slice(e,e+t).map((r,n)=>({...r,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await xp(Uw(e))}catch(r){t=await xp("images/"+e.file)}return{title:e.title,image:t}}}});var _p=Q((qA,wp)=>{"strict mode";wp.exports={default:"local",artic:gp(),local:bp()}});var _l=Q(($A,Mp)=>{"strict mode";var uo=document.createElement("canvas"),wl=uo.width=uo.height=1024,Ln=uo.getContext("2d");Ln.mozImageSmoothingEnabled=!1;Ln.webkitImageSmoothingEnabled=!1;Ln.font="32px Verdana";Ln.textBaseline="bottom";Ln.fillStyle="#aaa";function Ep(e,t,r,n){var o=t,a,i=0,s=0,c=t.split(" "),l,f;for(l=f=c.length;e.measureText(o).width>r&&l>1;){l--,o=a="";for(var v=0;v<f;v++)v<l?(o+=c[v],v+1<l&&(o+=" ")):(a+=c[v],v+1<f&&(a+=" "))}return n.push(o),s=e.measureText(o).width,a&&(i=Ep(e,a,r,n),i>s&&(s=i)),s}Mp.exports={init(e,t,r=wl){var n=[];Ep(Ln,t,Math.min(r*wl,wl),n),Ln.clearRect(0,0,uo.width,uo.height);for(var o=0;o<n.length;o++)Ln.fillText(n[o],0,uo.height-(Math.max(n.length,3)-o)*32);return e({data:uo,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Sp=Q((HA,Tp)=>{"strict mode";var El=_p(),Bw=new URLSearchParams(window.location.search).get("api"),Ap=El[Bw]||El[El.default],jw=_l(),Ml={},ga=[],Vw=2;function Ww(e){return(!navigator.connection||navigator.connection.downlink<Vw)&&(e=e=="high"?"mid":"low"),e}var Xw=Ir(),va=document.createElement("canvas");va.width=va.height=Xw.isPhone?1024:2048;var Sl=va.getContext("2d");Sl.imageSmoothingEnabled=!0;Sl.imageSmoothingQuality="high";var Al=!1,Yw=e=>[(ga.pop()||e.texture)([[[200,200,200]]]),t=>(ga.pop()||e.texture)([[[0,0,0,0]]]),1];async function Tl(e,t,r){Al===!1&&(Al=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,o;try{let a=await Ap.fetchImage(t,Ww(r));o=a.title,n=await createImageBitmap(a.image),Sl.drawImage(n,0,0,va.width,va.height)}catch(a){return console.error(a),r=="high"?await Tl(e,t,"low"):Yw(e)}return[(ga.pop()||e.texture)({data:va,min:"mipmap",mipmap:"nice",aniso:Al,flipY:!0}),a=>jw.init(ga.pop()||e.texture,o,a),n.width/n.height]}Tp.exports={fetch:(e,t=10,r="low",n,o)=>{let a=Object.keys(Ml).length;Ap.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(Ml[s.image_id]){--t===0&&o();return}Ml[s.image_id]=s,Tl(e,s,r).then(([c,l,f])=>{n({...s,tex:c,textGen:l,aspect:f}),--t===0&&o()})})})},load:(e,t,r="low")=>{t.tex||t.loading||(t.loading=!0,Tl(e,t,r).then(([n,o])=>{t.loading=!1,t.tex=n,t.text=o(t.width)}))},unload:e=>{e.tex&&(ga.push(e.tex),e.tex=void 0),e.text&&(ga.push(e.text),e.text=void 0)}}});var Lp=Q((UA,kp)=>{kp.exports=Kw;function Kw(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e[9]=t[9]+r[9],e[10]=t[10]+r[10],e[11]=t[11]+r[11],e[12]=t[12]+r[12],e[13]=t[13]+r[13],e[14]=t[14]+r[14],e[15]=t[15]+r[15],e}});var Cp=Q((BA,zp)=>{zp.exports=Qw;function Qw(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Ip=Q((jA,Rp)=>{Rp.exports=Zw;function Zw(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Np=Q((VA,Pp)=>{Pp.exports=Jw;function Jw(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var kl=Q((WA,Op)=>{Op.exports=e_;function e_(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Dp=Q((XA,Gp)=>{Gp.exports=t_;function t_(e,t){if(e===t){var r=t[1],n=t[2],o=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=o,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var qp=Q((YA,Fp)=>{Fp.exports=r_;function r_(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],v=t[9],h=t[10],u=t[11],m=t[12],d=t[13],p=t[14],g=t[15],x=r*s-n*i,w=r*c-o*i,b=r*l-a*i,A=n*c-o*s,T=n*l-a*s,P=o*l-a*c,C=f*d-v*m,k=f*p-h*m,U=f*g-u*m,R=v*p-h*d,D=v*g-u*d,q=h*g-u*p,B=x*q-w*D+b*R+A*U-T*k+P*C;return B?(B=1/B,e[0]=(s*q-c*D+l*R)*B,e[1]=(o*D-n*q-a*R)*B,e[2]=(d*P-p*T+g*A)*B,e[3]=(h*T-v*P-u*A)*B,e[4]=(c*U-i*q-l*k)*B,e[5]=(r*q-o*U+a*k)*B,e[6]=(p*b-m*P-g*w)*B,e[7]=(f*P-h*b+u*w)*B,e[8]=(i*D-s*U+l*C)*B,e[9]=(n*U-r*D-a*C)*B,e[10]=(m*T-d*b+g*x)*B,e[11]=(v*b-f*T-u*x)*B,e[12]=(s*k-i*R-c*C)*B,e[13]=(r*R-n*k+o*C)*B,e[14]=(d*w-m*A-p*x)*B,e[15]=(f*A-v*w+h*x)*B,e):null}});var Hp=Q((KA,$p)=>{$p.exports=n_;function n_(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],v=t[9],h=t[10],u=t[11],m=t[12],d=t[13],p=t[14],g=t[15];return e[0]=s*(h*g-u*p)-v*(c*g-l*p)+d*(c*u-l*h),e[1]=-(n*(h*g-u*p)-v*(o*g-a*p)+d*(o*u-a*h)),e[2]=n*(c*g-l*p)-s*(o*g-a*p)+d*(o*l-a*c),e[3]=-(n*(c*u-l*h)-s*(o*u-a*h)+v*(o*l-a*c)),e[4]=-(i*(h*g-u*p)-f*(c*g-l*p)+m*(c*u-l*h)),e[5]=r*(h*g-u*p)-f*(o*g-a*p)+m*(o*u-a*h),e[6]=-(r*(c*g-l*p)-i*(o*g-a*p)+m*(o*l-a*c)),e[7]=r*(c*u-l*h)-i*(o*u-a*h)+f*(o*l-a*c),e[8]=i*(v*g-u*d)-f*(s*g-l*d)+m*(s*u-l*v),e[9]=-(r*(v*g-u*d)-f*(n*g-a*d)+m*(n*u-a*v)),e[10]=r*(s*g-l*d)-i*(n*g-a*d)+m*(n*l-a*s),e[11]=-(r*(s*u-l*v)-i*(n*u-a*v)+f*(n*l-a*s)),e[12]=-(i*(v*p-h*d)-f*(s*p-c*d)+m*(s*h-c*v)),e[13]=r*(v*p-h*d)-f*(n*p-o*d)+m*(n*h-o*v),e[14]=-(r*(s*p-c*d)-i*(n*p-o*d)+m*(n*c-o*s)),e[15]=r*(s*h-c*v)-i*(n*h-o*v)+f*(n*c-o*s),e}});var Bp=Q((QA,Up)=>{Up.exports=o_;function o_(e){var t=e[0],r=e[1],n=e[2],o=e[3],a=e[4],i=e[5],s=e[6],c=e[7],l=e[8],f=e[9],v=e[10],h=e[11],u=e[12],m=e[13],d=e[14],p=e[15],g=t*i-r*a,x=t*s-n*a,w=t*c-o*a,b=r*s-n*i,A=r*c-o*i,T=n*c-o*s,P=l*m-f*u,C=l*d-v*u,k=l*p-h*u,U=f*d-v*m,R=f*p-h*m,D=v*p-h*d;return g*D-x*R+w*U+b*k-A*C+T*P}});var Vp=Q((ZA,jp)=>{jp.exports=a_;function a_(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=t[4],c=t[5],l=t[6],f=t[7],v=t[8],h=t[9],u=t[10],m=t[11],d=t[12],p=t[13],g=t[14],x=t[15],w=r[0],b=r[1],A=r[2],T=r[3];return e[0]=w*n+b*s+A*v+T*d,e[1]=w*o+b*c+A*h+T*p,e[2]=w*a+b*l+A*u+T*g,e[3]=w*i+b*f+A*m+T*x,w=r[4],b=r[5],A=r[6],T=r[7],e[4]=w*n+b*s+A*v+T*d,e[5]=w*o+b*c+A*h+T*p,e[6]=w*a+b*l+A*u+T*g,e[7]=w*i+b*f+A*m+T*x,w=r[8],b=r[9],A=r[10],T=r[11],e[8]=w*n+b*s+A*v+T*d,e[9]=w*o+b*c+A*h+T*p,e[10]=w*a+b*l+A*u+T*g,e[11]=w*i+b*f+A*m+T*x,w=r[12],b=r[13],A=r[14],T=r[15],e[12]=w*n+b*s+A*v+T*d,e[13]=w*o+b*c+A*h+T*p,e[14]=w*a+b*l+A*u+T*g,e[15]=w*i+b*f+A*m+T*x,e}});var Xp=Q((JA,Wp)=>{Wp.exports=i_;function i_(e,t,r){var n=r[0],o=r[1],a=r[2],i,s,c,l,f,v,h,u,m,d,p,g;return t===e?(e[12]=t[0]*n+t[4]*o+t[8]*a+t[12],e[13]=t[1]*n+t[5]*o+t[9]*a+t[13],e[14]=t[2]*n+t[6]*o+t[10]*a+t[14],e[15]=t[3]*n+t[7]*o+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],l=t[3],f=t[4],v=t[5],h=t[6],u=t[7],m=t[8],d=t[9],p=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=l,e[4]=f,e[5]=v,e[6]=h,e[7]=u,e[8]=m,e[9]=d,e[10]=p,e[11]=g,e[12]=i*n+f*o+m*a+t[12],e[13]=s*n+v*o+d*a+t[13],e[14]=c*n+h*o+p*a+t[14],e[15]=l*n+u*o+g*a+t[15]),e}});var Kp=Q((eT,Yp)=>{Yp.exports=s_;function s_(e,t,r){var n=r[0],o=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Zp=Q((tT,Qp)=>{Qp.exports=c_;function c_(e,t,r,n){var o=n[0],a=n[1],i=n[2],s=Math.sqrt(o*o+a*a+i*i),c,l,f,v,h,u,m,d,p,g,x,w,b,A,T,P,C,k,U,R,D,q,B,K;return Math.abs(s)<1e-6?null:(s=1/s,o*=s,a*=s,i*=s,c=Math.sin(r),l=Math.cos(r),f=1-l,v=t[0],h=t[1],u=t[2],m=t[3],d=t[4],p=t[5],g=t[6],x=t[7],w=t[8],b=t[9],A=t[10],T=t[11],P=o*o*f+l,C=a*o*f+i*c,k=i*o*f-a*c,U=o*a*f-i*c,R=a*a*f+l,D=i*a*f+o*c,q=o*i*f+a*c,B=a*i*f-o*c,K=i*i*f+l,e[0]=v*P+d*C+w*k,e[1]=h*P+p*C+b*k,e[2]=u*P+g*C+A*k,e[3]=m*P+x*C+T*k,e[4]=v*U+d*R+w*D,e[5]=h*U+p*R+b*D,e[6]=u*U+g*R+A*D,e[7]=m*U+x*R+T*D,e[8]=v*q+d*B+w*K,e[9]=h*q+p*B+b*K,e[10]=u*q+g*B+A*K,e[11]=m*q+x*B+T*K,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var em=Q((rT,Jp)=>{Jp.exports=l_;function l_(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[4],i=t[5],s=t[6],c=t[7],l=t[8],f=t[9],v=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*o+l*n,e[5]=i*o+f*n,e[6]=s*o+v*n,e[7]=c*o+h*n,e[8]=l*o-a*n,e[9]=f*o-i*n,e[10]=v*o-s*n,e[11]=h*o-c*n,e}});var rm=Q((nT,tm)=>{tm.exports=f_;function f_(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],l=t[8],f=t[9],v=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o-l*n,e[1]=i*o-f*n,e[2]=s*o-v*n,e[3]=c*o-h*n,e[8]=a*n+l*o,e[9]=i*n+f*o,e[10]=s*n+v*o,e[11]=c*n+h*o,e}});var om=Q((oT,nm)=>{nm.exports=h_;function h_(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],l=t[4],f=t[5],v=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o+l*n,e[1]=i*o+f*n,e[2]=s*o+v*n,e[3]=c*o+h*n,e[4]=l*o-a*n,e[5]=f*o-i*n,e[6]=v*o-s*n,e[7]=h*o-c*n,e}});var im=Q((aT,am)=>{am.exports=u_;function u_(e,t,r){var n,o,a,i=r[0],s=r[1],c=r[2],l=Math.sqrt(i*i+s*s+c*c);return Math.abs(l)<1e-6?null:(l=1/l,i*=l,s*=l,c*=l,n=Math.sin(t),o=Math.cos(t),a=1-o,e[0]=i*i*a+o,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+o,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var cm=Q((iT,sm)=>{sm.exports=d_;function d_(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=n+n,c=o+o,l=a+a,f=n*s,v=n*c,h=n*l,u=o*c,m=o*l,d=a*l,p=i*s,g=i*c,x=i*l;return e[0]=1-(u+d),e[1]=v+x,e[2]=h-g,e[3]=0,e[4]=v-x,e[5]=1-(f+d),e[6]=m+p,e[7]=0,e[8]=h+g,e[9]=m-p,e[10]=1-(f+u),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}});var fm=Q((sT,lm)=>{lm.exports=p_;function p_(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var um=Q((cT,hm)=>{hm.exports=m_;function m_(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var pm=Q((lT,dm)=>{dm.exports=v_;function v_(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var vm=Q((fT,mm)=>{mm.exports=g_;function g_(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var xm=Q((hT,gm)=>{gm.exports=x_;function x_(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var bm=Q((uT,ym)=>{ym.exports=y_;function y_(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r+r,s=n+n,c=o+o,l=r*i,f=n*i,v=n*s,h=o*i,u=o*s,m=o*c,d=a*i,p=a*s,g=a*c;return e[0]=1-v-m,e[1]=f+g,e[2]=h-p,e[3]=0,e[4]=f-g,e[5]=1-l-m,e[6]=u+d,e[7]=0,e[8]=h+p,e[9]=u-d,e[10]=1-l-v,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var _m=Q((dT,wm)=>{wm.exports=b_;function b_(e,t,r,n,o,a,i){var s=1/(r-t),c=1/(o-n),l=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+n)*c,e[10]=(i+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*l,e[15]=0,e}});var Mm=Q((pT,Em)=>{Em.exports=w_;function w_(e,t,r,n,o){var a=1/Math.tan(t/2),i=1/(n-o);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*n*i,e[15]=0,e}});var Tm=Q((mT,Am)=>{Am.exports=__;function __(e,t,r,n){var o=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),l=2/(o+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(o-a)*l*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}});var km=Q((vT,Sm)=>{Sm.exports=E_;function E_(e,t,r,n,o,a,i){var s=1/(t-r),c=1/(n-o),l=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+r)*s,e[13]=(o+n)*c,e[14]=(i+a)*l,e[15]=1,e}});var zm=Q((gT,Lm)=>{var M_=kl();Lm.exports=A_;function A_(e,t,r,n){var o,a,i,s,c,l,f,v,h,u,m=t[0],d=t[1],p=t[2],g=n[0],x=n[1],w=n[2],b=r[0],A=r[1],T=r[2];return Math.abs(m-b)<1e-6&&Math.abs(d-A)<1e-6&&Math.abs(p-T)<1e-6?M_(e):(f=m-b,v=d-A,h=p-T,u=1/Math.sqrt(f*f+v*v+h*h),f*=u,v*=u,h*=u,o=x*h-w*v,a=w*f-g*h,i=g*v-x*f,u=Math.sqrt(o*o+a*a+i*i),u?(u=1/u,o*=u,a*=u,i*=u):(o=0,a=0,i=0),s=v*i-h*a,c=h*o-f*i,l=f*a-v*o,u=Math.sqrt(s*s+c*c+l*l),u?(u=1/u,s*=u,c*=u,l*=u):(s=0,c=0,l=0),e[0]=o,e[1]=s,e[2]=f,e[3]=0,e[4]=a,e[5]=c,e[6]=v,e[7]=0,e[8]=i,e[9]=l,e[10]=h,e[11]=0,e[12]=-(o*m+a*d+i*p),e[13]=-(s*m+c*d+l*p),e[14]=-(f*m+v*d+h*p),e[15]=1,e)}});var Rm=Q((xT,Cm)=>{Cm.exports=T_;function T_(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var Pm=Q((yT,Im)=>{Im.exports=S_;function S_(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e[9]=t[9]-r[9],e[10]=t[10]-r[10],e[11]=t[11]-r[11],e[12]=t[12]-r[12],e[13]=t[13]-r[13],e[14]=t[14]-r[14],e[15]=t[15]-r[15],e}});var wi=Q((bT,Nm)=>{Nm.exports={add:Lp(),create:Cp(),clone:Ip(),copy:Np(),identity:kl(),transpose:Dp(),invert:qp(),adjoint:Hp(),determinant:Bp(),multiply:Vp(),translate:Xp(),scale:Kp(),rotate:Zp(),rotateX:em(),rotateY:rm(),rotateZ:om(),fromRotation:im(),fromRotationTranslation:cm(),fromScaling:fm(),fromTranslation:um(),fromXRotation:pm(),fromYRotation:vm(),fromZRotation:xm(),fromQuat:bm(),frustum:_m(),perspective:Mm(),perspectiveFromFieldOfView:Tm(),ortho:km(),lookAt:zm(),str:Rm(),sub:Pm()}});var Dm=Q((wT,Gm)=>{"use strict";var Om=Sp(),Mt=wi(),po=Jt(),k_=3e3,s0="high",Ll,Ei=.36,Mi=13.64,xa=po.C.hallEnd-.01,Ai=po.C.z0+.01,L_=.356,z_=13.644,C_=po.C.hallEnd-.006,R_=po.C.z0+.006,I_=.12,l0=4,ya=e=>Bt[e]&&Bt[e].cy||l0,zl=.26,P_=5.6,N_=7,Bt=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:xa},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:po.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:po.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:po.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function O_(e,t){let r=t&&t.maxH||P_,n=t&&t.maxW||N_,o=Math.min(r,n/e);return{width:o*e,height:o}}function G_(e,t,r){let n=Bt[r],o=[],a=ya(r)-t/2;return n.side==="left"?(Mt.fromTranslation(o,[Ei,a,n.z+e/2]),Mt.rotateY(o,o,Math.PI/2)):n.side==="right"?(Mt.fromTranslation(o,[Mi,a,n.z-e/2]),Mt.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?Mt.fromTranslation(o,[n.x-e/2,a,Ai]):(Mt.fromTranslation(o,[7+e/2,a,xa]),Mt.rotateY(o,o,Math.PI)),Mt.scale(o,o,[e,t,I_]),o}function D_(e,t,r){let n=Bt[r],o=[],a=ya(r)-t/2;return n.side==="left"?(Mt.fromTranslation(o,[Ei,a,n.z+e/2]),Mt.rotateY(o,o,Math.PI/2)):n.side==="right"?(Mt.fromTranslation(o,[Mi,a,n.z-e/2]),Mt.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?Mt.fromTranslation(o,[n.x-e/2,a,Ai]):(Mt.fromTranslation(o,[7+e/2,a,xa]),Mt.rotateY(o,o,Math.PI)),o}function F_(e,t,r){let n=Bt[r],o=[],a=ya(r)-t/2-zl-.38;return n.side==="left"?(Mt.fromTranslation(o,[L_,a,n.z+e/2]),Mt.rotateY(o,o,Math.PI/2)):n.side==="right"?(Mt.fromTranslation(o,[z_,a,n.z-e/2]),Mt.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?Mt.fromTranslation(o,[n.x-e/2,a,R_]):(Mt.fromTranslation(o,[7+e/2,a,C_]),Mt.rotateY(o,o,Math.PI)),Mt.scale(o,o,[2,2,2]),o}function q_(e,t,r){let n=Bt[r],o=ya(r)-t/2-zl-.38;return n.side==="left"?[Ei+.55,o,n.z]:n.side==="right"?[Mi-.55,o,n.z]:n.side==="corridor"?[n.x,o,Ai+.55]:[7,o,xa-.55]}var _i=.42;function c0(e,t,r,n,o,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,o,0,0,r[0]*a,r[1]*a,r[2]*a,0,e[0],e[1],e[2],1]}function $_(e,t,r){let n=Bt[r],o,a,i;n.side==="left"?(o=[Ei,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(o=[Mi,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(o=[n.x,Ai],a=[1,0,0],i=[0,0,1]):(o=[7,xa],a=[1,0,0],i=[0,0,-1]);let s=ya(r)+t/2+zl+.3,c=Math.min(2.4,Math.max(.9,e*.55)),l=(u,m)=>[o[0]+i[0]*u,m,o[1]+i[2]*u],f=[.075,.062,.05],v=[{fixmodel:c0(l(.014,s),a,i,.1,.13,.028),fixcol:f,fixglow:0},{fixmodel:c0(l(_i/2,s),a,i,.02,.02,_i),fixcol:f,fixglow:0},{fixmodel:c0(l(_i,s),a,i,c,.034,.05),fixcol:f,fixglow:0},{fixmodel:c0(l(_i-.012,s-.019),a,i,c*.94,.006,.028),fixcol:f,fixglow:1}],h=l(_i,s-.02);return{fixtures:v,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}Gm.exports=(e,t)=>{let r=[],n=[],o=a=>{let i=a.image_id;if(!Bt[i])return;let{width:s,height:c}=O_(a.aspect,Bt[i]),l=$_(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=l.light),r.push({...a,fixtures:l.fixtures,side:Bt[i].side,model:G_(s,c,i),framemodel:D_(s,c,i),framesize:[s,c],textmodel:F_(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:q_(s,c,i),paintingPosition:Bt[i].side==="left"?[Ei+.05,l0,Bt[i].z]:Bt[i].side==="right"?[Mi-.05,l0,Bt[i].z]:Bt[i].side==="corridor"?[Bt[i].x,ya(i),Ai+.05]:[7,l0,xa-.05],textGen:null})};return Om.fetch(e,Bt.length,s0,o,()=>{}),{update:()=>{n=r,n.forEach(a=>{Om.load(e,a,s0)}),s0="low",Ll&&clearTimeout(Ll),Ll=setTimeout(()=>{s0="high"},k_)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Hm=Q((_T,$m)=>{"use strict";var H_=_l(),Fm=Ir(),qm=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function U_(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];qm.forEach(([n,o])=>{e.forEach(([a,i])=>t.push([a,i,n,o]))});let r=[];for(let n=0;n<qm.length-1;n++)for(let o=0;o<4;o++){let a=(o+1)%4,i=n*4+o,s=n*4+a,c=(n+1)*4+o,l=(n+1)*4+a;r.push(i,s,l,i,l,c)}return{verts:t,elems:r}}var B_=`#extension GL_OES_standard_derivatives : enable
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
}`,j_=`
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
}`;$m.exports=e=>{let t=H_.draw(e),r=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${ma().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(Fm.isPhone?1024:2048),detail:()=>Fm.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=U_(),o=e({frag:B_,vert:j_,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){r(i),o(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Bm=Q((ET,Um)=>{"use strict";var V_=bl();function W_(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),o=t.getUint32(8,!0),a=[],i=[];for(let v=0;v<3;v++)a.push(t.getFloat32(12+v*4,!0)),i.push(t.getFloat32(24+v*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let l=new Uint16Array(e,s,o);s+=o*2;let f=new Int8Array(e,s,n*3);return{nV:n,nI:o,mn:a,sz:i,pos:c,idx:l,nrm:f}}Um.exports=(e,t)=>{let r=[],n=[],o=[],a=[],i=null,s=t.statues.length,c=(f,v)=>{let h=r.length/3,u=v.height,m=Math.cos(v.yaw),d=Math.sin(v.yaw),p=v.base!==void 0?v.base:t.pedestalTop;for(let g=0;g<f.nV;g++){let x=(f.mn[0]+f.pos[g*3]/65535*f.sz[0])*u,w=(f.mn[1]+f.pos[g*3+1]/65535*f.sz[1])*u,b=(f.mn[2]+f.pos[g*3+2]/65535*f.sz[2])*u;r.push(v.x+m*x+d*b,p+w,v.z-d*x+m*b);let A=f.nrm[g*3]/127,T=f.nrm[g*3+1]/127,P=f.nrm[g*3+2]/127;n.push(m*A+d*P,T,-d*A+m*P),o.push(v.mat||1,0,0)}for(let g=0;g<f.nI;g++)a.push(h+f.idx[g])},l=()=>{a.length!==0&&(i=V_(e,{position:r,normal:n,mat:o,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1))};return t.statues.forEach(f=>{fetch("res/"+f.file).then(v=>{if(!v.ok)throw new Error("Could not load "+f.file);return v.arrayBuffer()}).then(v=>c(W_(v),f)).catch(v=>console.error(v)).then(()=>{--s===0&&l()})}),function(){i&&i()}}});var tv=Q((MT,Rl)=>{"use strict";var X_=io(),Ot=1.29032,vo=[9.2968,2,5.9],Y_=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],f0=2147.64,jm=725,Vm=1288,Wm=1450,Xm=2576,fr=-5.197,xo=3.865,zn=10.135,yo=-14.679,Ti=-30.229,Si=7.232,Ym=-45.713,ba=17.1*Ot,go=16.6*Ot,ki=16.6*Ot,Km=[6.9,17.1],h0=[2.95,16.6],K_=1.6,Q_=0,Z_=1,Qm=2,Cl=3,Zm=4,Jm=5,J_=6;function e4(){let e=[],t=[],r=[],n=[],o=X_.createBuilder(e,t,r,n),a=(l,f,v,h,u,m,d=1,p=1)=>{let g=[];for(let x=0;x<=d;x++){let w=[];for(let b=0;b<=p;b++){let A=[l[0]+f[0]*x/d+v[0]*b/p,l[1]+f[1]*x/d+v[1]*b/p,l[2]+f[2]*x/d+v[2]*b/p],T=m(A);w.push(o.vert(A,h,[u,T[0],T[1]]))}g.push(w)}for(let x=0;x<d;x++)for(let w=0;w<p;w++)o.tri(g[x][w],g[x+1][w],g[x][w+1]),o.tri(g[x+1][w],g[x+1][w+1],g[x][w+1])},i=l=>f=>[(vo[2]-f[2])/Ot-l,f[1]/Ot];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],Q_,l=>[l[0]/Ot,l[2]/Ot],13,14),a([xo,0,fr],[0,0,yo-fr],[0,ba,0],[1,0,0],Z_,i(8.6),6,6),a([-40,0,fr],[xo+40,0,0],[0,ba,0],[0,0,1],Qm,l=>[(xo-l[0])/Ot,l[1]/Ot],8,4),a([-40,0,-.36],[0,0,fr+.36],[0,ba,0],[1,0,0],Qm,l=>[-l[2]/Ot,l[1]/Ot]),a([zn,0,-80],[0,0,fr+80],[0,go,0],[-1,0,0],Zm,i(8.6),12,6),a([zn,0,fr],[60,0,0],[0,go,0],[0,0,1],Jm,l=>[(l[0]-zn)/Ot,l[1]/Ot],8,4),a([70,0,fr],[0,0,-.36-fr],[0,go,0],[-1,0,0],Jm,l=>[-l[2]/Ot,l[1]/Ot]);let s=l=>[(l[0]-vo[0])/Ot+4.18,l[1]/Ot];a([-20,0,Ti],[Si+20,0,0],[0,ki,0],[0,0,1],Cl,s,8,6),a([Si,0,Ti],[0,0,Ym-Ti],[0,ki,0],[1,0,0],Cl,i(28),4,4),a([Si,0,Ym],[zn-Si,0,0],[0,go,0],[0,0,1],Zm,l=>[(l[0]-vo[0])/Ot,l[1]/Ot],2,4),a([-20,0,yo],[0,0,Ti-yo],[0,ki,0],[1,0,0],Cl,i(16),4,4);let c=(l,f,v,h)=>a(l,f,v,h,J_,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:r,attr:n}}function mo(e,t,r,n){let o=e.texture({data:[[n]],...r,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{o({data:a,...r,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),o}var qr=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",t4=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,yo],[xo,ba,fr]],[[zn,0,-80],[70,go,fr]],[[-20,0,-80],[Si,ki,Ti]],[[-40,0,-80],[-20,ki,yo]]],r4=t4.map(e=>`if (hitBox(ro, rd, ${qr(e[0])}, ${qr(e[1])}, 1e4) ) return 0.0;`).join(`
		`),ev="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>Y_[t][e].toFixed(6)).join(", ")).join(", ")+")",n4=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${qr([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${r4}
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
	vec3 ro = ${qr(vo)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${qr([-40,0,yo])}, ${qr([xo-.02,ba,fr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${qr([zn+.02,0,-80])}, ${qr([70,go,fr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${ev} * (p - ${qr(vo)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${jm.toFixed(2)} + ${f0.toFixed(3)} * pc.x / pc.z) / ${Wm.toFixed(1)},
		(${Vm.toFixed(2)} - ${f0.toFixed(3)} * pc.y / pc.z) / ${Xm.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${ev} * (p - ${qr(vo)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${jm.toFixed(2)} + ${f0.toFixed(3)} * pc.x / pc.z) / ${Wm.toFixed(1)},
		(${Vm.toFixed(2)} - ${f0.toFixed(3)} * pc.y / pc.z) / ${Xm.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${qr(vo)}), n));
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
		base = texture2D(cobbleTex, fuv / ${K_.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Km[0].toFixed(2)}, 1.0 - fuv.y / ${Km[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${h0[0].toFixed(2)}, 1.0 - fuv.y / ${h0[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${h0[0].toFixed(2)}, 1.0 - fuv.y / ${h0[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(xo-.05).toFixed(3)} && v_pos.x < ${(zn+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${yo.toFixed(3)};
		projectable = projectable && v_pos.z < ${(fr+4.5).toFixed(3)};
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
}`,o4=`
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
}`,a4=lr();Rl.exports=e=>{let t=e4(),r={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},o={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=mo(e,"res/street/photo.jpg",r,[190,160,120]),i=mo(e,"res/street/photo_night.jpg",r,[12,14,22]),s=mo(e,"res/street/photo_mask.png",r,[255,255,255]),c=mo(e,"res/street/facade_pink.jpg",n,[200,150,135]),l=mo(e,"res/street/facade_yellow.jpg",n,[225,180,95]),f=mo(e,"res/street/facade_cream.jpg",n,[215,200,175]),v=mo(e,"res/street/cobbles.jpg",o,[95,95,95]),h=Date.now(),u=e({frag:n4,vert:o4,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:l,creamTex:f,cobbleTex:v,photoNight:i,night:()=>a4.night,time:()=>(Date.now()-h)/1e3}});return function(){u()}};Rl.exports.layout={MOUTH_Z:fr,PINK_X:xo,RIGHT_X:zn,PINK_H:ba,CREAM_H:go,S:Ot}});var ov=Q((AT,nv)=>{"use strict";var i4=lr().GLSL,{glassPanes:s4}=so(),rv=Jt();function c4(){let e=[],t=[],r=(n,o)=>{for(let a of n)e.push(a),t.push(o)};return r(s4(),[0,0,1]),r(rv.windowGlass(),[0,0,1]),r(rv.farDoorGlass(),[1,0,0]),{position:e,normal:t}}nv.exports=e=>{let t=c4(),r=e({frag:`
		precision highp float;
		${i4}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r()}}});var wv=Q((TT,Gl)=>{"use strict";var fv=lr().GLSL,l4=io(),Il=Ir(),{wallWithHoles:f4,C:In}=Jt(),Le=.28,Y={westBack:14.4,westCol:15-Le,eastCol:37.4+Le,eastBack:41.8,south:In.z1+.7,northCol:In.z1+.7+16,northBack:In.z1+.7+19,cx:(15+37.4)/2,cz:(In.z1+.7+In.z1+.7+16-Le)/2},nt={x0:Y.westCol+Le,x1:Y.eastCol-Le,z0:Y.south,z1:Y.northCol-Le},Wt=3.3,Ci=.92,Pn=5.6,av=6,Sr=11.9,Rn=9.6,We={x0:Y.cx-2.9,x1:Y.cx+2.9,top:14.4},x0=7,hv=4,Nl=(Y.eastCol-Y.westCol)/x0,h4=(Y.northCol-Y.south)/hv,uv=3,Ii=.26,Eo=1.4,wo=1.1,d0=3,Xr=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(r=>r/t)})(),_e={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},Yr=[],dv=(e,t,r)=>[Y.cx+e,t,Y.cz+r],p0=dv(-5.9,0,3.4),Nn=.85,Cn={c:[p0[0],4.6*Nn+.5,p0[2]],r:[5*Nn,3.6*Nn,4.5*Nn]},pv=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[p0[0]+e.d[0]*Nn,e.d[1]*Nn+.5,p0[2]+e.d[2]*Nn],r:e.r.map(t=>t*Nn),n:e.n}));for(let e of pv)Yr.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var u4=[3.6,6.3,9];for(let e of u4){let t=8.6+e%1.7*.6;Yr.push({c:dv(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var d4=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:Y.cx+e.d[0],z:Y.cz+e.d[1],bloom:e.bloom}));for(let e of d4)Yr.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var Ol=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[Y.cx+Math.cos(t)*2.3,Y.cz+Math.sin(t)*2.3]});for(let[e,t]of Ol)Yr.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var mv=[];{let e=(r,n,o,a,i,s)=>{let c=Math.hypot(o-r,a-n),l=Math.floor(c/.9);for(let f=0;f<=l;f++){let v=f/l,h=r+(o-r)*v,u=n+(a-n)*v;i!==void 0&&Math.abs((o!==r?h:u)-i)<s||mv.push([h,u])}};e(nt.x0+.45,nt.z0+1.2,nt.x0+.45,nt.z1-.45,Y.cz,1),e(nt.x1-.45,nt.z0+1.2,nt.x1-.45,nt.z1-.45,Y.cz,1),e(nt.x0+.45,nt.z1-.45,nt.x1-.45,nt.z1-.45,Y.cx,1.9)}var p4=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],m0=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function _a(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),f=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Gt(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),[s,0,0])}function m4(e,t,r){return{vert:(n,o,a)=>e.vert(t(n),r(o),a),tri:e.tri}}var v4={north:[e=>[e[0],e[1],Y.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[Y.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[Y.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function vv(e,t,r,n,o){let a=[];for(let i=0;i<r;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===r-1?o:.02);a.push([s,c,e+(i+.5)*t])}return a}var g4=vv(Y.westCol,Nl,x0,Le+Ii,Le+Ii),iv=vv(Y.south,h4,hv,.32,Le+Ii),wa=[Y.cx-32.35,Y.northCol-77],x4=Array.from({length:x0-1},(e,t)=>Y.westCol+(t+1)*Nl),gv=e=>(e[1]-e[0])/2-.2,Ri=e=>(e[0]+e[1])/2;function y4(e,t){let r=Ri(e),n=gv(e);return{u0:e[0],u1:e[1],bottom:t?0:Ci,head:o=>{let a=Math.abs(o-r);return a<n?Wt+Math.sqrt(n*n-a*a):Wt},step:.05}}function b4(e,t,r){return{u0:e-r,u1:e+r,bot:n=>t-Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),step:.04,mat:[_e.STONE,0,0]}}function w4(e,t,r,n){return{u0:e-t/2,u1:e+t/2,bottom:r,head:()=>n,step:.5,mat:[_e.STONE,0,0]}}function sv(e,t,r){let[n,o]=v4[t],a=m4(e,n,o),i=[];r.arches.forEach((f,v)=>i.push(y4(f,v===r.open)));let s=[];for(let f of r.bays||r.arches){let v=Ri(f);r.oculi&&i.push(b4(v,6.85,.3)),s.push({c:v,y0:r.win[0],y1:r.win[1],w:1.05})}for(let f of r.extraWindows||[])s.push(f);for(let f of s)i.push(w4(f.c,f.w,f.y0,f.y1));for(let f of r.extraHoles||[])i.push(f);f4(a,{u0:r.u0,u1:r.u1,w0:-Le,w1:Le,top:r.top,holes:i,mat:[_e.BRICK,0,0],revealMat:[_e.BRICK,0,0],noEnds:r.noEnds,cuts:r.cuts,topStep:.25});let c=(f,v,h,u,m,d,p)=>{let g=n([f,v,h]),x=n([u,m,d]);Gt(e,g[0],g[1],g[2],x[0],x[1],x[2],p)},l=(f,v,h,u,m,d)=>_a(a,f,v,h,u,m,[d,0,0]);for(let f of r.arches){let v=Ri(f),h=gv(f),u=28;for(let m of[Le,-Le]){let d=m>0?1:-1,p=m+d*.025;for(let g=0;g<u;g++){let x=Math.PI*g/u,w=Math.PI*(g+1)/u,b=(R,D)=>[v+Math.cos(R)*D,Wt+Math.sin(R)*D],A=b(x,h),T=b(w,h),P=b(x,h+.26),C=b(w,h+.26);l([A[0],A[1],p],[T[0],T[1],p],[C[0],C[1],p],[P[0],P[1],p],[0,0,d],_e.STONE);let k=Math.cos((x+w)/2),U=Math.sin((x+w)/2);l([P[0],P[1],m],[C[0],C[1],m],[C[0],C[1],p],[P[0],P[1],p],[k,U,0],_e.STONE)}}}if(r.arches.forEach((f,v)=>{v!==r.open&&c(f[0]-.02,Ci,-Le-.05,f[1]+.02,Ci+.09,Le+.05,_e.STONE)}),c(r.u0,av,-Le,r.u1,av+.18,Le+.09,_e.STONE),c(r.u0,r.win[0]-.12,Le-.01,r.u1,r.win[0],Le+.06,_e.STONE),r.cornice)for(let[f,v,h]of r.cornice)c(f,h-.22,Le-.01,v,h,Le+.16,_e.STONE),c(f,h,Le-.01,v,h+.16,Le+.42,_e.STONE);for(let{c:f,y0:v,y1:h,w:u,door:m}of s){let d=u/2;if(l([f-d-.01,v,.06],[f+d+.01,v,.06],[f+d+.01,h,.06],[f-d-.01,h,.06],[0,0,1],m?_e.DARK:_e.PANE),m){c(f-d-.16,0,Le-.01,f-d,h+.16,Le+.07,_e.STONE),c(f+d,0,Le-.01,f+d+.16,h+.16,Le+.07,_e.STONE),c(f-d-.16,h,Le-.01,f+d+.16,h+.2,Le+.09,_e.STONE),c(f-d,0,.07,f+d,h-.02,.12,_e.SHUTTER),c(f-.012,0,.12,f+.012,h-.02,.14,_e.DARK);continue}for(let p of[-1,1]){let g=f+p*d;c(g+p*.02,v+.02,Le+.02,g+p*(d+.025),h-.02,Le+.06,_e.SHUTTER)}c(f-d-.09,h,Le-.01,f+d+.09,h+.16,Le+.05,_e.STONE),c(f-d-.09,v-.1,Le-.01,f+d+.09,v,Le+.09,_e.STONE),c(f-.015,v,.06,f+.015,h,.09,_e.SHUTTER),c(f-d,(v+h)/2-.015,.06,f+d,(v+h)/2+.015,.09,_e.SHUTTER)}if(r.oculi)for(let f of r.bays||r.arches){let v=Ri(f);l([v-.31,6.54,0],[v+.31,6.54,0],[v+.31,7.16,0],[v-.31,7.16,0],[0,0,1],_e.DARK)}for(let f of r.cols){let v=Ci+.09,h=n([f,0,0]);Gt(e,h[0]-.24,v,h[2]-.24,h[0]+.24,v+.12,h[2]+.24,_e.MARBLE),e.lathe([[.23,v+.12,1],[.24,v+.17],[.2,v+.24],[.215,v+.28],[.17,v+.34,1],[.165,v+.6],[.155,Wt-.5],[.15,Wt-.38,1],[.175,Wt-.34,1],[.17,Wt-.3],[.2,Wt-.22],[.27,Wt-.15],[.29,Wt-.12,1]],h[0],h[2],18,{mat:()=>[_e.MARBLE,0,0]}),Gt(e,h[0]-.29,Wt-.12,h[2]-.29,h[0]+.29,Wt+.01,h[2]+.29,_e.STONE)}r.walk&&r.walk(e)}function _4(e){let t=[-1,0,1].map(o=>{let a=Y.cx+o*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[_e.STONE,0,0]}});sv(e,"north",{u0:Y.westCol-Le,u1:Y.eastCol+Le,top:o=>o>We.x0+1e-6&&o<We.x1-1e-6?We.top:Sr,cuts:[We.x0,We.x0+1e-5,We.x1-1e-5,We.x1],arches:g4,open:uv,cols:x4,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[Y.westCol-Le-3.3,We.x0,Sr],[We.x1,Y.eastCol+Le+3.3,Sr],[We.x0-.2,We.x1+.2,We.top]],walk:o=>{Gt(o,nt.x0,Pn,Y.northCol+Le,nt.x1,Pn+.2,Y.northBack,_e.PLASTER),Gt(o,nt.x0,0,Y.northBack,nt.x1,Pn,Y.northBack+.3,_e.PLASTER);for(let a of[Y.cx-7.2,Y.cx,Y.cx+7.2])_a(o,[a-.8,0,Y.northBack-.01],[a+.8,0,Y.northBack-.01],[a+.8,2.9,Y.northBack-.01],[a-.8,2.9,Y.northBack-.01],[0,0,-1],[_e.DARK,0,0]),Gt(o,a-.98,0,Y.northBack-.06,a+.98,3.12,Y.northBack,_e.STONE),_a(o,[a-.8,0,Y.northBack-.07],[a+.8,0,Y.northBack-.07],[a+.8,2.9,Y.northBack-.07],[a-.8,2.9,Y.northBack-.07],[0,0,-1],[_e.DARK,0,0])}}),_a(e,[We.x0,11,Y.northCol+.2],[We.x1,11,Y.northCol+.2],[We.x1,13.6,Y.northCol+.2],[We.x0,13.6,Y.northCol+.2],[0,0,-1],[_e.DARK,0,0]),Gt(e,We.x0+.3,10.88,Y.northCol-Le-.06,We.x1-.3,11,Y.northCol-Le+.1,_e.STONE),Gt(e,Y.westBack,Pn+.2,Y.northBack,Y.eastBack,Sr,Y.northBack+3.4,_e.BRICK),Gt(e,Y.westBack,Rn,Y.northCol-Le,Y.westCol-Le,Sr,Y.northCol+Le,_e.BRICK),Gt(e,Y.eastCol+Le,Rn,Y.northCol-Le,Y.eastBack,Sr,Y.northCol+Le,_e.BRICK),Gt(e,Y.westBack,Pn+.2,Y.northCol+Le+.12,Y.eastBack,Sr,Y.northBack,_e.BRICK),Li(e,[Y.westBack-.5,Sr+.16,Y.northCol-Le-.42],[We.x0-Y.westBack+.5,0,0],[0,2.6,4.4],_e.ROOF),Li(e,[We.x1,Sr+.16,Y.northCol-Le-.42],[Y.eastBack+.5-We.x1,0,0],[0,2.6,4.4],_e.ROOF),Li(e,[We.x0-.3,We.top+.16,Y.northCol-Le-.42],[We.x1-We.x0+.6,0,0],[0,1.4,3],_e.ROOF),cv(e,[We.x0-.3,We.top+.16,Y.northCol-Le-.42],[We.x0-.3,We.top+1.56,Y.northCol-Le+2.58],[We.x0-.3,We.top+.16,Y.northCol-Le+2.58],[-1,0,0],_e.BRICK),cv(e,[We.x1+.3,We.top+.16,Y.northCol-Le-.42],[We.x1+.3,We.top+1.56,Y.northCol-Le+2.58],[We.x1+.3,We.top+.16,Y.northCol-Le+2.58],[1,0,0],_e.BRICK),Gt(e,We.x0,Sr,Y.northCol+Le,We.x1,We.top,Y.northCol+2.6,_e.BRICK);for(let[o,a]of[[Y.cx-9.8,Y.northBack+.6],[Y.cx+9.4,Y.northBack+.4],[Y.cx-4.6,Y.northBack+1]])Gt(e,o-.4,12.5,a-.4,o+.4,15.4,a+.4,_e.BRICK),Gt(e,o-.52,15.4,a-.52,o+.52,15.62,a+.52,_e.STONE);let r=(o,a,i)=>{let s=o==="west"?-1:1,c=[];iv.forEach((v,h)=>{let u=Ri(v);h===1?c.push({c:u,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:u,y0:1,y1:2.75,w:1.05}),c.push({c:u,y0:3.85,y1:5.45,w:1.05})}),sv(e,o,{u0:Y.south,u1:Y.northCol-Le,top:()=>Rn,arches:[],bays:iv,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[Y.south,Y.northCol-Le,Rn]]}),Gt(e,a,0,Y.south,i+s*(Le+.12),Rn,Y.northBack+.3,_e.BRICK);let l=i-s*Le;Gt(e,l,0,Y.south,l-s*.06,.55,Y.northCol-Le,_e.STONE);let f=i-s*(Le+.42);Li(e,[f,Rn+.16,Y.south],[0,0,Y.northCol-Le-Y.south],[a-f+s*.4,1.9,0],_e.ROOF)};r("west",Y.westBack,Y.westCol),r("east",Y.eastBack,Y.eastCol);let n=In.x1+.7;Gt(e,13.65,7.4,Y.south-.02,n,7.62,Y.south+.14,_e.STONE),Gt(e,13.65,10.4,Y.south-.02,n,10.6,Y.south+.38,_e.STONE),Li(e,[13.65,10.6,Y.south+.38],[n-13.65,0,0],[0,2.2,-5],_e.ROOF)}function cv(e,t,r,n,o,a){let i=[a,0,0];e.tri(e.vert(t,o,i),e.vert(r,o,i),e.vert(n,o,i))}function Li(e,t,r,n,o){let a=m0([r[1]*n[2]-r[2]*n[1],r[2]*n[0]-r[0]*n[2],r[0]*n[1]-r[1]*n[0]]),i=a[1]<0?a.map(l=>-l):a,s=(l,f)=>[t[0]+r[0]*l+n[0]*f,t[1]+r[1]*l+n[1]*f,t[2]+r[2]*l+n[2]*f];_a(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[o,0,0]);let c=.08;_a(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],m0([-n[0],0,-n[2]]),[o,0,0])}function E4(e){let t=Y.westBack,r=Y.eastBack,n=Y.south,o=Y.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let l=0;l<=i;l++){let f=[t+(r-t)*c/a,0,n+(o-n)*l/i];s[c].push(e.vert(f,[0,1,0],[_e.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let l=0;l<i;l++)e.tri(s[c][l],s[c+1][l],s[c+1][l+1]),e.tri(s[c][l],s[c+1][l+1],s[c][l+1])}var zi=.46,_o=.58,bo=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function M4(e,t,r){let n=wo+r,o=(e>0?nt.x1-Y.cx:Y.cx-nt.x0)-Eo-r,a=wo+r,i=(t>0?nt.z1-Y.cz:Y.cz-nt.z0)-Eo-r,s=d0+r,c=Math.sqrt(s*s-n*n),l=Math.sqrt(s*s-a*a),f=[[n,c],[n,i],[o,i],[o,a],[l,a]],v=Math.atan2(a,l),h=Math.atan2(c,n);for(let u=1;u<10;u++){let m=v+(h-v)*u/10;f.push([Math.cos(m)*s,Math.sin(m)*s])}return f.map(([u,m])=>[Y.cx+e*u,Y.cz+t*m])}function A4(e,t,r){let n=r[0]-t[0],o=r[1]-t[1],a=Math.hypot(n,o),i=n/a,s=o/a,c=-s,l=i,f=zi*.5,v=-f,h=a+f,u=[],m=Math.max(1,Math.ceil((h-v)/1));for(let d=0;d<=m;d++){let p=v+(h-v)*d/m,g=[];for(let x=0;x<bo.length;x++){let[w,b]=bo[x],A=Math.min(bo.length-2,x),T=bo[Math.max(0,x-1)],P=bo[Math.min(bo.length-1,x+1)],C=(P[0]-T[0])*zi,U=(P[1]-T[1])*_o,R=-C,D=Math.hypot(U,R)||1,q=[t[0]+i*p+c*w*zi,b*_o,t[1]+s*p+l*w*zi],B=[c*(-U/D),-R/D,l*(-U/D)];g.push(e.vert(q,B[1]<-.2?[c*Math.sign(w),.3,l*Math.sign(w)]:B,[_e.HEDGE,0,0]))}u.push(g)}for(let d=0;d<m;d++)for(let p=0;p<bo.length-1;p++)e.tri(u[d][p],u[d+1][p],u[d+1][p+1]),e.tri(u[d][p],u[d+1][p+1],u[d][p+1]);for(let[d,p]of[[0,-1],[m,1]]){let g=u[d],x=e.vert([t[0]+i*(d?h:v),_o*.5,t[1]+s*(d?h:v)],[i*p,0,s*p],[_e.HEDGE,0,0]);for(let w=0;w<g.length-1;w++)e.tri(x,g[w],g[w+1])}}function T4(e){for(let t of[-1,1])for(let r of[-1,1]){let n=M4(t,r,.3);for(let o=0;o<n.length;o++)A4(e,n[o],n[(o+1)%n.length])}}function S4(e){let t=Y.cx,r=Y.cz,n=()=>[_e.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,r,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,r,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,r,16,{mat:()=>[_e.DARK,0,0]});let o={mat:()=>[_e.IRON,0,0]};e.tube([[t-.72,1.1,r],[t-.72,1.9,r],[t-.7,2.3,r]],()=>.035,8,6,o),e.tube([[t+.72,1.1,r],[t+.72,1.9,r],[t+.7,2.3,r]],()=>.035,8,6,o);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,r])}e.tube(a,()=>.03,20,6,o),e.tube([[t-.45,2.25,r],[t,2.38,r],[t+.45,2.25,r]],()=>.02,8,5,o),e.ellipsoid([t,2.32,r],[.03,.13,.13],6,10,o);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let l=c/12*Math.PI*1.6,f=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(l)*f*i*-1+0),1.95+Math.sin(l)*f,r])}e.tube(s,()=>.016,16,5,o)}}function k4(e){for(let[t,r]of Ol)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,r,20,{mat:()=>[_e.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,r,12,{mat:()=>[_e.SOIL,0,0]}),e.tube([[t,.6,r],[t+.02,1,r-.01],[t-.01,1.45,r+.02]],n=>.045-n*.02,6,6,{mat:()=>[_e.BARK,0,0]})}function L4(e){let[t,,r]=Cn.c,n=yv(7),o=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of o){let c=[[t+a*.05,0,r+i*.05],[t+a*.25,s*.35,r+i*.25],[t+a*.6,s*.7,r+i*.6],[t+a,s,r+i],[t+a*1.35+(n()-.5),s+1.4,r+i*1.35+(n()-.5)]];e.tube(c,l=>.2*(1-l*.75),14,9,{mat:()=>[_e.BARK,0,0]});for(let l=0;l<2;l++){let f=.55+l*.2,v=[t+a*f,s*f,r+i*f],h=n()*Math.PI*2;e.tube([v,[v[0]+Math.cos(h)*1.3,v[1]+.9,v[2]+Math.sin(h)*1.3],[v[0]+Math.cos(h)*2.3,v[1]+1.4+n(),v[2]+Math.sin(h)*2.3]],u=>.08*(1-u*.7),8,6,{mat:()=>[_e.BARK,0,0]})}}for(let a of Yr.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[_e.BARK,0,0]})}function z4(e){let t=()=>[_e.FARBRICK,0,0],r=()=>[_e.LEAD,0,0],n=(a,i,s,c,l,f)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let v=[];for(let u=0;u<=12;u++){let m=u/12*Math.PI/2,d=Math.cos(m)*s,p=Math.sin(m)*l;f&&(d*=1-.18*Math.sin(m*2)),v.push([Math.max(d,s*.12),c+p])}e.lathe(v,a,i,28,{mat:r});let h=c+l;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:r})};Gt(e,14,0,104,52,26,150,_e.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:r});let o=(a,i,s)=>{Gt(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,_e.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};o(20.5,109,36),o(46.5,112,38)}function C4(e){let r=[Y.cx,0,Y.cz],n=24,o=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=o;c++){let l=Math.PI/2*(c/o)-.05,f=[Math.sin(s)*Math.cos(l),Math.sin(l),Math.cos(s)*Math.cos(l)],v=[r[0]+f[0]*420,r[1]+f[1]*420,r[2]+f[2]*420];a[i].push(e.vert(v,[-f[0],-f[1],-f[2]],[_e.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<o;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function R4(){let e=[],t=[],r=[],n=[],o=l4.createBuilder(e,t,r,n);return E4(o),_4(o),T4(o),S4(o),k4(o),L4(o),o.save(),o.translate(wa[0],0,wa[1]),z4(o),o.restore(),C4(o),{position:e,normal:t,elements:r,attr:n}}var xv=[[[13.65,0,In.z0-.7],[In.x1+.7,10.6,Y.south]],[[Y.westBack,Pn,Y.northCol-Le],[Y.eastBack,Sr,Y.northBack+3.4]],[[We.x0,Sr,Y.northCol-Le],[We.x1,We.top,Y.northCol+2.6]],[[Y.westBack,0,Y.south],[Y.westCol+Le,Rn,Y.northBack+.3]],[[Y.eastCol-Le,0,Y.south],[Y.eastBack,Rn,Y.northBack+.3]],[[14+wa[0],0,104+wa[1]],[52+wa[0],26,150+wa[1]]]];function I4(e,t,r,n){let o=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<r[i]||e[i]>n[i])return!1;continue}let s=(r[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),o=Math.max(o,s),a=Math.min(a,c),o>a)return!1}return!0}function u0(e,t,r,n){let o=[(e[0]-r[0])/n[0],(e[1]-r[1])/n[1],(e[2]-r[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=o[0]*a[0]+o[1]*a[1]+o[2]*a[2],c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-1,l=s*s-i*c;if(l<=0)return 0;let f=Math.sqrt(l),v=Math.max(0,(-s-f)/i),h=(-s+f)/i;return Math.max(0,h-v)}function Pl(e){for(let[t,r]of xv)if(I4(e,Xr,t,r))return 0;return 1}function yv(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function P4(){let e=[],t=[],r=[],n=[],o=[],a=[],i=[],s=yv(21),c=(m,d,p,g,x,w,b)=>{let A=e.length/3;for(let[T,P]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...m),t.push(T,P),r.push(d,p,g),n.push(...x),o.push(...w),a.push(...b);i.push(A,A+1,A+2,A,A+2,A+3)},l=(m,d)=>{let p=1;for(let g of Yr){if(g===d||!g.shadow)continue;let x=u0(m,Xr,g.c,g.r);x>0&&(p*=Math.exp(-x*.9))}return p},f=Yr.map(m=>({...m,pts:null}));for(let m of f)for(let d=0;d<m.n;d++){let p;do p=[s()*2-1,s()*2-1,s()*2-1];while(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]>1);let g=Math.hypot(p[0],p[1],p[2])||1,x=Math.pow(s(),.35)*.98,w=[p[0]/g*x,p[1]/g*x,p[2]/g*x];if(m.spindle){let q=w[1],B=Math.sqrt(Math.max(.02,1-q*q))*(q>0?1-q*.55:1+q*.25),K=Math.hypot(w[0],w[2])||1,te=B*Math.min(1,K*1.4);w=[w[0]/K*te,q,w[2]/K*te]}m.magnolia&&w[1]<-.55&&(w[1]=-.55+(w[1]+.55)*.35);let b=[m.c[0]+w[0]*m.r[0],m.c[1]+w[1]*m.r[1],m.c[2]+w[2]*m.r[2]],A,T;if(m.magnolia){let q=0;for(let te of pv)q=Math.max(q,u0(b,Xr,te.c,te.r));A=Math.exp(-q*1.1);let B=1;for(let te of Yr)if(!te.magnolia&&te.shadow){let re=u0(b,Xr,te.c,te.r);re>0&&(B*=Math.exp(-re*.9))}A*=Pl(b)*B;let K=p4(b,Cn.c);T=m0([K[0]/Cn.r[0]+w[0]*.5,K[1]/Cn.r[1]+w[1]*.5,K[2]/Cn.r[2]+w[2]*.5]),x=Math.min(1,Math.hypot(K[0]/Cn.r[0],K[1]/Cn.r[1],K[2]/Cn.r[2])*.6+x*.4)}else{let q=u0(b,Xr,m.c,m.r);A=Math.exp(-q*(m.spindle?2.2:1.25)),A*=Pl(b)*l(b,Yr[f.indexOf(m)]),T=m0([w[0]/m.r[0],w[1]/m.r[1],w[2]/m.r[2]])}let P=Math.max(0,T[0]*Xr[0]+T[1]*Xr[1]+T[2]*Xr[2]),C=.25+.75*Math.pow(x,1.5)*(.65+.35*(T[1]*.5+.5)),k=m.size[0]+(m.size[1]-m.size[0])*s(),U=.85+s()*.3,R=m.leaf.map(q=>q*U),D=m.cell;m.cell===3&&s()<.35&&(D=2),c(b,k,D,s()*Math.PI*2,[A,C,.35+.65*P],R,m.bloom)}for(let[m,d]of mv){let p=s()<.5;for(let g=0;g<3;g++){let x=[m+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],w=Pl(x)*l(x,null);c(x,.32+s()*.12,s()<.7?3:2,s()*6.28,[w,.6+s()*.3,.8],[.75,.9,.6],p?[1,.55,.75]:[.85,.8,1.15])}}let v=i.length/6,h=Array.from({length:v},(m,d)=>d);for(let m=v-1;m>0;m--){let d=Math.floor(s()*(m+1));[h[m],h[d]]=[h[d],h[m]]}let u=[];for(let m of h)for(let d=0;d<6;d++)u.push(i[m*6+d]);return{center:e,corner:t,par:r,light:n,tint:o,bloom:a,elements:u}}var Te=e=>e.toFixed(4),Pi=e=>`vec3(${Te(e[0])}, ${Te(e[1])}, ${Te(e[2])})`,bv=`
const vec3 SUN = ${Pi(Xr)};
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
`,N4=xv.map(([e,t])=>`if (hitBox(ro, SUN, ${Pi(e)}, ${Pi(t)})) return 0.0;`).join(`
	`),O4=Yr.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${Pi(e.c)}, ${Pi(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),G4=(e,t,r,n,o,a,i,s,c)=>`
	{
		float t = (${Te(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${Te(Pn)} && u > ${Te(r-Le)} && u < ${Te(r+n*o+Le)}) {
				float k = floor((u - ${Te(r)}) / ${Te(n)});
				float a = ${Te(r)} + k * ${Te(n)} + (k < 0.5 ? ${Te(a)} : 0.02);
				float b = ${Te(r)} + (k + 1.0) * ${Te(n)} - (k > ${Te(o-1.5)} ? ${Te(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Te(s)}) < 0.5 ? 0.0 : ${Te(Ci+.09)};
				bool hole = (q.y > sill && q.y < ${Te(Wt)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Te(Wt)} && d * d + (q.y - ${Te(Wt)}) * (q.y - ${Te(Wt)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,v0=wo+.3,g0=wo+.3,Ni=d0+.3,lv=nt.x1-Y.cx-Eo-.3,D4=nt.z1-Y.cz-Eo-.3,F4=Y.cz-nt.z0-Eo-.3,q4=Math.sqrt(Ni*Ni-v0*v0),$4=Math.sqrt(Ni*Ni-g0*g0),H4=[[Y.cx,Y.cz,.86,1.18],[Y.cx,Y.cz,1.25,.3],...Ol.map(([e,t])=>[e,t,.42,.65])].map(([e,t,r,n])=>`if (hitCyl(ro, vec2(${Te(e)}, ${Te(t)}), ${Te(r)}, ${Te(n)})) return 0.0;`).join(`
	`),U4=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Te(Y.cx)}, ${Te(Y.cz)}));
	float b1 = xz.y > ${Te(Y.cz)} ? ${Te(D4)} : ${Te(F4)};
	vec2 A = vec2(${Te(v0)}, ${Te(q4)}), Bp = vec2(${Te(v0)}, b1), C = vec2(${Te(lv)}, b1);
	vec2 D = vec2(${Te(lv)}, ${Te(g0)}), E = vec2(${Te($4)}, ${Te(g0)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Te(Ni)}));
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
	${N4}
	${G4("z",Y.northCol,Y.westCol,Nl,x0,Le+Ii,Le+Ii,uv,"ro.z > "+Te(Y.northCol-Le))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${H4}
	if (ro.y < ${Te(_o)} && ro.x > ${Te(nt.x0)} && ro.x < ${Te(nt.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Te(_o)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Te(zi*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Te(_o)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${O4}
	return tr;
}
`,B4=`
precision highp float;
${fv}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${bv}
${U4}

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

	if (kind == ${_e.SKY}.0) {
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

	if (kind == ${_e.GROUND}.0) {
		bool yard = P.x > ${Te(nt.x0)} && P.x < ${Te(nt.x1)} && P.z < ${Te(nt.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Te(nt.x0)}, ${Te(nt.x1)} - P.x);
			float ez = min(P.z - ${Te(nt.z0)}, ${Te(nt.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Te(Y.cx)}), dz = abs(P.z - ${Te(Y.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Te(Eo)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Te(Eo)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Te(d0)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Te(Y.cz)}, P.x - ${Te(Y.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Te(d0)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Te(wo)} || dz < ${Te(wo)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Te(wo)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Te(Y.cx)}, ${Te(Y.cz)})));
		}
	} else if (kind == ${_e.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${_e.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${_e.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${_e.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Te(_o)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${_e.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${_e.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${_e.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${_e.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${_e.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${_e.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${_e.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${_e.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${_e.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${_e.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${_e.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Te(Y.westCol)} || P.x > ${Te(Y.eastCol)} || P.z > ${Te(Y.northCol)}) && P.y < ${Te(Pn+.05)} && P.z > ${Te(Y.south-.1)} && P.z < ${Te(Y.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Te(Y.northCol)} ? P.z - ${Te(Y.northCol)} : (P.x < ${Te(Y.westCol)} ? ${Te(Y.westCol)} - P.x : P.x - ${Te(Y.eastCol)});
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
}`,j4=`
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
}`,V4=`
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
}`,W4=`
precision highp float;
${fv}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${bv}
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
}`;function X4(e,t,r){let n=e.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(t).then(o=>{if(!o.ok)throw new Error("Could not load "+t);return o.blob()}).then(o=>createImageBitmap(o,{premultiplyAlpha:"none"})).then(o=>n({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o)),n}Gl.exports=e=>{let t=R4(),r=P4(),n=X4(e,"res/garden/foliage.webp",[0,0,0,0]),o=Date.now(),a=()=>Il.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:20,i=e({frag:B4,vert:j4,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>Il.gardenDetail}}),s=e({frag:W4,vert:V4,attributes:{center:r.center,corner:r.corner,par:r.par,light:r.light,tint:r.tint,bloom:r.bloom},elements:new Uint32Array(r.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(r.elements.length*Il.leafShare/6)*6});return function(){i(),s()}};Gl.exports.layout={G:Y,YARD:nt,SUN:Xr}});var Sv=Q((ST,Tv)=>{"use strict";var Y4=lr().GLSL,K4=io(),{C:Av}=Jt(),kr=Av.x1+.35,$l=Av.zc,Dl=[kr-7.3,2,$l],_v=5.2*Math.PI/180,Ev=2100,Q4=725,Z4=1288,J4=1450,e6=2576,Mo=$l-3.2,Mv=$l+3.3,Fl=kr+5,ql=kr+11.7,y0=3.9,Oi=kr+22.7,b0=40;function t6(){let e=[],t=[],r=[],n=[],o=K4.createBuilder(e,t,r,n),a=(f,v,h,u,m,d)=>{let p=[];for(let g=0;g<=m;g++){p.push([]);for(let x=0;x<=d;x++){let w=[0,1,2].map(b=>f[b]+v[b]*g/m+h[b]*x/d);p[g].push(o.vert(w,u,[0,0,0]))}}for(let g=0;g<m;g++)for(let x=0;x<d;x++)o.tri(p[g][x],p[g+1][x],p[g+1][x+1]),o.tri(p[g][x],p[g+1][x+1],p[g][x+1])},i=Mv-Mo,s=.7;a([kr-s,0,Mo],[Fl-kr+s,0,0],[0,0,i],[0,1,0],6,4);let c=ql-Fl,l=Math.hypot(c,y0);return a([Fl,0,Mo],[c,y0,0],[0,0,i],[-y0/l,c/l,0],6,4),a([ql,y0,Mo],[Oi-ql,0,0],[0,0,i],[0,1,0],6,4),a([kr-s,0,Mo],[Oi-kr+s,0,0],[0,b0,0],[0,0,1],12,12),a([kr-s,0,Mv],[Oi-kr+s,0,0],[0,b0,0],[0,0,-1],12,12),a([Oi,0,Mo],[0,b0,0],[0,0,i],[-1,0,0],8,4),a([kr-s,b0,Mo],[Oi-kr+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:r,attr:n}}var $r=e=>e.toFixed(5),r6=`
precision highp float;
${Y4}
uniform sampler2D photo;
varying vec3 v_pos;

void main() {
	vec3 d = v_pos - vec3(${$r(Dl[0])}, ${$r(Dl[1])}, ${$r(Dl[2])});
	float c = ${$r(Math.cos(_v))}, s = ${$r(Math.sin(_v))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${$r(Q4)} + ${$r(Ev)} * d.z / fw, ${$r(Z4)} - ${$r(Ev)} * up / fw);
	vec2 uv = px / vec2(${$r(J4)}, ${$r(e6)});
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
}`,n6=`
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
}`;Tv.exports=e=>{let t=t6(),r=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(o=>{if(!o.ok)throw new Error("Could not load the Florence photo");return o.blob()}).then(o=>createImageBitmap(o)).then(o=>r({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o));let n=e({frag:r6,vert:n6,attributes:{position:t.position},elements:new Uint32Array(t.elements),uniforms:{photo:r},cull:{enable:!1}});return function(){n()}}});var Iv=Q((kT,Rv)=>{"use strict";var o6=lr().GLSL,{A:kv,BENCH:a6,SHAFT:Hl,TREE:Gi,oculusGLSL:i6}=Dr(),s6=Ir(),w0=Gi.sxz,Lv=Gi.sy,zv=Gi.yaw;function c6(e){let t=new DataView(e),r=t.getUint32(4,!0),n=t.getUint32(8,!0),o=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,r*3);s+=r*6;let l=new Uint16Array(e,s,r*2);s+=r*4;let f=new Int8Array(e,s,r*3);s+=r*3,s=s+3&-4;let v=new Uint32Array(e,s,o);return{nV:r,nWood:n,nI:o,mn:a,sz:i,pos:c,uv:l,nrm:f,idx:v}}function l6(e){let t=new Float32Array(e.nV*3),r=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),o=new Float32Array(e.nV),a=Math.cos(zv),i=Math.sin(zv);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*w0,l=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*Lv,f=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*w0;t[s*3]=kv.cx+a*c+i*f,t[s*3+1]=a6.soil+.02+l,t[s*3+2]=kv.zc-i*c+a*f;let v=e.nrm[s*3]/127/w0,h=e.nrm[s*3+1]/127/Lv,u=e.nrm[s*3+2]/127/w0,m=Math.hypot(v,h,u)||1;v/=m,h/=m,u/=m,r[s*3]=a*v+i*u,r[s*3+1]=h,r[s*3+2]=-i*v+a*u,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,o[s]=s>=e.nWood?1:0}return{position:t,normal:r,uv:n,leaf:o,elements:e.idx}}function Cv(e,t,r,n){let o=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>o({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...r})).catch(a=>console.error(a)),o}var tr=e=>e.toFixed(4),Ea=Gi.crownC,Ma=Gi.crownR,f6=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

const vec3 SHAFT = vec3(${tr(Hl[0])}, ${tr(Hl[1])}, ${tr(Hl[2])});

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
	vec3 cc = vec3(${tr(Ea[0])}, ${tr(Ea[1])}, ${tr(Ea[2])});
	vec3 cr = vec3(${tr(Ma[0])}, ${tr(Ma[1])}, ${tr(Ma[2])});
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
}`,On=ma(),h6=`
precision highp float;
${o6}
uniform float time;
${On.lanternGLSL(On.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${On.LANTERNS[On.TREE_LANTERN[0]].x.toFixed(3)}, ${On.LANTERNS[On.TREE_LANTERN[0]].y.toFixed(3)}, ${On.LANTERNS[On.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

${i6()}

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
	vec3 rel = (v_pos - vec3(${tr(Ea[0])}, ${tr(Ea[1])}, ${tr(Ea[2])})) / vec3(${tr(Ma[0])}, ${tr(Ma[1])}, ${tr(Ma[2])});
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
}`;Rv.exports=e=>{let t=null,r=Cv(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Cv(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),o=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=l6(c6(a));t=e({vert:f6,frag:h6,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:r,bark:n,time:()=>s6.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Bv=Q((LT,Bl)=>{"use strict";var Ul=lr().GLSL,{A:Pv,BENCH:$v,oculusGLSL:Hv}=Dr(),Nv=Ir(),u6=1.74,d6=1.877,Kr=u6/d6,To={x:Pv.cx-1.22,z:Pv.zc+.02,hipY:$v.seat+.115},Hr=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Ov=e=>[-e[0],-e[1],-e[2],e[3]],So=(e,t)=>{let r=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/r*n,e[1]/r*n,e[2]/r*n,Math.cos(t/2)]},Gv=(e,t,r)=>Hr(So([0,0,1],r*Math.PI/180),Hr(So([0,1,0],t*Math.PI/180),So([1,0,0],e*Math.PI/180))),p6=e=>{let t=Math.hypot(...e)||1;return e.map(r=>r/t)};function Gn(e,t,r){let[n,o,a,i]=t,s=n*n,c=o*o,l=a*a,f=n*o,v=n*a,h=o*a,u=i*n,m=i*o,d=i*a;return[(1-2*(c+l))*r[0],2*(f+d)*r[0],2*(v-m)*r[0],0,2*(f-d)*r[1],(1-2*(s+l))*r[1],2*(h+u)*r[1],0,2*(v+m)*r[2],2*(h-u)*r[2],(1-2*(s+c))*r[2],0,e[0],e[1],e[2],1]}function ln(e,t){let r=new Array(16);for(let n=0;n<4;n++)for(let o=0;o<4;o++)r[n*4+o]=e[o]*t[n*4]+e[4+o]*t[n*4+1]+e[8+o]*t[n*4+2]+e[12+o]*t[n*4+3];return r}function m6(e){let t=Math.hypot(e[0],e[1],e[2]),r=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),o=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/r,c=e[5]/r,l=e[6]/r,f=e[8]/n,v=e[9]/n,h=e[10]/n,u=o+c+h,m;if(u>0){let d=Math.sqrt(u+1)*2;m=[(l-v)/d,(f-i)/d,(a-s)/d,d/4]}else if(o>c&&o>h){let d=Math.sqrt(1+o-c-h)*2;m=[d/4,(s+a)/d,(f+i)/d,(l-v)/d]}else if(c>h){let d=Math.sqrt(1+c-o-h)*2;m=[(s+a)/d,d/4,(v+l)/d,(f-i)/d]}else{let d=Math.sqrt(1+h-o-c)*2;m=[(f+i)/d,(v+l)/d,d/4,(a-s)/d]}return p6(m)}var E0={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,r=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,o)=>{E0[e+"Hand"+n+"1"]=[0,0,t*(18+o*6)*r],E0[e+"Hand"+n+"2"]=[0,0,t*(26+o*6)*r],E0[e+"Hand"+n+"3"]=[0,0,t*16*r]})}function Ao(e,t,r){let n=e-t;return n-=Math.round(n),Math.exp(-(n/r)*(n/r))}function Dv(e){let t=9+20*Math.cos(2*Math.PI*e),r=4+13*Ao(e,.14,.07)+57*Ao(e,.72,.12),n=5*Ao(e,.06,.04)-9*Ao(e,.42,.12)+17*Ao(e,.62,.05)-3*Ao(e,.85,.1),o=-26*Ao(e,.58,.06);return{hip:t,knee:r,ankle:n,toe:o}}function v6(e){let t=(e%1+1)%1,r=Dv(t),n=Dv(t+.5),o=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*o,0,0],RightArm:[-16*o,0,0],LeftForeArm:[0,-14-8*Math.max(0,-o),0],RightForeArm:[0,14+8*Math.max(0,o),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-r.hip,0,0],LeftLeg:[r.knee,0,0],LeftFoot:[r.ankle,0,0],LeftToeBase:[r.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*o}}var Fv=`
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
}`,M0=ma(),qv=`
precision highp float;
${Ul}
uniform float time;
${M0.lanternGLSL(M0.TREE_LANTERN)}
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${Hv()}
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
	float light = 0.36 + 0.22 * up;
	// sun through the glass dome, dappled by the tree
	float ndl = max(dot(N, SHAFT), 0.0);
	float sun = ndl * oculusOpen(v_pos) * treeShade(v_pos);
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
	// at night, the little lantern by his head: warm on his face and coat,
	// and a glint on the leather
	vec3 lan = lanternLight(v_pos, N);
	col += t.rgb * lan * (1.3 + 1.2 * skin) + lan * gloss * 0.4;
	gl_FragColor = vec4(col, t.a);
}`;function g6(e,t){let r=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((o,a)=>{let i=new Image;i.onload=()=>o(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}var Uv={w:.13,h:.2},_0=e=>.011*(1-Math.pow(1-e,3));function x6(){let e=[],t=[],r=[],n=[],o=[],a=(d,p,g,x,w,b,A)=>{let T=e.length/3;[d,p,g,x].forEach((P,C)=>{e.push(...P),t.push(...w),r.push(...A[C]),n.push(b)}),o.push(T,T+1,T+2,T,T+2,T+3)},{w:i,h:s}=Uv,c=s/2,l=[[0,1],[1,1],[1,0],[0,0]],f=-.006,v=i+.001,h=c+.001;a([0,f,-h],[v,f,-h],[v,f,h],[0,f,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,f+.001,-h],[0,f+.001,h],[v,f+.001,h],[v,f+.001,-h],[0,1,0],2,l),a([-v,f,-h],[0,f,-h],[0,f,h],[-v,f,h],[0,-1,0],2,l),a([-v,f+.001,-h],[-v,f+.001,h],[0,f+.001,h],[0,f+.001,-h],[0,1,0],2,l);let u=8;for(let d of[1,-1]){for(let g=0;g<u;g++){let x=g/u,w=(g+1)/u,b=(.002+x*(i-.002))*d,A=(.002+w*(i-.002))*d,T=_0(x),P=_0(w),C=d>0?x:1-x,k=d>0?w:1-w,U=1,R=-(P-T)/(A-b);a([b,T,-c],[A,P,-c],[A,P,c],[b,T,c],[R,U,0],3,[[C,1],[k,1],[k,0],[C,0]]),a([b,f+.001,c],[A,f+.001,c],[A,P,c],[b,T,c],[0,0,1],4,l),a([b,T,-c],[A,P,-c],[A,f+.001,-c],[b,f+.001,-c],[0,0,-1],4,l)}let p=i*d;a([p,f+.001,-c],[p,_0(1),-c],[p,_0(1),c],[p,f+.001,c],[d,0,0],4,l)}let m=10;for(let d=0;d<m;d++){let p=d/m,g=(d+1)/m,x=e.length/3;for(let[w,b]of[[p,-c],[g,-c],[g,c],[p,c]])e.push(w,0,b),t.push(0,1,0),r.push(w,(b+c)/s),n.push(5);o.push(x,x+1,x+2,x,x+2,x+3)}return{pos:e,nrm:t,uv:r,kind:n,idx:o}}function y6(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let r=7,n=()=>(r=r*16807%2147483647,r/2147483647),o=(i,s,c,l,f,v,h)=>{for(let u=0;u<v;u++){let m=i+(n()-.5)*c*2,d=s+(n()-.5)*l*2,p=20+n()*60,g=t.createRadialGradient(m,d,0,m,d,p);g.addColorStop(0,`rgba(${f},${h})`),g.addColorStop(1,`rgba(${f},0)`),t.fillStyle=g,t.fillRect(m-p,d-p,p*2,p*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,l])=>{t.lineWidth=l,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var b6=`
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
		float r = u * ${Uv.w.toFixed(3)};
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
}`,w6=`
precision highp float;
${Ul}
uniform float time;
${M0.lanternGLSL(M0.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Hv()}
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
}`;function _6(){let e=[],t=[],r=[],n=[],o=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],l=[.8,.55,.22],f=[[0,-.15,l,2],[.0012,-.147,l,2],[.004,-.138,l,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],v=16;for(let h=0;h<f.length;h++){let[u,m,d,p]=f[h],g=p===2?.45:1;for(let x=0;x<=v;x++){let w=x/v*Math.PI*2;e.push(Math.cos(w)*u,m,Math.sin(w)*u*g);let b=Math.max(h-1,0),A=Math.min(h+1,f.length-1),T=f[A][0]-f[b][0],P=f[A][1]-f[b][1],C=Math.hypot(T,P)||1;t.push(Math.cos(w)*P/C,-T/C,Math.sin(w)*P/C/g),r.push(...d),n.push(p)}}for(let h=0;h<f.length-1;h++)for(let u=0;u<v;u++){let m=h*(v+1)+u,d=m+v+1;o.push(m,d,m+1,m+1,d,d+1)}return{pos:e,nrm:t,col:r,mat:n,idx:o}}var E6=`
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
}`,M6=`
precision highp float;
${Ul}
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
}`,A6=`
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
}`,T6=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Bl.exports=e=>{let t="res/avatar/",r=null,n=Date.now(),o=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[To.x,1.9,To.z],glow:0};Promise.all([fetch(t+"avatar.json").then(A=>A.json()),fetch(t+"avatar.bin").then(A=>A.arrayBuffer())]).then(([A,T])=>{r=s(A,T)}).catch(A=>console.error(A));let i=e.texture({data:[[[255,255,255,255]]]});function s(A,T){let P=(ae,ge)=>new Float32Array(T,ae,ge),C=A.bones,k=C.length,U={};C.forEach((ae,ge)=>{U[ae.name]=ge});let R=[];for(let ae=0;ae<k;ae++)R.push(Array.from(P(A.ibm+ae*64,16)));let D=C.map(ae=>Gn(ae.t,ae.r,ae.s)),q=[];for(let ae=0;ae<k;ae++){let ge=C[ae].parent;q[ae]=ge<0?D[ae]:ln(q[ge],D[ae])}let B=q.map(m6),K=A.meshes.map(ae=>{let ge=P(ae.pos,ae.n*3),qe=P(ae.nrm,ae.n*3),Pe=P(ae.uv,ae.n*2),be=new Uint8Array(T,ae.jnt,ae.n*4),ke=P(ae.wgt,ae.n*4),Ae=new Uint16Array(T,ae.idx,ae.ni),Fe={};for(let z in ae.morphs){let G=ae.morphs[z];Fe[z]={idx:new Uint16Array(T,G.idx,G.n),d:P(G.d,G.n*3)}}let je=new Float32Array(ae.n*3),Re=new Float32Array(ae.n*3),M=new Float32Array(ae.n*3),W=e.buffer({data:je,usage:"dynamic"}),N=e.buffer({data:Re,usage:"dynamic"}),ie=/hair/.test(ae.name),Se=/EyeAO|Eyelash/.test(ae.name),E=/Body|Head/.test(ae.name),y=ae.kind||0;return{m:ae,pos:ge,nrm:qe,uv:Pe,jnt:be,wgt:ke,idx:Ae,morphs:Fe,outP:je,outN:Re,work:M,pb:W,nbuf:N,tex:ae.tex?g6(e,t+ae.tex):i,kind:y,alphaScale:/EyeAO/.test(ae.name)?.25:1,blend:ae.blend||ie,alphaCut:ie?.35:Se?.02:0,skin:E?1:0}}),te=e({vert:Fv,frag:qv,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1}}),re=e({vert:Fv,frag:qv,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}});for(let ae of K)ae.uvBuf=e.buffer(ae.uv),ae.el=e.elements({data:ae.idx,type:"uint16"});let J=q[U.Hips],me=So([1,0,0],-Math.PI/2),xe=ln(Gn([To.x-J[12]*Kr,To.hipY-J[14]*Kr,To.z+J[13]*Kr],me,[1,1,1]),Gn([0,0,0],[0,0,0,1],[Kr,Kr,Kr])),Ce=new Array(k),He=-1,Ze=(ae,ge,qe)=>ln(Gn([ae,0,ge],So([0,1,0],qe),[1,1,1]),Gn([0,0,0],[0,0,0,1],[Kr,Kr,Kr])),Ne=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(ae=>U[ae]),Je=Ne.map(ae=>q[ae][13]*Kr);function Xe(ae){let ge=v6(ae.phase),qe={},Pe=Re=>{for(let M in Re){let W=Re[M],N=Gv(W[0],W[1],W[2]);qe[M]=qe[M]?Hr(qe[M],N):N}};Pe(ge.swing),Pe(ge.pose);let be=Math.cos(ae.heading),ke=-Math.sin(ae.heading),Ae=Ze(ae.x+be*ge.sway,ae.z+ke*ge.sway,ae.heading),Fe=new Array(k);for(let Re=0;Re<k;Re++){let M=C[Re],W=D[Re],N=qe[M.name];if(N){let ie=B[Re],Se=Hr(Ov(ie),Hr(N,ie));W=Gn(M.t,Hr(M.r,Se),M.s)}Fe[Re]=M.parent<0?ln(Ae,W):ln(Fe[M.parent],W)}let je=1/0;Ne.forEach((Re,M)=>{je=Math.min(je,Fe[Re][13]-Je[M])});for(let Re=0;Re<k;Re++)Fe[Re]=Fe[Re].slice(),Fe[Re][13]-=je,Ce[Re]=ln(Fe[Re],R[Re]);return{blink:0}}function ct(ae,ge){if(ge)return Xe(ge);let qe=Math.sin(ae*2*Math.PI/4.2),Pe=ae%3.7,be=Pe<.16?Math.sin(Pe/.16*Math.PI):0,Ae={RightArm:[0,0,11*Math.sin(ae*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((N,ie)=>{let Se=Math.sin(ae*1.1-ie*.5);Ae["RightHand"+N+"1"]=[0,0,8+12*Se],Ae["RightHand"+N+"2"]=[0,0,6+10*Se]});let Fe={},je=(N,ie)=>{for(let Se in N){let E=N[Se],y=Gv(E[0]*ie,E[1]*ie,E[2]*ie);Fe[Se]=Fe[Se]?Hr(Fe[Se],y):y}};je(E0,1),je({Spine1:[qe*.8,0,0],Spine2:[qe*.6,0,0]},1),je(Ae,1);let Re=new Array(k),M=new Array(k);for(let N=0;N<k;N++){let ie=C[N],Se=D[N],E=Fe[ie.name];if(E){let y=B[N],z=Hr(Ov(y),Hr(E,y));Se=Gn(ie.t,Hr(ie.r,z),ie.s)}Re[N]=ie.parent<0?ln(xe,Se):ln(Re[ie.parent],Se),M[N]=null}for(let N=0;N<k;N++)Ce[N]=ln(Re[N],R[N]);let W=N=>[N[12],N[13],N[14]];return a.headPos=W(Re[U.Head]),a.hipsPos=W(Re[U.Hips]),a.headM=Re[U.Head],{blink:be}}function ye(ae,ge){let{pos:qe,nrm:Pe,jnt:be,wgt:ke,outP:Ae,outN:Fe,work:je,m:Re}=ae,M=Re.n,W=qe;if(ge){je.set(qe);for(let N in ae.morphs){let ie=ge[N]||0;if(ie<=0)continue;let Se=ae.morphs[N];for(let E=0;E<Se.idx.length;E++){let y=Se.idx[E]*3;je[y]+=Se.d[E*3]*ie,je[y+1]+=Se.d[E*3+1]*ie,je[y+2]+=Se.d[E*3+2]*ie}}W=je}for(let N=0;N<M;N++){let ie=W[N*3],Se=W[N*3+1],E=W[N*3+2],y=Pe[N*3],z=Pe[N*3+1],G=Pe[N*3+2],j=0,O=0,I=0,F=0,_=0,L=0;for(let $=0;$<4;$++){let V=ke[N*4+$];if(V===0)continue;let Z=Ce[be[N*4+$]];j+=V*(Z[0]*ie+Z[4]*Se+Z[8]*E+Z[12]),O+=V*(Z[1]*ie+Z[5]*Se+Z[9]*E+Z[13]),I+=V*(Z[2]*ie+Z[6]*Se+Z[10]*E+Z[14]),F+=V*(Z[0]*y+Z[4]*z+Z[8]*G),_+=V*(Z[1]*y+Z[5]*z+Z[9]*G),L+=V*(Z[2]*y+Z[6]*z+Z[10]*G)}Ae[N*3]=j,Ae[N*3+1]=O,Ae[N*3+2]=I;let S=Math.hypot(F,_,L)||1;Fe[N*3]=F/S,Fe[N*3+1]=_/S,Fe[N*3+2]=L/S}Re.grid&&!ze&&ve(ae),ae.pb.subdata(Ae),ae.nbuf.subdata(Fe)}function ve(ae){let[ge,qe]=ae.m.grid,Pe=ae.outP,be=ae.outN,ke=$v.seat+.012;for(let Ae=1;Ae<ge;Ae++){let Fe=Math.pow(1-Ae/(ge-1),1.5);for(let je=0;je<qe;je++){let Re=(Ae*qe+je)*3;Pe[Re+1]>ke?Pe[Re+1]=ke+(Pe[Re+1]-ke)*Math.max(Fe,.15):Pe[Re+1]=ke}}for(let Ae=0;Ae<be.length;Ae+=3)be[Ae]=0,be[Ae+1]=1,be[Ae+2]=0}let ze=!1;function De(ae,ge){ze=!!ge;let qe=ct(ae,ge),Pe={eyeBlinkLeft:qe.blink,eyeBlinkRight:qe.blink};for(let be of K)ye(be,Object.keys(be.morphs).length?Pe:null);a.pose=qe}return{parts:K,update:De,drawOpaque:te,drawBlend:re,state:a}}function c(A,T,P){let C=Math.min(1,Math.max(0,(P-A)/(T-A)));return C*C*(3-2*C)}let l=x6(),f=y6(),v=f?e.texture({data:f,flipY:!1,min:"linear",mag:"linear"}):i,h=e({vert:b6,frag:w6,attributes:{position:l.pos,normal:l.nrm,uv:l.uv,kind:l.kind},elements:new Uint16Array(l.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:v},cull:{enable:!1}}),u=_6(),m=e({vert:E6,frag:M6,attributes:{position:u.pos,normal:u.nrm,color:u.col,mat:u.mat},elements:new Uint16Array(u.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),d=e({vert:A6,frag:T6,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function p(A){let T=A.headM,P=K=>{let te=Math.hypot(...K)||1;return K.map(re=>re/te)},C=P([T[4],T[5],T[6]]),k=P([T[8],T[9],T[10]]),U=C,R=k.map(K=>-K),D=[R[1]*U[2]-R[2]*U[1],R[2]*U[0]-R[0]*U[2],R[0]*U[1]-R[1]*U[0]],q=A.headPos,B=[0,1,2].map(K=>q[K]+C[K]*.06+k[K]*.185);return[D[0],D[1],D[2],0,R[0],R[1],R[2],0,U[0],U[1],U[2],0,B[0],B[1],B[2],1]}let g=-1,x="",w=null;function b(A){if(!r)return;let T=(Nv.motion,o()),P=w?[w.x,w.z,w.heading,w.phase].map(k=>k.toFixed(4)).join():"";(P!==x||!w&&Math.abs(T-g)>(Nv.isPhone?1/30:0))&&(r.update(T,w),g=T,x=P);for(let k of r.parts)k.blend||r.drawOpaque({pb:k.pb,nb:k.nbuf,uv:k.uvBuf,el:k.el,tex:k.tex,alphaCut:k.alphaCut,skin:k.skin,kind:k.kind,alphaScale:k.alphaScale});let C=r.state;if(C.headM&&!w){h({model:p(C)});let k=C.headPos,U=Math.sin(T*1.3)*.02,R=[k[0],k[1]+.62+U,k[2]+.05],D=T*.6,q=Gn(R,Hr(So([0,1,0],D),So([0,0,1],.18)),[1.2,1.2,1.2]),B=.5+.5*Math.sin(T*2);m({model:q,pulse:B}),a.glowPos=R,a.glow=.06+.03*B,d({center:[R[0],R[1]-.12,R[2]],size:.1,pulse:B})}for(let k of r.parts)k.blend&&r.drawBlend({pb:k.pb,nb:k.nbuf,uv:k.uvBuf,el:k.el,tex:k.tex,alphaCut:k.alphaCut,skin:k.skin,kind:k.kind,alphaScale:k.alphaScale})}return b.state=a,b.place=To,b.setWalk=A=>{w=A||null,w&&(a.glow=0)},b};Bl.exports.PLACE=To});var jl=Q((zT,jv)=>{"use strict";jv.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Wl=Q((CT,Qv)=>{"use strict";var Yv=Ir(),Vv=Ha(),Dn=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Vl(){return Yv.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var S6=`
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
`,Wv=!1;function Kv(){if(Wv)return;Wv=!0;let e=document.createElement("style");e.textContent=S6,document.head.appendChild(e)}var k6='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function L6(e){return!e||!e.visit||!Vl()?"":(Kv(),`<button type="button" class="visit-btn" data-visit="${Dn(e.slug||"")}" aria-label="Visit what remained: watch ${Dn(e.title)} come to life">${k6}<span>Visit what remained</span></button>`)}function z6(e){let t=e.getContext("2d");e.width=e.height=160;let r=t.createImageData(160,160),n=!0,o=0;return(function a(i){if(n){if(i-o>70){o=i;let s=r.data;for(let c=0;c<s.length;c+=4){let l=Math.random()*255;s[c]=s[c+1]=s[c+2]=l,s[c+3]=255}t.putImageData(r,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}})(0),()=>{n=!1}}var Di=null;function C6(e){if(Di||!e||!e.visit)return;Kv();let t=document.activeElement;document.body.classList.add("visiting");let r="images/web/"+e.slug+(Yv.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${Dn(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Dn(e.title)}, ${Dn(Vv(e))}" src="${Dn(r)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Dn(e.title)}</span>
			<span class="visit-meta">${Dn(Vv(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let o=n.querySelector("video"),a=n.querySelector(".visit-title"),i=z6(n.querySelector(".visit-grain")),s=[],c=(p,g)=>s.push(setTimeout(p,g)),l=p=>p.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(p=>n.addEventListener(p,l));let f=p=>{p.key==="Escape"?(p.preventDefault(),d()):p.key===" "&&!(p.target&&p.target.tagName==="BUTTON")&&(p.preventDefault(),u()),p.stopImmediatePropagation()};window.addEventListener("keydown",f,!0);let v=p=>p.stopImmediatePropagation();window.addEventListener("keyup",v,!0);let h=!1;function u(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let p=n.querySelector('[data-act="back"]');p&&p.focus({preventScroll:!0})},1300))}function m(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{o.currentTime=0}catch(g){}let p=o.play();p&&p.catch&&p.catch(()=>u()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}o.addEventListener("timeupdate",()=>{o.duration&&o.currentTime>o.duration-1.2&&u()}),o.addEventListener("ended",u),o.addEventListener("error",u);function d(){if(Di){Di=null,s.forEach(clearTimeout),n.classList.remove("on");try{o.pause()}catch(p){}window.removeEventListener("keydown",f,!0),window.removeEventListener("keyup",v,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",d),n.querySelector(".visit-skip").addEventListener("click",()=>{try{o.pause()}catch(p){}u()}),n.querySelector(".visit-end").addEventListener("click",p=>{let g=p.target.closest("button");g&&(g.dataset.act==="back"&&d(),g.dataset.act==="again"&&(s.forEach(clearTimeout),m()))}),o.src=e.visit.video,Di={close:d},requestAnimationFrame(()=>{n.classList.add("on"),c(m,1300)})}var Xv={};function R6(e){if(!e||!e.visit||Xv[e.visit.video]||!Vl())return;Xv[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}Qv.exports={available:Vl,button:L6,open:C6,warm:R6,get active(){return!!Di}}});var Xl=Q((RT,Zv)=>{Zv.exports=1e-6});var Yl=Q((IT,Jv)=>{Jv.exports=I6;function I6(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var t2=Q((PT,e2)=>{e2.exports=P6;function P6(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Kl=Q((NT,r2)=>{r2.exports=N6;function N6(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}});var Ql=Q((OT,n2)=>{n2.exports=O6;function O6(e,t){var r=t[0],n=t[1],o=t[2],a=r*r+n*n+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var Zl=Q((GT,o2)=>{o2.exports=G6;function G6(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var c2=Q((DT,s2)=>{s2.exports=F6;var a2=Kl(),i2=Ql(),D6=Zl();function F6(e,t){var r=a2(e[0],e[1],e[2]),n=a2(t[0],t[1],t[2]);i2(r,r),i2(n,n);var o=D6(r,n);return o>1?0:Math.acos(o)}});var f2=Q((FT,l2)=>{l2.exports=q6;function q6(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var u2=Q((qT,h2)=>{h2.exports=$6;function $6(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}});var p2=Q(($T,d2)=>{d2.exports=H6;var Jl=Xl();function H6(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(r-a)<=Jl*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=Jl*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(o-s)<=Jl*Math.max(1,Math.abs(o),Math.abs(s))}});var v2=Q((HT,m2)=>{m2.exports=U6;function U6(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var x2=Q((UT,g2)=>{g2.exports=B6;function B6(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}});var ef=Q((BT,y2)=>{y2.exports=j6;function j6(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}});var w2=Q((jT,b2)=>{b2.exports=ef()});var tf=Q((VT,_2)=>{_2.exports=V6;function V6(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}});var M2=Q((WT,E2)=>{E2.exports=tf()});var rf=Q((XT,A2)=>{A2.exports=W6;function W6(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}});var S2=Q((YT,T2)=>{T2.exports=rf()});var L2=Q((KT,k2)=>{k2.exports=X6;function X6(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}});var C2=Q((QT,z2)=>{z2.exports=Y6;function Y6(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}});var I2=Q((ZT,R2)=>{R2.exports=K6;function K6(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var N2=Q((JT,P2)=>{P2.exports=Q6;function Q6(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var G2=Q((eS,O2)=>{O2.exports=Z6;function Z6(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var F2=Q((tS,D2)=>{D2.exports=J6;function J6(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}});var $2=Q((rS,q2)=>{q2.exports=eE;function eE(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}});var nf=Q((nS,H2)=>{H2.exports=tE;function tE(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}});var B2=Q((oS,U2)=>{U2.exports=nf()});var of=Q((aS,j2)=>{j2.exports=rE;function rE(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}});var W2=Q((iS,V2)=>{V2.exports=of()});var af=Q((sS,X2)=>{X2.exports=nE;function nE(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}});var K2=Q((cS,Y2)=>{Y2.exports=af()});var sf=Q((lS,Q2)=>{Q2.exports=oE;function oE(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}});var J2=Q((fS,Z2)=>{Z2.exports=sf()});var tg=Q((hS,eg)=>{eg.exports=aE;function aE(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var ng=Q((uS,rg)=>{rg.exports=iE;function iE(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var ag=Q((dS,og)=>{og.exports=sE;function sE(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2];return e[0]=o*c-a*s,e[1]=a*i-n*c,e[2]=n*s-o*i,e}});var sg=Q((pS,ig)=>{ig.exports=cE;function cE(e,t,r,n){var o=t[0],a=t[1],i=t[2];return e[0]=o+n*(r[0]-o),e[1]=a+n*(r[1]-a),e[2]=i+n*(r[2]-i),e}});var lg=Q((mS,cg)=>{cg.exports=lE;function lE(e,t){t=t||1;var r=Math.random()*2*Math.PI,n=Math.random()*2-1,o=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=n*t,e}});var hg=Q((vS,fg)=>{fg.exports=fE;function fE(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[3]*n+r[7]*o+r[11]*a+r[15];return i=i||1,e[0]=(r[0]*n+r[4]*o+r[8]*a+r[12])/i,e[1]=(r[1]*n+r[5]*o+r[9]*a+r[13])/i,e[2]=(r[2]*n+r[6]*o+r[10]*a+r[14])/i,e}});var dg=Q((gS,ug)=>{ug.exports=hE;function hE(e,t,r){var n=t[0],o=t[1],a=t[2];return e[0]=n*r[0]+o*r[3]+a*r[6],e[1]=n*r[1]+o*r[4]+a*r[7],e[2]=n*r[2]+o*r[5]+a*r[8],e}});var mg=Q((xS,pg)=>{pg.exports=uE;function uE(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2],l=r[3],f=s*a-c*o,v=c*n-i*a,h=i*o-s*n;return f*=2,v*=2,h*=2,e[0]=n+l*f+s*h-c*v,e[1]=o+l*v+c*f-i*h,e[2]=a+l*h+i*v-s*f,e}});var gg=Q((yS,vg)=>{vg.exports=dE;function dE(e,t,r,n){var o=r[1],a=r[2],i=t[1]-o,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=t[0],e[1]=o+i*l-s*c,e[2]=a+i*c+s*l,e}});var yg=Q((bS,xg)=>{xg.exports=pE;function pE(e,t,r,n){var o=r[0],a=r[2],i=t[0]-o,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=o+s*c+i*l,e[1]=t[1],e[2]=a+s*l-i*c,e}});var wg=Q((wS,bg)=>{bg.exports=mE;function mE(e,t,r,n){var o=r[0],a=r[1],i=t[0]-o,s=t[1]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=o+i*l-s*c,e[1]=a+i*c+s*l,e[2]=t[2],e}});var Eg=Q((_S,_g)=>{_g.exports=vE;var Fn=Yl()();function vE(e,t,r,n,o,a){var i,s;for(t||(t=3),r||(r=0),n?s=Math.min(n*t+r,e.length):s=e.length,i=r;i<s;i+=t)Fn[0]=e[i],Fn[1]=e[i+1],Fn[2]=e[i+2],o(Fn,Fn,a),e[i]=Fn[0],e[i+1]=Fn[1],e[i+2]=Fn[2];return e}});var Ag=Q((ES,Mg)=>{Mg.exports={EPSILON:Xl(),create:Yl(),clone:t2(),angle:c2(),fromValues:Kl(),copy:f2(),set:u2(),equals:p2(),exactEquals:v2(),add:x2(),subtract:ef(),sub:w2(),multiply:tf(),mul:M2(),divide:rf(),div:S2(),min:L2(),max:C2(),floor:I2(),ceil:N2(),round:G2(),scale:F2(),scaleAndAdd:$2(),distance:nf(),dist:B2(),squaredDistance:of(),sqrDist:W2(),length:af(),len:K2(),squaredLength:sf(),sqrLen:J2(),negate:tg(),inverse:ng(),normalize:Ql(),dot:Zl(),cross:ag(),lerp:sg(),random:lg(),transformMat4:hg(),transformMat3:dg(),transformQuat:mg(),rotateX:gg(),rotateY:yg(),rotateZ:wg(),forEach:Eg()}});var kg=Q((MS,Sg)=>{"use strict";function Tg(){let e={};return{on(t,r){return(e[t]=e[t]||[]).push(r),this},emit(t,r){(e[t]||[]).slice().forEach(n=>n(r))}}}Sg.exports=function(t){let r=t.ownerDocument||document,n=Tg(),o=null,a={dx:0,dy:0,dt:0},i=0,s=()=>r.pointerLockElement||r.webkitPointerLockElement||null,c=()=>{if(s())return;let f=t.requestPointerLock||t.webkitRequestPointerLock;if(f)try{let v=f.call(t);v&&v.catch&&v.catch(()=>{})}catch(v){}};t.addEventListener("mousedown",c,!1);let l=()=>{if(!s()){o&&(n.emit("release"),o.emit("end"),o=null);return}o=Tg(),i=Date.now(),n.emit("attain",o)};return r.addEventListener("pointerlockchange",l),r.addEventListener("webkitpointerlockchange",l),r.addEventListener("pointerlockerror",()=>n.emit("error")),(r.body||t).addEventListener("mousemove",f=>{o&&(a.dx=f.movementX||f.webkitMovementX||0,a.dy=f.movementY||f.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),o.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(r.exitPointerLock||r.webkitExitPointerLock).call(r)},n}});var Ig=Q((SS,Rg)=>{"use strict";var ko=wi(),Lo=Ag(),gE=kg(),AS=Math.PI/4,TS=Math.PI/6,Lg=2,xE=1,yE=2.4,bE=2.4,wE=1e3,_E=5,EE=7,cf=Jt().C,Fi=[[7,1.6],[7,cf.zc],[cf.x1-2.95,cf.zc]],qn=Fi.slice(1).map((e,t)=>{let r=Fi[t],n=e[0]-r[0],o=e[1]-r[1],a=Math.hypot(n,o);return{a:r,len:a,dir:[n/a,o/a]}}),lf=qn.reduce((e,t)=>e+t.len,0);function zg(e){let t=Math.max(0,Math.min(lf,e));for(let n of qn){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let r=Fi[Fi.length-1];return[r[0],r[1]]}function ME(e){let t=0;for(let n=0;n<qn.length;n++){let o=qn[n],a=t+o.len;if(e<a-1e-4||n===qn.length-1){let i=o.dir,c=e<=t+1e-4&&n>0?qn[n-1].dir:o.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let r=qn[qn.length-1].dir;return{ahead:r,back:[-r[0],-r[1]]}}var AE=Math.PI/4,TE=7,SE=140,kE=70,Cg=(e,t,r)=>(1-e)*t+e*r,LE=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Rg.exports=function({getGridSegments:e,getGridParts:t},r){var n=[0,Math.PI],o=[0,Math.PI],a=0,i=[0,0,0],s=[EE,Lg,Fi[0][1]],c=0,l=1,f=0,v=[.707,0,.707],h=[0,1,0],u=[0,0,0],m=.5,d=ko.identity([]),p=ko.identity([]),g=!1,x=[0,0,0],w=[0,0,0],b=1,A=!1;let T=ye=>{n[1]+=ye*AE},P=(ye,ve,ze)=>{if(ye=Math.max(Math.min(ye,100),-100),ve=Math.max(Math.min(ve,100),-100),n[0]=0,A){a=0;return}for(a+=ye;a>=ze;)T(1),a-=ze;for(;a<=-ze;)T(-1),a+=ze};gE(document.body).on("attain",ye=>{ye.on("data",ve=>{P(ve.dx,ve.dy,SE)})});let k=null,U=null,R=0,D={x:0,y:0},q=58,B=document.createElement("div");B.id="museum-mobile-controls",B.innerHTML=`

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
	`,document.body.appendChild(B);let K=B.querySelector("#museum-joystick"),te=B.querySelector("#museum-joystick-knob"),re=()=>{te.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},J=ye=>{let ve=ye.clientX-D.x,ze=ye.clientY-D.y,De=Math.hypot(ve,ze);if(De>q&&(ve=ve/De*q,ze=ze/De*q),te.style.transform=`translate(
				calc(-50% + ${ve}px),
				calc(-50% + ${ze}px)
			)`,De<10){i[0]=0,i[2]=0;return}let ge=ve/q,qe=ze/q;i[0]=0,i[2]=Math.abs(qe)>.15?qe:0},me=(ye,ve)=>{for(let ze=0;ze<ye.length;ze++)if(ye[ze].identifier===ve)return ye[ze];return null},xe=ye=>!!(ye&&ye.closest&&ye.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Ce=ye=>{if(!xe(ye.target)&&(ye.cancelable&&ye.preventDefault(),!A))for(let ve=0;ve<ye.changedTouches.length;ve++){let ze=ye.changedTouches[ve];if(k===null&&ze.clientX<window.innerWidth*.48){k=ze.identifier;let De=K.getBoundingClientRect();D.x=De.left+De.width/2,D.y=De.top+De.height/2,J(ze)}else U===null&&ze.clientX>=window.innerWidth*.48&&(U=ze.identifier,R=ze.clientX,a=0)}},He=ye=>{if(xe(ye.target)||(ye.cancelable&&ye.preventDefault(),A))return;let ve=k===null?null:me(ye.touches,k);ve&&J(ve);let ze=U===null?null:me(ye.touches,U);if(ze){let De=ze.clientX-R;R=ze.clientX,P(De,0,kE)}},Ze=ye=>{if(!xe(ye.target)){ye.cancelable&&ye.preventDefault();for(let ve=0;ve<ye.changedTouches.length;ve++){let ze=ye.changedTouches[ve];ze.identifier===k&&(k=null,re()),ze.identifier===U&&(U=null)}}};document.addEventListener("touchstart",Ce,{passive:!1}),document.addEventListener("touchmove",He,{passive:!1}),document.addEventListener("touchend",Ze,{passive:!1}),document.addEventListener("touchcancel",Ze,{passive:!1});let Ne=document.createElement("style");Ne.textContent=`

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
	`,document.head.appendChild(Ne);var Je={};let Xe=ye=>{if(ye.defaultPrevented||ye.ctrlKey||ye.altKey||ye.metaKey)return;let ve=ye.type==="keydown";Je[ye.code]=ve,ve&&!ye.repeat&&!A&&((ye.code==="KeyA"||ye.code==="ArrowLeft")&&T(-1),(ye.code==="KeyD"||ye.code==="ArrowRight")&&T(1)),g=!1;let ze=Je.KeyW||Je.ArrowUp?1:0;i=[0,0,(Je.KeyS||Je.ArrowDown?1:0)-ze],ye.preventDefault()};window.addEventListener("keydown",Xe),window.addEventListener("keyup",Xe);var ct=0;return{pos:s,fmouse:o,forward:v,up:h,setPaused:ye=>{A=!!ye,A&&(i[0]=0,i[2]=0,re())},place:(ye,ve)=>{c=Math.max(0,Math.min(lf,ye));let ze=zg(c);s[0]=ze[0],s[2]=ze[1],n[1]=ve,o[1]=ve,a=0,l=1},view:()=>d,proj:()=>(ko.perspective(p,r(),window.innerWidth/window.innerHeight,.1,700),p),tick:({time:ye})=>{let ve=ye-ct;ct=ye;let ze=[0,0,0],De=[];Lo.set(v,Math.sin(o[1]),0,-Math.cos(o[1])),Lo.set(h,0,1,0);let ae=g?bE:yE,ge=Math.sin(n[1]),qe=-Math.cos(n[1]),Pe=ME(c),be=ge*Pe.ahead[0]+qe*Pe.ahead[1],ke=ge*Pe.back[0]+qe*Pe.back[1],Ae=l;Math.max(be,ke)>.3&&(Ae=be>=ke?1:-1);let Fe=A?0:-i[2]*ae;f+=(Fe-f)*(1-Math.exp(-Math.min(ve,.1)*5.5)),Fe===0&&Math.abs(f)<.01&&(f=0);let je=f*Ae*Math.min(ve,.1);A&&(i[0]=0,i[2]=0,je=0,f=0),je!==0&&(l=Math.sign(je)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(lf,c+je));let Re=zg(c);Lo.set(u,Re[0]-s[0],0,Re[1]-s[2]);let M=Lo.len(u);M===0&&m!==.25&&(m=(Math.abs((m+.5)%1-.5)-.25)*.8+.25,(m+.01)%.25<.02&&(m=.25));let W=m;if(m+=M/(g?_E:wE),s[1]=Lg,Lo.add(s,s,u),b<1){b+=ve/xE,b=Math.min(b,1);let N=LE(b);Lo.set(s,Cg(N,x[0],w[0]),s[1],Cg(N,x[2],w[2]))}o[0]=0,o[1]+=(n[1]-o[1])*Math.min(1,Math.min(ve,.1)*TE),Math.abs(n[1]-o[1])<5e-4&&(o[1]=n[1]),ko.identity(d),ko.rotateX(d,d,0),ko.rotateY(d,d,o[1]),ko.translate(d,d,Lo.scale(ze,s,-1))}}}});var Ng=Q((kS,Pg)=>{"use strict";var{skylightGLSL:zE,Z_START:CE,Z_END:RE,GLASS_Y:IE}=sa(),{oculusGLSL:PE,A:zo}=Dr(),{windowLightGLSL:NE,C:A0}=Jt(),{doorLightGLSL:OE}=so(),T0=lr(),Lr=e=>e.toFixed(4),ff=.1,hf=700,Co={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.045};function GE(e,t){let r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],v=t[9],h=t[10],u=t[11],m=t[12],d=t[13],p=t[14],g=t[15],x=r*s-n*i,w=r*c-o*i,b=r*l-a*i,A=n*c-o*s,T=n*l-a*s,P=o*l-a*c,C=f*d-v*m,k=f*p-h*m,U=f*g-u*m,R=v*p-h*d,D=v*g-u*d,q=h*g-u*p,B=x*q-w*D+b*R+A*U-T*k+P*C;return B?(B=1/B,e[0]=(s*q-c*D+l*R)*B,e[1]=(o*D-n*q-a*R)*B,e[2]=(d*P-p*T+g*A)*B,e[3]=(h*T-v*P-u*A)*B,e[4]=(c*U-i*q-l*k)*B,e[5]=(r*q-o*U+a*k)*B,e[6]=(p*b-m*P-g*w)*B,e[7]=(f*P-h*b+u*w)*B,e[8]=(i*D-s*U+l*C)*B,e[9]=(n*U-r*D-a*C)*B,e[10]=(m*T-d*b+g*x)*B,e[11]=(v*b-f*T-u*x)*B,e[12]=(s*k-i*R-c*C)*B,e[13]=(r*R-n*k+o*C)*B,e[14]=(d*w-m*A-p*x)*B,e[15]=(f*A-v*w+h*x)*B,e):null}function DE(e,t,r){let n=new Array(16);for(let o=0;o<4;o++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*r[o*4+s];n[o*4+a]=i}for(let o=0;o<16;o++)e[o]=n[o];return e}var FE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Pg.exports=(e,t)=>{let r=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),o=r?10:22,a=()=>t.post>=2?2:4,i=K=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},K||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),l=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,f=e.framebuffer({color:c,depth:l||!0}),v=[s(),s()],h=[s(),s()],u=[s(),s()],m=[s(),s()],d=new Array(16).fill(0),p=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},w={position:[-1,-1,3,-1,-1,3]},b=(K,te,re)=>e(Object.assign({vert:FE,frag:K,attributes:w,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:te,framebuffer:e.prop("out")},re||{})),A=[2.6,0,CE-3.2,12.6,IE,RE+.4],T=[zo.x0-.2,0,zo.z0,zo.x1,zo.domeTop,zo.z1],P=[A0.x0,0,A0.z0,A0.x1,7.6,A0.z1],C=[.35,0,.35,13.65,7.6,9],k=K=>`vec3(${Lr(K[0])}, ${Lr(K[1])}, ${Lr(K[2])}), vec3(${Lr(K[3])}, ${Lr(K[4])}, ${Lr(K[5])})`,U=b(`
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

	${zE()}
	${PE()}
	${NE()}
	${OE()}

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
			vec2 t = hitBox(eye, rd, ${k(A)});
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
			vec2 t = hitBox(eye, rd, ${k(T)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Lr(zo.dome.base)} && p.x > ${Lr(zo.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${k(P)});
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
			vec2 t = hitBox(eye, rd, ${k(C)});
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
	}`,{depthTex:()=>l,invVP:()=>d,eye:()=>g,time:e.context("time"),night:()=>T0.night,strength:()=>{let K=Co.shafts*x.shafts,te=T0.night;return[.06*K*(1+.9*te),.1*K*(1+.9*te),.07*K*(1+.4*te),.04*K*(1-.75*te)]}}),R=b(`
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
	}`,{src:e.prop("src"),dir:(K,te)=>[te.dir[0]/te.size[0],te.dir[1]/te.size[1]]}),D=b(`
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
	}`,{src:e.prop("src"),texel:(K,te)=>[.5/te.size[0],.5/te.size[1]],threshold:e.prop("threshold")}),q=b(`
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
		return 2.0 * ${Lr(ff)} * ${Lr(hf)} / (${Lr(hf+ff)} - z * ${Lr(hf-ff)});
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
	}`,{scene:()=>c,depthTex:()=>l||c,soft:()=>v[0],bloomA:()=>h[0],bloomB:()=>u[0],shafts:()=>m[0],res:K=>[K.drawingBufferWidth,K.drawingBufferHeight],time:e.context("time"),exposure:()=>Co.exposure*x.exposure,vignette:()=>Math.min(1,Co.vignette+x.vignette+.22*T0.night),night:()=>T0.night,grain:()=>Co.grain,bloomK:()=>Co.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>t.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:n?1:0},{framebuffer:null}),B=e({framebuffer:()=>f});return{shot:x,look:Co,hasDepth:n,capture(K,te,re){let J=K.drawingBufferWidth,me=K.drawingBufferHeight;f.resize(J,me);let xe=Math.max(1,Math.ceil(J/2)),Ce=Math.max(1,Math.ceil(me/2));v.forEach(He=>He.resize(xe,Ce)),h.forEach(He=>He.resize(Math.max(1,Math.ceil(J/4)),Math.max(1,Math.ceil(me/4)))),u.forEach(He=>He.resize(Math.max(1,Math.ceil(J/8)),Math.max(1,Math.ceil(me/8)))),m.forEach(He=>He.resize(Math.max(1,Math.ceil(J/a())),Math.max(1,Math.ceil(me/a())))),DE(p,te.proj,te.view),GE(d,p),g[0]=te.eye[0],g[1]=te.eye[1],g[2]=te.eye[2],B(()=>{e.clear({color:[0,0,0,1],depth:1}),re()})},present(){let K=te=>[te.width,te.height];n&&t.post>=1&&Co.shafts*x.shafts>.001?(U({out:m[0]}),R({out:m[1],src:m[0],dir:[1,0],size:K(m[0])}),R({out:m[0],src:m[1],dir:[0,1],size:K(m[0])})):e.clear({color:[0,0,0,1],framebuffer:m[0]}),D({out:v[0],src:c,size:[f.width,f.height],threshold:0}),R({out:v[1],src:v[0],dir:[1,0],size:K(v[0])}),R({out:v[0],src:v[1],dir:[0,1],size:K(v[0])}),D({out:h[0],src:v[0],size:K(v[0]),threshold:.42}),R({out:h[1],src:h[0],dir:[1,0],size:K(h[0])}),R({out:h[0],src:h[1],dir:[0,1],size:K(h[0])}),D({out:u[0],src:h[0],size:K(h[0]),threshold:0}),R({out:u[1],src:u[0],dir:[1.5,0],size:K(u[0])}),R({out:u[0],src:u[1],dir:[0,1.5],size:K(u[0])}),q({out:null})}}}});var qg=Q((LS,Fg)=>{"use strict";var Og=lr().GLSL,qE=io(),uf=so(),{C:$E,FAR_DOOR:HE}=Jt(),UE=100*Math.PI/180,Gg=e=>[HE.x-e[2],e[1],$E.zc-7+e[0]],Dg=e=>[-e[2],e[1],e[0]];function BE(e){let t=[],r=[],n=[],o=[],a=qE.createBuilder(t,r,n,o);uf.addFrames(a,e);let i=uf.glassPanes(e),s=c=>{let l=[];for(let f=0;f<c.length;f+=3)l.push([c[f],c[f+1],c[f+2]]);return l};return{position:s(t),normal:s(r),elements:n,glass:i}}Fg.exports=e=>{let t=uf.DOOR,r=["left","right"].map(f=>{let v=BE(f),h=v.position.length;return{part:f,hinge:f==="left"?t.x0:t.x1,sign:f==="left"?-1:1,src:v.position.map(u=>u.slice()),srcN:v.normal.map(u=>u.slice()),srcG:v.glass.map(u=>u.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(v.elements),type:"uint32"}),glassCount:v.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(v.glass.length*3),outGN:new Float32Array(v.glass.length*3)}}),n=null;function o(f){if(f!==n){n=f;for(let v of r){let h=v.sign*f,u=Math.cos(h),m=Math.sin(h),d=x=>{let w=x[0]-v.hinge,b=x[2];return[v.hinge+w*u+b*m,x[1],-w*m+b*u]},p=x=>[x[0]*u+x[2]*m,x[1],-x[0]*m+x[2]*u];v.src.forEach((x,w)=>{let b=Gg(d(x));v.outP.set(b,w*3),v.outN.set(Dg(p(v.srcN[w])),w*3)});let g=Dg(p([0,0,1]));v.srcG.forEach((x,w)=>{v.outG.set(Gg(d(x)),w*3),v.outGN.set(g,w*3)}),v.pos.subdata(v.outP),v.nrm.subdata(v.outN),v.gpos.subdata(v.outG),v.gnrm.subdata(v.outGN)}}}o(0);let a=`
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
		${Og}
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
		${Og}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,l=()=>{o(c*UE);for(let f of r)i({pos:f.pos,nrm:f.nrm,el:f.el})};return l.glass=()=>{for(let f of r)s({pos:f.gpos,nrm:f.gnrm,count:f.glassCount})},l.setOpen=f=>{c=f||0},l}});var Hg=Q((zS,$g)=>{"use strict";var jE=lr().GLSL,{skylightGLSL:VE}=sa(),{oculusGLSL:WE}=Dr(),{windowLightGLSL:XE}=Jt(),$n=.22;function YE(){let e=[],t=[],r=[],n=[];for(let c=0;c<=14;c++){let l=c/14,f=$n*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9);for(let v=0;v<=8;v++){let h=v/4-1,u=l*$n-$n*.12,m=h*f,d=Math.abs(h)*f*.35-.12*l*l*$n;e.push([u,d,m]),t.push([0,1,0]),r.push([l,h])}}let i=9;for(let c=0;c<14;c++)for(let l=0;l<i-1;l++){let f=c*i+l,v=f+1,h=f+i,u=h+1;n.push([f,h,v],[v,h,u])}let s=e.length;return e.push([-$n*.12,0,-.003],[-$n*.12,0,.003],[-$n*.24,-.01,.0015],[-$n*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),r.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([s,s+2,s+1],[s,s+3,s+2]),{pos:e,nrm:t,uv:r,idx:n}}$g.exports=e=>{let t=YE(),r=e({vert:`
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
		${jE}
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${VE()}
		${WE()}
		${XE()}

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

			gl_FragColor = vec4(toNight(col * visible, 0.55), 1.0);
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}});return function(n){n&&n.visible&&r({model:n.model})}}});var jg=Q((CS,Bg)=>{"use strict";var{skylightGLSL:KE,Z_START:Ug,Z_END:QE}=sa(),{oculusGLSL:ZE,A:Aa}=Dr();Bg.exports=(e,t)=>{let r=t.isPhone?900:2600,n=t.isPhone?350:900,o=7,a=()=>(o=o*16807%2147483647,(o-1)/2147483646),i=[];for(let s=0;s<r;s++)i.push([2.5+a()*10.5,.3+a()*8,Ug-3.5+a()*(QE-Ug+4.5),a()]);for(let s=0;s<n;s++)i.push([Aa.x0+.3+a()*(Aa.x1-Aa.x0-.6),.3+a()*7.5,Aa.z0+.3+a()*(Aa.z1-Aa.z0-.6),a()]);return e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;

		${KE()}
		${ZE()}

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
		}`,attributes:{seed:i},count:i.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:s=>s.viewportHeight*.006},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}})}});var Qg=Q((RS,Kg)=>{"use strict";var{C:Yg}=Jt(),Vg=lr(),Wg=15.3,JE=37.1,Xg=Yg.z1+.9,eM=Yg.z1+.7+16-.6;Kg.exports=(e,t)=>{let r=t.isPhone?36:80,n=11,o=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let l=0;l<r;l++){let f=.35+Math.pow(o(),1.8)*2.4;a.push([Wg+o()*(JE-Wg),f,Xg+o()*(eM-Xg),o()])}let i=[],s=[];a.forEach(l=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(f=>{i.push(f[0],f[1]),s.push(...l)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>Vg.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Vg.night>.01&&c()}}});var pf=Q((IS,Zg)=>{"use strict";var df=lr(),tM='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',rM='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Zg.exports=function(t){let r=document.createElement("button");r.type="button",r.className=t+" light-toggle";let n=()=>{let o=df.isNight;r.innerHTML=o?tM:rM,r.setAttribute("aria-label",o?"Switch to day":"Switch to night"),r.title=o?"Day":"Night",r.setAttribute("aria-pressed",o?"true":"false")};return n(),df.onChange(n),["mousedown","pointerdown"].forEach(o=>r.addEventListener(o,a=>a.stopPropagation())),r.addEventListener("click",o=>{o.stopPropagation(),df.toggle()}),r}});var lx=Q((PS,cx)=>{"use strict";var fn=wi(),S0=jl(),mf=Wi(),nM=Ha(),vf=Wl(),oM=Ir(),k0=!oM.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:xr}=Dr(),{C:Ut,PAINTING_X:za}=Jt(),yr=e=>Math.max(0,Math.min(1,e)),de=(e,t,r)=>e+(t-e)*r,dt=(e,t,r)=>[de(e[0],t[0],r),de(e[1],t[1],r),de(e[2],t[2],r)],Qe=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Jg=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],ex=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],he=(e,t,r)=>{let n=yr((r-e)/(t-e));return n*n*(3-2*n)};function aM(e,t,r,n,o,a){if(o<=0)return[e,r];let i=2/n,s=i*o,c=1/(1+s+.48*s*s+.235*s*s*s),l=a*n,f=Math.max(-l,Math.min(l,e-t)),v=e-f,h=(r+i*f)*o,u=(r-i*h)*c,m=v+(f+h)*c;return t-e>0==m>t&&(m=t,u=0),[m,u]}var tx=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,iM=e=>e*e*e,gf=e=>1-Math.pow(1-e,3),At=e=>-(Math.cos(Math.PI*e)-1)/2;function kt(e,t){let r=e.length-1,n=yr(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],l=e[Math.min(r,o+2)],f=a*a,v=f*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-l[h])*f+(-i[h]+3*s[h]-3*c[h]+l[h])*v))}var Be=(e,t,r,n)=>({eye:e,target:t,fov:r,roll:n||0});function No(e,t,r){return Be(dt(e.eye,t.eye,r),dt(e.target,t.target,r),de(e.fov,t.fov,r),de(e.roll,t.roll,r))}var Ef=()=>he(.75,1.3,window.innerWidth/window.innerHeight),rr=(e,t)=>No(e,t,Ef()),L0=[7,3.95,Ut.hallEnd-.05],sM=[Ut.x1,2.9,Ut.zc],ka=[16.75,4.55,6.75],Mf=[6.92,2.72,14.5],Ur=[7.3,.015,47.1],cM=[ka,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Mf],lM=[Mf,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Ur],Ro=[za[0],3,Ut.z0],Io=[za[1],3,Ut.z0],yf=47.45,sx=4.6,fM=13.2,hM=1.42,qi=[7.55,1.25,46.75],Af=[17.25,2.42,46],Tf=[26.05,1.95,46],$i=[36.15,.015,44],R0=()=>de(6.8,6.15,Ef()),uM=[qi,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Af],dM=[Af,[20.2,2.05,45.6],[23.2,1.8,45],Tf],Po=[za[2],3,Ut.z0],bf=[34.8,1.35,46],Un=[7.89,.03,19.03],rx=.36,nx=13.64,jt=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function zr(e){let t=e.side==="left"?1:-1;return dt([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],Ef())}function pM(e){return e.side==="left"?rr(Be([8.6,3.9,e.z],[rx,1.45,e.z],76),Be([8,3.6,e.z+.7],[rx,3.95,e.z-2],46,-.008)):rr(Be([5.4,3.9,e.z],[nx,1.45,e.z],76),Be([6,3.6,e.z-.7],[nx,3.95,e.z+2],46,-.008))}var mM=()=>[$i,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],zr(jt[0])],vM=()=>[zr(jt[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],zr(jt[3])],gM=()=>[zr(jt[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Un],ox={2:{pos:()=>Mf,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>qi,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Af,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Tf,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>bf,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>zr(jt[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>zr(jt[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>zr(jt[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>zr(jt[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>zr(jt[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>zr(jt[5]),amp:[.12,.08,.1],tumble:.5}},Hn=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),r=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=rr(Be([Ut.x0+.9,1.85,Ut.zc+.25],[Ut.x1,2.85,Ut.zc-.1],64),Be([Ut.x0+1.2,2,Ut.zc+.35],[Ut.x1,2.6,Ut.zc-.15],50));return n.eye=Qe(Qe(n.eye,[t,0,0]),r),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],r=rr(Be([16.6,1.9,9.2],[17.3,.4,5.6],64),Be([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return r.eye=Qe(r.eye,t),r}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],r=rr(Be([7,1.35,13],[7.2,7.6,20.4],74,.05),Be([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return r.eye=Qe(r.eye,t),r}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],r=rr(Be([7,3.6,43.7],[7,3.85,L0[2]],74),Be([7,3.6,41.3],[7,3.95,L0[2]],46));return r.eye=Qe(r.eye,t),r}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=rr(Be([7,3.9,40.3],[7,1.35,L0[2]],76),Be([6.3,3.6,41.2],[3.7,3.95,L0[2]],46,-.008));return r.eye=Qe(r.eye,t),r}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=rr(Be([7.15,.15,46],[7.3,.04,Ur[2]],50),Be([7.05,.14,45.9],[7.25,.05,Ur[2]],32));return r.eye=Qe(r.eye,t),r}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],r=rr(Be([7.15,.1,46.3],[7.05,.1,yf],50),Be([7.1,.12,45.85],[7,.2,yf],30));return r.eye=Qe(r.eye,t),r}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],r=rr(Be([7.3,.85,45.65],[7.6,1.38,47.1],64),Be([7.25,.82,45.8],[7.65,1.35,47.1],44));return r.eye=Qe(r.eye,t),r}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=rr(Be([Ro[0],2.3,46.85],[Ro[0],1.25,Ro[2]],74),Be([Ro[0]-.6,2.55,46.85],[Ro[0]+1.9,2.9,Ro[2]],46,.008));return r.eye=Qe(r.eye,t),r}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=rr(Be([Io[0],1.95,46.85],[Io[0],1,Io[2]],74),Be([Io[0]-.6,2.1,46.85],[Io[0]+1.9,2.75,Io[2]],46,.008));return r.eye=Qe(r.eye,t),r}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=rr(Be([Po[0],1.4,46.85],[Po[0],.6,Po[2]],74),Be([Po[0]-.6,1.45,46.85],[Po[0]+1.9,2,Po[2]],46,.008));return r.eye=Qe(r.eye,t),r}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=rr(Be([34.75,.5,44.15],[Ut.x1,.8,43.95],66),Be([34.75,.45,44.3],[Ut.x1,.35,43.95],50));return r.eye=Qe(r.eye,t),r}},...jt.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(r){let n=[Math.sin(r*.15)*.04,Math.sin(r*.25)*.015,Math.sin(r*.11)*.04],o=pM(e);return o.eye=Qe(o.eye,n),o}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,r=rr(Be([7.75,2.6,18.6],[7.89,0,19.08],60),Be([7.75,2.3,18.45],[7.89,0,19.08],46)),n=r.eye[0]-Un[0],o=r.eye[2]-Un[2];return r.eye=[Un[0]+n*Math.cos(t)-o*Math.sin(t),r.eye[1],Un[2]+n*Math.sin(t)+o*Math.cos(t)],r}}],xM=[1,.96,.88];function ax(e,t){return{dur:t,cam(r,n,o){let a=At(r),i=No(n,o,a),s=jt[e].side==="left"?1:-1;return i.eye=Qe(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(r,n,o){let a={};for(let i in o)typeof o[i]=="number"&&(a[i]=de(n[i],o[i],r));return a.aperture=de(n.aperture,o.aperture,r)*(1-.5*Math.sin(Math.PI*r)),a},leaf(r){let n=At(r),o=zr(jt[e]),a=zr(jt[e+1]),i=jt[e].side==="left"?1:-1,s=Qe(dt(o,a,.5),[i*1.2,.5,0]),c=kt([o,dt(o,s,.6),s,dt(a,s,.6),a],n);return{phase:"fly",pos:Qe(c,[0,Math.sin(r*Math.PI*5)*.07*Math.sin(Math.PI*r),0]),tumble:.5+.35*Math.sin(Math.PI*r)}}}}var xf=[{dur:6.2,cam(e,t,r){if(e<.5){let s=iM(e/.5),c=dt(t.eye,[Ut.x1-3.2,2.6,Ut.zc],s),l=dt(t.target,sM,he(0,.6,e/.5));return Be(c,l,de(t.fov,t.fov-8,s),de(t.roll,.04,s))}let n=gf((e-.5)/.5),o=[[xr.cx+.4,10.4,xr.zc+.6],[xr.cx-.6,7.6,xr.zc+1.3],[xr.cx-1.9,4.6,xr.zc+1.75],r.eye],a=[[xr.cx-.1,0,xr.zc-.2],[xr.cx-1,.4,xr.zc-.1],[xr.cx-1.1,.8,xr.zc-.2],r.target];return Be(kt(o,n),kt(a,n),de(r.fov+14,r.fov,n),de(-.25,r.roll,n))},look(e,t,r){let n=he(.22,.5,e),o=1-he(.5,.74,e);return{fade:e<.5?n:o,fadeColor:xM,exposure:de(t.exposure,r.exposure,he(.5,.9,e))*(1+2.2*(e<.5?he(.15,.5,e):1-he(.5,.8,e))),letterbox:de(t.letterbox,r.letterbox,he(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):r.aperture*he(.6,1,e),focus:de(4,r.focus,he(.5,1,e)),shafts:de(t.shafts,r.shafts,he(.4,.6,e)),vignette:de(t.vignette,r.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,r,n){let o=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],r.eye],a=kt(o,At(e)),i=he(0,.12,e)*(1-he(.82,1,e)),s=dt(dt(t.target,r.target,he(.55,1,e)),n.pos,i),c=de(t.fov,r.fov,he(.3,1,e))-6*Math.sin(Math.PI*e),l=de(t.roll,r.roll,e)+.05*Math.sin(Math.PI*2*e);return Be(a,s,c,l)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:de(t.exposure,r.exposure,he(.25,.75,e)),letterbox:de(t.letterbox,r.letterbox,e),focus:de(a,r.focus,he(.8,1,e)),aperture:de(.7,r.aperture,he(.8,1,e)),shafts:de(t.shafts,r.shafts,he(.3,.8,e)),vignette:de(t.vignette,r.vignette,e)}},leaf(e){let t=tx(e),r=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:Qe(kt(cM,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),r]),tumble:1-.5*he(.8,1,e)}}},{dur:11.5,cam(e,t,r,n){let o=kt([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],he(0,.8,e)*.6+At(yr(e/.8))*.4),a=kt([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],r.eye],At(he(.8,1,e))),i=e<.8?o:a,s=dt(dt(t.target,n.pos,he(.03,.22,e)),r.target,he(.82,1,e)),c=de(t.fov,r.fov,he(.15,.7,e))-6*he(.6,.8,e)*(1-he(.85,1,e)),l=de(t.roll,r.roll,he(0,.6,e))-.04*Math.sin(Math.PI*e);return Be(i,s,c,l)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:de(t.exposure,r.exposure,he(.5,1,e)),letterbox:de(t.letterbox,r.letterbox,e),focus:de(a,r.focus,he(.84,1,e)),aperture:de(1.1,r.aperture,he(.84,1,e)),shafts:de(t.shafts,r.shafts,he(.2,.9,e)),vignette:de(t.vignette,r.vignette,he(.5,1,e))}},leaf(e){let t=de(tx(e),e,.35),r=kt(lM,he(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-he(.55,.76,e)),o=he(.7,.8,e);return{phase:"fly",pos:Qe(r,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-o),0]),tumble:1-o,swing:n}}},{dur:2.6,cam(e,t,r){let n=At(e),o=No(t,r,n);return o.eye=Qe(o.eye,[0,0,-.35*Math.sin(Math.PI*n)]),o},look(e,t,r){let n=At(e),o={};for(let a in r)typeof r[a]=="number"&&(o[a]=de(t[a],r[a],n));return o},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,r){let n=At(e),o=kt([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],r.eye],n),a=dt(t.target,r.target,he(.1,.85,e));return Be(o,a,de(t.fov,r.fov,he(.2,1,e)),de(t.roll,r.roll,n))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=de(t[o],r[o],he(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,r){return No(t,r,At(e))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=de(t[o],r[o],At(e)));return n},leaf(){return{phase:"floor"}},walker(e){return de(sx,R0(),e)}},{dur:7.5,kick:e=>yr((e-Ta())/(1-Ta())),cam(e,t,r,n){let o=Ta(),a=he(0,o,e)*(1-he(o+.12,o+.35,e)),i=ix(Math.min(e,La)),s=Qe(t.target,[(i-t.target[0])*.15*a,0,0]),c=he(o+.12,1,e),l=kt([t.eye,t.eye,Qe(t.eye,[0,.12,-.3]),r.eye],c);return s=dt(s,n.pos,he(o+.06,o+.24,e)*(1-he(.9,1,e))),s=dt(s,r.target,he(.88,1,e)),Be(l,s,de(t.fov,r.fov,c),de(t.roll,r.roll,c))},look(e,t,r,n,o){let a=Ta(),i=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),s=he(0,.12,e)*(1-he(a+.25,a+.5,e));return{letterbox:de(de(t.letterbox,r.letterbox,he(a,1,e)),1.75,s),exposure:de(t.exposure,r.exposure,he(a,1,e)),focus:e<a?t.focus:de(t.focus,i,he(a,a+.2,e)),aperture:de(t.aperture,r.aperture,he(a,1,e)),vignette:de(t.vignette,r.vignette,e),shafts:de(t.shafts,r.shafts,e)}},leaf(e){let t=yr((e-Ta())/(1-Ta()));if(t<=0)return{phase:"floor"};let r=he(0,.85,t)*.85+gf(he(0,.15,t))*.15;return{phase:"fly",pos:Qe(Ur,[(qi[0]-Ur[0])*r+Math.sin(t*9)*.08*(1-t),(qi[1]-Ur[1])*r,(qi[2]-Ur[2])*r+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?ix(e):null}},{dur:9,cam(e,t,r,n){let o=At(e),a=kt([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],r.eye],o),i=1-he(.6,.92,e),s=dt(dt(t.target,n.pos,he(0,.15,e)),r.target,1-i),c=de(t.fov,r.fov,he(.3,1,e)),l=de(t.roll,r.roll,o)+.04*Math.sin(Math.PI*e);return Be(a,s,c,l)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:de(t.letterbox,r.letterbox,e),exposure:de(t.exposure,r.exposure,he(.3,.8,e)),focus:de(a,r.focus,he(.6,.95,e)),aperture:de(t.aperture,r.aperture,he(.6,1,e)),vignette:de(t.vignette,r.vignette,e),shafts:de(t.shafts,r.shafts,he(.3,.8,e))}},leaf(e){let t=At(e);return{phase:"fly",pos:Qe(kt(uM,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=At(e),o=No(t,r,n);return o.eye=Qe(o.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=de(t[o],r[o],e));return n.aperture=de(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=At(e);return{phase:"fly",pos:Qe(kt(dM,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=At(e),o=No(t,r,n);return o.eye=Qe(o.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=de(t[o],r[o],e));return n.aperture=de(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=At(e);return{phase:"fly",pos:Qe(kt([Tf,[29.2,1.75,45.5],[32.2,1.5,45.4],bf],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,r,n){let o=At(e),a=kt([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],r.eye],o),i=he(.05,.3,e)*(1-he(.8,1,e)),s=dt(dt(t.target,r.target,he(.6,1,e)),n.pos,i);return Be(a,s,de(t.fov,r.fov,he(.2,1,e)),de(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:de(t.letterbox,r.letterbox,e),exposure:de(t.exposure,r.exposure,e),focus:de(a,r.focus,he(.8,1,e)),aperture:de(.9,r.aperture,he(.8,1,e)),vignette:de(t.vignette,r.vignette,e),shafts:de(t.shafts,r.shafts,e)}},leaf(e){let t=kt([bf,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],$i],he(0,.85,e)),r=Math.sin(e*Math.PI*6)*.25*(1-he(.35,.82,e)),n=he(.78,.88,e);return{phase:"fly",pos:Qe(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),r]),tumble:.7*(1-n),swing:r}}},{dur:12,door(e){let t=yr((e-.02)/.09);return gf(t)+.07*Math.sin(yr((e-.08)/.18)*Math.PI)*(1-yr((e-.08)/.3))},cam(e,t,r,n){let o=Math.sin(e*340)*.012*he(.02,.05,e)*(1-he(.08,.16,e)),a=he(.06,1,e),i=kt([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],r.eye],a*.55+At(a)*.45),s=Qe(n.pos,[1,-.2,-1.45]);i=dt(i,s,he(.1,.22,e)*(1-he(.52,.72,e)));let c=he(.06,.16,e)*(1-he(.86,1,e)),l=dt(t.target,n.pos,c);l=dt(l,r.target,he(.86,1,e));let f=de(t.fov,r.fov,he(.1,1,e))+6*Math.sin(Math.PI*he(.08,.9,e)),v=de(t.roll,r.roll,e)+.06*Math.sin(Math.PI*2*he(.1,.9,e))+o;return Be(Qe(i,[0,o,0]),l,f,v)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),i=he(.02,.06,e)*(1-he(.08,.3,e));return{letterbox:de(t.letterbox,r.letterbox,he(.1,.4,e)),exposure:de(t.exposure,r.exposure,e)*(1+.8*i),focus:de(a,r.focus,he(.86,1,e)),aperture:de(.8,r.aperture,he(.86,1,e)),vignette:de(t.vignette,r.vignette,e),shafts:de(t.shafts,r.shafts,e)+i}},leaf(e){let t=yr((e-.05)/.95);if(t<=0)return{phase:"floor"};let r=kt(mM(),t*.6+At(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:Qe(r,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>ax(e,7.5)),{dur:10,cam(e,t,r,n){let o=At(e),a=kt([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],r.eye],o),i=he(0,.15,e)*(1-he(.85,1,e)),s=dt(dt(t.target,r.target,he(.5,1,e)),n.pos,i);return Be(a,s,de(t.fov,r.fov,o)+4*Math.sin(Math.PI*o),de(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:de(t.letterbox,r.letterbox,e),exposure:de(t.exposure,r.exposure,e),focus:de(a,r.focus,he(.85,1,e)),aperture:de(.6,r.aperture,he(.85,1,e)),vignette:de(t.vignette,r.vignette,e),shafts:de(t.shafts,r.shafts,e)}},leaf(e){let t=At(e),r=kt(vM(),t);return{phase:"fly",pos:Qe(r,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>ax(e,7.5)),{dur:10,cam(e,t,r,n){let o=At(e),a=kt([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],r.eye],o),i=he(0,.2,e)*(1-he(.9,1,e)),s=dt(dt(t.target,r.target,he(.5,1,e)),n.pos,i);return Be(a,s,de(t.fov,r.fov,o),de(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:de(t.letterbox,r.letterbox,e),exposure:de(t.exposure,r.exposure,e),focus:de(a,r.focus,he(.85,1,e)),aperture:de(.7,r.aperture,he(.85,1,e)),vignette:de(t.vignette,r.vignette,e),shafts:de(t.shafts,r.shafts,e)}},leaf(e){let t=kt(gM(),he(0,.86,e)),r=Math.sin(e*Math.PI*7)*.3*(1-he(.4,.84,e)),n=he(.8,.9,e);return{phase:"fly",pos:Qe(t,[r,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:r}}}],wf=9.2,La=.6;function ix(e){return e<La?de(R0(),wf,e/La):de(wf,fM,(e-La)/(1-La))}function Ta(){return La*yr((Ur[0]+.15-R0())/(wf-R0()))}var _f={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},z0=e=>Object.assign({},_f,Hn[e].look),yM=`
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
`;function gr(e,t,r){let n=document.createElement(e);return t&&(n.className=t),r!==void 0&&(n.innerHTML=r),n}var Sa=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function C0(e,t,r){e.querySelectorAll(".tour-line").forEach((n,o)=>{n.style.transitionDelay=(t+o*r).toFixed(2)+"s"})}cx.exports=function(t){let r=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let H=document.createElement("link");H.rel="stylesheet",H.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",H.setAttribute("data-tour-font",""),document.head.appendChild(H)}let o=document.createElement("style");o.textContent=yM+`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(o);let a=gr("div","tour");a.setAttribute("role","region"),a.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let i=gr("div","tour-mark",Sa(S0.name)),s=gr("button","tour-free","Explore freely");s.type="button";let c=gr("div","tour-links",mf.icons("tour-icon"));c.insertBefore(pf()("tour-icon"),c.firstChild),k0&&c.appendChild(s);let l=gr("div","tour-progress",Hn.map(()=>"<i></i>").join("")),f=gr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),v=f.querySelector("span"),h=gr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Sa(S0.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);C0(h,.4,.35);let u=S0.text.split(/\n\s*\n/).map(H=>`<p class="tour-line">${Sa(H.trim())}</p>`).join(""),m=gr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Sa(S0.title)}</h2>
		<span class="tour-rule"></span>
		${mf.line("tour-line tour-contact")}
		${u}`);C0(m,.25,.28);let d=gr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);C0(d,.6,.3);let p=gr("div","tour-card tour-master","");function g(H){let X=gr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),ee=X.querySelector(".tour-title"),fe=X.querySelector(".tour-body");return X.filled=!1,X.body=fe,X.fill=()=>{let Ie=H();if(!Ie||X.filled)return;X.filled=!0;let $e=Ie.title||"";X.querySelector(".tour-kicker").textContent=nM(Ie)||"Oil on canvas";let Ct=X.querySelector(".visit-row");Ct.innerHTML=vf.button(Ie),Ct.hidden=!Ct.innerHTML;let lt=Ct.querySelector(".visit-btn");lt&&(lt.addEventListener("click",ot=>{ot.stopPropagation(),vf.open(Ie)}),X.warm=()=>vf.warm(Ie));let yt=0;ee.innerHTML=$e.split(" ").map(ot=>'<span class="tour-word">'+ot.split("").map(Rr=>`<span style="transition-delay:${(.35+yt++*.045).toFixed(3)}s">${Sa(Rr)}</span>`).join("")+"</span>").join(" "),ee.setAttribute("aria-label",$e);let pt=.35+$e.length*.045+.2;X.querySelector(".tour-rule").style.transitionDelay=pt.toFixed(2)+"s";let ht=String(Ie.description||"").split(/\n\s*\n/).filter(ot=>ot.trim());fe.innerHTML=ht.map(ot=>`<p class="tour-line">${Sa(ot.trim())}</p>`).join(""),X.querySelector(".tour-kicker").style.transitionDelay="0.1s",fe.querySelectorAll(".tour-line").forEach((ot,Rr)=>{ot.style.transitionDelay=(pt+.3+Math.min(Rr,6)*.35).toFixed(2)+"s"})},X}let x=()=>t.paintings?t.paintings():[],w=H=>x().find(X=>X.side==="corridor"&&Math.abs(X.paintingPosition[0]-H)<.5),b=g(()=>x().find(H=>H.side==="end")),A=()=>gr("div","tour-card",""),T=g(()=>w(Ro[0])),P=g(()=>w(Io[0])),C=g(()=>w(Po[0])),k=jt.map(H=>g(()=>x().find(X=>X.side===H.side&&Math.abs(X.paintingPosition[2]-H.z)<.5))),U=gr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${k0?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		${mf.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${k0?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);C0(U,.5,.35);let R=[h,m,d,p,b,A(),A(),A(),T,P,C,A(),...k,U];a.append(...R,i,c,l,f),document.body.appendChild(a),document.body.classList.add("touring");let D=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,q=D?"Scroll":"Swipe",B=Hn.map((H,X)=>X===0?D?"Scroll to begin":"Swipe up to begin":X===1?q+" to follow the leaf":X===2?q+" to follow the light":X===3?q+" for its story":X===6||X===7||X===Hn.length-1?"":q+" on"),K=[0];xf.forEach(H=>K.push(K[K.length-1]+H.dur));let te=K[K.length-1],re=210,J=95,me=.35,xe=1.4,Ce=.32,He=1,Ze=1.3,Ne=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Je=2.2,Xe=.7,ct=.9,ye=!0,ve=0,ze=0,De=0,ae=-10,ge=!1,qe=-1,Pe=0,be=0,ke=0,Ae=null,Fe=Object.assign({},z0(0)),je=Hn[0].cam(0),Re={phase:"home",pos:ka.slice(),tumble:0},M=0,W=H=>{let X=0;for(let ee=1;ee<K.length;ee++)Math.abs(K[ee]-H)<Math.abs(K[X]-H)&&(X=ee);return X};function N(H){let X=R[H];X&&X.fill&&(X.fill(),X.body.scrollTop=0,X.offsetWidth),R.forEach((ee,fe)=>ee.classList.toggle("on",fe===H)),X&&X.warm&&X.warm(),v.textContent=B[H]||"",f.classList.toggle("on",!!B[H])}function ie(){R.forEach(H=>H.classList.remove("on")),f.classList.remove("on")}let Se=null,E=-1;function y(H){if(!ye||Ae)return;let X=ke-ae>me;if(ae=ke,X||!Se){let ee=0,fe=te;for(let Ie=0;Ie<K.length;Ie++)if(K[Ie]<=ve-.02&&(ee=K[Ie]),K[Ie]>=ve+.02){fe=K[Ie];break}Se={lo:ee,hi:fe}}ke<E||(ge=!1,De=Math.max(Se.lo,Math.min(Se.hi,De+H)),De=Math.max(ve-Je,Math.min(ve+Je,De)))}function z(H){if(!ye||Ae)return;let X=ge?De:ve,ee;if(H>0)ee=K.findIndex(fe=>fe>X+.05);else{ee=-1;for(let fe=K.length-1;fe>=0;fe--)if(K[fe]<X-.05){ee=fe;break}}ee<0||(De=K[ee],ge=!0,ae=ke)}let G=null,j=H=>H.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(H=>a.addEventListener(H,j)),a.addEventListener("pointerdown",H=>{if(H.stopPropagation(),!(H.target.closest("button, a")||H.target.closest(".tour-body"))){G={x:H.clientX,y:H.clientY,lx:H.clientX,ly:H.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{a.setPointerCapture(H.pointerId)}catch(X){}}}),a.addEventListener("pointermove",H=>{if(!G)return;let X=H.clientX-G.lx,ee=H.clientY-G.ly;G.lx=H.clientX,G.ly=H.clientY;let fe=Math.abs(ee)>=Math.abs(X)?-ee:-X;G.moved+=Math.abs(fe);let Ie=performance.now(),$e=fe/J;G.v=G.v*.6+$e/Math.max(.008,(Ie-G.lt)/1e3)*.4,G.lt=Ie,G.moved>6&&y($e)});let O=H=>{let X=G;G=null,X&&(X.moved<10&&performance.now()-X.t<500?z(1):performance.now()-X.lt<120&&y(Math.max(-1.6,Math.min(1.6,X.v*.22))))};a.addEventListener("pointerup",H=>{H.stopPropagation(),O(H)}),a.addEventListener("pointercancel",()=>{G=null}),a.addEventListener("wheel",H=>{if(H.target.closest(".tour-body")){let ee=H.target.closest(".tour-body"),fe=ee.scrollTop+ee.clientHeight>=ee.scrollHeight-2&&H.deltaY>0,Ie=ee.scrollTop<=0&&H.deltaY<0;if(!fe&&!Ie)return}H.preventDefault();let X=H.deltaMode===1?H.deltaY*16:H.deltaMode===2?H.deltaY*window.innerHeight:H.deltaY;y(X/re)},{passive:!1}),window.addEventListener("keydown",H=>{if(!ye||Ae||document.body.classList.contains("visiting"))return;let X=H.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(X)>=0){if((X==="Enter"||X===" ")&&H.target&&H.target.tagName==="BUTTON")return;H.preventDefault(),H.stopImmediatePropagation(),z(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(X)>=0?(H.preventDefault(),H.stopImmediatePropagation(),z(-1)):X==="Escape"?(H.preventDefault(),L()):/^[wasdzq]$/i.test(X)&&H.stopImmediatePropagation()},!0),window.addEventListener("keyup",H=>{ye&&!Ae&&/^(Arrow|[wasdzq]$)/i.test(H.key)&&H.stopImmediatePropagation()},!0),s.addEventListener("click",H=>{H.stopPropagation(),L()}),U.addEventListener("click",H=>{let X=H.target.closest("button");X&&(H.stopPropagation(),X.dataset.act==="free"&&L(),X.dataset.act==="replay"&&S(),X.dataset.act==="list"&&H0().show(!1))});let I=[null,[xr.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+za[0]-7,0],[42.5+za[1]-7,0],[42.5+za[2]-7,0],[1e3,Math.PI/2],...jt.map(H=>[H.z-1.6,H.side==="left"?-Math.PI/2:Math.PI/2]),[Un[2]-1.6,Math.PI]],F=null,_=0;function L(){if(!ye||Ae||!k0)return;let H=W(ve),X=I[H];F=H<=1?{phase:"home",pos:ka.slice()}:H>=3&&H<=6?{phase:"floor",pos:Ur.slice()}:H===11?{phase:"floor",pos:$i.slice()}:H===18?{phase:"floor",pos:Un.slice()}:null,_=H>=12?1:0,X&&n.place&&n.place(X[0],X[1]),Ae={start:ke,fromCam:je,fromLook:Object.assign({},Fe)},ie(),a.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function S(){ve=De=0,ze=0,ge=!1,qe=-1,Pe=0,be=0,Re={phase:"home",pos:ka.slice(),tumble:0},$={start:ke}}let $={start:-1},V=!1,Z=[];function ce(H){M+=H*(Re.phase==="floor"?0:1);let X=Re.tumble===void 0?0:Re.tumble,ee=fn.fromTranslation(Z,Re.pos);if(Re.phase==="home")ee=fn.rotateY(ee,ee,2.2+Math.sin(M*.9)*.15),ee=fn.rotateZ(ee,ee,-1+Math.sin(M*1.3)*.12),ee=fn.rotateX(ee,ee,.4);else if(Re.phase==="floor")ee=fn.rotateY(ee,ee,.65),ee=fn.rotateX(ee,ee,.16);else{let fe=je.eye,Ie=Re.pos,$e=[fe[0]-Ie[0],fe[1]-Ie[1],fe[2]-Ie[2]],Ct=Math.hypot($e[0],$e[1],$e[2])||1;$e=[$e[0]/Ct,$e[1]/Ct,$e[2]/Ct];let lt=[$e[2],0,-$e[0]],yt=Math.hypot(lt[0],lt[2])||1;lt=[lt[0]/yt,0,lt[2]/yt];let pt=[lt[1]*$e[2]-lt[2]*$e[1],lt[2]*$e[0]-lt[0]*$e[2],lt[0]*$e[1]-lt[1]*$e[0]],ht=[lt[0],lt[1],lt[2],0,$e[0],$e[1],$e[2],0,pt[0],pt[1],pt[2],0,Ie[0],Ie[1],Ie[2],1];for(let ot=0;ot<16;ot++)ee[ot]=ht[ot];ee=fn.rotateY(ee,ee,M*.9*X+.65),ee=fn.rotateX(ee,ee,Math.sin(M*2.3)*.9*X),ee=fn.rotateZ(ee,ee,Math.sin(M*1.7+1)*1.1*X+(Re.swing||0)*.9)}return{visible:!0,model:ee}}function le(H){for(let X in _f)Fe[X]=H[X]!==void 0?H[X]:_f[X]}function pe(H,X){if(H<=1)return{phase:"home",pos:ka.slice(),tumble:0};let ee=ox[H];if(ee){let fe=ee.amp;return{phase:"fly",pos:Qe(ee.pos(),[Math.sin(X*.55)*fe[0],Math.sin(X*.8)*fe[1],(1-Math.cos(X*.45))*fe[2]]),tumble:ee.tumble}}return{phase:"floor",pos:(H>=18?Un:H>=10?$i:Ur).slice(),tumble:0}}let se=0,Ee=null;function we(H){let X=Math.min(.1,Math.max(0,H-se));if(se=H,ke=H,V||(V=!0,$.start=H),Ae)return null;if(!ge&&!G&&ke-ae>Xe){let wt=W(De);Math.abs(K[wt]-De)<ct&&(De=K[wt])}let ee=De-ve;if(ge){let Rt=Math.sign(ee)*Math.min(He,Math.sqrt(2*Ze*Math.abs(ee)))-ze;ze+=Math.sign(Rt)*Math.min(Math.abs(Rt),Ze*X),ve+=ze*X,(ee>0&&ve>=De||ee<0&&ve<=De||Math.abs(De-ve)<1e-4)&&(ve=De,ze=0,ge=!1)}else{let wt=aM(ve,De,ze,Ce,X,3);ve=wt[0],ze=wt[1],Math.abs(De-ve)<1e-4&&Math.abs(ze)<.001&&(ve=De,ze=0)}let fe=0;for(;fe<xf.length-1&&ve>=K[fe+1];)fe++;let Ie=xf[fe],$e=yr((ve-K[fe])/Ie.dur),Ct=Hn[fe],lt=Hn[fe+1],yt=W(ve);yt!==Pe&&(Pe=yt,be=0);let pt=Math.abs(ve-K[yt])<.02;pt&&(be+=X);let ht=1-he(0,1.2,Math.abs(ve-K[yt])),ot=Ie.leaf($e);if(ot.pos?Re=Object.assign({},ot):Re=Object.assign({},ot,{pos:ot.phase==="home"?ka.slice():(fe>=10?$i:Ur).slice()}),ox[yt]&&ht>0){let wt=pe(yt,be);Re.pos=dt(Re.pos,wt.pos,ht)}let Rr=Ie.walker&&($e>.01||fe===6)?Ie.walker($e):null;Ee=Rr==null?null:{x:Rr,z:yf,heading:Math.PI/2,phase:(Rr-sx)/hM};let bt=Ie.cam($e,Ct.cam(0),lt.cam(0),Re);if(ht>0&&be>0){let wt=Hn[yt],Rt=wt.cam(0),jn=wt.cam(be);bt=Be(Qe(bt.eye,ex(Jg(jn.eye,Rt.eye),ht)),Qe(bt.target,ex(Jg(jn.target,Rt.target),ht)),bt.fov+(jn.fov-Rt.fov)*ht,bt.roll+(jn.roll-Rt.roll)*ht)}if(ht>0&&!Ne){let wt=ke,Rt=.006*ht,jn=Math.sin(wt*.61)*.6+Math.sin(wt*1.37+1.3)*.4,Df=Math.sin(wt*.47+2.1)*.6+Math.sin(wt*1.13+.4)*.4,Ff=Math.sin(wt*.53+4)*.5+Math.sin(wt*.97+2.6)*.5;bt=Be(Qe(bt.eye,[jn*Rt,Df*Rt*.7,Ff*Rt]),Qe(bt.target,[Df*Rt*1.8,jn*Rt*1.4,0]),bt.fov,bt.roll+Ff*.0012*ht)}je=bt;let Da=z0(fe),kx=z0(fe+1),F0=Object.assign({},Da,Ie.look($e,Da,kx,Re,bt.eye));if(ht>0){let wt=z0(yt);for(let Rt in wt)typeof wt[Rt]=="number"&&(F0[Rt]=de(F0[Rt],wt[Rt],ht))}le(F0);let Fa=pt&&Math.abs(De-ve)<.02?yt:-1;Fa!==qe&&(Fa>=0&&(E=ke+xe),qe=Fa,Fa>=0?N(Fa):ie()),l.querySelectorAll("i").forEach((wt,Rt)=>wt.classList.toggle("on",Rt===yt));let dn=qe>=0?R[qe]:null;dn&&dn.fill&&!dn.filled&&(dn.fill(),dn.filled&&(dn.classList.remove("on"),dn.offsetWidth,dn.classList.add("on")));let Gf=yr((H-$.start)/2.6);return Gf<1&&(Fe.fade=Math.max(Fe.fade,1-he(0,1,Gf)),Fe.fadeColor=[0,0,0]),r&&window.__camOverride&&(je=window.__camOverride),r&&window.__lookOverride&&Object.assign(Fe,window.__lookOverride),{camera:je,walker:Ee,door:Ie.door?Ie.door($e):fe>=12?1:0,look:Fe,leaf:ce(X)}}return r&&(window.__tour={go:z,exit:L,wind:y,seek(H,X){ve=De=K[H]+(K[H+1]-K[H])*X,ze=0,ge=!1,ae=ke+1e6,$.start=ke-10,V=!0},jump(H){ve=De=K[H],ze=0,ge=!1,be=0,ae=ke,$.start=ke-10,V=!0},state:()=>({current:W(ve),scroll:+ve.toFixed(3),target:+De.toFixed(3),shown:qe,move:Math.abs(De-ve)>.02?{p:ve}:null,camNow:je,leaf:Re,look:Fe})}),{update:we,get active(){return ye&&!Ae},handover(H){if(!Ae)return null;let X=yr((H-Ae.start)/1.8);return X>=1?(ye=!1,null):{from:Ae.fromCam,fromLook:Ae.fromLook,k:At(X)}},restingDoor:()=>_,restingLeaf(){return F?(Re=F,ce(0)):null},mix:No,cam:Be}}});var bM=Bf(),Oo=Ir(),Rf=H0(),I0=Oo.reflection,wM=!1,wx=(e,t,r,n,o)=>n+(e-t)*(o-n)/(r-t),If=()=>wx(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(If=()=>wx(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var _x=()=>2*Math.atan(Math.tan(If()*.5)*window.innerHeight/window.innerWidth),_M=rh(),P0=new _M;P0.showPanel(0);wM&&document.body.appendChild(P0.dom);var zt,Ga,Sf,Pa,kf,_t;function EM(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!EM())throw bM.finish(),Rf.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");zt=C1()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Oo.pixelRatio});location.hash==="#list"&&Rf.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Rf.show(!1)});Ga=fp()();var MM=bl();Sf=MM(zt,Ga,I0);Pa=Dm()(zt,Ga);kf=Hm()(zt);var fx=Bm()(zt,Ga),hx=tv()(zt),ux=ov()(zt),dx=wv()(zt),px=Sv()(zt),mx=Iv()(zt),Na=Bv()(zt),Lf=jl(),Ex=Wi(),AM=Ha(),zf=Wl(),Mx=lr(),{A:Ra}=Dr();_t=Ig()(Ga,_x);var N0=Ng()(zt,Oo),Ia=qg()(zt),vx=Hg()(zt),TM=jg()(zt,Oo),SM=Qg()(zt,Oo),gx=ma()(zt),hn=lx()({fps:_t,paintings:()=>Pa.interactables(),onExit:()=>_t.setPaused(!1)});_t.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=N0);var O0=[],G0=[],Bn=[7,2,1.6];Ga.viewer=Bn;var kM=zt({cull:{enable:!0,face:"back"},uniforms:{view:()=>O0,proj:()=>G0,yScale:1,mirrorOn:()=>I0?1:0,night:()=>Mx.night,time:zt.context("time")}}),LM=zt({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),Ax=document.createElement("style");Ax.textContent=`

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
`;document.head.appendChild(Ax);var Cr=document.createElement("button");Cr.className="painting-plaque";Cr.type="button";Cr.setAttribute("aria-label","Read painting");document.body.appendChild(Cr);var nr=document.createElement("div");nr.className="story-overlay";nr.innerHTML=`

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
`;document.body.appendChild(nr);var Oa=document.createElement("div");Oa.className="museum-links";Oa.innerHTML=Ex.icons("museum-link");Oa.insertBefore(pf()("museum-link"),Oa.firstChild);["mousedown","pointerdown","click"].forEach(e=>Oa.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(Oa);var zM=nr.querySelector("#story-title"),CM=nr.querySelector("#story-body"),xx=nr.querySelector("#story-meta"),RM=nr.querySelector(".story-contact"),Ui=nr.querySelector(".story-visit");Ui.addEventListener("click",e=>{e.target.closest(".visit-btn")&&Go&&zf.open(Go)});var IM=nr.querySelector(".story-close"),Go=null,hr={p:0,target:0,last:0},Tx={title:Lf.title,description:Lf.text,isAbout:!0},un=null;function Pf(e){e&&(Go=e,zM.textContent=e.title||"",CM.textContent=e.description||"",xx.textContent=e.isAbout?"":AM(e),xx.hidden=!!e.isAbout,RM.hidden=!e.isAbout,Ui.innerHTML=e.isAbout?"":zf.button(e),Ui.hidden=!Ui.innerHTML,Ui.hidden||zf.warm(e),nr.classList.toggle("about-mode",!!e.isAbout),nr.classList.add("open"),hr.target=e.isAbout?1:0,un=e,Cr.classList.remove("visible"),_t.setPaused(!0))}function Nf(){nr.classList.remove("open"),hr.target=0,Go=null,un=null,_t.setPaused(!1)}function Sx(e){e&&(e.preventDefault(),e.stopPropagation()),un&&Pf(un)}Cr.addEventListener("pointerup",Sx,!0);Cr.addEventListener("touchend",Sx,{passive:!1,capture:!0});Cr.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),Go===null&&un&&Pf(un)},!0);IM.addEventListener("click",Nf);nr.addEventListener("click",e=>{e.target===nr&&Nf()});window.addEventListener("keydown",e=>{e.code==="Escape"&&nr.classList.contains("open")&&Nf()});function yx(e,t){let r=t[0],n=t[1],o=t[2];return[e[0]*r+e[4]*n+e[8]*o+e[12],e[1]*r+e[5]*n+e[9]*o+e[13],e[2]*r+e[6]*n+e[10]*o+e[14],e[3]*r+e[7]*n+e[11]*o+e[15]]}function PM(){if(Go)return;if(hn.active){un=null,Cr.classList.remove("visible");return}let e=Pa.interactables(),t=_t.forward[0],r=_t.forward[2],n=Math.hypot(t,r)||1,o=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,l=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?l=1:l=-1;let f=s[0]-_t.pos[0],v=s[2]-_t.pos[2],h=-(f*c+v*l),u=Math.abs(f*l-v*c),m=-(t*c+r*l)/n,d=i.side==="end"?11:8,p=(i.width||2)/2;m>.9&&h>.5&&h<d&&u<p+.8&&h<a&&(o=i,a=h)}if(!o){let i=_t.pos[0],s=_t.pos[2];t/n>.85&&i<13.6&&s>Ra.z0-.5&&s<Ra.z1+.5&&(o=Object.assign({},Tx,{plaqueTitle:Lf.name}))}o?(un=o,Cr.textContent=o.isAbout?"ABOUT  \xB7  "+o.plaqueTitle:"READ  \xB7  "+o.title,Cr.classList.add("visible")):(un=null,Cr.classList.remove("visible"))}var Of=wi();function NM(){let e=Na.state;if(!e||!e.glowPos)return null;let t=yx(_t.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),r=yx(_t.proj(),t);return r[3]<=.05?null:[(r[0]/r[3]*.5+.5)*window.innerWidth,(.5-r[1]/r[3]*.5)*window.innerHeight,r[3]]}var Cf=null;window.addEventListener("pointerdown",e=>{Cf={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Cf;if(Cf=null,!t||Go||hn.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let r=NM();if(!r)return;let n=!!document.pointerLockElement,o=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/r[2]);Math.hypot(o-r[0],a-r[1])<i&&(e.preventDefault(),e.stopPropagation(),Pf(Tx))},!0);function OM(e){let t=Math.min(Math.max(e-hr.last,0),.1);hr.last=e;let r=t/1.6;if(hr.p=hr.target>hr.p?Math.min(1,hr.p+r):Math.max(0,hr.p-r),hr.p<=0)return;let n=hr.p<.5?2*hr.p*hr.p:1-Math.pow(-2*hr.p+2,2)/2,o=window.innerHeight>window.innerWidth,a=Na.state,i=a&&a.hipsPos?a.hipsPos[0]:Ra.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Ra.zc,c=o?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],l=o?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],f=_t.pos,v=_t.forward,h=[f[0],f[1],f[2]],u=[f[0]+v[0],f[1]+v[1],f[2]+v[2]],m=(x,w)=>x.map((b,A)=>b+(w[A]-b)*n),d=[Ra.cx-6.2,1.7,Ra.zc],p=1-n,g=h.map((x,w)=>p*p*x+2*p*n*d[w]+n*n*c[w]);Of.lookAt(_t.view(),g,m(u,l),[0,1,0])}var Ca={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},D0=null;function GM(e,t,r,n){let o=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],a=Math.hypot(o[0],o[1],o[2])||1,i=[-o[2]/a,0,o[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),l=Math.sin(n);return Of.lookAt(e,t,r,[i[0]*l,c,i[2]*l])}function DM(e){let t=window.innerWidth/window.innerHeight,r=N0.shot,n=hn.active?hn.update(e):null,o=n?null:hn.handover(e),a=null,i=Ca;if(n?(a=n.camera,i=n.look,D0=n.leaf,Na.setWalk(n.walker||null),Ia.setOpen(n.door||0)):(D0=hn.restingLeaf(),Na.setWalk(null),Ia.setOpen(hn.restingDoor())),o){let s=_t.pos,c=_t.forward,l=hn.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],_x()*180/Math.PI,0);a=hn.mix(o.from,l,o.k),i={};for(let f in Ca)i[f]=Array.isArray(Ca[f])?Ca[f]:o.fromLook[f]+(Ca[f]-o.fromLook[f])*o.k}if(a)GM(O0,a.eye,a.target,a.roll||0),Of.perspective(G0,a.fov*Math.PI/180,t,.1,700),Bn[0]=a.eye[0],Bn[1]=a.eye[1],Bn[2]=a.eye[2];else{let s=_t.view(),c=_t.proj();for(let h=0;h<16;h++)O0[h]=s[h],G0[h]=c[h];let l=s[12],f=s[13],v=s[14];Bn[0]=-(s[0]*l+s[1]*f+s[2]*v),Bn[1]=-(s[4]*l+s[5]*f+s[6]*v),Bn[2]=-(s[8]*l+s[9]*f+s[10]*v)}for(let s in Ca)r[s]=i[s]}var Hi=0,bx=0;zt.frame(function({time:e}){if(document.body.classList.contains("visiting")){Hi=0;return}P0.begin(),Mx.tick(e),Hi++,Hi===60&&(bx=e),Hi===180&&120/Math.max(e-bx,.001)<32&&Oo.stepDown()&&(I0=Oo.reflection,Hi=0),_t.tick({time:e}),OM(e),Pa.update(_t.pos,_t.fmouse[1],If()),PM(),DM(e),N0.capture(arguments[0],{view:O0,proj:G0,eye:Bn},()=>{kM(()=>{I0&&LM(()=>{Sf(),fx(),gx(),mx(),Na(),kf(Pa.batch()),hx(),dx(),px(),vx(D0),Ia(),ux(),Ia.glass()}),Sf(),fx(),gx(),mx(),Na(),kf(Pa.batch()),hx(),dx(),px(),SM(),vx(D0),Ia(),TM(),ux(),Ia.glass()})}),N0.present(),P0.end()});})();
