"use strict";(()=>{var he=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ad=he((P6,Td)=>{"use strict";var xi=document.getElementById("loader"),gi=xi&&xi.querySelector(".loader-name"),gs=0,N0=0,O0=!1,hb=performance.now(),yi=.06,vi=0,Nl=0,bd=!1,ub=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function db(e){if(!gi)return;let t=gi.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";gi.style.webkitMaskPosition=n,gi.style.maskPosition=n}function Ed(e){let t=Math.min(.05,Nl?(e-Nl)/1e3:.016);Nl=e;let r=O0?.75:.22+(yi-vi)*1.2;if(vi=Math.min(yi,vi+Math.max(0,r)*t),ub&&(vi=yi),db(vi),O0&&vi>=.999){bd||(bd=!0,setTimeout(Md,650));return}requestAnimationFrame(Ed)}gi&&requestAnimationFrame(Ed);function wd(){let e=gs?N0/Math.max(gs,24):0;yi=Math.max(yi,Math.min(.9,.06+e*.84))}function Md(){xi&&(xi.classList.add("done"),setTimeout(()=>xi.remove(),1400))}function Ol(){O0||(O0=!0,window.__galleryReady=!0,xi&&(yi=1,gi||Md()))}var _d=null;function pb(){clearTimeout(_d),N0>=gs&&performance.now()-hb>600&&(_d=setTimeout(()=>{N0>=gs&&Ol()},450))}setTimeout(Ol,2e4);var mb=e=>/(^|\/)(res|images)\//.test(e),P0=window.fetch.bind(window);async function vb(e,t){let r=await P0(e+".gz",t);if(!r.ok)throw new Error("no .gz");let n=new Uint8Array(await r.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let o=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(o).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let r=typeof e=="string"?e:e&&e.url||"";if(!mb(r))return P0(e,t);gs++,wd();let n=a=>(N0++,wd(),pb(),a),o;return/\.bin$/.test(r)&&typeof DecompressionStream!="undefined"?o=vb(r,t).catch(()=>P0(e,t)):o=P0(e,t),o.then(n,a=>{throw n(),a})};Td.exports={finish:Ol}});var Qn=he((N6,Ld)=>{"use strict";var Sd=typeof navigator!="undefined"&&navigator.userAgent||"",gb=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,$o=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Sd)||/Macintosh/.test(Sd)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||gb,kd=typeof window!="undefined"&&window.devicePixelRatio||1,An={isPhone:$o,pixelRatio:$o?Math.min(kd,1.5):Math.min(kd,2),reflection:!$o,gardenDetail:$o?0:1,leafShare:$o?.65:1,motion:!$o,post:$o?1:2,level:$o?1:0};An.stepDown=()=>{if(An.reflection)An.reflection=!1;else if(An.gardenDetail>0||An.motion)An.gardenDetail=0,An.motion=!1,An.leafShare=Math.min(An.leafShare,.65);else if(An.post>0)An.post--;else return!1;return An.level++,!0};Ld.exports=An});var Gl=he((O6,zd)=>{"use strict";zd.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var G0=he((G6,Id)=>{"use strict";var sn={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Cd='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Rd='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';sn.instagramUrl="https://instagram.com/"+sn.instagram;sn.mailUrl="mailto:"+sn.email+"?subject="+encodeURIComponent("Your paintings");sn.icons=e=>`
	<a class="${e}" href="${sn.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${sn.instagram}" title="Instagram">${Cd}</a>
	<a class="${e}" href="${sn.mailUrl}" aria-label="Email ${sn.email}" title="Email">${Rd}</a>`;sn.line=e=>`
	<span class="${e}">
		<a href="${sn.instagramUrl}" target="_blank" rel="noopener">${Cd}<span>@${sn.instagram}</span></a>
		<a href="${sn.mailUrl}">${Rd}<span>${sn.email}</span></a>
	</span>`;Id.exports=sn});var xs=he((F6,Pd)=>{"use strict";Pd.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var Fl=he((D6,Gd)=>{"use strict";var xb=Gl(),yb=G0(),Nd=xs(),bb=Qn(),qo=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),wb=`
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
`,cn=null;function _b(e){if(cn){cn.hidden=!1,requestAnimationFrame(()=>cn.classList.add("on"));return}let t=document.createElement("style");t.textContent=wb,document.head.appendChild(t);let r=!bb.isPhone;cn=document.createElement("div"),cn.className="plist",cn.setAttribute("role","region"),cn.setAttribute("aria-label","All paintings"),cn.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${yb.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${xb.map(o=>`
			<article class="plist-item" id="${qo(o.slug)}">
				<img loading="lazy" decoding="async" alt="${qo(o.title)}, ${qo(Nd(o))}"
					src="images/web/${qo(o.slug)}${r?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${qo(o.file)}'">
				<p class="plist-meta">${qo(Nd(o))}</p>
				<h2>${qo(o.title)}</h2>
				<details><summary>Read its story</summary>
					${String(o.description).split(/\n\s*\n/).map(a=>`<p>${qo(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(o=>cn.addEventListener(o,a=>a.stopPropagation(),{passive:!0}));let n=cn.querySelector(".plist-close");n&&n.addEventListener("click",Od),document.body.appendChild(cn),requestAnimationFrame(()=>cn.classList.add("on"))}function Od(){cn&&(cn.classList.remove("on"),setTimeout(()=>{cn.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Gd.exports={show:_b,hide:Od}});var Fd=he((Dl,$l)=>{(function(e,t){typeof Dl=="object"&&typeof $l!="undefined"?$l.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Dl,function(){var e=function(){function t(v){return o.appendChild(v.dom),v}function r(v){for(var h=0;h<o.children.length;h++)o.children[h].style.display=h===v?"block":"none";n=v}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(v){v.preventDefault(),r(++n%o.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),l=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var v=(performance||Date).now();if(l.update(v-a,200),v>i+1e3&&(c.update(1e3*s/(v-i),100),i=v,s=0,u)){var h=performance.memory;u.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return v},update:function(){a=this.end()},domElement:o,setMode:r}};return e.Panel=function(t,r,n){var o=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,l=48*s,u=3*s,v=2*s,h=3*s,p=15*s,m=74*s,d=30*s,g=document.createElement("canvas");g.width=c,g.height=l,g.style.cssText="width:80px;height:48px";var x=g.getContext("2d");return x.font="bold "+9*s+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=n,x.fillRect(0,0,c,l),x.fillStyle=r,x.fillText(t,u,v),x.fillRect(h,p,m,d),x.fillStyle=n,x.globalAlpha=.9,x.fillRect(h,p,m,d),{dom:g,update:function(_,A){o=Math.min(o,_),a=Math.max(a,_),x.fillStyle=n,x.globalAlpha=1,x.fillRect(0,0,c,p),x.fillStyle=r,x.fillText(i(_)+" "+t+" ("+i(o)+"-"+i(a)+")",u,v),x.drawImage(g,h+s,p,m-s,d,h,p,m-s,d),x.fillRect(h+m-s,p,s,d),x.fillStyle=n,x.globalAlpha=.9,x.fillRect(h+m-s,p,s,i((1-_/A)*d))}}},e})});var Dd=he((ql,Hl)=>{(function(e,t){typeof ql=="object"&&typeof Hl!="undefined"?Hl.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(ql,function(){"use strict";var e=function(f){return f instanceof Uint8Array||f instanceof Uint16Array||f instanceof Uint32Array||f instanceof Int8Array||f instanceof Int16Array||f instanceof Int32Array||f instanceof Float32Array||f instanceof Float64Array||f instanceof Uint8ClampedArray},t=function(f,w){for(var k=Object.keys(w),V=0;V<k.length;++V)f[k[V]]=w[k[V]];return f},r=`
`;function n(f){return typeof atob!="undefined"?atob(f):"base64:"+f}function o(f){var w=new Error("(regl) "+f);throw console.error(w),w}function a(f,w){f||o(w)}function i(f){return f?": "+f:""}function s(f,w,k){f in w||o("unknown parameter ("+f+")"+i(k)+". possible values: "+Object.keys(w).join())}function c(f,w){e(f)||o("invalid parameter type"+i(w)+". must be a typed array")}function l(f,w){switch(w){case"number":return typeof f=="number";case"object":return typeof f=="object";case"string":return typeof f=="string";case"boolean":return typeof f=="boolean";case"function":return typeof f=="function";case"undefined":return typeof f=="undefined";case"symbol":return typeof f=="symbol"}}function u(f,w,k){l(f,w)||o("invalid parameter type"+i(k)+". expected "+w+", got "+typeof f)}function v(f,w){f>=0&&(f|0)===f||o("invalid parameter type, ("+f+")"+i(w)+". must be a nonnegative integer")}function h(f,w,k){w.indexOf(f)<0&&o("invalid value"+i(k)+". must be one of: "+w)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function m(f){Object.keys(f).forEach(function(w){p.indexOf(w)<0&&o('invalid regl constructor argument "'+w+'". must be one of '+p)})}function d(f,w){for(f=f+"";f.length<w;)f=" "+f;return f}function g(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function x(f,w){this.number=f,this.line=w,this.errors=[]}function _(f,w,k){this.file=f,this.line=w,this.message=k}function A(){var f=new Error,w=(f.stack||f).toString(),k=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(w);if(k)return k[1];var V=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(w);return V?V[1]:"unknown"}function z(){var f=new Error,w=(f.stack||f).toString(),k=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(w);if(k)return k[1];var V=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(w);return V?V[1]:"unknown"}function I(f,w){var k=f.split(`
`),V=1,te=0,B={unknown:new g,0:new g};B.unknown.name=B[0].name=w||A(),B.unknown.lines.push(new x(0,""));for(var Y=0;Y<k.length;++Y){var de=k[Y],ve=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(de);if(ve)switch(ve[1]){case"line":var be=/(\d+)(\s+\d+)?/.exec(ve[2]);be&&(V=be[1]|0,be[2]&&(te=be[2]|0,te in B||(B[te]=new g)));break;case"define":var ge=/SHADER_NAME(_B64)?\s+(.*)$/.exec(ve[2]);ge&&(B[te].name=ge[1]?n(ge[2]):ge[2]);break}B[te].lines.push(new x(V++,de))}return Object.keys(B).forEach(function(_e){var ze=B[_e];ze.lines.forEach(function(pe){ze.index[pe.number]=pe})}),B}function N(f){var w=[];return f.split(`
`).forEach(function(k){if(!(k.length<5)){var V=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(k);V?w.push(new _(V[1]|0,V[2]|0,V[3].trim())):k.length>0&&w.push(new _("unknown",0,k))}}),w}function q(f,w){w.forEach(function(k){var V=f[k.file];if(V){var te=V.index[k.line];if(te){te.errors.push(k),V.hasErrors=!0;return}}f.unknown.hasErrors=!0,f.unknown.lines[0].errors.push(k)})}function J(f,w,k,V,te){if(!f.getShaderParameter(w,f.COMPILE_STATUS)){var B=f.getShaderInfoLog(w),Y=V===f.FRAGMENT_SHADER?"fragment":"vertex";Me(k,"string",Y+" shader source must be a string",te);var de=I(k,te),ve=N(B);q(de,ve),Object.keys(de).forEach(function(be){var ge=de[be];if(!ge.hasErrors)return;var _e=[""],ze=[""];function pe(Ee,D){_e.push(Ee),ze.push(D||"")}pe("file number "+be+": "+ge.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),ge.lines.forEach(function(Ee){if(Ee.errors.length>0){pe(d(Ee.number,4)+"|  ","background-color:yellow; font-weight:bold"),pe(Ee.line+r,"color:red; background-color:yellow; font-weight:bold");var D=0;Ee.errors.forEach(function(K){var ye=K.message,Pe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(ye);if(Pe){var ae=Pe[1];switch(ye=Pe[2],ae){case"assign":ae="=";break}D=Math.max(Ee.line.indexOf(ae,D),0)}else D=0;pe(d("| ",6)),pe(d("^^^",D+3)+r,"font-weight:bold"),pe(d("| ",6)),pe(ye+r,"font-weight:bold")}),pe(d("| ",6)+r)}else pe(d(Ee.number,4)+"|  "),pe(Ee.line+r,"color:red")}),typeof document!="undefined"&&!window.chrome?(ze[0]=_e.join("%c"),console.log.apply(console,ze)):console.log(_e.join(""))}),a.raise("Error compiling "+Y+" shader, "+de[0].name)}}function j(f,w,k,V,te){if(!f.getProgramParameter(w,f.LINK_STATUS)){var B=f.getProgramInfoLog(w),Y=I(k,te),de=I(V,te),ve='Error linking program with vertex shader, "'+de[0].name+'", and fragment shader "'+Y[0].name+'"';typeof document!="undefined"?console.log("%c"+ve+r+"%c"+B,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(ve+r+B),a.raise(ve)}}function ce(f){f._commandRef=A()}function Z(f,w,k,V){ce(f);function te(ve){return ve?V.id(ve):0}f._fragId=te(f.static.frag),f._vertId=te(f.static.vert);function B(ve,be){Object.keys(be).forEach(function(ge){ve[V.id(ge)]=!0})}var Y=f._uniformSet={};B(Y,w.static),B(Y,w.dynamic);var de=f._attributeSet={};B(de,k.static),B(de,k.dynamic),f._hasCount="count"in f.static||"count"in f.dynamic||"elements"in f.static||"elements"in f.dynamic}function ue(f,w){var k=z();o(f+" in command "+(w||A())+(k==="unknown"?"":" called from "+k))}function le(f,w,k){f||ue(w,k||A())}function fe(f,w,k,V){f in w||ue("unknown parameter ("+f+")"+i(k)+". possible values: "+Object.keys(w).join(),V||A())}function Me(f,w,k,V){l(f,w)||ue("invalid parameter type"+i(k)+". expected "+w+", got "+typeof f,V||A())}function Ge(f){f()}function je(f,w,k){f.texture?h(f.texture._texture.internalformat,w,"unsupported texture format for attachment"):h(f.renderbuffer._renderbuffer.format,k,"unsupported renderbuffer format for attachment")}var Be=33071,Gt=9728,Rt=9984,Qt=9985,It=9986,Ar=9987,Yt=5120,Rr=5121,Kr=5122,En=5123,Ye=5124,dt=5125,it=5126,ct=32819,Se=32820,Je=33635,rt=34042,wt=36193,xt={};xt[Yt]=xt[Rr]=1,xt[Kr]=xt[En]=xt[wt]=xt[Je]=xt[ct]=xt[Se]=2,xt[Ye]=xt[dt]=xt[it]=xt[rt]=4;function tr(f,w){return f===Se||f===ct||f===Je?2:f===rt?4:xt[f]*w}function mt(f){return!(f&f-1)&&!!f}function Mt(f,w,k){var V,te=w.width,B=w.height,Y=w.channels;a(te>0&&te<=k.maxTextureSize&&B>0&&B<=k.maxTextureSize,"invalid texture shape"),(f.wrapS!==Be||f.wrapT!==Be)&&a(mt(te)&&mt(B),"incompatible wrap mode for texture, both width and height must be power of 2"),w.mipmask===1?te!==1&&B!==1&&a(f.minFilter!==Rt&&f.minFilter!==It&&f.minFilter!==Qt&&f.minFilter!==Ar,"min filter requires mipmap"):(a(mt(te)&&mt(B),"texture must be a square power of 2 to support mipmapping"),a(w.mipmask===(te<<1)-1,"missing or incomplete mipmap data")),w.type===it&&(k.extensions.indexOf("oes_texture_float_linear")<0&&a(f.minFilter===Gt&&f.magFilter===Gt,"filter not supported, must enable oes_texture_float_linear"),a(!f.genMipmaps,"mipmap generation not supported with float textures"));var de=w.images;for(V=0;V<16;++V)if(de[V]){var ve=te>>V,be=B>>V;a(w.mipmask&1<<V,"missing mipmap data");var ge=de[V];if(a(ge.width===ve&&ge.height===be,"invalid shape for mip images"),a(ge.format===w.format&&ge.internalformat===w.internalformat&&ge.type===w.type,"incompatible type for mip image"),!ge.compressed)if(ge.data){var _e=Math.ceil(tr(ge.type,Y)*ve/ge.unpackAlignment)*ge.unpackAlignment;a(ge.data.byteLength===_e*be,"invalid data for image, buffer size is inconsistent with image format")}else ge.element||ge.copy}else f.genMipmaps||a((w.mipmask&1<<V)===0,"extra mipmap data");w.compressed&&a(!f.genMipmaps,"mipmap generation for compressed images not supported")}function At(f,w,k,V){var te=f.width,B=f.height,Y=f.channels;a(te>0&&te<=V.maxTextureSize&&B>0&&B<=V.maxTextureSize,"invalid texture shape"),a(te===B,"cube map must be square"),a(w.wrapS===Be&&w.wrapT===Be,"wrap mode not supported by cube map");for(var de=0;de<k.length;++de){var ve=k[de];a(ve.width===te&&ve.height===B,"inconsistent cube map face shape"),w.genMipmaps&&(a(!ve.compressed,"can not generate mipmap for compressed textures"),a(ve.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var be=ve.images,ge=0;ge<16;++ge){var _e=be[ge];if(_e){var ze=te>>ge,pe=B>>ge;a(ve.mipmask&1<<ge,"missing mipmap data"),a(_e.width===ze&&_e.height===pe,"invalid shape for mip images"),a(_e.format===f.format&&_e.internalformat===f.internalformat&&_e.type===f.type,"incompatible type for mip image"),_e.compressed||(_e.data?a(_e.data.byteLength===ze*pe*Math.max(tr(_e.type,Y),_e.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):_e.element||_e.copy)}}}}var y=t(a,{optional:Ge,raise:o,commandRaise:ue,command:le,parameter:s,commandParameter:fe,constructor:m,type:u,commandType:Me,isTypedArray:c,nni:v,oneOf:h,shaderError:J,linkError:j,callSite:z,saveCommandRef:ce,saveDrawInfo:Z,framebufferFormat:je,guessCommand:A,texture2D:Mt,textureCube:At}),Kt=0,Pt=0,Ke=5,qt=6;function $t(f,w){this.id=Kt++,this.type=f,this.data=w}function lr(f){return f.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function or(f){if(f.length===0)return[];var w=f.charAt(0),k=f.charAt(f.length-1);if(f.length>1&&w===k&&(w==='"'||w==="'"))return['"'+lr(f.substr(1,f.length-2))+'"'];var V=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(f);if(V)return or(f.substr(0,V.index)).concat(or(V[1])).concat(or(f.substr(V.index+V[0].length)));var te=f.split(".");if(te.length===1)return['"'+lr(f)+'"'];for(var B=[],Y=0;Y<te.length;++Y)B=B.concat(or(te[Y]));return B}function gn(f){return"["+or(f).join("][")+"]"}function rn(f,w){return new $t(f,gn(w+""))}function vo(f){return typeof f=="function"&&!f._reglType||f instanceof $t}function yr(f,w){if(typeof f=="function")return new $t(Pt,f);if(typeof f=="number"||typeof f=="boolean")return new $t(Ke,f);if(Array.isArray(f))return new $t(qt,f.map((k,V)=>yr(k,w+"["+V+"]")));if(f instanceof $t)return f;y(!1,"invalid option type in uniform "+w)}var Ur={DynamicVariable:$t,define:rn,isDynamic:vo,unbox:yr,accessor:gn},go={next:typeof requestAnimationFrame=="function"?function(f){return requestAnimationFrame(f)}:function(f){return setTimeout(f,16)},cancel:typeof cancelAnimationFrame=="function"?function(f){return cancelAnimationFrame(f)}:clearTimeout},Ro=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function xo(){var f={"":0},w=[""];return{id:function(k){var V=f[k];return V||(V=f[k]=w.length,w.push(k),V)},str:function(k){return w[k]}}}function Io(f,w,k){var V=document.createElement("canvas");t(V.style,{border:0,margin:0,padding:0,top:0,left:0}),f.appendChild(V),f===document.body&&(V.style.position="absolute",t(f.style,{margin:0,padding:0}));function te(){var de=window.innerWidth,ve=window.innerHeight;if(f!==document.body){var be=f.getBoundingClientRect();de=be.right-be.left,ve=be.bottom-be.top}V.width=k*de,V.height=k*ve,t(V.style,{width:de+"px",height:ve+"px"})}var B;f!==document.body&&typeof ResizeObserver=="function"?(B=new ResizeObserver(function(){setTimeout(te)}),B.observe(f)):window.addEventListener("resize",te,!1);function Y(){B?B.disconnect():window.removeEventListener("resize",te),f.removeChild(V)}return te(),{canvas:V,onDestroy:Y}}function Wn(f,w){function k(V){try{return f.getContext(V,w)}catch(te){return null}}return k("webgl")||k("experimental-webgl")||k("webgl-experimental")}function Vn(f){return typeof f.nodeName=="string"&&typeof f.appendChild=="function"&&typeof f.getBoundingClientRect=="function"}function Zt(f){return typeof f.drawArrays=="function"||typeof f.drawElements=="function"}function ca(f){return typeof f=="string"?f.split():(y(Array.isArray(f),"invalid extension array"),f)}function Js(f){return typeof f=="string"?(y(typeof document!="undefined","not supported outside of DOM"),document.querySelector(f)):f}function e0(f){var w=f||{},k,V,te,B,Y={},de=[],ve=[],be=typeof window=="undefined"?1:window.devicePixelRatio,ge=!1,_e=function(Ee){Ee&&y.raise(Ee)},ze=function(){};if(typeof w=="string"?(y(typeof document!="undefined","selector queries only supported in DOM enviroments"),k=document.querySelector(w),y(k,"invalid query string for element")):typeof w=="object"?Vn(w)?k=w:Zt(w)?(B=w,te=B.canvas):(y.constructor(w),"gl"in w?B=w.gl:"canvas"in w?te=Js(w.canvas):"container"in w&&(V=Js(w.container)),"attributes"in w&&(Y=w.attributes,y.type(Y,"object","invalid context attributes")),"extensions"in w&&(de=ca(w.extensions)),"optionalExtensions"in w&&(ve=ca(w.optionalExtensions)),"onDone"in w&&(y.type(w.onDone,"function","invalid or missing onDone callback"),_e=w.onDone),"profile"in w&&(ge=!!w.profile),"pixelRatio"in w&&(be=+w.pixelRatio,y(be>0,"invalid pixel ratio"))):y.raise("invalid arguments to regl"),k&&(k.nodeName.toLowerCase()==="canvas"?te=k:V=k),!B){if(!te){y(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var pe=Io(V||document.body,_e,be);if(!pe)return null;te=pe.canvas,ze=pe.onDestroy}Y.premultipliedAlpha===void 0&&(Y.premultipliedAlpha=!0),B=Wn(te,Y)}return B?{gl:B,canvas:te,container:V,extensions:de,optionalExtensions:ve,pixelRatio:be,profile:ge,onDone:_e,onDestroy:ze}:(ze(),_e("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Fc(f,w){var k={};function V(Y){y.type(Y,"string","extension name must be string");var de=Y.toLowerCase(),ve;try{ve=k[de]=f.getExtension(de)}catch(be){}return!!ve}for(var te=0;te<w.extensions.length;++te){var B=w.extensions[te];if(!V(B))return w.onDestroy(),w.onDone('"'+B+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return w.optionalExtensions.forEach(V),{extensions:k,restore:function(){Object.keys(k).forEach(function(Y){if(k[Y]&&!V(Y))throw new Error("(regl): error restoring extension "+Y)})}}}function en(f,w){for(var k=Array(f),V=0;V<f;++V)k[V]=w(V);return k}var t0=5120,r0=5121,Dc=5122,oe=5123,ke=5124,Ve=5125,ot=5126;function St(f){for(var w=16;w<=1<<28;w*=16)if(f<=w)return w;return 0}function Ft(f){var w,k;return w=(f>65535)<<4,f>>>=w,k=(f>255)<<3,f>>>=k,w|=k,k=(f>15)<<2,f>>>=k,w|=k,k=(f>3)<<1,f>>>=k,w|=k,w|f>>1}function Mn(){var f=en(8,function(){return[]});function w(B){var Y=St(B),de=f[Ft(Y)>>2];return de.length>0?de.pop():new ArrayBuffer(Y)}function k(B){f[Ft(B.byteLength)>>2].push(B)}function V(B,Y){var de=null;switch(B){case t0:de=new Int8Array(w(Y),0,Y);break;case r0:de=new Uint8Array(w(Y),0,Y);break;case Dc:de=new Int16Array(w(2*Y),0,Y);break;case oe:de=new Uint16Array(w(2*Y),0,Y);break;case ke:de=new Int32Array(w(4*Y),0,Y);break;case Ve:de=new Uint32Array(w(4*Y),0,Y);break;case ot:de=new Float32Array(w(4*Y),0,Y);break;default:return null}return de.length!==Y?de.subarray(0,Y):de}function te(B){k(B.buffer)}return{alloc:w,free:k,allocType:V,freeType:te}}var Tt=Mn();Tt.zero=Mn();var Qr=3408,In=3410,Sr=3411,fr=3412,nn=3413,Fr=3414,ao=3415,Po=33901,la=33902,io=3379,so=3386,Br=34921,fa=36347,ar=36348,br=35661,yo=35660,n0=34930,o0=36349,Ng=34076,Og=34024,Gg=7936,Fg=7937,Dg=7938,$g=35724,qg=34047,Hg=36063,Ug=34852,a0=3553,zh=34067,Bg=34069,jg=33984,es=6408,$c=5126,Ch=5121,qc=36160,Wg=36053,Vg=36064,Xg=16384,Yg=function(f,w){var k=1;w.ext_texture_filter_anisotropic&&(k=f.getParameter(qg));var V=1,te=1;w.webgl_draw_buffers&&(V=f.getParameter(Ug),te=f.getParameter(Hg));var B=!!w.oes_texture_float;if(B){var Y=f.createTexture();f.bindTexture(a0,Y),f.texImage2D(a0,0,es,1,1,0,es,$c,null);var de=f.createFramebuffer();if(f.bindFramebuffer(qc,de),f.framebufferTexture2D(qc,Vg,a0,Y,0),f.bindTexture(a0,null),f.checkFramebufferStatus(qc)!==Wg)B=!1;else{f.viewport(0,0,1,1),f.clearColor(1,0,0,1),f.clear(Xg);var ve=Tt.allocType($c,4);f.readPixels(0,0,1,1,es,$c,ve),f.getError()?B=!1:(f.deleteFramebuffer(de),f.deleteTexture(Y),B=ve[0]===1),Tt.freeType(ve)}}var be=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),ge=!0;if(!be){var _e=f.createTexture(),ze=Tt.allocType(Ch,36);f.activeTexture(jg),f.bindTexture(zh,_e),f.texImage2D(Bg,0,es,3,3,0,es,Ch,ze),Tt.freeType(ze),f.bindTexture(zh,null),f.deleteTexture(_e),ge=!f.getError()}return{colorBits:[f.getParameter(In),f.getParameter(Sr),f.getParameter(fr),f.getParameter(nn)],depthBits:f.getParameter(Fr),stencilBits:f.getParameter(ao),subpixelBits:f.getParameter(Qr),extensions:Object.keys(w).filter(function(pe){return!!w[pe]}),maxAnisotropic:k,maxDrawbuffers:V,maxColorAttachments:te,pointSizeDims:f.getParameter(Po),lineWidthDims:f.getParameter(la),maxViewportDims:f.getParameter(so),maxCombinedTextureUnits:f.getParameter(br),maxCubeMapSize:f.getParameter(Ng),maxRenderbufferSize:f.getParameter(Og),maxTextureUnits:f.getParameter(n0),maxTextureSize:f.getParameter(io),maxAttributes:f.getParameter(Br),maxVertexUniforms:f.getParameter(fa),maxVertexTextureUnits:f.getParameter(yo),maxVaryingVectors:f.getParameter(ar),maxFragmentUniforms:f.getParameter(o0),glsl:f.getParameter($g),renderer:f.getParameter(Fg),vendor:f.getParameter(Gg),version:f.getParameter(Dg),readFloat:B,npotTextureCube:ge}};function Xn(f){return!!f&&typeof f=="object"&&Array.isArray(f.shape)&&Array.isArray(f.stride)&&typeof f.offset=="number"&&f.shape.length===f.stride.length&&(Array.isArray(f.data)||e(f.data))}var Tn=function(f){return Object.keys(f).map(function(w){return f[w]})},i0={shape:Jg,flatten:Zg};function Kg(f,w,k){for(var V=0;V<w;++V)k[V]=f[V]}function Qg(f,w,k,V){for(var te=0,B=0;B<w;++B)for(var Y=f[B],de=0;de<k;++de)V[te++]=Y[de]}function Rh(f,w,k,V,te,B){for(var Y=B,de=0;de<w;++de)for(var ve=f[de],be=0;be<k;++be)for(var ge=ve[be],_e=0;_e<V;++_e)te[Y++]=ge[_e]}function Ih(f,w,k,V,te){for(var B=1,Y=k+1;Y<w.length;++Y)B*=w[Y];var de=w[k];if(w.length-k===4){var ve=w[k+1],be=w[k+2],ge=w[k+3];for(Y=0;Y<de;++Y)Rh(f[Y],ve,be,ge,V,te),te+=B}else for(Y=0;Y<de;++Y)Ih(f[Y],w,k+1,V,te),te+=B}function Zg(f,w,k,V){var te=1;if(w.length)for(var B=0;B<w.length;++B)te*=w[B];else te=0;var Y=V||Tt.allocType(k,te);switch(w.length){case 0:break;case 1:Kg(f,w[0],Y);break;case 2:Qg(f,w[0],w[1],Y);break;case 3:Rh(f,w[0],w[1],w[2],Y,0);break;default:Ih(f,w,0,Y,0)}return Y}function Jg(f){for(var w=[],k=f;k.length;k=k[0])w.push(k.length);return w}var Hc={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},ex=5120,tx=5122,rx=5124,nx=5121,ox=5123,ax=5125,ix=5126,sx=5126,ha={int8:ex,int16:tx,int32:rx,uint8:nx,uint16:ox,uint32:ax,float:ix,float32:sx},cx=35048,lx=35040,s0={dynamic:cx,stream:lx,static:35044},Uc=i0.flatten,Ph=i0.shape,Nh=35044,fx=35040,Bc=5121,jc=5126,No=[];No[5120]=1,No[5122]=2,No[5124]=4,No[5121]=1,No[5123]=2,No[5125]=4,No[5126]=4;function c0(f){return Hc[Object.prototype.toString.call(f)]|0}function Oh(f,w){for(var k=0;k<w.length;++k)f[k]=w[k]}function Gh(f,w,k,V,te,B,Y){for(var de=0,ve=0;ve<k;++ve)for(var be=0;be<V;++be)f[de++]=w[te*ve+B*be+Y]}function hx(f,w,k,V){var te=0,B={};function Y(D){this.id=te++,this.buffer=f.createBuffer(),this.type=D,this.usage=Nh,this.byteLength=0,this.dimension=1,this.dtype=Bc,this.persistentData=null,k.profile&&(this.stats={size:0})}Y.prototype.bind=function(){f.bindBuffer(this.type,this.buffer)},Y.prototype.destroy=function(){ze(this)};var de=[];function ve(D,K){var ye=de.pop();return ye||(ye=new Y(D)),ye.bind(),_e(ye,K,fx,0,1,!1),ye}function be(D){de.push(D)}function ge(D,K,ye){D.byteLength=K.byteLength,f.bufferData(D.type,K,ye)}function _e(D,K,ye,Pe,ae,Ne){var se;if(D.usage=ye,Array.isArray(K)){if(D.dtype=Pe||jc,K.length>0){var Te;if(Array.isArray(K[0])){se=Ph(K);for(var ie=1,Ae=1;Ae<se.length;++Ae)ie*=se[Ae];D.dimension=ie,Te=Uc(K,se,D.dtype),ge(D,Te,ye),Ne?D.persistentData=Te:Tt.freeType(Te)}else if(typeof K[0]=="number"){D.dimension=ae;var Xe=Tt.allocType(D.dtype,K.length);Oh(Xe,K),ge(D,Xe,ye),Ne?D.persistentData=Xe:Tt.freeType(Xe)}else e(K[0])?(D.dimension=K[0].length,D.dtype=Pe||c0(K[0])||jc,Te=Uc(K,[K.length,K[0].length],D.dtype),ge(D,Te,ye),Ne?D.persistentData=Te:Tt.freeType(Te)):y.raise("invalid buffer data")}}else if(e(K))D.dtype=Pe||c0(K),D.dimension=ae,ge(D,K,ye),Ne&&(D.persistentData=new Uint8Array(new Uint8Array(K.buffer)));else if(Xn(K)){se=K.shape;var nt=K.stride,Ce=K.offset,we=0,ne=0,tt=0,lt=0;se.length===1?(we=se[0],ne=1,tt=nt[0],lt=0):se.length===2?(we=se[0],ne=se[1],tt=nt[0],lt=nt[1]):y.raise("invalid shape"),D.dtype=Pe||c0(K.data)||jc,D.dimension=ne;var $e=Tt.allocType(D.dtype,we*ne);Gh($e,K.data,we,ne,tt,lt,Ce),ge(D,$e,ye),Ne?D.persistentData=$e:Tt.freeType($e)}else K instanceof ArrayBuffer?(D.dtype=Bc,D.dimension=ae,ge(D,K,ye),Ne&&(D.persistentData=new Uint8Array(new Uint8Array(K)))):y.raise("invalid buffer data")}function ze(D){w.bufferCount--,V(D);var K=D.buffer;y(K,"buffer must not be deleted already"),f.deleteBuffer(K),D.buffer=null,delete B[D.id]}function pe(D,K,ye,Pe){w.bufferCount++;var ae=new Y(K);B[ae.id]=ae;function Ne(ie){var Ae=Nh,Xe=null,nt=0,Ce=0,we=1;return Array.isArray(ie)||e(ie)||Xn(ie)||ie instanceof ArrayBuffer?Xe=ie:typeof ie=="number"?nt=ie|0:ie&&(y.type(ie,"object","buffer arguments must be an object, a number or an array"),"data"in ie&&(y(Xe===null||Array.isArray(Xe)||e(Xe)||Xn(Xe),"invalid data for buffer"),Xe=ie.data),"usage"in ie&&(y.parameter(ie.usage,s0,"invalid buffer usage"),Ae=s0[ie.usage]),"type"in ie&&(y.parameter(ie.type,ha,"invalid buffer type"),Ce=ha[ie.type]),"dimension"in ie&&(y.type(ie.dimension,"number","invalid dimension"),we=ie.dimension|0),"length"in ie&&(y.nni(nt,"buffer length must be a nonnegative integer"),nt=ie.length|0)),ae.bind(),Xe?_e(ae,Xe,Ae,Ce,we,Pe):(nt&&f.bufferData(ae.type,nt,Ae),ae.dtype=Ce||Bc,ae.usage=Ae,ae.dimension=we,ae.byteLength=nt),k.profile&&(ae.stats.size=ae.byteLength*No[ae.dtype]),Ne}function se(ie,Ae){y(Ae+ie.byteLength<=ae.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+ie.byteLength+" starting from offset "+Ae+" to a buffer of size "+ae.byteLength),f.bufferSubData(ae.type,Ae,ie)}function Te(ie,Ae){var Xe=(Ae||0)|0,nt;if(ae.bind(),e(ie)||ie instanceof ArrayBuffer)se(ie,Xe);else if(Array.isArray(ie)){if(ie.length>0)if(typeof ie[0]=="number"){var Ce=Tt.allocType(ae.dtype,ie.length);Oh(Ce,ie),se(Ce,Xe),Tt.freeType(Ce)}else if(Array.isArray(ie[0])||e(ie[0])){nt=Ph(ie);var we=Uc(ie,nt,ae.dtype);se(we,Xe),Tt.freeType(we)}else y.raise("invalid buffer data")}else if(Xn(ie)){nt=ie.shape;var ne=ie.stride,tt=0,lt=0,$e=0,vt=0;nt.length===1?(tt=nt[0],lt=1,$e=ne[0],vt=0):nt.length===2?(tt=nt[0],lt=nt[1],$e=ne[0],vt=ne[1]):y.raise("invalid shape");var at=Array.isArray(ie.data)?ae.dtype:c0(ie.data),ut=Tt.allocType(at,tt*lt);Gh(ut,ie.data,tt,lt,$e,vt,ie.offset),se(ut,Xe),Tt.freeType(ut)}else y.raise("invalid data for buffer subdata");return Ne}return ye||Ne(D),Ne._reglType="buffer",Ne._buffer=ae,Ne.subdata=Te,k.profile&&(Ne.stats=ae.stats),Ne.destroy=function(){ze(ae)},Ne}function Ee(){Tn(B).forEach(function(D){D.buffer=f.createBuffer(),f.bindBuffer(D.type,D.buffer),f.bufferData(D.type,D.persistentData||D.byteLength,D.usage)})}return k.profile&&(w.getTotalBufferSize=function(){var D=0;return Object.keys(B).forEach(function(K){D+=B[K].stats.size}),D}),{create:pe,createStream:ve,destroyStream:be,clear:function(){Tn(B).forEach(ze),de.forEach(ze)},getBuffer:function(D){return D&&D._buffer instanceof Y?D._buffer:null},restore:Ee,_initBuffer:_e}}var ux=0,dx=0,px=1,mx=1,vx=4,gx=4,ei={points:ux,point:dx,lines:px,line:mx,triangles:vx,triangle:gx,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},xx=0,yx=1,ts=4,bx=5120,ti=5121,Fh=5122,ri=5123,Dh=5124,ua=5125,Wc=34963,wx=35040,_x=35044;function Ex(f,w,k,V){var te={},B=0,Y={uint8:ti,uint16:ri};w.oes_element_index_uint&&(Y.uint32=ua);function de(Ee){this.id=B++,te[this.id]=this,this.buffer=Ee,this.primType=ts,this.vertCount=0,this.type=0}de.prototype.bind=function(){this.buffer.bind()};var ve=[];function be(Ee){var D=ve.pop();return D||(D=new de(k.create(null,Wc,!0,!1)._buffer)),_e(D,Ee,wx,-1,-1,0,0),D}function ge(Ee){ve.push(Ee)}function _e(Ee,D,K,ye,Pe,ae,Ne){Ee.buffer.bind();var se;if(D){var Te=Ne;!Ne&&(!e(D)||Xn(D)&&!e(D.data))&&(Te=w.oes_element_index_uint?ua:ri),k._initBuffer(Ee.buffer,D,K,Te,3)}else f.bufferData(Wc,ae,K),Ee.buffer.dtype=se||ti,Ee.buffer.usage=K,Ee.buffer.dimension=3,Ee.buffer.byteLength=ae;if(se=Ne,!Ne){switch(Ee.buffer.dtype){case ti:case bx:se=ti;break;case ri:case Fh:se=ri;break;case ua:case Dh:se=ua;break;default:y.raise("unsupported type for element array")}Ee.buffer.dtype=se}Ee.type=se,y(se!==ua||!!w.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var ie=Pe;ie<0&&(ie=Ee.buffer.byteLength,se===ri?ie>>=1:se===ua&&(ie>>=2)),Ee.vertCount=ie;var Ae=ye;if(ye<0){Ae=ts;var Xe=Ee.buffer.dimension;Xe===1&&(Ae=xx),Xe===2&&(Ae=yx),Xe===3&&(Ae=ts)}Ee.primType=Ae}function ze(Ee){V.elementsCount--,y(Ee.buffer!==null,"must not double destroy elements"),delete te[Ee.id],Ee.buffer.destroy(),Ee.buffer=null}function pe(Ee,D){var K=k.create(null,Wc,!0),ye=new de(K._buffer);V.elementsCount++;function Pe(ae){if(!ae)K(),ye.primType=ts,ye.vertCount=0,ye.type=ti;else if(typeof ae=="number")K(ae),ye.primType=ts,ye.vertCount=ae|0,ye.type=ti;else{var Ne=null,se=_x,Te=-1,ie=-1,Ae=0,Xe=0;Array.isArray(ae)||e(ae)||Xn(ae)?Ne=ae:(y.type(ae,"object","invalid arguments for elements"),"data"in ae&&(Ne=ae.data,y(Array.isArray(Ne)||e(Ne)||Xn(Ne),"invalid data for element buffer")),"usage"in ae&&(y.parameter(ae.usage,s0,"invalid element buffer usage"),se=s0[ae.usage]),"primitive"in ae&&(y.parameter(ae.primitive,ei,"invalid element buffer primitive"),Te=ei[ae.primitive]),"count"in ae&&(y(typeof ae.count=="number"&&ae.count>=0,"invalid vertex count for elements"),ie=ae.count|0),"type"in ae&&(y.parameter(ae.type,Y,"invalid buffer type"),Xe=Y[ae.type]),"length"in ae?Ae=ae.length|0:(Ae=ie,Xe===ri||Xe===Fh?Ae*=2:(Xe===ua||Xe===Dh)&&(Ae*=4))),_e(ye,Ne,se,Te,ie,Ae,Xe)}return Pe}return Pe(Ee),Pe._reglType="elements",Pe._elements=ye,Pe.subdata=function(ae,Ne){return K.subdata(ae,Ne),Pe},Pe.destroy=function(){ze(ye)},Pe}return{create:pe,createStream:be,destroyStream:ge,getElements:function(Ee){return typeof Ee=="function"&&Ee._elements instanceof de?Ee._elements:null},clear:function(){Tn(te).forEach(ze)}}}var $h=new Float32Array(1),Mx=new Uint32Array($h.buffer),Tx=5123;function qh(f){for(var w=Tt.allocType(Tx,f.length),k=0;k<f.length;++k)if(isNaN(f[k]))w[k]=65535;else if(f[k]===1/0)w[k]=31744;else if(f[k]===-1/0)w[k]=64512;else{$h[0]=f[k];var V=Mx[0],te=V>>>31<<15,B=(V<<1>>>24)-127,Y=V>>13&1023;if(B<-24)w[k]=te;else if(B<-14){var de=-14-B;w[k]=te+(Y+1024>>de)}else B>15?w[k]=te+31744:w[k]=te+(B+15<<10)+Y}return w}function dr(f){return Array.isArray(f)||e(f)}var Hh=function(f){return!(f&f-1)&&!!f},Ax=34467,co=3553,Vc=34067,l0=34069,da=6408,Xc=6406,f0=6407,rs=6409,h0=6410,Uh=32854,Yc=32855,Bh=36194,Sx=32819,kx=32820,Lx=33635,zx=34042,Kc=6402,u0=34041,Qc=35904,Zc=35906,ni=36193,Jc=33776,el=33777,tl=33778,rl=33779,jh=35986,Wh=35987,Vh=34798,Xh=35840,Yh=35841,Kh=35842,Qh=35843,Zh=36196,oi=5121,nl=5123,ol=5125,ns=5126,Cx=10242,Rx=10243,Ix=10497,al=33071,Px=33648,Nx=10240,Ox=10241,il=9728,Gx=9729,sl=9984,Jh=9985,eu=9986,cl=9987,Fx=33170,d0=4352,Dx=4353,$x=4354,qx=34046,Hx=3317,Ux=37440,Bx=37441,jx=37443,tu=37444,os=33984,Wx=[sl,eu,Jh,cl],p0=[0,rs,h0,f0,da],Pn={};Pn[rs]=Pn[Xc]=Pn[Kc]=1,Pn[u0]=Pn[h0]=2,Pn[f0]=Pn[Qc]=3,Pn[da]=Pn[Zc]=4;function ai(f){return"[object "+f+"]"}var ru=ai("HTMLCanvasElement"),nu=ai("OffscreenCanvas"),ou=ai("CanvasRenderingContext2D"),au=ai("ImageBitmap"),iu=ai("HTMLImageElement"),su=ai("HTMLVideoElement"),Vx=Object.keys(Hc).concat([ru,nu,ou,au,iu,su]),ii=[];ii[oi]=1,ii[ns]=4,ii[ni]=2,ii[nl]=2,ii[ol]=4;var jr=[];jr[Uh]=2,jr[Yc]=2,jr[Bh]=2,jr[u0]=4,jr[Jc]=.5,jr[el]=.5,jr[tl]=1,jr[rl]=1,jr[jh]=.5,jr[Wh]=1,jr[Vh]=1,jr[Xh]=.5,jr[Yh]=.25,jr[Kh]=.5,jr[Qh]=.25,jr[Zh]=.5;function cu(f){return Array.isArray(f)&&(f.length===0||typeof f[0]=="number")}function lu(f){if(!Array.isArray(f))return!1;var w=f.length;return!(w===0||!dr(f[0]))}function pa(f){return Object.prototype.toString.call(f)}function fu(f){return pa(f)===ru}function hu(f){return pa(f)===nu}function Xx(f){return pa(f)===ou}function Yx(f){return pa(f)===au}function Kx(f){return pa(f)===iu}function Qx(f){return pa(f)===su}function ll(f){if(!f)return!1;var w=pa(f);return Vx.indexOf(w)>=0?!0:cu(f)||lu(f)||Xn(f)}function uu(f){return Hc[Object.prototype.toString.call(f)]|0}function Zx(f,w){var k=w.length;switch(f.type){case oi:case nl:case ol:case ns:var V=Tt.allocType(f.type,k);V.set(w),f.data=V;break;case ni:f.data=qh(w);break;default:y.raise("unsupported texture type, must specify a typed array")}}function du(f,w){return Tt.allocType(f.type===ni?ns:f.type,w)}function pu(f,w){f.type===ni?(f.data=qh(w),Tt.freeType(w)):f.data=w}function Jx(f,w,k,V,te,B){for(var Y=f.width,de=f.height,ve=f.channels,be=Y*de*ve,ge=du(f,be),_e=0,ze=0;ze<de;++ze)for(var pe=0;pe<Y;++pe)for(var Ee=0;Ee<ve;++Ee)ge[_e++]=w[k*pe+V*ze+te*Ee+B];pu(f,ge)}function m0(f,w,k,V,te,B){var Y;if(typeof jr[f]!="undefined"?Y=jr[f]:Y=Pn[f]*ii[w],B&&(Y*=6),te){for(var de=0,ve=k;ve>=1;)de+=Y*ve*ve,ve/=2;return de}else return Y*k*V}function ey(f,w,k,V,te,B,Y){var de={"don't care":d0,"dont care":d0,nice:$x,fast:Dx},ve={repeat:Ix,clamp:al,mirror:Px},be={nearest:il,linear:Gx},ge=t({mipmap:cl,"nearest mipmap nearest":sl,"linear mipmap nearest":Jh,"nearest mipmap linear":eu,"linear mipmap linear":cl},be),_e={none:0,browser:tu},ze={uint8:oi,rgba4:Sx,rgb565:Lx,"rgb5 a1":kx},pe={alpha:Xc,luminance:rs,"luminance alpha":h0,rgb:f0,rgba:da,rgba4:Uh,"rgb5 a1":Yc,rgb565:Bh},Ee={};w.ext_srgb&&(pe.srgb=Qc,pe.srgba=Zc),w.oes_texture_float&&(ze.float32=ze.float=ns),w.oes_texture_half_float&&(ze.float16=ze["half float"]=ni),w.webgl_depth_texture&&(t(pe,{depth:Kc,"depth stencil":u0}),t(ze,{uint16:nl,uint32:ol,"depth stencil":zx})),w.webgl_compressed_texture_s3tc&&t(Ee,{"rgb s3tc dxt1":Jc,"rgba s3tc dxt1":el,"rgba s3tc dxt3":tl,"rgba s3tc dxt5":rl}),w.webgl_compressed_texture_atc&&t(Ee,{"rgb atc":jh,"rgba atc explicit alpha":Wh,"rgba atc interpolated alpha":Vh}),w.webgl_compressed_texture_pvrtc&&t(Ee,{"rgb pvrtc 4bppv1":Xh,"rgb pvrtc 2bppv1":Yh,"rgba pvrtc 4bppv1":Kh,"rgba pvrtc 2bppv1":Qh}),w.webgl_compressed_texture_etc1&&(Ee["rgb etc1"]=Zh);var D=Array.prototype.slice.call(f.getParameter(Ax));Object.keys(Ee).forEach(function(S){var X=Ee[S];D.indexOf(X)>=0&&(pe[S]=X)});var K=Object.keys(pe);k.textureFormats=K;var ye=[];Object.keys(pe).forEach(function(S){var X=pe[S];ye[X]=S});var Pe=[];Object.keys(ze).forEach(function(S){var X=ze[S];Pe[X]=S});var ae=[];Object.keys(be).forEach(function(S){var X=be[S];ae[X]=S});var Ne=[];Object.keys(ge).forEach(function(S){var X=ge[S];Ne[X]=S});var se=[];Object.keys(ve).forEach(function(S){var X=ve[S];se[X]=S});var Te=K.reduce(function(S,X){var U=pe[X];return U===rs||U===Xc||U===rs||U===h0||U===Kc||U===u0||w.ext_srgb&&(U===Qc||U===Zc)?S[U]=U:U===Yc||X.indexOf("rgba")>=0?S[U]=da:S[U]=f0,S},{});function ie(){this.internalformat=da,this.format=da,this.type=oi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=tu,this.width=0,this.height=0,this.channels=0}function Ae(S,X){S.internalformat=X.internalformat,S.format=X.format,S.type=X.type,S.compressed=X.compressed,S.premultiplyAlpha=X.premultiplyAlpha,S.flipY=X.flipY,S.unpackAlignment=X.unpackAlignment,S.colorSpace=X.colorSpace,S.width=X.width,S.height=X.height,S.channels=X.channels}function Xe(S,X){if(!(typeof X!="object"||!X)){if("premultiplyAlpha"in X&&(y.type(X.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),S.premultiplyAlpha=X.premultiplyAlpha),"flipY"in X&&(y.type(X.flipY,"boolean","invalid texture flip"),S.flipY=X.flipY),"alignment"in X&&(y.oneOf(X.alignment,[1,2,4,8],"invalid texture unpack alignment"),S.unpackAlignment=X.alignment),"colorSpace"in X&&(y.parameter(X.colorSpace,_e,"invalid colorSpace"),S.colorSpace=_e[X.colorSpace]),"type"in X){var U=X.type;y(w.oes_texture_float||!(U==="float"||U==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),y(w.oes_texture_half_float||!(U==="half float"||U==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),y(w.webgl_depth_texture||!(U==="uint16"||U==="uint32"||U==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),y.parameter(U,ze,"invalid texture type"),S.type=ze[U]}var Fe=S.width,gt=S.height,M=S.channels,b=!1;"shape"in X?(y(Array.isArray(X.shape)&&X.shape.length>=2,"shape must be an array"),Fe=X.shape[0],gt=X.shape[1],X.shape.length===3&&(M=X.shape[2],y(M>0&&M<=4,"invalid number of channels"),b=!0),y(Fe>=0&&Fe<=k.maxTextureSize,"invalid width"),y(gt>=0&&gt<=k.maxTextureSize,"invalid height")):("radius"in X&&(Fe=gt=X.radius,y(Fe>=0&&Fe<=k.maxTextureSize,"invalid radius")),"width"in X&&(Fe=X.width,y(Fe>=0&&Fe<=k.maxTextureSize,"invalid width")),"height"in X&&(gt=X.height,y(gt>=0&&gt<=k.maxTextureSize,"invalid height")),"channels"in X&&(M=X.channels,y(M>0&&M<=4,"invalid number of channels"),b=!0)),S.width=Fe|0,S.height=gt|0,S.channels=M|0;var C=!1;if("format"in X){var F=X.format;y(w.webgl_depth_texture||!(F==="depth"||F==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),y.parameter(F,pe,"invalid texture format");var $=S.internalformat=pe[F];S.format=Te[$],F in ze&&("type"in X||(S.type=ze[F])),F in Ee&&(S.compressed=!0),C=!0}!b&&C?S.channels=Pn[S.format]:b&&!C?S.channels!==p0[S.format]&&(S.format=S.internalformat=p0[S.channels]):C&&b&&y(S.channels===Pn[S.format],"number of channels inconsistent with specified format")}}function nt(S){f.pixelStorei(Ux,S.flipY),f.pixelStorei(Bx,S.premultiplyAlpha),f.pixelStorei(jx,S.colorSpace),f.pixelStorei(Hx,S.unpackAlignment)}function Ce(){ie.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function we(S,X){var U=null;if(ll(X)?U=X:X&&(y.type(X,"object","invalid pixel data type"),Xe(S,X),"x"in X&&(S.xOffset=X.x|0),"y"in X&&(S.yOffset=X.y|0),ll(X.data)&&(U=X.data)),y(!S.compressed||U instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),X.copy){y(!U,"can not specify copy and data field for the same texture");var Fe=te.viewportWidth,gt=te.viewportHeight;S.width=S.width||Fe-S.xOffset,S.height=S.height||gt-S.yOffset,S.needsCopy=!0,y(S.xOffset>=0&&S.xOffset<Fe&&S.yOffset>=0&&S.yOffset<gt&&S.width>0&&S.width<=Fe&&S.height>0&&S.height<=gt,"copy texture read out of bounds")}else if(!U)S.width=S.width||1,S.height=S.height||1,S.channels=S.channels||4;else if(e(U))S.channels=S.channels||4,S.data=U,!("type"in X)&&S.type===oi&&(S.type=uu(U));else if(cu(U))S.channels=S.channels||4,Zx(S,U),S.alignment=1,S.needsFree=!0;else if(Xn(U)){var M=U.data;!Array.isArray(M)&&S.type===oi&&(S.type=uu(M));var b=U.shape,C=U.stride,F,$,P,R,O,T;b.length===3?(P=b[2],T=C[2]):(y(b.length===2,"invalid ndarray pixel data, must be 2 or 3D"),P=1,T=1),F=b[0],$=b[1],R=C[0],O=C[1],S.alignment=1,S.width=F,S.height=$,S.channels=P,S.format=S.internalformat=p0[P],S.needsFree=!0,Jx(S,M,R,O,T,U.offset)}else if(fu(U)||hu(U)||Xx(U))fu(U)||hu(U)?S.element=U:S.element=U.canvas,S.width=S.element.width,S.height=S.element.height,S.channels=4;else if(Yx(U))S.element=U,S.width=U.width,S.height=U.height,S.channels=4;else if(Kx(U))S.element=U,S.width=U.naturalWidth,S.height=U.naturalHeight,S.channels=4;else if(Qx(U))S.element=U,S.width=U.videoWidth,S.height=U.videoHeight,S.channels=4;else if(lu(U)){var L=S.width||U[0].length,E=S.height||U.length,G=S.channels;dr(U[0][0])?G=G||U[0][0].length:G=G||1;for(var H=i0.shape(U),ee=1,re=0;re<H.length;++re)ee*=H[re];var Q=du(S,ee);i0.flatten(U,H,"",Q),pu(S,Q),S.alignment=1,S.width=L,S.height=E,S.channels=G,S.format=S.internalformat=p0[G],S.needsFree=!0}S.type===ns?y(k.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):S.type===ni&&y(k.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ne(S,X,U){var Fe=S.element,gt=S.data,M=S.internalformat,b=S.format,C=S.type,F=S.width,$=S.height;nt(S),Fe?f.texImage2D(X,U,b,b,C,Fe):S.compressed?f.compressedTexImage2D(X,U,M,F,$,0,gt):S.needsCopy?(V(),f.copyTexImage2D(X,U,b,S.xOffset,S.yOffset,F,$,0)):f.texImage2D(X,U,b,F,$,0,b,C,gt||null)}function tt(S,X,U,Fe,gt){var M=S.element,b=S.data,C=S.internalformat,F=S.format,$=S.type,P=S.width,R=S.height;nt(S),M?f.texSubImage2D(X,gt,U,Fe,F,$,M):S.compressed?f.compressedTexSubImage2D(X,gt,U,Fe,C,P,R,b):S.needsCopy?(V(),f.copyTexSubImage2D(X,gt,U,Fe,S.xOffset,S.yOffset,P,R)):f.texSubImage2D(X,gt,U,Fe,P,R,F,$,b)}var lt=[];function $e(){return lt.pop()||new Ce}function vt(S){S.needsFree&&Tt.freeType(S.data),Ce.call(S),lt.push(S)}function at(){ie.call(this),this.genMipmaps=!1,this.mipmapHint=d0,this.mipmask=0,this.images=Array(16)}function ut(S,X,U){var Fe=S.images[0]=$e();S.mipmask=1,Fe.width=S.width=X,Fe.height=S.height=U,Fe.channels=S.channels=4}function Nt(S,X){var U=null;if(ll(X))U=S.images[0]=$e(),Ae(U,S),we(U,X),S.mipmask=1;else if(Xe(S,X),Array.isArray(X.mipmap))for(var Fe=X.mipmap,gt=0;gt<Fe.length;++gt)U=S.images[gt]=$e(),Ae(U,S),U.width>>=gt,U.height>>=gt,we(U,Fe[gt]),S.mipmask|=1<<gt;else U=S.images[0]=$e(),Ae(U,S),we(U,X),S.mipmask=1;Ae(S,S.images[0]),S.compressed&&(S.internalformat===Jc||S.internalformat===el||S.internalformat===tl||S.internalformat===rl)&&y(S.width%4===0&&S.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function _r(S,X){for(var U=S.images,Fe=0;Fe<U.length;++Fe){if(!U[Fe])return;ne(U[Fe],X,Fe)}}var Ir=[];function _t(){var S=Ir.pop()||new at;ie.call(S),S.mipmask=0;for(var X=0;X<16;++X)S.images[X]=null;return S}function kr(S){for(var X=S.images,U=0;U<X.length;++U)X[U]&&vt(X[U]),X[U]=null;Ir.push(S)}function Jt(){this.minFilter=il,this.magFilter=il,this.wrapS=al,this.wrapT=al,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=d0}function Er(S,X){if("min"in X){var U=X.min;y.parameter(U,ge),S.minFilter=ge[U],Wx.indexOf(S.minFilter)>=0&&!("faces"in X)&&(S.genMipmaps=!0)}if("mag"in X){var Fe=X.mag;y.parameter(Fe,be),S.magFilter=be[Fe]}var gt=S.wrapS,M=S.wrapT;if("wrap"in X){var b=X.wrap;typeof b=="string"?(y.parameter(b,ve),gt=M=ve[b]):Array.isArray(b)&&(y.parameter(b[0],ve),y.parameter(b[1],ve),gt=ve[b[0]],M=ve[b[1]])}else{if("wrapS"in X){var C=X.wrapS;y.parameter(C,ve),gt=ve[C]}if("wrapT"in X){var F=X.wrapT;y.parameter(F,ve),M=ve[F]}}if(S.wrapS=gt,S.wrapT=M,"anisotropic"in X){var $=X.anisotropic;y(typeof $=="number"&&$>=1&&$<=k.maxAnisotropic,"aniso samples must be between 1 and "),S.anisotropic=X.anisotropic}if("mipmap"in X){var P=!1;switch(typeof X.mipmap){case"string":y.parameter(X.mipmap,de,"invalid mipmap hint"),S.mipmapHint=de[X.mipmap],S.genMipmaps=!0,P=!0;break;case"boolean":P=S.genMipmaps=X.mipmap;break;case"object":y(Array.isArray(X.mipmap),"invalid mipmap type"),S.genMipmaps=!1,P=!0;break;default:y.raise("invalid mipmap type")}P&&!("min"in X)&&(S.minFilter=sl)}}function Lr(S,X){f.texParameteri(X,Ox,S.minFilter),f.texParameteri(X,Nx,S.magFilter),f.texParameteri(X,Cx,S.wrapS),f.texParameteri(X,Rx,S.wrapT),w.ext_texture_filter_anisotropic&&f.texParameteri(X,qx,S.anisotropic),S.genMipmaps&&(f.hint(Fx,S.mipmapHint),f.generateMipmap(X))}var zr=0,Dr={},Wr=k.maxTextureUnits,pr=Array(Wr).map(function(){return null});function ft(S){ie.call(this),this.mipmask=0,this.internalformat=da,this.id=zr++,this.refCount=1,this.target=S,this.texture=f.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Jt,Y.profile&&(this.stats={size:0})}function Vr(S){f.activeTexture(os),f.bindTexture(S.target,S.texture)}function Dt(){var S=pr[0];S?f.bindTexture(S.target,S.texture):f.bindTexture(co,null)}function Qe(S){var X=S.texture;y(X,"must not double destroy texture");var U=S.unit,Fe=S.target;U>=0&&(f.activeTexture(os+U),f.bindTexture(Fe,null),pr[U]=null),f.deleteTexture(X),S.texture=null,S.params=null,S.pixels=null,S.refCount=0,delete Dr[S.id],B.textureCount--}t(ft.prototype,{bind:function(){var S=this;S.bindCount+=1;var X=S.unit;if(X<0){for(var U=0;U<Wr;++U){var Fe=pr[U];if(Fe){if(Fe.bindCount>0)continue;Fe.unit=-1}pr[U]=S,X=U;break}X>=Wr&&y.raise("insufficient number of texture units"),Y.profile&&B.maxTextureUnits<X+1&&(B.maxTextureUnits=X+1),S.unit=X,f.activeTexture(os+X),f.bindTexture(S.target,S.texture)}return X},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Qe(this)}});function yt(S,X){var U=new ft(co);Dr[U.id]=U,B.textureCount++;function Fe(b,C){var F=U.texInfo;Jt.call(F);var $=_t();return typeof b=="number"?typeof C=="number"?ut($,b|0,C|0):ut($,b|0,b|0):b?(y.type(b,"object","invalid arguments to regl.texture"),Er(F,b),Nt($,b)):ut($,1,1),F.genMipmaps&&($.mipmask=($.width<<1)-1),U.mipmask=$.mipmask,Ae(U,$),y.texture2D(F,$,k),U.internalformat=$.internalformat,Fe.width=$.width,Fe.height=$.height,Vr(U),_r($,co),Lr(F,co),Dt(),kr($),Y.profile&&(U.stats.size=m0(U.internalformat,U.type,$.width,$.height,F.genMipmaps,!1)),Fe.format=ye[U.internalformat],Fe.type=Pe[U.type],Fe.mag=ae[F.magFilter],Fe.min=Ne[F.minFilter],Fe.wrapS=se[F.wrapS],Fe.wrapT=se[F.wrapT],Fe}function gt(b,C,F,$){y(!!b,"must specify image data");var P=C|0,R=F|0,O=$|0,T=$e();return Ae(T,U),T.width=0,T.height=0,we(T,b),T.width=T.width||(U.width>>O)-P,T.height=T.height||(U.height>>O)-R,y(U.type===T.type&&U.format===T.format&&U.internalformat===T.internalformat,"incompatible format for texture.subimage"),y(P>=0&&R>=0&&P+T.width<=U.width&&R+T.height<=U.height,"texture.subimage write out of bounds"),y(U.mipmask&1<<O,"missing mipmap data"),y(T.data||T.element||T.needsCopy,"missing image data"),Vr(U),tt(T,co,P,R,O),Dt(),vt(T),Fe}function M(b,C){var F=b|0,$=C|0||F;if(F===U.width&&$===U.height)return Fe;Fe.width=U.width=F,Fe.height=U.height=$,Vr(U);for(var P=0;U.mipmask>>P;++P){var R=F>>P,O=$>>P;if(!R||!O)break;f.texImage2D(co,P,U.format,R,O,0,U.format,U.type,null)}return Dt(),Y.profile&&(U.stats.size=m0(U.internalformat,U.type,F,$,!1,!1)),Fe}return Fe(S,X),Fe.subimage=gt,Fe.resize=M,Fe._reglType="texture2d",Fe._texture=U,Y.profile&&(Fe.stats=U.stats),Fe.destroy=function(){U.decRef()},Fe}function kt(S,X,U,Fe,gt,M){var b=new ft(Vc);Dr[b.id]=b,B.cubeCount++;var C=new Array(6);function F(R,O,T,L,E,G){var H,ee=b.texInfo;for(Jt.call(ee),H=0;H<6;++H)C[H]=_t();if(typeof R=="number"||!R){var re=R|0||1;for(H=0;H<6;++H)ut(C[H],re,re)}else if(typeof R=="object")if(O)Nt(C[0],R),Nt(C[1],O),Nt(C[2],T),Nt(C[3],L),Nt(C[4],E),Nt(C[5],G);else if(Er(ee,R),Xe(b,R),"faces"in R){var Q=R.faces;for(y(Array.isArray(Q)&&Q.length===6,"cube faces must be a length 6 array"),H=0;H<6;++H)y(typeof Q[H]=="object"&&!!Q[H],"invalid input for cube map face"),Ae(C[H],b),Nt(C[H],Q[H])}else for(H=0;H<6;++H)Nt(C[H],R);else y.raise("invalid arguments to cube map");for(Ae(b,C[0]),k.npotTextureCube||y(Hh(b.width)&&Hh(b.height),"your browser does not support non power or two texture dimensions"),ee.genMipmaps?b.mipmask=(C[0].width<<1)-1:b.mipmask=C[0].mipmask,y.textureCube(b,ee,C,k),b.internalformat=C[0].internalformat,F.width=C[0].width,F.height=C[0].height,Vr(b),H=0;H<6;++H)_r(C[H],l0+H);for(Lr(ee,Vc),Dt(),Y.profile&&(b.stats.size=m0(b.internalformat,b.type,F.width,F.height,ee.genMipmaps,!0)),F.format=ye[b.internalformat],F.type=Pe[b.type],F.mag=ae[ee.magFilter],F.min=Ne[ee.minFilter],F.wrapS=se[ee.wrapS],F.wrapT=se[ee.wrapT],H=0;H<6;++H)kr(C[H]);return F}function $(R,O,T,L,E){y(!!O,"must specify image data"),y(typeof R=="number"&&R===(R|0)&&R>=0&&R<6,"invalid face");var G=T|0,H=L|0,ee=E|0,re=$e();return Ae(re,b),re.width=0,re.height=0,we(re,O),re.width=re.width||(b.width>>ee)-G,re.height=re.height||(b.height>>ee)-H,y(b.type===re.type&&b.format===re.format&&b.internalformat===re.internalformat,"incompatible format for texture.subimage"),y(G>=0&&H>=0&&G+re.width<=b.width&&H+re.height<=b.height,"texture.subimage write out of bounds"),y(b.mipmask&1<<ee,"missing mipmap data"),y(re.data||re.element||re.needsCopy,"missing image data"),Vr(b),tt(re,l0+R,G,H,ee),Dt(),vt(re),F}function P(R){var O=R|0;if(O!==b.width){F.width=b.width=O,F.height=b.height=O,Vr(b);for(var T=0;T<6;++T)for(var L=0;b.mipmask>>L;++L)f.texImage2D(l0+T,L,b.format,O>>L,O>>L,0,b.format,b.type,null);return Dt(),Y.profile&&(b.stats.size=m0(b.internalformat,b.type,F.width,F.height,!1,!0)),F}}return F(S,X,U,Fe,gt,M),F.subimage=$,F.resize=P,F._reglType="textureCube",F._texture=b,Y.profile&&(F.stats=b.stats),F.destroy=function(){b.decRef()},F}function mr(){for(var S=0;S<Wr;++S)f.activeTexture(os+S),f.bindTexture(co,null),pr[S]=null;Tn(Dr).forEach(Qe),B.cubeCount=0,B.textureCount=0}Y.profile&&(B.getTotalTextureSize=function(){var S=0;return Object.keys(Dr).forEach(function(X){S+=Dr[X].stats.size}),S});function fo(){for(var S=0;S<Wr;++S){var X=pr[S];X&&(X.bindCount=0,X.unit=-1,pr[S]=null)}Tn(Dr).forEach(function(U){U.texture=f.createTexture(),f.bindTexture(U.target,U.texture);for(var Fe=0;Fe<32;++Fe)if(U.mipmask&1<<Fe)if(U.target===co)f.texImage2D(co,Fe,U.internalformat,U.width>>Fe,U.height>>Fe,0,U.internalformat,U.type,null);else for(var gt=0;gt<6;++gt)f.texImage2D(l0+gt,Fe,U.internalformat,U.width>>Fe,U.height>>Fe,0,U.internalformat,U.type,null);Lr(U.texInfo,U.target)})}function wa(){for(var S=0;S<Wr;++S){var X=pr[S];X&&(X.bindCount=0,X.unit=-1,pr[S]=null),f.activeTexture(os+S),f.bindTexture(co,null),f.bindTexture(Vc,null)}}return{create2D:yt,createCube:kt,clear:mr,getTexture:function(S){return null},restore:fo,refresh:wa}}var Oo=36161,v0=32854,mu=32855,vu=36194,gu=33189,xu=36168,yu=34041,bu=35907,wu=34836,_u=34842,Eu=34843,Yn=[];Yn[v0]=2,Yn[mu]=2,Yn[vu]=2,Yn[gu]=2,Yn[xu]=1,Yn[yu]=4,Yn[bu]=4,Yn[wu]=16,Yn[_u]=8,Yn[Eu]=6;function Mu(f,w,k){return Yn[f]*w*k}var ty=function(f,w,k,V,te){var B={rgba4:v0,rgb565:vu,"rgb5 a1":mu,depth:gu,stencil:xu,"depth stencil":yu};w.ext_srgb&&(B.srgba=bu),w.ext_color_buffer_half_float&&(B.rgba16f=_u,B.rgb16f=Eu),w.webgl_color_buffer_float&&(B.rgba32f=wu);var Y=[];Object.keys(B).forEach(function(pe){var Ee=B[pe];Y[Ee]=pe});var de=0,ve={};function be(pe){this.id=de++,this.refCount=1,this.renderbuffer=pe,this.format=v0,this.width=0,this.height=0,te.profile&&(this.stats={size:0})}be.prototype.decRef=function(){--this.refCount<=0&&ge(this)};function ge(pe){var Ee=pe.renderbuffer;y(Ee,"must not double destroy renderbuffer"),f.bindRenderbuffer(Oo,null),f.deleteRenderbuffer(Ee),pe.renderbuffer=null,pe.refCount=0,delete ve[pe.id],V.renderbufferCount--}function _e(pe,Ee){var D=new be(f.createRenderbuffer());ve[D.id]=D,V.renderbufferCount++;function K(Pe,ae){var Ne=0,se=0,Te=v0;if(typeof Pe=="object"&&Pe){var ie=Pe;if("shape"in ie){var Ae=ie.shape;y(Array.isArray(Ae)&&Ae.length>=2,"invalid renderbuffer shape"),Ne=Ae[0]|0,se=Ae[1]|0}else"radius"in ie&&(Ne=se=ie.radius|0),"width"in ie&&(Ne=ie.width|0),"height"in ie&&(se=ie.height|0);"format"in ie&&(y.parameter(ie.format,B,"invalid renderbuffer format"),Te=B[ie.format])}else typeof Pe=="number"?(Ne=Pe|0,typeof ae=="number"?se=ae|0:se=Ne):Pe?y.raise("invalid arguments to renderbuffer constructor"):Ne=se=1;if(y(Ne>0&&se>0&&Ne<=k.maxRenderbufferSize&&se<=k.maxRenderbufferSize,"invalid renderbuffer size"),!(Ne===D.width&&se===D.height&&Te===D.format))return K.width=D.width=Ne,K.height=D.height=se,D.format=Te,f.bindRenderbuffer(Oo,D.renderbuffer),f.renderbufferStorage(Oo,Te,Ne,se),y(f.getError()===0,"invalid render buffer format"),te.profile&&(D.stats.size=Mu(D.format,D.width,D.height)),K.format=Y[D.format],K}function ye(Pe,ae){var Ne=Pe|0,se=ae|0||Ne;return Ne===D.width&&se===D.height||(y(Ne>0&&se>0&&Ne<=k.maxRenderbufferSize&&se<=k.maxRenderbufferSize,"invalid renderbuffer size"),K.width=D.width=Ne,K.height=D.height=se,f.bindRenderbuffer(Oo,D.renderbuffer),f.renderbufferStorage(Oo,D.format,Ne,se),y(f.getError()===0,"invalid render buffer format"),te.profile&&(D.stats.size=Mu(D.format,D.width,D.height))),K}return K(pe,Ee),K.resize=ye,K._reglType="renderbuffer",K._renderbuffer=D,te.profile&&(K.stats=D.stats),K.destroy=function(){D.decRef()},K}te.profile&&(V.getTotalRenderbufferSize=function(){var pe=0;return Object.keys(ve).forEach(function(Ee){pe+=ve[Ee].stats.size}),pe});function ze(){Tn(ve).forEach(function(pe){pe.renderbuffer=f.createRenderbuffer(),f.bindRenderbuffer(Oo,pe.renderbuffer),f.renderbufferStorage(Oo,pe.format,pe.width,pe.height)}),f.bindRenderbuffer(Oo,null)}return{create:_e,clear:function(){Tn(ve).forEach(ge)},restore:ze}},bo=36160,fl=36161,ma=3553,g0=34069,Tu=36064,Au=36096,Su=36128,ku=33306,Lu=36053,ry=36054,ny=36055,oy=36057,ay=36061,iy=36193,sy=5121,cy=5126,zu=6407,Cu=6408,ly=6402,fy=[zu,Cu],hl=[];hl[Cu]=4,hl[zu]=3;var x0=[];x0[sy]=1,x0[cy]=4,x0[iy]=2;var hy=32854,uy=32855,dy=36194,py=33189,my=36168,Ru=34041,vy=35907,gy=34836,xy=34842,yy=34843,by=[hy,uy,dy,vy,xy,yy,gy],si={};si[Lu]="complete",si[ry]="incomplete attachment",si[oy]="incomplete dimensions",si[ny]="incomplete, missing attachment",si[ay]="unsupported";function wy(f,w,k,V,te,B){var Y={cur:null,next:null,dirty:!1,setFBO:null},de=["rgba"],ve=["rgba4","rgb565","rgb5 a1"];w.ext_srgb&&ve.push("srgba"),w.ext_color_buffer_half_float&&ve.push("rgba16f","rgb16f"),w.webgl_color_buffer_float&&ve.push("rgba32f");var be=["uint8"];w.oes_texture_half_float&&be.push("half float","float16"),w.oes_texture_float&&be.push("float","float32");function ge(Ce,we,ne){this.target=Ce,this.texture=we,this.renderbuffer=ne;var tt=0,lt=0;we?(tt=we.width,lt=we.height):ne&&(tt=ne.width,lt=ne.height),this.width=tt,this.height=lt}function _e(Ce){Ce&&(Ce.texture&&Ce.texture._texture.decRef(),Ce.renderbuffer&&Ce.renderbuffer._renderbuffer.decRef())}function ze(Ce,we,ne){if(Ce)if(Ce.texture){var tt=Ce.texture._texture,lt=Math.max(1,tt.width),$e=Math.max(1,tt.height);y(lt===we&&$e===ne,"inconsistent width/height for supplied texture"),tt.refCount+=1}else{var vt=Ce.renderbuffer._renderbuffer;y(vt.width===we&&vt.height===ne,"inconsistent width/height for renderbuffer"),vt.refCount+=1}}function pe(Ce,we){we&&(we.texture?f.framebufferTexture2D(bo,Ce,we.target,we.texture._texture.texture,0):f.framebufferRenderbuffer(bo,Ce,fl,we.renderbuffer._renderbuffer.renderbuffer))}function Ee(Ce){var we=ma,ne=null,tt=null,lt=Ce;typeof Ce=="object"&&(lt=Ce.data,"target"in Ce&&(we=Ce.target|0)),y.type(lt,"function","invalid attachment data");var $e=lt._reglType;return $e==="texture2d"?(ne=lt,y(we===ma)):$e==="textureCube"?(ne=lt,y(we>=g0&&we<g0+6,"invalid cube map target")):$e==="renderbuffer"?(tt=lt,we=fl):y.raise("invalid regl object for attachment"),new ge(we,ne,tt)}function D(Ce,we,ne,tt,lt){if(ne){var $e=V.create2D({width:Ce,height:we,format:tt,type:lt});return $e._texture.refCount=0,new ge(ma,$e,null)}else{var vt=te.create({width:Ce,height:we,format:tt});return vt._renderbuffer.refCount=0,new ge(fl,null,vt)}}function K(Ce){return Ce&&(Ce.texture||Ce.renderbuffer)}function ye(Ce,we,ne){Ce&&(Ce.texture?Ce.texture.resize(we,ne):Ce.renderbuffer&&Ce.renderbuffer.resize(we,ne),Ce.width=we,Ce.height=ne)}var Pe=0,ae={};function Ne(){this.id=Pe++,ae[this.id]=this,this.framebuffer=f.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function se(Ce){Ce.colorAttachments.forEach(_e),_e(Ce.depthAttachment),_e(Ce.stencilAttachment),_e(Ce.depthStencilAttachment)}function Te(Ce){var we=Ce.framebuffer;y(we,"must not double destroy framebuffer"),f.deleteFramebuffer(we),Ce.framebuffer=null,B.framebufferCount--,delete ae[Ce.id]}function ie(Ce){var we;f.bindFramebuffer(bo,Ce.framebuffer);var ne=Ce.colorAttachments;for(we=0;we<ne.length;++we)pe(Tu+we,ne[we]);for(we=ne.length;we<k.maxColorAttachments;++we)f.framebufferTexture2D(bo,Tu+we,ma,null,0);f.framebufferTexture2D(bo,ku,ma,null,0),f.framebufferTexture2D(bo,Au,ma,null,0),f.framebufferTexture2D(bo,Su,ma,null,0),pe(Au,Ce.depthAttachment),pe(Su,Ce.stencilAttachment),pe(ku,Ce.depthStencilAttachment);var tt=f.checkFramebufferStatus(bo);!f.isContextLost()&&tt!==Lu&&y.raise("framebuffer configuration not supported, status = "+si[tt]),f.bindFramebuffer(bo,Y.next?Y.next.framebuffer:null),Y.cur=Y.next,f.getError()}function Ae(Ce,we){var ne=new Ne;B.framebufferCount++;function tt($e,vt){var at;y(Y.next!==ne,"can not update framebuffer which is currently in use");var ut=0,Nt=0,_r=!0,Ir=!0,_t=null,kr=!0,Jt="rgba",Er="uint8",Lr=1,zr=null,Dr=null,Wr=null,pr=!1;if(typeof $e=="number")ut=$e|0,Nt=vt|0||ut;else if(!$e)ut=Nt=1;else{y.type($e,"object","invalid arguments for framebuffer");var ft=$e;if("shape"in ft){var Vr=ft.shape;y(Array.isArray(Vr)&&Vr.length>=2,"invalid shape for framebuffer"),ut=Vr[0],Nt=Vr[1]}else"radius"in ft&&(ut=Nt=ft.radius),"width"in ft&&(ut=ft.width),"height"in ft&&(Nt=ft.height);("color"in ft||"colors"in ft)&&(_t=ft.color||ft.colors,Array.isArray(_t)&&y(_t.length===1||w.webgl_draw_buffers,"multiple render targets not supported")),_t||("colorCount"in ft&&(Lr=ft.colorCount|0,y(Lr>0,"invalid color buffer count")),"colorTexture"in ft&&(kr=!!ft.colorTexture,Jt="rgba4"),"colorType"in ft&&(Er=ft.colorType,kr?(y(w.oes_texture_float||!(Er==="float"||Er==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),y(w.oes_texture_half_float||!(Er==="half float"||Er==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Er==="half float"||Er==="float16"?(y(w.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Jt="rgba16f"):(Er==="float"||Er==="float32")&&(y(w.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Jt="rgba32f"),y.oneOf(Er,be,"invalid color type")),"colorFormat"in ft&&(Jt=ft.colorFormat,de.indexOf(Jt)>=0?kr=!0:ve.indexOf(Jt)>=0?kr=!1:kr?y.oneOf(ft.colorFormat,de,"invalid color format for texture"):y.oneOf(ft.colorFormat,ve,"invalid color format for renderbuffer"))),("depthTexture"in ft||"depthStencilTexture"in ft)&&(pr=!!(ft.depthTexture||ft.depthStencilTexture),y(!pr||w.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in ft&&(typeof ft.depth=="boolean"?_r=ft.depth:(zr=ft.depth,Ir=!1)),"stencil"in ft&&(typeof ft.stencil=="boolean"?Ir=ft.stencil:(Dr=ft.stencil,_r=!1)),"depthStencil"in ft&&(typeof ft.depthStencil=="boolean"?_r=Ir=ft.depthStencil:(Wr=ft.depthStencil,_r=!1,Ir=!1))}var Dt=null,Qe=null,yt=null,kt=null;if(Array.isArray(_t))Dt=_t.map(Ee);else if(_t)Dt=[Ee(_t)];else for(Dt=new Array(Lr),at=0;at<Lr;++at)Dt[at]=D(ut,Nt,kr,Jt,Er);y(w.webgl_draw_buffers||Dt.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),y(Dt.length<=k.maxColorAttachments,"too many color attachments, not supported"),ut=ut||Dt[0].width,Nt=Nt||Dt[0].height,zr?Qe=Ee(zr):_r&&!Ir&&(Qe=D(ut,Nt,pr,"depth","uint32")),Dr?yt=Ee(Dr):Ir&&!_r&&(yt=D(ut,Nt,!1,"stencil","uint8")),Wr?kt=Ee(Wr):!zr&&!Dr&&Ir&&_r&&(kt=D(ut,Nt,pr,"depth stencil","depth stencil")),y(!!zr+!!Dr+!!Wr<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var mr=null;for(at=0;at<Dt.length;++at)if(ze(Dt[at],ut,Nt),y(!Dt[at]||Dt[at].texture&&fy.indexOf(Dt[at].texture._texture.format)>=0||Dt[at].renderbuffer&&by.indexOf(Dt[at].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+at+" is invalid"),Dt[at]&&Dt[at].texture){var fo=hl[Dt[at].texture._texture.format]*x0[Dt[at].texture._texture.type];mr===null?mr=fo:y(mr===fo,"all color attachments much have the same number of bits per pixel.")}return ze(Qe,ut,Nt),y(!Qe||Qe.texture&&Qe.texture._texture.format===ly||Qe.renderbuffer&&Qe.renderbuffer._renderbuffer.format===py,"invalid depth attachment for framebuffer object"),ze(yt,ut,Nt),y(!yt||yt.renderbuffer&&yt.renderbuffer._renderbuffer.format===my,"invalid stencil attachment for framebuffer object"),ze(kt,ut,Nt),y(!kt||kt.texture&&kt.texture._texture.format===Ru||kt.renderbuffer&&kt.renderbuffer._renderbuffer.format===Ru,"invalid depth-stencil attachment for framebuffer object"),se(ne),ne.width=ut,ne.height=Nt,ne.colorAttachments=Dt,ne.depthAttachment=Qe,ne.stencilAttachment=yt,ne.depthStencilAttachment=kt,tt.color=Dt.map(K),tt.depth=K(Qe),tt.stencil=K(yt),tt.depthStencil=K(kt),tt.width=ne.width,tt.height=ne.height,ie(ne),tt}function lt($e,vt){y(Y.next!==ne,"can not resize a framebuffer which is currently in use");var at=Math.max($e|0,1),ut=Math.max(vt|0||at,1);if(at===ne.width&&ut===ne.height)return tt;for(var Nt=ne.colorAttachments,_r=0;_r<Nt.length;++_r)ye(Nt[_r],at,ut);return ye(ne.depthAttachment,at,ut),ye(ne.stencilAttachment,at,ut),ye(ne.depthStencilAttachment,at,ut),ne.width=tt.width=at,ne.height=tt.height=ut,ie(ne),tt}return tt(Ce,we),t(tt,{resize:lt,_reglType:"framebuffer",_framebuffer:ne,destroy:function(){Te(ne),se(ne)},use:function($e){Y.setFBO({framebuffer:tt},$e)}})}function Xe(Ce){var we=Array(6);function ne(lt){var $e;y(we.indexOf(Y.next)<0,"can not update framebuffer which is currently in use");var vt={color:null},at=0,ut=null,Nt="rgba",_r="uint8",Ir=1;if(typeof lt=="number")at=lt|0;else if(!lt)at=1;else{y.type(lt,"object","invalid arguments for framebuffer");var _t=lt;if("shape"in _t){var kr=_t.shape;y(Array.isArray(kr)&&kr.length>=2,"invalid shape for framebuffer"),y(kr[0]===kr[1],"cube framebuffer must be square"),at=kr[0]}else"radius"in _t&&(at=_t.radius|0),"width"in _t?(at=_t.width|0,"height"in _t&&y(_t.height===at,"must be square")):"height"in _t&&(at=_t.height|0);("color"in _t||"colors"in _t)&&(ut=_t.color||_t.colors,Array.isArray(ut)&&y(ut.length===1||w.webgl_draw_buffers,"multiple render targets not supported")),ut||("colorCount"in _t&&(Ir=_t.colorCount|0,y(Ir>0,"invalid color buffer count")),"colorType"in _t&&(y.oneOf(_t.colorType,be,"invalid color type"),_r=_t.colorType),"colorFormat"in _t&&(Nt=_t.colorFormat,y.oneOf(_t.colorFormat,de,"invalid color format for texture"))),"depth"in _t&&(vt.depth=_t.depth),"stencil"in _t&&(vt.stencil=_t.stencil),"depthStencil"in _t&&(vt.depthStencil=_t.depthStencil)}var Jt;if(ut)if(Array.isArray(ut))for(Jt=[],$e=0;$e<ut.length;++$e)Jt[$e]=ut[$e];else Jt=[ut];else{Jt=Array(Ir);var Er={radius:at,format:Nt,type:_r};for($e=0;$e<Ir;++$e)Jt[$e]=V.createCube(Er)}for(vt.color=Array(Jt.length),$e=0;$e<Jt.length;++$e){var Lr=Jt[$e];y(typeof Lr=="function"&&Lr._reglType==="textureCube","invalid cube map"),at=at||Lr.width,y(Lr.width===at&&Lr.height===at,"invalid cube map shape"),vt.color[$e]={target:g0,data:Jt[$e]}}for($e=0;$e<6;++$e){for(var zr=0;zr<Jt.length;++zr)vt.color[zr].target=g0+$e;$e>0&&(vt.depth=we[0].depth,vt.stencil=we[0].stencil,vt.depthStencil=we[0].depthStencil),we[$e]?we[$e](vt):we[$e]=Ae(vt)}return t(ne,{width:at,height:at,color:Jt})}function tt(lt){var $e,vt=lt|0;if(y(vt>0&&vt<=k.maxCubeMapSize,"invalid radius for cube fbo"),vt===ne.width)return ne;var at=ne.color;for($e=0;$e<at.length;++$e)at[$e].resize(vt);for($e=0;$e<6;++$e)we[$e].resize(vt);return ne.width=ne.height=vt,ne}return ne(Ce),t(ne,{faces:we,resize:tt,_reglType:"framebufferCube",destroy:function(){we.forEach(function(lt){lt.destroy()})}})}function nt(){Y.cur=null,Y.next=null,Y.dirty=!0,Tn(ae).forEach(function(Ce){Ce.framebuffer=f.createFramebuffer(),ie(Ce)})}return t(Y,{getFramebuffer:function(Ce){if(typeof Ce=="function"&&Ce._reglType==="framebuffer"){var we=Ce._framebuffer;if(we instanceof Ne)return we}return null},create:Ae,createCube:Xe,clear:function(){Tn(ae).forEach(Te)},restore:nt})}var _y=5126,Iu=34962;function ul(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=_y,this.offset=0,this.stride=0,this.divisor=0}function Ey(f,w,k,V,te){for(var B=k.maxAttributes,Y=new Array(B),de=0;de<B;++de)Y[de]=new ul;var ve=0,be={},ge={Record:ul,scope:{},state:Y,currentVAO:null,targetVAO:null,restore:ze()?ae:function(){},createVAO:Ne,getVAO:Ee,destroyBuffer:_e,setVAO:ze()?D:K,clear:ze()?ye:function(){}};function _e(se){for(var Te=0;Te<Y.length;++Te){var ie=Y[Te];ie.buffer===se&&(f.disableVertexAttribArray(Te),ie.buffer=null)}}function ze(){return w.oes_vertex_array_object}function pe(){return w.angle_instanced_arrays}function Ee(se){return typeof se=="function"&&se._vao?se._vao:null}function D(se){if(se!==ge.currentVAO){var Te=ze();se?Te.bindVertexArrayOES(se.vao):Te.bindVertexArrayOES(null),ge.currentVAO=se}}function K(se){if(se!==ge.currentVAO){if(se)se.bindAttrs();else for(var Te=pe(),ie=0;ie<Y.length;++ie){var Ae=Y[ie];Ae.buffer?(f.enableVertexAttribArray(ie),f.vertexAttribPointer(ie,Ae.size,Ae.type,Ae.normalized,Ae.stride,Ae.offfset),Te&&Ae.divisor&&Te.vertexAttribDivisorANGLE(ie,Ae.divisor)):(f.disableVertexAttribArray(ie),f.vertexAttrib4f(ie,Ae.x,Ae.y,Ae.z,Ae.w))}ge.currentVAO=se}}function ye(){Tn(be).forEach(function(se){se.destroy()})}function Pe(){this.id=++ve,this.attributes=[];var se=ze();se?this.vao=se.createVertexArrayOES():this.vao=null,be[this.id]=this,this.buffers=[]}Pe.prototype.bindAttrs=function(){for(var se=pe(),Te=this.attributes,ie=0;ie<Te.length;++ie){var Ae=Te[ie];Ae.buffer?(f.enableVertexAttribArray(ie),f.bindBuffer(Iu,Ae.buffer.buffer),f.vertexAttribPointer(ie,Ae.size,Ae.type,Ae.normalized,Ae.stride,Ae.offset),se&&Ae.divisor&&se.vertexAttribDivisorANGLE(ie,Ae.divisor)):(f.disableVertexAttribArray(ie),f.vertexAttrib4f(ie,Ae.x,Ae.y,Ae.z,Ae.w))}for(var Xe=Te.length;Xe<B;++Xe)f.disableVertexAttribArray(Xe)},Pe.prototype.refresh=function(){var se=ze();se&&(se.bindVertexArrayOES(this.vao),this.bindAttrs(),ge.currentVAO=this)},Pe.prototype.destroy=function(){if(this.vao){var se=ze();this===ge.currentVAO&&(ge.currentVAO=null,se.bindVertexArrayOES(null)),se.deleteVertexArrayOES(this.vao),this.vao=null}be[this.id]&&(delete be[this.id],V.vaoCount-=1)};function ae(){var se=ze();se&&Tn(be).forEach(function(Te){Te.refresh()})}function Ne(se){var Te=new Pe;V.vaoCount+=1;function ie(Ae){y(Array.isArray(Ae),"arguments to vertex array constructor must be an array"),y(Ae.length<B,"too many attributes"),y(Ae.length>0,"must specify at least one attribute");var Xe={},nt=Te.attributes;nt.length=Ae.length;for(var Ce=0;Ce<Ae.length;++Ce){var we=Ae[Ce],ne=nt[Ce]=new ul,tt=we.data||we;if(Array.isArray(tt)||e(tt)||Xn(tt)){var lt;Te.buffers[Ce]&&(lt=Te.buffers[Ce],e(tt)&&lt._buffer.byteLength>=tt.byteLength?lt.subdata(tt):(lt.destroy(),Te.buffers[Ce]=null)),Te.buffers[Ce]||(lt=Te.buffers[Ce]=te.create(we,Iu,!1,!0)),ne.buffer=te.getBuffer(lt),ne.size=ne.buffer.dimension|0,ne.normalized=!1,ne.type=ne.buffer.dtype,ne.offset=0,ne.stride=0,ne.divisor=0,ne.state=1,Xe[Ce]=1}else te.getBuffer(we)?(ne.buffer=te.getBuffer(we),ne.size=ne.buffer.dimension|0,ne.normalized=!1,ne.type=ne.buffer.dtype,ne.offset=0,ne.stride=0,ne.divisor=0,ne.state=1):te.getBuffer(we.buffer)?(ne.buffer=te.getBuffer(we.buffer),ne.size=(+we.size||ne.buffer.dimension)|0,ne.normalized=!!we.normalized||!1,"type"in we?(y.parameter(we.type,ha,"invalid buffer type"),ne.type=ha[we.type]):ne.type=ne.buffer.dtype,ne.offset=(we.offset||0)|0,ne.stride=(we.stride||0)|0,ne.divisor=(we.divisor||0)|0,ne.state=1,y(ne.size>=1&&ne.size<=4,"size must be between 1 and 4"),y(ne.offset>=0,"invalid offset"),y(ne.stride>=0&&ne.stride<=255,"stride must be between 0 and 255"),y(ne.divisor>=0,"divisor must be positive"),y(!ne.divisor||!!w.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in we?(y(Ce>0,"first attribute must not be a constant"),ne.x=+we.x||0,ne.y=+we.y||0,ne.z=+we.z||0,ne.w=+we.w||0,ne.state=2):y(!1,"invalid attribute spec for location "+Ce)}for(var $e=0;$e<Te.buffers.length;++$e)!Xe[$e]&&Te.buffers[$e]&&(Te.buffers[$e].destroy(),Te.buffers[$e]=null);return Te.refresh(),ie}return ie.destroy=function(){for(var Ae=0;Ae<Te.buffers.length;++Ae)Te.buffers[Ae]&&Te.buffers[Ae].destroy();Te.buffers.length=0,Te.destroy()},ie._vao=Te,ie._reglType="vao",ie(se)}return ge}var Pu=35632,My=35633,Ty=35718,Ay=35721;function Sy(f,w,k,V){var te={},B={};function Y(D,K,ye,Pe){this.name=D,this.id=K,this.location=ye,this.info=Pe}function de(D,K){for(var ye=0;ye<D.length;++ye)if(D[ye].id===K.id){D[ye].location=K.location;return}D.push(K)}function ve(D,K,ye){var Pe=D===Pu?te:B,ae=Pe[K];if(!ae){var Ne=w.str(K);ae=f.createShader(D),f.shaderSource(ae,Ne),f.compileShader(ae),y.shaderError(f,ae,Ne,D,ye),Pe[K]=ae}return ae}var be={},ge=[],_e=0;function ze(D,K){this.id=_e++,this.fragId=D,this.vertId=K,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,V.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function pe(D,K,ye){var Pe,ae,Ne=ve(Pu,D.fragId),se=ve(My,D.vertId),Te=D.program=f.createProgram();if(f.attachShader(Te,Ne),f.attachShader(Te,se),ye)for(Pe=0;Pe<ye.length;++Pe){var ie=ye[Pe];f.bindAttribLocation(Te,ie[0],ie[1])}f.linkProgram(Te),y.linkError(f,Te,w.str(D.fragId),w.str(D.vertId),K);var Ae=f.getProgramParameter(Te,Ty);V.profile&&(D.stats.uniformsCount=Ae);var Xe=D.uniforms;for(Pe=0;Pe<Ae;++Pe)if(ae=f.getActiveUniform(Te,Pe),ae)if(ae.size>1)for(var nt=0;nt<ae.size;++nt){var Ce=ae.name.replace("[0]","["+nt+"]");de(Xe,new Y(Ce,w.id(Ce),f.getUniformLocation(Te,Ce),ae))}else de(Xe,new Y(ae.name,w.id(ae.name),f.getUniformLocation(Te,ae.name),ae));var we=f.getProgramParameter(Te,Ay);V.profile&&(D.stats.attributesCount=we);var ne=D.attributes;for(Pe=0;Pe<we;++Pe)ae=f.getActiveAttrib(Te,Pe),ae&&de(ne,new Y(ae.name,w.id(ae.name),f.getAttribLocation(Te,ae.name),ae))}V.profile&&(k.getMaxUniformsCount=function(){var D=0;return ge.forEach(function(K){K.stats.uniformsCount>D&&(D=K.stats.uniformsCount)}),D},k.getMaxAttributesCount=function(){var D=0;return ge.forEach(function(K){K.stats.attributesCount>D&&(D=K.stats.attributesCount)}),D});function Ee(){te={},B={};for(var D=0;D<ge.length;++D)pe(ge[D],null,ge[D].attributes.map(function(K){return[K.location,K.name]}))}return{clear:function(){var D=f.deleteShader.bind(f);Tn(te).forEach(D),te={},Tn(B).forEach(D),B={},ge.forEach(function(K){f.deleteProgram(K.program)}),ge.length=0,be={},k.shaderCount=0},program:function(D,K,ye,Pe){y.command(D>=0,"missing vertex shader",ye),y.command(K>=0,"missing fragment shader",ye);var ae=be[K];ae||(ae=be[K]={});var Ne=ae[D];if(Ne&&(Ne.refCount++,!Pe))return Ne;var se=new ze(K,D);return k.shaderCount++,pe(se,ye,Pe),Ne||(ae[D]=se),ge.push(se),t(se,{destroy:function(){if(se.refCount--,se.refCount<=0){f.deleteProgram(se.program);var Te=ge.indexOf(se);ge.splice(Te,1),k.shaderCount--}ae[se.vertId].refCount<=0&&(f.deleteShader(B[se.vertId]),delete B[se.vertId],delete be[se.fragId][se.vertId]),Object.keys(be[se.fragId]).length||(f.deleteShader(te[se.fragId]),delete te[se.fragId],delete be[se.fragId])}})},restore:Ee,shader:ve,frag:-1,vert:-1}}var ky=6408,as=5121,Ly=3333,y0=5126;function zy(f,w,k,V,te,B,Y){function de(ge){var _e;w.next===null?(y(te.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),_e=as):(y(w.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),_e=w.next.colorAttachments[0].texture._texture.type,B.oes_texture_float?(y(_e===as||_e===y0,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),_e===y0&&y(Y.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):y(_e===as,"Reading from a framebuffer is only allowed for the type 'uint8'"));var ze=0,pe=0,Ee=V.framebufferWidth,D=V.framebufferHeight,K=null;e(ge)?K=ge:ge&&(y.type(ge,"object","invalid arguments to regl.read()"),ze=ge.x|0,pe=ge.y|0,y(ze>=0&&ze<V.framebufferWidth,"invalid x offset for regl.read"),y(pe>=0&&pe<V.framebufferHeight,"invalid y offset for regl.read"),Ee=(ge.width||V.framebufferWidth-ze)|0,D=(ge.height||V.framebufferHeight-pe)|0,K=ge.data||null),K&&(_e===as?y(K instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):_e===y0&&y(K instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),y(Ee>0&&Ee+ze<=V.framebufferWidth,"invalid width for read pixels"),y(D>0&&D+pe<=V.framebufferHeight,"invalid height for read pixels"),k();var ye=Ee*D*4;return K||(_e===as?K=new Uint8Array(ye):_e===y0&&(K=K||new Float32Array(ye))),y.isTypedArray(K,"data buffer for regl.read() must be a typedarray"),y(K.byteLength>=ye,"data buffer for regl.read() too small"),f.pixelStorei(Ly,4),f.readPixels(ze,pe,Ee,D,ky,_e,K),K}function ve(ge){var _e;return w.setFBO({framebuffer:ge.framebuffer},function(){_e=de(ge)}),_e}function be(ge){return!ge||!("framebuffer"in ge)?de(ge):ve(ge)}return be}function ci(f){return Array.prototype.slice.call(f)}function li(f){return ci(f).join("")}function Cy(){var f=0,w=[],k=[];function V(_e){for(var ze=0;ze<k.length;++ze)if(k[ze]===_e)return w[ze];var pe="g"+f++;return w.push(pe),k.push(_e),pe}function te(){var _e=[];function ze(){_e.push.apply(_e,ci(arguments))}var pe=[];function Ee(){var D="v"+f++;return pe.push(D),arguments.length>0&&(_e.push(D,"="),_e.push.apply(_e,ci(arguments)),_e.push(";")),D}return t(ze,{def:Ee,toString:function(){return li([pe.length>0?"var "+pe.join(",")+";":"",li(_e)])}})}function B(){var _e=te(),ze=te(),pe=_e.toString,Ee=ze.toString;function D(K,ye){ze(K,ye,"=",_e.def(K,ye),";")}return t(function(){_e.apply(_e,ci(arguments))},{def:_e.def,entry:_e,exit:ze,save:D,set:function(K,ye,Pe){D(K,ye),_e(K,ye,"=",Pe,";")},toString:function(){return pe()+Ee()}})}function Y(){var _e=li(arguments),ze=B(),pe=B(),Ee=ze.toString,D=pe.toString;return t(ze,{then:function(){return ze.apply(ze,ci(arguments)),this},else:function(){return pe.apply(pe,ci(arguments)),this},toString:function(){var K=D();return K&&(K="else{"+K+"}"),li(["if(",_e,"){",Ee(),"}",K])}})}var de=te(),ve={};function be(_e,ze){var pe=[];function Ee(){var ae="a"+pe.length;return pe.push(ae),ae}ze=ze||0;for(var D=0;D<ze;++D)Ee();var K=B(),ye=K.toString,Pe=ve[_e]=t(K,{arg:Ee,toString:function(){return li(["function(",pe.join(),"){",ye(),"}"])}});return Pe}function ge(){var _e=['"use strict";',de,"return {"];Object.keys(ve).forEach(function(Ee){_e.push('"',Ee,'":',ve[Ee].toString(),",")}),_e.push("}");var ze=li(_e).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),pe=Function.apply(null,w.concat(ze));return pe.apply(null,k)}return{global:de,link:V,block:te,proc:be,scope:B,cond:Y,compile:ge}}var fi="xyzw".split(""),Nu=5121,hi=1,dl=2,pl=0,ml=1,vl=2,gl=3,b0=4,Ou=5,Gu=6,Fu="dither",Du="blend.enable",$u="blend.color",xl="blend.equation",yl="blend.func",qu="depth.enable",Hu="depth.func",Uu="depth.range",Bu="depth.mask",bl="colorMask",ju="cull.enable",Wu="cull.face",wl="frontFace",_l="lineWidth",Vu="polygonOffset.enable",El="polygonOffset.offset",Xu="sample.alpha",Yu="sample.enable",Ml="sample.coverage",Ku="stencil.enable",Qu="stencil.mask",Tl="stencil.func",Al="stencil.opFront",is="stencil.opBack",Zu="scissor.enable",w0="scissor.box",wo="viewport",ss="profile",va="framebuffer",cs="vert",ls="frag",ga="elements",xa="primitive",ya="count",_0="offset",E0="instances",fs="vao",Sl="Width",kl="Height",ui=va+Sl,di=va+kl,Ry=wo+Sl,Iy=wo+kl,Ju="drawingBuffer",ed=Ju+Sl,td=Ju+kl,Py=[yl,xl,Tl,Al,is,Ml,wo,w0,El],pi=34962,Ny=34963,Oy=35632,Gy=35633,rd=3553,Fy=34067,Dy=2884,$y=3042,qy=3024,Hy=2960,Uy=2929,By=3089,jy=32823,Wy=32926,Vy=32928,Ll=5126,M0=35664,T0=35665,A0=35666,zl=5124,S0=35667,k0=35668,L0=35669,Cl=35670,z0=35671,C0=35672,R0=35673,hs=35674,us=35675,ds=35676,ps=35678,ms=35680,nd=4,vs=1028,ba=1029,od=2304,Rl=2305,Xy=32775,Yy=32776,Ky=519,Go=7680,ad=0,id=1,sd=32774,Qy=513,cd=36160,Zy=36064,lo={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},ld=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],mi={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Fo={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},fd={frag:Oy,vert:Gy},Il={cw:od,ccw:Rl};function I0(f){return Array.isArray(f)||e(f)||Xn(f)}function hd(f){return f.sort(function(w,k){return w===wo?-1:k===wo?1:w<k?-1:1})}function on(f,w,k,V){this.thisDep=f,this.contextDep=w,this.propDep=k,this.append=V}function Do(f){return f&&!(f.thisDep||f.contextDep||f.propDep)}function wr(f){return new on(!1,!1,!1,f)}function xn(f,w){var k=f.type;if(k===pl){var V=f.data.length;return new on(!0,V>=1,V>=2,w)}else if(k===b0){var te=f.data;return new on(te.thisDep,te.contextDep,te.propDep,w)}else{if(k===Ou)return new on(!1,!1,!1,w);if(k===Gu){for(var B=!1,Y=!1,de=!1,ve=0;ve<f.data.length;++ve){var be=f.data[ve];if(be.type===ml)de=!0;else if(be.type===vl)Y=!0;else if(be.type===gl)B=!0;else if(be.type===pl){B=!0;var ge=be.data;ge>=1&&(Y=!0),ge>=2&&(de=!0)}else be.type===b0&&(B=B||be.data.thisDep,Y=Y||be.data.contextDep,de=de||be.data.propDep)}return new on(B,Y,de,w)}else return new on(k===gl,k===vl,k===ml,w)}}var ud=new on(!1,!1,!1,function(){});function Jy(f,w,k,V,te,B,Y,de,ve,be,ge,_e,ze,pe,Ee){var D=be.Record,K={add:32774,subtract:32778,"reverse subtract":32779};k.ext_blend_minmax&&(K.min=Xy,K.max=Yy);var ye=k.angle_instanced_arrays,Pe=k.webgl_draw_buffers,ae={dirty:!0,profile:Ee.profile},Ne={},se=[],Te={},ie={};function Ae(M){return M.replace(".","_")}function Xe(M,b,C){var F=Ae(M);se.push(M),Ne[F]=ae[F]=!!C,Te[F]=b}function nt(M,b,C){var F=Ae(M);se.push(M),Array.isArray(C)?(ae[F]=C.slice(),Ne[F]=C.slice()):ae[F]=Ne[F]=C,ie[F]=b}Xe(Fu,qy),Xe(Du,$y),nt($u,"blendColor",[0,0,0,0]),nt(xl,"blendEquationSeparate",[sd,sd]),nt(yl,"blendFuncSeparate",[id,ad,id,ad]),Xe(qu,Uy,!0),nt(Hu,"depthFunc",Qy),nt(Uu,"depthRange",[0,1]),nt(Bu,"depthMask",!0),nt(bl,bl,[!0,!0,!0,!0]),Xe(ju,Dy),nt(Wu,"cullFace",ba),nt(wl,wl,Rl),nt(_l,_l,1),Xe(Vu,jy),nt(El,"polygonOffset",[0,0]),Xe(Xu,Wy),Xe(Yu,Vy),nt(Ml,"sampleCoverage",[1,!1]),Xe(Ku,Hy),nt(Qu,"stencilMask",-1),nt(Tl,"stencilFunc",[Ky,0,-1]),nt(Al,"stencilOpSeparate",[vs,Go,Go,Go]),nt(is,"stencilOpSeparate",[ba,Go,Go,Go]),Xe(Zu,By),nt(w0,"scissor",[0,0,f.drawingBufferWidth,f.drawingBufferHeight]),nt(wo,wo,[0,0,f.drawingBufferWidth,f.drawingBufferHeight]);var Ce={gl:f,context:ze,strings:w,next:Ne,current:ae,draw:_e,elements:B,buffer:te,shader:ge,attributes:be.state,vao:be,uniforms:ve,framebuffer:de,extensions:k,timer:pe,isBufferArgs:I0},we={primTypes:ei,compareFuncs:mi,blendFuncs:lo,blendEquations:K,stencilOps:Fo,glTypes:ha,orientationType:Il};y.optional(function(){Ce.isArrayLike=dr}),Pe&&(we.backBuffer=[ba],we.drawBuffer=en(V.maxDrawbuffers,function(M){return M===0?[0]:en(M,function(b){return Zy+b})}));var ne=0;function tt(){var M=Cy(),b=M.link,C=M.global;M.id=ne++,M.batchId="0";var F=b(Ce),$=M.shared={props:"a0"};Object.keys(Ce).forEach(function(L){$[L]=C.def(F,".",L)}),y.optional(function(){M.CHECK=b(y),M.commandStr=y.guessCommand(),M.command=b(M.commandStr),M.assert=function(L,E,G){L("if(!(",E,"))",this.CHECK,".commandRaise(",b(G),",",this.command,");")},we.invalidBlendCombinations=ld});var P=M.next={},R=M.current={};Object.keys(ie).forEach(function(L){Array.isArray(ae[L])&&(P[L]=C.def($.next,".",L),R[L]=C.def($.current,".",L))});var O=M.constants={};Object.keys(we).forEach(function(L){O[L]=C.def(JSON.stringify(we[L]))}),M.invoke=function(L,E){switch(E.type){case pl:var G=["this",$.context,$.props,M.batchId];return L.def(b(E.data),".call(",G.slice(0,Math.max(E.data.length+1,4)),")");case ml:return L.def($.props,E.data);case vl:return L.def($.context,E.data);case gl:return L.def("this",E.data);case b0:return E.data.append(M,L),E.data.ref;case Ou:return E.data.toString();case Gu:return E.data.map(function(H){return M.invoke(L,H)})}},M.attribCache={};var T={};return M.scopeAttrib=function(L){var E=w.id(L);if(E in T)return T[E];var G=be.scope[E];G||(G=be.scope[E]=new D);var H=T[E]=b(G);return H},M}function lt(M){var b=M.static,C=M.dynamic,F;if(ss in b){var $=!!b[ss];F=wr(function(R,O){return $}),F.enable=$}else if(ss in C){var P=C[ss];F=xn(P,function(R,O){return R.invoke(O,P)})}return F}function $e(M,b){var C=M.static,F=M.dynamic;if(va in C){var $=C[va];return $?($=de.getFramebuffer($),y.command($,"invalid framebuffer object"),wr(function(R,O){var T=R.link($),L=R.shared;O.set(L.framebuffer,".next",T);var E=L.context;return O.set(E,"."+ui,T+".width"),O.set(E,"."+di,T+".height"),T})):wr(function(R,O){var T=R.shared;O.set(T.framebuffer,".next","null");var L=T.context;return O.set(L,"."+ui,L+"."+ed),O.set(L,"."+di,L+"."+td),"null"})}else if(va in F){var P=F[va];return xn(P,function(R,O){var T=R.invoke(O,P),L=R.shared,E=L.framebuffer,G=O.def(E,".getFramebuffer(",T,")");y.optional(function(){R.assert(O,"!"+T+"||"+G,"invalid framebuffer object")}),O.set(E,".next",G);var H=L.context;return O.set(H,"."+ui,G+"?"+G+".width:"+H+"."+ed),O.set(H,"."+di,G+"?"+G+".height:"+H+"."+td),G})}else return null}function vt(M,b,C){var F=M.static,$=M.dynamic;function P(T){if(T in F){var L=F[T];y.commandType(L,"object","invalid "+T,C.commandStr);var E=!0,G=L.x|0,H=L.y|0,ee,re;return"width"in L?(ee=L.width|0,y.command(ee>=0,"invalid "+T,C.commandStr)):E=!1,"height"in L?(re=L.height|0,y.command(re>=0,"invalid "+T,C.commandStr)):E=!1,new on(!E&&b&&b.thisDep,!E&&b&&b.contextDep,!E&&b&&b.propDep,function(We,ht){var qe=We.shared.context,Ze=ee;"width"in L||(Ze=ht.def(qe,".",ui,"-",G));var st=re;return"height"in L||(st=ht.def(qe,".",di,"-",H)),[G,H,Ze,st]})}else if(T in $){var Q=$[T],xe=xn(Q,function(We,ht){var qe=We.invoke(ht,Q);y.optional(function(){We.assert(ht,qe+"&&typeof "+qe+'==="object"',"invalid "+T)});var Ze=We.shared.context,st=ht.def(qe,".x|0"),Ot=ht.def(qe,".y|0"),hr=ht.def('"width" in ',qe,"?",qe,".width|0:","(",Ze,".",ui,"-",st,")"),an=ht.def('"height" in ',qe,"?",qe,".height|0:","(",Ze,".",di,"-",Ot,")");return y.optional(function(){We.assert(ht,hr+">=0&&"+an+">=0","invalid "+T)}),[st,Ot,hr,an]});return b&&(xe.thisDep=xe.thisDep||b.thisDep,xe.contextDep=xe.contextDep||b.contextDep,xe.propDep=xe.propDep||b.propDep),xe}else return b?new on(b.thisDep,b.contextDep,b.propDep,function(We,ht){var qe=We.shared.context;return[0,0,ht.def(qe,".",ui),ht.def(qe,".",di)]}):null}var R=P(wo);if(R){var O=R;R=new on(R.thisDep,R.contextDep,R.propDep,function(T,L){var E=O.append(T,L),G=T.shared.context;return L.set(G,"."+Ry,E[2]),L.set(G,"."+Iy,E[3]),E})}return{viewport:R,scissor_box:P(w0)}}function at(M,b){var C=M.static,F=typeof C[ls]=="string"&&typeof C[cs]=="string";if(F){if(Object.keys(b.dynamic).length>0)return null;var $=b.static,P=Object.keys($);if(P.length>0&&typeof $[P[0]]=="number"){for(var R=[],O=0;O<P.length;++O)y(typeof $[P[O]]=="number","must specify all vertex attribute locations when using vaos"),R.push([$[P[O]]|0,P[O]]);return R}}return null}function ut(M,b,C){var F=M.static,$=M.dynamic;function P(E){if(E in F){var G=w.id(F[E]);y.optional(function(){ge.shader(fd[E],G,y.guessCommand())});var H=wr(function(){return G});return H.id=G,H}else if(E in $){var ee=$[E];return xn(ee,function(re,Q){var xe=re.invoke(Q,ee),We=Q.def(re.shared.strings,".id(",xe,")");return y.optional(function(){Q(re.shared.shader,".shader(",fd[E],",",We,",",re.command,");")}),We})}return null}var R=P(ls),O=P(cs),T=null,L;return Do(R)&&Do(O)?(T=ge.program(O.id,R.id,null,C),L=wr(function(E,G){return E.link(T)})):L=new on(R&&R.thisDep||O&&O.thisDep,R&&R.contextDep||O&&O.contextDep,R&&R.propDep||O&&O.propDep,function(E,G){var H=E.shared.shader,ee;R?ee=R.append(E,G):ee=G.def(H,".",ls);var re;O?re=O.append(E,G):re=G.def(H,".",cs);var Q=H+".program("+re+","+ee;return y.optional(function(){Q+=","+E.command}),G.def(Q+")")}),{frag:R,vert:O,progVar:L,program:T}}function Nt(M,b){var C=M.static,F=M.dynamic;function $(){if(ga in C){var E=C[ga];I0(E)?E=B.getElements(B.create(E,!0)):E&&(E=B.getElements(E),y.command(E,"invalid elements",b.commandStr));var G=wr(function(ee,re){if(E){var Q=ee.link(E);return ee.ELEMENTS=Q,Q}return ee.ELEMENTS=null,null});return G.value=E,G}else if(ga in F){var H=F[ga];return xn(H,function(ee,re){var Q=ee.shared,xe=Q.isBufferArgs,We=Q.elements,ht=ee.invoke(re,H),qe=re.def("null"),Ze=re.def(xe,"(",ht,")"),st=ee.cond(Ze).then(qe,"=",We,".createStream(",ht,");").else(qe,"=",We,".getElements(",ht,");");return y.optional(function(){ee.assert(st.else,"!"+ht+"||"+qe,"invalid elements")}),re.entry(st),re.exit(ee.cond(Ze).then(We,".destroyStream(",qe,");")),ee.ELEMENTS=qe,qe})}return null}var P=$();function R(){if(xa in C){var E=C[xa];return y.commandParameter(E,ei,"invalid primitve",b.commandStr),wr(function(H,ee){return ei[E]})}else if(xa in F){var G=F[xa];return xn(G,function(H,ee){var re=H.constants.primTypes,Q=H.invoke(ee,G);return y.optional(function(){H.assert(ee,Q+" in "+re,"invalid primitive, must be one of "+Object.keys(ei))}),ee.def(re,"[",Q,"]")})}else if(P)return Do(P)?P.value?wr(function(H,ee){return ee.def(H.ELEMENTS,".primType")}):wr(function(){return nd}):new on(P.thisDep,P.contextDep,P.propDep,function(H,ee){var re=H.ELEMENTS;return ee.def(re,"?",re,".primType:",nd)});return null}function O(E,G){if(E in C){var H=C[E]|0;return y.command(!G||H>=0,"invalid "+E,b.commandStr),wr(function(re,Q){return G&&(re.OFFSET=H),H})}else if(E in F){var ee=F[E];return xn(ee,function(re,Q){var xe=re.invoke(Q,ee);return G&&(re.OFFSET=xe,y.optional(function(){re.assert(Q,xe+">=0","invalid "+E)})),xe})}else if(G&&P)return wr(function(re,Q){return re.OFFSET="0",0});return null}var T=O(_0,!0);function L(){if(ya in C){var E=C[ya]|0;return y.command(typeof E=="number"&&E>=0,"invalid vertex count",b.commandStr),wr(function(){return E})}else if(ya in F){var G=F[ya];return xn(G,function(re,Q){var xe=re.invoke(Q,G);return y.optional(function(){re.assert(Q,"typeof "+xe+'==="number"&&'+xe+">=0&&"+xe+"===("+xe+"|0)","invalid vertex count")}),xe})}else if(P)if(Do(P)){if(P)return T?new on(T.thisDep,T.contextDep,T.propDep,function(re,Q){var xe=Q.def(re.ELEMENTS,".vertCount-",re.OFFSET);return y.optional(function(){re.assert(Q,xe+">=0","invalid vertex offset/element buffer too small")}),xe}):wr(function(re,Q){return Q.def(re.ELEMENTS,".vertCount")});var H=wr(function(){return-1});return y.optional(function(){H.MISSING=!0}),H}else{var ee=new on(P.thisDep||T.thisDep,P.contextDep||T.contextDep,P.propDep||T.propDep,function(re,Q){var xe=re.ELEMENTS;return re.OFFSET?Q.def(xe,"?",xe,".vertCount-",re.OFFSET,":-1"):Q.def(xe,"?",xe,".vertCount:-1")});return y.optional(function(){ee.DYNAMIC=!0}),ee}return null}return{elements:P,primitive:R(),count:L(),instances:O(E0,!1),offset:T}}function _r(M,b){var C=M.static,F=M.dynamic,$={};return se.forEach(function(P){var R=Ae(P);function O(T,L){if(P in C){var E=T(C[P]);$[R]=wr(function(){return E})}else if(P in F){var G=F[P];$[R]=xn(G,function(H,ee){return L(H,ee,H.invoke(ee,G))})}}switch(P){case ju:case Du:case Fu:case Ku:case qu:case Zu:case Vu:case Xu:case Yu:case Bu:return O(function(T){return y.commandType(T,"boolean",P,b.commandStr),T},function(T,L,E){return y.optional(function(){T.assert(L,"typeof "+E+'==="boolean"',"invalid flag "+P,T.commandStr)}),E});case Hu:return O(function(T){return y.commandParameter(T,mi,"invalid "+P,b.commandStr),mi[T]},function(T,L,E){var G=T.constants.compareFuncs;return y.optional(function(){T.assert(L,E+" in "+G,"invalid "+P+", must be one of "+Object.keys(mi))}),L.def(G,"[",E,"]")});case Uu:return O(function(T){return y.command(dr(T)&&T.length===2&&typeof T[0]=="number"&&typeof T[1]=="number"&&T[0]<=T[1],"depth range is 2d array",b.commandStr),T},function(T,L,E){y.optional(function(){T.assert(L,T.shared.isArrayLike+"("+E+")&&"+E+".length===2&&typeof "+E+'[0]==="number"&&typeof '+E+'[1]==="number"&&'+E+"[0]<="+E+"[1]","depth range must be a 2d array")});var G=L.def("+",E,"[0]"),H=L.def("+",E,"[1]");return[G,H]});case yl:return O(function(T){y.commandType(T,"object","blend.func",b.commandStr);var L="srcRGB"in T?T.srcRGB:T.src,E="srcAlpha"in T?T.srcAlpha:T.src,G="dstRGB"in T?T.dstRGB:T.dst,H="dstAlpha"in T?T.dstAlpha:T.dst;return y.commandParameter(L,lo,R+".srcRGB",b.commandStr),y.commandParameter(E,lo,R+".srcAlpha",b.commandStr),y.commandParameter(G,lo,R+".dstRGB",b.commandStr),y.commandParameter(H,lo,R+".dstAlpha",b.commandStr),y.command(ld.indexOf(L+", "+G)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+L+", "+G+")",b.commandStr),[lo[L],lo[G],lo[E],lo[H]]},function(T,L,E){var G=T.constants.blendFuncs;y.optional(function(){T.assert(L,E+"&&typeof "+E+'==="object"',"invalid blend func, must be an object")});function H(qe,Ze){var st=L.def('"',qe,Ze,'" in ',E,"?",E,".",qe,Ze,":",E,".",qe);return y.optional(function(){T.assert(L,st+" in "+G,"invalid "+P+"."+qe+Ze+", must be one of "+Object.keys(lo))}),st}var ee=H("src","RGB"),re=H("dst","RGB");y.optional(function(){var qe=T.constants.invalidBlendCombinations;T.assert(L,qe+".indexOf("+ee+'+", "+'+re+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var Q=L.def(G,"[",ee,"]"),xe=L.def(G,"[",H("src","Alpha"),"]"),We=L.def(G,"[",re,"]"),ht=L.def(G,"[",H("dst","Alpha"),"]");return[Q,We,xe,ht]});case xl:return O(function(T){if(typeof T=="string")return y.commandParameter(T,K,"invalid "+P,b.commandStr),[K[T],K[T]];if(typeof T=="object")return y.commandParameter(T.rgb,K,P+".rgb",b.commandStr),y.commandParameter(T.alpha,K,P+".alpha",b.commandStr),[K[T.rgb],K[T.alpha]];y.commandRaise("invalid blend.equation",b.commandStr)},function(T,L,E){var G=T.constants.blendEquations,H=L.def(),ee=L.def(),re=T.cond("typeof ",E,'==="string"');return y.optional(function(){function Q(xe,We,ht){T.assert(xe,ht+" in "+G,"invalid "+We+", must be one of "+Object.keys(K))}Q(re.then,P,E),T.assert(re.else,E+"&&typeof "+E+'==="object"',"invalid "+P),Q(re.else,P+".rgb",E+".rgb"),Q(re.else,P+".alpha",E+".alpha")}),re.then(H,"=",ee,"=",G,"[",E,"];"),re.else(H,"=",G,"[",E,".rgb];",ee,"=",G,"[",E,".alpha];"),L(re),[H,ee]});case $u:return O(function(T){return y.command(dr(T)&&T.length===4,"blend.color must be a 4d array",b.commandStr),en(4,function(L){return+T[L]})},function(T,L,E){return y.optional(function(){T.assert(L,T.shared.isArrayLike+"("+E+")&&"+E+".length===4","blend.color must be a 4d array")}),en(4,function(G){return L.def("+",E,"[",G,"]")})});case Qu:return O(function(T){return y.commandType(T,"number",R,b.commandStr),T|0},function(T,L,E){return y.optional(function(){T.assert(L,"typeof "+E+'==="number"',"invalid stencil.mask")}),L.def(E,"|0")});case Tl:return O(function(T){y.commandType(T,"object",R,b.commandStr);var L=T.cmp||"keep",E=T.ref||0,G="mask"in T?T.mask:-1;return y.commandParameter(L,mi,P+".cmp",b.commandStr),y.commandType(E,"number",P+".ref",b.commandStr),y.commandType(G,"number",P+".mask",b.commandStr),[mi[L],E,G]},function(T,L,E){var G=T.constants.compareFuncs;y.optional(function(){function Q(){T.assert(L,Array.prototype.join.call(arguments,""),"invalid stencil.func")}Q(E+"&&typeof ",E,'==="object"'),Q('!("cmp" in ',E,")||(",E,".cmp in ",G,")")});var H=L.def('"cmp" in ',E,"?",G,"[",E,".cmp]",":",Go),ee=L.def(E,".ref|0"),re=L.def('"mask" in ',E,"?",E,".mask|0:-1");return[H,ee,re]});case Al:case is:return O(function(T){y.commandType(T,"object",R,b.commandStr);var L=T.fail||"keep",E=T.zfail||"keep",G=T.zpass||"keep";return y.commandParameter(L,Fo,P+".fail",b.commandStr),y.commandParameter(E,Fo,P+".zfail",b.commandStr),y.commandParameter(G,Fo,P+".zpass",b.commandStr),[P===is?ba:vs,Fo[L],Fo[E],Fo[G]]},function(T,L,E){var G=T.constants.stencilOps;y.optional(function(){T.assert(L,E+"&&typeof "+E+'==="object"',"invalid "+P)});function H(ee){return y.optional(function(){T.assert(L,'!("'+ee+'" in '+E+")||("+E+"."+ee+" in "+G+")","invalid "+P+"."+ee+", must be one of "+Object.keys(Fo))}),L.def('"',ee,'" in ',E,"?",G,"[",E,".",ee,"]:",Go)}return[P===is?ba:vs,H("fail"),H("zfail"),H("zpass")]});case El:return O(function(T){y.commandType(T,"object",R,b.commandStr);var L=T.factor|0,E=T.units|0;return y.commandType(L,"number",R+".factor",b.commandStr),y.commandType(E,"number",R+".units",b.commandStr),[L,E]},function(T,L,E){y.optional(function(){T.assert(L,E+"&&typeof "+E+'==="object"',"invalid "+P)});var G=L.def(E,".factor|0"),H=L.def(E,".units|0");return[G,H]});case Wu:return O(function(T){var L=0;return T==="front"?L=vs:T==="back"&&(L=ba),y.command(!!L,R,b.commandStr),L},function(T,L,E){return y.optional(function(){T.assert(L,E+'==="front"||'+E+'==="back"',"invalid cull.face")}),L.def(E,'==="front"?',vs,":",ba)});case _l:return O(function(T){return y.command(typeof T=="number"&&T>=V.lineWidthDims[0]&&T<=V.lineWidthDims[1],"invalid line width, must be a positive number between "+V.lineWidthDims[0]+" and "+V.lineWidthDims[1],b.commandStr),T},function(T,L,E){return y.optional(function(){T.assert(L,"typeof "+E+'==="number"&&'+E+">="+V.lineWidthDims[0]+"&&"+E+"<="+V.lineWidthDims[1],"invalid line width")}),E});case wl:return O(function(T){return y.commandParameter(T,Il,R,b.commandStr),Il[T]},function(T,L,E){return y.optional(function(){T.assert(L,E+'==="cw"||'+E+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),L.def(E+'==="cw"?'+od+":"+Rl)});case bl:return O(function(T){return y.command(dr(T)&&T.length===4,"color.mask must be length 4 array",b.commandStr),T.map(function(L){return!!L})},function(T,L,E){return y.optional(function(){T.assert(L,T.shared.isArrayLike+"("+E+")&&"+E+".length===4","invalid color.mask")}),en(4,function(G){return"!!"+E+"["+G+"]"})});case Ml:return O(function(T){y.command(typeof T=="object"&&T,R,b.commandStr);var L="value"in T?T.value:1,E=!!T.invert;return y.command(typeof L=="number"&&L>=0&&L<=1,"sample.coverage.value must be a number between 0 and 1",b.commandStr),[L,E]},function(T,L,E){y.optional(function(){T.assert(L,E+"&&typeof "+E+'==="object"',"invalid sample.coverage")});var G=L.def('"value" in ',E,"?+",E,".value:1"),H=L.def("!!",E,".invert");return[G,H]})}}),$}function Ir(M,b){var C=M.static,F=M.dynamic,$={};return Object.keys(C).forEach(function(P){var R=C[P],O;if(typeof R=="number"||typeof R=="boolean")O=wr(function(){return R});else if(typeof R=="function"){var T=R._reglType;T==="texture2d"||T==="textureCube"?O=wr(function(L){return L.link(R)}):T==="framebuffer"||T==="framebufferCube"?(y.command(R.color.length>0,'missing color attachment for framebuffer sent to uniform "'+P+'"',b.commandStr),O=wr(function(L){return L.link(R.color[0])})):y.commandRaise('invalid data for uniform "'+P+'"',b.commandStr)}else dr(R)?O=wr(function(L){var E=L.global.def("[",en(R.length,function(G){return y.command(typeof R[G]=="number"||typeof R[G]=="boolean","invalid uniform "+P,L.commandStr),R[G]}),"]");return E}):y.commandRaise('invalid or missing data for uniform "'+P+'"',b.commandStr);O.value=R,$[P]=O}),Object.keys(F).forEach(function(P){var R=F[P];$[P]=xn(R,function(O,T){return O.invoke(T,R)})}),$}function _t(M,b){var C=M.static,F=M.dynamic,$={};return Object.keys(C).forEach(function(P){var R=C[P],O=w.id(P),T=new D;if(I0(R))T.state=hi,T.buffer=te.getBuffer(te.create(R,pi,!1,!0)),T.type=0;else{var L=te.getBuffer(R);if(L)T.state=hi,T.buffer=L,T.type=0;else if(y.command(typeof R=="object"&&R,"invalid data for attribute "+P,b.commandStr),"constant"in R){var E=R.constant;T.buffer="null",T.state=dl,typeof E=="number"?T.x=E:(y.command(dr(E)&&E.length>0&&E.length<=4,"invalid constant for attribute "+P,b.commandStr),fi.forEach(function(We,ht){ht<E.length&&(T[We]=E[ht])}))}else{I0(R.buffer)?L=te.getBuffer(te.create(R.buffer,pi,!1,!0)):L=te.getBuffer(R.buffer),y.command(!!L,'missing buffer for attribute "'+P+'"',b.commandStr);var G=R.offset|0;y.command(G>=0,'invalid offset for attribute "'+P+'"',b.commandStr);var H=R.stride|0;y.command(H>=0&&H<256,'invalid stride for attribute "'+P+'", must be integer betweeen [0, 255]',b.commandStr);var ee=R.size|0;y.command(!("size"in R)||ee>0&&ee<=4,'invalid size for attribute "'+P+'", must be 1,2,3,4',b.commandStr);var re=!!R.normalized,Q=0;"type"in R&&(y.commandParameter(R.type,ha,"invalid type for attribute "+P,b.commandStr),Q=ha[R.type]);var xe=R.divisor|0;"divisor"in R&&(y.command(xe===0||ye,'cannot specify divisor for attribute "'+P+'", instancing not supported',b.commandStr),y.command(xe>=0,'invalid divisor for attribute "'+P+'"',b.commandStr)),y.optional(function(){var We=b.commandStr,ht=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(R).forEach(function(qe){y.command(ht.indexOf(qe)>=0,'unknown parameter "'+qe+'" for attribute pointer "'+P+'" (valid parameters are '+ht+")",We)})}),T.buffer=L,T.state=hi,T.size=ee,T.normalized=re,T.type=Q||L.dtype,T.offset=G,T.stride=H,T.divisor=xe}}$[P]=wr(function(We,ht){var qe=We.attribCache;if(O in qe)return qe[O];var Ze={isStream:!1};return Object.keys(T).forEach(function(st){Ze[st]=T[st]}),T.buffer&&(Ze.buffer=We.link(T.buffer),Ze.type=Ze.type||Ze.buffer+".dtype"),qe[O]=Ze,Ze})}),Object.keys(F).forEach(function(P){var R=F[P];function O(T,L){var E=T.invoke(L,R),G=T.shared,H=T.constants,ee=G.isBufferArgs,re=G.buffer;y.optional(function(){T.assert(L,E+"&&(typeof "+E+'==="object"||typeof '+E+'==="function")&&('+ee+"("+E+")||"+re+".getBuffer("+E+")||"+re+".getBuffer("+E+".buffer)||"+ee+"("+E+'.buffer)||("constant" in '+E+"&&(typeof "+E+'.constant==="number"||'+G.isArrayLike+"("+E+".constant))))",'invalid dynamic attribute "'+P+'"')});var Q={isStream:L.def(!1)},xe=new D;xe.state=hi,Object.keys(xe).forEach(function(Ze){Q[Ze]=L.def(""+xe[Ze])});var We=Q.buffer,ht=Q.type;L("if(",ee,"(",E,")){",Q.isStream,"=true;",We,"=",re,".createStream(",pi,",",E,");",ht,"=",We,".dtype;","}else{",We,"=",re,".getBuffer(",E,");","if(",We,"){",ht,"=",We,".dtype;",'}else if("constant" in ',E,"){",Q.state,"=",dl,";","if(typeof "+E+'.constant === "number"){',Q[fi[0]],"=",E,".constant;",fi.slice(1).map(function(Ze){return Q[Ze]}).join("="),"=0;","}else{",fi.map(function(Ze,st){return Q[Ze]+"="+E+".constant.length>"+st+"?"+E+".constant["+st+"]:0;"}).join(""),"}}else{","if(",ee,"(",E,".buffer)){",We,"=",re,".createStream(",pi,",",E,".buffer);","}else{",We,"=",re,".getBuffer(",E,".buffer);","}",ht,'="type" in ',E,"?",H.glTypes,"[",E,".type]:",We,".dtype;",Q.normalized,"=!!",E,".normalized;");function qe(Ze){L(Q[Ze],"=",E,".",Ze,"|0;")}return qe("size"),qe("offset"),qe("stride"),qe("divisor"),L("}}"),L.exit("if(",Q.isStream,"){",re,".destroyStream(",We,");","}"),Q}$[P]=xn(R,O)}),$}function kr(M,b){var C=M.static,F=M.dynamic;if(fs in C){var $=C[fs];return $!==null&&be.getVAO($)===null&&($=be.createVAO($)),wr(function(R){return R.link(be.getVAO($))})}else if(fs in F){var P=F[fs];return xn(P,function(R,O){var T=R.invoke(O,P);return O.def(R.shared.vao+".getVAO("+T+")")})}return null}function Jt(M){var b=M.static,C=M.dynamic,F={};return Object.keys(b).forEach(function($){var P=b[$];F[$]=wr(function(R,O){return typeof P=="number"||typeof P=="boolean"?""+P:R.link(P)})}),Object.keys(C).forEach(function($){var P=C[$];F[$]=xn(P,function(R,O){return R.invoke(O,P)})}),F}function Er(M,b,C,F,$){var P=M.static,R=M.dynamic;y.optional(function(){var qe=[va,cs,ls,ga,xa,_0,ya,E0,ss,fs].concat(se);function Ze(st){Object.keys(st).forEach(function(Ot){y.command(qe.indexOf(Ot)>=0,'unknown parameter "'+Ot+'"',$.commandStr)})}Ze(P),Ze(R)});var O=at(M,b),T=$e(M,$),L=vt(M,T,$),E=Nt(M,$),G=_r(M,$),H=ut(M,$,O);function ee(qe){var Ze=L[qe];Ze&&(G[qe]=Ze)}ee(wo),ee(Ae(w0));var re=Object.keys(G).length>0,Q={framebuffer:T,draw:E,shader:H,state:G,dirty:re,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(Q.profile=lt(M,$),Q.uniforms=Ir(C,$),Q.drawVAO=Q.scopeVAO=kr(M,$),!Q.drawVAO&&H.program&&!O&&k.angle_instanced_arrays){var xe=!0,We=H.program.attributes.map(function(qe){var Ze=b.static[qe];return xe=xe&&!!Ze,Ze});if(xe&&We.length>0){var ht=be.getVAO(be.createVAO(We));Q.drawVAO=new on(null,null,null,function(qe,Ze){return qe.link(ht)}),Q.useVAO=!0}}return O?Q.useVAO=!0:Q.attributes=_t(b,$),Q.context=Jt(F,$),Q}function Lr(M,b,C){var F=M.shared,$=F.context,P=M.scope();Object.keys(C).forEach(function(R){b.save($,"."+R);var O=C[R],T=O.append(M,b);Array.isArray(T)?P($,".",R,"=[",T.join(),"];"):P($,".",R,"=",T,";")}),b(P)}function zr(M,b,C,F){var $=M.shared,P=$.gl,R=$.framebuffer,O;Pe&&(O=b.def($.extensions,".webgl_draw_buffers"));var T=M.constants,L=T.drawBuffer,E=T.backBuffer,G;C?G=C.append(M,b):G=b.def(R,".next"),F||b("if(",G,"!==",R,".cur){"),b("if(",G,"){",P,".bindFramebuffer(",cd,",",G,".framebuffer);"),Pe&&b(O,".drawBuffersWEBGL(",L,"[",G,".colorAttachments.length]);"),b("}else{",P,".bindFramebuffer(",cd,",null);"),Pe&&b(O,".drawBuffersWEBGL(",E,");"),b("}",R,".cur=",G,";"),F||b("}")}function Dr(M,b,C){var F=M.shared,$=F.gl,P=M.current,R=M.next,O=F.current,T=F.next,L=M.cond(O,".dirty");se.forEach(function(E){var G=Ae(E);if(!(G in C.state)){var H,ee;if(G in R){H=R[G],ee=P[G];var re=en(ae[G].length,function(xe){return L.def(H,"[",xe,"]")});L(M.cond(re.map(function(xe,We){return xe+"!=="+ee+"["+We+"]"}).join("||")).then($,".",ie[G],"(",re,");",re.map(function(xe,We){return ee+"["+We+"]="+xe}).join(";"),";"))}else{H=L.def(T,".",G);var Q=M.cond(H,"!==",O,".",G);L(Q),G in Te?Q(M.cond(H).then($,".enable(",Te[G],");").else($,".disable(",Te[G],");"),O,".",G,"=",H,";"):Q($,".",ie[G],"(",H,");",O,".",G,"=",H,";")}}}),Object.keys(C.state).length===0&&L(O,".dirty=false;"),b(L)}function Wr(M,b,C,F){var $=M.shared,P=M.current,R=$.current,O=$.gl;hd(Object.keys(C)).forEach(function(T){var L=C[T];if(!(F&&!F(L))){var E=L.append(M,b);if(Te[T]){var G=Te[T];Do(L)?E?b(O,".enable(",G,");"):b(O,".disable(",G,");"):b(M.cond(E).then(O,".enable(",G,");").else(O,".disable(",G,");")),b(R,".",T,"=",E,";")}else if(dr(E)){var H=P[T];b(O,".",ie[T],"(",E,");",E.map(function(ee,re){return H+"["+re+"]="+ee}).join(";"),";")}else b(O,".",ie[T],"(",E,");",R,".",T,"=",E,";")}})}function pr(M,b){ye&&(M.instancing=b.def(M.shared.extensions,".angle_instanced_arrays"))}function ft(M,b,C,F,$){var P=M.shared,R=M.stats,O=P.current,T=P.timer,L=C.profile;function E(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var G,H;function ee(qe){G=b.def(),qe(G,"=",E(),";"),typeof $=="string"?qe(R,".count+=",$,";"):qe(R,".count++;"),pe&&(F?(H=b.def(),qe(H,"=",T,".getNumPendingQueries();")):qe(T,".beginQuery(",R,");"))}function re(qe){qe(R,".cpuTime+=",E(),"-",G,";"),pe&&(F?qe(T,".pushScopeStats(",H,",",T,".getNumPendingQueries(),",R,");"):qe(T,".endQuery();"))}function Q(qe){var Ze=b.def(O,".profile");b(O,".profile=",qe,";"),b.exit(O,".profile=",Ze,";")}var xe;if(L){if(Do(L)){L.enable?(ee(b),re(b.exit),Q("true")):Q("false");return}xe=L.append(M,b),Q(xe)}else xe=b.def(O,".profile");var We=M.block();ee(We),b("if(",xe,"){",We,"}");var ht=M.block();re(ht),b.exit("if(",xe,"){",ht,"}")}function Vr(M,b,C,F,$){var P=M.shared;function R(T){switch(T){case M0:case S0:case z0:return 2;case T0:case k0:case C0:return 3;case A0:case L0:case R0:return 4;default:return 1}}function O(T,L,E){var G=P.gl,H=b.def(T,".location"),ee=b.def(P.attributes,"[",H,"]"),re=E.state,Q=E.buffer,xe=[E.x,E.y,E.z,E.w],We=["buffer","normalized","offset","stride"];function ht(){b("if(!",ee,".buffer){",G,".enableVertexAttribArray(",H,");}");var Ze=E.type,st;if(E.size?st=b.def(E.size,"||",L):st=L,b("if(",ee,".type!==",Ze,"||",ee,".size!==",st,"||",We.map(function(hr){return ee+"."+hr+"!=="+E[hr]}).join("||"),"){",G,".bindBuffer(",pi,",",Q,".buffer);",G,".vertexAttribPointer(",[H,st,Ze,E.normalized,E.stride,E.offset],");",ee,".type=",Ze,";",ee,".size=",st,";",We.map(function(hr){return ee+"."+hr+"="+E[hr]+";"}).join(""),"}"),ye){var Ot=E.divisor;b("if(",ee,".divisor!==",Ot,"){",M.instancing,".vertexAttribDivisorANGLE(",[H,Ot],");",ee,".divisor=",Ot,";}")}}function qe(){b("if(",ee,".buffer){",G,".disableVertexAttribArray(",H,");",ee,".buffer=null;","}if(",fi.map(function(Ze,st){return ee+"."+Ze+"!=="+xe[st]}).join("||"),"){",G,".vertexAttrib4f(",H,",",xe,");",fi.map(function(Ze,st){return ee+"."+Ze+"="+xe[st]+";"}).join(""),"}")}re===hi?ht():re===dl?qe():(b("if(",re,"===",hi,"){"),ht(),b("}else{"),qe(),b("}"))}F.forEach(function(T){var L=T.name,E=C.attributes[L],G;if(E){if(!$(E))return;G=E.append(M,b)}else{if(!$(ud))return;var H=M.scopeAttrib(L);y.optional(function(){M.assert(b,H+".state","missing attribute "+L)}),G={},Object.keys(new D).forEach(function(ee){G[ee]=b.def(H,".",ee)})}O(M.link(T),R(T.info.type),G)})}function Dt(M,b,C,F,$){for(var P=M.shared,R=P.gl,O,T=0;T<F.length;++T){var L=F[T],E=L.name,G=L.info.type,H=C.uniforms[E],ee=M.link(L),re=ee+".location",Q;if(H){if(!$(H))continue;if(Do(H)){var xe=H.value;if(y.command(xe!==null&&typeof xe!="undefined",'missing uniform "'+E+'"',M.commandStr),G===ps||G===ms){y.command(typeof xe=="function"&&(G===ps&&(xe._reglType==="texture2d"||xe._reglType==="framebuffer")||G===ms&&(xe._reglType==="textureCube"||xe._reglType==="framebufferCube")),"invalid texture for uniform "+E,M.commandStr);var We=M.link(xe._texture||xe.color[0]._texture);b(R,".uniform1i(",re,",",We+".bind());"),b.exit(We,".unbind();")}else if(G===hs||G===us||G===ds){y.optional(function(){y.command(dr(xe),"invalid matrix for uniform "+E,M.commandStr),y.command(G===hs&&xe.length===4||G===us&&xe.length===9||G===ds&&xe.length===16,"invalid length for matrix uniform "+E,M.commandStr)});var ht=M.global.def("new Float32Array(["+Array.prototype.slice.call(xe)+"])"),qe=2;G===us?qe=3:G===ds&&(qe=4),b(R,".uniformMatrix",qe,"fv(",re,",false,",ht,");")}else{switch(G){case Ll:y.commandType(xe,"number","uniform "+E,M.commandStr),O="1f";break;case M0:y.command(dr(xe)&&xe.length===2,"uniform "+E,M.commandStr),O="2f";break;case T0:y.command(dr(xe)&&xe.length===3,"uniform "+E,M.commandStr),O="3f";break;case A0:y.command(dr(xe)&&xe.length===4,"uniform "+E,M.commandStr),O="4f";break;case Cl:y.commandType(xe,"boolean","uniform "+E,M.commandStr),O="1i";break;case zl:y.commandType(xe,"number","uniform "+E,M.commandStr),O="1i";break;case z0:y.command(dr(xe)&&xe.length===2,"uniform "+E,M.commandStr),O="2i";break;case S0:y.command(dr(xe)&&xe.length===2,"uniform "+E,M.commandStr),O="2i";break;case C0:y.command(dr(xe)&&xe.length===3,"uniform "+E,M.commandStr),O="3i";break;case k0:y.command(dr(xe)&&xe.length===3,"uniform "+E,M.commandStr),O="3i";break;case R0:y.command(dr(xe)&&xe.length===4,"uniform "+E,M.commandStr),O="4i";break;case L0:y.command(dr(xe)&&xe.length===4,"uniform "+E,M.commandStr),O="4i";break}b(R,".uniform",O,"(",re,",",dr(xe)?Array.prototype.slice.call(xe):xe,");")}continue}else Q=H.append(M,b)}else{if(!$(ud))continue;Q=b.def(P.uniforms,"[",w.id(E),"]")}G===ps?(y(!Array.isArray(Q),"must specify a scalar prop for textures"),b("if(",Q,"&&",Q,'._reglType==="framebuffer"){',Q,"=",Q,".color[0];","}")):G===ms&&(y(!Array.isArray(Q),"must specify a scalar prop for cube maps"),b("if(",Q,"&&",Q,'._reglType==="framebufferCube"){',Q,"=",Q,".color[0];","}")),y.optional(function(){function an(Kn,yd){M.assert(b,Kn,'bad data or missing for uniform "'+E+'".  '+yd)}function Pl(Kn){y(!Array.isArray(Q),"must not specify an array type for uniform"),an("typeof "+Q+'==="'+Kn+'"',"invalid type, expected "+Kn)}function Nn(Kn,yd){Array.isArray(Q)?y(Q.length===Kn,"must have length "+Kn):an(P.isArrayLike+"("+Q+")&&"+Q+".length==="+Kn,"invalid vector, should have length "+Kn,M.commandStr)}function xd(Kn){y(!Array.isArray(Q),"must not specify a value type"),an("typeof "+Q+'==="function"&&'+Q+'._reglType==="texture'+(Kn===rd?"2d":"Cube")+'"',"invalid texture type",M.commandStr)}switch(G){case zl:Pl("number");break;case S0:Nn(2,"number");break;case k0:Nn(3,"number");break;case L0:Nn(4,"number");break;case Ll:Pl("number");break;case M0:Nn(2,"number");break;case T0:Nn(3,"number");break;case A0:Nn(4,"number");break;case Cl:Pl("boolean");break;case z0:Nn(2,"boolean");break;case C0:Nn(3,"boolean");break;case R0:Nn(4,"boolean");break;case hs:Nn(4,"number");break;case us:Nn(9,"number");break;case ds:Nn(16,"number");break;case ps:xd(rd);break;case ms:xd(Fy);break}});var Ze=1;switch(G){case ps:case ms:var st=b.def(Q,"._texture");b(R,".uniform1i(",re,",",st,".bind());"),b.exit(st,".unbind();");continue;case zl:case Cl:O="1i";break;case S0:case z0:O="2i",Ze=2;break;case k0:case C0:O="3i",Ze=3;break;case L0:case R0:O="4i",Ze=4;break;case Ll:O="1f";break;case M0:O="2f",Ze=2;break;case T0:O="3f",Ze=3;break;case A0:O="4f",Ze=4;break;case hs:O="Matrix2fv";break;case us:O="Matrix3fv";break;case ds:O="Matrix4fv";break}if(b(R,".uniform",O,"(",re,","),O.charAt(0)==="M"){var Ot=Math.pow(G-hs+2,2),hr=M.global.def("new Float32Array(",Ot,")");Array.isArray(Q)?b("false,(",en(Ot,function(an){return hr+"["+an+"]="+Q[an]}),",",hr,")"):b("false,(Array.isArray(",Q,")||",Q," instanceof Float32Array)?",Q,":(",en(Ot,function(an){return hr+"["+an+"]="+Q+"["+an+"]"}),",",hr,")")}else Ze>1?b(en(Ze,function(an){return Array.isArray(Q)?Q[an]:Q+"["+an+"]"})):(y(!Array.isArray(Q),"uniform value must not be an array"),b(Q));b(");")}}function Qe(M,b,C,F){var $=M.shared,P=$.gl,R=$.draw,O=F.draw;function T(){var st=O.elements,Ot,hr=b;return st?((st.contextDep&&F.contextDynamic||st.propDep)&&(hr=C),Ot=st.append(M,hr)):Ot=hr.def(R,".",ga),Ot&&hr("if("+Ot+")"+P+".bindBuffer("+Ny+","+Ot+".buffer.buffer);"),Ot}function L(){var st=O.count,Ot,hr=b;return st?((st.contextDep&&F.contextDynamic||st.propDep)&&(hr=C),Ot=st.append(M,hr),y.optional(function(){st.MISSING&&M.assert(b,"false","missing vertex count"),st.DYNAMIC&&M.assert(hr,Ot+">=0","missing vertex count")})):(Ot=hr.def(R,".",ya),y.optional(function(){M.assert(hr,Ot+">=0","missing vertex count")})),Ot}var E=T();function G(st){var Ot=O[st];return Ot?Ot.contextDep&&F.contextDynamic||Ot.propDep?Ot.append(M,C):Ot.append(M,b):b.def(R,".",st)}var H=G(xa),ee=G(_0),re=L();if(typeof re=="number"){if(re===0)return}else C("if(",re,"){"),C.exit("}");var Q,xe;ye&&(Q=G(E0),xe=M.instancing);var We=E+".type",ht=O.elements&&Do(O.elements);function qe(){function st(){C(xe,".drawElementsInstancedANGLE(",[H,re,We,ee+"<<(("+We+"-"+Nu+")>>1)",Q],");")}function Ot(){C(xe,".drawArraysInstancedANGLE(",[H,ee,re,Q],");")}E?ht?st():(C("if(",E,"){"),st(),C("}else{"),Ot(),C("}")):Ot()}function Ze(){function st(){C(P+".drawElements("+[H,re,We,ee+"<<(("+We+"-"+Nu+")>>1)"]+");")}function Ot(){C(P+".drawArrays("+[H,ee,re]+");")}E?ht?st():(C("if(",E,"){"),st(),C("}else{"),Ot(),C("}")):Ot()}ye&&(typeof Q!="number"||Q>=0)?typeof Q=="string"?(C("if(",Q,">0){"),qe(),C("}else if(",Q,"<0){"),Ze(),C("}")):qe():Ze()}function yt(M,b,C,F,$){var P=tt(),R=P.proc("body",$);return y.optional(function(){P.commandStr=b.commandStr,P.command=P.link(b.commandStr)}),ye&&(P.instancing=R.def(P.shared.extensions,".angle_instanced_arrays")),M(P,R,C,F),P.compile().body}function kt(M,b,C,F){pr(M,b),C.useVAO?C.drawVAO?b(M.shared.vao,".setVAO(",C.drawVAO.append(M,b),");"):b(M.shared.vao,".setVAO(",M.shared.vao,".targetVAO);"):(b(M.shared.vao,".setVAO(null);"),Vr(M,b,C,F.attributes,function(){return!0})),Dt(M,b,C,F.uniforms,function(){return!0}),Qe(M,b,b,C)}function mr(M,b){var C=M.proc("draw",1);pr(M,C),Lr(M,C,b.context),zr(M,C,b.framebuffer),Dr(M,C,b),Wr(M,C,b.state),ft(M,C,b,!1,!0);var F=b.shader.progVar.append(M,C);if(C(M.shared.gl,".useProgram(",F,".program);"),b.shader.program)kt(M,C,b,b.shader.program);else{C(M.shared.vao,".setVAO(null);");var $=M.global.def("{}"),P=C.def(F,".id"),R=C.def($,"[",P,"]");C(M.cond(R).then(R,".call(this,a0);").else(R,"=",$,"[",P,"]=",M.link(function(O){return yt(kt,M,b,O,1)}),"(",F,");",R,".call(this,a0);"))}Object.keys(b.state).length>0&&C(M.shared.current,".dirty=true;")}function fo(M,b,C,F){M.batchId="a1",pr(M,b);function $(){return!0}Vr(M,b,C,F.attributes,$),Dt(M,b,C,F.uniforms,$),Qe(M,b,b,C)}function wa(M,b,C,F){pr(M,b);var $=C.contextDep,P=b.def(),R="a0",O="a1",T=b.def();M.shared.props=T,M.batchId=P;var L=M.scope(),E=M.scope();b(L.entry,"for(",P,"=0;",P,"<",O,";++",P,"){",T,"=",R,"[",P,"];",E,"}",L.exit);function G(We){return We.contextDep&&$||We.propDep}function H(We){return!G(We)}if(C.needsContext&&Lr(M,E,C.context),C.needsFramebuffer&&zr(M,E,C.framebuffer),Wr(M,E,C.state,G),C.profile&&G(C.profile)&&ft(M,E,C,!1,!0),F)C.useVAO?C.drawVAO?G(C.drawVAO)?E(M.shared.vao,".setVAO(",C.drawVAO.append(M,E),");"):L(M.shared.vao,".setVAO(",C.drawVAO.append(M,L),");"):L(M.shared.vao,".setVAO(",M.shared.vao,".targetVAO);"):(L(M.shared.vao,".setVAO(null);"),Vr(M,L,C,F.attributes,H),Vr(M,E,C,F.attributes,G)),Dt(M,L,C,F.uniforms,H),Dt(M,E,C,F.uniforms,G),Qe(M,L,E,C);else{var ee=M.global.def("{}"),re=C.shader.progVar.append(M,E),Q=E.def(re,".id"),xe=E.def(ee,"[",Q,"]");E(M.shared.gl,".useProgram(",re,".program);","if(!",xe,"){",xe,"=",ee,"[",Q,"]=",M.link(function(We){return yt(fo,M,C,We,2)}),"(",re,");}",xe,".call(this,a0[",P,"],",P,");")}}function S(M,b){var C=M.proc("batch",2);M.batchId="0",pr(M,C);var F=!1,$=!0;Object.keys(b.context).forEach(function(ee){F=F||b.context[ee].propDep}),F||(Lr(M,C,b.context),$=!1);var P=b.framebuffer,R=!1;P?(P.propDep?F=R=!0:P.contextDep&&F&&(R=!0),R||zr(M,C,P)):zr(M,C,null),b.state.viewport&&b.state.viewport.propDep&&(F=!0);function O(ee){return ee.contextDep&&F||ee.propDep}Dr(M,C,b),Wr(M,C,b.state,function(ee){return!O(ee)}),(!b.profile||!O(b.profile))&&ft(M,C,b,!1,"a1"),b.contextDep=F,b.needsContext=$,b.needsFramebuffer=R;var T=b.shader.progVar;if(T.contextDep&&F||T.propDep)wa(M,C,b,null);else{var L=T.append(M,C);if(C(M.shared.gl,".useProgram(",L,".program);"),b.shader.program)wa(M,C,b,b.shader.program);else{C(M.shared.vao,".setVAO(null);");var E=M.global.def("{}"),G=C.def(L,".id"),H=C.def(E,"[",G,"]");C(M.cond(H).then(H,".call(this,a0,a1);").else(H,"=",E,"[",G,"]=",M.link(function(ee){return yt(wa,M,b,ee,2)}),"(",L,");",H,".call(this,a0,a1);"))}}Object.keys(b.state).length>0&&C(M.shared.current,".dirty=true;")}function X(M,b){var C=M.proc("scope",3);M.batchId="a2";var F=M.shared,$=F.current;Lr(M,C,b.context),b.framebuffer&&b.framebuffer.append(M,C),hd(Object.keys(b.state)).forEach(function(R){var O=b.state[R],T=O.append(M,C);dr(T)?T.forEach(function(L,E){C.set(M.next[R],"["+E+"]",L)}):C.set(F.next,"."+R,T)}),ft(M,C,b,!0,!0),[ga,_0,ya,E0,xa].forEach(function(R){var O=b.draw[R];O&&C.set(F.draw,"."+R,""+O.append(M,C))}),Object.keys(b.uniforms).forEach(function(R){var O=b.uniforms[R].append(M,C);Array.isArray(O)&&(O="["+O.join()+"]"),C.set(F.uniforms,"["+w.id(R)+"]",O)}),Object.keys(b.attributes).forEach(function(R){var O=b.attributes[R].append(M,C),T=M.scopeAttrib(R);Object.keys(new D).forEach(function(L){C.set(T,"."+L,O[L])})}),b.scopeVAO&&C.set(F.vao,".targetVAO",b.scopeVAO.append(M,C));function P(R){var O=b.shader[R];O&&C.set(F.shader,"."+R,O.append(M,C))}P(cs),P(ls),Object.keys(b.state).length>0&&(C($,".dirty=true;"),C.exit($,".dirty=true;")),C("a1(",M.shared.context,",a0,",M.batchId,");")}function U(M){if(!(typeof M!="object"||dr(M))){for(var b=Object.keys(M),C=0;C<b.length;++C)if(Ur.isDynamic(M[b[C]]))return!0;return!1}}function Fe(M,b,C){var F=b.static[C];if(!F||!U(F))return;var $=M.global,P=Object.keys(F),R=!1,O=!1,T=!1,L=M.global.def("{}");P.forEach(function(G){var H=F[G];if(Ur.isDynamic(H)){typeof H=="function"&&(H=F[G]=Ur.unbox(H));var ee=xn(H,null);R=R||ee.thisDep,T=T||ee.propDep,O=O||ee.contextDep}else{switch($(L,".",G,"="),typeof H){case"number":$(H);break;case"string":$('"',H,'"');break;case"object":Array.isArray(H)&&$("[",H.join(),"]");break;default:$(M.link(H));break}$(";")}});function E(G,H){P.forEach(function(ee){var re=F[ee];if(Ur.isDynamic(re)){var Q=G.invoke(H,re);H(L,".",ee,"=",Q,";")}})}b.dynamic[C]=new Ur.DynamicVariable(b0,{thisDep:R,contextDep:O,propDep:T,ref:L,append:E}),delete b.static[C]}function gt(M,b,C,F,$){var P=tt();P.stats=P.link($),Object.keys(b.static).forEach(function(O){Fe(P,b,O)}),Py.forEach(function(O){Fe(P,M,O)});var R=Er(M,b,C,F,P);return mr(P,R),X(P,R),S(P,R),t(P.compile(),{destroy:function(){R.shader.program.destroy()}})}return{next:Ne,current:ae,procs:function(){var M=tt(),b=M.proc("poll"),C=M.proc("refresh"),F=M.block();b(F),C(F);var $=M.shared,P=$.gl,R=$.next,O=$.current;F(O,".dirty=false;"),zr(M,b),zr(M,C,null,!0);var T;ye&&(T=M.link(ye)),k.oes_vertex_array_object&&C(M.link(k.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var L=0;L<V.maxAttributes;++L){var E=C.def($.attributes,"[",L,"]"),G=M.cond(E,".buffer");G.then(P,".enableVertexAttribArray(",L,");",P,".bindBuffer(",pi,",",E,".buffer.buffer);",P,".vertexAttribPointer(",L,",",E,".size,",E,".type,",E,".normalized,",E,".stride,",E,".offset);").else(P,".disableVertexAttribArray(",L,");",P,".vertexAttrib4f(",L,",",E,".x,",E,".y,",E,".z,",E,".w);",E,".buffer=null;"),C(G),ye&&C(T,".vertexAttribDivisorANGLE(",L,",",E,".divisor);")}return C(M.shared.vao,".currentVAO=null;",M.shared.vao,".setVAO(",M.shared.vao,".targetVAO);"),Object.keys(Te).forEach(function(H){var ee=Te[H],re=F.def(R,".",H),Q=M.block();Q("if(",re,"){",P,".enable(",ee,")}else{",P,".disable(",ee,")}",O,".",H,"=",re,";"),C(Q),b("if(",re,"!==",O,".",H,"){",Q,"}")}),Object.keys(ie).forEach(function(H){var ee=ie[H],re=ae[H],Q,xe,We=M.block();if(We(P,".",ee,"("),dr(re)){var ht=re.length;Q=M.global.def(R,".",H),xe=M.global.def(O,".",H),We(en(ht,function(qe){return Q+"["+qe+"]"}),");",en(ht,function(qe){return xe+"["+qe+"]="+Q+"["+qe+"];"}).join("")),b("if(",en(ht,function(qe){return Q+"["+qe+"]!=="+xe+"["+qe+"]"}).join("||"),"){",We,"}")}else Q=F.def(R,".",H),xe=F.def(O,".",H),We(Q,");",O,".",H,"=",Q,";"),b("if(",Q,"!==",xe,"){",We,"}");C(We)}),M.compile()}(),compile:gt}}function eb(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var tb=34918,rb=34919,dd=35007,nb=function(f,w){if(!w.ext_disjoint_timer_query)return null;var k=[];function V(){return k.pop()||w.ext_disjoint_timer_query.createQueryEXT()}function te(ye){k.push(ye)}var B=[];function Y(ye){var Pe=V();w.ext_disjoint_timer_query.beginQueryEXT(dd,Pe),B.push(Pe),pe(B.length-1,B.length,ye)}function de(){w.ext_disjoint_timer_query.endQueryEXT(dd)}function ve(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var be=[];function ge(){return be.pop()||new ve}function _e(ye){be.push(ye)}var ze=[];function pe(ye,Pe,ae){var Ne=ge();Ne.startQueryIndex=ye,Ne.endQueryIndex=Pe,Ne.sum=0,Ne.stats=ae,ze.push(Ne)}var Ee=[],D=[];function K(){var ye,Pe,ae=B.length;if(ae!==0){D.length=Math.max(D.length,ae+1),Ee.length=Math.max(Ee.length,ae+1),Ee[0]=0,D[0]=0;var Ne=0;for(ye=0,Pe=0;Pe<B.length;++Pe){var se=B[Pe];w.ext_disjoint_timer_query.getQueryObjectEXT(se,rb)?(Ne+=w.ext_disjoint_timer_query.getQueryObjectEXT(se,tb),te(se)):B[ye++]=se,Ee[Pe+1]=Ne,D[Pe+1]=ye}for(B.length=ye,ye=0,Pe=0;Pe<ze.length;++Pe){var Te=ze[Pe],ie=Te.startQueryIndex,Ae=Te.endQueryIndex;Te.sum+=Ee[Ae]-Ee[ie];var Xe=D[ie],nt=D[Ae];nt===Xe?(Te.stats.gpuTime+=Te.sum/1e6,_e(Te)):(Te.startQueryIndex=Xe,Te.endQueryIndex=nt,ze[ye++]=Te)}ze.length=ye}}return{beginQuery:Y,endQuery:de,pushScopeStats:pe,update:K,getNumPendingQueries:function(){return B.length},clear:function(){k.push.apply(k,B);for(var ye=0;ye<k.length;ye++)w.ext_disjoint_timer_query.deleteQueryEXT(k[ye]);B.length=0,k.length=0},restore:function(){B.length=0,k.length=0}}},ob=16384,ab=256,ib=1024,sb=34962,pd="webglcontextlost",md="webglcontextrestored",vd=1,cb=2,lb=3;function gd(f,w){for(var k=0;k<f.length;++k)if(f[k]===w)return k;return-1}function fb(f){var w=e0(f);if(!w)return null;var k=w.gl,V=k.getContextAttributes(),te=k.isContextLost(),B=Fc(k,w);if(!B)return null;var Y=xo(),de=eb(),ve=B.extensions,be=nb(k,ve),ge=Ro(),_e=k.drawingBufferWidth,ze=k.drawingBufferHeight,pe={tick:0,time:0,viewportWidth:_e,viewportHeight:ze,framebufferWidth:_e,framebufferHeight:ze,drawingBufferWidth:_e,drawingBufferHeight:ze,pixelRatio:w.pixelRatio},Ee={},D={elements:null,primitive:4,count:-1,offset:0,instances:-1},K=Yg(k,ve),ye=hx(k,de,w,ae),Pe=Ey(k,ve,K,de,ye);function ae(Qe){return Pe.destroyBuffer(Qe)}var Ne=Ex(k,ve,ye,de),se=Sy(k,Y,de,w),Te=ey(k,ve,K,function(){Xe.procs.poll()},pe,de,w),ie=ty(k,ve,K,de,w),Ae=wy(k,ve,K,Te,ie,de),Xe=Jy(k,Y,ve,K,ye,Ne,Te,Ae,Ee,Pe,se,D,pe,be,w),nt=zy(k,Ae,Xe.procs.poll,pe,V,ve,K),Ce=Xe.next,we=k.canvas,ne=[],tt=[],lt=[],$e=[w.onDestroy],vt=null;function at(){if(ne.length===0){be&&be.update(),vt=null;return}vt=go.next(at),Wr();for(var Qe=ne.length-1;Qe>=0;--Qe){var yt=ne[Qe];yt&&yt(pe,null,0)}k.flush(),be&&be.update()}function ut(){!vt&&ne.length>0&&(vt=go.next(at))}function Nt(){vt&&(go.cancel(at),vt=null)}function _r(Qe){Qe.preventDefault(),te=!0,Nt(),tt.forEach(function(yt){yt()})}function Ir(Qe){k.getError(),te=!1,B.restore(),se.restore(),ye.restore(),Te.restore(),ie.restore(),Ae.restore(),Pe.restore(),be&&be.restore(),Xe.procs.refresh(),ut(),lt.forEach(function(yt){yt()})}we&&(we.addEventListener(pd,_r,!1),we.addEventListener(md,Ir,!1));function _t(){ne.length=0,Nt(),we&&(we.removeEventListener(pd,_r),we.removeEventListener(md,Ir)),se.clear(),Ae.clear(),ie.clear(),Te.clear(),Ne.clear(),ye.clear(),Pe.clear(),be&&be.clear(),$e.forEach(function(Qe){Qe()})}function kr(Qe){y(!!Qe,"invalid args to regl({...})"),y.type(Qe,"object","invalid args to regl({...})");function yt($){var P=t({},$);delete P.uniforms,delete P.attributes,delete P.context,delete P.vao,"stencil"in P&&P.stencil.op&&(P.stencil.opBack=P.stencil.opFront=P.stencil.op,delete P.stencil.op);function R(O){if(O in P){var T=P[O];delete P[O],Object.keys(T).forEach(function(L){P[O+"."+L]=T[L]})}}return R("blend"),R("depth"),R("cull"),R("stencil"),R("polygonOffset"),R("scissor"),R("sample"),"vao"in $&&(P.vao=$.vao),P}function kt($,P){var R={},O={};return Object.keys($).forEach(function(T){var L=$[T];if(Ur.isDynamic(L)){O[T]=Ur.unbox(L,T);return}else if(P&&Array.isArray(L)){for(var E=0;E<L.length;++E)if(Ur.isDynamic(L[E])){O[T]=Ur.unbox(L,T);return}}R[T]=L}),{dynamic:O,static:R}}var mr=kt(Qe.context||{},!0),fo=kt(Qe.uniforms||{},!0),wa=kt(Qe.attributes||{},!1),S=kt(yt(Qe),!1),X={gpuTime:0,cpuTime:0,count:0},U=Xe.compile(S,wa,fo,mr,X),Fe=U.draw,gt=U.batch,M=U.scope,b=[];function C($){for(;b.length<$;)b.push(null);return b}function F($,P){var R;if(te&&y.raise("context lost"),typeof $=="function")return M.call(this,null,$,0);if(typeof P=="function")if(typeof $=="number")for(R=0;R<$;++R)M.call(this,null,P,R);else if(Array.isArray($))for(R=0;R<$.length;++R)M.call(this,$[R],P,R);else return M.call(this,$,P,0);else if(typeof $=="number"){if($>0)return gt.call(this,C($|0),$|0)}else if(Array.isArray($)){if($.length)return gt.call(this,$,$.length)}else return Fe.call(this,$)}return t(F,{stats:X,destroy:function(){U.destroy()}})}var Jt=Ae.setFBO=kr({framebuffer:Ur.define.call(null,vd,"framebuffer")});function Er(Qe,yt){var kt=0;Xe.procs.poll();var mr=yt.color;mr&&(k.clearColor(+mr[0]||0,+mr[1]||0,+mr[2]||0,+mr[3]||0),kt|=ob),"depth"in yt&&(k.clearDepth(+yt.depth),kt|=ab),"stencil"in yt&&(k.clearStencil(yt.stencil|0),kt|=ib),y(!!kt,"called regl.clear with no buffer specified"),k.clear(kt)}function Lr(Qe){if(y(typeof Qe=="object"&&Qe,"regl.clear() takes an object as input"),"framebuffer"in Qe)if(Qe.framebuffer&&Qe.framebuffer_reglType==="framebufferCube")for(var yt=0;yt<6;++yt)Jt(t({framebuffer:Qe.framebuffer.faces[yt]},Qe),Er);else Jt(Qe,Er);else Er(null,Qe)}function zr(Qe){y.type(Qe,"function","regl.frame() callback must be a function"),ne.push(Qe);function yt(){var kt=gd(ne,Qe);y(kt>=0,"cannot cancel a frame twice");function mr(){var fo=gd(ne,mr);ne[fo]=ne[ne.length-1],ne.length-=1,ne.length<=0&&Nt()}ne[kt]=mr}return ut(),{cancel:yt}}function Dr(){var Qe=Ce.viewport,yt=Ce.scissor_box;Qe[0]=Qe[1]=yt[0]=yt[1]=0,pe.viewportWidth=pe.framebufferWidth=pe.drawingBufferWidth=Qe[2]=yt[2]=k.drawingBufferWidth,pe.viewportHeight=pe.framebufferHeight=pe.drawingBufferHeight=Qe[3]=yt[3]=k.drawingBufferHeight}function Wr(){pe.tick+=1,pe.time=ft(),Dr(),Xe.procs.poll()}function pr(){Te.refresh(),Dr(),Xe.procs.refresh(),be&&be.update()}function ft(){return(Ro()-ge)/1e3}pr();function Vr(Qe,yt){y.type(yt,"function","listener callback must be a function");var kt;switch(Qe){case"frame":return zr(yt);case"lost":kt=tt;break;case"restore":kt=lt;break;case"destroy":kt=$e;break;default:y.raise("invalid event, must be one of frame,lost,restore,destroy")}return kt.push(yt),{cancel:function(){for(var mr=0;mr<kt.length;++mr)if(kt[mr]===yt){kt[mr]=kt[kt.length-1],kt.pop();return}}}}var Dt=t(kr,{clear:Lr,prop:Ur.define.bind(null,vd),context:Ur.define.bind(null,cb),this:Ur.define.bind(null,lb),draw:kr({}),buffer:function(Qe){return ye.create(Qe,sb,!1,!1)},elements:function(Qe){return Ne.create(Qe,!1)},texture:Te.create2D,cube:Te.createCube,renderbuffer:ie.create,framebuffer:Ae.create,framebufferCube:Ae.createCube,vao:Pe.createVAO,attributes:V,frame:zr,on:Vr,limits:K,hasExtension:function(Qe){return K.extensions.indexOf(Qe.toLowerCase())>=0},read:nt,destroy:_t,_gl:k,_refresh:pr,poll:function(){Wr(),be&&be.update()},now:ft,stats:de});return w.onDone(null,Dt),Dt}return fb})});var _a=he(($6,$d)=>{"use strict";var _o=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Eo=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ho=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],F0=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],ys=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Ul=e=>Math.hypot(e[0],e[1],e[2]),On=e=>{let t=Ul(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function bi(e,t){let r=e.length-1,n=Math.min(Math.max(t,0),1)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],l=e[Math.min(r,o+2)],u=[0,0,0];for(let v=0;v<3;v++)u[v]=.5*(2*s[v]+(-i[v]+c[v])*a+(2*i[v]-5*s[v]+4*c[v]-l[v])*a*a+(-i[v]+3*s[v]-3*c[v]+l[v])*a*a*a);return u}function Eb(e,t){return bi(e.map(r=>[r,0,0]),t)[0]}function Mb(e,t,r,n){let o={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];o.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},o.restore=()=>{i=s.pop()};let c=(h,p)=>{let m=new Array(9);for(let d=0;d<3;d++)for(let g=0;g<3;g++)m[d*3+g]=h[d*3]*p[g]+h[d*3+1]*p[3+g]+h[d*3+2]*p[6+g];return m},l=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];o.translate=(h,p,m)=>{let d=l([h,p,m]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},o.scale=h=>{i.s*=h},o.rotateY=h=>{let p=Math.cos(h),m=Math.sin(h);i.r=c(i.r,[p,0,m,0,1,0,-m,0,p])},o.vert=(h,p,m)=>{let d=m||o.curMat,g=l(h),x=On(l(p));return e.push(g[0]*i.s+i.t[0],g[1]*i.s+i.t[1],g[2]*i.s+i.t[2]),t.push(x[0],x[1],x[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let u=h=>[e[h*3],e[h*3+1],e[h*3+2]],v=h=>[t[h*3],t[h*3+1],t[h*3+2]];return o.tri=(h,p,m)=>{let d=u(h),g=ys(_o(u(p),d),_o(u(m),d)),x=Eo(Eo(v(h),v(p)),v(m));F0(g,x)<0?r.push(h,m,p):r.push(h,p,m)},o.box=(h,p,m,d,g,x,_)=>{let A=[[[h,p,m],[d,p,m],[h,g,m],[d,g,m],[0,0,-1]],[[d,p,x],[h,p,x],[d,g,x],[h,g,x],[0,0,1]],[[h,p,x],[h,p,m],[h,g,x],[h,g,m],[-1,0,0]],[[d,p,m],[d,p,x],[d,g,m],[d,g,x],[1,0,0]],[[h,g,m],[d,g,m],[h,g,x],[d,g,x],[0,1,0]],[[h,p,x],[d,p,x],[h,p,m],[d,p,m],[0,-1,0]]];for(let z of A){let I=o.vert(z[0],z[4],_),N=o.vert(z[1],z[4],_),q=o.vert(z[2],z[4],_),J=o.vert(z[3],z[4],_);o.tri(I,N,q),o.tri(N,J,q)}},o.surface=(h,p,m,d)=>{d=d||{};let g=.001,x=I=>Math.min(1,Math.max(0,I)),_=[],A=[];for(let I=0;I<=p;I++){let N=[],q=[];for(let J=0;J<=m;J++){let j=I/p,ce=J/m,Z=h(j,ce),ue=Math.min(1-g,Math.max(g,j)),le=d.wrapV?ce:Math.min(1-g,Math.max(g,ce)),fe=_o(h(x(ue+g),le),h(x(ue-g),le)),Me=d.wrapV?le+g:x(le+g),Ge=d.wrapV?le-g:x(le-g),je=_o(h(ue,Me),h(ue,Ge)),Be=ys(fe,je);Ul(Be)<1e-14&&(Be=d.inside?_o(Z,d.inside(j,ce)):[0,1,0]),Be=On(Be),d.inside&&F0(Be,_o(Z,d.inside(j,ce)))<0&&(Be=ho(Be,-1));let Gt=d.mat?d.mat(j,ce,Z):null;N.push(o.vert(Z,Be,Gt)),d.double&&q.push(o.vert(Z,ho(Be,-1),Gt))}_.push(N),A.push(q)}let z=I=>{for(let N=0;N<p;N++)for(let q=0;q<m;q++){let J=I[N][q],j=I[N+1][q],ce=I[N][q+1],Z=I[N+1][q+1];o.tri(J,j,ce),o.tri(j,Z,ce)}};z(_),d.double&&z(A)},o.ellipsoid=(h,p,m,d,g)=>{g=g||{};let x=g.warp||null;o.surface((_,A)=>{let z=_*Math.PI,I=A*Math.PI*2,N=x?x(_,A):1;return[h[0]+p[0]*N*Math.sin(z)*Math.cos(I),h[1]+p[1]*N*Math.cos(z),h[2]+p[2]*N*Math.sin(z)*Math.sin(I)]},m||10,d||14,{wrapV:!0,inside:()=>h,mat:g.mat})},o.tube=(h,p,m,d,g)=>{g=g||{};let x=40,_=[],A=null;for(let N=0;N<=x;N++){let q=N/x,J=bi(h,Math.max(0,q-.01)),j=bi(h,Math.min(1,q+.01)),ce=On(_o(j,J)),Z;if(A)Z=On(_o(A,ho(ce,F0(A,ce))));else{let ue=Math.abs(ce[1])<.9?[0,1,0]:[1,0,0];Z=On(ys(ce,ue))}_.push({N:Z,B:On(ys(ce,Z))}),A=Z}let z=N=>{let q=Math.min(Math.max(N,0),1)*x,J=Math.min(x-1,Math.floor(q)),j=q-J,ce=_[J],Z=_[J+1];return{N:On(Eo(ho(ce.N,1-j),ho(Z.N,j))),B:On(Eo(ho(ce.B,1-j),ho(Z.B,j)))}},I=g.squash||[1,1];o.surface((N,q)=>{let J=bi(h,N),j=z(N),ce=p(N),Z=q*Math.PI*2;return Eo(J,Eo(ho(j.N,Math.cos(Z)*ce*I[0]),ho(j.B,Math.sin(Z)*ce*I[1])))},m||12,d||8,{wrapV:!0,inside:N=>bi(h,N),mat:g.mat})},o.lathe=(h,p,m,d,g)=>{g=g||{};let x=[];for(let _=0;_<h.length-1;_++){let A=h[_+1][0]-h[_][0],z=h[_+1][1]-h[_][1];x.push(On([z,-A,0]))}for(let _=0;_<h.length-1;_++){let A=h[_],z=h[_+1],I=_===0||A[2]===1,N=_===h.length-2||z[2]===1,q=I?x[_]:On(Eo(x[_-1],x[_])),J=N?x[_]:On(Eo(x[_],x[_+1])),j=[],ce=[];for(let Z=0;Z<=d;Z++){let ue=Z/d*Math.PI*2,le=Math.cos(ue),fe=Math.sin(ue),Me=g.mat?g.mat(ue,A[1]):null,Ge=g.mat?g.mat(ue,z[1]):null;j.push(o.vert([p+A[0]*le,A[1],m+A[0]*fe],[q[0]*le,q[1],q[0]*fe],Me)),ce.push(o.vert([p+z[0]*le,z[1],m+z[0]*fe],[J[0]*le,J[1],J[0]*fe],Ge))}for(let Z=0;Z<d;Z++)o.tri(j[Z],j[Z+1],ce[Z]),o.tri(j[Z+1],ce[Z+1],ce[Z])}},o}$d.exports={createBuilder:Mb,catmull:bi,curve1:Eb,sub:_o,add:Eo,mul:ho,dot:F0,cross:ys,norm:On,len:Ul}});var Bd=he((q6,Ud)=>{"use strict";var{norm:D0,add:$0,mul:Ho,sub:Tb,cross:qd}=_a(),Hd=Math.PI*2,Ab=(e,t,r)=>{let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)};function Sb(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function kb(e,t,r,n,o,a){let i=(h,p)=>[7,h*a,p];e.curMat=[0,0,0],e.box(t-a*1.36,n,r-a*1.36,t+a*1.36,n+.22,r+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,r,56,{mat:i});let s=n+.55,c=o-s,l=20,u=6,v=a*.075;return e.surface((h,p)=>{let m=s+h*c,d=a*(.96-.12*h),g=p*Hd,x=p*l%1,_=d-v*4*x*(1-x);return[t+_*Math.cos(g),m,r+_*Math.sin(g)]},10,l*u,{wrapV:!0,inside:h=>[t,s+h*c,r],mat:(h,p)=>[7,p*Hd*a,s+h*c]}),e.lathe([[a*.8,o-.02,1],[a*.9,o+.02],[a*.9,o+.07,1],[a*.82,o+.09,1],[a*.86,o+.13],[a*1.06,o+.2],[a*1.22,o+.28],[a*1.28,o+.33,1]],t,r,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,o+.33,r-a*1.42,t+a*1.42,o+.53,r+a*1.42),o+.53}function Lb(e,t,r){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,r*.14,1],[t*1.04,r*.14,1],[t*1.04,r*.2],[t*.97,r*.26,1],[t*.95,r*.26,1],[t*.95,r*.8,1],[t*.98,r*.8,1],[t*1.03,r*.86],[t*1.05,r*.92,1],[t*1.05,r,1],[t*.5,r,1],[0,r]],0,0,72)}function zb(e,t,r,n,o){e.save(),e.translate(t,0,r),Lb(e,n,o),e.restore()}function Cb(e,t,r,n,o,a){let i=Sb(n),s=a?D0([a[0],0,a[1]]):null;e.save(),e.translate(t,0,r),e.scale(o||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,l=.86;for(let u=0;u<c;u++){let v=u>=c-2,h=u*2.399963+i()*.5,p=[Math.cos(h),0,Math.sin(h)],m=[-Math.sin(h),0,Math.cos(h)],d=u*.618%1,g=v?.06+i()*.06:.12+.62*d,x=1;if(s){let Be=p[0]*s[0]+p[2]*s[2];x=.25+.75*Ab(-.7,.5,Be),g*=x}let _=v?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,A=v?1+i()*.2:.95+i()*.28,z=v?.055:.215+i()*.05,I=.04+i()*.05,N=[p[0]*I,l,p[2]*I],q=[N[0]+p[0]*Math.sin(g)*_*.92,N[1]+Math.cos(g)*_,N[2]+p[2]*Math.sin(g)*_*.92],J=[N[0]+p[0]*Math.sin(g*.5)*_*.45,N[1]+_*.5,N[2]+p[2]*Math.sin(g*.5)*_*.45];e.curMat=[4,0,0],e.tube([N,J,q],Be=>.02-.008*Be,8,7);let j=24,ce=g*.9+.05,Z=g+(v?.12:(.95+.45*d)*(.35+.65*x)),ue=[q],le=[],fe=q;for(let Be=0;Be<j;Be++){let Gt=Be/j,Rt=ce+(Z-ce)*Gt*Gt,Qt=[p[0]*Math.sin(Rt),Math.cos(Rt),p[2]*Math.sin(Rt)];le.push(Qt),fe=$0(fe,Ho(Qt,A/j)),ue.push(fe)}le.push(le[le.length-1]);let Me=Be=>{let Gt=Be*j,Rt=Math.min(j-1,Math.floor(Gt)),Qt=Gt-Rt;return $0(Ho(ue[Rt],1-Qt),Ho(ue[Rt+1],Qt))},Ge=Be=>{let Gt=Be*j,Rt=Math.min(j,Math.floor(Gt)),Qt=Math.min(j,Rt+1),It=Gt-Rt;return D0($0(Ho(le[Rt],1-It),Ho(le[Qt],It)))},je=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((Be,Gt)=>{let Rt=Gt*2-1,Qt=Me(Be),It=Ge(Be),Ar=je*Be,Yt=$0(Ho(m,Math.cos(Ar)),Ho(qd(It,m),Math.sin(Ar)));Yt=D0(Tb(Yt,Ho(It,Yt[0]*It[0]+Yt[1]*It[1]+Yt[2]*It[2])));let Rr=D0(qd(Yt,It)),Kr=z*Math.pow(Math.sin(Math.PI*Math.pow(Be,.72)),.85),En=.3*Kr*Math.abs(Rt)+.012*Math.sin(Be*40+Rt*2)*Math.abs(Rt)*(v?0:1),Ye=-.1*Kr*Rt*Rt*Rt*Rt,dt=En+Ye;return[Qt[0]+Yt[0]*Rt*Kr+Rr[0]*dt,Qt[1]+Yt[1]*Rt*Kr+Rr[1]*dt,Qt[2]+Yt[2]*Rt*Kr+Rr[2]*dt]},14,8,{double:!0,mat:(Be,Gt)=>[2,Gt*2-1,Be]})}e.restore()}Ud.exports={addFlutedColumn:kb,addStatue:zb,addPlant:Cb}});var Ea=he((H6,Xd)=>{"use strict";var me={xc:7,r:2.5,spring:4.7};me.x0=me.xc-me.r;me.x1=me.xc+me.r;me.top=me.spring+me.r;var ln=.06,ir=.1,jd=.08,q0=me.r,H0=[me.x0+q0/3,me.x0+2*q0/3,me.xc+q0/3,me.xc+2*q0/3],wi=.28,Bl=[.95,1.65,2.35,3.05,3.75],Wd=[1.05,1.8],bs=[8,0,0],Sn=[0,0,0];function Gn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function _i(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),u=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,u)}function U0(e,t,r,n,o,a,i=48,s=0,c=Math.PI){let l=(u,v,h)=>[me.xc+v*Math.cos(u),me.spring+v*Math.sin(u),h];for(let u=0;u<i;u++){let v=s+(c-s)*u/i,h=s+(c-s)*(u+1)/i,p=(v+h)/2;_i(e,l(v,t,o),l(h,t,o),l(h,r,o),l(v,r,o),[0,0,1],a),_i(e,l(v,r,n),l(h,r,n),l(h,t,n),l(v,t,n),[0,0,-1],a),_i(e,l(v,t,n),l(h,t,n),l(h,t,o),l(v,t,o),[-Math.cos(p),-Math.sin(p),0],a),_i(e,l(h,r,n),l(v,r,n),l(v,r,o),l(h,r,o),[Math.cos(p),Math.sin(p),0],a)}}function Rb(e){let n=a=>[me.xc+me.r*Math.cos(a),me.spring+me.r*Math.sin(a)],o=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?me.r/Math.abs(i):1/0,l=s>1e-6?(8-me.spring)/s:1/0,u=Math.min(c,l);return[Math.min(me.x1,Math.max(me.x0,me.xc+i*u)),Math.min(8,me.spring+s*u)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),l=n(s),u=o(i),v=o(s);for(let[p,m]of[[.35,1],[-.35,-1]])_i(e,[c[0],c[1],p],[l[0],l[1],p],[v[0],v[1],p],[u[0],u[1],p],[0,0,m],Sn);let h=(i+s)/2;_i(e,[c[0],c[1],-.35],[l[0],l[1],-.35],[l[0],l[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Sn)}}function Ib(e){Gn(e,-.35,0,-.35,me.x0,8,.35,Sn),Gn(e,me.x1,0,-.35,14+.35,8,.35,Sn),Rb(e),Vd(e)}function Vd(e){Gn(e,me.x0-.32,.3,.35,me.x0,me.spring,.35+.07,Sn),Gn(e,me.x1,.3,.35,me.x1+.32,me.spring,.35+.07,Sn),Gn(e,me.x0-.32-.05,0,.35,me.x0,.3,.35+.07+.04,Sn),Gn(e,me.x1,0,.35,me.x1+.32+.05,.3,.35+.07+.04,Sn),Gn(e,me.x0-.32-.06,me.spring-.12,.35,me.x0,me.spring,.35+.07+.05,Sn),Gn(e,me.x1,me.spring-.12,.35,me.x1+.32+.06,me.spring,.35+.07+.05,Sn),U0(e,me.r,me.r+.32,.35,.35+.07,Sn),U0(e,me.r+.32,me.r+.32+.06,.35,.35+.07+.03,Sn),Gn(e,me.xc-.22,me.top-.08,.35,me.xc+.22,me.top+.32+.12,.35+.07+.06,Sn)}function Pb(e,t){t=t||"all";let r=t==="all",n=r||t==="fixed",o=-jd/2,a=jd/2,i=(h,p,m,d,g=0)=>Gn(e,h-g,p,o,m+g,d,a,bs),s=h=>me.spring+Math.sqrt(Math.max(0,me.r*me.r-(h-me.xc)*(h-me.xc))),c=t==="right"?me.xc:me.x0,l=t==="left"?me.xc:me.x1,u=h=>r||t==="left"&&h<me.xc||t==="right"&&h>me.xc,v=r?null:me.spring-.06;if(n){i(me.x0,0,me.x0+ir,me.spring),i(me.x1-ir,0,me.x1,me.spring),U0(e,me.r-ir,me.r,o,a,bs,64),i(me.x0,0,me.x1,.05),i(me.x0,me.spring-.06,me.x1,me.spring+.06);for(let h of Wd)U0(e,h-ln/2,h+ln/2,o,a,bs,48)}if(r){i(me.x0,0,me.x1,wi),i(me.xc-ir/2,0,me.xc+ir/2,me.top-ir*.5);for(let h of H0)i(h-ln/2,wi,h+ln/2,s(h)-ir*.5);for(let h of Bl)i(me.x0,h-ln/2,me.x1,h+ln/2)}else if(t==="fixed"){i(me.xc-ir/2,me.spring+.06,me.xc+ir/2,me.top-ir*.5);for(let h of H0)i(h-ln/2,me.spring+.06,h+ln/2,s(h)-ir*.5)}else{let h=t==="left"?me.x0+ir:me.x1-ir;i(Math.min(h,h+(t==="left"?ir*.8:-ir*.8)),.05,Math.max(h,h+(t==="left"?ir*.8:-ir*.8)),v),i(c,.05,l,wi),i(c,v-.07,l,v);let p=t==="left"?me.xc-ir/2:me.xc;i(p,.05,p+ir/2,v);for(let m of H0)u(m)&&i(m-ln/2,wi,m+ln/2,v-.07);for(let m of Bl)i(c,m-ln/2,l,m+ln/2)}for(let h of[-1,1]){let p=me.xc+h*.16;u(p)&&(Gn(e,p-.02,1.05,a,p+.02,1.13,a+.06,bs),Gn(e,p-(h>0?0:.14),1.07,a+.05,p+(h>0?.14:0),1.11,a+.08,bs))}}function Nb(e){e=e||"all";let t=[],r=0,{x0:n,x1:o,xc:a,r:i,spring:s}=me;if(e!=="fixed"){let l=e==="right"?a:n,u=e==="left"?a:o;if(t.push([l,0,r],[u,0,r],[u,s,r],[l,0,r],[u,s,r],[l,s,r]),e!=="all")return t}let c=48;for(let l=0;l<c;l++){let u=Math.PI*l/c,v=Math.PI*(l+1)/c;t.push([a,s,r],[a+i*Math.cos(u),s+i*Math.sin(u),r],[a+i*Math.cos(v),s+i*Math.sin(v),r])}return t}var Bt=e=>e.toFixed(4);function Ob(){let e=H0.map(n=>`vb = max(vb, barCover(abs(q.x - ${Bt(n)}), ${Bt(ln/2)}, soft));`).join(`
		`),t=Bl.map(n=>`hb = max(hb, barCover(abs(q.y - ${Bt(n)}), ${Bt(ln/2)}, soft));`).join(`
		`),r=Wd.map(n=>`ab = max(ab, barCover(abs(rr - ${Bt(n)}), ${Bt(ln/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Bt(me.x0)} - soft, ${Bt(me.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Bt(me.x1)} - soft, ${Bt(me.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Bt(me.xc)}, ${Bt(me.spring)}));
		float arch = q.y < ${Bt(me.spring)} ? 1.0 : 1.0 - smoothstep(${Bt(me.r)} - soft, ${Bt(me.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Bt(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Bt(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Bt(me.xc)}, ${Bt(me.spring)}));
		float vb = barCover(abs(q.x - ${Bt(me.xc)}), ${Bt(ir/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Bt(me.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Bt(wi)} - soft, ${Bt(wi)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Bt(me.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${r}
		ab = q.y > ${Bt(me.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Bt(me.x0+ir/2)}), ${Bt(ir/2)}, soft),
			barCover(abs(q.x - ${Bt(me.x1-ir/2)}), ${Bt(ir/2)}, soft));
		frame = q.y < ${Bt(me.spring)} ? frame : barCover(abs(rr - ${Bt(me.r-ir/2)}), ${Bt(ir/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Xd.exports={addEntranceWall:Ib,addSurround:Vd,addFrames:Pb,glassPanes:Nb,doorLightGLSL:Ob,DOOR:me,WALL:.35}});var Mi=he((U6,e1)=>{"use strict";var Ta=1.1583333333333334,Aa=(13.05-8*.16)/9,Wl=Ta+.16,Vl=Aa+.16,Mo=14/2-7.75/2,Fn=15,ws=Mo+7.75,Uo=Fn+13.05,kn=.3,To={y:8+.18,inset:.15},Ma={y:8+.36,inset:kn},Xl=8+.2,B0=8+.62,Yl=8+.9,Kl=.016,Zd=.28,Jd=.66,Gb=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>r/t)})(),Fb=[9,0,0],Xr=[10,0,0];function Ei(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),u=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,u)}function fn(e,t,r,n,o,a,i){Ei(e,[t,a,r],[n,a,r],[n,a,o],[t,a,o],[0,-1,0],i)}function jl(e,t,r,n,o,a,i,s){Ei(e,[t,a,r],[n,a,r],[n,i,r],[t,i,r],[0,0,1],s),Ei(e,[n,a,o],[t,a,o],[t,i,o],[n,i,o],[0,0,-1],s),Ei(e,[t,a,o],[t,a,r],[t,i,r],[t,i,o],[1,0,0],s),Ei(e,[n,a,r],[n,a,o],[n,i,o],[n,i,r],[-1,0,0],s)}function Yd(e,t,r,n,o){fn(e,t[0],t[1],t[2],r[1],n,o),fn(e,t[0],r[3],t[2],t[3],n,o),fn(e,t[0],r[1],r[0],r[3],n,o),fn(e,r[2],r[1],t[2],r[3],n,o)}var Kd=e=>Mo+e*Wl,Qd=e=>Fn+e*Vl;function Db(e,t,r=48){let n=[Mo-kn,Fn-kn,ws+kn,Uo+kn],o=(l,u)=>[l[0]+u,l[1]+u,l[2]-u,l[3]-u],a=o(n,To.inset),i=o(n,Ma.inset);fn(e,0,0,14,n[1],8,t),fn(e,0,n[3],14,r,8,t),fn(e,0,n[1],n[0],n[3],8,t),fn(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],Xr),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,Xr),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],Xr),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],Xr),jl(e,...n.slice(0,2),...n.slice(2),8,To.y,Xr),Yd(e,n,a,To.y,Xr),jl(e,...a.slice(0,2),...a.slice(2),To.y,Ma.y,Xr),Yd(e,a,i,Ma.y,Xr);for(let l=1;l<6;l++){let u=Kd(l)-.16;e.box(u,Xl,Fn,u+.16,Ma.y,Uo,Xr)}for(let l=1;l<9;l++){let u=Qd(l)-.16;e.box(Mo,Xl,u,ws,Ma.y,u+.16,Xr)}for(let l=0;l<9;l++)for(let u=0;u<6;u++){let v=Kd(u),h=Qd(l);jl(e,v,h,v+Ta,h+Aa,Ma.y,Yl,Xr),fn(e,v,h,v+Ta,h+Aa,Yl,Fb),$b(e,v+Ta/2,h+Aa/2,Ta/2,Aa/2)}}function $b(e,t,r,n,o){let a=B0,i=Kl;fn(e,t-n,r-i,t+n,r+i,a,Xr),fn(e,t-i,r-o,t+i,r+o,a,Xr);for(let s of[1,-1]){let c=Math.hypot(n,o),l=n/c,u=s*o/c,v=-u*i,h=l*i;Ei(e,[t-l*c+v,a,r-u*c+h],[t+l*c+v,a,r+u*c+h],[t+l*c-v,a,r+u*c-h],[t-l*c-v,a,r-u*c-h],[0,-1,0],Xr)}for(let s of[Zd,Jd]){let c=s*n,l=s*o;fn(e,t-c-i,r-l-i,t+c+i,r-l+i,a,Xr),fn(e,t-c-i,r+l-i,t+c+i,r+l+i,a,Xr),fn(e,t-c-i,r-l+i,t-c+i,r+l-i,a,Xr),fn(e,t+c-i,r-l+i,t+c+i,r+l-i,a,Xr)}}var pt=e=>e.toFixed(4);function qb(){return`
	const vec3 SKY_SUN = vec3(${Gb.map(pt).join(", ")});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${pt(Mo)}, ${pt(Fn)});
		vec2 pitch = vec2(${pt(Wl)}, ${pt(Vl)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${pt(5)} || cell.y > ${pt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${pt(Ta)}, ${pt(Aa)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${pt(Kl)} - soft, ${pt(Kl)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${pt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${pt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${pt(To.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${pt(Xl)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${pt(Ma.y)} - p.y) / L.y)).xz;
		float tG = (${pt(B0)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${pt(Yl)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${pt(Mo-kn)}, ${pt(Fn-kn)}, ${pt(ws+kn)}, ${pt(Uo+kn)}), soft)
		           * rectOpen(q1, vec4(${pt(Mo-kn+To.inset)}, ${pt(Fn-kn+To.inset)}, ${pt(ws+kn-To.inset)}, ${pt(Uo+kn-To.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${pt(Mo)}, ${pt(Fn)});
		vec2 pitch = vec2(${pt(Wl)}, ${pt(Vl)});
		vec2 paneHalf = vec2(${pt(Ta/2)}, ${pt(Aa/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${pt(Zd)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${pt(Jd)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${pt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${pt(B0)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${pt(Mo)}, ${pt(Fn)}, ${pt(ws)}, ${pt(Uo)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${pt(Fn-3)}, ${pt(Fn+2)}, p.z)
		        * (1.0 - smoothstep(${pt(Uo-2)}, ${pt(Uo+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${pt(7.75/2)}, ${pt(14/2)}, abs(p.x - ${pt(14/2)}));
		return z * x;
	}`}e1.exports={addSkylight:Db,skylightGLSL:qb,Z_START:Fn,Z_END:Uo,GLASS_Y:B0,HEIGHT:8}});var hn=he((B6,a1)=>{"use strict";var Ai=Ea(),ef=8,sr=.35,Re={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:ef},t1=(Re.z1-Re.z0)/2,Ql=Re.crown-Re.spring,Jl=(Ql*Ql+t1*t1)/(2*Ql),tf=Re.crown-Jl;function Ti(e){let t=e-Re.zc;return tf+Math.sqrt(Math.max(0,Jl*Jl-t*t))}var et={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Zn=Array.from({length:et.count},(e,t)=>et.first+t*et.pitch),n1=Zn.slice(1).map(e=>e-et.pitch/2),Hb=[Zn[0],Zn[2],Zn[4]],W0=[Zn[1],Zn[3]],yn={r:1.3,sill:.62,spring:3.3},Wt=[0,0,0],_s=[11,0,0],Bo=[10,0,0],Es=[8,0,0];function $r(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),u=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,u)}function bn(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function Ms(e,t){let{u0:r,u1:n,w0:o,w1:a,top:i,holes:s,mat:c}=t,l=new Set([r,n]);for(let d of s){l.add(d.u0),l.add(d.u1);let g=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let x=1;x<g;x++)l.add(d.u0+(d.u1-d.u0)*x/g)}for(let d of t.cuts||[])l.add(d);let u=t.topStep||.5;for(let d=r;d<n;d+=u)l.add(d);let v=[...l].filter(d=>d>=r-1e-9&&d<=n+1e-9).sort((d,g)=>d-g),h=(d,g)=>d.bot?d.bot(g):d.bottom,p=(d,g)=>{let x=i(d),_=g.map(I=>[Math.max(0,h(I,d)),Math.min(I.head(d),x)]).filter(I=>I[1]>I[0]).sort((I,N)=>I[0]-N[0]),A=[],z=0;for(let I of _)I[0]>z+1e-6&&A.push([z,I[0]]),z=Math.max(z,I[1]);return x>z+1e-6&&A.push([z,x]),A},m=(d,g,x)=>[d,g,x];for(let d=0;d<v.length-1;d++){let g=v[d],x=v[d+1],_=(g+x)/2,A=s.filter(j=>_>j.u0&&_<j.u1),z=A.length?Math.max(g,Math.max(...A.map(j=>j.u0))+1e-7):g,I=A.length?Math.min(x,Math.min(...A.map(j=>j.u1))-1e-7):x,N=p(z,A),q=p(I,A),J=Math.min(N.length,q.length);for(let j=0;j<J;j++){let[ce,Z]=N[j],[ue,le]=q[j];Z-ce<1e-6&&le-ue<1e-6||($r(e,m(g,ce,a),m(x,ue,a),m(x,le,a),m(g,Z,a),[0,0,1],c),t.frontOnly||$r(e,m(x,ue,o),m(g,ce,o),m(g,Z,o),m(x,le,o),[0,0,-1],c))}}t.noEnds||($r(e,m(r,0,o),m(r,0,a),m(r,i(r),a),m(r,i(r),o),[-1,0,0],c),$r(e,m(n,0,a),m(n,0,o),m(n,i(n),o),m(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let g=d.mat||t.revealMat||c,x=Math.max(0,h(d,d.u0+1e-7)),_=Math.max(0,h(d,d.u1-1e-7)),A=Math.min(d.head(d.u0+1e-7),i(d.u0)),z=Math.min(d.head(d.u1-1e-7),i(d.u1));A>x+1e-6&&$r(e,m(d.u0,x,a),m(d.u0,x,o),m(d.u0,A,o),m(d.u0,A,a),[1,0,0],g),z>_+1e-6&&$r(e,m(d.u1,_,o),m(d.u1,_,a),m(d.u1,z,a),m(d.u1,z,o),[-1,0,0],g);let I=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let N=0;N<I;N++){let q=d.u0+(d.u1-d.u0)*N/I,J=d.u0+(d.u1-d.u0)*(N+1)/I,j=Math.max(q,d.u0+1e-7),ce=Math.min(J,d.u1-1e-7),Z=Math.min(d.head(j),i(q)),ue=Math.min(d.head(ce),i(J));if(!(Z>=i(q)-1e-6&&ue>=i(J)-1e-6)){let Me=J-q,Ge=ue-Z,je=Math.hypot(Me,Ge)||1;$r(e,m(q,Z,o),m(J,ue,o),m(J,ue,a),m(q,Z,a),[Ge/je,-Me/je,0],g)}let le=h(d,j),fe=h(d,ce);if(le>1e-6||fe>1e-6){let Me=J-q,Ge=fe-le,je=Math.hypot(Me,Ge)||1;$r(e,m(J,fe,o),m(q,le,o),m(q,le,a),m(J,fe,a),[-Ge/je,Me/je,0],g)}}}}var Zl=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function Ub(e,t){let r=yn.r,n=yn.sill,o=yn.spring,a=Re.z0,i=24,s=(p,m,d)=>[t+Math.cos(p)*m,d,a-Math.sin(p)*m];for(let p=0;p<i;p++){let m=Math.PI*p/i,d=Math.PI*(p+1)/i,g=[-Math.cos(m),0,Math.sin(m)],x=[-Math.cos(d),0,Math.sin(d)],_=[e.vert(s(m,r,n),g,Wt),e.vert(s(d,r,n),x,Wt),e.vert(s(d,r,o),x,Wt),e.vert(s(m,r,o),g,Wt)];e.tri(_[0],_[1],_[2]),e.tri(_[0],_[2],_[3])}let c=12,l=(p,m)=>[t+Math.cos(p)*Math.cos(m)*r,o+Math.sin(m)*r,a-Math.sin(p)*Math.cos(m)*r],u=(p,m)=>[-Math.cos(p)*Math.cos(m),-Math.sin(m),Math.sin(p)*Math.cos(m)];for(let p=0;p<i;p++)for(let m=0;m<c;m++){let d=Math.PI*p/i,g=Math.PI*(p+1)/i,x=Math.PI/2*m/c,_=Math.PI/2*(m+1)/c,A=[e.vert(l(d,x),u(d,x),Bo),e.vert(l(g,x),u(g,x),Bo),e.vert(l(g,_),u(g,_),Bo),e.vert(l(d,_),u(d,_),Bo)];e.tri(A[0],A[1],A[2]),e.tri(A[0],A[2],A[3])}for(let p=1;p<8;p++){let m=Math.PI*p/8,d=[];for(let g=0;g<=10;g++){let x=Math.PI/2*g/10*.97;d.push(l(m,x).map((_,A)=>_-u(m,x)[A]*.02))}e.tube(d,g=>.035*(1-g*.6),12,6,{mat:()=>Bo})}let v=e.vert([t,n,a],[0,1,0],Wt);for(let p=0;p<i;p++){let m=Math.PI*p/i,d=Math.PI*(p+1)/i;e.tri(v,e.vert(s(m,r,n),[0,1,0],Wt),e.vert(s(d,r,n),[0,1,0],Wt))}bn(e,t-r-.12,n-.1,a,t+r+.12,n+.02,a+.12,Wt),bn(e,t-r-.16,n-.2,a,t+r+.16,n-.1,a+.07,Wt);let h=.16;for(let p=0;p<i;p++){let m=Math.PI*p/i,d=Math.PI*(p+1)/i,g=(x,_,A)=>[t+Math.cos(x)*_,o+Math.sin(x)*_,A];$r(e,g(m,r,a+.05),g(d,r,a+.05),g(d,r+h,a+.05),g(m,r+h,a+.05),[0,0,1],Wt),$r(e,g(m,r+h,a),g(d,r+h,a),g(d,r+h,a+.05),g(m,r+h,a+.05),[Math.cos((m+d)/2),Math.sin((m+d)/2),0],Wt),$r(e,g(m,r,a),g(d,r,a),g(d,r,a+.05),g(m,r,a+.05),[-Math.cos((m+d)/2),-Math.sin((m+d)/2),0],Wt)}for(let p of[-1,1]){let m=t+p*r,d=t+p*(r+h);bn(e,m,n,a,d,o,a+.05,Wt),bn(e,m-p*.02,o-.12,a,d+p*.06,o,a+.09,Wt)}bn(e,t-.11,o+r-.04,a,t+.11,o+r+h+.1,a+.09,Wt),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>Wt})}var Bb=yn.sill+.4,jb=Re.z0-.62;function Wb(e){$r(e,[14,0,Re.z0-sr],[Re.x1+sr,0,Re.z0-sr],[Re.x1+sr,0,Re.z1+sr],[14,0,Re.z1+sr],[0,1,0],Wt),e.curMat=_s,Ms(e,{u0:14+sr,u1:Re.x1+2*sr,w0:Re.z0-2*sr,w1:Re.z0,top:()=>Re.spring,holes:W0.map(l=>({u0:l-yn.r,u1:l+yn.r,bottom:yn.sill,head:Zl(l,yn.r,yn.spring),noReveal:!0})),mat:_s,cuts:[Re.x1]});for(let l of W0)Ub(e,l);e.save(),e.translate(0,0,Re.z1),e.rotateY(Math.PI),e.translate(-(Re.x1+2*sr),0,-2*sr);let t=l=>Re.x1+2*sr-l;Ms(e,{u0:t(Re.x1+2*sr),u1:t(13.65),w0:0,w1:2*sr,top:()=>Re.spring,holes:Zn.map(l=>({u0:t(l+et.halfW),u1:t(l-et.halfW),bottom:et.sill,head:Zl(t(l),et.halfW,et.spring)})),mat:_s,revealMat:Wt}),e.restore(),e.save(),e.translate(Re.x1,0,0),e.rotateY(-Math.PI/2);let r=Ai.DOOR,n=Re.zc,o=r.r;Ms(e,{u0:Re.z0-2*sr,u1:Re.z1+2*sr,w0:-2*sr,w1:0,top:l=>l<Re.z0||l>Re.z1?Re.spring:Ti(l),topStep:.15,holes:[{u0:n-o,u1:n+o,bottom:0,head:Zl(n,o,r.spring)}],mat:_s,revealMat:Wt}),e.restore(),e.save(),e.translate(14+sr,0,0),e.rotateY(-Math.PI/2),Ms(e,{u0:Re.z0,u1:Re.z1,w0:-0,w1:2*sr,top:()=>ef,topStep:.15,holes:[{u0:Re.z0,u1:Re.z1,bottom:0,head:l=>Ti(l)}],mat:_s,revealMat:Wt}),e.restore();let a=14+sr,i=Math.ceil((Re.x1-a)/1),s=28,c=[];for(let l=0;l<=i;l++){let u=a+(Re.x1-a)*l/i,v=[];for(let h=0;h<=s;h++){let p=Re.z0+(Re.z1-Re.z0)*h/s,m=Ti(p),d=[0,tf-m,Re.zc-p],g=Math.hypot(d[1],d[2]);v.push(e.vert([u,m,p],[0,d[1]/g,d[2]/g],Bo))}c.push(v)}for(let l=0;l<i;l++)for(let u=0;u<s;u++)e.tri(c[l][u],c[l+1][u],c[l][u+1]),e.tri(c[l+1][u],c[l+1][u+1],c[l][u+1])}function r1(e,t,r,n){let a=[];for(let i=0;i<=32;i++){let s=Re.z0+(Re.z1-Re.z0)*i/32,c=Ti(s),l=tf-c,u=Re.zc-s,v=Math.hypot(l,u),h=[c+l/v*n,s+u/v*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,l/v,u/v]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];$r(e,[t-r,s.iy,s.iz],[t+r,s.iy,s.iz],[t+r,c.iy,c.iz],[t-r,c.iy,c.iz],s.n,Wt),$r(e,[t-r,s.y,s.z],[t-r,s.iy,s.iz],[t-r,c.iy,c.iz],[t-r,c.y,c.z],[-1,0,0],Wt),$r(e,[t+r,s.iy,s.iz],[t+r,s.y,s.z],[t+r,c.y,c.z],[t+r,c.iy,c.iz],[1,0,0],Wt)}}function j0(e,t,r,n){let i=r,s=r+n*.16;bn(e,t-.28,0,i,t+.28,Re.spring-.3,s,Wt),bn(e,t-.28-.06,0,i,t+.28+.06,.32,r+n*(.16+.05),Wt),bn(e,t-.28-.05,Re.spring-.3,i,t+.28+.05,Re.spring-.1,r+n*(.16+.05),Wt),bn(e,t-.28-.1,Re.spring-.1,i,t+.28+.1,Re.spring,r+n*(.16+.1),Wt)}function Vb(e,t){let r=Ti(Re.zc),n=[[0,r-.13,1],[.05,r-.125],[.12,r-.1],[.16,r-.06,1],[.22,r-.05],[.3,r-.075],[.4,r-.06],[.48,r-.03,1],[.55,r-.035],[.7,r-.025],[.82,r-.012,1],[.95,r+.03]];e.lathe(n,t,Re.zc,48,{mat:()=>Bo});for(let o=0;o<8;o++){let a=o*Math.PI/4,i=t+Math.cos(a)*.32,s=Re.zc+Math.sin(a)*.32;e.save(),e.translate(i,r-.07,s),e.rotateY(-a),e.curMat=Bo,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function Xb(e){e.curMat=Wt;for(let[t,r]of[[Re.z0,1],[Re.z1,-1]])bn(e,14.35,Re.spring-.12,t,Re.x1,Re.spring,t+r*.1,Wt),bn(e,14.35,Re.spring-.04,t,Re.x1,Re.spring+.05,t+r*.18,Wt);for(let[t,r]of[[Re.z0,1],[Re.z1,-1]])bn(e,14.35,0,t,Re.x1,.42,t+r*.12,Wt),bn(e,14.35,.42,t,Re.x1,.5,t+r*.07,Wt);for(let t of n1)r1(e,t,.24,.16),j0(e,t,Re.z0,1),j0(e,t,Re.z1,-1);for(let t of[14.35+.28,Re.x1-.28])r1(e,t,.28,.22),j0(e,t,Re.z0,1),j0(e,t,Re.z1,-1);for(let t of Zn)Vb(e,t)}function Yb(e){let t=Re.z1+sr,r=t-.04,n=t+.04,o=(s,c,l,u)=>bn(e,s,c,r,l,u,n,Es),a=et.halfW,i=(s,c,l,u,v,h)=>{let p=(m,d,g)=>[s+d*Math.cos(m),et.spring+d*Math.sin(m),g];for(let m=0;m<h;m++){let d=u+(v-u)*m/h,g=u+(v-u)*(m+1)/h;$r(e,p(d,c,r),p(g,c,r),p(g,l,r),p(d,l,r),[0,0,-1],Es),$r(e,p(d,l,n),p(g,l,n),p(g,c,n),p(d,c,n),[0,0,1],Es)}};for(let s of Zn){let c=s-a,l=s+a;o(c,et.sill,c+.07,et.spring),o(l-.07,et.sill,l,et.spring),o(c,et.sill,l,et.sill+.07),o(c,et.spring-.04,l,et.spring+.04);for(let v of[-.5,0,.5])o(s+v*a-.022,et.sill,s+v*a+.022,et.spring);let u=6;for(let v=1;v<u;v++){let h=et.sill+(et.spring-et.sill)*v/u;o(c,h-.02,l,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let v=1;v<6;v++){let h=Math.PI*v/6,p=Math.cos(h),m=Math.sin(h),d=.02,g=(x,_)=>[s+p*x-m*d*_,et.spring+m*x+p*d*_];$r(e,[...g(.44,-1),r],[...g(a-.05,-1),r],[...g(a-.05,1),r],[...g(.44,1),r],[0,0,-1],Es),$r(e,[...g(.44,1),n],[...g(a-.05,1),n],[...g(a-.05,-1),n],[...g(.44,-1),n],[0,0,1],Es)}}}function Kb(){let e=[],t=Re.z1+sr;for(let r of Zn){let n=r-et.halfW,o=r+et.halfW;e.push([n,et.sill,t],[o,et.sill,t],[o,et.spring,t],[n,et.sill,t],[o,et.spring,t],[n,et.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([r,et.spring,t],[r+et.halfW*Math.cos(i),et.spring+et.halfW*Math.sin(i),t],[r+et.halfW*Math.cos(s),et.spring+et.halfW*Math.sin(s),t])}}return e}function o1(e,t){e.save(),e.translate(Re.x1+sr,0,Re.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function Qb(e){o1(e,()=>{Ai.addSurround(e),Ai.addFrames(e,"fixed")})}function Zb(e){return Ai.glassPanes(e||"fixed").map(([r,n,o])=>[Re.x1+sr-o,n,Re.zc-7+r])}function Jb(e){Wb(e),Xb(e),Yb(e),Qb(e),e.curMat=[0,0,0]}var e3={x:Re.x1+sr,zLo:Re.zc-Ai.DOOR.r,zHi:Re.zc+Ai.DOOR.r},Lt=e=>e.toFixed(4);function t3(){return`
	const vec3 WIN_SKY = vec3(0.0, 0.58, 0.81);

	float winBar(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the window wall is at (x, y) on its plane, 0..1
	float winOpen(vec2 q, float soft) {
		float k = floor((q.x - ${Lt(et.first)}) / ${Lt(et.pitch)} + 0.5);
		if (k < 0.0 || k > ${Lt(et.count-1)}) return 0.0;
		float dx = q.x - (${Lt(et.first)} + k * ${Lt(et.pitch)});
		float side = 1.0 - smoothstep(${Lt(et.halfW)} - soft, ${Lt(et.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Lt(et.sill)} - soft, ${Lt(et.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Lt(et.spring)}));
		float head = q.y < ${Lt(et.spring)} ? 1.0 : 1.0 - smoothstep(${Lt(et.halfW)} - soft, ${Lt(et.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Lt(et.halfW*.5)}), 0.022, soft));
		float rowH = ${Lt((et.spring-et.sill)/6)};
		float ry = (q.y - ${Lt(et.sill)}) / rowH;
		cover = max(cover, q.y < ${Lt(et.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Lt(et.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Lt(Re.x0)} || p.z < ${Lt(Re.z0-.1)} || p.z > ${Lt(Re.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Lt(Re.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Lt(Re.z1+2*sr)} - p.z) / WIN_SKY.z;
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
		${W0.map(e=>`{ float d = abs(p.x - ${Lt(e)}); if (d < best) { best = d; lamp = vec3(${Lt(e)}, ${Lt(yn.spring+.55)}, ${Lt(Re.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Lt(Re.z0+1.6)} || p.z < ${Lt(Re.z0-yn.r-.1)} || p.x < ${Lt(Re.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Lt(yn.r)}, ${Lt(yn.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Lt(Re.x0-1)}) return 0.0;
		float inC = smoothstep(${Lt(Re.z0-1.5)}, ${Lt(Re.z0)}, p.z) * smoothstep(${Lt(Re.x0-1)}, ${Lt(Re.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Lt(Re.z0)}, ${Lt(Re.z1)}, p.z);
		return inC * near;
	}`}a1.exports={wallWithHoles:Ms,windowLightGLSL:t3,addWing:Jb,windowGlass:Kb,farDoorGlass:Zb,atFarDoor:o1,FAR_DOOR:e3,vaultY:Ti,C:Re,NICHE_X:W0,NICHE:yn,NICHE_PLINTH_TOP:Bb,NICHE_STATUE_Z:jb,WIN:et,winCentres:Zn,piers:n1,PAINTING_X:Hb,HEIGHT:ef}});var Jn=he((j6,c1)=>{"use strict";var rf=hn(),rr=8,Li=.35,Sa=14,ki=4,De={x0:Sa+Li,x1:Sa+Li+2*ki,z0:5.9-ki,z1:5.9+ki,zc:5.9,cx:Sa+Li+ki,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:rr},oculus:3.3};De.domeTop=De.dome.base+De.dome.r;var zi={spokes:16,ringE:[.42,.95],bar:.035},Pr={sxz:1.32,sy:1.6,yaw:.6};Pr.crownC=[De.cx,.4+3.4*Pr.sy,De.zc];Pr.crownR=[2.3*Pr.sxz,1.9*Pr.sy,2.3*Pr.sxz];Pr.trunkR=.26*Pr.sxz;Pr.trunkTop=.4+2.2*Pr.sy;var i1={inner:1.05,outer:1.62,seat:.48,soil:.4},Y0=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(r=>r/t)})(),qr=[0,0,0],Si=[11,0,0],V0=[10,0,0],X0=[9,0,0],r3=[5,0,0],nf=[3,0,0];function Ao(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),u=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,u)}function un(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}var n3=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function o3(e){e.save(),e.translate(Sa+Li,0,0),e.rotateY(-Math.PI/2),rf.wallWithHoles(e,{u0:0,u1:rf.C.z0,w0:0,w1:2*Li,top:()=>rr,holes:[{u0:De.zc-De.arch.r,u1:De.zc+De.arch.r,bottom:0,head:n3(De.zc,De.arch.r,De.arch.spring),step:.05}],mat:Si,revealMat:qr,topStep:1}),e.restore();let t=Sa-Li;for(let[i,s]of[[0,De.zc-De.arch.r],[De.zc+De.arch.r,rf.C.z0]])un(e,t-.12,0,i,t,.42,s,qr),un(e,t-.07,.42,i,t,.5,s,qr);let r=t,n=.24,o=40,a=(i,s,c)=>[c,De.arch.spring+Math.sin(i)*s,De.zc+Math.cos(i)*s];for(let i=0;i<o;i++){let s=Math.PI*i/o,c=Math.PI*(i+1)/o;Ao(e,a(s,De.arch.r,r-.07),a(c,De.arch.r,r-.07),a(c,De.arch.r+n,r-.07),a(s,De.arch.r+n,r-.07),[-1,0,0],qr),Ao(e,a(s,De.arch.r+n,r),a(c,De.arch.r+n,r),a(c,De.arch.r+n,r-.07),a(s,De.arch.r+n,r-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],qr),Ao(e,a(s,De.arch.r,r),a(c,De.arch.r,r),a(c,De.arch.r,r-.07),a(s,De.arch.r,r-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],qr)}un(e,r-.12,De.arch.spring+De.arch.r-.06,De.zc-.17,r,De.arch.spring+De.arch.r+n+.16,De.zc+.17,qr);for(let i of[-1,1]){let s=De.zc+i*De.arch.r,c=De.zc+i*(De.arch.r+n);un(e,r-.07,0,s,r,De.arch.spring,c,qr),un(e,r-.13,De.arch.spring-.16,s-i*.03,r,De.arch.spring,c+i*.08,qr),un(e,r-.12,0,s-i*.03,r,.5,c+i*.06,qr)}}function a3(e){let{x0:t,x1:r,z0:n,z1:o}=De;Ao(e,[Sa,0,n],[r,0,n],[r,0,o],[Sa,0,o],[0,1,0],qr),e.curMat=Si,Ao(e,[r,0,n],[r,0,o],[r,rr,o],[r,rr,n],[-1,0,0],Si),Ao(e,[t,0,n],[r,0,n],[r,rr,n],[t,rr,n],[0,0,1],Si),Ao(e,[r,0,o],[t,0,o],[t,rr,o],[r,rr,o],[0,0,-1],Si),Ao(e,[t,0,o],[t,0,n],[t,rr,n],[t,rr,o],[1,0,0],Si),un(e,r-.12,0,n,r,.42,o,qr),un(e,t,0,n,r,.42,n+.12,qr),un(e,t,0,o-.12,r,.42,o,qr),un(e,r-.2,rr-.3,n,r,rr,o,qr),un(e,t,rr-.3,n,r,rr,n+.2,qr),un(e,t,rr-.3,o-.2,r,rr,o,qr),un(e,t,rr-.3,n,t+.2,rr,o,qr);let a=De.dome.r,i=48,s=[];for(let x=0;x<=i;x++){let _=Math.PI*2*x/i;s.push([De.cx+Math.cos(_)*a,De.zc+Math.sin(_)*a])}let c=x=>{let _=Math.abs(Math.cos(x)),A=Math.abs(Math.sin(x));return Math.min(ki/Math.max(_,1e-6),ki/Math.max(A,1e-6))};for(let x=0;x<i;x++){let _=Math.PI*2*x/i,A=Math.PI*2*(x+1)/i,z=c(_),I=c(A),N=[De.cx+Math.cos(_)*z,rr,De.zc+Math.sin(_)*z],q=[De.cx+Math.cos(A)*I,rr,De.zc+Math.sin(A)*I];Ao(e,[s[x][0],rr,s[x][1]],[s[x+1][0],rr,s[x+1][1]],q,N,[0,-1,0],V0)}e.lathe([[a+.02,rr-.18,1],[a-.12,rr-.18,1],[a-.12,rr-.06,1],[a-.05,rr,1],[a,rr+.02]],De.cx,De.zc,i,{mat:()=>qr});let l=16,u=(x,_,A)=>[De.cx+Math.cos(x)*Math.cos(_)*A,De.dome.base+Math.sin(_)*A,De.zc+Math.sin(x)*Math.cos(_)*A],v=Math.PI/2;for(let x=0;x<i;x++)for(let _=0;_<l;_++){let A=Math.PI*2*x/i,z=Math.PI*2*(x+1)/i,I=v*_/l,N=v*(_+1)/l,q=(j,ce)=>[-Math.cos(j)*Math.cos(ce),-Math.sin(ce),-Math.sin(j)*Math.cos(ce)],J=[e.vert(u(A,I,a),q(A,I),X0),e.vert(u(z,I,a),q(z,I),X0),e.vert(u(z,N,a),q(z,N),X0),e.vert(u(A,N,a),q(A,N),X0)];e.tri(J[0],J[1],J[2]),e.tri(J[0],J[2],J[3])}for(let x=0;x<zi.spokes;x++){let _=Math.PI*2*x/zi.spokes,A=[];for(let z=0;z<=14;z++)A.push(u(_,(v-.06)*z/14,a-.04));e.tube(A,()=>.04,20,6,{mat:()=>V0})}for(let x of zi.ringE){let _=Math.cos(x)*(a-.04),A=De.dome.base+Math.sin(x)*(a-.04),z=[];for(let I=0;I<=72;I++){let N=Math.PI*2*I/72;z.push([De.cx+Math.cos(N)*_,A,De.zc+Math.sin(N)*_])}e.tube(z,()=>.035,72,6,{mat:()=>V0})}e.ellipsoid([De.cx,De.dome.base+a-.06,De.zc],[.16,.08,.16],6,12,{mat:()=>V0});let h=.46,p=.55,m=.12,d=(x,_,A,z)=>{un(e,x,h-.08,_,A,h,z,nf);let I=A-x>z-_?[x+.25,A-.25]:[x+.06,A-.06],N=A-x>z-_?[_+.06,z-.06]:[_+.25,z-.25];un(e,I[0],0,N[0],I[1],h-.08,N[1],nf)};d(r-m-p,n+1.1,r-m,o-1.1),d(t+1,n+m,r-1.1,n+m+p),d(t+1,o-m-p,r-1.1,o-m);let g=i1;e.lathe([[g.outer,0,1],[g.outer,g.seat-.1,1],[g.outer+.07,g.seat-.07,1],[g.outer+.07,g.seat,1],[g.inner-.05,g.seat,1],[g.inner-.05,g.seat-.06,1],[g.inner,g.seat-.08,1],[g.inner,g.soil]],De.cx,De.zc,64,{mat:()=>nf}),e.lathe([[g.inner,g.soil,1],[0,g.soil+.03]],De.cx,De.zc,48,{mat:()=>r3})}function i3(e){o3(e),a3(e),e.curMat=[0,0,0]}var Vt=e=>e.toFixed(4);function s1(){let e=De.dome.r,t=zi.ringE.map(r=>Math.cos(r)*e);return`
	const vec3 SHAFT = vec3(${Vt(Y0[0])}, ${Vt(Y0[1])}, ${Vt(Y0[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Vt(De.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Vt(De.cx)}, ${Vt(De.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Vt(e-.15)} - soft, ${Vt(e-.15)} + soft, d);
		float hw = ${Vt(zi.bar)};
		float cover = 0.0;
		${t.map(r=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Vt(r)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Vt(Math.PI*2/zi.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Vt(Pr.crownC[0])}, ${Vt(Pr.crownC[1])}, ${Vt(Pr.crownC[2])});
		vec3 r = vec3(${Vt(Pr.crownR[0])}, ${Vt(Pr.crownR[1])}, ${Vt(Pr.crownR[2])});
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
		float tt = (${Vt(Pr.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Vt(De.cx)}, ${Vt(De.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Vt(Pr.trunkR*.7)}, ${Vt(Pr.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function s3(){return`
	${s1()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Vt(De.x0-.75)} || p.z < ${Vt(De.z0-.5)} || p.z > ${Vt(De.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Vt(De.x0-1.5)} || p.z < ${Vt(De.z0-1.5)} || p.z > ${Vt(De.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Vt(De.x0-1.2)}, ${Vt(De.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Vt(De.cx)}, ${Vt(De.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}c1.exports={addAlcove:i3,alcoveLightGLSL:s3,oculusGLSL:s1,A:De,BENCH:i1,SHAFT:Y0,TREE:Pr}});var x1=he((W6,g1)=>{"use strict";var c3=_a(),{addFlutedColumn:l1,addStatue:l3,addPlant:f3}=Bd(),f1=Ea(),h3=Mi(),eo=hn(),u3=Jn(),zt=14,vr=eo.C.hallEnd+.35,er=8,Xt=.35,of=1.15,af=1.15,sf=[18,29,40],d3=[[[0,0],[0,vr]],[[zt,vr],[zt,0]],[[0,0],[zt,0]],[[zt,vr],[0,vr]]],p1=[];for(let e of sf)for(let t of[1.25,zt-1.25]){let r=of/2,n=af/2;p1.push([[t-r,e-n],[t+r,e-n]],[[t+r,e-n],[t+r,e+n]],[[t+r,e+n],[t-r,e+n]],[[t-r,e+n],[t-r,e-n]])}var K0=12,m1=2.95,v1=.62,J0=m1+v1,Q0=[{file:"venus.bin",x:1.85,z:vr-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:zt-2.1,z:vr-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:eo.NICHE_X[0],z:eo.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:eo.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:eo.NICHE_X[1],z:eo.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:eo.NICHE_PLINTH_TOP,mat:3}],p3={x0:Xt,x1:3.15,z0:3.6,z1:8.2,top:1},h1=.8,ec=1.17,As=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{As.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),As.push({x:zt-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function cf(e,t,r,n){return[[[e-r,t-n],[e+r,t-n]],[[e+r,t-n],[e+r,t+n]],[[e+r,t+n],[e-r,t+n]],[[e-r,t+n],[e-r,t-n]]]}var tc=[];for(let e of[-1,1])tc.push(...cf(zt/2+e*J0,K0,.85,.85));for(let e of Q0.filter(t=>t.pedestal))tc.push(...cf(e.x,e.z,ec*1.1,ec*1.1));for(let e of As)tc.push(...cf(e.x,e.z,.42,.42));var m3=d3.concat(p1,tc);function v3(e){let r=new Map,n=(o,a,i)=>{let s=o+":"+a;r.has(s)||r.set(s,[]);let c=r.get(s);c.includes(i)||c.push(i)};for(let o of e){let a=Math.floor(Math.min(o[0][0],o[1][0])/4)-1,i=Math.floor(Math.max(o[0][0],o[1][0])/4)+1,s=Math.floor(Math.min(o[0][1],o[1][1])/4)-1,c=Math.floor(Math.max(o[0][1],o[1][1])/4)+1;for(let l=a;l<=i;l++)for(let u=s;u<=c;u++)n(l,u,o)}return{get(o,a){let i=Math.floor(o/4),s=Math.floor(a/4),c=[];for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++){let v=r.get(i+l+":"+(s+u));v&&c.push(...v)}return[...new Set(c)]}}}var Z0=[],Mr={curMat:[0,0,0]};function lf(e,t,r,n,o,a,i){let s=e.length/3;e.push(...r,...n,...o,...a),t.push(...i,...i,...i,...i);let c=Mr.curMat;return Z0.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function Ht(e,t,r,n,o,a,i,s,c){let l=(u,v,h,p,m)=>{r.push(...lf(e,t,u,v,h,p,m))};l([n,o,a],[i,o,a],[n,s,a],[i,s,a],[0,0,-1]),l([i,o,c],[n,o,c],[i,s,c],[n,s,c],[0,0,1]),l([n,o,c],[n,o,a],[n,s,c],[n,s,a],[-1,0,0]),l([i,o,a],[i,o,c],[i,s,a],[i,s,c],[1,0,0]),l([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),l([n,o,c],[i,o,c],[n,o,a],[i,o,a],[0,-1,0])}function Ci(e,t,r,n,o){let a=Mr,i=a.vert(e,o),s=a.vert(t,o),c=a.vert(r,o),l=a.vert(n,o);a.tri(i,s,c),a.tri(s,l,c)}function u1(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,u=Math.cos(c),v=Math.sin(c),h=Math.cos(l),p=Math.sin(l),m=[e+r*u,t+r*v],d=[e+r*h,t+r*p],g=[e+n*u,t+n*v],x=[e+n*h,t+n*p];Ci([m[0],m[1],o],[d[0],d[1],o],[g[0],g[1],o],[x[0],x[1],o],[0,0,-1]),Ci([m[0],m[1],a],[d[0],d[1],a],[g[0],g[1],a],[x[0],x[1],a],[0,0,1]);let _=(c+l)/2;Ci([m[0],m[1],o],[d[0],d[1],o],[m[0],m[1],a],[d[0],d[1],a],[-Math.cos(_),-Math.sin(_),0]),Ci([g[0],g[1],o],[x[0],x[1],o],[g[0],g[1],a],[x[0],x[1],a],[Math.cos(_),Math.sin(_),0])}}function g3(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,u=e+r*Math.cos(c),v=t+r*Math.sin(c),h=e+r*Math.cos(l),p=t+r*Math.sin(l);Ci([u,v,o],[h,p,o],[u,n,o],[h,n,o],[0,0,-1]),Ci([u,v,a],[h,p,a],[u,n,a],[h,n,a],[0,0,1])}}function x3(e,t,r,n){let o=zt/2,a=m1,i=3,s=a+.42,c=s+.15,l=v1,u=J0,v=5.98,h=n-.45,p=n+.45,m=64,d=l1(Mr,o-u,n,0,v,l);l1(Mr,o+u,n,0,v,l),Mr.curMat=[0,0,0],u1(o,i,a,s,h,p,m),u1(o,i,s,c,h-.07,p+.07,m),g3(o,i,c,d+.05,h,p,m);for(let x of[-1,1]){let _=o+x*(c-.02),A=o+x*u;Ht(e,t,r,Math.min(_,A),i,h,Math.max(_,A),d+.05,p)}for(let x of[-1,1]){let _=o+x*(a-.05),A=o+x*(a+.85);Ht(e,t,r,Math.min(_,A),i-.16,n-.6,Math.max(_,A),i,n+.6)}let g=u+l*1.42+.45;Ht(e,t,r,o-g,d,n-.7,o+g,d+.44,n+.7),Ht(e,t,r,o-g+.12,d+.44,n-.62,o+g-.12,d+.7,n+.62),Ht(e,t,r,o-g-.1,d+.7,n-.84,o+g+.1,d+.84,n+.84),Ht(e,t,r,o-g-.22,d+.84,n-.96,o+g+.22,d+1,n+.96),Ht(e,t,r,o-.3,i+a-.1,n-.56,o+.3,d,n+.56)}function d1(e,t,r,n,o){Ht(e,t,r,n-.72,0,o-.72,n+.72,.2,o+.72),Ht(e,t,r,n-.58,.2,o-.58,n+.58,.4,o+.58),Ht(e,t,r,n-of/2,.4,o-af/2,n+of/2,er-1.35,o+af/2),Ht(e,t,r,n-.67,.42,o-.67,n+.67,.62,o+.67),Ht(e,t,r,n-.67,er-1.58,o-.67,n+.67,er-1.35,o+.67),Ht(e,t,r,n-.82,er-1.35,o-.82,n+.82,er-1.05,o+.82),Ht(e,t,r,n-.66,er-1.05,o-.66,n+.66,er-.78,o+.66),Ht(e,t,r,n-.92,er-.78,o-.92,n+.92,er-.55,o+.92),Ht(e,t,r,n-.78,er-.55,o-.78,n+.78,er-.3,o+.78),Ht(e,t,r,n-.92,er-.3,o-.92,n+.92,er-.1,o+.92)}function Ts(e,t,r,n,o){o==="left"?(Ht(e,t,r,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Ht(e,t,r,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Ht(e,t,r,zt-.14,1,n-3.8/2,zt+.08,5.7,n+3.8/2),Ht(e,t,r,zt-.18,1+.18,n-3.8/2+.18,zt+.08+.04,5.7-.18,n+3.8/2-.18))}function y3(e,t,r,n){Ht(e,t,r,.65,er-.16,n-1.65,.65+.22,er,n+1.65),Ht(e,t,r,zt-.65-.22,er-.16,n-1.65,zt-.65,er,n+1.65),Ht(e,t,r,.65,er-.16,n-1.65,zt-.65,er,n-1.43),Ht(e,t,r,.65,er-.16,n+1.43,zt-.65,er,n+1.65),r.push(...lf(e,t,[.65+.22,er-.16,n-1.43],[zt-.65-.22,er-.16,n-1.43],[.65+.22,er-.16,n+1.43],[zt-.65-.22,er-.16,n+1.43],[0,-1,0]))}g1.exports=function(){let e=[],t=[],r=[];Z0=[],Mr=c3.createBuilder(e,t,r,Z0),r.push(...lf(e,t,[0,0,0],[zt,0,0],[0,0,vr],[zt,0,vr],[0,1,0])),h3.addSkylight(Mr,[0,0,0],vr),Mr.curMat=[0,0,0],Ht(e,t,r,-Xt,0,0,Xt,er,vr),Ht(e,t,r,zt-Xt,0,eo.C.z1,zt+Xt,er,vr-Xt),Ht(e,t,r,zt-Xt-.12,0,eo.C.z1+2*Xt,zt-Xt,.42,vr-Xt),Ht(e,t,r,zt-Xt-.07,.42,eo.C.z1+2*Xt,zt-Xt,.5,vr-Xt),Ht(e,t,r,Xt,0,0,Xt+.12,.42,vr-Xt),Ht(e,t,r,Xt,.42,0,Xt+.07,.5,vr-Xt),Ht(e,t,r,Xt,0,vr-Xt-.12,zt-Xt,.42,vr-Xt),Ht(e,t,r,Xt,.42,vr-Xt-.07,zt-Xt,.5,vr-Xt),f1.addEntranceWall(Mr),f1.addFrames(Mr),Mr.curMat=[0,0,0],Ht(e,t,r,-Xt,0,vr-Xt,zt+Xt,er,vr+Xt),x3(e,t,r,K0);for(let c of sf)d1(e,t,r,1.25,c),d1(e,t,r,zt-1.25,c);Ts(e,t,r,22,"left"),Ts(e,t,r,25,"right"),Ts(e,t,r,33,"left"),Ts(e,t,r,36,"right"),Ts(e,t,r,43,"left");let n=[4,9,34,39,44,49];for(let c of n)y3(e,t,r,c);eo.addWing(Mr),Mr.curMat=[0,0,0];for(let c of Q0.filter(l=>l.pedestal))l3(Mr,c.x,c.z,ec,h1);{let c=p3;Mr.curMat=[0,0,0],Mr.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Mr.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Mr.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Mr.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}u3.addAlcove(Mr);for(let c of As)f3(Mr,c.x,c.z,c.seed,1,c.away);Mr.curMat=[0,0,0];let o=[[[zt,vr-.35],[0,vr-.35]],[[0,3],[0,10]],[[zt,15],[zt,22]],[[0,24],[0,31]],[[zt,33],[zt,40]],[[0,41],[0,46]]],a=v3(m3),i=(c,l)=>{let u=0,v=1/0;return o.forEach((h,p)=>{let m=(h[0][0]+h[1][0])/2,d=(h[0][1]+h[1][1])/2,g=Math.hypot(c-m,l-d);g<v&&(v=g,u=p)}),u},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:o,lights:s,statues:Q0,occluders:[...sf.flatMap(c=>[[1.25,c,.78],[zt-1.25,c,.78]]),[zt/2-J0,K0,.86],[zt/2+J0,K0,.86],...Q0.filter(c=>c.pedestal).map(c=>[c.x,c.z,ec*1.12]),...As.map(c=>[c.x,c.z,.34])],pedestalTop:h1,mat:Z0,getAreaIndex:i,getGridSegments:(c,l)=>a.get(c,l),getGridParts:(c,l)=>a.get(c,l),position:e,normal:t,elements:r}}});var dn=he((V6,w1)=>{"use strict";var b1="gallery-light",Dn=0;try{let e=location.search;/[?&]night\b/.test(e)?Dn=1:/[?&]day\b/.test(e)?Dn=0:localStorage.getItem(b1)==="night"&&(Dn=1)}catch(e){}var jo=Dn,ff=0,y1=[],rc={tick(e){let t=ff?Math.min(.1,e-ff):0;if(ff=e,jo!==Dn){let r=t/2.4;jo=Dn>jo?Math.min(Dn,jo+r):Math.max(Dn,jo-r)}return rc.night},get night(){return jo*jo*(3-2*jo)},get isNight(){return Dn===1},set(e){Dn=e?1:0;try{localStorage.setItem(b1,e?"night":"day")}catch(t){}y1.forEach(t=>t(Dn))},toggle(){rc.set(!Dn)},onChange(e){y1.push(e)}};rc.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;w1.exports=rc});var Ri=he((X6,Ls)=>{"use strict";var hf=dn(),{C:uf}=hn(),{A:nc,BENCH:Ss}=Jn(),Nr=Math.PI,b3=[18,29,40],oc=.575,Wo=[],ks=(e,t,r,n,o,a,i)=>Wo.push(Object.assign({x:e,y:t,z:r,o:n,back:o,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));b3.forEach(e=>{ks(1.25+oc+.48,3.25,e,[1,0],.48,oc,{s:1.2}),ks(12.75-oc-.48,3.25,e,[-1,0],.48,oc,{s:1.2})});[3,11].forEach(e=>ks(e,3.45,uf.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var w3=[14.63,19.63,24.03,28.43,32.83,uf.x1-.28];w3.forEach(e=>ks(e,3.15,uf.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>ks(.35+.44,2.75,e,[1,0],.44,99));{let e=(Ss.inner+Ss.outer)/2,t=Math.atan2(-1.12,-.98);Wo.push({x:nc.cx+Math.cos(t)*e,y:Ss.seat+.155,z:nc.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[nc.cx,nc.zc,Ss.outer+.07,Ss.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var df=.13,ac=.21,Hr=df/Math.cos(Nr/6),Ut=e=>e.toFixed(4);function _1(e){let r=(e||Wo.map((n,o)=>o)).map(n=>{let o=Wo[n],a=-o.o[1],i=o.o[0],s=o.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Ut(o.ring[3]-.03)}) {
					float tt = ${Ut(o.y-o.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Ut(o.x)}, ${Ut(o.z)}) + D.xz * tt - vec2(${Ut(o.ring[0])}, ${Ut(o.ring[1])});
					T *= smoothstep(${Ut(o.ring[2]-.02)}, ${Ut(o.ring[2]+.12)}, length(hit));
				}`:"",c=o.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Ut(o.o[0])}, ${Ut(o.o[1])}));
					if (behind > ${Ut(o.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Ut(a)}, ${Ut(i)}))) * ${Ut(o.back)} / behind;
						T *= smoothstep(${Ut(o.hw-.04)}, ${Ut(o.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Ut(o.x)}, ${Ut(o.y)}, ${Ut(o.z)});
				float d2 = dot(D, D);
				if (d2 < ${Ut(o.range*o.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Ut(Math.cos(Math.atan2(o.o[1],o.o[0])))}, s = ${Ut(Math.sin(Math.atan2(o.o[1],o.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Ut(n*1.7)}) + 0.04 * sin(time * 15.3 + ${Ut(n*2.9)}) * sin(time * 1.9 + ${Ut(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Ut(1/(o.s*o.s))}) * (1.0 - smoothstep(${Ut(o.range*.6)}, ${Ut(o.range)}, d));
					sum += ${Ut(o.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Ut(Nr/6)}, ${Ut(Nr/3)}) - ${Ut(Nr/6)};
		float U = tan(t) / ${Ut(Math.tan(Nr/6))};
		float V = (q.y / h) * (${Ut(df/ac)} / cos(t));
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
	}`}var cr=0,_3=1;function E3(){let e=[],t=[],r=[],n=[],o=[],a=(p,m,d,g)=>(e.push(p[0],p[1],p[2]),t.push(m[0],m[1],m[2]),r.push(d),n.push(g?g[0]:0,g?g[1]:0),e.length/3-1),i=(p,m)=>[p[0]-m[0],p[1]-m[1],p[2]-m[2]],s=(p,m)=>[p[1]*m[2]-p[2]*m[1],p[2]*m[0]-p[0]*m[2],p[0]*m[1]-p[1]*m[0]],c=p=>{let m=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/m,p[1]/m,p[2]/m]};function l(p,m,d,g,x,_){let A=c(s(i(m,p),i(g,p))),z=a(p,A,x,[0,0]),I=a(m,A,x,[1,0]),N=a(d,A,x,[1,1]),q=a(g,A,x,[0,1]);o.push(z,I,N,z,N,q),_&&o.push(z,N,I,z,q,N)}function u(p,m,d){for(let _=0;_<p.length;_++){let A=p[Math.max(0,_-1)],z=p[Math.min(p.length-1,_+1)],I=c(i(z,A)),N=Math.abs(I[1])>.9?[1,0,0]:[0,1,0],q=c(s(I,N)),J=s(q,I),j=typeof m=="function"?m(_/(p.length-1)):m;for(let ce=0;ce<=6;ce++){let Z=ce/6*Nr*2,ue=Math.cos(Z),le=Math.sin(Z),fe=[q[0]*ue+J[0]*le,q[1]*ue+J[1]*le,q[2]*ue+J[2]*le];a([p[_][0]+fe[0]*j,p[_][1]+fe[1]*j,p[_][2]+fe[2]*j],fe,d)}}let x=e.length/3-p.length*7;for(let _=0;_<p.length-1;_++)for(let A=0;A<6;A++){let z=x+_*7+A,I=z+6+1;o.push(z,I,z+1,z+1,I,I+1)}}function v(p,m,d,g,x,_,A,z,I){let N=(q,J,j)=>{let ce=_+Nr/6+j*Nr/3;return[p[0]+Math.cos(ce)*q,J,p[2]+Math.sin(ce)*q]};for(let q=0;q<6;q++)l(N(g,m,q+1),N(g,m,q),N(x,d,q),N(x,d,q+1),A);if(z&&x>0)for(let q=0;q<6;q++){let J=a([p[0],d,p[2]],[0,1,0],A),j=a(N(x,d,q),[0,1,0],A),ce=a(N(x,d,q+1),[0,1,0],A);o.push(J,ce,j)}if(I&&g>0)for(let q=0;q<6;q++){let J=a([p[0],m,p[2]],[0,-1,0],A),j=a(N(g,m,q),[0,-1,0],A),ce=a(N(g,m,q+1),[0,-1,0],A);o.push(J,j,ce)}}function h(p,m,d,g,x,_,A){let z=[];for(let N=0;N<=18;N++){let q=N/18,J=(A||0)+q*g*Nr*2,j=d*(1-.75*q);z.push([p[0]+m[0]*Math.cos(J)*j,p[1]+Math.sin(J)*j,p[2]+m[2]*Math.cos(J)*j])}u(z,x,_)}return Wo.forEach(p=>{let m=p.s,d=Math.atan2(p.o[1],p.o[0]),g=[p.x,p.y,p.z],x=(z,I,N)=>[p.x+p.o[0]*z-p.o[1]*(N||0),p.y+I,p.z+p.o[1]*z+p.o[0]*(N||0)],_=p.y-ac*m,A=p.y+ac*m;for(let z=0;z<6;z++){let I=d+Nr/6+z*Nr/3,N=I+Nr/3,q=Hr*m*.97,J=[p.x+Math.cos(I)*q,_,p.z+Math.sin(I)*q],j=[p.x+Math.cos(N)*q,_,p.z+Math.sin(N)*q];l(j,J,[J[0],A,J[2]],[j[0],A,j[2]],_3,!0)}for(let z=0;z<6;z++){let I=d+Nr/6+z*Nr/3,N=Hr*m;u([[p.x+Math.cos(I)*N,_-.02*m,p.z+Math.sin(I)*N],[p.x+Math.cos(I)*N,A+.02*m,p.z+Math.sin(I)*N]],.011*m,cr)}v(g,_-.035*m,_,Hr*m*1.12,Hr*m*1.12,d,cr,!0,!0),v(g,_-.1*m,_-.035*m,Hr*m*.55,Hr*m*1,d,cr,!1,!0),v(g,_-.17*m,_-.1*m,0,Hr*m*.55,d,cr,!1,!1);for(let z=0;z<6;z++){let I=d+z*Nr/3,N=df*m*1.06,q=[p.x+Math.cos(I)*N,_-.06*m,p.z+Math.sin(I)*N];h(q,[-Math.sin(I),0,Math.cos(I)],.03*m,.85,.004*m,cr,.3)}v(g,A,A+.03*m,Hr*m*1.14,Hr*m*1.14,d,cr,!1,!0),v(g,A+.03*m,A+.2*m,Hr*m*1.14,Hr*m*.32,d,cr,!1,!1),v(g,A+.2*m,A+.27*m,Hr*m*.34,Hr*m*.34,d,cr,!1,!1),v(g,A+.27*m,A+.37*m,Hr*m*.42,0,d,cr,!1,!0),u([[p.x,A+.36*m,p.z],[p.x,A+.47*m,p.z]],z=>.01*m*(1-.7*z),cr),v([p.x,0,p.z],A+.44*m,A+.47*m,.018*m,0,d,cr,!1,!0);for(let z=0;z<6;z++){let I=d+Nr/6+z*Nr/3,N=Hr*m*1.14,q=[p.x+Math.cos(I)*N,A+.03*m,p.z+Math.sin(I)*N];u([q,[q[0],q[1]+.09*m,q[2]]],J=>.008*m*(1-.8*J),cr),v([q[0],0,q[2]],q[1]+.035*m,q[1]+.06*m,.014*m,.014*m,I,cr,!0,!0)}if(p.mount==="wall"){let z=p.back,I=_-.32,N=x(-z,0,0);((Z,ue,le)=>{let fe=[p.o[0],0,p.o[1]],Me=[-p.o[1],0,p.o[0]],Ge=(Gt,Rt,Qt)=>[N[0]+Me[0]*Gt+fe[0]*Qt,Rt,N[2]+Me[2]*Gt+fe[2]*Qt],je=.03,Be=.065;l(Ge(-le,Z,Be),Ge(le,Z,Be),Ge(le,ue,Be),Ge(-le,ue,Be),cr,!0),l(Ge(le,Z,je),Ge(le,Z,Be),Ge(le,ue,Be),Ge(le,ue,je),cr,!0),l(Ge(-le,Z,Be),Ge(-le,Z,je),Ge(-le,ue,je),Ge(-le,ue,Be),cr,!0),l(Ge(-le,ue,Be),Ge(le,ue,Be),Ge(le,ue,je),Ge(-le,ue,je),cr,!0),l(Ge(-le,Z,je),Ge(le,Z,je),Ge(le,Z,Be),Ge(-le,Z,Be),cr,!0),v([N[0]+fe[0]*Be,0,N[2]+fe[2]*Be],ue,ue+.05,le*.6,0,d,cr,!1,!0),v([N[0]+fe[0]*Be,0,N[2]+fe[2]*Be],Z-.05,Z,0,le*.6,d,cr,!1,!1)})(I-.2,I+.2,.07);let J=[];for(let Z=0;Z<=14;Z++){let ue=Z/14,le=-z+.05+ue*(z-.05),fe=I+.04+(_-.17*m-I-.04)*Math.pow(ue,2.2);J.push(x(le,fe-p.y,0))}u(J,Z=>.022*(1-.3*Z),cr);let j=[];for(let Z=0;Z<=10;Z++){let ue=Z/10;j.push(x(-z+.05+ue*z*.6,I-.14+ue*.16+.05*Math.sin(ue*Nr)-p.y,0))}u(j,.009,cr);let ce=j[j.length-1];h([ce[0]-p.o[0]*.03,ce[1]+.02,ce[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,cr,-.4),[.3,.55].forEach(Z=>{let ue=J[Math.round(Z*14)],le=j[Math.round(Z/.62*10)]||j[10];u([ue,le],.006,cr)}),[-1,1].forEach(Z=>{let ue=x(-.05,-ac*m-.2*m,0);h([ue[0]-p.o[1]*Z*.05,ue[1],ue[2]+p.o[0]*Z*.05],[-p.o[1]*Z,0,p.o[0]*Z],.05*m,.9,.006,cr,Nr)})}else for(let z=0;z<3;z++){let I=d+z*Nr*2/3,N=[p.x+Math.cos(I)*Hr*m*.7,_-.035*m,p.z+Math.sin(I)*Hr*m*.7],q=[p.x+Math.cos(I)*Hr*m*1.25,_-.17*m,p.z+Math.sin(I)*Hr*m*1.25];u([N,q],.012*m,cr)}}),{pos:e,nrm:t,kind:r,uv:n,elems:o}}Ls.exports=e=>{let t=E3(),r=e({vert:`
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
		${_1()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>hf.night}}),n=[],o=[];Wo.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),o.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:o},count:n.length/2,uniforms:{time:e.context("time"),night:()=>hf.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r(),hf.night>.01&&a()}};Ls.exports.lanternGLSL=_1;Ls.exports.LANTERNS=Wo;Ls.exports.TREE_LANTERN=[Wo.length-1]});var pf=he((Y6,E1)=>{"use strict";var{doorLightGLSL:M3}=Ea(),{skylightGLSL:T3}=Mi(),{windowLightGLSL:A3,C:Ln}=hn(),{alcoveLightGLSL:S3}=Jn(),$n=e=>e.toFixed(4),k3=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>(r/t).toFixed(4)).join(", ")})();E1.exports=(e,t,r)=>{let o=(t.occluders||[]).slice(0,24).map(([h,p,m])=>`ao = min(ao, contact(v_pos.xz, vec2(${h.toFixed(3)}, ${p.toFixed(3)}), ${m.toFixed(3)}));`).join(`
      `),a={c:[0,0,0,0],d:[1,0,0,0]},i=-1,s=[],c=h=>{let p=h&&h.tick!==void 0?h.tick:0;if(p!==i||s.length===0){i=p;let m=t.viewer||[7,2,20];for(s=t.lights.filter(d=>d.c[3]>.5).map(d=>({l:d,d:Math.hypot(d.c[0]-m[0],d.c[2]-m[2])})).sort((d,g)=>d.d-g.d).slice(0,8).map(d=>d.l);s.length<8;)s.push(a)}return s},l={},u="",v="";for(let h=0;h<8;h++)l["lightC"+h]=p=>c(p)[h].c,l["lightD"+h]=p=>c(p)[h].d,u+="uniform vec4 lightC"+h+", lightD"+h+`;
`,v+="pic += pictureLight(lightC"+h+", lightD"+h+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Ri().lanternGLSL()}

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

    ${M3()}

    ${T3()}

    ${A3()}

    ${S3()}

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
        step(abs(v_pos.z - ${$n(Ln.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${$n((Ln.z0+Ln.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${$n(Ln.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${k3}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${$n(Ln.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${$n(Ln.z0)} || v_pos.z > ${$n(Ln.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${$n(Ln.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${$n(Ln.z0)}), ${$n(Ln.z1)} - v_pos.z), ${$n(Ln.x1)} - v_pos.x);
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
        if (v_pos.z < ${$n(Ln.z0+.3)} && v_pos.x > ${$n(Ln.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements)})}});var T1=he((K6,M1)=>{"strict mode";var L3="https://api.artic.edu/api/v1/artworks/search",z3=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,C3="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",R3="&fields=image_id,title,artist_title",I3={low:400,mid:843,high:1686};M1.exports={fetchList:async function(e,t){let r=L3+C3+R3+`&from=${e}&size=${t}`;return(await fetch(r).then(o=>o.json())).data.filter(o=>o.image_id)},fetchImage:async function(e,t){let r=z3(e,I3[t]),n=await fetch(r).then(o=>o.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var k1=he((Q6,S1)=>{"use strict";var P3=Gl(),N3=Qn(),O3=e=>"images/web/"+e.slug+(N3.isPhone?"-1024":"")+".webp";async function A1(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}S1.exports={fetchList:async function(e,t){return P3.slice(e,e+t).map((r,n)=>({...r,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await A1(O3(e))}catch(r){t=await A1("images/"+e.file)}return{title:e.title,image:t}}}});var z1=he((Z6,L1)=>{"strict mode";L1.exports={default:"local",artic:T1(),local:k1()}});var vf=he((J6,R1)=>{"strict mode";var ka=document.createElement("canvas"),mf=ka.width=ka.height=1024,Vo=ka.getContext("2d");Vo.mozImageSmoothingEnabled=!1;Vo.webkitImageSmoothingEnabled=!1;Vo.font="32px Verdana";Vo.textBaseline="bottom";Vo.fillStyle="#aaa";function C1(e,t,r,n){var o=t,a,i=0,s=0,c=t.split(" "),l,u;for(l=u=c.length;e.measureText(o).width>r&&l>1;){l--,o=a="";for(var v=0;v<u;v++)v<l?(o+=c[v],v+1<l&&(o+=" ")):(a+=c[v],v+1<u&&(a+=" "))}return n.push(o),s=e.measureText(o).width,a&&(i=C1(e,a,r,n),i>s&&(s=i)),s}R1.exports={init(e,t,r=mf){var n=[];C1(Vo,t,Math.min(r*mf,mf),n),Vo.clearRect(0,0,ka.width,ka.height);for(var o=0;o<n.length;o++)Vo.fillText(n[o],0,ka.height-(Math.max(n.length,3)-o)*32);return e({data:ka,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var N1=he((eE,P1)=>{"strict mode";var gf=z1(),G3=new URLSearchParams(window.location.search).get("api"),I1=gf[G3]||gf[gf.default],F3=vf(),xf={},Pi=[],D3=2;function $3(e){return(!navigator.connection||navigator.connection.downlink<D3)&&(e=e=="high"?"mid":"low"),e}var q3=Qn(),Ii=document.createElement("canvas");Ii.width=Ii.height=q3.isPhone?1024:2048;var wf=Ii.getContext("2d");wf.imageSmoothingEnabled=!0;wf.imageSmoothingQuality="high";var yf=!1,H3=e=>[(Pi.pop()||e.texture)([[[200,200,200]]]),t=>(Pi.pop()||e.texture)([[[0,0,0,0]]]),1];async function bf(e,t,r){yf===!1&&(yf=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,o;try{let a=await I1.fetchImage(t,$3(r));o=a.title,n=await createImageBitmap(a.image),wf.drawImage(n,0,0,Ii.width,Ii.height)}catch(a){return console.error(a),r=="high"?await bf(e,t,"low"):H3(e)}return[(Pi.pop()||e.texture)({data:Ii,min:"mipmap",mipmap:"nice",aniso:yf,flipY:!0}),a=>F3.init(Pi.pop()||e.texture,o,a),n.width/n.height]}P1.exports={fetch:(e,t=10,r="low",n,o)=>{let a=Object.keys(xf).length;I1.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(xf[s.image_id]){--t===0&&o();return}xf[s.image_id]=s,bf(e,s,r).then(([c,l,u])=>{n({...s,tex:c,textGen:l,aspect:u}),--t===0&&o()})})})},load:(e,t,r="low")=>{t.tex||t.loading||(t.loading=!0,bf(e,t,r).then(([n,o])=>{t.loading=!1,t.tex=n,t.text=o(t.width)}))},unload:e=>{e.tex&&(Pi.push(e.tex),e.tex=void 0),e.text&&(Pi.push(e.text),e.text=void 0)}}});var G1=he((tE,O1)=>{O1.exports=U3;function U3(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var D1=he((rE,F1)=>{F1.exports=B3;function B3(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var q1=he((nE,$1)=>{$1.exports=j3;function j3(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var _f=he((oE,H1)=>{H1.exports=W3;function W3(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var B1=he((aE,U1)=>{U1.exports=V3;function V3(e,t){if(e===t){var r=t[1],n=t[2],o=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=o,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var W1=he((iE,j1)=>{j1.exports=X3;function X3(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],u=t[8],v=t[9],h=t[10],p=t[11],m=t[12],d=t[13],g=t[14],x=t[15],_=r*s-n*i,A=r*c-o*i,z=r*l-a*i,I=n*c-o*s,N=n*l-a*s,q=o*l-a*c,J=u*d-v*m,j=u*g-h*m,ce=u*x-p*m,Z=v*g-h*d,ue=v*x-p*d,le=h*x-p*g,fe=_*le-A*ue+z*Z+I*ce-N*j+q*J;return fe?(fe=1/fe,e[0]=(s*le-c*ue+l*Z)*fe,e[1]=(o*ue-n*le-a*Z)*fe,e[2]=(d*q-g*N+x*I)*fe,e[3]=(h*N-v*q-p*I)*fe,e[4]=(c*ce-i*le-l*j)*fe,e[5]=(r*le-o*ce+a*j)*fe,e[6]=(g*z-m*q-x*A)*fe,e[7]=(u*q-h*z+p*A)*fe,e[8]=(i*ue-s*ce+l*J)*fe,e[9]=(n*ce-r*ue-a*J)*fe,e[10]=(m*N-d*z+x*_)*fe,e[11]=(v*z-u*N-p*_)*fe,e[12]=(s*j-i*Z-c*J)*fe,e[13]=(r*Z-n*j+o*J)*fe,e[14]=(d*A-m*I-g*_)*fe,e[15]=(u*I-v*A+h*_)*fe,e):null}});var X1=he((sE,V1)=>{V1.exports=Y3;function Y3(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],u=t[8],v=t[9],h=t[10],p=t[11],m=t[12],d=t[13],g=t[14],x=t[15];return e[0]=s*(h*x-p*g)-v*(c*x-l*g)+d*(c*p-l*h),e[1]=-(n*(h*x-p*g)-v*(o*x-a*g)+d*(o*p-a*h)),e[2]=n*(c*x-l*g)-s*(o*x-a*g)+d*(o*l-a*c),e[3]=-(n*(c*p-l*h)-s*(o*p-a*h)+v*(o*l-a*c)),e[4]=-(i*(h*x-p*g)-u*(c*x-l*g)+m*(c*p-l*h)),e[5]=r*(h*x-p*g)-u*(o*x-a*g)+m*(o*p-a*h),e[6]=-(r*(c*x-l*g)-i*(o*x-a*g)+m*(o*l-a*c)),e[7]=r*(c*p-l*h)-i*(o*p-a*h)+u*(o*l-a*c),e[8]=i*(v*x-p*d)-u*(s*x-l*d)+m*(s*p-l*v),e[9]=-(r*(v*x-p*d)-u*(n*x-a*d)+m*(n*p-a*v)),e[10]=r*(s*x-l*d)-i*(n*x-a*d)+m*(n*l-a*s),e[11]=-(r*(s*p-l*v)-i*(n*p-a*v)+u*(n*l-a*s)),e[12]=-(i*(v*g-h*d)-u*(s*g-c*d)+m*(s*h-c*v)),e[13]=r*(v*g-h*d)-u*(n*g-o*d)+m*(n*h-o*v),e[14]=-(r*(s*g-c*d)-i*(n*g-o*d)+m*(n*c-o*s)),e[15]=r*(s*h-c*v)-i*(n*h-o*v)+u*(n*c-o*s),e}});var K1=he((cE,Y1)=>{Y1.exports=K3;function K3(e){var t=e[0],r=e[1],n=e[2],o=e[3],a=e[4],i=e[5],s=e[6],c=e[7],l=e[8],u=e[9],v=e[10],h=e[11],p=e[12],m=e[13],d=e[14],g=e[15],x=t*i-r*a,_=t*s-n*a,A=t*c-o*a,z=r*s-n*i,I=r*c-o*i,N=n*c-o*s,q=l*m-u*p,J=l*d-v*p,j=l*g-h*p,ce=u*d-v*m,Z=u*g-h*m,ue=v*g-h*d;return x*ue-_*Z+A*ce+z*j-I*J+N*q}});var Z1=he((lE,Q1)=>{Q1.exports=Q3;function Q3(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=t[4],c=t[5],l=t[6],u=t[7],v=t[8],h=t[9],p=t[10],m=t[11],d=t[12],g=t[13],x=t[14],_=t[15],A=r[0],z=r[1],I=r[2],N=r[3];return e[0]=A*n+z*s+I*v+N*d,e[1]=A*o+z*c+I*h+N*g,e[2]=A*a+z*l+I*p+N*x,e[3]=A*i+z*u+I*m+N*_,A=r[4],z=r[5],I=r[6],N=r[7],e[4]=A*n+z*s+I*v+N*d,e[5]=A*o+z*c+I*h+N*g,e[6]=A*a+z*l+I*p+N*x,e[7]=A*i+z*u+I*m+N*_,A=r[8],z=r[9],I=r[10],N=r[11],e[8]=A*n+z*s+I*v+N*d,e[9]=A*o+z*c+I*h+N*g,e[10]=A*a+z*l+I*p+N*x,e[11]=A*i+z*u+I*m+N*_,A=r[12],z=r[13],I=r[14],N=r[15],e[12]=A*n+z*s+I*v+N*d,e[13]=A*o+z*c+I*h+N*g,e[14]=A*a+z*l+I*p+N*x,e[15]=A*i+z*u+I*m+N*_,e}});var ep=he((fE,J1)=>{J1.exports=Z3;function Z3(e,t,r){var n=r[0],o=r[1],a=r[2],i,s,c,l,u,v,h,p,m,d,g,x;return t===e?(e[12]=t[0]*n+t[4]*o+t[8]*a+t[12],e[13]=t[1]*n+t[5]*o+t[9]*a+t[13],e[14]=t[2]*n+t[6]*o+t[10]*a+t[14],e[15]=t[3]*n+t[7]*o+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],l=t[3],u=t[4],v=t[5],h=t[6],p=t[7],m=t[8],d=t[9],g=t[10],x=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=v,e[6]=h,e[7]=p,e[8]=m,e[9]=d,e[10]=g,e[11]=x,e[12]=i*n+u*o+m*a+t[12],e[13]=s*n+v*o+d*a+t[13],e[14]=c*n+h*o+g*a+t[14],e[15]=l*n+p*o+x*a+t[15]),e}});var rp=he((hE,tp)=>{tp.exports=J3;function J3(e,t,r){var n=r[0],o=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var op=he((uE,np)=>{np.exports=e5;function e5(e,t,r,n){var o=n[0],a=n[1],i=n[2],s=Math.sqrt(o*o+a*a+i*i),c,l,u,v,h,p,m,d,g,x,_,A,z,I,N,q,J,j,ce,Z,ue,le,fe,Me;return Math.abs(s)<1e-6?null:(s=1/s,o*=s,a*=s,i*=s,c=Math.sin(r),l=Math.cos(r),u=1-l,v=t[0],h=t[1],p=t[2],m=t[3],d=t[4],g=t[5],x=t[6],_=t[7],A=t[8],z=t[9],I=t[10],N=t[11],q=o*o*u+l,J=a*o*u+i*c,j=i*o*u-a*c,ce=o*a*u-i*c,Z=a*a*u+l,ue=i*a*u+o*c,le=o*i*u+a*c,fe=a*i*u-o*c,Me=i*i*u+l,e[0]=v*q+d*J+A*j,e[1]=h*q+g*J+z*j,e[2]=p*q+x*J+I*j,e[3]=m*q+_*J+N*j,e[4]=v*ce+d*Z+A*ue,e[5]=h*ce+g*Z+z*ue,e[6]=p*ce+x*Z+I*ue,e[7]=m*ce+_*Z+N*ue,e[8]=v*le+d*fe+A*Me,e[9]=h*le+g*fe+z*Me,e[10]=p*le+x*fe+I*Me,e[11]=m*le+_*fe+N*Me,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var ip=he((dE,ap)=>{ap.exports=t5;function t5(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[4],i=t[5],s=t[6],c=t[7],l=t[8],u=t[9],v=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*o+l*n,e[5]=i*o+u*n,e[6]=s*o+v*n,e[7]=c*o+h*n,e[8]=l*o-a*n,e[9]=u*o-i*n,e[10]=v*o-s*n,e[11]=h*o-c*n,e}});var cp=he((pE,sp)=>{sp.exports=r5;function r5(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],l=t[8],u=t[9],v=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o-l*n,e[1]=i*o-u*n,e[2]=s*o-v*n,e[3]=c*o-h*n,e[8]=a*n+l*o,e[9]=i*n+u*o,e[10]=s*n+v*o,e[11]=c*n+h*o,e}});var fp=he((mE,lp)=>{lp.exports=n5;function n5(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],l=t[4],u=t[5],v=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o+l*n,e[1]=i*o+u*n,e[2]=s*o+v*n,e[3]=c*o+h*n,e[4]=l*o-a*n,e[5]=u*o-i*n,e[6]=v*o-s*n,e[7]=h*o-c*n,e}});var up=he((vE,hp)=>{hp.exports=o5;function o5(e,t,r){var n,o,a,i=r[0],s=r[1],c=r[2],l=Math.sqrt(i*i+s*s+c*c);return Math.abs(l)<1e-6?null:(l=1/l,i*=l,s*=l,c*=l,n=Math.sin(t),o=Math.cos(t),a=1-o,e[0]=i*i*a+o,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+o,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var pp=he((gE,dp)=>{dp.exports=a5;function a5(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=n+n,c=o+o,l=a+a,u=n*s,v=n*c,h=n*l,p=o*c,m=o*l,d=a*l,g=i*s,x=i*c,_=i*l;return e[0]=1-(p+d),e[1]=v+_,e[2]=h-x,e[3]=0,e[4]=v-_,e[5]=1-(u+d),e[6]=m+g,e[7]=0,e[8]=h+x,e[9]=m-g,e[10]=1-(u+p),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}});var vp=he((xE,mp)=>{mp.exports=i5;function i5(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var xp=he((yE,gp)=>{gp.exports=s5;function s5(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var bp=he((bE,yp)=>{yp.exports=c5;function c5(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var _p=he((wE,wp)=>{wp.exports=l5;function l5(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Mp=he((_E,Ep)=>{Ep.exports=f5;function f5(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Ap=he((EE,Tp)=>{Tp.exports=h5;function h5(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r+r,s=n+n,c=o+o,l=r*i,u=n*i,v=n*s,h=o*i,p=o*s,m=o*c,d=a*i,g=a*s,x=a*c;return e[0]=1-v-m,e[1]=u+x,e[2]=h-g,e[3]=0,e[4]=u-x,e[5]=1-l-m,e[6]=p+d,e[7]=0,e[8]=h+g,e[9]=p-d,e[10]=1-l-v,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var kp=he((ME,Sp)=>{Sp.exports=u5;function u5(e,t,r,n,o,a,i){var s=1/(r-t),c=1/(o-n),l=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+n)*c,e[10]=(i+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*l,e[15]=0,e}});var zp=he((TE,Lp)=>{Lp.exports=d5;function d5(e,t,r,n,o){var a=1/Math.tan(t/2),i=1/(n-o);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*n*i,e[15]=0,e}});var Rp=he((AE,Cp)=>{Cp.exports=p5;function p5(e,t,r,n){var o=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),l=2/(o+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(o-a)*l*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}});var Pp=he((SE,Ip)=>{Ip.exports=m5;function m5(e,t,r,n,o,a,i){var s=1/(t-r),c=1/(n-o),l=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+r)*s,e[13]=(o+n)*c,e[14]=(i+a)*l,e[15]=1,e}});var Op=he((kE,Np)=>{var v5=_f();Np.exports=g5;function g5(e,t,r,n){var o,a,i,s,c,l,u,v,h,p,m=t[0],d=t[1],g=t[2],x=n[0],_=n[1],A=n[2],z=r[0],I=r[1],N=r[2];return Math.abs(m-z)<1e-6&&Math.abs(d-I)<1e-6&&Math.abs(g-N)<1e-6?v5(e):(u=m-z,v=d-I,h=g-N,p=1/Math.sqrt(u*u+v*v+h*h),u*=p,v*=p,h*=p,o=_*h-A*v,a=A*u-x*h,i=x*v-_*u,p=Math.sqrt(o*o+a*a+i*i),p?(p=1/p,o*=p,a*=p,i*=p):(o=0,a=0,i=0),s=v*i-h*a,c=h*o-u*i,l=u*a-v*o,p=Math.sqrt(s*s+c*c+l*l),p?(p=1/p,s*=p,c*=p,l*=p):(s=0,c=0,l=0),e[0]=o,e[1]=s,e[2]=u,e[3]=0,e[4]=a,e[5]=c,e[6]=v,e[7]=0,e[8]=i,e[9]=l,e[10]=h,e[11]=0,e[12]=-(o*m+a*d+i*g),e[13]=-(s*m+c*d+l*g),e[14]=-(u*m+v*d+h*g),e[15]=1,e)}});var Fp=he((LE,Gp)=>{Gp.exports=x5;function x5(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var zs=he((zE,Dp)=>{Dp.exports={create:G1(),clone:D1(),copy:q1(),identity:_f(),transpose:B1(),invert:W1(),adjoint:X1(),determinant:K1(),multiply:Z1(),translate:ep(),scale:rp(),rotate:op(),rotateX:ip(),rotateY:cp(),rotateZ:fp(),fromRotation:up(),fromRotationTranslation:pp(),fromScaling:vp(),fromTranslation:xp(),fromXRotation:bp(),fromYRotation:_p(),fromZRotation:Mp(),fromQuat:Ap(),frustum:kp(),perspective:zp(),perspectiveFromFieldOfView:Rp(),ortho:Pp(),lookAt:Op(),str:Fp()}});var Hp=he((CE,qp)=>{"use strict";var $p=N1(),gr=zs(),La=hn(),y5=3e3,ic="high",Ef,Rs=.36,Is=13.64,Ni=La.C.hallEnd-.01,Ps=La.C.z0+.01,b5=.356,w5=13.644,_5=La.C.hallEnd-.006,E5=La.C.z0+.006,M5=.12,cc=4,Oi=e=>Zr[e]&&Zr[e].cy||cc,Mf=.26,T5=5.6,A5=7,Zr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Ni},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:La.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:La.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:La.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function S5(e,t){let r=t&&t.maxH||T5,n=t&&t.maxW||A5,o=Math.min(r,n/e);return{width:o*e,height:o}}function k5(e,t,r){let n=Zr[r],o=[],a=Oi(r)-t/2;return n.side==="left"?(gr.fromTranslation(o,[Rs,a,n.z+e/2]),gr.rotateY(o,o,Math.PI/2)):n.side==="right"?(gr.fromTranslation(o,[Is,a,n.z-e/2]),gr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?gr.fromTranslation(o,[n.x-e/2,a,Ps]):(gr.fromTranslation(o,[7+e/2,a,Ni]),gr.rotateY(o,o,Math.PI)),gr.scale(o,o,[e,t,M5]),o}function L5(e,t,r){let n=Zr[r],o=[],a=Oi(r)-t/2;return n.side==="left"?(gr.fromTranslation(o,[Rs,a,n.z+e/2]),gr.rotateY(o,o,Math.PI/2)):n.side==="right"?(gr.fromTranslation(o,[Is,a,n.z-e/2]),gr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?gr.fromTranslation(o,[n.x-e/2,a,Ps]):(gr.fromTranslation(o,[7+e/2,a,Ni]),gr.rotateY(o,o,Math.PI)),o}function z5(e,t,r){let n=Zr[r],o=[],a=Oi(r)-t/2-Mf-.38;return n.side==="left"?(gr.fromTranslation(o,[b5,a,n.z+e/2]),gr.rotateY(o,o,Math.PI/2)):n.side==="right"?(gr.fromTranslation(o,[w5,a,n.z-e/2]),gr.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?gr.fromTranslation(o,[n.x-e/2,a,E5]):(gr.fromTranslation(o,[7+e/2,a,_5]),gr.rotateY(o,o,Math.PI)),gr.scale(o,o,[2,2,2]),o}function C5(e,t,r){let n=Zr[r],o=Oi(r)-t/2-Mf-.38;return n.side==="left"?[Rs+.55,o,n.z]:n.side==="right"?[Is-.55,o,n.z]:n.side==="corridor"?[n.x,o,Ps+.55]:[7,o,Ni-.55]}var Cs=.42;function sc(e,t,r,n,o,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,o,0,0,r[0]*a,r[1]*a,r[2]*a,0,e[0],e[1],e[2],1]}function R5(e,t,r){let n=Zr[r],o,a,i;n.side==="left"?(o=[Rs,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(o=[Is,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(o=[n.x,Ps],a=[1,0,0],i=[0,0,1]):(o=[7,Ni],a=[1,0,0],i=[0,0,-1]);let s=Oi(r)+t/2+Mf+.3,c=Math.min(2.4,Math.max(.9,e*.55)),l=(p,m)=>[o[0]+i[0]*p,m,o[1]+i[2]*p],u=[.075,.062,.05],v=[{fixmodel:sc(l(.014,s),a,i,.1,.13,.028),fixcol:u,fixglow:0},{fixmodel:sc(l(Cs/2,s),a,i,.02,.02,Cs),fixcol:u,fixglow:0},{fixmodel:sc(l(Cs,s),a,i,c,.034,.05),fixcol:u,fixglow:0},{fixmodel:sc(l(Cs-.012,s-.019),a,i,c*.94,.006,.028),fixcol:u,fixglow:1}],h=l(Cs,s-.02);return{fixtures:v,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}qp.exports=(e,t)=>{let r=[],n=[],o=a=>{let i=a.image_id;if(!Zr[i])return;let{width:s,height:c}=S5(a.aspect,Zr[i]),l=R5(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=l.light),r.push({...a,fixtures:l.fixtures,side:Zr[i].side,model:k5(s,c,i),framemodel:L5(s,c,i),framesize:[s,c],textmodel:z5(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:C5(s,c,i),paintingPosition:Zr[i].side==="left"?[Rs+.05,cc,Zr[i].z]:Zr[i].side==="right"?[Is-.05,cc,Zr[i].z]:Zr[i].side==="corridor"?[Zr[i].x,Oi(i),Ps+.05]:[7,cc,Ni-.05],textGen:null})};return $p.fetch(e,Zr.length,ic,o,()=>{}),{update:()=>{n=r,n.forEach(a=>{$p.load(e,a,ic)}),ic="low",Ef&&clearTimeout(Ef),Ef=setTimeout(()=>{ic="high"},y5)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Wp=he((RE,jp)=>{"use strict";var I5=vf(),Up=Qn(),Bp=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function P5(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];Bp.forEach(([n,o])=>{e.forEach(([a,i])=>t.push([a,i,n,o]))});let r=[];for(let n=0;n<Bp.length-1;n++)for(let o=0;o<4;o++){let a=(o+1)%4,i=n*4+o,s=n*4+a,c=(n+1)*4+o,l=(n+1)*4+a;r.push(i,s,l,i,l,c)}return{verts:t,elems:r}}var N5=`#extension GL_OES_standard_derivatives : enable
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
}`,O5=`
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
}`;jp.exports=e=>{let t=I5.draw(e),r=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Ri().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(Up.isPhone?1024:2048),detail:()=>Up.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=P5(),o=e({frag:N5,vert:O5,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){r(i),o(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Xp=he((IE,Vp)=>{"use strict";var G5=pf();function F5(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),o=t.getUint32(8,!0),a=[],i=[];for(let v=0;v<3;v++)a.push(t.getFloat32(12+v*4,!0)),i.push(t.getFloat32(24+v*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let l=new Uint16Array(e,s,o);s+=o*2;let u=new Int8Array(e,s,n*3);return{nV:n,nI:o,mn:a,sz:i,pos:c,idx:l,nrm:u}}Vp.exports=(e,t)=>{let r=[],n=[],o=[],a=[],i=null,s=t.statues.length,c=(u,v)=>{let h=r.length/3,p=v.height,m=Math.cos(v.yaw),d=Math.sin(v.yaw),g=v.base!==void 0?v.base:t.pedestalTop;for(let x=0;x<u.nV;x++){let _=(u.mn[0]+u.pos[x*3]/65535*u.sz[0])*p,A=(u.mn[1]+u.pos[x*3+1]/65535*u.sz[1])*p,z=(u.mn[2]+u.pos[x*3+2]/65535*u.sz[2])*p;r.push(v.x+m*_+d*z,g+A,v.z-d*_+m*z);let I=u.nrm[x*3]/127,N=u.nrm[x*3+1]/127,q=u.nrm[x*3+2]/127;n.push(m*I+d*q,N,-d*I+m*q),o.push(v.mat||1,0,0)}for(let x=0;x<u.nI;x++)a.push(h+u.idx[x])},l=()=>{a.length!==0&&(i=G5(e,{position:r,normal:n,mat:o,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1))};return t.statues.forEach(u=>{fetch("res/"+u.file).then(v=>{if(!v.ok)throw new Error("Could not load "+u.file);return v.arrayBuffer()}).then(v=>c(F5(v),u)).catch(v=>console.error(v)).then(()=>{--s===0&&l()})}),function(){i&&i()}}});var am=he((PE,Af)=>{"use strict";var D5=_a(),Or=1.29032,Ca=[9.2968,2,5.9],$5=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],lc=2147.64,Yp=725,Kp=1288,Qp=1450,Zp=2576,wn=-5.197,Ia=3.865,Xo=10.135,Pa=-14.679,Ns=-30.229,Os=7.232,Jp=-45.713,Gi=17.1*Or,Ra=16.6*Or,Gs=16.6*Or,em=[6.9,17.1],fc=[2.95,16.6],q5=1.6,H5=0,U5=1,tm=2,Tf=3,rm=4,nm=5,B5=6;function j5(){let e=[],t=[],r=[],n=[],o=D5.createBuilder(e,t,r,n),a=(l,u,v,h,p,m,d=1,g=1)=>{let x=[];for(let _=0;_<=d;_++){let A=[];for(let z=0;z<=g;z++){let I=[l[0]+u[0]*_/d+v[0]*z/g,l[1]+u[1]*_/d+v[1]*z/g,l[2]+u[2]*_/d+v[2]*z/g],N=m(I);A.push(o.vert(I,h,[p,N[0],N[1]]))}x.push(A)}for(let _=0;_<d;_++)for(let A=0;A<g;A++)o.tri(x[_][A],x[_+1][A],x[_][A+1]),o.tri(x[_+1][A],x[_+1][A+1],x[_][A+1])},i=l=>u=>[(Ca[2]-u[2])/Or-l,u[1]/Or];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],H5,l=>[l[0]/Or,l[2]/Or],13,14),a([Ia,0,wn],[0,0,Pa-wn],[0,Gi,0],[1,0,0],U5,i(8.6),6,6),a([-40,0,wn],[Ia+40,0,0],[0,Gi,0],[0,0,1],tm,l=>[(Ia-l[0])/Or,l[1]/Or],8,4),a([-40,0,-.36],[0,0,wn+.36],[0,Gi,0],[1,0,0],tm,l=>[-l[2]/Or,l[1]/Or]),a([Xo,0,-80],[0,0,wn+80],[0,Ra,0],[-1,0,0],rm,i(8.6),12,6),a([Xo,0,wn],[60,0,0],[0,Ra,0],[0,0,1],nm,l=>[(l[0]-Xo)/Or,l[1]/Or],8,4),a([70,0,wn],[0,0,-.36-wn],[0,Ra,0],[-1,0,0],nm,l=>[-l[2]/Or,l[1]/Or]);let s=l=>[(l[0]-Ca[0])/Or+4.18,l[1]/Or];a([-20,0,Ns],[Os+20,0,0],[0,Gs,0],[0,0,1],Tf,s,8,6),a([Os,0,Ns],[0,0,Jp-Ns],[0,Gs,0],[1,0,0],Tf,i(28),4,4),a([Os,0,Jp],[Xo-Os,0,0],[0,Ra,0],[0,0,1],rm,l=>[(l[0]-Ca[0])/Or,l[1]/Or],2,4),a([-20,0,Pa],[0,0,Ns-Pa],[0,Gs,0],[1,0,0],Tf,i(16),4,4);let c=(l,u,v,h)=>a(l,u,v,h,B5,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:r,attr:n}}function za(e,t,r,n){let o=e.texture({data:[[n]],...r,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{o({data:a,...r,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),o}var to=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",W5=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Pa],[Ia,Gi,wn]],[[Xo,0,-80],[70,Ra,wn]],[[-20,0,-80],[Os,Gs,Ns]],[[-40,0,-80],[-20,Gs,Pa]]],V5=W5.map(e=>`if (hitBox(ro, rd, ${to(e[0])}, ${to(e[1])}, 1e4) ) return 0.0;`).join(`
		`),om="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>$5[t][e].toFixed(6)).join(", ")).join(", ")+")",X5=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${to([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${V5}
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
	vec3 ro = ${to(Ca)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${to([-40,0,Pa])}, ${to([Ia-.02,Gi,wn])}, 0.995)) return false;
	if (hitBox(ro, rd, ${to([Xo+.02,0,-80])}, ${to([70,Ra,wn])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${om} * (p - ${to(Ca)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Yp.toFixed(2)} + ${lc.toFixed(3)} * pc.x / pc.z) / ${Qp.toFixed(1)},
		(${Kp.toFixed(2)} - ${lc.toFixed(3)} * pc.y / pc.z) / ${Zp.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${om} * (p - ${to(Ca)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Yp.toFixed(2)} + ${lc.toFixed(3)} * pc.x / pc.z) / ${Qp.toFixed(1)},
		(${Kp.toFixed(2)} - ${lc.toFixed(3)} * pc.y / pc.z) / ${Zp.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${to(Ca)}), n));
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
		base = texture2D(cobbleTex, fuv / ${q5.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${em[0].toFixed(2)}, 1.0 - fuv.y / ${em[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${fc[0].toFixed(2)}, 1.0 - fuv.y / ${fc[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${fc[0].toFixed(2)}, 1.0 - fuv.y / ${fc[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Ia-.05).toFixed(3)} && v_pos.x < ${(Xo+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Pa.toFixed(3)};
		projectable = projectable && v_pos.z < ${(wn+4.5).toFixed(3)};
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
}`,Y5=`
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
}`,K5=dn();Af.exports=e=>{let t=j5(),r={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},o={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=za(e,"res/street/photo.jpg",r,[190,160,120]),i=za(e,"res/street/photo_night.jpg",r,[12,14,22]),s=za(e,"res/street/photo_mask.png",r,[255,255,255]),c=za(e,"res/street/facade_pink.jpg",n,[200,150,135]),l=za(e,"res/street/facade_yellow.jpg",n,[225,180,95]),u=za(e,"res/street/facade_cream.jpg",n,[215,200,175]),v=za(e,"res/street/cobbles.jpg",o,[95,95,95]),h=Date.now(),p=e({frag:X5,vert:Y5,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:l,creamTex:u,cobbleTex:v,photoNight:i,night:()=>K5.night,time:()=>(Date.now()-h)/1e3}});return function(){p()}};Af.exports.layout={MOUTH_Z:wn,PINK_X:Ia,RIGHT_X:Xo,PINK_H:Gi,CREAM_H:Ra,S:Or}});var cm=he((NE,sm)=>{"use strict";var Q5=dn().GLSL,{glassPanes:Z5}=Ea(),im=hn();function J5(){let e=[],t=[],r=(n,o)=>{for(let a of n)e.push(a),t.push(o)};return r(Z5(),[0,0,1]),r(im.windowGlass(),[0,0,1]),r(im.farDoorGlass(),[1,0,0]),{position:e,normal:t}}sm.exports=e=>{let t=J5(),r=e({frag:`
		precision highp float;
		${Q5}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r()}}});var Tm=he((OE,Cf)=>{"use strict";var pm=dn().GLSL,ew=_a(),Sf=Qn(),{wallWithHoles:tw,C:Qo}=hn(),Ue=.28,W={westBack:14.4,westCol:15-Ue,eastCol:37.4+Ue,eastBack:41.8,south:Qo.z1+.7,northCol:Qo.z1+.7+16,northBack:Qo.z1+.7+19,cx:(15+37.4)/2,cz:(Qo.z1+.7+Qo.z1+.7+16-Ue)/2},jt={x0:W.westCol+Ue,x1:W.eastCol-Ue,z0:W.south,z1:W.northCol-Ue},tn=3.3,$s=.92,Zo=5.6,lm=6,qn=11.9,Ko=9.6,Et={x0:W.cx-2.9,x1:W.cx+2.9,top:14.4},gc=7,mm=4,Lf=(W.eastCol-W.westCol)/gc,rw=(W.northCol-W.south)/mm,vm=3,Hs=.26,Fa=1.4,Oa=1.1,uc=3,uo=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(r=>r/t)})(),Oe={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},po=[],gm=(e,t,r)=>[W.cx+e,t,W.cz+r],dc=gm(-5.9,0,3.4),Jo=.85,Yo={c:[dc[0],4.6*Jo+.5,dc[2]],r:[5*Jo,3.6*Jo,4.5*Jo]},xm=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[dc[0]+e.d[0]*Jo,e.d[1]*Jo+.5,dc[2]+e.d[2]*Jo],r:e.r.map(t=>t*Jo),n:e.n}));for(let e of xm)po.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var nw=[3.6,6.3,9];for(let e of nw){let t=8.6+e%1.7*.6;po.push({c:gm(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var ow=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:W.cx+e.d[0],z:W.cz+e.d[1],bloom:e.bloom}));for(let e of ow)po.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var zf=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[W.cx+Math.cos(t)*2.3,W.cz+Math.sin(t)*2.3]});for(let[e,t]of zf)po.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var ym=[];{let e=(r,n,o,a,i,s)=>{let c=Math.hypot(o-r,a-n),l=Math.floor(c/.9);for(let u=0;u<=l;u++){let v=u/l,h=r+(o-r)*v,p=n+(a-n)*v;i!==void 0&&Math.abs((o!==r?h:p)-i)<s||ym.push([h,p])}};e(jt.x0+.45,jt.z0+1.2,jt.x0+.45,jt.z1-.45,W.cz,1),e(jt.x1-.45,jt.z0+1.2,jt.x1-.45,jt.z1-.45,W.cz,1),e(jt.x0+.45,jt.z1-.45,jt.x1-.45,jt.z1-.45,W.cx,1.9)}var aw=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],pc=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function Di(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),l=e.vert(n,a,i),u=e.vert(o,a,i);e.tri(s,c,l),e.tri(s,l,u)}function Gr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),[s,0,0])}function iw(e,t,r){return{vert:(n,o,a)=>e.vert(t(n),r(o),a),tri:e.tri}}var sw={north:[e=>[e[0],e[1],W.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[W.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[W.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function bm(e,t,r,n,o){let a=[];for(let i=0;i<r;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===r-1?o:.02);a.push([s,c,e+(i+.5)*t])}return a}var cw=bm(W.westCol,Lf,gc,Ue+Hs,Ue+Hs),fm=bm(W.south,rw,mm,.32,Ue+Hs),Fi=[W.cx-32.35,W.northCol-77],lw=Array.from({length:gc-1},(e,t)=>W.westCol+(t+1)*Lf),wm=e=>(e[1]-e[0])/2-.2,qs=e=>(e[0]+e[1])/2;function fw(e,t){let r=qs(e),n=wm(e);return{u0:e[0],u1:e[1],bottom:t?0:$s,head:o=>{let a=Math.abs(o-r);return a<n?tn+Math.sqrt(n*n-a*a):tn},step:.05}}function hw(e,t,r){return{u0:e-r,u1:e+r,bot:n=>t-Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),step:.04,mat:[Oe.STONE,0,0]}}function uw(e,t,r,n){return{u0:e-t/2,u1:e+t/2,bottom:r,head:()=>n,step:.5,mat:[Oe.STONE,0,0]}}function hm(e,t,r){let[n,o]=sw[t],a=iw(e,n,o),i=[];r.arches.forEach((u,v)=>i.push(fw(u,v===r.open)));let s=[];for(let u of r.bays||r.arches){let v=qs(u);r.oculi&&i.push(hw(v,6.85,.3)),s.push({c:v,y0:r.win[0],y1:r.win[1],w:1.05})}for(let u of r.extraWindows||[])s.push(u);for(let u of s)i.push(uw(u.c,u.w,u.y0,u.y1));for(let u of r.extraHoles||[])i.push(u);tw(a,{u0:r.u0,u1:r.u1,w0:-Ue,w1:Ue,top:r.top,holes:i,mat:[Oe.BRICK,0,0],revealMat:[Oe.BRICK,0,0],noEnds:r.noEnds,cuts:r.cuts,topStep:.25});let c=(u,v,h,p,m,d,g)=>{let x=n([u,v,h]),_=n([p,m,d]);Gr(e,x[0],x[1],x[2],_[0],_[1],_[2],g)},l=(u,v,h,p,m,d)=>Di(a,u,v,h,p,m,[d,0,0]);for(let u of r.arches){let v=qs(u),h=wm(u),p=28;for(let m of[Ue,-Ue]){let d=m>0?1:-1,g=m+d*.025;for(let x=0;x<p;x++){let _=Math.PI*x/p,A=Math.PI*(x+1)/p,z=(Z,ue)=>[v+Math.cos(Z)*ue,tn+Math.sin(Z)*ue],I=z(_,h),N=z(A,h),q=z(_,h+.26),J=z(A,h+.26);l([I[0],I[1],g],[N[0],N[1],g],[J[0],J[1],g],[q[0],q[1],g],[0,0,d],Oe.STONE);let j=Math.cos((_+A)/2),ce=Math.sin((_+A)/2);l([q[0],q[1],m],[J[0],J[1],m],[J[0],J[1],g],[q[0],q[1],g],[j,ce,0],Oe.STONE)}}}if(r.arches.forEach((u,v)=>{v!==r.open&&c(u[0]-.02,$s,-Ue-.05,u[1]+.02,$s+.09,Ue+.05,Oe.STONE)}),c(r.u0,lm,-Ue,r.u1,lm+.18,Ue+.09,Oe.STONE),c(r.u0,r.win[0]-.12,Ue-.01,r.u1,r.win[0],Ue+.06,Oe.STONE),r.cornice)for(let[u,v,h]of r.cornice)c(u,h-.22,Ue-.01,v,h,Ue+.16,Oe.STONE),c(u,h,Ue-.01,v,h+.16,Ue+.42,Oe.STONE);for(let{c:u,y0:v,y1:h,w:p,door:m}of s){let d=p/2;if(l([u-d-.01,v,.06],[u+d+.01,v,.06],[u+d+.01,h,.06],[u-d-.01,h,.06],[0,0,1],m?Oe.DARK:Oe.PANE),m){c(u-d-.16,0,Ue-.01,u-d,h+.16,Ue+.07,Oe.STONE),c(u+d,0,Ue-.01,u+d+.16,h+.16,Ue+.07,Oe.STONE),c(u-d-.16,h,Ue-.01,u+d+.16,h+.2,Ue+.09,Oe.STONE),c(u-d,0,.07,u+d,h-.02,.12,Oe.SHUTTER),c(u-.012,0,.12,u+.012,h-.02,.14,Oe.DARK);continue}for(let g of[-1,1]){let x=u+g*d;c(x+g*.02,v+.02,Ue+.02,x+g*(d+.025),h-.02,Ue+.06,Oe.SHUTTER)}c(u-d-.09,h,Ue-.01,u+d+.09,h+.16,Ue+.05,Oe.STONE),c(u-d-.09,v-.1,Ue-.01,u+d+.09,v,Ue+.09,Oe.STONE),c(u-.015,v,.06,u+.015,h,.09,Oe.SHUTTER),c(u-d,(v+h)/2-.015,.06,u+d,(v+h)/2+.015,.09,Oe.SHUTTER)}if(r.oculi)for(let u of r.bays||r.arches){let v=qs(u);l([v-.31,6.54,0],[v+.31,6.54,0],[v+.31,7.16,0],[v-.31,7.16,0],[0,0,1],Oe.DARK)}for(let u of r.cols){let v=$s+.09,h=n([u,0,0]);Gr(e,h[0]-.24,v,h[2]-.24,h[0]+.24,v+.12,h[2]+.24,Oe.MARBLE),e.lathe([[.23,v+.12,1],[.24,v+.17],[.2,v+.24],[.215,v+.28],[.17,v+.34,1],[.165,v+.6],[.155,tn-.5],[.15,tn-.38,1],[.175,tn-.34,1],[.17,tn-.3],[.2,tn-.22],[.27,tn-.15],[.29,tn-.12,1]],h[0],h[2],18,{mat:()=>[Oe.MARBLE,0,0]}),Gr(e,h[0]-.29,tn-.12,h[2]-.29,h[0]+.29,tn+.01,h[2]+.29,Oe.STONE)}r.walk&&r.walk(e)}function dw(e){let t=[-1,0,1].map(o=>{let a=W.cx+o*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Oe.STONE,0,0]}});hm(e,"north",{u0:W.westCol-Ue,u1:W.eastCol+Ue,top:o=>o>Et.x0+1e-6&&o<Et.x1-1e-6?Et.top:qn,cuts:[Et.x0,Et.x0+1e-5,Et.x1-1e-5,Et.x1],arches:cw,open:vm,cols:lw,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[W.westCol-Ue-3.3,Et.x0,qn],[Et.x1,W.eastCol+Ue+3.3,qn],[Et.x0-.2,Et.x1+.2,Et.top]],walk:o=>{Gr(o,jt.x0,Zo,W.northCol+Ue,jt.x1,Zo+.2,W.northBack,Oe.PLASTER),Gr(o,jt.x0,0,W.northBack,jt.x1,Zo,W.northBack+.3,Oe.PLASTER);for(let a of[W.cx-7.2,W.cx,W.cx+7.2])Di(o,[a-.8,0,W.northBack-.01],[a+.8,0,W.northBack-.01],[a+.8,2.9,W.northBack-.01],[a-.8,2.9,W.northBack-.01],[0,0,-1],[Oe.DARK,0,0]),Gr(o,a-.98,0,W.northBack-.06,a+.98,3.12,W.northBack,Oe.STONE),Di(o,[a-.8,0,W.northBack-.07],[a+.8,0,W.northBack-.07],[a+.8,2.9,W.northBack-.07],[a-.8,2.9,W.northBack-.07],[0,0,-1],[Oe.DARK,0,0])}}),Di(e,[Et.x0,11,W.northCol+.2],[Et.x1,11,W.northCol+.2],[Et.x1,13.6,W.northCol+.2],[Et.x0,13.6,W.northCol+.2],[0,0,-1],[Oe.DARK,0,0]),Gr(e,Et.x0+.3,10.88,W.northCol-Ue-.06,Et.x1-.3,11,W.northCol-Ue+.1,Oe.STONE),Gr(e,W.westBack,Zo+.2,W.northBack,W.eastBack,qn,W.northBack+3.4,Oe.BRICK),Gr(e,W.westBack,Ko,W.northCol-Ue,W.westCol-Ue,qn,W.northCol+Ue,Oe.BRICK),Gr(e,W.eastCol+Ue,Ko,W.northCol-Ue,W.eastBack,qn,W.northCol+Ue,Oe.BRICK),Gr(e,W.westBack,Zo+.2,W.northCol+Ue+.12,W.eastBack,qn,W.northBack,Oe.BRICK),Fs(e,[W.westBack-.5,qn+.16,W.northCol-Ue-.42],[Et.x0-W.westBack+.5,0,0],[0,2.6,4.4],Oe.ROOF),Fs(e,[Et.x1,qn+.16,W.northCol-Ue-.42],[W.eastBack+.5-Et.x1,0,0],[0,2.6,4.4],Oe.ROOF),Fs(e,[Et.x0-.3,Et.top+.16,W.northCol-Ue-.42],[Et.x1-Et.x0+.6,0,0],[0,1.4,3],Oe.ROOF),um(e,[Et.x0-.3,Et.top+.16,W.northCol-Ue-.42],[Et.x0-.3,Et.top+1.56,W.northCol-Ue+2.58],[Et.x0-.3,Et.top+.16,W.northCol-Ue+2.58],[-1,0,0],Oe.BRICK),um(e,[Et.x1+.3,Et.top+.16,W.northCol-Ue-.42],[Et.x1+.3,Et.top+1.56,W.northCol-Ue+2.58],[Et.x1+.3,Et.top+.16,W.northCol-Ue+2.58],[1,0,0],Oe.BRICK),Gr(e,Et.x0,qn,W.northCol+Ue,Et.x1,Et.top,W.northCol+2.6,Oe.BRICK);for(let[o,a]of[[W.cx-9.8,W.northBack+.6],[W.cx+9.4,W.northBack+.4],[W.cx-4.6,W.northBack+1]])Gr(e,o-.4,12.5,a-.4,o+.4,15.4,a+.4,Oe.BRICK),Gr(e,o-.52,15.4,a-.52,o+.52,15.62,a+.52,Oe.STONE);let r=(o,a,i)=>{let s=o==="west"?-1:1,c=[];fm.forEach((v,h)=>{let p=qs(v);h===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),hm(e,o,{u0:W.south,u1:W.northCol-Ue,top:()=>Ko,arches:[],bays:fm,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[W.south,W.northCol-Ue,Ko]]}),Gr(e,a,0,W.south,i+s*(Ue+.12),Ko,W.northBack+.3,Oe.BRICK);let l=i-s*Ue;Gr(e,l,0,W.south,l-s*.06,.55,W.northCol-Ue,Oe.STONE);let u=i-s*(Ue+.42);Fs(e,[u,Ko+.16,W.south],[0,0,W.northCol-Ue-W.south],[a-u+s*.4,1.9,0],Oe.ROOF)};r("west",W.westBack,W.westCol),r("east",W.eastBack,W.eastCol);let n=Qo.x1+.7;Gr(e,13.65,7.4,W.south-.02,n,7.62,W.south+.14,Oe.STONE),Gr(e,13.65,10.4,W.south-.02,n,10.6,W.south+.38,Oe.STONE),Fs(e,[13.65,10.6,W.south+.38],[n-13.65,0,0],[0,2.2,-5],Oe.ROOF)}function um(e,t,r,n,o,a){let i=[a,0,0];e.tri(e.vert(t,o,i),e.vert(r,o,i),e.vert(n,o,i))}function Fs(e,t,r,n,o){let a=pc([r[1]*n[2]-r[2]*n[1],r[2]*n[0]-r[0]*n[2],r[0]*n[1]-r[1]*n[0]]),i=a[1]<0?a.map(l=>-l):a,s=(l,u)=>[t[0]+r[0]*l+n[0]*u,t[1]+r[1]*l+n[1]*u,t[2]+r[2]*l+n[2]*u];Di(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[o,0,0]);let c=.08;Di(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],pc([-n[0],0,-n[2]]),[o,0,0])}function pw(e){let t=W.westBack,r=W.eastBack,n=W.south,o=W.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let l=0;l<=i;l++){let u=[t+(r-t)*c/a,0,n+(o-n)*l/i];s[c].push(e.vert(u,[0,1,0],[Oe.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let l=0;l<i;l++)e.tri(s[c][l],s[c+1][l],s[c+1][l+1]),e.tri(s[c][l],s[c+1][l+1],s[c][l+1])}var Ds=.46,Ga=.58,Na=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function mw(e,t,r){let n=Oa+r,o=(e>0?jt.x1-W.cx:W.cx-jt.x0)-Fa-r,a=Oa+r,i=(t>0?jt.z1-W.cz:W.cz-jt.z0)-Fa-r,s=uc+r,c=Math.sqrt(s*s-n*n),l=Math.sqrt(s*s-a*a),u=[[n,c],[n,i],[o,i],[o,a],[l,a]],v=Math.atan2(a,l),h=Math.atan2(c,n);for(let p=1;p<10;p++){let m=v+(h-v)*p/10;u.push([Math.cos(m)*s,Math.sin(m)*s])}return u.map(([p,m])=>[W.cx+e*p,W.cz+t*m])}function vw(e,t,r){let n=r[0]-t[0],o=r[1]-t[1],a=Math.hypot(n,o),i=n/a,s=o/a,c=-s,l=i,u=Ds*.5,v=-u,h=a+u,p=[],m=Math.max(1,Math.ceil((h-v)/1));for(let d=0;d<=m;d++){let g=v+(h-v)*d/m,x=[];for(let _=0;_<Na.length;_++){let[A,z]=Na[_],I=Math.min(Na.length-2,_),N=Na[Math.max(0,_-1)],q=Na[Math.min(Na.length-1,_+1)],J=(q[0]-N[0])*Ds,ce=(q[1]-N[1])*Ga,Z=-J,ue=Math.hypot(ce,Z)||1,le=[t[0]+i*g+c*A*Ds,z*Ga,t[1]+s*g+l*A*Ds],fe=[c*(-ce/ue),-Z/ue,l*(-ce/ue)];x.push(e.vert(le,fe[1]<-.2?[c*Math.sign(A),.3,l*Math.sign(A)]:fe,[Oe.HEDGE,0,0]))}p.push(x)}for(let d=0;d<m;d++)for(let g=0;g<Na.length-1;g++)e.tri(p[d][g],p[d+1][g],p[d+1][g+1]),e.tri(p[d][g],p[d+1][g+1],p[d][g+1]);for(let[d,g]of[[0,-1],[m,1]]){let x=p[d],_=e.vert([t[0]+i*(d?h:v),Ga*.5,t[1]+s*(d?h:v)],[i*g,0,s*g],[Oe.HEDGE,0,0]);for(let A=0;A<x.length-1;A++)e.tri(_,x[A],x[A+1])}}function gw(e){for(let t of[-1,1])for(let r of[-1,1]){let n=mw(t,r,.3);for(let o=0;o<n.length;o++)vw(e,n[o],n[(o+1)%n.length])}}function xw(e){let t=W.cx,r=W.cz,n=()=>[Oe.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,r,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,r,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,r,16,{mat:()=>[Oe.DARK,0,0]});let o={mat:()=>[Oe.IRON,0,0]};e.tube([[t-.72,1.1,r],[t-.72,1.9,r],[t-.7,2.3,r]],()=>.035,8,6,o),e.tube([[t+.72,1.1,r],[t+.72,1.9,r],[t+.7,2.3,r]],()=>.035,8,6,o);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,r])}e.tube(a,()=>.03,20,6,o),e.tube([[t-.45,2.25,r],[t,2.38,r],[t+.45,2.25,r]],()=>.02,8,5,o),e.ellipsoid([t,2.32,r],[.03,.13,.13],6,10,o);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let l=c/12*Math.PI*1.6,u=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(l)*u*i*-1+0),1.95+Math.sin(l)*u,r])}e.tube(s,()=>.016,16,5,o)}}function yw(e){for(let[t,r]of zf)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,r,20,{mat:()=>[Oe.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,r,12,{mat:()=>[Oe.SOIL,0,0]}),e.tube([[t,.6,r],[t+.02,1,r-.01],[t-.01,1.45,r+.02]],n=>.045-n*.02,6,6,{mat:()=>[Oe.BARK,0,0]})}function bw(e){let[t,,r]=Yo.c,n=Em(7),o=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of o){let c=[[t+a*.05,0,r+i*.05],[t+a*.25,s*.35,r+i*.25],[t+a*.6,s*.7,r+i*.6],[t+a,s,r+i],[t+a*1.35+(n()-.5),s+1.4,r+i*1.35+(n()-.5)]];e.tube(c,l=>.2*(1-l*.75),14,9,{mat:()=>[Oe.BARK,0,0]});for(let l=0;l<2;l++){let u=.55+l*.2,v=[t+a*u,s*u,r+i*u],h=n()*Math.PI*2;e.tube([v,[v[0]+Math.cos(h)*1.3,v[1]+.9,v[2]+Math.sin(h)*1.3],[v[0]+Math.cos(h)*2.3,v[1]+1.4+n(),v[2]+Math.sin(h)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[Oe.BARK,0,0]})}}for(let a of po.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Oe.BARK,0,0]})}function ww(e){let t=()=>[Oe.FARBRICK,0,0],r=()=>[Oe.LEAD,0,0],n=(a,i,s,c,l,u)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let v=[];for(let p=0;p<=12;p++){let m=p/12*Math.PI/2,d=Math.cos(m)*s,g=Math.sin(m)*l;u&&(d*=1-.18*Math.sin(m*2)),v.push([Math.max(d,s*.12),c+g])}e.lathe(v,a,i,28,{mat:r});let h=c+l;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:r})};Gr(e,14,0,104,52,26,150,Oe.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:r});let o=(a,i,s)=>{Gr(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Oe.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};o(20.5,109,36),o(46.5,112,38)}function _w(e){let r=[W.cx,0,W.cz],n=24,o=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=o;c++){let l=Math.PI/2*(c/o)-.05,u=[Math.sin(s)*Math.cos(l),Math.sin(l),Math.cos(s)*Math.cos(l)],v=[r[0]+u[0]*420,r[1]+u[1]*420,r[2]+u[2]*420];a[i].push(e.vert(v,[-u[0],-u[1],-u[2]],[Oe.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<o;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function Ew(){let e=[],t=[],r=[],n=[],o=ew.createBuilder(e,t,r,n);return pw(o),dw(o),gw(o),xw(o),yw(o),bw(o),o.save(),o.translate(Fi[0],0,Fi[1]),ww(o),o.restore(),_w(o),{position:e,normal:t,elements:r,attr:n}}var _m=[[[13.65,0,Qo.z0-.7],[Qo.x1+.7,10.6,W.south]],[[W.westBack,Zo,W.northCol-Ue],[W.eastBack,qn,W.northBack+3.4]],[[Et.x0,qn,W.northCol-Ue],[Et.x1,Et.top,W.northCol+2.6]],[[W.westBack,0,W.south],[W.westCol+Ue,Ko,W.northBack+.3]],[[W.eastCol-Ue,0,W.south],[W.eastBack,Ko,W.northBack+.3]],[[14+Fi[0],0,104+Fi[1]],[52+Fi[0],26,150+Fi[1]]]];function Mw(e,t,r,n){let o=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<r[i]||e[i]>n[i])return!1;continue}let s=(r[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),o=Math.max(o,s),a=Math.min(a,c),o>a)return!1}return!0}function hc(e,t,r,n){let o=[(e[0]-r[0])/n[0],(e[1]-r[1])/n[1],(e[2]-r[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=o[0]*a[0]+o[1]*a[1]+o[2]*a[2],c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-1,l=s*s-i*c;if(l<=0)return 0;let u=Math.sqrt(l),v=Math.max(0,(-s-u)/i),h=(-s+u)/i;return Math.max(0,h-v)}function kf(e){for(let[t,r]of _m)if(Mw(e,uo,t,r))return 0;return 1}function Em(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function Tw(){let e=[],t=[],r=[],n=[],o=[],a=[],i=[],s=Em(21),c=(m,d,g,x,_,A,z)=>{let I=e.length/3;for(let[N,q]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...m),t.push(N,q),r.push(d,g,x),n.push(..._),o.push(...A),a.push(...z);i.push(I,I+1,I+2,I,I+2,I+3)},l=(m,d)=>{let g=1;for(let x of po){if(x===d||!x.shadow)continue;let _=hc(m,uo,x.c,x.r);_>0&&(g*=Math.exp(-_*.9))}return g},u=po.map(m=>({...m,pts:null}));for(let m of u)for(let d=0;d<m.n;d++){let g;do g=[s()*2-1,s()*2-1,s()*2-1];while(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]>1);let x=Math.hypot(g[0],g[1],g[2])||1,_=Math.pow(s(),.35)*.98,A=[g[0]/x*_,g[1]/x*_,g[2]/x*_];if(m.spindle){let le=A[1],fe=Math.sqrt(Math.max(.02,1-le*le))*(le>0?1-le*.55:1+le*.25),Me=Math.hypot(A[0],A[2])||1,Ge=fe*Math.min(1,Me*1.4);A=[A[0]/Me*Ge,le,A[2]/Me*Ge]}m.magnolia&&A[1]<-.55&&(A[1]=-.55+(A[1]+.55)*.35);let z=[m.c[0]+A[0]*m.r[0],m.c[1]+A[1]*m.r[1],m.c[2]+A[2]*m.r[2]],I,N;if(m.magnolia){let le=0;for(let Ge of xm)le=Math.max(le,hc(z,uo,Ge.c,Ge.r));I=Math.exp(-le*1.1);let fe=1;for(let Ge of po)if(!Ge.magnolia&&Ge.shadow){let je=hc(z,uo,Ge.c,Ge.r);je>0&&(fe*=Math.exp(-je*.9))}I*=kf(z)*fe;let Me=aw(z,Yo.c);N=pc([Me[0]/Yo.r[0]+A[0]*.5,Me[1]/Yo.r[1]+A[1]*.5,Me[2]/Yo.r[2]+A[2]*.5]),_=Math.min(1,Math.hypot(Me[0]/Yo.r[0],Me[1]/Yo.r[1],Me[2]/Yo.r[2])*.6+_*.4)}else{let le=hc(z,uo,m.c,m.r);I=Math.exp(-le*(m.spindle?2.2:1.25)),I*=kf(z)*l(z,po[u.indexOf(m)]),N=pc([A[0]/m.r[0],A[1]/m.r[1],A[2]/m.r[2]])}let q=Math.max(0,N[0]*uo[0]+N[1]*uo[1]+N[2]*uo[2]),J=.25+.75*Math.pow(_,1.5)*(.65+.35*(N[1]*.5+.5)),j=m.size[0]+(m.size[1]-m.size[0])*s(),ce=.85+s()*.3,Z=m.leaf.map(le=>le*ce),ue=m.cell;m.cell===3&&s()<.35&&(ue=2),c(z,j,ue,s()*Math.PI*2,[I,J,.35+.65*q],Z,m.bloom)}for(let[m,d]of ym){let g=s()<.5;for(let x=0;x<3;x++){let _=[m+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],A=kf(_)*l(_,null);c(_,.32+s()*.12,s()<.7?3:2,s()*6.28,[A,.6+s()*.3,.8],[.75,.9,.6],g?[1,.55,.75]:[.85,.8,1.15])}}let v=i.length/6,h=Array.from({length:v},(m,d)=>d);for(let m=v-1;m>0;m--){let d=Math.floor(s()*(m+1));[h[m],h[d]]=[h[d],h[m]]}let p=[];for(let m of h)for(let d=0;d<6;d++)p.push(i[m*6+d]);return{center:e,corner:t,par:r,light:n,tint:o,bloom:a,elements:p}}var He=e=>e.toFixed(4),Us=e=>`vec3(${He(e[0])}, ${He(e[1])}, ${He(e[2])})`,Mm=`
const vec3 SUN = ${Us(uo)};
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
`,Aw=_m.map(([e,t])=>`if (hitBox(ro, SUN, ${Us(e)}, ${Us(t)})) return 0.0;`).join(`
	`),Sw=po.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${Us(e.c)}, ${Us(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),kw=(e,t,r,n,o,a,i,s,c)=>`
	{
		float t = (${He(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${He(Zo)} && u > ${He(r-Ue)} && u < ${He(r+n*o+Ue)}) {
				float k = floor((u - ${He(r)}) / ${He(n)});
				float a = ${He(r)} + k * ${He(n)} + (k < 0.5 ? ${He(a)} : 0.02);
				float b = ${He(r)} + (k + 1.0) * ${He(n)} - (k > ${He(o-1.5)} ? ${He(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${He(s)}) < 0.5 ? 0.0 : ${He($s+.09)};
				bool hole = (q.y > sill && q.y < ${He(tn)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${He(tn)} && d * d + (q.y - ${He(tn)}) * (q.y - ${He(tn)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,mc=Oa+.3,vc=Oa+.3,Bs=uc+.3,dm=jt.x1-W.cx-Fa-.3,Lw=jt.z1-W.cz-Fa-.3,zw=W.cz-jt.z0-Fa-.3,Cw=Math.sqrt(Bs*Bs-mc*mc),Rw=Math.sqrt(Bs*Bs-vc*vc),Iw=[[W.cx,W.cz,.86,1.18],[W.cx,W.cz,1.25,.3],...zf.map(([e,t])=>[e,t,.42,.65])].map(([e,t,r,n])=>`if (hitCyl(ro, vec2(${He(e)}, ${He(t)}), ${He(r)}, ${He(n)})) return 0.0;`).join(`
	`),Pw=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${He(W.cx)}, ${He(W.cz)}));
	float b1 = xz.y > ${He(W.cz)} ? ${He(Lw)} : ${He(zw)};
	vec2 A = vec2(${He(mc)}, ${He(Cw)}), Bp = vec2(${He(mc)}, b1), C = vec2(${He(dm)}, b1);
	vec2 D = vec2(${He(dm)}, ${He(vc)}), E = vec2(${He(Rw)}, ${He(vc)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${He(Bs)}));
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
	${Aw}
	${kw("z",W.northCol,W.westCol,Lf,gc,Ue+Hs,Ue+Hs,vm,"ro.z > "+He(W.northCol-Ue))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${Iw}
	if (ro.y < ${He(Ga)} && ro.x > ${He(jt.x0)} && ro.x < ${He(jt.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${He(Ga)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${He(Ds*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${He(Ga)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${Sw}
	return tr;
}
`,Nw=`
precision highp float;
${pm}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Mm}
${Pw}

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

	if (kind == ${Oe.GROUND}.0) {
		bool yard = P.x > ${He(jt.x0)} && P.x < ${He(jt.x1)} && P.z < ${He(jt.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${He(jt.x0)}, ${He(jt.x1)} - P.x);
			float ez = min(P.z - ${He(jt.z0)}, ${He(jt.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${He(W.cx)}), dz = abs(P.z - ${He(W.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${He(Fa)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${He(Fa)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${He(uc)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${He(W.cz)}, P.x - ${He(W.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${He(uc)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${He(Oa)} || dz < ${He(Oa)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${He(Oa)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${He(W.cx)}, ${He(W.cz)})));
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${He(Ga)}, P.y) * (0.6 + 0.4 * n);
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
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
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
	bool walk = (P.x < ${He(W.westCol)} || P.x > ${He(W.eastCol)} || P.z > ${He(W.northCol)}) && P.y < ${He(Zo+.05)} && P.z > ${He(W.south-.1)} && P.z < ${He(W.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${He(W.northCol)} ? P.z - ${He(W.northCol)} : (P.x < ${He(W.westCol)} ? ${He(W.westCol)} - P.x : P.x - ${He(W.eastCol)});
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
}`,Ow=`
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
}`,Gw=`
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
}`,Fw=`
precision highp float;
${pm}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Mm}
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
}`;function Dw(e,t,r){let n=e.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(t).then(o=>{if(!o.ok)throw new Error("Could not load "+t);return o.blob()}).then(o=>createImageBitmap(o,{premultiplyAlpha:"none"})).then(o=>n({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o)),n}Cf.exports=e=>{let t=Ew(),r=Tw(),n=Dw(e,"res/garden/foliage.webp",[0,0,0,0]),o=Date.now(),a=()=>Sf.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:20,i=e({frag:Nw,vert:Ow,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>Sf.gardenDetail}}),s=e({frag:Fw,vert:Gw,attributes:{center:r.center,corner:r.corner,par:r.par,light:r.light,tint:r.tint,bloom:r.bloom},elements:new Uint32Array(r.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(r.elements.length*Sf.leafShare/6)*6});return function(){i(),s()}};Cf.exports.layout={G:W,YARD:jt,SUN:uo}});var Cm=he((GE,zm)=>{"use strict";var $w=dn().GLSL,qw=_a(),{C:Lm}=hn(),Hn=Lm.x1+.35,Nf=Lm.zc,Rf=[Hn-7.3,2,Nf],Am=5.2*Math.PI/180,Sm=2100,Hw=725,Uw=1288,Bw=1450,jw=2576,Da=Nf-3.2,km=Nf+3.3,If=Hn+5,Pf=Hn+11.7,xc=3.9,js=Hn+22.7,yc=40;function Ww(){let e=[],t=[],r=[],n=[],o=qw.createBuilder(e,t,r,n),a=(u,v,h,p,m,d)=>{let g=[];for(let x=0;x<=m;x++){g.push([]);for(let _=0;_<=d;_++){let A=[0,1,2].map(z=>u[z]+v[z]*x/m+h[z]*_/d);g[x].push(o.vert(A,p,[0,0,0]))}}for(let x=0;x<m;x++)for(let _=0;_<d;_++)o.tri(g[x][_],g[x+1][_],g[x+1][_+1]),o.tri(g[x][_],g[x+1][_+1],g[x][_+1])},i=km-Da,s=.7;a([Hn-s,0,Da],[If-Hn+s,0,0],[0,0,i],[0,1,0],6,4);let c=Pf-If,l=Math.hypot(c,xc);return a([If,0,Da],[c,xc,0],[0,0,i],[-xc/l,c/l,0],6,4),a([Pf,xc,Da],[js-Pf,0,0],[0,0,i],[0,1,0],6,4),a([Hn-s,0,Da],[js-Hn+s,0,0],[0,yc,0],[0,0,1],12,12),a([Hn-s,0,km],[js-Hn+s,0,0],[0,yc,0],[0,0,-1],12,12),a([js,0,Da],[0,yc,0],[0,0,i],[-1,0,0],8,4),a([Hn-s,yc,Da],[js-Hn+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:r,attr:n}}var ro=e=>e.toFixed(5),Vw=`
precision highp float;
${$w}
uniform sampler2D photo;
varying vec3 v_pos;

void main() {
	vec3 d = v_pos - vec3(${ro(Rf[0])}, ${ro(Rf[1])}, ${ro(Rf[2])});
	float c = ${ro(Math.cos(Am))}, s = ${ro(Math.sin(Am))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${ro(Hw)} + ${ro(Sm)} * d.z / fw, ${ro(Uw)} - ${ro(Sm)} * up / fw);
	vec2 uv = px / vec2(${ro(Bw)}, ${ro(jw)});
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
}`,Xw=`
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
}`;zm.exports=e=>{let t=Ww(),r=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(o=>{if(!o.ok)throw new Error("Could not load the Florence photo");return o.blob()}).then(o=>createImageBitmap(o)).then(o=>r({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o));let n=e({frag:Vw,vert:Xw,attributes:{position:t.position},elements:new Uint32Array(t.elements),uniforms:{photo:r},cull:{enable:!1}});return function(){n()}}});var Gm=he((FE,Om)=>{"use strict";var Yw=dn().GLSL,{A:Rm,BENCH:Kw,SHAFT:Of,TREE:Ws,oculusGLSL:Qw}=Jn(),Zw=Qn(),bc=Ws.sxz,Im=Ws.sy,Pm=Ws.yaw;function Jw(e){let t=new DataView(e),r=t.getUint32(4,!0),n=t.getUint32(8,!0),o=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,r*3);s+=r*6;let l=new Uint16Array(e,s,r*2);s+=r*4;let u=new Int8Array(e,s,r*3);s+=r*3,s=s+3&-4;let v=new Uint32Array(e,s,o);return{nV:r,nWood:n,nI:o,mn:a,sz:i,pos:c,uv:l,nrm:u,idx:v}}function e_(e){let t=new Float32Array(e.nV*3),r=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),o=new Float32Array(e.nV),a=Math.cos(Pm),i=Math.sin(Pm);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*bc,l=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*Im,u=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*bc;t[s*3]=Rm.cx+a*c+i*u,t[s*3+1]=Kw.soil+.02+l,t[s*3+2]=Rm.zc-i*c+a*u;let v=e.nrm[s*3]/127/bc,h=e.nrm[s*3+1]/127/Im,p=e.nrm[s*3+2]/127/bc,m=Math.hypot(v,h,p)||1;v/=m,h/=m,p/=m,r[s*3]=a*v+i*p,r[s*3+1]=h,r[s*3+2]=-i*v+a*p,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,o[s]=s>=e.nWood?1:0}return{position:t,normal:r,uv:n,leaf:o,elements:e.idx}}function Nm(e,t,r,n){let o=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>o({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...r})).catch(a=>console.error(a)),o}var pn=e=>e.toFixed(4),$i=Ws.crownC,qi=Ws.crownR,t_=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

const vec3 SHAFT = vec3(${pn(Of[0])}, ${pn(Of[1])}, ${pn(Of[2])});

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
	vec3 cc = vec3(${pn($i[0])}, ${pn($i[1])}, ${pn($i[2])});
	vec3 cr = vec3(${pn(qi[0])}, ${pn(qi[1])}, ${pn(qi[2])});
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
}`,ea=Ri(),r_=`
precision highp float;
${Yw}
uniform float time;
${ea.lanternGLSL(ea.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${ea.LANTERNS[ea.TREE_LANTERN[0]].x.toFixed(3)}, ${ea.LANTERNS[ea.TREE_LANTERN[0]].y.toFixed(3)}, ${ea.LANTERNS[ea.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

${Qw()}

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
	vec3 rel = (v_pos - vec3(${pn($i[0])}, ${pn($i[1])}, ${pn($i[2])})) / vec3(${pn(qi[0])}, ${pn(qi[1])}, ${pn(qi[2])});
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
}`;Om.exports=e=>{let t=null,r=Nm(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Nm(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),o=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=e_(Jw(a));t=e({vert:t_,frag:r_,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:r,bark:n,time:()=>Zw.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Xm=he((DE,Ff)=>{"use strict";var Gf=dn().GLSL,{A:Fm,BENCH:jm,oculusGLSL:Wm}=Jn(),Dm=Qn(),n_=1.74,o_=1.877,mo=n_/o_,qa={x:Fm.cx-1.22,z:Fm.zc+.02,hipY:jm.seat+.115},no=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],$m=e=>[-e[0],-e[1],-e[2],e[3]],Ha=(e,t)=>{let r=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/r*n,e[1]/r*n,e[2]/r*n,Math.cos(t/2)]},qm=(e,t,r)=>no(Ha([0,0,1],r*Math.PI/180),no(Ha([0,1,0],t*Math.PI/180),Ha([1,0,0],e*Math.PI/180))),a_=e=>{let t=Math.hypot(...e)||1;return e.map(r=>r/t)};function ta(e,t,r){let[n,o,a,i]=t,s=n*n,c=o*o,l=a*a,u=n*o,v=n*a,h=o*a,p=i*n,m=i*o,d=i*a;return[(1-2*(c+l))*r[0],2*(u+d)*r[0],2*(v-m)*r[0],0,2*(u-d)*r[1],(1-2*(s+l))*r[1],2*(h+p)*r[1],0,2*(v+m)*r[2],2*(h-p)*r[2],(1-2*(s+c))*r[2],0,e[0],e[1],e[2],1]}function So(e,t){let r=new Array(16);for(let n=0;n<4;n++)for(let o=0;o<4;o++)r[n*4+o]=e[o]*t[n*4]+e[4+o]*t[n*4+1]+e[8+o]*t[n*4+2]+e[12+o]*t[n*4+3];return r}function i_(e){let t=Math.hypot(e[0],e[1],e[2]),r=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),o=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/r,c=e[5]/r,l=e[6]/r,u=e[8]/n,v=e[9]/n,h=e[10]/n,p=o+c+h,m;if(p>0){let d=Math.sqrt(p+1)*2;m=[(l-v)/d,(u-i)/d,(a-s)/d,d/4]}else if(o>c&&o>h){let d=Math.sqrt(1+o-c-h)*2;m=[d/4,(s+a)/d,(u+i)/d,(l-v)/d]}else if(c>h){let d=Math.sqrt(1+c-o-h)*2;m=[(s+a)/d,d/4,(v+l)/d,(u-i)/d]}else{let d=Math.sqrt(1+h-o-c)*2;m=[(u+i)/d,(v+l)/d,d/4,(a-s)/d]}return a_(m)}var _c={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,r=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,o)=>{_c[e+"Hand"+n+"1"]=[0,0,t*(18+o*6)*r],_c[e+"Hand"+n+"2"]=[0,0,t*(26+o*6)*r],_c[e+"Hand"+n+"3"]=[0,0,t*16*r]})}function $a(e,t,r){let n=e-t;return n-=Math.round(n),Math.exp(-(n/r)*(n/r))}function Hm(e){let t=9+20*Math.cos(2*Math.PI*e),r=4+13*$a(e,.14,.07)+57*$a(e,.72,.12),n=5*$a(e,.06,.04)-9*$a(e,.42,.12)+17*$a(e,.62,.05)-3*$a(e,.85,.1),o=-26*$a(e,.58,.06);return{hip:t,knee:r,ankle:n,toe:o}}function s_(e){let t=(e%1+1)%1,r=Hm(t),n=Hm(t+.5),o=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*o,0,0],RightArm:[-16*o,0,0],LeftForeArm:[0,-14-8*Math.max(0,-o),0],RightForeArm:[0,14+8*Math.max(0,o),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-r.hip,0,0],LeftLeg:[r.knee,0,0],LeftFoot:[r.ankle,0,0],LeftToeBase:[r.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*o}}var Um=`
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
}`,Ec=Ri(),Bm=`
precision highp float;
${Gf}
uniform float time;
${Ec.lanternGLSL(Ec.TREE_LANTERN)}
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${Wm()}
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
}`;function c_(e,t){let r=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((o,a)=>{let i=new Image;i.onload=()=>o(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}var Vm={w:.13,h:.2},wc=e=>.011*(1-Math.pow(1-e,3));function l_(){let e=[],t=[],r=[],n=[],o=[],a=(d,g,x,_,A,z,I)=>{let N=e.length/3;[d,g,x,_].forEach((q,J)=>{e.push(...q),t.push(...A),r.push(...I[J]),n.push(z)}),o.push(N,N+1,N+2,N,N+2,N+3)},{w:i,h:s}=Vm,c=s/2,l=[[0,1],[1,1],[1,0],[0,0]],u=-.006,v=i+.001,h=c+.001;a([0,u,-h],[v,u,-h],[v,u,h],[0,u,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,u+.001,-h],[0,u+.001,h],[v,u+.001,h],[v,u+.001,-h],[0,1,0],2,l),a([-v,u,-h],[0,u,-h],[0,u,h],[-v,u,h],[0,-1,0],2,l),a([-v,u+.001,-h],[-v,u+.001,h],[0,u+.001,h],[0,u+.001,-h],[0,1,0],2,l);let p=8;for(let d of[1,-1]){for(let x=0;x<p;x++){let _=x/p,A=(x+1)/p,z=(.002+_*(i-.002))*d,I=(.002+A*(i-.002))*d,N=wc(_),q=wc(A),J=d>0?_:1-_,j=d>0?A:1-A,ce=1,Z=-(q-N)/(I-z);a([z,N,-c],[I,q,-c],[I,q,c],[z,N,c],[Z,ce,0],3,[[J,1],[j,1],[j,0],[J,0]]),a([z,u+.001,c],[I,u+.001,c],[I,q,c],[z,N,c],[0,0,1],4,l),a([z,N,-c],[I,q,-c],[I,u+.001,-c],[z,u+.001,-c],[0,0,-1],4,l)}let g=i*d;a([g,u+.001,-c],[g,wc(1),-c],[g,wc(1),c],[g,u+.001,c],[d,0,0],4,l)}let m=10;for(let d=0;d<m;d++){let g=d/m,x=(d+1)/m,_=e.length/3;for(let[A,z]of[[g,-c],[x,-c],[x,c],[g,c]])e.push(A,0,z),t.push(0,1,0),r.push(A,(z+c)/s),n.push(5);o.push(_,_+1,_+2,_,_+2,_+3)}return{pos:e,nrm:t,uv:r,kind:n,idx:o}}function f_(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let r=7,n=()=>(r=r*16807%2147483647,r/2147483647),o=(i,s,c,l,u,v,h)=>{for(let p=0;p<v;p++){let m=i+(n()-.5)*c*2,d=s+(n()-.5)*l*2,g=20+n()*60,x=t.createRadialGradient(m,d,0,m,d,g);x.addColorStop(0,`rgba(${u},${h})`),x.addColorStop(1,`rgba(${u},0)`),t.fillStyle=x,t.fillRect(m-g,d-g,g*2,g*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,l])=>{t.lineWidth=l,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var h_=`
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
		float r = u * ${Vm.w.toFixed(3)};
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
}`,u_=`
precision highp float;
${Gf}
uniform float time;
${Ec.lanternGLSL(Ec.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Wm()}
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
}`;function d_(){let e=[],t=[],r=[],n=[],o=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],l=[.8,.55,.22],u=[[0,-.15,l,2],[.0012,-.147,l,2],[.004,-.138,l,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],v=16;for(let h=0;h<u.length;h++){let[p,m,d,g]=u[h],x=g===2?.45:1;for(let _=0;_<=v;_++){let A=_/v*Math.PI*2;e.push(Math.cos(A)*p,m,Math.sin(A)*p*x);let z=Math.max(h-1,0),I=Math.min(h+1,u.length-1),N=u[I][0]-u[z][0],q=u[I][1]-u[z][1],J=Math.hypot(N,q)||1;t.push(Math.cos(A)*q/J,-N/J,Math.sin(A)*q/J/x),r.push(...d),n.push(g)}}for(let h=0;h<u.length-1;h++)for(let p=0;p<v;p++){let m=h*(v+1)+p,d=m+v+1;o.push(m,d,m+1,m+1,d,d+1)}return{pos:e,nrm:t,col:r,mat:n,idx:o}}var p_=`
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
}`,m_=`
precision highp float;
${Gf}
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
}`,v_=`
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
}`,g_=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Ff.exports=e=>{let t="res/avatar/",r=null,n=Date.now(),o=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[qa.x,1.9,qa.z],glow:0};Promise.all([fetch(t+"avatar.json").then(I=>I.json()),fetch(t+"avatar.bin").then(I=>I.arrayBuffer())]).then(([I,N])=>{r=s(I,N)}).catch(I=>console.error(I));let i=e.texture({data:[[[255,255,255,255]]]});function s(I,N){let q=(Se,Je)=>new Float32Array(N,Se,Je),J=I.bones,j=J.length,ce={};J.forEach((Se,Je)=>{ce[Se.name]=Je});let Z=[];for(let Se=0;Se<j;Se++)Z.push(Array.from(q(I.ibm+Se*64,16)));let ue=J.map(Se=>ta(Se.t,Se.r,Se.s)),le=[];for(let Se=0;Se<j;Se++){let Je=J[Se].parent;le[Se]=Je<0?ue[Se]:So(le[Je],ue[Se])}let fe=le.map(i_),Me=I.meshes.map(Se=>{let Je=q(Se.pos,Se.n*3),rt=q(Se.nrm,Se.n*3),wt=q(Se.uv,Se.n*2),xt=new Uint8Array(N,Se.jnt,Se.n*4),tr=q(Se.wgt,Se.n*4),mt=new Uint16Array(N,Se.idx,Se.ni),Mt={};for(let gn in Se.morphs){let rn=Se.morphs[gn];Mt[gn]={idx:new Uint16Array(N,rn.idx,rn.n),d:q(rn.d,rn.n*3)}}let At=new Float32Array(Se.n*3),y=new Float32Array(Se.n*3),Kt=new Float32Array(Se.n*3),Pt=e.buffer({data:At,usage:"dynamic"}),Ke=e.buffer({data:y,usage:"dynamic"}),qt=/hair/.test(Se.name),$t=/EyeAO|Eyelash/.test(Se.name),lr=/Body|Head/.test(Se.name),or=Se.kind||0;return{m:Se,pos:Je,nrm:rt,uv:wt,jnt:xt,wgt:tr,idx:mt,morphs:Mt,outP:At,outN:y,work:Kt,pb:Pt,nbuf:Ke,tex:Se.tex?c_(e,t+Se.tex):i,kind:or,alphaScale:/EyeAO/.test(Se.name)?.25:1,blend:Se.blend||qt,alphaCut:qt?.35:$t?.02:0,skin:lr?1:0}}),Ge=e({vert:Um,frag:Bm,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1}}),je=e({vert:Um,frag:Bm,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}});for(let Se of Me)Se.uvBuf=e.buffer(Se.uv),Se.el=e.elements({data:Se.idx,type:"uint16"});let Be=le[ce.Hips],Gt=Ha([1,0,0],-Math.PI/2),Rt=So(ta([qa.x-Be[12]*mo,qa.hipY-Be[14]*mo,qa.z+Be[13]*mo],Gt,[1,1,1]),ta([0,0,0],[0,0,0,1],[mo,mo,mo])),Qt=new Array(j),It=-1,Ar=(Se,Je,rt)=>So(ta([Se,0,Je],Ha([0,1,0],rt),[1,1,1]),ta([0,0,0],[0,0,0,1],[mo,mo,mo])),Yt=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Se=>ce[Se]),Rr=Yt.map(Se=>le[Se][13]*mo);function Kr(Se){let Je=s_(Se.phase),rt={},wt=y=>{for(let Kt in y){let Pt=y[Kt],Ke=qm(Pt[0],Pt[1],Pt[2]);rt[Kt]=rt[Kt]?no(rt[Kt],Ke):Ke}};wt(Je.swing),wt(Je.pose);let xt=Math.cos(Se.heading),tr=-Math.sin(Se.heading),mt=Ar(Se.x+xt*Je.sway,Se.z+tr*Je.sway,Se.heading),Mt=new Array(j);for(let y=0;y<j;y++){let Kt=J[y],Pt=ue[y],Ke=rt[Kt.name];if(Ke){let qt=fe[y],$t=no($m(qt),no(Ke,qt));Pt=ta(Kt.t,no(Kt.r,$t),Kt.s)}Mt[y]=Kt.parent<0?So(mt,Pt):So(Mt[Kt.parent],Pt)}let At=1/0;Yt.forEach((y,Kt)=>{At=Math.min(At,Mt[y][13]-Rr[Kt])});for(let y=0;y<j;y++)Mt[y]=Mt[y].slice(),Mt[y][13]-=At,Qt[y]=So(Mt[y],Z[y]);return{blink:0}}function En(Se,Je){if(Je)return Kr(Je);let rt=Math.sin(Se*2*Math.PI/4.2),wt=Se%3.7,xt=wt<.16?Math.sin(wt/.16*Math.PI):0,mt={RightArm:[0,0,11*Math.sin(Se*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((Ke,qt)=>{let $t=Math.sin(Se*1.1-qt*.5);mt["RightHand"+Ke+"1"]=[0,0,8+12*$t],mt["RightHand"+Ke+"2"]=[0,0,6+10*$t]});let Mt={},At=(Ke,qt)=>{for(let $t in Ke){let lr=Ke[$t],or=qm(lr[0]*qt,lr[1]*qt,lr[2]*qt);Mt[$t]=Mt[$t]?no(Mt[$t],or):or}};At(_c,1),At({Spine1:[rt*.8,0,0],Spine2:[rt*.6,0,0]},1),At(mt,1);let y=new Array(j),Kt=new Array(j);for(let Ke=0;Ke<j;Ke++){let qt=J[Ke],$t=ue[Ke],lr=Mt[qt.name];if(lr){let or=fe[Ke],gn=no($m(or),no(lr,or));$t=ta(qt.t,no(qt.r,gn),qt.s)}y[Ke]=qt.parent<0?So(Rt,$t):So(y[qt.parent],$t),Kt[Ke]=null}for(let Ke=0;Ke<j;Ke++)Qt[Ke]=So(y[Ke],Z[Ke]);let Pt=Ke=>[Ke[12],Ke[13],Ke[14]];return a.headPos=Pt(y[ce.Head]),a.hipsPos=Pt(y[ce.Hips]),a.headM=y[ce.Head],{blink:xt}}function Ye(Se,Je){let{pos:rt,nrm:wt,jnt:xt,wgt:tr,outP:mt,outN:Mt,work:At,m:y}=Se,Kt=y.n,Pt=rt;if(Je){At.set(rt);for(let Ke in Se.morphs){let qt=Je[Ke]||0;if(qt<=0)continue;let $t=Se.morphs[Ke];for(let lr=0;lr<$t.idx.length;lr++){let or=$t.idx[lr]*3;At[or]+=$t.d[lr*3]*qt,At[or+1]+=$t.d[lr*3+1]*qt,At[or+2]+=$t.d[lr*3+2]*qt}}Pt=At}for(let Ke=0;Ke<Kt;Ke++){let qt=Pt[Ke*3],$t=Pt[Ke*3+1],lr=Pt[Ke*3+2],or=wt[Ke*3],gn=wt[Ke*3+1],rn=wt[Ke*3+2],vo=0,yr=0,Ur=0,go=0,Ro=0,xo=0;for(let Wn=0;Wn<4;Wn++){let Vn=tr[Ke*4+Wn];if(Vn===0)continue;let Zt=Qt[xt[Ke*4+Wn]];vo+=Vn*(Zt[0]*qt+Zt[4]*$t+Zt[8]*lr+Zt[12]),yr+=Vn*(Zt[1]*qt+Zt[5]*$t+Zt[9]*lr+Zt[13]),Ur+=Vn*(Zt[2]*qt+Zt[6]*$t+Zt[10]*lr+Zt[14]),go+=Vn*(Zt[0]*or+Zt[4]*gn+Zt[8]*rn),Ro+=Vn*(Zt[1]*or+Zt[5]*gn+Zt[9]*rn),xo+=Vn*(Zt[2]*or+Zt[6]*gn+Zt[10]*rn)}mt[Ke*3]=vo,mt[Ke*3+1]=yr,mt[Ke*3+2]=Ur;let Io=Math.hypot(go,Ro,xo)||1;Mt[Ke*3]=go/Io,Mt[Ke*3+1]=Ro/Io,Mt[Ke*3+2]=xo/Io}y.grid&&!it&&dt(Se),Se.pb.subdata(mt),Se.nbuf.subdata(Mt)}function dt(Se){let[Je,rt]=Se.m.grid,wt=Se.outP,xt=Se.outN,tr=jm.seat+.012;for(let mt=1;mt<Je;mt++){let Mt=Math.pow(1-mt/(Je-1),1.5);for(let At=0;At<rt;At++){let y=(mt*rt+At)*3;wt[y+1]>tr?wt[y+1]=tr+(wt[y+1]-tr)*Math.max(Mt,.15):wt[y+1]=tr}}for(let mt=0;mt<xt.length;mt+=3)xt[mt]=0,xt[mt+1]=1,xt[mt+2]=0}let it=!1;function ct(Se,Je){it=!!Je;let rt=En(Se,Je),wt={eyeBlinkLeft:rt.blink,eyeBlinkRight:rt.blink};for(let xt of Me)Ye(xt,Object.keys(xt.morphs).length?wt:null);a.pose=rt}return{parts:Me,update:ct,drawOpaque:Ge,drawBlend:je,state:a}}function c(I,N,q){let J=Math.min(1,Math.max(0,(q-I)/(N-I)));return J*J*(3-2*J)}let l=l_(),u=f_(),v=u?e.texture({data:u,flipY:!1,min:"linear",mag:"linear"}):i,h=e({vert:h_,frag:u_,attributes:{position:l.pos,normal:l.nrm,uv:l.uv,kind:l.kind},elements:new Uint16Array(l.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:v},cull:{enable:!1}}),p=d_(),m=e({vert:p_,frag:m_,attributes:{position:p.pos,normal:p.nrm,color:p.col,mat:p.mat},elements:new Uint16Array(p.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),d=e({vert:v_,frag:g_,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function g(I){let N=I.headM,q=Me=>{let Ge=Math.hypot(...Me)||1;return Me.map(je=>je/Ge)},J=q([N[4],N[5],N[6]]),j=q([N[8],N[9],N[10]]),ce=J,Z=j.map(Me=>-Me),ue=[Z[1]*ce[2]-Z[2]*ce[1],Z[2]*ce[0]-Z[0]*ce[2],Z[0]*ce[1]-Z[1]*ce[0]],le=I.headPos,fe=[0,1,2].map(Me=>le[Me]+J[Me]*.06+j[Me]*.185);return[ue[0],ue[1],ue[2],0,Z[0],Z[1],Z[2],0,ce[0],ce[1],ce[2],0,fe[0],fe[1],fe[2],1]}let x=-1,_="",A=null;function z(I){if(!r)return;let N=(Dm.motion,o()),q=A?[A.x,A.z,A.heading,A.phase].map(j=>j.toFixed(4)).join():"";(q!==_||!A&&Math.abs(N-x)>(Dm.isPhone?1/30:0))&&(r.update(N,A),x=N,_=q);for(let j of r.parts)j.blend||r.drawOpaque({pb:j.pb,nb:j.nbuf,uv:j.uvBuf,el:j.el,tex:j.tex,alphaCut:j.alphaCut,skin:j.skin,kind:j.kind,alphaScale:j.alphaScale});let J=r.state;if(J.headM&&!A){h({model:g(J)});let j=J.headPos,ce=Math.sin(N*1.3)*.02,Z=[j[0],j[1]+.62+ce,j[2]+.05],ue=N*.6,le=ta(Z,no(Ha([0,1,0],ue),Ha([0,0,1],.18)),[1.2,1.2,1.2]),fe=.5+.5*Math.sin(N*2);m({model:le,pulse:fe}),a.glowPos=Z,a.glow=.06+.03*fe,d({center:[Z[0],Z[1]-.12,Z[2]],size:.1,pulse:fe})}for(let j of r.parts)j.blend&&r.drawBlend({pb:j.pb,nb:j.nbuf,uv:j.uvBuf,el:j.el,tex:j.tex,alphaCut:j.alphaCut,skin:j.skin,kind:j.kind,alphaScale:j.alphaScale})}return z.state=a,z.place=qa,z.setWalk=I=>{A=I||null,A&&(a.glow=0)},z};Ff.exports.PLACE=qa});var Df=he(($E,Ym)=>{"use strict";Ym.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var qf=he((qE,tv)=>{"use strict";var Jm=Qn(),Km=xs(),ra=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function $f(){return Jm.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var x_=`
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
`,Qm=!1;function ev(){if(Qm)return;Qm=!0;let e=document.createElement("style");e.textContent=x_,document.head.appendChild(e)}var y_='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function b_(e){return!e||!e.visit||!$f()?"":(ev(),`<button type="button" class="visit-btn" data-visit="${ra(e.slug||"")}" aria-label="Visit what remained: watch ${ra(e.title)} come to life">${y_}<span>Visit what remained</span></button>`)}function w_(e){let t=e.getContext("2d");e.width=e.height=160;let r=t.createImageData(160,160),n=!0,o=0;return function a(i){if(n){if(i-o>70){o=i;let s=r.data;for(let c=0;c<s.length;c+=4){let l=Math.random()*255;s[c]=s[c+1]=s[c+2]=l,s[c+3]=255}t.putImageData(r,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Vs=null;function __(e){if(Vs||!e||!e.visit)return;ev();let t=document.activeElement;document.body.classList.add("visiting");let r="images/web/"+e.slug+(Jm.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${ra(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${ra(e.title)}, ${ra(Km(e))}" src="${ra(r)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${ra(e.title)}</span>
			<span class="visit-meta">${ra(Km(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let o=n.querySelector("video"),a=n.querySelector(".visit-title"),i=w_(n.querySelector(".visit-grain")),s=[],c=(g,x)=>s.push(setTimeout(g,x)),l=g=>g.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(g=>n.addEventListener(g,l));let u=g=>{g.key==="Escape"?(g.preventDefault(),d()):g.key===" "&&!(g.target&&g.target.tagName==="BUTTON")&&(g.preventDefault(),p()),g.stopImmediatePropagation()};window.addEventListener("keydown",u,!0);let v=g=>g.stopImmediatePropagation();window.addEventListener("keyup",v,!0);let h=!1;function p(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let g=n.querySelector('[data-act="back"]');g&&g.focus({preventScroll:!0})},1300))}function m(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{o.currentTime=0}catch(x){}let g=o.play();g&&g.catch&&g.catch(()=>p()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}o.addEventListener("timeupdate",()=>{o.duration&&o.currentTime>o.duration-1.2&&p()}),o.addEventListener("ended",p),o.addEventListener("error",p);function d(){if(Vs){Vs=null,s.forEach(clearTimeout),n.classList.remove("on");try{o.pause()}catch(g){}window.removeEventListener("keydown",u,!0),window.removeEventListener("keyup",v,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",d),n.querySelector(".visit-skip").addEventListener("click",()=>{try{o.pause()}catch(g){}p()}),n.querySelector(".visit-end").addEventListener("click",g=>{let x=g.target.closest("button");x&&(x.dataset.act==="back"&&d(),x.dataset.act==="again"&&(s.forEach(clearTimeout),m()))}),o.src=e.visit.video,Vs={close:d},requestAnimationFrame(()=>{n.classList.add("on"),c(m,1300)})}var Zm={};function E_(e){if(!e||!e.visit||Zm[e.visit.video]||!$f())return;Zm[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}tv.exports={available:$f,button:b_,open:__,warm:E_,get active(){return!!Vs}}});var Hf=he((HE,rv)=>{rv.exports=1e-6});var Uf=he((UE,nv)=>{nv.exports=M_;function M_(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var av=he((BE,ov)=>{ov.exports=T_;function T_(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Bf=he((jE,iv)=>{iv.exports=A_;function A_(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}});var jf=he((WE,sv)=>{sv.exports=S_;function S_(e,t){var r=t[0],n=t[1],o=t[2],a=r*r+n*n+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var Wf=he((VE,cv)=>{cv.exports=k_;function k_(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var uv=he((XE,hv)=>{hv.exports=z_;var lv=Bf(),fv=jf(),L_=Wf();function z_(e,t){var r=lv(e[0],e[1],e[2]),n=lv(t[0],t[1],t[2]);fv(r,r),fv(n,n);var o=L_(r,n);return o>1?0:Math.acos(o)}});var pv=he((YE,dv)=>{dv.exports=C_;function C_(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var vv=he((KE,mv)=>{mv.exports=R_;function R_(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}});var xv=he((QE,gv)=>{gv.exports=I_;var Vf=Hf();function I_(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(r-a)<=Vf*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=Vf*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(o-s)<=Vf*Math.max(1,Math.abs(o),Math.abs(s))}});var bv=he((ZE,yv)=>{yv.exports=P_;function P_(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var _v=he((JE,wv)=>{wv.exports=N_;function N_(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}});var Xf=he((eM,Ev)=>{Ev.exports=O_;function O_(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}});var Tv=he((tM,Mv)=>{Mv.exports=Xf()});var Yf=he((rM,Av)=>{Av.exports=G_;function G_(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}});var kv=he((nM,Sv)=>{Sv.exports=Yf()});var Kf=he((oM,Lv)=>{Lv.exports=F_;function F_(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}});var Cv=he((aM,zv)=>{zv.exports=Kf()});var Iv=he((iM,Rv)=>{Rv.exports=D_;function D_(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}});var Nv=he((sM,Pv)=>{Pv.exports=$_;function $_(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}});var Gv=he((cM,Ov)=>{Ov.exports=q_;function q_(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var Dv=he((lM,Fv)=>{Fv.exports=H_;function H_(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var qv=he((fM,$v)=>{$v.exports=U_;function U_(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var Uv=he((hM,Hv)=>{Hv.exports=B_;function B_(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}});var jv=he((uM,Bv)=>{Bv.exports=j_;function j_(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}});var Qf=he((dM,Wv)=>{Wv.exports=W_;function W_(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}});var Xv=he((pM,Vv)=>{Vv.exports=Qf()});var Zf=he((mM,Yv)=>{Yv.exports=V_;function V_(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}});var Qv=he((vM,Kv)=>{Kv.exports=Zf()});var Jf=he((gM,Zv)=>{Zv.exports=X_;function X_(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}});var e2=he((xM,Jv)=>{Jv.exports=Jf()});var eh=he((yM,t2)=>{t2.exports=Y_;function Y_(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}});var n2=he((bM,r2)=>{r2.exports=eh()});var a2=he((wM,o2)=>{o2.exports=K_;function K_(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var s2=he((_M,i2)=>{i2.exports=Q_;function Q_(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var l2=he((EM,c2)=>{c2.exports=Z_;function Z_(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2];return e[0]=o*c-a*s,e[1]=a*i-n*c,e[2]=n*s-o*i,e}});var h2=he((MM,f2)=>{f2.exports=J_;function J_(e,t,r,n){var o=t[0],a=t[1],i=t[2];return e[0]=o+n*(r[0]-o),e[1]=a+n*(r[1]-a),e[2]=i+n*(r[2]-i),e}});var d2=he((TM,u2)=>{u2.exports=e4;function e4(e,t){t=t||1;var r=Math.random()*2*Math.PI,n=Math.random()*2-1,o=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=n*t,e}});var m2=he((AM,p2)=>{p2.exports=t4;function t4(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[3]*n+r[7]*o+r[11]*a+r[15];return i=i||1,e[0]=(r[0]*n+r[4]*o+r[8]*a+r[12])/i,e[1]=(r[1]*n+r[5]*o+r[9]*a+r[13])/i,e[2]=(r[2]*n+r[6]*o+r[10]*a+r[14])/i,e}});var g2=he((SM,v2)=>{v2.exports=r4;function r4(e,t,r){var n=t[0],o=t[1],a=t[2];return e[0]=n*r[0]+o*r[3]+a*r[6],e[1]=n*r[1]+o*r[4]+a*r[7],e[2]=n*r[2]+o*r[5]+a*r[8],e}});var y2=he((kM,x2)=>{x2.exports=n4;function n4(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2],l=r[3],u=l*n+s*a-c*o,v=l*o+c*n-i*a,h=l*a+i*o-s*n,p=-i*n-s*o-c*a;return e[0]=u*l+p*-i+v*-c-h*-s,e[1]=v*l+p*-s+h*-i-u*-c,e[2]=h*l+p*-c+u*-s-v*-i,e}});var w2=he((LM,b2)=>{b2.exports=o4;function o4(e,t,r,n){var o=r[1],a=r[2],i=t[1]-o,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=t[0],e[1]=o+i*l-s*c,e[2]=a+i*c+s*l,e}});var E2=he((zM,_2)=>{_2.exports=a4;function a4(e,t,r,n){var o=r[0],a=r[2],i=t[0]-o,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=o+s*c+i*l,e[1]=t[1],e[2]=a+s*l-i*c,e}});var T2=he((CM,M2)=>{M2.exports=i4;function i4(e,t,r,n){var o=r[0],a=r[1],i=t[0]-o,s=t[1]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=o+i*l-s*c,e[1]=a+i*c+s*l,e[2]=t[2],e}});var S2=he((RM,A2)=>{A2.exports=s4;var na=Uf()();function s4(e,t,r,n,o,a){var i,s;for(t||(t=3),r||(r=0),n?s=Math.min(n*t+r,e.length):s=e.length,i=r;i<s;i+=t)na[0]=e[i],na[1]=e[i+1],na[2]=e[i+2],o(na,na,a),e[i]=na[0],e[i+1]=na[1],e[i+2]=na[2];return e}});var L2=he((IM,k2)=>{k2.exports={EPSILON:Hf(),create:Uf(),clone:av(),angle:uv(),fromValues:Bf(),copy:pv(),set:vv(),equals:xv(),exactEquals:bv(),add:_v(),subtract:Xf(),sub:Tv(),multiply:Yf(),mul:kv(),divide:Kf(),div:Cv(),min:Iv(),max:Nv(),floor:Gv(),ceil:Dv(),round:qv(),scale:Uv(),scaleAndAdd:jv(),distance:Qf(),dist:Xv(),squaredDistance:Zf(),sqrDist:Qv(),length:Jf(),len:e2(),squaredLength:eh(),sqrLen:n2(),negate:a2(),inverse:s2(),normalize:jf(),dot:Wf(),cross:l2(),lerp:h2(),random:d2(),transformMat4:m2(),transformMat3:g2(),transformQuat:y2(),rotateX:w2(),rotateY:E2(),rotateZ:T2(),forEach:S2()}});var R2=he((PM,C2)=>{"use strict";function z2(){let e={};return{on(t,r){return(e[t]=e[t]||[]).push(r),this},emit(t,r){(e[t]||[]).slice().forEach(n=>n(r))}}}C2.exports=function(t){let r=t.ownerDocument||document,n=z2(),o=null,a={dx:0,dy:0,dt:0},i=0,s=()=>r.pointerLockElement||r.webkitPointerLockElement||null,c=()=>{if(s())return;let u=t.requestPointerLock||t.webkitRequestPointerLock;if(u)try{let v=u.call(t);v&&v.catch&&v.catch(()=>{})}catch(v){}};t.addEventListener("mousedown",c,!1);let l=()=>{if(!s()){o&&(n.emit("release"),o.emit("end"),o=null);return}o=z2(),i=Date.now(),n.emit("attain",o)};return r.addEventListener("pointerlockchange",l),r.addEventListener("webkitpointerlockchange",l),r.addEventListener("pointerlockerror",()=>n.emit("error")),(r.body||t).addEventListener("mousemove",u=>{o&&(a.dx=u.movementX||u.webkitMovementX||0,a.dy=u.movementY||u.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),o.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(r.exitPointerLock||r.webkitExitPointerLock).call(r)},n}});var G2=he((GM,O2)=>{"use strict";var Ua=zs(),Ba=L2(),c4=R2(),NM=Math.PI/4,OM=Math.PI/6,I2=2,l4=1,f4=2.4,h4=2.4,u4=1e3,d4=5,p4=7,th=hn().C,Xs=[[7,1.6],[7,th.zc],[th.x1-2.95,th.zc]],oa=Xs.slice(1).map((e,t)=>{let r=Xs[t],n=e[0]-r[0],o=e[1]-r[1],a=Math.hypot(n,o);return{a:r,len:a,dir:[n/a,o/a]}}),rh=oa.reduce((e,t)=>e+t.len,0);function P2(e){let t=Math.max(0,Math.min(rh,e));for(let n of oa){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let r=Xs[Xs.length-1];return[r[0],r[1]]}function m4(e){let t=0;for(let n=0;n<oa.length;n++){let o=oa[n],a=t+o.len;if(e<a-1e-4||n===oa.length-1){let i=o.dir,c=e<=t+1e-4&&n>0?oa[n-1].dir:o.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let r=oa[oa.length-1].dir;return{ahead:r,back:[-r[0],-r[1]]}}var v4=Math.PI/4,g4=7,x4=140,y4=70,N2=(e,t,r)=>(1-e)*t+e*r,b4=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;O2.exports=function({getGridSegments:e,getGridParts:t},r){var n=[0,Math.PI],o=[0,Math.PI],a=0,i=[0,0,0],s=[p4,I2,Xs[0][1]],c=0,l=1,u=0,v=[.707,0,.707],h=[0,1,0],p=[0,0,0],m=.5,d=Ua.identity([]),g=Ua.identity([]),x=!1,_=[0,0,0],A=[0,0,0],z=1,I=!1;let N=Ye=>{n[1]+=Ye*v4},q=(Ye,dt,it)=>{if(Ye=Math.max(Math.min(Ye,100),-100),dt=Math.max(Math.min(dt,100),-100),n[0]=0,I){a=0;return}for(a+=Ye;a>=it;)N(1),a-=it;for(;a<=-it;)N(-1),a+=it};c4(document.body).on("attain",Ye=>{Ye.on("data",dt=>{q(dt.dx,dt.dy,x4)})});let j=null,ce=null,Z=0,ue={x:0,y:0},le=58,fe=document.createElement("div");fe.id="museum-mobile-controls",fe.innerHTML=`

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
	`,document.body.appendChild(fe);let Me=fe.querySelector("#museum-joystick"),Ge=fe.querySelector("#museum-joystick-knob"),je=()=>{Ge.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},Be=Ye=>{let dt=Ye.clientX-ue.x,it=Ye.clientY-ue.y,ct=Math.hypot(dt,it);if(ct>le&&(dt=dt/ct*le,it=it/ct*le),Ge.style.transform=`translate(
				calc(-50% + ${dt}px),
				calc(-50% + ${it}px)
			)`,ct<10){i[0]=0,i[2]=0;return}let Je=dt/le,rt=it/le;i[0]=0,i[2]=Math.abs(rt)>.15?rt:0},Gt=(Ye,dt)=>{for(let it=0;it<Ye.length;it++)if(Ye[it].identifier===dt)return Ye[it];return null},Rt=Ye=>!!(Ye&&Ye.closest&&Ye.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Qt=Ye=>{if(!Rt(Ye.target)&&(Ye.cancelable&&Ye.preventDefault(),!I))for(let dt=0;dt<Ye.changedTouches.length;dt++){let it=Ye.changedTouches[dt];if(j===null&&it.clientX<window.innerWidth*.48){j=it.identifier;let ct=Me.getBoundingClientRect();ue.x=ct.left+ct.width/2,ue.y=ct.top+ct.height/2,Be(it)}else ce===null&&it.clientX>=window.innerWidth*.48&&(ce=it.identifier,Z=it.clientX,a=0)}},It=Ye=>{if(Rt(Ye.target)||(Ye.cancelable&&Ye.preventDefault(),I))return;let dt=j===null?null:Gt(Ye.touches,j);dt&&Be(dt);let it=ce===null?null:Gt(Ye.touches,ce);if(it){let ct=it.clientX-Z;Z=it.clientX,q(ct,0,y4)}},Ar=Ye=>{if(!Rt(Ye.target)){Ye.cancelable&&Ye.preventDefault();for(let dt=0;dt<Ye.changedTouches.length;dt++){let it=Ye.changedTouches[dt];it.identifier===j&&(j=null,je()),it.identifier===ce&&(ce=null)}}};document.addEventListener("touchstart",Qt,{passive:!1}),document.addEventListener("touchmove",It,{passive:!1}),document.addEventListener("touchend",Ar,{passive:!1}),document.addEventListener("touchcancel",Ar,{passive:!1});let Yt=document.createElement("style");Yt.textContent=`

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
	`,document.head.appendChild(Yt);var Rr={};let Kr=Ye=>{if(Ye.defaultPrevented||Ye.ctrlKey||Ye.altKey||Ye.metaKey)return;let dt=Ye.type==="keydown";Rr[Ye.code]=dt,dt&&!Ye.repeat&&!I&&((Ye.code==="KeyA"||Ye.code==="ArrowLeft")&&N(-1),(Ye.code==="KeyD"||Ye.code==="ArrowRight")&&N(1)),x=!1;let it=Rr.KeyW||Rr.ArrowUp?1:0;i=[0,0,(Rr.KeyS||Rr.ArrowDown?1:0)-it],Ye.preventDefault()};window.addEventListener("keydown",Kr),window.addEventListener("keyup",Kr);var En=0;return{pos:s,fmouse:o,forward:v,up:h,setPaused:Ye=>{I=!!Ye,I&&(i[0]=0,i[2]=0,je())},place:(Ye,dt)=>{c=Math.max(0,Math.min(rh,Ye));let it=P2(c);s[0]=it[0],s[2]=it[1],n[1]=dt,o[1]=dt,a=0,l=1},view:()=>d,proj:()=>(Ua.perspective(g,r(),window.innerWidth/window.innerHeight,.1,700),g),tick:({time:Ye})=>{let dt=Ye-En;En=Ye;let it=[0,0,0],ct=[];Ba.set(v,Math.sin(o[1]),0,-Math.cos(o[1])),Ba.set(h,0,1,0);let Se=x?h4:f4,Je=Math.sin(n[1]),rt=-Math.cos(n[1]),wt=m4(c),xt=Je*wt.ahead[0]+rt*wt.ahead[1],tr=Je*wt.back[0]+rt*wt.back[1],mt=l;Math.max(xt,tr)>.3&&(mt=xt>=tr?1:-1);let Mt=I?0:-i[2]*Se;u+=(Mt-u)*(1-Math.exp(-Math.min(dt,.1)*5.5)),Mt===0&&Math.abs(u)<.01&&(u=0);let At=u*mt*Math.min(dt,.1);I&&(i[0]=0,i[2]=0,At=0,u=0),At!==0&&(l=Math.sign(At)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(rh,c+At));let y=P2(c);Ba.set(p,y[0]-s[0],0,y[1]-s[2]);let Kt=Ba.len(p);Kt===0&&m!==.25&&(m=(Math.abs((m+.5)%1-.5)-.25)*.8+.25,(m+.01)%.25<.02&&(m=.25));let Pt=m;if(m+=Kt/(x?d4:u4),s[1]=I2,Ba.add(s,s,p),z<1){z+=dt/l4,z=Math.min(z,1);let Ke=b4(z);Ba.set(s,N2(Ke,_[0],A[0]),s[1],N2(Ke,_[2],A[2]))}o[0]=0,o[1]+=(n[1]-o[1])*Math.min(1,Math.min(dt,.1)*g4),Math.abs(n[1]-o[1])<5e-4&&(o[1]=n[1]),Ua.identity(d),Ua.rotateX(d,d,0),Ua.rotateY(d,d,o[1]),Ua.translate(d,d,Ba.scale(it,s,-1))}}}});var D2=he((FM,F2)=>{"use strict";var{skylightGLSL:w4,Z_START:_4,Z_END:E4,GLASS_Y:M4}=Mi(),{oculusGLSL:T4,A:ja}=Jn(),{windowLightGLSL:A4,C:Mc}=hn(),{doorLightGLSL:S4}=Ea(),Tc=dn(),Un=e=>e.toFixed(4),nh=.1,oh=700,Wa={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.045};function k4(e,t){let r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],u=t[8],v=t[9],h=t[10],p=t[11],m=t[12],d=t[13],g=t[14],x=t[15],_=r*s-n*i,A=r*c-o*i,z=r*l-a*i,I=n*c-o*s,N=n*l-a*s,q=o*l-a*c,J=u*d-v*m,j=u*g-h*m,ce=u*x-p*m,Z=v*g-h*d,ue=v*x-p*d,le=h*x-p*g,fe=_*le-A*ue+z*Z+I*ce-N*j+q*J;return fe?(fe=1/fe,e[0]=(s*le-c*ue+l*Z)*fe,e[1]=(o*ue-n*le-a*Z)*fe,e[2]=(d*q-g*N+x*I)*fe,e[3]=(h*N-v*q-p*I)*fe,e[4]=(c*ce-i*le-l*j)*fe,e[5]=(r*le-o*ce+a*j)*fe,e[6]=(g*z-m*q-x*A)*fe,e[7]=(u*q-h*z+p*A)*fe,e[8]=(i*ue-s*ce+l*J)*fe,e[9]=(n*ce-r*ue-a*J)*fe,e[10]=(m*N-d*z+x*_)*fe,e[11]=(v*z-u*N-p*_)*fe,e[12]=(s*j-i*Z-c*J)*fe,e[13]=(r*Z-n*j+o*J)*fe,e[14]=(d*A-m*I-g*_)*fe,e[15]=(u*I-v*A+h*_)*fe,e):null}function L4(e,t,r){let n=new Array(16);for(let o=0;o<4;o++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*r[o*4+s];n[o*4+a]=i}for(let o=0;o<16;o++)e[o]=n[o];return e}var z4=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;F2.exports=(e,t)=>{let r=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),o=r?10:22,a=()=>t.post>=2?2:4,i=Me=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},Me||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),l=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,u=e.framebuffer({color:c,depth:l||!0}),v=[s(),s()],h=[s(),s()],p=[s(),s()],m=[s(),s()],d=new Array(16).fill(0),g=new Array(16).fill(0),x=[0,0,0],_={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},A={position:[-1,-1,3,-1,-1,3]},z=(Me,Ge,je)=>e(Object.assign({vert:z4,frag:Me,attributes:A,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Ge,framebuffer:e.prop("out")},je||{})),I=[2.6,0,_4-3.2,12.6,M4,E4+.4],N=[ja.x0-.2,0,ja.z0,ja.x1,ja.domeTop,ja.z1],q=[Mc.x0,0,Mc.z0,Mc.x1,7.6,Mc.z1],J=[.35,0,.35,13.65,7.6,9],j=Me=>`vec3(${Un(Me[0])}, ${Un(Me[1])}, ${Un(Me[2])}), vec3(${Un(Me[3])}, ${Un(Me[4])}, ${Un(Me[5])})`,ce=z(`
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

	${w4()}
	${T4()}
	${A4()}
	${S4()}

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
			vec2 t = hitBox(eye, rd, ${j(I)});
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
			vec2 t = hitBox(eye, rd, ${j(N)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Un(ja.dome.base)} && p.x > ${Un(ja.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${j(q)});
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
			vec2 t = hitBox(eye, rd, ${j(J)});
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
	}`,{depthTex:()=>l,invVP:()=>d,eye:()=>x,time:e.context("time"),night:()=>Tc.night,strength:()=>{let Me=Wa.shafts*_.shafts,Ge=Tc.night;return[.06*Me*(1+.9*Ge),.1*Me*(1+.9*Ge),.07*Me*(1+.4*Ge),.04*Me*(1-.75*Ge)]}}),Z=z(`
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
	}`,{src:e.prop("src"),dir:(Me,Ge)=>[Ge.dir[0]/Ge.size[0],Ge.dir[1]/Ge.size[1]]}),ue=z(`
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
	}`,{src:e.prop("src"),texel:(Me,Ge)=>[.5/Ge.size[0],.5/Ge.size[1]],threshold:e.prop("threshold")}),le=z(`
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
		return 2.0 * ${Un(nh)} * ${Un(oh)} / (${Un(oh+nh)} - z * ${Un(oh-nh)});
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
	}`,{scene:()=>c,depthTex:()=>l||c,soft:()=>v[0],bloomA:()=>h[0],bloomB:()=>p[0],shafts:()=>m[0],res:Me=>[Me.drawingBufferWidth,Me.drawingBufferHeight],time:e.context("time"),exposure:()=>Wa.exposure*_.exposure,vignette:()=>Math.min(1,Wa.vignette+_.vignette+.22*Tc.night),night:()=>Tc.night,grain:()=>Wa.grain,bloomK:()=>Wa.bloom,letterbox:()=>_.letterbox,fade:()=>_.fade,fadeColor:()=>_.fadeColor,aperture:()=>t.post>=2?_.aperture:0,focus:()=>_.focus,hasDepth:n?1:0},{framebuffer:null}),fe=e({framebuffer:()=>u});return{shot:_,look:Wa,hasDepth:n,capture(Me,Ge,je){let Be=Me.drawingBufferWidth,Gt=Me.drawingBufferHeight;u.resize(Be,Gt);let Rt=Math.max(1,Math.ceil(Be/2)),Qt=Math.max(1,Math.ceil(Gt/2));v.forEach(It=>It.resize(Rt,Qt)),h.forEach(It=>It.resize(Math.max(1,Math.ceil(Be/4)),Math.max(1,Math.ceil(Gt/4)))),p.forEach(It=>It.resize(Math.max(1,Math.ceil(Be/8)),Math.max(1,Math.ceil(Gt/8)))),m.forEach(It=>It.resize(Math.max(1,Math.ceil(Be/a())),Math.max(1,Math.ceil(Gt/a())))),L4(g,Ge.proj,Ge.view),k4(d,g),x[0]=Ge.eye[0],x[1]=Ge.eye[1],x[2]=Ge.eye[2],fe(()=>{e.clear({color:[0,0,0,1],depth:1}),je()})},present(){let Me=Ge=>[Ge.width,Ge.height];n&&t.post>=1&&Wa.shafts*_.shafts>.001?(ce({out:m[0]}),Z({out:m[1],src:m[0],dir:[1,0],size:Me(m[0])}),Z({out:m[0],src:m[1],dir:[0,1],size:Me(m[0])})):e.clear({color:[0,0,0,1],framebuffer:m[0]}),ue({out:v[0],src:c,size:[u.width,u.height],threshold:0}),Z({out:v[1],src:v[0],dir:[1,0],size:Me(v[0])}),Z({out:v[0],src:v[1],dir:[0,1],size:Me(v[0])}),ue({out:h[0],src:v[0],size:Me(v[0]),threshold:.42}),Z({out:h[1],src:h[0],dir:[1,0],size:Me(h[0])}),Z({out:h[0],src:h[1],dir:[0,1],size:Me(h[0])}),ue({out:p[0],src:h[0],size:Me(h[0]),threshold:0}),Z({out:p[1],src:p[0],dir:[1.5,0],size:Me(p[0])}),Z({out:p[0],src:p[1],dir:[0,1.5],size:Me(p[0])}),le({out:null})}}}});var B2=he((DM,U2)=>{"use strict";var $2=dn().GLSL,C4=_a(),ah=Ea(),{C:R4,FAR_DOOR:I4}=hn(),P4=100*Math.PI/180,q2=e=>[I4.x-e[2],e[1],R4.zc-7+e[0]],H2=e=>[-e[2],e[1],e[0]];function N4(e){let t=[],r=[],n=[],o=[],a=C4.createBuilder(t,r,n,o);ah.addFrames(a,e);let i=ah.glassPanes(e),s=c=>{let l=[];for(let u=0;u<c.length;u+=3)l.push([c[u],c[u+1],c[u+2]]);return l};return{position:s(t),normal:s(r),elements:n,glass:i}}U2.exports=e=>{let t=ah.DOOR,r=["left","right"].map(u=>{let v=N4(u),h=v.position.length;return{part:u,hinge:u==="left"?t.x0:t.x1,sign:u==="left"?-1:1,src:v.position.map(p=>p.slice()),srcN:v.normal.map(p=>p.slice()),srcG:v.glass.map(p=>p.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(v.elements),type:"uint32"}),glassCount:v.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(v.glass.length*3),outGN:new Float32Array(v.glass.length*3)}}),n=null;function o(u){if(u!==n){n=u;for(let v of r){let h=v.sign*u,p=Math.cos(h),m=Math.sin(h),d=_=>{let A=_[0]-v.hinge,z=_[2];return[v.hinge+A*p+z*m,_[1],-A*m+z*p]},g=_=>[_[0]*p+_[2]*m,_[1],-_[0]*m+_[2]*p];v.src.forEach((_,A)=>{let z=q2(d(_));v.outP.set(z,A*3),v.outN.set(H2(g(v.srcN[A])),A*3)});let x=H2(g([0,0,1]));v.srcG.forEach((_,A)=>{v.outG.set(q2(d(_)),A*3),v.outGN.set(x,A*3)}),v.pos.subdata(v.outP),v.nrm.subdata(v.outN),v.gpos.subdata(v.outG),v.gnrm.subdata(v.outGN)}}}o(0);let a=`
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
		${$2}
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
		${$2}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,l=()=>{o(c*P4);for(let u of r)i({pos:u.pos,nrm:u.nrm,el:u.el})};return l.glass=()=>{for(let u of r)s({pos:u.gpos,nrm:u.gnrm,count:u.glassCount})},l.setOpen=u=>{c=u||0},l}});var W2=he(($M,j2)=>{"use strict";var O4=dn().GLSL,{skylightGLSL:G4}=Mi(),{oculusGLSL:F4}=Jn(),{windowLightGLSL:D4}=hn(),ko=.22;function $4(){let e=[],t=[],r=[],n=[];for(let c=0;c<=14;c++){let l=c/14,u=ko*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9);for(let v=0;v<=4*2;v++){let h=v/4-1,p=l*ko-ko*.12,m=h*u,d=Math.abs(h)*u*.35-.12*l*l*ko;e.push([p,d,m]),t.push([0,1,0]),r.push([l,h])}}let i=4*2+1;for(let c=0;c<14;c++)for(let l=0;l<i-1;l++){let u=c*i+l,v=u+1,h=u+i,p=h+1;n.push([u,h,v],[v,h,p])}let s=e.length;return e.push([-ko*.12,0,-.003],[-ko*.12,0,.003],[-ko*.24,-.01,.0015],[-ko*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),r.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([s,s+2,s+1],[s,s+3,s+2]),{pos:e,nrm:t,uv:r,idx:n}}j2.exports=e=>{let t=$4(),r=e({vert:`
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
		${O4}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${G4()}
		${F4()}
		${D4()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=dn(),o=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(ko*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(r({model:a.model}),n.night>.01&&o({model:a.model}))}}});var Y2=he((qM,X2)=>{"use strict";var{skylightGLSL:q4,Z_START:V2,Z_END:H4}=Mi(),{oculusGLSL:U4,A:Hi}=Jn();X2.exports=(e,t)=>{let r=t.isPhone?900:2600,n=t.isPhone?350:900,o=7,a=()=>(o=o*16807%2147483647,(o-1)/2147483646),i=[];for(let s=0;s<r;s++)i.push([2.5+a()*10.5,.3+a()*8,V2-3.5+a()*(H4-V2+4.5),a()]);for(let s=0;s<n;s++)i.push([Hi.x0+.3+a()*(Hi.x1-Hi.x0-.6),.3+a()*7.5,Hi.z0+.3+a()*(Hi.z1-Hi.z0-.6),a()]);return e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;

		${q4()}
		${U4()}

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
		}`,attributes:{seed:i},count:i.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:s=>s.viewportHeight*.006},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}})}});var tg=he((HM,eg)=>{"use strict";var{C:J2}=hn(),K2=dn(),Q2=15.3,B4=37.1,Z2=J2.z1+.9,j4=J2.z1+.7+16-.6;eg.exports=(e,t)=>{let r=t.isPhone?36:80,n=11,o=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let l=0;l<r;l++){let u=.35+Math.pow(o(),1.8)*2.4;a.push([Q2+o()*(B4-Q2),u,Z2+o()*(j4-Z2),o()])}let i=[],s=[];a.forEach(l=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(u=>{i.push(u[0],u[1]),s.push(...l)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>K2.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){K2.night>.01&&c()}}});var og=he((UM,ng)=>{"use strict";function W4(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var rg={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},V4=["th","ng","er"];function X4(e,t,r){r=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},r||{});let n=e.getContext("2d"),o={};Object.keys(rg).forEach(d=>{o[d]=rg[d]*r.pace});let a=[],i=0,s=0,c=0,l=[];function u(d,g){let x=W4(r.seed),_=r.xh,A={},z=fe=>{let Me=t[fe];if(!Me)return null;let Ge=Math.floor(x()*Me.length);return Me.length>1&&Ge===A[fe]&&(Ge=(Ge+1)%Me.length),A[fe]=Ge,Me[Ge]},I=fe=>{if(t[fe])return{g:z(fe),sc:1};let Me=fe.toLowerCase();return t[Me]?{g:z(Me),sc:/[A-Z]/.test(fe)?1.32:1}:null},N=[],q=.15,J=0,j=0,ce=(x()-.5)*.02,Z=g/_,ue=d.split(/\n\s*\n/);ue.forEach((fe,Me)=>{fe.replace(/\s+/g," ").trim().split(" ").forEach(je=>{let Be=[];for(let It=0;It<je.length;It++){let Ar=je.substr(It,2).toLowerCase();if(V4.indexOf(Ar)>=0&&t[Ar]&&x()<.55&&je[It]===je[It].toLowerCase()){Be.push({ch:Ar,gl:{g:z(Ar),sc:1}}),It++;continue}let Yt=I(je[It]);Yt&&Yt.g&&Be.push({ch:je[It],gl:Yt})}let Gt=Be.map(()=>.17+x()*.07),Rt=Be.reduce((It,Ar,Yt)=>It+Ar.gl.g.w*Ar.gl.sc+Gt[Yt],0);J>0&&J+Rt>Z&&(J=0,j++,q+=o.line,ce=(x()-.5)*.02),Be.forEach((It,Ar)=>{let Yt=It.gl.g,Rr=It.gl.sc*(.95+x()*.1),Kr=(x()-.5)*.06,En=(x()-.5)*.08+ce*J,Ye=J,dt=j*r.lineHeight+1.9+En,it=Math.cos(Kr),ct=Math.sin(Kr),Se=rt=>[(Ye+(rt[0]*it-rt[1]*ct)*Rr)*_,(dt+(rt[0]*ct+rt[1]*it)*Rr)*_],Je=(rt,wt)=>{let xt=0;for(let mt=1;mt<rt.length;mt++)xt+=Math.hypot(rt[mt][0]-rt[mt-1][0],rt[mt][1]-rt[mt-1][1]);let tr=Math.max(wt?.06:.07,xt/(r.speed*_));N.push({pts:rt,L:xt,start:q,dur:tr,dot:wt}),q+=tr};if(Yt.s.forEach((rt,wt)=>{wt>0&&(q+=o.stroke),Je(rt.map(Se),!1)}),Yt.dot){let rt=Yt.s[0][0];Yt.s.forEach(xt=>xt.forEach(tr=>{tr[1]<rt[1]&&(rt=tr)}));let wt=Se([rt[0]+.1,-1.36]);q+=o.stroke*1.4,Je([wt,[wt[0]+_*.05,wt[1]+_*.03]],!0)}q+=o.letter*(.6+x()*.8),J+=Yt.w*Rr+Gt[Ar]});let Qt=je[je.length-1];q+=/[.!?]/.test(Qt)?o.stop:/[,;:]/.test(Qt)?o.comma:o.word,J+=.55+x()*.2}),Me<ue.length-1&&(J=0,j+=1.6,q+=o.para)});let le=(j+1)*r.lineHeight*_+_*1.55;return{strokes:N,total:q,height:le}}function v(d,g){let x=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(d*x),e.height=Math.round(g*x),e.style.height=g+"px",e.style.width=d+"px",n.setTransform(x,0,0,x,0,0),n.clearRect(0,0,d,g),n.strokeStyle=r.ink,n.fillStyle=r.ink,n.lineCap="round",n.lineJoin="round",r.shadow&&(n.shadowColor=r.shadow,n.shadowBlur=r.shadowBlur||6)}let h=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;function p(d,g){let x=l[d.i]||0;if(g<=x)return;let _=r.width*r.xh,A=0;for(let z=1;z<d.pts.length;z++){let I=d.pts[z-1],N=d.pts[z],q=Math.hypot(N[0]-I[0],N[1]-I[1]),J=A,j=A+q;if(A=j,j<=x||q===0)continue;if(J>=g)break;let ce=Math.max(0,(x-J)/q),Z=Math.min(1,(g-J)/q),ue=[I[0]+(N[0]-I[0])*ce,I[1]+(N[1]-I[1])*ce],le=[I[0]+(N[0]-I[0])*Z,I[1]+(N[1]-I[1])*Z],fe=(J+j)/2/(d.L||1),Me=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,fe)));n.lineWidth=_*Me,n.globalAlpha=.86+.14*Me,n.beginPath(),n.moveTo(ue[0],ue[1]),n.lineTo(le[0],le[1]),n.stroke()}d.dot&&x===0&&(n.globalAlpha=1,n.beginPath(),n.arc(d.pts[0][0],d.pts[0][1],_*.75,0,Math.PI*2),n.fill()),l[d.i]=g}function m(d){let g=(d-c)/1e3;for(let x=0;x<a.length;x++){let _=a[x];if(_.start>g)break;let A=Math.min(1,(g-_.start)/_.dur);p(_,h(A)*_.L)}if(r.onPen){let x=0;for(;x+1<a.length&&a[x+1].start<=g;)x++;a[x]&&r.onPen(a[x].pts[0][1])}g<i?s=requestAnimationFrame(m):r.onDone&&r.onDone()}return{write(d,g){cancelAnimationFrame(s);let x=e.parentElement.clientWidth,_=u(d,x);a=_.strokes,i=_.total,a.forEach((z,I)=>{z.i=I}),l=[],v(x,_.height);let A=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(g||A){a.forEach(z=>p(z,z.L));return}return c=performance.now(),s=requestAnimationFrame(m),i},finish(){cancelAnimationFrame(s),a.forEach(d=>p(d,d.L)),r.onDone&&r.onDone()},stop(){cancelAnimationFrame(s)}}}ng.exports=X4});var sh=he((BM,ag)=>{"use strict";var ih=dn(),Y4='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',K4='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';ag.exports=function(t){let r=document.createElement("button");r.type="button",r.className=t+" light-toggle";let n=()=>{let o=ih.isNight;r.innerHTML=o?Y4:K4,r.setAttribute("aria-label",o?"Switch to day":"Switch to night"),r.title=o?"Day":"Night",r.setAttribute("aria-pressed",o?"true":"false")};return n(),ih.onChange(n),["mousedown","pointerdown"].forEach(o=>r.addEventListener(o,a=>a.stopPropagation())),r.addEventListener("click",o=>{o.stopPropagation(),ih.toggle()}),r}});var vg=he((jM,mg)=>{"use strict";var Lo=zs(),Ac=Df(),ch=G0(),Q4=xs(),lh=qf(),Z4=Qn(),Sc=!Z4.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Cn}=Jn(),{C:Yr,PAINTING_X:Wi}=hn(),Rn=e=>Math.max(0,Math.min(1,e)),Ie=(e,t,r)=>e+(t-e)*r,nr=(e,t,r)=>[Ie(e[0],t[0],r),Ie(e[1],t[1],r),Ie(e[2],t[2],r)],Ct=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ig=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],sg=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Le=(e,t,r)=>{let n=Rn((r-e)/(t-e));return n*n*(3-2*n)};function J4(e,t,r,n,o,a){if(o<=0)return[e,r];let i=2/n,s=i*o,c=1/(1+s+.48*s*s+.235*s*s*s),l=a*n,u=Math.max(-l,Math.min(l,e-t)),v=e-u,h=(r+i*u)*o,p=(r-i*h)*c,m=v+(u+h)*c;return t-e>0==m>t&&(m=t,p=0),[m,p]}var cg=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,e6=e=>e*e*e,fh=e=>1-Math.pow(1-e,3),xr=e=>-(Math.cos(Math.PI*e)-1)/2;function Tr(e,t){let r=e.length-1,n=Rn(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],l=e[Math.min(r,o+2)],u=a*a,v=u*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-l[h])*u+(-i[h]+3*s[h]-3*c[h]+l[h])*v))}var bt=(e,t,r,n)=>({eye:e,target:t,fov:r,roll:n||0});function Qa(e,t,r){return bt(nr(e.eye,t.eye,r),nr(e.target,t.target,r),Ie(e.fov,t.fov,r),Ie(e.roll,t.roll,r))}var vh=()=>Le(.75,1.3,window.innerWidth/window.innerHeight),mn=(e,t)=>Qa(e,t,vh()),kc=[7,3.95,Yr.hallEnd-.05],t6=[Yr.x1,2.9,Yr.zc],Bi=[16.75,4.55,6.75],gh=[6.92,2.72,14.5],oo=[7.3,.015,47.1],r6=[Bi,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],gh],n6=[gh,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],oo],Xa=[Wi[0],3,Yr.z0],Ya=[Wi[1],3,Yr.z0],uh=47.45,pg=4.6,o6=13.2,a6=1.42,Ys=[7.55,1.25,46.75],xh=[17.25,2.42,46],yh=[26.05,1.95,46],Ks=[36.15,.015,44],Cc=()=>Ie(6.8,6.15,vh()),i6=[Ys,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],xh],s6=[xh,[20.2,2.05,45.6],[23.2,1.8,45],yh],Ka=[Wi[2],3,Yr.z0],dh=[34.8,1.35,46],ia=[7.89,.03,19.03],lg=.36,fg=13.64,Jr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Bn(e){let t=e.side==="left"?1:-1;return nr([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],vh())}function c6(e){return e.side==="left"?mn(bt([8.6,3.9,e.z],[lg,1.45,e.z],76),bt([8,3.6,e.z+.7],[lg,3.95,e.z-2],46,-.008)):mn(bt([5.4,3.9,e.z],[fg,1.45,e.z],76),bt([6,3.6,e.z-.7],[fg,3.95,e.z+2],46,-.008))}var l6=()=>[Ks,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Bn(Jr[0])],f6=()=>[Bn(Jr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Bn(Jr[3])],h6=()=>[Bn(Jr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],ia],hg={2:{pos:()=>gh,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Ys,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>xh,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>yh,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>dh,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Bn(Jr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Bn(Jr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Bn(Jr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Bn(Jr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Bn(Jr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Bn(Jr[5]),amp:[.12,.08,.1],tumble:.5}},aa=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),r=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=mn(bt([Yr.x0+.9,1.85,Yr.zc+.25],[Yr.x1,2.85,Yr.zc-.1],64),bt([Yr.x0+1.2,2,Yr.zc+.35],[Yr.x1,2.6,Yr.zc-.15],50));return n.eye=Ct(Ct(n.eye,[t,0,0]),r),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],r=mn(bt([16.6,1.9,9.2],[17.3,.4,5.6],64),bt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return r.eye=Ct(r.eye,t),r}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],r=mn(bt([7,1.35,13],[7.2,7.6,20.4],74,.05),bt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return r.eye=Ct(r.eye,t),r}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],r=mn(bt([7,3.6,43.7],[7,3.85,kc[2]],74),bt([7,3.6,41.3],[7,3.95,kc[2]],46));return r.eye=Ct(r.eye,t),r}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=mn(bt([7,3.9,40.3],[7,1.35,kc[2]],76),bt([6.3,3.6,41.2],[3.7,3.95,kc[2]],46,-.008));return r.eye=Ct(r.eye,t),r}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=mn(bt([7.15,.15,46],[7.3,.04,oo[2]],50),bt([7.05,.14,45.9],[7.25,.05,oo[2]],32));return r.eye=Ct(r.eye,t),r}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],r=mn(bt([7.15,.1,46.3],[7.05,.1,uh],50),bt([7.1,.12,45.85],[7,.2,uh],30));return r.eye=Ct(r.eye,t),r}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],r=mn(bt([7.3,.85,45.65],[7.6,1.38,47.1],64),bt([7.25,.82,45.8],[7.65,1.35,47.1],44));return r.eye=Ct(r.eye,t),r}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=mn(bt([Xa[0],2.3,46.85],[Xa[0],1.25,Xa[2]],74),bt([Xa[0]-.6,2.55,46.85],[Xa[0]+1.9,2.9,Xa[2]],46,.008));return r.eye=Ct(r.eye,t),r}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=mn(bt([Ya[0],1.95,46.85],[Ya[0],1,Ya[2]],74),bt([Ya[0]-.6,2.1,46.85],[Ya[0]+1.9,2.75,Ya[2]],46,.008));return r.eye=Ct(r.eye,t),r}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=mn(bt([Ka[0],1.4,46.85],[Ka[0],.6,Ka[2]],74),bt([Ka[0]-.6,1.45,46.85],[Ka[0]+1.9,2,Ka[2]],46,.008));return r.eye=Ct(r.eye,t),r}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=mn(bt([34.75,.5,44.15],[Yr.x1,.8,43.95],66),bt([34.75,.45,44.3],[Yr.x1,.35,43.95],50));return r.eye=Ct(r.eye,t),r}},...Jr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(r){let n=[Math.sin(r*.15)*.04,Math.sin(r*.25)*.015,Math.sin(r*.11)*.04],o=c6(e);return o.eye=Ct(o.eye,n),o}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,r=mn(bt([7.75,2.6,18.6],[7.89,0,19.08],60),bt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=r.eye[0]-ia[0],o=r.eye[2]-ia[2];return r.eye=[ia[0]+n*Math.cos(t)-o*Math.sin(t),r.eye[1],ia[2]+n*Math.sin(t)+o*Math.cos(t)],r}}],u6=[1,.96,.88];function ug(e,t){return{dur:t,cam(r,n,o){let a=xr(r),i=Qa(n,o,a),s=Jr[e].side==="left"?1:-1;return i.eye=Ct(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(r,n,o){let a={};for(let i in o)typeof o[i]=="number"&&(a[i]=Ie(n[i],o[i],r));return a.aperture=Ie(n.aperture,o.aperture,r)*(1-.5*Math.sin(Math.PI*r)),a},leaf(r){let n=xr(r),o=Bn(Jr[e]),a=Bn(Jr[e+1]),i=Jr[e].side==="left"?1:-1,s=Ct(nr(o,a,.5),[i*1.2,.5,0]),c=Tr([o,nr(o,s,.6),s,nr(a,s,.6),a],n);return{phase:"fly",pos:Ct(c,[0,Math.sin(r*Math.PI*5)*.07*Math.sin(Math.PI*r),0]),tumble:.5+.35*Math.sin(Math.PI*r)}}}}var hh=[{dur:6.2,cam(e,t,r){if(e<.5){let s=e6(e/.5),c=nr(t.eye,[Yr.x1-3.2,2.6,Yr.zc],s),l=nr(t.target,t6,Le(0,.6,e/.5));return bt(c,l,Ie(t.fov,t.fov-8,s),Ie(t.roll,.04,s))}let n=fh((e-.5)/.5),o=[[Cn.cx+.4,10.4,Cn.zc+.6],[Cn.cx-.6,7.6,Cn.zc+1.3],[Cn.cx-1.9,4.6,Cn.zc+1.75],r.eye],a=[[Cn.cx-.1,0,Cn.zc-.2],[Cn.cx-1,.4,Cn.zc-.1],[Cn.cx-1.1,.8,Cn.zc-.2],r.target];return bt(Tr(o,n),Tr(a,n),Ie(r.fov+14,r.fov,n),Ie(-.25,r.roll,n))},look(e,t,r){let n=Le(.22,.5,e),o=1-Le(.5,.74,e);return{fade:e<.5?n:o,fadeColor:u6,exposure:Ie(t.exposure,r.exposure,Le(.5,.9,e))*(1+2.2*(e<.5?Le(.15,.5,e):1-Le(.5,.8,e))),letterbox:Ie(t.letterbox,r.letterbox,Le(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):r.aperture*Le(.6,1,e),focus:Ie(4,r.focus,Le(.5,1,e)),shafts:Ie(t.shafts,r.shafts,Le(.4,.6,e)),vignette:Ie(t.vignette,r.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,r,n){let o=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],r.eye],a=Tr(o,xr(e)),i=Le(0,.12,e)*(1-Le(.82,1,e)),s=nr(nr(t.target,r.target,Le(.55,1,e)),n.pos,i),c=Ie(t.fov,r.fov,Le(.3,1,e))-6*Math.sin(Math.PI*e),l=Ie(t.roll,r.roll,e)+.05*Math.sin(Math.PI*2*e);return bt(a,s,c,l)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Ie(t.exposure,r.exposure,Le(.25,.75,e)),letterbox:Ie(t.letterbox,r.letterbox,e),focus:Ie(a,r.focus,Le(.8,1,e)),aperture:Ie(.7,r.aperture,Le(.8,1,e)),shafts:Ie(t.shafts,r.shafts,Le(.3,.8,e)),vignette:Ie(t.vignette,r.vignette,e)}},leaf(e){let t=cg(e),r=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:Ct(Tr(r6,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),r]),tumble:1-.5*Le(.8,1,e)}}},{dur:11.5,cam(e,t,r,n){let o=Tr([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Le(0,.8,e)*.6+xr(Rn(e/.8))*.4),a=Tr([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],r.eye],xr(Le(.8,1,e))),i=e<.8?o:a,s=nr(nr(t.target,n.pos,Le(.03,.22,e)),r.target,Le(.82,1,e)),c=Ie(t.fov,r.fov,Le(.15,.7,e))-6*Le(.6,.8,e)*(1-Le(.85,1,e)),l=Ie(t.roll,r.roll,Le(0,.6,e))-.04*Math.sin(Math.PI*e);return bt(i,s,c,l)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:Ie(t.exposure,r.exposure,Le(.5,1,e)),letterbox:Ie(t.letterbox,r.letterbox,e),focus:Ie(a,r.focus,Le(.84,1,e)),aperture:Ie(1.1,r.aperture,Le(.84,1,e)),shafts:Ie(t.shafts,r.shafts,Le(.2,.9,e)),vignette:Ie(t.vignette,r.vignette,Le(.5,1,e))}},leaf(e){let t=Ie(cg(e),e,.35),r=Tr(n6,Le(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Le(.55,.76,e)),o=Le(.7,.8,e);return{phase:"fly",pos:Ct(r,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-o),0]),tumble:1-o,swing:n}}},{dur:2.6,cam(e,t,r){let n=xr(e),o=Qa(t,r,n);return o.eye=Ct(o.eye,[0,0,-.35*Math.sin(Math.PI*n)]),o},look(e,t,r){let n=xr(e),o={};for(let a in r)typeof r[a]=="number"&&(o[a]=Ie(t[a],r[a],n));return o},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,r){let n=xr(e),o=Tr([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],r.eye],n),a=nr(t.target,r.target,Le(.1,.85,e));return bt(o,a,Ie(t.fov,r.fov,Le(.2,1,e)),Ie(t.roll,r.roll,n))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Ie(t[o],r[o],Le(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,r){return Qa(t,r,xr(e))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Ie(t[o],r[o],xr(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Ie(pg,Cc(),e)}},{dur:7.5,kick:e=>Rn((e-Ui())/(1-Ui())),cam(e,t,r,n){let o=Ui(),a=Le(0,o,e)*(1-Le(o+.12,o+.35,e)),i=dg(Math.min(e,ji)),s=Ct(t.target,[(i-t.target[0])*.15*a,0,0]),c=Le(o+.12,1,e),l=Tr([t.eye,t.eye,Ct(t.eye,[0,.12,-.3]),r.eye],c);return s=nr(s,n.pos,Le(o+.06,o+.24,e)*(1-Le(.9,1,e))),s=nr(s,r.target,Le(.88,1,e)),bt(l,s,Ie(t.fov,r.fov,c),Ie(t.roll,r.roll,c))},look(e,t,r,n,o){let a=Ui(),i=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),s=Le(0,.12,e)*(1-Le(a+.25,a+.5,e));return{letterbox:Ie(Ie(t.letterbox,r.letterbox,Le(a,1,e)),1.75,s),exposure:Ie(t.exposure,r.exposure,Le(a,1,e)),focus:e<a?t.focus:Ie(t.focus,i,Le(a,a+.2,e)),aperture:Ie(t.aperture,r.aperture,Le(a,1,e)),vignette:Ie(t.vignette,r.vignette,e),shafts:Ie(t.shafts,r.shafts,e)}},leaf(e){let t=Rn((e-Ui())/(1-Ui()));if(t<=0)return{phase:"floor"};let r=Le(0,.85,t)*.85+fh(Le(0,.15,t))*.15;return{phase:"fly",pos:Ct(oo,[(Ys[0]-oo[0])*r+Math.sin(t*9)*.08*(1-t),(Ys[1]-oo[1])*r,(Ys[2]-oo[2])*r+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?dg(e):null}},{dur:9,cam(e,t,r,n){let o=xr(e),a=Tr([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],r.eye],o),i=1-Le(.6,.92,e),s=nr(nr(t.target,n.pos,Le(0,.15,e)),r.target,1-i),c=Ie(t.fov,r.fov,Le(.3,1,e)),l=Ie(t.roll,r.roll,o)+.04*Math.sin(Math.PI*e);return bt(a,s,c,l)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Ie(t.letterbox,r.letterbox,e),exposure:Ie(t.exposure,r.exposure,Le(.3,.8,e)),focus:Ie(a,r.focus,Le(.6,.95,e)),aperture:Ie(t.aperture,r.aperture,Le(.6,1,e)),vignette:Ie(t.vignette,r.vignette,e),shafts:Ie(t.shafts,r.shafts,Le(.3,.8,e))}},leaf(e){let t=xr(e);return{phase:"fly",pos:Ct(Tr(i6,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=xr(e),o=Qa(t,r,n);return o.eye=Ct(o.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Ie(t[o],r[o],e));return n.aperture=Ie(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=xr(e);return{phase:"fly",pos:Ct(Tr(s6,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=xr(e),o=Qa(t,r,n);return o.eye=Ct(o.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=Ie(t[o],r[o],e));return n.aperture=Ie(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=xr(e);return{phase:"fly",pos:Ct(Tr([yh,[29.2,1.75,45.5],[32.2,1.5,45.4],dh],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,r,n){let o=xr(e),a=Tr([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],r.eye],o),i=Le(.05,.3,e)*(1-Le(.8,1,e)),s=nr(nr(t.target,r.target,Le(.6,1,e)),n.pos,i);return bt(a,s,Ie(t.fov,r.fov,Le(.2,1,e)),Ie(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Ie(t.letterbox,r.letterbox,e),exposure:Ie(t.exposure,r.exposure,e),focus:Ie(a,r.focus,Le(.8,1,e)),aperture:Ie(.9,r.aperture,Le(.8,1,e)),vignette:Ie(t.vignette,r.vignette,e),shafts:Ie(t.shafts,r.shafts,e)}},leaf(e){let t=Tr([dh,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ks],Le(0,.85,e)),r=Math.sin(e*Math.PI*6)*.25*(1-Le(.35,.82,e)),n=Le(.78,.88,e);return{phase:"fly",pos:Ct(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),r]),tumble:.7*(1-n),swing:r}}},{dur:12,door(e){let t=Rn((e-.02)/.09);return fh(t)+.07*Math.sin(Rn((e-.08)/.18)*Math.PI)*(1-Rn((e-.08)/.3))},cam(e,t,r,n){let o=Math.sin(e*340)*.012*Le(.02,.05,e)*(1-Le(.08,.16,e)),a=Le(.06,1,e),i=Tr([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],r.eye],a*.55+xr(a)*.45),s=Ct(n.pos,[1,-.2,-1.45]);i=nr(i,s,Le(.1,.22,e)*(1-Le(.52,.72,e)));let c=Le(.06,.16,e)*(1-Le(.86,1,e)),l=nr(t.target,n.pos,c);l=nr(l,r.target,Le(.86,1,e));let u=Ie(t.fov,r.fov,Le(.1,1,e))+6*Math.sin(Math.PI*Le(.08,.9,e)),v=Ie(t.roll,r.roll,e)+.06*Math.sin(Math.PI*2*Le(.1,.9,e))+o;return bt(Ct(i,[0,o,0]),l,u,v)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),i=Le(.02,.06,e)*(1-Le(.08,.3,e));return{letterbox:Ie(t.letterbox,r.letterbox,Le(.1,.4,e)),exposure:Ie(t.exposure,r.exposure,e)*(1+.8*i),focus:Ie(a,r.focus,Le(.86,1,e)),aperture:Ie(.8,r.aperture,Le(.86,1,e)),vignette:Ie(t.vignette,r.vignette,e),shafts:Ie(t.shafts,r.shafts,e)+i}},leaf(e){let t=Rn((e-.05)/.95);if(t<=0)return{phase:"floor"};let r=Tr(l6(),t*.6+xr(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:Ct(r,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>ug(e,7.5)),{dur:10,cam(e,t,r,n){let o=xr(e),a=Tr([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],r.eye],o),i=Le(0,.15,e)*(1-Le(.85,1,e)),s=nr(nr(t.target,r.target,Le(.5,1,e)),n.pos,i);return bt(a,s,Ie(t.fov,r.fov,o)+4*Math.sin(Math.PI*o),Ie(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Ie(t.letterbox,r.letterbox,e),exposure:Ie(t.exposure,r.exposure,e),focus:Ie(a,r.focus,Le(.85,1,e)),aperture:Ie(.6,r.aperture,Le(.85,1,e)),vignette:Ie(t.vignette,r.vignette,e),shafts:Ie(t.shafts,r.shafts,e)}},leaf(e){let t=xr(e),r=Tr(f6(),t);return{phase:"fly",pos:Ct(r,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>ug(e,7.5)),{dur:10,cam(e,t,r,n){let o=xr(e),a=Tr([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],r.eye],o),i=Le(0,.2,e)*(1-Le(.9,1,e)),s=nr(nr(t.target,r.target,Le(.5,1,e)),n.pos,i);return bt(a,s,Ie(t.fov,r.fov,o),Ie(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:Ie(t.letterbox,r.letterbox,e),exposure:Ie(t.exposure,r.exposure,e),focus:Ie(a,r.focus,Le(.85,1,e)),aperture:Ie(.7,r.aperture,Le(.85,1,e)),vignette:Ie(t.vignette,r.vignette,e),shafts:Ie(t.shafts,r.shafts,e)}},leaf(e){let t=Tr(h6(),Le(0,.86,e)),r=Math.sin(e*Math.PI*7)*.3*(1-Le(.4,.84,e)),n=Le(.8,.9,e);return{phase:"fly",pos:Ct(t,[r,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:r}}}],ph=9.2,ji=.6;function dg(e){return e<ji?Ie(Cc(),ph,e/ji):Ie(ph,o6,(e-ji)/(1-ji))}function Ui(){return ji*Rn((oo[0]+.15-Cc())/(ph-Cc()))}var mh={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Lc=e=>Object.assign({},mh,aa[e].look),d6=`
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
`;function zn(e,t,r){let n=document.createElement(e);return t&&(n.className=t),r!==void 0&&(n.innerHTML=r),n}var Va=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function zc(e,t,r){e.querySelectorAll(".tour-line").forEach((n,o)=>{n.style.transitionDelay=(t+o*r).toFixed(2)+"s"})}mg.exports=function(t){let r=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let oe=document.createElement("link");oe.rel="stylesheet",oe.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",oe.setAttribute("data-tour-font",""),document.head.appendChild(oe)}let o=og(),a=null;fetch("res/hand.json").then(oe=>oe.ok?oe.json():null).then(oe=>{a=oe}).catch(()=>{});let i=document.createElement("style");i.textContent=d6+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=zn("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=zn("div","tour-mark",Va(Ac.name)),l=zn("button","tour-free","Explore freely");l.type="button";let u=zn("div","tour-links",ch.icons("tour-icon"));u.insertBefore(sh()("tour-icon"),u.firstChild),Sc&&u.appendChild(l);let v=zn("div","tour-progress",aa.map(()=>"<i></i>").join("")),h=zn("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=h.querySelector("span"),m=zn("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Va(Ac.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);zc(m,.4,.35);let d=Ac.text.split(/\n\s*\n/).map(oe=>`<p class="tour-line">${Va(oe.trim())}</p>`).join(""),g=zn("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Va(Ac.title)}</h2>
		<span class="tour-rule"></span>
		${ch.line("tour-line tour-contact")}
		${d}`);zc(g,.25,.28);let x=zn("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);zc(x,.6,.3);let _=zn("div","tour-card tour-master","");function A(oe){let ke=zn("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Ve=ke.querySelector(".tour-title"),ot=ke.querySelector(".tour-body");return ke.filled=!1,ke.body=ot,ke.fill=()=>{let St=oe();if(!St||ke.filled)return;ke.filled=!0;let Ft=St.title||"";ke.querySelector(".tour-kicker").textContent=Q4(St)||"Oil on canvas";let Mn=ke.querySelector(".visit-row");Mn.innerHTML=lh.button(St),Mn.hidden=!Mn.innerHTML;let Tt=Mn.querySelector(".visit-btn");Tt&&(Tt.addEventListener("click",fr=>{fr.stopPropagation(),lh.open(St)}),ke.warm=()=>lh.warm(St));let Qr=0;Ve.innerHTML=Ft.split(" ").map(fr=>'<span class="tour-word">'+fr.split("").map(nn=>`<span style="transition-delay:${(.35+Qr++*.045).toFixed(3)}s">${Va(nn)}</span>`).join("")+"</span>").join(" "),Ve.setAttribute("aria-label",Ft);let In=.35+Ft.length*.045+.2;ke.querySelector(".tour-rule").style.transitionDelay=In.toFixed(2)+"s";let Sr=String(St.description||"").split(/\n\s*\n/).filter(fr=>fr.trim());if(ke.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&Sr.length){ot.innerHTML=Sr.map(Br=>`<p class="hand-text">${Va(Br.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let fr=ot.querySelector("canvas"),nn=Sr.map(Br=>Br.trim()).join(`

`),Fr=!1,ao=!1,Po=0;ot.addEventListener("wheel",()=>{Fr=!0},{passive:!0}),ot.addEventListener("touchmove",()=>{Fr=!0},{passive:!0});let la=parseFloat(getComputedStyle(ot).fontSize)||17,io=o(fr,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,la*.56),width:.14,seed:3+Ft.length,onPen:Br=>{if(Fr)return;let fa=Br-ot.clientHeight*.55;fa>ot.scrollTop+4&&(ot.scrollTop+=Math.min(6,fa-ot.scrollTop))}});fr.addEventListener("click",Br=>{Br.stopPropagation(),clearTimeout(Po),ao?io.finish():(ao=!0,io.write(nn,!0))}),ke.write=()=>{if(clearTimeout(Po),Fr=!1,ao){io.write(nn,!0);return}io.write("",!0),Po=setTimeout(()=>{ao=!0,io.write(nn)},(In+.4)*1e3)},ke.stopWrite=()=>{clearTimeout(Po),io.stop()};let so=0;window.addEventListener("resize",()=>{clearTimeout(so),so=setTimeout(()=>{ao&&ke.classList.contains("on")&&io.write(nn,!0)},250)})}else ot.innerHTML=Sr.map(fr=>`<p class="tour-line">${Va(fr.trim())}</p>`).join(""),ot.querySelectorAll(".tour-line").forEach((fr,nn)=>{fr.style.transitionDelay=(In+.3+Math.min(nn,6)*.35).toFixed(2)+"s"})},ke}let z=()=>t.paintings?t.paintings():[],I=oe=>z().find(ke=>ke.side==="corridor"&&Math.abs(ke.paintingPosition[0]-oe)<.5),N=A(()=>z().find(oe=>oe.side==="end")),q=()=>zn("div","tour-card",""),J=A(()=>I(Xa[0])),j=A(()=>I(Ya[0])),ce=A(()=>I(Ka[0])),Z=Jr.map(oe=>A(()=>z().find(ke=>ke.side===oe.side&&Math.abs(ke.paintingPosition[2]-oe.z)<.5))),ue=zn("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${Sc?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		${ch.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Sc?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);zc(ue,.5,.35);let le=[m,g,x,_,N,q(),q(),q(),J,j,ce,q(),...Z,ue];s.append(...le,c,u,v,h),document.body.appendChild(s),document.body.classList.add("touring");let fe=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Me=fe?"Scroll":"Swipe",Ge=aa.map((oe,ke)=>ke===0?fe?"Scroll to begin":"Swipe up to begin":ke===1?Me+" to follow the leaf":ke===2?Me+" to follow the light":ke===3?Me+" for its story":ke===6||ke===7||ke===aa.length-1?"":Me+" on"),je=[0];hh.forEach(oe=>je.push(je[je.length-1]+oe.dur));let Be=je[je.length-1],Gt=210,Rt=95,Qt=.35,It=1.4,Ar=.32,Yt=1,Rr=1.3,Kr=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,En=2.2,Ye=.7,dt=.9,it=!0,ct=0,Se=0,Je=0,rt=-10,wt=!1,xt=-1,tr=0,mt=0,Mt=0,At=null,y=Object.assign({},Lc(0)),Kt=aa[0].cam(0),Pt={phase:"home",pos:Bi.slice(),tumble:0},Ke=0,qt=oe=>{let ke=0;for(let Ve=1;Ve<je.length;Ve++)Math.abs(je[Ve]-oe)<Math.abs(je[ke]-oe)&&(ke=Ve);return ke};function $t(oe){let ke=le[oe];ke&&ke.fill&&(ke.fill(),ke.body.scrollTop=0,ke.offsetWidth),le.forEach((Ve,ot)=>{let St=Ve.classList.contains("on");Ve.classList.toggle("on",ot===oe),ot===oe&&!St&&Ve.write&&Ve.write(),ot!==oe&&St&&Ve.stopWrite&&Ve.stopWrite()}),ke&&ke.warm&&ke.warm(),p.textContent=Ge[oe]||"",h.classList.toggle("on",!!Ge[oe])}function lr(){le.forEach(oe=>{oe.stopWrite&&oe.classList.contains("on")&&oe.stopWrite(),oe.classList.remove("on")}),h.classList.remove("on")}let or=null,gn=-1;function rn(oe){if(!it||At)return;let ke=Mt-rt>Qt;if(rt=Mt,ke||!or){let Ve=0,ot=Be;for(let St=0;St<je.length;St++)if(je[St]<=ct-.02&&(Ve=je[St]),je[St]>=ct+.02){ot=je[St];break}or={lo:Ve,hi:ot}}Mt<gn||(wt=!1,Je=Math.max(or.lo,Math.min(or.hi,Je+oe)),Je=Math.max(ct-En,Math.min(ct+En,Je)))}function vo(oe){if(!it||At)return;let ke=wt?Je:ct,Ve;if(oe>0)Ve=je.findIndex(ot=>ot>ke+.05);else{Ve=-1;for(let ot=je.length-1;ot>=0;ot--)if(je[ot]<ke-.05){Ve=ot;break}}Ve<0||(Je=je[Ve],wt=!0,rt=Mt)}let yr=null,Ur=oe=>oe.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(oe=>s.addEventListener(oe,Ur)),s.addEventListener("pointerdown",oe=>{if(oe.stopPropagation(),!(oe.target.closest("button, a")||oe.target.closest(".tour-body"))){yr={x:oe.clientX,y:oe.clientY,lx:oe.clientX,ly:oe.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(oe.pointerId)}catch(ke){}}}),s.addEventListener("pointermove",oe=>{if(!yr)return;let ke=oe.clientX-yr.lx,Ve=oe.clientY-yr.ly;yr.lx=oe.clientX,yr.ly=oe.clientY;let ot=Math.abs(Ve)>=Math.abs(ke)?-Ve:-ke;yr.moved+=Math.abs(ot);let St=performance.now(),Ft=ot/Rt;yr.v=yr.v*.6+Ft/Math.max(.008,(St-yr.lt)/1e3)*.4,yr.lt=St,yr.moved>6&&rn(Ft)});let go=oe=>{let ke=yr;yr=null,ke&&(ke.moved<10&&performance.now()-ke.t<500?vo(1):performance.now()-ke.lt<120&&rn(Math.max(-1.6,Math.min(1.6,ke.v*.22))))};s.addEventListener("pointerup",oe=>{oe.stopPropagation(),go(oe)}),s.addEventListener("pointercancel",()=>{yr=null}),s.addEventListener("wheel",oe=>{if(oe.target.closest(".tour-body")){let Ve=oe.target.closest(".tour-body"),ot=Ve.scrollTop+Ve.clientHeight>=Ve.scrollHeight-2&&oe.deltaY>0,St=Ve.scrollTop<=0&&oe.deltaY<0;if(!ot&&!St)return}oe.preventDefault();let ke=oe.deltaMode===1?oe.deltaY*16:oe.deltaMode===2?oe.deltaY*window.innerHeight:oe.deltaY;rn(ke/Gt)},{passive:!1}),window.addEventListener("keydown",oe=>{if(!it||At||document.body.classList.contains("visiting"))return;let ke=oe.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ke)>=0){if((ke==="Enter"||ke===" ")&&oe.target&&oe.target.tagName==="BUTTON")return;oe.preventDefault(),oe.stopImmediatePropagation(),vo(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ke)>=0?(oe.preventDefault(),oe.stopImmediatePropagation(),vo(-1)):ke==="Escape"?(oe.preventDefault(),Wn()):/^[wasdzq]$/i.test(ke)&&oe.stopImmediatePropagation()},!0),window.addEventListener("keyup",oe=>{it&&!At&&/^(Arrow|[wasdzq]$)/i.test(oe.key)&&oe.stopImmediatePropagation()},!0),l.addEventListener("click",oe=>{oe.stopPropagation(),Wn()}),ue.addEventListener("click",oe=>{let ke=oe.target.closest("button");ke&&(oe.stopPropagation(),ke.dataset.act==="free"&&Wn(),ke.dataset.act==="replay"&&Vn(),ke.dataset.act==="list"&&Fl().show(!1))});let Ro=[null,[Cn.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Wi[0]-7,0],[42.5+Wi[1]-7,0],[42.5+Wi[2]-7,0],[1e3,Math.PI/2],...Jr.map(oe=>[oe.z-1.6,oe.side==="left"?-Math.PI/2:Math.PI/2]),[ia[2]-1.6,Math.PI]],xo=null,Io=0;function Wn(){if(!it||At||!Sc)return;let oe=qt(ct),ke=Ro[oe];xo=oe<=1?{phase:"home",pos:Bi.slice()}:oe>=3&&oe<=6?{phase:"floor",pos:oo.slice()}:oe===11?{phase:"floor",pos:Ks.slice()}:oe===18?{phase:"floor",pos:ia.slice()}:null,Io=oe>=12?1:0,ke&&n.place&&n.place(ke[0],ke[1]),At={start:Mt,fromCam:Kt,fromLook:Object.assign({},y)},lr(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Vn(){ct=Je=0,Se=0,wt=!1,xt=-1,tr=0,mt=0,Pt={phase:"home",pos:Bi.slice(),tumble:0},Zt={start:Mt}}let Zt={start:-1},ca=!1,Js=[];function e0(oe){Ke+=oe*(Pt.phase==="floor"?0:1);let ke=Pt.tumble===void 0?0:Pt.tumble,Ve=Lo.fromTranslation(Js,Pt.pos);if(Pt.phase==="home")Ve=Lo.rotateY(Ve,Ve,2.2+Math.sin(Ke*.9)*.15),Ve=Lo.rotateZ(Ve,Ve,-1+Math.sin(Ke*1.3)*.12),Ve=Lo.rotateX(Ve,Ve,.4);else if(Pt.phase==="floor")Ve=Lo.rotateY(Ve,Ve,.65),Ve=Lo.rotateX(Ve,Ve,.16);else{let ot=Kt.eye,St=Pt.pos,Ft=[ot[0]-St[0],ot[1]-St[1],ot[2]-St[2]],Mn=Math.hypot(Ft[0],Ft[1],Ft[2])||1;Ft=[Ft[0]/Mn,Ft[1]/Mn,Ft[2]/Mn];let Tt=[Ft[2],0,-Ft[0]],Qr=Math.hypot(Tt[0],Tt[2])||1;Tt=[Tt[0]/Qr,0,Tt[2]/Qr];let In=[Tt[1]*Ft[2]-Tt[2]*Ft[1],Tt[2]*Ft[0]-Tt[0]*Ft[2],Tt[0]*Ft[1]-Tt[1]*Ft[0]],Sr=[Tt[0],Tt[1],Tt[2],0,Ft[0],Ft[1],Ft[2],0,In[0],In[1],In[2],0,St[0],St[1],St[2],1];for(let fr=0;fr<16;fr++)Ve[fr]=Sr[fr];Ve=Lo.rotateY(Ve,Ve,Ke*.9*ke+.65),Ve=Lo.rotateX(Ve,Ve,Math.sin(Ke*2.3)*.9*ke),Ve=Lo.rotateZ(Ve,Ve,Math.sin(Ke*1.7+1)*1.1*ke+(Pt.swing||0)*.9)}return{visible:!0,model:Ve}}function Fc(oe){for(let ke in mh)y[ke]=oe[ke]!==void 0?oe[ke]:mh[ke]}function en(oe,ke){if(oe<=1)return{phase:"home",pos:Bi.slice(),tumble:0};let Ve=hg[oe];if(Ve){let ot=Ve.amp;return{phase:"fly",pos:Ct(Ve.pos(),[Math.sin(ke*.55)*ot[0],Math.sin(ke*.8)*ot[1],(1-Math.cos(ke*.45))*ot[2]]),tumble:Ve.tumble}}return{phase:"floor",pos:(oe>=18?ia:oe>=10?Ks:oo).slice(),tumble:0}}let t0=0,r0=null;function Dc(oe){let ke=Math.min(.1,Math.max(0,oe-t0));if(t0=oe,Mt=oe,ca||(ca=!0,Zt.start=oe),At)return null;if(!wt&&!yr&&Mt-rt>Ye){let ar=qt(Je);Math.abs(je[ar]-Je)<dt&&(Je=je[ar])}let Ve=Je-ct;if(wt){let br=Math.sign(Ve)*Math.min(Yt,Math.sqrt(2*Rr*Math.abs(Ve)))-Se;Se+=Math.sign(br)*Math.min(Math.abs(br),Rr*ke),ct+=Se*ke,(Ve>0&&ct>=Je||Ve<0&&ct<=Je||Math.abs(Je-ct)<1e-4)&&(ct=Je,Se=0,wt=!1)}else{let ar=J4(ct,Je,Se,Ar,ke,3);ct=ar[0],Se=ar[1],Math.abs(Je-ct)<1e-4&&Math.abs(Se)<.001&&(ct=Je,Se=0)}let ot=0;for(;ot<hh.length-1&&ct>=je[ot+1];)ot++;let St=hh[ot],Ft=Rn((ct-je[ot])/St.dur),Mn=aa[ot],Tt=aa[ot+1],Qr=qt(ct);Qr!==tr&&(tr=Qr,mt=0);let In=Math.abs(ct-je[Qr])<.02;In&&(mt+=ke);let Sr=1-Le(0,1.2,Math.abs(ct-je[Qr])),fr=St.leaf(Ft);if(fr.pos?Pt=Object.assign({},fr):Pt=Object.assign({},fr,{pos:fr.phase==="home"?Bi.slice():(ot>=10?Ks:oo).slice()}),hg[Qr]&&Sr>0){let ar=en(Qr,mt);Pt.pos=nr(Pt.pos,ar.pos,Sr)}let nn=St.walker&&(Ft>.01||ot===6)?St.walker(Ft):null;r0=nn==null?null:{x:nn,z:uh,heading:Math.PI/2,phase:(nn-pg)/a6};let Fr=St.cam(Ft,Mn.cam(0),Tt.cam(0),Pt);if(Sr>0&&mt>0){let ar=aa[Qr],br=ar.cam(0),yo=ar.cam(mt);Fr=bt(Ct(Fr.eye,sg(ig(yo.eye,br.eye),Sr)),Ct(Fr.target,sg(ig(yo.target,br.target),Sr)),Fr.fov+(yo.fov-br.fov)*Sr,Fr.roll+(yo.roll-br.roll)*Sr)}if(Sr>0&&!Kr){let ar=Mt,br=.006*Sr,yo=Math.sin(ar*.61)*.6+Math.sin(ar*1.37+1.3)*.4,n0=Math.sin(ar*.47+2.1)*.6+Math.sin(ar*1.13+.4)*.4,o0=Math.sin(ar*.53+4)*.5+Math.sin(ar*.97+2.6)*.5;Fr=bt(Ct(Fr.eye,[yo*br,n0*br*.7,o0*br]),Ct(Fr.target,[n0*br*1.8,yo*br*1.4,0]),Fr.fov,Fr.roll+o0*.0012*Sr)}Kt=Fr;let ao=Lc(ot),Po=Lc(ot+1),la=Object.assign({},ao,St.look(Ft,ao,Po,Pt,Fr.eye));if(Sr>0){let ar=Lc(Qr);for(let br in ar)typeof ar[br]=="number"&&(la[br]=Ie(la[br],ar[br],Sr))}Fc(la);let so=In&&Math.abs(Je-ct)<.02?Qr:-1;so!==xt&&(so>=0&&(gn=Mt+It),xt=so,so>=0?$t(so):lr()),v.querySelectorAll("i").forEach((ar,br)=>ar.classList.toggle("on",br===Qr));let Br=xt>=0?le[xt]:null;Br&&Br.fill&&!Br.filled&&(Br.fill(),Br.filled&&(Br.classList.remove("on"),Br.offsetWidth,Br.classList.add("on")));let fa=Rn((oe-Zt.start)/2.6);return fa<1&&(y.fade=Math.max(y.fade,1-Le(0,1,fa)),y.fadeColor=[0,0,0]),r&&window.__camOverride&&(Kt=window.__camOverride),r&&window.__lookOverride&&Object.assign(y,window.__lookOverride),{camera:Kt,walker:r0,door:St.door?St.door(Ft):ot>=12?1:0,look:y,leaf:e0(ke)}}return r&&(window.__tour={go:vo,exit:Wn,wind:rn,seek(oe,ke){ct=Je=je[oe]+(je[oe+1]-je[oe])*ke,Se=0,wt=!1,rt=Mt+1e6,Zt.start=Mt-10,ca=!0},jump(oe){ct=Je=je[oe],Se=0,wt=!1,mt=0,rt=Mt,Zt.start=Mt-10,ca=!0},state:()=>({current:qt(ct),scroll:+ct.toFixed(3),target:+Je.toFixed(3),shown:xt,move:Math.abs(Je-ct)>.02?{p:ct}:null,camNow:Kt,leaf:Pt,look:y})}),{update:Dc,get active(){return it&&!At},handover(oe){if(!At)return null;let ke=Rn((oe-At.start)/1.8);return ke>=1?(it=!1,null):{from:At.fromCam,fromLook:At.fromLook,k:xr(ke)}},restingDoor:()=>Io,restingLeaf(){return xo?(Pt=xo,e0(0)):null},mix:Qa,cam:bt}}});var p6=Ad(),Za=Qn(),Th=Fl(),Rc=Za.reflection,m6=!1,kg=(e,t,r,n,o)=>n+(e-t)*(o-n)/(r-t),Ah=()=>kg(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Ah=()=>kg(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var Lg=()=>2*Math.atan(Math.tan(Ah()*.5)*window.innerHeight/window.innerWidth),v6=Fd(),Ic=new v6;Ic.showPanel(0);m6&&document.body.appendChild(Ic.dom);var Cr,Ji,bh,Ki,wh,ur;function g6(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!g6())throw p6.finish(),Th.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Cr=Dd()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Za.pixelRatio});location.hash==="#list"&&Th.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Th.show(!1)});Ji=x1()();var x6=pf();bh=x6(Cr,Ji,Rc);Ki=Hp()(Cr,Ji);wh=Wp()(Cr);var gg=Xp()(Cr,Ji),xg=am()(Cr),yg=cm()(Cr),bg=Tm()(Cr),wg=Cm()(Cr),_g=Gm()(Cr),Qi=Xm()(Cr),_h=Df(),zg=G0(),y6=xs(),Eh=qf(),Cg=dn(),{A:Xi}=Jn();ur=G2()(Ji,Lg);var Pc=D2()(Cr,Za),Yi=B2()(Cr),Eg=W2()(Cr),b6=Y2()(Cr,Za),w6=tg()(Cr,Za),Mg=Ri()(Cr),zo=vg()({fps:ur,paintings:()=>Ki.interactables(),onExit:()=>ur.setPaused(!1)});ur.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Pc);var Nc=[],Oc=[],sa=[7,2,1.6];Ji.viewer=sa;var _6=Cr({cull:{enable:!0,face:"back"},uniforms:{view:()=>Nc,proj:()=>Oc,yScale:1,mirrorOn:()=>Rc?1:0,night:()=>Cg.night,time:Cr.context("time")}}),E6=Cr({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),Rg=document.createElement("style");Rg.textContent=`

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
`;document.head.appendChild(Rg);var jn=document.createElement("button");jn.className="painting-plaque";jn.type="button";jn.setAttribute("aria-label","Read painting");document.body.appendChild(jn);var vn=document.createElement("div");vn.className="story-overlay";vn.innerHTML=`

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

		${zg.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(vn);var Zi=document.createElement("div");Zi.className="museum-links";Zi.innerHTML=zg.icons("museum-link");Zi.insertBefore(sh()("museum-link"),Zi.firstChild);["mousedown","pointerdown","click"].forEach(e=>Zi.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(Zi);var M6=vn.querySelector("#story-title"),T6=vn.querySelector("#story-body"),Tg=vn.querySelector("#story-meta"),A6=vn.querySelector(".story-contact"),Zs=vn.querySelector(".story-visit");Zs.addEventListener("click",e=>{e.target.closest(".visit-btn")&&Ja&&Eh.open(Ja)});var S6=vn.querySelector(".story-close"),Ja=null,_n={p:0,target:0,last:0},Ig={title:_h.title,description:_h.text,isAbout:!0},Co=null;function Sh(e){e&&(Ja=e,M6.textContent=e.title||"",T6.textContent=e.description||"",Tg.textContent=e.isAbout?"":y6(e),Tg.hidden=!!e.isAbout,A6.hidden=!e.isAbout,Zs.innerHTML=e.isAbout?"":Eh.button(e),Zs.hidden=!Zs.innerHTML,Zs.hidden||Eh.warm(e),vn.classList.toggle("about-mode",!!e.isAbout),vn.classList.add("open"),_n.target=e.isAbout?1:0,Co=e,jn.classList.remove("visible"),ur.setPaused(!0))}function kh(){vn.classList.remove("open"),_n.target=0,Ja=null,Co=null,ur.setPaused(!1)}function Pg(e){e&&(e.preventDefault(),e.stopPropagation()),Co&&Sh(Co)}jn.addEventListener("pointerup",Pg,!0);jn.addEventListener("touchend",Pg,{passive:!1,capture:!0});jn.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),Ja===null&&Co&&Sh(Co)},!0);S6.addEventListener("click",kh);vn.addEventListener("click",e=>{e.target===vn&&kh()});window.addEventListener("keydown",e=>{e.code==="Escape"&&vn.classList.contains("open")&&kh()});function Ag(e,t){let r=t[0],n=t[1],o=t[2];return[e[0]*r+e[4]*n+e[8]*o+e[12],e[1]*r+e[5]*n+e[9]*o+e[13],e[2]*r+e[6]*n+e[10]*o+e[14],e[3]*r+e[7]*n+e[11]*o+e[15]]}function k6(){if(Ja)return;if(zo.active){Co=null,jn.classList.remove("visible");return}let e=Ki.interactables(),t=ur.forward[0],r=ur.forward[2],n=Math.hypot(t,r)||1,o=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,l=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?l=1:l=-1;let u=s[0]-ur.pos[0],v=s[2]-ur.pos[2],h=-(u*c+v*l),p=Math.abs(u*l-v*c),m=-(t*c+r*l)/n,d=i.side==="end"?11:8,g=(i.width||2)/2;m>.9&&h>.5&&h<d&&p<g+.8&&h<a&&(o=i,a=h)}if(!o){let i=ur.pos[0],s=ur.pos[2];t/n>.85&&i<13.6&&s>Xi.z0-.5&&s<Xi.z1+.5&&(o=Object.assign({},Ig,{plaqueTitle:_h.name}))}o?(Co=o,jn.textContent=o.isAbout?"ABOUT  \xB7  "+o.plaqueTitle:"READ  \xB7  "+o.title,jn.classList.add("visible")):(Co=null,jn.classList.remove("visible"))}var Lh=zs();function L6(){let e=Qi.state;if(!e||!e.glowPos)return null;let t=Ag(ur.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),r=Ag(ur.proj(),t);return r[3]<=.05?null:[(r[0]/r[3]*.5+.5)*window.innerWidth,(.5-r[1]/r[3]*.5)*window.innerHeight,r[3]]}var Mh=null;window.addEventListener("pointerdown",e=>{Mh={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Mh;if(Mh=null,!t||Ja||zo.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let r=L6();if(!r)return;let n=!!document.pointerLockElement,o=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/r[2]);Math.hypot(o-r[0],a-r[1])<i&&(e.preventDefault(),e.stopPropagation(),Sh(Ig))},!0);function z6(e){let t=Math.min(Math.max(e-_n.last,0),.1);_n.last=e;let r=t/1.6;if(_n.p=_n.target>_n.p?Math.min(1,_n.p+r):Math.max(0,_n.p-r),_n.p<=0)return;let n=_n.p<.5?2*_n.p*_n.p:1-Math.pow(-2*_n.p+2,2)/2,o=window.innerHeight>window.innerWidth,a=Qi.state,i=a&&a.hipsPos?a.hipsPos[0]:Xi.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Xi.zc,c=o?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],l=o?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],u=ur.pos,v=ur.forward,h=[u[0],u[1],u[2]],p=[u[0]+v[0],u[1]+v[1],u[2]+v[2]],m=(_,A)=>_.map((z,I)=>z+(A[I]-z)*n),d=[Xi.cx-6.2,1.7,Xi.zc],g=1-n,x=h.map((_,A)=>g*g*_+2*g*n*d[A]+n*n*c[A]);Lh.lookAt(ur.view(),x,m(p,l),[0,1,0])}var Vi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Gc=null;function C6(e,t,r,n){let o=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],a=Math.hypot(o[0],o[1],o[2])||1,i=[-o[2]/a,0,o[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),l=Math.sin(n);return Lh.lookAt(e,t,r,[i[0]*l,c,i[2]*l])}function R6(e){let t=window.innerWidth/window.innerHeight,r=Pc.shot,n=zo.active?zo.update(e):null,o=n?null:zo.handover(e),a=null,i=Vi;if(n?(a=n.camera,i=n.look,Gc=n.leaf,Qi.setWalk(n.walker||null),Yi.setOpen(n.door||0)):(Gc=zo.restingLeaf(),Qi.setWalk(null),Yi.setOpen(zo.restingDoor())),o){let s=ur.pos,c=ur.forward,l=zo.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],Lg()*180/Math.PI,0);a=zo.mix(o.from,l,o.k),i={};for(let u in Vi)i[u]=Array.isArray(Vi[u])?Vi[u]:o.fromLook[u]+(Vi[u]-o.fromLook[u])*o.k}if(a)C6(Nc,a.eye,a.target,a.roll||0),Lh.perspective(Oc,a.fov*Math.PI/180,t,.1,700),sa[0]=a.eye[0],sa[1]=a.eye[1],sa[2]=a.eye[2];else{let s=ur.view(),c=ur.proj();for(let h=0;h<16;h++)Nc[h]=s[h],Oc[h]=c[h];let l=s[12],u=s[13],v=s[14];sa[0]=-(s[0]*l+s[1]*u+s[2]*v),sa[1]=-(s[4]*l+s[5]*u+s[6]*v),sa[2]=-(s[8]*l+s[9]*u+s[10]*v)}for(let s in Vi)r[s]=i[s]}var Qs=0,Sg=0;Cr.frame(function({time:e}){if(document.body.classList.contains("visiting")){Qs=0;return}Ic.begin(),Cg.tick(e),Qs++,Qs===60&&(Sg=e),Qs===180&&120/Math.max(e-Sg,.001)<32&&Za.stepDown()&&(Rc=Za.reflection,Qs=0),ur.tick({time:e}),z6(e),Ki.update(ur.pos,ur.fmouse[1],Ah()),k6(),R6(e),Pc.capture(arguments[0],{view:Nc,proj:Oc,eye:sa},()=>{_6(()=>{Rc&&E6(()=>{bh(),gg(),Mg(),_g(),Qi(),wh(Ki.batch()),xg(),bg(),wg(),Eg(Gc),Yi(),yg(),Yi.glass()}),bh(),gg(),Mg(),_g(),Qi(),wh(Ki.batch()),xg(),bg(),wg(),w6(),Eg(Gc),Yi(),b6(),yg(),Yi.glass()})}),Pc.present(),Ic.end()});})();
