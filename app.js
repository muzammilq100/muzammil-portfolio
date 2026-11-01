"use strict";(()=>{var de=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Rh=de((Q_,Ch)=>{"use strict";var Yi=document.getElementById("loader"),a0=Yi&&Yi.querySelector(".loader-bar i"),Ki=0,i0=0,kh=!1,ty=performance.now();function Lh(){if(!a0)return;let e=Ki?i0/Math.max(Ki,24):0;a0.style.transform="scaleX("+Math.min(1,.06+e*.94).toFixed(3)+")"}function el(){kh||(kh=!0,window.__galleryReady=!0,Yi&&(a0&&(a0.style.transform="scaleX(1)"),Yi.classList.add("done"),setTimeout(()=>Yi.remove(),1400)))}var zh=null;function ry(){clearTimeout(zh),i0>=Ki&&performance.now()-ty>600&&(zh=setTimeout(()=>{i0>=Ki&&el()},450))}setTimeout(el,2e4);var ny=e=>/(^|\/)(res|images)\//.test(e),o0=window.fetch.bind(window);async function oy(e,t){let r=await o0(e+".gz",t);if(!r.ok)throw new Error("no .gz");let n=new Uint8Array(await r.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let o=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(o).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let r=typeof e=="string"?e:e&&e.url||"";if(!ny(r))return o0(e,t);Ki++,Lh();let n=a=>(i0++,Lh(),ry(),a),o;return/\.bin$/.test(r)&&typeof DecompressionStream!="undefined"?o=oy(r,t).catch(()=>o0(e,t)):o=o0(e,t),o.then(n,a=>{throw n(),a})};Ch.exports={finish:el}});var io=de((Z_,Oh)=>{"use strict";var Ih=typeof navigator!="undefined"&&navigator.userAgent||"",ay=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Mo=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Ih)||/Macintosh/.test(Ih)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||ay,Ph=typeof window!="undefined"&&window.devicePixelRatio||1,pn={isPhone:Mo,pixelRatio:Mo?Math.min(Ph,1.5):Math.min(Ph,2),reflection:!Mo,gardenDetail:Mo?0:1,leafShare:Mo?.65:1,motion:!Mo,post:Mo?1:2,level:Mo?1:0};pn.stepDown=()=>{if(pn.reflection)pn.reflection=!1;else if(pn.gardenDetail>0||pn.motion)pn.gardenDetail=0,pn.motion=!1,pn.leafShare=Math.min(pn.leafShare,.65);else if(pn.post>0)pn.post--;else return!1;return pn.level++,!0};Oh.exports=pn});var tl=de((J_,Nh)=>{"use strict";Nh.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var s0=de((e4,Dh)=>{"use strict";var Yr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Fh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Gh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Yr.instagramUrl="https://instagram.com/"+Yr.instagram;Yr.mailUrl="mailto:"+Yr.email+"?subject="+encodeURIComponent("Your paintings");Yr.icons=e=>`
	<a class="${e}" href="${Yr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Yr.instagram}" title="Instagram">${Fh}</a>
	<a class="${e}" href="${Yr.mailUrl}" aria-label="Email ${Yr.email}" title="Email">${Gh}</a>`;Yr.line=e=>`
	<span class="${e}">
		<a href="${Yr.instagramUrl}" target="_blank" rel="noopener">${Fh}<span>@${Yr.instagram}</span></a>
		<a href="${Yr.mailUrl}">${Gh}<span>${Yr.email}</span></a>
	</span>`;Dh.exports=Yr});var c0=de((t4,$h)=>{"use strict";$h.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var rl=de((r4,Uh)=>{"use strict";var iy=tl(),sy=s0(),qh=c0(),cy=io(),Ao=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ly=`
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
`,Kr=null;function fy(e){if(Kr){Kr.hidden=!1,requestAnimationFrame(()=>Kr.classList.add("on"));return}let t=document.createElement("style");t.textContent=ly,document.head.appendChild(t);let r=!cy.isPhone;Kr=document.createElement("div"),Kr.className="plist",Kr.setAttribute("role","region"),Kr.setAttribute("aria-label","All paintings"),Kr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${sy.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${iy.map(o=>`
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
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(o=>Kr.addEventListener(o,a=>a.stopPropagation(),{passive:!0}));let n=Kr.querySelector(".plist-close");n&&n.addEventListener("click",Hh),document.body.appendChild(Kr),requestAnimationFrame(()=>Kr.classList.add("on"))}function Hh(){Kr&&(Kr.classList.remove("on"),setTimeout(()=>{Kr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Uh.exports={show:fy,hide:Hh}});var Bh=de((nl,ol)=>{(function(e,t){typeof nl=="object"&&typeof ol!="undefined"?ol.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(nl,function(){var e=function(){function t(p){return o.appendChild(p.dom),p}function r(p){for(var u=0;u<o.children.length;u++)o.children[u].style.display=u===p?"block":"none";n=p}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),r(++n%o.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var p=(performance||Date).now();if(f.update(p-a,200),p>i+1e3&&(c.update(1e3*s/(p-i),100),i=p,s=0,h)){var u=performance.memory;h.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:r}};return e.Panel=function(t,r,n){var o=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,h=3*s,p=2*s,u=3*s,m=15*s,v=74*s,d=30*s,g=document.createElement("canvas");g.width=c,g.height=f,g.style.cssText="width:80px;height:48px";var w=g.getContext("2d");return w.font="bold "+9*s+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,c,f),w.fillStyle=r,w.fillText(t,h,p),w.fillRect(u,m,v,d),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u,m,v,d),{dom:g,update:function(T,C){o=Math.min(o,T),a=Math.max(a,T),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,c,m),w.fillStyle=r,w.fillText(i(T)+" "+t+" ("+i(o)+"-"+i(a)+")",h,p),w.drawImage(g,u+s,m,v-s,d,u,m,v-s,d),w.fillRect(u+v-s,m,s,d),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u+v-s,m,s,i((1-T/C)*d))}}},e})});var jh=de((al,il)=>{(function(e,t){typeof al=="object"&&typeof il!="undefined"?il.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(al,function(){"use strict";var e=function(l){return l instanceof Uint8Array||l instanceof Uint16Array||l instanceof Uint32Array||l instanceof Int8Array||l instanceof Int16Array||l instanceof Int32Array||l instanceof Float32Array||l instanceof Float64Array||l instanceof Uint8ClampedArray},t=function(l,b){for(var S=Object.keys(b),j=0;j<S.length;++j)l[S[j]]=b[S[j]];return l},r=`
`;function n(l){return typeof atob!="undefined"?atob(l):"base64:"+l}function o(l){var b=new Error("(regl) "+l);throw console.error(b),b}function a(l,b){l||o(b)}function i(l){return l?": "+l:""}function s(l,b,S){l in b||o("unknown parameter ("+l+")"+i(S)+". possible values: "+Object.keys(b).join())}function c(l,b){e(l)||o("invalid parameter type"+i(b)+". must be a typed array")}function f(l,b){switch(b){case"number":return typeof l=="number";case"object":return typeof l=="object";case"string":return typeof l=="string";case"boolean":return typeof l=="boolean";case"function":return typeof l=="function";case"undefined":return typeof l=="undefined";case"symbol":return typeof l=="symbol"}}function h(l,b,S){f(l,b)||o("invalid parameter type"+i(S)+". expected "+b+", got "+typeof l)}function p(l,b){l>=0&&(l|0)===l||o("invalid parameter type, ("+l+")"+i(b)+". must be a nonnegative integer")}function u(l,b,S){b.indexOf(l)<0&&o("invalid value"+i(S)+". must be one of: "+b)}var m=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function v(l){Object.keys(l).forEach(function(b){m.indexOf(b)<0&&o('invalid regl constructor argument "'+b+'". must be one of '+m)})}function d(l,b){for(l=l+"";l.length<b;)l=" "+l;return l}function g(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function w(l,b){this.number=l,this.line=b,this.errors=[]}function T(l,b,S){this.file=l,this.line=b,this.message=S}function C(){var l=new Error,b=(l.stack||l).toString(),S=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(b);if(S)return S[1];var j=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(b);return j?j[1]:"unknown"}function D(){var l=new Error,b=(l.stack||l).toString(),S=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(b);if(S)return S[1];var j=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(b);return j?j[1]:"unknown"}function q(l,b){var S=l.split(`
`),j=1,Q=0,U={unknown:new g,0:new g};U.unknown.name=U[0].name=b||C(),U.unknown.lines.push(new w(0,""));for(var V=0;V<S.length;++V){var ie=S[V],le=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(ie);if(le)switch(le[1]){case"line":var me=/(\d+)(\s+\d+)?/.exec(le[2]);me&&(j=me[1]|0,me[2]&&(Q=me[2]|0,Q in U||(U[Q]=new g)));break;case"define":var fe=/SHADER_NAME(_B64)?\s+(.*)$/.exec(le[2]);fe&&(U[Q].name=fe[1]?n(fe[2]):fe[2]);break}U[Q].lines.push(new w(j++,ie))}return Object.keys(U).forEach(function(ye){var Ae=U[ye];Ae.lines.forEach(function(se){Ae.index[se.number]=se})}),U}function H(l){var b=[];return l.split(`
`).forEach(function(S){if(!(S.length<5)){var j=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(S);j?b.push(new T(j[1]|0,j[2]|0,j[3].trim())):S.length>0&&b.push(new T("unknown",0,S))}}),b}function ae(l,b){b.forEach(function(S){var j=l[S.file];if(j){var Q=j.index[S.line];if(Q){Q.errors.push(S),j.hasErrors=!0;return}}l.unknown.hasErrors=!0,l.unknown.lines[0].errors.push(S)})}function ve(l,b,S,j,Q){if(!l.getShaderParameter(b,l.COMPILE_STATUS)){var U=l.getShaderInfoLog(b),V=j===l.FRAGMENT_SHADER?"fragment":"vertex";xe(S,"string",V+" shader source must be a string",Q);var ie=q(S,Q),le=H(U);ae(ie,le),Object.keys(ie).forEach(function(me){var fe=ie[me];if(!fe.hasErrors)return;var ye=[""],Ae=[""];function se(be,N){ye.push(be),Ae.push(N||"")}se("file number "+me+": "+fe.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),fe.lines.forEach(function(be){if(be.errors.length>0){se(d(be.number,4)+"|  ","background-color:yellow; font-weight:bold"),se(be.line+r,"color:red; background-color:yellow; font-weight:bold");var N=0;be.errors.forEach(function(X){var pe=X.message,Ce=/^\s*'(.*)'\s*:\s*(.*)$/.exec(pe);if(Ce){var te=Ce[1];switch(pe=Ce[2],te){case"assign":te="=";break}N=Math.max(be.line.indexOf(te,N),0)}else N=0;se(d("| ",6)),se(d("^^^",N+3)+r,"font-weight:bold"),se(d("| ",6)),se(pe+r,"font-weight:bold")}),se(d("| ",6)+r)}else se(d(be.number,4)+"|  "),se(be.line+r,"color:red")}),typeof document!="undefined"&&!window.chrome?(Ae[0]=ye.join("%c"),console.log.apply(console,Ae)):console.log(ye.join(""))}),a.raise("Error compiling "+V+" shader, "+ie[0].name)}}function J(l,b,S,j,Q){if(!l.getProgramParameter(b,l.LINK_STATUS)){var U=l.getProgramInfoLog(b),V=q(S,Q),ie=q(j,Q),le='Error linking program with vertex shader, "'+ie[0].name+'", and fragment shader "'+V[0].name+'"';typeof document!="undefined"?console.log("%c"+le+r+"%c"+U,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(le+r+U),a.raise(le)}}function Ee(l){l._commandRef=C()}function ue(l,b,S,j){Ee(l);function Q(le){return le?j.id(le):0}l._fragId=Q(l.static.frag),l._vertId=Q(l.static.vert);function U(le,me){Object.keys(me).forEach(function(fe){le[j.id(fe)]=!0})}var V=l._uniformSet={};U(V,b.static),U(V,b.dynamic);var ie=l._attributeSet={};U(ie,S.static),U(ie,S.dynamic),l._hasCount="count"in l.static||"count"in l.dynamic||"elements"in l.static||"elements"in l.dynamic}function Fe(l,b){var S=D();o(l+" in command "+(b||C())+(S==="unknown"?"":" called from "+S))}function Ie(l,b,S){l||Fe(b,S||C())}function Re(l,b,S,j){l in b||Fe("unknown parameter ("+l+")"+i(S)+". possible values: "+Object.keys(b).join(),j||C())}function xe(l,b,S,j){f(l,b)||Fe("invalid parameter type"+i(S)+". expected "+b+", got "+typeof l,j||C())}function rt(l){l()}function Xt(l,b,S){l.texture?u(l.texture._texture.internalformat,b,"unsupported texture format for attachment"):u(l.renderbuffer._renderbuffer.format,S,"unsupported renderbuffer format for attachment")}var ct=33071,Ft=9728,Gt=9984,ir=9985,Zt=9986,Pn=9987,pr=5120,Rr=5121,At=5122,De=5123,ft=5124,Je=5125,Jt=5126,On=32819,Se=32820,nt=33635,yt=34042,Dt=36193,_t={};_t[pr]=_t[Rr]=1,_t[At]=_t[De]=_t[Dt]=_t[nt]=_t[On]=_t[Se]=2,_t[ft]=_t[Je]=_t[Jt]=_t[yt]=4;function zt(l,b){return l===Se||l===On||l===nt?2:l===yt?4:_t[l]*b}function bt(l){return!(l&l-1)&&!!l}function $t(l,b,S){var j,Q=b.width,U=b.height,V=b.channels;a(Q>0&&Q<=S.maxTextureSize&&U>0&&U<=S.maxTextureSize,"invalid texture shape"),(l.wrapS!==ct||l.wrapT!==ct)&&a(bt(Q)&&bt(U),"incompatible wrap mode for texture, both width and height must be power of 2"),b.mipmask===1?Q!==1&&U!==1&&a(l.minFilter!==Gt&&l.minFilter!==Zt&&l.minFilter!==ir&&l.minFilter!==Pn,"min filter requires mipmap"):(a(bt(Q)&&bt(U),"texture must be a square power of 2 to support mipmapping"),a(b.mipmask===(Q<<1)-1,"missing or incomplete mipmap data")),b.type===Jt&&(S.extensions.indexOf("oes_texture_float_linear")<0&&a(l.minFilter===Ft&&l.magFilter===Ft,"filter not supported, must enable oes_texture_float_linear"),a(!l.genMipmaps,"mipmap generation not supported with float textures"));var ie=b.images;for(j=0;j<16;++j)if(ie[j]){var le=Q>>j,me=U>>j;a(b.mipmask&1<<j,"missing mipmap data");var fe=ie[j];if(a(fe.width===le&&fe.height===me,"invalid shape for mip images"),a(fe.format===b.format&&fe.internalformat===b.internalformat&&fe.type===b.type,"incompatible type for mip image"),!fe.compressed)if(fe.data){var ye=Math.ceil(zt(fe.type,V)*le/fe.unpackAlignment)*fe.unpackAlignment;a(fe.data.byteLength===ye*me,"invalid data for image, buffer size is inconsistent with image format")}else fe.element||fe.copy}else l.genMipmaps||a((b.mipmask&1<<j)===0,"extra mipmap data");b.compressed&&a(!l.genMipmaps,"mipmap generation for compressed images not supported")}function Yt(l,b,S,j){var Q=l.width,U=l.height,V=l.channels;a(Q>0&&Q<=j.maxTextureSize&&U>0&&U<=j.maxTextureSize,"invalid texture shape"),a(Q===U,"cube map must be square"),a(b.wrapS===ct&&b.wrapT===ct,"wrap mode not supported by cube map");for(var ie=0;ie<S.length;++ie){var le=S[ie];a(le.width===Q&&le.height===U,"inconsistent cube map face shape"),b.genMipmaps&&(a(!le.compressed,"can not generate mipmap for compressed textures"),a(le.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var me=le.images,fe=0;fe<16;++fe){var ye=me[fe];if(ye){var Ae=Q>>fe,se=U>>fe;a(le.mipmask&1<<fe,"missing mipmap data"),a(ye.width===Ae&&ye.height===se,"invalid shape for mip images"),a(ye.format===l.format&&ye.internalformat===l.internalformat&&ye.type===l.type,"incompatible type for mip image"),ye.compressed||(ye.data?a(ye.data.byteLength===Ae*se*Math.max(zt(ye.type,V),ye.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):ye.element||ye.copy)}}}}var y=t(a,{optional:rt,raise:o,commandRaise:Fe,command:Ie,parameter:s,commandParameter:Re,constructor:v,type:h,commandType:xe,isTypedArray:c,nni:p,oneOf:u,shaderError:ve,linkError:J,callSite:D,saveCommandRef:Ee,saveDrawInfo:ue,framebufferFormat:Xt,guessCommand:C,texture2D:$t,textureCube:Yt}),jt=0,mr=0,Qe=5,Ct=6;function ot(l,b){this.id=jt++,this.type=l,this.data=b}function nr(l){return l.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function sr(l){if(l.length===0)return[];var b=l.charAt(0),S=l.charAt(l.length-1);if(l.length>1&&b===S&&(b==='"'||b==="'"))return['"'+nr(l.substr(1,l.length-2))+'"'];var j=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(l);if(j)return sr(l.substr(0,j.index)).concat(sr(j[1])).concat(sr(l.substr(j.index+j[0].length)));var Q=l.split(".");if(Q.length===1)return['"'+nr(l)+'"'];for(var U=[],V=0;V<Q.length;++V)U=U.concat(sr(Q[V]));return U}function fn(l){return"["+sr(l).join("][")+"]"}function rn(l,b){return new ot(l,fn(b+""))}function Uo(l){return typeof l=="function"&&!l._reglType||l instanceof ot}function Vn(l,b){if(typeof l=="function")return new ot(mr,l);if(typeof l=="number"||typeof l=="boolean")return new ot(Qe,l);if(Array.isArray(l))return new ot(Ct,l.map((S,j)=>Vn(S,b+"["+j+"]")));if(l instanceof ot)return l;y(!1,"invalid option type in uniform "+b)}var Ir={DynamicVariable:ot,define:rn,isDynamic:Uo,unbox:Vn,accessor:fn},un={next:typeof requestAnimationFrame=="function"?function(l){return requestAnimationFrame(l)}:function(l){return setTimeout(l,16)},cancel:typeof cancelAnimationFrame=="function"?function(l){return cancelAnimationFrame(l)}:clearTimeout},Nn=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Bo(){var l={"":0},b=[""];return{id:function(S){var j=l[S];return j||(j=l[S]=b.length,b.push(S),j)},str:function(S){return b[S]}}}function go(l,b,S){var j=document.createElement("canvas");t(j.style,{border:0,margin:0,padding:0,top:0,left:0}),l.appendChild(j),l===document.body&&(j.style.position="absolute",t(l.style,{margin:0,padding:0}));function Q(){var ie=window.innerWidth,le=window.innerHeight;if(l!==document.body){var me=l.getBoundingClientRect();ie=me.right-me.left,le=me.bottom-me.top}j.width=S*ie,j.height=S*le,t(j.style,{width:ie+"px",height:le+"px"})}var U;l!==document.body&&typeof ResizeObserver=="function"?(U=new ResizeObserver(function(){setTimeout(Q)}),U.observe(l)):window.addEventListener("resize",Q,!1);function V(){U?U.disconnect():window.removeEventListener("resize",Q),l.removeChild(j)}return Q(),{canvas:j,onDestroy:V}}function xo(l,b){function S(j){try{return l.getContext(j,b)}catch(Q){return null}}return S("webgl")||S("experimental-webgl")||S("webgl-experimental")}function Fn(l){return typeof l.nodeName=="string"&&typeof l.appendChild=="function"&&typeof l.getBoundingClientRect=="function"}function er(l){return typeof l.drawArrays=="function"||typeof l.drawElements=="function"}function zi(l){return typeof l=="string"?l.split():(y(Array.isArray(l),"invalid extension array"),l)}function Ts(l){return typeof l=="string"?(y(typeof document!="undefined","not supported outside of DOM"),document.querySelector(l)):l}function oe(l){var b=l||{},S,j,Q,U,V={},ie=[],le=[],me=typeof window=="undefined"?1:window.devicePixelRatio,fe=!1,ye=function(be){be&&y.raise(be)},Ae=function(){};if(typeof b=="string"?(y(typeof document!="undefined","selector queries only supported in DOM enviroments"),S=document.querySelector(b),y(S,"invalid query string for element")):typeof b=="object"?Fn(b)?S=b:er(b)?(U=b,Q=U.canvas):(y.constructor(b),"gl"in b?U=b.gl:"canvas"in b?Q=Ts(b.canvas):"container"in b&&(j=Ts(b.container)),"attributes"in b&&(V=b.attributes,y.type(V,"object","invalid context attributes")),"extensions"in b&&(ie=zi(b.extensions)),"optionalExtensions"in b&&(le=zi(b.optionalExtensions)),"onDone"in b&&(y.type(b.onDone,"function","invalid or missing onDone callback"),ye=b.onDone),"profile"in b&&(fe=!!b.profile),"pixelRatio"in b&&(me=+b.pixelRatio,y(me>0,"invalid pixel ratio"))):y.raise("invalid arguments to regl"),S&&(S.nodeName.toLowerCase()==="canvas"?Q=S:j=S),!U){if(!Q){y(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var se=go(j||document.body,ye,me);if(!se)return null;Q=se.canvas,Ae=se.onDestroy}V.premultipliedAlpha===void 0&&(V.premultipliedAlpha=!0),U=xo(Q,V)}return U?{gl:U,canvas:Q,container:j,extensions:ie,optionalExtensions:le,pixelRatio:me,profile:fe,onDone:ye,onDestroy:Ae}:(Ae(),ye("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function ze(l,b){var S={};function j(V){y.type(V,"string","extension name must be string");var ie=V.toLowerCase(),le;try{le=S[ie]=l.getExtension(ie)}catch(me){}return!!le}for(var Q=0;Q<b.extensions.length;++Q){var U=b.extensions[Q];if(!j(U))return b.onDestroy(),b.onDone('"'+U+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return b.optionalExtensions.forEach(j),{extensions:S,restore:function(){Object.keys(S).forEach(function(V){if(S[V]&&!j(V))throw new Error("(regl): error restoring extension "+V)})}}}function $e(l,b){for(var S=Array(l),j=0;j<l;++j)S[j]=b(j);return S}var gt=5120,Rt=5121,It=5122,no=5123,wr=5124,$r=5125,jr=5126;function qr(l){for(var b=16;b<=1<<28;b*=16)if(l<=b)return b;return 0}function _n(l){var b,S;return b=(l>65535)<<4,l>>>=b,S=(l>255)<<3,l>>>=S,b|=S,S=(l>15)<<2,l>>>=S,b|=S,S=(l>3)<<1,l>>>=S,b|=S,b|l>>1}function jo(){var l=$e(8,function(){return[]});function b(U){var V=qr(U),ie=l[_n(V)>>2];return ie.length>0?ie.pop():new ArrayBuffer(V)}function S(U){l[_n(U.byteLength)>>2].push(U)}function j(U,V){var ie=null;switch(U){case gt:ie=new Int8Array(b(V),0,V);break;case Rt:ie=new Uint8Array(b(V),0,V);break;case It:ie=new Int16Array(b(2*V),0,V);break;case no:ie=new Uint16Array(b(2*V),0,V);break;case wr:ie=new Int32Array(b(4*V),0,V);break;case $r:ie=new Uint32Array(b(4*V),0,V);break;case jr:ie=new Float32Array(b(4*V),0,V);break;default:return null}return ie.length!==V?ie.subarray(0,V):ie}function Q(U){S(U.buffer)}return{alloc:b,free:S,allocType:j,freeType:Q}}var Bt=jo();Bt.zero=jo();var Ss=3408,oc=3410,Ci=3411,Ff=3412,Wo=3413,Xn=3414,ks=3415,Hr=33901,hn=33902,Ra=3379,g2=3386,x2=34921,y2=36347,b2=36348,w2=35661,_2=35660,E2=34930,M2=36349,A2=34076,T2=34024,S2=7936,k2=7937,L2=7938,z2=35724,C2=34047,R2=36063,I2=34852,Ls=3553,Gf=34067,P2=34069,O2=33984,Ri=6408,ac=5126,Df=5121,ic=36160,N2=36053,F2=36064,G2=16384,D2=function(l,b){var S=1;b.ext_texture_filter_anisotropic&&(S=l.getParameter(C2));var j=1,Q=1;b.webgl_draw_buffers&&(j=l.getParameter(I2),Q=l.getParameter(R2));var U=!!b.oes_texture_float;if(U){var V=l.createTexture();l.bindTexture(Ls,V),l.texImage2D(Ls,0,Ri,1,1,0,Ri,ac,null);var ie=l.createFramebuffer();if(l.bindFramebuffer(ic,ie),l.framebufferTexture2D(ic,F2,Ls,V,0),l.bindTexture(Ls,null),l.checkFramebufferStatus(ic)!==N2)U=!1;else{l.viewport(0,0,1,1),l.clearColor(1,0,0,1),l.clear(G2);var le=Bt.allocType(ac,4);l.readPixels(0,0,1,1,Ri,ac,le),l.getError()?U=!1:(l.deleteFramebuffer(ie),l.deleteTexture(V),U=le[0]===1),Bt.freeType(le)}}var me=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),fe=!0;if(!me){var ye=l.createTexture(),Ae=Bt.allocType(Df,36);l.activeTexture(O2),l.bindTexture(Gf,ye),l.texImage2D(P2,0,Ri,3,3,0,Ri,Df,Ae),Bt.freeType(Ae),l.bindTexture(Gf,null),l.deleteTexture(ye),fe=!l.getError()}return{colorBits:[l.getParameter(oc),l.getParameter(Ci),l.getParameter(Ff),l.getParameter(Wo)],depthBits:l.getParameter(Xn),stencilBits:l.getParameter(ks),subpixelBits:l.getParameter(Ss),extensions:Object.keys(b).filter(function(se){return!!b[se]}),maxAnisotropic:S,maxDrawbuffers:j,maxColorAttachments:Q,pointSizeDims:l.getParameter(Hr),lineWidthDims:l.getParameter(hn),maxViewportDims:l.getParameter(g2),maxCombinedTextureUnits:l.getParameter(w2),maxCubeMapSize:l.getParameter(A2),maxRenderbufferSize:l.getParameter(T2),maxTextureUnits:l.getParameter(E2),maxTextureSize:l.getParameter(Ra),maxAttributes:l.getParameter(x2),maxVertexUniforms:l.getParameter(y2),maxVertexTextureUnits:l.getParameter(_2),maxVaryingVectors:l.getParameter(b2),maxFragmentUniforms:l.getParameter(M2),glsl:l.getParameter(z2),renderer:l.getParameter(k2),vendor:l.getParameter(S2),version:l.getParameter(L2),readFloat:U,npotTextureCube:fe}};function Gn(l){return!!l&&typeof l=="object"&&Array.isArray(l.shape)&&Array.isArray(l.stride)&&typeof l.offset=="number"&&l.shape.length===l.stride.length&&(Array.isArray(l.data)||e(l.data))}var dn=function(l){return Object.keys(l).map(function(b){return l[b]})},zs={shape:U2,flatten:H2};function $2(l,b,S){for(var j=0;j<b;++j)S[j]=l[j]}function q2(l,b,S,j){for(var Q=0,U=0;U<b;++U)for(var V=l[U],ie=0;ie<S;++ie)j[Q++]=V[ie]}function $f(l,b,S,j,Q,U){for(var V=U,ie=0;ie<b;++ie)for(var le=l[ie],me=0;me<S;++me)for(var fe=le[me],ye=0;ye<j;++ye)Q[V++]=fe[ye]}function qf(l,b,S,j,Q){for(var U=1,V=S+1;V<b.length;++V)U*=b[V];var ie=b[S];if(b.length-S===4){var le=b[S+1],me=b[S+2],fe=b[S+3];for(V=0;V<ie;++V)$f(l[V],le,me,fe,j,Q),Q+=U}else for(V=0;V<ie;++V)qf(l[V],b,S+1,j,Q),Q+=U}function H2(l,b,S,j){var Q=1;if(b.length)for(var U=0;U<b.length;++U)Q*=b[U];else Q=0;var V=j||Bt.allocType(S,Q);switch(b.length){case 0:break;case 1:$2(l,b[0],V);break;case 2:q2(l,b[0],b[1],V);break;case 3:$f(l,b[0],b[1],b[2],V,0);break;default:qf(l,b,0,V,0)}return V}function U2(l){for(var b=[],S=l;S.length;S=S[0])b.push(S.length);return b}var sc={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},B2=5120,j2=5122,W2=5124,V2=5121,X2=5123,Y2=5125,K2=5126,Q2=5126,Vo={int8:B2,int16:j2,int32:W2,uint8:V2,uint16:X2,uint32:Y2,float:K2,float32:Q2},Z2=35048,J2=35040,Cs={dynamic:Z2,stream:J2,static:35044},cc=zs.flatten,Hf=zs.shape,Uf=35044,eg=35040,lc=5121,fc=5126,yo=[];yo[5120]=1,yo[5122]=2,yo[5124]=4,yo[5121]=1,yo[5123]=2,yo[5125]=4,yo[5126]=4;function Rs(l){return sc[Object.prototype.toString.call(l)]|0}function Bf(l,b){for(var S=0;S<b.length;++S)l[S]=b[S]}function jf(l,b,S,j,Q,U,V){for(var ie=0,le=0;le<S;++le)for(var me=0;me<j;++me)l[ie++]=b[Q*le+U*me+V]}function tg(l,b,S,j){var Q=0,U={};function V(N){this.id=Q++,this.buffer=l.createBuffer(),this.type=N,this.usage=Uf,this.byteLength=0,this.dimension=1,this.dtype=lc,this.persistentData=null,S.profile&&(this.stats={size:0})}V.prototype.bind=function(){l.bindBuffer(this.type,this.buffer)},V.prototype.destroy=function(){Ae(this)};var ie=[];function le(N,X){var pe=ie.pop();return pe||(pe=new V(N)),pe.bind(),ye(pe,X,eg,0,1,!1),pe}function me(N){ie.push(N)}function fe(N,X,pe){N.byteLength=X.byteLength,l.bufferData(N.type,X,pe)}function ye(N,X,pe,Ce,te,Pe){var ne;if(N.usage=pe,Array.isArray(X)){if(N.dtype=Ce||fc,X.length>0){var we;if(Array.isArray(X[0])){ne=Hf(X);for(var re=1,_e=1;_e<ne.length;++_e)re*=ne[_e];N.dimension=re,we=cc(X,ne,N.dtype),fe(N,we,pe),Pe?N.persistentData=we:Bt.freeType(we)}else if(typeof X[0]=="number"){N.dimension=te;var We=Bt.allocType(N.dtype,X.length);Bf(We,X),fe(N,We,pe),Pe?N.persistentData=We:Bt.freeType(We)}else e(X[0])?(N.dimension=X[0].length,N.dtype=Ce||Rs(X[0])||fc,we=cc(X,[X.length,X[0].length],N.dtype),fe(N,we,pe),Pe?N.persistentData=we:Bt.freeType(we)):y.raise("invalid buffer data")}}else if(e(X))N.dtype=Ce||Rs(X),N.dimension=te,fe(N,X,pe),Pe&&(N.persistentData=new Uint8Array(new Uint8Array(X.buffer)));else if(Gn(X)){ne=X.shape;var Ze=X.stride,Te=X.offset,ge=0,ee=0,Ke=0,at=0;ne.length===1?(ge=ne[0],ee=1,Ke=Ze[0],at=0):ne.length===2?(ge=ne[0],ee=ne[1],Ke=Ze[0],at=Ze[1]):y.raise("invalid shape"),N.dtype=Ce||Rs(X.data)||fc,N.dimension=ee;var qe=Bt.allocType(N.dtype,ge*ee);jf(qe,X.data,ge,ee,Ke,at,Te),fe(N,qe,pe),Pe?N.persistentData=qe:Bt.freeType(qe)}else X instanceof ArrayBuffer?(N.dtype=lc,N.dimension=te,fe(N,X,pe),Pe&&(N.persistentData=new Uint8Array(new Uint8Array(X)))):y.raise("invalid buffer data")}function Ae(N){b.bufferCount--,j(N);var X=N.buffer;y(X,"buffer must not be deleted already"),l.deleteBuffer(X),N.buffer=null,delete U[N.id]}function se(N,X,pe,Ce){b.bufferCount++;var te=new V(X);U[te.id]=te;function Pe(re){var _e=Uf,We=null,Ze=0,Te=0,ge=1;return Array.isArray(re)||e(re)||Gn(re)||re instanceof ArrayBuffer?We=re:typeof re=="number"?Ze=re|0:re&&(y.type(re,"object","buffer arguments must be an object, a number or an array"),"data"in re&&(y(We===null||Array.isArray(We)||e(We)||Gn(We),"invalid data for buffer"),We=re.data),"usage"in re&&(y.parameter(re.usage,Cs,"invalid buffer usage"),_e=Cs[re.usage]),"type"in re&&(y.parameter(re.type,Vo,"invalid buffer type"),Te=Vo[re.type]),"dimension"in re&&(y.type(re.dimension,"number","invalid dimension"),ge=re.dimension|0),"length"in re&&(y.nni(Ze,"buffer length must be a nonnegative integer"),Ze=re.length|0)),te.bind(),We?ye(te,We,_e,Te,ge,Ce):(Ze&&l.bufferData(te.type,Ze,_e),te.dtype=Te||lc,te.usage=_e,te.dimension=ge,te.byteLength=Ze),S.profile&&(te.stats.size=te.byteLength*yo[te.dtype]),Pe}function ne(re,_e){y(_e+re.byteLength<=te.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+re.byteLength+" starting from offset "+_e+" to a buffer of size "+te.byteLength),l.bufferSubData(te.type,_e,re)}function we(re,_e){var We=(_e||0)|0,Ze;if(te.bind(),e(re)||re instanceof ArrayBuffer)ne(re,We);else if(Array.isArray(re)){if(re.length>0)if(typeof re[0]=="number"){var Te=Bt.allocType(te.dtype,re.length);Bf(Te,re),ne(Te,We),Bt.freeType(Te)}else if(Array.isArray(re[0])||e(re[0])){Ze=Hf(re);var ge=cc(re,Ze,te.dtype);ne(ge,We),Bt.freeType(ge)}else y.raise("invalid buffer data")}else if(Gn(re)){Ze=re.shape;var ee=re.stride,Ke=0,at=0,qe=0,ht=0;Ze.length===1?(Ke=Ze[0],at=1,qe=ee[0],ht=0):Ze.length===2?(Ke=Ze[0],at=Ze[1],qe=ee[0],ht=ee[1]):y.raise("invalid shape");var et=Array.isArray(re.data)?te.dtype:Rs(re.data),lt=Bt.allocType(et,Ke*at);jf(lt,re.data,Ke,at,qe,ht,re.offset),ne(lt,We),Bt.freeType(lt)}else y.raise("invalid data for buffer subdata");return Pe}return pe||Pe(N),Pe._reglType="buffer",Pe._buffer=te,Pe.subdata=we,S.profile&&(Pe.stats=te.stats),Pe.destroy=function(){Ae(te)},Pe}function be(){dn(U).forEach(function(N){N.buffer=l.createBuffer(),l.bindBuffer(N.type,N.buffer),l.bufferData(N.type,N.persistentData||N.byteLength,N.usage)})}return S.profile&&(b.getTotalBufferSize=function(){var N=0;return Object.keys(U).forEach(function(X){N+=U[X].stats.size}),N}),{create:se,createStream:le,destroyStream:me,clear:function(){dn(U).forEach(Ae),ie.forEach(Ae)},getBuffer:function(N){return N&&N._buffer instanceof V?N._buffer:null},restore:be,_initBuffer:ye}}var rg=0,ng=0,og=1,ag=1,ig=4,sg=4,Ia={points:rg,point:ng,lines:og,line:ag,triangles:ig,triangle:sg,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},cg=0,lg=1,Ii=4,fg=5120,Pa=5121,Wf=5122,Oa=5123,Vf=5124,Xo=5125,uc=34963,ug=35040,hg=35044;function dg(l,b,S,j){var Q={},U=0,V={uint8:Pa,uint16:Oa};b.oes_element_index_uint&&(V.uint32=Xo);function ie(be){this.id=U++,Q[this.id]=this,this.buffer=be,this.primType=Ii,this.vertCount=0,this.type=0}ie.prototype.bind=function(){this.buffer.bind()};var le=[];function me(be){var N=le.pop();return N||(N=new ie(S.create(null,uc,!0,!1)._buffer)),ye(N,be,ug,-1,-1,0,0),N}function fe(be){le.push(be)}function ye(be,N,X,pe,Ce,te,Pe){be.buffer.bind();var ne;if(N){var we=Pe;!Pe&&(!e(N)||Gn(N)&&!e(N.data))&&(we=b.oes_element_index_uint?Xo:Oa),S._initBuffer(be.buffer,N,X,we,3)}else l.bufferData(uc,te,X),be.buffer.dtype=ne||Pa,be.buffer.usage=X,be.buffer.dimension=3,be.buffer.byteLength=te;if(ne=Pe,!Pe){switch(be.buffer.dtype){case Pa:case fg:ne=Pa;break;case Oa:case Wf:ne=Oa;break;case Xo:case Vf:ne=Xo;break;default:y.raise("unsupported type for element array")}be.buffer.dtype=ne}be.type=ne,y(ne!==Xo||!!b.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var re=Ce;re<0&&(re=be.buffer.byteLength,ne===Oa?re>>=1:ne===Xo&&(re>>=2)),be.vertCount=re;var _e=pe;if(pe<0){_e=Ii;var We=be.buffer.dimension;We===1&&(_e=cg),We===2&&(_e=lg),We===3&&(_e=Ii)}be.primType=_e}function Ae(be){j.elementsCount--,y(be.buffer!==null,"must not double destroy elements"),delete Q[be.id],be.buffer.destroy(),be.buffer=null}function se(be,N){var X=S.create(null,uc,!0),pe=new ie(X._buffer);j.elementsCount++;function Ce(te){if(!te)X(),pe.primType=Ii,pe.vertCount=0,pe.type=Pa;else if(typeof te=="number")X(te),pe.primType=Ii,pe.vertCount=te|0,pe.type=Pa;else{var Pe=null,ne=hg,we=-1,re=-1,_e=0,We=0;Array.isArray(te)||e(te)||Gn(te)?Pe=te:(y.type(te,"object","invalid arguments for elements"),"data"in te&&(Pe=te.data,y(Array.isArray(Pe)||e(Pe)||Gn(Pe),"invalid data for element buffer")),"usage"in te&&(y.parameter(te.usage,Cs,"invalid element buffer usage"),ne=Cs[te.usage]),"primitive"in te&&(y.parameter(te.primitive,Ia,"invalid element buffer primitive"),we=Ia[te.primitive]),"count"in te&&(y(typeof te.count=="number"&&te.count>=0,"invalid vertex count for elements"),re=te.count|0),"type"in te&&(y.parameter(te.type,V,"invalid buffer type"),We=V[te.type]),"length"in te?_e=te.length|0:(_e=re,We===Oa||We===Wf?_e*=2:(We===Xo||We===Vf)&&(_e*=4))),ye(pe,Pe,ne,we,re,_e,We)}return Ce}return Ce(be),Ce._reglType="elements",Ce._elements=pe,Ce.subdata=function(te,Pe){return X.subdata(te,Pe),Ce},Ce.destroy=function(){Ae(pe)},Ce}return{create:se,createStream:me,destroyStream:fe,getElements:function(be){return typeof be=="function"&&be._elements instanceof ie?be._elements:null},clear:function(){dn(Q).forEach(Ae)}}}var Xf=new Float32Array(1),pg=new Uint32Array(Xf.buffer),mg=5123;function Yf(l){for(var b=Bt.allocType(mg,l.length),S=0;S<l.length;++S)if(isNaN(l[S]))b[S]=65535;else if(l[S]===1/0)b[S]=31744;else if(l[S]===-1/0)b[S]=64512;else{Xf[0]=l[S];var j=pg[0],Q=j>>>31<<15,U=(j<<1>>>24)-127,V=j>>13&1023;if(U<-24)b[S]=Q;else if(U<-14){var ie=-14-U;b[S]=Q+(V+1024>>ie)}else U>15?b[S]=Q+31744:b[S]=Q+(U+15<<10)+V}return b}function cr(l){return Array.isArray(l)||e(l)}var Kf=function(l){return!(l&l-1)&&!!l},vg=34467,Yn=3553,hc=34067,Is=34069,Yo=6408,dc=6406,Ps=6407,Pi=6409,Os=6410,Qf=32854,pc=32855,Zf=36194,gg=32819,xg=32820,yg=33635,bg=34042,mc=6402,Ns=34041,vc=35904,gc=35906,Na=36193,xc=33776,yc=33777,bc=33778,wc=33779,Jf=35986,eu=35987,tu=34798,ru=35840,nu=35841,ou=35842,au=35843,iu=36196,Fa=5121,_c=5123,Ec=5125,Oi=5126,wg=10242,_g=10243,Eg=10497,Mc=33071,Mg=33648,Ag=10240,Tg=10241,Ac=9728,Sg=9729,Tc=9984,su=9985,cu=9986,Sc=9987,kg=33170,Fs=4352,Lg=4353,zg=4354,Cg=34046,Rg=3317,Ig=37440,Pg=37441,Og=37443,lu=37444,Ni=33984,Ng=[Tc,cu,su,Sc],Gs=[0,Pi,Os,Ps,Yo],En={};En[Pi]=En[dc]=En[mc]=1,En[Ns]=En[Os]=2,En[Ps]=En[vc]=3,En[Yo]=En[gc]=4;function Ga(l){return"[object "+l+"]"}var fu=Ga("HTMLCanvasElement"),uu=Ga("OffscreenCanvas"),hu=Ga("CanvasRenderingContext2D"),du=Ga("ImageBitmap"),pu=Ga("HTMLImageElement"),mu=Ga("HTMLVideoElement"),Fg=Object.keys(sc).concat([fu,uu,hu,du,pu,mu]),Da=[];Da[Fa]=1,Da[Oi]=4,Da[Na]=2,Da[_c]=2,Da[Ec]=4;var Pr=[];Pr[Qf]=2,Pr[pc]=2,Pr[Zf]=2,Pr[Ns]=4,Pr[xc]=.5,Pr[yc]=.5,Pr[bc]=1,Pr[wc]=1,Pr[Jf]=.5,Pr[eu]=1,Pr[tu]=1,Pr[ru]=.5,Pr[nu]=.25,Pr[ou]=.5,Pr[au]=.25,Pr[iu]=.5;function vu(l){return Array.isArray(l)&&(l.length===0||typeof l[0]=="number")}function gu(l){if(!Array.isArray(l))return!1;var b=l.length;return!(b===0||!cr(l[0]))}function Ko(l){return Object.prototype.toString.call(l)}function xu(l){return Ko(l)===fu}function yu(l){return Ko(l)===uu}function Gg(l){return Ko(l)===hu}function Dg(l){return Ko(l)===du}function $g(l){return Ko(l)===pu}function qg(l){return Ko(l)===mu}function kc(l){if(!l)return!1;var b=Ko(l);return Fg.indexOf(b)>=0?!0:vu(l)||gu(l)||Gn(l)}function bu(l){return sc[Object.prototype.toString.call(l)]|0}function Hg(l,b){var S=b.length;switch(l.type){case Fa:case _c:case Ec:case Oi:var j=Bt.allocType(l.type,S);j.set(b),l.data=j;break;case Na:l.data=Yf(b);break;default:y.raise("unsupported texture type, must specify a typed array")}}function wu(l,b){return Bt.allocType(l.type===Na?Oi:l.type,b)}function _u(l,b){l.type===Na?(l.data=Yf(b),Bt.freeType(b)):l.data=b}function Ug(l,b,S,j,Q,U){for(var V=l.width,ie=l.height,le=l.channels,me=V*ie*le,fe=wu(l,me),ye=0,Ae=0;Ae<ie;++Ae)for(var se=0;se<V;++se)for(var be=0;be<le;++be)fe[ye++]=b[S*se+j*Ae+Q*be+U];_u(l,fe)}function Ds(l,b,S,j,Q,U){var V;if(typeof Pr[l]!="undefined"?V=Pr[l]:V=En[l]*Da[b],U&&(V*=6),Q){for(var ie=0,le=S;le>=1;)ie+=V*le*le,le/=2;return ie}else return V*S*j}function Bg(l,b,S,j,Q,U,V){var ie={"don't care":Fs,"dont care":Fs,nice:zg,fast:Lg},le={repeat:Eg,clamp:Mc,mirror:Mg},me={nearest:Ac,linear:Sg},fe=t({mipmap:Sc,"nearest mipmap nearest":Tc,"linear mipmap nearest":su,"nearest mipmap linear":cu,"linear mipmap linear":Sc},me),ye={none:0,browser:lu},Ae={uint8:Fa,rgba4:gg,rgb565:yg,"rgb5 a1":xg},se={alpha:dc,luminance:Pi,"luminance alpha":Os,rgb:Ps,rgba:Yo,rgba4:Qf,"rgb5 a1":pc,rgb565:Zf},be={};b.ext_srgb&&(se.srgb=vc,se.srgba=gc),b.oes_texture_float&&(Ae.float32=Ae.float=Oi),b.oes_texture_half_float&&(Ae.float16=Ae["half float"]=Na),b.webgl_depth_texture&&(t(se,{depth:mc,"depth stencil":Ns}),t(Ae,{uint16:_c,uint32:Ec,"depth stencil":bg})),b.webgl_compressed_texture_s3tc&&t(be,{"rgb s3tc dxt1":xc,"rgba s3tc dxt1":yc,"rgba s3tc dxt3":bc,"rgba s3tc dxt5":wc}),b.webgl_compressed_texture_atc&&t(be,{"rgb atc":Jf,"rgba atc explicit alpha":eu,"rgba atc interpolated alpha":tu}),b.webgl_compressed_texture_pvrtc&&t(be,{"rgb pvrtc 4bppv1":ru,"rgb pvrtc 2bppv1":nu,"rgba pvrtc 4bppv1":ou,"rgba pvrtc 2bppv1":au}),b.webgl_compressed_texture_etc1&&(be["rgb etc1"]=iu);var N=Array.prototype.slice.call(l.getParameter(vg));Object.keys(be).forEach(function(A){var W=be[A];N.indexOf(W)>=0&&(se[A]=W)});var X=Object.keys(se);S.textureFormats=X;var pe=[];Object.keys(se).forEach(function(A){var W=se[A];pe[W]=A});var Ce=[];Object.keys(Ae).forEach(function(A){var W=Ae[A];Ce[W]=A});var te=[];Object.keys(me).forEach(function(A){var W=me[A];te[W]=A});var Pe=[];Object.keys(fe).forEach(function(A){var W=fe[A];Pe[W]=A});var ne=[];Object.keys(le).forEach(function(A){var W=le[A];ne[W]=A});var we=X.reduce(function(A,W){var $=se[W];return $===Pi||$===dc||$===Pi||$===Os||$===mc||$===Ns||b.ext_srgb&&($===vc||$===gc)?A[$]=$:$===pc||W.indexOf("rgba")>=0?A[$]=Yo:A[$]=Ps,A},{});function re(){this.internalformat=Yo,this.format=Yo,this.type=Fa,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=lu,this.width=0,this.height=0,this.channels=0}function _e(A,W){A.internalformat=W.internalformat,A.format=W.format,A.type=W.type,A.compressed=W.compressed,A.premultiplyAlpha=W.premultiplyAlpha,A.flipY=W.flipY,A.unpackAlignment=W.unpackAlignment,A.colorSpace=W.colorSpace,A.width=W.width,A.height=W.height,A.channels=W.channels}function We(A,W){if(!(typeof W!="object"||!W)){if("premultiplyAlpha"in W&&(y.type(W.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),A.premultiplyAlpha=W.premultiplyAlpha),"flipY"in W&&(y.type(W.flipY,"boolean","invalid texture flip"),A.flipY=W.flipY),"alignment"in W&&(y.oneOf(W.alignment,[1,2,4,8],"invalid texture unpack alignment"),A.unpackAlignment=W.alignment),"colorSpace"in W&&(y.parameter(W.colorSpace,ye,"invalid colorSpace"),A.colorSpace=ye[W.colorSpace]),"type"in W){var $=W.type;y(b.oes_texture_float||!($==="float"||$==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),y(b.oes_texture_half_float||!($==="half float"||$==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),y(b.webgl_depth_texture||!($==="uint16"||$==="uint32"||$==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),y.parameter($,Ae,"invalid texture type"),A.type=Ae[$]}var Ne=A.width,dt=A.height,E=A.channels,x=!1;"shape"in W?(y(Array.isArray(W.shape)&&W.shape.length>=2,"shape must be an array"),Ne=W.shape[0],dt=W.shape[1],W.shape.length===3&&(E=W.shape[2],y(E>0&&E<=4,"invalid number of channels"),x=!0),y(Ne>=0&&Ne<=S.maxTextureSize,"invalid width"),y(dt>=0&&dt<=S.maxTextureSize,"invalid height")):("radius"in W&&(Ne=dt=W.radius,y(Ne>=0&&Ne<=S.maxTextureSize,"invalid radius")),"width"in W&&(Ne=W.width,y(Ne>=0&&Ne<=S.maxTextureSize,"invalid width")),"height"in W&&(dt=W.height,y(dt>=0&&dt<=S.maxTextureSize,"invalid height")),"channels"in W&&(E=W.channels,y(E>0&&E<=4,"invalid number of channels"),x=!0)),A.width=Ne|0,A.height=dt|0,A.channels=E|0;var L=!1;if("format"in W){var O=W.format;y(b.webgl_depth_texture||!(O==="depth"||O==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),y.parameter(O,se,"invalid texture format");var F=A.internalformat=se[O];A.format=we[F],O in Ae&&("type"in W||(A.type=Ae[O])),O in be&&(A.compressed=!0),L=!0}!x&&L?A.channels=En[A.format]:x&&!L?A.channels!==Gs[A.format]&&(A.format=A.internalformat=Gs[A.channels]):L&&x&&y(A.channels===En[A.format],"number of channels inconsistent with specified format")}}function Ze(A){l.pixelStorei(Ig,A.flipY),l.pixelStorei(Pg,A.premultiplyAlpha),l.pixelStorei(Og,A.colorSpace),l.pixelStorei(Rg,A.unpackAlignment)}function Te(){re.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function ge(A,W){var $=null;if(kc(W)?$=W:W&&(y.type(W,"object","invalid pixel data type"),We(A,W),"x"in W&&(A.xOffset=W.x|0),"y"in W&&(A.yOffset=W.y|0),kc(W.data)&&($=W.data)),y(!A.compressed||$ instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),W.copy){y(!$,"can not specify copy and data field for the same texture");var Ne=Q.viewportWidth,dt=Q.viewportHeight;A.width=A.width||Ne-A.xOffset,A.height=A.height||dt-A.yOffset,A.needsCopy=!0,y(A.xOffset>=0&&A.xOffset<Ne&&A.yOffset>=0&&A.yOffset<dt&&A.width>0&&A.width<=Ne&&A.height>0&&A.height<=dt,"copy texture read out of bounds")}else if(!$)A.width=A.width||1,A.height=A.height||1,A.channels=A.channels||4;else if(e($))A.channels=A.channels||4,A.data=$,!("type"in W)&&A.type===Fa&&(A.type=bu($));else if(vu($))A.channels=A.channels||4,Hg(A,$),A.alignment=1,A.needsFree=!0;else if(Gn($)){var E=$.data;!Array.isArray(E)&&A.type===Fa&&(A.type=bu(E));var x=$.shape,L=$.stride,O,F,R,z,I,M;x.length===3?(R=x[2],M=L[2]):(y(x.length===2,"invalid ndarray pixel data, must be 2 or 3D"),R=1,M=1),O=x[0],F=x[1],z=L[0],I=L[1],A.alignment=1,A.width=O,A.height=F,A.channels=R,A.format=A.internalformat=Gs[R],A.needsFree=!0,Ug(A,E,z,I,M,$.offset)}else if(xu($)||yu($)||Gg($))xu($)||yu($)?A.element=$:A.element=$.canvas,A.width=A.element.width,A.height=A.element.height,A.channels=4;else if(Dg($))A.element=$,A.width=$.width,A.height=$.height,A.channels=4;else if($g($))A.element=$,A.width=$.naturalWidth,A.height=$.naturalHeight,A.channels=4;else if(qg($))A.element=$,A.width=$.videoWidth,A.height=$.videoHeight,A.channels=4;else if(gu($)){var k=A.width||$[0].length,_=A.height||$.length,P=A.channels;cr($[0][0])?P=P||$[0][0].length:P=P||1;for(var G=zs.shape($),K=1,Z=0;Z<G.length;++Z)K*=G[Z];var Y=wu(A,K);zs.flatten($,G,"",Y),_u(A,Y),A.alignment=1,A.width=k,A.height=_,A.channels=P,A.format=A.internalformat=Gs[P],A.needsFree=!0}A.type===Oi?y(S.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):A.type===Na&&y(S.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ee(A,W,$){var Ne=A.element,dt=A.data,E=A.internalformat,x=A.format,L=A.type,O=A.width,F=A.height;Ze(A),Ne?l.texImage2D(W,$,x,x,L,Ne):A.compressed?l.compressedTexImage2D(W,$,E,O,F,0,dt):A.needsCopy?(j(),l.copyTexImage2D(W,$,x,A.xOffset,A.yOffset,O,F,0)):l.texImage2D(W,$,x,O,F,0,x,L,dt||null)}function Ke(A,W,$,Ne,dt){var E=A.element,x=A.data,L=A.internalformat,O=A.format,F=A.type,R=A.width,z=A.height;Ze(A),E?l.texSubImage2D(W,dt,$,Ne,O,F,E):A.compressed?l.compressedTexSubImage2D(W,dt,$,Ne,L,R,z,x):A.needsCopy?(j(),l.copyTexSubImage2D(W,dt,$,Ne,A.xOffset,A.yOffset,R,z)):l.texSubImage2D(W,dt,$,Ne,R,z,O,F,x)}var at=[];function qe(){return at.pop()||new Te}function ht(A){A.needsFree&&Bt.freeType(A.data),Te.call(A),at.push(A)}function et(){re.call(this),this.genMipmaps=!1,this.mipmapHint=Fs,this.mipmask=0,this.images=Array(16)}function lt(A,W,$){var Ne=A.images[0]=qe();A.mipmask=1,Ne.width=A.width=W,Ne.height=A.height=$,Ne.channels=A.channels=4}function Tt(A,W){var $=null;if(kc(W))$=A.images[0]=qe(),_e($,A),ge($,W),A.mipmask=1;else if(We(A,W),Array.isArray(W.mipmap))for(var Ne=W.mipmap,dt=0;dt<Ne.length;++dt)$=A.images[dt]=qe(),_e($,A),$.width>>=dt,$.height>>=dt,ge($,Ne[dt]),A.mipmask|=1<<dt;else $=A.images[0]=qe(),_e($,A),ge($,W),A.mipmask=1;_e(A,A.images[0]),A.compressed&&(A.internalformat===xc||A.internalformat===yc||A.internalformat===bc||A.internalformat===wc)&&y(A.width%4===0&&A.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function gr(A,W){for(var $=A.images,Ne=0;Ne<$.length;++Ne){if(!$[Ne])return;ee($[Ne],W,Ne)}}var Ar=[];function mt(){var A=Ar.pop()||new et;re.call(A),A.mipmask=0;for(var W=0;W<16;++W)A.images[W]=null;return A}function _r(A){for(var W=A.images,$=0;$<W.length;++$)W[$]&&ht(W[$]),W[$]=null;Ar.push(A)}function Wt(){this.minFilter=Ac,this.magFilter=Ac,this.wrapS=Mc,this.wrapT=Mc,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Fs}function xr(A,W){if("min"in W){var $=W.min;y.parameter($,fe),A.minFilter=fe[$],Ng.indexOf(A.minFilter)>=0&&!("faces"in W)&&(A.genMipmaps=!0)}if("mag"in W){var Ne=W.mag;y.parameter(Ne,me),A.magFilter=me[Ne]}var dt=A.wrapS,E=A.wrapT;if("wrap"in W){var x=W.wrap;typeof x=="string"?(y.parameter(x,le),dt=E=le[x]):Array.isArray(x)&&(y.parameter(x[0],le),y.parameter(x[1],le),dt=le[x[0]],E=le[x[1]])}else{if("wrapS"in W){var L=W.wrapS;y.parameter(L,le),dt=le[L]}if("wrapT"in W){var O=W.wrapT;y.parameter(O,le),E=le[O]}}if(A.wrapS=dt,A.wrapT=E,"anisotropic"in W){var F=W.anisotropic;y(typeof F=="number"&&F>=1&&F<=S.maxAnisotropic,"aniso samples must be between 1 and "),A.anisotropic=W.anisotropic}if("mipmap"in W){var R=!1;switch(typeof W.mipmap){case"string":y.parameter(W.mipmap,ie,"invalid mipmap hint"),A.mipmapHint=ie[W.mipmap],A.genMipmaps=!0,R=!0;break;case"boolean":R=A.genMipmaps=W.mipmap;break;case"object":y(Array.isArray(W.mipmap),"invalid mipmap type"),A.genMipmaps=!1,R=!0;break;default:y.raise("invalid mipmap type")}R&&!("min"in W)&&(A.minFilter=Tc)}}function Er(A,W){l.texParameteri(W,Tg,A.minFilter),l.texParameteri(W,Ag,A.magFilter),l.texParameteri(W,wg,A.wrapS),l.texParameteri(W,_g,A.wrapT),b.ext_texture_filter_anisotropic&&l.texParameteri(W,Cg,A.anisotropic),A.genMipmaps&&(l.hint(kg,A.mipmapHint),l.generateMipmap(W))}var Mr=0,Lr={},Or=S.maxTextureUnits,lr=Array(Or).map(function(){return null});function it(A){re.call(this),this.mipmask=0,this.internalformat=Yo,this.id=Mr++,this.refCount=1,this.target=A,this.texture=l.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Wt,V.profile&&(this.stats={size:0})}function Nr(A){l.activeTexture(Ni),l.bindTexture(A.target,A.texture)}function Lt(){var A=lr[0];A?l.bindTexture(A.target,A.texture):l.bindTexture(Yn,null)}function Ve(A){var W=A.texture;y(W,"must not double destroy texture");var $=A.unit,Ne=A.target;$>=0&&(l.activeTexture(Ni+$),l.bindTexture(Ne,null),lr[$]=null),l.deleteTexture(W),A.texture=null,A.params=null,A.pixels=null,A.refCount=0,delete Lr[A.id],U.textureCount--}t(it.prototype,{bind:function(){var A=this;A.bindCount+=1;var W=A.unit;if(W<0){for(var $=0;$<Or;++$){var Ne=lr[$];if(Ne){if(Ne.bindCount>0)continue;Ne.unit=-1}lr[$]=A,W=$;break}W>=Or&&y.raise("insufficient number of texture units"),V.profile&&U.maxTextureUnits<W+1&&(U.maxTextureUnits=W+1),A.unit=W,l.activeTexture(Ni+W),l.bindTexture(A.target,A.texture)}return W},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ve(this)}});function pt(A,W){var $=new it(Yn);Lr[$.id]=$,U.textureCount++;function Ne(x,L){var O=$.texInfo;Wt.call(O);var F=mt();return typeof x=="number"?typeof L=="number"?lt(F,x|0,L|0):lt(F,x|0,x|0):x?(y.type(x,"object","invalid arguments to regl.texture"),xr(O,x),Tt(F,x)):lt(F,1,1),O.genMipmaps&&(F.mipmask=(F.width<<1)-1),$.mipmask=F.mipmask,_e($,F),y.texture2D(O,F,S),$.internalformat=F.internalformat,Ne.width=F.width,Ne.height=F.height,Nr($),gr(F,Yn),Er(O,Yn),Lt(),_r(F),V.profile&&($.stats.size=Ds($.internalformat,$.type,F.width,F.height,O.genMipmaps,!1)),Ne.format=pe[$.internalformat],Ne.type=Ce[$.type],Ne.mag=te[O.magFilter],Ne.min=Pe[O.minFilter],Ne.wrapS=ne[O.wrapS],Ne.wrapT=ne[O.wrapT],Ne}function dt(x,L,O,F){y(!!x,"must specify image data");var R=L|0,z=O|0,I=F|0,M=qe();return _e(M,$),M.width=0,M.height=0,ge(M,x),M.width=M.width||($.width>>I)-R,M.height=M.height||($.height>>I)-z,y($.type===M.type&&$.format===M.format&&$.internalformat===M.internalformat,"incompatible format for texture.subimage"),y(R>=0&&z>=0&&R+M.width<=$.width&&z+M.height<=$.height,"texture.subimage write out of bounds"),y($.mipmask&1<<I,"missing mipmap data"),y(M.data||M.element||M.needsCopy,"missing image data"),Nr($),Ke(M,Yn,R,z,I),Lt(),ht(M),Ne}function E(x,L){var O=x|0,F=L|0||O;if(O===$.width&&F===$.height)return Ne;Ne.width=$.width=O,Ne.height=$.height=F,Nr($);for(var R=0;$.mipmask>>R;++R){var z=O>>R,I=F>>R;if(!z||!I)break;l.texImage2D(Yn,R,$.format,z,I,0,$.format,$.type,null)}return Lt(),V.profile&&($.stats.size=Ds($.internalformat,$.type,O,F,!1,!1)),Ne}return Ne(A,W),Ne.subimage=dt,Ne.resize=E,Ne._reglType="texture2d",Ne._texture=$,V.profile&&(Ne.stats=$.stats),Ne.destroy=function(){$.decRef()},Ne}function wt(A,W,$,Ne,dt,E){var x=new it(hc);Lr[x.id]=x,U.cubeCount++;var L=new Array(6);function O(z,I,M,k,_,P){var G,K=x.texInfo;for(Wt.call(K),G=0;G<6;++G)L[G]=mt();if(typeof z=="number"||!z){var Z=z|0||1;for(G=0;G<6;++G)lt(L[G],Z,Z)}else if(typeof z=="object")if(I)Tt(L[0],z),Tt(L[1],I),Tt(L[2],M),Tt(L[3],k),Tt(L[4],_),Tt(L[5],P);else if(xr(K,z),We(x,z),"faces"in z){var Y=z.faces;for(y(Array.isArray(Y)&&Y.length===6,"cube faces must be a length 6 array"),G=0;G<6;++G)y(typeof Y[G]=="object"&&!!Y[G],"invalid input for cube map face"),_e(L[G],x),Tt(L[G],Y[G])}else for(G=0;G<6;++G)Tt(L[G],z);else y.raise("invalid arguments to cube map");for(_e(x,L[0]),S.npotTextureCube||y(Kf(x.width)&&Kf(x.height),"your browser does not support non power or two texture dimensions"),K.genMipmaps?x.mipmask=(L[0].width<<1)-1:x.mipmask=L[0].mipmask,y.textureCube(x,K,L,S),x.internalformat=L[0].internalformat,O.width=L[0].width,O.height=L[0].height,Nr(x),G=0;G<6;++G)gr(L[G],Is+G);for(Er(K,hc),Lt(),V.profile&&(x.stats.size=Ds(x.internalformat,x.type,O.width,O.height,K.genMipmaps,!0)),O.format=pe[x.internalformat],O.type=Ce[x.type],O.mag=te[K.magFilter],O.min=Pe[K.minFilter],O.wrapS=ne[K.wrapS],O.wrapT=ne[K.wrapT],G=0;G<6;++G)_r(L[G]);return O}function F(z,I,M,k,_){y(!!I,"must specify image data"),y(typeof z=="number"&&z===(z|0)&&z>=0&&z<6,"invalid face");var P=M|0,G=k|0,K=_|0,Z=qe();return _e(Z,x),Z.width=0,Z.height=0,ge(Z,I),Z.width=Z.width||(x.width>>K)-P,Z.height=Z.height||(x.height>>K)-G,y(x.type===Z.type&&x.format===Z.format&&x.internalformat===Z.internalformat,"incompatible format for texture.subimage"),y(P>=0&&G>=0&&P+Z.width<=x.width&&G+Z.height<=x.height,"texture.subimage write out of bounds"),y(x.mipmask&1<<K,"missing mipmap data"),y(Z.data||Z.element||Z.needsCopy,"missing image data"),Nr(x),Ke(Z,Is+z,P,G,K),Lt(),ht(Z),O}function R(z){var I=z|0;if(I!==x.width){O.width=x.width=I,O.height=x.height=I,Nr(x);for(var M=0;M<6;++M)for(var k=0;x.mipmask>>k;++k)l.texImage2D(Is+M,k,x.format,I>>k,I>>k,0,x.format,x.type,null);return Lt(),V.profile&&(x.stats.size=Ds(x.internalformat,x.type,O.width,O.height,!1,!0)),O}}return O(A,W,$,Ne,dt,E),O.subimage=F,O.resize=R,O._reglType="textureCube",O._texture=x,V.profile&&(O.stats=x.stats),O.destroy=function(){x.decRef()},O}function fr(){for(var A=0;A<Or;++A)l.activeTexture(Ni+A),l.bindTexture(Yn,null),lr[A]=null;dn(Lr).forEach(Ve),U.cubeCount=0,U.textureCount=0}V.profile&&(U.getTotalTextureSize=function(){var A=0;return Object.keys(Lr).forEach(function(W){A+=Lr[W].stats.size}),A});function Qn(){for(var A=0;A<Or;++A){var W=lr[A];W&&(W.bindCount=0,W.unit=-1,lr[A]=null)}dn(Lr).forEach(function($){$.texture=l.createTexture(),l.bindTexture($.target,$.texture);for(var Ne=0;Ne<32;++Ne)if($.mipmask&1<<Ne)if($.target===Yn)l.texImage2D(Yn,Ne,$.internalformat,$.width>>Ne,$.height>>Ne,0,$.internalformat,$.type,null);else for(var dt=0;dt<6;++dt)l.texImage2D(Is+dt,Ne,$.internalformat,$.width>>Ne,$.height>>Ne,0,$.internalformat,$.type,null);Er($.texInfo,$.target)})}function na(){for(var A=0;A<Or;++A){var W=lr[A];W&&(W.bindCount=0,W.unit=-1,lr[A]=null),l.activeTexture(Ni+A),l.bindTexture(Yn,null),l.bindTexture(hc,null)}}return{create2D:pt,createCube:wt,clear:fr,getTexture:function(A){return null},restore:Qn,refresh:na}}var bo=36161,$s=32854,Eu=32855,Mu=36194,Au=33189,Tu=36168,Su=34041,ku=35907,Lu=34836,zu=34842,Cu=34843,Dn=[];Dn[$s]=2,Dn[Eu]=2,Dn[Mu]=2,Dn[Au]=2,Dn[Tu]=1,Dn[Su]=4,Dn[ku]=4,Dn[Lu]=16,Dn[zu]=8,Dn[Cu]=6;function Ru(l,b,S){return Dn[l]*b*S}var jg=function(l,b,S,j,Q){var U={rgba4:$s,rgb565:Mu,"rgb5 a1":Eu,depth:Au,stencil:Tu,"depth stencil":Su};b.ext_srgb&&(U.srgba=ku),b.ext_color_buffer_half_float&&(U.rgba16f=zu,U.rgb16f=Cu),b.webgl_color_buffer_float&&(U.rgba32f=Lu);var V=[];Object.keys(U).forEach(function(se){var be=U[se];V[be]=se});var ie=0,le={};function me(se){this.id=ie++,this.refCount=1,this.renderbuffer=se,this.format=$s,this.width=0,this.height=0,Q.profile&&(this.stats={size:0})}me.prototype.decRef=function(){--this.refCount<=0&&fe(this)};function fe(se){var be=se.renderbuffer;y(be,"must not double destroy renderbuffer"),l.bindRenderbuffer(bo,null),l.deleteRenderbuffer(be),se.renderbuffer=null,se.refCount=0,delete le[se.id],j.renderbufferCount--}function ye(se,be){var N=new me(l.createRenderbuffer());le[N.id]=N,j.renderbufferCount++;function X(Ce,te){var Pe=0,ne=0,we=$s;if(typeof Ce=="object"&&Ce){var re=Ce;if("shape"in re){var _e=re.shape;y(Array.isArray(_e)&&_e.length>=2,"invalid renderbuffer shape"),Pe=_e[0]|0,ne=_e[1]|0}else"radius"in re&&(Pe=ne=re.radius|0),"width"in re&&(Pe=re.width|0),"height"in re&&(ne=re.height|0);"format"in re&&(y.parameter(re.format,U,"invalid renderbuffer format"),we=U[re.format])}else typeof Ce=="number"?(Pe=Ce|0,typeof te=="number"?ne=te|0:ne=Pe):Ce?y.raise("invalid arguments to renderbuffer constructor"):Pe=ne=1;if(y(Pe>0&&ne>0&&Pe<=S.maxRenderbufferSize&&ne<=S.maxRenderbufferSize,"invalid renderbuffer size"),!(Pe===N.width&&ne===N.height&&we===N.format))return X.width=N.width=Pe,X.height=N.height=ne,N.format=we,l.bindRenderbuffer(bo,N.renderbuffer),l.renderbufferStorage(bo,we,Pe,ne),y(l.getError()===0,"invalid render buffer format"),Q.profile&&(N.stats.size=Ru(N.format,N.width,N.height)),X.format=V[N.format],X}function pe(Ce,te){var Pe=Ce|0,ne=te|0||Pe;return Pe===N.width&&ne===N.height||(y(Pe>0&&ne>0&&Pe<=S.maxRenderbufferSize&&ne<=S.maxRenderbufferSize,"invalid renderbuffer size"),X.width=N.width=Pe,X.height=N.height=ne,l.bindRenderbuffer(bo,N.renderbuffer),l.renderbufferStorage(bo,N.format,Pe,ne),y(l.getError()===0,"invalid render buffer format"),Q.profile&&(N.stats.size=Ru(N.format,N.width,N.height))),X}return X(se,be),X.resize=pe,X._reglType="renderbuffer",X._renderbuffer=N,Q.profile&&(X.stats=N.stats),X.destroy=function(){N.decRef()},X}Q.profile&&(j.getTotalRenderbufferSize=function(){var se=0;return Object.keys(le).forEach(function(be){se+=le[be].stats.size}),se});function Ae(){dn(le).forEach(function(se){se.renderbuffer=l.createRenderbuffer(),l.bindRenderbuffer(bo,se.renderbuffer),l.renderbufferStorage(bo,se.format,se.width,se.height)}),l.bindRenderbuffer(bo,null)}return{create:ye,clear:function(){dn(le).forEach(fe)},restore:Ae}},oo=36160,Lc=36161,Qo=3553,qs=34069,Iu=36064,Pu=36096,Ou=36128,Nu=33306,Fu=36053,Wg=36054,Vg=36055,Xg=36057,Yg=36061,Kg=36193,Qg=5121,Zg=5126,Gu=6407,Du=6408,Jg=6402,ex=[Gu,Du],zc=[];zc[Du]=4,zc[Gu]=3;var Hs=[];Hs[Qg]=1,Hs[Zg]=4,Hs[Kg]=2;var tx=32854,rx=32855,nx=36194,ox=33189,ax=36168,$u=34041,ix=35907,sx=34836,cx=34842,lx=34843,fx=[tx,rx,nx,ix,cx,lx,sx],$a={};$a[Fu]="complete",$a[Wg]="incomplete attachment",$a[Xg]="incomplete dimensions",$a[Vg]="incomplete, missing attachment",$a[Yg]="unsupported";function ux(l,b,S,j,Q,U){var V={cur:null,next:null,dirty:!1,setFBO:null},ie=["rgba"],le=["rgba4","rgb565","rgb5 a1"];b.ext_srgb&&le.push("srgba"),b.ext_color_buffer_half_float&&le.push("rgba16f","rgb16f"),b.webgl_color_buffer_float&&le.push("rgba32f");var me=["uint8"];b.oes_texture_half_float&&me.push("half float","float16"),b.oes_texture_float&&me.push("float","float32");function fe(Te,ge,ee){this.target=Te,this.texture=ge,this.renderbuffer=ee;var Ke=0,at=0;ge?(Ke=ge.width,at=ge.height):ee&&(Ke=ee.width,at=ee.height),this.width=Ke,this.height=at}function ye(Te){Te&&(Te.texture&&Te.texture._texture.decRef(),Te.renderbuffer&&Te.renderbuffer._renderbuffer.decRef())}function Ae(Te,ge,ee){if(Te)if(Te.texture){var Ke=Te.texture._texture,at=Math.max(1,Ke.width),qe=Math.max(1,Ke.height);y(at===ge&&qe===ee,"inconsistent width/height for supplied texture"),Ke.refCount+=1}else{var ht=Te.renderbuffer._renderbuffer;y(ht.width===ge&&ht.height===ee,"inconsistent width/height for renderbuffer"),ht.refCount+=1}}function se(Te,ge){ge&&(ge.texture?l.framebufferTexture2D(oo,Te,ge.target,ge.texture._texture.texture,0):l.framebufferRenderbuffer(oo,Te,Lc,ge.renderbuffer._renderbuffer.renderbuffer))}function be(Te){var ge=Qo,ee=null,Ke=null,at=Te;typeof Te=="object"&&(at=Te.data,"target"in Te&&(ge=Te.target|0)),y.type(at,"function","invalid attachment data");var qe=at._reglType;return qe==="texture2d"?(ee=at,y(ge===Qo)):qe==="textureCube"?(ee=at,y(ge>=qs&&ge<qs+6,"invalid cube map target")):qe==="renderbuffer"?(Ke=at,ge=Lc):y.raise("invalid regl object for attachment"),new fe(ge,ee,Ke)}function N(Te,ge,ee,Ke,at){if(ee){var qe=j.create2D({width:Te,height:ge,format:Ke,type:at});return qe._texture.refCount=0,new fe(Qo,qe,null)}else{var ht=Q.create({width:Te,height:ge,format:Ke});return ht._renderbuffer.refCount=0,new fe(Lc,null,ht)}}function X(Te){return Te&&(Te.texture||Te.renderbuffer)}function pe(Te,ge,ee){Te&&(Te.texture?Te.texture.resize(ge,ee):Te.renderbuffer&&Te.renderbuffer.resize(ge,ee),Te.width=ge,Te.height=ee)}var Ce=0,te={};function Pe(){this.id=Ce++,te[this.id]=this,this.framebuffer=l.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ne(Te){Te.colorAttachments.forEach(ye),ye(Te.depthAttachment),ye(Te.stencilAttachment),ye(Te.depthStencilAttachment)}function we(Te){var ge=Te.framebuffer;y(ge,"must not double destroy framebuffer"),l.deleteFramebuffer(ge),Te.framebuffer=null,U.framebufferCount--,delete te[Te.id]}function re(Te){var ge;l.bindFramebuffer(oo,Te.framebuffer);var ee=Te.colorAttachments;for(ge=0;ge<ee.length;++ge)se(Iu+ge,ee[ge]);for(ge=ee.length;ge<S.maxColorAttachments;++ge)l.framebufferTexture2D(oo,Iu+ge,Qo,null,0);l.framebufferTexture2D(oo,Nu,Qo,null,0),l.framebufferTexture2D(oo,Pu,Qo,null,0),l.framebufferTexture2D(oo,Ou,Qo,null,0),se(Pu,Te.depthAttachment),se(Ou,Te.stencilAttachment),se(Nu,Te.depthStencilAttachment);var Ke=l.checkFramebufferStatus(oo);!l.isContextLost()&&Ke!==Fu&&y.raise("framebuffer configuration not supported, status = "+$a[Ke]),l.bindFramebuffer(oo,V.next?V.next.framebuffer:null),V.cur=V.next,l.getError()}function _e(Te,ge){var ee=new Pe;U.framebufferCount++;function Ke(qe,ht){var et;y(V.next!==ee,"can not update framebuffer which is currently in use");var lt=0,Tt=0,gr=!0,Ar=!0,mt=null,_r=!0,Wt="rgba",xr="uint8",Er=1,Mr=null,Lr=null,Or=null,lr=!1;if(typeof qe=="number")lt=qe|0,Tt=ht|0||lt;else if(!qe)lt=Tt=1;else{y.type(qe,"object","invalid arguments for framebuffer");var it=qe;if("shape"in it){var Nr=it.shape;y(Array.isArray(Nr)&&Nr.length>=2,"invalid shape for framebuffer"),lt=Nr[0],Tt=Nr[1]}else"radius"in it&&(lt=Tt=it.radius),"width"in it&&(lt=it.width),"height"in it&&(Tt=it.height);("color"in it||"colors"in it)&&(mt=it.color||it.colors,Array.isArray(mt)&&y(mt.length===1||b.webgl_draw_buffers,"multiple render targets not supported")),mt||("colorCount"in it&&(Er=it.colorCount|0,y(Er>0,"invalid color buffer count")),"colorTexture"in it&&(_r=!!it.colorTexture,Wt="rgba4"),"colorType"in it&&(xr=it.colorType,_r?(y(b.oes_texture_float||!(xr==="float"||xr==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),y(b.oes_texture_half_float||!(xr==="half float"||xr==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):xr==="half float"||xr==="float16"?(y(b.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Wt="rgba16f"):(xr==="float"||xr==="float32")&&(y(b.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Wt="rgba32f"),y.oneOf(xr,me,"invalid color type")),"colorFormat"in it&&(Wt=it.colorFormat,ie.indexOf(Wt)>=0?_r=!0:le.indexOf(Wt)>=0?_r=!1:_r?y.oneOf(it.colorFormat,ie,"invalid color format for texture"):y.oneOf(it.colorFormat,le,"invalid color format for renderbuffer"))),("depthTexture"in it||"depthStencilTexture"in it)&&(lr=!!(it.depthTexture||it.depthStencilTexture),y(!lr||b.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in it&&(typeof it.depth=="boolean"?gr=it.depth:(Mr=it.depth,Ar=!1)),"stencil"in it&&(typeof it.stencil=="boolean"?Ar=it.stencil:(Lr=it.stencil,gr=!1)),"depthStencil"in it&&(typeof it.depthStencil=="boolean"?gr=Ar=it.depthStencil:(Or=it.depthStencil,gr=!1,Ar=!1))}var Lt=null,Ve=null,pt=null,wt=null;if(Array.isArray(mt))Lt=mt.map(be);else if(mt)Lt=[be(mt)];else for(Lt=new Array(Er),et=0;et<Er;++et)Lt[et]=N(lt,Tt,_r,Wt,xr);y(b.webgl_draw_buffers||Lt.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),y(Lt.length<=S.maxColorAttachments,"too many color attachments, not supported"),lt=lt||Lt[0].width,Tt=Tt||Lt[0].height,Mr?Ve=be(Mr):gr&&!Ar&&(Ve=N(lt,Tt,lr,"depth","uint32")),Lr?pt=be(Lr):Ar&&!gr&&(pt=N(lt,Tt,!1,"stencil","uint8")),Or?wt=be(Or):!Mr&&!Lr&&Ar&&gr&&(wt=N(lt,Tt,lr,"depth stencil","depth stencil")),y(!!Mr+!!Lr+!!Or<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var fr=null;for(et=0;et<Lt.length;++et)if(Ae(Lt[et],lt,Tt),y(!Lt[et]||Lt[et].texture&&ex.indexOf(Lt[et].texture._texture.format)>=0||Lt[et].renderbuffer&&fx.indexOf(Lt[et].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+et+" is invalid"),Lt[et]&&Lt[et].texture){var Qn=zc[Lt[et].texture._texture.format]*Hs[Lt[et].texture._texture.type];fr===null?fr=Qn:y(fr===Qn,"all color attachments much have the same number of bits per pixel.")}return Ae(Ve,lt,Tt),y(!Ve||Ve.texture&&Ve.texture._texture.format===Jg||Ve.renderbuffer&&Ve.renderbuffer._renderbuffer.format===ox,"invalid depth attachment for framebuffer object"),Ae(pt,lt,Tt),y(!pt||pt.renderbuffer&&pt.renderbuffer._renderbuffer.format===ax,"invalid stencil attachment for framebuffer object"),Ae(wt,lt,Tt),y(!wt||wt.texture&&wt.texture._texture.format===$u||wt.renderbuffer&&wt.renderbuffer._renderbuffer.format===$u,"invalid depth-stencil attachment for framebuffer object"),ne(ee),ee.width=lt,ee.height=Tt,ee.colorAttachments=Lt,ee.depthAttachment=Ve,ee.stencilAttachment=pt,ee.depthStencilAttachment=wt,Ke.color=Lt.map(X),Ke.depth=X(Ve),Ke.stencil=X(pt),Ke.depthStencil=X(wt),Ke.width=ee.width,Ke.height=ee.height,re(ee),Ke}function at(qe,ht){y(V.next!==ee,"can not resize a framebuffer which is currently in use");var et=Math.max(qe|0,1),lt=Math.max(ht|0||et,1);if(et===ee.width&&lt===ee.height)return Ke;for(var Tt=ee.colorAttachments,gr=0;gr<Tt.length;++gr)pe(Tt[gr],et,lt);return pe(ee.depthAttachment,et,lt),pe(ee.stencilAttachment,et,lt),pe(ee.depthStencilAttachment,et,lt),ee.width=Ke.width=et,ee.height=Ke.height=lt,re(ee),Ke}return Ke(Te,ge),t(Ke,{resize:at,_reglType:"framebuffer",_framebuffer:ee,destroy:function(){we(ee),ne(ee)},use:function(qe){V.setFBO({framebuffer:Ke},qe)}})}function We(Te){var ge=Array(6);function ee(at){var qe;y(ge.indexOf(V.next)<0,"can not update framebuffer which is currently in use");var ht={color:null},et=0,lt=null,Tt="rgba",gr="uint8",Ar=1;if(typeof at=="number")et=at|0;else if(!at)et=1;else{y.type(at,"object","invalid arguments for framebuffer");var mt=at;if("shape"in mt){var _r=mt.shape;y(Array.isArray(_r)&&_r.length>=2,"invalid shape for framebuffer"),y(_r[0]===_r[1],"cube framebuffer must be square"),et=_r[0]}else"radius"in mt&&(et=mt.radius|0),"width"in mt?(et=mt.width|0,"height"in mt&&y(mt.height===et,"must be square")):"height"in mt&&(et=mt.height|0);("color"in mt||"colors"in mt)&&(lt=mt.color||mt.colors,Array.isArray(lt)&&y(lt.length===1||b.webgl_draw_buffers,"multiple render targets not supported")),lt||("colorCount"in mt&&(Ar=mt.colorCount|0,y(Ar>0,"invalid color buffer count")),"colorType"in mt&&(y.oneOf(mt.colorType,me,"invalid color type"),gr=mt.colorType),"colorFormat"in mt&&(Tt=mt.colorFormat,y.oneOf(mt.colorFormat,ie,"invalid color format for texture"))),"depth"in mt&&(ht.depth=mt.depth),"stencil"in mt&&(ht.stencil=mt.stencil),"depthStencil"in mt&&(ht.depthStencil=mt.depthStencil)}var Wt;if(lt)if(Array.isArray(lt))for(Wt=[],qe=0;qe<lt.length;++qe)Wt[qe]=lt[qe];else Wt=[lt];else{Wt=Array(Ar);var xr={radius:et,format:Tt,type:gr};for(qe=0;qe<Ar;++qe)Wt[qe]=j.createCube(xr)}for(ht.color=Array(Wt.length),qe=0;qe<Wt.length;++qe){var Er=Wt[qe];y(typeof Er=="function"&&Er._reglType==="textureCube","invalid cube map"),et=et||Er.width,y(Er.width===et&&Er.height===et,"invalid cube map shape"),ht.color[qe]={target:qs,data:Wt[qe]}}for(qe=0;qe<6;++qe){for(var Mr=0;Mr<Wt.length;++Mr)ht.color[Mr].target=qs+qe;qe>0&&(ht.depth=ge[0].depth,ht.stencil=ge[0].stencil,ht.depthStencil=ge[0].depthStencil),ge[qe]?ge[qe](ht):ge[qe]=_e(ht)}return t(ee,{width:et,height:et,color:Wt})}function Ke(at){var qe,ht=at|0;if(y(ht>0&&ht<=S.maxCubeMapSize,"invalid radius for cube fbo"),ht===ee.width)return ee;var et=ee.color;for(qe=0;qe<et.length;++qe)et[qe].resize(ht);for(qe=0;qe<6;++qe)ge[qe].resize(ht);return ee.width=ee.height=ht,ee}return ee(Te),t(ee,{faces:ge,resize:Ke,_reglType:"framebufferCube",destroy:function(){ge.forEach(function(at){at.destroy()})}})}function Ze(){V.cur=null,V.next=null,V.dirty=!0,dn(te).forEach(function(Te){Te.framebuffer=l.createFramebuffer(),re(Te)})}return t(V,{getFramebuffer:function(Te){if(typeof Te=="function"&&Te._reglType==="framebuffer"){var ge=Te._framebuffer;if(ge instanceof Pe)return ge}return null},create:_e,createCube:We,clear:function(){dn(te).forEach(we)},restore:Ze})}var hx=5126,qu=34962;function Cc(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=hx,this.offset=0,this.stride=0,this.divisor=0}function dx(l,b,S,j,Q){for(var U=S.maxAttributes,V=new Array(U),ie=0;ie<U;++ie)V[ie]=new Cc;var le=0,me={},fe={Record:Cc,scope:{},state:V,currentVAO:null,targetVAO:null,restore:Ae()?te:function(){},createVAO:Pe,getVAO:be,destroyBuffer:ye,setVAO:Ae()?N:X,clear:Ae()?pe:function(){}};function ye(ne){for(var we=0;we<V.length;++we){var re=V[we];re.buffer===ne&&(l.disableVertexAttribArray(we),re.buffer=null)}}function Ae(){return b.oes_vertex_array_object}function se(){return b.angle_instanced_arrays}function be(ne){return typeof ne=="function"&&ne._vao?ne._vao:null}function N(ne){if(ne!==fe.currentVAO){var we=Ae();ne?we.bindVertexArrayOES(ne.vao):we.bindVertexArrayOES(null),fe.currentVAO=ne}}function X(ne){if(ne!==fe.currentVAO){if(ne)ne.bindAttrs();else for(var we=se(),re=0;re<V.length;++re){var _e=V[re];_e.buffer?(l.enableVertexAttribArray(re),l.vertexAttribPointer(re,_e.size,_e.type,_e.normalized,_e.stride,_e.offfset),we&&_e.divisor&&we.vertexAttribDivisorANGLE(re,_e.divisor)):(l.disableVertexAttribArray(re),l.vertexAttrib4f(re,_e.x,_e.y,_e.z,_e.w))}fe.currentVAO=ne}}function pe(){dn(me).forEach(function(ne){ne.destroy()})}function Ce(){this.id=++le,this.attributes=[];var ne=Ae();ne?this.vao=ne.createVertexArrayOES():this.vao=null,me[this.id]=this,this.buffers=[]}Ce.prototype.bindAttrs=function(){for(var ne=se(),we=this.attributes,re=0;re<we.length;++re){var _e=we[re];_e.buffer?(l.enableVertexAttribArray(re),l.bindBuffer(qu,_e.buffer.buffer),l.vertexAttribPointer(re,_e.size,_e.type,_e.normalized,_e.stride,_e.offset),ne&&_e.divisor&&ne.vertexAttribDivisorANGLE(re,_e.divisor)):(l.disableVertexAttribArray(re),l.vertexAttrib4f(re,_e.x,_e.y,_e.z,_e.w))}for(var We=we.length;We<U;++We)l.disableVertexAttribArray(We)},Ce.prototype.refresh=function(){var ne=Ae();ne&&(ne.bindVertexArrayOES(this.vao),this.bindAttrs(),fe.currentVAO=this)},Ce.prototype.destroy=function(){if(this.vao){var ne=Ae();this===fe.currentVAO&&(fe.currentVAO=null,ne.bindVertexArrayOES(null)),ne.deleteVertexArrayOES(this.vao),this.vao=null}me[this.id]&&(delete me[this.id],j.vaoCount-=1)};function te(){var ne=Ae();ne&&dn(me).forEach(function(we){we.refresh()})}function Pe(ne){var we=new Ce;j.vaoCount+=1;function re(_e){y(Array.isArray(_e),"arguments to vertex array constructor must be an array"),y(_e.length<U,"too many attributes"),y(_e.length>0,"must specify at least one attribute");var We={},Ze=we.attributes;Ze.length=_e.length;for(var Te=0;Te<_e.length;++Te){var ge=_e[Te],ee=Ze[Te]=new Cc,Ke=ge.data||ge;if(Array.isArray(Ke)||e(Ke)||Gn(Ke)){var at;we.buffers[Te]&&(at=we.buffers[Te],e(Ke)&&at._buffer.byteLength>=Ke.byteLength?at.subdata(Ke):(at.destroy(),we.buffers[Te]=null)),we.buffers[Te]||(at=we.buffers[Te]=Q.create(ge,qu,!1,!0)),ee.buffer=Q.getBuffer(at),ee.size=ee.buffer.dimension|0,ee.normalized=!1,ee.type=ee.buffer.dtype,ee.offset=0,ee.stride=0,ee.divisor=0,ee.state=1,We[Te]=1}else Q.getBuffer(ge)?(ee.buffer=Q.getBuffer(ge),ee.size=ee.buffer.dimension|0,ee.normalized=!1,ee.type=ee.buffer.dtype,ee.offset=0,ee.stride=0,ee.divisor=0,ee.state=1):Q.getBuffer(ge.buffer)?(ee.buffer=Q.getBuffer(ge.buffer),ee.size=(+ge.size||ee.buffer.dimension)|0,ee.normalized=!!ge.normalized||!1,"type"in ge?(y.parameter(ge.type,Vo,"invalid buffer type"),ee.type=Vo[ge.type]):ee.type=ee.buffer.dtype,ee.offset=(ge.offset||0)|0,ee.stride=(ge.stride||0)|0,ee.divisor=(ge.divisor||0)|0,ee.state=1,y(ee.size>=1&&ee.size<=4,"size must be between 1 and 4"),y(ee.offset>=0,"invalid offset"),y(ee.stride>=0&&ee.stride<=255,"stride must be between 0 and 255"),y(ee.divisor>=0,"divisor must be positive"),y(!ee.divisor||!!b.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in ge?(y(Te>0,"first attribute must not be a constant"),ee.x=+ge.x||0,ee.y=+ge.y||0,ee.z=+ge.z||0,ee.w=+ge.w||0,ee.state=2):y(!1,"invalid attribute spec for location "+Te)}for(var qe=0;qe<we.buffers.length;++qe)!We[qe]&&we.buffers[qe]&&(we.buffers[qe].destroy(),we.buffers[qe]=null);return we.refresh(),re}return re.destroy=function(){for(var _e=0;_e<we.buffers.length;++_e)we.buffers[_e]&&we.buffers[_e].destroy();we.buffers.length=0,we.destroy()},re._vao=we,re._reglType="vao",re(ne)}return fe}var Hu=35632,px=35633,mx=35718,vx=35721;function gx(l,b,S,j){var Q={},U={};function V(N,X,pe,Ce){this.name=N,this.id=X,this.location=pe,this.info=Ce}function ie(N,X){for(var pe=0;pe<N.length;++pe)if(N[pe].id===X.id){N[pe].location=X.location;return}N.push(X)}function le(N,X,pe){var Ce=N===Hu?Q:U,te=Ce[X];if(!te){var Pe=b.str(X);te=l.createShader(N),l.shaderSource(te,Pe),l.compileShader(te),y.shaderError(l,te,Pe,N,pe),Ce[X]=te}return te}var me={},fe=[],ye=0;function Ae(N,X){this.id=ye++,this.fragId=N,this.vertId=X,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,j.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function se(N,X,pe){var Ce,te,Pe=le(Hu,N.fragId),ne=le(px,N.vertId),we=N.program=l.createProgram();if(l.attachShader(we,Pe),l.attachShader(we,ne),pe)for(Ce=0;Ce<pe.length;++Ce){var re=pe[Ce];l.bindAttribLocation(we,re[0],re[1])}l.linkProgram(we),y.linkError(l,we,b.str(N.fragId),b.str(N.vertId),X);var _e=l.getProgramParameter(we,mx);j.profile&&(N.stats.uniformsCount=_e);var We=N.uniforms;for(Ce=0;Ce<_e;++Ce)if(te=l.getActiveUniform(we,Ce),te)if(te.size>1)for(var Ze=0;Ze<te.size;++Ze){var Te=te.name.replace("[0]","["+Ze+"]");ie(We,new V(Te,b.id(Te),l.getUniformLocation(we,Te),te))}else ie(We,new V(te.name,b.id(te.name),l.getUniformLocation(we,te.name),te));var ge=l.getProgramParameter(we,vx);j.profile&&(N.stats.attributesCount=ge);var ee=N.attributes;for(Ce=0;Ce<ge;++Ce)te=l.getActiveAttrib(we,Ce),te&&ie(ee,new V(te.name,b.id(te.name),l.getAttribLocation(we,te.name),te))}j.profile&&(S.getMaxUniformsCount=function(){var N=0;return fe.forEach(function(X){X.stats.uniformsCount>N&&(N=X.stats.uniformsCount)}),N},S.getMaxAttributesCount=function(){var N=0;return fe.forEach(function(X){X.stats.attributesCount>N&&(N=X.stats.attributesCount)}),N});function be(){Q={},U={};for(var N=0;N<fe.length;++N)se(fe[N],null,fe[N].attributes.map(function(X){return[X.location,X.name]}))}return{clear:function(){var N=l.deleteShader.bind(l);dn(Q).forEach(N),Q={},dn(U).forEach(N),U={},fe.forEach(function(X){l.deleteProgram(X.program)}),fe.length=0,me={},S.shaderCount=0},program:function(N,X,pe,Ce){y.command(N>=0,"missing vertex shader",pe),y.command(X>=0,"missing fragment shader",pe);var te=me[X];te||(te=me[X]={});var Pe=te[N];if(Pe&&(Pe.refCount++,!Ce))return Pe;var ne=new Ae(X,N);return S.shaderCount++,se(ne,pe,Ce),Pe||(te[N]=ne),fe.push(ne),t(ne,{destroy:function(){if(ne.refCount--,ne.refCount<=0){l.deleteProgram(ne.program);var we=fe.indexOf(ne);fe.splice(we,1),S.shaderCount--}te[ne.vertId].refCount<=0&&(l.deleteShader(U[ne.vertId]),delete U[ne.vertId],delete me[ne.fragId][ne.vertId]),Object.keys(me[ne.fragId]).length||(l.deleteShader(Q[ne.fragId]),delete Q[ne.fragId],delete me[ne.fragId])}})},restore:be,shader:le,frag:-1,vert:-1}}var xx=6408,Fi=5121,yx=3333,Us=5126;function bx(l,b,S,j,Q,U,V){function ie(fe){var ye;b.next===null?(y(Q.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),ye=Fi):(y(b.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),ye=b.next.colorAttachments[0].texture._texture.type,U.oes_texture_float?(y(ye===Fi||ye===Us,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),ye===Us&&y(V.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):y(ye===Fi,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Ae=0,se=0,be=j.framebufferWidth,N=j.framebufferHeight,X=null;e(fe)?X=fe:fe&&(y.type(fe,"object","invalid arguments to regl.read()"),Ae=fe.x|0,se=fe.y|0,y(Ae>=0&&Ae<j.framebufferWidth,"invalid x offset for regl.read"),y(se>=0&&se<j.framebufferHeight,"invalid y offset for regl.read"),be=(fe.width||j.framebufferWidth-Ae)|0,N=(fe.height||j.framebufferHeight-se)|0,X=fe.data||null),X&&(ye===Fi?y(X instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):ye===Us&&y(X instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),y(be>0&&be+Ae<=j.framebufferWidth,"invalid width for read pixels"),y(N>0&&N+se<=j.framebufferHeight,"invalid height for read pixels"),S();var pe=be*N*4;return X||(ye===Fi?X=new Uint8Array(pe):ye===Us&&(X=X||new Float32Array(pe))),y.isTypedArray(X,"data buffer for regl.read() must be a typedarray"),y(X.byteLength>=pe,"data buffer for regl.read() too small"),l.pixelStorei(yx,4),l.readPixels(Ae,se,be,N,xx,ye,X),X}function le(fe){var ye;return b.setFBO({framebuffer:fe.framebuffer},function(){ye=ie(fe)}),ye}function me(fe){return!fe||!("framebuffer"in fe)?ie(fe):le(fe)}return me}function qa(l){return Array.prototype.slice.call(l)}function Ha(l){return qa(l).join("")}function wx(){var l=0,b=[],S=[];function j(ye){for(var Ae=0;Ae<S.length;++Ae)if(S[Ae]===ye)return b[Ae];var se="g"+l++;return b.push(se),S.push(ye),se}function Q(){var ye=[];function Ae(){ye.push.apply(ye,qa(arguments))}var se=[];function be(){var N="v"+l++;return se.push(N),arguments.length>0&&(ye.push(N,"="),ye.push.apply(ye,qa(arguments)),ye.push(";")),N}return t(Ae,{def:be,toString:function(){return Ha([se.length>0?"var "+se.join(",")+";":"",Ha(ye)])}})}function U(){var ye=Q(),Ae=Q(),se=ye.toString,be=Ae.toString;function N(X,pe){Ae(X,pe,"=",ye.def(X,pe),";")}return t(function(){ye.apply(ye,qa(arguments))},{def:ye.def,entry:ye,exit:Ae,save:N,set:function(X,pe,Ce){N(X,pe),ye(X,pe,"=",Ce,";")},toString:function(){return se()+be()}})}function V(){var ye=Ha(arguments),Ae=U(),se=U(),be=Ae.toString,N=se.toString;return t(Ae,{then:function(){return Ae.apply(Ae,qa(arguments)),this},else:function(){return se.apply(se,qa(arguments)),this},toString:function(){var X=N();return X&&(X="else{"+X+"}"),Ha(["if(",ye,"){",be(),"}",X])}})}var ie=Q(),le={};function me(ye,Ae){var se=[];function be(){var te="a"+se.length;return se.push(te),te}Ae=Ae||0;for(var N=0;N<Ae;++N)be();var X=U(),pe=X.toString,Ce=le[ye]=t(X,{arg:be,toString:function(){return Ha(["function(",se.join(),"){",pe(),"}"])}});return Ce}function fe(){var ye=['"use strict";',ie,"return {"];Object.keys(le).forEach(function(be){ye.push('"',be,'":',le[be].toString(),",")}),ye.push("}");var Ae=Ha(ye).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),se=Function.apply(null,b.concat(Ae));return se.apply(null,S)}return{global:ie,link:j,block:Q,proc:me,scope:U,cond:V,compile:fe}}var Ua="xyzw".split(""),Uu=5121,Ba=1,Rc=2,Ic=0,Pc=1,Oc=2,Nc=3,Bs=4,Bu=5,ju=6,Wu="dither",Vu="blend.enable",Xu="blend.color",Fc="blend.equation",Gc="blend.func",Yu="depth.enable",Ku="depth.func",Qu="depth.range",Zu="depth.mask",Dc="colorMask",Ju="cull.enable",eh="cull.face",$c="frontFace",qc="lineWidth",th="polygonOffset.enable",Hc="polygonOffset.offset",rh="sample.alpha",nh="sample.enable",Uc="sample.coverage",oh="stencil.enable",ah="stencil.mask",Bc="stencil.func",jc="stencil.opFront",Gi="stencil.opBack",ih="scissor.enable",js="scissor.box",ao="viewport",Di="profile",Zo="framebuffer",$i="vert",qi="frag",Jo="elements",ea="primitive",ta="count",Ws="offset",Vs="instances",Hi="vao",Wc="Width",Vc="Height",ja=Zo+Wc,Wa=Zo+Vc,_x=ao+Wc,Ex=ao+Vc,sh="drawingBuffer",ch=sh+Wc,lh=sh+Vc,Mx=[Gc,Fc,Bc,jc,Gi,Uc,ao,js,Hc],Va=34962,Ax=34963,Tx=35632,Sx=35633,fh=3553,kx=34067,Lx=2884,zx=3042,Cx=3024,Rx=2960,Ix=2929,Px=3089,Ox=32823,Nx=32926,Fx=32928,Xc=5126,Xs=35664,Ys=35665,Ks=35666,Yc=5124,Qs=35667,Zs=35668,Js=35669,Kc=35670,e0=35671,t0=35672,r0=35673,Ui=35674,Bi=35675,ji=35676,Wi=35678,Vi=35680,uh=4,Xi=1028,ra=1029,hh=2304,Qc=2305,Gx=32775,Dx=32776,$x=519,wo=7680,dh=0,ph=1,mh=32774,qx=513,vh=36160,Hx=36064,Kn={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},gh=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Xa={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},_o={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},xh={frag:Tx,vert:Sx},Zc={cw:hh,ccw:Qc};function n0(l){return Array.isArray(l)||e(l)||Gn(l)}function yh(l){return l.sort(function(b,S){return b===ao?-1:S===ao?1:b<S?-1:1})}function Vr(l,b,S,j){this.thisDep=l,this.contextDep=b,this.propDep=S,this.append=j}function Eo(l){return l&&!(l.thisDep||l.contextDep||l.propDep)}function vr(l){return new Vr(!1,!1,!1,l)}function nn(l,b){var S=l.type;if(S===Ic){var j=l.data.length;return new Vr(!0,j>=1,j>=2,b)}else if(S===Bs){var Q=l.data;return new Vr(Q.thisDep,Q.contextDep,Q.propDep,b)}else{if(S===Bu)return new Vr(!1,!1,!1,b);if(S===ju){for(var U=!1,V=!1,ie=!1,le=0;le<l.data.length;++le){var me=l.data[le];if(me.type===Pc)ie=!0;else if(me.type===Oc)V=!0;else if(me.type===Nc)U=!0;else if(me.type===Ic){U=!0;var fe=me.data;fe>=1&&(V=!0),fe>=2&&(ie=!0)}else me.type===Bs&&(U=U||me.data.thisDep,V=V||me.data.contextDep,ie=ie||me.data.propDep)}return new Vr(U,V,ie,b)}else return new Vr(S===Nc,S===Oc,S===Pc,b)}}var bh=new Vr(!1,!1,!1,function(){});function Ux(l,b,S,j,Q,U,V,ie,le,me,fe,ye,Ae,se,be){var N=me.Record,X={add:32774,subtract:32778,"reverse subtract":32779};S.ext_blend_minmax&&(X.min=Gx,X.max=Dx);var pe=S.angle_instanced_arrays,Ce=S.webgl_draw_buffers,te={dirty:!0,profile:be.profile},Pe={},ne=[],we={},re={};function _e(E){return E.replace(".","_")}function We(E,x,L){var O=_e(E);ne.push(E),Pe[O]=te[O]=!!L,we[O]=x}function Ze(E,x,L){var O=_e(E);ne.push(E),Array.isArray(L)?(te[O]=L.slice(),Pe[O]=L.slice()):te[O]=Pe[O]=L,re[O]=x}We(Wu,Cx),We(Vu,zx),Ze(Xu,"blendColor",[0,0,0,0]),Ze(Fc,"blendEquationSeparate",[mh,mh]),Ze(Gc,"blendFuncSeparate",[ph,dh,ph,dh]),We(Yu,Ix,!0),Ze(Ku,"depthFunc",qx),Ze(Qu,"depthRange",[0,1]),Ze(Zu,"depthMask",!0),Ze(Dc,Dc,[!0,!0,!0,!0]),We(Ju,Lx),Ze(eh,"cullFace",ra),Ze($c,$c,Qc),Ze(qc,qc,1),We(th,Ox),Ze(Hc,"polygonOffset",[0,0]),We(rh,Nx),We(nh,Fx),Ze(Uc,"sampleCoverage",[1,!1]),We(oh,Rx),Ze(ah,"stencilMask",-1),Ze(Bc,"stencilFunc",[$x,0,-1]),Ze(jc,"stencilOpSeparate",[Xi,wo,wo,wo]),Ze(Gi,"stencilOpSeparate",[ra,wo,wo,wo]),We(ih,Px),Ze(js,"scissor",[0,0,l.drawingBufferWidth,l.drawingBufferHeight]),Ze(ao,ao,[0,0,l.drawingBufferWidth,l.drawingBufferHeight]);var Te={gl:l,context:Ae,strings:b,next:Pe,current:te,draw:ye,elements:U,buffer:Q,shader:fe,attributes:me.state,vao:me,uniforms:le,framebuffer:ie,extensions:S,timer:se,isBufferArgs:n0},ge={primTypes:Ia,compareFuncs:Xa,blendFuncs:Kn,blendEquations:X,stencilOps:_o,glTypes:Vo,orientationType:Zc};y.optional(function(){Te.isArrayLike=cr}),Ce&&(ge.backBuffer=[ra],ge.drawBuffer=$e(j.maxDrawbuffers,function(E){return E===0?[0]:$e(E,function(x){return Hx+x})}));var ee=0;function Ke(){var E=wx(),x=E.link,L=E.global;E.id=ee++,E.batchId="0";var O=x(Te),F=E.shared={props:"a0"};Object.keys(Te).forEach(function(k){F[k]=L.def(O,".",k)}),y.optional(function(){E.CHECK=x(y),E.commandStr=y.guessCommand(),E.command=x(E.commandStr),E.assert=function(k,_,P){k("if(!(",_,"))",this.CHECK,".commandRaise(",x(P),",",this.command,");")},ge.invalidBlendCombinations=gh});var R=E.next={},z=E.current={};Object.keys(re).forEach(function(k){Array.isArray(te[k])&&(R[k]=L.def(F.next,".",k),z[k]=L.def(F.current,".",k))});var I=E.constants={};Object.keys(ge).forEach(function(k){I[k]=L.def(JSON.stringify(ge[k]))}),E.invoke=function(k,_){switch(_.type){case Ic:var P=["this",F.context,F.props,E.batchId];return k.def(x(_.data),".call(",P.slice(0,Math.max(_.data.length+1,4)),")");case Pc:return k.def(F.props,_.data);case Oc:return k.def(F.context,_.data);case Nc:return k.def("this",_.data);case Bs:return _.data.append(E,k),_.data.ref;case Bu:return _.data.toString();case ju:return _.data.map(function(G){return E.invoke(k,G)})}},E.attribCache={};var M={};return E.scopeAttrib=function(k){var _=b.id(k);if(_ in M)return M[_];var P=me.scope[_];P||(P=me.scope[_]=new N);var G=M[_]=x(P);return G},E}function at(E){var x=E.static,L=E.dynamic,O;if(Di in x){var F=!!x[Di];O=vr(function(z,I){return F}),O.enable=F}else if(Di in L){var R=L[Di];O=nn(R,function(z,I){return z.invoke(I,R)})}return O}function qe(E,x){var L=E.static,O=E.dynamic;if(Zo in L){var F=L[Zo];return F?(F=ie.getFramebuffer(F),y.command(F,"invalid framebuffer object"),vr(function(z,I){var M=z.link(F),k=z.shared;I.set(k.framebuffer,".next",M);var _=k.context;return I.set(_,"."+ja,M+".width"),I.set(_,"."+Wa,M+".height"),M})):vr(function(z,I){var M=z.shared;I.set(M.framebuffer,".next","null");var k=M.context;return I.set(k,"."+ja,k+"."+ch),I.set(k,"."+Wa,k+"."+lh),"null"})}else if(Zo in O){var R=O[Zo];return nn(R,function(z,I){var M=z.invoke(I,R),k=z.shared,_=k.framebuffer,P=I.def(_,".getFramebuffer(",M,")");y.optional(function(){z.assert(I,"!"+M+"||"+P,"invalid framebuffer object")}),I.set(_,".next",P);var G=k.context;return I.set(G,"."+ja,P+"?"+P+".width:"+G+"."+ch),I.set(G,"."+Wa,P+"?"+P+".height:"+G+"."+lh),P})}else return null}function ht(E,x,L){var O=E.static,F=E.dynamic;function R(M){if(M in O){var k=O[M];y.commandType(k,"object","invalid "+M,L.commandStr);var _=!0,P=k.x|0,G=k.y|0,K,Z;return"width"in k?(K=k.width|0,y.command(K>=0,"invalid "+M,L.commandStr)):_=!1,"height"in k?(Z=k.height|0,y.command(Z>=0,"invalid "+M,L.commandStr)):_=!1,new Vr(!_&&x&&x.thisDep,!_&&x&&x.contextDep,!_&&x&&x.propDep,function(je,st){var He=je.shared.context,Xe=K;"width"in k||(Xe=st.def(He,".",ja,"-",P));var tt=Z;return"height"in k||(tt=st.def(He,".",Wa,"-",G)),[P,G,Xe,tt]})}else if(M in F){var Y=F[M],he=nn(Y,function(je,st){var He=je.invoke(st,Y);y.optional(function(){je.assert(st,He+"&&typeof "+He+'==="object"',"invalid "+M)});var Xe=je.shared.context,tt=st.def(He,".x|0"),St=st.def(He,".y|0"),or=st.def('"width" in ',He,"?",He,".width|0:","(",Xe,".",ja,"-",tt,")"),Xr=st.def('"height" in ',He,"?",He,".height|0:","(",Xe,".",Wa,"-",St,")");return y.optional(function(){je.assert(st,or+">=0&&"+Xr+">=0","invalid "+M)}),[tt,St,or,Xr]});return x&&(he.thisDep=he.thisDep||x.thisDep,he.contextDep=he.contextDep||x.contextDep,he.propDep=he.propDep||x.propDep),he}else return x?new Vr(x.thisDep,x.contextDep,x.propDep,function(je,st){var He=je.shared.context;return[0,0,st.def(He,".",ja),st.def(He,".",Wa)]}):null}var z=R(ao);if(z){var I=z;z=new Vr(z.thisDep,z.contextDep,z.propDep,function(M,k){var _=I.append(M,k),P=M.shared.context;return k.set(P,"."+_x,_[2]),k.set(P,"."+Ex,_[3]),_})}return{viewport:z,scissor_box:R(js)}}function et(E,x){var L=E.static,O=typeof L[qi]=="string"&&typeof L[$i]=="string";if(O){if(Object.keys(x.dynamic).length>0)return null;var F=x.static,R=Object.keys(F);if(R.length>0&&typeof F[R[0]]=="number"){for(var z=[],I=0;I<R.length;++I)y(typeof F[R[I]]=="number","must specify all vertex attribute locations when using vaos"),z.push([F[R[I]]|0,R[I]]);return z}}return null}function lt(E,x,L){var O=E.static,F=E.dynamic;function R(_){if(_ in O){var P=b.id(O[_]);y.optional(function(){fe.shader(xh[_],P,y.guessCommand())});var G=vr(function(){return P});return G.id=P,G}else if(_ in F){var K=F[_];return nn(K,function(Z,Y){var he=Z.invoke(Y,K),je=Y.def(Z.shared.strings,".id(",he,")");return y.optional(function(){Y(Z.shared.shader,".shader(",xh[_],",",je,",",Z.command,");")}),je})}return null}var z=R(qi),I=R($i),M=null,k;return Eo(z)&&Eo(I)?(M=fe.program(I.id,z.id,null,L),k=vr(function(_,P){return _.link(M)})):k=new Vr(z&&z.thisDep||I&&I.thisDep,z&&z.contextDep||I&&I.contextDep,z&&z.propDep||I&&I.propDep,function(_,P){var G=_.shared.shader,K;z?K=z.append(_,P):K=P.def(G,".",qi);var Z;I?Z=I.append(_,P):Z=P.def(G,".",$i);var Y=G+".program("+Z+","+K;return y.optional(function(){Y+=","+_.command}),P.def(Y+")")}),{frag:z,vert:I,progVar:k,program:M}}function Tt(E,x){var L=E.static,O=E.dynamic;function F(){if(Jo in L){var _=L[Jo];n0(_)?_=U.getElements(U.create(_,!0)):_&&(_=U.getElements(_),y.command(_,"invalid elements",x.commandStr));var P=vr(function(K,Z){if(_){var Y=K.link(_);return K.ELEMENTS=Y,Y}return K.ELEMENTS=null,null});return P.value=_,P}else if(Jo in O){var G=O[Jo];return nn(G,function(K,Z){var Y=K.shared,he=Y.isBufferArgs,je=Y.elements,st=K.invoke(Z,G),He=Z.def("null"),Xe=Z.def(he,"(",st,")"),tt=K.cond(Xe).then(He,"=",je,".createStream(",st,");").else(He,"=",je,".getElements(",st,");");return y.optional(function(){K.assert(tt.else,"!"+st+"||"+He,"invalid elements")}),Z.entry(tt),Z.exit(K.cond(Xe).then(je,".destroyStream(",He,");")),K.ELEMENTS=He,He})}return null}var R=F();function z(){if(ea in L){var _=L[ea];return y.commandParameter(_,Ia,"invalid primitve",x.commandStr),vr(function(G,K){return Ia[_]})}else if(ea in O){var P=O[ea];return nn(P,function(G,K){var Z=G.constants.primTypes,Y=G.invoke(K,P);return y.optional(function(){G.assert(K,Y+" in "+Z,"invalid primitive, must be one of "+Object.keys(Ia))}),K.def(Z,"[",Y,"]")})}else if(R)return Eo(R)?R.value?vr(function(G,K){return K.def(G.ELEMENTS,".primType")}):vr(function(){return uh}):new Vr(R.thisDep,R.contextDep,R.propDep,function(G,K){var Z=G.ELEMENTS;return K.def(Z,"?",Z,".primType:",uh)});return null}function I(_,P){if(_ in L){var G=L[_]|0;return y.command(!P||G>=0,"invalid "+_,x.commandStr),vr(function(Z,Y){return P&&(Z.OFFSET=G),G})}else if(_ in O){var K=O[_];return nn(K,function(Z,Y){var he=Z.invoke(Y,K);return P&&(Z.OFFSET=he,y.optional(function(){Z.assert(Y,he+">=0","invalid "+_)})),he})}else if(P&&R)return vr(function(Z,Y){return Z.OFFSET="0",0});return null}var M=I(Ws,!0);function k(){if(ta in L){var _=L[ta]|0;return y.command(typeof _=="number"&&_>=0,"invalid vertex count",x.commandStr),vr(function(){return _})}else if(ta in O){var P=O[ta];return nn(P,function(Z,Y){var he=Z.invoke(Y,P);return y.optional(function(){Z.assert(Y,"typeof "+he+'==="number"&&'+he+">=0&&"+he+"===("+he+"|0)","invalid vertex count")}),he})}else if(R)if(Eo(R)){if(R)return M?new Vr(M.thisDep,M.contextDep,M.propDep,function(Z,Y){var he=Y.def(Z.ELEMENTS,".vertCount-",Z.OFFSET);return y.optional(function(){Z.assert(Y,he+">=0","invalid vertex offset/element buffer too small")}),he}):vr(function(Z,Y){return Y.def(Z.ELEMENTS,".vertCount")});var G=vr(function(){return-1});return y.optional(function(){G.MISSING=!0}),G}else{var K=new Vr(R.thisDep||M.thisDep,R.contextDep||M.contextDep,R.propDep||M.propDep,function(Z,Y){var he=Z.ELEMENTS;return Z.OFFSET?Y.def(he,"?",he,".vertCount-",Z.OFFSET,":-1"):Y.def(he,"?",he,".vertCount:-1")});return y.optional(function(){K.DYNAMIC=!0}),K}return null}return{elements:R,primitive:z(),count:k(),instances:I(Vs,!1),offset:M}}function gr(E,x){var L=E.static,O=E.dynamic,F={};return ne.forEach(function(R){var z=_e(R);function I(M,k){if(R in L){var _=M(L[R]);F[z]=vr(function(){return _})}else if(R in O){var P=O[R];F[z]=nn(P,function(G,K){return k(G,K,G.invoke(K,P))})}}switch(R){case Ju:case Vu:case Wu:case oh:case Yu:case ih:case th:case rh:case nh:case Zu:return I(function(M){return y.commandType(M,"boolean",R,x.commandStr),M},function(M,k,_){return y.optional(function(){M.assert(k,"typeof "+_+'==="boolean"',"invalid flag "+R,M.commandStr)}),_});case Ku:return I(function(M){return y.commandParameter(M,Xa,"invalid "+R,x.commandStr),Xa[M]},function(M,k,_){var P=M.constants.compareFuncs;return y.optional(function(){M.assert(k,_+" in "+P,"invalid "+R+", must be one of "+Object.keys(Xa))}),k.def(P,"[",_,"]")});case Qu:return I(function(M){return y.command(cr(M)&&M.length===2&&typeof M[0]=="number"&&typeof M[1]=="number"&&M[0]<=M[1],"depth range is 2d array",x.commandStr),M},function(M,k,_){y.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===2&&typeof "+_+'[0]==="number"&&typeof '+_+'[1]==="number"&&'+_+"[0]<="+_+"[1]","depth range must be a 2d array")});var P=k.def("+",_,"[0]"),G=k.def("+",_,"[1]");return[P,G]});case Gc:return I(function(M){y.commandType(M,"object","blend.func",x.commandStr);var k="srcRGB"in M?M.srcRGB:M.src,_="srcAlpha"in M?M.srcAlpha:M.src,P="dstRGB"in M?M.dstRGB:M.dst,G="dstAlpha"in M?M.dstAlpha:M.dst;return y.commandParameter(k,Kn,z+".srcRGB",x.commandStr),y.commandParameter(_,Kn,z+".srcAlpha",x.commandStr),y.commandParameter(P,Kn,z+".dstRGB",x.commandStr),y.commandParameter(G,Kn,z+".dstAlpha",x.commandStr),y.command(gh.indexOf(k+", "+P)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+k+", "+P+")",x.commandStr),[Kn[k],Kn[P],Kn[_],Kn[G]]},function(M,k,_){var P=M.constants.blendFuncs;y.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid blend func, must be an object")});function G(He,Xe){var tt=k.def('"',He,Xe,'" in ',_,"?",_,".",He,Xe,":",_,".",He);return y.optional(function(){M.assert(k,tt+" in "+P,"invalid "+R+"."+He+Xe+", must be one of "+Object.keys(Kn))}),tt}var K=G("src","RGB"),Z=G("dst","RGB");y.optional(function(){var He=M.constants.invalidBlendCombinations;M.assert(k,He+".indexOf("+K+'+", "+'+Z+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var Y=k.def(P,"[",K,"]"),he=k.def(P,"[",G("src","Alpha"),"]"),je=k.def(P,"[",Z,"]"),st=k.def(P,"[",G("dst","Alpha"),"]");return[Y,je,he,st]});case Fc:return I(function(M){if(typeof M=="string")return y.commandParameter(M,X,"invalid "+R,x.commandStr),[X[M],X[M]];if(typeof M=="object")return y.commandParameter(M.rgb,X,R+".rgb",x.commandStr),y.commandParameter(M.alpha,X,R+".alpha",x.commandStr),[X[M.rgb],X[M.alpha]];y.commandRaise("invalid blend.equation",x.commandStr)},function(M,k,_){var P=M.constants.blendEquations,G=k.def(),K=k.def(),Z=M.cond("typeof ",_,'==="string"');return y.optional(function(){function Y(he,je,st){M.assert(he,st+" in "+P,"invalid "+je+", must be one of "+Object.keys(X))}Y(Z.then,R,_),M.assert(Z.else,_+"&&typeof "+_+'==="object"',"invalid "+R),Y(Z.else,R+".rgb",_+".rgb"),Y(Z.else,R+".alpha",_+".alpha")}),Z.then(G,"=",K,"=",P,"[",_,"];"),Z.else(G,"=",P,"[",_,".rgb];",K,"=",P,"[",_,".alpha];"),k(Z),[G,K]});case Xu:return I(function(M){return y.command(cr(M)&&M.length===4,"blend.color must be a 4d array",x.commandStr),$e(4,function(k){return+M[k]})},function(M,k,_){return y.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===4","blend.color must be a 4d array")}),$e(4,function(P){return k.def("+",_,"[",P,"]")})});case ah:return I(function(M){return y.commandType(M,"number",z,x.commandStr),M|0},function(M,k,_){return y.optional(function(){M.assert(k,"typeof "+_+'==="number"',"invalid stencil.mask")}),k.def(_,"|0")});case Bc:return I(function(M){y.commandType(M,"object",z,x.commandStr);var k=M.cmp||"keep",_=M.ref||0,P="mask"in M?M.mask:-1;return y.commandParameter(k,Xa,R+".cmp",x.commandStr),y.commandType(_,"number",R+".ref",x.commandStr),y.commandType(P,"number",R+".mask",x.commandStr),[Xa[k],_,P]},function(M,k,_){var P=M.constants.compareFuncs;y.optional(function(){function Y(){M.assert(k,Array.prototype.join.call(arguments,""),"invalid stencil.func")}Y(_+"&&typeof ",_,'==="object"'),Y('!("cmp" in ',_,")||(",_,".cmp in ",P,")")});var G=k.def('"cmp" in ',_,"?",P,"[",_,".cmp]",":",wo),K=k.def(_,".ref|0"),Z=k.def('"mask" in ',_,"?",_,".mask|0:-1");return[G,K,Z]});case jc:case Gi:return I(function(M){y.commandType(M,"object",z,x.commandStr);var k=M.fail||"keep",_=M.zfail||"keep",P=M.zpass||"keep";return y.commandParameter(k,_o,R+".fail",x.commandStr),y.commandParameter(_,_o,R+".zfail",x.commandStr),y.commandParameter(P,_o,R+".zpass",x.commandStr),[R===Gi?ra:Xi,_o[k],_o[_],_o[P]]},function(M,k,_){var P=M.constants.stencilOps;y.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid "+R)});function G(K){return y.optional(function(){M.assert(k,'!("'+K+'" in '+_+")||("+_+"."+K+" in "+P+")","invalid "+R+"."+K+", must be one of "+Object.keys(_o))}),k.def('"',K,'" in ',_,"?",P,"[",_,".",K,"]:",wo)}return[R===Gi?ra:Xi,G("fail"),G("zfail"),G("zpass")]});case Hc:return I(function(M){y.commandType(M,"object",z,x.commandStr);var k=M.factor|0,_=M.units|0;return y.commandType(k,"number",z+".factor",x.commandStr),y.commandType(_,"number",z+".units",x.commandStr),[k,_]},function(M,k,_){y.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid "+R)});var P=k.def(_,".factor|0"),G=k.def(_,".units|0");return[P,G]});case eh:return I(function(M){var k=0;return M==="front"?k=Xi:M==="back"&&(k=ra),y.command(!!k,z,x.commandStr),k},function(M,k,_){return y.optional(function(){M.assert(k,_+'==="front"||'+_+'==="back"',"invalid cull.face")}),k.def(_,'==="front"?',Xi,":",ra)});case qc:return I(function(M){return y.command(typeof M=="number"&&M>=j.lineWidthDims[0]&&M<=j.lineWidthDims[1],"invalid line width, must be a positive number between "+j.lineWidthDims[0]+" and "+j.lineWidthDims[1],x.commandStr),M},function(M,k,_){return y.optional(function(){M.assert(k,"typeof "+_+'==="number"&&'+_+">="+j.lineWidthDims[0]+"&&"+_+"<="+j.lineWidthDims[1],"invalid line width")}),_});case $c:return I(function(M){return y.commandParameter(M,Zc,z,x.commandStr),Zc[M]},function(M,k,_){return y.optional(function(){M.assert(k,_+'==="cw"||'+_+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),k.def(_+'==="cw"?'+hh+":"+Qc)});case Dc:return I(function(M){return y.command(cr(M)&&M.length===4,"color.mask must be length 4 array",x.commandStr),M.map(function(k){return!!k})},function(M,k,_){return y.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===4","invalid color.mask")}),$e(4,function(P){return"!!"+_+"["+P+"]"})});case Uc:return I(function(M){y.command(typeof M=="object"&&M,z,x.commandStr);var k="value"in M?M.value:1,_=!!M.invert;return y.command(typeof k=="number"&&k>=0&&k<=1,"sample.coverage.value must be a number between 0 and 1",x.commandStr),[k,_]},function(M,k,_){y.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid sample.coverage")});var P=k.def('"value" in ',_,"?+",_,".value:1"),G=k.def("!!",_,".invert");return[P,G]})}}),F}function Ar(E,x){var L=E.static,O=E.dynamic,F={};return Object.keys(L).forEach(function(R){var z=L[R],I;if(typeof z=="number"||typeof z=="boolean")I=vr(function(){return z});else if(typeof z=="function"){var M=z._reglType;M==="texture2d"||M==="textureCube"?I=vr(function(k){return k.link(z)}):M==="framebuffer"||M==="framebufferCube"?(y.command(z.color.length>0,'missing color attachment for framebuffer sent to uniform "'+R+'"',x.commandStr),I=vr(function(k){return k.link(z.color[0])})):y.commandRaise('invalid data for uniform "'+R+'"',x.commandStr)}else cr(z)?I=vr(function(k){var _=k.global.def("[",$e(z.length,function(P){return y.command(typeof z[P]=="number"||typeof z[P]=="boolean","invalid uniform "+R,k.commandStr),z[P]}),"]");return _}):y.commandRaise('invalid or missing data for uniform "'+R+'"',x.commandStr);I.value=z,F[R]=I}),Object.keys(O).forEach(function(R){var z=O[R];F[R]=nn(z,function(I,M){return I.invoke(M,z)})}),F}function mt(E,x){var L=E.static,O=E.dynamic,F={};return Object.keys(L).forEach(function(R){var z=L[R],I=b.id(R),M=new N;if(n0(z))M.state=Ba,M.buffer=Q.getBuffer(Q.create(z,Va,!1,!0)),M.type=0;else{var k=Q.getBuffer(z);if(k)M.state=Ba,M.buffer=k,M.type=0;else if(y.command(typeof z=="object"&&z,"invalid data for attribute "+R,x.commandStr),"constant"in z){var _=z.constant;M.buffer="null",M.state=Rc,typeof _=="number"?M.x=_:(y.command(cr(_)&&_.length>0&&_.length<=4,"invalid constant for attribute "+R,x.commandStr),Ua.forEach(function(je,st){st<_.length&&(M[je]=_[st])}))}else{n0(z.buffer)?k=Q.getBuffer(Q.create(z.buffer,Va,!1,!0)):k=Q.getBuffer(z.buffer),y.command(!!k,'missing buffer for attribute "'+R+'"',x.commandStr);var P=z.offset|0;y.command(P>=0,'invalid offset for attribute "'+R+'"',x.commandStr);var G=z.stride|0;y.command(G>=0&&G<256,'invalid stride for attribute "'+R+'", must be integer betweeen [0, 255]',x.commandStr);var K=z.size|0;y.command(!("size"in z)||K>0&&K<=4,'invalid size for attribute "'+R+'", must be 1,2,3,4',x.commandStr);var Z=!!z.normalized,Y=0;"type"in z&&(y.commandParameter(z.type,Vo,"invalid type for attribute "+R,x.commandStr),Y=Vo[z.type]);var he=z.divisor|0;"divisor"in z&&(y.command(he===0||pe,'cannot specify divisor for attribute "'+R+'", instancing not supported',x.commandStr),y.command(he>=0,'invalid divisor for attribute "'+R+'"',x.commandStr)),y.optional(function(){var je=x.commandStr,st=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(z).forEach(function(He){y.command(st.indexOf(He)>=0,'unknown parameter "'+He+'" for attribute pointer "'+R+'" (valid parameters are '+st+")",je)})}),M.buffer=k,M.state=Ba,M.size=K,M.normalized=Z,M.type=Y||k.dtype,M.offset=P,M.stride=G,M.divisor=he}}F[R]=vr(function(je,st){var He=je.attribCache;if(I in He)return He[I];var Xe={isStream:!1};return Object.keys(M).forEach(function(tt){Xe[tt]=M[tt]}),M.buffer&&(Xe.buffer=je.link(M.buffer),Xe.type=Xe.type||Xe.buffer+".dtype"),He[I]=Xe,Xe})}),Object.keys(O).forEach(function(R){var z=O[R];function I(M,k){var _=M.invoke(k,z),P=M.shared,G=M.constants,K=P.isBufferArgs,Z=P.buffer;y.optional(function(){M.assert(k,_+"&&(typeof "+_+'==="object"||typeof '+_+'==="function")&&('+K+"("+_+")||"+Z+".getBuffer("+_+")||"+Z+".getBuffer("+_+".buffer)||"+K+"("+_+'.buffer)||("constant" in '+_+"&&(typeof "+_+'.constant==="number"||'+P.isArrayLike+"("+_+".constant))))",'invalid dynamic attribute "'+R+'"')});var Y={isStream:k.def(!1)},he=new N;he.state=Ba,Object.keys(he).forEach(function(Xe){Y[Xe]=k.def(""+he[Xe])});var je=Y.buffer,st=Y.type;k("if(",K,"(",_,")){",Y.isStream,"=true;",je,"=",Z,".createStream(",Va,",",_,");",st,"=",je,".dtype;","}else{",je,"=",Z,".getBuffer(",_,");","if(",je,"){",st,"=",je,".dtype;",'}else if("constant" in ',_,"){",Y.state,"=",Rc,";","if(typeof "+_+'.constant === "number"){',Y[Ua[0]],"=",_,".constant;",Ua.slice(1).map(function(Xe){return Y[Xe]}).join("="),"=0;","}else{",Ua.map(function(Xe,tt){return Y[Xe]+"="+_+".constant.length>"+tt+"?"+_+".constant["+tt+"]:0;"}).join(""),"}}else{","if(",K,"(",_,".buffer)){",je,"=",Z,".createStream(",Va,",",_,".buffer);","}else{",je,"=",Z,".getBuffer(",_,".buffer);","}",st,'="type" in ',_,"?",G.glTypes,"[",_,".type]:",je,".dtype;",Y.normalized,"=!!",_,".normalized;");function He(Xe){k(Y[Xe],"=",_,".",Xe,"|0;")}return He("size"),He("offset"),He("stride"),He("divisor"),k("}}"),k.exit("if(",Y.isStream,"){",Z,".destroyStream(",je,");","}"),Y}F[R]=nn(z,I)}),F}function _r(E,x){var L=E.static,O=E.dynamic;if(Hi in L){var F=L[Hi];return F!==null&&me.getVAO(F)===null&&(F=me.createVAO(F)),vr(function(z){return z.link(me.getVAO(F))})}else if(Hi in O){var R=O[Hi];return nn(R,function(z,I){var M=z.invoke(I,R);return I.def(z.shared.vao+".getVAO("+M+")")})}return null}function Wt(E){var x=E.static,L=E.dynamic,O={};return Object.keys(x).forEach(function(F){var R=x[F];O[F]=vr(function(z,I){return typeof R=="number"||typeof R=="boolean"?""+R:z.link(R)})}),Object.keys(L).forEach(function(F){var R=L[F];O[F]=nn(R,function(z,I){return z.invoke(I,R)})}),O}function xr(E,x,L,O,F){var R=E.static,z=E.dynamic;y.optional(function(){var He=[Zo,$i,qi,Jo,ea,Ws,ta,Vs,Di,Hi].concat(ne);function Xe(tt){Object.keys(tt).forEach(function(St){y.command(He.indexOf(St)>=0,'unknown parameter "'+St+'"',F.commandStr)})}Xe(R),Xe(z)});var I=et(E,x),M=qe(E,F),k=ht(E,M,F),_=Tt(E,F),P=gr(E,F),G=lt(E,F,I);function K(He){var Xe=k[He];Xe&&(P[He]=Xe)}K(ao),K(_e(js));var Z=Object.keys(P).length>0,Y={framebuffer:M,draw:_,shader:G,state:P,dirty:Z,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(Y.profile=at(E,F),Y.uniforms=Ar(L,F),Y.drawVAO=Y.scopeVAO=_r(E,F),!Y.drawVAO&&G.program&&!I&&S.angle_instanced_arrays){var he=!0,je=G.program.attributes.map(function(He){var Xe=x.static[He];return he=he&&!!Xe,Xe});if(he&&je.length>0){var st=me.getVAO(me.createVAO(je));Y.drawVAO=new Vr(null,null,null,function(He,Xe){return He.link(st)}),Y.useVAO=!0}}return I?Y.useVAO=!0:Y.attributes=mt(x,F),Y.context=Wt(O,F),Y}function Er(E,x,L){var O=E.shared,F=O.context,R=E.scope();Object.keys(L).forEach(function(z){x.save(F,"."+z);var I=L[z],M=I.append(E,x);Array.isArray(M)?R(F,".",z,"=[",M.join(),"];"):R(F,".",z,"=",M,";")}),x(R)}function Mr(E,x,L,O){var F=E.shared,R=F.gl,z=F.framebuffer,I;Ce&&(I=x.def(F.extensions,".webgl_draw_buffers"));var M=E.constants,k=M.drawBuffer,_=M.backBuffer,P;L?P=L.append(E,x):P=x.def(z,".next"),O||x("if(",P,"!==",z,".cur){"),x("if(",P,"){",R,".bindFramebuffer(",vh,",",P,".framebuffer);"),Ce&&x(I,".drawBuffersWEBGL(",k,"[",P,".colorAttachments.length]);"),x("}else{",R,".bindFramebuffer(",vh,",null);"),Ce&&x(I,".drawBuffersWEBGL(",_,");"),x("}",z,".cur=",P,";"),O||x("}")}function Lr(E,x,L){var O=E.shared,F=O.gl,R=E.current,z=E.next,I=O.current,M=O.next,k=E.cond(I,".dirty");ne.forEach(function(_){var P=_e(_);if(!(P in L.state)){var G,K;if(P in z){G=z[P],K=R[P];var Z=$e(te[P].length,function(he){return k.def(G,"[",he,"]")});k(E.cond(Z.map(function(he,je){return he+"!=="+K+"["+je+"]"}).join("||")).then(F,".",re[P],"(",Z,");",Z.map(function(he,je){return K+"["+je+"]="+he}).join(";"),";"))}else{G=k.def(M,".",P);var Y=E.cond(G,"!==",I,".",P);k(Y),P in we?Y(E.cond(G).then(F,".enable(",we[P],");").else(F,".disable(",we[P],");"),I,".",P,"=",G,";"):Y(F,".",re[P],"(",G,");",I,".",P,"=",G,";")}}}),Object.keys(L.state).length===0&&k(I,".dirty=false;"),x(k)}function Or(E,x,L,O){var F=E.shared,R=E.current,z=F.current,I=F.gl;yh(Object.keys(L)).forEach(function(M){var k=L[M];if(!(O&&!O(k))){var _=k.append(E,x);if(we[M]){var P=we[M];Eo(k)?_?x(I,".enable(",P,");"):x(I,".disable(",P,");"):x(E.cond(_).then(I,".enable(",P,");").else(I,".disable(",P,");")),x(z,".",M,"=",_,";")}else if(cr(_)){var G=R[M];x(I,".",re[M],"(",_,");",_.map(function(K,Z){return G+"["+Z+"]="+K}).join(";"),";")}else x(I,".",re[M],"(",_,");",z,".",M,"=",_,";")}})}function lr(E,x){pe&&(E.instancing=x.def(E.shared.extensions,".angle_instanced_arrays"))}function it(E,x,L,O,F){var R=E.shared,z=E.stats,I=R.current,M=R.timer,k=L.profile;function _(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var P,G;function K(He){P=x.def(),He(P,"=",_(),";"),typeof F=="string"?He(z,".count+=",F,";"):He(z,".count++;"),se&&(O?(G=x.def(),He(G,"=",M,".getNumPendingQueries();")):He(M,".beginQuery(",z,");"))}function Z(He){He(z,".cpuTime+=",_(),"-",P,";"),se&&(O?He(M,".pushScopeStats(",G,",",M,".getNumPendingQueries(),",z,");"):He(M,".endQuery();"))}function Y(He){var Xe=x.def(I,".profile");x(I,".profile=",He,";"),x.exit(I,".profile=",Xe,";")}var he;if(k){if(Eo(k)){k.enable?(K(x),Z(x.exit),Y("true")):Y("false");return}he=k.append(E,x),Y(he)}else he=x.def(I,".profile");var je=E.block();K(je),x("if(",he,"){",je,"}");var st=E.block();Z(st),x.exit("if(",he,"){",st,"}")}function Nr(E,x,L,O,F){var R=E.shared;function z(M){switch(M){case Xs:case Qs:case e0:return 2;case Ys:case Zs:case t0:return 3;case Ks:case Js:case r0:return 4;default:return 1}}function I(M,k,_){var P=R.gl,G=x.def(M,".location"),K=x.def(R.attributes,"[",G,"]"),Z=_.state,Y=_.buffer,he=[_.x,_.y,_.z,_.w],je=["buffer","normalized","offset","stride"];function st(){x("if(!",K,".buffer){",P,".enableVertexAttribArray(",G,");}");var Xe=_.type,tt;if(_.size?tt=x.def(_.size,"||",k):tt=k,x("if(",K,".type!==",Xe,"||",K,".size!==",tt,"||",je.map(function(or){return K+"."+or+"!=="+_[or]}).join("||"),"){",P,".bindBuffer(",Va,",",Y,".buffer);",P,".vertexAttribPointer(",[G,tt,Xe,_.normalized,_.stride,_.offset],");",K,".type=",Xe,";",K,".size=",tt,";",je.map(function(or){return K+"."+or+"="+_[or]+";"}).join(""),"}"),pe){var St=_.divisor;x("if(",K,".divisor!==",St,"){",E.instancing,".vertexAttribDivisorANGLE(",[G,St],");",K,".divisor=",St,";}")}}function He(){x("if(",K,".buffer){",P,".disableVertexAttribArray(",G,");",K,".buffer=null;","}if(",Ua.map(function(Xe,tt){return K+"."+Xe+"!=="+he[tt]}).join("||"),"){",P,".vertexAttrib4f(",G,",",he,");",Ua.map(function(Xe,tt){return K+"."+Xe+"="+he[tt]+";"}).join(""),"}")}Z===Ba?st():Z===Rc?He():(x("if(",Z,"===",Ba,"){"),st(),x("}else{"),He(),x("}"))}O.forEach(function(M){var k=M.name,_=L.attributes[k],P;if(_){if(!F(_))return;P=_.append(E,x)}else{if(!F(bh))return;var G=E.scopeAttrib(k);y.optional(function(){E.assert(x,G+".state","missing attribute "+k)}),P={},Object.keys(new N).forEach(function(K){P[K]=x.def(G,".",K)})}I(E.link(M),z(M.info.type),P)})}function Lt(E,x,L,O,F){for(var R=E.shared,z=R.gl,I,M=0;M<O.length;++M){var k=O[M],_=k.name,P=k.info.type,G=L.uniforms[_],K=E.link(k),Z=K+".location",Y;if(G){if(!F(G))continue;if(Eo(G)){var he=G.value;if(y.command(he!==null&&typeof he!="undefined",'missing uniform "'+_+'"',E.commandStr),P===Wi||P===Vi){y.command(typeof he=="function"&&(P===Wi&&(he._reglType==="texture2d"||he._reglType==="framebuffer")||P===Vi&&(he._reglType==="textureCube"||he._reglType==="framebufferCube")),"invalid texture for uniform "+_,E.commandStr);var je=E.link(he._texture||he.color[0]._texture);x(z,".uniform1i(",Z,",",je+".bind());"),x.exit(je,".unbind();")}else if(P===Ui||P===Bi||P===ji){y.optional(function(){y.command(cr(he),"invalid matrix for uniform "+_,E.commandStr),y.command(P===Ui&&he.length===4||P===Bi&&he.length===9||P===ji&&he.length===16,"invalid length for matrix uniform "+_,E.commandStr)});var st=E.global.def("new Float32Array(["+Array.prototype.slice.call(he)+"])"),He=2;P===Bi?He=3:P===ji&&(He=4),x(z,".uniformMatrix",He,"fv(",Z,",false,",st,");")}else{switch(P){case Xc:y.commandType(he,"number","uniform "+_,E.commandStr),I="1f";break;case Xs:y.command(cr(he)&&he.length===2,"uniform "+_,E.commandStr),I="2f";break;case Ys:y.command(cr(he)&&he.length===3,"uniform "+_,E.commandStr),I="3f";break;case Ks:y.command(cr(he)&&he.length===4,"uniform "+_,E.commandStr),I="4f";break;case Kc:y.commandType(he,"boolean","uniform "+_,E.commandStr),I="1i";break;case Yc:y.commandType(he,"number","uniform "+_,E.commandStr),I="1i";break;case e0:y.command(cr(he)&&he.length===2,"uniform "+_,E.commandStr),I="2i";break;case Qs:y.command(cr(he)&&he.length===2,"uniform "+_,E.commandStr),I="2i";break;case t0:y.command(cr(he)&&he.length===3,"uniform "+_,E.commandStr),I="3i";break;case Zs:y.command(cr(he)&&he.length===3,"uniform "+_,E.commandStr),I="3i";break;case r0:y.command(cr(he)&&he.length===4,"uniform "+_,E.commandStr),I="4i";break;case Js:y.command(cr(he)&&he.length===4,"uniform "+_,E.commandStr),I="4i";break}x(z,".uniform",I,"(",Z,",",cr(he)?Array.prototype.slice.call(he):he,");")}continue}else Y=G.append(E,x)}else{if(!F(bh))continue;Y=x.def(R.uniforms,"[",b.id(_),"]")}P===Wi?(y(!Array.isArray(Y),"must specify a scalar prop for textures"),x("if(",Y,"&&",Y,'._reglType==="framebuffer"){',Y,"=",Y,".color[0];","}")):P===Vi&&(y(!Array.isArray(Y),"must specify a scalar prop for cube maps"),x("if(",Y,"&&",Y,'._reglType==="framebufferCube"){',Y,"=",Y,".color[0];","}")),y.optional(function(){function Xr($n,Sh){E.assert(x,$n,'bad data or missing for uniform "'+_+'".  '+Sh)}function Jc($n){y(!Array.isArray(Y),"must not specify an array type for uniform"),Xr("typeof "+Y+'==="'+$n+'"',"invalid type, expected "+$n)}function Mn($n,Sh){Array.isArray(Y)?y(Y.length===$n,"must have length "+$n):Xr(R.isArrayLike+"("+Y+")&&"+Y+".length==="+$n,"invalid vector, should have length "+$n,E.commandStr)}function Th($n){y(!Array.isArray(Y),"must not specify a value type"),Xr("typeof "+Y+'==="function"&&'+Y+'._reglType==="texture'+($n===fh?"2d":"Cube")+'"',"invalid texture type",E.commandStr)}switch(P){case Yc:Jc("number");break;case Qs:Mn(2,"number");break;case Zs:Mn(3,"number");break;case Js:Mn(4,"number");break;case Xc:Jc("number");break;case Xs:Mn(2,"number");break;case Ys:Mn(3,"number");break;case Ks:Mn(4,"number");break;case Kc:Jc("boolean");break;case e0:Mn(2,"boolean");break;case t0:Mn(3,"boolean");break;case r0:Mn(4,"boolean");break;case Ui:Mn(4,"number");break;case Bi:Mn(9,"number");break;case ji:Mn(16,"number");break;case Wi:Th(fh);break;case Vi:Th(kx);break}});var Xe=1;switch(P){case Wi:case Vi:var tt=x.def(Y,"._texture");x(z,".uniform1i(",Z,",",tt,".bind());"),x.exit(tt,".unbind();");continue;case Yc:case Kc:I="1i";break;case Qs:case e0:I="2i",Xe=2;break;case Zs:case t0:I="3i",Xe=3;break;case Js:case r0:I="4i",Xe=4;break;case Xc:I="1f";break;case Xs:I="2f",Xe=2;break;case Ys:I="3f",Xe=3;break;case Ks:I="4f",Xe=4;break;case Ui:I="Matrix2fv";break;case Bi:I="Matrix3fv";break;case ji:I="Matrix4fv";break}if(x(z,".uniform",I,"(",Z,","),I.charAt(0)==="M"){var St=Math.pow(P-Ui+2,2),or=E.global.def("new Float32Array(",St,")");Array.isArray(Y)?x("false,(",$e(St,function(Xr){return or+"["+Xr+"]="+Y[Xr]}),",",or,")"):x("false,(Array.isArray(",Y,")||",Y," instanceof Float32Array)?",Y,":(",$e(St,function(Xr){return or+"["+Xr+"]="+Y+"["+Xr+"]"}),",",or,")")}else Xe>1?x($e(Xe,function(Xr){return Array.isArray(Y)?Y[Xr]:Y+"["+Xr+"]"})):(y(!Array.isArray(Y),"uniform value must not be an array"),x(Y));x(");")}}function Ve(E,x,L,O){var F=E.shared,R=F.gl,z=F.draw,I=O.draw;function M(){var tt=I.elements,St,or=x;return tt?((tt.contextDep&&O.contextDynamic||tt.propDep)&&(or=L),St=tt.append(E,or)):St=or.def(z,".",Jo),St&&or("if("+St+")"+R+".bindBuffer("+Ax+","+St+".buffer.buffer);"),St}function k(){var tt=I.count,St,or=x;return tt?((tt.contextDep&&O.contextDynamic||tt.propDep)&&(or=L),St=tt.append(E,or),y.optional(function(){tt.MISSING&&E.assert(x,"false","missing vertex count"),tt.DYNAMIC&&E.assert(or,St+">=0","missing vertex count")})):(St=or.def(z,".",ta),y.optional(function(){E.assert(or,St+">=0","missing vertex count")})),St}var _=M();function P(tt){var St=I[tt];return St?St.contextDep&&O.contextDynamic||St.propDep?St.append(E,L):St.append(E,x):x.def(z,".",tt)}var G=P(ea),K=P(Ws),Z=k();if(typeof Z=="number"){if(Z===0)return}else L("if(",Z,"){"),L.exit("}");var Y,he;pe&&(Y=P(Vs),he=E.instancing);var je=_+".type",st=I.elements&&Eo(I.elements);function He(){function tt(){L(he,".drawElementsInstancedANGLE(",[G,Z,je,K+"<<(("+je+"-"+Uu+")>>1)",Y],");")}function St(){L(he,".drawArraysInstancedANGLE(",[G,K,Z,Y],");")}_?st?tt():(L("if(",_,"){"),tt(),L("}else{"),St(),L("}")):St()}function Xe(){function tt(){L(R+".drawElements("+[G,Z,je,K+"<<(("+je+"-"+Uu+")>>1)"]+");")}function St(){L(R+".drawArrays("+[G,K,Z]+");")}_?st?tt():(L("if(",_,"){"),tt(),L("}else{"),St(),L("}")):St()}pe&&(typeof Y!="number"||Y>=0)?typeof Y=="string"?(L("if(",Y,">0){"),He(),L("}else if(",Y,"<0){"),Xe(),L("}")):He():Xe()}function pt(E,x,L,O,F){var R=Ke(),z=R.proc("body",F);return y.optional(function(){R.commandStr=x.commandStr,R.command=R.link(x.commandStr)}),pe&&(R.instancing=z.def(R.shared.extensions,".angle_instanced_arrays")),E(R,z,L,O),R.compile().body}function wt(E,x,L,O){lr(E,x),L.useVAO?L.drawVAO?x(E.shared.vao,".setVAO(",L.drawVAO.append(E,x),");"):x(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(x(E.shared.vao,".setVAO(null);"),Nr(E,x,L,O.attributes,function(){return!0})),Lt(E,x,L,O.uniforms,function(){return!0}),Ve(E,x,x,L)}function fr(E,x){var L=E.proc("draw",1);lr(E,L),Er(E,L,x.context),Mr(E,L,x.framebuffer),Lr(E,L,x),Or(E,L,x.state),it(E,L,x,!1,!0);var O=x.shader.progVar.append(E,L);if(L(E.shared.gl,".useProgram(",O,".program);"),x.shader.program)wt(E,L,x,x.shader.program);else{L(E.shared.vao,".setVAO(null);");var F=E.global.def("{}"),R=L.def(O,".id"),z=L.def(F,"[",R,"]");L(E.cond(z).then(z,".call(this,a0);").else(z,"=",F,"[",R,"]=",E.link(function(I){return pt(wt,E,x,I,1)}),"(",O,");",z,".call(this,a0);"))}Object.keys(x.state).length>0&&L(E.shared.current,".dirty=true;")}function Qn(E,x,L,O){E.batchId="a1",lr(E,x);function F(){return!0}Nr(E,x,L,O.attributes,F),Lt(E,x,L,O.uniforms,F),Ve(E,x,x,L)}function na(E,x,L,O){lr(E,x);var F=L.contextDep,R=x.def(),z="a0",I="a1",M=x.def();E.shared.props=M,E.batchId=R;var k=E.scope(),_=E.scope();x(k.entry,"for(",R,"=0;",R,"<",I,";++",R,"){",M,"=",z,"[",R,"];",_,"}",k.exit);function P(je){return je.contextDep&&F||je.propDep}function G(je){return!P(je)}if(L.needsContext&&Er(E,_,L.context),L.needsFramebuffer&&Mr(E,_,L.framebuffer),Or(E,_,L.state,P),L.profile&&P(L.profile)&&it(E,_,L,!1,!0),O)L.useVAO?L.drawVAO?P(L.drawVAO)?_(E.shared.vao,".setVAO(",L.drawVAO.append(E,_),");"):k(E.shared.vao,".setVAO(",L.drawVAO.append(E,k),");"):k(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(k(E.shared.vao,".setVAO(null);"),Nr(E,k,L,O.attributes,G),Nr(E,_,L,O.attributes,P)),Lt(E,k,L,O.uniforms,G),Lt(E,_,L,O.uniforms,P),Ve(E,k,_,L);else{var K=E.global.def("{}"),Z=L.shader.progVar.append(E,_),Y=_.def(Z,".id"),he=_.def(K,"[",Y,"]");_(E.shared.gl,".useProgram(",Z,".program);","if(!",he,"){",he,"=",K,"[",Y,"]=",E.link(function(je){return pt(Qn,E,L,je,2)}),"(",Z,");}",he,".call(this,a0[",R,"],",R,");")}}function A(E,x){var L=E.proc("batch",2);E.batchId="0",lr(E,L);var O=!1,F=!0;Object.keys(x.context).forEach(function(K){O=O||x.context[K].propDep}),O||(Er(E,L,x.context),F=!1);var R=x.framebuffer,z=!1;R?(R.propDep?O=z=!0:R.contextDep&&O&&(z=!0),z||Mr(E,L,R)):Mr(E,L,null),x.state.viewport&&x.state.viewport.propDep&&(O=!0);function I(K){return K.contextDep&&O||K.propDep}Lr(E,L,x),Or(E,L,x.state,function(K){return!I(K)}),(!x.profile||!I(x.profile))&&it(E,L,x,!1,"a1"),x.contextDep=O,x.needsContext=F,x.needsFramebuffer=z;var M=x.shader.progVar;if(M.contextDep&&O||M.propDep)na(E,L,x,null);else{var k=M.append(E,L);if(L(E.shared.gl,".useProgram(",k,".program);"),x.shader.program)na(E,L,x,x.shader.program);else{L(E.shared.vao,".setVAO(null);");var _=E.global.def("{}"),P=L.def(k,".id"),G=L.def(_,"[",P,"]");L(E.cond(G).then(G,".call(this,a0,a1);").else(G,"=",_,"[",P,"]=",E.link(function(K){return pt(na,E,x,K,2)}),"(",k,");",G,".call(this,a0,a1);"))}}Object.keys(x.state).length>0&&L(E.shared.current,".dirty=true;")}function W(E,x){var L=E.proc("scope",3);E.batchId="a2";var O=E.shared,F=O.current;Er(E,L,x.context),x.framebuffer&&x.framebuffer.append(E,L),yh(Object.keys(x.state)).forEach(function(z){var I=x.state[z],M=I.append(E,L);cr(M)?M.forEach(function(k,_){L.set(E.next[z],"["+_+"]",k)}):L.set(O.next,"."+z,M)}),it(E,L,x,!0,!0),[Jo,Ws,ta,Vs,ea].forEach(function(z){var I=x.draw[z];I&&L.set(O.draw,"."+z,""+I.append(E,L))}),Object.keys(x.uniforms).forEach(function(z){var I=x.uniforms[z].append(E,L);Array.isArray(I)&&(I="["+I.join()+"]"),L.set(O.uniforms,"["+b.id(z)+"]",I)}),Object.keys(x.attributes).forEach(function(z){var I=x.attributes[z].append(E,L),M=E.scopeAttrib(z);Object.keys(new N).forEach(function(k){L.set(M,"."+k,I[k])})}),x.scopeVAO&&L.set(O.vao,".targetVAO",x.scopeVAO.append(E,L));function R(z){var I=x.shader[z];I&&L.set(O.shader,"."+z,I.append(E,L))}R($i),R(qi),Object.keys(x.state).length>0&&(L(F,".dirty=true;"),L.exit(F,".dirty=true;")),L("a1(",E.shared.context,",a0,",E.batchId,");")}function $(E){if(!(typeof E!="object"||cr(E))){for(var x=Object.keys(E),L=0;L<x.length;++L)if(Ir.isDynamic(E[x[L]]))return!0;return!1}}function Ne(E,x,L){var O=x.static[L];if(!O||!$(O))return;var F=E.global,R=Object.keys(O),z=!1,I=!1,M=!1,k=E.global.def("{}");R.forEach(function(P){var G=O[P];if(Ir.isDynamic(G)){typeof G=="function"&&(G=O[P]=Ir.unbox(G));var K=nn(G,null);z=z||K.thisDep,M=M||K.propDep,I=I||K.contextDep}else{switch(F(k,".",P,"="),typeof G){case"number":F(G);break;case"string":F('"',G,'"');break;case"object":Array.isArray(G)&&F("[",G.join(),"]");break;default:F(E.link(G));break}F(";")}});function _(P,G){R.forEach(function(K){var Z=O[K];if(Ir.isDynamic(Z)){var Y=P.invoke(G,Z);G(k,".",K,"=",Y,";")}})}x.dynamic[L]=new Ir.DynamicVariable(Bs,{thisDep:z,contextDep:I,propDep:M,ref:k,append:_}),delete x.static[L]}function dt(E,x,L,O,F){var R=Ke();R.stats=R.link(F),Object.keys(x.static).forEach(function(I){Ne(R,x,I)}),Mx.forEach(function(I){Ne(R,E,I)});var z=xr(E,x,L,O,R);return fr(R,z),W(R,z),A(R,z),t(R.compile(),{destroy:function(){z.shader.program.destroy()}})}return{next:Pe,current:te,procs:function(){var E=Ke(),x=E.proc("poll"),L=E.proc("refresh"),O=E.block();x(O),L(O);var F=E.shared,R=F.gl,z=F.next,I=F.current;O(I,".dirty=false;"),Mr(E,x),Mr(E,L,null,!0);var M;pe&&(M=E.link(pe)),S.oes_vertex_array_object&&L(E.link(S.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var k=0;k<j.maxAttributes;++k){var _=L.def(F.attributes,"[",k,"]"),P=E.cond(_,".buffer");P.then(R,".enableVertexAttribArray(",k,");",R,".bindBuffer(",Va,",",_,".buffer.buffer);",R,".vertexAttribPointer(",k,",",_,".size,",_,".type,",_,".normalized,",_,".stride,",_,".offset);").else(R,".disableVertexAttribArray(",k,");",R,".vertexAttrib4f(",k,",",_,".x,",_,".y,",_,".z,",_,".w);",_,".buffer=null;"),L(P),pe&&L(M,".vertexAttribDivisorANGLE(",k,",",_,".divisor);")}return L(E.shared.vao,".currentVAO=null;",E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"),Object.keys(we).forEach(function(G){var K=we[G],Z=O.def(z,".",G),Y=E.block();Y("if(",Z,"){",R,".enable(",K,")}else{",R,".disable(",K,")}",I,".",G,"=",Z,";"),L(Y),x("if(",Z,"!==",I,".",G,"){",Y,"}")}),Object.keys(re).forEach(function(G){var K=re[G],Z=te[G],Y,he,je=E.block();if(je(R,".",K,"("),cr(Z)){var st=Z.length;Y=E.global.def(z,".",G),he=E.global.def(I,".",G),je($e(st,function(He){return Y+"["+He+"]"}),");",$e(st,function(He){return he+"["+He+"]="+Y+"["+He+"];"}).join("")),x("if(",$e(st,function(He){return Y+"["+He+"]!=="+he+"["+He+"]"}).join("||"),"){",je,"}")}else Y=O.def(z,".",G),he=O.def(I,".",G),je(Y,");",I,".",G,"=",Y,";"),x("if(",Y,"!==",he,"){",je,"}");L(je)}),E.compile()}(),compile:dt}}function Bx(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var jx=34918,Wx=34919,wh=35007,Vx=function(l,b){if(!b.ext_disjoint_timer_query)return null;var S=[];function j(){return S.pop()||b.ext_disjoint_timer_query.createQueryEXT()}function Q(pe){S.push(pe)}var U=[];function V(pe){var Ce=j();b.ext_disjoint_timer_query.beginQueryEXT(wh,Ce),U.push(Ce),se(U.length-1,U.length,pe)}function ie(){b.ext_disjoint_timer_query.endQueryEXT(wh)}function le(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var me=[];function fe(){return me.pop()||new le}function ye(pe){me.push(pe)}var Ae=[];function se(pe,Ce,te){var Pe=fe();Pe.startQueryIndex=pe,Pe.endQueryIndex=Ce,Pe.sum=0,Pe.stats=te,Ae.push(Pe)}var be=[],N=[];function X(){var pe,Ce,te=U.length;if(te!==0){N.length=Math.max(N.length,te+1),be.length=Math.max(be.length,te+1),be[0]=0,N[0]=0;var Pe=0;for(pe=0,Ce=0;Ce<U.length;++Ce){var ne=U[Ce];b.ext_disjoint_timer_query.getQueryObjectEXT(ne,Wx)?(Pe+=b.ext_disjoint_timer_query.getQueryObjectEXT(ne,jx),Q(ne)):U[pe++]=ne,be[Ce+1]=Pe,N[Ce+1]=pe}for(U.length=pe,pe=0,Ce=0;Ce<Ae.length;++Ce){var we=Ae[Ce],re=we.startQueryIndex,_e=we.endQueryIndex;we.sum+=be[_e]-be[re];var We=N[re],Ze=N[_e];Ze===We?(we.stats.gpuTime+=we.sum/1e6,ye(we)):(we.startQueryIndex=We,we.endQueryIndex=Ze,Ae[pe++]=we)}Ae.length=pe}}return{beginQuery:V,endQuery:ie,pushScopeStats:se,update:X,getNumPendingQueries:function(){return U.length},clear:function(){S.push.apply(S,U);for(var pe=0;pe<S.length;pe++)b.ext_disjoint_timer_query.deleteQueryEXT(S[pe]);U.length=0,S.length=0},restore:function(){U.length=0,S.length=0}}},Xx=16384,Yx=256,Kx=1024,Qx=34962,_h="webglcontextlost",Eh="webglcontextrestored",Mh=1,Zx=2,Jx=3;function Ah(l,b){for(var S=0;S<l.length;++S)if(l[S]===b)return S;return-1}function ey(l){var b=oe(l);if(!b)return null;var S=b.gl,j=S.getContextAttributes(),Q=S.isContextLost(),U=ze(S,b);if(!U)return null;var V=Bo(),ie=Bx(),le=U.extensions,me=Vx(S,le),fe=Nn(),ye=S.drawingBufferWidth,Ae=S.drawingBufferHeight,se={tick:0,time:0,viewportWidth:ye,viewportHeight:Ae,framebufferWidth:ye,framebufferHeight:Ae,drawingBufferWidth:ye,drawingBufferHeight:Ae,pixelRatio:b.pixelRatio},be={},N={elements:null,primitive:4,count:-1,offset:0,instances:-1},X=D2(S,le),pe=tg(S,ie,b,te),Ce=dx(S,le,X,ie,pe);function te(Ve){return Ce.destroyBuffer(Ve)}var Pe=dg(S,le,pe,ie),ne=gx(S,V,ie,b),we=Bg(S,le,X,function(){We.procs.poll()},se,ie,b),re=jg(S,le,X,ie,b),_e=ux(S,le,X,we,re,ie),We=Ux(S,V,le,X,pe,Pe,we,_e,be,Ce,ne,N,se,me,b),Ze=bx(S,_e,We.procs.poll,se,j,le,X),Te=We.next,ge=S.canvas,ee=[],Ke=[],at=[],qe=[b.onDestroy],ht=null;function et(){if(ee.length===0){me&&me.update(),ht=null;return}ht=un.next(et),Or();for(var Ve=ee.length-1;Ve>=0;--Ve){var pt=ee[Ve];pt&&pt(se,null,0)}S.flush(),me&&me.update()}function lt(){!ht&&ee.length>0&&(ht=un.next(et))}function Tt(){ht&&(un.cancel(et),ht=null)}function gr(Ve){Ve.preventDefault(),Q=!0,Tt(),Ke.forEach(function(pt){pt()})}function Ar(Ve){S.getError(),Q=!1,U.restore(),ne.restore(),pe.restore(),we.restore(),re.restore(),_e.restore(),Ce.restore(),me&&me.restore(),We.procs.refresh(),lt(),at.forEach(function(pt){pt()})}ge&&(ge.addEventListener(_h,gr,!1),ge.addEventListener(Eh,Ar,!1));function mt(){ee.length=0,Tt(),ge&&(ge.removeEventListener(_h,gr),ge.removeEventListener(Eh,Ar)),ne.clear(),_e.clear(),re.clear(),we.clear(),Pe.clear(),pe.clear(),Ce.clear(),me&&me.clear(),qe.forEach(function(Ve){Ve()})}function _r(Ve){y(!!Ve,"invalid args to regl({...})"),y.type(Ve,"object","invalid args to regl({...})");function pt(F){var R=t({},F);delete R.uniforms,delete R.attributes,delete R.context,delete R.vao,"stencil"in R&&R.stencil.op&&(R.stencil.opBack=R.stencil.opFront=R.stencil.op,delete R.stencil.op);function z(I){if(I in R){var M=R[I];delete R[I],Object.keys(M).forEach(function(k){R[I+"."+k]=M[k]})}}return z("blend"),z("depth"),z("cull"),z("stencil"),z("polygonOffset"),z("scissor"),z("sample"),"vao"in F&&(R.vao=F.vao),R}function wt(F,R){var z={},I={};return Object.keys(F).forEach(function(M){var k=F[M];if(Ir.isDynamic(k)){I[M]=Ir.unbox(k,M);return}else if(R&&Array.isArray(k)){for(var _=0;_<k.length;++_)if(Ir.isDynamic(k[_])){I[M]=Ir.unbox(k,M);return}}z[M]=k}),{dynamic:I,static:z}}var fr=wt(Ve.context||{},!0),Qn=wt(Ve.uniforms||{},!0),na=wt(Ve.attributes||{},!1),A=wt(pt(Ve),!1),W={gpuTime:0,cpuTime:0,count:0},$=We.compile(A,na,Qn,fr,W),Ne=$.draw,dt=$.batch,E=$.scope,x=[];function L(F){for(;x.length<F;)x.push(null);return x}function O(F,R){var z;if(Q&&y.raise("context lost"),typeof F=="function")return E.call(this,null,F,0);if(typeof R=="function")if(typeof F=="number")for(z=0;z<F;++z)E.call(this,null,R,z);else if(Array.isArray(F))for(z=0;z<F.length;++z)E.call(this,F[z],R,z);else return E.call(this,F,R,0);else if(typeof F=="number"){if(F>0)return dt.call(this,L(F|0),F|0)}else if(Array.isArray(F)){if(F.length)return dt.call(this,F,F.length)}else return Ne.call(this,F)}return t(O,{stats:W,destroy:function(){$.destroy()}})}var Wt=_e.setFBO=_r({framebuffer:Ir.define.call(null,Mh,"framebuffer")});function xr(Ve,pt){var wt=0;We.procs.poll();var fr=pt.color;fr&&(S.clearColor(+fr[0]||0,+fr[1]||0,+fr[2]||0,+fr[3]||0),wt|=Xx),"depth"in pt&&(S.clearDepth(+pt.depth),wt|=Yx),"stencil"in pt&&(S.clearStencil(pt.stencil|0),wt|=Kx),y(!!wt,"called regl.clear with no buffer specified"),S.clear(wt)}function Er(Ve){if(y(typeof Ve=="object"&&Ve,"regl.clear() takes an object as input"),"framebuffer"in Ve)if(Ve.framebuffer&&Ve.framebuffer_reglType==="framebufferCube")for(var pt=0;pt<6;++pt)Wt(t({framebuffer:Ve.framebuffer.faces[pt]},Ve),xr);else Wt(Ve,xr);else xr(null,Ve)}function Mr(Ve){y.type(Ve,"function","regl.frame() callback must be a function"),ee.push(Ve);function pt(){var wt=Ah(ee,Ve);y(wt>=0,"cannot cancel a frame twice");function fr(){var Qn=Ah(ee,fr);ee[Qn]=ee[ee.length-1],ee.length-=1,ee.length<=0&&Tt()}ee[wt]=fr}return lt(),{cancel:pt}}function Lr(){var Ve=Te.viewport,pt=Te.scissor_box;Ve[0]=Ve[1]=pt[0]=pt[1]=0,se.viewportWidth=se.framebufferWidth=se.drawingBufferWidth=Ve[2]=pt[2]=S.drawingBufferWidth,se.viewportHeight=se.framebufferHeight=se.drawingBufferHeight=Ve[3]=pt[3]=S.drawingBufferHeight}function Or(){se.tick+=1,se.time=it(),Lr(),We.procs.poll()}function lr(){we.refresh(),Lr(),We.procs.refresh(),me&&me.update()}function it(){return(Nn()-fe)/1e3}lr();function Nr(Ve,pt){y.type(pt,"function","listener callback must be a function");var wt;switch(Ve){case"frame":return Mr(pt);case"lost":wt=Ke;break;case"restore":wt=at;break;case"destroy":wt=qe;break;default:y.raise("invalid event, must be one of frame,lost,restore,destroy")}return wt.push(pt),{cancel:function(){for(var fr=0;fr<wt.length;++fr)if(wt[fr]===pt){wt[fr]=wt[wt.length-1],wt.pop();return}}}}var Lt=t(_r,{clear:Er,prop:Ir.define.bind(null,Mh),context:Ir.define.bind(null,Zx),this:Ir.define.bind(null,Jx),draw:_r({}),buffer:function(Ve){return pe.create(Ve,Qx,!1,!1)},elements:function(Ve){return Pe.create(Ve,!1)},texture:we.create2D,cube:we.createCube,renderbuffer:re.create,framebuffer:_e.create,framebufferCube:_e.createCube,vao:Ce.createVAO,attributes:j,frame:Mr,on:Nr,limits:X,hasExtension:function(Ve){return X.extensions.indexOf(Ve.toLowerCase())>=0},read:Ze,destroy:mt,_gl:S,_refresh:lr,poll:function(){Or(),me&&me.update()},now:it,stats:ie});return b.onDone(null,Lt),Lt}return ey})});var oa=de((n4,Wh)=>{"use strict";var so=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],co=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Zn=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],l0=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Qi=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],sl=e=>Math.hypot(e[0],e[1],e[2]),An=e=>{let t=sl(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function Ya(e,t){let r=e.length-1,n=Math.min(Math.max(t,0),1)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],h=[0,0,0];for(let p=0;p<3;p++)h[p]=.5*(2*s[p]+(-i[p]+c[p])*a+(2*i[p]-5*s[p]+4*c[p]-f[p])*a*a+(-i[p]+3*s[p]-3*c[p]+f[p])*a*a*a);return h}function uy(e,t){return Ya(e.map(r=>[r,0,0]),t)[0]}function hy(e,t,r,n){let o={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];o.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},o.restore=()=>{i=s.pop()};let c=(u,m)=>{let v=new Array(9);for(let d=0;d<3;d++)for(let g=0;g<3;g++)v[d*3+g]=u[d*3]*m[g]+u[d*3+1]*m[3+g]+u[d*3+2]*m[6+g];return v},f=u=>[i.r[0]*u[0]+i.r[1]*u[1]+i.r[2]*u[2],i.r[3]*u[0]+i.r[4]*u[1]+i.r[5]*u[2],i.r[6]*u[0]+i.r[7]*u[1]+i.r[8]*u[2]];o.translate=(u,m,v)=>{let d=f([u,m,v]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},o.scale=u=>{i.s*=u},o.rotateY=u=>{let m=Math.cos(u),v=Math.sin(u);i.r=c(i.r,[m,0,v,0,1,0,-v,0,m])},o.vert=(u,m,v)=>{let d=v||o.curMat,g=f(u),w=An(f(m));return e.push(g[0]*i.s+i.t[0],g[1]*i.s+i.t[1],g[2]*i.s+i.t[2]),t.push(w[0],w[1],w[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let h=u=>[e[u*3],e[u*3+1],e[u*3+2]],p=u=>[t[u*3],t[u*3+1],t[u*3+2]];return o.tri=(u,m,v)=>{let d=h(u),g=Qi(so(h(m),d),so(h(v),d)),w=co(co(p(u),p(m)),p(v));l0(g,w)<0?r.push(u,v,m):r.push(u,m,v)},o.box=(u,m,v,d,g,w,T)=>{let C=[[[u,m,v],[d,m,v],[u,g,v],[d,g,v],[0,0,-1]],[[d,m,w],[u,m,w],[d,g,w],[u,g,w],[0,0,1]],[[u,m,w],[u,m,v],[u,g,w],[u,g,v],[-1,0,0]],[[d,m,v],[d,m,w],[d,g,v],[d,g,w],[1,0,0]],[[u,g,v],[d,g,v],[u,g,w],[d,g,w],[0,1,0]],[[u,m,w],[d,m,w],[u,m,v],[d,m,v],[0,-1,0]]];for(let D of C){let q=o.vert(D[0],D[4],T),H=o.vert(D[1],D[4],T),ae=o.vert(D[2],D[4],T),ve=o.vert(D[3],D[4],T);o.tri(q,H,ae),o.tri(H,ve,ae)}},o.surface=(u,m,v,d)=>{d=d||{};let g=.001,w=q=>Math.min(1,Math.max(0,q)),T=[],C=[];for(let q=0;q<=m;q++){let H=[],ae=[];for(let ve=0;ve<=v;ve++){let J=q/m,Ee=ve/v,ue=u(J,Ee),Fe=Math.min(1-g,Math.max(g,J)),Ie=d.wrapV?Ee:Math.min(1-g,Math.max(g,Ee)),Re=so(u(w(Fe+g),Ie),u(w(Fe-g),Ie)),xe=d.wrapV?Ie+g:w(Ie+g),rt=d.wrapV?Ie-g:w(Ie-g),Xt=so(u(Fe,xe),u(Fe,rt)),ct=Qi(Re,Xt);sl(ct)<1e-14&&(ct=d.inside?so(ue,d.inside(J,Ee)):[0,1,0]),ct=An(ct),d.inside&&l0(ct,so(ue,d.inside(J,Ee)))<0&&(ct=Zn(ct,-1));let Ft=d.mat?d.mat(J,Ee,ue):null;H.push(o.vert(ue,ct,Ft)),d.double&&ae.push(o.vert(ue,Zn(ct,-1),Ft))}T.push(H),C.push(ae)}let D=q=>{for(let H=0;H<m;H++)for(let ae=0;ae<v;ae++){let ve=q[H][ae],J=q[H+1][ae],Ee=q[H][ae+1],ue=q[H+1][ae+1];o.tri(ve,J,Ee),o.tri(J,ue,Ee)}};D(T),d.double&&D(C)},o.ellipsoid=(u,m,v,d,g)=>{g=g||{};let w=g.warp||null;o.surface((T,C)=>{let D=T*Math.PI,q=C*Math.PI*2,H=w?w(T,C):1;return[u[0]+m[0]*H*Math.sin(D)*Math.cos(q),u[1]+m[1]*H*Math.cos(D),u[2]+m[2]*H*Math.sin(D)*Math.sin(q)]},v||10,d||14,{wrapV:!0,inside:()=>u,mat:g.mat})},o.tube=(u,m,v,d,g)=>{g=g||{};let w=40,T=[],C=null;for(let H=0;H<=w;H++){let ae=H/w,ve=Ya(u,Math.max(0,ae-.01)),J=Ya(u,Math.min(1,ae+.01)),Ee=An(so(J,ve)),ue;if(C)ue=An(so(C,Zn(Ee,l0(C,Ee))));else{let Fe=Math.abs(Ee[1])<.9?[0,1,0]:[1,0,0];ue=An(Qi(Ee,Fe))}T.push({N:ue,B:An(Qi(Ee,ue))}),C=ue}let D=H=>{let ae=Math.min(Math.max(H,0),1)*w,ve=Math.min(w-1,Math.floor(ae)),J=ae-ve,Ee=T[ve],ue=T[ve+1];return{N:An(co(Zn(Ee.N,1-J),Zn(ue.N,J))),B:An(co(Zn(Ee.B,1-J),Zn(ue.B,J)))}},q=g.squash||[1,1];o.surface((H,ae)=>{let ve=Ya(u,H),J=D(H),Ee=m(H),ue=ae*Math.PI*2;return co(ve,co(Zn(J.N,Math.cos(ue)*Ee*q[0]),Zn(J.B,Math.sin(ue)*Ee*q[1])))},v||12,d||8,{wrapV:!0,inside:H=>Ya(u,H),mat:g.mat})},o.lathe=(u,m,v,d,g)=>{g=g||{};let w=[];for(let T=0;T<u.length-1;T++){let C=u[T+1][0]-u[T][0],D=u[T+1][1]-u[T][1];w.push(An([D,-C,0]))}for(let T=0;T<u.length-1;T++){let C=u[T],D=u[T+1],q=T===0||C[2]===1,H=T===u.length-2||D[2]===1,ae=q?w[T]:An(co(w[T-1],w[T])),ve=H?w[T]:An(co(w[T],w[T+1])),J=[],Ee=[];for(let ue=0;ue<=d;ue++){let Fe=ue/d*Math.PI*2,Ie=Math.cos(Fe),Re=Math.sin(Fe),xe=g.mat?g.mat(Fe,C[1]):null,rt=g.mat?g.mat(Fe,D[1]):null;J.push(o.vert([m+C[0]*Ie,C[1],v+C[0]*Re],[ae[0]*Ie,ae[1],ae[0]*Re],xe)),Ee.push(o.vert([m+D[0]*Ie,D[1],v+D[0]*Re],[ve[0]*Ie,ve[1],ve[0]*Re],rt))}for(let ue=0;ue<d;ue++)o.tri(J[ue],J[ue+1],Ee[ue]),o.tri(J[ue+1],Ee[ue+1],Ee[ue])}},o}Wh.exports={createBuilder:hy,catmull:Ya,curve1:uy,sub:so,add:co,mul:Zn,dot:l0,cross:Qi,norm:An,len:sl}});var Kh=de((o4,Yh)=>{"use strict";var{norm:f0,add:u0,mul:To,sub:dy,cross:Vh}=oa(),Xh=Math.PI*2,py=(e,t,r)=>{let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)};function my(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function vy(e,t,r,n,o,a){let i=(u,m)=>[7,u*a,m];e.curMat=[0,0,0],e.box(t-a*1.36,n,r-a*1.36,t+a*1.36,n+.22,r+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,r,56,{mat:i});let s=n+.55,c=o-s,f=20,h=6,p=a*.075;return e.surface((u,m)=>{let v=s+u*c,d=a*(.96-.12*u),g=m*Xh,w=m*f%1,T=d-p*4*w*(1-w);return[t+T*Math.cos(g),v,r+T*Math.sin(g)]},10,f*h,{wrapV:!0,inside:u=>[t,s+u*c,r],mat:(u,m)=>[7,m*Xh*a,s+u*c]}),e.lathe([[a*.8,o-.02,1],[a*.9,o+.02],[a*.9,o+.07,1],[a*.82,o+.09,1],[a*.86,o+.13],[a*1.06,o+.2],[a*1.22,o+.28],[a*1.28,o+.33,1]],t,r,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,o+.33,r-a*1.42,t+a*1.42,o+.53,r+a*1.42),o+.53}function gy(e,t,r){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,r*.14,1],[t*1.04,r*.14,1],[t*1.04,r*.2],[t*.97,r*.26,1],[t*.95,r*.26,1],[t*.95,r*.8,1],[t*.98,r*.8,1],[t*1.03,r*.86],[t*1.05,r*.92,1],[t*1.05,r,1],[t*.5,r,1],[0,r]],0,0,72)}function xy(e,t,r,n,o){e.save(),e.translate(t,0,r),gy(e,n,o),e.restore()}function yy(e,t,r,n,o,a){let i=my(n),s=a?f0([a[0],0,a[1]]):null;e.save(),e.translate(t,0,r),e.scale(o||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let h=0;h<c;h++){let p=h>=c-2,u=h*2.399963+i()*.5,m=[Math.cos(u),0,Math.sin(u)],v=[-Math.sin(u),0,Math.cos(u)],d=h*.618%1,g=p?.06+i()*.06:.12+.62*d,w=1;if(s){let ct=m[0]*s[0]+m[2]*s[2];w=.25+.75*py(-.7,.5,ct),g*=w}let T=p?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,C=p?1+i()*.2:.95+i()*.28,D=p?.055:.215+i()*.05,q=.04+i()*.05,H=[m[0]*q,f,m[2]*q],ae=[H[0]+m[0]*Math.sin(g)*T*.92,H[1]+Math.cos(g)*T,H[2]+m[2]*Math.sin(g)*T*.92],ve=[H[0]+m[0]*Math.sin(g*.5)*T*.45,H[1]+T*.5,H[2]+m[2]*Math.sin(g*.5)*T*.45];e.curMat=[4,0,0],e.tube([H,ve,ae],ct=>.02-.008*ct,8,7);let J=24,Ee=g*.9+.05,ue=g+(p?.12:(.95+.45*d)*(.35+.65*w)),Fe=[ae],Ie=[],Re=ae;for(let ct=0;ct<J;ct++){let Ft=ct/J,Gt=Ee+(ue-Ee)*Ft*Ft,ir=[m[0]*Math.sin(Gt),Math.cos(Gt),m[2]*Math.sin(Gt)];Ie.push(ir),Re=u0(Re,To(ir,C/J)),Fe.push(Re)}Ie.push(Ie[Ie.length-1]);let xe=ct=>{let Ft=ct*J,Gt=Math.min(J-1,Math.floor(Ft)),ir=Ft-Gt;return u0(To(Fe[Gt],1-ir),To(Fe[Gt+1],ir))},rt=ct=>{let Ft=ct*J,Gt=Math.min(J,Math.floor(Ft)),ir=Math.min(J,Gt+1),Zt=Ft-Gt;return f0(u0(To(Ie[Gt],1-Zt),To(Ie[ir],Zt)))},Xt=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((ct,Ft)=>{let Gt=Ft*2-1,ir=xe(ct),Zt=rt(ct),Pn=Xt*ct,pr=u0(To(v,Math.cos(Pn)),To(Vh(Zt,v),Math.sin(Pn)));pr=f0(dy(pr,To(Zt,pr[0]*Zt[0]+pr[1]*Zt[1]+pr[2]*Zt[2])));let Rr=f0(Vh(pr,Zt)),At=D*Math.pow(Math.sin(Math.PI*Math.pow(ct,.72)),.85),De=.3*At*Math.abs(Gt)+.012*Math.sin(ct*40+Gt*2)*Math.abs(Gt)*(p?0:1),ft=-.1*At*Gt*Gt*Gt*Gt,Je=De+ft;return[ir[0]+pr[0]*Gt*At+Rr[0]*Je,ir[1]+pr[1]*Gt*At+Rr[1]*Je,ir[2]+pr[2]*Gt*At+Rr[2]*Je]},14,8,{double:!0,mat:(ct,Ft)=>[2,Ft*2-1,ct]})}e.restore()}Yh.exports={addFlutedColumn:vy,addStatue:xy,addPlant:yy}});var aa=de((a4,ed)=>{"use strict";var ce={xc:7,r:2.5,spring:4.7};ce.x0=ce.xc-ce.r;ce.x1=ce.xc+ce.r;ce.top=ce.spring+ce.r;var Qr=.06,tr=.1,Qh=.08,h0=ce.r,d0=[ce.x0+h0/3,ce.x0+2*h0/3,ce.xc+h0/3,ce.xc+2*h0/3],Ka=.28,cl=[.95,1.65,2.35,3.05,3.75],Zh=[1.05,1.8],Zi=[8,0,0],mn=[0,0,0];function Tn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function Qa(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function p0(e,t,r,n,o,a,i=48,s=0,c=Math.PI){let f=(h,p,u)=>[ce.xc+p*Math.cos(h),ce.spring+p*Math.sin(h),u];for(let h=0;h<i;h++){let p=s+(c-s)*h/i,u=s+(c-s)*(h+1)/i,m=(p+u)/2;Qa(e,f(p,t,o),f(u,t,o),f(u,r,o),f(p,r,o),[0,0,1],a),Qa(e,f(p,r,n),f(u,r,n),f(u,t,n),f(p,t,n),[0,0,-1],a),Qa(e,f(p,t,n),f(u,t,n),f(u,t,o),f(p,t,o),[-Math.cos(m),-Math.sin(m),0],a),Qa(e,f(u,r,n),f(p,r,n),f(p,r,o),f(u,r,o),[Math.cos(m),Math.sin(m),0],a)}}function by(e){let n=a=>[ce.xc+ce.r*Math.cos(a),ce.spring+ce.r*Math.sin(a)],o=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?ce.r/Math.abs(i):1/0,f=s>1e-6?(8-ce.spring)/s:1/0,h=Math.min(c,f);return[Math.min(ce.x1,Math.max(ce.x0,ce.xc+i*h)),Math.min(8,ce.spring+s*h)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),h=o(i),p=o(s);for(let[m,v]of[[.35,1],[-.35,-1]])Qa(e,[c[0],c[1],m],[f[0],f[1],m],[p[0],p[1],m],[h[0],h[1],m],[0,0,v],mn);let u=(i+s)/2;Qa(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],mn)}}function wy(e){Tn(e,-.35,0,-.35,ce.x0,8,.35,mn),Tn(e,ce.x1,0,-.35,14+.35,8,.35,mn),by(e),Jh(e)}function Jh(e){Tn(e,ce.x0-.32,.3,.35,ce.x0,ce.spring,.35+.07,mn),Tn(e,ce.x1,.3,.35,ce.x1+.32,ce.spring,.35+.07,mn),Tn(e,ce.x0-.32-.05,0,.35,ce.x0,.3,.35+.07+.04,mn),Tn(e,ce.x1,0,.35,ce.x1+.32+.05,.3,.35+.07+.04,mn),Tn(e,ce.x0-.32-.06,ce.spring-.12,.35,ce.x0,ce.spring,.35+.07+.05,mn),Tn(e,ce.x1,ce.spring-.12,.35,ce.x1+.32+.06,ce.spring,.35+.07+.05,mn),p0(e,ce.r,ce.r+.32,.35,.35+.07,mn),p0(e,ce.r+.32,ce.r+.32+.06,.35,.35+.07+.03,mn),Tn(e,ce.xc-.22,ce.top-.08,.35,ce.xc+.22,ce.top+.32+.12,.35+.07+.06,mn)}function _y(e,t){t=t||"all";let r=t==="all",n=r||t==="fixed",o=-Qh/2,a=Qh/2,i=(u,m,v,d,g=0)=>Tn(e,u-g,m,o,v+g,d,a,Zi),s=u=>ce.spring+Math.sqrt(Math.max(0,ce.r*ce.r-(u-ce.xc)*(u-ce.xc))),c=t==="right"?ce.xc:ce.x0,f=t==="left"?ce.xc:ce.x1,h=u=>r||t==="left"&&u<ce.xc||t==="right"&&u>ce.xc,p=r?null:ce.spring-.06;if(n){i(ce.x0,0,ce.x0+tr,ce.spring),i(ce.x1-tr,0,ce.x1,ce.spring),p0(e,ce.r-tr,ce.r,o,a,Zi,64),i(ce.x0,0,ce.x1,.05),i(ce.x0,ce.spring-.06,ce.x1,ce.spring+.06);for(let u of Zh)p0(e,u-Qr/2,u+Qr/2,o,a,Zi,48)}if(r){i(ce.x0,0,ce.x1,Ka),i(ce.xc-tr/2,0,ce.xc+tr/2,ce.top-tr*.5);for(let u of d0)i(u-Qr/2,Ka,u+Qr/2,s(u)-tr*.5);for(let u of cl)i(ce.x0,u-Qr/2,ce.x1,u+Qr/2)}else if(t==="fixed"){i(ce.xc-tr/2,ce.spring+.06,ce.xc+tr/2,ce.top-tr*.5);for(let u of d0)i(u-Qr/2,ce.spring+.06,u+Qr/2,s(u)-tr*.5)}else{let u=t==="left"?ce.x0+tr:ce.x1-tr;i(Math.min(u,u+(t==="left"?tr*.8:-tr*.8)),.05,Math.max(u,u+(t==="left"?tr*.8:-tr*.8)),p),i(c,.05,f,Ka),i(c,p-.07,f,p);let m=t==="left"?ce.xc-tr/2:ce.xc;i(m,.05,m+tr/2,p);for(let v of d0)h(v)&&i(v-Qr/2,Ka,v+Qr/2,p-.07);for(let v of cl)i(c,v-Qr/2,f,v+Qr/2)}for(let u of[-1,1]){let m=ce.xc+u*.16;h(m)&&(Tn(e,m-.02,1.05,a,m+.02,1.13,a+.06,Zi),Tn(e,m-(u>0?0:.14),1.07,a+.05,m+(u>0?.14:0),1.11,a+.08,Zi))}}function Ey(e){e=e||"all";let t=[],r=0,{x0:n,x1:o,xc:a,r:i,spring:s}=ce;if(e!=="fixed"){let f=e==="right"?a:n,h=e==="left"?a:o;if(t.push([f,0,r],[h,0,r],[h,s,r],[f,0,r],[h,s,r],[f,s,r]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let h=Math.PI*f/c,p=Math.PI*(f+1)/c;t.push([a,s,r],[a+i*Math.cos(h),s+i*Math.sin(h),r],[a+i*Math.cos(p),s+i*Math.sin(p),r])}return t}var Ot=e=>e.toFixed(4);function My(){let e=d0.map(n=>`vb = max(vb, barCover(abs(q.x - ${Ot(n)}), ${Ot(Qr/2)}, soft));`).join(`
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
	}`}ed.exports={addEntranceWall:wy,addSurround:Jh,addFrames:_y,glassPanes:Ey,doorLightGLSL:My,DOOR:ce,WALL:.35}});var Ja=de((i4,id)=>{"use strict";var sa=1.1583333333333334,ca=(13.05-8*.16)/9,fl=sa+.16,ul=ca+.16,lo=14/2-7.75/2,Sn=15,Ji=lo+7.75,So=Sn+13.05,vn=.3,fo={y:8+.18,inset:.15},ia={y:8+.36,inset:vn},hl=8+.2,m0=8+.62,dl=8+.9,pl=.016,od=.28,ad=.66,Ay=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>r/t)})(),Ty=[9,0,0],Fr=[10,0,0];function Za(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function Zr(e,t,r,n,o,a,i){Za(e,[t,a,r],[n,a,r],[n,a,o],[t,a,o],[0,-1,0],i)}function ll(e,t,r,n,o,a,i,s){Za(e,[t,a,r],[n,a,r],[n,i,r],[t,i,r],[0,0,1],s),Za(e,[n,a,o],[t,a,o],[t,i,o],[n,i,o],[0,0,-1],s),Za(e,[t,a,o],[t,a,r],[t,i,r],[t,i,o],[1,0,0],s),Za(e,[n,a,r],[n,a,o],[n,i,o],[n,i,r],[-1,0,0],s)}function td(e,t,r,n,o){Zr(e,t[0],t[1],t[2],r[1],n,o),Zr(e,t[0],r[3],t[2],t[3],n,o),Zr(e,t[0],r[1],r[0],r[3],n,o),Zr(e,r[2],r[1],t[2],r[3],n,o)}var rd=e=>lo+e*fl,nd=e=>Sn+e*ul;function Sy(e,t,r=48){let n=[lo-vn,Sn-vn,Ji+vn,So+vn],o=(f,h)=>[f[0]+h,f[1]+h,f[2]-h,f[3]-h],a=o(n,fo.inset),i=o(n,ia.inset);Zr(e,0,0,14,n[1],8,t),Zr(e,0,n[3],14,r,8,t),Zr(e,0,n[1],n[0],n[3],8,t),Zr(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],Fr),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,Fr),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],Fr),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],Fr),ll(e,...n.slice(0,2),...n.slice(2),8,fo.y,Fr),td(e,n,a,fo.y,Fr),ll(e,...a.slice(0,2),...a.slice(2),fo.y,ia.y,Fr),td(e,a,i,ia.y,Fr);for(let f=1;f<6;f++){let h=rd(f)-.16;e.box(h,hl,Sn,h+.16,ia.y,So,Fr)}for(let f=1;f<9;f++){let h=nd(f)-.16;e.box(lo,hl,h,Ji,ia.y,h+.16,Fr)}for(let f=0;f<9;f++)for(let h=0;h<6;h++){let p=rd(h),u=nd(f);ll(e,p,u,p+sa,u+ca,ia.y,dl,Fr),Zr(e,p,u,p+sa,u+ca,dl,Ty),ky(e,p+sa/2,u+ca/2,sa/2,ca/2)}}function ky(e,t,r,n,o){let a=m0,i=pl;Zr(e,t-n,r-i,t+n,r+i,a,Fr),Zr(e,t-i,r-o,t+i,r+o,a,Fr);for(let s of[1,-1]){let c=Math.hypot(n,o),f=n/c,h=s*o/c,p=-h*i,u=f*i;Za(e,[t-f*c+p,a,r-h*c+u],[t+f*c+p,a,r+h*c+u],[t+f*c-p,a,r+h*c-u],[t-f*c-p,a,r-h*c-u],[0,-1,0],Fr)}for(let s of[od,ad]){let c=s*n,f=s*o;Zr(e,t-c-i,r-f-i,t+c+i,r-f+i,a,Fr),Zr(e,t-c-i,r+f-i,t+c+i,r+f+i,a,Fr),Zr(e,t-c-i,r-f+i,t-c+i,r+f-i,a,Fr),Zr(e,t+c-i,r-f+i,t+c+i,r+f-i,a,Fr)}}var ut=e=>e.toFixed(4);function Ly(){return`
	const vec3 SKY_SUN = vec3(${Ay.map(ut).join(", ")});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${ut(lo)}, ${ut(Sn)});
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
		vec2 q1 = (p + L * ((${ut(fo.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${ut(hl)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${ut(ia.y)} - p.y) / L.y)).xz;
		float tG = (${ut(m0)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${ut(dl)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${ut(lo-vn)}, ${ut(Sn-vn)}, ${ut(Ji+vn)}, ${ut(So+vn)}), soft)
		           * rectOpen(q1, vec4(${ut(lo-vn+fo.inset)}, ${ut(Sn-vn+fo.inset)}, ${ut(Ji+vn-fo.inset)}, ${ut(So+vn-fo.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${ut(lo)}, ${ut(Sn)});
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
		float open = rectOpen(q, vec4(${ut(lo)}, ${ut(Sn)}, ${ut(Ji)}, ${ut(So)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${ut(Sn-3)}, ${ut(Sn+2)}, p.z)
		        * (1.0 - smoothstep(${ut(So-2)}, ${ut(So+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${ut(7.75/2)}, ${ut(14/2)}, abs(p.x - ${ut(14/2)}));
		return z * x;
	}`}id.exports={addSkylight:Sy,skylightGLSL:Ly,Z_START:Sn,Z_END:So,GLASS_Y:m0,HEIGHT:8}});var gn=de((s4,ud)=>{"use strict";var ti=aa(),xl=8,rr=.35,ke={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:xl},sd=(ke.z1-ke.z0)/2,ml=ke.crown-ke.spring,gl=(ml*ml+sd*sd)/(2*ml),yl=ke.crown-gl;function ei(e){let t=e-ke.zc;return yl+Math.sqrt(Math.max(0,gl*gl-t*t))}var Ye={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},qn=Array.from({length:Ye.count},(e,t)=>Ye.first+t*Ye.pitch),ld=qn.slice(1).map(e=>e-Ye.pitch/2),zy=[qn[0],qn[2],qn[4]],g0=[qn[1],qn[3]],on={r:1.3,sill:.62,spring:3.3},qt=[0,0,0],es=[11,0,0],ko=[10,0,0],ts=[8,0,0];function zr(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function an(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function rs(e,t){let{u0:r,u1:n,w0:o,w1:a,top:i,holes:s,mat:c}=t,f=new Set([r,n]);for(let d of s){f.add(d.u0),f.add(d.u1);let g=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let w=1;w<g;w++)f.add(d.u0+(d.u1-d.u0)*w/g)}for(let d of t.cuts||[])f.add(d);let h=t.topStep||.5;for(let d=r;d<n;d+=h)f.add(d);let p=[...f].filter(d=>d>=r-1e-9&&d<=n+1e-9).sort((d,g)=>d-g),u=(d,g)=>d.bot?d.bot(g):d.bottom,m=(d,g)=>{let w=i(d),T=g.map(q=>[Math.max(0,u(q,d)),Math.min(q.head(d),w)]).filter(q=>q[1]>q[0]).sort((q,H)=>q[0]-H[0]),C=[],D=0;for(let q of T)q[0]>D+1e-6&&C.push([D,q[0]]),D=Math.max(D,q[1]);return w>D+1e-6&&C.push([D,w]),C},v=(d,g,w)=>[d,g,w];for(let d=0;d<p.length-1;d++){let g=p[d],w=p[d+1],T=(g+w)/2,C=s.filter(J=>T>J.u0&&T<J.u1),D=C.length?Math.max(g,Math.max(...C.map(J=>J.u0))+1e-7):g,q=C.length?Math.min(w,Math.min(...C.map(J=>J.u1))-1e-7):w,H=m(D,C),ae=m(q,C),ve=Math.min(H.length,ae.length);for(let J=0;J<ve;J++){let[Ee,ue]=H[J],[Fe,Ie]=ae[J];ue-Ee<1e-6&&Ie-Fe<1e-6||(zr(e,v(g,Ee,a),v(w,Fe,a),v(w,Ie,a),v(g,ue,a),[0,0,1],c),t.frontOnly||zr(e,v(w,Fe,o),v(g,Ee,o),v(g,ue,o),v(w,Ie,o),[0,0,-1],c))}}t.noEnds||(zr(e,v(r,0,o),v(r,0,a),v(r,i(r),a),v(r,i(r),o),[-1,0,0],c),zr(e,v(n,0,a),v(n,0,o),v(n,i(n),o),v(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let g=d.mat||t.revealMat||c,w=Math.max(0,u(d,d.u0+1e-7)),T=Math.max(0,u(d,d.u1-1e-7)),C=Math.min(d.head(d.u0+1e-7),i(d.u0)),D=Math.min(d.head(d.u1-1e-7),i(d.u1));C>w+1e-6&&zr(e,v(d.u0,w,a),v(d.u0,w,o),v(d.u0,C,o),v(d.u0,C,a),[1,0,0],g),D>T+1e-6&&zr(e,v(d.u1,T,o),v(d.u1,T,a),v(d.u1,D,a),v(d.u1,D,o),[-1,0,0],g);let q=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let H=0;H<q;H++){let ae=d.u0+(d.u1-d.u0)*H/q,ve=d.u0+(d.u1-d.u0)*(H+1)/q,J=Math.max(ae,d.u0+1e-7),Ee=Math.min(ve,d.u1-1e-7),ue=Math.min(d.head(J),i(ae)),Fe=Math.min(d.head(Ee),i(ve));if(!(ue>=i(ae)-1e-6&&Fe>=i(ve)-1e-6)){let xe=ve-ae,rt=Fe-ue,Xt=Math.hypot(xe,rt)||1;zr(e,v(ae,ue,o),v(ve,Fe,o),v(ve,Fe,a),v(ae,ue,a),[rt/Xt,-xe/Xt,0],g)}let Ie=u(d,J),Re=u(d,Ee);if(Ie>1e-6||Re>1e-6){let xe=ve-ae,rt=Re-Ie,Xt=Math.hypot(xe,rt)||1;zr(e,v(ve,Re,o),v(ae,Ie,o),v(ae,Ie,a),v(ve,Re,a),[-rt/Xt,xe/Xt,0],g)}}}}var vl=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function Cy(e,t){let r=on.r,n=on.sill,o=on.spring,a=ke.z0,i=24,s=(m,v,d)=>[t+Math.cos(m)*v,d,a-Math.sin(m)*v];for(let m=0;m<i;m++){let v=Math.PI*m/i,d=Math.PI*(m+1)/i,g=[-Math.cos(v),0,Math.sin(v)],w=[-Math.cos(d),0,Math.sin(d)],T=[e.vert(s(v,r,n),g,qt),e.vert(s(d,r,n),w,qt),e.vert(s(d,r,o),w,qt),e.vert(s(v,r,o),g,qt)];e.tri(T[0],T[1],T[2]),e.tri(T[0],T[2],T[3])}let c=12,f=(m,v)=>[t+Math.cos(m)*Math.cos(v)*r,o+Math.sin(v)*r,a-Math.sin(m)*Math.cos(v)*r],h=(m,v)=>[-Math.cos(m)*Math.cos(v),-Math.sin(v),Math.sin(m)*Math.cos(v)];for(let m=0;m<i;m++)for(let v=0;v<c;v++){let d=Math.PI*m/i,g=Math.PI*(m+1)/i,w=Math.PI/2*v/c,T=Math.PI/2*(v+1)/c,C=[e.vert(f(d,w),h(d,w),ko),e.vert(f(g,w),h(g,w),ko),e.vert(f(g,T),h(g,T),ko),e.vert(f(d,T),h(d,T),ko)];e.tri(C[0],C[1],C[2]),e.tri(C[0],C[2],C[3])}for(let m=1;m<8;m++){let v=Math.PI*m/8,d=[];for(let g=0;g<=10;g++){let w=Math.PI/2*g/10*.97;d.push(f(v,w).map((T,C)=>T-h(v,w)[C]*.02))}e.tube(d,g=>.035*(1-g*.6),12,6,{mat:()=>ko})}let p=e.vert([t,n,a],[0,1,0],qt);for(let m=0;m<i;m++){let v=Math.PI*m/i,d=Math.PI*(m+1)/i;e.tri(p,e.vert(s(v,r,n),[0,1,0],qt),e.vert(s(d,r,n),[0,1,0],qt))}an(e,t-r-.12,n-.1,a,t+r+.12,n+.02,a+.12,qt),an(e,t-r-.16,n-.2,a,t+r+.16,n-.1,a+.07,qt);let u=.16;for(let m=0;m<i;m++){let v=Math.PI*m/i,d=Math.PI*(m+1)/i,g=(w,T,C)=>[t+Math.cos(w)*T,o+Math.sin(w)*T,C];zr(e,g(v,r,a+.05),g(d,r,a+.05),g(d,r+u,a+.05),g(v,r+u,a+.05),[0,0,1],qt),zr(e,g(v,r+u,a),g(d,r+u,a),g(d,r+u,a+.05),g(v,r+u,a+.05),[Math.cos((v+d)/2),Math.sin((v+d)/2),0],qt),zr(e,g(v,r,a),g(d,r,a),g(d,r,a+.05),g(v,r,a+.05),[-Math.cos((v+d)/2),-Math.sin((v+d)/2),0],qt)}for(let m of[-1,1]){let v=t+m*r,d=t+m*(r+u);an(e,v,n,a,d,o,a+.05,qt),an(e,v-m*.02,o-.12,a,d+m*.06,o,a+.09,qt)}an(e,t-.11,o+r-.04,a,t+.11,o+r+u+.1,a+.09,qt),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>qt})}var Ry=on.sill+.4,Iy=ke.z0-.62;function Py(e){zr(e,[14,0,ke.z0-rr],[ke.x1+rr,0,ke.z0-rr],[ke.x1+rr,0,ke.z1+rr],[14,0,ke.z1+rr],[0,1,0],qt),e.curMat=es,rs(e,{u0:14+rr,u1:ke.x1+2*rr,w0:ke.z0-2*rr,w1:ke.z0,top:()=>ke.spring,holes:g0.map(f=>({u0:f-on.r,u1:f+on.r,bottom:on.sill,head:vl(f,on.r,on.spring),noReveal:!0})),mat:es,cuts:[ke.x1]});for(let f of g0)Cy(e,f);e.save(),e.translate(0,0,ke.z1),e.rotateY(Math.PI),e.translate(-(ke.x1+2*rr),0,-2*rr);let t=f=>ke.x1+2*rr-f;rs(e,{u0:t(ke.x1+2*rr),u1:t(13.65),w0:0,w1:2*rr,top:()=>ke.spring,holes:qn.map(f=>({u0:t(f+Ye.halfW),u1:t(f-Ye.halfW),bottom:Ye.sill,head:vl(t(f),Ye.halfW,Ye.spring)})),mat:es,revealMat:qt}),e.restore(),e.save(),e.translate(ke.x1,0,0),e.rotateY(-Math.PI/2);let r=ti.DOOR,n=ke.zc,o=r.r;rs(e,{u0:ke.z0-2*rr,u1:ke.z1+2*rr,w0:-2*rr,w1:0,top:f=>f<ke.z0||f>ke.z1?ke.spring:ei(f),topStep:.15,holes:[{u0:n-o,u1:n+o,bottom:0,head:vl(n,o,r.spring)}],mat:es,revealMat:qt}),e.restore(),e.save(),e.translate(14+rr,0,0),e.rotateY(-Math.PI/2),rs(e,{u0:ke.z0,u1:ke.z1,w0:-0,w1:2*rr,top:()=>xl,topStep:.15,holes:[{u0:ke.z0,u1:ke.z1,bottom:0,head:f=>ei(f)}],mat:es,revealMat:qt}),e.restore();let a=14+rr,i=Math.ceil((ke.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let h=a+(ke.x1-a)*f/i,p=[];for(let u=0;u<=s;u++){let m=ke.z0+(ke.z1-ke.z0)*u/s,v=ei(m),d=[0,yl-v,ke.zc-m],g=Math.hypot(d[1],d[2]);p.push(e.vert([h,v,m],[0,d[1]/g,d[2]/g],ko))}c.push(p)}for(let f=0;f<i;f++)for(let h=0;h<s;h++)e.tri(c[f][h],c[f+1][h],c[f][h+1]),e.tri(c[f+1][h],c[f+1][h+1],c[f][h+1])}function cd(e,t,r,n){let a=[];for(let i=0;i<=32;i++){let s=ke.z0+(ke.z1-ke.z0)*i/32,c=ei(s),f=yl-c,h=ke.zc-s,p=Math.hypot(f,h),u=[c+f/p*n,s+h/p*n];a.push({y:c,z:s,iy:u[0],iz:u[1],n:[0,f/p,h/p]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];zr(e,[t-r,s.iy,s.iz],[t+r,s.iy,s.iz],[t+r,c.iy,c.iz],[t-r,c.iy,c.iz],s.n,qt),zr(e,[t-r,s.y,s.z],[t-r,s.iy,s.iz],[t-r,c.iy,c.iz],[t-r,c.y,c.z],[-1,0,0],qt),zr(e,[t+r,s.iy,s.iz],[t+r,s.y,s.z],[t+r,c.y,c.z],[t+r,c.iy,c.iz],[1,0,0],qt)}}function v0(e,t,r,n){let i=r,s=r+n*.16;an(e,t-.28,0,i,t+.28,ke.spring-.3,s,qt),an(e,t-.28-.06,0,i,t+.28+.06,.32,r+n*(.16+.05),qt),an(e,t-.28-.05,ke.spring-.3,i,t+.28+.05,ke.spring-.1,r+n*(.16+.05),qt),an(e,t-.28-.1,ke.spring-.1,i,t+.28+.1,ke.spring,r+n*(.16+.1),qt)}function Oy(e,t){let r=ei(ke.zc),n=[[0,r-.13,1],[.05,r-.125],[.12,r-.1],[.16,r-.06,1],[.22,r-.05],[.3,r-.075],[.4,r-.06],[.48,r-.03,1],[.55,r-.035],[.7,r-.025],[.82,r-.012,1],[.95,r+.03]];e.lathe(n,t,ke.zc,48,{mat:()=>ko});for(let o=0;o<8;o++){let a=o*Math.PI/4,i=t+Math.cos(a)*.32,s=ke.zc+Math.sin(a)*.32;e.save(),e.translate(i,r-.07,s),e.rotateY(-a),e.curMat=ko,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function Ny(e){e.curMat=qt;for(let[t,r]of[[ke.z0,1],[ke.z1,-1]])an(e,14.35,ke.spring-.12,t,ke.x1,ke.spring,t+r*.1,qt),an(e,14.35,ke.spring-.04,t,ke.x1,ke.spring+.05,t+r*.18,qt);for(let[t,r]of[[ke.z0,1],[ke.z1,-1]])an(e,14.35,0,t,ke.x1,.42,t+r*.12,qt),an(e,14.35,.42,t,ke.x1,.5,t+r*.07,qt);for(let t of ld)cd(e,t,.24,.16),v0(e,t,ke.z0,1),v0(e,t,ke.z1,-1);for(let t of[14.35+.28,ke.x1-.28])cd(e,t,.28,.22),v0(e,t,ke.z0,1),v0(e,t,ke.z1,-1);for(let t of qn)Oy(e,t)}function Fy(e){let t=ke.z1+rr,r=t-.04,n=t+.04,o=(s,c,f,h)=>an(e,s,c,r,f,h,n,ts),a=Ye.halfW,i=(s,c,f,h,p,u)=>{let m=(v,d,g)=>[s+d*Math.cos(v),Ye.spring+d*Math.sin(v),g];for(let v=0;v<u;v++){let d=h+(p-h)*v/u,g=h+(p-h)*(v+1)/u;zr(e,m(d,c,r),m(g,c,r),m(g,f,r),m(d,f,r),[0,0,-1],ts),zr(e,m(d,f,n),m(g,f,n),m(g,c,n),m(d,c,n),[0,0,1],ts)}};for(let s of qn){let c=s-a,f=s+a;o(c,Ye.sill,c+.07,Ye.spring),o(f-.07,Ye.sill,f,Ye.spring),o(c,Ye.sill,f,Ye.sill+.07),o(c,Ye.spring-.04,f,Ye.spring+.04);for(let p of[-.5,0,.5])o(s+p*a-.022,Ye.sill,s+p*a+.022,Ye.spring);let h=6;for(let p=1;p<h;p++){let u=Ye.sill+(Ye.spring-Ye.sill)*p/h;o(c,u-.02,f,u+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let p=1;p<6;p++){let u=Math.PI*p/6,m=Math.cos(u),v=Math.sin(u),d=.02,g=(w,T)=>[s+m*w-v*d*T,Ye.spring+v*w+m*d*T];zr(e,[...g(.44,-1),r],[...g(a-.05,-1),r],[...g(a-.05,1),r],[...g(.44,1),r],[0,0,-1],ts),zr(e,[...g(.44,1),n],[...g(a-.05,1),n],[...g(a-.05,-1),n],[...g(.44,-1),n],[0,0,1],ts)}}}function Gy(){let e=[],t=ke.z1+rr;for(let r of qn){let n=r-Ye.halfW,o=r+Ye.halfW;e.push([n,Ye.sill,t],[o,Ye.sill,t],[o,Ye.spring,t],[n,Ye.sill,t],[o,Ye.spring,t],[n,Ye.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([r,Ye.spring,t],[r+Ye.halfW*Math.cos(i),Ye.spring+Ye.halfW*Math.sin(i),t],[r+Ye.halfW*Math.cos(s),Ye.spring+Ye.halfW*Math.sin(s),t])}}return e}function fd(e,t){e.save(),e.translate(ke.x1+rr,0,ke.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function Dy(e){fd(e,()=>{ti.addSurround(e),ti.addFrames(e,"fixed")})}function $y(e){return ti.glassPanes(e||"fixed").map(([r,n,o])=>[ke.x1+rr-o,n,ke.zc-7+r])}function qy(e){Py(e),Ny(e),Fy(e),Dy(e),e.curMat=[0,0,0]}var Hy={x:ke.x1+rr,zLo:ke.zc-ti.DOOR.r,zHi:ke.zc+ti.DOOR.r},Et=e=>e.toFixed(4);function Uy(){return`
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
	}`}ud.exports={wallWithHoles:rs,windowLightGLSL:Uy,addWing:qy,windowGlass:Gy,farDoorGlass:$y,atFarDoor:fd,FAR_DOOR:Hy,vaultY:ei,C:ke,NICHE_X:g0,NICHE:on,NICHE_PLINTH_TOP:Ry,NICHE_STATUE_Z:Iy,WIN:Ye,winCentres:qn,piers:ld,PAINTING_X:zy,HEIGHT:xl}});var Jn=de((c4,pd)=>{"use strict";var bl=gn(),Kt=8,oi=.35,la=14,ni=4,Ge={x0:la+oi,x1:la+oi+2*ni,z0:5.9-ni,z1:5.9+ni,zc:5.9,cx:la+oi+ni,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Kt},oculus:3.3};Ge.domeTop=Ge.dome.base+Ge.dome.r;var ai={spokes:16,ringE:[.42,.95],bar:.035},Tr={sxz:1.32,sy:1.6,yaw:.6};Tr.crownC=[Ge.cx,.4+3.4*Tr.sy,Ge.zc];Tr.crownR=[2.3*Tr.sxz,1.9*Tr.sy,2.3*Tr.sxz];Tr.trunkR=.26*Tr.sxz;Tr.trunkTop=.4+2.2*Tr.sy;var hd={inner:1.05,outer:1.62,seat:.48,soil:.4},b0=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(r=>r/t)})(),Cr=[0,0,0],ri=[11,0,0],x0=[10,0,0],y0=[9,0,0],By=[5,0,0],wl=[3,0,0];function uo(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function Jr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}var jy=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function Wy(e){e.save(),e.translate(la+oi,0,0),e.rotateY(-Math.PI/2),bl.wallWithHoles(e,{u0:0,u1:bl.C.z0,w0:0,w1:2*oi,top:()=>Kt,holes:[{u0:Ge.zc-Ge.arch.r,u1:Ge.zc+Ge.arch.r,bottom:0,head:jy(Ge.zc,Ge.arch.r,Ge.arch.spring),step:.05}],mat:ri,revealMat:Cr,topStep:1}),e.restore();let t=la-oi;for(let[i,s]of[[0,Ge.zc-Ge.arch.r],[Ge.zc+Ge.arch.r,bl.C.z0]])Jr(e,t-.12,0,i,t,.42,s,Cr),Jr(e,t-.07,.42,i,t,.5,s,Cr);let r=t,n=.24,o=40,a=(i,s,c)=>[c,Ge.arch.spring+Math.sin(i)*s,Ge.zc+Math.cos(i)*s];for(let i=0;i<o;i++){let s=Math.PI*i/o,c=Math.PI*(i+1)/o;uo(e,a(s,Ge.arch.r,r-.07),a(c,Ge.arch.r,r-.07),a(c,Ge.arch.r+n,r-.07),a(s,Ge.arch.r+n,r-.07),[-1,0,0],Cr),uo(e,a(s,Ge.arch.r+n,r),a(c,Ge.arch.r+n,r),a(c,Ge.arch.r+n,r-.07),a(s,Ge.arch.r+n,r-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Cr),uo(e,a(s,Ge.arch.r,r),a(c,Ge.arch.r,r),a(c,Ge.arch.r,r-.07),a(s,Ge.arch.r,r-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Cr)}Jr(e,r-.12,Ge.arch.spring+Ge.arch.r-.06,Ge.zc-.17,r,Ge.arch.spring+Ge.arch.r+n+.16,Ge.zc+.17,Cr);for(let i of[-1,1]){let s=Ge.zc+i*Ge.arch.r,c=Ge.zc+i*(Ge.arch.r+n);Jr(e,r-.07,0,s,r,Ge.arch.spring,c,Cr),Jr(e,r-.13,Ge.arch.spring-.16,s-i*.03,r,Ge.arch.spring,c+i*.08,Cr),Jr(e,r-.12,0,s-i*.03,r,.5,c+i*.06,Cr)}}function Vy(e){let{x0:t,x1:r,z0:n,z1:o}=Ge;uo(e,[la,0,n],[r,0,n],[r,0,o],[la,0,o],[0,1,0],Cr),e.curMat=ri,uo(e,[r,0,n],[r,0,o],[r,Kt,o],[r,Kt,n],[-1,0,0],ri),uo(e,[t,0,n],[r,0,n],[r,Kt,n],[t,Kt,n],[0,0,1],ri),uo(e,[r,0,o],[t,0,o],[t,Kt,o],[r,Kt,o],[0,0,-1],ri),uo(e,[t,0,o],[t,0,n],[t,Kt,n],[t,Kt,o],[1,0,0],ri),Jr(e,r-.12,0,n,r,.42,o,Cr),Jr(e,t,0,n,r,.42,n+.12,Cr),Jr(e,t,0,o-.12,r,.42,o,Cr),Jr(e,r-.2,Kt-.3,n,r,Kt,o,Cr),Jr(e,t,Kt-.3,n,r,Kt,n+.2,Cr),Jr(e,t,Kt-.3,o-.2,r,Kt,o,Cr),Jr(e,t,Kt-.3,n,t+.2,Kt,o,Cr);let a=Ge.dome.r,i=48,s=[];for(let w=0;w<=i;w++){let T=Math.PI*2*w/i;s.push([Ge.cx+Math.cos(T)*a,Ge.zc+Math.sin(T)*a])}let c=w=>{let T=Math.abs(Math.cos(w)),C=Math.abs(Math.sin(w));return Math.min(ni/Math.max(T,1e-6),ni/Math.max(C,1e-6))};for(let w=0;w<i;w++){let T=Math.PI*2*w/i,C=Math.PI*2*(w+1)/i,D=c(T),q=c(C),H=[Ge.cx+Math.cos(T)*D,Kt,Ge.zc+Math.sin(T)*D],ae=[Ge.cx+Math.cos(C)*q,Kt,Ge.zc+Math.sin(C)*q];uo(e,[s[w][0],Kt,s[w][1]],[s[w+1][0],Kt,s[w+1][1]],ae,H,[0,-1,0],x0)}e.lathe([[a+.02,Kt-.18,1],[a-.12,Kt-.18,1],[a-.12,Kt-.06,1],[a-.05,Kt,1],[a,Kt+.02]],Ge.cx,Ge.zc,i,{mat:()=>Cr});let f=16,h=(w,T,C)=>[Ge.cx+Math.cos(w)*Math.cos(T)*C,Ge.dome.base+Math.sin(T)*C,Ge.zc+Math.sin(w)*Math.cos(T)*C],p=Math.PI/2;for(let w=0;w<i;w++)for(let T=0;T<f;T++){let C=Math.PI*2*w/i,D=Math.PI*2*(w+1)/i,q=p*T/f,H=p*(T+1)/f,ae=(J,Ee)=>[-Math.cos(J)*Math.cos(Ee),-Math.sin(Ee),-Math.sin(J)*Math.cos(Ee)],ve=[e.vert(h(C,q,a),ae(C,q),y0),e.vert(h(D,q,a),ae(D,q),y0),e.vert(h(D,H,a),ae(D,H),y0),e.vert(h(C,H,a),ae(C,H),y0)];e.tri(ve[0],ve[1],ve[2]),e.tri(ve[0],ve[2],ve[3])}for(let w=0;w<ai.spokes;w++){let T=Math.PI*2*w/ai.spokes,C=[];for(let D=0;D<=14;D++)C.push(h(T,(p-.06)*D/14,a-.04));e.tube(C,()=>.04,20,6,{mat:()=>x0})}for(let w of ai.ringE){let T=Math.cos(w)*(a-.04),C=Ge.dome.base+Math.sin(w)*(a-.04),D=[];for(let q=0;q<=72;q++){let H=Math.PI*2*q/72;D.push([Ge.cx+Math.cos(H)*T,C,Ge.zc+Math.sin(H)*T])}e.tube(D,()=>.035,72,6,{mat:()=>x0})}e.ellipsoid([Ge.cx,Ge.dome.base+a-.06,Ge.zc],[.16,.08,.16],6,12,{mat:()=>x0});let u=.46,m=.55,v=.12,d=(w,T,C,D)=>{Jr(e,w,u-.08,T,C,u,D,wl);let q=C-w>D-T?[w+.25,C-.25]:[w+.06,C-.06],H=C-w>D-T?[T+.06,D-.06]:[T+.25,D-.25];Jr(e,q[0],0,H[0],q[1],u-.08,H[1],wl)};d(r-v-m,n+1.1,r-v,o-1.1),d(t+1,n+v,r-1.1,n+v+m),d(t+1,o-v-m,r-1.1,o-v);let g=hd;e.lathe([[g.outer,0,1],[g.outer,g.seat-.1,1],[g.outer+.07,g.seat-.07,1],[g.outer+.07,g.seat,1],[g.inner-.05,g.seat,1],[g.inner-.05,g.seat-.06,1],[g.inner,g.seat-.08,1],[g.inner,g.soil]],Ge.cx,Ge.zc,64,{mat:()=>wl}),e.lathe([[g.inner,g.soil,1],[0,g.soil+.03]],Ge.cx,Ge.zc,48,{mat:()=>By})}function Xy(e){Wy(e),Vy(e),e.curMat=[0,0,0]}var Ht=e=>e.toFixed(4);function dd(){let e=Ge.dome.r,t=ai.ringE.map(r=>Math.cos(r)*e);return`
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
	}`}function Yy(){return`
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
	}`}pd.exports={addAlcove:Xy,alcoveLightGLSL:Yy,oculusGLSL:dd,A:Ge,BENCH:hd,SHAFT:b0,TREE:Tr}});var Md=de((l4,Ed)=>{"use strict";var Ky=oa(),{addFlutedColumn:md,addStatue:Qy,addPlant:Zy}=Kh(),vd=aa(),Jy=Ja(),Hn=gn(),eb=Jn(),Mt=14,ur=Hn.C.hallEnd+.35,Vt=8,Ut=.35,_l=1.15,El=1.15,Ml=[18,29,40],tb=[[[0,0],[0,ur]],[[Mt,ur],[Mt,0]],[[0,0],[Mt,0]],[[Mt,ur],[0,ur]]],bd=[];for(let e of Ml)for(let t of[1.25,Mt-1.25]){let r=_l/2,n=El/2;bd.push([[t-r,e-n],[t+r,e-n]],[[t+r,e-n],[t+r,e+n]],[[t+r,e+n],[t-r,e+n]],[[t-r,e+n],[t-r,e-n]])}var w0=12,wd=2.95,_d=.62,M0=wd+_d,_0=[{file:"venus.bin",x:1.85,z:ur-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Mt-2.1,z:ur-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Hn.NICHE_X[0],z:Hn.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Hn.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Hn.NICHE_X[1],z:Hn.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Hn.NICHE_PLINTH_TOP,mat:3}],rb={x0:Ut,x1:3.15,z0:3.6,z1:8.2,top:1},gd=.8,A0=1.17,os=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{os.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),os.push({x:Mt-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function Al(e,t,r,n){return[[[e-r,t-n],[e+r,t-n]],[[e+r,t-n],[e+r,t+n]],[[e+r,t+n],[e-r,t+n]],[[e-r,t+n],[e-r,t-n]]]}var T0=[];for(let e of[-1,1])T0.push(...Al(Mt/2+e*M0,w0,.85,.85));for(let e of _0.filter(t=>t.pedestal))T0.push(...Al(e.x,e.z,A0*1.1,A0*1.1));for(let e of os)T0.push(...Al(e.x,e.z,.42,.42));var nb=tb.concat(bd,T0);function ob(e){let r=new Map,n=(o,a,i)=>{let s=o+":"+a;r.has(s)||r.set(s,[]);let c=r.get(s);c.includes(i)||c.push(i)};for(let o of e){let a=Math.floor(Math.min(o[0][0],o[1][0])/4)-1,i=Math.floor(Math.max(o[0][0],o[1][0])/4)+1,s=Math.floor(Math.min(o[0][1],o[1][1])/4)-1,c=Math.floor(Math.max(o[0][1],o[1][1])/4)+1;for(let f=a;f<=i;f++)for(let h=s;h<=c;h++)n(f,h,o)}return{get(o,a){let i=Math.floor(o/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let h=-1;h<=1;h++){let p=r.get(i+f+":"+(s+h));p&&c.push(...p)}return[...new Set(c)]}}}var E0=[],yr={curMat:[0,0,0]};function Tl(e,t,r,n,o,a,i){let s=e.length/3;e.push(...r,...n,...o,...a),t.push(...i,...i,...i,...i);let c=yr.curMat;return E0.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function Pt(e,t,r,n,o,a,i,s,c){let f=(h,p,u,m,v)=>{r.push(...Tl(e,t,h,p,u,m,v))};f([n,o,a],[i,o,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,o,c],[n,o,c],[i,s,c],[n,s,c],[0,0,1]),f([n,o,c],[n,o,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,o,a],[i,o,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,o,c],[i,o,c],[n,o,a],[i,o,a],[0,-1,0])}function ii(e,t,r,n,o){let a=yr,i=a.vert(e,o),s=a.vert(t,o),c=a.vert(r,o),f=a.vert(n,o);a.tri(i,s,c),a.tri(s,f,c)}function xd(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,h=Math.cos(c),p=Math.sin(c),u=Math.cos(f),m=Math.sin(f),v=[e+r*h,t+r*p],d=[e+r*u,t+r*m],g=[e+n*h,t+n*p],w=[e+n*u,t+n*m];ii([v[0],v[1],o],[d[0],d[1],o],[g[0],g[1],o],[w[0],w[1],o],[0,0,-1]),ii([v[0],v[1],a],[d[0],d[1],a],[g[0],g[1],a],[w[0],w[1],a],[0,0,1]);let T=(c+f)/2;ii([v[0],v[1],o],[d[0],d[1],o],[v[0],v[1],a],[d[0],d[1],a],[-Math.cos(T),-Math.sin(T),0]),ii([g[0],g[1],o],[w[0],w[1],o],[g[0],g[1],a],[w[0],w[1],a],[Math.cos(T),Math.sin(T),0])}}function ab(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,h=e+r*Math.cos(c),p=t+r*Math.sin(c),u=e+r*Math.cos(f),m=t+r*Math.sin(f);ii([h,p,o],[u,m,o],[h,n,o],[u,n,o],[0,0,-1]),ii([h,p,a],[u,m,a],[h,n,a],[u,n,a],[0,0,1])}}function ib(e,t,r,n){let o=Mt/2,a=wd,i=3,s=a+.42,c=s+.15,f=_d,h=M0,p=5.98,u=n-.45,m=n+.45,v=64,d=md(yr,o-h,n,0,p,f);md(yr,o+h,n,0,p,f),yr.curMat=[0,0,0],xd(o,i,a,s,u,m,v),xd(o,i,s,c,u-.07,m+.07,v),ab(o,i,c,d+.05,u,m,v);for(let w of[-1,1]){let T=o+w*(c-.02),C=o+w*h;Pt(e,t,r,Math.min(T,C),i,u,Math.max(T,C),d+.05,m)}for(let w of[-1,1]){let T=o+w*(a-.05),C=o+w*(a+.85);Pt(e,t,r,Math.min(T,C),i-.16,n-.6,Math.max(T,C),i,n+.6)}let g=h+f*1.42+.45;Pt(e,t,r,o-g,d,n-.7,o+g,d+.44,n+.7),Pt(e,t,r,o-g+.12,d+.44,n-.62,o+g-.12,d+.7,n+.62),Pt(e,t,r,o-g-.1,d+.7,n-.84,o+g+.1,d+.84,n+.84),Pt(e,t,r,o-g-.22,d+.84,n-.96,o+g+.22,d+1,n+.96),Pt(e,t,r,o-.3,i+a-.1,n-.56,o+.3,d,n+.56)}function yd(e,t,r,n,o){Pt(e,t,r,n-.72,0,o-.72,n+.72,.2,o+.72),Pt(e,t,r,n-.58,.2,o-.58,n+.58,.4,o+.58),Pt(e,t,r,n-_l/2,.4,o-El/2,n+_l/2,Vt-1.35,o+El/2),Pt(e,t,r,n-.67,.42,o-.67,n+.67,.62,o+.67),Pt(e,t,r,n-.67,Vt-1.58,o-.67,n+.67,Vt-1.35,o+.67),Pt(e,t,r,n-.82,Vt-1.35,o-.82,n+.82,Vt-1.05,o+.82),Pt(e,t,r,n-.66,Vt-1.05,o-.66,n+.66,Vt-.78,o+.66),Pt(e,t,r,n-.92,Vt-.78,o-.92,n+.92,Vt-.55,o+.92),Pt(e,t,r,n-.78,Vt-.55,o-.78,n+.78,Vt-.3,o+.78),Pt(e,t,r,n-.92,Vt-.3,o-.92,n+.92,Vt-.1,o+.92)}function ns(e,t,r,n,o){o==="left"?(Pt(e,t,r,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Pt(e,t,r,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Pt(e,t,r,Mt-.14,1,n-3.8/2,Mt+.08,5.7,n+3.8/2),Pt(e,t,r,Mt-.18,1+.18,n-3.8/2+.18,Mt+.08+.04,5.7-.18,n+3.8/2-.18))}function sb(e,t,r,n){Pt(e,t,r,.65,Vt-.16,n-1.65,.65+.22,Vt,n+1.65),Pt(e,t,r,Mt-.65-.22,Vt-.16,n-1.65,Mt-.65,Vt,n+1.65),Pt(e,t,r,.65,Vt-.16,n-1.65,Mt-.65,Vt,n-1.43),Pt(e,t,r,.65,Vt-.16,n+1.43,Mt-.65,Vt,n+1.65),r.push(...Tl(e,t,[.65+.22,Vt-.16,n-1.43],[Mt-.65-.22,Vt-.16,n-1.43],[.65+.22,Vt-.16,n+1.43],[Mt-.65-.22,Vt-.16,n+1.43],[0,-1,0]))}Ed.exports=function(){let e=[],t=[],r=[];E0=[],yr=Ky.createBuilder(e,t,r,E0),r.push(...Tl(e,t,[0,0,0],[Mt,0,0],[0,0,ur],[Mt,0,ur],[0,1,0])),Jy.addSkylight(yr,[0,0,0],ur),yr.curMat=[0,0,0],Pt(e,t,r,-Ut,0,0,Ut,Vt,ur),Pt(e,t,r,Mt-Ut,0,Hn.C.z1,Mt+Ut,Vt,ur-Ut),Pt(e,t,r,Mt-Ut-.12,0,Hn.C.z1+2*Ut,Mt-Ut,.42,ur-Ut),Pt(e,t,r,Mt-Ut-.07,.42,Hn.C.z1+2*Ut,Mt-Ut,.5,ur-Ut),Pt(e,t,r,Ut,0,0,Ut+.12,.42,ur-Ut),Pt(e,t,r,Ut,.42,0,Ut+.07,.5,ur-Ut),Pt(e,t,r,Ut,0,ur-Ut-.12,Mt-Ut,.42,ur-Ut),Pt(e,t,r,Ut,.42,ur-Ut-.07,Mt-Ut,.5,ur-Ut),vd.addEntranceWall(yr),vd.addFrames(yr),yr.curMat=[0,0,0],Pt(e,t,r,-Ut,0,ur-Ut,Mt+Ut,Vt,ur+Ut),ib(e,t,r,w0);for(let c of Ml)yd(e,t,r,1.25,c),yd(e,t,r,Mt-1.25,c);ns(e,t,r,22,"left"),ns(e,t,r,25,"right"),ns(e,t,r,33,"left"),ns(e,t,r,36,"right"),ns(e,t,r,43,"left");let n=[4,9,34,39,44,49];for(let c of n)sb(e,t,r,c);Hn.addWing(yr),yr.curMat=[0,0,0];for(let c of _0.filter(f=>f.pedestal))Qy(yr,c.x,c.z,A0,gd);{let c=rb;yr.curMat=[0,0,0],yr.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),yr.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),yr.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),yr.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}eb.addAlcove(yr);for(let c of os)Zy(yr,c.x,c.z,c.seed,1,c.away);yr.curMat=[0,0,0];let o=[[[Mt,ur-.35],[0,ur-.35]],[[0,3],[0,10]],[[Mt,15],[Mt,22]],[[0,24],[0,31]],[[Mt,33],[Mt,40]],[[0,41],[0,46]]],a=ob(nb),i=(c,f)=>{let h=0,p=1/0;return o.forEach((u,m)=>{let v=(u[0][0]+u[1][0])/2,d=(u[0][1]+u[1][1])/2,g=Math.hypot(c-v,f-d);g<p&&(p=g,h=m)}),h},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:o,lights:s,statues:_0,occluders:[...Ml.flatMap(c=>[[1.25,c,.78],[Mt-1.25,c,.78]]),[Mt/2-M0,w0,.86],[Mt/2+M0,w0,.86],..._0.filter(c=>c.pedestal).map(c=>[c.x,c.z,A0*1.12]),...os.map(c=>[c.x,c.z,.34])],pedestalTop:gd,mat:E0,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:r}}});var Sl=de((f4,Ad)=>{"use strict";var{doorLightGLSL:cb}=aa(),{skylightGLSL:lb}=Ja(),{windowLightGLSL:fb,C:xn}=gn(),{alcoveLightGLSL:ub}=Jn(),kn=e=>e.toFixed(4),hb=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>(r/t).toFixed(4)).join(", ")})();Ad.exports=(e,t,r)=>{let o=(t.occluders||[]).slice(0,24).map(([u,m,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${u.toFixed(3)}, ${m.toFixed(3)}), ${v.toFixed(3)}));`).join(`
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

    ${cb()}

    ${lb()}

    ${fb()}

    ${ub()}

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
        step(abs(v_pos.z - ${kn(xn.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${kn((xn.z0+xn.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      ${p}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${kn(xn.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${hb}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${kn(xn.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${kn(xn.z0)} || v_pos.z > ${kn(xn.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${kn(xn.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${kn(xn.z0)}), ${kn(xn.z1)} - v_pos.z), ${kn(xn.x1)} - v_pos.x);
        ao *= mix(0.72, 1.0, smoothstep(0.0, 0.55, wallD));
        light *= ao;
      }

      // tungsten-warm picture lights against cooler daylight from the
      // skylight, the windows and the dome: the mix of the two is what
      // real gallery light looks like
      vec3 pictureTint = vec3(1.0, 0.90, 0.74);
      float daylight = glow * 0.05 + cg * 0.16 + aGlow * 0.5 + winL * 0.48;
      float coolShare = clamp(daylight / max(light, 0.05), 0.0, 1.0) * (1.0 - clamp(sun * 2.0 + spill, 0.0, 1.0));
      vec3 spillTint = mix(vec3(1.0), vec3(1.10, 0.95, 0.78), clamp(spill * 2.0, 0.0, 1.0));
      spillTint = mix(spillTint, vec3(1.08, 1.0, 0.86), clamp(sun * 1.5, 0.0, 1.0));
      spillTint *= mix(vec3(1.0), vec3(0.93, 0.97, 1.05), coolShare * 0.7);
      vec3 finalColour = material * (vec3(light) * spillTint + pictureTint * pic * ${.78.toFixed(3)} * (1.0 - 0.5 * isFloor));

      // light bounced off the warm floor onto the lower walls and columns
      finalColour += material * vec3(1.0, 0.84, 0.62) * 0.05 * ${.6.toFixed(3)}
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
        if (v_pos.z < ${kn(xn.z0+.3)} && v_pos.x > ${kn(xn.x0)}) {
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
      finalColour = mix(finalColour, vec3(0.30, 0.27, 0.23) * ${.6.toFixed(3)}, far * 0.16);

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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:f,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements)})}});var Sd=de((u4,Td)=>{"strict mode";var db="https://api.artic.edu/api/v1/artworks/search",pb=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,mb="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",vb="&fields=image_id,title,artist_title",gb={low:400,mid:843,high:1686};Td.exports={fetchList:async function(e,t){let r=db+mb+vb+`&from=${e}&size=${t}`;return(await fetch(r).then(o=>o.json())).data.filter(o=>o.image_id)},fetchImage:async function(e,t){let r=pb(e,gb[t]),n=await fetch(r).then(o=>o.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var zd=de((h4,Ld)=>{"use strict";var xb=tl(),yb=io(),bb=e=>"images/web/"+e.slug+(yb.isPhone?"-1024":"")+".webp";async function kd(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Ld.exports={fetchList:async function(e,t){return xb.slice(e,e+t).map((r,n)=>({...r,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await kd(bb(e))}catch(r){t=await kd("images/"+e.file)}return{title:e.title,image:t}}}});var Rd=de((d4,Cd)=>{"strict mode";Cd.exports={default:"local",artic:Sd(),local:zd()}});var Ll=de((p4,Pd)=>{"strict mode";var fa=document.createElement("canvas"),kl=fa.width=fa.height=1024,Lo=fa.getContext("2d");Lo.mozImageSmoothingEnabled=!1;Lo.webkitImageSmoothingEnabled=!1;Lo.font="32px Verdana";Lo.textBaseline="bottom";Lo.fillStyle="#aaa";function Id(e,t,r,n){var o=t,a,i=0,s=0,c=t.split(" "),f,h;for(f=h=c.length;e.measureText(o).width>r&&f>1;){f--,o=a="";for(var p=0;p<h;p++)p<f?(o+=c[p],p+1<f&&(o+=" ")):(a+=c[p],p+1<h&&(a+=" "))}return n.push(o),s=e.measureText(o).width,a&&(i=Id(e,a,r,n),i>s&&(s=i)),s}Pd.exports={init(e,t,r=kl){var n=[];Id(Lo,t,Math.min(r*kl,kl),n),Lo.clearRect(0,0,fa.width,fa.height);for(var o=0;o<n.length;o++)Lo.fillText(n[o],0,fa.height-(Math.max(n.length,3)-o)*32);return e({data:fa,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Fd=de((m4,Nd)=>{"strict mode";var zl=Rd(),wb=new URLSearchParams(window.location.search).get("api"),Od=zl[wb]||zl[zl.default],_b=Ll(),Cl={},ci=[],Eb=2;function Mb(e){return(!navigator.connection||navigator.connection.downlink<Eb)&&(e=e=="high"?"mid":"low"),e}var Ab=io(),si=document.createElement("canvas");si.width=si.height=Ab.isPhone?1024:2048;var Pl=si.getContext("2d");Pl.imageSmoothingEnabled=!0;Pl.imageSmoothingQuality="high";var Rl=!1,Tb=e=>[(ci.pop()||e.texture)([[[200,200,200]]]),t=>(ci.pop()||e.texture)([[[0,0,0,0]]]),1];async function Il(e,t,r){Rl===!1&&(Rl=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,o;try{let a=await Od.fetchImage(t,Mb(r));o=a.title,n=await createImageBitmap(a.image),Pl.drawImage(n,0,0,si.width,si.height)}catch(a){return console.error(a),r=="high"?await Il(e,t,"low"):Tb(e)}return[(ci.pop()||e.texture)({data:si,min:"mipmap",mipmap:"nice",aniso:Rl,flipY:!0}),a=>_b.init(ci.pop()||e.texture,o,a),n.width/n.height]}Nd.exports={fetch:(e,t=10,r="low",n,o)=>{let a=Object.keys(Cl).length;Od.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(Cl[s.image_id]){--t===0&&o();return}Cl[s.image_id]=s,Il(e,s,r).then(([c,f,h])=>{n({...s,tex:c,textGen:f,aspect:h}),--t===0&&o()})})})},load:(e,t,r="low")=>{t.tex||t.loading||(t.loading=!0,Il(e,t,r).then(([n,o])=>{t.loading=!1,t.tex=n,t.text=o(t.width)}))},unload:e=>{e.tex&&(ci.push(e.tex),e.tex=void 0),e.text&&(ci.push(e.text),e.text=void 0)}}});var Dd=de((v4,Gd)=>{Gd.exports=Sb;function Sb(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var qd=de((g4,$d)=>{$d.exports=kb;function kb(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Ud=de((x4,Hd)=>{Hd.exports=Lb;function Lb(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Ol=de((y4,Bd)=>{Bd.exports=zb;function zb(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Wd=de((b4,jd)=>{jd.exports=Cb;function Cb(e,t){if(e===t){var r=t[1],n=t[2],o=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=o,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var Xd=de((w4,Vd)=>{Vd.exports=Rb;function Rb(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],m=t[11],v=t[12],d=t[13],g=t[14],w=t[15],T=r*s-n*i,C=r*c-o*i,D=r*f-a*i,q=n*c-o*s,H=n*f-a*s,ae=o*f-a*c,ve=h*d-p*v,J=h*g-u*v,Ee=h*w-m*v,ue=p*g-u*d,Fe=p*w-m*d,Ie=u*w-m*g,Re=T*Ie-C*Fe+D*ue+q*Ee-H*J+ae*ve;return Re?(Re=1/Re,e[0]=(s*Ie-c*Fe+f*ue)*Re,e[1]=(o*Fe-n*Ie-a*ue)*Re,e[2]=(d*ae-g*H+w*q)*Re,e[3]=(u*H-p*ae-m*q)*Re,e[4]=(c*Ee-i*Ie-f*J)*Re,e[5]=(r*Ie-o*Ee+a*J)*Re,e[6]=(g*D-v*ae-w*C)*Re,e[7]=(h*ae-u*D+m*C)*Re,e[8]=(i*Fe-s*Ee+f*ve)*Re,e[9]=(n*Ee-r*Fe-a*ve)*Re,e[10]=(v*H-d*D+w*T)*Re,e[11]=(p*D-h*H-m*T)*Re,e[12]=(s*J-i*ue-c*ve)*Re,e[13]=(r*ue-n*J+o*ve)*Re,e[14]=(d*C-v*q-g*T)*Re,e[15]=(h*q-p*C+u*T)*Re,e):null}});var Kd=de((_4,Yd)=>{Yd.exports=Ib;function Ib(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],m=t[11],v=t[12],d=t[13],g=t[14],w=t[15];return e[0]=s*(u*w-m*g)-p*(c*w-f*g)+d*(c*m-f*u),e[1]=-(n*(u*w-m*g)-p*(o*w-a*g)+d*(o*m-a*u)),e[2]=n*(c*w-f*g)-s*(o*w-a*g)+d*(o*f-a*c),e[3]=-(n*(c*m-f*u)-s*(o*m-a*u)+p*(o*f-a*c)),e[4]=-(i*(u*w-m*g)-h*(c*w-f*g)+v*(c*m-f*u)),e[5]=r*(u*w-m*g)-h*(o*w-a*g)+v*(o*m-a*u),e[6]=-(r*(c*w-f*g)-i*(o*w-a*g)+v*(o*f-a*c)),e[7]=r*(c*m-f*u)-i*(o*m-a*u)+h*(o*f-a*c),e[8]=i*(p*w-m*d)-h*(s*w-f*d)+v*(s*m-f*p),e[9]=-(r*(p*w-m*d)-h*(n*w-a*d)+v*(n*m-a*p)),e[10]=r*(s*w-f*d)-i*(n*w-a*d)+v*(n*f-a*s),e[11]=-(r*(s*m-f*p)-i*(n*m-a*p)+h*(n*f-a*s)),e[12]=-(i*(p*g-u*d)-h*(s*g-c*d)+v*(s*u-c*p)),e[13]=r*(p*g-u*d)-h*(n*g-o*d)+v*(n*u-o*p),e[14]=-(r*(s*g-c*d)-i*(n*g-o*d)+v*(n*c-o*s)),e[15]=r*(s*u-c*p)-i*(n*u-o*p)+h*(n*c-o*s),e}});var Zd=de((E4,Qd)=>{Qd.exports=Pb;function Pb(e){var t=e[0],r=e[1],n=e[2],o=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],h=e[9],p=e[10],u=e[11],m=e[12],v=e[13],d=e[14],g=e[15],w=t*i-r*a,T=t*s-n*a,C=t*c-o*a,D=r*s-n*i,q=r*c-o*i,H=n*c-o*s,ae=f*v-h*m,ve=f*d-p*m,J=f*g-u*m,Ee=h*d-p*v,ue=h*g-u*v,Fe=p*g-u*d;return w*Fe-T*ue+C*Ee+D*J-q*ve+H*ae}});var e1=de((M4,Jd)=>{Jd.exports=Ob;function Ob(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],h=t[7],p=t[8],u=t[9],m=t[10],v=t[11],d=t[12],g=t[13],w=t[14],T=t[15],C=r[0],D=r[1],q=r[2],H=r[3];return e[0]=C*n+D*s+q*p+H*d,e[1]=C*o+D*c+q*u+H*g,e[2]=C*a+D*f+q*m+H*w,e[3]=C*i+D*h+q*v+H*T,C=r[4],D=r[5],q=r[6],H=r[7],e[4]=C*n+D*s+q*p+H*d,e[5]=C*o+D*c+q*u+H*g,e[6]=C*a+D*f+q*m+H*w,e[7]=C*i+D*h+q*v+H*T,C=r[8],D=r[9],q=r[10],H=r[11],e[8]=C*n+D*s+q*p+H*d,e[9]=C*o+D*c+q*u+H*g,e[10]=C*a+D*f+q*m+H*w,e[11]=C*i+D*h+q*v+H*T,C=r[12],D=r[13],q=r[14],H=r[15],e[12]=C*n+D*s+q*p+H*d,e[13]=C*o+D*c+q*u+H*g,e[14]=C*a+D*f+q*m+H*w,e[15]=C*i+D*h+q*v+H*T,e}});var r1=de((A4,t1)=>{t1.exports=Nb;function Nb(e,t,r){var n=r[0],o=r[1],a=r[2],i,s,c,f,h,p,u,m,v,d,g,w;return t===e?(e[12]=t[0]*n+t[4]*o+t[8]*a+t[12],e[13]=t[1]*n+t[5]*o+t[9]*a+t[13],e[14]=t[2]*n+t[6]*o+t[10]*a+t[14],e[15]=t[3]*n+t[7]*o+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],h=t[4],p=t[5],u=t[6],m=t[7],v=t[8],d=t[9],g=t[10],w=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=h,e[5]=p,e[6]=u,e[7]=m,e[8]=v,e[9]=d,e[10]=g,e[11]=w,e[12]=i*n+h*o+v*a+t[12],e[13]=s*n+p*o+d*a+t[13],e[14]=c*n+u*o+g*a+t[14],e[15]=f*n+m*o+w*a+t[15]),e}});var o1=de((T4,n1)=>{n1.exports=Fb;function Fb(e,t,r){var n=r[0],o=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var i1=de((S4,a1)=>{a1.exports=Gb;function Gb(e,t,r,n){var o=n[0],a=n[1],i=n[2],s=Math.sqrt(o*o+a*a+i*i),c,f,h,p,u,m,v,d,g,w,T,C,D,q,H,ae,ve,J,Ee,ue,Fe,Ie,Re,xe;return Math.abs(s)<1e-6?null:(s=1/s,o*=s,a*=s,i*=s,c=Math.sin(r),f=Math.cos(r),h=1-f,p=t[0],u=t[1],m=t[2],v=t[3],d=t[4],g=t[5],w=t[6],T=t[7],C=t[8],D=t[9],q=t[10],H=t[11],ae=o*o*h+f,ve=a*o*h+i*c,J=i*o*h-a*c,Ee=o*a*h-i*c,ue=a*a*h+f,Fe=i*a*h+o*c,Ie=o*i*h+a*c,Re=a*i*h-o*c,xe=i*i*h+f,e[0]=p*ae+d*ve+C*J,e[1]=u*ae+g*ve+D*J,e[2]=m*ae+w*ve+q*J,e[3]=v*ae+T*ve+H*J,e[4]=p*Ee+d*ue+C*Fe,e[5]=u*Ee+g*ue+D*Fe,e[6]=m*Ee+w*ue+q*Fe,e[7]=v*Ee+T*ue+H*Fe,e[8]=p*Ie+d*Re+C*xe,e[9]=u*Ie+g*Re+D*xe,e[10]=m*Ie+w*Re+q*xe,e[11]=v*Ie+T*Re+H*xe,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var c1=de((k4,s1)=>{s1.exports=Db;function Db(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],h=t[9],p=t[10],u=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*o+f*n,e[5]=i*o+h*n,e[6]=s*o+p*n,e[7]=c*o+u*n,e[8]=f*o-a*n,e[9]=h*o-i*n,e[10]=p*o-s*n,e[11]=u*o-c*n,e}});var f1=de((L4,l1)=>{l1.exports=$b;function $b(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],h=t[9],p=t[10],u=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o-f*n,e[1]=i*o-h*n,e[2]=s*o-p*n,e[3]=c*o-u*n,e[8]=a*n+f*o,e[9]=i*n+h*o,e[10]=s*n+p*o,e[11]=c*n+u*o,e}});var h1=de((z4,u1)=>{u1.exports=qb;function qb(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],h=t[5],p=t[6],u=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o+f*n,e[1]=i*o+h*n,e[2]=s*o+p*n,e[3]=c*o+u*n,e[4]=f*o-a*n,e[5]=h*o-i*n,e[6]=p*o-s*n,e[7]=u*o-c*n,e}});var p1=de((C4,d1)=>{d1.exports=Hb;function Hb(e,t,r){var n,o,a,i=r[0],s=r[1],c=r[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),o=Math.cos(t),a=1-o,e[0]=i*i*a+o,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+o,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var v1=de((R4,m1)=>{m1.exports=Ub;function Ub(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=n+n,c=o+o,f=a+a,h=n*s,p=n*c,u=n*f,m=o*c,v=o*f,d=a*f,g=i*s,w=i*c,T=i*f;return e[0]=1-(m+d),e[1]=p+T,e[2]=u-w,e[3]=0,e[4]=p-T,e[5]=1-(h+d),e[6]=v+g,e[7]=0,e[8]=u+w,e[9]=v-g,e[10]=1-(h+m),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}});var x1=de((I4,g1)=>{g1.exports=Bb;function Bb(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var b1=de((P4,y1)=>{y1.exports=jb;function jb(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var _1=de((O4,w1)=>{w1.exports=Wb;function Wb(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var M1=de((N4,E1)=>{E1.exports=Vb;function Vb(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var T1=de((F4,A1)=>{A1.exports=Xb;function Xb(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var k1=de((G4,S1)=>{S1.exports=Yb;function Yb(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r+r,s=n+n,c=o+o,f=r*i,h=n*i,p=n*s,u=o*i,m=o*s,v=o*c,d=a*i,g=a*s,w=a*c;return e[0]=1-p-v,e[1]=h+w,e[2]=u-g,e[3]=0,e[4]=h-w,e[5]=1-f-v,e[6]=m+d,e[7]=0,e[8]=u+g,e[9]=m-d,e[10]=1-f-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var z1=de((D4,L1)=>{L1.exports=Kb;function Kb(e,t,r,n,o,a,i){var s=1/(r-t),c=1/(o-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var R1=de(($4,C1)=>{C1.exports=Qb;function Qb(e,t,r,n,o){var a=1/Math.tan(t/2),i=1/(n-o);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*n*i,e[15]=0,e}});var P1=de((q4,I1)=>{I1.exports=Zb;function Zb(e,t,r,n){var o=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(o+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(o-a)*f*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}});var N1=de((H4,O1)=>{O1.exports=Jb;function Jb(e,t,r,n,o,a,i){var s=1/(t-r),c=1/(n-o),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+r)*s,e[13]=(o+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var G1=de((U4,F1)=>{var e3=Ol();F1.exports=t3;function t3(e,t,r,n){var o,a,i,s,c,f,h,p,u,m,v=t[0],d=t[1],g=t[2],w=n[0],T=n[1],C=n[2],D=r[0],q=r[1],H=r[2];return Math.abs(v-D)<1e-6&&Math.abs(d-q)<1e-6&&Math.abs(g-H)<1e-6?e3(e):(h=v-D,p=d-q,u=g-H,m=1/Math.sqrt(h*h+p*p+u*u),h*=m,p*=m,u*=m,o=T*u-C*p,a=C*h-w*u,i=w*p-T*h,m=Math.sqrt(o*o+a*a+i*i),m?(m=1/m,o*=m,a*=m,i*=m):(o=0,a=0,i=0),s=p*i-u*a,c=u*o-h*i,f=h*a-p*o,m=Math.sqrt(s*s+c*c+f*f),m?(m=1/m,s*=m,c*=m,f*=m):(s=0,c=0,f=0),e[0]=o,e[1]=s,e[2]=h,e[3]=0,e[4]=a,e[5]=c,e[6]=p,e[7]=0,e[8]=i,e[9]=f,e[10]=u,e[11]=0,e[12]=-(o*v+a*d+i*g),e[13]=-(s*v+c*d+f*g),e[14]=-(h*v+p*d+u*g),e[15]=1,e)}});var $1=de((B4,D1)=>{D1.exports=r3;function r3(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var as=de((j4,q1)=>{q1.exports={create:Dd(),clone:qd(),copy:Ud(),identity:Ol(),transpose:Wd(),invert:Xd(),adjoint:Kd(),determinant:Zd(),multiply:e1(),translate:r1(),scale:o1(),rotate:i1(),rotateX:c1(),rotateY:f1(),rotateZ:h1(),fromRotation:p1(),fromRotationTranslation:v1(),fromScaling:x1(),fromTranslation:b1(),fromXRotation:_1(),fromYRotation:M1(),fromZRotation:T1(),fromQuat:k1(),frustum:z1(),perspective:R1(),perspectiveFromFieldOfView:P1(),ortho:N1(),lookAt:G1(),str:$1()}});var B1=de((W4,U1)=>{"use strict";var H1=Fd(),hr=as(),ua=gn(),n3=3e3,S0="high",Nl,ss=.36,cs=13.64,li=ua.C.hallEnd-.01,ls=ua.C.z0+.01,o3=.356,a3=13.644,i3=ua.C.hallEnd-.006,s3=ua.C.z0+.006,c3=.12,L0=4,fi=e=>Ur[e]&&Ur[e].cy||L0,Fl=.26,l3=5.6,f3=7,Ur=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:li},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:ua.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ua.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ua.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function u3(e,t){let r=t&&t.maxH||l3,n=t&&t.maxW||f3,o=Math.min(r,n/e);return{width:o*e,height:o}}function h3(e,t,r){let n=Ur[r],o=[],a=fi(r)-t/2;return n.side==="left"?(hr.fromTranslation(o,[ss,a,n.z+e/2]),hr.rotateY(o,o,Math.PI/2)):n.side==="right"?(hr.fromTranslation(o,[cs,a,n.z-e/2]),hr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?hr.fromTranslation(o,[n.x-e/2,a,ls]):(hr.fromTranslation(o,[7+e/2,a,li]),hr.rotateY(o,o,Math.PI)),hr.scale(o,o,[e,t,c3]),o}function d3(e,t,r){let n=Ur[r],o=[],a=fi(r)-t/2;return n.side==="left"?(hr.fromTranslation(o,[ss,a,n.z+e/2]),hr.rotateY(o,o,Math.PI/2)):n.side==="right"?(hr.fromTranslation(o,[cs,a,n.z-e/2]),hr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?hr.fromTranslation(o,[n.x-e/2,a,ls]):(hr.fromTranslation(o,[7+e/2,a,li]),hr.rotateY(o,o,Math.PI)),o}function p3(e,t,r){let n=Ur[r],o=[],a=fi(r)-t/2-Fl-.38;return n.side==="left"?(hr.fromTranslation(o,[o3,a,n.z+e/2]),hr.rotateY(o,o,Math.PI/2)):n.side==="right"?(hr.fromTranslation(o,[a3,a,n.z-e/2]),hr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?hr.fromTranslation(o,[n.x-e/2,a,s3]):(hr.fromTranslation(o,[7+e/2,a,i3]),hr.rotateY(o,o,Math.PI)),hr.scale(o,o,[2,2,2]),o}function m3(e,t,r){let n=Ur[r],o=fi(r)-t/2-Fl-.38;return n.side==="left"?[ss+.55,o,n.z]:n.side==="right"?[cs-.55,o,n.z]:n.side==="corridor"?[n.x,o,ls+.55]:[7,o,li-.55]}var is=.42;function k0(e,t,r,n,o,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,o,0,0,r[0]*a,r[1]*a,r[2]*a,0,e[0],e[1],e[2],1]}function v3(e,t,r){let n=Ur[r],o,a,i;n.side==="left"?(o=[ss,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(o=[cs,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(o=[n.x,ls],a=[1,0,0],i=[0,0,1]):(o=[7,li],a=[1,0,0],i=[0,0,-1]);let s=fi(r)+t/2+Fl+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(m,v)=>[o[0]+i[0]*m,v,o[1]+i[2]*m],h=[.075,.062,.05],p=[{fixmodel:k0(f(.014,s),a,i,.1,.13,.028),fixcol:h,fixglow:0},{fixmodel:k0(f(is/2,s),a,i,.02,.02,is),fixcol:h,fixglow:0},{fixmodel:k0(f(is,s),a,i,c,.034,.05),fixcol:h,fixglow:0},{fixmodel:k0(f(is-.012,s-.019),a,i,c*.94,.006,.028),fixcol:h,fixglow:1}],u=f(is,s-.02);return{fixtures:p,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}U1.exports=(e,t)=>{let r=[],n=[],o=a=>{let i=a.image_id;if(!Ur[i])return;let{width:s,height:c}=u3(a.aspect,Ur[i]),f=v3(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),r.push({...a,fixtures:f.fixtures,side:Ur[i].side,model:h3(s,c,i),framemodel:d3(s,c,i),framesize:[s,c],textmodel:p3(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,size:a.size,plaquePosition:m3(s,c,i),paintingPosition:Ur[i].side==="left"?[ss+.05,L0,Ur[i].z]:Ur[i].side==="right"?[cs-.05,L0,Ur[i].z]:Ur[i].side==="corridor"?[Ur[i].x,fi(i),ls+.05]:[7,L0,li-.05],textGen:null})};return H1.fetch(e,Ur.length,S0,o,()=>{}),{update:()=>{n=r,n.forEach(a=>{H1.load(e,a,S0)}),S0="low",Nl&&clearTimeout(Nl),Nl=setTimeout(()=>{S0="high"},n3)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var X1=de((V4,V1)=>{"use strict";var g3=Ll(),j1=io(),W1=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function x3(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];W1.forEach(([n,o])=>{e.forEach(([a,i])=>t.push([a,i,n,o]))});let r=[];for(let n=0;n<W1.length-1;n++)for(let o=0;o<4;o++){let a=(o+1)%4,i=n*4+o,s=n*4+a,c=(n+1)*4+o,f=(n+1)*4+a;r.push(i,s,f,i,f,c)}return{verts:t,elems:r}}var y3=`#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2 fsize;
uniform mat4 view;
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
}`,b3=`
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
}`;V1.exports=e=>{let t=g3.draw(e),r=e({frag:`#extension GL_OES_standard_derivatives : enable
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
				float wAmp = 1.0 - smoothstep(0.22, 0.55, fw);
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
				float lx = luma(texture2D(tex, st + vec2(texel, 0.0)).rgb) - luma(texture2D(tex, st - vec2(texel, 0.0)).rgb);
				float ly = luma(texture2D(tex, st + vec2(0.0, texel)).rgb) - luma(texture2D(tex, st - vec2(0.0, texel)).rgb);
				g += vec2(lx, ly) * 1.6;

				N = normalize(v_n - v_t * g.x - v_b * g.y);

				// weave shading: the tops of the threads catch the light,
				// the hollows between them hold a little shadow
				vec3 Lw = normalize(v_lamp - v_world);
				float flatL = max(dot(v_n, Lw), 0.05);
				float lit = max(dot(N, Lw), 0.0) / flatL;
				col *= mix(1.0, clamp(lit, 0.7, 1.3), 0.55);
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(j1.isPhone?1024:2048),detail:()=>j1.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=x3(),o=e({frag:y3,vert:b3,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){r(i),o(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var K1=de((X4,Y1)=>{"use strict";var w3=Sl();function _3(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),o=t.getUint32(8,!0),a=[],i=[];for(let p=0;p<3;p++)a.push(t.getFloat32(12+p*4,!0)),i.push(t.getFloat32(24+p*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,o);s+=o*2;let h=new Int8Array(e,s,n*3);return{nV:n,nI:o,mn:a,sz:i,pos:c,idx:f,nrm:h}}Y1.exports=(e,t)=>{let r=[],n=[],o=[],a=[],i=null,s=t.statues.length,c=(h,p)=>{let u=r.length/3,m=p.height,v=Math.cos(p.yaw),d=Math.sin(p.yaw),g=p.base!==void 0?p.base:t.pedestalTop;for(let w=0;w<h.nV;w++){let T=(h.mn[0]+h.pos[w*3]/65535*h.sz[0])*m,C=(h.mn[1]+h.pos[w*3+1]/65535*h.sz[1])*m,D=(h.mn[2]+h.pos[w*3+2]/65535*h.sz[2])*m;r.push(p.x+v*T+d*D,g+C,p.z-d*T+v*D);let q=h.nrm[w*3]/127,H=h.nrm[w*3+1]/127,ae=h.nrm[w*3+2]/127;n.push(v*q+d*ae,H,-d*q+v*ae),o.push(p.mat||1,0,0)}for(let w=0;w<h.nI;w++)a.push(u+h.idx[w])},f=()=>{a.length!==0&&(i=w3(e,{position:r,normal:n,mat:o,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1))};return t.statues.forEach(h=>{fetch("res/"+h.file).then(p=>{if(!p.ok)throw new Error("Could not load "+h.file);return p.arrayBuffer()}).then(p=>c(_3(p),h)).catch(p=>console.error(p)).then(()=>{--s===0&&f()})}),function(){i&&i()}}});var sp=de((Y4,Dl)=>{"use strict";var E3=oa(),Sr=1.29032,ha=[9.2968,2,5.9],M3=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],z0=2147.64,Q1=725,Z1=1288,J1=1450,ep=2576,sn=-5.197,pa=3.865,zo=10.135,ma=-14.679,fs=-30.229,us=7.232,tp=-45.713,hi=17.1*Sr,da=16.6*Sr,hs=16.6*Sr,rp=[6.9,17.1],C0=[2.95,16.6],A3=1.6,T3=0,S3=1,np=2,Gl=3,op=4,ap=5,k3=6;function L3(){let e=[],t=[],r=[],n=[],o=E3.createBuilder(e,t,r,n),a=(f,h,p,u,m,v,d=1,g=1)=>{let w=[];for(let T=0;T<=d;T++){let C=[];for(let D=0;D<=g;D++){let q=[f[0]+h[0]*T/d+p[0]*D/g,f[1]+h[1]*T/d+p[1]*D/g,f[2]+h[2]*T/d+p[2]*D/g],H=v(q);C.push(o.vert(q,u,[m,H[0],H[1]]))}w.push(C)}for(let T=0;T<d;T++)for(let C=0;C<g;C++)o.tri(w[T][C],w[T+1][C],w[T][C+1]),o.tri(w[T+1][C],w[T+1][C+1],w[T][C+1])},i=f=>h=>[(ha[2]-h[2])/Sr-f,h[1]/Sr];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],T3,f=>[f[0]/Sr,f[2]/Sr],13,14),a([pa,0,sn],[0,0,ma-sn],[0,hi,0],[1,0,0],S3,i(8.6),6,6),a([-40,0,sn],[pa+40,0,0],[0,hi,0],[0,0,1],np,f=>[(pa-f[0])/Sr,f[1]/Sr],8,4),a([-40,0,-.36],[0,0,sn+.36],[0,hi,0],[1,0,0],np,f=>[-f[2]/Sr,f[1]/Sr]),a([zo,0,-80],[0,0,sn+80],[0,da,0],[-1,0,0],op,i(8.6),12,6),a([zo,0,sn],[60,0,0],[0,da,0],[0,0,1],ap,f=>[(f[0]-zo)/Sr,f[1]/Sr],8,4),a([70,0,sn],[0,0,-.36-sn],[0,da,0],[-1,0,0],ap,f=>[-f[2]/Sr,f[1]/Sr]);let s=f=>[(f[0]-ha[0])/Sr+4.18,f[1]/Sr];a([-20,0,fs],[us+20,0,0],[0,hs,0],[0,0,1],Gl,s,8,6),a([us,0,fs],[0,0,tp-fs],[0,hs,0],[1,0,0],Gl,i(28),4,4),a([us,0,tp],[zo-us,0,0],[0,da,0],[0,0,1],op,f=>[(f[0]-ha[0])/Sr,f[1]/Sr],2,4),a([-20,0,ma],[0,0,fs-ma],[0,hs,0],[1,0,0],Gl,i(16),4,4);let c=(f,h,p,u)=>a(f,h,p,u,k3,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:r,attr:n}}function ui(e,t,r,n){let o=e.texture({data:[[n]],...r,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{o({data:a,...r,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),o}var Un=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",z3=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,ma],[pa,hi,sn]],[[zo,0,-80],[70,da,sn]],[[-20,0,-80],[us,hs,fs]],[[-40,0,-80],[-20,hs,ma]]],C3=z3.map(e=>`if (hitBox(ro, rd, ${Un(e[0])}, ${Un(e[1])}, 1e4) ) return 0.0;`).join(`
		`),ip="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>M3[t][e].toFixed(6)).join(", ")).join(", ")+")",R3=`
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
	if (hitBox(ro, rd, ${Un([zo+.02,0,-80])}, ${Un([70,da,sn])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${ip} * (p - ${Un(ha)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Q1.toFixed(2)} + ${z0.toFixed(3)} * pc.x / pc.z) / ${J1.toFixed(1)},
		(${Z1.toFixed(2)} - ${z0.toFixed(3)} * pc.y / pc.z) / ${ep.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${ip} * (p - ${Un(ha)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Q1.toFixed(2)} + ${z0.toFixed(3)} * pc.x / pc.z) / ${J1.toFixed(1)},
		(${Z1.toFixed(2)} - ${z0.toFixed(3)} * pc.y / pc.z) / ${ep.toFixed(1)}
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
		base = texture2D(cobbleTex, fuv / ${A3.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${rp[0].toFixed(2)}, 1.0 - fuv.y / ${rp[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${C0[0].toFixed(2)}, 1.0 - fuv.y / ${C0[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${C0[0].toFixed(2)}, 1.0 - fuv.y / ${C0[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(pa-.05).toFixed(3)} && v_pos.x < ${(zo+.05).toFixed(3)};
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
}`;Dl.exports=e=>{let t=L3(),r={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},o={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=ui(e,"res/street/photo.jpg",r,[190,160,120]),i=ui(e,"res/street/photo_mask.png",r,[255,255,255]),s=ui(e,"res/street/facade_pink.jpg",n,[200,150,135]),c=ui(e,"res/street/facade_yellow.jpg",n,[225,180,95]),f=ui(e,"res/street/facade_cream.jpg",n,[215,200,175]),h=ui(e,"res/street/cobbles.jpg",o,[95,95,95]),p=Date.now(),u=e({frag:R3,vert:I3,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:i,pinkTex:s,yellowTex:c,creamTex:f,cobbleTex:h,time:()=>(Date.now()-p)/1e3}});return function(){u()}};Dl.exports.layout={MOUTH_Z:sn,PINK_X:pa,RIGHT_X:zo,PINK_H:hi,CREAM_H:da,S:Sr}});var fp=de((K4,lp)=>{"use strict";var{glassPanes:P3}=aa(),cp=gn();function O3(){let e=[],t=[],r=(n,o)=>{for(let a of n)e.push(a),t.push(o)};return r(P3(),[0,0,1]),r(cp.windowGlass(),[0,0,1]),r(cp.farDoorGlass(),[1,0,0]),{position:e,normal:t}}lp.exports=e=>{let t=O3(),r=e({frag:`
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r()}}});var Tp=de((Q4,Bl)=>{"use strict";var N3=oa(),$l=io(),{wallWithHoles:F3,C:Io}=gn(),Be=.28,B={westBack:14.4,westCol:15-Be,eastCol:37.4+Be,eastBack:41.8,south:Io.z1+.7,northCol:Io.z1+.7+16,northBack:Io.z1+.7+19,cx:(15+37.4)/2,cz:(Io.z1+.7+Io.z1+.7+16-Be)/2},Nt={x0:B.westCol+Be,x1:B.eastCol-Be,z0:B.south,z1:B.northCol-Be},Wr=3.3,ms=.92,Po=5.6,up=6,Ln=11.9,Ro=9.6,xt={x0:B.cx-2.9,x1:B.cx+2.9,top:14.4},G0=7,vp=4,Hl=(B.eastCol-B.westCol)/G0,G3=(B.northCol-B.south)/vp,gp=3,gs=.26,ya=1.4,ga=1.1,I0=3,eo=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(r=>r/t)})(),Oe={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},to=[],xp=(e,t,r)=>[B.cx+e,t,B.cz+r],P0=xp(-5.9,0,3.4),Oo=.85,Co={c:[P0[0],4.6*Oo+.5,P0[2]],r:[5*Oo,3.6*Oo,4.5*Oo]},yp=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[P0[0]+e.d[0]*Oo,e.d[1]*Oo+.5,P0[2]+e.d[2]*Oo],r:e.r.map(t=>t*Oo),n:e.n}));for(let e of yp)to.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var D3=[3.6,6.3,9];for(let e of D3){let t=8.6+e%1.7*.6;to.push({c:xp(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var $3=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:B.cx+e.d[0],z:B.cz+e.d[1],bloom:e.bloom}));for(let e of $3)to.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var Ul=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[B.cx+Math.cos(t)*2.3,B.cz+Math.sin(t)*2.3]});for(let[e,t]of Ul)to.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var bp=[];{let e=(r,n,o,a,i,s)=>{let c=Math.hypot(o-r,a-n),f=Math.floor(c/.9);for(let h=0;h<=f;h++){let p=h/f,u=r+(o-r)*p,m=n+(a-n)*p;i!==void 0&&Math.abs((o!==r?u:m)-i)<s||bp.push([u,m])}};e(Nt.x0+.45,Nt.z0+1.2,Nt.x0+.45,Nt.z1-.45,B.cz,1),e(Nt.x1-.45,Nt.z0+1.2,Nt.x1-.45,Nt.z1-.45,B.cz,1),e(Nt.x0+.45,Nt.z1-.45,Nt.x1-.45,Nt.z1-.45,B.cx,1.9)}var q3=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],O0=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function pi(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function kr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),[s,0,0])}function H3(e,t,r){return{vert:(n,o,a)=>e.vert(t(n),r(o),a),tri:e.tri}}var U3={north:[e=>[e[0],e[1],B.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[B.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[B.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function wp(e,t,r,n,o){let a=[];for(let i=0;i<r;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===r-1?o:.02);a.push([s,c,e+(i+.5)*t])}return a}var B3=wp(B.westCol,Hl,G0,Be+gs,Be+gs),hp=wp(B.south,G3,vp,.32,Be+gs),di=[B.cx-32.35,B.northCol-77],j3=Array.from({length:G0-1},(e,t)=>B.westCol+(t+1)*Hl),_p=e=>(e[1]-e[0])/2-.2,vs=e=>(e[0]+e[1])/2;function W3(e,t){let r=vs(e),n=_p(e);return{u0:e[0],u1:e[1],bottom:t?0:ms,head:o=>{let a=Math.abs(o-r);return a<n?Wr+Math.sqrt(n*n-a*a):Wr},step:.05}}function V3(e,t,r){return{u0:e-r,u1:e+r,bot:n=>t-Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),step:.04,mat:[Oe.STONE,0,0]}}function X3(e,t,r,n){return{u0:e-t/2,u1:e+t/2,bottom:r,head:()=>n,step:.5,mat:[Oe.STONE,0,0]}}function dp(e,t,r){let[n,o]=U3[t],a=H3(e,n,o),i=[];r.arches.forEach((h,p)=>i.push(W3(h,p===r.open)));let s=[];for(let h of r.bays||r.arches){let p=vs(h);r.oculi&&i.push(V3(p,6.85,.3)),s.push({c:p,y0:r.win[0],y1:r.win[1],w:1.05})}for(let h of r.extraWindows||[])s.push(h);for(let h of s)i.push(X3(h.c,h.w,h.y0,h.y1));for(let h of r.extraHoles||[])i.push(h);F3(a,{u0:r.u0,u1:r.u1,w0:-Be,w1:Be,top:r.top,holes:i,mat:[Oe.BRICK,0,0],revealMat:[Oe.BRICK,0,0],noEnds:r.noEnds,cuts:r.cuts,topStep:.25});let c=(h,p,u,m,v,d,g)=>{let w=n([h,p,u]),T=n([m,v,d]);kr(e,w[0],w[1],w[2],T[0],T[1],T[2],g)},f=(h,p,u,m,v,d)=>pi(a,h,p,u,m,v,[d,0,0]);for(let h of r.arches){let p=vs(h),u=_p(h),m=28;for(let v of[Be,-Be]){let d=v>0?1:-1,g=v+d*.025;for(let w=0;w<m;w++){let T=Math.PI*w/m,C=Math.PI*(w+1)/m,D=(ue,Fe)=>[p+Math.cos(ue)*Fe,Wr+Math.sin(ue)*Fe],q=D(T,u),H=D(C,u),ae=D(T,u+.26),ve=D(C,u+.26);f([q[0],q[1],g],[H[0],H[1],g],[ve[0],ve[1],g],[ae[0],ae[1],g],[0,0,d],Oe.STONE);let J=Math.cos((T+C)/2),Ee=Math.sin((T+C)/2);f([ae[0],ae[1],v],[ve[0],ve[1],v],[ve[0],ve[1],g],[ae[0],ae[1],g],[J,Ee,0],Oe.STONE)}}}if(r.arches.forEach((h,p)=>{p!==r.open&&c(h[0]-.02,ms,-Be-.05,h[1]+.02,ms+.09,Be+.05,Oe.STONE)}),c(r.u0,up,-Be,r.u1,up+.18,Be+.09,Oe.STONE),c(r.u0,r.win[0]-.12,Be-.01,r.u1,r.win[0],Be+.06,Oe.STONE),r.cornice)for(let[h,p,u]of r.cornice)c(h,u-.22,Be-.01,p,u,Be+.16,Oe.STONE),c(h,u,Be-.01,p,u+.16,Be+.42,Oe.STONE);for(let{c:h,y0:p,y1:u,w:m,door:v}of s){let d=m/2;if(f([h-d-.01,p,.06],[h+d+.01,p,.06],[h+d+.01,u,.06],[h-d-.01,u,.06],[0,0,1],v?Oe.DARK:Oe.PANE),v){c(h-d-.16,0,Be-.01,h-d,u+.16,Be+.07,Oe.STONE),c(h+d,0,Be-.01,h+d+.16,u+.16,Be+.07,Oe.STONE),c(h-d-.16,u,Be-.01,h+d+.16,u+.2,Be+.09,Oe.STONE),c(h-d,0,.07,h+d,u-.02,.12,Oe.SHUTTER),c(h-.012,0,.12,h+.012,u-.02,.14,Oe.DARK);continue}for(let g of[-1,1]){let w=h+g*d;c(w+g*.02,p+.02,Be+.02,w+g*(d+.025),u-.02,Be+.06,Oe.SHUTTER)}c(h-d-.09,u,Be-.01,h+d+.09,u+.16,Be+.05,Oe.STONE),c(h-d-.09,p-.1,Be-.01,h+d+.09,p,Be+.09,Oe.STONE),c(h-.015,p,.06,h+.015,u,.09,Oe.SHUTTER),c(h-d,(p+u)/2-.015,.06,h+d,(p+u)/2+.015,.09,Oe.SHUTTER)}if(r.oculi)for(let h of r.bays||r.arches){let p=vs(h);f([p-.31,6.54,0],[p+.31,6.54,0],[p+.31,7.16,0],[p-.31,7.16,0],[0,0,1],Oe.DARK)}for(let h of r.cols){let p=ms+.09,u=n([h,0,0]);kr(e,u[0]-.24,p,u[2]-.24,u[0]+.24,p+.12,u[2]+.24,Oe.MARBLE),e.lathe([[.23,p+.12,1],[.24,p+.17],[.2,p+.24],[.215,p+.28],[.17,p+.34,1],[.165,p+.6],[.155,Wr-.5],[.15,Wr-.38,1],[.175,Wr-.34,1],[.17,Wr-.3],[.2,Wr-.22],[.27,Wr-.15],[.29,Wr-.12,1]],u[0],u[2],18,{mat:()=>[Oe.MARBLE,0,0]}),kr(e,u[0]-.29,Wr-.12,u[2]-.29,u[0]+.29,Wr+.01,u[2]+.29,Oe.STONE)}r.walk&&r.walk(e)}function Y3(e){let t=[-1,0,1].map(o=>{let a=B.cx+o*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Oe.STONE,0,0]}});dp(e,"north",{u0:B.westCol-Be,u1:B.eastCol+Be,top:o=>o>xt.x0+1e-6&&o<xt.x1-1e-6?xt.top:Ln,cuts:[xt.x0,xt.x0+1e-5,xt.x1-1e-5,xt.x1],arches:B3,open:gp,cols:j3,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[B.westCol-Be-3.3,xt.x0,Ln],[xt.x1,B.eastCol+Be+3.3,Ln],[xt.x0-.2,xt.x1+.2,xt.top]],walk:o=>{kr(o,Nt.x0,Po,B.northCol+Be,Nt.x1,Po+.2,B.northBack,Oe.PLASTER),kr(o,Nt.x0,0,B.northBack,Nt.x1,Po,B.northBack+.3,Oe.PLASTER);for(let a of[B.cx-7.2,B.cx,B.cx+7.2])pi(o,[a-.8,0,B.northBack-.01],[a+.8,0,B.northBack-.01],[a+.8,2.9,B.northBack-.01],[a-.8,2.9,B.northBack-.01],[0,0,-1],[Oe.DARK,0,0]),kr(o,a-.98,0,B.northBack-.06,a+.98,3.12,B.northBack,Oe.STONE),pi(o,[a-.8,0,B.northBack-.07],[a+.8,0,B.northBack-.07],[a+.8,2.9,B.northBack-.07],[a-.8,2.9,B.northBack-.07],[0,0,-1],[Oe.DARK,0,0])}}),pi(e,[xt.x0,11,B.northCol+.2],[xt.x1,11,B.northCol+.2],[xt.x1,13.6,B.northCol+.2],[xt.x0,13.6,B.northCol+.2],[0,0,-1],[Oe.DARK,0,0]),kr(e,xt.x0+.3,10.88,B.northCol-Be-.06,xt.x1-.3,11,B.northCol-Be+.1,Oe.STONE),kr(e,B.westBack,Po+.2,B.northBack,B.eastBack,Ln,B.northBack+3.4,Oe.BRICK),kr(e,B.westBack,Ro,B.northCol-Be,B.westCol-Be,Ln,B.northCol+Be,Oe.BRICK),kr(e,B.eastCol+Be,Ro,B.northCol-Be,B.eastBack,Ln,B.northCol+Be,Oe.BRICK),kr(e,B.westBack,Po+.2,B.northCol+Be+.12,B.eastBack,Ln,B.northBack,Oe.BRICK),ds(e,[B.westBack-.5,Ln+.16,B.northCol-Be-.42],[xt.x0-B.westBack+.5,0,0],[0,2.6,4.4],Oe.ROOF),ds(e,[xt.x1,Ln+.16,B.northCol-Be-.42],[B.eastBack+.5-xt.x1,0,0],[0,2.6,4.4],Oe.ROOF),ds(e,[xt.x0-.3,xt.top+.16,B.northCol-Be-.42],[xt.x1-xt.x0+.6,0,0],[0,1.4,3],Oe.ROOF),pp(e,[xt.x0-.3,xt.top+.16,B.northCol-Be-.42],[xt.x0-.3,xt.top+1.56,B.northCol-Be+2.58],[xt.x0-.3,xt.top+.16,B.northCol-Be+2.58],[-1,0,0],Oe.BRICK),pp(e,[xt.x1+.3,xt.top+.16,B.northCol-Be-.42],[xt.x1+.3,xt.top+1.56,B.northCol-Be+2.58],[xt.x1+.3,xt.top+.16,B.northCol-Be+2.58],[1,0,0],Oe.BRICK),kr(e,xt.x0,Ln,B.northCol+Be,xt.x1,xt.top,B.northCol+2.6,Oe.BRICK);for(let[o,a]of[[B.cx-9.8,B.northBack+.6],[B.cx+9.4,B.northBack+.4],[B.cx-4.6,B.northBack+1]])kr(e,o-.4,12.5,a-.4,o+.4,15.4,a+.4,Oe.BRICK),kr(e,o-.52,15.4,a-.52,o+.52,15.62,a+.52,Oe.STONE);let r=(o,a,i)=>{let s=o==="west"?-1:1,c=[];hp.forEach((p,u)=>{let m=vs(p);u===1?c.push({c:m,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:m,y0:1,y1:2.75,w:1.05}),c.push({c:m,y0:3.85,y1:5.45,w:1.05})}),dp(e,o,{u0:B.south,u1:B.northCol-Be,top:()=>Ro,arches:[],bays:hp,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[B.south,B.northCol-Be,Ro]]}),kr(e,a,0,B.south,i+s*(Be+.12),Ro,B.northBack+.3,Oe.BRICK);let f=i-s*Be;kr(e,f,0,B.south,f-s*.06,.55,B.northCol-Be,Oe.STONE);let h=i-s*(Be+.42);ds(e,[h,Ro+.16,B.south],[0,0,B.northCol-Be-B.south],[a-h+s*.4,1.9,0],Oe.ROOF)};r("west",B.westBack,B.westCol),r("east",B.eastBack,B.eastCol);let n=Io.x1+.7;kr(e,13.65,7.4,B.south-.02,n,7.62,B.south+.14,Oe.STONE),kr(e,13.65,10.4,B.south-.02,n,10.6,B.south+.38,Oe.STONE),ds(e,[13.65,10.6,B.south+.38],[n-13.65,0,0],[0,2.2,-5],Oe.ROOF)}function pp(e,t,r,n,o,a){let i=[a,0,0];e.tri(e.vert(t,o,i),e.vert(r,o,i),e.vert(n,o,i))}function ds(e,t,r,n,o){let a=O0([r[1]*n[2]-r[2]*n[1],r[2]*n[0]-r[0]*n[2],r[0]*n[1]-r[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,h)=>[t[0]+r[0]*f+n[0]*h,t[1]+r[1]*f+n[1]*h,t[2]+r[2]*f+n[2]*h];pi(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[o,0,0]);let c=.08;pi(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],O0([-n[0],0,-n[2]]),[o,0,0])}function K3(e){let t=B.westBack,r=B.eastBack,n=B.south,o=B.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let h=[t+(r-t)*c/a,0,n+(o-n)*f/i];s[c].push(e.vert(h,[0,1,0],[Oe.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var ps=.46,xa=.58,va=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function Q3(e,t,r){let n=ga+r,o=(e>0?Nt.x1-B.cx:B.cx-Nt.x0)-ya-r,a=ga+r,i=(t>0?Nt.z1-B.cz:B.cz-Nt.z0)-ya-r,s=I0+r,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),h=[[n,c],[n,i],[o,i],[o,a],[f,a]],p=Math.atan2(a,f),u=Math.atan2(c,n);for(let m=1;m<10;m++){let v=p+(u-p)*m/10;h.push([Math.cos(v)*s,Math.sin(v)*s])}return h.map(([m,v])=>[B.cx+e*m,B.cz+t*v])}function Z3(e,t,r){let n=r[0]-t[0],o=r[1]-t[1],a=Math.hypot(n,o),i=n/a,s=o/a,c=-s,f=i,h=ps*.5,p=-h,u=a+h,m=[],v=Math.max(1,Math.ceil((u-p)/1));for(let d=0;d<=v;d++){let g=p+(u-p)*d/v,w=[];for(let T=0;T<va.length;T++){let[C,D]=va[T],q=Math.min(va.length-2,T),H=va[Math.max(0,T-1)],ae=va[Math.min(va.length-1,T+1)],ve=(ae[0]-H[0])*ps,Ee=(ae[1]-H[1])*xa,ue=-ve,Fe=Math.hypot(Ee,ue)||1,Ie=[t[0]+i*g+c*C*ps,D*xa,t[1]+s*g+f*C*ps],Re=[c*(-Ee/Fe),-ue/Fe,f*(-Ee/Fe)];w.push(e.vert(Ie,Re[1]<-.2?[c*Math.sign(C),.3,f*Math.sign(C)]:Re,[Oe.HEDGE,0,0]))}m.push(w)}for(let d=0;d<v;d++)for(let g=0;g<va.length-1;g++)e.tri(m[d][g],m[d+1][g],m[d+1][g+1]),e.tri(m[d][g],m[d+1][g+1],m[d][g+1]);for(let[d,g]of[[0,-1],[v,1]]){let w=m[d],T=e.vert([t[0]+i*(d?u:p),xa*.5,t[1]+s*(d?u:p)],[i*g,0,s*g],[Oe.HEDGE,0,0]);for(let C=0;C<w.length-1;C++)e.tri(T,w[C],w[C+1])}}function J3(e){for(let t of[-1,1])for(let r of[-1,1]){let n=Q3(t,r,.3);for(let o=0;o<n.length;o++)Z3(e,n[o],n[(o+1)%n.length])}}function e5(e){let t=B.cx,r=B.cz,n=()=>[Oe.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,r,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,r,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,r,16,{mat:()=>[Oe.DARK,0,0]});let o={mat:()=>[Oe.IRON,0,0]};e.tube([[t-.72,1.1,r],[t-.72,1.9,r],[t-.7,2.3,r]],()=>.035,8,6,o),e.tube([[t+.72,1.1,r],[t+.72,1.9,r],[t+.7,2.3,r]],()=>.035,8,6,o);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,r])}e.tube(a,()=>.03,20,6,o),e.tube([[t-.45,2.25,r],[t,2.38,r],[t+.45,2.25,r]],()=>.02,8,5,o),e.ellipsoid([t,2.32,r],[.03,.13,.13],6,10,o);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,h=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*h*i*-1+0),1.95+Math.sin(f)*h,r])}e.tube(s,()=>.016,16,5,o)}}function t5(e){for(let[t,r]of Ul)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,r,20,{mat:()=>[Oe.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,r,12,{mat:()=>[Oe.SOIL,0,0]}),e.tube([[t,.6,r],[t+.02,1,r-.01],[t-.01,1.45,r+.02]],n=>.045-n*.02,6,6,{mat:()=>[Oe.BARK,0,0]})}function r5(e){let[t,,r]=Co.c,n=Mp(7),o=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of o){let c=[[t+a*.05,0,r+i*.05],[t+a*.25,s*.35,r+i*.25],[t+a*.6,s*.7,r+i*.6],[t+a,s,r+i],[t+a*1.35+(n()-.5),s+1.4,r+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Oe.BARK,0,0]});for(let f=0;f<2;f++){let h=.55+f*.2,p=[t+a*h,s*h,r+i*h],u=n()*Math.PI*2;e.tube([p,[p[0]+Math.cos(u)*1.3,p[1]+.9,p[2]+Math.sin(u)*1.3],[p[0]+Math.cos(u)*2.3,p[1]+1.4+n(),p[2]+Math.sin(u)*2.3]],m=>.08*(1-m*.7),8,6,{mat:()=>[Oe.BARK,0,0]})}}for(let a of to.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Oe.BARK,0,0]})}function n5(e){let t=()=>[Oe.FARBRICK,0,0],r=()=>[Oe.LEAD,0,0],n=(a,i,s,c,f,h)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let p=[];for(let m=0;m<=12;m++){let v=m/12*Math.PI/2,d=Math.cos(v)*s,g=Math.sin(v)*f;h&&(d*=1-.18*Math.sin(v*2)),p.push([Math.max(d,s*.12),c+g])}e.lathe(p,a,i,28,{mat:r});let u=c+f;e.lathe([[s*.13,u-.2,1],[s*.13,u+3,1],[s*.18,u+3.2,1],[s*.02,u+6.4]],a,i,10,{mat:r})};kr(e,14,0,104,52,26,150,Oe.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:r});let o=(a,i,s)=>{kr(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Oe.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};o(20.5,109,36),o(46.5,112,38)}function o5(e){let r=[B.cx,0,B.cz],n=24,o=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=o;c++){let f=Math.PI/2*(c/o)-.05,h=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],p=[r[0]+h[0]*420,r[1]+h[1]*420,r[2]+h[2]*420];a[i].push(e.vert(p,[-h[0],-h[1],-h[2]],[Oe.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<o;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function a5(){let e=[],t=[],r=[],n=[],o=N3.createBuilder(e,t,r,n);return K3(o),Y3(o),J3(o),e5(o),t5(o),r5(o),o.save(),o.translate(di[0],0,di[1]),n5(o),o.restore(),o5(o),{position:e,normal:t,elements:r,attr:n}}var Ep=[[[13.65,0,Io.z0-.7],[Io.x1+.7,10.6,B.south]],[[B.westBack,Po,B.northCol-Be],[B.eastBack,Ln,B.northBack+3.4]],[[xt.x0,Ln,B.northCol-Be],[xt.x1,xt.top,B.northCol+2.6]],[[B.westBack,0,B.south],[B.westCol+Be,Ro,B.northBack+.3]],[[B.eastCol-Be,0,B.south],[B.eastBack,Ro,B.northBack+.3]],[[14+di[0],0,104+di[1]],[52+di[0],26,150+di[1]]]];function i5(e,t,r,n){let o=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<r[i]||e[i]>n[i])return!1;continue}let s=(r[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),o=Math.max(o,s),a=Math.min(a,c),o>a)return!1}return!0}function R0(e,t,r,n){let o=[(e[0]-r[0])/n[0],(e[1]-r[1])/n[1],(e[2]-r[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=o[0]*a[0]+o[1]*a[1]+o[2]*a[2],c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-1,f=s*s-i*c;if(f<=0)return 0;let h=Math.sqrt(f),p=Math.max(0,(-s-h)/i),u=(-s+h)/i;return Math.max(0,u-p)}function ql(e){for(let[t,r]of Ep)if(i5(e,eo,t,r))return 0;return 1}function Mp(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function s5(){let e=[],t=[],r=[],n=[],o=[],a=[],i=[],s=Mp(21),c=(v,d,g,w,T,C,D)=>{let q=e.length/3;for(let[H,ae]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...v),t.push(H,ae),r.push(d,g,w),n.push(...T),o.push(...C),a.push(...D);i.push(q,q+1,q+2,q,q+2,q+3)},f=(v,d)=>{let g=1;for(let w of to){if(w===d||!w.shadow)continue;let T=R0(v,eo,w.c,w.r);T>0&&(g*=Math.exp(-T*.9))}return g},h=to.map(v=>({...v,pts:null}));for(let v of h)for(let d=0;d<v.n;d++){let g;do g=[s()*2-1,s()*2-1,s()*2-1];while(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]>1);let w=Math.hypot(g[0],g[1],g[2])||1,T=Math.pow(s(),.35)*.98,C=[g[0]/w*T,g[1]/w*T,g[2]/w*T];if(v.spindle){let Ie=C[1],Re=Math.sqrt(Math.max(.02,1-Ie*Ie))*(Ie>0?1-Ie*.55:1+Ie*.25),xe=Math.hypot(C[0],C[2])||1,rt=Re*Math.min(1,xe*1.4);C=[C[0]/xe*rt,Ie,C[2]/xe*rt]}v.magnolia&&C[1]<-.55&&(C[1]=-.55+(C[1]+.55)*.35);let D=[v.c[0]+C[0]*v.r[0],v.c[1]+C[1]*v.r[1],v.c[2]+C[2]*v.r[2]],q,H;if(v.magnolia){let Ie=0;for(let rt of yp)Ie=Math.max(Ie,R0(D,eo,rt.c,rt.r));q=Math.exp(-Ie*1.1);let Re=1;for(let rt of to)if(!rt.magnolia&&rt.shadow){let Xt=R0(D,eo,rt.c,rt.r);Xt>0&&(Re*=Math.exp(-Xt*.9))}q*=ql(D)*Re;let xe=q3(D,Co.c);H=O0([xe[0]/Co.r[0]+C[0]*.5,xe[1]/Co.r[1]+C[1]*.5,xe[2]/Co.r[2]+C[2]*.5]),T=Math.min(1,Math.hypot(xe[0]/Co.r[0],xe[1]/Co.r[1],xe[2]/Co.r[2])*.6+T*.4)}else{let Ie=R0(D,eo,v.c,v.r);q=Math.exp(-Ie*(v.spindle?2.2:1.25)),q*=ql(D)*f(D,to[h.indexOf(v)]),H=O0([C[0]/v.r[0],C[1]/v.r[1],C[2]/v.r[2]])}let ae=Math.max(0,H[0]*eo[0]+H[1]*eo[1]+H[2]*eo[2]),ve=.25+.75*Math.pow(T,1.5)*(.65+.35*(H[1]*.5+.5)),J=v.size[0]+(v.size[1]-v.size[0])*s(),Ee=.85+s()*.3,ue=v.leaf.map(Ie=>Ie*Ee),Fe=v.cell;v.cell===3&&s()<.35&&(Fe=2),c(D,J,Fe,s()*Math.PI*2,[q,ve,.35+.65*ae],ue,v.bloom)}for(let[v,d]of bp){let g=s()<.5;for(let w=0;w<3;w++){let T=[v+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],C=ql(T)*f(T,null);c(T,.32+s()*.12,s()<.7?3:2,s()*6.28,[C,.6+s()*.3,.8],[.75,.9,.6],g?[1,.55,.75]:[.85,.8,1.15])}}let p=i.length/6,u=Array.from({length:p},(v,d)=>d);for(let v=p-1;v>0;v--){let d=Math.floor(s()*(v+1));[u[v],u[d]]=[u[d],u[v]]}let m=[];for(let v of u)for(let d=0;d<6;d++)m.push(i[v*6+d]);return{center:e,corner:t,par:r,light:n,tint:o,bloom:a,elements:m}}var Ue=e=>e.toFixed(4),xs=e=>`vec3(${Ue(e[0])}, ${Ue(e[1])}, ${Ue(e[2])})`,Ap=`
const vec3 SUN = ${xs(eo)};
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
`,c5=Ep.map(([e,t])=>`if (hitBox(ro, SUN, ${xs(e)}, ${xs(t)})) return 0.0;`).join(`
	`),l5=to.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${xs(e.c)}, ${xs(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),f5=(e,t,r,n,o,a,i,s,c)=>`
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
	}`,N0=ga+.3,F0=ga+.3,ys=I0+.3,mp=Nt.x1-B.cx-ya-.3,u5=Nt.z1-B.cz-ya-.3,h5=B.cz-Nt.z0-ya-.3,d5=Math.sqrt(ys*ys-N0*N0),p5=Math.sqrt(ys*ys-F0*F0),m5=[[B.cx,B.cz,.86,1.18],[B.cx,B.cz,1.25,.3],...Ul.map(([e,t])=>[e,t,.42,.65])].map(([e,t,r,n])=>`if (hitCyl(ro, vec2(${Ue(e)}, ${Ue(t)}), ${Ue(r)}, ${Ue(n)})) return 0.0;`).join(`
	`),v5=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Ue(B.cx)}, ${Ue(B.cz)}));
	float b1 = xz.y > ${Ue(B.cz)} ? ${Ue(u5)} : ${Ue(h5)};
	vec2 A = vec2(${Ue(N0)}, ${Ue(d5)}), Bp = vec2(${Ue(N0)}, b1), C = vec2(${Ue(mp)}, b1);
	vec2 D = vec2(${Ue(mp)}, ${Ue(F0)}), E = vec2(${Ue(p5)}, ${Ue(F0)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Ue(ys)}));
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
	${c5}
	${f5("z",B.northCol,B.westCol,Hl,G0,Be+gs,Be+gs,gp,"ro.z > "+Ue(B.northCol-Be))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${m5}
	if (ro.y < ${Ue(xa)} && ro.x > ${Ue(Nt.x0)} && ro.x < ${Ue(Nt.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Ue(xa)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Ue(ps*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Ue(xa)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${l5}
	return tr;
}
`,g5=`
precision highp float;
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Ap}
${v5}

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
			if (edge < ${Ue(ya)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Ue(ya)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Ue(I0)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Ue(B.cz)}, P.x - ${Ue(B.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Ue(I0)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Ue(xa)}, P.y) * (0.6 + 0.4 * n);
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
}`,x5=`
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
}`,b5=`
precision highp float;
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Ap}
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
}`;function w5(e,t,r){let n=e.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(t).then(o=>{if(!o.ok)throw new Error("Could not load "+t);return o.blob()}).then(o=>createImageBitmap(o,{premultiplyAlpha:"none"})).then(o=>n({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o)),n}Bl.exports=e=>{let t=a5(),r=s5(),n=w5(e,"res/garden/foliage.webp",[0,0,0,0]),o=Date.now(),a=()=>$l.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:20,i=e({frag:g5,vert:x5,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>$l.gardenDetail}}),s=e({frag:b5,vert:y5,attributes:{center:r.center,corner:r.corner,par:r.par,light:r.light,tint:r.tint,bloom:r.bloom},elements:new Uint32Array(r.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(r.elements.length*$l.leafShare/6)*6});return function(){i(),s()}};Bl.exports.layout={G:B,YARD:Nt,SUN:eo}});var Rp=de((Z4,Cp)=>{"use strict";var _5=oa(),{C:zp}=gn(),zn=zp.x1+.35,Xl=zp.zc,jl=[zn-7.3,2,Xl],Sp=5.2*Math.PI/180,kp=2100,E5=725,M5=1288,A5=1450,T5=2576,ba=Xl-3.2,Lp=Xl+3.3,Wl=zn+5,Vl=zn+11.7,D0=3.9,bs=zn+22.7,$0=40;function S5(){let e=[],t=[],r=[],n=[],o=_5.createBuilder(e,t,r,n),a=(h,p,u,m,v,d)=>{let g=[];for(let w=0;w<=v;w++){g.push([]);for(let T=0;T<=d;T++){let C=[0,1,2].map(D=>h[D]+p[D]*w/v+u[D]*T/d);g[w].push(o.vert(C,m,[0,0,0]))}}for(let w=0;w<v;w++)for(let T=0;T<d;T++)o.tri(g[w][T],g[w+1][T],g[w+1][T+1]),o.tri(g[w][T],g[w+1][T+1],g[w][T+1])},i=Lp-ba,s=.7;a([zn-s,0,ba],[Wl-zn+s,0,0],[0,0,i],[0,1,0],6,4);let c=Vl-Wl,f=Math.hypot(c,D0);return a([Wl,0,ba],[c,D0,0],[0,0,i],[-D0/f,c/f,0],6,4),a([Vl,D0,ba],[bs-Vl,0,0],[0,0,i],[0,1,0],6,4),a([zn-s,0,ba],[bs-zn+s,0,0],[0,$0,0],[0,0,1],12,12),a([zn-s,0,Lp],[bs-zn+s,0,0],[0,$0,0],[0,0,-1],12,12),a([bs,0,ba],[0,$0,0],[0,0,i],[-1,0,0],8,4),a([zn-s,$0,ba],[bs-zn+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:r,attr:n}}var Bn=e=>e.toFixed(5),k5=`
precision highp float;
uniform sampler2D photo;
varying vec3 v_pos;

void main() {
	vec3 d = v_pos - vec3(${Bn(jl[0])}, ${Bn(jl[1])}, ${Bn(jl[2])});
	float c = ${Bn(Math.cos(Sp))}, s = ${Bn(Math.sin(Sp))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Bn(E5)} + ${Bn(kp)} * d.z / fw, ${Bn(M5)} - ${Bn(kp)} * up / fw);
	vec2 uv = px / vec2(${Bn(A5)}, ${Bn(T5)});
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
}`,L5=`
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
}`;Cp.exports=e=>{let t=S5(),r=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(o=>{if(!o.ok)throw new Error("Could not load the Florence photo");return o.blob()}).then(o=>createImageBitmap(o)).then(o=>r({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o));let n=e({frag:k5,vert:L5,attributes:{position:t.position},elements:new Uint32Array(t.elements),uniforms:{photo:r},cull:{enable:!1}});return function(){n()}}});var Gp=de((J4,Fp)=>{"use strict";var{A:Ip,BENCH:z5,SHAFT:Yl,TREE:ws,oculusGLSL:C5}=Jn(),R5=io(),q0=ws.sxz,Pp=ws.sy,Op=ws.yaw;function I5(e){let t=new DataView(e),r=t.getUint32(4,!0),n=t.getUint32(8,!0),o=t.getUint32(12,!0),a=[0,1,2].map(u=>t.getFloat32(16+u*4,!0)),i=[0,1,2].map(u=>t.getFloat32(28+u*4,!0)),s=40,c=new Uint16Array(e,s,r*3);s+=r*6;let f=new Uint16Array(e,s,r*2);s+=r*4;let h=new Int8Array(e,s,r*3);s+=r*3,s=s+3&-4;let p=new Uint32Array(e,s,o);return{nV:r,nWood:n,nI:o,mn:a,sz:i,pos:c,uv:f,nrm:h,idx:p}}function P5(e){let t=new Float32Array(e.nV*3),r=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),o=new Float32Array(e.nV),a=Math.cos(Op),i=Math.sin(Op);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*q0,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*Pp,h=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*q0;t[s*3]=Ip.cx+a*c+i*h,t[s*3+1]=z5.soil+.02+f,t[s*3+2]=Ip.zc-i*c+a*h;let p=e.nrm[s*3]/127/q0,u=e.nrm[s*3+1]/127/Pp,m=e.nrm[s*3+2]/127/q0,v=Math.hypot(p,u,m)||1;p/=v,u/=v,m/=v,r[s*3]=a*p+i*m,r[s*3+1]=u,r[s*3+2]=-i*p+a*m,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,o[s]=s>=e.nWood?1:0}return{position:t,normal:r,uv:n,leaf:o,elements:e.idx}}function Np(e,t,r,n){let o=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>o({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...r})).catch(a=>console.error(a)),o}var en=e=>e.toFixed(4),mi=ws.crownC,vi=ws.crownR,O5=`
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
}`,N5=`
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
}`;Fp.exports=e=>{let t=null,r=Np(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Np(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),o=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=P5(I5(a));t=e({vert:O5,frag:N5,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:r,bark:n,time:()=>R5.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Yp=de((eE,Kl)=>{"use strict";var{A:Dp,BENCH:Wp,oculusGLSL:Vp}=Jn(),$p=io(),F5=1.74,G5=1.877,ro=F5/G5,_a={x:Dp.cx-1.22,z:Dp.zc+.02,hipY:Wp.seat+.115},jn=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],qp=e=>[-e[0],-e[1],-e[2],e[3]],Ea=(e,t)=>{let r=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/r*n,e[1]/r*n,e[2]/r*n,Math.cos(t/2)]},Hp=(e,t,r)=>jn(Ea([0,0,1],r*Math.PI/180),jn(Ea([0,1,0],t*Math.PI/180),Ea([1,0,0],e*Math.PI/180))),D5=e=>{let t=Math.hypot(...e)||1;return e.map(r=>r/t)};function No(e,t,r){let[n,o,a,i]=t,s=n*n,c=o*o,f=a*a,h=n*o,p=n*a,u=o*a,m=i*n,v=i*o,d=i*a;return[(1-2*(c+f))*r[0],2*(h+d)*r[0],2*(p-v)*r[0],0,2*(h-d)*r[1],(1-2*(s+f))*r[1],2*(u+m)*r[1],0,2*(p+v)*r[2],2*(u-m)*r[2],(1-2*(s+c))*r[2],0,e[0],e[1],e[2],1]}function ho(e,t){let r=new Array(16);for(let n=0;n<4;n++)for(let o=0;o<4;o++)r[n*4+o]=e[o]*t[n*4]+e[4+o]*t[n*4+1]+e[8+o]*t[n*4+2]+e[12+o]*t[n*4+3];return r}function $5(e){let t=Math.hypot(e[0],e[1],e[2]),r=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),o=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/r,c=e[5]/r,f=e[6]/r,h=e[8]/n,p=e[9]/n,u=e[10]/n,m=o+c+u,v;if(m>0){let d=Math.sqrt(m+1)*2;v=[(f-p)/d,(h-i)/d,(a-s)/d,d/4]}else if(o>c&&o>u){let d=Math.sqrt(1+o-c-u)*2;v=[d/4,(s+a)/d,(h+i)/d,(f-p)/d]}else if(c>u){let d=Math.sqrt(1+c-o-u)*2;v=[(s+a)/d,d/4,(p+f)/d,(h-i)/d]}else{let d=Math.sqrt(1+u-o-c)*2;v=[(h+i)/d,(p+f)/d,d/4,(a-s)/d]}return D5(v)}var U0={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,r=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,o)=>{U0[e+"Hand"+n+"1"]=[0,0,t*(18+o*6)*r],U0[e+"Hand"+n+"2"]=[0,0,t*(26+o*6)*r],U0[e+"Hand"+n+"3"]=[0,0,t*16*r]})}function wa(e,t,r){let n=e-t;return n-=Math.round(n),Math.exp(-(n/r)*(n/r))}function Up(e){let t=9+20*Math.cos(2*Math.PI*e),r=4+13*wa(e,.14,.07)+57*wa(e,.72,.12),n=5*wa(e,.06,.04)-9*wa(e,.42,.12)+17*wa(e,.62,.05)-3*wa(e,.85,.1),o=-26*wa(e,.58,.06);return{hip:t,knee:r,ankle:n,toe:o}}function q5(e){let t=(e%1+1)%1,r=Up(t),n=Up(t+.5),o=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*o,0,0],RightArm:[-16*o,0,0],LeftForeArm:[0,-14-8*Math.max(0,-o),0],RightForeArm:[0,14+8*Math.max(0,o),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-r.hip,0,0],LeftLeg:[r.knee,0,0],LeftFoot:[r.ankle,0,0],LeftToeBase:[r.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*o}}var Bp=`
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
}`,jp=`
precision highp float;
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${Vp()}
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
}`;function H5(e,t){let r=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((o,a)=>{let i=new Image;i.onload=()=>o(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}var Xp={w:.13,h:.2},H0=e=>.011*(1-Math.pow(1-e,3));function U5(){let e=[],t=[],r=[],n=[],o=[],a=(d,g,w,T,C,D,q)=>{let H=e.length/3;[d,g,w,T].forEach((ae,ve)=>{e.push(...ae),t.push(...C),r.push(...q[ve]),n.push(D)}),o.push(H,H+1,H+2,H,H+2,H+3)},{w:i,h:s}=Xp,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],h=-.006,p=i+.001,u=c+.001;a([0,h,-u],[p,h,-u],[p,h,u],[0,h,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,h+.001,-u],[0,h+.001,u],[p,h+.001,u],[p,h+.001,-u],[0,1,0],2,f),a([-p,h,-u],[0,h,-u],[0,h,u],[-p,h,u],[0,-1,0],2,f),a([-p,h+.001,-u],[-p,h+.001,u],[0,h+.001,u],[0,h+.001,-u],[0,1,0],2,f);let m=8;for(let d of[1,-1]){for(let w=0;w<m;w++){let T=w/m,C=(w+1)/m,D=(.002+T*(i-.002))*d,q=(.002+C*(i-.002))*d,H=H0(T),ae=H0(C),ve=d>0?T:1-T,J=d>0?C:1-C,Ee=1,ue=-(ae-H)/(q-D);a([D,H,-c],[q,ae,-c],[q,ae,c],[D,H,c],[ue,Ee,0],3,[[ve,1],[J,1],[J,0],[ve,0]]),a([D,h+.001,c],[q,h+.001,c],[q,ae,c],[D,H,c],[0,0,1],4,f),a([D,H,-c],[q,ae,-c],[q,h+.001,-c],[D,h+.001,-c],[0,0,-1],4,f)}let g=i*d;a([g,h+.001,-c],[g,H0(1),-c],[g,H0(1),c],[g,h+.001,c],[d,0,0],4,f)}let v=10;for(let d=0;d<v;d++){let g=d/v,w=(d+1)/v,T=e.length/3;for(let[C,D]of[[g,-c],[w,-c],[w,c],[g,c]])e.push(C,0,D),t.push(0,1,0),r.push(C,(D+c)/s),n.push(5);o.push(T,T+1,T+2,T,T+2,T+3)}return{pos:e,nrm:t,uv:r,kind:n,idx:o}}function B5(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let r=7,n=()=>(r=r*16807%2147483647,r/2147483647),o=(i,s,c,f,h,p,u)=>{for(let m=0;m<p;m++){let v=i+(n()-.5)*c*2,d=s+(n()-.5)*f*2,g=20+n()*60,w=t.createRadialGradient(v,d,0,v,d,g);w.addColorStop(0,`rgba(${h},${u})`),w.addColorStop(1,`rgba(${h},0)`),t.fillStyle=w,t.fillRect(v-g,d-g,g*2,g*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var j5=`
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
		float r = u * ${Xp.w.toFixed(3)};
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
}`,W5=`
precision highp float;
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Vp()}
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
}`;function V5(){let e=[],t=[],r=[],n=[],o=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],h=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],p=16;for(let u=0;u<h.length;u++){let[m,v,d,g]=h[u],w=g===2?.45:1;for(let T=0;T<=p;T++){let C=T/p*Math.PI*2;e.push(Math.cos(C)*m,v,Math.sin(C)*m*w);let D=Math.max(u-1,0),q=Math.min(u+1,h.length-1),H=h[q][0]-h[D][0],ae=h[q][1]-h[D][1],ve=Math.hypot(H,ae)||1;t.push(Math.cos(C)*ae/ve,-H/ve,Math.sin(C)*ae/ve/w),r.push(...d),n.push(g)}}for(let u=0;u<h.length-1;u++)for(let m=0;m<p;m++){let v=u*(p+1)+m,d=v+p+1;o.push(v,d,v+1,v+1,d,d+1)}return{pos:e,nrm:t,col:r,mat:n,idx:o}}var X5=`
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
}`,Y5=`
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
}`,K5=`
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
}`,Q5=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Kl.exports=e=>{let t="res/avatar/",r=null,n=Date.now(),o=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[_a.x,1.9,_a.z],glow:0};Promise.all([fetch(t+"avatar.json").then(q=>q.json()),fetch(t+"avatar.bin").then(q=>q.arrayBuffer())]).then(([q,H])=>{r=s(q,H)}).catch(q=>console.error(q));let i=e.texture({data:[[[255,255,255,255]]]});function s(q,H){let ae=(Se,nt)=>new Float32Array(H,Se,nt),ve=q.bones,J=ve.length,Ee={};ve.forEach((Se,nt)=>{Ee[Se.name]=nt});let ue=[];for(let Se=0;Se<J;Se++)ue.push(Array.from(ae(q.ibm+Se*64,16)));let Fe=ve.map(Se=>No(Se.t,Se.r,Se.s)),Ie=[];for(let Se=0;Se<J;Se++){let nt=ve[Se].parent;Ie[Se]=nt<0?Fe[Se]:ho(Ie[nt],Fe[Se])}let Re=Ie.map($5),xe=q.meshes.map(Se=>{let nt=ae(Se.pos,Se.n*3),yt=ae(Se.nrm,Se.n*3),Dt=ae(Se.uv,Se.n*2),_t=new Uint8Array(H,Se.jnt,Se.n*4),zt=ae(Se.wgt,Se.n*4),bt=new Uint16Array(H,Se.idx,Se.ni),$t={};for(let fn in Se.morphs){let rn=Se.morphs[fn];$t[fn]={idx:new Uint16Array(H,rn.idx,rn.n),d:ae(rn.d,rn.n*3)}}let Yt=new Float32Array(Se.n*3),y=new Float32Array(Se.n*3),jt=new Float32Array(Se.n*3),mr=e.buffer({data:Yt,usage:"dynamic"}),Qe=e.buffer({data:y,usage:"dynamic"}),Ct=/hair/.test(Se.name),ot=/EyeAO|Eyelash/.test(Se.name),nr=/Body|Head/.test(Se.name),sr=Se.kind||0;return{m:Se,pos:nt,nrm:yt,uv:Dt,jnt:_t,wgt:zt,idx:bt,morphs:$t,outP:Yt,outN:y,work:jt,pb:mr,nbuf:Qe,tex:Se.tex?H5(e,t+Se.tex):i,kind:sr,alphaScale:/EyeAO/.test(Se.name)?.25:1,blend:Se.blend||Ct,alphaCut:Ct?.35:ot?.02:0,skin:nr?1:0}}),rt=e({vert:Bp,frag:jp,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1}}),Xt=e({vert:Bp,frag:jp,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}});for(let Se of xe)Se.uvBuf=e.buffer(Se.uv),Se.el=e.elements({data:Se.idx,type:"uint16"});let ct=Ie[Ee.Hips],Ft=Ea([1,0,0],-Math.PI/2),Gt=ho(No([_a.x-ct[12]*ro,_a.hipY-ct[14]*ro,_a.z+ct[13]*ro],Ft,[1,1,1]),No([0,0,0],[0,0,0,1],[ro,ro,ro])),ir=new Array(J),Zt=-1,Pn=(Se,nt,yt)=>ho(No([Se,0,nt],Ea([0,1,0],yt),[1,1,1]),No([0,0,0],[0,0,0,1],[ro,ro,ro])),pr=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Se=>Ee[Se]),Rr=pr.map(Se=>Ie[Se][13]*ro);function At(Se){let nt=q5(Se.phase),yt={},Dt=y=>{for(let jt in y){let mr=y[jt],Qe=Hp(mr[0],mr[1],mr[2]);yt[jt]=yt[jt]?jn(yt[jt],Qe):Qe}};Dt(nt.swing),Dt(nt.pose);let _t=Math.cos(Se.heading),zt=-Math.sin(Se.heading),bt=Pn(Se.x+_t*nt.sway,Se.z+zt*nt.sway,Se.heading),$t=new Array(J);for(let y=0;y<J;y++){let jt=ve[y],mr=Fe[y],Qe=yt[jt.name];if(Qe){let Ct=Re[y],ot=jn(qp(Ct),jn(Qe,Ct));mr=No(jt.t,jn(jt.r,ot),jt.s)}$t[y]=jt.parent<0?ho(bt,mr):ho($t[jt.parent],mr)}let Yt=1/0;pr.forEach((y,jt)=>{Yt=Math.min(Yt,$t[y][13]-Rr[jt])});for(let y=0;y<J;y++)$t[y]=$t[y].slice(),$t[y][13]-=Yt,ir[y]=ho($t[y],ue[y]);return{blink:0}}function De(Se,nt){if(nt)return At(nt);let yt=Math.sin(Se*2*Math.PI/4.2),Dt=Se%3.7,_t=Dt<.16?Math.sin(Dt/.16*Math.PI):0,bt={RightArm:[0,0,11*Math.sin(Se*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((Qe,Ct)=>{let ot=Math.sin(Se*1.1-Ct*.5);bt["RightHand"+Qe+"1"]=[0,0,8+12*ot],bt["RightHand"+Qe+"2"]=[0,0,6+10*ot]});let $t={},Yt=(Qe,Ct)=>{for(let ot in Qe){let nr=Qe[ot],sr=Hp(nr[0]*Ct,nr[1]*Ct,nr[2]*Ct);$t[ot]=$t[ot]?jn($t[ot],sr):sr}};Yt(U0,1),Yt({Spine1:[yt*.8,0,0],Spine2:[yt*.6,0,0]},1),Yt(bt,1);let y=new Array(J),jt=new Array(J);for(let Qe=0;Qe<J;Qe++){let Ct=ve[Qe],ot=Fe[Qe],nr=$t[Ct.name];if(nr){let sr=Re[Qe],fn=jn(qp(sr),jn(nr,sr));ot=No(Ct.t,jn(Ct.r,fn),Ct.s)}y[Qe]=Ct.parent<0?ho(Gt,ot):ho(y[Ct.parent],ot),jt[Qe]=null}for(let Qe=0;Qe<J;Qe++)ir[Qe]=ho(y[Qe],ue[Qe]);let mr=Qe=>[Qe[12],Qe[13],Qe[14]];return a.headPos=mr(y[Ee.Head]),a.hipsPos=mr(y[Ee.Hips]),a.headM=y[Ee.Head],{blink:_t}}function ft(Se,nt){let{pos:yt,nrm:Dt,jnt:_t,wgt:zt,outP:bt,outN:$t,work:Yt,m:y}=Se,jt=y.n,mr=yt;if(nt){Yt.set(yt);for(let Qe in Se.morphs){let Ct=nt[Qe]||0;if(Ct<=0)continue;let ot=Se.morphs[Qe];for(let nr=0;nr<ot.idx.length;nr++){let sr=ot.idx[nr]*3;Yt[sr]+=ot.d[nr*3]*Ct,Yt[sr+1]+=ot.d[nr*3+1]*Ct,Yt[sr+2]+=ot.d[nr*3+2]*Ct}}mr=Yt}for(let Qe=0;Qe<jt;Qe++){let Ct=mr[Qe*3],ot=mr[Qe*3+1],nr=mr[Qe*3+2],sr=Dt[Qe*3],fn=Dt[Qe*3+1],rn=Dt[Qe*3+2],Uo=0,Vn=0,Ir=0,un=0,Nn=0,Bo=0;for(let xo=0;xo<4;xo++){let Fn=zt[Qe*4+xo];if(Fn===0)continue;let er=ir[_t[Qe*4+xo]];Uo+=Fn*(er[0]*Ct+er[4]*ot+er[8]*nr+er[12]),Vn+=Fn*(er[1]*Ct+er[5]*ot+er[9]*nr+er[13]),Ir+=Fn*(er[2]*Ct+er[6]*ot+er[10]*nr+er[14]),un+=Fn*(er[0]*sr+er[4]*fn+er[8]*rn),Nn+=Fn*(er[1]*sr+er[5]*fn+er[9]*rn),Bo+=Fn*(er[2]*sr+er[6]*fn+er[10]*rn)}bt[Qe*3]=Uo,bt[Qe*3+1]=Vn,bt[Qe*3+2]=Ir;let go=Math.hypot(un,Nn,Bo)||1;$t[Qe*3]=un/go,$t[Qe*3+1]=Nn/go,$t[Qe*3+2]=Bo/go}y.grid&&!Jt&&Je(Se),Se.pb.subdata(bt),Se.nbuf.subdata($t)}function Je(Se){let[nt,yt]=Se.m.grid,Dt=Se.outP,_t=Se.outN,zt=Wp.seat+.012;for(let bt=1;bt<nt;bt++){let $t=Math.pow(1-bt/(nt-1),1.5);for(let Yt=0;Yt<yt;Yt++){let y=(bt*yt+Yt)*3;Dt[y+1]>zt?Dt[y+1]=zt+(Dt[y+1]-zt)*Math.max($t,.15):Dt[y+1]=zt}}for(let bt=0;bt<_t.length;bt+=3)_t[bt]=0,_t[bt+1]=1,_t[bt+2]=0}let Jt=!1;function On(Se,nt){Jt=!!nt;let yt=De(Se,nt),Dt={eyeBlinkLeft:yt.blink,eyeBlinkRight:yt.blink};for(let _t of xe)ft(_t,Object.keys(_t.morphs).length?Dt:null);a.pose=yt}return{parts:xe,update:On,drawOpaque:rt,drawBlend:Xt,state:a}}function c(q,H,ae){let ve=Math.min(1,Math.max(0,(ae-q)/(H-q)));return ve*ve*(3-2*ve)}let f=U5(),h=B5(),p=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):i,u=e({vert:j5,frag:W5,attributes:{position:f.pos,normal:f.nrm,uv:f.uv,kind:f.kind},elements:new Uint16Array(f.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),m=V5(),v=e({vert:X5,frag:Y5,attributes:{position:m.pos,normal:m.nrm,color:m.col,mat:m.mat},elements:new Uint16Array(m.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),d=e({vert:K5,frag:Q5,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function g(q){let H=q.headM,ae=xe=>{let rt=Math.hypot(...xe)||1;return xe.map(Xt=>Xt/rt)},ve=ae([H[4],H[5],H[6]]),J=ae([H[8],H[9],H[10]]),Ee=ve,ue=J.map(xe=>-xe),Fe=[ue[1]*Ee[2]-ue[2]*Ee[1],ue[2]*Ee[0]-ue[0]*Ee[2],ue[0]*Ee[1]-ue[1]*Ee[0]],Ie=q.headPos,Re=[0,1,2].map(xe=>Ie[xe]+ve[xe]*.06+J[xe]*.185);return[Fe[0],Fe[1],Fe[2],0,ue[0],ue[1],ue[2],0,Ee[0],Ee[1],Ee[2],0,Re[0],Re[1],Re[2],1]}let w=-1,T="",C=null;function D(q){if(!r)return;let H=($p.motion,o()),ae=C?[C.x,C.z,C.heading,C.phase].map(J=>J.toFixed(4)).join():"";(ae!==T||!C&&Math.abs(H-w)>($p.isPhone?1/30:0))&&(r.update(H,C),w=H,T=ae);for(let J of r.parts)J.blend||r.drawOpaque({pb:J.pb,nb:J.nbuf,uv:J.uvBuf,el:J.el,tex:J.tex,alphaCut:J.alphaCut,skin:J.skin,kind:J.kind,alphaScale:J.alphaScale});let ve=r.state;if(ve.headM&&!C){u({model:g(ve)});let J=ve.headPos,Ee=Math.sin(H*1.3)*.02,ue=[J[0],J[1]+.62+Ee,J[2]+.05],Fe=H*.6,Ie=No(ue,jn(Ea([0,1,0],Fe),Ea([0,0,1],.18)),[1.2,1.2,1.2]),Re=.5+.5*Math.sin(H*2);v({model:Ie,pulse:Re}),a.glowPos=ue,a.glow=.06+.03*Re,d({center:[ue[0],ue[1]-.12,ue[2]],size:.1,pulse:Re})}for(let J of r.parts)J.blend&&r.drawBlend({pb:J.pb,nb:J.nbuf,uv:J.uvBuf,el:J.el,tex:J.tex,alphaCut:J.alphaCut,skin:J.skin,kind:J.kind,alphaScale:J.alphaScale})}return D.state=a,D.place=_a,D.setWalk=q=>{C=q||null,C&&(a.glow=0)},D};Kl.exports.PLACE=_a});var Ql=de((tE,Kp)=>{"use strict";Kp.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Zl=de((rE,Qp)=>{Qp.exports=1e-6});var Jl=de((nE,Zp)=>{Zp.exports=Z5;function Z5(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var em=de((oE,Jp)=>{Jp.exports=J5;function J5(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var ef=de((aE,tm)=>{tm.exports=ew;function ew(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}});var tf=de((iE,rm)=>{rm.exports=tw;function tw(e,t){var r=t[0],n=t[1],o=t[2],a=r*r+n*n+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var rf=de((sE,nm)=>{nm.exports=rw;function rw(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var sm=de((cE,im)=>{im.exports=ow;var om=ef(),am=tf(),nw=rf();function ow(e,t){var r=om(e[0],e[1],e[2]),n=om(t[0],t[1],t[2]);am(r,r),am(n,n);var o=nw(r,n);return o>1?0:Math.acos(o)}});var lm=de((lE,cm)=>{cm.exports=aw;function aw(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var um=de((fE,fm)=>{fm.exports=iw;function iw(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}});var dm=de((uE,hm)=>{hm.exports=sw;var nf=Zl();function sw(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(r-a)<=nf*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=nf*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(o-s)<=nf*Math.max(1,Math.abs(o),Math.abs(s))}});var mm=de((hE,pm)=>{pm.exports=cw;function cw(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var gm=de((dE,vm)=>{vm.exports=lw;function lw(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}});var of=de((pE,xm)=>{xm.exports=fw;function fw(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}});var bm=de((mE,ym)=>{ym.exports=of()});var af=de((vE,wm)=>{wm.exports=uw;function uw(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}});var Em=de((gE,_m)=>{_m.exports=af()});var sf=de((xE,Mm)=>{Mm.exports=hw;function hw(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}});var Tm=de((yE,Am)=>{Am.exports=sf()});var km=de((bE,Sm)=>{Sm.exports=dw;function dw(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}});var zm=de((wE,Lm)=>{Lm.exports=pw;function pw(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}});var Rm=de((_E,Cm)=>{Cm.exports=mw;function mw(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var Pm=de((EE,Im)=>{Im.exports=vw;function vw(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var Nm=de((ME,Om)=>{Om.exports=gw;function gw(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var Gm=de((AE,Fm)=>{Fm.exports=xw;function xw(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}});var $m=de((TE,Dm)=>{Dm.exports=yw;function yw(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}});var cf=de((SE,qm)=>{qm.exports=bw;function bw(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}});var Um=de((kE,Hm)=>{Hm.exports=cf()});var lf=de((LE,Bm)=>{Bm.exports=ww;function ww(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}});var Wm=de((zE,jm)=>{jm.exports=lf()});var ff=de((CE,Vm)=>{Vm.exports=_w;function _w(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}});var Ym=de((RE,Xm)=>{Xm.exports=ff()});var uf=de((IE,Km)=>{Km.exports=Ew;function Ew(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}});var Zm=de((PE,Qm)=>{Qm.exports=uf()});var ev=de((OE,Jm)=>{Jm.exports=Mw;function Mw(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var rv=de((NE,tv)=>{tv.exports=Aw;function Aw(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var ov=de((FE,nv)=>{nv.exports=Tw;function Tw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2];return e[0]=o*c-a*s,e[1]=a*i-n*c,e[2]=n*s-o*i,e}});var iv=de((GE,av)=>{av.exports=Sw;function Sw(e,t,r,n){var o=t[0],a=t[1],i=t[2];return e[0]=o+n*(r[0]-o),e[1]=a+n*(r[1]-a),e[2]=i+n*(r[2]-i),e}});var cv=de((DE,sv)=>{sv.exports=kw;function kw(e,t){t=t||1;var r=Math.random()*2*Math.PI,n=Math.random()*2-1,o=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=n*t,e}});var fv=de(($E,lv)=>{lv.exports=Lw;function Lw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[3]*n+r[7]*o+r[11]*a+r[15];return i=i||1,e[0]=(r[0]*n+r[4]*o+r[8]*a+r[12])/i,e[1]=(r[1]*n+r[5]*o+r[9]*a+r[13])/i,e[2]=(r[2]*n+r[6]*o+r[10]*a+r[14])/i,e}});var hv=de((qE,uv)=>{uv.exports=zw;function zw(e,t,r){var n=t[0],o=t[1],a=t[2];return e[0]=n*r[0]+o*r[3]+a*r[6],e[1]=n*r[1]+o*r[4]+a*r[7],e[2]=n*r[2]+o*r[5]+a*r[8],e}});var pv=de((HE,dv)=>{dv.exports=Cw;function Cw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2],f=r[3],h=f*n+s*a-c*o,p=f*o+c*n-i*a,u=f*a+i*o-s*n,m=-i*n-s*o-c*a;return e[0]=h*f+m*-i+p*-c-u*-s,e[1]=p*f+m*-s+u*-i-h*-c,e[2]=u*f+m*-c+h*-s-p*-i,e}});var vv=de((UE,mv)=>{mv.exports=Rw;function Rw(e,t,r,n){var o=r[1],a=r[2],i=t[1]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=o+i*f-s*c,e[2]=a+i*c+s*f,e}});var xv=de((BE,gv)=>{gv.exports=Iw;function Iw(e,t,r,n){var o=r[0],a=r[2],i=t[0]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var bv=de((jE,yv)=>{yv.exports=Pw;function Pw(e,t,r,n){var o=r[0],a=r[1],i=t[0]-o,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var _v=de((WE,wv)=>{wv.exports=Ow;var Fo=Jl()();function Ow(e,t,r,n,o,a){var i,s;for(t||(t=3),r||(r=0),n?s=Math.min(n*t+r,e.length):s=e.length,i=r;i<s;i+=t)Fo[0]=e[i],Fo[1]=e[i+1],Fo[2]=e[i+2],o(Fo,Fo,a),e[i]=Fo[0],e[i+1]=Fo[1],e[i+2]=Fo[2];return e}});var Mv=de((VE,Ev)=>{Ev.exports={EPSILON:Zl(),create:Jl(),clone:em(),angle:sm(),fromValues:ef(),copy:lm(),set:um(),equals:dm(),exactEquals:mm(),add:gm(),subtract:of(),sub:bm(),multiply:af(),mul:Em(),divide:sf(),div:Tm(),min:km(),max:zm(),floor:Rm(),ceil:Pm(),round:Nm(),scale:Gm(),scaleAndAdd:$m(),distance:cf(),dist:Um(),squaredDistance:lf(),sqrDist:Wm(),length:ff(),len:Ym(),squaredLength:uf(),sqrLen:Zm(),negate:ev(),inverse:rv(),normalize:tf(),dot:rf(),cross:ov(),lerp:iv(),random:cv(),transformMat4:fv(),transformMat3:hv(),transformQuat:pv(),rotateX:vv(),rotateY:xv(),rotateZ:bv(),forEach:_v()}});var Sv=de((XE,Tv)=>{"use strict";function Av(){let e={};return{on(t,r){return(e[t]=e[t]||[]).push(r),this},emit(t,r){(e[t]||[]).slice().forEach(n=>n(r))}}}Tv.exports=function(t){let r=t.ownerDocument||document,n=Av(),o=null,a={dx:0,dy:0,dt:0},i=0,s=()=>r.pointerLockElement||r.webkitPointerLockElement||null,c=()=>{if(s())return;let h=t.requestPointerLock||t.webkitRequestPointerLock;if(h)try{let p=h.call(t);p&&p.catch&&p.catch(()=>{})}catch(p){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){o&&(n.emit("release"),o.emit("end"),o=null);return}o=Av(),i=Date.now(),n.emit("attain",o)};return r.addEventListener("pointerlockchange",f),r.addEventListener("webkitpointerlockchange",f),r.addEventListener("pointerlockerror",()=>n.emit("error")),(r.body||t).addEventListener("mousemove",h=>{o&&(a.dx=h.movementX||h.webkitMovementX||0,a.dy=h.movementY||h.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),o.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(r.exitPointerLock||r.webkitExitPointerLock).call(r)},n}});var Rv=de((QE,Cv)=>{"use strict";var Ma=as(),Aa=Mv(),Nw=Sv(),YE=Math.PI/4,KE=Math.PI/6,kv=2,Fw=1,Gw=2.4,Dw=2.4,$w=1e3,qw=5,Hw=7,hf=gn().C,_s=[[7,1.6],[7,hf.zc],[hf.x1-2.95,hf.zc]],Go=_s.slice(1).map((e,t)=>{let r=_s[t],n=e[0]-r[0],o=e[1]-r[1],a=Math.hypot(n,o);return{a:r,len:a,dir:[n/a,o/a]}}),df=Go.reduce((e,t)=>e+t.len,0);function Lv(e){let t=Math.max(0,Math.min(df,e));for(let n of Go){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let r=_s[_s.length-1];return[r[0],r[1]]}function Uw(e){let t=0;for(let n=0;n<Go.length;n++){let o=Go[n],a=t+o.len;if(e<a-1e-4||n===Go.length-1){let i=o.dir,c=e<=t+1e-4&&n>0?Go[n-1].dir:o.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let r=Go[Go.length-1].dir;return{ahead:r,back:[-r[0],-r[1]]}}var Bw=Math.PI/4,jw=7,Ww=140,Vw=70,zv=(e,t,r)=>(1-e)*t+e*r,Xw=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Cv.exports=function({getGridSegments:e,getGridParts:t},r){var n=[0,Math.PI],o=[0,Math.PI],a=0,i=[0,0,0],s=[Hw,kv,_s[0][1]],c=0,f=1,h=[.707,0,.707],p=[0,1,0],u=[0,0,0],m=.5,v=Ma.identity([]),d=Ma.identity([]),g=!1,w=[0,0,0],T=[0,0,0],C=1,D=!1;let q=De=>{n[1]+=De*Bw},H=(De,ft,Je)=>{if(De=Math.max(Math.min(De,100),-100),ft=Math.max(Math.min(ft,100),-100),n[0]=0,D){a=0;return}for(a+=De;a>=Je;)q(1),a-=Je;for(;a<=-Je;)q(-1),a+=Je};Nw(document.body).on("attain",De=>{De.on("data",ft=>{H(ft.dx,ft.dy,Ww)})});let ve=null,J=null,Ee=0,ue={x:0,y:0},Fe=58,Ie=document.createElement("div");Ie.id="museum-mobile-controls",Ie.innerHTML=`

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
	`,document.body.appendChild(Ie);let Re=Ie.querySelector("#museum-joystick"),xe=Ie.querySelector("#museum-joystick-knob"),rt=()=>{xe.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},Xt=De=>{let ft=De.clientX-ue.x,Je=De.clientY-ue.y,Jt=Math.hypot(ft,Je);if(Jt>Fe&&(ft=ft/Jt*Fe,Je=Je/Jt*Fe),xe.style.transform=`translate(
				calc(-50% + ${ft}px),
				calc(-50% + ${Je}px)
			)`,Jt<10){i[0]=0,i[2]=0;return}let Se=ft/Fe,nt=Je/Fe;i[0]=0,i[2]=Math.abs(nt)>.15?nt:0},ct=(De,ft)=>{for(let Je=0;Je<De.length;Je++)if(De[Je].identifier===ft)return De[Je];return null},Ft=De=>!!(De&&De.closest&&De.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Gt=De=>{if(!Ft(De.target)&&(De.cancelable&&De.preventDefault(),!D))for(let ft=0;ft<De.changedTouches.length;ft++){let Je=De.changedTouches[ft];if(ve===null&&Je.clientX<window.innerWidth*.48){ve=Je.identifier;let Jt=Re.getBoundingClientRect();ue.x=Jt.left+Jt.width/2,ue.y=Jt.top+Jt.height/2,Xt(Je)}else J===null&&Je.clientX>=window.innerWidth*.48&&(J=Je.identifier,Ee=Je.clientX,a=0)}},ir=De=>{if(Ft(De.target)||(De.cancelable&&De.preventDefault(),D))return;let ft=ve===null?null:ct(De.touches,ve);ft&&Xt(ft);let Je=J===null?null:ct(De.touches,J);if(Je){let Jt=Je.clientX-Ee;Ee=Je.clientX,H(Jt,0,Vw)}},Zt=De=>{if(!Ft(De.target)){De.cancelable&&De.preventDefault();for(let ft=0;ft<De.changedTouches.length;ft++){let Je=De.changedTouches[ft];Je.identifier===ve&&(ve=null,rt()),Je.identifier===J&&(J=null)}}};document.addEventListener("touchstart",Gt,{passive:!1}),document.addEventListener("touchmove",ir,{passive:!1}),document.addEventListener("touchend",Zt,{passive:!1}),document.addEventListener("touchcancel",Zt,{passive:!1});let Pn=document.createElement("style");Pn.textContent=`

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
	`,document.head.appendChild(Pn);var pr={};let Rr=De=>{if(De.defaultPrevented||De.ctrlKey||De.altKey||De.metaKey)return;let ft=De.type==="keydown";pr[De.code]=ft,ft&&!De.repeat&&!D&&((De.code==="KeyA"||De.code==="ArrowLeft")&&q(-1),(De.code==="KeyD"||De.code==="ArrowRight")&&q(1)),g=!1;let Je=pr.KeyW||pr.ArrowUp?1:0;i=[0,0,(pr.KeyS||pr.ArrowDown?1:0)-Je],De.preventDefault()};window.addEventListener("keydown",Rr),window.addEventListener("keyup",Rr);var At=0;return{pos:s,fmouse:o,forward:h,up:p,setPaused:De=>{D=!!De,D&&(i[0]=0,i[2]=0,rt())},place:(De,ft)=>{c=Math.max(0,Math.min(df,De));let Je=Lv(c);s[0]=Je[0],s[2]=Je[1],n[1]=ft,o[1]=ft,a=0,f=1},view:()=>v,proj:()=>(Ma.perspective(d,r(),window.innerWidth/window.innerHeight,.1,700),d),tick:({time:De})=>{let ft=De-At;At=De;let Je=[0,0,0],Jt=[];Aa.set(h,Math.sin(o[1]),0,-Math.cos(o[1])),Aa.set(p,0,1,0);let On=g?Dw:Gw,Se=Math.sin(n[1]),nt=-Math.cos(n[1]),yt=Uw(c),Dt=Se*yt.ahead[0]+nt*yt.ahead[1],_t=Se*yt.back[0]+nt*yt.back[1],zt=f;Math.max(Dt,_t)>.3&&(zt=Dt>=_t?1:-1);let bt=-i[2]*zt*On*Math.min(ft,.1);D&&(i[0]=0,i[2]=0,bt=0),bt!==0&&(f=Math.sign(bt)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(df,c+bt));let $t=Lv(c);Aa.set(u,$t[0]-s[0],0,$t[1]-s[2]);let Yt=Aa.len(u);Yt===0&&m!==.25&&(m=(Math.abs((m+.5)%1-.5)-.25)*.8+.25,(m+.01)%.25<.02&&(m=.25));let y=m;if(m+=Yt/(g?qw:$w),s[1]=kv,Aa.add(s,s,u),C<1){C+=ft/Fw,C=Math.min(C,1);let jt=Xw(C);Aa.set(s,zv(jt,w[0],T[0]),s[1],zv(jt,w[2],T[2]))}o[0]=0,o[1]+=(n[1]-o[1])*Math.min(1,Math.min(ft,.1)*jw),Math.abs(n[1]-o[1])<5e-4&&(o[1]=n[1]),Ma.identity(v),Ma.rotateX(v,v,0),Ma.rotateY(v,v,o[1]),Ma.translate(v,v,Aa.scale(Je,s,-1))}}}});var Pv=de((ZE,Iv)=>{"use strict";var{skylightGLSL:Yw,Z_START:Kw,Z_END:Qw,GLASS_Y:Zw}=Ja(),{oculusGLSL:Jw,A:Ta}=Jn(),{windowLightGLSL:e_,C:B0}=gn(),{doorLightGLSL:t_}=aa(),Cn=e=>e.toFixed(4),pf=.1,mf=700,Sa={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.045};function r_(e,t){let r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],m=t[11],v=t[12],d=t[13],g=t[14],w=t[15],T=r*s-n*i,C=r*c-o*i,D=r*f-a*i,q=n*c-o*s,H=n*f-a*s,ae=o*f-a*c,ve=h*d-p*v,J=h*g-u*v,Ee=h*w-m*v,ue=p*g-u*d,Fe=p*w-m*d,Ie=u*w-m*g,Re=T*Ie-C*Fe+D*ue+q*Ee-H*J+ae*ve;return Re?(Re=1/Re,e[0]=(s*Ie-c*Fe+f*ue)*Re,e[1]=(o*Fe-n*Ie-a*ue)*Re,e[2]=(d*ae-g*H+w*q)*Re,e[3]=(u*H-p*ae-m*q)*Re,e[4]=(c*Ee-i*Ie-f*J)*Re,e[5]=(r*Ie-o*Ee+a*J)*Re,e[6]=(g*D-v*ae-w*C)*Re,e[7]=(h*ae-u*D+m*C)*Re,e[8]=(i*Fe-s*Ee+f*ve)*Re,e[9]=(n*Ee-r*Fe-a*ve)*Re,e[10]=(v*H-d*D+w*T)*Re,e[11]=(p*D-h*H-m*T)*Re,e[12]=(s*J-i*ue-c*ve)*Re,e[13]=(r*ue-n*J+o*ve)*Re,e[14]=(d*C-v*q-g*T)*Re,e[15]=(h*q-p*C+u*T)*Re,e):null}function n_(e,t,r){let n=new Array(16);for(let o=0;o<4;o++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*r[o*4+s];n[o*4+a]=i}for(let o=0;o<16;o++)e[o]=n[o];return e}var o_=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Iv.exports=(e,t)=>{let r=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),o=r?10:22,a=()=>t.post>=2?2:4,i=xe=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},xe||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,h=e.framebuffer({color:c,depth:f||!0}),p=[s(),s()],u=[s(),s()],m=[s(),s()],v=[s(),s()],d=new Array(16).fill(0),g=new Array(16).fill(0),w=[0,0,0],T={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},C={position:[-1,-1,3,-1,-1,3]},D=(xe,rt,Xt)=>e(Object.assign({vert:o_,frag:xe,attributes:C,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:rt,framebuffer:e.prop("out")},Xt||{})),q=[2.6,0,Kw-3.2,12.6,Zw,Qw+.4],H=[Ta.x0-.2,0,Ta.z0,Ta.x1,Ta.domeTop,Ta.z1],ae=[B0.x0,0,B0.z0,B0.x1,7.6,B0.z1],ve=[.35,0,.35,13.65,7.6,9],J=xe=>`vec3(${Cn(xe[0])}, ${Cn(xe[1])}, ${Cn(xe[2])}), vec3(${Cn(xe[3])}, ${Cn(xe[4])}, ${Cn(xe[5])})`,Ee=D(`
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

	${Yw()}
	${Jw()}
	${e_()}
	${t_()}

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
					if (p.y < ${Cn(Ta.dome.base)} && p.x > ${Cn(Ta.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
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
	}`,{depthTex:()=>f,invVP:()=>d,eye:()=>w,time:e.context("time"),strength:()=>{let xe=Sa.shafts*T.shafts;return[.06*xe,.1*xe,.07*xe,.04*xe]}}),ue=D(`
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
	}`,{src:e.prop("src"),dir:(xe,rt)=>[rt.dir[0]/rt.size[0],rt.dir[1]/rt.size[1]]}),Fe=D(`
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
	}`,{src:e.prop("src"),texel:(xe,rt)=>[.5/rt.size[0],.5/rt.size[1]],threshold:e.prop("threshold")}),Ie=D(`
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
		return 2.0 * ${Cn(pf)} * ${Cn(mf)} / (${Cn(mf+pf)} - z * ${Cn(mf-pf)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>p[0],bloomA:()=>u[0],bloomB:()=>m[0],shafts:()=>v[0],res:xe=>[xe.drawingBufferWidth,xe.drawingBufferHeight],time:e.context("time"),exposure:()=>Sa.exposure*T.exposure,vignette:()=>Math.min(1,Sa.vignette+T.vignette),grain:()=>Sa.grain,bloomK:()=>Sa.bloom,letterbox:()=>T.letterbox,fade:()=>T.fade,fadeColor:()=>T.fadeColor,aperture:()=>t.post>=2?T.aperture:0,focus:()=>T.focus,hasDepth:n?1:0},{framebuffer:null}),Re=e({framebuffer:()=>h});return{shot:T,look:Sa,hasDepth:n,capture(xe,rt,Xt){let ct=xe.drawingBufferWidth,Ft=xe.drawingBufferHeight;h.resize(ct,Ft);let Gt=Math.max(1,Math.ceil(ct/2)),ir=Math.max(1,Math.ceil(Ft/2));p.forEach(Zt=>Zt.resize(Gt,ir)),u.forEach(Zt=>Zt.resize(Math.max(1,Math.ceil(ct/4)),Math.max(1,Math.ceil(Ft/4)))),m.forEach(Zt=>Zt.resize(Math.max(1,Math.ceil(ct/8)),Math.max(1,Math.ceil(Ft/8)))),v.forEach(Zt=>Zt.resize(Math.max(1,Math.ceil(ct/a())),Math.max(1,Math.ceil(Ft/a())))),n_(g,rt.proj,rt.view),r_(d,g),w[0]=rt.eye[0],w[1]=rt.eye[1],w[2]=rt.eye[2],Re(()=>{e.clear({color:[0,0,0,1],depth:1}),Xt()})},present(){let xe=rt=>[rt.width,rt.height];n&&t.post>=1&&Sa.shafts*T.shafts>.001?(Ee({out:v[0]}),ue({out:v[1],src:v[0],dir:[1,0],size:xe(v[0])}),ue({out:v[0],src:v[1],dir:[0,1],size:xe(v[0])})):e.clear({color:[0,0,0,1],framebuffer:v[0]}),Fe({out:p[0],src:c,size:[h.width,h.height],threshold:0}),ue({out:p[1],src:p[0],dir:[1,0],size:xe(p[0])}),ue({out:p[0],src:p[1],dir:[0,1],size:xe(p[0])}),Fe({out:u[0],src:p[0],size:xe(p[0]),threshold:.42}),ue({out:u[1],src:u[0],dir:[1,0],size:xe(u[0])}),ue({out:u[0],src:u[1],dir:[0,1],size:xe(u[0])}),Fe({out:m[0],src:u[0],size:xe(u[0]),threshold:0}),ue({out:m[1],src:m[0],dir:[1.5,0],size:xe(m[0])}),ue({out:m[0],src:m[1],dir:[0,1.5],size:xe(m[0])}),Ie({out:null})}}}});var Gv=de((JE,Fv)=>{"use strict";var a_=oa(),vf=aa(),{C:i_,FAR_DOOR:s_}=gn(),c_=100*Math.PI/180,Ov=e=>[s_.x-e[2],e[1],i_.zc-7+e[0]],Nv=e=>[-e[2],e[1],e[0]];function l_(e){let t=[],r=[],n=[],o=[],a=a_.createBuilder(t,r,n,o);vf.addFrames(a,e);let i=vf.glassPanes(e),s=c=>{let f=[];for(let h=0;h<c.length;h+=3)f.push([c[h],c[h+1],c[h+2]]);return f};return{position:s(t),normal:s(r),elements:n,glass:i}}Fv.exports=e=>{let t=vf.DOOR,r=["left","right"].map(h=>{let p=l_(h),u=p.position.length;return{part:h,hinge:h==="left"?t.x0:t.x1,sign:h==="left"?-1:1,src:p.position.map(m=>m.slice()),srcN:p.normal.map(m=>m.slice()),srcG:p.glass.map(m=>m.slice()),pos:e.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(p.elements),type:"uint32"}),glassCount:p.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(p.glass.length*3),outGN:new Float32Array(p.glass.length*3)}}),n=null;function o(h){if(h!==n){n=h;for(let p of r){let u=p.sign*h,m=Math.cos(u),v=Math.sin(u),d=T=>{let C=T[0]-p.hinge,D=T[2];return[p.hinge+C*m+D*v,T[1],-C*v+D*m]},g=T=>[T[0]*m+T[2]*v,T[1],-T[0]*v+T[2]*m];p.src.forEach((T,C)=>{let D=Ov(d(T));p.outP.set(D,C*3),p.outN.set(Nv(g(p.srcN[C])),C*3)});let w=Nv(g([0,0,1]));p.srcG.forEach((T,C)=>{p.outG.set(Ov(d(T)),C*3),p.outGN.set(w,C*3)}),p.pos.subdata(p.outP),p.nrm.subdata(p.outN),p.gpos.subdata(p.outG),p.gnrm.subdata(p.outGN)}}}o(0);let a=`
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
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{o(c*c_);for(let h of r)i({pos:h.pos,nrm:h.nrm,el:h.el})};return f.glass=()=>{for(let h of r)s({pos:h.gpos,nrm:h.gnrm,count:h.glassCount})},f.setOpen=h=>{c=h||0},f}});var $v=de((e6,Dv)=>{"use strict";var{skylightGLSL:f_}=Ja(),{oculusGLSL:u_}=Jn(),{windowLightGLSL:h_}=gn(),Do=.22;function d_(){let e=[],t=[],r=[],n=[];for(let c=0;c<=14;c++){let f=c/14,h=Do*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9);for(let p=0;p<=4*2;p++){let u=p/4-1,m=f*Do-Do*.12,v=u*h,d=Math.abs(u)*h*.35-.12*f*f*Do;e.push([m,d,v]),t.push([0,1,0]),r.push([f,u])}}let i=4*2+1;for(let c=0;c<14;c++)for(let f=0;f<i-1;f++){let h=c*i+f,p=h+1,u=h+i,m=u+1;n.push([h,u,p],[p,u,m])}let s=e.length;return e.push([-Do*.12,0,-.003],[-Do*.12,0,.003],[-Do*.24,-.01,.0015],[-Do*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),r.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([s,s+2,s+1],[s,s+3,s+2]),{pos:e,nrm:t,uv:r,idx:n}}Dv.exports=e=>{let t=d_(),r=e({vert:`
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

		${f_()}
		${u_()}
		${h_()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}});return function(n){n&&n.visible&&r({model:n.model})}}});var Uv=de((t6,Hv)=>{"use strict";var{skylightGLSL:p_,Z_START:qv,Z_END:m_}=Ja(),{oculusGLSL:v_,A:gi}=Jn();Hv.exports=(e,t)=>{let r=t.isPhone?900:2600,n=t.isPhone?350:900,o=7,a=()=>(o=o*16807%2147483647,(o-1)/2147483646),i=[];for(let s=0;s<r;s++)i.push([2.5+a()*10.5,.3+a()*8,qv-3.5+a()*(m_-qv+4.5),a()]);for(let s=0;s<n;s++)i.push([gi.x0+.3+a()*(gi.x1-gi.x0-.6),.3+a()*7.5,gi.z0+.3+a()*(gi.z1-gi.z0-.6),a()]);return e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;

		${p_()}
		${v_()}

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
		}`,attributes:{seed:i},count:i.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:s=>s.viewportHeight*.006},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}})}});var e2=de((r6,Jv)=>{"use strict";var po=as(),j0=Ql(),gf=s0(),g_=c0(),{A:bn}=Jn(),{C:Gr,PAINTING_X:_i}=gn(),wn=e=>Math.max(0,Math.min(1,e)),Le=(e,t,r)=>e+(t-e)*r,Qt=(e,t,r)=>[Le(e[0],t[0],r),Le(e[1],t[1],r),Le(e[2],t[2],r)],kt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Bv=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],jv=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Me=(e,t,r)=>{let n=wn((r-e)/(t-e));return n*n*(3-2*n)},Wv=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,x_=e=>e*e*e,xf=e=>1-Math.pow(1-e,3),dr=e=>-(Math.cos(Math.PI*e)-1)/2;function br(e,t){let r=e.length-1,n=wn(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],h=a*a,p=h*a;return[0,1,2].map(u=>.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-f[u])*h+(-i[u]+3*s[u]-3*c[u]+f[u])*p))}var vt=(e,t,r,n)=>({eye:e,target:t,fov:r,roll:n||0});function Ca(e,t,r){return vt(Qt(e.eye,t.eye,r),Qt(e.target,t.target,r),Le(e.fov,t.fov,r),Le(e.roll,t.roll,r))}var Mf=()=>Me(.75,1.3,window.innerWidth/window.innerHeight),tn=(e,t)=>Ca(e,t,Mf()),W0=[7,3.95,Gr.hallEnd-.05],y_=[Gr.x1,2.9,Gr.zc],bi=[16.75,4.55,6.75],Af=[6.92,2.72,14.5],Wn=[7.3,.015,47.1],b_=[bi,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Af],w_=[Af,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Wn],ka=[_i[0],3,Gr.z0],La=[_i[1],3,Gr.z0],bf=47.45,Zv=4.6,__=13.2,E_=1.42,Es=[7.55,1.25,46.75],Tf=[17.25,2.42,46],Sf=[26.05,1.95,46],Ms=[36.15,.015,44],Y0=()=>Le(6.8,6.15,Mf()),M_=[Es,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Tf],A_=[Tf,[20.2,2.05,45.6],[23.2,1.8,45],Sf],za=[_i[2],3,Gr.z0],wf=[34.8,1.35,46],qo=[7.89,.03,19.03],Vv=.36,Xv=13.64,Br=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Rn(e){let t=e.side==="left"?1:-1;return Qt([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],Mf())}function T_(e){return e.side==="left"?tn(vt([8.6,3.9,e.z],[Vv,1.45,e.z],76),vt([8,3.6,e.z+.7],[Vv,3.95,e.z-2],46,-.008)):tn(vt([5.4,3.9,e.z],[Xv,1.45,e.z],76),vt([6,3.6,e.z-.7],[Xv,3.95,e.z+2],46,-.008))}var S_=()=>[Ms,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Rn(Br[0])],k_=()=>[Rn(Br[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Rn(Br[3])],L_=()=>[Rn(Br[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],qo],Yv={2:{pos:()=>Af,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Es,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Tf,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Sf,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>wf,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Rn(Br[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Rn(Br[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Rn(Br[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Rn(Br[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Rn(Br[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Rn(Br[5]),amp:[.12,.08,.1],tumble:.5}},$o=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),r=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=tn(vt([Gr.x0+.9,1.85,Gr.zc+.25],[Gr.x1,2.85,Gr.zc-.1],64),vt([Gr.x0+1.2,2,Gr.zc+.35],[Gr.x1,2.6,Gr.zc-.15],50));return n.eye=kt(kt(n.eye,[t,0,0]),r),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],r=tn(vt([16.6,1.9,9.2],[17.3,.4,5.6],64),vt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return r.eye=kt(r.eye,t),r}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],r=tn(vt([7,1.35,13],[7.2,7.6,20.4],74,.05),vt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return r.eye=kt(r.eye,t),r}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],r=tn(vt([7,3.6,43.7],[7,3.85,W0[2]],74),vt([7,3.6,41.3],[7,3.95,W0[2]],46));return r.eye=kt(r.eye,t),r}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=tn(vt([7,3.9,40.3],[7,1.35,W0[2]],76),vt([6.3,3.6,41.2],[3.7,3.95,W0[2]],46,-.008));return r.eye=kt(r.eye,t),r}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=tn(vt([7.15,.15,46],[7.3,.04,Wn[2]],50),vt([7.05,.14,45.9],[7.25,.05,Wn[2]],32));return r.eye=kt(r.eye,t),r}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],r=tn(vt([7.15,.1,46.3],[7.05,.1,bf],50),vt([7.1,.12,45.85],[7,.2,bf],30));return r.eye=kt(r.eye,t),r}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],r=tn(vt([7.3,.85,45.65],[7.6,1.38,47.1],64),vt([7.25,.82,45.8],[7.65,1.35,47.1],44));return r.eye=kt(r.eye,t),r}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=tn(vt([ka[0],2.3,46.85],[ka[0],1.25,ka[2]],74),vt([ka[0]-.6,2.55,46.85],[ka[0]+1.9,2.9,ka[2]],46,.008));return r.eye=kt(r.eye,t),r}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=tn(vt([La[0],1.95,46.85],[La[0],1,La[2]],74),vt([La[0]-.6,2.1,46.85],[La[0]+1.9,2.75,La[2]],46,.008));return r.eye=kt(r.eye,t),r}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=tn(vt([za[0],1.4,46.85],[za[0],.6,za[2]],74),vt([za[0]-.6,1.45,46.85],[za[0]+1.9,2,za[2]],46,.008));return r.eye=kt(r.eye,t),r}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=tn(vt([34.75,.5,44.15],[Gr.x1,.8,43.95],66),vt([34.75,.45,44.3],[Gr.x1,.35,43.95],50));return r.eye=kt(r.eye,t),r}},...Br.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(r){let n=[Math.sin(r*.15)*.04,Math.sin(r*.25)*.015,Math.sin(r*.11)*.04],o=T_(e);return o.eye=kt(o.eye,n),o}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,r=tn(vt([7.75,2.6,18.6],[7.89,0,19.08],60),vt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=r.eye[0]-qo[0],o=r.eye[2]-qo[2];return r.eye=[qo[0]+n*Math.cos(t)-o*Math.sin(t),r.eye[1],qo[2]+n*Math.sin(t)+o*Math.cos(t)],r}}],z_=[1,.96,.88];function Kv(e,t){return{dur:t,cam(r,n,o){let a=dr(r),i=Ca(n,o,a),s=Br[e].side==="left"?1:-1;return i.eye=kt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(r,n,o){let a={};for(let i in o)typeof o[i]=="number"&&(a[i]=Le(n[i],o[i],r));return a.aperture=Le(n.aperture,o.aperture,r)*(1-.5*Math.sin(Math.PI*r)),a},leaf(r){let n=dr(r),o=Rn(Br[e]),a=Rn(Br[e+1]),i=Br[e].side==="left"?1:-1,s=kt(Qt(o,a,.5),[i*1.2,.5,0]),c=br([o,Qt(o,s,.6),s,Qt(a,s,.6),a],n);return{phase:"fly",pos:kt(c,[0,Math.sin(r*Math.PI*5)*.07*Math.sin(Math.PI*r),0]),tumble:.5+.35*Math.sin(Math.PI*r)}}}}var yf=[{dur:6.2,cam(e,t,r){if(e<.5){let s=x_(e/.5),c=Qt(t.eye,[Gr.x1-3.2,2.6,Gr.zc],s),f=Qt(t.target,y_,Me(0,.6,e/.5));return vt(c,f,Le(t.fov,t.fov-8,s),Le(t.roll,.04,s))}let n=xf((e-.5)/.5),o=[[bn.cx+.4,10.4,bn.zc+.6],[bn.cx-.6,7.6,bn.zc+1.3],[bn.cx-1.9,4.6,bn.zc+1.75],r.eye],a=[[bn.cx-.1,0,bn.zc-.2],[bn.cx-1,.4,bn.zc-.1],[bn.cx-1.1,.8,bn.zc-.2],r.target];return vt(br(o,n),br(a,n),Le(r.fov+14,r.fov,n),Le(-.25,r.roll,n))},look(e,t,r){let n=Me(.22,.5,e),o=1-Me(.5,.74,e);return{fade:e<.5?n:o,fadeColor:z_,exposure:Le(t.exposure,r.exposure,Me(.5,.9,e))*(1+2.2*(e<.5?Me(.15,.5,e):1-Me(.5,.8,e))),letterbox:Le(t.letterbox,r.letterbox,Me(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):r.aperture*Me(.6,1,e),focus:Le(4,r.focus,Me(.5,1,e)),shafts:Le(t.shafts,r.shafts,Me(.4,.6,e)),vignette:Le(t.vignette,r.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,r,n){let o=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],r.eye],a=br(o,dr(e)),i=Me(0,.12,e)*(1-Me(.82,1,e)),s=Qt(Qt(t.target,r.target,Me(.55,1,e)),n.pos,i),c=Le(t.fov,r.fov,Me(.3,1,e))-6*Math.sin(Math.PI*e),f=Le(t.roll,r.roll,e)+.05*Math.sin(Math.PI*2*e);return vt(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Le(t.exposure,r.exposure,Me(.25,.75,e)),letterbox:Le(t.letterbox,r.letterbox,e),focus:Le(a,r.focus,Me(.8,1,e)),aperture:Le(.7,r.aperture,Me(.8,1,e)),shafts:Le(t.shafts,r.shafts,Me(.3,.8,e)),vignette:Le(t.vignette,r.vignette,e)}},leaf(e){let t=Wv(e),r=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:kt(br(b_,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),r]),tumble:1-.5*Me(.8,1,e)}}},{dur:11.5,cam(e,t,r,n){let o=br([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Me(0,.8,e)*.6+dr(wn(e/.8))*.4),a=br([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],r.eye],dr(Me(.8,1,e))),i=e<.8?o:a,s=Qt(Qt(t.target,n.pos,Me(.03,.22,e)),r.target,Me(.82,1,e)),c=Le(t.fov,r.fov,Me(.15,.7,e))-6*Me(.6,.8,e)*(1-Me(.85,1,e)),f=Le(t.roll,r.roll,Me(0,.6,e))-.04*Math.sin(Math.PI*e);return vt(i,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Le(t.exposure,r.exposure,Me(.5,1,e)),letterbox:Le(t.letterbox,r.letterbox,e),focus:Le(a,r.focus,Me(.84,1,e)),aperture:Le(1.1,r.aperture,Me(.84,1,e)),shafts:Le(t.shafts,r.shafts,Me(.2,.9,e)),vignette:Le(t.vignette,r.vignette,Me(.5,1,e))}},leaf(e){let t=Le(Wv(e),e,.35),r=br(w_,Me(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Me(.55,.76,e)),o=Me(.7,.8,e);return{phase:"fly",pos:kt(r,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-o),0]),tumble:1-o,swing:n}}},{dur:2.6,cam(e,t,r){let n=dr(e),o=Ca(t,r,n);return o.eye=kt(o.eye,[0,0,-.35*Math.sin(Math.PI*n)]),o},look(e,t,r){let n=dr(e),o={};for(let a in r)typeof r[a]=="number"&&(o[a]=Le(t[a],r[a],n));return o},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,r){let n=dr(e),o=br([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],r.eye],n),a=Qt(t.target,r.target,Me(.1,.85,e));return vt(o,a,Le(t.fov,r.fov,Me(.2,1,e)),Le(t.roll,r.roll,n))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],Me(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,r){return Ca(t,r,dr(e))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],dr(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Le(Zv,Y0(),e)}},{dur:7.5,kick:e=>wn((e-xi())/(1-xi())),cam(e,t,r,n){let o=xi(),a=Me(0,o,e)*(1-Me(o+.12,o+.35,e)),i=Qv(Math.min(e,wi)),s=kt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Me(o+.12,1,e),f=br([t.eye,t.eye,kt(t.eye,[0,.12,-.3]),r.eye],c);return s=Qt(s,n.pos,Me(o+.06,o+.24,e)*(1-Me(.9,1,e))),s=Qt(s,r.target,Me(.88,1,e)),vt(f,s,Le(t.fov,r.fov,c),Le(t.roll,r.roll,c))},look(e,t,r,n,o){let a=xi(),i=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),s=Me(0,.12,e)*(1-Me(a+.25,a+.5,e));return{letterbox:Le(Le(t.letterbox,r.letterbox,Me(a,1,e)),1.75,s),exposure:Le(t.exposure,r.exposure,Me(a,1,e)),focus:e<a?t.focus:Le(t.focus,i,Me(a,a+.2,e)),aperture:Le(t.aperture,r.aperture,Me(a,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=wn((e-xi())/(1-xi()));if(t<=0)return{phase:"floor"};let r=Me(0,.85,t)*.85+xf(Me(0,.15,t))*.15;return{phase:"fly",pos:kt(Wn,[(Es[0]-Wn[0])*r+Math.sin(t*9)*.08*(1-t),(Es[1]-Wn[1])*r,(Es[2]-Wn[2])*r+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?Qv(e):null}},{dur:9,cam(e,t,r,n){let o=dr(e),a=br([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],r.eye],o),i=1-Me(.6,.92,e),s=Qt(Qt(t.target,n.pos,Me(0,.15,e)),r.target,1-i),c=Le(t.fov,r.fov,Me(.3,1,e)),f=Le(t.roll,r.roll,o)+.04*Math.sin(Math.PI*e);return vt(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,Me(.3,.8,e)),focus:Le(a,r.focus,Me(.6,.95,e)),aperture:Le(t.aperture,r.aperture,Me(.6,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,Me(.3,.8,e))}},leaf(e){let t=dr(e);return{phase:"fly",pos:kt(br(M_,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=dr(e),o=Ca(t,r,n);return o.eye=kt(o.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],e));return n.aperture=Le(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=dr(e);return{phase:"fly",pos:kt(br(A_,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=dr(e),o=Ca(t,r,n);return o.eye=kt(o.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],e));return n.aperture=Le(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=dr(e);return{phase:"fly",pos:kt(br([Sf,[29.2,1.75,45.5],[32.2,1.5,45.4],wf],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,r,n){let o=dr(e),a=br([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],r.eye],o),i=Me(.05,.3,e)*(1-Me(.8,1,e)),s=Qt(Qt(t.target,r.target,Me(.6,1,e)),n.pos,i);return vt(a,s,Le(t.fov,r.fov,Me(.2,1,e)),Le(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,e),focus:Le(a,r.focus,Me(.8,1,e)),aperture:Le(.9,r.aperture,Me(.8,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=br([wf,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ms],Me(0,.85,e)),r=Math.sin(e*Math.PI*6)*.25*(1-Me(.35,.82,e)),n=Me(.78,.88,e);return{phase:"fly",pos:kt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),r]),tumble:.7*(1-n),swing:r}}},{dur:12,door(e){let t=wn((e-.02)/.09);return xf(t)+.07*Math.sin(wn((e-.08)/.18)*Math.PI)*(1-wn((e-.08)/.3))},cam(e,t,r,n){let o=Math.sin(e*340)*.012*Me(.02,.05,e)*(1-Me(.08,.16,e)),a=Me(.06,1,e),i=br([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],r.eye],a*.55+dr(a)*.45),s=kt(n.pos,[1,-.2,-1.45]);i=Qt(i,s,Me(.1,.22,e)*(1-Me(.52,.72,e)));let c=Me(.06,.16,e)*(1-Me(.86,1,e)),f=Qt(t.target,n.pos,c);f=Qt(f,r.target,Me(.86,1,e));let h=Le(t.fov,r.fov,Me(.1,1,e))+6*Math.sin(Math.PI*Me(.08,.9,e)),p=Le(t.roll,r.roll,e)+.06*Math.sin(Math.PI*2*Me(.1,.9,e))+o;return vt(kt(i,[0,o,0]),f,h,p)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),i=Me(.02,.06,e)*(1-Me(.08,.3,e));return{letterbox:Le(t.letterbox,r.letterbox,Me(.1,.4,e)),exposure:Le(t.exposure,r.exposure,e)*(1+.8*i),focus:Le(a,r.focus,Me(.86,1,e)),aperture:Le(.8,r.aperture,Me(.86,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)+i}},leaf(e){let t=wn((e-.05)/.95);if(t<=0)return{phase:"floor"};let r=br(S_(),t*.6+dr(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:kt(r,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>Kv(e,7.5)),{dur:10,cam(e,t,r,n){let o=dr(e),a=br([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],r.eye],o),i=Me(0,.15,e)*(1-Me(.85,1,e)),s=Qt(Qt(t.target,r.target,Me(.5,1,e)),n.pos,i);return vt(a,s,Le(t.fov,r.fov,o)+4*Math.sin(Math.PI*o),Le(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,e),focus:Le(a,r.focus,Me(.85,1,e)),aperture:Le(.6,r.aperture,Me(.85,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=dr(e),r=br(k_(),t);return{phase:"fly",pos:kt(r,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>Kv(e,7.5)),{dur:10,cam(e,t,r,n){let o=dr(e),a=br([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],r.eye],o),i=Me(0,.2,e)*(1-Me(.9,1,e)),s=Qt(Qt(t.target,r.target,Me(.5,1,e)),n.pos,i);return vt(a,s,Le(t.fov,r.fov,o),Le(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,e),focus:Le(a,r.focus,Me(.85,1,e)),aperture:Le(.7,r.aperture,Me(.85,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=br(L_(),Me(0,.86,e)),r=Math.sin(e*Math.PI*7)*.3*(1-Me(.4,.84,e)),n=Me(.8,.9,e);return{phase:"fly",pos:kt(t,[r,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:r}}}],_f=9.2,wi=.6;function Qv(e){return e<wi?Le(Y0(),_f,e/wi):Le(_f,__,(e-wi)/(1-wi))}function xi(){return wi*wn((Wn[0]+.15-Y0())/(_f-Y0()))}var Ef={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},V0=e=>Object.assign({},Ef,$o[e].look),C_=`
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
`;function yn(e,t,r){let n=document.createElement(e);return t&&(n.className=t),r!==void 0&&(n.innerHTML=r),n}var yi=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function X0(e,t,r){e.querySelectorAll(".tour-line").forEach((n,o)=>{n.style.transitionDelay=(t+o*r).toFixed(2)+"s"})}Jv.exports=function(t){let r=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let oe=document.createElement("link");oe.rel="stylesheet",oe.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",oe.setAttribute("data-tour-font",""),document.head.appendChild(oe)}let o=document.createElement("style");o.textContent=C_+`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(o);let a=yn("div","tour");a.setAttribute("role","region"),a.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let i=yn("div","tour-mark",yi(j0.name)),s=yn("button","tour-free","Explore freely");s.type="button";let c=yn("div","tour-links",gf.icons("tour-icon"));c.appendChild(s);let f=yn("div","tour-progress",$o.map(()=>"<i></i>").join("")),h=yn("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=h.querySelector("span"),u=yn("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${yi(j0.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);X0(u,.4,.35);let m=j0.text.split(/\n\s*\n/).map(oe=>`<p class="tour-line">${yi(oe.trim())}</p>`).join(""),v=yn("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${yi(j0.title)}</h2>
		<span class="tour-rule"></span>
		${gf.line("tour-line tour-contact")}
		${m}`);X0(v,.25,.28);let d=yn("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);X0(d,.6,.3);let g=yn("div","tour-card tour-master","");function w(oe){let ze=yn("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<div class="tour-body"></div>`),$e=ze.querySelector(".tour-title"),gt=ze.querySelector(".tour-body");return ze.filled=!1,ze.body=gt,ze.fill=()=>{let Rt=oe();if(!Rt||ze.filled)return;ze.filled=!0;let It=Rt.title||"";ze.querySelector(".tour-kicker").textContent=g_(Rt)||"Oil on canvas";let no=0;$e.innerHTML=It.split(" ").map(jr=>'<span class="tour-word">'+jr.split("").map(qr=>`<span style="transition-delay:${(.35+no++*.045).toFixed(3)}s">${yi(qr)}</span>`).join("")+"</span>").join(" "),$e.setAttribute("aria-label",It);let wr=.35+It.length*.045+.2;ze.querySelector(".tour-rule").style.transitionDelay=wr.toFixed(2)+"s";let $r=String(Rt.description||"").split(/\n\s*\n/).filter(jr=>jr.trim());gt.innerHTML=$r.map(jr=>`<p class="tour-line">${yi(jr.trim())}</p>`).join(""),ze.querySelector(".tour-kicker").style.transitionDelay="0.1s",gt.querySelectorAll(".tour-line").forEach((jr,qr)=>{jr.style.transitionDelay=(wr+.3+Math.min(qr,6)*.35).toFixed(2)+"s"})},ze}let T=()=>t.paintings?t.paintings():[],C=oe=>T().find(ze=>ze.side==="corridor"&&Math.abs(ze.paintingPosition[0]-oe)<.5),D=w(()=>T().find(oe=>oe.side==="end")),q=()=>yn("div","tour-card",""),H=w(()=>C(ka[0])),ae=w(()=>C(La[0])),ve=w(()=>C(za[0])),J=Br.map(oe=>w(()=>T().find(ze=>ze.side===oe.side&&Math.abs(ze.paintingPosition[2]-oe.z)<.5))),Ee=yn("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">The rest of the gallery is yours to wander.</span>
		${gf.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);X0(Ee,.5,.35);let ue=[u,v,d,g,D,q(),q(),q(),H,ae,ve,q(),...J,Ee];a.append(...ue,i,c,f,h),document.body.appendChild(a),document.body.classList.add("touring");let Fe=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Ie=Fe?"Scroll":"Swipe",Re=$o.map((oe,ze)=>ze===0?Fe?"Scroll to begin":"Swipe up to begin":ze===1?Ie+" to follow the leaf":ze===2?Ie+" to follow the light":ze===3?Ie+" for its story":ze===6||ze===7||ze===$o.length-1?"":Ie+" on"),xe=[0];yf.forEach(oe=>xe.push(xe[xe.length-1]+oe.dur));let rt=xe[xe.length-1],Xt=210,ct=95,Ft=.35,Gt=1.4,ir=4.2,Zt=2.2,Pn=.7,pr=.9,Rr=!0,At=0,De=0,ft=-10,Je=!1,Jt=-1,On=0,Se=0,nt=0,yt=null,Dt=Object.assign({},V0(0)),_t=$o[0].cam(0),zt={phase:"home",pos:bi.slice(),tumble:0},bt=0,$t=oe=>{let ze=0;for(let $e=1;$e<xe.length;$e++)Math.abs(xe[$e]-oe)<Math.abs(xe[ze]-oe)&&(ze=$e);return ze};function Yt(oe){let ze=ue[oe];ze&&ze.fill&&(ze.fill(),ze.body.scrollTop=0,ze.offsetWidth),ue.forEach(($e,gt)=>$e.classList.toggle("on",gt===oe)),p.textContent=Re[oe]||"",h.classList.toggle("on",!!Re[oe])}function y(){ue.forEach(oe=>oe.classList.remove("on")),h.classList.remove("on")}let jt=null,mr=-1;function Qe(oe){if(!Rr||yt)return;let ze=nt-ft>Ft;if(ft=nt,ze||!jt){let $e=0,gt=rt;for(let Rt=0;Rt<xe.length;Rt++)if(xe[Rt]<=At-.02&&($e=xe[Rt]),xe[Rt]>=At+.02){gt=xe[Rt];break}jt={lo:$e,hi:gt}}nt<mr||(Je=!1,De=Math.max(jt.lo,Math.min(jt.hi,De+oe)),De=Math.max(At-Zt,Math.min(At+Zt,De)))}function Ct(oe){if(!Rr||yt)return;let ze=Je?De:At,$e;if(oe>0)$e=xe.findIndex(gt=>gt>ze+.05);else{$e=-1;for(let gt=xe.length-1;gt>=0;gt--)if(xe[gt]<ze-.05){$e=gt;break}}$e<0||(De=xe[$e],Je=!0,ft=nt)}let ot=null,nr=oe=>oe.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(oe=>a.addEventListener(oe,nr)),a.addEventListener("pointerdown",oe=>{if(oe.stopPropagation(),!(oe.target.closest("button, a")||oe.target.closest(".tour-body"))){ot={x:oe.clientX,y:oe.clientY,lx:oe.clientX,ly:oe.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{a.setPointerCapture(oe.pointerId)}catch(ze){}}}),a.addEventListener("pointermove",oe=>{if(!ot)return;let ze=oe.clientX-ot.lx,$e=oe.clientY-ot.ly;ot.lx=oe.clientX,ot.ly=oe.clientY;let gt=Math.abs($e)>=Math.abs(ze)?-$e:-ze;ot.moved+=Math.abs(gt);let Rt=performance.now(),It=gt/ct;ot.v=ot.v*.6+It/Math.max(.008,(Rt-ot.lt)/1e3)*.4,ot.lt=Rt,ot.moved>6&&Qe(It)});let sr=oe=>{let ze=ot;ot=null,ze&&(ze.moved<10&&performance.now()-ze.t<500?Ct(1):performance.now()-ze.lt<120&&Qe(Math.max(-1.6,Math.min(1.6,ze.v*.22))))};a.addEventListener("pointerup",oe=>{oe.stopPropagation(),sr(oe)}),a.addEventListener("pointercancel",()=>{ot=null}),a.addEventListener("wheel",oe=>{if(oe.target.closest(".tour-body")){let $e=oe.target.closest(".tour-body"),gt=$e.scrollTop+$e.clientHeight>=$e.scrollHeight-2&&oe.deltaY>0,Rt=$e.scrollTop<=0&&oe.deltaY<0;if(!gt&&!Rt)return}oe.preventDefault();let ze=oe.deltaMode===1?oe.deltaY*16:oe.deltaMode===2?oe.deltaY*window.innerHeight:oe.deltaY;Qe(ze/Xt)},{passive:!1}),window.addEventListener("keydown",oe=>{if(!Rr||yt)return;let ze=oe.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ze)>=0){if((ze==="Enter"||ze===" ")&&oe.target&&oe.target.tagName==="BUTTON")return;oe.preventDefault(),oe.stopImmediatePropagation(),Ct(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ze)>=0?(oe.preventDefault(),oe.stopImmediatePropagation(),Ct(-1)):ze==="Escape"?(oe.preventDefault(),Vn()):/^[wasdzq]$/i.test(ze)&&oe.stopImmediatePropagation()},!0),window.addEventListener("keyup",oe=>{Rr&&!yt&&/^(Arrow|[wasdzq]$)/i.test(oe.key)&&oe.stopImmediatePropagation()},!0),s.addEventListener("click",oe=>{oe.stopPropagation(),Vn()}),Ee.addEventListener("click",oe=>{let ze=oe.target.closest("button");ze&&(oe.stopPropagation(),ze.dataset.act==="free"&&Vn(),ze.dataset.act==="replay"&&Ir(),ze.dataset.act==="list"&&rl().show(!1))});let fn=[null,[bn.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+_i[0]-7,0],[42.5+_i[1]-7,0],[42.5+_i[2]-7,0],[1e3,Math.PI/2],...Br.map(oe=>[oe.z-1.6,oe.side==="left"?-Math.PI/2:Math.PI/2]),[qo[2]-1.6,Math.PI]],rn=null,Uo=0;function Vn(){if(!Rr||yt)return;let oe=$t(At),ze=fn[oe];rn=oe<=1?{phase:"home",pos:bi.slice()}:oe>=3&&oe<=6?{phase:"floor",pos:Wn.slice()}:oe===11?{phase:"floor",pos:Ms.slice()}:oe===18?{phase:"floor",pos:qo.slice()}:null,Uo=oe>=12?1:0,ze&&n.place&&n.place(ze[0],ze[1]),yt={start:nt,fromCam:_t,fromLook:Object.assign({},Dt)},y(),a.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Ir(){At=De=0,Je=!1,Jt=-1,On=0,Se=0,zt={phase:"home",pos:bi.slice(),tumble:0},un={start:nt}}let un={start:-1},Nn=!1,Bo=[];function go(oe){bt+=oe*(zt.phase==="floor"?0:1);let ze=zt.tumble===void 0?0:zt.tumble,$e=po.fromTranslation(Bo,zt.pos);if(zt.phase==="home")$e=po.rotateY($e,$e,2.2+Math.sin(bt*.9)*.15),$e=po.rotateZ($e,$e,-1+Math.sin(bt*1.3)*.12),$e=po.rotateX($e,$e,.4);else if(zt.phase==="floor")$e=po.rotateY($e,$e,.65),$e=po.rotateX($e,$e,.16);else{let gt=_t.eye,Rt=zt.pos,It=[gt[0]-Rt[0],gt[1]-Rt[1],gt[2]-Rt[2]],no=Math.hypot(It[0],It[1],It[2])||1;It=[It[0]/no,It[1]/no,It[2]/no];let wr=[It[2],0,-It[0]],$r=Math.hypot(wr[0],wr[2])||1;wr=[wr[0]/$r,0,wr[2]/$r];let jr=[wr[1]*It[2]-wr[2]*It[1],wr[2]*It[0]-wr[0]*It[2],wr[0]*It[1]-wr[1]*It[0]],qr=[wr[0],wr[1],wr[2],0,It[0],It[1],It[2],0,jr[0],jr[1],jr[2],0,Rt[0],Rt[1],Rt[2],1];for(let _n=0;_n<16;_n++)$e[_n]=qr[_n];$e=po.rotateY($e,$e,bt*.9*ze+.65),$e=po.rotateX($e,$e,Math.sin(bt*2.3)*.9*ze),$e=po.rotateZ($e,$e,Math.sin(bt*1.7+1)*1.1*ze+(zt.swing||0)*.9)}return{visible:!0,model:$e}}function xo(oe){for(let ze in Ef)Dt[ze]=oe[ze]!==void 0?oe[ze]:Ef[ze]}function Fn(oe,ze){if(oe<=1)return{phase:"home",pos:bi.slice(),tumble:0};let $e=Yv[oe];if($e){let gt=$e.amp;return{phase:"fly",pos:kt($e.pos(),[Math.sin(ze*.55)*gt[0],Math.sin(ze*.8)*gt[1],(1-Math.cos(ze*.45))*gt[2]]),tumble:$e.tumble}}return{phase:"floor",pos:(oe>=18?qo:oe>=10?Ms:Wn).slice(),tumble:0}}let er=0,zi=null;function Ts(oe){let ze=Math.min(.1,Math.max(0,oe-er));if(er=oe,nt=oe,Nn||(Nn=!0,un.start=oe),yt)return null;if(!Je&&!ot&&nt-ft>Pn){let Hr=$t(De);Math.abs(xe[Hr]-De)<pr&&(De=xe[Hr])}let $e=De-At;if(Je){let Hr=Math.sign($e)*Math.min(Math.abs($e),ze*(.35+.65*Me(0,.6,Math.abs($e)))*1);At+=Hr,Math.abs(De-At)<1e-4&&(At=De,Je=!1)}else At+=$e*(1-Math.exp(-ze*ir)),Math.abs($e)<1e-4&&(At=De);let gt=0;for(;gt<yf.length-1&&At>=xe[gt+1];)gt++;let Rt=yf[gt],It=wn((At-xe[gt])/Rt.dur),no=$o[gt],wr=$o[gt+1],$r=$t(At);$r!==On&&(On=$r,Se=0);let jr=Math.abs(At-xe[$r])<.02;jr&&(Se+=ze);let qr=1-Me(0,1.2,Math.abs(At-xe[$r])),_n=Rt.leaf(It);if(_n.pos?zt=Object.assign({},_n):zt=Object.assign({},_n,{pos:_n.phase==="home"?bi.slice():(gt>=10?Ms:Wn).slice()}),Yv[$r]&&qr>0){let Hr=Fn($r,Se);zt.pos=Qt(zt.pos,Hr.pos,qr)}let jo=Rt.walker&&(It>.01||gt===6)?Rt.walker(It):null;zi=jo==null?null:{x:jo,z:bf,heading:Math.PI/2,phase:(jo-Zv)/E_};let Bt=Rt.cam(It,no.cam(0),wr.cam(0),zt);if(qr>0&&Se>0){let Hr=$o[$r],hn=Hr.cam(0),Ra=Hr.cam(Se);Bt=vt(kt(Bt.eye,jv(Bv(Ra.eye,hn.eye),qr)),kt(Bt.target,jv(Bv(Ra.target,hn.target),qr)),Bt.fov+(Ra.fov-hn.fov)*qr,Bt.roll+(Ra.roll-hn.roll)*qr)}_t=Bt;let Ss=V0(gt),oc=V0(gt+1),Ci=Object.assign({},Ss,Rt.look(It,Ss,oc,zt,Bt.eye));if(qr>0){let Hr=V0($r);for(let hn in Hr)typeof Hr[hn]=="number"&&(Ci[hn]=Le(Ci[hn],Hr[hn],qr))}xo(Ci);let Wo=jr&&Math.abs(De-At)<.02?$r:-1;Wo!==Jt&&(Wo>=0&&(mr=nt+Gt),Jt=Wo,Wo>=0?Yt(Wo):y()),f.querySelectorAll("i").forEach((Hr,hn)=>Hr.classList.toggle("on",hn===$r));let Xn=Jt>=0?ue[Jt]:null;Xn&&Xn.fill&&!Xn.filled&&(Xn.fill(),Xn.filled&&(Xn.classList.remove("on"),Xn.offsetWidth,Xn.classList.add("on")));let ks=wn((oe-un.start)/2.6);return ks<1&&(Dt.fade=Math.max(Dt.fade,1-Me(0,1,ks)),Dt.fadeColor=[0,0,0]),r&&window.__camOverride&&(_t=window.__camOverride),r&&window.__lookOverride&&Object.assign(Dt,window.__lookOverride),{camera:_t,walker:zi,door:Rt.door?Rt.door(It):gt>=12?1:0,look:Dt,leaf:go(ze)}}return r&&(window.__tour={go:Ct,exit:Vn,wind:Qe,seek(oe,ze){At=De=xe[oe]+(xe[oe+1]-xe[oe])*ze,Je=!1,ft=nt+1e6,un.start=nt-10,Nn=!0},jump(oe){At=De=xe[oe],Je=!1,Se=0,ft=nt,un.start=nt-10,Nn=!0},state:()=>({current:$t(At),scroll:+At.toFixed(3),target:+De.toFixed(3),shown:Jt,move:Math.abs(De-At)>.02?{p:At}:null,camNow:_t,leaf:zt,look:Dt})}),{update:Ts,get active(){return Rr&&!yt},handover(oe){if(!yt)return null;let ze=wn((oe-yt.start)/1.8);return ze>=1?(Rr=!1,null):{from:yt.fromCam,fromLook:yt.fromLook,k:dr(ze)}},restingDoor:()=>Uo,restingLeaf(){return rn?(zt=rn,go(0)):null},mix:Ca,cam:vt}}});var R_=Rh(),Si=io(),Rf=rl(),Q0=Si.reflection,I_=!1,u2=(e,t,r,n,o)=>n+(e-t)*(o-n)/(r-t),If=()=>u2(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(If=()=>u2(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var h2=()=>2*Math.atan(Math.tan(If()*.5)*window.innerHeight/window.innerWidth),P_=Bh(),Z0=new P_;Z0.showPanel(0);I_&&document.body.appendChild(Z0.dom);var Dr,Li,kf,Ti,Lf,ar;function O_(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!O_())throw R_.finish(),Rf.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Dr=jh()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Si.pixelRatio});location.hash==="#list"&&Rf.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Rf.show(!1)});Li=Md()();var N_=Sl();kf=N_(Dr,Li,Q0);Ti=B1()(Dr,Li);Lf=X1()(Dr);var t2=K1()(Dr,Li),r2=sp()(Dr),n2=fp()(Dr),o2=Tp()(Dr),a2=Rp()(Dr),i2=Gp()(Dr),ki=Yp()(Dr),zf=Ql(),d2=s0(),F_=c0(),{A:Mi}=Jn();ar=Rv()(Li,h2);var J0=Pv()(Dr,Si),Ai=Gv()(Dr),s2=$v()(Dr),G_=Uv()(Dr,Si),mo=e2()({fps:ar,paintings:()=>Ti.interactables(),onExit:()=>ar.setPaused(!1)});ar.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=J0);var ec=[],tc=[],Ho=[7,2,1.6];Li.viewer=Ho;var D_=Dr({cull:{enable:!0,face:"back"},uniforms:{view:()=>ec,proj:()=>tc,yScale:1,mirrorOn:()=>Q0?1:0}}),$_=Dr({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),p2=document.createElement("style");p2.textContent=`

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
`;document.head.appendChild(p2);var In=document.createElement("button");In.className="painting-plaque";In.type="button";In.setAttribute("aria-label","Read painting");document.body.appendChild(In);var ln=document.createElement("div");ln.className="story-overlay";ln.innerHTML=`

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

		${d2.line("story-contact")}

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(ln);var nc=document.createElement("div");nc.className="museum-links";nc.innerHTML=d2.icons("museum-link");["mousedown","pointerdown","click"].forEach(e=>nc.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(nc);var q_=ln.querySelector("#story-title"),H_=ln.querySelector("#story-body"),c2=ln.querySelector("#story-meta"),U_=ln.querySelector(".story-contact"),B_=ln.querySelector(".story-close"),As=null,cn={p:0,target:0,last:0},m2={title:zf.title,description:zf.text,isAbout:!0},vo=null;function Pf(e){e&&(As=e,q_.textContent=e.title||"",H_.textContent=e.description||"",c2.textContent=e.isAbout?"":F_(e),c2.hidden=!!e.isAbout,U_.hidden=!e.isAbout,ln.classList.toggle("about-mode",!!e.isAbout),ln.classList.add("open"),cn.target=e.isAbout?1:0,vo=e,In.classList.remove("visible"),ar.setPaused(!0))}function Of(){ln.classList.remove("open"),cn.target=0,As=null,vo=null,ar.setPaused(!1)}function v2(e){e&&(e.preventDefault(),e.stopPropagation()),vo&&Pf(vo)}In.addEventListener("pointerup",v2,!0);In.addEventListener("touchend",v2,{passive:!1,capture:!0});In.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),As===null&&vo&&Pf(vo)},!0);B_.addEventListener("click",Of);ln.addEventListener("click",e=>{e.target===ln&&Of()});window.addEventListener("keydown",e=>{e.code==="Escape"&&ln.classList.contains("open")&&Of()});function l2(e,t){let r=t[0],n=t[1],o=t[2];return[e[0]*r+e[4]*n+e[8]*o+e[12],e[1]*r+e[5]*n+e[9]*o+e[13],e[2]*r+e[6]*n+e[10]*o+e[14],e[3]*r+e[7]*n+e[11]*o+e[15]]}function j_(){if(As)return;if(mo.active){vo=null,In.classList.remove("visible");return}let e=Ti.interactables(),t=ar.forward[0],r=ar.forward[2],n=Math.hypot(t,r)||1,o=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let h=s[0]-ar.pos[0],p=s[2]-ar.pos[2],u=-(h*c+p*f),m=Math.abs(h*f-p*c),v=-(t*c+r*f)/n,d=i.side==="end"?11:8,g=(i.width||2)/2;v>.9&&u>.5&&u<d&&m<g+.8&&u<a&&(o=i,a=u)}if(!o){let i=ar.pos[0],s=ar.pos[2];t/n>.85&&i<13.6&&s>Mi.z0-.5&&s<Mi.z1+.5&&(o=Object.assign({},m2,{plaqueTitle:zf.name}))}o?(vo=o,In.textContent=o.isAbout?"ABOUT  \xB7  "+o.plaqueTitle:"READ  \xB7  "+o.title,In.classList.add("visible")):(vo=null,In.classList.remove("visible"))}var Nf=as();function W_(){let e=ki.state;if(!e||!e.glowPos)return null;let t=l2(ar.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),r=l2(ar.proj(),t);return r[3]<=.05?null:[(r[0]/r[3]*.5+.5)*window.innerWidth,(.5-r[1]/r[3]*.5)*window.innerHeight,r[3]]}var Cf=null;window.addEventListener("pointerdown",e=>{Cf={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Cf;if(Cf=null,!t||As||mo.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let r=W_();if(!r)return;let n=!!document.pointerLockElement,o=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/r[2]);Math.hypot(o-r[0],a-r[1])<i&&(e.preventDefault(),e.stopPropagation(),Pf(m2))},!0);function V_(e){let t=Math.min(Math.max(e-cn.last,0),.1);cn.last=e;let r=t/1.6;if(cn.p=cn.target>cn.p?Math.min(1,cn.p+r):Math.max(0,cn.p-r),cn.p<=0)return;let n=cn.p<.5?2*cn.p*cn.p:1-Math.pow(-2*cn.p+2,2)/2,o=window.innerHeight>window.innerWidth,a=ki.state,i=a&&a.hipsPos?a.hipsPos[0]:Mi.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Mi.zc,c=o?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=o?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],h=ar.pos,p=ar.forward,u=[h[0],h[1],h[2]],m=[h[0]+p[0],h[1]+p[1],h[2]+p[2]],v=(T,C)=>T.map((D,q)=>D+(C[q]-D)*n),d=[Mi.cx-6.2,1.7,Mi.zc],g=1-n,w=u.map((T,C)=>g*g*T+2*g*n*d[C]+n*n*c[C]);Nf.lookAt(ar.view(),w,v(m,f),[0,1,0])}var Ei={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},rc=null;function X_(e,t,r,n){let o=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],a=Math.hypot(o[0],o[1],o[2])||1,i=[-o[2]/a,0,o[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Nf.lookAt(e,t,r,[i[0]*f,c,i[2]*f])}function Y_(e){let t=window.innerWidth/window.innerHeight,r=J0.shot,n=mo.active?mo.update(e):null,o=n?null:mo.handover(e),a=null,i=Ei;if(n?(a=n.camera,i=n.look,rc=n.leaf,ki.setWalk(n.walker||null),Ai.setOpen(n.door||0)):(rc=mo.restingLeaf(),ki.setWalk(null),Ai.setOpen(mo.restingDoor())),o){let s=ar.pos,c=ar.forward,f=mo.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],h2()*180/Math.PI,0);a=mo.mix(o.from,f,o.k),i={};for(let h in Ei)i[h]=Array.isArray(Ei[h])?Ei[h]:o.fromLook[h]+(Ei[h]-o.fromLook[h])*o.k}if(a)X_(ec,a.eye,a.target,a.roll||0),Nf.perspective(tc,a.fov*Math.PI/180,t,.1,700),Ho[0]=a.eye[0],Ho[1]=a.eye[1],Ho[2]=a.eye[2];else{let s=ar.view(),c=ar.proj();for(let u=0;u<16;u++)ec[u]=s[u],tc[u]=c[u];let f=s[12],h=s[13],p=s[14];Ho[0]=-(s[0]*f+s[1]*h+s[2]*p),Ho[1]=-(s[4]*f+s[5]*h+s[6]*p),Ho[2]=-(s[8]*f+s[9]*h+s[10]*p)}for(let s in Ei)r[s]=i[s]}var K0=0,f2=0;Dr.frame(function({time:e}){Z0.begin(),K0++,K0===60&&(f2=e),K0===180&&120/Math.max(e-f2,.001)<32&&Si.stepDown()&&(Q0=Si.reflection,K0=0),ar.tick({time:e}),V_(e),Ti.update(ar.pos,ar.fmouse[1],If()),j_(),Y_(e),J0.capture(arguments[0],{view:ec,proj:tc,eye:Ho},()=>{D_(()=>{Q0&&$_(()=>{kf(),t2(),i2(),ki(),Lf(Ti.batch()),r2(),o2(),a2(),s2(rc),Ai(),n2(),Ai.glass()}),kf(),t2(),i2(),ki(),Lf(Ti.batch()),r2(),o2(),a2(),s2(rc),Ai(),G_(),n2(),Ai.glass()})}),J0.present(),Z0.end()});})();
