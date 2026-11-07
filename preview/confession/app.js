"use strict";(()=>{var J=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var $h=J((oT,qh)=>{"use strict";var Aa=document.getElementById("loader"),Ma=Aa&&Aa.querySelector(".loader-name"),ki=0,Ns=0,Ps=!1,Iy=performance.now(),Ta=.06,Ea=0,Nc=0,Ih=!1,Oy=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Dy(e){if(!Ma)return;let t=Ma.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";Ma.style.webkitMaskPosition=n,Ma.style.maskPosition=n}function Gh(e){let t=Math.min(.05,Nc?(e-Nc)/1e3:.016);Nc=e;let r=Ps?.75:.22+(Ta-Ea)*1.2;if(Ea=Math.min(Ta,Ea+Math.max(0,r)*t),Oy&&(Ea=Ta),Dy(Ea),Ps&&Ea>=.999){Ih||(Ih=!0,setTimeout(Fh,650));return}requestAnimationFrame(Gh)}Ma&&requestAnimationFrame(Gh);function Oh(){let e=ki?Ns/Math.max(ki,24):0;Ta=Math.max(Ta,Math.min(.9,.06+e*.84))}function Fh(){Aa&&(Aa.classList.add("done"),setTimeout(()=>Aa.remove(),1400))}function Pc(){Ps||(Ps=!0,window.__galleryReady=!0,Aa&&(Ta=1,Ma||Fh()))}var Dh=null;function Gy(){clearTimeout(Dh),Ns>=ki&&performance.now()-Iy>600&&(Dh=setTimeout(()=>{Ns>=ki&&Pc()},450))}setTimeout(Pc,2e4);var Fy=e=>/(^|\/)(res|images)\//.test(e),Rs=window.fetch.bind(window);async function qy(e,t){let r=await Rs(e+".gz",t);if(!r.ok)throw new Error("no .gz");let n=new Uint8Array(await r.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let o=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(o).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let r=typeof e=="string"?e:e&&e.url||"";if(!Fy(r))return Rs(e,t);ki++,Oh();let n=a=>(Ns++,Oh(),Gy(),a),o;return/\.bin$/.test(r)&&typeof DecompressionStream!="undefined"?o=qy(r,t).catch(()=>Rs(e,t)):o=Rs(e,t),o.then(n,a=>{throw n(),a})};qh.exports={finish:Pc}});var cn=J((aT,Uh)=>{"use strict";var Hh=typeof navigator!="undefined"&&navigator.userAgent||"",$y=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Wn=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Hh)||/Macintosh/.test(Hh)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||$y,Bh=typeof window!="undefined"&&window.devicePixelRatio||1,Ir={isPhone:Wn,pixelRatio:Wn?Math.min(Bh,1.5):Math.min(Bh,2),reflection:!Wn,gardenDetail:Wn?0:1,leafShare:Wn?.65:1,motion:!Wn,post:Wn?1:2,level:Wn?1:0};Ir.stepDown=()=>{if(Ir.reflection)Ir.reflection=!1;else if(Ir.gardenDetail>0||Ir.motion)Ir.gardenDetail=0,Ir.motion=!1,Ir.leafShare=Math.min(Ir.leafShare,.65);else if(Ir.post>0)Ir.post--;else return!1;return Ir.level++,!0};Uh.exports=Ir});var Ic=J((iT,jh)=>{"use strict";jh.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Is=J((sT,Xh)=>{"use strict";var pr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Wh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Vh='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';pr.instagramUrl="https://instagram.com/"+pr.instagram;pr.mailUrl="mailto:"+pr.email+"?subject="+encodeURIComponent("Your paintings");pr.icons=e=>`
	<a class="${e}" href="${pr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${pr.instagram}" title="Instagram">${Wh}</a>
	<a class="${e}" href="${pr.mailUrl}" aria-label="Email ${pr.email}" title="Email">${Vh}</a>`;pr.line=e=>`
	<span class="${e}">
		<a href="${pr.instagramUrl}" target="_blank" rel="noopener">${Wh}<span>@${pr.instagram}</span></a>
		<a href="${pr.mailUrl}">${Vh}<span>${pr.email}</span></a>
	</span>`;Xh.exports=pr});var Li=J((cT,Yh)=>{"use strict";Yh.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var Oc=J((lT,Zh)=>{"use strict";var Hy=Ic(),By=Is(),Kh=Li(),Uy=cn(),Vn=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),jy=`
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
`,vr=null;function Wy(e){if(vr){vr.hidden=!1,requestAnimationFrame(()=>vr.classList.add("on"));return}let t=document.createElement("style");t.textContent=jy,document.head.appendChild(t);let r=!Uy.isPhone;vr=document.createElement("div"),vr.className="plist",vr.setAttribute("role","region"),vr.setAttribute("aria-label","All paintings"),vr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${By.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${Hy.map(o=>`
			<article class="plist-item" id="${Vn(o.slug)}">
				<img loading="lazy" decoding="async" alt="${Vn(o.title)}, ${Vn(Kh(o))}"
					src="images/web/${Vn(o.slug)}${r?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Vn(o.file)}'">
				<p class="plist-meta">${Vn(Kh(o))}</p>
				<h2>${Vn(o.title)}</h2>
				<details><summary>Read its story</summary>
					${String(o.description).split(/\n\s*\n/).map(a=>`<p>${Vn(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(o=>vr.addEventListener(o,a=>a.stopPropagation(),{passive:!0}));let n=vr.querySelector(".plist-close");n&&n.addEventListener("click",Qh),document.body.appendChild(vr),requestAnimationFrame(()=>vr.classList.add("on"))}function Qh(){vr&&(vr.classList.remove("on"),setTimeout(()=>{vr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Zh.exports={show:Wy,hide:Qh}});var Jh=J((Dc,Gc)=>{(function(e,t){typeof Dc=="object"&&typeof Gc!="undefined"?Gc.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Dc,function(){var e=function(){function t(m){return o.appendChild(m.dom),m}function r(m){for(var h=0;h<o.children.length;h++)o.children[h].style.display=h===m?"block":"none";n=m}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),r(++n%o.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var m=(performance||Date).now();if(f.update(m-a,200),m>i+1e3&&(c.update(1e3*s/(m-i),100),i=m,s=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return m},update:function(){a=this.end()},domElement:o,setMode:r}};return e.Panel=function(t,r,n){var o=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,l=3*s,m=2*s,h=3*s,u=15*s,p=74*s,d=30*s,v=document.createElement("canvas");v.width=c,v.height=f,v.style.cssText="width:80px;height:48px";var g=v.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=r,g.fillText(t,l,m),g.fillRect(h,u,p,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,u,p,d),{dom:v,update:function(x,b){o=Math.min(o,x),a=Math.max(a,x),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,u),g.fillStyle=r,g.fillText(i(x)+" "+t+" ("+i(o)+"-"+i(a)+")",l,m),g.drawImage(v,h+s,u,p-s,d,h,u,p-s,d),g.fillRect(h+p-s,u,s,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+p-s,u,s,i((1-x/b)*d))}}},e})});var yn=J((fT,eu)=>{eu.exports=function(e){return e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Float32Array||e instanceof Float64Array||e instanceof Uint8ClampedArray}});var Sn=J((hT,tu)=>{tu.exports=function(e,t){for(var r=Object.keys(t),n=0;n<r.length;++n)e[r[n]]=t[r[n]];return e}});var Ar=J((uT,mu)=>{var Vy=yn(),Xy=Sn(),So=`
`;function Yy(e){return typeof atob!="undefined"?atob(e):"base64:"+e}function kn(e){var t=new Error("(regl) "+e);throw console.error(t),t}function At(e,t){e||kn(t)}function ko(e){return e?": "+e:""}function Ky(e,t,r){e in t||kn("unknown parameter ("+e+")"+ko(r)+". possible values: "+Object.keys(t).join())}function Qy(e,t){Vy(e)||kn("invalid parameter type"+ko(t)+". must be a typed array")}function iu(e,t){switch(t){case"number":return typeof e=="number";case"object":return typeof e=="object";case"string":return typeof e=="string";case"boolean":return typeof e=="boolean";case"function":return typeof e=="function";case"undefined":return typeof e=="undefined";case"symbol":return typeof e=="symbol"}}function Zy(e,t,r){iu(e,t)||kn("invalid parameter type"+ko(r)+". expected "+t+", got "+typeof e)}function Jy(e,t){e>=0&&(e|0)===e||kn("invalid parameter type, ("+e+")"+ko(t)+". must be a nonnegative integer")}function qc(e,t,r){t.indexOf(e)<0&&kn("invalid value"+ko(r)+". must be one of: "+t)}var ru=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function eb(e){Object.keys(e).forEach(function(t){ru.indexOf(t)<0&&kn('invalid regl constructor argument "'+t+'". must be one of '+ru)})}function Sa(e,t){for(e=e+"";e.length<t;)e=" "+e;return e}function Fc(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function nu(e,t){this.number=e,this.line=t,this.errors=[]}function ou(e,t,r){this.file=e,this.line=t,this.message=r}function Lo(){var e=new Error,t=(e.stack||e).toString(),r=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(t);if(r)return r[1];var n=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(t);return n?n[1]:"unknown"}function su(){var e=new Error,t=(e.stack||e).toString(),r=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(t);if(r)return r[1];var n=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(t);return n?n[1]:"unknown"}function $c(e,t){var r=e.split(`
`),n=1,o=0,a={unknown:new Fc,0:new Fc};a.unknown.name=a[0].name=t||Lo(),a.unknown.lines.push(new nu(0,""));for(var i=0;i<r.length;++i){var s=r[i],c=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(s);if(c)switch(c[1]){case"line":var f=/(\d+)(\s+\d+)?/.exec(c[2]);f&&(n=f[1]|0,f[2]&&(o=f[2]|0,o in a||(a[o]=new Fc)));break;case"define":var l=/SHADER_NAME(_B64)?\s+(.*)$/.exec(c[2]);l&&(a[o].name=l[1]?Yy(l[2]):l[2]);break}a[o].lines.push(new nu(n++,s))}return Object.keys(a).forEach(function(m){var h=a[m];h.lines.forEach(function(u){h.index[u.number]=u})}),a}function tb(e){var t=[];return e.split(`
`).forEach(function(r){if(!(r.length<5)){var n=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(r);n?t.push(new ou(n[1]|0,n[2]|0,n[3].trim())):r.length>0&&t.push(new ou("unknown",0,r))}}),t}function rb(e,t){t.forEach(function(r){var n=e[r.file];if(n){var o=n.index[r.line];if(o){o.errors.push(r),n.hasErrors=!0;return}}e.unknown.hasErrors=!0,e.unknown.lines[0].errors.push(r)})}function nb(e,t,r,n,o){if(!e.getShaderParameter(t,e.COMPILE_STATUS)){var a=e.getShaderInfoLog(t),i=n===e.FRAGMENT_SHADER?"fragment":"vertex";lu(r,"string",i+" shader source must be a string",o);var s=$c(r,o),c=tb(a);rb(s,c),Object.keys(s).forEach(function(f){var l=s[f];if(!l.hasErrors)return;var m=[""],h=[""];function u(p,d){m.push(p),h.push(d||"")}u("file number "+f+": "+l.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),l.lines.forEach(function(p){if(p.errors.length>0){u(Sa(p.number,4)+"|  ","background-color:yellow; font-weight:bold"),u(p.line+So,"color:red; background-color:yellow; font-weight:bold");var d=0;p.errors.forEach(function(v){var g=v.message,x=/^\s*'(.*)'\s*:\s*(.*)$/.exec(g);if(x){var b=x[1];g=x[2],b==="assign"&&(b="="),d=Math.max(p.line.indexOf(b,d),0)}else d=0;u(Sa("| ",6)),u(Sa("^^^",d+3)+So,"font-weight:bold"),u(Sa("| ",6)),u(g+So,"font-weight:bold")}),u(Sa("| ",6)+So)}else u(Sa(p.number,4)+"|  "),u(p.line+So,"color:red")}),typeof document!="undefined"&&!window.chrome?(h[0]=m.join("%c"),console.log.apply(console,h)):console.log(m.join(""))}),At.raise("Error compiling "+i+" shader, "+s[0].name)}}function ob(e,t,r,n,o){if(!e.getProgramParameter(t,e.LINK_STATUS)){var a=e.getProgramInfoLog(t),i=$c(r,o),s=$c(n,o),c='Error linking program with vertex shader, "'+s[0].name+'", and fragment shader "'+i[0].name+'"';typeof document!="undefined"?console.log("%c"+c+So+"%c"+a,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(c+So+a),At.raise(c)}}function cu(e){e._commandRef=Lo()}function ab(e,t,r,n){cu(e);function o(c){return c?n.id(c):0}e._fragId=o(e.static.frag),e._vertId=o(e.static.vert);function a(c,f){Object.keys(f).forEach(function(l){c[n.id(l)]=!0})}var i=e._uniformSet={};a(i,t.static),a(i,t.dynamic);var s=e._attributeSet={};a(s,r.static),a(s,r.dynamic),e._hasCount="count"in e.static||"count"in e.dynamic||"elements"in e.static||"elements"in e.dynamic}function Gs(e,t){var r=su();kn(e+" in command "+(t||Lo())+(r==="unknown"?"":" called from "+r))}function ib(e,t,r){e||Gs(t,r||Lo())}function sb(e,t,r,n){e in t||Gs("unknown parameter ("+e+")"+ko(r)+". possible values: "+Object.keys(t).join(),n||Lo())}function lu(e,t,r,n){iu(e,t)||Gs("invalid parameter type"+ko(r)+". expected "+t+", got "+typeof e,n||Lo())}function cb(e){e()}function lb(e,t,r){e.texture?qc(e.texture._texture.internalformat,t,"unsupported texture format for attachment"):qc(e.renderbuffer._renderbuffer.format,r,"unsupported renderbuffer format for attachment")}var Ds=33071,au=9728,fb=9984,hb=9985,ub=9986,db=9987,pb=5120,vb=5121,mb=5122,gb=5123,xb=5124,yb=5125,fu=5126,hu=32819,uu=32820,du=33635,pu=34042,bb=36193,Or={};Or[pb]=Or[vb]=1;Or[mb]=Or[gb]=Or[bb]=Or[du]=Or[hu]=Or[uu]=2;Or[xb]=Or[yb]=Or[fu]=Or[pu]=4;function vu(e,t){return e===uu||e===hu||e===du?2:e===pu?4:Or[e]*t}function Os(e){return!(e&e-1)&&!!e}function wb(e,t,r){var n,o=t.width,a=t.height,i=t.channels;At(o>0&&o<=r.maxTextureSize&&a>0&&a<=r.maxTextureSize,"invalid texture shape"),(e.wrapS!==Ds||e.wrapT!==Ds)&&At(Os(o)&&Os(a),"incompatible wrap mode for texture, both width and height must be power of 2"),t.mipmask===1?o!==1&&a!==1&&At(e.minFilter!==fb&&e.minFilter!==ub&&e.minFilter!==hb&&e.minFilter!==db,"min filter requires mipmap"):(At(Os(o)&&Os(a),"texture must be a square power of 2 to support mipmapping"),At(t.mipmask===(o<<1)-1,"missing or incomplete mipmap data")),t.type===fu&&(r.extensions.indexOf("oes_texture_float_linear")<0&&At(e.minFilter===au&&e.magFilter===au,"filter not supported, must enable oes_texture_float_linear"),At(!e.genMipmaps,"mipmap generation not supported with float textures"));var s=t.images;for(n=0;n<16;++n)if(s[n]){var c=o>>n,f=a>>n;At(t.mipmask&1<<n,"missing mipmap data");var l=s[n];if(At(l.width===c&&l.height===f,"invalid shape for mip images"),At(l.format===t.format&&l.internalformat===t.internalformat&&l.type===t.type,"incompatible type for mip image"),!l.compressed)if(l.data){var m=Math.ceil(vu(l.type,i)*c/l.unpackAlignment)*l.unpackAlignment;At(l.data.byteLength===m*f,"invalid data for image, buffer size is inconsistent with image format")}else l.element||l.copy}else e.genMipmaps||At((t.mipmask&1<<n)===0,"extra mipmap data");t.compressed&&At(!e.genMipmaps,"mipmap generation for compressed images not supported")}function _b(e,t,r,n){var o=e.width,a=e.height,i=e.channels;At(o>0&&o<=n.maxTextureSize&&a>0&&a<=n.maxTextureSize,"invalid texture shape"),At(o===a,"cube map must be square"),At(t.wrapS===Ds&&t.wrapT===Ds,"wrap mode not supported by cube map");for(var s=0;s<r.length;++s){var c=r[s];At(c.width===o&&c.height===a,"inconsistent cube map face shape"),t.genMipmaps&&(At(!c.compressed,"can not generate mipmap for compressed textures"),At(c.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var f=c.images,l=0;l<16;++l){var m=f[l];if(m){var h=o>>l,u=a>>l;At(c.mipmask&1<<l,"missing mipmap data"),At(m.width===h&&m.height===u,"invalid shape for mip images"),At(m.format===e.format&&m.internalformat===e.internalformat&&m.type===e.type,"incompatible type for mip image"),m.compressed||(m.data?At(m.data.byteLength===h*u*Math.max(vu(m.type,i),m.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):m.element||m.copy)}}}}mu.exports=Xy(At,{optional:cb,raise:kn,commandRaise:Gs,command:ib,parameter:Ky,commandParameter:sb,constructor:eb,type:Zy,commandType:lu,isTypedArray:Qy,nni:Jy,oneOf:qc,shaderError:nb,linkError:ob,callSite:su,saveCommandRef:cu,saveDrawInfo:ab,framebufferFormat:lb,guessCommand:Lo,texture2D:wb,textureCube:_b})});var Hc=J((dT,bu)=>{var Eb=Ar(),Mb=0,Ab=0,Tb=5,Sb=6;function zo(e,t){this.id=Mb++,this.type=e,this.data=t}function gu(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function zi(e){if(e.length===0)return[];var t=e.charAt(0),r=e.charAt(e.length-1);if(e.length>1&&t===r&&(t==='"'||t==="'"))return['"'+gu(e.substr(1,e.length-2))+'"'];var n=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(e);if(n)return zi(e.substr(0,n.index)).concat(zi(n[1])).concat(zi(e.substr(n.index+n[0].length)));var o=e.split(".");if(o.length===1)return['"'+gu(e)+'"'];for(var a=[],i=0;i<o.length;++i)a=a.concat(zi(o[i]));return a}function xu(e){return"["+zi(e).join("][")+"]"}function kb(e,t){return new zo(e,xu(t+""))}function Lb(e){return typeof e=="function"&&!e._reglType||e instanceof zo}function yu(e,t){if(typeof e=="function")return new zo(Ab,e);if(typeof e=="number"||typeof e=="boolean")return new zo(Tb,e);if(Array.isArray(e))return new zo(Sb,e.map(function(r,n){return yu(r,t+"["+n+"]")}));if(e instanceof zo)return e;Eb(!1,"invalid option type in uniform "+t)}bu.exports={DynamicVariable:zo,define:kb,isDynamic:Lb,unbox:yu,accessor:xu}});var _u=J((pT,wu)=>{wu.exports={next:typeof requestAnimationFrame=="function"?function(e){return requestAnimationFrame(e)}:function(e){return setTimeout(e,16)},cancel:typeof cancelAnimationFrame=="function"?function(e){return cancelAnimationFrame(e)}:clearTimeout}});var Mu=J((vT,Eu)=>{Eu.exports=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date}});var Tu=J((mT,Au)=>{Au.exports=function(){var t={"":0},r=[""];return{id:function(n){var o=t[n];return o||(o=t[n]=r.length,r.push(n),o)},str:function(n){return r[n]}}}});var Cu=J((gT,zu)=>{var ln=Ar(),Su=Sn();function zb(e,t,r){var n=document.createElement("canvas");Su(n.style,{border:0,margin:0,padding:0,top:0,left:0,width:"100%",height:"100%"}),e.appendChild(n),e===document.body&&(n.style.position="absolute",Su(e.style,{margin:0,padding:0}));function o(){var s=window.innerWidth,c=window.innerHeight;if(e!==document.body){var f=n.getBoundingClientRect();s=f.right-f.left,c=f.bottom-f.top}n.width=r*s,n.height=r*c}var a;e!==document.body&&typeof ResizeObserver=="function"?(a=new ResizeObserver(function(){setTimeout(o)}),a.observe(e)):window.addEventListener("resize",o,!1);function i(){a?a.disconnect():window.removeEventListener("resize",o),e.removeChild(n)}return o(),{canvas:n,onDestroy:i}}function Cb(e,t){function r(n){try{return e.getContext(n,t)}catch(o){return null}}return r("webgl")||r("experimental-webgl")||r("webgl-experimental")}function Rb(e){return typeof e.nodeName=="string"&&typeof e.appendChild=="function"&&typeof e.getBoundingClientRect=="function"}function Nb(e){return typeof e.drawArrays=="function"||typeof e.drawElements=="function"}function ku(e){return typeof e=="string"?e.split():(ln(Array.isArray(e),"invalid extension array"),e)}function Lu(e){return typeof e=="string"?(ln(typeof document!="undefined","not supported outside of DOM"),document.querySelector(e)):e}zu.exports=function(t){var r=t||{},n,o,a,i,s={},c=[],f=[],l=typeof window=="undefined"?1:window.devicePixelRatio,m=!1,h=function(d){d&&ln.raise(d)},u=function(){};if(typeof r=="string"?(ln(typeof document!="undefined","selector queries only supported in DOM environments"),n=document.querySelector(r),ln(n,"invalid query string for element")):typeof r=="object"?Rb(r)?n=r:Nb(r)?(i=r,a=i.canvas):(ln.constructor(r),"gl"in r?i=r.gl:"canvas"in r?a=Lu(r.canvas):"container"in r&&(o=Lu(r.container)),"attributes"in r&&(s=r.attributes,ln.type(s,"object","invalid context attributes")),"extensions"in r&&(c=ku(r.extensions)),"optionalExtensions"in r&&(f=ku(r.optionalExtensions)),"onDone"in r&&(ln.type(r.onDone,"function","invalid or missing onDone callback"),h=r.onDone),"profile"in r&&(m=!!r.profile),"pixelRatio"in r&&(l=+r.pixelRatio,ln(l>0,"invalid pixel ratio"))):ln.raise("invalid arguments to regl"),n&&(n.nodeName.toLowerCase()==="canvas"?a=n:o=n),!i){if(!a){ln(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var p=zb(o||document.body,h,l);if(!p)return null;a=p.canvas,u=p.onDestroy}s.premultipliedAlpha===void 0&&(s.premultipliedAlpha=!0),i=Cb(a,s)}return i?{gl:i,canvas:a,container:o,extensions:c,optionalExtensions:f,pixelRatio:l,profile:m,onDone:h,onDestroy:u}:(u(),h("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}});var Nu=J((xT,Ru)=>{var Pb=Ar();Ru.exports=function(t,r){var n={};function o(s){Pb.type(s,"string","extension name must be string");var c=s.toLowerCase(),f;try{f=n[c]=t.getExtension(c)}catch(l){}return!!f}for(var a=0;a<r.extensions.length;++a){var i=r.extensions[a];if(!o(i))return r.onDestroy(),r.onDone('"'+i+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return r.optionalExtensions.forEach(o),{extensions:n,restore:function(){Object.keys(n).forEach(function(s){if(n[s]&&!o(s))throw new Error("(regl): error restoring extension "+s)})}}}});var Bc=J((yT,Pu)=>{Pu.exports=function(t,r){for(var n=Array(t),o=0;o<t;++o)n[o]=r(o);return n}});var ka=J((bT,Gu)=>{var Ib=Bc(),Ob=5120,Db=5121,Gb=5122,Fb=5123,qb=5124,$b=5125,Hb=5126;function Bb(e){for(var t=16;t<=1<<28;t*=16)if(e<=t)return t;return 0}function Iu(e){var t,r;return t=(e>65535)<<4,e>>>=t,r=(e>255)<<3,e>>>=r,t|=r,r=(e>15)<<2,e>>>=r,t|=r,r=(e>3)<<1,e>>>=r,t|=r,t|e>>1}function Ou(){var e=Ib(8,function(){return[]});function t(a){var i=Bb(a),s=e[Iu(i)>>2];return s.length>0?s.pop():new ArrayBuffer(i)}function r(a){e[Iu(a.byteLength)>>2].push(a)}function n(a,i){var s=null;switch(a){case Ob:s=new Int8Array(t(i),0,i);break;case Db:s=new Uint8Array(t(i),0,i);break;case Gb:s=new Int16Array(t(2*i),0,i);break;case Fb:s=new Uint16Array(t(2*i),0,i);break;case qb:s=new Int32Array(t(4*i),0,i);break;case $b:s=new Uint32Array(t(4*i),0,i);break;case Hb:s=new Float32Array(t(4*i),0,i);break;default:return null}return s.length!==i?s.subarray(0,i):s}function o(a){r(a.buffer)}return{alloc:t,free:r,allocType:n,freeType:o}}var Du=Ou();Du.zero=Ou();Gu.exports=Du});var Hu=J((wT,$u)=>{var Fs=ka(),Ub=3408,jb=3410,Wb=3411,Vb=3412,Xb=3413,Yb=3414,Kb=3415,Qb=33901,Zb=33902,Jb=3379,e3=3386,t3=34921,r3=36347,n3=36348,o3=35661,a3=35660,i3=34930,s3=36349,c3=34076,l3=34024,f3=7936,h3=7937,u3=7938,d3=35724,p3=34047,v3=36063,m3=34852,qs=3553,Fu=34067,g3=34069,x3=33984,Ci=6408,Uc=5126,qu=5121,jc=36160,y3=36053,b3=36064,w3=16384;$u.exports=function(e,t){var r=1;t.ext_texture_filter_anisotropic&&(r=e.getParameter(p3));var n=1,o=1;t.webgl_draw_buffers&&(n=e.getParameter(m3),o=e.getParameter(v3));var a=!!t.oes_texture_float;if(a){var i=e.createTexture();e.bindTexture(qs,i),e.texImage2D(qs,0,Ci,1,1,0,Ci,Uc,null);var s=e.createFramebuffer();if(e.bindFramebuffer(jc,s),e.framebufferTexture2D(jc,b3,qs,i,0),e.bindTexture(qs,null),e.checkFramebufferStatus(jc)!==y3)a=!1;else{e.viewport(0,0,1,1),e.clearColor(1,0,0,1),e.clear(w3);var c=Fs.allocType(Uc,4);e.readPixels(0,0,1,1,Ci,Uc,c),e.getError()?a=!1:(e.deleteFramebuffer(s),e.deleteTexture(i),a=c[0]===1),Fs.freeType(c)}}var f=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),l=!0;if(!f){var m=e.createTexture(),h=Fs.allocType(qu,36);e.activeTexture(x3),e.bindTexture(Fu,m),e.texImage2D(g3,0,Ci,3,3,0,Ci,qu,h),Fs.freeType(h),e.bindTexture(Fu,null),e.deleteTexture(m),l=!e.getError()}return{colorBits:[e.getParameter(jb),e.getParameter(Wb),e.getParameter(Vb),e.getParameter(Xb)],depthBits:e.getParameter(Yb),stencilBits:e.getParameter(Kb),subpixelBits:e.getParameter(Ub),extensions:Object.keys(t).filter(function(u){return!!t[u]}),maxAnisotropic:r,maxDrawbuffers:n,maxColorAttachments:o,pointSizeDims:e.getParameter(Qb),lineWidthDims:e.getParameter(Zb),maxViewportDims:e.getParameter(e3),maxCombinedTextureUnits:e.getParameter(o3),maxCubeMapSize:e.getParameter(c3),maxRenderbufferSize:e.getParameter(l3),maxTextureUnits:e.getParameter(i3),maxTextureSize:e.getParameter(Jb),maxAttributes:e.getParameter(t3),maxVertexUniforms:e.getParameter(r3),maxVertexTextureUnits:e.getParameter(a3),maxVaryingVectors:e.getParameter(n3),maxFragmentUniforms:e.getParameter(s3),glsl:e.getParameter(d3),renderer:e.getParameter(h3),vendor:e.getParameter(f3),version:e.getParameter(u3),readFloat:a,npotTextureCube:l}}});var La=J((_T,Bu)=>{var _3=yn();Bu.exports=function(t){return!!t&&typeof t=="object"&&Array.isArray(t.shape)&&Array.isArray(t.stride)&&typeof t.offset=="number"&&t.shape.length===t.stride.length&&(Array.isArray(t.data)||_3(t.data))}});var Xn=J((ET,Uu)=>{Uu.exports=function(e){return Object.keys(e).map(function(t){return e[t]})}});var Wc=J((MT,Vu)=>{var E3=ka();Vu.exports={shape:S3,flatten:T3};function M3(e,t,r){for(var n=0;n<t;++n)r[n]=e[n]}function A3(e,t,r,n){for(var o=0,a=0;a<t;++a)for(var i=e[a],s=0;s<r;++s)n[o++]=i[s]}function ju(e,t,r,n,o,a){for(var i=a,s=0;s<t;++s)for(var c=e[s],f=0;f<r;++f)for(var l=c[f],m=0;m<n;++m)o[i++]=l[m]}function Wu(e,t,r,n,o){for(var a=1,i=r+1;i<t.length;++i)a*=t[i];var s=t[r];if(t.length-r===4){var c=t[r+1],f=t[r+2],l=t[r+3];for(i=0;i<s;++i)ju(e[i],c,f,l,n,o),o+=a}else for(i=0;i<s;++i)Wu(e[i],t,r+1,n,o),o+=a}function T3(e,t,r,n){var o=1;if(t.length)for(var a=0;a<t.length;++a)o*=t[a];else o=0;var i=n||E3.allocType(r,o);switch(t.length){case 0:break;case 1:M3(e,t[0],i);break;case 2:A3(e,t[0],t[1],i);break;case 3:ju(e,t[0],t[1],t[2],i,0);break;default:Wu(e,t,0,i,0)}return i}function S3(e){for(var t=[],r=e;r.length;r=r[0])t.push(r.length);return t}});var $s=J((AT,k3)=>{k3.exports={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121}});var Hs=J((TT,L3)=>{L3.exports={int8:5120,int16:5122,int32:5124,uint8:5121,uint16:5123,uint32:5125,float:5126,float32:5126}});var Vc=J((ST,z3)=>{z3.exports={static:35044,dynamic:35048,stream:35040}});var nd=J((kT,rd)=>{var Tr=Ar(),za=yn(),Bs=La(),Xu=Xn(),fn=ka(),td=Wc(),Xc=td.flatten,Yu=td.shape,C3=$s(),Ku=Hs(),Qu=Vc(),Zu=35044,R3=35040,Yc=5121,Kc=5126,Yn=[];Yn[5120]=1;Yn[5122]=2;Yn[5124]=4;Yn[5121]=1;Yn[5123]=2;Yn[5125]=4;Yn[5126]=4;function Us(e){return C3[Object.prototype.toString.call(e)]|0}function Ju(e,t){for(var r=0;r<t.length;++r)e[r]=t[r]}function ed(e,t,r,n,o,a,i){for(var s=0,c=0;c<r;++c)for(var f=0;f<n;++f)e[s++]=t[o*c+a*f+i]}rd.exports=function(t,r,n,o){var a=0,i={};function s(v){this.id=a++,this.buffer=t.createBuffer(),this.type=v,this.usage=Zu,this.byteLength=0,this.dimension=1,this.dtype=Yc,this.persistentData=null,n.profile&&(this.stats={size:0})}s.prototype.bind=function(){t.bindBuffer(this.type,this.buffer)},s.prototype.destroy=function(){u(this)};var c=[];function f(v,g){var x=c.pop();return x||(x=new s(v)),x.bind(),h(x,g,R3,0,1,!1),x}function l(v){c.push(v)}function m(v,g,x){v.byteLength=g.byteLength,t.bufferData(v.type,g,x)}function h(v,g,x,b,y,E){var _;if(v.usage=x,Array.isArray(g)){if(v.dtype=b||Kc,g.length>0){var z;if(Array.isArray(g[0])){_=Yu(g);for(var S=1,L=1;L<_.length;++L)S*=_[L];v.dimension=S,z=Xc(g,_,v.dtype),m(v,z,x),E?v.persistentData=z:fn.freeType(z)}else if(typeof g[0]=="number"){v.dimension=y;var D=fn.allocType(v.dtype,g.length);Ju(D,g),m(v,D,x),E?v.persistentData=D:fn.freeType(D)}else za(g[0])?(v.dimension=g[0].length,v.dtype=b||Us(g[0])||Kc,z=Xc(g,[g.length,g[0].length],v.dtype),m(v,z,x),E?v.persistentData=z:fn.freeType(z)):Tr.raise("invalid buffer data")}}else if(za(g))v.dtype=b||Us(g),v.dimension=y,m(v,g,x),E&&(v.persistentData=new Uint8Array(new Uint8Array(g.buffer)));else if(Bs(g)){_=g.shape;var O=g.stride,G=g.offset,C=0,R=0,K=0,Y=0;_.length===1?(C=_[0],R=1,K=O[0],Y=0):_.length===2?(C=_[0],R=_[1],K=O[0],Y=O[1]):Tr.raise("invalid shape"),v.dtype=b||Us(g.data)||Kc,v.dimension=R;var ee=fn.allocType(v.dtype,C*R);ed(ee,g.data,C,R,K,Y,G),m(v,ee,x),E?v.persistentData=ee:fn.freeType(ee)}else g instanceof ArrayBuffer?(v.dtype=Yc,v.dimension=y,m(v,g,x),E&&(v.persistentData=new Uint8Array(new Uint8Array(g)))):Tr.raise("invalid buffer data")}function u(v){r.bufferCount--,o(v);var g=v.buffer;Tr(g,"buffer must not be deleted already"),t.deleteBuffer(g),v.buffer=null,delete i[v.id]}function p(v,g,x,b){r.bufferCount++;var y=new s(g);i[y.id]=y;function E(S){var L=Zu,D=null,O=0,G=0,C=1;return Array.isArray(S)||za(S)||Bs(S)||S instanceof ArrayBuffer?D=S:typeof S=="number"?O=S|0:S&&(Tr.type(S,"object","buffer arguments must be an object, a number or an array"),"data"in S&&(Tr(D===null||Array.isArray(D)||za(D)||Bs(D),"invalid data for buffer"),D=S.data),"usage"in S&&(Tr.parameter(S.usage,Qu,"invalid buffer usage"),L=Qu[S.usage]),"type"in S&&(Tr.parameter(S.type,Ku,"invalid buffer type"),G=Ku[S.type]),"dimension"in S&&(Tr.type(S.dimension,"number","invalid dimension"),C=S.dimension|0),"length"in S&&(Tr.nni(O,"buffer length must be a nonnegative integer"),O=S.length|0)),y.bind(),D?h(y,D,L,G,C,b):(O&&t.bufferData(y.type,O,L),y.dtype=G||Yc,y.usage=L,y.dimension=C,y.byteLength=O),n.profile&&(y.stats.size=y.byteLength*Yn[y.dtype]),E}function _(S,L){Tr(L+S.byteLength<=y.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+S.byteLength+" starting from offset "+L+" to a buffer of size "+y.byteLength),t.bufferSubData(y.type,L,S)}function z(S,L){var D=(L||0)|0,O;if(y.bind(),za(S)||S instanceof ArrayBuffer)_(S,D);else if(Array.isArray(S)){if(S.length>0)if(typeof S[0]=="number"){var G=fn.allocType(y.dtype,S.length);Ju(G,S),_(G,D),fn.freeType(G)}else if(Array.isArray(S[0])||za(S[0])){O=Yu(S);var C=Xc(S,O,y.dtype);_(C,D),fn.freeType(C)}else Tr.raise("invalid buffer data")}else if(Bs(S)){O=S.shape;var R=S.stride,K=0,Y=0,ee=0,V=0;O.length===1?(K=O[0],Y=1,ee=R[0],V=0):O.length===2?(K=O[0],Y=O[1],ee=R[0],V=R[1]):Tr.raise("invalid shape");var he=Array.isArray(S.data)?y.dtype:Us(S.data),ve=fn.allocType(he,K*Y);ed(ve,S.data,K,Y,ee,V,S.offset),_(ve,D),fn.freeType(ve)}else Tr.raise("invalid data for buffer subdata");return E}return x||E(v),E._reglType="buffer",E._buffer=y,E.subdata=z,n.profile&&(E.stats=y.stats),E.destroy=function(){u(y)},E}function d(){Xu(i).forEach(function(v){v.buffer=t.createBuffer(),t.bindBuffer(v.type,v.buffer),t.bufferData(v.type,v.persistentData||v.byteLength,v.usage)})}return n.profile&&(r.getTotalBufferSize=function(){var v=0;return Object.keys(i).forEach(function(g){v+=i[g].stats.size}),v}),{create:p,createStream:f,destroyStream:l,clear:function(){Xu(i).forEach(u),c.forEach(u)},getBuffer:function(v){return v&&v._buffer instanceof s?v._buffer:null},restore:d,_initBuffer:h}}});var js=J((LT,N3)=>{N3.exports={points:0,point:0,lines:1,line:1,"line loop":2,"line strip":3,triangles:4,triangle:4,"triangle strip":5,"triangle fan":6}});var ld=J((zT,cd)=>{var Ln=Ar(),Ws=yn(),Qc=La(),P3=Xn(),od=js(),ad=Vc(),I3=0,O3=1,Ri=4,D3=5120,Ca=5121,id=5122,Ra=5123,sd=5124,Co=5125,Zc=34963,G3=35040,F3=35044;cd.exports=function(t,r,n,o){var a={},i=0,s={uint8:Ca,uint16:Ra};r.oes_element_index_uint&&(s.uint32=Co);function c(d){this.id=i++,a[this.id]=this,this.buffer=d,this.primType=Ri,this.vertCount=0,this.type=0}c.prototype.bind=function(){this.buffer.bind()};var f=[];function l(d){var v=f.pop();return v||(v=new c(n.create(null,Zc,!0,!1)._buffer)),h(v,d,G3,-1,-1,0,0),v}function m(d){f.push(d)}function h(d,v,g,x,b,y,E){d.buffer.bind();var _;if(v){var z=E;!E&&(!Ws(v)||Qc(v)&&!Ws(v.data))&&(z=r.oes_element_index_uint?Co:Ra),n._initBuffer(d.buffer,v,g,z,3)}else t.bufferData(Zc,y,g),d.buffer.dtype=_||Ca,d.buffer.usage=g,d.buffer.dimension=3,d.buffer.byteLength=y;if(_=E,!E){switch(d.buffer.dtype){case Ca:case D3:_=Ca;break;case Ra:case id:_=Ra;break;case Co:case sd:_=Co;break;default:Ln.raise("unsupported type for element array")}d.buffer.dtype=_}d.type=_,Ln(_!==Co||!!r.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var S=b;S<0&&(S=d.buffer.byteLength,_===Ra?S>>=1:_===Co&&(S>>=2)),d.vertCount=S;var L=x;if(x<0){L=Ri;var D=d.buffer.dimension;D===1&&(L=I3),D===2&&(L=O3),D===3&&(L=Ri)}d.primType=L}function u(d){o.elementsCount--,Ln(d.buffer!==null,"must not double destroy elements"),delete a[d.id],d.buffer.destroy(),d.buffer=null}function p(d,v){var g=n.create(null,Zc,!0),x=new c(g._buffer);o.elementsCount++;function b(y){if(!y)g(),x.primType=Ri,x.vertCount=0,x.type=Ca;else if(typeof y=="number")g(y),x.primType=Ri,x.vertCount=y|0,x.type=Ca;else{var E=null,_=F3,z=-1,S=-1,L=0,D=0;Array.isArray(y)||Ws(y)||Qc(y)?E=y:(Ln.type(y,"object","invalid arguments for elements"),"data"in y&&(E=y.data,Ln(Array.isArray(E)||Ws(E)||Qc(E),"invalid data for element buffer")),"usage"in y&&(Ln.parameter(y.usage,ad,"invalid element buffer usage"),_=ad[y.usage]),"primitive"in y&&(Ln.parameter(y.primitive,od,"invalid element buffer primitive"),z=od[y.primitive]),"count"in y&&(Ln(typeof y.count=="number"&&y.count>=0,"invalid vertex count for elements"),S=y.count|0),"type"in y&&(Ln.parameter(y.type,s,"invalid buffer type"),D=s[y.type]),"length"in y?L=y.length|0:(L=S,D===Ra||D===id?L*=2:(D===Co||D===sd)&&(L*=4))),h(x,E,_,z,S,L,D)}return b}return b(d),b._reglType="elements",b._elements=x,b.subdata=function(y,E){return g.subdata(y,E),b},b.destroy=function(){u(x)},b}return{create:p,createStream:l,destroyStream:m,getElements:function(d){return typeof d=="function"&&d._elements instanceof c?d._elements:null},clear:function(){P3(a).forEach(u)}}}});var ud=J((CT,hd)=>{var q3=ka(),fd=new Float32Array(1),$3=new Uint32Array(fd.buffer),H3=5123;hd.exports=function(t){for(var r=q3.allocType(H3,t.length),n=0;n<t.length;++n)if(isNaN(t[n]))r[n]=65535;else if(t[n]===1/0)r[n]=31744;else if(t[n]===-1/0)r[n]=64512;else{fd[0]=t[n];var o=$3[0],a=o>>>31<<15,i=(o<<1>>>24)-127,s=o>>13&1023;if(i<-24)r[n]=a;else if(i<-14){var c=-14-i;r[n]=a+(s+1024>>c)}else i>15?r[n]=a+31744:r[n]=a+(i+15<<10)+s}return r}});var Jc=J((RT,dd)=>{var B3=yn();dd.exports=function(t){return Array.isArray(t)||B3(t)}});var vd=J((NT,pd)=>{pd.exports=function(e){return!(e&e-1)&&!!e}});var Qd=J((PT,Kd)=>{var Ue=Ar(),Ro=Sn(),md=Xn(),U3=yn(),Ed=La(),t0=ka(),Md=ud(),Ad=Jc(),gd=Wc(),xd=vd(),j3=$s(),W3=$s(),V3=34467,bn=3553,el=34067,Vs=34069,No=6408,ol=6406,Qs=6407,Pi=6409,Zs=6410,dl=32854,Js=32855,pl=36194,Td=32819,Sd=32820,kd=33635,Ld=34042,e0=6402,Ii=34041,al=35904,il=35906,Pa=36193,sl=33776,cl=33777,ll=33778,fl=33779,zd=35986,Cd=35987,Rd=34798,Nd=35840,Pd=35841,Id=35842,Od=35843,Dd=36196,Na=5121,vl=5123,r0=5125,Oi=5126,X3=10242,Y3=10243,K3=10497,tl=33071,Q3=33648,Z3=10240,J3=10241,rl=9728,e5=9729,hl=9984,Gd=9985,Fd=9986,ul=9987,t5=33170,Xs=4352,r5=4353,n5=4354,o5=34046,a5=3317,i5=37440,s5=37441,c5=37443,yd=37444,Ni=33984,l5=[hl,Fd,Gd,ul],Ys=[0,Pi,Zs,Qs,No],Ur={};Ur[Pi]=Ur[ol]=Ur[e0]=1;Ur[Ii]=Ur[Zs]=2;Ur[Qs]=Ur[al]=3;Ur[No]=Ur[il]=4;var Di={};Di[dl]=Td;Di[pl]=kd;Di[Js]=Sd;Di[e0]=r0;Di[Ii]=Ld;function Ia(e){return"[object "+e+"]"}var qd=Ia("HTMLCanvasElement"),$d=Ia("OffscreenCanvas"),Hd=Ia("CanvasRenderingContext2D"),Bd=Ia("ImageBitmap"),Ud=Ia("HTMLImageElement"),jd=Ia("HTMLVideoElement"),f5=Object.keys(j3).concat([qd,$d,Hd,Bd,Ud,jd]),Oa=[];Oa[Na]=1;Oa[Oi]=4;Oa[Pa]=2;Oa[vl]=2;Oa[r0]=4;var or=[];or[dl]=2;or[Js]=2;or[pl]=2;or[Ii]=4;or[sl]=.5;or[cl]=.5;or[ll]=1;or[fl]=1;or[zd]=.5;or[Cd]=1;or[Rd]=1;or[Nd]=.5;or[Pd]=.25;or[Id]=.5;or[Od]=.25;or[Dd]=.5;function Wd(e){return Array.isArray(e)&&(e.length===0||typeof e[0]=="number")}function Vd(e){if(!Array.isArray(e))return!1;var t=e.length;return!(t===0||!Ad(e[0]))}function Po(e){return Object.prototype.toString.call(e)}function bd(e){return Po(e)===qd}function wd(e){return Po(e)===$d}function h5(e){return Po(e)===Hd}function u5(e){return Po(e)===Bd}function d5(e){return Po(e)===Ud}function p5(e){return Po(e)===jd}function nl(e){if(!e)return!1;var t=Po(e);return f5.indexOf(t)>=0?!0:Wd(e)||Vd(e)||Ed(e)}function _d(e){return W3[Object.prototype.toString.call(e)]|0}function v5(e,t){var r=t.length;switch(e.type){case Na:case vl:case r0:case Oi:var n=t0.allocType(e.type,r);n.set(t),e.data=n;break;case Pa:e.data=Md(t);break;default:Ue.raise("unsupported texture type, must specify a typed array")}}function Xd(e,t){return t0.allocType(e.type===Pa?Oi:e.type,t)}function Yd(e,t){e.type===Pa?(e.data=Md(t),t0.freeType(t)):e.data=t}function m5(e,t,r,n,o,a){for(var i=e.width,s=e.height,c=e.channels,f=i*s*c,l=Xd(e,f),m=0,h=0;h<s;++h)for(var u=0;u<i;++u)for(var p=0;p<c;++p)l[m++]=t[r*u+n*h+o*p+a];Yd(e,l)}function Ks(e,t,r,n,o,a){var i;if(typeof or[e]!="undefined"?i=or[e]:i=Ur[e]*Oa[t],a&&(i*=6),o){for(var s=0,c=r;c>=1;)s+=i*c*c,c/=2;return s}else return i*r*n}Kd.exports=function(t,r,n,o,a,i,s){var c={"don't care":Xs,"dont care":Xs,nice:n5,fast:r5},f={repeat:K3,clamp:tl,mirror:Q3},l={nearest:rl,linear:e5},m=Ro({mipmap:ul,"nearest mipmap nearest":hl,"linear mipmap nearest":Gd,"nearest mipmap linear":Fd,"linear mipmap linear":ul},l),h={none:0,browser:yd},u={uint8:Na,rgba4:Td,rgb565:kd,"rgb5 a1":Sd},p={alpha:ol,luminance:Pi,"luminance alpha":Zs,rgb:Qs,rgba:No,rgba4:dl,"rgb5 a1":Js,rgb565:pl},d={};r.ext_srgb&&(p.srgb=al,p.srgba=il),r.oes_texture_float&&(u.float32=u.float=Oi),r.oes_texture_half_float&&(u.float16=u["half float"]=Pa),r.webgl_depth_texture&&(Ro(p,{depth:e0,"depth stencil":Ii}),Ro(u,{uint16:vl,uint32:r0,"depth stencil":Ld})),r.webgl_compressed_texture_s3tc&&Ro(d,{"rgb s3tc dxt1":sl,"rgba s3tc dxt1":cl,"rgba s3tc dxt3":ll,"rgba s3tc dxt5":fl}),r.webgl_compressed_texture_atc&&Ro(d,{"rgb atc":zd,"rgba atc explicit alpha":Cd,"rgba atc interpolated alpha":Rd}),r.webgl_compressed_texture_pvrtc&&Ro(d,{"rgb pvrtc 4bppv1":Nd,"rgb pvrtc 2bppv1":Pd,"rgba pvrtc 4bppv1":Id,"rgba pvrtc 2bppv1":Od}),r.webgl_compressed_texture_etc1&&(d["rgb etc1"]=Dd);var v=Array.prototype.slice.call(t.getParameter(V3));Object.keys(d).forEach(function(T){var $=d[T];v.indexOf($)>=0&&(p[T]=$)});var g=Object.keys(p);n.textureFormats=g;var x=[];Object.keys(p).forEach(function(T){var $=p[T];x[$]=T});var b=[];Object.keys(u).forEach(function(T){var $=u[T];b[$]=T});var y=[];Object.keys(l).forEach(function(T){var $=l[T];y[$]=T});var E=[];Object.keys(m).forEach(function(T){var $=m[T];E[$]=T});var _=[];Object.keys(f).forEach(function(T){var $=f[T];_[$]=T});var z=g.reduce(function(T,$){var q=p[$];return q===Pi||q===ol||q===Pi||q===Zs||q===e0||q===Ii||r.ext_srgb&&(q===al||q===il)?T[q]=q:q===Js||$.indexOf("rgba")>=0?T[q]=No:T[q]=Qs,T},{});function S(){this.internalformat=No,this.format=No,this.type=Na,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=yd,this.width=0,this.height=0,this.channels=0}function L(T,$){T.internalformat=$.internalformat,T.format=$.format,T.type=$.type,T.compressed=$.compressed,T.premultiplyAlpha=$.premultiplyAlpha,T.flipY=$.flipY,T.unpackAlignment=$.unpackAlignment,T.colorSpace=$.colorSpace,T.width=$.width,T.height=$.height,T.channels=$.channels}function D(T,$){if(!(typeof $!="object"||!$)){if("premultiplyAlpha"in $&&(Ue.type($.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),T.premultiplyAlpha=$.premultiplyAlpha),"flipY"in $&&(Ue.type($.flipY,"boolean","invalid texture flip"),T.flipY=$.flipY),"alignment"in $&&(Ue.oneOf($.alignment,[1,2,4,8],"invalid texture unpack alignment"),T.unpackAlignment=$.alignment),"colorSpace"in $&&(Ue.parameter($.colorSpace,h,"invalid colorSpace"),T.colorSpace=h[$.colorSpace]),"type"in $){var q=$.type;Ue(r.oes_texture_float||!(q==="float"||q==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),Ue(r.oes_texture_half_float||!(q==="half float"||q==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),Ue(r.webgl_depth_texture||!(q==="uint16"||q==="uint32"||q==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),Ue.parameter(q,u,"invalid texture type"),T.type=u[q]}var ae=T.width,fe=T.height,M=T.channels,w=!1;"shape"in $?(Ue(Array.isArray($.shape)&&$.shape.length>=2,"shape must be an array"),ae=$.shape[0],fe=$.shape[1],$.shape.length===3&&(M=$.shape[2],Ue(M>0&&M<=4,"invalid number of channels"),w=!0),Ue(ae>=0&&ae<=n.maxTextureSize,"invalid width"),Ue(fe>=0&&fe<=n.maxTextureSize,"invalid height")):("radius"in $&&(ae=fe=$.radius,Ue(ae>=0&&ae<=n.maxTextureSize,"invalid radius")),"width"in $&&(ae=$.width,Ue(ae>=0&&ae<=n.maxTextureSize,"invalid width")),"height"in $&&(fe=$.height,Ue(fe>=0&&fe<=n.maxTextureSize,"invalid height")),"channels"in $&&(M=$.channels,Ue(M>0&&M<=4,"invalid number of channels"),w=!0)),T.width=ae|0,T.height=fe|0,T.channels=M|0;var N=!1;if("format"in $){var H=$.format;Ue(r.webgl_depth_texture||!(H==="depth"||H==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),Ue.parameter(H,p,"invalid texture format");var U=T.internalformat=p[H];T.format=z[U],H in u&&("type"in $||(T.type=u[H])),H in d&&(T.compressed=!0),N=!0}!w&&N?T.channels=Ur[T.format]:w&&!N?T.channels!==Ys[T.format]&&(T.format=T.internalformat=Ys[T.channels]):N&&w&&Ue(T.channels===Ur[T.format],"number of channels inconsistent with specified format")}}function O(T){t.pixelStorei(i5,T.flipY),t.pixelStorei(s5,T.premultiplyAlpha),t.pixelStorei(c5,T.colorSpace),t.pixelStorei(a5,T.unpackAlignment)}function G(){S.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function C(T,$){var q=null;if(nl($)?q=$:$&&(Ue.type($,"object","invalid pixel data type"),D(T,$),"x"in $&&(T.xOffset=$.x|0),"y"in $&&(T.yOffset=$.y|0),nl($.data)&&(q=$.data)),Ue(!T.compressed||q instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),$.copy){Ue(!q,"can not specify copy and data field for the same texture");var ae=a.viewportWidth,fe=a.viewportHeight;T.width=T.width||ae-T.xOffset,T.height=T.height||fe-T.yOffset,T.needsCopy=!0,Ue(T.xOffset>=0&&T.xOffset<ae&&T.yOffset>=0&&T.yOffset<fe&&T.width>0&&T.width<=ae&&T.height>0&&T.height<=fe,"copy texture read out of bounds")}else if(!q)T.width=T.width||1,T.height=T.height||1,T.channels=T.channels||4;else if(U3(q))T.channels=T.channels||4,T.data=q,!("type"in $)&&T.type===Na&&(T.type=_d(q));else if(Wd(q))T.channels=T.channels||4,v5(T,q),T.alignment=1,T.needsFree=!0;else if(Ed(q)){var M=q.data;!Array.isArray(M)&&T.type===Na&&(T.type=_d(M));var w=q.shape,N=q.stride,H,U,F,I,B,A;w.length===3?(F=w[2],A=N[2]):(Ue(w.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,A=1),H=w[0],U=w[1],I=N[0],B=N[1],T.alignment=1,T.width=H,T.height=U,T.channels=F,T.format=T.internalformat=Ys[F],T.needsFree=!0,m5(T,M,I,B,A,q.offset)}else if(bd(q)||wd(q)||h5(q))bd(q)||wd(q)?T.element=q:T.element=q.canvas,T.width=T.element.width,T.height=T.element.height,T.channels=4;else if(u5(q))T.element=q,T.width=q.width,T.height=q.height,T.channels=4;else if(d5(q))T.element=q,T.width=q.naturalWidth,T.height=q.naturalHeight,T.channels=4;else if(p5(q))T.element=q,T.width=q.videoWidth,T.height=q.videoHeight,T.channels=4;else if(Vd(q)){var P=T.width||q[0].length,k=T.height||q.length,j=T.channels;Ad(q[0][0])?j=j||q[0][0].length:j=j||1;for(var X=gd.shape(q),re=1,ce=0;ce<X.length;++ce)re*=X[ce];var ne=Xd(T,re);gd.flatten(q,X,"",ne),Yd(T,ne),T.alignment=1,T.width=P,T.height=k,T.channels=j,T.format=T.internalformat=Ys[j],T.needsFree=!0}T.type===Oi?Ue(n.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):T.type===Pa&&Ue(n.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function R(T,$,q){var ae=T.element,fe=T.data,M=T.internalformat,w=T.format,N=T.type,H=T.width,U=T.height;O(T),ae?t.texImage2D($,q,w,w,N,ae):T.compressed?t.compressedTexImage2D($,q,M,H,U,0,fe):T.needsCopy?(o(),t.copyTexImage2D($,q,w,T.xOffset,T.yOffset,H,U,0)):t.texImage2D($,q,w,H,U,0,w,N,fe||null)}function K(T,$,q,ae,fe){var M=T.element,w=T.data,N=T.internalformat,H=T.format,U=T.type,F=T.width,I=T.height;O(T),M?t.texSubImage2D($,fe,q,ae,H,U,M):T.compressed?t.compressedTexSubImage2D($,fe,q,ae,N,F,I,w):T.needsCopy?(o(),t.copyTexSubImage2D($,fe,q,ae,T.xOffset,T.yOffset,F,I)):t.texSubImage2D($,fe,q,ae,F,I,H,U,w)}var Y=[];function ee(){return Y.pop()||new G}function V(T){T.needsFree&&t0.freeType(T.data),G.call(T),Y.push(T)}function he(){S.call(this),this.genMipmaps=!1,this.mipmapHint=Xs,this.mipmask=0,this.images=Array(16)}function ve(T,$,q){var ae=T.images[0]=ee();T.mipmask=1,ae.width=T.width=$,ae.height=T.height=q,ae.channels=T.channels=4}function we(T,$){var q=null;if(nl($))q=T.images[0]=ee(),L(q,T),C(q,$),T.mipmask=1;else if(D(T,$),Array.isArray($.mipmap))for(var ae=$.mipmap,fe=0;fe<ae.length;++fe)q=T.images[fe]=ee(),L(q,T),q.width>>=fe,q.height>>=fe,C(q,ae[fe]),T.mipmask|=1<<fe;else q=T.images[0]=ee(),L(q,T),C(q,$),T.mipmask=1;L(T,T.images[0]),T.compressed&&(T.internalformat===sl||T.internalformat===cl||T.internalformat===ll||T.internalformat===fl)&&Ue(T.width%4===0&&T.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function oe(T,$){for(var q=T.images,ae=0;ae<q.length;++ae){if(!q[ae])return;R(q[ae],$,ae)}}var De=[];function be(){var T=De.pop()||new he;S.call(T),T.mipmask=0;for(var $=0;$<16;++$)T.images[$]=null;return T}function qe(T){for(var $=T.images,q=0;q<$.length;++q)$[q]&&V($[q]),$[q]=null;De.push(T)}function Fe(){this.minFilter=rl,this.magFilter=rl,this.wrapS=tl,this.wrapT=tl,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Xs}function $e(T,$){if("min"in $){var q=$.min;Ue.parameter(q,m),T.minFilter=m[q],l5.indexOf(T.minFilter)>=0&&!("faces"in $)&&(T.genMipmaps=!0)}if("mag"in $){var ae=$.mag;Ue.parameter(ae,l),T.magFilter=l[ae]}var fe=T.wrapS,M=T.wrapT;if("wrap"in $){var w=$.wrap;typeof w=="string"?(Ue.parameter(w,f),fe=M=f[w]):Array.isArray(w)&&(Ue.parameter(w[0],f),Ue.parameter(w[1],f),fe=f[w[0]],M=f[w[1]])}else{if("wrapS"in $){var N=$.wrapS;Ue.parameter(N,f),fe=f[N]}if("wrapT"in $){var H=$.wrapT;Ue.parameter(H,f),M=f[H]}}if(T.wrapS=fe,T.wrapT=M,"anisotropic"in $){var U=$.anisotropic;Ue(typeof U=="number"&&U>=1&&U<=n.maxAnisotropic,"aniso samples must be between 1 and "),T.anisotropic=$.anisotropic}if("mipmap"in $){var F=!1;switch(typeof $.mipmap){case"string":Ue.parameter($.mipmap,c,"invalid mipmap hint"),T.mipmapHint=c[$.mipmap],T.genMipmaps=!0,F=!0;break;case"boolean":F=T.genMipmaps=$.mipmap;break;case"object":Ue(Array.isArray($.mipmap),"invalid mipmap type"),T.genMipmaps=!1,F=!0;break;default:Ue.raise("invalid mipmap type")}F&&!("min"in $)&&(T.minFilter=hl)}}function le(T,$){t.texParameteri($,J3,T.minFilter),t.texParameteri($,Z3,T.magFilter),t.texParameteri($,X3,T.wrapS),t.texParameteri($,Y3,T.wrapT),r.ext_texture_filter_anisotropic&&t.texParameteri($,o5,T.anisotropic),T.genMipmaps&&(t.hint(t5,T.mipmapHint),t.generateMipmap($))}var Se=0,Re={},We=n.maxTextureUnits,Ge=Array(We).map(function(){return null});function Ne(T){S.call(this),this.mipmask=0,this.internalformat=No,this.id=Se++,this.refCount=1,this.target=T,this.texture=t.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Fe,s.profile&&(this.stats={size:0})}function Z(T){t.activeTexture(Ni),t.bindTexture(T.target,T.texture)}function pe(){var T=Ge[0];T?t.bindTexture(T.target,T.texture):t.bindTexture(bn,null)}function ue(T){var $=T.texture;Ue($,"must not double destroy texture");var q=T.unit,ae=T.target;q>=0&&(t.activeTexture(Ni+q),t.bindTexture(ae,null),Ge[q]=null),t.deleteTexture($),T.texture=null,T.params=null,T.pixels=null,T.refCount=0,delete Re[T.id],i.textureCount--}Ro(Ne.prototype,{bind:function(){var T=this;T.bindCount+=1;var $=T.unit;if($<0){for(var q=0;q<We;++q){var ae=Ge[q];if(ae){if(ae.bindCount>0)continue;ae.unit=-1}Ge[q]=T,$=q;break}$>=We&&Ue.raise("insufficient number of texture units"),s.profile&&i.maxTextureUnits<$+1&&(i.maxTextureUnits=$+1),T.unit=$,t.activeTexture(Ni+$),t.bindTexture(T.target,T.texture)}return $},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&ue(this)}});function Me(T,$){var q=new Ne(bn);Re[q.id]=q,i.textureCount++;function ae(w,N){var H=q.texInfo;Fe.call(H);var U=be();return typeof w=="number"?typeof N=="number"?ve(U,w|0,N|0):ve(U,w|0,w|0):w?(Ue.type(w,"object","invalid arguments to regl.texture"),$e(H,w),we(U,w)):ve(U,1,1),H.genMipmaps&&(U.mipmask=(U.width<<1)-1),q.mipmask=U.mipmask,L(q,U),Ue.texture2D(H,U,n),q.internalformat=U.internalformat,ae.width=U.width,ae.height=U.height,Z(q),oe(U,bn),le(H,bn),pe(),qe(U),s.profile&&(q.stats.size=Ks(q.internalformat,q.type,U.width,U.height,H.genMipmaps,!1)),ae.format=x[q.internalformat],ae.type=b[q.type],ae.mag=y[H.magFilter],ae.min=E[H.minFilter],ae.wrapS=_[H.wrapS],ae.wrapT=_[H.wrapT],ae}function fe(w,N,H,U){Ue(!!w,"must specify image data");var F=N|0,I=H|0,B=U|0,A=ee();return L(A,q),A.width=0,A.height=0,C(A,w),A.width=A.width||(q.width>>B)-F,A.height=A.height||(q.height>>B)-I,Ue(q.type===A.type&&q.format===A.format&&q.internalformat===A.internalformat,"incompatible format for texture.subimage"),Ue(F>=0&&I>=0&&F+A.width<=q.width&&I+A.height<=q.height,"texture.subimage write out of bounds"),Ue(q.mipmask&1<<B,"missing mipmap data"),Ue(A.data||A.element||A.needsCopy,"missing image data"),Z(q),K(A,bn,F,I,B),pe(),V(A),ae}function M(w,N){var H=w|0,U=N|0||H;if(H===q.width&&U===q.height)return ae;ae.width=q.width=H,ae.height=q.height=U,Z(q);for(var F=0;q.mipmask>>F;++F){var I=H>>F,B=U>>F;if(!I||!B)break;t.texImage2D(bn,F,q.format,I,B,0,q.format,q.type,null)}return pe(),s.profile&&(q.stats.size=Ks(q.internalformat,q.type,H,U,!1,!1)),ae}return ae(T,$),ae.subimage=fe,ae.resize=M,ae._reglType="texture2d",ae._texture=q,s.profile&&(ae.stats=q.stats),ae.destroy=function(){q.decRef()},ae}function Pe(T,$,q,ae,fe,M){var w=new Ne(el);Re[w.id]=w,i.cubeCount++;var N=new Array(6);function H(I,B,A,P,k,j){var X,re=w.texInfo;for(Fe.call(re),X=0;X<6;++X)N[X]=be();if(typeof I=="number"||!I){var ce=I|0||1;for(X=0;X<6;++X)ve(N[X],ce,ce)}else if(typeof I=="object")if(B)we(N[0],I),we(N[1],B),we(N[2],A),we(N[3],P),we(N[4],k),we(N[5],j);else if($e(re,I),D(w,I),"faces"in I){var ne=I.faces;for(Ue(Array.isArray(ne)&&ne.length===6,"cube faces must be a length 6 array"),X=0;X<6;++X)Ue(typeof ne[X]=="object"&&!!ne[X],"invalid input for cube map face"),L(N[X],w),we(N[X],ne[X])}else for(X=0;X<6;++X)we(N[X],I);else Ue.raise("invalid arguments to cube map");for(L(w,N[0]),Ue.optional(function(){n.npotTextureCube||Ue(xd(w.width)&&xd(w.height),"your browser does not support non power or two texture dimensions")}),re.genMipmaps?w.mipmask=(N[0].width<<1)-1:w.mipmask=N[0].mipmask,Ue.textureCube(w,re,N,n),w.internalformat=N[0].internalformat,H.width=N[0].width,H.height=N[0].height,Z(w),X=0;X<6;++X)oe(N[X],Vs+X);for(le(re,el),pe(),s.profile&&(w.stats.size=Ks(w.internalformat,w.type,H.width,H.height,re.genMipmaps,!0)),H.format=x[w.internalformat],H.type=b[w.type],H.mag=y[re.magFilter],H.min=E[re.minFilter],H.wrapS=_[re.wrapS],H.wrapT=_[re.wrapT],X=0;X<6;++X)qe(N[X]);return H}function U(I,B,A,P,k){Ue(!!B,"must specify image data"),Ue(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var j=A|0,X=P|0,re=k|0,ce=ee();return L(ce,w),ce.width=0,ce.height=0,C(ce,B),ce.width=ce.width||(w.width>>re)-j,ce.height=ce.height||(w.height>>re)-X,Ue(w.type===ce.type&&w.format===ce.format&&w.internalformat===ce.internalformat,"incompatible format for texture.subimage"),Ue(j>=0&&X>=0&&j+ce.width<=w.width&&X+ce.height<=w.height,"texture.subimage write out of bounds"),Ue(w.mipmask&1<<re,"missing mipmap data"),Ue(ce.data||ce.element||ce.needsCopy,"missing image data"),Z(w),K(ce,Vs+I,j,X,re),pe(),V(ce),H}function F(I){var B=I|0;if(B!==w.width){H.width=w.width=B,H.height=w.height=B,Z(w);for(var A=0;A<6;++A)for(var P=0;w.mipmask>>P;++P)t.texImage2D(Vs+A,P,w.format,B>>P,B>>P,0,w.format,w.type,null);return pe(),s.profile&&(w.stats.size=Ks(w.internalformat,w.type,H.width,H.height,!1,!0)),H}}return H(T,$,q,ae,fe,M),H.subimage=U,H.resize=F,H._reglType="textureCube",H._texture=w,s.profile&&(H.stats=w.stats),H.destroy=function(){w.decRef()},H}function Ke(){for(var T=0;T<We;++T)t.activeTexture(Ni+T),t.bindTexture(bn,null),Ge[T]=null;md(Re).forEach(ue),i.cubeCount=0,i.textureCount=0}s.profile&&(i.getTotalTextureSize=function(){var T=0;return Object.keys(Re).forEach(function($){T+=Re[$].stats.size}),T});function Ve(){for(var T=0;T<We;++T){var $=Ge[T];$&&($.bindCount=0,$.unit=-1,Ge[T]=null)}md(Re).forEach(function(q){q.texture=t.createTexture(),t.bindTexture(q.target,q.texture);for(var ae=0;ae<32;++ae)if((q.mipmask&1<<ae)!==0)if(q.target===bn)t.texImage2D(bn,ae,q.internalformat,q.width>>ae,q.height>>ae,0,q.internalformat,q.type,null);else for(var fe=0;fe<6;++fe)t.texImage2D(Vs+fe,ae,q.internalformat,q.width>>ae,q.height>>ae,0,q.internalformat,q.type,null);le(q.texInfo,q.target)})}function Xe(){for(var T=0;T<We;++T){var $=Ge[T];$&&($.bindCount=0,$.unit=-1,Ge[T]=null),t.activeTexture(Ni+T),t.bindTexture(bn,null),t.bindTexture(el,null)}}return{create2D:Me,createCube:Pe,clear:Ke,getTexture:function(T){return null},restore:Ve,refresh:Xe}}});var f1=J((IT,l1)=>{var Kn=Ar(),Zd=Xn(),Qn=36161,n0=32854,e1=32855,t1=36194,r1=33189,n1=36168,o1=34041,a1=35907,i1=34836,s1=34842,c1=34843,hn=[];hn[n0]=2;hn[e1]=2;hn[t1]=2;hn[r1]=2;hn[n1]=1;hn[o1]=4;hn[a1]=4;hn[i1]=16;hn[s1]=8;hn[c1]=6;function Jd(e,t,r){return hn[e]*t*r}l1.exports=function(e,t,r,n,o){var a={rgba4:n0,rgb565:t1,"rgb5 a1":e1,depth:r1,stencil:n1,"depth stencil":o1};t.ext_srgb&&(a.srgba=a1),t.ext_color_buffer_half_float&&(a.rgba16f=s1,a.rgb16f=c1),t.webgl_color_buffer_float&&(a.rgba32f=i1);var i=[];Object.keys(a).forEach(function(u){var p=a[u];i[p]=u});var s=0,c={};function f(u){this.id=s++,this.refCount=1,this.renderbuffer=u,this.format=n0,this.width=0,this.height=0,o.profile&&(this.stats={size:0})}f.prototype.decRef=function(){--this.refCount<=0&&l(this)};function l(u){var p=u.renderbuffer;Kn(p,"must not double destroy renderbuffer"),e.bindRenderbuffer(Qn,null),e.deleteRenderbuffer(p),u.renderbuffer=null,u.refCount=0,delete c[u.id],n.renderbufferCount--}function m(u,p){var d=new f(e.createRenderbuffer());c[d.id]=d,n.renderbufferCount++;function v(x,b){var y=0,E=0,_=n0;if(typeof x=="object"&&x){var z=x;if("shape"in z){var S=z.shape;Kn(Array.isArray(S)&&S.length>=2,"invalid renderbuffer shape"),y=S[0]|0,E=S[1]|0}else"radius"in z&&(y=E=z.radius|0),"width"in z&&(y=z.width|0),"height"in z&&(E=z.height|0);"format"in z&&(Kn.parameter(z.format,a,"invalid renderbuffer format"),_=a[z.format])}else typeof x=="number"?(y=x|0,typeof b=="number"?E=b|0:E=y):x?Kn.raise("invalid arguments to renderbuffer constructor"):y=E=1;if(Kn(y>0&&E>0&&y<=r.maxRenderbufferSize&&E<=r.maxRenderbufferSize,"invalid renderbuffer size"),!(y===d.width&&E===d.height&&_===d.format))return v.width=d.width=y,v.height=d.height=E,d.format=_,e.bindRenderbuffer(Qn,d.renderbuffer),e.renderbufferStorage(Qn,_,y,E),Kn(e.getError()===0,"invalid render buffer format"),o.profile&&(d.stats.size=Jd(d.format,d.width,d.height)),v.format=i[d.format],v}function g(x,b){var y=x|0,E=b|0||y;return y===d.width&&E===d.height||(Kn(y>0&&E>0&&y<=r.maxRenderbufferSize&&E<=r.maxRenderbufferSize,"invalid renderbuffer size"),v.width=d.width=y,v.height=d.height=E,e.bindRenderbuffer(Qn,d.renderbuffer),e.renderbufferStorage(Qn,d.format,y,E),Kn(e.getError()===0,"invalid render buffer format"),o.profile&&(d.stats.size=Jd(d.format,d.width,d.height))),v}return v(u,p),v.resize=g,v._reglType="renderbuffer",v._renderbuffer=d,o.profile&&(v.stats=d.stats),v.destroy=function(){d.decRef()},v}o.profile&&(n.getTotalRenderbufferSize=function(){var u=0;return Object.keys(c).forEach(function(p){u+=c[p].stats.size}),u});function h(){Zd(c).forEach(function(u){u.renderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(Qn,u.renderbuffer),e.renderbufferStorage(Qn,u.format,u.width,u.height)}),e.bindRenderbuffer(Qn,null)}return{create:m,clear:function(){Zd(c).forEach(l)},restore:h}}});var w1=J((OT,b1)=>{var tt=Ar(),h1=Xn(),o0=Sn(),zn=36160,ml=36161,Io=3553,a0=34069,u1=36064,d1=36096,p1=36128,v1=33306,g1=36053,g5=36054,x5=36055,y5=36057,b5=36061,w5=36193,_5=5121,E5=5126,x1=6407,y1=6408,M5=6402,A5=[x1,y1],gl=[];gl[y1]=4;gl[x1]=3;var i0=[];i0[_5]=1;i0[E5]=4;i0[w5]=2;var T5=32854,S5=32855,k5=36194,L5=33189,z5=36168,m1=34041,C5=35907,R5=34836,N5=34842,P5=34843,I5=[T5,S5,k5,C5,N5,P5,R5],Da={};Da[g1]="complete";Da[g5]="incomplete attachment";Da[y5]="incomplete dimensions";Da[x5]="incomplete, missing attachment";Da[b5]="unsupported";b1.exports=function(t,r,n,o,a,i){var s={cur:null,next:null,dirty:!1,setFBO:null},c=["rgba"],f=["rgba4","rgb565","rgb5 a1"];r.ext_srgb&&f.push("srgba"),r.ext_color_buffer_half_float&&f.push("rgba16f","rgb16f"),r.webgl_color_buffer_float&&f.push("rgba32f");var l=["uint8"];r.oes_texture_half_float&&l.push("half float","float16"),r.oes_texture_float&&l.push("float","float32");function m(G,C,R){this.target=G,this.texture=C,this.renderbuffer=R;var K=0,Y=0;C?(K=C.width,Y=C.height):R&&(K=R.width,Y=R.height),this.width=K,this.height=Y}function h(G){G&&(G.texture&&G.texture._texture.decRef(),G.renderbuffer&&G.renderbuffer._renderbuffer.decRef())}function u(G,C,R){if(G)if(G.texture){var K=G.texture._texture,Y=Math.max(1,K.width),ee=Math.max(1,K.height);tt(Y===C&&ee===R,"inconsistent width/height for supplied texture"),K.refCount+=1}else{var V=G.renderbuffer._renderbuffer;tt(V.width===C&&V.height===R,"inconsistent width/height for renderbuffer"),V.refCount+=1}}function p(G,C){C&&(C.texture?t.framebufferTexture2D(zn,G,C.target,C.texture._texture.texture,0):t.framebufferRenderbuffer(zn,G,ml,C.renderbuffer._renderbuffer.renderbuffer))}function d(G){var C=Io,R=null,K=null,Y=G;typeof G=="object"&&(Y=G.data,"target"in G&&(C=G.target|0)),tt.type(Y,"function","invalid attachment data");var ee=Y._reglType;return ee==="texture2d"?(R=Y,tt(C===Io)):ee==="textureCube"?(R=Y,tt(C>=a0&&C<a0+6,"invalid cube map target")):ee==="renderbuffer"?(K=Y,C=ml):tt.raise("invalid regl object for attachment"),new m(C,R,K)}function v(G,C,R,K,Y){if(R){var ee=o.create2D({width:G,height:C,format:K,type:Y});return ee._texture.refCount=0,new m(Io,ee,null)}else{var V=a.create({width:G,height:C,format:K});return V._renderbuffer.refCount=0,new m(ml,null,V)}}function g(G){return G&&(G.texture||G.renderbuffer)}function x(G,C,R){G&&(G.texture?G.texture.resize(C,R):G.renderbuffer&&G.renderbuffer.resize(C,R),G.width=C,G.height=R)}var b=0,y={};function E(){this.id=b++,y[this.id]=this,this.framebuffer=t.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function _(G){G.colorAttachments.forEach(h),h(G.depthAttachment),h(G.stencilAttachment),h(G.depthStencilAttachment)}function z(G){var C=G.framebuffer;tt(C,"must not double destroy framebuffer"),t.deleteFramebuffer(C),G.framebuffer=null,i.framebufferCount--,delete y[G.id]}function S(G){var C;t.bindFramebuffer(zn,G.framebuffer);var R=G.colorAttachments;for(C=0;C<R.length;++C)p(u1+C,R[C]);for(C=R.length;C<n.maxColorAttachments;++C)t.framebufferTexture2D(zn,u1+C,Io,null,0);t.framebufferTexture2D(zn,v1,Io,null,0),t.framebufferTexture2D(zn,d1,Io,null,0),t.framebufferTexture2D(zn,p1,Io,null,0),p(d1,G.depthAttachment),p(p1,G.stencilAttachment),p(v1,G.depthStencilAttachment);var K=t.checkFramebufferStatus(zn);!t.isContextLost()&&K!==g1&&tt.raise("framebuffer configuration not supported, status = "+Da[K]),t.bindFramebuffer(zn,s.next?s.next.framebuffer:null),s.cur=s.next,t.getError()}function L(G,C){var R=new E;i.framebufferCount++;function K(ee,V){var he;tt(s.next!==R,"can not update framebuffer which is currently in use");var ve=0,we=0,oe=!0,De=!0,be=null,qe=!0,Fe="rgba",$e="uint8",le=1,Se=null,Re=null,We=null,Ge=!1;if(typeof ee=="number")ve=ee|0,we=V|0||ve;else if(!ee)ve=we=1;else{tt.type(ee,"object","invalid arguments for framebuffer");var Ne=ee;if("shape"in Ne){var Z=Ne.shape;tt(Array.isArray(Z)&&Z.length>=2,"invalid shape for framebuffer"),ve=Z[0],we=Z[1]}else"radius"in Ne&&(ve=we=Ne.radius),"width"in Ne&&(ve=Ne.width),"height"in Ne&&(we=Ne.height);("color"in Ne||"colors"in Ne)&&(be=Ne.color||Ne.colors,Array.isArray(be)&&tt(be.length===1||r.webgl_draw_buffers,"multiple render targets not supported")),be||("colorCount"in Ne&&(le=Ne.colorCount|0,tt(le>0,"invalid color buffer count")),"colorTexture"in Ne&&(qe=!!Ne.colorTexture,Fe="rgba4"),"colorType"in Ne&&($e=Ne.colorType,qe?(tt(r.oes_texture_float||!($e==="float"||$e==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),tt(r.oes_texture_half_float||!($e==="half float"||$e==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):$e==="half float"||$e==="float16"?(tt(r.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Fe="rgba16f"):($e==="float"||$e==="float32")&&(tt(r.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Fe="rgba32f"),tt.oneOf($e,l,"invalid color type")),"colorFormat"in Ne&&(Fe=Ne.colorFormat,c.indexOf(Fe)>=0?qe=!0:f.indexOf(Fe)>=0?qe=!1:tt.optional(function(){qe?tt.oneOf(Ne.colorFormat,c,"invalid color format for texture"):tt.oneOf(Ne.colorFormat,f,"invalid color format for renderbuffer")}))),("depthTexture"in Ne||"depthStencilTexture"in Ne)&&(Ge=!!(Ne.depthTexture||Ne.depthStencilTexture),tt(!Ge||r.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Ne&&(typeof Ne.depth=="boolean"?oe=Ne.depth:(Se=Ne.depth,De=!1)),"stencil"in Ne&&(typeof Ne.stencil=="boolean"?De=Ne.stencil:(Re=Ne.stencil,oe=!1)),"depthStencil"in Ne&&(typeof Ne.depthStencil=="boolean"?oe=De=Ne.depthStencil:(We=Ne.depthStencil,oe=!1,De=!1))}var pe=null,ue=null,Me=null,Pe=null;if(Array.isArray(be))pe=be.map(d);else if(be)pe=[d(be)];else for(pe=new Array(le),he=0;he<le;++he)pe[he]=v(ve,we,qe,Fe,$e);tt(r.webgl_draw_buffers||pe.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),tt(pe.length<=n.maxColorAttachments,"too many color attachments, not supported"),ve=ve||pe[0].width,we=we||pe[0].height,Se?ue=d(Se):oe&&!De&&(ue=v(ve,we,Ge,"depth","uint32")),Re?Me=d(Re):De&&!oe&&(Me=v(ve,we,!1,"stencil","uint8")),We?Pe=d(We):!Se&&!Re&&De&&oe&&(Pe=v(ve,we,Ge,"depth stencil","depth stencil")),tt(!!Se+!!Re+!!We<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var Ke=null;for(he=0;he<pe.length;++he)if(u(pe[he],ve,we),tt(!pe[he]||pe[he].texture&&A5.indexOf(pe[he].texture._texture.format)>=0||pe[he].renderbuffer&&I5.indexOf(pe[he].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+he+" is invalid"),pe[he]&&pe[he].texture){var Ve=gl[pe[he].texture._texture.format]*i0[pe[he].texture._texture.type];Ke===null?Ke=Ve:tt(Ke===Ve,"all color attachments much have the same number of bits per pixel.")}return u(ue,ve,we),tt(!ue||ue.texture&&ue.texture._texture.format===M5||ue.renderbuffer&&ue.renderbuffer._renderbuffer.format===L5,"invalid depth attachment for framebuffer object"),u(Me,ve,we),tt(!Me||Me.renderbuffer&&Me.renderbuffer._renderbuffer.format===z5,"invalid stencil attachment for framebuffer object"),u(Pe,ve,we),tt(!Pe||Pe.texture&&Pe.texture._texture.format===m1||Pe.renderbuffer&&Pe.renderbuffer._renderbuffer.format===m1,"invalid depth-stencil attachment for framebuffer object"),_(R),R.width=ve,R.height=we,R.colorAttachments=pe,R.depthAttachment=ue,R.stencilAttachment=Me,R.depthStencilAttachment=Pe,K.color=pe.map(g),K.depth=g(ue),K.stencil=g(Me),K.depthStencil=g(Pe),K.width=R.width,K.height=R.height,S(R),K}function Y(ee,V){tt(s.next!==R,"can not resize a framebuffer which is currently in use");var he=Math.max(ee|0,1),ve=Math.max(V|0||he,1);if(he===R.width&&ve===R.height)return K;for(var we=R.colorAttachments,oe=0;oe<we.length;++oe)x(we[oe],he,ve);return x(R.depthAttachment,he,ve),x(R.stencilAttachment,he,ve),x(R.depthStencilAttachment,he,ve),R.width=K.width=he,R.height=K.height=ve,S(R),K}return K(G,C),o0(K,{resize:Y,_reglType:"framebuffer",_framebuffer:R,destroy:function(){z(R),_(R)},use:function(ee){s.setFBO({framebuffer:K},ee)}})}function D(G){var C=Array(6);function R(Y){var ee;tt(C.indexOf(s.next)<0,"can not update framebuffer which is currently in use");var V={color:null},he=0,ve=null,we="rgba",oe="uint8",De=1;if(typeof Y=="number")he=Y|0;else if(!Y)he=1;else{tt.type(Y,"object","invalid arguments for framebuffer");var be=Y;if("shape"in be){var qe=be.shape;tt(Array.isArray(qe)&&qe.length>=2,"invalid shape for framebuffer"),tt(qe[0]===qe[1],"cube framebuffer must be square"),he=qe[0]}else"radius"in be&&(he=be.radius|0),"width"in be?(he=be.width|0,"height"in be&&tt(be.height===he,"must be square")):"height"in be&&(he=be.height|0);("color"in be||"colors"in be)&&(ve=be.color||be.colors,Array.isArray(ve)&&tt(ve.length===1||r.webgl_draw_buffers,"multiple render targets not supported")),ve||("colorCount"in be&&(De=be.colorCount|0,tt(De>0,"invalid color buffer count")),"colorType"in be&&(tt.oneOf(be.colorType,l,"invalid color type"),oe=be.colorType),"colorFormat"in be&&(we=be.colorFormat,tt.oneOf(be.colorFormat,c,"invalid color format for texture"))),"depth"in be&&(V.depth=be.depth),"stencil"in be&&(V.stencil=be.stencil),"depthStencil"in be&&(V.depthStencil=be.depthStencil)}var Fe;if(ve)if(Array.isArray(ve))for(Fe=[],ee=0;ee<ve.length;++ee)Fe[ee]=ve[ee];else Fe=[ve];else{Fe=Array(De);var $e={radius:he,format:we,type:oe};for(ee=0;ee<De;++ee)Fe[ee]=o.createCube($e)}for(V.color=Array(Fe.length),ee=0;ee<Fe.length;++ee){var le=Fe[ee];tt(typeof le=="function"&&le._reglType==="textureCube","invalid cube map"),he=he||le.width,tt(le.width===he&&le.height===he,"invalid cube map shape"),V.color[ee]={target:a0,data:Fe[ee]}}for(ee=0;ee<6;++ee){for(var Se=0;Se<Fe.length;++Se)V.color[Se].target=a0+ee;ee>0&&(V.depth=C[0].depth,V.stencil=C[0].stencil,V.depthStencil=C[0].depthStencil),C[ee]?C[ee](V):C[ee]=L(V)}return o0(R,{width:he,height:he,color:Fe})}function K(Y){var ee,V=Y|0;if(tt(V>0&&V<=n.maxCubeMapSize,"invalid radius for cube fbo"),V===R.width)return R;var he=R.color;for(ee=0;ee<he.length;++ee)he[ee].resize(V);for(ee=0;ee<6;++ee)C[ee].resize(V);return R.width=R.height=V,R}return R(G),o0(R,{faces:C,resize:K,_reglType:"framebufferCube",destroy:function(){C.forEach(function(Y){Y.destroy()})}})}function O(){s.cur=null,s.next=null,s.dirty=!0,h1(y).forEach(function(G){G.framebuffer=t.createFramebuffer(),S(G)})}return o0(s,{getFramebuffer:function(G){if(typeof G=="function"&&G._reglType==="framebuffer"){var C=G._framebuffer;if(C instanceof E)return C}return null},create:L,createCube:D,clear:function(){h1(y).forEach(z)},restore:O})}});var L1=J((DT,k1)=>{var hr=Ar(),_1=Xn(),E1=Hs(),M1=yn(),O5=La(),A1=js(),D5=5126,T1=34962,s0=34963,S1=["attributes","elements","offset","count","primitive","instances"];function xl(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=D5,this.offset=0,this.stride=0,this.divisor=0}k1.exports=function(t,r,n,o,a,i,s){for(var c=n.maxAttributes,f=new Array(c),l=0;l<c;++l)f[l]=new xl;var m=0,h={},u={Record:xl,scope:{},state:f,currentVAO:null,targetVAO:null,restore:d()?_:function(){},createVAO:z,getVAO:g,destroyBuffer:p,setVAO:d()?x:b,clear:d()?y:function(){}};function p(S){for(var L=0;L<f.length;++L){var D=f[L];D.buffer===S&&(t.disableVertexAttribArray(L),D.buffer=null)}}function d(){return r.oes_vertex_array_object}function v(){return r.angle_instanced_arrays}function g(S){return typeof S=="function"&&S._vao?S._vao:null}function x(S){if(S!==u.currentVAO){var L=d();S?L.bindVertexArrayOES(S.vao):L.bindVertexArrayOES(null),u.currentVAO=S}}function b(S){if(S!==u.currentVAO){if(S)S.bindAttrs();else{for(var L=v(),D=0;D<f.length;++D){var O=f[D];O.buffer?(t.enableVertexAttribArray(D),O.buffer.bind(),t.vertexAttribPointer(D,O.size,O.type,O.normalized,O.stride,O.offfset),L&&O.divisor&&L.vertexAttribDivisorANGLE(D,O.divisor)):(t.disableVertexAttribArray(D),t.vertexAttrib4f(D,O.x,O.y,O.z,O.w))}s.elements?t.bindBuffer(s0,s.elements.buffer.buffer):t.bindBuffer(s0,null)}u.currentVAO=S}}function y(){_1(h).forEach(function(S){S.destroy()})}function E(){this.id=++m,this.attributes=[],this.elements=null,this.ownsElements=!1,this.count=0,this.offset=0,this.instances=-1,this.primitive=4;var S=d();S?this.vao=S.createVertexArrayOES():this.vao=null,h[this.id]=this,this.buffers=[]}E.prototype.bindAttrs=function(){for(var S=v(),L=this.attributes,D=0;D<L.length;++D){var O=L[D];O.buffer?(t.enableVertexAttribArray(D),t.bindBuffer(T1,O.buffer.buffer),t.vertexAttribPointer(D,O.size,O.type,O.normalized,O.stride,O.offset),S&&O.divisor&&S.vertexAttribDivisorANGLE(D,O.divisor)):(t.disableVertexAttribArray(D),t.vertexAttrib4f(D,O.x,O.y,O.z,O.w))}for(var G=L.length;G<c;++G)t.disableVertexAttribArray(G);var C=i.getElements(this.elements);C?t.bindBuffer(s0,C.buffer.buffer):t.bindBuffer(s0,null)},E.prototype.refresh=function(){var S=d();S&&(S.bindVertexArrayOES(this.vao),this.bindAttrs(),u.currentVAO=null,S.bindVertexArrayOES(null))},E.prototype.destroy=function(){if(this.vao){var S=d();this===u.currentVAO&&(u.currentVAO=null,S.bindVertexArrayOES(null)),S.deleteVertexArrayOES(this.vao),this.vao=null}this.ownsElements&&(this.elements.destroy(),this.elements=null,this.ownsElements=!1),h[this.id]&&(delete h[this.id],o.vaoCount-=1)};function _(){var S=d();S&&_1(h).forEach(function(L){L.refresh()})}function z(S){var L=new E;o.vaoCount+=1;function D(O){var G;if(Array.isArray(O))G=O,L.elements&&L.ownsElements&&L.elements.destroy(),L.elements=null,L.ownsElements=!1,L.offset=0,L.count=0,L.instances=-1,L.primitive=4;else{if(hr(typeof O=="object","invalid arguments for create vao"),hr("attributes"in O,"must specify attributes for vao"),O.elements){var C=O.elements;L.ownsElements?typeof C=="function"&&C._reglType==="elements"?(L.elements.destroy(),L.ownsElements=!1):(L.elements(C),L.ownsElements=!1):i.getElements(O.elements)?(L.elements=O.elements,L.ownsElements=!1):(L.elements=i.create(O.elements),L.ownsElements=!0)}else L.elements=null,L.ownsElements=!1;G=O.attributes,L.offset=0,L.count=-1,L.instances=-1,L.primitive=4,L.elements&&(L.count=L.elements._elements.vertCount,L.primitive=L.elements._elements.primType),"offset"in O&&(L.offset=O.offset|0),"count"in O&&(L.count=O.count|0),"instances"in O&&(L.instances=O.instances|0),"primitive"in O&&(hr(O.primitive in A1,"bad primitive type: "+O.primitive),L.primitive=A1[O.primitive]),hr.optional(()=>{for(var oe=Object.keys(O),De=0;De<oe.length;++De)hr(S1.indexOf(oe[De])>=0,'invalid option for vao: "'+oe[De]+'" valid options are '+S1)}),hr(Array.isArray(G),"attributes must be an array")}hr(G.length<c,"too many attributes"),hr(G.length>0,"must specify at least one attribute");var R={},K=L.attributes;K.length=G.length;for(var Y=0;Y<G.length;++Y){var ee=G[Y],V=K[Y]=new xl,he=ee.data||ee;if(Array.isArray(he)||M1(he)||O5(he)){var ve;L.buffers[Y]&&(ve=L.buffers[Y],M1(he)&&ve._buffer.byteLength>=he.byteLength?ve.subdata(he):(ve.destroy(),L.buffers[Y]=null)),L.buffers[Y]||(ve=L.buffers[Y]=a.create(ee,T1,!1,!0)),V.buffer=a.getBuffer(ve),V.size=V.buffer.dimension|0,V.normalized=!1,V.type=V.buffer.dtype,V.offset=0,V.stride=0,V.divisor=0,V.state=1,R[Y]=1}else a.getBuffer(ee)?(V.buffer=a.getBuffer(ee),V.size=V.buffer.dimension|0,V.normalized=!1,V.type=V.buffer.dtype,V.offset=0,V.stride=0,V.divisor=0,V.state=1):a.getBuffer(ee.buffer)?(V.buffer=a.getBuffer(ee.buffer),V.size=(+ee.size||V.buffer.dimension)|0,V.normalized=!!ee.normalized||!1,"type"in ee?(hr.parameter(ee.type,E1,"invalid buffer type"),V.type=E1[ee.type]):V.type=V.buffer.dtype,V.offset=(ee.offset||0)|0,V.stride=(ee.stride||0)|0,V.divisor=(ee.divisor||0)|0,V.state=1,hr(V.size>=1&&V.size<=4,"size must be between 1 and 4"),hr(V.offset>=0,"invalid offset"),hr(V.stride>=0&&V.stride<=255,"stride must be between 0 and 255"),hr(V.divisor>=0,"divisor must be positive"),hr(!V.divisor||!!r.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in ee?(hr(Y>0,"first attribute must not be a constant"),V.x=+ee.x||0,V.y=+ee.y||0,V.z=+ee.z||0,V.w=+ee.w||0,V.state=2):hr(!1,"invalid attribute spec for location "+Y)}for(var we=0;we<L.buffers.length;++we)!R[we]&&L.buffers[we]&&(L.buffers[we].destroy(),L.buffers[we]=null);return L.refresh(),D}return D.destroy=function(){for(var O=0;O<L.buffers.length;++O)L.buffers[O]&&L.buffers[O].destroy();L.buffers.length=0,L.ownsElements&&(L.elements.destroy(),L.elements=null,L.ownsElements=!1),L.destroy()},D._vao=L,D._reglType="vao",D(S)}return u}});var N1=J((GT,R1)=>{var c0=Ar(),G5=Sn(),z1=Xn(),C1=35632,F5=35633,q5=35718,$5=35721;R1.exports=function(t,r,n,o){var a={},i={};function s(v,g,x,b){this.name=v,this.id=g,this.location=x,this.info=b}function c(v,g){for(var x=0;x<v.length;++x)if(v[x].id===g.id){v[x].location=g.location;return}v.push(g)}function f(v,g,x){var b=v===C1?a:i,y=b[g];if(!y){var E=r.str(g);y=t.createShader(v),t.shaderSource(y,E),t.compileShader(y),c0.shaderError(t,y,E,v,x),b[g]=y}return y}var l={},m=[],h=0;function u(v,g){this.id=h++,this.fragId=v,this.vertId=g,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,o.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function p(v,g,x){var b,y,E=f(C1,v.fragId),_=f(F5,v.vertId),z=v.program=t.createProgram();if(t.attachShader(z,E),t.attachShader(z,_),x)for(b=0;b<x.length;++b){var S=x[b];t.bindAttribLocation(z,S[0],S[1])}t.linkProgram(z),c0.linkError(t,z,r.str(v.fragId),r.str(v.vertId),g);var L=t.getProgramParameter(z,q5);o.profile&&(v.stats.uniformsCount=L);var D=v.uniforms;for(b=0;b<L;++b)if(y=t.getActiveUniform(z,b),y)if(y.size>1)for(var O=0;O<y.size;++O){var G=y.name.replace("[0]","["+O+"]");c(D,new s(G,r.id(G),t.getUniformLocation(z,G),y))}else c(D,new s(y.name,r.id(y.name),t.getUniformLocation(z,y.name),y));var C=t.getProgramParameter(z,$5);o.profile&&(v.stats.attributesCount=C);var R=v.attributes;for(b=0;b<C;++b)y=t.getActiveAttrib(z,b),y&&c(R,new s(y.name,r.id(y.name),t.getAttribLocation(z,y.name),y))}o.profile&&(n.getMaxUniformsCount=function(){var v=0;return m.forEach(function(g){g.stats.uniformsCount>v&&(v=g.stats.uniformsCount)}),v},n.getMaxAttributesCount=function(){var v=0;return m.forEach(function(g){g.stats.attributesCount>v&&(v=g.stats.attributesCount)}),v});function d(){a={},i={};for(var v=0;v<m.length;++v)p(m[v],null,m[v].attributes.map(function(g){return[g.location,g.name]}))}return{clear:function(){var v=t.deleteShader.bind(t);z1(a).forEach(v),a={},z1(i).forEach(v),i={},m.forEach(function(g){t.deleteProgram(g.program)}),m.length=0,l={},n.shaderCount=0},program:function(v,g,x,b){c0.command(v>=0,"missing vertex shader",x),c0.command(g>=0,"missing fragment shader",x);var y=l[g];y||(y=l[g]={});var E=y[v];if(E&&(E.refCount++,!b))return E;var _=new u(g,v);return n.shaderCount++,p(_,x,b),E||(y[v]=_),m.push(_),G5(_,{destroy:function(){if(_.refCount--,_.refCount<=0){t.deleteProgram(_.program);var z=m.indexOf(_);m.splice(z,1),n.shaderCount--}y[_.vertId].refCount<=0&&(t.deleteShader(i[_.vertId]),delete i[_.vertId],delete l[_.fragId][_.vertId]),Object.keys(l[_.fragId]).length||(t.deleteShader(a[_.fragId]),delete a[_.fragId],delete l[_.fragId])}})},restore:d,shader:f,frag:-1,vert:-1}}});var I1=J((FT,P1)=>{var mr=Ar(),H5=yn(),B5=6408,Gi=5121,U5=3333,l0=5126;P1.exports=function(t,r,n,o,a,i,s){function c(m){var h;r.next===null?(mr(a.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),h=Gi):(mr(r.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),h=r.next.colorAttachments[0].texture._texture.type,mr.optional(function(){i.oes_texture_float?(mr(h===Gi||h===l0,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),h===l0&&mr(s.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):mr(h===Gi,"Reading from a framebuffer is only allowed for the type 'uint8'")}));var u=0,p=0,d=o.framebufferWidth,v=o.framebufferHeight,g=null;H5(m)?g=m:m&&(mr.type(m,"object","invalid arguments to regl.read()"),u=m.x|0,p=m.y|0,mr(u>=0&&u<o.framebufferWidth,"invalid x offset for regl.read"),mr(p>=0&&p<o.framebufferHeight,"invalid y offset for regl.read"),d=(m.width||o.framebufferWidth-u)|0,v=(m.height||o.framebufferHeight-p)|0,g=m.data||null),g&&(h===Gi?mr(g instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):h===l0&&mr(g instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),mr(d>0&&d+u<=o.framebufferWidth,"invalid width for read pixels"),mr(v>0&&v+p<=o.framebufferHeight,"invalid height for read pixels"),n();var x=d*v*4;return g||(h===Gi?g=new Uint8Array(x):h===l0&&(g=g||new Float32Array(x))),mr.isTypedArray(g,"data buffer for regl.read() must be a typedarray"),mr(g.byteLength>=x,"data buffer for regl.read() too small"),t.pixelStorei(U5,4),t.readPixels(u,p,d,v,B5,h,g),g}function f(m){var h;return r.setFBO({framebuffer:m.framebuffer},function(){h=c(m)}),h}function l(m){return!m||!("framebuffer"in m)?c(m):f(m)}return l}});var D1=J((qT,O1)=>{var f0=Sn();function Fa(e){return Array.prototype.slice.call(e)}function Ga(e){return Fa(e).join("")}O1.exports=function(){var t=0,r=[],n=[];function o(h){for(var u=0;u<n.length;++u)if(n[u]===h)return r[u];var p="g"+t++;return r.push(p),n.push(h),p}function a(){var h=[];function u(){h.push.apply(h,Fa(arguments))}var p=[];function d(){var v="v"+t++;return p.push(v),arguments.length>0&&(h.push(v,"="),h.push.apply(h,Fa(arguments)),h.push(";")),v}return f0(u,{def:d,toString:function(){return Ga([p.length>0?"var "+p.join(",")+";":"",Ga(h)])}})}function i(){var h=a(),u=a(),p=h.toString,d=u.toString;function v(g,x){u(g,x,"=",h.def(g,x),";")}return f0(function(){h.apply(h,Fa(arguments))},{def:h.def,entry:h,exit:u,save:v,set:function(g,x,b){v(g,x),h(g,x,"=",b,";")},toString:function(){return p()+d()}})}function s(){var h=Ga(arguments),u=i(),p=i(),d=u.toString,v=p.toString;return f0(u,{then:function(){return u.apply(u,Fa(arguments)),this},else:function(){return p.apply(p,Fa(arguments)),this},toString:function(){var g=v();return g&&(g="else{"+g+"}"),Ga(["if(",h,"){",d(),"}",g])}})}var c=a(),f={};function l(h,u){var p=[];function d(){var y="a"+p.length;return p.push(y),y}u=u||0;for(var v=0;v<u;++v)d();var g=i(),x=g.toString,b=f[h]=f0(g,{arg:d,toString:function(){return Ga(["function(",p.join(),"){",x(),"}"])}});return b}function m(){var h=['"use strict";',c,"return {"];Object.keys(f).forEach(function(d){h.push('"',d,'":',f[d].toString(),",")}),h.push("}");var u=Ga(h).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),p=Function.apply(null,r.concat(u));return p.apply(null,n)}return{global:c,link:o,block:a,proc:l,scope:i,cond:s,compile:m}}});var mp=J(($T,vp)=>{var ie=Ar(),j5=Sn(),W5=D1(),jr=Bc(),V5=yn(),X5=La(),Ht=Jc(),Fi=Hc(),h0=js(),yl=Hs(),qa="xyzw".split(""),G1=5121,$a=1,bl=2,zl=0,Cl=1,Rl=2,Nl=3,A0=4,hp=5,up=6,F1="dither",q1="blend.enable",$1="blend.color",Pl="blend.equation",Il="blend.func",H1="depth.enable",B1="depth.func",U1="depth.range",j1="depth.mask",wl="colorMask",W1="cull.enable",V1="cull.face",_l="frontFace",El="lineWidth",X1="polygonOffset.enable",Ol="polygonOffset.offset",Y1="sample.alpha",K1="sample.enable",Dl="sample.coverage",Q1="stencil.enable",Z1="stencil.mask",Gl="stencil.func",Fl="stencil.opFront",Ki="stencil.opBack",J1="scissor.enable",M0="scissor.box",Cn="viewport",qi="profile",qo="framebuffer",$i="vert",Hi="frag",Oo="elements",Do="primitive",Go="count",u0="offset",d0="instances",Bi="vao",$l="Width",Hl="Height",Ha=qo+$l,Ba=qo+Hl,Y5=Cn+$l,K5=Cn+Hl,dp="drawingBuffer",ep=dp+$l,tp=dp+Hl,Q5=[Il,Pl,Gl,Fl,Ki,Dl,Cn,M0,Ol],Ua=34962,Ml=34963,Z5=35632,J5=35633,rp=3553,ew=34067,tw=2884,rw=3042,nw=3024,ow=2960,aw=2929,iw=3089,sw=32823,cw=32926,lw=32928,Al=5126,p0=35664,v0=35665,m0=35666,Tl=5124,g0=35667,x0=35668,y0=35669,Sl=35670,b0=35671,w0=35672,_0=35673,Ui=35674,ji=35675,Wi=35676,Vi=35678,Xi=35680,kl=4,Yi=1028,Fo=1029,pp=2304,ql=2305,fw=32775,hw=32776,uw=519,Zn=7680,np=0,op=1,ap=32774,dw=513,ip=36160,pw=36064,wn={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},sp=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],ja={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Jn={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},cp={frag:Z5,vert:J5},Ll={cw:pp,ccw:ql};function E0(e){return Array.isArray(e)||V5(e)||X5(e)}function lp(e){return e.sort(function(t,r){return t===Cn?-1:r===Cn?1:t<r?-1:1})}function jt(e,t,r,n){this.thisDep=e,this.contextDep=t,this.propDep=r,this.append=n}function eo(e){return e&&!(e.thisDep||e.contextDep||e.propDep)}function Ot(e){return new jt(!1,!1,!1,e)}function Sr(e,t){var r=e.type;if(r===zl){var n=e.data.length;return new jt(!0,n>=1,n>=2,t)}else if(r===A0){var o=e.data;return new jt(o.thisDep,o.contextDep,o.propDep,t)}else{if(r===hp)return new jt(!1,!1,!1,t);if(r===up){for(var a=!1,i=!1,s=!1,c=0;c<e.data.length;++c){var f=e.data[c];if(f.type===Cl)s=!0;else if(f.type===Rl)i=!0;else if(f.type===Nl)a=!0;else if(f.type===zl){a=!0;var l=f.data;l>=1&&(i=!0),l>=2&&(s=!0)}else f.type===A0&&(a=a||f.data.thisDep,i=i||f.data.contextDep,s=s||f.data.propDep)}return new jt(a,i,s,t)}else return new jt(r===Nl,r===Rl,r===Cl,t)}}var fp=new jt(!1,!1,!1,function(){});vp.exports=function(t,r,n,o,a,i,s,c,f,l,m,h,u,p,d){var v=l.Record,g={add:32774,subtract:32778,"reverse subtract":32779};n.ext_blend_minmax&&(g.min=fw,g.max=hw);var x=n.angle_instanced_arrays,b=n.webgl_draw_buffers,y=n.oes_vertex_array_object,E={dirty:!0,profile:d.profile},_={},z=[],S={},L={};function D(M){return M.replace(".","_")}function O(M,w,N){var H=D(M);z.push(M),_[H]=E[H]=!!N,S[H]=w}function G(M,w,N){var H=D(M);z.push(M),Array.isArray(N)?(E[H]=N.slice(),_[H]=N.slice()):E[H]=_[H]=N,L[H]=w}O(F1,nw),O(q1,rw),G($1,"blendColor",[0,0,0,0]),G(Pl,"blendEquationSeparate",[ap,ap]),G(Il,"blendFuncSeparate",[op,np,op,np]),O(H1,aw,!0),G(B1,"depthFunc",dw),G(U1,"depthRange",[0,1]),G(j1,"depthMask",!0),G(wl,wl,[!0,!0,!0,!0]),O(W1,tw),G(V1,"cullFace",Fo),G(_l,_l,ql),G(El,El,1),O(X1,sw),G(Ol,"polygonOffset",[0,0]),O(Y1,cw),O(K1,lw),G(Dl,"sampleCoverage",[1,!1]),O(Q1,ow),G(Z1,"stencilMask",-1),G(Gl,"stencilFunc",[uw,0,-1]),G(Fl,"stencilOpSeparate",[Yi,Zn,Zn,Zn]),G(Ki,"stencilOpSeparate",[Fo,Zn,Zn,Zn]),O(J1,iw),G(M0,"scissor",[0,0,t.drawingBufferWidth,t.drawingBufferHeight]),G(Cn,Cn,[0,0,t.drawingBufferWidth,t.drawingBufferHeight]);var C={gl:t,context:u,strings:r,next:_,current:E,draw:h,elements:i,buffer:a,shader:m,attributes:l.state,vao:l,uniforms:f,framebuffer:c,extensions:n,timer:p,isBufferArgs:E0},R={primTypes:h0,compareFuncs:ja,blendFuncs:wn,blendEquations:g,stencilOps:Jn,glTypes:yl,orientationType:Ll};ie.optional(function(){C.isArrayLike=Ht}),b&&(R.backBuffer=[Fo],R.drawBuffer=jr(o.maxDrawbuffers,function(M){return M===0?[0]:jr(M,function(w){return pw+w})}));var K=0;function Y(){var M=W5(),w=M.link,N=M.global;M.id=K++,M.batchId="0";var H=w(C),U=M.shared={props:"a0"};Object.keys(C).forEach(function(P){U[P]=N.def(H,".",P)}),ie.optional(function(){M.CHECK=w(ie),M.commandStr=ie.guessCommand(),M.command=w(M.commandStr),M.assert=function(P,k,j){P("if(!(",k,"))",this.CHECK,".commandRaise(",w(j),",",this.command,");")},R.invalidBlendCombinations=sp});var F=M.next={},I=M.current={};Object.keys(L).forEach(function(P){Array.isArray(E[P])&&(F[P]=N.def(U.next,".",P),I[P]=N.def(U.current,".",P))});var B=M.constants={};Object.keys(R).forEach(function(P){B[P]=N.def(JSON.stringify(R[P]))}),M.invoke=function(P,k){switch(k.type){case zl:var j=["this",U.context,U.props,M.batchId];return P.def(w(k.data),".call(",j.slice(0,Math.max(k.data.length+1,4)),")");case Cl:return P.def(U.props,k.data);case Rl:return P.def(U.context,k.data);case Nl:return P.def("this",k.data);case A0:return k.data.append(M,P),k.data.ref;case hp:return k.data.toString();case up:return k.data.map(function(X){return M.invoke(P,X)})}},M.attribCache={};var A={};return M.scopeAttrib=function(P){var k=r.id(P);if(k in A)return A[k];var j=l.scope[k];j||(j=l.scope[k]=new v);var X=A[k]=w(j);return X},M}function ee(M){var w=M.static,N=M.dynamic,H;if(qi in w){var U=!!w[qi];H=Ot(function(I,B){return U}),H.enable=U}else if(qi in N){var F=N[qi];H=Sr(F,function(I,B){return I.invoke(B,F)})}return H}function V(M,w){var N=M.static,H=M.dynamic;if(qo in N){var U=N[qo];return U?(U=c.getFramebuffer(U),ie.command(U,"invalid framebuffer object"),Ot(function(I,B){var A=I.link(U),P=I.shared;B.set(P.framebuffer,".next",A);var k=P.context;return B.set(k,"."+Ha,A+".width"),B.set(k,"."+Ba,A+".height"),A})):Ot(function(I,B){var A=I.shared;B.set(A.framebuffer,".next","null");var P=A.context;return B.set(P,"."+Ha,P+"."+ep),B.set(P,"."+Ba,P+"."+tp),"null"})}else if(qo in H){var F=H[qo];return Sr(F,function(I,B){var A=I.invoke(B,F),P=I.shared,k=P.framebuffer,j=B.def(k,".getFramebuffer(",A,")");ie.optional(function(){I.assert(B,"!"+A+"||"+j,"invalid framebuffer object")}),B.set(k,".next",j);var X=P.context;return B.set(X,"."+Ha,j+"?"+j+".width:"+X+"."+ep),B.set(X,"."+Ba,j+"?"+j+".height:"+X+"."+tp),j})}else return null}function he(M,w,N){var H=M.static,U=M.dynamic;function F(A){if(A in H){var P=H[A];ie.commandType(P,"object","invalid "+A,N.commandStr);var k=!0,j=P.x|0,X=P.y|0,re,ce;return"width"in P?(re=P.width|0,ie.command(re>=0,"invalid "+A,N.commandStr)):k=!1,"height"in P?(ce=P.height|0,ie.command(ce>=0,"invalid "+A,N.commandStr)):k=!1,new jt(!k&&w&&w.thisDep,!k&&w&&w.contextDep,!k&&w&&w.propDep,function(de,Le){var _e=de.shared.context,Te=re;"width"in P||(Te=Le.def(_e,".",Ha,"-",j));var ke=ce;return"height"in P||(ke=Le.def(_e,".",Ba,"-",X)),[j,X,Te,ke]})}else if(A in U){var ne=U[A],ye=Sr(ne,function(de,Le){var _e=de.invoke(Le,ne);ie.optional(function(){de.assert(Le,_e+"&&typeof "+_e+'==="object"',"invalid "+A)});var Te=de.shared.context,ke=Le.def(_e,".x|0"),ze=Le.def(_e,".y|0"),W=Le.def('"width" in ',_e,"?",_e,".width|0:","(",Te,".",Ha,"-",ke,")"),te=Le.def('"height" in ',_e,"?",_e,".height|0:","(",Te,".",Ba,"-",ze,")");return ie.optional(function(){de.assert(Le,W+">=0&&"+te+">=0","invalid "+A)}),[ke,ze,W,te]});return w&&(ye.thisDep=ye.thisDep||w.thisDep,ye.contextDep=ye.contextDep||w.contextDep,ye.propDep=ye.propDep||w.propDep),ye}else return w?new jt(w.thisDep,w.contextDep,w.propDep,function(de,Le){var _e=de.shared.context;return[0,0,Le.def(_e,".",Ha),Le.def(_e,".",Ba)]}):null}var I=F(Cn);if(I){var B=I;I=new jt(I.thisDep,I.contextDep,I.propDep,function(A,P){var k=B.append(A,P),j=A.shared.context;return P.set(j,"."+Y5,k[2]),P.set(j,"."+K5,k[3]),k})}return{viewport:I,scissor_box:F(M0)}}function ve(M,w){var N=M.static,H=typeof N[Hi]=="string"&&typeof N[$i]=="string";if(H){if(Object.keys(w.dynamic).length>0)return null;var U=w.static,F=Object.keys(U);if(F.length>0&&typeof U[F[0]]=="number"){for(var I=[],B=0;B<F.length;++B)ie(typeof U[F[B]]=="number","must specify all vertex attribute locations when using vaos"),I.push([U[F[B]]|0,F[B]]);return I}}return null}function we(M,w,N){var H=M.static,U=M.dynamic;function F(k){if(k in H){var j=r.id(H[k]);ie.optional(function(){m.shader(cp[k],j,ie.guessCommand())});var X=Ot(function(){return j});return X.id=j,X}else if(k in U){var re=U[k];return Sr(re,function(ce,ne){var ye=ce.invoke(ne,re),de=ne.def(ce.shared.strings,".id(",ye,")");return ie.optional(function(){ne(ce.shared.shader,".shader(",cp[k],",",de,",",ce.command,");")}),de})}return null}var I=F(Hi),B=F($i),A=null,P;return eo(I)&&eo(B)?(A=m.program(B.id,I.id,null,N),P=Ot(function(k,j){return k.link(A)})):P=new jt(I&&I.thisDep||B&&B.thisDep,I&&I.contextDep||B&&B.contextDep,I&&I.propDep||B&&B.propDep,function(k,j){var X=k.shared.shader,re;I?re=I.append(k,j):re=j.def(X,".",Hi);var ce;B?ce=B.append(k,j):ce=j.def(X,".",$i);var ne=X+".program("+ce+","+re;return ie.optional(function(){ne+=","+k.command}),j.def(ne+")")}),{frag:I,vert:B,progVar:P,program:A}}function oe(M,w){var N=M.static,H=M.dynamic,U={},F=!1;function I(){if(Bi in N){var Le=N[Bi];return Le!==null&&l.getVAO(Le)===null&&(Le=l.createVAO(Le)),F=!0,U.vao=Le,Ot(function(Te){var ke=l.getVAO(Le);return ke?Te.link(ke):"null"})}else if(Bi in H){F=!0;var _e=H[Bi];return Sr(_e,function(Te,ke){var ze=Te.invoke(ke,_e);return ke.def(Te.shared.vao+".getVAO("+ze+")")})}return null}var B=I(),A=!1;function P(){if(Oo in N){var Le=N[Oo];if(U.elements=Le,E0(Le)){var _e=U.elements=i.create(Le,!0);Le=i.getElements(_e),A=!0}else Le&&(Le=i.getElements(Le),A=!0,ie.command(Le,"invalid elements",w.commandStr));var Te=Ot(function(ze,W){if(Le){var te=ze.link(Le);return ze.ELEMENTS=te,te}return ze.ELEMENTS=null,null});return Te.value=Le,Te}else if(Oo in H){A=!0;var ke=H[Oo];return Sr(ke,function(ze,W){var te=ze.shared,Ee=te.isBufferArgs,He=te.elements,Qe=ze.invoke(W,ke),et=W.def("null"),bt=W.def(Ee,"(",Qe,")"),mt=ze.cond(bt).then(et,"=",He,".createStream(",Qe,");").else(et,"=",He,".getElements(",Qe,");");return ie.optional(function(){ze.assert(mt.else,"!"+Qe+"||"+et,"invalid elements")}),W.entry(mt),W.exit(ze.cond(bt).then(He,".destroyStream(",et,");")),ze.ELEMENTS=et,et})}else if(F)return new jt(B.thisDep,B.contextDep,B.propDep,function(ze,W){return W.def(ze.shared.vao+".currentVAO?"+ze.shared.elements+".getElements("+ze.shared.vao+".currentVAO.elements):null")});return null}var k=P();function j(){if(Do in N){var Le=N[Do];return U.primitive=Le,ie.commandParameter(Le,h0,"invalid primitve",w.commandStr),Ot(function(Te,ke){return h0[Le]})}else if(Do in H){var _e=H[Do];return Sr(_e,function(Te,ke){var ze=Te.constants.primTypes,W=Te.invoke(ke,_e);return ie.optional(function(){Te.assert(ke,W+" in "+ze,"invalid primitive, must be one of "+Object.keys(h0))}),ke.def(ze,"[",W,"]")})}else{if(A)return eo(k)?k.value?Ot(function(Te,ke){return ke.def(Te.ELEMENTS,".primType")}):Ot(function(){return kl}):new jt(k.thisDep,k.contextDep,k.propDep,function(Te,ke){var ze=Te.ELEMENTS;return ke.def(ze,"?",ze,".primType:",kl)});if(F)return new jt(B.thisDep,B.contextDep,B.propDep,function(Te,ke){return ke.def(Te.shared.vao+".currentVAO?"+Te.shared.vao+".currentVAO.primitive:"+kl)})}return null}function X(Le,_e){if(Le in N){var Te=N[Le]|0;return _e?U.offset=Te:U.instances=Te,ie.command(!_e||Te>=0,"invalid "+Le,w.commandStr),Ot(function(ze,W){return _e&&(ze.OFFSET=Te),Te})}else if(Le in H){var ke=H[Le];return Sr(ke,function(ze,W){var te=ze.invoke(W,ke);return _e&&(ze.OFFSET=te,ie.optional(function(){ze.assert(W,te+">=0","invalid "+Le)})),te})}else if(_e){if(A)return Ot(function(ze,W){return ze.OFFSET=0,0});if(F)return new jt(B.thisDep,B.contextDep,B.propDep,function(ze,W){return W.def(ze.shared.vao+".currentVAO?"+ze.shared.vao+".currentVAO.offset:0")})}else if(F)return new jt(B.thisDep,B.contextDep,B.propDep,function(ze,W){return W.def(ze.shared.vao+".currentVAO?"+ze.shared.vao+".currentVAO.instances:-1")});return null}var re=X(u0,!0);function ce(){if(Go in N){var Le=N[Go]|0;return U.count=Le,ie.command(typeof Le=="number"&&Le>=0,"invalid vertex count",w.commandStr),Ot(function(){return Le})}else if(Go in H){var _e=H[Go];return Sr(_e,function(W,te){var Ee=W.invoke(te,_e);return ie.optional(function(){W.assert(te,"typeof "+Ee+'==="number"&&'+Ee+">=0&&"+Ee+"===("+Ee+"|0)","invalid vertex count")}),Ee})}else if(A)if(eo(k)){if(k)return re?new jt(re.thisDep,re.contextDep,re.propDep,function(W,te){var Ee=te.def(W.ELEMENTS,".vertCount-",W.OFFSET);return ie.optional(function(){W.assert(te,Ee+">=0","invalid vertex offset/element buffer too small")}),Ee}):Ot(function(W,te){return te.def(W.ELEMENTS,".vertCount")});var Te=Ot(function(){return-1});return ie.optional(function(){Te.MISSING=!0}),Te}else{var ke=new jt(k.thisDep||re.thisDep,k.contextDep||re.contextDep,k.propDep||re.propDep,function(W,te){var Ee=W.ELEMENTS;return W.OFFSET?te.def(Ee,"?",Ee,".vertCount-",W.OFFSET,":-1"):te.def(Ee,"?",Ee,".vertCount:-1")});return ie.optional(function(){ke.DYNAMIC=!0}),ke}else if(F){var ze=new jt(B.thisDep,B.contextDep,B.propDep,function(W,te){return te.def(W.shared.vao,".currentVAO?",W.shared.vao,".currentVAO.count:-1")});return ze}return null}var ne=j(),ye=ce(),de=X(d0,!1);return{elements:k,primitive:ne,count:ye,instances:de,offset:re,vao:B,vaoActive:F,elementsActive:A,static:U}}function De(M,w){var N=M.static,H=M.dynamic,U={};return z.forEach(function(F){var I=D(F);function B(A,P){if(F in N){var k=A(N[F]);U[I]=Ot(function(){return k})}else if(F in H){var j=H[F];U[I]=Sr(j,function(X,re){return P(X,re,X.invoke(re,j))})}}switch(F){case W1:case q1:case F1:case Q1:case H1:case J1:case X1:case Y1:case K1:case j1:return B(function(A){return ie.commandType(A,"boolean",F,w.commandStr),A},function(A,P,k){return ie.optional(function(){A.assert(P,"typeof "+k+'==="boolean"',"invalid flag "+F,A.commandStr)}),k});case B1:return B(function(A){return ie.commandParameter(A,ja,"invalid "+F,w.commandStr),ja[A]},function(A,P,k){var j=A.constants.compareFuncs;return ie.optional(function(){A.assert(P,k+" in "+j,"invalid "+F+", must be one of "+Object.keys(ja))}),P.def(j,"[",k,"]")});case U1:return B(function(A){return ie.command(Ht(A)&&A.length===2&&typeof A[0]=="number"&&typeof A[1]=="number"&&A[0]<=A[1],"depth range is 2d array",w.commandStr),A},function(A,P,k){ie.optional(function(){A.assert(P,A.shared.isArrayLike+"("+k+")&&"+k+".length===2&&typeof "+k+'[0]==="number"&&typeof '+k+'[1]==="number"&&'+k+"[0]<="+k+"[1]","depth range must be a 2d array")});var j=P.def("+",k,"[0]"),X=P.def("+",k,"[1]");return[j,X]});case Il:return B(function(A){ie.commandType(A,"object","blend.func",w.commandStr);var P="srcRGB"in A?A.srcRGB:A.src,k="srcAlpha"in A?A.srcAlpha:A.src,j="dstRGB"in A?A.dstRGB:A.dst,X="dstAlpha"in A?A.dstAlpha:A.dst;return ie.commandParameter(P,wn,I+".srcRGB",w.commandStr),ie.commandParameter(k,wn,I+".srcAlpha",w.commandStr),ie.commandParameter(j,wn,I+".dstRGB",w.commandStr),ie.commandParameter(X,wn,I+".dstAlpha",w.commandStr),ie.command(sp.indexOf(P+", "+j)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+P+", "+j+")",w.commandStr),[wn[P],wn[j],wn[k],wn[X]]},function(A,P,k){var j=A.constants.blendFuncs;ie.optional(function(){A.assert(P,k+"&&typeof "+k+'==="object"',"invalid blend func, must be an object")});function X(_e,Te){var ke=P.def('"',_e,Te,'" in ',k,"?",k,".",_e,Te,":",k,".",_e);return ie.optional(function(){A.assert(P,ke+" in "+j,"invalid "+F+"."+_e+Te+", must be one of "+Object.keys(wn))}),ke}var re=X("src","RGB"),ce=X("dst","RGB");ie.optional(function(){var _e=A.constants.invalidBlendCombinations;A.assert(P,_e+".indexOf("+re+'+", "+'+ce+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ne=P.def(j,"[",re,"]"),ye=P.def(j,"[",X("src","Alpha"),"]"),de=P.def(j,"[",ce,"]"),Le=P.def(j,"[",X("dst","Alpha"),"]");return[ne,de,ye,Le]});case Pl:return B(function(A){if(typeof A=="string")return ie.commandParameter(A,g,"invalid "+F,w.commandStr),[g[A],g[A]];if(typeof A=="object")return ie.commandParameter(A.rgb,g,F+".rgb",w.commandStr),ie.commandParameter(A.alpha,g,F+".alpha",w.commandStr),[g[A.rgb],g[A.alpha]];ie.commandRaise("invalid blend.equation",w.commandStr)},function(A,P,k){var j=A.constants.blendEquations,X=P.def(),re=P.def(),ce=A.cond("typeof ",k,'==="string"');return ie.optional(function(){function ne(ye,de,Le){A.assert(ye,Le+" in "+j,"invalid "+de+", must be one of "+Object.keys(g))}ne(ce.then,F,k),A.assert(ce.else,k+"&&typeof "+k+'==="object"',"invalid "+F),ne(ce.else,F+".rgb",k+".rgb"),ne(ce.else,F+".alpha",k+".alpha")}),ce.then(X,"=",re,"=",j,"[",k,"];"),ce.else(X,"=",j,"[",k,".rgb];",re,"=",j,"[",k,".alpha];"),P(ce),[X,re]});case $1:return B(function(A){return ie.command(Ht(A)&&A.length===4,"blend.color must be a 4d array",w.commandStr),jr(4,function(P){return+A[P]})},function(A,P,k){return ie.optional(function(){A.assert(P,A.shared.isArrayLike+"("+k+")&&"+k+".length===4","blend.color must be a 4d array")}),jr(4,function(j){return P.def("+",k,"[",j,"]")})});case Z1:return B(function(A){return ie.commandType(A,"number",I,w.commandStr),A|0},function(A,P,k){return ie.optional(function(){A.assert(P,"typeof "+k+'==="number"',"invalid stencil.mask")}),P.def(k,"|0")});case Gl:return B(function(A){ie.commandType(A,"object",I,w.commandStr);var P=A.cmp||"keep",k=A.ref||0,j="mask"in A?A.mask:-1;return ie.commandParameter(P,ja,F+".cmp",w.commandStr),ie.commandType(k,"number",F+".ref",w.commandStr),ie.commandType(j,"number",F+".mask",w.commandStr),[ja[P],k,j]},function(A,P,k){var j=A.constants.compareFuncs;ie.optional(function(){function ne(){A.assert(P,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ne(k+"&&typeof ",k,'==="object"'),ne('!("cmp" in ',k,")||(",k,".cmp in ",j,")")});var X=P.def('"cmp" in ',k,"?",j,"[",k,".cmp]",":",Zn),re=P.def(k,".ref|0"),ce=P.def('"mask" in ',k,"?",k,".mask|0:-1");return[X,re,ce]});case Fl:case Ki:return B(function(A){ie.commandType(A,"object",I,w.commandStr);var P=A.fail||"keep",k=A.zfail||"keep",j=A.zpass||"keep";return ie.commandParameter(P,Jn,F+".fail",w.commandStr),ie.commandParameter(k,Jn,F+".zfail",w.commandStr),ie.commandParameter(j,Jn,F+".zpass",w.commandStr),[F===Ki?Fo:Yi,Jn[P],Jn[k],Jn[j]]},function(A,P,k){var j=A.constants.stencilOps;ie.optional(function(){A.assert(P,k+"&&typeof "+k+'==="object"',"invalid "+F)});function X(re){return ie.optional(function(){A.assert(P,'!("'+re+'" in '+k+")||("+k+"."+re+" in "+j+")","invalid "+F+"."+re+", must be one of "+Object.keys(Jn))}),P.def('"',re,'" in ',k,"?",j,"[",k,".",re,"]:",Zn)}return[F===Ki?Fo:Yi,X("fail"),X("zfail"),X("zpass")]});case Ol:return B(function(A){ie.commandType(A,"object",I,w.commandStr);var P=A.factor|0,k=A.units|0;return ie.commandType(P,"number",I+".factor",w.commandStr),ie.commandType(k,"number",I+".units",w.commandStr),[P,k]},function(A,P,k){ie.optional(function(){A.assert(P,k+"&&typeof "+k+'==="object"',"invalid "+F)});var j=P.def(k,".factor|0"),X=P.def(k,".units|0");return[j,X]});case V1:return B(function(A){var P=0;return A==="front"?P=Yi:A==="back"&&(P=Fo),ie.command(!!P,I,w.commandStr),P},function(A,P,k){return ie.optional(function(){A.assert(P,k+'==="front"||'+k+'==="back"',"invalid cull.face")}),P.def(k,'==="front"?',Yi,":",Fo)});case El:return B(function(A){return ie.command(typeof A=="number"&&A>=o.lineWidthDims[0]&&A<=o.lineWidthDims[1],"invalid line width, must be a positive number between "+o.lineWidthDims[0]+" and "+o.lineWidthDims[1],w.commandStr),A},function(A,P,k){return ie.optional(function(){A.assert(P,"typeof "+k+'==="number"&&'+k+">="+o.lineWidthDims[0]+"&&"+k+"<="+o.lineWidthDims[1],"invalid line width")}),k});case _l:return B(function(A){return ie.commandParameter(A,Ll,I,w.commandStr),Ll[A]},function(A,P,k){return ie.optional(function(){A.assert(P,k+'==="cw"||'+k+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),P.def(k+'==="cw"?'+pp+":"+ql)});case wl:return B(function(A){return ie.command(Ht(A)&&A.length===4,"color.mask must be length 4 array",w.commandStr),A.map(function(P){return!!P})},function(A,P,k){return ie.optional(function(){A.assert(P,A.shared.isArrayLike+"("+k+")&&"+k+".length===4","invalid color.mask")}),jr(4,function(j){return"!!"+k+"["+j+"]"})});case Dl:return B(function(A){ie.command(typeof A=="object"&&A,I,w.commandStr);var P="value"in A?A.value:1,k=!!A.invert;return ie.command(typeof P=="number"&&P>=0&&P<=1,"sample.coverage.value must be a number between 0 and 1",w.commandStr),[P,k]},function(A,P,k){ie.optional(function(){A.assert(P,k+"&&typeof "+k+'==="object"',"invalid sample.coverage")});var j=P.def('"value" in ',k,"?+",k,".value:1"),X=P.def("!!",k,".invert");return[j,X]})}}),U}function be(M,w){var N=M.static,H=M.dynamic,U={};return Object.keys(N).forEach(function(F){var I=N[F],B;if(typeof I=="number"||typeof I=="boolean")B=Ot(function(){return I});else if(typeof I=="function"){var A=I._reglType;A==="texture2d"||A==="textureCube"?B=Ot(function(P){return P.link(I)}):A==="framebuffer"||A==="framebufferCube"?(ie.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',w.commandStr),B=Ot(function(P){return P.link(I.color[0])})):ie.commandRaise('invalid data for uniform "'+F+'"',w.commandStr)}else Ht(I)?B=Ot(function(P){var k=P.global.def("[",jr(I.length,function(j){return ie.command(typeof I[j]=="number"||typeof I[j]=="boolean","invalid uniform "+F,P.commandStr),I[j]}),"]");return k}):ie.commandRaise('invalid or missing data for uniform "'+F+'"',w.commandStr);B.value=I,U[F]=B}),Object.keys(H).forEach(function(F){var I=H[F];U[F]=Sr(I,function(B,A){return B.invoke(A,I)})}),U}function qe(M,w){var N=M.static,H=M.dynamic,U={};return Object.keys(N).forEach(function(F){var I=N[F],B=r.id(F),A=new v;if(E0(I))A.state=$a,A.buffer=a.getBuffer(a.create(I,Ua,!1,!0)),A.type=0;else{var P=a.getBuffer(I);if(P)A.state=$a,A.buffer=P,A.type=0;else if(ie.command(typeof I=="object"&&I,"invalid data for attribute "+F,w.commandStr),"constant"in I){var k=I.constant;A.buffer="null",A.state=bl,typeof k=="number"?A.x=k:(ie.command(Ht(k)&&k.length>0&&k.length<=4,"invalid constant for attribute "+F,w.commandStr),qa.forEach(function(de,Le){Le<k.length&&(A[de]=k[Le])}))}else{E0(I.buffer)?P=a.getBuffer(a.create(I.buffer,Ua,!1,!0)):P=a.getBuffer(I.buffer),ie.command(!!P,'missing buffer for attribute "'+F+'"',w.commandStr);var j=I.offset|0;ie.command(j>=0,'invalid offset for attribute "'+F+'"',w.commandStr);var X=I.stride|0;ie.command(X>=0&&X<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',w.commandStr);var re=I.size|0;ie.command(!("size"in I)||re>0&&re<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',w.commandStr);var ce=!!I.normalized,ne=0;"type"in I&&(ie.commandParameter(I.type,yl,"invalid type for attribute "+F,w.commandStr),ne=yl[I.type]);var ye=I.divisor|0;ie.optional(function(){"divisor"in I&&(ie.command(ye===0||x,'cannot specify divisor for attribute "'+F+'", instancing not supported',w.commandStr),ie.command(ye>=0,'invalid divisor for attribute "'+F+'"',w.commandStr));var de=w.commandStr,Le=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(_e){ie.command(Le.indexOf(_e)>=0,'unknown parameter "'+_e+'" for attribute pointer "'+F+'" (valid parameters are '+Le+")",de)})}),A.buffer=P,A.state=$a,A.size=re,A.normalized=ce,A.type=ne||P.dtype,A.offset=j,A.stride=X,A.divisor=ye}}U[F]=Ot(function(de,Le){var _e=de.attribCache;if(B in _e)return _e[B];var Te={isStream:!1};return Object.keys(A).forEach(function(ke){Te[ke]=A[ke]}),A.buffer&&(Te.buffer=de.link(A.buffer),Te.type=Te.type||Te.buffer+".dtype"),_e[B]=Te,Te})}),Object.keys(H).forEach(function(F){var I=H[F];function B(A,P){var k=A.invoke(P,I),j=A.shared,X=A.constants,re=j.isBufferArgs,ce=j.buffer;ie.optional(function(){A.assert(P,k+"&&(typeof "+k+'==="object"||typeof '+k+'==="function")&&('+re+"("+k+")||"+ce+".getBuffer("+k+")||"+ce+".getBuffer("+k+".buffer)||"+re+"("+k+'.buffer)||("constant" in '+k+"&&(typeof "+k+'.constant==="number"||'+j.isArrayLike+"("+k+".constant))))",'invalid dynamic attribute "'+F+'"')});var ne={isStream:P.def(!1)},ye=new v;ye.state=$a,Object.keys(ye).forEach(function(Te){ne[Te]=P.def(""+ye[Te])});var de=ne.buffer,Le=ne.type;P("if(",re,"(",k,")){",ne.isStream,"=true;",de,"=",ce,".createStream(",Ua,",",k,");",Le,"=",de,".dtype;","}else{",de,"=",ce,".getBuffer(",k,");","if(",de,"){",Le,"=",de,".dtype;",'}else if("constant" in ',k,"){",ne.state,"=",bl,";","if(typeof "+k+'.constant === "number"){',ne[qa[0]],"=",k,".constant;",qa.slice(1).map(function(Te){return ne[Te]}).join("="),"=0;","}else{",qa.map(function(Te,ke){return ne[Te]+"="+k+".constant.length>"+ke+"?"+k+".constant["+ke+"]:0;"}).join(""),"}}else{","if(",re,"(",k,".buffer)){",de,"=",ce,".createStream(",Ua,",",k,".buffer);","}else{",de,"=",ce,".getBuffer(",k,".buffer);","}",Le,'="type" in ',k,"?",X.glTypes,"[",k,".type]:",de,".dtype;",ne.normalized,"=!!",k,".normalized;");function _e(Te){P(ne[Te],"=",k,".",Te,"|0;")}return _e("size"),_e("offset"),_e("stride"),_e("divisor"),P("}}"),P.exit("if(",ne.isStream,"){",ce,".destroyStream(",de,");","}"),ne}U[F]=Sr(I,B)}),U}function Fe(M){var w=M.static,N=M.dynamic,H={};return Object.keys(w).forEach(function(U){var F=w[U];H[U]=Ot(function(I,B){return typeof F=="number"||typeof F=="boolean"?""+F:I.link(F)})}),Object.keys(N).forEach(function(U){var F=N[U];H[U]=Sr(F,function(I,B){return I.invoke(B,F)})}),H}function $e(M,w,N,H,U){var F=M.static,I=M.dynamic;ie.optional(function(){var _e=[qo,$i,Hi,Oo,Do,u0,Go,d0,qi,Bi].concat(z);function Te(ke){Object.keys(ke).forEach(function(ze){ie.command(_e.indexOf(ze)>=0,'unknown parameter "'+ze+'"',U.commandStr)})}Te(F),Te(I)});var B=ve(M,w),A=V(M,U),P=he(M,A,U),k=oe(M,U),j=De(M,U),X=we(M,U,B);function re(_e){var Te=P[_e];Te&&(j[_e]=Te)}re(Cn),re(D(M0));var ce=Object.keys(j).length>0,ne={framebuffer:A,draw:k,shader:X,state:j,dirty:ce,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ne.profile=ee(M,U),ne.uniforms=be(N,U),ne.drawVAO=ne.scopeVAO=k.vao,!ne.drawVAO&&X.program&&!B&&n.angle_instanced_arrays&&k.static.elements){var ye=!0,de=X.program.attributes.map(function(_e){var Te=w.static[_e];return ye=ye&&!!Te,Te});if(ye&&de.length>0){var Le=l.getVAO(l.createVAO({attributes:de,elements:k.static.elements}));ne.drawVAO=new jt(null,null,null,function(_e,Te){return _e.link(Le)}),ne.useVAO=!0}}return B?ne.useVAO=!0:ne.attributes=qe(w,U),ne.context=Fe(H,U),ne}function le(M,w,N){var H=M.shared,U=H.context,F=M.scope();Object.keys(N).forEach(function(I){w.save(U,"."+I);var B=N[I],A=B.append(M,w);Array.isArray(A)?F(U,".",I,"=[",A.join(),"];"):F(U,".",I,"=",A,";")}),w(F)}function Se(M,w,N,H){var U=M.shared,F=U.gl,I=U.framebuffer,B;b&&(B=w.def(U.extensions,".webgl_draw_buffers"));var A=M.constants,P=A.drawBuffer,k=A.backBuffer,j;N?j=N.append(M,w):j=w.def(I,".next"),H||w("if(",j,"!==",I,".cur){"),w("if(",j,"){",F,".bindFramebuffer(",ip,",",j,".framebuffer);"),b&&w(B,".drawBuffersWEBGL(",P,"[",j,".colorAttachments.length]);"),w("}else{",F,".bindFramebuffer(",ip,",null);"),b&&w(B,".drawBuffersWEBGL(",k,");"),w("}",I,".cur=",j,";"),H||w("}")}function Re(M,w,N){var H=M.shared,U=H.gl,F=M.current,I=M.next,B=H.current,A=H.next,P=M.cond(B,".dirty");z.forEach(function(k){var j=D(k);if(!(j in N.state)){var X,re;if(j in I){X=I[j],re=F[j];var ce=jr(E[j].length,function(ye){return P.def(X,"[",ye,"]")});P(M.cond(ce.map(function(ye,de){return ye+"!=="+re+"["+de+"]"}).join("||")).then(U,".",L[j],"(",ce,");",ce.map(function(ye,de){return re+"["+de+"]="+ye}).join(";"),";"))}else{X=P.def(A,".",j);var ne=M.cond(X,"!==",B,".",j);P(ne),j in S?ne(M.cond(X).then(U,".enable(",S[j],");").else(U,".disable(",S[j],");"),B,".",j,"=",X,";"):ne(U,".",L[j],"(",X,");",B,".",j,"=",X,";")}}}),Object.keys(N.state).length===0&&P(B,".dirty=false;"),w(P)}function We(M,w,N,H){var U=M.shared,F=M.current,I=U.current,B=U.gl;lp(Object.keys(N)).forEach(function(A){var P=N[A];if(!(H&&!H(P))){var k=P.append(M,w);if(S[A]){var j=S[A];eo(P)?k?w(B,".enable(",j,");"):w(B,".disable(",j,");"):w(M.cond(k).then(B,".enable(",j,");").else(B,".disable(",j,");")),w(I,".",A,"=",k,";")}else if(Ht(k)){var X=F[A];w(B,".",L[A],"(",k,");",k.map(function(re,ce){return X+"["+ce+"]="+re}).join(";"),";")}else w(B,".",L[A],"(",k,");",I,".",A,"=",k,";")}})}function Ge(M,w){x&&(M.instancing=w.def(M.shared.extensions,".angle_instanced_arrays"))}function Ne(M,w,N,H,U){var F=M.shared,I=M.stats,B=F.current,A=F.timer,P=N.profile;function k(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var j,X;function re(_e){j=w.def(),_e(j,"=",k(),";"),typeof U=="string"?_e(I,".count+=",U,";"):_e(I,".count++;"),p&&(H?(X=w.def(),_e(X,"=",A,".getNumPendingQueries();")):_e(A,".beginQuery(",I,");"))}function ce(_e){_e(I,".cpuTime+=",k(),"-",j,";"),p&&(H?_e(A,".pushScopeStats(",X,",",A,".getNumPendingQueries(),",I,");"):_e(A,".endQuery();"))}function ne(_e){var Te=w.def(B,".profile");w(B,".profile=",_e,";"),w.exit(B,".profile=",Te,";")}var ye;if(P){if(eo(P)){P.enable?(re(w),ce(w.exit),ne("true")):ne("false");return}ye=P.append(M,w),ne(ye)}else ye=w.def(B,".profile");var de=M.block();re(de),w("if(",ye,"){",de,"}");var Le=M.block();ce(Le),w.exit("if(",ye,"){",Le,"}")}function Z(M,w,N,H,U){var F=M.shared;function I(A){switch(A){case p0:case g0:case b0:return 2;case v0:case x0:case w0:return 3;case m0:case y0:case _0:return 4;default:return 1}}function B(A,P,k){var j=F.gl,X=w.def(A,".location"),re=w.def(F.attributes,"[",X,"]"),ce=k.state,ne=k.buffer,ye=[k.x,k.y,k.z,k.w],de=["buffer","normalized","offset","stride"];function Le(){w("if(!",re,".buffer){",j,".enableVertexAttribArray(",X,");}");var Te=k.type,ke;if(k.size?ke=w.def(k.size,"||",P):ke=P,w("if(",re,".type!==",Te,"||",re,".size!==",ke,"||",de.map(function(W){return re+"."+W+"!=="+k[W]}).join("||"),"){",j,".bindBuffer(",Ua,",",ne,".buffer);",j,".vertexAttribPointer(",[X,ke,Te,k.normalized,k.stride,k.offset],");",re,".type=",Te,";",re,".size=",ke,";",de.map(function(W){return re+"."+W+"="+k[W]+";"}).join(""),"}"),x){var ze=k.divisor;w("if(",re,".divisor!==",ze,"){",M.instancing,".vertexAttribDivisorANGLE(",[X,ze],");",re,".divisor=",ze,";}")}}function _e(){w("if(",re,".buffer){",j,".disableVertexAttribArray(",X,");",re,".buffer=null;","}if(",qa.map(function(Te,ke){return re+"."+Te+"!=="+ye[ke]}).join("||"),"){",j,".vertexAttrib4f(",X,",",ye,");",qa.map(function(Te,ke){return re+"."+Te+"="+ye[ke]+";"}).join(""),"}")}ce===$a?Le():ce===bl?_e():(w("if(",ce,"===",$a,"){"),Le(),w("}else{"),_e(),w("}"))}H.forEach(function(A){var P=A.name,k=N.attributes[P],j;if(k){if(!U(k))return;j=k.append(M,w)}else{if(!U(fp))return;var X=M.scopeAttrib(P);ie.optional(function(){M.assert(w,X+".state","missing attribute "+P)}),j={},Object.keys(new v).forEach(function(re){j[re]=w.def(X,".",re)})}B(M.link(A),I(A.info.type),j)})}function pe(M,w,N,H,U,F){for(var I=M.shared,B=I.gl,A,P=0;P<H.length;++P){var k=H[P],j=k.name,X=k.info.type,re=N.uniforms[j],ce=M.link(k),ne=ce+".location",ye;if(re){if(!U(re))continue;if(eo(re)){var de=re.value;if(ie.command(de!==null&&typeof de!="undefined",'missing uniform "'+j+'"',M.commandStr),X===Vi||X===Xi){ie.command(typeof de=="function"&&(X===Vi&&(de._reglType==="texture2d"||de._reglType==="framebuffer")||X===Xi&&(de._reglType==="textureCube"||de._reglType==="framebufferCube")),"invalid texture for uniform "+j,M.commandStr);var Le=M.link(de._texture||de.color[0]._texture);w(B,".uniform1i(",ne,",",Le+".bind());"),w.exit(Le,".unbind();")}else if(X===Ui||X===ji||X===Wi){ie.optional(function(){ie.command(Ht(de),"invalid matrix for uniform "+j,M.commandStr),ie.command(X===Ui&&de.length===4||X===ji&&de.length===9||X===Wi&&de.length===16,"invalid length for matrix uniform "+j,M.commandStr)});var _e=M.global.def("new Float32Array(["+Array.prototype.slice.call(de)+"])"),Te=2;X===ji?Te=3:X===Wi&&(Te=4),w(B,".uniformMatrix",Te,"fv(",ne,",false,",_e,");")}else{switch(X){case Al:ie.commandType(de,"number","uniform "+j,M.commandStr),A="1f";break;case p0:ie.command(Ht(de)&&de.length===2,"uniform "+j,M.commandStr),A="2f";break;case v0:ie.command(Ht(de)&&de.length===3,"uniform "+j,M.commandStr),A="3f";break;case m0:ie.command(Ht(de)&&de.length===4,"uniform "+j,M.commandStr),A="4f";break;case Sl:ie.commandType(de,"boolean","uniform "+j,M.commandStr),A="1i";break;case Tl:ie.commandType(de,"number","uniform "+j,M.commandStr),A="1i";break;case b0:ie.command(Ht(de)&&de.length===2,"uniform "+j,M.commandStr),A="2i";break;case g0:ie.command(Ht(de)&&de.length===2,"uniform "+j,M.commandStr),A="2i";break;case w0:ie.command(Ht(de)&&de.length===3,"uniform "+j,M.commandStr),A="3i";break;case x0:ie.command(Ht(de)&&de.length===3,"uniform "+j,M.commandStr),A="3i";break;case _0:ie.command(Ht(de)&&de.length===4,"uniform "+j,M.commandStr),A="4i";break;case y0:ie.command(Ht(de)&&de.length===4,"uniform "+j,M.commandStr),A="4i";break}w(B,".uniform",A,"(",ne,",",Ht(de)?Array.prototype.slice.call(de):de,");")}continue}else ye=re.append(M,w)}else{if(!U(fp))continue;ye=w.def(I.uniforms,"[",r.id(j),"]")}X===Vi?(ie(!Array.isArray(ye),"must specify a scalar prop for textures"),w("if(",ye,"&&",ye,'._reglType==="framebuffer"){',ye,"=",ye,".color[0];","}")):X===Xi&&(ie(!Array.isArray(ye),"must specify a scalar prop for cube maps"),w("if(",ye,"&&",ye,'._reglType==="framebufferCube"){',ye,"=",ye,".color[0];","}")),ie.optional(function(){function bt(vt,zt){M.assert(w,vt,'bad data or missing for uniform "'+j+'".  '+zt)}function mt(vt){ie(!Array.isArray(ye),"must not specify an array type for uniform"),bt("typeof "+ye+'==="'+vt+'"',"invalid type, expected "+vt)}function xt(vt,zt){Array.isArray(ye)?ie(ye.length===vt,"must have length "+vt):bt(I.isArrayLike+"("+ye+")&&"+ye+".length==="+vt,"invalid vector, should have length "+vt,M.commandStr)}function Nr(vt){ie(!Array.isArray(ye),"must not specify a value type"),bt("typeof "+ye+'==="function"&&'+ye+'._reglType==="texture'+(vt===rp?"2d":"Cube")+'"',"invalid texture type",M.commandStr)}switch(X){case Tl:mt("number");break;case g0:xt(2,"number");break;case x0:xt(3,"number");break;case y0:xt(4,"number");break;case Al:mt("number");break;case p0:xt(2,"number");break;case v0:xt(3,"number");break;case m0:xt(4,"number");break;case Sl:mt("boolean");break;case b0:xt(2,"boolean");break;case w0:xt(3,"boolean");break;case _0:xt(4,"boolean");break;case Ui:xt(4,"number");break;case ji:xt(9,"number");break;case Wi:xt(16,"number");break;case Vi:Nr(rp);break;case Xi:Nr(ew);break}});var ke=1;switch(X){case Vi:case Xi:var ze=w.def(ye,"._texture");w(B,".uniform1i(",ne,",",ze,".bind());"),w.exit(ze,".unbind();");continue;case Tl:case Sl:A="1i";break;case g0:case b0:A="2i",ke=2;break;case x0:case w0:A="3i",ke=3;break;case y0:case _0:A="4i",ke=4;break;case Al:A="1f";break;case p0:A="2f",ke=2;break;case v0:A="3f",ke=3;break;case m0:A="4f",ke=4;break;case Ui:A="Matrix2fv";break;case ji:A="Matrix3fv";break;case Wi:A="Matrix4fv";break}if(A.charAt(0)==="M"){w(B,".uniform",A,"(",ne,",");var W=Math.pow(X-Ui+2,2),te=M.global.def("new Float32Array(",W,")");Array.isArray(ye)?w("false,(",jr(W,function(bt){return te+"["+bt+"]="+ye[bt]}),",",te,")"):w("false,(Array.isArray(",ye,")||",ye," instanceof Float32Array)?",ye,":(",jr(W,function(bt){return te+"["+bt+"]="+ye+"["+bt+"]"}),",",te,")"),w(");")}else if(ke>1){for(var Ee=[],He=[],Qe=0;Qe<ke;++Qe)Array.isArray(ye)?He.push(ye[Qe]):He.push(w.def(ye+"["+Qe+"]")),F&&Ee.push(w.def());F&&w("if(!",M.batchId,"||",Ee.map(function(bt,mt){return bt+"!=="+He[mt]}).join("||"),"){",Ee.map(function(bt,mt){return bt+"="+He[mt]+";"}).join("")),w(B,".uniform",A,"(",ne,",",He.join(","),");"),F&&w("}")}else{if(ie(!Array.isArray(ye),"uniform value must not be an array"),F){var et=w.def();w("if(!",M.batchId,"||",et,"!==",ye,"){",et,"=",ye,";")}w(B,".uniform",A,"(",ne,",",ye,");"),F&&w("}")}}}function ue(M,w,N,H){var U=M.shared,F=U.gl,I=U.draw,B=H.draw;function A(){var ke=B.elements,ze,W=w;return ke?((ke.contextDep&&H.contextDynamic||ke.propDep)&&(W=N),ze=ke.append(M,W),B.elementsActive&&W("if("+ze+")"+F+".bindBuffer("+Ml+","+ze+".buffer.buffer);")):(ze=W.def(),W(ze,"=",I,".",Oo,";","if(",ze,"){",F,".bindBuffer(",Ml,",",ze,".buffer.buffer);}","else if(",U.vao,".currentVAO){",ze,"=",M.shared.elements+".getElements("+U.vao,".currentVAO.elements);",y?"":"if("+ze+")"+F+".bindBuffer("+Ml+","+ze+".buffer.buffer);","}")),ze}function P(){var ke=B.count,ze,W=w;return ke?((ke.contextDep&&H.contextDynamic||ke.propDep)&&(W=N),ze=ke.append(M,W),ie.optional(function(){ke.MISSING&&M.assert(w,"false","missing vertex count"),ke.DYNAMIC&&M.assert(W,ze+">=0","missing vertex count")})):(ze=W.def(I,".",Go),ie.optional(function(){M.assert(W,ze+">=0","missing vertex count")})),ze}var k=A();function j(ke){var ze=B[ke];return ze?ze.contextDep&&H.contextDynamic||ze.propDep?ze.append(M,N):ze.append(M,w):w.def(I,".",ke)}var X=j(Do),re=j(u0),ce=P();if(typeof ce=="number"){if(ce===0)return}else N("if(",ce,"){"),N.exit("}");var ne,ye;x&&(ne=j(d0),ye=M.instancing);var de=k+".type",Le=B.elements&&eo(B.elements)&&!B.vaoActive;function _e(){function ke(){N(ye,".drawElementsInstancedANGLE(",[X,ce,de,re+"<<(("+de+"-"+G1+")>>1)",ne],");")}function ze(){N(ye,".drawArraysInstancedANGLE(",[X,re,ce,ne],");")}k&&k!=="null"?Le?ke():(N("if(",k,"){"),ke(),N("}else{"),ze(),N("}")):ze()}function Te(){function ke(){N(F+".drawElements("+[X,ce,de,re+"<<(("+de+"-"+G1+")>>1)"]+");")}function ze(){N(F+".drawArrays("+[X,re,ce]+");")}k&&k!=="null"?Le?ke():(N("if(",k,"){"),ke(),N("}else{"),ze(),N("}")):ze()}x&&(typeof ne!="number"||ne>=0)?typeof ne=="string"?(N("if(",ne,">0){"),_e(),N("}else if(",ne,"<0){"),Te(),N("}")):_e():Te()}function Me(M,w,N,H,U){var F=Y(),I=F.proc("body",U);return ie.optional(function(){F.commandStr=w.commandStr,F.command=F.link(w.commandStr)}),x&&(F.instancing=I.def(F.shared.extensions,".angle_instanced_arrays")),M(F,I,N,H),F.compile().body}function Pe(M,w,N,H){Ge(M,w),N.useVAO?N.drawVAO?w(M.shared.vao,".setVAO(",N.drawVAO.append(M,w),");"):w(M.shared.vao,".setVAO(",M.shared.vao,".targetVAO);"):(w(M.shared.vao,".setVAO(null);"),Z(M,w,N,H.attributes,function(){return!0})),pe(M,w,N,H.uniforms,function(){return!0},!1),ue(M,w,w,N)}function Ke(M,w){var N=M.proc("draw",1);Ge(M,N),le(M,N,w.context),Se(M,N,w.framebuffer),Re(M,N,w),We(M,N,w.state),Ne(M,N,w,!1,!0);var H=w.shader.progVar.append(M,N);if(N(M.shared.gl,".useProgram(",H,".program);"),w.shader.program)Pe(M,N,w,w.shader.program);else{N(M.shared.vao,".setVAO(null);");var U=M.global.def("{}"),F=N.def(H,".id"),I=N.def(U,"[",F,"]");N(M.cond(I).then(I,".call(this,a0);").else(I,"=",U,"[",F,"]=",M.link(function(B){return Me(Pe,M,w,B,1)}),"(",H,");",I,".call(this,a0);"))}Object.keys(w.state).length>0&&N(M.shared.current,".dirty=true;"),M.shared.vao&&N(M.shared.vao,".setVAO(null);")}function Ve(M,w,N,H){M.batchId="a1",Ge(M,w);function U(){return!0}Z(M,w,N,H.attributes,U),pe(M,w,N,H.uniforms,U,!1),ue(M,w,w,N)}function Xe(M,w,N,H){Ge(M,w);var U=N.contextDep,F=w.def(),I="a0",B="a1",A=w.def();M.shared.props=A,M.batchId=F;var P=M.scope(),k=M.scope();w(P.entry,"for(",F,"=0;",F,"<",B,";++",F,"){",A,"=",I,"[",F,"];",k,"}",P.exit);function j(de){return de.contextDep&&U||de.propDep}function X(de){return!j(de)}if(N.needsContext&&le(M,k,N.context),N.needsFramebuffer&&Se(M,k,N.framebuffer),We(M,k,N.state,j),N.profile&&j(N.profile)&&Ne(M,k,N,!1,!0),H)N.useVAO?N.drawVAO?j(N.drawVAO)?k(M.shared.vao,".setVAO(",N.drawVAO.append(M,k),");"):P(M.shared.vao,".setVAO(",N.drawVAO.append(M,P),");"):P(M.shared.vao,".setVAO(",M.shared.vao,".targetVAO);"):(P(M.shared.vao,".setVAO(null);"),Z(M,P,N,H.attributes,X),Z(M,k,N,H.attributes,j)),pe(M,P,N,H.uniforms,X,!1),pe(M,k,N,H.uniforms,j,!0),ue(M,P,k,N);else{var re=M.global.def("{}"),ce=N.shader.progVar.append(M,k),ne=k.def(ce,".id"),ye=k.def(re,"[",ne,"]");k(M.shared.gl,".useProgram(",ce,".program);","if(!",ye,"){",ye,"=",re,"[",ne,"]=",M.link(function(de){return Me(Ve,M,N,de,2)}),"(",ce,");}",ye,".call(this,a0[",F,"],",F,");")}}function T(M,w){var N=M.proc("batch",2);M.batchId="0",Ge(M,N);var H=!1,U=!0;Object.keys(w.context).forEach(function(re){H=H||w.context[re].propDep}),H||(le(M,N,w.context),U=!1);var F=w.framebuffer,I=!1;F?(F.propDep?H=I=!0:F.contextDep&&H&&(I=!0),I||Se(M,N,F)):Se(M,N,null),w.state.viewport&&w.state.viewport.propDep&&(H=!0);function B(re){return re.contextDep&&H||re.propDep}Re(M,N,w),We(M,N,w.state,function(re){return!B(re)}),(!w.profile||!B(w.profile))&&Ne(M,N,w,!1,"a1"),w.contextDep=H,w.needsContext=U,w.needsFramebuffer=I;var A=w.shader.progVar;if(A.contextDep&&H||A.propDep)Xe(M,N,w,null);else{var P=A.append(M,N);if(N(M.shared.gl,".useProgram(",P,".program);"),w.shader.program)Xe(M,N,w,w.shader.program);else{N(M.shared.vao,".setVAO(null);");var k=M.global.def("{}"),j=N.def(P,".id"),X=N.def(k,"[",j,"]");N(M.cond(X).then(X,".call(this,a0,a1);").else(X,"=",k,"[",j,"]=",M.link(function(re){return Me(Xe,M,w,re,2)}),"(",P,");",X,".call(this,a0,a1);"))}}Object.keys(w.state).length>0&&N(M.shared.current,".dirty=true;"),M.shared.vao&&N(M.shared.vao,".setVAO(null);")}function $(M,w){var N=M.proc("scope",3);M.batchId="a2";var H=M.shared,U=H.current;le(M,N,w.context),w.framebuffer&&w.framebuffer.append(M,N),lp(Object.keys(w.state)).forEach(function(I){var B=w.state[I],A=B.append(M,N);Ht(A)?A.forEach(function(P,k){N.set(M.next[I],"["+k+"]",P)}):N.set(H.next,"."+I,A)}),Ne(M,N,w,!0,!0),[Oo,u0,Go,d0,Do].forEach(function(I){var B=w.draw[I];B&&N.set(H.draw,"."+I,""+B.append(M,N))}),Object.keys(w.uniforms).forEach(function(I){var B=w.uniforms[I].append(M,N);Array.isArray(B)&&(B="["+B.join()+"]"),N.set(H.uniforms,"["+r.id(I)+"]",B)}),Object.keys(w.attributes).forEach(function(I){var B=w.attributes[I].append(M,N),A=M.scopeAttrib(I);Object.keys(new v).forEach(function(P){N.set(A,"."+P,B[P])})}),w.scopeVAO&&N.set(H.vao,".targetVAO",w.scopeVAO.append(M,N));function F(I){var B=w.shader[I];B&&N.set(H.shader,"."+I,B.append(M,N))}F($i),F(Hi),Object.keys(w.state).length>0&&(N(U,".dirty=true;"),N.exit(U,".dirty=true;")),N("a1(",M.shared.context,",a0,",M.batchId,");")}function q(M){if(!(typeof M!="object"||Ht(M))){for(var w=Object.keys(M),N=0;N<w.length;++N)if(Fi.isDynamic(M[w[N]]))return!0;return!1}}function ae(M,w,N){var H=w.static[N];if(!H||!q(H))return;var U=M.global,F=Object.keys(H),I=!1,B=!1,A=!1,P=M.global.def("{}");F.forEach(function(j){var X=H[j];if(Fi.isDynamic(X)){typeof X=="function"&&(X=H[j]=Fi.unbox(X));var re=Sr(X,null);I=I||re.thisDep,A=A||re.propDep,B=B||re.contextDep}else{switch(U(P,".",j,"="),typeof X){case"number":U(X);break;case"string":U('"',X,'"');break;case"object":Array.isArray(X)&&U("[",X.join(),"]");break;default:U(M.link(X));break}U(";")}});function k(j,X){F.forEach(function(re){var ce=H[re];if(Fi.isDynamic(ce)){var ne=j.invoke(X,ce);X(P,".",re,"=",ne,";")}})}w.dynamic[N]=new Fi.DynamicVariable(A0,{thisDep:I,contextDep:B,propDep:A,ref:P,append:k}),delete w.static[N]}function fe(M,w,N,H,U){var F=Y();F.stats=F.link(U),Object.keys(w.static).forEach(function(B){ae(F,w,B)}),Q5.forEach(function(B){ae(F,M,B)});var I=$e(M,w,N,H,F);return Ke(F,I),$(F,I),T(F,I),j5(F.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:_,current:E,procs:(function(){var M=Y(),w=M.proc("poll"),N=M.proc("refresh"),H=M.block();w(H),N(H);var U=M.shared,F=U.gl,I=U.next,B=U.current;H(B,".dirty=false;"),Se(M,w),Se(M,N,null,!0);var A;x&&(A=M.link(x)),n.oes_vertex_array_object&&N(M.link(n.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var P=0;P<o.maxAttributes;++P){var k=N.def(U.attributes,"[",P,"]"),j=M.cond(k,".buffer");j.then(F,".enableVertexAttribArray(",P,");",F,".bindBuffer(",Ua,",",k,".buffer.buffer);",F,".vertexAttribPointer(",P,",",k,".size,",k,".type,",k,".normalized,",k,".stride,",k,".offset);").else(F,".disableVertexAttribArray(",P,");",F,".vertexAttrib4f(",P,",",k,".x,",k,".y,",k,".z,",k,".w);",k,".buffer=null;"),N(j),x&&N(A,".vertexAttribDivisorANGLE(",P,",",k,".divisor);")}return N(M.shared.vao,".currentVAO=null;",M.shared.vao,".setVAO(",M.shared.vao,".targetVAO);"),Object.keys(S).forEach(function(X){var re=S[X],ce=H.def(I,".",X),ne=M.block();ne("if(",ce,"){",F,".enable(",re,")}else{",F,".disable(",re,")}",B,".",X,"=",ce,";"),N(ne),w("if(",ce,"!==",B,".",X,"){",ne,"}")}),Object.keys(L).forEach(function(X){var re=L[X],ce=E[X],ne,ye,de=M.block();if(de(F,".",re,"("),Ht(ce)){var Le=ce.length;ne=M.global.def(I,".",X),ye=M.global.def(B,".",X),de(jr(Le,function(_e){return ne+"["+_e+"]"}),");",jr(Le,function(_e){return ye+"["+_e+"]="+ne+"["+_e+"];"}).join("")),w("if(",jr(Le,function(_e){return ne+"["+_e+"]!=="+ye+"["+_e+"]"}).join("||"),"){",de,"}")}else ne=H.def(I,".",X),ye=H.def(B,".",X),de(ne,");",B,".",X,"=",ne,";"),w("if(",ne,"!==",ye,"){",de,"}");N(de)}),M.compile()})(),compile:fe}}});var xp=J((HT,gp)=>{gp.exports=function(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}});var wp=J((BT,bp)=>{var vw=34918,mw=34919,yp=35007;bp.exports=function(e,t){if(!t.ext_disjoint_timer_query)return null;var r=[];function n(){return r.pop()||t.ext_disjoint_timer_query.createQueryEXT()}function o(g){r.push(g)}var a=[];function i(g){var x=n();t.ext_disjoint_timer_query.beginQueryEXT(yp,x),a.push(x),u(a.length-1,a.length,g)}function s(){t.ext_disjoint_timer_query.endQueryEXT(yp)}function c(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var f=[];function l(){return f.pop()||new c}function m(g){f.push(g)}var h=[];function u(g,x,b){var y=l();y.startQueryIndex=g,y.endQueryIndex=x,y.sum=0,y.stats=b,h.push(y)}var p=[],d=[];function v(){var g,x,b=a.length;if(b!==0){d.length=Math.max(d.length,b+1),p.length=Math.max(p.length,b+1),p[0]=0,d[0]=0;var y=0;for(g=0,x=0;x<a.length;++x){var E=a[x];t.ext_disjoint_timer_query.getQueryObjectEXT(E,mw)?(y+=t.ext_disjoint_timer_query.getQueryObjectEXT(E,vw),o(E)):a[g++]=E,p[x+1]=y,d[x+1]=g}for(a.length=g,g=0,x=0;x<h.length;++x){var _=h[x],z=_.startQueryIndex,S=_.endQueryIndex;_.sum+=p[S]-p[z];var L=d[z],D=d[S];D===L?(_.stats.gpuTime+=_.sum/1e6,m(_)):(_.startQueryIndex=L,_.endQueryIndex=D,h[g++]=_)}h.length=g}}return{beginQuery:i,endQuery:s,pushScopeStats:u,update:v,getNumPendingQueries:function(){return a.length},clear:function(){r.push.apply(r,a);for(var g=0;g<r.length;g++)t.ext_disjoint_timer_query.deleteQueryEXT(r[g]);a.length=0,r.length=0},restore:function(){a.length=0,r.length=0}}}});var kp=J((UT,Sp)=>{var Rn=Ar(),T0=Sn(),to=Hc(),Bl=_u(),_p=Mu(),gw=Tu(),xw=Cu(),yw=Nu(),bw=Hu(),ww=nd(),_w=ld(),Ew=Qd(),Mw=f1(),Aw=w1(),Tw=L1(),Sw=N1(),kw=I1(),Lw=mp(),zw=xp(),Cw=wp(),Rw=16384,Nw=256,Pw=1024,Iw=34962,Ep="webglcontextlost",Mp="webglcontextrestored",Ap=1,Ow=2,Dw=3;function Tp(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return r;return-1}Sp.exports=function(t){var r=xw(t);if(!r)return null;var n=r.gl,o=n.getContextAttributes(),a=n.isContextLost(),i=yw(n,r);if(!i)return null;var s=gw(),c=zw(),f=i.extensions,l=Cw(n,f),m=_p(),h=n.drawingBufferWidth,u=n.drawingBufferHeight,p={tick:0,time:0,viewportWidth:h,viewportHeight:u,framebufferWidth:h,framebufferHeight:u,drawingBufferWidth:h,drawingBufferHeight:u,pixelRatio:r.pixelRatio},d={},v={elements:null,primitive:4,count:-1,offset:0,instances:-1},g=bw(n,f),x=ww(n,c,r,E),b=_w(n,f,x,c),y=Tw(n,f,g,c,x,b,v);function E(ue){return y.destroyBuffer(ue)}var _=Sw(n,s,c,r),z=Ew(n,f,g,function(){D.procs.poll()},p,c,r),S=Mw(n,f,g,c,r),L=Aw(n,f,g,z,S,c),D=Lw(n,s,f,g,x,b,z,L,d,y,_,v,p,l,r),O=kw(n,L,D.procs.poll,p,o,f,g),G=D.next,C=n.canvas,R=[],K=[],Y=[],ee=[r.onDestroy],V=null;function he(){if(R.length===0){l&&l.update(),V=null;return}V=Bl.next(he),We();for(var ue=R.length-1;ue>=0;--ue){var Me=R[ue];Me&&Me(p,null,0)}n.flush(),l&&l.update()}function ve(){!V&&R.length>0&&(V=Bl.next(he))}function we(){V&&(Bl.cancel(he),V=null)}function oe(ue){ue.preventDefault(),a=!0,we(),K.forEach(function(Me){Me()})}function De(ue){n.getError(),a=!1,i.restore(),_.restore(),x.restore(),z.restore(),S.restore(),L.restore(),y.restore(),l&&l.restore(),D.procs.refresh(),ve(),Y.forEach(function(Me){Me()})}C&&(C.addEventListener(Ep,oe,!1),C.addEventListener(Mp,De,!1));function be(){R.length=0,we(),C&&(C.removeEventListener(Ep,oe),C.removeEventListener(Mp,De)),_.clear(),L.clear(),S.clear(),y.clear(),z.clear(),b.clear(),x.clear(),l&&l.clear(),ee.forEach(function(ue){ue()})}function qe(ue){Rn(!!ue,"invalid args to regl({...})"),Rn.type(ue,"object","invalid args to regl({...})");function Me(U){var F=T0({},U);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function I(B){if(B in F){var A=F[B];delete F[B],Object.keys(A).forEach(function(P){F[B+"."+P]=A[P]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in U&&(F.vao=U.vao),F}function Pe(U,F){var I={},B={};return Object.keys(U).forEach(function(A){var P=U[A];if(to.isDynamic(P)){B[A]=to.unbox(P,A);return}else if(F&&Array.isArray(P)){for(var k=0;k<P.length;++k)if(to.isDynamic(P[k])){B[A]=to.unbox(P,A);return}}I[A]=P}),{dynamic:B,static:I}}var Ke=Pe(ue.context||{},!0),Ve=Pe(ue.uniforms||{},!0),Xe=Pe(ue.attributes||{},!1),T=Pe(Me(ue),!1),$={gpuTime:0,cpuTime:0,count:0},q=D.compile(T,Xe,Ve,Ke,$),ae=q.draw,fe=q.batch,M=q.scope,w=[];function N(U){for(;w.length<U;)w.push(null);return w}function H(U,F){var I;if(a&&Rn.raise("context lost"),typeof U=="function")return M.call(this,null,U,0);if(typeof F=="function")if(typeof U=="number")for(I=0;I<U;++I)M.call(this,null,F,I);else if(Array.isArray(U))for(I=0;I<U.length;++I)M.call(this,U[I],F,I);else return M.call(this,U,F,0);else if(typeof U=="number"){if(U>0)return fe.call(this,N(U|0),U|0)}else if(Array.isArray(U)){if(U.length)return fe.call(this,U,U.length)}else return ae.call(this,U)}return T0(H,{stats:$,destroy:function(){q.destroy()}})}var Fe=L.setFBO=qe({framebuffer:to.define.call(null,Ap,"framebuffer")});function $e(ue,Me){var Pe=0;D.procs.poll();var Ke=Me.color;Ke&&(n.clearColor(+Ke[0]||0,+Ke[1]||0,+Ke[2]||0,+Ke[3]||0),Pe|=Rw),"depth"in Me&&(n.clearDepth(+Me.depth),Pe|=Nw),"stencil"in Me&&(n.clearStencil(Me.stencil|0),Pe|=Pw),Rn(!!Pe,"called regl.clear with no buffer specified"),n.clear(Pe)}function le(ue){if(Rn(typeof ue=="object"&&ue,"regl.clear() takes an object as input"),"framebuffer"in ue)if(ue.framebuffer&&ue.framebuffer_reglType==="framebufferCube")for(var Me=0;Me<6;++Me)Fe(T0({framebuffer:ue.framebuffer.faces[Me]},ue),$e);else Fe(ue,$e);else $e(null,ue)}function Se(ue){Rn.type(ue,"function","regl.frame() callback must be a function"),R.push(ue);function Me(){var Pe=Tp(R,ue);Rn(Pe>=0,"cannot cancel a frame twice");function Ke(){var Ve=Tp(R,Ke);R[Ve]=R[R.length-1],R.length-=1,R.length<=0&&we()}R[Pe]=Ke}return ve(),{cancel:Me}}function Re(){var ue=G.viewport,Me=G.scissor_box;ue[0]=ue[1]=Me[0]=Me[1]=0,p.viewportWidth=p.framebufferWidth=p.drawingBufferWidth=ue[2]=Me[2]=n.drawingBufferWidth,p.viewportHeight=p.framebufferHeight=p.drawingBufferHeight=ue[3]=Me[3]=n.drawingBufferHeight}function We(){p.tick+=1,p.time=Ne(),Re(),D.procs.poll()}function Ge(){z.refresh(),Re(),D.procs.refresh(),l&&l.update()}function Ne(){return(_p()-m)/1e3}Ge();function Z(ue,Me){Rn.type(Me,"function","listener callback must be a function");var Pe;switch(ue){case"frame":return Se(Me);case"lost":Pe=K;break;case"restore":Pe=Y;break;case"destroy":Pe=ee;break;default:Rn.raise("invalid event, must be one of frame,lost,restore,destroy")}return Pe.push(Me),{cancel:function(){for(var Ke=0;Ke<Pe.length;++Ke)if(Pe[Ke]===Me){Pe[Ke]=Pe[Pe.length-1],Pe.pop();return}}}}var pe=T0(qe,{clear:le,prop:to.define.bind(null,Ap),context:to.define.bind(null,Ow),this:to.define.bind(null,Dw),draw:qe({}),buffer:function(ue){return x.create(ue,Iw,!1,!1)},elements:function(ue){return b.create(ue,!1)},texture:z.create2D,cube:z.createCube,renderbuffer:S.create,framebuffer:L.create,framebufferCube:L.createCube,vao:y.createVAO,attributes:o,frame:Se,on:Z,limits:g,hasExtension:function(ue){return g.extensions.indexOf(ue.toLowerCase())>=0},read:O,destroy:be,_gl:n,_refresh:Ge,poll:function(){We(),l&&l.update()},now:Ne,stats:c});return r.onDone(null,pe),pe}});var $o=J((jT,Lp)=>{"use strict";var Nn=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Pn=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],_n=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],S0=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Qi=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Ul=e=>Math.hypot(e[0],e[1],e[2]),Wr=e=>{let t=Ul(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function Wa(e,t){let r=e.length-1,n=Math.min(Math.max(t,0),1)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],l=[0,0,0];for(let m=0;m<3;m++)l[m]=.5*(2*s[m]+(-i[m]+c[m])*a+(2*i[m]-5*s[m]+4*c[m]-f[m])*a*a+(-i[m]+3*s[m]-3*c[m]+f[m])*a*a*a);return l}function Gw(e,t){return Wa(e.map(r=>[r,0,0]),t)[0]}function Fw(e,t,r,n){let o={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];o.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},o.restore=()=>{i=s.pop()};let c=(h,u)=>{let p=new Array(9);for(let d=0;d<3;d++)for(let v=0;v<3;v++)p[d*3+v]=h[d*3]*u[v]+h[d*3+1]*u[3+v]+h[d*3+2]*u[6+v];return p},f=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];o.translate=(h,u,p)=>{let d=f([h,u,p]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},o.scale=h=>{i.s*=h},o.rotateY=h=>{let u=Math.cos(h),p=Math.sin(h);i.r=c(i.r,[u,0,p,0,1,0,-p,0,u])},o.vert=(h,u,p)=>{let d=p||o.curMat,v=f(h),g=Wr(f(u));return e.push(v[0]*i.s+i.t[0],v[1]*i.s+i.t[1],v[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],m=h=>[t[h*3],t[h*3+1],t[h*3+2]];return o.tri=(h,u,p)=>{let d=l(h),v=Qi(Nn(l(u),d),Nn(l(p),d)),g=Pn(Pn(m(h),m(u)),m(p));S0(v,g)<0?r.push(h,p,u):r.push(h,u,p)},o.box=(h,u,p,d,v,g,x)=>{let b=[[[h,u,p],[d,u,p],[h,v,p],[d,v,p],[0,0,-1]],[[d,u,g],[h,u,g],[d,v,g],[h,v,g],[0,0,1]],[[h,u,g],[h,u,p],[h,v,g],[h,v,p],[-1,0,0]],[[d,u,p],[d,u,g],[d,v,p],[d,v,g],[1,0,0]],[[h,v,p],[d,v,p],[h,v,g],[d,v,g],[0,1,0]],[[h,u,g],[d,u,g],[h,u,p],[d,u,p],[0,-1,0]]];for(let y of b){let E=o.vert(y[0],y[4],x),_=o.vert(y[1],y[4],x),z=o.vert(y[2],y[4],x),S=o.vert(y[3],y[4],x);o.tri(E,_,z),o.tri(_,S,z)}},o.surface=(h,u,p,d)=>{d=d||{};let v=.001,g=E=>Math.min(1,Math.max(0,E)),x=[],b=[];for(let E=0;E<=u;E++){let _=[],z=[];for(let S=0;S<=p;S++){let L=E/u,D=S/p,O=h(L,D),G=Math.min(1-v,Math.max(v,L)),C=d.wrapV?D:Math.min(1-v,Math.max(v,D)),R=Nn(h(g(G+v),C),h(g(G-v),C)),K=d.wrapV?C+v:g(C+v),Y=d.wrapV?C-v:g(C-v),ee=Nn(h(G,K),h(G,Y)),V=Qi(R,ee);Ul(V)<1e-14&&(V=d.inside?Nn(O,d.inside(L,D)):[0,1,0]),V=Wr(V),d.inside&&S0(V,Nn(O,d.inside(L,D)))<0&&(V=_n(V,-1));let he=d.mat?d.mat(L,D,O):null;_.push(o.vert(O,V,he)),d.double&&z.push(o.vert(O,_n(V,-1),he))}x.push(_),b.push(z)}let y=E=>{for(let _=0;_<u;_++)for(let z=0;z<p;z++){let S=E[_][z],L=E[_+1][z],D=E[_][z+1],O=E[_+1][z+1];o.tri(S,L,D),o.tri(L,O,D)}};y(x),d.double&&y(b)},o.ellipsoid=(h,u,p,d,v)=>{v=v||{};let g=v.warp||null;o.surface((x,b)=>{let y=x*Math.PI,E=b*Math.PI*2,_=g?g(x,b):1;return[h[0]+u[0]*_*Math.sin(y)*Math.cos(E),h[1]+u[1]*_*Math.cos(y),h[2]+u[2]*_*Math.sin(y)*Math.sin(E)]},p||10,d||14,{wrapV:!0,inside:()=>h,mat:v.mat})},o.tube=(h,u,p,d,v)=>{v=v||{};let g=40,x=[],b=null;for(let _=0;_<=g;_++){let z=_/g,S=Wa(h,Math.max(0,z-.01)),L=Wa(h,Math.min(1,z+.01)),D=Wr(Nn(L,S)),O;if(b)O=Wr(Nn(b,_n(D,S0(b,D))));else{let G=Math.abs(D[1])<.9?[0,1,0]:[1,0,0];O=Wr(Qi(D,G))}x.push({N:O,B:Wr(Qi(D,O))}),b=O}let y=_=>{let z=Math.min(Math.max(_,0),1)*g,S=Math.min(g-1,Math.floor(z)),L=z-S,D=x[S],O=x[S+1];return{N:Wr(Pn(_n(D.N,1-L),_n(O.N,L))),B:Wr(Pn(_n(D.B,1-L),_n(O.B,L)))}},E=v.squash||[1,1];o.surface((_,z)=>{let S=Wa(h,_),L=y(_),D=u(_),O=z*Math.PI*2;return Pn(S,Pn(_n(L.N,Math.cos(O)*D*E[0]),_n(L.B,Math.sin(O)*D*E[1])))},p||12,d||8,{wrapV:!0,inside:_=>Wa(h,_),mat:v.mat})},o.lathe=(h,u,p,d,v)=>{v=v||{};let g=[];for(let x=0;x<h.length-1;x++){let b=h[x+1][0]-h[x][0],y=h[x+1][1]-h[x][1];g.push(Wr([y,-b,0]))}for(let x=0;x<h.length-1;x++){let b=h[x],y=h[x+1],E=x===0||b[2]===1,_=x===h.length-2||y[2]===1,z=E?g[x]:Wr(Pn(g[x-1],g[x])),S=_?g[x]:Wr(Pn(g[x],g[x+1])),L=[],D=[];for(let O=0;O<=d;O++){let G=O/d*Math.PI*2,C=Math.cos(G),R=Math.sin(G),K=v.mat?v.mat(G,b[1]):null,Y=v.mat?v.mat(G,y[1]):null;L.push(o.vert([u+b[0]*C,b[1],p+b[0]*R],[z[0]*C,z[1],z[0]*R],K)),D.push(o.vert([u+y[0]*C,y[1],p+y[0]*R],[S[0]*C,S[1],S[0]*R],Y))}for(let O=0;O<d;O++)o.tri(L[O],L[O+1],D[O]),o.tri(L[O+1],D[O+1],D[O])}},o}Lp.exports={createBuilder:Fw,catmull:Wa,curve1:Gw,sub:Nn,add:Pn,mul:_n,dot:S0,cross:Qi,norm:Wr,len:Ul}});var Np=J((WT,Rp)=>{"use strict";var{norm:k0,add:L0,mul:ro,sub:qw,cross:zp}=$o(),Cp=Math.PI*2,$w=(e,t,r)=>{let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)};function Hw(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function Bw(e,t,r,n,o,a){let i=(h,u)=>[7,h*a,u];e.curMat=[0,0,0],e.box(t-a*1.36,n,r-a*1.36,t+a*1.36,n+.22,r+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,r,56,{mat:i});let s=n+.55,c=o-s,f=20,l=6,m=a*.075;return e.surface((h,u)=>{let p=s+h*c,d=a*(.96-.12*h),v=u*Cp,g=u*f%1,x=d-m*4*g*(1-g);return[t+x*Math.cos(v),p,r+x*Math.sin(v)]},10,f*l,{wrapV:!0,inside:h=>[t,s+h*c,r],mat:(h,u)=>[7,u*Cp*a,s+h*c]}),e.lathe([[a*.8,o-.02,1],[a*.9,o+.02],[a*.9,o+.07,1],[a*.82,o+.09,1],[a*.86,o+.13],[a*1.06,o+.2],[a*1.22,o+.28],[a*1.28,o+.33,1]],t,r,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,o+.33,r-a*1.42,t+a*1.42,o+.53,r+a*1.42),o+.53}function Uw(e,t,r){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,r*.14,1],[t*1.04,r*.14,1],[t*1.04,r*.2],[t*.97,r*.26,1],[t*.95,r*.26,1],[t*.95,r*.8,1],[t*.98,r*.8,1],[t*1.03,r*.86],[t*1.05,r*.92,1],[t*1.05,r,1],[t*.5,r,1],[0,r]],0,0,72)}function jw(e,t,r,n,o){e.save(),e.translate(t,0,r),Uw(e,n,o),e.restore()}function Ww(e,t,r,n,o,a){let i=Hw(n),s=a?k0([a[0],0,a[1]]):null;e.save(),e.translate(t,0,r),e.scale(o||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let m=l>=c-2,h=l*2.399963+i()*.5,u=[Math.cos(h),0,Math.sin(h)],p=[-Math.sin(h),0,Math.cos(h)],d=l*.618%1,v=m?.06+i()*.06:.12+.62*d,g=1;if(s){let V=u[0]*s[0]+u[2]*s[2];g=.25+.75*$w(-.7,.5,V),v*=g}let x=m?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,b=m?1+i()*.2:.95+i()*.28,y=m?.055:.215+i()*.05,E=.04+i()*.05,_=[u[0]*E,f,u[2]*E],z=[_[0]+u[0]*Math.sin(v)*x*.92,_[1]+Math.cos(v)*x,_[2]+u[2]*Math.sin(v)*x*.92],S=[_[0]+u[0]*Math.sin(v*.5)*x*.45,_[1]+x*.5,_[2]+u[2]*Math.sin(v*.5)*x*.45];e.curMat=[4,0,0],e.tube([_,S,z],V=>.02-.008*V,8,7);let L=24,D=v*.9+.05,O=v+(m?.12:(.95+.45*d)*(.35+.65*g)),G=[z],C=[],R=z;for(let V=0;V<L;V++){let he=V/L,ve=D+(O-D)*he*he,we=[u[0]*Math.sin(ve),Math.cos(ve),u[2]*Math.sin(ve)];C.push(we),R=L0(R,ro(we,b/L)),G.push(R)}C.push(C[C.length-1]);let K=V=>{let he=V*L,ve=Math.min(L-1,Math.floor(he)),we=he-ve;return L0(ro(G[ve],1-we),ro(G[ve+1],we))},Y=V=>{let he=V*L,ve=Math.min(L,Math.floor(he)),we=Math.min(L,ve+1),oe=he-ve;return k0(L0(ro(C[ve],1-oe),ro(C[we],oe)))},ee=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((V,he)=>{let ve=he*2-1,we=K(V),oe=Y(V),De=ee*V,be=L0(ro(p,Math.cos(De)),ro(zp(oe,p),Math.sin(De)));be=k0(qw(be,ro(oe,be[0]*oe[0]+be[1]*oe[1]+be[2]*oe[2])));let qe=k0(zp(be,oe)),Fe=y*Math.pow(Math.sin(Math.PI*Math.pow(V,.72)),.85),$e=.3*Fe*Math.abs(ve)+.012*Math.sin(V*40+ve*2)*Math.abs(ve)*(m?0:1),le=-.1*Fe*ve*ve*ve*ve,Se=$e+le;return[we[0]+be[0]*ve*Fe+qe[0]*Se,we[1]+be[1]*ve*Fe+qe[1]*Se,we[2]+be[2]*ve*Fe+qe[2]*Se]},14,8,{double:!0,mat:(V,he)=>[2,he*2-1,V]})}e.restore()}Rp.exports={addFlutedColumn:Bw,addStatue:jw,addPlant:Ww}});var Ho=J((VT,Dp)=>{"use strict";var se={xc:7,r:2.5,spring:4.7};se.x0=se.xc-se.r;se.x1=se.xc+se.r;se.top=se.spring+se.r;var gr=.06,Tt=.1,Pp=.08,z0=se.r,C0=[se.x0+z0/3,se.x0+2*z0/3,se.xc+z0/3,se.xc+2*z0/3],Va=.28,jl=[.95,1.65,2.35,3.05,3.75],Ip=[1.05,1.8],Zi=[8,0,0],Dr=[0,0,0];function Vr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function Xa(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function R0(e,t,r,n,o,a,i=48,s=0,c=Math.PI){let f=(l,m,h)=>[se.xc+m*Math.cos(l),se.spring+m*Math.sin(l),h];for(let l=0;l<i;l++){let m=s+(c-s)*l/i,h=s+(c-s)*(l+1)/i,u=(m+h)/2;Xa(e,f(m,t,o),f(h,t,o),f(h,r,o),f(m,r,o),[0,0,1],a),Xa(e,f(m,r,n),f(h,r,n),f(h,t,n),f(m,t,n),[0,0,-1],a),Xa(e,f(m,t,n),f(h,t,n),f(h,t,o),f(m,t,o),[-Math.cos(u),-Math.sin(u),0],a),Xa(e,f(h,r,n),f(m,r,n),f(m,r,o),f(h,r,o),[Math.cos(u),Math.sin(u),0],a)}}function Vw(e){let n=a=>[se.xc+se.r*Math.cos(a),se.spring+se.r*Math.sin(a)],o=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?se.r/Math.abs(i):1/0,f=s>1e-6?(8-se.spring)/s:1/0,l=Math.min(c,f);return[Math.min(se.x1,Math.max(se.x0,se.xc+i*l)),Math.min(8,se.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),l=o(i),m=o(s);for(let[u,p]of[[.35,1],[-.35,-1]])Xa(e,[c[0],c[1],u],[f[0],f[1],u],[m[0],m[1],u],[l[0],l[1],u],[0,0,p],Dr);let h=(i+s)/2;Xa(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Dr)}}function Xw(e){Vr(e,-.35,0,-.35,se.x0,8,.35,Dr),Vr(e,se.x1,0,-.35,14+.35,8,.35,Dr),Vw(e),Op(e)}function Op(e){Vr(e,se.x0-.32,.3,.35,se.x0,se.spring,.35+.07,Dr),Vr(e,se.x1,.3,.35,se.x1+.32,se.spring,.35+.07,Dr),Vr(e,se.x0-.32-.05,0,.35,se.x0,.3,.35+.07+.04,Dr),Vr(e,se.x1,0,.35,se.x1+.32+.05,.3,.35+.07+.04,Dr),Vr(e,se.x0-.32-.06,se.spring-.12,.35,se.x0,se.spring,.35+.07+.05,Dr),Vr(e,se.x1,se.spring-.12,.35,se.x1+.32+.06,se.spring,.35+.07+.05,Dr),R0(e,se.r,se.r+.32,.35,.35+.07,Dr),R0(e,se.r+.32,se.r+.32+.06,.35,.35+.07+.03,Dr),Vr(e,se.xc-.22,se.top-.08,.35,se.xc+.22,se.top+.32+.12,.35+.07+.06,Dr)}function Yw(e,t){t=t||"all";let r=t==="all",n=r||t==="fixed",o=-Pp/2,a=Pp/2,i=(h,u,p,d,v=0)=>Vr(e,h-v,u,o,p+v,d,a,Zi),s=h=>se.spring+Math.sqrt(Math.max(0,se.r*se.r-(h-se.xc)*(h-se.xc))),c=t==="right"?se.xc:se.x0,f=t==="left"?se.xc:se.x1,l=h=>r||t==="left"&&h<se.xc||t==="right"&&h>se.xc,m=r?null:se.spring-.06;if(n){i(se.x0,0,se.x0+Tt,se.spring),i(se.x1-Tt,0,se.x1,se.spring),R0(e,se.r-Tt,se.r,o,a,Zi,64),i(se.x0,0,se.x1,.05),i(se.x0,se.spring-.06,se.x1,se.spring+.06);for(let h of Ip)R0(e,h-gr/2,h+gr/2,o,a,Zi,48)}if(r){i(se.x0,0,se.x1,Va),i(se.xc-Tt/2,0,se.xc+Tt/2,se.top-Tt*.5);for(let h of C0)i(h-gr/2,Va,h+gr/2,s(h)-Tt*.5);for(let h of jl)i(se.x0,h-gr/2,se.x1,h+gr/2)}else if(t==="fixed"){i(se.xc-Tt/2,se.spring+.06,se.xc+Tt/2,se.top-Tt*.5);for(let h of C0)i(h-gr/2,se.spring+.06,h+gr/2,s(h)-Tt*.5)}else{let h=t==="left"?se.x0+Tt:se.x1-Tt;i(Math.min(h,h+(t==="left"?Tt*.8:-Tt*.8)),.05,Math.max(h,h+(t==="left"?Tt*.8:-Tt*.8)),m),i(c,.05,f,Va),i(c,m-.07,f,m);let u=t==="left"?se.xc-Tt/2:se.xc;i(u,.05,u+Tt/2,m);for(let p of C0)l(p)&&i(p-gr/2,Va,p+gr/2,m-.07);for(let p of jl)i(c,p-gr/2,f,p+gr/2)}for(let h of[-1,1]){let u=se.xc+h*.16;l(u)&&(Vr(e,u-.02,1.05,a,u+.02,1.13,a+.06,Zi),Vr(e,u-(h>0?0:.14),1.07,a+.05,u+(h>0?.14:0),1.11,a+.08,Zi))}}function Kw(e){e=e||"all";let t=[],r=0,{x0:n,x1:o,xc:a,r:i,spring:s}=se;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:o;if(t.push([f,0,r],[l,0,r],[l,s,r],[f,0,r],[l,s,r],[f,s,r]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,m=Math.PI*(f+1)/c;t.push([a,s,r],[a+i*Math.cos(l),s+i*Math.sin(l),r],[a+i*Math.cos(m),s+i*Math.sin(m),r])}return t}var ft=e=>e.toFixed(4);function Qw(){let e=C0.map(n=>`vb = max(vb, barCover(abs(q.x - ${ft(n)}), ${ft(gr/2)}, soft));`).join(`
		`),t=jl.map(n=>`hb = max(hb, barCover(abs(q.y - ${ft(n)}), ${ft(gr/2)}, soft));`).join(`
		`),r=Ip.map(n=>`ab = max(ab, barCover(abs(rr - ${ft(n)}), ${ft(gr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${ft(se.x0)} - soft, ${ft(se.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${ft(se.x1)} - soft, ${ft(se.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${ft(se.xc)}, ${ft(se.spring)}));
		float arch = q.y < ${ft(se.spring)} ? 1.0 : 1.0 - smoothstep(${ft(se.r)} - soft, ${ft(se.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${ft(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${ft(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${ft(se.xc)}, ${ft(se.spring)}));
		float vb = barCover(abs(q.x - ${ft(se.xc)}), ${ft(Tt/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${ft(se.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${ft(Va)} - soft, ${ft(Va)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${ft(se.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${r}
		ab = q.y > ${ft(se.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${ft(se.x0+Tt/2)}), ${ft(Tt/2)}, soft),
			barCover(abs(q.x - ${ft(se.x1-Tt/2)}), ${ft(Tt/2)}, soft));
		frame = q.y < ${ft(se.spring)} ? frame : barCover(abs(rr - ${ft(se.r-Tt/2)}), ${ft(Tt/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Dp.exports={addEntranceWall:Xw,addSurround:Op,addFrames:Yw,glassPanes:Kw,doorLightGLSL:Qw,DOOR:se,WALL:.35}});var Ka=J((XT,Bp)=>{"use strict";var Uo=1.1583333333333334,jo=(13.05-8*.16)/9,Vl=Uo+.16,Xl=jo+.16,In=14/2-7.75/2,Xr=15,Ji=In+7.75,no=Xr+13.05,Gr=.3,On={y:8+.18,inset:.15},Bo={y:8+.36,inset:Gr},Yl=8+.2,N0=8+.62,Kl=8+.9,Ql=.016,$p=.28,Hp=.66,Zw=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>r/t)})(),Jw=[9,0,0],ar=[10,0,0];function Ya(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function xr(e,t,r,n,o,a,i){Ya(e,[t,a,r],[n,a,r],[n,a,o],[t,a,o],[0,-1,0],i)}function Wl(e,t,r,n,o,a,i,s){Ya(e,[t,a,r],[n,a,r],[n,i,r],[t,i,r],[0,0,1],s),Ya(e,[n,a,o],[t,a,o],[t,i,o],[n,i,o],[0,0,-1],s),Ya(e,[t,a,o],[t,a,r],[t,i,r],[t,i,o],[1,0,0],s),Ya(e,[n,a,r],[n,a,o],[n,i,o],[n,i,r],[-1,0,0],s)}function Gp(e,t,r,n,o){xr(e,t[0],t[1],t[2],r[1],n,o),xr(e,t[0],r[3],t[2],t[3],n,o),xr(e,t[0],r[1],r[0],r[3],n,o),xr(e,r[2],r[1],t[2],r[3],n,o)}var Fp=e=>In+e*Vl,qp=e=>Xr+e*Xl;function e4(e,t,r=48){let n=[In-Gr,Xr-Gr,Ji+Gr,no+Gr],o=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=o(n,On.inset),i=o(n,Bo.inset);xr(e,0,0,14,n[1],8,t),xr(e,0,n[3],14,r,8,t),xr(e,0,n[1],n[0],n[3],8,t),xr(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],ar),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,ar),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],ar),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],ar),Wl(e,...n.slice(0,2),...n.slice(2),8,On.y,ar),Gp(e,n,a,On.y,ar),Wl(e,...a.slice(0,2),...a.slice(2),On.y,Bo.y,ar),Gp(e,a,i,Bo.y,ar);for(let f=1;f<6;f++){let l=Fp(f)-.16;e.box(l,Yl,Xr,l+.16,Bo.y,no,ar)}for(let f=1;f<9;f++){let l=qp(f)-.16;e.box(In,Yl,l,Ji,Bo.y,l+.16,ar)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let m=Fp(l),h=qp(f);Wl(e,m,h,m+Uo,h+jo,Bo.y,Kl,ar),xr(e,m,h,m+Uo,h+jo,Kl,Jw),t4(e,m+Uo/2,h+jo/2,Uo/2,jo/2)}}function t4(e,t,r,n,o){let a=N0,i=Ql;xr(e,t-n,r-i,t+n,r+i,a,ar),xr(e,t-i,r-o,t+i,r+o,a,ar);for(let s of[1,-1]){let c=Math.hypot(n,o),f=n/c,l=s*o/c,m=-l*i,h=f*i;Ya(e,[t-f*c+m,a,r-l*c+h],[t+f*c+m,a,r+l*c+h],[t+f*c-m,a,r+l*c-h],[t-f*c-m,a,r-l*c-h],[0,-1,0],ar)}for(let s of[$p,Hp]){let c=s*n,f=s*o;xr(e,t-c-i,r-f-i,t+c+i,r-f+i,a,ar),xr(e,t-c-i,r+f-i,t+c+i,r+f+i,a,ar),xr(e,t-c-i,r-f+i,t-c+i,r+f-i,a,ar),xr(e,t+c-i,r-f+i,t+c+i,r+f-i,a,ar)}}var Ze=e=>e.toFixed(4);function r4(){return`
	const vec3 SKY_SUN = vec3(${Zw.map(Ze).join(", ")});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Ze(In)}, ${Ze(Xr)});
		vec2 pitch = vec2(${Ze(Vl)}, ${Ze(Xl)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Ze(5)} || cell.y > ${Ze(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Ze(Uo)}, ${Ze(jo)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Ze(Ql)} - soft, ${Ze(Ql)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Ze(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Ze(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Ze(On.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Ze(Yl)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Ze(Bo.y)} - p.y) / L.y)).xz;
		float tG = (${Ze(N0)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Ze(Kl)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Ze(In-Gr)}, ${Ze(Xr-Gr)}, ${Ze(Ji+Gr)}, ${Ze(no+Gr)}), soft)
		           * rectOpen(q1, vec4(${Ze(In-Gr+On.inset)}, ${Ze(Xr-Gr+On.inset)}, ${Ze(Ji+Gr-On.inset)}, ${Ze(no+Gr-On.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Ze(In)}, ${Ze(Xr)});
		vec2 pitch = vec2(${Ze(Vl)}, ${Ze(Xl)});
		vec2 paneHalf = vec2(${Ze(Uo/2)}, ${Ze(jo/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Ze($p)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Ze(Hp)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Ze(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Ze(N0)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Ze(In)}, ${Ze(Xr)}, ${Ze(Ji)}, ${Ze(no)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Ze(Xr-3)}, ${Ze(Xr+2)}, p.z)
		        * (1.0 - smoothstep(${Ze(no-2)}, ${Ze(no+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Ze(7.75/2)}, ${Ze(14/2)}, abs(p.x - ${Ze(14/2)}));
		return z * x;
	}`}Bp.exports={addSkylight:e4,skylightGLSL:r4,Z_START:Xr,Z_END:no,GLASS_Y:N0,HEIGHT:8}});var yr=J((YT,Xp)=>{"use strict";var Za=Ho(),tf=8,St=.35,ge={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:tf},Up=(ge.z1-ge.z0)/2,Zl=ge.crown-ge.spring,ef=(Zl*Zl+Up*Up)/(2*Zl),rf=ge.crown-ef;function Qa(e){let t=e-ge.zc;return rf+Math.sqrt(Math.max(0,ef*ef-t*t))}var je={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},un=Array.from({length:je.count},(e,t)=>je.first+t*je.pitch),Wp=un.slice(1).map(e=>e-je.pitch/2),n4=[un[0],un[2],un[4]],I0=[un[1],un[3]],kr={r:1.3,sill:.62,spring:3.3},ut=[0,0,0],es=[11,0,0],oo=[10,0,0],ts=[8,0,0];function Qt(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Lr(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}function rs(e,t){let{u0:r,u1:n,w0:o,w1:a,top:i,holes:s,mat:c}=t,f=new Set([r,n]);for(let d of s){f.add(d.u0),f.add(d.u1);let v=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let g=1;g<v;g++)f.add(d.u0+(d.u1-d.u0)*g/v)}for(let d of t.cuts||[])f.add(d);let l=t.topStep||.5;for(let d=r;d<n;d+=l)f.add(d);let m=[...f].filter(d=>d>=r-1e-9&&d<=n+1e-9).sort((d,v)=>d-v),h=(d,v)=>d.bot?d.bot(v):d.bottom,u=(d,v)=>{let g=i(d),x=v.map(E=>[Math.max(0,h(E,d)),Math.min(E.head(d),g)]).filter(E=>E[1]>E[0]).sort((E,_)=>E[0]-_[0]),b=[],y=0;for(let E of x)E[0]>y+1e-6&&b.push([y,E[0]]),y=Math.max(y,E[1]);return g>y+1e-6&&b.push([y,g]),b},p=(d,v,g)=>[d,v,g];for(let d=0;d<m.length-1;d++){let v=m[d],g=m[d+1],x=(v+g)/2,b=s.filter(L=>x>L.u0&&x<L.u1),y=b.length?Math.max(v,Math.max(...b.map(L=>L.u0))+1e-7):v,E=b.length?Math.min(g,Math.min(...b.map(L=>L.u1))-1e-7):g,_=u(y,b),z=u(E,b),S=Math.min(_.length,z.length);for(let L=0;L<S;L++){let[D,O]=_[L],[G,C]=z[L];O-D<1e-6&&C-G<1e-6||(Qt(e,p(v,D,a),p(g,G,a),p(g,C,a),p(v,O,a),[0,0,1],c),t.frontOnly||Qt(e,p(g,G,o),p(v,D,o),p(v,O,o),p(g,C,o),[0,0,-1],c))}}t.noEnds||(Qt(e,p(r,0,o),p(r,0,a),p(r,i(r),a),p(r,i(r),o),[-1,0,0],c),Qt(e,p(n,0,a),p(n,0,o),p(n,i(n),o),p(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let v=d.mat||t.revealMat||c,g=Math.max(0,h(d,d.u0+1e-7)),x=Math.max(0,h(d,d.u1-1e-7)),b=Math.min(d.head(d.u0+1e-7),i(d.u0)),y=Math.min(d.head(d.u1-1e-7),i(d.u1));b>g+1e-6&&Qt(e,p(d.u0,g,a),p(d.u0,g,o),p(d.u0,b,o),p(d.u0,b,a),[1,0,0],v),y>x+1e-6&&Qt(e,p(d.u1,x,o),p(d.u1,x,a),p(d.u1,y,a),p(d.u1,y,o),[-1,0,0],v);let E=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let _=0;_<E;_++){let z=d.u0+(d.u1-d.u0)*_/E,S=d.u0+(d.u1-d.u0)*(_+1)/E,L=Math.max(z,d.u0+1e-7),D=Math.min(S,d.u1-1e-7),O=Math.min(d.head(L),i(z)),G=Math.min(d.head(D),i(S));if(!(O>=i(z)-1e-6&&G>=i(S)-1e-6)){let K=S-z,Y=G-O,ee=Math.hypot(K,Y)||1;Qt(e,p(z,O,o),p(S,G,o),p(S,G,a),p(z,O,a),[Y/ee,-K/ee,0],v)}let C=h(d,L),R=h(d,D);if(C>1e-6||R>1e-6){let K=S-z,Y=R-C,ee=Math.hypot(K,Y)||1;Qt(e,p(S,R,o),p(z,C,o),p(z,C,a),p(S,R,a),[-Y/ee,K/ee,0],v)}}}}var Jl=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function o4(e,t){let r=kr.r,n=kr.sill,o=kr.spring,a=ge.z0,i=24,s=(u,p,d)=>[t+Math.cos(u)*p,d,a-Math.sin(u)*p];for(let u=0;u<i;u++){let p=Math.PI*u/i,d=Math.PI*(u+1)/i,v=[-Math.cos(p),0,Math.sin(p)],g=[-Math.cos(d),0,Math.sin(d)],x=[e.vert(s(p,r,n),v,ut),e.vert(s(d,r,n),g,ut),e.vert(s(d,r,o),g,ut),e.vert(s(p,r,o),v,ut)];e.tri(x[0],x[1],x[2]),e.tri(x[0],x[2],x[3])}let c=12,f=(u,p)=>[t+Math.cos(u)*Math.cos(p)*r,o+Math.sin(p)*r,a-Math.sin(u)*Math.cos(p)*r],l=(u,p)=>[-Math.cos(u)*Math.cos(p),-Math.sin(p),Math.sin(u)*Math.cos(p)];for(let u=0;u<i;u++)for(let p=0;p<c;p++){let d=Math.PI*u/i,v=Math.PI*(u+1)/i,g=Math.PI/2*p/c,x=Math.PI/2*(p+1)/c,b=[e.vert(f(d,g),l(d,g),oo),e.vert(f(v,g),l(v,g),oo),e.vert(f(v,x),l(v,x),oo),e.vert(f(d,x),l(d,x),oo)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let u=1;u<8;u++){let p=Math.PI*u/8,d=[];for(let v=0;v<=10;v++){let g=Math.PI/2*v/10*.97;d.push(f(p,g).map((x,b)=>x-l(p,g)[b]*.02))}e.tube(d,v=>.035*(1-v*.6),12,6,{mat:()=>oo})}let m=e.vert([t,n,a],[0,1,0],ut);for(let u=0;u<i;u++){let p=Math.PI*u/i,d=Math.PI*(u+1)/i;e.tri(m,e.vert(s(p,r,n),[0,1,0],ut),e.vert(s(d,r,n),[0,1,0],ut))}Lr(e,t-r-.12,n-.1,a,t+r+.12,n+.02,a+.12,ut),Lr(e,t-r-.16,n-.2,a,t+r+.16,n-.1,a+.07,ut);let h=.16;for(let u=0;u<i;u++){let p=Math.PI*u/i,d=Math.PI*(u+1)/i,v=(g,x,b)=>[t+Math.cos(g)*x,o+Math.sin(g)*x,b];Qt(e,v(p,r,a+.05),v(d,r,a+.05),v(d,r+h,a+.05),v(p,r+h,a+.05),[0,0,1],ut),Qt(e,v(p,r+h,a),v(d,r+h,a),v(d,r+h,a+.05),v(p,r+h,a+.05),[Math.cos((p+d)/2),Math.sin((p+d)/2),0],ut),Qt(e,v(p,r,a),v(d,r,a),v(d,r,a+.05),v(p,r,a+.05),[-Math.cos((p+d)/2),-Math.sin((p+d)/2),0],ut)}for(let u of[-1,1]){let p=t+u*r,d=t+u*(r+h);Lr(e,p,n,a,d,o,a+.05,ut),Lr(e,p-u*.02,o-.12,a,d+u*.06,o,a+.09,ut)}Lr(e,t-.11,o+r-.04,a,t+.11,o+r+h+.1,a+.09,ut),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>ut})}var a4=kr.sill+.4,i4=ge.z0-.62;function s4(e){Qt(e,[14,0,ge.z0-St],[ge.x1+St,0,ge.z0-St],[ge.x1+St,0,ge.z1+St],[14,0,ge.z1+St],[0,1,0],ut),e.curMat=es,rs(e,{u0:14+St,u1:ge.x1+2*St,w0:ge.z0-2*St,w1:ge.z0,top:()=>ge.spring,holes:I0.map(f=>({u0:f-kr.r,u1:f+kr.r,bottom:kr.sill,head:Jl(f,kr.r,kr.spring),noReveal:!0})),mat:es,cuts:[ge.x1]});for(let f of I0)o4(e,f);e.save(),e.translate(0,0,ge.z1),e.rotateY(Math.PI),e.translate(-(ge.x1+2*St),0,-2*St);let t=f=>ge.x1+2*St-f;rs(e,{u0:t(ge.x1+2*St),u1:t(13.65),w0:0,w1:2*St,top:()=>ge.spring,holes:un.map(f=>({u0:t(f+je.halfW),u1:t(f-je.halfW),bottom:je.sill,head:Jl(t(f),je.halfW,je.spring)})),mat:es,revealMat:ut}),e.restore(),e.save(),e.translate(ge.x1,0,0),e.rotateY(-Math.PI/2);let r=Za.DOOR,n=ge.zc,o=r.r;rs(e,{u0:ge.z0-2*St,u1:ge.z1+2*St,w0:-2*St,w1:0,top:f=>f<ge.z0||f>ge.z1?ge.spring:Qa(f),topStep:.15,holes:[{u0:n-o,u1:n+o,bottom:0,head:Jl(n,o,r.spring)}],mat:es,revealMat:ut}),e.restore(),e.save(),e.translate(14+St,0,0),e.rotateY(-Math.PI/2),rs(e,{u0:ge.z0,u1:ge.z1,w0:-0,w1:2*St,top:()=>tf,topStep:.15,holes:[{u0:ge.z0,u1:ge.z1,bottom:0,head:f=>Qa(f)}],mat:es,revealMat:ut}),e.restore();let a=14+St,i=Math.ceil((ge.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let l=a+(ge.x1-a)*f/i,m=[];for(let h=0;h<=s;h++){let u=ge.z0+(ge.z1-ge.z0)*h/s,p=Qa(u),d=[0,rf-p,ge.zc-u],v=Math.hypot(d[1],d[2]);m.push(e.vert([l,p,u],[0,d[1]/v,d[2]/v],oo))}c.push(m)}for(let f=0;f<i;f++)for(let l=0;l<s;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function jp(e,t,r,n){let a=[];for(let i=0;i<=32;i++){let s=ge.z0+(ge.z1-ge.z0)*i/32,c=Qa(s),f=rf-c,l=ge.zc-s,m=Math.hypot(f,l),h=[c+f/m*n,s+l/m*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,f/m,l/m]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Qt(e,[t-r,s.iy,s.iz],[t+r,s.iy,s.iz],[t+r,c.iy,c.iz],[t-r,c.iy,c.iz],s.n,ut),Qt(e,[t-r,s.y,s.z],[t-r,s.iy,s.iz],[t-r,c.iy,c.iz],[t-r,c.y,c.z],[-1,0,0],ut),Qt(e,[t+r,s.iy,s.iz],[t+r,s.y,s.z],[t+r,c.y,c.z],[t+r,c.iy,c.iz],[1,0,0],ut)}}function P0(e,t,r,n){let i=r,s=r+n*.16;Lr(e,t-.28,0,i,t+.28,ge.spring-.3,s,ut),Lr(e,t-.28-.06,0,i,t+.28+.06,.32,r+n*(.16+.05),ut),Lr(e,t-.28-.05,ge.spring-.3,i,t+.28+.05,ge.spring-.1,r+n*(.16+.05),ut),Lr(e,t-.28-.1,ge.spring-.1,i,t+.28+.1,ge.spring,r+n*(.16+.1),ut)}function c4(e,t){let r=Qa(ge.zc),n=[[0,r-.13,1],[.05,r-.125],[.12,r-.1],[.16,r-.06,1],[.22,r-.05],[.3,r-.075],[.4,r-.06],[.48,r-.03,1],[.55,r-.035],[.7,r-.025],[.82,r-.012,1],[.95,r+.03]];e.lathe(n,t,ge.zc,48,{mat:()=>oo});for(let o=0;o<8;o++){let a=o*Math.PI/4,i=t+Math.cos(a)*.32,s=ge.zc+Math.sin(a)*.32;e.save(),e.translate(i,r-.07,s),e.rotateY(-a),e.curMat=oo,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function l4(e){e.curMat=ut;for(let[t,r]of[[ge.z0,1],[ge.z1,-1]])Lr(e,14.35,ge.spring-.12,t,ge.x1,ge.spring,t+r*.1,ut),Lr(e,14.35,ge.spring-.04,t,ge.x1,ge.spring+.05,t+r*.18,ut);for(let[t,r]of[[ge.z0,1],[ge.z1,-1]])Lr(e,14.35,0,t,ge.x1,.42,t+r*.12,ut),Lr(e,14.35,.42,t,ge.x1,.5,t+r*.07,ut);for(let t of Wp)jp(e,t,.24,.16),P0(e,t,ge.z0,1),P0(e,t,ge.z1,-1);for(let t of[14.35+.28,ge.x1-.28])jp(e,t,.28,.22),P0(e,t,ge.z0,1),P0(e,t,ge.z1,-1);for(let t of un)c4(e,t)}function f4(e){let t=ge.z1+St,r=t-.04,n=t+.04,o=(s,c,f,l)=>Lr(e,s,c,r,f,l,n,ts),a=je.halfW,i=(s,c,f,l,m,h)=>{let u=(p,d,v)=>[s+d*Math.cos(p),je.spring+d*Math.sin(p),v];for(let p=0;p<h;p++){let d=l+(m-l)*p/h,v=l+(m-l)*(p+1)/h;Qt(e,u(d,c,r),u(v,c,r),u(v,f,r),u(d,f,r),[0,0,-1],ts),Qt(e,u(d,f,n),u(v,f,n),u(v,c,n),u(d,c,n),[0,0,1],ts)}};for(let s of un){let c=s-a,f=s+a;o(c,je.sill,c+.07,je.spring),o(f-.07,je.sill,f,je.spring),o(c,je.sill,f,je.sill+.07),o(c,je.spring-.04,f,je.spring+.04);for(let m of[-.5,0,.5])o(s+m*a-.022,je.sill,s+m*a+.022,je.spring);let l=6;for(let m=1;m<l;m++){let h=je.sill+(je.spring-je.sill)*m/l;o(c,h-.02,f,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let m=1;m<6;m++){let h=Math.PI*m/6,u=Math.cos(h),p=Math.sin(h),d=.02,v=(g,x)=>[s+u*g-p*d*x,je.spring+p*g+u*d*x];Qt(e,[...v(.44,-1),r],[...v(a-.05,-1),r],[...v(a-.05,1),r],[...v(.44,1),r],[0,0,-1],ts),Qt(e,[...v(.44,1),n],[...v(a-.05,1),n],[...v(a-.05,-1),n],[...v(.44,-1),n],[0,0,1],ts)}}}function h4(){let e=[],t=ge.z1+St;for(let r of un){let n=r-je.halfW,o=r+je.halfW;e.push([n,je.sill,t],[o,je.sill,t],[o,je.spring,t],[n,je.sill,t],[o,je.spring,t],[n,je.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([r,je.spring,t],[r+je.halfW*Math.cos(i),je.spring+je.halfW*Math.sin(i),t],[r+je.halfW*Math.cos(s),je.spring+je.halfW*Math.sin(s),t])}}return e}function Vp(e,t){e.save(),e.translate(ge.x1+St,0,ge.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function u4(e){Vp(e,()=>{Za.addSurround(e),Za.addFrames(e,"fixed")})}function d4(e){return Za.glassPanes(e||"fixed").map(([r,n,o])=>[ge.x1+St-o,n,ge.zc-7+r])}function p4(e){s4(e),l4(e),f4(e),u4(e),e.curMat=[0,0,0]}var v4={x:ge.x1+St,zLo:ge.zc-Za.DOOR.r,zHi:ge.zc+Za.DOOR.r},nt=e=>e.toFixed(4);function m4(){return`
	const vec3 WIN_SKY = vec3(0.0, 0.58, 0.81);

	float winBar(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the window wall is at (x, y) on its plane, 0..1
	float winOpen(vec2 q, float soft) {
		float k = floor((q.x - ${nt(je.first)}) / ${nt(je.pitch)} + 0.5);
		if (k < 0.0 || k > ${nt(je.count-1)}) return 0.0;
		float dx = q.x - (${nt(je.first)} + k * ${nt(je.pitch)});
		float side = 1.0 - smoothstep(${nt(je.halfW)} - soft, ${nt(je.halfW)} + soft, abs(dx));
		float sill = smoothstep(${nt(je.sill)} - soft, ${nt(je.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${nt(je.spring)}));
		float head = q.y < ${nt(je.spring)} ? 1.0 : 1.0 - smoothstep(${nt(je.halfW)} - soft, ${nt(je.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${nt(je.halfW*.5)}), 0.022, soft));
		float rowH = ${nt((je.spring-je.sill)/6)};
		float ry = (q.y - ${nt(je.sill)}) / rowH;
		cover = max(cover, q.y < ${nt(je.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${nt(je.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${nt(ge.x0)} || p.z < ${nt(ge.z0-.1)} || p.z > ${nt(ge.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${nt(ge.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${nt(ge.z1+2*St)} - p.z) / WIN_SKY.z;
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
		${I0.map(e=>`{ float d = abs(p.x - ${nt(e)}); if (d < best) { best = d; lamp = vec3(${nt(e)}, ${nt(kr.spring+.55)}, ${nt(ge.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${nt(ge.z0+1.6)} || p.z < ${nt(ge.z0-kr.r-.1)} || p.x < ${nt(ge.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${nt(kr.r)}, ${nt(kr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${nt(ge.x0-1)}) return 0.0;
		float inC = smoothstep(${nt(ge.z0-1.5)}, ${nt(ge.z0)}, p.z) * smoothstep(${nt(ge.x0-1)}, ${nt(ge.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${nt(ge.z0)}, ${nt(ge.z1)}, p.z);
		return inC * near;
	}`}Xp.exports={wallWithHoles:rs,windowLightGLSL:m4,addWing:p4,windowGlass:h4,farDoorGlass:d4,atFarDoor:Vp,FAR_DOOR:v4,vaultY:Qa,C:ge,NICHE_X:I0,NICHE:kr,NICHE_PLINTH_TOP:a4,NICHE_STATUE_Z:i4,WIN:je,winCentres:un,piers:Wp,PAINTING_X:n4,HEIGHT:tf}});var dn=J((KT,Qp)=>{"use strict";var nf=yr(),_t=8,ti=.35,Wo=14,ei=4,Ce={x0:Wo+ti,x1:Wo+ti+2*ei,z0:5.9-ei,z1:5.9+ei,zc:5.9,cx:Wo+ti+ei,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:_t},oculus:3.3};Ce.domeTop=Ce.dome.base+Ce.dome.r;var ri={spokes:16,ringE:[.42,.95],bar:.035},Wt={sxz:1.32,sy:1.6,yaw:.6};Wt.crownC=[Ce.cx,.4+3.4*Wt.sy,Ce.zc];Wt.crownR=[2.3*Wt.sxz,1.9*Wt.sy,2.3*Wt.sxz];Wt.trunkR=.26*Wt.sxz;Wt.trunkTop=.4+2.2*Wt.sy;var Yp={inner:1.05,outer:1.62,seat:.48,soil:.4},G0=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(r=>r/t)})(),Zt=[0,0,0],Ja=[11,0,0],O0=[10,0,0],D0=[9,0,0],g4=[5,0,0],of=[3,0,0];function Dn(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function br(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),s)}var x4=(e,t,r)=>n=>{let o=n-e;return r+Math.sqrt(Math.max(0,t*t-o*o))};function y4(e){e.save(),e.translate(Wo+ti,0,0),e.rotateY(-Math.PI/2),nf.wallWithHoles(e,{u0:0,u1:nf.C.z0,w0:0,w1:2*ti,top:()=>_t,holes:[{u0:Ce.zc-Ce.arch.r,u1:Ce.zc+Ce.arch.r,bottom:0,head:x4(Ce.zc,Ce.arch.r,Ce.arch.spring),step:.05}],mat:Ja,revealMat:Zt,topStep:1}),e.restore();let t=Wo-ti;for(let[i,s]of[[0,Ce.zc-Ce.arch.r],[Ce.zc+Ce.arch.r,nf.C.z0]])br(e,t-.12,0,i,t,.42,s,Zt),br(e,t-.07,.42,i,t,.5,s,Zt);let r=t,n=.24,o=40,a=(i,s,c)=>[c,Ce.arch.spring+Math.sin(i)*s,Ce.zc+Math.cos(i)*s];for(let i=0;i<o;i++){let s=Math.PI*i/o,c=Math.PI*(i+1)/o;Dn(e,a(s,Ce.arch.r,r-.07),a(c,Ce.arch.r,r-.07),a(c,Ce.arch.r+n,r-.07),a(s,Ce.arch.r+n,r-.07),[-1,0,0],Zt),Dn(e,a(s,Ce.arch.r+n,r),a(c,Ce.arch.r+n,r),a(c,Ce.arch.r+n,r-.07),a(s,Ce.arch.r+n,r-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Zt),Dn(e,a(s,Ce.arch.r,r),a(c,Ce.arch.r,r),a(c,Ce.arch.r,r-.07),a(s,Ce.arch.r,r-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Zt)}br(e,r-.12,Ce.arch.spring+Ce.arch.r-.06,Ce.zc-.17,r,Ce.arch.spring+Ce.arch.r+n+.16,Ce.zc+.17,Zt);for(let i of[-1,1]){let s=Ce.zc+i*Ce.arch.r,c=Ce.zc+i*(Ce.arch.r+n);br(e,r-.07,0,s,r,Ce.arch.spring,c,Zt),br(e,r-.13,Ce.arch.spring-.16,s-i*.03,r,Ce.arch.spring,c+i*.08,Zt),br(e,r-.12,0,s-i*.03,r,.5,c+i*.06,Zt)}}function b4(e){let{x0:t,x1:r,z0:n,z1:o}=Ce;Dn(e,[Wo,0,n],[r,0,n],[r,0,o],[Wo,0,o],[0,1,0],Zt),e.curMat=Ja,Dn(e,[r,0,n],[r,0,o],[r,_t,o],[r,_t,n],[-1,0,0],Ja),Dn(e,[t,0,n],[r,0,n],[r,_t,n],[t,_t,n],[0,0,1],Ja),Dn(e,[r,0,o],[t,0,o],[t,_t,o],[r,_t,o],[0,0,-1],Ja),Dn(e,[t,0,o],[t,0,n],[t,_t,n],[t,_t,o],[1,0,0],Ja),br(e,r-.12,0,n,r,.42,o,Zt),br(e,t,0,n,r,.42,n+.12,Zt),br(e,t,0,o-.12,r,.42,o,Zt),br(e,r-.2,_t-.3,n,r,_t,o,Zt),br(e,t,_t-.3,n,r,_t,n+.2,Zt),br(e,t,_t-.3,o-.2,r,_t,o,Zt),br(e,t,_t-.3,n,t+.2,_t,o,Zt);let a=Ce.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let x=Math.PI*2*g/i;s.push([Ce.cx+Math.cos(x)*a,Ce.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(ei/Math.max(x,1e-6),ei/Math.max(b,1e-6))};for(let g=0;g<i;g++){let x=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,y=c(x),E=c(b),_=[Ce.cx+Math.cos(x)*y,_t,Ce.zc+Math.sin(x)*y],z=[Ce.cx+Math.cos(b)*E,_t,Ce.zc+Math.sin(b)*E];Dn(e,[s[g][0],_t,s[g][1]],[s[g+1][0],_t,s[g+1][1]],z,_,[0,-1,0],O0)}e.lathe([[a+.02,_t-.18,1],[a-.12,_t-.18,1],[a-.12,_t-.06,1],[a-.05,_t,1],[a,_t+.02]],Ce.cx,Ce.zc,i,{mat:()=>Zt});let f=16,l=(g,x,b)=>[Ce.cx+Math.cos(g)*Math.cos(x)*b,Ce.dome.base+Math.sin(x)*b,Ce.zc+Math.sin(g)*Math.cos(x)*b],m=Math.PI/2;for(let g=0;g<i;g++)for(let x=0;x<f;x++){let b=Math.PI*2*g/i,y=Math.PI*2*(g+1)/i,E=m*x/f,_=m*(x+1)/f,z=(L,D)=>[-Math.cos(L)*Math.cos(D),-Math.sin(D),-Math.sin(L)*Math.cos(D)],S=[e.vert(l(b,E,a),z(b,E),D0),e.vert(l(y,E,a),z(y,E),D0),e.vert(l(y,_,a),z(y,_),D0),e.vert(l(b,_,a),z(b,_),D0)];e.tri(S[0],S[1],S[2]),e.tri(S[0],S[2],S[3])}for(let g=0;g<ri.spokes;g++){let x=Math.PI*2*g/ri.spokes,b=[];for(let y=0;y<=14;y++)b.push(l(x,(m-.06)*y/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>O0})}for(let g of ri.ringE){let x=Math.cos(g)*(a-.04),b=Ce.dome.base+Math.sin(g)*(a-.04),y=[];for(let E=0;E<=72;E++){let _=Math.PI*2*E/72;y.push([Ce.cx+Math.cos(_)*x,b,Ce.zc+Math.sin(_)*x])}e.tube(y,()=>.035,72,6,{mat:()=>O0})}e.ellipsoid([Ce.cx,Ce.dome.base+a-.06,Ce.zc],[.16,.08,.16],6,12,{mat:()=>O0});let h=.46,u=.55,p=.12,d=(g,x,b,y)=>{br(e,g,h-.08,x,b,h,y,of);let E=b-g>y-x?[g+.25,b-.25]:[g+.06,b-.06],_=b-g>y-x?[x+.06,y-.06]:[x+.25,y-.25];br(e,E[0],0,_[0],E[1],h-.08,_[1],of)};d(r-p-u,n+1.1,r-p,o-1.1),d(t+1,n+p,r-1.1,n+p+u),d(t+1,o-p-u,r-1.1,o-p);let v=Yp;e.lathe([[v.outer,0,1],[v.outer,v.seat-.1,1],[v.outer+.07,v.seat-.07,1],[v.outer+.07,v.seat,1],[v.inner-.05,v.seat,1],[v.inner-.05,v.seat-.06,1],[v.inner,v.seat-.08,1],[v.inner,v.soil]],Ce.cx,Ce.zc,64,{mat:()=>of}),e.lathe([[v.inner,v.soil,1],[0,v.soil+.03]],Ce.cx,Ce.zc,48,{mat:()=>g4})}function w4(e){y4(e),b4(e),e.curMat=[0,0,0]}var dt=e=>e.toFixed(4);function Kp(){let e=Ce.dome.r,t=ri.ringE.map(r=>Math.cos(r)*e);return`
	const vec3 SHAFT = vec3(${dt(G0[0])}, ${dt(G0[1])}, ${dt(G0[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${dt(Ce.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${dt(Ce.cx)}, ${dt(Ce.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${dt(e-.15)} - soft, ${dt(e-.15)} + soft, d);
		float hw = ${dt(ri.bar)};
		float cover = 0.0;
		${t.map(r=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${dt(r)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${dt(Math.PI*2/ri.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${dt(Wt.crownC[0])}, ${dt(Wt.crownC[1])}, ${dt(Wt.crownC[2])});
		vec3 r = vec3(${dt(Wt.crownR[0])}, ${dt(Wt.crownR[1])}, ${dt(Wt.crownR[2])});
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
		float tt = (${dt(Wt.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${dt(Ce.cx)}, ${dt(Ce.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${dt(Wt.trunkR*.7)}, ${dt(Wt.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function _4(){return`
	${Kp()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${dt(Ce.x0-.75)} || p.z < ${dt(Ce.z0-.5)} || p.z > ${dt(Ce.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${dt(Ce.x0-1.5)} || p.z < ${dt(Ce.z0-1.5)} || p.z > ${dt(Ce.z1+1.5)}) return 0.0;
		float inside = smoothstep(${dt(Ce.x0-1.2)}, ${dt(Ce.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${dt(Ce.cx)}, ${dt(Ce.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Qp.exports={addAlcove:w4,alcoveLightGLSL:_4,oculusGLSL:Kp,A:Ce,BENCH:Yp,SHAFT:G0,TREE:Wt}});var ur=J((QT,ev)=>{"use strict";var Jp="gallery-light",Yr=0;try{let e=location.search;/[?&]night\b/.test(e)?Yr=1:/[?&]day\b/.test(e)?Yr=0:localStorage.getItem(Jp)==="night"&&(Yr=1)}catch(e){}var ao=Yr,af=0,Zp=[],F0={tick(e){let t=af?Math.min(.1,e-af):0;if(af=e,ao!==Yr){let r=t/2.4;ao=Yr>ao?Math.min(Yr,ao+r):Math.max(Yr,ao-r)}return F0.night},get night(){return ao*ao*(3-2*ao)},get isNight(){return Yr===1},set(e){Yr=e?1:0;try{localStorage.setItem(Jp,e?"night":"day")}catch(t){}Zp.forEach(t=>t(Yr))},toggle(){F0.set(!Yr)},onChange(e){Zp.push(e)}};F0.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;ev.exports=F0});var Vo=J((ZT,as)=>{"use strict";var sf=ur(),{C:cf}=yr(),{A:q0,BENCH:ns}=dn(),Vt=Math.PI,E4=[18,29,40],$0=.575,io=[],os=(e,t,r,n,o,a,i)=>io.push(Object.assign({x:e,y:t,z:r,o:n,back:o,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));E4.forEach(e=>{os(1.25+$0+.48,3.25,e,[1,0],.48,$0,{s:1.2}),os(12.75-$0-.48,3.25,e,[-1,0],.48,$0,{s:1.2})});[3,11].forEach(e=>os(e,3.45,cf.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var M4=[14.63,19.63,24.03,28.43,32.83,cf.x1-.28];M4.forEach(e=>os(e,3.15,cf.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>os(.35+.44,2.75,e,[1,0],.44,99));{let e=(ns.inner+ns.outer)/2,t=Math.atan2(-1.12,-.98);io.push({x:q0.cx+Math.cos(t)*e,y:ns.seat+.155,z:q0.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[q0.cx,q0.zc,ns.outer+.07,ns.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var lf=.13,H0=.21,Jt=lf/Math.cos(Vt/6),ct=e=>e.toFixed(4);function tv(e){let r=(e||io.map((n,o)=>o)).map(n=>{let o=io[n],a=-o.o[1],i=o.o[0],s=o.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${ct(o.ring[3]-.03)}) {
					float tt = ${ct(o.y-o.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${ct(o.x)}, ${ct(o.z)}) + D.xz * tt - vec2(${ct(o.ring[0])}, ${ct(o.ring[1])});
					T *= smoothstep(${ct(o.ring[2]-.02)}, ${ct(o.ring[2]+.12)}, length(hit));
				}`:"",c=o.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${ct(o.o[0])}, ${ct(o.o[1])}));
					if (behind > ${ct(o.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${ct(a)}, ${ct(i)}))) * ${ct(o.back)} / behind;
						T *= smoothstep(${ct(o.hw-.04)}, ${ct(o.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${ct(o.x)}, ${ct(o.y)}, ${ct(o.z)});
				float d2 = dot(D, D);
				if (d2 < ${ct(o.range*o.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${ct(Math.cos(Math.atan2(o.o[1],o.o[0])))}, s = ${ct(Math.sin(Math.atan2(o.o[1],o.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${ct(n*1.7)}) + 0.04 * sin(time * 15.3 + ${ct(n*2.9)}) * sin(time * 1.9 + ${ct(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${ct(1/(o.s*o.s))}) * (1.0 - smoothstep(${ct(o.range*.6)}, ${ct(o.range)}, d));
					sum += ${ct(o.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${ct(Vt/6)}, ${ct(Vt/3)}) - ${ct(Vt/6)};
		float U = tan(t) / ${ct(Math.tan(Vt/6))};
		float V = (q.y / h) * (${ct(lf/H0)} / cos(t));
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
	}`}var kt=0,A4=1;function T4(){let e=[],t=[],r=[],n=[],o=[],a=(u,p,d,v)=>(e.push(u[0],u[1],u[2]),t.push(p[0],p[1],p[2]),r.push(d),n.push(v?v[0]:0,v?v[1]:0),e.length/3-1),i=(u,p)=>[u[0]-p[0],u[1]-p[1],u[2]-p[2]],s=(u,p)=>[u[1]*p[2]-u[2]*p[1],u[2]*p[0]-u[0]*p[2],u[0]*p[1]-u[1]*p[0]],c=u=>{let p=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/p,u[1]/p,u[2]/p]};function f(u,p,d,v,g,x){let b=c(s(i(p,u),i(v,u))),y=a(u,b,g,[0,0]),E=a(p,b,g,[1,0]),_=a(d,b,g,[1,1]),z=a(v,b,g,[0,1]);o.push(y,E,_,y,_,z),x&&o.push(y,_,E,y,z,_)}function l(u,p,d){for(let x=0;x<u.length;x++){let b=u[Math.max(0,x-1)],y=u[Math.min(u.length-1,x+1)],E=c(i(y,b)),_=Math.abs(E[1])>.9?[1,0,0]:[0,1,0],z=c(s(E,_)),S=s(z,E),L=typeof p=="function"?p(x/(u.length-1)):p;for(let D=0;D<=6;D++){let O=D/6*Vt*2,G=Math.cos(O),C=Math.sin(O),R=[z[0]*G+S[0]*C,z[1]*G+S[1]*C,z[2]*G+S[2]*C];a([u[x][0]+R[0]*L,u[x][1]+R[1]*L,u[x][2]+R[2]*L],R,d)}}let g=e.length/3-u.length*7;for(let x=0;x<u.length-1;x++)for(let b=0;b<6;b++){let y=g+x*7+b,E=y+6+1;o.push(y,E,y+1,y+1,E,E+1)}}function m(u,p,d,v,g,x,b,y,E){let _=(z,S,L)=>{let D=x+Vt/6+L*Vt/3;return[u[0]+Math.cos(D)*z,S,u[2]+Math.sin(D)*z]};for(let z=0;z<6;z++)f(_(v,p,z+1),_(v,p,z),_(g,d,z),_(g,d,z+1),b);if(y&&g>0)for(let z=0;z<6;z++){let S=a([u[0],d,u[2]],[0,1,0],b),L=a(_(g,d,z),[0,1,0],b),D=a(_(g,d,z+1),[0,1,0],b);o.push(S,D,L)}if(E&&v>0)for(let z=0;z<6;z++){let S=a([u[0],p,u[2]],[0,-1,0],b),L=a(_(v,p,z),[0,-1,0],b),D=a(_(v,p,z+1),[0,-1,0],b);o.push(S,L,D)}}function h(u,p,d,v,g,x,b){let y=[];for(let _=0;_<=18;_++){let z=_/18,S=(b||0)+z*v*Vt*2,L=d*(1-.75*z);y.push([u[0]+p[0]*Math.cos(S)*L,u[1]+Math.sin(S)*L,u[2]+p[2]*Math.cos(S)*L])}l(y,g,x)}return io.forEach(u=>{let p=u.s,d=Math.atan2(u.o[1],u.o[0]),v=[u.x,u.y,u.z],g=(y,E,_)=>[u.x+u.o[0]*y-u.o[1]*(_||0),u.y+E,u.z+u.o[1]*y+u.o[0]*(_||0)],x=u.y-H0*p,b=u.y+H0*p;for(let y=0;y<6;y++){let E=d+Vt/6+y*Vt/3,_=E+Vt/3,z=Jt*p*.97,S=[u.x+Math.cos(E)*z,x,u.z+Math.sin(E)*z],L=[u.x+Math.cos(_)*z,x,u.z+Math.sin(_)*z];f(L,S,[S[0],b,S[2]],[L[0],b,L[2]],A4,!0)}for(let y=0;y<6;y++){let E=d+Vt/6+y*Vt/3,_=Jt*p;l([[u.x+Math.cos(E)*_,x-.02*p,u.z+Math.sin(E)*_],[u.x+Math.cos(E)*_,b+.02*p,u.z+Math.sin(E)*_]],.011*p,kt)}m(v,x-.035*p,x,Jt*p*1.12,Jt*p*1.12,d,kt,!0,!0),m(v,x-.1*p,x-.035*p,Jt*p*.55,Jt*p*1,d,kt,!1,!0),m(v,x-.17*p,x-.1*p,0,Jt*p*.55,d,kt,!1,!1);for(let y=0;y<6;y++){let E=d+y*Vt/3,_=lf*p*1.06,z=[u.x+Math.cos(E)*_,x-.06*p,u.z+Math.sin(E)*_];h(z,[-Math.sin(E),0,Math.cos(E)],.03*p,.85,.004*p,kt,.3)}m(v,b,b+.03*p,Jt*p*1.14,Jt*p*1.14,d,kt,!1,!0),m(v,b+.03*p,b+.2*p,Jt*p*1.14,Jt*p*.32,d,kt,!1,!1),m(v,b+.2*p,b+.27*p,Jt*p*.34,Jt*p*.34,d,kt,!1,!1),m(v,b+.27*p,b+.37*p,Jt*p*.42,0,d,kt,!1,!0),l([[u.x,b+.36*p,u.z],[u.x,b+.47*p,u.z]],y=>.01*p*(1-.7*y),kt),m([u.x,0,u.z],b+.44*p,b+.47*p,.018*p,0,d,kt,!1,!0);for(let y=0;y<6;y++){let E=d+Vt/6+y*Vt/3,_=Jt*p*1.14,z=[u.x+Math.cos(E)*_,b+.03*p,u.z+Math.sin(E)*_];l([z,[z[0],z[1]+.09*p,z[2]]],S=>.008*p*(1-.8*S),kt),m([z[0],0,z[2]],z[1]+.035*p,z[1]+.06*p,.014*p,.014*p,E,kt,!0,!0)}if(u.mount==="wall"){let y=u.back,E=x-.32,_=g(-y,0,0);((O,G,C)=>{let R=[u.o[0],0,u.o[1]],K=[-u.o[1],0,u.o[0]],Y=(he,ve,we)=>[_[0]+K[0]*he+R[0]*we,ve,_[2]+K[2]*he+R[2]*we],ee=.03,V=.065;f(Y(-C,O,V),Y(C,O,V),Y(C,G,V),Y(-C,G,V),kt,!0),f(Y(C,O,ee),Y(C,O,V),Y(C,G,V),Y(C,G,ee),kt,!0),f(Y(-C,O,V),Y(-C,O,ee),Y(-C,G,ee),Y(-C,G,V),kt,!0),f(Y(-C,G,V),Y(C,G,V),Y(C,G,ee),Y(-C,G,ee),kt,!0),f(Y(-C,O,ee),Y(C,O,ee),Y(C,O,V),Y(-C,O,V),kt,!0),m([_[0]+R[0]*V,0,_[2]+R[2]*V],G,G+.05,C*.6,0,d,kt,!1,!0),m([_[0]+R[0]*V,0,_[2]+R[2]*V],O-.05,O,0,C*.6,d,kt,!1,!1)})(E-.2,E+.2,.07);let S=[];for(let O=0;O<=14;O++){let G=O/14,C=-y+.05+G*(y-.05),R=E+.04+(x-.17*p-E-.04)*Math.pow(G,2.2);S.push(g(C,R-u.y,0))}l(S,O=>.022*(1-.3*O),kt);let L=[];for(let O=0;O<=10;O++){let G=O/10;L.push(g(-y+.05+G*y*.6,E-.14+G*.16+.05*Math.sin(G*Vt)-u.y,0))}l(L,.009,kt);let D=L[L.length-1];h([D[0]-u.o[0]*.03,D[1]+.02,D[2]-u.o[1]*.03],[u.o[0],0,u.o[1]],.045,1.1,.007,kt,-.4),[.3,.55].forEach(O=>{let G=S[Math.round(O*14)],C=L[Math.round(O/.62*10)]||L[10];l([G,C],.006,kt)}),[-1,1].forEach(O=>{let G=g(-.05,-H0*p-.2*p,0);h([G[0]-u.o[1]*O*.05,G[1],G[2]+u.o[0]*O*.05],[-u.o[1]*O,0,u.o[0]*O],.05*p,.9,.006,kt,Vt)})}else for(let y=0;y<3;y++){let E=d+y*Vt*2/3,_=[u.x+Math.cos(E)*Jt*p*.7,x-.035*p,u.z+Math.sin(E)*Jt*p*.7],z=[u.x+Math.cos(E)*Jt*p*1.25,x-.17*p,u.z+Math.sin(E)*Jt*p*1.25];l([_,z],.012*p,kt)}}),{pos:e,nrm:t,kind:r,uv:n,elems:o}}as.exports=e=>{let t=T4(),r=e({vert:`
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
		${tv()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>sf.night}}),n=[],o=[];io.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),o.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:o},count:n.length/2,uniforms:{time:e.context("time"),night:()=>sf.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r(),sf.night>.01&&a()}};as.exports.lanternGLSL=tv;as.exports.LANTERNS=io;as.exports.TREE_LANTERN=[io.length-1]});var is=J((JT,Jr)=>{"use strict";var rv=ur(),co=Math.PI,Be=e=>(+e).toFixed(4),En=e=>`vec3(${Be(e[0])}, ${Be(e[1])}, ${Be(e[2])})`,yt={x0:-2.05,z0:41.45,z1:47.55,top:5.1},lt=-.55,Xt=-2,Dt=42.25,rr=43.65,Zr=45.35,wr=46.75,er=2.75,pn=.12,S4=(lt+Xt)/2,pt={x:-1.3,y:1.42,w:.42,h:.52,z:rr,cell:.026},Ye={x0:-1.85,x1:-.75,top:.98,z0:rr-.3,z1:rr-.02},Kr={x0:-1.44,x1:-1.16,y0:Ye.top-.002,y1:Ye.top+.018},Fr={cx:-1.3,cz:rr-.165,w:.2,d:.255,y:Ye.top+.0012},ir={x:-1.03,z:rr-.14,r:.042,h:.075},Et={x:-.86,z:rr-.12,h:.085,r:.019};Et.flame=[Et.x,Ye.top+.012+Et.h+.028,Et.z];var U0={a:[ir.x-.004,Ye.top+.03,ir.z+.004],b:[ir.x-.13,Ye.top+.34,ir.z-.12]},Rt=[-1.5,2.42,44.66],Bt=[-1.78,1.95,Dt+.09],Qr={x:-1.32,z:44.08,y:.64,heading:.32},k4={window:{eye:[-1.3,1.33,42.8],target:[pt.x,1.37,rr],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[Fr.cx,Ye.top,Fr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},so={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function nv(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${Be(pt.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${En(Rt)};
		if (d.z > -0.001) return 0.0;
		float t = (${Be(pt.z)} - ${Be(Rt[2])}) / d.z;
		vec2 g = (${En(Rt)} + d * t).xy - vec2(${Be(pt.x)}, ${Be(pt.y)});
		float inWin = (1.0 - smoothstep(${Be(pt.w/2-.01)}, ${Be(pt.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${Be(pt.h/2-.01)}, ${Be(pt.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${Be(pt.z)}) / abs(${Be(pt.z)} - ${Be(Rt[2])}) / ${Be(pt.cell)};
		vec2 qc = fract(g / ${Be(pt.cell)} + 0.5) - 0.5;
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
		vec3 c = ${En(Et.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${Be(ir.x)}, ${Be(ir.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${Be(ir.x)}, ${Be(ir.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${Be(ir.r*.7)}, ${Be(ir.r*1.6)}, r)) * (1.0 - smoothstep(${Be(Ye.top+ir.h*.8)}, ${Be(Ye.top+ir.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${En(U0.a)}, qb = ${En(U0.b)};
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
		bool inB1 = p.z < ${Be(rr)} && p.z > ${Be(Dt-.04)} && p.x < ${Be(lt+.02)};
		bool inPriest = p.z >= ${Be(rr)} && p.z < ${Be(Zr)} && p.x < ${Be(lt)};
		bool inB2 = p.z >= ${Be(Zr)} && p.z < ${Be(wr+.04)} && p.x < ${Be(lt)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${Be(Xt)}, ${Be(lt)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${Be(yt.x0)}, 0.3, p.x));
		vec3 hall = vec3(1.25, 1.12, 0.94) * (0.62 + 0.38 * max(N.x, 0.0)) * (0.8 + 0.2 * N.y);
		vec3 col = toNight(hall * open, 0.55) * mix(1.0, (inB1 || inPriest || inB2) ? 0.3 : 0.55, night);
		// the lamp, warm, behind the brass
		vec3 Ld = ${En(Rt)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${En(Bt)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${En(Et.flame)} - p;
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
	}`}var tr={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function ov(){let e=[],t=[],r=[],n=[],o=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],i=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],s=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:r,uv:n,idx:o,norm:s,cross:i,sub:a};return c.v=(f,l,m,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),r.push(m),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,m,h,u,p)=>{let d=s(i(a(l,f),a(h,f)));p=p||[[0,0],[1,0],[1,1],[0,1]];let v=c.v(f,d,u,p[0]),g=c.v(l,d,u,p[1]),x=c.v(m,d,u,p[2]),b=c.v(h,d,u,p[3]);o.push(v,g,x,v,x,b)},c.box=(f,l,m,h,u,p,d)=>{let v=(g,x,b,y,E,_,z,S)=>c.quad(g,x,b,y,d,[[E,z],[_,z],[_,S],[E,S]]);v([h,l,m],[h,l,p],[h,u,p],[h,u,m],m,p,l,u),v([f,l,p],[f,l,m],[f,u,m],[f,u,p],p,m,l,u),v([f,u,m],[h,u,m],[h,u,p],[f,u,p],f,h,m,p),v([f,l,p],[h,l,p],[h,l,m],[f,l,m],f,h,p,m),v([f,l,p],[h,l,p],[h,u,p],[f,u,p],f,h,l,u),v([h,l,m],[f,l,m],[f,u,m],[h,u,m],h,f,l,u)},c.tube=(f,l,m,h)=>{h=h||6;let u=e.length/3;for(let p=0;p<f.length;p++){let d=f[Math.max(0,p-1)],v=f[Math.min(f.length-1,p+1)],g=s(a(v,d)),x=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,x)),y=i(b,g),E=typeof l=="function"?l(p/(f.length-1)):l;for(let _=0;_<=h;_++){let z=_/h*co*2,S=Math.cos(z),L=Math.sin(z),D=[b[0]*S+y[0]*L,b[1]*S+y[1]*L,b[2]*S+y[2]*L];c.v([f[p][0]+D[0]*E,f[p][1]+D[1]*E,f[p][2]+D[2]*E],D,m,[p/(f.length-1),_/h])}}for(let p=0;p<f.length-1;p++)for(let d=0;d<h;d++){let v=u+p*(h+1)+d,g=v+h+1;o.push(v,v+1,g,v+1,g+1,g)}},c.lathe=(f,l,m,h,u)=>{u=u||20;let p=e.length/3;for(let d=0;d<m.length;d++){let[v,g]=m[d],x=m[Math.max(0,d-1)],b=m[Math.min(m.length-1,d+1)],y=b[0]-x[0],E=b[1]-x[1];for(let _=0;_<=u;_++){let z=_/u*co*2,S=Math.cos(z),L=Math.sin(z),D=s([E*S,-y,E*L]);c.v([f+S*v,g,l+L*v],D,h,[_/u,d/(m.length-1)])}}for(let d=0;d<m.length-1;d++)for(let v=0;v<u;v++){let g=p+d*(u+1)+v,x=g+u+1;o.push(g,x,g+1,g+1,x,x+1)}},c.spire=(f,l,m,h,u,p)=>{let d=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let v=0;v<4;v++){let g=d[v],x=d[(v+1)%4],b=[f+g[0],m,l+g[1]],y=[f+x[0],m,l+x[1]],E=[f,u,l],_=s(i(a(E,b),a(y,b))),z=c.v(b,_,p,[0,0]),S=c.v(y,_,p,[1,0]),L=c.v(E,_,p,[.5,1]);o.push(z,L,S)}},c.orient=()=>{for(let f=0;f<o.length;f+=3){let[l,m,h]=[o[f],o[f+1],o[f+2]],u=v=>[e[v*3],e[v*3+1],e[v*3+2]],p=i(a(u(m),u(l)),a(u(h),u(l))),d=[0,1,2].map(v=>t[l*3+v]+t[m*3+v]+t[h*3+v]);p[0]*d[0]+p[1]*d[1]+p[2]*d[2]<0&&(o[f+1]=h,o[f+2]=m)}return c},c}function B0(e,t,r,n){if(e<=t)return r;let o=e-t;return o>=n?0:Math.max(0,Math.sqrt(n*n-o*o)-(n-r))}var Ct={ys:1.78,a:.56,r:.78};Ct.apex=Ct.ys+Math.sqrt(Ct.r*Ct.r-(Ct.r-Ct.a)*(Ct.r-Ct.a));function L4(){let e=ov(),t=tr.WOOD,r=tr.CARVED,n=tr.DARKWOOD,o=.06;e.box(Xt,0,Dt,lt+.08,pn,wr,n),e.box(Xt,er-.06,Dt-.04,lt+.1,er,wr+.04,t),e.box(lt,er-.2,Dt-.06,lt+.12,er-.06,wr+.06,t),e.box(lt+.02,er,Dt-.08,lt+.14,er+.07,wr+.08,n),e.box(Xt,pn,Dt,Xt+.04,er-.06,wr,t);for(let[l,m,h]of[[Dt-o,Dt,-1],[wr,wr+o,1]]){e.box(Xt,0,l,lt+.08,er,m,t);let u=h<0?l-.018:m;e.box(Xt+.18,.45,Math.min(u,u+.018),lt-.12,2.35,Math.max(u,u+.018),n),e.box(Xt+.26,.55,Math.min(u,u+.03*h),lt-.2,2.25,Math.max(u,u+.03*h),t)}{let l=rr-.02,m=rr+.02,h=pt.x-pt.w/2,u=pt.x+pt.w/2,p=pt.y-pt.h/2,d=pt.y+pt.h/2;e.box(Xt,pn,l,lt,Kr.y0,m,t),e.box(Xt,Kr.y0,l,Kr.x0,Kr.y1,m,t),e.box(Kr.x1,Kr.y0,l,lt,Kr.y1,m,t),e.box(Xt,Kr.y1,l,lt,p,m,t),e.box(Xt,p,l,h,d,m,t),e.box(u,p,l,lt,d,m,t),e.box(Xt,d,l,lt,er-.06,m,t);let v=.05,g=l-.025;e.box(h-v,p-v,g,u+v,p,l,n),e.box(h-v,d,g,u+v,d+v,l,n),e.box(h-v,p,g,h,d,l,n),e.box(u,p,g,u+v,d,l,n),e.box(h-v-.02,d+v,g-.015,u+v+.02,d+v+.03,l,t),e.box(Kr.x0-.01,Kr.y1,l-.006,Kr.x1+.01,Kr.y1+.008,l,tr.BRASS)}e.box(Xt,pn,Zr-.02,lt,er-.06,Zr+.02,t),e.box(Ye.x0,Ye.top-.035,Ye.z0,Ye.x1,Ye.top,Ye.z1,t),e.tube([[Ye.x0,Ye.top-.018,Ye.z0],[Ye.x1,Ye.top-.018,Ye.z0]],.02,t,8);for(let l of[Ye.x0+.1,Ye.x1-.1]){let m=[];for(let h=0;h<=8;h++){let u=h/8;m.push([l,Ye.top-.04-.22*u,Ye.z1-.02-.22*Math.cos(u*co/2)])}e.tube(m,.018,n,6)}e.box(Xt+.06,.12,Dt,lt-.1,.44,Dt+.42,n),e.box(Xt+.08,.44,Dt+.01,lt-.12,.52,Dt+.41,tr.CUSHION),e.box(Xt+.06,.12,wr-.42,lt-.1,.44,wr,n),e.box(Bt[0]-.05,Bt[1]-.16,Dt,Bt[0]+.05,Bt[1]-.02,Dt+.012,tr.BRASS),e.tube([[Bt[0],Bt[1]-.09,Dt+.012],[Bt[0],Bt[1]-.09,Bt[2]-.01],[Bt[0],Bt[1]-.05,Bt[2]]],.006,tr.BRASS,6),e.lathe(Bt[0],Bt[2],[[0,Bt[1]-.05],[.028,Bt[1]-.035],[.034,Bt[1]+.01],[.024,Bt[1]+.06],[.026,Bt[1]+.065]],tr.LAMPGLASS,16),e.box(Qr.x-.22,.12,Qr.z-.24,Qr.x+.22,Qr.y-.05,Qr.z+.16,n),e.box(Qr.x-.24,Qr.y-.05,Qr.z-.26,Qr.x+.24,Qr.y,Qr.z+.18,tr.CUSHION),e.tube([[Rt[0],er-.06,Rt[2]],[Rt[0],Rt[1]+.07,Rt[2]]],.005,tr.BRASS,5),e.lathe(Rt[0],Rt[2],[[0,Rt[1]+.09],[.03,Rt[1]+.08],[.02,Rt[1]+.06]],tr.BRASS,12),e.lathe(Rt[0],Rt[2],[[0,Rt[1]-.06],[.035,Rt[1]-.04],[.045,Rt[1]],[.035,Rt[1]+.05],[.018,Rt[1]+.07]],tr.LAMPGLASS,16);let a=lt,i=lt+o;function s(l,m,h){let u=(l+m)/2,p=40,d=[];for(let g=0;g<=p;g++)d.push(pn+(er-.2-pn)*g/p);let v=[];d.forEach(g=>v.push(g));for(let g=1;g<24;g++)v.push(Ct.ys+(Ct.apex-Ct.ys)*g/24);v.sort((g,x)=>g-x);for(let g=0;g<v.length-1;g++){let x=v[g],b=v[g+1];if(b-x<1e-4)continue;let y=h?B0(x,Ct.ys,Ct.a,Ct.r):0,E=h?B0(b,Ct.ys,Ct.a,Ct.r):0,_=(z,S)=>[z,S];e.quad([i,x,u-y],[i,x,l],[i,b,l],[i,b,u-E],t,[_(u-y,x),_(l,x),_(l,b),_(u-E,b)]),e.quad([i,x,m],[i,x,u+y],[i,b,u+E],[i,b,m],t,[_(m,x),_(u+y,x),_(u+E,b),_(m,b)]),(y>0||E>0)&&(e.quad([a,x,u-y],[i,x,u-y],[i,b,u-E],[a,b,u-E],n),e.quad([i,x,u+y],[a,x,u+y],[a,b,u+E],[i,b,u+E],n),e.quad([a,x,l],[a,x,u-y],[a,b,u-E],[a,b,l],t),e.quad([a,x,u+y],[a,x,m],[a,b,m],[a,b,u+E],t))}if(e.box(a,er-.2,l,i,er-.06,m,t),e.box(i,er-.42,l+.05,i+.012,er-.24,m-.05,r),h){let g=[];for(let x=0;x<=30;x++){let b=x/30,y=b<.5?pn+(Ct.apex-pn)*(b*2):Ct.apex-(Ct.apex-pn)*((b-.5)*2),E=b<.5?-1:1;g.push([i+.01,Math.min(y,Ct.apex-.002),u+E*(B0(y,Ct.ys,Ct.a,Ct.r)+.03)])}e.tube(g,.022,n,6)}}s(Dt,rr,!0),s(Zr,wr,!0);{let l=rr,m=Zr,h=(l+m)/2;e.box(a,pn,l,i,er-.06,m,t);let u={ys:1.85,a:.55,r:.8},p=[];for(let d=0;d<=40;d++){let v=d/40,g=u.ys+Math.sqrt(u.r*u.r-(u.r-u.a)*(u.r-u.a)),x=v<.5?.35+(g-.35)*(v*2):g-(g-.35)*((v-.5)*2),b=v<.5?-1:1;p.push([i+.012,Math.min(x,g-.002),h+b*B0(x,u.ys,u.a,u.r)])}p.push(p[0]),e.tube(p,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,r),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,m-.13],[i+.06,1.12,m-.13],[i+.06,1.12,m-.2]],.009,tr.BRASS,6)}[Dt-.02,rr,Zr,wr+.02].forEach((l,m)=>{let h=m===1||m===2,u=.075,p=er+(h?.62:.4);e.box(lt+.06,0,l-u,lt+.06+2*u,p,l+u,t),e.box(lt+.04,p-.04,l-u-.02,lt+.08+2*u,p,l+u+.02,n);let d=lt+.06+u,v=h?.62:.5;e.spire(d,l,p,u*.95,p+v,t);for(let g=1;g<=3;g++){let x=p+v*g/4.2,b=u*.95*(1-g/4.2)+.02;for(let[y,E]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[d+y*(b-.02),x-.02,l+E*(b-.02)],[d+y*(b+.015),x+.03,l+E*(b+.015)]],.008,n,4)}e.lathe(d,l,[[0,p+v-.02],[.03,p+v+.03],[.022,p+v+.07],[0,p+v+.1]],t,10)});let f=(l,m,h)=>{let u=(l+m)/2,p=lt+.075,d=er+.07,v=d+h,g=[1,0,0],x=e.v([p,d,l],g,r,[l,d]),b=e.v([p,d,m],g,r,[m,d]),y=e.v([p,v,u],g,r,[u,v]);e.idx.push(x,b,y);let E=e.v([p-.04,d,l],[-1,0,0],t),_=e.v([p-.04,d,m],[-1,0,0],t),z=e.v([p-.04,v,u],[-1,0,0],t);e.idx.push(E,z,_);let S=[],L=[];for(let C=0;C<=10;C++){let R=C/10;S.push([p+.02,d+h*R,l+(u-l)*R]),L.push([p+.02,d+h*R,m+(u-m)*R])}e.tube(S,.022,n,6),e.tube(L,.022,n,6);for(let C=2;C<=8;C+=2)for(let R of[S[C],L[C]])e.tube([R,[R[0]+.01,R[1]+.06,R[2]+(R===S[C]?-.02:.02)]],.01,n,4);e.lathe(p,u,[[0,v],[.035,v+.06],[.022,v+.12],[0,v+.16]].map(([C,R])=>[C,R]),t,10);let D=Math.min(.17,h*.32),O=d+h*.38,G=[];for(let C=0;C<=24;C++){let R=C/24*co*2;G.push([p+.012,O+Math.sin(R)*D,u+Math.cos(R)*D])}e.tube(G,.012,n,5)};f(Dt-.02,rr,.52),f(rr,Zr,.82),f(Zr,wr+.02,.52),e.lathe(ir.x,ir.z,[[0,Ye.top],[.036,Ye.top+.001],[ir.r,Ye.top+.012],[ir.r*1.02,Ye.top+.035],[.036,Ye.top+.052],[.02,Ye.top+.062],[.016,Ye.top+.068]],tr.INKGLASS,24),e.lathe(ir.x,ir.z,[[.016,Ye.top+.064],[.021,Ye.top+.066],[.022,Ye.top+.075],[.016,Ye.top+.076],[0,Ye.top+.072]],tr.BRASS,20);{let l=U0.a,m=U0.b,h=26,u=x=>{let b=Math.sin(x*co)*.025;return[l[0]+(m[0]-l[0])*x+b*.6,l[1]+(m[1]-l[1])*x+b*.4,l[2]+(m[2]-l[2])*x+b]},p=[];for(let x=0;x<=h;x++)p.push(u(x/h));e.tube(p,x=>.0028*(1-.7*x)+6e-4,tr.QUILL,5);let d=e.norm(e.sub(m,l)),v=e.norm(e.cross(d,[.2,1,.1])),g=e.cross(v,d);for(let x of[-1,1]){let b=e.pos.length/3;for(let y=0;y<=h;y++){let E=y/h,_=u(E),z=E<.28?0:(x>0?.03:.02)*Math.sin(co*Math.pow((E-.28)/.72,.75)),S=z*.25,L=[_[0]+v[0]*x*z-g[0]*S,_[1]+v[1]*x*z-g[1]*S,_[2]+v[2]*x*z-g[2]*S];e.v(_,g,tr.QUILL,[E,0]),e.v(L,g,tr.QUILL,[E,x])}for(let y=0;y<h;y++){let E=b+y*2;e.idx.push(E,E+2,E+1,E+1,E+2,E+3)}}}return e.orient()}function z4(e,t){let n=yt.top,o=yt.x0;e(o-.35,0,yt.z0-.35,o,n+.35,yt.z1+.35),e(o,0,yt.z0-.35,-.35,n,yt.z0),e(o,0,yt.z1,-.35,n,yt.z1+.35),e(o,n,yt.z0,-.35,n+.35,yt.z1),e(.35,0,yt.z0-.42,.35+.16,n,yt.z0),e(.35,0,yt.z1,.35+.16,n,yt.z1+.42),e(.35,n,yt.z0-.5,.35+.18,n+.42,yt.z1+.5),e(.35,n+.42,yt.z0-.6,.35+.26,n+.52,yt.z1+.6),e(.35,0,yt.z0-.5,.35+.22,.42,yt.z0),e(.35,0,yt.z1,.35+.22,.42,yt.z1+.5),e(-.35-.01,0,yt.z0,.35+.12,.02,yt.z1),t(o,yt.z0,-.35,yt.z1)}Jr.exports=e=>{let t=Vo(),r=rv.GLSL,n=L4(),o=`
	precision highp float;
	${r}
	uniform float time;
	${t.lanternGLSL()}
	${nv()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(C,R,K,Y){let ee=[],V=[],he=[],ve=[],we=[],be=lt-.02,qe=Ct.apex+.08,Fe=pn+.015;for(let $e=0;$e<=40;$e++){let le=$e/40,Se=qe+(Fe-qe)*le;for(let Re=0;Re<=90;Re++){let We=Re/90,Ge=K?.2+.13*le*le:R-C,Ne=C+We*Ge,Z=K?.05+.02*le:.035+.01*Math.sin(We*7),pe=We*Y*co*2+Math.sin(le*2+We*5)*.6,ue=be-Z*(.5+.5*Math.sin(pe))-(K?.02*le:0),Pe=[1,0,-(-Z*.5*Math.cos(pe)*Y*co*2/Ge)],Ke=Math.hypot(Pe[0],Pe[1],Pe[2]);ee.push(ue,Se,Ne),V.push(Pe[0]/Ke,0,Pe[2]/Ke),he.push(2),ve.push(Math.sin(pe),le)}}for(let $e=0;$e<40;$e++)for(let le=0;le<90;le++){let Se=$e*91+le,Re=Se+90+1;we.push(Se,Re,Se+1,Se+1,Re,Re+1)}for(let $e=0;$e<we.length;$e+=3){let[le,Se,Re]=[we[$e],we[$e+1],we[$e+2]],We=pe=>[ee[pe*3],ee[pe*3+1],ee[pe*3+2]],Ge=[0,1,2].map(pe=>We(Se)[pe]-We(le)[pe]),Ne=[0,1,2].map(pe=>We(Re)[pe]-We(le)[pe]);Ge[1]*Ne[2]-Ge[2]*Ne[1]<0&&(we[$e+1]=Re,we[$e+2]=Se)}return{pos:ee,nrm:V,kind:he,uv:ve,idx:we}}let c=s(Dt+.02,Dt+.4,!0,6),f=s(Zr+.04,wr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(C=>C+c.pos.length/3))},m=e({vert:`
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
			vec3 p = vec3(${Be(pt.x)} + corner.x * ${Be(pt.w/2)}, ${Be(pt.y)} + corner.y * ${Be(pt.h/2)}, ${Be(pt.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${o}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${Be(pt.x)}, ${Be(pt.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${Be(pt.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${Be(pt.x)} + corner.x * 0.75, ${Be(pt.y)} + corner.y * 0.9, ${Be(Zr-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),p=14,d=[];for(let C=0;C<p;C++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(R=>d.push(R[0],R[1],(C+.5)/p));let v=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${Be(S4)} + c.x * ${Be((lt-Xt)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${Be(rr-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${nv().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${En(Rt)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(d),size:3}},count:d.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),g=(()=>{if(typeof document=="undefined")return null;let C=document.createElement("canvas");C.width=512,C.height=652;let R=C.getContext("2d");R.fillStyle="#cdb38a",R.fillRect(0,0,C.width,C.height);let K=7,Y=()=>(K=K*1664525+1013904223>>>0,K/4294967296);for(let V=0;V<2400;V++){R.fillStyle=`rgba(${Y()<.5?"90,62,30":"245,230,200"},${.03+Y()*.05})`;let he=Y()*C.width,ve=Y()*C.height;R.fillRect(he,ve,1+Y()*14,1)}for(let V=0;V<26;V++){let he=Y()*C.width,ve=Y()*C.height,we=20+Y()*90,oe=R.createRadialGradient(he,ve,0,he,ve,we);oe.addColorStop(0,`rgba(120,80,35,${.04+Y()*.06})`),oe.addColorStop(1,"rgba(120,80,35,0)"),R.fillStyle=oe,R.fillRect(he-we,ve-we,we*2,we*2)}let ee=R.createRadialGradient(C.width/2,C.height/2,C.width*.3,C.width/2,C.height/2,C.height*.72);return ee.addColorStop(0,"rgba(110,70,30,0)"),ee.addColorStop(1,"rgba(110,70,30,0.38)"),R.fillStyle=ee,R.fillRect(0,0,C.width,C.height),C})(),x=g?e.texture({data:g,min:"linear",mag:"linear",flipY:!1}):e.texture(),b=e.texture({shape:[8,8],data:new Uint8Array(256)}),y=[18,24],E=[],_=[];for(let C=0;C<=y[1];C++)for(let R=0;R<=y[0];R++)E.push(R/y[0],C/y[1]);for(let C=0;C<y[1];C++)for(let R=0;R<y[0];R++){let K=C*(y[0]+1)+R,Y=K+y[0]+1;_.push(K,K+1,Y,K+1,Y+1,Y)}let z=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${Be(Fr.cx+Fr.w/2)} - s * ${Be(Fr.w)};
			float zNear = ${Be(Fr.cz-Fr.d/2)};
			vec3 p = vec3(x, ${Be(Fr.y)}, zNear + t * ${Be(Fr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${Be(Fr.d)};
				float zf = zNear + 0.5 * ${Be(Fr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${Be(Fr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${Be(rr+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(E),size:2}},elements:_,uniforms:{fold:()=>so.fold,slide:()=>so.slide,paperTex:x,inkTex:b},cull:{enable:!1}}),S=ov();S.lathe(Et.x,Et.z,[[0,Ye.top],[.048,Ye.top+.002],[.052,Ye.top+.012],[.046,Ye.top+.014],[.022,Ye.top+.012],[0,Ye.top+.012]],tr.BRASS,24),S.lathe(Et.x,Et.z,[[0,Ye.top+.012],[Et.r,Ye.top+.012],[Et.r*1.02,Ye.top+.012+Et.h*.6],[Et.r,Ye.top+.012+Et.h],[Et.r*.75,Ye.top+.012+Et.h-.004],[0,Ye.top+.012+Et.h-.008]],9,20),S.tube([[Et.x,Ye.top+.012+Et.h-.008,Et.z],[Et.x+.001,Ye.top+.012+Et.h+.012,Et.z]],.0012,8,4),S.orient();let L=e({vert:a,frag:`${o}
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
				float up = smoothstep(${Be(Ye.top+Et.h*.4)}, ${Be(Ye.top+.012+Et.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:S.pos,normal:S.nrm,kind:S.kind,uv:S.uv},elements:S.idx}),D=e({vert:`
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
			vec3 p = ${En(Et.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),O=[0,0];function G(C){let R=C&&C.reflected;if(i(),m(),h(),so.ink&&so.inkDirty){let K=so.ink;O[0]!==K.width||O[1]!==K.height?(b({data:K,min:"linear",mag:"linear",flipY:!1}),O=[K.width,K.height]):b.subimage(K),so.inkDirty=!1}so.shown&&z(),rv.night>.01&&(L(),R||(D({halo:1}),D({halo:0}))),R||(u(),v())}return G};Jr.exports.addBay=z4;Jr.exports.BAY=yt;Jr.exports.STATE=so;Jr.exports.SHOTS=k4;Jr.exports.SEAT=Qr;Jr.exports.LAMP=Rt;Jr.exports.SCONCE=Bt;Jr.exports.GRILLE=pt;Jr.exports.PAPER=Fr;Jr.exports.ZONE={FRONT:lt,BACK:Xt,ZA:Dt,ZB:rr,ZC:Zr,ZD:wr}});var pv=J((eS,dv)=>{"use strict";var C4=$o(),{addFlutedColumn:av,addStatue:R4,addPlant:N4}=Np(),iv=Ho(),P4=Ka(),vn=yr(),I4=dn(),j0=is(),ot=14,Ft=vn.C.hallEnd+.35,gt=8,st=.35,ff=1.15,hf=1.15,uf=[18,29,40],O4=[[[0,0],[0,Ft]],[[ot,Ft],[ot,0]],[[0,0],[ot,0]],[[ot,Ft],[0,Ft]]],fv=[];for(let e of uf)for(let t of[1.25,ot-1.25]){let r=ff/2,n=hf/2;fv.push([[t-r,e-n],[t+r,e-n]],[[t+r,e-n],[t+r,e+n]],[[t+r,e+n],[t-r,e+n]],[[t-r,e+n],[t-r,e-n]])}var V0=12,hv=2.95,uv=.62,K0=hv+uv,X0=[{file:"venus.bin",x:1.85,z:Ft-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:ot-2.1,z:Ft-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:vn.NICHE_X[0],z:vn.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:vn.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:vn.NICHE_X[1],z:vn.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:vn.NICHE_PLINTH_TOP,mat:3}],D4={x0:st,x1:3.15,z0:3.6,z1:8.2,top:1},sv=.8,Q0=1.17,ss=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{ss.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),ss.push({x:ot-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function df(e,t,r,n){return[[[e-r,t-n],[e+r,t-n]],[[e+r,t-n],[e+r,t+n]],[[e+r,t+n],[e-r,t+n]],[[e-r,t+n],[e-r,t-n]]]}var J0=[];for(let e of[-1,1])J0.push(...df(ot/2+e*K0,V0,.85,.85));for(let e of X0.filter(t=>t.pedestal))J0.push(...df(e.x,e.z,Q0*1.1,Q0*1.1));for(let e of ss)J0.push(...df(e.x,e.z,.42,.42));var G4=O4.concat(fv,J0);function F4(e){let r=new Map,n=(o,a,i)=>{let s=o+":"+a;r.has(s)||r.set(s,[]);let c=r.get(s);c.includes(i)||c.push(i)};for(let o of e){let a=Math.floor(Math.min(o[0][0],o[1][0])/4)-1,i=Math.floor(Math.max(o[0][0],o[1][0])/4)+1,s=Math.floor(Math.min(o[0][1],o[1][1])/4)-1,c=Math.floor(Math.max(o[0][1],o[1][1])/4)+1;for(let f=a;f<=i;f++)for(let l=s;l<=c;l++)n(f,l,o)}return{get(o,a){let i=Math.floor(o/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let m=r.get(i+f+":"+(s+l));m&&c.push(...m)}return[...new Set(c)]}}}var Y0=[],Gt={curMat:[0,0,0]};function Z0(e,t,r,n,o,a,i){let s=e.length/3;e.push(...r,...n,...o,...a),t.push(...i,...i,...i,...i);let c=Gt.curMat;return Y0.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function it(e,t,r,n,o,a,i,s,c){let f=(l,m,h,u,p)=>{r.push(...Z0(e,t,l,m,h,u,p))};f([n,o,a],[i,o,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,o,c],[n,o,c],[i,s,c],[n,s,c],[0,0,1]),f([n,o,c],[n,o,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,o,a],[i,o,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,o,c],[i,o,c],[n,o,a],[i,o,a],[0,-1,0])}function ni(e,t,r,n,o){let a=Gt,i=a.vert(e,o),s=a.vert(t,o),c=a.vert(r,o),f=a.vert(n,o);a.tri(i,s,c),a.tri(s,f,c)}function cv(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=Math.cos(c),m=Math.sin(c),h=Math.cos(f),u=Math.sin(f),p=[e+r*l,t+r*m],d=[e+r*h,t+r*u],v=[e+n*l,t+n*m],g=[e+n*h,t+n*u];ni([p[0],p[1],o],[d[0],d[1],o],[v[0],v[1],o],[g[0],g[1],o],[0,0,-1]),ni([p[0],p[1],a],[d[0],d[1],a],[v[0],v[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+f)/2;ni([p[0],p[1],o],[d[0],d[1],o],[p[0],p[1],a],[d[0],d[1],a],[-Math.cos(x),-Math.sin(x),0]),ni([v[0],v[1],o],[g[0],g[1],o],[v[0],v[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function q4(e,t,r,n,o,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=e+r*Math.cos(c),m=t+r*Math.sin(c),h=e+r*Math.cos(f),u=t+r*Math.sin(f);ni([l,m,o],[h,u,o],[l,n,o],[h,n,o],[0,0,-1]),ni([l,m,a],[h,u,a],[l,n,a],[h,n,a],[0,0,1])}}function $4(e,t,r,n){let o=ot/2,a=hv,i=3,s=a+.42,c=s+.15,f=uv,l=K0,m=5.98,h=n-.45,u=n+.45,p=64,d=av(Gt,o-l,n,0,m,f);av(Gt,o+l,n,0,m,f),Gt.curMat=[0,0,0],cv(o,i,a,s,h,u,p),cv(o,i,s,c,h-.07,u+.07,p),q4(o,i,c,d+.05,h,u,p);for(let g of[-1,1]){let x=o+g*(c-.02),b=o+g*l;it(e,t,r,Math.min(x,b),i,h,Math.max(x,b),d+.05,u)}for(let g of[-1,1]){let x=o+g*(a-.05),b=o+g*(a+.85);it(e,t,r,Math.min(x,b),i-.16,n-.6,Math.max(x,b),i,n+.6)}let v=l+f*1.42+.45;it(e,t,r,o-v,d,n-.7,o+v,d+.44,n+.7),it(e,t,r,o-v+.12,d+.44,n-.62,o+v-.12,d+.7,n+.62),it(e,t,r,o-v-.1,d+.7,n-.84,o+v+.1,d+.84,n+.84),it(e,t,r,o-v-.22,d+.84,n-.96,o+v+.22,d+1,n+.96),it(e,t,r,o-.3,i+a-.1,n-.56,o+.3,d,n+.56)}function lv(e,t,r,n,o){it(e,t,r,n-.72,0,o-.72,n+.72,.2,o+.72),it(e,t,r,n-.58,.2,o-.58,n+.58,.4,o+.58),it(e,t,r,n-ff/2,.4,o-hf/2,n+ff/2,gt-1.35,o+hf/2),it(e,t,r,n-.67,.42,o-.67,n+.67,.62,o+.67),it(e,t,r,n-.67,gt-1.58,o-.67,n+.67,gt-1.35,o+.67),it(e,t,r,n-.82,gt-1.35,o-.82,n+.82,gt-1.05,o+.82),it(e,t,r,n-.66,gt-1.05,o-.66,n+.66,gt-.78,o+.66),it(e,t,r,n-.92,gt-.78,o-.92,n+.92,gt-.55,o+.92),it(e,t,r,n-.78,gt-.55,o-.78,n+.78,gt-.3,o+.78),it(e,t,r,n-.92,gt-.3,o-.92,n+.92,gt-.1,o+.92)}function W0(e,t,r,n,o){o==="left"?(it(e,t,r,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),it(e,t,r,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(it(e,t,r,ot-.14,1,n-3.8/2,ot+.08,5.7,n+3.8/2),it(e,t,r,ot-.18,1+.18,n-3.8/2+.18,ot+.08+.04,5.7-.18,n+3.8/2-.18))}function H4(e,t,r,n){it(e,t,r,.65,gt-.16,n-1.65,.65+.22,gt,n+1.65),it(e,t,r,ot-.65-.22,gt-.16,n-1.65,ot-.65,gt,n+1.65),it(e,t,r,.65,gt-.16,n-1.65,ot-.65,gt,n-1.43),it(e,t,r,.65,gt-.16,n+1.43,ot-.65,gt,n+1.65),r.push(...Z0(e,t,[.65+.22,gt-.16,n-1.43],[ot-.65-.22,gt-.16,n-1.43],[.65+.22,gt-.16,n+1.43],[ot-.65-.22,gt-.16,n+1.43],[0,-1,0]))}dv.exports=function(){let e=[],t=[],r=[];Y0=[],Gt=C4.createBuilder(e,t,r,Y0),r.push(...Z0(e,t,[0,0,0],[ot,0,0],[0,0,Ft],[ot,0,Ft],[0,1,0])),P4.addSkylight(Gt,[0,0,0],Ft),Gt.curMat=[0,0,0];{let c=j0.BAY;it(e,t,r,-st,0,0,st,gt,c.z0),it(e,t,r,-st,0,c.z1,st,gt,Ft),it(e,t,r,-st,c.top,c.z0,st,gt,c.z1),j0.addBay((f,l,m,h,u,p)=>it(e,t,r,f,l,m,h,u,p),(f,l,m,h)=>r.push(...Z0(e,t,[f,0,l],[m,0,l],[f,0,h],[m,0,h],[0,1,0])))}it(e,t,r,ot-st,0,vn.C.z1,ot+st,gt,Ft-st),it(e,t,r,ot-st-.12,0,vn.C.z1+2*st,ot-st,.42,Ft-st),it(e,t,r,ot-st-.07,.42,vn.C.z1+2*st,ot-st,.5,Ft-st);for(let[c,f]of[[0,j0.BAY.z0-.5],[j0.BAY.z1+.5,Ft-st]])it(e,t,r,st,0,c,st+.12,.42,f),it(e,t,r,st,.42,c,st+.07,.5,f);it(e,t,r,st,0,Ft-st-.12,ot-st,.42,Ft-st),it(e,t,r,st,.42,Ft-st-.07,ot-st,.5,Ft-st),iv.addEntranceWall(Gt),iv.addFrames(Gt),Gt.curMat=[0,0,0],it(e,t,r,-st,0,Ft-st,ot+st,gt,Ft+st),$4(e,t,r,V0);for(let c of uf)lv(e,t,r,1.25,c),lv(e,t,r,ot-1.25,c);W0(e,t,r,22,"left"),W0(e,t,r,25,"right"),W0(e,t,r,33,"left"),W0(e,t,r,36,"right");let n=[4,9,34,39,44,49];for(let c of n)H4(e,t,r,c);vn.addWing(Gt),Gt.curMat=[0,0,0];for(let c of X0.filter(f=>f.pedestal))R4(Gt,c.x,c.z,Q0,sv);{let c=D4;Gt.curMat=[0,0,0],Gt.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Gt.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Gt.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Gt.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}I4.addAlcove(Gt);for(let c of ss)N4(Gt,c.x,c.z,c.seed,1,c.away);Gt.curMat=[0,0,0];let o=[[[ot,Ft-.35],[0,Ft-.35]],[[0,3],[0,10]],[[ot,15],[ot,22]],[[0,24],[0,31]],[[ot,33],[ot,40]],[[0,41],[0,46]]],a=F4(G4),i=(c,f)=>{let l=0,m=1/0;return o.forEach((h,u)=>{let p=(h[0][0]+h[1][0])/2,d=(h[0][1]+h[1][1])/2,v=Math.hypot(c-p,f-d);v<m&&(m=v,l=u)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:o,lights:s,statues:X0,occluders:[...uf.flatMap(c=>[[1.25,c,.78],[ot-1.25,c,.78]]),[ot/2-K0,V0,.86],[ot/2+K0,V0,.86],...X0.filter(c=>c.pedestal).map(c=>[c.x,c.z,Q0*1.12]),...ss.map(c=>[c.x,c.z,.34])],pedestalTop:sv,mat:Y0,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:r}}});var pf=J((tS,vv)=>{"use strict";var{doorLightGLSL:B4}=Ho(),{skylightGLSL:U4}=Ka(),{windowLightGLSL:j4,C:qr}=yr(),{alcoveLightGLSL:W4}=dn(),en=e=>e.toFixed(4),V4=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(r=>(r/t).toFixed(4)).join(", ")})();vv.exports=(e,t,r)=>{let o=(t.occluders||[]).slice(0,24).map(([h,u,p])=>`ao = min(ao, contact(v_pos.xz, vec2(${h.toFixed(3)}, ${u.toFixed(3)}), ${p.toFixed(3)}));`).join(`
      `),a={c:[0,0,0,0],d:[1,0,0,0]},i=-1,s=[],c=h=>{let u=h&&h.tick!==void 0?h.tick:0;if(u!==i||s.length===0){i=u;let p=t.viewer||[7,2,20];for(s=t.lights.filter(d=>d.c[3]>.5).map(d=>({l:d,d:Math.hypot(d.c[0]-p[0],d.c[2]-p[2])})).sort((d,v)=>d.d-v.d).slice(0,8).map(d=>d.l);s.length<8;)s.push(a)}return s},f={},l="",m="";for(let h=0;h<8;h++)f["lightC"+h]=u=>c(u)[h].c,f["lightD"+h]=u=>c(u)[h].d,l+="uniform vec4 lightC"+h+", lightD"+h+`;
`,m+="pic += pictureLight(lightC"+h+", lightD"+h+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Vo().lanternGLSL()}

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

    ${B4()}

    ${U4()}

    ${j4()}

    ${W4()}

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
        step(abs(v_pos.z - ${en(qr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${en((qr.z0+qr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${en(qr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${V4}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${en(qr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${en(qr.z0)} || v_pos.z > ${en(qr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${en(qr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${en(qr.z0)}), ${en(qr.z1)} - v_pos.z), ${en(qr.x1)} - v_pos.x);
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
        if (v_pos.z < ${en(qr.z0+.3)} && v_pos.x > ${en(qr.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:f,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements)})}});var gv=J((rS,mv)=>{"strict mode";var X4="https://api.artic.edu/api/v1/artworks/search",Y4=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,K4="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",Q4="&fields=image_id,title,artist_title",Z4={low:400,mid:843,high:1686};mv.exports={fetchList:async function(e,t){let r=X4+K4+Q4+`&from=${e}&size=${t}`;return(await fetch(r).then(o=>o.json())).data.filter(o=>o.image_id)},fetchImage:async function(e,t){let r=Y4(e,Z4[t]),n=await fetch(r).then(o=>o.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var bv=J((nS,yv)=>{"use strict";var J4=Ic(),e_=cn(),t_=e=>"images/web/"+e.slug+(e_.isPhone?"-1024":"")+".webp";async function xv(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}yv.exports={fetchList:async function(e,t){return J4.slice(e,e+t).map((r,n)=>({...r,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await xv(t_(e))}catch(r){t=await xv("images/"+e.file)}return{title:e.title,image:t}}}});var _v=J((oS,wv)=>{"strict mode";wv.exports={default:"local",artic:gv(),local:bv()}});var mf=J((aS,Mv)=>{"strict mode";var Xo=document.createElement("canvas"),vf=Xo.width=Xo.height=1024,lo=Xo.getContext("2d");lo.mozImageSmoothingEnabled=!1;lo.webkitImageSmoothingEnabled=!1;lo.font="32px Verdana";lo.textBaseline="bottom";lo.fillStyle="#aaa";function Ev(e,t,r,n){var o=t,a,i=0,s=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(o).width>r&&f>1;){f--,o=a="";for(var m=0;m<l;m++)m<f?(o+=c[m],m+1<f&&(o+=" ")):(a+=c[m],m+1<l&&(a+=" "))}return n.push(o),s=e.measureText(o).width,a&&(i=Ev(e,a,r,n),i>s&&(s=i)),s}Mv.exports={init(e,t,r=vf){var n=[];Ev(lo,t,Math.min(r*vf,vf),n),lo.clearRect(0,0,Xo.width,Xo.height);for(var o=0;o<n.length;o++)lo.fillText(n[o],0,Xo.height-(Math.max(n.length,3)-o)*32);return e({data:Xo,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Sv=J((iS,Tv)=>{"strict mode";var gf=_v(),r_=new URLSearchParams(window.location.search).get("api"),Av=gf[r_]||gf[gf.default],n_=mf(),xf={},ai=[],o_=2;function a_(e){return(!navigator.connection||navigator.connection.downlink<o_)&&(e=e=="high"?"mid":"low"),e}var i_=cn(),oi=document.createElement("canvas");oi.width=oi.height=i_.isPhone?1024:2048;var wf=oi.getContext("2d");wf.imageSmoothingEnabled=!0;wf.imageSmoothingQuality="high";var yf=!1,s_=e=>[(ai.pop()||e.texture)([[[200,200,200]]]),t=>(ai.pop()||e.texture)([[[0,0,0,0]]]),1];async function bf(e,t,r){yf===!1&&(yf=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,o;try{let a=await Av.fetchImage(t,a_(r));o=a.title,n=await createImageBitmap(a.image),wf.drawImage(n,0,0,oi.width,oi.height)}catch(a){return console.error(a),r=="high"?await bf(e,t,"low"):s_(e)}return[(ai.pop()||e.texture)({data:oi,min:"mipmap",mipmap:"nice",aniso:yf,flipY:!0}),a=>n_.init(ai.pop()||e.texture,o,a),n.width/n.height]}Tv.exports={fetch:(e,t=10,r="low",n,o)=>{let a=Object.keys(xf).length;Av.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(xf[s.image_id]){--t===0&&o();return}xf[s.image_id]=s,bf(e,s,r).then(([c,f,l])=>{n({...s,tex:c,textGen:f,aspect:l}),--t===0&&o()})})})},load:(e,t,r="low")=>{t.tex||t.loading||(t.loading=!0,bf(e,t,r).then(([n,o])=>{t.loading=!1,t.tex=n,t.text=o(t.width)}))},unload:e=>{e.tex&&(ai.push(e.tex),e.tex=void 0),e.text&&(ai.push(e.text),e.text=void 0)}}});var Lv=J((sS,kv)=>{kv.exports=c_;function c_(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e[9]=t[9]+r[9],e[10]=t[10]+r[10],e[11]=t[11]+r[11],e[12]=t[12]+r[12],e[13]=t[13]+r[13],e[14]=t[14]+r[14],e[15]=t[15]+r[15],e}});var Cv=J((cS,zv)=>{zv.exports=l_;function l_(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Nv=J((lS,Rv)=>{Rv.exports=f_;function f_(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Iv=J((fS,Pv)=>{Pv.exports=h_;function h_(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var _f=J((hS,Ov)=>{Ov.exports=u_;function u_(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Gv=J((uS,Dv)=>{Dv.exports=d_;function d_(e,t){if(e===t){var r=t[1],n=t[2],o=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=o,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var qv=J((dS,Fv)=>{Fv.exports=p_;function p_(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],m=t[9],h=t[10],u=t[11],p=t[12],d=t[13],v=t[14],g=t[15],x=r*s-n*i,b=r*c-o*i,y=r*f-a*i,E=n*c-o*s,_=n*f-a*s,z=o*f-a*c,S=l*d-m*p,L=l*v-h*p,D=l*g-u*p,O=m*v-h*d,G=m*g-u*d,C=h*g-u*v,R=x*C-b*G+y*O+E*D-_*L+z*S;return R?(R=1/R,e[0]=(s*C-c*G+f*O)*R,e[1]=(o*G-n*C-a*O)*R,e[2]=(d*z-v*_+g*E)*R,e[3]=(h*_-m*z-u*E)*R,e[4]=(c*D-i*C-f*L)*R,e[5]=(r*C-o*D+a*L)*R,e[6]=(v*y-p*z-g*b)*R,e[7]=(l*z-h*y+u*b)*R,e[8]=(i*G-s*D+f*S)*R,e[9]=(n*D-r*G-a*S)*R,e[10]=(p*_-d*y+g*x)*R,e[11]=(m*y-l*_-u*x)*R,e[12]=(s*L-i*O-c*S)*R,e[13]=(r*O-n*L+o*S)*R,e[14]=(d*b-p*E-v*x)*R,e[15]=(l*E-m*b+h*x)*R,e):null}});var Hv=J((pS,$v)=>{$v.exports=v_;function v_(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],m=t[9],h=t[10],u=t[11],p=t[12],d=t[13],v=t[14],g=t[15];return e[0]=s*(h*g-u*v)-m*(c*g-f*v)+d*(c*u-f*h),e[1]=-(n*(h*g-u*v)-m*(o*g-a*v)+d*(o*u-a*h)),e[2]=n*(c*g-f*v)-s*(o*g-a*v)+d*(o*f-a*c),e[3]=-(n*(c*u-f*h)-s*(o*u-a*h)+m*(o*f-a*c)),e[4]=-(i*(h*g-u*v)-l*(c*g-f*v)+p*(c*u-f*h)),e[5]=r*(h*g-u*v)-l*(o*g-a*v)+p*(o*u-a*h),e[6]=-(r*(c*g-f*v)-i*(o*g-a*v)+p*(o*f-a*c)),e[7]=r*(c*u-f*h)-i*(o*u-a*h)+l*(o*f-a*c),e[8]=i*(m*g-u*d)-l*(s*g-f*d)+p*(s*u-f*m),e[9]=-(r*(m*g-u*d)-l*(n*g-a*d)+p*(n*u-a*m)),e[10]=r*(s*g-f*d)-i*(n*g-a*d)+p*(n*f-a*s),e[11]=-(r*(s*u-f*m)-i*(n*u-a*m)+l*(n*f-a*s)),e[12]=-(i*(m*v-h*d)-l*(s*v-c*d)+p*(s*h-c*m)),e[13]=r*(m*v-h*d)-l*(n*v-o*d)+p*(n*h-o*m),e[14]=-(r*(s*v-c*d)-i*(n*v-o*d)+p*(n*c-o*s)),e[15]=r*(s*h-c*m)-i*(n*h-o*m)+l*(n*c-o*s),e}});var Uv=J((vS,Bv)=>{Bv.exports=m_;function m_(e){var t=e[0],r=e[1],n=e[2],o=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],l=e[9],m=e[10],h=e[11],u=e[12],p=e[13],d=e[14],v=e[15],g=t*i-r*a,x=t*s-n*a,b=t*c-o*a,y=r*s-n*i,E=r*c-o*i,_=n*c-o*s,z=f*p-l*u,S=f*d-m*u,L=f*v-h*u,D=l*d-m*p,O=l*v-h*p,G=m*v-h*d;return g*G-x*O+b*D+y*L-E*S+_*z}});var Wv=J((mS,jv)=>{jv.exports=g_;function g_(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],l=t[7],m=t[8],h=t[9],u=t[10],p=t[11],d=t[12],v=t[13],g=t[14],x=t[15],b=r[0],y=r[1],E=r[2],_=r[3];return e[0]=b*n+y*s+E*m+_*d,e[1]=b*o+y*c+E*h+_*v,e[2]=b*a+y*f+E*u+_*g,e[3]=b*i+y*l+E*p+_*x,b=r[4],y=r[5],E=r[6],_=r[7],e[4]=b*n+y*s+E*m+_*d,e[5]=b*o+y*c+E*h+_*v,e[6]=b*a+y*f+E*u+_*g,e[7]=b*i+y*l+E*p+_*x,b=r[8],y=r[9],E=r[10],_=r[11],e[8]=b*n+y*s+E*m+_*d,e[9]=b*o+y*c+E*h+_*v,e[10]=b*a+y*f+E*u+_*g,e[11]=b*i+y*l+E*p+_*x,b=r[12],y=r[13],E=r[14],_=r[15],e[12]=b*n+y*s+E*m+_*d,e[13]=b*o+y*c+E*h+_*v,e[14]=b*a+y*f+E*u+_*g,e[15]=b*i+y*l+E*p+_*x,e}});var Xv=J((gS,Vv)=>{Vv.exports=x_;function x_(e,t,r){var n=r[0],o=r[1],a=r[2],i,s,c,f,l,m,h,u,p,d,v,g;return t===e?(e[12]=t[0]*n+t[4]*o+t[8]*a+t[12],e[13]=t[1]*n+t[5]*o+t[9]*a+t[13],e[14]=t[2]*n+t[6]*o+t[10]*a+t[14],e[15]=t[3]*n+t[7]*o+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],l=t[4],m=t[5],h=t[6],u=t[7],p=t[8],d=t[9],v=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=l,e[5]=m,e[6]=h,e[7]=u,e[8]=p,e[9]=d,e[10]=v,e[11]=g,e[12]=i*n+l*o+p*a+t[12],e[13]=s*n+m*o+d*a+t[13],e[14]=c*n+h*o+v*a+t[14],e[15]=f*n+u*o+g*a+t[15]),e}});var Kv=J((xS,Yv)=>{Yv.exports=y_;function y_(e,t,r){var n=r[0],o=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Zv=J((yS,Qv)=>{Qv.exports=b_;function b_(e,t,r,n){var o=n[0],a=n[1],i=n[2],s=Math.sqrt(o*o+a*a+i*i),c,f,l,m,h,u,p,d,v,g,x,b,y,E,_,z,S,L,D,O,G,C,R,K;return Math.abs(s)<1e-6?null:(s=1/s,o*=s,a*=s,i*=s,c=Math.sin(r),f=Math.cos(r),l=1-f,m=t[0],h=t[1],u=t[2],p=t[3],d=t[4],v=t[5],g=t[6],x=t[7],b=t[8],y=t[9],E=t[10],_=t[11],z=o*o*l+f,S=a*o*l+i*c,L=i*o*l-a*c,D=o*a*l-i*c,O=a*a*l+f,G=i*a*l+o*c,C=o*i*l+a*c,R=a*i*l-o*c,K=i*i*l+f,e[0]=m*z+d*S+b*L,e[1]=h*z+v*S+y*L,e[2]=u*z+g*S+E*L,e[3]=p*z+x*S+_*L,e[4]=m*D+d*O+b*G,e[5]=h*D+v*O+y*G,e[6]=u*D+g*O+E*G,e[7]=p*D+x*O+_*G,e[8]=m*C+d*R+b*K,e[9]=h*C+v*R+y*K,e[10]=u*C+g*R+E*K,e[11]=p*C+x*R+_*K,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var em=J((bS,Jv)=>{Jv.exports=w_;function w_(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],l=t[9],m=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*o+f*n,e[5]=i*o+l*n,e[6]=s*o+m*n,e[7]=c*o+h*n,e[8]=f*o-a*n,e[9]=l*o-i*n,e[10]=m*o-s*n,e[11]=h*o-c*n,e}});var rm=J((wS,tm)=>{tm.exports=__;function __(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],l=t[9],m=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o-f*n,e[1]=i*o-l*n,e[2]=s*o-m*n,e[3]=c*o-h*n,e[8]=a*n+f*o,e[9]=i*n+l*o,e[10]=s*n+m*o,e[11]=c*n+h*o,e}});var om=J((_S,nm)=>{nm.exports=E_;function E_(e,t,r){var n=Math.sin(r),o=Math.cos(r),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],l=t[5],m=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o+f*n,e[1]=i*o+l*n,e[2]=s*o+m*n,e[3]=c*o+h*n,e[4]=f*o-a*n,e[5]=l*o-i*n,e[6]=m*o-s*n,e[7]=h*o-c*n,e}});var im=J((ES,am)=>{am.exports=M_;function M_(e,t,r){var n,o,a,i=r[0],s=r[1],c=r[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),o=Math.cos(t),a=1-o,e[0]=i*i*a+o,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+o,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var cm=J((MS,sm)=>{sm.exports=A_;function A_(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],s=n+n,c=o+o,f=a+a,l=n*s,m=n*c,h=n*f,u=o*c,p=o*f,d=a*f,v=i*s,g=i*c,x=i*f;return e[0]=1-(u+d),e[1]=m+x,e[2]=h-g,e[3]=0,e[4]=m-x,e[5]=1-(l+d),e[6]=p+v,e[7]=0,e[8]=h+g,e[9]=p-v,e[10]=1-(l+u),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}});var fm=J((AS,lm)=>{lm.exports=T_;function T_(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var um=J((TS,hm)=>{hm.exports=S_;function S_(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var pm=J((SS,dm)=>{dm.exports=k_;function k_(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var mm=J((kS,vm)=>{vm.exports=L_;function L_(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var xm=J((LS,gm)=>{gm.exports=z_;function z_(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var bm=J((zS,ym)=>{ym.exports=C_;function C_(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r+r,s=n+n,c=o+o,f=r*i,l=n*i,m=n*s,h=o*i,u=o*s,p=o*c,d=a*i,v=a*s,g=a*c;return e[0]=1-m-p,e[1]=l+g,e[2]=h-v,e[3]=0,e[4]=l-g,e[5]=1-f-p,e[6]=u+d,e[7]=0,e[8]=h+v,e[9]=u-d,e[10]=1-f-m,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var _m=J((CS,wm)=>{wm.exports=R_;function R_(e,t,r,n,o,a,i){var s=1/(r-t),c=1/(o-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var Mm=J((RS,Em)=>{Em.exports=N_;function N_(e,t,r,n,o){var a=1/Math.tan(t/2),i=1/(n-o);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*n*i,e[15]=0,e}});var Tm=J((NS,Am)=>{Am.exports=P_;function P_(e,t,r,n){var o=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(o+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(o-a)*f*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}});var km=J((PS,Sm)=>{Sm.exports=I_;function I_(e,t,r,n,o,a,i){var s=1/(t-r),c=1/(n-o),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+r)*s,e[13]=(o+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var zm=J((IS,Lm)=>{var O_=_f();Lm.exports=D_;function D_(e,t,r,n){var o,a,i,s,c,f,l,m,h,u,p=t[0],d=t[1],v=t[2],g=n[0],x=n[1],b=n[2],y=r[0],E=r[1],_=r[2];return Math.abs(p-y)<1e-6&&Math.abs(d-E)<1e-6&&Math.abs(v-_)<1e-6?O_(e):(l=p-y,m=d-E,h=v-_,u=1/Math.sqrt(l*l+m*m+h*h),l*=u,m*=u,h*=u,o=x*h-b*m,a=b*l-g*h,i=g*m-x*l,u=Math.sqrt(o*o+a*a+i*i),u?(u=1/u,o*=u,a*=u,i*=u):(o=0,a=0,i=0),s=m*i-h*a,c=h*o-l*i,f=l*a-m*o,u=Math.sqrt(s*s+c*c+f*f),u?(u=1/u,s*=u,c*=u,f*=u):(s=0,c=0,f=0),e[0]=o,e[1]=s,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=m,e[7]=0,e[8]=i,e[9]=f,e[10]=h,e[11]=0,e[12]=-(o*p+a*d+i*v),e[13]=-(s*p+c*d+f*v),e[14]=-(l*p+m*d+h*v),e[15]=1,e)}});var Rm=J((OS,Cm)=>{Cm.exports=G_;function G_(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var Pm=J((DS,Nm)=>{Nm.exports=F_;function F_(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e[9]=t[9]-r[9],e[10]=t[10]-r[10],e[11]=t[11]-r[11],e[12]=t[12]-r[12],e[13]=t[13]-r[13],e[14]=t[14]-r[14],e[15]=t[15]-r[15],e}});var cs=J((GS,Im)=>{Im.exports={add:Lv(),create:Cv(),clone:Nv(),copy:Iv(),identity:_f(),transpose:Gv(),invert:qv(),adjoint:Hv(),determinant:Uv(),multiply:Wv(),translate:Xv(),scale:Kv(),rotate:Zv(),rotateX:em(),rotateY:rm(),rotateZ:om(),fromRotation:im(),fromRotationTranslation:cm(),fromScaling:fm(),fromTranslation:um(),fromXRotation:pm(),fromYRotation:mm(),fromZRotation:xm(),fromQuat:bm(),frustum:_m(),perspective:Mm(),perspectiveFromFieldOfView:Tm(),ortho:km(),lookAt:zm(),str:Rm(),sub:Pm()}});var Gm=J((FS,Dm)=>{"use strict";var Om=Sv(),Pt=cs(),Yo=yr(),q_=3e3,ec="high",Ef,fs=.36,hs=13.64,ii=Yo.C.hallEnd-.01,us=Yo.C.z0+.01,$_=.356,H_=13.644,B_=Yo.C.hallEnd-.006,U_=Yo.C.z0+.006,j_=.12,rc=4,si=e=>lr[e]&&lr[e].cy||rc,Mf=.26,W_=5.6,V_=7,lr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:ii},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Yo.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Yo.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Yo.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function X_(e,t){let r=t&&t.maxH||W_,n=t&&t.maxW||V_,o=Math.min(r,n/e);return{width:o*e,height:o}}function Y_(e,t,r){let n=lr[r],o=[],a=si(r)-t/2;return n.side==="left"?(Pt.fromTranslation(o,[fs,a,n.z+e/2]),Pt.rotateY(o,o,Math.PI/2)):n.side==="right"?(Pt.fromTranslation(o,[hs,a,n.z-e/2]),Pt.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?Pt.fromTranslation(o,[n.x-e/2,a,us]):(Pt.fromTranslation(o,[7+e/2,a,ii]),Pt.rotateY(o,o,Math.PI)),Pt.scale(o,o,[e,t,j_]),o}function K_(e,t,r){let n=lr[r],o=[],a=si(r)-t/2;return n.side==="left"?(Pt.fromTranslation(o,[fs,a,n.z+e/2]),Pt.rotateY(o,o,Math.PI/2)):n.side==="right"?(Pt.fromTranslation(o,[hs,a,n.z-e/2]),Pt.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?Pt.fromTranslation(o,[n.x-e/2,a,us]):(Pt.fromTranslation(o,[7+e/2,a,ii]),Pt.rotateY(o,o,Math.PI)),o}function Q_(e,t,r){let n=lr[r],o=[],a=si(r)-t/2-Mf-.38;return n.side==="left"?(Pt.fromTranslation(o,[$_,a,n.z+e/2]),Pt.rotateY(o,o,Math.PI/2)):n.side==="right"?(Pt.fromTranslation(o,[H_,a,n.z-e/2]),Pt.rotateY(o,o,-Math.PI/2)):n.side==="corridor"?Pt.fromTranslation(o,[n.x-e/2,a,U_]):(Pt.fromTranslation(o,[7+e/2,a,B_]),Pt.rotateY(o,o,Math.PI)),Pt.scale(o,o,[2,2,2]),o}function Z_(e,t,r){let n=lr[r],o=si(r)-t/2-Mf-.38;return n.side==="left"?[fs+.55,o,n.z]:n.side==="right"?[hs-.55,o,n.z]:n.side==="corridor"?[n.x,o,us+.55]:[7,o,ii-.55]}var ls=.42;function tc(e,t,r,n,o,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,o,0,0,r[0]*a,r[1]*a,r[2]*a,0,e[0],e[1],e[2],1]}function J_(e,t,r){let n=lr[r],o,a,i;n.side==="left"?(o=[fs,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(o=[hs,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(o=[n.x,us],a=[1,0,0],i=[0,0,1]):(o=[7,ii],a=[1,0,0],i=[0,0,-1]);let s=si(r)+t/2+Mf+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(u,p)=>[o[0]+i[0]*u,p,o[1]+i[2]*u],l=[.075,.062,.05],m=[{fixmodel:tc(f(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:tc(f(ls/2,s),a,i,.02,.02,ls),fixcol:l,fixglow:0},{fixmodel:tc(f(ls,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:tc(f(ls-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(ls,s-.02);return{fixtures:m,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}Dm.exports=(e,t)=>{let r=[],n=[],o=a=>{let i=a.image_id;if(!lr[i])return;let{width:s,height:c}=X_(a.aspect,lr[i]),f=J_(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),r.push({...a,fixtures:f.fixtures,side:lr[i].side,model:Y_(s,c,i),framemodel:K_(s,c,i),framesize:[s,c],textmodel:Q_(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:Z_(s,c,i),paintingPosition:lr[i].side==="left"?[fs+.05,rc,lr[i].z]:lr[i].side==="right"?[hs-.05,rc,lr[i].z]:lr[i].side==="corridor"?[lr[i].x,si(i),us+.05]:[7,rc,ii-.05],textGen:null})};return Om.fetch(e,lr.length,ec,o,()=>{}),{update:()=>{n=r,n.forEach(a=>{Om.load(e,a,ec)}),ec="low",Ef&&clearTimeout(Ef),Ef=setTimeout(()=>{ec="high"},q_)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Hm=J((qS,$m)=>{"use strict";var e6=mf(),Fm=cn(),qm=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function t6(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];qm.forEach(([n,o])=>{e.forEach(([a,i])=>t.push([a,i,n,o]))});let r=[];for(let n=0;n<qm.length-1;n++)for(let o=0;o<4;o++){let a=(o+1)%4,i=n*4+o,s=n*4+a,c=(n+1)*4+o,f=(n+1)*4+a;r.push(i,s,f,i,f,c)}return{verts:t,elems:r}}var r6=`#extension GL_OES_standard_derivatives : enable
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
}`,n6=`
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
}`;$m.exports=e=>{let t=e6.draw(e),r=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Vo().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(Fm.isPhone?1024:2048),detail:()=>Fm.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=t6(),o=e({frag:r6,vert:n6,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){r(i),o(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Um=J(($S,Bm)=>{"use strict";var o6=pf();function a6(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),o=t.getUint32(8,!0),a=[],i=[];for(let m=0;m<3;m++)a.push(t.getFloat32(12+m*4,!0)),i.push(t.getFloat32(24+m*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,o);s+=o*2;let l=new Int8Array(e,s,n*3);return{nV:n,nI:o,mn:a,sz:i,pos:c,idx:f,nrm:l}}Bm.exports=(e,t)=>{let r=[],n=[],o=[],a=[],i=null,s=t.statues.length,c=(l,m)=>{let h=r.length/3,u=m.height,p=Math.cos(m.yaw),d=Math.sin(m.yaw),v=m.base!==void 0?m.base:t.pedestalTop;for(let g=0;g<l.nV;g++){let x=(l.mn[0]+l.pos[g*3]/65535*l.sz[0])*u,b=(l.mn[1]+l.pos[g*3+1]/65535*l.sz[1])*u,y=(l.mn[2]+l.pos[g*3+2]/65535*l.sz[2])*u;r.push(m.x+p*x+d*y,v+b,m.z-d*x+p*y);let E=l.nrm[g*3]/127,_=l.nrm[g*3+1]/127,z=l.nrm[g*3+2]/127;n.push(p*E+d*z,_,-d*E+p*z),o.push(m.mat||1,0,0)}for(let g=0;g<l.nI;g++)a.push(h+l.idx[g])},f=()=>{a.length!==0&&(i=o6(e,{position:r,normal:n,mat:o,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1))};return t.statues.forEach(l=>{fetch("res/"+l.file).then(m=>{if(!m.ok)throw new Error("Could not load "+l.file);return m.arrayBuffer()}).then(m=>c(a6(m),l)).catch(m=>console.error(m)).then(()=>{--s===0&&f()})}),function(){i&&i()}}});var t2=J((HS,Tf)=>{"use strict";var i6=$o(),Yt=1.29032,Qo=[9.2968,2,5.9],s6=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],nc=2147.64,jm=725,Wm=1288,Vm=1450,Xm=2576,zr=-5.197,Jo=3.865,fo=10.135,ea=-14.679,ds=-30.229,ps=7.232,Ym=-45.713,ci=17.1*Yt,Zo=16.6*Yt,vs=16.6*Yt,Km=[6.9,17.1],oc=[2.95,16.6],c6=1.6,l6=0,f6=1,Qm=2,Af=3,Zm=4,Jm=5,h6=6;function u6(){let e=[],t=[],r=[],n=[],o=i6.createBuilder(e,t,r,n),a=(f,l,m,h,u,p,d=1,v=1)=>{let g=[];for(let x=0;x<=d;x++){let b=[];for(let y=0;y<=v;y++){let E=[f[0]+l[0]*x/d+m[0]*y/v,f[1]+l[1]*x/d+m[1]*y/v,f[2]+l[2]*x/d+m[2]*y/v],_=p(E);b.push(o.vert(E,h,[u,_[0],_[1]]))}g.push(b)}for(let x=0;x<d;x++)for(let b=0;b<v;b++)o.tri(g[x][b],g[x+1][b],g[x][b+1]),o.tri(g[x+1][b],g[x+1][b+1],g[x][b+1])},i=f=>l=>[(Qo[2]-l[2])/Yt-f,l[1]/Yt];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],l6,f=>[f[0]/Yt,f[2]/Yt],13,14),a([Jo,0,zr],[0,0,ea-zr],[0,ci,0],[1,0,0],f6,i(8.6),6,6),a([-40,0,zr],[Jo+40,0,0],[0,ci,0],[0,0,1],Qm,f=>[(Jo-f[0])/Yt,f[1]/Yt],8,4),a([-40,0,-.36],[0,0,zr+.36],[0,ci,0],[1,0,0],Qm,f=>[-f[2]/Yt,f[1]/Yt]),a([fo,0,-80],[0,0,zr+80],[0,Zo,0],[-1,0,0],Zm,i(8.6),12,6),a([fo,0,zr],[60,0,0],[0,Zo,0],[0,0,1],Jm,f=>[(f[0]-fo)/Yt,f[1]/Yt],8,4),a([70,0,zr],[0,0,-.36-zr],[0,Zo,0],[-1,0,0],Jm,f=>[-f[2]/Yt,f[1]/Yt]);let s=f=>[(f[0]-Qo[0])/Yt+4.18,f[1]/Yt];a([-20,0,ds],[ps+20,0,0],[0,vs,0],[0,0,1],Af,s,8,6),a([ps,0,ds],[0,0,Ym-ds],[0,vs,0],[1,0,0],Af,i(28),4,4),a([ps,0,Ym],[fo-ps,0,0],[0,Zo,0],[0,0,1],Zm,f=>[(f[0]-Qo[0])/Yt,f[1]/Yt],2,4),a([-20,0,ea],[0,0,ds-ea],[0,vs,0],[1,0,0],Af,i(16),4,4);let c=(f,l,m,h)=>a(f,l,m,h,h6,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:r,attr:n}}function Ko(e,t,r,n){let o=e.texture({data:[[n]],...r,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{o({data:a,...r,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),o}var mn=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",d6=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,ea],[Jo,ci,zr]],[[fo,0,-80],[70,Zo,zr]],[[-20,0,-80],[ps,vs,ds]],[[-40,0,-80],[-20,vs,ea]]],p6=d6.map(e=>`if (hitBox(ro, rd, ${mn(e[0])}, ${mn(e[1])}, 1e4) ) return 0.0;`).join(`
		`),e2="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>s6[t][e].toFixed(6)).join(", ")).join(", ")+")",v6=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${mn([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${p6}
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
	vec3 ro = ${mn(Qo)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${mn([-40,0,ea])}, ${mn([Jo-.02,ci,zr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${mn([fo+.02,0,-80])}, ${mn([70,Zo,zr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${e2} * (p - ${mn(Qo)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${jm.toFixed(2)} + ${nc.toFixed(3)} * pc.x / pc.z) / ${Vm.toFixed(1)},
		(${Wm.toFixed(2)} - ${nc.toFixed(3)} * pc.y / pc.z) / ${Xm.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${e2} * (p - ${mn(Qo)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${jm.toFixed(2)} + ${nc.toFixed(3)} * pc.x / pc.z) / ${Vm.toFixed(1)},
		(${Wm.toFixed(2)} - ${nc.toFixed(3)} * pc.y / pc.z) / ${Xm.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${mn(Qo)}), n));
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
		base = texture2D(cobbleTex, fuv / ${c6.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Km[0].toFixed(2)}, 1.0 - fuv.y / ${Km[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${oc[0].toFixed(2)}, 1.0 - fuv.y / ${oc[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${oc[0].toFixed(2)}, 1.0 - fuv.y / ${oc[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Jo-.05).toFixed(3)} && v_pos.x < ${(fo+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${ea.toFixed(3)};
		projectable = projectable && v_pos.z < ${(zr+4.5).toFixed(3)};
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
}`,m6=`
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
}`,g6=ur();Tf.exports=e=>{let t=u6(),r={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},o={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Ko(e,"res/street/photo.jpg",r,[190,160,120]),i=Ko(e,"res/street/photo_night.jpg",r,[12,14,22]),s=Ko(e,"res/street/photo_mask.png",r,[255,255,255]),c=Ko(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=Ko(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Ko(e,"res/street/facade_cream.jpg",n,[215,200,175]),m=Ko(e,"res/street/cobbles.jpg",o,[95,95,95]),h=Date.now(),u=e({frag:v6,vert:m6,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:m,photoNight:i,night:()=>g6.night,time:()=>(Date.now()-h)/1e3}});return function(){u()}};Tf.exports.layout={MOUTH_Z:zr,PINK_X:Jo,RIGHT_X:fo,PINK_H:ci,CREAM_H:Zo,S:Yt}});var o2=J((BS,n2)=>{"use strict";var x6=ur().GLSL,{glassPanes:y6}=Ho(),r2=yr();function b6(){let e=[],t=[],r=(n,o)=>{for(let a of n)e.push(a),t.push(o)};return r(y6(),[0,0,1]),r(r2.windowGlass(),[0,0,1]),r(r2.farDoorGlass(),[1,0,0]),{position:e,normal:t}}n2.exports=e=>{let t=b6(),r=e({frag:`
		precision highp float;
		${x6}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){r()}}});var w2=J((US,Cf)=>{"use strict";var f2=ur().GLSL,w6=$o(),Sf=cn(),{wallWithHoles:_6,C:po}=yr(),Oe=.28,Q={westBack:14.4,westCol:15-Oe,eastCol:37.4+Oe,eastBack:41.8,south:po.z1+.7,northCol:po.z1+.7+16,northBack:po.z1+.7+19,cx:(15+37.4)/2,cz:(po.z1+.7+po.z1+.7+16-Oe)/2},ht={x0:Q.westCol+Oe,x1:Q.eastCol-Oe,z0:Q.south,z1:Q.northCol-Oe},dr=3.3,xs=.92,vo=5.6,a2=6,tn=11.9,uo=9.6,rt={x0:Q.cx-2.9,x1:Q.cx+2.9,top:14.4},hc=7,h2=4,Lf=(Q.eastCol-Q.westCol)/hc,E6=(Q.northCol-Q.south)/h2,u2=3,bs=.26,oa=1.4,ra=1.1,ic=3,Mn=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(r=>r/t)})(),Ae={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},An=[],d2=(e,t,r)=>[Q.cx+e,t,Q.cz+r],sc=d2(-5.9,0,3.4),mo=.85,ho={c:[sc[0],4.6*mo+.5,sc[2]],r:[5*mo,3.6*mo,4.5*mo]},p2=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[sc[0]+e.d[0]*mo,e.d[1]*mo+.5,sc[2]+e.d[2]*mo],r:e.r.map(t=>t*mo),n:e.n}));for(let e of p2)An.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var M6=[3.6,6.3,9];for(let e of M6){let t=8.6+e%1.7*.6;An.push({c:d2(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var A6=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:Q.cx+e.d[0],z:Q.cz+e.d[1],bloom:e.bloom}));for(let e of A6)An.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var zf=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[Q.cx+Math.cos(t)*2.3,Q.cz+Math.sin(t)*2.3]});for(let[e,t]of zf)An.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var v2=[];{let e=(r,n,o,a,i,s)=>{let c=Math.hypot(o-r,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let m=l/f,h=r+(o-r)*m,u=n+(a-n)*m;i!==void 0&&Math.abs((o!==r?h:u)-i)<s||v2.push([h,u])}};e(ht.x0+.45,ht.z0+1.2,ht.x0+.45,ht.z1-.45,Q.cz,1),e(ht.x1-.45,ht.z0+1.2,ht.x1-.45,ht.z1-.45,Q.cz,1),e(ht.x0+.45,ht.z1-.45,ht.x1-.45,ht.z1-.45,Q.cx,1.9)}var T6=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],cc=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function fi(e,t,r,n,o,a,i){let s=e.vert(t,a,i),c=e.vert(r,a,i),f=e.vert(n,a,i),l=e.vert(o,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Kt(e,t,r,n,o,a,i,s){e.box(Math.min(t,o),Math.min(r,a),Math.min(n,i),Math.max(t,o),Math.max(r,a),Math.max(n,i),[s,0,0])}function S6(e,t,r){return{vert:(n,o,a)=>e.vert(t(n),r(o),a),tri:e.tri}}var k6={north:[e=>[e[0],e[1],Q.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[Q.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[Q.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function m2(e,t,r,n,o){let a=[];for(let i=0;i<r;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===r-1?o:.02);a.push([s,c,e+(i+.5)*t])}return a}var L6=m2(Q.westCol,Lf,hc,Oe+bs,Oe+bs),i2=m2(Q.south,E6,h2,.32,Oe+bs),li=[Q.cx-32.35,Q.northCol-77],z6=Array.from({length:hc-1},(e,t)=>Q.westCol+(t+1)*Lf),g2=e=>(e[1]-e[0])/2-.2,ys=e=>(e[0]+e[1])/2;function C6(e,t){let r=ys(e),n=g2(e);return{u0:e[0],u1:e[1],bottom:t?0:xs,head:o=>{let a=Math.abs(o-r);return a<n?dr+Math.sqrt(n*n-a*a):dr},step:.05}}function R6(e,t,r){return{u0:e-r,u1:e+r,bot:n=>t-Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,r*r-(n-e)*(n-e))),step:.04,mat:[Ae.STONE,0,0]}}function N6(e,t,r,n){return{u0:e-t/2,u1:e+t/2,bottom:r,head:()=>n,step:.5,mat:[Ae.STONE,0,0]}}function s2(e,t,r){let[n,o]=k6[t],a=S6(e,n,o),i=[];r.arches.forEach((l,m)=>i.push(C6(l,m===r.open)));let s=[];for(let l of r.bays||r.arches){let m=ys(l);r.oculi&&i.push(R6(m,6.85,.3)),s.push({c:m,y0:r.win[0],y1:r.win[1],w:1.05})}for(let l of r.extraWindows||[])s.push(l);for(let l of s)i.push(N6(l.c,l.w,l.y0,l.y1));for(let l of r.extraHoles||[])i.push(l);_6(a,{u0:r.u0,u1:r.u1,w0:-Oe,w1:Oe,top:r.top,holes:i,mat:[Ae.BRICK,0,0],revealMat:[Ae.BRICK,0,0],noEnds:r.noEnds,cuts:r.cuts,topStep:.25});let c=(l,m,h,u,p,d,v)=>{let g=n([l,m,h]),x=n([u,p,d]);Kt(e,g[0],g[1],g[2],x[0],x[1],x[2],v)},f=(l,m,h,u,p,d)=>fi(a,l,m,h,u,p,[d,0,0]);for(let l of r.arches){let m=ys(l),h=g2(l),u=28;for(let p of[Oe,-Oe]){let d=p>0?1:-1,v=p+d*.025;for(let g=0;g<u;g++){let x=Math.PI*g/u,b=Math.PI*(g+1)/u,y=(O,G)=>[m+Math.cos(O)*G,dr+Math.sin(O)*G],E=y(x,h),_=y(b,h),z=y(x,h+.26),S=y(b,h+.26);f([E[0],E[1],v],[_[0],_[1],v],[S[0],S[1],v],[z[0],z[1],v],[0,0,d],Ae.STONE);let L=Math.cos((x+b)/2),D=Math.sin((x+b)/2);f([z[0],z[1],p],[S[0],S[1],p],[S[0],S[1],v],[z[0],z[1],v],[L,D,0],Ae.STONE)}}}if(r.arches.forEach((l,m)=>{m!==r.open&&c(l[0]-.02,xs,-Oe-.05,l[1]+.02,xs+.09,Oe+.05,Ae.STONE)}),c(r.u0,a2,-Oe,r.u1,a2+.18,Oe+.09,Ae.STONE),c(r.u0,r.win[0]-.12,Oe-.01,r.u1,r.win[0],Oe+.06,Ae.STONE),r.cornice)for(let[l,m,h]of r.cornice)c(l,h-.22,Oe-.01,m,h,Oe+.16,Ae.STONE),c(l,h,Oe-.01,m,h+.16,Oe+.42,Ae.STONE);for(let{c:l,y0:m,y1:h,w:u,door:p}of s){let d=u/2;if(f([l-d-.01,m,.06],[l+d+.01,m,.06],[l+d+.01,h,.06],[l-d-.01,h,.06],[0,0,1],p?Ae.DARK:Ae.PANE),p){c(l-d-.16,0,Oe-.01,l-d,h+.16,Oe+.07,Ae.STONE),c(l+d,0,Oe-.01,l+d+.16,h+.16,Oe+.07,Ae.STONE),c(l-d-.16,h,Oe-.01,l+d+.16,h+.2,Oe+.09,Ae.STONE),c(l-d,0,.07,l+d,h-.02,.12,Ae.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,Ae.DARK);continue}for(let v of[-1,1]){let g=l+v*d;c(g+v*.02,m+.02,Oe+.02,g+v*(d+.025),h-.02,Oe+.06,Ae.SHUTTER)}c(l-d-.09,h,Oe-.01,l+d+.09,h+.16,Oe+.05,Ae.STONE),c(l-d-.09,m-.1,Oe-.01,l+d+.09,m,Oe+.09,Ae.STONE),c(l-.015,m,.06,l+.015,h,.09,Ae.SHUTTER),c(l-d,(m+h)/2-.015,.06,l+d,(m+h)/2+.015,.09,Ae.SHUTTER)}if(r.oculi)for(let l of r.bays||r.arches){let m=ys(l);f([m-.31,6.54,0],[m+.31,6.54,0],[m+.31,7.16,0],[m-.31,7.16,0],[0,0,1],Ae.DARK)}for(let l of r.cols){let m=xs+.09,h=n([l,0,0]);Kt(e,h[0]-.24,m,h[2]-.24,h[0]+.24,m+.12,h[2]+.24,Ae.MARBLE),e.lathe([[.23,m+.12,1],[.24,m+.17],[.2,m+.24],[.215,m+.28],[.17,m+.34,1],[.165,m+.6],[.155,dr-.5],[.15,dr-.38,1],[.175,dr-.34,1],[.17,dr-.3],[.2,dr-.22],[.27,dr-.15],[.29,dr-.12,1]],h[0],h[2],18,{mat:()=>[Ae.MARBLE,0,0]}),Kt(e,h[0]-.29,dr-.12,h[2]-.29,h[0]+.29,dr+.01,h[2]+.29,Ae.STONE)}r.walk&&r.walk(e)}function P6(e){let t=[-1,0,1].map(o=>{let a=Q.cx+o*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Ae.STONE,0,0]}});s2(e,"north",{u0:Q.westCol-Oe,u1:Q.eastCol+Oe,top:o=>o>rt.x0+1e-6&&o<rt.x1-1e-6?rt.top:tn,cuts:[rt.x0,rt.x0+1e-5,rt.x1-1e-5,rt.x1],arches:L6,open:u2,cols:z6,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[Q.westCol-Oe-3.3,rt.x0,tn],[rt.x1,Q.eastCol+Oe+3.3,tn],[rt.x0-.2,rt.x1+.2,rt.top]],walk:o=>{Kt(o,ht.x0,vo,Q.northCol+Oe,ht.x1,vo+.2,Q.northBack,Ae.PLASTER),Kt(o,ht.x0,0,Q.northBack,ht.x1,vo,Q.northBack+.3,Ae.PLASTER);for(let a of[Q.cx-7.2,Q.cx,Q.cx+7.2])fi(o,[a-.8,0,Q.northBack-.01],[a+.8,0,Q.northBack-.01],[a+.8,2.9,Q.northBack-.01],[a-.8,2.9,Q.northBack-.01],[0,0,-1],[Ae.DARK,0,0]),Kt(o,a-.98,0,Q.northBack-.06,a+.98,3.12,Q.northBack,Ae.STONE),fi(o,[a-.8,0,Q.northBack-.07],[a+.8,0,Q.northBack-.07],[a+.8,2.9,Q.northBack-.07],[a-.8,2.9,Q.northBack-.07],[0,0,-1],[Ae.DARK,0,0])}}),fi(e,[rt.x0,11,Q.northCol+.2],[rt.x1,11,Q.northCol+.2],[rt.x1,13.6,Q.northCol+.2],[rt.x0,13.6,Q.northCol+.2],[0,0,-1],[Ae.DARK,0,0]),Kt(e,rt.x0+.3,10.88,Q.northCol-Oe-.06,rt.x1-.3,11,Q.northCol-Oe+.1,Ae.STONE),Kt(e,Q.westBack,vo+.2,Q.northBack,Q.eastBack,tn,Q.northBack+3.4,Ae.BRICK),Kt(e,Q.westBack,uo,Q.northCol-Oe,Q.westCol-Oe,tn,Q.northCol+Oe,Ae.BRICK),Kt(e,Q.eastCol+Oe,uo,Q.northCol-Oe,Q.eastBack,tn,Q.northCol+Oe,Ae.BRICK),Kt(e,Q.westBack,vo+.2,Q.northCol+Oe+.12,Q.eastBack,tn,Q.northBack,Ae.BRICK),ms(e,[Q.westBack-.5,tn+.16,Q.northCol-Oe-.42],[rt.x0-Q.westBack+.5,0,0],[0,2.6,4.4],Ae.ROOF),ms(e,[rt.x1,tn+.16,Q.northCol-Oe-.42],[Q.eastBack+.5-rt.x1,0,0],[0,2.6,4.4],Ae.ROOF),ms(e,[rt.x0-.3,rt.top+.16,Q.northCol-Oe-.42],[rt.x1-rt.x0+.6,0,0],[0,1.4,3],Ae.ROOF),c2(e,[rt.x0-.3,rt.top+.16,Q.northCol-Oe-.42],[rt.x0-.3,rt.top+1.56,Q.northCol-Oe+2.58],[rt.x0-.3,rt.top+.16,Q.northCol-Oe+2.58],[-1,0,0],Ae.BRICK),c2(e,[rt.x1+.3,rt.top+.16,Q.northCol-Oe-.42],[rt.x1+.3,rt.top+1.56,Q.northCol-Oe+2.58],[rt.x1+.3,rt.top+.16,Q.northCol-Oe+2.58],[1,0,0],Ae.BRICK),Kt(e,rt.x0,tn,Q.northCol+Oe,rt.x1,rt.top,Q.northCol+2.6,Ae.BRICK);for(let[o,a]of[[Q.cx-9.8,Q.northBack+.6],[Q.cx+9.4,Q.northBack+.4],[Q.cx-4.6,Q.northBack+1]])Kt(e,o-.4,12.5,a-.4,o+.4,15.4,a+.4,Ae.BRICK),Kt(e,o-.52,15.4,a-.52,o+.52,15.62,a+.52,Ae.STONE);let r=(o,a,i)=>{let s=o==="west"?-1:1,c=[];i2.forEach((m,h)=>{let u=ys(m);h===1?c.push({c:u,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:u,y0:1,y1:2.75,w:1.05}),c.push({c:u,y0:3.85,y1:5.45,w:1.05})}),s2(e,o,{u0:Q.south,u1:Q.northCol-Oe,top:()=>uo,arches:[],bays:i2,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[Q.south,Q.northCol-Oe,uo]]}),Kt(e,a,0,Q.south,i+s*(Oe+.12),uo,Q.northBack+.3,Ae.BRICK);let f=i-s*Oe;Kt(e,f,0,Q.south,f-s*.06,.55,Q.northCol-Oe,Ae.STONE);let l=i-s*(Oe+.42);ms(e,[l,uo+.16,Q.south],[0,0,Q.northCol-Oe-Q.south],[a-l+s*.4,1.9,0],Ae.ROOF)};r("west",Q.westBack,Q.westCol),r("east",Q.eastBack,Q.eastCol);let n=po.x1+.7;Kt(e,13.65,7.4,Q.south-.02,n,7.62,Q.south+.14,Ae.STONE),Kt(e,13.65,10.4,Q.south-.02,n,10.6,Q.south+.38,Ae.STONE),ms(e,[13.65,10.6,Q.south+.38],[n-13.65,0,0],[0,2.2,-5],Ae.ROOF)}function c2(e,t,r,n,o,a){let i=[a,0,0];e.tri(e.vert(t,o,i),e.vert(r,o,i),e.vert(n,o,i))}function ms(e,t,r,n,o){let a=cc([r[1]*n[2]-r[2]*n[1],r[2]*n[0]-r[0]*n[2],r[0]*n[1]-r[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,l)=>[t[0]+r[0]*f+n[0]*l,t[1]+r[1]*f+n[1]*l,t[2]+r[2]*f+n[2]*l];fi(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[o,0,0]);let c=.08;fi(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],cc([-n[0],0,-n[2]]),[o,0,0])}function I6(e){let t=Q.westBack,r=Q.eastBack,n=Q.south,o=Q.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let l=[t+(r-t)*c/a,0,n+(o-n)*f/i];s[c].push(e.vert(l,[0,1,0],[Ae.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var gs=.46,na=.58,ta=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function O6(e,t,r){let n=ra+r,o=(e>0?ht.x1-Q.cx:Q.cx-ht.x0)-oa-r,a=ra+r,i=(t>0?ht.z1-Q.cz:Q.cz-ht.z0)-oa-r,s=ic+r,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[o,i],[o,a],[f,a]],m=Math.atan2(a,f),h=Math.atan2(c,n);for(let u=1;u<10;u++){let p=m+(h-m)*u/10;l.push([Math.cos(p)*s,Math.sin(p)*s])}return l.map(([u,p])=>[Q.cx+e*u,Q.cz+t*p])}function D6(e,t,r){let n=r[0]-t[0],o=r[1]-t[1],a=Math.hypot(n,o),i=n/a,s=o/a,c=-s,f=i,l=gs*.5,m=-l,h=a+l,u=[],p=Math.max(1,Math.ceil((h-m)/1));for(let d=0;d<=p;d++){let v=m+(h-m)*d/p,g=[];for(let x=0;x<ta.length;x++){let[b,y]=ta[x],E=Math.min(ta.length-2,x),_=ta[Math.max(0,x-1)],z=ta[Math.min(ta.length-1,x+1)],S=(z[0]-_[0])*gs,D=(z[1]-_[1])*na,O=-S,G=Math.hypot(D,O)||1,C=[t[0]+i*v+c*b*gs,y*na,t[1]+s*v+f*b*gs],R=[c*(-D/G),-O/G,f*(-D/G)];g.push(e.vert(C,R[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:R,[Ae.HEDGE,0,0]))}u.push(g)}for(let d=0;d<p;d++)for(let v=0;v<ta.length-1;v++)e.tri(u[d][v],u[d+1][v],u[d+1][v+1]),e.tri(u[d][v],u[d+1][v+1],u[d][v+1]);for(let[d,v]of[[0,-1],[p,1]]){let g=u[d],x=e.vert([t[0]+i*(d?h:m),na*.5,t[1]+s*(d?h:m)],[i*v,0,s*v],[Ae.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(x,g[b],g[b+1])}}function G6(e){for(let t of[-1,1])for(let r of[-1,1]){let n=O6(t,r,.3);for(let o=0;o<n.length;o++)D6(e,n[o],n[(o+1)%n.length])}}function F6(e){let t=Q.cx,r=Q.cz,n=()=>[Ae.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,r,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,r,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,r,16,{mat:()=>[Ae.DARK,0,0]});let o={mat:()=>[Ae.IRON,0,0]};e.tube([[t-.72,1.1,r],[t-.72,1.9,r],[t-.7,2.3,r]],()=>.035,8,6,o),e.tube([[t+.72,1.1,r],[t+.72,1.9,r],[t+.7,2.3,r]],()=>.035,8,6,o);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,r])}e.tube(a,()=>.03,20,6,o),e.tube([[t-.45,2.25,r],[t,2.38,r],[t+.45,2.25,r]],()=>.02,8,5,o),e.ellipsoid([t,2.32,r],[.03,.13,.13],6,10,o);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*l*i*-1+0),1.95+Math.sin(f)*l,r])}e.tube(s,()=>.016,16,5,o)}}function q6(e){for(let[t,r]of zf)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,r,20,{mat:()=>[Ae.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,r,12,{mat:()=>[Ae.SOIL,0,0]}),e.tube([[t,.6,r],[t+.02,1,r-.01],[t-.01,1.45,r+.02]],n=>.045-n*.02,6,6,{mat:()=>[Ae.BARK,0,0]})}function $6(e){let[t,,r]=ho.c,n=y2(7),o=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of o){let c=[[t+a*.05,0,r+i*.05],[t+a*.25,s*.35,r+i*.25],[t+a*.6,s*.7,r+i*.6],[t+a,s,r+i],[t+a*1.35+(n()-.5),s+1.4,r+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Ae.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,m=[t+a*l,s*l,r+i*l],h=n()*Math.PI*2;e.tube([m,[m[0]+Math.cos(h)*1.3,m[1]+.9,m[2]+Math.sin(h)*1.3],[m[0]+Math.cos(h)*2.3,m[1]+1.4+n(),m[2]+Math.sin(h)*2.3]],u=>.08*(1-u*.7),8,6,{mat:()=>[Ae.BARK,0,0]})}}for(let a of An.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Ae.BARK,0,0]})}function H6(e){let t=()=>[Ae.FARBRICK,0,0],r=()=>[Ae.LEAD,0,0],n=(a,i,s,c,f,l)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let m=[];for(let u=0;u<=12;u++){let p=u/12*Math.PI/2,d=Math.cos(p)*s,v=Math.sin(p)*f;l&&(d*=1-.18*Math.sin(p*2)),m.push([Math.max(d,s*.12),c+v])}e.lathe(m,a,i,28,{mat:r});let h=c+f;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:r})};Kt(e,14,0,104,52,26,150,Ae.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:r});let o=(a,i,s)=>{Kt(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Ae.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};o(20.5,109,36),o(46.5,112,38)}function B6(e){let r=[Q.cx,0,Q.cz],n=24,o=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=o;c++){let f=Math.PI/2*(c/o)-.05,l=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],m=[r[0]+l[0]*420,r[1]+l[1]*420,r[2]+l[2]*420];a[i].push(e.vert(m,[-l[0],-l[1],-l[2]],[Ae.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<o;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function U6(){let e=[],t=[],r=[],n=[],o=w6.createBuilder(e,t,r,n);return I6(o),P6(o),G6(o),F6(o),q6(o),$6(o),o.save(),o.translate(li[0],0,li[1]),H6(o),o.restore(),B6(o),{position:e,normal:t,elements:r,attr:n}}var x2=[[[13.65,0,po.z0-.7],[po.x1+.7,10.6,Q.south]],[[Q.westBack,vo,Q.northCol-Oe],[Q.eastBack,tn,Q.northBack+3.4]],[[rt.x0,tn,Q.northCol-Oe],[rt.x1,rt.top,Q.northCol+2.6]],[[Q.westBack,0,Q.south],[Q.westCol+Oe,uo,Q.northBack+.3]],[[Q.eastCol-Oe,0,Q.south],[Q.eastBack,uo,Q.northBack+.3]],[[14+li[0],0,104+li[1]],[52+li[0],26,150+li[1]]]];function j6(e,t,r,n){let o=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<r[i]||e[i]>n[i])return!1;continue}let s=(r[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),o=Math.max(o,s),a=Math.min(a,c),o>a)return!1}return!0}function ac(e,t,r,n){let o=[(e[0]-r[0])/n[0],(e[1]-r[1])/n[1],(e[2]-r[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=o[0]*a[0]+o[1]*a[1]+o[2]*a[2],c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-1,f=s*s-i*c;if(f<=0)return 0;let l=Math.sqrt(f),m=Math.max(0,(-s-l)/i),h=(-s+l)/i;return Math.max(0,h-m)}function kf(e){for(let[t,r]of x2)if(j6(e,Mn,t,r))return 0;return 1}function y2(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function W6(){let e=[],t=[],r=[],n=[],o=[],a=[],i=[],s=y2(21),c=(p,d,v,g,x,b,y)=>{let E=e.length/3;for(let[_,z]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...p),t.push(_,z),r.push(d,v,g),n.push(...x),o.push(...b),a.push(...y);i.push(E,E+1,E+2,E,E+2,E+3)},f=(p,d)=>{let v=1;for(let g of An){if(g===d||!g.shadow)continue;let x=ac(p,Mn,g.c,g.r);x>0&&(v*=Math.exp(-x*.9))}return v},l=An.map(p=>({...p,pts:null}));for(let p of l)for(let d=0;d<p.n;d++){let v;do v=[s()*2-1,s()*2-1,s()*2-1];while(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]>1);let g=Math.hypot(v[0],v[1],v[2])||1,x=Math.pow(s(),.35)*.98,b=[v[0]/g*x,v[1]/g*x,v[2]/g*x];if(p.spindle){let C=b[1],R=Math.sqrt(Math.max(.02,1-C*C))*(C>0?1-C*.55:1+C*.25),K=Math.hypot(b[0],b[2])||1,Y=R*Math.min(1,K*1.4);b=[b[0]/K*Y,C,b[2]/K*Y]}p.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let y=[p.c[0]+b[0]*p.r[0],p.c[1]+b[1]*p.r[1],p.c[2]+b[2]*p.r[2]],E,_;if(p.magnolia){let C=0;for(let Y of p2)C=Math.max(C,ac(y,Mn,Y.c,Y.r));E=Math.exp(-C*1.1);let R=1;for(let Y of An)if(!Y.magnolia&&Y.shadow){let ee=ac(y,Mn,Y.c,Y.r);ee>0&&(R*=Math.exp(-ee*.9))}E*=kf(y)*R;let K=T6(y,ho.c);_=cc([K[0]/ho.r[0]+b[0]*.5,K[1]/ho.r[1]+b[1]*.5,K[2]/ho.r[2]+b[2]*.5]),x=Math.min(1,Math.hypot(K[0]/ho.r[0],K[1]/ho.r[1],K[2]/ho.r[2])*.6+x*.4)}else{let C=ac(y,Mn,p.c,p.r);E=Math.exp(-C*(p.spindle?2.2:1.25)),E*=kf(y)*f(y,An[l.indexOf(p)]),_=cc([b[0]/p.r[0],b[1]/p.r[1],b[2]/p.r[2]])}let z=Math.max(0,_[0]*Mn[0]+_[1]*Mn[1]+_[2]*Mn[2]),S=.25+.75*Math.pow(x,1.5)*(.65+.35*(_[1]*.5+.5)),L=p.size[0]+(p.size[1]-p.size[0])*s(),D=.85+s()*.3,O=p.leaf.map(C=>C*D),G=p.cell;p.cell===3&&s()<.35&&(G=2),c(y,L,G,s()*Math.PI*2,[E,S,.35+.65*z],O,p.bloom)}for(let[p,d]of v2){let v=s()<.5;for(let g=0;g<3;g++){let x=[p+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],b=kf(x)*f(x,null);c(x,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],v?[1,.55,.75]:[.85,.8,1.15])}}let m=i.length/6,h=Array.from({length:m},(p,d)=>d);for(let p=m-1;p>0;p--){let d=Math.floor(s()*(p+1));[h[p],h[d]]=[h[d],h[p]]}let u=[];for(let p of h)for(let d=0;d<6;d++)u.push(i[p*6+d]);return{center:e,corner:t,par:r,light:n,tint:o,bloom:a,elements:u}}var Ie=e=>e.toFixed(4),ws=e=>`vec3(${Ie(e[0])}, ${Ie(e[1])}, ${Ie(e[2])})`,b2=`
const vec3 SUN = ${ws(Mn)};
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
`,V6=x2.map(([e,t])=>`if (hitBox(ro, SUN, ${ws(e)}, ${ws(t)})) return 0.0;`).join(`
	`),X6=An.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${ws(e.c)}, ${ws(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),Y6=(e,t,r,n,o,a,i,s,c)=>`
	{
		float t = (${Ie(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${Ie(vo)} && u > ${Ie(r-Oe)} && u < ${Ie(r+n*o+Oe)}) {
				float k = floor((u - ${Ie(r)}) / ${Ie(n)});
				float a = ${Ie(r)} + k * ${Ie(n)} + (k < 0.5 ? ${Ie(a)} : 0.02);
				float b = ${Ie(r)} + (k + 1.0) * ${Ie(n)} - (k > ${Ie(o-1.5)} ? ${Ie(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Ie(s)}) < 0.5 ? 0.0 : ${Ie(xs+.09)};
				bool hole = (q.y > sill && q.y < ${Ie(dr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Ie(dr)} && d * d + (q.y - ${Ie(dr)}) * (q.y - ${Ie(dr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,lc=ra+.3,fc=ra+.3,_s=ic+.3,l2=ht.x1-Q.cx-oa-.3,K6=ht.z1-Q.cz-oa-.3,Q6=Q.cz-ht.z0-oa-.3,Z6=Math.sqrt(_s*_s-lc*lc),J6=Math.sqrt(_s*_s-fc*fc),eE=[[Q.cx,Q.cz,.86,1.18],[Q.cx,Q.cz,1.25,.3],...zf.map(([e,t])=>[e,t,.42,.65])].map(([e,t,r,n])=>`if (hitCyl(ro, vec2(${Ie(e)}, ${Ie(t)}), ${Ie(r)}, ${Ie(n)})) return 0.0;`).join(`
	`),tE=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Ie(Q.cx)}, ${Ie(Q.cz)}));
	float b1 = xz.y > ${Ie(Q.cz)} ? ${Ie(K6)} : ${Ie(Q6)};
	vec2 A = vec2(${Ie(lc)}, ${Ie(Z6)}), Bp = vec2(${Ie(lc)}, b1), C = vec2(${Ie(l2)}, b1);
	vec2 D = vec2(${Ie(l2)}, ${Ie(fc)}), E = vec2(${Ie(J6)}, ${Ie(fc)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Ie(_s)}));
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
	${V6}
	${Y6("z",Q.northCol,Q.westCol,Lf,hc,Oe+bs,Oe+bs,u2,"ro.z > "+Ie(Q.northCol-Oe))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${eE}
	if (ro.y < ${Ie(na)} && ro.x > ${Ie(ht.x0)} && ro.x < ${Ie(ht.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Ie(na)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Ie(gs*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Ie(na)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${X6}
	return tr;
}
`,rE=`
precision highp float;
${f2}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${b2}
${tE}

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

	if (kind == ${Ae.SKY}.0) {
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

	if (kind == ${Ae.GROUND}.0) {
		bool yard = P.x > ${Ie(ht.x0)} && P.x < ${Ie(ht.x1)} && P.z < ${Ie(ht.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Ie(ht.x0)}, ${Ie(ht.x1)} - P.x);
			float ez = min(P.z - ${Ie(ht.z0)}, ${Ie(ht.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Ie(Q.cx)}), dz = abs(P.z - ${Ie(Q.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Ie(oa)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Ie(oa)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Ie(ic)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Ie(Q.cz)}, P.x - ${Ie(Q.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Ie(ic)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Ie(ra)} || dz < ${Ie(ra)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Ie(ra)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Ie(Q.cx)}, ${Ie(Q.cz)})));
		}
	} else if (kind == ${Ae.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${Ae.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${Ae.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${Ae.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Ie(na)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${Ae.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${Ae.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${Ae.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${Ae.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${Ae.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${Ae.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${Ae.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${Ae.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${Ae.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${Ae.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${Ae.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Ie(Q.westCol)} || P.x > ${Ie(Q.eastCol)} || P.z > ${Ie(Q.northCol)}) && P.y < ${Ie(vo+.05)} && P.z > ${Ie(Q.south-.1)} && P.z < ${Ie(Q.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Ie(Q.northCol)} ? P.z - ${Ie(Q.northCol)} : (P.x < ${Ie(Q.westCol)} ? ${Ie(Q.westCol)} - P.x : P.x - ${Ie(Q.eastCol)});
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
}`,nE=`
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
}`,oE=`
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
}`,aE=`
precision highp float;
${f2}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${b2}
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
}`;function iE(e,t,r){let n=e.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(t).then(o=>{if(!o.ok)throw new Error("Could not load "+t);return o.blob()}).then(o=>createImageBitmap(o,{premultiplyAlpha:"none"})).then(o=>n({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o)),n}Cf.exports=e=>{let t=U6(),r=W6(),n=iE(e,"res/garden/foliage.webp",[0,0,0,0]),o=Date.now(),a=()=>Sf.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:20,i=e({frag:rE,vert:nE,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>Sf.gardenDetail}}),s=e({frag:aE,vert:oE,attributes:{center:r.center,corner:r.corner,par:r.par,light:r.light,tint:r.tint,bloom:r.bloom},elements:new Uint32Array(r.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(r.elements.length*Sf.leafShare/6)*6});return function(){i(),s()}};Cf.exports.layout={G:Q,YARD:ht,SUN:Mn}});var S2=J((jS,T2)=>{"use strict";var sE=ur().GLSL,cE=$o(),{C:A2}=yr(),rn=A2.x1+.35,If=A2.zc,Rf=[rn-7.3,2,If],_2=5.2*Math.PI/180,E2=2100,lE=725,fE=1288,hE=1450,uE=2576,aa=If-3.2,M2=If+3.3,Nf=rn+5,Pf=rn+11.7,uc=3.9,Es=rn+22.7,dc=40;function dE(){let e=[],t=[],r=[],n=[],o=cE.createBuilder(e,t,r,n),a=(l,m,h,u,p,d)=>{let v=[];for(let g=0;g<=p;g++){v.push([]);for(let x=0;x<=d;x++){let b=[0,1,2].map(y=>l[y]+m[y]*g/p+h[y]*x/d);v[g].push(o.vert(b,u,[0,0,0]))}}for(let g=0;g<p;g++)for(let x=0;x<d;x++)o.tri(v[g][x],v[g+1][x],v[g+1][x+1]),o.tri(v[g][x],v[g+1][x+1],v[g][x+1])},i=M2-aa,s=.7;a([rn-s,0,aa],[Nf-rn+s,0,0],[0,0,i],[0,1,0],6,4);let c=Pf-Nf,f=Math.hypot(c,uc);return a([Nf,0,aa],[c,uc,0],[0,0,i],[-uc/f,c/f,0],6,4),a([Pf,uc,aa],[Es-Pf,0,0],[0,0,i],[0,1,0],6,4),a([rn-s,0,aa],[Es-rn+s,0,0],[0,dc,0],[0,0,1],12,12),a([rn-s,0,M2],[Es-rn+s,0,0],[0,dc,0],[0,0,-1],12,12),a([Es,0,aa],[0,dc,0],[0,0,i],[-1,0,0],8,4),a([rn-s,dc,aa],[Es-rn+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:r,attr:n}}var gn=e=>e.toFixed(5),pE=`
precision highp float;
${sE}
uniform sampler2D photo;
varying vec3 v_pos;

void main() {
	vec3 d = v_pos - vec3(${gn(Rf[0])}, ${gn(Rf[1])}, ${gn(Rf[2])});
	float c = ${gn(Math.cos(_2))}, s = ${gn(Math.sin(_2))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${gn(lE)} + ${gn(E2)} * d.z / fw, ${gn(fE)} - ${gn(E2)} * up / fw);
	vec2 uv = px / vec2(${gn(hE)}, ${gn(uE)});
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
}`,vE=`
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
}`;T2.exports=e=>{let t=dE(),r=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(o=>{if(!o.ok)throw new Error("Could not load the Florence photo");return o.blob()}).then(o=>createImageBitmap(o)).then(o=>r({data:o,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(o=>console.error(o));let n=e({frag:pE,vert:vE,attributes:{position:t.position},elements:new Uint32Array(t.elements),uniforms:{photo:r},cull:{enable:!1}});return function(){n()}}});var N2=J((WS,R2)=>{"use strict";var mE=ur().GLSL,{A:k2,BENCH:gE,SHAFT:Of,TREE:Ms,oculusGLSL:xE}=dn(),yE=cn(),pc=Ms.sxz,L2=Ms.sy,z2=Ms.yaw;function bE(e){let t=new DataView(e),r=t.getUint32(4,!0),n=t.getUint32(8,!0),o=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,r*3);s+=r*6;let f=new Uint16Array(e,s,r*2);s+=r*4;let l=new Int8Array(e,s,r*3);s+=r*3,s=s+3&-4;let m=new Uint32Array(e,s,o);return{nV:r,nWood:n,nI:o,mn:a,sz:i,pos:c,uv:f,nrm:l,idx:m}}function wE(e){let t=new Float32Array(e.nV*3),r=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),o=new Float32Array(e.nV),a=Math.cos(z2),i=Math.sin(z2);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*pc,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*L2,l=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*pc;t[s*3]=k2.cx+a*c+i*l,t[s*3+1]=gE.soil+.02+f,t[s*3+2]=k2.zc-i*c+a*l;let m=e.nrm[s*3]/127/pc,h=e.nrm[s*3+1]/127/L2,u=e.nrm[s*3+2]/127/pc,p=Math.hypot(m,h,u)||1;m/=p,h/=p,u/=p,r[s*3]=a*m+i*u,r[s*3+1]=h,r[s*3+2]=-i*m+a*u,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,o[s]=s>=e.nWood?1:0}return{position:t,normal:r,uv:n,leaf:o,elements:e.idx}}function C2(e,t,r,n){let o=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>o({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...r})).catch(a=>console.error(a)),o}var _r=e=>e.toFixed(4),hi=Ms.crownC,ui=Ms.crownR,_E=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

const vec3 SHAFT = vec3(${_r(Of[0])}, ${_r(Of[1])}, ${_r(Of[2])});

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
	vec3 cc = vec3(${_r(hi[0])}, ${_r(hi[1])}, ${_r(hi[2])});
	vec3 cr = vec3(${_r(ui[0])}, ${_r(ui[1])}, ${_r(ui[2])});
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
}`,go=Vo(),EE=`
precision highp float;
${mE}
uniform float time;
${go.lanternGLSL(go.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${go.LANTERNS[go.TREE_LANTERN[0]].x.toFixed(3)}, ${go.LANTERNS[go.TREE_LANTERN[0]].y.toFixed(3)}, ${go.LANTERNS[go.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

${xE()}

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
	vec3 rel = (v_pos - vec3(${_r(hi[0])}, ${_r(hi[1])}, ${_r(hi[2])})) / vec3(${_r(ui[0])}, ${_r(ui[1])}, ${_r(ui[2])});
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
}`;R2.exports=e=>{let t=null,r=C2(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=C2(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),o=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=wE(bE(a));t=e({vert:_E,frag:EE,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:r,bark:n,time:()=>yE.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-o)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var H2=J((VS,qf)=>{"use strict";var Ff=ur().GLSL,{A:P2,BENCH:F2,oculusGLSL:q2}=dn(),I2=cn(),ME=1.74,AE=1.877,Tn=ME/AE,sa={x:P2.cx-1.22,z:P2.zc+.02,hipY:F2.seat+.115},Cr=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Df=e=>[-e[0],-e[1],-e[2],e[3]],ca=(e,t)=>{let r=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/r*n,e[1]/r*n,e[2]/r*n,Math.cos(t/2)]},Gf=(e,t,r)=>Cr(ca([0,0,1],r*Math.PI/180),Cr(ca([0,1,0],t*Math.PI/180),ca([1,0,0],e*Math.PI/180))),TE=e=>{let t=Math.hypot(...e)||1;return e.map(r=>r/t)};function Gn(e,t,r){let[n,o,a,i]=t,s=n*n,c=o*o,f=a*a,l=n*o,m=n*a,h=o*a,u=i*n,p=i*o,d=i*a;return[(1-2*(c+f))*r[0],2*(l+d)*r[0],2*(m-p)*r[0],0,2*(l-d)*r[1],(1-2*(s+f))*r[1],2*(h+u)*r[1],0,2*(m+p)*r[2],2*(h-u)*r[2],(1-2*(s+c))*r[2],0,e[0],e[1],e[2],1]}function nn(e,t){let r=new Array(16);for(let n=0;n<4;n++)for(let o=0;o<4;o++)r[n*4+o]=e[o]*t[n*4]+e[4+o]*t[n*4+1]+e[8+o]*t[n*4+2]+e[12+o]*t[n*4+3];return r}function SE(e){let t=Math.hypot(e[0],e[1],e[2]),r=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),o=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/r,c=e[5]/r,f=e[6]/r,l=e[8]/n,m=e[9]/n,h=e[10]/n,u=o+c+h,p;if(u>0){let d=Math.sqrt(u+1)*2;p=[(f-m)/d,(l-i)/d,(a-s)/d,d/4]}else if(o>c&&o>h){let d=Math.sqrt(1+o-c-h)*2;p=[d/4,(s+a)/d,(l+i)/d,(f-m)/d]}else if(c>h){let d=Math.sqrt(1+c-o-h)*2;p=[(s+a)/d,d/4,(m+f)/d,(l-i)/d]}else{let d=Math.sqrt(1+h-o-c)*2;p=[(l+i)/d,(m+f)/d,d/4,(a-s)/d]}return TE(p)}var mc={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,r=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,o)=>{mc[e+"Hand"+n+"1"]=[0,0,t*(18+o*6)*r],mc[e+"Hand"+n+"2"]=[0,0,t*(26+o*6)*r],mc[e+"Hand"+n+"3"]=[0,0,t*16*r]})}function ia(e,t,r){let n=e-t;return n-=Math.round(n),Math.exp(-(n/r)*(n/r))}function O2(e){let t=9+20*Math.cos(2*Math.PI*e),r=4+13*ia(e,.14,.07)+57*ia(e,.72,.12),n=5*ia(e,.06,.04)-9*ia(e,.42,.12)+17*ia(e,.62,.05)-3*ia(e,.85,.1),o=-26*ia(e,.58,.06);return{hip:t,knee:r,ankle:n,toe:o}}function kE(e){let t=(e%1+1)%1,r=O2(t),n=O2(t+.5),o=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*o,0,0],RightArm:[-16*o,0,0],LeftForeArm:[0,-14-8*Math.max(0,-o),0],RightForeArm:[0,14+8*Math.max(0,o),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-r.hip,0,0],LeftLeg:[r.knee,0,0],LeftFoot:[r.ankle,0,0],LeftToeBase:[r.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*o}}var D2=`
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
}`,gc=Vo(),G2=`
precision highp float;
${Ff}
uniform float time;
${gc.lanternGLSL(gc.TREE_LANTERN)}
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
// in the confessional: the priest's lamp (xyz, strength), and how much of
// the court's own light reaches him (0 there)
uniform vec4 boothLamp;
uniform float court;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${q2()}
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
}`;function LE(e,t){let r=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((o,a)=>{let i=new Image;i.onload=()=>o(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}var $2={w:.13,h:.2},vc=e=>.011*(1-Math.pow(1-e,3));function zE(){let e=[],t=[],r=[],n=[],o=[],a=(d,v,g,x,b,y,E)=>{let _=e.length/3;[d,v,g,x].forEach((z,S)=>{e.push(...z),t.push(...b),r.push(...E[S]),n.push(y)}),o.push(_,_+1,_+2,_,_+2,_+3)},{w:i,h:s}=$2,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,m=i+.001,h=c+.001;a([0,l,-h],[m,l,-h],[m,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[m,l+.001,h],[m,l+.001,-h],[0,1,0],2,f),a([-m,l,-h],[0,l,-h],[0,l,h],[-m,l,h],[0,-1,0],2,f),a([-m,l+.001,-h],[-m,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let u=8;for(let d of[1,-1]){for(let g=0;g<u;g++){let x=g/u,b=(g+1)/u,y=(.002+x*(i-.002))*d,E=(.002+b*(i-.002))*d,_=vc(x),z=vc(b),S=d>0?x:1-x,L=d>0?b:1-b,D=1,O=-(z-_)/(E-y);a([y,_,-c],[E,z,-c],[E,z,c],[y,_,c],[O,D,0],3,[[S,1],[L,1],[L,0],[S,0]]),a([y,l+.001,c],[E,l+.001,c],[E,z,c],[y,_,c],[0,0,1],4,f),a([y,_,-c],[E,z,-c],[E,l+.001,-c],[y,l+.001,-c],[0,0,-1],4,f)}let v=i*d;a([v,l+.001,-c],[v,vc(1),-c],[v,vc(1),c],[v,l+.001,c],[d,0,0],4,f)}let p=10;for(let d=0;d<p;d++){let v=d/p,g=(d+1)/p,x=e.length/3;for(let[b,y]of[[v,-c],[g,-c],[g,c],[v,c]])e.push(b,0,y),t.push(0,1,0),r.push(b,(y+c)/s),n.push(5);o.push(x,x+1,x+2,x,x+2,x+3)}return{pos:e,nrm:t,uv:r,kind:n,idx:o}}function CE(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let r=7,n=()=>(r=r*16807%2147483647,r/2147483647),o=(i,s,c,f,l,m,h)=>{for(let u=0;u<m;u++){let p=i+(n()-.5)*c*2,d=s+(n()-.5)*f*2,v=20+n()*60,g=t.createRadialGradient(p,d,0,p,d,v);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),t.fillStyle=g,t.fillRect(p-v,d-v,v*2,v*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var RE=`
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
		float r = u * ${$2.w.toFixed(3)};
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
}`,NE=`
precision highp float;
${Ff}
uniform float time;
${gc.lanternGLSL(gc.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${q2()}
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
}`;function PE(){let e=[],t=[],r=[],n=[],o=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],m=16;for(let h=0;h<l.length;h++){let[u,p,d,v]=l[h],g=v===2?.45:1;for(let x=0;x<=m;x++){let b=x/m*Math.PI*2;e.push(Math.cos(b)*u,p,Math.sin(b)*u*g);let y=Math.max(h-1,0),E=Math.min(h+1,l.length-1),_=l[E][0]-l[y][0],z=l[E][1]-l[y][1],S=Math.hypot(_,z)||1;t.push(Math.cos(b)*z/S,-_/S,Math.sin(b)*z/S/g),r.push(...d),n.push(v)}}for(let h=0;h<l.length-1;h++)for(let u=0;u<m;u++){let p=h*(m+1)+u,d=p+m+1;o.push(p,d,p+1,p+1,d,d+1)}return{pos:e,nrm:t,col:r,mat:n,idx:o}}var IE=`
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
}`,OE=`
precision highp float;
${Ff}
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
}`,DE=`
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
}`,GE=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;qf.exports=e=>{let t="res/avatar/",r=null,n=Date.now(),o=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[sa.x,1.9,sa.z],glow:0};Promise.all([fetch(t+"avatar.json").then(_=>_.json()),fetch(t+"avatar.bin").then(_=>_.arrayBuffer())]).then(([_,z])=>{r=s(_,z)}).catch(_=>console.error(_));let i=e.texture({data:[[[255,255,255,255]]]});function s(_,z){let S=(Z,pe)=>new Float32Array(z,Z,pe),L=_.bones,D=L.length,O={};L.forEach((Z,pe)=>{O[Z.name]=pe});let G=[];for(let Z=0;Z<D;Z++)G.push(Array.from(S(_.ibm+Z*64,16)));let C=L.map(Z=>Gn(Z.t,Z.r,Z.s)),R=[];for(let Z=0;Z<D;Z++){let pe=L[Z].parent;R[Z]=pe<0?C[Z]:nn(R[pe],C[Z])}let K=R.map(SE),Y=_.meshes.map(Z=>{let pe=S(Z.pos,Z.n*3),ue=S(Z.nrm,Z.n*3),Me=S(Z.uv,Z.n*2),Pe=new Uint8Array(z,Z.jnt,Z.n*4),Ke=S(Z.wgt,Z.n*4),Ve=new Uint16Array(z,Z.idx,Z.ni),Xe={};for(let U in Z.morphs){let F=Z.morphs[U];Xe[U]={idx:new Uint16Array(z,F.idx,F.n),d:S(F.d,F.n*3)}}let T=new Float32Array(Z.n*3),$=new Float32Array(Z.n*3),q=new Float32Array(Z.n*3),ae=e.buffer({data:T,usage:"dynamic"}),fe=e.buffer({data:$,usage:"dynamic"}),M=/hair/.test(Z.name),w=/EyeAO|Eyelash/.test(Z.name),N=/Body|Head/.test(Z.name),H=Z.kind||0;return{m:Z,pos:pe,nrm:ue,uv:Me,jnt:Pe,wgt:Ke,idx:Ve,morphs:Xe,outP:T,outN:$,work:q,pb:ae,nbuf:fe,tex:Z.tex?LE(e,t+Z.tex):i,kind:H,alphaScale:/EyeAO/.test(Z.name)?.25:1,blend:Z.blend||M,alphaCut:M?.35:w?.02:0,skin:N?1:0}}),ee=e({vert:D2,frag:G2,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>y?y.lamp:[0,0,0,0],court:()=>y?0:1},cull:{enable:!1}}),V=e({vert:D2,frag:G2,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>y?y.lamp:[0,0,0,0],court:()=>y?0:1},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}});for(let Z of Y)Z.uvBuf=e.buffer(Z.uv),Z.el=e.elements({data:Z.idx,type:"uint16"});let he=R[O.Hips],ve=ca([1,0,0],-Math.PI/2),we=nn(Gn([sa.x-he[12]*Tn,sa.hipY-he[14]*Tn,sa.z+he[13]*Tn],ve,[1,1,1]),Gn([0,0,0],[0,0,0,1],[Tn,Tn,Tn])),oe=new Array(D),De=-1,be=(Z,pe,ue)=>nn(Gn([Z,0,pe],ca([0,1,0],ue),[1,1,1]),Gn([0,0,0],[0,0,0,1],[Tn,Tn,Tn])),qe=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Z=>O[Z]),Fe=qe.map(Z=>R[Z][13]*Tn);function $e(Z){let pe=kE(Z.phase),ue={},Me=$=>{for(let q in $){let ae=$[q],fe=Gf(ae[0],ae[1],ae[2]);ue[q]=ue[q]?Cr(ue[q],fe):fe}};Me(pe.swing),Me(pe.pose);let Pe=Math.cos(Z.heading),Ke=-Math.sin(Z.heading),Ve=be(Z.x+Pe*pe.sway,Z.z+Ke*pe.sway,Z.heading),Xe=new Array(D);for(let $=0;$<D;$++){let q=L[$],ae=C[$],fe=ue[q.name];if(fe){let M=K[$],w=Cr(Df(M),Cr(fe,M));ae=Gn(q.t,Cr(q.r,w),q.s)}Xe[$]=q.parent<0?nn(Ve,ae):nn(Xe[q.parent],ae)}let T=1/0;qe.forEach(($,q)=>{T=Math.min(T,Xe[$][13]-Fe[q])});for(let $=0;$<D;$++)Xe[$]=Xe[$].slice(),Xe[$][13]-=T,oe[$]=nn(Xe[$],G[$]);return{blink:0}}function le(Z,pe){let ue=Math.sin(Z*2*Math.PI/4.6),Me=Math.sin(Z*.37)*.6+Math.sin(Z*.83+1)*.4,Pe={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+ue*.8,0,0],Spine2:[4+ue*.6,0,0],Neck:[10,0,0],Head:[12+Me*2,Me*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Ke={};for(let ae in Pe){let fe=Pe[ae];Ke[ae]=Gf(fe[0],fe[1],fe[2])}let Ve=be(pe.x,pe.z,pe.heading),Xe=new Array(D);for(let ae=0;ae<D;ae++){let fe=L[ae],M=C[ae],w=Ke[fe.name];if(w){let N=K[ae],H=Cr(Df(N),Cr(w,N));M=Gn(fe.t,Cr(fe.r,H),fe.s)}Xe[ae]=fe.parent<0?nn(Ve,M):nn(Xe[fe.parent],M)}let $=Xe[O.Hips][13]-(pe.y+.1);for(let ae=0;ae<D;ae++)Xe[ae]=Xe[ae].slice(),Xe[ae][13]-=$,oe[ae]=nn(Xe[ae],G[ae]);let q=Z%4.1;return{blink:q<.16?Math.sin(q/.16*Math.PI):0}}function Se(Z,pe){if(y)return le(Z,y);if(pe)return $e(pe);let ue=Math.sin(Z*2*Math.PI/4.2),Me=Z%3.7,Pe=Me<.16?Math.sin(Me/.16*Math.PI):0,Ve={RightArm:[0,0,11*Math.sin(Z*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((fe,M)=>{let w=Math.sin(Z*1.1-M*.5);Ve["RightHand"+fe+"1"]=[0,0,8+12*w],Ve["RightHand"+fe+"2"]=[0,0,6+10*w]});let Xe={},T=(fe,M)=>{for(let w in fe){let N=fe[w],H=Gf(N[0]*M,N[1]*M,N[2]*M);Xe[w]=Xe[w]?Cr(Xe[w],H):H}};T(mc,1),T({Spine1:[ue*.8,0,0],Spine2:[ue*.6,0,0]},1),T(Ve,1);let $=new Array(D),q=new Array(D);for(let fe=0;fe<D;fe++){let M=L[fe],w=C[fe],N=Xe[M.name];if(N){let H=K[fe],U=Cr(Df(H),Cr(N,H));w=Gn(M.t,Cr(M.r,U),M.s)}$[fe]=M.parent<0?nn(we,w):nn($[M.parent],w),q[fe]=null}for(let fe=0;fe<D;fe++)oe[fe]=nn($[fe],G[fe]);let ae=fe=>[fe[12],fe[13],fe[14]];return a.headPos=ae($[O.Head]),a.hipsPos=ae($[O.Hips]),a.headM=$[O.Head],{blink:Pe}}function Re(Z,pe){let{pos:ue,nrm:Me,jnt:Pe,wgt:Ke,outP:Ve,outN:Xe,work:T,m:$}=Z,q=$.n,ae=ue;if(pe){T.set(ue);for(let fe in Z.morphs){let M=pe[fe]||0;if(M<=0)continue;let w=Z.morphs[fe];for(let N=0;N<w.idx.length;N++){let H=w.idx[N]*3;T[H]+=w.d[N*3]*M,T[H+1]+=w.d[N*3+1]*M,T[H+2]+=w.d[N*3+2]*M}}ae=T}for(let fe=0;fe<q;fe++){let M=ae[fe*3],w=ae[fe*3+1],N=ae[fe*3+2],H=Me[fe*3],U=Me[fe*3+1],F=Me[fe*3+2],I=0,B=0,A=0,P=0,k=0,j=0;for(let re=0;re<4;re++){let ce=Ke[fe*4+re];if(ce===0)continue;let ne=oe[Pe[fe*4+re]];I+=ce*(ne[0]*M+ne[4]*w+ne[8]*N+ne[12]),B+=ce*(ne[1]*M+ne[5]*w+ne[9]*N+ne[13]),A+=ce*(ne[2]*M+ne[6]*w+ne[10]*N+ne[14]),P+=ce*(ne[0]*H+ne[4]*U+ne[8]*F),k+=ce*(ne[1]*H+ne[5]*U+ne[9]*F),j+=ce*(ne[2]*H+ne[6]*U+ne[10]*F)}Ve[fe*3]=I,Ve[fe*3+1]=B,Ve[fe*3+2]=A;let X=Math.hypot(P,k,j)||1;Xe[fe*3]=P/X,Xe[fe*3+1]=k/X,Xe[fe*3+2]=j/X}$.grid&&!Ge&&!y&&We(Z),Z.pb.subdata(Ve),Z.nbuf.subdata(Xe)}function We(Z){let[pe,ue]=Z.m.grid,Me=Z.outP,Pe=Z.outN,Ke=F2.seat+.012;for(let Ve=1;Ve<pe;Ve++){let Xe=Math.pow(1-Ve/(pe-1),1.5);for(let T=0;T<ue;T++){let $=(Ve*ue+T)*3;Me[$+1]>Ke?Me[$+1]=Ke+(Me[$+1]-Ke)*Math.max(Xe,.15):Me[$+1]=Ke}}for(let Ve=0;Ve<Pe.length;Ve+=3)Pe[Ve]=0,Pe[Ve+1]=1,Pe[Ve+2]=0}let Ge=!1;function Ne(Z,pe){Ge=!!pe;let ue=Se(Z,pe),Me={eyeBlinkLeft:ue.blink,eyeBlinkRight:ue.blink};for(let Pe of Y)Re(Pe,Object.keys(Pe.morphs).length?Me:null);a.pose=ue}return{parts:Y,update:Ne,drawOpaque:ee,drawBlend:V,state:a}}function c(_,z,S){let L=Math.min(1,Math.max(0,(S-_)/(z-_)));return L*L*(3-2*L)}let f=zE(),l=CE(),m=l?e.texture({data:l,flipY:!1,min:"linear",mag:"linear"}):i,h=e({vert:RE,frag:NE,attributes:{position:f.pos,normal:f.nrm,uv:f.uv,kind:f.kind},elements:new Uint16Array(f.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:m},cull:{enable:!1}}),u=PE(),p=e({vert:IE,frag:OE,attributes:{position:u.pos,normal:u.nrm,color:u.col,mat:u.mat},elements:new Uint16Array(u.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),d=e({vert:DE,frag:GE,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function v(_){let z=_.headM,S=Y=>{let ee=Math.hypot(...Y)||1;return Y.map(V=>V/ee)},L=S([z[4],z[5],z[6]]),D=S([z[8],z[9],z[10]]),O=L,G=D.map(Y=>-Y),C=[G[1]*O[2]-G[2]*O[1],G[2]*O[0]-G[0]*O[2],G[0]*O[1]-G[1]*O[0]],R=_.headPos,K=[0,1,2].map(Y=>R[Y]+L[Y]*.06+D[Y]*.185);return[C[0],C[1],C[2],0,G[0],G[1],G[2],0,O[0],O[1],O[2],0,K[0],K[1],K[2],1]}let g=-1,x="",b=null,y=null;function E(_){if(!r)return;let z=(I2.motion,o()),S=b?[b.x,b.z,b.heading,b.phase].map(D=>D.toFixed(4)).join():"";(y||S!==x||!b&&Math.abs(z-g)>(I2.isPhone?1/30:0))&&(r.update(z,b),g=z,x=S);for(let D of r.parts)D.blend||r.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale});let L=r.state;if(L.headM&&!b&&!y){h({model:v(L)});let D=L.headPos,O=Math.sin(z*1.3)*.02,G=[D[0],D[1]+.62+O,D[2]+.05],C=z*.6,R=Gn(G,Cr(ca([0,1,0],C),ca([0,0,1],.18)),[1.2,1.2,1.2]),K=.5+.5*Math.sin(z*2);p({model:R,pulse:K}),a.glowPos=G,a.glow=.06+.03*K,d({center:[G[0],G[1]-.12,G[2]],size:.1,pulse:K})}for(let D of r.parts)D.blend&&r.drawBlend({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale})}return E.state=a,E.place=sa,E.setWalk=_=>{b=_||null,b&&(a.glow=0)},E.setSeat=_=>{y=_||null,a.glow=y?0:a.glow,g=-1},E};qf.exports.PLACE=sa});var $f=J((XS,B2)=>{"use strict";B2.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Bf=J((YS,Y2)=>{"use strict";var V2=cn(),U2=Li(),xo=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Hf(){return V2.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var FE=`
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
`,j2=!1;function X2(){if(j2)return;j2=!0;let e=document.createElement("style");e.textContent=FE,document.head.appendChild(e)}var qE='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function $E(e){return!e||!e.visit||!Hf()?"":(X2(),`<button type="button" class="visit-btn" data-visit="${xo(e.slug||"")}" aria-label="Visit what remained: watch ${xo(e.title)} come to life">${qE}<span>Visit what remained</span></button>`)}function HE(e){let t=e.getContext("2d");e.width=e.height=160;let r=t.createImageData(160,160),n=!0,o=0;return(function a(i){if(n){if(i-o>70){o=i;let s=r.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(r,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}})(0),()=>{n=!1}}var As=null;function BE(e){if(As||!e||!e.visit)return;X2();let t=document.activeElement;document.body.classList.add("visiting");let r="images/web/"+e.slug+(V2.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${xo(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${xo(e.title)}, ${xo(U2(e))}" src="${xo(r)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${xo(e.title)}</span>
			<span class="visit-meta">${xo(U2(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let o=n.querySelector("video"),a=n.querySelector(".visit-title"),i=HE(n.querySelector(".visit-grain")),s=[],c=(v,g)=>s.push(setTimeout(v,g)),f=v=>v.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(v=>n.addEventListener(v,f));let l=v=>{v.key==="Escape"?(v.preventDefault(),d()):v.key===" "&&!(v.target&&v.target.tagName==="BUTTON")&&(v.preventDefault(),u()),v.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let m=v=>v.stopImmediatePropagation();window.addEventListener("keyup",m,!0);let h=!1;function u(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let v=n.querySelector('[data-act="back"]');v&&v.focus({preventScroll:!0})},1300))}function p(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{o.currentTime=0}catch(g){}let v=o.play();v&&v.catch&&v.catch(()=>u()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}o.addEventListener("timeupdate",()=>{o.duration&&o.currentTime>o.duration-1.2&&u()}),o.addEventListener("ended",u),o.addEventListener("error",u);function d(){if(As){As=null,s.forEach(clearTimeout),n.classList.remove("on");try{o.pause()}catch(v){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",m,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",d),n.querySelector(".visit-skip").addEventListener("click",()=>{try{o.pause()}catch(v){}u()}),n.querySelector(".visit-end").addEventListener("click",v=>{let g=v.target.closest("button");g&&(g.dataset.act==="back"&&d(),g.dataset.act==="again"&&(s.forEach(clearTimeout),p()))}),o.src=e.visit.video,As={close:d},requestAnimationFrame(()=>{n.classList.add("on"),c(p,1300)})}var W2={};function UE(e){if(!e||!e.visit||W2[e.visit.video]||!Hf())return;W2[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}Y2.exports={available:Hf,button:$E,open:BE,warm:UE,get active(){return!!As}}});var Uf=J((KS,K2)=>{K2.exports=1e-6});var jf=J((QS,Q2)=>{Q2.exports=jE;function jE(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var J2=J((ZS,Z2)=>{Z2.exports=WE;function WE(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Wf=J((JS,eg)=>{eg.exports=VE;function VE(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}});var Vf=J((e8,tg)=>{tg.exports=XE;function XE(e,t){var r=t[0],n=t[1],o=t[2],a=r*r+n*n+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var Xf=J((t8,rg)=>{rg.exports=YE;function YE(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var ig=J((r8,ag)=>{ag.exports=QE;var ng=Wf(),og=Vf(),KE=Xf();function QE(e,t){var r=ng(e[0],e[1],e[2]),n=ng(t[0],t[1],t[2]);og(r,r),og(n,n);var o=KE(r,n);return o>1?0:Math.acos(o)}});var cg=J((n8,sg)=>{sg.exports=ZE;function ZE(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var fg=J((o8,lg)=>{lg.exports=JE;function JE(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}});var ug=J((a8,hg)=>{hg.exports=eM;var Yf=Uf();function eM(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(r-a)<=Yf*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=Yf*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(o-s)<=Yf*Math.max(1,Math.abs(o),Math.abs(s))}});var pg=J((i8,dg)=>{dg.exports=tM;function tM(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var mg=J((s8,vg)=>{vg.exports=rM;function rM(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}});var Kf=J((c8,gg)=>{gg.exports=nM;function nM(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}});var yg=J((l8,xg)=>{xg.exports=Kf()});var Qf=J((f8,bg)=>{bg.exports=oM;function oM(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}});var _g=J((h8,wg)=>{wg.exports=Qf()});var Zf=J((u8,Eg)=>{Eg.exports=aM;function aM(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}});var Ag=J((d8,Mg)=>{Mg.exports=Zf()});var Sg=J((p8,Tg)=>{Tg.exports=iM;function iM(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}});var Lg=J((v8,kg)=>{kg.exports=sM;function sM(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}});var Cg=J((m8,zg)=>{zg.exports=cM;function cM(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var Ng=J((g8,Rg)=>{Rg.exports=lM;function lM(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var Ig=J((x8,Pg)=>{Pg.exports=fM;function fM(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var Dg=J((y8,Og)=>{Og.exports=hM;function hM(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}});var Fg=J((b8,Gg)=>{Gg.exports=uM;function uM(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}});var Jf=J((w8,qg)=>{qg.exports=dM;function dM(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}});var Hg=J((_8,$g)=>{$g.exports=Jf()});var eh=J((E8,Bg)=>{Bg.exports=pM;function pM(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}});var jg=J((M8,Ug)=>{Ug.exports=eh()});var th=J((A8,Wg)=>{Wg.exports=vM;function vM(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}});var Xg=J((T8,Vg)=>{Vg.exports=th()});var rh=J((S8,Yg)=>{Yg.exports=mM;function mM(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}});var Qg=J((k8,Kg)=>{Kg.exports=rh()});var Jg=J((L8,Zg)=>{Zg.exports=gM;function gM(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var tx=J((z8,ex)=>{ex.exports=xM;function xM(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var nx=J((C8,rx)=>{rx.exports=yM;function yM(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2];return e[0]=o*c-a*s,e[1]=a*i-n*c,e[2]=n*s-o*i,e}});var ax=J((R8,ox)=>{ox.exports=bM;function bM(e,t,r,n){var o=t[0],a=t[1],i=t[2];return e[0]=o+n*(r[0]-o),e[1]=a+n*(r[1]-a),e[2]=i+n*(r[2]-i),e}});var sx=J((N8,ix)=>{ix.exports=wM;function wM(e,t){t=t||1;var r=Math.random()*2*Math.PI,n=Math.random()*2-1,o=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=n*t,e}});var lx=J((P8,cx)=>{cx.exports=_M;function _M(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[3]*n+r[7]*o+r[11]*a+r[15];return i=i||1,e[0]=(r[0]*n+r[4]*o+r[8]*a+r[12])/i,e[1]=(r[1]*n+r[5]*o+r[9]*a+r[13])/i,e[2]=(r[2]*n+r[6]*o+r[10]*a+r[14])/i,e}});var hx=J((I8,fx)=>{fx.exports=EM;function EM(e,t,r){var n=t[0],o=t[1],a=t[2];return e[0]=n*r[0]+o*r[3]+a*r[6],e[1]=n*r[1]+o*r[4]+a*r[7],e[2]=n*r[2]+o*r[5]+a*r[8],e}});var dx=J((O8,ux)=>{ux.exports=MM;function MM(e,t,r){var n=t[0],o=t[1],a=t[2],i=r[0],s=r[1],c=r[2],f=r[3],l=s*a-c*o,m=c*n-i*a,h=i*o-s*n;return l*=2,m*=2,h*=2,e[0]=n+f*l+s*h-c*m,e[1]=o+f*m+c*l-i*h,e[2]=a+f*h+i*m-s*l,e}});var vx=J((D8,px)=>{px.exports=AM;function AM(e,t,r,n){var o=r[1],a=r[2],i=t[1]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=o+i*f-s*c,e[2]=a+i*c+s*f,e}});var gx=J((G8,mx)=>{mx.exports=TM;function TM(e,t,r,n){var o=r[0],a=r[2],i=t[0]-o,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var yx=J((F8,xx)=>{xx.exports=SM;function SM(e,t,r,n){var o=r[0],a=r[1],i=t[0]-o,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=o+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var wx=J((q8,bx)=>{bx.exports=kM;var yo=jf()();function kM(e,t,r,n,o,a){var i,s;for(t||(t=3),r||(r=0),n?s=Math.min(n*t+r,e.length):s=e.length,i=r;i<s;i+=t)yo[0]=e[i],yo[1]=e[i+1],yo[2]=e[i+2],o(yo,yo,a),e[i]=yo[0],e[i+1]=yo[1],e[i+2]=yo[2];return e}});var Ex=J(($8,_x)=>{_x.exports={EPSILON:Uf(),create:jf(),clone:J2(),angle:ig(),fromValues:Wf(),copy:cg(),set:fg(),equals:ug(),exactEquals:pg(),add:mg(),subtract:Kf(),sub:yg(),multiply:Qf(),mul:_g(),divide:Zf(),div:Ag(),min:Sg(),max:Lg(),floor:Cg(),ceil:Ng(),round:Ig(),scale:Dg(),scaleAndAdd:Fg(),distance:Jf(),dist:Hg(),squaredDistance:eh(),sqrDist:jg(),length:th(),len:Xg(),squaredLength:rh(),sqrLen:Qg(),negate:Jg(),inverse:tx(),normalize:Vf(),dot:Xf(),cross:nx(),lerp:ax(),random:sx(),transformMat4:lx(),transformMat3:hx(),transformQuat:dx(),rotateX:vx(),rotateY:gx(),rotateZ:yx(),forEach:wx()}});var Tx=J((H8,Ax)=>{"use strict";function Mx(){let e={};return{on(t,r){return(e[t]=e[t]||[]).push(r),this},emit(t,r){(e[t]||[]).slice().forEach(n=>n(r))}}}Ax.exports=function(t){let r=t.ownerDocument||document,n=Mx(),o=null,a={dx:0,dy:0,dt:0},i=0,s=()=>r.pointerLockElement||r.webkitPointerLockElement||null,c=()=>{if(s())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let m=l.call(t);m&&m.catch&&m.catch(()=>{})}catch(m){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){o&&(n.emit("release"),o.emit("end"),o=null);return}o=Mx(),i=Date.now(),n.emit("attain",o)};return r.addEventListener("pointerlockchange",f),r.addEventListener("webkitpointerlockchange",f),r.addEventListener("pointerlockerror",()=>n.emit("error")),(r.body||t).addEventListener("mousemove",l=>{o&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),o.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(r.exitPointerLock||r.webkitExitPointerLock).call(r)},n}});var Cx=J((j8,zx)=>{"use strict";var la=cs(),fa=Ex(),LM=Tx(),B8=Math.PI/4,U8=Math.PI/6,Sx=2,zM=1,CM=2.4,RM=2.4,NM=1e3,PM=5,IM=7,nh=yr().C,Ts=[[7,1.6],[7,nh.zc],[nh.x1-2.95,nh.zc]],bo=Ts.slice(1).map((e,t)=>{let r=Ts[t],n=e[0]-r[0],o=e[1]-r[1],a=Math.hypot(n,o);return{a:r,len:a,dir:[n/a,o/a]}}),oh=bo.reduce((e,t)=>e+t.len,0);function kx(e){let t=Math.max(0,Math.min(oh,e));for(let n of bo){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let r=Ts[Ts.length-1];return[r[0],r[1]]}function OM(e){let t=0;for(let n=0;n<bo.length;n++){let o=bo[n],a=t+o.len;if(e<a-1e-4||n===bo.length-1){let i=o.dir,c=e<=t+1e-4&&n>0?bo[n-1].dir:o.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let r=bo[bo.length-1].dir;return{ahead:r,back:[-r[0],-r[1]]}}var DM=Math.PI/4,GM=7,FM=140,qM=70,Lx=(e,t,r)=>(1-e)*t+e*r,$M=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;zx.exports=function({getGridSegments:e,getGridParts:t},r){var n=[0,Math.PI],o=[0,Math.PI],a=0,i=[0,0,0],s=[IM,Sx,Ts[0][1]],c=0,f=1,l=0,m=[.707,0,.707],h=[0,1,0],u=[0,0,0],p=.5,d=la.identity([]),v=la.identity([]),g=!1,x=[0,0,0],b=[0,0,0],y=1,E=!1;let _=le=>{n[1]+=le*DM},z=(le,Se,Re)=>{if(le=Math.max(Math.min(le,100),-100),Se=Math.max(Math.min(Se,100),-100),n[0]=0,E){a=0;return}for(a+=le;a>=Re;)_(1),a-=Re;for(;a<=-Re;)_(-1),a+=Re};LM(document.body).on("attain",le=>{le.on("data",Se=>{z(Se.dx,Se.dy,FM)})});let L=null,D=null,O=0,G={x:0,y:0},C=58,R=document.createElement("div");R.id="museum-mobile-controls",R.innerHTML=`

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
	`,document.body.appendChild(R);let K=R.querySelector("#museum-joystick"),Y=R.querySelector("#museum-joystick-knob"),ee=()=>{Y.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},V=le=>{let Se=le.clientX-G.x,Re=le.clientY-G.y,We=Math.hypot(Se,Re);if(We>C&&(Se=Se/We*C,Re=Re/We*C),Y.style.transform=`translate(
				calc(-50% + ${Se}px),
				calc(-50% + ${Re}px)
			)`,We<10){i[0]=0,i[2]=0;return}let Ne=Se/C,Z=Re/C;i[0]=0,i[2]=Math.abs(Z)>.15?Z:0},he=(le,Se)=>{for(let Re=0;Re<le.length;Re++)if(le[Re].identifier===Se)return le[Re];return null},ve=le=>!!(le&&le.closest&&le.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),we=le=>{if(!ve(le.target)&&(le.cancelable&&le.preventDefault(),!E))for(let Se=0;Se<le.changedTouches.length;Se++){let Re=le.changedTouches[Se];if(L===null&&Re.clientX<window.innerWidth*.48){L=Re.identifier;let We=K.getBoundingClientRect();G.x=We.left+We.width/2,G.y=We.top+We.height/2,V(Re)}else D===null&&Re.clientX>=window.innerWidth*.48&&(D=Re.identifier,O=Re.clientX,a=0)}},oe=le=>{if(ve(le.target)||(le.cancelable&&le.preventDefault(),E))return;let Se=L===null?null:he(le.touches,L);Se&&V(Se);let Re=D===null?null:he(le.touches,D);if(Re){let We=Re.clientX-O;O=Re.clientX,z(We,0,qM)}},De=le=>{if(!ve(le.target)){le.cancelable&&le.preventDefault();for(let Se=0;Se<le.changedTouches.length;Se++){let Re=le.changedTouches[Se];Re.identifier===L&&(L=null,ee()),Re.identifier===D&&(D=null)}}};document.addEventListener("touchstart",we,{passive:!1}),document.addEventListener("touchmove",oe,{passive:!1}),document.addEventListener("touchend",De,{passive:!1}),document.addEventListener("touchcancel",De,{passive:!1});let be=document.createElement("style");be.textContent=`

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
	`,document.head.appendChild(be);var qe={};let Fe=le=>{if(le.defaultPrevented||le.ctrlKey||le.altKey||le.metaKey)return;let Se=le.type==="keydown";qe[le.code]=Se,Se&&!le.repeat&&!E&&((le.code==="KeyA"||le.code==="ArrowLeft")&&_(-1),(le.code==="KeyD"||le.code==="ArrowRight")&&_(1)),g=!1;let Re=qe.KeyW||qe.ArrowUp?1:0;i=[0,0,(qe.KeyS||qe.ArrowDown?1:0)-Re],le.preventDefault()};window.addEventListener("keydown",Fe),window.addEventListener("keyup",Fe);var $e=0;return{pos:s,fmouse:o,forward:m,up:h,setPaused:le=>{E=!!le,E&&(i[0]=0,i[2]=0,ee())},place:(le,Se)=>{c=Math.max(0,Math.min(oh,le));let Re=kx(c);s[0]=Re[0],s[2]=Re[1],n[1]=Se,o[1]=Se,a=0,f=1},view:()=>d,proj:()=>(la.perspective(v,r(),window.innerWidth/window.innerHeight,.1,700),v),tick:({time:le})=>{let Se=le-$e;$e=le;let Re=[0,0,0],We=[];fa.set(m,Math.sin(o[1]),0,-Math.cos(o[1])),fa.set(h,0,1,0);let Ge=g?RM:CM,Ne=Math.sin(n[1]),Z=-Math.cos(n[1]),pe=OM(c),ue=Ne*pe.ahead[0]+Z*pe.ahead[1],Me=Ne*pe.back[0]+Z*pe.back[1],Pe=f;Math.max(ue,Me)>.3&&(Pe=ue>=Me?1:-1);let Ke=E?0:-i[2]*Ge;l+=(Ke-l)*(1-Math.exp(-Math.min(Se,.1)*5.5)),Ke===0&&Math.abs(l)<.01&&(l=0);let Ve=l*Pe*Math.min(Se,.1);E&&(i[0]=0,i[2]=0,Ve=0,l=0),Ve!==0&&(f=Math.sign(Ve)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(oh,c+Ve));let Xe=kx(c);fa.set(u,Xe[0]-s[0],0,Xe[1]-s[2]);let T=fa.len(u);T===0&&p!==.25&&(p=(Math.abs((p+.5)%1-.5)-.25)*.8+.25,(p+.01)%.25<.02&&(p=.25));let $=p;if(p+=T/(g?PM:NM),s[1]=Sx,fa.add(s,s,u),y<1){y+=Se/zM,y=Math.min(y,1);let q=$M(y);fa.set(s,Lx(q,x[0],b[0]),s[1],Lx(q,x[2],b[2]))}o[0]=0,o[1]+=(n[1]-o[1])*Math.min(1,Math.min(Se,.1)*GM),Math.abs(n[1]-o[1])<5e-4&&(o[1]=n[1]),la.identity(d),la.rotateX(d,d,0),la.rotateY(d,d,o[1]),la.translate(d,d,fa.scale(Re,s,-1))}}}});var Nx=J((W8,Rx)=>{"use strict";var{skylightGLSL:HM,Z_START:BM,Z_END:UM,GLASS_Y:jM}=Ka(),{oculusGLSL:WM,A:ha}=dn(),{windowLightGLSL:VM,C:xc}=yr(),{doorLightGLSL:XM}=Ho(),yc=ur(),on=e=>e.toFixed(4),ah=.1,ih=700,ua={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.045};function YM(e,t){let r=t[0],n=t[1],o=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],m=t[9],h=t[10],u=t[11],p=t[12],d=t[13],v=t[14],g=t[15],x=r*s-n*i,b=r*c-o*i,y=r*f-a*i,E=n*c-o*s,_=n*f-a*s,z=o*f-a*c,S=l*d-m*p,L=l*v-h*p,D=l*g-u*p,O=m*v-h*d,G=m*g-u*d,C=h*g-u*v,R=x*C-b*G+y*O+E*D-_*L+z*S;return R?(R=1/R,e[0]=(s*C-c*G+f*O)*R,e[1]=(o*G-n*C-a*O)*R,e[2]=(d*z-v*_+g*E)*R,e[3]=(h*_-m*z-u*E)*R,e[4]=(c*D-i*C-f*L)*R,e[5]=(r*C-o*D+a*L)*R,e[6]=(v*y-p*z-g*b)*R,e[7]=(l*z-h*y+u*b)*R,e[8]=(i*G-s*D+f*S)*R,e[9]=(n*D-r*G-a*S)*R,e[10]=(p*_-d*y+g*x)*R,e[11]=(m*y-l*_-u*x)*R,e[12]=(s*L-i*O-c*S)*R,e[13]=(r*O-n*L+o*S)*R,e[14]=(d*b-p*E-v*x)*R,e[15]=(l*E-m*b+h*x)*R,e):null}function KM(e,t,r){let n=new Array(16);for(let o=0;o<4;o++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*r[o*4+s];n[o*4+a]=i}for(let o=0;o<16;o++)e[o]=n[o];return e}var QM=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Rx.exports=(e,t)=>{let r=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),o=r?10:22,a=()=>t.post>=2?2:4,i=K=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},K||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=e.framebuffer({color:c,depth:f||!0}),m=[s(),s()],h=[s(),s()],u=[s(),s()],p=[s(),s()],d=new Array(16).fill(0),v=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},y=(K,Y,ee)=>e(Object.assign({vert:QM,frag:K,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Y,framebuffer:e.prop("out")},ee||{})),E=[2.6,0,BM-3.2,12.6,jM,UM+.4],_=[ha.x0-.2,0,ha.z0,ha.x1,ha.domeTop,ha.z1],z=[xc.x0,0,xc.z0,xc.x1,7.6,xc.z1],S=[.35,0,.35,13.65,7.6,9],L=K=>`vec3(${on(K[0])}, ${on(K[1])}, ${on(K[2])}), vec3(${on(K[3])}, ${on(K[4])}, ${on(K[5])})`,D=y(`
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

	${HM()}
	${WM()}
	${VM()}
	${XM()}

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
			vec2 t = hitBox(eye, rd, ${L(E)});
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
			vec2 t = hitBox(eye, rd, ${L(_)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${on(ha.dome.base)} && p.x > ${on(ha.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${L(z)});
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
			vec2 t = hitBox(eye, rd, ${L(S)});
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
	}`,{depthTex:()=>f,invVP:()=>d,eye:()=>g,time:e.context("time"),night:()=>yc.night,strength:()=>{let K=ua.shafts*x.shafts,Y=yc.night;return[.06*K*(1+.9*Y),.1*K*(1+.9*Y),.07*K*(1+.4*Y),.04*K*(1-.75*Y)]}}),O=y(`
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
	}`,{src:e.prop("src"),dir:(K,Y)=>[Y.dir[0]/Y.size[0],Y.dir[1]/Y.size[1]]}),G=y(`
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
	}`,{src:e.prop("src"),texel:(K,Y)=>[.5/Y.size[0],.5/Y.size[1]],threshold:e.prop("threshold")}),C=y(`
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
		return 2.0 * ${on(ah)} * ${on(ih)} / (${on(ih+ah)} - z * ${on(ih-ah)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>m[0],bloomA:()=>h[0],bloomB:()=>u[0],shafts:()=>p[0],res:K=>[K.drawingBufferWidth,K.drawingBufferHeight],time:e.context("time"),exposure:()=>ua.exposure*x.exposure,vignette:()=>Math.min(1,ua.vignette+x.vignette+.22*yc.night),night:()=>yc.night,grain:()=>ua.grain,bloomK:()=>ua.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>t.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:n?1:0},{framebuffer:null}),R=e({framebuffer:()=>l});return{shot:x,look:ua,hasDepth:n,capture(K,Y,ee){let V=K.drawingBufferWidth,he=K.drawingBufferHeight;l.resize(V,he);let ve=Math.max(1,Math.ceil(V/2)),we=Math.max(1,Math.ceil(he/2));m.forEach(oe=>oe.resize(ve,we)),h.forEach(oe=>oe.resize(Math.max(1,Math.ceil(V/4)),Math.max(1,Math.ceil(he/4)))),u.forEach(oe=>oe.resize(Math.max(1,Math.ceil(V/8)),Math.max(1,Math.ceil(he/8)))),p.forEach(oe=>oe.resize(Math.max(1,Math.ceil(V/a())),Math.max(1,Math.ceil(he/a())))),KM(v,Y.proj,Y.view),YM(d,v),g[0]=Y.eye[0],g[1]=Y.eye[1],g[2]=Y.eye[2],R(()=>{e.clear({color:[0,0,0,1],depth:1}),ee()})},present(){let K=Y=>[Y.width,Y.height];n&&t.post>=1&&ua.shafts*x.shafts>.001?(D({out:p[0]}),O({out:p[1],src:p[0],dir:[1,0],size:K(p[0])}),O({out:p[0],src:p[1],dir:[0,1],size:K(p[0])})):e.clear({color:[0,0,0,1],framebuffer:p[0]}),G({out:m[0],src:c,size:[l.width,l.height],threshold:0}),O({out:m[1],src:m[0],dir:[1,0],size:K(m[0])}),O({out:m[0],src:m[1],dir:[0,1],size:K(m[0])}),G({out:h[0],src:m[0],size:K(m[0]),threshold:.42}),O({out:h[1],src:h[0],dir:[1,0],size:K(h[0])}),O({out:h[0],src:h[1],dir:[0,1],size:K(h[0])}),G({out:u[0],src:h[0],size:K(h[0]),threshold:0}),O({out:u[1],src:u[0],dir:[1.5,0],size:K(u[0])}),O({out:u[0],src:u[1],dir:[0,1.5],size:K(u[0])}),C({out:null})}}}});var Gx=J((V8,Dx)=>{"use strict";var Px=ur().GLSL,ZM=$o(),sh=Ho(),{C:JM,FAR_DOOR:eA}=yr(),tA=100*Math.PI/180,Ix=e=>[eA.x-e[2],e[1],JM.zc-7+e[0]],Ox=e=>[-e[2],e[1],e[0]];function rA(e){let t=[],r=[],n=[],o=[],a=ZM.createBuilder(t,r,n,o);sh.addFrames(a,e);let i=sh.glassPanes(e),s=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:s(t),normal:s(r),elements:n,glass:i}}Dx.exports=e=>{let t=sh.DOOR,r=["left","right"].map(l=>{let m=rA(l),h=m.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:m.position.map(u=>u.slice()),srcN:m.normal.map(u=>u.slice()),srcG:m.glass.map(u=>u.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(m.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(m.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(m.elements),type:"uint32"}),glassCount:m.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(m.glass.length*3),outGN:new Float32Array(m.glass.length*3)}}),n=null;function o(l){if(l!==n){n=l;for(let m of r){let h=m.sign*l,u=Math.cos(h),p=Math.sin(h),d=x=>{let b=x[0]-m.hinge,y=x[2];return[m.hinge+b*u+y*p,x[1],-b*p+y*u]},v=x=>[x[0]*u+x[2]*p,x[1],-x[0]*p+x[2]*u];m.src.forEach((x,b)=>{let y=Ix(d(x));m.outP.set(y,b*3),m.outN.set(Ox(v(m.srcN[b])),b*3)});let g=Ox(v([0,0,1]));m.srcG.forEach((x,b)=>{m.outG.set(Ix(d(x)),b*3),m.outGN.set(g,b*3)}),m.pos.subdata(m.outP),m.nrm.subdata(m.outN),m.gpos.subdata(m.outG),m.gnrm.subdata(m.outGN)}}}o(0);let a=`
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
		${Px}
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
		${Px}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{o(c*tA);for(let l of r)i({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of r)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f}});var qx=J((X8,Fx)=>{"use strict";var nA=ur().GLSL,{skylightGLSL:oA}=Ka(),{oculusGLSL:aA}=dn(),{windowLightGLSL:iA}=yr(),Fn=.22;function sA(){let e=[],t=[],r=[],n=[];for(let c=0;c<=14;c++){let f=c/14,l=Fn*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9);for(let m=0;m<=8;m++){let h=m/4-1,u=f*Fn-Fn*.12,p=h*l,d=Math.abs(h)*l*.35-.12*f*f*Fn;e.push([u,d,p]),t.push([0,1,0]),r.push([f,h])}}let i=9;for(let c=0;c<14;c++)for(let f=0;f<i-1;f++){let l=c*i+f,m=l+1,h=l+i,u=h+1;n.push([l,h,m],[m,h,u])}let s=e.length;return e.push([-Fn*.12,0,-.003],[-Fn*.12,0,.003],[-Fn*.24,-.01,.0015],[-Fn*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),r.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([s,s+2,s+1],[s,s+3,s+2]),{pos:e,nrm:t,uv:r,idx:n}}Fx.exports=e=>{let t=sA(),r=e({vert:`
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
		${nA}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${oA()}
		${aA()}
		${iA()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=ur(),o=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Fn*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(r({model:a.model}),n.night>.01&&o({model:a.model}))}}});var Bx=J((Y8,Hx)=>{"use strict";var{skylightGLSL:cA,Z_START:$x,Z_END:lA}=Ka(),{oculusGLSL:fA,A:di}=dn();Hx.exports=(e,t)=>{let r=t.isPhone?900:2600,n=t.isPhone?350:900,o=7,a=()=>(o=o*16807%2147483647,(o-1)/2147483646),i=[];for(let s=0;s<r;s++)i.push([2.5+a()*10.5,.3+a()*8,$x-3.5+a()*(lA-$x+4.5),a()]);for(let s=0;s<n;s++)i.push([di.x0+.3+a()*(di.x1-di.x0-.6),.3+a()*7.5,di.z0+.3+a()*(di.z1-di.z0-.6),a()]);return e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;

		${cA()}
		${fA()}

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
		}`,attributes:{seed:i},count:i.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:s=>s.viewportHeight*.006},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}})}});var Yx=J((K8,Xx)=>{"use strict";var{C:Vx}=yr(),Ux=ur(),jx=15.3,hA=37.1,Wx=Vx.z1+.9,uA=Vx.z1+.7+16-.6;Xx.exports=(e,t)=>{let r=t.isPhone?36:80,n=11,o=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<r;f++){let l=.35+Math.pow(o(),1.8)*2.4;a.push([jx+o()*(hA-jx),l,Wx+o()*(uA-Wx),o()])}let i=[],s=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>Ux.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Ux.night>.01&&c()}}});var ch=J((Q8,Qx)=>{"use strict";function dA(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var Kx={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},pA=["th","ng","er"];function vA(e,t,r){r=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},r||{});let n=e.getContext("2d"),o={};Object.keys(Kx).forEach(d=>{o[d]=Kx[d]*r.pace});let a=[],i=0,s=0,c=0,f=[];function l(d,v){let g=dA(r.seed),x=r.xh,b={},y=R=>{let K=t[R];if(!K)return null;let Y=Math.floor(g()*K.length);return K.length>1&&Y===b[R]&&(Y=(Y+1)%K.length),b[R]=Y,K[Y]},E=R=>{if(t[R])return{g:y(R),sc:1};let K=R.toLowerCase();return t[K]?{g:y(K),sc:/[A-Z]/.test(R)?1.32:1}:null},_=[],z=.15,S=0,L=0,D=(g()-.5)*.02,O=v/x,G=d.split(/\n\s*\n/);G.forEach((R,K)=>{R.replace(/\s+/g," ").trim().split(" ").forEach(ee=>{let V=[];for(let oe=0;oe<ee.length;oe++){let De=ee.substr(oe,2).toLowerCase();if(pA.indexOf(De)>=0&&t[De]&&g()<.55&&ee[oe]===ee[oe].toLowerCase()){V.push({ch:De,gl:{g:y(De),sc:1}}),oe++;continue}let be=E(ee[oe]);be&&be.g&&V.push({ch:ee[oe],gl:be})}let he=V.map(()=>.17+g()*.07),ve=V.reduce((oe,De,be)=>oe+De.gl.g.w*De.gl.sc+he[be],0);S>0&&S+ve>O&&(S=0,L++,z+=o.line,D=(g()-.5)*.02),V.forEach((oe,De)=>{let be=oe.gl.g,qe=oe.gl.sc*(.95+g()*.1),Fe=(g()-.5)*.06,$e=(g()-.5)*.08+D*S,le=S,Se=L*r.lineHeight+1.9+$e,Re=Math.cos(Fe),We=Math.sin(Fe),Ge=Z=>[(le+(Z[0]*Re-Z[1]*We)*qe)*x,(Se+(Z[0]*We+Z[1]*Re)*qe)*x],Ne=(Z,pe)=>{let ue=0;for(let Pe=1;Pe<Z.length;Pe++)ue+=Math.hypot(Z[Pe][0]-Z[Pe-1][0],Z[Pe][1]-Z[Pe-1][1]);let Me=Math.max(r.minDur||(pe?.06:.07),ue/(r.speed*x));_.push({pts:Z,L:ue,start:z,dur:Me,dot:pe}),z+=Me};if(be.s.forEach((Z,pe)=>{pe>0&&(z+=o.stroke),Ne(Z.map(Ge),!1)}),be.dot){let Z=be.s[0][0];be.s.forEach(ue=>ue.forEach(Me=>{Me[1]<Z[1]&&(Z=Me)}));let pe=Ge([Z[0]+.1,-1.36]);z+=o.stroke*1.4,Ne([pe,[pe[0]+x*.05,pe[1]+x*.03]],!0)}z+=o.letter*(.6+g()*.8),S+=be.w*qe+he[De]});let we=ee[ee.length-1];z+=/[.!?]/.test(we)?o.stop:/[,;:]/.test(we)?o.comma:o.word,S+=.55+g()*.2}),K<G.length-1&&(S=0,L+=1.6,z+=o.para)});let C=(L+1)*r.lineHeight*x+x*1.55;return{strokes:_,total:z,height:C}}function m(d,v){if(r.fixed){let g=r.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(d*g),e.height=Math.round(v*g),e.style.height=v+"px",e.style.width=d+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,d,v)}n.strokeStyle=r.ink,n.fillStyle=r.ink,n.lineCap="round",n.lineJoin="round",r.shadow&&(n.shadowColor=r.shadow,n.shadowBlur=r.shadowBlur||6)}let h=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;function u(d,v){let g=f[d.i]||0;if(v<=g)return;let x=r.width*r.xh,b=0;for(let y=1;y<d.pts.length;y++){let E=d.pts[y-1],_=d.pts[y],z=Math.hypot(_[0]-E[0],_[1]-E[1]),S=b,L=b+z;if(b=L,L<=g||z===0)continue;if(S>=v)break;let D=Math.max(0,(g-S)/z),O=Math.min(1,(v-S)/z),G=[E[0]+(_[0]-E[0])*D,E[1]+(_[1]-E[1])*D],C=[E[0]+(_[0]-E[0])*O,E[1]+(_[1]-E[1])*O],R=(S+L)/2/(d.L||1),K=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,R)));n.lineWidth=x*K,n.globalAlpha=.86+.14*K,n.beginPath(),n.moveTo(G[0],G[1]),n.lineTo(C[0],C[1]),n.stroke()}d.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(d.pts[0][0],d.pts[0][1],x*.75,0,Math.PI*2),n.fill()),f[d.i]=v}function p(d){let v=(d-c)/1e3;for(let g=0;g<a.length;g++){let x=a[g];if(x.start>v)break;let b=Math.min(1,(v-x.start)/x.dur);u(x,h(b)*x.L)}if(r.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=v;)g++;a[g]&&r.onPen(a[g].pts[0][1])}v<i?s=requestAnimationFrame(p):r.onDone&&r.onDone()}return{write(d,v){cancelAnimationFrame(s);let g=r.fixed?e.width-2*r.fixed.mx:e.parentElement.clientWidth,x=l(d,g);a=x.strokes,i=x.total;let b=typeof r.maxTime=="function"?r.maxTime(d):r.maxTime;if(b&&i>b){let E=b/i;a.forEach(_=>{_.start*=E,_.dur*=E}),i=b}a.forEach((E,_)=>{E.i=_}),f=[],m(g,x.height);let y=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(v||y){a.forEach(E=>u(E,E.L));return}return c=performance.now(),s=requestAnimationFrame(p),i},finish(){cancelAnimationFrame(s),a.forEach(d=>u(d,d.L)),r.onDone&&r.onDone()},stop(){cancelAnimationFrame(s)}}}Qx.exports=vA});var fh=J((Z8,Zx)=>{"use strict";var lh=ur(),mA='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',gA='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Zx.exports=function(t){let r=document.createElement("button");r.type="button",r.className=t+" light-toggle";let n=()=>{let o=lh.isNight;r.innerHTML=o?mA:gA,r.setAttribute("aria-label",o?"Switch to day":"Switch to night"),r.title=o?"Day":"Night",r.setAttribute("aria-pressed",o?"true":"false")};return n(),lh.onChange(n),["mousedown","pointerdown"].forEach(o=>r.addEventListener(o,a=>a.stopPropagation())),r.addEventListener("click",o=>{o.stopPropagation(),lh.toggle()}),r}});var oy=J((J8,ny)=>{"use strict";var Lt=is(),xA=ch(),yA="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Jx=100,wo=e=>Math.max(0,Math.min(1,e)),pi=(e,t,r)=>{let n=wo((r-e)/(t-e));return n*n*(3-2*n)},da=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,_o=(e,t,r)=>e+(t-e)*r,ey=(e,t,r)=>[_o(e[0],t[0],r),_o(e[1],t[1],r),_o(e[2],t[2],r)];function bc(e,t){let r=e.length-1,n=wo(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-f[l])*a*a+(-i[l]+3*s[l]-3*c[l]+f[l])*a*a*a))}var ty=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function ry(e,t,r){return{eye:ey(e.eye,t.eye,r),target:ey(e.target,t.target,r),fov:_o(e.fov,t.fov,r),roll:_o(e.roll||0,t.roll||0,r)}}var vi={letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Ss={letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},bA=`
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
`;ny.exports=function(t){let{root:r,avatar:n}=t,o=document.createElement("style");o.textContent=bA,document.head.appendChild(o);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,r.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-final"),m=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,h=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let oe=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Jx-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>Jx&&oe&&(s.value=oe[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(oe=>s.addEventListener(oe,De=>De.stopPropagation())),a.addEventListener("pointerdown",oe=>oe.stopPropagation()),a.addEventListener("click",oe=>{let De=oe.target.closest("button");De&&(oe.stopPropagation(),De.dataset.act==="send"&&D(),De.dataset.act==="leave"&&C())});let u=!1,p="",d=0,v=null,g=null,x="",b=null,y=0,E="",_=document.createElement("canvas");_.width=512,_.height=652;function z(oe){oe!==E&&(E=oe,i.classList.toggle("on",oe==="write"),f.classList.toggle("on",oe==="hint"),l.classList.toggle("on",oe==="final"),oe==="write"&&setTimeout(()=>{if(p==="write")try{s.focus({preventScroll:!0})}catch(De){}},900))}function S(oe){p=oe,d=0}function L(oe,De){if(u)return;u=!0,v={eye:oe.eye.slice(),target:oe.target.slice(),fov:oe.fov,roll:oe.roll||0},g=Object.assign({},De),x="",s.value="",c.disabled=!0,Lt.STATE.fold=0,Lt.STATE.slide=0,Lt.STATE.shown=!0,Lt.STATE.active=!0;let be=_.getContext("2d");be.setTransform(1,0,0,1,0,0),be.clearRect(0,0,_.width,_.height),Lt.STATE.ink=_,Lt.STATE.inkDirty=!0,n.setSeat({x:Lt.SEAT.x,z:Lt.SEAT.z,y:Lt.SEAT.y,heading:Lt.SEAT.heading,lamp:[Lt.LAMP[0],Lt.LAMP[1],Lt.LAMP[2],1.6]}),document.body.classList.add("confessing"),S("approach"),z("")}function D(){if(p!=="write"||(x=s.value.trim(),!x))return;s.blur(),z("");let oe=Math.max(10,Math.min(22,24-x.length/28));b=xA(_,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:oe,width:.15,seed:11+x.length,speed:60,pace:.2,minDur:.03,maxTime:De=>2.4+De.length/160,fixed:{mx:46,my:40},onPen:()=>{Lt.STATE.inkDirty=!0},onDone:()=>{Lt.STATE.inkDirty=!0}}),S("down")}function O(){try{let oe={access_key:yA,subject:"A note left in the confessional",from_name:"Your gallery",message:x,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(oe),keepalive:!0}).catch(()=>{})}catch(oe){}}function G(){p==="ready"&&(O(),S("fold"),z(""))}function C(){!u||p==="leave"||(z(""),s.blur(),R=K,S("leave"))}let R=null,K=null,Y=Lt.SHOTS.window;function ee(oe){let De=da(wo(oe)),be=[v.eye,[4.6,1.9,43.4],[1.3,1.5,43],[-.55,1.36,42.92],Y.eye],qe=[v.target,[-.6,1.6,43.6],[-1.4,1.35,43.1],[-1.5,1.33,43.3],Y.target];return{eye:bc(be,De),target:bc(qe,pi(0,1,De*1.04)),fov:_o(v.fov,Y.fov,pi(.2,.9,De)),roll:(v.roll||0)*(1-De)}}function V(oe,De){if(h)return oe;let be=performance.now()/1e3,qe=.004*De,Fe=Math.sin(be*.61)*.6+Math.sin(be*1.37+1.3)*.4,$e=Math.sin(be*.47+2.1)*.6+Math.sin(be*1.13+.4)*.4;return{eye:[oe.eye[0]+Fe*qe,oe.eye[1]+$e*qe*.7,oe.eye[2]],target:[oe.target[0]+$e*qe*1.5,oe.target[1]+Fe*qe,oe.target[2]],fov:oe.fov,roll:oe.roll}}function he(oe,De,be){let qe={};for(let Fe in De)qe[Fe]=typeof De[Fe]=="number"&&typeof oe[Fe]=="number"?_o(oe[Fe],De[Fe],be):De[Fe];return qe}function ve(oe){oe*=window.__confSpeed||1,d+=oe;let De=ty(Y),be=ty(Lt.SHOTS.paper),qe,Fe;if(p==="approach"){let le=wo(d/(h?.6:6.5));qe=ee(le),Fe=he(g,vi,pi(.35,.95,le)),le>=1&&(S("write"),z("write"))}else if(p==="write")qe=V(De,1),Fe=vi;else if(p==="down"){let $e=wo(d/(h?.4:2));qe=ry(De,be,da($e)),Fe=he(vi,Ss,da($e)),$e>=1&&(y=b.write(x,h)||0,Lt.STATE.inkDirty=!0,S("writing"))}else if(p==="writing")qe=V(be,.6),Fe=Ss,d>y+.8&&(S("ready"),f.textContent=m?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",z("hint"));else if(p==="ready")qe=V(be,.6),Fe=Ss;else if(p==="fold"){let $e=wo(d/(h?.3:1.5));Lt.STATE.fold=da($e),qe=V(be,.6),Fe=Ss,$e>=1&&S("slide")}else if(p==="slide"){let le=wo(d/(h?.6:3.4));Lt.STATE.slide=da(pi(0,.7,le));let Se=da(pi(.35,1,le));qe=ry(be,De,Se),Fe=he(Ss,vi,Se),le>=1&&(Lt.STATE.shown=!1,S("final"),z("final"))}else if(p==="final")qe=V(De,1),Fe=vi;else if(p==="leave"){let le=wo(d/(h?.6:5.5)),Se={eye:v.eye,target:v.target,fov:v.fov,roll:v.roll},Re=da(le),We=[R.eye,[-.55,1.4,42.95],[1.6,1.65,43.2],Se.eye],Ge=[R.target,[1.5,1.45,43.3],[6,1.5,46],Se.target];if(qe={eye:bc(We,Re),target:bc(Ge,Re),fov:_o(R.fov,Se.fov,Re),roll:Se.roll*Re},Fe=he(vi,g,pi(.1,.7,le)),le>=1){u=!1,Lt.STATE.active=!1,Lt.STATE.shown=!0,Lt.STATE.fold=0,Lt.STATE.slide=0;let Ne=_.getContext("2d");Ne.setTransform(1,0,0,1,0,0),Ne.clearRect(0,0,_.width,_.height),Lt.STATE.inkDirty=!0,n.setSeat(null),document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return K=qe,{camera:qe,look:Fe}}function we(){p==="ready"?G():p==="writing"&&b&&(b.finish(),d=Math.max(d,y))}return{start:L,update:ve,leave:C,get active(){return u},get stage(){return p},wheel(oe){oe>8&&we()},swipe(oe){oe>0&&we()},tap(){we()},key(oe){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(oe)>=0?(we(),!0):oe==="Escape"?(C(),!0):!1},_setNote(oe){s.value=oe,s.dispatchEvent(new Event("input"))}}}});var vy=J((ek,py)=>{"use strict";var qn=cs(),wc=$f(),hh=Is(),wA=Li(),uh=Bf(),_A=cn(),_c=!_A.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Hr}=dn(),{C:sr,PAINTING_X:yi}=yr(),Br=e=>Math.max(0,Math.min(1,e)),xe=(e,t,r)=>e+(t-e)*r,Mt=(e,t,r)=>[xe(e[0],t[0],r),xe(e[1],t[1],r),xe(e[2],t[2],r)],at=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ay=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],iy=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],me=(e,t,r)=>{let n=Br((r-e)/(t-e));return n*n*(3-2*n)};function EA(e,t,r,n,o,a){if(o<=0)return[e,r];let i=2/n,s=i*o,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,l=Math.max(-f,Math.min(f,e-t)),m=e-l,h=(r+i*l)*o,u=(r-i*h)*c,p=m+(l+h)*c;return t-e>0==p>t&&(p=t,u=0),[p,u]}var sy=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,MA=e=>e*e*e,dh=e=>1-Math.pow(1-e,3),It=e=>-(Math.cos(Math.PI*e)-1)/2;function qt(e,t){let r=e.length-1,n=Br(t)*r,o=Math.min(r-1,Math.floor(n)),a=n-o,i=e[Math.max(0,o-1)],s=e[o],c=e[o+1],f=e[Math.min(r,o+2)],l=a*a,m=l*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-f[h])*l+(-i[h]+3*s[h]-3*c[h]+f[h])*m))}var Je=(e,t,r,n)=>({eye:e,target:t,fov:r,roll:n||0});function xa(e,t,r){return Je(Mt(e.eye,t.eye,r),Mt(e.target,t.target,r),xe(e.fov,t.fov,r),xe(e.roll,t.roll,r))}var yh=()=>me(.75,1.3,window.innerWidth/window.innerHeight),Er=(e,t)=>xa(e,t,yh()),Ec=[7,3.95,sr.hallEnd-.05],AA=[sr.x1,2.9,sr.zc],gi=[16.75,4.55,6.75],bh=[6.92,2.72,14.5],xn=[7.3,.015,47.1],TA=[gi,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],bh],SA=[bh,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],xn],va=[yi[0],3,sr.z0],ma=[yi[1],3,sr.z0],vh=47.45,dy=4.6,kA=13.2,LA=1.42,ks=[7.55,1.25,46.75],wh=[17.25,2.42,46],_h=[26.05,1.95,46],Ls=[36.15,.015,44],Tc=()=>xe(6.8,6.15,yh()),zA=[ks,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],wh],CA=[wh,[20.2,2.05,45.6],[23.2,1.8,45],_h],ga=[yi[2],3,sr.z0],mh=[34.8,1.35,46],Mo=[7.89,.03,19.03],cy=.36,ly=13.64,fr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function an(e){let t=e.side==="left"?1:-1;return Mt([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],yh())}function RA(e){return e.side==="left"?Er(Je([8.6,3.9,e.z],[cy,1.45,e.z],76),Je([8,3.6,e.z+.7],[cy,3.95,e.z-2],46,-.008)):Er(Je([5.4,3.9,e.z],[ly,1.45,e.z],76),Je([6,3.6,e.z-.7],[ly,3.95,e.z+2],46,-.008))}var NA=()=>[Ls,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],an(fr[0])],PA=()=>[an(fr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],an(fr[3])],IA=()=>[an(fr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Mo],fy={2:{pos:()=>bh,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>ks,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>wh,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>_h,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>mh,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>an(fr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>an(fr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>an(fr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>an(fr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>an(fr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>an(fr[5]),amp:[.12,.08,.1],tumble:.5}},Eo=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),r=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Er(Je([sr.x0+.9,1.85,sr.zc+.25],[sr.x1,2.85,sr.zc-.1],64),Je([sr.x0+1.2,2,sr.zc+.35],[sr.x1,2.6,sr.zc-.15],50));return n.eye=at(at(n.eye,[t,0,0]),r),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],r=Er(Je([16.6,1.9,9.2],[17.3,.4,5.6],64),Je([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return r.eye=at(r.eye,t),r}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],r=Er(Je([7,1.35,13],[7.2,7.6,20.4],74,.05),Je([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return r.eye=at(r.eye,t),r}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],r=Er(Je([7,3.6,43.7],[7,3.85,Ec[2]],74),Je([7,3.6,41.3],[7,3.95,Ec[2]],46));return r.eye=at(r.eye,t),r}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=Er(Je([7,3.9,40.3],[7,1.35,Ec[2]],76),Je([6.3,3.6,41.2],[3.7,3.95,Ec[2]],46,-.008));return r.eye=at(r.eye,t),r}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=Er(Je([7.15,.15,46],[7.3,.04,xn[2]],50),Je([7.05,.14,45.9],[7.25,.05,xn[2]],32));return r.eye=at(r.eye,t),r}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],r=Er(Je([7.15,.1,46.3],[7.05,.1,vh],50),Je([7.1,.12,45.85],[7,.2,vh],30));return r.eye=at(r.eye,t),r}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],r=Er(Je([7.3,.85,45.65],[7.6,1.38,47.1],64),Je([7.25,.82,45.8],[7.65,1.35,47.1],44));return r.eye=at(r.eye,t),r}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=Er(Je([va[0],2.3,46.85],[va[0],1.25,va[2]],74),Je([va[0]-.6,2.55,46.85],[va[0]+1.9,2.9,va[2]],46,.008));return r.eye=at(r.eye,t),r}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=Er(Je([ma[0],1.95,46.85],[ma[0],1,ma[2]],74),Je([ma[0]-.6,2.1,46.85],[ma[0]+1.9,2.75,ma[2]],46,.008));return r.eye=at(r.eye,t),r}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],r=Er(Je([ga[0],1.4,46.85],[ga[0],.6,ga[2]],74),Je([ga[0]-.6,1.45,46.85],[ga[0]+1.9,2,ga[2]],46,.008));return r.eye=at(r.eye,t),r}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],r=Er(Je([34.75,.5,44.15],[sr.x1,.8,43.95],66),Je([34.75,.45,44.3],[sr.x1,.35,43.95],50));return r.eye=at(r.eye,t),r}},...fr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(r){let n=[Math.sin(r*.15)*.04,Math.sin(r*.25)*.015,Math.sin(r*.11)*.04],o=RA(e);return o.eye=at(o.eye,n),o}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,r=Er(Je([7.75,2.6,18.6],[7.89,0,19.08],60),Je([7.75,2.3,18.45],[7.89,0,19.08],46)),n=r.eye[0]-Mo[0],o=r.eye[2]-Mo[2];return r.eye=[Mo[0]+n*Math.cos(t)-o*Math.sin(t),r.eye[1],Mo[2]+n*Math.sin(t)+o*Math.cos(t)],r}}],OA=[1,.96,.88];function hy(e,t){return{dur:t,cam(r,n,o){let a=It(r),i=xa(n,o,a),s=fr[e].side==="left"?1:-1;return i.eye=at(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(r,n,o){let a={};for(let i in o)typeof o[i]=="number"&&(a[i]=xe(n[i],o[i],r));return a.aperture=xe(n.aperture,o.aperture,r)*(1-.5*Math.sin(Math.PI*r)),a},leaf(r){let n=It(r),o=an(fr[e]),a=an(fr[e+1]),i=fr[e].side==="left"?1:-1,s=at(Mt(o,a,.5),[i*1.2,.5,0]),c=qt([o,Mt(o,s,.6),s,Mt(a,s,.6),a],n);return{phase:"fly",pos:at(c,[0,Math.sin(r*Math.PI*5)*.07*Math.sin(Math.PI*r),0]),tumble:.5+.35*Math.sin(Math.PI*r)}}}}var ph=[{dur:6.2,cam(e,t,r){if(e<.5){let s=MA(e/.5),c=Mt(t.eye,[sr.x1-3.2,2.6,sr.zc],s),f=Mt(t.target,AA,me(0,.6,e/.5));return Je(c,f,xe(t.fov,t.fov-8,s),xe(t.roll,.04,s))}let n=dh((e-.5)/.5),o=[[Hr.cx+.4,10.4,Hr.zc+.6],[Hr.cx-.6,7.6,Hr.zc+1.3],[Hr.cx-1.9,4.6,Hr.zc+1.75],r.eye],a=[[Hr.cx-.1,0,Hr.zc-.2],[Hr.cx-1,.4,Hr.zc-.1],[Hr.cx-1.1,.8,Hr.zc-.2],r.target];return Je(qt(o,n),qt(a,n),xe(r.fov+14,r.fov,n),xe(-.25,r.roll,n))},look(e,t,r){let n=me(.22,.5,e),o=1-me(.5,.74,e);return{fade:e<.5?n:o,fadeColor:OA,exposure:xe(t.exposure,r.exposure,me(.5,.9,e))*(1+2.2*(e<.5?me(.15,.5,e):1-me(.5,.8,e))),letterbox:xe(t.letterbox,r.letterbox,me(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):r.aperture*me(.6,1,e),focus:xe(4,r.focus,me(.5,1,e)),shafts:xe(t.shafts,r.shafts,me(.4,.6,e)),vignette:xe(t.vignette,r.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,r,n){let o=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],r.eye],a=qt(o,It(e)),i=me(0,.12,e)*(1-me(.82,1,e)),s=Mt(Mt(t.target,r.target,me(.55,1,e)),n.pos,i),c=xe(t.fov,r.fov,me(.3,1,e))-6*Math.sin(Math.PI*e),f=xe(t.roll,r.roll,e)+.05*Math.sin(Math.PI*2*e);return Je(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:xe(t.exposure,r.exposure,me(.25,.75,e)),letterbox:xe(t.letterbox,r.letterbox,e),focus:xe(a,r.focus,me(.8,1,e)),aperture:xe(.7,r.aperture,me(.8,1,e)),shafts:xe(t.shafts,r.shafts,me(.3,.8,e)),vignette:xe(t.vignette,r.vignette,e)}},leaf(e){let t=sy(e),r=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:at(qt(TA,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),r]),tumble:1-.5*me(.8,1,e)}}},{dur:11.5,cam(e,t,r,n){let o=qt([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],me(0,.8,e)*.6+It(Br(e/.8))*.4),a=qt([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],r.eye],It(me(.8,1,e))),i=e<.8?o:a,s=Mt(Mt(t.target,n.pos,me(.03,.22,e)),r.target,me(.82,1,e)),c=xe(t.fov,r.fov,me(.15,.7,e))-6*me(.6,.8,e)*(1-me(.85,1,e)),f=xe(t.roll,r.roll,me(0,.6,e))-.04*Math.sin(Math.PI*e);return Je(i,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{exposure:xe(t.exposure,r.exposure,me(.5,1,e)),letterbox:xe(t.letterbox,r.letterbox,e),focus:xe(a,r.focus,me(.84,1,e)),aperture:xe(1.1,r.aperture,me(.84,1,e)),shafts:xe(t.shafts,r.shafts,me(.2,.9,e)),vignette:xe(t.vignette,r.vignette,me(.5,1,e))}},leaf(e){let t=xe(sy(e),e,.35),r=qt(SA,me(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-me(.55,.76,e)),o=me(.7,.8,e);return{phase:"fly",pos:at(r,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-o),0]),tumble:1-o,swing:n}}},{dur:2.6,cam(e,t,r){let n=It(e),o=xa(t,r,n);return o.eye=at(o.eye,[0,0,-.35*Math.sin(Math.PI*n)]),o},look(e,t,r){let n=It(e),o={};for(let a in r)typeof r[a]=="number"&&(o[a]=xe(t[a],r[a],n));return o},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,r){let n=It(e),o=qt([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],r.eye],n),a=Mt(t.target,r.target,me(.1,.85,e));return Je(o,a,xe(t.fov,r.fov,me(.2,1,e)),xe(t.roll,r.roll,n))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=xe(t[o],r[o],me(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,r){return xa(t,r,It(e))},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=xe(t[o],r[o],It(e)));return n},leaf(){return{phase:"floor"}},walker(e){return xe(dy,Tc(),e)}},{dur:7.5,kick:e=>Br((e-mi())/(1-mi())),cam(e,t,r,n){let o=mi(),a=me(0,o,e)*(1-me(o+.12,o+.35,e)),i=uy(Math.min(e,xi)),s=at(t.target,[(i-t.target[0])*.15*a,0,0]),c=me(o+.12,1,e),f=qt([t.eye,t.eye,at(t.eye,[0,.12,-.3]),r.eye],c);return s=Mt(s,n.pos,me(o+.06,o+.24,e)*(1-me(.9,1,e))),s=Mt(s,r.target,me(.88,1,e)),Je(f,s,xe(t.fov,r.fov,c),xe(t.roll,r.roll,c))},look(e,t,r,n,o){let a=mi(),i=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),s=me(0,.12,e)*(1-me(a+.25,a+.5,e));return{letterbox:xe(xe(t.letterbox,r.letterbox,me(a,1,e)),1.75,s),exposure:xe(t.exposure,r.exposure,me(a,1,e)),focus:e<a?t.focus:xe(t.focus,i,me(a,a+.2,e)),aperture:xe(t.aperture,r.aperture,me(a,1,e)),vignette:xe(t.vignette,r.vignette,e),shafts:xe(t.shafts,r.shafts,e)}},leaf(e){let t=Br((e-mi())/(1-mi()));if(t<=0)return{phase:"floor"};let r=me(0,.85,t)*.85+dh(me(0,.15,t))*.15;return{phase:"fly",pos:at(xn,[(ks[0]-xn[0])*r+Math.sin(t*9)*.08*(1-t),(ks[1]-xn[1])*r,(ks[2]-xn[2])*r+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?uy(e):null}},{dur:9,cam(e,t,r,n){let o=It(e),a=qt([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],r.eye],o),i=1-me(.6,.92,e),s=Mt(Mt(t.target,n.pos,me(0,.15,e)),r.target,1-i),c=xe(t.fov,r.fov,me(.3,1,e)),f=xe(t.roll,r.roll,o)+.04*Math.sin(Math.PI*e);return Je(a,s,c,f)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:xe(t.letterbox,r.letterbox,e),exposure:xe(t.exposure,r.exposure,me(.3,.8,e)),focus:xe(a,r.focus,me(.6,.95,e)),aperture:xe(t.aperture,r.aperture,me(.6,1,e)),vignette:xe(t.vignette,r.vignette,e),shafts:xe(t.shafts,r.shafts,me(.3,.8,e))}},leaf(e){let t=It(e);return{phase:"fly",pos:at(qt(zA,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=It(e),o=xa(t,r,n);return o.eye=at(o.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=xe(t[o],r[o],e));return n.aperture=xe(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=It(e);return{phase:"fly",pos:at(qt(CA,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,r){let n=It(e),o=xa(t,r,n);return o.eye=at(o.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),o},look(e,t,r){let n={};for(let o in r)typeof r[o]=="number"&&(n[o]=xe(t[o],r[o],e));return n.aperture=xe(t.aperture,r.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=It(e);return{phase:"fly",pos:at(qt([_h,[29.2,1.75,45.5],[32.2,1.5,45.4],mh],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,r,n){let o=It(e),a=qt([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],r.eye],o),i=me(.05,.3,e)*(1-me(.8,1,e)),s=Mt(Mt(t.target,r.target,me(.6,1,e)),n.pos,i);return Je(a,s,xe(t.fov,r.fov,me(.2,1,e)),xe(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:xe(t.letterbox,r.letterbox,e),exposure:xe(t.exposure,r.exposure,e),focus:xe(a,r.focus,me(.8,1,e)),aperture:xe(.9,r.aperture,me(.8,1,e)),vignette:xe(t.vignette,r.vignette,e),shafts:xe(t.shafts,r.shafts,e)}},leaf(e){let t=qt([mh,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ls],me(0,.85,e)),r=Math.sin(e*Math.PI*6)*.25*(1-me(.35,.82,e)),n=me(.78,.88,e);return{phase:"fly",pos:at(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),r]),tumble:.7*(1-n),swing:r}}},{dur:12,door(e){let t=Br((e-.02)/.09);return dh(t)+.07*Math.sin(Br((e-.08)/.18)*Math.PI)*(1-Br((e-.08)/.3))},cam(e,t,r,n){let o=Math.sin(e*340)*.012*me(.02,.05,e)*(1-me(.08,.16,e)),a=me(.06,1,e),i=qt([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],r.eye],a*.55+It(a)*.45),s=at(n.pos,[1,-.2,-1.45]);i=Mt(i,s,me(.1,.22,e)*(1-me(.52,.72,e)));let c=me(.06,.16,e)*(1-me(.86,1,e)),f=Mt(t.target,n.pos,c);f=Mt(f,r.target,me(.86,1,e));let l=xe(t.fov,r.fov,me(.1,1,e))+6*Math.sin(Math.PI*me(.08,.9,e)),m=xe(t.roll,r.roll,e)+.06*Math.sin(Math.PI*2*me(.1,.9,e))+o;return Je(at(i,[0,o,0]),f,l,m)},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]),i=me(.02,.06,e)*(1-me(.08,.3,e));return{letterbox:xe(t.letterbox,r.letterbox,me(.1,.4,e)),exposure:xe(t.exposure,r.exposure,e)*(1+.8*i),focus:xe(a,r.focus,me(.86,1,e)),aperture:xe(.8,r.aperture,me(.86,1,e)),vignette:xe(t.vignette,r.vignette,e),shafts:xe(t.shafts,r.shafts,e)+i}},leaf(e){let t=Br((e-.05)/.95);if(t<=0)return{phase:"floor"};let r=qt(NA(),t*.6+It(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:at(r,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>hy(e,7.5)),{dur:10,cam(e,t,r,n){let o=It(e),a=qt([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],r.eye],o),i=me(0,.15,e)*(1-me(.85,1,e)),s=Mt(Mt(t.target,r.target,me(.5,1,e)),n.pos,i);return Je(a,s,xe(t.fov,r.fov,o)+4*Math.sin(Math.PI*o),xe(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:xe(t.letterbox,r.letterbox,e),exposure:xe(t.exposure,r.exposure,e),focus:xe(a,r.focus,me(.85,1,e)),aperture:xe(.6,r.aperture,me(.85,1,e)),vignette:xe(t.vignette,r.vignette,e),shafts:xe(t.shafts,r.shafts,e)}},leaf(e){let t=It(e),r=qt(PA(),t);return{phase:"fly",pos:at(r,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>hy(e,7.5)),{dur:10,cam(e,t,r,n){let o=It(e),a=qt([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],r.eye],o),i=me(0,.2,e)*(1-me(.9,1,e)),s=Mt(Mt(t.target,r.target,me(.5,1,e)),n.pos,i);return Je(a,s,xe(t.fov,r.fov,o),xe(t.roll,r.roll,o))},look(e,t,r,n,o){let a=Math.hypot(n.pos[0]-o[0],n.pos[1]-o[1],n.pos[2]-o[2]);return{letterbox:xe(t.letterbox,r.letterbox,e),exposure:xe(t.exposure,r.exposure,e),focus:xe(a,r.focus,me(.85,1,e)),aperture:xe(.7,r.aperture,me(.85,1,e)),vignette:xe(t.vignette,r.vignette,e),shafts:xe(t.shafts,r.shafts,e)}},leaf(e){let t=qt(IA(),me(0,.86,e)),r=Math.sin(e*Math.PI*7)*.3*(1-me(.4,.84,e)),n=me(.8,.9,e);return{phase:"fly",pos:at(t,[r,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:r}}}],gh=9.2,xi=.6;function uy(e){return e<xi?xe(Tc(),gh,e/xi):xe(gh,kA,(e-xi)/(1-xi))}function mi(){return xi*Br((xn[0]+.15-Tc())/(gh-Tc()))}var xh={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Mc=e=>Object.assign({},xh,Eo[e].look),DA=`
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
`;function $r(e,t,r){let n=document.createElement(e);return t&&(n.className=t),r!==void 0&&(n.innerHTML=r),n}var pa=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Ac(e,t,r){e.querySelectorAll(".tour-line").forEach((n,o)=>{n.style.transitionDelay=(t+o*r).toFixed(2)+"s"})}py.exports=function(t){let r=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let W=document.createElement("link");W.rel="stylesheet",W.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",W.setAttribute("data-tour-font",""),document.head.appendChild(W)}let o=ch(),a=null;fetch("res/hand.json").then(W=>W.ok?W.json():null).then(W=>{a=W}).catch(()=>{});let i=document.createElement("style");i.textContent=DA+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=$r("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=$r("div","tour-mark",pa(wc.name)),f=$r("button","tour-free","Explore freely");f.type="button";let l=$r("div","tour-links",hh.icons("tour-icon"));l.insertBefore(fh()("tour-icon"),l.firstChild),_c&&l.appendChild(f);let m=$r("div","tour-progress",Eo.map(()=>"<i></i>").join("")),h=$r("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),u=h.querySelector("span"),p=$r("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${pa(wc.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);Ac(p,.4,.35);let d=wc.text.split(/\n\s*\n/).map(W=>`<p class="tour-line">${pa(W.trim())}</p>`).join(""),v=$r("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${pa(wc.title)}</h2>
		<span class="tour-rule"></span>
		${hh.line("tour-line tour-contact")}
		${d}`);Ac(v,.25,.28);let g=$r("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);Ac(g,.6,.3);let x=$r("div","tour-card tour-master","");function b(W){let te=$r("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Ee=te.querySelector(".tour-title"),He=te.querySelector(".tour-body");return te.filled=!1,te.body=He,te.fill=()=>{let Qe=W();if(!Qe||te.filled)return;te.filled=!0;let et=Qe.title||"";te.querySelector(".tour-kicker").textContent=wA(Qe)||"Oil on canvas";let bt=te.querySelector(".visit-row");bt.innerHTML=uh.button(Qe),bt.hidden=!bt.innerHTML;let mt=bt.querySelector(".visit-btn");mt&&(mt.addEventListener("click",zt=>{zt.stopPropagation(),uh.open(Qe)}),te.warm=()=>uh.warm(Qe));let xt=0;Ee.innerHTML=et.split(" ").map(zt=>'<span class="tour-word">'+zt.split("").map(Pr=>`<span style="transition-delay:${(.35+xt++*.045).toFixed(3)}s">${pa(Pr)}</span>`).join("")+"</span>").join(" "),Ee.setAttribute("aria-label",et);let Nr=.35+et.length*.045+.2;te.querySelector(".tour-rule").style.transitionDelay=Nr.toFixed(2)+"s";let vt=String(Qe.description||"").split(/\n\s*\n/).filter(zt=>zt.trim());if(te.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&vt.length){He.innerHTML=vt.map(nr=>`<p class="hand-text">${pa(nr.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let zt=He.querySelector("canvas"),Pr=vt.map(nr=>nr.trim()).join(`

`),cr=!1,Bn=!1,_a=0;He.addEventListener("wheel",()=>{cr=!0},{passive:!0}),He.addEventListener("touchmove",()=>{cr=!0},{passive:!0});let Ti=parseFloat(getComputedStyle(He).fontSize)||17,Un=o(zt,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Ti*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:nr=>3.5+nr.length/420,seed:3+et.length,onPen:nr=>{if(cr)return;let Si=nr-He.clientHeight*.55;Si>He.scrollTop+4&&(He.scrollTop+=Math.min(16,Si-He.scrollTop))}});zt.addEventListener("click",nr=>{nr.stopPropagation(),clearTimeout(_a),Bn?Un.finish():(Bn=!0,Un.write(Pr,!0))}),te.write=()=>{if(clearTimeout(_a),cr=!1,Bn){Un.write(Pr,!0);return}Un.write("",!0),_a=setTimeout(()=>{Bn=!0,Un.write(Pr)},Nr*.6*1e3)},te.stopWrite=()=>{clearTimeout(_a),Un.stop()};let jn=0;window.addEventListener("resize",()=>{clearTimeout(jn),jn=setTimeout(()=>{Bn&&te.classList.contains("on")&&Un.write(Pr,!0)},250)})}else He.innerHTML=vt.map(zt=>`<p class="tour-line">${pa(zt.trim())}</p>`).join(""),He.querySelectorAll(".tour-line").forEach((zt,Pr)=>{zt.style.transitionDelay=(Nr+.3+Math.min(Pr,6)*.35).toFixed(2)+"s"})},te}let y=()=>t.paintings?t.paintings():[],E=W=>y().find(te=>te.side==="corridor"&&Math.abs(te.paintingPosition[0]-W)<.5),_=b(()=>y().find(W=>W.side==="end")),z=()=>$r("div","tour-card",""),S=b(()=>E(va[0])),L=b(()=>E(ma[0])),D=b(()=>E(ga[0])),O=fr.map(W=>b(()=>y().find(te=>te.side===W.side&&Math.abs(te.paintingPosition[2]-W.z)<.5))),G=$r("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${_c?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${hh.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${_c?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Ac(G,.5,.35);let C=[p,v,g,x,_,z(),z(),z(),S,L,D,z(),...O,G];s.append(...C,c,l,m,h),document.body.appendChild(s);let R=oy()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{Me=-1}});document.body.classList.add("touring");let K=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Y=K?"Scroll":"Swipe",ee=Eo.map((W,te)=>te===0?K?"Scroll to begin":"Swipe up to begin":te===1?Y+" to follow the leaf":te===2?Y+" to follow the light":te===3?Y+" for its story":te===6||te===7||te===Eo.length-1?"":Y+" on"),V=[0];ph.forEach(W=>V.push(V[V.length-1]+W.dur));let he=V[V.length-1],ve=210,we=95,oe=.35,De=1.4,be=.32,qe=1,Fe=1.3,$e=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,le=2.2,Se=.7,Re=.9,We=!0,Ge=0,Ne=0,Z=0,pe=-10,ue=!1,Me=-1,Pe=0,Ke=0,Ve=0,Xe=null,T=Object.assign({},Mc(0)),$=Eo[0].cam(0),q={phase:"home",pos:gi.slice(),tumble:0},ae=0,fe=W=>{let te=0;for(let Ee=1;Ee<V.length;Ee++)Math.abs(V[Ee]-W)<Math.abs(V[te]-W)&&(te=Ee);return te};function M(W){let te=C[W];te&&te.fill&&(te.fill(),te.body.scrollTop=0,te.offsetWidth),C.forEach((Ee,He)=>{let Qe=Ee.classList.contains("on");Ee.classList.toggle("on",He===W),He===W&&!Qe&&Ee.write&&Ee.write(),He!==W&&Qe&&Ee.stopWrite&&Ee.stopWrite()}),te&&te.warm&&te.warm(),u.textContent=ee[W]||"",h.classList.toggle("on",!!ee[W])}function w(){C.forEach(W=>{W.stopWrite&&W.classList.contains("on")&&W.stopWrite(),W.classList.remove("on")}),h.classList.remove("on")}let N=null,H=-1;function U(W){if(R.active||!We||Xe)return;let te=Ve-pe>oe;if(pe=Ve,te||!N){let Ee=0,He=he;for(let Qe=0;Qe<V.length;Qe++)if(V[Qe]<=Ge-.02&&(Ee=V[Qe]),V[Qe]>=Ge+.02){He=V[Qe];break}N={lo:Ee,hi:He}}Ve<H||(ue=!1,Z=Math.max(N.lo,Math.min(N.hi,Z+W)),Z=Math.max(Ge-le,Math.min(Ge+le,Z)))}function F(W){if(R.active||!We||Xe)return;let te=ue?Z:Ge,Ee;if(W>0)Ee=V.findIndex(He=>He>te+.05);else{Ee=-1;for(let He=V.length-1;He>=0;He--)if(V[He]<te-.05){Ee=He;break}}Ee<0||(Z=V[Ee],ue=!0,pe=Ve)}let I=null,B=W=>W.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(W=>s.addEventListener(W,B)),s.addEventListener("pointerdown",W=>{if(W.stopPropagation(),!(W.target.closest("button, a")||W.target.closest(".tour-body"))){I={x:W.clientX,y:W.clientY,lx:W.clientX,ly:W.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(W.pointerId)}catch(te){}}}),s.addEventListener("pointermove",W=>{if(!I)return;let te=W.clientX-I.lx,Ee=W.clientY-I.ly;I.lx=W.clientX,I.ly=W.clientY;let He=Math.abs(Ee)>=Math.abs(te)?-Ee:-te;I.moved+=Math.abs(He);let Qe=performance.now(),et=He/we;I.v=I.v*.6+et/Math.max(.008,(Qe-I.lt)/1e3)*.4,I.lt=Qe,I.moved>6&&U(et)});let A=W=>{let te=I;if(I=null,!!te){if(R.active){te.moved<10&&performance.now()-te.t<500?R.tap():te.y-(W?W.clientY:te.ly)>30&&R.swipe(1);return}te.moved<10&&performance.now()-te.t<500?F(1):performance.now()-te.lt<120&&U(Math.max(-1.6,Math.min(1.6,te.v*.22)))}};s.addEventListener("pointerup",W=>{W.stopPropagation(),A(W)}),s.addEventListener("pointercancel",()=>{I=null}),s.addEventListener("wheel",W=>{if(R.active){if(W.target.closest(".conf-ui"))return;W.preventDefault(),R.wheel(W.deltaY);return}if(W.target.closest(".tour-body")){let Ee=W.target.closest(".tour-body"),He=Ee.scrollTop+Ee.clientHeight>=Ee.scrollHeight-2&&W.deltaY>0,Qe=Ee.scrollTop<=0&&W.deltaY<0;if(!He&&!Qe)return}W.preventDefault();let te=W.deltaMode===1?W.deltaY*16:W.deltaMode===2?W.deltaY*window.innerHeight:W.deltaY;U(te/ve)},{passive:!1}),window.addEventListener("keydown",W=>{if(!We||Xe||document.body.classList.contains("visiting"))return;if(R.active){if(W.stopImmediatePropagation(),W.target&&/TEXTAREA|INPUT|BUTTON/.test(W.target.tagName))return;R.key(W.key)&&W.preventDefault();return}let te=W.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(te)>=0){if((te==="Enter"||te===" ")&&W.target&&W.target.tagName==="BUTTON")return;W.preventDefault(),W.stopImmediatePropagation(),F(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(te)>=0?(W.preventDefault(),W.stopImmediatePropagation(),F(-1)):te==="Escape"?(W.preventDefault(),X()):/^[wasdzq]$/i.test(te)&&W.stopImmediatePropagation()},!0),window.addEventListener("keyup",W=>{We&&!Xe&&/^(Arrow|[wasdzq]$)/i.test(W.key)&&W.stopImmediatePropagation()},!0),f.addEventListener("click",W=>{W.stopPropagation(),X()}),G.addEventListener("click",W=>{let te=W.target.closest("button");te&&(W.stopPropagation(),te.dataset.act==="free"&&X(),te.dataset.act==="replay"&&re(),te.dataset.act==="list"&&Oc().show(!1),te.dataset.act==="confess"&&(w(),Me=-2,R.start($,T)))});let P=[null,[Hr.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+yi[0]-7,0],[42.5+yi[1]-7,0],[42.5+yi[2]-7,0],[1e3,Math.PI/2],...fr.map(W=>[W.z-1.6,W.side==="left"?-Math.PI/2:Math.PI/2]),[Mo[2]-1.6,Math.PI]],k=null,j=0;function X(){if(!We||Xe||!_c)return;let W=fe(Ge),te=P[W];k=W<=1?{phase:"home",pos:gi.slice()}:W>=3&&W<=6?{phase:"floor",pos:xn.slice()}:W===11?{phase:"floor",pos:Ls.slice()}:W===18?{phase:"floor",pos:Mo.slice()}:null,j=W>=12?1:0,te&&n.place&&n.place(te[0],te[1]),Xe={start:Ve,fromCam:$,fromLook:Object.assign({},T)},w(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function re(){Ge=Z=0,Ne=0,ue=!1,Me=-1,Pe=0,Ke=0,q={phase:"home",pos:gi.slice(),tumble:0},ce={start:Ve}}let ce={start:-1},ne=!1,ye=[];function de(W){ae+=W*(q.phase==="floor"?0:1);let te=q.tumble===void 0?0:q.tumble,Ee=qn.fromTranslation(ye,q.pos);if(q.phase==="home")Ee=qn.rotateY(Ee,Ee,2.2+Math.sin(ae*.9)*.15),Ee=qn.rotateZ(Ee,Ee,-1+Math.sin(ae*1.3)*.12),Ee=qn.rotateX(Ee,Ee,.4);else if(q.phase==="floor")Ee=qn.rotateY(Ee,Ee,.65),Ee=qn.rotateX(Ee,Ee,.16);else{let He=$.eye,Qe=q.pos,et=[He[0]-Qe[0],He[1]-Qe[1],He[2]-Qe[2]],bt=Math.hypot(et[0],et[1],et[2])||1;et=[et[0]/bt,et[1]/bt,et[2]/bt];let mt=[et[2],0,-et[0]],xt=Math.hypot(mt[0],mt[2])||1;mt=[mt[0]/xt,0,mt[2]/xt];let Nr=[mt[1]*et[2]-mt[2]*et[1],mt[2]*et[0]-mt[0]*et[2],mt[0]*et[1]-mt[1]*et[0]],vt=[mt[0],mt[1],mt[2],0,et[0],et[1],et[2],0,Nr[0],Nr[1],Nr[2],0,Qe[0],Qe[1],Qe[2],1];for(let zt=0;zt<16;zt++)Ee[zt]=vt[zt];Ee=qn.rotateY(Ee,Ee,ae*.9*te+.65),Ee=qn.rotateX(Ee,Ee,Math.sin(ae*2.3)*.9*te),Ee=qn.rotateZ(Ee,Ee,Math.sin(ae*1.7+1)*1.1*te+(q.swing||0)*.9)}return{visible:!0,model:Ee}}function Le(W){for(let te in xh)T[te]=W[te]!==void 0?W[te]:xh[te]}function _e(W,te){if(W<=1)return{phase:"home",pos:gi.slice(),tumble:0};let Ee=fy[W];if(Ee){let He=Ee.amp;return{phase:"fly",pos:at(Ee.pos(),[Math.sin(te*.55)*He[0],Math.sin(te*.8)*He[1],(1-Math.cos(te*.45))*He[2]]),tumble:Ee.tumble}}return{phase:"floor",pos:(W>=18?Mo:W>=10?Ls:xn).slice(),tumble:0}}let Te=0,ke=null;function ze(W){let te=Math.min(.1,Math.max(0,W-Te));if(Te=W,Ve=W,ne||(ne=!0,ce.start=W),Xe)return null;if(R.active){let wt=R.update(te);return $=wt.camera,Le(wt.look),r&&window.__camOverride&&($=window.__camOverride),r&&window.__lookOverride&&Object.assign(T,window.__lookOverride),{camera:$,walker:null,door:1,look:T,leaf:de(te)}}if(!ue&&!I&&Ve-pe>Se){let wt=fe(Z);Math.abs(V[wt]-Z)<Re&&(Z=V[wt])}let Ee=Z-Ge;if(ue){let Ut=Math.sign(Ee)*Math.min(qe,Math.sqrt(2*Fe*Math.abs(Ee)))-Ne;Ne+=Math.sign(Ut)*Math.min(Math.abs(Ut),Fe*te),Ge+=Ne*te,(Ee>0&&Ge>=Z||Ee<0&&Ge<=Z||Math.abs(Z-Ge)<1e-4)&&(Ge=Z,Ne=0,ue=!1)}else{let wt=EA(Ge,Z,Ne,be,te,3);Ge=wt[0],Ne=wt[1],Math.abs(Z-Ge)<1e-4&&Math.abs(Ne)<.001&&(Ge=Z,Ne=0)}let He=0;for(;He<ph.length-1&&Ge>=V[He+1];)He++;let Qe=ph[He],et=Br((Ge-V[He])/Qe.dur),bt=Eo[He],mt=Eo[He+1],xt=fe(Ge);xt!==Pe&&(Pe=xt,Ke=0);let Nr=Math.abs(Ge-V[xt])<.02;Nr&&(Ke+=te);let vt=1-me(0,1.2,Math.abs(Ge-V[xt])),zt=Qe.leaf(et);if(zt.pos?q=Object.assign({},zt):q=Object.assign({},zt,{pos:zt.phase==="home"?gi.slice():(He>=10?Ls:xn).slice()}),fy[xt]&&vt>0){let wt=_e(xt,Ke);q.pos=Mt(q.pos,wt.pos,vt)}let Pr=Qe.walker&&(et>.01||He===6)?Qe.walker(et):null;ke=Pr==null?null:{x:Pr,z:vh,heading:Math.PI/2,phase:(Pr-dy)/LA};let cr=Qe.cam(et,bt.cam(0),mt.cam(0),q);if(vt>0&&Ke>0){let wt=Eo[xt],Ut=wt.cam(0),To=wt.cam(Ke);cr=Je(at(cr.eye,iy(ay(To.eye,Ut.eye),vt)),at(cr.target,iy(ay(To.target,Ut.target),vt)),cr.fov+(To.fov-Ut.fov)*vt,cr.roll+(To.roll-Ut.roll)*vt)}if(vt>0&&!$e){let wt=Ve,Ut=.006*vt,To=Math.sin(wt*.61)*.6+Math.sin(wt*1.37+1.3)*.4,Nh=Math.sin(wt*.47+2.1)*.6+Math.sin(wt*1.13+.4)*.4,Ph=Math.sin(wt*.53+4)*.5+Math.sin(wt*.97+2.6)*.5;cr=Je(at(cr.eye,[To*Ut,Nh*Ut*.7,Ph*Ut]),at(cr.target,[Nh*Ut*1.8,To*Ut*1.4,0]),cr.fov,cr.roll+Ph*.0012*vt)}$=cr;let Bn=Mc(He),_a=Mc(He+1),Ti=Object.assign({},Bn,Qe.look(et,Bn,_a,q,cr.eye));if(vt>0){let wt=Mc(xt);for(let Ut in wt)typeof wt[Ut]=="number"&&(Ti[Ut]=xe(Ti[Ut],wt[Ut],vt))}Le(Ti);let jn=Nr&&Math.abs(Z-Ge)<.02?xt:-1;jn!==Me&&(jn>=0&&(H=Ve+De),Me=jn,jn>=0?M(jn):w()),m.querySelectorAll("i").forEach((wt,Ut)=>wt.classList.toggle("on",Ut===xt));let nr=Me>=0?C[Me]:null;nr&&nr.fill&&!nr.filled&&(nr.fill(),nr.filled&&(nr.classList.remove("on"),nr.offsetWidth,nr.classList.add("on")));let Si=Br((W-ce.start)/2.6);return Si<1&&(T.fade=Math.max(T.fade,1-me(0,1,Si)),T.fadeColor=[0,0,0]),r&&window.__camOverride&&($=window.__camOverride),r&&window.__lookOverride&&Object.assign(T,window.__lookOverride),{camera:$,walker:ke,door:Qe.door?Qe.door(et):He>=12?1:0,look:T,leaf:de(te)}}return r&&(window.__tour={go:F,exit:X,wind:U,confess(){w(),Me=-2,R.start($,T)},conf:R,paper:is().STATE,seek(W,te){Ge=Z=V[W]+(V[W+1]-V[W])*te,Ne=0,ue=!1,pe=Ve+1e6,ce.start=Ve-10,ne=!0},jump(W){Ge=Z=V[W],Ne=0,ue=!1,Ke=0,pe=Ve,ce.start=Ve-10,ne=!0},state:()=>({current:fe(Ge),scroll:+Ge.toFixed(3),target:+Z.toFixed(3),shown:Me,move:Math.abs(Z-Ge)>.02?{p:Ge}:null,camNow:$,leaf:q,look:T})}),{update:ze,get active(){return We&&!Xe},handover(W){if(!Xe)return null;let te=Br((W-Xe.start)/1.8);return te>=1?(We=!1,null):{from:Xe.fromCam,fromLook:Xe.fromLook,k:It(te)}},restingDoor:()=>j,restingLeaf(){return k?(q=k,de(0)):null},mix:xa,cam:Je}}});var GA=$h(),ya=cn(),kh=Oc(),Sc=ya.reflection,FA=!1,ky=(e,t,r,n,o)=>n+(e-t)*(o-n)/(r-t),Lh=()=>ky(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Lh=()=>ky(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var Ly=()=>2*Math.atan(Math.tan(Lh()*.5)*window.innerHeight/window.innerWidth),qA=Jh(),kc=new qA;kc.showPanel(0);FA&&document.body.appendChild(kc.dom);var $t,Ai,Eh,Ei,Mh,Nt;function $A(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!$A())throw GA.finish(),kh.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");$t=kp()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:ya.pixelRatio});location.hash==="#list"&&kh.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&kh.show(!1)});Ai=pv()();var HA=pf();Eh=HA($t,Ai,Sc);Ei=Gm()($t,Ai);Mh=Hm()($t);var my=Um()($t,Ai),gy=t2()($t),xy=o2()($t),yy=w2()($t),by=S2()($t),wy=N2()($t),ba=H2()($t),Ah=$f(),zy=Is(),BA=Li(),Th=Bf(),Cy=ur(),{A:wi}=dn();Nt=Cx()(Ai,Ly);var Lc=Nx()($t,ya),_i=Gx()($t),_y=qx()($t),UA=Bx()($t,ya),jA=Yx()($t,ya),Ey=Vo()($t),My=is()($t),$n=vy()({fps:Nt,paintings:()=>Ei.interactables(),avatar:ba,onExit:()=>Nt.setPaused(!1)});Nt.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Lc);var zc=[],Cc=[],Ao=[7,2,1.6];Ai.viewer=Ao;var WA=$t({cull:{enable:!0,face:"back"},uniforms:{view:()=>zc,proj:()=>Cc,yScale:1,mirrorOn:()=>Sc?1:0,night:()=>Cy.night,time:$t.context("time")}}),VA=$t({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),Ry=document.createElement("style");Ry.textContent=`

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
`;document.head.appendChild(Ry);var sn=document.createElement("button");sn.className="painting-plaque";sn.type="button";sn.setAttribute("aria-label","Read painting");document.body.appendChild(sn);var Mr=document.createElement("div");Mr.className="story-overlay";Mr.innerHTML=`

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

		${zy.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Mr);var Mi=document.createElement("div");Mi.className="museum-links";Mi.innerHTML=zy.icons("museum-link");Mi.insertBefore(fh()("museum-link"),Mi.firstChild);["mousedown","pointerdown","click"].forEach(e=>Mi.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(Mi);var XA=Mr.querySelector("#story-title"),YA=Mr.querySelector("#story-body"),Ay=Mr.querySelector("#story-meta"),KA=Mr.querySelector(".story-contact"),Cs=Mr.querySelector(".story-visit");Cs.addEventListener("click",e=>{e.target.closest(".visit-btn")&&wa&&Th.open(wa)});var QA=Mr.querySelector(".story-close"),wa=null,Rr={p:0,target:0,last:0},Ny={title:Ah.title,description:Ah.text,isAbout:!0},Hn=null;function zh(e){e&&(wa=e,XA.textContent=e.title||"",YA.textContent=e.description||"",Ay.textContent=e.isAbout?"":BA(e),Ay.hidden=!!e.isAbout,KA.hidden=!e.isAbout,Cs.innerHTML=e.isAbout?"":Th.button(e),Cs.hidden=!Cs.innerHTML,Cs.hidden||Th.warm(e),Mr.classList.toggle("about-mode",!!e.isAbout),Mr.classList.add("open"),Rr.target=e.isAbout?1:0,Hn=e,sn.classList.remove("visible"),Nt.setPaused(!0))}function Ch(){Mr.classList.remove("open"),Rr.target=0,wa=null,Hn=null,Nt.setPaused(!1)}function Py(e){e&&(e.preventDefault(),e.stopPropagation()),Hn&&zh(Hn)}sn.addEventListener("pointerup",Py,!0);sn.addEventListener("touchend",Py,{passive:!1,capture:!0});sn.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),wa===null&&Hn&&zh(Hn)},!0);QA.addEventListener("click",Ch);Mr.addEventListener("click",e=>{e.target===Mr&&Ch()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Mr.classList.contains("open")&&Ch()});function Ty(e,t){let r=t[0],n=t[1],o=t[2];return[e[0]*r+e[4]*n+e[8]*o+e[12],e[1]*r+e[5]*n+e[9]*o+e[13],e[2]*r+e[6]*n+e[10]*o+e[14],e[3]*r+e[7]*n+e[11]*o+e[15]]}function ZA(){if(wa)return;if($n.active){Hn=null,sn.classList.remove("visible");return}let e=Ei.interactables(),t=Nt.forward[0],r=Nt.forward[2],n=Math.hypot(t,r)||1,o=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let l=s[0]-Nt.pos[0],m=s[2]-Nt.pos[2],h=-(l*c+m*f),u=Math.abs(l*f-m*c),p=-(t*c+r*f)/n,d=i.side==="end"?11:8,v=(i.width||2)/2;p>.9&&h>.5&&h<d&&u<v+.8&&h<a&&(o=i,a=h)}if(!o){let i=Nt.pos[0],s=Nt.pos[2];t/n>.85&&i<13.6&&s>wi.z0-.5&&s<wi.z1+.5&&(o=Object.assign({},Ny,{plaqueTitle:Ah.name}))}o?(Hn=o,sn.textContent=o.isAbout?"ABOUT  \xB7  "+o.plaqueTitle:"READ  \xB7  "+o.title,sn.classList.add("visible")):(Hn=null,sn.classList.remove("visible"))}var Rh=cs();function JA(){let e=ba.state;if(!e||!e.glowPos)return null;let t=Ty(Nt.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),r=Ty(Nt.proj(),t);return r[3]<=.05?null:[(r[0]/r[3]*.5+.5)*window.innerWidth,(.5-r[1]/r[3]*.5)*window.innerHeight,r[3]]}var Sh=null;window.addEventListener("pointerdown",e=>{Sh={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Sh;if(Sh=null,!t||wa||$n.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let r=JA();if(!r)return;let n=!!document.pointerLockElement,o=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/r[2]);Math.hypot(o-r[0],a-r[1])<i&&(e.preventDefault(),e.stopPropagation(),zh(Ny))},!0);function eT(e){let t=Math.min(Math.max(e-Rr.last,0),.1);Rr.last=e;let r=t/1.6;if(Rr.p=Rr.target>Rr.p?Math.min(1,Rr.p+r):Math.max(0,Rr.p-r),Rr.p<=0)return;let n=Rr.p<.5?2*Rr.p*Rr.p:1-Math.pow(-2*Rr.p+2,2)/2,o=window.innerHeight>window.innerWidth,a=ba.state,i=a&&a.hipsPos?a.hipsPos[0]:wi.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:wi.zc,c=o?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=o?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=Nt.pos,m=Nt.forward,h=[l[0],l[1],l[2]],u=[l[0]+m[0],l[1]+m[1],l[2]+m[2]],p=(x,b)=>x.map((y,E)=>y+(b[E]-y)*n),d=[wi.cx-6.2,1.7,wi.zc],v=1-n,g=h.map((x,b)=>v*v*x+2*v*n*d[b]+n*n*c[b]);Rh.lookAt(Nt.view(),g,p(u,f),[0,1,0])}var bi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Rc=null;function tT(e,t,r,n){let o=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],a=Math.hypot(o[0],o[1],o[2])||1,i=[-o[2]/a,0,o[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Rh.lookAt(e,t,r,[i[0]*f,c,i[2]*f])}function rT(e){let t=window.innerWidth/window.innerHeight,r=Lc.shot,n=$n.active?$n.update(e):null,o=n?null:$n.handover(e),a=null,i=bi;if(n?(a=n.camera,i=n.look,Rc=n.leaf,ba.setWalk(n.walker||null),_i.setOpen(n.door||0)):(Rc=$n.restingLeaf(),ba.setWalk(null),_i.setOpen($n.restingDoor())),o){let s=Nt.pos,c=Nt.forward,f=$n.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],Ly()*180/Math.PI,0);a=$n.mix(o.from,f,o.k),i={};for(let l in bi)i[l]=Array.isArray(bi[l])?bi[l]:o.fromLook[l]+(bi[l]-o.fromLook[l])*o.k}if(a)tT(zc,a.eye,a.target,a.roll||0),Rh.perspective(Cc,a.fov*Math.PI/180,t,.1,700),Ao[0]=a.eye[0],Ao[1]=a.eye[1],Ao[2]=a.eye[2];else{let s=Nt.view(),c=Nt.proj();for(let h=0;h<16;h++)zc[h]=s[h],Cc[h]=c[h];let f=s[12],l=s[13],m=s[14];Ao[0]=-(s[0]*f+s[1]*l+s[2]*m),Ao[1]=-(s[4]*f+s[5]*l+s[6]*m),Ao[2]=-(s[8]*f+s[9]*l+s[10]*m)}for(let s in bi)r[s]=i[s]}var zs=0,Sy=0;$t.frame(function({time:e}){if(document.body.classList.contains("visiting")){zs=0;return}kc.begin(),Cy.tick(e),zs++,zs===60&&(Sy=e),zs===180&&120/Math.max(e-Sy,.001)<32&&ya.stepDown()&&(Sc=ya.reflection,zs=0),Nt.tick({time:e}),eT(e),Ei.update(Nt.pos,Nt.fmouse[1],Lh()),ZA(),rT(e),Lc.capture(arguments[0],{view:zc,proj:Cc,eye:Ao},()=>{WA(()=>{Sc&&VA(()=>{Eh(),my(),Ey(),My({reflected:!0}),wy(),ba(),Mh(Ei.batch()),gy(),yy(),by(),_y(Rc),_i(),xy(),_i.glass()}),Eh(),my(),Ey(),My(),wy(),ba(),Mh(Ei.batch()),gy(),yy(),by(),jA(),_y(Rc),_i(),UA(),xy(),_i.glass()})}),Lc.present(),kc.end()});})();
