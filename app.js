"use strict";(()=>{var ue=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var jh=ue((g4,Bh)=>{"use strict";var Zi=document.getElementById("loader"),p0=Zi&&Zi.querySelector(".loader-bar i"),Ji=0,m0=0,qh=!1,px=performance.now();function Hh(){if(!p0)return;let e=Ji?m0/Math.max(Ji,24):0;p0.style.transform="scaleX("+Math.min(1,.06+e*.94).toFixed(3)+")"}function ll(){qh||(qh=!0,window.__galleryReady=!0,Zi&&(p0&&(p0.style.transform="scaleX(1)"),Zi.classList.add("done"),setTimeout(()=>Zi.remove(),1400)))}var Uh=null;function mx(){clearTimeout(Uh),m0>=Ji&&performance.now()-px>600&&(Uh=setTimeout(()=>{m0>=Ji&&ll()},450))}setTimeout(ll,2e4);var vx=e=>/(^|\/)(res|images)\//.test(e),d0=window.fetch.bind(window);async function gx(e,t){let r=await d0(e+".gz",t);if(!r.ok)throw new Error("no .gz");let n=new Uint8Array(await r.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let o=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(o).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let r=typeof e=="string"?e:e&&e.url||"";if(!vx(r))return d0(e,t);Ji++,Hh();let n=a=>(m0++,Hh(),mx(),a),o;return/\.bin$/.test(r)&&typeof DecompressionStream!="undefined"?o=gx(r,t).catch(()=>d0(e,t)):o=d0(e,t),o.then(n,a=>{throw n(),a})};Bh.exports={finish:ll}});var to=ue((y4,Xh)=>{"use strict";var Wh=typeof navigator!="undefined"&&navigator.userAgent||"",yx=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,To=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Wh)||/Macintosh/.test(Wh)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||yx,Vh=typeof window!="undefined"&&window.devicePixelRatio||1,vn={isPhone:To,pixelRatio:To?Math.min(Vh,1.5):Math.min(Vh,2),reflection:!To,gardenDetail:To?0:1,leafShare:To?.65:1,motion:!To,post:To?1:2,level:To?1:0};vn.stepDown=()=>{if(vn.reflection)vn.reflection=!1;else if(vn.gardenDetail>0||vn.motion)vn.gardenDetail=0,vn.motion=!1,vn.leafShare=Math.min(vn.leafShare,.65);else if(vn.post>0)vn.post--;else return!1;return vn.level++,!0};Xh.exports=vn});var fl=ue((x4,Yh)=>{"use strict";Yh.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",visit:{video:"visits/love-me-like-i-am-already-dead.mp4"},title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var v0=ue((b4,Zh)=>{"use strict";var Zr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Kh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Qh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Zr.instagramUrl="https://instagram.com/"+Zr.instagram;Zr.mailUrl="mailto:"+Zr.email+"?subject="+encodeURIComponent("Your paintings");Zr.icons=e=>`
	<a class="${e}" href="${Zr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Zr.instagram}" title="Instagram">${Kh}</a>
	<a class="${e}" href="${Zr.mailUrl}" aria-label="Email ${Zr.email}" title="Email">${Qh}</a>`;Zr.line=e=>`
	<span class="${e}">
		<a href="${Zr.instagramUrl}" target="_blank" rel="noopener">${Kh}<span>@${Zr.instagram}</span></a>
		<a href="${Zr.mailUrl}">${Qh}<span>${Zr.email}</span></a>
	</span>`;Zh.exports=Zr});var es=ue((w4,Jh)=>{"use strict";Jh.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var ul=ue((_4,rd)=>{"use strict";var xx=fl(),bx=v0(),ed=es(),wx=to(),So=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),_x=`
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
`,Jr=null;function Ex(e){if(Jr){Jr.hidden=!1,requestAnimationFrame(()=>Jr.classList.add("on"));return}let t=document.createElement("style");t.textContent=_x,document.head.appendChild(t);let r=!wx.isPhone;Jr=document.createElement("div"),Jr.className="plist",Jr.setAttribute("role","region"),Jr.setAttribute("aria-label","All paintings"),Jr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${bx.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${xx.map(o=>`
			<article class="plist-item" id="${So(o.slug)}">
				<img loading="lazy" decoding="async" alt="${So(o.title)}, ${So(ed(o))}"
					src="images/web/${So(o.slug)}${r?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${So(o.file)}'">
				<p class="plist-meta">${So(ed(o))}</p>
				<h2>${So(o.title)}</h2>
				<details><summary>Read its story</summary>
					${String(o.description).split(/\n\s*\n/).map(a=>`<p>${So(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(o=>Jr.addEventListener(o,a=>a.stopPropagation(),{passive:!0}));let n=Jr.querySelector(".plist-close");n&&n.addEventListener("click",td),document.body.appendChild(Jr),requestAnimationFrame(()=>Jr.classList.add("on"))}function td(){Jr&&(Jr.classList.remove("on"),setTimeout(()=>{Jr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}rd.exports={show:Ex,hide:td}});var nd=ue((hl,dl)=>{(function(e,t){typeof hl=="object"&&typeof dl!="undefined"?dl.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(hl,function(){var e=function(){function t(p){return o.appendChild(p.dom),p}function r(p){for(var u=0;u<o.children.length;u++)o.children[u].style.display=u===p?"block":"none";n=p}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),r(++n%o.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var p=(performance||Date).now();if(f.update(p-a,200),p>i+1e3&&(c.update(1e3*s/(p-i),100),i=p,s=0,h)){var u=performance.memory;h.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:r}};return e.Panel=function(t,r,n){var o=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,h=3*s,p=2*s,u=3*s,v=15*s,g=74*s,d=30*s,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var w=m.getContext("2d");return w.font="bold "+9*s+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,c,f),w.fillStyle=r,w.fillText(t,h,p),w.fillRect(u,v,g,d),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u,v,g,d),{dom:m,update:function(T,C){o=Math.min(o,T),a=Math.max(a,T),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,c,v),w.fillStyle=r,w.fillText(i(T)+" "+t+" ("+i(o)+"-"+i(a)+")",h,p),w.drawImage(m,u+s,v,g-s,d,u,v,g-s,d),w.fillRect(u+g-s,v,s,d),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u+g-s,v,s,i((1-T/C)*d))}}},e})});var od=ue((pl,ml)=>{(function(e,t){typeof pl=="object"&&typeof ml!="undefined"?ml.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(pl,function(){"use strict";var e=function(l){return l instanceof Uint8Array||l instanceof Uint16Array||l instanceof Uint32Array||l instanceof Int8Array||l instanceof Int16Array||l instanceof Int32Array||l instanceof Float32Array||l instanceof Float64Array||l instanceof Uint8ClampedArray},t=function(l,b){for(var S=Object.keys(b),j=0;j<S.length;++j)l[S[j]]=b[S[j]];return l},r=`
`;function n(l){return typeof atob!="undefined"?atob(l):"base64:"+l}function o(l){var b=new Error("(regl) "+l);throw console.error(b),b}function a(l,b){l||o(b)}function i(l){return l?": "+l:""}function s(l,b,S){l in b||o("unknown parameter ("+l+")"+i(S)+". possible values: "+Object.keys(b).join())}function c(l,b){e(l)||o("invalid parameter type"+i(b)+". must be a typed array")}function f(l,b){switch(b){case"number":return typeof l=="number";case"object":return typeof l=="object";case"string":return typeof l=="string";case"boolean":return typeof l=="boolean";case"function":return typeof l=="function";case"undefined":return typeof l=="undefined";case"symbol":return typeof l=="symbol"}}function h(l,b,S){f(l,b)||o("invalid parameter type"+i(S)+". expected "+b+", got "+typeof l)}function p(l,b){l>=0&&(l|0)===l||o("invalid parameter type, ("+l+")"+i(b)+". must be a nonnegative integer")}function u(l,b,S){b.indexOf(l)<0&&o("invalid value"+i(S)+". must be one of: "+b)}var v=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function g(l){Object.keys(l).forEach(function(b){v.indexOf(b)<0&&o('invalid regl constructor argument "'+b+'". must be one of '+v)})}function d(l,b){for(l=l+"";l.length<b;)l=" "+l;return l}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function w(l,b){this.number=l,this.line=b,this.errors=[]}function T(l,b,S){this.file=l,this.line=b,this.message=S}function C(){var l=new Error,b=(l.stack||l).toString(),S=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(b);if(S)return S[1];var j=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(b);return j?j[1]:"unknown"}function D(){var l=new Error,b=(l.stack||l).toString(),S=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(b);if(S)return S[1];var j=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(b);return j?j[1]:"unknown"}function $(l,b){var S=l.split(`
`),j=1,Q=0,U={unknown:new m,0:new m};U.unknown.name=U[0].name=b||C(),U.unknown.lines.push(new w(0,""));for(var V=0;V<S.length;++V){var ie=S[V],le=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(ie);if(le)switch(le[1]){case"line":var me=/(\d+)(\s+\d+)?/.exec(le[2]);me&&(j=me[1]|0,me[2]&&(Q=me[2]|0,Q in U||(U[Q]=new m)));break;case"define":var fe=/SHADER_NAME(_B64)?\s+(.*)$/.exec(le[2]);fe&&(U[Q].name=fe[1]?n(fe[2]):fe[2]);break}U[Q].lines.push(new w(j++,ie))}return Object.keys(U).forEach(function(ye){var Te=U[ye];Te.lines.forEach(function(se){Te.index[se.number]=se})}),U}function H(l){var b=[];return l.split(`
`).forEach(function(S){if(!(S.length<5)){var j=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(S);j?b.push(new T(j[1]|0,j[2]|0,j[3].trim())):S.length>0&&b.push(new T("unknown",0,S))}}),b}function oe(l,b){b.forEach(function(S){var j=l[S.file];if(j){var Q=j.index[S.line];if(Q){Q.errors.push(S),j.hasErrors=!0;return}}l.unknown.hasErrors=!0,l.unknown.lines[0].errors.push(S)})}function xe(l,b,S,j,Q){if(!l.getShaderParameter(b,l.COMPILE_STATUS)){var U=l.getShaderInfoLog(b),V=j===l.FRAGMENT_SHADER?"fragment":"vertex";ge(S,"string",V+" shader source must be a string",Q);var ie=$(S,Q),le=H(U);oe(ie,le),Object.keys(ie).forEach(function(me){var fe=ie[me];if(!fe.hasErrors)return;var ye=[""],Te=[""];function se(we,N){ye.push(we),Te.push(N||"")}se("file number "+me+": "+fe.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),fe.lines.forEach(function(we){if(we.errors.length>0){se(d(we.number,4)+"|  ","background-color:yellow; font-weight:bold"),se(we.line+r,"color:red; background-color:yellow; font-weight:bold");var N=0;we.errors.forEach(function(X){var pe=X.message,Re=/^\s*'(.*)'\s*:\s*(.*)$/.exec(pe);if(Re){var te=Re[1];switch(pe=Re[2],te){case"assign":te="=";break}N=Math.max(we.line.indexOf(te,N),0)}else N=0;se(d("| ",6)),se(d("^^^",N+3)+r,"font-weight:bold"),se(d("| ",6)),se(pe+r,"font-weight:bold")}),se(d("| ",6)+r)}else se(d(we.number,4)+"|  "),se(we.line+r,"color:red")}),typeof document!="undefined"&&!window.chrome?(Te[0]=ye.join("%c"),console.log.apply(console,Te)):console.log(ye.join(""))}),a.raise("Error compiling "+V+" shader, "+ie[0].name)}}function J(l,b,S,j,Q){if(!l.getProgramParameter(b,l.LINK_STATUS)){var U=l.getProgramInfoLog(b),V=$(S,Q),ie=$(j,Q),le='Error linking program with vertex shader, "'+ie[0].name+'", and fragment shader "'+V[0].name+'"';typeof document!="undefined"?console.log("%c"+le+r+"%c"+U,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(le+r+U),a.raise(le)}}function be(l){l._commandRef=C()}function he(l,b,S,j){be(l);function Q(le){return le?j.id(le):0}l._fragId=Q(l.static.frag),l._vertId=Q(l.static.vert);function U(le,me){Object.keys(me).forEach(function(fe){le[j.id(fe)]=!0})}var V=l._uniformSet={};U(V,b.static),U(V,b.dynamic);var ie=l._attributeSet={};U(ie,S.static),U(ie,S.dynamic),l._hasCount="count"in l.static||"count"in l.dynamic||"elements"in l.static||"elements"in l.dynamic}function Ge(l,b){var S=D();o(l+" in command "+(b||C())+(S==="unknown"?"":" called from "+S))}function Ie(l,b,S){l||Ge(b,S||C())}function Ce(l,b,S,j){l in b||Ge("unknown parameter ("+l+")"+i(S)+". possible values: "+Object.keys(b).join(),j||C())}function ge(l,b,S,j){f(l,b)||Ge("invalid parameter type"+i(S)+". expected "+b+", got "+typeof l,j||C())}function nt(l){l()}function Yt(l,b,S){l.texture?u(l.texture._texture.internalformat,b,"unsupported texture format for attachment"):u(l.renderbuffer._renderbuffer.format,S,"unsupported renderbuffer format for attachment")}var st=33071,Bt=9728,Rt=9984,lr=9985,ir=9986,Mn=9987,Cr=5120,Vr=5121,sn=5122,Xn=5123,je=5124,Ue=5125,et=5126,xt=32819,ze=32820,pt=33635,kt=34042,Wt=36193,bt={};bt[Cr]=bt[Vr]=1,bt[sn]=bt[Xn]=bt[Wt]=bt[pt]=bt[xt]=bt[ze]=2,bt[je]=bt[Ue]=bt[et]=bt[kt]=4;function Gt(l,b){return l===ze||l===xt||l===pt?2:l===kt?4:bt[l]*b}function mt(l){return!(l&l-1)&&!!l}function zt(l,b,S){var j,Q=b.width,U=b.height,V=b.channels;a(Q>0&&Q<=S.maxTextureSize&&U>0&&U<=S.maxTextureSize,"invalid texture shape"),(l.wrapS!==st||l.wrapT!==st)&&a(mt(Q)&&mt(U),"incompatible wrap mode for texture, both width and height must be power of 2"),b.mipmask===1?Q!==1&&U!==1&&a(l.minFilter!==Rt&&l.minFilter!==ir&&l.minFilter!==lr&&l.minFilter!==Mn,"min filter requires mipmap"):(a(mt(Q)&&mt(U),"texture must be a square power of 2 to support mipmapping"),a(b.mipmask===(Q<<1)-1,"missing or incomplete mipmap data")),b.type===et&&(S.extensions.indexOf("oes_texture_float_linear")<0&&a(l.minFilter===Bt&&l.magFilter===Bt,"filter not supported, must enable oes_texture_float_linear"),a(!l.genMipmaps,"mipmap generation not supported with float textures"));var ie=b.images;for(j=0;j<16;++j)if(ie[j]){var le=Q>>j,me=U>>j;a(b.mipmask&1<<j,"missing mipmap data");var fe=ie[j];if(a(fe.width===le&&fe.height===me,"invalid shape for mip images"),a(fe.format===b.format&&fe.internalformat===b.internalformat&&fe.type===b.type,"incompatible type for mip image"),!fe.compressed)if(fe.data){var ye=Math.ceil(Gt(fe.type,V)*le/fe.unpackAlignment)*fe.unpackAlignment;a(fe.data.byteLength===ye*me,"invalid data for image, buffer size is inconsistent with image format")}else fe.element||fe.copy}else l.genMipmaps||a((b.mipmask&1<<j)===0,"extra mipmap data");b.compressed&&a(!l.genMipmaps,"mipmap generation for compressed images not supported")}function It(l,b,S,j){var Q=l.width,U=l.height,V=l.channels;a(Q>0&&Q<=j.maxTextureSize&&U>0&&U<=j.maxTextureSize,"invalid texture shape"),a(Q===U,"cube map must be square"),a(b.wrapS===st&&b.wrapT===st,"wrap mode not supported by cube map");for(var ie=0;ie<S.length;++ie){var le=S[ie];a(le.width===Q&&le.height===U,"inconsistent cube map face shape"),b.genMipmaps&&(a(!le.compressed,"can not generate mipmap for compressed textures"),a(le.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var me=le.images,fe=0;fe<16;++fe){var ye=me[fe];if(ye){var Te=Q>>fe,se=U>>fe;a(le.mipmask&1<<fe,"missing mipmap data"),a(ye.width===Te&&ye.height===se,"invalid shape for mip images"),a(ye.format===l.format&&ye.internalformat===l.internalformat&&ye.type===l.type,"incompatible type for mip image"),ye.compressed||(ye.data?a(ye.data.byteLength===Te*se*Math.max(Gt(ye.type,V),ye.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):ye.element||ye.copy)}}}}var y=t(a,{optional:nt,raise:o,commandRaise:Ge,command:Ie,parameter:s,commandParameter:Ce,constructor:g,type:h,commandType:ge,isTypedArray:c,nni:p,oneOf:u,shaderError:xe,linkError:J,callSite:D,saveCommandRef:be,saveDrawInfo:he,framebufferFormat:Yt,guessCommand:C,texture2D:zt,textureCube:It}),jt=0,nr=0,Ze=5,Dt=6;function At(l,b){this.id=jt++,this.type=l,this.data=b}function or(l){return l.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Jt(l){if(l.length===0)return[];var b=l.charAt(0),S=l.charAt(l.length-1);if(l.length>1&&b===S&&(b==='"'||b==="'"))return['"'+or(l.substr(1,l.length-2))+'"'];var j=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(l);if(j)return Jt(l.substr(0,j.index)).concat(Jt(j[1])).concat(Jt(l.substr(j.index+j[0].length)));var Q=l.split(".");if(Q.length===1)return['"'+or(l)+'"'];for(var U=[],V=0;V<Q.length;++V)U=U.concat(Jt(Q[V]));return U}function Xr(l){return"["+Jt(l).join("][")+"]"}function Kt(l,b){return new At(l,Xr(b+""))}function Oa(l){return typeof l=="function"&&!l._reglType||l instanceof At}function Wo(l,b){if(typeof l=="function")return new At(nr,l);if(typeof l=="number"||typeof l=="boolean")return new At(Ze,l);if(Array.isArray(l))return new At(Dt,l.map((S,j)=>Wo(S,b+"["+j+"]")));if(l instanceof At)return l;y(!1,"invalid option type in uniform "+b)}var Or={DynamicVariable:At,define:Kt,isDynamic:Oa,unbox:Wo,accessor:Xr},Gn={next:typeof requestAnimationFrame=="function"?function(l){return requestAnimationFrame(l)}:function(l){return setTimeout(l,16)},cancel:typeof cancelAnimationFrame=="function"?function(l){return cancelAnimationFrame(l)}:clearTimeout},so=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Yn(){var l={"":0},b=[""];return{id:function(S){var j=l[S];return j||(j=l[S]=b.length,b.push(S),j)},str:function(S){return b[S]}}}function Vo(l,b,S){var j=document.createElement("canvas");t(j.style,{border:0,margin:0,padding:0,top:0,left:0}),l.appendChild(j),l===document.body&&(j.style.position="absolute",t(l.style,{margin:0,padding:0}));function Q(){var ie=window.innerWidth,le=window.innerHeight;if(l!==document.body){var me=l.getBoundingClientRect();ie=me.right-me.left,le=me.bottom-me.top}j.width=S*ie,j.height=S*le,t(j.style,{width:ie+"px",height:le+"px"})}var U;l!==document.body&&typeof ResizeObserver=="function"?(U=new ResizeObserver(function(){setTimeout(Q)}),U.observe(l)):window.addEventListener("resize",Q,!1);function V(){U?U.disconnect():window.removeEventListener("resize",Q),l.removeChild(j)}return Q(),{canvas:j,onDestroy:V}}function An(l,b){function S(j){try{return l.getContext(j,b)}catch(Q){return null}}return S("webgl")||S("experimental-webgl")||S("webgl-experimental")}function cn(l){return typeof l.nodeName=="string"&&typeof l.appendChild=="function"&&typeof l.getBoundingClientRect=="function"}function ar(l){return typeof l.drawArrays=="function"||typeof l.drawElements=="function"}function Ii(l){return typeof l=="string"?l.split():(y(Array.isArray(l),"invalid extension array"),l)}function Rs(l){return typeof l=="string"?(y(typeof document!="undefined","not supported outside of DOM"),document.querySelector(l)):l}function uc(l){var b=l||{},S,j,Q,U,V={},ie=[],le=[],me=typeof window=="undefined"?1:window.devicePixelRatio,fe=!1,ye=function(we){we&&y.raise(we)},Te=function(){};if(typeof b=="string"?(y(typeof document!="undefined","selector queries only supported in DOM enviroments"),S=document.querySelector(b),y(S,"invalid query string for element")):typeof b=="object"?cn(b)?S=b:ar(b)?(U=b,Q=U.canvas):(y.constructor(b),"gl"in b?U=b.gl:"canvas"in b?Q=Rs(b.canvas):"container"in b&&(j=Rs(b.container)),"attributes"in b&&(V=b.attributes,y.type(V,"object","invalid context attributes")),"extensions"in b&&(ie=Ii(b.extensions)),"optionalExtensions"in b&&(le=Ii(b.optionalExtensions)),"onDone"in b&&(y.type(b.onDone,"function","invalid or missing onDone callback"),ye=b.onDone),"profile"in b&&(fe=!!b.profile),"pixelRatio"in b&&(me=+b.pixelRatio,y(me>0,"invalid pixel ratio"))):y.raise("invalid arguments to regl"),S&&(S.nodeName.toLowerCase()==="canvas"?Q=S:j=S),!U){if(!Q){y(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var se=Vo(j||document.body,ye,me);if(!se)return null;Q=se.canvas,Te=se.onDestroy}V.premultipliedAlpha===void 0&&(V.premultipliedAlpha=!0),U=An(Q,V)}return U?{gl:U,canvas:Q,container:j,extensions:ie,optionalExtensions:le,pixelRatio:me,profile:fe,onDone:ye,onDestroy:Te}:(Te(),ye("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Is(l,b){var S={};function j(V){y.type(V,"string","extension name must be string");var ie=V.toLowerCase(),le;try{le=S[ie]=l.getExtension(ie)}catch(me){}return!!le}for(var Q=0;Q<b.extensions.length;++Q){var U=b.extensions[Q];if(!j(U))return b.onDestroy(),b.onDone('"'+U+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return b.optionalExtensions.forEach(j),{extensions:S,restore:function(){Object.keys(S).forEach(function(V){if(S[V]&&!j(V))throw new Error("(regl): error restoring extension "+V)})}}}function Br(l,b){for(var S=Array(l),j=0;j<l;++j)S[j]=b(j);return S}var hc=5120,ae=5121,Ae=5122,Ve=5123,gt=5124,Lt=5125,Pt=5126;function Tn(l){for(var b=16;b<=1<<28;b*=16)if(l<=b)return b;return 0}function vr(l){var b,S;return b=(l>65535)<<4,l>>>=b,S=(l>255)<<3,l>>>=S,b|=S,S=(l>15)<<2,l>>>=S,b|=S,S=(l>3)<<1,l>>>=S,b|=S,b|l>>1}function Nr(){var l=Br(8,function(){return[]});function b(U){var V=Tn(U),ie=l[vr(V)>>2];return ie.length>0?ie.pop():new ArrayBuffer(V)}function S(U){l[vr(U.byteLength)>>2].push(U)}function j(U,V){var ie=null;switch(U){case hc:ie=new Int8Array(b(V),0,V);break;case ae:ie=new Uint8Array(b(V),0,V);break;case Ae:ie=new Int16Array(b(2*V),0,V);break;case Ve:ie=new Uint16Array(b(2*V),0,V);break;case gt:ie=new Int32Array(b(4*V),0,V);break;case Lt:ie=new Uint32Array(b(4*V),0,V);break;case Pt:ie=new Float32Array(b(4*V),0,V);break;default:return null}return ie.length!==V?ie.subarray(0,V):ie}function Q(U){S(U.buffer)}return{alloc:b,free:S,allocType:j,freeType:Q}}var $t=Nr();$t.zero=Nr();var Fr=3408,Er=3410,Kn=3411,ln=3412,Ps=3413,dc=3414,Pi=3415,Kf=33901,Xo=33902,Qn=3379,Os=3386,er=34921,gr=36347,co=36348,Ns=35661,Fs=35660,N2=34930,F2=36349,G2=34076,D2=34024,$2=7936,q2=7937,H2=7938,U2=35724,B2=34047,j2=36063,W2=34852,Gs=3553,Qf=34067,V2=34069,X2=33984,Oi=6408,pc=5126,Zf=5121,mc=36160,Y2=36053,K2=36064,Q2=16384,Z2=function(l,b){var S=1;b.ext_texture_filter_anisotropic&&(S=l.getParameter(B2));var j=1,Q=1;b.webgl_draw_buffers&&(j=l.getParameter(W2),Q=l.getParameter(j2));var U=!!b.oes_texture_float;if(U){var V=l.createTexture();l.bindTexture(Gs,V),l.texImage2D(Gs,0,Oi,1,1,0,Oi,pc,null);var ie=l.createFramebuffer();if(l.bindFramebuffer(mc,ie),l.framebufferTexture2D(mc,K2,Gs,V,0),l.bindTexture(Gs,null),l.checkFramebufferStatus(mc)!==Y2)U=!1;else{l.viewport(0,0,1,1),l.clearColor(1,0,0,1),l.clear(Q2);var le=$t.allocType(pc,4);l.readPixels(0,0,1,1,Oi,pc,le),l.getError()?U=!1:(l.deleteFramebuffer(ie),l.deleteTexture(V),U=le[0]===1),$t.freeType(le)}}var me=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),fe=!0;if(!me){var ye=l.createTexture(),Te=$t.allocType(Zf,36);l.activeTexture(X2),l.bindTexture(Qf,ye),l.texImage2D(V2,0,Oi,3,3,0,Oi,Zf,Te),$t.freeType(Te),l.bindTexture(Qf,null),l.deleteTexture(ye),fe=!l.getError()}return{colorBits:[l.getParameter(Er),l.getParameter(Kn),l.getParameter(ln),l.getParameter(Ps)],depthBits:l.getParameter(dc),stencilBits:l.getParameter(Pi),subpixelBits:l.getParameter(Fr),extensions:Object.keys(b).filter(function(se){return!!b[se]}),maxAnisotropic:S,maxDrawbuffers:j,maxColorAttachments:Q,pointSizeDims:l.getParameter(Kf),lineWidthDims:l.getParameter(Xo),maxViewportDims:l.getParameter(Os),maxCombinedTextureUnits:l.getParameter(Ns),maxCubeMapSize:l.getParameter(G2),maxRenderbufferSize:l.getParameter(D2),maxTextureUnits:l.getParameter(N2),maxTextureSize:l.getParameter(Qn),maxAttributes:l.getParameter(er),maxVertexUniforms:l.getParameter(gr),maxVertexTextureUnits:l.getParameter(Fs),maxVaryingVectors:l.getParameter(co),maxFragmentUniforms:l.getParameter(F2),glsl:l.getParameter(U2),renderer:l.getParameter(q2),vendor:l.getParameter($2),version:l.getParameter(H2),readFloat:U,npotTextureCube:fe}};function Dn(l){return!!l&&typeof l=="object"&&Array.isArray(l.shape)&&Array.isArray(l.stride)&&typeof l.offset=="number"&&l.shape.length===l.stride.length&&(Array.isArray(l.data)||e(l.data))}var mn=function(l){return Object.keys(l).map(function(b){return l[b]})},Ds={shape:rg,flatten:tg};function J2(l,b,S){for(var j=0;j<b;++j)S[j]=l[j]}function eg(l,b,S,j){for(var Q=0,U=0;U<b;++U)for(var V=l[U],ie=0;ie<S;++ie)j[Q++]=V[ie]}function Jf(l,b,S,j,Q,U){for(var V=U,ie=0;ie<b;++ie)for(var le=l[ie],me=0;me<S;++me)for(var fe=le[me],ye=0;ye<j;++ye)Q[V++]=fe[ye]}function eu(l,b,S,j,Q){for(var U=1,V=S+1;V<b.length;++V)U*=b[V];var ie=b[S];if(b.length-S===4){var le=b[S+1],me=b[S+2],fe=b[S+3];for(V=0;V<ie;++V)Jf(l[V],le,me,fe,j,Q),Q+=U}else for(V=0;V<ie;++V)eu(l[V],b,S+1,j,Q),Q+=U}function tg(l,b,S,j){var Q=1;if(b.length)for(var U=0;U<b.length;++U)Q*=b[U];else Q=0;var V=j||$t.allocType(S,Q);switch(b.length){case 0:break;case 1:J2(l,b[0],V);break;case 2:eg(l,b[0],b[1],V);break;case 3:Jf(l,b[0],b[1],b[2],V,0);break;default:eu(l,b,0,V,0)}return V}function rg(l){for(var b=[],S=l;S.length;S=S[0])b.push(S.length);return b}var vc={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},ng=5120,og=5122,ag=5124,ig=5121,sg=5123,cg=5125,lg=5126,fg=5126,Yo={int8:ng,int16:og,int32:ag,uint8:ig,uint16:sg,uint32:cg,float:lg,float32:fg},ug=35048,hg=35040,$s={dynamic:ug,stream:hg,static:35044},gc=Ds.flatten,tu=Ds.shape,ru=35044,dg=35040,yc=5121,xc=5126,wo=[];wo[5120]=1,wo[5122]=2,wo[5124]=4,wo[5121]=1,wo[5123]=2,wo[5125]=4,wo[5126]=4;function qs(l){return vc[Object.prototype.toString.call(l)]|0}function nu(l,b){for(var S=0;S<b.length;++S)l[S]=b[S]}function ou(l,b,S,j,Q,U,V){for(var ie=0,le=0;le<S;++le)for(var me=0;me<j;++me)l[ie++]=b[Q*le+U*me+V]}function pg(l,b,S,j){var Q=0,U={};function V(N){this.id=Q++,this.buffer=l.createBuffer(),this.type=N,this.usage=ru,this.byteLength=0,this.dimension=1,this.dtype=yc,this.persistentData=null,S.profile&&(this.stats={size:0})}V.prototype.bind=function(){l.bindBuffer(this.type,this.buffer)},V.prototype.destroy=function(){Te(this)};var ie=[];function le(N,X){var pe=ie.pop();return pe||(pe=new V(N)),pe.bind(),ye(pe,X,dg,0,1,!1),pe}function me(N){ie.push(N)}function fe(N,X,pe){N.byteLength=X.byteLength,l.bufferData(N.type,X,pe)}function ye(N,X,pe,Re,te,Pe){var ne;if(N.usage=pe,Array.isArray(X)){if(N.dtype=Re||xc,X.length>0){var _e;if(Array.isArray(X[0])){ne=tu(X);for(var re=1,Ee=1;Ee<ne.length;++Ee)re*=ne[Ee];N.dimension=re,_e=gc(X,ne,N.dtype),fe(N,_e,pe),Pe?N.persistentData=_e:$t.freeType(_e)}else if(typeof X[0]=="number"){N.dimension=te;var We=$t.allocType(N.dtype,X.length);nu(We,X),fe(N,We,pe),Pe?N.persistentData=We:$t.freeType(We)}else e(X[0])?(N.dimension=X[0].length,N.dtype=Re||qs(X[0])||xc,_e=gc(X,[X.length,X[0].length],N.dtype),fe(N,_e,pe),Pe?N.persistentData=_e:$t.freeType(_e)):y.raise("invalid buffer data")}}else if(e(X))N.dtype=Re||qs(X),N.dimension=te,fe(N,X,pe),Pe&&(N.persistentData=new Uint8Array(new Uint8Array(X.buffer)));else if(Dn(X)){ne=X.shape;var Je=X.stride,Se=X.offset,ve=0,ee=0,Qe=0,ot=0;ne.length===1?(ve=ne[0],ee=1,Qe=Je[0],ot=0):ne.length===2?(ve=ne[0],ee=ne[1],Qe=Je[0],ot=Je[1]):y.raise("invalid shape"),N.dtype=Re||qs(X.data)||xc,N.dimension=ee;var De=$t.allocType(N.dtype,ve*ee);ou(De,X.data,ve,ee,Qe,ot,Se),fe(N,De,pe),Pe?N.persistentData=De:$t.freeType(De)}else X instanceof ArrayBuffer?(N.dtype=yc,N.dimension=te,fe(N,X,pe),Pe&&(N.persistentData=new Uint8Array(new Uint8Array(X)))):y.raise("invalid buffer data")}function Te(N){b.bufferCount--,j(N);var X=N.buffer;y(X,"buffer must not be deleted already"),l.deleteBuffer(X),N.buffer=null,delete U[N.id]}function se(N,X,pe,Re){b.bufferCount++;var te=new V(X);U[te.id]=te;function Pe(re){var Ee=ru,We=null,Je=0,Se=0,ve=1;return Array.isArray(re)||e(re)||Dn(re)||re instanceof ArrayBuffer?We=re:typeof re=="number"?Je=re|0:re&&(y.type(re,"object","buffer arguments must be an object, a number or an array"),"data"in re&&(y(We===null||Array.isArray(We)||e(We)||Dn(We),"invalid data for buffer"),We=re.data),"usage"in re&&(y.parameter(re.usage,$s,"invalid buffer usage"),Ee=$s[re.usage]),"type"in re&&(y.parameter(re.type,Yo,"invalid buffer type"),Se=Yo[re.type]),"dimension"in re&&(y.type(re.dimension,"number","invalid dimension"),ve=re.dimension|0),"length"in re&&(y.nni(Je,"buffer length must be a nonnegative integer"),Je=re.length|0)),te.bind(),We?ye(te,We,Ee,Se,ve,Re):(Je&&l.bufferData(te.type,Je,Ee),te.dtype=Se||yc,te.usage=Ee,te.dimension=ve,te.byteLength=Je),S.profile&&(te.stats.size=te.byteLength*wo[te.dtype]),Pe}function ne(re,Ee){y(Ee+re.byteLength<=te.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+re.byteLength+" starting from offset "+Ee+" to a buffer of size "+te.byteLength),l.bufferSubData(te.type,Ee,re)}function _e(re,Ee){var We=(Ee||0)|0,Je;if(te.bind(),e(re)||re instanceof ArrayBuffer)ne(re,We);else if(Array.isArray(re)){if(re.length>0)if(typeof re[0]=="number"){var Se=$t.allocType(te.dtype,re.length);nu(Se,re),ne(Se,We),$t.freeType(Se)}else if(Array.isArray(re[0])||e(re[0])){Je=tu(re);var ve=gc(re,Je,te.dtype);ne(ve,We),$t.freeType(ve)}else y.raise("invalid buffer data")}else if(Dn(re)){Je=re.shape;var ee=re.stride,Qe=0,ot=0,De=0,ft=0;Je.length===1?(Qe=Je[0],ot=1,De=ee[0],ft=0):Je.length===2?(Qe=Je[0],ot=Je[1],De=ee[0],ft=ee[1]):y.raise("invalid shape");var tt=Array.isArray(re.data)?te.dtype:qs(re.data),ct=$t.allocType(tt,Qe*ot);ou(ct,re.data,Qe,ot,De,ft,re.offset),ne(ct,We),$t.freeType(ct)}else y.raise("invalid data for buffer subdata");return Pe}return pe||Pe(N),Pe._reglType="buffer",Pe._buffer=te,Pe.subdata=_e,S.profile&&(Pe.stats=te.stats),Pe.destroy=function(){Te(te)},Pe}function we(){mn(U).forEach(function(N){N.buffer=l.createBuffer(),l.bindBuffer(N.type,N.buffer),l.bufferData(N.type,N.persistentData||N.byteLength,N.usage)})}return S.profile&&(b.getTotalBufferSize=function(){var N=0;return Object.keys(U).forEach(function(X){N+=U[X].stats.size}),N}),{create:se,createStream:le,destroyStream:me,clear:function(){mn(U).forEach(Te),ie.forEach(Te)},getBuffer:function(N){return N&&N._buffer instanceof V?N._buffer:null},restore:we,_initBuffer:ye}}var mg=0,vg=0,gg=1,yg=1,xg=4,bg=4,Na={points:mg,point:vg,lines:gg,line:yg,triangles:xg,triangle:bg,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},wg=0,_g=1,Ni=4,Eg=5120,Fa=5121,au=5122,Ga=5123,iu=5124,Ko=5125,bc=34963,Mg=35040,Ag=35044;function Tg(l,b,S,j){var Q={},U=0,V={uint8:Fa,uint16:Ga};b.oes_element_index_uint&&(V.uint32=Ko);function ie(we){this.id=U++,Q[this.id]=this,this.buffer=we,this.primType=Ni,this.vertCount=0,this.type=0}ie.prototype.bind=function(){this.buffer.bind()};var le=[];function me(we){var N=le.pop();return N||(N=new ie(S.create(null,bc,!0,!1)._buffer)),ye(N,we,Mg,-1,-1,0,0),N}function fe(we){le.push(we)}function ye(we,N,X,pe,Re,te,Pe){we.buffer.bind();var ne;if(N){var _e=Pe;!Pe&&(!e(N)||Dn(N)&&!e(N.data))&&(_e=b.oes_element_index_uint?Ko:Ga),S._initBuffer(we.buffer,N,X,_e,3)}else l.bufferData(bc,te,X),we.buffer.dtype=ne||Fa,we.buffer.usage=X,we.buffer.dimension=3,we.buffer.byteLength=te;if(ne=Pe,!Pe){switch(we.buffer.dtype){case Fa:case Eg:ne=Fa;break;case Ga:case au:ne=Ga;break;case Ko:case iu:ne=Ko;break;default:y.raise("unsupported type for element array")}we.buffer.dtype=ne}we.type=ne,y(ne!==Ko||!!b.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var re=Re;re<0&&(re=we.buffer.byteLength,ne===Ga?re>>=1:ne===Ko&&(re>>=2)),we.vertCount=re;var Ee=pe;if(pe<0){Ee=Ni;var We=we.buffer.dimension;We===1&&(Ee=wg),We===2&&(Ee=_g),We===3&&(Ee=Ni)}we.primType=Ee}function Te(we){j.elementsCount--,y(we.buffer!==null,"must not double destroy elements"),delete Q[we.id],we.buffer.destroy(),we.buffer=null}function se(we,N){var X=S.create(null,bc,!0),pe=new ie(X._buffer);j.elementsCount++;function Re(te){if(!te)X(),pe.primType=Ni,pe.vertCount=0,pe.type=Fa;else if(typeof te=="number")X(te),pe.primType=Ni,pe.vertCount=te|0,pe.type=Fa;else{var Pe=null,ne=Ag,_e=-1,re=-1,Ee=0,We=0;Array.isArray(te)||e(te)||Dn(te)?Pe=te:(y.type(te,"object","invalid arguments for elements"),"data"in te&&(Pe=te.data,y(Array.isArray(Pe)||e(Pe)||Dn(Pe),"invalid data for element buffer")),"usage"in te&&(y.parameter(te.usage,$s,"invalid element buffer usage"),ne=$s[te.usage]),"primitive"in te&&(y.parameter(te.primitive,Na,"invalid element buffer primitive"),_e=Na[te.primitive]),"count"in te&&(y(typeof te.count=="number"&&te.count>=0,"invalid vertex count for elements"),re=te.count|0),"type"in te&&(y.parameter(te.type,V,"invalid buffer type"),We=V[te.type]),"length"in te?Ee=te.length|0:(Ee=re,We===Ga||We===au?Ee*=2:(We===Ko||We===iu)&&(Ee*=4))),ye(pe,Pe,ne,_e,re,Ee,We)}return Re}return Re(we),Re._reglType="elements",Re._elements=pe,Re.subdata=function(te,Pe){return X.subdata(te,Pe),Re},Re.destroy=function(){Te(pe)},Re}return{create:se,createStream:me,destroyStream:fe,getElements:function(we){return typeof we=="function"&&we._elements instanceof ie?we._elements:null},clear:function(){mn(Q).forEach(Te)}}}var su=new Float32Array(1),Sg=new Uint32Array(su.buffer),kg=5123;function cu(l){for(var b=$t.allocType(kg,l.length),S=0;S<l.length;++S)if(isNaN(l[S]))b[S]=65535;else if(l[S]===1/0)b[S]=31744;else if(l[S]===-1/0)b[S]=64512;else{su[0]=l[S];var j=Sg[0],Q=j>>>31<<15,U=(j<<1>>>24)-127,V=j>>13&1023;if(U<-24)b[S]=Q;else if(U<-14){var ie=-14-U;b[S]=Q+(V+1024>>ie)}else U>15?b[S]=Q+31744:b[S]=Q+(U+15<<10)+V}return b}function fr(l){return Array.isArray(l)||e(l)}var lu=function(l){return!(l&l-1)&&!!l},Lg=34467,Zn=3553,wc=34067,Hs=34069,Qo=6408,_c=6406,Us=6407,Fi=6409,Bs=6410,fu=32854,Ec=32855,uu=36194,zg=32819,Cg=32820,Rg=33635,Ig=34042,Mc=6402,js=34041,Ac=35904,Tc=35906,Da=36193,Sc=33776,kc=33777,Lc=33778,zc=33779,hu=35986,du=35987,pu=34798,mu=35840,vu=35841,gu=35842,yu=35843,xu=36196,$a=5121,Cc=5123,Rc=5125,Gi=5126,Pg=10242,Og=10243,Ng=10497,Ic=33071,Fg=33648,Gg=10240,Dg=10241,Pc=9728,$g=9729,Oc=9984,bu=9985,wu=9986,Nc=9987,qg=33170,Ws=4352,Hg=4353,Ug=4354,Bg=34046,jg=3317,Wg=37440,Vg=37441,Xg=37443,_u=37444,Di=33984,Yg=[Oc,wu,bu,Nc],Vs=[0,Fi,Bs,Us,Qo],Sn={};Sn[Fi]=Sn[_c]=Sn[Mc]=1,Sn[js]=Sn[Bs]=2,Sn[Us]=Sn[Ac]=3,Sn[Qo]=Sn[Tc]=4;function qa(l){return"[object "+l+"]"}var Eu=qa("HTMLCanvasElement"),Mu=qa("OffscreenCanvas"),Au=qa("CanvasRenderingContext2D"),Tu=qa("ImageBitmap"),Su=qa("HTMLImageElement"),ku=qa("HTMLVideoElement"),Kg=Object.keys(vc).concat([Eu,Mu,Au,Tu,Su,ku]),Ha=[];Ha[$a]=1,Ha[Gi]=4,Ha[Da]=2,Ha[Cc]=2,Ha[Rc]=4;var Gr=[];Gr[fu]=2,Gr[Ec]=2,Gr[uu]=2,Gr[js]=4,Gr[Sc]=.5,Gr[kc]=.5,Gr[Lc]=1,Gr[zc]=1,Gr[hu]=.5,Gr[du]=1,Gr[pu]=1,Gr[mu]=.5,Gr[vu]=.25,Gr[gu]=.5,Gr[yu]=.25,Gr[xu]=.5;function Lu(l){return Array.isArray(l)&&(l.length===0||typeof l[0]=="number")}function zu(l){if(!Array.isArray(l))return!1;var b=l.length;return!(b===0||!fr(l[0]))}function Zo(l){return Object.prototype.toString.call(l)}function Cu(l){return Zo(l)===Eu}function Ru(l){return Zo(l)===Mu}function Qg(l){return Zo(l)===Au}function Zg(l){return Zo(l)===Tu}function Jg(l){return Zo(l)===Su}function ey(l){return Zo(l)===ku}function Fc(l){if(!l)return!1;var b=Zo(l);return Kg.indexOf(b)>=0?!0:Lu(l)||zu(l)||Dn(l)}function Iu(l){return vc[Object.prototype.toString.call(l)]|0}function ty(l,b){var S=b.length;switch(l.type){case $a:case Cc:case Rc:case Gi:var j=$t.allocType(l.type,S);j.set(b),l.data=j;break;case Da:l.data=cu(b);break;default:y.raise("unsupported texture type, must specify a typed array")}}function Pu(l,b){return $t.allocType(l.type===Da?Gi:l.type,b)}function Ou(l,b){l.type===Da?(l.data=cu(b),$t.freeType(b)):l.data=b}function ry(l,b,S,j,Q,U){for(var V=l.width,ie=l.height,le=l.channels,me=V*ie*le,fe=Pu(l,me),ye=0,Te=0;Te<ie;++Te)for(var se=0;se<V;++se)for(var we=0;we<le;++we)fe[ye++]=b[S*se+j*Te+Q*we+U];Ou(l,fe)}function Xs(l,b,S,j,Q,U){var V;if(typeof Gr[l]!="undefined"?V=Gr[l]:V=Sn[l]*Ha[b],U&&(V*=6),Q){for(var ie=0,le=S;le>=1;)ie+=V*le*le,le/=2;return ie}else return V*S*j}function ny(l,b,S,j,Q,U,V){var ie={"don't care":Ws,"dont care":Ws,nice:Ug,fast:Hg},le={repeat:Ng,clamp:Ic,mirror:Fg},me={nearest:Pc,linear:$g},fe=t({mipmap:Nc,"nearest mipmap nearest":Oc,"linear mipmap nearest":bu,"nearest mipmap linear":wu,"linear mipmap linear":Nc},me),ye={none:0,browser:_u},Te={uint8:$a,rgba4:zg,rgb565:Rg,"rgb5 a1":Cg},se={alpha:_c,luminance:Fi,"luminance alpha":Bs,rgb:Us,rgba:Qo,rgba4:fu,"rgb5 a1":Ec,rgb565:uu},we={};b.ext_srgb&&(se.srgb=Ac,se.srgba=Tc),b.oes_texture_float&&(Te.float32=Te.float=Gi),b.oes_texture_half_float&&(Te.float16=Te["half float"]=Da),b.webgl_depth_texture&&(t(se,{depth:Mc,"depth stencil":js}),t(Te,{uint16:Cc,uint32:Rc,"depth stencil":Ig})),b.webgl_compressed_texture_s3tc&&t(we,{"rgb s3tc dxt1":Sc,"rgba s3tc dxt1":kc,"rgba s3tc dxt3":Lc,"rgba s3tc dxt5":zc}),b.webgl_compressed_texture_atc&&t(we,{"rgb atc":hu,"rgba atc explicit alpha":du,"rgba atc interpolated alpha":pu}),b.webgl_compressed_texture_pvrtc&&t(we,{"rgb pvrtc 4bppv1":mu,"rgb pvrtc 2bppv1":vu,"rgba pvrtc 4bppv1":gu,"rgba pvrtc 2bppv1":yu}),b.webgl_compressed_texture_etc1&&(we["rgb etc1"]=xu);var N=Array.prototype.slice.call(l.getParameter(Lg));Object.keys(we).forEach(function(A){var W=we[A];N.indexOf(W)>=0&&(se[A]=W)});var X=Object.keys(se);S.textureFormats=X;var pe=[];Object.keys(se).forEach(function(A){var W=se[A];pe[W]=A});var Re=[];Object.keys(Te).forEach(function(A){var W=Te[A];Re[W]=A});var te=[];Object.keys(me).forEach(function(A){var W=me[A];te[W]=A});var Pe=[];Object.keys(fe).forEach(function(A){var W=fe[A];Pe[W]=A});var ne=[];Object.keys(le).forEach(function(A){var W=le[A];ne[W]=A});var _e=X.reduce(function(A,W){var q=se[W];return q===Fi||q===_c||q===Fi||q===Bs||q===Mc||q===js||b.ext_srgb&&(q===Ac||q===Tc)?A[q]=q:q===Ec||W.indexOf("rgba")>=0?A[q]=Qo:A[q]=Us,A},{});function re(){this.internalformat=Qo,this.format=Qo,this.type=$a,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=_u,this.width=0,this.height=0,this.channels=0}function Ee(A,W){A.internalformat=W.internalformat,A.format=W.format,A.type=W.type,A.compressed=W.compressed,A.premultiplyAlpha=W.premultiplyAlpha,A.flipY=W.flipY,A.unpackAlignment=W.unpackAlignment,A.colorSpace=W.colorSpace,A.width=W.width,A.height=W.height,A.channels=W.channels}function We(A,W){if(!(typeof W!="object"||!W)){if("premultiplyAlpha"in W&&(y.type(W.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),A.premultiplyAlpha=W.premultiplyAlpha),"flipY"in W&&(y.type(W.flipY,"boolean","invalid texture flip"),A.flipY=W.flipY),"alignment"in W&&(y.oneOf(W.alignment,[1,2,4,8],"invalid texture unpack alignment"),A.unpackAlignment=W.alignment),"colorSpace"in W&&(y.parameter(W.colorSpace,ye,"invalid colorSpace"),A.colorSpace=ye[W.colorSpace]),"type"in W){var q=W.type;y(b.oes_texture_float||!(q==="float"||q==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),y(b.oes_texture_half_float||!(q==="half float"||q==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),y(b.webgl_depth_texture||!(q==="uint16"||q==="uint32"||q==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),y.parameter(q,Te,"invalid texture type"),A.type=Te[q]}var Ne=A.width,ut=A.height,E=A.channels,x=!1;"shape"in W?(y(Array.isArray(W.shape)&&W.shape.length>=2,"shape must be an array"),Ne=W.shape[0],ut=W.shape[1],W.shape.length===3&&(E=W.shape[2],y(E>0&&E<=4,"invalid number of channels"),x=!0),y(Ne>=0&&Ne<=S.maxTextureSize,"invalid width"),y(ut>=0&&ut<=S.maxTextureSize,"invalid height")):("radius"in W&&(Ne=ut=W.radius,y(Ne>=0&&Ne<=S.maxTextureSize,"invalid radius")),"width"in W&&(Ne=W.width,y(Ne>=0&&Ne<=S.maxTextureSize,"invalid width")),"height"in W&&(ut=W.height,y(ut>=0&&ut<=S.maxTextureSize,"invalid height")),"channels"in W&&(E=W.channels,y(E>0&&E<=4,"invalid number of channels"),x=!0)),A.width=Ne|0,A.height=ut|0,A.channels=E|0;var L=!1;if("format"in W){var O=W.format;y(b.webgl_depth_texture||!(O==="depth"||O==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),y.parameter(O,se,"invalid texture format");var F=A.internalformat=se[O];A.format=_e[F],O in Te&&("type"in W||(A.type=Te[O])),O in we&&(A.compressed=!0),L=!0}!x&&L?A.channels=Sn[A.format]:x&&!L?A.channels!==Vs[A.format]&&(A.format=A.internalformat=Vs[A.channels]):L&&x&&y(A.channels===Sn[A.format],"number of channels inconsistent with specified format")}}function Je(A){l.pixelStorei(Wg,A.flipY),l.pixelStorei(Vg,A.premultiplyAlpha),l.pixelStorei(Xg,A.colorSpace),l.pixelStorei(jg,A.unpackAlignment)}function Se(){re.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function ve(A,W){var q=null;if(Fc(W)?q=W:W&&(y.type(W,"object","invalid pixel data type"),We(A,W),"x"in W&&(A.xOffset=W.x|0),"y"in W&&(A.yOffset=W.y|0),Fc(W.data)&&(q=W.data)),y(!A.compressed||q instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),W.copy){y(!q,"can not specify copy and data field for the same texture");var Ne=Q.viewportWidth,ut=Q.viewportHeight;A.width=A.width||Ne-A.xOffset,A.height=A.height||ut-A.yOffset,A.needsCopy=!0,y(A.xOffset>=0&&A.xOffset<Ne&&A.yOffset>=0&&A.yOffset<ut&&A.width>0&&A.width<=Ne&&A.height>0&&A.height<=ut,"copy texture read out of bounds")}else if(!q)A.width=A.width||1,A.height=A.height||1,A.channels=A.channels||4;else if(e(q))A.channels=A.channels||4,A.data=q,!("type"in W)&&A.type===$a&&(A.type=Iu(q));else if(Lu(q))A.channels=A.channels||4,ty(A,q),A.alignment=1,A.needsFree=!0;else if(Dn(q)){var E=q.data;!Array.isArray(E)&&A.type===$a&&(A.type=Iu(E));var x=q.shape,L=q.stride,O,F,R,z,I,M;x.length===3?(R=x[2],M=L[2]):(y(x.length===2,"invalid ndarray pixel data, must be 2 or 3D"),R=1,M=1),O=x[0],F=x[1],z=L[0],I=L[1],A.alignment=1,A.width=O,A.height=F,A.channels=R,A.format=A.internalformat=Vs[R],A.needsFree=!0,ry(A,E,z,I,M,q.offset)}else if(Cu(q)||Ru(q)||Qg(q))Cu(q)||Ru(q)?A.element=q:A.element=q.canvas,A.width=A.element.width,A.height=A.element.height,A.channels=4;else if(Zg(q))A.element=q,A.width=q.width,A.height=q.height,A.channels=4;else if(Jg(q))A.element=q,A.width=q.naturalWidth,A.height=q.naturalHeight,A.channels=4;else if(ey(q))A.element=q,A.width=q.videoWidth,A.height=q.videoHeight,A.channels=4;else if(zu(q)){var k=A.width||q[0].length,_=A.height||q.length,P=A.channels;fr(q[0][0])?P=P||q[0][0].length:P=P||1;for(var G=Ds.shape(q),K=1,Z=0;Z<G.length;++Z)K*=G[Z];var Y=Pu(A,K);Ds.flatten(q,G,"",Y),Ou(A,Y),A.alignment=1,A.width=k,A.height=_,A.channels=P,A.format=A.internalformat=Vs[P],A.needsFree=!0}A.type===Gi?y(S.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):A.type===Da&&y(S.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ee(A,W,q){var Ne=A.element,ut=A.data,E=A.internalformat,x=A.format,L=A.type,O=A.width,F=A.height;Je(A),Ne?l.texImage2D(W,q,x,x,L,Ne):A.compressed?l.compressedTexImage2D(W,q,E,O,F,0,ut):A.needsCopy?(j(),l.copyTexImage2D(W,q,x,A.xOffset,A.yOffset,O,F,0)):l.texImage2D(W,q,x,O,F,0,x,L,ut||null)}function Qe(A,W,q,Ne,ut){var E=A.element,x=A.data,L=A.internalformat,O=A.format,F=A.type,R=A.width,z=A.height;Je(A),E?l.texSubImage2D(W,ut,q,Ne,O,F,E):A.compressed?l.compressedTexSubImage2D(W,ut,q,Ne,L,R,z,x):A.needsCopy?(j(),l.copyTexSubImage2D(W,ut,q,Ne,A.xOffset,A.yOffset,R,z)):l.texSubImage2D(W,ut,q,Ne,R,z,O,F,x)}var ot=[];function De(){return ot.pop()||new Se}function ft(A){A.needsFree&&$t.freeType(A.data),Se.call(A),ot.push(A)}function tt(){re.call(this),this.genMipmaps=!1,this.mipmapHint=Ws,this.mipmask=0,this.images=Array(16)}function ct(A,W,q){var Ne=A.images[0]=De();A.mipmask=1,Ne.width=A.width=W,Ne.height=A.height=q,Ne.channels=A.channels=4}function Tt(A,W){var q=null;if(Fc(W))q=A.images[0]=De(),Ee(q,A),ve(q,W),A.mipmask=1;else if(We(A,W),Array.isArray(W.mipmap))for(var Ne=W.mipmap,ut=0;ut<Ne.length;++ut)q=A.images[ut]=De(),Ee(q,A),q.width>>=ut,q.height>>=ut,ve(q,Ne[ut]),A.mipmask|=1<<ut;else q=A.images[0]=De(),Ee(q,A),ve(q,W),A.mipmask=1;Ee(A,A.images[0]),A.compressed&&(A.internalformat===Sc||A.internalformat===kc||A.internalformat===Lc||A.internalformat===zc)&&y(A.width%4===0&&A.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function xr(A,W){for(var q=A.images,Ne=0;Ne<q.length;++Ne){if(!q[Ne])return;ee(q[Ne],W,Ne)}}var Sr=[];function vt(){var A=Sr.pop()||new tt;re.call(A),A.mipmask=0;for(var W=0;W<16;++W)A.images[W]=null;return A}function Mr(A){for(var W=A.images,q=0;q<W.length;++q)W[q]&&ft(W[q]),W[q]=null;Sr.push(A)}function Vt(){this.minFilter=Pc,this.magFilter=Pc,this.wrapS=Ic,this.wrapT=Ic,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Ws}function br(A,W){if("min"in W){var q=W.min;y.parameter(q,fe),A.minFilter=fe[q],Yg.indexOf(A.minFilter)>=0&&!("faces"in W)&&(A.genMipmaps=!0)}if("mag"in W){var Ne=W.mag;y.parameter(Ne,me),A.magFilter=me[Ne]}var ut=A.wrapS,E=A.wrapT;if("wrap"in W){var x=W.wrap;typeof x=="string"?(y.parameter(x,le),ut=E=le[x]):Array.isArray(x)&&(y.parameter(x[0],le),y.parameter(x[1],le),ut=le[x[0]],E=le[x[1]])}else{if("wrapS"in W){var L=W.wrapS;y.parameter(L,le),ut=le[L]}if("wrapT"in W){var O=W.wrapT;y.parameter(O,le),E=le[O]}}if(A.wrapS=ut,A.wrapT=E,"anisotropic"in W){var F=W.anisotropic;y(typeof F=="number"&&F>=1&&F<=S.maxAnisotropic,"aniso samples must be between 1 and "),A.anisotropic=W.anisotropic}if("mipmap"in W){var R=!1;switch(typeof W.mipmap){case"string":y.parameter(W.mipmap,ie,"invalid mipmap hint"),A.mipmapHint=ie[W.mipmap],A.genMipmaps=!0,R=!0;break;case"boolean":R=A.genMipmaps=W.mipmap;break;case"object":y(Array.isArray(W.mipmap),"invalid mipmap type"),A.genMipmaps=!1,R=!0;break;default:y.raise("invalid mipmap type")}R&&!("min"in W)&&(A.minFilter=Oc)}}function Ar(A,W){l.texParameteri(W,Dg,A.minFilter),l.texParameteri(W,Gg,A.magFilter),l.texParameteri(W,Pg,A.wrapS),l.texParameteri(W,Og,A.wrapT),b.ext_texture_filter_anisotropic&&l.texParameteri(W,Bg,A.anisotropic),A.genMipmaps&&(l.hint(qg,A.mipmapHint),l.generateMipmap(W))}var Tr=0,Rr={},Dr=S.maxTextureUnits,ur=Array(Dr).map(function(){return null});function at(A){re.call(this),this.mipmask=0,this.internalformat=Qo,this.id=Tr++,this.refCount=1,this.target=A,this.texture=l.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Vt,V.profile&&(this.stats={size:0})}function $r(A){l.activeTexture(Di),l.bindTexture(A.target,A.texture)}function Ct(){var A=ur[0];A?l.bindTexture(A.target,A.texture):l.bindTexture(Zn,null)}function Xe(A){var W=A.texture;y(W,"must not double destroy texture");var q=A.unit,Ne=A.target;q>=0&&(l.activeTexture(Di+q),l.bindTexture(Ne,null),ur[q]=null),l.deleteTexture(W),A.texture=null,A.params=null,A.pixels=null,A.refCount=0,delete Rr[A.id],U.textureCount--}t(at.prototype,{bind:function(){var A=this;A.bindCount+=1;var W=A.unit;if(W<0){for(var q=0;q<Dr;++q){var Ne=ur[q];if(Ne){if(Ne.bindCount>0)continue;Ne.unit=-1}ur[q]=A,W=q;break}W>=Dr&&y.raise("insufficient number of texture units"),V.profile&&U.maxTextureUnits<W+1&&(U.maxTextureUnits=W+1),A.unit=W,l.activeTexture(Di+W),l.bindTexture(A.target,A.texture)}return W},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Xe(this)}});function ht(A,W){var q=new at(Zn);Rr[q.id]=q,U.textureCount++;function Ne(x,L){var O=q.texInfo;Vt.call(O);var F=vt();return typeof x=="number"?typeof L=="number"?ct(F,x|0,L|0):ct(F,x|0,x|0):x?(y.type(x,"object","invalid arguments to regl.texture"),br(O,x),Tt(F,x)):ct(F,1,1),O.genMipmaps&&(F.mipmask=(F.width<<1)-1),q.mipmask=F.mipmask,Ee(q,F),y.texture2D(O,F,S),q.internalformat=F.internalformat,Ne.width=F.width,Ne.height=F.height,$r(q),xr(F,Zn),Ar(O,Zn),Ct(),Mr(F),V.profile&&(q.stats.size=Xs(q.internalformat,q.type,F.width,F.height,O.genMipmaps,!1)),Ne.format=pe[q.internalformat],Ne.type=Re[q.type],Ne.mag=te[O.magFilter],Ne.min=Pe[O.minFilter],Ne.wrapS=ne[O.wrapS],Ne.wrapT=ne[O.wrapT],Ne}function ut(x,L,O,F){y(!!x,"must specify image data");var R=L|0,z=O|0,I=F|0,M=De();return Ee(M,q),M.width=0,M.height=0,ve(M,x),M.width=M.width||(q.width>>I)-R,M.height=M.height||(q.height>>I)-z,y(q.type===M.type&&q.format===M.format&&q.internalformat===M.internalformat,"incompatible format for texture.subimage"),y(R>=0&&z>=0&&R+M.width<=q.width&&z+M.height<=q.height,"texture.subimage write out of bounds"),y(q.mipmask&1<<I,"missing mipmap data"),y(M.data||M.element||M.needsCopy,"missing image data"),$r(q),Qe(M,Zn,R,z,I),Ct(),ft(M),Ne}function E(x,L){var O=x|0,F=L|0||O;if(O===q.width&&F===q.height)return Ne;Ne.width=q.width=O,Ne.height=q.height=F,$r(q);for(var R=0;q.mipmask>>R;++R){var z=O>>R,I=F>>R;if(!z||!I)break;l.texImage2D(Zn,R,q.format,z,I,0,q.format,q.type,null)}return Ct(),V.profile&&(q.stats.size=Xs(q.internalformat,q.type,O,F,!1,!1)),Ne}return Ne(A,W),Ne.subimage=ut,Ne.resize=E,Ne._reglType="texture2d",Ne._texture=q,V.profile&&(Ne.stats=q.stats),Ne.destroy=function(){q.decRef()},Ne}function wt(A,W,q,Ne,ut,E){var x=new at(wc);Rr[x.id]=x,U.cubeCount++;var L=new Array(6);function O(z,I,M,k,_,P){var G,K=x.texInfo;for(Vt.call(K),G=0;G<6;++G)L[G]=vt();if(typeof z=="number"||!z){var Z=z|0||1;for(G=0;G<6;++G)ct(L[G],Z,Z)}else if(typeof z=="object")if(I)Tt(L[0],z),Tt(L[1],I),Tt(L[2],M),Tt(L[3],k),Tt(L[4],_),Tt(L[5],P);else if(br(K,z),We(x,z),"faces"in z){var Y=z.faces;for(y(Array.isArray(Y)&&Y.length===6,"cube faces must be a length 6 array"),G=0;G<6;++G)y(typeof Y[G]=="object"&&!!Y[G],"invalid input for cube map face"),Ee(L[G],x),Tt(L[G],Y[G])}else for(G=0;G<6;++G)Tt(L[G],z);else y.raise("invalid arguments to cube map");for(Ee(x,L[0]),S.npotTextureCube||y(lu(x.width)&&lu(x.height),"your browser does not support non power or two texture dimensions"),K.genMipmaps?x.mipmask=(L[0].width<<1)-1:x.mipmask=L[0].mipmask,y.textureCube(x,K,L,S),x.internalformat=L[0].internalformat,O.width=L[0].width,O.height=L[0].height,$r(x),G=0;G<6;++G)xr(L[G],Hs+G);for(Ar(K,wc),Ct(),V.profile&&(x.stats.size=Xs(x.internalformat,x.type,O.width,O.height,K.genMipmaps,!0)),O.format=pe[x.internalformat],O.type=Re[x.type],O.mag=te[K.magFilter],O.min=Pe[K.minFilter],O.wrapS=ne[K.wrapS],O.wrapT=ne[K.wrapT],G=0;G<6;++G)Mr(L[G]);return O}function F(z,I,M,k,_){y(!!I,"must specify image data"),y(typeof z=="number"&&z===(z|0)&&z>=0&&z<6,"invalid face");var P=M|0,G=k|0,K=_|0,Z=De();return Ee(Z,x),Z.width=0,Z.height=0,ve(Z,I),Z.width=Z.width||(x.width>>K)-P,Z.height=Z.height||(x.height>>K)-G,y(x.type===Z.type&&x.format===Z.format&&x.internalformat===Z.internalformat,"incompatible format for texture.subimage"),y(P>=0&&G>=0&&P+Z.width<=x.width&&G+Z.height<=x.height,"texture.subimage write out of bounds"),y(x.mipmask&1<<K,"missing mipmap data"),y(Z.data||Z.element||Z.needsCopy,"missing image data"),$r(x),Qe(Z,Hs+z,P,G,K),Ct(),ft(Z),O}function R(z){var I=z|0;if(I!==x.width){O.width=x.width=I,O.height=x.height=I,$r(x);for(var M=0;M<6;++M)for(var k=0;x.mipmask>>k;++k)l.texImage2D(Hs+M,k,x.format,I>>k,I>>k,0,x.format,x.type,null);return Ct(),V.profile&&(x.stats.size=Xs(x.internalformat,x.type,O.width,O.height,!1,!0)),O}}return O(A,W,q,Ne,ut,E),O.subimage=F,O.resize=R,O._reglType="textureCube",O._texture=x,V.profile&&(O.stats=x.stats),O.destroy=function(){x.decRef()},O}function hr(){for(var A=0;A<Dr;++A)l.activeTexture(Di+A),l.bindTexture(Zn,null),ur[A]=null;mn(Rr).forEach(Xe),U.cubeCount=0,U.textureCount=0}V.profile&&(U.getTotalTextureSize=function(){var A=0;return Object.keys(Rr).forEach(function(W){A+=Rr[W].stats.size}),A});function eo(){for(var A=0;A<Dr;++A){var W=ur[A];W&&(W.bindCount=0,W.unit=-1,ur[A]=null)}mn(Rr).forEach(function(q){q.texture=l.createTexture(),l.bindTexture(q.target,q.texture);for(var Ne=0;Ne<32;++Ne)if(q.mipmask&1<<Ne)if(q.target===Zn)l.texImage2D(Zn,Ne,q.internalformat,q.width>>Ne,q.height>>Ne,0,q.internalformat,q.type,null);else for(var ut=0;ut<6;++ut)l.texImage2D(Hs+ut,Ne,q.internalformat,q.width>>Ne,q.height>>Ne,0,q.internalformat,q.type,null);Ar(q.texInfo,q.target)})}function aa(){for(var A=0;A<Dr;++A){var W=ur[A];W&&(W.bindCount=0,W.unit=-1,ur[A]=null),l.activeTexture(Di+A),l.bindTexture(Zn,null),l.bindTexture(wc,null)}}return{create2D:ht,createCube:wt,clear:hr,getTexture:function(A){return null},restore:eo,refresh:aa}}var _o=36161,Ys=32854,Nu=32855,Fu=36194,Gu=33189,Du=36168,$u=34041,qu=35907,Hu=34836,Uu=34842,Bu=34843,$n=[];$n[Ys]=2,$n[Nu]=2,$n[Fu]=2,$n[Gu]=2,$n[Du]=1,$n[$u]=4,$n[qu]=4,$n[Hu]=16,$n[Uu]=8,$n[Bu]=6;function ju(l,b,S){return $n[l]*b*S}var oy=function(l,b,S,j,Q){var U={rgba4:Ys,rgb565:Fu,"rgb5 a1":Nu,depth:Gu,stencil:Du,"depth stencil":$u};b.ext_srgb&&(U.srgba=qu),b.ext_color_buffer_half_float&&(U.rgba16f=Uu,U.rgb16f=Bu),b.webgl_color_buffer_float&&(U.rgba32f=Hu);var V=[];Object.keys(U).forEach(function(se){var we=U[se];V[we]=se});var ie=0,le={};function me(se){this.id=ie++,this.refCount=1,this.renderbuffer=se,this.format=Ys,this.width=0,this.height=0,Q.profile&&(this.stats={size:0})}me.prototype.decRef=function(){--this.refCount<=0&&fe(this)};function fe(se){var we=se.renderbuffer;y(we,"must not double destroy renderbuffer"),l.bindRenderbuffer(_o,null),l.deleteRenderbuffer(we),se.renderbuffer=null,se.refCount=0,delete le[se.id],j.renderbufferCount--}function ye(se,we){var N=new me(l.createRenderbuffer());le[N.id]=N,j.renderbufferCount++;function X(Re,te){var Pe=0,ne=0,_e=Ys;if(typeof Re=="object"&&Re){var re=Re;if("shape"in re){var Ee=re.shape;y(Array.isArray(Ee)&&Ee.length>=2,"invalid renderbuffer shape"),Pe=Ee[0]|0,ne=Ee[1]|0}else"radius"in re&&(Pe=ne=re.radius|0),"width"in re&&(Pe=re.width|0),"height"in re&&(ne=re.height|0);"format"in re&&(y.parameter(re.format,U,"invalid renderbuffer format"),_e=U[re.format])}else typeof Re=="number"?(Pe=Re|0,typeof te=="number"?ne=te|0:ne=Pe):Re?y.raise("invalid arguments to renderbuffer constructor"):Pe=ne=1;if(y(Pe>0&&ne>0&&Pe<=S.maxRenderbufferSize&&ne<=S.maxRenderbufferSize,"invalid renderbuffer size"),!(Pe===N.width&&ne===N.height&&_e===N.format))return X.width=N.width=Pe,X.height=N.height=ne,N.format=_e,l.bindRenderbuffer(_o,N.renderbuffer),l.renderbufferStorage(_o,_e,Pe,ne),y(l.getError()===0,"invalid render buffer format"),Q.profile&&(N.stats.size=ju(N.format,N.width,N.height)),X.format=V[N.format],X}function pe(Re,te){var Pe=Re|0,ne=te|0||Pe;return Pe===N.width&&ne===N.height||(y(Pe>0&&ne>0&&Pe<=S.maxRenderbufferSize&&ne<=S.maxRenderbufferSize,"invalid renderbuffer size"),X.width=N.width=Pe,X.height=N.height=ne,l.bindRenderbuffer(_o,N.renderbuffer),l.renderbufferStorage(_o,N.format,Pe,ne),y(l.getError()===0,"invalid render buffer format"),Q.profile&&(N.stats.size=ju(N.format,N.width,N.height))),X}return X(se,we),X.resize=pe,X._reglType="renderbuffer",X._renderbuffer=N,Q.profile&&(X.stats=N.stats),X.destroy=function(){N.decRef()},X}Q.profile&&(j.getTotalRenderbufferSize=function(){var se=0;return Object.keys(le).forEach(function(we){se+=le[we].stats.size}),se});function Te(){mn(le).forEach(function(se){se.renderbuffer=l.createRenderbuffer(),l.bindRenderbuffer(_o,se.renderbuffer),l.renderbufferStorage(_o,se.format,se.width,se.height)}),l.bindRenderbuffer(_o,null)}return{create:ye,clear:function(){mn(le).forEach(fe)},restore:Te}},lo=36160,Gc=36161,Jo=3553,Ks=34069,Wu=36064,Vu=36096,Xu=36128,Yu=33306,Ku=36053,ay=36054,iy=36055,sy=36057,cy=36061,ly=36193,fy=5121,uy=5126,Qu=6407,Zu=6408,hy=6402,dy=[Qu,Zu],Dc=[];Dc[Zu]=4,Dc[Qu]=3;var Qs=[];Qs[fy]=1,Qs[uy]=4,Qs[ly]=2;var py=32854,my=32855,vy=36194,gy=33189,yy=36168,Ju=34041,xy=35907,by=34836,wy=34842,_y=34843,Ey=[py,my,vy,xy,wy,_y,by],Ua={};Ua[Ku]="complete",Ua[ay]="incomplete attachment",Ua[sy]="incomplete dimensions",Ua[iy]="incomplete, missing attachment",Ua[cy]="unsupported";function My(l,b,S,j,Q,U){var V={cur:null,next:null,dirty:!1,setFBO:null},ie=["rgba"],le=["rgba4","rgb565","rgb5 a1"];b.ext_srgb&&le.push("srgba"),b.ext_color_buffer_half_float&&le.push("rgba16f","rgb16f"),b.webgl_color_buffer_float&&le.push("rgba32f");var me=["uint8"];b.oes_texture_half_float&&me.push("half float","float16"),b.oes_texture_float&&me.push("float","float32");function fe(Se,ve,ee){this.target=Se,this.texture=ve,this.renderbuffer=ee;var Qe=0,ot=0;ve?(Qe=ve.width,ot=ve.height):ee&&(Qe=ee.width,ot=ee.height),this.width=Qe,this.height=ot}function ye(Se){Se&&(Se.texture&&Se.texture._texture.decRef(),Se.renderbuffer&&Se.renderbuffer._renderbuffer.decRef())}function Te(Se,ve,ee){if(Se)if(Se.texture){var Qe=Se.texture._texture,ot=Math.max(1,Qe.width),De=Math.max(1,Qe.height);y(ot===ve&&De===ee,"inconsistent width/height for supplied texture"),Qe.refCount+=1}else{var ft=Se.renderbuffer._renderbuffer;y(ft.width===ve&&ft.height===ee,"inconsistent width/height for renderbuffer"),ft.refCount+=1}}function se(Se,ve){ve&&(ve.texture?l.framebufferTexture2D(lo,Se,ve.target,ve.texture._texture.texture,0):l.framebufferRenderbuffer(lo,Se,Gc,ve.renderbuffer._renderbuffer.renderbuffer))}function we(Se){var ve=Jo,ee=null,Qe=null,ot=Se;typeof Se=="object"&&(ot=Se.data,"target"in Se&&(ve=Se.target|0)),y.type(ot,"function","invalid attachment data");var De=ot._reglType;return De==="texture2d"?(ee=ot,y(ve===Jo)):De==="textureCube"?(ee=ot,y(ve>=Ks&&ve<Ks+6,"invalid cube map target")):De==="renderbuffer"?(Qe=ot,ve=Gc):y.raise("invalid regl object for attachment"),new fe(ve,ee,Qe)}function N(Se,ve,ee,Qe,ot){if(ee){var De=j.create2D({width:Se,height:ve,format:Qe,type:ot});return De._texture.refCount=0,new fe(Jo,De,null)}else{var ft=Q.create({width:Se,height:ve,format:Qe});return ft._renderbuffer.refCount=0,new fe(Gc,null,ft)}}function X(Se){return Se&&(Se.texture||Se.renderbuffer)}function pe(Se,ve,ee){Se&&(Se.texture?Se.texture.resize(ve,ee):Se.renderbuffer&&Se.renderbuffer.resize(ve,ee),Se.width=ve,Se.height=ee)}var Re=0,te={};function Pe(){this.id=Re++,te[this.id]=this,this.framebuffer=l.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ne(Se){Se.colorAttachments.forEach(ye),ye(Se.depthAttachment),ye(Se.stencilAttachment),ye(Se.depthStencilAttachment)}function _e(Se){var ve=Se.framebuffer;y(ve,"must not double destroy framebuffer"),l.deleteFramebuffer(ve),Se.framebuffer=null,U.framebufferCount--,delete te[Se.id]}function re(Se){var ve;l.bindFramebuffer(lo,Se.framebuffer);var ee=Se.colorAttachments;for(ve=0;ve<ee.length;++ve)se(Wu+ve,ee[ve]);for(ve=ee.length;ve<S.maxColorAttachments;++ve)l.framebufferTexture2D(lo,Wu+ve,Jo,null,0);l.framebufferTexture2D(lo,Yu,Jo,null,0),l.framebufferTexture2D(lo,Vu,Jo,null,0),l.framebufferTexture2D(lo,Xu,Jo,null,0),se(Vu,Se.depthAttachment),se(Xu,Se.stencilAttachment),se(Yu,Se.depthStencilAttachment);var Qe=l.checkFramebufferStatus(lo);!l.isContextLost()&&Qe!==Ku&&y.raise("framebuffer configuration not supported, status = "+Ua[Qe]),l.bindFramebuffer(lo,V.next?V.next.framebuffer:null),V.cur=V.next,l.getError()}function Ee(Se,ve){var ee=new Pe;U.framebufferCount++;function Qe(De,ft){var tt;y(V.next!==ee,"can not update framebuffer which is currently in use");var ct=0,Tt=0,xr=!0,Sr=!0,vt=null,Mr=!0,Vt="rgba",br="uint8",Ar=1,Tr=null,Rr=null,Dr=null,ur=!1;if(typeof De=="number")ct=De|0,Tt=ft|0||ct;else if(!De)ct=Tt=1;else{y.type(De,"object","invalid arguments for framebuffer");var at=De;if("shape"in at){var $r=at.shape;y(Array.isArray($r)&&$r.length>=2,"invalid shape for framebuffer"),ct=$r[0],Tt=$r[1]}else"radius"in at&&(ct=Tt=at.radius),"width"in at&&(ct=at.width),"height"in at&&(Tt=at.height);("color"in at||"colors"in at)&&(vt=at.color||at.colors,Array.isArray(vt)&&y(vt.length===1||b.webgl_draw_buffers,"multiple render targets not supported")),vt||("colorCount"in at&&(Ar=at.colorCount|0,y(Ar>0,"invalid color buffer count")),"colorTexture"in at&&(Mr=!!at.colorTexture,Vt="rgba4"),"colorType"in at&&(br=at.colorType,Mr?(y(b.oes_texture_float||!(br==="float"||br==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),y(b.oes_texture_half_float||!(br==="half float"||br==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):br==="half float"||br==="float16"?(y(b.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Vt="rgba16f"):(br==="float"||br==="float32")&&(y(b.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Vt="rgba32f"),y.oneOf(br,me,"invalid color type")),"colorFormat"in at&&(Vt=at.colorFormat,ie.indexOf(Vt)>=0?Mr=!0:le.indexOf(Vt)>=0?Mr=!1:Mr?y.oneOf(at.colorFormat,ie,"invalid color format for texture"):y.oneOf(at.colorFormat,le,"invalid color format for renderbuffer"))),("depthTexture"in at||"depthStencilTexture"in at)&&(ur=!!(at.depthTexture||at.depthStencilTexture),y(!ur||b.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in at&&(typeof at.depth=="boolean"?xr=at.depth:(Tr=at.depth,Sr=!1)),"stencil"in at&&(typeof at.stencil=="boolean"?Sr=at.stencil:(Rr=at.stencil,xr=!1)),"depthStencil"in at&&(typeof at.depthStencil=="boolean"?xr=Sr=at.depthStencil:(Dr=at.depthStencil,xr=!1,Sr=!1))}var Ct=null,Xe=null,ht=null,wt=null;if(Array.isArray(vt))Ct=vt.map(we);else if(vt)Ct=[we(vt)];else for(Ct=new Array(Ar),tt=0;tt<Ar;++tt)Ct[tt]=N(ct,Tt,Mr,Vt,br);y(b.webgl_draw_buffers||Ct.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),y(Ct.length<=S.maxColorAttachments,"too many color attachments, not supported"),ct=ct||Ct[0].width,Tt=Tt||Ct[0].height,Tr?Xe=we(Tr):xr&&!Sr&&(Xe=N(ct,Tt,ur,"depth","uint32")),Rr?ht=we(Rr):Sr&&!xr&&(ht=N(ct,Tt,!1,"stencil","uint8")),Dr?wt=we(Dr):!Tr&&!Rr&&Sr&&xr&&(wt=N(ct,Tt,ur,"depth stencil","depth stencil")),y(!!Tr+!!Rr+!!Dr<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var hr=null;for(tt=0;tt<Ct.length;++tt)if(Te(Ct[tt],ct,Tt),y(!Ct[tt]||Ct[tt].texture&&dy.indexOf(Ct[tt].texture._texture.format)>=0||Ct[tt].renderbuffer&&Ey.indexOf(Ct[tt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+tt+" is invalid"),Ct[tt]&&Ct[tt].texture){var eo=Dc[Ct[tt].texture._texture.format]*Qs[Ct[tt].texture._texture.type];hr===null?hr=eo:y(hr===eo,"all color attachments much have the same number of bits per pixel.")}return Te(Xe,ct,Tt),y(!Xe||Xe.texture&&Xe.texture._texture.format===hy||Xe.renderbuffer&&Xe.renderbuffer._renderbuffer.format===gy,"invalid depth attachment for framebuffer object"),Te(ht,ct,Tt),y(!ht||ht.renderbuffer&&ht.renderbuffer._renderbuffer.format===yy,"invalid stencil attachment for framebuffer object"),Te(wt,ct,Tt),y(!wt||wt.texture&&wt.texture._texture.format===Ju||wt.renderbuffer&&wt.renderbuffer._renderbuffer.format===Ju,"invalid depth-stencil attachment for framebuffer object"),ne(ee),ee.width=ct,ee.height=Tt,ee.colorAttachments=Ct,ee.depthAttachment=Xe,ee.stencilAttachment=ht,ee.depthStencilAttachment=wt,Qe.color=Ct.map(X),Qe.depth=X(Xe),Qe.stencil=X(ht),Qe.depthStencil=X(wt),Qe.width=ee.width,Qe.height=ee.height,re(ee),Qe}function ot(De,ft){y(V.next!==ee,"can not resize a framebuffer which is currently in use");var tt=Math.max(De|0,1),ct=Math.max(ft|0||tt,1);if(tt===ee.width&&ct===ee.height)return Qe;for(var Tt=ee.colorAttachments,xr=0;xr<Tt.length;++xr)pe(Tt[xr],tt,ct);return pe(ee.depthAttachment,tt,ct),pe(ee.stencilAttachment,tt,ct),pe(ee.depthStencilAttachment,tt,ct),ee.width=Qe.width=tt,ee.height=Qe.height=ct,re(ee),Qe}return Qe(Se,ve),t(Qe,{resize:ot,_reglType:"framebuffer",_framebuffer:ee,destroy:function(){_e(ee),ne(ee)},use:function(De){V.setFBO({framebuffer:Qe},De)}})}function We(Se){var ve=Array(6);function ee(ot){var De;y(ve.indexOf(V.next)<0,"can not update framebuffer which is currently in use");var ft={color:null},tt=0,ct=null,Tt="rgba",xr="uint8",Sr=1;if(typeof ot=="number")tt=ot|0;else if(!ot)tt=1;else{y.type(ot,"object","invalid arguments for framebuffer");var vt=ot;if("shape"in vt){var Mr=vt.shape;y(Array.isArray(Mr)&&Mr.length>=2,"invalid shape for framebuffer"),y(Mr[0]===Mr[1],"cube framebuffer must be square"),tt=Mr[0]}else"radius"in vt&&(tt=vt.radius|0),"width"in vt?(tt=vt.width|0,"height"in vt&&y(vt.height===tt,"must be square")):"height"in vt&&(tt=vt.height|0);("color"in vt||"colors"in vt)&&(ct=vt.color||vt.colors,Array.isArray(ct)&&y(ct.length===1||b.webgl_draw_buffers,"multiple render targets not supported")),ct||("colorCount"in vt&&(Sr=vt.colorCount|0,y(Sr>0,"invalid color buffer count")),"colorType"in vt&&(y.oneOf(vt.colorType,me,"invalid color type"),xr=vt.colorType),"colorFormat"in vt&&(Tt=vt.colorFormat,y.oneOf(vt.colorFormat,ie,"invalid color format for texture"))),"depth"in vt&&(ft.depth=vt.depth),"stencil"in vt&&(ft.stencil=vt.stencil),"depthStencil"in vt&&(ft.depthStencil=vt.depthStencil)}var Vt;if(ct)if(Array.isArray(ct))for(Vt=[],De=0;De<ct.length;++De)Vt[De]=ct[De];else Vt=[ct];else{Vt=Array(Sr);var br={radius:tt,format:Tt,type:xr};for(De=0;De<Sr;++De)Vt[De]=j.createCube(br)}for(ft.color=Array(Vt.length),De=0;De<Vt.length;++De){var Ar=Vt[De];y(typeof Ar=="function"&&Ar._reglType==="textureCube","invalid cube map"),tt=tt||Ar.width,y(Ar.width===tt&&Ar.height===tt,"invalid cube map shape"),ft.color[De]={target:Ks,data:Vt[De]}}for(De=0;De<6;++De){for(var Tr=0;Tr<Vt.length;++Tr)ft.color[Tr].target=Ks+De;De>0&&(ft.depth=ve[0].depth,ft.stencil=ve[0].stencil,ft.depthStencil=ve[0].depthStencil),ve[De]?ve[De](ft):ve[De]=Ee(ft)}return t(ee,{width:tt,height:tt,color:Vt})}function Qe(ot){var De,ft=ot|0;if(y(ft>0&&ft<=S.maxCubeMapSize,"invalid radius for cube fbo"),ft===ee.width)return ee;var tt=ee.color;for(De=0;De<tt.length;++De)tt[De].resize(ft);for(De=0;De<6;++De)ve[De].resize(ft);return ee.width=ee.height=ft,ee}return ee(Se),t(ee,{faces:ve,resize:Qe,_reglType:"framebufferCube",destroy:function(){ve.forEach(function(ot){ot.destroy()})}})}function Je(){V.cur=null,V.next=null,V.dirty=!0,mn(te).forEach(function(Se){Se.framebuffer=l.createFramebuffer(),re(Se)})}return t(V,{getFramebuffer:function(Se){if(typeof Se=="function"&&Se._reglType==="framebuffer"){var ve=Se._framebuffer;if(ve instanceof Pe)return ve}return null},create:Ee,createCube:We,clear:function(){mn(te).forEach(_e)},restore:Je})}var Ay=5126,eh=34962;function $c(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Ay,this.offset=0,this.stride=0,this.divisor=0}function Ty(l,b,S,j,Q){for(var U=S.maxAttributes,V=new Array(U),ie=0;ie<U;++ie)V[ie]=new $c;var le=0,me={},fe={Record:$c,scope:{},state:V,currentVAO:null,targetVAO:null,restore:Te()?te:function(){},createVAO:Pe,getVAO:we,destroyBuffer:ye,setVAO:Te()?N:X,clear:Te()?pe:function(){}};function ye(ne){for(var _e=0;_e<V.length;++_e){var re=V[_e];re.buffer===ne&&(l.disableVertexAttribArray(_e),re.buffer=null)}}function Te(){return b.oes_vertex_array_object}function se(){return b.angle_instanced_arrays}function we(ne){return typeof ne=="function"&&ne._vao?ne._vao:null}function N(ne){if(ne!==fe.currentVAO){var _e=Te();ne?_e.bindVertexArrayOES(ne.vao):_e.bindVertexArrayOES(null),fe.currentVAO=ne}}function X(ne){if(ne!==fe.currentVAO){if(ne)ne.bindAttrs();else for(var _e=se(),re=0;re<V.length;++re){var Ee=V[re];Ee.buffer?(l.enableVertexAttribArray(re),l.vertexAttribPointer(re,Ee.size,Ee.type,Ee.normalized,Ee.stride,Ee.offfset),_e&&Ee.divisor&&_e.vertexAttribDivisorANGLE(re,Ee.divisor)):(l.disableVertexAttribArray(re),l.vertexAttrib4f(re,Ee.x,Ee.y,Ee.z,Ee.w))}fe.currentVAO=ne}}function pe(){mn(me).forEach(function(ne){ne.destroy()})}function Re(){this.id=++le,this.attributes=[];var ne=Te();ne?this.vao=ne.createVertexArrayOES():this.vao=null,me[this.id]=this,this.buffers=[]}Re.prototype.bindAttrs=function(){for(var ne=se(),_e=this.attributes,re=0;re<_e.length;++re){var Ee=_e[re];Ee.buffer?(l.enableVertexAttribArray(re),l.bindBuffer(eh,Ee.buffer.buffer),l.vertexAttribPointer(re,Ee.size,Ee.type,Ee.normalized,Ee.stride,Ee.offset),ne&&Ee.divisor&&ne.vertexAttribDivisorANGLE(re,Ee.divisor)):(l.disableVertexAttribArray(re),l.vertexAttrib4f(re,Ee.x,Ee.y,Ee.z,Ee.w))}for(var We=_e.length;We<U;++We)l.disableVertexAttribArray(We)},Re.prototype.refresh=function(){var ne=Te();ne&&(ne.bindVertexArrayOES(this.vao),this.bindAttrs(),fe.currentVAO=this)},Re.prototype.destroy=function(){if(this.vao){var ne=Te();this===fe.currentVAO&&(fe.currentVAO=null,ne.bindVertexArrayOES(null)),ne.deleteVertexArrayOES(this.vao),this.vao=null}me[this.id]&&(delete me[this.id],j.vaoCount-=1)};function te(){var ne=Te();ne&&mn(me).forEach(function(_e){_e.refresh()})}function Pe(ne){var _e=new Re;j.vaoCount+=1;function re(Ee){y(Array.isArray(Ee),"arguments to vertex array constructor must be an array"),y(Ee.length<U,"too many attributes"),y(Ee.length>0,"must specify at least one attribute");var We={},Je=_e.attributes;Je.length=Ee.length;for(var Se=0;Se<Ee.length;++Se){var ve=Ee[Se],ee=Je[Se]=new $c,Qe=ve.data||ve;if(Array.isArray(Qe)||e(Qe)||Dn(Qe)){var ot;_e.buffers[Se]&&(ot=_e.buffers[Se],e(Qe)&&ot._buffer.byteLength>=Qe.byteLength?ot.subdata(Qe):(ot.destroy(),_e.buffers[Se]=null)),_e.buffers[Se]||(ot=_e.buffers[Se]=Q.create(ve,eh,!1,!0)),ee.buffer=Q.getBuffer(ot),ee.size=ee.buffer.dimension|0,ee.normalized=!1,ee.type=ee.buffer.dtype,ee.offset=0,ee.stride=0,ee.divisor=0,ee.state=1,We[Se]=1}else Q.getBuffer(ve)?(ee.buffer=Q.getBuffer(ve),ee.size=ee.buffer.dimension|0,ee.normalized=!1,ee.type=ee.buffer.dtype,ee.offset=0,ee.stride=0,ee.divisor=0,ee.state=1):Q.getBuffer(ve.buffer)?(ee.buffer=Q.getBuffer(ve.buffer),ee.size=(+ve.size||ee.buffer.dimension)|0,ee.normalized=!!ve.normalized||!1,"type"in ve?(y.parameter(ve.type,Yo,"invalid buffer type"),ee.type=Yo[ve.type]):ee.type=ee.buffer.dtype,ee.offset=(ve.offset||0)|0,ee.stride=(ve.stride||0)|0,ee.divisor=(ve.divisor||0)|0,ee.state=1,y(ee.size>=1&&ee.size<=4,"size must be between 1 and 4"),y(ee.offset>=0,"invalid offset"),y(ee.stride>=0&&ee.stride<=255,"stride must be between 0 and 255"),y(ee.divisor>=0,"divisor must be positive"),y(!ee.divisor||!!b.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in ve?(y(Se>0,"first attribute must not be a constant"),ee.x=+ve.x||0,ee.y=+ve.y||0,ee.z=+ve.z||0,ee.w=+ve.w||0,ee.state=2):y(!1,"invalid attribute spec for location "+Se)}for(var De=0;De<_e.buffers.length;++De)!We[De]&&_e.buffers[De]&&(_e.buffers[De].destroy(),_e.buffers[De]=null);return _e.refresh(),re}return re.destroy=function(){for(var Ee=0;Ee<_e.buffers.length;++Ee)_e.buffers[Ee]&&_e.buffers[Ee].destroy();_e.buffers.length=0,_e.destroy()},re._vao=_e,re._reglType="vao",re(ne)}return fe}var th=35632,Sy=35633,ky=35718,Ly=35721;function zy(l,b,S,j){var Q={},U={};function V(N,X,pe,Re){this.name=N,this.id=X,this.location=pe,this.info=Re}function ie(N,X){for(var pe=0;pe<N.length;++pe)if(N[pe].id===X.id){N[pe].location=X.location;return}N.push(X)}function le(N,X,pe){var Re=N===th?Q:U,te=Re[X];if(!te){var Pe=b.str(X);te=l.createShader(N),l.shaderSource(te,Pe),l.compileShader(te),y.shaderError(l,te,Pe,N,pe),Re[X]=te}return te}var me={},fe=[],ye=0;function Te(N,X){this.id=ye++,this.fragId=N,this.vertId=X,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,j.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function se(N,X,pe){var Re,te,Pe=le(th,N.fragId),ne=le(Sy,N.vertId),_e=N.program=l.createProgram();if(l.attachShader(_e,Pe),l.attachShader(_e,ne),pe)for(Re=0;Re<pe.length;++Re){var re=pe[Re];l.bindAttribLocation(_e,re[0],re[1])}l.linkProgram(_e),y.linkError(l,_e,b.str(N.fragId),b.str(N.vertId),X);var Ee=l.getProgramParameter(_e,ky);j.profile&&(N.stats.uniformsCount=Ee);var We=N.uniforms;for(Re=0;Re<Ee;++Re)if(te=l.getActiveUniform(_e,Re),te)if(te.size>1)for(var Je=0;Je<te.size;++Je){var Se=te.name.replace("[0]","["+Je+"]");ie(We,new V(Se,b.id(Se),l.getUniformLocation(_e,Se),te))}else ie(We,new V(te.name,b.id(te.name),l.getUniformLocation(_e,te.name),te));var ve=l.getProgramParameter(_e,Ly);j.profile&&(N.stats.attributesCount=ve);var ee=N.attributes;for(Re=0;Re<ve;++Re)te=l.getActiveAttrib(_e,Re),te&&ie(ee,new V(te.name,b.id(te.name),l.getAttribLocation(_e,te.name),te))}j.profile&&(S.getMaxUniformsCount=function(){var N=0;return fe.forEach(function(X){X.stats.uniformsCount>N&&(N=X.stats.uniformsCount)}),N},S.getMaxAttributesCount=function(){var N=0;return fe.forEach(function(X){X.stats.attributesCount>N&&(N=X.stats.attributesCount)}),N});function we(){Q={},U={};for(var N=0;N<fe.length;++N)se(fe[N],null,fe[N].attributes.map(function(X){return[X.location,X.name]}))}return{clear:function(){var N=l.deleteShader.bind(l);mn(Q).forEach(N),Q={},mn(U).forEach(N),U={},fe.forEach(function(X){l.deleteProgram(X.program)}),fe.length=0,me={},S.shaderCount=0},program:function(N,X,pe,Re){y.command(N>=0,"missing vertex shader",pe),y.command(X>=0,"missing fragment shader",pe);var te=me[X];te||(te=me[X]={});var Pe=te[N];if(Pe&&(Pe.refCount++,!Re))return Pe;var ne=new Te(X,N);return S.shaderCount++,se(ne,pe,Re),Pe||(te[N]=ne),fe.push(ne),t(ne,{destroy:function(){if(ne.refCount--,ne.refCount<=0){l.deleteProgram(ne.program);var _e=fe.indexOf(ne);fe.splice(_e,1),S.shaderCount--}te[ne.vertId].refCount<=0&&(l.deleteShader(U[ne.vertId]),delete U[ne.vertId],delete me[ne.fragId][ne.vertId]),Object.keys(me[ne.fragId]).length||(l.deleteShader(Q[ne.fragId]),delete Q[ne.fragId],delete me[ne.fragId])}})},restore:we,shader:le,frag:-1,vert:-1}}var Cy=6408,$i=5121,Ry=3333,Zs=5126;function Iy(l,b,S,j,Q,U,V){function ie(fe){var ye;b.next===null?(y(Q.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),ye=$i):(y(b.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),ye=b.next.colorAttachments[0].texture._texture.type,U.oes_texture_float?(y(ye===$i||ye===Zs,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),ye===Zs&&y(V.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):y(ye===$i,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Te=0,se=0,we=j.framebufferWidth,N=j.framebufferHeight,X=null;e(fe)?X=fe:fe&&(y.type(fe,"object","invalid arguments to regl.read()"),Te=fe.x|0,se=fe.y|0,y(Te>=0&&Te<j.framebufferWidth,"invalid x offset for regl.read"),y(se>=0&&se<j.framebufferHeight,"invalid y offset for regl.read"),we=(fe.width||j.framebufferWidth-Te)|0,N=(fe.height||j.framebufferHeight-se)|0,X=fe.data||null),X&&(ye===$i?y(X instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):ye===Zs&&y(X instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),y(we>0&&we+Te<=j.framebufferWidth,"invalid width for read pixels"),y(N>0&&N+se<=j.framebufferHeight,"invalid height for read pixels"),S();var pe=we*N*4;return X||(ye===$i?X=new Uint8Array(pe):ye===Zs&&(X=X||new Float32Array(pe))),y.isTypedArray(X,"data buffer for regl.read() must be a typedarray"),y(X.byteLength>=pe,"data buffer for regl.read() too small"),l.pixelStorei(Ry,4),l.readPixels(Te,se,we,N,Cy,ye,X),X}function le(fe){var ye;return b.setFBO({framebuffer:fe.framebuffer},function(){ye=ie(fe)}),ye}function me(fe){return!fe||!("framebuffer"in fe)?ie(fe):le(fe)}return me}function Ba(l){return Array.prototype.slice.call(l)}function ja(l){return Ba(l).join("")}function Py(){var l=0,b=[],S=[];function j(ye){for(var Te=0;Te<S.length;++Te)if(S[Te]===ye)return b[Te];var se="g"+l++;return b.push(se),S.push(ye),se}function Q(){var ye=[];function Te(){ye.push.apply(ye,Ba(arguments))}var se=[];function we(){var N="v"+l++;return se.push(N),arguments.length>0&&(ye.push(N,"="),ye.push.apply(ye,Ba(arguments)),ye.push(";")),N}return t(Te,{def:we,toString:function(){return ja([se.length>0?"var "+se.join(",")+";":"",ja(ye)])}})}function U(){var ye=Q(),Te=Q(),se=ye.toString,we=Te.toString;function N(X,pe){Te(X,pe,"=",ye.def(X,pe),";")}return t(function(){ye.apply(ye,Ba(arguments))},{def:ye.def,entry:ye,exit:Te,save:N,set:function(X,pe,Re){N(X,pe),ye(X,pe,"=",Re,";")},toString:function(){return se()+we()}})}function V(){var ye=ja(arguments),Te=U(),se=U(),we=Te.toString,N=se.toString;return t(Te,{then:function(){return Te.apply(Te,Ba(arguments)),this},else:function(){return se.apply(se,Ba(arguments)),this},toString:function(){var X=N();return X&&(X="else{"+X+"}"),ja(["if(",ye,"){",we(),"}",X])}})}var ie=Q(),le={};function me(ye,Te){var se=[];function we(){var te="a"+se.length;return se.push(te),te}Te=Te||0;for(var N=0;N<Te;++N)we();var X=U(),pe=X.toString,Re=le[ye]=t(X,{arg:we,toString:function(){return ja(["function(",se.join(),"){",pe(),"}"])}});return Re}function fe(){var ye=['"use strict";',ie,"return {"];Object.keys(le).forEach(function(we){ye.push('"',we,'":',le[we].toString(),",")}),ye.push("}");var Te=ja(ye).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),se=Function.apply(null,b.concat(Te));return se.apply(null,S)}return{global:ie,link:j,block:Q,proc:me,scope:U,cond:V,compile:fe}}var Wa="xyzw".split(""),rh=5121,Va=1,qc=2,Hc=0,Uc=1,Bc=2,jc=3,Js=4,nh=5,oh=6,ah="dither",ih="blend.enable",sh="blend.color",Wc="blend.equation",Vc="blend.func",ch="depth.enable",lh="depth.func",fh="depth.range",uh="depth.mask",Xc="colorMask",hh="cull.enable",dh="cull.face",Yc="frontFace",Kc="lineWidth",ph="polygonOffset.enable",Qc="polygonOffset.offset",mh="sample.alpha",vh="sample.enable",Zc="sample.coverage",gh="stencil.enable",yh="stencil.mask",Jc="stencil.func",el="stencil.opFront",qi="stencil.opBack",xh="scissor.enable",e0="scissor.box",fo="viewport",Hi="profile",ea="framebuffer",Ui="vert",Bi="frag",ta="elements",ra="primitive",na="count",t0="offset",r0="instances",ji="vao",tl="Width",rl="Height",Xa=ea+tl,Ya=ea+rl,Oy=fo+tl,Ny=fo+rl,bh="drawingBuffer",wh=bh+tl,_h=bh+rl,Fy=[Vc,Wc,Jc,el,qi,Zc,fo,e0,Qc],Ka=34962,Gy=34963,Dy=35632,$y=35633,Eh=3553,qy=34067,Hy=2884,Uy=3042,By=3024,jy=2960,Wy=2929,Vy=3089,Xy=32823,Yy=32926,Ky=32928,nl=5126,n0=35664,o0=35665,a0=35666,ol=5124,i0=35667,s0=35668,c0=35669,al=35670,l0=35671,f0=35672,u0=35673,Wi=35674,Vi=35675,Xi=35676,Yi=35678,Ki=35680,Mh=4,Qi=1028,oa=1029,Ah=2304,il=2305,Qy=32775,Zy=32776,Jy=519,Eo=7680,Th=0,Sh=1,kh=32774,ex=513,Lh=36160,tx=36064,Jn={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},zh=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Qa={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Mo={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Ch={frag:Dy,vert:$y},sl={cw:Ah,ccw:il};function h0(l){return Array.isArray(l)||e(l)||Dn(l)}function Rh(l){return l.sort(function(b,S){return b===fo?-1:S===fo?1:b<S?-1:1})}function Kr(l,b,S,j){this.thisDep=l,this.contextDep=b,this.propDep=S,this.append=j}function Ao(l){return l&&!(l.thisDep||l.contextDep||l.propDep)}function yr(l){return new Kr(!1,!1,!1,l)}function fn(l,b){var S=l.type;if(S===Hc){var j=l.data.length;return new Kr(!0,j>=1,j>=2,b)}else if(S===Js){var Q=l.data;return new Kr(Q.thisDep,Q.contextDep,Q.propDep,b)}else{if(S===nh)return new Kr(!1,!1,!1,b);if(S===oh){for(var U=!1,V=!1,ie=!1,le=0;le<l.data.length;++le){var me=l.data[le];if(me.type===Uc)ie=!0;else if(me.type===Bc)V=!0;else if(me.type===jc)U=!0;else if(me.type===Hc){U=!0;var fe=me.data;fe>=1&&(V=!0),fe>=2&&(ie=!0)}else me.type===Js&&(U=U||me.data.thisDep,V=V||me.data.contextDep,ie=ie||me.data.propDep)}return new Kr(U,V,ie,b)}else return new Kr(S===jc,S===Bc,S===Uc,b)}}var Ih=new Kr(!1,!1,!1,function(){});function rx(l,b,S,j,Q,U,V,ie,le,me,fe,ye,Te,se,we){var N=me.Record,X={add:32774,subtract:32778,"reverse subtract":32779};S.ext_blend_minmax&&(X.min=Qy,X.max=Zy);var pe=S.angle_instanced_arrays,Re=S.webgl_draw_buffers,te={dirty:!0,profile:we.profile},Pe={},ne=[],_e={},re={};function Ee(E){return E.replace(".","_")}function We(E,x,L){var O=Ee(E);ne.push(E),Pe[O]=te[O]=!!L,_e[O]=x}function Je(E,x,L){var O=Ee(E);ne.push(E),Array.isArray(L)?(te[O]=L.slice(),Pe[O]=L.slice()):te[O]=Pe[O]=L,re[O]=x}We(ah,By),We(ih,Uy),Je(sh,"blendColor",[0,0,0,0]),Je(Wc,"blendEquationSeparate",[kh,kh]),Je(Vc,"blendFuncSeparate",[Sh,Th,Sh,Th]),We(ch,Wy,!0),Je(lh,"depthFunc",ex),Je(fh,"depthRange",[0,1]),Je(uh,"depthMask",!0),Je(Xc,Xc,[!0,!0,!0,!0]),We(hh,Hy),Je(dh,"cullFace",oa),Je(Yc,Yc,il),Je(Kc,Kc,1),We(ph,Xy),Je(Qc,"polygonOffset",[0,0]),We(mh,Yy),We(vh,Ky),Je(Zc,"sampleCoverage",[1,!1]),We(gh,jy),Je(yh,"stencilMask",-1),Je(Jc,"stencilFunc",[Jy,0,-1]),Je(el,"stencilOpSeparate",[Qi,Eo,Eo,Eo]),Je(qi,"stencilOpSeparate",[oa,Eo,Eo,Eo]),We(xh,Vy),Je(e0,"scissor",[0,0,l.drawingBufferWidth,l.drawingBufferHeight]),Je(fo,fo,[0,0,l.drawingBufferWidth,l.drawingBufferHeight]);var Se={gl:l,context:Te,strings:b,next:Pe,current:te,draw:ye,elements:U,buffer:Q,shader:fe,attributes:me.state,vao:me,uniforms:le,framebuffer:ie,extensions:S,timer:se,isBufferArgs:h0},ve={primTypes:Na,compareFuncs:Qa,blendFuncs:Jn,blendEquations:X,stencilOps:Mo,glTypes:Yo,orientationType:sl};y.optional(function(){Se.isArrayLike=fr}),Re&&(ve.backBuffer=[oa],ve.drawBuffer=Br(j.maxDrawbuffers,function(E){return E===0?[0]:Br(E,function(x){return tx+x})}));var ee=0;function Qe(){var E=Py(),x=E.link,L=E.global;E.id=ee++,E.batchId="0";var O=x(Se),F=E.shared={props:"a0"};Object.keys(Se).forEach(function(k){F[k]=L.def(O,".",k)}),y.optional(function(){E.CHECK=x(y),E.commandStr=y.guessCommand(),E.command=x(E.commandStr),E.assert=function(k,_,P){k("if(!(",_,"))",this.CHECK,".commandRaise(",x(P),",",this.command,");")},ve.invalidBlendCombinations=zh});var R=E.next={},z=E.current={};Object.keys(re).forEach(function(k){Array.isArray(te[k])&&(R[k]=L.def(F.next,".",k),z[k]=L.def(F.current,".",k))});var I=E.constants={};Object.keys(ve).forEach(function(k){I[k]=L.def(JSON.stringify(ve[k]))}),E.invoke=function(k,_){switch(_.type){case Hc:var P=["this",F.context,F.props,E.batchId];return k.def(x(_.data),".call(",P.slice(0,Math.max(_.data.length+1,4)),")");case Uc:return k.def(F.props,_.data);case Bc:return k.def(F.context,_.data);case jc:return k.def("this",_.data);case Js:return _.data.append(E,k),_.data.ref;case nh:return _.data.toString();case oh:return _.data.map(function(G){return E.invoke(k,G)})}},E.attribCache={};var M={};return E.scopeAttrib=function(k){var _=b.id(k);if(_ in M)return M[_];var P=me.scope[_];P||(P=me.scope[_]=new N);var G=M[_]=x(P);return G},E}function ot(E){var x=E.static,L=E.dynamic,O;if(Hi in x){var F=!!x[Hi];O=yr(function(z,I){return F}),O.enable=F}else if(Hi in L){var R=L[Hi];O=fn(R,function(z,I){return z.invoke(I,R)})}return O}function De(E,x){var L=E.static,O=E.dynamic;if(ea in L){var F=L[ea];return F?(F=ie.getFramebuffer(F),y.command(F,"invalid framebuffer object"),yr(function(z,I){var M=z.link(F),k=z.shared;I.set(k.framebuffer,".next",M);var _=k.context;return I.set(_,"."+Xa,M+".width"),I.set(_,"."+Ya,M+".height"),M})):yr(function(z,I){var M=z.shared;I.set(M.framebuffer,".next","null");var k=M.context;return I.set(k,"."+Xa,k+"."+wh),I.set(k,"."+Ya,k+"."+_h),"null"})}else if(ea in O){var R=O[ea];return fn(R,function(z,I){var M=z.invoke(I,R),k=z.shared,_=k.framebuffer,P=I.def(_,".getFramebuffer(",M,")");y.optional(function(){z.assert(I,"!"+M+"||"+P,"invalid framebuffer object")}),I.set(_,".next",P);var G=k.context;return I.set(G,"."+Xa,P+"?"+P+".width:"+G+"."+wh),I.set(G,"."+Ya,P+"?"+P+".height:"+G+"."+_h),P})}else return null}function ft(E,x,L){var O=E.static,F=E.dynamic;function R(M){if(M in O){var k=O[M];y.commandType(k,"object","invalid "+M,L.commandStr);var _=!0,P=k.x|0,G=k.y|0,K,Z;return"width"in k?(K=k.width|0,y.command(K>=0,"invalid "+M,L.commandStr)):_=!1,"height"in k?(Z=k.height|0,y.command(Z>=0,"invalid "+M,L.commandStr)):_=!1,new Kr(!_&&x&&x.thisDep,!_&&x&&x.contextDep,!_&&x&&x.propDep,function(Be,it){var $e=Be.shared.context,Ye=K;"width"in k||(Ye=it.def($e,".",Xa,"-",P));var rt=Z;return"height"in k||(rt=it.def($e,".",Ya,"-",G)),[P,G,Ye,rt]})}else if(M in F){var Y=F[M],de=fn(Y,function(Be,it){var $e=Be.invoke(it,Y);y.optional(function(){Be.assert(it,$e+"&&typeof "+$e+'==="object"',"invalid "+M)});var Ye=Be.shared.context,rt=it.def($e,".x|0"),St=it.def($e,".y|0"),sr=it.def('"width" in ',$e,"?",$e,".width|0:","(",Ye,".",Xa,"-",rt,")"),Qr=it.def('"height" in ',$e,"?",$e,".height|0:","(",Ye,".",Ya,"-",St,")");return y.optional(function(){Be.assert(it,sr+">=0&&"+Qr+">=0","invalid "+M)}),[rt,St,sr,Qr]});return x&&(de.thisDep=de.thisDep||x.thisDep,de.contextDep=de.contextDep||x.contextDep,de.propDep=de.propDep||x.propDep),de}else return x?new Kr(x.thisDep,x.contextDep,x.propDep,function(Be,it){var $e=Be.shared.context;return[0,0,it.def($e,".",Xa),it.def($e,".",Ya)]}):null}var z=R(fo);if(z){var I=z;z=new Kr(z.thisDep,z.contextDep,z.propDep,function(M,k){var _=I.append(M,k),P=M.shared.context;return k.set(P,"."+Oy,_[2]),k.set(P,"."+Ny,_[3]),_})}return{viewport:z,scissor_box:R(e0)}}function tt(E,x){var L=E.static,O=typeof L[Bi]=="string"&&typeof L[Ui]=="string";if(O){if(Object.keys(x.dynamic).length>0)return null;var F=x.static,R=Object.keys(F);if(R.length>0&&typeof F[R[0]]=="number"){for(var z=[],I=0;I<R.length;++I)y(typeof F[R[I]]=="number","must specify all vertex attribute locations when using vaos"),z.push([F[R[I]]|0,R[I]]);return z}}return null}function ct(E,x,L){var O=E.static,F=E.dynamic;function R(_){if(_ in O){var P=b.id(O[_]);y.optional(function(){fe.shader(Ch[_],P,y.guessCommand())});var G=yr(function(){return P});return G.id=P,G}else if(_ in F){var K=F[_];return fn(K,function(Z,Y){var de=Z.invoke(Y,K),Be=Y.def(Z.shared.strings,".id(",de,")");return y.optional(function(){Y(Z.shared.shader,".shader(",Ch[_],",",Be,",",Z.command,");")}),Be})}return null}var z=R(Bi),I=R(Ui),M=null,k;return Ao(z)&&Ao(I)?(M=fe.program(I.id,z.id,null,L),k=yr(function(_,P){return _.link(M)})):k=new Kr(z&&z.thisDep||I&&I.thisDep,z&&z.contextDep||I&&I.contextDep,z&&z.propDep||I&&I.propDep,function(_,P){var G=_.shared.shader,K;z?K=z.append(_,P):K=P.def(G,".",Bi);var Z;I?Z=I.append(_,P):Z=P.def(G,".",Ui);var Y=G+".program("+Z+","+K;return y.optional(function(){Y+=","+_.command}),P.def(Y+")")}),{frag:z,vert:I,progVar:k,program:M}}function Tt(E,x){var L=E.static,O=E.dynamic;function F(){if(ta in L){var _=L[ta];h0(_)?_=U.getElements(U.create(_,!0)):_&&(_=U.getElements(_),y.command(_,"invalid elements",x.commandStr));var P=yr(function(K,Z){if(_){var Y=K.link(_);return K.ELEMENTS=Y,Y}return K.ELEMENTS=null,null});return P.value=_,P}else if(ta in O){var G=O[ta];return fn(G,function(K,Z){var Y=K.shared,de=Y.isBufferArgs,Be=Y.elements,it=K.invoke(Z,G),$e=Z.def("null"),Ye=Z.def(de,"(",it,")"),rt=K.cond(Ye).then($e,"=",Be,".createStream(",it,");").else($e,"=",Be,".getElements(",it,");");return y.optional(function(){K.assert(rt.else,"!"+it+"||"+$e,"invalid elements")}),Z.entry(rt),Z.exit(K.cond(Ye).then(Be,".destroyStream(",$e,");")),K.ELEMENTS=$e,$e})}return null}var R=F();function z(){if(ra in L){var _=L[ra];return y.commandParameter(_,Na,"invalid primitve",x.commandStr),yr(function(G,K){return Na[_]})}else if(ra in O){var P=O[ra];return fn(P,function(G,K){var Z=G.constants.primTypes,Y=G.invoke(K,P);return y.optional(function(){G.assert(K,Y+" in "+Z,"invalid primitive, must be one of "+Object.keys(Na))}),K.def(Z,"[",Y,"]")})}else if(R)return Ao(R)?R.value?yr(function(G,K){return K.def(G.ELEMENTS,".primType")}):yr(function(){return Mh}):new Kr(R.thisDep,R.contextDep,R.propDep,function(G,K){var Z=G.ELEMENTS;return K.def(Z,"?",Z,".primType:",Mh)});return null}function I(_,P){if(_ in L){var G=L[_]|0;return y.command(!P||G>=0,"invalid "+_,x.commandStr),yr(function(Z,Y){return P&&(Z.OFFSET=G),G})}else if(_ in O){var K=O[_];return fn(K,function(Z,Y){var de=Z.invoke(Y,K);return P&&(Z.OFFSET=de,y.optional(function(){Z.assert(Y,de+">=0","invalid "+_)})),de})}else if(P&&R)return yr(function(Z,Y){return Z.OFFSET="0",0});return null}var M=I(t0,!0);function k(){if(na in L){var _=L[na]|0;return y.command(typeof _=="number"&&_>=0,"invalid vertex count",x.commandStr),yr(function(){return _})}else if(na in O){var P=O[na];return fn(P,function(Z,Y){var de=Z.invoke(Y,P);return y.optional(function(){Z.assert(Y,"typeof "+de+'==="number"&&'+de+">=0&&"+de+"===("+de+"|0)","invalid vertex count")}),de})}else if(R)if(Ao(R)){if(R)return M?new Kr(M.thisDep,M.contextDep,M.propDep,function(Z,Y){var de=Y.def(Z.ELEMENTS,".vertCount-",Z.OFFSET);return y.optional(function(){Z.assert(Y,de+">=0","invalid vertex offset/element buffer too small")}),de}):yr(function(Z,Y){return Y.def(Z.ELEMENTS,".vertCount")});var G=yr(function(){return-1});return y.optional(function(){G.MISSING=!0}),G}else{var K=new Kr(R.thisDep||M.thisDep,R.contextDep||M.contextDep,R.propDep||M.propDep,function(Z,Y){var de=Z.ELEMENTS;return Z.OFFSET?Y.def(de,"?",de,".vertCount-",Z.OFFSET,":-1"):Y.def(de,"?",de,".vertCount:-1")});return y.optional(function(){K.DYNAMIC=!0}),K}return null}return{elements:R,primitive:z(),count:k(),instances:I(r0,!1),offset:M}}function xr(E,x){var L=E.static,O=E.dynamic,F={};return ne.forEach(function(R){var z=Ee(R);function I(M,k){if(R in L){var _=M(L[R]);F[z]=yr(function(){return _})}else if(R in O){var P=O[R];F[z]=fn(P,function(G,K){return k(G,K,G.invoke(K,P))})}}switch(R){case hh:case ih:case ah:case gh:case ch:case xh:case ph:case mh:case vh:case uh:return I(function(M){return y.commandType(M,"boolean",R,x.commandStr),M},function(M,k,_){return y.optional(function(){M.assert(k,"typeof "+_+'==="boolean"',"invalid flag "+R,M.commandStr)}),_});case lh:return I(function(M){return y.commandParameter(M,Qa,"invalid "+R,x.commandStr),Qa[M]},function(M,k,_){var P=M.constants.compareFuncs;return y.optional(function(){M.assert(k,_+" in "+P,"invalid "+R+", must be one of "+Object.keys(Qa))}),k.def(P,"[",_,"]")});case fh:return I(function(M){return y.command(fr(M)&&M.length===2&&typeof M[0]=="number"&&typeof M[1]=="number"&&M[0]<=M[1],"depth range is 2d array",x.commandStr),M},function(M,k,_){y.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===2&&typeof "+_+'[0]==="number"&&typeof '+_+'[1]==="number"&&'+_+"[0]<="+_+"[1]","depth range must be a 2d array")});var P=k.def("+",_,"[0]"),G=k.def("+",_,"[1]");return[P,G]});case Vc:return I(function(M){y.commandType(M,"object","blend.func",x.commandStr);var k="srcRGB"in M?M.srcRGB:M.src,_="srcAlpha"in M?M.srcAlpha:M.src,P="dstRGB"in M?M.dstRGB:M.dst,G="dstAlpha"in M?M.dstAlpha:M.dst;return y.commandParameter(k,Jn,z+".srcRGB",x.commandStr),y.commandParameter(_,Jn,z+".srcAlpha",x.commandStr),y.commandParameter(P,Jn,z+".dstRGB",x.commandStr),y.commandParameter(G,Jn,z+".dstAlpha",x.commandStr),y.command(zh.indexOf(k+", "+P)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+k+", "+P+")",x.commandStr),[Jn[k],Jn[P],Jn[_],Jn[G]]},function(M,k,_){var P=M.constants.blendFuncs;y.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid blend func, must be an object")});function G($e,Ye){var rt=k.def('"',$e,Ye,'" in ',_,"?",_,".",$e,Ye,":",_,".",$e);return y.optional(function(){M.assert(k,rt+" in "+P,"invalid "+R+"."+$e+Ye+", must be one of "+Object.keys(Jn))}),rt}var K=G("src","RGB"),Z=G("dst","RGB");y.optional(function(){var $e=M.constants.invalidBlendCombinations;M.assert(k,$e+".indexOf("+K+'+", "+'+Z+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var Y=k.def(P,"[",K,"]"),de=k.def(P,"[",G("src","Alpha"),"]"),Be=k.def(P,"[",Z,"]"),it=k.def(P,"[",G("dst","Alpha"),"]");return[Y,Be,de,it]});case Wc:return I(function(M){if(typeof M=="string")return y.commandParameter(M,X,"invalid "+R,x.commandStr),[X[M],X[M]];if(typeof M=="object")return y.commandParameter(M.rgb,X,R+".rgb",x.commandStr),y.commandParameter(M.alpha,X,R+".alpha",x.commandStr),[X[M.rgb],X[M.alpha]];y.commandRaise("invalid blend.equation",x.commandStr)},function(M,k,_){var P=M.constants.blendEquations,G=k.def(),K=k.def(),Z=M.cond("typeof ",_,'==="string"');return y.optional(function(){function Y(de,Be,it){M.assert(de,it+" in "+P,"invalid "+Be+", must be one of "+Object.keys(X))}Y(Z.then,R,_),M.assert(Z.else,_+"&&typeof "+_+'==="object"',"invalid "+R),Y(Z.else,R+".rgb",_+".rgb"),Y(Z.else,R+".alpha",_+".alpha")}),Z.then(G,"=",K,"=",P,"[",_,"];"),Z.else(G,"=",P,"[",_,".rgb];",K,"=",P,"[",_,".alpha];"),k(Z),[G,K]});case sh:return I(function(M){return y.command(fr(M)&&M.length===4,"blend.color must be a 4d array",x.commandStr),Br(4,function(k){return+M[k]})},function(M,k,_){return y.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===4","blend.color must be a 4d array")}),Br(4,function(P){return k.def("+",_,"[",P,"]")})});case yh:return I(function(M){return y.commandType(M,"number",z,x.commandStr),M|0},function(M,k,_){return y.optional(function(){M.assert(k,"typeof "+_+'==="number"',"invalid stencil.mask")}),k.def(_,"|0")});case Jc:return I(function(M){y.commandType(M,"object",z,x.commandStr);var k=M.cmp||"keep",_=M.ref||0,P="mask"in M?M.mask:-1;return y.commandParameter(k,Qa,R+".cmp",x.commandStr),y.commandType(_,"number",R+".ref",x.commandStr),y.commandType(P,"number",R+".mask",x.commandStr),[Qa[k],_,P]},function(M,k,_){var P=M.constants.compareFuncs;y.optional(function(){function Y(){M.assert(k,Array.prototype.join.call(arguments,""),"invalid stencil.func")}Y(_+"&&typeof ",_,'==="object"'),Y('!("cmp" in ',_,")||(",_,".cmp in ",P,")")});var G=k.def('"cmp" in ',_,"?",P,"[",_,".cmp]",":",Eo),K=k.def(_,".ref|0"),Z=k.def('"mask" in ',_,"?",_,".mask|0:-1");return[G,K,Z]});case el:case qi:return I(function(M){y.commandType(M,"object",z,x.commandStr);var k=M.fail||"keep",_=M.zfail||"keep",P=M.zpass||"keep";return y.commandParameter(k,Mo,R+".fail",x.commandStr),y.commandParameter(_,Mo,R+".zfail",x.commandStr),y.commandParameter(P,Mo,R+".zpass",x.commandStr),[R===qi?oa:Qi,Mo[k],Mo[_],Mo[P]]},function(M,k,_){var P=M.constants.stencilOps;y.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid "+R)});function G(K){return y.optional(function(){M.assert(k,'!("'+K+'" in '+_+")||("+_+"."+K+" in "+P+")","invalid "+R+"."+K+", must be one of "+Object.keys(Mo))}),k.def('"',K,'" in ',_,"?",P,"[",_,".",K,"]:",Eo)}return[R===qi?oa:Qi,G("fail"),G("zfail"),G("zpass")]});case Qc:return I(function(M){y.commandType(M,"object",z,x.commandStr);var k=M.factor|0,_=M.units|0;return y.commandType(k,"number",z+".factor",x.commandStr),y.commandType(_,"number",z+".units",x.commandStr),[k,_]},function(M,k,_){y.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid "+R)});var P=k.def(_,".factor|0"),G=k.def(_,".units|0");return[P,G]});case dh:return I(function(M){var k=0;return M==="front"?k=Qi:M==="back"&&(k=oa),y.command(!!k,z,x.commandStr),k},function(M,k,_){return y.optional(function(){M.assert(k,_+'==="front"||'+_+'==="back"',"invalid cull.face")}),k.def(_,'==="front"?',Qi,":",oa)});case Kc:return I(function(M){return y.command(typeof M=="number"&&M>=j.lineWidthDims[0]&&M<=j.lineWidthDims[1],"invalid line width, must be a positive number between "+j.lineWidthDims[0]+" and "+j.lineWidthDims[1],x.commandStr),M},function(M,k,_){return y.optional(function(){M.assert(k,"typeof "+_+'==="number"&&'+_+">="+j.lineWidthDims[0]+"&&"+_+"<="+j.lineWidthDims[1],"invalid line width")}),_});case Yc:return I(function(M){return y.commandParameter(M,sl,z,x.commandStr),sl[M]},function(M,k,_){return y.optional(function(){M.assert(k,_+'==="cw"||'+_+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),k.def(_+'==="cw"?'+Ah+":"+il)});case Xc:return I(function(M){return y.command(fr(M)&&M.length===4,"color.mask must be length 4 array",x.commandStr),M.map(function(k){return!!k})},function(M,k,_){return y.optional(function(){M.assert(k,M.shared.isArrayLike+"("+_+")&&"+_+".length===4","invalid color.mask")}),Br(4,function(P){return"!!"+_+"["+P+"]"})});case Zc:return I(function(M){y.command(typeof M=="object"&&M,z,x.commandStr);var k="value"in M?M.value:1,_=!!M.invert;return y.command(typeof k=="number"&&k>=0&&k<=1,"sample.coverage.value must be a number between 0 and 1",x.commandStr),[k,_]},function(M,k,_){y.optional(function(){M.assert(k,_+"&&typeof "+_+'==="object"',"invalid sample.coverage")});var P=k.def('"value" in ',_,"?+",_,".value:1"),G=k.def("!!",_,".invert");return[P,G]})}}),F}function Sr(E,x){var L=E.static,O=E.dynamic,F={};return Object.keys(L).forEach(function(R){var z=L[R],I;if(typeof z=="number"||typeof z=="boolean")I=yr(function(){return z});else if(typeof z=="function"){var M=z._reglType;M==="texture2d"||M==="textureCube"?I=yr(function(k){return k.link(z)}):M==="framebuffer"||M==="framebufferCube"?(y.command(z.color.length>0,'missing color attachment for framebuffer sent to uniform "'+R+'"',x.commandStr),I=yr(function(k){return k.link(z.color[0])})):y.commandRaise('invalid data for uniform "'+R+'"',x.commandStr)}else fr(z)?I=yr(function(k){var _=k.global.def("[",Br(z.length,function(P){return y.command(typeof z[P]=="number"||typeof z[P]=="boolean","invalid uniform "+R,k.commandStr),z[P]}),"]");return _}):y.commandRaise('invalid or missing data for uniform "'+R+'"',x.commandStr);I.value=z,F[R]=I}),Object.keys(O).forEach(function(R){var z=O[R];F[R]=fn(z,function(I,M){return I.invoke(M,z)})}),F}function vt(E,x){var L=E.static,O=E.dynamic,F={};return Object.keys(L).forEach(function(R){var z=L[R],I=b.id(R),M=new N;if(h0(z))M.state=Va,M.buffer=Q.getBuffer(Q.create(z,Ka,!1,!0)),M.type=0;else{var k=Q.getBuffer(z);if(k)M.state=Va,M.buffer=k,M.type=0;else if(y.command(typeof z=="object"&&z,"invalid data for attribute "+R,x.commandStr),"constant"in z){var _=z.constant;M.buffer="null",M.state=qc,typeof _=="number"?M.x=_:(y.command(fr(_)&&_.length>0&&_.length<=4,"invalid constant for attribute "+R,x.commandStr),Wa.forEach(function(Be,it){it<_.length&&(M[Be]=_[it])}))}else{h0(z.buffer)?k=Q.getBuffer(Q.create(z.buffer,Ka,!1,!0)):k=Q.getBuffer(z.buffer),y.command(!!k,'missing buffer for attribute "'+R+'"',x.commandStr);var P=z.offset|0;y.command(P>=0,'invalid offset for attribute "'+R+'"',x.commandStr);var G=z.stride|0;y.command(G>=0&&G<256,'invalid stride for attribute "'+R+'", must be integer betweeen [0, 255]',x.commandStr);var K=z.size|0;y.command(!("size"in z)||K>0&&K<=4,'invalid size for attribute "'+R+'", must be 1,2,3,4',x.commandStr);var Z=!!z.normalized,Y=0;"type"in z&&(y.commandParameter(z.type,Yo,"invalid type for attribute "+R,x.commandStr),Y=Yo[z.type]);var de=z.divisor|0;"divisor"in z&&(y.command(de===0||pe,'cannot specify divisor for attribute "'+R+'", instancing not supported',x.commandStr),y.command(de>=0,'invalid divisor for attribute "'+R+'"',x.commandStr)),y.optional(function(){var Be=x.commandStr,it=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(z).forEach(function($e){y.command(it.indexOf($e)>=0,'unknown parameter "'+$e+'" for attribute pointer "'+R+'" (valid parameters are '+it+")",Be)})}),M.buffer=k,M.state=Va,M.size=K,M.normalized=Z,M.type=Y||k.dtype,M.offset=P,M.stride=G,M.divisor=de}}F[R]=yr(function(Be,it){var $e=Be.attribCache;if(I in $e)return $e[I];var Ye={isStream:!1};return Object.keys(M).forEach(function(rt){Ye[rt]=M[rt]}),M.buffer&&(Ye.buffer=Be.link(M.buffer),Ye.type=Ye.type||Ye.buffer+".dtype"),$e[I]=Ye,Ye})}),Object.keys(O).forEach(function(R){var z=O[R];function I(M,k){var _=M.invoke(k,z),P=M.shared,G=M.constants,K=P.isBufferArgs,Z=P.buffer;y.optional(function(){M.assert(k,_+"&&(typeof "+_+'==="object"||typeof '+_+'==="function")&&('+K+"("+_+")||"+Z+".getBuffer("+_+")||"+Z+".getBuffer("+_+".buffer)||"+K+"("+_+'.buffer)||("constant" in '+_+"&&(typeof "+_+'.constant==="number"||'+P.isArrayLike+"("+_+".constant))))",'invalid dynamic attribute "'+R+'"')});var Y={isStream:k.def(!1)},de=new N;de.state=Va,Object.keys(de).forEach(function(Ye){Y[Ye]=k.def(""+de[Ye])});var Be=Y.buffer,it=Y.type;k("if(",K,"(",_,")){",Y.isStream,"=true;",Be,"=",Z,".createStream(",Ka,",",_,");",it,"=",Be,".dtype;","}else{",Be,"=",Z,".getBuffer(",_,");","if(",Be,"){",it,"=",Be,".dtype;",'}else if("constant" in ',_,"){",Y.state,"=",qc,";","if(typeof "+_+'.constant === "number"){',Y[Wa[0]],"=",_,".constant;",Wa.slice(1).map(function(Ye){return Y[Ye]}).join("="),"=0;","}else{",Wa.map(function(Ye,rt){return Y[Ye]+"="+_+".constant.length>"+rt+"?"+_+".constant["+rt+"]:0;"}).join(""),"}}else{","if(",K,"(",_,".buffer)){",Be,"=",Z,".createStream(",Ka,",",_,".buffer);","}else{",Be,"=",Z,".getBuffer(",_,".buffer);","}",it,'="type" in ',_,"?",G.glTypes,"[",_,".type]:",Be,".dtype;",Y.normalized,"=!!",_,".normalized;");function $e(Ye){k(Y[Ye],"=",_,".",Ye,"|0;")}return $e("size"),$e("offset"),$e("stride"),$e("divisor"),k("}}"),k.exit("if(",Y.isStream,"){",Z,".destroyStream(",Be,");","}"),Y}F[R]=fn(z,I)}),F}function Mr(E,x){var L=E.static,O=E.dynamic;if(ji in L){var F=L[ji];return F!==null&&me.getVAO(F)===null&&(F=me.createVAO(F)),yr(function(z){return z.link(me.getVAO(F))})}else if(ji in O){var R=O[ji];return fn(R,function(z,I){var M=z.invoke(I,R);return I.def(z.shared.vao+".getVAO("+M+")")})}return null}function Vt(E){var x=E.static,L=E.dynamic,O={};return Object.keys(x).forEach(function(F){var R=x[F];O[F]=yr(function(z,I){return typeof R=="number"||typeof R=="boolean"?""+R:z.link(R)})}),Object.keys(L).forEach(function(F){var R=L[F];O[F]=fn(R,function(z,I){return z.invoke(I,R)})}),O}function br(E,x,L,O,F){var R=E.static,z=E.dynamic;y.optional(function(){var $e=[ea,Ui,Bi,ta,ra,t0,na,r0,Hi,ji].concat(ne);function Ye(rt){Object.keys(rt).forEach(function(St){y.command($e.indexOf(St)>=0,'unknown parameter "'+St+'"',F.commandStr)})}Ye(R),Ye(z)});var I=tt(E,x),M=De(E,F),k=ft(E,M,F),_=Tt(E,F),P=xr(E,F),G=ct(E,F,I);function K($e){var Ye=k[$e];Ye&&(P[$e]=Ye)}K(fo),K(Ee(e0));var Z=Object.keys(P).length>0,Y={framebuffer:M,draw:_,shader:G,state:P,dirty:Z,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(Y.profile=ot(E,F),Y.uniforms=Sr(L,F),Y.drawVAO=Y.scopeVAO=Mr(E,F),!Y.drawVAO&&G.program&&!I&&S.angle_instanced_arrays){var de=!0,Be=G.program.attributes.map(function($e){var Ye=x.static[$e];return de=de&&!!Ye,Ye});if(de&&Be.length>0){var it=me.getVAO(me.createVAO(Be));Y.drawVAO=new Kr(null,null,null,function($e,Ye){return $e.link(it)}),Y.useVAO=!0}}return I?Y.useVAO=!0:Y.attributes=vt(x,F),Y.context=Vt(O,F),Y}function Ar(E,x,L){var O=E.shared,F=O.context,R=E.scope();Object.keys(L).forEach(function(z){x.save(F,"."+z);var I=L[z],M=I.append(E,x);Array.isArray(M)?R(F,".",z,"=[",M.join(),"];"):R(F,".",z,"=",M,";")}),x(R)}function Tr(E,x,L,O){var F=E.shared,R=F.gl,z=F.framebuffer,I;Re&&(I=x.def(F.extensions,".webgl_draw_buffers"));var M=E.constants,k=M.drawBuffer,_=M.backBuffer,P;L?P=L.append(E,x):P=x.def(z,".next"),O||x("if(",P,"!==",z,".cur){"),x("if(",P,"){",R,".bindFramebuffer(",Lh,",",P,".framebuffer);"),Re&&x(I,".drawBuffersWEBGL(",k,"[",P,".colorAttachments.length]);"),x("}else{",R,".bindFramebuffer(",Lh,",null);"),Re&&x(I,".drawBuffersWEBGL(",_,");"),x("}",z,".cur=",P,";"),O||x("}")}function Rr(E,x,L){var O=E.shared,F=O.gl,R=E.current,z=E.next,I=O.current,M=O.next,k=E.cond(I,".dirty");ne.forEach(function(_){var P=Ee(_);if(!(P in L.state)){var G,K;if(P in z){G=z[P],K=R[P];var Z=Br(te[P].length,function(de){return k.def(G,"[",de,"]")});k(E.cond(Z.map(function(de,Be){return de+"!=="+K+"["+Be+"]"}).join("||")).then(F,".",re[P],"(",Z,");",Z.map(function(de,Be){return K+"["+Be+"]="+de}).join(";"),";"))}else{G=k.def(M,".",P);var Y=E.cond(G,"!==",I,".",P);k(Y),P in _e?Y(E.cond(G).then(F,".enable(",_e[P],");").else(F,".disable(",_e[P],");"),I,".",P,"=",G,";"):Y(F,".",re[P],"(",G,");",I,".",P,"=",G,";")}}}),Object.keys(L.state).length===0&&k(I,".dirty=false;"),x(k)}function Dr(E,x,L,O){var F=E.shared,R=E.current,z=F.current,I=F.gl;Rh(Object.keys(L)).forEach(function(M){var k=L[M];if(!(O&&!O(k))){var _=k.append(E,x);if(_e[M]){var P=_e[M];Ao(k)?_?x(I,".enable(",P,");"):x(I,".disable(",P,");"):x(E.cond(_).then(I,".enable(",P,");").else(I,".disable(",P,");")),x(z,".",M,"=",_,";")}else if(fr(_)){var G=R[M];x(I,".",re[M],"(",_,");",_.map(function(K,Z){return G+"["+Z+"]="+K}).join(";"),";")}else x(I,".",re[M],"(",_,");",z,".",M,"=",_,";")}})}function ur(E,x){pe&&(E.instancing=x.def(E.shared.extensions,".angle_instanced_arrays"))}function at(E,x,L,O,F){var R=E.shared,z=E.stats,I=R.current,M=R.timer,k=L.profile;function _(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var P,G;function K($e){P=x.def(),$e(P,"=",_(),";"),typeof F=="string"?$e(z,".count+=",F,";"):$e(z,".count++;"),se&&(O?(G=x.def(),$e(G,"=",M,".getNumPendingQueries();")):$e(M,".beginQuery(",z,");"))}function Z($e){$e(z,".cpuTime+=",_(),"-",P,";"),se&&(O?$e(M,".pushScopeStats(",G,",",M,".getNumPendingQueries(),",z,");"):$e(M,".endQuery();"))}function Y($e){var Ye=x.def(I,".profile");x(I,".profile=",$e,";"),x.exit(I,".profile=",Ye,";")}var de;if(k){if(Ao(k)){k.enable?(K(x),Z(x.exit),Y("true")):Y("false");return}de=k.append(E,x),Y(de)}else de=x.def(I,".profile");var Be=E.block();K(Be),x("if(",de,"){",Be,"}");var it=E.block();Z(it),x.exit("if(",de,"){",it,"}")}function $r(E,x,L,O,F){var R=E.shared;function z(M){switch(M){case n0:case i0:case l0:return 2;case o0:case s0:case f0:return 3;case a0:case c0:case u0:return 4;default:return 1}}function I(M,k,_){var P=R.gl,G=x.def(M,".location"),K=x.def(R.attributes,"[",G,"]"),Z=_.state,Y=_.buffer,de=[_.x,_.y,_.z,_.w],Be=["buffer","normalized","offset","stride"];function it(){x("if(!",K,".buffer){",P,".enableVertexAttribArray(",G,");}");var Ye=_.type,rt;if(_.size?rt=x.def(_.size,"||",k):rt=k,x("if(",K,".type!==",Ye,"||",K,".size!==",rt,"||",Be.map(function(sr){return K+"."+sr+"!=="+_[sr]}).join("||"),"){",P,".bindBuffer(",Ka,",",Y,".buffer);",P,".vertexAttribPointer(",[G,rt,Ye,_.normalized,_.stride,_.offset],");",K,".type=",Ye,";",K,".size=",rt,";",Be.map(function(sr){return K+"."+sr+"="+_[sr]+";"}).join(""),"}"),pe){var St=_.divisor;x("if(",K,".divisor!==",St,"){",E.instancing,".vertexAttribDivisorANGLE(",[G,St],");",K,".divisor=",St,";}")}}function $e(){x("if(",K,".buffer){",P,".disableVertexAttribArray(",G,");",K,".buffer=null;","}if(",Wa.map(function(Ye,rt){return K+"."+Ye+"!=="+de[rt]}).join("||"),"){",P,".vertexAttrib4f(",G,",",de,");",Wa.map(function(Ye,rt){return K+"."+Ye+"="+de[rt]+";"}).join(""),"}")}Z===Va?it():Z===qc?$e():(x("if(",Z,"===",Va,"){"),it(),x("}else{"),$e(),x("}"))}O.forEach(function(M){var k=M.name,_=L.attributes[k],P;if(_){if(!F(_))return;P=_.append(E,x)}else{if(!F(Ih))return;var G=E.scopeAttrib(k);y.optional(function(){E.assert(x,G+".state","missing attribute "+k)}),P={},Object.keys(new N).forEach(function(K){P[K]=x.def(G,".",K)})}I(E.link(M),z(M.info.type),P)})}function Ct(E,x,L,O,F){for(var R=E.shared,z=R.gl,I,M=0;M<O.length;++M){var k=O[M],_=k.name,P=k.info.type,G=L.uniforms[_],K=E.link(k),Z=K+".location",Y;if(G){if(!F(G))continue;if(Ao(G)){var de=G.value;if(y.command(de!==null&&typeof de!="undefined",'missing uniform "'+_+'"',E.commandStr),P===Yi||P===Ki){y.command(typeof de=="function"&&(P===Yi&&(de._reglType==="texture2d"||de._reglType==="framebuffer")||P===Ki&&(de._reglType==="textureCube"||de._reglType==="framebufferCube")),"invalid texture for uniform "+_,E.commandStr);var Be=E.link(de._texture||de.color[0]._texture);x(z,".uniform1i(",Z,",",Be+".bind());"),x.exit(Be,".unbind();")}else if(P===Wi||P===Vi||P===Xi){y.optional(function(){y.command(fr(de),"invalid matrix for uniform "+_,E.commandStr),y.command(P===Wi&&de.length===4||P===Vi&&de.length===9||P===Xi&&de.length===16,"invalid length for matrix uniform "+_,E.commandStr)});var it=E.global.def("new Float32Array(["+Array.prototype.slice.call(de)+"])"),$e=2;P===Vi?$e=3:P===Xi&&($e=4),x(z,".uniformMatrix",$e,"fv(",Z,",false,",it,");")}else{switch(P){case nl:y.commandType(de,"number","uniform "+_,E.commandStr),I="1f";break;case n0:y.command(fr(de)&&de.length===2,"uniform "+_,E.commandStr),I="2f";break;case o0:y.command(fr(de)&&de.length===3,"uniform "+_,E.commandStr),I="3f";break;case a0:y.command(fr(de)&&de.length===4,"uniform "+_,E.commandStr),I="4f";break;case al:y.commandType(de,"boolean","uniform "+_,E.commandStr),I="1i";break;case ol:y.commandType(de,"number","uniform "+_,E.commandStr),I="1i";break;case l0:y.command(fr(de)&&de.length===2,"uniform "+_,E.commandStr),I="2i";break;case i0:y.command(fr(de)&&de.length===2,"uniform "+_,E.commandStr),I="2i";break;case f0:y.command(fr(de)&&de.length===3,"uniform "+_,E.commandStr),I="3i";break;case s0:y.command(fr(de)&&de.length===3,"uniform "+_,E.commandStr),I="3i";break;case u0:y.command(fr(de)&&de.length===4,"uniform "+_,E.commandStr),I="4i";break;case c0:y.command(fr(de)&&de.length===4,"uniform "+_,E.commandStr),I="4i";break}x(z,".uniform",I,"(",Z,",",fr(de)?Array.prototype.slice.call(de):de,");")}continue}else Y=G.append(E,x)}else{if(!F(Ih))continue;Y=x.def(R.uniforms,"[",b.id(_),"]")}P===Yi?(y(!Array.isArray(Y),"must specify a scalar prop for textures"),x("if(",Y,"&&",Y,'._reglType==="framebuffer"){',Y,"=",Y,".color[0];","}")):P===Ki&&(y(!Array.isArray(Y),"must specify a scalar prop for cube maps"),x("if(",Y,"&&",Y,'._reglType==="framebufferCube"){',Y,"=",Y,".color[0];","}")),y.optional(function(){function Qr(qn,$h){E.assert(x,qn,'bad data or missing for uniform "'+_+'".  '+$h)}function cl(qn){y(!Array.isArray(Y),"must not specify an array type for uniform"),Qr("typeof "+Y+'==="'+qn+'"',"invalid type, expected "+qn)}function kn(qn,$h){Array.isArray(Y)?y(Y.length===qn,"must have length "+qn):Qr(R.isArrayLike+"("+Y+")&&"+Y+".length==="+qn,"invalid vector, should have length "+qn,E.commandStr)}function Dh(qn){y(!Array.isArray(Y),"must not specify a value type"),Qr("typeof "+Y+'==="function"&&'+Y+'._reglType==="texture'+(qn===Eh?"2d":"Cube")+'"',"invalid texture type",E.commandStr)}switch(P){case ol:cl("number");break;case i0:kn(2,"number");break;case s0:kn(3,"number");break;case c0:kn(4,"number");break;case nl:cl("number");break;case n0:kn(2,"number");break;case o0:kn(3,"number");break;case a0:kn(4,"number");break;case al:cl("boolean");break;case l0:kn(2,"boolean");break;case f0:kn(3,"boolean");break;case u0:kn(4,"boolean");break;case Wi:kn(4,"number");break;case Vi:kn(9,"number");break;case Xi:kn(16,"number");break;case Yi:Dh(Eh);break;case Ki:Dh(qy);break}});var Ye=1;switch(P){case Yi:case Ki:var rt=x.def(Y,"._texture");x(z,".uniform1i(",Z,",",rt,".bind());"),x.exit(rt,".unbind();");continue;case ol:case al:I="1i";break;case i0:case l0:I="2i",Ye=2;break;case s0:case f0:I="3i",Ye=3;break;case c0:case u0:I="4i",Ye=4;break;case nl:I="1f";break;case n0:I="2f",Ye=2;break;case o0:I="3f",Ye=3;break;case a0:I="4f",Ye=4;break;case Wi:I="Matrix2fv";break;case Vi:I="Matrix3fv";break;case Xi:I="Matrix4fv";break}if(x(z,".uniform",I,"(",Z,","),I.charAt(0)==="M"){var St=Math.pow(P-Wi+2,2),sr=E.global.def("new Float32Array(",St,")");Array.isArray(Y)?x("false,(",Br(St,function(Qr){return sr+"["+Qr+"]="+Y[Qr]}),",",sr,")"):x("false,(Array.isArray(",Y,")||",Y," instanceof Float32Array)?",Y,":(",Br(St,function(Qr){return sr+"["+Qr+"]="+Y+"["+Qr+"]"}),",",sr,")")}else Ye>1?x(Br(Ye,function(Qr){return Array.isArray(Y)?Y[Qr]:Y+"["+Qr+"]"})):(y(!Array.isArray(Y),"uniform value must not be an array"),x(Y));x(");")}}function Xe(E,x,L,O){var F=E.shared,R=F.gl,z=F.draw,I=O.draw;function M(){var rt=I.elements,St,sr=x;return rt?((rt.contextDep&&O.contextDynamic||rt.propDep)&&(sr=L),St=rt.append(E,sr)):St=sr.def(z,".",ta),St&&sr("if("+St+")"+R+".bindBuffer("+Gy+","+St+".buffer.buffer);"),St}function k(){var rt=I.count,St,sr=x;return rt?((rt.contextDep&&O.contextDynamic||rt.propDep)&&(sr=L),St=rt.append(E,sr),y.optional(function(){rt.MISSING&&E.assert(x,"false","missing vertex count"),rt.DYNAMIC&&E.assert(sr,St+">=0","missing vertex count")})):(St=sr.def(z,".",na),y.optional(function(){E.assert(sr,St+">=0","missing vertex count")})),St}var _=M();function P(rt){var St=I[rt];return St?St.contextDep&&O.contextDynamic||St.propDep?St.append(E,L):St.append(E,x):x.def(z,".",rt)}var G=P(ra),K=P(t0),Z=k();if(typeof Z=="number"){if(Z===0)return}else L("if(",Z,"){"),L.exit("}");var Y,de;pe&&(Y=P(r0),de=E.instancing);var Be=_+".type",it=I.elements&&Ao(I.elements);function $e(){function rt(){L(de,".drawElementsInstancedANGLE(",[G,Z,Be,K+"<<(("+Be+"-"+rh+")>>1)",Y],");")}function St(){L(de,".drawArraysInstancedANGLE(",[G,K,Z,Y],");")}_?it?rt():(L("if(",_,"){"),rt(),L("}else{"),St(),L("}")):St()}function Ye(){function rt(){L(R+".drawElements("+[G,Z,Be,K+"<<(("+Be+"-"+rh+")>>1)"]+");")}function St(){L(R+".drawArrays("+[G,K,Z]+");")}_?it?rt():(L("if(",_,"){"),rt(),L("}else{"),St(),L("}")):St()}pe&&(typeof Y!="number"||Y>=0)?typeof Y=="string"?(L("if(",Y,">0){"),$e(),L("}else if(",Y,"<0){"),Ye(),L("}")):$e():Ye()}function ht(E,x,L,O,F){var R=Qe(),z=R.proc("body",F);return y.optional(function(){R.commandStr=x.commandStr,R.command=R.link(x.commandStr)}),pe&&(R.instancing=z.def(R.shared.extensions,".angle_instanced_arrays")),E(R,z,L,O),R.compile().body}function wt(E,x,L,O){ur(E,x),L.useVAO?L.drawVAO?x(E.shared.vao,".setVAO(",L.drawVAO.append(E,x),");"):x(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(x(E.shared.vao,".setVAO(null);"),$r(E,x,L,O.attributes,function(){return!0})),Ct(E,x,L,O.uniforms,function(){return!0}),Xe(E,x,x,L)}function hr(E,x){var L=E.proc("draw",1);ur(E,L),Ar(E,L,x.context),Tr(E,L,x.framebuffer),Rr(E,L,x),Dr(E,L,x.state),at(E,L,x,!1,!0);var O=x.shader.progVar.append(E,L);if(L(E.shared.gl,".useProgram(",O,".program);"),x.shader.program)wt(E,L,x,x.shader.program);else{L(E.shared.vao,".setVAO(null);");var F=E.global.def("{}"),R=L.def(O,".id"),z=L.def(F,"[",R,"]");L(E.cond(z).then(z,".call(this,a0);").else(z,"=",F,"[",R,"]=",E.link(function(I){return ht(wt,E,x,I,1)}),"(",O,");",z,".call(this,a0);"))}Object.keys(x.state).length>0&&L(E.shared.current,".dirty=true;")}function eo(E,x,L,O){E.batchId="a1",ur(E,x);function F(){return!0}$r(E,x,L,O.attributes,F),Ct(E,x,L,O.uniforms,F),Xe(E,x,x,L)}function aa(E,x,L,O){ur(E,x);var F=L.contextDep,R=x.def(),z="a0",I="a1",M=x.def();E.shared.props=M,E.batchId=R;var k=E.scope(),_=E.scope();x(k.entry,"for(",R,"=0;",R,"<",I,";++",R,"){",M,"=",z,"[",R,"];",_,"}",k.exit);function P(Be){return Be.contextDep&&F||Be.propDep}function G(Be){return!P(Be)}if(L.needsContext&&Ar(E,_,L.context),L.needsFramebuffer&&Tr(E,_,L.framebuffer),Dr(E,_,L.state,P),L.profile&&P(L.profile)&&at(E,_,L,!1,!0),O)L.useVAO?L.drawVAO?P(L.drawVAO)?_(E.shared.vao,".setVAO(",L.drawVAO.append(E,_),");"):k(E.shared.vao,".setVAO(",L.drawVAO.append(E,k),");"):k(E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"):(k(E.shared.vao,".setVAO(null);"),$r(E,k,L,O.attributes,G),$r(E,_,L,O.attributes,P)),Ct(E,k,L,O.uniforms,G),Ct(E,_,L,O.uniforms,P),Xe(E,k,_,L);else{var K=E.global.def("{}"),Z=L.shader.progVar.append(E,_),Y=_.def(Z,".id"),de=_.def(K,"[",Y,"]");_(E.shared.gl,".useProgram(",Z,".program);","if(!",de,"){",de,"=",K,"[",Y,"]=",E.link(function(Be){return ht(eo,E,L,Be,2)}),"(",Z,");}",de,".call(this,a0[",R,"],",R,");")}}function A(E,x){var L=E.proc("batch",2);E.batchId="0",ur(E,L);var O=!1,F=!0;Object.keys(x.context).forEach(function(K){O=O||x.context[K].propDep}),O||(Ar(E,L,x.context),F=!1);var R=x.framebuffer,z=!1;R?(R.propDep?O=z=!0:R.contextDep&&O&&(z=!0),z||Tr(E,L,R)):Tr(E,L,null),x.state.viewport&&x.state.viewport.propDep&&(O=!0);function I(K){return K.contextDep&&O||K.propDep}Rr(E,L,x),Dr(E,L,x.state,function(K){return!I(K)}),(!x.profile||!I(x.profile))&&at(E,L,x,!1,"a1"),x.contextDep=O,x.needsContext=F,x.needsFramebuffer=z;var M=x.shader.progVar;if(M.contextDep&&O||M.propDep)aa(E,L,x,null);else{var k=M.append(E,L);if(L(E.shared.gl,".useProgram(",k,".program);"),x.shader.program)aa(E,L,x,x.shader.program);else{L(E.shared.vao,".setVAO(null);");var _=E.global.def("{}"),P=L.def(k,".id"),G=L.def(_,"[",P,"]");L(E.cond(G).then(G,".call(this,a0,a1);").else(G,"=",_,"[",P,"]=",E.link(function(K){return ht(aa,E,x,K,2)}),"(",k,");",G,".call(this,a0,a1);"))}}Object.keys(x.state).length>0&&L(E.shared.current,".dirty=true;")}function W(E,x){var L=E.proc("scope",3);E.batchId="a2";var O=E.shared,F=O.current;Ar(E,L,x.context),x.framebuffer&&x.framebuffer.append(E,L),Rh(Object.keys(x.state)).forEach(function(z){var I=x.state[z],M=I.append(E,L);fr(M)?M.forEach(function(k,_){L.set(E.next[z],"["+_+"]",k)}):L.set(O.next,"."+z,M)}),at(E,L,x,!0,!0),[ta,t0,na,r0,ra].forEach(function(z){var I=x.draw[z];I&&L.set(O.draw,"."+z,""+I.append(E,L))}),Object.keys(x.uniforms).forEach(function(z){var I=x.uniforms[z].append(E,L);Array.isArray(I)&&(I="["+I.join()+"]"),L.set(O.uniforms,"["+b.id(z)+"]",I)}),Object.keys(x.attributes).forEach(function(z){var I=x.attributes[z].append(E,L),M=E.scopeAttrib(z);Object.keys(new N).forEach(function(k){L.set(M,"."+k,I[k])})}),x.scopeVAO&&L.set(O.vao,".targetVAO",x.scopeVAO.append(E,L));function R(z){var I=x.shader[z];I&&L.set(O.shader,"."+z,I.append(E,L))}R(Ui),R(Bi),Object.keys(x.state).length>0&&(L(F,".dirty=true;"),L.exit(F,".dirty=true;")),L("a1(",E.shared.context,",a0,",E.batchId,");")}function q(E){if(!(typeof E!="object"||fr(E))){for(var x=Object.keys(E),L=0;L<x.length;++L)if(Or.isDynamic(E[x[L]]))return!0;return!1}}function Ne(E,x,L){var O=x.static[L];if(!O||!q(O))return;var F=E.global,R=Object.keys(O),z=!1,I=!1,M=!1,k=E.global.def("{}");R.forEach(function(P){var G=O[P];if(Or.isDynamic(G)){typeof G=="function"&&(G=O[P]=Or.unbox(G));var K=fn(G,null);z=z||K.thisDep,M=M||K.propDep,I=I||K.contextDep}else{switch(F(k,".",P,"="),typeof G){case"number":F(G);break;case"string":F('"',G,'"');break;case"object":Array.isArray(G)&&F("[",G.join(),"]");break;default:F(E.link(G));break}F(";")}});function _(P,G){R.forEach(function(K){var Z=O[K];if(Or.isDynamic(Z)){var Y=P.invoke(G,Z);G(k,".",K,"=",Y,";")}})}x.dynamic[L]=new Or.DynamicVariable(Js,{thisDep:z,contextDep:I,propDep:M,ref:k,append:_}),delete x.static[L]}function ut(E,x,L,O,F){var R=Qe();R.stats=R.link(F),Object.keys(x.static).forEach(function(I){Ne(R,x,I)}),Fy.forEach(function(I){Ne(R,E,I)});var z=br(E,x,L,O,R);return hr(R,z),W(R,z),A(R,z),t(R.compile(),{destroy:function(){z.shader.program.destroy()}})}return{next:Pe,current:te,procs:function(){var E=Qe(),x=E.proc("poll"),L=E.proc("refresh"),O=E.block();x(O),L(O);var F=E.shared,R=F.gl,z=F.next,I=F.current;O(I,".dirty=false;"),Tr(E,x),Tr(E,L,null,!0);var M;pe&&(M=E.link(pe)),S.oes_vertex_array_object&&L(E.link(S.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var k=0;k<j.maxAttributes;++k){var _=L.def(F.attributes,"[",k,"]"),P=E.cond(_,".buffer");P.then(R,".enableVertexAttribArray(",k,");",R,".bindBuffer(",Ka,",",_,".buffer.buffer);",R,".vertexAttribPointer(",k,",",_,".size,",_,".type,",_,".normalized,",_,".stride,",_,".offset);").else(R,".disableVertexAttribArray(",k,");",R,".vertexAttrib4f(",k,",",_,".x,",_,".y,",_,".z,",_,".w);",_,".buffer=null;"),L(P),pe&&L(M,".vertexAttribDivisorANGLE(",k,",",_,".divisor);")}return L(E.shared.vao,".currentVAO=null;",E.shared.vao,".setVAO(",E.shared.vao,".targetVAO);"),Object.keys(_e).forEach(function(G){var K=_e[G],Z=O.def(z,".",G),Y=E.block();Y("if(",Z,"){",R,".enable(",K,")}else{",R,".disable(",K,")}",I,".",G,"=",Z,";"),L(Y),x("if(",Z,"!==",I,".",G,"){",Y,"}")}),Object.keys(re).forEach(function(G){var K=re[G],Z=te[G],Y,de,Be=E.block();if(Be(R,".",K,"("),fr(Z)){var it=Z.length;Y=E.global.def(z,".",G),de=E.global.def(I,".",G),Be(Br(it,function($e){return Y+"["+$e+"]"}),");",Br(it,function($e){return de+"["+$e+"]="+Y+"["+$e+"];"}).join("")),x("if(",Br(it,function($e){return Y+"["+$e+"]!=="+de+"["+$e+"]"}).join("||"),"){",Be,"}")}else Y=O.def(z,".",G),de=O.def(I,".",G),Be(Y,");",I,".",G,"=",Y,";"),x("if(",Y,"!==",de,"){",Be,"}");L(Be)}),E.compile()}(),compile:ut}}function nx(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var ox=34918,ax=34919,Ph=35007,ix=function(l,b){if(!b.ext_disjoint_timer_query)return null;var S=[];function j(){return S.pop()||b.ext_disjoint_timer_query.createQueryEXT()}function Q(pe){S.push(pe)}var U=[];function V(pe){var Re=j();b.ext_disjoint_timer_query.beginQueryEXT(Ph,Re),U.push(Re),se(U.length-1,U.length,pe)}function ie(){b.ext_disjoint_timer_query.endQueryEXT(Ph)}function le(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var me=[];function fe(){return me.pop()||new le}function ye(pe){me.push(pe)}var Te=[];function se(pe,Re,te){var Pe=fe();Pe.startQueryIndex=pe,Pe.endQueryIndex=Re,Pe.sum=0,Pe.stats=te,Te.push(Pe)}var we=[],N=[];function X(){var pe,Re,te=U.length;if(te!==0){N.length=Math.max(N.length,te+1),we.length=Math.max(we.length,te+1),we[0]=0,N[0]=0;var Pe=0;for(pe=0,Re=0;Re<U.length;++Re){var ne=U[Re];b.ext_disjoint_timer_query.getQueryObjectEXT(ne,ax)?(Pe+=b.ext_disjoint_timer_query.getQueryObjectEXT(ne,ox),Q(ne)):U[pe++]=ne,we[Re+1]=Pe,N[Re+1]=pe}for(U.length=pe,pe=0,Re=0;Re<Te.length;++Re){var _e=Te[Re],re=_e.startQueryIndex,Ee=_e.endQueryIndex;_e.sum+=we[Ee]-we[re];var We=N[re],Je=N[Ee];Je===We?(_e.stats.gpuTime+=_e.sum/1e6,ye(_e)):(_e.startQueryIndex=We,_e.endQueryIndex=Je,Te[pe++]=_e)}Te.length=pe}}return{beginQuery:V,endQuery:ie,pushScopeStats:se,update:X,getNumPendingQueries:function(){return U.length},clear:function(){S.push.apply(S,U);for(var pe=0;pe<S.length;pe++)b.ext_disjoint_timer_query.deleteQueryEXT(S[pe]);U.length=0,S.length=0},restore:function(){U.length=0,S.length=0}}},sx=16384,cx=256,lx=1024,fx=34962,Oh="webglcontextlost",Nh="webglcontextrestored",Fh=1,ux=2,hx=3;function Gh(l,b){for(var S=0;S<l.length;++S)if(l[S]===b)return S;return-1}function dx(l){var b=uc(l);if(!b)return null;var S=b.gl,j=S.getContextAttributes(),Q=S.isContextLost(),U=Is(S,b);if(!U)return null;var V=Yn(),ie=nx(),le=U.extensions,me=ix(S,le),fe=so(),ye=S.drawingBufferWidth,Te=S.drawingBufferHeight,se={tick:0,time:0,viewportWidth:ye,viewportHeight:Te,framebufferWidth:ye,framebufferHeight:Te,drawingBufferWidth:ye,drawingBufferHeight:Te,pixelRatio:b.pixelRatio},we={},N={elements:null,primitive:4,count:-1,offset:0,instances:-1},X=Z2(S,le),pe=pg(S,ie,b,te),Re=Ty(S,le,X,ie,pe);function te(Xe){return Re.destroyBuffer(Xe)}var Pe=Tg(S,le,pe,ie),ne=zy(S,V,ie,b),_e=ny(S,le,X,function(){We.procs.poll()},se,ie,b),re=oy(S,le,X,ie,b),Ee=My(S,le,X,_e,re,ie),We=rx(S,V,le,X,pe,Pe,_e,Ee,we,Re,ne,N,se,me,b),Je=Iy(S,Ee,We.procs.poll,se,j,le,X),Se=We.next,ve=S.canvas,ee=[],Qe=[],ot=[],De=[b.onDestroy],ft=null;function tt(){if(ee.length===0){me&&me.update(),ft=null;return}ft=Gn.next(tt),Dr();for(var Xe=ee.length-1;Xe>=0;--Xe){var ht=ee[Xe];ht&&ht(se,null,0)}S.flush(),me&&me.update()}function ct(){!ft&&ee.length>0&&(ft=Gn.next(tt))}function Tt(){ft&&(Gn.cancel(tt),ft=null)}function xr(Xe){Xe.preventDefault(),Q=!0,Tt(),Qe.forEach(function(ht){ht()})}function Sr(Xe){S.getError(),Q=!1,U.restore(),ne.restore(),pe.restore(),_e.restore(),re.restore(),Ee.restore(),Re.restore(),me&&me.restore(),We.procs.refresh(),ct(),ot.forEach(function(ht){ht()})}ve&&(ve.addEventListener(Oh,xr,!1),ve.addEventListener(Nh,Sr,!1));function vt(){ee.length=0,Tt(),ve&&(ve.removeEventListener(Oh,xr),ve.removeEventListener(Nh,Sr)),ne.clear(),Ee.clear(),re.clear(),_e.clear(),Pe.clear(),pe.clear(),Re.clear(),me&&me.clear(),De.forEach(function(Xe){Xe()})}function Mr(Xe){y(!!Xe,"invalid args to regl({...})"),y.type(Xe,"object","invalid args to regl({...})");function ht(F){var R=t({},F);delete R.uniforms,delete R.attributes,delete R.context,delete R.vao,"stencil"in R&&R.stencil.op&&(R.stencil.opBack=R.stencil.opFront=R.stencil.op,delete R.stencil.op);function z(I){if(I in R){var M=R[I];delete R[I],Object.keys(M).forEach(function(k){R[I+"."+k]=M[k]})}}return z("blend"),z("depth"),z("cull"),z("stencil"),z("polygonOffset"),z("scissor"),z("sample"),"vao"in F&&(R.vao=F.vao),R}function wt(F,R){var z={},I={};return Object.keys(F).forEach(function(M){var k=F[M];if(Or.isDynamic(k)){I[M]=Or.unbox(k,M);return}else if(R&&Array.isArray(k)){for(var _=0;_<k.length;++_)if(Or.isDynamic(k[_])){I[M]=Or.unbox(k,M);return}}z[M]=k}),{dynamic:I,static:z}}var hr=wt(Xe.context||{},!0),eo=wt(Xe.uniforms||{},!0),aa=wt(Xe.attributes||{},!1),A=wt(ht(Xe),!1),W={gpuTime:0,cpuTime:0,count:0},q=We.compile(A,aa,eo,hr,W),Ne=q.draw,ut=q.batch,E=q.scope,x=[];function L(F){for(;x.length<F;)x.push(null);return x}function O(F,R){var z;if(Q&&y.raise("context lost"),typeof F=="function")return E.call(this,null,F,0);if(typeof R=="function")if(typeof F=="number")for(z=0;z<F;++z)E.call(this,null,R,z);else if(Array.isArray(F))for(z=0;z<F.length;++z)E.call(this,F[z],R,z);else return E.call(this,F,R,0);else if(typeof F=="number"){if(F>0)return ut.call(this,L(F|0),F|0)}else if(Array.isArray(F)){if(F.length)return ut.call(this,F,F.length)}else return Ne.call(this,F)}return t(O,{stats:W,destroy:function(){q.destroy()}})}var Vt=Ee.setFBO=Mr({framebuffer:Or.define.call(null,Fh,"framebuffer")});function br(Xe,ht){var wt=0;We.procs.poll();var hr=ht.color;hr&&(S.clearColor(+hr[0]||0,+hr[1]||0,+hr[2]||0,+hr[3]||0),wt|=sx),"depth"in ht&&(S.clearDepth(+ht.depth),wt|=cx),"stencil"in ht&&(S.clearStencil(ht.stencil|0),wt|=lx),y(!!wt,"called regl.clear with no buffer specified"),S.clear(wt)}function Ar(Xe){if(y(typeof Xe=="object"&&Xe,"regl.clear() takes an object as input"),"framebuffer"in Xe)if(Xe.framebuffer&&Xe.framebuffer_reglType==="framebufferCube")for(var ht=0;ht<6;++ht)Vt(t({framebuffer:Xe.framebuffer.faces[ht]},Xe),br);else Vt(Xe,br);else br(null,Xe)}function Tr(Xe){y.type(Xe,"function","regl.frame() callback must be a function"),ee.push(Xe);function ht(){var wt=Gh(ee,Xe);y(wt>=0,"cannot cancel a frame twice");function hr(){var eo=Gh(ee,hr);ee[eo]=ee[ee.length-1],ee.length-=1,ee.length<=0&&Tt()}ee[wt]=hr}return ct(),{cancel:ht}}function Rr(){var Xe=Se.viewport,ht=Se.scissor_box;Xe[0]=Xe[1]=ht[0]=ht[1]=0,se.viewportWidth=se.framebufferWidth=se.drawingBufferWidth=Xe[2]=ht[2]=S.drawingBufferWidth,se.viewportHeight=se.framebufferHeight=se.drawingBufferHeight=Xe[3]=ht[3]=S.drawingBufferHeight}function Dr(){se.tick+=1,se.time=at(),Rr(),We.procs.poll()}function ur(){_e.refresh(),Rr(),We.procs.refresh(),me&&me.update()}function at(){return(so()-fe)/1e3}ur();function $r(Xe,ht){y.type(ht,"function","listener callback must be a function");var wt;switch(Xe){case"frame":return Tr(ht);case"lost":wt=Qe;break;case"restore":wt=ot;break;case"destroy":wt=De;break;default:y.raise("invalid event, must be one of frame,lost,restore,destroy")}return wt.push(ht),{cancel:function(){for(var hr=0;hr<wt.length;++hr)if(wt[hr]===ht){wt[hr]=wt[wt.length-1],wt.pop();return}}}}var Ct=t(Mr,{clear:Ar,prop:Or.define.bind(null,Fh),context:Or.define.bind(null,ux),this:Or.define.bind(null,hx),draw:Mr({}),buffer:function(Xe){return pe.create(Xe,fx,!1,!1)},elements:function(Xe){return Pe.create(Xe,!1)},texture:_e.create2D,cube:_e.createCube,renderbuffer:re.create,framebuffer:Ee.create,framebufferCube:Ee.createCube,vao:Re.createVAO,attributes:j,frame:Tr,on:$r,limits:X,hasExtension:function(Xe){return X.extensions.indexOf(Xe.toLowerCase())>=0},read:Je,destroy:vt,_gl:S,_refresh:ur,poll:function(){Dr(),me&&me.update()},now:at,stats:ie});return b.onDone(null,Ct),Ct}return dx})});var ia=ue((E4,ad)=>{"use strict";var uo=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],ho=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ro=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],g0=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],ts=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],vl=e=>Math.hypot(e[0],e[1],e[2]),Ln=e=>{let t=vl(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function Za(e,t){let r=e.length-1,n=Math.min(Math.max(t,0),1)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],h=[0,0,0];for(let p=0;p<3;p++)h[p]=.5*(2*s[p]+(-i[p]+c[p])*a+(2*i[p]-5*s[p]+4*c[p]-f[p])*a*a+(-i[p]+3*s[p]-3*c[p]+f[p])*a*a*a);return h}function Mx(e,t){return Za(e.map(r=>[r,0,0]),t)[0]}function Ax(e,t,r,n){let o={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];o.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},o.restore=()=>{i=s.pop()};let c=(u,v)=>{let g=new Array(9);for(let d=0;d<3;d++)for(let m=0;m<3;m++)g[d*3+m]=u[d*3]*v[m]+u[d*3+1]*v[3+m]+u[d*3+2]*v[6+m];return g},f=u=>[i.r[0]*u[0]+i.r[1]*u[1]+i.r[2]*u[2],i.r[3]*u[0]+i.r[4]*u[1]+i.r[5]*u[2],i.r[6]*u[0]+i.r[7]*u[1]+i.r[8]*u[2]];o.translate=(u,v,g)=>{let d=f([u,v,g]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},o.scale=u=>{i.s*=u},o.rotateY=u=>{let v=Math.cos(u),g=Math.sin(u);i.r=c(i.r,[v,0,g,0,1,0,-g,0,v])},o.vert=(u,v,g)=>{let d=g||o.curMat,m=f(u),w=Ln(f(v));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(w[0],w[1],w[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let h=u=>[e[u*3],e[u*3+1],e[u*3+2]],p=u=>[t[u*3],t[u*3+1],t[u*3+2]];return o.tri=(u,v,g)=>{let d=h(u),m=ts(uo(h(v),d),uo(h(g),d)),w=ho(ho(p(u),p(v)),p(g));g0(m,w)<0?r.push(u,g,v):r.push(u,v,g)},o.box=(u,v,g,d,m,w,T)=>{let C=[[[u,v,g],[d,v,g],[u,m,g],[d,m,g],[0,0,-1]],[[d,v,w],[u,v,w],[d,m,w],[u,m,w],[0,0,1]],[[u,v,w],[u,v,g],[u,m,w],[u,m,g],[-1,0,0]],[[d,v,g],[d,v,w],[d,m,g],[d,m,w],[1,0,0]],[[u,m,g],[d,m,g],[u,m,w],[d,m,w],[0,1,0]],[[u,v,w],[d,v,w],[u,v,g],[d,v,g],[0,-1,0]]];for(let D of C){let $=o.vert(D[0],D[4],T),H=o.vert(D[1],D[4],T),oe=o.vert(D[2],D[4],T),xe=o.vert(D[3],D[4],T);o.tri($,H,oe),o.tri(H,xe,oe)}},o.surface=(u,v,g,d)=>{d=d||{};let m=.001,w=$=>Math.min(1,Math.max(0,$)),T=[],C=[];for(let $=0;$<=v;$++){let H=[],oe=[];for(let xe=0;xe<=g;xe++){let J=$/v,be=xe/g,he=u(J,be),Ge=Math.min(1-m,Math.max(m,J)),Ie=d.wrapV?be:Math.min(1-m,Math.max(m,be)),Ce=uo(u(w(Ge+m),Ie),u(w(Ge-m),Ie)),ge=d.wrapV?Ie+m:w(Ie+m),nt=d.wrapV?Ie-m:w(Ie-m),Yt=uo(u(Ge,ge),u(Ge,nt)),st=ts(Ce,Yt);vl(st)<1e-14&&(st=d.inside?uo(he,d.inside(J,be)):[0,1,0]),st=Ln(st),d.inside&&g0(st,uo(he,d.inside(J,be)))<0&&(st=ro(st,-1));let Bt=d.mat?d.mat(J,be,he):null;H.push(o.vert(he,st,Bt)),d.double&&oe.push(o.vert(he,ro(st,-1),Bt))}T.push(H),C.push(oe)}let D=$=>{for(let H=0;H<v;H++)for(let oe=0;oe<g;oe++){let xe=$[H][oe],J=$[H+1][oe],be=$[H][oe+1],he=$[H+1][oe+1];o.tri(xe,J,be),o.tri(J,he,be)}};D(T),d.double&&D(C)},o.ellipsoid=(u,v,g,d,m)=>{m=m||{};let w=m.warp||null;o.surface((T,C)=>{let D=T*Math.PI,$=C*Math.PI*2,H=w?w(T,C):1;return[u[0]+v[0]*H*Math.sin(D)*Math.cos($),u[1]+v[1]*H*Math.cos(D),u[2]+v[2]*H*Math.sin(D)*Math.sin($)]},g||10,d||14,{wrapV:!0,inside:()=>u,mat:m.mat})},o.tube=(u,v,g,d,m)=>{m=m||{};let w=40,T=[],C=null;for(let H=0;H<=w;H++){let oe=H/w,xe=Za(u,Math.max(0,oe-.01)),J=Za(u,Math.min(1,oe+.01)),be=Ln(uo(J,xe)),he;if(C)he=Ln(uo(C,ro(be,g0(C,be))));else{let Ge=Math.abs(be[1])<.9?[0,1,0]:[1,0,0];he=Ln(ts(be,Ge))}T.push({N:he,B:Ln(ts(be,he))}),C=he}let D=H=>{let oe=Math.min(Math.max(H,0),1)*w,xe=Math.min(w-1,Math.floor(oe)),J=oe-xe,be=T[xe],he=T[xe+1];return{N:Ln(ho(ro(be.N,1-J),ro(he.N,J))),B:Ln(ho(ro(be.B,1-J),ro(he.B,J)))}},$=m.squash||[1,1];o.surface((H,oe)=>{let xe=Za(u,H),J=D(H),be=v(H),he=oe*Math.PI*2;return ho(xe,ho(ro(J.N,Math.cos(he)*be*$[0]),ro(J.B,Math.sin(he)*be*$[1])))},g||12,d||8,{wrapV:!0,inside:H=>Za(u,H),mat:m.mat})},o.lathe=(u,v,g,d,m)=>{m=m||{};let w=[];for(let T=0;T<u.length-1;T++){let C=u[T+1][0]-u[T][0],D=u[T+1][1]-u[T][1];w.push(Ln([D,-C,0]))}for(let T=0;T<u.length-1;T++){let C=u[T],D=u[T+1],$=T===0||C[2]===1,H=T===u.length-2||D[2]===1,oe=$?w[T]:Ln(ho(w[T-1],w[T])),xe=H?w[T]:Ln(ho(w[T],w[T+1])),J=[],be=[];for(let he=0;he<=d;he++){let Ge=he/d*Math.PI*2,Ie=Math.cos(Ge),Ce=Math.sin(Ge),ge=m.mat?m.mat(Ge,C[1]):null,nt=m.mat?m.mat(Ge,D[1]):null;J.push(o.vert([v+C[0]*Ie,C[1],g+C[0]*Ce],[oe[0]*Ie,oe[1],oe[0]*Ce],ge)),be.push(o.vert([v+D[0]*Ie,D[1],g+D[0]*Ce],[xe[0]*Ie,xe[1],xe[0]*Ce],nt))}for(let he=0;he<d;he++)o.tri(J[he],J[he+1],be[he]),o.tri(J[he+1],be[he+1],be[he])}},o}ad.exports={createBuilder:Ax,catmull:Za,curve1:Mx,sub:uo,add:ho,mul:ro,dot:g0,cross:ts,norm:Ln,len:vl}});var ld=ue((M4,cd)=>{"use strict";var{norm:y0,add:x0,mul:ko,sub:Tx,cross:id}=ia(),sd=Math.PI*2,Sx=(e,t,r)=>{let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)};function kx(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function Lx(e,t,r,n,o,a){let i=(u,v)=>[7,u*a,v];e.curMat=[0,0,0],e.box(t-a*1.36,n,r-a*1.36,t+a*1.36,n+.22,r+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,r,56,{mat:i});let s=n+.55,c=o-s,f=20,h=6,p=a*.075;return e.surface((u,v)=>{let g=s+u*c,d=a*(.96-.12*u),m=v*sd,w=v*f%1,T=d-p*4*w*(1-w);return[t+T*Math.cos(m),g,r+T*Math.sin(m)]},10,f*h,{wrapV:!0,inside:u=>[t,s+u*c,r],mat:(u,v)=>[7,v*sd*a,s+u*c]}),e.lathe([[a*.8,o-.02,1],[a*.9,o+.02],[a*.9,o+.07,1],[a*.82,o+.09,1],[a*.86,o+.13],[a*1.06,o+.2],[a*1.22,o+.28],[a*1.28,o+.33,1]],t,r,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,o+.33,r-a*1.42,t+a*1.42,o+.53,r+a*1.42),o+.53}function zx(e,t,r){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,r*.14,1],[t*1.04,r*.14,1],[t*1.04,r*.2],[t*.97,r*.26,1],[t*.95,r*.26,1],[t*.95,r*.8,1],[t*.98,r*.8,1],[t*1.03,r*.86],[t*1.05,r*.92,1],[t*1.05,r,1],[t*.5,r,1],[0,r]],0,0,72)}function Cx(e,t,r,n,o){e.save(),e.translate(t,0,r),zx(e,n,o),e.restore()}function Rx(e,t,r,n,o,a){let i=kx(n),s=a?y0([a[0],0,a[1]]):null;e.save(),e.translate(t,0,r),e.scale(o||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let h=0;h<c;h++){let p=h>=c-2,u=h*2.399963+i()*.5,v=[Math.cos(u),0,Math.sin(u)],g=[-Math.sin(u),0,Math.cos(u)],d=h*.618%1,m=p?.06+i()*.06:.12+.62*d,w=1;if(s){let st=v[0]*s[0]+v[2]*s[2];w=.25+.75*Sx(-.7,.5,st),m*=w}let T=p?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,C=p?1+i()*.2:.95+i()*.28,D=p?.055:.215+i()*.05,$=.04+i()*.05,H=[v[0]*$,f,v[2]*$],oe=[H[0]+v[0]*Math.sin(m)*T*.92,H[1]+Math.cos(m)*T,H[2]+v[2]*Math.sin(m)*T*.92],xe=[H[0]+v[0]*Math.sin(m*.5)*T*.45,H[1]+T*.5,H[2]+v[2]*Math.sin(m*.5)*T*.45];e.curMat=[4,0,0],e.tube([H,xe,oe],st=>.02-.008*st,8,7);let J=24,be=m*.9+.05,he=m+(p?.12:(.95+.45*d)*(.35+.65*w)),Ge=[oe],Ie=[],Ce=oe;for(let st=0;st<J;st++){let Bt=st/J,Rt=be+(he-be)*Bt*Bt,lr=[v[0]*Math.sin(Rt),Math.cos(Rt),v[2]*Math.sin(Rt)];Ie.push(lr),Ce=x0(Ce,ko(lr,C/J)),Ge.push(Ce)}Ie.push(Ie[Ie.length-1]);let ge=st=>{let Bt=st*J,Rt=Math.min(J-1,Math.floor(Bt)),lr=Bt-Rt;return x0(ko(Ge[Rt],1-lr),ko(Ge[Rt+1],lr))},nt=st=>{let Bt=st*J,Rt=Math.min(J,Math.floor(Bt)),lr=Math.min(J,Rt+1),ir=Bt-Rt;return y0(x0(ko(Ie[Rt],1-ir),ko(Ie[lr],ir)))},Yt=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((st,Bt)=>{let Rt=Bt*2-1,lr=ge(st),ir=nt(st),Mn=Yt*st,Cr=x0(ko(g,Math.cos(Mn)),ko(id(ir,g),Math.sin(Mn)));Cr=y0(Tx(Cr,ko(ir,Cr[0]*ir[0]+Cr[1]*ir[1]+Cr[2]*ir[2])));let Vr=y0(id(Cr,ir)),sn=D*Math.pow(Math.sin(Math.PI*Math.pow(st,.72)),.85),Xn=.3*sn*Math.abs(Rt)+.012*Math.sin(st*40+Rt*2)*Math.abs(Rt)*(p?0:1),je=-.1*sn*Rt*Rt*Rt*Rt,Ue=Xn+je;return[lr[0]+Cr[0]*Rt*sn+Vr[0]*Ue,lr[1]+Cr[1]*Rt*sn+Vr[1]*Ue,lr[2]+Cr[2]*Rt*sn+Vr[2]*Ue]},14,8,{double:!0,mat:(st,Bt)=>[2,Bt*2-1,st]})}e.restore()}cd.exports={addFlutedColumn:Lx,addStatue:Cx,addPlant:Rx}});var sa=ue((A4,dd)=>{"use strict";var ce={xc:7,r:2.5,spring:4.7};ce.x0=ce.xc-ce.r;ce.x1=ce.xc+ce.r;ce.top=ce.spring+ce.r;var en=.06,tr=.1,fd=.08,b0=ce.r,w0=[ce.x0+b0/3,ce.x0+2*b0/3,ce.xc+b0/3,ce.xc+2*b0/3],Ja=.28,gl=[.95,1.65,2.35,3.05,3.75],ud=[1.05,1.8],rs=[8,0,0],gn=[0,0,0];function zn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function ei(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function _0(e,t,r,n,o,a,i=48,s=0,c=Math.PI){let f=(h,p,u)=>[ce.xc+p*Math.cos(h),ce.spring+p*Math.sin(h),u];for(let h=0;h<i;h++){let p=s+(c-s)*h/i,u=s+(c-s)*(h+1)/i,v=(p+u)/2;ei(e,f(p,t,o),f(u,t,o),f(u,r,o),f(p,r,o),[0,0,1],a),ei(e,f(p,r,n),f(u,r,n),f(u,t,n),f(p,t,n),[0,0,-1],a),ei(e,f(p,t,n),f(u,t,n),f(u,t,o),f(p,t,o),[-Math.cos(v),-Math.sin(v),0],a),ei(e,f(u,r,n),f(p,r,n),f(p,r,o),f(u,r,o),[Math.cos(v),Math.sin(v),0],a)}}function Ix(e){let n=a=>[ce.xc+ce.r*Math.cos(a),ce.spring+ce.r*Math.sin(a)],o=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?ce.r/Math.abs(i):1/0,f=s>1e-6?(8-ce.spring)/s:1/0,h=Math.min(c,f);return[Math.min(ce.x1,Math.max(ce.x0,ce.xc+i*h)),Math.min(8,ce.spring+s*h)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),h=o(i),p=o(s);for(let[v,g]of[[.35,1],[-.35,-1]])ei(e,[c[0],c[1],v],[f[0],f[1],v],[p[0],p[1],v],[h[0],h[1],v],[0,0,g],gn);let u=(i+s)/2;ei(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],gn)}}function Px(e){zn(e,-.35,0,-.35,ce.x0,8,.35,gn),zn(e,ce.x1,0,-.35,14+.35,8,.35,gn),Ix(e),hd(e)}function hd(e){zn(e,ce.x0-.32,.3,.35,ce.x0,ce.spring,.35+.07,gn),zn(e,ce.x1,.3,.35,ce.x1+.32,ce.spring,.35+.07,gn),zn(e,ce.x0-.32-.05,0,.35,ce.x0,.3,.35+.07+.04,gn),zn(e,ce.x1,0,.35,ce.x1+.32+.05,.3,.35+.07+.04,gn),zn(e,ce.x0-.32-.06,ce.spring-.12,.35,ce.x0,ce.spring,.35+.07+.05,gn),zn(e,ce.x1,ce.spring-.12,.35,ce.x1+.32+.06,ce.spring,.35+.07+.05,gn),_0(e,ce.r,ce.r+.32,.35,.35+.07,gn),_0(e,ce.r+.32,ce.r+.32+.06,.35,.35+.07+.03,gn),zn(e,ce.xc-.22,ce.top-.08,.35,ce.xc+.22,ce.top+.32+.12,.35+.07+.06,gn)}function Ox(e,t){t=t||"all";let r=t==="all",n=r||t==="fixed",o=-fd/2,a=fd/2,i=(u,v,g,d,m=0)=>zn(e,u-m,v,o,g+m,d,a,rs),s=u=>ce.spring+Math.sqrt(Math.max(0,ce.r*ce.r-(u-ce.xc)*(u-ce.xc))),c=t==="right"?ce.xc:ce.x0,f=t==="left"?ce.xc:ce.x1,h=u=>r||t==="left"&&u<ce.xc||t==="right"&&u>ce.xc,p=r?null:ce.spring-.06;if(n){i(ce.x0,0,ce.x0+tr,ce.spring),i(ce.x1-tr,0,ce.x1,ce.spring),_0(e,ce.r-tr,ce.r,o,a,rs,64),i(ce.x0,0,ce.x1,.05),i(ce.x0,ce.spring-.06,ce.x1,ce.spring+.06);for(let u of ud)_0(e,u-en/2,u+en/2,o,a,rs,48)}if(r){i(ce.x0,0,ce.x1,Ja),i(ce.xc-tr/2,0,ce.xc+tr/2,ce.top-tr*.5);for(let u of w0)i(u-en/2,Ja,u+en/2,s(u)-tr*.5);for(let u of gl)i(ce.x0,u-en/2,ce.x1,u+en/2)}else if(t==="fixed"){i(ce.xc-tr/2,ce.spring+.06,ce.xc+tr/2,ce.top-tr*.5);for(let u of w0)i(u-en/2,ce.spring+.06,u+en/2,s(u)-tr*.5)}else{let u=t==="left"?ce.x0+tr:ce.x1-tr;i(Math.min(u,u+(t==="left"?tr*.8:-tr*.8)),.05,Math.max(u,u+(t==="left"?tr*.8:-tr*.8)),p),i(c,.05,f,Ja),i(c,p-.07,f,p);let v=t==="left"?ce.xc-tr/2:ce.xc;i(v,.05,v+tr/2,p);for(let g of w0)h(g)&&i(g-en/2,Ja,g+en/2,p-.07);for(let g of gl)i(c,g-en/2,f,g+en/2)}for(let u of[-1,1]){let v=ce.xc+u*.16;h(v)&&(zn(e,v-.02,1.05,a,v+.02,1.13,a+.06,rs),zn(e,v-(u>0?0:.14),1.07,a+.05,v+(u>0?.14:0),1.11,a+.08,rs))}}function Nx(e){e=e||"all";let t=[],r=0,{x0:n,x1:o,xc:a,r:i,spring:s}=ce;if(e!=="fixed"){let f=e==="right"?a:n,h=e==="left"?a:o;if(t.push([f,0,r],[h,0,r],[h,s,r],[f,0,r],[h,s,r],[f,s,r]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let h=Math.PI*f/c,p=Math.PI*(f+1)/c;t.push([a,s,r],[a+i*Math.cos(h),s+i*Math.sin(h),r],[a+i*Math.cos(p),s+i*Math.sin(p),r])}return t}var Nt=e=>e.toFixed(4);function Fx(){let e=w0.map(n=>`vb = max(vb, barCover(abs(q.x - ${Nt(n)}), ${Nt(en/2)}, soft));`).join(`
		`),t=gl.map(n=>`hb = max(hb, barCover(abs(q.y - ${Nt(n)}), ${Nt(en/2)}, soft));`).join(`
		`),r=ud.map(n=>`ab = max(ab, barCover(abs(rr - ${Nt(n)}), ${Nt(en/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Nt(ce.x0)} - soft, ${Nt(ce.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Nt(ce.x1)} - soft, ${Nt(ce.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Nt(ce.xc)}, ${Nt(ce.spring)}));
		float arch = q.y < ${Nt(ce.spring)} ? 1.0 : 1.0 - smoothstep(${Nt(ce.r)} - soft, ${Nt(ce.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Nt(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Nt(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Nt(ce.xc)}, ${Nt(ce.spring)}));
		float vb = barCover(abs(q.x - ${Nt(ce.xc)}), ${Nt(tr/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Nt(ce.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Nt(Ja)} - soft, ${Nt(Ja)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Nt(ce.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${r}
		ab = q.y > ${Nt(ce.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Nt(ce.x0+tr/2)}), ${Nt(tr/2)}, soft),
			barCover(abs(q.x - ${Nt(ce.x1-tr/2)}), ${Nt(tr/2)}, soft));
		frame = q.y < ${Nt(ce.spring)} ? frame : barCover(abs(rr - ${Nt(ce.r-tr/2)}), ${Nt(tr/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}dd.exports={addEntranceWall:Px,addSurround:hd,addFrames:Ox,glassPanes:Nx,doorLightGLSL:Fx,DOOR:ce,WALL:.35}});var ri=ue((T4,xd)=>{"use strict";var la=1.1583333333333334,fa=(13.05-8*.16)/9,xl=la+.16,bl=fa+.16,po=14/2-7.75/2,Cn=15,ns=po+7.75,Lo=Cn+13.05,yn=.3,mo={y:8+.18,inset:.15},ca={y:8+.36,inset:yn},wl=8+.2,E0=8+.62,_l=8+.9,El=.016,gd=.28,yd=.66,Gx=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>r/t)})(),Dx=[9,0,0],qr=[10,0,0];function ti(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function tn(e,t,r,n,o,a,i){ti(e,[t,a,r],[n,a,r],[n,a,o],[t,a,o],[0,-1,0],i)}function yl(e,t,r,n,o,a,i,s){ti(e,[t,a,r],[n,a,r],[n,i,r],[t,i,r],[0,0,1],s),ti(e,[n,a,o],[t,a,o],[t,i,o],[n,i,o],[0,0,-1],s),ti(e,[t,a,o],[t,a,r],[t,i,r],[t,i,o],[1,0,0],s),ti(e,[n,a,r],[n,a,o],[n,i,o],[n,i,r],[-1,0,0],s)}function pd(e,t,r,n,o){tn(e,t[0],t[1],t[2],r[1],n,o),tn(e,t[0],r[3],t[2],t[3],n,o),tn(e,t[0],r[1],r[0],r[3],n,o),tn(e,r[2],r[1],t[2],r[3],n,o)}var md=e=>po+e*xl,vd=e=>Cn+e*bl;function $x(e,t,r=48){let n=[po-yn,Cn-yn,ns+yn,Lo+yn],o=(f,h)=>[f[0]+h,f[1]+h,f[2]-h,f[3]-h],a=o(n,mo.inset),i=o(n,ca.inset);tn(e,0,0,14,n[1],8,t),tn(e,0,n[3],14,r,8,t),tn(e,0,n[1],n[0],n[3],8,t),tn(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],qr),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,qr),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],qr),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],qr),yl(e,...n.slice(0,2),...n.slice(2),8,mo.y,qr),pd(e,n,a,mo.y,qr),yl(e,...a.slice(0,2),...a.slice(2),mo.y,ca.y,qr),pd(e,a,i,ca.y,qr);for(let f=1;f<6;f++){let h=md(f)-.16;e.box(h,wl,Cn,h+.16,ca.y,Lo,qr)}for(let f=1;f<9;f++){let h=vd(f)-.16;e.box(po,wl,h,ns,ca.y,h+.16,qr)}for(let f=0;f<9;f++)for(let h=0;h<6;h++){let p=md(h),u=vd(f);yl(e,p,u,p+la,u+fa,ca.y,_l,qr),tn(e,p,u,p+la,u+fa,_l,Dx),qx(e,p+la/2,u+fa/2,la/2,fa/2)}}function qx(e,t,r,n,o){let a=E0,i=El;tn(e,t-n,r-i,t+n,r+i,a,qr),tn(e,t-i,r-o,t+i,r+o,a,qr);for(let s of[1,-1]){let c=Math.hypot(n,o),f=n/c,h=s*o/c,p=-h*i,u=f*i;ti(e,[t-f*c+p,a,r-h*c+u],[t+f*c+p,a,r+h*c+u],[t+f*c-p,a,r+h*c-u],[t-f*c-p,a,r-h*c-u],[0,-1,0],qr)}for(let s of[gd,yd]){let c=s*n,f=s*o;tn(e,t-c-i,r-f-i,t+c+i,r-f+i,a,qr),tn(e,t-c-i,r+f-i,t+c+i,r+f+i,a,qr),tn(e,t-c-i,r-f+i,t-c+i,r+f-i,a,qr),tn(e,t+c-i,r-f+i,t+c+i,r+f-i,a,qr)}}var lt=e=>e.toFixed(4);function Hx(){return`
	const vec3 SKY_SUN = vec3(${Gx.map(lt).join(", ")});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${lt(po)}, ${lt(Cn)});
		vec2 pitch = vec2(${lt(xl)}, ${lt(bl)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${lt(5)} || cell.y > ${lt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${lt(la)}, ${lt(fa)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${lt(El)} - soft, ${lt(El)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${lt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${lt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${lt(mo.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${lt(wl)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${lt(ca.y)} - p.y) / L.y)).xz;
		float tG = (${lt(E0)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${lt(_l)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${lt(po-yn)}, ${lt(Cn-yn)}, ${lt(ns+yn)}, ${lt(Lo+yn)}), soft)
		           * rectOpen(q1, vec4(${lt(po-yn+mo.inset)}, ${lt(Cn-yn+mo.inset)}, ${lt(ns+yn-mo.inset)}, ${lt(Lo+yn-mo.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${lt(po)}, ${lt(Cn)});
		vec2 pitch = vec2(${lt(xl)}, ${lt(bl)});
		vec2 paneHalf = vec2(${lt(la/2)}, ${lt(fa/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${lt(gd)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${lt(yd)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${lt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${lt(E0)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${lt(po)}, ${lt(Cn)}, ${lt(ns)}, ${lt(Lo)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${lt(Cn-3)}, ${lt(Cn+2)}, p.z)
		        * (1.0 - smoothstep(${lt(Lo-2)}, ${lt(Lo+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${lt(7.75/2)}, ${lt(14/2)}, abs(p.x - ${lt(14/2)}));
		return z * x;
	}`}xd.exports={addSkylight:$x,skylightGLSL:Hx,Z_START:Cn,Z_END:Lo,GLASS_Y:E0,HEIGHT:8}});var xn=ue((S4,Md)=>{"use strict";var oi=sa(),Sl=8,rr=.35,ke={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Sl},bd=(ke.z1-ke.z0)/2,Ml=ke.crown-ke.spring,Tl=(Ml*Ml+bd*bd)/(2*Ml),kl=ke.crown-Tl;function ni(e){let t=e-ke.zc;return kl+Math.sqrt(Math.max(0,Tl*Tl-t*t))}var Ke={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Hn=Array.from({length:Ke.count},(e,t)=>Ke.first+t*Ke.pitch),_d=Hn.slice(1).map(e=>e-Ke.pitch/2),Ux=[Hn[0],Hn[2],Hn[4]],A0=[Hn[1],Hn[3]],un={r:1.3,sill:.62,spring:3.3},qt=[0,0,0],os=[11,0,0],zo=[10,0,0],as=[8,0,0];function Ir(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function hn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function is(e,t){let{u0:r,u1:n,w0:o,w1:a,top:i,holes:s,mat:c}=t,f=new Set([r,n]);for(let d of s){f.add(d.u0),f.add(d.u1);let m=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let w=1;w<m;w++)f.add(d.u0+(d.u1-d.u0)*w/m)}for(let d of t.cuts||[])f.add(d);let h=t.topStep||.5;for(let d=r;d<n;d+=h)f.add(d);let p=[...f].filter(d=>d>=r-1e-9&&d<=n+1e-9).sort((d,m)=>d-m),u=(d,m)=>d.bot?d.bot(m):d.bottom,v=(d,m)=>{let w=i(d),T=m.map($=>[Math.max(0,u($,d)),Math.min($.head(d),w)]).filter($=>$[1]>$[0]).sort(($,H)=>$[0]-H[0]),C=[],D=0;for(let $ of T)$[0]>D+1e-6&&C.push([D,$[0]]),D=Math.max(D,$[1]);return w>D+1e-6&&C.push([D,w]),C},g=(d,m,w)=>[d,m,w];for(let d=0;d<p.length-1;d++){let m=p[d],w=p[d+1],T=(m+w)/2,C=s.filter(J=>T>J.u0&&T<J.u1),D=C.length?Math.max(m,Math.max(...C.map(J=>J.u0))+1e-7):m,$=C.length?Math.min(w,Math.min(...C.map(J=>J.u1))-1e-7):w,H=v(D,C),oe=v($,C),xe=Math.min(H.length,oe.length);for(let J=0;J<xe;J++){let[be,he]=H[J],[Ge,Ie]=oe[J];he-be<1e-6&&Ie-Ge<1e-6||(Ir(e,g(m,be,a),g(w,Ge,a),g(w,Ie,a),g(m,he,a),[0,0,1],c),t.frontOnly||Ir(e,g(w,Ge,o),g(m,be,o),g(m,he,o),g(w,Ie,o),[0,0,-1],c))}}t.noEnds||(Ir(e,g(r,0,o),g(r,0,a),g(r,i(r),a),g(r,i(r),o),[-1,0,0],c),Ir(e,g(n,0,a),g(n,0,o),g(n,i(n),o),g(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let m=d.mat||t.revealMat||c,w=Math.max(0,u(d,d.u0+1e-7)),T=Math.max(0,u(d,d.u1-1e-7)),C=Math.min(d.head(d.u0+1e-7),i(d.u0)),D=Math.min(d.head(d.u1-1e-7),i(d.u1));C>w+1e-6&&Ir(e,g(d.u0,w,a),g(d.u0,w,o),g(d.u0,C,o),g(d.u0,C,a),[1,0,0],m),D>T+1e-6&&Ir(e,g(d.u1,T,o),g(d.u1,T,a),g(d.u1,D,a),g(d.u1,D,o),[-1,0,0],m);let $=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let H=0;H<$;H++){let oe=d.u0+(d.u1-d.u0)*H/$,xe=d.u0+(d.u1-d.u0)*(H+1)/$,J=Math.max(oe,d.u0+1e-7),be=Math.min(xe,d.u1-1e-7),he=Math.min(d.head(J),i(oe)),Ge=Math.min(d.head(be),i(xe));if(!(he>=i(oe)-1e-6&&Ge>=i(xe)-1e-6)){let ge=xe-oe,nt=Ge-he,Yt=Math.hypot(ge,nt)||1;Ir(e,g(oe,he,o),g(xe,Ge,o),g(xe,Ge,a),g(oe,he,a),[nt/Yt,-ge/Yt,0],m)}let Ie=u(d,J),Ce=u(d,be);if(Ie>1e-6||Ce>1e-6){let ge=xe-oe,nt=Ce-Ie,Yt=Math.hypot(ge,nt)||1;Ir(e,g(xe,Ce,o),g(oe,Ie,o),g(oe,Ie,a),g(xe,Ce,a),[-nt/Yt,ge/Yt,0],m)}}}}var Al=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function Bx(e,t){let r=un.r,n=un.sill,o=un.spring,a=ke.z0,i=24,s=(v,g,d)=>[t+Math.cos(v)*g,d,a-Math.sin(v)*g];for(let v=0;v<i;v++){let g=Math.PI*v/i,d=Math.PI*(v+1)/i,m=[-Math.cos(g),0,Math.sin(g)],w=[-Math.cos(d),0,Math.sin(d)],T=[e.vert(s(g,r,n),m,qt),e.vert(s(d,r,n),w,qt),e.vert(s(d,r,o),w,qt),e.vert(s(g,r,o),m,qt)];e.tri(T[0],T[1],T[2]),e.tri(T[0],T[2],T[3])}let c=12,f=(v,g)=>[t+Math.cos(v)*Math.cos(g)*r,o+Math.sin(g)*r,a-Math.sin(v)*Math.cos(g)*r],h=(v,g)=>[-Math.cos(v)*Math.cos(g),-Math.sin(g),Math.sin(v)*Math.cos(g)];for(let v=0;v<i;v++)for(let g=0;g<c;g++){let d=Math.PI*v/i,m=Math.PI*(v+1)/i,w=Math.PI/2*g/c,T=Math.PI/2*(g+1)/c,C=[e.vert(f(d,w),h(d,w),zo),e.vert(f(m,w),h(m,w),zo),e.vert(f(m,T),h(m,T),zo),e.vert(f(d,T),h(d,T),zo)];e.tri(C[0],C[1],C[2]),e.tri(C[0],C[2],C[3])}for(let v=1;v<8;v++){let g=Math.PI*v/8,d=[];for(let m=0;m<=10;m++){let w=Math.PI/2*m/10*.97;d.push(f(g,w).map((T,C)=>T-h(g,w)[C]*.02))}e.tube(d,m=>.035*(1-m*.6),12,6,{mat:()=>zo})}let p=e.vert([t,n,a],[0,1,0],qt);for(let v=0;v<i;v++){let g=Math.PI*v/i,d=Math.PI*(v+1)/i;e.tri(p,e.vert(s(g,r,n),[0,1,0],qt),e.vert(s(d,r,n),[0,1,0],qt))}hn(e,t-r-.12,n-.1,a,t+r+.12,n+.02,a+.12,qt),hn(e,t-r-.16,n-.2,a,t+r+.16,n-.1,a+.07,qt);let u=.16;for(let v=0;v<i;v++){let g=Math.PI*v/i,d=Math.PI*(v+1)/i,m=(w,T,C)=>[t+Math.cos(w)*T,o+Math.sin(w)*T,C];Ir(e,m(g,r,a+.05),m(d,r,a+.05),m(d,r+u,a+.05),m(g,r+u,a+.05),[0,0,1],qt),Ir(e,m(g,r+u,a),m(d,r+u,a),m(d,r+u,a+.05),m(g,r+u,a+.05),[Math.cos((g+d)/2),Math.sin((g+d)/2),0],qt),Ir(e,m(g,r,a),m(d,r,a),m(d,r,a+.05),m(g,r,a+.05),[-Math.cos((g+d)/2),-Math.sin((g+d)/2),0],qt)}for(let v of[-1,1]){let g=t+v*r,d=t+v*(r+u);hn(e,g,n,a,d,o,a+.05,qt),hn(e,g-v*.02,o-.12,a,d+v*.06,o,a+.09,qt)}hn(e,t-.11,o+r-.04,a,t+.11,o+r+u+.1,a+.09,qt),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>qt})}var jx=un.sill+.4,Wx=ke.z0-.62;function Vx(e){Ir(e,[14,0,ke.z0-rr],[ke.x1+rr,0,ke.z0-rr],[ke.x1+rr,0,ke.z1+rr],[14,0,ke.z1+rr],[0,1,0],qt),e.curMat=os,is(e,{u0:14+rr,u1:ke.x1+2*rr,w0:ke.z0-2*rr,w1:ke.z0,top:()=>ke.spring,holes:A0.map(f=>({u0:f-un.r,u1:f+un.r,bottom:un.sill,head:Al(f,un.r,un.spring),noReveal:!0})),mat:os,cuts:[ke.x1]});for(let f of A0)Bx(e,f);e.save(),e.translate(0,0,ke.z1),e.rotateY(Math.PI),e.translate(-(ke.x1+2*rr),0,-2*rr);let t=f=>ke.x1+2*rr-f;is(e,{u0:t(ke.x1+2*rr),u1:t(13.65),w0:0,w1:2*rr,top:()=>ke.spring,holes:Hn.map(f=>({u0:t(f+Ke.halfW),u1:t(f-Ke.halfW),bottom:Ke.sill,head:Al(t(f),Ke.halfW,Ke.spring)})),mat:os,revealMat:qt}),e.restore(),e.save(),e.translate(ke.x1,0,0),e.rotateY(-Math.PI/2);let r=oi.DOOR,n=ke.zc,o=r.r;is(e,{u0:ke.z0-2*rr,u1:ke.z1+2*rr,w0:-2*rr,w1:0,top:f=>f<ke.z0||f>ke.z1?ke.spring:ni(f),topStep:.15,holes:[{u0:n-o,u1:n+o,bottom:0,head:Al(n,o,r.spring)}],mat:os,revealMat:qt}),e.restore(),e.save(),e.translate(14+rr,0,0),e.rotateY(-Math.PI/2),is(e,{u0:ke.z0,u1:ke.z1,w0:-0,w1:2*rr,top:()=>Sl,topStep:.15,holes:[{u0:ke.z0,u1:ke.z1,bottom:0,head:f=>ni(f)}],mat:os,revealMat:qt}),e.restore();let a=14+rr,i=Math.ceil((ke.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let h=a+(ke.x1-a)*f/i,p=[];for(let u=0;u<=s;u++){let v=ke.z0+(ke.z1-ke.z0)*u/s,g=ni(v),d=[0,kl-g,ke.zc-v],m=Math.hypot(d[1],d[2]);p.push(e.vert([h,g,v],[0,d[1]/m,d[2]/m],zo))}c.push(p)}for(let f=0;f<i;f++)for(let h=0;h<s;h++)e.tri(c[f][h],c[f+1][h],c[f][h+1]),e.tri(c[f+1][h],c[f+1][h+1],c[f][h+1])}function wd(e,t,r,n){let a=[];for(let i=0;i<=32;i++){let s=ke.z0+(ke.z1-ke.z0)*i/32,c=ni(s),f=kl-c,h=ke.zc-s,p=Math.hypot(f,h),u=[c+f/p*n,s+h/p*n];a.push({y:c,z:s,iy:u[0],iz:u[1],n:[0,f/p,h/p]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Ir(e,[t-r,s.iy,s.iz],[t+r,s.iy,s.iz],[t+r,c.iy,c.iz],[t-r,c.iy,c.iz],s.n,qt),Ir(e,[t-r,s.y,s.z],[t-r,s.iy,s.iz],[t-r,c.iy,c.iz],[t-r,c.y,c.z],[-1,0,0],qt),Ir(e,[t+r,s.iy,s.iz],[t+r,s.y,s.z],[t+r,c.y,c.z],[t+r,c.iy,c.iz],[1,0,0],qt)}}function M0(e,t,r,n){let i=r,s=r+n*.16;hn(e,t-.28,0,i,t+.28,ke.spring-.3,s,qt),hn(e,t-.28-.06,0,i,t+.28+.06,.32,r+n*(.16+.05),qt),hn(e,t-.28-.05,ke.spring-.3,i,t+.28+.05,ke.spring-.1,r+n*(.16+.05),qt),hn(e,t-.28-.1,ke.spring-.1,i,t+.28+.1,ke.spring,r+n*(.16+.1),qt)}function Xx(e,t){let r=ni(ke.zc),n=[[0,r-.13,1],[.05,r-.125],[.12,r-.1],[.16,r-.06,1],[.22,r-.05],[.3,r-.075],[.4,r-.06],[.48,r-.03,1],[.55,r-.035],[.7,r-.025],[.82,r-.012,1],[.95,r+.03]];e.lathe(n,t,ke.zc,48,{mat:()=>zo});for(let o=0;o<8;o++){let a=o*Math.PI/4,i=t+Math.cos(a)*.32,s=ke.zc+Math.sin(a)*.32;e.save(),e.translate(i,r-.07,s),e.rotateY(-a),e.curMat=zo,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function Yx(e){e.curMat=qt;for(let[t,r]of[[ke.z0,1],[ke.z1,-1]])hn(e,14.35,ke.spring-.12,t,ke.x1,ke.spring,t+r*.1,qt),hn(e,14.35,ke.spring-.04,t,ke.x1,ke.spring+.05,t+r*.18,qt);for(let[t,r]of[[ke.z0,1],[ke.z1,-1]])hn(e,14.35,0,t,ke.x1,.42,t+r*.12,qt),hn(e,14.35,.42,t,ke.x1,.5,t+r*.07,qt);for(let t of _d)wd(e,t,.24,.16),M0(e,t,ke.z0,1),M0(e,t,ke.z1,-1);for(let t of[14.35+.28,ke.x1-.28])wd(e,t,.28,.22),M0(e,t,ke.z0,1),M0(e,t,ke.z1,-1);for(let t of Hn)Xx(e,t)}function Kx(e){let t=ke.z1+rr,r=t-.04,n=t+.04,o=(s,c,f,h)=>hn(e,s,c,r,f,h,n,as),a=Ke.halfW,i=(s,c,f,h,p,u)=>{let v=(g,d,m)=>[s+d*Math.cos(g),Ke.spring+d*Math.sin(g),m];for(let g=0;g<u;g++){let d=h+(p-h)*g/u,m=h+(p-h)*(g+1)/u;Ir(e,v(d,c,r),v(m,c,r),v(m,f,r),v(d,f,r),[0,0,-1],as),Ir(e,v(d,f,n),v(m,f,n),v(m,c,n),v(d,c,n),[0,0,1],as)}};for(let s of Hn){let c=s-a,f=s+a;o(c,Ke.sill,c+.07,Ke.spring),o(f-.07,Ke.sill,f,Ke.spring),o(c,Ke.sill,f,Ke.sill+.07),o(c,Ke.spring-.04,f,Ke.spring+.04);for(let p of[-.5,0,.5])o(s+p*a-.022,Ke.sill,s+p*a+.022,Ke.spring);let h=6;for(let p=1;p<h;p++){let u=Ke.sill+(Ke.spring-Ke.sill)*p/h;o(c,u-.02,f,u+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let p=1;p<6;p++){let u=Math.PI*p/6,v=Math.cos(u),g=Math.sin(u),d=.02,m=(w,T)=>[s+v*w-g*d*T,Ke.spring+g*w+v*d*T];Ir(e,[...m(.44,-1),r],[...m(a-.05,-1),r],[...m(a-.05,1),r],[...m(.44,1),r],[0,0,-1],as),Ir(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],as)}}}function Qx(){let e=[],t=ke.z1+rr;for(let r of Hn){let n=r-Ke.halfW,o=r+Ke.halfW;e.push([n,Ke.sill,t],[o,Ke.sill,t],[o,Ke.spring,t],[n,Ke.sill,t],[o,Ke.spring,t],[n,Ke.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([r,Ke.spring,t],[r+Ke.halfW*Math.cos(i),Ke.spring+Ke.halfW*Math.sin(i),t],[r+Ke.halfW*Math.cos(s),Ke.spring+Ke.halfW*Math.sin(s),t])}}return e}function Ed(e,t){e.save(),e.translate(ke.x1+rr,0,ke.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function Zx(e){Ed(e,()=>{oi.addSurround(e),oi.addFrames(e,"fixed")})}function Jx(e){return oi.glassPanes(e||"fixed").map(([r,n,o])=>[ke.x1+rr-o,n,ke.zc-7+r])}function eb(e){Vx(e),Yx(e),Kx(e),Zx(e),e.curMat=[0,0,0]}var tb={x:ke.x1+rr,zLo:ke.zc-oi.DOOR.r,zHi:ke.zc+oi.DOOR.r},_t=e=>e.toFixed(4);function rb(){return`
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
		if (p.x < ${_t(ke.x0)} || p.z < ${_t(ke.z0-.1)} || p.z > ${_t(ke.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${_t(ke.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${_t(ke.z1+2*rr)} - p.z) / WIN_SKY.z;
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
		${A0.map(e=>`{ float d = abs(p.x - ${_t(e)}); if (d < best) { best = d; lamp = vec3(${_t(e)}, ${_t(un.spring+.55)}, ${_t(ke.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${_t(ke.z0+1.6)} || p.z < ${_t(ke.z0-un.r-.1)} || p.x < ${_t(ke.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${_t(un.r)}, ${_t(un.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${_t(ke.x0-1)}) return 0.0;
		float inC = smoothstep(${_t(ke.z0-1.5)}, ${_t(ke.z0)}, p.z) * smoothstep(${_t(ke.x0-1)}, ${_t(ke.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${_t(ke.z0)}, ${_t(ke.z1)}, p.z);
		return inC * near;
	}`}Md.exports={wallWithHoles:is,windowLightGLSL:rb,addWing:eb,windowGlass:Qx,farDoorGlass:Jx,atFarDoor:Ed,FAR_DOOR:tb,vaultY:ni,C:ke,NICHE_X:A0,NICHE:un,NICHE_PLINTH_TOP:jx,NICHE_STATUE_Z:Wx,WIN:Ke,winCentres:Hn,piers:_d,PAINTING_X:Ux,HEIGHT:Sl}});var no=ue((k4,Sd)=>{"use strict";var Ll=xn(),Qt=8,si=.35,ua=14,ii=4,Fe={x0:ua+si,x1:ua+si+2*ii,z0:5.9-ii,z1:5.9+ii,zc:5.9,cx:ua+si+ii,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Qt},oculus:3.3};Fe.domeTop=Fe.dome.base+Fe.dome.r;var ci={spokes:16,ringE:[.42,.95],bar:.035},kr={sxz:1.32,sy:1.6,yaw:.6};kr.crownC=[Fe.cx,.4+3.4*kr.sy,Fe.zc];kr.crownR=[2.3*kr.sxz,1.9*kr.sy,2.3*kr.sxz];kr.trunkR=.26*kr.sxz;kr.trunkTop=.4+2.2*kr.sy;var Ad={inner:1.05,outer:1.62,seat:.48,soil:.4},k0=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(r=>r/t)})(),Pr=[0,0,0],ai=[11,0,0],T0=[10,0,0],S0=[9,0,0],nb=[5,0,0],zl=[3,0,0];function vo(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function rn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}var ob=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function ab(e){e.save(),e.translate(ua+si,0,0),e.rotateY(-Math.PI/2),Ll.wallWithHoles(e,{u0:0,u1:Ll.C.z0,w0:0,w1:2*si,top:()=>Qt,holes:[{u0:Fe.zc-Fe.arch.r,u1:Fe.zc+Fe.arch.r,bottom:0,head:ob(Fe.zc,Fe.arch.r,Fe.arch.spring),step:.05}],mat:ai,revealMat:Pr,topStep:1}),e.restore();let t=ua-si;for(let[i,s]of[[0,Fe.zc-Fe.arch.r],[Fe.zc+Fe.arch.r,Ll.C.z0]])rn(e,t-.12,0,i,t,.42,s,Pr),rn(e,t-.07,.42,i,t,.5,s,Pr);let r=t,n=.24,o=40,a=(i,s,c)=>[c,Fe.arch.spring+Math.sin(i)*s,Fe.zc+Math.cos(i)*s];for(let i=0;i<o;i++){let s=Math.PI*i/o,c=Math.PI*(i+1)/o;vo(e,a(s,Fe.arch.r,r-.07),a(c,Fe.arch.r,r-.07),a(c,Fe.arch.r+n,r-.07),a(s,Fe.arch.r+n,r-.07),[-1,0,0],Pr),vo(e,a(s,Fe.arch.r+n,r),a(c,Fe.arch.r+n,r),a(c,Fe.arch.r+n,r-.07),a(s,Fe.arch.r+n,r-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Pr),vo(e,a(s,Fe.arch.r,r),a(c,Fe.arch.r,r),a(c,Fe.arch.r,r-.07),a(s,Fe.arch.r,r-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Pr)}rn(e,r-.12,Fe.arch.spring+Fe.arch.r-.06,Fe.zc-.17,r,Fe.arch.spring+Fe.arch.r+n+.16,Fe.zc+.17,Pr);for(let i of[-1,1]){let s=Fe.zc+i*Fe.arch.r,c=Fe.zc+i*(Fe.arch.r+n);rn(e,r-.07,0,s,r,Fe.arch.spring,c,Pr),rn(e,r-.13,Fe.arch.spring-.16,s-i*.03,r,Fe.arch.spring,c+i*.08,Pr),rn(e,r-.12,0,s-i*.03,r,.5,c+i*.06,Pr)}}function ib(e){let{x0:t,x1:r,z0:n,z1:o}=Fe;vo(e,[ua,0,n],[r,0,n],[r,0,o],[ua,0,o],[0,1,0],Pr),e.curMat=ai,vo(e,[r,0,n],[r,0,o],[r,Qt,o],[r,Qt,n],[-1,0,0],ai),vo(e,[t,0,n],[r,0,n],[r,Qt,n],[t,Qt,n],[0,0,1],ai),vo(e,[r,0,o],[t,0,o],[t,Qt,o],[r,Qt,o],[0,0,-1],ai),vo(e,[t,0,o],[t,0,n],[t,Qt,n],[t,Qt,o],[1,0,0],ai),rn(e,r-.12,0,n,r,.42,o,Pr),rn(e,t,0,n,r,.42,n+.12,Pr),rn(e,t,0,o-.12,r,.42,o,Pr),rn(e,r-.2,Qt-.3,n,r,Qt,o,Pr),rn(e,t,Qt-.3,n,r,Qt,n+.2,Pr),rn(e,t,Qt-.3,o-.2,r,Qt,o,Pr),rn(e,t,Qt-.3,n,t+.2,Qt,o,Pr);let a=Fe.dome.r,i=48,s=[];for(let w=0;w<=i;w++){let T=Math.PI*2*w/i;s.push([Fe.cx+Math.cos(T)*a,Fe.zc+Math.sin(T)*a])}let c=w=>{let T=Math.abs(Math.cos(w)),C=Math.abs(Math.sin(w));return Math.min(ii/Math.max(T,1e-6),ii/Math.max(C,1e-6))};for(let w=0;w<i;w++){let T=Math.PI*2*w/i,C=Math.PI*2*(w+1)/i,D=c(T),$=c(C),H=[Fe.cx+Math.cos(T)*D,Qt,Fe.zc+Math.sin(T)*D],oe=[Fe.cx+Math.cos(C)*$,Qt,Fe.zc+Math.sin(C)*$];vo(e,[s[w][0],Qt,s[w][1]],[s[w+1][0],Qt,s[w+1][1]],oe,H,[0,-1,0],T0)}e.lathe([[a+.02,Qt-.18,1],[a-.12,Qt-.18,1],[a-.12,Qt-.06,1],[a-.05,Qt,1],[a,Qt+.02]],Fe.cx,Fe.zc,i,{mat:()=>Pr});let f=16,h=(w,T,C)=>[Fe.cx+Math.cos(w)*Math.cos(T)*C,Fe.dome.base+Math.sin(T)*C,Fe.zc+Math.sin(w)*Math.cos(T)*C],p=Math.PI/2;for(let w=0;w<i;w++)for(let T=0;T<f;T++){let C=Math.PI*2*w/i,D=Math.PI*2*(w+1)/i,$=p*T/f,H=p*(T+1)/f,oe=(J,be)=>[-Math.cos(J)*Math.cos(be),-Math.sin(be),-Math.sin(J)*Math.cos(be)],xe=[e.vert(h(C,$,a),oe(C,$),S0),e.vert(h(D,$,a),oe(D,$),S0),e.vert(h(D,H,a),oe(D,H),S0),e.vert(h(C,H,a),oe(C,H),S0)];e.tri(xe[0],xe[1],xe[2]),e.tri(xe[0],xe[2],xe[3])}for(let w=0;w<ci.spokes;w++){let T=Math.PI*2*w/ci.spokes,C=[];for(let D=0;D<=14;D++)C.push(h(T,(p-.06)*D/14,a-.04));e.tube(C,()=>.04,20,6,{mat:()=>T0})}for(let w of ci.ringE){let T=Math.cos(w)*(a-.04),C=Fe.dome.base+Math.sin(w)*(a-.04),D=[];for(let $=0;$<=72;$++){let H=Math.PI*2*$/72;D.push([Fe.cx+Math.cos(H)*T,C,Fe.zc+Math.sin(H)*T])}e.tube(D,()=>.035,72,6,{mat:()=>T0})}e.ellipsoid([Fe.cx,Fe.dome.base+a-.06,Fe.zc],[.16,.08,.16],6,12,{mat:()=>T0});let u=.46,v=.55,g=.12,d=(w,T,C,D)=>{rn(e,w,u-.08,T,C,u,D,zl);let $=C-w>D-T?[w+.25,C-.25]:[w+.06,C-.06],H=C-w>D-T?[T+.06,D-.06]:[T+.25,D-.25];rn(e,$[0],0,H[0],$[1],u-.08,H[1],zl)};d(r-g-v,n+1.1,r-g,o-1.1),d(t+1,n+g,r-1.1,n+g+v),d(t+1,o-g-v,r-1.1,o-g);let m=Ad;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],Fe.cx,Fe.zc,64,{mat:()=>zl}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],Fe.cx,Fe.zc,48,{mat:()=>nb})}function sb(e){ab(e),ib(e),e.curMat=[0,0,0]}var Ht=e=>e.toFixed(4);function Td(){let e=Fe.dome.r,t=ci.ringE.map(r=>Math.cos(r)*e);return`
	const vec3 SHAFT = vec3(${Ht(k0[0])}, ${Ht(k0[1])}, ${Ht(k0[2])});

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
		float hw = ${Ht(ci.bar)};
		float cover = 0.0;
		${t.map(r=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Ht(r)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Ht(Math.PI*2/ci.spokes)};
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
	}`}function cb(){return`
	${Td()}

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
	}`}Sd.exports={addAlcove:sb,alcoveLightGLSL:cb,oculusGLSL:Td,A:Fe,BENCH:Ad,SHAFT:k0,TREE:kr}});var Fd=ue((L4,Nd)=>{"use strict";var lb=ia(),{addFlutedColumn:kd,addStatue:fb,addPlant:ub}=ld(),Ld=sa(),hb=ri(),Un=xn(),db=no(),Et=14,dr=Un.C.hallEnd+.35,Xt=8,Ut=.35,Cl=1.15,Rl=1.15,Il=[18,29,40],pb=[[[0,0],[0,dr]],[[Et,dr],[Et,0]],[[0,0],[Et,0]],[[Et,dr],[0,dr]]],Id=[];for(let e of Il)for(let t of[1.25,Et-1.25]){let r=Cl/2,n=Rl/2;Id.push([[t-r,e-n],[t+r,e-n]],[[t+r,e-n],[t+r,e+n]],[[t+r,e+n],[t-r,e+n]],[[t-r,e+n],[t-r,e-n]])}var L0=12,Pd=2.95,Od=.62,R0=Pd+Od,z0=[{file:"venus.bin",x:1.85,z:dr-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Et-2.1,z:dr-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Un.NICHE_X[0],z:Un.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Un.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Un.NICHE_X[1],z:Un.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Un.NICHE_PLINTH_TOP,mat:3}],mb={x0:Ut,x1:3.15,z0:3.6,z1:8.2,top:1},zd=.8,I0=1.17,cs=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{cs.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),cs.push({x:Et-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function Pl(e,t,r,n){return[[[e-r,t-n],[e+r,t-n]],[[e+r,t-n],[e+r,t+n]],[[e+r,t+n],[e-r,t+n]],[[e-r,t+n],[e-r,t-n]]]}var P0=[];for(let e of[-1,1])P0.push(...Pl(Et/2+e*R0,L0,.85,.85));for(let e of z0.filter(t=>t.pedestal))P0.push(...Pl(e.x,e.z,I0*1.1,I0*1.1));for(let e of cs)P0.push(...Pl(e.x,e.z,.42,.42));var vb=pb.concat(Id,P0);function gb(e){let r=new Map,n=(o,a,i)=>{let s=o+":"+a;r.has(s)||r.set(s,[]);let c=r.get(s);c.includes(i)||c.push(i)};for(let o of e){let a=Math.floor(Math.min(o[0][0],o[1][0])/4)-1,i=Math.floor(Math.max(o[0][0],o[1][0])/4)+1,s=Math.floor(Math.min(o[0][1],o[1][1])/4)-1,c=Math.floor(Math.max(o[0][1],o[1][1])/4)+1;for(let f=a;f<=i;f++)for(let h=s;h<=c;h++)n(f,h,o)}return{get(o,a){let i=Math.floor(o/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let h=-1;h<=1;h++){let p=r.get(i+f+":"+(s+h));p&&c.push(...p)}return[...new Set(c)]}}}var C0=[],wr={curMat:[0,0,0]};function Ol(e,t,r,n,o,a,i){let s=e.length/3;e.push(...r,...n,...o,...a),t.push(...i,...i,...i,...i);let c=wr.curMat;return C0.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function Ot(e,t,r,n,o,a,i,s,c){let f=(h,p,u,v,g)=>{r.push(...Ol(e,t,h,p,u,v,g))};f([n,o,a],[i,o,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,o,c],[n,o,c],[i,s,c],[n,s,c],[0,0,1]),f([n,o,c],[n,o,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,o,a],[i,o,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,o,c],[i,o,c],[n,o,a],[i,o,a],[0,-1,0])}function li(e,t,r,n,o){let a=wr,i=a.vert(e,o),s=a.vert(t,o),c=a.vert(r,o),f=a.vert(n,o);a.tri(i,s,c),a.tri(s,f,c)}function Cd(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,h=Math.cos(c),p=Math.sin(c),u=Math.cos(f),v=Math.sin(f),g=[e+r*h,t+r*p],d=[e+r*u,t+r*v],m=[e+n*h,t+n*p],w=[e+n*u,t+n*v];li([g[0],g[1],o],[d[0],d[1],o],[m[0],m[1],o],[w[0],w[1],o],[0,0,-1]),li([g[0],g[1],a],[d[0],d[1],a],[m[0],m[1],a],[w[0],w[1],a],[0,0,1]);let T=(c+f)/2;li([g[0],g[1],o],[d[0],d[1],o],[g[0],g[1],a],[d[0],d[1],a],[-Math.cos(T),-Math.sin(T),0]),li([m[0],m[1],o],[w[0],w[1],o],[m[0],m[1],a],[w[0],w[1],a],[Math.cos(T),Math.sin(T),0])}}function yb(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,h=e+r*Math.cos(c),p=t+r*Math.sin(c),u=e+r*Math.cos(f),v=t+r*Math.sin(f);li([h,p,o],[u,v,o],[h,n,o],[u,n,o],[0,0,-1]),li([h,p,a],[u,v,a],[h,n,a],[u,n,a],[0,0,1])}}function xb(e,t,r,n){let o=Et/2,a=Pd,i=3,s=a+.42,c=s+.15,f=Od,h=R0,p=5.98,u=n-.45,v=n+.45,g=64,d=kd(wr,o-h,n,0,p,f);kd(wr,o+h,n,0,p,f),wr.curMat=[0,0,0],Cd(o,i,a,s,u,v,g),Cd(o,i,s,c,u-.07,v+.07,g),yb(o,i,c,d+.05,u,v,g);for(let w of[-1,1]){let T=o+w*(c-.02),C=o+w*h;Ot(e,t,r,Math.min(T,C),i,u,Math.max(T,C),d+.05,v)}for(let w of[-1,1]){let T=o+w*(a-.05),C=o+w*(a+.85);Ot(e,t,r,Math.min(T,C),i-.16,n-.6,Math.max(T,C),i,n+.6)}let m=h+f*1.42+.45;Ot(e,t,r,o-m,d,n-.7,o+m,d+.44,n+.7),Ot(e,t,r,o-m+.12,d+.44,n-.62,o+m-.12,d+.7,n+.62),Ot(e,t,r,o-m-.1,d+.7,n-.84,o+m+.1,d+.84,n+.84),Ot(e,t,r,o-m-.22,d+.84,n-.96,o+m+.22,d+1,n+.96),Ot(e,t,r,o-.3,i+a-.1,n-.56,o+.3,d,n+.56)}function Rd(e,t,r,n,o){Ot(e,t,r,n-.72,0,o-.72,n+.72,.2,o+.72),Ot(e,t,r,n-.58,.2,o-.58,n+.58,.4,o+.58),Ot(e,t,r,n-Cl/2,.4,o-Rl/2,n+Cl/2,Xt-1.35,o+Rl/2),Ot(e,t,r,n-.67,.42,o-.67,n+.67,.62,o+.67),Ot(e,t,r,n-.67,Xt-1.58,o-.67,n+.67,Xt-1.35,o+.67),Ot(e,t,r,n-.82,Xt-1.35,o-.82,n+.82,Xt-1.05,o+.82),Ot(e,t,r,n-.66,Xt-1.05,o-.66,n+.66,Xt-.78,o+.66),Ot(e,t,r,n-.92,Xt-.78,o-.92,n+.92,Xt-.55,o+.92),Ot(e,t,r,n-.78,Xt-.55,o-.78,n+.78,Xt-.3,o+.78),Ot(e,t,r,n-.92,Xt-.3,o-.92,n+.92,Xt-.1,o+.92)}function ss(e,t,r,n,o){o==="left"?(Ot(e,t,r,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Ot(e,t,r,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Ot(e,t,r,Et-.14,1,n-3.8/2,Et+.08,5.7,n+3.8/2),Ot(e,t,r,Et-.18,1+.18,n-3.8/2+.18,Et+.08+.04,5.7-.18,n+3.8/2-.18))}function bb(e,t,r,n){Ot(e,t,r,.65,Xt-.16,n-1.65,.65+.22,Xt,n+1.65),Ot(e,t,r,Et-.65-.22,Xt-.16,n-1.65,Et-.65,Xt,n+1.65),Ot(e,t,r,.65,Xt-.16,n-1.65,Et-.65,Xt,n-1.43),Ot(e,t,r,.65,Xt-.16,n+1.43,Et-.65,Xt,n+1.65),r.push(...Ol(e,t,[.65+.22,Xt-.16,n-1.43],[Et-.65-.22,Xt-.16,n-1.43],[.65+.22,Xt-.16,n+1.43],[Et-.65-.22,Xt-.16,n+1.43],[0,-1,0]))}Nd.exports=function(){let e=[],t=[],r=[];C0=[],wr=lb.createBuilder(e,t,r,C0),r.push(...Ol(e,t,[0,0,0],[Et,0,0],[0,0,dr],[Et,0,dr],[0,1,0])),hb.addSkylight(wr,[0,0,0],dr),wr.curMat=[0,0,0],Ot(e,t,r,-Ut,0,0,Ut,Xt,dr),Ot(e,t,r,Et-Ut,0,Un.C.z1,Et+Ut,Xt,dr-Ut),Ot(e,t,r,Et-Ut-.12,0,Un.C.z1+2*Ut,Et-Ut,.42,dr-Ut),Ot(e,t,r,Et-Ut-.07,.42,Un.C.z1+2*Ut,Et-Ut,.5,dr-Ut),Ot(e,t,r,Ut,0,0,Ut+.12,.42,dr-Ut),Ot(e,t,r,Ut,.42,0,Ut+.07,.5,dr-Ut),Ot(e,t,r,Ut,0,dr-Ut-.12,Et-Ut,.42,dr-Ut),Ot(e,t,r,Ut,.42,dr-Ut-.07,Et-Ut,.5,dr-Ut),Ld.addEntranceWall(wr),Ld.addFrames(wr),wr.curMat=[0,0,0],Ot(e,t,r,-Ut,0,dr-Ut,Et+Ut,Xt,dr+Ut),xb(e,t,r,L0);for(let c of Il)Rd(e,t,r,1.25,c),Rd(e,t,r,Et-1.25,c);ss(e,t,r,22,"left"),ss(e,t,r,25,"right"),ss(e,t,r,33,"left"),ss(e,t,r,36,"right"),ss(e,t,r,43,"left");let n=[4,9,34,39,44,49];for(let c of n)bb(e,t,r,c);Un.addWing(wr),wr.curMat=[0,0,0];for(let c of z0.filter(f=>f.pedestal))fb(wr,c.x,c.z,I0,zd);{let c=mb;wr.curMat=[0,0,0],wr.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),wr.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),wr.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),wr.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}db.addAlcove(wr);for(let c of cs)ub(wr,c.x,c.z,c.seed,1,c.away);wr.curMat=[0,0,0];let o=[[[Et,dr-.35],[0,dr-.35]],[[0,3],[0,10]],[[Et,15],[Et,22]],[[0,24],[0,31]],[[Et,33],[Et,40]],[[0,41],[0,46]]],a=gb(vb),i=(c,f)=>{let h=0,p=1/0;return o.forEach((u,v)=>{let g=(u[0][0]+u[1][0])/2,d=(u[0][1]+u[1][1])/2,m=Math.hypot(c-g,f-d);m<p&&(p=m,h=v)}),h},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:o,lights:s,statues:z0,occluders:[...Il.flatMap(c=>[[1.25,c,.78],[Et-1.25,c,.78]]),[Et/2-R0,L0,.86],[Et/2+R0,L0,.86],...z0.filter(c=>c.pedestal).map(c=>[c.x,c.z,I0*1.12]),...cs.map(c=>[c.x,c.z,.34])],pedestalTop:zd,mat:C0,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:r}}});var Nl=ue((z4,Gd)=>{"use strict";var{doorLightGLSL:wb}=sa(),{skylightGLSL:_b}=ri(),{windowLightGLSL:Eb,C:bn}=xn(),{alcoveLightGLSL:Mb}=no(),Rn=e=>e.toFixed(4),Ab=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>(r/t).toFixed(4)).join(", ")})();Gd.exports=(e,t,r)=>{let o=(t.occluders||[]).slice(0,24).map(([u,v,g])=>`ao = min(ao, contact(v_pos.xz, vec2(${u.toFixed(3)}, ${v.toFixed(3)}), ${g.toFixed(3)}));`).join(`
      `),a={c:[0,0,0,0],d:[1,0,0,0]},i=-1,s=[],c=u=>{let v=u&&u.tick!==void 0?u.tick:0;if(v!==i||s.length===0){i=v;let g=t.viewer||[7,2,20];for(s=t.lights.filter(d=>d.c[3]>.5).map(d=>({l:d,d:Math.hypot(d.c[0]-g[0],d.c[2]-g[2])})).sort((d,m)=>d.d-m.d).slice(0,8).map(d=>d.l);s.length<8;)s.push(a)}return s},f={},h="",p="";for(let u=0;u<8;u++)f["lightC"+u]=v=>c(v)[u].c,f["lightD"+u]=v=>c(v)[u].d,h+="uniform vec4 lightC"+u+", lightD"+u+`;
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

    ${wb()}

    ${_b()}

    ${Eb()}

    ${Mb()}

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
        step(abs(v_pos.z - ${Rn(bn.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Rn((bn.z0+bn.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Rn(bn.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${Ab}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Rn(bn.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Rn(bn.z0)} || v_pos.z > ${Rn(bn.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Rn(bn.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Rn(bn.z0)}), ${Rn(bn.z1)} - v_pos.z), ${Rn(bn.x1)} - v_pos.x);
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
        if (v_pos.z < ${Rn(bn.z0+.3)} && v_pos.x > ${Rn(bn.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:f,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements)})}});var $d=ue((C4,Dd)=>{"strict mode";var Tb="https://api.artic.edu/api/v1/artworks/search",Sb=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,kb="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",Lb="&fields=image_id,title,artist_title",zb={low:400,mid:843,high:1686};Dd.exports={fetchList:async function(e,t){let r=Tb+kb+Lb+`&from=${e}&size=${t}`;return(await fetch(r).then(o=>o.json())).data.filter(o=>o.image_id)},fetchImage:async function(e,t){let r=Sb(e,zb[t]),n=await fetch(r).then(o=>o.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var Ud=ue((R4,Hd)=>{"use strict";var Cb=fl(),Rb=to(),Ib=e=>"images/web/"+e.slug+(Rb.isPhone?"-1024":"")+".webp";async function qd(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Hd.exports={fetchList:async function(e,t){return Cb.slice(e,e+t).map((r,n)=>({...r,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await qd(Ib(e))}catch(r){t=await qd("images/"+e.file)}return{title:e.title,image:t}}}});var jd=ue((I4,Bd)=>{"strict mode";Bd.exports={default:"local",artic:$d(),local:Ud()}});var Gl=ue((P4,Vd)=>{"strict mode";var ha=document.createElement("canvas"),Fl=ha.width=ha.height=1024,Co=ha.getContext("2d");Co.mozImageSmoothingEnabled=!1;Co.webkitImageSmoothingEnabled=!1;Co.font="32px Verdana";Co.textBaseline="bottom";Co.fillStyle="#aaa";function Wd(e,t,r,n){var o=t,a,i=0,s=0,c=t.split(" "),f,h;for(f=h=c.length;e.measureText(o).width>r&&f>1;){f--,o=a="";for(var p=0;p<h;p++)p<f?(o+=c[p],p+1<f&&(o+=" ")):(a+=c[p],p+1<h&&(a+=" "))}return n.push(o),s=e.measureText(o).width,a&&(i=Wd(e,a,r,n),i>s&&(s=i)),s}Vd.exports={init(e,t,r=Fl){var n=[];Wd(Co,t,Math.min(r*Fl,Fl),n),Co.clearRect(0,0,ha.width,ha.height);for(var o=0;o<n.length;o++)Co.fillText(n[o],0,ha.height-(Math.max(n.length,3)-o)*32);return e({data:ha,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Kd=ue((O4,Yd)=>{"strict mode";var Dl=jd(),Pb=new URLSearchParams(window.location.search).get("api"),Xd=Dl[Pb]||Dl[Dl.default],Ob=Gl(),$l={},ui=[],Nb=2;function Fb(e){return(!navigator.connection||navigator.connection.downlink<Nb)&&(e=e=="high"?"mid":"low"),e}var Gb=to(),fi=document.createElement("canvas");fi.width=fi.height=Gb.isPhone?1024:2048;var Ul=fi.getContext("2d");Ul.imageSmoothingEnabled=!0;Ul.imageSmoothingQuality="high";var ql=!1,Db=e=>[(ui.pop()||e.texture)([[[200,200,200]]]),t=>(ui.pop()||e.texture)([[[0,0,0,0]]]),1];async function Hl(e,t,r){ql===!1&&(ql=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,o;try{let a=await Xd.fetchImage(t,Fb(r));o=a.title,n=await createImageBitmap(a.image),Ul.drawImage(n,0,0,fi.width,fi.height)}catch(a){return console.error(a),r=="high"?await Hl(e,t,"low"):Db(e)}return[(ui.pop()||e.texture)({data:fi,min:"mipmap",mipmap:"nice",aniso:ql,flipY:!0}),a=>Ob.init(ui.pop()||e.texture,o,a),n.width/n.height]}Yd.exports={fetch:(e,t=10,r="low",n,o)=>{let a=Object.keys($l).length;Xd.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if($l[s.image_id]){--t===0&&o();return}$l[s.image_id]=s,Hl(e,s,r).then(([c,f,h])=>{n({...s,tex:c,textGen:f,aspect:h}),--t===0&&o()})})})},load:(e,t,r="low")=>{t.tex||t.loading||(t.loading=!0,Hl(e,t,r).then(([n,o])=>{t.loading=!1,t.tex=n,t.text=o(t.width)}))},unload:e=>{e.tex&&(ui.push(e.tex),e.tex=void 0),e.text&&(ui.push(e.text),e.text=void 0)}}});var Zd=ue((N4,Qd)=>{Qd.exports=$b;function $b(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var ep=ue((F4,Jd)=>{Jd.exports=qb;function qb(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var rp=ue((G4,tp)=>{tp.exports=Hb;function Hb(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Bl=ue((D4,np)=>{np.exports=Ub;function Ub(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var ap=ue(($4,op)=>{op.exports=Bb;function Bb(e,t){if(e===t){var r=t[1],n=t[2],o=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=o,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var sp=ue((q4,ip)=>{ip.exports=jb;function jb(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],v=t[11],g=t[12],d=t[13],m=t[14],w=t[15],T=r*s-n*i,C=r*c-o*i,D=r*f-a*i,$=n*c-o*s,H=n*f-a*s,oe=o*f-a*c,xe=h*d-p*g,J=h*m-u*g,be=h*w-v*g,he=p*m-u*d,Ge=p*w-v*d,Ie=u*w-v*m,Ce=T*Ie-C*Ge+D*he+$*be-H*J+oe*xe;return Ce?(Ce=1/Ce,e[0]=(s*Ie-c*Ge+f*he)*Ce,e[1]=(o*Ge-n*Ie-a*he)*Ce,e[2]=(d*oe-m*H+w*$)*Ce,e[3]=(u*H-p*oe-v*$)*Ce,e[4]=(c*be-i*Ie-f*J)*Ce,e[5]=(r*Ie-o*be+a*J)*Ce,e[6]=(m*D-g*oe-w*C)*Ce,e[7]=(h*oe-u*D+v*C)*Ce,e[8]=(i*Ge-s*be+f*xe)*Ce,e[9]=(n*be-r*Ge-a*xe)*Ce,e[10]=(g*H-d*D+w*T)*Ce,e[11]=(p*D-h*H-v*T)*Ce,e[12]=(s*J-i*he-c*xe)*Ce,e[13]=(r*he-n*J+o*xe)*Ce,e[14]=(d*C-g*$-m*T)*Ce,e[15]=(h*$-p*C+u*T)*Ce,e):null}});var lp=ue((H4,cp)=>{cp.exports=Wb;function Wb(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],v=t[11],g=t[12],d=t[13],m=t[14],w=t[15];return e[0]=s*(u*w-v*m)-p*(c*w-f*m)+d*(c*v-f*u),e[1]=-(n*(u*w-v*m)-p*(o*w-a*m)+d*(o*v-a*u)),e[2]=n*(c*w-f*m)-s*(o*w-a*m)+d*(o*f-a*c),e[3]=-(n*(c*v-f*u)-s*(o*v-a*u)+p*(o*f-a*c)),e[4]=-(i*(u*w-v*m)-h*(c*w-f*m)+g*(c*v-f*u)),e[5]=r*(u*w-v*m)-h*(o*w-a*m)+g*(o*v-a*u),e[6]=-(r*(c*w-f*m)-i*(o*w-a*m)+g*(o*f-a*c)),e[7]=r*(c*v-f*u)-i*(o*v-a*u)+h*(o*f-a*c),e[8]=i*(p*w-v*d)-h*(s*w-f*d)+g*(s*v-f*p),e[9]=-(r*(p*w-v*d)-h*(n*w-a*d)+g*(n*v-a*p)),e[10]=r*(s*w-f*d)-i*(n*w-a*d)+g*(n*f-a*s),e[11]=-(r*(s*v-f*p)-i*(n*v-a*p)+h*(n*f-a*s)),e[12]=-(i*(p*m-u*d)-h*(s*m-c*d)+g*(s*u-c*p)),e[13]=r*(p*m-u*d)-h*(n*m-o*d)+g*(n*u-o*p),e[14]=-(r*(s*m-c*d)-i*(n*m-o*d)+g*(n*c-o*s)),e[15]=r*(s*u-c*p)-i*(n*u-o*p)+h*(n*c-o*s),e}});var up=ue((U4,fp)=>{fp.exports=Vb;function Vb(e){var t=e[0],r=e[1],n=e[2],o=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],h=e[9],p=e[10],u=e[11],v=e[12],g=e[13],d=e[14],m=e[15],w=t*i-r*a,T=t*s-n*a,C=t*c-o*a,D=r*s-n*i,$=r*c-o*i,H=n*c-o*s,oe=f*g-h*v,xe=f*d-p*v,J=f*m-u*v,be=h*d-p*g,he=h*m-u*g,Ge=p*m-u*d;return w*Ge-T*he+C*be+D*J-$*xe+H*oe}});var dp=ue((B4,hp)=>{hp.exports=Xb;function Xb(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],h=t[7],p=t[8],u=t[9],v=t[10],g=t[11],d=t[12],m=t[13],w=t[14],T=t[15],C=r[0],D=r[1],$=r[2],H=r[3];return e[0]=C*n+D*s+$*p+H*d,e[1]=C*o+D*c+$*u+H*m,e[2]=C*a+D*f+$*v+H*w,e[3]=C*i+D*h+$*g+H*T,C=r[4],D=r[5],$=r[6],H=r[7],e[4]=C*n+D*s+$*p+H*d,e[5]=C*o+D*c+$*u+H*m,e[6]=C*a+D*f+$*v+H*w,e[7]=C*i+D*h+$*g+H*T,C=r[8],D=r[9],$=r[10],H=r[11],e[8]=C*n+D*s+$*p+H*d,e[9]=C*o+D*c+$*u+H*m,e[10]=C*a+D*f+$*v+H*w,e[11]=C*i+D*h+$*g+H*T,C=r[12],D=r[13],$=r[14],H=r[15],e[12]=C*n+D*s+$*p+H*d,e[13]=C*o+D*c+$*u+H*m,e[14]=C*a+D*f+$*v+H*w,e[15]=C*i+D*h+$*g+H*T,e}});var mp=ue((j4,pp)=>{pp.exports=Yb;function Yb(e,t,r){var n=r[0],o=r[1],a=r[2],i,s,c,f,h,p,u,v,g,d,m,w;return t===e?(e[12]=t[0]*n+t[4]*o+t[8]*a+t[12],e[13]=t[1]*n+t[5]*o+t[9]*a+t[13],e[14]=t[2]*n+t[6]*o+t[10]*a+t[14],e[15]=t[3]*n+t[7]*o+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],h=t[4],p=t[5],u=t[6],v=t[7],g=t[8],d=t[9],m=t[10],w=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=h,e[5]=p,e[6]=u,e[7]=v,e[8]=g,e[9]=d,e[10]=m,e[11]=w,e[12]=i*n+h*o+g*a+t[12],e[13]=s*n+p*o+d*a+t[13],e[14]=c*n+u*o+m*a+t[14],e[15]=f*n+v*o+w*a+t[15]),e}});var gp=ue((W4,vp)=>{vp.exports=Kb;function Kb(e,t,r){var n=r[0],o=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var xp=ue((V4,yp)=>{yp.exports=Qb;function Qb(e,t,r,n){var o=n[0],a=n[1],i=n[2],s=Math.sqrt(o*o+a*a+i*i),c,f,h,p,u,v,g,d,m,w,T,C,D,$,H,oe,xe,J,be,he,Ge,Ie,Ce,ge;return Math.abs(s)<1e-6?null:(s=1/s,o*=s,a*=s,i*=s,c=Math.sin(r),f=Math.cos(r),h=1-f,p=t[0],u=t[1],v=t[2],g=t[3],d=t[4],m=t[5],w=t[6],T=t[7],C=t[8],D=t[9],$=t[10],H=t[11],oe=o*o*h+f,xe=a*o*h+i*c,J=i*o*h-a*c,be=o*a*h-i*c,he=a*a*h+f,Ge=i*a*h+o*c,Ie=o*i*h+a*c,Ce=a*i*h-o*c,ge=i*i*h+f,e[0]=p*oe+d*xe+C*J,e[1]=u*oe+m*xe+D*J,e[2]=v*oe+w*xe+$*J,e[3]=g*oe+T*xe+H*J,e[4]=p*be+d*he+C*Ge,e[5]=u*be+m*he+D*Ge,e[6]=v*be+w*he+$*Ge,e[7]=g*be+T*he+H*Ge,e[8]=p*Ie+d*Ce+C*ge,e[9]=u*Ie+m*Ce+D*ge,e[10]=v*Ie+w*Ce+$*ge,e[11]=g*Ie+T*Ce+H*ge,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var wp=ue((X4,bp)=>{bp.exports=Zb;function Zb(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],h=t[9],p=t[10],u=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*o+f*n,e[5]=i*o+h*n,e[6]=s*o+p*n,e[7]=c*o+u*n,e[8]=f*o-a*n,e[9]=h*o-i*n,e[10]=p*o-s*n,e[11]=u*o-c*n,e}});var Ep=ue((Y4,_p)=>{_p.exports=Jb;function Jb(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],h=t[9],p=t[10],u=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o-f*n,e[1]=i*o-h*n,e[2]=s*o-p*n,e[3]=c*o-u*n,e[8]=a*n+f*o,e[9]=i*n+h*o,e[10]=s*n+p*o,e[11]=c*n+u*o,e}});var Ap=ue((K4,Mp)=>{Mp.exports=e3;function e3(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],h=t[5],p=t[6],u=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o+f*n,e[1]=i*o+h*n,e[2]=s*o+p*n,e[3]=c*o+u*n,e[4]=f*o-a*n,e[5]=h*o-i*n,e[6]=p*o-s*n,e[7]=u*o-c*n,e}});var Sp=ue((Q4,Tp)=>{Tp.exports=t3;function t3(e,t,r){var n,o,a,i=r[0],s=r[1],c=r[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),o=Math.cos(t),a=1-o,e[0]=i*i*a+o,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+o,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var Lp=ue((Z4,kp)=>{kp.exports=r3;function r3(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=n+n,c=o+o,f=a+a,h=n*s,p=n*c,u=n*f,v=o*c,g=o*f,d=a*f,m=i*s,w=i*c,T=i*f;return e[0]=1-(v+d),e[1]=p+T,e[2]=u-w,e[3]=0,e[4]=p-T,e[5]=1-(h+d),e[6]=g+m,e[7]=0,e[8]=u+w,e[9]=g-m,e[10]=1-(h+v),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}});var Cp=ue((J4,zp)=>{zp.exports=n3;function n3(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Ip=ue((eE,Rp)=>{Rp.exports=o3;function o3(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var Op=ue((tE,Pp)=>{Pp.exports=a3;function a3(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Fp=ue((rE,Np)=>{Np.exports=i3;function i3(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Dp=ue((nE,Gp)=>{Gp.exports=s3;function s3(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var qp=ue((oE,$p)=>{$p.exports=c3;function c3(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r+r,s=n+n,c=o+o,f=r*i,h=n*i,p=n*s,u=o*i,v=o*s,g=o*c,d=a*i,m=a*s,w=a*c;return e[0]=1-p-g,e[1]=h+w,e[2]=u-m,e[3]=0,e[4]=h-w,e[5]=1-f-g,e[6]=v+d,e[7]=0,e[8]=u+m,e[9]=v-d,e[10]=1-f-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Up=ue((aE,Hp)=>{Hp.exports=l3;function l3(e,t,r,n,o,a,i){var s=1/(r-t),c=1/(o-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var jp=ue((iE,Bp)=>{Bp.exports=f3;function f3(e,t,r,n,o){var a=1/Math.tan(t/2),i=1/(n-o);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*n*i,e[15]=0,e}});var Vp=ue((sE,Wp)=>{Wp.exports=u3;function u3(e,t,r,n){var o=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(o+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(o-a)*f*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}});var Yp=ue((cE,Xp)=>{Xp.exports=h3;function h3(e,t,r,n,o,a,i){var s=1/(t-r),c=1/(n-o),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+r)*s,e[13]=(o+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var Qp=ue((lE,Kp)=>{var d3=Bl();Kp.exports=p3;function p3(e,t,r,n){var o,a,i,s,c,f,h,p,u,v,g=t[0],d=t[1],m=t[2],w=n[0],T=n[1],C=n[2],D=r[0],$=r[1],H=r[2];return Math.abs(g-D)<1e-6&&Math.abs(d-$)<1e-6&&Math.abs(m-H)<1e-6?d3(e):(h=g-D,p=d-$,u=m-H,v=1/Math.sqrt(h*h+p*p+u*u),h*=v,p*=v,u*=v,o=T*u-C*p,a=C*h-w*u,i=w*p-T*h,v=Math.sqrt(o*o+a*a+i*i),v?(v=1/v,o*=v,a*=v,i*=v):(o=0,a=0,i=0),s=p*i-u*a,c=u*o-h*i,f=h*a-p*o,v=Math.sqrt(s*s+c*c+f*f),v?(v=1/v,s*=v,c*=v,f*=v):(s=0,c=0,f=0),e[0]=o,e[1]=s,e[2]=h,e[3]=0,e[4]=a,e[5]=c,e[6]=p,e[7]=0,e[8]=i,e[9]=f,e[10]=u,e[11]=0,e[12]=-(o*g+a*d+i*m),e[13]=-(s*g+c*d+f*m),e[14]=-(h*g+p*d+u*m),e[15]=1,e)}});var Jp=ue((fE,Zp)=>{Zp.exports=m3;function m3(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var ls=ue((uE,e1)=>{e1.exports={create:Zd(),clone:ep(),copy:rp(),identity:Bl(),transpose:ap(),invert:sp(),adjoint:lp(),determinant:up(),multiply:dp(),translate:mp(),scale:gp(),rotate:xp(),rotateX:wp(),rotateY:Ep(),rotateZ:Ap(),fromRotation:Sp(),fromRotationTranslation:Lp(),fromScaling:Cp(),fromTranslation:Ip(),fromXRotation:Op(),fromYRotation:Fp(),fromZRotation:Dp(),fromQuat:qp(),frustum:Up(),perspective:jp(),perspectiveFromFieldOfView:Vp(),ortho:Yp(),lookAt:Qp(),str:Jp()}});var n1=ue((hE,r1)=>{"use strict";var t1=Kd(),pr=ls(),da=xn(),v3=3e3,O0="high",jl,us=.36,hs=13.64,hi=da.C.hallEnd-.01,ds=da.C.z0+.01,g3=.356,y3=13.644,x3=da.C.hallEnd-.006,b3=da.C.z0+.006,w3=.12,F0=4,di=e=>jr[e]&&jr[e].cy||F0,Wl=.26,_3=5.6,E3=7,jr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:hi},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:da.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:da.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:da.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function M3(e,t){let r=t&&t.maxH||_3,n=t&&t.maxW||E3,o=Math.min(r,n/e);return{width:o*e,height:o}}function A3(e,t,r){let n=jr[r],o=[],a=di(r)-t/2;return n.side==="left"?(pr.fromTranslation(o,[us,a,n.z+e/2]),pr.rotateY(o,o,Math.PI/2)):n.side==="right"?(pr.fromTranslation(o,[hs,a,n.z-e/2]),pr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?pr.fromTranslation(o,[n.x-e/2,a,ds]):(pr.fromTranslation(o,[7+e/2,a,hi]),pr.rotateY(o,o,Math.PI)),pr.scale(o,o,[e,t,w3]),o}function T3(e,t,r){let n=jr[r],o=[],a=di(r)-t/2;return n.side==="left"?(pr.fromTranslation(o,[us,a,n.z+e/2]),pr.rotateY(o,o,Math.PI/2)):n.side==="right"?(pr.fromTranslation(o,[hs,a,n.z-e/2]),pr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?pr.fromTranslation(o,[n.x-e/2,a,ds]):(pr.fromTranslation(o,[7+e/2,a,hi]),pr.rotateY(o,o,Math.PI)),o}function S3(e,t,r){let n=jr[r],o=[],a=di(r)-t/2-Wl-.38;return n.side==="left"?(pr.fromTranslation(o,[g3,a,n.z+e/2]),pr.rotateY(o,o,Math.PI/2)):n.side==="right"?(pr.fromTranslation(o,[y3,a,n.z-e/2]),pr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?pr.fromTranslation(o,[n.x-e/2,a,b3]):(pr.fromTranslation(o,[7+e/2,a,x3]),pr.rotateY(o,o,Math.PI)),pr.scale(o,o,[2,2,2]),o}function k3(e,t,r){let n=jr[r],o=di(r)-t/2-Wl-.38;return n.side==="left"?[us+.55,o,n.z]:n.side==="right"?[hs-.55,o,n.z]:n.side==="corridor"?[n.x,o,ds+.55]:[7,o,hi-.55]}var fs=.42;function N0(e,t,r,n,o,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,o,0,0,r[0]*a,r[1]*a,r[2]*a,0,e[0],e[1],e[2],1]}function L3(e,t,r){let n=jr[r],o,a,i;n.side==="left"?(o=[us,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(o=[hs,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(o=[n.x,ds],a=[1,0,0],i=[0,0,1]):(o=[7,hi],a=[1,0,0],i=[0,0,-1]);let s=di(r)+t/2+Wl+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(v,g)=>[o[0]+i[0]*v,g,o[1]+i[2]*v],h=[.075,.062,.05],p=[{fixmodel:N0(f(.014,s),a,i,.1,.13,.028),fixcol:h,fixglow:0},{fixmodel:N0(f(fs/2,s),a,i,.02,.02,fs),fixcol:h,fixglow:0},{fixmodel:N0(f(fs,s),a,i,c,.034,.05),fixcol:h,fixglow:0},{fixmodel:N0(f(fs-.012,s-.019),a,i,c*.94,.006,.028),fixcol:h,fixglow:1}],u=f(fs,s-.02);return{fixtures:p,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}r1.exports=(e,t)=>{let r=[],n=[],o=a=>{let i=a.image_id;if(!jr[i])return;let{width:s,height:c}=M3(a.aspect,jr[i]),f=L3(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),r.push({...a,fixtures:f.fixtures,side:jr[i].side,model:A3(s,c,i),framemodel:T3(s,c,i),framesize:[s,c],textmodel:S3(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:k3(s,c,i),paintingPosition:jr[i].side==="left"?[us+.05,F0,jr[i].z]:jr[i].side==="right"?[hs-.05,F0,jr[i].z]:jr[i].side==="corridor"?[jr[i].x,di(i),ds+.05]:[7,F0,hi-.05],textGen:null})};return t1.fetch(e,jr.length,O0,o,()=>{}),{update:()=>{n=r,n.forEach(a=>{t1.load(e,a,O0)}),O0="low",jl&&clearTimeout(jl),jl=setTimeout(()=>{O0="high"},v3)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var s1=ue((dE,i1)=>{"use strict";var z3=Gl(),o1=to(),a1=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function C3(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];a1.forEach(([n,o])=>{e.forEach(([a,i])=>t.push([a,i,n,o]))});let r=[];for(let n=0;n<a1.length-1;n++)for(let o=0;o<4;o++){let a=(o+1)%4,i=n*4+o,s=n*4+a,c=(n+1)*4+o,f=(n+1)*4+a;r.push(i,s,f,i,f,c)}return{verts:t,elems:r}}var R3=`#extension GL_OES_standard_derivatives : enable
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
}`,I3=`
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
}`;i1.exports=e=>{let t=z3.draw(e),r=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(o1.isPhone?1024:2048),detail:()=>o1.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=C3(),o=e({frag:R3,vert:I3,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){r(i),o(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var l1=ue((pE,c1)=>{"use strict";var P3=Nl();function O3(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),o=t.getUint32(8,!0),a=[],i=[];for(let p=0;p<3;p++)a.push(t.getFloat32(12+p*4,!0)),i.push(t.getFloat32(24+p*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,o);s+=o*2;let h=new Int8Array(e,s,n*3);return{nV:n,nI:o,mn:a,sz:i,pos:c,idx:f,nrm:h}}c1.exports=(e,t)=>{let r=[],n=[],o=[],a=[],i=null,s=t.statues.length,c=(h,p)=>{let u=r.length/3,v=p.height,g=Math.cos(p.yaw),d=Math.sin(p.yaw),m=p.base!==void 0?p.base:t.pedestalTop;for(let w=0;w<h.nV;w++){let T=(h.mn[0]+h.pos[w*3]/65535*h.sz[0])*v,C=(h.mn[1]+h.pos[w*3+1]/65535*h.sz[1])*v,D=(h.mn[2]+h.pos[w*3+2]/65535*h.sz[2])*v;r.push(p.x+g*T+d*D,m+C,p.z-d*T+g*D);let $=h.nrm[w*3]/127,H=h.nrm[w*3+1]/127,oe=h.nrm[w*3+2]/127;n.push(g*$+d*oe,H,-d*$+g*oe),o.push(p.mat||1,0,0)}for(let w=0;w<h.nI;w++)a.push(u+h.idx[w])},f=()=>{a.length!==0&&(i=P3(e,{position:r,normal:n,mat:o,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1))};return t.statues.forEach(h=>{fetch("res/"+h.file).then(p=>{if(!p.ok)throw new Error("Could not load "+h.file);return p.arrayBuffer()}).then(p=>c(O3(p),h)).catch(p=>console.error(p)).then(()=>{--s===0&&f()})}),function(){i&&i()}}});var b1=ue((mE,Xl)=>{"use strict";var N3=ia(),Lr=1.29032,pa=[9.2968,2,5.9],F3=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],G0=2147.64,f1=725,u1=1288,h1=1450,d1=2576,dn=-5.197,va=3.865,Ro=10.135,ga=-14.679,ps=-30.229,ms=7.232,p1=-45.713,mi=17.1*Lr,ma=16.6*Lr,vs=16.6*Lr,m1=[6.9,17.1],D0=[2.95,16.6],G3=1.6,D3=0,$3=1,v1=2,Vl=3,g1=4,y1=5,q3=6;function H3(){let e=[],t=[],r=[],n=[],o=N3.createBuilder(e,t,r,n),a=(f,h,p,u,v,g,d=1,m=1)=>{let w=[];for(let T=0;T<=d;T++){let C=[];for(let D=0;D<=m;D++){let $=[f[0]+h[0]*T/d+p[0]*D/m,f[1]+h[1]*T/d+p[1]*D/m,f[2]+h[2]*T/d+p[2]*D/m],H=g($);C.push(o.vert($,u,[v,H[0],H[1]]))}w.push(C)}for(let T=0;T<d;T++)for(let C=0;C<m;C++)o.tri(w[T][C],w[T+1][C],w[T][C+1]),o.tri(w[T+1][C],w[T+1][C+1],w[T][C+1])},i=f=>h=>[(pa[2]-h[2])/Lr-f,h[1]/Lr];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],D3,f=>[f[0]/Lr,f[2]/Lr],13,14),a([va,0,dn],[0,0,ga-dn],[0,mi,0],[1,0,0],$3,i(8.6),6,6),a([-40,0,dn],[va+40,0,0],[0,mi,0],[0,0,1],v1,f=>[(va-f[0])/Lr,f[1]/Lr],8,4),a([-40,0,-.36],[0,0,dn+.36],[0,mi,0],[1,0,0],v1,f=>[-f[2]/Lr,f[1]/Lr]),a([Ro,0,-80],[0,0,dn+80],[0,ma,0],[-1,0,0],g1,i(8.6),12,6),a([Ro,0,dn],[60,0,0],[0,ma,0],[0,0,1],y1,f=>[(f[0]-Ro)/Lr,f[1]/Lr],8,4),a([70,0,dn],[0,0,-.36-dn],[0,ma,0],[-1,0,0],y1,f=>[-f[2]/Lr,f[1]/Lr]);let s=f=>[(f[0]-pa[0])/Lr+4.18,f[1]/Lr];a([-20,0,ps],[ms+20,0,0],[0,vs,0],[0,0,1],Vl,s,8,6),a([ms,0,ps],[0,0,p1-ps],[0,vs,0],[1,0,0],Vl,i(28),4,4),a([ms,0,p1],[Ro-ms,0,0],[0,ma,0],[0,0,1],g1,f=>[(f[0]-pa[0])/Lr,f[1]/Lr],2,4),a([-20,0,ga],[0,0,ps-ga],[0,vs,0],[1,0,0],Vl,i(16),4,4);let c=(f,h,p,u)=>a(f,h,p,u,q3,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:r,attr:n}}function pi(e,t,r,n){let o=e.texture({data:[[n]],...r,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{o({data:a,...r,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),o}var Bn=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",U3=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,ga],[va,mi,dn]],[[Ro,0,-80],[70,ma,dn]],[[-20,0,-80],[ms,vs,ps]],[[-40,0,-80],[-20,vs,ga]]],B3=U3.map(e=>`if (hitBox(ro, rd, ${Bn(e[0])}, ${Bn(e[1])}, 1e4) ) return 0.0;`).join(`
		`),x1="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>F3[t][e].toFixed(6)).join(", ")).join(", ")+")",j3=`
precision highp float;

uniform sampler2D photo, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Bn([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${B3}
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
	vec3 ro = ${Bn(pa)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Bn([-40,0,ga])}, ${Bn([va-.02,mi,dn])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Bn([Ro+.02,0,-80])}, ${Bn([70,ma,dn])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${x1} * (p - ${Bn(pa)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${f1.toFixed(2)} + ${G0.toFixed(3)} * pc.x / pc.z) / ${h1.toFixed(1)},
		(${u1.toFixed(2)} - ${G0.toFixed(3)} * pc.y / pc.z) / ${d1.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${x1} * (p - ${Bn(pa)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${f1.toFixed(2)} + ${G0.toFixed(3)} * pc.x / pc.z) / ${h1.toFixed(1)},
		(${u1.toFixed(2)} - ${G0.toFixed(3)} * pc.y / pc.z) / ${d1.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Bn(pa)}), n));
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
		base = texture2D(cobbleTex, fuv / ${G3.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${m1[0].toFixed(2)}, 1.0 - fuv.y / ${m1[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${D0[0].toFixed(2)}, 1.0 - fuv.y / ${D0[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${D0[0].toFixed(2)}, 1.0 - fuv.y / ${D0[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(va-.05).toFixed(3)} && v_pos.x < ${(Ro+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${ga.toFixed(3)};
		projectable = projectable && v_pos.z < ${(dn+4.5).toFixed(3)};
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
}`,W3=`
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
}`;Xl.exports=e=>{let t=H3(),r={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},o={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=pi(e,"res/street/photo.jpg",r,[190,160,120]),i=pi(e,"res/street/photo_mask.png",r,[255,255,255]),s=pi(e,"res/street/facade_pink.jpg",n,[200,150,135]),c=pi(e,"res/street/facade_yellow.jpg",n,[225,180,95]),f=pi(e,"res/street/facade_cream.jpg",n,[215,200,175]),h=pi(e,"res/street/cobbles.jpg",o,[95,95,95]),p=Date.now(),u=e({frag:j3,vert:W3,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:i,pinkTex:s,yellowTex:c,creamTex:f,cobbleTex:h,time:()=>(Date.now()-p)/1e3}});return function(){u()}};Xl.exports.layout={MOUTH_Z:dn,PINK_X:va,RIGHT_X:Ro,PINK_H:mi,CREAM_H:ma,S:Lr}});var E1=ue((vE,_1)=>{"use strict";var{glassPanes:V3}=sa(),w1=xn();function X3(){let e=[],t=[],r=(n,o)=>{for(let a of n)e.push(a),t.push(o)};return r(V3(),[0,0,1]),r(w1.windowGlass(),[0,0,1]),r(w1.farDoorGlass(),[1,0,0]),{position:e,normal:t}}_1.exports=e=>{let t=X3(),r=e({frag:`
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r()}}});var D1=ue((gE,Jl)=>{"use strict";var Y3=ia(),Yl=to(),{wallWithHoles:K3,C:Oo}=xn(),He=.28,B={westBack:14.4,westCol:15-He,eastCol:37.4+He,eastBack:41.8,south:Oo.z1+.7,northCol:Oo.z1+.7+16,northBack:Oo.z1+.7+19,cx:(15+37.4)/2,cz:(Oo.z1+.7+Oo.z1+.7+16-He)/2},Ft={x0:B.westCol+He,x1:B.eastCol-He,z0:B.south,z1:B.northCol-He},Yr=3.3,xs=.92,No=5.6,M1=6,In=11.9,Po=9.6,yt={x0:B.cx-2.9,x1:B.cx+2.9,top:14.4},W0=7,L1=4,Ql=(B.eastCol-B.westCol)/W0,Q3=(B.northCol-B.south)/L1,z1=3,ws=.26,wa=1.4,xa=1.1,q0=3,oo=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(r=>r/t)})(),Oe={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},ao=[],C1=(e,t,r)=>[B.cx+e,t,B.cz+r],H0=C1(-5.9,0,3.4),Fo=.85,Io={c:[H0[0],4.6*Fo+.5,H0[2]],r:[5*Fo,3.6*Fo,4.5*Fo]},R1=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[H0[0]+e.d[0]*Fo,e.d[1]*Fo+.5,H0[2]+e.d[2]*Fo],r:e.r.map(t=>t*Fo),n:e.n}));for(let e of R1)ao.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var Z3=[3.6,6.3,9];for(let e of Z3){let t=8.6+e%1.7*.6;ao.push({c:C1(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var J3=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:B.cx+e.d[0],z:B.cz+e.d[1],bloom:e.bloom}));for(let e of J3)ao.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var Zl=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[B.cx+Math.cos(t)*2.3,B.cz+Math.sin(t)*2.3]});for(let[e,t]of Zl)ao.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var I1=[];{let e=(r,n,o,a,i,s)=>{let c=Math.hypot(o-r,a-n),f=Math.floor(c/.9);for(let h=0;h<=f;h++){let p=h/f,u=r+(o-r)*p,v=n+(a-n)*p;i!==void 0&&Math.abs((o!==r?u:v)-i)<s||I1.push([u,v])}};e(Ft.x0+.45,Ft.z0+1.2,Ft.x0+.45,Ft.z1-.45,B.cz,1),e(Ft.x1-.45,Ft.z0+1.2,Ft.x1-.45,Ft.z1-.45,B.cz,1),e(Ft.x0+.45,Ft.z1-.45,Ft.x1-.45,Ft.z1-.45,B.cx,1.9)}var e5=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],U0=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function gi(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),h=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,h)}function zr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),[s,0,0])}function t5(e,t,r){return{vert:(n,o,a)=>e.vert(t(n),r(o),a),tri:e.tri}}var r5={north:[e=>[e[0],e[1],B.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[B.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[B.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function P1(e,t,r,n,o){let a=[];for(let i=0;i<r;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===r-1?o:.02);a.push([s,c,e+(i+.5)*t])}return a}var n5=P1(B.westCol,Ql,W0,He+ws,He+ws),A1=P1(B.south,Q3,L1,.32,He+ws),vi=[B.cx-32.35,B.northCol-77],o5=Array.from({length:W0-1},(e,t)=>B.westCol+(t+1)*Ql),O1=e=>(e[1]-e[0])/2-.2,bs=e=>(e[0]+e[1])/2;function a5(e,t){let r=bs(e),n=O1(e);return{u0:e[0],u1:e[1],bottom:t?0:xs,head:o=>{let a=Math.abs(o-r);return a<n?Yr+Math.sqrt(n*n-a*a):Yr},step:.05}}function i5(e,t,r){return{u0:e-r,u1:e+r,bot:n=>t-Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),step:.04,mat:[Oe.STONE,0,0]}}function s5(e,t,r,n){return{u0:e-t/2,u1:e+t/2,bottom:r,head:()=>n,step:.5,mat:[Oe.STONE,0,0]}}function T1(e,t,r){let[n,o]=r5[t],a=t5(e,n,o),i=[];r.arches.forEach((h,p)=>i.push(a5(h,p===r.open)));let s=[];for(let h of r.bays||r.arches){let p=bs(h);r.oculi&&i.push(i5(p,6.85,.3)),s.push({c:p,y0:r.win[0],y1:r.win[1],w:1.05})}for(let h of r.extraWindows||[])s.push(h);for(let h of s)i.push(s5(h.c,h.w,h.y0,h.y1));for(let h of r.extraHoles||[])i.push(h);K3(a,{u0:r.u0,u1:r.u1,w0:-He,w1:He,top:r.top,holes:i,mat:[Oe.BRICK,0,0],revealMat:[Oe.BRICK,0,0],noEnds:r.noEnds,cuts:r.cuts,topStep:.25});let c=(h,p,u,v,g,d,m)=>{let w=n([h,p,u]),T=n([v,g,d]);zr(e,w[0],w[1],w[2],T[0],T[1],T[2],m)},f=(h,p,u,v,g,d)=>gi(a,h,p,u,v,g,[d,0,0]);for(let h of r.arches){let p=bs(h),u=O1(h),v=28;for(let g of[He,-He]){let d=g>0?1:-1,m=g+d*.025;for(let w=0;w<v;w++){let T=Math.PI*w/v,C=Math.PI*(w+1)/v,D=(he,Ge)=>[p+Math.cos(he)*Ge,Yr+Math.sin(he)*Ge],$=D(T,u),H=D(C,u),oe=D(T,u+.26),xe=D(C,u+.26);f([$[0],$[1],m],[H[0],H[1],m],[xe[0],xe[1],m],[oe[0],oe[1],m],[0,0,d],Oe.STONE);let J=Math.cos((T+C)/2),be=Math.sin((T+C)/2);f([oe[0],oe[1],g],[xe[0],xe[1],g],[xe[0],xe[1],m],[oe[0],oe[1],m],[J,be,0],Oe.STONE)}}}if(r.arches.forEach((h,p)=>{p!==r.open&&c(h[0]-.02,xs,-He-.05,h[1]+.02,xs+.09,He+.05,Oe.STONE)}),c(r.u0,M1,-He,r.u1,M1+.18,He+.09,Oe.STONE),c(r.u0,r.win[0]-.12,He-.01,r.u1,r.win[0],He+.06,Oe.STONE),r.cornice)for(let[h,p,u]of r.cornice)c(h,u-.22,He-.01,p,u,He+.16,Oe.STONE),c(h,u,He-.01,p,u+.16,He+.42,Oe.STONE);for(let{c:h,y0:p,y1:u,w:v,door:g}of s){let d=v/2;if(f([h-d-.01,p,.06],[h+d+.01,p,.06],[h+d+.01,u,.06],[h-d-.01,u,.06],[0,0,1],g?Oe.DARK:Oe.PANE),g){c(h-d-.16,0,He-.01,h-d,u+.16,He+.07,Oe.STONE),c(h+d,0,He-.01,h+d+.16,u+.16,He+.07,Oe.STONE),c(h-d-.16,u,He-.01,h+d+.16,u+.2,He+.09,Oe.STONE),c(h-d,0,.07,h+d,u-.02,.12,Oe.SHUTTER),c(h-.012,0,.12,h+.012,u-.02,.14,Oe.DARK);continue}for(let m of[-1,1]){let w=h+m*d;c(w+m*.02,p+.02,He+.02,w+m*(d+.025),u-.02,He+.06,Oe.SHUTTER)}c(h-d-.09,u,He-.01,h+d+.09,u+.16,He+.05,Oe.STONE),c(h-d-.09,p-.1,He-.01,h+d+.09,p,He+.09,Oe.STONE),c(h-.015,p,.06,h+.015,u,.09,Oe.SHUTTER),c(h-d,(p+u)/2-.015,.06,h+d,(p+u)/2+.015,.09,Oe.SHUTTER)}if(r.oculi)for(let h of r.bays||r.arches){let p=bs(h);f([p-.31,6.54,0],[p+.31,6.54,0],[p+.31,7.16,0],[p-.31,7.16,0],[0,0,1],Oe.DARK)}for(let h of r.cols){let p=xs+.09,u=n([h,0,0]);zr(e,u[0]-.24,p,u[2]-.24,u[0]+.24,p+.12,u[2]+.24,Oe.MARBLE),e.lathe([[.23,p+.12,1],[.24,p+.17],[.2,p+.24],[.215,p+.28],[.17,p+.34,1],[.165,p+.6],[.155,Yr-.5],[.15,Yr-.38,1],[.175,Yr-.34,1],[.17,Yr-.3],[.2,Yr-.22],[.27,Yr-.15],[.29,Yr-.12,1]],u[0],u[2],18,{mat:()=>[Oe.MARBLE,0,0]}),zr(e,u[0]-.29,Yr-.12,u[2]-.29,u[0]+.29,Yr+.01,u[2]+.29,Oe.STONE)}r.walk&&r.walk(e)}function c5(e){let t=[-1,0,1].map(o=>{let a=B.cx+o*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Oe.STONE,0,0]}});T1(e,"north",{u0:B.westCol-He,u1:B.eastCol+He,top:o=>o>yt.x0+1e-6&&o<yt.x1-1e-6?yt.top:In,cuts:[yt.x0,yt.x0+1e-5,yt.x1-1e-5,yt.x1],arches:n5,open:z1,cols:o5,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[B.westCol-He-3.3,yt.x0,In],[yt.x1,B.eastCol+He+3.3,In],[yt.x0-.2,yt.x1+.2,yt.top]],walk:o=>{zr(o,Ft.x0,No,B.northCol+He,Ft.x1,No+.2,B.northBack,Oe.PLASTER),zr(o,Ft.x0,0,B.northBack,Ft.x1,No,B.northBack+.3,Oe.PLASTER);for(let a of[B.cx-7.2,B.cx,B.cx+7.2])gi(o,[a-.8,0,B.northBack-.01],[a+.8,0,B.northBack-.01],[a+.8,2.9,B.northBack-.01],[a-.8,2.9,B.northBack-.01],[0,0,-1],[Oe.DARK,0,0]),zr(o,a-.98,0,B.northBack-.06,a+.98,3.12,B.northBack,Oe.STONE),gi(o,[a-.8,0,B.northBack-.07],[a+.8,0,B.northBack-.07],[a+.8,2.9,B.northBack-.07],[a-.8,2.9,B.northBack-.07],[0,0,-1],[Oe.DARK,0,0])}}),gi(e,[yt.x0,11,B.northCol+.2],[yt.x1,11,B.northCol+.2],[yt.x1,13.6,B.northCol+.2],[yt.x0,13.6,B.northCol+.2],[0,0,-1],[Oe.DARK,0,0]),zr(e,yt.x0+.3,10.88,B.northCol-He-.06,yt.x1-.3,11,B.northCol-He+.1,Oe.STONE),zr(e,B.westBack,No+.2,B.northBack,B.eastBack,In,B.northBack+3.4,Oe.BRICK),zr(e,B.westBack,Po,B.northCol-He,B.westCol-He,In,B.northCol+He,Oe.BRICK),zr(e,B.eastCol+He,Po,B.northCol-He,B.eastBack,In,B.northCol+He,Oe.BRICK),zr(e,B.westBack,No+.2,B.northCol+He+.12,B.eastBack,In,B.northBack,Oe.BRICK),gs(e,[B.westBack-.5,In+.16,B.northCol-He-.42],[yt.x0-B.westBack+.5,0,0],[0,2.6,4.4],Oe.ROOF),gs(e,[yt.x1,In+.16,B.northCol-He-.42],[B.eastBack+.5-yt.x1,0,0],[0,2.6,4.4],Oe.ROOF),gs(e,[yt.x0-.3,yt.top+.16,B.northCol-He-.42],[yt.x1-yt.x0+.6,0,0],[0,1.4,3],Oe.ROOF),S1(e,[yt.x0-.3,yt.top+.16,B.northCol-He-.42],[yt.x0-.3,yt.top+1.56,B.northCol-He+2.58],[yt.x0-.3,yt.top+.16,B.northCol-He+2.58],[-1,0,0],Oe.BRICK),S1(e,[yt.x1+.3,yt.top+.16,B.northCol-He-.42],[yt.x1+.3,yt.top+1.56,B.northCol-He+2.58],[yt.x1+.3,yt.top+.16,B.northCol-He+2.58],[1,0,0],Oe.BRICK),zr(e,yt.x0,In,B.northCol+He,yt.x1,yt.top,B.northCol+2.6,Oe.BRICK);for(let[o,a]of[[B.cx-9.8,B.northBack+.6],[B.cx+9.4,B.northBack+.4],[B.cx-4.6,B.northBack+1]])zr(e,o-.4,12.5,a-.4,o+.4,15.4,a+.4,Oe.BRICK),zr(e,o-.52,15.4,a-.52,o+.52,15.62,a+.52,Oe.STONE);let r=(o,a,i)=>{let s=o==="west"?-1:1,c=[];A1.forEach((p,u)=>{let v=bs(p);u===1?c.push({c:v,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:v,y0:1,y1:2.75,w:1.05}),c.push({c:v,y0:3.85,y1:5.45,w:1.05})}),T1(e,o,{u0:B.south,u1:B.northCol-He,top:()=>Po,arches:[],bays:A1,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[B.south,B.northCol-He,Po]]}),zr(e,a,0,B.south,i+s*(He+.12),Po,B.northBack+.3,Oe.BRICK);let f=i-s*He;zr(e,f,0,B.south,f-s*.06,.55,B.northCol-He,Oe.STONE);let h=i-s*(He+.42);gs(e,[h,Po+.16,B.south],[0,0,B.northCol-He-B.south],[a-h+s*.4,1.9,0],Oe.ROOF)};r("west",B.westBack,B.westCol),r("east",B.eastBack,B.eastCol);let n=Oo.x1+.7;zr(e,13.65,7.4,B.south-.02,n,7.62,B.south+.14,Oe.STONE),zr(e,13.65,10.4,B.south-.02,n,10.6,B.south+.38,Oe.STONE),gs(e,[13.65,10.6,B.south+.38],[n-13.65,0,0],[0,2.2,-5],Oe.ROOF)}function S1(e,t,r,n,o,a){let i=[a,0,0];e.tri(e.vert(t,o,i),e.vert(r,o,i),e.vert(n,o,i))}function gs(e,t,r,n,o){let a=U0([r[1]*n[2]-r[2]*n[1],r[2]*n[0]-r[0]*n[2],r[0]*n[1]-r[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,h)=>[t[0]+r[0]*f+n[0]*h,t[1]+r[1]*f+n[1]*h,t[2]+r[2]*f+n[2]*h];gi(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[o,0,0]);let c=.08;gi(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],U0([-n[0],0,-n[2]]),[o,0,0])}function l5(e){let t=B.westBack,r=B.eastBack,n=B.south,o=B.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let h=[t+(r-t)*c/a,0,n+(o-n)*f/i];s[c].push(e.vert(h,[0,1,0],[Oe.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var ys=.46,ba=.58,ya=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function f5(e,t,r){let n=xa+r,o=(e>0?Ft.x1-B.cx:B.cx-Ft.x0)-wa-r,a=xa+r,i=(t>0?Ft.z1-B.cz:B.cz-Ft.z0)-wa-r,s=q0+r,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),h=[[n,c],[n,i],[o,i],[o,a],[f,a]],p=Math.atan2(a,f),u=Math.atan2(c,n);for(let v=1;v<10;v++){let g=p+(u-p)*v/10;h.push([Math.cos(g)*s,Math.sin(g)*s])}return h.map(([v,g])=>[B.cx+e*v,B.cz+t*g])}function u5(e,t,r){let n=r[0]-t[0],o=r[1]-t[1],a=Math.hypot(n,o),i=n/a,s=o/a,c=-s,f=i,h=ys*.5,p=-h,u=a+h,v=[],g=Math.max(1,Math.ceil((u-p)/1));for(let d=0;d<=g;d++){let m=p+(u-p)*d/g,w=[];for(let T=0;T<ya.length;T++){let[C,D]=ya[T],$=Math.min(ya.length-2,T),H=ya[Math.max(0,T-1)],oe=ya[Math.min(ya.length-1,T+1)],xe=(oe[0]-H[0])*ys,be=(oe[1]-H[1])*ba,he=-xe,Ge=Math.hypot(be,he)||1,Ie=[t[0]+i*m+c*C*ys,D*ba,t[1]+s*m+f*C*ys],Ce=[c*(-be/Ge),-he/Ge,f*(-be/Ge)];w.push(e.vert(Ie,Ce[1]<-.2?[c*Math.sign(C),.3,f*Math.sign(C)]:Ce,[Oe.HEDGE,0,0]))}v.push(w)}for(let d=0;d<g;d++)for(let m=0;m<ya.length-1;m++)e.tri(v[d][m],v[d+1][m],v[d+1][m+1]),e.tri(v[d][m],v[d+1][m+1],v[d][m+1]);for(let[d,m]of[[0,-1],[g,1]]){let w=v[d],T=e.vert([t[0]+i*(d?u:p),ba*.5,t[1]+s*(d?u:p)],[i*m,0,s*m],[Oe.HEDGE,0,0]);for(let C=0;C<w.length-1;C++)e.tri(T,w[C],w[C+1])}}function h5(e){for(let t of[-1,1])for(let r of[-1,1]){let n=f5(t,r,.3);for(let o=0;o<n.length;o++)u5(e,n[o],n[(o+1)%n.length])}}function d5(e){let t=B.cx,r=B.cz,n=()=>[Oe.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,r,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,r,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,r,16,{mat:()=>[Oe.DARK,0,0]});let o={mat:()=>[Oe.IRON,0,0]};e.tube([[t-.72,1.1,r],[t-.72,1.9,r],[t-.7,2.3,r]],()=>.035,8,6,o),e.tube([[t+.72,1.1,r],[t+.72,1.9,r],[t+.7,2.3,r]],()=>.035,8,6,o);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,r])}e.tube(a,()=>.03,20,6,o),e.tube([[t-.45,2.25,r],[t,2.38,r],[t+.45,2.25,r]],()=>.02,8,5,o),e.ellipsoid([t,2.32,r],[.03,.13,.13],6,10,o);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,h=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*h*i*-1+0),1.95+Math.sin(f)*h,r])}e.tube(s,()=>.016,16,5,o)}}function p5(e){for(let[t,r]of Zl)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,r,20,{mat:()=>[Oe.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,r,12,{mat:()=>[Oe.SOIL,0,0]}),e.tube([[t,.6,r],[t+.02,1,r-.01],[t-.01,1.45,r+.02]],n=>.045-n*.02,6,6,{mat:()=>[Oe.BARK,0,0]})}function m5(e){let[t,,r]=Io.c,n=F1(7),o=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of o){let c=[[t+a*.05,0,r+i*.05],[t+a*.25,s*.35,r+i*.25],[t+a*.6,s*.7,r+i*.6],[t+a,s,r+i],[t+a*1.35+(n()-.5),s+1.4,r+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Oe.BARK,0,0]});for(let f=0;f<2;f++){let h=.55+f*.2,p=[t+a*h,s*h,r+i*h],u=n()*Math.PI*2;e.tube([p,[p[0]+Math.cos(u)*1.3,p[1]+.9,p[2]+Math.sin(u)*1.3],[p[0]+Math.cos(u)*2.3,p[1]+1.4+n(),p[2]+Math.sin(u)*2.3]],v=>.08*(1-v*.7),8,6,{mat:()=>[Oe.BARK,0,0]})}}for(let a of ao.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Oe.BARK,0,0]})}function v5(e){let t=()=>[Oe.FARBRICK,0,0],r=()=>[Oe.LEAD,0,0],n=(a,i,s,c,f,h)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let p=[];for(let v=0;v<=12;v++){let g=v/12*Math.PI/2,d=Math.cos(g)*s,m=Math.sin(g)*f;h&&(d*=1-.18*Math.sin(g*2)),p.push([Math.max(d,s*.12),c+m])}e.lathe(p,a,i,28,{mat:r});let u=c+f;e.lathe([[s*.13,u-.2,1],[s*.13,u+3,1],[s*.18,u+3.2,1],[s*.02,u+6.4]],a,i,10,{mat:r})};zr(e,14,0,104,52,26,150,Oe.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:r});let o=(a,i,s)=>{zr(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Oe.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};o(20.5,109,36),o(46.5,112,38)}function g5(e){let r=[B.cx,0,B.cz],n=24,o=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=o;c++){let f=Math.PI/2*(c/o)-.05,h=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],p=[r[0]+h[0]*420,r[1]+h[1]*420,r[2]+h[2]*420];a[i].push(e.vert(p,[-h[0],-h[1],-h[2]],[Oe.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<o;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function y5(){let e=[],t=[],r=[],n=[],o=Y3.createBuilder(e,t,r,n);return l5(o),c5(o),h5(o),d5(o),p5(o),m5(o),o.save(),o.translate(vi[0],0,vi[1]),v5(o),o.restore(),g5(o),{position:e,normal:t,elements:r,attr:n}}var N1=[[[13.65,0,Oo.z0-.7],[Oo.x1+.7,10.6,B.south]],[[B.westBack,No,B.northCol-He],[B.eastBack,In,B.northBack+3.4]],[[yt.x0,In,B.northCol-He],[yt.x1,yt.top,B.northCol+2.6]],[[B.westBack,0,B.south],[B.westCol+He,Po,B.northBack+.3]],[[B.eastCol-He,0,B.south],[B.eastBack,Po,B.northBack+.3]],[[14+vi[0],0,104+vi[1]],[52+vi[0],26,150+vi[1]]]];function x5(e,t,r,n){let o=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<r[i]||e[i]>n[i])return!1;continue}let s=(r[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),o=Math.max(o,s),a=Math.min(a,c),o>a)return!1}return!0}function $0(e,t,r,n){let o=[(e[0]-r[0])/n[0],(e[1]-r[1])/n[1],(e[2]-r[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=o[0]*a[0]+o[1]*a[1]+o[2]*a[2],c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-1,f=s*s-i*c;if(f<=0)return 0;let h=Math.sqrt(f),p=Math.max(0,(-s-h)/i),u=(-s+h)/i;return Math.max(0,u-p)}function Kl(e){for(let[t,r]of N1)if(x5(e,oo,t,r))return 0;return 1}function F1(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function b5(){let e=[],t=[],r=[],n=[],o=[],a=[],i=[],s=F1(21),c=(g,d,m,w,T,C,D)=>{let $=e.length/3;for(let[H,oe]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...g),t.push(H,oe),r.push(d,m,w),n.push(...T),o.push(...C),a.push(...D);i.push($,$+1,$+2,$,$+2,$+3)},f=(g,d)=>{let m=1;for(let w of ao){if(w===d||!w.shadow)continue;let T=$0(g,oo,w.c,w.r);T>0&&(m*=Math.exp(-T*.9))}return m},h=ao.map(g=>({...g,pts:null}));for(let g of h)for(let d=0;d<g.n;d++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let w=Math.hypot(m[0],m[1],m[2])||1,T=Math.pow(s(),.35)*.98,C=[m[0]/w*T,m[1]/w*T,m[2]/w*T];if(g.spindle){let Ie=C[1],Ce=Math.sqrt(Math.max(.02,1-Ie*Ie))*(Ie>0?1-Ie*.55:1+Ie*.25),ge=Math.hypot(C[0],C[2])||1,nt=Ce*Math.min(1,ge*1.4);C=[C[0]/ge*nt,Ie,C[2]/ge*nt]}g.magnolia&&C[1]<-.55&&(C[1]=-.55+(C[1]+.55)*.35);let D=[g.c[0]+C[0]*g.r[0],g.c[1]+C[1]*g.r[1],g.c[2]+C[2]*g.r[2]],$,H;if(g.magnolia){let Ie=0;for(let nt of R1)Ie=Math.max(Ie,$0(D,oo,nt.c,nt.r));$=Math.exp(-Ie*1.1);let Ce=1;for(let nt of ao)if(!nt.magnolia&&nt.shadow){let Yt=$0(D,oo,nt.c,nt.r);Yt>0&&(Ce*=Math.exp(-Yt*.9))}$*=Kl(D)*Ce;let ge=e5(D,Io.c);H=U0([ge[0]/Io.r[0]+C[0]*.5,ge[1]/Io.r[1]+C[1]*.5,ge[2]/Io.r[2]+C[2]*.5]),T=Math.min(1,Math.hypot(ge[0]/Io.r[0],ge[1]/Io.r[1],ge[2]/Io.r[2])*.6+T*.4)}else{let Ie=$0(D,oo,g.c,g.r);$=Math.exp(-Ie*(g.spindle?2.2:1.25)),$*=Kl(D)*f(D,ao[h.indexOf(g)]),H=U0([C[0]/g.r[0],C[1]/g.r[1],C[2]/g.r[2]])}let oe=Math.max(0,H[0]*oo[0]+H[1]*oo[1]+H[2]*oo[2]),xe=.25+.75*Math.pow(T,1.5)*(.65+.35*(H[1]*.5+.5)),J=g.size[0]+(g.size[1]-g.size[0])*s(),be=.85+s()*.3,he=g.leaf.map(Ie=>Ie*be),Ge=g.cell;g.cell===3&&s()<.35&&(Ge=2),c(D,J,Ge,s()*Math.PI*2,[$,xe,.35+.65*oe],he,g.bloom)}for(let[g,d]of I1){let m=s()<.5;for(let w=0;w<3;w++){let T=[g+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],C=Kl(T)*f(T,null);c(T,.32+s()*.12,s()<.7?3:2,s()*6.28,[C,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let p=i.length/6,u=Array.from({length:p},(g,d)=>d);for(let g=p-1;g>0;g--){let d=Math.floor(s()*(g+1));[u[g],u[d]]=[u[d],u[g]]}let v=[];for(let g of u)for(let d=0;d<6;d++)v.push(i[g*6+d]);return{center:e,corner:t,par:r,light:n,tint:o,bloom:a,elements:v}}var qe=e=>e.toFixed(4),_s=e=>`vec3(${qe(e[0])}, ${qe(e[1])}, ${qe(e[2])})`,G1=`
const vec3 SUN = ${_s(oo)};
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
`,w5=N1.map(([e,t])=>`if (hitBox(ro, SUN, ${_s(e)}, ${_s(t)})) return 0.0;`).join(`
	`),_5=ao.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${_s(e.c)}, ${_s(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),E5=(e,t,r,n,o,a,i,s,c)=>`
	{
		float t = (${qe(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${qe(No)} && u > ${qe(r-He)} && u < ${qe(r+n*o+He)}) {
				float k = floor((u - ${qe(r)}) / ${qe(n)});
				float a = ${qe(r)} + k * ${qe(n)} + (k < 0.5 ? ${qe(a)} : 0.02);
				float b = ${qe(r)} + (k + 1.0) * ${qe(n)} - (k > ${qe(o-1.5)} ? ${qe(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${qe(s)}) < 0.5 ? 0.0 : ${qe(xs+.09)};
				bool hole = (q.y > sill && q.y < ${qe(Yr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${qe(Yr)} && d * d + (q.y - ${qe(Yr)}) * (q.y - ${qe(Yr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,B0=xa+.3,j0=xa+.3,Es=q0+.3,k1=Ft.x1-B.cx-wa-.3,M5=Ft.z1-B.cz-wa-.3,A5=B.cz-Ft.z0-wa-.3,T5=Math.sqrt(Es*Es-B0*B0),S5=Math.sqrt(Es*Es-j0*j0),k5=[[B.cx,B.cz,.86,1.18],[B.cx,B.cz,1.25,.3],...Zl.map(([e,t])=>[e,t,.42,.65])].map(([e,t,r,n])=>`if (hitCyl(ro, vec2(${qe(e)}, ${qe(t)}), ${qe(r)}, ${qe(n)})) return 0.0;`).join(`
	`),L5=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${qe(B.cx)}, ${qe(B.cz)}));
	float b1 = xz.y > ${qe(B.cz)} ? ${qe(M5)} : ${qe(A5)};
	vec2 A = vec2(${qe(B0)}, ${qe(T5)}), Bp = vec2(${qe(B0)}, b1), C = vec2(${qe(k1)}, b1);
	vec2 D = vec2(${qe(k1)}, ${qe(j0)}), E = vec2(${qe(S5)}, ${qe(j0)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${qe(Es)}));
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
	${w5}
	${E5("z",B.northCol,B.westCol,Ql,W0,He+ws,He+ws,z1,"ro.z > "+qe(B.northCol-He))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${k5}
	if (ro.y < ${qe(ba)} && ro.x > ${qe(Ft.x0)} && ro.x < ${qe(Ft.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${qe(ba)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${qe(ys*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${qe(ba)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${_5}
	return tr;
}
`,z5=`
precision highp float;
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${G1}
${L5}

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
		bool yard = P.x > ${qe(Ft.x0)} && P.x < ${qe(Ft.x1)} && P.z < ${qe(Ft.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${qe(Ft.x0)}, ${qe(Ft.x1)} - P.x);
			float ez = min(P.z - ${qe(Ft.z0)}, ${qe(Ft.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${qe(B.cx)}), dz = abs(P.z - ${qe(B.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${qe(wa)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${qe(wa)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${qe(q0)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${qe(B.cz)}, P.x - ${qe(B.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${qe(q0)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${qe(xa)} || dz < ${qe(xa)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${qe(xa)} - min(dx, dz), 1.0);
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${qe(ba)}, P.y) * (0.6 + 0.4 * n);
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
	bool walk = (P.x < ${qe(B.westCol)} || P.x > ${qe(B.eastCol)} || P.z > ${qe(B.northCol)}) && P.y < ${qe(No+.05)} && P.z > ${qe(B.south-.1)} && P.z < ${qe(B.northBack+.5)};
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
}`,C5=`
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
}`,R5=`
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
}`,I5=`
precision highp float;
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${G1}
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
}`;function P5(e,t,r){let n=e.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(t).then(o=>{if(!o.ok)throw new Error("Could not load "+t);return o.blob()}).then(o=>createImageBitmap(o,{premultiplyAlpha:"none"})).then(o=>n({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o)),n}Jl.exports=e=>{let t=y5(),r=b5(),n=P5(e,"res/garden/foliage.webp",[0,0,0,0]),o=Date.now(),a=()=>Yl.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:20,i=e({frag:z5,vert:C5,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>Yl.gardenDetail}}),s=e({frag:I5,vert:R5,attributes:{center:r.center,corner:r.corner,par:r.par,light:r.light,tint:r.tint,bloom:r.bloom},elements:new Uint32Array(r.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(r.elements.length*Yl.leafShare/6)*6});return function(){i(),s()}};Jl.exports.layout={G:B,YARD:Ft,SUN:oo}});var j1=ue((yE,B1)=>{"use strict";var O5=ia(),{C:U1}=xn(),Pn=U1.x1+.35,nf=U1.zc,ef=[Pn-7.3,2,nf],$1=5.2*Math.PI/180,q1=2100,N5=725,F5=1288,G5=1450,D5=2576,_a=nf-3.2,H1=nf+3.3,tf=Pn+5,rf=Pn+11.7,V0=3.9,Ms=Pn+22.7,X0=40;function $5(){let e=[],t=[],r=[],n=[],o=O5.createBuilder(e,t,r,n),a=(h,p,u,v,g,d)=>{let m=[];for(let w=0;w<=g;w++){m.push([]);for(let T=0;T<=d;T++){let C=[0,1,2].map(D=>h[D]+p[D]*w/g+u[D]*T/d);m[w].push(o.vert(C,v,[0,0,0]))}}for(let w=0;w<g;w++)for(let T=0;T<d;T++)o.tri(m[w][T],m[w+1][T],m[w+1][T+1]),o.tri(m[w][T],m[w+1][T+1],m[w][T+1])},i=H1-_a,s=.7;a([Pn-s,0,_a],[tf-Pn+s,0,0],[0,0,i],[0,1,0],6,4);let c=rf-tf,f=Math.hypot(c,V0);return a([tf,0,_a],[c,V0,0],[0,0,i],[-V0/f,c/f,0],6,4),a([rf,V0,_a],[Ms-rf,0,0],[0,0,i],[0,1,0],6,4),a([Pn-s,0,_a],[Ms-Pn+s,0,0],[0,X0,0],[0,0,1],12,12),a([Pn-s,0,H1],[Ms-Pn+s,0,0],[0,X0,0],[0,0,-1],12,12),a([Ms,0,_a],[0,X0,0],[0,0,i],[-1,0,0],8,4),a([Pn-s,X0,_a],[Ms-Pn+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:r,attr:n}}var jn=e=>e.toFixed(5),q5=`
precision highp float;
uniform sampler2D photo;
varying vec3 v_pos;

void main() {
	vec3 d = v_pos - vec3(${jn(ef[0])}, ${jn(ef[1])}, ${jn(ef[2])});
	float c = ${jn(Math.cos($1))}, s = ${jn(Math.sin($1))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${jn(N5)} + ${jn(q1)} * d.z / fw, ${jn(F5)} - ${jn(q1)} * up / fw);
	vec2 uv = px / vec2(${jn(G5)}, ${jn(D5)});
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
}`,H5=`
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
}`;B1.exports=e=>{let t=$5(),r=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(o=>{if(!o.ok)throw new Error("Could not load the Florence photo");return o.blob()}).then(o=>createImageBitmap(o)).then(o=>r({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o));let n=e({frag:q5,vert:H5,attributes:{position:t.position},elements:new Uint32Array(t.elements),uniforms:{photo:r},cull:{enable:!1}});return function(){n()}}});var Q1=ue((xE,K1)=>{"use strict";var{A:W1,BENCH:U5,SHAFT:of,TREE:As,oculusGLSL:B5}=no(),j5=to(),Y0=As.sxz,V1=As.sy,X1=As.yaw;function W5(e){let t=new DataView(e),r=t.getUint32(4,!0),n=t.getUint32(8,!0),o=t.getUint32(12,!0),a=[0,1,2].map(u=>t.getFloat32(16+u*4,!0)),i=[0,1,2].map(u=>t.getFloat32(28+u*4,!0)),s=40,c=new Uint16Array(e,s,r*3);s+=r*6;let f=new Uint16Array(e,s,r*2);s+=r*4;let h=new Int8Array(e,s,r*3);s+=r*3,s=s+3&-4;let p=new Uint32Array(e,s,o);return{nV:r,nWood:n,nI:o,mn:a,sz:i,pos:c,uv:f,nrm:h,idx:p}}function V5(e){let t=new Float32Array(e.nV*3),r=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),o=new Float32Array(e.nV),a=Math.cos(X1),i=Math.sin(X1);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*Y0,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*V1,h=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*Y0;t[s*3]=W1.cx+a*c+i*h,t[s*3+1]=U5.soil+.02+f,t[s*3+2]=W1.zc-i*c+a*h;let p=e.nrm[s*3]/127/Y0,u=e.nrm[s*3+1]/127/V1,v=e.nrm[s*3+2]/127/Y0,g=Math.hypot(p,u,v)||1;p/=g,u/=g,v/=g,r[s*3]=a*p+i*v,r[s*3+1]=u,r[s*3+2]=-i*p+a*v,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,o[s]=s>=e.nWood?1:0}return{position:t,normal:r,uv:n,leaf:o,elements:e.idx}}function Y1(e,t,r,n){let o=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>o({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...r})).catch(a=>console.error(a)),o}var nn=e=>e.toFixed(4),yi=As.crownC,xi=As.crownR,X5=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

const vec3 SHAFT = vec3(${nn(of[0])}, ${nn(of[1])}, ${nn(of[2])});

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
	vec3 cc = vec3(${nn(yi[0])}, ${nn(yi[1])}, ${nn(yi[2])});
	vec3 cr = vec3(${nn(xi[0])}, ${nn(xi[1])}, ${nn(xi[2])});
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
}`,Y5=`
precision highp float;
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

${B5()}

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
	vec3 rel = (v_pos - vec3(${nn(yi[0])}, ${nn(yi[1])}, ${nn(yi[2])})) / vec3(${nn(xi[0])}, ${nn(xi[1])}, ${nn(xi[2])});
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
}`;K1.exports=e=>{let t=null,r=Y1(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Y1(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),o=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=V5(W5(a));t=e({vert:X5,frag:Y5,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:r,bark:n,time:()=>j5.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var cm=ue((bE,af)=>{"use strict";var{A:Z1,BENCH:am,oculusGLSL:im}=no(),J1=to(),K5=1.74,Q5=1.877,io=K5/Q5,Ma={x:Z1.cx-1.22,z:Z1.zc+.02,hipY:am.seat+.115},Wn=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],em=e=>[-e[0],-e[1],-e[2],e[3]],Aa=(e,t)=>{let r=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/r*n,e[1]/r*n,e[2]/r*n,Math.cos(t/2)]},tm=(e,t,r)=>Wn(Aa([0,0,1],r*Math.PI/180),Wn(Aa([0,1,0],t*Math.PI/180),Aa([1,0,0],e*Math.PI/180))),Z5=e=>{let t=Math.hypot(...e)||1;return e.map(r=>r/t)};function Go(e,t,r){let[n,o,a,i]=t,s=n*n,c=o*o,f=a*a,h=n*o,p=n*a,u=o*a,v=i*n,g=i*o,d=i*a;return[(1-2*(c+f))*r[0],2*(h+d)*r[0],2*(p-g)*r[0],0,2*(h-d)*r[1],(1-2*(s+f))*r[1],2*(u+v)*r[1],0,2*(p+g)*r[2],2*(u-v)*r[2],(1-2*(s+c))*r[2],0,e[0],e[1],e[2],1]}function go(e,t){let r=new Array(16);for(let n=0;n<4;n++)for(let o=0;o<4;o++)r[n*4+o]=e[o]*t[n*4]+e[4+o]*t[n*4+1]+e[8+o]*t[n*4+2]+e[12+o]*t[n*4+3];return r}function J5(e){let t=Math.hypot(e[0],e[1],e[2]),r=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),o=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/r,c=e[5]/r,f=e[6]/r,h=e[8]/n,p=e[9]/n,u=e[10]/n,v=o+c+u,g;if(v>0){let d=Math.sqrt(v+1)*2;g=[(f-p)/d,(h-i)/d,(a-s)/d,d/4]}else if(o>c&&o>u){let d=Math.sqrt(1+o-c-u)*2;g=[d/4,(s+a)/d,(h+i)/d,(f-p)/d]}else if(c>u){let d=Math.sqrt(1+c-o-u)*2;g=[(s+a)/d,d/4,(p+f)/d,(h-i)/d]}else{let d=Math.sqrt(1+u-o-c)*2;g=[(h+i)/d,(p+f)/d,d/4,(a-s)/d]}return Z5(g)}var Q0={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,r=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,o)=>{Q0[e+"Hand"+n+"1"]=[0,0,t*(18+o*6)*r],Q0[e+"Hand"+n+"2"]=[0,0,t*(26+o*6)*r],Q0[e+"Hand"+n+"3"]=[0,0,t*16*r]})}function Ea(e,t,r){let n=e-t;return n-=Math.round(n),Math.exp(-(n/r)*(n/r))}function rm(e){let t=9+20*Math.cos(2*Math.PI*e),r=4+13*Ea(e,.14,.07)+57*Ea(e,.72,.12),n=5*Ea(e,.06,.04)-9*Ea(e,.42,.12)+17*Ea(e,.62,.05)-3*Ea(e,.85,.1),o=-26*Ea(e,.58,.06);return{hip:t,knee:r,ankle:n,toe:o}}function ew(e){let t=(e%1+1)%1,r=rm(t),n=rm(t+.5),o=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*o,0,0],RightArm:[-16*o,0,0],LeftForeArm:[0,-14-8*Math.max(0,-o),0],RightForeArm:[0,14+8*Math.max(0,o),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-r.hip,0,0],LeftLeg:[r.knee,0,0],LeftFoot:[r.ankle,0,0],LeftToeBase:[r.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*o}}var nm=`
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
}`,om=`
precision highp float;
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${im()}
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
}`;function tw(e,t){let r=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((o,a)=>{let i=new Image;i.onload=()=>o(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}var sm={w:.13,h:.2},K0=e=>.011*(1-Math.pow(1-e,3));function rw(){let e=[],t=[],r=[],n=[],o=[],a=(d,m,w,T,C,D,$)=>{let H=e.length/3;[d,m,w,T].forEach((oe,xe)=>{e.push(...oe),t.push(...C),r.push(...$[xe]),n.push(D)}),o.push(H,H+1,H+2,H,H+2,H+3)},{w:i,h:s}=sm,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],h=-.006,p=i+.001,u=c+.001;a([0,h,-u],[p,h,-u],[p,h,u],[0,h,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,h+.001,-u],[0,h+.001,u],[p,h+.001,u],[p,h+.001,-u],[0,1,0],2,f),a([-p,h,-u],[0,h,-u],[0,h,u],[-p,h,u],[0,-1,0],2,f),a([-p,h+.001,-u],[-p,h+.001,u],[0,h+.001,u],[0,h+.001,-u],[0,1,0],2,f);let v=8;for(let d of[1,-1]){for(let w=0;w<v;w++){let T=w/v,C=(w+1)/v,D=(.002+T*(i-.002))*d,$=(.002+C*(i-.002))*d,H=K0(T),oe=K0(C),xe=d>0?T:1-T,J=d>0?C:1-C,be=1,he=-(oe-H)/($-D);a([D,H,-c],[$,oe,-c],[$,oe,c],[D,H,c],[he,be,0],3,[[xe,1],[J,1],[J,0],[xe,0]]),a([D,h+.001,c],[$,h+.001,c],[$,oe,c],[D,H,c],[0,0,1],4,f),a([D,H,-c],[$,oe,-c],[$,h+.001,-c],[D,h+.001,-c],[0,0,-1],4,f)}let m=i*d;a([m,h+.001,-c],[m,K0(1),-c],[m,K0(1),c],[m,h+.001,c],[d,0,0],4,f)}let g=10;for(let d=0;d<g;d++){let m=d/g,w=(d+1)/g,T=e.length/3;for(let[C,D]of[[m,-c],[w,-c],[w,c],[m,c]])e.push(C,0,D),t.push(0,1,0),r.push(C,(D+c)/s),n.push(5);o.push(T,T+1,T+2,T,T+2,T+3)}return{pos:e,nrm:t,uv:r,kind:n,idx:o}}function nw(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let r=7,n=()=>(r=r*16807%2147483647,r/2147483647),o=(i,s,c,f,h,p,u)=>{for(let v=0;v<p;v++){let g=i+(n()-.5)*c*2,d=s+(n()-.5)*f*2,m=20+n()*60,w=t.createRadialGradient(g,d,0,g,d,m);w.addColorStop(0,`rgba(${h},${u})`),w.addColorStop(1,`rgba(${h},0)`),t.fillStyle=w,t.fillRect(g-m,d-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var ow=`
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
		float r = u * ${sm.w.toFixed(3)};
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
}`,aw=`
precision highp float;
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${im()}
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
}`;function iw(){let e=[],t=[],r=[],n=[],o=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],h=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],p=16;for(let u=0;u<h.length;u++){let[v,g,d,m]=h[u],w=m===2?.45:1;for(let T=0;T<=p;T++){let C=T/p*Math.PI*2;e.push(Math.cos(C)*v,g,Math.sin(C)*v*w);let D=Math.max(u-1,0),$=Math.min(u+1,h.length-1),H=h[$][0]-h[D][0],oe=h[$][1]-h[D][1],xe=Math.hypot(H,oe)||1;t.push(Math.cos(C)*oe/xe,-H/xe,Math.sin(C)*oe/xe/w),r.push(...d),n.push(m)}}for(let u=0;u<h.length-1;u++)for(let v=0;v<p;v++){let g=u*(p+1)+v,d=g+p+1;o.push(g,d,g+1,g+1,d,d+1)}return{pos:e,nrm:t,col:r,mat:n,idx:o}}var sw=`
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
}`,cw=`
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
}`,lw=`
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
}`,fw=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;af.exports=e=>{let t="res/avatar/",r=null,n=Date.now(),o=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Ma.x,1.9,Ma.z],glow:0};Promise.all([fetch(t+"avatar.json").then($=>$.json()),fetch(t+"avatar.bin").then($=>$.arrayBuffer())]).then(([$,H])=>{r=s($,H)}).catch($=>console.error($));let i=e.texture({data:[[[255,255,255,255]]]});function s($,H){let oe=(ze,pt)=>new Float32Array(H,ze,pt),xe=$.bones,J=xe.length,be={};xe.forEach((ze,pt)=>{be[ze.name]=pt});let he=[];for(let ze=0;ze<J;ze++)he.push(Array.from(oe($.ibm+ze*64,16)));let Ge=xe.map(ze=>Go(ze.t,ze.r,ze.s)),Ie=[];for(let ze=0;ze<J;ze++){let pt=xe[ze].parent;Ie[ze]=pt<0?Ge[ze]:go(Ie[pt],Ge[ze])}let Ce=Ie.map(J5),ge=$.meshes.map(ze=>{let pt=oe(ze.pos,ze.n*3),kt=oe(ze.nrm,ze.n*3),Wt=oe(ze.uv,ze.n*2),bt=new Uint8Array(H,ze.jnt,ze.n*4),Gt=oe(ze.wgt,ze.n*4),mt=new Uint16Array(H,ze.idx,ze.ni),zt={};for(let Xr in ze.morphs){let Kt=ze.morphs[Xr];zt[Xr]={idx:new Uint16Array(H,Kt.idx,Kt.n),d:oe(Kt.d,Kt.n*3)}}let It=new Float32Array(ze.n*3),y=new Float32Array(ze.n*3),jt=new Float32Array(ze.n*3),nr=e.buffer({data:It,usage:"dynamic"}),Ze=e.buffer({data:y,usage:"dynamic"}),Dt=/hair/.test(ze.name),At=/EyeAO|Eyelash/.test(ze.name),or=/Body|Head/.test(ze.name),Jt=ze.kind||0;return{m:ze,pos:pt,nrm:kt,uv:Wt,jnt:bt,wgt:Gt,idx:mt,morphs:zt,outP:It,outN:y,work:jt,pb:nr,nbuf:Ze,tex:ze.tex?tw(e,t+ze.tex):i,kind:Jt,alphaScale:/EyeAO/.test(ze.name)?.25:1,blend:ze.blend||Dt,alphaCut:Dt?.35:At?.02:0,skin:or?1:0}}),nt=e({vert:nm,frag:om,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1}}),Yt=e({vert:nm,frag:om,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}});for(let ze of ge)ze.uvBuf=e.buffer(ze.uv),ze.el=e.elements({data:ze.idx,type:"uint16"});let st=Ie[be.Hips],Bt=Aa([1,0,0],-Math.PI/2),Rt=go(Go([Ma.x-st[12]*io,Ma.hipY-st[14]*io,Ma.z+st[13]*io],Bt,[1,1,1]),Go([0,0,0],[0,0,0,1],[io,io,io])),lr=new Array(J),ir=-1,Mn=(ze,pt,kt)=>go(Go([ze,0,pt],Aa([0,1,0],kt),[1,1,1]),Go([0,0,0],[0,0,0,1],[io,io,io])),Cr=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(ze=>be[ze]),Vr=Cr.map(ze=>Ie[ze][13]*io);function sn(ze){let pt=ew(ze.phase),kt={},Wt=y=>{for(let jt in y){let nr=y[jt],Ze=tm(nr[0],nr[1],nr[2]);kt[jt]=kt[jt]?Wn(kt[jt],Ze):Ze}};Wt(pt.swing),Wt(pt.pose);let bt=Math.cos(ze.heading),Gt=-Math.sin(ze.heading),mt=Mn(ze.x+bt*pt.sway,ze.z+Gt*pt.sway,ze.heading),zt=new Array(J);for(let y=0;y<J;y++){let jt=xe[y],nr=Ge[y],Ze=kt[jt.name];if(Ze){let Dt=Ce[y],At=Wn(em(Dt),Wn(Ze,Dt));nr=Go(jt.t,Wn(jt.r,At),jt.s)}zt[y]=jt.parent<0?go(mt,nr):go(zt[jt.parent],nr)}let It=1/0;Cr.forEach((y,jt)=>{It=Math.min(It,zt[y][13]-Vr[jt])});for(let y=0;y<J;y++)zt[y]=zt[y].slice(),zt[y][13]-=It,lr[y]=go(zt[y],he[y]);return{blink:0}}function Xn(ze,pt){if(pt)return sn(pt);let kt=Math.sin(ze*2*Math.PI/4.2),Wt=ze%3.7,bt=Wt<.16?Math.sin(Wt/.16*Math.PI):0,mt={RightArm:[0,0,11*Math.sin(ze*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((Ze,Dt)=>{let At=Math.sin(ze*1.1-Dt*.5);mt["RightHand"+Ze+"1"]=[0,0,8+12*At],mt["RightHand"+Ze+"2"]=[0,0,6+10*At]});let zt={},It=(Ze,Dt)=>{for(let At in Ze){let or=Ze[At],Jt=tm(or[0]*Dt,or[1]*Dt,or[2]*Dt);zt[At]=zt[At]?Wn(zt[At],Jt):Jt}};It(Q0,1),It({Spine1:[kt*.8,0,0],Spine2:[kt*.6,0,0]},1),It(mt,1);let y=new Array(J),jt=new Array(J);for(let Ze=0;Ze<J;Ze++){let Dt=xe[Ze],At=Ge[Ze],or=zt[Dt.name];if(or){let Jt=Ce[Ze],Xr=Wn(em(Jt),Wn(or,Jt));At=Go(Dt.t,Wn(Dt.r,Xr),Dt.s)}y[Ze]=Dt.parent<0?go(Rt,At):go(y[Dt.parent],At),jt[Ze]=null}for(let Ze=0;Ze<J;Ze++)lr[Ze]=go(y[Ze],he[Ze]);let nr=Ze=>[Ze[12],Ze[13],Ze[14]];return a.headPos=nr(y[be.Head]),a.hipsPos=nr(y[be.Hips]),a.headM=y[be.Head],{blink:bt}}function je(ze,pt){let{pos:kt,nrm:Wt,jnt:bt,wgt:Gt,outP:mt,outN:zt,work:It,m:y}=ze,jt=y.n,nr=kt;if(pt){It.set(kt);for(let Ze in ze.morphs){let Dt=pt[Ze]||0;if(Dt<=0)continue;let At=ze.morphs[Ze];for(let or=0;or<At.idx.length;or++){let Jt=At.idx[or]*3;It[Jt]+=At.d[or*3]*Dt,It[Jt+1]+=At.d[or*3+1]*Dt,It[Jt+2]+=At.d[or*3+2]*Dt}}nr=It}for(let Ze=0;Ze<jt;Ze++){let Dt=nr[Ze*3],At=nr[Ze*3+1],or=nr[Ze*3+2],Jt=Wt[Ze*3],Xr=Wt[Ze*3+1],Kt=Wt[Ze*3+2],Oa=0,Wo=0,Or=0,Gn=0,so=0,Yn=0;for(let An=0;An<4;An++){let cn=Gt[Ze*4+An];if(cn===0)continue;let ar=lr[bt[Ze*4+An]];Oa+=cn*(ar[0]*Dt+ar[4]*At+ar[8]*or+ar[12]),Wo+=cn*(ar[1]*Dt+ar[5]*At+ar[9]*or+ar[13]),Or+=cn*(ar[2]*Dt+ar[6]*At+ar[10]*or+ar[14]),Gn+=cn*(ar[0]*Jt+ar[4]*Xr+ar[8]*Kt),so+=cn*(ar[1]*Jt+ar[5]*Xr+ar[9]*Kt),Yn+=cn*(ar[2]*Jt+ar[6]*Xr+ar[10]*Kt)}mt[Ze*3]=Oa,mt[Ze*3+1]=Wo,mt[Ze*3+2]=Or;let Vo=Math.hypot(Gn,so,Yn)||1;zt[Ze*3]=Gn/Vo,zt[Ze*3+1]=so/Vo,zt[Ze*3+2]=Yn/Vo}y.grid&&!et&&Ue(ze),ze.pb.subdata(mt),ze.nbuf.subdata(zt)}function Ue(ze){let[pt,kt]=ze.m.grid,Wt=ze.outP,bt=ze.outN,Gt=am.seat+.012;for(let mt=1;mt<pt;mt++){let zt=Math.pow(1-mt/(pt-1),1.5);for(let It=0;It<kt;It++){let y=(mt*kt+It)*3;Wt[y+1]>Gt?Wt[y+1]=Gt+(Wt[y+1]-Gt)*Math.max(zt,.15):Wt[y+1]=Gt}}for(let mt=0;mt<bt.length;mt+=3)bt[mt]=0,bt[mt+1]=1,bt[mt+2]=0}let et=!1;function xt(ze,pt){et=!!pt;let kt=Xn(ze,pt),Wt={eyeBlinkLeft:kt.blink,eyeBlinkRight:kt.blink};for(let bt of ge)je(bt,Object.keys(bt.morphs).length?Wt:null);a.pose=kt}return{parts:ge,update:xt,drawOpaque:nt,drawBlend:Yt,state:a}}function c($,H,oe){let xe=Math.min(1,Math.max(0,(oe-$)/(H-$)));return xe*xe*(3-2*xe)}let f=rw(),h=nw(),p=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):i,u=e({vert:ow,frag:aw,attributes:{position:f.pos,normal:f.nrm,uv:f.uv,kind:f.kind},elements:new Uint16Array(f.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),v=iw(),g=e({vert:sw,frag:cw,attributes:{position:v.pos,normal:v.nrm,color:v.col,mat:v.mat},elements:new Uint16Array(v.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),d=e({vert:lw,frag:fw,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function m($){let H=$.headM,oe=ge=>{let nt=Math.hypot(...ge)||1;return ge.map(Yt=>Yt/nt)},xe=oe([H[4],H[5],H[6]]),J=oe([H[8],H[9],H[10]]),be=xe,he=J.map(ge=>-ge),Ge=[he[1]*be[2]-he[2]*be[1],he[2]*be[0]-he[0]*be[2],he[0]*be[1]-he[1]*be[0]],Ie=$.headPos,Ce=[0,1,2].map(ge=>Ie[ge]+xe[ge]*.06+J[ge]*.185);return[Ge[0],Ge[1],Ge[2],0,he[0],he[1],he[2],0,be[0],be[1],be[2],0,Ce[0],Ce[1],Ce[2],1]}let w=-1,T="",C=null;function D($){if(!r)return;let H=(J1.motion,o()),oe=C?[C.x,C.z,C.heading,C.phase].map(J=>J.toFixed(4)).join():"";(oe!==T||!C&&Math.abs(H-w)>(J1.isPhone?1/30:0))&&(r.update(H,C),w=H,T=oe);for(let J of r.parts)J.blend||r.drawOpaque({pb:J.pb,nb:J.nbuf,uv:J.uvBuf,el:J.el,tex:J.tex,alphaCut:J.alphaCut,skin:J.skin,kind:J.kind,alphaScale:J.alphaScale});let xe=r.state;if(xe.headM&&!C){u({model:m(xe)});let J=xe.headPos,be=Math.sin(H*1.3)*.02,he=[J[0],J[1]+.62+be,J[2]+.05],Ge=H*.6,Ie=Go(he,Wn(Aa([0,1,0],Ge),Aa([0,0,1],.18)),[1.2,1.2,1.2]),Ce=.5+.5*Math.sin(H*2);g({model:Ie,pulse:Ce}),a.glowPos=he,a.glow=.06+.03*Ce,d({center:[he[0],he[1]-.12,he[2]],size:.1,pulse:Ce})}for(let J of r.parts)J.blend&&r.drawBlend({pb:J.pb,nb:J.nbuf,uv:J.uvBuf,el:J.el,tex:J.tex,alphaCut:J.alphaCut,skin:J.skin,kind:J.kind,alphaScale:J.alphaScale})}return D.state=a,D.place=Ma,D.setWalk=$=>{C=$||null,C&&(a.glow=0)},D};af.exports.PLACE=Ma});var sf=ue((wE,lm)=>{"use strict";lm.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var lf=ue((_E,mm)=>{"use strict";var dm=to(),fm=es(),Do=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function cf(){return dm.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var uw=`
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
`,um=!1;function pm(){if(um)return;um=!0;let e=document.createElement("style");e.textContent=uw,document.head.appendChild(e)}var hw='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function dw(e){return!e||!e.visit||!cf()?"":(pm(),`<button type="button" class="visit-btn" data-visit="${Do(e.slug||"")}" aria-label="Visit what remained: watch ${Do(e.title)} come to life">${hw}<span>Visit what remained</span></button>`)}function pw(e){let t=e.getContext("2d");e.width=e.height=160;let r=t.createImageData(160,160),n=!0,o=0;return function a(i){if(n){if(i-o>70){o=i;let s=r.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(r,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Ts=null;function mw(e){if(Ts||!e||!e.visit)return;pm();let t=document.activeElement;document.body.classList.add("visiting");let r="images/web/"+e.slug+(dm.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${Do(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Do(e.title)}, ${Do(fm(e))}" src="${Do(r)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Do(e.title)}</span>
			<span class="visit-meta">${Do(fm(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let o=n.querySelector("video"),a=n.querySelector(".visit-title"),i=pw(n.querySelector(".visit-grain")),s=[],c=(m,w)=>s.push(setTimeout(m,w)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let h=m=>{m.key==="Escape"?(m.preventDefault(),d()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),v()),m.stopImmediatePropagation()};window.addEventListener("keydown",h,!0);let p=m=>m.stopImmediatePropagation();window.addEventListener("keyup",p,!0);let u=!1;function v(){u||(u=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function g(){u=!1,n.classList.remove("resolved"),a.classList.remove("on");try{o.currentTime=0}catch(w){}let m=o.play();m&&m.catch&&m.catch(()=>v()),n.classList.add("playing"),c(()=>{u||a.classList.add("on")},1600),c(()=>{u||a.classList.remove("on")},6200)}o.addEventListener("timeupdate",()=>{o.duration&&o.currentTime>o.duration-1.2&&v()}),o.addEventListener("ended",v),o.addEventListener("error",v);function d(){if(Ts){Ts=null,s.forEach(clearTimeout),n.classList.remove("on");try{o.pause()}catch(m){}window.removeEventListener("keydown",h,!0),window.removeEventListener("keyup",p,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",d),n.querySelector(".visit-skip").addEventListener("click",()=>{try{o.pause()}catch(m){}v()}),n.querySelector(".visit-end").addEventListener("click",m=>{let w=m.target.closest("button");w&&(w.dataset.act==="back"&&d(),w.dataset.act==="again"&&(s.forEach(clearTimeout),g()))}),o.src=e.visit.video,Ts={close:d},requestAnimationFrame(()=>{n.classList.add("on"),c(g,1300)})}var hm={};function vw(e){if(!e||!e.visit||hm[e.visit.video]||!cf())return;hm[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}mm.exports={available:cf,button:dw,open:mw,warm:vw,get active(){return!!Ts}}});var ff=ue((EE,vm)=>{vm.exports=1e-6});var uf=ue((ME,gm)=>{gm.exports=gw;function gw(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var xm=ue((AE,ym)=>{ym.exports=yw;function yw(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var hf=ue((TE,bm)=>{bm.exports=xw;function xw(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}});var df=ue((SE,wm)=>{wm.exports=bw;function bw(e,t){var r=t[0],n=t[1],o=t[2],a=r*r+n*n+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var pf=ue((kE,_m)=>{_m.exports=ww;function ww(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Tm=ue((LE,Am)=>{Am.exports=Ew;var Em=hf(),Mm=df(),_w=pf();function Ew(e,t){var r=Em(e[0],e[1],e[2]),n=Em(t[0],t[1],t[2]);Mm(r,r),Mm(n,n);var o=_w(r,n);return o>1?0:Math.acos(o)}});var km=ue((zE,Sm)=>{Sm.exports=Mw;function Mw(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var zm=ue((CE,Lm)=>{Lm.exports=Aw;function Aw(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}});var Rm=ue((RE,Cm)=>{Cm.exports=Tw;var mf=ff();function Tw(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(r-a)<=mf*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=mf*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(o-s)<=mf*Math.max(1,Math.abs(o),Math.abs(s))}});var Pm=ue((IE,Im)=>{Im.exports=Sw;function Sw(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var Nm=ue((PE,Om)=>{Om.exports=kw;function kw(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}});var vf=ue((OE,Fm)=>{Fm.exports=Lw;function Lw(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}});var Dm=ue((NE,Gm)=>{Gm.exports=vf()});var gf=ue((FE,$m)=>{$m.exports=zw;function zw(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}});var Hm=ue((GE,qm)=>{qm.exports=gf()});var yf=ue((DE,Um)=>{Um.exports=Cw;function Cw(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}});var jm=ue(($E,Bm)=>{Bm.exports=yf()});var Vm=ue((qE,Wm)=>{Wm.exports=Rw;function Rw(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}});var Ym=ue((HE,Xm)=>{Xm.exports=Iw;function Iw(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}});var Qm=ue((UE,Km)=>{Km.exports=Pw;function Pw(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var Jm=ue((BE,Zm)=>{Zm.exports=Ow;function Ow(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var tv=ue((jE,ev)=>{ev.exports=Nw;function Nw(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var nv=ue((WE,rv)=>{rv.exports=Fw;function Fw(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}});var av=ue((VE,ov)=>{ov.exports=Gw;function Gw(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}});var xf=ue((XE,iv)=>{iv.exports=Dw;function Dw(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}});var cv=ue((YE,sv)=>{sv.exports=xf()});var bf=ue((KE,lv)=>{lv.exports=$w;function $w(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}});var uv=ue((QE,fv)=>{fv.exports=bf()});var wf=ue((ZE,hv)=>{hv.exports=qw;function qw(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}});var pv=ue((JE,dv)=>{dv.exports=wf()});var _f=ue((e6,mv)=>{mv.exports=Hw;function Hw(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}});var gv=ue((t6,vv)=>{vv.exports=_f()});var xv=ue((r6,yv)=>{yv.exports=Uw;function Uw(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var wv=ue((n6,bv)=>{bv.exports=Bw;function Bw(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var Ev=ue((o6,_v)=>{_v.exports=jw;function jw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2];return e[0]=o*c-a*s,e[1]=a*i-n*c,e[2]=n*s-o*i,e}});var Av=ue((a6,Mv)=>{Mv.exports=Ww;function Ww(e,t,r,n){var o=t[0],a=t[1],i=t[2];return e[0]=o+n*(r[0]-o),e[1]=a+n*(r[1]-a),e[2]=i+n*(r[2]-i),e}});var Sv=ue((i6,Tv)=>{Tv.exports=Vw;function Vw(e,t){t=t||1;var r=Math.random()*2*Math.PI,n=Math.random()*2-1,o=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=n*t,e}});var Lv=ue((s6,kv)=>{kv.exports=Xw;function Xw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[3]*n+r[7]*o+r[11]*a+r[15];return i=i||1,e[0]=(r[0]*n+r[4]*o+r[8]*a+r[12])/i,e[1]=(r[1]*n+r[5]*o+r[9]*a+r[13])/i,e[2]=(r[2]*n+r[6]*o+r[10]*a+r[14])/i,e}});var Cv=ue((c6,zv)=>{zv.exports=Yw;function Yw(e,t,r){var n=t[0],o=t[1],a=t[2];return e[0]=n*r[0]+o*r[3]+a*r[6],e[1]=n*r[1]+o*r[4]+a*r[7],e[2]=n*r[2]+o*r[5]+a*r[8],e}});var Iv=ue((l6,Rv)=>{Rv.exports=Kw;function Kw(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2],f=r[3],h=f*n+s*a-c*o,p=f*o+c*n-i*a,u=f*a+i*o-s*n,v=-i*n-s*o-c*a;return e[0]=h*f+v*-i+p*-c-u*-s,e[1]=p*f+v*-s+u*-i-h*-c,e[2]=u*f+v*-c+h*-s-p*-i,e}});var Ov=ue((f6,Pv)=>{Pv.exports=Qw;function Qw(e,t,r,n){var o=r[1],a=r[2],i=t[1]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=o+i*f-s*c,e[2]=a+i*c+s*f,e}});var Fv=ue((u6,Nv)=>{Nv.exports=Zw;function Zw(e,t,r,n){var o=r[0],a=r[2],i=t[0]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var Dv=ue((h6,Gv)=>{Gv.exports=Jw;function Jw(e,t,r,n){var o=r[0],a=r[1],i=t[0]-o,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var qv=ue((d6,$v)=>{$v.exports=e_;var $o=uf()();function e_(e,t,r,n,o,a){var i,s;for(t||(t=3),r||(r=0),n?s=Math.min(n*t+r,e.length):s=e.length,i=r;i<s;i+=t)$o[0]=e[i],$o[1]=e[i+1],$o[2]=e[i+2],o($o,$o,a),e[i]=$o[0],e[i+1]=$o[1],e[i+2]=$o[2];return e}});var Uv=ue((p6,Hv)=>{Hv.exports={EPSILON:ff(),create:uf(),clone:xm(),angle:Tm(),fromValues:hf(),copy:km(),set:zm(),equals:Rm(),exactEquals:Pm(),add:Nm(),subtract:vf(),sub:Dm(),multiply:gf(),mul:Hm(),divide:yf(),div:jm(),min:Vm(),max:Ym(),floor:Qm(),ceil:Jm(),round:tv(),scale:nv(),scaleAndAdd:av(),distance:xf(),dist:cv(),squaredDistance:bf(),sqrDist:uv(),length:wf(),len:pv(),squaredLength:_f(),sqrLen:gv(),negate:xv(),inverse:wv(),normalize:df(),dot:pf(),cross:Ev(),lerp:Av(),random:Sv(),transformMat4:Lv(),transformMat3:Cv(),transformQuat:Iv(),rotateX:Ov(),rotateY:Fv(),rotateZ:Dv(),forEach:qv()}});var Wv=ue((m6,jv)=>{"use strict";function Bv(){let e={};return{on(t,r){return(e[t]=e[t]||[]).push(r),this},emit(t,r){(e[t]||[]).slice().forEach(n=>n(r))}}}jv.exports=function(t){let r=t.ownerDocument||document,n=Bv(),o=null,a={dx:0,dy:0,dt:0},i=0,s=()=>r.pointerLockElement||r.webkitPointerLockElement||null,c=()=>{if(s())return;let h=t.requestPointerLock||t.webkitRequestPointerLock;if(h)try{let p=h.call(t);p&&p.catch&&p.catch(()=>{})}catch(p){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){o&&(n.emit("release"),o.emit("end"),o=null);return}o=Bv(),i=Date.now(),n.emit("attain",o)};return r.addEventListener("pointerlockchange",f),r.addEventListener("webkitpointerlockchange",f),r.addEventListener("pointerlockerror",()=>n.emit("error")),(r.body||t).addEventListener("mousemove",h=>{o&&(a.dx=h.movementX||h.webkitMovementX||0,a.dy=h.movementY||h.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),o.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(r.exitPointerLock||r.webkitExitPointerLock).call(r)},n}});var Qv=ue((y6,Kv)=>{"use strict";var Ta=ls(),Sa=Uv(),t_=Wv(),v6=Math.PI/4,g6=Math.PI/6,Vv=2,r_=1,n_=2.4,o_=2.4,a_=1e3,i_=5,s_=7,Ef=xn().C,Ss=[[7,1.6],[7,Ef.zc],[Ef.x1-2.95,Ef.zc]],qo=Ss.slice(1).map((e,t)=>{let r=Ss[t],n=e[0]-r[0],o=e[1]-r[1],a=Math.hypot(n,o);return{a:r,len:a,dir:[n/a,o/a]}}),Mf=qo.reduce((e,t)=>e+t.len,0);function Xv(e){let t=Math.max(0,Math.min(Mf,e));for(let n of qo){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let r=Ss[Ss.length-1];return[r[0],r[1]]}function c_(e){let t=0;for(let n=0;n<qo.length;n++){let o=qo[n],a=t+o.len;if(e<a-1e-4||n===qo.length-1){let i=o.dir,c=e<=t+1e-4&&n>0?qo[n-1].dir:o.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let r=qo[qo.length-1].dir;return{ahead:r,back:[-r[0],-r[1]]}}var l_=Math.PI/4,f_=7,u_=140,h_=70,Yv=(e,t,r)=>(1-e)*t+e*r,d_=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Kv.exports=function({getGridSegments:e,getGridParts:t},r){var n=[0,Math.PI],o=[0,Math.PI],a=0,i=[0,0,0],s=[s_,Vv,Ss[0][1]],c=0,f=1,h=0,p=[.707,0,.707],u=[0,1,0],v=[0,0,0],g=.5,d=Ta.identity([]),m=Ta.identity([]),w=!1,T=[0,0,0],C=[0,0,0],D=1,$=!1;let H=je=>{n[1]+=je*l_},oe=(je,Ue,et)=>{if(je=Math.max(Math.min(je,100),-100),Ue=Math.max(Math.min(Ue,100),-100),n[0]=0,$){a=0;return}for(a+=je;a>=et;)H(1),a-=et;for(;a<=-et;)H(-1),a+=et};t_(document.body).on("attain",je=>{je.on("data",Ue=>{oe(Ue.dx,Ue.dy,u_)})});let J=null,be=null,he=0,Ge={x:0,y:0},Ie=58,Ce=document.createElement("div");Ce.id="museum-mobile-controls",Ce.innerHTML=`

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
	`,document.body.appendChild(Ce);let ge=Ce.querySelector("#museum-joystick"),nt=Ce.querySelector("#museum-joystick-knob"),Yt=()=>{nt.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},st=je=>{let Ue=je.clientX-Ge.x,et=je.clientY-Ge.y,xt=Math.hypot(Ue,et);if(xt>Ie&&(Ue=Ue/xt*Ie,et=et/xt*Ie),nt.style.transform=`translate(
				calc(-50% + ${Ue}px),
				calc(-50% + ${et}px)
			)`,xt<10){i[0]=0,i[2]=0;return}let pt=Ue/Ie,kt=et/Ie;i[0]=0,i[2]=Math.abs(kt)>.15?kt:0},Bt=(je,Ue)=>{for(let et=0;et<je.length;et++)if(je[et].identifier===Ue)return je[et];return null},Rt=je=>!!(je&&je.closest&&je.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),lr=je=>{if(!Rt(je.target)&&(je.cancelable&&je.preventDefault(),!$))for(let Ue=0;Ue<je.changedTouches.length;Ue++){let et=je.changedTouches[Ue];if(J===null&&et.clientX<window.innerWidth*.48){J=et.identifier;let xt=ge.getBoundingClientRect();Ge.x=xt.left+xt.width/2,Ge.y=xt.top+xt.height/2,st(et)}else be===null&&et.clientX>=window.innerWidth*.48&&(be=et.identifier,he=et.clientX,a=0)}},ir=je=>{if(Rt(je.target)||(je.cancelable&&je.preventDefault(),$))return;let Ue=J===null?null:Bt(je.touches,J);Ue&&st(Ue);let et=be===null?null:Bt(je.touches,be);if(et){let xt=et.clientX-he;he=et.clientX,oe(xt,0,h_)}},Mn=je=>{if(!Rt(je.target)){je.cancelable&&je.preventDefault();for(let Ue=0;Ue<je.changedTouches.length;Ue++){let et=je.changedTouches[Ue];et.identifier===J&&(J=null,Yt()),et.identifier===be&&(be=null)}}};document.addEventListener("touchstart",lr,{passive:!1}),document.addEventListener("touchmove",ir,{passive:!1}),document.addEventListener("touchend",Mn,{passive:!1}),document.addEventListener("touchcancel",Mn,{passive:!1});let Cr=document.createElement("style");Cr.textContent=`

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
	`,document.head.appendChild(Cr);var Vr={};let sn=je=>{if(je.defaultPrevented||je.ctrlKey||je.altKey||je.metaKey)return;let Ue=je.type==="keydown";Vr[je.code]=Ue,Ue&&!je.repeat&&!$&&((je.code==="KeyA"||je.code==="ArrowLeft")&&H(-1),(je.code==="KeyD"||je.code==="ArrowRight")&&H(1)),w=!1;let et=Vr.KeyW||Vr.ArrowUp?1:0;i=[0,0,(Vr.KeyS||Vr.ArrowDown?1:0)-et],je.preventDefault()};window.addEventListener("keydown",sn),window.addEventListener("keyup",sn);var Xn=0;return{pos:s,fmouse:o,forward:p,up:u,setPaused:je=>{$=!!je,$&&(i[0]=0,i[2]=0,Yt())},place:(je,Ue)=>{c=Math.max(0,Math.min(Mf,je));let et=Xv(c);s[0]=et[0],s[2]=et[1],n[1]=Ue,o[1]=Ue,a=0,f=1},view:()=>d,proj:()=>(Ta.perspective(m,r(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:je})=>{let Ue=je-Xn;Xn=je;let et=[0,0,0],xt=[];Sa.set(p,Math.sin(o[1]),0,-Math.cos(o[1])),Sa.set(u,0,1,0);let ze=w?o_:n_,pt=Math.sin(n[1]),kt=-Math.cos(n[1]),Wt=c_(c),bt=pt*Wt.ahead[0]+kt*Wt.ahead[1],Gt=pt*Wt.back[0]+kt*Wt.back[1],mt=f;Math.max(bt,Gt)>.3&&(mt=bt>=Gt?1:-1);let zt=$?0:-i[2]*ze;h+=(zt-h)*(1-Math.exp(-Math.min(Ue,.1)*5.5)),zt===0&&Math.abs(h)<.01&&(h=0);let It=h*mt*Math.min(Ue,.1);$&&(i[0]=0,i[2]=0,It=0,h=0),It!==0&&(f=Math.sign(It)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(Mf,c+It));let y=Xv(c);Sa.set(v,y[0]-s[0],0,y[1]-s[2]);let jt=Sa.len(v);jt===0&&g!==.25&&(g=(Math.abs((g+.5)%1-.5)-.25)*.8+.25,(g+.01)%.25<.02&&(g=.25));let nr=g;if(g+=jt/(w?i_:a_),s[1]=Vv,Sa.add(s,s,v),D<1){D+=Ue/r_,D=Math.min(D,1);let Ze=d_(D);Sa.set(s,Yv(Ze,T[0],C[0]),s[1],Yv(Ze,T[2],C[2]))}o[0]=0,o[1]+=(n[1]-o[1])*Math.min(1,Math.min(Ue,.1)*f_),Math.abs(n[1]-o[1])<5e-4&&(o[1]=n[1]),Ta.identity(d),Ta.rotateX(d,d,0),Ta.rotateY(d,d,o[1]),Ta.translate(d,d,Sa.scale(et,s,-1))}}}});var Jv=ue((x6,Zv)=>{"use strict";var{skylightGLSL:p_,Z_START:m_,Z_END:v_,GLASS_Y:g_}=ri(),{oculusGLSL:y_,A:ka}=no(),{windowLightGLSL:x_,C:Z0}=xn(),{doorLightGLSL:b_}=sa(),On=e=>e.toFixed(4),Af=.1,Tf=700,La={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.045};function w_(e,t){let r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],h=t[8],p=t[9],u=t[10],v=t[11],g=t[12],d=t[13],m=t[14],w=t[15],T=r*s-n*i,C=r*c-o*i,D=r*f-a*i,$=n*c-o*s,H=n*f-a*s,oe=o*f-a*c,xe=h*d-p*g,J=h*m-u*g,be=h*w-v*g,he=p*m-u*d,Ge=p*w-v*d,Ie=u*w-v*m,Ce=T*Ie-C*Ge+D*he+$*be-H*J+oe*xe;return Ce?(Ce=1/Ce,e[0]=(s*Ie-c*Ge+f*he)*Ce,e[1]=(o*Ge-n*Ie-a*he)*Ce,e[2]=(d*oe-m*H+w*$)*Ce,e[3]=(u*H-p*oe-v*$)*Ce,e[4]=(c*be-i*Ie-f*J)*Ce,e[5]=(r*Ie-o*be+a*J)*Ce,e[6]=(m*D-g*oe-w*C)*Ce,e[7]=(h*oe-u*D+v*C)*Ce,e[8]=(i*Ge-s*be+f*xe)*Ce,e[9]=(n*be-r*Ge-a*xe)*Ce,e[10]=(g*H-d*D+w*T)*Ce,e[11]=(p*D-h*H-v*T)*Ce,e[12]=(s*J-i*he-c*xe)*Ce,e[13]=(r*he-n*J+o*xe)*Ce,e[14]=(d*C-g*$-m*T)*Ce,e[15]=(h*$-p*C+u*T)*Ce,e):null}function __(e,t,r){let n=new Array(16);for(let o=0;o<4;o++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*r[o*4+s];n[o*4+a]=i}for(let o=0;o<16;o++)e[o]=n[o];return e}var E_=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Zv.exports=(e,t)=>{let r=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),o=r?10:22,a=()=>t.post>=2?2:4,i=ge=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},ge||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,h=e.framebuffer({color:c,depth:f||!0}),p=[s(),s()],u=[s(),s()],v=[s(),s()],g=[s(),s()],d=new Array(16).fill(0),m=new Array(16).fill(0),w=[0,0,0],T={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},C={position:[-1,-1,3,-1,-1,3]},D=(ge,nt,Yt)=>e(Object.assign({vert:E_,frag:ge,attributes:C,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:nt,framebuffer:e.prop("out")},Yt||{})),$=[2.6,0,m_-3.2,12.6,g_,v_+.4],H=[ka.x0-.2,0,ka.z0,ka.x1,ka.domeTop,ka.z1],oe=[Z0.x0,0,Z0.z0,Z0.x1,7.6,Z0.z1],xe=[.35,0,.35,13.65,7.6,9],J=ge=>`vec3(${On(ge[0])}, ${On(ge[1])}, ${On(ge[2])}), vec3(${On(ge[3])}, ${On(ge[4])}, ${On(ge[5])})`,be=D(`
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

	${p_()}
	${y_()}
	${x_()}
	${b_()}

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
					if (p.y < ${On(ka.dome.base)} && p.x > ${On(ka.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
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
			vec2 t = hitBox(eye, rd, ${J(xe)});
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
	}`,{depthTex:()=>f,invVP:()=>d,eye:()=>w,time:e.context("time"),strength:()=>{let ge=La.shafts*T.shafts;return[.06*ge,.1*ge,.07*ge,.04*ge]}}),he=D(`
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
	}`,{src:e.prop("src"),dir:(ge,nt)=>[nt.dir[0]/nt.size[0],nt.dir[1]/nt.size[1]]}),Ge=D(`
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
	}`,{src:e.prop("src"),texel:(ge,nt)=>[.5/nt.size[0],.5/nt.size[1]],threshold:e.prop("threshold")}),Ie=D(`
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
		return 2.0 * ${On(Af)} * ${On(Tf)} / (${On(Tf+Af)} - z * ${On(Tf-Af)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>p[0],bloomA:()=>u[0],bloomB:()=>v[0],shafts:()=>g[0],res:ge=>[ge.drawingBufferWidth,ge.drawingBufferHeight],time:e.context("time"),exposure:()=>La.exposure*T.exposure,vignette:()=>Math.min(1,La.vignette+T.vignette),grain:()=>La.grain,bloomK:()=>La.bloom,letterbox:()=>T.letterbox,fade:()=>T.fade,fadeColor:()=>T.fadeColor,aperture:()=>t.post>=2?T.aperture:0,focus:()=>T.focus,hasDepth:n?1:0},{framebuffer:null}),Ce=e({framebuffer:()=>h});return{shot:T,look:La,hasDepth:n,capture(ge,nt,Yt){let st=ge.drawingBufferWidth,Bt=ge.drawingBufferHeight;h.resize(st,Bt);let Rt=Math.max(1,Math.ceil(st/2)),lr=Math.max(1,Math.ceil(Bt/2));p.forEach(ir=>ir.resize(Rt,lr)),u.forEach(ir=>ir.resize(Math.max(1,Math.ceil(st/4)),Math.max(1,Math.ceil(Bt/4)))),v.forEach(ir=>ir.resize(Math.max(1,Math.ceil(st/8)),Math.max(1,Math.ceil(Bt/8)))),g.forEach(ir=>ir.resize(Math.max(1,Math.ceil(st/a())),Math.max(1,Math.ceil(Bt/a())))),__(m,nt.proj,nt.view),w_(d,m),w[0]=nt.eye[0],w[1]=nt.eye[1],w[2]=nt.eye[2],Ce(()=>{e.clear({color:[0,0,0,1],depth:1}),Yt()})},present(){let ge=nt=>[nt.width,nt.height];n&&t.post>=1&&La.shafts*T.shafts>.001?(be({out:g[0]}),he({out:g[1],src:g[0],dir:[1,0],size:ge(g[0])}),he({out:g[0],src:g[1],dir:[0,1],size:ge(g[0])})):e.clear({color:[0,0,0,1],framebuffer:g[0]}),Ge({out:p[0],src:c,size:[h.width,h.height],threshold:0}),he({out:p[1],src:p[0],dir:[1,0],size:ge(p[0])}),he({out:p[0],src:p[1],dir:[0,1],size:ge(p[0])}),Ge({out:u[0],src:p[0],size:ge(p[0]),threshold:.42}),he({out:u[1],src:u[0],dir:[1,0],size:ge(u[0])}),he({out:u[0],src:u[1],dir:[0,1],size:ge(u[0])}),Ge({out:v[0],src:u[0],size:ge(u[0]),threshold:0}),he({out:v[1],src:v[0],dir:[1.5,0],size:ge(v[0])}),he({out:v[0],src:v[1],dir:[0,1.5],size:ge(v[0])}),Ie({out:null})}}}});var n2=ue((b6,r2)=>{"use strict";var M_=ia(),Sf=sa(),{C:A_,FAR_DOOR:T_}=xn(),S_=100*Math.PI/180,e2=e=>[T_.x-e[2],e[1],A_.zc-7+e[0]],t2=e=>[-e[2],e[1],e[0]];function k_(e){let t=[],r=[],n=[],o=[],a=M_.createBuilder(t,r,n,o);Sf.addFrames(a,e);let i=Sf.glassPanes(e),s=c=>{let f=[];for(let h=0;h<c.length;h+=3)f.push([c[h],c[h+1],c[h+2]]);return f};return{position:s(t),normal:s(r),elements:n,glass:i}}r2.exports=e=>{let t=Sf.DOOR,r=["left","right"].map(h=>{let p=k_(h),u=p.position.length;return{part:h,hinge:h==="left"?t.x0:t.x1,sign:h==="left"?-1:1,src:p.position.map(v=>v.slice()),srcN:p.normal.map(v=>v.slice()),srcG:p.glass.map(v=>v.slice()),pos:e.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(p.elements),type:"uint32"}),glassCount:p.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(p.glass.length*3),outGN:new Float32Array(p.glass.length*3)}}),n=null;function o(h){if(h!==n){n=h;for(let p of r){let u=p.sign*h,v=Math.cos(u),g=Math.sin(u),d=T=>{let C=T[0]-p.hinge,D=T[2];return[p.hinge+C*v+D*g,T[1],-C*g+D*v]},m=T=>[T[0]*v+T[2]*g,T[1],-T[0]*g+T[2]*v];p.src.forEach((T,C)=>{let D=e2(d(T));p.outP.set(D,C*3),p.outN.set(t2(m(p.srcN[C])),C*3)});let w=t2(m([0,0,1]));p.srcG.forEach((T,C)=>{p.outG.set(e2(d(T)),C*3),p.outGN.set(w,C*3)}),p.pos.subdata(p.outP),p.nrm.subdata(p.outN),p.gpos.subdata(p.outG),p.gnrm.subdata(p.outGN)}}}o(0);let a=`
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
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{o(c*S_);for(let h of r)i({pos:h.pos,nrm:h.nrm,el:h.el})};return f.glass=()=>{for(let h of r)s({pos:h.gpos,nrm:h.gnrm,count:h.glassCount})},f.setOpen=h=>{c=h||0},f}});var a2=ue((w6,o2)=>{"use strict";var{skylightGLSL:L_}=ri(),{oculusGLSL:z_}=no(),{windowLightGLSL:C_}=xn(),Ho=.22;function R_(){let e=[],t=[],r=[],n=[];for(let c=0;c<=14;c++){let f=c/14,h=Ho*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9);for(let p=0;p<=4*2;p++){let u=p/4-1,v=f*Ho-Ho*.12,g=u*h,d=Math.abs(u)*h*.35-.12*f*f*Ho;e.push([v,d,g]),t.push([0,1,0]),r.push([f,u])}}let i=4*2+1;for(let c=0;c<14;c++)for(let f=0;f<i-1;f++){let h=c*i+f,p=h+1,u=h+i,v=u+1;n.push([h,u,p],[p,u,v])}let s=e.length;return e.push([-Ho*.12,0,-.003],[-Ho*.12,0,.003],[-Ho*.24,-.01,.0015],[-Ho*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),r.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([s,s+2,s+1],[s,s+3,s+2]),{pos:e,nrm:t,uv:r,idx:n}}o2.exports=e=>{let t=R_(),r=e({vert:`
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

		${L_()}
		${z_()}
		${C_()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}});return function(n){n&&n.visible&&r({model:n.model})}}});var c2=ue((_6,s2)=>{"use strict";var{skylightGLSL:I_,Z_START:i2,Z_END:P_}=ri(),{oculusGLSL:O_,A:bi}=no();s2.exports=(e,t)=>{let r=t.isPhone?900:2600,n=t.isPhone?350:900,o=7,a=()=>(o=o*16807%2147483647,(o-1)/2147483646),i=[];for(let s=0;s<r;s++)i.push([2.5+a()*10.5,.3+a()*8,i2-3.5+a()*(P_-i2+4.5),a()]);for(let s=0;s<n;s++)i.push([bi.x0+.3+a()*(bi.x1-bi.x0-.6),.3+a()*7.5,bi.z0+.3+a()*(bi.z1-bi.z0-.6),a()]);return e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;

		${I_()}
		${O_()}

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
		}`,attributes:{seed:i},count:i.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:s=>s.viewportHeight*.006},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}})}});var x2=ue((E6,y2)=>{"use strict";var yo=ls(),J0=sf(),kf=v0(),N_=es(),Lf=lf(),{A:_n}=no(),{C:Hr,PAINTING_X:Ai}=xn(),En=e=>Math.max(0,Math.min(1,e)),Le=(e,t,r)=>e+(t-e)*r,Zt=(e,t,r)=>[Le(e[0],t[0],r),Le(e[1],t[1],r),Le(e[2],t[2],r)],Mt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],l2=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],f2=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Me=(e,t,r)=>{let n=En((r-e)/(t-e));return n*n*(3-2*n)};function F_(e,t,r,n,o,a){if(o<=0)return[e,r];let i=2/n,s=i*o,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,h=Math.max(-f,Math.min(f,e-t)),p=e-h,u=(r+i*h)*o,v=(r-i*u)*c,g=p+(h+u)*c;return t-e>0==g>t&&(g=t,v=0),[g,v]}var u2=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,G_=e=>e*e*e,zf=e=>1-Math.pow(1-e,3),mr=e=>-(Math.cos(Math.PI*e)-1)/2;function _r(e,t){let r=e.length-1,n=En(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],h=a*a,p=h*a;return[0,1,2].map(u=>.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-f[u])*h+(-i[u]+3*s[u]-3*c[u]+f[u])*p))}var dt=(e,t,r,n)=>({eye:e,target:t,fov:r,roll:n||0});function Ia(e,t,r){return dt(Zt(e.eye,t.eye,r),Zt(e.target,t.target,r),Le(e.fov,t.fov,r),Le(e.roll,t.roll,r))}var Nf=()=>Me(.75,1.3,window.innerWidth/window.innerHeight),on=(e,t)=>Ia(e,t,Nf()),ec=[7,3.95,Hr.hallEnd-.05],D_=[Hr.x1,2.9,Hr.zc],Ei=[16.75,4.55,6.75],Ff=[6.92,2.72,14.5],Vn=[7.3,.015,47.1],$_=[Ei,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Ff],q_=[Ff,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Vn],za=[Ai[0],3,Hr.z0],Ca=[Ai[1],3,Hr.z0],Rf=47.45,g2=4.6,H_=13.2,U_=1.42,ks=[7.55,1.25,46.75],Gf=[17.25,2.42,46],Df=[26.05,1.95,46],Ls=[36.15,.015,44],nc=()=>Le(6.8,6.15,Nf()),B_=[ks,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Gf],j_=[Gf,[20.2,2.05,45.6],[23.2,1.8,45],Df],Ra=[Ai[2],3,Hr.z0],If=[34.8,1.35,46],Bo=[7.89,.03,19.03],h2=.36,d2=13.64,Wr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Nn(e){let t=e.side==="left"?1:-1;return Zt([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],Nf())}function W_(e){return e.side==="left"?on(dt([8.6,3.9,e.z],[h2,1.45,e.z],76),dt([8,3.6,e.z+.7],[h2,3.95,e.z-2],46,-.008)):on(dt([5.4,3.9,e.z],[d2,1.45,e.z],76),dt([6,3.6,e.z-.7],[d2,3.95,e.z+2],46,-.008))}var V_=()=>[Ls,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Nn(Wr[0])],X_=()=>[Nn(Wr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Nn(Wr[3])],Y_=()=>[Nn(Wr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Bo],p2={2:{pos:()=>Ff,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>ks,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Gf,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Df,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>If,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Nn(Wr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Nn(Wr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Nn(Wr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Nn(Wr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Nn(Wr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Nn(Wr[5]),amp:[.12,.08,.1],tumble:.5}},Uo=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),r=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=on(dt([Hr.x0+.9,1.85,Hr.zc+.25],[Hr.x1,2.85,Hr.zc-.1],64),dt([Hr.x0+1.2,2,Hr.zc+.35],[Hr.x1,2.6,Hr.zc-.15],50));return n.eye=Mt(Mt(n.eye,[t,0,0]),r),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],r=on(dt([16.6,1.9,9.2],[17.3,.4,5.6],64),dt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return r.eye=Mt(r.eye,t),r}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],r=on(dt([7,1.35,13],[7.2,7.6,20.4],74,.05),dt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return r.eye=Mt(r.eye,t),r}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],r=on(dt([7,3.6,43.7],[7,3.85,ec[2]],74),dt([7,3.6,41.3],[7,3.95,ec[2]],46));return r.eye=Mt(r.eye,t),r}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=on(dt([7,3.9,40.3],[7,1.35,ec[2]],76),dt([6.3,3.6,41.2],[3.7,3.95,ec[2]],46,-.008));return r.eye=Mt(r.eye,t),r}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=on(dt([7.15,.15,46],[7.3,.04,Vn[2]],50),dt([7.05,.14,45.9],[7.25,.05,Vn[2]],32));return r.eye=Mt(r.eye,t),r}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],r=on(dt([7.15,.1,46.3],[7.05,.1,Rf],50),dt([7.1,.12,45.85],[7,.2,Rf],30));return r.eye=Mt(r.eye,t),r}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],r=on(dt([7.3,.85,45.65],[7.6,1.38,47.1],64),dt([7.25,.82,45.8],[7.65,1.35,47.1],44));return r.eye=Mt(r.eye,t),r}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=on(dt([za[0],2.3,46.85],[za[0],1.25,za[2]],74),dt([za[0]-.6,2.55,46.85],[za[0]+1.9,2.9,za[2]],46,.008));return r.eye=Mt(r.eye,t),r}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=on(dt([Ca[0],1.95,46.85],[Ca[0],1,Ca[2]],74),dt([Ca[0]-.6,2.1,46.85],[Ca[0]+1.9,2.75,Ca[2]],46,.008));return r.eye=Mt(r.eye,t),r}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=on(dt([Ra[0],1.4,46.85],[Ra[0],.6,Ra[2]],74),dt([Ra[0]-.6,1.45,46.85],[Ra[0]+1.9,2,Ra[2]],46,.008));return r.eye=Mt(r.eye,t),r}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=on(dt([34.75,.5,44.15],[Hr.x1,.8,43.95],66),dt([34.75,.45,44.3],[Hr.x1,.35,43.95],50));return r.eye=Mt(r.eye,t),r}},...Wr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(r){let n=[Math.sin(r*.15)*.04,Math.sin(r*.25)*.015,Math.sin(r*.11)*.04],o=W_(e);return o.eye=Mt(o.eye,n),o}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,r=on(dt([7.75,2.6,18.6],[7.89,0,19.08],60),dt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=r.eye[0]-Bo[0],o=r.eye[2]-Bo[2];return r.eye=[Bo[0]+n*Math.cos(t)-o*Math.sin(t),r.eye[1],Bo[2]+n*Math.sin(t)+o*Math.cos(t)],r}}],K_=[1,.96,.88];function m2(e,t){return{dur:t,cam(r,n,o){let a=mr(r),i=Ia(n,o,a),s=Wr[e].side==="left"?1:-1;return i.eye=Mt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(r,n,o){let a={};for(let i in o)typeof o[i]=="number"&&(a[i]=Le(n[i],o[i],r));return a.aperture=Le(n.aperture,o.aperture,r)*(1-.5*Math.sin(Math.PI*r)),a},leaf(r){let n=mr(r),o=Nn(Wr[e]),a=Nn(Wr[e+1]),i=Wr[e].side==="left"?1:-1,s=Mt(Zt(o,a,.5),[i*1.2,.5,0]),c=_r([o,Zt(o,s,.6),s,Zt(a,s,.6),a],n);return{phase:"fly",pos:Mt(c,[0,Math.sin(r*Math.PI*5)*.07*Math.sin(Math.PI*r),0]),tumble:.5+.35*Math.sin(Math.PI*r)}}}}var Cf=[{dur:6.2,cam(e,t,r){if(e<.5){let s=G_(e/.5),c=Zt(t.eye,[Hr.x1-3.2,2.6,Hr.zc],s),f=Zt(t.target,D_,Me(0,.6,e/.5));return dt(c,f,Le(t.fov,t.fov-8,s),Le(t.roll,.04,s))}let n=zf((e-.5)/.5),o=[[_n.cx+.4,10.4,_n.zc+.6],[_n.cx-.6,7.6,_n.zc+1.3],[_n.cx-1.9,4.6,_n.zc+1.75],r.eye],a=[[_n.cx-.1,0,_n.zc-.2],[_n.cx-1,.4,_n.zc-.1],[_n.cx-1.1,.8,_n.zc-.2],r.target];return dt(_r(o,n),_r(a,n),Le(r.fov+14,r.fov,n),Le(-.25,r.roll,n))},look(e,t,r){let n=Me(.22,.5,e),o=1-Me(.5,.74,e);return{fade:e<.5?n:o,fadeColor:K_,exposure:Le(t.exposure,r.exposure,Me(.5,.9,e))*(1+2.2*(e<.5?Me(.15,.5,e):1-Me(.5,.8,e))),letterbox:Le(t.letterbox,r.letterbox,Me(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):r.aperture*Me(.6,1,e),focus:Le(4,r.focus,Me(.5,1,e)),shafts:Le(t.shafts,r.shafts,Me(.4,.6,e)),vignette:Le(t.vignette,r.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,r,n){let o=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],r.eye],a=_r(o,mr(e)),i=Me(0,.12,e)*(1-Me(.82,1,e)),s=Zt(Zt(t.target,r.target,Me(.55,1,e)),n.pos,i),c=Le(t.fov,r.fov,Me(.3,1,e))-6*Math.sin(Math.PI*e),f=Le(t.roll,r.roll,e)+.05*Math.sin(Math.PI*2*e);return dt(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Le(t.exposure,r.exposure,Me(.25,.75,e)),letterbox:Le(t.letterbox,r.letterbox,e),focus:Le(a,r.focus,Me(.8,1,e)),aperture:Le(.7,r.aperture,Me(.8,1,e)),shafts:Le(t.shafts,r.shafts,Me(.3,.8,e)),vignette:Le(t.vignette,r.vignette,e)}},leaf(e){let t=u2(e),r=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:Mt(_r($_,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),r]),tumble:1-.5*Me(.8,1,e)}}},{dur:11.5,cam(e,t,r,n){let o=_r([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Me(0,.8,e)*.6+mr(En(e/.8))*.4),a=_r([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],r.eye],mr(Me(.8,1,e))),i=e<.8?o:a,s=Zt(Zt(t.target,n.pos,Me(.03,.22,e)),r.target,Me(.82,1,e)),c=Le(t.fov,r.fov,Me(.15,.7,e))-6*Me(.6,.8,e)*(1-Me(.85,1,e)),f=Le(t.roll,r.roll,Me(0,.6,e))-.04*Math.sin(Math.PI*e);return dt(i,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Le(t.exposure,r.exposure,Me(.5,1,e)),letterbox:Le(t.letterbox,r.letterbox,e),focus:Le(a,r.focus,Me(.84,1,e)),aperture:Le(1.1,r.aperture,Me(.84,1,e)),shafts:Le(t.shafts,r.shafts,Me(.2,.9,e)),vignette:Le(t.vignette,r.vignette,Me(.5,1,e))}},leaf(e){let t=Le(u2(e),e,.35),r=_r(q_,Me(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Me(.55,.76,e)),o=Me(.7,.8,e);return{phase:"fly",pos:Mt(r,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-o),0]),tumble:1-o,swing:n}}},{dur:2.6,cam(e,t,r){let n=mr(e),o=Ia(t,r,n);return o.eye=Mt(o.eye,[0,0,-.35*Math.sin(Math.PI*n)]),o},look(e,t,r){let n=mr(e),o={};for(let a in r)typeof r[a]=="number"&&(o[a]=Le(t[a],r[a],n));return o},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,r){let n=mr(e),o=_r([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],r.eye],n),a=Zt(t.target,r.target,Me(.1,.85,e));return dt(o,a,Le(t.fov,r.fov,Me(.2,1,e)),Le(t.roll,r.roll,n))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],Me(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,r){return Ia(t,r,mr(e))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],mr(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Le(g2,nc(),e)}},{dur:7.5,kick:e=>En((e-wi())/(1-wi())),cam(e,t,r,n){let o=wi(),a=Me(0,o,e)*(1-Me(o+.12,o+.35,e)),i=v2(Math.min(e,Mi)),s=Mt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Me(o+.12,1,e),f=_r([t.eye,t.eye,Mt(t.eye,[0,.12,-.3]),r.eye],c);return s=Zt(s,n.pos,Me(o+.06,o+.24,e)*(1-Me(.9,1,e))),s=Zt(s,r.target,Me(.88,1,e)),dt(f,s,Le(t.fov,r.fov,c),Le(t.roll,r.roll,c))},look(e,t,r,n,o){let a=wi(),i=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),s=Me(0,.12,e)*(1-Me(a+.25,a+.5,e));return{letterbox:Le(Le(t.letterbox,r.letterbox,Me(a,1,e)),1.75,s),exposure:Le(t.exposure,r.exposure,Me(a,1,e)),focus:e<a?t.focus:Le(t.focus,i,Me(a,a+.2,e)),aperture:Le(t.aperture,r.aperture,Me(a,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=En((e-wi())/(1-wi()));if(t<=0)return{phase:"floor"};let r=Me(0,.85,t)*.85+zf(Me(0,.15,t))*.15;return{phase:"fly",pos:Mt(Vn,[(ks[0]-Vn[0])*r+Math.sin(t*9)*.08*(1-t),(ks[1]-Vn[1])*r,(ks[2]-Vn[2])*r+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?v2(e):null}},{dur:9,cam(e,t,r,n){let o=mr(e),a=_r([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],r.eye],o),i=1-Me(.6,.92,e),s=Zt(Zt(t.target,n.pos,Me(0,.15,e)),r.target,1-i),c=Le(t.fov,r.fov,Me(.3,1,e)),f=Le(t.roll,r.roll,o)+.04*Math.sin(Math.PI*e);return dt(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,Me(.3,.8,e)),focus:Le(a,r.focus,Me(.6,.95,e)),aperture:Le(t.aperture,r.aperture,Me(.6,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,Me(.3,.8,e))}},leaf(e){let t=mr(e);return{phase:"fly",pos:Mt(_r(B_,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=mr(e),o=Ia(t,r,n);return o.eye=Mt(o.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],e));return n.aperture=Le(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=mr(e);return{phase:"fly",pos:Mt(_r(j_,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=mr(e),o=Ia(t,r,n);return o.eye=Mt(o.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Le(t[o],r[o],e));return n.aperture=Le(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=mr(e);return{phase:"fly",pos:Mt(_r([Df,[29.2,1.75,45.5],[32.2,1.5,45.4],If],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,r,n){let o=mr(e),a=_r([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],r.eye],o),i=Me(.05,.3,e)*(1-Me(.8,1,e)),s=Zt(Zt(t.target,r.target,Me(.6,1,e)),n.pos,i);return dt(a,s,Le(t.fov,r.fov,Me(.2,1,e)),Le(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,e),focus:Le(a,r.focus,Me(.8,1,e)),aperture:Le(.9,r.aperture,Me(.8,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=_r([If,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ls],Me(0,.85,e)),r=Math.sin(e*Math.PI*6)*.25*(1-Me(.35,.82,e)),n=Me(.78,.88,e);return{phase:"fly",pos:Mt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),r]),tumble:.7*(1-n),swing:r}}},{dur:12,door(e){let t=En((e-.02)/.09);return zf(t)+.07*Math.sin(En((e-.08)/.18)*Math.PI)*(1-En((e-.08)/.3))},cam(e,t,r,n){let o=Math.sin(e*340)*.012*Me(.02,.05,e)*(1-Me(.08,.16,e)),a=Me(.06,1,e),i=_r([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],r.eye],a*.55+mr(a)*.45),s=Mt(n.pos,[1,-.2,-1.45]);i=Zt(i,s,Me(.1,.22,e)*(1-Me(.52,.72,e)));let c=Me(.06,.16,e)*(1-Me(.86,1,e)),f=Zt(t.target,n.pos,c);f=Zt(f,r.target,Me(.86,1,e));let h=Le(t.fov,r.fov,Me(.1,1,e))+6*Math.sin(Math.PI*Me(.08,.9,e)),p=Le(t.roll,r.roll,e)+.06*Math.sin(Math.PI*2*Me(.1,.9,e))+o;return dt(Mt(i,[0,o,0]),f,h,p)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),i=Me(.02,.06,e)*(1-Me(.08,.3,e));return{letterbox:Le(t.letterbox,r.letterbox,Me(.1,.4,e)),exposure:Le(t.exposure,r.exposure,e)*(1+.8*i),focus:Le(a,r.focus,Me(.86,1,e)),aperture:Le(.8,r.aperture,Me(.86,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)+i}},leaf(e){let t=En((e-.05)/.95);if(t<=0)return{phase:"floor"};let r=_r(V_(),t*.6+mr(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:Mt(r,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>m2(e,7.5)),{dur:10,cam(e,t,r,n){let o=mr(e),a=_r([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],r.eye],o),i=Me(0,.15,e)*(1-Me(.85,1,e)),s=Zt(Zt(t.target,r.target,Me(.5,1,e)),n.pos,i);return dt(a,s,Le(t.fov,r.fov,o)+4*Math.sin(Math.PI*o),Le(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,e),focus:Le(a,r.focus,Me(.85,1,e)),aperture:Le(.6,r.aperture,Me(.85,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=mr(e),r=_r(X_(),t);return{phase:"fly",pos:Mt(r,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>m2(e,7.5)),{dur:10,cam(e,t,r,n){let o=mr(e),a=_r([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],r.eye],o),i=Me(0,.2,e)*(1-Me(.9,1,e)),s=Zt(Zt(t.target,r.target,Me(.5,1,e)),n.pos,i);return dt(a,s,Le(t.fov,r.fov,o),Le(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Le(t.letterbox,r.letterbox,e),exposure:Le(t.exposure,r.exposure,e),focus:Le(a,r.focus,Me(.85,1,e)),aperture:Le(.7,r.aperture,Me(.85,1,e)),vignette:Le(t.vignette,r.vignette,e),shafts:Le(t.shafts,r.shafts,e)}},leaf(e){let t=_r(Y_(),Me(0,.86,e)),r=Math.sin(e*Math.PI*7)*.3*(1-Me(.4,.84,e)),n=Me(.8,.9,e);return{phase:"fly",pos:Mt(t,[r,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:r}}}],Pf=9.2,Mi=.6;function v2(e){return e<Mi?Le(nc(),Pf,e/Mi):Le(Pf,H_,(e-Mi)/(1-Mi))}function wi(){return Mi*En((Vn[0]+.15-nc())/(Pf-nc()))}var Of={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},tc=e=>Object.assign({},Of,Uo[e].look),Q_=`
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
`;function wn(e,t,r){let n=document.createElement(e);return t&&(n.className=t),r!==void 0&&(n.innerHTML=r),n}var _i=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function rc(e,t,r){e.querySelectorAll(".tour-line").forEach((n,o)=>{n.style.transitionDelay=(t+o*r).toFixed(2)+"s"})}y2.exports=function(t){let r=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let ae=document.createElement("link");ae.rel="stylesheet",ae.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",ae.setAttribute("data-tour-font",""),document.head.appendChild(ae)}let o=document.createElement("style");o.textContent=Q_+`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(o);let a=wn("div","tour");a.setAttribute("role","region"),a.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let i=wn("div","tour-mark",_i(J0.name)),s=wn("button","tour-free","Explore freely");s.type="button";let c=wn("div","tour-links",kf.icons("tour-icon"));c.appendChild(s);let f=wn("div","tour-progress",Uo.map(()=>"<i></i>").join("")),h=wn("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=h.querySelector("span"),u=wn("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${_i(J0.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);rc(u,.4,.35);let v=J0.text.split(/\n\s*\n/).map(ae=>`<p class="tour-line">${_i(ae.trim())}</p>`).join(""),g=wn("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${_i(J0.title)}</h2>
		<span class="tour-rule"></span>
		${kf.line("tour-line tour-contact")}
		${v}`);rc(g,.25,.28);let d=wn("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);rc(d,.6,.3);let m=wn("div","tour-card tour-master","");function w(ae){let Ae=wn("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Ve=Ae.querySelector(".tour-title"),gt=Ae.querySelector(".tour-body");return Ae.filled=!1,Ae.body=gt,Ae.fill=()=>{let Lt=ae();if(!Lt||Ae.filled)return;Ae.filled=!0;let Pt=Lt.title||"";Ae.querySelector(".tour-kicker").textContent=N_(Lt)||"Oil on canvas";let Tn=Ae.querySelector(".visit-row");Tn.innerHTML=Lf.button(Lt),Tn.hidden=!Tn.innerHTML;let vr=Tn.querySelector(".visit-btn");vr&&(vr.addEventListener("click",Er=>{Er.stopPropagation(),Lf.open(Lt)}),Ae.warm=()=>Lf.warm(Lt));let Nr=0;Ve.innerHTML=Pt.split(" ").map(Er=>'<span class="tour-word">'+Er.split("").map(Kn=>`<span style="transition-delay:${(.35+Nr++*.045).toFixed(3)}s">${_i(Kn)}</span>`).join("")+"</span>").join(" "),Ve.setAttribute("aria-label",Pt);let $t=.35+Pt.length*.045+.2;Ae.querySelector(".tour-rule").style.transitionDelay=$t.toFixed(2)+"s";let Fr=String(Lt.description||"").split(/\n\s*\n/).filter(Er=>Er.trim());gt.innerHTML=Fr.map(Er=>`<p class="tour-line">${_i(Er.trim())}</p>`).join(""),Ae.querySelector(".tour-kicker").style.transitionDelay="0.1s",gt.querySelectorAll(".tour-line").forEach((Er,Kn)=>{Er.style.transitionDelay=($t+.3+Math.min(Kn,6)*.35).toFixed(2)+"s"})},Ae}let T=()=>t.paintings?t.paintings():[],C=ae=>T().find(Ae=>Ae.side==="corridor"&&Math.abs(Ae.paintingPosition[0]-ae)<.5),D=w(()=>T().find(ae=>ae.side==="end")),$=()=>wn("div","tour-card",""),H=w(()=>C(za[0])),oe=w(()=>C(Ca[0])),xe=w(()=>C(Ra[0])),J=Wr.map(ae=>w(()=>T().find(Ae=>Ae.side===ae.side&&Math.abs(Ae.paintingPosition[2]-ae.z)<.5))),be=wn("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">The rest of the gallery is yours to wander.</span>
		${kf.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);rc(be,.5,.35);let he=[u,g,d,m,D,$(),$(),$(),H,oe,xe,$(),...J,be];a.append(...he,i,c,f,h),document.body.appendChild(a),document.body.classList.add("touring");let Ge=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Ie=Ge?"Scroll":"Swipe",Ce=Uo.map((ae,Ae)=>Ae===0?Ge?"Scroll to begin":"Swipe up to begin":Ae===1?Ie+" to follow the leaf":Ae===2?Ie+" to follow the light":Ae===3?Ie+" for its story":Ae===6||Ae===7||Ae===Uo.length-1?"":Ie+" on"),ge=[0];Cf.forEach(ae=>ge.push(ge[ge.length-1]+ae.dur));let nt=ge[ge.length-1],Yt=210,st=95,Bt=.35,Rt=1.4,lr=.32,ir=1,Mn=1.3,Cr=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Vr=2.2,sn=.7,Xn=.9,je=!0,Ue=0,et=0,xt=0,ze=-10,pt=!1,kt=-1,Wt=0,bt=0,Gt=0,mt=null,zt=Object.assign({},tc(0)),It=Uo[0].cam(0),y={phase:"home",pos:Ei.slice(),tumble:0},jt=0,nr=ae=>{let Ae=0;for(let Ve=1;Ve<ge.length;Ve++)Math.abs(ge[Ve]-ae)<Math.abs(ge[Ae]-ae)&&(Ae=Ve);return Ae};function Ze(ae){let Ae=he[ae];Ae&&Ae.fill&&(Ae.fill(),Ae.body.scrollTop=0,Ae.offsetWidth),he.forEach((Ve,gt)=>Ve.classList.toggle("on",gt===ae)),Ae&&Ae.warm&&Ae.warm(),p.textContent=Ce[ae]||"",h.classList.toggle("on",!!Ce[ae])}function Dt(){he.forEach(ae=>ae.classList.remove("on")),h.classList.remove("on")}let At=null,or=-1;function Jt(ae){if(!je||mt)return;let Ae=Gt-ze>Bt;if(ze=Gt,Ae||!At){let Ve=0,gt=nt;for(let Lt=0;Lt<ge.length;Lt++)if(ge[Lt]<=Ue-.02&&(Ve=ge[Lt]),ge[Lt]>=Ue+.02){gt=ge[Lt];break}At={lo:Ve,hi:gt}}Gt<or||(pt=!1,xt=Math.max(At.lo,Math.min(At.hi,xt+ae)),xt=Math.max(Ue-Vr,Math.min(Ue+Vr,xt)))}function Xr(ae){if(!je||mt)return;let Ae=pt?xt:Ue,Ve;if(ae>0)Ve=ge.findIndex(gt=>gt>Ae+.05);else{Ve=-1;for(let gt=ge.length-1;gt>=0;gt--)if(ge[gt]<Ae-.05){Ve=gt;break}}Ve<0||(xt=ge[Ve],pt=!0,ze=Gt)}let Kt=null,Oa=ae=>ae.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(ae=>a.addEventListener(ae,Oa)),a.addEventListener("pointerdown",ae=>{if(ae.stopPropagation(),!(ae.target.closest("button, a")||ae.target.closest(".tour-body"))){Kt={x:ae.clientX,y:ae.clientY,lx:ae.clientX,ly:ae.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{a.setPointerCapture(ae.pointerId)}catch(Ae){}}}),a.addEventListener("pointermove",ae=>{if(!Kt)return;let Ae=ae.clientX-Kt.lx,Ve=ae.clientY-Kt.ly;Kt.lx=ae.clientX,Kt.ly=ae.clientY;let gt=Math.abs(Ve)>=Math.abs(Ae)?-Ve:-Ae;Kt.moved+=Math.abs(gt);let Lt=performance.now(),Pt=gt/st;Kt.v=Kt.v*.6+Pt/Math.max(.008,(Lt-Kt.lt)/1e3)*.4,Kt.lt=Lt,Kt.moved>6&&Jt(Pt)});let Wo=ae=>{let Ae=Kt;Kt=null,Ae&&(Ae.moved<10&&performance.now()-Ae.t<500?Xr(1):performance.now()-Ae.lt<120&&Jt(Math.max(-1.6,Math.min(1.6,Ae.v*.22))))};a.addEventListener("pointerup",ae=>{ae.stopPropagation(),Wo(ae)}),a.addEventListener("pointercancel",()=>{Kt=null}),a.addEventListener("wheel",ae=>{if(ae.target.closest(".tour-body")){let Ve=ae.target.closest(".tour-body"),gt=Ve.scrollTop+Ve.clientHeight>=Ve.scrollHeight-2&&ae.deltaY>0,Lt=Ve.scrollTop<=0&&ae.deltaY<0;if(!gt&&!Lt)return}ae.preventDefault();let Ae=ae.deltaMode===1?ae.deltaY*16:ae.deltaMode===2?ae.deltaY*window.innerHeight:ae.deltaY;Jt(Ae/Yt)},{passive:!1}),window.addEventListener("keydown",ae=>{if(!je||mt||document.body.classList.contains("visiting"))return;let Ae=ae.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(Ae)>=0){if((Ae==="Enter"||Ae===" ")&&ae.target&&ae.target.tagName==="BUTTON")return;ae.preventDefault(),ae.stopImmediatePropagation(),Xr(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(Ae)>=0?(ae.preventDefault(),ae.stopImmediatePropagation(),Xr(-1)):Ae==="Escape"?(ae.preventDefault(),Yn()):/^[wasdzq]$/i.test(Ae)&&ae.stopImmediatePropagation()},!0),window.addEventListener("keyup",ae=>{je&&!mt&&/^(Arrow|[wasdzq]$)/i.test(ae.key)&&ae.stopImmediatePropagation()},!0),s.addEventListener("click",ae=>{ae.stopPropagation(),Yn()}),be.addEventListener("click",ae=>{let Ae=ae.target.closest("button");Ae&&(ae.stopPropagation(),Ae.dataset.act==="free"&&Yn(),Ae.dataset.act==="replay"&&Vo(),Ae.dataset.act==="list"&&ul().show(!1))});let Or=[null,[_n.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Ai[0]-7,0],[42.5+Ai[1]-7,0],[42.5+Ai[2]-7,0],[1e3,Math.PI/2],...Wr.map(ae=>[ae.z-1.6,ae.side==="left"?-Math.PI/2:Math.PI/2]),[Bo[2]-1.6,Math.PI]],Gn=null,so=0;function Yn(){if(!je||mt)return;let ae=nr(Ue),Ae=Or[ae];Gn=ae<=1?{phase:"home",pos:Ei.slice()}:ae>=3&&ae<=6?{phase:"floor",pos:Vn.slice()}:ae===11?{phase:"floor",pos:Ls.slice()}:ae===18?{phase:"floor",pos:Bo.slice()}:null,so=ae>=12?1:0,Ae&&n.place&&n.place(Ae[0],Ae[1]),mt={start:Gt,fromCam:It,fromLook:Object.assign({},zt)},Dt(),a.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Vo(){Ue=xt=0,et=0,pt=!1,kt=-1,Wt=0,bt=0,y={phase:"home",pos:Ei.slice(),tumble:0},An={start:Gt}}let An={start:-1},cn=!1,ar=[];function Ii(ae){jt+=ae*(y.phase==="floor"?0:1);let Ae=y.tumble===void 0?0:y.tumble,Ve=yo.fromTranslation(ar,y.pos);if(y.phase==="home")Ve=yo.rotateY(Ve,Ve,2.2+Math.sin(jt*.9)*.15),Ve=yo.rotateZ(Ve,Ve,-1+Math.sin(jt*1.3)*.12),Ve=yo.rotateX(Ve,Ve,.4);else if(y.phase==="floor")Ve=yo.rotateY(Ve,Ve,.65),Ve=yo.rotateX(Ve,Ve,.16);else{let gt=It.eye,Lt=y.pos,Pt=[gt[0]-Lt[0],gt[1]-Lt[1],gt[2]-Lt[2]],Tn=Math.hypot(Pt[0],Pt[1],Pt[2])||1;Pt=[Pt[0]/Tn,Pt[1]/Tn,Pt[2]/Tn];let vr=[Pt[2],0,-Pt[0]],Nr=Math.hypot(vr[0],vr[2])||1;vr=[vr[0]/Nr,0,vr[2]/Nr];let $t=[vr[1]*Pt[2]-vr[2]*Pt[1],vr[2]*Pt[0]-vr[0]*Pt[2],vr[0]*Pt[1]-vr[1]*Pt[0]],Fr=[vr[0],vr[1],vr[2],0,Pt[0],Pt[1],Pt[2],0,$t[0],$t[1],$t[2],0,Lt[0],Lt[1],Lt[2],1];for(let Er=0;Er<16;Er++)Ve[Er]=Fr[Er];Ve=yo.rotateY(Ve,Ve,jt*.9*Ae+.65),Ve=yo.rotateX(Ve,Ve,Math.sin(jt*2.3)*.9*Ae),Ve=yo.rotateZ(Ve,Ve,Math.sin(jt*1.7+1)*1.1*Ae+(y.swing||0)*.9)}return{visible:!0,model:Ve}}function Rs(ae){for(let Ae in Of)zt[Ae]=ae[Ae]!==void 0?ae[Ae]:Of[Ae]}function uc(ae,Ae){if(ae<=1)return{phase:"home",pos:Ei.slice(),tumble:0};let Ve=p2[ae];if(Ve){let gt=Ve.amp;return{phase:"fly",pos:Mt(Ve.pos(),[Math.sin(Ae*.55)*gt[0],Math.sin(Ae*.8)*gt[1],(1-Math.cos(Ae*.45))*gt[2]]),tumble:Ve.tumble}}return{phase:"floor",pos:(ae>=18?Bo:ae>=10?Ls:Vn).slice(),tumble:0}}let Is=0,Br=null;function hc(ae){let Ae=Math.min(.1,Math.max(0,ae-Is));if(Is=ae,Gt=ae,cn||(cn=!0,An.start=ae),mt)return null;if(!pt&&!Kt&&Gt-ze>sn){let er=nr(xt);Math.abs(ge[er]-xt)<Xn&&(xt=ge[er])}let Ve=xt-Ue;if(pt){let gr=Math.sign(Ve)*Math.min(ir,Math.sqrt(2*Mn*Math.abs(Ve)))-et;et+=Math.sign(gr)*Math.min(Math.abs(gr),Mn*Ae),Ue+=et*Ae,(Ve>0&&Ue>=xt||Ve<0&&Ue<=xt||Math.abs(xt-Ue)<1e-4)&&(Ue=xt,et=0,pt=!1)}else{let er=F_(Ue,xt,et,lr,Ae,3);Ue=er[0],et=er[1],Math.abs(xt-Ue)<1e-4&&Math.abs(et)<.001&&(Ue=xt,et=0)}let gt=0;for(;gt<Cf.length-1&&Ue>=ge[gt+1];)gt++;let Lt=Cf[gt],Pt=En((Ue-ge[gt])/Lt.dur),Tn=Uo[gt],vr=Uo[gt+1],Nr=nr(Ue);Nr!==Wt&&(Wt=Nr,bt=0);let $t=Math.abs(Ue-ge[Nr])<.02;$t&&(bt+=Ae);let Fr=1-Me(0,1.2,Math.abs(Ue-ge[Nr])),Er=Lt.leaf(Pt);if(Er.pos?y=Object.assign({},Er):y=Object.assign({},Er,{pos:Er.phase==="home"?Ei.slice():(gt>=10?Ls:Vn).slice()}),p2[Nr]&&Fr>0){let er=uc(Nr,bt);y.pos=Zt(y.pos,er.pos,Fr)}let Kn=Lt.walker&&(Pt>.01||gt===6)?Lt.walker(Pt):null;Br=Kn==null?null:{x:Kn,z:Rf,heading:Math.PI/2,phase:(Kn-g2)/U_};let ln=Lt.cam(Pt,Tn.cam(0),vr.cam(0),y);if(Fr>0&&bt>0){let er=Uo[Nr],gr=er.cam(0),co=er.cam(bt);ln=dt(Mt(ln.eye,f2(l2(co.eye,gr.eye),Fr)),Mt(ln.target,f2(l2(co.target,gr.target),Fr)),ln.fov+(co.fov-gr.fov)*Fr,ln.roll+(co.roll-gr.roll)*Fr)}if(Fr>0&&!Cr){let er=Gt,gr=.006*Fr,co=Math.sin(er*.61)*.6+Math.sin(er*1.37+1.3)*.4,Ns=Math.sin(er*.47+2.1)*.6+Math.sin(er*1.13+.4)*.4,Fs=Math.sin(er*.53+4)*.5+Math.sin(er*.97+2.6)*.5;ln=dt(Mt(ln.eye,[co*gr,Ns*gr*.7,Fs*gr]),Mt(ln.target,[Ns*gr*1.8,co*gr*1.4,0]),ln.fov,ln.roll+Fs*.0012*Fr)}It=ln;let Ps=tc(gt),dc=tc(gt+1),Pi=Object.assign({},Ps,Lt.look(Pt,Ps,dc,y,ln.eye));if(Fr>0){let er=tc(Nr);for(let gr in er)typeof er[gr]=="number"&&(Pi[gr]=Le(Pi[gr],er[gr],Fr))}Rs(Pi);let Xo=$t&&Math.abs(xt-Ue)<.02?Nr:-1;Xo!==kt&&(Xo>=0&&(or=Gt+Rt),kt=Xo,Xo>=0?Ze(Xo):Dt()),f.querySelectorAll("i").forEach((er,gr)=>er.classList.toggle("on",gr===Nr));let Qn=kt>=0?he[kt]:null;Qn&&Qn.fill&&!Qn.filled&&(Qn.fill(),Qn.filled&&(Qn.classList.remove("on"),Qn.offsetWidth,Qn.classList.add("on")));let Os=En((ae-An.start)/2.6);return Os<1&&(zt.fade=Math.max(zt.fade,1-Me(0,1,Os)),zt.fadeColor=[0,0,0]),r&&window.__camOverride&&(It=window.__camOverride),r&&window.__lookOverride&&Object.assign(zt,window.__lookOverride),{camera:It,walker:Br,door:Lt.door?Lt.door(Pt):gt>=12?1:0,look:zt,leaf:Ii(Ae)}}return r&&(window.__tour={go:Xr,exit:Yn,wind:Jt,seek(ae,Ae){Ue=xt=ge[ae]+(ge[ae+1]-ge[ae])*Ae,et=0,pt=!1,ze=Gt+1e6,An.start=Gt-10,cn=!0},jump(ae){Ue=xt=ge[ae],et=0,pt=!1,bt=0,ze=Gt,An.start=Gt-10,cn=!0},state:()=>({current:nr(Ue),scroll:+Ue.toFixed(3),target:+xt.toFixed(3),shown:kt,move:Math.abs(xt-Ue)>.02?{p:Ue}:null,camNow:It,leaf:y,look:zt})}),{update:hc,get active(){return je&&!mt},handover(ae){if(!mt)return null;let Ae=En((ae-mt.start)/1.8);return Ae>=1?(je=!1,null):{from:mt.fromCam,fromLook:mt.fromLook,k:mr(Ae)}},restingDoor:()=>so,restingLeaf(){return Gn?(y=Gn,Ii(0)):null},mix:Ia,cam:dt}}});var Z_=jh(),zi=to(),jf=ul(),oc=zi.reflection,J_=!1,z2=(e,t,r,n,o)=>n+(e-t)*(o-n)/(r-t),Wf=()=>z2(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Wf=()=>z2(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var C2=()=>2*Math.atan(Math.tan(Wf()*.5)*window.innerHeight/window.innerWidth),e4=nd(),ac=new e4;ac.showPanel(0);J_&&document.body.appendChild(ac.dom);var Ur,Ri,$f,Li,qf,cr;function t4(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!t4())throw Z_.finish(),jf.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Ur=od()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:zi.pixelRatio});location.hash==="#list"&&jf.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&jf.show(!1)});Ri=Fd()();var r4=Nl();$f=r4(Ur,Ri,oc);Li=n1()(Ur,Ri);qf=s1()(Ur);var b2=l1()(Ur,Ri),w2=b1()(Ur),_2=E1()(Ur),E2=D1()(Ur),M2=j1()(Ur),A2=Q1()(Ur),Ci=cm()(Ur),Hf=sf(),R2=v0(),n4=es(),Uf=lf(),{A:Si}=no();cr=Qv()(Ri,C2);var ic=Jv()(Ur,zi),ki=n2()(Ur),T2=a2()(Ur),o4=c2()(Ur,zi),xo=x2()({fps:cr,paintings:()=>Li.interactables(),onExit:()=>cr.setPaused(!1)});cr.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=ic);var sc=[],cc=[],jo=[7,2,1.6];Ri.viewer=jo;var a4=Ur({cull:{enable:!0,face:"back"},uniforms:{view:()=>sc,proj:()=>cc,yScale:1,mirrorOn:()=>oc?1:0}}),i4=Ur({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),I2=document.createElement("style");I2.textContent=`

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
`;document.head.appendChild(I2);var Fn=document.createElement("button");Fn.className="painting-plaque";Fn.type="button";Fn.setAttribute("aria-label","Read painting");document.body.appendChild(Fn);var an=document.createElement("div");an.className="story-overlay";an.innerHTML=`

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

		${R2.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(an);var fc=document.createElement("div");fc.className="museum-links";fc.innerHTML=R2.icons("museum-link");["mousedown","pointerdown","click"].forEach(e=>fc.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(fc);var s4=an.querySelector("#story-title"),c4=an.querySelector("#story-body"),S2=an.querySelector("#story-meta"),l4=an.querySelector(".story-contact"),Cs=an.querySelector(".story-visit");Cs.addEventListener("click",e=>{e.target.closest(".visit-btn")&&Pa&&Uf.open(Pa)});var f4=an.querySelector(".story-close"),Pa=null,pn={p:0,target:0,last:0},P2={title:Hf.title,description:Hf.text,isAbout:!0},bo=null;function Vf(e){e&&(Pa=e,s4.textContent=e.title||"",c4.textContent=e.description||"",S2.textContent=e.isAbout?"":n4(e),S2.hidden=!!e.isAbout,l4.hidden=!e.isAbout,Cs.innerHTML=e.isAbout?"":Uf.button(e),Cs.hidden=!Cs.innerHTML,Cs.hidden||Uf.warm(e),an.classList.toggle("about-mode",!!e.isAbout),an.classList.add("open"),pn.target=e.isAbout?1:0,bo=e,Fn.classList.remove("visible"),cr.setPaused(!0))}function Xf(){an.classList.remove("open"),pn.target=0,Pa=null,bo=null,cr.setPaused(!1)}function O2(e){e&&(e.preventDefault(),e.stopPropagation()),bo&&Vf(bo)}Fn.addEventListener("pointerup",O2,!0);Fn.addEventListener("touchend",O2,{passive:!1,capture:!0});Fn.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),Pa===null&&bo&&Vf(bo)},!0);f4.addEventListener("click",Xf);an.addEventListener("click",e=>{e.target===an&&Xf()});window.addEventListener("keydown",e=>{e.code==="Escape"&&an.classList.contains("open")&&Xf()});function k2(e,t){let r=t[0],n=t[1],o=t[2];return[e[0]*r+e[4]*n+e[8]*o+e[12],e[1]*r+e[5]*n+e[9]*o+e[13],e[2]*r+e[6]*n+e[10]*o+e[14],e[3]*r+e[7]*n+e[11]*o+e[15]]}function u4(){if(Pa)return;if(xo.active){bo=null,Fn.classList.remove("visible");return}let e=Li.interactables(),t=cr.forward[0],r=cr.forward[2],n=Math.hypot(t,r)||1,o=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let h=s[0]-cr.pos[0],p=s[2]-cr.pos[2],u=-(h*c+p*f),v=Math.abs(h*f-p*c),g=-(t*c+r*f)/n,d=i.side==="end"?11:8,m=(i.width||2)/2;g>.9&&u>.5&&u<d&&v<m+.8&&u<a&&(o=i,a=u)}if(!o){let i=cr.pos[0],s=cr.pos[2];t/n>.85&&i<13.6&&s>Si.z0-.5&&s<Si.z1+.5&&(o=Object.assign({},P2,{plaqueTitle:Hf.name}))}o?(bo=o,Fn.textContent=o.isAbout?"ABOUT  \xB7  "+o.plaqueTitle:"READ  \xB7  "+o.title,Fn.classList.add("visible")):(bo=null,Fn.classList.remove("visible"))}var Yf=ls();function h4(){let e=Ci.state;if(!e||!e.glowPos)return null;let t=k2(cr.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),r=k2(cr.proj(),t);return r[3]<=.05?null:[(r[0]/r[3]*.5+.5)*window.innerWidth,(.5-r[1]/r[3]*.5)*window.innerHeight,r[3]]}var Bf=null;window.addEventListener("pointerdown",e=>{Bf={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Bf;if(Bf=null,!t||Pa||xo.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let r=h4();if(!r)return;let n=!!document.pointerLockElement,o=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/r[2]);Math.hypot(o-r[0],a-r[1])<i&&(e.preventDefault(),e.stopPropagation(),Vf(P2))},!0);function d4(e){let t=Math.min(Math.max(e-pn.last,0),.1);pn.last=e;let r=t/1.6;if(pn.p=pn.target>pn.p?Math.min(1,pn.p+r):Math.max(0,pn.p-r),pn.p<=0)return;let n=pn.p<.5?2*pn.p*pn.p:1-Math.pow(-2*pn.p+2,2)/2,o=window.innerHeight>window.innerWidth,a=Ci.state,i=a&&a.hipsPos?a.hipsPos[0]:Si.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Si.zc,c=o?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=o?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],h=cr.pos,p=cr.forward,u=[h[0],h[1],h[2]],v=[h[0]+p[0],h[1]+p[1],h[2]+p[2]],g=(T,C)=>T.map((D,$)=>D+(C[$]-D)*n),d=[Si.cx-6.2,1.7,Si.zc],m=1-n,w=u.map((T,C)=>m*m*T+2*m*n*d[C]+n*n*c[C]);Yf.lookAt(cr.view(),w,g(v,f),[0,1,0])}var Ti={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},lc=null;function p4(e,t,r,n){let o=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],a=Math.hypot(o[0],o[1],o[2])||1,i=[-o[2]/a,0,o[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Yf.lookAt(e,t,r,[i[0]*f,c,i[2]*f])}function m4(e){let t=window.innerWidth/window.innerHeight,r=ic.shot,n=xo.active?xo.update(e):null,o=n?null:xo.handover(e),a=null,i=Ti;if(n?(a=n.camera,i=n.look,lc=n.leaf,Ci.setWalk(n.walker||null),ki.setOpen(n.door||0)):(lc=xo.restingLeaf(),Ci.setWalk(null),ki.setOpen(xo.restingDoor())),o){let s=cr.pos,c=cr.forward,f=xo.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],C2()*180/Math.PI,0);a=xo.mix(o.from,f,o.k),i={};for(let h in Ti)i[h]=Array.isArray(Ti[h])?Ti[h]:o.fromLook[h]+(Ti[h]-o.fromLook[h])*o.k}if(a)p4(sc,a.eye,a.target,a.roll||0),Yf.perspective(cc,a.fov*Math.PI/180,t,.1,700),jo[0]=a.eye[0],jo[1]=a.eye[1],jo[2]=a.eye[2];else{let s=cr.view(),c=cr.proj();for(let u=0;u<16;u++)sc[u]=s[u],cc[u]=c[u];let f=s[12],h=s[13],p=s[14];jo[0]=-(s[0]*f+s[1]*h+s[2]*p),jo[1]=-(s[4]*f+s[5]*h+s[6]*p),jo[2]=-(s[8]*f+s[9]*h+s[10]*p)}for(let s in Ti)r[s]=i[s]}var zs=0,L2=0;Ur.frame(function({time:e}){if(document.body.classList.contains("visiting")){zs=0;return}ac.begin(),zs++,zs===60&&(L2=e),zs===180&&120/Math.max(e-L2,.001)<32&&zi.stepDown()&&(oc=zi.reflection,zs=0),cr.tick({time:e}),d4(e),Li.update(cr.pos,cr.fmouse[1],Wf()),u4(),m4(e),ic.capture(arguments[0],{view:sc,proj:cc,eye:jo},()=>{a4(()=>{oc&&i4(()=>{$f(),b2(),A2(),Ci(),qf(Li.batch()),w2(),E2(),M2(),T2(lc),ki(),_2(),ki.glass()}),$f(),b2(),A2(),Ci(),qf(Li.batch()),w2(),E2(),M2(),T2(lc),ki(),o4(),_2(),ki.glass()})}),ic.present(),ac.end()});})();
