"use strict";(()=>{var de=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ih=de((K_,Rh)=>{"use strict";var Yi=document.getElementById("loader"),a0=Yi&&Yi.querySelector(".loader-bar i"),Ki=0,i0=0,kh=!1,ex=performance.now();function Lh(){if(!a0)return;let e=Ki?i0/Math.max(Ki,24):0;a0.style.transform="scaleX("+Math.min(1,.06+e*.94).toFixed(3)+")"}function el(){kh||(kh=!0,window.__galleryReady=!0,Yi&&(a0&&(a0.style.transform="scaleX(1)"),Yi.classList.add("done"),setTimeout(()=>Yi.remove(),1400)))}var Ch=null;function tx(){clearTimeout(Ch),i0>=Ki&&performance.now()-ex>600&&(Ch=setTimeout(()=>{i0>=Ki&&el()},450))}setTimeout(el,2e4);var rx=e=>/(^|\/)(res|images)\//.test(e),o0=window.fetch.bind(window);async function nx(e,t){let r=await o0(e+".gz",t);if(!r.ok)throw new Error("no .gz");let n=new Uint8Array(await r.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let o=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(o).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let r=typeof e=="string"?e:e&&e.url||"";if(!rx(r))return o0(e,t);Ki++,Lh();let n=a=>(i0++,Lh(),tx(),a),o;return/\.bin$/.test(r)&&typeof DecompressionStream!="undefined"?o=nx(r,t).catch(()=>o0(e,t)):o=o0(e,t),o.then(n,a=>{throw n(),a})};Rh.exports={finish:el}});var Mo=de((Q_,Oh)=>{"use strict";var zh=typeof navigator!="undefined"&&navigator.userAgent||"",ox=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Eo=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(zh)||/Macintosh/.test(zh)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||ox,Ph=typeof window!="undefined"&&window.devicePixelRatio||1,pn={isPhone:Eo,pixelRatio:Eo?Math.min(Ph,1.5):Math.min(Ph,2),reflection:!Eo,gardenDetail:Eo?0:1,leafShare:Eo?.65:1,motion:!Eo,post:Eo?1:2,level:Eo?1:0};pn.stepDown=()=>{if(pn.reflection)pn.reflection=!1;else if(pn.gardenDetail>0||pn.motion)pn.gardenDetail=0,pn.motion=!1,pn.leafShare=Math.min(pn.leafShare,.65);else if(pn.post>0)pn.post--;else return!1;return pn.level++,!0};Oh.exports=pn});var tl=de((Z_,Nh)=>{"use strict";Nh.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var s0=de((J_,Dh)=>{"use strict";var Yr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Fh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Gh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Yr.instagramUrl="https://instagram.com/"+Yr.instagram;Yr.mailUrl="mailto:"+Yr.email+"?subject="+encodeURIComponent("Your paintings");Yr.icons=e=>`
	<a class="${e}" href="${Yr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Yr.instagram}" title="Instagram">${Fh}</a>
	<a class="${e}" href="${Yr.mailUrl}" aria-label="Email ${Yr.email}" title="Email">${Gh}</a>`;Yr.line=e=>`
	<span class="${e}">
		<a href="${Yr.instagramUrl}" target="_blank" rel="noopener">${Fh}<span>@${Yr.instagram}</span></a>
		<a href="${Yr.mailUrl}">${Gh}<span>${Yr.email}</span></a>
	</span>`;Dh.exports=Yr});var c0=de((e4,$h)=>{"use strict";$h.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var rl=de((t4,Uh)=>{"use strict";var ax=tl(),ix=s0(),qh=c0(),sx=Mo(),Ao=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),cx=`
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
`,Kr=null;function lx(e){if(Kr){Kr.hidden=!1,requestAnimationFrame(()=>Kr.classList.add("on"));return}let t=document.createElement("style");t.textContent=cx,document.head.appendChild(t);let r=!sx.isPhone;Kr=document.createElement("div"),Kr.className="plist",Kr.setAttribute("role","region"),Kr.setAttribute("aria-label","All paintings"),Kr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${ix.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${ax.map(o=>`
			<article class="plist-item" id="${Ao(o.slug)}">
				<img loading="lazy" decoding="async" alt="${Ao(o.title)}, ${Ao(qh(o))}"
					src="images/web/${Ao(o.slug)}${r?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Ao(o.file)}'">
				<p class="plist-meta">${Ao(qh(o))}</p>
				<h2>${Ao(o.title)}</h2>
				<details><summary>Read its story</summary>
					${String(o.description).split(/\n\s*\n/).map(a=>`<p>${Ao(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(o=>Kr.addEventListener(o,a=>a.stopPropagation(),{passive:!0}));let n=Kr.querySelector(".plist-close");n&&n.addEventListener("click",Hh),document.body.appendChild(Kr),requestAnimationFrame(()=>Kr.classList.add("on"))}function Hh(){Kr&&(Kr.classList.remove("on"),setTimeout(()=>{Kr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Uh.exports={show:lx,hide:Hh}});var Bh=de((nl,ol)=>{(function(e,t){typeof nl=="object"&&typeof ol!="undefined"?ol.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(nl,function(){var e=function(){function t(p){return o.appendChild(p.dom),p}function r(p){for(var u=0;u<o.children.length;u++)o.children[u].style.display=u===p?"block":"none";n=p}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),r(++n%o.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var p=(performance||Date).now();if(f.update(p-a,200),p>i+1e3&&(c.update(1e3*s/(p-i),100),i=p,s=0,h)){var u=performance.memory;h.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:r}};return e.Panel=function(t,r,n){var o=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,h=3*s,p=2*s,u=3*s,m=15*s,v=74*s,d=30*s,g=document.createElement("canvas");g.width=c,g.height=f,g.style.cssText="width:80px;height:48px";var w=g.getContext("2d");return w.font="bold "+9*s+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,c,f),w.fillStyle=r,w.fillText(t,h,p),w.fillRect(u,m,v,d),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u,m,v,d),{dom:g,update:function(T,R){o=Math.min(o,T),a=Math.max(a,T),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,c,m),w.fillStyle=r,w.fillText(i(T)+" "+t+" ("+i(o)+"-"+i(a)+")",h,p),w.drawImage(g,u+s,m,v-s,d,u,m,v-s,d),w.fillRect(u+v-s,m,s,d),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u+v-s,m,s,i((1-T/R)*d))}}},e})});var jh=de((al,il)=>{(function(e,t){typeof al=="object"&&typeof il!="undefined"?il.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(al,function(){"use strict";var e=function(l){return l instanceof Uint8Array||l instanceof Uint16Array||l instanceof Uint32Array||l instanceof Int8Array||l instanceof Int16Array||l instanceof Int32Array||l instanceof Float32Array||l instanceof Float64Array||l instanceof Uint8ClampedArray},t=function(l,b){for(var S=Object.keys(b),j=0;j<S.length;++j)l[S[j]]=b[S[j]];return l},r=`
`;function n(l){return typeof atob!="undefined"?atob(l):"base64:"+l}function o(l){var b=new Error("(regl) "+l);throw console.error(b),b}function a(l,b){l||o(b)}function i(l){return l?": "+l:""}function s(l,b,S){l in b||o("unknown parameter ("+l+")"+i(S)+". possible values: "+Object.keys(b).join())}function c(l,b){e(l)||o("invalid parameter type"+i(b)+". must be a typed array")}function f(l,b){switch(b){case"number":return typeof l=="number";case"object":return typeof l=="object";case"string":return typeof l=="string";case"boolean":return typeof l=="boolean";case"function":return typeof l=="function";case"undefined":return typeof l=="undefined";case"symbol":return typeof l=="symbol"}}function h(l,b,S){f(l,b)||o("invalid parameter type"+i(S)+". expected "+b+", got "+typeof l)}function p(l,b){l>=0&&(l|0)===l||o("invalid parameter type, ("+l+")"+i(b)+". must be a nonnegative integer")}function u(l,b,S){b.indexOf(l)<0&&o("invalid value"+i(S)+". must be one of: "+b)}var m=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function v(l){Object.keys(l).forEach(function(b){m.indexOf(b)<0&&o('invalid regl constructor argument "'+b+'". must be one of '+m)})}function d(l,b){for(l=l+"";l.length<b;)l=" "+l;return l}function g(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function w(l,b){this.number=l,this.line=b,this.errors=[]}function T(l,b,S){this.file=l,this.line=b,this.message=S}function R(){var l=new Error,b=(l.stack||l).toString(),S=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(b);if(S)return S[1];var j=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(b);return j?j[1]:"unknown"}function D(){var l=new Error,b=(l.stack||l).toString(),S=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(b);if(S)return S[1];var j=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(b);return j?j[1]:"unknown"}function q(l,b){var S=l.split(`
`),j=1,Q=0,U={unknown:new g,0:new g};U.unknown.name=U[0].name=b||R(),U.unknown.lines.push(new w(0,""));for(var V=0;V<S.length;++V){var ie=S[V],le=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(ie);if(le)switch(le[1]){case"line":var me=/(\d+)(\s+\d+)?/.exec(le[2]);me&&(j=me[1]|0,me[2]&&(Q=me[2]|0,Q in U||(U[Q]=new g)));break;case"define":var fe=/SHADER_NAME(_B64)?\s+(.*)$/.exec(le[2]);fe&&(U[Q].name=fe[1]?n(fe[2]):fe[2]);break}U[Q].lines.push(new w(j++,ie))}return Object.keys(U).forEach(function(xe){var Ae=U[xe];Ae.lines.forEach(function(se){Ae.index[se.number]=se})}),U}function H(l){var b=[];return l.split(`
`).forEach(function(S){if(!(S.length<5)){var j=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(S);j?b.push(new T(j[1]|0,j[2]|0,j[3].trim())):S.length>0&&b.push(new T("unknown",0,S))}}),b}function ae(l,b){b.forEach(function(S){var j=l[S.file];if(j){var Q=j.index[S.line];if(Q){Q.errors.push(S),j.hasErrors=!0;return}}l.unknown.hasErrors=!0,l.unknown.lines[0].errors.push(S)})}function ve(l,b,S,j,Q){if(!l.getShaderParameter(b,l.COMPILE_STATUS)){var U=l.getShaderInfoLog(b),V=j===l.FRAGMENT_SHADER?"fragment":"vertex";ye(S,"string",V+" shader source must be a string",Q);var ie=q(S,Q),le=H(U);ae(ie,le),Object.keys(ie).forEach(function(me){var fe=ie[me];if(!fe.hasErrors)return;var xe=[""],Ae=[""];function se(be,N){xe.push(be),Ae.push(N||"")}se("file number "+me+": "+fe.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),fe.lines.forEach(function(be){if(be.errors.length>0){se(d(be.number,4)+"|  ","background-color:yellow; font-weight:bold"),se(be.line+r,"color:red; background-color:yellow; font-weight:bold");var N=0;be.errors.forEach(function(X){var pe=X.message,Re=/^\s*'(.*)'\s*:\s*(.*)$/.exec(pe);if(Re){var te=Re[1];switch(pe=Re[2],te){case"assign":te="=";break}N=Math.max(be.line.indexOf(te,N),0)}else N=0;se(d("| ",6)),se(d("^^^",N+3)+r,"font-weight:bold"),se(d("| ",6)),se(pe+r,"font-weight:bold")}),se(d("| ",6)+r)}else se(d(be.number,4)+"|  "),se(be.line+r,"color:red")}),typeof document!="undefined"&&!window.chrome?(Ae[0]=xe.join("%c"),console.log.apply(console,Ae)):console.log(xe.join(""))}),a.raise("Error compiling "+V+" shader, "+ie[0].name)}}function J(l,b,S,j,Q){if(!l.getProgramParameter(b,l.LINK_STATUS)){var U=l.getProgramInfoLog(b),V=q(S,Q),ie=q(j,Q),le='Error linking program with vertex shader, "'+ie[0].name+'", and fragment shader "'+V[0].name+'"';typeof document!="undefined"?console.log("%c"+le+r+"%c"+U,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(le+r+U),a.raise(le)}}function Ee(l){l._commandRef=R()}function ue(l,b,S,j){Ee(l);function Q(le){return le?j.id(le):0}l._fragId=Q(l.static.frag),l._vertId=Q(l.static.vert);function U(le,me){Object.keys(me).forEach(function(fe){le[j.id(fe)]=!0})}var V=l._uniformSet={};U(V,b.static),U(V,b.dynamic);var ie=l._attributeSet={};U(ie,S.static),U(ie,S.dynamic),l._hasCount="count"in l.static||"count"in l.dynamic||"elements"in l.static||"elements"in l.dynamic}function Fe(l,b){var S=D();o(l+" in command "+(b||R())+(S==="unknown"?"":" called from "+S))}function ze(l,b,S){l||Fe(b,S||R())}function Ie(l,b,S,j){l in b||Fe("unknown parameter ("+l+")"+i(S)+". possible values: "+Object.keys(b).join(),j||R())}function ye(l,b,S,j){f(l,b)||Fe("invalid parameter type"+i(S)+". expected "+b+", got "+typeof l,j||R())}function rt(l){l()}function Xt(l,b,S){l.texture?u(l.texture._texture.internalformat,b,"unsupported texture format for attachment"):u(l.renderbuffer._renderbuffer.format,S,"unsupported renderbuffer format for attachment")}var ct=33071,Ft=9728,Gt=9984,ir=9985,Zt=9986,In=9987,pr=5120,Ir=5121,At=5122,De=5123,ft=5124,Je=5125,Jt=5126,zn=32819,Se=32820,nt=33635,xt=34042,Dt=36193,_t={};_t[pr]=_t[Ir]=1,_t[At]=_t[De]=_t[Dt]=_t[nt]=_t[zn]=_t[Se]=2,_t[ft]=_t[Je]=_t[Jt]=_t[xt]=4;function Ct(l,b){return l===Se||l===zn||l===nt?2:l===xt?4:_t[l]*b}function bt(l){return!(l&l-1)&&!!l}function $t(l,b,S){var j,Q=b.width,U=b.height,V=b.channels;a(Q>0&&Q<=S.maxTextureSize&&U>0&&U<=S.maxTextureSize,"invalid texture shape"),(l.wrapS!==ct||l.wrapT!==ct)&&a(bt(Q)&&bt(U),"incompatible wrap mode for texture, both width and height must be power of 2"),b.mipmask===1?Q!==1&&U!==1&&a(l.minFilter!==Gt&&l.minFilter!==Zt&&l.minFilter!==ir&&l.minFilter!==In,"min filter requires mipmap"):(a(bt(Q)&&bt(U),"texture must be a square power of 2 to support mipmapping"),a(b.mipmask===(Q<<1)-1,"missing or incomplete mipmap data")),b.type===Jt&&(S.extensions.indexOf("oes_texture_float_linear")<0&&a(l.minFilter===Ft&&l.magFilter===Ft,"filter not supported, must enable oes_texture_float_linear"),a(!l.genMipmaps,"mipmap generation not supported with float textures"));var ie=b.images;for(j=0;j<16;++j)if(ie[j]){var le=Q>>j,me=U>>j;a(b.mipmask&1<<j,"missing mipmap data");var fe=ie[j];if(a(fe.width===le&&fe.height===me,"invalid shape for mip images"),a(fe.format===b.format&&fe.internalformat===b.internalformat&&fe.type===b.type,"incompatible type for mip image"),!fe.compressed)if(fe.data){var xe=Math.ceil(Ct(fe.type,V)*le/fe.unpackAlignment)*fe.unpackAlignment;a(fe.data.byteLength===xe*me,"invalid data for image, buffer size is inconsistent with image format")}else fe.element||fe.copy}else l.genMipmaps||a((b.mipmask&1<<j)===0,"extra mipmap data");b.compressed&&a(!l.genMipmaps,"mipmap generation for compressed images not supported")}function Yt(l,b,S,j){var Q=l.width,U=l.height,V=l.channels;a(Q>0&&Q<=j.maxTextureSize&&U>0&&U<=j.maxTextureSize,"invalid texture shape"),a(Q===U,"cube map must be square"),a(b.wrapS===ct&&b.wrapT===ct,"wrap mode not supported by cube map");for(var ie=0;ie<S.length;++ie){var le=S[ie];a(le.width===Q&&le.height===U,"inconsistent cube map face shape"),b.genMipmaps&&(a(!le.compressed,"can not generate mipmap for compressed textures"),a(le.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var me=le.images,fe=0;fe<16;++fe){var xe=me[fe];if(xe){var Ae=Q>>fe,se=U>>fe;a(le.mipmask&1<<fe,"missing mipmap data"),a(xe.width===Ae&&xe.height===se,"invalid shape for mip images"),a(xe.format===l.format&&xe.internalformat===l.internalformat&&xe.type===l.type,"incompatible type for mip image"),xe.compressed||(xe.data?a(xe.data.byteLength===Ae*se*Math.max(Ct(xe.type,V),xe.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):xe.element||xe.copy)}}}}var x=t(a,{optional:rt,raise:o,commandRaise:Fe,command:ze,parameter:s,commandParameter:Ie,constructor:v,type:h,commandType:ye,isTypedArray:c,nni:p,oneOf:u,shaderError:ve,linkError:J,callSite:D,saveCommandRef:Ee,saveDrawInfo:ue,framebufferFormat:Xt,guessCommand:R,texture2D:$t,textureCube:Yt}),jt=0,mr=0,Qe=5,Rt=6;function ot(l,b){this.id=jt++,this.type=l,this.data=b}function nr(l){return l.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function sr(l){if(l.length===0)return[];var b=l.charAt(0),S=l.charAt(l.length-1);if(l.length>1&&b===S&&(b==='"'||b==="'"))return['"'+nr(l.substr(1,l.length-2))+'"'];var j=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(l);if(j)return sr(l.substr(0,j.index)).concat(sr(j[1])).concat(sr(l.substr(j.index+j[0].length)));var Q=l.split(".");if(Q.length===1)return['"'+nr(l)+'"'];for(var U=[],V=0;V<Q.length;++V)U=U.concat(sr(Q[V]));return U}function fn(l){return"["+sr(l).join("][")+"]"}function rn(l,b){return new ot(l,fn(b+""))}function Uo(l){return typeof l=="function"&&!l._reglType||l instanceof ot}function Vn(l,b){if(typeof l=="function")return new ot(mr,l);if(typeof l=="number"||typeof l=="boolean")return new ot(Qe,l);if(Array.isArray(l))return new ot(Rt,l.map((S,j)=>Vn(S,b+"["+j+"]")));if(l instanceof ot)return l;x(!1,"invalid option type in uniform "+b)}var zr={DynamicVariable:ot,define:rn,isDynamic:Uo,unbox:Vn,accessor:fn},un={next:typeof requestAnimationFrame=="function"?function(l){return requestAnimationFrame(l)}:function(l){return setTimeout(l,16)},cancel:typeof cancelAnimationFrame=="function"?function(l){return cancelAnimationFrame(l)}:clearTimeout},Pn=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Bo(){var l={"":0},b=[""];return{id:function(S){var j=l[S];return j||(j=l[S]=b.length,b.push(S),j)},str:function(S){return b[S]}}}function vo(l,b,S){var j=document.createElement("canvas");t(j.style,{border:0,margin:0,padding:0,top:0,left:0}),l.appendChild(j),l===document.body&&(j.style.position="absolute",t(l.style,{margin:0,padding:0}));function Q(){var ie=window.innerWidth,le=window.innerHeight;if(l!==document.body){var me=l.getBoundingClientRect();ie=me.right-me.left,le=me.bottom-me.top}j.width=S*ie,j.height=S*le,t(j.style,{width:ie+"px",height:le+"px"})}var U;l!==document.body&&typeof ResizeObserver=="function"?(U=new ResizeObserver(function(){setTimeout(Q)}),U.observe(l)):window.addEventListener("resize",Q,!1);function V(){U?U.disconnect():window.removeEventListener("resize",Q),l.removeChild(j)}return Q(),{canvas:j,onDestroy:V}}function go(l,b){function S(j){try{return l.getContext(j,b)}catch(Q){return null}}return S("webgl")||S("experimental-webgl")||S("webgl-experimental")}function On(l){return typeof l.nodeName=="string"&&typeof l.appendChild=="function"&&typeof l.getBoundingClientRect=="function"}function er(l){return typeof l.drawArrays=="function"||typeof l.drawElements=="function"}function Ci(l){return typeof l=="string"?l.split():(x(Array.isArray(l),"invalid extension array"),l)}function Ts(l){return typeof l=="string"?(x(typeof document!="undefined","not supported outside of DOM"),document.querySelector(l)):l}function oe(l){var b=l||{},S,j,Q,U,V={},ie=[],le=[],me=typeof window=="undefined"?1:window.devicePixelRatio,fe=!1,xe=function(be){be&&x.raise(be)},Ae=function(){};if(typeof b=="string"?(x(typeof document!="undefined","selector queries only supported in DOM enviroments"),S=document.querySelector(b),x(S,"invalid query string for element")):typeof b=="object"?On(b)?S=b:er(b)?(U=b,Q=U.canvas):(x.constructor(b),"gl"in b?U=b.gl:"canvas"in b?Q=Ts(b.canvas):"container"in b&&(j=Ts(b.container)),"attributes"in b&&(V=b.attributes,x.type(V,"object","invalid context attributes")),"extensions"in b&&(ie=Ci(b.extensions)),"optionalExtensions"in b&&(le=Ci(b.optionalExtensions)),"onDone"in b&&(x.type(b.onDone,"function","invalid or missing onDone callback"),xe=b.onDone),"profile"in b&&(fe=!!b.profile),"pixelRatio"in b&&(me=+b.pixelRatio,x(me>0,"invalid pixel ratio"))):x.raise("invalid arguments to regl"),S&&(S.nodeName.toLowerCase()==="canvas"?Q=S:j=S),!U){if(!Q){x(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var se=vo(j||document.body,xe,me);if(!se)return null;Q=se.canvas,Ae=se.onDestroy}V.premultipliedAlpha===void 0&&(V.premultipliedAlpha=!0),U=go(Q,V)}return U?{gl:U,canvas:Q,container:j,extensions:ie,optionalExtensions:le,pixelRatio:me,profile:fe,onDone:xe,onDestroy:Ae}:(Ae(),xe("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Ce(l,b){var S={};function j(V){x.type(V,"string","extension name must be string");var ie=V.toLowerCase(),le;try{le=S[ie]=l.getExtension(ie)}catch(me){}return!!le}for(var Q=0;Q<b.extensions.length;++Q){var U=b.extensions[Q];if(!j(U))return b.onDestroy(),b.onDone('"'+U+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return b.optionalExtensions.forEach(j),{extensions:S,restore:function(){Object.keys(S).forEach(function(V){if(S[V]&&!j(V))throw new Error("(regl): error restoring extension "+V)})}}}function $e(l,b){for(var S=Array(l),j=0;j<l;++j)S[j]=b(j);return S}var gt=5120,It=5121,zt=5122,no=5123,wr=5124,$r=5125,jr=5126;function qr(l){for(var b=16;b<=1<<28;b*=16)if(l<=b)return b;return 0}function wn(l){var b,S;return b=(l>65535)<<4,l>>>=b,S=(l>255)<<3,l>>>=S,b|=S,S=(l>15)<<2,l>>>=S,b|=S,S=(l>3)<<1,l>>>=S,b|=S,b|l>>1}function jo(){var l=$e(8,function(){return[]});function b(U){var V=qr(U),ie=l[wn(V)>>2];return ie.length>0?ie.pop():new ArrayBuffer(V)}function S(U){l[wn(U.byteLength)>>2].push(U)}function j(U,V){var ie=null;switch(U){case gt:ie=new Int8Array(b(V),0,V);break;case It:ie=new Uint8Array(b(V),0,V);break;case zt:ie=new Int16Array(b(2*V),0,V);break;case no:ie=new Uint16Array(b(2*V),0,V);break;case wr:ie=new Int32Array(b(4*V),0,V);break;case $r:ie=new Uint32Array(b(4*V),0,V);break;case jr:ie=new Float32Array(b(4*V),0,V);break;default:return null}return ie.length!==V?ie.subarray(0,V):ie}function Q(U){S(U.buffer)}return{alloc:b,free:S,allocType:j,freeType:Q}}var Bt=jo();Bt.zero=jo();var Ss=3408,oc=3410,Ri=3411,Ff=3412,Wo=3413,Xn=3414,ks=3415,Hr=33901,hn=33902,Ia=3379,v2=3386,g2=34921,y2=36347,x2=36348,b2=35661,w2=35660,_2=34930,E2=36349,M2=34076,A2=34024,T2=7936,S2=7937,k2=7938,L2=35724,C2=34047,R2=36063,I2=34852,Ls=3553,Gf=34067,z2=34069,P2=33984,Ii=6408,ac=5126,Df=5121,ic=36160,O2=36053,N2=36064,F2=16384,G2=function(l,b){var S=1;b.ext_texture_filter_anisotropic&&(S=l.getParameter(C2));var j=1,Q=1;b.webgl_draw_buffers&&(j=l.getParameter(I2),Q=l.getParameter(R2));var U=!!b.oes_texture_float;if(U){var V=l.createTexture();l.bindTexture(Ls,V),l.texImage2D(Ls,0,Ii,1,1,0,Ii,ac,null);var ie=l.createFramebuffer();if(l.bindFramebuffer(ic,ie),l.framebufferTexture2D(ic,N2,Ls,V,0),l.bindTexture(Ls,null),l.checkFramebufferStatus(ic)!==O2)U=!1;else{l.viewport(0,0,1,1),l.clearColor(1,0,0,1),l.clear(F2);var le=Bt.allocType(ac,4);l.readPixels(0,0,1,1,Ii,ac,le),l.getError()?U=!1:(l.deleteFramebuffer(ie),l.deleteTexture(V),U=le[0]===1),Bt.freeType(le)}}var me=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),fe=!0;if(!me){var xe=l.createTexture(),Ae=Bt.allocType(Df,36);l.activeTexture(P2),l.bindTexture(Gf,xe),l.texImage2D(z2,0,Ii,3,3,0,Ii,Df,Ae),Bt.freeType(Ae),l.bindTexture(Gf,null),l.deleteTexture(xe),fe=!l.getError()}return{colorBits:[l.getParameter(oc),l.getParameter(Ri),l.getParameter(Ff),l.getParameter(Wo)],depthBits:l.getParameter(Xn),stencilBits:l.getParameter(ks),subpixelBits:l.getParameter(Ss),extensions:Object.keys(b).filter(function(se){return!!b[se]}),maxAnisotropic:S,maxDrawbuffers:j,maxColorAttachments:Q,pointSizeDims:l.getParameter(Hr),lineWidthDims:l.getParameter(hn),maxViewportDims:l.getParameter(v2),maxCombinedTextureUnits:l.getParameter(b2),maxCubeMapSize:l.getParameter(M2),maxRenderbufferSize:l.getParameter(A2),maxTextureUnits:l.getParameter(_2),maxTextureSize:l.getParameter(Ia),maxAttributes:l.getParameter(g2),maxVertexUniforms:l.getParameter(y2),maxVertexTextureUnits:l.getParameter(w2),maxVaryingVectors:l.getParameter(x2),maxFragmentUniforms:l.getParameter(E2),glsl:l.getParameter(L2),renderer:l.getParameter(S2),vendor:l.getParameter(T2),version:l.getParameter(k2),readFloat:U,npotTextureCube:fe}};function Nn(l){return!!l&&typeof l=="object"&&Array.isArray(l.shape)&&Array.isArray(l.stride)&&typeof l.offset=="number"&&l.shape.length===l.stride.length&&(Array.isArray(l.data)||e(l.data))}var dn=function(l){return Object.keys(l).map(function(b){return l[b]})},Cs={shape:H2,flatten:q2};function D2(l,b,S){for(var j=0;j<b;++j)S[j]=l[j]}function $2(l,b,S,j){for(var Q=0,U=0;U<b;++U)for(var V=l[U],ie=0;ie<S;++ie)j[Q++]=V[ie]}function $f(l,b,S,j,Q,U){for(var V=U,ie=0;ie<b;++ie)for(var le=l[ie],me=0;me<S;++me)for(var fe=le[me],xe=0;xe<j;++xe)Q[V++]=fe[xe]}function qf(l,b,S,j,Q){for(var U=1,V=S+1;V<b.length;++V)U*=b[V];var ie=b[S];if(b.length-S===4){var le=b[S+1],me=b[S+2],fe=b[S+3];for(V=0;V<ie;++V)$f(l[V],le,me,fe,j,Q),Q+=U}else for(V=0;V<ie;++V)qf(l[V],b,S+1,j,Q),Q+=U}function q2(l,b,S,j){var Q=1;if(b.length)for(var U=0;U<b.length;++U)Q*=b[U];else Q=0;var V=j||Bt.allocType(S,Q);switch(b.length){case 0:break;case 1:D2(l,b[0],V);break;case 2:$2(l,b[0],b[1],V);break;case 3:$f(l,b[0],b[1],b[2],V,0);break;default:qf(l,b,0,V,0)}return V}function H2(l){for(var b=[],S=l;S.length;S=S[0])b.push(S.length);return b}var sc={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},U2=5120,B2=5122,j2=5124,W2=5121,V2=5123,X2=5125,Y2=5126,K2=5126,Vo={int8:U2,int16:B2,int32:j2,uint8:W2,uint16:V2,uint32:X2,float:Y2,float32:K2},Q2=35048,Z2=35040,Rs={dynamic:Q2,stream:Z2,static:35044},cc=Cs.flatten,Hf=Cs.shape,Uf=35044,J2=35040,lc=5121,fc=5126,yo=[];yo[5120]=1,yo[5122]=2,yo[5124]=4,yo[5121]=1,yo[5123]=2,yo[5125]=4,yo[5126]=4;function Is(l){return sc[Object.prototype.toString.call(l)]|0}function Bf(l,b){for(var S=0;S<b.length;++S)l[S]=b[S]}function jf(l,b,S,j,Q,U,V){for(var ie=0,le=0;le<S;++le)for(var me=0;me<j;++me)l[ie++]=b[Q*le+U*me+V]}function eg(l,b,S,j){var Q=0,U={};function V(N){this.id=Q++,this.buffer=l.createBuffer(),this.type=N,this.usage=Uf,this.byteLength=0,this.dimension=1,this.dtype=lc,this.persistentData=null,S.profile&&(this.stats={size:0})}V.prototype.bind=function(){l.bindBuffer(this.type,this.buffer)},V.prototype.destroy=function(){Ae(this)};var ie=[];function le(N,X){var pe=ie.pop();return pe||(pe=new V(N)),pe.bind(),xe(pe,X,J2,0,1,!1),pe}function me(N){ie.push(N)}function fe(N,X,pe){N.byteLength=X.byteLength,l.bufferData(N.type,X,pe)}function xe(N,X,pe,Re,te,Pe){var ne;if(N.usage=pe,Array.isArray(X)){if(N.dtype=Re||fc,X.length>0){var we;if(Array.isArray(X[0])){ne=Hf(X);for(var re=1,_e=1;_e<ne.length;++_e)re*=ne[_e];N.dimension=re,we=cc(X,ne,N.dtype),fe(N,we,pe),Pe?N.persistentData=we:Bt.freeType(we)}else if(typeof X[0]=="number"){N.dimension=te;var We=Bt.allocType(N.dtype,X.length);Bf(We,X),fe(N,We,pe),Pe?N.persistentData=We:Bt.freeType(We)}else e(X[0])?(N.dimension=X[0].length,N.dtype=Re||Is(X[0])||fc,we=cc(X,[X.length,X[0].length],N.dtype),fe(N,we,pe),Pe?N.persistentData=we:Bt.freeType(we)):x.raise("invalid buffer data")}}else if(e(X))N.dtype=Re||Is(X),N.dimension=te,fe(N,X,pe),Pe&&(N.persistentData=new Uint8Array(new Uint8Array(X.buffer)));else if(Nn(X)){ne=X.shape;var Ze=X.stride,Te=X.offset,ge=0,ee=0,Ke=0,at=0;ne.length===1?(ge=ne[0],ee=1,Ke=Ze[0],at=0):ne.length===2?(ge=ne[0],ee=ne[1],Ke=Ze[0],at=Ze[1]):x.raise("invalid shape"),N.dtype=Re||Is(X.data)||fc,N.dimension=ee;var qe=Bt.allocType(N.dtype,ge*ee);jf(qe,X.data,ge,ee,Ke,at,Te),fe(N,qe,pe),Pe?N.persistentData=qe:Bt.freeType(qe)}else X instanceof ArrayBuffer?(N.dtype=lc,N.dimension=te,fe(N,X,pe),Pe&&(N.persistentData=new Uint8Array(new Uint8Array(X)))):x.raise("invalid buffer data")}function Ae(N){b.bufferCount--,j(N);var X=N.buffer;x(X,"buffer must not be deleted already"),l.deleteBuffer(X),N.buffer=null,delete U[N.id]}function se(N,X,pe,Re){b.bufferCount++;var te=new V(X);U[te.id]=te;function Pe(re){var _e=Uf,We=null,Ze=0,Te=0,ge=1;return Array.isArray(re)||e(re)||Nn(re)||re instanceof ArrayBuffer?We=re:typeof re=="number"?Ze=re|0:re&&(x.type(re,"object","buffer arguments must be an object, a number or an array"),"data"in re&&(x(We===null||Array.isArray(We)||e(We)||Nn(We),"invalid data for buffer"),We=re.data),"usage"in re&&(x.parameter(re.usage,Rs,"invalid buffer usage"),_e=Rs[re.usage]),"type"in re&&(x.parameter(re.type,Vo,"invalid buffer type"),Te=Vo[re.type]),"dimension"in re&&(x.type(re.dimension,"number","invalid dimension"),ge=re.dimension|0),"length"in re&&(x.nni(Ze,"buffer length must be a nonnegative integer"),Ze=re.length|0)),te.bind(),We?xe(te,We,_e,Te,ge,Re):(Ze&&l.bufferData(te.type,Ze,_e),te.dtype=Te||lc,te.usage=_e,te.dimension=ge,te.byteLength=Ze),S.profile&&(te.stats.size=te.byteLength*yo[te.dtype]),Pe}function ne(re,_e){x(_e+re.byteLength<=te.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+re.byteLength+" starting from offset "+_e+" to a buffer of size "+te.byteLength),l.bufferSubData(te.type,_e,re)}function we(re,_e){var We=(_e||0)|0,Ze;if(te.bind(),e(re)||re instanceof ArrayBuffer)ne(re,We);else if(Array.isArray(re)){if(re.length>0)if(typeof re[0]=="number"){var Te=Bt.allocType(te.dtype,re.length);Bf(Te,re),ne(Te,We),Bt.freeType(Te)}else if(Array.isArray(re[0])||e(re[0])){Ze=Hf(re);var ge=cc(re,Ze,te.dtype);ne(ge,We),Bt.freeType(ge)}else x.raise("invalid buffer data")}else if(Nn(re)){Ze=re.shape;var ee=re.stride,Ke=0,at=0,qe=0,ht=0;Ze.length===1?(Ke=Ze[0],at=1,qe=ee[0],ht=0):Ze.length===2?(Ke=Ze[0],at=Ze[1],qe=ee[0],ht=ee[1]):x.raise("invalid shape");var et=Array.isArray(re.data)?te.dtype:Is(re.data),lt=Bt.allocType(et,Ke*at);jf(lt,re.data,Ke,at,qe,ht,re.offset),ne(lt,We),Bt.freeType(lt)}else x.raise("invalid data for buffer subdata");return Pe}return pe||Pe(N),Pe._reglType="buffer",Pe._buffer=te,Pe.subdata=we,S.profile&&(Pe.stats=te.stats),Pe.destroy=function(){Ae(te)},Pe}function be(){dn(U).forEach(function(N){N.buffer=l.createBuffer(),l.bindBuffer(N.type,N.buffer),l.bufferData(N.type,N.persistentData||N.byteLength,N.usage)})}return S.profile&&(b.getTotalBufferSize=function(){var N=0;return Object.keys(U).forEach(function(X){N+=U[X].stats.size}),N}),{create:se,createStream:le,destroyStream:me,clear:function(){dn(U).forEach(Ae),ie.forEach(Ae)},getBuffer:function(N){return N&&N._buffer instanceof V?N._buffer:null},restore:be,_initBuffer:xe}}var tg=0,rg=0,ng=1,og=1,ag=4,ig=4,za={points:tg,point:rg,lines:ng,line:og,triangles:ag,triangle:ig,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},sg=0,cg=1,zi=4,lg=5120,Pa=5121,Wf=5122,Oa=5123,Vf=5124,Xo=5125,uc=34963,fg=35040,ug=35044;function hg(l,b,S,j){var Q={},U=0,V={uint8:Pa,uint16:Oa};b.oes_element_index_uint&&(V.uint32=Xo);function ie(be){this.id=U++,Q[this.id]=this,this.buffer=be,this.primType=zi,this.vertCount=0,this.type=0}ie.prototype.bind=function(){this.buffer.bind()};var le=[];function me(be){var N=le.pop();return N||(N=new ie(S.create(null,uc,!0,!1)._buffer)),xe(N,be,fg,-1,-1,0,0),N}function fe(be){le.push(be)}function xe(be,N,X,pe,Re,te,Pe){be.buffer.bind();var ne;if(N){var we=Pe;!Pe&&(!e(N)||Nn(N)&&!e(N.data))&&(we=b.oes_element_index_uint?Xo:Oa),S._initBuffer(be.buffer,N,X,we,3)}else l.bufferData(uc,te,X),be.buffer.dtype=ne||Pa,be.buffer.usage=X,be.buffer.dimension=3,be.buffer.byteLength=te;if(ne=Pe,!Pe){switch(be.buffer.dtype){case Pa:case lg:ne=Pa;break;case Oa:case Wf:ne=Oa;break;case Xo:case Vf:ne=Xo;break;default:x.raise("unsupported type for element array")}be.buffer.dtype=ne}be.type=ne,x(ne!==Xo||!!b.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var re=Re;re<0&&(re=be.buffer.byteLength,ne===Oa?re>>=1:ne===Xo&&(re>>=2)),be.vertCount=re;var _e=pe;if(pe<0){_e=zi;var We=be.buffer.dimension;We===1&&(_e=sg),We===2&&(_e=cg),We===3&&(_e=zi)}be.primType=_e}function Ae(be){j.elementsCount--,x(be.buffer!==null,"must not double destroy elements"),delete Q[be.id],be.buffer.destroy(),be.buffer=null}function se(be,N){var X=S.create(null,uc,!0),pe=new ie(X._buffer);j.elementsCount++;function Re(te){if(!te)X(),pe.primType=zi,pe.vertCount=0,pe.type=Pa;else if(typeof te=="number")X(te),pe.primType=zi,pe.vertCount=te|0,pe.type=Pa;else{var Pe=null,ne=ug,we=-1,re=-1,_e=0,We=0;Array.isArray(te)||e(te)||Nn(te)?Pe=te:(x.type(te,"object","invalid arguments for elements"),"data"in te&&(Pe=te.data,x(Array.isArray(Pe)||e(Pe)||Nn(Pe),"invalid data for element buffer")),"usage"in te&&(x.parameter(te.usage,Rs,"invalid element buffer usage"),ne=Rs[te.usage]),"primitive"in te&&(x.parameter(te.primitive,za,"invalid element buffer primitive"),we=za[te.primitive]),"count"in te&&(x(typeof te.count=="number"&&te.count>=0,"invalid vertex count for elements"),re=te.count|0),"type"in te&&(x.parameter(te.type,V,"invalid buffer type"),We=V[te.type]),"length"in te?_e=te.length|0:(_e=re,We===Oa||We===Wf?_e*=2:(We===Xo||We===Vf)&&(_e*=4))),xe(pe,Pe,ne,we,re,_e,We)}return Re}return Re(be),Re._reglType="elements",Re._elements=pe,Re.subdata=function(te,Pe){return X.subdata(te,Pe),Re},Re.destroy=function(){Ae(pe)},Re}return{create:se,createStream:me,destroyStream:fe,getElements:function(be){return typeof be=="function"&&be._elements instanceof ie?be._elements:null},clear:function(){dn(Q).forEach(Ae)}}}var Xf=new Float32Array(1),dg=new Uint32Array(Xf.buffer),pg=5123;function Yf(l){for(var b=Bt.allocType(pg,l.length),S=0;S<l.length;++S)if(isNaN(l[S]))b[S]=65535;else if(l[S]===1/0)b[S]=31744;else if(l[S]===-1/0)b[S]=64512;else{Xf[0]=l[S];var j=dg[0],Q=j>>>31<<15,U=(j<<1>>>24)-127,V=j>>13&1023;if(U<-24)b[S]=Q;else if(U<-14){var ie=-14-U;b[S]=Q+(V+1024>>ie)}else U>15?b[S]=Q+31744:b[S]=Q+(U+15<<10)+V}return b}function cr(l){return Array.isArray(l)||e(l)}var Kf=function(l){return!(l&l-1)&&!!l},mg=34467,Yn=3553,hc=34067,zs=34069,Yo=6408,dc=6406,Ps=6407,Pi=6409,Os=6410,Qf=32854,pc=32855,Zf=36194,vg=32819,gg=32820,yg=33635,xg=34042,mc=6402,Ns=34041,vc=35904,gc=35906,Na=36193,yc=33776,xc=33777,bc=33778,wc=33779,Jf=35986,eu=35987,tu=34798,ru=35840,nu=35841,ou=35842,au=35843,iu=36196,Fa=5121,_c=5123,Ec=5125,Oi=5126,bg=10242,wg=10243,_g=10497,Mc=33071,Eg=33648,Mg=10240,Ag=10241,Ac=9728,Tg=9729,Tc=9984,su=9985,cu=9986,Sc=9987,Sg=33170,Fs=4352,kg=4353,Lg=4354,Cg=34046,Rg=3317,Ig=37440,zg=37441,Pg=37443,lu=37444,Ni=33984,Og=[Tc,cu,su,Sc],Gs=[0,Pi,Os,Ps,Yo],_n={};_n[Pi]=_n[dc]=_n[mc]=1,_n[Ns]=_n[Os]=2,_n[Ps]=_n[vc]=3,_n[Yo]=_n[gc]=4;function Ga(l){return"[object "+l+"]"}var fu=Ga("HTMLCanvasElement"),uu=Ga("OffscreenCanvas"),hu=Ga("CanvasRenderingContext2D"),du=Ga("ImageBitmap"),pu=Ga("HTMLImageElement"),mu=Ga("HTMLVideoElement"),Ng=Object.keys(sc).concat([fu,uu,hu,du,pu,mu]),Da=[];Da[Fa]=1,Da[Oi]=4,Da[Na]=2,Da[_c]=2,Da[Ec]=4;var Pr=[];Pr[Qf]=2,Pr[pc]=2,Pr[Zf]=2,Pr[Ns]=4,Pr[yc]=.5,Pr[xc]=.5,Pr[bc]=1,Pr[wc]=1,Pr[Jf]=.5,Pr[eu]=1,Pr[tu]=1,Pr[ru]=.5,Pr[nu]=.25,Pr[ou]=.5,Pr[au]=.25,Pr[iu]=.5;function vu(l){return Array.isArray(l)&&(l.length===0||typeof l[0]=="number")}function gu(l){if(!Array.isArray(l))return!1;var b=l.length;return!(b===0||!cr(l[0]))}function Ko(l){return Object.prototype.toString.call(l)}function yu(l){return Ko(l)===fu}function xu(l){return Ko(l)===uu}function Fg(l){return Ko(l)===hu}function Gg(l){return Ko(l)===du}function Dg(l){return Ko(l)===pu}function $g(l){return Ko(l)===mu}function kc(l){if(!l)return!1;var b=Ko(l);return Ng.indexOf(b)>=0?!0:vu(l)||gu(l)||Nn(l)}function bu(l){return sc[Object.prototype.toString.call(l)]|0}function qg(l,b){var S=b.length;switch(l.type){case Fa:case _c:case Ec:case Oi:var j=Bt.allocType(l.type,S);j.set(b),l.data=j;break;case Na:l.data=Yf(b);break;default:x.raise("unsupported texture type, must specify a typed array")}}function wu(l,b){return Bt.allocType(l.type===Na?Oi:l.type,b)}function _u(l,b){l.type===Na?(l.data=Yf(b),Bt.freeType(b)):l.data=b}function Hg(l,b,S,j,Q,U){for(var V=l.width,ie=l.height,le=l.channels,me=V*ie*le,fe=wu(l,me),xe=0,Ae=0;Ae<ie;++Ae)for(var se=0;se<V;++se)for(var be=0;be<le;++be)fe[xe++]=b[S*se+j*Ae+Q*be+U];_u(l,fe)}function Ds(l,b,S,j,Q,U){var V;if(typeof Pr[l]!="undefined"?V=Pr[l]:V=_n[l]*Da[b],U&&(V*=6),Q){for(var ie=0,le=S;le>=1;)ie+=V*le*le,le/=2;return ie}else return V*S*j}function Ug(l,b,S,j,Q,U,V){var ie={"don't care":Fs,"dont care":Fs,nice:Lg,fast:kg},le={repeat:_g,clamp:Mc,mirror:Eg},me={nearest:Ac,linear:Tg},fe=t({mipmap:Sc,"nearest mipmap nearest":Tc,"linear mipmap nearest":su,"nearest mipmap linear":cu,"linear mipmap linear":Sc},me),xe={none:0,browser:lu},Ae={uint8:Fa,rgba4:vg,rgb565:yg,"rgb5 a1":gg},se={alpha:dc,luminance:Pi,"luminance alpha":Os,rgb:Ps,rgba:Yo,rgba4:Qf,"rgb5 a1":pc,rgb565:Zf},be={};b.ext_srgb&&(se.srgb=vc,se.srgba=gc),b.oes_texture_float&&(Ae.float32=Ae.float=Oi),b.oes_texture_half_float&&(Ae.float16=Ae["half float"]=Na),b.webgl_depth_texture&&(t(se,{depth:mc,"depth stencil":Ns}),t(Ae,{uint16:_c,uint32:Ec,"depth stencil":xg})),b.webgl_compressed_texture_s3tc&&t(be,{"rgb s3tc dxt1":yc,"rgba s3tc dxt1":xc,"rgba s3tc dxt3":bc,"rgba s3tc dxt5":wc}),b.webgl_compressed_texture_atc&&t(be,{"rgb atc":Jf,"rgba atc explicit alpha":eu,"rgba atc interpolated alpha":tu}),b.webgl_compressed_texture_pvrtc&&t(be,{"rgb pvrtc 4bppv1":ru,"rgb pvrtc 2bppv1":nu,"rgba pvrtc 4bppv1":ou,"rgba pvrtc 2bppv1":au}),b.webgl_compressed_texture_etc1&&(be["rgb etc1"]=iu);var N=Array.prototype.slice.call(l.getParameter(mg));Object.keys(be).forEach(function(A){var W=be[A];N.indexOf(W)>=0&&(se[A]=W)});var X=Object.keys(se);S.textureFormats=X;var pe=[];Object.keys(se).forEach(function(A){var W=se[A];pe[W]=A});var Re=[];Object.keys(Ae).forEach(function(A){var W=Ae[A];Re[W]=A});var te=[];Object.keys(me).forEach(function(A){var W=me[A];te[W]=A});var Pe=[];Object.keys(fe).forEach(function(A){var W=fe[A];Pe[W]=A});var ne=[];Object.keys(le).forEach(function(A){var W=le[A];ne[W]=A});var we=X.reduce(function(A,W){var $=se[W];return $===Pi||$===dc||$===Pi||$===Os||$===mc||$===Ns||b.ext_srgb&&($===vc||$===gc)?A[$]=$:$===pc||W.indexOf("rgba")>=0?A[$]=Yo:A[$]=Ps,A},{});function re(){this.internalformat=Yo,this.format=Yo,this.type=Fa,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=lu,this.width=0,this.height=0,this.channels=0}function _e(A,W){A.internalformat=W.internalformat,A.format=W.format,A.type=W.type,A.compressed=W.compressed,A.premultiplyAlpha=W.premultiplyAlpha,A.flipY=W.flipY,A.unpackAlignment=W.unpackAlignment,A.colorSpace=W.colorSpace,A.width=W.width,A.height=W.height,A.channels=W.channels}function We(A,W){if(!(typeof W!="object"||!W)){if("premultiplyAlpha"in W&&(x.type(W.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),A.premultiplyAlpha=W.premultiplyAlpha),"flipY"in W&&(x.type(W.flipY,"boolean","invalid texture flip"),A.flipY=W.flipY),"alignment"in W&&(x.oneOf(W.alignment,[1,2,4,8],"invalid texture unpack alignment"),A.unpackAlignment=W.alignment),"colorSpace"in W&&(x.parameter(W.colorSpace,xe,"invalid colorSpace"),A.colorSpace=xe[W.colorSpace]),"type"in W){var $=W.type;x(b.oes_texture_float||!($==="float"||$==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),x(b.oes_texture_half_float||!($==="half float"||$==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),x(b.webgl_depth_texture||!($==="uint16"||$==="uint32"||$==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),x.parameter($,Ae,"invalid texture type"),A.type=Ae[$]}var Ne=A.width,dt=A.height,E=A.channels,y=!1;"shape"in W?(x(Array.isArray(W.shape)&&W.shape.length>=2,"shape must be an array"),Ne=W.shape[0],dt=W.shape[1],W.shape.length===3&&(E=W.shape[2],x(E>0&&E<=4,"invalid number of channels"),y=!0),x(Ne>=0&&Ne<=S.maxTextureSize,"invalid width"),x(dt>=0&&dt<=S.maxTextureSize,"invalid height")):("radius"in W&&(Ne=dt=W.radius,x(Ne>=0&&Ne<=S.maxTextureSize,"invalid radius")),"width"in W&&(Ne=W.width,x(Ne>=0&&Ne<=S.maxTextureSize,"invalid width")),"height"in W&&(dt=W.height,x(dt>=0&&dt<=S.maxTextureSize,"invalid height")),"channels"in W&&(E=W.channels,x(E>0&&E<=4,"invalid number of channels"),y=!0)),A.width=Ne|0,A.height=dt|0,A.channels=E|0;var L=!1;if("format"in W){var O=W.format;x(b.webgl_depth_texture||!(O==="depth"||O==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),x.parameter(O,se,"invalid texture format");var F=A.internalformat=se[O];A.format=we[F],O in Ae&&("type"in W||(A.type=Ae[O])),O in be&&(A.compressed=!0),L=!0}!y&&L?A.channels=_n[A.format]:y&&!L?A.channels!==Gs[A.format]&&(A.format=A.internalformat=Gs[A.channels]):L&&y&&x(A.channels===_n[A.format],"number of channels inconsistent with specified format")}}function Ze(A){l.pixelStorei(Ig,A.flipY),l.pixelStorei(zg,A.premultiplyAlpha),l.pixelStorei(Pg,A.colorSpace),l.pixelStorei(Rg,A.unpackAlignment)}function Te(){re.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function ge(A,W){var $=null;if(kc(W)?$=W:W&&(x.type(W,"object","invalid pixel data type"),We(A,W),"x"in W&&(A.xOffset=W.x|0),"y"in W&&(A.yOffset=W.y|0),kc(W.data)&&($=W.data)),x(!A.compressed||$ instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),W.copy){x(!$,"can not specify copy and data field for the same texture");var Ne=Q.viewportWidth,dt=Q.viewportHeight;A.width=A.width||Ne-A.xOffset,A.height=A.height||dt-A.yOffset,A.needsCopy=!0,x(A.xOffset>=0&&A.xOffset<Ne&&A.yOffset>=0&&A.yOffset<dt&&A.width>0&&A.width<=Ne&&A.height>0&&A.height<=dt,"copy texture read out of bounds")}else if(!$)A.width=A.width||1,A.height=A.height||1,A.channels=A.channels||4;else if(e($))A.channels=A.channels||4,A.data=$,!("type"in W)&&A.type===Fa&&(A.type=bu($));else if(vu($))A.channels=A.channels||4,qg(A,$),A.alignment=1,A.needsFree=!0;else if(Nn($)){var E=$.data;!Array.isArray(E)&&A.type===Fa&&(A.type=bu(E));var y=$.shape,L=$.stride,O,F,I,C,z,M;y.length===3?(I=y[2],M=L[2]):(x(y.length===2,"invalid ndarray pixel data, must be 2 or 3D"),I=1,M=1),O=y[0],F=y[1],C=L[0],z=L[1],A.alignment=1,A.width=O,A.height=F,A.channels=I,A.format=A.internalformat=Gs[I],A.needsFree=!0,Hg(A,E,C,z,M,$.offset)}else if(yu($)||xu($)||Fg($))yu($)||xu($)?A.element=$:A.element=$.canvas,A.width=A.element.width,A.height=A.element.height,A.channels=4;else if(Gg($))A.element=$,A.width=$.width,A.height=$.height,A.channels=4;else if(Dg($))A.element=$,A.width=$.naturalWidth,A.height=$.naturalHeight,A.channels=4;else if($g($))A.element=$,A.width=$.videoWidth,A.height=$.videoHeight,A.channels=4;else if(gu($)){var k=A.width||$[0].length,_=A.height||$.length,P=A.channels;cr($[0][0])?P=P||$[0][0].length:P=P||1;for(var G=Cs.shape($),K=1,Z=0;Z<G.length;++Z)K*=G[Z];var Y=wu(A,K);Cs.flatten($,G,"",Y),_u(A,Y),A.alignment=1,A.width=k,A.height=_,A.channels=P,A.format=A.internalformat=Gs[P],A.needsFree=!0}A.type===Oi?x(S.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):A.type===Na&&x(S.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ee(A,W,$){var Ne=A.element,dt=A.data,E=A.internalformat,y=A.format,L=A.type,O=A.width,F=A.height;Ze(A),Ne?l.texImage2D(W,$,y,y,L,Ne):A.compressed?l.compressedTexImage2D(W,$,E,O,F,0,dt):A.needsCopy?(j(),l.copyTexImage2D(W,$,y,A.xOffset,A.yOffset,O,F,0)):l.texImage2D(W,$,y,O,F,0,y,L,dt||null)}function Ke(A,W,$,Ne,dt){var E=A.element,y=A.data,L=A.internalformat,O=A.format,F=A.type,I=A.width,C=A.height;Ze(A),E?l.texSubImage2D(W,dt,$,Ne,O,F,E):A.compressed?l.compressedTexSubImage2D(W,dt,$,Ne,L,I,C,y):A.needsCopy?(j(),l.copyTexSubImage2D(W,dt,$,Ne,A.xOffset,A.yOffset,I,C)):l.texSubImage2D(W,dt,$,Ne,I,C,O,F,y)}var at=[];function qe(){return at.pop()||new Te}function ht(A){A.needsFree&&Bt.freeType(A.data),Te.call(A),at.push(A)}function et(){re.call(this),this.genMipmaps=!1,this.mipmapHint=Fs,this.mipmask=0,this.images=Array(16)}function lt(A,W,$){var Ne=A.images[0]=qe();A.mipmask=1,Ne.width=A.width=W,Ne.height=A.height=$,Ne.channels=A.channels=4}function Tt(A,W){var $=null;if(kc(W))$=A.images[0]=qe(),_e($,A),ge($,W),A.mipmask=1;else if(We(A,W),Array.isArray(W.mipmap))for(var Ne=W.mipmap,dt=0;dt<Ne.length;++dt)$=A.images[dt]=qe(),_e($,A),$.width>>=dt,$.height>>=dt,ge($,Ne[dt]),A.mipmask|=1<<dt;else $=A.images[0]=qe(),_e($,A),ge($,W),A.mipmask=1;_e(A,A.images[0]),A.compressed&&(A.internalformat===yc||A.internalformat===xc||A.internalformat===bc||A.internalformat===wc)&&x(A.width%4===0&&A.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function gr(A,W){for(var $=A.images,Ne=0;Ne<$.length;++Ne){if(!$[Ne])return;ee($[Ne],W,Ne)}}var Ar=[];function mt(){var A=Ar.pop()||new et;re.call(A),A.mipmask=0;for(var W=0;W<16;++W)A.images[W]=null;return A}function _r(A){for(var W=A.images,$=0;$<W.length;++$)W[$]&&ht(W[$]),W[$]=null;Ar.push(A)}function Wt(){this.minFilter=Ac,this.magFilter=Ac,this.wrapS=Mc,this.wrapT=Mc,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Fs}function yr(A,W){if("min"in W){var $=W.min;x.parameter($,fe),A.minFilter=fe[$],Og.indexOf(A.minFilter)>=0&&!("faces"in W)&&(A.genMipmaps=!0)}if("mag"in W){var Ne=W.mag;x.parameter(Ne,me),A.magFilter=me[Ne]}var dt=A.wrapS,E=A.wrapT;if("wrap"in W){var y=W.wrap;typeof y=="string"?(x.parameter(y,le),dt=E=le[y]):Array.isArray(y)&&(x.parameter(y[0],le),x.parameter(y[1],le),dt=le[y[0]],E=le[y[1]])}else{if("wrapS"in W){var L=W.wrapS;x.parameter(L,le),dt=le[L]}if("wrapT"in W){var O=W.wrapT;x.parameter(O,le),E=le[O]}}if(A.wrapS=dt,A.wrapT=E,"anisotropic"in W){var F=W.anisotropic;x(typeof F=="number"&&F>=1&&F<=S.maxAnisotropic,"aniso samples must be between 1 and "),A.anisotropic=W.anisotropic}if("mipmap"in W){var I=!1;switch(typeof W.mipmap){case"string":x.parameter(W.mipmap,ie,"invalid mipmap hint"),A.mipmapHint=ie[W.mipmap],A.genMipmaps=!0,I=!0;break;case"boolean":I=A.genMipmaps=W.mipmap;break;case"object":x(Array.isArray(W.mipmap),"invalid mipmap type"),A.genMipmaps=!1,I=!0;break;default:x.raise("invalid mipmap type")}I&&!("min"in W)&&(A.minFilter=Tc)}}function Er(A,W){l.texParameteri(W,Ag,A.minFilter),l.texParameteri(W,Mg,A.magFilter),l.texParameteri(W,bg,A.wrapS),l.texParameteri(W,wg,A.wrapT),b.ext_texture_filter_anisotropic&&l.texParameteri(W,Cg,A.anisotropic),A.genMipmaps&&(l.hint(Sg,A.mipmapHint),l.generateMipmap(W))}var Mr=0,Lr={},Or=S.maxTextureUnits,lr=Array(Or).map(function(){return null});function it(A){re.call(this),this.mipmask=0,this.internalformat=Yo,this.id=Mr++,this.refCount=1,this.target=A,this.texture=l.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Wt,V.profile&&(this.stats={size:0})}function Nr(A){l.activeTexture(Ni),l.bindTexture(A.target,A.texture)}function Lt(){var A=lr[0];A?l.bindTexture(A.target,A.texture):l.bindTexture(Yn,null)}function Ve(A){var W=A.texture;x(W,"must not double destroy texture");var $=A.unit,Ne=A.target;$>=0&&(l.activeTexture(Ni+$),l.bindTexture(Ne,null),lr[$]=null),l.deleteTexture(W),A.texture=null,A.params=null,A.pixels=null,A.refCount=0,delete Lr[A.id],U.textureCount--}t(it.prototype,{bind:function(){var A=this;A.bindCount+=1;var W=A.unit;if(W<0){for(var $=0;$<Or;++$){var Ne=lr[$];if(Ne){if(Ne.bindCount>0)continue;Ne.unit=-1}lr[$]=A,W=$;break}W>=Or&&x.raise("insufficient number of texture units"),V.profile&&U.maxTextureUnits<W+1&&(U.maxTextureUnits=W+1),A.unit=W,l.activeTexture(Ni+W),l.bindTexture(A.target,A.texture)}return W},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ve(this)}});function pt(A,W){var $=new it(Yn);Lr[$.id]=$,U.textureCount++;function Ne(y,L){var O=$.texInfo;Wt.call(O);var F=mt();return typeof y=="number"?typeof L=="number"?lt(F,y|0,L|0):lt(F,y|0,y|0):y?(x.type(y,"object","invalid arguments to regl.texture"),yr(O,y),Tt(F,y)):lt(F,1,1),O.genMipmaps&&(F.mipmask=(F.width<<1)-1),$.mipmask=F.mipmask,_e($,F),x.texture2D(O,F,S),$.internalformat=F.internalformat,Ne.width=F.width,Ne.height=F.height,Nr($),gr(F,Yn),Er(O,Yn),Lt(),_r(F),V.profile&&($.stats.size=Ds($.internalformat,$.type,F.width,F.height,O.genMipmaps,!1)),Ne.format=pe[$.internalformat],Ne.type=Re[$.type],Ne.mag=te[O.magFilter],Ne.min=Pe[O.minFilter],Ne.wrapS=ne[O.wrapS],Ne.wrapT=ne[O.wrapT],Ne}function dt(y,L,O,F){x(!!y,"must specify image data");var I=L|0,C=O|0,z=F|0,M=qe();return _e(M,$),M.width=0,M.height=0,ge(M,y),M.width=M.width||($.width>>z)-I,M.height=M.height||($.height>>z)-C,x($.type===M.type&&$.format===M.format&&$.internalformat===M.internalformat,"incompatible format for texture.subimage"),x(I>=0&&C>=0&&I+M.width<=$.width&&C+M.height<=$.height,"texture.subimage write out of bounds"),x($.mipmask&1<<z,"missing mipmap data"),x(M.data||M.element||M.needsCopy,"missing image data"),Nr($),Ke(M,Yn,I,C,z),Lt(),ht(M),Ne}function E(y,L){var O=y|0,F=L|0||O;if(O===$.width&&F===$.height)return Ne;Ne.width=$.width=O,Ne.height=$.height=F,Nr($);for(var I=0;$.mipmask>>I;++I){var C=O>>I,z=F>>I;if(!C||!z)break;l.texImage2D(Yn,I,$.format,C,z,0,$.format,$.type,null)}return Lt(),V.profile&&($.stats.size=Ds($.internalformat,$.type,O,F,!1,!1)),Ne}return Ne(A,W),Ne.subimage=dt,Ne.resize=E,Ne._reglType="texture2d",Ne._texture=$,V.profile&&(Ne.stats=$.stats),Ne.destroy=function(){$.decRef()},Ne}function wt(A,W,$,Ne,dt,E){var y=new it(hc);Lr[y.id]=y,U.cubeCount++;var L=new Array(6);function O(C,z,M,k,_,P){var G,K=y.texInfo;for(Wt.call(K),G=0;G<6;++G)L[G]=mt();if(typeof C=="number"||!C){var Z=C|0||1;for(G=0;G<6;++G)lt(L[G],Z,Z)}else if(typeof C=="object")if(z)Tt(L[0],C),Tt(L[1],z),Tt(L[2],M),Tt(L[3],k),Tt(L[4],_),Tt(L[5],P);else if(yr(K,C),We(y,C),"faces"in C){var Y=C.faces;for(x(Array.isArray(Y)&&Y.length===6,"cube faces must be a length 6 array"),G=0;G<6;++G)x(typeof Y[G]=="object"&&!!Y[G],"invalid input for cube map face"),_e(L[G],y),Tt(L[G],Y[G])}else for(G=0;G<6;++G)Tt(L[G],C);else x.raise("invalid arguments to cube map");for(_e(y,L[0]),S.npotTextureCube||x(Kf(y.width)&&Kf(y.height),"your browser does not support non power or two texture dimensions"),K.genMipmaps?y.mipmask=(L[0].width<<1)-1:y.mipmask=L[0].mipmask,x.textureCube(y,K,L,S),y.internalformat=L[0].internalformat,O.width=L[0].width,O.height=L[0].height,Nr(y),G=0;G<6;++G)gr(L[G],zs+G);for(Er(K,hc),Lt(),V.profile&&(y.stats.size=Ds(y.internalformat,y.type,O.width,O.height,K.genMipmaps,!0)),O.format=pe[y.internalformat],O.type=Re[y.type],O.mag=te[K.magFilter],O.min=Pe[K.minFilter],O.wrapS=ne[K.wrapS],O.wrapT=ne[K.wrapT],G=0;G<6;++G)_r(L[G]);return O}function F(C,z,M,k,_){x(!!z,"must specify image data"),x(typeof C=="number"&&C===(C|0)&&C>=0&&C<6,"invalid face");var P=M|0,G=k|0,K=_|0,Z=qe();return _e(Z,y),Z.width=0,Z.height=0,ge(Z,z),Z.width=Z.width||(y.width>>K)-P,Z.height=Z.height||(y.height>>K)-G,x(y.type===Z.type&&y.format===Z.format&&y.internalformat===Z.internalformat,"incompatible format for texture.subimage"),x(P>=0&&G>=0&&P+Z.width<=y.width&&G+Z.height<=y.height,"texture.subimage write out of bounds"),x(y.mipmask&1<<K,"missing mipmap data"),x(Z.data||Z.element||Z.needsCopy,"missing image data"),Nr(y),Ke(Z,zs+C,P,G,K),Lt(),ht(Z),O}function I(C){var z=C|0;if(z!==y.width){O.width=y.width=z,O.height=y.height=z,Nr(y);for(var M=0;M<6;++M)for(var k=0;y.mipmask>>k;++k)l.texImage2D(zs+M,k,y.format,z>>k,z>>k,0,y.format,y.type,null);return Lt(),V.profile&&(y.stats.size=Ds(y.internalformat,y.type,O.width,O.height,!1,!0)),O}}return O(A,W,$,Ne,dt,E),O.subimage=F,O.resize=I,O._reglType="textureCube",O._texture=y,V.profile&&(O.stats=y.stats),O.destroy=function(){y.decRef()},O}function fr(){for(var A=0;A<Or;++A)l.activeTexture(Ni+A),l.bindTexture(Yn,null),lr[A]=null;dn(Lr).forEach(Ve),U.cubeCount=0,U.textureCount=0}V.profile&&(U.getTotalTextureSize=function(){var A=0;return Object.keys(Lr).forEach(function(W){A+=Lr[W].stats.size}),A});function Qn(){for(var A=0;A<Or;++A){var W=lr[A];W&&(W.bindCount=0,W.unit=-1,lr[A]=null)}dn(Lr).forEach(function($){$.texture=l.createTexture(),l.bindTexture($.target,$.texture);for(var Ne=0;Ne<32;++Ne)if($.mipmask&1<<Ne)if($.target===Yn)l.texImage2D(Yn,Ne,$.internalformat,$.width>>Ne,$.height>>Ne,0,$.internalformat,$.type,null);else for(var dt=0;dt<6;++dt)l.texImage2D(zs+dt,Ne,$.internalformat,$.width>>Ne,$.height>>Ne,0,$.internalformat,$.type,null);Er($.texInfo,$.target)})}function na(){for(var A=0;A<Or;++A){var W=lr[A];W&&(W.bindCount=0,W.unit=-1,lr[A]=null),l.activeTexture(Ni+A),l.bindTexture(Yn,null),l.bindTexture(hc,null)}}return{create2D:pt,createCube:wt,clear:fr,getTexture:function(A){return null},restore:Qn,refresh:na}}var xo=36161,$s=32854,Eu=32855,Mu=36194,Au=33189,Tu=36168,Su=34041,ku=35907,Lu=34836,Cu=34842,Ru=34843,Fn=[];Fn[$s]=2,Fn[Eu]=2,Fn[Mu]=2,Fn[Au]=2,Fn[Tu]=1,Fn[Su]=4,Fn[ku]=4,Fn[Lu]=16,Fn[Cu]=8,Fn[Ru]=6;function Iu(l,b,S){return Fn[l]*b*S}var Bg=function(l,b,S,j,Q){var U={rgba4:$s,rgb565:Mu,"rgb5 a1":Eu,depth:Au,stencil:Tu,"depth stencil":Su};b.ext_srgb&&(U.srgba=ku),b.ext_color_buffer_half_float&&(U.rgba16f=Cu,U.rgb16f=Ru),b.webgl_color_buffer_float&&(U.rgba32f=Lu);var V=[];Object.keys(U).forEach(function(se){var be=U[se];V[be]=se});var ie=0,le={};function me(se){this.id=ie++,this.refCount=1,this.renderbuffer=se,this.format=$s,this.width=0,this.height=0,Q.profile&&(this.stats={size:0})}me.prototype.decRef=function(){--this.refCount<=0&&fe(this)};function fe(se){var be=se.renderbuffer;x(be,"must not double destroy renderbuffer"),l.bindRenderbuffer(xo,null),l.deleteRenderbuffer(be),se.renderbuffer=null,se.refCount=0,delete le[se.id],j.renderbufferCount--}function xe(se,be){var N=new me(l.createRenderbuffer());le[N.id]=N,j.renderbufferCount++;function X(Re,te){var Pe=0,ne=0,we=$s;if(typeof Re=="object"&&Re){var re=Re;if("shape"in re){var _e=re.shape;x(Array.isArray(_e)&&_e.length>=2,"invalid renderbuffer shape"),Pe=_e[0]|0,ne=_e[1]|0}else"radius"in re&&(Pe=ne=re.radius|0),"width"in re&&(Pe=re.width|0),"height"in re&&(ne=re.height|0);"format"in re&&(x.parameter(re.format,U,"invalid renderbuffer format"),we=U[re.format])}else typeof Re=="number"?(Pe=Re|0,typeof te=="number"?ne=te|0:ne=Pe):Re?x.raise("invalid arguments to renderbuffer constructor"):Pe=ne=1;if(x(Pe>0&&ne>0&&Pe<=S.maxRenderbufferSize&&ne<=S.maxRenderbufferSize,"invalid renderbuffer size"),!(Pe===N.width&&ne===N.height&&we===N.format))return X.width=N.width=Pe,X.height=N.height=ne,N.format=we,l.bindRenderbuffer(xo,N.renderbuffer),l.renderbufferStorage(xo,we,Pe,ne),x(l.getError()===0,"invalid render buffer format"),Q.profile&&(N.stats.size=Iu(N.format,N.width,N.height)),X.format=V[N.format],X}function pe(Re,te){var Pe=Re|0,ne=te|0||Pe;return Pe===N.width&&ne===N.height||(x(Pe>0&&ne>0&&Pe<=S.maxRenderbufferSize&&ne<=S.maxRenderbufferSize,"invalid renderbuffer size"),X.width=N.width=Pe,X.height=N.height=ne,l.bindRenderbuffer(xo,N.renderbuffer),l.renderbufferStorage(xo,N.format,Pe,ne),x(l.getError()===0,"invalid render buffer format"),Q.profile&&(N.stats.size=Iu(N.format,N.width,N.height))),X}return X(se,be),X.resize=pe,X._reglType="renderbuffer",X._renderbuffer=N,Q.profile&&(X.stats=N.stats),X.destroy=function(){N.decRef()},X}Q.profile&&(j.getTotalRenderbufferSize=function(){var se=0;return Object.keys(le).forEach(function(be){se+=le[be].stats.size}),se});function Ae(){dn(le).forEach(function(se){se.renderbuffer=l.createRenderbuffer(),l.bindRenderbuffer(xo,se.renderbuffer),l.renderbufferStorage(xo,se.format,se.width,se.height)}),l.bindRenderbuffer(xo,null)}return{create:xe,clear:function(){dn(le).forEach(fe)},restore:Ae}},oo=36160,Lc=36161,Qo=3553,qs=34069,zu=36064,Pu=36096,Ou=36128,Nu=33306,Fu=36053,jg=36054,Wg=36055,Vg=36057,Xg=36061,Yg=36193,Kg=5121,Qg=5126,Gu=6407,Du=6408,Zg=6402,Jg=[Gu,Du],Cc=[];Cc[Du]=4,Cc[Gu]=3;var Hs=[];Hs[Kg]=1,Hs[Qg]=4,Hs[Yg]=2;var ey=32854,ty=32855,ry=36194,ny=33189,oy=36168,$u=34041,ay=35907,iy=34836,sy=34842,cy=34843,ly=[ey,ty,ry,ay,sy,cy,iy],$a={};$a[Fu]="complete",$a[jg]="incomplete attachment",$a[Vg]="incomplete dimensions",$a[Wg]="incomplete, missing attachment",$a[Xg]="unsupported";function fy(l,b,S,j,Q,U){var V={cur:null,next:null,dirty:!1,setFBO:null},ie=["rgba"],le=["rgba4","rgb565","rgb5 a1"];b.ext_srgb&&le.push("srgba"),b.ext_color_buffer_half_float&&le.push("rgba16f","rgb16f"),b.webgl_color_buffer_float&&le.push("rgba32f");var me=["uint8"];b.oes_texture_half_float&&me.push("half float","float16"),b.oes_texture_float&&me.push("float","float32");function fe(Te,ge,ee){this.target=Te,this.texture=ge,this.renderbuffer=ee;var Ke=0,at=0;ge?(Ke=ge.width,at=ge.height):ee&&(Ke=ee.width,at=ee.height),this.width=Ke,this.height=at}function xe(Te){Te&&(Te.texture&&Te.texture._texture.decRef(),Te.renderbuffer&&Te.renderbuffer._renderbuffer.decRef())}function Ae(Te,ge,ee){if(Te)if(Te.texture){var Ke=Te.texture._texture,at=Math.max(1,Ke.width),qe=Math.max(1,Ke.height);x(at===ge&&qe===ee,"inconsistent width/height for supplied texture"),Ke.refCount+=1}else{var ht=Te.renderbuffer._renderbuffer;x(ht.width===ge&&ht.height===ee,"inconsistent width/height for renderbuffer"),ht.refCount+=1}}function se(Te,ge){ge&&(ge.texture?l.framebufferTexture2D(oo,Te,ge.target,ge.texture._texture.texture,0):l.framebufferRenderbuffer(oo,Te,Lc,ge.renderbuffer._renderbuffer.renderbuffer))}function be(Te){var ge=Qo,ee=null,Ke=null,at=Te;typeof Te=="object"&&(at=Te.data,"target"in Te&&(ge=Te.target|0)),x.type(at,"function","invalid attachment data");var qe=at._reglType;return qe==="texture2d"?(ee=at,x(ge===Qo)):qe==="textureCube"?(ee=at,x(ge>=qs&&ge<qs+6,"invalid cube map target")):qe==="renderbuffer"?(Ke=at,ge=Lc):x.raise("invalid regl object for attachment"),new fe(ge,ee,Ke)}function N(Te,ge,ee,Ke,at){if(ee){var qe=j.create2D({width:Te,height:ge,format:Ke,type:at});return qe._texture.refCount=0,new fe(Qo,qe,null)}else{var ht=Q.create({width:Te,height:ge,format:Ke});return ht._renderbuffer.refCount=0,new fe(Lc,null,ht)}}function X(Te){return Te&&(Te.texture||Te.renderbuffer)}function pe(Te,ge,ee){Te&&(Te.texture?Te.texture.resize(ge,ee):Te.renderbuffer&&Te.renderbuffer.resize(ge,ee),Te.width=ge,Te.height=ee)}var Re=0,te={};function Pe(){this.id=Re++,te[this.id]=this,this.framebuffer=l.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ne(Te){Te.colorAttachments.forEach(xe),xe(Te.depthAttachment),xe(Te.stencilAttachment),xe(Te.depthStencilAttachment)}function we(Te){var ge=Te.framebuffer;x(ge,"must not double destroy framebuffer"),l.deleteFramebuffer(ge),Te.framebuffer=null,U.framebufferCount--,delete te[Te.id]}function re(Te){var ge;l.bindFramebuffer(oo,Te.framebuffer);var ee=Te.colorAttachments;for(ge=0;ge<ee.length;++ge)se(zu+ge,ee[ge]);for(ge=ee.length;ge<S.maxColorAttachments;++ge)l.framebufferTexture2D(oo,zu+ge,Qo,null,0);l.framebufferTexture2D(oo,Nu,Qo,null,0),l.framebufferTexture2D(oo,Pu,Qo,null,0),l.framebufferTexture2D(oo,Ou,Qo,null,0),se(Pu,Te.depthAttachment),se(Ou,Te.stencilAttachment),se(Nu,Te.depthStencilAttachment);var Ke=l.checkFramebufferStatus(oo);!l.isContextLost()&&Ke!==Fu&&x.raise("framebuffer configuration not supported, status = "+$a[Ke]),l.bindFramebuffer(oo,V.next?V.next.framebuffer:null),V.cur=V.next,l.getError()}function _e(Te,ge){var ee=new Pe;U.framebufferCount++;function Ke(qe,ht){var et;x(V.next!==ee,"can not update framebuffer which is currently in use");var lt=0,Tt=0,gr=!0,Ar=!0,mt=null,_r=!0,Wt="rgba",yr="uint8",Er=1,Mr=null,Lr=null,Or=null,lr=!1;if(typeof qe=="number")lt=qe|0,Tt=ht|0||lt;else if(!qe)lt=Tt=1;else{x.type(qe,"object","invalid arguments for framebuffer");var it=qe;if("shape"in it){var Nr=it.shape;x(Array.isArray(Nr)&&Nr.length>=2,"invalid shape for framebuffer"),lt=Nr[0],Tt=Nr[1]}else"radius"in it&&(lt=Tt=it.radius),"width"in it&&(lt=it.width),"height"in it&&(Tt=it.height);("color"in it||"colors"in it)&&(mt=it.color||it.colors,Array.isArray(mt)&&x(mt.length===1||b.webgl_draw_buffers,"multiple render targets not supported")),mt||("colorCount"in it&&(Er=it.colorCount|0,x(Er>0,"invalid color buffer count")),"colorTexture"in it&&(_r=!!it.colorTexture,Wt="rgba4"),"colorType"in it&&(yr=it.colorType,_r?(x(b.oes_texture_float||!(yr==="float"||yr==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),x(b.oes_texture_half_float||!(yr==="half float"||yr==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):yr==="half float"||yr==="float16"?(x(b.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Wt="rgba16f"):(yr==="float"||yr==="float32")&&(x(b.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Wt="rgba32f"),x.oneOf(yr,me,"invalid color type")),"colorFormat"in it&&(Wt=it.colorFormat,ie.indexOf(Wt)>=0?_r=!0:le.indexOf(Wt)>=0?_r=!1:_r?x.oneOf(it.colorFormat,ie,"invalid color format for texture"):x.oneOf(it.colorFormat,le,"invalid color format for renderbuffer"))),("depthTexture"in it||"depthStencilTexture"in it)&&(lr=!!(it.depthTexture||it.depthStencilTexture),x(!lr||b.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in it&&(typeof it.depth=="boolean"?gr=it.depth:(Mr=it.depth,Ar=!1)),"stencil"in it&&(typeof it.stencil=="boolean"?Ar=it.stencil:(Lr=it.stencil,gr=!1)),"depthStencil"in it&&(typeof it.depthStencil=="boolean"?gr=Ar=it.depthStencil:(Or=it.depthStencil,gr=!1,Ar=!1))}var Lt=null,Ve=null,pt=null,wt=null;if(Array.isArray(mt))Lt=mt.map(be);else if(mt)Lt=[be(mt)];else for(Lt=new Array(Er),et=0;et<Er;++et)Lt[et]=N(lt,Tt,_r,Wt,yr);x(b.webgl_draw_buffers||Lt.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),x(Lt.length<=S.maxColorAttachments,"too many color attachments, not supported"),lt=lt||Lt[0].width,Tt=Tt||Lt[0].height,Mr?Ve=be(Mr):gr&&!Ar&&(Ve=N(lt,Tt,lr,"depth","uint32")),Lr?pt=be(Lr):Ar&&!gr&&(pt=N(lt,Tt,!1,"stencil","uint8")),Or?wt=be(Or):!Mr&&!Lr&&Ar&&gr&&(wt=N(lt,Tt,lr,"depth stencil","depth stencil")),x(!!Mr+!!Lr+!!Or<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var fr=null;for(et=0;et<Lt.length;++et)if(Ae(Lt[et],lt,Tt),x(!Lt[et]||Lt[et].texture&&Jg.indexOf(Lt[et].texture._texture.format)>=0||Lt[et].renderbuffer&&ly.indexOf(Lt[et].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+et+" is invalid"),Lt[et]&&Lt[et].texture){var Qn=Cc[Lt[et].texture._texture.format]*Hs[Lt[et].texture._texture.type];fr===null?fr=Qn:x(fr===Qn,"all color attachments much have the same number of bits per pixel.")}return Ae(Ve,lt,Tt),x(!Ve||Ve.texture&&Ve.texture._texture.format===Zg||Ve.renderbuffer&&Ve.renderbuffer._renderbuffer.format===ny,"invalid depth attachment for framebuffer object"),Ae(pt,lt,Tt),x(!pt||pt.renderbuffer&&pt.renderbuffer._renderbuffer.format===oy,"invalid stencil attachment for framebuffer object"),Ae(wt,lt,Tt),x(!wt||wt.texture&&wt.texture._texture.format===$u||wt.renderbuffer&&wt.renderbuffer._renderbuffer.format===$u,"invalid depth-stencil attachment for framebuffer object"),ne(ee),ee.width=lt,ee.height=Tt,ee.colorAttachments=Lt,ee.depthAttachment=Ve,ee.stencilAttachment=pt,ee.depthStencilAttachment=wt,Ke.color=Lt.map(X),Ke.depth=X(Ve),Ke.stencil=X(pt),Ke.depthStencil=X(wt),Ke.width=ee.width,Ke.height=ee.height,re(ee),Ke}function at(qe,ht){x(V.next!==ee,"can not resize a framebuffer which is currently in use");var et=Math.max(qe|0,1),lt=Math.max(ht|0||et,1);if(et===ee.width&&lt===ee.height)return Ke;for(var Tt=ee.colorAttachments,gr=0;gr<Tt.length;++gr)pe(Tt[gr],et,lt);return pe(ee.depthAttachment,et,lt),pe(ee.stencilAttachment,et,lt),pe(ee.depthStencilAttachment,et,lt),ee.width=Ke.width=et,ee.height=Ke.height=lt,re(ee),Ke}return Ke(Te,ge),t(Ke,{resize:at,_reglType:"framebuffer",_framebuffer:ee,destroy:function(){we(ee),ne(ee)},use:function(qe){V.setFBO({framebuffer:Ke},qe)}})}function We(Te){var ge=Array(6);function ee(at){var qe;x(ge.indexOf(V.next)<0,"can not update framebuffer which is currently in use");var ht={color:null},et=0,lt=null,Tt="rgba",gr="uint8",Ar=1;if(typeof at=="number")et=at|0;else if(!at)et=1;else{x.type(at,"object","invalid arguments for framebuffer");var mt=at;if("shape"in mt){var _r=mt.shape;x(Array.isArray(_r)&&_r.length>=2,"invalid shape for framebuffer"),x(_r[0]===_r[1],"cube framebuffer must be square"),et=_r[0]}else"radius"in mt&&(et=mt.radius|0),"width"in mt?(et=mt.width|0,"height"in mt&&x(mt.height===et,"must be square")):"height"in mt&&(et=mt.height|0);("color"in mt||"colors"in mt)&&(lt=mt.color||mt.colors,Array.isArray(lt)&&x(lt.length===1||b.webgl_draw_buffers,"multiple render targets not supported")),lt||("colorCount"in mt&&(Ar=mt.colorCount|0,x(Ar>0,"invalid color buffer count")),"colorType"in mt&&(x.oneOf(mt.colorType,me,"invalid color type"),gr=mt.colorType),"colorFormat"in mt&&(Tt=mt.colorFormat,x.oneOf(mt.colorFormat,ie,"invalid color format for texture"))),"depth"in mt&&(ht.depth=mt.depth),"stencil"in mt&&(ht.stencil=mt.stencil),"depthStencil"in mt&&(ht.depthStencil=mt.depthStencil)}var Wt;if(lt)if(Array.isArray(lt))for(Wt=[],qe=0;qe<lt.length;++qe)Wt[qe]=lt[qe];else Wt=[lt];else{Wt=Array(Ar);var yr={radius:et,format:Tt,type:gr};for(qe=0;qe<Ar;++qe)Wt[qe]=j.createCube(yr)}for(ht.color=Array(Wt.length),qe=0;qe<Wt.length;++qe){var Er=Wt[qe];x(typeof Er=="function"&&Er._reglType==="textureCube","invalid cube map"),et=et||Er.width,x(Er.width===et&&Er.height===et,"invalid cube map shape"),ht.color[qe]={target:qs,data:Wt[qe]}}for(qe=0;qe<6;++qe){for(var Mr=0;Mr<Wt.length;++Mr)ht.color[Mr].target=qs+qe;qe>0&&(ht.depth=ge[0].depth,ht.stencil=ge[0].stencil,ht.depthStencil=ge[0].depthStencil),ge[qe]?ge[qe](ht):ge[qe]=_e(ht)}return t(ee,{width:et,height:et,color:Wt})}function Ke(at){var qe,ht=at|0;if(x(ht>0&&ht<=S.maxCubeMapSize,"invalid radius for cube fbo"),ht===ee.width)return ee;var et=ee.color;for(qe=0;qe<et.length;++qe)et[qe].resize(ht);for(qe=0;qe<6;++qe)ge[qe].resize(ht);return ee.width=ee.height=ht,ee}return ee(Te),t(ee,{faces:ge,resize:Ke,_reglType:"framebufferCube",destroy:function(){ge.forEach(function(at){at.destroy()})}})}function Ze(){V.cur=null,V.next=null,V.dirty=!0,dn(te).forEach(function(Te){Te.framebuffer=l.createFramebuffer(),re(Te)})}return t(V,{getFramebuffer:function(Te){if(typeof Te=="function"&&Te._reglType==="framebuffer"){var ge=Te._framebuffer;if(ge instanceof Pe)return ge}return null},create:_e,createCube:We,clear:function(){dn(te).forEach(we)},restore:Ze})}var uy=5126,qu=34962;function Rc(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=uy,this.offset=0,this.stride=0,this.divisor=0}function hy(l,b,S,j,Q){for(var U=S.maxAttributes,V=new Array(U),ie=0;ie<U;++ie)V[ie]=new Rc;var le=0,me={},fe={Record:Rc,scope:{},state:V,currentVAO:null,targetVAO:null,restore:Ae()?te:function(){},createVAO:Pe,getVAO:be,destroyBuffer:xe,setVAO:Ae()?N:X,clear:Ae()?pe:function(){}};function xe(ne){for(var we=0;we<V.length;++we){var re=V[we];re.buffer===ne&&(l.disableVertexAttribArray(we),re.buffer=null)}}function Ae(){return b.oes_vertex_array_object}function se(){return b.angle_instanced_arrays}function be(ne){return typeof ne=="function"&&ne._vao?ne._vao:null}function N(ne){if(ne!==fe.currentVAO){var we=Ae();ne?we.bindVertexArrayOES(ne.vao):we.bindVertexArrayOES(null),fe.currentVAO=ne}}function X(ne){if(ne!==fe.currentVAO){if(ne)ne.bindAttrs();else for(var we=se(),re=0;re<V.length;++re){var _e=V[re];_e.buffer?(l.enableVertexAttribArray(re),l.vertexAttribPointer(re,_e.size,_e.type,_e.normalized,_e.stride,_e.offfset),we&&_e.divisor&&we.vertexAttribDivisorANGLE(re,_e.divisor)):(l.disableVertexAttribArray(re),l.vertexAttrib4f(re,_e.x,_e.y,_e.z,_e.w))}fe.currentVAO=ne}}function pe(){dn(me).forEach(function(ne){ne.destroy()})}function Re(){this.id=++le,this.attributes=[];var ne=Ae();ne?this.vao=ne.createVertexArrayOES():this.vao=null,me[this.id]=this,this.buffers=[]}Re.prototype.bindAttrs=function(){for(var ne=se(),we=this.attributes,re=0;re<we.length;++re){var _e=we[re];_e.buffer?(l.enableVertexAttribArray(re),l.bindBuffer(qu,_e.buffer.buffer),l.vertexAttribPointer(re,_e.size,_e.type,_e.normalized,_e.stride,_e.offset),ne&&_e.divisor&&ne.vertexAttribDivisorANGLE(re,_e.divisor)):(l.disableVertexAttribArray(re),l.vertexAttrib4f(re,_e.x,_e.y,_e.z,_e.w))}for(var We=we.length;We<U;++We)l.disableVertexAttribArray(We)},Re.prototype.refresh=function(){var ne=Ae();ne&&(ne.bindVertexArrayOES(this.vao),this.bindAttrs(),fe.currentVAO=this)},Re.prototype.destroy=function(){if(this.vao){var ne=Ae();this===fe.currentVAO&&(fe.currentVAO=null,ne.bindVertexArrayOES(null)),ne.deleteVertexArrayOES(this.vao),this.vao=null}me[this.id]&&(delete me[this.id],j.vaoCount-=1)};function te(){var ne=Ae();ne&&dn(me).forEach(function(we){we.refresh()})}function Pe(ne){var we=new Re;j.vaoCount+=1;function re(_e){x(Array.isArray(_e),"arguments to vertex array constructor must be an array"),x(_e.length<U,"too many attributes"),x(_e.length>0,"must specify at least one attribute");var We={},Ze=we.attributes;Ze.length=_e.length;for(var Te=0;Te<_e.length;++Te){var ge=_e[Te],ee=Ze[Te]=new Rc,Ke=ge.data||ge;if(Array.isArray(Ke)||e(Ke)||Nn(Ke)){var at;we.buffers[Te]&&(at=we.buffers[Te],e(Ke)&&at._buffer.byteLength>=Ke.byteLength?at.subdata(Ke):(at.destroy(),we.buffers[Te]=null)),we.buffers[Te]||(at=we.buffers[Te]=Q.create(ge,qu,!1,!0)),ee.buffer=Q.getBuffer(at),ee.size=ee.buffer.dimension|0,ee.normalized=!1,ee.type=ee.buffer.dtype,ee.offset=0,ee.stride=0,ee.divisor=0,ee.state=1,We[Te]=1}else Q.getBuffer(ge)?(ee.buffer=Q.getBuffer(ge),ee.size=ee.buffer.dimension|0,ee.normalized=!1,ee.type=ee.buffer.dtype,ee.offset=0,ee.stride=0,ee.divisor=0,ee.state=1):Q.getBuffer(ge.buffer)?(ee.buffer=Q.getBuffer(ge.buffer),ee.size=(+ge.size||ee.buffer.dimension)|0,ee.normalized=!!ge.normalized||!1,"type"in ge?(x.parameter(ge.type,Vo,"invalid buffer type"),ee.type=Vo[ge.type]):ee.type=ee.buffer.dtype,ee.offset=(ge.offset||0)|0,ee.stride=(ge.stride||0)|0,ee.divisor=(ge.divisor||0)|0,ee.state=1,x(ee.size>=1&&ee.size<=4,"size must be between 1 and 4"),x(ee.offset>=0,"invalid offset"),x(ee.stride>=0&&ee.stride<=255,"stride must be between 0 and 255"),x(ee.divisor>=0,"divisor must be positive"),x(!ee.divisor||!!b.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in ge?(x(Te>0,"first attribute must not be a constant"),ee.x=+ge.x||0,ee.y=+ge.y||0,ee.z=+ge.z||0,ee.w=+ge.w||0,ee.state=2):x(!1,"invalid attribute spec for location "+Te)}for(var qe=0;qe<we.buffers.length;++qe)!We[qe]&&we.buffers[qe]&&(we.buffers[qe].destroy(),we.buffers[qe]=null);return we.refresh(),re}return re.destroy=function(){for(var _e=0;_e<we.buffers.length;++_e)we.buffers[_e]&&we.buffers[_e].destroy();we.buffers.length=0,we.destroy()},re._vao=we,re._reglType="vao",re(ne)}return fe}var Hu=35632,dy=35633,py=35718,my=35721;function vy(l,b,S,j){var Q={},U={};function V(N,X,pe,Re){this.name=N,this.id=X,this.location=pe,this.info=Re}function ie(N,X){for(var pe=0;pe<N.length;++pe)if(N[pe].id===X.id){N[pe].location=X.location;return}N.push(X)}function le(N,X,pe){var Re=N===Hu?Q:U,te=Re[X];if(!te){var Pe=b.str(X);te=l.createShader(N),l.shaderSource(te,Pe),l.compileShader(te),x.shaderError(l,te,Pe,N,pe),Re[X]=te}return te}var me={},fe=[],xe=0;function Ae(N,X){this.id=xe++,this.fragId=N,this.vertId=X,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,j.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function se(N,X,pe){var Re,te,Pe=le(Hu,N.fragId),ne=le(dy,N.vertId),we=N.program=l.createProgram();if(l.attachShader(we,Pe),l.attachShader(we,ne),pe)for(Re=0;Re<pe.length;++Re){var re=pe[Re];l.bindAttribLocation(we,re[0],re[1])}l.linkProgram(we),x.linkError(l,we,b.str(N.fragId),b.str(N.vertId),X);var _e=l.getProgramParameter(we,py);j.profile&&(N.stats.uniformsCount=_e);var We=N.uniforms;for(Re=0;Re<_e;++Re)if(te=l.getActiveUniform(we,Re),te)if(te.size>1)for(var Ze=0;Ze<te.size;++Ze){var Te=te.name.replace("[0]","["+Ze+"]");ie(We,new V(Te,b.id(Te),l.getUniformLocation(we,Te),te))}else ie(We,new V(te.name,b.id(te.name),l.getUniformLocation(we,te.name),te));var ge=l.getProgramParameter(we,my);j.profile&&(N.stats.attributesCount=ge);var ee=N.attributes;for(Re=0;Re<ge;++Re)te=l.getActiveAttrib(we,Re),te&&ie(ee,new V(te.name,b.id(te.name),l.getAttribLocation(we,te.name),te))}j.profile&&(S.getMaxUniformsCount=function(){var N=0;return fe.forEach(function(X){X.stats.uniformsCount>N&&(N=X.stats.uniformsCount)}),N},S.getMaxAttributesCount=function(){var N=0;return fe.forEach(function(X){X.stats.attributesCount>N&&(N=X.stats.attributesCount)}),N});function be(){Q={},U={};for(var N=0;N<fe.length;++N)se(fe[N],null,fe[N].attributes.map(function(X){return[X.location,X.name]}))}return{clear:function(){var N=l.deleteShader.bind(l);dn(Q).forEach(N),Q={},dn(U).forEach(N),U={},fe.forEach(function(X){l.deleteProgram(X.program)}),fe.length=0,me={},S.shaderCount=0},program:function(N,X,pe,Re){x.command(N>=0,"missing vertex shader",pe),x.command(X>=0,"missing fragment shader",pe);var te=me[X];te||(te=me[X]={});var Pe=te[N];if(Pe&&(Pe.refCount++,!Re))return Pe;var ne=new Ae(X,N);return S.shaderCount++,se(ne,pe,Re),Pe||(te[N]=ne),fe.push(ne),t(ne,{destroy:function(){if(ne.refCount--,ne.refCount<=0){l.deleteProgram(ne.program);var we=fe.indexOf(ne);fe.splice(we,1),S.shaderCount--}te[ne.vertId].refCount<=0&&(l.deleteShader(U[ne.vertId]),delete U[ne.vertId],delete me[ne.fragId][ne.vertId]),Object.keys(me[ne.fragId]).length||(l.deleteShader(Q[ne.fragId]),delete Q[ne.fragId],delete me[ne.fragId])}})},restore:be,shader:le,frag:-1,vert:-1}}var gy=6408,Fi=5121,yy=3333,Us=5126;function xy(l,b,S,j,Q,U,V){function ie(fe){var xe;b.next===null?(x(Q.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),xe=Fi):(x(b.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),xe=b.next.colorAttachments[0].texture._texture.type,U.oes_texture_float?(x(xe===Fi||xe===Us,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),xe===Us&&x(V.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):x(xe===Fi,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Ae=0,se=0,be=j.framebufferWidth,N=j.framebufferHeight,X=null;e(fe)?X=fe:fe&&(x.type(fe,"object","invalid arguments to regl.read()"),Ae=fe.x|0,se=fe.y|0,x(Ae>=0&&Ae<j.framebufferWidth,"invalid x offset for regl.read"),x(se>=0&&se<j.framebufferHeight,"invalid y offset for regl.read"),be=(fe.width||j.framebufferWidth-Ae)|0,N=(fe.height||j.framebufferHeight-se)|0,X=fe.data||null),X&&(xe===Fi?x(X instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):xe===Us&&x(X instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),x(be>0&&be+Ae<=j.framebufferWidth,"invalid width for read pixels"),x(N>0&&N+se<=j.framebufferHeight,"invalid height for read pixels"),S();var pe=be*N*4;return X||(xe===Fi?X=new Uint8Array(pe):xe===Us&&(X=X||new Float32Array(pe))),x.isTypedArray(X,"data buffer for regl.read() must be a typedarray"),x(X.byteLength>=pe,"data buffer for regl.read() too small"),l.pixelStorei(yy,4),l.readPixels(Ae,se,be,N,gy,xe,X),X}function le(fe){var xe;return b.setFBO({framebuffer:fe.framebuffer},function(){xe=ie(fe)}),xe}function me(fe){return!fe||!("framebuffer"in fe)?ie(fe):le(fe)}return me}function qa(l){return Array.prototype.slice.call(l)}function Ha(l){return qa(l).join("")}function by(){var l=0,b=[],S=[];function j(xe){for(var Ae=0;Ae<S.length;++Ae)if(S[Ae]===xe)return b[Ae];var se="g"+l++;return b.push(se),S.push(xe),se}function Q(){var xe=[];function Ae(){xe.push.apply(xe,qa(arguments))}var se=[];function be(){var N="v"+l++;return se.push(N),arguments.length>0&&(xe.push(N,"="),xe.push.apply(xe,qa(arguments)),xe.push(";")),N}return t(Ae,{def:be,toString:function(){return Ha([se.length>0?"var "+se.join(",")+";":"",Ha(xe)])}})}function U(){var xe=Q(),Ae=Q(),se=xe.toString,be=Ae.toString;function N(X,pe){Ae(X,pe,"=",xe.def(X,pe),";")}return t(function(){xe.apply(xe,qa(arguments))},{def:xe.def,entry:xe,exit:Ae,save:N,set:function(X,pe,Re){N(X,pe),xe(X,pe,"=",Re,";")},toString:function(){return se()+be()}})}function V(){var xe=Ha(arguments),Ae=U(),se=U(),be=Ae.toString,N=se.toString;return t(Ae,{then:function(){return Ae.apply(Ae,qa(arguments)),this},else:function(){return se.apply(se,qa(arguments)),this},toString:function(){var X=N();return X&&(X="else{"+X+"}"),Ha(["if(",xe,"){",be(),"}",X])}})}var ie=Q(),le={};function me(xe,Ae){var se=[];function be(){var te="a"+se.length;return se.push(te),te}Ae=Ae||0;for(var N=0;N<Ae;++N)be();var X=U(),pe=X.toString,Re=le[xe]=t(X,{arg:be,toString:function(){return Ha(["function(",se.join(),"){",pe(),"}"])}});return Re}function fe(){var xe=['"use strict";',ie,"return {"];Object.keys(le).forEach(function(be){xe.push('"',be,'":',le[be].toString(),",")}),xe.push("}");var Ae=Ha(xe).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),se=Function.apply(null,b.concat(Ae));return se.apply(null,S)}return{global:ie,link:j,block:Q,proc:me,scope:U,cond:V,compile:fe}}var Ua="xyzw".split(""),Uu=5121,Ba=1,Ic=2,zc=0,Pc=1,Oc=2,Nc=3,Bs=4,Bu=5,ju=6,Wu="dither",Vu="blend.enable",Xu="blend.color",Fc="blend.equation",Gc="blend.func",Yu="depth.enable",Ku="depth.func",Qu="depth.range",Zu="depth.mask",Dc="colorMask",Ju="cull.enable",eh="cull.face",$c="frontFace",qc="lineWidth",th="polygonOffset.enable",Hc="polygonOffset.offset",rh="sample.alpha",nh="sample.enable",Uc="sample.coverage",oh="stencil.enable",ah="stencil.mask",Bc="stencil.func",jc="stencil.opFront",Gi="stencil.opBack",ih="scissor.enable",js="scissor.box",ao="viewport",Di="profile",Zo="framebuffer",$i="vert",qi="frag",Jo="elements",ea="primitive",ta="count",Ws="offset",Vs="instances",Hi="vao",Wc="Width",Vc="Height",ja=Zo+Wc,Wa=Zo+Vc,wy=ao+Wc,_y=ao+Vc,sh="drawingBuffer",ch=sh+Wc,lh=sh+Vc,Ey=[Gc,Fc,Bc,jc,Gi,Uc,ao,js,Hc],Va=34962,My=34963,Ay=35632,Ty=35633,fh=3553,Sy=34067,ky=2884,Ly=3042,Cy=3024,Ry=2960,Iy=2929,zy=3089,Py=32823,Oy=32926,Ny=32928,Xc=5126,Xs=35664,Ys=35665,Ks=35666,Yc=5124,Qs=35667,Zs=35668,Js=35669,Kc=35670,e0=35671,t0=35672,r0=35673,Ui=35674,Bi=35675,ji=35676,Wi=35678,Vi=35680,uh=4,Xi=1028,ra=1029,hh=2304,Qc=2305,Fy=32775,Gy=32776,Dy=519,bo=7680,dh=0,ph=1,mh=32774,$y=513,vh=36160,qy=36064,Kn={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},gh=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Xa={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},wo={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},yh={frag:Ay,vert:Ty},Zc={cw:hh,ccw:Qc};function n0(l){return Array.isArray(l)||e(l)||Nn(l)}function xh(l){return l.sort(function(b,S){return b===ao?-1:S===ao?1:b<S?-1:1})}function Vr(l,b,S,j){this.thisDep=l,this.contextDep=b,this.propDep=S,this.append=j}function _o(l){return l&&!(l.thisDep||l.contextDep||l.propDep)}function vr(l){return new Vr(!1,!1,!1,l)}function nn(l,b){var S=l.type;if(S===zc){var j=l.data.length;return new Vr(!0,j>=1,j>=2,b)}else if(S===Bs){var Q=l.data;return new Vr(Q.thisDep,Q.contextDep,Q.propDep,b)}else{if(S===Bu)return new Vr(!1,!1,!1,b);if(S===ju){for(var U=!1,V=!1,ie=!1,le=0;le<l.data.length;++le){var me=l.data[le];if(me.type===Pc)ie=!0;else if(me.type===Oc)V=!0;else if(me.type===Nc)U=!0;else if(me.type===zc){U=!0;var fe=me.data;fe>=1&&(V=!0),fe>=2&&(ie=!0)}else me.type===Bs&&(U=U||me.data.thisDep,V=V||me.data.contextDep,ie=ie||me.data.propDep)}return new Vr(U,V,ie,b)}else return new Vr(S===Nc,S===Oc,S===Pc,b)}}var bh=new Vr(!1,!1,!1,function(){});function Hy(l,b,S,j,Q,U,V,ie,le,me,fe,xe,Ae,se,be){var N=me.Record,X={add:32774,subtract:32778,"reverse subtract":32779};S.ext_blend_minmax&&(X.min=Fy,X.max=Gy);var pe=S.angle_instanced_arrays,Re=S.webgl_draw_buffers,te={dirty:!0,profile:be.profile},Pe={},ne=[],we={},re={};function _e(E){return E.replace(".","_")}function We(E,y,L){var O=_e(E);ne.push(E),Pe[O]=te[O]=!!L,we[O]=y}function Ze(E,y,L){var O=_e(E);ne.push(E),Array.isArray(L)?(te[O]=L.slice(),Pe[O]=L.slice()):te[O]=Pe[O]=L,re[O]=y}We(Wu,Cy),We(Vu,Ly),Ze(Xu,"blendColor",[0,0,0,0]),Ze(Fc,"blendEquationSeparate",[mh,mh]),Ze(Gc,"blendFuncSeparate",[ph,dh,ph,dh]),We(Yu,Iy,!0),Ze(Ku,"depthFunc",$y),Ze(Qu,"depthRange",[0,1]),Ze(Zu,"depthMask",!0),Ze(Dc,Dc,[!0,!0,!0,!0]),We(Ju,ky),Ze(eh,"cullFace",ra),Ze($c,$c,Qc),Ze(qc,qc,1),We(th,Py),Ze(Hc,"polygonOffset",[0,0]),We(rh,Oy),We(nh,Ny),Ze(Uc,"sampleCoverage",[1,!1]),We(oh,Ry),Ze(ah,"stencilMask",-1),Ze(Bc,"stencilFunc",[Dy,0,-1]),Ze(jc,"stencilOpSeparate",[Xi,bo,bo,bo]),Ze(Gi,"stencilOpSeparate",[ra,bo,bo,bo]),We(ih,zy),Ze(js,"scissor",[0,0,l.drawingBufferWidth,l.drawingBufferHeight]),Ze(ao,ao,[0,0,l.drawingBufferWidth,l.drawingBufferHeight]);var Te={gl:l,context:Ae,strings:b,next:Pe,current:te,draw:xe,elements:U,buffer:Q,shader:fe,attributes:me.state,vao:me,uniforms:le,framebuffer:ie,extensions:S,timer:se,isBufferArgs:n0},ge={primTypes:za,compareFuncs:Xa,blendFuncs:Kn,blendEquations:X,stencilOps:wo,glTypes:Vo,orientationType:Zc};x.optional(function(){Te.isArrayLike=cr}),Re&&(ge.backBuffer=[ra],ge.drawBuffer=$e(j.maxDrawbuffers,function(E){return E===0?[0]:$e(E,function(y){return qy+y})}));var ee=0;function Ke(){var E=by(),y=E.link,L=E.global;E.id=ee++,E.batchId="0";var O=y(Te),F=E.shared={props:"a0"};Object.keys(Te).forEach(function(k){F[k]=L.def(O,".",k)}),x.optional(function(){E.CHECK=y(x),E.commandStr=x.guessCommand(),E.command=y(E.commandStr),E.assert=function(k,_,P){k("if(!(",_,"))",this.CHECK,".commandRaise(",y(P),",",this.command,");")},ge.invalidBlendCombinations=gh});var I=E.next={},C=E.current={};Object.keys(re).forEach(function(k){Array.isArray(te[k])&&(I[k]=L.def(F.next,".",k),C[k]=L.def(F.current,".",k))});var z=E.constants={};Object.keys(ge).forEach(function(k){z[k]=L.def(JSON.stringify(ge[k]))}),E.invoke=function(k,_){switch(_.type){case zc:var P=["this",F.context,F.props,E.batchId];return k.def(y(_.data),".call(",P.slice(0,Math.max(_.data.length+1,4)),")");case Pc:return k.def(F.props,_.data);case Oc:return k.def(F.context,_.data);case Nc:return k.def("this",_.data);case Bs:return _.data.append(E,k),_.data.ref;case Bu:return _.data.toString();case ju:return _.data.map(function(G){return E.invoke(k,G)})}},E.attribCache={};var M={};return E.scopeAttrib=function(k){var _=b.id(k);if(_ in M)return M[_];var P=me.scope[_];P||(P=me.scope[_]=new N);var G=M[_]=y(P);return G},E}function at(E){var y=E.static,L=E.dynamic,O;if(Di in y){var F=!!y[Di];O=vr(function(C,z){return F}),O.enable=F}else if(Di in L){var I=L[Di];O=nn(I,function(C,z){return C.invoke(z,I)})}return O}function qe(E,y){var L=E.static,O=E.dynamic;if(Zo in L){var F=L[Zo];return F?(F=ie.getFramebuffer(F),x.command(F,"invalid framebuffer object"),vr(function(C,z){var M=C.link(F),k=C.shared;z.set(k.framebuffer,".next",M);var _=k.context;return z.set(_,"."+ja,M+".width"),z.set(_,"."+Wa,M+".height"),M})):vr(function(C,z){var M=C.shared;z.set(M.framebuffer,".next","null");var k=M.context;return z.set(k,"."+ja,k+"."+ch),z.set(k,"."+Wa,k+"."+lh),"null"})}else if(Zo in O){var I=O[Zo];return nn(I,function(C,z){var M=C.invoke(z,I),k=C.shared,_=k.framebuffer,P=z.def(_,".getFramebuffer(",M,")");x.optional(function(){C.assert(z,"!"+M+"||"+P,"invalid framebuffer object")}),z.set(_,".next",P);var G=k.context;return z.set(G,"."+ja,P+"?"+P+".width:"+G+"."+ch),z.set(G,"."+Wa,P+"?"+P+".height:"+G+"."+lh),P})}else return null}function ht(E,y,L){var O=E.static,F=E.dynamic;function I(M){if(M in O){var k=O[M];x.commandType(k,"object","invalid "+M,L.commandStr);var _=!0,P=k.x|0,G=k.y|0,K,Z;return"width"in k?(K=k.width|0,x.command(K>=0,"invalid "+M,L.commandStr)):_=!1,"height"in k?(Z=k.height|0,x.command(Z>=0,"invalid "+M,L.commandStr)):_=!1,new Vr(!_&&y&&y.thisDep,!_&&y&&y.contextDep,!_&&y&&y.propDep,function(je,st){var He=je.shared.context,Xe=K;"width"in k||(Xe=st.def(He,".",ja,"-",P));var tt=Z;return"height"in k||(tt=st.def(He,".",Wa,"-",G)),[P,G,Xe,tt]})}else if(M in F){var Y=F[M],he=nn(Y,function(je,st){var He=je.invoke(st,Y);x.optional(function(){je.assert(st,He+"&&typeof "+He+'==="object"',"invalid "+M)});var Xe=je.shared.context,tt=st.def(He,".x|0"),St=st.def(He,".y|0"),or=st.def('"width" in ',He,"?",He,".width|0:","(",Xe,".",ja,"-",tt,")"),Xr=st.def('"height" in ',He,"?",He,".height|0:","(",Xe,".",Wa,"-",St,")");return x.optional(function(){je.assert(st,or+">=0&&"+Xr+">=0","invalid "+M)}),[tt,St,or,Xr]});return y&&(he.thisDep=he.thisDep||y.thisDep,he.contextDep=he.contextDep||y.contextDep,he.propDep=he.propDep||y.propDep),he}else return y?new Vr(y.thisDep,y.contextDep,y.propDep,function(je,st){var He=je.shared.context;return[0,0,st.def(He,".",ja),st.def(He,".",Wa)]}):null}var C=I(ao);if(C){var z=C;C=new Vr(C.thisDep,C.contextDep,C.propDep,function(M,k){var _=z.append(M,k),P=M.shared.context;return k.set(P,"."+wy,_[2]),k.set(P,"."+_y,_[3]),_})}return{viewport:C,scissor_box:I(js)}}function et(E,y){var L=E.static,O=typeof L[qi]=="string"&&typeof L[$i]=="string";if(O){if(Object.keys(y.dynamic).length>0)return null;var F=y.static,I=Object.keys(F);if(I.length>0&&typeof F[I[0]]=="number"){for(var C=[],z=0;z<I.length;++z)x(typeof F[I[z]]=="number","must specify all vertex attribute locations when using vaos"),C.push([F[I[z]]|0,I[z]]);return C}}return null}function lt(E,y,L){var O=E.static,F=E.dynamic;function I(_){if(_ in O){var P=b.id(O[_]);x.optional(function(){fe.shader(yh[_],P,x.guessCommand())});var G=vr(function(){return P});return G.id=P,G}else if(_ in F){var K=F[_];return nn(K,function(Z,Y){var he=Z.invoke(Y,K),je=Y.def(Z.shared.strings,".id(",he,")");return x.optional(function(){Y(Z.shared.shader,".shader(",yh[_],",",je,",",Z.command,");")}),je})}return null}var C=I(qi),z=I($i),M=null,k;return _o(C)&&_o(z)?(M=fe.program(z.id,C.id,null,L),k=vr(function(_,P){return _.link(M)})):k=new Vr(C&&C.thisDep||z&&z.thisDep,C&&C.contextDep||z&&z.contextDep,C&&C.propDep||z&&z.propDep,function(_,P){var G=_.shared.shader,K;C?K=C.append(_,P):K=P.def(G,".",qi);var Z;z?Z=z.append(_,P):Z=P.def(G,".",$i);var Y=G+".program("+Z+","+K;return x.optional(function(){Y+=","+_.command}),P.def(Y+")")}),{frag:C,vert:z,progVar:k,program:M}}function Tt(E,y){var L=E.static,O=E.dynamic;function F(){if(Jo in L){var _=L[Jo];n0(_)?_=U.getElements(U.create(_,!0)):_&&(_=U.getElements(_),x.command(_,"invalid elements",y.commandStr));var P=vr(function(K,Z){if(_){var Y=K.link(_);return K.ELEMENTS=Y,Y}return K.ELEMENTS=null,null});return P.value=_,P}else if(Jo in O){var G=O[Jo];return nn(G,function(K,Z){var Y=K.shared,he=Y.isBufferArgs,je=Y.elements,st=K.invoke(Z,G),He=Z.def("null"),Xe=Z.def(he,"(",st,")"),tt=K.cond(Xe).then(He,"=",je,".createStream(",st,");").else(He,"=",je,".getElements(",st,");");return x.optional(function(){K.assert(tt.else,"!"+st+"||"+He,"invalid elements")}),Z.entry(tt),Z.exit(K.cond(Xe).then(je,".destroyStream(",He,");")),K.ELEMENTS=He,He})}return null}var I=F();function C(){if(ea in L){var _=L[ea];return x.commandParameter(_,za,"invalid primitve",y.commandStr),vr(function(G,K){return za[_]})}else if(ea in O){var P=O[ea];return nn(P,function(G,K){var Z=G.constants.primTypes,Y=G.invoke(K,P);return x.optional(function(){G.assert(K,Y+" in "+Z,"invalid primitive, must be one of "+Object.keys(za))}),K.def(Z,"[",Y,"]")})}else if(I)return _o(I)?I.value?vr(function(G,K){return K.def(G.ELEMENTS,".primType")}):vr(function(){return uh}):new Vr(I.thisDep,I.contextDep,I.propDep,function(G,K){var Z=G.ELEMENTS;return K.def(Z,"?",Z,".primType:",uh)});return null}function z(_,P){if(_ in L){var G=L[_]|0;return x.command(!P||G>=0,"invalid "+_,y.commandStr),vr(function(Z,Y){return P&&(Z.OFFSET=G),G})}else if(_ in O){var K=O[_];return nn(K,function(Z,Y){var he=Z.invoke(Y,K);return P&&(Z.OFFSET=he,x.optional(function(){Z.assert(Y,he+">=0","invalid "+_)})),he})}else if(P&&I)return vr(function(Z,Y){return Z.OFFSET="0",0});return null}var M=z(Ws,!0);function k(){if(ta in L){var _=L[ta]|0;return x.command(typeof _=="number"&&_>=0,"invalid vertex count",y.commandStr),vr(function(){return _})}else if(ta in O){var P=O[ta];return nn(P,function(Z,Y){var he=Z.invoke(Y,P);return x.optional(function(){Z.assert(Y,"typeof "+he+'==="number"&&'+he+">=0&&"+he+"===("+he+"|0)","invalid vertex count")}),he})}else if(I)if(_o(I)){if(I)return M?new Vr(M.thisDep,M.contextDep,M.propDep,function(Z,Y){var he=Y.def(Z.ELEMENTS,".vertCount-",Z.OFFSET);return x.optional(function(){Z.assert(Y,he+">=0","invalid vertex offset/element buffer too small")}),he}):vr(function(Z,Y){return Y.def(Z.ELEMENTS,".vertCount")});var G=vr(function(){return-1});return x.optional(function(){G.MISSING=!0}),G}else{var K=new Vr(I.thisDep||M.thisDep,I.contextDep||M.contextDep,I.propDep||M.propDep,function(Z,Y){var he=Z.ELEMENTS;return Z.OFFSET?Y.def(he,"?",he,".vertCount-",Z.OFFSET,":-1"):Y.def(he,"?",he,".vertCount:-1")});return x.optional(function(){K.DYNAMIC=!0}),K}return null}return{elements:I,primitive:C(),count:k(),instances:z(Vs,!1),offset:M}}function gr(E,y){var L=E.static,O=E.dynamic,F={};return ne.forEach(function(I){var C=_e(I);function z(M,k){if(I in L){var _=M(L[I]);F[C]=vr(function(){return _})}else if(I in O){var P=O[I];F[C]=nn(P,function(G,K){return k(G,K,G.invoke(K,P))})}}switch(I){case Ju:case Vu:case Wu:case oh:case Yu:case ih:case th:case rh:case nh:case Zu:return z(function(M){return x.commandType(M,"boolean",I,y.commandStr),M},function(M,k,_){return x.optional(function(){M.assert(k,"typeof "+_+'==="boolean"',"invalid flag "+I,M.commandStr)}),_});case Ku:return z(function(M){return x.commandParameter(M,Xa,"invalid "+I,y.commandStr),Xa[M]},function(M,k,_){var P=M.constants.compareFuncs;return x.optional(function(){M.assert(k,_+" in "+P,"invalid "+I+", must be one of "+Object.keys(Xa))}),k.def(P,"[",_,"]")});case Qu:return z(function(M){return x.command(cr(M)&&M.length===2&&typeof M[0]=="number"&&typeof M[1]=="number"&&M[0]<=M[1],"depth range is 2d array",y.commandStr),M},function(M,k,_){x.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===2&&typeof "+_+'[0]==="number"&&typeof '+_+'[1]==="number"&&'+_+"[0]<="+_+"[1]","depth range must be a 2d array")});var P=k.def("+",_,"[0]"),G=k.def("+",_,"[1]");return[P,G]});case Gc:return z(function(M){x.commandType(M,"object","blend.func",y.commandStr);var k="srcRGB"in M?M.srcRGB:M.src,_="srcAlpha"in M?M.srcAlpha:M.src,P="dstRGB"in M?M.dstRGB:M.dst,G="dstAlpha"in M?M.dstAlpha:M.dst;return x.commandParameter(k,Kn,C+".srcRGB",y.commandStr),x.commandParameter(_,Kn,C+".srcAlpha",y.commandStr),x.commandParameter(P,Kn,C+".dstRGB",y.commandStr),x.commandParameter(G,Kn,C+".dstAlpha",y.commandStr),x.command(gh.indexOf(k+", "+P)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+k+", "+P+")",y.commandStr),[Kn[k],Kn[P],Kn[_],Kn[G]]},function(M,k,_){var P=M.constants.blendFuncs;x.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid blend func, must be an object")});function G(He,Xe){var tt=k.def('"',He,Xe,'" in ',_,"?",_,".",He,Xe,":",_,".",He);return x.optional(function(){M.assert(k,tt+" in "+P,"invalid "+I+"."+He+Xe+", must be one of "+Object.keys(Kn))}),tt}var K=G("src","RGB"),Z=G("dst","RGB");x.optional(function(){var He=M.constants.invalidBlendCombinations;M.assert(k,He+".indexOf("+K+'+", "+'+Z+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var Y=k.def(P,"[",K,"]"),he=k.def(P,"[",G("src","Alpha"),"]"),je=k.def(P,"[",Z,"]"),st=k.def(P,"[",G("dst","Alpha"),"]");return[Y,je,he,st]});case Fc:return z(function(M){if(typeof M=="string")return x.commandParameter(M,X,"invalid "+I,y.commandStr),[X[M],X[M]];if(typeof M=="object")return x.commandParameter(M.rgb,X,I+".rgb",y.commandStr),x.commandParameter(M.alpha,X,I+".alpha",y.commandStr),[X[M.rgb],X[M.alpha]];x.commandRaise("invalid blend.equation",y.commandStr)},function(M,k,_){var P=M.constants.blendEquations,G=k.def(),K=k.def(),Z=M.cond("typeof ",_,'==="string"');return x.optional(function(){function Y(he,je,st){M.assert(he,st+" in "+P,"invalid "+je+", must be one of "+Object.keys(X))}Y(Z.then,I,_),M.assert(Z.else,_+"&&typeof "+_+'==="object"',"invalid "+I),Y(Z.else,I+".rgb",_+".rgb"),Y(Z.else,I+".alpha",_+".alpha")}),Z.then(G,"=",K,"=",P,"[",_,"];"),Z.else(G,"=",P,"[",_,".rgb];",K,"=",P,"[",_,".alpha];"),k(Z),[G,K]});case Xu:return z(function(M){return x.command(cr(M)&&M.length===4,"blend.color must be a 4d array",y.commandStr),$e(4,function(k){return+M[k]})},function(M,k,_){return x.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===4","blend.color must be a 4d array")}),$e(4,function(P){return k.def("+",_,"[",P,"]")})});case ah:return z(function(M){return x.commandType(M,"number",C,y.commandStr),M|0},function(M,k,_){return x.optional(function(){M.assert(k,"typeof "+_+'==="number"',"invalid stencil.mask")}),k.def(_,"|0")});case Bc:return z(function(M){x.commandType(M,"object",C,y.commandStr);var k=M.cmp||"keep",_=M.ref||0,P="mask"in M?M.mask:-1;return x.commandParameter(k,Xa,I+".cmp",y.commandStr),x.commandType(_,"number",I+".ref",y.commandStr),x.commandType(P,"number",I+".mask",y.commandStr),[Xa[k],_,P]},function(M,k,_){var P=M.constants.compareFuncs;x.optional(function(){function Y(){M.assert(k,Array.prototype.join.call(arguments,""),"invalid stencil.func")}Y(_+"&&typeof ",_,'==="object"'),Y('!("cmp" in ',_,")||(",_,".cmp in ",P,")")});var G=k.def('"cmp" in ',_,"?",P,"[",_,".cmp]",":",bo),K=k.def(_,".ref|0"),Z=k.def('"mask" in ',_,"?",_,".mask|0:-1");return[G,K,Z]});case jc:case Gi:return z(function(M){x.commandType(M,"object",C,y.commandStr);var k=M.fail||"keep",_=M.zfail||"keep",P=M.zpass||"keep";return x.commandParameter(k,wo,I+".fail",y.commandStr),x.commandParameter(_,wo,I+".zfail",y.commandStr),x.commandParameter(P,wo,I+".zpass",y.commandStr),[I===Gi?ra:Xi,wo[k],wo[_],wo[P]]},function(M,k,_){var P=M.constants.stencilOps;x.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid "+I)});function G(K){return x.optional(function(){M.assert(k,'!("'+K+'" in '+_+")||("+_+"."+K+" in "+P+")","invalid "+I+"."+K+", must be one of "+Object.keys(wo))}),k.def('"',K,'" in ',_,"?",P,"[",_,".",K,"]:",bo)}return[I===Gi?ra:Xi,G("fail"),G("zfail"),G("zpass")]});case Hc:return z(function(M){x.commandType(M,"object",C,y.commandStr);var k=M.factor|0,_=M.units|0;return x.commandType(k,"number",C+".factor",y.commandStr),x.commandType(_,"number",C+".units",y.commandStr),[k,_]},function(M,k,_){x.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid "+I)});var P=k.def(_,".factor|0"),G=k.def(_,".units|0");return[P,G]});case eh:return z(function(M){var k=0;return M==="front"?k=Xi:M==="back"&&(k=ra),x.command(!!k,C,y.commandStr),k},function(M,k,_){return x.optional(function(){M.assert(k,_+'==="front"||'+_+'==="back"',"invalid cull.face")}),k.def(_,'==="front"?',Xi,":",ra)});case qc:return z(function(M){return x.command(typeof M=="number"&&M>=j.lineWidthDims[0]&&M<=j.lineWidthDims[1],"invalid line width, must be a positive number between "+j.lineWidthDims[0]+" and "+j.lineWidthDims[1],y.commandStr),M},function(M,k,_){return x.optional(function(){M.assert(k,"typeof "+_+'==="number"&&'+_+">="+j.lineWidthDims[0]+"&&"+_+"<="+j.lineWidthDims[1],"invalid line width")}),_});case $c:return z(function(M){return x.commandParameter(M,Zc,C,y.commandStr),Zc[M]},function(M,k,_){return x.optional(function(){M.assert(k,_+'==="cw"||'+_+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),k.def(_+'==="cw"?'+hh+":"+Qc)});case Dc:return z(function(M){return x.command(cr(M)&&M.length===4,"color.mask must be length 4 array",y.commandStr),M.map(function(k){return!!k})},function(M,k,_){return x.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===4","invalid color.mask")}),$e(4,function(P){return"!!"+_+"["+P+"]"})});case Uc:return z(function(M){x.command(typeof M=="object"&&M,C,y.commandStr);var k="value"in M?M.value:1,_=!!M.invert;return x.command(typeof k=="number"&&k>=0&&k<=1,"sample.coverage.value must be a number between 0 and 1",y.commandStr),[k,_]},function(M,k,_){x.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid sample.coverage")});var P=k.def('"value" in ',_,"?+",_,".value:1"),G=k.def("!!",_,".invert");return[P,G]})}}),F}function Ar(E,y){var L=E.static,O=E.dynamic,F={};return Object.keys(L).forEach(function(I){var C=L[I],z;if(typeof C=="number"||typeof C=="boolean")z=vr(function(){return C});else if(typeof C=="function"){var M=C._reglType;M==="texture2d"||M==="textureCube"?z=vr(function(k){return k.link(C)}):M==="framebuffer"||M==="framebufferCube"?(x.command(C.color.length>0,'missing color attachment for framebuffer sent to uniform "'+I+'"',y.commandStr),z=vr(function(k){return k.link(C.color[0])})):x.commandRaise('invalid data for uniform "'+I+'"',y.commandStr)}else cr(C)?z=vr(function(k){var _=k.global.def("[",$e(C.length,function(P){return x.command(typeof C[P]=="number"||typeof C[P]=="boolean","invalid uniform "+I,k.commandStr),C[P]}),"]");return _}):x.commandRaise('invalid or missing data for uniform "'+I+'"',y.commandStr);z.value=C,F[I]=z}),Object.keys(O).forEach(function(I){var C=O[I];F[I]=nn(C,function(z,M){return z.invoke(M,C)})}),F}function mt(E,y){var L=E.static,O=E.dynamic,F={};return Object.keys(L).forEach(function(I){var C=L[I],z=b.id(I),M=new N;if(n0(C))M.state=Ba,M.buffer=Q.getBuffer(Q.create(C,Va,!1,!0)),M.type=0;else{var k=Q.getBuffer(C);if(k)M.state=Ba,M.buffer=k,M.type=0;else if(x.command(typeof C=="object"&&C,"invalid data for attribute "+I,y.commandStr),"constant"in C){var _=C.constant;M.buffer="null",M.state=Ic,typeof _=="number"?M.x=_:(x.command(cr(_)&&_.length>0&&_.length<=4,"invalid constant for attribute "+I,y.commandStr),Ua.forEach(function(je,st){st<_.length&&(M[je]=_[st])}))}else{n0(C.buffer)?k=Q.getBuffer(Q.create(C.buffer,Va,!1,!0)):k=Q.getBuffer(C.buffer),x.command(!!k,'missing buffer for attribute "'+I+'"',y.commandStr);var P=C.offset|0;x.command(P>=0,'invalid offset for attribute "'+I+'"',y.commandStr);var G=C.stride|0;x.command(G>=0&&G<256,'invalid stride for attribute "'+I+'", must be integer betweeen [0, 255]',y.commandStr);var K=C.size|0;x.command(!("size"in C)||K>0&&K<=4,'invalid size for attribute "'+I+'", must be 1,2,3,4',y.commandStr);var Z=!!C.normalized,Y=0;"type"in C&&(x.commandParameter(C.type,Vo,"invalid type for attribute "+I,y.commandStr),Y=Vo[C.type]);var he=C.divisor|0;"divisor"in C&&(x.command(he===0||pe,'cannot specify divisor for attribute "'+I+'", instancing not supported',y.commandStr),x.command(he>=0,'invalid divisor for attribute "'+I+'"',y.commandStr)),x.optional(function(){var je=y.commandStr,st=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(C).forEach(function(He){x.command(st.indexOf(He)>=0,'unknown parameter "'+He+'" for attribute pointer "'+I+'" (valid parameters are '+st+")",je)})}),M.buffer=k,M.state=Ba,M.size=K,M.normalized=Z,M.type=Y||k.dtype,M.offset=P,M.stride=G,M.divisor=he}}F[I]=vr(function(je,st){var He=je.attribCache;if(z in He)return He[z];var Xe={isStream:!1};return Object.keys(M).forEach(function(tt){Xe[tt]=M[tt]}),M.buffer&&(Xe.buffer=je.link(M.buffer),Xe.type=Xe.type||Xe.buffer+".dtype"),He[z]=Xe,Xe})}),Object.keys(O).forEach(function(I){var C=O[I];function z(M,k){var _=M.invoke(k,C),P=M.shared,G=M.constants,K=P.isBufferArgs,Z=P.buffer;x.optional(function(){M.assert(k,_+"&&(typeof "+_+'==="object"||typeof '+_+'==="function")&&('+K+"("+_+")||"+Z+".getBuffer("+_+")||"+Z+".getBuffer("+_+".buffer)||"+K+"("+_+'.buffer)||("constant" in '+_+"&&(typeof "+_+'.constant==="number"||'+P.isArrayLike+"("+_+".constant))))",'invalid dynamic attribute "'+I+'"')});var Y={isStream:k.def(!1)},he=new N;he.state=Ba,Object.keys(he).forEach(function(Xe){Y[Xe]=k.def(""+he[Xe])});var je=Y.buffer,st=Y.type;k("if(",K,"(",_,")){",Y.isStream,"=true;",je,"=",Z,".createStream(",Va,",",_,");",st,"=",je,".dtype;","}else{",je,"=",Z,".getBuffer(",_,");","if(",je,"){",st,"=",je,".dtype;",'}else if("constant" in ',_,"){",Y.state,"=",Ic,";","if(typeof "+_+'.constant === "number"){',Y[Ua[0]],"=",_,".constant;",Ua.slice(1).map(function(Xe){return Y[Xe]}).join("="),"=0;","}else{",Ua.map(function(Xe,tt){return Y[Xe]+"="+_+".constant.length>"+tt+"?"+_+".constant["+tt+"]:0;"}).join(""),"}}else{","if(",K,"(",_,".buffer)){",je,"=",Z,".createStream(",Va,",",_,".buffer);","}else{",je,"=",Z,".getBuffer(",_,".buffer);","}",st,'="type" in ',_,"?",G.glTypes,"[",_,".type]:",je,".dtype;",Y.normalized,"=!!",_,".normalized;");function He(Xe){k(Y[Xe],"=",_,".",Xe,"|0;")}return He("size"),He("offset"),He("stride"),He("divisor"),k("}}"),k.exit("if(",Y.isStream,"){",Z,".destroyStream(",je,");","}"),Y}F[I]=nn(C,z)}),F}function _r(E,y){var L=E.static,O=E.dynamic;if(Hi in L){var F=L[Hi];return F!==null&&me.getVAO(F)===null&&(F=me.createVAO(F)),vr(function(C){return C.link(me.getVAO(F))})}else if(Hi in O){var I=O[Hi];return nn(I,function(C,z){var M=C.invoke(z,I);return z.def(C.shared.vao+".getVAO("+M+")")})}return null}function Wt(E){var y=E.static,L=E.dynamic,O={};return Object.keys(y).forEach(function(F){var I=y[F];O[F]=vr(function(C,z){return typeof I=="number"||typeof I=="boolean"?""+I:C.link(I)})}),Object.keys(L).forEach(function(F){var I=L[F];O[F]=nn(I,function(C,z){return C.invoke(z,I)})}),O}function yr(E,y,L,O,F){var I=E.static,C=E.dynamic;x.optional(function(){var He=[Zo,$i,qi,Jo,ea,Ws,ta,Vs,Di,Hi].concat(ne);function Xe(tt){Object.keys(tt).forEach(function(St){x.command(He.indexOf(St)>=0,'unknown parameter "'+St+'"',F.commandStr)})}Xe(I),Xe(C)});var z=et(E,y),M=qe(E,F),k=ht(E,M,F),_=Tt(E,F),P=gr(E,F),G=lt(E,F,z);function K(He){var Xe=k[He];Xe&&(P[He]=Xe)}K(ao),K(_e(js));var Z=Object.keys(P).length>0,Y={framebuffer:M,draw:_,shader:G,state:P,dirty:Z,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(Y.profile=at(E,F),Y.uniforms=Ar(L,F),Y.drawVAO=Y.scopeVAO=_r(E,F),!Y.drawVAO&&G.program&&!z&&S.angle_instanced_arrays){var he=!0,je=G.program.attributes.map(function(He){var Xe=y.static[He];return he=he&&!!Xe,Xe});if(he&&je.length>0){var st=me.getVAO(me.createVAO(je));Y.drawVAO=new Vr(null,null,null,function(He,Xe){return He.link(st)}),Y.useVAO=!0}}return z?Y.useVAO=!0:Y.attributes=mt(y,F),Y.context=Wt(O,F),Y}function Er(E,y,L){var O=E.shared,F=O.context,I=E.scope();Object.keys(L).forEach(function(C){y.save(F,"."+C);var z=L[C],M=z.append(E,y);Array.isArray(M)?I(F,".",C,"=[",M.join(),"];"):I(F,".",C,"=",M,";")}),y(I)}function Mr(E,y,L,O){var F=E.shared,I=F.gl,C=F.framebuffer,z;Re&&(z=y.def(F.extensions,".webgl_draw_buffers"));var M=E.constants,k=M.drawBuffer,_=M.backBuffer,P;L?P=L.append(E,y):P=y.def(C,".next"),O||y("if(",P,"!==",C,".cur){"),y("if(",P,"){",I,".bindFramebuffer(",vh,",",P,".framebuffer);"),Re&&y(z,".drawBuffersWEBGL(",k,"[",P,".colorAttachments.length]);"),y("}else{",I,".bindFramebuffer(",vh,",null);"),Re&&y(z,".drawBuffersWEBGL(",_,");"),y("}",C,".cur=",P,";"),O||y("}")}function Lr(E,y,L){var O=E.shared,F=O.gl,I=E.current,C=E.next,z=O.current,M=O.next,k=E.cond(z,".dirty");ne.forEach(function(_){var P=_e(_);if(!(P in L.state)){var G,K;if(P in C){G=C[P],K=I[P];var Z=$e(te[P].length,function(he){return k.def(G,"[",he,"]")});k(E.cond(Z.map(function(he,je){return he+"!=="+K+"["+je+"]"}).join("||")).then(F,".",re[P],"(",Z,");",Z.map(function(he,je){return K+"["+je+"]="+he}).join(";"),";"))}else{G=k.def(M,".",P);var Y=E.cond(G,"!==",z,".",P);k(Y),P in we?Y(E.cond(G).then(F,".enable(",we[P],");").else(F,".disable(",we[P],");"),z,".",P,"=",G,";"):Y(F,".",re[P],"(",G,");",z,".",P,"=",G,";")}}}),Object.keys(L.state).length===0&&k(z,".dirty=false;"),y(k)}function Or(E,y,L,O){var F=E.shared,I=E.current,C=F.current,z=F.gl;xh(Object.keys(L)).forEach(function(M){var k=L[M];if(!(O&&!O(k))){var _=k.append(E,y);if(we[M]){var P=we[M];_o(k)?_?y(z,".enable(",P,");"):y(z,".disable(",P,");"):y(E.cond(_).then(z,".enable(",P,");").else(z,".disable(",P,");")),y(C,".",M,"=",_,";")}else if(cr(_)){var G=I[M];y(z,".",re[M],"(",_,");",_.map(function(K,Z){return G+"["+Z+"]="+K}).join(";"),";")}else y(z,".",re[M],"(",_,");",C,".",M,"=",_,";")}})}function lr(E,y){pe&&(E.instancing=y.def(E.shared.extensions,".angle_instanced_arrays"))}function it(E,y,L,O,F){var I=E.shared,C=E.stats,z=I.current,M=I.timer,k=L.profile;function _(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var P,G;function K(He){P=y.def(),He(P,"=",_(),";"),typeof F=="string"?He(C,".count+=",F,";"):He(C,".count++;"),se&&(O?(G=y.def(),He(G,"=",M,".getNumPendingQueries();")):He(M,".beginQuery(",C,");"))}function Z(He){He(C,".cpuTime+=",_(),"-",P,";"),se&&(O?He(M,".pushScopeStats(",G,",",M,".getNumPendingQueries(),",C,");"):He(M,".endQuery();"))}function Y(He){var Xe=y.def(z,".profile");y(z,".profile=",He,";"),y.exit(z,".profile=",Xe,";")}var he;if(k){if(_o(k)){k.enable?(K(y),Z(y.exit),Y("true")):Y("false");return}he=k.append(E,y),Y(he)}else he=y.def(z,".profile");var je=E.block();K(je),y("if(",he,"){",je,"}");var st=E.block();Z(st),y.exit("if(",he,"){",st,"}")}function Nr(E,y,L,O,F){var I=E.shared;function C(M){switch(M){case Xs:case Qs:case e0:return 2;case Ys:case Zs:case t0:return 3;case Ks:case Js:case r0:return 4;default:return 1}}function z(M,k,_){var P=I.gl,G=y.def(M,".location"),K=y.def(I.attributes,"[",G,"]"),Z=_.state,Y=_.buffer,he=[_.x,_.y,_.z,_.w],je=["buffer","normalized","offset","stride"];function st(){y("if(!",K,".buffer){",P,".enableVertexAttribArray(",G,");}");var Xe=_.type,tt;if(_.size?tt=y.def(_.size,"||",k):tt=k,y("if(",K,".type!==",Xe,"||",K,".size!==",tt,"||",je.map(function(or){return K+"."+or+"!=="+_[or]}).join("||"),"){",P,".bindBuffer(",Va,",",Y,".buffer);",P,".vertexAttribPointer(",[G,tt,Xe,_.normalized,_.stride,_.offset],");",K,".type=",Xe,";",K,".size=",tt,";",je.map(function(or){return K+"."+or+"="+_[or]+";"}).join(""),"}"),pe){var St=_.divisor;y("if(",K,".divisor!==",St,"){",E.instancing,".vertexAttribDivisorANGLE(",[G,St],");",K,".divisor=",St,";}")}}function He(){y("if(",K,".buffer){",P,".disableVertexAttribArray(",G,");",K,".buffer=null;","}if(",Ua.map(function(Xe,tt){return K+"."+Xe+"!=="+he[tt]}).join("||"),"){",P,".vertexAttrib4f(",G,",",he,");",Ua.map(function(Xe,tt){return K+"."+Xe+"="+he[tt]+";"}).join(""),"}")}Z===Ba?st():Z===Ic?He():(y("if(",Z,"===",Ba,"){"),st(),y("}else{"),He(),y("}"))}O.forEach(function(M){var k=M.name,_=L.attributes[k],P;if(_){if(!F(_))return;P=_.append(E,y)}else{if(!F(bh))return;var G=E.scopeAttrib(k);x.optional(function(){E.assert(y,G+".state","missing attribute "+k)}),P={},Object.keys(new N).forEach(function(K){P[K]=y.def(G,".",K)})}z(E.link(M),C(M.info.type),P)})}function Lt(E,y,L,O,F){for(var I=E.shared,C=I.gl,z,M=0;M<O.length;++M){var k=O[M],_=k.name,P=k.info.type,G=L.uniforms[_],K=E.link(k),Z=K+".location",Y;if(G){if(!F(G))continue;if(_o(G)){var he=G.value;if(x.command(he!==null&&typeof he!="undefined",'missing uniform "'+_+'"',E.commandStr),P===Wi||P===Vi){x.command(typeof he=="function"&&(P===Wi&&(he._reglType==="texture2d"||he._reglType==="framebuffer")||P===Vi&&(he._reglType==="textureCube"||he._reglType==="framebufferCube")),"invalid texture for uniform "+_,E.commandStr);var je=E.link(he._texture||he.color[0]._texture);y(C,".uniform1i(",Z,",",je+".bind());"),y.exit(je,".unbind();")}else if(P===Ui||P===Bi||P===ji){x.optional(function(){x.command(cr(he),"invalid matrix for uniform "+_,E.commandStr),x.command(P===Ui&&he.length===4||P===Bi&&he.length===9||P===ji&&he.length===16,"invalid length for matrix uniform "+_,E.commandStr)});var st=E.global.def("new Float32Array(["+Array.prototype.slice.call(he)+"])"),He=2;P===Bi?He=3:P===ji&&(He=4),y(C,".uniformMatrix",He,"fv(",Z,",false,",st,");")}else{switch(P){case Xc:x.commandType(he,"number","uniform "+_,E.commandStr),z="1f";break;case Xs:x.command(cr(he)&&he.length===2,"uniform "+_,E.commandStr),z="2f";break;case Ys:x.command(cr(he)&&he.length===3,"uniform "+_,E.commandStr),z="3f";break;case Ks:x.command(cr(he)&&he.length===4,"uniform "+_,E.commandStr),z="4f";break;case Kc:x.commandType(he,"boolean","uniform "+_,E.commandStr),z="1i";break;case Yc:x.commandType(he,"number","uniform "+_,E.commandStr),z="1i";break;case e0:x.command(cr(he)&&he.length===2,"uniform "+_,E.commandStr),z="2i";break;case Qs:x.command(cr(he)&&he.length===2,"uniform "+_,E.commandStr),z="2i";break;case t0:x.command(cr(he)&&he.length===3,"uniform "+_,E.commandStr),z="3i";break;case Zs:x.command(cr(he)&&he.length===3,"uniform "+_,E.commandStr),z="3i";break;case r0:x.command(cr(he)&&he.length===4,"uniform "+_,E.commandStr),z="4i";break;case Js:x.command(cr(he)&&he.length===4,"uniform "+_,E.commandStr),z="4i";break}y(C,".uniform",z,"(",Z,",",cr(he)?Array.prototype.slice.call(he):he,");")}continue}else Y=G.append(E,y)}else{if(!F(bh))continue;Y=y.def(I.uniforms,"[",b.id(_),"]")}P===Wi?(x(!Array.isArray(Y),"must specify a scalar prop for textures"),y("if(",Y,"&&",Y,'._reglType==="framebuffer"){',Y,"=",Y,".color[0];","}")):P===Vi&&(x(!Array.isArray(Y),"must specify a scalar prop for cube maps"),y("if(",Y,"&&",Y,'._reglType==="framebufferCube"){',Y,"=",Y,".color[0];","}")),x.optional(function(){function Xr(Gn,Sh){E.assert(y,Gn,'bad data or missing for uniform "'+_+'".  '+Sh)}function Jc(Gn){x(!Array.isArray(Y),"must not specify an array type for uniform"),Xr("typeof "+Y+'==="'+Gn+'"',"invalid type, expected "+Gn)}function En(Gn,Sh){Array.isArray(Y)?x(Y.length===Gn,"must have length "+Gn):Xr(I.isArrayLike+"("+Y+")&&"+Y+".length==="+Gn,"invalid vector, should have length "+Gn,E.commandStr)}function Th(Gn){x(!Array.isArray(Y),"must not specify a value type"),Xr("typeof "+Y+'==="function"&&'+Y+'._reglType==="texture'+(Gn===fh?"2d":"Cube")+'"',"invalid texture type",E.commandStr)}switch(P){case Yc:Jc("number");break;case Qs:En(2,"number");break;case Zs:En(3,"number");break;case Js:En(4,"number");break;case Xc:Jc("number");break;case Xs:En(2,"number");break;case Ys:En(3,"number");break;case Ks:En(4,"number");break;case Kc:Jc("boolean");break;case e0:En(2,"boolean");break;case t0:En(3,"boolean");break;case r0:En(4,"boolean");break;case Ui:En(4,"number");break;case Bi:En(9,"number");break;case ji:En(16,"number");break;case Wi:Th(fh);break;case Vi:Th(Sy);break}});var Xe=1;switch(P){case Wi:case Vi:var tt=y.def(Y,"._texture");y(C,".uniform1i(",Z,",",tt,".bind());"),y.exit(tt,".unbind();");continue;case Yc:case Kc:z="1i";break;case Qs:case e0:z="2i",Xe=2;break;case Zs:case t0:z="3i",Xe=3;break;case Js:case r0:z="4i",Xe=4;break;case Xc:z="1f";break;case Xs:z="2f",Xe=2;break;case Ys:z="3f",Xe=3;break;case Ks:z="4f",Xe=4;break;case Ui:z="Matrix2fv";break;case Bi:z="Matrix3fv";break;case ji:z="Matrix4fv";break}if(y(C,".uniform",z,"(",Z,","),z.charAt(0)==="M"){var St=Math.pow(P-Ui+2,2),or=E.global.def("new Float32Array(",St,")");Array.isArray(Y)?y("false,(",$e(St,function(Xr){return or+"["+Xr+"]="+Y[Xr]}),",",or,")"):y("false,(Array.isArray(",Y,")||",Y," instanceof Float32Array)?",Y,":(",$e(St,function(Xr){return or+"["+Xr+"]="+Y+"["+Xr+"]"}),",",or,")")}else Xe>1?y($e(Xe,function(Xr){return Array.isArray(Y)?Y[Xr]:Y+"["+Xr+"]"})):(x(!Array.isArray(Y),"uniform value must not be an array"),y(Y));y(");")}}function Ve(E,y,L,O){var F=E.shared,I=F.gl,C=F.draw,z=O.draw;function M(){var tt=z.elements,St,or=y;return tt?((tt.contextDep&&O.contextDynamic||tt.propDep)&&(or=L),St=tt.append(E,or)):St=or.def(C,".",Jo),St&&or("if("+St+")"+I+".bindBuffer("+My+","+St+".buffer.buffer);"),St}function k(){var tt=z.count,St,or=y;return tt?((tt.contextDep&&O.contextDynamic||tt.propDep)&&(or=L),St=tt.append(E,or),x.optional(function(){tt.MISSING&&E.assert(y,"false","missing vertex count"),tt.DYNAMIC&&E.assert(or,St+">=0","missing vertex count")})):(St=or.def(C,".",ta),x.optional(function(){E.assert(or,St+">=0","missing vertex count")})),St}var _=M();function P(tt){var St=z[tt];return St?St.contextDep&&O.contextDynamic||St.propDep?St.append(E,L):St.append(E,y):y.def(C,".",tt)}var G=P(ea),K=P(Ws),Z=k();if(typeof Z=="number"){if(Z===0)return}else L("if(",Z,"){"),L.exit("}");var Y,he;pe&&(Y=P(Vs),he=E.instancing);var je=_+".type",st=z.elements&&_o(z.elements);function He(){function tt(){L(he,".drawElementsInstancedANGLE(",[G,Z,je,K+"<<(("+je+"-"+Uu+")>>1)",Y],");")}function St(){L(he,".drawArraysInstancedANGLE(",[G,K,Z,Y],");")}_?st?tt():(L("if(",_,"){"),tt(),L("}else{"),St(),L("}")):St()}function Xe(){function tt(){L(I+".drawElements("+[G,Z,je,K+"<<(("+je+"-"+Uu+")>>1)"]+");")}function St(){L(I+".drawArrays("+[G,K,Z]+");")}_?st?tt():(L("if(",_,"){"),tt(),L("}else{"),St(),L("}")):St()}pe&&(typeof Y!="number"||Y>=0)?typeof Y=="string"?(L("if(",Y,">0){"),He(),L("}else if(",Y,"<0){"),Xe(),L("}")):He():Xe()}function pt(E,y,L,O,F){var I=Ke(),C=I.proc("body",F);return x.optional(function(){I.commandStr=y.commandStr,I.command=I.link(y.commandStr)}),pe&&(I.instancing=C.def(I.shared.extensions,".angle_instanced_arrays")),E(I,C,L,O),I.compile().body}function wt(E,y,L,O){lr(E,y),L.useVAO?L.drawVAO?y(E.shared.vao,".setVAO(",L.drawVAO.append(E,y),");"):y(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(y(E.shared.vao,".setVAO(null);"),Nr(E,y,L,O.attributes,function(){return!0})),Lt(E,y,L,O.uniforms,function(){return!0}),Ve(E,y,y,L)}function fr(E,y){var L=E.proc("draw",1);lr(E,L),Er(E,L,y.context),Mr(E,L,y.framebuffer),Lr(E,L,y),Or(E,L,y.state),it(E,L,y,!1,!0);var O=y.shader.progVar.append(E,L);if(L(E.shared.gl,".useProgram(",O,".program);"),y.shader.program)wt(E,L,y,y.shader.program);else{L(E.shared.vao,".setVAO(null);");var F=E.global.def("{}"),I=L.def(O,".id"),C=L.def(F,"[",I,"]");L(E.cond(C).then(C,".call(this,a0);").else(C,"=",F,"[",I,"]=",E.link(function(z){return pt(wt,E,y,z,1)}),"(",O,");",C,".call(this,a0);"))}Object.keys(y.state).length>0&&L(E.shared.current,".dirty=true;")}function Qn(E,y,L,O){E.batchId="a1",lr(E,y);function F(){return!0}Nr(E,y,L,O.attributes,F),Lt(E,y,L,O.uniforms,F),Ve(E,y,y,L)}function na(E,y,L,O){lr(E,y);var F=L.contextDep,I=y.def(),C="a0",z="a1",M=y.def();E.shared.props=M,E.batchId=I;var k=E.scope(),_=E.scope();y(k.entry,"for(",I,"=0;",I,"<",z,";++",I,"){",M,"=",C,"[",I,"];",_,"}",k.exit);function P(je){return je.contextDep&&F||je.propDep}function G(je){return!P(je)}if(L.needsContext&&Er(E,_,L.context),L.needsFramebuffer&&Mr(E,_,L.framebuffer),Or(E,_,L.state,P),L.profile&&P(L.profile)&&it(E,_,L,!1,!0),O)L.useVAO?L.drawVAO?P(L.drawVAO)?_(E.shared.vao,".setVAO(",L.drawVAO.append(E,_),");"):k(E.shared.vao,".setVAO(",L.drawVAO.append(E,k),");"):k(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(k(E.shared.vao,".setVAO(null);"),Nr(E,k,L,O.attributes,G),Nr(E,_,L,O.attributes,P)),Lt(E,k,L,O.uniforms,G),Lt(E,_,L,O.uniforms,P),Ve(E,k,_,L);else{var K=E.global.def("{}"),Z=L.shader.progVar.append(E,_),Y=_.def(Z,".id"),he=_.def(K,"[",Y,"]");_(E.shared.gl,".useProgram(",Z,".program);","if(!",he,"){",he,"=",K,"[",Y,"]=",E.link(function(je){return pt(Qn,E,L,je,2)}),"(",Z,");}",he,".call(this,a0[",I,"],",I,");")}}function A(E,y){var L=E.proc("batch",2);E.batchId="0",lr(E,L);var O=!1,F=!0;Object.keys(y.context).forEach(function(K){O=O||y.context[K].propDep}),O||(Er(E,L,y.context),F=!1);var I=y.framebuffer,C=!1;I?(I.propDep?O=C=!0:I.contextDep&&O&&(C=!0),C||Mr(E,L,I)):Mr(E,L,null),y.state.viewport&&y.state.viewport.propDep&&(O=!0);function z(K){return K.contextDep&&O||K.propDep}Lr(E,L,y),Or(E,L,y.state,function(K){return!z(K)}),(!y.profile||!z(y.profile))&&it(E,L,y,!1,"a1"),y.contextDep=O,y.needsContext=F,y.needsFramebuffer=C;var M=y.shader.progVar;if(M.contextDep&&O||M.propDep)na(E,L,y,null);else{var k=M.append(E,L);if(L(E.shared.gl,".useProgram(",k,".program);"),y.shader.program)na(E,L,y,y.shader.program);else{L(E.shared.vao,".setVAO(null);");var _=E.global.def("{}"),P=L.def(k,".id"),G=L.def(_,"[",P,"]");L(E.cond(G).then(G,".call(this,a0,a1);").else(G,"=",_,"[",P,"]=",E.link(function(K){return pt(na,E,y,K,2)}),"(",k,");",G,".call(this,a0,a1);"))}}Object.keys(y.state).length>0&&L(E.shared.current,".dirty=true;")}function W(E,y){var L=E.proc("scope",3);E.batchId="a2";var O=E.shared,F=O.current;Er(E,L,y.context),y.framebuffer&&y.framebuffer.append(E,L),xh(Object.keys(y.state)).forEach(function(C){var z=y.state[C],M=z.append(E,L);cr(M)?M.forEach(function(k,_){L.set(E.next[C],"["+_+"]",k)}):L.set(O.next,"."+C,M)}),it(E,L,y,!0,!0),[Jo,Ws,ta,Vs,ea].forEach(function(C){var z=y.draw[C];z&&L.set(O.draw,"."+C,""+z.append(E,L))}),Object.keys(y.uniforms).forEach(function(C){var z=y.uniforms[C].append(E,L);Array.isArray(z)&&(z="["+z.join()+"]"),L.set(O.uniforms,"["+b.id(C)+"]",z)}),Object.keys(y.attributes).forEach(function(C){var z=y.attributes[C].append(E,L),M=E.scopeAttrib(C);Object.keys(new N).forEach(function(k){L.set(M,"."+k,z[k])})}),y.scopeVAO&&L.set(O.vao,".targetVAO",y.scopeVAO.append(E,L));function I(C){var z=y.shader[C];z&&L.set(O.shader,"."+C,z.append(E,L))}I($i),I(qi),Object.keys(y.state).length>0&&(L(F,".dirty=true;"),L.exit(F,".dirty=true;")),L("a1(",E.shared.context,",a0,",E.batchId,");")}function $(E){if(!(typeof E!="object"||cr(E))){for(var y=Object.keys(E),L=0;L<y.length;++L)if(zr.isDynamic(E[y[L]]))return!0;return!1}}function Ne(E,y,L){var O=y.static[L];if(!O||!$(O))return;var F=E.global,I=Object.keys(O),C=!1,z=!1,M=!1,k=E.global.def("{}");I.forEach(function(P){var G=O[P];if(zr.isDynamic(G)){typeof G=="function"&&(G=O[P]=zr.unbox(G));var K=nn(G,null);C=C||K.thisDep,M=M||K.propDep,z=z||K.contextDep}else{switch(F(k,".",P,"="),typeof G){case"number":F(G);break;case"string":F('"',G,'"');break;case"object":Array.isArray(G)&&F("[",G.join(),"]");break;default:F(E.link(G));break}F(";")}});function _(P,G){I.forEach(function(K){var Z=O[K];if(zr.isDynamic(Z)){var Y=P.invoke(G,Z);G(k,".",K,"=",Y,";")}})}y.dynamic[L]=new zr.DynamicVariable(Bs,{thisDep:C,contextDep:z,propDep:M,ref:k,append:_}),delete y.static[L]}function dt(E,y,L,O,F){var I=Ke();I.stats=I.link(F),Object.keys(y.static).forEach(function(z){Ne(I,y,z)}),Ey.forEach(function(z){Ne(I,E,z)});var C=yr(E,y,L,O,I);return fr(I,C),W(I,C),A(I,C),t(I.compile(),{destroy:function(){C.shader.program.destroy()}})}return{next:Pe,current:te,procs:function(){var E=Ke(),y=E.proc("poll"),L=E.proc("refresh"),O=E.block();y(O),L(O);var F=E.shared,I=F.gl,C=F.next,z=F.current;O(z,".dirty=false;"),Mr(E,y),Mr(E,L,null,!0);var M;pe&&(M=E.link(pe)),S.oes_vertex_array_object&&L(E.link(S.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var k=0;k<j.maxAttributes;++k){var _=L.def(F.attributes,"[",k,"]"),P=E.cond(_,".buffer");P.then(I,".enableVertexAttribArray(",k,");",I,".bindBuffer(",Va,",",_,".buffer.buffer);",I,".vertexAttribPointer(",k,",",_,".size,",_,".type,",_,".normalized,",_,".stride,",_,".offset);").else(I,".disableVertexAttribArray(",k,");",I,".vertexAttrib4f(",k,",",_,".x,",_,".y,",_,".z,",_,".w);",_,".buffer=null;"),L(P),pe&&L(M,".vertexAttribDivisorANGLE(",k,",",_,".divisor);")}return L(E.shared.vao,".currentVAO=null;",E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"),Object.keys(we).forEach(function(G){var K=we[G],Z=O.def(C,".",G),Y=E.block();Y("if(",Z,"){",I,".enable(",K,")}else{",I,".disable(",K,")}",z,".",G,"=",Z,";"),L(Y),y("if(",Z,"!==",z,".",G,"){",Y,"}")}),Object.keys(re).forEach(function(G){var K=re[G],Z=te[G],Y,he,je=E.block();if(je(I,".",K,"("),cr(Z)){var st=Z.length;Y=E.global.def(C,".",G),he=E.global.def(z,".",G),je($e(st,function(He){return Y+"["+He+"]"}),");",$e(st,function(He){return he+"["+He+"]="+Y+"["+He+"];"}).join("")),y("if(",$e(st,function(He){return Y+"["+He+"]!=="+he+"["+He+"]"}).join("||"),"){",je,"}")}else Y=O.def(C,".",G),he=O.def(z,".",G),je(Y,");",z,".",G,"=",Y,";"),y("if(",Y,"!==",he,"){",je,"}");L(je)}),E.compile()}(),compile:dt}}function Uy(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var By=34918,jy=34919,wh=35007,Wy=function(l,b){if(!b.ext_disjoint_timer_query)return null;var S=[];function j(){return S.pop()||b.ext_disjoint_timer_query.createQueryEXT()}function Q(pe){S.push(pe)}var U=[];function V(pe){var Re=j();b.ext_disjoint_timer_query.beginQueryEXT(wh,Re),U.push(Re),se(U.length-1,U.length,pe)}function ie(){b.ext_disjoint_timer_query.endQueryEXT(wh)}function le(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var me=[];function fe(){return me.pop()||new le}function xe(pe){me.push(pe)}var Ae=[];function se(pe,Re,te){var Pe=fe();Pe.startQueryIndex=pe,Pe.endQueryIndex=Re,Pe.sum=0,Pe.stats=te,Ae.push(Pe)}var be=[],N=[];function X(){var pe,Re,te=U.length;if(te!==0){N.length=Math.max(N.length,te+1),be.length=Math.max(be.length,te+1),be[0]=0,N[0]=0;var Pe=0;for(pe=0,Re=0;Re<U.length;++Re){var ne=U[Re];b.ext_disjoint_timer_query.getQueryObjectEXT(ne,jy)?(Pe+=b.ext_disjoint_timer_query.getQueryObjectEXT(ne,By),Q(ne)):U[pe++]=ne,be[Re+1]=Pe,N[Re+1]=pe}for(U.length=pe,pe=0,Re=0;Re<Ae.length;++Re){var we=Ae[Re],re=we.startQueryIndex,_e=we.endQueryIndex;we.sum+=be[_e]-be[re];var We=N[re],Ze=N[_e];Ze===We?(we.stats.gpuTime+=we.sum/1e6,xe(we)):(we.startQueryIndex=We,we.endQueryIndex=Ze,Ae[pe++]=we)}Ae.length=pe}}return{beginQuery:V,endQuery:ie,pushScopeStats:se,update:X,getNumPendingQueries:function(){return U.length},clear:function(){S.push.apply(S,U);for(var pe=0;pe<S.length;pe++)b.ext_disjoint_timer_query.deleteQueryEXT(S[pe]);U.length=0,S.length=0},restore:function(){U.length=0,S.length=0}}},Vy=16384,Xy=256,Yy=1024,Ky=34962,_h="webglcontextlost",Eh="webglcontextrestored",Mh=1,Qy=2,Zy=3;function Ah(l,b){for(var S=0;S<l.length;++S)if(l[S]===b)return S;return-1}function Jy(l){var b=oe(l);if(!b)return null;var S=b.gl,j=S.getContextAttributes(),Q=S.isContextLost(),U=Ce(S,b);if(!U)return null;var V=Bo(),ie=Uy(),le=U.extensions,me=Wy(S,le),fe=Pn(),xe=S.drawingBufferWidth,Ae=S.drawingBufferHeight,se={tick:0,time:0,viewportWidth:xe,viewportHeight:Ae,framebufferWidth:xe,framebufferHeight:Ae,drawingBufferWidth:xe,drawingBufferHeight:Ae,pixelRatio:b.pixelRatio},be={},N={elements:null,primitive:4,count:-1,offset:0,instances:-1},X=G2(S,le),pe=eg(S,ie,b,te),Re=hy(S,le,X,ie,pe);function te(Ve){return Re.destroyBuffer(Ve)}var Pe=hg(S,le,pe,ie),ne=vy(S,V,ie,b),we=Ug(S,le,X,function(){We.procs.poll()},se,ie,b),re=Bg(S,le,X,ie,b),_e=fy(S,le,X,we,re,ie),We=Hy(S,V,le,X,pe,Pe,we,_e,be,Re,ne,N,se,me,b),Ze=xy(S,_e,We.procs.poll,se,j,le,X),Te=We.next,ge=S.canvas,ee=[],Ke=[],at=[],qe=[b.onDestroy],ht=null;function et(){if(ee.length===0){me&&me.update(),ht=null;return}ht=un.next(et),Or();for(var Ve=ee.length-1;Ve>=0;--Ve){var pt=ee[Ve];pt&&pt(se,null,0)}S.flush(),me&&me.update()}function lt(){!ht&&ee.length>0&&(ht=un.next(et))}function Tt(){ht&&(un.cancel(et),ht=null)}function gr(Ve){Ve.preventDefault(),Q=!0,Tt(),Ke.forEach(function(pt){pt()})}function Ar(Ve){S.getError(),Q=!1,U.restore(),ne.restore(),pe.restore(),we.restore(),re.restore(),_e.restore(),Re.restore(),me&&me.restore(),We.procs.refresh(),lt(),at.forEach(function(pt){pt()})}ge&&(ge.addEventListener(_h,gr,!1),ge.addEventListener(Eh,Ar,!1));function mt(){ee.length=0,Tt(),ge&&(ge.removeEventListener(_h,gr),ge.removeEventListener(Eh,Ar)),ne.clear(),_e.clear(),re.clear(),we.clear(),Pe.clear(),pe.clear(),Re.clear(),me&&me.clear(),qe.forEach(function(Ve){Ve()})}function _r(Ve){x(!!Ve,"invalid args to regl({...})"),x.type(Ve,"object","invalid args to regl({...})");function pt(F){var I=t({},F);delete I.uniforms,delete I.attributes,delete I.context,delete I.vao,"stencil"in I&&I.stencil.op&&(I.stencil.opBack=I.stencil.opFront=I.stencil.op,delete I.stencil.op);function C(z){if(z in I){var M=I[z];delete I[z],Object.keys(M).forEach(function(k){I[z+"."+k]=M[k]})}}return C("blend"),C("depth"),C("cull"),C("stencil"),C("polygonOffset"),C("scissor"),C("sample"),"vao"in F&&(I.vao=F.vao),I}function wt(F,I){var C={},z={};return Object.keys(F).forEach(function(M){var k=F[M];if(zr.isDynamic(k)){z[M]=zr.unbox(k,M);return}else if(I&&Array.isArray(k)){for(var _=0;_<k.length;++_)if(zr.isDynamic(k[_])){z[M]=zr.unbox(k,M);return}}C[M]=k}),{dynamic:z,static:C}}var fr=wt(Ve.context||{},!0),Qn=wt(Ve.uniforms||{},!0),na=wt(Ve.attributes||{},!1),A=wt(pt(Ve),!1),W={gpuTime:0,cpuTime:0,count:0},$=We.compile(A,na,Qn,fr,W),Ne=$.draw,dt=$.batch,E=$.scope,y=[];function L(F){for(;y.length<F;)y.push(null);return y}function O(F,I){var C;if(Q&&x.raise("context lost"),typeof F=="function")return E.call(this,null,F,0);if(typeof I=="function")if(typeof F=="number")for(C=0;C<F;++C)E.call(this,null,I,C);else if(Array.isArray(F))for(C=0;C<F.length;++C)E.call(this,F[C],I,C);else return E.call(this,F,I,0);else if(typeof F=="number"){if(F>0)return dt.call(this,L(F|0),F|0)}else if(Array.isArray(F)){if(F.length)return dt.call(this,F,F.length)}else return Ne.call(this,F)}return t(O,{stats:W,destroy:function(){$.destroy()}})}var Wt=_e.setFBO=_r({framebuffer:zr.define.call(null,Mh,"framebuffer")});function yr(Ve,pt){var wt=0;We.procs.poll();var fr=pt.color;fr&&(S.clearColor(+fr[0]||0,+fr[1]||0,+fr[2]||0,+fr[3]||0),wt|=Vy),"depth"in pt&&(S.clearDepth(+pt.depth),wt|=Xy),"stencil"in pt&&(S.clearStencil(pt.stencil|0),wt|=Yy),x(!!wt,"called regl.clear with no buffer specified"),S.clear(wt)}function Er(Ve){if(x(typeof Ve=="object"&&Ve,"regl.clear() takes an object as input"),"framebuffer"in Ve)if(Ve.framebuffer&&Ve.framebuffer_reglType==="framebufferCube")for(var pt=0;pt<6;++pt)Wt(t({framebuffer:Ve.framebuffer.faces[pt]},Ve),yr);else Wt(Ve,yr);else yr(null,Ve)}function Mr(Ve){x.type(Ve,"function","regl.frame() callback must be a function"),ee.push(Ve);function pt(){var wt=Ah(ee,Ve);x(wt>=0,"cannot cancel a frame twice");function fr(){var Qn=Ah(ee,fr);ee[Qn]=ee[ee.length-1],ee.length-=1,ee.length<=0&&Tt()}ee[wt]=fr}return lt(),{cancel:pt}}function Lr(){var Ve=Te.viewport,pt=Te.scissor_box;Ve[0]=Ve[1]=pt[0]=pt[1]=0,se.viewportWidth=se.framebufferWidth=se.drawingBufferWidth=Ve[2]=pt[2]=S.drawingBufferWidth,se.viewportHeight=se.framebufferHeight=se.drawingBufferHeight=Ve[3]=pt[3]=S.drawingBufferHeight}function Or(){se.tick+=1,se.time=it(),Lr(),We.procs.poll()}function lr(){we.refresh(),Lr(),We.procs.refresh(),me&&me.update()}function it(){return(Pn()-fe)/1e3}lr();function Nr(Ve,pt){x.type(pt,"function","listener callback must be a function");var wt;switch(Ve){case"frame":return Mr(pt);case"lost":wt=Ke;break;case"restore":wt=at;break;case"destroy":wt=qe;break;default:x.raise("invalid event, must be one of frame,lost,restore,destroy")}return wt.push(pt),{cancel:function(){for(var fr=0;fr<wt.length;++fr)if(wt[fr]===pt){wt[fr]=wt[wt.length-1],wt.pop();return}}}}var Lt=t(_r,{clear:Er,prop:zr.define.bind(null,Mh),context:zr.define.bind(null,Qy),this:zr.define.bind(null,Zy),draw:_r({}),buffer:function(Ve){return pe.create(Ve,Ky,!1,!1)},elements:function(Ve){return Pe.create(Ve,!1)},texture:we.create2D,cube:we.createCube,renderbuffer:re.create,framebuffer:_e.create,framebufferCube:_e.createCube,vao:Re.createVAO,attributes:j,frame:Mr,on:Nr,limits:X,hasExtension:function(Ve){return X.extensions.indexOf(Ve.toLowerCase())>=0},read:Ze,destroy:mt,_gl:S,_refresh:lr,poll:function(){Or(),me&&me.update()},now:it,stats:ie});return b.onDone(null,Lt),Lt}return Jy})});var oa=de((r4,Wh)=>{"use strict";var io=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],so=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Zn=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],l0=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Qi=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],sl=e=>Math.hypot(e[0],e[1],e[2]),Mn=e=>{let t=sl(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function Ya(e,t){let r=e.length-1,n=Math.min(Math.max(t,0),1)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],h=[0,0,0];for(let p=0;p<3;p++)h[p]=.5*(2*s[p]+(-i[p]+c[p])*a+(2*i[p]-5*s[p]+4*c[p]-f[p])*a*a+(-i[p]+3*s[p]-3*c[p]+f[p])*a*a*a);return h}function fx(e,t){return Ya(e.map(r=>[r,0,0]),t)[0]}function ux(e,t,r,n){let o={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];o.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},o.restore=()=>{i=s.pop()};let c=(u,m)=>{let v=new Array(9);for(let d=0;d<3;d++)for(let g=0;g<3;g++)v[d*3+g]=u[d*3]*m[g]+u[d*3+1]*m[3+g]+u[d*3+2]*m[6+g];return v},f=u=>[i.r[0]*u[0]+i.r[1]*u[1]+i.r[2]*u[2],i.r[3]*u[0]+i.r[4]*u[1]+i.r[5]*u[2],i.r[6]*u[0]+i.r[7]*u[1]+i.r[8]*u[2]];o.translate=(u,m,v)=>{let d=f([u,m,v]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},o.scale=u=>{i.s*=u},o.rotateY=u=>{let m=Math.cos(u),v=Math.sin(u);i.r=c(i.r,[m,0,v,0,1,0,-v,0,m])},o.vert=(u,m,v)=>{let d=v||o.curMat,g=f(u),w=Mn(f(m));return e.push(g[0]*i.s+i.t[0],g[1]*i.s+i.t[1],g[2]*i.s+i.t[2]),t.push(w[0],w[1],w[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let h=u=>[e[u*3],e[u*3+1],e[u*3+2]],p=u=>[t[u*3],t[u*3+1],t[u*3+2]];return o.tri=(u,m,v)=>{let d=h(u),g=Qi(io(h(m),d),io(h(v),d)),w=so(so(p(u),p(m)),p(v));l0(g,w)<0?r.push(u,v,m):r.push(u,m,v)},o.box=(u,m,v,d,g,w,T)=>{let R=[[[u,m,v],[d,m,v],[u,g,v],[d,g,v],[0,0,-1]],[[d,m,w],[u,m,w],[d,g,w],[u,g,w],[0,0,1]],[[u,m,w],[u,m,v],[u,g,w],[u,g,v],[-1,0,0]],[[d,m,v],[d,m,w],[d,g,v],[d,g,w],[1,0,0]],[[u,g,v],[d,g,v],[u,g,w],[d,g,w],[0,1,0]],[[u,m,w],[d,m,w],[u,m,v],[d,m,v],[0,-1,0]]];for(let D of R){let q=o.vert(D[0],D[4],T),H=o.vert(D[1],D[4],T),ae=o.vert(D[2],D[4],T),ve=o.vert(D[3],D[4],T);o.tri(q,H,ae),o.tri(H,ve,ae)}},o.surface=(u,m,v,d)=>{d=d||{};let g=.001,w=q=>Math.min(1,Math.max(0,q)),T=[],R=[];for(let q=0;q<=m;q++){let H=[],ae=[];for(let ve=0;ve<=v;ve++){let J=q/m,Ee=ve/v,ue=u(J,Ee),Fe=Math.min(1-g,Math.max(g,J)),ze=d.wrapV?Ee:Math.min(1-g,Math.max(g,Ee)),Ie=io(u(w(Fe+g),ze),u(w(Fe-g),ze)),ye=d.wrapV?ze+g:w(ze+g),rt=d.wrapV?ze-g:w(ze-g),Xt=io(u(Fe,ye),u(Fe,rt)),ct=Qi(Ie,Xt);sl(ct)<1e-14&&(ct=d.inside?io(ue,d.inside(J,Ee)):[0,1,0]),ct=Mn(ct),d.inside&&l0(ct,io(ue,d.inside(J,Ee)))<0&&(ct=Zn(ct,-1));let Ft=d.mat?d.mat(J,Ee,ue):null;H.push(o.vert(ue,ct,Ft)),d.double&&ae.push(o.vert(ue,Zn(ct,-1),Ft))}T.push(H),R.push(ae)}let D=q=>{for(let H=0;H<m;H++)for(let ae=0;ae<v;ae++){let ve=q[H][ae],J=q[H+1][ae],Ee=q[H][ae+1],ue=q[H+1][ae+1];o.tri(ve,J,Ee),o.tri(J,ue,Ee)}};D(T),d.double&&D(R)},o.ellipsoid=(u,m,v,d,g)=>{g=g||{};let w=g.warp||null;o.surface((T,R)=>{let D=T*Math.PI,q=R*Math.PI*2,H=w?w(T,R):1;return[u[0]+m[0]*H*Math.sin(D)*Math.cos(q),u[1]+m[1]*H*Math.cos(D),u[2]+m[2]*H*Math.sin(D)*Math.sin(q)]},v||10,d||14,{wrapV:!0,inside:()=>u,mat:g.mat})},o.tube=(u,m,v,d,g)=>{g=g||{};let w=40,T=[],R=null;for(let H=0;H<=w;H++){let ae=H/w,ve=Ya(u,Math.max(0,ae-.01)),J=Ya(u,Math.min(1,ae+.01)),Ee=Mn(io(J,ve)),ue;if(R)ue=Mn(io(R,Zn(Ee,l0(R,Ee))));else{let Fe=Math.abs(Ee[1])<.9?[0,1,0]:[1,0,0];ue=Mn(Qi(Ee,Fe))}T.push({N:ue,B:Mn(Qi(Ee,ue))}),R=ue}let D=H=>{let ae=Math.min(Math.max(H,0),1)*w,ve=Math.min(w-1,Math.floor(ae)),J=ae-ve,Ee=T[ve],ue=T[ve+1];return{N:Mn(so(Zn(Ee.N,1-J),Zn(ue.N,J))),B:Mn(so(Zn(Ee.B,1-J),Zn(ue.B,J)))}},q=g.squash||[1,1];o.surface((H,ae)=>{let ve=Ya(u,H),J=D(H),Ee=m(H),ue=ae*Math.PI*2;return so(ve,so(Zn(J.N,Math.cos(ue)*Ee*q[0]),Zn(J.B,Math.sin(ue)*Ee*q[1])))},v||12,d||8,{wrapV:!0,inside:H=>Ya(u,H),mat:g.mat})},o.lathe=(u,m,v,d,g)=>{g=g||{};let w=[];for(let T=0;T<u.length-1;T++){let R=u[T+1][0]-u[T][0],D=u[T+1][1]-u[T][1];w.push(Mn([D,-R,0]))}for(let T=0;T<u.length-1;T++){let R=u[T],D=u[T+1],q=T===0||R[2]===1,H=T===u.length-2||D[2]===1,ae=q?w[T]:Mn(so(w[T-1],w[T])),ve=H?w[T]:Mn(so(w[T],w[T+1])),J=[],Ee=[];for(let ue=0;ue<=d;ue++){let Fe=ue/d*Math.PI*2,ze=Math.cos(Fe),Ie=Math.sin(Fe),ye=g.mat?g.mat(Fe,R[1]):null,rt=g.mat?g.mat(Fe,D[1]):null;J.push(o.vert([m+R[0]*ze,R[1],v+R[0]*Ie],[ae[0]*ze,ae[1],ae[0]*Ie],ye)),Ee.push(o.vert([m+D[0]*ze,D[1],v+D[0]*Ie],[ve[0]*ze,ve[1],ve[0]*Ie],rt))}for(let ue=0;ue<d;ue++)o.tri(J[ue],J[ue+1],Ee[ue]),o.tri(J[ue+1],Ee[ue+1],Ee[ue])}},o}Wh.exports={createBuilder:ux,catmull:Ya,curve1:fx,sub:io,add:so,mul:Zn,dot:l0,cross:Qi,norm:Mn,len:sl}});var Kh=de((n4,Yh)=>{"use strict";var{norm:f0,add:u0,mul:To,sub:hx,cross:Vh}=oa(),Xh=Math.PI*2,dx=(e,t,r)=>{let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)};function px(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function mx(e,t,r,n,o,a){let i=(u,m)=>[7,u*a,m];e.curMat=[0,0,0],e.box(t-a*1.36,n,r-a*1.36,t+a*1.36,n+.22,r+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,r,56,{mat:i});let s=n+.55,c=o-s,f=20,h=6,p=a*.075;return e.surface((u,m)=>{let v=s+u*c,d=a*(.96-.12*u),g=m*Xh,w=m*f%1,T=d-p*4*w*(1-w);return[t+T*Math.cos(g),v,r+T*Math.sin(g)]},10,f*h,{wrapV:!0,inside:u=>[t,s+u*c,r],mat:(u,m)=>[7,m*Xh*a,s+u*c]}),e.lathe([[a*.8,o-.02,1],[a*.9,o+.02],[a*.9,o+.07,1],[a*.82,o+.09,1],[a*.86,o+.13],[a*1.06,o+.2],[a*1.22,o+.28],[a*1.28,o+.33,1]],t,r,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,o+.33,r-a*1.42,t+a*1.42,o+.53,r+a*1.42),o+.53}function vx(e,t,r){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,r*.14,1],[t*1.04,r*.14,1],[t*1.04,r*.2],[t*.97,r*.26,1],[t*.95,r*.26,1],[t*.95,r*.8,1],[t*.98,r*.8,1],[t*1.03,r*.86],[t*1.05,r*.92,1],[t*1.05,r,1],[t*.5,r,1],[0,r]],0,0,72)}function gx(e,t,r,n,o){e.save(),e.translate(t,0,r),vx(e,n,o),e.restore()}function yx(e,t,r,n,o,a){let i=px(n),s=a?f0([a[0],0,a[1]]):null;e.save(),e.translate(t,0,r),e.scale(o||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let h=0;h<c;h++){let p=h>=c-2,u=h*2.399963+i()*.5,m=[Math.cos(u),0,Math.sin(u)],v=[-Math.sin(u),0,Math.cos(u)],d=h*.618%1,g=p?.06+i()*.06:.12+.62*d,w=1;if(s){let ct=m[0]*s[0]+m[2]*s[2];w=.25+.75*dx(-.7,.5,ct),g*=w}let T=p?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,R=p?1+i()*.2:.95+i()*.28,D=p?.055:.215+i()*.05,q=.04+i()*.05,H=[m[0]*q,f,m[2]*q],ae=[H[0]+m[0]*Math.sin(g)*T*.92,H[1]+Math.cos(g)*T,H[2]+m[2]*Math.sin(g)*T*.92],ve=[H[0]+m[0]*Math.sin(g*.5)*T*.45,H[1]+T*.5,H[2]+m[2]*Math.sin(g*.5)*T*.45];e.curMat=[4,0,0],e.tube([H,ve,ae],ct=>.02-.008*ct,8,7);let J=24,Ee=g*.9+.05,ue=g+(p?.12:(.95+.45*d)*(.35+.65*w)),Fe=[ae],ze=[],Ie=ae;for(let ct=0;ct<J;ct++){let Ft=ct/J,Gt=Ee+(ue-Ee)*Ft*Ft,ir=[m[0]*Math.sin(Gt),Math.cos(Gt),m[2]*Math.sin(Gt)];ze.push(ir),Ie=u0(Ie,To(ir,R/J)),Fe.push(Ie)}ze.push(ze[ze.length-1]);let ye=ct=>{let Ft=ct*J,Gt=Math.min(J-1,Math.floor(Ft)),ir=Ft-Gt;return u0(To(Fe[Gt],1-ir),To(Fe[Gt+1],ir))},rt=ct=>{let Ft=ct*J,Gt=Math.min(J,Math.floor(Ft)),ir=Math.min(J,Gt+1),Zt=Ft-Gt;return f0(u0(To(ze[Gt],1-Zt),To(ze[ir],Zt)))},Xt=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((ct,Ft)=>{let Gt=Ft*2-1,ir=ye(ct),Zt=rt(ct),In=Xt*ct,pr=u0(To(v,Math.cos(In)),To(Vh(Zt,v),Math.sin(In)));pr=f0(hx(pr,To(Zt,pr[0]*Zt[0]+pr[1]*Zt[1]+pr[2]*Zt[2])));let Ir=f0(Vh(pr,Zt)),At=D*Math.pow(Math.sin(Math.PI*Math.pow(ct,.72)),.85),De=.3*At*Math.abs(Gt)+.012*Math.sin(ct*40+Gt*2)*Math.abs(Gt)*(p?0:1),ft=-.1*At*Gt*Gt*Gt*Gt,Je=De+ft;return[ir[0]+pr[0]*Gt*At+Ir[0]*Je,ir[1]+pr[1]*Gt*At+Ir[1]*Je,ir[2]+pr[2]*Gt*At+Ir[2]*Je]},14,8,{double:!0,mat:(ct,Ft)=>[2,Ft*2-1,ct]})}e.restore()}Yh.exports={addFlutedColumn:mx,addStatue:gx,addPlant:yx}});var aa=de((o4,ed)=>{"use strict";var ce={xc:7,r:2.5,spring:4.7};ce.x0=ce.xc-ce.r;ce.x1=ce.xc+ce.r;ce.top=ce.spring+ce.r;var Qr=.06,tr=.1,Qh=.08,h0=ce.r,d0=[ce.x0+h0/3,ce.x0+2*h0/3,ce.xc+h0/3,ce.xc+2*h0/3],Ka=.28,cl=[.95,1.65,2.35,3.05,3.75],Zh=[1.05,1.8],Zi=[8,0,0],mn=[0,0,0];function An(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function Qa(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function p0(e,t,r,n,o,a,i=48,s=0,c=Math.PI){let f=(h,p,u)=>[ce.xc+p*Math.cos(h),ce.spring+p*Math.sin(h),u];for(let h=0;h<i;h++){let p=s+(c-s)*h/i,u=s+(c-s)*(h+1)/i,m=(p+u)/2;Qa(e,f(p,t,o),f(u,t,o),f(u,r,o),f(p,r,o),[0,0,1],a),Qa(e,f(p,r,n),f(u,r,n),f(u,t,n),f(p,t,n),[0,0,-1],a),Qa(e,f(p,t,n),f(u,t,n),f(u,t,o),f(p,t,o),[-Math.cos(m),-Math.sin(m),0],a),Qa(e,f(u,r,n),f(p,r,n),f(p,r,o),f(u,r,o),[Math.cos(m),Math.sin(m),0],a)}}function xx(e){let n=a=>[ce.xc+ce.r*Math.cos(a),ce.spring+ce.r*Math.sin(a)],o=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?ce.r/Math.abs(i):1/0,f=s>1e-6?(8-ce.spring)/s:1/0,h=Math.min(c,f);return[Math.min(ce.x1,Math.max(ce.x0,ce.xc+i*h)),Math.min(8,ce.spring+s*h)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),h=o(i),p=o(s);for(let[m,v]of[[.35,1],[-.35,-1]])Qa(e,[c[0],c[1],m],[f[0],f[1],m],[p[0],p[1],m],[h[0],h[1],m],[0,0,v],mn);let u=(i+s)/2;Qa(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],mn)}}function bx(e){An(e,-.35,0,-.35,ce.x0,8,.35,mn),An(e,ce.x1,0,-.35,14+.35,8,.35,mn),xx(e),Jh(e)}function Jh(e){An(e,ce.x0-.32,.3,.35,ce.x0,ce.spring,.35+.07,mn),An(e,ce.x1,.3,.35,ce.x1+.32,ce.spring,.35+.07,mn),An(e,ce.x0-.32-.05,0,.35,ce.x0,.3,.35+.07+.04,mn),An(e,ce.x1,0,.35,ce.x1+.32+.05,.3,.35+.07+.04,mn),An(e,ce.x0-.32-.06,ce.spring-.12,.35,ce.x0,ce.spring,.35+.07+.05,mn),An(e,ce.x1,ce.spring-.12,.35,ce.x1+.32+.06,ce.spring,.35+.07+.05,mn),p0(e,ce.r,ce.r+.32,.35,.35+.07,mn),p0(e,ce.r+.32,ce.r+.32+.06,.35,.35+.07+.03,mn),An(e,ce.xc-.22,ce.top-.08,.35,ce.xc+.22,ce.top+.32+.12,.35+.07+.06,mn)}function wx(e,t){t=t||"all";let r=t==="all",n=r||t==="fixed",o=-Qh/2,a=Qh/2,i=(u,m,v,d,g=0)=>An(e,u-g,m,o,v+g,d,a,Zi),s=u=>ce.spring+Math.sqrt(Math.max(0,ce.r*ce.r-(u-ce.xc)*(u-ce.xc))),c=t==="right"?ce.xc:ce.x0,f=t==="left"?ce.xc:ce.x1,h=u=>r||t==="left"&&u<ce.xc||t==="right"&&u>ce.xc,p=r?null:ce.spring-.06;if(n){i(ce.x0,0,ce.x0+tr,ce.spring),i(ce.x1-tr,0,ce.x1,ce.spring),p0(e,ce.r-tr,ce.r,o,a,Zi,64),i(ce.x0,0,ce.x1,.05),i(ce.x0,ce.spring-.06,ce.x1,ce.spring+.06);for(let u of Zh)p0(e,u-Qr/2,u+Qr/2,o,a,Zi,48)}if(r){i(ce.x0,0,ce.x1,Ka),i(ce.xc-tr/2,0,ce.xc+tr/2,ce.top-tr*.5);for(let u of d0)i(u-Qr/2,Ka,u+Qr/2,s(u)-tr*.5);for(let u of cl)i(ce.x0,u-Qr/2,ce.x1,u+Qr/2)}else if(t==="fixed"){i(ce.xc-tr/2,ce.spring+.06,ce.xc+tr/2,ce.top-tr*.5);for(let u of d0)i(u-Qr/2,ce.spring+.06,u+Qr/2,s(u)-tr*.5)}else{let u=t==="left"?ce.x0+tr:ce.x1-tr;i(Math.min(u,u+(t==="left"?tr*.8:-tr*.8)),.05,Math.max(u,u+(t==="left"?tr*.8:-tr*.8)),p),i(c,.05,f,Ka),i(c,p-.07,f,p);let m=t==="left"?ce.xc-tr/2:ce.xc;i(m,.05,m+tr/2,p);for(let v of d0)h(v)&&i(v-Qr/2,Ka,v+Qr/2,p-.07);for(let v of cl)i(c,v-Qr/2,f,v+Qr/2)}for(let u of[-1,1]){let m=ce.xc+u*.16;h(m)&&(An(e,m-.02,1.05,a,m+.02,1.13,a+.06,Zi),An(e,m-(u>0?0:.14),1.07,a+.05,m+(u>0?.14:0),1.11,a+.08,Zi))}}function _x(e){e=e||"all";let t=[],r=0,{x0:n,x1:o,xc:a,r:i,spring:s}=ce;if(e!=="fixed"){let f=e==="right"?a:n,h=e==="left"?a:o;if(t.push([f,0,r],[h,0,r],[h,s,r],[f,0,r],[h,s,r],[f,s,r]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let h=Math.PI*f/c,p=Math.PI*(f+1)/c;t.push([a,s,r],[a+i*Math.cos(h),s+i*Math.sin(h),r],[a+i*Math.cos(p),s+i*Math.sin(p),r])}return t}var Ot=e=>e.toFixed(4);function Ex(){let e=d0.map(n=>`vb = max(vb, barCover(abs(q.x - ${Ot(n)}), ${Ot(Qr/2)}, soft));`).join(`
		`),t=cl.map(n=>`hb = max(hb, barCover(abs(q.y - ${Ot(n)}), ${Ot(Qr/2)}, soft));`).join(`
		`),r=Zh.map(n=>`ab = max(ab, barCover(abs(rr - ${Ot(n)}), ${Ot(Qr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Ot(ce.x0)} - soft, ${Ot(ce.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Ot(ce.x1)} - soft, ${Ot(ce.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Ot(ce.xc)}, ${Ot(ce.spring)}));
		float arch = q.y < ${Ot(ce.spring)} ? 1.0 : 1.0 - smoothstep(${Ot(ce.r)} - soft, ${Ot(ce.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Ot(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Ot(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Ot(ce.xc)}, ${Ot(ce.spring)}));
		float vb = barCover(abs(q.x - ${Ot(ce.xc)}), ${Ot(tr/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Ot(ce.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Ot(Ka)} - soft, ${Ot(Ka)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Ot(ce.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${r}
		ab = q.y > ${Ot(ce.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Ot(ce.x0+tr/2)}), ${Ot(tr/2)}, soft),
			barCover(abs(q.x - ${Ot(ce.x1-tr/2)}), ${Ot(tr/2)}, soft));
		frame = q.y < ${Ot(ce.spring)} ? frame : barCover(abs(rr - ${Ot(ce.r-tr/2)}), ${Ot(tr/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}ed.exports={addEntranceWall:bx,addSurround:Jh,addFrames:wx,glassPanes:_x,doorLightGLSL:Ex,DOOR:ce,WALL:.35}});var Ja=de((a4,id)=>{"use strict";var sa=1.1583333333333334,ca=(13.05-8*.16)/9,fl=sa+.16,ul=ca+.16,co=14/2-7.75/2,Tn=15,Ji=co+7.75,So=Tn+13.05,vn=.3,lo={y:8+.18,inset:.15},ia={y:8+.36,inset:vn},hl=8+.2,m0=8+.62,dl=8+.9,pl=.016,od=.28,ad=.66,Mx=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>r/t)})(),Ax=[9,0,0],Fr=[10,0,0];function Za(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function Zr(e,t,r,n,o,a,i){Za(e,[t,a,r],[n,a,r],[n,a,o],[t,a,o],[0,-1,0],i)}function ll(e,t,r,n,o,a,i,s){Za(e,[t,a,r],[n,a,r],[n,i,r],[t,i,r],[0,0,1],s),Za(e,[n,a,o],[t,a,o],[t,i,o],[n,i,o],[0,0,-1],s),Za(e,[t,a,o],[t,a,r],[t,i,r],[t,i,o],[1,0,0],s),Za(e,[n,a,r],[n,a,o],[n,i,o],[n,i,r],[-1,0,0],s)}function td(e,t,r,n,o){Zr(e,t[0],t[1],t[2],r[1],n,o),Zr(e,t[0],r[3],t[2],t[3],n,o),Zr(e,t[0],r[1],r[0],r[3],n,o),Zr(e,r[2],r[1],t[2],r[3],n,o)}var rd=e=>co+e*fl,nd=e=>Tn+e*ul;function Tx(e,t,r=48){let n=[co-vn,Tn-vn,Ji+vn,So+vn],o=(f,h)=>[f[0]+h,f[1]+h,f[2]-h,f[3]-h],a=o(n,lo.inset),i=o(n,ia.inset);Zr(e,0,0,14,n[1],8,t),Zr(e,0,n[3],14,r,8,t),Zr(e,0,n[1],n[0],n[3],8,t),Zr(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],Fr),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,Fr),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],Fr),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],Fr),ll(e,...n.slice(0,2),...n.slice(2),8,lo.y,Fr),td(e,n,a,lo.y,Fr),ll(e,...a.slice(0,2),...a.slice(2),lo.y,ia.y,Fr),td(e,a,i,ia.y,Fr);for(let f=1;f<6;f++){let h=rd(f)-.16;e.box(h,hl,Tn,h+.16,ia.y,So,Fr)}for(let f=1;f<9;f++){let h=nd(f)-.16;e.box(co,hl,h,Ji,ia.y,h+.16,Fr)}for(let f=0;f<9;f++)for(let h=0;h<6;h++){let p=rd(h),u=nd(f);ll(e,p,u,p+sa,u+ca,ia.y,dl,Fr),Zr(e,p,u,p+sa,u+ca,dl,Ax),Sx(e,p+sa/2,u+ca/2,sa/2,ca/2)}}function Sx(e,t,r,n,o){let a=m0,i=pl;Zr(e,t-n,r-i,t+n,r+i,a,Fr),Zr(e,t-i,r-o,t+i,r+o,a,Fr);for(let s of[1,-1]){let c=Math.hypot(n,o),f=n/c,h=s*o/c,p=-h*i,u=f*i;Za(e,[t-f*c+p,a,r-h*c+u],[t+f*c+p,a,r+h*c+u],[t+f*c-p,a,r+h*c-u],[t-f*c-p,a,r-h*c-u],[0,-1,0],Fr)}for(let s of[od,ad]){let c=s*n,f=s*o;Zr(e,t-c-i,r-f-i,t+c+i,r-f+i,a,Fr),Zr(e,t-c-i,r+f-i,t+c+i,r+f+i,a,Fr),Zr(e,t-c-i,r-f+i,t-c+i,r+f-i,a,Fr),Zr(e,t+c-i,r-f+i,t+c+i,r+f-i,a,Fr)}}var ut=e=>e.toFixed(4);function kx(){return`
	const vec3 SKY_SUN = vec3(${Mx.map(ut).join(", ")});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${ut(co)}, ${ut(Tn)});
		vec2 pitch = vec2(${ut(fl)}, ${ut(ul)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${ut(5)} || cell.y > ${ut(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${ut(sa)}, ${ut(ca)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${ut(pl)} - soft, ${ut(pl)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${ut(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${ut(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${ut(lo.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${ut(hl)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${ut(ia.y)} - p.y) / L.y)).xz;
		float tG = (${ut(m0)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${ut(dl)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${ut(co-vn)}, ${ut(Tn-vn)}, ${ut(Ji+vn)}, ${ut(So+vn)}), soft)
		           * rectOpen(q1, vec4(${ut(co-vn+lo.inset)}, ${ut(Tn-vn+lo.inset)}, ${ut(Ji+vn-lo.inset)}, ${ut(So+vn-lo.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${ut(co)}, ${ut(Tn)});
		vec2 pitch = vec2(${ut(fl)}, ${ut(ul)});
		vec2 paneHalf = vec2(${ut(sa/2)}, ${ut(ca/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${ut(od)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${ut(ad)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${ut(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${ut(m0)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${ut(co)}, ${ut(Tn)}, ${ut(Ji)}, ${ut(So)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${ut(Tn-3)}, ${ut(Tn+2)}, p.z)
		        * (1.0 - smoothstep(${ut(So-2)}, ${ut(So+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${ut(7.75/2)}, ${ut(14/2)}, abs(p.x - ${ut(14/2)}));
		return z * x;
	}`}id.exports={addSkylight:Tx,skylightGLSL:kx,Z_START:Tn,Z_END:So,GLASS_Y:m0,HEIGHT:8}});var gn=de((i4,ud)=>{"use strict";var ti=aa(),yl=8,rr=.35,ke={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:yl},sd=(ke.z1-ke.z0)/2,ml=ke.crown-ke.spring,gl=(ml*ml+sd*sd)/(2*ml),xl=ke.crown-gl;function ei(e){let t=e-ke.zc;return xl+Math.sqrt(Math.max(0,gl*gl-t*t))}var Ye={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Dn=Array.from({length:Ye.count},(e,t)=>Ye.first+t*Ye.pitch),ld=Dn.slice(1).map(e=>e-Ye.pitch/2),Lx=[Dn[0],Dn[2],Dn[4]],g0=[Dn[1],Dn[3]],on={r:1.3,sill:.62,spring:3.3},qt=[0,0,0],es=[11,0,0],ko=[10,0,0],ts=[8,0,0];function Cr(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function an(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function rs(e,t){let{u0:r,u1:n,w0:o,w1:a,top:i,holes:s,mat:c}=t,f=new Set([r,n]);for(let d of s){f.add(d.u0),f.add(d.u1);let g=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let w=1;w<g;w++)f.add(d.u0+(d.u1-d.u0)*w/g)}for(let d of t.cuts||[])f.add(d);let h=t.topStep||.5;for(let d=r;d<n;d+=h)f.add(d);let p=[...f].filter(d=>d>=r-1e-9&&d<=n+1e-9).sort((d,g)=>d-g),u=(d,g)=>d.bot?d.bot(g):d.bottom,m=(d,g)=>{let w=i(d),T=g.map(q=>[Math.max(0,u(q,d)),Math.min(q.head(d),w)]).filter(q=>q[1]>q[0]).sort((q,H)=>q[0]-H[0]),R=[],D=0;for(let q of T)q[0]>D+1e-6&&R.push([D,q[0]]),D=Math.max(D,q[1]);return w>D+1e-6&&R.push([D,w]),R},v=(d,g,w)=>[d,g,w];for(let d=0;d<p.length-1;d++){let g=p[d],w=p[d+1],T=(g+w)/2,R=s.filter(J=>T>J.u0&&T<J.u1),D=R.length?Math.max(g,Math.max(...R.map(J=>J.u0))+1e-7):g,q=R.length?Math.min(w,Math.min(...R.map(J=>J.u1))-1e-7):w,H=m(D,R),ae=m(q,R),ve=Math.min(H.length,ae.length);for(let J=0;J<ve;J++){let[Ee,ue]=H[J],[Fe,ze]=ae[J];ue-Ee<1e-6&&ze-Fe<1e-6||(Cr(e,v(g,Ee,a),v(w,Fe,a),v(w,ze,a),v(g,ue,a),[0,0,1],c),t.frontOnly||Cr(e,v(w,Fe,o),v(g,Ee,o),v(g,ue,o),v(w,ze,o),[0,0,-1],c))}}t.noEnds||(Cr(e,v(r,0,o),v(r,0,a),v(r,i(r),a),v(r,i(r),o),[-1,0,0],c),Cr(e,v(n,0,a),v(n,0,o),v(n,i(n),o),v(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let g=d.mat||t.revealMat||c,w=Math.max(0,u(d,d.u0+1e-7)),T=Math.max(0,u(d,d.u1-1e-7)),R=Math.min(d.head(d.u0+1e-7),i(d.u0)),D=Math.min(d.head(d.u1-1e-7),i(d.u1));R>w+1e-6&&Cr(e,v(d.u0,w,a),v(d.u0,w,o),v(d.u0,R,o),v(d.u0,R,a),[1,0,0],g),D>T+1e-6&&Cr(e,v(d.u1,T,o),v(d.u1,T,a),v(d.u1,D,a),v(d.u1,D,o),[-1,0,0],g);let q=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let H=0;H<q;H++){let ae=d.u0+(d.u1-d.u0)*H/q,ve=d.u0+(d.u1-d.u0)*(H+1)/q,J=Math.max(ae,d.u0+1e-7),Ee=Math.min(ve,d.u1-1e-7),ue=Math.min(d.head(J),i(ae)),Fe=Math.min(d.head(Ee),i(ve));if(!(ue>=i(ae)-1e-6&&Fe>=i(ve)-1e-6)){let ye=ve-ae,rt=Fe-ue,Xt=Math.hypot(ye,rt)||1;Cr(e,v(ae,ue,o),v(ve,Fe,o),v(ve,Fe,a),v(ae,ue,a),[rt/Xt,-ye/Xt,0],g)}let ze=u(d,J),Ie=u(d,Ee);if(ze>1e-6||Ie>1e-6){let ye=ve-ae,rt=Ie-ze,Xt=Math.hypot(ye,rt)||1;Cr(e,v(ve,Ie,o),v(ae,ze,o),v(ae,ze,a),v(ve,Ie,a),[-rt/Xt,ye/Xt,0],g)}}}}var vl=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function Cx(e,t){let r=on.r,n=on.sill,o=on.spring,a=ke.z0,i=24,s=(m,v,d)=>[t+Math.cos(m)*v,d,a-Math.sin(m)*v];for(let m=0;m<i;m++){let v=Math.PI*m/i,d=Math.PI*(m+1)/i,g=[-Math.cos(v),0,Math.sin(v)],w=[-Math.cos(d),0,Math.sin(d)],T=[e.vert(s(v,r,n),g,qt),e.vert(s(d,r,n),w,qt),e.vert(s(d,r,o),w,qt),e.vert(s(v,r,o),g,qt)];e.tri(T[0],T[1],T[2]),e.tri(T[0],T[2],T[3])}let c=12,f=(m,v)=>[t+Math.cos(m)*Math.cos(v)*r,o+Math.sin(v)*r,a-Math.sin(m)*Math.cos(v)*r],h=(m,v)=>[-Math.cos(m)*Math.cos(v),-Math.sin(v),Math.sin(m)*Math.cos(v)];for(let m=0;m<i;m++)for(let v=0;v<c;v++){let d=Math.PI*m/i,g=Math.PI*(m+1)/i,w=Math.PI/2*v/c,T=Math.PI/2*(v+1)/c,R=[e.vert(f(d,w),h(d,w),ko),e.vert(f(g,w),h(g,w),ko),e.vert(f(g,T),h(g,T),ko),e.vert(f(d,T),h(d,T),ko)];e.tri(R[0],R[1],R[2]),e.tri(R[0],R[2],R[3])}for(let m=1;m<8;m++){let v=Math.PI*m/8,d=[];for(let g=0;g<=10;g++){let w=Math.PI/2*g/10*.97;d.push(f(v,w).map((T,R)=>T-h(v,w)[R]*.02))}e.tube(d,g=>.035*(1-g*.6),12,6,{mat:()=>ko})}let p=e.vert([t,n,a],[0,1,0],qt);for(let m=0;m<i;m++){let v=Math.PI*m/i,d=Math.PI*(m+1)/i;e.tri(p,e.vert(s(v,r,n),[0,1,0],qt),e.vert(s(d,r,n),[0,1,0],qt))}an(e,t-r-.12,n-.1,a,t+r+.12,n+.02,a+.12,qt),an(e,t-r-.16,n-.2,a,t+r+.16,n-.1,a+.07,qt);let u=.16;for(let m=0;m<i;m++){let v=Math.PI*m/i,d=Math.PI*(m+1)/i,g=(w,T,R)=>[t+Math.cos(w)*T,o+Math.sin(w)*T,R];Cr(e,g(v,r,a+.05),g(d,r,a+.05),g(d,r+u,a+.05),g(v,r+u,a+.05),[0,0,1],qt),Cr(e,g(v,r+u,a),g(d,r+u,a),g(d,r+u,a+.05),g(v,r+u,a+.05),[Math.cos((v+d)/2),Math.sin((v+d)/2),0],qt),Cr(e,g(v,r,a),g(d,r,a),g(d,r,a+.05),g(v,r,a+.05),[-Math.cos((v+d)/2),-Math.sin((v+d)/2),0],qt)}for(let m of[-1,1]){let v=t+m*r,d=t+m*(r+u);an(e,v,n,a,d,o,a+.05,qt),an(e,v-m*.02,o-.12,a,d+m*.06,o,a+.09,qt)}an(e,t-.11,o+r-.04,a,t+.11,o+r+u+.1,a+.09,qt),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>qt})}var Rx=on.sill+.4,Ix=ke.z0-.62;function zx(e){Cr(e,[14,0,ke.z0-rr],[ke.x1+rr,0,ke.z0-rr],[ke.x1+rr,0,ke.z1+rr],[14,0,ke.z1+rr],[0,1,0],qt),e.curMat=es,rs(e,{u0:14+rr,u1:ke.x1+2*rr,w0:ke.z0-2*rr,w1:ke.z0,top:()=>ke.spring,holes:g0.map(f=>({u0:f-on.r,u1:f+on.r,bottom:on.sill,head:vl(f,on.r,on.spring),noReveal:!0})),mat:es,cuts:[ke.x1]});for(let f of g0)Cx(e,f);e.save(),e.translate(0,0,ke.z1),e.rotateY(Math.PI),e.translate(-(ke.x1+2*rr),0,-2*rr);let t=f=>ke.x1+2*rr-f;rs(e,{u0:t(ke.x1+2*rr),u1:t(13.65),w0:0,w1:2*rr,top:()=>ke.spring,holes:Dn.map(f=>({u0:t(f+Ye.halfW),u1:t(f-Ye.halfW),bottom:Ye.sill,head:vl(t(f),Ye.halfW,Ye.spring)})),mat:es,revealMat:qt}),e.restore(),e.save(),e.translate(ke.x1,0,0),e.rotateY(-Math.PI/2);let r=ti.DOOR,n=ke.zc,o=r.r;rs(e,{u0:ke.z0-2*rr,u1:ke.z1+2*rr,w0:-2*rr,w1:0,top:f=>f<ke.z0||f>ke.z1?ke.spring:ei(f),topStep:.15,holes:[{u0:n-o,u1:n+o,bottom:0,head:vl(n,o,r.spring)}],mat:es,revealMat:qt}),e.restore(),e.save(),e.translate(14+rr,0,0),e.rotateY(-Math.PI/2),rs(e,{u0:ke.z0,u1:ke.z1,w0:-0,w1:2*rr,top:()=>yl,topStep:.15,holes:[{u0:ke.z0,u1:ke.z1,bottom:0,head:f=>ei(f)}],mat:es,revealMat:qt}),e.restore();let a=14+rr,i=Math.ceil((ke.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let h=a+(ke.x1-a)*f/i,p=[];for(let u=0;u<=s;u++){let m=ke.z0+(ke.z1-ke.z0)*u/s,v=ei(m),d=[0,xl-v,ke.zc-m],g=Math.hypot(d[1],d[2]);p.push(e.vert([h,v,m],[0,d[1]/g,d[2]/g],ko))}c.push(p)}for(let f=0;f<i;f++)for(let h=0;h<s;h++)e.tri(c[f][h],c[f+1][h],c[f][h+1]),e.tri(c[f+1][h],c[f+1][h+1],c[f][h+1])}function cd(e,t,r,n){let a=[];for(let i=0;i<=32;i++){let s=ke.z0+(ke.z1-ke.z0)*i/32,c=ei(s),f=xl-c,h=ke.zc-s,p=Math.hypot(f,h),u=[c+f/p*n,s+h/p*n];a.push({y:c,z:s,iy:u[0],iz:u[1],n:[0,f/p,h/p]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Cr(e,[t-r,s.iy,s.iz],[t+r,s.iy,s.iz],[t+r,c.iy,c.iz],[t-r,c.iy,c.iz],s.n,qt),Cr(e,[t-r,s.y,s.z],[t-r,s.iy,s.iz],[t-r,c.iy,c.iz],[t-r,c.y,c.z],[-1,0,0],qt),Cr(e,[t+r,s.iy,s.iz],[t+r,s.y,s.z],[t+r,c.y,c.z],[t+r,c.iy,c.iz],[1,0,0],qt)}}function v0(e,t,r,n){let i=r,s=r+n*.16;an(e,t-.28,0,i,t+.28,ke.spring-.3,s,qt),an(e,t-.28-.06,0,i,t+.28+.06,.32,r+n*(.16+.05),qt),an(e,t-.28-.05,ke.spring-.3,i,t+.28+.05,ke.spring-.1,r+n*(.16+.05),qt),an(e,t-.28-.1,ke.spring-.1,i,t+.28+.1,ke.spring,r+n*(.16+.1),qt)}function Px(e,t){let r=ei(ke.zc),n=[[0,r-.13,1],[.05,r-.125],[.12,r-.1],[.16,r-.06,1],[.22,r-.05],[.3,r-.075],[.4,r-.06],[.48,r-.03,1],[.55,r-.035],[.7,r-.025],[.82,r-.012,1],[.95,r+.03]];e.lathe(n,t,ke.zc,48,{mat:()=>ko});for(let o=0;o<8;o++){let a=o*Math.PI/4,i=t+Math.cos(a)*.32,s=ke.zc+Math.sin(a)*.32;e.save(),e.translate(i,r-.07,s),e.rotateY(-a),e.curMat=ko,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function Ox(e){e.curMat=qt;for(let[t,r]of[[ke.z0,1],[ke.z1,-1]])an(e,14.35,ke.spring-.12,t,ke.x1,ke.spring,t+r*.1,qt),an(e,14.35,ke.spring-.04,t,ke.x1,ke.spring+.05,t+r*.18,qt);for(let[t,r]of[[ke.z0,1],[ke.z1,-1]])an(e,14.35,0,t,ke.x1,.42,t+r*.12,qt),an(e,14.35,.42,t,ke.x1,.5,t+r*.07,qt);for(let t of ld)cd(e,t,.24,.16),v0(e,t,ke.z0,1),v0(e,t,ke.z1,-1);for(let t of[14.35+.28,ke.x1-.28])cd(e,t,.28,.22),v0(e,t,ke.z0,1),v0(e,t,ke.z1,-1);for(let t of Dn)Px(e,t)}function Nx(e){let t=ke.z1+rr,r=t-.04,n=t+.04,o=(s,c,f,h)=>an(e,s,c,r,f,h,n,ts),a=Ye.halfW,i=(s,c,f,h,p,u)=>{let m=(v,d,g)=>[s+d*Math.cos(v),Ye.spring+d*Math.sin(v),g];for(let v=0;v<u;v++){let d=h+(p-h)*v/u,g=h+(p-h)*(v+1)/u;Cr(e,m(d,c,r),m(g,c,r),m(g,f,r),m(d,f,r),[0,0,-1],ts),Cr(e,m(d,f,n),m(g,f,n),m(g,c,n),m(d,c,n),[0,0,1],ts)}};for(let s of Dn){let c=s-a,f=s+a;o(c,Ye.sill,c+.07,Ye.spring),o(f-.07,Ye.sill,f,Ye.spring),o(c,Ye.sill,f,Ye.sill+.07),o(c,Ye.spring-.04,f,Ye.spring+.04);for(let p of[-.5,0,.5])o(s+p*a-.022,Ye.sill,s+p*a+.022,Ye.spring);let h=6;for(let p=1;p<h;p++){let u=Ye.sill+(Ye.spring-Ye.sill)*p/h;o(c,u-.02,f,u+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let p=1;p<6;p++){let u=Math.PI*p/6,m=Math.cos(u),v=Math.sin(u),d=.02,g=(w,T)=>[s+m*w-v*d*T,Ye.spring+v*w+m*d*T];Cr(e,[...g(.44,-1),r],[...g(a-.05,-1),r],[...g(a-.05,1),r],[...g(.44,1),r],[0,0,-1],ts),Cr(e,[...g(.44,1),n],[...g(a-.05,1),n],[...g(a-.05,-1),n],[...g(.44,-1),n],[0,0,1],ts)}}}function Fx(){let e=[],t=ke.z1+rr;for(let r of Dn){let n=r-Ye.halfW,o=r+Ye.halfW;e.push([n,Ye.sill,t],[o,Ye.sill,t],[o,Ye.spring,t],[n,Ye.sill,t],[o,Ye.spring,t],[n,Ye.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([r,Ye.spring,t],[r+Ye.halfW*Math.cos(i),Ye.spring+Ye.halfW*Math.sin(i),t],[r+Ye.halfW*Math.cos(s),Ye.spring+Ye.halfW*Math.sin(s),t])}}return e}function fd(e,t){e.save(),e.translate(ke.x1+rr,0,ke.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function Gx(e){fd(e,()=>{ti.addSurround(e),ti.addFrames(e,"fixed")})}function Dx(e){return ti.glassPanes(e||"fixed").map(([r,n,o])=>[ke.x1+rr-o,n,ke.zc-7+r])}function $x(e){zx(e),Ox(e),Nx(e),Gx(e),e.curMat=[0,0,0]}var qx={x:ke.x1+rr,zLo:ke.zc-ti.DOOR.r,zHi:ke.zc+ti.DOOR.r},Et=e=>e.toFixed(4);function Hx(){return`
	const vec3 WIN_SKY = vec3(0.0, 0.58, 0.81);

	float winBar(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the window wall is at (x, y) on its plane, 0..1
	float winOpen(vec2 q, float soft) {
		float k = floor((q.x - ${Et(Ye.first)}) / ${Et(Ye.pitch)} + 0.5);
		if (k < 0.0 || k > ${Et(Ye.count-1)}) return 0.0;
		float dx = q.x - (${Et(Ye.first)} + k * ${Et(Ye.pitch)});
		float side = 1.0 - smoothstep(${Et(Ye.halfW)} - soft, ${Et(Ye.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Et(Ye.sill)} - soft, ${Et(Ye.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Et(Ye.spring)}));
		float head = q.y < ${Et(Ye.spring)} ? 1.0 : 1.0 - smoothstep(${Et(Ye.halfW)} - soft, ${Et(Ye.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Et(Ye.halfW*.5)}), 0.022, soft));
		float rowH = ${Et((Ye.spring-Ye.sill)/6)};
		float ry = (q.y - ${Et(Ye.sill)}) / rowH;
		cover = max(cover, q.y < ${Et(Ye.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Et(Ye.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Et(ke.x0)} || p.z < ${Et(ke.z0-.1)} || p.z > ${Et(ke.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Et(ke.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Et(ke.z1+2*rr)} - p.z) / WIN_SKY.z;
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
		${g0.map(e=>`{ float d = abs(p.x - ${Et(e)}); if (d < best) { best = d; lamp = vec3(${Et(e)}, ${Et(on.spring+.55)}, ${Et(ke.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Et(ke.z0+1.6)} || p.z < ${Et(ke.z0-on.r-.1)} || p.x < ${Et(ke.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Et(on.r)}, ${Et(on.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Et(ke.x0-1)}) return 0.0;
		float inC = smoothstep(${Et(ke.z0-1.5)}, ${Et(ke.z0)}, p.z) * smoothstep(${Et(ke.x0-1)}, ${Et(ke.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Et(ke.z0)}, ${Et(ke.z1)}, p.z);
		return inC * near;
	}`}ud.exports={wallWithHoles:rs,windowLightGLSL:Hx,addWing:$x,windowGlass:Fx,farDoorGlass:Dx,atFarDoor:fd,FAR_DOOR:qx,vaultY:ei,C:ke,NICHE_X:g0,NICHE:on,NICHE_PLINTH_TOP:Rx,NICHE_STATUE_Z:Ix,WIN:Ye,winCentres:Dn,piers:ld,PAINTING_X:Lx,HEIGHT:yl}});var Jn=de((s4,pd)=>{"use strict";var bl=gn(),Kt=8,oi=.35,la=14,ni=4,Ge={x0:la+oi,x1:la+oi+2*ni,z0:5.9-ni,z1:5.9+ni,zc:5.9,cx:la+oi+ni,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Kt},oculus:3.3};Ge.domeTop=Ge.dome.base+Ge.dome.r;var ai={spokes:16,ringE:[.42,.95],bar:.035},Tr={sxz:1.32,sy:1.6,yaw:.6};Tr.crownC=[Ge.cx,.4+3.4*Tr.sy,Ge.zc];Tr.crownR=[2.3*Tr.sxz,1.9*Tr.sy,2.3*Tr.sxz];Tr.trunkR=.26*Tr.sxz;Tr.trunkTop=.4+2.2*Tr.sy;var hd={inner:1.05,outer:1.62,seat:.48,soil:.4},b0=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(r=>r/t)})(),Rr=[0,0,0],ri=[11,0,0],y0=[10,0,0],x0=[9,0,0],Ux=[5,0,0],wl=[3,0,0];function fo(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function Jr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}var Bx=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function jx(e){e.save(),e.translate(la+oi,0,0),e.rotateY(-Math.PI/2),bl.wallWithHoles(e,{u0:0,u1:bl.C.z0,w0:0,w1:2*oi,top:()=>Kt,holes:[{u0:Ge.zc-Ge.arch.r,u1:Ge.zc+Ge.arch.r,bottom:0,head:Bx(Ge.zc,Ge.arch.r,Ge.arch.spring),step:.05}],mat:ri,revealMat:Rr,topStep:1}),e.restore();let t=la-oi;for(let[i,s]of[[0,Ge.zc-Ge.arch.r],[Ge.zc+Ge.arch.r,bl.C.z0]])Jr(e,t-.12,0,i,t,.42,s,Rr),Jr(e,t-.07,.42,i,t,.5,s,Rr);let r=t,n=.24,o=40,a=(i,s,c)=>[c,Ge.arch.spring+Math.sin(i)*s,Ge.zc+Math.cos(i)*s];for(let i=0;i<o;i++){let s=Math.PI*i/o,c=Math.PI*(i+1)/o;fo(e,a(s,Ge.arch.r,r-.07),a(c,Ge.arch.r,r-.07),a(c,Ge.arch.r+n,r-.07),a(s,Ge.arch.r+n,r-.07),[-1,0,0],Rr),fo(e,a(s,Ge.arch.r+n,r),a(c,Ge.arch.r+n,r),a(c,Ge.arch.r+n,r-.07),a(s,Ge.arch.r+n,r-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Rr),fo(e,a(s,Ge.arch.r,r),a(c,Ge.arch.r,r),a(c,Ge.arch.r,r-.07),a(s,Ge.arch.r,r-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Rr)}Jr(e,r-.12,Ge.arch.spring+Ge.arch.r-.06,Ge.zc-.17,r,Ge.arch.spring+Ge.arch.r+n+.16,Ge.zc+.17,Rr);for(let i of[-1,1]){let s=Ge.zc+i*Ge.arch.r,c=Ge.zc+i*(Ge.arch.r+n);Jr(e,r-.07,0,s,r,Ge.arch.spring,c,Rr),Jr(e,r-.13,Ge.arch.spring-.16,s-i*.03,r,Ge.arch.spring,c+i*.08,Rr),Jr(e,r-.12,0,s-i*.03,r,.5,c+i*.06,Rr)}}function Wx(e){let{x0:t,x1:r,z0:n,z1:o}=Ge;fo(e,[la,0,n],[r,0,n],[r,0,o],[la,0,o],[0,1,0],Rr),e.curMat=ri,fo(e,[r,0,n],[r,0,o],[r,Kt,o],[r,Kt,n],[-1,0,0],ri),fo(e,[t,0,n],[r,0,n],[r,Kt,n],[t,Kt,n],[0,0,1],ri),fo(e,[r,0,o],[t,0,o],[t,Kt,o],[r,Kt,o],[0,0,-1],ri),fo(e,[t,0,o],[t,0,n],[t,Kt,n],[t,Kt,o],[1,0,0],ri),Jr(e,r-.12,0,n,r,.42,o,Rr),Jr(e,t,0,n,r,.42,n+.12,Rr),Jr(e,t,0,o-.12,r,.42,o,Rr),Jr(e,r-.2,Kt-.3,n,r,Kt,o,Rr),Jr(e,t,Kt-.3,n,r,Kt,n+.2,Rr),Jr(e,t,Kt-.3,o-.2,r,Kt,o,Rr),Jr(e,t,Kt-.3,n,t+.2,Kt,o,Rr);let a=Ge.dome.r,i=48,s=[];for(let w=0;w<=i;w++){let T=Math.PI*2*w/i;s.push([Ge.cx+Math.cos(T)*a,Ge.zc+Math.sin(T)*a])}let c=w=>{let T=Math.abs(Math.cos(w)),R=Math.abs(Math.sin(w));return Math.min(ni/Math.max(T,1e-6),ni/Math.max(R,1e-6))};for(let w=0;w<i;w++){let T=Math.PI*2*w/i,R=Math.PI*2*(w+1)/i,D=c(T),q=c(R),H=[Ge.cx+Math.cos(T)*D,Kt,Ge.zc+Math.sin(T)*D],ae=[Ge.cx+Math.cos(R)*q,Kt,Ge.zc+Math.sin(R)*q];fo(e,[s[w][0],Kt,s[w][1]],[s[w+1][0],Kt,s[w+1][1]],ae,H,[0,-1,0],y0)}e.lathe([[a+.02,Kt-.18,1],[a-.12,Kt-.18,1],[a-.12,Kt-.06,1],[a-.05,Kt,1],[a,Kt+.02]],Ge.cx,Ge.zc,i,{mat:()=>Rr});let f=16,h=(w,T,R)=>[Ge.cx+Math.cos(w)*Math.cos(T)*R,Ge.dome.base+Math.sin(T)*R,Ge.zc+Math.sin(w)*Math.cos(T)*R],p=Math.PI/2;for(let w=0;w<i;w++)for(let T=0;T<f;T++){let R=Math.PI*2*w/i,D=Math.PI*2*(w+1)/i,q=p*T/f,H=p*(T+1)/f,ae=(J,Ee)=>[-Math.cos(J)*Math.cos(Ee),-Math.sin(Ee),-Math.sin(J)*Math.cos(Ee)],ve=[e.vert(h(R,q,a),ae(R,q),x0),e.vert(h(D,q,a),ae(D,q),x0),e.vert(h(D,H,a),ae(D,H),x0),e.vert(h(R,H,a),ae(R,H),x0)];e.tri(ve[0],ve[1],ve[2]),e.tri(ve[0],ve[2],ve[3])}for(let w=0;w<ai.spokes;w++){let T=Math.PI*2*w/ai.spokes,R=[];for(let D=0;D<=14;D++)R.push(h(T,(p-.06)*D/14,a-.04));e.tube(R,()=>.04,20,6,{mat:()=>y0})}for(let w of ai.ringE){let T=Math.cos(w)*(a-.04),R=Ge.dome.base+Math.sin(w)*(a-.04),D=[];for(let q=0;q<=72;q++){let H=Math.PI*2*q/72;D.push([Ge.cx+Math.cos(H)*T,R,Ge.zc+Math.sin(H)*T])}e.tube(D,()=>.035,72,6,{mat:()=>y0})}e.ellipsoid([Ge.cx,Ge.dome.base+a-.06,Ge.zc],[.16,.08,.16],6,12,{mat:()=>y0});let u=.46,m=.55,v=.12,d=(w,T,R,D)=>{Jr(e,w,u-.08,T,R,u,D,wl);let q=R-w>D-T?[w+.25,R-.25]:[w+.06,R-.06],H=R-w>D-T?[T+.06,D-.06]:[T+.25,D-.25];Jr(e,q[0],0,H[0],q[1],u-.08,H[1],wl)};d(r-v-m,n+1.1,r-v,o-1.1),d(t+1,n+v,r-1.1,n+v+m),d(t+1,o-v-m,r-1.1,o-v);let g=hd;e.lathe([[g.outer,0,1],[g.outer,g.seat-.1,1],[g.outer+.07,g.seat-.07,1],[g.outer+.07,g.seat,1],[g.inner-.05,g.seat,1],[g.inner-.05,g.seat-.06,1],[g.inner,g.seat-.08,1],[g.inner,g.soil]],Ge.cx,Ge.zc,64,{mat:()=>wl}),e.lathe([[g.inner,g.soil,1],[0,g.soil+.03]],Ge.cx,Ge.zc,48,{mat:()=>Ux})}function Vx(e){jx(e),Wx(e),e.curMat=[0,0,0]}var Ht=e=>e.toFixed(4);function dd(){let e=Ge.dome.r,t=ai.ringE.map(r=>Math.cos(r)*e);return`
	const vec3 SHAFT = vec3(${Ht(b0[0])}, ${Ht(b0[1])}, ${Ht(b0[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Ht(Ge.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Ht(Ge.cx)}, ${Ht(Ge.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Ht(e-.15)} - soft, ${Ht(e-.15)} + soft, d);
		float hw = ${Ht(ai.bar)};
		float cover = 0.0;
		${t.map(r=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Ht(r)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Ht(Math.PI*2/ai.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Ht(Tr.crownC[0])}, ${Ht(Tr.crownC[1])}, ${Ht(Tr.crownC[2])});
		vec3 r = vec3(${Ht(Tr.crownR[0])}, ${Ht(Tr.crownR[1])}, ${Ht(Tr.crownR[2])});
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
		float tt = (${Ht(Tr.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Ht(Ge.cx)}, ${Ht(Ge.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Ht(Tr.trunkR*.7)}, ${Ht(Tr.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function Xx(){return`
	${dd()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Ht(Ge.x0-.75)} || p.z < ${Ht(Ge.z0-.5)} || p.z > ${Ht(Ge.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Ht(Ge.x0-1.5)} || p.z < ${Ht(Ge.z0-1.5)} || p.z > ${Ht(Ge.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Ht(Ge.x0-1.2)}, ${Ht(Ge.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Ht(Ge.cx)}, ${Ht(Ge.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}pd.exports={addAlcove:Vx,alcoveLightGLSL:Xx,oculusGLSL:dd,A:Ge,BENCH:hd,SHAFT:b0,TREE:Tr}});var Md=de((c4,Ed)=>{"use strict";var Yx=oa(),{addFlutedColumn:md,addStatue:Kx,addPlant:Qx}=Kh(),vd=aa(),Zx=Ja(),$n=gn(),Jx=Jn(),Mt=14,ur=$n.C.hallEnd+.35,Vt=8,Ut=.35,_l=1.15,El=1.15,Ml=[18,29,40],eb=[[[0,0],[0,ur]],[[Mt,ur],[Mt,0]],[[0,0],[Mt,0]],[[Mt,ur],[0,ur]]],bd=[];for(let e of Ml)for(let t of[1.25,Mt-1.25]){let r=_l/2,n=El/2;bd.push([[t-r,e-n],[t+r,e-n]],[[t+r,e-n],[t+r,e+n]],[[t+r,e+n],[t-r,e+n]],[[t-r,e+n],[t-r,e-n]])}var w0=12,wd=2.95,_d=.62,M0=wd+_d,_0=[{file:"venus.bin",x:1.85,z:ur-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Mt-2.1,z:ur-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:$n.NICHE_X[0],z:$n.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:$n.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:$n.NICHE_X[1],z:$n.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:$n.NICHE_PLINTH_TOP,mat:3}],tb={x0:Ut,x1:3.15,z0:3.6,z1:8.2,top:1},gd=.8,A0=1.17,os=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{os.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),os.push({x:Mt-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function Al(e,t,r,n){return[[[e-r,t-n],[e+r,t-n]],[[e+r,t-n],[e+r,t+n]],[[e+r,t+n],[e-r,t+n]],[[e-r,t+n],[e-r,t-n]]]}var T0=[];for(let e of[-1,1])T0.push(...Al(Mt/2+e*M0,w0,.85,.85));for(let e of _0.filter(t=>t.pedestal))T0.push(...Al(e.x,e.z,A0*1.1,A0*1.1));for(let e of os)T0.push(...Al(e.x,e.z,.42,.42));var rb=eb.concat(bd,T0);function nb(e){let r=new Map,n=(o,a,i)=>{let s=o+":"+a;r.has(s)||r.set(s,[]);let c=r.get(s);c.includes(i)||c.push(i)};for(let o of e){let a=Math.floor(Math.min(o[0][0],o[1][0])/4)-1,i=Math.floor(Math.max(o[0][0],o[1][0])/4)+1,s=Math.floor(Math.min(o[0][1],o[1][1])/4)-1,c=Math.floor(Math.max(o[0][1],o[1][1])/4)+1;for(let f=a;f<=i;f++)for(let h=s;h<=c;h++)n(f,h,o)}return{get(o,a){let i=Math.floor(o/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let h=-1;h<=1;h++){let p=r.get(i+f+":"+(s+h));p&&c.push(...p)}return[...new Set(c)]}}}var E0=[],xr={curMat:[0,0,0]};function Tl(e,t,r,n,o,a,i){let s=e.length/3;e.push(...r,...n,...o,...a),t.push(...i,...i,...i,...i);let c=xr.curMat;return E0.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function Pt(e,t,r,n,o,a,i,s,c){let f=(h,p,u,m,v)=>{r.push(...Tl(e,t,h,p,u,m,v))};f([n,o,a],[i,o,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,o,c],[n,o,c],[i,s,c],[n,s,c],[0,0,1]),f([n,o,c],[n,o,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,o,a],[i,o,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,o,c],[i,o,c],[n,o,a],[i,o,a],[0,-1,0])}function ii(e,t,r,n,o){let a=xr,i=a.vert(e,o),s=a.vert(t,o),c=a.vert(r,o),f=a.vert(n,o);a.tri(i,s,c),a.tri(s,f,c)}function yd(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,h=Math.cos(c),p=Math.sin(c),u=Math.cos(f),m=Math.sin(f),v=[e+r*h,t+r*p],d=[e+r*u,t+r*m],g=[e+n*h,t+n*p],w=[e+n*u,t+n*m];ii([v[0],v[1],o],[d[0],d[1],o],[g[0],g[1],o],[w[0],w[1],o],[0,0,-1]),ii([v[0],v[1],a],[d[0],d[1],a],[g[0],g[1],a],[w[0],w[1],a],[0,0,1]);let T=(c+f)/2;ii([v[0],v[1],o],[d[0],d[1],o],[v[0],v[1],a],[d[0],d[1],a],[-Math.cos(T),-Math.sin(T),0]),ii([g[0],g[1],o],[w[0],w[1],o],[g[0],g[1],a],[w[0],w[1],a],[Math.cos(T),Math.sin(T),0])}}function ob(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,h=e+r*Math.cos(c),p=t+r*Math.sin(c),u=e+r*Math.cos(f),m=t+r*Math.sin(f);ii([h,p,o],[u,m,o],[h,n,o],[u,n,o],[0,0,-1]),ii([h,p,a],[u,m,a],[h,n,a],[u,n,a],[0,0,1])}}function ab(e,t,r,n){let o=Mt/2,a=wd,i=3,s=a+.42,c=s+.15,f=_d,h=M0,p=5.98,u=n-.45,m=n+.45,v=64,d=md(xr,o-h,n,0,p,f);md(xr,o+h,n,0,p,f),xr.curMat=[0,0,0],yd(o,i,a,s,u,m,v),yd(o,i,s,c,u-.07,m+.07,v),ob(o,i,c,d+.05,u,m,v);for(let w of[-1,1]){let T=o+w*(c-.02),R=o+w*h;Pt(e,t,r,Math.min(T,R),i,u,Math.max(T,R),d+.05,m)}for(let w of[-1,1]){let T=o+w*(a-.05),R=o+w*(a+.85);Pt(e,t,r,Math.min(T,R),i-.16,n-.6,Math.max(T,R),i,n+.6)}let g=h+f*1.42+.45;Pt(e,t,r,o-g,d,n-.7,o+g,d+.44,n+.7),Pt(e,t,r,o-g+.12,d+.44,n-.62,o+g-.12,d+.7,n+.62),Pt(e,t,r,o-g-.1,d+.7,n-.84,o+g+.1,d+.84,n+.84),Pt(e,t,r,o-g-.22,d+.84,n-.96,o+g+.22,d+1,n+.96),Pt(e,t,r,o-.3,i+a-.1,n-.56,o+.3,d,n+.56)}function xd(e,t,r,n,o){Pt(e,t,r,n-.72,0,o-.72,n+.72,.2,o+.72),Pt(e,t,r,n-.58,.2,o-.58,n+.58,.4,o+.58),Pt(e,t,r,n-_l/2,.4,o-El/2,n+_l/2,Vt-1.35,o+El/2),Pt(e,t,r,n-.67,.42,o-.67,n+.67,.62,o+.67),Pt(e,t,r,n-.67,Vt-1.58,o-.67,n+.67,Vt-1.35,o+.67),Pt(e,t,r,n-.82,Vt-1.35,o-.82,n+.82,Vt-1.05,o+.82),Pt(e,t,r,n-.66,Vt-1.05,o-.66,n+.66,Vt-.78,o+.66),Pt(e,t,r,n-.92,Vt-.78,o-.92,n+.92,Vt-.55,o+.92),Pt(e,t,r,n-.78,Vt-.55,o-.78,n+.78,Vt-.3,o+.78),Pt(e,t,r,n-.92,Vt-.3,o-.92,n+.92,Vt-.1,o+.92)}function ns(e,t,r,n,o){o==="left"?(Pt(e,t,r,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Pt(e,t,r,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Pt(e,t,r,Mt-.14,1,n-3.8/2,Mt+.08,5.7,n+3.8/2),Pt(e,t,r,Mt-.18,1+.18,n-3.8/2+.18,Mt+.08+.04,5.7-.18,n+3.8/2-.18))}function ib(e,t,r,n){Pt(e,t,r,.65,Vt-.16,n-1.65,.65+.22,Vt,n+1.65),Pt(e,t,r,Mt-.65-.22,Vt-.16,n-1.65,Mt-.65,Vt,n+1.65),Pt(e,t,r,.65,Vt-.16,n-1.65,Mt-.65,Vt,n-1.43),Pt(e,t,r,.65,Vt-.16,n+1.43,Mt-.65,Vt,n+1.65),r.push(...Tl(e,t,[.65+.22,Vt-.16,n-1.43],[Mt-.65-.22,Vt-.16,n-1.43],[.65+.22,Vt-.16,n+1.43],[Mt-.65-.22,Vt-.16,n+1.43],[0,-1,0]))}Ed.exports=function(){let e=[],t=[],r=[];E0=[],xr=Yx.createBuilder(e,t,r,E0),r.push(...Tl(e,t,[0,0,0],[Mt,0,0],[0,0,ur],[Mt,0,ur],[0,1,0])),Zx.addSkylight(xr,[0,0,0],ur),xr.curMat=[0,0,0],Pt(e,t,r,-Ut,0,0,Ut,Vt,ur),Pt(e,t,r,Mt-Ut,0,$n.C.z1,Mt+Ut,Vt,ur-Ut),Pt(e,t,r,Mt-Ut-.12,0,$n.C.z1+2*Ut,Mt-Ut,.42,ur-Ut),Pt(e,t,r,Mt-Ut-.07,.42,$n.C.z1+2*Ut,Mt-Ut,.5,ur-Ut),Pt(e,t,r,Ut,0,0,Ut+.12,.42,ur-Ut),Pt(e,t,r,Ut,.42,0,Ut+.07,.5,ur-Ut),Pt(e,t,r,Ut,0,ur-Ut-.12,Mt-Ut,.42,ur-Ut),Pt(e,t,r,Ut,.42,ur-Ut-.07,Mt-Ut,.5,ur-Ut),vd.addEntranceWall(xr),vd.addFrames(xr),xr.curMat=[0,0,0],Pt(e,t,r,-Ut,0,ur-Ut,Mt+Ut,Vt,ur+Ut),ab(e,t,r,w0);for(let c of Ml)xd(e,t,r,1.25,c),xd(e,t,r,Mt-1.25,c);ns(e,t,r,22,"left"),ns(e,t,r,25,"right"),ns(e,t,r,33,"left"),ns(e,t,r,36,"right"),ns(e,t,r,43,"left");let n=[4,9,34,39,44,49];for(let c of n)ib(e,t,r,c);$n.addWing(xr),xr.curMat=[0,0,0];for(let c of _0.filter(f=>f.pedestal))Kx(xr,c.x,c.z,A0,gd);{let c=tb;xr.curMat=[0,0,0],xr.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),xr.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),xr.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),xr.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}Jx.addAlcove(xr);for(let c of os)Qx(xr,c.x,c.z,c.seed,1,c.away);xr.curMat=[0,0,0];let o=[[[Mt,ur-.35],[0,ur-.35]],[[0,3],[0,10]],[[Mt,15],[Mt,22]],[[0,24],[0,31]],[[Mt,33],[Mt,40]],[[0,41],[0,46]]],a=nb(rb),i=(c,f)=>{let h=0,p=1/0;return o.forEach((u,m)=>{let v=(u[0][0]+u[1][0])/2,d=(u[0][1]+u[1][1])/2,g=Math.hypot(c-v,f-d);g<p&&(p=g,h=m)}),h},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:o,lights:s,statues:_0,occluders:[...Ml.flatMap(c=>[[1.25,c,.78],[Mt-1.25,c,.78]]),[Mt/2-M0,w0,.86],[Mt/2+M0,w0,.86],..._0.filter(c=>c.pedestal).map(c=>[c.x,c.z,A0*1.12]),...os.map(c=>[c.x,c.z,.34])],pedestalTop:gd,mat:E0,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:r}}});var Sl=de((l4,Ad)=>{"use strict";var{doorLightGLSL:sb}=aa(),{skylightGLSL:cb}=Ja(),{windowLightGLSL:lb,C:qn}=gn(),{alcoveLightGLSL:fb}=Jn(),Hn=e=>e.toFixed(4),ub=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>(r/t).toFixed(4)).join(", ")})();Ad.exports=(e,t,r)=>{let o=(t.occluders||[]).slice(0,24).map(([u,m,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${u.toFixed(3)}, ${m.toFixed(3)}), ${v.toFixed(3)}));`).join(`
      `),a={c:[0,0,0,0],d:[1,0,0,0]},i=-1,s=[],c=u=>{let m=u&&u.tick!==void 0?u.tick:0;if(m!==i||s.length===0){i=m;let v=t.viewer||[7,2,20];for(s=t.lights.filter(d=>d.c[3]>.5).map(d=>({l:d,d:Math.hypot(d.c[0]-v[0],d.c[2]-v[2])})).sort((d,g)=>d.d-g.d).slice(0,8).map(d=>d.l);s.length<8;)s.push(a)}return s},f={},h="",p="";for(let u=0;u<8;u++)f["lightC"+u]=m=>c(m)[u].c,f["lightD"+u]=m=>c(m)[u].d,h+="uniform vec4 lightC"+u+", lightD"+u+`;
`,p+="pic += pictureLight(lightC"+u+", lightD"+u+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;

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

    ${sb()}

    ${cb()}

    ${lb()}

    ${fb()}

    vec3 skyAbove(vec3 dir) {
      float h = clamp(dir.y, 0.0, 1.0);
      vec3 col = mix(vec3(0.80, 0.86, 0.92), vec3(0.42, 0.60, 0.86), smoothstep(0.55, 1.0, h));
      vec2 cp = dir.xz / max(dir.y, 0.2) * 1.6;
      float c = smoothstep(0.50, 0.78, fbm(cp * 0.7 + vec2(3.1, 7.4)));
      return mix(col, vec3(0.97, 0.96, 0.93), c * 0.65);
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
        step(abs(v_pos.z - ${Hn(qn.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
      if (detail) {
        float mott = fbm(uv * 0.9);
        float cloud = fbm(uv * 2.6 + 4.0);
        wallMaterial = mix(plaster, plasterShade, smoothstep(0.35, 0.75, mott) * 0.55);
        wallMaterial *= 0.95 + 0.10 * cloud;
      }

      // Marble: warped veins with a cloudy body
      vec3 marbleMaterial = marbleBase;
      if (detail) {
        vec2 m = uv * 1.3;
        float warp = fbm(m * 0.8);
        float v1 = abs(sin((m.x * 0.8 + m.y * 1.7) * 2.2 + warp * 7.0));
        float v2 = abs(sin((m.x * 1.9 - m.y * 0.6) * 4.5 + warp * 11.0));
        float line1 = 1.0 - smoothstep(0.0, 0.10, v1);
        float line2 = 1.0 - smoothstep(0.0, 0.05, v2);
        marbleMaterial = marbleBase * (0.90 + 0.18 * warp);
        marbleMaterial = mix(marbleMaterial, marbleVein, clamp(line1 * 0.50 + line2 * 0.25, 0.0, 1.0));
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

      // Light from the bar above each painting
      float pic = 0.0;
      ${p}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Hn(qn.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

      // Walls fall into shadow towards the ceiling
      light *= mix(0.80, 1.0, min(1.0, fadeFar(4.5, 8.0, v_pos.y) + isFloor));

      light += (1.0 - smoothstep(0.0, 3.5, v_pos.y)) * 0.03;

      // carved forms: a soft side light and a little fill so the
      // folds and features read without the statue standing out
      vec3 sculptKey = normalize(vec3(0.45, 0.75, -0.50));
      float sculpt = max(dot(N, sculptKey), 0.0);
      light = mix(light, 0.42 + sculpt * 0.42 + max(dot(N, V), 0.0) * 0.12, isStatue);
      light += max(dot(N, V), 0.0) * 0.10 * isLeaf;

      // dim the room as a whole; the picture lights stay strong
      light *= ${.6.toFixed(3)};

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
          float through = doorLight(v_pos, vec3(${ub}));
          spill = through * 1.6 * (1.0 - smoothstep(4.0, 11.0, inZ) * 0.5);
        }
        spill += exp(-inZ / 2.4) * 0.24 * (1.0 - isCeiling * 0.5);
      }
      light += spill * 0.55;

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
      light += sun * 0.85 + glow * 0.05 * (1.0 - isCeiling);
      // the coffers glow with daylight, brighter towards the glass
      light += isCream * (0.18 + 0.42 * smoothstep(8.0, 8.62, v_pos.y)) * glow;

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
      light += aSun * 1.8 + aGlow * 0.5 * (1.0 - 0.3 * isCeiling);
      light += isCream * aGlow * 0.18 * smoothstep(8.0, 10.5, v_pos.y);
      sun = max(sun, aSun);

      float winL = windowLight(v_pos, N);
      float cg = corridorGlow(v_pos);
      light += winL * 0.48 + cg * 0.16 * (1.0 - 0.4 * isCeiling);

      // the little lamps in the statue niches
      float nl = nicheLight(v_pos, N);
      light += nl * 1.1;

      // soft contact shadows where pillars, statues and plants meet the floor
      if (isFloor > 0.5) {
        float ao = 1.0;
        ${o}
        // and a little darker along the foot of the walls
        float wallD = v_pos.x - 0.35;
        if (v_pos.x < 14.0) wallD = min(wallD, ${Hn(qn.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Hn(qn.z0)} || v_pos.z > ${Hn(qn.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Hn(qn.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Hn(qn.z0)}), ${Hn(qn.z1)} - v_pos.z), ${Hn(qn.x1)} - v_pos.x);
        ao *= mix(0.72, 1.0, smoothstep(0.0, 0.55, wallD));
        light *= ao;
      }

      vec3 pictureTint = vec3(1.0, 0.93, 0.80);
      vec3 spillTint = mix(vec3(1.0), vec3(1.10, 0.95, 0.78), clamp(spill * 2.0, 0.0, 1.0));
      spillTint = mix(spillTint, vec3(1.08, 1.0, 0.86), clamp(sun * 1.5, 0.0, 1.0));
      vec3 finalColour = material * (vec3(light) * spillTint + pictureTint * pic * ${.78.toFixed(3)} * (1.0 - 0.5 * isFloor));

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
        if (v_pos.z < ${Hn(qn.z0+.3)} && v_pos.x > ${Hn(qn.x0)}) {
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
      finalColour = mix(finalColour * 0.72, finalColour, atmosphere);

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
        finalColour = finalColour * 1.08 + vec3(1.0, 0.92, 0.78) * (pow(sd, 48.0) * 1.8 + pow(sd, 6.0) * 0.3);
      }

      float alpha = 1.0;
      if (isFloor > 0.5) {
        if (yScale < 0.0) discard;
        float cosV = clamp(V.y, 0.0, 1.0);
        // a high polish: a clear reflection even looking down, a mirror at grazing angles
        float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
        refl *= mix(0.72, 1.0, checker);
        refl *= 1.0 - 0.5 * grout;
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:f,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements)})}});var Sd=de((f4,Td)=>{"strict mode";var hb="https://api.artic.edu/api/v1/artworks/search",db=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,pb="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",mb="&fields=image_id,title,artist_title",vb={low:400,mid:843,high:1686};Td.exports={fetchList:async function(e,t){let r=hb+pb+mb+`&from=${e}&size=${t}`;return(await fetch(r).then(o=>o.json())).data.filter(o=>o.image_id)},fetchImage:async function(e,t){let r=db(e,vb[t]),n=await fetch(r).then(o=>o.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var Cd=de((u4,Ld)=>{"use strict";var gb=tl(),yb=Mo(),xb=e=>"images/web/"+e.slug+(yb.isPhone?"-1024":"")+".webp";async function kd(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Ld.exports={fetchList:async function(e,t){return gb.slice(e,e+t).map((r,n)=>({...r,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await kd(xb(e))}catch(r){t=await kd("images/"+e.file)}return{title:e.title,image:t}}}});var Id=de((h4,Rd)=>{"strict mode";Rd.exports={default:"local",artic:Sd(),local:Cd()}});var Ll=de((d4,Pd)=>{"strict mode";var fa=document.createElement("canvas"),kl=fa.width=fa.height=1024,Lo=fa.getContext("2d");Lo.mozImageSmoothingEnabled=!1;Lo.webkitImageSmoothingEnabled=!1;Lo.font="32px Verdana";Lo.textBaseline="bottom";Lo.fillStyle="#aaa";function zd(e,t,r,n){var o=t,a,i=0,s=0,c=t.split(" "),f,h;for(f=h=c.length;e.measureText(o).width>r&&f>1;){f--,o=a="";for(var p=0;p<h;p++)p<f?(o+=c[p],p+1<f&&(o+=" ")):(a+=c[p],p+1<h&&(a+=" "))}return n.push(o),s=e.measureText(o).width,a&&(i=zd(e,a,r,n),i>s&&(s=i)),s}Pd.exports={init(e,t,r=kl){var n=[];zd(Lo,t,Math.min(r*kl,kl),n),Lo.clearRect(0,0,fa.width,fa.height);for(var o=0;o<n.length;o++)Lo.fillText(n[o],0,fa.height-(Math.max(n.length,3)-o)*32);return e({data:fa,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Fd=de((p4,Nd)=>{"strict mode";var Cl=Id(),bb=new URLSearchParams(window.location.search).get("api"),Od=Cl[bb]||Cl[Cl.default],wb=Ll(),Rl={},ci=[],_b=2;function Eb(e){return(!navigator.connection||navigator.connection.downlink<_b)&&(e=e=="high"?"mid":"low"),e}var Mb=Mo(),si=document.createElement("canvas");si.width=si.height=Mb.isPhone?1024:2048;var Pl=si.getContext("2d");Pl.imageSmoothingEnabled=!0;Pl.imageSmoothingQuality="high";var Il=!1,Ab=e=>[(ci.pop()||e.texture)([[[200,200,200]]]),t=>(ci.pop()||e.texture)([[[0,0,0,0]]]),1];async function zl(e,t,r){Il===!1&&(Il=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,o;try{let a=await Od.fetchImage(t,Eb(r));o=a.title,n=await createImageBitmap(a.image),Pl.drawImage(n,0,0,si.width,si.height)}catch(a){return console.error(a),r=="high"?await zl(e,t,"low"):Ab(e)}return[(ci.pop()||e.texture)({data:si,min:"mipmap",mipmap:"nice",aniso:Il,flipY:!0}),a=>wb.init(ci.pop()||e.texture,o,a),n.width/n.height]}Nd.exports={fetch:(e,t=10,r="low",n,o)=>{let a=Object.keys(Rl).length;Od.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(Rl[s.image_id]){--t===0&&o();return}Rl[s.image_id]=s,zl(e,s,r).then(([c,f,h])=>{n({...s,tex:c,textGen:f,aspect:h}),--t===0&&o()})})})},load:(e,t,r="low")=>{t.tex||t.loading||(t.loading=!0,zl(e,t,r).then(([n,o])=>{t.loading=!1,t.tex=n,t.text=o(t.width)}))},unload:e=>{e.tex&&(ci.push(e.tex),e.tex=void 0),e.text&&(ci.push(e.text),e.text=void 0)}}});var Dd=de((m4,Gd)=>{Gd.exports=Tb;function Tb(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var qd=de((v4,$d)=>{$d.exports=Sb;function Sb(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Ud=de((g4,Hd)=>{Hd.exports=kb;function kb(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Ol=de((y4,Bd)=>{Bd.exports=Lb;function Lb(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Wd=de((x4,jd)=>{jd.exports=Cb;function Cb(e,t){if(e===t){var r=t[1],n=t[2],o=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=o,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var Xd=de((b4,Vd)=>{Vd.exports=Rb;function Rb(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],m=t[11],v=t[12],d=t[13],g=t[14],w=t[15],T=r*s-n*i,R=r*c-o*i,D=r*f-a*i,q=n*c-o*s,H=n*f-a*s,ae=o*f-a*c,ve=h*d-p*v,J=h*g-u*v,Ee=h*w-m*v,ue=p*g-u*d,Fe=p*w-m*d,ze=u*w-m*g,Ie=T*ze-R*Fe+D*ue+q*Ee-H*J+ae*ve;return Ie?(Ie=1/Ie,e[0]=(s*ze-c*Fe+f*ue)*Ie,e[1]=(o*Fe-n*ze-a*ue)*Ie,e[2]=(d*ae-g*H+w*q)*Ie,e[3]=(u*H-p*ae-m*q)*Ie,e[4]=(c*Ee-i*ze-f*J)*Ie,e[5]=(r*ze-o*Ee+a*J)*Ie,e[6]=(g*D-v*ae-w*R)*Ie,e[7]=(h*ae-u*D+m*R)*Ie,e[8]=(i*Fe-s*Ee+f*ve)*Ie,e[9]=(n*Ee-r*Fe-a*ve)*Ie,e[10]=(v*H-d*D+w*T)*Ie,e[11]=(p*D-h*H-m*T)*Ie,e[12]=(s*J-i*ue-c*ve)*Ie,e[13]=(r*ue-n*J+o*ve)*Ie,e[14]=(d*R-v*q-g*T)*Ie,e[15]=(h*q-p*R+u*T)*Ie,e):null}});var Kd=de((w4,Yd)=>{Yd.exports=Ib;function Ib(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],m=t[11],v=t[12],d=t[13],g=t[14],w=t[15];return e[0]=s*(u*w-m*g)-p*(c*w-f*g)+d*(c*m-f*u),e[1]=-(n*(u*w-m*g)-p*(o*w-a*g)+d*(o*m-a*u)),e[2]=n*(c*w-f*g)-s*(o*w-a*g)+d*(o*f-a*c),e[3]=-(n*(c*m-f*u)-s*(o*m-a*u)+p*(o*f-a*c)),e[4]=-(i*(u*w-m*g)-h*(c*w-f*g)+v*(c*m-f*u)),e[5]=r*(u*w-m*g)-h*(o*w-a*g)+v*(o*m-a*u),e[6]=-(r*(c*w-f*g)-i*(o*w-a*g)+v*(o*f-a*c)),e[7]=r*(c*m-f*u)-i*(o*m-a*u)+h*(o*f-a*c),e[8]=i*(p*w-m*d)-h*(s*w-f*d)+v*(s*m-f*p),e[9]=-(r*(p*w-m*d)-h*(n*w-a*d)+v*(n*m-a*p)),e[10]=r*(s*w-f*d)-i*(n*w-a*d)+v*(n*f-a*s),e[11]=-(r*(s*m-f*p)-i*(n*m-a*p)+h*(n*f-a*s)),e[12]=-(i*(p*g-u*d)-h*(s*g-c*d)+v*(s*u-c*p)),e[13]=r*(p*g-u*d)-h*(n*g-o*d)+v*(n*u-o*p),e[14]=-(r*(s*g-c*d)-i*(n*g-o*d)+v*(n*c-o*s)),e[15]=r*(s*u-c*p)-i*(n*u-o*p)+h*(n*c-o*s),e}});var Zd=de((_4,Qd)=>{Qd.exports=zb;function zb(e){var t=e[0],r=e[1],n=e[2],o=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],h=e[9],p=e[10],u=e[11],m=e[12],v=e[13],d=e[14],g=e[15],w=t*i-r*a,T=t*s-n*a,R=t*c-o*a,D=r*s-n*i,q=r*c-o*i,H=n*c-o*s,ae=f*v-h*m,ve=f*d-p*m,J=f*g-u*m,Ee=h*d-p*v,ue=h*g-u*v,Fe=p*g-u*d;return w*Fe-T*ue+R*Ee+D*J-q*ve+H*ae}});var e1=de((E4,Jd)=>{Jd.exports=Pb;function Pb(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],h=t[7],p=t[8],u=t[9],m=t[10],v=t[11],d=t[12],g=t[13],w=t[14],T=t[15],R=r[0],D=r[1],q=r[2],H=r[3];return e[0]=R*n+D*s+q*p+H*d,e[1]=R*o+D*c+q*u+H*g,e[2]=R*a+D*f+q*m+H*w,e[3]=R*i+D*h+q*v+H*T,R=r[4],D=r[5],q=r[6],H=r[7],e[4]=R*n+D*s+q*p+H*d,e[5]=R*o+D*c+q*u+H*g,e[6]=R*a+D*f+q*m+H*w,e[7]=R*i+D*h+q*v+H*T,R=r[8],D=r[9],q=r[10],H=r[11],e[8]=R*n+D*s+q*p+H*d,e[9]=R*o+D*c+q*u+H*g,e[10]=R*a+D*f+q*m+H*w,e[11]=R*i+D*h+q*v+H*T,R=r[12],D=r[13],q=r[14],H=r[15],e[12]=R*n+D*s+q*p+H*d,e[13]=R*o+D*c+q*u+H*g,e[14]=R*a+D*f+q*m+H*w,e[15]=R*i+D*h+q*v+H*T,e}});var r1=de((M4,t1)=>{t1.exports=Ob;function Ob(e,t,r){var n=r[0],o=r[1],a=r[2],i,s,c,f,h,p,u,m,v,d,g,w;return t===e?(e[12]=t[0]*n+t[4]*o+t[8]*a+t[12],e[13]=t[1]*n+t[5]*o+t[9]*a+t[13],e[14]=t[2]*n+t[6]*o+t[10]*a+t[14],e[15]=t[3]*n+t[7]*o+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],h=t[4],p=t[5],u=t[6],m=t[7],v=t[8],d=t[9],g=t[10],w=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=h,e[5]=p,e[6]=u,e[7]=m,e[8]=v,e[9]=d,e[10]=g,e[11]=w,e[12]=i*n+h*o+v*a+t[12],e[13]=s*n+p*o+d*a+t[13],e[14]=c*n+u*o+g*a+t[14],e[15]=f*n+m*o+w*a+t[15]),e}});var o1=de((A4,n1)=>{n1.exports=Nb;function Nb(e,t,r){var n=r[0],o=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var i1=de((T4,a1)=>{a1.exports=Fb;function Fb(e,t,r,n){var o=n[0],a=n[1],i=n[2],s=Math.sqrt(o*o+a*a+i*i),c,f,h,p,u,m,v,d,g,w,T,R,D,q,H,ae,ve,J,Ee,ue,Fe,ze,Ie,ye;return Math.abs(s)<1e-6?null:(s=1/s,o*=s,a*=s,i*=s,c=Math.sin(r),f=Math.cos(r),h=1-f,p=t[0],u=t[1],m=t[2],v=t[3],d=t[4],g=t[5],w=t[6],T=t[7],R=t[8],D=t[9],q=t[10],H=t[11],ae=o*o*h+f,ve=a*o*h+i*c,J=i*o*h-a*c,Ee=o*a*h-i*c,ue=a*a*h+f,Fe=i*a*h+o*c,ze=o*i*h+a*c,Ie=a*i*h-o*c,ye=i*i*h+f,e[0]=p*ae+d*ve+R*J,e[1]=u*ae+g*ve+D*J,e[2]=m*ae+w*ve+q*J,e[3]=v*ae+T*ve+H*J,e[4]=p*Ee+d*ue+R*Fe,e[5]=u*Ee+g*ue+D*Fe,e[6]=m*Ee+w*ue+q*Fe,e[7]=v*Ee+T*ue+H*Fe,e[8]=p*ze+d*Ie+R*ye,e[9]=u*ze+g*Ie+D*ye,e[10]=m*ze+w*Ie+q*ye,e[11]=v*ze+T*Ie+H*ye,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var c1=de((S4,s1)=>{s1.exports=Gb;function Gb(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],h=t[9],p=t[10],u=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*o+f*n,e[5]=i*o+h*n,e[6]=s*o+p*n,e[7]=c*o+u*n,e[8]=f*o-a*n,e[9]=h*o-i*n,e[10]=p*o-s*n,e[11]=u*o-c*n,e}});var f1=de((k4,l1)=>{l1.exports=Db;function Db(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],h=t[9],p=t[10],u=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o-f*n,e[1]=i*o-h*n,e[2]=s*o-p*n,e[3]=c*o-u*n,e[8]=a*n+f*o,e[9]=i*n+h*o,e[10]=s*n+p*o,e[11]=c*n+u*o,e}});var h1=de((L4,u1)=>{u1.exports=$b;function $b(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],h=t[5],p=t[6],u=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o+f*n,e[1]=i*o+h*n,e[2]=s*o+p*n,e[3]=c*o+u*n,e[4]=f*o-a*n,e[5]=h*o-i*n,e[6]=p*o-s*n,e[7]=u*o-c*n,e}});var p1=de((C4,d1)=>{d1.exports=qb;function qb(e,t,r){var n,o,a,i=r[0],s=r[1],c=r[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),o=Math.cos(t),a=1-o,e[0]=i*i*a+o,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+o,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var v1=de((R4,m1)=>{m1.exports=Hb;function Hb(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=n+n,c=o+o,f=a+a,h=n*s,p=n*c,u=n*f,m=o*c,v=o*f,d=a*f,g=i*s,w=i*c,T=i*f;return e[0]=1-(m+d),e[1]=p+T,e[2]=u-w,e[3]=0,e[4]=p-T,e[5]=1-(h+d),e[6]=v+g,e[7]=0,e[8]=u+w,e[9]=v-g,e[10]=1-(h+m),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}});var y1=de((I4,g1)=>{g1.exports=Ub;function Ub(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var b1=de((z4,x1)=>{x1.exports=Bb;function Bb(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var _1=de((P4,w1)=>{w1.exports=jb;function jb(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var M1=de((O4,E1)=>{E1.exports=Wb;function Wb(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var T1=de((N4,A1)=>{A1.exports=Vb;function Vb(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var k1=de((F4,S1)=>{S1.exports=Xb;function Xb(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r+r,s=n+n,c=o+o,f=r*i,h=n*i,p=n*s,u=o*i,m=o*s,v=o*c,d=a*i,g=a*s,w=a*c;return e[0]=1-p-v,e[1]=h+w,e[2]=u-g,e[3]=0,e[4]=h-w,e[5]=1-f-v,e[6]=m+d,e[7]=0,e[8]=u+g,e[9]=m-d,e[10]=1-f-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var C1=de((G4,L1)=>{L1.exports=Yb;function Yb(e,t,r,n,o,a,i){var s=1/(r-t),c=1/(o-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var I1=de((D4,R1)=>{R1.exports=Kb;function Kb(e,t,r,n,o){var a=1/Math.tan(t/2),i=1/(n-o);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*n*i,e[15]=0,e}});var P1=de(($4,z1)=>{z1.exports=Qb;function Qb(e,t,r,n){var o=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(o+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(o-a)*f*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}});var N1=de((q4,O1)=>{O1.exports=Zb;function Zb(e,t,r,n,o,a,i){var s=1/(t-r),c=1/(n-o),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+r)*s,e[13]=(o+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var G1=de((H4,F1)=>{var Jb=Ol();F1.exports=e3;function e3(e,t,r,n){var o,a,i,s,c,f,h,p,u,m,v=t[0],d=t[1],g=t[2],w=n[0],T=n[1],R=n[2],D=r[0],q=r[1],H=r[2];return Math.abs(v-D)<1e-6&&Math.abs(d-q)<1e-6&&Math.abs(g-H)<1e-6?Jb(e):(h=v-D,p=d-q,u=g-H,m=1/Math.sqrt(h*h+p*p+u*u),h*=m,p*=m,u*=m,o=T*u-R*p,a=R*h-w*u,i=w*p-T*h,m=Math.sqrt(o*o+a*a+i*i),m?(m=1/m,o*=m,a*=m,i*=m):(o=0,a=0,i=0),s=p*i-u*a,c=u*o-h*i,f=h*a-p*o,m=Math.sqrt(s*s+c*c+f*f),m?(m=1/m,s*=m,c*=m,f*=m):(s=0,c=0,f=0),e[0]=o,e[1]=s,e[2]=h,e[3]=0,e[4]=a,e[5]=c,e[6]=p,e[7]=0,e[8]=i,e[9]=f,e[10]=u,e[11]=0,e[12]=-(o*v+a*d+i*g),e[13]=-(s*v+c*d+f*g),e[14]=-(h*v+p*d+u*g),e[15]=1,e)}});var $1=de((U4,D1)=>{D1.exports=t3;function t3(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var as=de((B4,q1)=>{q1.exports={create:Dd(),clone:qd(),copy:Ud(),identity:Ol(),transpose:Wd(),invert:Xd(),adjoint:Kd(),determinant:Zd(),multiply:e1(),translate:r1(),scale:o1(),rotate:i1(),rotateX:c1(),rotateY:f1(),rotateZ:h1(),fromRotation:p1(),fromRotationTranslation:v1(),fromScaling:y1(),fromTranslation:b1(),fromXRotation:_1(),fromYRotation:M1(),fromZRotation:T1(),fromQuat:k1(),frustum:C1(),perspective:I1(),perspectiveFromFieldOfView:P1(),ortho:N1(),lookAt:G1(),str:$1()}});var B1=de((j4,U1)=>{"use strict";var H1=Fd(),hr=as(),ua=gn(),r3=3e3,S0="high",Nl,ss=.36,cs=13.64,li=ua.C.hallEnd-.01,ls=ua.C.z0+.01,n3=.356,o3=13.644,a3=ua.C.hallEnd-.006,i3=ua.C.z0+.006,s3=.12,L0=4,fi=e=>Ur[e]&&Ur[e].cy||L0,Fl=.26,c3=5.6,l3=7,Ur=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:li},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:ua.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ua.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ua.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function f3(e,t){let r=t&&t.maxH||c3,n=t&&t.maxW||l3,o=Math.min(r,n/e);return{width:o*e,height:o}}function u3(e,t,r){let n=Ur[r],o=[],a=fi(r)-t/2;return n.side==="left"?(hr.fromTranslation(o,[ss,a,n.z+e/2]),hr.rotateY(o,o,Math.PI/2)):n.side==="right"?(hr.fromTranslation(o,[cs,a,n.z-e/2]),hr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?hr.fromTranslation(o,[n.x-e/2,a,ls]):(hr.fromTranslation(o,[7+e/2,a,li]),hr.rotateY(o,o,Math.PI)),hr.scale(o,o,[e,t,s3]),o}function h3(e,t,r){let n=Ur[r],o=[],a=fi(r)-t/2;return n.side==="left"?(hr.fromTranslation(o,[ss,a,n.z+e/2]),hr.rotateY(o,o,Math.PI/2)):n.side==="right"?(hr.fromTranslation(o,[cs,a,n.z-e/2]),hr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?hr.fromTranslation(o,[n.x-e/2,a,ls]):(hr.fromTranslation(o,[7+e/2,a,li]),hr.rotateY(o,o,Math.PI)),o}function d3(e,t,r){let n=Ur[r],o=[],a=fi(r)-t/2-Fl-.38;return n.side==="left"?(hr.fromTranslation(o,[n3,a,n.z+e/2]),hr.rotateY(o,o,Math.PI/2)):n.side==="right"?(hr.fromTranslation(o,[o3,a,n.z-e/2]),hr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?hr.fromTranslation(o,[n.x-e/2,a,i3]):(hr.fromTranslation(o,[7+e/2,a,a3]),hr.rotateY(o,o,Math.PI)),hr.scale(o,o,[2,2,2]),o}function p3(e,t,r){let n=Ur[r],o=fi(r)-t/2-Fl-.38;return n.side==="left"?[ss+.55,o,n.z]:n.side==="right"?[cs-.55,o,n.z]:n.side==="corridor"?[n.x,o,ls+.55]:[7,o,li-.55]}var is=.42;function k0(e,t,r,n,o,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,o,0,0,r[0]*a,r[1]*a,r[2]*a,0,e[0],e[1],e[2],1]}function m3(e,t,r){let n=Ur[r],o,a,i;n.side==="left"?(o=[ss,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(o=[cs,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(o=[n.x,ls],a=[1,0,0],i=[0,0,1]):(o=[7,li],a=[1,0,0],i=[0,0,-1]);let s=fi(r)+t/2+Fl+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(m,v)=>[o[0]+i[0]*m,v,o[1]+i[2]*m],h=[.075,.062,.05],p=[{fixmodel:k0(f(.014,s),a,i,.1,.13,.028),fixcol:h,fixglow:0},{fixmodel:k0(f(is/2,s),a,i,.02,.02,is),fixcol:h,fixglow:0},{fixmodel:k0(f(is,s),a,i,c,.034,.05),fixcol:h,fixglow:0},{fixmodel:k0(f(is-.012,s-.019),a,i,c*.94,.006,.028),fixcol:h,fixglow:1}],u=f(is,s-.02);return{fixtures:p,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}U1.exports=(e,t)=>{let r=[],n=[],o=a=>{let i=a.image_id;if(!Ur[i])return;let{width:s,height:c}=f3(a.aspect,Ur[i]),f=m3(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),r.push({...a,fixtures:f.fixtures,side:Ur[i].side,model:u3(s,c,i),framemodel:h3(s,c,i),framesize:[s,c],textmodel:d3(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,size:a.size,plaquePosition:p3(s,c,i),paintingPosition:Ur[i].side==="left"?[ss+.05,L0,Ur[i].z]:Ur[i].side==="right"?[cs-.05,L0,Ur[i].z]:Ur[i].side==="corridor"?[Ur[i].x,fi(i),ls+.05]:[7,L0,li-.05],textGen:null})};return H1.fetch(e,Ur.length,S0,o,()=>{}),{update:()=>{n=r,n.forEach(a=>{H1.load(e,a,S0)}),S0="low",Nl&&clearTimeout(Nl),Nl=setTimeout(()=>{S0="high"},r3)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var V1=de((W4,W1)=>{"use strict";var v3=Ll(),j1=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function g3(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];j1.forEach(([n,o])=>{e.forEach(([a,i])=>t.push([a,i,n,o]))});let r=[];for(let n=0;n<j1.length-1;n++)for(let o=0;o<4;o++){let a=(o+1)%4,i=n*4+o,s=n*4+a,c=(n+1)*4+o,f=(n+1)*4+a;r.push(i,s,f,i,f,c)}return{verts:t,elems:r}}var y3=`#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2 fsize;
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
	float spec = pow(max(dot(n, normalize(key + v)), 0.0), 28.0);

	vec3 gold = vec3(0.80, 0.58, 0.22);
	vec3 dark = vec3(0.22, 0.13, 0.05);
	vec3 base = mix(dark, gold, clamp(h, 0.0, 1.0));
	base = base * g + dark * (1.0 - g) * 0.8;

	vec3 col = base * (0.30 + 0.95 * diff) + vec3(1.0, 0.8, 0.4) * spec * 0.5 * g;
	col *= 0.9;
	float dist = length(v_vpos);
	col *= mix(0.68, 1.0, 1.0 - sst(8.0, 55.0, dist));
	gl_FragColor = vec4(col, 1.0);
}`,x3=`
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
}`;W1.exports=e=>{let t=v3.draw(e),r=e({frag:`
	precision lowp float;
	uniform sampler2D tex;
	varying vec3 uv;

	// http://madebyevan.com/shaders/fast-rounded-rectangle-shadows/
	// This approximates the error function, needed for the gaussian integral
	vec4 erf(vec4 x) {
		vec4 s = sign(x), a = abs(x);
		x = 1.0 + (0.278393 + (0.230389 + 0.078108 * (a * a)) * a) * a;
		x *= x;
		return s - s / (x * x);
	}

	// Return the mask for the shadow of a box from lower to upper
	float boxShadow(vec2 lower, vec2 upper, vec2 point, float sigma) {
		vec4 query = vec4(point - lower, upper - point);
		vec4 integral = 0.5 + 0.5 * erf(query * (sqrt(0.5) / sigma));
		return (integral.z - integral.x) * (integral.w - integral.y);
	}

	void main () {
		float frontMask = smoothstep(0.9, 1.0, uv.z);
		float paintingMask = step(0.001, uv.z);
		float shadowAlpha = boxShadow(vec2(.5), vec2(.7), abs(uv.xy-vec2(.5)), 0.02);
		float wrapping = 0.005 * sign(uv.x-.5) * (1.-uv.z);
		float sideShading = pow(uv.z/4.0, 0.1);
		vec3 col = texture2D(tex, uv.xy - vec2(wrapping, 0.)).rgb;
		col *= mix(sideShading, 1., frontMask);
		// light from the bar above: a touch brighter than the wall,
		// strongest at the top, easing off towards the bottom
		float lamp = 1.0 + 0.22 * (0.35 + 0.65 * uv.y) * (1.0 - 0.25 * pow(abs(uv.x - 0.5) * 2.0, 2.0));
		col *= mix(1.0, lamp, frontMask);
		gl_FragColor = mix(vec4(0.,0.,0.,shadowAlpha), vec4(col,1.), paintingMask);
	}`,vert:`
	precision highp float;
	uniform mat4 proj, view, model;
	uniform float yScale;
	attribute vec3 pos;
	varying vec3 uv;
	void main () {
		uv = pos;
		vec4 mpos = model * vec4(pos, 1);
		mpos.y *= yScale;
		gl_Position = proj * view * mpos;
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex")},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=g3(),o=e({frag:y3,vert:x3,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){r(i),o(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Y1=de((V4,X1)=>{"use strict";var b3=Sl();function w3(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),o=t.getUint32(8,!0),a=[],i=[];for(let p=0;p<3;p++)a.push(t.getFloat32(12+p*4,!0)),i.push(t.getFloat32(24+p*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,o);s+=o*2;let h=new Int8Array(e,s,n*3);return{nV:n,nI:o,mn:a,sz:i,pos:c,idx:f,nrm:h}}X1.exports=(e,t)=>{let r=[],n=[],o=[],a=[],i=null,s=t.statues.length,c=(h,p)=>{let u=r.length/3,m=p.height,v=Math.cos(p.yaw),d=Math.sin(p.yaw),g=p.base!==void 0?p.base:t.pedestalTop;for(let w=0;w<h.nV;w++){let T=(h.mn[0]+h.pos[w*3]/65535*h.sz[0])*m,R=(h.mn[1]+h.pos[w*3+1]/65535*h.sz[1])*m,D=(h.mn[2]+h.pos[w*3+2]/65535*h.sz[2])*m;r.push(p.x+v*T+d*D,g+R,p.z-d*T+v*D);let q=h.nrm[w*3]/127,H=h.nrm[w*3+1]/127,ae=h.nrm[w*3+2]/127;n.push(v*q+d*ae,H,-d*q+v*ae),o.push(p.mat||1,0,0)}for(let w=0;w<h.nI;w++)a.push(u+h.idx[w])},f=()=>{a.length!==0&&(i=b3(e,{position:r,normal:n,mat:o,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1))};return t.statues.forEach(h=>{fetch("res/"+h.file).then(p=>{if(!p.ok)throw new Error("Could not load "+h.file);return p.arrayBuffer()}).then(p=>c(w3(p),h)).catch(p=>console.error(p)).then(()=>{--s===0&&f()})}),function(){i&&i()}}});var ip=de((X4,Dl)=>{"use strict";var _3=oa(),Sr=1.29032,ha=[9.2968,2,5.9],E3=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],C0=2147.64,K1=725,Q1=1288,Z1=1450,J1=2576,sn=-5.197,pa=3.865,Co=10.135,ma=-14.679,fs=-30.229,us=7.232,ep=-45.713,hi=17.1*Sr,da=16.6*Sr,hs=16.6*Sr,tp=[6.9,17.1],R0=[2.95,16.6],M3=1.6,A3=0,T3=1,rp=2,Gl=3,np=4,op=5,S3=6;function k3(){let e=[],t=[],r=[],n=[],o=_3.createBuilder(e,t,r,n),a=(f,h,p,u,m,v,d=1,g=1)=>{let w=[];for(let T=0;T<=d;T++){let R=[];for(let D=0;D<=g;D++){let q=[f[0]+h[0]*T/d+p[0]*D/g,f[1]+h[1]*T/d+p[1]*D/g,f[2]+h[2]*T/d+p[2]*D/g],H=v(q);R.push(o.vert(q,u,[m,H[0],H[1]]))}w.push(R)}for(let T=0;T<d;T++)for(let R=0;R<g;R++)o.tri(w[T][R],w[T+1][R],w[T][R+1]),o.tri(w[T+1][R],w[T+1][R+1],w[T][R+1])},i=f=>h=>[(ha[2]-h[2])/Sr-f,h[1]/Sr];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],A3,f=>[f[0]/Sr,f[2]/Sr],13,14),a([pa,0,sn],[0,0,ma-sn],[0,hi,0],[1,0,0],T3,i(8.6),6,6),a([-40,0,sn],[pa+40,0,0],[0,hi,0],[0,0,1],rp,f=>[(pa-f[0])/Sr,f[1]/Sr],8,4),a([-40,0,-.36],[0,0,sn+.36],[0,hi,0],[1,0,0],rp,f=>[-f[2]/Sr,f[1]/Sr]),a([Co,0,-80],[0,0,sn+80],[0,da,0],[-1,0,0],np,i(8.6),12,6),a([Co,0,sn],[60,0,0],[0,da,0],[0,0,1],op,f=>[(f[0]-Co)/Sr,f[1]/Sr],8,4),a([70,0,sn],[0,0,-.36-sn],[0,da,0],[-1,0,0],op,f=>[-f[2]/Sr,f[1]/Sr]);let s=f=>[(f[0]-ha[0])/Sr+4.18,f[1]/Sr];a([-20,0,fs],[us+20,0,0],[0,hs,0],[0,0,1],Gl,s,8,6),a([us,0,fs],[0,0,ep-fs],[0,hs,0],[1,0,0],Gl,i(28),4,4),a([us,0,ep],[Co-us,0,0],[0,da,0],[0,0,1],np,f=>[(f[0]-ha[0])/Sr,f[1]/Sr],2,4),a([-20,0,ma],[0,0,fs-ma],[0,hs,0],[1,0,0],Gl,i(16),4,4);let c=(f,h,p,u)=>a(f,h,p,u,S3,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:r,attr:n}}function ui(e,t,r,n){let o=e.texture({data:[[n]],...r,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{o({data:a,...r,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),o}var Un=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",L3=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,ma],[pa,hi,sn]],[[Co,0,-80],[70,da,sn]],[[-20,0,-80],[us,hs,fs]],[[-40,0,-80],[-20,hs,ma]]],C3=L3.map(e=>`if (hitBox(ro, rd, ${Un(e[0])}, ${Un(e[1])}, 1e4) ) return 0.0;`).join(`
		`),ap="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>E3[t][e].toFixed(6)).join(", ")).join(", ")+")",R3=`
precision highp float;

uniform sampler2D photo, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Un([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${C3}
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
	vec3 ro = ${Un(ha)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Un([-40,0,ma])}, ${Un([pa-.02,hi,sn])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Un([Co+.02,0,-80])}, ${Un([70,da,sn])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${ap} * (p - ${Un(ha)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${K1.toFixed(2)} + ${C0.toFixed(3)} * pc.x / pc.z) / ${Z1.toFixed(1)},
		(${Q1.toFixed(2)} - ${C0.toFixed(3)} * pc.y / pc.z) / ${J1.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${ap} * (p - ${Un(ha)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${K1.toFixed(2)} + ${C0.toFixed(3)} * pc.x / pc.z) / ${Z1.toFixed(1)},
		(${Q1.toFixed(2)} - ${C0.toFixed(3)} * pc.y / pc.z) / ${J1.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Un(ha)}), n));
	float eyeCos = abs(dot(normalize(p - eye), n));
	float stretch = eyeCos / max(camCos, 0.001);
	w *= 1.0 - smoothstep(2.2, 3.6, stretch);
	return vec4(texture2D(photo, uv).rgb, w);
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
		gl_FragColor = vec4(skyColour(normalize(V)), 1.0);
		return;
	}

	// ---------- painted fallback ----------
	vec3 base;
	if (kind < 0.5) {
		base = texture2D(cobbleTex, fuv / ${M3.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${tp[0].toFixed(2)}, 1.0 - fuv.y / ${tp[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${R0[0].toFixed(2)}, 1.0 - fuv.y / ${R0[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${R0[0].toFixed(2)}, 1.0 - fuv.y / ${R0[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(pa-.05).toFixed(3)} && v_pos.x < ${(Co+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${ma.toFixed(3)};
		projectable = projectable && v_pos.z < ${(sn+4.5).toFixed(3)};
	}
	// the yellow building ends at its real roofline
	if (kind > 2.5 && kind < 3.5 && v_pos.y > 15.0 && photoSky(v_pos)) discard;

	if (projectable) {
		vec4 ph = photoAt(v_pos, N, v_eye);
		base = mix(base, ph.rgb, ph.a);
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

	gl_FragColor = vec4(col, 1.0);
}`,I3=`
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
}`;Dl.exports=e=>{let t=k3(),r={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},o={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=ui(e,"res/street/photo.jpg",r,[190,160,120]),i=ui(e,"res/street/photo_mask.png",r,[255,255,255]),s=ui(e,"res/street/facade_pink.jpg",n,[200,150,135]),c=ui(e,"res/street/facade_yellow.jpg",n,[225,180,95]),f=ui(e,"res/street/facade_cream.jpg",n,[215,200,175]),h=ui(e,"res/street/cobbles.jpg",o,[95,95,95]),p=Date.now(),u=e({frag:R3,vert:I3,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:i,pinkTex:s,yellowTex:c,creamTex:f,cobbleTex:h,time:()=>(Date.now()-p)/1e3}});return function(){u()}};Dl.exports.layout={MOUTH_Z:sn,PINK_X:pa,RIGHT_X:Co,PINK_H:hi,CREAM_H:da,S:Sr}});var lp=de((Y4,cp)=>{"use strict";var{glassPanes:z3}=aa(),sp=gn();function P3(){let e=[],t=[],r=(n,o)=>{for(let a of n)e.push(a),t.push(o)};return r(z3(),[0,0,1]),r(sp.windowGlass(),[0,0,1]),r(sp.farDoorGlass(),[1,0,0]),{position:e,normal:t}}cp.exports=e=>{let t=P3(),r=e({frag:`
		precision highp float;
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
			gl_FragColor = vec4(col, a);
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r()}}});var Ap=de((K4,Bl)=>{"use strict";var O3=oa(),$l=Mo(),{wallWithHoles:N3,C:zo}=gn(),Be=.28,B={westBack:14.4,westCol:15-Be,eastCol:37.4+Be,eastBack:41.8,south:zo.z1+.7,northCol:zo.z1+.7+16,northBack:zo.z1+.7+19,cx:(15+37.4)/2,cz:(zo.z1+.7+zo.z1+.7+16-Be)/2},Nt={x0:B.westCol+Be,x1:B.eastCol-Be,z0:B.south,z1:B.northCol-Be},Wr=3.3,ms=.92,Po=5.6,fp=6,Sn=11.9,Io=9.6,yt={x0:B.cx-2.9,x1:B.cx+2.9,top:14.4},G0=7,mp=4,Hl=(B.eastCol-B.westCol)/G0,F3=(B.northCol-B.south)/mp,vp=3,gs=.26,xa=1.4,ga=1.1,z0=3,eo=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(r=>r/t)})(),Oe={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},to=[],gp=(e,t,r)=>[B.cx+e,t,B.cz+r],P0=gp(-5.9,0,3.4),Oo=.85,Ro={c:[P0[0],4.6*Oo+.5,P0[2]],r:[5*Oo,3.6*Oo,4.5*Oo]},yp=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[P0[0]+e.d[0]*Oo,e.d[1]*Oo+.5,P0[2]+e.d[2]*Oo],r:e.r.map(t=>t*Oo),n:e.n}));for(let e of yp)to.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var G3=[3.6,6.3,9];for(let e of G3){let t=8.6+e%1.7*.6;to.push({c:gp(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var D3=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:B.cx+e.d[0],z:B.cz+e.d[1],bloom:e.bloom}));for(let e of D3)to.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var Ul=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[B.cx+Math.cos(t)*2.3,B.cz+Math.sin(t)*2.3]});for(let[e,t]of Ul)to.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var xp=[];{let e=(r,n,o,a,i,s)=>{let c=Math.hypot(o-r,a-n),f=Math.floor(c/.9);for(let h=0;h<=f;h++){let p=h/f,u=r+(o-r)*p,m=n+(a-n)*p;i!==void 0&&Math.abs((o!==r?u:m)-i)<s||xp.push([u,m])}};e(Nt.x0+.45,Nt.z0+1.2,Nt.x0+.45,Nt.z1-.45,B.cz,1),e(Nt.x1-.45,Nt.z0+1.2,Nt.x1-.45,Nt.z1-.45,B.cz,1),e(Nt.x0+.45,Nt.z1-.45,Nt.x1-.45,Nt.z1-.45,B.cx,1.9)}var $3=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],O0=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function pi(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function kr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),[s,0,0])}function q3(e,t,r){return{vert:(n,o,a)=>e.vert(t(n),r(o),a),tri:e.tri}}var H3={north:[e=>[e[0],e[1],B.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[B.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[B.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function bp(e,t,r,n,o){let a=[];for(let i=0;i<r;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===r-1?o:.02);a.push([s,c,e+(i+.5)*t])}return a}var U3=bp(B.westCol,Hl,G0,Be+gs,Be+gs),up=bp(B.south,F3,mp,.32,Be+gs),di=[B.cx-32.35,B.northCol-77],B3=Array.from({length:G0-1},(e,t)=>B.westCol+(t+1)*Hl),wp=e=>(e[1]-e[0])/2-.2,vs=e=>(e[0]+e[1])/2;function j3(e,t){let r=vs(e),n=wp(e);return{u0:e[0],u1:e[1],bottom:t?0:ms,head:o=>{let a=Math.abs(o-r);return a<n?Wr+Math.sqrt(n*n-a*a):Wr},step:.05}}function W3(e,t,r){return{u0:e-r,u1:e+r,bot:n=>t-Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),step:.04,mat:[Oe.STONE,0,0]}}function V3(e,t,r,n){return{u0:e-t/2,u1:e+t/2,bottom:r,head:()=>n,step:.5,mat:[Oe.STONE,0,0]}}function hp(e,t,r){let[n,o]=H3[t],a=q3(e,n,o),i=[];r.arches.forEach((h,p)=>i.push(j3(h,p===r.open)));let s=[];for(let h of r.bays||r.arches){let p=vs(h);r.oculi&&i.push(W3(p,6.85,.3)),s.push({c:p,y0:r.win[0],y1:r.win[1],w:1.05})}for(let h of r.extraWindows||[])s.push(h);for(let h of s)i.push(V3(h.c,h.w,h.y0,h.y1));for(let h of r.extraHoles||[])i.push(h);N3(a,{u0:r.u0,u1:r.u1,w0:-Be,w1:Be,top:r.top,holes:i,mat:[Oe.BRICK,0,0],revealMat:[Oe.BRICK,0,0],noEnds:r.noEnds,cuts:r.cuts,topStep:.25});let c=(h,p,u,m,v,d,g)=>{let w=n([h,p,u]),T=n([m,v,d]);kr(e,w[0],w[1],w[2],T[0],T[1],T[2],g)},f=(h,p,u,m,v,d)=>pi(a,h,p,u,m,v,[d,0,0]);for(let h of r.arches){let p=vs(h),u=wp(h),m=28;for(let v of[Be,-Be]){let d=v>0?1:-1,g=v+d*.025;for(let w=0;w<m;w++){let T=Math.PI*w/m,R=Math.PI*(w+1)/m,D=(ue,Fe)=>[p+Math.cos(ue)*Fe,Wr+Math.sin(ue)*Fe],q=D(T,u),H=D(R,u),ae=D(T,u+.26),ve=D(R,u+.26);f([q[0],q[1],g],[H[0],H[1],g],[ve[0],ve[1],g],[ae[0],ae[1],g],[0,0,d],Oe.STONE);let J=Math.cos((T+R)/2),Ee=Math.sin((T+R)/2);f([ae[0],ae[1],v],[ve[0],ve[1],v],[ve[0],ve[1],g],[ae[0],ae[1],g],[J,Ee,0],Oe.STONE)}}}if(r.arches.forEach((h,p)=>{p!==r.open&&c(h[0]-.02,ms,-Be-.05,h[1]+.02,ms+.09,Be+.05,Oe.STONE)}),c(r.u0,fp,-Be,r.u1,fp+.18,Be+.09,Oe.STONE),c(r.u0,r.win[0]-.12,Be-.01,r.u1,r.win[0],Be+.06,Oe.STONE),r.cornice)for(let[h,p,u]of r.cornice)c(h,u-.22,Be-.01,p,u,Be+.16,Oe.STONE),c(h,u,Be-.01,p,u+.16,Be+.42,Oe.STONE);for(let{c:h,y0:p,y1:u,w:m,door:v}of s){let d=m/2;if(f([h-d-.01,p,.06],[h+d+.01,p,.06],[h+d+.01,u,.06],[h-d-.01,u,.06],[0,0,1],v?Oe.DARK:Oe.PANE),v){c(h-d-.16,0,Be-.01,h-d,u+.16,Be+.07,Oe.STONE),c(h+d,0,Be-.01,h+d+.16,u+.16,Be+.07,Oe.STONE),c(h-d-.16,u,Be-.01,h+d+.16,u+.2,Be+.09,Oe.STONE),c(h-d,0,.07,h+d,u-.02,.12,Oe.SHUTTER),c(h-.012,0,.12,h+.012,u-.02,.14,Oe.DARK);continue}for(let g of[-1,1]){let w=h+g*d;c(w+g*.02,p+.02,Be+.02,w+g*(d+.025),u-.02,Be+.06,Oe.SHUTTER)}c(h-d-.09,u,Be-.01,h+d+.09,u+.16,Be+.05,Oe.STONE),c(h-d-.09,p-.1,Be-.01,h+d+.09,p,Be+.09,Oe.STONE),c(h-.015,p,.06,h+.015,u,.09,Oe.SHUTTER),c(h-d,(p+u)/2-.015,.06,h+d,(p+u)/2+.015,.09,Oe.SHUTTER)}if(r.oculi)for(let h of r.bays||r.arches){let p=vs(h);f([p-.31,6.54,0],[p+.31,6.54,0],[p+.31,7.16,0],[p-.31,7.16,0],[0,0,1],Oe.DARK)}for(let h of r.cols){let p=ms+.09,u=n([h,0,0]);kr(e,u[0]-.24,p,u[2]-.24,u[0]+.24,p+.12,u[2]+.24,Oe.MARBLE),e.lathe([[.23,p+.12,1],[.24,p+.17],[.2,p+.24],[.215,p+.28],[.17,p+.34,1],[.165,p+.6],[.155,Wr-.5],[.15,Wr-.38,1],[.175,Wr-.34,1],[.17,Wr-.3],[.2,Wr-.22],[.27,Wr-.15],[.29,Wr-.12,1]],u[0],u[2],18,{mat:()=>[Oe.MARBLE,0,0]}),kr(e,u[0]-.29,Wr-.12,u[2]-.29,u[0]+.29,Wr+.01,u[2]+.29,Oe.STONE)}r.walk&&r.walk(e)}function X3(e){let t=[-1,0,1].map(o=>{let a=B.cx+o*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Oe.STONE,0,0]}});hp(e,"north",{u0:B.westCol-Be,u1:B.eastCol+Be,top:o=>o>yt.x0+1e-6&&o<yt.x1-1e-6?yt.top:Sn,cuts:[yt.x0,yt.x0+1e-5,yt.x1-1e-5,yt.x1],arches:U3,open:vp,cols:B3,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[B.westCol-Be-3.3,yt.x0,Sn],[yt.x1,B.eastCol+Be+3.3,Sn],[yt.x0-.2,yt.x1+.2,yt.top]],walk:o=>{kr(o,Nt.x0,Po,B.northCol+Be,Nt.x1,Po+.2,B.northBack,Oe.PLASTER),kr(o,Nt.x0,0,B.northBack,Nt.x1,Po,B.northBack+.3,Oe.PLASTER);for(let a of[B.cx-7.2,B.cx,B.cx+7.2])pi(o,[a-.8,0,B.northBack-.01],[a+.8,0,B.northBack-.01],[a+.8,2.9,B.northBack-.01],[a-.8,2.9,B.northBack-.01],[0,0,-1],[Oe.DARK,0,0]),kr(o,a-.98,0,B.northBack-.06,a+.98,3.12,B.northBack,Oe.STONE),pi(o,[a-.8,0,B.northBack-.07],[a+.8,0,B.northBack-.07],[a+.8,2.9,B.northBack-.07],[a-.8,2.9,B.northBack-.07],[0,0,-1],[Oe.DARK,0,0])}}),pi(e,[yt.x0,11,B.northCol+.2],[yt.x1,11,B.northCol+.2],[yt.x1,13.6,B.northCol+.2],[yt.x0,13.6,B.northCol+.2],[0,0,-1],[Oe.DARK,0,0]),kr(e,yt.x0+.3,10.88,B.northCol-Be-.06,yt.x1-.3,11,B.northCol-Be+.1,Oe.STONE),kr(e,B.westBack,Po+.2,B.northBack,B.eastBack,Sn,B.northBack+3.4,Oe.BRICK),kr(e,B.westBack,Io,B.northCol-Be,B.westCol-Be,Sn,B.northCol+Be,Oe.BRICK),kr(e,B.eastCol+Be,Io,B.northCol-Be,B.eastBack,Sn,B.northCol+Be,Oe.BRICK),kr(e,B.westBack,Po+.2,B.northCol+Be+.12,B.eastBack,Sn,B.northBack,Oe.BRICK),ds(e,[B.westBack-.5,Sn+.16,B.northCol-Be-.42],[yt.x0-B.westBack+.5,0,0],[0,2.6,4.4],Oe.ROOF),ds(e,[yt.x1,Sn+.16,B.northCol-Be-.42],[B.eastBack+.5-yt.x1,0,0],[0,2.6,4.4],Oe.ROOF),ds(e,[yt.x0-.3,yt.top+.16,B.northCol-Be-.42],[yt.x1-yt.x0+.6,0,0],[0,1.4,3],Oe.ROOF),dp(e,[yt.x0-.3,yt.top+.16,B.northCol-Be-.42],[yt.x0-.3,yt.top+1.56,B.northCol-Be+2.58],[yt.x0-.3,yt.top+.16,B.northCol-Be+2.58],[-1,0,0],Oe.BRICK),dp(e,[yt.x1+.3,yt.top+.16,B.northCol-Be-.42],[yt.x1+.3,yt.top+1.56,B.northCol-Be+2.58],[yt.x1+.3,yt.top+.16,B.northCol-Be+2.58],[1,0,0],Oe.BRICK),kr(e,yt.x0,Sn,B.northCol+Be,yt.x1,yt.top,B.northCol+2.6,Oe.BRICK);for(let[o,a]of[[B.cx-9.8,B.northBack+.6],[B.cx+9.4,B.northBack+.4],[B.cx-4.6,B.northBack+1]])kr(e,o-.4,12.5,a-.4,o+.4,15.4,a+.4,Oe.BRICK),kr(e,o-.52,15.4,a-.52,o+.52,15.62,a+.52,Oe.STONE);let r=(o,a,i)=>{let s=o==="west"?-1:1,c=[];up.forEach((p,u)=>{let m=vs(p);u===1?c.push({c:m,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:m,y0:1,y1:2.75,w:1.05}),c.push({c:m,y0:3.85,y1:5.45,w:1.05})}),hp(e,o,{u0:B.south,u1:B.northCol-Be,top:()=>Io,arches:[],bays:up,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[B.south,B.northCol-Be,Io]]}),kr(e,a,0,B.south,i+s*(Be+.12),Io,B.northBack+.3,Oe.BRICK);let f=i-s*Be;kr(e,f,0,B.south,f-s*.06,.55,B.northCol-Be,Oe.STONE);let h=i-s*(Be+.42);ds(e,[h,Io+.16,B.south],[0,0,B.northCol-Be-B.south],[a-h+s*.4,1.9,0],Oe.ROOF)};r("west",B.westBack,B.westCol),r("east",B.eastBack,B.eastCol);let n=zo.x1+.7;kr(e,13.65,7.4,B.south-.02,n,7.62,B.south+.14,Oe.STONE),kr(e,13.65,10.4,B.south-.02,n,10.6,B.south+.38,Oe.STONE),ds(e,[13.65,10.6,B.south+.38],[n-13.65,0,0],[0,2.2,-5],Oe.ROOF)}function dp(e,t,r,n,o,a){let i=[a,0,0];e.tri(e.vert(t,o,i),e.vert(r,o,i),e.vert(n,o,i))}function ds(e,t,r,n,o){let a=O0([r[1]*n[2]-r[2]*n[1],r[2]*n[0]-r[0]*n[2],r[0]*n[1]-r[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,h)=>[t[0]+r[0]*f+n[0]*h,t[1]+r[1]*f+n[1]*h,t[2]+r[2]*f+n[2]*h];pi(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[o,0,0]);let c=.08;pi(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],O0([-n[0],0,-n[2]]),[o,0,0])}function Y3(e){let t=B.westBack,r=B.eastBack,n=B.south,o=B.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let h=[t+(r-t)*c/a,0,n+(o-n)*f/i];s[c].push(e.vert(h,[0,1,0],[Oe.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var ps=.46,ya=.58,va=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function K3(e,t,r){let n=ga+r,o=(e>0?Nt.x1-B.cx:B.cx-Nt.x0)-xa-r,a=ga+r,i=(t>0?Nt.z1-B.cz:B.cz-Nt.z0)-xa-r,s=z0+r,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),h=[[n,c],[n,i],[o,i],[o,a],[f,a]],p=Math.atan2(a,f),u=Math.atan2(c,n);for(let m=1;m<10;m++){let v=p+(u-p)*m/10;h.push([Math.cos(v)*s,Math.sin(v)*s])}return h.map(([m,v])=>[B.cx+e*m,B.cz+t*v])}function Q3(e,t,r){let n=r[0]-t[0],o=r[1]-t[1],a=Math.hypot(n,o),i=n/a,s=o/a,c=-s,f=i,h=ps*.5,p=-h,u=a+h,m=[],v=Math.max(1,Math.ceil((u-p)/1));for(let d=0;d<=v;d++){let g=p+(u-p)*d/v,w=[];for(let T=0;T<va.length;T++){let[R,D]=va[T],q=Math.min(va.length-2,T),H=va[Math.max(0,T-1)],ae=va[Math.min(va.length-1,T+1)],ve=(ae[0]-H[0])*ps,Ee=(ae[1]-H[1])*ya,ue=-ve,Fe=Math.hypot(Ee,ue)||1,ze=[t[0]+i*g+c*R*ps,D*ya,t[1]+s*g+f*R*ps],Ie=[c*(-Ee/Fe),-ue/Fe,f*(-Ee/Fe)];w.push(e.vert(ze,Ie[1]<-.2?[c*Math.sign(R),.3,f*Math.sign(R)]:Ie,[Oe.HEDGE,0,0]))}m.push(w)}for(let d=0;d<v;d++)for(let g=0;g<va.length-1;g++)e.tri(m[d][g],m[d+1][g],m[d+1][g+1]),e.tri(m[d][g],m[d+1][g+1],m[d][g+1]);for(let[d,g]of[[0,-1],[v,1]]){let w=m[d],T=e.vert([t[0]+i*(d?u:p),ya*.5,t[1]+s*(d?u:p)],[i*g,0,s*g],[Oe.HEDGE,0,0]);for(let R=0;R<w.length-1;R++)e.tri(T,w[R],w[R+1])}}function Z3(e){for(let t of[-1,1])for(let r of[-1,1]){let n=K3(t,r,.3);for(let o=0;o<n.length;o++)Q3(e,n[o],n[(o+1)%n.length])}}function J3(e){let t=B.cx,r=B.cz,n=()=>[Oe.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,r,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,r,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,r,16,{mat:()=>[Oe.DARK,0,0]});let o={mat:()=>[Oe.IRON,0,0]};e.tube([[t-.72,1.1,r],[t-.72,1.9,r],[t-.7,2.3,r]],()=>.035,8,6,o),e.tube([[t+.72,1.1,r],[t+.72,1.9,r],[t+.7,2.3,r]],()=>.035,8,6,o);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,r])}e.tube(a,()=>.03,20,6,o),e.tube([[t-.45,2.25,r],[t,2.38,r],[t+.45,2.25,r]],()=>.02,8,5,o),e.ellipsoid([t,2.32,r],[.03,.13,.13],6,10,o);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,h=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*h*i*-1+0),1.95+Math.sin(f)*h,r])}e.tube(s,()=>.016,16,5,o)}}function e5(e){for(let[t,r]of Ul)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,r,20,{mat:()=>[Oe.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,r,12,{mat:()=>[Oe.SOIL,0,0]}),e.tube([[t,.6,r],[t+.02,1,r-.01],[t-.01,1.45,r+.02]],n=>.045-n*.02,6,6,{mat:()=>[Oe.BARK,0,0]})}function t5(e){let[t,,r]=Ro.c,n=Ep(7),o=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of o){let c=[[t+a*.05,0,r+i*.05],[t+a*.25,s*.35,r+i*.25],[t+a*.6,s*.7,r+i*.6],[t+a,s,r+i],[t+a*1.35+(n()-.5),s+1.4,r+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Oe.BARK,0,0]});for(let f=0;f<2;f++){let h=.55+f*.2,p=[t+a*h,s*h,r+i*h],u=n()*Math.PI*2;e.tube([p,[p[0]+Math.cos(u)*1.3,p[1]+.9,p[2]+Math.sin(u)*1.3],[p[0]+Math.cos(u)*2.3,p[1]+1.4+n(),p[2]+Math.sin(u)*2.3]],m=>.08*(1-m*.7),8,6,{mat:()=>[Oe.BARK,0,0]})}}for(let a of to.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Oe.BARK,0,0]})}function r5(e){let t=()=>[Oe.FARBRICK,0,0],r=()=>[Oe.LEAD,0,0],n=(a,i,s,c,f,h)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let p=[];for(let m=0;m<=12;m++){let v=m/12*Math.PI/2,d=Math.cos(v)*s,g=Math.sin(v)*f;h&&(d*=1-.18*Math.sin(v*2)),p.push([Math.max(d,s*.12),c+g])}e.lathe(p,a,i,28,{mat:r});let u=c+f;e.lathe([[s*.13,u-.2,1],[s*.13,u+3,1],[s*.18,u+3.2,1],[s*.02,u+6.4]],a,i,10,{mat:r})};kr(e,14,0,104,52,26,150,Oe.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:r});let o=(a,i,s)=>{kr(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Oe.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};o(20.5,109,36),o(46.5,112,38)}function n5(e){let r=[B.cx,0,B.cz],n=24,o=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=o;c++){let f=Math.PI/2*(c/o)-.05,h=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],p=[r[0]+h[0]*420,r[1]+h[1]*420,r[2]+h[2]*420];a[i].push(e.vert(p,[-h[0],-h[1],-h[2]],[Oe.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<o;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function o5(){let e=[],t=[],r=[],n=[],o=O3.createBuilder(e,t,r,n);return Y3(o),X3(o),Z3(o),J3(o),e5(o),t5(o),o.save(),o.translate(di[0],0,di[1]),r5(o),o.restore(),n5(o),{position:e,normal:t,elements:r,attr:n}}var _p=[[[13.65,0,zo.z0-.7],[zo.x1+.7,10.6,B.south]],[[B.westBack,Po,B.northCol-Be],[B.eastBack,Sn,B.northBack+3.4]],[[yt.x0,Sn,B.northCol-Be],[yt.x1,yt.top,B.northCol+2.6]],[[B.westBack,0,B.south],[B.westCol+Be,Io,B.northBack+.3]],[[B.eastCol-Be,0,B.south],[B.eastBack,Io,B.northBack+.3]],[[14+di[0],0,104+di[1]],[52+di[0],26,150+di[1]]]];function a5(e,t,r,n){let o=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<r[i]||e[i]>n[i])return!1;continue}let s=(r[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),o=Math.max(o,s),a=Math.min(a,c),o>a)return!1}return!0}function I0(e,t,r,n){let o=[(e[0]-r[0])/n[0],(e[1]-r[1])/n[1],(e[2]-r[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=o[0]*a[0]+o[1]*a[1]+o[2]*a[2],c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-1,f=s*s-i*c;if(f<=0)return 0;let h=Math.sqrt(f),p=Math.max(0,(-s-h)/i),u=(-s+h)/i;return Math.max(0,u-p)}function ql(e){for(let[t,r]of _p)if(a5(e,eo,t,r))return 0;return 1}function Ep(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function i5(){let e=[],t=[],r=[],n=[],o=[],a=[],i=[],s=Ep(21),c=(v,d,g,w,T,R,D)=>{let q=e.length/3;for(let[H,ae]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...v),t.push(H,ae),r.push(d,g,w),n.push(...T),o.push(...R),a.push(...D);i.push(q,q+1,q+2,q,q+2,q+3)},f=(v,d)=>{let g=1;for(let w of to){if(w===d||!w.shadow)continue;let T=I0(v,eo,w.c,w.r);T>0&&(g*=Math.exp(-T*.9))}return g},h=to.map(v=>({...v,pts:null}));for(let v of h)for(let d=0;d<v.n;d++){let g;do g=[s()*2-1,s()*2-1,s()*2-1];while(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]>1);let w=Math.hypot(g[0],g[1],g[2])||1,T=Math.pow(s(),.35)*.98,R=[g[0]/w*T,g[1]/w*T,g[2]/w*T];if(v.spindle){let ze=R[1],Ie=Math.sqrt(Math.max(.02,1-ze*ze))*(ze>0?1-ze*.55:1+ze*.25),ye=Math.hypot(R[0],R[2])||1,rt=Ie*Math.min(1,ye*1.4);R=[R[0]/ye*rt,ze,R[2]/ye*rt]}v.magnolia&&R[1]<-.55&&(R[1]=-.55+(R[1]+.55)*.35);let D=[v.c[0]+R[0]*v.r[0],v.c[1]+R[1]*v.r[1],v.c[2]+R[2]*v.r[2]],q,H;if(v.magnolia){let ze=0;for(let rt of yp)ze=Math.max(ze,I0(D,eo,rt.c,rt.r));q=Math.exp(-ze*1.1);let Ie=1;for(let rt of to)if(!rt.magnolia&&rt.shadow){let Xt=I0(D,eo,rt.c,rt.r);Xt>0&&(Ie*=Math.exp(-Xt*.9))}q*=ql(D)*Ie;let ye=$3(D,Ro.c);H=O0([ye[0]/Ro.r[0]+R[0]*.5,ye[1]/Ro.r[1]+R[1]*.5,ye[2]/Ro.r[2]+R[2]*.5]),T=Math.min(1,Math.hypot(ye[0]/Ro.r[0],ye[1]/Ro.r[1],ye[2]/Ro.r[2])*.6+T*.4)}else{let ze=I0(D,eo,v.c,v.r);q=Math.exp(-ze*(v.spindle?2.2:1.25)),q*=ql(D)*f(D,to[h.indexOf(v)]),H=O0([R[0]/v.r[0],R[1]/v.r[1],R[2]/v.r[2]])}let ae=Math.max(0,H[0]*eo[0]+H[1]*eo[1]+H[2]*eo[2]),ve=.25+.75*Math.pow(T,1.5)*(.65+.35*(H[1]*.5+.5)),J=v.size[0]+(v.size[1]-v.size[0])*s(),Ee=.85+s()*.3,ue=v.leaf.map(ze=>ze*Ee),Fe=v.cell;v.cell===3&&s()<.35&&(Fe=2),c(D,J,Fe,s()*Math.PI*2,[q,ve,.35+.65*ae],ue,v.bloom)}for(let[v,d]of xp){let g=s()<.5;for(let w=0;w<3;w++){let T=[v+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],R=ql(T)*f(T,null);c(T,.32+s()*.12,s()<.7?3:2,s()*6.28,[R,.6+s()*.3,.8],[.75,.9,.6],g?[1,.55,.75]:[.85,.8,1.15])}}let p=i.length/6,u=Array.from({length:p},(v,d)=>d);for(let v=p-1;v>0;v--){let d=Math.floor(s()*(v+1));[u[v],u[d]]=[u[d],u[v]]}let m=[];for(let v of u)for(let d=0;d<6;d++)m.push(i[v*6+d]);return{center:e,corner:t,par:r,light:n,tint:o,bloom:a,elements:m}}var Ue=e=>e.toFixed(4),ys=e=>`vec3(${Ue(e[0])}, ${Ue(e[1])}, ${Ue(e[2])})`,Mp=`
const vec3 SUN = ${ys(eo)};
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
`,s5=_p.map(([e,t])=>`if (hitBox(ro, SUN, ${ys(e)}, ${ys(t)})) return 0.0;`).join(`
	`),c5=to.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${ys(e.c)}, ${ys(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),l5=(e,t,r,n,o,a,i,s,c)=>`
	{
		float t = (${Ue(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${Ue(Po)} && u > ${Ue(r-Be)} && u < ${Ue(r+n*o+Be)}) {
				float k = floor((u - ${Ue(r)}) / ${Ue(n)});
				float a = ${Ue(r)} + k * ${Ue(n)} + (k < 0.5 ? ${Ue(a)} : 0.02);
				float b = ${Ue(r)} + (k + 1.0) * ${Ue(n)} - (k > ${Ue(o-1.5)} ? ${Ue(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Ue(s)}) < 0.5 ? 0.0 : ${Ue(ms+.09)};
				bool hole = (q.y > sill && q.y < ${Ue(Wr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Ue(Wr)} && d * d + (q.y - ${Ue(Wr)}) * (q.y - ${Ue(Wr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,N0=ga+.3,F0=ga+.3,xs=z0+.3,pp=Nt.x1-B.cx-xa-.3,f5=Nt.z1-B.cz-xa-.3,u5=B.cz-Nt.z0-xa-.3,h5=Math.sqrt(xs*xs-N0*N0),d5=Math.sqrt(xs*xs-F0*F0),p5=[[B.cx,B.cz,.86,1.18],[B.cx,B.cz,1.25,.3],...Ul.map(([e,t])=>[e,t,.42,.65])].map(([e,t,r,n])=>`if (hitCyl(ro, vec2(${Ue(e)}, ${Ue(t)}), ${Ue(r)}, ${Ue(n)})) return 0.0;`).join(`
	`),m5=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Ue(B.cx)}, ${Ue(B.cz)}));
	float b1 = xz.y > ${Ue(B.cz)} ? ${Ue(f5)} : ${Ue(u5)};
	vec2 A = vec2(${Ue(N0)}, ${Ue(h5)}), Bp = vec2(${Ue(N0)}, b1), C = vec2(${Ue(pp)}, b1);
	vec2 D = vec2(${Ue(pp)}, ${Ue(F0)}), E = vec2(${Ue(d5)}, ${Ue(F0)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Ue(xs)}));
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
	${s5}
	${l5("z",B.northCol,B.westCol,Hl,G0,Be+gs,Be+gs,vp,"ro.z > "+Ue(B.northCol-Be))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${p5}
	if (ro.y < ${Ue(ya)} && ro.x > ${Ue(Nt.x0)} && ro.x < ${Ue(Nt.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Ue(ya)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Ue(ps*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Ue(ya)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${c5}
	return tr;
}
`,v5=`
precision highp float;
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Mp}
${m5}

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

	if (kind == ${Oe.SKY}.0) {
		gl_FragColor = vec4(tonemap(skyColor(normalize(v_pos - v_eye)) * 1.05), 1.0);
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

	if (kind == ${Oe.GROUND}.0) {
		bool yard = P.x > ${Ue(Nt.x0)} && P.x < ${Ue(Nt.x1)} && P.z < ${Ue(Nt.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Ue(Nt.x0)}, ${Ue(Nt.x1)} - P.x);
			float ez = min(P.z - ${Ue(Nt.z0)}, ${Ue(Nt.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Ue(B.cx)}), dz = abs(P.z - ${Ue(B.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Ue(xa)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Ue(xa)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Ue(z0)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Ue(B.cz)}, P.x - ${Ue(B.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Ue(z0)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Ue(ga)} || dz < ${Ue(ga)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Ue(ga)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Ue(B.cx)}, ${Ue(B.cz)})));
		}
	} else if (kind == ${Oe.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${Oe.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${Oe.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${Oe.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Ue(ya)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${Oe.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${Oe.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${Oe.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${Oe.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${Oe.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 1.0);
		return;
	} else if (kind == ${Oe.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${Oe.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${Oe.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${Oe.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${Oe.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${Oe.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Ue(B.westCol)} || P.x > ${Ue(B.eastCol)} || P.z > ${Ue(B.northCol)}) && P.y < ${Ue(Po+.05)} && P.z > ${Ue(B.south-.1)} && P.z < ${Ue(B.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Ue(B.northCol)} ? P.z - ${Ue(B.northCol)} : (P.x < ${Ue(B.westCol)} ? ${Ue(B.westCol)} - P.x : P.x - ${Ue(B.eastCol)});
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

	gl_FragColor = vec4(tonemap(col), 1.0);
}`,g5=`
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
}`,y5=`
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
}`,x5=`
precision highp float;
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Mp}
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
	gl_FragColor = vec4(tonemap(col), 1.0);
}`;function b5(e,t,r){let n=e.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(t).then(o=>{if(!o.ok)throw new Error("Could not load "+t);return o.blob()}).then(o=>createImageBitmap(o,{premultiplyAlpha:"none"})).then(o=>n({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o)),n}Bl.exports=e=>{let t=o5(),r=i5(),n=b5(e,"res/garden/foliage.webp",[0,0,0,0]),o=Date.now(),a=()=>$l.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:20,i=e({frag:v5,vert:g5,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>$l.gardenDetail}}),s=e({frag:x5,vert:y5,attributes:{center:r.center,corner:r.corner,par:r.par,light:r.light,tint:r.tint,bloom:r.bloom},elements:new Uint32Array(r.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(r.elements.length*$l.leafShare/6)*6});return function(){i(),s()}};Bl.exports.layout={G:B,YARD:Nt,SUN:eo}});var Rp=de((Q4,Cp)=>{"use strict";var w5=oa(),{C:Lp}=gn(),kn=Lp.x1+.35,Xl=Lp.zc,jl=[kn-7.3,2,Xl],Tp=5.2*Math.PI/180,Sp=2100,_5=725,E5=1288,M5=1450,A5=2576,ba=Xl-3.2,kp=Xl+3.3,Wl=kn+5,Vl=kn+11.7,D0=3.9,bs=kn+22.7,$0=40;function T5(){let e=[],t=[],r=[],n=[],o=w5.createBuilder(e,t,r,n),a=(h,p,u,m,v,d)=>{let g=[];for(let w=0;w<=v;w++){g.push([]);for(let T=0;T<=d;T++){let R=[0,1,2].map(D=>h[D]+p[D]*w/v+u[D]*T/d);g[w].push(o.vert(R,m,[0,0,0]))}}for(let w=0;w<v;w++)for(let T=0;T<d;T++)o.tri(g[w][T],g[w+1][T],g[w+1][T+1]),o.tri(g[w][T],g[w+1][T+1],g[w][T+1])},i=kp-ba,s=.7;a([kn-s,0,ba],[Wl-kn+s,0,0],[0,0,i],[0,1,0],6,4);let c=Vl-Wl,f=Math.hypot(c,D0);return a([Wl,0,ba],[c,D0,0],[0,0,i],[-D0/f,c/f,0],6,4),a([Vl,D0,ba],[bs-Vl,0,0],[0,0,i],[0,1,0],6,4),a([kn-s,0,ba],[bs-kn+s,0,0],[0,$0,0],[0,0,1],12,12),a([kn-s,0,kp],[bs-kn+s,0,0],[0,$0,0],[0,0,-1],12,12),a([bs,0,ba],[0,$0,0],[0,0,i],[-1,0,0],8,4),a([kn-s,$0,ba],[bs-kn+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:r,attr:n}}var Bn=e=>e.toFixed(5),S5=`
precision highp float;
uniform sampler2D photo;
varying vec3 v_pos;

void main() {
	vec3 d = v_pos - vec3(${Bn(jl[0])}, ${Bn(jl[1])}, ${Bn(jl[2])});
	float c = ${Bn(Math.cos(Tp))}, s = ${Bn(Math.sin(Tp))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Bn(_5)} + ${Bn(Sp)} * d.z / fw, ${Bn(E5)} - ${Bn(Sp)} * up / fw);
	vec2 uv = px / vec2(${Bn(M5)}, ${Bn(A5)});
	vec2 cuv = clamp(uv, vec2(0.002), vec2(0.998));
	vec3 col = texture2D(photo, cuv).rgb;
	// beyond the edge of the photo, soften what is smeared in from the edge
	float outside = length(max(abs(uv - 0.5) - 0.5, 0.0));
	// (a very blurred sample there, so it reads as a wall in shade, not as streaks)
	vec3 soft = texture2D(photo, cuv, 7.0).rgb * vec3(0.95, 0.9, 0.82);
	col = mix(col, soft, smoothstep(0.0, 0.06, outside));
	// the photo is a little dark for a sunny day
	col = pow(col, vec3(0.9)) * 1.08;
	gl_FragColor = vec4(col, 1.0);
}`,k5=`
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
}`;Cp.exports=e=>{let t=T5(),r=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(o=>{if(!o.ok)throw new Error("Could not load the Florence photo");return o.blob()}).then(o=>createImageBitmap(o)).then(o=>r({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o));let n=e({frag:S5,vert:k5,attributes:{position:t.position},elements:new Uint32Array(t.elements),uniforms:{photo:r},cull:{enable:!1}});return function(){n()}}});var Fp=de((Z4,Np)=>{"use strict";var{A:Ip,BENCH:L5,SHAFT:Yl,TREE:ws,oculusGLSL:C5}=Jn(),R5=Mo(),q0=ws.sxz,zp=ws.sy,Pp=ws.yaw;function I5(e){let t=new DataView(e),r=t.getUint32(4,!0),n=t.getUint32(8,!0),o=t.getUint32(12,!0),a=[0,1,2].map(u=>t.getFloat32(16+u*4,!0)),i=[0,1,2].map(u=>t.getFloat32(28+u*4,!0)),s=40,c=new Uint16Array(e,s,r*3);s+=r*6;let f=new Uint16Array(e,s,r*2);s+=r*4;let h=new Int8Array(e,s,r*3);s+=r*3,s=s+3&-4;let p=new Uint32Array(e,s,o);return{nV:r,nWood:n,nI:o,mn:a,sz:i,pos:c,uv:f,nrm:h,idx:p}}function z5(e){let t=new Float32Array(e.nV*3),r=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),o=new Float32Array(e.nV),a=Math.cos(Pp),i=Math.sin(Pp);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*q0,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*zp,h=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*q0;t[s*3]=Ip.cx+a*c+i*h,t[s*3+1]=L5.soil+.02+f,t[s*3+2]=Ip.zc-i*c+a*h;let p=e.nrm[s*3]/127/q0,u=e.nrm[s*3+1]/127/zp,m=e.nrm[s*3+2]/127/q0,v=Math.hypot(p,u,m)||1;p/=v,u/=v,m/=v,r[s*3]=a*p+i*m,r[s*3+1]=u,r[s*3+2]=-i*p+a*m,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,o[s]=s>=e.nWood?1:0}return{position:t,normal:r,uv:n,leaf:o,elements:e.idx}}function Op(e,t,r,n){let o=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>o({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...r})).catch(a=>console.error(a)),o}var en=e=>e.toFixed(4),mi=ws.crownC,vi=ws.crownR,P5=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

const vec3 SHAFT = vec3(${en(Yl[0])}, ${en(Yl[1])}, ${en(Yl[2])});

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
	vec3 cc = vec3(${en(mi[0])}, ${en(mi[1])}, ${en(mi[2])});
	vec3 cr = vec3(${en(vi[0])}, ${en(vi[1])}, ${en(vi[2])});
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
}`,O5=`
precision highp float;
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

${C5()}

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
	vec3 rel = (v_pos - vec3(${en(mi[0])}, ${en(mi[1])}, ${en(mi[2])})) / vec3(${en(vi[0])}, ${en(vi[1])}, ${en(vi[2])});
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
	gl_FragColor = vec4(col, 1.0);
}`;Np.exports=e=>{let t=null,r=Op(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Op(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),o=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=z5(I5(a));t=e({vert:P5,frag:O5,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:r,bark:n,time:()=>R5.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Xp=de((J4,Kl)=>{"use strict";var{A:Gp,BENCH:jp,oculusGLSL:Wp}=Jn(),Dp=Mo(),N5=1.74,F5=1.877,ro=N5/F5,_a={x:Gp.cx-1.22,z:Gp.zc+.02,hipY:jp.seat+.115},jn=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],$p=e=>[-e[0],-e[1],-e[2],e[3]],Ea=(e,t)=>{let r=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/r*n,e[1]/r*n,e[2]/r*n,Math.cos(t/2)]},qp=(e,t,r)=>jn(Ea([0,0,1],r*Math.PI/180),jn(Ea([0,1,0],t*Math.PI/180),Ea([1,0,0],e*Math.PI/180))),G5=e=>{let t=Math.hypot(...e)||1;return e.map(r=>r/t)};function No(e,t,r){let[n,o,a,i]=t,s=n*n,c=o*o,f=a*a,h=n*o,p=n*a,u=o*a,m=i*n,v=i*o,d=i*a;return[(1-2*(c+f))*r[0],2*(h+d)*r[0],2*(p-v)*r[0],0,2*(h-d)*r[1],(1-2*(s+f))*r[1],2*(u+m)*r[1],0,2*(p+v)*r[2],2*(u-m)*r[2],(1-2*(s+c))*r[2],0,e[0],e[1],e[2],1]}function uo(e,t){let r=new Array(16);for(let n=0;n<4;n++)for(let o=0;o<4;o++)r[n*4+o]=e[o]*t[n*4]+e[4+o]*t[n*4+1]+e[8+o]*t[n*4+2]+e[12+o]*t[n*4+3];return r}function D5(e){let t=Math.hypot(e[0],e[1],e[2]),r=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),o=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/r,c=e[5]/r,f=e[6]/r,h=e[8]/n,p=e[9]/n,u=e[10]/n,m=o+c+u,v;if(m>0){let d=Math.sqrt(m+1)*2;v=[(f-p)/d,(h-i)/d,(a-s)/d,d/4]}else if(o>c&&o>u){let d=Math.sqrt(1+o-c-u)*2;v=[d/4,(s+a)/d,(h+i)/d,(f-p)/d]}else if(c>u){let d=Math.sqrt(1+c-o-u)*2;v=[(s+a)/d,d/4,(p+f)/d,(h-i)/d]}else{let d=Math.sqrt(1+u-o-c)*2;v=[(h+i)/d,(p+f)/d,d/4,(a-s)/d]}return G5(v)}var U0={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,r=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,o)=>{U0[e+"Hand"+n+"1"]=[0,0,t*(18+o*6)*r],U0[e+"Hand"+n+"2"]=[0,0,t*(26+o*6)*r],U0[e+"Hand"+n+"3"]=[0,0,t*16*r]})}function wa(e,t,r){let n=e-t;return n-=Math.round(n),Math.exp(-(n/r)*(n/r))}function Hp(e){let t=9+20*Math.cos(2*Math.PI*e),r=4+13*wa(e,.14,.07)+57*wa(e,.72,.12),n=5*wa(e,.06,.04)-9*wa(e,.42,.12)+17*wa(e,.62,.05)-3*wa(e,.85,.1),o=-26*wa(e,.58,.06);return{hip:t,knee:r,ankle:n,toe:o}}function $5(e){let t=(e%1+1)%1,r=Hp(t),n=Hp(t+.5),o=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*o,0,0],RightArm:[-16*o,0,0],LeftForeArm:[0,-14-8*Math.max(0,-o),0],RightForeArm:[0,14+8*Math.max(0,o),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-r.hip,0,0],LeftLeg:[r.knee,0,0],LeftFoot:[r.ankle,0,0],LeftToeBase:[r.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*o}}var Up=`
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
}`,Bp=`
precision highp float;
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${Wp()}
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
	gl_FragColor = vec4(col, t.a);
}`;function q5(e,t){let r=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((o,a)=>{let i=new Image;i.onload=()=>o(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}var Vp={w:.13,h:.2},H0=e=>.011*(1-Math.pow(1-e,3));function H5(){let e=[],t=[],r=[],n=[],o=[],a=(d,g,w,T,R,D,q)=>{let H=e.length/3;[d,g,w,T].forEach((ae,ve)=>{e.push(...ae),t.push(...R),r.push(...q[ve]),n.push(D)}),o.push(H,H+1,H+2,H,H+2,H+3)},{w:i,h:s}=Vp,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],h=-.006,p=i+.001,u=c+.001;a([0,h,-u],[p,h,-u],[p,h,u],[0,h,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,h+.001,-u],[0,h+.001,u],[p,h+.001,u],[p,h+.001,-u],[0,1,0],2,f),a([-p,h,-u],[0,h,-u],[0,h,u],[-p,h,u],[0,-1,0],2,f),a([-p,h+.001,-u],[-p,h+.001,u],[0,h+.001,u],[0,h+.001,-u],[0,1,0],2,f);let m=8;for(let d of[1,-1]){for(let w=0;w<m;w++){let T=w/m,R=(w+1)/m,D=(.002+T*(i-.002))*d,q=(.002+R*(i-.002))*d,H=H0(T),ae=H0(R),ve=d>0?T:1-T,J=d>0?R:1-R,Ee=1,ue=-(ae-H)/(q-D);a([D,H,-c],[q,ae,-c],[q,ae,c],[D,H,c],[ue,Ee,0],3,[[ve,1],[J,1],[J,0],[ve,0]]),a([D,h+.001,c],[q,h+.001,c],[q,ae,c],[D,H,c],[0,0,1],4,f),a([D,H,-c],[q,ae,-c],[q,h+.001,-c],[D,h+.001,-c],[0,0,-1],4,f)}let g=i*d;a([g,h+.001,-c],[g,H0(1),-c],[g,H0(1),c],[g,h+.001,c],[d,0,0],4,f)}let v=10;for(let d=0;d<v;d++){let g=d/v,w=(d+1)/v,T=e.length/3;for(let[R,D]of[[g,-c],[w,-c],[w,c],[g,c]])e.push(R,0,D),t.push(0,1,0),r.push(R,(D+c)/s),n.push(5);o.push(T,T+1,T+2,T,T+2,T+3)}return{pos:e,nrm:t,uv:r,kind:n,idx:o}}function U5(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let r=7,n=()=>(r=r*16807%2147483647,r/2147483647),o=(i,s,c,f,h,p,u)=>{for(let m=0;m<p;m++){let v=i+(n()-.5)*c*2,d=s+(n()-.5)*f*2,g=20+n()*60,w=t.createRadialGradient(v,d,0,v,d,g);w.addColorStop(0,`rgba(${h},${u})`),w.addColorStop(1,`rgba(${h},0)`),t.fillStyle=w,t.fillRect(v-g,d-g,g*2,g*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var B5=`
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
		float r = u * ${Vp.w.toFixed(3)};
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
}`,j5=`
precision highp float;
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Wp()}
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
	gl_FragColor = vec4(base * light, 1.0);
}`;function W5(){let e=[],t=[],r=[],n=[],o=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],h=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],p=16;for(let u=0;u<h.length;u++){let[m,v,d,g]=h[u],w=g===2?.45:1;for(let T=0;T<=p;T++){let R=T/p*Math.PI*2;e.push(Math.cos(R)*m,v,Math.sin(R)*m*w);let D=Math.max(u-1,0),q=Math.min(u+1,h.length-1),H=h[q][0]-h[D][0],ae=h[q][1]-h[D][1],ve=Math.hypot(H,ae)||1;t.push(Math.cos(R)*ae/ve,-H/ve,Math.sin(R)*ae/ve/w),r.push(...d),n.push(g)}}for(let u=0;u<h.length-1;u++)for(let m=0;m<p;m++){let v=u*(p+1)+m,d=v+p+1;o.push(v,d,v+1,v+1,d,d+1)}return{pos:e,nrm:t,col:r,mat:n,idx:o}}var V5=`
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
}`,X5=`
precision highp float;
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
	gl_FragColor = vec4(col, 1.0);
}`,Y5=`
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
}`,K5=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Kl.exports=e=>{let t="res/avatar/",r=null,n=Date.now(),o=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[_a.x,1.9,_a.z],glow:0};Promise.all([fetch(t+"avatar.json").then(q=>q.json()),fetch(t+"avatar.bin").then(q=>q.arrayBuffer())]).then(([q,H])=>{r=s(q,H)}).catch(q=>console.error(q));let i=e.texture({data:[[[255,255,255,255]]]});function s(q,H){let ae=(Se,nt)=>new Float32Array(H,Se,nt),ve=q.bones,J=ve.length,Ee={};ve.forEach((Se,nt)=>{Ee[Se.name]=nt});let ue=[];for(let Se=0;Se<J;Se++)ue.push(Array.from(ae(q.ibm+Se*64,16)));let Fe=ve.map(Se=>No(Se.t,Se.r,Se.s)),ze=[];for(let Se=0;Se<J;Se++){let nt=ve[Se].parent;ze[Se]=nt<0?Fe[Se]:uo(ze[nt],Fe[Se])}let Ie=ze.map(D5),ye=q.meshes.map(Se=>{let nt=ae(Se.pos,Se.n*3),xt=ae(Se.nrm,Se.n*3),Dt=ae(Se.uv,Se.n*2),_t=new Uint8Array(H,Se.jnt,Se.n*4),Ct=ae(Se.wgt,Se.n*4),bt=new Uint16Array(H,Se.idx,Se.ni),$t={};for(let fn in Se.morphs){let rn=Se.morphs[fn];$t[fn]={idx:new Uint16Array(H,rn.idx,rn.n),d:ae(rn.d,rn.n*3)}}let Yt=new Float32Array(Se.n*3),x=new Float32Array(Se.n*3),jt=new Float32Array(Se.n*3),mr=e.buffer({data:Yt,usage:"dynamic"}),Qe=e.buffer({data:x,usage:"dynamic"}),Rt=/hair/.test(Se.name),ot=/EyeAO|Eyelash/.test(Se.name),nr=/Body|Head/.test(Se.name),sr=Se.kind||0;return{m:Se,pos:nt,nrm:xt,uv:Dt,jnt:_t,wgt:Ct,idx:bt,morphs:$t,outP:Yt,outN:x,work:jt,pb:mr,nbuf:Qe,tex:Se.tex?q5(e,t+Se.tex):i,kind:sr,alphaScale:/EyeAO/.test(Se.name)?.25:1,blend:Se.blend||Rt,alphaCut:Rt?.35:ot?.02:0,skin:nr?1:0}}),rt=e({vert:Up,frag:Bp,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1}}),Xt=e({vert:Up,frag:Bp,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}});for(let Se of ye)Se.uvBuf=e.buffer(Se.uv),Se.el=e.elements({data:Se.idx,type:"uint16"});let ct=ze[Ee.Hips],Ft=Ea([1,0,0],-Math.PI/2),Gt=uo(No([_a.x-ct[12]*ro,_a.hipY-ct[14]*ro,_a.z+ct[13]*ro],Ft,[1,1,1]),No([0,0,0],[0,0,0,1],[ro,ro,ro])),ir=new Array(J),Zt=-1,In=(Se,nt,xt)=>uo(No([Se,0,nt],Ea([0,1,0],xt),[1,1,1]),No([0,0,0],[0,0,0,1],[ro,ro,ro])),pr=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Se=>Ee[Se]),Ir=pr.map(Se=>ze[Se][13]*ro);function At(Se){let nt=$5(Se.phase),xt={},Dt=x=>{for(let jt in x){let mr=x[jt],Qe=qp(mr[0],mr[1],mr[2]);xt[jt]=xt[jt]?jn(xt[jt],Qe):Qe}};Dt(nt.swing),Dt(nt.pose);let _t=Math.cos(Se.heading),Ct=-Math.sin(Se.heading),bt=In(Se.x+_t*nt.sway,Se.z+Ct*nt.sway,Se.heading),$t=new Array(J);for(let x=0;x<J;x++){let jt=ve[x],mr=Fe[x],Qe=xt[jt.name];if(Qe){let Rt=Ie[x],ot=jn($p(Rt),jn(Qe,Rt));mr=No(jt.t,jn(jt.r,ot),jt.s)}$t[x]=jt.parent<0?uo(bt,mr):uo($t[jt.parent],mr)}let Yt=1/0;pr.forEach((x,jt)=>{Yt=Math.min(Yt,$t[x][13]-Ir[jt])});for(let x=0;x<J;x++)$t[x]=$t[x].slice(),$t[x][13]-=Yt,ir[x]=uo($t[x],ue[x]);return{blink:0}}function De(Se,nt){if(nt)return At(nt);let xt=Math.sin(Se*2*Math.PI/4.2),Dt=Se%3.7,_t=Dt<.16?Math.sin(Dt/.16*Math.PI):0,bt={RightArm:[0,0,11*Math.sin(Se*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((Qe,Rt)=>{let ot=Math.sin(Se*1.1-Rt*.5);bt["RightHand"+Qe+"1"]=[0,0,8+12*ot],bt["RightHand"+Qe+"2"]=[0,0,6+10*ot]});let $t={},Yt=(Qe,Rt)=>{for(let ot in Qe){let nr=Qe[ot],sr=qp(nr[0]*Rt,nr[1]*Rt,nr[2]*Rt);$t[ot]=$t[ot]?jn($t[ot],sr):sr}};Yt(U0,1),Yt({Spine1:[xt*.8,0,0],Spine2:[xt*.6,0,0]},1),Yt(bt,1);let x=new Array(J),jt=new Array(J);for(let Qe=0;Qe<J;Qe++){let Rt=ve[Qe],ot=Fe[Qe],nr=$t[Rt.name];if(nr){let sr=Ie[Qe],fn=jn($p(sr),jn(nr,sr));ot=No(Rt.t,jn(Rt.r,fn),Rt.s)}x[Qe]=Rt.parent<0?uo(Gt,ot):uo(x[Rt.parent],ot),jt[Qe]=null}for(let Qe=0;Qe<J;Qe++)ir[Qe]=uo(x[Qe],ue[Qe]);let mr=Qe=>[Qe[12],Qe[13],Qe[14]];return a.headPos=mr(x[Ee.Head]),a.hipsPos=mr(x[Ee.Hips]),a.headM=x[Ee.Head],{blink:_t}}function ft(Se,nt){let{pos:xt,nrm:Dt,jnt:_t,wgt:Ct,outP:bt,outN:$t,work:Yt,m:x}=Se,jt=x.n,mr=xt;if(nt){Yt.set(xt);for(let Qe in Se.morphs){let Rt=nt[Qe]||0;if(Rt<=0)continue;let ot=Se.morphs[Qe];for(let nr=0;nr<ot.idx.length;nr++){let sr=ot.idx[nr]*3;Yt[sr]+=ot.d[nr*3]*Rt,Yt[sr+1]+=ot.d[nr*3+1]*Rt,Yt[sr+2]+=ot.d[nr*3+2]*Rt}}mr=Yt}for(let Qe=0;Qe<jt;Qe++){let Rt=mr[Qe*3],ot=mr[Qe*3+1],nr=mr[Qe*3+2],sr=Dt[Qe*3],fn=Dt[Qe*3+1],rn=Dt[Qe*3+2],Uo=0,Vn=0,zr=0,un=0,Pn=0,Bo=0;for(let go=0;go<4;go++){let On=Ct[Qe*4+go];if(On===0)continue;let er=ir[_t[Qe*4+go]];Uo+=On*(er[0]*Rt+er[4]*ot+er[8]*nr+er[12]),Vn+=On*(er[1]*Rt+er[5]*ot+er[9]*nr+er[13]),zr+=On*(er[2]*Rt+er[6]*ot+er[10]*nr+er[14]),un+=On*(er[0]*sr+er[4]*fn+er[8]*rn),Pn+=On*(er[1]*sr+er[5]*fn+er[9]*rn),Bo+=On*(er[2]*sr+er[6]*fn+er[10]*rn)}bt[Qe*3]=Uo,bt[Qe*3+1]=Vn,bt[Qe*3+2]=zr;let vo=Math.hypot(un,Pn,Bo)||1;$t[Qe*3]=un/vo,$t[Qe*3+1]=Pn/vo,$t[Qe*3+2]=Bo/vo}x.grid&&!Jt&&Je(Se),Se.pb.subdata(bt),Se.nbuf.subdata($t)}function Je(Se){let[nt,xt]=Se.m.grid,Dt=Se.outP,_t=Se.outN,Ct=jp.seat+.012;for(let bt=1;bt<nt;bt++){let $t=Math.pow(1-bt/(nt-1),1.5);for(let Yt=0;Yt<xt;Yt++){let x=(bt*xt+Yt)*3;Dt[x+1]>Ct?Dt[x+1]=Ct+(Dt[x+1]-Ct)*Math.max($t,.15):Dt[x+1]=Ct}}for(let bt=0;bt<_t.length;bt+=3)_t[bt]=0,_t[bt+1]=1,_t[bt+2]=0}let Jt=!1;function zn(Se,nt){Jt=!!nt;let xt=De(Se,nt),Dt={eyeBlinkLeft:xt.blink,eyeBlinkRight:xt.blink};for(let _t of ye)ft(_t,Object.keys(_t.morphs).length?Dt:null);a.pose=xt}return{parts:ye,update:zn,drawOpaque:rt,drawBlend:Xt,state:a}}function c(q,H,ae){let ve=Math.min(1,Math.max(0,(ae-q)/(H-q)));return ve*ve*(3-2*ve)}let f=H5(),h=U5(),p=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):i,u=e({vert:B5,frag:j5,attributes:{position:f.pos,normal:f.nrm,uv:f.uv,kind:f.kind},elements:new Uint16Array(f.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),m=W5(),v=e({vert:V5,frag:X5,attributes:{position:m.pos,normal:m.nrm,color:m.col,mat:m.mat},elements:new Uint16Array(m.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),d=e({vert:Y5,frag:K5,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function g(q){let H=q.headM,ae=ye=>{let rt=Math.hypot(...ye)||1;return ye.map(Xt=>Xt/rt)},ve=ae([H[4],H[5],H[6]]),J=ae([H[8],H[9],H[10]]),Ee=ve,ue=J.map(ye=>-ye),Fe=[ue[1]*Ee[2]-ue[2]*Ee[1],ue[2]*Ee[0]-ue[0]*Ee[2],ue[0]*Ee[1]-ue[1]*Ee[0]],ze=q.headPos,Ie=[0,1,2].map(ye=>ze[ye]+ve[ye]*.06+J[ye]*.185);return[Fe[0],Fe[1],Fe[2],0,ue[0],ue[1],ue[2],0,Ee[0],Ee[1],Ee[2],0,Ie[0],Ie[1],Ie[2],1]}let w=-1,T="",R=null;function D(q){if(!r)return;let H=(Dp.motion,o()),ae=R?[R.x,R.z,R.heading,R.phase].map(J=>J.toFixed(4)).join():"";(ae!==T||!R&&Math.abs(H-w)>(Dp.isPhone?1/30:0))&&(r.update(H,R),w=H,T=ae);for(let J of r.parts)J.blend||r.drawOpaque({pb:J.pb,nb:J.nbuf,uv:J.uvBuf,el:J.el,tex:J.tex,alphaCut:J.alphaCut,skin:J.skin,kind:J.kind,alphaScale:J.alphaScale});let ve=r.state;if(ve.headM&&!R){u({model:g(ve)});let J=ve.headPos,Ee=Math.sin(H*1.3)*.02,ue=[J[0],J[1]+.62+Ee,J[2]+.05],Fe=H*.6,ze=No(ue,jn(Ea([0,1,0],Fe),Ea([0,0,1],.18)),[1.2,1.2,1.2]),Ie=.5+.5*Math.sin(H*2);v({model:ze,pulse:Ie}),a.glowPos=ue,a.glow=.06+.03*Ie,d({center:[ue[0],ue[1]-.12,ue[2]],size:.1,pulse:Ie})}for(let J of r.parts)J.blend&&r.drawBlend({pb:J.pb,nb:J.nbuf,uv:J.uvBuf,el:J.el,tex:J.tex,alphaCut:J.alphaCut,skin:J.skin,kind:J.kind,alphaScale:J.alphaScale})}return D.state=a,D.place=_a,D.setWalk=q=>{R=q||null,R&&(a.glow=0)},D};Kl.exports.PLACE=_a});var Ql=de((eE,Yp)=>{"use strict";Yp.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Zl=de((tE,Kp)=>{Kp.exports=1e-6});var Jl=de((rE,Qp)=>{Qp.exports=Q5;function Q5(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var Jp=de((nE,Zp)=>{Zp.exports=Z5;function Z5(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var ef=de((oE,em)=>{em.exports=J5;function J5(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}});var tf=de((aE,tm)=>{tm.exports=ew;function ew(e,t){var r=t[0],n=t[1],o=t[2],a=r*r+n*n+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var rf=de((iE,rm)=>{rm.exports=tw;function tw(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var im=de((sE,am)=>{am.exports=nw;var nm=ef(),om=tf(),rw=rf();function nw(e,t){var r=nm(e[0],e[1],e[2]),n=nm(t[0],t[1],t[2]);om(r,r),om(n,n);var o=rw(r,n);return o>1?0:Math.acos(o)}});var cm=de((cE,sm)=>{sm.exports=ow;function ow(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var fm=de((lE,lm)=>{lm.exports=aw;function aw(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}});var hm=de((fE,um)=>{um.exports=iw;var nf=Zl();function iw(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(r-a)<=nf*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=nf*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(o-s)<=nf*Math.max(1,Math.abs(o),Math.abs(s))}});var pm=de((uE,dm)=>{dm.exports=sw;function sw(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var vm=de((hE,mm)=>{mm.exports=cw;function cw(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}});var of=de((dE,gm)=>{gm.exports=lw;function lw(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}});var xm=de((pE,ym)=>{ym.exports=of()});var af=de((mE,bm)=>{bm.exports=fw;function fw(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}});var _m=de((vE,wm)=>{wm.exports=af()});var sf=de((gE,Em)=>{Em.exports=uw;function uw(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}});var Am=de((yE,Mm)=>{Mm.exports=sf()});var Sm=de((xE,Tm)=>{Tm.exports=hw;function hw(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}});var Lm=de((bE,km)=>{km.exports=dw;function dw(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}});var Rm=de((wE,Cm)=>{Cm.exports=pw;function pw(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var zm=de((_E,Im)=>{Im.exports=mw;function mw(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var Om=de((EE,Pm)=>{Pm.exports=vw;function vw(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var Fm=de((ME,Nm)=>{Nm.exports=gw;function gw(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}});var Dm=de((AE,Gm)=>{Gm.exports=yw;function yw(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}});var cf=de((TE,$m)=>{$m.exports=xw;function xw(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}});var Hm=de((SE,qm)=>{qm.exports=cf()});var lf=de((kE,Um)=>{Um.exports=bw;function bw(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}});var jm=de((LE,Bm)=>{Bm.exports=lf()});var ff=de((CE,Wm)=>{Wm.exports=ww;function ww(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}});var Xm=de((RE,Vm)=>{Vm.exports=ff()});var uf=de((IE,Ym)=>{Ym.exports=_w;function _w(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}});var Qm=de((zE,Km)=>{Km.exports=uf()});var Jm=de((PE,Zm)=>{Zm.exports=Ew;function Ew(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var tv=de((OE,ev)=>{ev.exports=Mw;function Mw(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var nv=de((NE,rv)=>{rv.exports=Aw;function Aw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2];return e[0]=o*c-a*s,e[1]=a*i-n*c,e[2]=n*s-o*i,e}});var av=de((FE,ov)=>{ov.exports=Tw;function Tw(e,t,r,n){var o=t[0],a=t[1],i=t[2];return e[0]=o+n*(r[0]-o),e[1]=a+n*(r[1]-a),e[2]=i+n*(r[2]-i),e}});var sv=de((GE,iv)=>{iv.exports=Sw;function Sw(e,t){t=t||1;var r=Math.random()*2*Math.PI,n=Math.random()*2-1,o=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=n*t,e}});var lv=de((DE,cv)=>{cv.exports=kw;function kw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[3]*n+r[7]*o+r[11]*a+r[15];return i=i||1,e[0]=(r[0]*n+r[4]*o+r[8]*a+r[12])/i,e[1]=(r[1]*n+r[5]*o+r[9]*a+r[13])/i,e[2]=(r[2]*n+r[6]*o+r[10]*a+r[14])/i,e}});var uv=de(($E,fv)=>{fv.exports=Lw;function Lw(e,t,r){var n=t[0],o=t[1],a=t[2];return e[0]=n*r[0]+o*r[3]+a*r[6],e[1]=n*r[1]+o*r[4]+a*r[7],e[2]=n*r[2]+o*r[5]+a*r[8],e}});var dv=de((qE,hv)=>{hv.exports=Cw;function Cw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2],f=r[3],h=f*n+s*a-c*o,p=f*o+c*n-i*a,u=f*a+i*o-s*n,m=-i*n-s*o-c*a;return e[0]=h*f+m*-i+p*-c-u*-s,e[1]=p*f+m*-s+u*-i-h*-c,e[2]=u*f+m*-c+h*-s-p*-i,e}});var mv=de((HE,pv)=>{pv.exports=Rw;function Rw(e,t,r,n){var o=r[1],a=r[2],i=t[1]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=o+i*f-s*c,e[2]=a+i*c+s*f,e}});var gv=de((UE,vv)=>{vv.exports=Iw;function Iw(e,t,r,n){var o=r[0],a=r[2],i=t[0]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var xv=de((BE,yv)=>{yv.exports=zw;function zw(e,t,r,n){var o=r[0],a=r[1],i=t[0]-o,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var wv=de((jE,bv)=>{bv.exports=Pw;var Fo=Jl()();function Pw(e,t,r,n,o,a){var i,s;for(t||(t=3),r||(r=0),n?s=Math.min(n*t+r,e.length):s=e.length,i=r;i<s;i+=t)Fo[0]=e[i],Fo[1]=e[i+1],Fo[2]=e[i+2],o(Fo,Fo,a),e[i]=Fo[0],e[i+1]=Fo[1],e[i+2]=Fo[2];return e}});var Ev=de((WE,_v)=>{_v.exports={EPSILON:Zl(),create:Jl(),clone:Jp(),angle:im(),fromValues:ef(),copy:cm(),set:fm(),equals:hm(),exactEquals:pm(),add:vm(),subtract:of(),sub:xm(),multiply:af(),mul:_m(),divide:sf(),div:Am(),min:Sm(),max:Lm(),floor:Rm(),ceil:zm(),round:Om(),scale:Fm(),scaleAndAdd:Dm(),distance:cf(),dist:Hm(),squaredDistance:lf(),sqrDist:jm(),length:ff(),len:Xm(),squaredLength:uf(),sqrLen:Qm(),negate:Jm(),inverse:tv(),normalize:tf(),dot:rf(),cross:nv(),lerp:av(),random:sv(),transformMat4:lv(),transformMat3:uv(),transformQuat:dv(),rotateX:mv(),rotateY:gv(),rotateZ:xv(),forEach:wv()}});var Tv=de((VE,Av)=>{"use strict";function Mv(){let e={};return{on(t,r){return(e[t]=e[t]||[]).push(r),this},emit(t,r){(e[t]||[]).slice().forEach(n=>n(r))}}}Av.exports=function(t){let r=t.ownerDocument||document,n=Mv(),o=null,a={dx:0,dy:0,dt:0},i=0,s=()=>r.pointerLockElement||r.webkitPointerLockElement||null,c=()=>{if(s())return;let h=t.requestPointerLock||t.webkitRequestPointerLock;if(h)try{let p=h.call(t);p&&p.catch&&p.catch(()=>{})}catch(p){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){o&&(n.emit("release"),o.emit("end"),o=null);return}o=Mv(),i=Date.now(),n.emit("attain",o)};return r.addEventListener("pointerlockchange",f),r.addEventListener("webkitpointerlockchange",f),r.addEventListener("pointerlockerror",()=>n.emit("error")),(r.body||t).addEventListener("mousemove",h=>{o&&(a.dx=h.movementX||h.webkitMovementX||0,a.dy=h.movementY||h.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),o.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(r.exitPointerLock||r.webkitExitPointerLock).call(r)},n}});var Rv=de((KE,Cv)=>{"use strict";var Ma=as(),Aa=Ev(),Ow=Tv(),XE=Math.PI/4,YE=Math.PI/6,Sv=2,Nw=1,Fw=2.4,Gw=2.4,Dw=1e3,$w=5,qw=7,hf=gn().C,_s=[[7,1.6],[7,hf.zc],[hf.x1-2.95,hf.zc]],Go=_s.slice(1).map((e,t)=>{let r=_s[t],n=e[0]-r[0],o=e[1]-r[1],a=Math.hypot(n,o);return{a:r,len:a,dir:[n/a,o/a]}}),df=Go.reduce((e,t)=>e+t.len,0);function kv(e){let t=Math.max(0,Math.min(df,e));for(let n of Go){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let r=_s[_s.length-1];return[r[0],r[1]]}function Hw(e){let t=0;for(let n=0;n<Go.length;n++){let o=Go[n],a=t+o.len;if(e<a-1e-4||n===Go.length-1){let i=o.dir,c=e<=t+1e-4&&n>0?Go[n-1].dir:o.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let r=Go[Go.length-1].dir;return{ahead:r,back:[-r[0],-r[1]]}}var Uw=Math.PI/4,Bw=7,jw=140,Ww=70,Lv=(e,t,r)=>(1-e)*t+e*r,Vw=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Cv.exports=function({getGridSegments:e,getGridParts:t},r){var n=[0,Math.PI],o=[0,Math.PI],a=0,i=[0,0,0],s=[qw,Sv,_s[0][1]],c=0,f=1,h=[.707,0,.707],p=[0,1,0],u=[0,0,0],m=.5,v=Ma.identity([]),d=Ma.identity([]),g=!1,w=[0,0,0],T=[0,0,0],R=1,D=!1;let q=De=>{n[1]+=De*Uw},H=(De,ft,Je)=>{if(De=Math.max(Math.min(De,100),-100),ft=Math.max(Math.min(ft,100),-100),n[0]=0,D){a=0;return}for(a+=De;a>=Je;)q(1),a-=Je;for(;a<=-Je;)q(-1),a+=Je};Ow(document.body).on("attain",De=>{De.on("data",ft=>{H(ft.dx,ft.dy,jw)})});let ve=null,J=null,Ee=0,ue={x:0,y:0},Fe=58,ze=document.createElement("div");ze.id="museum-mobile-controls",ze.innerHTML=`

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
	`,document.body.appendChild(ze);let Ie=ze.querySelector("#museum-joystick"),ye=ze.querySelector("#museum-joystick-knob"),rt=()=>{ye.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},Xt=De=>{let ft=De.clientX-ue.x,Je=De.clientY-ue.y,Jt=Math.hypot(ft,Je);if(Jt>Fe&&(ft=ft/Jt*Fe,Je=Je/Jt*Fe),ye.style.transform=`translate(
				calc(-50% + ${ft}px),
				calc(-50% + ${Je}px)
			)`,Jt<10){i[0]=0,i[2]=0;return}let Se=ft/Fe,nt=Je/Fe;i[0]=0,i[2]=Math.abs(nt)>.15?nt:0},ct=(De,ft)=>{for(let Je=0;Je<De.length;Je++)if(De[Je].identifier===ft)return De[Je];return null},Ft=De=>!!(De&&De.closest&&De.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Gt=De=>{if(!Ft(De.target)&&(De.cancelable&&De.preventDefault(),!D))for(let ft=0;ft<De.changedTouches.length;ft++){let Je=De.changedTouches[ft];if(ve===null&&Je.clientX<window.innerWidth*.48){ve=Je.identifier;let Jt=Ie.getBoundingClientRect();ue.x=Jt.left+Jt.width/2,ue.y=Jt.top+Jt.height/2,Xt(Je)}else J===null&&Je.clientX>=window.innerWidth*.48&&(J=Je.identifier,Ee=Je.clientX,a=0)}},ir=De=>{if(Ft(De.target)||(De.cancelable&&De.preventDefault(),D))return;let ft=ve===null?null:ct(De.touches,ve);ft&&Xt(ft);let Je=J===null?null:ct(De.touches,J);if(Je){let Jt=Je.clientX-Ee;Ee=Je.clientX,H(Jt,0,Ww)}},Zt=De=>{if(!Ft(De.target)){De.cancelable&&De.preventDefault();for(let ft=0;ft<De.changedTouches.length;ft++){let Je=De.changedTouches[ft];Je.identifier===ve&&(ve=null,rt()),Je.identifier===J&&(J=null)}}};document.addEventListener("touchstart",Gt,{passive:!1}),document.addEventListener("touchmove",ir,{passive:!1}),document.addEventListener("touchend",Zt,{passive:!1}),document.addEventListener("touchcancel",Zt,{passive:!1});let In=document.createElement("style");In.textContent=`

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
	`,document.head.appendChild(In);var pr={};let Ir=De=>{if(De.defaultPrevented||De.ctrlKey||De.altKey||De.metaKey)return;let ft=De.type==="keydown";pr[De.code]=ft,ft&&!De.repeat&&!D&&((De.code==="KeyA"||De.code==="ArrowLeft")&&q(-1),(De.code==="KeyD"||De.code==="ArrowRight")&&q(1)),g=!1;let Je=pr.KeyW||pr.ArrowUp?1:0;i=[0,0,(pr.KeyS||pr.ArrowDown?1:0)-Je],De.preventDefault()};window.addEventListener("keydown",Ir),window.addEventListener("keyup",Ir);var At=0;return{pos:s,fmouse:o,forward:h,up:p,setPaused:De=>{D=!!De,D&&(i[0]=0,i[2]=0,rt())},place:(De,ft)=>{c=Math.max(0,Math.min(df,De));let Je=kv(c);s[0]=Je[0],s[2]=Je[1],n[1]=ft,o[1]=ft,a=0,f=1},view:()=>v,proj:()=>(Ma.perspective(d,r(),window.innerWidth/window.innerHeight,.1,700),d),tick:({time:De})=>{let ft=De-At;At=De;let Je=[0,0,0],Jt=[];Aa.set(h,Math.sin(o[1]),0,-Math.cos(o[1])),Aa.set(p,0,1,0);let zn=g?Gw:Fw,Se=Math.sin(n[1]),nt=-Math.cos(n[1]),xt=Hw(c),Dt=Se*xt.ahead[0]+nt*xt.ahead[1],_t=Se*xt.back[0]+nt*xt.back[1],Ct=f;Math.max(Dt,_t)>.3&&(Ct=Dt>=_t?1:-1);let bt=-i[2]*Ct*zn*Math.min(ft,.1);D&&(i[0]=0,i[2]=0,bt=0),bt!==0&&(f=Math.sign(bt)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(df,c+bt));let $t=kv(c);Aa.set(u,$t[0]-s[0],0,$t[1]-s[2]);let Yt=Aa.len(u);Yt===0&&m!==.25&&(m=(Math.abs((m+.5)%1-.5)-.25)*.8+.25,(m+.01)%.25<.02&&(m=.25));let x=m;if(m+=Yt/(g?$w:Dw),s[1]=Sv,Aa.add(s,s,u),R<1){R+=ft/Nw,R=Math.min(R,1);let jt=Vw(R);Aa.set(s,Lv(jt,w[0],T[0]),s[1],Lv(jt,w[2],T[2]))}o[0]=0,o[1]+=(n[1]-o[1])*Math.min(1,Math.min(ft,.1)*Bw),Math.abs(n[1]-o[1])<5e-4&&(o[1]=n[1]),Ma.identity(v),Ma.rotateX(v,v,0),Ma.rotateY(v,v,o[1]),Ma.translate(v,v,Aa.scale(Je,s,-1))}}}});var zv=de((QE,Iv)=>{"use strict";var{skylightGLSL:Xw,Z_START:Yw,Z_END:Kw,GLASS_Y:Qw}=Ja(),{oculusGLSL:Zw,A:Ta}=Jn(),{windowLightGLSL:Jw,C:B0}=gn(),{doorLightGLSL:e_}=aa(),Ln=e=>e.toFixed(4),pf=.1,mf=700,Sa={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.045};function t_(e,t){let r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],m=t[11],v=t[12],d=t[13],g=t[14],w=t[15],T=r*s-n*i,R=r*c-o*i,D=r*f-a*i,q=n*c-o*s,H=n*f-a*s,ae=o*f-a*c,ve=h*d-p*v,J=h*g-u*v,Ee=h*w-m*v,ue=p*g-u*d,Fe=p*w-m*d,ze=u*w-m*g,Ie=T*ze-R*Fe+D*ue+q*Ee-H*J+ae*ve;return Ie?(Ie=1/Ie,e[0]=(s*ze-c*Fe+f*ue)*Ie,e[1]=(o*Fe-n*ze-a*ue)*Ie,e[2]=(d*ae-g*H+w*q)*Ie,e[3]=(u*H-p*ae-m*q)*Ie,e[4]=(c*Ee-i*ze-f*J)*Ie,e[5]=(r*ze-o*Ee+a*J)*Ie,e[6]=(g*D-v*ae-w*R)*Ie,e[7]=(h*ae-u*D+m*R)*Ie,e[8]=(i*Fe-s*Ee+f*ve)*Ie,e[9]=(n*Ee-r*Fe-a*ve)*Ie,e[10]=(v*H-d*D+w*T)*Ie,e[11]=(p*D-h*H-m*T)*Ie,e[12]=(s*J-i*ue-c*ve)*Ie,e[13]=(r*ue-n*J+o*ve)*Ie,e[14]=(d*R-v*q-g*T)*Ie,e[15]=(h*q-p*R+u*T)*Ie,e):null}function r_(e,t,r){let n=new Array(16);for(let o=0;o<4;o++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*r[o*4+s];n[o*4+a]=i}for(let o=0;o<16;o++)e[o]=n[o];return e}var n_=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Iv.exports=(e,t)=>{let r=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),o=r?10:22,a=()=>t.post>=2?2:4,i=ye=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},ye||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,h=e.framebuffer({color:c,depth:f||!0}),p=[s(),s()],u=[s(),s()],m=[s(),s()],v=[s(),s()],d=new Array(16).fill(0),g=new Array(16).fill(0),w=[0,0,0],T={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},R={position:[-1,-1,3,-1,-1,3]},D=(ye,rt,Xt)=>e(Object.assign({vert:n_,frag:ye,attributes:R,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:rt,framebuffer:e.prop("out")},Xt||{})),q=[2.6,0,Yw-3.2,12.6,Qw,Kw+.4],H=[Ta.x0-.2,0,Ta.z0,Ta.x1,Ta.domeTop,Ta.z1],ae=[B0.x0,0,B0.z0,B0.x1,7.6,B0.z1],ve=[.35,0,.35,13.65,7.6,9],J=ye=>`vec3(${Ln(ye[0])}, ${Ln(ye[1])}, ${Ln(ye[2])}), vec3(${Ln(ye[3])}, ${Ln(ye[4])}, ${Ln(ye[5])})`,Ee=D(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D depthTex;
	uniform mat4 invVP;
	uniform vec3 eye;
	uniform float time;
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

	${Xw()}
	${Zw()}
	${Jw()}
	${e_()}

	// the air is not perfectly even: slow drifting wisps of dust
	float air(vec3 p) {
		vec2 a = p.xz * 0.55 + vec2(p.y * 0.35 + time * 0.05, -p.y * 0.2 - time * 0.03);
		vec2 b = p.zy * 0.9 + vec2(time * 0.04, p.x * 0.3);
		float n = vnoise(a) * vnoise(b + 3.7);
		return 0.3 + 1.6 * n * n;
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
			vec2 t = hitBox(eye, rd, ${J(q)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += skylightVol(p) * air(p);
				}
				float ph = phase(dot(rd, SKY_SUN), 0.55) + 0.05;
				sum += vec3(1.0, 0.86, 0.64) * acc * st * ph * strength.x;
			}
		}

		// the glass dome over the tree
		if (strength.y > 0.0) {
			vec2 t = hitBox(eye, rd, ${J(H)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Ln(Ta.dome.base)} && p.x > ${Ln(Ta.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += vec3(1.0, 0.88, 0.68) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${J(ae)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += windowLight(p, WIN_SKY) * air(p);
				}
				float ph = phase(dot(rd, WIN_SKY), 0.45) + 0.05;
				sum += vec3(0.86, 0.90, 1.0) * acc * st * ph * strength.z;
			}
		}

		// the entrance door
		if (strength.w > 0.0) {
			vec2 t = hitBox(eye, rd, ${J(ve)});
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
				sum += vec3(1.0, 0.85, 0.66) * acc * st * ph * strength.w;
			}
		}

		gl_FragColor = vec4(sum, 1.0);
	}`,{depthTex:()=>f,invVP:()=>d,eye:()=>w,time:e.context("time"),strength:()=>{let ye=Sa.shafts*T.shafts;return[.06*ye,.1*ye,.07*ye,.04*ye]}}),ue=D(`
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
	}`,{src:e.prop("src"),dir:(ye,rt)=>[rt.dir[0]/rt.size[0],rt.dir[1]/rt.size[1]]}),Fe=D(`
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
	}`,{src:e.prop("src"),texel:(ye,rt)=>[.5/rt.size[0],.5/rt.size[1]],threshold:e.prop("threshold")}),ze=D(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D scene, depthTex, soft, bloomA, bloomB, shafts;
	uniform vec2 res;
	uniform float time, exposure, vignette, grain, letterbox, fade, aperture, focus, hasDepth, bloomK;
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
		return 2.0 * ${Ln(pf)} * ${Ln(mf)} / (${Ln(mf+pf)} - z * ${Ln(mf-pf)});
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
		col = col * col * (3.0 - 2.0 * col) * 0.35 + col * 0.65;
		float l2 = luma(col);
		col = mix(col, col * vec3(1.05, 0.99, 0.90), (1.0 - smoothstep(0.0, 0.5, l2)) * 0.7);
		col = mix(vec3(l2), col, 0.93);

		// vignette
		vec2 q = (p - 0.5) * vec2(res.x / res.y, 1.0);
		float vig = 1.0 - smoothstep(0.35, 1.25, length(q * vec2(0.82, 1.0)) * 1.15) * vignette;
		col *= vig;

		// film grain, stronger in the shadows
		float n = hash12(gl_FragCoord.xy + fract(time * 13.37) * 113.0) - 0.5;
		col += n * grain * (1.0 - 0.6 * luma(col));

		col = mix(col, fadeColor, fade);
		gl_FragColor = vec4(col, 1.0);
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>p[0],bloomA:()=>u[0],bloomB:()=>m[0],shafts:()=>v[0],res:ye=>[ye.drawingBufferWidth,ye.drawingBufferHeight],time:e.context("time"),exposure:()=>Sa.exposure*T.exposure,vignette:()=>Math.min(1,Sa.vignette+T.vignette),grain:()=>Sa.grain,bloomK:()=>Sa.bloom,letterbox:()=>T.letterbox,fade:()=>T.fade,fadeColor:()=>T.fadeColor,aperture:()=>t.post>=2?T.aperture:0,focus:()=>T.focus,hasDepth:n?1:0},{framebuffer:null}),Ie=e({framebuffer:()=>h});return{shot:T,look:Sa,hasDepth:n,capture(ye,rt,Xt){let ct=ye.drawingBufferWidth,Ft=ye.drawingBufferHeight;h.resize(ct,Ft);let Gt=Math.max(1,Math.ceil(ct/2)),ir=Math.max(1,Math.ceil(Ft/2));p.forEach(Zt=>Zt.resize(Gt,ir)),u.forEach(Zt=>Zt.resize(Math.max(1,Math.ceil(ct/4)),Math.max(1,Math.ceil(Ft/4)))),m.forEach(Zt=>Zt.resize(Math.max(1,Math.ceil(ct/8)),Math.max(1,Math.ceil(Ft/8)))),v.forEach(Zt=>Zt.resize(Math.max(1,Math.ceil(ct/a())),Math.max(1,Math.ceil(Ft/a())))),r_(g,rt.proj,rt.view),t_(d,g),w[0]=rt.eye[0],w[1]=rt.eye[1],w[2]=rt.eye[2],Ie(()=>{e.clear({color:[0,0,0,1],depth:1}),Xt()})},present(){let ye=rt=>[rt.width,rt.height];n&&t.post>=1&&Sa.shafts*T.shafts>.001?(Ee({out:v[0]}),ue({out:v[1],src:v[0],dir:[1,0],size:ye(v[0])}),ue({out:v[0],src:v[1],dir:[0,1],size:ye(v[0])})):e.clear({color:[0,0,0,1],framebuffer:v[0]}),Fe({out:p[0],src:c,size:[h.width,h.height],threshold:0}),ue({out:p[1],src:p[0],dir:[1,0],size:ye(p[0])}),ue({out:p[0],src:p[1],dir:[0,1],size:ye(p[0])}),Fe({out:u[0],src:p[0],size:ye(p[0]),threshold:.42}),ue({out:u[1],src:u[0],dir:[1,0],size:ye(u[0])}),ue({out:u[0],src:u[1],dir:[0,1],size:ye(u[0])}),Fe({out:m[0],src:u[0],size:ye(u[0]),threshold:0}),ue({out:m[1],src:m[0],dir:[1.5,0],size:ye(m[0])}),ue({out:m[0],src:m[1],dir:[0,1.5],size:ye(m[0])}),ze({out:null})}}}});var Fv=de((ZE,Nv)=>{"use strict";var o_=oa(),vf=aa(),{C:a_,FAR_DOOR:i_}=gn(),s_=100*Math.PI/180,Pv=e=>[i_.x-e[2],e[1],a_.zc-7+e[0]],Ov=e=>[-e[2],e[1],e[0]];function c_(e){let t=[],r=[],n=[],o=[],a=o_.createBuilder(t,r,n,o);vf.addFrames(a,e);let i=vf.glassPanes(e),s=c=>{let f=[];for(let h=0;h<c.length;h+=3)f.push([c[h],c[h+1],c[h+2]]);return f};return{position:s(t),normal:s(r),elements:n,glass:i}}Nv.exports=e=>{let t=vf.DOOR,r=["left","right"].map(h=>{let p=c_(h),u=p.position.length;return{part:h,hinge:h==="left"?t.x0:t.x1,sign:h==="left"?-1:1,src:p.position.map(m=>m.slice()),srcN:p.normal.map(m=>m.slice()),srcG:p.glass.map(m=>m.slice()),pos:e.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(p.elements),type:"uint32"}),glassCount:p.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(p.glass.length*3),outGN:new Float32Array(p.glass.length*3)}}),n=null;function o(h){if(h!==n){n=h;for(let p of r){let u=p.sign*h,m=Math.cos(u),v=Math.sin(u),d=T=>{let R=T[0]-p.hinge,D=T[2];return[p.hinge+R*m+D*v,T[1],-R*v+D*m]},g=T=>[T[0]*m+T[2]*v,T[1],-T[0]*v+T[2]*m];p.src.forEach((T,R)=>{let D=Pv(d(T));p.outP.set(D,R*3),p.outN.set(Ov(g(p.srcN[R])),R*3)});let w=Ov(g([0,0,1]));p.srcG.forEach((T,R)=>{p.outG.set(Pv(d(T)),R*3),p.outGN.set(w,R*3)}),p.pos.subdata(p.outP),p.nrm.subdata(p.outN),p.gpos.subdata(p.outG),p.gnrm.subdata(p.outGN)}}}o(0);let a=`
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
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},elements:e.prop("el"),cull:{enable:!1}}),s=e({vert:a,frag:`
		precision highp float;
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{o(c*s_);for(let h of r)i({pos:h.pos,nrm:h.nrm,el:h.el})};return f.glass=()=>{for(let h of r)s({pos:h.gpos,nrm:h.gnrm,count:h.glassCount})},f.setOpen=h=>{c=h||0},f}});var Dv=de((JE,Gv)=>{"use strict";var{skylightGLSL:l_}=Ja(),{oculusGLSL:f_}=Jn(),{windowLightGLSL:u_}=gn(),Do=.22;function h_(){let e=[],t=[],r=[],n=[];for(let c=0;c<=14;c++){let f=c/14,h=Do*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9);for(let p=0;p<=4*2;p++){let u=p/4-1,m=f*Do-Do*.12,v=u*h,d=Math.abs(u)*h*.35-.12*f*f*Do;e.push([m,d,v]),t.push([0,1,0]),r.push([f,u])}}let i=4*2+1;for(let c=0;c<14;c++)for(let f=0;f<i-1;f++){let h=c*i+f,p=h+1,u=h+i,m=u+1;n.push([h,u,p],[p,u,m])}let s=e.length;return e.push([-Do*.12,0,-.003],[-Do*.12,0,.003],[-Do*.24,-.01,.0015],[-Do*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),r.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([s,s+2,s+1],[s,s+3,s+2]),{pos:e,nrm:t,uv:r,idx:n}}Gv.exports=e=>{let t=h_(),r=e({vert:`
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
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${l_()}
		${f_()}
		${u_()}

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

			gl_FragColor = vec4(col * visible, 1.0);
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}});return function(n){n&&n.visible&&r({model:n.model})}}});var Hv=de((e6,qv)=>{"use strict";var{skylightGLSL:d_,Z_START:$v,Z_END:p_}=Ja(),{oculusGLSL:m_,A:gi}=Jn();qv.exports=(e,t)=>{let r=t.isPhone?900:2600,n=t.isPhone?350:900,o=7,a=()=>(o=o*16807%2147483647,(o-1)/2147483646),i=[];for(let s=0;s<r;s++)i.push([2.5+a()*10.5,.3+a()*8,$v-3.5+a()*(p_-$v+4.5),a()]);for(let s=0;s<n;s++)i.push([gi.x0+.3+a()*(gi.x1-gi.x0-.6),.3+a()*7.5,gi.z0+.3+a()*(gi.z1-gi.z0-.6),a()]);return e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;

		${d_()}
		${m_()}

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
		varying float v_light;
		varying float v_seed;
		void main() {
			vec2 c = gl_PointCoord - 0.5;
			float a = 1.0 - smoothstep(0.15, 0.5, length(c));
			// each mote twinkles as it turns
			float tw = 0.55 + 0.45 * sin(time * (1.5 + v_seed * 3.0) + v_seed * 40.0);
			gl_FragColor = vec4(vec3(1.0, 0.93, 0.80) * a * v_light * tw * 0.75, 1.0);
		}`,attributes:{seed:i},count:i.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:s=>s.viewportHeight*.006},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}})}});var Jv=de((t6,Zv)=>{"use strict";var ho=as(),j0=Ql(),gf=s0(),v_=c0(),{A:xn}=Jn(),{C:Gr,PAINTING_X:_i}=gn(),bn=e=>Math.max(0,Math.min(1,e)),Le=(e,t,r)=>e+(t-e)*r,Qt=(e,t,r)=>[Le(e[0],t[0],r),Le(e[1],t[1],r),Le(e[2],t[2],r)],kt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Uv=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Bv=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Me=(e,t,r)=>{let n=bn((r-e)/(t-e));return n*n*(3-2*n)},jv=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,g_=e=>e*e*e,yf=e=>1-Math.pow(1-e,3),dr=e=>-(Math.cos(Math.PI*e)-1)/2;function br(e,t){let r=e.length-1,n=bn(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],h=a*a,p=h*a;return[0,1,2].map(u=>.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-f[u])*h+(-i[u]+3*s[u]-3*c[u]+f[u])*p))}var vt=(e,t,r,n)=>({eye:e,target:t,fov:r,roll:n||0});function Ra(e,t,r){return vt(Qt(e.eye,t.eye,r),Qt(e.target,t.target,r),Le(e.fov,t.fov,r),Le(e.roll,t.roll,r))}var Mf=()=>Me(.75,1.3,window.innerWidth/window.innerHeight),tn=(e,t)=>Ra(e,t,Mf()),W0=[7,3.95,Gr.hallEnd-.05],y_=[Gr.x1,2.9,Gr.zc],bi=[16.75,4.55,6.75],Af=[6.92,2.72,14.5],Wn=[7.3,.015,47.1],x_=[bi,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Af],b_=[Af,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Wn],ka=[_i[0],3,Gr.z0],La=[_i[1],3,Gr.z0],bf=47.45,Qv=4.6,w_=13.2,__=1.42,Es=[7.55,1.25,46.75],Tf=[17.25,2.42,46],Sf=[26.05,1.95,46],Ms=[36.15,.015,44],Y0=()=>Le(6.8,6.15,Mf()),E_=[Es,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Tf],M_=[Tf,[20.2,2.05,45.6],[23.2,1.8,45],Sf],Ca=[_i[2],3,Gr.z0],wf=[34.8,1.35,46],qo=[7.89,.03,19.03],Wv=.36,Vv=13.64,Br=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Cn(e){let t=e.side==="left"?1:-1;return Qt([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],Mf())}function A_(e){return e.side==="left"?tn(vt([8.6,3.9,e.z],[Wv,1.45,e.z],76),vt([8,3.6,e.z+.7],[Wv,3.95,e.z-2],46,-.008)):tn(vt([5.4,3.9,e.z],[Vv,1.45,e.z],76),vt([6,3.6,e.z-.7],[Vv,3.95,e.z+2],46,-.008))}var T_=()=>[Ms,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Cn(Br[0])],S_=()=>[Cn(Br[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Cn(Br[3])],k_=()=>[Cn(Br[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],qo],Xv={2:{pos:()=>Af,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Es,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Tf,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Sf,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>wf,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Cn(Br[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Cn(Br[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Cn(Br[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Cn(Br[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Cn(Br[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Cn(Br[5]),amp:[.12,.08,.1],tumble:.5}},$o=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),r=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=tn(vt([Gr.x0+.9,1.85,Gr.zc+.25],[Gr.x1,2.85,Gr.zc-.1],64),vt([Gr.x0+1.2,2,Gr.zc+.35],[Gr.x1,2.6,Gr.zc-.15],50));return n.eye=kt(kt(n.eye,[t,0,0]),r),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],r=tn(vt([16.6,1.9,9.2],[17.3,.4,5.6],64),vt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return r.eye=kt(r.eye,t),r}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],r=tn(vt([7,1.35,13],[7.2,7.6,20.4],74,.05),vt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return r.eye=kt(r.eye,t),r}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],r=tn(vt([7,3.6,43.7],[7,3.85,W0[2]],74),vt([7,3.6,41.3],[7,3.95,W0[2]],46));return r.eye=kt(r.eye,t),r}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=tn(vt([7,3.9,40.3],[7,1.35,W0[2]],76),vt([6.3,3.6,41.2],[3.7,3.95,W0[2]],46,-.008));return r.eye=kt(r.eye,t),r}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=tn(vt([7.15,.15,46],[7.3,.04,Wn[2]],50),vt([7.05,.14,45.9],[7.25,.05,Wn[2]],32));return r.eye=kt(r.eye,t),r}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],r=tn(vt([7.15,.1,46.3],[7.05,.1,bf],50),vt([7.1,.12,45.85],[7,.2,bf],30));return r.eye=kt(r.eye,t),r}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],r=tn(vt([7.3,.85,45.65],[7.6,1.38,47.1],64),vt([7.25,.82,45.8],[7.65,1.35,47.1],44));return r.eye=kt(r.eye,t),r}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=tn(vt([ka[0],2.3,46.85],[ka[0],1.25,ka[2]],74),vt([ka[0]-.6,2.55,46.85],[ka[0]+1.9,2.9,ka[2]],46,.008));return r.eye=kt(r.eye,t),r}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=tn(vt([La[0],1.95,46.85],[La[0],1,La[2]],74),vt([La[0]-.6,2.1,46.85],[La[0]+1.9,2.75,La[2]],46,.008));return r.eye=kt(r.eye,t),r}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=tn(vt([Ca[0],1.4,46.85],[Ca[0],.6,Ca[2]],74),vt([Ca[0]-.6,1.45,46.85],[Ca[0]+1.9,2,Ca[2]],46,.008));return r.eye=kt(r.eye,t),r}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=tn(vt([34.75,.5,44.15],[Gr.x1,.8,43.95],66),vt([34.75,.45,44.3],[Gr.x1,.35,43.95],50));return r.eye=kt(r.eye,t),r}},...Br.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(r){let n=[Math.sin(r*.15)*.04,Math.sin(r*.25)*.015,Math.sin(r*.11)*.04],o=A_(e);return o.eye=kt(o.eye,n),o}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,r=tn(vt([7.75,2.6,18.6],[7.89,0,19.08],60),vt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=r.eye[0]-qo[0],o=r.eye[2]-qo[2];return r.eye=[qo[0]+n*Math.cos(t)-o*Math.sin(t),r.eye[1],qo[2]+n*Math.sin(t)+o*Math.cos(t)],r}}],L_=[1,.96,.88];function Yv(e,t){return{dur:t,cam(r,n,o){let a=dr(r),i=Ra(n,o,a),s=Br[e].side==="left"?1:-1;return i.eye=kt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(r,n,o){let a={};for(let i in o)typeof o[i]=="number"&&(a[i]=Le(n[i],o[i],r));return a.aperture=Le(n.aperture,o.aperture,r)*(1-.5*Math.sin(Math.PI*r)),a},leaf(r){let n=dr(r),o=Cn(Br[e]),a=Cn(Br[e+1]),i=Br[e].side==="left"?1:-1,s=kt(Qt(o,a,.5),[i*1.2,.5,0]),c=br([o,Qt(o,s,.6),s,Qt(a,s,.6),a],n);return{phase:"fly",pos:kt(c,[0,Math.sin(r*Math.PI*5)*.07*Math.sin(Math.PI*r),0]),tumble:.5+.35*Math.sin(Math.PI*r)}}}}var xf=[{dur:6.2,cam(e,t,r){if(e<.5){let s=g_(e/.5),c=Qt(t.eye,[Gr.x1-3.2,2.6,Gr.zc],s),f=Qt(t.target,y_,Me(0,.6,e/.5));return vt(c,f,Le(t.fov,t.fov-8,s),Le(t.roll,.04,s))}let n=yf((e-.5)/.5),o=[[xn.cx+.4,10.4,xn.zc+.6],[xn.cx-.6,7.6,xn.zc+1.3],[xn.cx-1.9,4.6,xn.zc+1.75],r.eye],a=[[xn.cx-.1,0,xn.zc-.2],[xn.cx-1,.4,xn.zc-.1],[xn.cx-1.1,.8,xn.zc-.2],r.target];return vt(br(o,n),br(a,n),Le(r.fov+14,r.fov,n),Le(-.25,r.roll,n))},look(e,t,r){let n=Me(.22,.5,e),o=1-Me(.5,.74,e);return{fade:e<.5?n:o,fadeColor:L_,exposure:Le(t.exposure,r.exposure,Me(.5,.9,e))*(1+2.2*(e<.5?Me(.15,.5,e):1-Me(.5,.8,e))),letterbox:Le(t.letterbox,r.letterbox,Me(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):r.aperture*Me(.6,1,e),focus:Le(4,r.focus,Me(.5,1,e)),shafts:Le(t.shafts,r.shafts,Me(.4,.6,e)),vignette:Le(t.vignette,r.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,r,n){let o=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],r.eye],a=br(o,dr(e)),i=Me(0,.12,e)*(1-Me(.82,1,e)),s=Qt(Qt(t.target,r.target,Me(.55,1,e)),n.pos,i),c=Le(t.fov,r.fov,Me(.3,1,e))-6*Math.sin(Math.PI*e),f=Le(t.roll,r.roll,e)+.05*Math.sin(Math.PI*2*e);return vt(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Le(t.exposure,r.exposure,Me(.25,.75,e)),letterbox:Le(t.letterbox,r.letterbox,e),focus:Le(a,r.focus,Me(.8,1,e)),aperture:Le(.7,r.aperture,Me(.8,1,e)),shafts:Le(t.shafts,r.shafts,Me(.3,.8,e)),vignette:Le(t.vignette,r.vignette,e)}},leaf(e){let t=jv(e),r=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:kt(br(x_,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),r]),tumble:1-.5*Me(.8,1,e)}}},{dur:11.5,cam(e,t,r,n){let o=br([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Me(0,.8,e)*.6+dr(bn(e/.8))*.4),a=br([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],r.eye],dr(Me(.8,1,e))),i=e<.8?o:a,s=Qt(Qt(t.target,n.pos,Me(.03,.22,e)),r.target,Me(.82,1,e)),c=Le(t.fov,r.fov,Me(.15,.7,e))-6*Me(.6,.8,e)*(1-Me(.85,1,e)),f=Le(t.roll,r.roll,Me(0,.6,e))-.04*Math.sin(Math.PI*e);return vt(i,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Le(t.exposure,r.exposure,Me(.5,1,e)),letterbox:Le(t.letterbox,r.letterbox,e),focus:Le(a,r.focus,Me(.84,1,e)),aperture:Le(1.1,r.aperture,Me(.84,1,e)),shafts:Le(t.shafts,r.shafts,Me(.2,.9,e)),vignette:Le(t.vignette,r.vignette,Me(.5,1,e))}},leaf(e){let t=Le(jv(e),e,.35),r=br(b_,Me(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Me(.55,.76,e)),o=Me(.7,.8,e);return{phase:"fly",pos:kt(r,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-o),0]),tumble:1-o,swing:n}}},{dur:2.6,cam(e,t,r){let n=dr(e),o=Ra(t,r,n);return o.eye=kt(o.eye,[0,0,-.35*Math.sin(Math.PI*n)]),o},look(e,t,r){let n=dr(e),o={};for(let a in r)typeof r[a]=="number"&&(o[a]=Le(t[a],r[a],n));return o},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,r){let n=dr(e),o=br([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],r.eye],n),a=Qt(t.target,r.target,Me(.1,.85,e));return vt(o,a,Le(t.fov,r.fov,Me(.2,1,e)),Le(t.roll,r.roll,n))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],Me(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,r){return Ra(t,r,dr(e))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],dr(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Le(Qv,Y0(),e)}},{dur:7.5,kick:e=>bn((e-yi())/(1-yi())),cam(e,t,r,n){let o=yi(),a=Me(0,o,e)*(1-Me(o+.12,o+.35,e)),i=Kv(Math.min(e,wi)),s=kt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Me(o+.12,1,e),f=br([t.eye,t.eye,kt(t.eye,[0,.12,-.3]),r.eye],c);return s=Qt(s,n.pos,Me(o+.06,o+.24,e)*(1-Me(.9,1,e))),s=Qt(s,r.target,Me(.88,1,e)),vt(f,s,Le(t.fov,r.fov,c),Le(t.roll,r.roll,c))},look(e,t,r,n,o){let a=yi(),i=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),s=Me(0,.12,e)*(1-Me(a+.25,a+.5,e));return{letterbox:Le(Le(t.letterbox,r.letterbox,Me(a,1,e)),1.75,s),exposure:Le(t.exposure,r.exposure,Me(a,1,e)),focus:e<a?t.focus:Le(t.focus,i,Me(a,a+.2,e)),aperture:Le(t.aperture,r.aperture,Me(a,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=bn((e-yi())/(1-yi()));if(t<=0)return{phase:"floor"};let r=Me(0,.85,t)*.85+yf(Me(0,.15,t))*.15;return{phase:"fly",pos:kt(Wn,[(Es[0]-Wn[0])*r+Math.sin(t*9)*.08*(1-t),(Es[1]-Wn[1])*r,(Es[2]-Wn[2])*r+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?Kv(e):null}},{dur:9,cam(e,t,r,n){let o=dr(e),a=br([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],r.eye],o),i=1-Me(.6,.92,e),s=Qt(Qt(t.target,n.pos,Me(0,.15,e)),r.target,1-i),c=Le(t.fov,r.fov,Me(.3,1,e)),f=Le(t.roll,r.roll,o)+.04*Math.sin(Math.PI*e);return vt(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,Me(.3,.8,e)),focus:Le(a,r.focus,Me(.6,.95,e)),aperture:Le(t.aperture,r.aperture,Me(.6,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,Me(.3,.8,e))}},leaf(e){let t=dr(e);return{phase:"fly",pos:kt(br(E_,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=dr(e),o=Ra(t,r,n);return o.eye=kt(o.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],e));return n.aperture=Le(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=dr(e);return{phase:"fly",pos:kt(br(M_,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=dr(e),o=Ra(t,r,n);return o.eye=kt(o.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],e));return n.aperture=Le(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=dr(e);return{phase:"fly",pos:kt(br([Sf,[29.2,1.75,45.5],[32.2,1.5,45.4],wf],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,r,n){let o=dr(e),a=br([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],r.eye],o),i=Me(.05,.3,e)*(1-Me(.8,1,e)),s=Qt(Qt(t.target,r.target,Me(.6,1,e)),n.pos,i);return vt(a,s,Le(t.fov,r.fov,Me(.2,1,e)),Le(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,e),focus:Le(a,r.focus,Me(.8,1,e)),aperture:Le(.9,r.aperture,Me(.8,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=br([wf,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ms],Me(0,.85,e)),r=Math.sin(e*Math.PI*6)*.25*(1-Me(.35,.82,e)),n=Me(.78,.88,e);return{phase:"fly",pos:kt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),r]),tumble:.7*(1-n),swing:r}}},{dur:12,door(e){let t=bn((e-.02)/.09);return yf(t)+.07*Math.sin(bn((e-.08)/.18)*Math.PI)*(1-bn((e-.08)/.3))},cam(e,t,r,n){let o=Math.sin(e*340)*.012*Me(.02,.05,e)*(1-Me(.08,.16,e)),a=Me(.06,1,e),i=br([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],r.eye],a*.55+dr(a)*.45),s=kt(n.pos,[1,-.2,-1.45]);i=Qt(i,s,Me(.1,.22,e)*(1-Me(.52,.72,e)));let c=Me(.06,.16,e)*(1-Me(.86,1,e)),f=Qt(t.target,n.pos,c);f=Qt(f,r.target,Me(.86,1,e));let h=Le(t.fov,r.fov,Me(.1,1,e))+6*Math.sin(Math.PI*Me(.08,.9,e)),p=Le(t.roll,r.roll,e)+.06*Math.sin(Math.PI*2*Me(.1,.9,e))+o;return vt(kt(i,[0,o,0]),f,h,p)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),i=Me(.02,.06,e)*(1-Me(.08,.3,e));return{letterbox:Le(t.letterbox,r.letterbox,Me(.1,.4,e)),exposure:Le(t.exposure,r.exposure,e)*(1+.8*i),focus:Le(a,r.focus,Me(.86,1,e)),aperture:Le(.8,r.aperture,Me(.86,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)+i}},leaf(e){let t=bn((e-.05)/.95);if(t<=0)return{phase:"floor"};let r=br(T_(),t*.6+dr(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:kt(r,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>Yv(e,7.5)),{dur:10,cam(e,t,r,n){let o=dr(e),a=br([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],r.eye],o),i=Me(0,.15,e)*(1-Me(.85,1,e)),s=Qt(Qt(t.target,r.target,Me(.5,1,e)),n.pos,i);return vt(a,s,Le(t.fov,r.fov,o)+4*Math.sin(Math.PI*o),Le(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,e),focus:Le(a,r.focus,Me(.85,1,e)),aperture:Le(.6,r.aperture,Me(.85,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=dr(e),r=br(S_(),t);return{phase:"fly",pos:kt(r,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>Yv(e,7.5)),{dur:10,cam(e,t,r,n){let o=dr(e),a=br([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],r.eye],o),i=Me(0,.2,e)*(1-Me(.9,1,e)),s=Qt(Qt(t.target,r.target,Me(.5,1,e)),n.pos,i);return vt(a,s,Le(t.fov,r.fov,o),Le(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,e),focus:Le(a,r.focus,Me(.85,1,e)),aperture:Le(.7,r.aperture,Me(.85,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=br(k_(),Me(0,.86,e)),r=Math.sin(e*Math.PI*7)*.3*(1-Me(.4,.84,e)),n=Me(.8,.9,e);return{phase:"fly",pos:kt(t,[r,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:r}}}],_f=9.2,wi=.6;function Kv(e){return e<wi?Le(Y0(),_f,e/wi):Le(_f,w_,(e-wi)/(1-wi))}function yi(){return wi*bn((Wn[0]+.15-Y0())/(_f-Y0()))}var Ef={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},V0=e=>Object.assign({},Ef,$o[e].look),C_=`
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
@media (max-width: 440px) {
	/* (on phones the corner belongs to the Instagram, email and Explore buttons) */
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
`;function yn(e,t,r){let n=document.createElement(e);return t&&(n.className=t),r!==void 0&&(n.innerHTML=r),n}var xi=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function X0(e,t,r){e.querySelectorAll(".tour-line").forEach((n,o)=>{n.style.transitionDelay=(t+o*r).toFixed(2)+"s"})}Zv.exports=function(t){let r=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let oe=document.createElement("link");oe.rel="stylesheet",oe.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",oe.setAttribute("data-tour-font",""),document.head.appendChild(oe)}let o=document.createElement("style");o.textContent=C_+`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(o);let a=yn("div","tour");a.setAttribute("role","region"),a.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let i=yn("div","tour-mark",xi(j0.name)),s=yn("button","tour-free","Explore freely");s.type="button";let c=yn("div","tour-links",gf.icons("tour-icon"));c.appendChild(s);let f=yn("div","tour-progress",$o.map(()=>"<i></i>").join("")),h=yn("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=h.querySelector("span"),u=yn("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${xi(j0.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);X0(u,.4,.35);let m=j0.text.split(/\n\s*\n/).map(oe=>`<p class="tour-line">${xi(oe.trim())}</p>`).join(""),v=yn("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${xi(j0.title)}</h2>
		<span class="tour-rule"></span>
		${gf.line("tour-line tour-contact")}
		${m}`);X0(v,.25,.28);let d=yn("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);X0(d,.6,.3);let g=yn("div","tour-card tour-master","");function w(oe){let Ce=yn("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<div class="tour-body"></div>`),$e=Ce.querySelector(".tour-title"),gt=Ce.querySelector(".tour-body");return Ce.filled=!1,Ce.body=gt,Ce.fill=()=>{let It=oe();if(!It||Ce.filled)return;Ce.filled=!0;let zt=It.title||"";Ce.querySelector(".tour-kicker").textContent=v_(It)||"Oil on canvas";let no=0;$e.innerHTML=zt.split(" ").map(jr=>'<span class="tour-word">'+jr.split("").map(qr=>`<span style="transition-delay:${(.35+no++*.045).toFixed(3)}s">${xi(qr)}</span>`).join("")+"</span>").join(" "),$e.setAttribute("aria-label",zt);let wr=.35+zt.length*.045+.2;Ce.querySelector(".tour-rule").style.transitionDelay=wr.toFixed(2)+"s";let $r=String(It.description||"").split(/\n\s*\n/).filter(jr=>jr.trim());gt.innerHTML=$r.map(jr=>`<p class="tour-line">${xi(jr.trim())}</p>`).join(""),Ce.querySelector(".tour-kicker").style.transitionDelay="0.1s",gt.querySelectorAll(".tour-line").forEach((jr,qr)=>{jr.style.transitionDelay=(wr+.3+Math.min(qr,6)*.35).toFixed(2)+"s"})},Ce}let T=()=>t.paintings?t.paintings():[],R=oe=>T().find(Ce=>Ce.side==="corridor"&&Math.abs(Ce.paintingPosition[0]-oe)<.5),D=w(()=>T().find(oe=>oe.side==="end")),q=()=>yn("div","tour-card",""),H=w(()=>R(ka[0])),ae=w(()=>R(La[0])),ve=w(()=>R(Ca[0])),J=Br.map(oe=>w(()=>T().find(Ce=>Ce.side===oe.side&&Math.abs(Ce.paintingPosition[2]-oe.z)<.5))),Ee=yn("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">The rest of the gallery is yours to wander.</span>
		${gf.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);X0(Ee,.5,.35);let ue=[u,v,d,g,D,q(),q(),q(),H,ae,ve,q(),...J,Ee];a.append(...ue,i,c,f,h),document.body.appendChild(a),document.body.classList.add("touring");let Fe=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,ze=Fe?"Scroll":"Swipe",Ie=$o.map((oe,Ce)=>Ce===0?Fe?"Scroll to begin":"Swipe up to begin":Ce===1?ze+" to follow the leaf":Ce===2?ze+" to follow the light":Ce===3?ze+" for its story":Ce===6||Ce===7||Ce===$o.length-1?"":ze+" on"),ye=[0];xf.forEach(oe=>ye.push(ye[ye.length-1]+oe.dur));let rt=ye[ye.length-1],Xt=210,ct=95,Ft=.35,Gt=1.4,ir=4.2,Zt=2.2,In=.7,pr=.9,Ir=!0,At=0,De=0,ft=-10,Je=!1,Jt=-1,zn=0,Se=0,nt=0,xt=null,Dt=Object.assign({},V0(0)),_t=$o[0].cam(0),Ct={phase:"home",pos:bi.slice(),tumble:0},bt=0,$t=oe=>{let Ce=0;for(let $e=1;$e<ye.length;$e++)Math.abs(ye[$e]-oe)<Math.abs(ye[Ce]-oe)&&(Ce=$e);return Ce};function Yt(oe){let Ce=ue[oe];Ce&&Ce.fill&&(Ce.fill(),Ce.body.scrollTop=0,Ce.offsetWidth),ue.forEach(($e,gt)=>$e.classList.toggle("on",gt===oe)),p.textContent=Ie[oe]||"",h.classList.toggle("on",!!Ie[oe])}function x(){ue.forEach(oe=>oe.classList.remove("on")),h.classList.remove("on")}let jt=null,mr=-1;function Qe(oe){if(!Ir||xt)return;let Ce=nt-ft>Ft;if(ft=nt,Ce||!jt){let $e=0,gt=rt;for(let It=0;It<ye.length;It++)if(ye[It]<=At-.02&&($e=ye[It]),ye[It]>=At+.02){gt=ye[It];break}jt={lo:$e,hi:gt}}nt<mr||(Je=!1,De=Math.max(jt.lo,Math.min(jt.hi,De+oe)),De=Math.max(At-Zt,Math.min(At+Zt,De)))}function Rt(oe){if(!Ir||xt)return;let Ce=Je?De:At,$e;if(oe>0)$e=ye.findIndex(gt=>gt>Ce+.05);else{$e=-1;for(let gt=ye.length-1;gt>=0;gt--)if(ye[gt]<Ce-.05){$e=gt;break}}$e<0||(De=ye[$e],Je=!0,ft=nt)}let ot=null,nr=oe=>oe.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(oe=>a.addEventListener(oe,nr)),a.addEventListener("pointerdown",oe=>{if(oe.stopPropagation(),!(oe.target.closest("button, a")||oe.target.closest(".tour-body"))){ot={x:oe.clientX,y:oe.clientY,lx:oe.clientX,ly:oe.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{a.setPointerCapture(oe.pointerId)}catch(Ce){}}}),a.addEventListener("pointermove",oe=>{if(!ot)return;let Ce=oe.clientX-ot.lx,$e=oe.clientY-ot.ly;ot.lx=oe.clientX,ot.ly=oe.clientY;let gt=Math.abs($e)>=Math.abs(Ce)?-$e:-Ce;ot.moved+=Math.abs(gt);let It=performance.now(),zt=gt/ct;ot.v=ot.v*.6+zt/Math.max(.008,(It-ot.lt)/1e3)*.4,ot.lt=It,ot.moved>6&&Qe(zt)});let sr=oe=>{let Ce=ot;ot=null,Ce&&(Ce.moved<10&&performance.now()-Ce.t<500?Rt(1):performance.now()-Ce.lt<120&&Qe(Math.max(-1.6,Math.min(1.6,Ce.v*.22))))};a.addEventListener("pointerup",oe=>{oe.stopPropagation(),sr(oe)}),a.addEventListener("pointercancel",()=>{ot=null}),a.addEventListener("wheel",oe=>{if(oe.target.closest(".tour-body")){let $e=oe.target.closest(".tour-body"),gt=$e.scrollTop+$e.clientHeight>=$e.scrollHeight-2&&oe.deltaY>0,It=$e.scrollTop<=0&&oe.deltaY<0;if(!gt&&!It)return}oe.preventDefault();let Ce=oe.deltaMode===1?oe.deltaY*16:oe.deltaMode===2?oe.deltaY*window.innerHeight:oe.deltaY;Qe(Ce/Xt)},{passive:!1}),window.addEventListener("keydown",oe=>{if(!Ir||xt)return;let Ce=oe.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(Ce)>=0){if((Ce==="Enter"||Ce===" ")&&oe.target&&oe.target.tagName==="BUTTON")return;oe.preventDefault(),oe.stopImmediatePropagation(),Rt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(Ce)>=0?(oe.preventDefault(),oe.stopImmediatePropagation(),Rt(-1)):Ce==="Escape"?(oe.preventDefault(),Vn()):/^[wasdzq]$/i.test(Ce)&&oe.stopImmediatePropagation()},!0),window.addEventListener("keyup",oe=>{Ir&&!xt&&/^(Arrow|[wasdzq]$)/i.test(oe.key)&&oe.stopImmediatePropagation()},!0),s.addEventListener("click",oe=>{oe.stopPropagation(),Vn()}),Ee.addEventListener("click",oe=>{let Ce=oe.target.closest("button");Ce&&(oe.stopPropagation(),Ce.dataset.act==="free"&&Vn(),Ce.dataset.act==="replay"&&zr(),Ce.dataset.act==="list"&&rl().show(!1))});let fn=[null,[xn.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+_i[0]-7,0],[42.5+_i[1]-7,0],[42.5+_i[2]-7,0],[1e3,Math.PI/2],...Br.map(oe=>[oe.z-1.6,oe.side==="left"?-Math.PI/2:Math.PI/2]),[qo[2]-1.6,Math.PI]],rn=null,Uo=0;function Vn(){if(!Ir||xt)return;let oe=$t(At),Ce=fn[oe];rn=oe<=1?{phase:"home",pos:bi.slice()}:oe>=3&&oe<=6?{phase:"floor",pos:Wn.slice()}:oe===11?{phase:"floor",pos:Ms.slice()}:oe===18?{phase:"floor",pos:qo.slice()}:null,Uo=oe>=12?1:0,Ce&&n.place&&n.place(Ce[0],Ce[1]),xt={start:nt,fromCam:_t,fromLook:Object.assign({},Dt)},x(),a.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function zr(){At=De=0,Je=!1,Jt=-1,zn=0,Se=0,Ct={phase:"home",pos:bi.slice(),tumble:0},un={start:nt}}let un={start:-1},Pn=!1,Bo=[];function vo(oe){bt+=oe*(Ct.phase==="floor"?0:1);let Ce=Ct.tumble===void 0?0:Ct.tumble,$e=ho.fromTranslation(Bo,Ct.pos);if(Ct.phase==="home")$e=ho.rotateY($e,$e,2.2+Math.sin(bt*.9)*.15),$e=ho.rotateZ($e,$e,-1+Math.sin(bt*1.3)*.12),$e=ho.rotateX($e,$e,.4);else if(Ct.phase==="floor")$e=ho.rotateY($e,$e,.65),$e=ho.rotateX($e,$e,.16);else{let gt=_t.eye,It=Ct.pos,zt=[gt[0]-It[0],gt[1]-It[1],gt[2]-It[2]],no=Math.hypot(zt[0],zt[1],zt[2])||1;zt=[zt[0]/no,zt[1]/no,zt[2]/no];let wr=[zt[2],0,-zt[0]],$r=Math.hypot(wr[0],wr[2])||1;wr=[wr[0]/$r,0,wr[2]/$r];let jr=[wr[1]*zt[2]-wr[2]*zt[1],wr[2]*zt[0]-wr[0]*zt[2],wr[0]*zt[1]-wr[1]*zt[0]],qr=[wr[0],wr[1],wr[2],0,zt[0],zt[1],zt[2],0,jr[0],jr[1],jr[2],0,It[0],It[1],It[2],1];for(let wn=0;wn<16;wn++)$e[wn]=qr[wn];$e=ho.rotateY($e,$e,bt*.9*Ce+.65),$e=ho.rotateX($e,$e,Math.sin(bt*2.3)*.9*Ce),$e=ho.rotateZ($e,$e,Math.sin(bt*1.7+1)*1.1*Ce+(Ct.swing||0)*.9)}return{visible:!0,model:$e}}function go(oe){for(let Ce in Ef)Dt[Ce]=oe[Ce]!==void 0?oe[Ce]:Ef[Ce]}function On(oe,Ce){if(oe<=1)return{phase:"home",pos:bi.slice(),tumble:0};let $e=Xv[oe];if($e){let gt=$e.amp;return{phase:"fly",pos:kt($e.pos(),[Math.sin(Ce*.55)*gt[0],Math.sin(Ce*.8)*gt[1],(1-Math.cos(Ce*.45))*gt[2]]),tumble:$e.tumble}}return{phase:"floor",pos:(oe>=18?qo:oe>=10?Ms:Wn).slice(),tumble:0}}let er=0,Ci=null;function Ts(oe){let Ce=Math.min(.1,Math.max(0,oe-er));if(er=oe,nt=oe,Pn||(Pn=!0,un.start=oe),xt)return null;if(!Je&&!ot&&nt-ft>In){let Hr=$t(De);Math.abs(ye[Hr]-De)<pr&&(De=ye[Hr])}let $e=De-At;if(Je){let Hr=Math.sign($e)*Math.min(Math.abs($e),Ce*(.35+.65*Me(0,.6,Math.abs($e)))*1);At+=Hr,Math.abs(De-At)<1e-4&&(At=De,Je=!1)}else At+=$e*(1-Math.exp(-Ce*ir)),Math.abs($e)<1e-4&&(At=De);let gt=0;for(;gt<xf.length-1&&At>=ye[gt+1];)gt++;let It=xf[gt],zt=bn((At-ye[gt])/It.dur),no=$o[gt],wr=$o[gt+1],$r=$t(At);$r!==zn&&(zn=$r,Se=0);let jr=Math.abs(At-ye[$r])<.02;jr&&(Se+=Ce);let qr=1-Me(0,1.2,Math.abs(At-ye[$r])),wn=It.leaf(zt);if(wn.pos?Ct=Object.assign({},wn):Ct=Object.assign({},wn,{pos:wn.phase==="home"?bi.slice():(gt>=10?Ms:Wn).slice()}),Xv[$r]&&qr>0){let Hr=On($r,Se);Ct.pos=Qt(Ct.pos,Hr.pos,qr)}let jo=It.walker&&(zt>.01||gt===6)?It.walker(zt):null;Ci=jo==null?null:{x:jo,z:bf,heading:Math.PI/2,phase:(jo-Qv)/__};let Bt=It.cam(zt,no.cam(0),wr.cam(0),Ct);if(qr>0&&Se>0){let Hr=$o[$r],hn=Hr.cam(0),Ia=Hr.cam(Se);Bt=vt(kt(Bt.eye,Bv(Uv(Ia.eye,hn.eye),qr)),kt(Bt.target,Bv(Uv(Ia.target,hn.target),qr)),Bt.fov+(Ia.fov-hn.fov)*qr,Bt.roll+(Ia.roll-hn.roll)*qr)}_t=Bt;let Ss=V0(gt),oc=V0(gt+1),Ri=Object.assign({},Ss,It.look(zt,Ss,oc,Ct,Bt.eye));if(qr>0){let Hr=V0($r);for(let hn in Hr)typeof Hr[hn]=="number"&&(Ri[hn]=Le(Ri[hn],Hr[hn],qr))}go(Ri);let Wo=jr&&Math.abs(De-At)<.02?$r:-1;Wo!==Jt&&(Wo>=0&&(mr=nt+Gt),Jt=Wo,Wo>=0?Yt(Wo):x()),f.querySelectorAll("i").forEach((Hr,hn)=>Hr.classList.toggle("on",hn===$r));let Xn=Jt>=0?ue[Jt]:null;Xn&&Xn.fill&&!Xn.filled&&(Xn.fill(),Xn.filled&&(Xn.classList.remove("on"),Xn.offsetWidth,Xn.classList.add("on")));let ks=bn((oe-un.start)/2.6);return ks<1&&(Dt.fade=Math.max(Dt.fade,1-Me(0,1,ks)),Dt.fadeColor=[0,0,0]),r&&window.__camOverride&&(_t=window.__camOverride),r&&window.__lookOverride&&Object.assign(Dt,window.__lookOverride),{camera:_t,walker:Ci,door:It.door?It.door(zt):gt>=12?1:0,look:Dt,leaf:vo(Ce)}}return r&&(window.__tour={go:Rt,exit:Vn,wind:Qe,seek(oe,Ce){At=De=ye[oe]+(ye[oe+1]-ye[oe])*Ce,Je=!1,ft=nt+1e6,un.start=nt-10,Pn=!0},jump(oe){At=De=ye[oe],Je=!1,Se=0,ft=nt,un.start=nt-10,Pn=!0},state:()=>({current:$t(At),scroll:+At.toFixed(3),target:+De.toFixed(3),shown:Jt,move:Math.abs(De-At)>.02?{p:At}:null,camNow:_t,leaf:Ct,look:Dt})}),{update:Ts,get active(){return Ir&&!xt},handover(oe){if(!xt)return null;let Ce=bn((oe-xt.start)/1.8);return Ce>=1?(Ir=!1,null):{from:xt.fromCam,fromLook:xt.fromLook,k:dr(Ce)}},restingDoor:()=>Uo,restingLeaf(){return rn?(Ct=rn,vo(0)):null},mix:Ra,cam:vt}}});var R_=Ih(),Si=Mo(),If=rl(),Q0=Si.reflection,I_=!1,f2=(e,t,r,n,o)=>n+(e-t)*(o-n)/(r-t),zf=()=>f2(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(zf=()=>f2(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var u2=()=>2*Math.atan(Math.tan(zf()*.5)*window.innerHeight/window.innerWidth),z_=Bh(),Z0=new z_;Z0.showPanel(0);I_&&document.body.appendChild(Z0.dom);var Dr,Li,kf,Ti,Lf,ar;function P_(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!P_())throw R_.finish(),If.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Dr=jh()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Si.pixelRatio});location.hash==="#list"&&If.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&If.show(!1)});Li=Md()();var O_=Sl();kf=O_(Dr,Li,Q0);Ti=B1()(Dr,Li);Lf=V1()(Dr);var e2=Y1()(Dr,Li),t2=ip()(Dr),r2=lp()(Dr),n2=Ap()(Dr),o2=Rp()(Dr),a2=Fp()(Dr),ki=Xp()(Dr),Cf=Ql(),h2=s0(),N_=c0(),{A:Mi}=Jn();ar=Rv()(Li,u2);var J0=zv()(Dr,Si),Ai=Fv()(Dr),i2=Dv()(Dr),F_=Hv()(Dr,Si),po=Jv()({fps:ar,paintings:()=>Ti.interactables(),onExit:()=>ar.setPaused(!1)});ar.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=J0);var ec=[],tc=[],Ho=[7,2,1.6];Li.viewer=Ho;var G_=Dr({cull:{enable:!0,face:"back"},uniforms:{view:()=>ec,proj:()=>tc,yScale:1,mirrorOn:()=>Q0?1:0}}),D_=Dr({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),d2=document.createElement("style");d2.textContent=`

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
`;document.head.appendChild(d2);var Rn=document.createElement("button");Rn.className="painting-plaque";Rn.type="button";Rn.setAttribute("aria-label","Read painting");document.body.appendChild(Rn);var ln=document.createElement("div");ln.className="story-overlay";ln.innerHTML=`

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

		${h2.line("story-contact")}

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(ln);var nc=document.createElement("div");nc.className="museum-links";nc.innerHTML=h2.icons("museum-link");["mousedown","pointerdown","click"].forEach(e=>nc.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(nc);var $_=ln.querySelector("#story-title"),q_=ln.querySelector("#story-body"),s2=ln.querySelector("#story-meta"),H_=ln.querySelector(".story-contact"),U_=ln.querySelector(".story-close"),As=null,cn={p:0,target:0,last:0},p2={title:Cf.title,description:Cf.text,isAbout:!0},mo=null;function Pf(e){e&&(As=e,$_.textContent=e.title||"",q_.textContent=e.description||"",s2.textContent=e.isAbout?"":N_(e),s2.hidden=!!e.isAbout,H_.hidden=!e.isAbout,ln.classList.toggle("about-mode",!!e.isAbout),ln.classList.add("open"),cn.target=e.isAbout?1:0,mo=e,Rn.classList.remove("visible"),ar.setPaused(!0))}function Of(){ln.classList.remove("open"),cn.target=0,As=null,mo=null,ar.setPaused(!1)}function m2(e){e&&(e.preventDefault(),e.stopPropagation()),mo&&Pf(mo)}Rn.addEventListener("pointerup",m2,!0);Rn.addEventListener("touchend",m2,{passive:!1,capture:!0});Rn.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),As===null&&mo&&Pf(mo)},!0);U_.addEventListener("click",Of);ln.addEventListener("click",e=>{e.target===ln&&Of()});window.addEventListener("keydown",e=>{e.code==="Escape"&&ln.classList.contains("open")&&Of()});function c2(e,t){let r=t[0],n=t[1],o=t[2];return[e[0]*r+e[4]*n+e[8]*o+e[12],e[1]*r+e[5]*n+e[9]*o+e[13],e[2]*r+e[6]*n+e[10]*o+e[14],e[3]*r+e[7]*n+e[11]*o+e[15]]}function B_(){if(As)return;if(po.active){mo=null,Rn.classList.remove("visible");return}let e=Ti.interactables(),t=ar.forward[0],r=ar.forward[2],n=Math.hypot(t,r)||1,o=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let h=s[0]-ar.pos[0],p=s[2]-ar.pos[2],u=-(h*c+p*f),m=Math.abs(h*f-p*c),v=-(t*c+r*f)/n,d=i.side==="end"?11:8,g=(i.width||2)/2;v>.9&&u>.5&&u<d&&m<g+.8&&u<a&&(o=i,a=u)}if(!o){let i=ar.pos[0],s=ar.pos[2];t/n>.85&&i<13.6&&s>Mi.z0-.5&&s<Mi.z1+.5&&(o=Object.assign({},p2,{plaqueTitle:Cf.name}))}o?(mo=o,Rn.textContent=o.isAbout?"ABOUT  \xB7  "+o.plaqueTitle:"READ  \xB7  "+o.title,Rn.classList.add("visible")):(mo=null,Rn.classList.remove("visible"))}var Nf=as();function j_(){let e=ki.state;if(!e||!e.glowPos)return null;let t=c2(ar.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),r=c2(ar.proj(),t);return r[3]<=.05?null:[(r[0]/r[3]*.5+.5)*window.innerWidth,(.5-r[1]/r[3]*.5)*window.innerHeight,r[3]]}var Rf=null;window.addEventListener("pointerdown",e=>{Rf={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Rf;if(Rf=null,!t||As||po.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let r=j_();if(!r)return;let n=!!document.pointerLockElement,o=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/r[2]);Math.hypot(o-r[0],a-r[1])<i&&(e.preventDefault(),e.stopPropagation(),Pf(p2))},!0);function W_(e){let t=Math.min(Math.max(e-cn.last,0),.1);cn.last=e;let r=t/1.6;if(cn.p=cn.target>cn.p?Math.min(1,cn.p+r):Math.max(0,cn.p-r),cn.p<=0)return;let n=cn.p<.5?2*cn.p*cn.p:1-Math.pow(-2*cn.p+2,2)/2,o=window.innerHeight>window.innerWidth,a=ki.state,i=a&&a.hipsPos?a.hipsPos[0]:Mi.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Mi.zc,c=o?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=o?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],h=ar.pos,p=ar.forward,u=[h[0],h[1],h[2]],m=[h[0]+p[0],h[1]+p[1],h[2]+p[2]],v=(T,R)=>T.map((D,q)=>D+(R[q]-D)*n),d=[Mi.cx-6.2,1.7,Mi.zc],g=1-n,w=u.map((T,R)=>g*g*T+2*g*n*d[R]+n*n*c[R]);Nf.lookAt(ar.view(),w,v(m,f),[0,1,0])}var Ei={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},rc=null;function V_(e,t,r,n){let o=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],a=Math.hypot(o[0],o[1],o[2])||1,i=[-o[2]/a,0,o[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Nf.lookAt(e,t,r,[i[0]*f,c,i[2]*f])}function X_(e){let t=window.innerWidth/window.innerHeight,r=J0.shot,n=po.active?po.update(e):null,o=n?null:po.handover(e),a=null,i=Ei;if(n?(a=n.camera,i=n.look,rc=n.leaf,ki.setWalk(n.walker||null),Ai.setOpen(n.door||0)):(rc=po.restingLeaf(),ki.setWalk(null),Ai.setOpen(po.restingDoor())),o){let s=ar.pos,c=ar.forward,f=po.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],u2()*180/Math.PI,0);a=po.mix(o.from,f,o.k),i={};for(let h in Ei)i[h]=Array.isArray(Ei[h])?Ei[h]:o.fromLook[h]+(Ei[h]-o.fromLook[h])*o.k}if(a)V_(ec,a.eye,a.target,a.roll||0),Nf.perspective(tc,a.fov*Math.PI/180,t,.1,700),Ho[0]=a.eye[0],Ho[1]=a.eye[1],Ho[2]=a.eye[2];else{let s=ar.view(),c=ar.proj();for(let u=0;u<16;u++)ec[u]=s[u],tc[u]=c[u];let f=s[12],h=s[13],p=s[14];Ho[0]=-(s[0]*f+s[1]*h+s[2]*p),Ho[1]=-(s[4]*f+s[5]*h+s[6]*p),Ho[2]=-(s[8]*f+s[9]*h+s[10]*p)}for(let s in Ei)r[s]=i[s]}var K0=0,l2=0;Dr.frame(function({time:e}){Z0.begin(),K0++,K0===60&&(l2=e),K0===180&&120/Math.max(e-l2,.001)<32&&Si.stepDown()&&(Q0=Si.reflection,K0=0),ar.tick({time:e}),W_(e),Ti.update(ar.pos,ar.fmouse[1],zf()),B_(),X_(e),J0.capture(arguments[0],{view:ec,proj:tc,eye:Ho},()=>{G_(()=>{Q0&&D_(()=>{kf(),e2(),a2(),ki(),Lf(Ti.batch()),t2(),n2(),o2(),i2(rc),Ai(),r2(),Ai.glass()}),kf(),e2(),a2(),ki(),Lf(Ti.batch()),t2(),n2(),o2(),i2(rc),Ai(),F_(),r2(),Ai.glass()})}),J0.present(),Z0.end()});})();
