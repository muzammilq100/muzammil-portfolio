"use strict";(()=>{var de=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Dh=de((Z_,Fh)=>{"use strict";var Ki=document.getElementById("loader"),l0=Ki&&Ki.querySelector(".loader-bar i"),Qi=0,f0=0,Ph=!1,ty=performance.now();function Oh(){if(!l0)return;let e=Qi?f0/Math.max(Qi,24):0;l0.style.transform="scaleX("+Math.min(1,.06+e*.94).toFixed(3)+")"}function il(){Ph||(Ph=!0,window.__galleryReady=!0,Ki&&(l0&&(l0.style.transform="scaleX(1)"),Ki.classList.add("done"),setTimeout(()=>Ki.remove(),1400)))}var Nh=null;function ry(){clearTimeout(Nh),f0>=Qi&&performance.now()-ty>600&&(Nh=setTimeout(()=>{f0>=Qi&&il()},450))}setTimeout(il,2e4);var ny=e=>/(^|\/)(res|images)\//.test(e),c0=window.fetch.bind(window);async function oy(e,t){let r=await c0(e+".gz",t);if(!r.ok)throw new Error("no .gz");let n=new Uint8Array(await r.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let o=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(o).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let r=typeof e=="string"?e:e&&e.url||"";if(!ny(r))return c0(e,t);Qi++,Oh();let n=a=>(f0++,Oh(),ry(),a),o;return/\.bin$/.test(r)&&typeof DecompressionStream!="undefined"?o=oy(r,t).catch(()=>c0(e,t)):o=c0(e,t),o.then(n,a=>{throw n(),a})};Fh.exports={finish:il}});var lo=de((J_,qh)=>{"use strict";var Gh=typeof navigator!="undefined"&&navigator.userAgent||"",ay=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Ao=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Gh)||/Macintosh/.test(Gh)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||ay,$h=typeof window!="undefined"&&window.devicePixelRatio||1,mn={isPhone:Ao,pixelRatio:Ao?Math.min($h,1.5):Math.min($h,2),reflection:!Ao,gardenDetail:Ao?0:1,leafShare:Ao?.65:1,motion:!Ao,post:Ao?1:2,level:Ao?1:0};mn.stepDown=()=>{if(mn.reflection)mn.reflection=!1;else if(mn.gardenDetail>0||mn.motion)mn.gardenDetail=0,mn.motion=!1,mn.leafShare=Math.min(mn.leafShare,.65);else if(mn.post>0)mn.post--;else return!1;return mn.level++,!0};qh.exports=mn});var sl=de((e4,Hh)=>{"use strict";Hh.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var u0=de((t4,jh)=>{"use strict";var Qr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Uh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Bh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Qr.instagramUrl="https://instagram.com/"+Qr.instagram;Qr.mailUrl="mailto:"+Qr.email+"?subject="+encodeURIComponent("Your paintings");Qr.icons=e=>`
	<a class="${e}" href="${Qr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Qr.instagram}" title="Instagram">${Uh}</a>
	<a class="${e}" href="${Qr.mailUrl}" aria-label="Email ${Qr.email}" title="Email">${Bh}</a>`;Qr.line=e=>`
	<span class="${e}">
		<a href="${Qr.instagramUrl}" target="_blank" rel="noopener">${Uh}<span>@${Qr.instagram}</span></a>
		<a href="${Qr.mailUrl}">${Bh}<span>${Qr.email}</span></a>
	</span>`;jh.exports=Qr});var h0=de((r4,Wh)=>{"use strict";Wh.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var cl=de((n4,Yh)=>{"use strict";var iy=sl(),sy=u0(),Vh=h0(),cy=lo(),To=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ly=`
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
`,Zr=null;function fy(e){if(Zr){Zr.hidden=!1,requestAnimationFrame(()=>Zr.classList.add("on"));return}let t=document.createElement("style");t.textContent=ly,document.head.appendChild(t);let r=!cy.isPhone;Zr=document.createElement("div"),Zr.className="plist",Zr.setAttribute("role","region"),Zr.setAttribute("aria-label","All paintings"),Zr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${sy.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${iy.map(o=>`
			<article class="plist-item" id="${To(o.slug)}">
				<img loading="lazy" decoding="async" alt="${To(o.title)}, ${To(Vh(o))}"
					src="images/web/${To(o.slug)}${r?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${To(o.file)}'">
				<p class="plist-meta">${To(Vh(o))}</p>
				<h2>${To(o.title)}</h2>
				<details><summary>Read its story</summary>
					${String(o.description).split(/\n\s*\n/).map(a=>`<p>${To(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(o=>Zr.addEventListener(o,a=>a.stopPropagation(),{passive:!0}));let n=Zr.querySelector(".plist-close");n&&n.addEventListener("click",Xh),document.body.appendChild(Zr),requestAnimationFrame(()=>Zr.classList.add("on"))}function Xh(){Zr&&(Zr.classList.remove("on"),setTimeout(()=>{Zr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Yh.exports={show:fy,hide:Xh}});var Kh=de((ll,fl)=>{(function(e,t){typeof ll=="object"&&typeof fl!="undefined"?fl.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(ll,function(){var e=function(){function t(p){return o.appendChild(p.dom),p}function r(p){for(var u=0;u<o.children.length;u++)o.children[u].style.display=u===p?"block":"none";n=p}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),r(++n%o.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var p=(performance||Date).now();if(f.update(p-a,200),p>i+1e3&&(c.update(1e3*s/(p-i),100),i=p,s=0,h)){var u=performance.memory;h.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:r}};return e.Panel=function(t,r,n){var o=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,h=3*s,p=2*s,u=3*s,v=15*s,m=74*s,d=30*s,x=document.createElement("canvas");x.width=c,x.height=f,x.style.cssText="width:80px;height:48px";var w=x.getContext("2d");return w.font="bold "+9*s+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,c,f),w.fillStyle=r,w.fillText(t,h,p),w.fillRect(u,v,m,d),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u,v,m,d),{dom:x,update:function(T,C){o=Math.min(o,T),a=Math.max(a,T),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,c,v),w.fillStyle=r,w.fillText(i(T)+" "+t+" ("+i(o)+"-"+i(a)+")",h,p),w.drawImage(x,u+s,v,m-s,d,u,v,m-s,d),w.fillRect(u+m-s,v,s,d),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u+m-s,v,s,i((1-T/C)*d))}}},e})});var Qh=de((ul,hl)=>{(function(e,t){typeof ul=="object"&&typeof hl!="undefined"?hl.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(ul,function(){"use strict";var e=function(l){return l instanceof Uint8Array||l instanceof Uint16Array||l instanceof Uint32Array||l instanceof Int8Array||l instanceof Int16Array||l instanceof Int32Array||l instanceof Float32Array||l instanceof Float64Array||l instanceof Uint8ClampedArray},t=function(l,b){for(var S=Object.keys(b),j=0;j<S.length;++j)l[S[j]]=b[S[j]];return l},r=`
`;function n(l){return typeof atob!="undefined"?atob(l):"base64:"+l}function o(l){var b=new Error("(regl) "+l);throw console.error(b),b}function a(l,b){l||o(b)}function i(l){return l?": "+l:""}function s(l,b,S){l in b||o("unknown parameter ("+l+")"+i(S)+". possible values: "+Object.keys(b).join())}function c(l,b){e(l)||o("invalid parameter type"+i(b)+". must be a typed array")}function f(l,b){switch(b){case"number":return typeof l=="number";case"object":return typeof l=="object";case"string":return typeof l=="string";case"boolean":return typeof l=="boolean";case"function":return typeof l=="function";case"undefined":return typeof l=="undefined";case"symbol":return typeof l=="symbol"}}function h(l,b,S){f(l,b)||o("invalid parameter type"+i(S)+". expected "+b+", got "+typeof l)}function p(l,b){l>=0&&(l|0)===l||o("invalid parameter type, ("+l+")"+i(b)+". must be a nonnegative integer")}function u(l,b,S){b.indexOf(l)<0&&o("invalid value"+i(S)+". must be one of: "+b)}var v=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function m(l){Object.keys(l).forEach(function(b){v.indexOf(b)<0&&o('invalid regl constructor argument "'+b+'". must be one of '+v)})}function d(l,b){for(l=l+"";l.length<b;)l=" "+l;return l}function x(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function w(l,b){this.number=l,this.line=b,this.errors=[]}function T(l,b,S){this.file=l,this.line=b,this.message=S}function C(){var l=new Error,b=(l.stack||l).toString(),S=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(b);if(S)return S[1];var j=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(b);return j?j[1]:"unknown"}function G(){var l=new Error,b=(l.stack||l).toString(),S=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(b);if(S)return S[1];var j=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(b);return j?j[1]:"unknown"}function $(l,b){var S=l.split(`
`),j=1,Q=0,U={unknown:new x,0:new x};U.unknown.name=U[0].name=b||C(),U.unknown.lines.push(new w(0,""));for(var V=0;V<S.length;++V){var ie=S[V],le=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(ie);if(le)switch(le[1]){case"line":var me=/(\d+)(\s+\d+)?/.exec(le[2]);me&&(j=me[1]|0,me[2]&&(Q=me[2]|0,Q in U||(U[Q]=new x)));break;case"define":var fe=/SHADER_NAME(_B64)?\s+(.*)$/.exec(le[2]);fe&&(U[Q].name=fe[1]?n(fe[2]):fe[2]);break}U[Q].lines.push(new w(j++,ie))}return Object.keys(U).forEach(function(xe){var Ae=U[xe];Ae.lines.forEach(function(se){Ae.index[se.number]=se})}),U}function H(l){var b=[];return l.split(`
`).forEach(function(S){if(!(S.length<5)){var j=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(S);j?b.push(new T(j[1]|0,j[2]|0,j[3].trim())):S.length>0&&b.push(new T("unknown",0,S))}}),b}function oe(l,b){b.forEach(function(S){var j=l[S.file];if(j){var Q=j.index[S.line];if(Q){Q.errors.push(S),j.hasErrors=!0;return}}l.unknown.hasErrors=!0,l.unknown.lines[0].errors.push(S)})}function ye(l,b,S,j,Q){if(!l.getShaderParameter(b,l.COMPILE_STATUS)){var U=l.getShaderInfoLog(b),V=j===l.FRAGMENT_SHADER?"fragment":"vertex";ge(S,"string",V+" shader source must be a string",Q);var ie=$(S,Q),le=H(U);oe(ie,le),Object.keys(ie).forEach(function(me){var fe=ie[me];if(!fe.hasErrors)return;var xe=[""],Ae=[""];function se(we,N){xe.push(we),Ae.push(N||"")}se("file number "+me+": "+fe.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),fe.lines.forEach(function(we){if(we.errors.length>0){se(d(we.number,4)+"|  ","background-color:yellow; font-weight:bold"),se(we.line+r,"color:red; background-color:yellow; font-weight:bold");var N=0;we.errors.forEach(function(X){var pe=X.message,Re=/^\s*'(.*)'\s*:\s*(.*)$/.exec(pe);if(Re){var te=Re[1];switch(pe=Re[2],te){case"assign":te="=";break}N=Math.max(we.line.indexOf(te,N),0)}else N=0;se(d("| ",6)),se(d("^^^",N+3)+r,"font-weight:bold"),se(d("| ",6)),se(pe+r,"font-weight:bold")}),se(d("| ",6)+r)}else se(d(we.number,4)+"|  "),se(we.line+r,"color:red")}),typeof document!="undefined"&&!window.chrome?(Ae[0]=xe.join("%c"),console.log.apply(console,Ae)):console.log(xe.join(""))}),a.raise("Error compiling "+V+" shader, "+ie[0].name)}}function J(l,b,S,j,Q){if(!l.getProgramParameter(b,l.LINK_STATUS)){var U=l.getProgramInfoLog(b),V=$(S,Q),ie=$(j,Q),le='Error linking program with vertex shader, "'+ie[0].name+'", and fragment shader "'+V[0].name+'"';typeof document!="undefined"?console.log("%c"+le+r+"%c"+U,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(le+r+U),a.raise(le)}}function be(l){l._commandRef=C()}function ue(l,b,S,j){be(l);function Q(le){return le?j.id(le):0}l._fragId=Q(l.static.frag),l._vertId=Q(l.static.vert);function U(le,me){Object.keys(me).forEach(function(fe){le[j.id(fe)]=!0})}var V=l._uniformSet={};U(V,b.static),U(V,b.dynamic);var ie=l._attributeSet={};U(ie,S.static),U(ie,S.dynamic),l._hasCount="count"in l.static||"count"in l.dynamic||"elements"in l.static||"elements"in l.dynamic}function De(l,b){var S=G();o(l+" in command "+(b||C())+(S==="unknown"?"":" called from "+S))}function Ie(l,b,S){l||De(b,S||C())}function Ce(l,b,S,j){l in b||De("unknown parameter ("+l+")"+i(S)+". possible values: "+Object.keys(b).join(),j||C())}function ge(l,b,S,j){f(l,b)||De("invalid parameter type"+i(S)+". expected "+b+", got "+typeof l,j||C())}function nt(l){l()}function Yt(l,b,S){l.texture?u(l.texture._texture.internalformat,b,"unsupported texture format for attachment"):u(l.renderbuffer._renderbuffer.format,S,"unsupported renderbuffer format for attachment")}var st=33071,Bt=9728,Rt=9984,lr=9985,ir=9986,En=9987,Cr=5120,Wr=5121,on=5122,Vn=5123,je=5124,Ue=5125,et=5126,yt=32819,Le=32820,pt=33635,kt=34042,Wt=36193,bt={};bt[Cr]=bt[Wr]=1,bt[on]=bt[Vn]=bt[Wt]=bt[pt]=bt[yt]=bt[Le]=2,bt[je]=bt[Ue]=bt[et]=bt[kt]=4;function Gt(l,b){return l===Le||l===yt||l===pt?2:l===kt?4:bt[l]*b}function mt(l){return!(l&l-1)&&!!l}function zt(l,b,S){var j,Q=b.width,U=b.height,V=b.channels;a(Q>0&&Q<=S.maxTextureSize&&U>0&&U<=S.maxTextureSize,"invalid texture shape"),(l.wrapS!==st||l.wrapT!==st)&&a(mt(Q)&&mt(U),"incompatible wrap mode for texture, both width and height must be power of 2"),b.mipmask===1?Q!==1&&U!==1&&a(l.minFilter!==Rt&&l.minFilter!==ir&&l.minFilter!==lr&&l.minFilter!==En,"min filter requires mipmap"):(a(mt(Q)&&mt(U),"texture must be a square power of 2 to support mipmapping"),a(b.mipmask===(Q<<1)-1,"missing or incomplete mipmap data")),b.type===et&&(S.extensions.indexOf("oes_texture_float_linear")<0&&a(l.minFilter===Bt&&l.magFilter===Bt,"filter not supported, must enable oes_texture_float_linear"),a(!l.genMipmaps,"mipmap generation not supported with float textures"));var ie=b.images;for(j=0;j<16;++j)if(ie[j]){var le=Q>>j,me=U>>j;a(b.mipmask&1<<j,"missing mipmap data");var fe=ie[j];if(a(fe.width===le&&fe.height===me,"invalid shape for mip images"),a(fe.format===b.format&&fe.internalformat===b.internalformat&&fe.type===b.type,"incompatible type for mip image"),!fe.compressed)if(fe.data){var xe=Math.ceil(Gt(fe.type,V)*le/fe.unpackAlignment)*fe.unpackAlignment;a(fe.data.byteLength===xe*me,"invalid data for image, buffer size is inconsistent with image format")}else fe.element||fe.copy}else l.genMipmaps||a((b.mipmask&1<<j)===0,"extra mipmap data");b.compressed&&a(!l.genMipmaps,"mipmap generation for compressed images not supported")}function It(l,b,S,j){var Q=l.width,U=l.height,V=l.channels;a(Q>0&&Q<=j.maxTextureSize&&U>0&&U<=j.maxTextureSize,"invalid texture shape"),a(Q===U,"cube map must be square"),a(b.wrapS===st&&b.wrapT===st,"wrap mode not supported by cube map");for(var ie=0;ie<S.length;++ie){var le=S[ie];a(le.width===Q&&le.height===U,"inconsistent cube map face shape"),b.genMipmaps&&(a(!le.compressed,"can not generate mipmap for compressed textures"),a(le.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var me=le.images,fe=0;fe<16;++fe){var xe=me[fe];if(xe){var Ae=Q>>fe,se=U>>fe;a(le.mipmask&1<<fe,"missing mipmap data"),a(xe.width===Ae&&xe.height===se,"invalid shape for mip images"),a(xe.format===l.format&&xe.internalformat===l.internalformat&&xe.type===l.type,"incompatible type for mip image"),xe.compressed||(xe.data?a(xe.data.byteLength===Ae*se*Math.max(Gt(xe.type,V),xe.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):xe.element||xe.copy)}}}}var g=t(a,{optional:nt,raise:o,commandRaise:De,command:Ie,parameter:s,commandParameter:Ce,constructor:m,type:h,commandType:ge,isTypedArray:c,nni:p,oneOf:u,shaderError:ye,linkError:J,callSite:G,saveCommandRef:be,saveDrawInfo:ue,framebufferFormat:Yt,guessCommand:C,texture2D:zt,textureCube:It}),jt=0,nr=0,Ze=5,$t=6;function At(l,b){this.id=jt++,this.type=l,this.data=b}function or(l){return l.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Jt(l){if(l.length===0)return[];var b=l.charAt(0),S=l.charAt(l.length-1);if(l.length>1&&b===S&&(b==='"'||b==="'"))return['"'+or(l.substr(1,l.length-2))+'"'];var j=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(l);if(j)return Jt(l.substr(0,j.index)).concat(Jt(j[1])).concat(Jt(l.substr(j.index+j[0].length)));var Q=l.split(".");if(Q.length===1)return['"'+or(l)+'"'];for(var U=[],V=0;V<Q.length;++V)U=U.concat(Jt(Q[V]));return U}function Vr(l){return"["+Jt(l).join("][")+"]"}function Kt(l,b){return new At(l,Vr(b+""))}function Ra(l){return typeof l=="function"&&!l._reglType||l instanceof At}function Bo(l,b){if(typeof l=="function")return new At(nr,l);if(typeof l=="number"||typeof l=="boolean")return new At(Ze,l);if(Array.isArray(l))return new At($t,l.map((S,j)=>Bo(S,b+"["+j+"]")));if(l instanceof At)return l;g(!1,"invalid option type in uniform "+b)}var Or={DynamicVariable:At,define:Kt,isDynamic:Ra,unbox:Bo,accessor:Vr},Nn={next:typeof requestAnimationFrame=="function"?function(l){return requestAnimationFrame(l)}:function(l){return setTimeout(l,16)},cancel:typeof cancelAnimationFrame=="function"?function(l){return cancelAnimationFrame(l)}:clearTimeout},oo=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Xn(){var l={"":0},b=[""];return{id:function(S){var j=l[S];return j||(j=l[S]=b.length,b.push(S),j)},str:function(S){return b[S]}}}function jo(l,b,S){var j=document.createElement("canvas");t(j.style,{border:0,margin:0,padding:0,top:0,left:0}),l.appendChild(j),l===document.body&&(j.style.position="absolute",t(l.style,{margin:0,padding:0}));function Q(){var ie=window.innerWidth,le=window.innerHeight;if(l!==document.body){var me=l.getBoundingClientRect();ie=me.right-me.left,le=me.bottom-me.top}j.width=S*ie,j.height=S*le,t(j.style,{width:ie+"px",height:le+"px"})}var U;l!==document.body&&typeof ResizeObserver=="function"?(U=new ResizeObserver(function(){setTimeout(Q)}),U.observe(l)):window.addEventListener("resize",Q,!1);function V(){U?U.disconnect():window.removeEventListener("resize",Q),l.removeChild(j)}return Q(),{canvas:j,onDestroy:V}}function Mn(l,b){function S(j){try{return l.getContext(j,b)}catch(Q){return null}}return S("webgl")||S("experimental-webgl")||S("webgl-experimental")}function an(l){return typeof l.nodeName=="string"&&typeof l.appendChild=="function"&&typeof l.getBoundingClientRect=="function"}function ar(l){return typeof l.drawArrays=="function"||typeof l.drawElements=="function"}function Ci(l){return typeof l=="string"?l.split():(g(Array.isArray(l),"invalid extension array"),l)}function Ss(l){return typeof l=="string"?(g(typeof document!="undefined","not supported outside of DOM"),document.querySelector(l)):l}function cc(l){var b=l||{},S,j,Q,U,V={},ie=[],le=[],me=typeof window=="undefined"?1:window.devicePixelRatio,fe=!1,xe=function(we){we&&g.raise(we)},Ae=function(){};if(typeof b=="string"?(g(typeof document!="undefined","selector queries only supported in DOM enviroments"),S=document.querySelector(b),g(S,"invalid query string for element")):typeof b=="object"?an(b)?S=b:ar(b)?(U=b,Q=U.canvas):(g.constructor(b),"gl"in b?U=b.gl:"canvas"in b?Q=Ss(b.canvas):"container"in b&&(j=Ss(b.container)),"attributes"in b&&(V=b.attributes,g.type(V,"object","invalid context attributes")),"extensions"in b&&(ie=Ci(b.extensions)),"optionalExtensions"in b&&(le=Ci(b.optionalExtensions)),"onDone"in b&&(g.type(b.onDone,"function","invalid or missing onDone callback"),xe=b.onDone),"profile"in b&&(fe=!!b.profile),"pixelRatio"in b&&(me=+b.pixelRatio,g(me>0,"invalid pixel ratio"))):g.raise("invalid arguments to regl"),S&&(S.nodeName.toLowerCase()==="canvas"?Q=S:j=S),!U){if(!Q){g(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var se=jo(j||document.body,xe,me);if(!se)return null;Q=se.canvas,Ae=se.onDestroy}V.premultipliedAlpha===void 0&&(V.premultipliedAlpha=!0),U=Mn(Q,V)}return U?{gl:U,canvas:Q,container:j,extensions:ie,optionalExtensions:le,pixelRatio:me,profile:fe,onDone:xe,onDestroy:Ae}:(Ae(),xe("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function ks(l,b){var S={};function j(V){g.type(V,"string","extension name must be string");var ie=V.toLowerCase(),le;try{le=S[ie]=l.getExtension(ie)}catch(me){}return!!le}for(var Q=0;Q<b.extensions.length;++Q){var U=b.extensions[Q];if(!j(U))return b.onDestroy(),b.onDone('"'+U+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return b.optionalExtensions.forEach(j),{extensions:S,restore:function(){Object.keys(S).forEach(function(V){if(S[V]&&!j(V))throw new Error("(regl): error restoring extension "+V)})}}}function Ur(l,b){for(var S=Array(l),j=0;j<l;++j)S[j]=b(j);return S}var lc=5120,ae=5121,ze=5122,Ve=5123,gt=5124,Pt=5125,Ot=5126;function ao(l){for(var b=16;b<=1<<28;b*=16)if(l<=b)return b;return 0}function vr(l){var b,S;return b=(l>65535)<<4,l>>>=b,S=(l>255)<<3,l>>>=S,b|=S,S=(l>15)<<2,l>>>=S,b|=S,S=(l>3)<<1,l>>>=S,b|=S,b|l>>1}function Nr(){var l=Ur(8,function(){return[]});function b(U){var V=ao(U),ie=l[vr(V)>>2];return ie.length>0?ie.pop():new ArrayBuffer(V)}function S(U){l[vr(U.byteLength)>>2].push(U)}function j(U,V){var ie=null;switch(U){case lc:ie=new Int8Array(b(V),0,V);break;case ae:ie=new Uint8Array(b(V),0,V);break;case ze:ie=new Int16Array(b(2*V),0,V);break;case Ve:ie=new Uint16Array(b(2*V),0,V);break;case gt:ie=new Int32Array(b(4*V),0,V);break;case Pt:ie=new Uint32Array(b(4*V),0,V);break;case Ot:ie=new Float32Array(b(4*V),0,V);break;default:return null}return ie.length!==V?ie.subarray(0,V):ie}function Q(U){S(U.buffer)}return{alloc:b,free:S,allocType:j,freeType:Q}}var Lt=Nr();Lt.zero=Nr();var Tr=3408,Fn=3410,Ia=3411,sn=3412,Ls=3413,fc=3414,Ri=3415,Uf=33901,Wo=33902,Yn=3379,zs=3386,er=34921,gr=36347,io=36348,Cs=35661,Rs=35660,E2=34930,M2=36349,A2=34076,T2=34024,S2=7936,k2=7937,L2=7938,z2=35724,C2=34047,R2=36063,I2=34852,Is=3553,Bf=34067,P2=34069,O2=33984,Ii=6408,uc=5126,jf=5121,hc=36160,N2=36053,F2=36064,D2=16384,G2=function(l,b){var S=1;b.ext_texture_filter_anisotropic&&(S=l.getParameter(C2));var j=1,Q=1;b.webgl_draw_buffers&&(j=l.getParameter(I2),Q=l.getParameter(R2));var U=!!b.oes_texture_float;if(U){var V=l.createTexture();l.bindTexture(Is,V),l.texImage2D(Is,0,Ii,1,1,0,Ii,uc,null);var ie=l.createFramebuffer();if(l.bindFramebuffer(hc,ie),l.framebufferTexture2D(hc,F2,Is,V,0),l.bindTexture(Is,null),l.checkFramebufferStatus(hc)!==N2)U=!1;else{l.viewport(0,0,1,1),l.clearColor(1,0,0,1),l.clear(D2);var le=Lt.allocType(uc,4);l.readPixels(0,0,1,1,Ii,uc,le),l.getError()?U=!1:(l.deleteFramebuffer(ie),l.deleteTexture(V),U=le[0]===1),Lt.freeType(le)}}var me=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),fe=!0;if(!me){var xe=l.createTexture(),Ae=Lt.allocType(jf,36);l.activeTexture(O2),l.bindTexture(Bf,xe),l.texImage2D(P2,0,Ii,3,3,0,Ii,jf,Ae),Lt.freeType(Ae),l.bindTexture(Bf,null),l.deleteTexture(xe),fe=!l.getError()}return{colorBits:[l.getParameter(Fn),l.getParameter(Ia),l.getParameter(sn),l.getParameter(Ls)],depthBits:l.getParameter(fc),stencilBits:l.getParameter(Ri),subpixelBits:l.getParameter(Tr),extensions:Object.keys(b).filter(function(se){return!!b[se]}),maxAnisotropic:S,maxDrawbuffers:j,maxColorAttachments:Q,pointSizeDims:l.getParameter(Uf),lineWidthDims:l.getParameter(Wo),maxViewportDims:l.getParameter(zs),maxCombinedTextureUnits:l.getParameter(Cs),maxCubeMapSize:l.getParameter(A2),maxRenderbufferSize:l.getParameter(T2),maxTextureUnits:l.getParameter(E2),maxTextureSize:l.getParameter(Yn),maxAttributes:l.getParameter(er),maxVertexUniforms:l.getParameter(gr),maxVertexTextureUnits:l.getParameter(Rs),maxVaryingVectors:l.getParameter(io),maxFragmentUniforms:l.getParameter(M2),glsl:l.getParameter(z2),renderer:l.getParameter(k2),vendor:l.getParameter(S2),version:l.getParameter(L2),readFloat:U,npotTextureCube:fe}};function Dn(l){return!!l&&typeof l=="object"&&Array.isArray(l.shape)&&Array.isArray(l.stride)&&typeof l.offset=="number"&&l.shape.length===l.stride.length&&(Array.isArray(l.data)||e(l.data))}var pn=function(l){return Object.keys(l).map(function(b){return l[b]})},Ps={shape:U2,flatten:H2};function $2(l,b,S){for(var j=0;j<b;++j)S[j]=l[j]}function q2(l,b,S,j){for(var Q=0,U=0;U<b;++U)for(var V=l[U],ie=0;ie<S;++ie)j[Q++]=V[ie]}function Wf(l,b,S,j,Q,U){for(var V=U,ie=0;ie<b;++ie)for(var le=l[ie],me=0;me<S;++me)for(var fe=le[me],xe=0;xe<j;++xe)Q[V++]=fe[xe]}function Vf(l,b,S,j,Q){for(var U=1,V=S+1;V<b.length;++V)U*=b[V];var ie=b[S];if(b.length-S===4){var le=b[S+1],me=b[S+2],fe=b[S+3];for(V=0;V<ie;++V)Wf(l[V],le,me,fe,j,Q),Q+=U}else for(V=0;V<ie;++V)Vf(l[V],b,S+1,j,Q),Q+=U}function H2(l,b,S,j){var Q=1;if(b.length)for(var U=0;U<b.length;++U)Q*=b[U];else Q=0;var V=j||Lt.allocType(S,Q);switch(b.length){case 0:break;case 1:$2(l,b[0],V);break;case 2:q2(l,b[0],b[1],V);break;case 3:Wf(l,b[0],b[1],b[2],V,0);break;default:Vf(l,b,0,V,0)}return V}function U2(l){for(var b=[],S=l;S.length;S=S[0])b.push(S.length);return b}var dc={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},B2=5120,j2=5122,W2=5124,V2=5121,X2=5123,Y2=5125,K2=5126,Q2=5126,Vo={int8:B2,int16:j2,int32:W2,uint8:V2,uint16:X2,uint32:Y2,float:K2,float32:Q2},Z2=35048,J2=35040,Os={dynamic:Z2,stream:J2,static:35044},pc=Ps.flatten,Xf=Ps.shape,Yf=35044,eg=35040,mc=5121,vc=5126,bo=[];bo[5120]=1,bo[5122]=2,bo[5124]=4,bo[5121]=1,bo[5123]=2,bo[5125]=4,bo[5126]=4;function Ns(l){return dc[Object.prototype.toString.call(l)]|0}function Kf(l,b){for(var S=0;S<b.length;++S)l[S]=b[S]}function Qf(l,b,S,j,Q,U,V){for(var ie=0,le=0;le<S;++le)for(var me=0;me<j;++me)l[ie++]=b[Q*le+U*me+V]}function tg(l,b,S,j){var Q=0,U={};function V(N){this.id=Q++,this.buffer=l.createBuffer(),this.type=N,this.usage=Yf,this.byteLength=0,this.dimension=1,this.dtype=mc,this.persistentData=null,S.profile&&(this.stats={size:0})}V.prototype.bind=function(){l.bindBuffer(this.type,this.buffer)},V.prototype.destroy=function(){Ae(this)};var ie=[];function le(N,X){var pe=ie.pop();return pe||(pe=new V(N)),pe.bind(),xe(pe,X,eg,0,1,!1),pe}function me(N){ie.push(N)}function fe(N,X,pe){N.byteLength=X.byteLength,l.bufferData(N.type,X,pe)}function xe(N,X,pe,Re,te,Pe){var ne;if(N.usage=pe,Array.isArray(X)){if(N.dtype=Re||vc,X.length>0){var _e;if(Array.isArray(X[0])){ne=Xf(X);for(var re=1,Ee=1;Ee<ne.length;++Ee)re*=ne[Ee];N.dimension=re,_e=pc(X,ne,N.dtype),fe(N,_e,pe),Pe?N.persistentData=_e:Lt.freeType(_e)}else if(typeof X[0]=="number"){N.dimension=te;var We=Lt.allocType(N.dtype,X.length);Kf(We,X),fe(N,We,pe),Pe?N.persistentData=We:Lt.freeType(We)}else e(X[0])?(N.dimension=X[0].length,N.dtype=Re||Ns(X[0])||vc,_e=pc(X,[X.length,X[0].length],N.dtype),fe(N,_e,pe),Pe?N.persistentData=_e:Lt.freeType(_e)):g.raise("invalid buffer data")}}else if(e(X))N.dtype=Re||Ns(X),N.dimension=te,fe(N,X,pe),Pe&&(N.persistentData=new Uint8Array(new Uint8Array(X.buffer)));else if(Dn(X)){ne=X.shape;var Je=X.stride,Te=X.offset,ve=0,ee=0,Qe=0,ot=0;ne.length===1?(ve=ne[0],ee=1,Qe=Je[0],ot=0):ne.length===2?(ve=ne[0],ee=ne[1],Qe=Je[0],ot=Je[1]):g.raise("invalid shape"),N.dtype=Re||Ns(X.data)||vc,N.dimension=ee;var Ge=Lt.allocType(N.dtype,ve*ee);Qf(Ge,X.data,ve,ee,Qe,ot,Te),fe(N,Ge,pe),Pe?N.persistentData=Ge:Lt.freeType(Ge)}else X instanceof ArrayBuffer?(N.dtype=mc,N.dimension=te,fe(N,X,pe),Pe&&(N.persistentData=new Uint8Array(new Uint8Array(X)))):g.raise("invalid buffer data")}function Ae(N){b.bufferCount--,j(N);var X=N.buffer;g(X,"buffer must not be deleted already"),l.deleteBuffer(X),N.buffer=null,delete U[N.id]}function se(N,X,pe,Re){b.bufferCount++;var te=new V(X);U[te.id]=te;function Pe(re){var Ee=Yf,We=null,Je=0,Te=0,ve=1;return Array.isArray(re)||e(re)||Dn(re)||re instanceof ArrayBuffer?We=re:typeof re=="number"?Je=re|0:re&&(g.type(re,"object","buffer arguments must be an object, a number or an array"),"data"in re&&(g(We===null||Array.isArray(We)||e(We)||Dn(We),"invalid data for buffer"),We=re.data),"usage"in re&&(g.parameter(re.usage,Os,"invalid buffer usage"),Ee=Os[re.usage]),"type"in re&&(g.parameter(re.type,Vo,"invalid buffer type"),Te=Vo[re.type]),"dimension"in re&&(g.type(re.dimension,"number","invalid dimension"),ve=re.dimension|0),"length"in re&&(g.nni(Je,"buffer length must be a nonnegative integer"),Je=re.length|0)),te.bind(),We?xe(te,We,Ee,Te,ve,Re):(Je&&l.bufferData(te.type,Je,Ee),te.dtype=Te||mc,te.usage=Ee,te.dimension=ve,te.byteLength=Je),S.profile&&(te.stats.size=te.byteLength*bo[te.dtype]),Pe}function ne(re,Ee){g(Ee+re.byteLength<=te.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+re.byteLength+" starting from offset "+Ee+" to a buffer of size "+te.byteLength),l.bufferSubData(te.type,Ee,re)}function _e(re,Ee){var We=(Ee||0)|0,Je;if(te.bind(),e(re)||re instanceof ArrayBuffer)ne(re,We);else if(Array.isArray(re)){if(re.length>0)if(typeof re[0]=="number"){var Te=Lt.allocType(te.dtype,re.length);Kf(Te,re),ne(Te,We),Lt.freeType(Te)}else if(Array.isArray(re[0])||e(re[0])){Je=Xf(re);var ve=pc(re,Je,te.dtype);ne(ve,We),Lt.freeType(ve)}else g.raise("invalid buffer data")}else if(Dn(re)){Je=re.shape;var ee=re.stride,Qe=0,ot=0,Ge=0,ft=0;Je.length===1?(Qe=Je[0],ot=1,Ge=ee[0],ft=0):Je.length===2?(Qe=Je[0],ot=Je[1],Ge=ee[0],ft=ee[1]):g.raise("invalid shape");var tt=Array.isArray(re.data)?te.dtype:Ns(re.data),ct=Lt.allocType(tt,Qe*ot);Qf(ct,re.data,Qe,ot,Ge,ft,re.offset),ne(ct,We),Lt.freeType(ct)}else g.raise("invalid data for buffer subdata");return Pe}return pe||Pe(N),Pe._reglType="buffer",Pe._buffer=te,Pe.subdata=_e,S.profile&&(Pe.stats=te.stats),Pe.destroy=function(){Ae(te)},Pe}function we(){pn(U).forEach(function(N){N.buffer=l.createBuffer(),l.bindBuffer(N.type,N.buffer),l.bufferData(N.type,N.persistentData||N.byteLength,N.usage)})}return S.profile&&(b.getTotalBufferSize=function(){var N=0;return Object.keys(U).forEach(function(X){N+=U[X].stats.size}),N}),{create:se,createStream:le,destroyStream:me,clear:function(){pn(U).forEach(Ae),ie.forEach(Ae)},getBuffer:function(N){return N&&N._buffer instanceof V?N._buffer:null},restore:we,_initBuffer:xe}}var rg=0,ng=0,og=1,ag=1,ig=4,sg=4,Pa={points:rg,point:ng,lines:og,line:ag,triangles:ig,triangle:sg,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},cg=0,lg=1,Pi=4,fg=5120,Oa=5121,Zf=5122,Na=5123,Jf=5124,Xo=5125,gc=34963,ug=35040,hg=35044;function dg(l,b,S,j){var Q={},U=0,V={uint8:Oa,uint16:Na};b.oes_element_index_uint&&(V.uint32=Xo);function ie(we){this.id=U++,Q[this.id]=this,this.buffer=we,this.primType=Pi,this.vertCount=0,this.type=0}ie.prototype.bind=function(){this.buffer.bind()};var le=[];function me(we){var N=le.pop();return N||(N=new ie(S.create(null,gc,!0,!1)._buffer)),xe(N,we,ug,-1,-1,0,0),N}function fe(we){le.push(we)}function xe(we,N,X,pe,Re,te,Pe){we.buffer.bind();var ne;if(N){var _e=Pe;!Pe&&(!e(N)||Dn(N)&&!e(N.data))&&(_e=b.oes_element_index_uint?Xo:Na),S._initBuffer(we.buffer,N,X,_e,3)}else l.bufferData(gc,te,X),we.buffer.dtype=ne||Oa,we.buffer.usage=X,we.buffer.dimension=3,we.buffer.byteLength=te;if(ne=Pe,!Pe){switch(we.buffer.dtype){case Oa:case fg:ne=Oa;break;case Na:case Zf:ne=Na;break;case Xo:case Jf:ne=Xo;break;default:g.raise("unsupported type for element array")}we.buffer.dtype=ne}we.type=ne,g(ne!==Xo||!!b.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var re=Re;re<0&&(re=we.buffer.byteLength,ne===Na?re>>=1:ne===Xo&&(re>>=2)),we.vertCount=re;var Ee=pe;if(pe<0){Ee=Pi;var We=we.buffer.dimension;We===1&&(Ee=cg),We===2&&(Ee=lg),We===3&&(Ee=Pi)}we.primType=Ee}function Ae(we){j.elementsCount--,g(we.buffer!==null,"must not double destroy elements"),delete Q[we.id],we.buffer.destroy(),we.buffer=null}function se(we,N){var X=S.create(null,gc,!0),pe=new ie(X._buffer);j.elementsCount++;function Re(te){if(!te)X(),pe.primType=Pi,pe.vertCount=0,pe.type=Oa;else if(typeof te=="number")X(te),pe.primType=Pi,pe.vertCount=te|0,pe.type=Oa;else{var Pe=null,ne=hg,_e=-1,re=-1,Ee=0,We=0;Array.isArray(te)||e(te)||Dn(te)?Pe=te:(g.type(te,"object","invalid arguments for elements"),"data"in te&&(Pe=te.data,g(Array.isArray(Pe)||e(Pe)||Dn(Pe),"invalid data for element buffer")),"usage"in te&&(g.parameter(te.usage,Os,"invalid element buffer usage"),ne=Os[te.usage]),"primitive"in te&&(g.parameter(te.primitive,Pa,"invalid element buffer primitive"),_e=Pa[te.primitive]),"count"in te&&(g(typeof te.count=="number"&&te.count>=0,"invalid vertex count for elements"),re=te.count|0),"type"in te&&(g.parameter(te.type,V,"invalid buffer type"),We=V[te.type]),"length"in te?Ee=te.length|0:(Ee=re,We===Na||We===Zf?Ee*=2:(We===Xo||We===Jf)&&(Ee*=4))),xe(pe,Pe,ne,_e,re,Ee,We)}return Re}return Re(we),Re._reglType="elements",Re._elements=pe,Re.subdata=function(te,Pe){return X.subdata(te,Pe),Re},Re.destroy=function(){Ae(pe)},Re}return{create:se,createStream:me,destroyStream:fe,getElements:function(we){return typeof we=="function"&&we._elements instanceof ie?we._elements:null},clear:function(){pn(Q).forEach(Ae)}}}var eu=new Float32Array(1),pg=new Uint32Array(eu.buffer),mg=5123;function tu(l){for(var b=Lt.allocType(mg,l.length),S=0;S<l.length;++S)if(isNaN(l[S]))b[S]=65535;else if(l[S]===1/0)b[S]=31744;else if(l[S]===-1/0)b[S]=64512;else{eu[0]=l[S];var j=pg[0],Q=j>>>31<<15,U=(j<<1>>>24)-127,V=j>>13&1023;if(U<-24)b[S]=Q;else if(U<-14){var ie=-14-U;b[S]=Q+(V+1024>>ie)}else U>15?b[S]=Q+31744:b[S]=Q+(U+15<<10)+V}return b}function fr(l){return Array.isArray(l)||e(l)}var ru=function(l){return!(l&l-1)&&!!l},vg=34467,Kn=3553,xc=34067,Fs=34069,Yo=6408,yc=6406,Ds=6407,Oi=6409,Gs=6410,nu=32854,bc=32855,ou=36194,gg=32819,xg=32820,yg=33635,bg=34042,wc=6402,$s=34041,_c=35904,Ec=35906,Fa=36193,Mc=33776,Ac=33777,Tc=33778,Sc=33779,au=35986,iu=35987,su=34798,cu=35840,lu=35841,fu=35842,uu=35843,hu=36196,Da=5121,kc=5123,Lc=5125,Ni=5126,wg=10242,_g=10243,Eg=10497,zc=33071,Mg=33648,Ag=10240,Tg=10241,Cc=9728,Sg=9729,Rc=9984,du=9985,pu=9986,Ic=9987,kg=33170,qs=4352,Lg=4353,zg=4354,Cg=34046,Rg=3317,Ig=37440,Pg=37441,Og=37443,mu=37444,Fi=33984,Ng=[Rc,pu,du,Ic],Hs=[0,Oi,Gs,Ds,Yo],An={};An[Oi]=An[yc]=An[wc]=1,An[$s]=An[Gs]=2,An[Ds]=An[_c]=3,An[Yo]=An[Ec]=4;function Ga(l){return"[object "+l+"]"}var vu=Ga("HTMLCanvasElement"),gu=Ga("OffscreenCanvas"),xu=Ga("CanvasRenderingContext2D"),yu=Ga("ImageBitmap"),bu=Ga("HTMLImageElement"),wu=Ga("HTMLVideoElement"),Fg=Object.keys(dc).concat([vu,gu,xu,yu,bu,wu]),$a=[];$a[Da]=1,$a[Ni]=4,$a[Fa]=2,$a[kc]=2,$a[Lc]=4;var Fr=[];Fr[nu]=2,Fr[bc]=2,Fr[ou]=2,Fr[$s]=4,Fr[Mc]=.5,Fr[Ac]=.5,Fr[Tc]=1,Fr[Sc]=1,Fr[au]=.5,Fr[iu]=1,Fr[su]=1,Fr[cu]=.5,Fr[lu]=.25,Fr[fu]=.5,Fr[uu]=.25,Fr[hu]=.5;function _u(l){return Array.isArray(l)&&(l.length===0||typeof l[0]=="number")}function Eu(l){if(!Array.isArray(l))return!1;var b=l.length;return!(b===0||!fr(l[0]))}function Ko(l){return Object.prototype.toString.call(l)}function Mu(l){return Ko(l)===vu}function Au(l){return Ko(l)===gu}function Dg(l){return Ko(l)===xu}function Gg(l){return Ko(l)===yu}function $g(l){return Ko(l)===bu}function qg(l){return Ko(l)===wu}function Pc(l){if(!l)return!1;var b=Ko(l);return Fg.indexOf(b)>=0?!0:_u(l)||Eu(l)||Dn(l)}function Tu(l){return dc[Object.prototype.toString.call(l)]|0}function Hg(l,b){var S=b.length;switch(l.type){case Da:case kc:case Lc:case Ni:var j=Lt.allocType(l.type,S);j.set(b),l.data=j;break;case Fa:l.data=tu(b);break;default:g.raise("unsupported texture type, must specify a typed array")}}function Su(l,b){return Lt.allocType(l.type===Fa?Ni:l.type,b)}function ku(l,b){l.type===Fa?(l.data=tu(b),Lt.freeType(b)):l.data=b}function Ug(l,b,S,j,Q,U){for(var V=l.width,ie=l.height,le=l.channels,me=V*ie*le,fe=Su(l,me),xe=0,Ae=0;Ae<ie;++Ae)for(var se=0;se<V;++se)for(var we=0;we<le;++we)fe[xe++]=b[S*se+j*Ae+Q*we+U];ku(l,fe)}function Us(l,b,S,j,Q,U){var V;if(typeof Fr[l]!="undefined"?V=Fr[l]:V=An[l]*$a[b],U&&(V*=6),Q){for(var ie=0,le=S;le>=1;)ie+=V*le*le,le/=2;return ie}else return V*S*j}function Bg(l,b,S,j,Q,U,V){var ie={"don't care":qs,"dont care":qs,nice:zg,fast:Lg},le={repeat:Eg,clamp:zc,mirror:Mg},me={nearest:Cc,linear:Sg},fe=t({mipmap:Ic,"nearest mipmap nearest":Rc,"linear mipmap nearest":du,"nearest mipmap linear":pu,"linear mipmap linear":Ic},me),xe={none:0,browser:mu},Ae={uint8:Da,rgba4:gg,rgb565:yg,"rgb5 a1":xg},se={alpha:yc,luminance:Oi,"luminance alpha":Gs,rgb:Ds,rgba:Yo,rgba4:nu,"rgb5 a1":bc,rgb565:ou},we={};b.ext_srgb&&(se.srgb=_c,se.srgba=Ec),b.oes_texture_float&&(Ae.float32=Ae.float=Ni),b.oes_texture_half_float&&(Ae.float16=Ae["half float"]=Fa),b.webgl_depth_texture&&(t(se,{depth:wc,"depth stencil":$s}),t(Ae,{uint16:kc,uint32:Lc,"depth stencil":bg})),b.webgl_compressed_texture_s3tc&&t(we,{"rgb s3tc dxt1":Mc,"rgba s3tc dxt1":Ac,"rgba s3tc dxt3":Tc,"rgba s3tc dxt5":Sc}),b.webgl_compressed_texture_atc&&t(we,{"rgb atc":au,"rgba atc explicit alpha":iu,"rgba atc interpolated alpha":su}),b.webgl_compressed_texture_pvrtc&&t(we,{"rgb pvrtc 4bppv1":cu,"rgb pvrtc 2bppv1":lu,"rgba pvrtc 4bppv1":fu,"rgba pvrtc 2bppv1":uu}),b.webgl_compressed_texture_etc1&&(we["rgb etc1"]=hu);var N=Array.prototype.slice.call(l.getParameter(vg));Object.keys(we).forEach(function(A){var W=we[A];N.indexOf(W)>=0&&(se[A]=W)});var X=Object.keys(se);S.textureFormats=X;var pe=[];Object.keys(se).forEach(function(A){var W=se[A];pe[W]=A});var Re=[];Object.keys(Ae).forEach(function(A){var W=Ae[A];Re[W]=A});var te=[];Object.keys(me).forEach(function(A){var W=me[A];te[W]=A});var Pe=[];Object.keys(fe).forEach(function(A){var W=fe[A];Pe[W]=A});var ne=[];Object.keys(le).forEach(function(A){var W=le[A];ne[W]=A});var _e=X.reduce(function(A,W){var q=se[W];return q===Oi||q===yc||q===Oi||q===Gs||q===wc||q===$s||b.ext_srgb&&(q===_c||q===Ec)?A[q]=q:q===bc||W.indexOf("rgba")>=0?A[q]=Yo:A[q]=Ds,A},{});function re(){this.internalformat=Yo,this.format=Yo,this.type=Da,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=mu,this.width=0,this.height=0,this.channels=0}function Ee(A,W){A.internalformat=W.internalformat,A.format=W.format,A.type=W.type,A.compressed=W.compressed,A.premultiplyAlpha=W.premultiplyAlpha,A.flipY=W.flipY,A.unpackAlignment=W.unpackAlignment,A.colorSpace=W.colorSpace,A.width=W.width,A.height=W.height,A.channels=W.channels}function We(A,W){if(!(typeof W!="object"||!W)){if("premultiplyAlpha"in W&&(g.type(W.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),A.premultiplyAlpha=W.premultiplyAlpha),"flipY"in W&&(g.type(W.flipY,"boolean","invalid texture flip"),A.flipY=W.flipY),"alignment"in W&&(g.oneOf(W.alignment,[1,2,4,8],"invalid texture unpack alignment"),A.unpackAlignment=W.alignment),"colorSpace"in W&&(g.parameter(W.colorSpace,xe,"invalid colorSpace"),A.colorSpace=xe[W.colorSpace]),"type"in W){var q=W.type;g(b.oes_texture_float||!(q==="float"||q==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),g(b.oes_texture_half_float||!(q==="half float"||q==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),g(b.webgl_depth_texture||!(q==="uint16"||q==="uint32"||q==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),g.parameter(q,Ae,"invalid texture type"),A.type=Ae[q]}var Ne=A.width,ut=A.height,E=A.channels,y=!1;"shape"in W?(g(Array.isArray(W.shape)&&W.shape.length>=2,"shape must be an array"),Ne=W.shape[0],ut=W.shape[1],W.shape.length===3&&(E=W.shape[2],g(E>0&&E<=4,"invalid number of channels"),y=!0),g(Ne>=0&&Ne<=S.maxTextureSize,"invalid width"),g(ut>=0&&ut<=S.maxTextureSize,"invalid height")):("radius"in W&&(Ne=ut=W.radius,g(Ne>=0&&Ne<=S.maxTextureSize,"invalid radius")),"width"in W&&(Ne=W.width,g(Ne>=0&&Ne<=S.maxTextureSize,"invalid width")),"height"in W&&(ut=W.height,g(ut>=0&&ut<=S.maxTextureSize,"invalid height")),"channels"in W&&(E=W.channels,g(E>0&&E<=4,"invalid number of channels"),y=!0)),A.width=Ne|0,A.height=ut|0,A.channels=E|0;var L=!1;if("format"in W){var O=W.format;g(b.webgl_depth_texture||!(O==="depth"||O==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),g.parameter(O,se,"invalid texture format");var F=A.internalformat=se[O];A.format=_e[F],O in Ae&&("type"in W||(A.type=Ae[O])),O in we&&(A.compressed=!0),L=!0}!y&&L?A.channels=An[A.format]:y&&!L?A.channels!==Hs[A.format]&&(A.format=A.internalformat=Hs[A.channels]):L&&y&&g(A.channels===An[A.format],"number of channels inconsistent with specified format")}}function Je(A){l.pixelStorei(Ig,A.flipY),l.pixelStorei(Pg,A.premultiplyAlpha),l.pixelStorei(Og,A.colorSpace),l.pixelStorei(Rg,A.unpackAlignment)}function Te(){re.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function ve(A,W){var q=null;if(Pc(W)?q=W:W&&(g.type(W,"object","invalid pixel data type"),We(A,W),"x"in W&&(A.xOffset=W.x|0),"y"in W&&(A.yOffset=W.y|0),Pc(W.data)&&(q=W.data)),g(!A.compressed||q instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),W.copy){g(!q,"can not specify copy and data field for the same texture");var Ne=Q.viewportWidth,ut=Q.viewportHeight;A.width=A.width||Ne-A.xOffset,A.height=A.height||ut-A.yOffset,A.needsCopy=!0,g(A.xOffset>=0&&A.xOffset<Ne&&A.yOffset>=0&&A.yOffset<ut&&A.width>0&&A.width<=Ne&&A.height>0&&A.height<=ut,"copy texture read out of bounds")}else if(!q)A.width=A.width||1,A.height=A.height||1,A.channels=A.channels||4;else if(e(q))A.channels=A.channels||4,A.data=q,!("type"in W)&&A.type===Da&&(A.type=Tu(q));else if(_u(q))A.channels=A.channels||4,Hg(A,q),A.alignment=1,A.needsFree=!0;else if(Dn(q)){var E=q.data;!Array.isArray(E)&&A.type===Da&&(A.type=Tu(E));var y=q.shape,L=q.stride,O,F,R,z,I,M;y.length===3?(R=y[2],M=L[2]):(g(y.length===2,"invalid ndarray pixel data, must be 2 or 3D"),R=1,M=1),O=y[0],F=y[1],z=L[0],I=L[1],A.alignment=1,A.width=O,A.height=F,A.channels=R,A.format=A.internalformat=Hs[R],A.needsFree=!0,Ug(A,E,z,I,M,q.offset)}else if(Mu(q)||Au(q)||Dg(q))Mu(q)||Au(q)?A.element=q:A.element=q.canvas,A.width=A.element.width,A.height=A.element.height,A.channels=4;else if(Gg(q))A.element=q,A.width=q.width,A.height=q.height,A.channels=4;else if($g(q))A.element=q,A.width=q.naturalWidth,A.height=q.naturalHeight,A.channels=4;else if(qg(q))A.element=q,A.width=q.videoWidth,A.height=q.videoHeight,A.channels=4;else if(Eu(q)){var k=A.width||q[0].length,_=A.height||q.length,P=A.channels;fr(q[0][0])?P=P||q[0][0].length:P=P||1;for(var D=Ps.shape(q),K=1,Z=0;Z<D.length;++Z)K*=D[Z];var Y=Su(A,K);Ps.flatten(q,D,"",Y),ku(A,Y),A.alignment=1,A.width=k,A.height=_,A.channels=P,A.format=A.internalformat=Hs[P],A.needsFree=!0}A.type===Ni?g(S.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):A.type===Fa&&g(S.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ee(A,W,q){var Ne=A.element,ut=A.data,E=A.internalformat,y=A.format,L=A.type,O=A.width,F=A.height;Je(A),Ne?l.texImage2D(W,q,y,y,L,Ne):A.compressed?l.compressedTexImage2D(W,q,E,O,F,0,ut):A.needsCopy?(j(),l.copyTexImage2D(W,q,y,A.xOffset,A.yOffset,O,F,0)):l.texImage2D(W,q,y,O,F,0,y,L,ut||null)}function Qe(A,W,q,Ne,ut){var E=A.element,y=A.data,L=A.internalformat,O=A.format,F=A.type,R=A.width,z=A.height;Je(A),E?l.texSubImage2D(W,ut,q,Ne,O,F,E):A.compressed?l.compressedTexSubImage2D(W,ut,q,Ne,L,R,z,y):A.needsCopy?(j(),l.copyTexSubImage2D(W,ut,q,Ne,A.xOffset,A.yOffset,R,z)):l.texSubImage2D(W,ut,q,Ne,R,z,O,F,y)}var ot=[];function Ge(){return ot.pop()||new Te}function ft(A){A.needsFree&&Lt.freeType(A.data),Te.call(A),ot.push(A)}function tt(){re.call(this),this.genMipmaps=!1,this.mipmapHint=qs,this.mipmask=0,this.images=Array(16)}function ct(A,W,q){var Ne=A.images[0]=Ge();A.mipmask=1,Ne.width=A.width=W,Ne.height=A.height=q,Ne.channels=A.channels=4}function Tt(A,W){var q=null;if(Pc(W))q=A.images[0]=Ge(),Ee(q,A),ve(q,W),A.mipmask=1;else if(We(A,W),Array.isArray(W.mipmap))for(var Ne=W.mipmap,ut=0;ut<Ne.length;++ut)q=A.images[ut]=Ge(),Ee(q,A),q.width>>=ut,q.height>>=ut,ve(q,Ne[ut]),A.mipmask|=1<<ut;else q=A.images[0]=Ge(),Ee(q,A),ve(q,W),A.mipmask=1;Ee(A,A.images[0]),A.compressed&&(A.internalformat===Mc||A.internalformat===Ac||A.internalformat===Tc||A.internalformat===Sc)&&g(A.width%4===0&&A.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function yr(A,W){for(var q=A.images,Ne=0;Ne<q.length;++Ne){if(!q[Ne])return;ee(q[Ne],W,Ne)}}var Sr=[];function vt(){var A=Sr.pop()||new tt;re.call(A),A.mipmask=0;for(var W=0;W<16;++W)A.images[W]=null;return A}function Er(A){for(var W=A.images,q=0;q<W.length;++q)W[q]&&ft(W[q]),W[q]=null;Sr.push(A)}function Vt(){this.minFilter=Cc,this.magFilter=Cc,this.wrapS=zc,this.wrapT=zc,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=qs}function br(A,W){if("min"in W){var q=W.min;g.parameter(q,fe),A.minFilter=fe[q],Ng.indexOf(A.minFilter)>=0&&!("faces"in W)&&(A.genMipmaps=!0)}if("mag"in W){var Ne=W.mag;g.parameter(Ne,me),A.magFilter=me[Ne]}var ut=A.wrapS,E=A.wrapT;if("wrap"in W){var y=W.wrap;typeof y=="string"?(g.parameter(y,le),ut=E=le[y]):Array.isArray(y)&&(g.parameter(y[0],le),g.parameter(y[1],le),ut=le[y[0]],E=le[y[1]])}else{if("wrapS"in W){var L=W.wrapS;g.parameter(L,le),ut=le[L]}if("wrapT"in W){var O=W.wrapT;g.parameter(O,le),E=le[O]}}if(A.wrapS=ut,A.wrapT=E,"anisotropic"in W){var F=W.anisotropic;g(typeof F=="number"&&F>=1&&F<=S.maxAnisotropic,"aniso samples must be between 1 and "),A.anisotropic=W.anisotropic}if("mipmap"in W){var R=!1;switch(typeof W.mipmap){case"string":g.parameter(W.mipmap,ie,"invalid mipmap hint"),A.mipmapHint=ie[W.mipmap],A.genMipmaps=!0,R=!0;break;case"boolean":R=A.genMipmaps=W.mipmap;break;case"object":g(Array.isArray(W.mipmap),"invalid mipmap type"),A.genMipmaps=!1,R=!0;break;default:g.raise("invalid mipmap type")}R&&!("min"in W)&&(A.minFilter=Rc)}}function Mr(A,W){l.texParameteri(W,Tg,A.minFilter),l.texParameteri(W,Ag,A.magFilter),l.texParameteri(W,wg,A.wrapS),l.texParameteri(W,_g,A.wrapT),b.ext_texture_filter_anisotropic&&l.texParameteri(W,Cg,A.anisotropic),A.genMipmaps&&(l.hint(kg,A.mipmapHint),l.generateMipmap(W))}var Ar=0,Rr={},Dr=S.maxTextureUnits,ur=Array(Dr).map(function(){return null});function at(A){re.call(this),this.mipmask=0,this.internalformat=Yo,this.id=Ar++,this.refCount=1,this.target=A,this.texture=l.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Vt,V.profile&&(this.stats={size:0})}function Gr(A){l.activeTexture(Fi),l.bindTexture(A.target,A.texture)}function Ct(){var A=ur[0];A?l.bindTexture(A.target,A.texture):l.bindTexture(Kn,null)}function Xe(A){var W=A.texture;g(W,"must not double destroy texture");var q=A.unit,Ne=A.target;q>=0&&(l.activeTexture(Fi+q),l.bindTexture(Ne,null),ur[q]=null),l.deleteTexture(W),A.texture=null,A.params=null,A.pixels=null,A.refCount=0,delete Rr[A.id],U.textureCount--}t(at.prototype,{bind:function(){var A=this;A.bindCount+=1;var W=A.unit;if(W<0){for(var q=0;q<Dr;++q){var Ne=ur[q];if(Ne){if(Ne.bindCount>0)continue;Ne.unit=-1}ur[q]=A,W=q;break}W>=Dr&&g.raise("insufficient number of texture units"),V.profile&&U.maxTextureUnits<W+1&&(U.maxTextureUnits=W+1),A.unit=W,l.activeTexture(Fi+W),l.bindTexture(A.target,A.texture)}return W},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Xe(this)}});function ht(A,W){var q=new at(Kn);Rr[q.id]=q,U.textureCount++;function Ne(y,L){var O=q.texInfo;Vt.call(O);var F=vt();return typeof y=="number"?typeof L=="number"?ct(F,y|0,L|0):ct(F,y|0,y|0):y?(g.type(y,"object","invalid arguments to regl.texture"),br(O,y),Tt(F,y)):ct(F,1,1),O.genMipmaps&&(F.mipmask=(F.width<<1)-1),q.mipmask=F.mipmask,Ee(q,F),g.texture2D(O,F,S),q.internalformat=F.internalformat,Ne.width=F.width,Ne.height=F.height,Gr(q),yr(F,Kn),Mr(O,Kn),Ct(),Er(F),V.profile&&(q.stats.size=Us(q.internalformat,q.type,F.width,F.height,O.genMipmaps,!1)),Ne.format=pe[q.internalformat],Ne.type=Re[q.type],Ne.mag=te[O.magFilter],Ne.min=Pe[O.minFilter],Ne.wrapS=ne[O.wrapS],Ne.wrapT=ne[O.wrapT],Ne}function ut(y,L,O,F){g(!!y,"must specify image data");var R=L|0,z=O|0,I=F|0,M=Ge();return Ee(M,q),M.width=0,M.height=0,ve(M,y),M.width=M.width||(q.width>>I)-R,M.height=M.height||(q.height>>I)-z,g(q.type===M.type&&q.format===M.format&&q.internalformat===M.internalformat,"incompatible format for texture.subimage"),g(R>=0&&z>=0&&R+M.width<=q.width&&z+M.height<=q.height,"texture.subimage write out of bounds"),g(q.mipmask&1<<I,"missing mipmap data"),g(M.data||M.element||M.needsCopy,"missing image data"),Gr(q),Qe(M,Kn,R,z,I),Ct(),ft(M),Ne}function E(y,L){var O=y|0,F=L|0||O;if(O===q.width&&F===q.height)return Ne;Ne.width=q.width=O,Ne.height=q.height=F,Gr(q);for(var R=0;q.mipmask>>R;++R){var z=O>>R,I=F>>R;if(!z||!I)break;l.texImage2D(Kn,R,q.format,z,I,0,q.format,q.type,null)}return Ct(),V.profile&&(q.stats.size=Us(q.internalformat,q.type,O,F,!1,!1)),Ne}return Ne(A,W),Ne.subimage=ut,Ne.resize=E,Ne._reglType="texture2d",Ne._texture=q,V.profile&&(Ne.stats=q.stats),Ne.destroy=function(){q.decRef()},Ne}function wt(A,W,q,Ne,ut,E){var y=new at(xc);Rr[y.id]=y,U.cubeCount++;var L=new Array(6);function O(z,I,M,k,_,P){var D,K=y.texInfo;for(Vt.call(K),D=0;D<6;++D)L[D]=vt();if(typeof z=="number"||!z){var Z=z|0||1;for(D=0;D<6;++D)ct(L[D],Z,Z)}else if(typeof z=="object")if(I)Tt(L[0],z),Tt(L[1],I),Tt(L[2],M),Tt(L[3],k),Tt(L[4],_),Tt(L[5],P);else if(br(K,z),We(y,z),"faces"in z){var Y=z.faces;for(g(Array.isArray(Y)&&Y.length===6,"cube faces must be a length 6 array"),D=0;D<6;++D)g(typeof Y[D]=="object"&&!!Y[D],"invalid input for cube map face"),Ee(L[D],y),Tt(L[D],Y[D])}else for(D=0;D<6;++D)Tt(L[D],z);else g.raise("invalid arguments to cube map");for(Ee(y,L[0]),S.npotTextureCube||g(ru(y.width)&&ru(y.height),"your browser does not support non power or two texture dimensions"),K.genMipmaps?y.mipmask=(L[0].width<<1)-1:y.mipmask=L[0].mipmask,g.textureCube(y,K,L,S),y.internalformat=L[0].internalformat,O.width=L[0].width,O.height=L[0].height,Gr(y),D=0;D<6;++D)yr(L[D],Fs+D);for(Mr(K,xc),Ct(),V.profile&&(y.stats.size=Us(y.internalformat,y.type,O.width,O.height,K.genMipmaps,!0)),O.format=pe[y.internalformat],O.type=Re[y.type],O.mag=te[K.magFilter],O.min=Pe[K.minFilter],O.wrapS=ne[K.wrapS],O.wrapT=ne[K.wrapT],D=0;D<6;++D)Er(L[D]);return O}function F(z,I,M,k,_){g(!!I,"must specify image data"),g(typeof z=="number"&&z===(z|0)&&z>=0&&z<6,"invalid face");var P=M|0,D=k|0,K=_|0,Z=Ge();return Ee(Z,y),Z.width=0,Z.height=0,ve(Z,I),Z.width=Z.width||(y.width>>K)-P,Z.height=Z.height||(y.height>>K)-D,g(y.type===Z.type&&y.format===Z.format&&y.internalformat===Z.internalformat,"incompatible format for texture.subimage"),g(P>=0&&D>=0&&P+Z.width<=y.width&&D+Z.height<=y.height,"texture.subimage write out of bounds"),g(y.mipmask&1<<K,"missing mipmap data"),g(Z.data||Z.element||Z.needsCopy,"missing image data"),Gr(y),Qe(Z,Fs+z,P,D,K),Ct(),ft(Z),O}function R(z){var I=z|0;if(I!==y.width){O.width=y.width=I,O.height=y.height=I,Gr(y);for(var M=0;M<6;++M)for(var k=0;y.mipmask>>k;++k)l.texImage2D(Fs+M,k,y.format,I>>k,I>>k,0,y.format,y.type,null);return Ct(),V.profile&&(y.stats.size=Us(y.internalformat,y.type,O.width,O.height,!1,!0)),O}}return O(A,W,q,Ne,ut,E),O.subimage=F,O.resize=R,O._reglType="textureCube",O._texture=y,V.profile&&(O.stats=y.stats),O.destroy=function(){y.decRef()},O}function hr(){for(var A=0;A<Dr;++A)l.activeTexture(Fi+A),l.bindTexture(Kn,null),ur[A]=null;pn(Rr).forEach(Xe),U.cubeCount=0,U.textureCount=0}V.profile&&(U.getTotalTextureSize=function(){var A=0;return Object.keys(Rr).forEach(function(W){A+=Rr[W].stats.size}),A});function Zn(){for(var A=0;A<Dr;++A){var W=ur[A];W&&(W.bindCount=0,W.unit=-1,ur[A]=null)}pn(Rr).forEach(function(q){q.texture=l.createTexture(),l.bindTexture(q.target,q.texture);for(var Ne=0;Ne<32;++Ne)if(q.mipmask&1<<Ne)if(q.target===Kn)l.texImage2D(Kn,Ne,q.internalformat,q.width>>Ne,q.height>>Ne,0,q.internalformat,q.type,null);else for(var ut=0;ut<6;++ut)l.texImage2D(Fs+ut,Ne,q.internalformat,q.width>>Ne,q.height>>Ne,0,q.internalformat,q.type,null);Mr(q.texInfo,q.target)})}function na(){for(var A=0;A<Dr;++A){var W=ur[A];W&&(W.bindCount=0,W.unit=-1,ur[A]=null),l.activeTexture(Fi+A),l.bindTexture(Kn,null),l.bindTexture(xc,null)}}return{create2D:ht,createCube:wt,clear:hr,getTexture:function(A){return null},restore:Zn,refresh:na}}var wo=36161,Bs=32854,Lu=32855,zu=36194,Cu=33189,Ru=36168,Iu=34041,Pu=35907,Ou=34836,Nu=34842,Fu=34843,Gn=[];Gn[Bs]=2,Gn[Lu]=2,Gn[zu]=2,Gn[Cu]=2,Gn[Ru]=1,Gn[Iu]=4,Gn[Pu]=4,Gn[Ou]=16,Gn[Nu]=8,Gn[Fu]=6;function Du(l,b,S){return Gn[l]*b*S}var jg=function(l,b,S,j,Q){var U={rgba4:Bs,rgb565:zu,"rgb5 a1":Lu,depth:Cu,stencil:Ru,"depth stencil":Iu};b.ext_srgb&&(U.srgba=Pu),b.ext_color_buffer_half_float&&(U.rgba16f=Nu,U.rgb16f=Fu),b.webgl_color_buffer_float&&(U.rgba32f=Ou);var V=[];Object.keys(U).forEach(function(se){var we=U[se];V[we]=se});var ie=0,le={};function me(se){this.id=ie++,this.refCount=1,this.renderbuffer=se,this.format=Bs,this.width=0,this.height=0,Q.profile&&(this.stats={size:0})}me.prototype.decRef=function(){--this.refCount<=0&&fe(this)};function fe(se){var we=se.renderbuffer;g(we,"must not double destroy renderbuffer"),l.bindRenderbuffer(wo,null),l.deleteRenderbuffer(we),se.renderbuffer=null,se.refCount=0,delete le[se.id],j.renderbufferCount--}function xe(se,we){var N=new me(l.createRenderbuffer());le[N.id]=N,j.renderbufferCount++;function X(Re,te){var Pe=0,ne=0,_e=Bs;if(typeof Re=="object"&&Re){var re=Re;if("shape"in re){var Ee=re.shape;g(Array.isArray(Ee)&&Ee.length>=2,"invalid renderbuffer shape"),Pe=Ee[0]|0,ne=Ee[1]|0}else"radius"in re&&(Pe=ne=re.radius|0),"width"in re&&(Pe=re.width|0),"height"in re&&(ne=re.height|0);"format"in re&&(g.parameter(re.format,U,"invalid renderbuffer format"),_e=U[re.format])}else typeof Re=="number"?(Pe=Re|0,typeof te=="number"?ne=te|0:ne=Pe):Re?g.raise("invalid arguments to renderbuffer constructor"):Pe=ne=1;if(g(Pe>0&&ne>0&&Pe<=S.maxRenderbufferSize&&ne<=S.maxRenderbufferSize,"invalid renderbuffer size"),!(Pe===N.width&&ne===N.height&&_e===N.format))return X.width=N.width=Pe,X.height=N.height=ne,N.format=_e,l.bindRenderbuffer(wo,N.renderbuffer),l.renderbufferStorage(wo,_e,Pe,ne),g(l.getError()===0,"invalid render buffer format"),Q.profile&&(N.stats.size=Du(N.format,N.width,N.height)),X.format=V[N.format],X}function pe(Re,te){var Pe=Re|0,ne=te|0||Pe;return Pe===N.width&&ne===N.height||(g(Pe>0&&ne>0&&Pe<=S.maxRenderbufferSize&&ne<=S.maxRenderbufferSize,"invalid renderbuffer size"),X.width=N.width=Pe,X.height=N.height=ne,l.bindRenderbuffer(wo,N.renderbuffer),l.renderbufferStorage(wo,N.format,Pe,ne),g(l.getError()===0,"invalid render buffer format"),Q.profile&&(N.stats.size=Du(N.format,N.width,N.height))),X}return X(se,we),X.resize=pe,X._reglType="renderbuffer",X._renderbuffer=N,Q.profile&&(X.stats=N.stats),X.destroy=function(){N.decRef()},X}Q.profile&&(j.getTotalRenderbufferSize=function(){var se=0;return Object.keys(le).forEach(function(we){se+=le[we].stats.size}),se});function Ae(){pn(le).forEach(function(se){se.renderbuffer=l.createRenderbuffer(),l.bindRenderbuffer(wo,se.renderbuffer),l.renderbufferStorage(wo,se.format,se.width,se.height)}),l.bindRenderbuffer(wo,null)}return{create:xe,clear:function(){pn(le).forEach(fe)},restore:Ae}},so=36160,Oc=36161,Qo=3553,js=34069,Gu=36064,$u=36096,qu=36128,Hu=33306,Uu=36053,Wg=36054,Vg=36055,Xg=36057,Yg=36061,Kg=36193,Qg=5121,Zg=5126,Bu=6407,ju=6408,Jg=6402,ex=[Bu,ju],Nc=[];Nc[ju]=4,Nc[Bu]=3;var Ws=[];Ws[Qg]=1,Ws[Zg]=4,Ws[Kg]=2;var tx=32854,rx=32855,nx=36194,ox=33189,ax=36168,Wu=34041,ix=35907,sx=34836,cx=34842,lx=34843,fx=[tx,rx,nx,ix,cx,lx,sx],qa={};qa[Uu]="complete",qa[Wg]="incomplete attachment",qa[Xg]="incomplete dimensions",qa[Vg]="incomplete, missing attachment",qa[Yg]="unsupported";function ux(l,b,S,j,Q,U){var V={cur:null,next:null,dirty:!1,setFBO:null},ie=["rgba"],le=["rgba4","rgb565","rgb5 a1"];b.ext_srgb&&le.push("srgba"),b.ext_color_buffer_half_float&&le.push("rgba16f","rgb16f"),b.webgl_color_buffer_float&&le.push("rgba32f");var me=["uint8"];b.oes_texture_half_float&&me.push("half float","float16"),b.oes_texture_float&&me.push("float","float32");function fe(Te,ve,ee){this.target=Te,this.texture=ve,this.renderbuffer=ee;var Qe=0,ot=0;ve?(Qe=ve.width,ot=ve.height):ee&&(Qe=ee.width,ot=ee.height),this.width=Qe,this.height=ot}function xe(Te){Te&&(Te.texture&&Te.texture._texture.decRef(),Te.renderbuffer&&Te.renderbuffer._renderbuffer.decRef())}function Ae(Te,ve,ee){if(Te)if(Te.texture){var Qe=Te.texture._texture,ot=Math.max(1,Qe.width),Ge=Math.max(1,Qe.height);g(ot===ve&&Ge===ee,"inconsistent width/height for supplied texture"),Qe.refCount+=1}else{var ft=Te.renderbuffer._renderbuffer;g(ft.width===ve&&ft.height===ee,"inconsistent width/height for renderbuffer"),ft.refCount+=1}}function se(Te,ve){ve&&(ve.texture?l.framebufferTexture2D(so,Te,ve.target,ve.texture._texture.texture,0):l.framebufferRenderbuffer(so,Te,Oc,ve.renderbuffer._renderbuffer.renderbuffer))}function we(Te){var ve=Qo,ee=null,Qe=null,ot=Te;typeof Te=="object"&&(ot=Te.data,"target"in Te&&(ve=Te.target|0)),g.type(ot,"function","invalid attachment data");var Ge=ot._reglType;return Ge==="texture2d"?(ee=ot,g(ve===Qo)):Ge==="textureCube"?(ee=ot,g(ve>=js&&ve<js+6,"invalid cube map target")):Ge==="renderbuffer"?(Qe=ot,ve=Oc):g.raise("invalid regl object for attachment"),new fe(ve,ee,Qe)}function N(Te,ve,ee,Qe,ot){if(ee){var Ge=j.create2D({width:Te,height:ve,format:Qe,type:ot});return Ge._texture.refCount=0,new fe(Qo,Ge,null)}else{var ft=Q.create({width:Te,height:ve,format:Qe});return ft._renderbuffer.refCount=0,new fe(Oc,null,ft)}}function X(Te){return Te&&(Te.texture||Te.renderbuffer)}function pe(Te,ve,ee){Te&&(Te.texture?Te.texture.resize(ve,ee):Te.renderbuffer&&Te.renderbuffer.resize(ve,ee),Te.width=ve,Te.height=ee)}var Re=0,te={};function Pe(){this.id=Re++,te[this.id]=this,this.framebuffer=l.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ne(Te){Te.colorAttachments.forEach(xe),xe(Te.depthAttachment),xe(Te.stencilAttachment),xe(Te.depthStencilAttachment)}function _e(Te){var ve=Te.framebuffer;g(ve,"must not double destroy framebuffer"),l.deleteFramebuffer(ve),Te.framebuffer=null,U.framebufferCount--,delete te[Te.id]}function re(Te){var ve;l.bindFramebuffer(so,Te.framebuffer);var ee=Te.colorAttachments;for(ve=0;ve<ee.length;++ve)se(Gu+ve,ee[ve]);for(ve=ee.length;ve<S.maxColorAttachments;++ve)l.framebufferTexture2D(so,Gu+ve,Qo,null,0);l.framebufferTexture2D(so,Hu,Qo,null,0),l.framebufferTexture2D(so,$u,Qo,null,0),l.framebufferTexture2D(so,qu,Qo,null,0),se($u,Te.depthAttachment),se(qu,Te.stencilAttachment),se(Hu,Te.depthStencilAttachment);var Qe=l.checkFramebufferStatus(so);!l.isContextLost()&&Qe!==Uu&&g.raise("framebuffer configuration not supported, status = "+qa[Qe]),l.bindFramebuffer(so,V.next?V.next.framebuffer:null),V.cur=V.next,l.getError()}function Ee(Te,ve){var ee=new Pe;U.framebufferCount++;function Qe(Ge,ft){var tt;g(V.next!==ee,"can not update framebuffer which is currently in use");var ct=0,Tt=0,yr=!0,Sr=!0,vt=null,Er=!0,Vt="rgba",br="uint8",Mr=1,Ar=null,Rr=null,Dr=null,ur=!1;if(typeof Ge=="number")ct=Ge|0,Tt=ft|0||ct;else if(!Ge)ct=Tt=1;else{g.type(Ge,"object","invalid arguments for framebuffer");var at=Ge;if("shape"in at){var Gr=at.shape;g(Array.isArray(Gr)&&Gr.length>=2,"invalid shape for framebuffer"),ct=Gr[0],Tt=Gr[1]}else"radius"in at&&(ct=Tt=at.radius),"width"in at&&(ct=at.width),"height"in at&&(Tt=at.height);("color"in at||"colors"in at)&&(vt=at.color||at.colors,Array.isArray(vt)&&g(vt.length===1||b.webgl_draw_buffers,"multiple render targets not supported")),vt||("colorCount"in at&&(Mr=at.colorCount|0,g(Mr>0,"invalid color buffer count")),"colorTexture"in at&&(Er=!!at.colorTexture,Vt="rgba4"),"colorType"in at&&(br=at.colorType,Er?(g(b.oes_texture_float||!(br==="float"||br==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),g(b.oes_texture_half_float||!(br==="half float"||br==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):br==="half float"||br==="float16"?(g(b.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Vt="rgba16f"):(br==="float"||br==="float32")&&(g(b.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Vt="rgba32f"),g.oneOf(br,me,"invalid color type")),"colorFormat"in at&&(Vt=at.colorFormat,ie.indexOf(Vt)>=0?Er=!0:le.indexOf(Vt)>=0?Er=!1:Er?g.oneOf(at.colorFormat,ie,"invalid color format for texture"):g.oneOf(at.colorFormat,le,"invalid color format for renderbuffer"))),("depthTexture"in at||"depthStencilTexture"in at)&&(ur=!!(at.depthTexture||at.depthStencilTexture),g(!ur||b.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in at&&(typeof at.depth=="boolean"?yr=at.depth:(Ar=at.depth,Sr=!1)),"stencil"in at&&(typeof at.stencil=="boolean"?Sr=at.stencil:(Rr=at.stencil,yr=!1)),"depthStencil"in at&&(typeof at.depthStencil=="boolean"?yr=Sr=at.depthStencil:(Dr=at.depthStencil,yr=!1,Sr=!1))}var Ct=null,Xe=null,ht=null,wt=null;if(Array.isArray(vt))Ct=vt.map(we);else if(vt)Ct=[we(vt)];else for(Ct=new Array(Mr),tt=0;tt<Mr;++tt)Ct[tt]=N(ct,Tt,Er,Vt,br);g(b.webgl_draw_buffers||Ct.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),g(Ct.length<=S.maxColorAttachments,"too many color attachments, not supported"),ct=ct||Ct[0].width,Tt=Tt||Ct[0].height,Ar?Xe=we(Ar):yr&&!Sr&&(Xe=N(ct,Tt,ur,"depth","uint32")),Rr?ht=we(Rr):Sr&&!yr&&(ht=N(ct,Tt,!1,"stencil","uint8")),Dr?wt=we(Dr):!Ar&&!Rr&&Sr&&yr&&(wt=N(ct,Tt,ur,"depth stencil","depth stencil")),g(!!Ar+!!Rr+!!Dr<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var hr=null;for(tt=0;tt<Ct.length;++tt)if(Ae(Ct[tt],ct,Tt),g(!Ct[tt]||Ct[tt].texture&&ex.indexOf(Ct[tt].texture._texture.format)>=0||Ct[tt].renderbuffer&&fx.indexOf(Ct[tt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+tt+" is invalid"),Ct[tt]&&Ct[tt].texture){var Zn=Nc[Ct[tt].texture._texture.format]*Ws[Ct[tt].texture._texture.type];hr===null?hr=Zn:g(hr===Zn,"all color attachments much have the same number of bits per pixel.")}return Ae(Xe,ct,Tt),g(!Xe||Xe.texture&&Xe.texture._texture.format===Jg||Xe.renderbuffer&&Xe.renderbuffer._renderbuffer.format===ox,"invalid depth attachment for framebuffer object"),Ae(ht,ct,Tt),g(!ht||ht.renderbuffer&&ht.renderbuffer._renderbuffer.format===ax,"invalid stencil attachment for framebuffer object"),Ae(wt,ct,Tt),g(!wt||wt.texture&&wt.texture._texture.format===Wu||wt.renderbuffer&&wt.renderbuffer._renderbuffer.format===Wu,"invalid depth-stencil attachment for framebuffer object"),ne(ee),ee.width=ct,ee.height=Tt,ee.colorAttachments=Ct,ee.depthAttachment=Xe,ee.stencilAttachment=ht,ee.depthStencilAttachment=wt,Qe.color=Ct.map(X),Qe.depth=X(Xe),Qe.stencil=X(ht),Qe.depthStencil=X(wt),Qe.width=ee.width,Qe.height=ee.height,re(ee),Qe}function ot(Ge,ft){g(V.next!==ee,"can not resize a framebuffer which is currently in use");var tt=Math.max(Ge|0,1),ct=Math.max(ft|0||tt,1);if(tt===ee.width&&ct===ee.height)return Qe;for(var Tt=ee.colorAttachments,yr=0;yr<Tt.length;++yr)pe(Tt[yr],tt,ct);return pe(ee.depthAttachment,tt,ct),pe(ee.stencilAttachment,tt,ct),pe(ee.depthStencilAttachment,tt,ct),ee.width=Qe.width=tt,ee.height=Qe.height=ct,re(ee),Qe}return Qe(Te,ve),t(Qe,{resize:ot,_reglType:"framebuffer",_framebuffer:ee,destroy:function(){_e(ee),ne(ee)},use:function(Ge){V.setFBO({framebuffer:Qe},Ge)}})}function We(Te){var ve=Array(6);function ee(ot){var Ge;g(ve.indexOf(V.next)<0,"can not update framebuffer which is currently in use");var ft={color:null},tt=0,ct=null,Tt="rgba",yr="uint8",Sr=1;if(typeof ot=="number")tt=ot|0;else if(!ot)tt=1;else{g.type(ot,"object","invalid arguments for framebuffer");var vt=ot;if("shape"in vt){var Er=vt.shape;g(Array.isArray(Er)&&Er.length>=2,"invalid shape for framebuffer"),g(Er[0]===Er[1],"cube framebuffer must be square"),tt=Er[0]}else"radius"in vt&&(tt=vt.radius|0),"width"in vt?(tt=vt.width|0,"height"in vt&&g(vt.height===tt,"must be square")):"height"in vt&&(tt=vt.height|0);("color"in vt||"colors"in vt)&&(ct=vt.color||vt.colors,Array.isArray(ct)&&g(ct.length===1||b.webgl_draw_buffers,"multiple render targets not supported")),ct||("colorCount"in vt&&(Sr=vt.colorCount|0,g(Sr>0,"invalid color buffer count")),"colorType"in vt&&(g.oneOf(vt.colorType,me,"invalid color type"),yr=vt.colorType),"colorFormat"in vt&&(Tt=vt.colorFormat,g.oneOf(vt.colorFormat,ie,"invalid color format for texture"))),"depth"in vt&&(ft.depth=vt.depth),"stencil"in vt&&(ft.stencil=vt.stencil),"depthStencil"in vt&&(ft.depthStencil=vt.depthStencil)}var Vt;if(ct)if(Array.isArray(ct))for(Vt=[],Ge=0;Ge<ct.length;++Ge)Vt[Ge]=ct[Ge];else Vt=[ct];else{Vt=Array(Sr);var br={radius:tt,format:Tt,type:yr};for(Ge=0;Ge<Sr;++Ge)Vt[Ge]=j.createCube(br)}for(ft.color=Array(Vt.length),Ge=0;Ge<Vt.length;++Ge){var Mr=Vt[Ge];g(typeof Mr=="function"&&Mr._reglType==="textureCube","invalid cube map"),tt=tt||Mr.width,g(Mr.width===tt&&Mr.height===tt,"invalid cube map shape"),ft.color[Ge]={target:js,data:Vt[Ge]}}for(Ge=0;Ge<6;++Ge){for(var Ar=0;Ar<Vt.length;++Ar)ft.color[Ar].target=js+Ge;Ge>0&&(ft.depth=ve[0].depth,ft.stencil=ve[0].stencil,ft.depthStencil=ve[0].depthStencil),ve[Ge]?ve[Ge](ft):ve[Ge]=Ee(ft)}return t(ee,{width:tt,height:tt,color:Vt})}function Qe(ot){var Ge,ft=ot|0;if(g(ft>0&&ft<=S.maxCubeMapSize,"invalid radius for cube fbo"),ft===ee.width)return ee;var tt=ee.color;for(Ge=0;Ge<tt.length;++Ge)tt[Ge].resize(ft);for(Ge=0;Ge<6;++Ge)ve[Ge].resize(ft);return ee.width=ee.height=ft,ee}return ee(Te),t(ee,{faces:ve,resize:Qe,_reglType:"framebufferCube",destroy:function(){ve.forEach(function(ot){ot.destroy()})}})}function Je(){V.cur=null,V.next=null,V.dirty=!0,pn(te).forEach(function(Te){Te.framebuffer=l.createFramebuffer(),re(Te)})}return t(V,{getFramebuffer:function(Te){if(typeof Te=="function"&&Te._reglType==="framebuffer"){var ve=Te._framebuffer;if(ve instanceof Pe)return ve}return null},create:Ee,createCube:We,clear:function(){pn(te).forEach(_e)},restore:Je})}var hx=5126,Vu=34962;function Fc(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=hx,this.offset=0,this.stride=0,this.divisor=0}function dx(l,b,S,j,Q){for(var U=S.maxAttributes,V=new Array(U),ie=0;ie<U;++ie)V[ie]=new Fc;var le=0,me={},fe={Record:Fc,scope:{},state:V,currentVAO:null,targetVAO:null,restore:Ae()?te:function(){},createVAO:Pe,getVAO:we,destroyBuffer:xe,setVAO:Ae()?N:X,clear:Ae()?pe:function(){}};function xe(ne){for(var _e=0;_e<V.length;++_e){var re=V[_e];re.buffer===ne&&(l.disableVertexAttribArray(_e),re.buffer=null)}}function Ae(){return b.oes_vertex_array_object}function se(){return b.angle_instanced_arrays}function we(ne){return typeof ne=="function"&&ne._vao?ne._vao:null}function N(ne){if(ne!==fe.currentVAO){var _e=Ae();ne?_e.bindVertexArrayOES(ne.vao):_e.bindVertexArrayOES(null),fe.currentVAO=ne}}function X(ne){if(ne!==fe.currentVAO){if(ne)ne.bindAttrs();else for(var _e=se(),re=0;re<V.length;++re){var Ee=V[re];Ee.buffer?(l.enableVertexAttribArray(re),l.vertexAttribPointer(re,Ee.size,Ee.type,Ee.normalized,Ee.stride,Ee.offfset),_e&&Ee.divisor&&_e.vertexAttribDivisorANGLE(re,Ee.divisor)):(l.disableVertexAttribArray(re),l.vertexAttrib4f(re,Ee.x,Ee.y,Ee.z,Ee.w))}fe.currentVAO=ne}}function pe(){pn(me).forEach(function(ne){ne.destroy()})}function Re(){this.id=++le,this.attributes=[];var ne=Ae();ne?this.vao=ne.createVertexArrayOES():this.vao=null,me[this.id]=this,this.buffers=[]}Re.prototype.bindAttrs=function(){for(var ne=se(),_e=this.attributes,re=0;re<_e.length;++re){var Ee=_e[re];Ee.buffer?(l.enableVertexAttribArray(re),l.bindBuffer(Vu,Ee.buffer.buffer),l.vertexAttribPointer(re,Ee.size,Ee.type,Ee.normalized,Ee.stride,Ee.offset),ne&&Ee.divisor&&ne.vertexAttribDivisorANGLE(re,Ee.divisor)):(l.disableVertexAttribArray(re),l.vertexAttrib4f(re,Ee.x,Ee.y,Ee.z,Ee.w))}for(var We=_e.length;We<U;++We)l.disableVertexAttribArray(We)},Re.prototype.refresh=function(){var ne=Ae();ne&&(ne.bindVertexArrayOES(this.vao),this.bindAttrs(),fe.currentVAO=this)},Re.prototype.destroy=function(){if(this.vao){var ne=Ae();this===fe.currentVAO&&(fe.currentVAO=null,ne.bindVertexArrayOES(null)),ne.deleteVertexArrayOES(this.vao),this.vao=null}me[this.id]&&(delete me[this.id],j.vaoCount-=1)};function te(){var ne=Ae();ne&&pn(me).forEach(function(_e){_e.refresh()})}function Pe(ne){var _e=new Re;j.vaoCount+=1;function re(Ee){g(Array.isArray(Ee),"arguments to vertex array constructor must be an array"),g(Ee.length<U,"too many attributes"),g(Ee.length>0,"must specify at least one attribute");var We={},Je=_e.attributes;Je.length=Ee.length;for(var Te=0;Te<Ee.length;++Te){var ve=Ee[Te],ee=Je[Te]=new Fc,Qe=ve.data||ve;if(Array.isArray(Qe)||e(Qe)||Dn(Qe)){var ot;_e.buffers[Te]&&(ot=_e.buffers[Te],e(Qe)&&ot._buffer.byteLength>=Qe.byteLength?ot.subdata(Qe):(ot.destroy(),_e.buffers[Te]=null)),_e.buffers[Te]||(ot=_e.buffers[Te]=Q.create(ve,Vu,!1,!0)),ee.buffer=Q.getBuffer(ot),ee.size=ee.buffer.dimension|0,ee.normalized=!1,ee.type=ee.buffer.dtype,ee.offset=0,ee.stride=0,ee.divisor=0,ee.state=1,We[Te]=1}else Q.getBuffer(ve)?(ee.buffer=Q.getBuffer(ve),ee.size=ee.buffer.dimension|0,ee.normalized=!1,ee.type=ee.buffer.dtype,ee.offset=0,ee.stride=0,ee.divisor=0,ee.state=1):Q.getBuffer(ve.buffer)?(ee.buffer=Q.getBuffer(ve.buffer),ee.size=(+ve.size||ee.buffer.dimension)|0,ee.normalized=!!ve.normalized||!1,"type"in ve?(g.parameter(ve.type,Vo,"invalid buffer type"),ee.type=Vo[ve.type]):ee.type=ee.buffer.dtype,ee.offset=(ve.offset||0)|0,ee.stride=(ve.stride||0)|0,ee.divisor=(ve.divisor||0)|0,ee.state=1,g(ee.size>=1&&ee.size<=4,"size must be between 1 and 4"),g(ee.offset>=0,"invalid offset"),g(ee.stride>=0&&ee.stride<=255,"stride must be between 0 and 255"),g(ee.divisor>=0,"divisor must be positive"),g(!ee.divisor||!!b.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in ve?(g(Te>0,"first attribute must not be a constant"),ee.x=+ve.x||0,ee.y=+ve.y||0,ee.z=+ve.z||0,ee.w=+ve.w||0,ee.state=2):g(!1,"invalid attribute spec for location "+Te)}for(var Ge=0;Ge<_e.buffers.length;++Ge)!We[Ge]&&_e.buffers[Ge]&&(_e.buffers[Ge].destroy(),_e.buffers[Ge]=null);return _e.refresh(),re}return re.destroy=function(){for(var Ee=0;Ee<_e.buffers.length;++Ee)_e.buffers[Ee]&&_e.buffers[Ee].destroy();_e.buffers.length=0,_e.destroy()},re._vao=_e,re._reglType="vao",re(ne)}return fe}var Xu=35632,px=35633,mx=35718,vx=35721;function gx(l,b,S,j){var Q={},U={};function V(N,X,pe,Re){this.name=N,this.id=X,this.location=pe,this.info=Re}function ie(N,X){for(var pe=0;pe<N.length;++pe)if(N[pe].id===X.id){N[pe].location=X.location;return}N.push(X)}function le(N,X,pe){var Re=N===Xu?Q:U,te=Re[X];if(!te){var Pe=b.str(X);te=l.createShader(N),l.shaderSource(te,Pe),l.compileShader(te),g.shaderError(l,te,Pe,N,pe),Re[X]=te}return te}var me={},fe=[],xe=0;function Ae(N,X){this.id=xe++,this.fragId=N,this.vertId=X,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,j.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function se(N,X,pe){var Re,te,Pe=le(Xu,N.fragId),ne=le(px,N.vertId),_e=N.program=l.createProgram();if(l.attachShader(_e,Pe),l.attachShader(_e,ne),pe)for(Re=0;Re<pe.length;++Re){var re=pe[Re];l.bindAttribLocation(_e,re[0],re[1])}l.linkProgram(_e),g.linkError(l,_e,b.str(N.fragId),b.str(N.vertId),X);var Ee=l.getProgramParameter(_e,mx);j.profile&&(N.stats.uniformsCount=Ee);var We=N.uniforms;for(Re=0;Re<Ee;++Re)if(te=l.getActiveUniform(_e,Re),te)if(te.size>1)for(var Je=0;Je<te.size;++Je){var Te=te.name.replace("[0]","["+Je+"]");ie(We,new V(Te,b.id(Te),l.getUniformLocation(_e,Te),te))}else ie(We,new V(te.name,b.id(te.name),l.getUniformLocation(_e,te.name),te));var ve=l.getProgramParameter(_e,vx);j.profile&&(N.stats.attributesCount=ve);var ee=N.attributes;for(Re=0;Re<ve;++Re)te=l.getActiveAttrib(_e,Re),te&&ie(ee,new V(te.name,b.id(te.name),l.getAttribLocation(_e,te.name),te))}j.profile&&(S.getMaxUniformsCount=function(){var N=0;return fe.forEach(function(X){X.stats.uniformsCount>N&&(N=X.stats.uniformsCount)}),N},S.getMaxAttributesCount=function(){var N=0;return fe.forEach(function(X){X.stats.attributesCount>N&&(N=X.stats.attributesCount)}),N});function we(){Q={},U={};for(var N=0;N<fe.length;++N)se(fe[N],null,fe[N].attributes.map(function(X){return[X.location,X.name]}))}return{clear:function(){var N=l.deleteShader.bind(l);pn(Q).forEach(N),Q={},pn(U).forEach(N),U={},fe.forEach(function(X){l.deleteProgram(X.program)}),fe.length=0,me={},S.shaderCount=0},program:function(N,X,pe,Re){g.command(N>=0,"missing vertex shader",pe),g.command(X>=0,"missing fragment shader",pe);var te=me[X];te||(te=me[X]={});var Pe=te[N];if(Pe&&(Pe.refCount++,!Re))return Pe;var ne=new Ae(X,N);return S.shaderCount++,se(ne,pe,Re),Pe||(te[N]=ne),fe.push(ne),t(ne,{destroy:function(){if(ne.refCount--,ne.refCount<=0){l.deleteProgram(ne.program);var _e=fe.indexOf(ne);fe.splice(_e,1),S.shaderCount--}te[ne.vertId].refCount<=0&&(l.deleteShader(U[ne.vertId]),delete U[ne.vertId],delete me[ne.fragId][ne.vertId]),Object.keys(me[ne.fragId]).length||(l.deleteShader(Q[ne.fragId]),delete Q[ne.fragId],delete me[ne.fragId])}})},restore:we,shader:le,frag:-1,vert:-1}}var xx=6408,Di=5121,yx=3333,Vs=5126;function bx(l,b,S,j,Q,U,V){function ie(fe){var xe;b.next===null?(g(Q.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),xe=Di):(g(b.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),xe=b.next.colorAttachments[0].texture._texture.type,U.oes_texture_float?(g(xe===Di||xe===Vs,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),xe===Vs&&g(V.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):g(xe===Di,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Ae=0,se=0,we=j.framebufferWidth,N=j.framebufferHeight,X=null;e(fe)?X=fe:fe&&(g.type(fe,"object","invalid arguments to regl.read()"),Ae=fe.x|0,se=fe.y|0,g(Ae>=0&&Ae<j.framebufferWidth,"invalid x offset for regl.read"),g(se>=0&&se<j.framebufferHeight,"invalid y offset for regl.read"),we=(fe.width||j.framebufferWidth-Ae)|0,N=(fe.height||j.framebufferHeight-se)|0,X=fe.data||null),X&&(xe===Di?g(X instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):xe===Vs&&g(X instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),g(we>0&&we+Ae<=j.framebufferWidth,"invalid width for read pixels"),g(N>0&&N+se<=j.framebufferHeight,"invalid height for read pixels"),S();var pe=we*N*4;return X||(xe===Di?X=new Uint8Array(pe):xe===Vs&&(X=X||new Float32Array(pe))),g.isTypedArray(X,"data buffer for regl.read() must be a typedarray"),g(X.byteLength>=pe,"data buffer for regl.read() too small"),l.pixelStorei(yx,4),l.readPixels(Ae,se,we,N,xx,xe,X),X}function le(fe){var xe;return b.setFBO({framebuffer:fe.framebuffer},function(){xe=ie(fe)}),xe}function me(fe){return!fe||!("framebuffer"in fe)?ie(fe):le(fe)}return me}function Ha(l){return Array.prototype.slice.call(l)}function Ua(l){return Ha(l).join("")}function wx(){var l=0,b=[],S=[];function j(xe){for(var Ae=0;Ae<S.length;++Ae)if(S[Ae]===xe)return b[Ae];var se="g"+l++;return b.push(se),S.push(xe),se}function Q(){var xe=[];function Ae(){xe.push.apply(xe,Ha(arguments))}var se=[];function we(){var N="v"+l++;return se.push(N),arguments.length>0&&(xe.push(N,"="),xe.push.apply(xe,Ha(arguments)),xe.push(";")),N}return t(Ae,{def:we,toString:function(){return Ua([se.length>0?"var "+se.join(",")+";":"",Ua(xe)])}})}function U(){var xe=Q(),Ae=Q(),se=xe.toString,we=Ae.toString;function N(X,pe){Ae(X,pe,"=",xe.def(X,pe),";")}return t(function(){xe.apply(xe,Ha(arguments))},{def:xe.def,entry:xe,exit:Ae,save:N,set:function(X,pe,Re){N(X,pe),xe(X,pe,"=",Re,";")},toString:function(){return se()+we()}})}function V(){var xe=Ua(arguments),Ae=U(),se=U(),we=Ae.toString,N=se.toString;return t(Ae,{then:function(){return Ae.apply(Ae,Ha(arguments)),this},else:function(){return se.apply(se,Ha(arguments)),this},toString:function(){var X=N();return X&&(X="else{"+X+"}"),Ua(["if(",xe,"){",we(),"}",X])}})}var ie=Q(),le={};function me(xe,Ae){var se=[];function we(){var te="a"+se.length;return se.push(te),te}Ae=Ae||0;for(var N=0;N<Ae;++N)we();var X=U(),pe=X.toString,Re=le[xe]=t(X,{arg:we,toString:function(){return Ua(["function(",se.join(),"){",pe(),"}"])}});return Re}function fe(){var xe=['"use strict";',ie,"return {"];Object.keys(le).forEach(function(we){xe.push('"',we,'":',le[we].toString(),",")}),xe.push("}");var Ae=Ua(xe).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),se=Function.apply(null,b.concat(Ae));return se.apply(null,S)}return{global:ie,link:j,block:Q,proc:me,scope:U,cond:V,compile:fe}}var Ba="xyzw".split(""),Yu=5121,ja=1,Dc=2,Gc=0,$c=1,qc=2,Hc=3,Xs=4,Ku=5,Qu=6,Zu="dither",Ju="blend.enable",eh="blend.color",Uc="blend.equation",Bc="blend.func",th="depth.enable",rh="depth.func",nh="depth.range",oh="depth.mask",jc="colorMask",ah="cull.enable",ih="cull.face",Wc="frontFace",Vc="lineWidth",sh="polygonOffset.enable",Xc="polygonOffset.offset",ch="sample.alpha",lh="sample.enable",Yc="sample.coverage",fh="stencil.enable",uh="stencil.mask",Kc="stencil.func",Qc="stencil.opFront",Gi="stencil.opBack",hh="scissor.enable",Ys="scissor.box",co="viewport",$i="profile",Zo="framebuffer",qi="vert",Hi="frag",Jo="elements",ea="primitive",ta="count",Ks="offset",Qs="instances",Ui="vao",Zc="Width",Jc="Height",Wa=Zo+Zc,Va=Zo+Jc,_x=co+Zc,Ex=co+Jc,dh="drawingBuffer",ph=dh+Zc,mh=dh+Jc,Mx=[Bc,Uc,Kc,Qc,Gi,Yc,co,Ys,Xc],Xa=34962,Ax=34963,Tx=35632,Sx=35633,vh=3553,kx=34067,Lx=2884,zx=3042,Cx=3024,Rx=2960,Ix=2929,Px=3089,Ox=32823,Nx=32926,Fx=32928,el=5126,Zs=35664,Js=35665,e0=35666,tl=5124,t0=35667,r0=35668,n0=35669,rl=35670,o0=35671,a0=35672,i0=35673,Bi=35674,ji=35675,Wi=35676,Vi=35678,Xi=35680,gh=4,Yi=1028,ra=1029,xh=2304,nl=2305,Dx=32775,Gx=32776,$x=519,_o=7680,yh=0,bh=1,wh=32774,qx=513,_h=36160,Hx=36064,Qn={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Eh=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Ya={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Eo={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Mh={frag:Tx,vert:Sx},ol={cw:xh,ccw:nl};function s0(l){return Array.isArray(l)||e(l)||Dn(l)}function Ah(l){return l.sort(function(b,S){return b===co?-1:S===co?1:b<S?-1:1})}function Yr(l,b,S,j){this.thisDep=l,this.contextDep=b,this.propDep=S,this.append=j}function Mo(l){return l&&!(l.thisDep||l.contextDep||l.propDep)}function xr(l){return new Yr(!1,!1,!1,l)}function cn(l,b){var S=l.type;if(S===Gc){var j=l.data.length;return new Yr(!0,j>=1,j>=2,b)}else if(S===Xs){var Q=l.data;return new Yr(Q.thisDep,Q.contextDep,Q.propDep,b)}else{if(S===Ku)return new Yr(!1,!1,!1,b);if(S===Qu){for(var U=!1,V=!1,ie=!1,le=0;le<l.data.length;++le){var me=l.data[le];if(me.type===$c)ie=!0;else if(me.type===qc)V=!0;else if(me.type===Hc)U=!0;else if(me.type===Gc){U=!0;var fe=me.data;fe>=1&&(V=!0),fe>=2&&(ie=!0)}else me.type===Xs&&(U=U||me.data.thisDep,V=V||me.data.contextDep,ie=ie||me.data.propDep)}return new Yr(U,V,ie,b)}else return new Yr(S===Hc,S===qc,S===$c,b)}}var Th=new Yr(!1,!1,!1,function(){});function Ux(l,b,S,j,Q,U,V,ie,le,me,fe,xe,Ae,se,we){var N=me.Record,X={add:32774,subtract:32778,"reverse subtract":32779};S.ext_blend_minmax&&(X.min=Dx,X.max=Gx);var pe=S.angle_instanced_arrays,Re=S.webgl_draw_buffers,te={dirty:!0,profile:we.profile},Pe={},ne=[],_e={},re={};function Ee(E){return E.replace(".","_")}function We(E,y,L){var O=Ee(E);ne.push(E),Pe[O]=te[O]=!!L,_e[O]=y}function Je(E,y,L){var O=Ee(E);ne.push(E),Array.isArray(L)?(te[O]=L.slice(),Pe[O]=L.slice()):te[O]=Pe[O]=L,re[O]=y}We(Zu,Cx),We(Ju,zx),Je(eh,"blendColor",[0,0,0,0]),Je(Uc,"blendEquationSeparate",[wh,wh]),Je(Bc,"blendFuncSeparate",[bh,yh,bh,yh]),We(th,Ix,!0),Je(rh,"depthFunc",qx),Je(nh,"depthRange",[0,1]),Je(oh,"depthMask",!0),Je(jc,jc,[!0,!0,!0,!0]),We(ah,Lx),Je(ih,"cullFace",ra),Je(Wc,Wc,nl),Je(Vc,Vc,1),We(sh,Ox),Je(Xc,"polygonOffset",[0,0]),We(ch,Nx),We(lh,Fx),Je(Yc,"sampleCoverage",[1,!1]),We(fh,Rx),Je(uh,"stencilMask",-1),Je(Kc,"stencilFunc",[$x,0,-1]),Je(Qc,"stencilOpSeparate",[Yi,_o,_o,_o]),Je(Gi,"stencilOpSeparate",[ra,_o,_o,_o]),We(hh,Px),Je(Ys,"scissor",[0,0,l.drawingBufferWidth,l.drawingBufferHeight]),Je(co,co,[0,0,l.drawingBufferWidth,l.drawingBufferHeight]);var Te={gl:l,context:Ae,strings:b,next:Pe,current:te,draw:xe,elements:U,buffer:Q,shader:fe,attributes:me.state,vao:me,uniforms:le,framebuffer:ie,extensions:S,timer:se,isBufferArgs:s0},ve={primTypes:Pa,compareFuncs:Ya,blendFuncs:Qn,blendEquations:X,stencilOps:Eo,glTypes:Vo,orientationType:ol};g.optional(function(){Te.isArrayLike=fr}),Re&&(ve.backBuffer=[ra],ve.drawBuffer=Ur(j.maxDrawbuffers,function(E){return E===0?[0]:Ur(E,function(y){return Hx+y})}));var ee=0;function Qe(){var E=wx(),y=E.link,L=E.global;E.id=ee++,E.batchId="0";var O=y(Te),F=E.shared={props:"a0"};Object.keys(Te).forEach(function(k){F[k]=L.def(O,".",k)}),g.optional(function(){E.CHECK=y(g),E.commandStr=g.guessCommand(),E.command=y(E.commandStr),E.assert=function(k,_,P){k("if(!(",_,"))",this.CHECK,".commandRaise(",y(P),",",this.command,");")},ve.invalidBlendCombinations=Eh});var R=E.next={},z=E.current={};Object.keys(re).forEach(function(k){Array.isArray(te[k])&&(R[k]=L.def(F.next,".",k),z[k]=L.def(F.current,".",k))});var I=E.constants={};Object.keys(ve).forEach(function(k){I[k]=L.def(JSON.stringify(ve[k]))}),E.invoke=function(k,_){switch(_.type){case Gc:var P=["this",F.context,F.props,E.batchId];return k.def(y(_.data),".call(",P.slice(0,Math.max(_.data.length+1,4)),")");case $c:return k.def(F.props,_.data);case qc:return k.def(F.context,_.data);case Hc:return k.def("this",_.data);case Xs:return _.data.append(E,k),_.data.ref;case Ku:return _.data.toString();case Qu:return _.data.map(function(D){return E.invoke(k,D)})}},E.attribCache={};var M={};return E.scopeAttrib=function(k){var _=b.id(k);if(_ in M)return M[_];var P=me.scope[_];P||(P=me.scope[_]=new N);var D=M[_]=y(P);return D},E}function ot(E){var y=E.static,L=E.dynamic,O;if($i in y){var F=!!y[$i];O=xr(function(z,I){return F}),O.enable=F}else if($i in L){var R=L[$i];O=cn(R,function(z,I){return z.invoke(I,R)})}return O}function Ge(E,y){var L=E.static,O=E.dynamic;if(Zo in L){var F=L[Zo];return F?(F=ie.getFramebuffer(F),g.command(F,"invalid framebuffer object"),xr(function(z,I){var M=z.link(F),k=z.shared;I.set(k.framebuffer,".next",M);var _=k.context;return I.set(_,"."+Wa,M+".width"),I.set(_,"."+Va,M+".height"),M})):xr(function(z,I){var M=z.shared;I.set(M.framebuffer,".next","null");var k=M.context;return I.set(k,"."+Wa,k+"."+ph),I.set(k,"."+Va,k+"."+mh),"null"})}else if(Zo in O){var R=O[Zo];return cn(R,function(z,I){var M=z.invoke(I,R),k=z.shared,_=k.framebuffer,P=I.def(_,".getFramebuffer(",M,")");g.optional(function(){z.assert(I,"!"+M+"||"+P,"invalid framebuffer object")}),I.set(_,".next",P);var D=k.context;return I.set(D,"."+Wa,P+"?"+P+".width:"+D+"."+ph),I.set(D,"."+Va,P+"?"+P+".height:"+D+"."+mh),P})}else return null}function ft(E,y,L){var O=E.static,F=E.dynamic;function R(M){if(M in O){var k=O[M];g.commandType(k,"object","invalid "+M,L.commandStr);var _=!0,P=k.x|0,D=k.y|0,K,Z;return"width"in k?(K=k.width|0,g.command(K>=0,"invalid "+M,L.commandStr)):_=!1,"height"in k?(Z=k.height|0,g.command(Z>=0,"invalid "+M,L.commandStr)):_=!1,new Yr(!_&&y&&y.thisDep,!_&&y&&y.contextDep,!_&&y&&y.propDep,function(Be,it){var $e=Be.shared.context,Ye=K;"width"in k||(Ye=it.def($e,".",Wa,"-",P));var rt=Z;return"height"in k||(rt=it.def($e,".",Va,"-",D)),[P,D,Ye,rt]})}else if(M in F){var Y=F[M],he=cn(Y,function(Be,it){var $e=Be.invoke(it,Y);g.optional(function(){Be.assert(it,$e+"&&typeof "+$e+'==="object"',"invalid "+M)});var Ye=Be.shared.context,rt=it.def($e,".x|0"),St=it.def($e,".y|0"),sr=it.def('"width" in ',$e,"?",$e,".width|0:","(",Ye,".",Wa,"-",rt,")"),Kr=it.def('"height" in ',$e,"?",$e,".height|0:","(",Ye,".",Va,"-",St,")");return g.optional(function(){Be.assert(it,sr+">=0&&"+Kr+">=0","invalid "+M)}),[rt,St,sr,Kr]});return y&&(he.thisDep=he.thisDep||y.thisDep,he.contextDep=he.contextDep||y.contextDep,he.propDep=he.propDep||y.propDep),he}else return y?new Yr(y.thisDep,y.contextDep,y.propDep,function(Be,it){var $e=Be.shared.context;return[0,0,it.def($e,".",Wa),it.def($e,".",Va)]}):null}var z=R(co);if(z){var I=z;z=new Yr(z.thisDep,z.contextDep,z.propDep,function(M,k){var _=I.append(M,k),P=M.shared.context;return k.set(P,"."+_x,_[2]),k.set(P,"."+Ex,_[3]),_})}return{viewport:z,scissor_box:R(Ys)}}function tt(E,y){var L=E.static,O=typeof L[Hi]=="string"&&typeof L[qi]=="string";if(O){if(Object.keys(y.dynamic).length>0)return null;var F=y.static,R=Object.keys(F);if(R.length>0&&typeof F[R[0]]=="number"){for(var z=[],I=0;I<R.length;++I)g(typeof F[R[I]]=="number","must specify all vertex attribute locations when using vaos"),z.push([F[R[I]]|0,R[I]]);return z}}return null}function ct(E,y,L){var O=E.static,F=E.dynamic;function R(_){if(_ in O){var P=b.id(O[_]);g.optional(function(){fe.shader(Mh[_],P,g.guessCommand())});var D=xr(function(){return P});return D.id=P,D}else if(_ in F){var K=F[_];return cn(K,function(Z,Y){var he=Z.invoke(Y,K),Be=Y.def(Z.shared.strings,".id(",he,")");return g.optional(function(){Y(Z.shared.shader,".shader(",Mh[_],",",Be,",",Z.command,");")}),Be})}return null}var z=R(Hi),I=R(qi),M=null,k;return Mo(z)&&Mo(I)?(M=fe.program(I.id,z.id,null,L),k=xr(function(_,P){return _.link(M)})):k=new Yr(z&&z.thisDep||I&&I.thisDep,z&&z.contextDep||I&&I.contextDep,z&&z.propDep||I&&I.propDep,function(_,P){var D=_.shared.shader,K;z?K=z.append(_,P):K=P.def(D,".",Hi);var Z;I?Z=I.append(_,P):Z=P.def(D,".",qi);var Y=D+".program("+Z+","+K;return g.optional(function(){Y+=","+_.command}),P.def(Y+")")}),{frag:z,vert:I,progVar:k,program:M}}function Tt(E,y){var L=E.static,O=E.dynamic;function F(){if(Jo in L){var _=L[Jo];s0(_)?_=U.getElements(U.create(_,!0)):_&&(_=U.getElements(_),g.command(_,"invalid elements",y.commandStr));var P=xr(function(K,Z){if(_){var Y=K.link(_);return K.ELEMENTS=Y,Y}return K.ELEMENTS=null,null});return P.value=_,P}else if(Jo in O){var D=O[Jo];return cn(D,function(K,Z){var Y=K.shared,he=Y.isBufferArgs,Be=Y.elements,it=K.invoke(Z,D),$e=Z.def("null"),Ye=Z.def(he,"(",it,")"),rt=K.cond(Ye).then($e,"=",Be,".createStream(",it,");").else($e,"=",Be,".getElements(",it,");");return g.optional(function(){K.assert(rt.else,"!"+it+"||"+$e,"invalid elements")}),Z.entry(rt),Z.exit(K.cond(Ye).then(Be,".destroyStream(",$e,");")),K.ELEMENTS=$e,$e})}return null}var R=F();function z(){if(ea in L){var _=L[ea];return g.commandParameter(_,Pa,"invalid primitve",y.commandStr),xr(function(D,K){return Pa[_]})}else if(ea in O){var P=O[ea];return cn(P,function(D,K){var Z=D.constants.primTypes,Y=D.invoke(K,P);return g.optional(function(){D.assert(K,Y+" in "+Z,"invalid primitive, must be one of "+Object.keys(Pa))}),K.def(Z,"[",Y,"]")})}else if(R)return Mo(R)?R.value?xr(function(D,K){return K.def(D.ELEMENTS,".primType")}):xr(function(){return gh}):new Yr(R.thisDep,R.contextDep,R.propDep,function(D,K){var Z=D.ELEMENTS;return K.def(Z,"?",Z,".primType:",gh)});return null}function I(_,P){if(_ in L){var D=L[_]|0;return g.command(!P||D>=0,"invalid "+_,y.commandStr),xr(function(Z,Y){return P&&(Z.OFFSET=D),D})}else if(_ in O){var K=O[_];return cn(K,function(Z,Y){var he=Z.invoke(Y,K);return P&&(Z.OFFSET=he,g.optional(function(){Z.assert(Y,he+">=0","invalid "+_)})),he})}else if(P&&R)return xr(function(Z,Y){return Z.OFFSET="0",0});return null}var M=I(Ks,!0);function k(){if(ta in L){var _=L[ta]|0;return g.command(typeof _=="number"&&_>=0,"invalid vertex count",y.commandStr),xr(function(){return _})}else if(ta in O){var P=O[ta];return cn(P,function(Z,Y){var he=Z.invoke(Y,P);return g.optional(function(){Z.assert(Y,"typeof "+he+'==="number"&&'+he+">=0&&"+he+"===("+he+"|0)","invalid vertex count")}),he})}else if(R)if(Mo(R)){if(R)return M?new Yr(M.thisDep,M.contextDep,M.propDep,function(Z,Y){var he=Y.def(Z.ELEMENTS,".vertCount-",Z.OFFSET);return g.optional(function(){Z.assert(Y,he+">=0","invalid vertex offset/element buffer too small")}),he}):xr(function(Z,Y){return Y.def(Z.ELEMENTS,".vertCount")});var D=xr(function(){return-1});return g.optional(function(){D.MISSING=!0}),D}else{var K=new Yr(R.thisDep||M.thisDep,R.contextDep||M.contextDep,R.propDep||M.propDep,function(Z,Y){var he=Z.ELEMENTS;return Z.OFFSET?Y.def(he,"?",he,".vertCount-",Z.OFFSET,":-1"):Y.def(he,"?",he,".vertCount:-1")});return g.optional(function(){K.DYNAMIC=!0}),K}return null}return{elements:R,primitive:z(),count:k(),instances:I(Qs,!1),offset:M}}function yr(E,y){var L=E.static,O=E.dynamic,F={};return ne.forEach(function(R){var z=Ee(R);function I(M,k){if(R in L){var _=M(L[R]);F[z]=xr(function(){return _})}else if(R in O){var P=O[R];F[z]=cn(P,function(D,K){return k(D,K,D.invoke(K,P))})}}switch(R){case ah:case Ju:case Zu:case fh:case th:case hh:case sh:case ch:case lh:case oh:return I(function(M){return g.commandType(M,"boolean",R,y.commandStr),M},function(M,k,_){return g.optional(function(){M.assert(k,"typeof "+_+'==="boolean"',"invalid flag "+R,M.commandStr)}),_});case rh:return I(function(M){return g.commandParameter(M,Ya,"invalid "+R,y.commandStr),Ya[M]},function(M,k,_){var P=M.constants.compareFuncs;return g.optional(function(){M.assert(k,_+" in "+P,"invalid "+R+", must be one of "+Object.keys(Ya))}),k.def(P,"[",_,"]")});case nh:return I(function(M){return g.command(fr(M)&&M.length===2&&typeof M[0]=="number"&&typeof M[1]=="number"&&M[0]<=M[1],"depth range is 2d array",y.commandStr),M},function(M,k,_){g.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===2&&typeof "+_+'[0]==="number"&&typeof '+_+'[1]==="number"&&'+_+"[0]<="+_+"[1]","depth range must be a 2d array")});var P=k.def("+",_,"[0]"),D=k.def("+",_,"[1]");return[P,D]});case Bc:return I(function(M){g.commandType(M,"object","blend.func",y.commandStr);var k="srcRGB"in M?M.srcRGB:M.src,_="srcAlpha"in M?M.srcAlpha:M.src,P="dstRGB"in M?M.dstRGB:M.dst,D="dstAlpha"in M?M.dstAlpha:M.dst;return g.commandParameter(k,Qn,z+".srcRGB",y.commandStr),g.commandParameter(_,Qn,z+".srcAlpha",y.commandStr),g.commandParameter(P,Qn,z+".dstRGB",y.commandStr),g.commandParameter(D,Qn,z+".dstAlpha",y.commandStr),g.command(Eh.indexOf(k+", "+P)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+k+", "+P+")",y.commandStr),[Qn[k],Qn[P],Qn[_],Qn[D]]},function(M,k,_){var P=M.constants.blendFuncs;g.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid blend func, must be an object")});function D($e,Ye){var rt=k.def('"',$e,Ye,'" in ',_,"?",_,".",$e,Ye,":",_,".",$e);return g.optional(function(){M.assert(k,rt+" in "+P,"invalid "+R+"."+$e+Ye+", must be one of "+Object.keys(Qn))}),rt}var K=D("src","RGB"),Z=D("dst","RGB");g.optional(function(){var $e=M.constants.invalidBlendCombinations;M.assert(k,$e+".indexOf("+K+'+", "+'+Z+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var Y=k.def(P,"[",K,"]"),he=k.def(P,"[",D("src","Alpha"),"]"),Be=k.def(P,"[",Z,"]"),it=k.def(P,"[",D("dst","Alpha"),"]");return[Y,Be,he,it]});case Uc:return I(function(M){if(typeof M=="string")return g.commandParameter(M,X,"invalid "+R,y.commandStr),[X[M],X[M]];if(typeof M=="object")return g.commandParameter(M.rgb,X,R+".rgb",y.commandStr),g.commandParameter(M.alpha,X,R+".alpha",y.commandStr),[X[M.rgb],X[M.alpha]];g.commandRaise("invalid blend.equation",y.commandStr)},function(M,k,_){var P=M.constants.blendEquations,D=k.def(),K=k.def(),Z=M.cond("typeof ",_,'==="string"');return g.optional(function(){function Y(he,Be,it){M.assert(he,it+" in "+P,"invalid "+Be+", must be one of "+Object.keys(X))}Y(Z.then,R,_),M.assert(Z.else,_+"&&typeof "+_+'==="object"',"invalid "+R),Y(Z.else,R+".rgb",_+".rgb"),Y(Z.else,R+".alpha",_+".alpha")}),Z.then(D,"=",K,"=",P,"[",_,"];"),Z.else(D,"=",P,"[",_,".rgb];",K,"=",P,"[",_,".alpha];"),k(Z),[D,K]});case eh:return I(function(M){return g.command(fr(M)&&M.length===4,"blend.color must be a 4d array",y.commandStr),Ur(4,function(k){return+M[k]})},function(M,k,_){return g.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===4","blend.color must be a 4d array")}),Ur(4,function(P){return k.def("+",_,"[",P,"]")})});case uh:return I(function(M){return g.commandType(M,"number",z,y.commandStr),M|0},function(M,k,_){return g.optional(function(){M.assert(k,"typeof "+_+'==="number"',"invalid stencil.mask")}),k.def(_,"|0")});case Kc:return I(function(M){g.commandType(M,"object",z,y.commandStr);var k=M.cmp||"keep",_=M.ref||0,P="mask"in M?M.mask:-1;return g.commandParameter(k,Ya,R+".cmp",y.commandStr),g.commandType(_,"number",R+".ref",y.commandStr),g.commandType(P,"number",R+".mask",y.commandStr),[Ya[k],_,P]},function(M,k,_){var P=M.constants.compareFuncs;g.optional(function(){function Y(){M.assert(k,Array.prototype.join.call(arguments,""),"invalid stencil.func")}Y(_+"&&typeof ",_,'==="object"'),Y('!("cmp" in ',_,")||(",_,".cmp in ",P,")")});var D=k.def('"cmp" in ',_,"?",P,"[",_,".cmp]",":",_o),K=k.def(_,".ref|0"),Z=k.def('"mask" in ',_,"?",_,".mask|0:-1");return[D,K,Z]});case Qc:case Gi:return I(function(M){g.commandType(M,"object",z,y.commandStr);var k=M.fail||"keep",_=M.zfail||"keep",P=M.zpass||"keep";return g.commandParameter(k,Eo,R+".fail",y.commandStr),g.commandParameter(_,Eo,R+".zfail",y.commandStr),g.commandParameter(P,Eo,R+".zpass",y.commandStr),[R===Gi?ra:Yi,Eo[k],Eo[_],Eo[P]]},function(M,k,_){var P=M.constants.stencilOps;g.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid "+R)});function D(K){return g.optional(function(){M.assert(k,'!("'+K+'" in '+_+")||("+_+"."+K+" in "+P+")","invalid "+R+"."+K+", must be one of "+Object.keys(Eo))}),k.def('"',K,'" in ',_,"?",P,"[",_,".",K,"]:",_o)}return[R===Gi?ra:Yi,D("fail"),D("zfail"),D("zpass")]});case Xc:return I(function(M){g.commandType(M,"object",z,y.commandStr);var k=M.factor|0,_=M.units|0;return g.commandType(k,"number",z+".factor",y.commandStr),g.commandType(_,"number",z+".units",y.commandStr),[k,_]},function(M,k,_){g.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid "+R)});var P=k.def(_,".factor|0"),D=k.def(_,".units|0");return[P,D]});case ih:return I(function(M){var k=0;return M==="front"?k=Yi:M==="back"&&(k=ra),g.command(!!k,z,y.commandStr),k},function(M,k,_){return g.optional(function(){M.assert(k,_+'==="front"||'+_+'==="back"',"invalid cull.face")}),k.def(_,'==="front"?',Yi,":",ra)});case Vc:return I(function(M){return g.command(typeof M=="number"&&M>=j.lineWidthDims[0]&&M<=j.lineWidthDims[1],"invalid line width, must be a positive number between "+j.lineWidthDims[0]+" and "+j.lineWidthDims[1],y.commandStr),M},function(M,k,_){return g.optional(function(){M.assert(k,"typeof "+_+'==="number"&&'+_+">="+j.lineWidthDims[0]+"&&"+_+"<="+j.lineWidthDims[1],"invalid line width")}),_});case Wc:return I(function(M){return g.commandParameter(M,ol,z,y.commandStr),ol[M]},function(M,k,_){return g.optional(function(){M.assert(k,_+'==="cw"||'+_+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),k.def(_+'==="cw"?'+xh+":"+nl)});case jc:return I(function(M){return g.command(fr(M)&&M.length===4,"color.mask must be length 4 array",y.commandStr),M.map(function(k){return!!k})},function(M,k,_){return g.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===4","invalid color.mask")}),Ur(4,function(P){return"!!"+_+"["+P+"]"})});case Yc:return I(function(M){g.command(typeof M=="object"&&M,z,y.commandStr);var k="value"in M?M.value:1,_=!!M.invert;return g.command(typeof k=="number"&&k>=0&&k<=1,"sample.coverage.value must be a number between 0 and 1",y.commandStr),[k,_]},function(M,k,_){g.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid sample.coverage")});var P=k.def('"value" in ',_,"?+",_,".value:1"),D=k.def("!!",_,".invert");return[P,D]})}}),F}function Sr(E,y){var L=E.static,O=E.dynamic,F={};return Object.keys(L).forEach(function(R){var z=L[R],I;if(typeof z=="number"||typeof z=="boolean")I=xr(function(){return z});else if(typeof z=="function"){var M=z._reglType;M==="texture2d"||M==="textureCube"?I=xr(function(k){return k.link(z)}):M==="framebuffer"||M==="framebufferCube"?(g.command(z.color.length>0,'missing color attachment for framebuffer sent to uniform "'+R+'"',y.commandStr),I=xr(function(k){return k.link(z.color[0])})):g.commandRaise('invalid data for uniform "'+R+'"',y.commandStr)}else fr(z)?I=xr(function(k){var _=k.global.def("[",Ur(z.length,function(P){return g.command(typeof z[P]=="number"||typeof z[P]=="boolean","invalid uniform "+R,k.commandStr),z[P]}),"]");return _}):g.commandRaise('invalid or missing data for uniform "'+R+'"',y.commandStr);I.value=z,F[R]=I}),Object.keys(O).forEach(function(R){var z=O[R];F[R]=cn(z,function(I,M){return I.invoke(M,z)})}),F}function vt(E,y){var L=E.static,O=E.dynamic,F={};return Object.keys(L).forEach(function(R){var z=L[R],I=b.id(R),M=new N;if(s0(z))M.state=ja,M.buffer=Q.getBuffer(Q.create(z,Xa,!1,!0)),M.type=0;else{var k=Q.getBuffer(z);if(k)M.state=ja,M.buffer=k,M.type=0;else if(g.command(typeof z=="object"&&z,"invalid data for attribute "+R,y.commandStr),"constant"in z){var _=z.constant;M.buffer="null",M.state=Dc,typeof _=="number"?M.x=_:(g.command(fr(_)&&_.length>0&&_.length<=4,"invalid constant for attribute "+R,y.commandStr),Ba.forEach(function(Be,it){it<_.length&&(M[Be]=_[it])}))}else{s0(z.buffer)?k=Q.getBuffer(Q.create(z.buffer,Xa,!1,!0)):k=Q.getBuffer(z.buffer),g.command(!!k,'missing buffer for attribute "'+R+'"',y.commandStr);var P=z.offset|0;g.command(P>=0,'invalid offset for attribute "'+R+'"',y.commandStr);var D=z.stride|0;g.command(D>=0&&D<256,'invalid stride for attribute "'+R+'", must be integer betweeen [0, 255]',y.commandStr);var K=z.size|0;g.command(!("size"in z)||K>0&&K<=4,'invalid size for attribute "'+R+'", must be 1,2,3,4',y.commandStr);var Z=!!z.normalized,Y=0;"type"in z&&(g.commandParameter(z.type,Vo,"invalid type for attribute "+R,y.commandStr),Y=Vo[z.type]);var he=z.divisor|0;"divisor"in z&&(g.command(he===0||pe,'cannot specify divisor for attribute "'+R+'", instancing not supported',y.commandStr),g.command(he>=0,'invalid divisor for attribute "'+R+'"',y.commandStr)),g.optional(function(){var Be=y.commandStr,it=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(z).forEach(function($e){g.command(it.indexOf($e)>=0,'unknown parameter "'+$e+'" for attribute pointer "'+R+'" (valid parameters are '+it+")",Be)})}),M.buffer=k,M.state=ja,M.size=K,M.normalized=Z,M.type=Y||k.dtype,M.offset=P,M.stride=D,M.divisor=he}}F[R]=xr(function(Be,it){var $e=Be.attribCache;if(I in $e)return $e[I];var Ye={isStream:!1};return Object.keys(M).forEach(function(rt){Ye[rt]=M[rt]}),M.buffer&&(Ye.buffer=Be.link(M.buffer),Ye.type=Ye.type||Ye.buffer+".dtype"),$e[I]=Ye,Ye})}),Object.keys(O).forEach(function(R){var z=O[R];function I(M,k){var _=M.invoke(k,z),P=M.shared,D=M.constants,K=P.isBufferArgs,Z=P.buffer;g.optional(function(){M.assert(k,_+"&&(typeof "+_+'==="object"||typeof '+_+'==="function")&&('+K+"("+_+")||"+Z+".getBuffer("+_+")||"+Z+".getBuffer("+_+".buffer)||"+K+"("+_+'.buffer)||("constant" in '+_+"&&(typeof "+_+'.constant==="number"||'+P.isArrayLike+"("+_+".constant))))",'invalid dynamic attribute "'+R+'"')});var Y={isStream:k.def(!1)},he=new N;he.state=ja,Object.keys(he).forEach(function(Ye){Y[Ye]=k.def(""+he[Ye])});var Be=Y.buffer,it=Y.type;k("if(",K,"(",_,")){",Y.isStream,"=true;",Be,"=",Z,".createStream(",Xa,",",_,");",it,"=",Be,".dtype;","}else{",Be,"=",Z,".getBuffer(",_,");","if(",Be,"){",it,"=",Be,".dtype;",'}else if("constant" in ',_,"){",Y.state,"=",Dc,";","if(typeof "+_+'.constant === "number"){',Y[Ba[0]],"=",_,".constant;",Ba.slice(1).map(function(Ye){return Y[Ye]}).join("="),"=0;","}else{",Ba.map(function(Ye,rt){return Y[Ye]+"="+_+".constant.length>"+rt+"?"+_+".constant["+rt+"]:0;"}).join(""),"}}else{","if(",K,"(",_,".buffer)){",Be,"=",Z,".createStream(",Xa,",",_,".buffer);","}else{",Be,"=",Z,".getBuffer(",_,".buffer);","}",it,'="type" in ',_,"?",D.glTypes,"[",_,".type]:",Be,".dtype;",Y.normalized,"=!!",_,".normalized;");function $e(Ye){k(Y[Ye],"=",_,".",Ye,"|0;")}return $e("size"),$e("offset"),$e("stride"),$e("divisor"),k("}}"),k.exit("if(",Y.isStream,"){",Z,".destroyStream(",Be,");","}"),Y}F[R]=cn(z,I)}),F}function Er(E,y){var L=E.static,O=E.dynamic;if(Ui in L){var F=L[Ui];return F!==null&&me.getVAO(F)===null&&(F=me.createVAO(F)),xr(function(z){return z.link(me.getVAO(F))})}else if(Ui in O){var R=O[Ui];return cn(R,function(z,I){var M=z.invoke(I,R);return I.def(z.shared.vao+".getVAO("+M+")")})}return null}function Vt(E){var y=E.static,L=E.dynamic,O={};return Object.keys(y).forEach(function(F){var R=y[F];O[F]=xr(function(z,I){return typeof R=="number"||typeof R=="boolean"?""+R:z.link(R)})}),Object.keys(L).forEach(function(F){var R=L[F];O[F]=cn(R,function(z,I){return z.invoke(I,R)})}),O}function br(E,y,L,O,F){var R=E.static,z=E.dynamic;g.optional(function(){var $e=[Zo,qi,Hi,Jo,ea,Ks,ta,Qs,$i,Ui].concat(ne);function Ye(rt){Object.keys(rt).forEach(function(St){g.command($e.indexOf(St)>=0,'unknown parameter "'+St+'"',F.commandStr)})}Ye(R),Ye(z)});var I=tt(E,y),M=Ge(E,F),k=ft(E,M,F),_=Tt(E,F),P=yr(E,F),D=ct(E,F,I);function K($e){var Ye=k[$e];Ye&&(P[$e]=Ye)}K(co),K(Ee(Ys));var Z=Object.keys(P).length>0,Y={framebuffer:M,draw:_,shader:D,state:P,dirty:Z,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(Y.profile=ot(E,F),Y.uniforms=Sr(L,F),Y.drawVAO=Y.scopeVAO=Er(E,F),!Y.drawVAO&&D.program&&!I&&S.angle_instanced_arrays){var he=!0,Be=D.program.attributes.map(function($e){var Ye=y.static[$e];return he=he&&!!Ye,Ye});if(he&&Be.length>0){var it=me.getVAO(me.createVAO(Be));Y.drawVAO=new Yr(null,null,null,function($e,Ye){return $e.link(it)}),Y.useVAO=!0}}return I?Y.useVAO=!0:Y.attributes=vt(y,F),Y.context=Vt(O,F),Y}function Mr(E,y,L){var O=E.shared,F=O.context,R=E.scope();Object.keys(L).forEach(function(z){y.save(F,"."+z);var I=L[z],M=I.append(E,y);Array.isArray(M)?R(F,".",z,"=[",M.join(),"];"):R(F,".",z,"=",M,";")}),y(R)}function Ar(E,y,L,O){var F=E.shared,R=F.gl,z=F.framebuffer,I;Re&&(I=y.def(F.extensions,".webgl_draw_buffers"));var M=E.constants,k=M.drawBuffer,_=M.backBuffer,P;L?P=L.append(E,y):P=y.def(z,".next"),O||y("if(",P,"!==",z,".cur){"),y("if(",P,"){",R,".bindFramebuffer(",_h,",",P,".framebuffer);"),Re&&y(I,".drawBuffersWEBGL(",k,"[",P,".colorAttachments.length]);"),y("}else{",R,".bindFramebuffer(",_h,",null);"),Re&&y(I,".drawBuffersWEBGL(",_,");"),y("}",z,".cur=",P,";"),O||y("}")}function Rr(E,y,L){var O=E.shared,F=O.gl,R=E.current,z=E.next,I=O.current,M=O.next,k=E.cond(I,".dirty");ne.forEach(function(_){var P=Ee(_);if(!(P in L.state)){var D,K;if(P in z){D=z[P],K=R[P];var Z=Ur(te[P].length,function(he){return k.def(D,"[",he,"]")});k(E.cond(Z.map(function(he,Be){return he+"!=="+K+"["+Be+"]"}).join("||")).then(F,".",re[P],"(",Z,");",Z.map(function(he,Be){return K+"["+Be+"]="+he}).join(";"),";"))}else{D=k.def(M,".",P);var Y=E.cond(D,"!==",I,".",P);k(Y),P in _e?Y(E.cond(D).then(F,".enable(",_e[P],");").else(F,".disable(",_e[P],");"),I,".",P,"=",D,";"):Y(F,".",re[P],"(",D,");",I,".",P,"=",D,";")}}}),Object.keys(L.state).length===0&&k(I,".dirty=false;"),y(k)}function Dr(E,y,L,O){var F=E.shared,R=E.current,z=F.current,I=F.gl;Ah(Object.keys(L)).forEach(function(M){var k=L[M];if(!(O&&!O(k))){var _=k.append(E,y);if(_e[M]){var P=_e[M];Mo(k)?_?y(I,".enable(",P,");"):y(I,".disable(",P,");"):y(E.cond(_).then(I,".enable(",P,");").else(I,".disable(",P,");")),y(z,".",M,"=",_,";")}else if(fr(_)){var D=R[M];y(I,".",re[M],"(",_,");",_.map(function(K,Z){return D+"["+Z+"]="+K}).join(";"),";")}else y(I,".",re[M],"(",_,");",z,".",M,"=",_,";")}})}function ur(E,y){pe&&(E.instancing=y.def(E.shared.extensions,".angle_instanced_arrays"))}function at(E,y,L,O,F){var R=E.shared,z=E.stats,I=R.current,M=R.timer,k=L.profile;function _(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var P,D;function K($e){P=y.def(),$e(P,"=",_(),";"),typeof F=="string"?$e(z,".count+=",F,";"):$e(z,".count++;"),se&&(O?(D=y.def(),$e(D,"=",M,".getNumPendingQueries();")):$e(M,".beginQuery(",z,");"))}function Z($e){$e(z,".cpuTime+=",_(),"-",P,";"),se&&(O?$e(M,".pushScopeStats(",D,",",M,".getNumPendingQueries(),",z,");"):$e(M,".endQuery();"))}function Y($e){var Ye=y.def(I,".profile");y(I,".profile=",$e,";"),y.exit(I,".profile=",Ye,";")}var he;if(k){if(Mo(k)){k.enable?(K(y),Z(y.exit),Y("true")):Y("false");return}he=k.append(E,y),Y(he)}else he=y.def(I,".profile");var Be=E.block();K(Be),y("if(",he,"){",Be,"}");var it=E.block();Z(it),y.exit("if(",he,"){",it,"}")}function Gr(E,y,L,O,F){var R=E.shared;function z(M){switch(M){case Zs:case t0:case o0:return 2;case Js:case r0:case a0:return 3;case e0:case n0:case i0:return 4;default:return 1}}function I(M,k,_){var P=R.gl,D=y.def(M,".location"),K=y.def(R.attributes,"[",D,"]"),Z=_.state,Y=_.buffer,he=[_.x,_.y,_.z,_.w],Be=["buffer","normalized","offset","stride"];function it(){y("if(!",K,".buffer){",P,".enableVertexAttribArray(",D,");}");var Ye=_.type,rt;if(_.size?rt=y.def(_.size,"||",k):rt=k,y("if(",K,".type!==",Ye,"||",K,".size!==",rt,"||",Be.map(function(sr){return K+"."+sr+"!=="+_[sr]}).join("||"),"){",P,".bindBuffer(",Xa,",",Y,".buffer);",P,".vertexAttribPointer(",[D,rt,Ye,_.normalized,_.stride,_.offset],");",K,".type=",Ye,";",K,".size=",rt,";",Be.map(function(sr){return K+"."+sr+"="+_[sr]+";"}).join(""),"}"),pe){var St=_.divisor;y("if(",K,".divisor!==",St,"){",E.instancing,".vertexAttribDivisorANGLE(",[D,St],");",K,".divisor=",St,";}")}}function $e(){y("if(",K,".buffer){",P,".disableVertexAttribArray(",D,");",K,".buffer=null;","}if(",Ba.map(function(Ye,rt){return K+"."+Ye+"!=="+he[rt]}).join("||"),"){",P,".vertexAttrib4f(",D,",",he,");",Ba.map(function(Ye,rt){return K+"."+Ye+"="+he[rt]+";"}).join(""),"}")}Z===ja?it():Z===Dc?$e():(y("if(",Z,"===",ja,"){"),it(),y("}else{"),$e(),y("}"))}O.forEach(function(M){var k=M.name,_=L.attributes[k],P;if(_){if(!F(_))return;P=_.append(E,y)}else{if(!F(Th))return;var D=E.scopeAttrib(k);g.optional(function(){E.assert(y,D+".state","missing attribute "+k)}),P={},Object.keys(new N).forEach(function(K){P[K]=y.def(D,".",K)})}I(E.link(M),z(M.info.type),P)})}function Ct(E,y,L,O,F){for(var R=E.shared,z=R.gl,I,M=0;M<O.length;++M){var k=O[M],_=k.name,P=k.info.type,D=L.uniforms[_],K=E.link(k),Z=K+".location",Y;if(D){if(!F(D))continue;if(Mo(D)){var he=D.value;if(g.command(he!==null&&typeof he!="undefined",'missing uniform "'+_+'"',E.commandStr),P===Vi||P===Xi){g.command(typeof he=="function"&&(P===Vi&&(he._reglType==="texture2d"||he._reglType==="framebuffer")||P===Xi&&(he._reglType==="textureCube"||he._reglType==="framebufferCube")),"invalid texture for uniform "+_,E.commandStr);var Be=E.link(he._texture||he.color[0]._texture);y(z,".uniform1i(",Z,",",Be+".bind());"),y.exit(Be,".unbind();")}else if(P===Bi||P===ji||P===Wi){g.optional(function(){g.command(fr(he),"invalid matrix for uniform "+_,E.commandStr),g.command(P===Bi&&he.length===4||P===ji&&he.length===9||P===Wi&&he.length===16,"invalid length for matrix uniform "+_,E.commandStr)});var it=E.global.def("new Float32Array(["+Array.prototype.slice.call(he)+"])"),$e=2;P===ji?$e=3:P===Wi&&($e=4),y(z,".uniformMatrix",$e,"fv(",Z,",false,",it,");")}else{switch(P){case el:g.commandType(he,"number","uniform "+_,E.commandStr),I="1f";break;case Zs:g.command(fr(he)&&he.length===2,"uniform "+_,E.commandStr),I="2f";break;case Js:g.command(fr(he)&&he.length===3,"uniform "+_,E.commandStr),I="3f";break;case e0:g.command(fr(he)&&he.length===4,"uniform "+_,E.commandStr),I="4f";break;case rl:g.commandType(he,"boolean","uniform "+_,E.commandStr),I="1i";break;case tl:g.commandType(he,"number","uniform "+_,E.commandStr),I="1i";break;case o0:g.command(fr(he)&&he.length===2,"uniform "+_,E.commandStr),I="2i";break;case t0:g.command(fr(he)&&he.length===2,"uniform "+_,E.commandStr),I="2i";break;case a0:g.command(fr(he)&&he.length===3,"uniform "+_,E.commandStr),I="3i";break;case r0:g.command(fr(he)&&he.length===3,"uniform "+_,E.commandStr),I="3i";break;case i0:g.command(fr(he)&&he.length===4,"uniform "+_,E.commandStr),I="4i";break;case n0:g.command(fr(he)&&he.length===4,"uniform "+_,E.commandStr),I="4i";break}y(z,".uniform",I,"(",Z,",",fr(he)?Array.prototype.slice.call(he):he,");")}continue}else Y=D.append(E,y)}else{if(!F(Th))continue;Y=y.def(R.uniforms,"[",b.id(_),"]")}P===Vi?(g(!Array.isArray(Y),"must specify a scalar prop for textures"),y("if(",Y,"&&",Y,'._reglType==="framebuffer"){',Y,"=",Y,".color[0];","}")):P===Xi&&(g(!Array.isArray(Y),"must specify a scalar prop for cube maps"),y("if(",Y,"&&",Y,'._reglType==="framebufferCube"){',Y,"=",Y,".color[0];","}")),g.optional(function(){function Kr($n,Ih){E.assert(y,$n,'bad data or missing for uniform "'+_+'".  '+Ih)}function al($n){g(!Array.isArray(Y),"must not specify an array type for uniform"),Kr("typeof "+Y+'==="'+$n+'"',"invalid type, expected "+$n)}function Tn($n,Ih){Array.isArray(Y)?g(Y.length===$n,"must have length "+$n):Kr(R.isArrayLike+"("+Y+")&&"+Y+".length==="+$n,"invalid vector, should have length "+$n,E.commandStr)}function Rh($n){g(!Array.isArray(Y),"must not specify a value type"),Kr("typeof "+Y+'==="function"&&'+Y+'._reglType==="texture'+($n===vh?"2d":"Cube")+'"',"invalid texture type",E.commandStr)}switch(P){case tl:al("number");break;case t0:Tn(2,"number");break;case r0:Tn(3,"number");break;case n0:Tn(4,"number");break;case el:al("number");break;case Zs:Tn(2,"number");break;case Js:Tn(3,"number");break;case e0:Tn(4,"number");break;case rl:al("boolean");break;case o0:Tn(2,"boolean");break;case a0:Tn(3,"boolean");break;case i0:Tn(4,"boolean");break;case Bi:Tn(4,"number");break;case ji:Tn(9,"number");break;case Wi:Tn(16,"number");break;case Vi:Rh(vh);break;case Xi:Rh(kx);break}});var Ye=1;switch(P){case Vi:case Xi:var rt=y.def(Y,"._texture");y(z,".uniform1i(",Z,",",rt,".bind());"),y.exit(rt,".unbind();");continue;case tl:case rl:I="1i";break;case t0:case o0:I="2i",Ye=2;break;case r0:case a0:I="3i",Ye=3;break;case n0:case i0:I="4i",Ye=4;break;case el:I="1f";break;case Zs:I="2f",Ye=2;break;case Js:I="3f",Ye=3;break;case e0:I="4f",Ye=4;break;case Bi:I="Matrix2fv";break;case ji:I="Matrix3fv";break;case Wi:I="Matrix4fv";break}if(y(z,".uniform",I,"(",Z,","),I.charAt(0)==="M"){var St=Math.pow(P-Bi+2,2),sr=E.global.def("new Float32Array(",St,")");Array.isArray(Y)?y("false,(",Ur(St,function(Kr){return sr+"["+Kr+"]="+Y[Kr]}),",",sr,")"):y("false,(Array.isArray(",Y,")||",Y," instanceof Float32Array)?",Y,":(",Ur(St,function(Kr){return sr+"["+Kr+"]="+Y+"["+Kr+"]"}),",",sr,")")}else Ye>1?y(Ur(Ye,function(Kr){return Array.isArray(Y)?Y[Kr]:Y+"["+Kr+"]"})):(g(!Array.isArray(Y),"uniform value must not be an array"),y(Y));y(");")}}function Xe(E,y,L,O){var F=E.shared,R=F.gl,z=F.draw,I=O.draw;function M(){var rt=I.elements,St,sr=y;return rt?((rt.contextDep&&O.contextDynamic||rt.propDep)&&(sr=L),St=rt.append(E,sr)):St=sr.def(z,".",Jo),St&&sr("if("+St+")"+R+".bindBuffer("+Ax+","+St+".buffer.buffer);"),St}function k(){var rt=I.count,St,sr=y;return rt?((rt.contextDep&&O.contextDynamic||rt.propDep)&&(sr=L),St=rt.append(E,sr),g.optional(function(){rt.MISSING&&E.assert(y,"false","missing vertex count"),rt.DYNAMIC&&E.assert(sr,St+">=0","missing vertex count")})):(St=sr.def(z,".",ta),g.optional(function(){E.assert(sr,St+">=0","missing vertex count")})),St}var _=M();function P(rt){var St=I[rt];return St?St.contextDep&&O.contextDynamic||St.propDep?St.append(E,L):St.append(E,y):y.def(z,".",rt)}var D=P(ea),K=P(Ks),Z=k();if(typeof Z=="number"){if(Z===0)return}else L("if(",Z,"){"),L.exit("}");var Y,he;pe&&(Y=P(Qs),he=E.instancing);var Be=_+".type",it=I.elements&&Mo(I.elements);function $e(){function rt(){L(he,".drawElementsInstancedANGLE(",[D,Z,Be,K+"<<(("+Be+"-"+Yu+")>>1)",Y],");")}function St(){L(he,".drawArraysInstancedANGLE(",[D,K,Z,Y],");")}_?it?rt():(L("if(",_,"){"),rt(),L("}else{"),St(),L("}")):St()}function Ye(){function rt(){L(R+".drawElements("+[D,Z,Be,K+"<<(("+Be+"-"+Yu+")>>1)"]+");")}function St(){L(R+".drawArrays("+[D,K,Z]+");")}_?it?rt():(L("if(",_,"){"),rt(),L("}else{"),St(),L("}")):St()}pe&&(typeof Y!="number"||Y>=0)?typeof Y=="string"?(L("if(",Y,">0){"),$e(),L("}else if(",Y,"<0){"),Ye(),L("}")):$e():Ye()}function ht(E,y,L,O,F){var R=Qe(),z=R.proc("body",F);return g.optional(function(){R.commandStr=y.commandStr,R.command=R.link(y.commandStr)}),pe&&(R.instancing=z.def(R.shared.extensions,".angle_instanced_arrays")),E(R,z,L,O),R.compile().body}function wt(E,y,L,O){ur(E,y),L.useVAO?L.drawVAO?y(E.shared.vao,".setVAO(",L.drawVAO.append(E,y),");"):y(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(y(E.shared.vao,".setVAO(null);"),Gr(E,y,L,O.attributes,function(){return!0})),Ct(E,y,L,O.uniforms,function(){return!0}),Xe(E,y,y,L)}function hr(E,y){var L=E.proc("draw",1);ur(E,L),Mr(E,L,y.context),Ar(E,L,y.framebuffer),Rr(E,L,y),Dr(E,L,y.state),at(E,L,y,!1,!0);var O=y.shader.progVar.append(E,L);if(L(E.shared.gl,".useProgram(",O,".program);"),y.shader.program)wt(E,L,y,y.shader.program);else{L(E.shared.vao,".setVAO(null);");var F=E.global.def("{}"),R=L.def(O,".id"),z=L.def(F,"[",R,"]");L(E.cond(z).then(z,".call(this,a0);").else(z,"=",F,"[",R,"]=",E.link(function(I){return ht(wt,E,y,I,1)}),"(",O,");",z,".call(this,a0);"))}Object.keys(y.state).length>0&&L(E.shared.current,".dirty=true;")}function Zn(E,y,L,O){E.batchId="a1",ur(E,y);function F(){return!0}Gr(E,y,L,O.attributes,F),Ct(E,y,L,O.uniforms,F),Xe(E,y,y,L)}function na(E,y,L,O){ur(E,y);var F=L.contextDep,R=y.def(),z="a0",I="a1",M=y.def();E.shared.props=M,E.batchId=R;var k=E.scope(),_=E.scope();y(k.entry,"for(",R,"=0;",R,"<",I,";++",R,"){",M,"=",z,"[",R,"];",_,"}",k.exit);function P(Be){return Be.contextDep&&F||Be.propDep}function D(Be){return!P(Be)}if(L.needsContext&&Mr(E,_,L.context),L.needsFramebuffer&&Ar(E,_,L.framebuffer),Dr(E,_,L.state,P),L.profile&&P(L.profile)&&at(E,_,L,!1,!0),O)L.useVAO?L.drawVAO?P(L.drawVAO)?_(E.shared.vao,".setVAO(",L.drawVAO.append(E,_),");"):k(E.shared.vao,".setVAO(",L.drawVAO.append(E,k),");"):k(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(k(E.shared.vao,".setVAO(null);"),Gr(E,k,L,O.attributes,D),Gr(E,_,L,O.attributes,P)),Ct(E,k,L,O.uniforms,D),Ct(E,_,L,O.uniforms,P),Xe(E,k,_,L);else{var K=E.global.def("{}"),Z=L.shader.progVar.append(E,_),Y=_.def(Z,".id"),he=_.def(K,"[",Y,"]");_(E.shared.gl,".useProgram(",Z,".program);","if(!",he,"){",he,"=",K,"[",Y,"]=",E.link(function(Be){return ht(Zn,E,L,Be,2)}),"(",Z,");}",he,".call(this,a0[",R,"],",R,");")}}function A(E,y){var L=E.proc("batch",2);E.batchId="0",ur(E,L);var O=!1,F=!0;Object.keys(y.context).forEach(function(K){O=O||y.context[K].propDep}),O||(Mr(E,L,y.context),F=!1);var R=y.framebuffer,z=!1;R?(R.propDep?O=z=!0:R.contextDep&&O&&(z=!0),z||Ar(E,L,R)):Ar(E,L,null),y.state.viewport&&y.state.viewport.propDep&&(O=!0);function I(K){return K.contextDep&&O||K.propDep}Rr(E,L,y),Dr(E,L,y.state,function(K){return!I(K)}),(!y.profile||!I(y.profile))&&at(E,L,y,!1,"a1"),y.contextDep=O,y.needsContext=F,y.needsFramebuffer=z;var M=y.shader.progVar;if(M.contextDep&&O||M.propDep)na(E,L,y,null);else{var k=M.append(E,L);if(L(E.shared.gl,".useProgram(",k,".program);"),y.shader.program)na(E,L,y,y.shader.program);else{L(E.shared.vao,".setVAO(null);");var _=E.global.def("{}"),P=L.def(k,".id"),D=L.def(_,"[",P,"]");L(E.cond(D).then(D,".call(this,a0,a1);").else(D,"=",_,"[",P,"]=",E.link(function(K){return ht(na,E,y,K,2)}),"(",k,");",D,".call(this,a0,a1);"))}}Object.keys(y.state).length>0&&L(E.shared.current,".dirty=true;")}function W(E,y){var L=E.proc("scope",3);E.batchId="a2";var O=E.shared,F=O.current;Mr(E,L,y.context),y.framebuffer&&y.framebuffer.append(E,L),Ah(Object.keys(y.state)).forEach(function(z){var I=y.state[z],M=I.append(E,L);fr(M)?M.forEach(function(k,_){L.set(E.next[z],"["+_+"]",k)}):L.set(O.next,"."+z,M)}),at(E,L,y,!0,!0),[Jo,Ks,ta,Qs,ea].forEach(function(z){var I=y.draw[z];I&&L.set(O.draw,"."+z,""+I.append(E,L))}),Object.keys(y.uniforms).forEach(function(z){var I=y.uniforms[z].append(E,L);Array.isArray(I)&&(I="["+I.join()+"]"),L.set(O.uniforms,"["+b.id(z)+"]",I)}),Object.keys(y.attributes).forEach(function(z){var I=y.attributes[z].append(E,L),M=E.scopeAttrib(z);Object.keys(new N).forEach(function(k){L.set(M,"."+k,I[k])})}),y.scopeVAO&&L.set(O.vao,".targetVAO",y.scopeVAO.append(E,L));function R(z){var I=y.shader[z];I&&L.set(O.shader,"."+z,I.append(E,L))}R(qi),R(Hi),Object.keys(y.state).length>0&&(L(F,".dirty=true;"),L.exit(F,".dirty=true;")),L("a1(",E.shared.context,",a0,",E.batchId,");")}function q(E){if(!(typeof E!="object"||fr(E))){for(var y=Object.keys(E),L=0;L<y.length;++L)if(Or.isDynamic(E[y[L]]))return!0;return!1}}function Ne(E,y,L){var O=y.static[L];if(!O||!q(O))return;var F=E.global,R=Object.keys(O),z=!1,I=!1,M=!1,k=E.global.def("{}");R.forEach(function(P){var D=O[P];if(Or.isDynamic(D)){typeof D=="function"&&(D=O[P]=Or.unbox(D));var K=cn(D,null);z=z||K.thisDep,M=M||K.propDep,I=I||K.contextDep}else{switch(F(k,".",P,"="),typeof D){case"number":F(D);break;case"string":F('"',D,'"');break;case"object":Array.isArray(D)&&F("[",D.join(),"]");break;default:F(E.link(D));break}F(";")}});function _(P,D){R.forEach(function(K){var Z=O[K];if(Or.isDynamic(Z)){var Y=P.invoke(D,Z);D(k,".",K,"=",Y,";")}})}y.dynamic[L]=new Or.DynamicVariable(Xs,{thisDep:z,contextDep:I,propDep:M,ref:k,append:_}),delete y.static[L]}function ut(E,y,L,O,F){var R=Qe();R.stats=R.link(F),Object.keys(y.static).forEach(function(I){Ne(R,y,I)}),Mx.forEach(function(I){Ne(R,E,I)});var z=br(E,y,L,O,R);return hr(R,z),W(R,z),A(R,z),t(R.compile(),{destroy:function(){z.shader.program.destroy()}})}return{next:Pe,current:te,procs:function(){var E=Qe(),y=E.proc("poll"),L=E.proc("refresh"),O=E.block();y(O),L(O);var F=E.shared,R=F.gl,z=F.next,I=F.current;O(I,".dirty=false;"),Ar(E,y),Ar(E,L,null,!0);var M;pe&&(M=E.link(pe)),S.oes_vertex_array_object&&L(E.link(S.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var k=0;k<j.maxAttributes;++k){var _=L.def(F.attributes,"[",k,"]"),P=E.cond(_,".buffer");P.then(R,".enableVertexAttribArray(",k,");",R,".bindBuffer(",Xa,",",_,".buffer.buffer);",R,".vertexAttribPointer(",k,",",_,".size,",_,".type,",_,".normalized,",_,".stride,",_,".offset);").else(R,".disableVertexAttribArray(",k,");",R,".vertexAttrib4f(",k,",",_,".x,",_,".y,",_,".z,",_,".w);",_,".buffer=null;"),L(P),pe&&L(M,".vertexAttribDivisorANGLE(",k,",",_,".divisor);")}return L(E.shared.vao,".currentVAO=null;",E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"),Object.keys(_e).forEach(function(D){var K=_e[D],Z=O.def(z,".",D),Y=E.block();Y("if(",Z,"){",R,".enable(",K,")}else{",R,".disable(",K,")}",I,".",D,"=",Z,";"),L(Y),y("if(",Z,"!==",I,".",D,"){",Y,"}")}),Object.keys(re).forEach(function(D){var K=re[D],Z=te[D],Y,he,Be=E.block();if(Be(R,".",K,"("),fr(Z)){var it=Z.length;Y=E.global.def(z,".",D),he=E.global.def(I,".",D),Be(Ur(it,function($e){return Y+"["+$e+"]"}),");",Ur(it,function($e){return he+"["+$e+"]="+Y+"["+$e+"];"}).join("")),y("if(",Ur(it,function($e){return Y+"["+$e+"]!=="+he+"["+$e+"]"}).join("||"),"){",Be,"}")}else Y=O.def(z,".",D),he=O.def(I,".",D),Be(Y,");",I,".",D,"=",Y,";"),y("if(",Y,"!==",he,"){",Be,"}");L(Be)}),E.compile()}(),compile:ut}}function Bx(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var jx=34918,Wx=34919,Sh=35007,Vx=function(l,b){if(!b.ext_disjoint_timer_query)return null;var S=[];function j(){return S.pop()||b.ext_disjoint_timer_query.createQueryEXT()}function Q(pe){S.push(pe)}var U=[];function V(pe){var Re=j();b.ext_disjoint_timer_query.beginQueryEXT(Sh,Re),U.push(Re),se(U.length-1,U.length,pe)}function ie(){b.ext_disjoint_timer_query.endQueryEXT(Sh)}function le(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var me=[];function fe(){return me.pop()||new le}function xe(pe){me.push(pe)}var Ae=[];function se(pe,Re,te){var Pe=fe();Pe.startQueryIndex=pe,Pe.endQueryIndex=Re,Pe.sum=0,Pe.stats=te,Ae.push(Pe)}var we=[],N=[];function X(){var pe,Re,te=U.length;if(te!==0){N.length=Math.max(N.length,te+1),we.length=Math.max(we.length,te+1),we[0]=0,N[0]=0;var Pe=0;for(pe=0,Re=0;Re<U.length;++Re){var ne=U[Re];b.ext_disjoint_timer_query.getQueryObjectEXT(ne,Wx)?(Pe+=b.ext_disjoint_timer_query.getQueryObjectEXT(ne,jx),Q(ne)):U[pe++]=ne,we[Re+1]=Pe,N[Re+1]=pe}for(U.length=pe,pe=0,Re=0;Re<Ae.length;++Re){var _e=Ae[Re],re=_e.startQueryIndex,Ee=_e.endQueryIndex;_e.sum+=we[Ee]-we[re];var We=N[re],Je=N[Ee];Je===We?(_e.stats.gpuTime+=_e.sum/1e6,xe(_e)):(_e.startQueryIndex=We,_e.endQueryIndex=Je,Ae[pe++]=_e)}Ae.length=pe}}return{beginQuery:V,endQuery:ie,pushScopeStats:se,update:X,getNumPendingQueries:function(){return U.length},clear:function(){S.push.apply(S,U);for(var pe=0;pe<S.length;pe++)b.ext_disjoint_timer_query.deleteQueryEXT(S[pe]);U.length=0,S.length=0},restore:function(){U.length=0,S.length=0}}},Xx=16384,Yx=256,Kx=1024,Qx=34962,kh="webglcontextlost",Lh="webglcontextrestored",zh=1,Zx=2,Jx=3;function Ch(l,b){for(var S=0;S<l.length;++S)if(l[S]===b)return S;return-1}function ey(l){var b=cc(l);if(!b)return null;var S=b.gl,j=S.getContextAttributes(),Q=S.isContextLost(),U=ks(S,b);if(!U)return null;var V=Xn(),ie=Bx(),le=U.extensions,me=Vx(S,le),fe=oo(),xe=S.drawingBufferWidth,Ae=S.drawingBufferHeight,se={tick:0,time:0,viewportWidth:xe,viewportHeight:Ae,framebufferWidth:xe,framebufferHeight:Ae,drawingBufferWidth:xe,drawingBufferHeight:Ae,pixelRatio:b.pixelRatio},we={},N={elements:null,primitive:4,count:-1,offset:0,instances:-1},X=G2(S,le),pe=tg(S,ie,b,te),Re=dx(S,le,X,ie,pe);function te(Xe){return Re.destroyBuffer(Xe)}var Pe=dg(S,le,pe,ie),ne=gx(S,V,ie,b),_e=Bg(S,le,X,function(){We.procs.poll()},se,ie,b),re=jg(S,le,X,ie,b),Ee=ux(S,le,X,_e,re,ie),We=Ux(S,V,le,X,pe,Pe,_e,Ee,we,Re,ne,N,se,me,b),Je=bx(S,Ee,We.procs.poll,se,j,le,X),Te=We.next,ve=S.canvas,ee=[],Qe=[],ot=[],Ge=[b.onDestroy],ft=null;function tt(){if(ee.length===0){me&&me.update(),ft=null;return}ft=Nn.next(tt),Dr();for(var Xe=ee.length-1;Xe>=0;--Xe){var ht=ee[Xe];ht&&ht(se,null,0)}S.flush(),me&&me.update()}function ct(){!ft&&ee.length>0&&(ft=Nn.next(tt))}function Tt(){ft&&(Nn.cancel(tt),ft=null)}function yr(Xe){Xe.preventDefault(),Q=!0,Tt(),Qe.forEach(function(ht){ht()})}function Sr(Xe){S.getError(),Q=!1,U.restore(),ne.restore(),pe.restore(),_e.restore(),re.restore(),Ee.restore(),Re.restore(),me&&me.restore(),We.procs.refresh(),ct(),ot.forEach(function(ht){ht()})}ve&&(ve.addEventListener(kh,yr,!1),ve.addEventListener(Lh,Sr,!1));function vt(){ee.length=0,Tt(),ve&&(ve.removeEventListener(kh,yr),ve.removeEventListener(Lh,Sr)),ne.clear(),Ee.clear(),re.clear(),_e.clear(),Pe.clear(),pe.clear(),Re.clear(),me&&me.clear(),Ge.forEach(function(Xe){Xe()})}function Er(Xe){g(!!Xe,"invalid args to regl({...})"),g.type(Xe,"object","invalid args to regl({...})");function ht(F){var R=t({},F);delete R.uniforms,delete R.attributes,delete R.context,delete R.vao,"stencil"in R&&R.stencil.op&&(R.stencil.opBack=R.stencil.opFront=R.stencil.op,delete R.stencil.op);function z(I){if(I in R){var M=R[I];delete R[I],Object.keys(M).forEach(function(k){R[I+"."+k]=M[k]})}}return z("blend"),z("depth"),z("cull"),z("stencil"),z("polygonOffset"),z("scissor"),z("sample"),"vao"in F&&(R.vao=F.vao),R}function wt(F,R){var z={},I={};return Object.keys(F).forEach(function(M){var k=F[M];if(Or.isDynamic(k)){I[M]=Or.unbox(k,M);return}else if(R&&Array.isArray(k)){for(var _=0;_<k.length;++_)if(Or.isDynamic(k[_])){I[M]=Or.unbox(k,M);return}}z[M]=k}),{dynamic:I,static:z}}var hr=wt(Xe.context||{},!0),Zn=wt(Xe.uniforms||{},!0),na=wt(Xe.attributes||{},!1),A=wt(ht(Xe),!1),W={gpuTime:0,cpuTime:0,count:0},q=We.compile(A,na,Zn,hr,W),Ne=q.draw,ut=q.batch,E=q.scope,y=[];function L(F){for(;y.length<F;)y.push(null);return y}function O(F,R){var z;if(Q&&g.raise("context lost"),typeof F=="function")return E.call(this,null,F,0);if(typeof R=="function")if(typeof F=="number")for(z=0;z<F;++z)E.call(this,null,R,z);else if(Array.isArray(F))for(z=0;z<F.length;++z)E.call(this,F[z],R,z);else return E.call(this,F,R,0);else if(typeof F=="number"){if(F>0)return ut.call(this,L(F|0),F|0)}else if(Array.isArray(F)){if(F.length)return ut.call(this,F,F.length)}else return Ne.call(this,F)}return t(O,{stats:W,destroy:function(){q.destroy()}})}var Vt=Ee.setFBO=Er({framebuffer:Or.define.call(null,zh,"framebuffer")});function br(Xe,ht){var wt=0;We.procs.poll();var hr=ht.color;hr&&(S.clearColor(+hr[0]||0,+hr[1]||0,+hr[2]||0,+hr[3]||0),wt|=Xx),"depth"in ht&&(S.clearDepth(+ht.depth),wt|=Yx),"stencil"in ht&&(S.clearStencil(ht.stencil|0),wt|=Kx),g(!!wt,"called regl.clear with no buffer specified"),S.clear(wt)}function Mr(Xe){if(g(typeof Xe=="object"&&Xe,"regl.clear() takes an object as input"),"framebuffer"in Xe)if(Xe.framebuffer&&Xe.framebuffer_reglType==="framebufferCube")for(var ht=0;ht<6;++ht)Vt(t({framebuffer:Xe.framebuffer.faces[ht]},Xe),br);else Vt(Xe,br);else br(null,Xe)}function Ar(Xe){g.type(Xe,"function","regl.frame() callback must be a function"),ee.push(Xe);function ht(){var wt=Ch(ee,Xe);g(wt>=0,"cannot cancel a frame twice");function hr(){var Zn=Ch(ee,hr);ee[Zn]=ee[ee.length-1],ee.length-=1,ee.length<=0&&Tt()}ee[wt]=hr}return ct(),{cancel:ht}}function Rr(){var Xe=Te.viewport,ht=Te.scissor_box;Xe[0]=Xe[1]=ht[0]=ht[1]=0,se.viewportWidth=se.framebufferWidth=se.drawingBufferWidth=Xe[2]=ht[2]=S.drawingBufferWidth,se.viewportHeight=se.framebufferHeight=se.drawingBufferHeight=Xe[3]=ht[3]=S.drawingBufferHeight}function Dr(){se.tick+=1,se.time=at(),Rr(),We.procs.poll()}function ur(){_e.refresh(),Rr(),We.procs.refresh(),me&&me.update()}function at(){return(oo()-fe)/1e3}ur();function Gr(Xe,ht){g.type(ht,"function","listener callback must be a function");var wt;switch(Xe){case"frame":return Ar(ht);case"lost":wt=Qe;break;case"restore":wt=ot;break;case"destroy":wt=Ge;break;default:g.raise("invalid event, must be one of frame,lost,restore,destroy")}return wt.push(ht),{cancel:function(){for(var hr=0;hr<wt.length;++hr)if(wt[hr]===ht){wt[hr]=wt[wt.length-1],wt.pop();return}}}}var Ct=t(Er,{clear:Mr,prop:Or.define.bind(null,zh),context:Or.define.bind(null,Zx),this:Or.define.bind(null,Jx),draw:Er({}),buffer:function(Xe){return pe.create(Xe,Qx,!1,!1)},elements:function(Xe){return Pe.create(Xe,!1)},texture:_e.create2D,cube:_e.createCube,renderbuffer:re.create,framebuffer:Ee.create,framebufferCube:Ee.createCube,vao:Re.createVAO,attributes:j,frame:Ar,on:Gr,limits:X,hasExtension:function(Xe){return X.extensions.indexOf(Xe.toLowerCase())>=0},read:Je,destroy:vt,_gl:S,_refresh:ur,poll:function(){Dr(),me&&me.update()},now:at,stats:ie});return b.onDone(null,Ct),Ct}return ey})});var oa=de((o4,Zh)=>{"use strict";var fo=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],uo=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Jn=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],d0=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Zi=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],dl=e=>Math.hypot(e[0],e[1],e[2]),Sn=e=>{let t=dl(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function Ka(e,t){let r=e.length-1,n=Math.min(Math.max(t,0),1)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],h=[0,0,0];for(let p=0;p<3;p++)h[p]=.5*(2*s[p]+(-i[p]+c[p])*a+(2*i[p]-5*s[p]+4*c[p]-f[p])*a*a+(-i[p]+3*s[p]-3*c[p]+f[p])*a*a*a);return h}function uy(e,t){return Ka(e.map(r=>[r,0,0]),t)[0]}function hy(e,t,r,n){let o={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];o.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},o.restore=()=>{i=s.pop()};let c=(u,v)=>{let m=new Array(9);for(let d=0;d<3;d++)for(let x=0;x<3;x++)m[d*3+x]=u[d*3]*v[x]+u[d*3+1]*v[3+x]+u[d*3+2]*v[6+x];return m},f=u=>[i.r[0]*u[0]+i.r[1]*u[1]+i.r[2]*u[2],i.r[3]*u[0]+i.r[4]*u[1]+i.r[5]*u[2],i.r[6]*u[0]+i.r[7]*u[1]+i.r[8]*u[2]];o.translate=(u,v,m)=>{let d=f([u,v,m]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},o.scale=u=>{i.s*=u},o.rotateY=u=>{let v=Math.cos(u),m=Math.sin(u);i.r=c(i.r,[v,0,m,0,1,0,-m,0,v])},o.vert=(u,v,m)=>{let d=m||o.curMat,x=f(u),w=Sn(f(v));return e.push(x[0]*i.s+i.t[0],x[1]*i.s+i.t[1],x[2]*i.s+i.t[2]),t.push(w[0],w[1],w[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let h=u=>[e[u*3],e[u*3+1],e[u*3+2]],p=u=>[t[u*3],t[u*3+1],t[u*3+2]];return o.tri=(u,v,m)=>{let d=h(u),x=Zi(fo(h(v),d),fo(h(m),d)),w=uo(uo(p(u),p(v)),p(m));d0(x,w)<0?r.push(u,m,v):r.push(u,v,m)},o.box=(u,v,m,d,x,w,T)=>{let C=[[[u,v,m],[d,v,m],[u,x,m],[d,x,m],[0,0,-1]],[[d,v,w],[u,v,w],[d,x,w],[u,x,w],[0,0,1]],[[u,v,w],[u,v,m],[u,x,w],[u,x,m],[-1,0,0]],[[d,v,m],[d,v,w],[d,x,m],[d,x,w],[1,0,0]],[[u,x,m],[d,x,m],[u,x,w],[d,x,w],[0,1,0]],[[u,v,w],[d,v,w],[u,v,m],[d,v,m],[0,-1,0]]];for(let G of C){let $=o.vert(G[0],G[4],T),H=o.vert(G[1],G[4],T),oe=o.vert(G[2],G[4],T),ye=o.vert(G[3],G[4],T);o.tri($,H,oe),o.tri(H,ye,oe)}},o.surface=(u,v,m,d)=>{d=d||{};let x=.001,w=$=>Math.min(1,Math.max(0,$)),T=[],C=[];for(let $=0;$<=v;$++){let H=[],oe=[];for(let ye=0;ye<=m;ye++){let J=$/v,be=ye/m,ue=u(J,be),De=Math.min(1-x,Math.max(x,J)),Ie=d.wrapV?be:Math.min(1-x,Math.max(x,be)),Ce=fo(u(w(De+x),Ie),u(w(De-x),Ie)),ge=d.wrapV?Ie+x:w(Ie+x),nt=d.wrapV?Ie-x:w(Ie-x),Yt=fo(u(De,ge),u(De,nt)),st=Zi(Ce,Yt);dl(st)<1e-14&&(st=d.inside?fo(ue,d.inside(J,be)):[0,1,0]),st=Sn(st),d.inside&&d0(st,fo(ue,d.inside(J,be)))<0&&(st=Jn(st,-1));let Bt=d.mat?d.mat(J,be,ue):null;H.push(o.vert(ue,st,Bt)),d.double&&oe.push(o.vert(ue,Jn(st,-1),Bt))}T.push(H),C.push(oe)}let G=$=>{for(let H=0;H<v;H++)for(let oe=0;oe<m;oe++){let ye=$[H][oe],J=$[H+1][oe],be=$[H][oe+1],ue=$[H+1][oe+1];o.tri(ye,J,be),o.tri(J,ue,be)}};G(T),d.double&&G(C)},o.ellipsoid=(u,v,m,d,x)=>{x=x||{};let w=x.warp||null;o.surface((T,C)=>{let G=T*Math.PI,$=C*Math.PI*2,H=w?w(T,C):1;return[u[0]+v[0]*H*Math.sin(G)*Math.cos($),u[1]+v[1]*H*Math.cos(G),u[2]+v[2]*H*Math.sin(G)*Math.sin($)]},m||10,d||14,{wrapV:!0,inside:()=>u,mat:x.mat})},o.tube=(u,v,m,d,x)=>{x=x||{};let w=40,T=[],C=null;for(let H=0;H<=w;H++){let oe=H/w,ye=Ka(u,Math.max(0,oe-.01)),J=Ka(u,Math.min(1,oe+.01)),be=Sn(fo(J,ye)),ue;if(C)ue=Sn(fo(C,Jn(be,d0(C,be))));else{let De=Math.abs(be[1])<.9?[0,1,0]:[1,0,0];ue=Sn(Zi(be,De))}T.push({N:ue,B:Sn(Zi(be,ue))}),C=ue}let G=H=>{let oe=Math.min(Math.max(H,0),1)*w,ye=Math.min(w-1,Math.floor(oe)),J=oe-ye,be=T[ye],ue=T[ye+1];return{N:Sn(uo(Jn(be.N,1-J),Jn(ue.N,J))),B:Sn(uo(Jn(be.B,1-J),Jn(ue.B,J)))}},$=x.squash||[1,1];o.surface((H,oe)=>{let ye=Ka(u,H),J=G(H),be=v(H),ue=oe*Math.PI*2;return uo(ye,uo(Jn(J.N,Math.cos(ue)*be*$[0]),Jn(J.B,Math.sin(ue)*be*$[1])))},m||12,d||8,{wrapV:!0,inside:H=>Ka(u,H),mat:x.mat})},o.lathe=(u,v,m,d,x)=>{x=x||{};let w=[];for(let T=0;T<u.length-1;T++){let C=u[T+1][0]-u[T][0],G=u[T+1][1]-u[T][1];w.push(Sn([G,-C,0]))}for(let T=0;T<u.length-1;T++){let C=u[T],G=u[T+1],$=T===0||C[2]===1,H=T===u.length-2||G[2]===1,oe=$?w[T]:Sn(uo(w[T-1],w[T])),ye=H?w[T]:Sn(uo(w[T],w[T+1])),J=[],be=[];for(let ue=0;ue<=d;ue++){let De=ue/d*Math.PI*2,Ie=Math.cos(De),Ce=Math.sin(De),ge=x.mat?x.mat(De,C[1]):null,nt=x.mat?x.mat(De,G[1]):null;J.push(o.vert([v+C[0]*Ie,C[1],m+C[0]*Ce],[oe[0]*Ie,oe[1],oe[0]*Ce],ge)),be.push(o.vert([v+G[0]*Ie,G[1],m+G[0]*Ce],[ye[0]*Ie,ye[1],ye[0]*Ce],nt))}for(let ue=0;ue<d;ue++)o.tri(J[ue],J[ue+1],be[ue]),o.tri(J[ue+1],be[ue+1],be[ue])}},o}Zh.exports={createBuilder:hy,catmull:Ka,curve1:uy,sub:fo,add:uo,mul:Jn,dot:d0,cross:Zi,norm:Sn,len:dl}});var rd=de((a4,td)=>{"use strict";var{norm:p0,add:m0,mul:So,sub:dy,cross:Jh}=oa(),ed=Math.PI*2,py=(e,t,r)=>{let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)};function my(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function vy(e,t,r,n,o,a){let i=(u,v)=>[7,u*a,v];e.curMat=[0,0,0],e.box(t-a*1.36,n,r-a*1.36,t+a*1.36,n+.22,r+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,r,56,{mat:i});let s=n+.55,c=o-s,f=20,h=6,p=a*.075;return e.surface((u,v)=>{let m=s+u*c,d=a*(.96-.12*u),x=v*ed,w=v*f%1,T=d-p*4*w*(1-w);return[t+T*Math.cos(x),m,r+T*Math.sin(x)]},10,f*h,{wrapV:!0,inside:u=>[t,s+u*c,r],mat:(u,v)=>[7,v*ed*a,s+u*c]}),e.lathe([[a*.8,o-.02,1],[a*.9,o+.02],[a*.9,o+.07,1],[a*.82,o+.09,1],[a*.86,o+.13],[a*1.06,o+.2],[a*1.22,o+.28],[a*1.28,o+.33,1]],t,r,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,o+.33,r-a*1.42,t+a*1.42,o+.53,r+a*1.42),o+.53}function gy(e,t,r){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,r*.14,1],[t*1.04,r*.14,1],[t*1.04,r*.2],[t*.97,r*.26,1],[t*.95,r*.26,1],[t*.95,r*.8,1],[t*.98,r*.8,1],[t*1.03,r*.86],[t*1.05,r*.92,1],[t*1.05,r,1],[t*.5,r,1],[0,r]],0,0,72)}function xy(e,t,r,n,o){e.save(),e.translate(t,0,r),gy(e,n,o),e.restore()}function yy(e,t,r,n,o,a){let i=my(n),s=a?p0([a[0],0,a[1]]):null;e.save(),e.translate(t,0,r),e.scale(o||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let h=0;h<c;h++){let p=h>=c-2,u=h*2.399963+i()*.5,v=[Math.cos(u),0,Math.sin(u)],m=[-Math.sin(u),0,Math.cos(u)],d=h*.618%1,x=p?.06+i()*.06:.12+.62*d,w=1;if(s){let st=v[0]*s[0]+v[2]*s[2];w=.25+.75*py(-.7,.5,st),x*=w}let T=p?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,C=p?1+i()*.2:.95+i()*.28,G=p?.055:.215+i()*.05,$=.04+i()*.05,H=[v[0]*$,f,v[2]*$],oe=[H[0]+v[0]*Math.sin(x)*T*.92,H[1]+Math.cos(x)*T,H[2]+v[2]*Math.sin(x)*T*.92],ye=[H[0]+v[0]*Math.sin(x*.5)*T*.45,H[1]+T*.5,H[2]+v[2]*Math.sin(x*.5)*T*.45];e.curMat=[4,0,0],e.tube([H,ye,oe],st=>.02-.008*st,8,7);let J=24,be=x*.9+.05,ue=x+(p?.12:(.95+.45*d)*(.35+.65*w)),De=[oe],Ie=[],Ce=oe;for(let st=0;st<J;st++){let Bt=st/J,Rt=be+(ue-be)*Bt*Bt,lr=[v[0]*Math.sin(Rt),Math.cos(Rt),v[2]*Math.sin(Rt)];Ie.push(lr),Ce=m0(Ce,So(lr,C/J)),De.push(Ce)}Ie.push(Ie[Ie.length-1]);let ge=st=>{let Bt=st*J,Rt=Math.min(J-1,Math.floor(Bt)),lr=Bt-Rt;return m0(So(De[Rt],1-lr),So(De[Rt+1],lr))},nt=st=>{let Bt=st*J,Rt=Math.min(J,Math.floor(Bt)),lr=Math.min(J,Rt+1),ir=Bt-Rt;return p0(m0(So(Ie[Rt],1-ir),So(Ie[lr],ir)))},Yt=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((st,Bt)=>{let Rt=Bt*2-1,lr=ge(st),ir=nt(st),En=Yt*st,Cr=m0(So(m,Math.cos(En)),So(Jh(ir,m),Math.sin(En)));Cr=p0(dy(Cr,So(ir,Cr[0]*ir[0]+Cr[1]*ir[1]+Cr[2]*ir[2])));let Wr=p0(Jh(Cr,ir)),on=G*Math.pow(Math.sin(Math.PI*Math.pow(st,.72)),.85),Vn=.3*on*Math.abs(Rt)+.012*Math.sin(st*40+Rt*2)*Math.abs(Rt)*(p?0:1),je=-.1*on*Rt*Rt*Rt*Rt,Ue=Vn+je;return[lr[0]+Cr[0]*Rt*on+Wr[0]*Ue,lr[1]+Cr[1]*Rt*on+Wr[1]*Ue,lr[2]+Cr[2]*Rt*on+Wr[2]*Ue]},14,8,{double:!0,mat:(st,Bt)=>[2,Bt*2-1,st]})}e.restore()}td.exports={addFlutedColumn:vy,addStatue:xy,addPlant:yy}});var aa=de((i4,id)=>{"use strict";var ce={xc:7,r:2.5,spring:4.7};ce.x0=ce.xc-ce.r;ce.x1=ce.xc+ce.r;ce.top=ce.spring+ce.r;var Jr=.06,tr=.1,nd=.08,v0=ce.r,g0=[ce.x0+v0/3,ce.x0+2*v0/3,ce.xc+v0/3,ce.xc+2*v0/3],Qa=.28,pl=[.95,1.65,2.35,3.05,3.75],od=[1.05,1.8],Ji=[8,0,0],vn=[0,0,0];function kn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function Za(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function x0(e,t,r,n,o,a,i=48,s=0,c=Math.PI){let f=(h,p,u)=>[ce.xc+p*Math.cos(h),ce.spring+p*Math.sin(h),u];for(let h=0;h<i;h++){let p=s+(c-s)*h/i,u=s+(c-s)*(h+1)/i,v=(p+u)/2;Za(e,f(p,t,o),f(u,t,o),f(u,r,o),f(p,r,o),[0,0,1],a),Za(e,f(p,r,n),f(u,r,n),f(u,t,n),f(p,t,n),[0,0,-1],a),Za(e,f(p,t,n),f(u,t,n),f(u,t,o),f(p,t,o),[-Math.cos(v),-Math.sin(v),0],a),Za(e,f(u,r,n),f(p,r,n),f(p,r,o),f(u,r,o),[Math.cos(v),Math.sin(v),0],a)}}function by(e){let n=a=>[ce.xc+ce.r*Math.cos(a),ce.spring+ce.r*Math.sin(a)],o=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?ce.r/Math.abs(i):1/0,f=s>1e-6?(8-ce.spring)/s:1/0,h=Math.min(c,f);return[Math.min(ce.x1,Math.max(ce.x0,ce.xc+i*h)),Math.min(8,ce.spring+s*h)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),h=o(i),p=o(s);for(let[v,m]of[[.35,1],[-.35,-1]])Za(e,[c[0],c[1],v],[f[0],f[1],v],[p[0],p[1],v],[h[0],h[1],v],[0,0,m],vn);let u=(i+s)/2;Za(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],vn)}}function wy(e){kn(e,-.35,0,-.35,ce.x0,8,.35,vn),kn(e,ce.x1,0,-.35,14+.35,8,.35,vn),by(e),ad(e)}function ad(e){kn(e,ce.x0-.32,.3,.35,ce.x0,ce.spring,.35+.07,vn),kn(e,ce.x1,.3,.35,ce.x1+.32,ce.spring,.35+.07,vn),kn(e,ce.x0-.32-.05,0,.35,ce.x0,.3,.35+.07+.04,vn),kn(e,ce.x1,0,.35,ce.x1+.32+.05,.3,.35+.07+.04,vn),kn(e,ce.x0-.32-.06,ce.spring-.12,.35,ce.x0,ce.spring,.35+.07+.05,vn),kn(e,ce.x1,ce.spring-.12,.35,ce.x1+.32+.06,ce.spring,.35+.07+.05,vn),x0(e,ce.r,ce.r+.32,.35,.35+.07,vn),x0(e,ce.r+.32,ce.r+.32+.06,.35,.35+.07+.03,vn),kn(e,ce.xc-.22,ce.top-.08,.35,ce.xc+.22,ce.top+.32+.12,.35+.07+.06,vn)}function _y(e,t){t=t||"all";let r=t==="all",n=r||t==="fixed",o=-nd/2,a=nd/2,i=(u,v,m,d,x=0)=>kn(e,u-x,v,o,m+x,d,a,Ji),s=u=>ce.spring+Math.sqrt(Math.max(0,ce.r*ce.r-(u-ce.xc)*(u-ce.xc))),c=t==="right"?ce.xc:ce.x0,f=t==="left"?ce.xc:ce.x1,h=u=>r||t==="left"&&u<ce.xc||t==="right"&&u>ce.xc,p=r?null:ce.spring-.06;if(n){i(ce.x0,0,ce.x0+tr,ce.spring),i(ce.x1-tr,0,ce.x1,ce.spring),x0(e,ce.r-tr,ce.r,o,a,Ji,64),i(ce.x0,0,ce.x1,.05),i(ce.x0,ce.spring-.06,ce.x1,ce.spring+.06);for(let u of od)x0(e,u-Jr/2,u+Jr/2,o,a,Ji,48)}if(r){i(ce.x0,0,ce.x1,Qa),i(ce.xc-tr/2,0,ce.xc+tr/2,ce.top-tr*.5);for(let u of g0)i(u-Jr/2,Qa,u+Jr/2,s(u)-tr*.5);for(let u of pl)i(ce.x0,u-Jr/2,ce.x1,u+Jr/2)}else if(t==="fixed"){i(ce.xc-tr/2,ce.spring+.06,ce.xc+tr/2,ce.top-tr*.5);for(let u of g0)i(u-Jr/2,ce.spring+.06,u+Jr/2,s(u)-tr*.5)}else{let u=t==="left"?ce.x0+tr:ce.x1-tr;i(Math.min(u,u+(t==="left"?tr*.8:-tr*.8)),.05,Math.max(u,u+(t==="left"?tr*.8:-tr*.8)),p),i(c,.05,f,Qa),i(c,p-.07,f,p);let v=t==="left"?ce.xc-tr/2:ce.xc;i(v,.05,v+tr/2,p);for(let m of g0)h(m)&&i(m-Jr/2,Qa,m+Jr/2,p-.07);for(let m of pl)i(c,m-Jr/2,f,m+Jr/2)}for(let u of[-1,1]){let v=ce.xc+u*.16;h(v)&&(kn(e,v-.02,1.05,a,v+.02,1.13,a+.06,Ji),kn(e,v-(u>0?0:.14),1.07,a+.05,v+(u>0?.14:0),1.11,a+.08,Ji))}}function Ey(e){e=e||"all";let t=[],r=0,{x0:n,x1:o,xc:a,r:i,spring:s}=ce;if(e!=="fixed"){let f=e==="right"?a:n,h=e==="left"?a:o;if(t.push([f,0,r],[h,0,r],[h,s,r],[f,0,r],[h,s,r],[f,s,r]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let h=Math.PI*f/c,p=Math.PI*(f+1)/c;t.push([a,s,r],[a+i*Math.cos(h),s+i*Math.sin(h),r],[a+i*Math.cos(p),s+i*Math.sin(p),r])}return t}var Ft=e=>e.toFixed(4);function My(){let e=g0.map(n=>`vb = max(vb, barCover(abs(q.x - ${Ft(n)}), ${Ft(Jr/2)}, soft));`).join(`
		`),t=pl.map(n=>`hb = max(hb, barCover(abs(q.y - ${Ft(n)}), ${Ft(Jr/2)}, soft));`).join(`
		`),r=od.map(n=>`ab = max(ab, barCover(abs(rr - ${Ft(n)}), ${Ft(Jr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Ft(ce.x0)} - soft, ${Ft(ce.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Ft(ce.x1)} - soft, ${Ft(ce.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Ft(ce.xc)}, ${Ft(ce.spring)}));
		float arch = q.y < ${Ft(ce.spring)} ? 1.0 : 1.0 - smoothstep(${Ft(ce.r)} - soft, ${Ft(ce.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Ft(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Ft(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Ft(ce.xc)}, ${Ft(ce.spring)}));
		float vb = barCover(abs(q.x - ${Ft(ce.xc)}), ${Ft(tr/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Ft(ce.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Ft(Qa)} - soft, ${Ft(Qa)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Ft(ce.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${r}
		ab = q.y > ${Ft(ce.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Ft(ce.x0+tr/2)}), ${Ft(tr/2)}, soft),
			barCover(abs(q.x - ${Ft(ce.x1-tr/2)}), ${Ft(tr/2)}, soft));
		frame = q.y < ${Ft(ce.spring)} ? frame : barCover(abs(rr - ${Ft(ce.r-tr/2)}), ${Ft(tr/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}id.exports={addEntranceWall:wy,addSurround:ad,addFrames:_y,glassPanes:Ey,doorLightGLSL:My,DOOR:ce,WALL:.35}});var ei=de((s4,hd)=>{"use strict";var sa=1.1583333333333334,ca=(13.05-8*.16)/9,vl=sa+.16,gl=ca+.16,ho=14/2-7.75/2,Ln=15,es=ho+7.75,ko=Ln+13.05,gn=.3,po={y:8+.18,inset:.15},ia={y:8+.36,inset:gn},xl=8+.2,y0=8+.62,yl=8+.9,bl=.016,fd=.28,ud=.66,Ay=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>r/t)})(),Ty=[9,0,0],$r=[10,0,0];function Ja(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function en(e,t,r,n,o,a,i){Ja(e,[t,a,r],[n,a,r],[n,a,o],[t,a,o],[0,-1,0],i)}function ml(e,t,r,n,o,a,i,s){Ja(e,[t,a,r],[n,a,r],[n,i,r],[t,i,r],[0,0,1],s),Ja(e,[n,a,o],[t,a,o],[t,i,o],[n,i,o],[0,0,-1],s),Ja(e,[t,a,o],[t,a,r],[t,i,r],[t,i,o],[1,0,0],s),Ja(e,[n,a,r],[n,a,o],[n,i,o],[n,i,r],[-1,0,0],s)}function sd(e,t,r,n,o){en(e,t[0],t[1],t[2],r[1],n,o),en(e,t[0],r[3],t[2],t[3],n,o),en(e,t[0],r[1],r[0],r[3],n,o),en(e,r[2],r[1],t[2],r[3],n,o)}var cd=e=>ho+e*vl,ld=e=>Ln+e*gl;function Sy(e,t,r=48){let n=[ho-gn,Ln-gn,es+gn,ko+gn],o=(f,h)=>[f[0]+h,f[1]+h,f[2]-h,f[3]-h],a=o(n,po.inset),i=o(n,ia.inset);en(e,0,0,14,n[1],8,t),en(e,0,n[3],14,r,8,t),en(e,0,n[1],n[0],n[3],8,t),en(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],$r),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,$r),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],$r),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],$r),ml(e,...n.slice(0,2),...n.slice(2),8,po.y,$r),sd(e,n,a,po.y,$r),ml(e,...a.slice(0,2),...a.slice(2),po.y,ia.y,$r),sd(e,a,i,ia.y,$r);for(let f=1;f<6;f++){let h=cd(f)-.16;e.box(h,xl,Ln,h+.16,ia.y,ko,$r)}for(let f=1;f<9;f++){let h=ld(f)-.16;e.box(ho,xl,h,es,ia.y,h+.16,$r)}for(let f=0;f<9;f++)for(let h=0;h<6;h++){let p=cd(h),u=ld(f);ml(e,p,u,p+sa,u+ca,ia.y,yl,$r),en(e,p,u,p+sa,u+ca,yl,Ty),ky(e,p+sa/2,u+ca/2,sa/2,ca/2)}}function ky(e,t,r,n,o){let a=y0,i=bl;en(e,t-n,r-i,t+n,r+i,a,$r),en(e,t-i,r-o,t+i,r+o,a,$r);for(let s of[1,-1]){let c=Math.hypot(n,o),f=n/c,h=s*o/c,p=-h*i,u=f*i;Ja(e,[t-f*c+p,a,r-h*c+u],[t+f*c+p,a,r+h*c+u],[t+f*c-p,a,r+h*c-u],[t-f*c-p,a,r-h*c-u],[0,-1,0],$r)}for(let s of[fd,ud]){let c=s*n,f=s*o;en(e,t-c-i,r-f-i,t+c+i,r-f+i,a,$r),en(e,t-c-i,r+f-i,t+c+i,r+f+i,a,$r),en(e,t-c-i,r-f+i,t-c+i,r+f-i,a,$r),en(e,t+c-i,r-f+i,t+c+i,r+f-i,a,$r)}}var lt=e=>e.toFixed(4);function Ly(){return`
	const vec3 SKY_SUN = vec3(${Ay.map(lt).join(", ")});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${lt(ho)}, ${lt(Ln)});
		vec2 pitch = vec2(${lt(vl)}, ${lt(gl)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${lt(5)} || cell.y > ${lt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${lt(sa)}, ${lt(ca)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${lt(bl)} - soft, ${lt(bl)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${lt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${lt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${lt(po.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${lt(xl)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${lt(ia.y)} - p.y) / L.y)).xz;
		float tG = (${lt(y0)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${lt(yl)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${lt(ho-gn)}, ${lt(Ln-gn)}, ${lt(es+gn)}, ${lt(ko+gn)}), soft)
		           * rectOpen(q1, vec4(${lt(ho-gn+po.inset)}, ${lt(Ln-gn+po.inset)}, ${lt(es+gn-po.inset)}, ${lt(ko+gn-po.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${lt(ho)}, ${lt(Ln)});
		vec2 pitch = vec2(${lt(vl)}, ${lt(gl)});
		vec2 paneHalf = vec2(${lt(sa/2)}, ${lt(ca/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${lt(fd)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${lt(ud)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${lt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${lt(y0)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${lt(ho)}, ${lt(Ln)}, ${lt(es)}, ${lt(ko)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${lt(Ln-3)}, ${lt(Ln+2)}, p.z)
		        * (1.0 - smoothstep(${lt(ko-2)}, ${lt(ko+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${lt(7.75/2)}, ${lt(14/2)}, abs(p.x - ${lt(14/2)}));
		return z * x;
	}`}hd.exports={addSkylight:Sy,skylightGLSL:Ly,Z_START:Ln,Z_END:ko,GLASS_Y:y0,HEIGHT:8}});var xn=de((c4,gd)=>{"use strict";var ri=aa(),Ml=8,rr=.35,Se={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Ml},dd=(Se.z1-Se.z0)/2,wl=Se.crown-Se.spring,El=(wl*wl+dd*dd)/(2*wl),Al=Se.crown-El;function ti(e){let t=e-Se.zc;return Al+Math.sqrt(Math.max(0,El*El-t*t))}var Ke={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},qn=Array.from({length:Ke.count},(e,t)=>Ke.first+t*Ke.pitch),md=qn.slice(1).map(e=>e-Ke.pitch/2),zy=[qn[0],qn[2],qn[4]],w0=[qn[1],qn[3]],ln={r:1.3,sill:.62,spring:3.3},qt=[0,0,0],ts=[11,0,0],Lo=[10,0,0],rs=[8,0,0];function Ir(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function fn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function ns(e,t){let{u0:r,u1:n,w0:o,w1:a,top:i,holes:s,mat:c}=t,f=new Set([r,n]);for(let d of s){f.add(d.u0),f.add(d.u1);let x=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let w=1;w<x;w++)f.add(d.u0+(d.u1-d.u0)*w/x)}for(let d of t.cuts||[])f.add(d);let h=t.topStep||.5;for(let d=r;d<n;d+=h)f.add(d);let p=[...f].filter(d=>d>=r-1e-9&&d<=n+1e-9).sort((d,x)=>d-x),u=(d,x)=>d.bot?d.bot(x):d.bottom,v=(d,x)=>{let w=i(d),T=x.map($=>[Math.max(0,u($,d)),Math.min($.head(d),w)]).filter($=>$[1]>$[0]).sort(($,H)=>$[0]-H[0]),C=[],G=0;for(let $ of T)$[0]>G+1e-6&&C.push([G,$[0]]),G=Math.max(G,$[1]);return w>G+1e-6&&C.push([G,w]),C},m=(d,x,w)=>[d,x,w];for(let d=0;d<p.length-1;d++){let x=p[d],w=p[d+1],T=(x+w)/2,C=s.filter(J=>T>J.u0&&T<J.u1),G=C.length?Math.max(x,Math.max(...C.map(J=>J.u0))+1e-7):x,$=C.length?Math.min(w,Math.min(...C.map(J=>J.u1))-1e-7):w,H=v(G,C),oe=v($,C),ye=Math.min(H.length,oe.length);for(let J=0;J<ye;J++){let[be,ue]=H[J],[De,Ie]=oe[J];ue-be<1e-6&&Ie-De<1e-6||(Ir(e,m(x,be,a),m(w,De,a),m(w,Ie,a),m(x,ue,a),[0,0,1],c),t.frontOnly||Ir(e,m(w,De,o),m(x,be,o),m(x,ue,o),m(w,Ie,o),[0,0,-1],c))}}t.noEnds||(Ir(e,m(r,0,o),m(r,0,a),m(r,i(r),a),m(r,i(r),o),[-1,0,0],c),Ir(e,m(n,0,a),m(n,0,o),m(n,i(n),o),m(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let x=d.mat||t.revealMat||c,w=Math.max(0,u(d,d.u0+1e-7)),T=Math.max(0,u(d,d.u1-1e-7)),C=Math.min(d.head(d.u0+1e-7),i(d.u0)),G=Math.min(d.head(d.u1-1e-7),i(d.u1));C>w+1e-6&&Ir(e,m(d.u0,w,a),m(d.u0,w,o),m(d.u0,C,o),m(d.u0,C,a),[1,0,0],x),G>T+1e-6&&Ir(e,m(d.u1,T,o),m(d.u1,T,a),m(d.u1,G,a),m(d.u1,G,o),[-1,0,0],x);let $=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let H=0;H<$;H++){let oe=d.u0+(d.u1-d.u0)*H/$,ye=d.u0+(d.u1-d.u0)*(H+1)/$,J=Math.max(oe,d.u0+1e-7),be=Math.min(ye,d.u1-1e-7),ue=Math.min(d.head(J),i(oe)),De=Math.min(d.head(be),i(ye));if(!(ue>=i(oe)-1e-6&&De>=i(ye)-1e-6)){let ge=ye-oe,nt=De-ue,Yt=Math.hypot(ge,nt)||1;Ir(e,m(oe,ue,o),m(ye,De,o),m(ye,De,a),m(oe,ue,a),[nt/Yt,-ge/Yt,0],x)}let Ie=u(d,J),Ce=u(d,be);if(Ie>1e-6||Ce>1e-6){let ge=ye-oe,nt=Ce-Ie,Yt=Math.hypot(ge,nt)||1;Ir(e,m(ye,Ce,o),m(oe,Ie,o),m(oe,Ie,a),m(ye,Ce,a),[-nt/Yt,ge/Yt,0],x)}}}}var _l=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function Cy(e,t){let r=ln.r,n=ln.sill,o=ln.spring,a=Se.z0,i=24,s=(v,m,d)=>[t+Math.cos(v)*m,d,a-Math.sin(v)*m];for(let v=0;v<i;v++){let m=Math.PI*v/i,d=Math.PI*(v+1)/i,x=[-Math.cos(m),0,Math.sin(m)],w=[-Math.cos(d),0,Math.sin(d)],T=[e.vert(s(m,r,n),x,qt),e.vert(s(d,r,n),w,qt),e.vert(s(d,r,o),w,qt),e.vert(s(m,r,o),x,qt)];e.tri(T[0],T[1],T[2]),e.tri(T[0],T[2],T[3])}let c=12,f=(v,m)=>[t+Math.cos(v)*Math.cos(m)*r,o+Math.sin(m)*r,a-Math.sin(v)*Math.cos(m)*r],h=(v,m)=>[-Math.cos(v)*Math.cos(m),-Math.sin(m),Math.sin(v)*Math.cos(m)];for(let v=0;v<i;v++)for(let m=0;m<c;m++){let d=Math.PI*v/i,x=Math.PI*(v+1)/i,w=Math.PI/2*m/c,T=Math.PI/2*(m+1)/c,C=[e.vert(f(d,w),h(d,w),Lo),e.vert(f(x,w),h(x,w),Lo),e.vert(f(x,T),h(x,T),Lo),e.vert(f(d,T),h(d,T),Lo)];e.tri(C[0],C[1],C[2]),e.tri(C[0],C[2],C[3])}for(let v=1;v<8;v++){let m=Math.PI*v/8,d=[];for(let x=0;x<=10;x++){let w=Math.PI/2*x/10*.97;d.push(f(m,w).map((T,C)=>T-h(m,w)[C]*.02))}e.tube(d,x=>.035*(1-x*.6),12,6,{mat:()=>Lo})}let p=e.vert([t,n,a],[0,1,0],qt);for(let v=0;v<i;v++){let m=Math.PI*v/i,d=Math.PI*(v+1)/i;e.tri(p,e.vert(s(m,r,n),[0,1,0],qt),e.vert(s(d,r,n),[0,1,0],qt))}fn(e,t-r-.12,n-.1,a,t+r+.12,n+.02,a+.12,qt),fn(e,t-r-.16,n-.2,a,t+r+.16,n-.1,a+.07,qt);let u=.16;for(let v=0;v<i;v++){let m=Math.PI*v/i,d=Math.PI*(v+1)/i,x=(w,T,C)=>[t+Math.cos(w)*T,o+Math.sin(w)*T,C];Ir(e,x(m,r,a+.05),x(d,r,a+.05),x(d,r+u,a+.05),x(m,r+u,a+.05),[0,0,1],qt),Ir(e,x(m,r+u,a),x(d,r+u,a),x(d,r+u,a+.05),x(m,r+u,a+.05),[Math.cos((m+d)/2),Math.sin((m+d)/2),0],qt),Ir(e,x(m,r,a),x(d,r,a),x(d,r,a+.05),x(m,r,a+.05),[-Math.cos((m+d)/2),-Math.sin((m+d)/2),0],qt)}for(let v of[-1,1]){let m=t+v*r,d=t+v*(r+u);fn(e,m,n,a,d,o,a+.05,qt),fn(e,m-v*.02,o-.12,a,d+v*.06,o,a+.09,qt)}fn(e,t-.11,o+r-.04,a,t+.11,o+r+u+.1,a+.09,qt),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>qt})}var Ry=ln.sill+.4,Iy=Se.z0-.62;function Py(e){Ir(e,[14,0,Se.z0-rr],[Se.x1+rr,0,Se.z0-rr],[Se.x1+rr,0,Se.z1+rr],[14,0,Se.z1+rr],[0,1,0],qt),e.curMat=ts,ns(e,{u0:14+rr,u1:Se.x1+2*rr,w0:Se.z0-2*rr,w1:Se.z0,top:()=>Se.spring,holes:w0.map(f=>({u0:f-ln.r,u1:f+ln.r,bottom:ln.sill,head:_l(f,ln.r,ln.spring),noReveal:!0})),mat:ts,cuts:[Se.x1]});for(let f of w0)Cy(e,f);e.save(),e.translate(0,0,Se.z1),e.rotateY(Math.PI),e.translate(-(Se.x1+2*rr),0,-2*rr);let t=f=>Se.x1+2*rr-f;ns(e,{u0:t(Se.x1+2*rr),u1:t(13.65),w0:0,w1:2*rr,top:()=>Se.spring,holes:qn.map(f=>({u0:t(f+Ke.halfW),u1:t(f-Ke.halfW),bottom:Ke.sill,head:_l(t(f),Ke.halfW,Ke.spring)})),mat:ts,revealMat:qt}),e.restore(),e.save(),e.translate(Se.x1,0,0),e.rotateY(-Math.PI/2);let r=ri.DOOR,n=Se.zc,o=r.r;ns(e,{u0:Se.z0-2*rr,u1:Se.z1+2*rr,w0:-2*rr,w1:0,top:f=>f<Se.z0||f>Se.z1?Se.spring:ti(f),topStep:.15,holes:[{u0:n-o,u1:n+o,bottom:0,head:_l(n,o,r.spring)}],mat:ts,revealMat:qt}),e.restore(),e.save(),e.translate(14+rr,0,0),e.rotateY(-Math.PI/2),ns(e,{u0:Se.z0,u1:Se.z1,w0:-0,w1:2*rr,top:()=>Ml,topStep:.15,holes:[{u0:Se.z0,u1:Se.z1,bottom:0,head:f=>ti(f)}],mat:ts,revealMat:qt}),e.restore();let a=14+rr,i=Math.ceil((Se.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let h=a+(Se.x1-a)*f/i,p=[];for(let u=0;u<=s;u++){let v=Se.z0+(Se.z1-Se.z0)*u/s,m=ti(v),d=[0,Al-m,Se.zc-v],x=Math.hypot(d[1],d[2]);p.push(e.vert([h,m,v],[0,d[1]/x,d[2]/x],Lo))}c.push(p)}for(let f=0;f<i;f++)for(let h=0;h<s;h++)e.tri(c[f][h],c[f+1][h],c[f][h+1]),e.tri(c[f+1][h],c[f+1][h+1],c[f][h+1])}function pd(e,t,r,n){let a=[];for(let i=0;i<=32;i++){let s=Se.z0+(Se.z1-Se.z0)*i/32,c=ti(s),f=Al-c,h=Se.zc-s,p=Math.hypot(f,h),u=[c+f/p*n,s+h/p*n];a.push({y:c,z:s,iy:u[0],iz:u[1],n:[0,f/p,h/p]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Ir(e,[t-r,s.iy,s.iz],[t+r,s.iy,s.iz],[t+r,c.iy,c.iz],[t-r,c.iy,c.iz],s.n,qt),Ir(e,[t-r,s.y,s.z],[t-r,s.iy,s.iz],[t-r,c.iy,c.iz],[t-r,c.y,c.z],[-1,0,0],qt),Ir(e,[t+r,s.iy,s.iz],[t+r,s.y,s.z],[t+r,c.y,c.z],[t+r,c.iy,c.iz],[1,0,0],qt)}}function b0(e,t,r,n){let i=r,s=r+n*.16;fn(e,t-.28,0,i,t+.28,Se.spring-.3,s,qt),fn(e,t-.28-.06,0,i,t+.28+.06,.32,r+n*(.16+.05),qt),fn(e,t-.28-.05,Se.spring-.3,i,t+.28+.05,Se.spring-.1,r+n*(.16+.05),qt),fn(e,t-.28-.1,Se.spring-.1,i,t+.28+.1,Se.spring,r+n*(.16+.1),qt)}function Oy(e,t){let r=ti(Se.zc),n=[[0,r-.13,1],[.05,r-.125],[.12,r-.1],[.16,r-.06,1],[.22,r-.05],[.3,r-.075],[.4,r-.06],[.48,r-.03,1],[.55,r-.035],[.7,r-.025],[.82,r-.012,1],[.95,r+.03]];e.lathe(n,t,Se.zc,48,{mat:()=>Lo});for(let o=0;o<8;o++){let a=o*Math.PI/4,i=t+Math.cos(a)*.32,s=Se.zc+Math.sin(a)*.32;e.save(),e.translate(i,r-.07,s),e.rotateY(-a),e.curMat=Lo,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function Ny(e){e.curMat=qt;for(let[t,r]of[[Se.z0,1],[Se.z1,-1]])fn(e,14.35,Se.spring-.12,t,Se.x1,Se.spring,t+r*.1,qt),fn(e,14.35,Se.spring-.04,t,Se.x1,Se.spring+.05,t+r*.18,qt);for(let[t,r]of[[Se.z0,1],[Se.z1,-1]])fn(e,14.35,0,t,Se.x1,.42,t+r*.12,qt),fn(e,14.35,.42,t,Se.x1,.5,t+r*.07,qt);for(let t of md)pd(e,t,.24,.16),b0(e,t,Se.z0,1),b0(e,t,Se.z1,-1);for(let t of[14.35+.28,Se.x1-.28])pd(e,t,.28,.22),b0(e,t,Se.z0,1),b0(e,t,Se.z1,-1);for(let t of qn)Oy(e,t)}function Fy(e){let t=Se.z1+rr,r=t-.04,n=t+.04,o=(s,c,f,h)=>fn(e,s,c,r,f,h,n,rs),a=Ke.halfW,i=(s,c,f,h,p,u)=>{let v=(m,d,x)=>[s+d*Math.cos(m),Ke.spring+d*Math.sin(m),x];for(let m=0;m<u;m++){let d=h+(p-h)*m/u,x=h+(p-h)*(m+1)/u;Ir(e,v(d,c,r),v(x,c,r),v(x,f,r),v(d,f,r),[0,0,-1],rs),Ir(e,v(d,f,n),v(x,f,n),v(x,c,n),v(d,c,n),[0,0,1],rs)}};for(let s of qn){let c=s-a,f=s+a;o(c,Ke.sill,c+.07,Ke.spring),o(f-.07,Ke.sill,f,Ke.spring),o(c,Ke.sill,f,Ke.sill+.07),o(c,Ke.spring-.04,f,Ke.spring+.04);for(let p of[-.5,0,.5])o(s+p*a-.022,Ke.sill,s+p*a+.022,Ke.spring);let h=6;for(let p=1;p<h;p++){let u=Ke.sill+(Ke.spring-Ke.sill)*p/h;o(c,u-.02,f,u+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let p=1;p<6;p++){let u=Math.PI*p/6,v=Math.cos(u),m=Math.sin(u),d=.02,x=(w,T)=>[s+v*w-m*d*T,Ke.spring+m*w+v*d*T];Ir(e,[...x(.44,-1),r],[...x(a-.05,-1),r],[...x(a-.05,1),r],[...x(.44,1),r],[0,0,-1],rs),Ir(e,[...x(.44,1),n],[...x(a-.05,1),n],[...x(a-.05,-1),n],[...x(.44,-1),n],[0,0,1],rs)}}}function Dy(){let e=[],t=Se.z1+rr;for(let r of qn){let n=r-Ke.halfW,o=r+Ke.halfW;e.push([n,Ke.sill,t],[o,Ke.sill,t],[o,Ke.spring,t],[n,Ke.sill,t],[o,Ke.spring,t],[n,Ke.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([r,Ke.spring,t],[r+Ke.halfW*Math.cos(i),Ke.spring+Ke.halfW*Math.sin(i),t],[r+Ke.halfW*Math.cos(s),Ke.spring+Ke.halfW*Math.sin(s),t])}}return e}function vd(e,t){e.save(),e.translate(Se.x1+rr,0,Se.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function Gy(e){vd(e,()=>{ri.addSurround(e),ri.addFrames(e,"fixed")})}function $y(e){return ri.glassPanes(e||"fixed").map(([r,n,o])=>[Se.x1+rr-o,n,Se.zc-7+r])}function qy(e){Py(e),Ny(e),Fy(e),Gy(e),e.curMat=[0,0,0]}var Hy={x:Se.x1+rr,zLo:Se.zc-ri.DOOR.r,zHi:Se.zc+ri.DOOR.r},_t=e=>e.toFixed(4);function Uy(){return`
	const vec3 WIN_SKY = vec3(0.0, 0.58, 0.81);

	float winBar(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the window wall is at (x, y) on its plane, 0..1
	float winOpen(vec2 q, float soft) {
		float k = floor((q.x - ${_t(Ke.first)}) / ${_t(Ke.pitch)} + 0.5);
		if (k < 0.0 || k > ${_t(Ke.count-1)}) return 0.0;
		float dx = q.x - (${_t(Ke.first)} + k * ${_t(Ke.pitch)});
		float side = 1.0 - smoothstep(${_t(Ke.halfW)} - soft, ${_t(Ke.halfW)} + soft, abs(dx));
		float sill = smoothstep(${_t(Ke.sill)} - soft, ${_t(Ke.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${_t(Ke.spring)}));
		float head = q.y < ${_t(Ke.spring)} ? 1.0 : 1.0 - smoothstep(${_t(Ke.halfW)} - soft, ${_t(Ke.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${_t(Ke.halfW*.5)}), 0.022, soft));
		float rowH = ${_t((Ke.spring-Ke.sill)/6)};
		float ry = (q.y - ${_t(Ke.sill)}) / rowH;
		cover = max(cover, q.y < ${_t(Ke.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${_t(Ke.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${_t(Se.x0)} || p.z < ${_t(Se.z0-.1)} || p.z > ${_t(Se.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${_t(Se.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${_t(Se.z1+2*rr)} - p.z) / WIN_SKY.z;
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
		${w0.map(e=>`{ float d = abs(p.x - ${_t(e)}); if (d < best) { best = d; lamp = vec3(${_t(e)}, ${_t(ln.spring+.55)}, ${_t(Se.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${_t(Se.z0+1.6)} || p.z < ${_t(Se.z0-ln.r-.1)} || p.x < ${_t(Se.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${_t(ln.r)}, ${_t(ln.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${_t(Se.x0-1)}) return 0.0;
		float inC = smoothstep(${_t(Se.z0-1.5)}, ${_t(Se.z0)}, p.z) * smoothstep(${_t(Se.x0-1)}, ${_t(Se.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${_t(Se.z0)}, ${_t(Se.z1)}, p.z);
		return inC * near;
	}`}gd.exports={wallWithHoles:ns,windowLightGLSL:Uy,addWing:qy,windowGlass:Dy,farDoorGlass:$y,atFarDoor:vd,FAR_DOOR:Hy,vaultY:ti,C:Se,NICHE_X:w0,NICHE:ln,NICHE_PLINTH_TOP:Ry,NICHE_STATUE_Z:Iy,WIN:Ke,winCentres:qn,piers:md,PAINTING_X:zy,HEIGHT:Ml}});var eo=de((l4,bd)=>{"use strict";var Tl=xn(),Qt=8,ai=.35,la=14,oi=4,Fe={x0:la+ai,x1:la+ai+2*oi,z0:5.9-oi,z1:5.9+oi,zc:5.9,cx:la+ai+oi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Qt},oculus:3.3};Fe.domeTop=Fe.dome.base+Fe.dome.r;var ii={spokes:16,ringE:[.42,.95],bar:.035},kr={sxz:1.32,sy:1.6,yaw:.6};kr.crownC=[Fe.cx,.4+3.4*kr.sy,Fe.zc];kr.crownR=[2.3*kr.sxz,1.9*kr.sy,2.3*kr.sxz];kr.trunkR=.26*kr.sxz;kr.trunkTop=.4+2.2*kr.sy;var xd={inner:1.05,outer:1.62,seat:.48,soil:.4},M0=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(r=>r/t)})(),Pr=[0,0,0],ni=[11,0,0],_0=[10,0,0],E0=[9,0,0],By=[5,0,0],Sl=[3,0,0];function mo(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function tn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}var jy=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function Wy(e){e.save(),e.translate(la+ai,0,0),e.rotateY(-Math.PI/2),Tl.wallWithHoles(e,{u0:0,u1:Tl.C.z0,w0:0,w1:2*ai,top:()=>Qt,holes:[{u0:Fe.zc-Fe.arch.r,u1:Fe.zc+Fe.arch.r,bottom:0,head:jy(Fe.zc,Fe.arch.r,Fe.arch.spring),step:.05}],mat:ni,revealMat:Pr,topStep:1}),e.restore();let t=la-ai;for(let[i,s]of[[0,Fe.zc-Fe.arch.r],[Fe.zc+Fe.arch.r,Tl.C.z0]])tn(e,t-.12,0,i,t,.42,s,Pr),tn(e,t-.07,.42,i,t,.5,s,Pr);let r=t,n=.24,o=40,a=(i,s,c)=>[c,Fe.arch.spring+Math.sin(i)*s,Fe.zc+Math.cos(i)*s];for(let i=0;i<o;i++){let s=Math.PI*i/o,c=Math.PI*(i+1)/o;mo(e,a(s,Fe.arch.r,r-.07),a(c,Fe.arch.r,r-.07),a(c,Fe.arch.r+n,r-.07),a(s,Fe.arch.r+n,r-.07),[-1,0,0],Pr),mo(e,a(s,Fe.arch.r+n,r),a(c,Fe.arch.r+n,r),a(c,Fe.arch.r+n,r-.07),a(s,Fe.arch.r+n,r-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Pr),mo(e,a(s,Fe.arch.r,r),a(c,Fe.arch.r,r),a(c,Fe.arch.r,r-.07),a(s,Fe.arch.r,r-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Pr)}tn(e,r-.12,Fe.arch.spring+Fe.arch.r-.06,Fe.zc-.17,r,Fe.arch.spring+Fe.arch.r+n+.16,Fe.zc+.17,Pr);for(let i of[-1,1]){let s=Fe.zc+i*Fe.arch.r,c=Fe.zc+i*(Fe.arch.r+n);tn(e,r-.07,0,s,r,Fe.arch.spring,c,Pr),tn(e,r-.13,Fe.arch.spring-.16,s-i*.03,r,Fe.arch.spring,c+i*.08,Pr),tn(e,r-.12,0,s-i*.03,r,.5,c+i*.06,Pr)}}function Vy(e){let{x0:t,x1:r,z0:n,z1:o}=Fe;mo(e,[la,0,n],[r,0,n],[r,0,o],[la,0,o],[0,1,0],Pr),e.curMat=ni,mo(e,[r,0,n],[r,0,o],[r,Qt,o],[r,Qt,n],[-1,0,0],ni),mo(e,[t,0,n],[r,0,n],[r,Qt,n],[t,Qt,n],[0,0,1],ni),mo(e,[r,0,o],[t,0,o],[t,Qt,o],[r,Qt,o],[0,0,-1],ni),mo(e,[t,0,o],[t,0,n],[t,Qt,n],[t,Qt,o],[1,0,0],ni),tn(e,r-.12,0,n,r,.42,o,Pr),tn(e,t,0,n,r,.42,n+.12,Pr),tn(e,t,0,o-.12,r,.42,o,Pr),tn(e,r-.2,Qt-.3,n,r,Qt,o,Pr),tn(e,t,Qt-.3,n,r,Qt,n+.2,Pr),tn(e,t,Qt-.3,o-.2,r,Qt,o,Pr),tn(e,t,Qt-.3,n,t+.2,Qt,o,Pr);let a=Fe.dome.r,i=48,s=[];for(let w=0;w<=i;w++){let T=Math.PI*2*w/i;s.push([Fe.cx+Math.cos(T)*a,Fe.zc+Math.sin(T)*a])}let c=w=>{let T=Math.abs(Math.cos(w)),C=Math.abs(Math.sin(w));return Math.min(oi/Math.max(T,1e-6),oi/Math.max(C,1e-6))};for(let w=0;w<i;w++){let T=Math.PI*2*w/i,C=Math.PI*2*(w+1)/i,G=c(T),$=c(C),H=[Fe.cx+Math.cos(T)*G,Qt,Fe.zc+Math.sin(T)*G],oe=[Fe.cx+Math.cos(C)*$,Qt,Fe.zc+Math.sin(C)*$];mo(e,[s[w][0],Qt,s[w][1]],[s[w+1][0],Qt,s[w+1][1]],oe,H,[0,-1,0],_0)}e.lathe([[a+.02,Qt-.18,1],[a-.12,Qt-.18,1],[a-.12,Qt-.06,1],[a-.05,Qt,1],[a,Qt+.02]],Fe.cx,Fe.zc,i,{mat:()=>Pr});let f=16,h=(w,T,C)=>[Fe.cx+Math.cos(w)*Math.cos(T)*C,Fe.dome.base+Math.sin(T)*C,Fe.zc+Math.sin(w)*Math.cos(T)*C],p=Math.PI/2;for(let w=0;w<i;w++)for(let T=0;T<f;T++){let C=Math.PI*2*w/i,G=Math.PI*2*(w+1)/i,$=p*T/f,H=p*(T+1)/f,oe=(J,be)=>[-Math.cos(J)*Math.cos(be),-Math.sin(be),-Math.sin(J)*Math.cos(be)],ye=[e.vert(h(C,$,a),oe(C,$),E0),e.vert(h(G,$,a),oe(G,$),E0),e.vert(h(G,H,a),oe(G,H),E0),e.vert(h(C,H,a),oe(C,H),E0)];e.tri(ye[0],ye[1],ye[2]),e.tri(ye[0],ye[2],ye[3])}for(let w=0;w<ii.spokes;w++){let T=Math.PI*2*w/ii.spokes,C=[];for(let G=0;G<=14;G++)C.push(h(T,(p-.06)*G/14,a-.04));e.tube(C,()=>.04,20,6,{mat:()=>_0})}for(let w of ii.ringE){let T=Math.cos(w)*(a-.04),C=Fe.dome.base+Math.sin(w)*(a-.04),G=[];for(let $=0;$<=72;$++){let H=Math.PI*2*$/72;G.push([Fe.cx+Math.cos(H)*T,C,Fe.zc+Math.sin(H)*T])}e.tube(G,()=>.035,72,6,{mat:()=>_0})}e.ellipsoid([Fe.cx,Fe.dome.base+a-.06,Fe.zc],[.16,.08,.16],6,12,{mat:()=>_0});let u=.46,v=.55,m=.12,d=(w,T,C,G)=>{tn(e,w,u-.08,T,C,u,G,Sl);let $=C-w>G-T?[w+.25,C-.25]:[w+.06,C-.06],H=C-w>G-T?[T+.06,G-.06]:[T+.25,G-.25];tn(e,$[0],0,H[0],$[1],u-.08,H[1],Sl)};d(r-m-v,n+1.1,r-m,o-1.1),d(t+1,n+m,r-1.1,n+m+v),d(t+1,o-m-v,r-1.1,o-m);let x=xd;e.lathe([[x.outer,0,1],[x.outer,x.seat-.1,1],[x.outer+.07,x.seat-.07,1],[x.outer+.07,x.seat,1],[x.inner-.05,x.seat,1],[x.inner-.05,x.seat-.06,1],[x.inner,x.seat-.08,1],[x.inner,x.soil]],Fe.cx,Fe.zc,64,{mat:()=>Sl}),e.lathe([[x.inner,x.soil,1],[0,x.soil+.03]],Fe.cx,Fe.zc,48,{mat:()=>By})}function Xy(e){Wy(e),Vy(e),e.curMat=[0,0,0]}var Ht=e=>e.toFixed(4);function yd(){let e=Fe.dome.r,t=ii.ringE.map(r=>Math.cos(r)*e);return`
	const vec3 SHAFT = vec3(${Ht(M0[0])}, ${Ht(M0[1])}, ${Ht(M0[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Ht(Fe.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Ht(Fe.cx)}, ${Ht(Fe.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Ht(e-.15)} - soft, ${Ht(e-.15)} + soft, d);
		float hw = ${Ht(ii.bar)};
		float cover = 0.0;
		${t.map(r=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Ht(r)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Ht(Math.PI*2/ii.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Ht(kr.crownC[0])}, ${Ht(kr.crownC[1])}, ${Ht(kr.crownC[2])});
		vec3 r = vec3(${Ht(kr.crownR[0])}, ${Ht(kr.crownR[1])}, ${Ht(kr.crownR[2])});
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
		float tt = (${Ht(kr.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Ht(Fe.cx)}, ${Ht(Fe.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Ht(kr.trunkR*.7)}, ${Ht(kr.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function Yy(){return`
	${yd()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Ht(Fe.x0-.75)} || p.z < ${Ht(Fe.z0-.5)} || p.z > ${Ht(Fe.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Ht(Fe.x0-1.5)} || p.z < ${Ht(Fe.z0-1.5)} || p.z > ${Ht(Fe.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Ht(Fe.x0-1.2)}, ${Ht(Fe.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Ht(Fe.cx)}, ${Ht(Fe.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}bd.exports={addAlcove:Xy,alcoveLightGLSL:Yy,oculusGLSL:yd,A:Fe,BENCH:xd,SHAFT:M0,TREE:kr}});var zd=de((f4,Ld)=>{"use strict";var Ky=oa(),{addFlutedColumn:wd,addStatue:Qy,addPlant:Zy}=rd(),_d=aa(),Jy=ei(),Hn=xn(),eb=eo(),Et=14,dr=Hn.C.hallEnd+.35,Xt=8,Ut=.35,kl=1.15,Ll=1.15,zl=[18,29,40],tb=[[[0,0],[0,dr]],[[Et,dr],[Et,0]],[[0,0],[Et,0]],[[Et,dr],[0,dr]]],Td=[];for(let e of zl)for(let t of[1.25,Et-1.25]){let r=kl/2,n=Ll/2;Td.push([[t-r,e-n],[t+r,e-n]],[[t+r,e-n],[t+r,e+n]],[[t+r,e+n],[t-r,e+n]],[[t-r,e+n],[t-r,e-n]])}var A0=12,Sd=2.95,kd=.62,k0=Sd+kd,T0=[{file:"venus.bin",x:1.85,z:dr-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Et-2.1,z:dr-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Hn.NICHE_X[0],z:Hn.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Hn.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Hn.NICHE_X[1],z:Hn.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Hn.NICHE_PLINTH_TOP,mat:3}],rb={x0:Ut,x1:3.15,z0:3.6,z1:8.2,top:1},Ed=.8,L0=1.17,as=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{as.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),as.push({x:Et-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function Cl(e,t,r,n){return[[[e-r,t-n],[e+r,t-n]],[[e+r,t-n],[e+r,t+n]],[[e+r,t+n],[e-r,t+n]],[[e-r,t+n],[e-r,t-n]]]}var z0=[];for(let e of[-1,1])z0.push(...Cl(Et/2+e*k0,A0,.85,.85));for(let e of T0.filter(t=>t.pedestal))z0.push(...Cl(e.x,e.z,L0*1.1,L0*1.1));for(let e of as)z0.push(...Cl(e.x,e.z,.42,.42));var nb=tb.concat(Td,z0);function ob(e){let r=new Map,n=(o,a,i)=>{let s=o+":"+a;r.has(s)||r.set(s,[]);let c=r.get(s);c.includes(i)||c.push(i)};for(let o of e){let a=Math.floor(Math.min(o[0][0],o[1][0])/4)-1,i=Math.floor(Math.max(o[0][0],o[1][0])/4)+1,s=Math.floor(Math.min(o[0][1],o[1][1])/4)-1,c=Math.floor(Math.max(o[0][1],o[1][1])/4)+1;for(let f=a;f<=i;f++)for(let h=s;h<=c;h++)n(f,h,o)}return{get(o,a){let i=Math.floor(o/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let h=-1;h<=1;h++){let p=r.get(i+f+":"+(s+h));p&&c.push(...p)}return[...new Set(c)]}}}var S0=[],wr={curMat:[0,0,0]};function Rl(e,t,r,n,o,a,i){let s=e.length/3;e.push(...r,...n,...o,...a),t.push(...i,...i,...i,...i);let c=wr.curMat;return S0.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function Nt(e,t,r,n,o,a,i,s,c){let f=(h,p,u,v,m)=>{r.push(...Rl(e,t,h,p,u,v,m))};f([n,o,a],[i,o,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,o,c],[n,o,c],[i,s,c],[n,s,c],[0,0,1]),f([n,o,c],[n,o,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,o,a],[i,o,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,o,c],[i,o,c],[n,o,a],[i,o,a],[0,-1,0])}function si(e,t,r,n,o){let a=wr,i=a.vert(e,o),s=a.vert(t,o),c=a.vert(r,o),f=a.vert(n,o);a.tri(i,s,c),a.tri(s,f,c)}function Md(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,h=Math.cos(c),p=Math.sin(c),u=Math.cos(f),v=Math.sin(f),m=[e+r*h,t+r*p],d=[e+r*u,t+r*v],x=[e+n*h,t+n*p],w=[e+n*u,t+n*v];si([m[0],m[1],o],[d[0],d[1],o],[x[0],x[1],o],[w[0],w[1],o],[0,0,-1]),si([m[0],m[1],a],[d[0],d[1],a],[x[0],x[1],a],[w[0],w[1],a],[0,0,1]);let T=(c+f)/2;si([m[0],m[1],o],[d[0],d[1],o],[m[0],m[1],a],[d[0],d[1],a],[-Math.cos(T),-Math.sin(T),0]),si([x[0],x[1],o],[w[0],w[1],o],[x[0],x[1],a],[w[0],w[1],a],[Math.cos(T),Math.sin(T),0])}}function ab(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,h=e+r*Math.cos(c),p=t+r*Math.sin(c),u=e+r*Math.cos(f),v=t+r*Math.sin(f);si([h,p,o],[u,v,o],[h,n,o],[u,n,o],[0,0,-1]),si([h,p,a],[u,v,a],[h,n,a],[u,n,a],[0,0,1])}}function ib(e,t,r,n){let o=Et/2,a=Sd,i=3,s=a+.42,c=s+.15,f=kd,h=k0,p=5.98,u=n-.45,v=n+.45,m=64,d=wd(wr,o-h,n,0,p,f);wd(wr,o+h,n,0,p,f),wr.curMat=[0,0,0],Md(o,i,a,s,u,v,m),Md(o,i,s,c,u-.07,v+.07,m),ab(o,i,c,d+.05,u,v,m);for(let w of[-1,1]){let T=o+w*(c-.02),C=o+w*h;Nt(e,t,r,Math.min(T,C),i,u,Math.max(T,C),d+.05,v)}for(let w of[-1,1]){let T=o+w*(a-.05),C=o+w*(a+.85);Nt(e,t,r,Math.min(T,C),i-.16,n-.6,Math.max(T,C),i,n+.6)}let x=h+f*1.42+.45;Nt(e,t,r,o-x,d,n-.7,o+x,d+.44,n+.7),Nt(e,t,r,o-x+.12,d+.44,n-.62,o+x-.12,d+.7,n+.62),Nt(e,t,r,o-x-.1,d+.7,n-.84,o+x+.1,d+.84,n+.84),Nt(e,t,r,o-x-.22,d+.84,n-.96,o+x+.22,d+1,n+.96),Nt(e,t,r,o-.3,i+a-.1,n-.56,o+.3,d,n+.56)}function Ad(e,t,r,n,o){Nt(e,t,r,n-.72,0,o-.72,n+.72,.2,o+.72),Nt(e,t,r,n-.58,.2,o-.58,n+.58,.4,o+.58),Nt(e,t,r,n-kl/2,.4,o-Ll/2,n+kl/2,Xt-1.35,o+Ll/2),Nt(e,t,r,n-.67,.42,o-.67,n+.67,.62,o+.67),Nt(e,t,r,n-.67,Xt-1.58,o-.67,n+.67,Xt-1.35,o+.67),Nt(e,t,r,n-.82,Xt-1.35,o-.82,n+.82,Xt-1.05,o+.82),Nt(e,t,r,n-.66,Xt-1.05,o-.66,n+.66,Xt-.78,o+.66),Nt(e,t,r,n-.92,Xt-.78,o-.92,n+.92,Xt-.55,o+.92),Nt(e,t,r,n-.78,Xt-.55,o-.78,n+.78,Xt-.3,o+.78),Nt(e,t,r,n-.92,Xt-.3,o-.92,n+.92,Xt-.1,o+.92)}function os(e,t,r,n,o){o==="left"?(Nt(e,t,r,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Nt(e,t,r,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Nt(e,t,r,Et-.14,1,n-3.8/2,Et+.08,5.7,n+3.8/2),Nt(e,t,r,Et-.18,1+.18,n-3.8/2+.18,Et+.08+.04,5.7-.18,n+3.8/2-.18))}function sb(e,t,r,n){Nt(e,t,r,.65,Xt-.16,n-1.65,.65+.22,Xt,n+1.65),Nt(e,t,r,Et-.65-.22,Xt-.16,n-1.65,Et-.65,Xt,n+1.65),Nt(e,t,r,.65,Xt-.16,n-1.65,Et-.65,Xt,n-1.43),Nt(e,t,r,.65,Xt-.16,n+1.43,Et-.65,Xt,n+1.65),r.push(...Rl(e,t,[.65+.22,Xt-.16,n-1.43],[Et-.65-.22,Xt-.16,n-1.43],[.65+.22,Xt-.16,n+1.43],[Et-.65-.22,Xt-.16,n+1.43],[0,-1,0]))}Ld.exports=function(){let e=[],t=[],r=[];S0=[],wr=Ky.createBuilder(e,t,r,S0),r.push(...Rl(e,t,[0,0,0],[Et,0,0],[0,0,dr],[Et,0,dr],[0,1,0])),Jy.addSkylight(wr,[0,0,0],dr),wr.curMat=[0,0,0],Nt(e,t,r,-Ut,0,0,Ut,Xt,dr),Nt(e,t,r,Et-Ut,0,Hn.C.z1,Et+Ut,Xt,dr-Ut),Nt(e,t,r,Et-Ut-.12,0,Hn.C.z1+2*Ut,Et-Ut,.42,dr-Ut),Nt(e,t,r,Et-Ut-.07,.42,Hn.C.z1+2*Ut,Et-Ut,.5,dr-Ut),Nt(e,t,r,Ut,0,0,Ut+.12,.42,dr-Ut),Nt(e,t,r,Ut,.42,0,Ut+.07,.5,dr-Ut),Nt(e,t,r,Ut,0,dr-Ut-.12,Et-Ut,.42,dr-Ut),Nt(e,t,r,Ut,.42,dr-Ut-.07,Et-Ut,.5,dr-Ut),_d.addEntranceWall(wr),_d.addFrames(wr),wr.curMat=[0,0,0],Nt(e,t,r,-Ut,0,dr-Ut,Et+Ut,Xt,dr+Ut),ib(e,t,r,A0);for(let c of zl)Ad(e,t,r,1.25,c),Ad(e,t,r,Et-1.25,c);os(e,t,r,22,"left"),os(e,t,r,25,"right"),os(e,t,r,33,"left"),os(e,t,r,36,"right"),os(e,t,r,43,"left");let n=[4,9,34,39,44,49];for(let c of n)sb(e,t,r,c);Hn.addWing(wr),wr.curMat=[0,0,0];for(let c of T0.filter(f=>f.pedestal))Qy(wr,c.x,c.z,L0,Ed);{let c=rb;wr.curMat=[0,0,0],wr.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),wr.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),wr.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),wr.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}eb.addAlcove(wr);for(let c of as)Zy(wr,c.x,c.z,c.seed,1,c.away);wr.curMat=[0,0,0];let o=[[[Et,dr-.35],[0,dr-.35]],[[0,3],[0,10]],[[Et,15],[Et,22]],[[0,24],[0,31]],[[Et,33],[Et,40]],[[0,41],[0,46]]],a=ob(nb),i=(c,f)=>{let h=0,p=1/0;return o.forEach((u,v)=>{let m=(u[0][0]+u[1][0])/2,d=(u[0][1]+u[1][1])/2,x=Math.hypot(c-m,f-d);x<p&&(p=x,h=v)}),h},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:o,lights:s,statues:T0,occluders:[...zl.flatMap(c=>[[1.25,c,.78],[Et-1.25,c,.78]]),[Et/2-k0,A0,.86],[Et/2+k0,A0,.86],...T0.filter(c=>c.pedestal).map(c=>[c.x,c.z,L0*1.12]),...as.map(c=>[c.x,c.z,.34])],pedestalTop:Ed,mat:S0,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:r}}});var Il=de((u4,Cd)=>{"use strict";var{doorLightGLSL:cb}=aa(),{skylightGLSL:lb}=ei(),{windowLightGLSL:fb,C:yn}=xn(),{alcoveLightGLSL:ub}=eo(),zn=e=>e.toFixed(4),hb=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>(r/t).toFixed(4)).join(", ")})();Cd.exports=(e,t,r)=>{let o=(t.occluders||[]).slice(0,24).map(([u,v,m])=>`ao = min(ao, contact(v_pos.xz, vec2(${u.toFixed(3)}, ${v.toFixed(3)}), ${m.toFixed(3)}));`).join(`
      `),a={c:[0,0,0,0],d:[1,0,0,0]},i=-1,s=[],c=u=>{let v=u&&u.tick!==void 0?u.tick:0;if(v!==i||s.length===0){i=v;let m=t.viewer||[7,2,20];for(s=t.lights.filter(d=>d.c[3]>.5).map(d=>({l:d,d:Math.hypot(d.c[0]-m[0],d.c[2]-m[2])})).sort((d,x)=>d.d-x.d).slice(0,8).map(d=>d.l);s.length<8;)s.push(a)}return s},f={},h="",p="";for(let u=0;u<8;u++)f["lightC"+u]=v=>c(v)[u].c,f["lightD"+u]=v=>c(v)[u].d,h+="uniform vec4 lightC"+u+", lightD"+u+`;
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
        step(abs(v_pos.z - ${zn(yn.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${zn((yn.z0+yn.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${zn(yn.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
        if (v_pos.x < 14.0) wallD = min(wallD, ${zn(yn.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${zn(yn.z0)} || v_pos.z > ${zn(yn.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${zn(yn.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${zn(yn.z0)}), ${zn(yn.z1)} - v_pos.z), ${zn(yn.x1)} - v_pos.x);
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
        if (v_pos.z < ${zn(yn.z0+.3)} && v_pos.x > ${zn(yn.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:f,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements)})}});var Id=de((h4,Rd)=>{"strict mode";var db="https://api.artic.edu/api/v1/artworks/search",pb=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,mb="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",vb="&fields=image_id,title,artist_title",gb={low:400,mid:843,high:1686};Rd.exports={fetchList:async function(e,t){let r=db+mb+vb+`&from=${e}&size=${t}`;return(await fetch(r).then(o=>o.json())).data.filter(o=>o.image_id)},fetchImage:async function(e,t){let r=pb(e,gb[t]),n=await fetch(r).then(o=>o.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var Nd=de((d4,Od)=>{"use strict";var xb=sl(),yb=lo(),bb=e=>"images/web/"+e.slug+(yb.isPhone?"-1024":"")+".webp";async function Pd(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Od.exports={fetchList:async function(e,t){return xb.slice(e,e+t).map((r,n)=>({...r,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await Pd(bb(e))}catch(r){t=await Pd("images/"+e.file)}return{title:e.title,image:t}}}});var Dd=de((p4,Fd)=>{"strict mode";Fd.exports={default:"local",artic:Id(),local:Nd()}});var Ol=de((m4,$d)=>{"strict mode";var fa=document.createElement("canvas"),Pl=fa.width=fa.height=1024,zo=fa.getContext("2d");zo.mozImageSmoothingEnabled=!1;zo.webkitImageSmoothingEnabled=!1;zo.font="32px Verdana";zo.textBaseline="bottom";zo.fillStyle="#aaa";function Gd(e,t,r,n){var o=t,a,i=0,s=0,c=t.split(" "),f,h;for(f=h=c.length;e.measureText(o).width>r&&f>1;){f--,o=a="";for(var p=0;p<h;p++)p<f?(o+=c[p],p+1<f&&(o+=" ")):(a+=c[p],p+1<h&&(a+=" "))}return n.push(o),s=e.measureText(o).width,a&&(i=Gd(e,a,r,n),i>s&&(s=i)),s}$d.exports={init(e,t,r=Pl){var n=[];Gd(zo,t,Math.min(r*Pl,Pl),n),zo.clearRect(0,0,fa.width,fa.height);for(var o=0;o<n.length;o++)zo.fillText(n[o],0,fa.height-(Math.max(n.length,3)-o)*32);return e({data:fa,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Ud=de((v4,Hd)=>{"strict mode";var Nl=Dd(),wb=new URLSearchParams(window.location.search).get("api"),qd=Nl[wb]||Nl[Nl.default],_b=Ol(),Fl={},li=[],Eb=2;function Mb(e){return(!navigator.connection||navigator.connection.downlink<Eb)&&(e=e=="high"?"mid":"low"),e}var Ab=lo(),ci=document.createElement("canvas");ci.width=ci.height=Ab.isPhone?1024:2048;var $l=ci.getContext("2d");$l.imageSmoothingEnabled=!0;$l.imageSmoothingQuality="high";var Dl=!1,Tb=e=>[(li.pop()||e.texture)([[[200,200,200]]]),t=>(li.pop()||e.texture)([[[0,0,0,0]]]),1];async function Gl(e,t,r){Dl===!1&&(Dl=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,o;try{let a=await qd.fetchImage(t,Mb(r));o=a.title,n=await createImageBitmap(a.image),$l.drawImage(n,0,0,ci.width,ci.height)}catch(a){return console.error(a),r=="high"?await Gl(e,t,"low"):Tb(e)}return[(li.pop()||e.texture)({data:ci,min:"mipmap",mipmap:"nice",aniso:Dl,flipY:!0}),a=>_b.init(li.pop()||e.texture,o,a),n.width/n.height]}Hd.exports={fetch:(e,t=10,r="low",n,o)=>{let a=Object.keys(Fl).length;qd.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(Fl[s.image_id]){--t===0&&o();return}Fl[s.image_id]=s,Gl(e,s,r).then(([c,f,h])=>{n({...s,tex:c,textGen:f,aspect:h}),--t===0&&o()})})})},load:(e,t,r="low")=>{t.tex||t.loading||(t.loading=!0,Gl(e,t,r).then(([n,o])=>{t.loading=!1,t.tex=n,t.text=o(t.width)}))},unload:e=>{e.tex&&(li.push(e.tex),e.tex=void 0),e.text&&(li.push(e.text),e.text=void 0)}}});var jd=de((g4,Bd)=>{Bd.exports=Sb;function Sb(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Vd=de((x4,Wd)=>{Wd.exports=kb;function kb(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Yd=de((y4,Xd)=>{Xd.exports=Lb;function Lb(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var ql=de((b4,Kd)=>{Kd.exports=zb;function zb(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Zd=de((w4,Qd)=>{Qd.exports=Cb;function Cb(e,t){if(e===t){var r=t[1],n=t[2],o=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=o,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var e1=de((_4,Jd)=>{Jd.exports=Rb;function Rb(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],v=t[11],m=t[12],d=t[13],x=t[14],w=t[15],T=r*s-n*i,C=r*c-o*i,G=r*f-a*i,$=n*c-o*s,H=n*f-a*s,oe=o*f-a*c,ye=h*d-p*m,J=h*x-u*m,be=h*w-v*m,ue=p*x-u*d,De=p*w-v*d,Ie=u*w-v*x,Ce=T*Ie-C*De+G*ue+$*be-H*J+oe*ye;return Ce?(Ce=1/Ce,e[0]=(s*Ie-c*De+f*ue)*Ce,e[1]=(o*De-n*Ie-a*ue)*Ce,e[2]=(d*oe-x*H+w*$)*Ce,e[3]=(u*H-p*oe-v*$)*Ce,e[4]=(c*be-i*Ie-f*J)*Ce,e[5]=(r*Ie-o*be+a*J)*Ce,e[6]=(x*G-m*oe-w*C)*Ce,e[7]=(h*oe-u*G+v*C)*Ce,e[8]=(i*De-s*be+f*ye)*Ce,e[9]=(n*be-r*De-a*ye)*Ce,e[10]=(m*H-d*G+w*T)*Ce,e[11]=(p*G-h*H-v*T)*Ce,e[12]=(s*J-i*ue-c*ye)*Ce,e[13]=(r*ue-n*J+o*ye)*Ce,e[14]=(d*C-m*$-x*T)*Ce,e[15]=(h*$-p*C+u*T)*Ce,e):null}});var r1=de((E4,t1)=>{t1.exports=Ib;function Ib(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],v=t[11],m=t[12],d=t[13],x=t[14],w=t[15];return e[0]=s*(u*w-v*x)-p*(c*w-f*x)+d*(c*v-f*u),e[1]=-(n*(u*w-v*x)-p*(o*w-a*x)+d*(o*v-a*u)),e[2]=n*(c*w-f*x)-s*(o*w-a*x)+d*(o*f-a*c),e[3]=-(n*(c*v-f*u)-s*(o*v-a*u)+p*(o*f-a*c)),e[4]=-(i*(u*w-v*x)-h*(c*w-f*x)+m*(c*v-f*u)),e[5]=r*(u*w-v*x)-h*(o*w-a*x)+m*(o*v-a*u),e[6]=-(r*(c*w-f*x)-i*(o*w-a*x)+m*(o*f-a*c)),e[7]=r*(c*v-f*u)-i*(o*v-a*u)+h*(o*f-a*c),e[8]=i*(p*w-v*d)-h*(s*w-f*d)+m*(s*v-f*p),e[9]=-(r*(p*w-v*d)-h*(n*w-a*d)+m*(n*v-a*p)),e[10]=r*(s*w-f*d)-i*(n*w-a*d)+m*(n*f-a*s),e[11]=-(r*(s*v-f*p)-i*(n*v-a*p)+h*(n*f-a*s)),e[12]=-(i*(p*x-u*d)-h*(s*x-c*d)+m*(s*u-c*p)),e[13]=r*(p*x-u*d)-h*(n*x-o*d)+m*(n*u-o*p),e[14]=-(r*(s*x-c*d)-i*(n*x-o*d)+m*(n*c-o*s)),e[15]=r*(s*u-c*p)-i*(n*u-o*p)+h*(n*c-o*s),e}});var o1=de((M4,n1)=>{n1.exports=Pb;function Pb(e){var t=e[0],r=e[1],n=e[2],o=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],h=e[9],p=e[10],u=e[11],v=e[12],m=e[13],d=e[14],x=e[15],w=t*i-r*a,T=t*s-n*a,C=t*c-o*a,G=r*s-n*i,$=r*c-o*i,H=n*c-o*s,oe=f*m-h*v,ye=f*d-p*v,J=f*x-u*v,be=h*d-p*m,ue=h*x-u*m,De=p*x-u*d;return w*De-T*ue+C*be+G*J-$*ye+H*oe}});var i1=de((A4,a1)=>{a1.exports=Ob;function Ob(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],h=t[7],p=t[8],u=t[9],v=t[10],m=t[11],d=t[12],x=t[13],w=t[14],T=t[15],C=r[0],G=r[1],$=r[2],H=r[3];return e[0]=C*n+G*s+$*p+H*d,e[1]=C*o+G*c+$*u+H*x,e[2]=C*a+G*f+$*v+H*w,e[3]=C*i+G*h+$*m+H*T,C=r[4],G=r[5],$=r[6],H=r[7],e[4]=C*n+G*s+$*p+H*d,e[5]=C*o+G*c+$*u+H*x,e[6]=C*a+G*f+$*v+H*w,e[7]=C*i+G*h+$*m+H*T,C=r[8],G=r[9],$=r[10],H=r[11],e[8]=C*n+G*s+$*p+H*d,e[9]=C*o+G*c+$*u+H*x,e[10]=C*a+G*f+$*v+H*w,e[11]=C*i+G*h+$*m+H*T,C=r[12],G=r[13],$=r[14],H=r[15],e[12]=C*n+G*s+$*p+H*d,e[13]=C*o+G*c+$*u+H*x,e[14]=C*a+G*f+$*v+H*w,e[15]=C*i+G*h+$*m+H*T,e}});var c1=de((T4,s1)=>{s1.exports=Nb;function Nb(e,t,r){var n=r[0],o=r[1],a=r[2],i,s,c,f,h,p,u,v,m,d,x,w;return t===e?(e[12]=t[0]*n+t[4]*o+t[8]*a+t[12],e[13]=t[1]*n+t[5]*o+t[9]*a+t[13],e[14]=t[2]*n+t[6]*o+t[10]*a+t[14],e[15]=t[3]*n+t[7]*o+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],h=t[4],p=t[5],u=t[6],v=t[7],m=t[8],d=t[9],x=t[10],w=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=h,e[5]=p,e[6]=u,e[7]=v,e[8]=m,e[9]=d,e[10]=x,e[11]=w,e[12]=i*n+h*o+m*a+t[12],e[13]=s*n+p*o+d*a+t[13],e[14]=c*n+u*o+x*a+t[14],e[15]=f*n+v*o+w*a+t[15]),e}});var f1=de((S4,l1)=>{l1.exports=Fb;function Fb(e,t,r){var n=r[0],o=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var h1=de((k4,u1)=>{u1.exports=Db;function Db(e,t,r,n){var o=n[0],a=n[1],i=n[2],s=Math.sqrt(o*o+a*a+i*i),c,f,h,p,u,v,m,d,x,w,T,C,G,$,H,oe,ye,J,be,ue,De,Ie,Ce,ge;return Math.abs(s)<1e-6?null:(s=1/s,o*=s,a*=s,i*=s,c=Math.sin(r),f=Math.cos(r),h=1-f,p=t[0],u=t[1],v=t[2],m=t[3],d=t[4],x=t[5],w=t[6],T=t[7],C=t[8],G=t[9],$=t[10],H=t[11],oe=o*o*h+f,ye=a*o*h+i*c,J=i*o*h-a*c,be=o*a*h-i*c,ue=a*a*h+f,De=i*a*h+o*c,Ie=o*i*h+a*c,Ce=a*i*h-o*c,ge=i*i*h+f,e[0]=p*oe+d*ye+C*J,e[1]=u*oe+x*ye+G*J,e[2]=v*oe+w*ye+$*J,e[3]=m*oe+T*ye+H*J,e[4]=p*be+d*ue+C*De,e[5]=u*be+x*ue+G*De,e[6]=v*be+w*ue+$*De,e[7]=m*be+T*ue+H*De,e[8]=p*Ie+d*Ce+C*ge,e[9]=u*Ie+x*Ce+G*ge,e[10]=v*Ie+w*Ce+$*ge,e[11]=m*Ie+T*Ce+H*ge,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var p1=de((L4,d1)=>{d1.exports=Gb;function Gb(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],h=t[9],p=t[10],u=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*o+f*n,e[5]=i*o+h*n,e[6]=s*o+p*n,e[7]=c*o+u*n,e[8]=f*o-a*n,e[9]=h*o-i*n,e[10]=p*o-s*n,e[11]=u*o-c*n,e}});var v1=de((z4,m1)=>{m1.exports=$b;function $b(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],h=t[9],p=t[10],u=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o-f*n,e[1]=i*o-h*n,e[2]=s*o-p*n,e[3]=c*o-u*n,e[8]=a*n+f*o,e[9]=i*n+h*o,e[10]=s*n+p*o,e[11]=c*n+u*o,e}});var x1=de((C4,g1)=>{g1.exports=qb;function qb(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],h=t[5],p=t[6],u=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o+f*n,e[1]=i*o+h*n,e[2]=s*o+p*n,e[3]=c*o+u*n,e[4]=f*o-a*n,e[5]=h*o-i*n,e[6]=p*o-s*n,e[7]=u*o-c*n,e}});var b1=de((R4,y1)=>{y1.exports=Hb;function Hb(e,t,r){var n,o,a,i=r[0],s=r[1],c=r[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),o=Math.cos(t),a=1-o,e[0]=i*i*a+o,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+o,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var _1=de((I4,w1)=>{w1.exports=Ub;function Ub(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=n+n,c=o+o,f=a+a,h=n*s,p=n*c,u=n*f,v=o*c,m=o*f,d=a*f,x=i*s,w=i*c,T=i*f;return e[0]=1-(v+d),e[1]=p+T,e[2]=u-w,e[3]=0,e[4]=p-T,e[5]=1-(h+d),e[6]=m+x,e[7]=0,e[8]=u+w,e[9]=m-x,e[10]=1-(h+v),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}});var M1=de((P4,E1)=>{E1.exports=Bb;function Bb(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var T1=de((O4,A1)=>{A1.exports=jb;function jb(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var k1=de((N4,S1)=>{S1.exports=Wb;function Wb(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var z1=de((F4,L1)=>{L1.exports=Vb;function Vb(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var R1=de((D4,C1)=>{C1.exports=Xb;function Xb(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var P1=de((G4,I1)=>{I1.exports=Yb;function Yb(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r+r,s=n+n,c=o+o,f=r*i,h=n*i,p=n*s,u=o*i,v=o*s,m=o*c,d=a*i,x=a*s,w=a*c;return e[0]=1-p-m,e[1]=h+w,e[2]=u-x,e[3]=0,e[4]=h-w,e[5]=1-f-m,e[6]=v+d,e[7]=0,e[8]=u+x,e[9]=v-d,e[10]=1-f-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var N1=de(($4,O1)=>{O1.exports=Kb;function Kb(e,t,r,n,o,a,i){var s=1/(r-t),c=1/(o-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var D1=de((q4,F1)=>{F1.exports=Qb;function Qb(e,t,r,n,o){var a=1/Math.tan(t/2),i=1/(n-o);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*n*i,e[15]=0,e}});var $1=de((H4,G1)=>{G1.exports=Zb;function Zb(e,t,r,n){var o=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(o+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(o-a)*f*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}});var H1=de((U4,q1)=>{q1.exports=Jb;function Jb(e,t,r,n,o,a,i){var s=1/(t-r),c=1/(n-o),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+r)*s,e[13]=(o+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var B1=de((B4,U1)=>{var e3=ql();U1.exports=t3;function t3(e,t,r,n){var o,a,i,s,c,f,h,p,u,v,m=t[0],d=t[1],x=t[2],w=n[0],T=n[1],C=n[2],G=r[0],$=r[1],H=r[2];return Math.abs(m-G)<1e-6&&Math.abs(d-$)<1e-6&&Math.abs(x-H)<1e-6?e3(e):(h=m-G,p=d-$,u=x-H,v=1/Math.sqrt(h*h+p*p+u*u),h*=v,p*=v,u*=v,o=T*u-C*p,a=C*h-w*u,i=w*p-T*h,v=Math.sqrt(o*o+a*a+i*i),v?(v=1/v,o*=v,a*=v,i*=v):(o=0,a=0,i=0),s=p*i-u*a,c=u*o-h*i,f=h*a-p*o,v=Math.sqrt(s*s+c*c+f*f),v?(v=1/v,s*=v,c*=v,f*=v):(s=0,c=0,f=0),e[0]=o,e[1]=s,e[2]=h,e[3]=0,e[4]=a,e[5]=c,e[6]=p,e[7]=0,e[8]=i,e[9]=f,e[10]=u,e[11]=0,e[12]=-(o*m+a*d+i*x),e[13]=-(s*m+c*d+f*x),e[14]=-(h*m+p*d+u*x),e[15]=1,e)}});var W1=de((j4,j1)=>{j1.exports=r3;function r3(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var is=de((W4,V1)=>{V1.exports={create:jd(),clone:Vd(),copy:Yd(),identity:ql(),transpose:Zd(),invert:e1(),adjoint:r1(),determinant:o1(),multiply:i1(),translate:c1(),scale:f1(),rotate:h1(),rotateX:p1(),rotateY:v1(),rotateZ:x1(),fromRotation:b1(),fromRotationTranslation:_1(),fromScaling:M1(),fromTranslation:T1(),fromXRotation:k1(),fromYRotation:z1(),fromZRotation:R1(),fromQuat:P1(),frustum:N1(),perspective:D1(),perspectiveFromFieldOfView:$1(),ortho:H1(),lookAt:B1(),str:W1()}});var K1=de((V4,Y1)=>{"use strict";var X1=Ud(),pr=is(),ua=xn(),n3=3e3,C0="high",Hl,cs=.36,ls=13.64,fi=ua.C.hallEnd-.01,fs=ua.C.z0+.01,o3=.356,a3=13.644,i3=ua.C.hallEnd-.006,s3=ua.C.z0+.006,c3=.12,I0=4,ui=e=>Br[e]&&Br[e].cy||I0,Ul=.26,l3=5.6,f3=7,Br=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:fi},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:ua.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ua.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ua.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function u3(e,t){let r=t&&t.maxH||l3,n=t&&t.maxW||f3,o=Math.min(r,n/e);return{width:o*e,height:o}}function h3(e,t,r){let n=Br[r],o=[],a=ui(r)-t/2;return n.side==="left"?(pr.fromTranslation(o,[cs,a,n.z+e/2]),pr.rotateY(o,o,Math.PI/2)):n.side==="right"?(pr.fromTranslation(o,[ls,a,n.z-e/2]),pr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?pr.fromTranslation(o,[n.x-e/2,a,fs]):(pr.fromTranslation(o,[7+e/2,a,fi]),pr.rotateY(o,o,Math.PI)),pr.scale(o,o,[e,t,c3]),o}function d3(e,t,r){let n=Br[r],o=[],a=ui(r)-t/2;return n.side==="left"?(pr.fromTranslation(o,[cs,a,n.z+e/2]),pr.rotateY(o,o,Math.PI/2)):n.side==="right"?(pr.fromTranslation(o,[ls,a,n.z-e/2]),pr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?pr.fromTranslation(o,[n.x-e/2,a,fs]):(pr.fromTranslation(o,[7+e/2,a,fi]),pr.rotateY(o,o,Math.PI)),o}function p3(e,t,r){let n=Br[r],o=[],a=ui(r)-t/2-Ul-.38;return n.side==="left"?(pr.fromTranslation(o,[o3,a,n.z+e/2]),pr.rotateY(o,o,Math.PI/2)):n.side==="right"?(pr.fromTranslation(o,[a3,a,n.z-e/2]),pr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?pr.fromTranslation(o,[n.x-e/2,a,s3]):(pr.fromTranslation(o,[7+e/2,a,i3]),pr.rotateY(o,o,Math.PI)),pr.scale(o,o,[2,2,2]),o}function m3(e,t,r){let n=Br[r],o=ui(r)-t/2-Ul-.38;return n.side==="left"?[cs+.55,o,n.z]:n.side==="right"?[ls-.55,o,n.z]:n.side==="corridor"?[n.x,o,fs+.55]:[7,o,fi-.55]}var ss=.42;function R0(e,t,r,n,o,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,o,0,0,r[0]*a,r[1]*a,r[2]*a,0,e[0],e[1],e[2],1]}function v3(e,t,r){let n=Br[r],o,a,i;n.side==="left"?(o=[cs,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(o=[ls,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(o=[n.x,fs],a=[1,0,0],i=[0,0,1]):(o=[7,fi],a=[1,0,0],i=[0,0,-1]);let s=ui(r)+t/2+Ul+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(v,m)=>[o[0]+i[0]*v,m,o[1]+i[2]*v],h=[.075,.062,.05],p=[{fixmodel:R0(f(.014,s),a,i,.1,.13,.028),fixcol:h,fixglow:0},{fixmodel:R0(f(ss/2,s),a,i,.02,.02,ss),fixcol:h,fixglow:0},{fixmodel:R0(f(ss,s),a,i,c,.034,.05),fixcol:h,fixglow:0},{fixmodel:R0(f(ss-.012,s-.019),a,i,c*.94,.006,.028),fixcol:h,fixglow:1}],u=f(ss,s-.02);return{fixtures:p,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}Y1.exports=(e,t)=>{let r=[],n=[],o=a=>{let i=a.image_id;if(!Br[i])return;let{width:s,height:c}=u3(a.aspect,Br[i]),f=v3(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),r.push({...a,fixtures:f.fixtures,side:Br[i].side,model:h3(s,c,i),framemodel:d3(s,c,i),framesize:[s,c],textmodel:p3(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,size:a.size,plaquePosition:m3(s,c,i),paintingPosition:Br[i].side==="left"?[cs+.05,I0,Br[i].z]:Br[i].side==="right"?[ls-.05,I0,Br[i].z]:Br[i].side==="corridor"?[Br[i].x,ui(i),fs+.05]:[7,I0,fi-.05],textGen:null})};return X1.fetch(e,Br.length,C0,o,()=>{}),{update:()=>{n=r,n.forEach(a=>{X1.load(e,a,C0)}),C0="low",Hl&&clearTimeout(Hl),Hl=setTimeout(()=>{C0="high"},n3)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var ep=de((X4,J1)=>{"use strict";var g3=Ol(),Q1=lo(),Z1=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function x3(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];Z1.forEach(([n,o])=>{e.forEach(([a,i])=>t.push([a,i,n,o]))});let r=[];for(let n=0;n<Z1.length-1;n++)for(let o=0;o<4;o++){let a=(o+1)%4,i=n*4+o,s=n*4+a,c=(n+1)*4+o,f=(n+1)*4+a;r.push(i,s,f,i,f,c)}return{verts:t,elems:r}}var y3=`#extension GL_OES_standard_derivatives : enable
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
}`;J1.exports=e=>{let t=g3.draw(e),r=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(Q1.isPhone?1024:2048),detail:()=>Q1.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=x3(),o=e({frag:y3,vert:b3,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){r(i),o(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var rp=de((Y4,tp)=>{"use strict";var w3=Il();function _3(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),o=t.getUint32(8,!0),a=[],i=[];for(let p=0;p<3;p++)a.push(t.getFloat32(12+p*4,!0)),i.push(t.getFloat32(24+p*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,o);s+=o*2;let h=new Int8Array(e,s,n*3);return{nV:n,nI:o,mn:a,sz:i,pos:c,idx:f,nrm:h}}tp.exports=(e,t)=>{let r=[],n=[],o=[],a=[],i=null,s=t.statues.length,c=(h,p)=>{let u=r.length/3,v=p.height,m=Math.cos(p.yaw),d=Math.sin(p.yaw),x=p.base!==void 0?p.base:t.pedestalTop;for(let w=0;w<h.nV;w++){let T=(h.mn[0]+h.pos[w*3]/65535*h.sz[0])*v,C=(h.mn[1]+h.pos[w*3+1]/65535*h.sz[1])*v,G=(h.mn[2]+h.pos[w*3+2]/65535*h.sz[2])*v;r.push(p.x+m*T+d*G,x+C,p.z-d*T+m*G);let $=h.nrm[w*3]/127,H=h.nrm[w*3+1]/127,oe=h.nrm[w*3+2]/127;n.push(m*$+d*oe,H,-d*$+m*oe),o.push(p.mat||1,0,0)}for(let w=0;w<h.nI;w++)a.push(u+h.idx[w])},f=()=>{a.length!==0&&(i=w3(e,{position:r,normal:n,mat:o,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1))};return t.statues.forEach(h=>{fetch("res/"+h.file).then(p=>{if(!p.ok)throw new Error("Could not load "+h.file);return p.arrayBuffer()}).then(p=>c(_3(p),h)).catch(p=>console.error(p)).then(()=>{--s===0&&f()})}),function(){i&&i()}}});var dp=de((K4,jl)=>{"use strict";var E3=oa(),Lr=1.29032,ha=[9.2968,2,5.9],M3=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],P0=2147.64,np=725,op=1288,ap=1450,ip=2576,un=-5.197,pa=3.865,Co=10.135,ma=-14.679,us=-30.229,hs=7.232,sp=-45.713,di=17.1*Lr,da=16.6*Lr,ds=16.6*Lr,cp=[6.9,17.1],O0=[2.95,16.6],A3=1.6,T3=0,S3=1,lp=2,Bl=3,fp=4,up=5,k3=6;function L3(){let e=[],t=[],r=[],n=[],o=E3.createBuilder(e,t,r,n),a=(f,h,p,u,v,m,d=1,x=1)=>{let w=[];for(let T=0;T<=d;T++){let C=[];for(let G=0;G<=x;G++){let $=[f[0]+h[0]*T/d+p[0]*G/x,f[1]+h[1]*T/d+p[1]*G/x,f[2]+h[2]*T/d+p[2]*G/x],H=m($);C.push(o.vert($,u,[v,H[0],H[1]]))}w.push(C)}for(let T=0;T<d;T++)for(let C=0;C<x;C++)o.tri(w[T][C],w[T+1][C],w[T][C+1]),o.tri(w[T+1][C],w[T+1][C+1],w[T][C+1])},i=f=>h=>[(ha[2]-h[2])/Lr-f,h[1]/Lr];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],T3,f=>[f[0]/Lr,f[2]/Lr],13,14),a([pa,0,un],[0,0,ma-un],[0,di,0],[1,0,0],S3,i(8.6),6,6),a([-40,0,un],[pa+40,0,0],[0,di,0],[0,0,1],lp,f=>[(pa-f[0])/Lr,f[1]/Lr],8,4),a([-40,0,-.36],[0,0,un+.36],[0,di,0],[1,0,0],lp,f=>[-f[2]/Lr,f[1]/Lr]),a([Co,0,-80],[0,0,un+80],[0,da,0],[-1,0,0],fp,i(8.6),12,6),a([Co,0,un],[60,0,0],[0,da,0],[0,0,1],up,f=>[(f[0]-Co)/Lr,f[1]/Lr],8,4),a([70,0,un],[0,0,-.36-un],[0,da,0],[-1,0,0],up,f=>[-f[2]/Lr,f[1]/Lr]);let s=f=>[(f[0]-ha[0])/Lr+4.18,f[1]/Lr];a([-20,0,us],[hs+20,0,0],[0,ds,0],[0,0,1],Bl,s,8,6),a([hs,0,us],[0,0,sp-us],[0,ds,0],[1,0,0],Bl,i(28),4,4),a([hs,0,sp],[Co-hs,0,0],[0,da,0],[0,0,1],fp,f=>[(f[0]-ha[0])/Lr,f[1]/Lr],2,4),a([-20,0,ma],[0,0,us-ma],[0,ds,0],[1,0,0],Bl,i(16),4,4);let c=(f,h,p,u)=>a(f,h,p,u,k3,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:r,attr:n}}function hi(e,t,r,n){let o=e.texture({data:[[n]],...r,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{o({data:a,...r,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),o}var Un=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",z3=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,ma],[pa,di,un]],[[Co,0,-80],[70,da,un]],[[-20,0,-80],[hs,ds,us]],[[-40,0,-80],[-20,ds,ma]]],C3=z3.map(e=>`if (hitBox(ro, rd, ${Un(e[0])}, ${Un(e[1])}, 1e4) ) return 0.0;`).join(`
		`),hp="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>M3[t][e].toFixed(6)).join(", ")).join(", ")+")",R3=`
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
	if (hitBox(ro, rd, ${Un([-40,0,ma])}, ${Un([pa-.02,di,un])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Un([Co+.02,0,-80])}, ${Un([70,da,un])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${hp} * (p - ${Un(ha)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${np.toFixed(2)} + ${P0.toFixed(3)} * pc.x / pc.z) / ${ap.toFixed(1)},
		(${op.toFixed(2)} - ${P0.toFixed(3)} * pc.y / pc.z) / ${ip.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${hp} * (p - ${Un(ha)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${np.toFixed(2)} + ${P0.toFixed(3)} * pc.x / pc.z) / ${ap.toFixed(1)},
		(${op.toFixed(2)} - ${P0.toFixed(3)} * pc.y / pc.z) / ${ip.toFixed(1)}
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
		base = texture2D(pinkTex, vec2(fuv.x / ${cp[0].toFixed(2)}, 1.0 - fuv.y / ${cp[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${O0[0].toFixed(2)}, 1.0 - fuv.y / ${O0[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${O0[0].toFixed(2)}, 1.0 - fuv.y / ${O0[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(pa-.05).toFixed(3)} && v_pos.x < ${(Co+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${ma.toFixed(3)};
		projectable = projectable && v_pos.z < ${(un+4.5).toFixed(3)};
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
}`;jl.exports=e=>{let t=L3(),r={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},o={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=hi(e,"res/street/photo.jpg",r,[190,160,120]),i=hi(e,"res/street/photo_mask.png",r,[255,255,255]),s=hi(e,"res/street/facade_pink.jpg",n,[200,150,135]),c=hi(e,"res/street/facade_yellow.jpg",n,[225,180,95]),f=hi(e,"res/street/facade_cream.jpg",n,[215,200,175]),h=hi(e,"res/street/cobbles.jpg",o,[95,95,95]),p=Date.now(),u=e({frag:R3,vert:I3,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:i,pinkTex:s,yellowTex:c,creamTex:f,cobbleTex:h,time:()=>(Date.now()-p)/1e3}});return function(){u()}};jl.exports.layout={MOUTH_Z:un,PINK_X:pa,RIGHT_X:Co,PINK_H:di,CREAM_H:da,S:Lr}});var vp=de((Q4,mp)=>{"use strict";var{glassPanes:P3}=aa(),pp=xn();function O3(){let e=[],t=[],r=(n,o)=>{for(let a of n)e.push(a),t.push(o)};return r(P3(),[0,0,1]),r(pp.windowGlass(),[0,0,1]),r(pp.farDoorGlass(),[1,0,0]),{position:e,normal:t}}mp.exports=e=>{let t=O3(),r=e({frag:`
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r()}}});var Rp=de((Z4,Kl)=>{"use strict";var N3=oa(),Wl=lo(),{wallWithHoles:F3,C:Po}=xn(),He=.28,B={westBack:14.4,westCol:15-He,eastCol:37.4+He,eastBack:41.8,south:Po.z1+.7,northCol:Po.z1+.7+16,northBack:Po.z1+.7+19,cx:(15+37.4)/2,cz:(Po.z1+.7+Po.z1+.7+16-He)/2},Dt={x0:B.westCol+He,x1:B.eastCol-He,z0:B.south,z1:B.northCol-He},Xr=3.3,vs=.92,Oo=5.6,gp=6,Cn=11.9,Io=9.6,xt={x0:B.cx-2.9,x1:B.cx+2.9,top:14.4},H0=7,_p=4,Xl=(B.eastCol-B.westCol)/H0,D3=(B.northCol-B.south)/_p,Ep=3,xs=.26,ya=1.4,ga=1.1,F0=3,to=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(r=>r/t)})(),Oe={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},ro=[],Mp=(e,t,r)=>[B.cx+e,t,B.cz+r],D0=Mp(-5.9,0,3.4),No=.85,Ro={c:[D0[0],4.6*No+.5,D0[2]],r:[5*No,3.6*No,4.5*No]},Ap=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[D0[0]+e.d[0]*No,e.d[1]*No+.5,D0[2]+e.d[2]*No],r:e.r.map(t=>t*No),n:e.n}));for(let e of Ap)ro.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var G3=[3.6,6.3,9];for(let e of G3){let t=8.6+e%1.7*.6;ro.push({c:Mp(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var $3=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:B.cx+e.d[0],z:B.cz+e.d[1],bloom:e.bloom}));for(let e of $3)ro.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var Yl=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[B.cx+Math.cos(t)*2.3,B.cz+Math.sin(t)*2.3]});for(let[e,t]of Yl)ro.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Tp=[];{let e=(r,n,o,a,i,s)=>{let c=Math.hypot(o-r,a-n),f=Math.floor(c/.9);for(let h=0;h<=f;h++){let p=h/f,u=r+(o-r)*p,v=n+(a-n)*p;i!==void 0&&Math.abs((o!==r?u:v)-i)<s||Tp.push([u,v])}};e(Dt.x0+.45,Dt.z0+1.2,Dt.x0+.45,Dt.z1-.45,B.cz,1),e(Dt.x1-.45,Dt.z0+1.2,Dt.x1-.45,Dt.z1-.45,B.cz,1),e(Dt.x0+.45,Dt.z1-.45,Dt.x1-.45,Dt.z1-.45,B.cx,1.9)}var q3=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],G0=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function mi(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function zr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),[s,0,0])}function H3(e,t,r){return{vert:(n,o,a)=>e.vert(t(n),r(o),a),tri:e.tri}}var U3={north:[e=>[e[0],e[1],B.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[B.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[B.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function Sp(e,t,r,n,o){let a=[];for(let i=0;i<r;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===r-1?o:.02);a.push([s,c,e+(i+.5)*t])}return a}var B3=Sp(B.westCol,Xl,H0,He+xs,He+xs),xp=Sp(B.south,D3,_p,.32,He+xs),pi=[B.cx-32.35,B.northCol-77],j3=Array.from({length:H0-1},(e,t)=>B.westCol+(t+1)*Xl),kp=e=>(e[1]-e[0])/2-.2,gs=e=>(e[0]+e[1])/2;function W3(e,t){let r=gs(e),n=kp(e);return{u0:e[0],u1:e[1],bottom:t?0:vs,head:o=>{let a=Math.abs(o-r);return a<n?Xr+Math.sqrt(n*n-a*a):Xr},step:.05}}function V3(e,t,r){return{u0:e-r,u1:e+r,bot:n=>t-Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),step:.04,mat:[Oe.STONE,0,0]}}function X3(e,t,r,n){return{u0:e-t/2,u1:e+t/2,bottom:r,head:()=>n,step:.5,mat:[Oe.STONE,0,0]}}function yp(e,t,r){let[n,o]=U3[t],a=H3(e,n,o),i=[];r.arches.forEach((h,p)=>i.push(W3(h,p===r.open)));let s=[];for(let h of r.bays||r.arches){let p=gs(h);r.oculi&&i.push(V3(p,6.85,.3)),s.push({c:p,y0:r.win[0],y1:r.win[1],w:1.05})}for(let h of r.extraWindows||[])s.push(h);for(let h of s)i.push(X3(h.c,h.w,h.y0,h.y1));for(let h of r.extraHoles||[])i.push(h);F3(a,{u0:r.u0,u1:r.u1,w0:-He,w1:He,top:r.top,holes:i,mat:[Oe.BRICK,0,0],revealMat:[Oe.BRICK,0,0],noEnds:r.noEnds,cuts:r.cuts,topStep:.25});let c=(h,p,u,v,m,d,x)=>{let w=n([h,p,u]),T=n([v,m,d]);zr(e,w[0],w[1],w[2],T[0],T[1],T[2],x)},f=(h,p,u,v,m,d)=>mi(a,h,p,u,v,m,[d,0,0]);for(let h of r.arches){let p=gs(h),u=kp(h),v=28;for(let m of[He,-He]){let d=m>0?1:-1,x=m+d*.025;for(let w=0;w<v;w++){let T=Math.PI*w/v,C=Math.PI*(w+1)/v,G=(ue,De)=>[p+Math.cos(ue)*De,Xr+Math.sin(ue)*De],$=G(T,u),H=G(C,u),oe=G(T,u+.26),ye=G(C,u+.26);f([$[0],$[1],x],[H[0],H[1],x],[ye[0],ye[1],x],[oe[0],oe[1],x],[0,0,d],Oe.STONE);let J=Math.cos((T+C)/2),be=Math.sin((T+C)/2);f([oe[0],oe[1],m],[ye[0],ye[1],m],[ye[0],ye[1],x],[oe[0],oe[1],x],[J,be,0],Oe.STONE)}}}if(r.arches.forEach((h,p)=>{p!==r.open&&c(h[0]-.02,vs,-He-.05,h[1]+.02,vs+.09,He+.05,Oe.STONE)}),c(r.u0,gp,-He,r.u1,gp+.18,He+.09,Oe.STONE),c(r.u0,r.win[0]-.12,He-.01,r.u1,r.win[0],He+.06,Oe.STONE),r.cornice)for(let[h,p,u]of r.cornice)c(h,u-.22,He-.01,p,u,He+.16,Oe.STONE),c(h,u,He-.01,p,u+.16,He+.42,Oe.STONE);for(let{c:h,y0:p,y1:u,w:v,door:m}of s){let d=v/2;if(f([h-d-.01,p,.06],[h+d+.01,p,.06],[h+d+.01,u,.06],[h-d-.01,u,.06],[0,0,1],m?Oe.DARK:Oe.PANE),m){c(h-d-.16,0,He-.01,h-d,u+.16,He+.07,Oe.STONE),c(h+d,0,He-.01,h+d+.16,u+.16,He+.07,Oe.STONE),c(h-d-.16,u,He-.01,h+d+.16,u+.2,He+.09,Oe.STONE),c(h-d,0,.07,h+d,u-.02,.12,Oe.SHUTTER),c(h-.012,0,.12,h+.012,u-.02,.14,Oe.DARK);continue}for(let x of[-1,1]){let w=h+x*d;c(w+x*.02,p+.02,He+.02,w+x*(d+.025),u-.02,He+.06,Oe.SHUTTER)}c(h-d-.09,u,He-.01,h+d+.09,u+.16,He+.05,Oe.STONE),c(h-d-.09,p-.1,He-.01,h+d+.09,p,He+.09,Oe.STONE),c(h-.015,p,.06,h+.015,u,.09,Oe.SHUTTER),c(h-d,(p+u)/2-.015,.06,h+d,(p+u)/2+.015,.09,Oe.SHUTTER)}if(r.oculi)for(let h of r.bays||r.arches){let p=gs(h);f([p-.31,6.54,0],[p+.31,6.54,0],[p+.31,7.16,0],[p-.31,7.16,0],[0,0,1],Oe.DARK)}for(let h of r.cols){let p=vs+.09,u=n([h,0,0]);zr(e,u[0]-.24,p,u[2]-.24,u[0]+.24,p+.12,u[2]+.24,Oe.MARBLE),e.lathe([[.23,p+.12,1],[.24,p+.17],[.2,p+.24],[.215,p+.28],[.17,p+.34,1],[.165,p+.6],[.155,Xr-.5],[.15,Xr-.38,1],[.175,Xr-.34,1],[.17,Xr-.3],[.2,Xr-.22],[.27,Xr-.15],[.29,Xr-.12,1]],u[0],u[2],18,{mat:()=>[Oe.MARBLE,0,0]}),zr(e,u[0]-.29,Xr-.12,u[2]-.29,u[0]+.29,Xr+.01,u[2]+.29,Oe.STONE)}r.walk&&r.walk(e)}function Y3(e){let t=[-1,0,1].map(o=>{let a=B.cx+o*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Oe.STONE,0,0]}});yp(e,"north",{u0:B.westCol-He,u1:B.eastCol+He,top:o=>o>xt.x0+1e-6&&o<xt.x1-1e-6?xt.top:Cn,cuts:[xt.x0,xt.x0+1e-5,xt.x1-1e-5,xt.x1],arches:B3,open:Ep,cols:j3,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[B.westCol-He-3.3,xt.x0,Cn],[xt.x1,B.eastCol+He+3.3,Cn],[xt.x0-.2,xt.x1+.2,xt.top]],walk:o=>{zr(o,Dt.x0,Oo,B.northCol+He,Dt.x1,Oo+.2,B.northBack,Oe.PLASTER),zr(o,Dt.x0,0,B.northBack,Dt.x1,Oo,B.northBack+.3,Oe.PLASTER);for(let a of[B.cx-7.2,B.cx,B.cx+7.2])mi(o,[a-.8,0,B.northBack-.01],[a+.8,0,B.northBack-.01],[a+.8,2.9,B.northBack-.01],[a-.8,2.9,B.northBack-.01],[0,0,-1],[Oe.DARK,0,0]),zr(o,a-.98,0,B.northBack-.06,a+.98,3.12,B.northBack,Oe.STONE),mi(o,[a-.8,0,B.northBack-.07],[a+.8,0,B.northBack-.07],[a+.8,2.9,B.northBack-.07],[a-.8,2.9,B.northBack-.07],[0,0,-1],[Oe.DARK,0,0])}}),mi(e,[xt.x0,11,B.northCol+.2],[xt.x1,11,B.northCol+.2],[xt.x1,13.6,B.northCol+.2],[xt.x0,13.6,B.northCol+.2],[0,0,-1],[Oe.DARK,0,0]),zr(e,xt.x0+.3,10.88,B.northCol-He-.06,xt.x1-.3,11,B.northCol-He+.1,Oe.STONE),zr(e,B.westBack,Oo+.2,B.northBack,B.eastBack,Cn,B.northBack+3.4,Oe.BRICK),zr(e,B.westBack,Io,B.northCol-He,B.westCol-He,Cn,B.northCol+He,Oe.BRICK),zr(e,B.eastCol+He,Io,B.northCol-He,B.eastBack,Cn,B.northCol+He,Oe.BRICK),zr(e,B.westBack,Oo+.2,B.northCol+He+.12,B.eastBack,Cn,B.northBack,Oe.BRICK),ps(e,[B.westBack-.5,Cn+.16,B.northCol-He-.42],[xt.x0-B.westBack+.5,0,0],[0,2.6,4.4],Oe.ROOF),ps(e,[xt.x1,Cn+.16,B.northCol-He-.42],[B.eastBack+.5-xt.x1,0,0],[0,2.6,4.4],Oe.ROOF),ps(e,[xt.x0-.3,xt.top+.16,B.northCol-He-.42],[xt.x1-xt.x0+.6,0,0],[0,1.4,3],Oe.ROOF),bp(e,[xt.x0-.3,xt.top+.16,B.northCol-He-.42],[xt.x0-.3,xt.top+1.56,B.northCol-He+2.58],[xt.x0-.3,xt.top+.16,B.northCol-He+2.58],[-1,0,0],Oe.BRICK),bp(e,[xt.x1+.3,xt.top+.16,B.northCol-He-.42],[xt.x1+.3,xt.top+1.56,B.northCol-He+2.58],[xt.x1+.3,xt.top+.16,B.northCol-He+2.58],[1,0,0],Oe.BRICK),zr(e,xt.x0,Cn,B.northCol+He,xt.x1,xt.top,B.northCol+2.6,Oe.BRICK);for(let[o,a]of[[B.cx-9.8,B.northBack+.6],[B.cx+9.4,B.northBack+.4],[B.cx-4.6,B.northBack+1]])zr(e,o-.4,12.5,a-.4,o+.4,15.4,a+.4,Oe.BRICK),zr(e,o-.52,15.4,a-.52,o+.52,15.62,a+.52,Oe.STONE);let r=(o,a,i)=>{let s=o==="west"?-1:1,c=[];xp.forEach((p,u)=>{let v=gs(p);u===1?c.push({c:v,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:v,y0:1,y1:2.75,w:1.05}),c.push({c:v,y0:3.85,y1:5.45,w:1.05})}),yp(e,o,{u0:B.south,u1:B.northCol-He,top:()=>Io,arches:[],bays:xp,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[B.south,B.northCol-He,Io]]}),zr(e,a,0,B.south,i+s*(He+.12),Io,B.northBack+.3,Oe.BRICK);let f=i-s*He;zr(e,f,0,B.south,f-s*.06,.55,B.northCol-He,Oe.STONE);let h=i-s*(He+.42);ps(e,[h,Io+.16,B.south],[0,0,B.northCol-He-B.south],[a-h+s*.4,1.9,0],Oe.ROOF)};r("west",B.westBack,B.westCol),r("east",B.eastBack,B.eastCol);let n=Po.x1+.7;zr(e,13.65,7.4,B.south-.02,n,7.62,B.south+.14,Oe.STONE),zr(e,13.65,10.4,B.south-.02,n,10.6,B.south+.38,Oe.STONE),ps(e,[13.65,10.6,B.south+.38],[n-13.65,0,0],[0,2.2,-5],Oe.ROOF)}function bp(e,t,r,n,o,a){let i=[a,0,0];e.tri(e.vert(t,o,i),e.vert(r,o,i),e.vert(n,o,i))}function ps(e,t,r,n,o){let a=G0([r[1]*n[2]-r[2]*n[1],r[2]*n[0]-r[0]*n[2],r[0]*n[1]-r[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,h)=>[t[0]+r[0]*f+n[0]*h,t[1]+r[1]*f+n[1]*h,t[2]+r[2]*f+n[2]*h];mi(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[o,0,0]);let c=.08;mi(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],G0([-n[0],0,-n[2]]),[o,0,0])}function K3(e){let t=B.westBack,r=B.eastBack,n=B.south,o=B.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let h=[t+(r-t)*c/a,0,n+(o-n)*f/i];s[c].push(e.vert(h,[0,1,0],[Oe.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var ms=.46,xa=.58,va=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function Q3(e,t,r){let n=ga+r,o=(e>0?Dt.x1-B.cx:B.cx-Dt.x0)-ya-r,a=ga+r,i=(t>0?Dt.z1-B.cz:B.cz-Dt.z0)-ya-r,s=F0+r,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),h=[[n,c],[n,i],[o,i],[o,a],[f,a]],p=Math.atan2(a,f),u=Math.atan2(c,n);for(let v=1;v<10;v++){let m=p+(u-p)*v/10;h.push([Math.cos(m)*s,Math.sin(m)*s])}return h.map(([v,m])=>[B.cx+e*v,B.cz+t*m])}function Z3(e,t,r){let n=r[0]-t[0],o=r[1]-t[1],a=Math.hypot(n,o),i=n/a,s=o/a,c=-s,f=i,h=ms*.5,p=-h,u=a+h,v=[],m=Math.max(1,Math.ceil((u-p)/1));for(let d=0;d<=m;d++){let x=p+(u-p)*d/m,w=[];for(let T=0;T<va.length;T++){let[C,G]=va[T],$=Math.min(va.length-2,T),H=va[Math.max(0,T-1)],oe=va[Math.min(va.length-1,T+1)],ye=(oe[0]-H[0])*ms,be=(oe[1]-H[1])*xa,ue=-ye,De=Math.hypot(be,ue)||1,Ie=[t[0]+i*x+c*C*ms,G*xa,t[1]+s*x+f*C*ms],Ce=[c*(-be/De),-ue/De,f*(-be/De)];w.push(e.vert(Ie,Ce[1]<-.2?[c*Math.sign(C),.3,f*Math.sign(C)]:Ce,[Oe.HEDGE,0,0]))}v.push(w)}for(let d=0;d<m;d++)for(let x=0;x<va.length-1;x++)e.tri(v[d][x],v[d+1][x],v[d+1][x+1]),e.tri(v[d][x],v[d+1][x+1],v[d][x+1]);for(let[d,x]of[[0,-1],[m,1]]){let w=v[d],T=e.vert([t[0]+i*(d?u:p),xa*.5,t[1]+s*(d?u:p)],[i*x,0,s*x],[Oe.HEDGE,0,0]);for(let C=0;C<w.length-1;C++)e.tri(T,w[C],w[C+1])}}function J3(e){for(let t of[-1,1])for(let r of[-1,1]){let n=Q3(t,r,.3);for(let o=0;o<n.length;o++)Z3(e,n[o],n[(o+1)%n.length])}}function e5(e){let t=B.cx,r=B.cz,n=()=>[Oe.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,r,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,r,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,r,16,{mat:()=>[Oe.DARK,0,0]});let o={mat:()=>[Oe.IRON,0,0]};e.tube([[t-.72,1.1,r],[t-.72,1.9,r],[t-.7,2.3,r]],()=>.035,8,6,o),e.tube([[t+.72,1.1,r],[t+.72,1.9,r],[t+.7,2.3,r]],()=>.035,8,6,o);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,r])}e.tube(a,()=>.03,20,6,o),e.tube([[t-.45,2.25,r],[t,2.38,r],[t+.45,2.25,r]],()=>.02,8,5,o),e.ellipsoid([t,2.32,r],[.03,.13,.13],6,10,o);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,h=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*h*i*-1+0),1.95+Math.sin(f)*h,r])}e.tube(s,()=>.016,16,5,o)}}function t5(e){for(let[t,r]of Yl)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,r,20,{mat:()=>[Oe.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,r,12,{mat:()=>[Oe.SOIL,0,0]}),e.tube([[t,.6,r],[t+.02,1,r-.01],[t-.01,1.45,r+.02]],n=>.045-n*.02,6,6,{mat:()=>[Oe.BARK,0,0]})}function r5(e){let[t,,r]=Ro.c,n=zp(7),o=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of o){let c=[[t+a*.05,0,r+i*.05],[t+a*.25,s*.35,r+i*.25],[t+a*.6,s*.7,r+i*.6],[t+a,s,r+i],[t+a*1.35+(n()-.5),s+1.4,r+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Oe.BARK,0,0]});for(let f=0;f<2;f++){let h=.55+f*.2,p=[t+a*h,s*h,r+i*h],u=n()*Math.PI*2;e.tube([p,[p[0]+Math.cos(u)*1.3,p[1]+.9,p[2]+Math.sin(u)*1.3],[p[0]+Math.cos(u)*2.3,p[1]+1.4+n(),p[2]+Math.sin(u)*2.3]],v=>.08*(1-v*.7),8,6,{mat:()=>[Oe.BARK,0,0]})}}for(let a of ro.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Oe.BARK,0,0]})}function n5(e){let t=()=>[Oe.FARBRICK,0,0],r=()=>[Oe.LEAD,0,0],n=(a,i,s,c,f,h)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let p=[];for(let v=0;v<=12;v++){let m=v/12*Math.PI/2,d=Math.cos(m)*s,x=Math.sin(m)*f;h&&(d*=1-.18*Math.sin(m*2)),p.push([Math.max(d,s*.12),c+x])}e.lathe(p,a,i,28,{mat:r});let u=c+f;e.lathe([[s*.13,u-.2,1],[s*.13,u+3,1],[s*.18,u+3.2,1],[s*.02,u+6.4]],a,i,10,{mat:r})};zr(e,14,0,104,52,26,150,Oe.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:r});let o=(a,i,s)=>{zr(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Oe.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};o(20.5,109,36),o(46.5,112,38)}function o5(e){let r=[B.cx,0,B.cz],n=24,o=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=o;c++){let f=Math.PI/2*(c/o)-.05,h=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],p=[r[0]+h[0]*420,r[1]+h[1]*420,r[2]+h[2]*420];a[i].push(e.vert(p,[-h[0],-h[1],-h[2]],[Oe.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<o;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function a5(){let e=[],t=[],r=[],n=[],o=N3.createBuilder(e,t,r,n);return K3(o),Y3(o),J3(o),e5(o),t5(o),r5(o),o.save(),o.translate(pi[0],0,pi[1]),n5(o),o.restore(),o5(o),{position:e,normal:t,elements:r,attr:n}}var Lp=[[[13.65,0,Po.z0-.7],[Po.x1+.7,10.6,B.south]],[[B.westBack,Oo,B.northCol-He],[B.eastBack,Cn,B.northBack+3.4]],[[xt.x0,Cn,B.northCol-He],[xt.x1,xt.top,B.northCol+2.6]],[[B.westBack,0,B.south],[B.westCol+He,Io,B.northBack+.3]],[[B.eastCol-He,0,B.south],[B.eastBack,Io,B.northBack+.3]],[[14+pi[0],0,104+pi[1]],[52+pi[0],26,150+pi[1]]]];function i5(e,t,r,n){let o=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<r[i]||e[i]>n[i])return!1;continue}let s=(r[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),o=Math.max(o,s),a=Math.min(a,c),o>a)return!1}return!0}function N0(e,t,r,n){let o=[(e[0]-r[0])/n[0],(e[1]-r[1])/n[1],(e[2]-r[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=o[0]*a[0]+o[1]*a[1]+o[2]*a[2],c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-1,f=s*s-i*c;if(f<=0)return 0;let h=Math.sqrt(f),p=Math.max(0,(-s-h)/i),u=(-s+h)/i;return Math.max(0,u-p)}function Vl(e){for(let[t,r]of Lp)if(i5(e,to,t,r))return 0;return 1}function zp(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function s5(){let e=[],t=[],r=[],n=[],o=[],a=[],i=[],s=zp(21),c=(m,d,x,w,T,C,G)=>{let $=e.length/3;for(let[H,oe]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...m),t.push(H,oe),r.push(d,x,w),n.push(...T),o.push(...C),a.push(...G);i.push($,$+1,$+2,$,$+2,$+3)},f=(m,d)=>{let x=1;for(let w of ro){if(w===d||!w.shadow)continue;let T=N0(m,to,w.c,w.r);T>0&&(x*=Math.exp(-T*.9))}return x},h=ro.map(m=>({...m,pts:null}));for(let m of h)for(let d=0;d<m.n;d++){let x;do x=[s()*2-1,s()*2-1,s()*2-1];while(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]>1);let w=Math.hypot(x[0],x[1],x[2])||1,T=Math.pow(s(),.35)*.98,C=[x[0]/w*T,x[1]/w*T,x[2]/w*T];if(m.spindle){let Ie=C[1],Ce=Math.sqrt(Math.max(.02,1-Ie*Ie))*(Ie>0?1-Ie*.55:1+Ie*.25),ge=Math.hypot(C[0],C[2])||1,nt=Ce*Math.min(1,ge*1.4);C=[C[0]/ge*nt,Ie,C[2]/ge*nt]}m.magnolia&&C[1]<-.55&&(C[1]=-.55+(C[1]+.55)*.35);let G=[m.c[0]+C[0]*m.r[0],m.c[1]+C[1]*m.r[1],m.c[2]+C[2]*m.r[2]],$,H;if(m.magnolia){let Ie=0;for(let nt of Ap)Ie=Math.max(Ie,N0(G,to,nt.c,nt.r));$=Math.exp(-Ie*1.1);let Ce=1;for(let nt of ro)if(!nt.magnolia&&nt.shadow){let Yt=N0(G,to,nt.c,nt.r);Yt>0&&(Ce*=Math.exp(-Yt*.9))}$*=Vl(G)*Ce;let ge=q3(G,Ro.c);H=G0([ge[0]/Ro.r[0]+C[0]*.5,ge[1]/Ro.r[1]+C[1]*.5,ge[2]/Ro.r[2]+C[2]*.5]),T=Math.min(1,Math.hypot(ge[0]/Ro.r[0],ge[1]/Ro.r[1],ge[2]/Ro.r[2])*.6+T*.4)}else{let Ie=N0(G,to,m.c,m.r);$=Math.exp(-Ie*(m.spindle?2.2:1.25)),$*=Vl(G)*f(G,ro[h.indexOf(m)]),H=G0([C[0]/m.r[0],C[1]/m.r[1],C[2]/m.r[2]])}let oe=Math.max(0,H[0]*to[0]+H[1]*to[1]+H[2]*to[2]),ye=.25+.75*Math.pow(T,1.5)*(.65+.35*(H[1]*.5+.5)),J=m.size[0]+(m.size[1]-m.size[0])*s(),be=.85+s()*.3,ue=m.leaf.map(Ie=>Ie*be),De=m.cell;m.cell===3&&s()<.35&&(De=2),c(G,J,De,s()*Math.PI*2,[$,ye,.35+.65*oe],ue,m.bloom)}for(let[m,d]of Tp){let x=s()<.5;for(let w=0;w<3;w++){let T=[m+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],C=Vl(T)*f(T,null);c(T,.32+s()*.12,s()<.7?3:2,s()*6.28,[C,.6+s()*.3,.8],[.75,.9,.6],x?[1,.55,.75]:[.85,.8,1.15])}}let p=i.length/6,u=Array.from({length:p},(m,d)=>d);for(let m=p-1;m>0;m--){let d=Math.floor(s()*(m+1));[u[m],u[d]]=[u[d],u[m]]}let v=[];for(let m of u)for(let d=0;d<6;d++)v.push(i[m*6+d]);return{center:e,corner:t,par:r,light:n,tint:o,bloom:a,elements:v}}var qe=e=>e.toFixed(4),ys=e=>`vec3(${qe(e[0])}, ${qe(e[1])}, ${qe(e[2])})`,Cp=`
const vec3 SUN = ${ys(to)};
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
`,c5=Lp.map(([e,t])=>`if (hitBox(ro, SUN, ${ys(e)}, ${ys(t)})) return 0.0;`).join(`
	`),l5=ro.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${ys(e.c)}, ${ys(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),f5=(e,t,r,n,o,a,i,s,c)=>`
	{
		float t = (${qe(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${qe(Oo)} && u > ${qe(r-He)} && u < ${qe(r+n*o+He)}) {
				float k = floor((u - ${qe(r)}) / ${qe(n)});
				float a = ${qe(r)} + k * ${qe(n)} + (k < 0.5 ? ${qe(a)} : 0.02);
				float b = ${qe(r)} + (k + 1.0) * ${qe(n)} - (k > ${qe(o-1.5)} ? ${qe(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${qe(s)}) < 0.5 ? 0.0 : ${qe(vs+.09)};
				bool hole = (q.y > sill && q.y < ${qe(Xr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${qe(Xr)} && d * d + (q.y - ${qe(Xr)}) * (q.y - ${qe(Xr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,$0=ga+.3,q0=ga+.3,bs=F0+.3,wp=Dt.x1-B.cx-ya-.3,u5=Dt.z1-B.cz-ya-.3,h5=B.cz-Dt.z0-ya-.3,d5=Math.sqrt(bs*bs-$0*$0),p5=Math.sqrt(bs*bs-q0*q0),m5=[[B.cx,B.cz,.86,1.18],[B.cx,B.cz,1.25,.3],...Yl.map(([e,t])=>[e,t,.42,.65])].map(([e,t,r,n])=>`if (hitCyl(ro, vec2(${qe(e)}, ${qe(t)}), ${qe(r)}, ${qe(n)})) return 0.0;`).join(`
	`),v5=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${qe(B.cx)}, ${qe(B.cz)}));
	float b1 = xz.y > ${qe(B.cz)} ? ${qe(u5)} : ${qe(h5)};
	vec2 A = vec2(${qe($0)}, ${qe(d5)}), Bp = vec2(${qe($0)}, b1), C = vec2(${qe(wp)}, b1);
	vec2 D = vec2(${qe(wp)}, ${qe(q0)}), E = vec2(${qe(p5)}, ${qe(q0)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${qe(bs)}));
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
	${f5("z",B.northCol,B.westCol,Xl,H0,He+xs,He+xs,Ep,"ro.z > "+qe(B.northCol-He))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${m5}
	if (ro.y < ${qe(xa)} && ro.x > ${qe(Dt.x0)} && ro.x < ${qe(Dt.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${qe(xa)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${qe(ms*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${qe(xa)}, 4.0)));
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
${Cp}
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
		bool yard = P.x > ${qe(Dt.x0)} && P.x < ${qe(Dt.x1)} && P.z < ${qe(Dt.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${qe(Dt.x0)}, ${qe(Dt.x1)} - P.x);
			float ez = min(P.z - ${qe(Dt.z0)}, ${qe(Dt.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${qe(B.cx)}), dz = abs(P.z - ${qe(B.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${qe(ya)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${qe(ya)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${qe(F0)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${qe(B.cz)}, P.x - ${qe(B.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${qe(F0)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${qe(ga)} || dz < ${qe(ga)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${qe(ga)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${qe(B.cx)}, ${qe(B.cz)})));
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${qe(xa)}, P.y) * (0.6 + 0.4 * n);
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
	bool walk = (P.x < ${qe(B.westCol)} || P.x > ${qe(B.eastCol)} || P.z > ${qe(B.northCol)}) && P.y < ${qe(Oo+.05)} && P.z > ${qe(B.south-.1)} && P.z < ${qe(B.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${qe(B.northCol)} ? P.z - ${qe(B.northCol)} : (P.x < ${qe(B.westCol)} ? ${qe(B.westCol)} - P.x : P.x - ${qe(B.eastCol)});
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
${Cp}
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
}`;function w5(e,t,r){let n=e.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(t).then(o=>{if(!o.ok)throw new Error("Could not load "+t);return o.blob()}).then(o=>createImageBitmap(o,{premultiplyAlpha:"none"})).then(o=>n({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o)),n}Kl.exports=e=>{let t=a5(),r=s5(),n=w5(e,"res/garden/foliage.webp",[0,0,0,0]),o=Date.now(),a=()=>Wl.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:20,i=e({frag:g5,vert:x5,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>Wl.gardenDetail}}),s=e({frag:b5,vert:y5,attributes:{center:r.center,corner:r.corner,par:r.par,light:r.light,tint:r.tint,bloom:r.bloom},elements:new Uint32Array(r.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(r.elements.length*Wl.leafShare/6)*6});return function(){i(),s()}};Kl.exports.layout={G:B,YARD:Dt,SUN:to}});var Dp=de((J4,Fp)=>{"use strict";var _5=oa(),{C:Np}=xn(),Rn=Np.x1+.35,ef=Np.zc,Ql=[Rn-7.3,2,ef],Ip=5.2*Math.PI/180,Pp=2100,E5=725,M5=1288,A5=1450,T5=2576,ba=ef-3.2,Op=ef+3.3,Zl=Rn+5,Jl=Rn+11.7,U0=3.9,ws=Rn+22.7,B0=40;function S5(){let e=[],t=[],r=[],n=[],o=_5.createBuilder(e,t,r,n),a=(h,p,u,v,m,d)=>{let x=[];for(let w=0;w<=m;w++){x.push([]);for(let T=0;T<=d;T++){let C=[0,1,2].map(G=>h[G]+p[G]*w/m+u[G]*T/d);x[w].push(o.vert(C,v,[0,0,0]))}}for(let w=0;w<m;w++)for(let T=0;T<d;T++)o.tri(x[w][T],x[w+1][T],x[w+1][T+1]),o.tri(x[w][T],x[w+1][T+1],x[w][T+1])},i=Op-ba,s=.7;a([Rn-s,0,ba],[Zl-Rn+s,0,0],[0,0,i],[0,1,0],6,4);let c=Jl-Zl,f=Math.hypot(c,U0);return a([Zl,0,ba],[c,U0,0],[0,0,i],[-U0/f,c/f,0],6,4),a([Jl,U0,ba],[ws-Jl,0,0],[0,0,i],[0,1,0],6,4),a([Rn-s,0,ba],[ws-Rn+s,0,0],[0,B0,0],[0,0,1],12,12),a([Rn-s,0,Op],[ws-Rn+s,0,0],[0,B0,0],[0,0,-1],12,12),a([ws,0,ba],[0,B0,0],[0,0,i],[-1,0,0],8,4),a([Rn-s,B0,ba],[ws-Rn+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:r,attr:n}}var Bn=e=>e.toFixed(5),k5=`
precision highp float;
uniform sampler2D photo;
varying vec3 v_pos;

void main() {
	vec3 d = v_pos - vec3(${Bn(Ql[0])}, ${Bn(Ql[1])}, ${Bn(Ql[2])});
	float c = ${Bn(Math.cos(Ip))}, s = ${Bn(Math.sin(Ip))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Bn(E5)} + ${Bn(Pp)} * d.z / fw, ${Bn(M5)} - ${Bn(Pp)} * up / fw);
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
}`;Fp.exports=e=>{let t=S5(),r=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(o=>{if(!o.ok)throw new Error("Could not load the Florence photo");return o.blob()}).then(o=>createImageBitmap(o)).then(o=>r({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o));let n=e({frag:k5,vert:L5,attributes:{position:t.position},elements:new Uint32Array(t.elements),uniforms:{photo:r},cull:{enable:!1}});return function(){n()}}});var Bp=de((eE,Up)=>{"use strict";var{A:Gp,BENCH:z5,SHAFT:tf,TREE:_s,oculusGLSL:C5}=eo(),R5=lo(),j0=_s.sxz,$p=_s.sy,qp=_s.yaw;function I5(e){let t=new DataView(e),r=t.getUint32(4,!0),n=t.getUint32(8,!0),o=t.getUint32(12,!0),a=[0,1,2].map(u=>t.getFloat32(16+u*4,!0)),i=[0,1,2].map(u=>t.getFloat32(28+u*4,!0)),s=40,c=new Uint16Array(e,s,r*3);s+=r*6;let f=new Uint16Array(e,s,r*2);s+=r*4;let h=new Int8Array(e,s,r*3);s+=r*3,s=s+3&-4;let p=new Uint32Array(e,s,o);return{nV:r,nWood:n,nI:o,mn:a,sz:i,pos:c,uv:f,nrm:h,idx:p}}function P5(e){let t=new Float32Array(e.nV*3),r=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),o=new Float32Array(e.nV),a=Math.cos(qp),i=Math.sin(qp);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*j0,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*$p,h=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*j0;t[s*3]=Gp.cx+a*c+i*h,t[s*3+1]=z5.soil+.02+f,t[s*3+2]=Gp.zc-i*c+a*h;let p=e.nrm[s*3]/127/j0,u=e.nrm[s*3+1]/127/$p,v=e.nrm[s*3+2]/127/j0,m=Math.hypot(p,u,v)||1;p/=m,u/=m,v/=m,r[s*3]=a*p+i*v,r[s*3+1]=u,r[s*3+2]=-i*p+a*v,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,o[s]=s>=e.nWood?1:0}return{position:t,normal:r,uv:n,leaf:o,elements:e.idx}}function Hp(e,t,r,n){let o=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>o({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...r})).catch(a=>console.error(a)),o}var rn=e=>e.toFixed(4),vi=_s.crownC,gi=_s.crownR,O5=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

const vec3 SHAFT = vec3(${rn(tf[0])}, ${rn(tf[1])}, ${rn(tf[2])});

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
	vec3 cc = vec3(${rn(vi[0])}, ${rn(vi[1])}, ${rn(vi[2])});
	vec3 cr = vec3(${rn(gi[0])}, ${rn(gi[1])}, ${rn(gi[2])});
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
	vec3 rel = (v_pos - vec3(${rn(vi[0])}, ${rn(vi[1])}, ${rn(vi[2])})) / vec3(${rn(gi[0])}, ${rn(gi[1])}, ${rn(gi[2])});
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
}`;Up.exports=e=>{let t=null,r=Hp(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Hp(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),o=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=P5(I5(a));t=e({vert:O5,frag:N5,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:r,bark:n,time:()=>R5.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var tm=de((tE,rf)=>{"use strict";var{A:jp,BENCH:Zp,oculusGLSL:Jp}=eo(),Wp=lo(),F5=1.74,D5=1.877,no=F5/D5,_a={x:jp.cx-1.22,z:jp.zc+.02,hipY:Zp.seat+.115},jn=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Vp=e=>[-e[0],-e[1],-e[2],e[3]],Ea=(e,t)=>{let r=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/r*n,e[1]/r*n,e[2]/r*n,Math.cos(t/2)]},Xp=(e,t,r)=>jn(Ea([0,0,1],r*Math.PI/180),jn(Ea([0,1,0],t*Math.PI/180),Ea([1,0,0],e*Math.PI/180))),G5=e=>{let t=Math.hypot(...e)||1;return e.map(r=>r/t)};function Fo(e,t,r){let[n,o,a,i]=t,s=n*n,c=o*o,f=a*a,h=n*o,p=n*a,u=o*a,v=i*n,m=i*o,d=i*a;return[(1-2*(c+f))*r[0],2*(h+d)*r[0],2*(p-m)*r[0],0,2*(h-d)*r[1],(1-2*(s+f))*r[1],2*(u+v)*r[1],0,2*(p+m)*r[2],2*(u-v)*r[2],(1-2*(s+c))*r[2],0,e[0],e[1],e[2],1]}function vo(e,t){let r=new Array(16);for(let n=0;n<4;n++)for(let o=0;o<4;o++)r[n*4+o]=e[o]*t[n*4]+e[4+o]*t[n*4+1]+e[8+o]*t[n*4+2]+e[12+o]*t[n*4+3];return r}function $5(e){let t=Math.hypot(e[0],e[1],e[2]),r=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),o=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/r,c=e[5]/r,f=e[6]/r,h=e[8]/n,p=e[9]/n,u=e[10]/n,v=o+c+u,m;if(v>0){let d=Math.sqrt(v+1)*2;m=[(f-p)/d,(h-i)/d,(a-s)/d,d/4]}else if(o>c&&o>u){let d=Math.sqrt(1+o-c-u)*2;m=[d/4,(s+a)/d,(h+i)/d,(f-p)/d]}else if(c>u){let d=Math.sqrt(1+c-o-u)*2;m=[(s+a)/d,d/4,(p+f)/d,(h-i)/d]}else{let d=Math.sqrt(1+u-o-c)*2;m=[(h+i)/d,(p+f)/d,d/4,(a-s)/d]}return G5(m)}var V0={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,r=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,o)=>{V0[e+"Hand"+n+"1"]=[0,0,t*(18+o*6)*r],V0[e+"Hand"+n+"2"]=[0,0,t*(26+o*6)*r],V0[e+"Hand"+n+"3"]=[0,0,t*16*r]})}function wa(e,t,r){let n=e-t;return n-=Math.round(n),Math.exp(-(n/r)*(n/r))}function Yp(e){let t=9+20*Math.cos(2*Math.PI*e),r=4+13*wa(e,.14,.07)+57*wa(e,.72,.12),n=5*wa(e,.06,.04)-9*wa(e,.42,.12)+17*wa(e,.62,.05)-3*wa(e,.85,.1),o=-26*wa(e,.58,.06);return{hip:t,knee:r,ankle:n,toe:o}}function q5(e){let t=(e%1+1)%1,r=Yp(t),n=Yp(t+.5),o=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*o,0,0],RightArm:[-16*o,0,0],LeftForeArm:[0,-14-8*Math.max(0,-o),0],RightForeArm:[0,14+8*Math.max(0,o),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-r.hip,0,0],LeftLeg:[r.knee,0,0],LeftFoot:[r.ankle,0,0],LeftToeBase:[r.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*o}}var Kp=`
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
}`,Qp=`
precision highp float;
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${Jp()}
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
}`;function H5(e,t){let r=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((o,a)=>{let i=new Image;i.onload=()=>o(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}var em={w:.13,h:.2},W0=e=>.011*(1-Math.pow(1-e,3));function U5(){let e=[],t=[],r=[],n=[],o=[],a=(d,x,w,T,C,G,$)=>{let H=e.length/3;[d,x,w,T].forEach((oe,ye)=>{e.push(...oe),t.push(...C),r.push(...$[ye]),n.push(G)}),o.push(H,H+1,H+2,H,H+2,H+3)},{w:i,h:s}=em,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],h=-.006,p=i+.001,u=c+.001;a([0,h,-u],[p,h,-u],[p,h,u],[0,h,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,h+.001,-u],[0,h+.001,u],[p,h+.001,u],[p,h+.001,-u],[0,1,0],2,f),a([-p,h,-u],[0,h,-u],[0,h,u],[-p,h,u],[0,-1,0],2,f),a([-p,h+.001,-u],[-p,h+.001,u],[0,h+.001,u],[0,h+.001,-u],[0,1,0],2,f);let v=8;for(let d of[1,-1]){for(let w=0;w<v;w++){let T=w/v,C=(w+1)/v,G=(.002+T*(i-.002))*d,$=(.002+C*(i-.002))*d,H=W0(T),oe=W0(C),ye=d>0?T:1-T,J=d>0?C:1-C,be=1,ue=-(oe-H)/($-G);a([G,H,-c],[$,oe,-c],[$,oe,c],[G,H,c],[ue,be,0],3,[[ye,1],[J,1],[J,0],[ye,0]]),a([G,h+.001,c],[$,h+.001,c],[$,oe,c],[G,H,c],[0,0,1],4,f),a([G,H,-c],[$,oe,-c],[$,h+.001,-c],[G,h+.001,-c],[0,0,-1],4,f)}let x=i*d;a([x,h+.001,-c],[x,W0(1),-c],[x,W0(1),c],[x,h+.001,c],[d,0,0],4,f)}let m=10;for(let d=0;d<m;d++){let x=d/m,w=(d+1)/m,T=e.length/3;for(let[C,G]of[[x,-c],[w,-c],[w,c],[x,c]])e.push(C,0,G),t.push(0,1,0),r.push(C,(G+c)/s),n.push(5);o.push(T,T+1,T+2,T,T+2,T+3)}return{pos:e,nrm:t,uv:r,kind:n,idx:o}}function B5(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let r=7,n=()=>(r=r*16807%2147483647,r/2147483647),o=(i,s,c,f,h,p,u)=>{for(let v=0;v<p;v++){let m=i+(n()-.5)*c*2,d=s+(n()-.5)*f*2,x=20+n()*60,w=t.createRadialGradient(m,d,0,m,d,x);w.addColorStop(0,`rgba(${h},${u})`),w.addColorStop(1,`rgba(${h},0)`),t.fillStyle=w,t.fillRect(m-x,d-x,x*2,x*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var j5=`
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
		float r = u * ${em.w.toFixed(3)};
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
${Jp()}
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
}`;function V5(){let e=[],t=[],r=[],n=[],o=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],h=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],p=16;for(let u=0;u<h.length;u++){let[v,m,d,x]=h[u],w=x===2?.45:1;for(let T=0;T<=p;T++){let C=T/p*Math.PI*2;e.push(Math.cos(C)*v,m,Math.sin(C)*v*w);let G=Math.max(u-1,0),$=Math.min(u+1,h.length-1),H=h[$][0]-h[G][0],oe=h[$][1]-h[G][1],ye=Math.hypot(H,oe)||1;t.push(Math.cos(C)*oe/ye,-H/ye,Math.sin(C)*oe/ye/w),r.push(...d),n.push(x)}}for(let u=0;u<h.length-1;u++)for(let v=0;v<p;v++){let m=u*(p+1)+v,d=m+p+1;o.push(m,d,m+1,m+1,d,d+1)}return{pos:e,nrm:t,col:r,mat:n,idx:o}}var X5=`
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
}`;rf.exports=e=>{let t="res/avatar/",r=null,n=Date.now(),o=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[_a.x,1.9,_a.z],glow:0};Promise.all([fetch(t+"avatar.json").then($=>$.json()),fetch(t+"avatar.bin").then($=>$.arrayBuffer())]).then(([$,H])=>{r=s($,H)}).catch($=>console.error($));let i=e.texture({data:[[[255,255,255,255]]]});function s($,H){let oe=(Le,pt)=>new Float32Array(H,Le,pt),ye=$.bones,J=ye.length,be={};ye.forEach((Le,pt)=>{be[Le.name]=pt});let ue=[];for(let Le=0;Le<J;Le++)ue.push(Array.from(oe($.ibm+Le*64,16)));let De=ye.map(Le=>Fo(Le.t,Le.r,Le.s)),Ie=[];for(let Le=0;Le<J;Le++){let pt=ye[Le].parent;Ie[Le]=pt<0?De[Le]:vo(Ie[pt],De[Le])}let Ce=Ie.map($5),ge=$.meshes.map(Le=>{let pt=oe(Le.pos,Le.n*3),kt=oe(Le.nrm,Le.n*3),Wt=oe(Le.uv,Le.n*2),bt=new Uint8Array(H,Le.jnt,Le.n*4),Gt=oe(Le.wgt,Le.n*4),mt=new Uint16Array(H,Le.idx,Le.ni),zt={};for(let Vr in Le.morphs){let Kt=Le.morphs[Vr];zt[Vr]={idx:new Uint16Array(H,Kt.idx,Kt.n),d:oe(Kt.d,Kt.n*3)}}let It=new Float32Array(Le.n*3),g=new Float32Array(Le.n*3),jt=new Float32Array(Le.n*3),nr=e.buffer({data:It,usage:"dynamic"}),Ze=e.buffer({data:g,usage:"dynamic"}),$t=/hair/.test(Le.name),At=/EyeAO|Eyelash/.test(Le.name),or=/Body|Head/.test(Le.name),Jt=Le.kind||0;return{m:Le,pos:pt,nrm:kt,uv:Wt,jnt:bt,wgt:Gt,idx:mt,morphs:zt,outP:It,outN:g,work:jt,pb:nr,nbuf:Ze,tex:Le.tex?H5(e,t+Le.tex):i,kind:Jt,alphaScale:/EyeAO/.test(Le.name)?.25:1,blend:Le.blend||$t,alphaCut:$t?.35:At?.02:0,skin:or?1:0}}),nt=e({vert:Kp,frag:Qp,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1}}),Yt=e({vert:Kp,frag:Qp,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}});for(let Le of ge)Le.uvBuf=e.buffer(Le.uv),Le.el=e.elements({data:Le.idx,type:"uint16"});let st=Ie[be.Hips],Bt=Ea([1,0,0],-Math.PI/2),Rt=vo(Fo([_a.x-st[12]*no,_a.hipY-st[14]*no,_a.z+st[13]*no],Bt,[1,1,1]),Fo([0,0,0],[0,0,0,1],[no,no,no])),lr=new Array(J),ir=-1,En=(Le,pt,kt)=>vo(Fo([Le,0,pt],Ea([0,1,0],kt),[1,1,1]),Fo([0,0,0],[0,0,0,1],[no,no,no])),Cr=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Le=>be[Le]),Wr=Cr.map(Le=>Ie[Le][13]*no);function on(Le){let pt=q5(Le.phase),kt={},Wt=g=>{for(let jt in g){let nr=g[jt],Ze=Xp(nr[0],nr[1],nr[2]);kt[jt]=kt[jt]?jn(kt[jt],Ze):Ze}};Wt(pt.swing),Wt(pt.pose);let bt=Math.cos(Le.heading),Gt=-Math.sin(Le.heading),mt=En(Le.x+bt*pt.sway,Le.z+Gt*pt.sway,Le.heading),zt=new Array(J);for(let g=0;g<J;g++){let jt=ye[g],nr=De[g],Ze=kt[jt.name];if(Ze){let $t=Ce[g],At=jn(Vp($t),jn(Ze,$t));nr=Fo(jt.t,jn(jt.r,At),jt.s)}zt[g]=jt.parent<0?vo(mt,nr):vo(zt[jt.parent],nr)}let It=1/0;Cr.forEach((g,jt)=>{It=Math.min(It,zt[g][13]-Wr[jt])});for(let g=0;g<J;g++)zt[g]=zt[g].slice(),zt[g][13]-=It,lr[g]=vo(zt[g],ue[g]);return{blink:0}}function Vn(Le,pt){if(pt)return on(pt);let kt=Math.sin(Le*2*Math.PI/4.2),Wt=Le%3.7,bt=Wt<.16?Math.sin(Wt/.16*Math.PI):0,mt={RightArm:[0,0,11*Math.sin(Le*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((Ze,$t)=>{let At=Math.sin(Le*1.1-$t*.5);mt["RightHand"+Ze+"1"]=[0,0,8+12*At],mt["RightHand"+Ze+"2"]=[0,0,6+10*At]});let zt={},It=(Ze,$t)=>{for(let At in Ze){let or=Ze[At],Jt=Xp(or[0]*$t,or[1]*$t,or[2]*$t);zt[At]=zt[At]?jn(zt[At],Jt):Jt}};It(V0,1),It({Spine1:[kt*.8,0,0],Spine2:[kt*.6,0,0]},1),It(mt,1);let g=new Array(J),jt=new Array(J);for(let Ze=0;Ze<J;Ze++){let $t=ye[Ze],At=De[Ze],or=zt[$t.name];if(or){let Jt=Ce[Ze],Vr=jn(Vp(Jt),jn(or,Jt));At=Fo($t.t,jn($t.r,Vr),$t.s)}g[Ze]=$t.parent<0?vo(Rt,At):vo(g[$t.parent],At),jt[Ze]=null}for(let Ze=0;Ze<J;Ze++)lr[Ze]=vo(g[Ze],ue[Ze]);let nr=Ze=>[Ze[12],Ze[13],Ze[14]];return a.headPos=nr(g[be.Head]),a.hipsPos=nr(g[be.Hips]),a.headM=g[be.Head],{blink:bt}}function je(Le,pt){let{pos:kt,nrm:Wt,jnt:bt,wgt:Gt,outP:mt,outN:zt,work:It,m:g}=Le,jt=g.n,nr=kt;if(pt){It.set(kt);for(let Ze in Le.morphs){let $t=pt[Ze]||0;if($t<=0)continue;let At=Le.morphs[Ze];for(let or=0;or<At.idx.length;or++){let Jt=At.idx[or]*3;It[Jt]+=At.d[or*3]*$t,It[Jt+1]+=At.d[or*3+1]*$t,It[Jt+2]+=At.d[or*3+2]*$t}}nr=It}for(let Ze=0;Ze<jt;Ze++){let $t=nr[Ze*3],At=nr[Ze*3+1],or=nr[Ze*3+2],Jt=Wt[Ze*3],Vr=Wt[Ze*3+1],Kt=Wt[Ze*3+2],Ra=0,Bo=0,Or=0,Nn=0,oo=0,Xn=0;for(let Mn=0;Mn<4;Mn++){let an=Gt[Ze*4+Mn];if(an===0)continue;let ar=lr[bt[Ze*4+Mn]];Ra+=an*(ar[0]*$t+ar[4]*At+ar[8]*or+ar[12]),Bo+=an*(ar[1]*$t+ar[5]*At+ar[9]*or+ar[13]),Or+=an*(ar[2]*$t+ar[6]*At+ar[10]*or+ar[14]),Nn+=an*(ar[0]*Jt+ar[4]*Vr+ar[8]*Kt),oo+=an*(ar[1]*Jt+ar[5]*Vr+ar[9]*Kt),Xn+=an*(ar[2]*Jt+ar[6]*Vr+ar[10]*Kt)}mt[Ze*3]=Ra,mt[Ze*3+1]=Bo,mt[Ze*3+2]=Or;let jo=Math.hypot(Nn,oo,Xn)||1;zt[Ze*3]=Nn/jo,zt[Ze*3+1]=oo/jo,zt[Ze*3+2]=Xn/jo}g.grid&&!et&&Ue(Le),Le.pb.subdata(mt),Le.nbuf.subdata(zt)}function Ue(Le){let[pt,kt]=Le.m.grid,Wt=Le.outP,bt=Le.outN,Gt=Zp.seat+.012;for(let mt=1;mt<pt;mt++){let zt=Math.pow(1-mt/(pt-1),1.5);for(let It=0;It<kt;It++){let g=(mt*kt+It)*3;Wt[g+1]>Gt?Wt[g+1]=Gt+(Wt[g+1]-Gt)*Math.max(zt,.15):Wt[g+1]=Gt}}for(let mt=0;mt<bt.length;mt+=3)bt[mt]=0,bt[mt+1]=1,bt[mt+2]=0}let et=!1;function yt(Le,pt){et=!!pt;let kt=Vn(Le,pt),Wt={eyeBlinkLeft:kt.blink,eyeBlinkRight:kt.blink};for(let bt of ge)je(bt,Object.keys(bt.morphs).length?Wt:null);a.pose=kt}return{parts:ge,update:yt,drawOpaque:nt,drawBlend:Yt,state:a}}function c($,H,oe){let ye=Math.min(1,Math.max(0,(oe-$)/(H-$)));return ye*ye*(3-2*ye)}let f=U5(),h=B5(),p=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):i,u=e({vert:j5,frag:W5,attributes:{position:f.pos,normal:f.nrm,uv:f.uv,kind:f.kind},elements:new Uint16Array(f.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),v=V5(),m=e({vert:X5,frag:Y5,attributes:{position:v.pos,normal:v.nrm,color:v.col,mat:v.mat},elements:new Uint16Array(v.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),d=e({vert:K5,frag:Q5,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x($){let H=$.headM,oe=ge=>{let nt=Math.hypot(...ge)||1;return ge.map(Yt=>Yt/nt)},ye=oe([H[4],H[5],H[6]]),J=oe([H[8],H[9],H[10]]),be=ye,ue=J.map(ge=>-ge),De=[ue[1]*be[2]-ue[2]*be[1],ue[2]*be[0]-ue[0]*be[2],ue[0]*be[1]-ue[1]*be[0]],Ie=$.headPos,Ce=[0,1,2].map(ge=>Ie[ge]+ye[ge]*.06+J[ge]*.185);return[De[0],De[1],De[2],0,ue[0],ue[1],ue[2],0,be[0],be[1],be[2],0,Ce[0],Ce[1],Ce[2],1]}let w=-1,T="",C=null;function G($){if(!r)return;let H=(Wp.motion,o()),oe=C?[C.x,C.z,C.heading,C.phase].map(J=>J.toFixed(4)).join():"";(oe!==T||!C&&Math.abs(H-w)>(Wp.isPhone?1/30:0))&&(r.update(H,C),w=H,T=oe);for(let J of r.parts)J.blend||r.drawOpaque({pb:J.pb,nb:J.nbuf,uv:J.uvBuf,el:J.el,tex:J.tex,alphaCut:J.alphaCut,skin:J.skin,kind:J.kind,alphaScale:J.alphaScale});let ye=r.state;if(ye.headM&&!C){u({model:x(ye)});let J=ye.headPos,be=Math.sin(H*1.3)*.02,ue=[J[0],J[1]+.62+be,J[2]+.05],De=H*.6,Ie=Fo(ue,jn(Ea([0,1,0],De),Ea([0,0,1],.18)),[1.2,1.2,1.2]),Ce=.5+.5*Math.sin(H*2);m({model:Ie,pulse:Ce}),a.glowPos=ue,a.glow=.06+.03*Ce,d({center:[ue[0],ue[1]-.12,ue[2]],size:.1,pulse:Ce})}for(let J of r.parts)J.blend&&r.drawBlend({pb:J.pb,nb:J.nbuf,uv:J.uvBuf,el:J.el,tex:J.tex,alphaCut:J.alphaCut,skin:J.skin,kind:J.kind,alphaScale:J.alphaScale})}return G.state=a,G.place=_a,G.setWalk=$=>{C=$||null,C&&(a.glow=0)},G};rf.exports.PLACE=_a});var nf=de((rE,rm)=>{"use strict";rm.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var of=de((nE,nm)=>{nm.exports=1e-6});var af=de((oE,om)=>{om.exports=Z5;function Z5(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var im=de((aE,am)=>{am.exports=J5;function J5(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var sf=de((iE,sm)=>{sm.exports=ew;function ew(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}});var cf=de((sE,cm)=>{cm.exports=tw;function tw(e,t){var r=t[0],n=t[1],o=t[2],a=r*r+n*n+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var lf=de((cE,lm)=>{lm.exports=rw;function rw(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var dm=de((lE,hm)=>{hm.exports=ow;var fm=sf(),um=cf(),nw=lf();function ow(e,t){var r=fm(e[0],e[1],e[2]),n=fm(t[0],t[1],t[2]);um(r,r),um(n,n);var o=nw(r,n);return o>1?0:Math.acos(o)}});var mm=de((fE,pm)=>{pm.exports=aw;function aw(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var gm=de((uE,vm)=>{vm.exports=iw;function iw(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}});var ym=de((hE,xm)=>{xm.exports=sw;var ff=of();function sw(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(r-a)<=ff*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=ff*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(o-s)<=ff*Math.max(1,Math.abs(o),Math.abs(s))}});var wm=de((dE,bm)=>{bm.exports=cw;function cw(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var Em=de((pE,_m)=>{_m.exports=lw;function lw(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}});var uf=de((mE,Mm)=>{Mm.exports=fw;function fw(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}});var Tm=de((vE,Am)=>{Am.exports=uf()});var hf=de((gE,Sm)=>{Sm.exports=uw;function uw(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}});var Lm=de((xE,km)=>{km.exports=hf()});var df=de((yE,zm)=>{zm.exports=hw;function hw(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}});var Rm=de((bE,Cm)=>{Cm.exports=df()});var Pm=de((wE,Im)=>{Im.exports=dw;function dw(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}});var Nm=de((_E,Om)=>{Om.exports=pw;function pw(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}});var Dm=de((EE,Fm)=>{Fm.exports=mw;function mw(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var $m=de((ME,Gm)=>{Gm.exports=vw;function vw(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var Hm=de((AE,qm)=>{qm.exports=gw;function gw(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var Bm=de((TE,Um)=>{Um.exports=xw;function xw(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}});var Wm=de((SE,jm)=>{jm.exports=yw;function yw(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}});var pf=de((kE,Vm)=>{Vm.exports=bw;function bw(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}});var Ym=de((LE,Xm)=>{Xm.exports=pf()});var mf=de((zE,Km)=>{Km.exports=ww;function ww(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}});var Zm=de((CE,Qm)=>{Qm.exports=mf()});var vf=de((RE,Jm)=>{Jm.exports=_w;function _w(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}});var tv=de((IE,ev)=>{ev.exports=vf()});var gf=de((PE,rv)=>{rv.exports=Ew;function Ew(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}});var ov=de((OE,nv)=>{nv.exports=gf()});var iv=de((NE,av)=>{av.exports=Mw;function Mw(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var cv=de((FE,sv)=>{sv.exports=Aw;function Aw(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var fv=de((DE,lv)=>{lv.exports=Tw;function Tw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2];return e[0]=o*c-a*s,e[1]=a*i-n*c,e[2]=n*s-o*i,e}});var hv=de((GE,uv)=>{uv.exports=Sw;function Sw(e,t,r,n){var o=t[0],a=t[1],i=t[2];return e[0]=o+n*(r[0]-o),e[1]=a+n*(r[1]-a),e[2]=i+n*(r[2]-i),e}});var pv=de(($E,dv)=>{dv.exports=kw;function kw(e,t){t=t||1;var r=Math.random()*2*Math.PI,n=Math.random()*2-1,o=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=n*t,e}});var vv=de((qE,mv)=>{mv.exports=Lw;function Lw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[3]*n+r[7]*o+r[11]*a+r[15];return i=i||1,e[0]=(r[0]*n+r[4]*o+r[8]*a+r[12])/i,e[1]=(r[1]*n+r[5]*o+r[9]*a+r[13])/i,e[2]=(r[2]*n+r[6]*o+r[10]*a+r[14])/i,e}});var xv=de((HE,gv)=>{gv.exports=zw;function zw(e,t,r){var n=t[0],o=t[1],a=t[2];return e[0]=n*r[0]+o*r[3]+a*r[6],e[1]=n*r[1]+o*r[4]+a*r[7],e[2]=n*r[2]+o*r[5]+a*r[8],e}});var bv=de((UE,yv)=>{yv.exports=Cw;function Cw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2],f=r[3],h=f*n+s*a-c*o,p=f*o+c*n-i*a,u=f*a+i*o-s*n,v=-i*n-s*o-c*a;return e[0]=h*f+v*-i+p*-c-u*-s,e[1]=p*f+v*-s+u*-i-h*-c,e[2]=u*f+v*-c+h*-s-p*-i,e}});var _v=de((BE,wv)=>{wv.exports=Rw;function Rw(e,t,r,n){var o=r[1],a=r[2],i=t[1]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=o+i*f-s*c,e[2]=a+i*c+s*f,e}});var Mv=de((jE,Ev)=>{Ev.exports=Iw;function Iw(e,t,r,n){var o=r[0],a=r[2],i=t[0]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var Tv=de((WE,Av)=>{Av.exports=Pw;function Pw(e,t,r,n){var o=r[0],a=r[1],i=t[0]-o,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var kv=de((VE,Sv)=>{Sv.exports=Ow;var Do=af()();function Ow(e,t,r,n,o,a){var i,s;for(t||(t=3),r||(r=0),n?s=Math.min(n*t+r,e.length):s=e.length,i=r;i<s;i+=t)Do[0]=e[i],Do[1]=e[i+1],Do[2]=e[i+2],o(Do,Do,a),e[i]=Do[0],e[i+1]=Do[1],e[i+2]=Do[2];return e}});var zv=de((XE,Lv)=>{Lv.exports={EPSILON:of(),create:af(),clone:im(),angle:dm(),fromValues:sf(),copy:mm(),set:gm(),equals:ym(),exactEquals:wm(),add:Em(),subtract:uf(),sub:Tm(),multiply:hf(),mul:Lm(),divide:df(),div:Rm(),min:Pm(),max:Nm(),floor:Dm(),ceil:$m(),round:Hm(),scale:Bm(),scaleAndAdd:Wm(),distance:pf(),dist:Ym(),squaredDistance:mf(),sqrDist:Zm(),length:vf(),len:tv(),squaredLength:gf(),sqrLen:ov(),negate:iv(),inverse:cv(),normalize:cf(),dot:lf(),cross:fv(),lerp:hv(),random:pv(),transformMat4:vv(),transformMat3:xv(),transformQuat:bv(),rotateX:_v(),rotateY:Mv(),rotateZ:Tv(),forEach:kv()}});var Iv=de((YE,Rv)=>{"use strict";function Cv(){let e={};return{on(t,r){return(e[t]=e[t]||[]).push(r),this},emit(t,r){(e[t]||[]).slice().forEach(n=>n(r))}}}Rv.exports=function(t){let r=t.ownerDocument||document,n=Cv(),o=null,a={dx:0,dy:0,dt:0},i=0,s=()=>r.pointerLockElement||r.webkitPointerLockElement||null,c=()=>{if(s())return;let h=t.requestPointerLock||t.webkitRequestPointerLock;if(h)try{let p=h.call(t);p&&p.catch&&p.catch(()=>{})}catch(p){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){o&&(n.emit("release"),o.emit("end"),o=null);return}o=Cv(),i=Date.now(),n.emit("attain",o)};return r.addEventListener("pointerlockchange",f),r.addEventListener("webkitpointerlockchange",f),r.addEventListener("pointerlockerror",()=>n.emit("error")),(r.body||t).addEventListener("mousemove",h=>{o&&(a.dx=h.movementX||h.webkitMovementX||0,a.dy=h.movementY||h.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),o.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(r.exitPointerLock||r.webkitExitPointerLock).call(r)},n}});var Dv=de((ZE,Fv)=>{"use strict";var Ma=is(),Aa=zv(),Nw=Iv(),KE=Math.PI/4,QE=Math.PI/6,Pv=2,Fw=1,Dw=2.4,Gw=2.4,$w=1e3,qw=5,Hw=7,xf=xn().C,Es=[[7,1.6],[7,xf.zc],[xf.x1-2.95,xf.zc]],Go=Es.slice(1).map((e,t)=>{let r=Es[t],n=e[0]-r[0],o=e[1]-r[1],a=Math.hypot(n,o);return{a:r,len:a,dir:[n/a,o/a]}}),yf=Go.reduce((e,t)=>e+t.len,0);function Ov(e){let t=Math.max(0,Math.min(yf,e));for(let n of Go){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let r=Es[Es.length-1];return[r[0],r[1]]}function Uw(e){let t=0;for(let n=0;n<Go.length;n++){let o=Go[n],a=t+o.len;if(e<a-1e-4||n===Go.length-1){let i=o.dir,c=e<=t+1e-4&&n>0?Go[n-1].dir:o.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let r=Go[Go.length-1].dir;return{ahead:r,back:[-r[0],-r[1]]}}var Bw=Math.PI/4,jw=7,Ww=140,Vw=70,Nv=(e,t,r)=>(1-e)*t+e*r,Xw=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Fv.exports=function({getGridSegments:e,getGridParts:t},r){var n=[0,Math.PI],o=[0,Math.PI],a=0,i=[0,0,0],s=[Hw,Pv,Es[0][1]],c=0,f=1,h=0,p=[.707,0,.707],u=[0,1,0],v=[0,0,0],m=.5,d=Ma.identity([]),x=Ma.identity([]),w=!1,T=[0,0,0],C=[0,0,0],G=1,$=!1;let H=je=>{n[1]+=je*Bw},oe=(je,Ue,et)=>{if(je=Math.max(Math.min(je,100),-100),Ue=Math.max(Math.min(Ue,100),-100),n[0]=0,$){a=0;return}for(a+=je;a>=et;)H(1),a-=et;for(;a<=-et;)H(-1),a+=et};Nw(document.body).on("attain",je=>{je.on("data",Ue=>{oe(Ue.dx,Ue.dy,Ww)})});let J=null,be=null,ue=0,De={x:0,y:0},Ie=58,Ce=document.createElement("div");Ce.id="museum-mobile-controls",Ce.innerHTML=`

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
	`,document.body.appendChild(Ce);let ge=Ce.querySelector("#museum-joystick"),nt=Ce.querySelector("#museum-joystick-knob"),Yt=()=>{nt.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},st=je=>{let Ue=je.clientX-De.x,et=je.clientY-De.y,yt=Math.hypot(Ue,et);if(yt>Ie&&(Ue=Ue/yt*Ie,et=et/yt*Ie),nt.style.transform=`translate(
				calc(-50% + ${Ue}px),
				calc(-50% + ${et}px)
			)`,yt<10){i[0]=0,i[2]=0;return}let pt=Ue/Ie,kt=et/Ie;i[0]=0,i[2]=Math.abs(kt)>.15?kt:0},Bt=(je,Ue)=>{for(let et=0;et<je.length;et++)if(je[et].identifier===Ue)return je[et];return null},Rt=je=>!!(je&&je.closest&&je.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),lr=je=>{if(!Rt(je.target)&&(je.cancelable&&je.preventDefault(),!$))for(let Ue=0;Ue<je.changedTouches.length;Ue++){let et=je.changedTouches[Ue];if(J===null&&et.clientX<window.innerWidth*.48){J=et.identifier;let yt=ge.getBoundingClientRect();De.x=yt.left+yt.width/2,De.y=yt.top+yt.height/2,st(et)}else be===null&&et.clientX>=window.innerWidth*.48&&(be=et.identifier,ue=et.clientX,a=0)}},ir=je=>{if(Rt(je.target)||(je.cancelable&&je.preventDefault(),$))return;let Ue=J===null?null:Bt(je.touches,J);Ue&&st(Ue);let et=be===null?null:Bt(je.touches,be);if(et){let yt=et.clientX-ue;ue=et.clientX,oe(yt,0,Vw)}},En=je=>{if(!Rt(je.target)){je.cancelable&&je.preventDefault();for(let Ue=0;Ue<je.changedTouches.length;Ue++){let et=je.changedTouches[Ue];et.identifier===J&&(J=null,Yt()),et.identifier===be&&(be=null)}}};document.addEventListener("touchstart",lr,{passive:!1}),document.addEventListener("touchmove",ir,{passive:!1}),document.addEventListener("touchend",En,{passive:!1}),document.addEventListener("touchcancel",En,{passive:!1});let Cr=document.createElement("style");Cr.textContent=`

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
	`,document.head.appendChild(Cr);var Wr={};let on=je=>{if(je.defaultPrevented||je.ctrlKey||je.altKey||je.metaKey)return;let Ue=je.type==="keydown";Wr[je.code]=Ue,Ue&&!je.repeat&&!$&&((je.code==="KeyA"||je.code==="ArrowLeft")&&H(-1),(je.code==="KeyD"||je.code==="ArrowRight")&&H(1)),w=!1;let et=Wr.KeyW||Wr.ArrowUp?1:0;i=[0,0,(Wr.KeyS||Wr.ArrowDown?1:0)-et],je.preventDefault()};window.addEventListener("keydown",on),window.addEventListener("keyup",on);var Vn=0;return{pos:s,fmouse:o,forward:p,up:u,setPaused:je=>{$=!!je,$&&(i[0]=0,i[2]=0,Yt())},place:(je,Ue)=>{c=Math.max(0,Math.min(yf,je));let et=Ov(c);s[0]=et[0],s[2]=et[1],n[1]=Ue,o[1]=Ue,a=0,f=1},view:()=>d,proj:()=>(Ma.perspective(x,r(),window.innerWidth/window.innerHeight,.1,700),x),tick:({time:je})=>{let Ue=je-Vn;Vn=je;let et=[0,0,0],yt=[];Aa.set(p,Math.sin(o[1]),0,-Math.cos(o[1])),Aa.set(u,0,1,0);let Le=w?Gw:Dw,pt=Math.sin(n[1]),kt=-Math.cos(n[1]),Wt=Uw(c),bt=pt*Wt.ahead[0]+kt*Wt.ahead[1],Gt=pt*Wt.back[0]+kt*Wt.back[1],mt=f;Math.max(bt,Gt)>.3&&(mt=bt>=Gt?1:-1);let zt=$?0:-i[2]*Le;h+=(zt-h)*(1-Math.exp(-Math.min(Ue,.1)*5.5)),zt===0&&Math.abs(h)<.01&&(h=0);let It=h*mt*Math.min(Ue,.1);$&&(i[0]=0,i[2]=0,It=0,h=0),It!==0&&(f=Math.sign(It)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(yf,c+It));let g=Ov(c);Aa.set(v,g[0]-s[0],0,g[1]-s[2]);let jt=Aa.len(v);jt===0&&m!==.25&&(m=(Math.abs((m+.5)%1-.5)-.25)*.8+.25,(m+.01)%.25<.02&&(m=.25));let nr=m;if(m+=jt/(w?qw:$w),s[1]=Pv,Aa.add(s,s,v),G<1){G+=Ue/Fw,G=Math.min(G,1);let Ze=Xw(G);Aa.set(s,Nv(Ze,T[0],C[0]),s[1],Nv(Ze,T[2],C[2]))}o[0]=0,o[1]+=(n[1]-o[1])*Math.min(1,Math.min(Ue,.1)*jw),Math.abs(n[1]-o[1])<5e-4&&(o[1]=n[1]),Ma.identity(d),Ma.rotateX(d,d,0),Ma.rotateY(d,d,o[1]),Ma.translate(d,d,Aa.scale(et,s,-1))}}}});var $v=de((JE,Gv)=>{"use strict";var{skylightGLSL:Yw,Z_START:Kw,Z_END:Qw,GLASS_Y:Zw}=ei(),{oculusGLSL:Jw,A:Ta}=eo(),{windowLightGLSL:e_,C:X0}=xn(),{doorLightGLSL:t_}=aa(),In=e=>e.toFixed(4),bf=.1,wf=700,Sa={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.045};function r_(e,t){let r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],v=t[11],m=t[12],d=t[13],x=t[14],w=t[15],T=r*s-n*i,C=r*c-o*i,G=r*f-a*i,$=n*c-o*s,H=n*f-a*s,oe=o*f-a*c,ye=h*d-p*m,J=h*x-u*m,be=h*w-v*m,ue=p*x-u*d,De=p*w-v*d,Ie=u*w-v*x,Ce=T*Ie-C*De+G*ue+$*be-H*J+oe*ye;return Ce?(Ce=1/Ce,e[0]=(s*Ie-c*De+f*ue)*Ce,e[1]=(o*De-n*Ie-a*ue)*Ce,e[2]=(d*oe-x*H+w*$)*Ce,e[3]=(u*H-p*oe-v*$)*Ce,e[4]=(c*be-i*Ie-f*J)*Ce,e[5]=(r*Ie-o*be+a*J)*Ce,e[6]=(x*G-m*oe-w*C)*Ce,e[7]=(h*oe-u*G+v*C)*Ce,e[8]=(i*De-s*be+f*ye)*Ce,e[9]=(n*be-r*De-a*ye)*Ce,e[10]=(m*H-d*G+w*T)*Ce,e[11]=(p*G-h*H-v*T)*Ce,e[12]=(s*J-i*ue-c*ye)*Ce,e[13]=(r*ue-n*J+o*ye)*Ce,e[14]=(d*C-m*$-x*T)*Ce,e[15]=(h*$-p*C+u*T)*Ce,e):null}function n_(e,t,r){let n=new Array(16);for(let o=0;o<4;o++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*r[o*4+s];n[o*4+a]=i}for(let o=0;o<16;o++)e[o]=n[o];return e}var o_=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Gv.exports=(e,t)=>{let r=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),o=r?10:22,a=()=>t.post>=2?2:4,i=ge=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},ge||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,h=e.framebuffer({color:c,depth:f||!0}),p=[s(),s()],u=[s(),s()],v=[s(),s()],m=[s(),s()],d=new Array(16).fill(0),x=new Array(16).fill(0),w=[0,0,0],T={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},C={position:[-1,-1,3,-1,-1,3]},G=(ge,nt,Yt)=>e(Object.assign({vert:o_,frag:ge,attributes:C,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:nt,framebuffer:e.prop("out")},Yt||{})),$=[2.6,0,Kw-3.2,12.6,Zw,Qw+.4],H=[Ta.x0-.2,0,Ta.z0,Ta.x1,Ta.domeTop,Ta.z1],oe=[X0.x0,0,X0.z0,X0.x1,7.6,X0.z1],ye=[.35,0,.35,13.65,7.6,9],J=ge=>`vec3(${In(ge[0])}, ${In(ge[1])}, ${In(ge[2])}), vec3(${In(ge[3])}, ${In(ge[4])}, ${In(ge[5])})`,be=G(`
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
			vec2 t = hitBox(eye, rd, ${J($)});
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
					if (p.y < ${In(Ta.dome.base)} && p.x > ${In(Ta.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += vec3(1.0, 0.88, 0.68) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${J(oe)});
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
			vec2 t = hitBox(eye, rd, ${J(ye)});
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
	}`,{depthTex:()=>f,invVP:()=>d,eye:()=>w,time:e.context("time"),strength:()=>{let ge=Sa.shafts*T.shafts;return[.06*ge,.1*ge,.07*ge,.04*ge]}}),ue=G(`
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
	}`,{src:e.prop("src"),dir:(ge,nt)=>[nt.dir[0]/nt.size[0],nt.dir[1]/nt.size[1]]}),De=G(`
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
	}`,{src:e.prop("src"),texel:(ge,nt)=>[.5/nt.size[0],.5/nt.size[1]],threshold:e.prop("threshold")}),Ie=G(`
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
		return 2.0 * ${In(bf)} * ${In(wf)} / (${In(wf+bf)} - z * ${In(wf-bf)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>p[0],bloomA:()=>u[0],bloomB:()=>v[0],shafts:()=>m[0],res:ge=>[ge.drawingBufferWidth,ge.drawingBufferHeight],time:e.context("time"),exposure:()=>Sa.exposure*T.exposure,vignette:()=>Math.min(1,Sa.vignette+T.vignette),grain:()=>Sa.grain,bloomK:()=>Sa.bloom,letterbox:()=>T.letterbox,fade:()=>T.fade,fadeColor:()=>T.fadeColor,aperture:()=>t.post>=2?T.aperture:0,focus:()=>T.focus,hasDepth:n?1:0},{framebuffer:null}),Ce=e({framebuffer:()=>h});return{shot:T,look:Sa,hasDepth:n,capture(ge,nt,Yt){let st=ge.drawingBufferWidth,Bt=ge.drawingBufferHeight;h.resize(st,Bt);let Rt=Math.max(1,Math.ceil(st/2)),lr=Math.max(1,Math.ceil(Bt/2));p.forEach(ir=>ir.resize(Rt,lr)),u.forEach(ir=>ir.resize(Math.max(1,Math.ceil(st/4)),Math.max(1,Math.ceil(Bt/4)))),v.forEach(ir=>ir.resize(Math.max(1,Math.ceil(st/8)),Math.max(1,Math.ceil(Bt/8)))),m.forEach(ir=>ir.resize(Math.max(1,Math.ceil(st/a())),Math.max(1,Math.ceil(Bt/a())))),n_(x,nt.proj,nt.view),r_(d,x),w[0]=nt.eye[0],w[1]=nt.eye[1],w[2]=nt.eye[2],Ce(()=>{e.clear({color:[0,0,0,1],depth:1}),Yt()})},present(){let ge=nt=>[nt.width,nt.height];n&&t.post>=1&&Sa.shafts*T.shafts>.001?(be({out:m[0]}),ue({out:m[1],src:m[0],dir:[1,0],size:ge(m[0])}),ue({out:m[0],src:m[1],dir:[0,1],size:ge(m[0])})):e.clear({color:[0,0,0,1],framebuffer:m[0]}),De({out:p[0],src:c,size:[h.width,h.height],threshold:0}),ue({out:p[1],src:p[0],dir:[1,0],size:ge(p[0])}),ue({out:p[0],src:p[1],dir:[0,1],size:ge(p[0])}),De({out:u[0],src:p[0],size:ge(p[0]),threshold:.42}),ue({out:u[1],src:u[0],dir:[1,0],size:ge(u[0])}),ue({out:u[0],src:u[1],dir:[0,1],size:ge(u[0])}),De({out:v[0],src:u[0],size:ge(u[0]),threshold:0}),ue({out:v[1],src:v[0],dir:[1.5,0],size:ge(v[0])}),ue({out:v[0],src:v[1],dir:[0,1.5],size:ge(v[0])}),Ie({out:null})}}}});var Bv=de((e6,Uv)=>{"use strict";var a_=oa(),_f=aa(),{C:i_,FAR_DOOR:s_}=xn(),c_=100*Math.PI/180,qv=e=>[s_.x-e[2],e[1],i_.zc-7+e[0]],Hv=e=>[-e[2],e[1],e[0]];function l_(e){let t=[],r=[],n=[],o=[],a=a_.createBuilder(t,r,n,o);_f.addFrames(a,e);let i=_f.glassPanes(e),s=c=>{let f=[];for(let h=0;h<c.length;h+=3)f.push([c[h],c[h+1],c[h+2]]);return f};return{position:s(t),normal:s(r),elements:n,glass:i}}Uv.exports=e=>{let t=_f.DOOR,r=["left","right"].map(h=>{let p=l_(h),u=p.position.length;return{part:h,hinge:h==="left"?t.x0:t.x1,sign:h==="left"?-1:1,src:p.position.map(v=>v.slice()),srcN:p.normal.map(v=>v.slice()),srcG:p.glass.map(v=>v.slice()),pos:e.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(p.elements),type:"uint32"}),glassCount:p.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(p.glass.length*3),outGN:new Float32Array(p.glass.length*3)}}),n=null;function o(h){if(h!==n){n=h;for(let p of r){let u=p.sign*h,v=Math.cos(u),m=Math.sin(u),d=T=>{let C=T[0]-p.hinge,G=T[2];return[p.hinge+C*v+G*m,T[1],-C*m+G*v]},x=T=>[T[0]*v+T[2]*m,T[1],-T[0]*m+T[2]*v];p.src.forEach((T,C)=>{let G=qv(d(T));p.outP.set(G,C*3),p.outN.set(Hv(x(p.srcN[C])),C*3)});let w=Hv(x([0,0,1]));p.srcG.forEach((T,C)=>{p.outG.set(qv(d(T)),C*3),p.outGN.set(w,C*3)}),p.pos.subdata(p.outP),p.nrm.subdata(p.outN),p.gpos.subdata(p.outG),p.gnrm.subdata(p.outGN)}}}o(0);let a=`
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
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{o(c*c_);for(let h of r)i({pos:h.pos,nrm:h.nrm,el:h.el})};return f.glass=()=>{for(let h of r)s({pos:h.gpos,nrm:h.gnrm,count:h.glassCount})},f.setOpen=h=>{c=h||0},f}});var Wv=de((t6,jv)=>{"use strict";var{skylightGLSL:f_}=ei(),{oculusGLSL:u_}=eo(),{windowLightGLSL:h_}=xn(),$o=.22;function d_(){let e=[],t=[],r=[],n=[];for(let c=0;c<=14;c++){let f=c/14,h=$o*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9);for(let p=0;p<=4*2;p++){let u=p/4-1,v=f*$o-$o*.12,m=u*h,d=Math.abs(u)*h*.35-.12*f*f*$o;e.push([v,d,m]),t.push([0,1,0]),r.push([f,u])}}let i=4*2+1;for(let c=0;c<14;c++)for(let f=0;f<i-1;f++){let h=c*i+f,p=h+1,u=h+i,v=u+1;n.push([h,u,p],[p,u,v])}let s=e.length;return e.push([-$o*.12,0,-.003],[-$o*.12,0,.003],[-$o*.24,-.01,.0015],[-$o*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),r.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([s,s+2,s+1],[s,s+3,s+2]),{pos:e,nrm:t,uv:r,idx:n}}jv.exports=e=>{let t=d_(),r=e({vert:`
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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}});return function(n){n&&n.visible&&r({model:n.model})}}});var Yv=de((r6,Xv)=>{"use strict";var{skylightGLSL:p_,Z_START:Vv,Z_END:m_}=ei(),{oculusGLSL:v_,A:xi}=eo();Xv.exports=(e,t)=>{let r=t.isPhone?900:2600,n=t.isPhone?350:900,o=7,a=()=>(o=o*16807%2147483647,(o-1)/2147483646),i=[];for(let s=0;s<r;s++)i.push([2.5+a()*10.5,.3+a()*8,Vv-3.5+a()*(m_-Vv+4.5),a()]);for(let s=0;s<n;s++)i.push([xi.x0+.3+a()*(xi.x1-xi.x0-.6),.3+a()*7.5,xi.z0+.3+a()*(xi.z1-xi.z0-.6),a()]);return e({vert:`
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
		}`,attributes:{seed:i},count:i.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:s=>s.viewportHeight*.006},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}})}});var i2=de((n6,a2)=>{"use strict";var go=is(),Y0=nf(),Ef=u0(),g_=h0(),{A:wn}=eo(),{C:qr,PAINTING_X:Ei}=xn(),_n=e=>Math.max(0,Math.min(1,e)),ke=(e,t,r)=>e+(t-e)*r,Zt=(e,t,r)=>[ke(e[0],t[0],r),ke(e[1],t[1],r),ke(e[2],t[2],r)],Mt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Kv=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Qv=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Me=(e,t,r)=>{let n=_n((r-e)/(t-e));return n*n*(3-2*n)};function x_(e,t,r,n,o,a){if(o<=0)return[e,r];let i=2/n,s=i*o,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,h=Math.max(-f,Math.min(f,e-t)),p=e-h,u=(r+i*h)*o,v=(r-i*u)*c,m=p+(h+u)*c;return t-e>0==m>t&&(m=t,v=0),[m,v]}var Zv=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,y_=e=>e*e*e,Mf=e=>1-Math.pow(1-e,3),mr=e=>-(Math.cos(Math.PI*e)-1)/2;function _r(e,t){let r=e.length-1,n=_n(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],h=a*a,p=h*a;return[0,1,2].map(u=>.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-f[u])*h+(-i[u]+3*s[u]-3*c[u]+f[u])*p))}var dt=(e,t,r,n)=>({eye:e,target:t,fov:r,roll:n||0});function Ca(e,t,r){return dt(Zt(e.eye,t.eye,r),Zt(e.target,t.target,r),ke(e.fov,t.fov,r),ke(e.roll,t.roll,r))}var zf=()=>Me(.75,1.3,window.innerWidth/window.innerHeight),nn=(e,t)=>Ca(e,t,zf()),K0=[7,3.95,qr.hallEnd-.05],b_=[qr.x1,2.9,qr.zc],wi=[16.75,4.55,6.75],Cf=[6.92,2.72,14.5],Wn=[7.3,.015,47.1],w_=[wi,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Cf],__=[Cf,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Wn],ka=[Ei[0],3,qr.z0],La=[Ei[1],3,qr.z0],Tf=47.45,o2=4.6,E_=13.2,M_=1.42,Ms=[7.55,1.25,46.75],Rf=[17.25,2.42,46],If=[26.05,1.95,46],As=[36.15,.015,44],J0=()=>ke(6.8,6.15,zf()),A_=[Ms,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Rf],T_=[Rf,[20.2,2.05,45.6],[23.2,1.8,45],If],za=[Ei[2],3,qr.z0],Sf=[34.8,1.35,46],Ho=[7.89,.03,19.03],Jv=.36,e2=13.64,jr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Pn(e){let t=e.side==="left"?1:-1;return Zt([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],zf())}function S_(e){return e.side==="left"?nn(dt([8.6,3.9,e.z],[Jv,1.45,e.z],76),dt([8,3.6,e.z+.7],[Jv,3.95,e.z-2],46,-.008)):nn(dt([5.4,3.9,e.z],[e2,1.45,e.z],76),dt([6,3.6,e.z-.7],[e2,3.95,e.z+2],46,-.008))}var k_=()=>[As,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Pn(jr[0])],L_=()=>[Pn(jr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Pn(jr[3])],z_=()=>[Pn(jr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Ho],t2={2:{pos:()=>Cf,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Ms,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Rf,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>If,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Sf,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Pn(jr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Pn(jr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Pn(jr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Pn(jr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Pn(jr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Pn(jr[5]),amp:[.12,.08,.1],tumble:.5}},qo=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),r=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=nn(dt([qr.x0+.9,1.85,qr.zc+.25],[qr.x1,2.85,qr.zc-.1],64),dt([qr.x0+1.2,2,qr.zc+.35],[qr.x1,2.6,qr.zc-.15],50));return n.eye=Mt(Mt(n.eye,[t,0,0]),r),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],r=nn(dt([16.6,1.9,9.2],[17.3,.4,5.6],64),dt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return r.eye=Mt(r.eye,t),r}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],r=nn(dt([7,1.35,13],[7.2,7.6,20.4],74,.05),dt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return r.eye=Mt(r.eye,t),r}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],r=nn(dt([7,3.6,43.7],[7,3.85,K0[2]],74),dt([7,3.6,41.3],[7,3.95,K0[2]],46));return r.eye=Mt(r.eye,t),r}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=nn(dt([7,3.9,40.3],[7,1.35,K0[2]],76),dt([6.3,3.6,41.2],[3.7,3.95,K0[2]],46,-.008));return r.eye=Mt(r.eye,t),r}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=nn(dt([7.15,.15,46],[7.3,.04,Wn[2]],50),dt([7.05,.14,45.9],[7.25,.05,Wn[2]],32));return r.eye=Mt(r.eye,t),r}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],r=nn(dt([7.15,.1,46.3],[7.05,.1,Tf],50),dt([7.1,.12,45.85],[7,.2,Tf],30));return r.eye=Mt(r.eye,t),r}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],r=nn(dt([7.3,.85,45.65],[7.6,1.38,47.1],64),dt([7.25,.82,45.8],[7.65,1.35,47.1],44));return r.eye=Mt(r.eye,t),r}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=nn(dt([ka[0],2.3,46.85],[ka[0],1.25,ka[2]],74),dt([ka[0]-.6,2.55,46.85],[ka[0]+1.9,2.9,ka[2]],46,.008));return r.eye=Mt(r.eye,t),r}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=nn(dt([La[0],1.95,46.85],[La[0],1,La[2]],74),dt([La[0]-.6,2.1,46.85],[La[0]+1.9,2.75,La[2]],46,.008));return r.eye=Mt(r.eye,t),r}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=nn(dt([za[0],1.4,46.85],[za[0],.6,za[2]],74),dt([za[0]-.6,1.45,46.85],[za[0]+1.9,2,za[2]],46,.008));return r.eye=Mt(r.eye,t),r}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=nn(dt([34.75,.5,44.15],[qr.x1,.8,43.95],66),dt([34.75,.45,44.3],[qr.x1,.35,43.95],50));return r.eye=Mt(r.eye,t),r}},...jr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(r){let n=[Math.sin(r*.15)*.04,Math.sin(r*.25)*.015,Math.sin(r*.11)*.04],o=S_(e);return o.eye=Mt(o.eye,n),o}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,r=nn(dt([7.75,2.6,18.6],[7.89,0,19.08],60),dt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=r.eye[0]-Ho[0],o=r.eye[2]-Ho[2];return r.eye=[Ho[0]+n*Math.cos(t)-o*Math.sin(t),r.eye[1],Ho[2]+n*Math.sin(t)+o*Math.cos(t)],r}}],C_=[1,.96,.88];function r2(e,t){return{dur:t,cam(r,n,o){let a=mr(r),i=Ca(n,o,a),s=jr[e].side==="left"?1:-1;return i.eye=Mt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(r,n,o){let a={};for(let i in o)typeof o[i]=="number"&&(a[i]=ke(n[i],o[i],r));return a.aperture=ke(n.aperture,o.aperture,r)*(1-.5*Math.sin(Math.PI*r)),a},leaf(r){let n=mr(r),o=Pn(jr[e]),a=Pn(jr[e+1]),i=jr[e].side==="left"?1:-1,s=Mt(Zt(o,a,.5),[i*1.2,.5,0]),c=_r([o,Zt(o,s,.6),s,Zt(a,s,.6),a],n);return{phase:"fly",pos:Mt(c,[0,Math.sin(r*Math.PI*5)*.07*Math.sin(Math.PI*r),0]),tumble:.5+.35*Math.sin(Math.PI*r)}}}}var Af=[{dur:6.2,cam(e,t,r){if(e<.5){let s=y_(e/.5),c=Zt(t.eye,[qr.x1-3.2,2.6,qr.zc],s),f=Zt(t.target,b_,Me(0,.6,e/.5));return dt(c,f,ke(t.fov,t.fov-8,s),ke(t.roll,.04,s))}let n=Mf((e-.5)/.5),o=[[wn.cx+.4,10.4,wn.zc+.6],[wn.cx-.6,7.6,wn.zc+1.3],[wn.cx-1.9,4.6,wn.zc+1.75],r.eye],a=[[wn.cx-.1,0,wn.zc-.2],[wn.cx-1,.4,wn.zc-.1],[wn.cx-1.1,.8,wn.zc-.2],r.target];return dt(_r(o,n),_r(a,n),ke(r.fov+14,r.fov,n),ke(-.25,r.roll,n))},look(e,t,r){let n=Me(.22,.5,e),o=1-Me(.5,.74,e);return{fade:e<.5?n:o,fadeColor:C_,exposure:ke(t.exposure,r.exposure,Me(.5,.9,e))*(1+2.2*(e<.5?Me(.15,.5,e):1-Me(.5,.8,e))),letterbox:ke(t.letterbox,r.letterbox,Me(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):r.aperture*Me(.6,1,e),focus:ke(4,r.focus,Me(.5,1,e)),shafts:ke(t.shafts,r.shafts,Me(.4,.6,e)),vignette:ke(t.vignette,r.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,r,n){let o=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],r.eye],a=_r(o,mr(e)),i=Me(0,.12,e)*(1-Me(.82,1,e)),s=Zt(Zt(t.target,r.target,Me(.55,1,e)),n.pos,i),c=ke(t.fov,r.fov,Me(.3,1,e))-6*Math.sin(Math.PI*e),f=ke(t.roll,r.roll,e)+.05*Math.sin(Math.PI*2*e);return dt(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:ke(t.exposure,r.exposure,Me(.25,.75,e)),letterbox:ke(t.letterbox,r.letterbox,e),focus:ke(a,r.focus,Me(.8,1,e)),aperture:ke(.7,r.aperture,Me(.8,1,e)),shafts:ke(t.shafts,r.shafts,Me(.3,.8,e)),vignette:ke(t.vignette,r.vignette,e)}},leaf(e){let t=Zv(e),r=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:Mt(_r(w_,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),r]),tumble:1-.5*Me(.8,1,e)}}},{dur:11.5,cam(e,t,r,n){let o=_r([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Me(0,.8,e)*.6+mr(_n(e/.8))*.4),a=_r([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],r.eye],mr(Me(.8,1,e))),i=e<.8?o:a,s=Zt(Zt(t.target,n.pos,Me(.03,.22,e)),r.target,Me(.82,1,e)),c=ke(t.fov,r.fov,Me(.15,.7,e))-6*Me(.6,.8,e)*(1-Me(.85,1,e)),f=ke(t.roll,r.roll,Me(0,.6,e))-.04*Math.sin(Math.PI*e);return dt(i,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:ke(t.exposure,r.exposure,Me(.5,1,e)),letterbox:ke(t.letterbox,r.letterbox,e),focus:ke(a,r.focus,Me(.84,1,e)),aperture:ke(1.1,r.aperture,Me(.84,1,e)),shafts:ke(t.shafts,r.shafts,Me(.2,.9,e)),vignette:ke(t.vignette,r.vignette,Me(.5,1,e))}},leaf(e){let t=ke(Zv(e),e,.35),r=_r(__,Me(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Me(.55,.76,e)),o=Me(.7,.8,e);return{phase:"fly",pos:Mt(r,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-o),0]),tumble:1-o,swing:n}}},{dur:2.6,cam(e,t,r){let n=mr(e),o=Ca(t,r,n);return o.eye=Mt(o.eye,[0,0,-.35*Math.sin(Math.PI*n)]),o},look(e,t,r){let n=mr(e),o={};for(let a in r)typeof r[a]=="number"&&(o[a]=ke(t[a],r[a],n));return o},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,r){let n=mr(e),o=_r([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],r.eye],n),a=Zt(t.target,r.target,Me(.1,.85,e));return dt(o,a,ke(t.fov,r.fov,Me(.2,1,e)),ke(t.roll,r.roll,n))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=ke(t[o],r[o],Me(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,r){return Ca(t,r,mr(e))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=ke(t[o],r[o],mr(e)));return n},leaf(){return{phase:"floor"}},walker(e){return ke(o2,J0(),e)}},{dur:7.5,kick:e=>_n((e-yi())/(1-yi())),cam(e,t,r,n){let o=yi(),a=Me(0,o,e)*(1-Me(o+.12,o+.35,e)),i=n2(Math.min(e,_i)),s=Mt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Me(o+.12,1,e),f=_r([t.eye,t.eye,Mt(t.eye,[0,.12,-.3]),r.eye],c);return s=Zt(s,n.pos,Me(o+.06,o+.24,e)*(1-Me(.9,1,e))),s=Zt(s,r.target,Me(.88,1,e)),dt(f,s,ke(t.fov,r.fov,c),ke(t.roll,r.roll,c))},look(e,t,r,n,o){let a=yi(),i=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),s=Me(0,.12,e)*(1-Me(a+.25,a+.5,e));return{letterbox:ke(ke(t.letterbox,r.letterbox,Me(a,1,e)),1.75,s),exposure:ke(t.exposure,r.exposure,Me(a,1,e)),focus:e<a?t.focus:ke(t.focus,i,Me(a,a+.2,e)),aperture:ke(t.aperture,r.aperture,Me(a,1,e)),vignette:ke(t.vignette,r.vignette,e),shafts:ke(t.shafts,r.shafts,e)}},leaf(e){let t=_n((e-yi())/(1-yi()));if(t<=0)return{phase:"floor"};let r=Me(0,.85,t)*.85+Mf(Me(0,.15,t))*.15;return{phase:"fly",pos:Mt(Wn,[(Ms[0]-Wn[0])*r+Math.sin(t*9)*.08*(1-t),(Ms[1]-Wn[1])*r,(Ms[2]-Wn[2])*r+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?n2(e):null}},{dur:9,cam(e,t,r,n){let o=mr(e),a=_r([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],r.eye],o),i=1-Me(.6,.92,e),s=Zt(Zt(t.target,n.pos,Me(0,.15,e)),r.target,1-i),c=ke(t.fov,r.fov,Me(.3,1,e)),f=ke(t.roll,r.roll,o)+.04*Math.sin(Math.PI*e);return dt(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:ke(t.letterbox,r.letterbox,e),exposure:ke(t.exposure,r.exposure,Me(.3,.8,e)),focus:ke(a,r.focus,Me(.6,.95,e)),aperture:ke(t.aperture,r.aperture,Me(.6,1,e)),vignette:ke(t.vignette,r.vignette,e),shafts:ke(t.shafts,r.shafts,Me(.3,.8,e))}},leaf(e){let t=mr(e);return{phase:"fly",pos:Mt(_r(A_,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=mr(e),o=Ca(t,r,n);return o.eye=Mt(o.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=ke(t[o],r[o],e));return n.aperture=ke(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=mr(e);return{phase:"fly",pos:Mt(_r(T_,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=mr(e),o=Ca(t,r,n);return o.eye=Mt(o.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=ke(t[o],r[o],e));return n.aperture=ke(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=mr(e);return{phase:"fly",pos:Mt(_r([If,[29.2,1.75,45.5],[32.2,1.5,45.4],Sf],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,r,n){let o=mr(e),a=_r([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],r.eye],o),i=Me(.05,.3,e)*(1-Me(.8,1,e)),s=Zt(Zt(t.target,r.target,Me(.6,1,e)),n.pos,i);return dt(a,s,ke(t.fov,r.fov,Me(.2,1,e)),ke(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:ke(t.letterbox,r.letterbox,e),exposure:ke(t.exposure,r.exposure,e),focus:ke(a,r.focus,Me(.8,1,e)),aperture:ke(.9,r.aperture,Me(.8,1,e)),vignette:ke(t.vignette,r.vignette,e),shafts:ke(t.shafts,r.shafts,e)}},leaf(e){let t=_r([Sf,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],As],Me(0,.85,e)),r=Math.sin(e*Math.PI*6)*.25*(1-Me(.35,.82,e)),n=Me(.78,.88,e);return{phase:"fly",pos:Mt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),r]),tumble:.7*(1-n),swing:r}}},{dur:12,door(e){let t=_n((e-.02)/.09);return Mf(t)+.07*Math.sin(_n((e-.08)/.18)*Math.PI)*(1-_n((e-.08)/.3))},cam(e,t,r,n){let o=Math.sin(e*340)*.012*Me(.02,.05,e)*(1-Me(.08,.16,e)),a=Me(.06,1,e),i=_r([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],r.eye],a*.55+mr(a)*.45),s=Mt(n.pos,[1,-.2,-1.45]);i=Zt(i,s,Me(.1,.22,e)*(1-Me(.52,.72,e)));let c=Me(.06,.16,e)*(1-Me(.86,1,e)),f=Zt(t.target,n.pos,c);f=Zt(f,r.target,Me(.86,1,e));let h=ke(t.fov,r.fov,Me(.1,1,e))+6*Math.sin(Math.PI*Me(.08,.9,e)),p=ke(t.roll,r.roll,e)+.06*Math.sin(Math.PI*2*Me(.1,.9,e))+o;return dt(Mt(i,[0,o,0]),f,h,p)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),i=Me(.02,.06,e)*(1-Me(.08,.3,e));return{letterbox:ke(t.letterbox,r.letterbox,Me(.1,.4,e)),exposure:ke(t.exposure,r.exposure,e)*(1+.8*i),focus:ke(a,r.focus,Me(.86,1,e)),aperture:ke(.8,r.aperture,Me(.86,1,e)),vignette:ke(t.vignette,r.vignette,e),shafts:ke(t.shafts,r.shafts,e)+i}},leaf(e){let t=_n((e-.05)/.95);if(t<=0)return{phase:"floor"};let r=_r(k_(),t*.6+mr(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:Mt(r,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>r2(e,7.5)),{dur:10,cam(e,t,r,n){let o=mr(e),a=_r([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],r.eye],o),i=Me(0,.15,e)*(1-Me(.85,1,e)),s=Zt(Zt(t.target,r.target,Me(.5,1,e)),n.pos,i);return dt(a,s,ke(t.fov,r.fov,o)+4*Math.sin(Math.PI*o),ke(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:ke(t.letterbox,r.letterbox,e),exposure:ke(t.exposure,r.exposure,e),focus:ke(a,r.focus,Me(.85,1,e)),aperture:ke(.6,r.aperture,Me(.85,1,e)),vignette:ke(t.vignette,r.vignette,e),shafts:ke(t.shafts,r.shafts,e)}},leaf(e){let t=mr(e),r=_r(L_(),t);return{phase:"fly",pos:Mt(r,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>r2(e,7.5)),{dur:10,cam(e,t,r,n){let o=mr(e),a=_r([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],r.eye],o),i=Me(0,.2,e)*(1-Me(.9,1,e)),s=Zt(Zt(t.target,r.target,Me(.5,1,e)),n.pos,i);return dt(a,s,ke(t.fov,r.fov,o),ke(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:ke(t.letterbox,r.letterbox,e),exposure:ke(t.exposure,r.exposure,e),focus:ke(a,r.focus,Me(.85,1,e)),aperture:ke(.7,r.aperture,Me(.85,1,e)),vignette:ke(t.vignette,r.vignette,e),shafts:ke(t.shafts,r.shafts,e)}},leaf(e){let t=_r(z_(),Me(0,.86,e)),r=Math.sin(e*Math.PI*7)*.3*(1-Me(.4,.84,e)),n=Me(.8,.9,e);return{phase:"fly",pos:Mt(t,[r,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:r}}}],kf=9.2,_i=.6;function n2(e){return e<_i?ke(J0(),kf,e/_i):ke(kf,E_,(e-_i)/(1-_i))}function yi(){return _i*_n((Wn[0]+.15-J0())/(kf-J0()))}var Lf={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Q0=e=>Object.assign({},Lf,qo[e].look),R_=`
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
`;function bn(e,t,r){let n=document.createElement(e);return t&&(n.className=t),r!==void 0&&(n.innerHTML=r),n}var bi=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Z0(e,t,r){e.querySelectorAll(".tour-line").forEach((n,o)=>{n.style.transitionDelay=(t+o*r).toFixed(2)+"s"})}a2.exports=function(t){let r=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let ae=document.createElement("link");ae.rel="stylesheet",ae.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",ae.setAttribute("data-tour-font",""),document.head.appendChild(ae)}let o=document.createElement("style");o.textContent=R_+`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(o);let a=bn("div","tour");a.setAttribute("role","region"),a.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let i=bn("div","tour-mark",bi(Y0.name)),s=bn("button","tour-free","Explore freely");s.type="button";let c=bn("div","tour-links",Ef.icons("tour-icon"));c.appendChild(s);let f=bn("div","tour-progress",qo.map(()=>"<i></i>").join("")),h=bn("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=h.querySelector("span"),u=bn("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${bi(Y0.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);Z0(u,.4,.35);let v=Y0.text.split(/\n\s*\n/).map(ae=>`<p class="tour-line">${bi(ae.trim())}</p>`).join(""),m=bn("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${bi(Y0.title)}</h2>
		<span class="tour-rule"></span>
		${Ef.line("tour-line tour-contact")}
		${v}`);Z0(m,.25,.28);let d=bn("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);Z0(d,.6,.3);let x=bn("div","tour-card tour-master","");function w(ae){let ze=bn("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<div class="tour-body"></div>`),Ve=ze.querySelector(".tour-title"),gt=ze.querySelector(".tour-body");return ze.filled=!1,ze.body=gt,ze.fill=()=>{let Pt=ae();if(!Pt||ze.filled)return;ze.filled=!0;let Ot=Pt.title||"";ze.querySelector(".tour-kicker").textContent=g_(Pt)||"Oil on canvas";let ao=0;Ve.innerHTML=Ot.split(" ").map(Lt=>'<span class="tour-word">'+Lt.split("").map(Tr=>`<span style="transition-delay:${(.35+ao++*.045).toFixed(3)}s">${bi(Tr)}</span>`).join("")+"</span>").join(" "),Ve.setAttribute("aria-label",Ot);let vr=.35+Ot.length*.045+.2;ze.querySelector(".tour-rule").style.transitionDelay=vr.toFixed(2)+"s";let Nr=String(Pt.description||"").split(/\n\s*\n/).filter(Lt=>Lt.trim());gt.innerHTML=Nr.map(Lt=>`<p class="tour-line">${bi(Lt.trim())}</p>`).join(""),ze.querySelector(".tour-kicker").style.transitionDelay="0.1s",gt.querySelectorAll(".tour-line").forEach((Lt,Tr)=>{Lt.style.transitionDelay=(vr+.3+Math.min(Tr,6)*.35).toFixed(2)+"s"})},ze}let T=()=>t.paintings?t.paintings():[],C=ae=>T().find(ze=>ze.side==="corridor"&&Math.abs(ze.paintingPosition[0]-ae)<.5),G=w(()=>T().find(ae=>ae.side==="end")),$=()=>bn("div","tour-card",""),H=w(()=>C(ka[0])),oe=w(()=>C(La[0])),ye=w(()=>C(za[0])),J=jr.map(ae=>w(()=>T().find(ze=>ze.side===ae.side&&Math.abs(ze.paintingPosition[2]-ae.z)<.5))),be=bn("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">The rest of the gallery is yours to wander.</span>
		${Ef.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Z0(be,.5,.35);let ue=[u,m,d,x,G,$(),$(),$(),H,oe,ye,$(),...J,be];a.append(...ue,i,c,f,h),document.body.appendChild(a),document.body.classList.add("touring");let De=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Ie=De?"Scroll":"Swipe",Ce=qo.map((ae,ze)=>ze===0?De?"Scroll to begin":"Swipe up to begin":ze===1?Ie+" to follow the leaf":ze===2?Ie+" to follow the light":ze===3?Ie+" for its story":ze===6||ze===7||ze===qo.length-1?"":Ie+" on"),ge=[0];Af.forEach(ae=>ge.push(ge[ge.length-1]+ae.dur));let nt=ge[ge.length-1],Yt=210,st=95,Bt=.35,Rt=1.4,lr=.32,ir=1,En=1.3,Cr=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Wr=2.2,on=.7,Vn=.9,je=!0,Ue=0,et=0,yt=0,Le=-10,pt=!1,kt=-1,Wt=0,bt=0,Gt=0,mt=null,zt=Object.assign({},Q0(0)),It=qo[0].cam(0),g={phase:"home",pos:wi.slice(),tumble:0},jt=0,nr=ae=>{let ze=0;for(let Ve=1;Ve<ge.length;Ve++)Math.abs(ge[Ve]-ae)<Math.abs(ge[ze]-ae)&&(ze=Ve);return ze};function Ze(ae){let ze=ue[ae];ze&&ze.fill&&(ze.fill(),ze.body.scrollTop=0,ze.offsetWidth),ue.forEach((Ve,gt)=>Ve.classList.toggle("on",gt===ae)),p.textContent=Ce[ae]||"",h.classList.toggle("on",!!Ce[ae])}function $t(){ue.forEach(ae=>ae.classList.remove("on")),h.classList.remove("on")}let At=null,or=-1;function Jt(ae){if(!je||mt)return;let ze=Gt-Le>Bt;if(Le=Gt,ze||!At){let Ve=0,gt=nt;for(let Pt=0;Pt<ge.length;Pt++)if(ge[Pt]<=Ue-.02&&(Ve=ge[Pt]),ge[Pt]>=Ue+.02){gt=ge[Pt];break}At={lo:Ve,hi:gt}}Gt<or||(pt=!1,yt=Math.max(At.lo,Math.min(At.hi,yt+ae)),yt=Math.max(Ue-Wr,Math.min(Ue+Wr,yt)))}function Vr(ae){if(!je||mt)return;let ze=pt?yt:Ue,Ve;if(ae>0)Ve=ge.findIndex(gt=>gt>ze+.05);else{Ve=-1;for(let gt=ge.length-1;gt>=0;gt--)if(ge[gt]<ze-.05){Ve=gt;break}}Ve<0||(yt=ge[Ve],pt=!0,Le=Gt)}let Kt=null,Ra=ae=>ae.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(ae=>a.addEventListener(ae,Ra)),a.addEventListener("pointerdown",ae=>{if(ae.stopPropagation(),!(ae.target.closest("button, a")||ae.target.closest(".tour-body"))){Kt={x:ae.clientX,y:ae.clientY,lx:ae.clientX,ly:ae.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{a.setPointerCapture(ae.pointerId)}catch(ze){}}}),a.addEventListener("pointermove",ae=>{if(!Kt)return;let ze=ae.clientX-Kt.lx,Ve=ae.clientY-Kt.ly;Kt.lx=ae.clientX,Kt.ly=ae.clientY;let gt=Math.abs(Ve)>=Math.abs(ze)?-Ve:-ze;Kt.moved+=Math.abs(gt);let Pt=performance.now(),Ot=gt/st;Kt.v=Kt.v*.6+Ot/Math.max(.008,(Pt-Kt.lt)/1e3)*.4,Kt.lt=Pt,Kt.moved>6&&Jt(Ot)});let Bo=ae=>{let ze=Kt;Kt=null,ze&&(ze.moved<10&&performance.now()-ze.t<500?Vr(1):performance.now()-ze.lt<120&&Jt(Math.max(-1.6,Math.min(1.6,ze.v*.22))))};a.addEventListener("pointerup",ae=>{ae.stopPropagation(),Bo(ae)}),a.addEventListener("pointercancel",()=>{Kt=null}),a.addEventListener("wheel",ae=>{if(ae.target.closest(".tour-body")){let Ve=ae.target.closest(".tour-body"),gt=Ve.scrollTop+Ve.clientHeight>=Ve.scrollHeight-2&&ae.deltaY>0,Pt=Ve.scrollTop<=0&&ae.deltaY<0;if(!gt&&!Pt)return}ae.preventDefault();let ze=ae.deltaMode===1?ae.deltaY*16:ae.deltaMode===2?ae.deltaY*window.innerHeight:ae.deltaY;Jt(ze/Yt)},{passive:!1}),window.addEventListener("keydown",ae=>{if(!je||mt)return;let ze=ae.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ze)>=0){if((ze==="Enter"||ze===" ")&&ae.target&&ae.target.tagName==="BUTTON")return;ae.preventDefault(),ae.stopImmediatePropagation(),Vr(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ze)>=0?(ae.preventDefault(),ae.stopImmediatePropagation(),Vr(-1)):ze==="Escape"?(ae.preventDefault(),Xn()):/^[wasdzq]$/i.test(ze)&&ae.stopImmediatePropagation()},!0),window.addEventListener("keyup",ae=>{je&&!mt&&/^(Arrow|[wasdzq]$)/i.test(ae.key)&&ae.stopImmediatePropagation()},!0),s.addEventListener("click",ae=>{ae.stopPropagation(),Xn()}),be.addEventListener("click",ae=>{let ze=ae.target.closest("button");ze&&(ae.stopPropagation(),ze.dataset.act==="free"&&Xn(),ze.dataset.act==="replay"&&jo(),ze.dataset.act==="list"&&cl().show(!1))});let Or=[null,[wn.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Ei[0]-7,0],[42.5+Ei[1]-7,0],[42.5+Ei[2]-7,0],[1e3,Math.PI/2],...jr.map(ae=>[ae.z-1.6,ae.side==="left"?-Math.PI/2:Math.PI/2]),[Ho[2]-1.6,Math.PI]],Nn=null,oo=0;function Xn(){if(!je||mt)return;let ae=nr(Ue),ze=Or[ae];Nn=ae<=1?{phase:"home",pos:wi.slice()}:ae>=3&&ae<=6?{phase:"floor",pos:Wn.slice()}:ae===11?{phase:"floor",pos:As.slice()}:ae===18?{phase:"floor",pos:Ho.slice()}:null,oo=ae>=12?1:0,ze&&n.place&&n.place(ze[0],ze[1]),mt={start:Gt,fromCam:It,fromLook:Object.assign({},zt)},$t(),a.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function jo(){Ue=yt=0,et=0,pt=!1,kt=-1,Wt=0,bt=0,g={phase:"home",pos:wi.slice(),tumble:0},Mn={start:Gt}}let Mn={start:-1},an=!1,ar=[];function Ci(ae){jt+=ae*(g.phase==="floor"?0:1);let ze=g.tumble===void 0?0:g.tumble,Ve=go.fromTranslation(ar,g.pos);if(g.phase==="home")Ve=go.rotateY(Ve,Ve,2.2+Math.sin(jt*.9)*.15),Ve=go.rotateZ(Ve,Ve,-1+Math.sin(jt*1.3)*.12),Ve=go.rotateX(Ve,Ve,.4);else if(g.phase==="floor")Ve=go.rotateY(Ve,Ve,.65),Ve=go.rotateX(Ve,Ve,.16);else{let gt=It.eye,Pt=g.pos,Ot=[gt[0]-Pt[0],gt[1]-Pt[1],gt[2]-Pt[2]],ao=Math.hypot(Ot[0],Ot[1],Ot[2])||1;Ot=[Ot[0]/ao,Ot[1]/ao,Ot[2]/ao];let vr=[Ot[2],0,-Ot[0]],Nr=Math.hypot(vr[0],vr[2])||1;vr=[vr[0]/Nr,0,vr[2]/Nr];let Lt=[vr[1]*Ot[2]-vr[2]*Ot[1],vr[2]*Ot[0]-vr[0]*Ot[2],vr[0]*Ot[1]-vr[1]*Ot[0]],Tr=[vr[0],vr[1],vr[2],0,Ot[0],Ot[1],Ot[2],0,Lt[0],Lt[1],Lt[2],0,Pt[0],Pt[1],Pt[2],1];for(let Fn=0;Fn<16;Fn++)Ve[Fn]=Tr[Fn];Ve=go.rotateY(Ve,Ve,jt*.9*ze+.65),Ve=go.rotateX(Ve,Ve,Math.sin(jt*2.3)*.9*ze),Ve=go.rotateZ(Ve,Ve,Math.sin(jt*1.7+1)*1.1*ze+(g.swing||0)*.9)}return{visible:!0,model:Ve}}function Ss(ae){for(let ze in Lf)zt[ze]=ae[ze]!==void 0?ae[ze]:Lf[ze]}function cc(ae,ze){if(ae<=1)return{phase:"home",pos:wi.slice(),tumble:0};let Ve=t2[ae];if(Ve){let gt=Ve.amp;return{phase:"fly",pos:Mt(Ve.pos(),[Math.sin(ze*.55)*gt[0],Math.sin(ze*.8)*gt[1],(1-Math.cos(ze*.45))*gt[2]]),tumble:Ve.tumble}}return{phase:"floor",pos:(ae>=18?Ho:ae>=10?As:Wn).slice(),tumble:0}}let ks=0,Ur=null;function lc(ae){let ze=Math.min(.1,Math.max(0,ae-ks));if(ks=ae,Gt=ae,an||(an=!0,Mn.start=ae),mt)return null;if(!pt&&!Kt&&Gt-Le>on){let er=nr(yt);Math.abs(ge[er]-yt)<Vn&&(yt=ge[er])}let Ve=yt-Ue;if(pt){let gr=Math.sign(Ve)*Math.min(ir,Math.sqrt(2*En*Math.abs(Ve)))-et;et+=Math.sign(gr)*Math.min(Math.abs(gr),En*ze),Ue+=et*ze,(Ve>0&&Ue>=yt||Ve<0&&Ue<=yt||Math.abs(yt-Ue)<1e-4)&&(Ue=yt,et=0,pt=!1)}else{let er=x_(Ue,yt,et,lr,ze,3);Ue=er[0],et=er[1],Math.abs(yt-Ue)<1e-4&&Math.abs(et)<.001&&(Ue=yt,et=0)}let gt=0;for(;gt<Af.length-1&&Ue>=ge[gt+1];)gt++;let Pt=Af[gt],Ot=_n((Ue-ge[gt])/Pt.dur),ao=qo[gt],vr=qo[gt+1],Nr=nr(Ue);Nr!==Wt&&(Wt=Nr,bt=0);let Lt=Math.abs(Ue-ge[Nr])<.02;Lt&&(bt+=ze);let Tr=1-Me(0,1.2,Math.abs(Ue-ge[Nr])),Fn=Pt.leaf(Ot);if(Fn.pos?g=Object.assign({},Fn):g=Object.assign({},Fn,{pos:Fn.phase==="home"?wi.slice():(gt>=10?As:Wn).slice()}),t2[Nr]&&Tr>0){let er=cc(Nr,bt);g.pos=Zt(g.pos,er.pos,Tr)}let Ia=Pt.walker&&(Ot>.01||gt===6)?Pt.walker(Ot):null;Ur=Ia==null?null:{x:Ia,z:Tf,heading:Math.PI/2,phase:(Ia-o2)/M_};let sn=Pt.cam(Ot,ao.cam(0),vr.cam(0),g);if(Tr>0&&bt>0){let er=qo[Nr],gr=er.cam(0),io=er.cam(bt);sn=dt(Mt(sn.eye,Qv(Kv(io.eye,gr.eye),Tr)),Mt(sn.target,Qv(Kv(io.target,gr.target),Tr)),sn.fov+(io.fov-gr.fov)*Tr,sn.roll+(io.roll-gr.roll)*Tr)}if(Tr>0&&!Cr){let er=Gt,gr=.006*Tr,io=Math.sin(er*.61)*.6+Math.sin(er*1.37+1.3)*.4,Cs=Math.sin(er*.47+2.1)*.6+Math.sin(er*1.13+.4)*.4,Rs=Math.sin(er*.53+4)*.5+Math.sin(er*.97+2.6)*.5;sn=dt(Mt(sn.eye,[io*gr,Cs*gr*.7,Rs*gr]),Mt(sn.target,[Cs*gr*1.8,io*gr*1.4,0]),sn.fov,sn.roll+Rs*.0012*Tr)}It=sn;let Ls=Q0(gt),fc=Q0(gt+1),Ri=Object.assign({},Ls,Pt.look(Ot,Ls,fc,g,sn.eye));if(Tr>0){let er=Q0(Nr);for(let gr in er)typeof er[gr]=="number"&&(Ri[gr]=ke(Ri[gr],er[gr],Tr))}Ss(Ri);let Wo=Lt&&Math.abs(yt-Ue)<.02?Nr:-1;Wo!==kt&&(Wo>=0&&(or=Gt+Rt),kt=Wo,Wo>=0?Ze(Wo):$t()),f.querySelectorAll("i").forEach((er,gr)=>er.classList.toggle("on",gr===Nr));let Yn=kt>=0?ue[kt]:null;Yn&&Yn.fill&&!Yn.filled&&(Yn.fill(),Yn.filled&&(Yn.classList.remove("on"),Yn.offsetWidth,Yn.classList.add("on")));let zs=_n((ae-Mn.start)/2.6);return zs<1&&(zt.fade=Math.max(zt.fade,1-Me(0,1,zs)),zt.fadeColor=[0,0,0]),r&&window.__camOverride&&(It=window.__camOverride),r&&window.__lookOverride&&Object.assign(zt,window.__lookOverride),{camera:It,walker:Ur,door:Pt.door?Pt.door(Ot):gt>=12?1:0,look:zt,leaf:Ci(ze)}}return r&&(window.__tour={go:Vr,exit:Xn,wind:Jt,seek(ae,ze){Ue=yt=ge[ae]+(ge[ae+1]-ge[ae])*ze,et=0,pt=!1,Le=Gt+1e6,Mn.start=Gt-10,an=!0},jump(ae){Ue=yt=ge[ae],et=0,pt=!1,bt=0,Le=Gt,Mn.start=Gt-10,an=!0},state:()=>({current:nr(Ue),scroll:+Ue.toFixed(3),target:+yt.toFixed(3),shown:kt,move:Math.abs(yt-Ue)>.02?{p:Ue}:null,camNow:It,leaf:g,look:zt})}),{update:lc,get active(){return je&&!mt},handover(ae){if(!mt)return null;let ze=_n((ae-mt.start)/1.8);return ze>=1?(je=!1,null):{from:mt.fromCam,fromLook:mt.fromLook,k:mr(ze)}},restingDoor:()=>oo,restingLeaf(){return Nn?(g=Nn,Ci(0)):null},mix:Ca,cam:dt}}});var I_=Dh(),ki=lo(),Df=cl(),tc=ki.reflection,P_=!1,g2=(e,t,r,n,o)=>n+(e-t)*(o-n)/(r-t),Gf=()=>g2(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Gf=()=>g2(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var x2=()=>2*Math.atan(Math.tan(Gf()*.5)*window.innerHeight/window.innerWidth),O_=Kh(),rc=new O_;rc.showPanel(0);P_&&document.body.appendChild(rc.dom);var Hr,zi,Pf,Si,Of,cr;function N_(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!N_())throw I_.finish(),Df.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Hr=Qh()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:ki.pixelRatio});location.hash==="#list"&&Df.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Df.show(!1)});zi=zd()();var F_=Il();Pf=F_(Hr,zi,tc);Si=K1()(Hr,zi);Of=ep()(Hr);var s2=rp()(Hr,zi),c2=dp()(Hr),l2=vp()(Hr),f2=Rp()(Hr),u2=Dp()(Hr),h2=Bp()(Hr),Li=tm()(Hr),Nf=nf(),y2=u0(),D_=h0(),{A:Ai}=eo();cr=Dv()(zi,x2);var nc=$v()(Hr,ki),Ti=Bv()(Hr),d2=Wv()(Hr),G_=Yv()(Hr,ki),xo=i2()({fps:cr,paintings:()=>Si.interactables(),onExit:()=>cr.setPaused(!1)});cr.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=nc);var oc=[],ac=[],Uo=[7,2,1.6];zi.viewer=Uo;var $_=Hr({cull:{enable:!0,face:"back"},uniforms:{view:()=>oc,proj:()=>ac,yScale:1,mirrorOn:()=>tc?1:0}}),q_=Hr({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),b2=document.createElement("style");b2.textContent=`

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
`;document.head.appendChild(b2);var On=document.createElement("button");On.className="painting-plaque";On.type="button";On.setAttribute("aria-label","Read painting");document.body.appendChild(On);var dn=document.createElement("div");dn.className="story-overlay";dn.innerHTML=`

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

		${y2.line("story-contact")}

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(dn);var sc=document.createElement("div");sc.className="museum-links";sc.innerHTML=y2.icons("museum-link");["mousedown","pointerdown","click"].forEach(e=>sc.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(sc);var H_=dn.querySelector("#story-title"),U_=dn.querySelector("#story-body"),p2=dn.querySelector("#story-meta"),B_=dn.querySelector(".story-contact"),j_=dn.querySelector(".story-close"),Ts=null,hn={p:0,target:0,last:0},w2={title:Nf.title,description:Nf.text,isAbout:!0},yo=null;function $f(e){e&&(Ts=e,H_.textContent=e.title||"",U_.textContent=e.description||"",p2.textContent=e.isAbout?"":D_(e),p2.hidden=!!e.isAbout,B_.hidden=!e.isAbout,dn.classList.toggle("about-mode",!!e.isAbout),dn.classList.add("open"),hn.target=e.isAbout?1:0,yo=e,On.classList.remove("visible"),cr.setPaused(!0))}function qf(){dn.classList.remove("open"),hn.target=0,Ts=null,yo=null,cr.setPaused(!1)}function _2(e){e&&(e.preventDefault(),e.stopPropagation()),yo&&$f(yo)}On.addEventListener("pointerup",_2,!0);On.addEventListener("touchend",_2,{passive:!1,capture:!0});On.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),Ts===null&&yo&&$f(yo)},!0);j_.addEventListener("click",qf);dn.addEventListener("click",e=>{e.target===dn&&qf()});window.addEventListener("keydown",e=>{e.code==="Escape"&&dn.classList.contains("open")&&qf()});function m2(e,t){let r=t[0],n=t[1],o=t[2];return[e[0]*r+e[4]*n+e[8]*o+e[12],e[1]*r+e[5]*n+e[9]*o+e[13],e[2]*r+e[6]*n+e[10]*o+e[14],e[3]*r+e[7]*n+e[11]*o+e[15]]}function W_(){if(Ts)return;if(xo.active){yo=null,On.classList.remove("visible");return}let e=Si.interactables(),t=cr.forward[0],r=cr.forward[2],n=Math.hypot(t,r)||1,o=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let h=s[0]-cr.pos[0],p=s[2]-cr.pos[2],u=-(h*c+p*f),v=Math.abs(h*f-p*c),m=-(t*c+r*f)/n,d=i.side==="end"?11:8,x=(i.width||2)/2;m>.9&&u>.5&&u<d&&v<x+.8&&u<a&&(o=i,a=u)}if(!o){let i=cr.pos[0],s=cr.pos[2];t/n>.85&&i<13.6&&s>Ai.z0-.5&&s<Ai.z1+.5&&(o=Object.assign({},w2,{plaqueTitle:Nf.name}))}o?(yo=o,On.textContent=o.isAbout?"ABOUT  \xB7  "+o.plaqueTitle:"READ  \xB7  "+o.title,On.classList.add("visible")):(yo=null,On.classList.remove("visible"))}var Hf=is();function V_(){let e=Li.state;if(!e||!e.glowPos)return null;let t=m2(cr.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),r=m2(cr.proj(),t);return r[3]<=.05?null:[(r[0]/r[3]*.5+.5)*window.innerWidth,(.5-r[1]/r[3]*.5)*window.innerHeight,r[3]]}var Ff=null;window.addEventListener("pointerdown",e=>{Ff={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Ff;if(Ff=null,!t||Ts||xo.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let r=V_();if(!r)return;let n=!!document.pointerLockElement,o=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/r[2]);Math.hypot(o-r[0],a-r[1])<i&&(e.preventDefault(),e.stopPropagation(),$f(w2))},!0);function X_(e){let t=Math.min(Math.max(e-hn.last,0),.1);hn.last=e;let r=t/1.6;if(hn.p=hn.target>hn.p?Math.min(1,hn.p+r):Math.max(0,hn.p-r),hn.p<=0)return;let n=hn.p<.5?2*hn.p*hn.p:1-Math.pow(-2*hn.p+2,2)/2,o=window.innerHeight>window.innerWidth,a=Li.state,i=a&&a.hipsPos?a.hipsPos[0]:Ai.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Ai.zc,c=o?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=o?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],h=cr.pos,p=cr.forward,u=[h[0],h[1],h[2]],v=[h[0]+p[0],h[1]+p[1],h[2]+p[2]],m=(T,C)=>T.map((G,$)=>G+(C[$]-G)*n),d=[Ai.cx-6.2,1.7,Ai.zc],x=1-n,w=u.map((T,C)=>x*x*T+2*x*n*d[C]+n*n*c[C]);Hf.lookAt(cr.view(),w,m(v,f),[0,1,0])}var Mi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},ic=null;function Y_(e,t,r,n){let o=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],a=Math.hypot(o[0],o[1],o[2])||1,i=[-o[2]/a,0,o[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Hf.lookAt(e,t,r,[i[0]*f,c,i[2]*f])}function K_(e){let t=window.innerWidth/window.innerHeight,r=nc.shot,n=xo.active?xo.update(e):null,o=n?null:xo.handover(e),a=null,i=Mi;if(n?(a=n.camera,i=n.look,ic=n.leaf,Li.setWalk(n.walker||null),Ti.setOpen(n.door||0)):(ic=xo.restingLeaf(),Li.setWalk(null),Ti.setOpen(xo.restingDoor())),o){let s=cr.pos,c=cr.forward,f=xo.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],x2()*180/Math.PI,0);a=xo.mix(o.from,f,o.k),i={};for(let h in Mi)i[h]=Array.isArray(Mi[h])?Mi[h]:o.fromLook[h]+(Mi[h]-o.fromLook[h])*o.k}if(a)Y_(oc,a.eye,a.target,a.roll||0),Hf.perspective(ac,a.fov*Math.PI/180,t,.1,700),Uo[0]=a.eye[0],Uo[1]=a.eye[1],Uo[2]=a.eye[2];else{let s=cr.view(),c=cr.proj();for(let u=0;u<16;u++)oc[u]=s[u],ac[u]=c[u];let f=s[12],h=s[13],p=s[14];Uo[0]=-(s[0]*f+s[1]*h+s[2]*p),Uo[1]=-(s[4]*f+s[5]*h+s[6]*p),Uo[2]=-(s[8]*f+s[9]*h+s[10]*p)}for(let s in Mi)r[s]=i[s]}var ec=0,v2=0;Hr.frame(function({time:e}){rc.begin(),ec++,ec===60&&(v2=e),ec===180&&120/Math.max(e-v2,.001)<32&&ki.stepDown()&&(tc=ki.reflection,ec=0),cr.tick({time:e}),X_(e),Si.update(cr.pos,cr.fmouse[1],Gf()),W_(),K_(e),nc.capture(arguments[0],{view:oc,proj:ac,eye:Uo},()=>{$_(()=>{tc&&q_(()=>{Pf(),s2(),h2(),Li(),Of(Si.batch()),c2(),f2(),u2(),d2(ic),Ti(),l2(),Ti.glass()}),Pf(),s2(),h2(),Li(),Of(Si.batch()),c2(),f2(),u2(),d2(ic),Ti(),G_(),l2(),Ti.glass()})}),nc.present(),rc.end()});})();
