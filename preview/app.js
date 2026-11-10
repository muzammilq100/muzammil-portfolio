"use strict";(()=>{var ve=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Gd=ve((_E,Fd)=>{"use strict";var d0=document.getElementById("loader"),u0=d0&&d0.querySelector(".loader-name"),xs=0,Nc=0,Pc=!1,Nb=performance.now(),p0=.06,h0=0,jf=0,Rd=!1,Pb=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Ib(e){if(!u0)return;let t=u0.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";u0.style.webkitMaskPosition=n,u0.style.maskPosition=n}function Id(e){let t=Math.min(.05,jf?(e-jf)/1e3:.016);jf=e;let o=Pc?.75:.22+(p0-h0)*1.2;if(h0=Math.min(p0,h0+Math.max(0,o)*t),Pb&&(h0=p0),Ib(h0),Pc&&h0>=.999){Rd||(Rd=!0,setTimeout(Od,650));return}requestAnimationFrame(Id)}u0&&requestAnimationFrame(Id);function Nd(){let e=xs?Nc/Math.max(xs,24):0;p0=Math.max(p0,Math.min(.9,.06+e*.84))}function Od(){d0&&(d0.classList.add("done"),setTimeout(()=>d0.remove(),1400))}function Bf(){Pc||(Pc=!0,window.__galleryReady=!0,d0&&(p0=1,u0||Od()))}var Pd=null;function Ob(){clearTimeout(Pd),Nc>=xs&&performance.now()-Nb>600&&(Pd=setTimeout(()=>{Nc>=xs&&Bf()},450))}setTimeout(Bf,2e4);var Fb=e=>/(^|\/)(res|images)\//.test(e),Rc=window.fetch.bind(window);async function Gb(e,t){let o=await Rc(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!Fb(o))return Rc(e,t);xs++,Nd();let n=a=>(Nc++,Nd(),Ob(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=Gb(o,t).catch(()=>Rc(e,t)):r=Rc(e,t),r.then(n,a=>{throw n(),a})};Fd.exports={finish:Bf}});var Ir=ve((ME,qd)=>{"use strict";var $d=typeof navigator!="undefined"&&navigator.userAgent||"",$b=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Sa=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test($d)||/Macintosh/.test($d)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||$b,Dd=typeof window!="undefined"&&window.devicePixelRatio||1,sr={isPhone:Sa,pixelRatio:Sa?Math.min(Dd,1.5):Math.min(Dd,2),reflection:!Sa,gardenDetail:Sa?0:1,leafShare:Sa?.65:1,motion:!Sa,post:Sa?1:2,level:Sa?1:0};sr.stepDown=()=>{if(sr.reflection)sr.reflection=!1;else if(sr.gardenDetail>0||sr.motion)sr.gardenDetail=0,sr.motion=!1,sr.leafShare=Math.min(sr.leafShare,.65);else if(sr.post>0)sr.post--;else return!1;return sr.level++,!0};qd.exports=sr});var Uf=ve((EE,Hd)=>{"use strict";Hd.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Ic=ve((SE,Ud)=>{"use strict";var qn={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},jd='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Bd='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';qn.instagramUrl="https://instagram.com/"+qn.instagram;qn.mailUrl="mailto:"+qn.email+"?subject="+encodeURIComponent("Your paintings");qn.icons=e=>`
	<a class="${e}" href="${qn.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${qn.instagram}" title="Instagram">${jd}</a>
	<a class="${e}" href="${qn.mailUrl}" aria-label="Email ${qn.email}" title="Email">${Bd}</a>`;qn.line=e=>`
	<span class="${e}">
		<a href="${qn.instagramUrl}" target="_blank" rel="noopener">${jd}<span>@${qn.instagram}</span></a>
		<a href="${qn.mailUrl}">${Bd}<span>${qn.email}</span></a>
	</span>`;Ud.exports=qn});var ys=ve((AE,Wd)=>{"use strict";Wd.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var Wf=ve((TE,Yd)=>{"use strict";var Db=Uf(),qb=Ic(),Vd=ys(),Hb=Ir(),Aa=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),jb=`
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
`,Hn=null;function Bb(e){if(Hn){Hn.hidden=!1,requestAnimationFrame(()=>Hn.classList.add("on"));return}let t=document.createElement("style");t.textContent=jb,document.head.appendChild(t);let o=!Hb.isPhone;Hn=document.createElement("div"),Hn.className="plist",Hn.setAttribute("role","region"),Hn.setAttribute("aria-label","All paintings"),Hn.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${qb.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${Db.map(r=>`
			<article class="plist-item" id="${Aa(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Aa(r.title)}, ${Aa(Vd(r))}"
					src="images/web/${Aa(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Aa(r.file)}'">
				<p class="plist-meta">${Aa(Vd(r))}</p>
				<h2>${Aa(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Aa(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Hn.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Hn.querySelector(".plist-close");n&&n.addEventListener("click",Xd),document.body.appendChild(Hn),requestAnimationFrame(()=>Hn.classList.add("on"))}function Xd(){Hn&&(Hn.classList.remove("on"),setTimeout(()=>{Hn.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Yd.exports={show:Bb,hide:Xd}});var Kd=ve((Vf,Xf)=>{(function(e,t){typeof Vf=="object"&&typeof Xf!="undefined"?Xf.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Vf,function(){var e=function(){function t(p){return r.appendChild(p.dom),p}function o(p){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===p?"block":"none";n=p}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(p){p.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),l=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var p=(performance||Date).now();if(l.update(p-a,200),p>i+1e3&&(c.update(1e3*s/(p-i),100),i=p,s=0,f)){var h=performance.memory;f.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,l=48*s,f=3*s,p=2*s,h=3*s,d=15*s,u=74*s,v=30*s,m=document.createElement("canvas");m.width=c,m.height=l,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,l),g.fillStyle=o,g.fillText(t,f,p),g.fillRect(h,d,u,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,d,u,v),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,d),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",f,p),g.drawImage(m,h+s,d,u-s,v,h,d,u-s,v),g.fillRect(h+u-s,d,s,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+u-s,d,s,i((1-y/b)*v))}}},e})});var Qd=ve((Yf,Kf)=>{(function(e,t){typeof Yf=="object"&&typeof Kf!="undefined"?Kf.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(Yf,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,M){for(var C=Object.keys(M),Y=0;Y<C.length;++Y)x[C[Y]]=M[C[Y]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var M=new Error("(regl) "+x);throw console.error(M),M}function a(x,M){x||r(M)}function i(x){return x?": "+x:""}function s(x,M,C){x in M||r("unknown parameter ("+x+")"+i(C)+". possible values: "+Object.keys(M).join())}function c(x,M){e(x)||r("invalid parameter type"+i(M)+". must be a typed array")}function l(x,M){switch(M){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function f(x,M,C){l(x,M)||r("invalid parameter type"+i(C)+". expected "+M+", got "+typeof x)}function p(x,M){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(M)+". must be a nonnegative integer")}function h(x,M,C){M.indexOf(x)<0&&r("invalid value"+i(C)+". must be one of: "+M)}var d=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function u(x){Object.keys(x).forEach(function(M){d.indexOf(M)<0&&r('invalid regl constructor argument "'+M+'". must be one of '+d)})}function v(x,M){for(x=x+"";x.length<M;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,M){this.number=x,this.line=M,this.errors=[]}function y(x,M,C){this.file=x,this.line=M,this.message=C}function b(){var x=new Error,M=(x.stack||x).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(M);if(C)return C[1];var Y=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(M);return Y?Y[1]:"unknown"}function E(){var x=new Error,M=(x.stack||x).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(M);if(C)return C[1];var Y=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(M);return Y?Y[1]:"unknown"}function k(x,M){var C=x.split(`
`),Y=1,se=0,V={unknown:new m,0:new m};V.unknown.name=V[0].name=M||b(),V.unknown.lines.push(new g(0,""));for(var Z=0;Z<C.length;++Z){var me=C[Z],ye=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(me);if(ye)switch(ye[1]){case"line":var Me=/(\d+)(\s+\d+)?/.exec(ye[2]);Me&&(Y=Me[1]|0,Me[2]&&(se=Me[2]|0,se in V||(V[se]=new m)));break;case"define":var be=/SHADER_NAME(_B64)?\s+(.*)$/.exec(ye[2]);be&&(V[se].name=be[1]?n(be[2]):be[2]);break}V[se].lines.push(new g(Y++,me))}return Object.keys(V).forEach(function(Ae){var Re=V[Ae];Re.lines.forEach(function(ge){Re.index[ge.number]=ge})}),V}function L(x){var M=[];return x.split(`
`).forEach(function(C){if(!(C.length<5)){var Y=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);Y?M.push(new y(Y[1]|0,Y[2]|0,Y[3].trim())):C.length>0&&M.push(new y("unknown",0,C))}}),M}function N(x,M){M.forEach(function(C){var Y=x[C.file];if(Y){var se=Y.index[C.line];if(se){se.errors.push(C),Y.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(C)})}function H(x,M,C,Y,se){if(!x.getShaderParameter(M,x.COMPILE_STATUS)){var V=x.getShaderInfoLog(M),Z=Y===x.FRAGMENT_SHADER?"fragment":"vertex";Te(C,"string",Z+" shader source must be a string",se);var me=k(C,se),ye=L(V);N(me,ye),Object.keys(me).forEach(function(Me){var be=me[Me];if(!be.hasErrors)return;var Ae=[""],Re=[""];function ge(ke,D){Ae.push(ke),Re.push(D||"")}ge("file number "+Me+": "+be.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),be.lines.forEach(function(ke){if(ke.errors.length>0){ge(v(ke.number,4)+"|  ","background-color:yellow; font-weight:bold"),ge(ke.line+o,"color:red; background-color:yellow; font-weight:bold");var D=0;ke.errors.forEach(function(J){var _e=J.message,Oe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(_e);if(Oe){var he=Oe[1];switch(_e=Oe[2],he){case"assign":he="=";break}D=Math.max(ke.line.indexOf(he,D),0)}else D=0;ge(v("| ",6)),ge(v("^^^",D+3)+o,"font-weight:bold"),ge(v("| ",6)),ge(_e+o,"font-weight:bold")}),ge(v("| ",6)+o)}else ge(v(ke.number,4)+"|  "),ge(ke.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Re[0]=Ae.join("%c"),console.log.apply(console,Re)):console.log(Ae.join(""))}),a.raise("Error compiling "+Z+" shader, "+me[0].name)}}function U(x,M,C,Y,se){if(!x.getProgramParameter(M,x.LINK_STATUS)){var V=x.getProgramInfoLog(M),Z=k(C,se),me=k(Y,se),ye='Error linking program with vertex shader, "'+me[0].name+'", and fragment shader "'+Z[0].name+'"';typeof document!="undefined"?console.log("%c"+ye+o+"%c"+V,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(ye+o+V),a.raise(ye)}}function W(x){x._commandRef=b()}function Q(x,M,C,Y){W(x);function se(ye){return ye?Y.id(ye):0}x._fragId=se(x.static.frag),x._vertId=se(x.static.vert);function V(ye,Me){Object.keys(Me).forEach(function(be){ye[Y.id(be)]=!0})}var Z=x._uniformSet={};V(Z,M.static),V(Z,M.dynamic);var me=x._attributeSet={};V(me,C.static),V(me,C.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function ie(x,M){var C=E();r(x+" in command "+(M||b())+(C==="unknown"?"":" called from "+C))}function oe(x,M,C){x||ie(M,C||b())}function ee(x,M,C,Y){x in M||ie("unknown parameter ("+x+")"+i(C)+". possible values: "+Object.keys(M).join(),Y||b())}function Te(x,M,C,Y){l(x,M)||ie("invalid parameter type"+i(C)+". expected "+M+", got "+typeof x,Y||b())}function ne(x){x()}function Xe(x,M,C){x.texture?h(x.texture._texture.internalformat,M,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var ue=33071,ut=9728,wt=9984,Xt=9985,mt=9986,Yt=9987,Ct=5120,go=5121,je=5122,Ft=5123,Fe=5124,Qe=5125,qe=5126,dt=32819,at=32820,Gt=33635,et=34042,fe=36193,Ye={};Ye[Ct]=Ye[go]=1,Ye[je]=Ye[Ft]=Ye[fe]=Ye[Gt]=Ye[dt]=Ye[at]=2,Ye[Fe]=Ye[Qe]=Ye[qe]=Ye[et]=4;function pt(x,M){return x===at||x===dt||x===Gt?2:x===et?4:Ye[x]*M}function lt(x){return!(x&x-1)&&!!x}function Zt(x,M,C){var Y,se=M.width,V=M.height,Z=M.channels;a(se>0&&se<=C.maxTextureSize&&V>0&&V<=C.maxTextureSize,"invalid texture shape"),(x.wrapS!==ue||x.wrapT!==ue)&&a(lt(se)&&lt(V),"incompatible wrap mode for texture, both width and height must be power of 2"),M.mipmask===1?se!==1&&V!==1&&a(x.minFilter!==wt&&x.minFilter!==mt&&x.minFilter!==Xt&&x.minFilter!==Yt,"min filter requires mipmap"):(a(lt(se)&&lt(V),"texture must be a square power of 2 to support mipmapping"),a(M.mipmask===(se<<1)-1,"missing or incomplete mipmap data")),M.type===qe&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===ut&&x.magFilter===ut,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var me=M.images;for(Y=0;Y<16;++Y)if(me[Y]){var ye=se>>Y,Me=V>>Y;a(M.mipmask&1<<Y,"missing mipmap data");var be=me[Y];if(a(be.width===ye&&be.height===Me,"invalid shape for mip images"),a(be.format===M.format&&be.internalformat===M.internalformat&&be.type===M.type,"incompatible type for mip image"),!be.compressed)if(be.data){var Ae=Math.ceil(pt(be.type,Z)*ye/be.unpackAlignment)*be.unpackAlignment;a(be.data.byteLength===Ae*Me,"invalid data for image, buffer size is inconsistent with image format")}else be.element||be.copy}else x.genMipmaps||a((M.mipmask&1<<Y)===0,"extra mipmap data");M.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function Ht(x,M,C,Y){var se=x.width,V=x.height,Z=x.channels;a(se>0&&se<=Y.maxTextureSize&&V>0&&V<=Y.maxTextureSize,"invalid texture shape"),a(se===V,"cube map must be square"),a(M.wrapS===ue&&M.wrapT===ue,"wrap mode not supported by cube map");for(var me=0;me<C.length;++me){var ye=C[me];a(ye.width===se&&ye.height===V,"inconsistent cube map face shape"),M.genMipmaps&&(a(!ye.compressed,"can not generate mipmap for compressed textures"),a(ye.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Me=ye.images,be=0;be<16;++be){var Ae=Me[be];if(Ae){var Re=se>>be,ge=V>>be;a(ye.mipmask&1<<be,"missing mipmap data"),a(Ae.width===Re&&Ae.height===ge,"invalid shape for mip images"),a(Ae.format===x.format&&Ae.internalformat===x.internalformat&&Ae.type===x.type,"incompatible type for mip image"),Ae.compressed||(Ae.data?a(Ae.data.byteLength===Re*ge*Math.max(pt(Ae.type,Z),Ae.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Ae.element||Ae.copy)}}}}var w=t(a,{optional:ne,raise:r,commandRaise:ie,command:oe,parameter:s,commandParameter:ee,constructor:u,type:f,commandType:Te,isTypedArray:c,nni:p,oneOf:h,shaderError:H,linkError:U,callSite:E,saveCommandRef:W,saveDrawInfo:Q,framebufferFormat:Xe,guessCommand:b,texture2D:Zt,textureCube:Ht}),_t=0,Jt=0,nt=5,vo=6;function Tt(x,M){this.id=_t++,this.type=x,this.data=M}function tt(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Dt(x){if(x.length===0)return[];var M=x.charAt(0),C=x.charAt(x.length-1);if(x.length>1&&M===C&&(M==='"'||M==="'"))return['"'+tt(x.substr(1,x.length-2))+'"'];var Y=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(Y)return Dt(x.substr(0,Y.index)).concat(Dt(Y[1])).concat(Dt(x.substr(Y.index+Y[0].length)));var se=x.split(".");if(se.length===1)return['"'+tt(x)+'"'];for(var V=[],Z=0;Z<se.length;++Z)V=V.concat(Dt(se[Z]));return V}function eo(x){return"["+Dt(x).join("][")+"]"}function _o(x,M){return new Tt(x,eo(M+""))}function Co(x){return typeof x=="function"&&!x._reglType||x instanceof Tt}function Nn(x,M){if(typeof x=="function")return new Tt(Jt,x);if(typeof x=="number"||typeof x=="boolean")return new Tt(nt,x);if(Array.isArray(x))return new Tt(vo,x.map((C,Y)=>Nn(C,M+"["+Y+"]")));if(x instanceof Tt)return x;w(!1,"invalid option type in uniform "+M)}var Bt={DynamicVariable:Tt,define:_o,isDynamic:Co,unbox:Nn,accessor:eo},ga={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},Ja=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Xi(){var x={"":0},M=[""];return{id:function(C){var Y=x[C];return Y||(Y=x[C]=M.length,M.push(C),Y)},str:function(C){return M[C]}}}function oa(x,M,C){var Y=document.createElement("canvas");t(Y.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(Y),x===document.body&&(Y.style.position="absolute",t(x.style,{margin:0,padding:0}));function se(){var me=window.innerWidth,ye=window.innerHeight;if(x!==document.body){var Me=x.getBoundingClientRect();me=Me.right-Me.left,ye=Me.bottom-Me.top}Y.width=C*me,Y.height=C*ye,t(Y.style,{width:me+"px",height:ye+"px"})}var V;x!==document.body&&typeof ResizeObserver=="function"?(V=new ResizeObserver(function(){setTimeout(se)}),V.observe(x)):window.addEventListener("resize",se,!1);function Z(){V?V.disconnect():window.removeEventListener("resize",se),x.removeChild(Y)}return se(),{canvas:Y,onDestroy:Z}}function xa(x,M){function C(Y){try{return x.getContext(Y,M)}catch(se){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function jr(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function ei(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function ar(x){return typeof x=="string"?x.split():(w(Array.isArray(x),"invalid extension array"),x)}function Fn(x){return typeof x=="string"?(w(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function Lo(x){var M=x||{},C,Y,se,V,Z={},me=[],ye=[],Me=typeof window=="undefined"?1:window.devicePixelRatio,be=!1,Ae=function(ke){ke&&w.raise(ke)},Re=function(){};if(typeof M=="string"?(w(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(M),w(C,"invalid query string for element")):typeof M=="object"?jr(M)?C=M:ei(M)?(V=M,se=V.canvas):(w.constructor(M),"gl"in M?V=M.gl:"canvas"in M?se=Fn(M.canvas):"container"in M&&(Y=Fn(M.container)),"attributes"in M&&(Z=M.attributes,w.type(Z,"object","invalid context attributes")),"extensions"in M&&(me=ar(M.extensions)),"optionalExtensions"in M&&(ye=ar(M.optionalExtensions)),"onDone"in M&&(w.type(M.onDone,"function","invalid or missing onDone callback"),Ae=M.onDone),"profile"in M&&(be=!!M.profile),"pixelRatio"in M&&(Me=+M.pixelRatio,w(Me>0,"invalid pixel ratio"))):w.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?se=C:Y=C),!V){if(!se){w(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var ge=oa(Y||document.body,Ae,Me);if(!ge)return null;se=ge.canvas,Re=ge.onDestroy}Z.premultipliedAlpha===void 0&&(Z.premultipliedAlpha=!0),V=xa(se,Z)}return V?{gl:V,canvas:se,container:Y,extensions:me,optionalExtensions:ye,pixelRatio:Me,profile:be,onDone:Ae,onDestroy:Re}:(Re(),Ae("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function es(x,M){var C={};function Y(Z){w.type(Z,"string","extension name must be string");var me=Z.toLowerCase(),ye;try{ye=C[me]=x.getExtension(me)}catch(Me){}return!!ye}for(var se=0;se<M.extensions.length;++se){var V=M.extensions[se];if(!Y(V))return M.onDestroy(),M.onDone('"'+V+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return M.optionalExtensions.forEach(Y),{extensions:C,restore:function(){Object.keys(C).forEach(function(Z){if(C[Z]&&!Y(Z))throw new Error("(regl): error restoring extension "+Z)})}}}function Tn(x,M){for(var C=Array(x),Y=0;Y<x;++Y)C[Y]=M(Y);return C}var Ul=5120,Js=5121,ec=5122,Wl=5123,ae=5124,Se=5125,Je=5126;function gt(x){for(var M=16;M<=1<<28;M*=16)if(x<=M)return M;return 0}function qt(x){var M,C;return M=(x>65535)<<4,x>>>=M,C=(x>255)<<3,x>>>=C,M|=C,C=(x>15)<<2,x>>>=C,M|=C,C=(x>3)<<1,x>>>=C,M|=C,M|x>>1}function to(){var x=Tn(8,function(){return[]});function M(V){var Z=gt(V),me=x[qt(Z)>>2];return me.length>0?me.pop():new ArrayBuffer(Z)}function C(V){x[qt(V.byteLength)>>2].push(V)}function Y(V,Z){var me=null;switch(V){case Ul:me=new Int8Array(M(Z),0,Z);break;case Js:me=new Uint8Array(M(Z),0,Z);break;case ec:me=new Int16Array(M(2*Z),0,Z);break;case Wl:me=new Uint16Array(M(2*Z),0,Z);break;case ae:me=new Int32Array(M(4*Z),0,Z);break;case Se:me=new Uint32Array(M(4*Z),0,Z);break;case Je:me=new Float32Array(M(4*Z),0,Z);break;default:return null}return me.length!==Z?me.subarray(0,Z):me}function se(V){C(V.buffer)}return{alloc:M,free:C,allocType:Y,freeType:se}}var co=to();co.zero=to();var Zo=3408,kn=3410,mr=3411,Jo=3412,Ro=3413,Gn=3414,dn=3415,Br=33901,ya=33902,ti=3379,Ur=3386,Wr=34921,rn=36347,oi=36348,yo=35661,jo=35660,na=34930,tc=36349,oc=34076,ry=34024,ay=7936,iy=7937,sy=7938,cy=35724,ly=34047,fy=36063,hy=34852,nc=3553,Hu=34067,uy=34069,dy=33984,ts=6408,Vl=5126,ju=5121,Xl=36160,py=36053,vy=36064,my=16384,gy=function(x,M){var C=1;M.ext_texture_filter_anisotropic&&(C=x.getParameter(ly));var Y=1,se=1;M.webgl_draw_buffers&&(Y=x.getParameter(hy),se=x.getParameter(fy));var V=!!M.oes_texture_float;if(V){var Z=x.createTexture();x.bindTexture(nc,Z),x.texImage2D(nc,0,ts,1,1,0,ts,Vl,null);var me=x.createFramebuffer();if(x.bindFramebuffer(Xl,me),x.framebufferTexture2D(Xl,vy,nc,Z,0),x.bindTexture(nc,null),x.checkFramebufferStatus(Xl)!==py)V=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(my);var ye=co.allocType(Vl,4);x.readPixels(0,0,1,1,ts,Vl,ye),x.getError()?V=!1:(x.deleteFramebuffer(me),x.deleteTexture(Z),V=ye[0]===1),co.freeType(ye)}}var Me=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),be=!0;if(!Me){var Ae=x.createTexture(),Re=co.allocType(ju,36);x.activeTexture(dy),x.bindTexture(Hu,Ae),x.texImage2D(uy,0,ts,3,3,0,ts,ju,Re),co.freeType(Re),x.bindTexture(Hu,null),x.deleteTexture(Ae),be=!x.getError()}return{colorBits:[x.getParameter(kn),x.getParameter(mr),x.getParameter(Jo),x.getParameter(Ro)],depthBits:x.getParameter(Gn),stencilBits:x.getParameter(dn),subpixelBits:x.getParameter(Zo),extensions:Object.keys(M).filter(function(ge){return!!M[ge]}),maxAnisotropic:C,maxDrawbuffers:Y,maxColorAttachments:se,pointSizeDims:x.getParameter(Br),lineWidthDims:x.getParameter(ya),maxViewportDims:x.getParameter(Ur),maxCombinedTextureUnits:x.getParameter(yo),maxCubeMapSize:x.getParameter(oc),maxRenderbufferSize:x.getParameter(ry),maxTextureUnits:x.getParameter(na),maxTextureSize:x.getParameter(ti),maxAttributes:x.getParameter(Wr),maxVertexUniforms:x.getParameter(rn),maxVertexTextureUnits:x.getParameter(jo),maxVaryingVectors:x.getParameter(oi),maxFragmentUniforms:x.getParameter(tc),glsl:x.getParameter(cy),renderer:x.getParameter(iy),vendor:x.getParameter(ay),version:x.getParameter(sy),readFloat:V,npotTextureCube:be}};function Rr(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var ir=function(x){return Object.keys(x).map(function(M){return x[M]})},rc={shape:wy,flatten:by};function xy(x,M,C){for(var Y=0;Y<M;++Y)C[Y]=x[Y]}function yy(x,M,C,Y){for(var se=0,V=0;V<M;++V)for(var Z=x[V],me=0;me<C;++me)Y[se++]=Z[me]}function Bu(x,M,C,Y,se,V){for(var Z=V,me=0;me<M;++me)for(var ye=x[me],Me=0;Me<C;++Me)for(var be=ye[Me],Ae=0;Ae<Y;++Ae)se[Z++]=be[Ae]}function Uu(x,M,C,Y,se){for(var V=1,Z=C+1;Z<M.length;++Z)V*=M[Z];var me=M[C];if(M.length-C===4){var ye=M[C+1],Me=M[C+2],be=M[C+3];for(Z=0;Z<me;++Z)Bu(x[Z],ye,Me,be,Y,se),se+=V}else for(Z=0;Z<me;++Z)Uu(x[Z],M,C+1,Y,se),se+=V}function by(x,M,C,Y){var se=1;if(M.length)for(var V=0;V<M.length;++V)se*=M[V];else se=0;var Z=Y||co.allocType(C,se);switch(M.length){case 0:break;case 1:xy(x,M[0],Z);break;case 2:yy(x,M[0],M[1],Z);break;case 3:Bu(x,M[0],M[1],M[2],Z,0);break;default:Uu(x,M,0,Z,0)}return Z}function wy(x){for(var M=[],C=x;C.length;C=C[0])M.push(C.length);return M}var Yl={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},_y=5120,My=5122,Ey=5124,Sy=5121,Ay=5123,Ty=5125,ky=5126,Ly=5126,ni={int8:_y,int16:My,int32:Ey,uint8:Sy,uint16:Ay,uint32:Ty,float:ky,float32:Ly},zy=35048,Cy=35040,ac={dynamic:zy,stream:Cy,static:35044},Kl=rc.flatten,Wu=rc.shape,Vu=35044,Ry=35040,Ql=5121,Zl=5126,ba=[];ba[5120]=1,ba[5122]=2,ba[5124]=4,ba[5121]=1,ba[5123]=2,ba[5125]=4,ba[5126]=4;function ic(x){return Yl[Object.prototype.toString.call(x)]|0}function Xu(x,M){for(var C=0;C<M.length;++C)x[C]=M[C]}function Yu(x,M,C,Y,se,V,Z){for(var me=0,ye=0;ye<C;++ye)for(var Me=0;Me<Y;++Me)x[me++]=M[se*ye+V*Me+Z]}function Ny(x,M,C,Y){var se=0,V={};function Z(D){this.id=se++,this.buffer=x.createBuffer(),this.type=D,this.usage=Vu,this.byteLength=0,this.dimension=1,this.dtype=Ql,this.persistentData=null,C.profile&&(this.stats={size:0})}Z.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},Z.prototype.destroy=function(){Re(this)};var me=[];function ye(D,J){var _e=me.pop();return _e||(_e=new Z(D)),_e.bind(),Ae(_e,J,Ry,0,1,!1),_e}function Me(D){me.push(D)}function be(D,J,_e){D.byteLength=J.byteLength,x.bufferData(D.type,J,_e)}function Ae(D,J,_e,Oe,he,Ge){var pe;if(D.usage=_e,Array.isArray(J)){if(D.dtype=Oe||Zl,J.length>0){var Le;if(Array.isArray(J[0])){pe=Wu(J);for(var de=1,ze=1;ze<pe.length;++ze)de*=pe[ze];D.dimension=de,Le=Kl(J,pe,D.dtype),be(D,Le,_e),Ge?D.persistentData=Le:co.freeType(Le)}else if(typeof J[0]=="number"){D.dimension=he;var ot=co.allocType(D.dtype,J.length);Xu(ot,J),be(D,ot,_e),Ge?D.persistentData=ot:co.freeType(ot)}else e(J[0])?(D.dimension=J[0].length,D.dtype=Oe||ic(J[0])||Zl,Le=Kl(J,[J.length,J[0].length],D.dtype),be(D,Le,_e),Ge?D.persistentData=Le:co.freeType(Le)):w.raise("invalid buffer data")}}else if(e(J))D.dtype=Oe||ic(J),D.dimension=he,be(D,J,_e),Ge&&(D.persistentData=new Uint8Array(new Uint8Array(J.buffer)));else if(Rr(J)){pe=J.shape;var vt=J.stride,Ne=J.offset,Ee=0,le=0,ht=0,Et=0;pe.length===1?(Ee=pe[0],le=1,ht=vt[0],Et=0):pe.length===2?(Ee=pe[0],le=pe[1],ht=vt[0],Et=vt[1]):w.raise("invalid shape"),D.dtype=Oe||ic(J.data)||Zl,D.dimension=le;var Be=co.allocType(D.dtype,Ee*le);Yu(Be,J.data,Ee,le,ht,Et,Ne),be(D,Be,_e),Ge?D.persistentData=Be:co.freeType(Be)}else J instanceof ArrayBuffer?(D.dtype=Ql,D.dimension=he,be(D,J,_e),Ge&&(D.persistentData=new Uint8Array(new Uint8Array(J)))):w.raise("invalid buffer data")}function Re(D){M.bufferCount--,Y(D);var J=D.buffer;w(J,"buffer must not be deleted already"),x.deleteBuffer(J),D.buffer=null,delete V[D.id]}function ge(D,J,_e,Oe){M.bufferCount++;var he=new Z(J);V[he.id]=he;function Ge(de){var ze=Vu,ot=null,vt=0,Ne=0,Ee=1;return Array.isArray(de)||e(de)||Rr(de)||de instanceof ArrayBuffer?ot=de:typeof de=="number"?vt=de|0:de&&(w.type(de,"object","buffer arguments must be an object, a number or an array"),"data"in de&&(w(ot===null||Array.isArray(ot)||e(ot)||Rr(ot),"invalid data for buffer"),ot=de.data),"usage"in de&&(w.parameter(de.usage,ac,"invalid buffer usage"),ze=ac[de.usage]),"type"in de&&(w.parameter(de.type,ni,"invalid buffer type"),Ne=ni[de.type]),"dimension"in de&&(w.type(de.dimension,"number","invalid dimension"),Ee=de.dimension|0),"length"in de&&(w.nni(vt,"buffer length must be a nonnegative integer"),vt=de.length|0)),he.bind(),ot?Ae(he,ot,ze,Ne,Ee,Oe):(vt&&x.bufferData(he.type,vt,ze),he.dtype=Ne||Ql,he.usage=ze,he.dimension=Ee,he.byteLength=vt),C.profile&&(he.stats.size=he.byteLength*ba[he.dtype]),Ge}function pe(de,ze){w(ze+de.byteLength<=he.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+de.byteLength+" starting from offset "+ze+" to a buffer of size "+he.byteLength),x.bufferSubData(he.type,ze,de)}function Le(de,ze){var ot=(ze||0)|0,vt;if(he.bind(),e(de)||de instanceof ArrayBuffer)pe(de,ot);else if(Array.isArray(de)){if(de.length>0)if(typeof de[0]=="number"){var Ne=co.allocType(he.dtype,de.length);Xu(Ne,de),pe(Ne,ot),co.freeType(Ne)}else if(Array.isArray(de[0])||e(de[0])){vt=Wu(de);var Ee=Kl(de,vt,he.dtype);pe(Ee,ot),co.freeType(Ee)}else w.raise("invalid buffer data")}else if(Rr(de)){vt=de.shape;var le=de.stride,ht=0,Et=0,Be=0,Rt=0;vt.length===1?(ht=vt[0],Et=1,Be=le[0],Rt=0):vt.length===2?(ht=vt[0],Et=vt[1],Be=le[0],Rt=le[1]):w.raise("invalid shape");var xt=Array.isArray(de.data)?he.dtype:ic(de.data),kt=co.allocType(xt,ht*Et);Yu(kt,de.data,ht,Et,Be,Rt,de.offset),pe(kt,ot),co.freeType(kt)}else w.raise("invalid data for buffer subdata");return Ge}return _e||Ge(D),Ge._reglType="buffer",Ge._buffer=he,Ge.subdata=Le,C.profile&&(Ge.stats=he.stats),Ge.destroy=function(){Re(he)},Ge}function ke(){ir(V).forEach(function(D){D.buffer=x.createBuffer(),x.bindBuffer(D.type,D.buffer),x.bufferData(D.type,D.persistentData||D.byteLength,D.usage)})}return C.profile&&(M.getTotalBufferSize=function(){var D=0;return Object.keys(V).forEach(function(J){D+=V[J].stats.size}),D}),{create:ge,createStream:ye,destroyStream:Me,clear:function(){ir(V).forEach(Re),me.forEach(Re)},getBuffer:function(D){return D&&D._buffer instanceof Z?D._buffer:null},restore:ke,_initBuffer:Ae}}var Py=0,Iy=0,Oy=1,Fy=1,Gy=4,$y=4,Yi={points:Py,point:Iy,lines:Oy,line:Fy,triangles:Gy,triangle:$y,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Dy=0,qy=1,os=4,Hy=5120,Ki=5121,Ku=5122,Qi=5123,Qu=5124,ri=5125,Jl=34963,jy=35040,By=35044;function Uy(x,M,C,Y){var se={},V=0,Z={uint8:Ki,uint16:Qi};M.oes_element_index_uint&&(Z.uint32=ri);function me(ke){this.id=V++,se[this.id]=this,this.buffer=ke,this.primType=os,this.vertCount=0,this.type=0}me.prototype.bind=function(){this.buffer.bind()};var ye=[];function Me(ke){var D=ye.pop();return D||(D=new me(C.create(null,Jl,!0,!1)._buffer)),Ae(D,ke,jy,-1,-1,0,0),D}function be(ke){ye.push(ke)}function Ae(ke,D,J,_e,Oe,he,Ge){ke.buffer.bind();var pe;if(D){var Le=Ge;!Ge&&(!e(D)||Rr(D)&&!e(D.data))&&(Le=M.oes_element_index_uint?ri:Qi),C._initBuffer(ke.buffer,D,J,Le,3)}else x.bufferData(Jl,he,J),ke.buffer.dtype=pe||Ki,ke.buffer.usage=J,ke.buffer.dimension=3,ke.buffer.byteLength=he;if(pe=Ge,!Ge){switch(ke.buffer.dtype){case Ki:case Hy:pe=Ki;break;case Qi:case Ku:pe=Qi;break;case ri:case Qu:pe=ri;break;default:w.raise("unsupported type for element array")}ke.buffer.dtype=pe}ke.type=pe,w(pe!==ri||!!M.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var de=Oe;de<0&&(de=ke.buffer.byteLength,pe===Qi?de>>=1:pe===ri&&(de>>=2)),ke.vertCount=de;var ze=_e;if(_e<0){ze=os;var ot=ke.buffer.dimension;ot===1&&(ze=Dy),ot===2&&(ze=qy),ot===3&&(ze=os)}ke.primType=ze}function Re(ke){Y.elementsCount--,w(ke.buffer!==null,"must not double destroy elements"),delete se[ke.id],ke.buffer.destroy(),ke.buffer=null}function ge(ke,D){var J=C.create(null,Jl,!0),_e=new me(J._buffer);Y.elementsCount++;function Oe(he){if(!he)J(),_e.primType=os,_e.vertCount=0,_e.type=Ki;else if(typeof he=="number")J(he),_e.primType=os,_e.vertCount=he|0,_e.type=Ki;else{var Ge=null,pe=By,Le=-1,de=-1,ze=0,ot=0;Array.isArray(he)||e(he)||Rr(he)?Ge=he:(w.type(he,"object","invalid arguments for elements"),"data"in he&&(Ge=he.data,w(Array.isArray(Ge)||e(Ge)||Rr(Ge),"invalid data for element buffer")),"usage"in he&&(w.parameter(he.usage,ac,"invalid element buffer usage"),pe=ac[he.usage]),"primitive"in he&&(w.parameter(he.primitive,Yi,"invalid element buffer primitive"),Le=Yi[he.primitive]),"count"in he&&(w(typeof he.count=="number"&&he.count>=0,"invalid vertex count for elements"),de=he.count|0),"type"in he&&(w.parameter(he.type,Z,"invalid buffer type"),ot=Z[he.type]),"length"in he?ze=he.length|0:(ze=de,ot===Qi||ot===Ku?ze*=2:(ot===ri||ot===Qu)&&(ze*=4))),Ae(_e,Ge,pe,Le,de,ze,ot)}return Oe}return Oe(ke),Oe._reglType="elements",Oe._elements=_e,Oe.subdata=function(he,Ge){return J.subdata(he,Ge),Oe},Oe.destroy=function(){Re(_e)},Oe}return{create:ge,createStream:Me,destroyStream:be,getElements:function(ke){return typeof ke=="function"&&ke._elements instanceof me?ke._elements:null},clear:function(){ir(se).forEach(Re)}}}var Zu=new Float32Array(1),Wy=new Uint32Array(Zu.buffer),Vy=5123;function Ju(x){for(var M=co.allocType(Vy,x.length),C=0;C<x.length;++C)if(isNaN(x[C]))M[C]=65535;else if(x[C]===1/0)M[C]=31744;else if(x[C]===-1/0)M[C]=64512;else{Zu[0]=x[C];var Y=Wy[0],se=Y>>>31<<15,V=(Y<<1>>>24)-127,Z=Y>>13&1023;if(V<-24)M[C]=se;else if(V<-14){var me=-14-V;M[C]=se+(Z+1024>>me)}else V>15?M[C]=se+31744:M[C]=se+(V+15<<10)+Z}return M}function Oo(x){return Array.isArray(x)||e(x)}var e1=function(x){return!(x&x-1)&&!!x},Xy=34467,Vr=3553,ef=34067,sc=34069,ai=6408,tf=6406,cc=6407,ns=6409,lc=6410,t1=32854,of=32855,o1=36194,Yy=32819,Ky=32820,Qy=33635,Zy=34042,nf=6402,fc=34041,rf=35904,af=35906,Zi=36193,sf=33776,cf=33777,lf=33778,ff=33779,n1=35986,r1=35987,a1=34798,i1=35840,s1=35841,c1=35842,l1=35843,f1=36196,Ji=5121,hf=5123,uf=5125,rs=5126,Jy=10242,e3=10243,t3=10497,df=33071,o3=33648,n3=10240,r3=10241,pf=9728,a3=9729,vf=9984,h1=9985,u1=9986,mf=9987,i3=33170,hc=4352,s3=4353,c3=4354,l3=34046,f3=3317,h3=37440,u3=37441,d3=37443,d1=37444,as=33984,p3=[vf,u1,h1,mf],uc=[0,ns,lc,cc,ai],gr={};gr[ns]=gr[tf]=gr[nf]=1,gr[fc]=gr[lc]=2,gr[cc]=gr[rf]=3,gr[ai]=gr[af]=4;function e0(x){return"[object "+x+"]"}var p1=e0("HTMLCanvasElement"),v1=e0("OffscreenCanvas"),m1=e0("CanvasRenderingContext2D"),g1=e0("ImageBitmap"),x1=e0("HTMLImageElement"),y1=e0("HTMLVideoElement"),v3=Object.keys(Yl).concat([p1,v1,m1,g1,x1,y1]),t0=[];t0[Ji]=1,t0[rs]=4,t0[Zi]=2,t0[hf]=2,t0[uf]=4;var wn=[];wn[t1]=2,wn[of]=2,wn[o1]=2,wn[fc]=4,wn[sf]=.5,wn[cf]=.5,wn[lf]=1,wn[ff]=1,wn[n1]=.5,wn[r1]=1,wn[a1]=1,wn[i1]=.5,wn[s1]=.25,wn[c1]=.5,wn[l1]=.25,wn[f1]=.5;function b1(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function w1(x){if(!Array.isArray(x))return!1;var M=x.length;return!(M===0||!Oo(x[0]))}function ii(x){return Object.prototype.toString.call(x)}function _1(x){return ii(x)===p1}function M1(x){return ii(x)===v1}function m3(x){return ii(x)===m1}function g3(x){return ii(x)===g1}function x3(x){return ii(x)===x1}function y3(x){return ii(x)===y1}function gf(x){if(!x)return!1;var M=ii(x);return v3.indexOf(M)>=0?!0:b1(x)||w1(x)||Rr(x)}function E1(x){return Yl[Object.prototype.toString.call(x)]|0}function b3(x,M){var C=M.length;switch(x.type){case Ji:case hf:case uf:case rs:var Y=co.allocType(x.type,C);Y.set(M),x.data=Y;break;case Zi:x.data=Ju(M);break;default:w.raise("unsupported texture type, must specify a typed array")}}function S1(x,M){return co.allocType(x.type===Zi?rs:x.type,M)}function A1(x,M){x.type===Zi?(x.data=Ju(M),co.freeType(M)):x.data=M}function w3(x,M,C,Y,se,V){for(var Z=x.width,me=x.height,ye=x.channels,Me=Z*me*ye,be=S1(x,Me),Ae=0,Re=0;Re<me;++Re)for(var ge=0;ge<Z;++ge)for(var ke=0;ke<ye;++ke)be[Ae++]=M[C*ge+Y*Re+se*ke+V];A1(x,be)}function dc(x,M,C,Y,se,V){var Z;if(typeof wn[x]!="undefined"?Z=wn[x]:Z=gr[x]*t0[M],V&&(Z*=6),se){for(var me=0,ye=C;ye>=1;)me+=Z*ye*ye,ye/=2;return me}else return Z*C*Y}function _3(x,M,C,Y,se,V,Z){var me={"don't care":hc,"dont care":hc,nice:c3,fast:s3},ye={repeat:t3,clamp:df,mirror:o3},Me={nearest:pf,linear:a3},be=t({mipmap:mf,"nearest mipmap nearest":vf,"linear mipmap nearest":h1,"nearest mipmap linear":u1,"linear mipmap linear":mf},Me),Ae={none:0,browser:d1},Re={uint8:Ji,rgba4:Yy,rgb565:Qy,"rgb5 a1":Ky},ge={alpha:tf,luminance:ns,"luminance alpha":lc,rgb:cc,rgba:ai,rgba4:t1,"rgb5 a1":of,rgb565:o1},ke={};M.ext_srgb&&(ge.srgb=rf,ge.srgba=af),M.oes_texture_float&&(Re.float32=Re.float=rs),M.oes_texture_half_float&&(Re.float16=Re["half float"]=Zi),M.webgl_depth_texture&&(t(ge,{depth:nf,"depth stencil":fc}),t(Re,{uint16:hf,uint32:uf,"depth stencil":Zy})),M.webgl_compressed_texture_s3tc&&t(ke,{"rgb s3tc dxt1":sf,"rgba s3tc dxt1":cf,"rgba s3tc dxt3":lf,"rgba s3tc dxt5":ff}),M.webgl_compressed_texture_atc&&t(ke,{"rgb atc":n1,"rgba atc explicit alpha":r1,"rgba atc interpolated alpha":a1}),M.webgl_compressed_texture_pvrtc&&t(ke,{"rgb pvrtc 4bppv1":i1,"rgb pvrtc 2bppv1":s1,"rgba pvrtc 4bppv1":c1,"rgba pvrtc 2bppv1":l1}),M.webgl_compressed_texture_etc1&&(ke["rgb etc1"]=f1);var D=Array.prototype.slice.call(x.getParameter(Xy));Object.keys(ke).forEach(function(z){var K=ke[z];D.indexOf(K)>=0&&(ge[z]=K)});var J=Object.keys(ge);C.textureFormats=J;var _e=[];Object.keys(ge).forEach(function(z){var K=ge[z];_e[K]=z});var Oe=[];Object.keys(Re).forEach(function(z){var K=Re[z];Oe[K]=z});var he=[];Object.keys(Me).forEach(function(z){var K=Me[z];he[K]=z});var Ge=[];Object.keys(be).forEach(function(z){var K=be[z];Ge[K]=z});var pe=[];Object.keys(ye).forEach(function(z){var K=ye[z];pe[K]=z});var Le=J.reduce(function(z,K){var B=ge[K];return B===ns||B===tf||B===ns||B===lc||B===nf||B===fc||M.ext_srgb&&(B===rf||B===af)?z[B]=B:B===of||K.indexOf("rgba")>=0?z[B]=ai:z[B]=cc,z},{});function de(){this.internalformat=ai,this.format=ai,this.type=Ji,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=d1,this.width=0,this.height=0,this.channels=0}function ze(z,K){z.internalformat=K.internalformat,z.format=K.format,z.type=K.type,z.compressed=K.compressed,z.premultiplyAlpha=K.premultiplyAlpha,z.flipY=K.flipY,z.unpackAlignment=K.unpackAlignment,z.colorSpace=K.colorSpace,z.width=K.width,z.height=K.height,z.channels=K.channels}function ot(z,K){if(!(typeof K!="object"||!K)){if("premultiplyAlpha"in K&&(w.type(K.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),z.premultiplyAlpha=K.premultiplyAlpha),"flipY"in K&&(w.type(K.flipY,"boolean","invalid texture flip"),z.flipY=K.flipY),"alignment"in K&&(w.oneOf(K.alignment,[1,2,4,8],"invalid texture unpack alignment"),z.unpackAlignment=K.alignment),"colorSpace"in K&&(w.parameter(K.colorSpace,Ae,"invalid colorSpace"),z.colorSpace=Ae[K.colorSpace]),"type"in K){var B=K.type;w(M.oes_texture_float||!(B==="float"||B==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),w(M.oes_texture_half_float||!(B==="half float"||B==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),w(M.webgl_depth_texture||!(B==="uint16"||B==="uint32"||B==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),w.parameter(B,Re,"invalid texture type"),z.type=Re[B]}var De=z.width,Nt=z.height,A=z.channels,_=!1;"shape"in K?(w(Array.isArray(K.shape)&&K.shape.length>=2,"shape must be an array"),De=K.shape[0],Nt=K.shape[1],K.shape.length===3&&(A=K.shape[2],w(A>0&&A<=4,"invalid number of channels"),_=!0),w(De>=0&&De<=C.maxTextureSize,"invalid width"),w(Nt>=0&&Nt<=C.maxTextureSize,"invalid height")):("radius"in K&&(De=Nt=K.radius,w(De>=0&&De<=C.maxTextureSize,"invalid radius")),"width"in K&&(De=K.width,w(De>=0&&De<=C.maxTextureSize,"invalid width")),"height"in K&&(Nt=K.height,w(Nt>=0&&Nt<=C.maxTextureSize,"invalid height")),"channels"in K&&(A=K.channels,w(A>0&&A<=4,"invalid number of channels"),_=!0)),z.width=De|0,z.height=Nt|0,z.channels=A|0;var P=!1;if("format"in K){var $=K.format;w(M.webgl_depth_texture||!($==="depth"||$==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),w.parameter($,ge,"invalid texture format");var q=z.internalformat=ge[$];z.format=Le[q],$ in Re&&("type"in K||(z.type=Re[$])),$ in ke&&(z.compressed=!0),P=!0}!_&&P?z.channels=gr[z.format]:_&&!P?z.channels!==uc[z.format]&&(z.format=z.internalformat=uc[z.channels]):P&&_&&w(z.channels===gr[z.format],"number of channels inconsistent with specified format")}}function vt(z){x.pixelStorei(h3,z.flipY),x.pixelStorei(u3,z.premultiplyAlpha),x.pixelStorei(d3,z.colorSpace),x.pixelStorei(f3,z.unpackAlignment)}function Ne(){de.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Ee(z,K){var B=null;if(gf(K)?B=K:K&&(w.type(K,"object","invalid pixel data type"),ot(z,K),"x"in K&&(z.xOffset=K.x|0),"y"in K&&(z.yOffset=K.y|0),gf(K.data)&&(B=K.data)),w(!z.compressed||B instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),K.copy){w(!B,"can not specify copy and data field for the same texture");var De=se.viewportWidth,Nt=se.viewportHeight;z.width=z.width||De-z.xOffset,z.height=z.height||Nt-z.yOffset,z.needsCopy=!0,w(z.xOffset>=0&&z.xOffset<De&&z.yOffset>=0&&z.yOffset<Nt&&z.width>0&&z.width<=De&&z.height>0&&z.height<=Nt,"copy texture read out of bounds")}else if(!B)z.width=z.width||1,z.height=z.height||1,z.channels=z.channels||4;else if(e(B))z.channels=z.channels||4,z.data=B,!("type"in K)&&z.type===Ji&&(z.type=E1(B));else if(b1(B))z.channels=z.channels||4,b3(z,B),z.alignment=1,z.needsFree=!0;else if(Rr(B)){var A=B.data;!Array.isArray(A)&&z.type===Ji&&(z.type=E1(A));var _=B.shape,P=B.stride,$,q,O,I,F,T;_.length===3?(O=_[2],T=P[2]):(w(_.length===2,"invalid ndarray pixel data, must be 2 or 3D"),O=1,T=1),$=_[0],q=_[1],I=P[0],F=P[1],z.alignment=1,z.width=$,z.height=q,z.channels=O,z.format=z.internalformat=uc[O],z.needsFree=!0,w3(z,A,I,F,T,B.offset)}else if(_1(B)||M1(B)||m3(B))_1(B)||M1(B)?z.element=B:z.element=B.canvas,z.width=z.element.width,z.height=z.element.height,z.channels=4;else if(g3(B))z.element=B,z.width=B.width,z.height=B.height,z.channels=4;else if(x3(B))z.element=B,z.width=B.naturalWidth,z.height=B.naturalHeight,z.channels=4;else if(y3(B))z.element=B,z.width=B.videoWidth,z.height=B.videoHeight,z.channels=4;else if(w1(B)){var R=z.width||B[0].length,S=z.height||B.length,G=z.channels;Oo(B[0][0])?G=G||B[0][0].length:G=G||1;for(var j=rc.shape(B),re=1,ce=0;ce<j.length;++ce)re*=j[ce];var te=S1(z,re);rc.flatten(B,j,"",te),A1(z,te),z.alignment=1,z.width=R,z.height=S,z.channels=G,z.format=z.internalformat=uc[G],z.needsFree=!0}z.type===rs?w(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):z.type===Zi&&w(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function le(z,K,B){var De=z.element,Nt=z.data,A=z.internalformat,_=z.format,P=z.type,$=z.width,q=z.height;vt(z),De?x.texImage2D(K,B,_,_,P,De):z.compressed?x.compressedTexImage2D(K,B,A,$,q,0,Nt):z.needsCopy?(Y(),x.copyTexImage2D(K,B,_,z.xOffset,z.yOffset,$,q,0)):x.texImage2D(K,B,_,$,q,0,_,P,Nt||null)}function ht(z,K,B,De,Nt){var A=z.element,_=z.data,P=z.internalformat,$=z.format,q=z.type,O=z.width,I=z.height;vt(z),A?x.texSubImage2D(K,Nt,B,De,$,q,A):z.compressed?x.compressedTexSubImage2D(K,Nt,B,De,P,O,I,_):z.needsCopy?(Y(),x.copyTexSubImage2D(K,Nt,B,De,z.xOffset,z.yOffset,O,I)):x.texSubImage2D(K,Nt,B,De,O,I,$,q,_)}var Et=[];function Be(){return Et.pop()||new Ne}function Rt(z){z.needsFree&&co.freeType(z.data),Ne.call(z),Et.push(z)}function xt(){de.call(this),this.genMipmaps=!1,this.mipmapHint=hc,this.mipmask=0,this.images=Array(16)}function kt(z,K,B){var De=z.images[0]=Be();z.mipmask=1,De.width=z.width=K,De.height=z.height=B,De.channels=z.channels=4}function Kt(z,K){var B=null;if(gf(K))B=z.images[0]=Be(),ze(B,z),Ee(B,K),z.mipmask=1;else if(ot(z,K),Array.isArray(K.mipmap))for(var De=K.mipmap,Nt=0;Nt<De.length;++Nt)B=z.images[Nt]=Be(),ze(B,z),B.width>>=Nt,B.height>>=Nt,Ee(B,De[Nt]),z.mipmask|=1<<Nt;else B=z.images[0]=Be(),ze(B,z),Ee(B,K),z.mipmask=1;ze(z,z.images[0]),z.compressed&&(z.internalformat===sf||z.internalformat===cf||z.internalformat===lf||z.internalformat===ff)&&w(z.width%4===0&&z.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Uo(z,K){for(var B=z.images,De=0;De<B.length;++De){if(!B[De])return;le(B[De],K,De)}}var an=[];function Ot(){var z=an.pop()||new xt;de.call(z),z.mipmask=0;for(var K=0;K<16;++K)z.images[K]=null;return z}function en(z){for(var K=z.images,B=0;B<K.length;++B)K[B]&&Rt(K[B]),K[B]=null;an.push(z)}function bo(){this.minFilter=pf,this.magFilter=pf,this.wrapS=df,this.wrapT=df,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=hc}function Wo(z,K){if("min"in K){var B=K.min;w.parameter(B,be),z.minFilter=be[B],p3.indexOf(z.minFilter)>=0&&!("faces"in K)&&(z.genMipmaps=!0)}if("mag"in K){var De=K.mag;w.parameter(De,Me),z.magFilter=Me[De]}var Nt=z.wrapS,A=z.wrapT;if("wrap"in K){var _=K.wrap;typeof _=="string"?(w.parameter(_,ye),Nt=A=ye[_]):Array.isArray(_)&&(w.parameter(_[0],ye),w.parameter(_[1],ye),Nt=ye[_[0]],A=ye[_[1]])}else{if("wrapS"in K){var P=K.wrapS;w.parameter(P,ye),Nt=ye[P]}if("wrapT"in K){var $=K.wrapT;w.parameter($,ye),A=ye[$]}}if(z.wrapS=Nt,z.wrapT=A,"anisotropic"in K){var q=K.anisotropic;w(typeof q=="number"&&q>=1&&q<=C.maxAnisotropic,"aniso samples must be between 1 and "),z.anisotropic=K.anisotropic}if("mipmap"in K){var O=!1;switch(typeof K.mipmap){case"string":w.parameter(K.mipmap,me,"invalid mipmap hint"),z.mipmapHint=me[K.mipmap],z.genMipmaps=!0,O=!0;break;case"boolean":O=z.genMipmaps=K.mipmap;break;case"object":w(Array.isArray(K.mipmap),"invalid mipmap type"),z.genMipmaps=!1,O=!0;break;default:w.raise("invalid mipmap type")}O&&!("min"in K)&&(z.minFilter=vf)}}function tn(z,K){x.texParameteri(K,r3,z.minFilter),x.texParameteri(K,n3,z.magFilter),x.texParameteri(K,Jy,z.wrapS),x.texParameteri(K,e3,z.wrapT),M.ext_texture_filter_anisotropic&&x.texParameteri(K,l3,z.anisotropic),z.genMipmaps&&(x.hint(i3,z.mipmapHint),x.generateMipmap(K))}var on=0,pn={},_n=C.maxTextureUnits,Fo=Array(_n).map(function(){return null});function St(z){de.call(this),this.mipmask=0,this.internalformat=ai,this.id=on++,this.refCount=1,this.target=z,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new bo,Z.profile&&(this.stats={size:0})}function Mn(z){x.activeTexture(as),x.bindTexture(z.target,z.texture)}function oo(){var z=Fo[0];z?x.bindTexture(z.target,z.texture):x.bindTexture(Vr,null)}function rt(z){var K=z.texture;w(K,"must not double destroy texture");var B=z.unit,De=z.target;B>=0&&(x.activeTexture(as+B),x.bindTexture(De,null),Fo[B]=null),x.deleteTexture(K),z.texture=null,z.params=null,z.pixels=null,z.refCount=0,delete pn[z.id],V.textureCount--}t(St.prototype,{bind:function(){var z=this;z.bindCount+=1;var K=z.unit;if(K<0){for(var B=0;B<_n;++B){var De=Fo[B];if(De){if(De.bindCount>0)continue;De.unit=-1}Fo[B]=z,K=B;break}K>=_n&&w.raise("insufficient number of texture units"),Z.profile&&V.maxTextureUnits<K+1&&(V.maxTextureUnits=K+1),z.unit=K,x.activeTexture(as+K),x.bindTexture(z.target,z.texture)}return K},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&rt(this)}});function Pt(z,K){var B=new St(Vr);pn[B.id]=B,V.textureCount++;function De(_,P){var $=B.texInfo;bo.call($);var q=Ot();return typeof _=="number"?typeof P=="number"?kt(q,_|0,P|0):kt(q,_|0,_|0):_?(w.type(_,"object","invalid arguments to regl.texture"),Wo($,_),Kt(q,_)):kt(q,1,1),$.genMipmaps&&(q.mipmask=(q.width<<1)-1),B.mipmask=q.mipmask,ze(B,q),w.texture2D($,q,C),B.internalformat=q.internalformat,De.width=q.width,De.height=q.height,Mn(B),Uo(q,Vr),tn($,Vr),oo(),en(q),Z.profile&&(B.stats.size=dc(B.internalformat,B.type,q.width,q.height,$.genMipmaps,!1)),De.format=_e[B.internalformat],De.type=Oe[B.type],De.mag=he[$.magFilter],De.min=Ge[$.minFilter],De.wrapS=pe[$.wrapS],De.wrapT=pe[$.wrapT],De}function Nt(_,P,$,q){w(!!_,"must specify image data");var O=P|0,I=$|0,F=q|0,T=Be();return ze(T,B),T.width=0,T.height=0,Ee(T,_),T.width=T.width||(B.width>>F)-O,T.height=T.height||(B.height>>F)-I,w(B.type===T.type&&B.format===T.format&&B.internalformat===T.internalformat,"incompatible format for texture.subimage"),w(O>=0&&I>=0&&O+T.width<=B.width&&I+T.height<=B.height,"texture.subimage write out of bounds"),w(B.mipmask&1<<F,"missing mipmap data"),w(T.data||T.element||T.needsCopy,"missing image data"),Mn(B),ht(T,Vr,O,I,F),oo(),Rt(T),De}function A(_,P){var $=_|0,q=P|0||$;if($===B.width&&q===B.height)return De;De.width=B.width=$,De.height=B.height=q,Mn(B);for(var O=0;B.mipmask>>O;++O){var I=$>>O,F=q>>O;if(!I||!F)break;x.texImage2D(Vr,O,B.format,I,F,0,B.format,B.type,null)}return oo(),Z.profile&&(B.stats.size=dc(B.internalformat,B.type,$,q,!1,!1)),De}return De(z,K),De.subimage=Nt,De.resize=A,De._reglType="texture2d",De._texture=B,Z.profile&&(De.stats=B.stats),De.destroy=function(){B.decRef()},De}function jt(z,K,B,De,Nt,A){var _=new St(ef);pn[_.id]=_,V.cubeCount++;var P=new Array(6);function $(I,F,T,R,S,G){var j,re=_.texInfo;for(bo.call(re),j=0;j<6;++j)P[j]=Ot();if(typeof I=="number"||!I){var ce=I|0||1;for(j=0;j<6;++j)kt(P[j],ce,ce)}else if(typeof I=="object")if(F)Kt(P[0],I),Kt(P[1],F),Kt(P[2],T),Kt(P[3],R),Kt(P[4],S),Kt(P[5],G);else if(Wo(re,I),ot(_,I),"faces"in I){var te=I.faces;for(w(Array.isArray(te)&&te.length===6,"cube faces must be a length 6 array"),j=0;j<6;++j)w(typeof te[j]=="object"&&!!te[j],"invalid input for cube map face"),ze(P[j],_),Kt(P[j],te[j])}else for(j=0;j<6;++j)Kt(P[j],I);else w.raise("invalid arguments to cube map");for(ze(_,P[0]),C.npotTextureCube||w(e1(_.width)&&e1(_.height),"your browser does not support non power or two texture dimensions"),re.genMipmaps?_.mipmask=(P[0].width<<1)-1:_.mipmask=P[0].mipmask,w.textureCube(_,re,P,C),_.internalformat=P[0].internalformat,$.width=P[0].width,$.height=P[0].height,Mn(_),j=0;j<6;++j)Uo(P[j],sc+j);for(tn(re,ef),oo(),Z.profile&&(_.stats.size=dc(_.internalformat,_.type,$.width,$.height,re.genMipmaps,!0)),$.format=_e[_.internalformat],$.type=Oe[_.type],$.mag=he[re.magFilter],$.min=Ge[re.minFilter],$.wrapS=pe[re.wrapS],$.wrapT=pe[re.wrapT],j=0;j<6;++j)en(P[j]);return $}function q(I,F,T,R,S){w(!!F,"must specify image data"),w(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var G=T|0,j=R|0,re=S|0,ce=Be();return ze(ce,_),ce.width=0,ce.height=0,Ee(ce,F),ce.width=ce.width||(_.width>>re)-G,ce.height=ce.height||(_.height>>re)-j,w(_.type===ce.type&&_.format===ce.format&&_.internalformat===ce.internalformat,"incompatible format for texture.subimage"),w(G>=0&&j>=0&&G+ce.width<=_.width&&j+ce.height<=_.height,"texture.subimage write out of bounds"),w(_.mipmask&1<<re,"missing mipmap data"),w(ce.data||ce.element||ce.needsCopy,"missing image data"),Mn(_),ht(ce,sc+I,G,j,re),oo(),Rt(ce),$}function O(I){var F=I|0;if(F!==_.width){$.width=_.width=F,$.height=_.height=F,Mn(_);for(var T=0;T<6;++T)for(var R=0;_.mipmask>>R;++R)x.texImage2D(sc+T,R,_.format,F>>R,F>>R,0,_.format,_.type,null);return oo(),Z.profile&&(_.stats.size=dc(_.internalformat,_.type,$.width,$.height,!1,!0)),$}}return $(z,K,B,De,Nt,A),$.subimage=q,$.resize=O,$._reglType="textureCube",$._texture=_,Z.profile&&($.stats=_.stats),$.destroy=function(){_.decRef()},$}function Go(){for(var z=0;z<_n;++z)x.activeTexture(as+z),x.bindTexture(Vr,null),Fo[z]=null;ir(pn).forEach(rt),V.cubeCount=0,V.textureCount=0}Z.profile&&(V.getTotalTextureSize=function(){var z=0;return Object.keys(pn).forEach(function(K){z+=pn[K].stats.size}),z});function Yr(){for(var z=0;z<_n;++z){var K=Fo[z];K&&(K.bindCount=0,K.unit=-1,Fo[z]=null)}ir(pn).forEach(function(B){B.texture=x.createTexture(),x.bindTexture(B.target,B.texture);for(var De=0;De<32;++De)if(B.mipmask&1<<De)if(B.target===Vr)x.texImage2D(Vr,De,B.internalformat,B.width>>De,B.height>>De,0,B.internalformat,B.type,null);else for(var Nt=0;Nt<6;++Nt)x.texImage2D(sc+Nt,De,B.internalformat,B.width>>De,B.height>>De,0,B.internalformat,B.type,null);tn(B.texInfo,B.target)})}function di(){for(var z=0;z<_n;++z){var K=Fo[z];K&&(K.bindCount=0,K.unit=-1,Fo[z]=null),x.activeTexture(as+z),x.bindTexture(Vr,null),x.bindTexture(ef,null)}}return{create2D:Pt,createCube:jt,clear:Go,getTexture:function(z){return null},restore:Yr,refresh:di}}var wa=36161,pc=32854,T1=32855,k1=36194,L1=33189,z1=36168,C1=34041,R1=35907,N1=34836,P1=34842,I1=34843,Nr=[];Nr[pc]=2,Nr[T1]=2,Nr[k1]=2,Nr[L1]=2,Nr[z1]=1,Nr[C1]=4,Nr[R1]=4,Nr[N1]=16,Nr[P1]=8,Nr[I1]=6;function O1(x,M,C){return Nr[x]*M*C}var M3=function(x,M,C,Y,se){var V={rgba4:pc,rgb565:k1,"rgb5 a1":T1,depth:L1,stencil:z1,"depth stencil":C1};M.ext_srgb&&(V.srgba=R1),M.ext_color_buffer_half_float&&(V.rgba16f=P1,V.rgb16f=I1),M.webgl_color_buffer_float&&(V.rgba32f=N1);var Z=[];Object.keys(V).forEach(function(ge){var ke=V[ge];Z[ke]=ge});var me=0,ye={};function Me(ge){this.id=me++,this.refCount=1,this.renderbuffer=ge,this.format=pc,this.width=0,this.height=0,se.profile&&(this.stats={size:0})}Me.prototype.decRef=function(){--this.refCount<=0&&be(this)};function be(ge){var ke=ge.renderbuffer;w(ke,"must not double destroy renderbuffer"),x.bindRenderbuffer(wa,null),x.deleteRenderbuffer(ke),ge.renderbuffer=null,ge.refCount=0,delete ye[ge.id],Y.renderbufferCount--}function Ae(ge,ke){var D=new Me(x.createRenderbuffer());ye[D.id]=D,Y.renderbufferCount++;function J(Oe,he){var Ge=0,pe=0,Le=pc;if(typeof Oe=="object"&&Oe){var de=Oe;if("shape"in de){var ze=de.shape;w(Array.isArray(ze)&&ze.length>=2,"invalid renderbuffer shape"),Ge=ze[0]|0,pe=ze[1]|0}else"radius"in de&&(Ge=pe=de.radius|0),"width"in de&&(Ge=de.width|0),"height"in de&&(pe=de.height|0);"format"in de&&(w.parameter(de.format,V,"invalid renderbuffer format"),Le=V[de.format])}else typeof Oe=="number"?(Ge=Oe|0,typeof he=="number"?pe=he|0:pe=Ge):Oe?w.raise("invalid arguments to renderbuffer constructor"):Ge=pe=1;if(w(Ge>0&&pe>0&&Ge<=C.maxRenderbufferSize&&pe<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(Ge===D.width&&pe===D.height&&Le===D.format))return J.width=D.width=Ge,J.height=D.height=pe,D.format=Le,x.bindRenderbuffer(wa,D.renderbuffer),x.renderbufferStorage(wa,Le,Ge,pe),w(x.getError()===0,"invalid render buffer format"),se.profile&&(D.stats.size=O1(D.format,D.width,D.height)),J.format=Z[D.format],J}function _e(Oe,he){var Ge=Oe|0,pe=he|0||Ge;return Ge===D.width&&pe===D.height||(w(Ge>0&&pe>0&&Ge<=C.maxRenderbufferSize&&pe<=C.maxRenderbufferSize,"invalid renderbuffer size"),J.width=D.width=Ge,J.height=D.height=pe,x.bindRenderbuffer(wa,D.renderbuffer),x.renderbufferStorage(wa,D.format,Ge,pe),w(x.getError()===0,"invalid render buffer format"),se.profile&&(D.stats.size=O1(D.format,D.width,D.height))),J}return J(ge,ke),J.resize=_e,J._reglType="renderbuffer",J._renderbuffer=D,se.profile&&(J.stats=D.stats),J.destroy=function(){D.decRef()},J}se.profile&&(Y.getTotalRenderbufferSize=function(){var ge=0;return Object.keys(ye).forEach(function(ke){ge+=ye[ke].stats.size}),ge});function Re(){ir(ye).forEach(function(ge){ge.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(wa,ge.renderbuffer),x.renderbufferStorage(wa,ge.format,ge.width,ge.height)}),x.bindRenderbuffer(wa,null)}return{create:Ae,clear:function(){ir(ye).forEach(be)},restore:Re}},ra=36160,xf=36161,si=3553,vc=34069,F1=36064,G1=36096,$1=36128,D1=33306,q1=36053,E3=36054,S3=36055,A3=36057,T3=36061,k3=36193,L3=5121,z3=5126,H1=6407,j1=6408,C3=6402,R3=[H1,j1],yf=[];yf[j1]=4,yf[H1]=3;var mc=[];mc[L3]=1,mc[z3]=4,mc[k3]=2;var N3=32854,P3=32855,I3=36194,O3=33189,F3=36168,B1=34041,G3=35907,$3=34836,D3=34842,q3=34843,H3=[N3,P3,I3,G3,D3,q3,$3],o0={};o0[q1]="complete",o0[E3]="incomplete attachment",o0[A3]="incomplete dimensions",o0[S3]="incomplete, missing attachment",o0[T3]="unsupported";function j3(x,M,C,Y,se,V){var Z={cur:null,next:null,dirty:!1,setFBO:null},me=["rgba"],ye=["rgba4","rgb565","rgb5 a1"];M.ext_srgb&&ye.push("srgba"),M.ext_color_buffer_half_float&&ye.push("rgba16f","rgb16f"),M.webgl_color_buffer_float&&ye.push("rgba32f");var Me=["uint8"];M.oes_texture_half_float&&Me.push("half float","float16"),M.oes_texture_float&&Me.push("float","float32");function be(Ne,Ee,le){this.target=Ne,this.texture=Ee,this.renderbuffer=le;var ht=0,Et=0;Ee?(ht=Ee.width,Et=Ee.height):le&&(ht=le.width,Et=le.height),this.width=ht,this.height=Et}function Ae(Ne){Ne&&(Ne.texture&&Ne.texture._texture.decRef(),Ne.renderbuffer&&Ne.renderbuffer._renderbuffer.decRef())}function Re(Ne,Ee,le){if(Ne)if(Ne.texture){var ht=Ne.texture._texture,Et=Math.max(1,ht.width),Be=Math.max(1,ht.height);w(Et===Ee&&Be===le,"inconsistent width/height for supplied texture"),ht.refCount+=1}else{var Rt=Ne.renderbuffer._renderbuffer;w(Rt.width===Ee&&Rt.height===le,"inconsistent width/height for renderbuffer"),Rt.refCount+=1}}function ge(Ne,Ee){Ee&&(Ee.texture?x.framebufferTexture2D(ra,Ne,Ee.target,Ee.texture._texture.texture,0):x.framebufferRenderbuffer(ra,Ne,xf,Ee.renderbuffer._renderbuffer.renderbuffer))}function ke(Ne){var Ee=si,le=null,ht=null,Et=Ne;typeof Ne=="object"&&(Et=Ne.data,"target"in Ne&&(Ee=Ne.target|0)),w.type(Et,"function","invalid attachment data");var Be=Et._reglType;return Be==="texture2d"?(le=Et,w(Ee===si)):Be==="textureCube"?(le=Et,w(Ee>=vc&&Ee<vc+6,"invalid cube map target")):Be==="renderbuffer"?(ht=Et,Ee=xf):w.raise("invalid regl object for attachment"),new be(Ee,le,ht)}function D(Ne,Ee,le,ht,Et){if(le){var Be=Y.create2D({width:Ne,height:Ee,format:ht,type:Et});return Be._texture.refCount=0,new be(si,Be,null)}else{var Rt=se.create({width:Ne,height:Ee,format:ht});return Rt._renderbuffer.refCount=0,new be(xf,null,Rt)}}function J(Ne){return Ne&&(Ne.texture||Ne.renderbuffer)}function _e(Ne,Ee,le){Ne&&(Ne.texture?Ne.texture.resize(Ee,le):Ne.renderbuffer&&Ne.renderbuffer.resize(Ee,le),Ne.width=Ee,Ne.height=le)}var Oe=0,he={};function Ge(){this.id=Oe++,he[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function pe(Ne){Ne.colorAttachments.forEach(Ae),Ae(Ne.depthAttachment),Ae(Ne.stencilAttachment),Ae(Ne.depthStencilAttachment)}function Le(Ne){var Ee=Ne.framebuffer;w(Ee,"must not double destroy framebuffer"),x.deleteFramebuffer(Ee),Ne.framebuffer=null,V.framebufferCount--,delete he[Ne.id]}function de(Ne){var Ee;x.bindFramebuffer(ra,Ne.framebuffer);var le=Ne.colorAttachments;for(Ee=0;Ee<le.length;++Ee)ge(F1+Ee,le[Ee]);for(Ee=le.length;Ee<C.maxColorAttachments;++Ee)x.framebufferTexture2D(ra,F1+Ee,si,null,0);x.framebufferTexture2D(ra,D1,si,null,0),x.framebufferTexture2D(ra,G1,si,null,0),x.framebufferTexture2D(ra,$1,si,null,0),ge(G1,Ne.depthAttachment),ge($1,Ne.stencilAttachment),ge(D1,Ne.depthStencilAttachment);var ht=x.checkFramebufferStatus(ra);!x.isContextLost()&&ht!==q1&&w.raise("framebuffer configuration not supported, status = "+o0[ht]),x.bindFramebuffer(ra,Z.next?Z.next.framebuffer:null),Z.cur=Z.next,x.getError()}function ze(Ne,Ee){var le=new Ge;V.framebufferCount++;function ht(Be,Rt){var xt;w(Z.next!==le,"can not update framebuffer which is currently in use");var kt=0,Kt=0,Uo=!0,an=!0,Ot=null,en=!0,bo="rgba",Wo="uint8",tn=1,on=null,pn=null,_n=null,Fo=!1;if(typeof Be=="number")kt=Be|0,Kt=Rt|0||kt;else if(!Be)kt=Kt=1;else{w.type(Be,"object","invalid arguments for framebuffer");var St=Be;if("shape"in St){var Mn=St.shape;w(Array.isArray(Mn)&&Mn.length>=2,"invalid shape for framebuffer"),kt=Mn[0],Kt=Mn[1]}else"radius"in St&&(kt=Kt=St.radius),"width"in St&&(kt=St.width),"height"in St&&(Kt=St.height);("color"in St||"colors"in St)&&(Ot=St.color||St.colors,Array.isArray(Ot)&&w(Ot.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),Ot||("colorCount"in St&&(tn=St.colorCount|0,w(tn>0,"invalid color buffer count")),"colorTexture"in St&&(en=!!St.colorTexture,bo="rgba4"),"colorType"in St&&(Wo=St.colorType,en?(w(M.oes_texture_float||!(Wo==="float"||Wo==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),w(M.oes_texture_half_float||!(Wo==="half float"||Wo==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Wo==="half float"||Wo==="float16"?(w(M.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),bo="rgba16f"):(Wo==="float"||Wo==="float32")&&(w(M.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),bo="rgba32f"),w.oneOf(Wo,Me,"invalid color type")),"colorFormat"in St&&(bo=St.colorFormat,me.indexOf(bo)>=0?en=!0:ye.indexOf(bo)>=0?en=!1:en?w.oneOf(St.colorFormat,me,"invalid color format for texture"):w.oneOf(St.colorFormat,ye,"invalid color format for renderbuffer"))),("depthTexture"in St||"depthStencilTexture"in St)&&(Fo=!!(St.depthTexture||St.depthStencilTexture),w(!Fo||M.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in St&&(typeof St.depth=="boolean"?Uo=St.depth:(on=St.depth,an=!1)),"stencil"in St&&(typeof St.stencil=="boolean"?an=St.stencil:(pn=St.stencil,Uo=!1)),"depthStencil"in St&&(typeof St.depthStencil=="boolean"?Uo=an=St.depthStencil:(_n=St.depthStencil,Uo=!1,an=!1))}var oo=null,rt=null,Pt=null,jt=null;if(Array.isArray(Ot))oo=Ot.map(ke);else if(Ot)oo=[ke(Ot)];else for(oo=new Array(tn),xt=0;xt<tn;++xt)oo[xt]=D(kt,Kt,en,bo,Wo);w(M.webgl_draw_buffers||oo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),w(oo.length<=C.maxColorAttachments,"too many color attachments, not supported"),kt=kt||oo[0].width,Kt=Kt||oo[0].height,on?rt=ke(on):Uo&&!an&&(rt=D(kt,Kt,Fo,"depth","uint32")),pn?Pt=ke(pn):an&&!Uo&&(Pt=D(kt,Kt,!1,"stencil","uint8")),_n?jt=ke(_n):!on&&!pn&&an&&Uo&&(jt=D(kt,Kt,Fo,"depth stencil","depth stencil")),w(!!on+!!pn+!!_n<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var Go=null;for(xt=0;xt<oo.length;++xt)if(Re(oo[xt],kt,Kt),w(!oo[xt]||oo[xt].texture&&R3.indexOf(oo[xt].texture._texture.format)>=0||oo[xt].renderbuffer&&H3.indexOf(oo[xt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+xt+" is invalid"),oo[xt]&&oo[xt].texture){var Yr=yf[oo[xt].texture._texture.format]*mc[oo[xt].texture._texture.type];Go===null?Go=Yr:w(Go===Yr,"all color attachments much have the same number of bits per pixel.")}return Re(rt,kt,Kt),w(!rt||rt.texture&&rt.texture._texture.format===C3||rt.renderbuffer&&rt.renderbuffer._renderbuffer.format===O3,"invalid depth attachment for framebuffer object"),Re(Pt,kt,Kt),w(!Pt||Pt.renderbuffer&&Pt.renderbuffer._renderbuffer.format===F3,"invalid stencil attachment for framebuffer object"),Re(jt,kt,Kt),w(!jt||jt.texture&&jt.texture._texture.format===B1||jt.renderbuffer&&jt.renderbuffer._renderbuffer.format===B1,"invalid depth-stencil attachment for framebuffer object"),pe(le),le.width=kt,le.height=Kt,le.colorAttachments=oo,le.depthAttachment=rt,le.stencilAttachment=Pt,le.depthStencilAttachment=jt,ht.color=oo.map(J),ht.depth=J(rt),ht.stencil=J(Pt),ht.depthStencil=J(jt),ht.width=le.width,ht.height=le.height,de(le),ht}function Et(Be,Rt){w(Z.next!==le,"can not resize a framebuffer which is currently in use");var xt=Math.max(Be|0,1),kt=Math.max(Rt|0||xt,1);if(xt===le.width&&kt===le.height)return ht;for(var Kt=le.colorAttachments,Uo=0;Uo<Kt.length;++Uo)_e(Kt[Uo],xt,kt);return _e(le.depthAttachment,xt,kt),_e(le.stencilAttachment,xt,kt),_e(le.depthStencilAttachment,xt,kt),le.width=ht.width=xt,le.height=ht.height=kt,de(le),ht}return ht(Ne,Ee),t(ht,{resize:Et,_reglType:"framebuffer",_framebuffer:le,destroy:function(){Le(le),pe(le)},use:function(Be){Z.setFBO({framebuffer:ht},Be)}})}function ot(Ne){var Ee=Array(6);function le(Et){var Be;w(Ee.indexOf(Z.next)<0,"can not update framebuffer which is currently in use");var Rt={color:null},xt=0,kt=null,Kt="rgba",Uo="uint8",an=1;if(typeof Et=="number")xt=Et|0;else if(!Et)xt=1;else{w.type(Et,"object","invalid arguments for framebuffer");var Ot=Et;if("shape"in Ot){var en=Ot.shape;w(Array.isArray(en)&&en.length>=2,"invalid shape for framebuffer"),w(en[0]===en[1],"cube framebuffer must be square"),xt=en[0]}else"radius"in Ot&&(xt=Ot.radius|0),"width"in Ot?(xt=Ot.width|0,"height"in Ot&&w(Ot.height===xt,"must be square")):"height"in Ot&&(xt=Ot.height|0);("color"in Ot||"colors"in Ot)&&(kt=Ot.color||Ot.colors,Array.isArray(kt)&&w(kt.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),kt||("colorCount"in Ot&&(an=Ot.colorCount|0,w(an>0,"invalid color buffer count")),"colorType"in Ot&&(w.oneOf(Ot.colorType,Me,"invalid color type"),Uo=Ot.colorType),"colorFormat"in Ot&&(Kt=Ot.colorFormat,w.oneOf(Ot.colorFormat,me,"invalid color format for texture"))),"depth"in Ot&&(Rt.depth=Ot.depth),"stencil"in Ot&&(Rt.stencil=Ot.stencil),"depthStencil"in Ot&&(Rt.depthStencil=Ot.depthStencil)}var bo;if(kt)if(Array.isArray(kt))for(bo=[],Be=0;Be<kt.length;++Be)bo[Be]=kt[Be];else bo=[kt];else{bo=Array(an);var Wo={radius:xt,format:Kt,type:Uo};for(Be=0;Be<an;++Be)bo[Be]=Y.createCube(Wo)}for(Rt.color=Array(bo.length),Be=0;Be<bo.length;++Be){var tn=bo[Be];w(typeof tn=="function"&&tn._reglType==="textureCube","invalid cube map"),xt=xt||tn.width,w(tn.width===xt&&tn.height===xt,"invalid cube map shape"),Rt.color[Be]={target:vc,data:bo[Be]}}for(Be=0;Be<6;++Be){for(var on=0;on<bo.length;++on)Rt.color[on].target=vc+Be;Be>0&&(Rt.depth=Ee[0].depth,Rt.stencil=Ee[0].stencil,Rt.depthStencil=Ee[0].depthStencil),Ee[Be]?Ee[Be](Rt):Ee[Be]=ze(Rt)}return t(le,{width:xt,height:xt,color:bo})}function ht(Et){var Be,Rt=Et|0;if(w(Rt>0&&Rt<=C.maxCubeMapSize,"invalid radius for cube fbo"),Rt===le.width)return le;var xt=le.color;for(Be=0;Be<xt.length;++Be)xt[Be].resize(Rt);for(Be=0;Be<6;++Be)Ee[Be].resize(Rt);return le.width=le.height=Rt,le}return le(Ne),t(le,{faces:Ee,resize:ht,_reglType:"framebufferCube",destroy:function(){Ee.forEach(function(Et){Et.destroy()})}})}function vt(){Z.cur=null,Z.next=null,Z.dirty=!0,ir(he).forEach(function(Ne){Ne.framebuffer=x.createFramebuffer(),de(Ne)})}return t(Z,{getFramebuffer:function(Ne){if(typeof Ne=="function"&&Ne._reglType==="framebuffer"){var Ee=Ne._framebuffer;if(Ee instanceof Ge)return Ee}return null},create:ze,createCube:ot,clear:function(){ir(he).forEach(Le)},restore:vt})}var B3=5126,U1=34962;function bf(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=B3,this.offset=0,this.stride=0,this.divisor=0}function U3(x,M,C,Y,se){for(var V=C.maxAttributes,Z=new Array(V),me=0;me<V;++me)Z[me]=new bf;var ye=0,Me={},be={Record:bf,scope:{},state:Z,currentVAO:null,targetVAO:null,restore:Re()?he:function(){},createVAO:Ge,getVAO:ke,destroyBuffer:Ae,setVAO:Re()?D:J,clear:Re()?_e:function(){}};function Ae(pe){for(var Le=0;Le<Z.length;++Le){var de=Z[Le];de.buffer===pe&&(x.disableVertexAttribArray(Le),de.buffer=null)}}function Re(){return M.oes_vertex_array_object}function ge(){return M.angle_instanced_arrays}function ke(pe){return typeof pe=="function"&&pe._vao?pe._vao:null}function D(pe){if(pe!==be.currentVAO){var Le=Re();pe?Le.bindVertexArrayOES(pe.vao):Le.bindVertexArrayOES(null),be.currentVAO=pe}}function J(pe){if(pe!==be.currentVAO){if(pe)pe.bindAttrs();else for(var Le=ge(),de=0;de<Z.length;++de){var ze=Z[de];ze.buffer?(x.enableVertexAttribArray(de),x.vertexAttribPointer(de,ze.size,ze.type,ze.normalized,ze.stride,ze.offfset),Le&&ze.divisor&&Le.vertexAttribDivisorANGLE(de,ze.divisor)):(x.disableVertexAttribArray(de),x.vertexAttrib4f(de,ze.x,ze.y,ze.z,ze.w))}be.currentVAO=pe}}function _e(){ir(Me).forEach(function(pe){pe.destroy()})}function Oe(){this.id=++ye,this.attributes=[];var pe=Re();pe?this.vao=pe.createVertexArrayOES():this.vao=null,Me[this.id]=this,this.buffers=[]}Oe.prototype.bindAttrs=function(){for(var pe=ge(),Le=this.attributes,de=0;de<Le.length;++de){var ze=Le[de];ze.buffer?(x.enableVertexAttribArray(de),x.bindBuffer(U1,ze.buffer.buffer),x.vertexAttribPointer(de,ze.size,ze.type,ze.normalized,ze.stride,ze.offset),pe&&ze.divisor&&pe.vertexAttribDivisorANGLE(de,ze.divisor)):(x.disableVertexAttribArray(de),x.vertexAttrib4f(de,ze.x,ze.y,ze.z,ze.w))}for(var ot=Le.length;ot<V;++ot)x.disableVertexAttribArray(ot)},Oe.prototype.refresh=function(){var pe=Re();pe&&(pe.bindVertexArrayOES(this.vao),this.bindAttrs(),be.currentVAO=this)},Oe.prototype.destroy=function(){if(this.vao){var pe=Re();this===be.currentVAO&&(be.currentVAO=null,pe.bindVertexArrayOES(null)),pe.deleteVertexArrayOES(this.vao),this.vao=null}Me[this.id]&&(delete Me[this.id],Y.vaoCount-=1)};function he(){var pe=Re();pe&&ir(Me).forEach(function(Le){Le.refresh()})}function Ge(pe){var Le=new Oe;Y.vaoCount+=1;function de(ze){w(Array.isArray(ze),"arguments to vertex array constructor must be an array"),w(ze.length<V,"too many attributes"),w(ze.length>0,"must specify at least one attribute");var ot={},vt=Le.attributes;vt.length=ze.length;for(var Ne=0;Ne<ze.length;++Ne){var Ee=ze[Ne],le=vt[Ne]=new bf,ht=Ee.data||Ee;if(Array.isArray(ht)||e(ht)||Rr(ht)){var Et;Le.buffers[Ne]&&(Et=Le.buffers[Ne],e(ht)&&Et._buffer.byteLength>=ht.byteLength?Et.subdata(ht):(Et.destroy(),Le.buffers[Ne]=null)),Le.buffers[Ne]||(Et=Le.buffers[Ne]=se.create(Ee,U1,!1,!0)),le.buffer=se.getBuffer(Et),le.size=le.buffer.dimension|0,le.normalized=!1,le.type=le.buffer.dtype,le.offset=0,le.stride=0,le.divisor=0,le.state=1,ot[Ne]=1}else se.getBuffer(Ee)?(le.buffer=se.getBuffer(Ee),le.size=le.buffer.dimension|0,le.normalized=!1,le.type=le.buffer.dtype,le.offset=0,le.stride=0,le.divisor=0,le.state=1):se.getBuffer(Ee.buffer)?(le.buffer=se.getBuffer(Ee.buffer),le.size=(+Ee.size||le.buffer.dimension)|0,le.normalized=!!Ee.normalized||!1,"type"in Ee?(w.parameter(Ee.type,ni,"invalid buffer type"),le.type=ni[Ee.type]):le.type=le.buffer.dtype,le.offset=(Ee.offset||0)|0,le.stride=(Ee.stride||0)|0,le.divisor=(Ee.divisor||0)|0,le.state=1,w(le.size>=1&&le.size<=4,"size must be between 1 and 4"),w(le.offset>=0,"invalid offset"),w(le.stride>=0&&le.stride<=255,"stride must be between 0 and 255"),w(le.divisor>=0,"divisor must be positive"),w(!le.divisor||!!M.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Ee?(w(Ne>0,"first attribute must not be a constant"),le.x=+Ee.x||0,le.y=+Ee.y||0,le.z=+Ee.z||0,le.w=+Ee.w||0,le.state=2):w(!1,"invalid attribute spec for location "+Ne)}for(var Be=0;Be<Le.buffers.length;++Be)!ot[Be]&&Le.buffers[Be]&&(Le.buffers[Be].destroy(),Le.buffers[Be]=null);return Le.refresh(),de}return de.destroy=function(){for(var ze=0;ze<Le.buffers.length;++ze)Le.buffers[ze]&&Le.buffers[ze].destroy();Le.buffers.length=0,Le.destroy()},de._vao=Le,de._reglType="vao",de(pe)}return be}var W1=35632,W3=35633,V3=35718,X3=35721;function Y3(x,M,C,Y){var se={},V={};function Z(D,J,_e,Oe){this.name=D,this.id=J,this.location=_e,this.info=Oe}function me(D,J){for(var _e=0;_e<D.length;++_e)if(D[_e].id===J.id){D[_e].location=J.location;return}D.push(J)}function ye(D,J,_e){var Oe=D===W1?se:V,he=Oe[J];if(!he){var Ge=M.str(J);he=x.createShader(D),x.shaderSource(he,Ge),x.compileShader(he),w.shaderError(x,he,Ge,D,_e),Oe[J]=he}return he}var Me={},be=[],Ae=0;function Re(D,J){this.id=Ae++,this.fragId=D,this.vertId=J,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,Y.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function ge(D,J,_e){var Oe,he,Ge=ye(W1,D.fragId),pe=ye(W3,D.vertId),Le=D.program=x.createProgram();if(x.attachShader(Le,Ge),x.attachShader(Le,pe),_e)for(Oe=0;Oe<_e.length;++Oe){var de=_e[Oe];x.bindAttribLocation(Le,de[0],de[1])}x.linkProgram(Le),w.linkError(x,Le,M.str(D.fragId),M.str(D.vertId),J);var ze=x.getProgramParameter(Le,V3);Y.profile&&(D.stats.uniformsCount=ze);var ot=D.uniforms;for(Oe=0;Oe<ze;++Oe)if(he=x.getActiveUniform(Le,Oe),he)if(he.size>1)for(var vt=0;vt<he.size;++vt){var Ne=he.name.replace("[0]","["+vt+"]");me(ot,new Z(Ne,M.id(Ne),x.getUniformLocation(Le,Ne),he))}else me(ot,new Z(he.name,M.id(he.name),x.getUniformLocation(Le,he.name),he));var Ee=x.getProgramParameter(Le,X3);Y.profile&&(D.stats.attributesCount=Ee);var le=D.attributes;for(Oe=0;Oe<Ee;++Oe)he=x.getActiveAttrib(Le,Oe),he&&me(le,new Z(he.name,M.id(he.name),x.getAttribLocation(Le,he.name),he))}Y.profile&&(C.getMaxUniformsCount=function(){var D=0;return be.forEach(function(J){J.stats.uniformsCount>D&&(D=J.stats.uniformsCount)}),D},C.getMaxAttributesCount=function(){var D=0;return be.forEach(function(J){J.stats.attributesCount>D&&(D=J.stats.attributesCount)}),D});function ke(){se={},V={};for(var D=0;D<be.length;++D)ge(be[D],null,be[D].attributes.map(function(J){return[J.location,J.name]}))}return{clear:function(){var D=x.deleteShader.bind(x);ir(se).forEach(D),se={},ir(V).forEach(D),V={},be.forEach(function(J){x.deleteProgram(J.program)}),be.length=0,Me={},C.shaderCount=0},program:function(D,J,_e,Oe){w.command(D>=0,"missing vertex shader",_e),w.command(J>=0,"missing fragment shader",_e);var he=Me[J];he||(he=Me[J]={});var Ge=he[D];if(Ge&&(Ge.refCount++,!Oe))return Ge;var pe=new Re(J,D);return C.shaderCount++,ge(pe,_e,Oe),Ge||(he[D]=pe),be.push(pe),t(pe,{destroy:function(){if(pe.refCount--,pe.refCount<=0){x.deleteProgram(pe.program);var Le=be.indexOf(pe);be.splice(Le,1),C.shaderCount--}he[pe.vertId].refCount<=0&&(x.deleteShader(V[pe.vertId]),delete V[pe.vertId],delete Me[pe.fragId][pe.vertId]),Object.keys(Me[pe.fragId]).length||(x.deleteShader(se[pe.fragId]),delete se[pe.fragId],delete Me[pe.fragId])}})},restore:ke,shader:ye,frag:-1,vert:-1}}var K3=6408,is=5121,Q3=3333,gc=5126;function Z3(x,M,C,Y,se,V,Z){function me(be){var Ae;M.next===null?(w(se.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Ae=is):(w(M.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Ae=M.next.colorAttachments[0].texture._texture.type,V.oes_texture_float?(w(Ae===is||Ae===gc,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Ae===gc&&w(Z.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):w(Ae===is,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Re=0,ge=0,ke=Y.framebufferWidth,D=Y.framebufferHeight,J=null;e(be)?J=be:be&&(w.type(be,"object","invalid arguments to regl.read()"),Re=be.x|0,ge=be.y|0,w(Re>=0&&Re<Y.framebufferWidth,"invalid x offset for regl.read"),w(ge>=0&&ge<Y.framebufferHeight,"invalid y offset for regl.read"),ke=(be.width||Y.framebufferWidth-Re)|0,D=(be.height||Y.framebufferHeight-ge)|0,J=be.data||null),J&&(Ae===is?w(J instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Ae===gc&&w(J instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),w(ke>0&&ke+Re<=Y.framebufferWidth,"invalid width for read pixels"),w(D>0&&D+ge<=Y.framebufferHeight,"invalid height for read pixels"),C();var _e=ke*D*4;return J||(Ae===is?J=new Uint8Array(_e):Ae===gc&&(J=J||new Float32Array(_e))),w.isTypedArray(J,"data buffer for regl.read() must be a typedarray"),w(J.byteLength>=_e,"data buffer for regl.read() too small"),x.pixelStorei(Q3,4),x.readPixels(Re,ge,ke,D,K3,Ae,J),J}function ye(be){var Ae;return M.setFBO({framebuffer:be.framebuffer},function(){Ae=me(be)}),Ae}function Me(be){return!be||!("framebuffer"in be)?me(be):ye(be)}return Me}function n0(x){return Array.prototype.slice.call(x)}function r0(x){return n0(x).join("")}function J3(){var x=0,M=[],C=[];function Y(Ae){for(var Re=0;Re<C.length;++Re)if(C[Re]===Ae)return M[Re];var ge="g"+x++;return M.push(ge),C.push(Ae),ge}function se(){var Ae=[];function Re(){Ae.push.apply(Ae,n0(arguments))}var ge=[];function ke(){var D="v"+x++;return ge.push(D),arguments.length>0&&(Ae.push(D,"="),Ae.push.apply(Ae,n0(arguments)),Ae.push(";")),D}return t(Re,{def:ke,toString:function(){return r0([ge.length>0?"var "+ge.join(",")+";":"",r0(Ae)])}})}function V(){var Ae=se(),Re=se(),ge=Ae.toString,ke=Re.toString;function D(J,_e){Re(J,_e,"=",Ae.def(J,_e),";")}return t(function(){Ae.apply(Ae,n0(arguments))},{def:Ae.def,entry:Ae,exit:Re,save:D,set:function(J,_e,Oe){D(J,_e),Ae(J,_e,"=",Oe,";")},toString:function(){return ge()+ke()}})}function Z(){var Ae=r0(arguments),Re=V(),ge=V(),ke=Re.toString,D=ge.toString;return t(Re,{then:function(){return Re.apply(Re,n0(arguments)),this},else:function(){return ge.apply(ge,n0(arguments)),this},toString:function(){var J=D();return J&&(J="else{"+J+"}"),r0(["if(",Ae,"){",ke(),"}",J])}})}var me=se(),ye={};function Me(Ae,Re){var ge=[];function ke(){var he="a"+ge.length;return ge.push(he),he}Re=Re||0;for(var D=0;D<Re;++D)ke();var J=V(),_e=J.toString,Oe=ye[Ae]=t(J,{arg:ke,toString:function(){return r0(["function(",ge.join(),"){",_e(),"}"])}});return Oe}function be(){var Ae=['"use strict";',me,"return {"];Object.keys(ye).forEach(function(ke){Ae.push('"',ke,'":',ye[ke].toString(),",")}),Ae.push("}");var Re=r0(Ae).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),ge=Function.apply(null,M.concat(Re));return ge.apply(null,C)}return{global:me,link:Y,block:se,proc:Me,scope:V,cond:Z,compile:be}}var a0="xyzw".split(""),V1=5121,i0=1,wf=2,_f=0,Mf=1,Ef=2,Sf=3,xc=4,X1=5,Y1=6,K1="dither",Q1="blend.enable",Z1="blend.color",Af="blend.equation",Tf="blend.func",J1="depth.enable",ed="depth.func",td="depth.range",od="depth.mask",kf="colorMask",nd="cull.enable",rd="cull.face",Lf="frontFace",zf="lineWidth",ad="polygonOffset.enable",Cf="polygonOffset.offset",id="sample.alpha",sd="sample.enable",Rf="sample.coverage",cd="stencil.enable",ld="stencil.mask",Nf="stencil.func",Pf="stencil.opFront",ss="stencil.opBack",fd="scissor.enable",yc="scissor.box",aa="viewport",cs="profile",ci="framebuffer",ls="vert",fs="frag",li="elements",fi="primitive",hi="count",bc="offset",wc="instances",hs="vao",If="Width",Of="Height",s0=ci+If,c0=ci+Of,eb=aa+If,tb=aa+Of,hd="drawingBuffer",ud=hd+If,dd=hd+Of,ob=[Tf,Af,Nf,Pf,ss,Rf,aa,yc,Cf],l0=34962,nb=34963,rb=35632,ab=35633,pd=3553,ib=34067,sb=2884,cb=3042,lb=3024,fb=2960,hb=2929,ub=3089,db=32823,pb=32926,vb=32928,Ff=5126,_c=35664,Mc=35665,Ec=35666,Gf=5124,Sc=35667,Ac=35668,Tc=35669,$f=35670,kc=35671,Lc=35672,zc=35673,us=35674,ds=35675,ps=35676,vs=35678,ms=35680,vd=4,gs=1028,ui=1029,md=2304,Df=2305,mb=32775,gb=32776,xb=519,_a=7680,gd=0,xd=1,yd=32774,yb=513,bd=36160,bb=36064,Xr={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},wd=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],f0={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ma={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},_d={frag:rb,vert:ab},qf={cw:md,ccw:Df};function Cc(x){return Array.isArray(x)||e(x)||Rr(x)}function Md(x){return x.sort(function(M,C){return M===aa?-1:C===aa?1:M<C?-1:1})}function $n(x,M,C,Y){this.thisDep=x,this.contextDep=M,this.propDep=C,this.append=Y}function Ea(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function Bo(x){return new $n(!1,!1,!1,x)}function Jn(x,M){var C=x.type;if(C===_f){var Y=x.data.length;return new $n(!0,Y>=1,Y>=2,M)}else if(C===xc){var se=x.data;return new $n(se.thisDep,se.contextDep,se.propDep,M)}else{if(C===X1)return new $n(!1,!1,!1,M);if(C===Y1){for(var V=!1,Z=!1,me=!1,ye=0;ye<x.data.length;++ye){var Me=x.data[ye];if(Me.type===Mf)me=!0;else if(Me.type===Ef)Z=!0;else if(Me.type===Sf)V=!0;else if(Me.type===_f){V=!0;var be=Me.data;be>=1&&(Z=!0),be>=2&&(me=!0)}else Me.type===xc&&(V=V||Me.data.thisDep,Z=Z||Me.data.contextDep,me=me||Me.data.propDep)}return new $n(V,Z,me,M)}else return new $n(C===Sf,C===Ef,C===Mf,M)}}var Ed=new $n(!1,!1,!1,function(){});function wb(x,M,C,Y,se,V,Z,me,ye,Me,be,Ae,Re,ge,ke){var D=Me.Record,J={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(J.min=mb,J.max=gb);var _e=C.angle_instanced_arrays,Oe=C.webgl_draw_buffers,he={dirty:!0,profile:ke.profile},Ge={},pe=[],Le={},de={};function ze(A){return A.replace(".","_")}function ot(A,_,P){var $=ze(A);pe.push(A),Ge[$]=he[$]=!!P,Le[$]=_}function vt(A,_,P){var $=ze(A);pe.push(A),Array.isArray(P)?(he[$]=P.slice(),Ge[$]=P.slice()):he[$]=Ge[$]=P,de[$]=_}ot(K1,lb),ot(Q1,cb),vt(Z1,"blendColor",[0,0,0,0]),vt(Af,"blendEquationSeparate",[yd,yd]),vt(Tf,"blendFuncSeparate",[xd,gd,xd,gd]),ot(J1,hb,!0),vt(ed,"depthFunc",yb),vt(td,"depthRange",[0,1]),vt(od,"depthMask",!0),vt(kf,kf,[!0,!0,!0,!0]),ot(nd,sb),vt(rd,"cullFace",ui),vt(Lf,Lf,Df),vt(zf,zf,1),ot(ad,db),vt(Cf,"polygonOffset",[0,0]),ot(id,pb),ot(sd,vb),vt(Rf,"sampleCoverage",[1,!1]),ot(cd,fb),vt(ld,"stencilMask",-1),vt(Nf,"stencilFunc",[xb,0,-1]),vt(Pf,"stencilOpSeparate",[gs,_a,_a,_a]),vt(ss,"stencilOpSeparate",[ui,_a,_a,_a]),ot(fd,ub),vt(yc,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),vt(aa,aa,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Ne={gl:x,context:Re,strings:M,next:Ge,current:he,draw:Ae,elements:V,buffer:se,shader:be,attributes:Me.state,vao:Me,uniforms:ye,framebuffer:me,extensions:C,timer:ge,isBufferArgs:Cc},Ee={primTypes:Yi,compareFuncs:f0,blendFuncs:Xr,blendEquations:J,stencilOps:Ma,glTypes:ni,orientationType:qf};w.optional(function(){Ne.isArrayLike=Oo}),Oe&&(Ee.backBuffer=[ui],Ee.drawBuffer=Tn(Y.maxDrawbuffers,function(A){return A===0?[0]:Tn(A,function(_){return bb+_})}));var le=0;function ht(){var A=J3(),_=A.link,P=A.global;A.id=le++,A.batchId="0";var $=_(Ne),q=A.shared={props:"a0"};Object.keys(Ne).forEach(function(R){q[R]=P.def($,".",R)}),w.optional(function(){A.CHECK=_(w),A.commandStr=w.guessCommand(),A.command=_(A.commandStr),A.assert=function(R,S,G){R("if(!(",S,"))",this.CHECK,".commandRaise(",_(G),",",this.command,");")},Ee.invalidBlendCombinations=wd});var O=A.next={},I=A.current={};Object.keys(de).forEach(function(R){Array.isArray(he[R])&&(O[R]=P.def(q.next,".",R),I[R]=P.def(q.current,".",R))});var F=A.constants={};Object.keys(Ee).forEach(function(R){F[R]=P.def(JSON.stringify(Ee[R]))}),A.invoke=function(R,S){switch(S.type){case _f:var G=["this",q.context,q.props,A.batchId];return R.def(_(S.data),".call(",G.slice(0,Math.max(S.data.length+1,4)),")");case Mf:return R.def(q.props,S.data);case Ef:return R.def(q.context,S.data);case Sf:return R.def("this",S.data);case xc:return S.data.append(A,R),S.data.ref;case X1:return S.data.toString();case Y1:return S.data.map(function(j){return A.invoke(R,j)})}},A.attribCache={};var T={};return A.scopeAttrib=function(R){var S=M.id(R);if(S in T)return T[S];var G=Me.scope[S];G||(G=Me.scope[S]=new D);var j=T[S]=_(G);return j},A}function Et(A){var _=A.static,P=A.dynamic,$;if(cs in _){var q=!!_[cs];$=Bo(function(I,F){return q}),$.enable=q}else if(cs in P){var O=P[cs];$=Jn(O,function(I,F){return I.invoke(F,O)})}return $}function Be(A,_){var P=A.static,$=A.dynamic;if(ci in P){var q=P[ci];return q?(q=me.getFramebuffer(q),w.command(q,"invalid framebuffer object"),Bo(function(I,F){var T=I.link(q),R=I.shared;F.set(R.framebuffer,".next",T);var S=R.context;return F.set(S,"."+s0,T+".width"),F.set(S,"."+c0,T+".height"),T})):Bo(function(I,F){var T=I.shared;F.set(T.framebuffer,".next","null");var R=T.context;return F.set(R,"."+s0,R+"."+ud),F.set(R,"."+c0,R+"."+dd),"null"})}else if(ci in $){var O=$[ci];return Jn(O,function(I,F){var T=I.invoke(F,O),R=I.shared,S=R.framebuffer,G=F.def(S,".getFramebuffer(",T,")");w.optional(function(){I.assert(F,"!"+T+"||"+G,"invalid framebuffer object")}),F.set(S,".next",G);var j=R.context;return F.set(j,"."+s0,G+"?"+G+".width:"+j+"."+ud),F.set(j,"."+c0,G+"?"+G+".height:"+j+"."+dd),G})}else return null}function Rt(A,_,P){var $=A.static,q=A.dynamic;function O(T){if(T in $){var R=$[T];w.commandType(R,"object","invalid "+T,P.commandStr);var S=!0,G=R.x|0,j=R.y|0,re,ce;return"width"in R?(re=R.width|0,w.command(re>=0,"invalid "+T,P.commandStr)):S=!1,"height"in R?(ce=R.height|0,w.command(ce>=0,"invalid "+T,P.commandStr)):S=!1,new $n(!S&&_&&_.thisDep,!S&&_&&_.contextDep,!S&&_&&_.propDep,function(Ze,At){var Ue=Ze.shared.context,it=re;"width"in R||(it=At.def(Ue,".",s0,"-",G));var yt=ce;return"height"in R||(yt=At.def(Ue,".",c0,"-",j)),[G,j,it,yt]})}else if(T in q){var te=q[T],we=Jn(te,function(Ze,At){var Ue=Ze.invoke(At,te);w.optional(function(){Ze.assert(At,Ue+"&&typeof "+Ue+'==="object"',"invalid "+T)});var it=Ze.shared.context,yt=At.def(Ue,".x|0"),Qt=At.def(Ue,".y|0"),No=At.def('"width" in ',Ue,"?",Ue,".width|0:","(",it,".",s0,"-",yt,")"),Dn=At.def('"height" in ',Ue,"?",Ue,".height|0:","(",it,".",c0,"-",Qt,")");return w.optional(function(){Ze.assert(At,No+">=0&&"+Dn+">=0","invalid "+T)}),[yt,Qt,No,Dn]});return _&&(we.thisDep=we.thisDep||_.thisDep,we.contextDep=we.contextDep||_.contextDep,we.propDep=we.propDep||_.propDep),we}else return _?new $n(_.thisDep,_.contextDep,_.propDep,function(Ze,At){var Ue=Ze.shared.context;return[0,0,At.def(Ue,".",s0),At.def(Ue,".",c0)]}):null}var I=O(aa);if(I){var F=I;I=new $n(I.thisDep,I.contextDep,I.propDep,function(T,R){var S=F.append(T,R),G=T.shared.context;return R.set(G,"."+eb,S[2]),R.set(G,"."+tb,S[3]),S})}return{viewport:I,scissor_box:O(yc)}}function xt(A,_){var P=A.static,$=typeof P[fs]=="string"&&typeof P[ls]=="string";if($){if(Object.keys(_.dynamic).length>0)return null;var q=_.static,O=Object.keys(q);if(O.length>0&&typeof q[O[0]]=="number"){for(var I=[],F=0;F<O.length;++F)w(typeof q[O[F]]=="number","must specify all vertex attribute locations when using vaos"),I.push([q[O[F]]|0,O[F]]);return I}}return null}function kt(A,_,P){var $=A.static,q=A.dynamic;function O(S){if(S in $){var G=M.id($[S]);w.optional(function(){be.shader(_d[S],G,w.guessCommand())});var j=Bo(function(){return G});return j.id=G,j}else if(S in q){var re=q[S];return Jn(re,function(ce,te){var we=ce.invoke(te,re),Ze=te.def(ce.shared.strings,".id(",we,")");return w.optional(function(){te(ce.shared.shader,".shader(",_d[S],",",Ze,",",ce.command,");")}),Ze})}return null}var I=O(fs),F=O(ls),T=null,R;return Ea(I)&&Ea(F)?(T=be.program(F.id,I.id,null,P),R=Bo(function(S,G){return S.link(T)})):R=new $n(I&&I.thisDep||F&&F.thisDep,I&&I.contextDep||F&&F.contextDep,I&&I.propDep||F&&F.propDep,function(S,G){var j=S.shared.shader,re;I?re=I.append(S,G):re=G.def(j,".",fs);var ce;F?ce=F.append(S,G):ce=G.def(j,".",ls);var te=j+".program("+ce+","+re;return w.optional(function(){te+=","+S.command}),G.def(te+")")}),{frag:I,vert:F,progVar:R,program:T}}function Kt(A,_){var P=A.static,$=A.dynamic;function q(){if(li in P){var S=P[li];Cc(S)?S=V.getElements(V.create(S,!0)):S&&(S=V.getElements(S),w.command(S,"invalid elements",_.commandStr));var G=Bo(function(re,ce){if(S){var te=re.link(S);return re.ELEMENTS=te,te}return re.ELEMENTS=null,null});return G.value=S,G}else if(li in $){var j=$[li];return Jn(j,function(re,ce){var te=re.shared,we=te.isBufferArgs,Ze=te.elements,At=re.invoke(ce,j),Ue=ce.def("null"),it=ce.def(we,"(",At,")"),yt=re.cond(it).then(Ue,"=",Ze,".createStream(",At,");").else(Ue,"=",Ze,".getElements(",At,");");return w.optional(function(){re.assert(yt.else,"!"+At+"||"+Ue,"invalid elements")}),ce.entry(yt),ce.exit(re.cond(it).then(Ze,".destroyStream(",Ue,");")),re.ELEMENTS=Ue,Ue})}return null}var O=q();function I(){if(fi in P){var S=P[fi];return w.commandParameter(S,Yi,"invalid primitve",_.commandStr),Bo(function(j,re){return Yi[S]})}else if(fi in $){var G=$[fi];return Jn(G,function(j,re){var ce=j.constants.primTypes,te=j.invoke(re,G);return w.optional(function(){j.assert(re,te+" in "+ce,"invalid primitive, must be one of "+Object.keys(Yi))}),re.def(ce,"[",te,"]")})}else if(O)return Ea(O)?O.value?Bo(function(j,re){return re.def(j.ELEMENTS,".primType")}):Bo(function(){return vd}):new $n(O.thisDep,O.contextDep,O.propDep,function(j,re){var ce=j.ELEMENTS;return re.def(ce,"?",ce,".primType:",vd)});return null}function F(S,G){if(S in P){var j=P[S]|0;return w.command(!G||j>=0,"invalid "+S,_.commandStr),Bo(function(ce,te){return G&&(ce.OFFSET=j),j})}else if(S in $){var re=$[S];return Jn(re,function(ce,te){var we=ce.invoke(te,re);return G&&(ce.OFFSET=we,w.optional(function(){ce.assert(te,we+">=0","invalid "+S)})),we})}else if(G&&O)return Bo(function(ce,te){return ce.OFFSET="0",0});return null}var T=F(bc,!0);function R(){if(hi in P){var S=P[hi]|0;return w.command(typeof S=="number"&&S>=0,"invalid vertex count",_.commandStr),Bo(function(){return S})}else if(hi in $){var G=$[hi];return Jn(G,function(ce,te){var we=ce.invoke(te,G);return w.optional(function(){ce.assert(te,"typeof "+we+'==="number"&&'+we+">=0&&"+we+"===("+we+"|0)","invalid vertex count")}),we})}else if(O)if(Ea(O)){if(O)return T?new $n(T.thisDep,T.contextDep,T.propDep,function(ce,te){var we=te.def(ce.ELEMENTS,".vertCount-",ce.OFFSET);return w.optional(function(){ce.assert(te,we+">=0","invalid vertex offset/element buffer too small")}),we}):Bo(function(ce,te){return te.def(ce.ELEMENTS,".vertCount")});var j=Bo(function(){return-1});return w.optional(function(){j.MISSING=!0}),j}else{var re=new $n(O.thisDep||T.thisDep,O.contextDep||T.contextDep,O.propDep||T.propDep,function(ce,te){var we=ce.ELEMENTS;return ce.OFFSET?te.def(we,"?",we,".vertCount-",ce.OFFSET,":-1"):te.def(we,"?",we,".vertCount:-1")});return w.optional(function(){re.DYNAMIC=!0}),re}return null}return{elements:O,primitive:I(),count:R(),instances:F(wc,!1),offset:T}}function Uo(A,_){var P=A.static,$=A.dynamic,q={};return pe.forEach(function(O){var I=ze(O);function F(T,R){if(O in P){var S=T(P[O]);q[I]=Bo(function(){return S})}else if(O in $){var G=$[O];q[I]=Jn(G,function(j,re){return R(j,re,j.invoke(re,G))})}}switch(O){case nd:case Q1:case K1:case cd:case J1:case fd:case ad:case id:case sd:case od:return F(function(T){return w.commandType(T,"boolean",O,_.commandStr),T},function(T,R,S){return w.optional(function(){T.assert(R,"typeof "+S+'==="boolean"',"invalid flag "+O,T.commandStr)}),S});case ed:return F(function(T){return w.commandParameter(T,f0,"invalid "+O,_.commandStr),f0[T]},function(T,R,S){var G=T.constants.compareFuncs;return w.optional(function(){T.assert(R,S+" in "+G,"invalid "+O+", must be one of "+Object.keys(f0))}),R.def(G,"[",S,"]")});case td:return F(function(T){return w.command(Oo(T)&&T.length===2&&typeof T[0]=="number"&&typeof T[1]=="number"&&T[0]<=T[1],"depth range is 2d array",_.commandStr),T},function(T,R,S){w.optional(function(){T.assert(R,T.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var G=R.def("+",S,"[0]"),j=R.def("+",S,"[1]");return[G,j]});case Tf:return F(function(T){w.commandType(T,"object","blend.func",_.commandStr);var R="srcRGB"in T?T.srcRGB:T.src,S="srcAlpha"in T?T.srcAlpha:T.src,G="dstRGB"in T?T.dstRGB:T.dst,j="dstAlpha"in T?T.dstAlpha:T.dst;return w.commandParameter(R,Xr,I+".srcRGB",_.commandStr),w.commandParameter(S,Xr,I+".srcAlpha",_.commandStr),w.commandParameter(G,Xr,I+".dstRGB",_.commandStr),w.commandParameter(j,Xr,I+".dstAlpha",_.commandStr),w.command(wd.indexOf(R+", "+G)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+R+", "+G+")",_.commandStr),[Xr[R],Xr[G],Xr[S],Xr[j]]},function(T,R,S){var G=T.constants.blendFuncs;w.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function j(Ue,it){var yt=R.def('"',Ue,it,'" in ',S,"?",S,".",Ue,it,":",S,".",Ue);return w.optional(function(){T.assert(R,yt+" in "+G,"invalid "+O+"."+Ue+it+", must be one of "+Object.keys(Xr))}),yt}var re=j("src","RGB"),ce=j("dst","RGB");w.optional(function(){var Ue=T.constants.invalidBlendCombinations;T.assert(R,Ue+".indexOf("+re+'+", "+'+ce+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var te=R.def(G,"[",re,"]"),we=R.def(G,"[",j("src","Alpha"),"]"),Ze=R.def(G,"[",ce,"]"),At=R.def(G,"[",j("dst","Alpha"),"]");return[te,Ze,we,At]});case Af:return F(function(T){if(typeof T=="string")return w.commandParameter(T,J,"invalid "+O,_.commandStr),[J[T],J[T]];if(typeof T=="object")return w.commandParameter(T.rgb,J,O+".rgb",_.commandStr),w.commandParameter(T.alpha,J,O+".alpha",_.commandStr),[J[T.rgb],J[T.alpha]];w.commandRaise("invalid blend.equation",_.commandStr)},function(T,R,S){var G=T.constants.blendEquations,j=R.def(),re=R.def(),ce=T.cond("typeof ",S,'==="string"');return w.optional(function(){function te(we,Ze,At){T.assert(we,At+" in "+G,"invalid "+Ze+", must be one of "+Object.keys(J))}te(ce.then,O,S),T.assert(ce.else,S+"&&typeof "+S+'==="object"',"invalid "+O),te(ce.else,O+".rgb",S+".rgb"),te(ce.else,O+".alpha",S+".alpha")}),ce.then(j,"=",re,"=",G,"[",S,"];"),ce.else(j,"=",G,"[",S,".rgb];",re,"=",G,"[",S,".alpha];"),R(ce),[j,re]});case Z1:return F(function(T){return w.command(Oo(T)&&T.length===4,"blend.color must be a 4d array",_.commandStr),Tn(4,function(R){return+T[R]})},function(T,R,S){return w.optional(function(){T.assert(R,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),Tn(4,function(G){return R.def("+",S,"[",G,"]")})});case ld:return F(function(T){return w.commandType(T,"number",I,_.commandStr),T|0},function(T,R,S){return w.optional(function(){T.assert(R,"typeof "+S+'==="number"',"invalid stencil.mask")}),R.def(S,"|0")});case Nf:return F(function(T){w.commandType(T,"object",I,_.commandStr);var R=T.cmp||"keep",S=T.ref||0,G="mask"in T?T.mask:-1;return w.commandParameter(R,f0,O+".cmp",_.commandStr),w.commandType(S,"number",O+".ref",_.commandStr),w.commandType(G,"number",O+".mask",_.commandStr),[f0[R],S,G]},function(T,R,S){var G=T.constants.compareFuncs;w.optional(function(){function te(){T.assert(R,Array.prototype.join.call(arguments,""),"invalid stencil.func")}te(S+"&&typeof ",S,'==="object"'),te('!("cmp" in ',S,")||(",S,".cmp in ",G,")")});var j=R.def('"cmp" in ',S,"?",G,"[",S,".cmp]",":",_a),re=R.def(S,".ref|0"),ce=R.def('"mask" in ',S,"?",S,".mask|0:-1");return[j,re,ce]});case Pf:case ss:return F(function(T){w.commandType(T,"object",I,_.commandStr);var R=T.fail||"keep",S=T.zfail||"keep",G=T.zpass||"keep";return w.commandParameter(R,Ma,O+".fail",_.commandStr),w.commandParameter(S,Ma,O+".zfail",_.commandStr),w.commandParameter(G,Ma,O+".zpass",_.commandStr),[O===ss?ui:gs,Ma[R],Ma[S],Ma[G]]},function(T,R,S){var G=T.constants.stencilOps;w.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid "+O)});function j(re){return w.optional(function(){T.assert(R,'!("'+re+'" in '+S+")||("+S+"."+re+" in "+G+")","invalid "+O+"."+re+", must be one of "+Object.keys(Ma))}),R.def('"',re,'" in ',S,"?",G,"[",S,".",re,"]:",_a)}return[O===ss?ui:gs,j("fail"),j("zfail"),j("zpass")]});case Cf:return F(function(T){w.commandType(T,"object",I,_.commandStr);var R=T.factor|0,S=T.units|0;return w.commandType(R,"number",I+".factor",_.commandStr),w.commandType(S,"number",I+".units",_.commandStr),[R,S]},function(T,R,S){w.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid "+O)});var G=R.def(S,".factor|0"),j=R.def(S,".units|0");return[G,j]});case rd:return F(function(T){var R=0;return T==="front"?R=gs:T==="back"&&(R=ui),w.command(!!R,I,_.commandStr),R},function(T,R,S){return w.optional(function(){T.assert(R,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),R.def(S,'==="front"?',gs,":",ui)});case zf:return F(function(T){return w.command(typeof T=="number"&&T>=Y.lineWidthDims[0]&&T<=Y.lineWidthDims[1],"invalid line width, must be a positive number between "+Y.lineWidthDims[0]+" and "+Y.lineWidthDims[1],_.commandStr),T},function(T,R,S){return w.optional(function(){T.assert(R,"typeof "+S+'==="number"&&'+S+">="+Y.lineWidthDims[0]+"&&"+S+"<="+Y.lineWidthDims[1],"invalid line width")}),S});case Lf:return F(function(T){return w.commandParameter(T,qf,I,_.commandStr),qf[T]},function(T,R,S){return w.optional(function(){T.assert(R,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),R.def(S+'==="cw"?'+md+":"+Df)});case kf:return F(function(T){return w.command(Oo(T)&&T.length===4,"color.mask must be length 4 array",_.commandStr),T.map(function(R){return!!R})},function(T,R,S){return w.optional(function(){T.assert(R,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),Tn(4,function(G){return"!!"+S+"["+G+"]"})});case Rf:return F(function(T){w.command(typeof T=="object"&&T,I,_.commandStr);var R="value"in T?T.value:1,S=!!T.invert;return w.command(typeof R=="number"&&R>=0&&R<=1,"sample.coverage.value must be a number between 0 and 1",_.commandStr),[R,S]},function(T,R,S){w.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var G=R.def('"value" in ',S,"?+",S,".value:1"),j=R.def("!!",S,".invert");return[G,j]})}}),q}function an(A,_){var P=A.static,$=A.dynamic,q={};return Object.keys(P).forEach(function(O){var I=P[O],F;if(typeof I=="number"||typeof I=="boolean")F=Bo(function(){return I});else if(typeof I=="function"){var T=I._reglType;T==="texture2d"||T==="textureCube"?F=Bo(function(R){return R.link(I)}):T==="framebuffer"||T==="framebufferCube"?(w.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+O+'"',_.commandStr),F=Bo(function(R){return R.link(I.color[0])})):w.commandRaise('invalid data for uniform "'+O+'"',_.commandStr)}else Oo(I)?F=Bo(function(R){var S=R.global.def("[",Tn(I.length,function(G){return w.command(typeof I[G]=="number"||typeof I[G]=="boolean","invalid uniform "+O,R.commandStr),I[G]}),"]");return S}):w.commandRaise('invalid or missing data for uniform "'+O+'"',_.commandStr);F.value=I,q[O]=F}),Object.keys($).forEach(function(O){var I=$[O];q[O]=Jn(I,function(F,T){return F.invoke(T,I)})}),q}function Ot(A,_){var P=A.static,$=A.dynamic,q={};return Object.keys(P).forEach(function(O){var I=P[O],F=M.id(O),T=new D;if(Cc(I))T.state=i0,T.buffer=se.getBuffer(se.create(I,l0,!1,!0)),T.type=0;else{var R=se.getBuffer(I);if(R)T.state=i0,T.buffer=R,T.type=0;else if(w.command(typeof I=="object"&&I,"invalid data for attribute "+O,_.commandStr),"constant"in I){var S=I.constant;T.buffer="null",T.state=wf,typeof S=="number"?T.x=S:(w.command(Oo(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+O,_.commandStr),a0.forEach(function(Ze,At){At<S.length&&(T[Ze]=S[At])}))}else{Cc(I.buffer)?R=se.getBuffer(se.create(I.buffer,l0,!1,!0)):R=se.getBuffer(I.buffer),w.command(!!R,'missing buffer for attribute "'+O+'"',_.commandStr);var G=I.offset|0;w.command(G>=0,'invalid offset for attribute "'+O+'"',_.commandStr);var j=I.stride|0;w.command(j>=0&&j<256,'invalid stride for attribute "'+O+'", must be integer betweeen [0, 255]',_.commandStr);var re=I.size|0;w.command(!("size"in I)||re>0&&re<=4,'invalid size for attribute "'+O+'", must be 1,2,3,4',_.commandStr);var ce=!!I.normalized,te=0;"type"in I&&(w.commandParameter(I.type,ni,"invalid type for attribute "+O,_.commandStr),te=ni[I.type]);var we=I.divisor|0;"divisor"in I&&(w.command(we===0||_e,'cannot specify divisor for attribute "'+O+'", instancing not supported',_.commandStr),w.command(we>=0,'invalid divisor for attribute "'+O+'"',_.commandStr)),w.optional(function(){var Ze=_.commandStr,At=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(Ue){w.command(At.indexOf(Ue)>=0,'unknown parameter "'+Ue+'" for attribute pointer "'+O+'" (valid parameters are '+At+")",Ze)})}),T.buffer=R,T.state=i0,T.size=re,T.normalized=ce,T.type=te||R.dtype,T.offset=G,T.stride=j,T.divisor=we}}q[O]=Bo(function(Ze,At){var Ue=Ze.attribCache;if(F in Ue)return Ue[F];var it={isStream:!1};return Object.keys(T).forEach(function(yt){it[yt]=T[yt]}),T.buffer&&(it.buffer=Ze.link(T.buffer),it.type=it.type||it.buffer+".dtype"),Ue[F]=it,it})}),Object.keys($).forEach(function(O){var I=$[O];function F(T,R){var S=T.invoke(R,I),G=T.shared,j=T.constants,re=G.isBufferArgs,ce=G.buffer;w.optional(function(){T.assert(R,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+re+"("+S+")||"+ce+".getBuffer("+S+")||"+ce+".getBuffer("+S+".buffer)||"+re+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+G.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+O+'"')});var te={isStream:R.def(!1)},we=new D;we.state=i0,Object.keys(we).forEach(function(it){te[it]=R.def(""+we[it])});var Ze=te.buffer,At=te.type;R("if(",re,"(",S,")){",te.isStream,"=true;",Ze,"=",ce,".createStream(",l0,",",S,");",At,"=",Ze,".dtype;","}else{",Ze,"=",ce,".getBuffer(",S,");","if(",Ze,"){",At,"=",Ze,".dtype;",'}else if("constant" in ',S,"){",te.state,"=",wf,";","if(typeof "+S+'.constant === "number"){',te[a0[0]],"=",S,".constant;",a0.slice(1).map(function(it){return te[it]}).join("="),"=0;","}else{",a0.map(function(it,yt){return te[it]+"="+S+".constant.length>"+yt+"?"+S+".constant["+yt+"]:0;"}).join(""),"}}else{","if(",re,"(",S,".buffer)){",Ze,"=",ce,".createStream(",l0,",",S,".buffer);","}else{",Ze,"=",ce,".getBuffer(",S,".buffer);","}",At,'="type" in ',S,"?",j.glTypes,"[",S,".type]:",Ze,".dtype;",te.normalized,"=!!",S,".normalized;");function Ue(it){R(te[it],"=",S,".",it,"|0;")}return Ue("size"),Ue("offset"),Ue("stride"),Ue("divisor"),R("}}"),R.exit("if(",te.isStream,"){",ce,".destroyStream(",Ze,");","}"),te}q[O]=Jn(I,F)}),q}function en(A,_){var P=A.static,$=A.dynamic;if(hs in P){var q=P[hs];return q!==null&&Me.getVAO(q)===null&&(q=Me.createVAO(q)),Bo(function(I){return I.link(Me.getVAO(q))})}else if(hs in $){var O=$[hs];return Jn(O,function(I,F){var T=I.invoke(F,O);return F.def(I.shared.vao+".getVAO("+T+")")})}return null}function bo(A){var _=A.static,P=A.dynamic,$={};return Object.keys(_).forEach(function(q){var O=_[q];$[q]=Bo(function(I,F){return typeof O=="number"||typeof O=="boolean"?""+O:I.link(O)})}),Object.keys(P).forEach(function(q){var O=P[q];$[q]=Jn(O,function(I,F){return I.invoke(F,O)})}),$}function Wo(A,_,P,$,q){var O=A.static,I=A.dynamic;w.optional(function(){var Ue=[ci,ls,fs,li,fi,bc,hi,wc,cs,hs].concat(pe);function it(yt){Object.keys(yt).forEach(function(Qt){w.command(Ue.indexOf(Qt)>=0,'unknown parameter "'+Qt+'"',q.commandStr)})}it(O),it(I)});var F=xt(A,_),T=Be(A,q),R=Rt(A,T,q),S=Kt(A,q),G=Uo(A,q),j=kt(A,q,F);function re(Ue){var it=R[Ue];it&&(G[Ue]=it)}re(aa),re(ze(yc));var ce=Object.keys(G).length>0,te={framebuffer:T,draw:S,shader:j,state:G,dirty:ce,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(te.profile=Et(A,q),te.uniforms=an(P,q),te.drawVAO=te.scopeVAO=en(A,q),!te.drawVAO&&j.program&&!F&&C.angle_instanced_arrays){var we=!0,Ze=j.program.attributes.map(function(Ue){var it=_.static[Ue];return we=we&&!!it,it});if(we&&Ze.length>0){var At=Me.getVAO(Me.createVAO(Ze));te.drawVAO=new $n(null,null,null,function(Ue,it){return Ue.link(At)}),te.useVAO=!0}}return F?te.useVAO=!0:te.attributes=Ot(_,q),te.context=bo($,q),te}function tn(A,_,P){var $=A.shared,q=$.context,O=A.scope();Object.keys(P).forEach(function(I){_.save(q,"."+I);var F=P[I],T=F.append(A,_);Array.isArray(T)?O(q,".",I,"=[",T.join(),"];"):O(q,".",I,"=",T,";")}),_(O)}function on(A,_,P,$){var q=A.shared,O=q.gl,I=q.framebuffer,F;Oe&&(F=_.def(q.extensions,".webgl_draw_buffers"));var T=A.constants,R=T.drawBuffer,S=T.backBuffer,G;P?G=P.append(A,_):G=_.def(I,".next"),$||_("if(",G,"!==",I,".cur){"),_("if(",G,"){",O,".bindFramebuffer(",bd,",",G,".framebuffer);"),Oe&&_(F,".drawBuffersWEBGL(",R,"[",G,".colorAttachments.length]);"),_("}else{",O,".bindFramebuffer(",bd,",null);"),Oe&&_(F,".drawBuffersWEBGL(",S,");"),_("}",I,".cur=",G,";"),$||_("}")}function pn(A,_,P){var $=A.shared,q=$.gl,O=A.current,I=A.next,F=$.current,T=$.next,R=A.cond(F,".dirty");pe.forEach(function(S){var G=ze(S);if(!(G in P.state)){var j,re;if(G in I){j=I[G],re=O[G];var ce=Tn(he[G].length,function(we){return R.def(j,"[",we,"]")});R(A.cond(ce.map(function(we,Ze){return we+"!=="+re+"["+Ze+"]"}).join("||")).then(q,".",de[G],"(",ce,");",ce.map(function(we,Ze){return re+"["+Ze+"]="+we}).join(";"),";"))}else{j=R.def(T,".",G);var te=A.cond(j,"!==",F,".",G);R(te),G in Le?te(A.cond(j).then(q,".enable(",Le[G],");").else(q,".disable(",Le[G],");"),F,".",G,"=",j,";"):te(q,".",de[G],"(",j,");",F,".",G,"=",j,";")}}}),Object.keys(P.state).length===0&&R(F,".dirty=false;"),_(R)}function _n(A,_,P,$){var q=A.shared,O=A.current,I=q.current,F=q.gl;Md(Object.keys(P)).forEach(function(T){var R=P[T];if(!($&&!$(R))){var S=R.append(A,_);if(Le[T]){var G=Le[T];Ea(R)?S?_(F,".enable(",G,");"):_(F,".disable(",G,");"):_(A.cond(S).then(F,".enable(",G,");").else(F,".disable(",G,");")),_(I,".",T,"=",S,";")}else if(Oo(S)){var j=O[T];_(F,".",de[T],"(",S,");",S.map(function(re,ce){return j+"["+ce+"]="+re}).join(";"),";")}else _(F,".",de[T],"(",S,");",I,".",T,"=",S,";")}})}function Fo(A,_){_e&&(A.instancing=_.def(A.shared.extensions,".angle_instanced_arrays"))}function St(A,_,P,$,q){var O=A.shared,I=A.stats,F=O.current,T=O.timer,R=P.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var G,j;function re(Ue){G=_.def(),Ue(G,"=",S(),";"),typeof q=="string"?Ue(I,".count+=",q,";"):Ue(I,".count++;"),ge&&($?(j=_.def(),Ue(j,"=",T,".getNumPendingQueries();")):Ue(T,".beginQuery(",I,");"))}function ce(Ue){Ue(I,".cpuTime+=",S(),"-",G,";"),ge&&($?Ue(T,".pushScopeStats(",j,",",T,".getNumPendingQueries(),",I,");"):Ue(T,".endQuery();"))}function te(Ue){var it=_.def(F,".profile");_(F,".profile=",Ue,";"),_.exit(F,".profile=",it,";")}var we;if(R){if(Ea(R)){R.enable?(re(_),ce(_.exit),te("true")):te("false");return}we=R.append(A,_),te(we)}else we=_.def(F,".profile");var Ze=A.block();re(Ze),_("if(",we,"){",Ze,"}");var At=A.block();ce(At),_.exit("if(",we,"){",At,"}")}function Mn(A,_,P,$,q){var O=A.shared;function I(T){switch(T){case _c:case Sc:case kc:return 2;case Mc:case Ac:case Lc:return 3;case Ec:case Tc:case zc:return 4;default:return 1}}function F(T,R,S){var G=O.gl,j=_.def(T,".location"),re=_.def(O.attributes,"[",j,"]"),ce=S.state,te=S.buffer,we=[S.x,S.y,S.z,S.w],Ze=["buffer","normalized","offset","stride"];function At(){_("if(!",re,".buffer){",G,".enableVertexAttribArray(",j,");}");var it=S.type,yt;if(S.size?yt=_.def(S.size,"||",R):yt=R,_("if(",re,".type!==",it,"||",re,".size!==",yt,"||",Ze.map(function(No){return re+"."+No+"!=="+S[No]}).join("||"),"){",G,".bindBuffer(",l0,",",te,".buffer);",G,".vertexAttribPointer(",[j,yt,it,S.normalized,S.stride,S.offset],");",re,".type=",it,";",re,".size=",yt,";",Ze.map(function(No){return re+"."+No+"="+S[No]+";"}).join(""),"}"),_e){var Qt=S.divisor;_("if(",re,".divisor!==",Qt,"){",A.instancing,".vertexAttribDivisorANGLE(",[j,Qt],");",re,".divisor=",Qt,";}")}}function Ue(){_("if(",re,".buffer){",G,".disableVertexAttribArray(",j,");",re,".buffer=null;","}if(",a0.map(function(it,yt){return re+"."+it+"!=="+we[yt]}).join("||"),"){",G,".vertexAttrib4f(",j,",",we,");",a0.map(function(it,yt){return re+"."+it+"="+we[yt]+";"}).join(""),"}")}ce===i0?At():ce===wf?Ue():(_("if(",ce,"===",i0,"){"),At(),_("}else{"),Ue(),_("}"))}$.forEach(function(T){var R=T.name,S=P.attributes[R],G;if(S){if(!q(S))return;G=S.append(A,_)}else{if(!q(Ed))return;var j=A.scopeAttrib(R);w.optional(function(){A.assert(_,j+".state","missing attribute "+R)}),G={},Object.keys(new D).forEach(function(re){G[re]=_.def(j,".",re)})}F(A.link(T),I(T.info.type),G)})}function oo(A,_,P,$,q){for(var O=A.shared,I=O.gl,F,T=0;T<$.length;++T){var R=$[T],S=R.name,G=R.info.type,j=P.uniforms[S],re=A.link(R),ce=re+".location",te;if(j){if(!q(j))continue;if(Ea(j)){var we=j.value;if(w.command(we!==null&&typeof we!="undefined",'missing uniform "'+S+'"',A.commandStr),G===vs||G===ms){w.command(typeof we=="function"&&(G===vs&&(we._reglType==="texture2d"||we._reglType==="framebuffer")||G===ms&&(we._reglType==="textureCube"||we._reglType==="framebufferCube")),"invalid texture for uniform "+S,A.commandStr);var Ze=A.link(we._texture||we.color[0]._texture);_(I,".uniform1i(",ce,",",Ze+".bind());"),_.exit(Ze,".unbind();")}else if(G===us||G===ds||G===ps){w.optional(function(){w.command(Oo(we),"invalid matrix for uniform "+S,A.commandStr),w.command(G===us&&we.length===4||G===ds&&we.length===9||G===ps&&we.length===16,"invalid length for matrix uniform "+S,A.commandStr)});var At=A.global.def("new Float32Array(["+Array.prototype.slice.call(we)+"])"),Ue=2;G===ds?Ue=3:G===ps&&(Ue=4),_(I,".uniformMatrix",Ue,"fv(",ce,",false,",At,");")}else{switch(G){case Ff:w.commandType(we,"number","uniform "+S,A.commandStr),F="1f";break;case _c:w.command(Oo(we)&&we.length===2,"uniform "+S,A.commandStr),F="2f";break;case Mc:w.command(Oo(we)&&we.length===3,"uniform "+S,A.commandStr),F="3f";break;case Ec:w.command(Oo(we)&&we.length===4,"uniform "+S,A.commandStr),F="4f";break;case $f:w.commandType(we,"boolean","uniform "+S,A.commandStr),F="1i";break;case Gf:w.commandType(we,"number","uniform "+S,A.commandStr),F="1i";break;case kc:w.command(Oo(we)&&we.length===2,"uniform "+S,A.commandStr),F="2i";break;case Sc:w.command(Oo(we)&&we.length===2,"uniform "+S,A.commandStr),F="2i";break;case Lc:w.command(Oo(we)&&we.length===3,"uniform "+S,A.commandStr),F="3i";break;case Ac:w.command(Oo(we)&&we.length===3,"uniform "+S,A.commandStr),F="3i";break;case zc:w.command(Oo(we)&&we.length===4,"uniform "+S,A.commandStr),F="4i";break;case Tc:w.command(Oo(we)&&we.length===4,"uniform "+S,A.commandStr),F="4i";break}_(I,".uniform",F,"(",ce,",",Oo(we)?Array.prototype.slice.call(we):we,");")}continue}else te=j.append(A,_)}else{if(!q(Ed))continue;te=_.def(O.uniforms,"[",M.id(S),"]")}G===vs?(w(!Array.isArray(te),"must specify a scalar prop for textures"),_("if(",te,"&&",te,'._reglType==="framebuffer"){',te,"=",te,".color[0];","}")):G===ms&&(w(!Array.isArray(te),"must specify a scalar prop for cube maps"),_("if(",te,"&&",te,'._reglType==="framebufferCube"){',te,"=",te,".color[0];","}")),w.optional(function(){function Dn(Pr,Cd){A.assert(_,Pr,'bad data or missing for uniform "'+S+'".  '+Cd)}function Hf(Pr){w(!Array.isArray(te),"must not specify an array type for uniform"),Dn("typeof "+te+'==="'+Pr+'"',"invalid type, expected "+Pr)}function xr(Pr,Cd){Array.isArray(te)?w(te.length===Pr,"must have length "+Pr):Dn(O.isArrayLike+"("+te+")&&"+te+".length==="+Pr,"invalid vector, should have length "+Pr,A.commandStr)}function zd(Pr){w(!Array.isArray(te),"must not specify a value type"),Dn("typeof "+te+'==="function"&&'+te+'._reglType==="texture'+(Pr===pd?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch(G){case Gf:Hf("number");break;case Sc:xr(2,"number");break;case Ac:xr(3,"number");break;case Tc:xr(4,"number");break;case Ff:Hf("number");break;case _c:xr(2,"number");break;case Mc:xr(3,"number");break;case Ec:xr(4,"number");break;case $f:Hf("boolean");break;case kc:xr(2,"boolean");break;case Lc:xr(3,"boolean");break;case zc:xr(4,"boolean");break;case us:xr(4,"number");break;case ds:xr(9,"number");break;case ps:xr(16,"number");break;case vs:zd(pd);break;case ms:zd(ib);break}});var it=1;switch(G){case vs:case ms:var yt=_.def(te,"._texture");_(I,".uniform1i(",ce,",",yt,".bind());"),_.exit(yt,".unbind();");continue;case Gf:case $f:F="1i";break;case Sc:case kc:F="2i",it=2;break;case Ac:case Lc:F="3i",it=3;break;case Tc:case zc:F="4i",it=4;break;case Ff:F="1f";break;case _c:F="2f",it=2;break;case Mc:F="3f",it=3;break;case Ec:F="4f",it=4;break;case us:F="Matrix2fv";break;case ds:F="Matrix3fv";break;case ps:F="Matrix4fv";break}if(_(I,".uniform",F,"(",ce,","),F.charAt(0)==="M"){var Qt=Math.pow(G-us+2,2),No=A.global.def("new Float32Array(",Qt,")");Array.isArray(te)?_("false,(",Tn(Qt,function(Dn){return No+"["+Dn+"]="+te[Dn]}),",",No,")"):_("false,(Array.isArray(",te,")||",te," instanceof Float32Array)?",te,":(",Tn(Qt,function(Dn){return No+"["+Dn+"]="+te+"["+Dn+"]"}),",",No,")")}else it>1?_(Tn(it,function(Dn){return Array.isArray(te)?te[Dn]:te+"["+Dn+"]"})):(w(!Array.isArray(te),"uniform value must not be an array"),_(te));_(");")}}function rt(A,_,P,$){var q=A.shared,O=q.gl,I=q.draw,F=$.draw;function T(){var yt=F.elements,Qt,No=_;return yt?((yt.contextDep&&$.contextDynamic||yt.propDep)&&(No=P),Qt=yt.append(A,No)):Qt=No.def(I,".",li),Qt&&No("if("+Qt+")"+O+".bindBuffer("+nb+","+Qt+".buffer.buffer);"),Qt}function R(){var yt=F.count,Qt,No=_;return yt?((yt.contextDep&&$.contextDynamic||yt.propDep)&&(No=P),Qt=yt.append(A,No),w.optional(function(){yt.MISSING&&A.assert(_,"false","missing vertex count"),yt.DYNAMIC&&A.assert(No,Qt+">=0","missing vertex count")})):(Qt=No.def(I,".",hi),w.optional(function(){A.assert(No,Qt+">=0","missing vertex count")})),Qt}var S=T();function G(yt){var Qt=F[yt];return Qt?Qt.contextDep&&$.contextDynamic||Qt.propDep?Qt.append(A,P):Qt.append(A,_):_.def(I,".",yt)}var j=G(fi),re=G(bc),ce=R();if(typeof ce=="number"){if(ce===0)return}else P("if(",ce,"){"),P.exit("}");var te,we;_e&&(te=G(wc),we=A.instancing);var Ze=S+".type",At=F.elements&&Ea(F.elements);function Ue(){function yt(){P(we,".drawElementsInstancedANGLE(",[j,ce,Ze,re+"<<(("+Ze+"-"+V1+")>>1)",te],");")}function Qt(){P(we,".drawArraysInstancedANGLE(",[j,re,ce,te],");")}S?At?yt():(P("if(",S,"){"),yt(),P("}else{"),Qt(),P("}")):Qt()}function it(){function yt(){P(O+".drawElements("+[j,ce,Ze,re+"<<(("+Ze+"-"+V1+")>>1)"]+");")}function Qt(){P(O+".drawArrays("+[j,re,ce]+");")}S?At?yt():(P("if(",S,"){"),yt(),P("}else{"),Qt(),P("}")):Qt()}_e&&(typeof te!="number"||te>=0)?typeof te=="string"?(P("if(",te,">0){"),Ue(),P("}else if(",te,"<0){"),it(),P("}")):Ue():it()}function Pt(A,_,P,$,q){var O=ht(),I=O.proc("body",q);return w.optional(function(){O.commandStr=_.commandStr,O.command=O.link(_.commandStr)}),_e&&(O.instancing=I.def(O.shared.extensions,".angle_instanced_arrays")),A(O,I,P,$),O.compile().body}function jt(A,_,P,$){Fo(A,_),P.useVAO?P.drawVAO?_(A.shared.vao,".setVAO(",P.drawVAO.append(A,_),");"):_(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(_(A.shared.vao,".setVAO(null);"),Mn(A,_,P,$.attributes,function(){return!0})),oo(A,_,P,$.uniforms,function(){return!0}),rt(A,_,_,P)}function Go(A,_){var P=A.proc("draw",1);Fo(A,P),tn(A,P,_.context),on(A,P,_.framebuffer),pn(A,P,_),_n(A,P,_.state),St(A,P,_,!1,!0);var $=_.shader.progVar.append(A,P);if(P(A.shared.gl,".useProgram(",$,".program);"),_.shader.program)jt(A,P,_,_.shader.program);else{P(A.shared.vao,".setVAO(null);");var q=A.global.def("{}"),O=P.def($,".id"),I=P.def(q,"[",O,"]");P(A.cond(I).then(I,".call(this,a0);").else(I,"=",q,"[",O,"]=",A.link(function(F){return Pt(jt,A,_,F,1)}),"(",$,");",I,".call(this,a0);"))}Object.keys(_.state).length>0&&P(A.shared.current,".dirty=true;")}function Yr(A,_,P,$){A.batchId="a1",Fo(A,_);function q(){return!0}Mn(A,_,P,$.attributes,q),oo(A,_,P,$.uniforms,q),rt(A,_,_,P)}function di(A,_,P,$){Fo(A,_);var q=P.contextDep,O=_.def(),I="a0",F="a1",T=_.def();A.shared.props=T,A.batchId=O;var R=A.scope(),S=A.scope();_(R.entry,"for(",O,"=0;",O,"<",F,";++",O,"){",T,"=",I,"[",O,"];",S,"}",R.exit);function G(Ze){return Ze.contextDep&&q||Ze.propDep}function j(Ze){return!G(Ze)}if(P.needsContext&&tn(A,S,P.context),P.needsFramebuffer&&on(A,S,P.framebuffer),_n(A,S,P.state,G),P.profile&&G(P.profile)&&St(A,S,P,!1,!0),$)P.useVAO?P.drawVAO?G(P.drawVAO)?S(A.shared.vao,".setVAO(",P.drawVAO.append(A,S),");"):R(A.shared.vao,".setVAO(",P.drawVAO.append(A,R),");"):R(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(R(A.shared.vao,".setVAO(null);"),Mn(A,R,P,$.attributes,j),Mn(A,S,P,$.attributes,G)),oo(A,R,P,$.uniforms,j),oo(A,S,P,$.uniforms,G),rt(A,R,S,P);else{var re=A.global.def("{}"),ce=P.shader.progVar.append(A,S),te=S.def(ce,".id"),we=S.def(re,"[",te,"]");S(A.shared.gl,".useProgram(",ce,".program);","if(!",we,"){",we,"=",re,"[",te,"]=",A.link(function(Ze){return Pt(Yr,A,P,Ze,2)}),"(",ce,");}",we,".call(this,a0[",O,"],",O,");")}}function z(A,_){var P=A.proc("batch",2);A.batchId="0",Fo(A,P);var $=!1,q=!0;Object.keys(_.context).forEach(function(re){$=$||_.context[re].propDep}),$||(tn(A,P,_.context),q=!1);var O=_.framebuffer,I=!1;O?(O.propDep?$=I=!0:O.contextDep&&$&&(I=!0),I||on(A,P,O)):on(A,P,null),_.state.viewport&&_.state.viewport.propDep&&($=!0);function F(re){return re.contextDep&&$||re.propDep}pn(A,P,_),_n(A,P,_.state,function(re){return!F(re)}),(!_.profile||!F(_.profile))&&St(A,P,_,!1,"a1"),_.contextDep=$,_.needsContext=q,_.needsFramebuffer=I;var T=_.shader.progVar;if(T.contextDep&&$||T.propDep)di(A,P,_,null);else{var R=T.append(A,P);if(P(A.shared.gl,".useProgram(",R,".program);"),_.shader.program)di(A,P,_,_.shader.program);else{P(A.shared.vao,".setVAO(null);");var S=A.global.def("{}"),G=P.def(R,".id"),j=P.def(S,"[",G,"]");P(A.cond(j).then(j,".call(this,a0,a1);").else(j,"=",S,"[",G,"]=",A.link(function(re){return Pt(di,A,_,re,2)}),"(",R,");",j,".call(this,a0,a1);"))}}Object.keys(_.state).length>0&&P(A.shared.current,".dirty=true;")}function K(A,_){var P=A.proc("scope",3);A.batchId="a2";var $=A.shared,q=$.current;tn(A,P,_.context),_.framebuffer&&_.framebuffer.append(A,P),Md(Object.keys(_.state)).forEach(function(I){var F=_.state[I],T=F.append(A,P);Oo(T)?T.forEach(function(R,S){P.set(A.next[I],"["+S+"]",R)}):P.set($.next,"."+I,T)}),St(A,P,_,!0,!0),[li,bc,hi,wc,fi].forEach(function(I){var F=_.draw[I];F&&P.set($.draw,"."+I,""+F.append(A,P))}),Object.keys(_.uniforms).forEach(function(I){var F=_.uniforms[I].append(A,P);Array.isArray(F)&&(F="["+F.join()+"]"),P.set($.uniforms,"["+M.id(I)+"]",F)}),Object.keys(_.attributes).forEach(function(I){var F=_.attributes[I].append(A,P),T=A.scopeAttrib(I);Object.keys(new D).forEach(function(R){P.set(T,"."+R,F[R])})}),_.scopeVAO&&P.set($.vao,".targetVAO",_.scopeVAO.append(A,P));function O(I){var F=_.shader[I];F&&P.set($.shader,"."+I,F.append(A,P))}O(ls),O(fs),Object.keys(_.state).length>0&&(P(q,".dirty=true;"),P.exit(q,".dirty=true;")),P("a1(",A.shared.context,",a0,",A.batchId,");")}function B(A){if(!(typeof A!="object"||Oo(A))){for(var _=Object.keys(A),P=0;P<_.length;++P)if(Bt.isDynamic(A[_[P]]))return!0;return!1}}function De(A,_,P){var $=_.static[P];if(!$||!B($))return;var q=A.global,O=Object.keys($),I=!1,F=!1,T=!1,R=A.global.def("{}");O.forEach(function(G){var j=$[G];if(Bt.isDynamic(j)){typeof j=="function"&&(j=$[G]=Bt.unbox(j));var re=Jn(j,null);I=I||re.thisDep,T=T||re.propDep,F=F||re.contextDep}else{switch(q(R,".",G,"="),typeof j){case"number":q(j);break;case"string":q('"',j,'"');break;case"object":Array.isArray(j)&&q("[",j.join(),"]");break;default:q(A.link(j));break}q(";")}});function S(G,j){O.forEach(function(re){var ce=$[re];if(Bt.isDynamic(ce)){var te=G.invoke(j,ce);j(R,".",re,"=",te,";")}})}_.dynamic[P]=new Bt.DynamicVariable(xc,{thisDep:I,contextDep:F,propDep:T,ref:R,append:S}),delete _.static[P]}function Nt(A,_,P,$,q){var O=ht();O.stats=O.link(q),Object.keys(_.static).forEach(function(F){De(O,_,F)}),ob.forEach(function(F){De(O,A,F)});var I=Wo(A,_,P,$,O);return Go(O,I),K(O,I),z(O,I),t(O.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:Ge,current:he,procs:function(){var A=ht(),_=A.proc("poll"),P=A.proc("refresh"),$=A.block();_($),P($);var q=A.shared,O=q.gl,I=q.next,F=q.current;$(F,".dirty=false;"),on(A,_),on(A,P,null,!0);var T;_e&&(T=A.link(_e)),C.oes_vertex_array_object&&P(A.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var R=0;R<Y.maxAttributes;++R){var S=P.def(q.attributes,"[",R,"]"),G=A.cond(S,".buffer");G.then(O,".enableVertexAttribArray(",R,");",O,".bindBuffer(",l0,",",S,".buffer.buffer);",O,".vertexAttribPointer(",R,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(O,".disableVertexAttribArray(",R,");",O,".vertexAttrib4f(",R,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),P(G),_e&&P(T,".vertexAttribDivisorANGLE(",R,",",S,".divisor);")}return P(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Le).forEach(function(j){var re=Le[j],ce=$.def(I,".",j),te=A.block();te("if(",ce,"){",O,".enable(",re,")}else{",O,".disable(",re,")}",F,".",j,"=",ce,";"),P(te),_("if(",ce,"!==",F,".",j,"){",te,"}")}),Object.keys(de).forEach(function(j){var re=de[j],ce=he[j],te,we,Ze=A.block();if(Ze(O,".",re,"("),Oo(ce)){var At=ce.length;te=A.global.def(I,".",j),we=A.global.def(F,".",j),Ze(Tn(At,function(Ue){return te+"["+Ue+"]"}),");",Tn(At,function(Ue){return we+"["+Ue+"]="+te+"["+Ue+"];"}).join("")),_("if(",Tn(At,function(Ue){return te+"["+Ue+"]!=="+we+"["+Ue+"]"}).join("||"),"){",Ze,"}")}else te=$.def(I,".",j),we=$.def(F,".",j),Ze(te,");",F,".",j,"=",te,";"),_("if(",te,"!==",we,"){",Ze,"}");P(Ze)}),A.compile()}(),compile:Nt}}function _b(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var Mb=34918,Eb=34919,Sd=35007,Sb=function(x,M){if(!M.ext_disjoint_timer_query)return null;var C=[];function Y(){return C.pop()||M.ext_disjoint_timer_query.createQueryEXT()}function se(_e){C.push(_e)}var V=[];function Z(_e){var Oe=Y();M.ext_disjoint_timer_query.beginQueryEXT(Sd,Oe),V.push(Oe),ge(V.length-1,V.length,_e)}function me(){M.ext_disjoint_timer_query.endQueryEXT(Sd)}function ye(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Me=[];function be(){return Me.pop()||new ye}function Ae(_e){Me.push(_e)}var Re=[];function ge(_e,Oe,he){var Ge=be();Ge.startQueryIndex=_e,Ge.endQueryIndex=Oe,Ge.sum=0,Ge.stats=he,Re.push(Ge)}var ke=[],D=[];function J(){var _e,Oe,he=V.length;if(he!==0){D.length=Math.max(D.length,he+1),ke.length=Math.max(ke.length,he+1),ke[0]=0,D[0]=0;var Ge=0;for(_e=0,Oe=0;Oe<V.length;++Oe){var pe=V[Oe];M.ext_disjoint_timer_query.getQueryObjectEXT(pe,Eb)?(Ge+=M.ext_disjoint_timer_query.getQueryObjectEXT(pe,Mb),se(pe)):V[_e++]=pe,ke[Oe+1]=Ge,D[Oe+1]=_e}for(V.length=_e,_e=0,Oe=0;Oe<Re.length;++Oe){var Le=Re[Oe],de=Le.startQueryIndex,ze=Le.endQueryIndex;Le.sum+=ke[ze]-ke[de];var ot=D[de],vt=D[ze];vt===ot?(Le.stats.gpuTime+=Le.sum/1e6,Ae(Le)):(Le.startQueryIndex=ot,Le.endQueryIndex=vt,Re[_e++]=Le)}Re.length=_e}}return{beginQuery:Z,endQuery:me,pushScopeStats:ge,update:J,getNumPendingQueries:function(){return V.length},clear:function(){C.push.apply(C,V);for(var _e=0;_e<C.length;_e++)M.ext_disjoint_timer_query.deleteQueryEXT(C[_e]);V.length=0,C.length=0},restore:function(){V.length=0,C.length=0}}},Ab=16384,Tb=256,kb=1024,Lb=34962,Ad="webglcontextlost",Td="webglcontextrestored",kd=1,zb=2,Cb=3;function Ld(x,M){for(var C=0;C<x.length;++C)if(x[C]===M)return C;return-1}function Rb(x){var M=Lo(x);if(!M)return null;var C=M.gl,Y=C.getContextAttributes(),se=C.isContextLost(),V=es(C,M);if(!V)return null;var Z=Xi(),me=_b(),ye=V.extensions,Me=Sb(C,ye),be=Ja(),Ae=C.drawingBufferWidth,Re=C.drawingBufferHeight,ge={tick:0,time:0,viewportWidth:Ae,viewportHeight:Re,framebufferWidth:Ae,framebufferHeight:Re,drawingBufferWidth:Ae,drawingBufferHeight:Re,pixelRatio:M.pixelRatio},ke={},D={elements:null,primitive:4,count:-1,offset:0,instances:-1},J=gy(C,ye),_e=Ny(C,me,M,he),Oe=U3(C,ye,J,me,_e);function he(rt){return Oe.destroyBuffer(rt)}var Ge=Uy(C,ye,_e,me),pe=Y3(C,Z,me,M),Le=_3(C,ye,J,function(){ot.procs.poll()},ge,me,M),de=M3(C,ye,J,me,M),ze=j3(C,ye,J,Le,de,me),ot=wb(C,Z,ye,J,_e,Ge,Le,ze,ke,Oe,pe,D,ge,Me,M),vt=Z3(C,ze,ot.procs.poll,ge,Y,ye,J),Ne=ot.next,Ee=C.canvas,le=[],ht=[],Et=[],Be=[M.onDestroy],Rt=null;function xt(){if(le.length===0){Me&&Me.update(),Rt=null;return}Rt=ga.next(xt),_n();for(var rt=le.length-1;rt>=0;--rt){var Pt=le[rt];Pt&&Pt(ge,null,0)}C.flush(),Me&&Me.update()}function kt(){!Rt&&le.length>0&&(Rt=ga.next(xt))}function Kt(){Rt&&(ga.cancel(xt),Rt=null)}function Uo(rt){rt.preventDefault(),se=!0,Kt(),ht.forEach(function(Pt){Pt()})}function an(rt){C.getError(),se=!1,V.restore(),pe.restore(),_e.restore(),Le.restore(),de.restore(),ze.restore(),Oe.restore(),Me&&Me.restore(),ot.procs.refresh(),kt(),Et.forEach(function(Pt){Pt()})}Ee&&(Ee.addEventListener(Ad,Uo,!1),Ee.addEventListener(Td,an,!1));function Ot(){le.length=0,Kt(),Ee&&(Ee.removeEventListener(Ad,Uo),Ee.removeEventListener(Td,an)),pe.clear(),ze.clear(),de.clear(),Le.clear(),Ge.clear(),_e.clear(),Oe.clear(),Me&&Me.clear(),Be.forEach(function(rt){rt()})}function en(rt){w(!!rt,"invalid args to regl({...})"),w.type(rt,"object","invalid args to regl({...})");function Pt(q){var O=t({},q);delete O.uniforms,delete O.attributes,delete O.context,delete O.vao,"stencil"in O&&O.stencil.op&&(O.stencil.opBack=O.stencil.opFront=O.stencil.op,delete O.stencil.op);function I(F){if(F in O){var T=O[F];delete O[F],Object.keys(T).forEach(function(R){O[F+"."+R]=T[R]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in q&&(O.vao=q.vao),O}function jt(q,O){var I={},F={};return Object.keys(q).forEach(function(T){var R=q[T];if(Bt.isDynamic(R)){F[T]=Bt.unbox(R,T);return}else if(O&&Array.isArray(R)){for(var S=0;S<R.length;++S)if(Bt.isDynamic(R[S])){F[T]=Bt.unbox(R,T);return}}I[T]=R}),{dynamic:F,static:I}}var Go=jt(rt.context||{},!0),Yr=jt(rt.uniforms||{},!0),di=jt(rt.attributes||{},!1),z=jt(Pt(rt),!1),K={gpuTime:0,cpuTime:0,count:0},B=ot.compile(z,di,Yr,Go,K),De=B.draw,Nt=B.batch,A=B.scope,_=[];function P(q){for(;_.length<q;)_.push(null);return _}function $(q,O){var I;if(se&&w.raise("context lost"),typeof q=="function")return A.call(this,null,q,0);if(typeof O=="function")if(typeof q=="number")for(I=0;I<q;++I)A.call(this,null,O,I);else if(Array.isArray(q))for(I=0;I<q.length;++I)A.call(this,q[I],O,I);else return A.call(this,q,O,0);else if(typeof q=="number"){if(q>0)return Nt.call(this,P(q|0),q|0)}else if(Array.isArray(q)){if(q.length)return Nt.call(this,q,q.length)}else return De.call(this,q)}return t($,{stats:K,destroy:function(){B.destroy()}})}var bo=ze.setFBO=en({framebuffer:Bt.define.call(null,kd,"framebuffer")});function Wo(rt,Pt){var jt=0;ot.procs.poll();var Go=Pt.color;Go&&(C.clearColor(+Go[0]||0,+Go[1]||0,+Go[2]||0,+Go[3]||0),jt|=Ab),"depth"in Pt&&(C.clearDepth(+Pt.depth),jt|=Tb),"stencil"in Pt&&(C.clearStencil(Pt.stencil|0),jt|=kb),w(!!jt,"called regl.clear with no buffer specified"),C.clear(jt)}function tn(rt){if(w(typeof rt=="object"&&rt,"regl.clear() takes an object as input"),"framebuffer"in rt)if(rt.framebuffer&&rt.framebuffer_reglType==="framebufferCube")for(var Pt=0;Pt<6;++Pt)bo(t({framebuffer:rt.framebuffer.faces[Pt]},rt),Wo);else bo(rt,Wo);else Wo(null,rt)}function on(rt){w.type(rt,"function","regl.frame() callback must be a function"),le.push(rt);function Pt(){var jt=Ld(le,rt);w(jt>=0,"cannot cancel a frame twice");function Go(){var Yr=Ld(le,Go);le[Yr]=le[le.length-1],le.length-=1,le.length<=0&&Kt()}le[jt]=Go}return kt(),{cancel:Pt}}function pn(){var rt=Ne.viewport,Pt=Ne.scissor_box;rt[0]=rt[1]=Pt[0]=Pt[1]=0,ge.viewportWidth=ge.framebufferWidth=ge.drawingBufferWidth=rt[2]=Pt[2]=C.drawingBufferWidth,ge.viewportHeight=ge.framebufferHeight=ge.drawingBufferHeight=rt[3]=Pt[3]=C.drawingBufferHeight}function _n(){ge.tick+=1,ge.time=St(),pn(),ot.procs.poll()}function Fo(){Le.refresh(),pn(),ot.procs.refresh(),Me&&Me.update()}function St(){return(Ja()-be)/1e3}Fo();function Mn(rt,Pt){w.type(Pt,"function","listener callback must be a function");var jt;switch(rt){case"frame":return on(Pt);case"lost":jt=ht;break;case"restore":jt=Et;break;case"destroy":jt=Be;break;default:w.raise("invalid event, must be one of frame,lost,restore,destroy")}return jt.push(Pt),{cancel:function(){for(var Go=0;Go<jt.length;++Go)if(jt[Go]===Pt){jt[Go]=jt[jt.length-1],jt.pop();return}}}}var oo=t(en,{clear:tn,prop:Bt.define.bind(null,kd),context:Bt.define.bind(null,zb),this:Bt.define.bind(null,Cb),draw:en({}),buffer:function(rt){return _e.create(rt,Lb,!1,!1)},elements:function(rt){return Ge.create(rt,!1)},texture:Le.create2D,cube:Le.createCube,renderbuffer:de.create,framebuffer:ze.create,framebufferCube:ze.createCube,vao:Oe.createVAO,attributes:Y,frame:on,on:Mn,limits:J,hasExtension:function(rt){return J.extensions.indexOf(rt.toLowerCase())>=0},read:vt,destroy:Ot,_gl:C,_refresh:Fo,poll:function(){_n(),Me&&Me.update()},now:St,stats:me});return M.onDone(null,oo),oo}return Rb})});var pi=ve((kE,Zd)=>{"use strict";var ia=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],sa=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Kr=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Oc=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],bs=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Qf=e=>Math.hypot(e[0],e[1],e[2]),yr=e=>{let t=Qf(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function v0(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],l=e[Math.min(o,r+2)],f=[0,0,0];for(let p=0;p<3;p++)f[p]=.5*(2*s[p]+(-i[p]+c[p])*a+(2*i[p]-5*s[p]+4*c[p]-l[p])*a*a+(-i[p]+3*s[p]-3*c[p]+l[p])*a*a*a);return f}function Ub(e,t){return v0(e.map(o=>[o,0,0]),t)[0]}function Wb(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,d)=>{let u=new Array(9);for(let v=0;v<3;v++)for(let m=0;m<3;m++)u[v*3+m]=h[v*3]*d[m]+h[v*3+1]*d[3+m]+h[v*3+2]*d[6+m];return u},l=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,d,u)=>{let v=l([h,d,u]);i.t=[i.t[0]+v[0]*i.s,i.t[1]+v[1]*i.s,i.t[2]+v[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let d=Math.cos(h),u=Math.sin(h);i.r=c(i.r,[d,0,u,0,1,0,-u,0,d])},r.vert=(h,d,u)=>{let v=u||r.curMat,m=l(h),g=yr(l(d));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(v[0],v[1],v[2]),e.length/3-1};let f=h=>[e[h*3],e[h*3+1],e[h*3+2]],p=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,d,u)=>{let v=f(h),m=bs(ia(f(d),v),ia(f(u),v)),g=sa(sa(p(h),p(d)),p(u));Oc(m,g)<0?o.push(h,u,d):o.push(h,d,u)},r.box=(h,d,u,v,m,g,y)=>{let b=[[[h,d,u],[v,d,u],[h,m,u],[v,m,u],[0,0,-1]],[[v,d,g],[h,d,g],[v,m,g],[h,m,g],[0,0,1]],[[h,d,g],[h,d,u],[h,m,g],[h,m,u],[-1,0,0]],[[v,d,u],[v,d,g],[v,m,u],[v,m,g],[1,0,0]],[[h,m,u],[v,m,u],[h,m,g],[v,m,g],[0,1,0]],[[h,d,g],[v,d,g],[h,d,u],[v,d,u],[0,-1,0]]];for(let E of b){let k=r.vert(E[0],E[4],y),L=r.vert(E[1],E[4],y),N=r.vert(E[2],E[4],y),H=r.vert(E[3],E[4],y);r.tri(k,L,N),r.tri(L,H,N)}},r.surface=(h,d,u,v)=>{v=v||{};let m=.001,g=k=>Math.min(1,Math.max(0,k)),y=[],b=[];for(let k=0;k<=d;k++){let L=[],N=[];for(let H=0;H<=u;H++){let U=k/d,W=H/u,Q=h(U,W),ie=Math.min(1-m,Math.max(m,U)),oe=v.wrapV?W:Math.min(1-m,Math.max(m,W)),ee=ia(h(g(ie+m),oe),h(g(ie-m),oe)),Te=v.wrapV?oe+m:g(oe+m),ne=v.wrapV?oe-m:g(oe-m),Xe=ia(h(ie,Te),h(ie,ne)),ue=bs(ee,Xe);Qf(ue)<1e-14&&(ue=v.inside?ia(Q,v.inside(U,W)):[0,1,0]),ue=yr(ue),v.inside&&Oc(ue,ia(Q,v.inside(U,W)))<0&&(ue=Kr(ue,-1));let ut=v.mat?v.mat(U,W,Q):null;L.push(r.vert(Q,ue,ut)),v.double&&N.push(r.vert(Q,Kr(ue,-1),ut))}y.push(L),b.push(N)}let E=k=>{for(let L=0;L<d;L++)for(let N=0;N<u;N++){let H=k[L][N],U=k[L+1][N],W=k[L][N+1],Q=k[L+1][N+1];r.tri(H,U,W),r.tri(U,Q,W)}};E(y),v.double&&E(b)},r.ellipsoid=(h,d,u,v,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let E=y*Math.PI,k=b*Math.PI*2,L=g?g(y,b):1;return[h[0]+d[0]*L*Math.sin(E)*Math.cos(k),h[1]+d[1]*L*Math.cos(E),h[2]+d[2]*L*Math.sin(E)*Math.sin(k)]},u||10,v||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,d,u,v,m)=>{m=m||{};let g=40,y=[],b=null;for(let L=0;L<=g;L++){let N=L/g,H=v0(h,Math.max(0,N-.01)),U=v0(h,Math.min(1,N+.01)),W=yr(ia(U,H)),Q;if(b)Q=yr(ia(b,Kr(W,Oc(b,W))));else{let ie=Math.abs(W[1])<.9?[0,1,0]:[1,0,0];Q=yr(bs(W,ie))}y.push({N:Q,B:yr(bs(W,Q))}),b=Q}let E=L=>{let N=Math.min(Math.max(L,0),1)*g,H=Math.min(g-1,Math.floor(N)),U=N-H,W=y[H],Q=y[H+1];return{N:yr(sa(Kr(W.N,1-U),Kr(Q.N,U))),B:yr(sa(Kr(W.B,1-U),Kr(Q.B,U)))}},k=m.squash||[1,1];r.surface((L,N)=>{let H=v0(h,L),U=E(L),W=d(L),Q=N*Math.PI*2;return sa(H,sa(Kr(U.N,Math.cos(Q)*W*k[0]),Kr(U.B,Math.sin(Q)*W*k[1])))},u||12,v||8,{wrapV:!0,inside:L=>v0(h,L),mat:m.mat})},r.lathe=(h,d,u,v,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],E=h[y+1][1]-h[y][1];g.push(yr([E,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],E=h[y+1],k=y===0||b[2]===1,L=y===h.length-2||E[2]===1,N=k?g[y]:yr(sa(g[y-1],g[y])),H=L?g[y]:yr(sa(g[y],g[y+1])),U=[],W=[];for(let Q=0;Q<=v;Q++){let ie=Q/v*Math.PI*2,oe=Math.cos(ie),ee=Math.sin(ie),Te=m.mat?m.mat(ie,b[1]):null,ne=m.mat?m.mat(ie,E[1]):null;U.push(r.vert([d+b[0]*oe,b[1],u+b[0]*ee],[N[0]*oe,N[1],N[0]*ee],Te)),W.push(r.vert([d+E[0]*oe,E[1],u+E[0]*ee],[H[0]*oe,H[1],H[0]*ee],ne))}for(let Q=0;Q<v;Q++)r.tri(U[Q],U[Q+1],W[Q]),r.tri(U[Q+1],W[Q+1],W[Q])}},r}Zd.exports={createBuilder:Wb,catmull:v0,curve1:Ub,sub:ia,add:sa,mul:Kr,dot:Oc,cross:bs,norm:yr,len:Qf}});var op=ve((LE,tp)=>{"use strict";var{norm:Fc,add:Gc,mul:Ta,sub:Vb,cross:Jd}=pi(),ep=Math.PI*2,Xb=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function Yb(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function Kb(e,t,o,n,r,a){let i=(h,d)=>[7,h*a,d];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,l=20,f=6,p=a*.075;return e.surface((h,d)=>{let u=s+h*c,v=a*(.96-.12*h),m=d*ep,g=d*l%1,y=v-p*4*g*(1-g);return[t+y*Math.cos(m),u,o+y*Math.sin(m)]},10,l*f,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,d)=>[7,d*ep*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function Qb(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function Zb(e,t,o,n,r){e.save(),e.translate(t,0,o),Qb(e,n,r),e.restore()}function Jb(e,t,o,n,r,a){let i=Yb(n),s=a?Fc([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,l=.86;for(let f=0;f<c;f++){let p=f>=c-2,h=f*2.399963+i()*.5,d=[Math.cos(h),0,Math.sin(h)],u=[-Math.sin(h),0,Math.cos(h)],v=f*.618%1,m=p?.06+i()*.06:.12+.62*v,g=1;if(s){let ue=d[0]*s[0]+d[2]*s[2];g=.25+.75*Xb(-.7,.5,ue),m*=g}let y=p?1.1+i()*.25:.85+.55*(1-v*.55)+i()*.15,b=p?1+i()*.2:.95+i()*.28,E=p?.055:.215+i()*.05,k=.04+i()*.05,L=[d[0]*k,l,d[2]*k],N=[L[0]+d[0]*Math.sin(m)*y*.92,L[1]+Math.cos(m)*y,L[2]+d[2]*Math.sin(m)*y*.92],H=[L[0]+d[0]*Math.sin(m*.5)*y*.45,L[1]+y*.5,L[2]+d[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([L,H,N],ue=>.02-.008*ue,8,7);let U=24,W=m*.9+.05,Q=m+(p?.12:(.95+.45*v)*(.35+.65*g)),ie=[N],oe=[],ee=N;for(let ue=0;ue<U;ue++){let ut=ue/U,wt=W+(Q-W)*ut*ut,Xt=[d[0]*Math.sin(wt),Math.cos(wt),d[2]*Math.sin(wt)];oe.push(Xt),ee=Gc(ee,Ta(Xt,b/U)),ie.push(ee)}oe.push(oe[oe.length-1]);let Te=ue=>{let ut=ue*U,wt=Math.min(U-1,Math.floor(ut)),Xt=ut-wt;return Gc(Ta(ie[wt],1-Xt),Ta(ie[wt+1],Xt))},ne=ue=>{let ut=ue*U,wt=Math.min(U,Math.floor(ut)),Xt=Math.min(U,wt+1),mt=ut-wt;return Fc(Gc(Ta(oe[wt],1-mt),Ta(oe[Xt],mt)))},Xe=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((ue,ut)=>{let wt=ut*2-1,Xt=Te(ue),mt=ne(ue),Yt=Xe*ue,Ct=Gc(Ta(u,Math.cos(Yt)),Ta(Jd(mt,u),Math.sin(Yt)));Ct=Fc(Vb(Ct,Ta(mt,Ct[0]*mt[0]+Ct[1]*mt[1]+Ct[2]*mt[2])));let go=Fc(Jd(Ct,mt)),je=E*Math.pow(Math.sin(Math.PI*Math.pow(ue,.72)),.85),Ft=.3*je*Math.abs(wt)+.012*Math.sin(ue*40+wt*2)*Math.abs(wt)*(p?0:1),Fe=-.1*je*wt*wt*wt*wt,Qe=Ft+Fe;return[Xt[0]+Ct[0]*wt*je+go[0]*Qe,Xt[1]+Ct[1]*wt*je+go[1]*Qe,Xt[2]+Ct[2]*wt*je+go[2]*Qe]},14,8,{double:!0,mat:(ue,ut)=>[2,ut*2-1,ue]})}e.restore()}tp.exports={addFlutedColumn:Kb,addStatue:Zb,addPlant:Jb}});var vi=ve((zE,ip)=>{"use strict";var xe={xc:7,r:2.5,spring:4.7};xe.x0=xe.xc-xe.r;xe.x1=xe.xc+xe.r;xe.top=xe.spring+xe.r;var jn=.06,Ao=.1,np=.08,$c=xe.r,Dc=[xe.x0+$c/3,xe.x0+2*$c/3,xe.xc+$c/3,xe.xc+2*$c/3],m0=.28,Zf=[.95,1.65,2.35,3.05,3.75],rp=[1.05,1.8],ws=[8,0,0],cr=[0,0,0];function br(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function g0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function qc(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let l=(f,p,h)=>[xe.xc+p*Math.cos(f),xe.spring+p*Math.sin(f),h];for(let f=0;f<i;f++){let p=s+(c-s)*f/i,h=s+(c-s)*(f+1)/i,d=(p+h)/2;g0(e,l(p,t,r),l(h,t,r),l(h,o,r),l(p,o,r),[0,0,1],a),g0(e,l(p,o,n),l(h,o,n),l(h,t,n),l(p,t,n),[0,0,-1],a),g0(e,l(p,t,n),l(h,t,n),l(h,t,r),l(p,t,r),[-Math.cos(d),-Math.sin(d),0],a),g0(e,l(h,o,n),l(p,o,n),l(p,o,r),l(h,o,r),[Math.cos(d),Math.sin(d),0],a)}}function e5(e){let n=a=>[xe.xc+xe.r*Math.cos(a),xe.spring+xe.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?xe.r/Math.abs(i):1/0,l=s>1e-6?(8-xe.spring)/s:1/0,f=Math.min(c,l);return[Math.min(xe.x1,Math.max(xe.x0,xe.xc+i*f)),Math.min(8,xe.spring+s*f)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),l=n(s),f=r(i),p=r(s);for(let[d,u]of[[.35,1],[-.35,-1]])g0(e,[c[0],c[1],d],[l[0],l[1],d],[p[0],p[1],d],[f[0],f[1],d],[0,0,u],cr);let h=(i+s)/2;g0(e,[c[0],c[1],-.35],[l[0],l[1],-.35],[l[0],l[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],cr)}}function t5(e){br(e,-.35,0,-.35,xe.x0,8,.35,cr),br(e,xe.x1,0,-.35,14+.35,8,.35,cr),e5(e),ap(e)}function ap(e){br(e,xe.x0-.32,.3,.35,xe.x0,xe.spring,.35+.07,cr),br(e,xe.x1,.3,.35,xe.x1+.32,xe.spring,.35+.07,cr),br(e,xe.x0-.32-.05,0,.35,xe.x0,.3,.35+.07+.04,cr),br(e,xe.x1,0,.35,xe.x1+.32+.05,.3,.35+.07+.04,cr),br(e,xe.x0-.32-.06,xe.spring-.12,.35,xe.x0,xe.spring,.35+.07+.05,cr),br(e,xe.x1,xe.spring-.12,.35,xe.x1+.32+.06,xe.spring,.35+.07+.05,cr),qc(e,xe.r,xe.r+.32,.35,.35+.07,cr),qc(e,xe.r+.32,xe.r+.32+.06,.35,.35+.07+.03,cr),br(e,xe.xc-.22,xe.top-.08,.35,xe.xc+.22,xe.top+.32+.12,.35+.07+.06,cr)}function o5(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-np/2,a=np/2,i=(h,d,u,v,m=0)=>br(e,h-m,d,r,u+m,v,a,ws),s=h=>xe.spring+Math.sqrt(Math.max(0,xe.r*xe.r-(h-xe.xc)*(h-xe.xc))),c=t==="right"?xe.xc:xe.x0,l=t==="left"?xe.xc:xe.x1,f=h=>o||t==="left"&&h<xe.xc||t==="right"&&h>xe.xc,p=o?null:xe.spring-.06;if(n){i(xe.x0,0,xe.x0+Ao,xe.spring),i(xe.x1-Ao,0,xe.x1,xe.spring),qc(e,xe.r-Ao,xe.r,r,a,ws,64),i(xe.x0,0,xe.x1,.05),i(xe.x0,xe.spring-.06,xe.x1,xe.spring+.06);for(let h of rp)qc(e,h-jn/2,h+jn/2,r,a,ws,48)}if(o){i(xe.x0,0,xe.x1,m0),i(xe.xc-Ao/2,0,xe.xc+Ao/2,xe.top-Ao*.5);for(let h of Dc)i(h-jn/2,m0,h+jn/2,s(h)-Ao*.5);for(let h of Zf)i(xe.x0,h-jn/2,xe.x1,h+jn/2)}else if(t==="fixed"){i(xe.xc-Ao/2,xe.spring+.06,xe.xc+Ao/2,xe.top-Ao*.5);for(let h of Dc)i(h-jn/2,xe.spring+.06,h+jn/2,s(h)-Ao*.5)}else{let h=t==="left"?xe.x0+Ao:xe.x1-Ao;i(Math.min(h,h+(t==="left"?Ao*.8:-Ao*.8)),.05,Math.max(h,h+(t==="left"?Ao*.8:-Ao*.8)),p),i(c,.05,l,m0),i(c,p-.07,l,p);let d=t==="left"?xe.xc-Ao/2:xe.xc;i(d,.05,d+Ao/2,p);for(let u of Dc)f(u)&&i(u-jn/2,m0,u+jn/2,p-.07);for(let u of Zf)i(c,u-jn/2,l,u+jn/2)}for(let h of[-1,1]){let d=xe.xc+h*.16;f(d)&&(br(e,d-.02,1.05,a,d+.02,1.13,a+.06,ws),br(e,d-(h>0?0:.14),1.07,a+.05,d+(h>0?.14:0),1.11,a+.08,ws))}}function n5(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=xe;if(e!=="fixed"){let l=e==="right"?a:n,f=e==="left"?a:r;if(t.push([l,0,o],[f,0,o],[f,s,o],[l,0,o],[f,s,o],[l,s,o]),e!=="all")return t}let c=48;for(let l=0;l<c;l++){let f=Math.PI*l/c,p=Math.PI*(l+1)/c;t.push([a,s,o],[a+i*Math.cos(f),s+i*Math.sin(f),o],[a+i*Math.cos(p),s+i*Math.sin(p),o])}return t}var lo=e=>e.toFixed(4);function r5(){let e=Dc.map(n=>`vb = max(vb, barCover(abs(q.x - ${lo(n)}), ${lo(jn/2)}, soft));`).join(`
		`),t=Zf.map(n=>`hb = max(hb, barCover(abs(q.y - ${lo(n)}), ${lo(jn/2)}, soft));`).join(`
		`),o=rp.map(n=>`ab = max(ab, barCover(abs(rr - ${lo(n)}), ${lo(jn/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${lo(xe.x0)} - soft, ${lo(xe.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${lo(xe.x1)} - soft, ${lo(xe.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${lo(xe.xc)}, ${lo(xe.spring)}));
		float arch = q.y < ${lo(xe.spring)} ? 1.0 : 1.0 - smoothstep(${lo(xe.r)} - soft, ${lo(xe.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${lo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${lo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${lo(xe.xc)}, ${lo(xe.spring)}));
		float vb = barCover(abs(q.x - ${lo(xe.xc)}), ${lo(Ao/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${lo(xe.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${lo(m0)} - soft, ${lo(m0)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${lo(xe.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${lo(xe.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${lo(xe.x0+Ao/2)}), ${lo(Ao/2)}, soft),
			barCover(abs(q.x - ${lo(xe.x1-Ao/2)}), ${lo(Ao/2)}, soft));
		frame = q.y < ${lo(xe.spring)} ? frame : barCover(abs(rr - ${lo(xe.r-Ao/2)}), ${lo(Ao/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}ip.exports={addEntranceWall:t5,addSurround:ap,addFrames:o5,glassPanes:n5,doorLightGLSL:r5,DOOR:xe,WALL:.35}});var y0=ve((CE,up)=>{"use strict";var gi=1.1583333333333334,xi=(13.05-8*.16)/9,eh=gi+.16,th=xi+.16,ca=14/2-7.75/2,wr=15,_s=ca+7.75,ka=wr+13.05,lr=.3,la={y:8+.18,inset:.15},mi={y:8+.36,inset:lr},oh=8+.2,Hc=8+.62,nh=8+.9,rh=.016,fp=.28,hp=.66,a5=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),i5=[9,0,0],En=[10,0,0];function x0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Bn(e,t,o,n,r,a,i){x0(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function Jf(e,t,o,n,r,a,i,s){x0(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),x0(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),x0(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),x0(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function sp(e,t,o,n,r){Bn(e,t[0],t[1],t[2],o[1],n,r),Bn(e,t[0],o[3],t[2],t[3],n,r),Bn(e,t[0],o[1],o[0],o[3],n,r),Bn(e,o[2],o[1],t[2],o[3],n,r)}var cp=e=>ca+e*eh,lp=e=>wr+e*th;function s5(e,t,o=48){let n=[ca-lr,wr-lr,_s+lr,ka+lr],r=(l,f)=>[l[0]+f,l[1]+f,l[2]-f,l[3]-f],a=r(n,la.inset),i=r(n,mi.inset);Bn(e,0,0,14,n[1],8,t),Bn(e,0,n[3],14,o,8,t),Bn(e,0,n[1],n[0],n[3],8,t),Bn(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],En),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,En),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],En),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],En),Jf(e,...n.slice(0,2),...n.slice(2),8,la.y,En),sp(e,n,a,la.y,En),Jf(e,...a.slice(0,2),...a.slice(2),la.y,mi.y,En),sp(e,a,i,mi.y,En);for(let l=1;l<6;l++){let f=cp(l)-.16;e.box(f,oh,wr,f+.16,mi.y,ka,En)}for(let l=1;l<9;l++){let f=lp(l)-.16;e.box(ca,oh,f,_s,mi.y,f+.16,En)}for(let l=0;l<9;l++)for(let f=0;f<6;f++){let p=cp(f),h=lp(l);Jf(e,p,h,p+gi,h+xi,mi.y,nh,En),Bn(e,p,h,p+gi,h+xi,nh,i5),c5(e,p+gi/2,h+xi/2,gi/2,xi/2)}}function c5(e,t,o,n,r){let a=Hc,i=rh;Bn(e,t-n,o-i,t+n,o+i,a,En),Bn(e,t-i,o-r,t+i,o+r,a,En);for(let s of[1,-1]){let c=Math.hypot(n,r),l=n/c,f=s*r/c,p=-f*i,h=l*i;x0(e,[t-l*c+p,a,o-f*c+h],[t+l*c+p,a,o+f*c+h],[t+l*c-p,a,o+f*c-h],[t-l*c-p,a,o-f*c-h],[0,-1,0],En)}for(let s of[fp,hp]){let c=s*n,l=s*r;Bn(e,t-c-i,o-l-i,t+c+i,o-l+i,a,En),Bn(e,t-c-i,o+l-i,t+c+i,o+l+i,a,En),Bn(e,t-c-i,o-l+i,t-c+i,o+l-i,a,En),Bn(e,t+c-i,o-l+i,t+c+i,o+l-i,a,En)}}var zt=e=>e.toFixed(4);function l5(){return`
	const vec3 SKY_SUN = vec3(${a5.map(zt).join(", ")});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${zt(ca)}, ${zt(wr)});
		vec2 pitch = vec2(${zt(eh)}, ${zt(th)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${zt(5)} || cell.y > ${zt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${zt(gi)}, ${zt(xi)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${zt(rh)} - soft, ${zt(rh)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${zt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${zt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${zt(la.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${zt(oh)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${zt(mi.y)} - p.y) / L.y)).xz;
		float tG = (${zt(Hc)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${zt(nh)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${zt(ca-lr)}, ${zt(wr-lr)}, ${zt(_s+lr)}, ${zt(ka+lr)}), soft)
		           * rectOpen(q1, vec4(${zt(ca-lr+la.inset)}, ${zt(wr-lr+la.inset)}, ${zt(_s+lr-la.inset)}, ${zt(ka+lr-la.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${zt(ca)}, ${zt(wr)});
		vec2 pitch = vec2(${zt(eh)}, ${zt(th)});
		vec2 paneHalf = vec2(${zt(gi/2)}, ${zt(xi/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${zt(fp)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${zt(hp)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${zt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${zt(Hc)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${zt(ca)}, ${zt(wr)}, ${zt(_s)}, ${zt(ka)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${zt(wr-3)}, ${zt(wr+2)}, p.z)
		        * (1.0 - smoothstep(${zt(ka-2)}, ${zt(ka+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${zt(7.75/2)}, ${zt(14/2)}, abs(p.x - ${zt(14/2)}));
		return z * x;
	}`}up.exports={addSkylight:s5,skylightGLSL:l5,Z_START:wr,Z_END:ka,GLASS_Y:Hc,HEIGHT:8}});var Un=ve((RE,gp)=>{"use strict";var w0=vi(),ch=8,To=.35,Pe={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:ch},dp=(Pe.z1-Pe.z0)/2,ah=Pe.crown-Pe.spring,sh=(ah*ah+dp*dp)/(2*ah),lh=Pe.crown-sh;function b0(e){let t=e-Pe.zc;return lh+Math.sqrt(Math.max(0,sh*sh-t*t))}var ft={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Or=Array.from({length:ft.count},(e,t)=>ft.first+t*ft.pitch),vp=Or.slice(1).map(e=>e-ft.pitch/2),f5=[Or[0],Or[2],Or[4]],Bc=[Or[1],Or[3]],er={r:1.3,sill:.62,spring:3.3},ho=[0,0,0],Ms=[11,0,0],La=[10,0,0],Es=[8,0,0];function vn(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function tr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function Ss(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,l=new Set([o,n]);for(let v of s){l.add(v.u0),l.add(v.u1);let m=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.08)));for(let g=1;g<m;g++)l.add(v.u0+(v.u1-v.u0)*g/m)}for(let v of t.cuts||[])l.add(v);let f=t.topStep||.5;for(let v=o;v<n;v+=f)l.add(v);let p=[...l].filter(v=>v>=o-1e-9&&v<=n+1e-9).sort((v,m)=>v-m),h=(v,m)=>v.bot?v.bot(m):v.bottom,d=(v,m)=>{let g=i(v),y=m.map(k=>[Math.max(0,h(k,v)),Math.min(k.head(v),g)]).filter(k=>k[1]>k[0]).sort((k,L)=>k[0]-L[0]),b=[],E=0;for(let k of y)k[0]>E+1e-6&&b.push([E,k[0]]),E=Math.max(E,k[1]);return g>E+1e-6&&b.push([E,g]),b},u=(v,m,g)=>[v,m,g];for(let v=0;v<p.length-1;v++){let m=p[v],g=p[v+1],y=(m+g)/2,b=s.filter(U=>y>U.u0&&y<U.u1),E=b.length?Math.max(m,Math.max(...b.map(U=>U.u0))+1e-7):m,k=b.length?Math.min(g,Math.min(...b.map(U=>U.u1))-1e-7):g,L=d(E,b),N=d(k,b),H=Math.min(L.length,N.length);for(let U=0;U<H;U++){let[W,Q]=L[U],[ie,oe]=N[U];Q-W<1e-6&&oe-ie<1e-6||(vn(e,u(m,W,a),u(g,ie,a),u(g,oe,a),u(m,Q,a),[0,0,1],c),t.frontOnly||vn(e,u(g,ie,r),u(m,W,r),u(m,Q,r),u(g,oe,r),[0,0,-1],c))}}t.noEnds||(vn(e,u(o,0,r),u(o,0,a),u(o,i(o),a),u(o,i(o),r),[-1,0,0],c),vn(e,u(n,0,a),u(n,0,r),u(n,i(n),r),u(n,i(n),a),[1,0,0],c));for(let v of s){if(v.noReveal)continue;let m=v.mat||t.revealMat||c,g=Math.max(0,h(v,v.u0+1e-7)),y=Math.max(0,h(v,v.u1-1e-7)),b=Math.min(v.head(v.u0+1e-7),i(v.u0)),E=Math.min(v.head(v.u1-1e-7),i(v.u1));b>g+1e-6&&vn(e,u(v.u0,g,a),u(v.u0,g,r),u(v.u0,b,r),u(v.u0,b,a),[1,0,0],m),E>y+1e-6&&vn(e,u(v.u1,y,r),u(v.u1,y,a),u(v.u1,E,a),u(v.u1,E,r),[-1,0,0],m);let k=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.06)));for(let L=0;L<k;L++){let N=v.u0+(v.u1-v.u0)*L/k,H=v.u0+(v.u1-v.u0)*(L+1)/k,U=Math.max(N,v.u0+1e-7),W=Math.min(H,v.u1-1e-7),Q=Math.min(v.head(U),i(N)),ie=Math.min(v.head(W),i(H));if(!(Q>=i(N)-1e-6&&ie>=i(H)-1e-6)){let Te=H-N,ne=ie-Q,Xe=Math.hypot(Te,ne)||1;vn(e,u(N,Q,r),u(H,ie,r),u(H,ie,a),u(N,Q,a),[ne/Xe,-Te/Xe,0],m)}let oe=h(v,U),ee=h(v,W);if(oe>1e-6||ee>1e-6){let Te=H-N,ne=ee-oe,Xe=Math.hypot(Te,ne)||1;vn(e,u(H,ee,r),u(N,oe,r),u(N,oe,a),u(H,ee,a),[-ne/Xe,Te/Xe,0],m)}}}}var ih=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function h5(e,t){let o=er.r,n=er.sill,r=er.spring,a=Pe.z0,i=24,s=(d,u,v)=>[t+Math.cos(d)*u,v,a-Math.sin(d)*u];for(let d=0;d<i;d++){let u=Math.PI*d/i,v=Math.PI*(d+1)/i,m=[-Math.cos(u),0,Math.sin(u)],g=[-Math.cos(v),0,Math.sin(v)],y=[e.vert(s(u,o,n),m,ho),e.vert(s(v,o,n),g,ho),e.vert(s(v,o,r),g,ho),e.vert(s(u,o,r),m,ho)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,l=(d,u)=>[t+Math.cos(d)*Math.cos(u)*o,r+Math.sin(u)*o,a-Math.sin(d)*Math.cos(u)*o],f=(d,u)=>[-Math.cos(d)*Math.cos(u),-Math.sin(u),Math.sin(d)*Math.cos(u)];for(let d=0;d<i;d++)for(let u=0;u<c;u++){let v=Math.PI*d/i,m=Math.PI*(d+1)/i,g=Math.PI/2*u/c,y=Math.PI/2*(u+1)/c,b=[e.vert(l(v,g),f(v,g),La),e.vert(l(m,g),f(m,g),La),e.vert(l(m,y),f(m,y),La),e.vert(l(v,y),f(v,y),La)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let d=1;d<8;d++){let u=Math.PI*d/8,v=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;v.push(l(u,g).map((y,b)=>y-f(u,g)[b]*.02))}e.tube(v,m=>.035*(1-m*.6),12,6,{mat:()=>La})}let p=e.vert([t,n,a],[0,1,0],ho);for(let d=0;d<i;d++){let u=Math.PI*d/i,v=Math.PI*(d+1)/i;e.tri(p,e.vert(s(u,o,n),[0,1,0],ho),e.vert(s(v,o,n),[0,1,0],ho))}tr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,ho),tr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,ho);let h=.16;for(let d=0;d<i;d++){let u=Math.PI*d/i,v=Math.PI*(d+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];vn(e,m(u,o,a+.05),m(v,o,a+.05),m(v,o+h,a+.05),m(u,o+h,a+.05),[0,0,1],ho),vn(e,m(u,o+h,a),m(v,o+h,a),m(v,o+h,a+.05),m(u,o+h,a+.05),[Math.cos((u+v)/2),Math.sin((u+v)/2),0],ho),vn(e,m(u,o,a),m(v,o,a),m(v,o,a+.05),m(u,o,a+.05),[-Math.cos((u+v)/2),-Math.sin((u+v)/2),0],ho)}for(let d of[-1,1]){let u=t+d*o,v=t+d*(o+h);tr(e,u,n,a,v,r,a+.05,ho),tr(e,u-d*.02,r-.12,a,v+d*.06,r,a+.09,ho)}tr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,ho),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>ho})}var u5=er.sill+.4,d5=Pe.z0-.62;function p5(e){vn(e,[14,0,Pe.z0-To],[Pe.x1+To,0,Pe.z0-To],[Pe.x1+To,0,Pe.z1+To],[14,0,Pe.z1+To],[0,1,0],ho),e.curMat=Ms,Ss(e,{u0:14+To,u1:Pe.x1+2*To,w0:Pe.z0-2*To,w1:Pe.z0,top:()=>Pe.spring,holes:Bc.map(l=>({u0:l-er.r,u1:l+er.r,bottom:er.sill,head:ih(l,er.r,er.spring),noReveal:!0})),mat:Ms,cuts:[Pe.x1]});for(let l of Bc)h5(e,l);e.save(),e.translate(0,0,Pe.z1),e.rotateY(Math.PI),e.translate(-(Pe.x1+2*To),0,-2*To);let t=l=>Pe.x1+2*To-l;Ss(e,{u0:t(Pe.x1+2*To),u1:t(13.65),w0:0,w1:2*To,top:()=>Pe.spring,holes:Or.map(l=>({u0:t(l+ft.halfW),u1:t(l-ft.halfW),bottom:ft.sill,head:ih(t(l),ft.halfW,ft.spring)})),mat:Ms,revealMat:ho}),e.restore(),e.save(),e.translate(Pe.x1,0,0),e.rotateY(-Math.PI/2);let o=w0.DOOR,n=Pe.zc,r=o.r;Ss(e,{u0:Pe.z0-2*To,u1:Pe.z1+2*To,w0:-2*To,w1:0,top:l=>l<Pe.z0||l>Pe.z1?Pe.spring:b0(l),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:ih(n,r,o.spring)}],mat:Ms,revealMat:ho}),e.restore(),e.save(),e.translate(14+To,0,0),e.rotateY(-Math.PI/2),Ss(e,{u0:Pe.z0,u1:Pe.z1,w0:-0,w1:2*To,top:()=>ch,topStep:.15,holes:[{u0:Pe.z0,u1:Pe.z1,bottom:0,head:l=>b0(l)}],mat:Ms,revealMat:ho}),e.restore();let a=14+To,i=Math.ceil((Pe.x1-a)/1),s=28,c=[];for(let l=0;l<=i;l++){let f=a+(Pe.x1-a)*l/i,p=[];for(let h=0;h<=s;h++){let d=Pe.z0+(Pe.z1-Pe.z0)*h/s,u=b0(d),v=[0,lh-u,Pe.zc-d],m=Math.hypot(v[1],v[2]);p.push(e.vert([f,u,d],[0,v[1]/m,v[2]/m],La))}c.push(p)}for(let l=0;l<i;l++)for(let f=0;f<s;f++)e.tri(c[l][f],c[l+1][f],c[l][f+1]),e.tri(c[l+1][f],c[l+1][f+1],c[l][f+1])}function pp(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=Pe.z0+(Pe.z1-Pe.z0)*i/32,c=b0(s),l=lh-c,f=Pe.zc-s,p=Math.hypot(l,f),h=[c+l/p*n,s+f/p*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,l/p,f/p]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];vn(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,ho),vn(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],ho),vn(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],ho)}}function jc(e,t,o,n){let i=o,s=o+n*.16;tr(e,t-.28,0,i,t+.28,Pe.spring-.3,s,ho),tr(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),ho),tr(e,t-.28-.05,Pe.spring-.3,i,t+.28+.05,Pe.spring-.1,o+n*(.16+.05),ho),tr(e,t-.28-.1,Pe.spring-.1,i,t+.28+.1,Pe.spring,o+n*(.16+.1),ho)}function v5(e,t){let o=b0(Pe.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,Pe.zc,48,{mat:()=>La});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=Pe.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=La,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function m5(e){e.curMat=ho;for(let[t,o]of[[Pe.z0,1],[Pe.z1,-1]])tr(e,14.35,Pe.spring-.12,t,Pe.x1,Pe.spring,t+o*.1,ho),tr(e,14.35,Pe.spring-.04,t,Pe.x1,Pe.spring+.05,t+o*.18,ho);for(let[t,o]of[[Pe.z0,1],[Pe.z1,-1]])tr(e,14.35,0,t,Pe.x1,.42,t+o*.12,ho),tr(e,14.35,.42,t,Pe.x1,.5,t+o*.07,ho);for(let t of vp)pp(e,t,.24,.16),jc(e,t,Pe.z0,1),jc(e,t,Pe.z1,-1);for(let t of[14.35+.28,Pe.x1-.28])pp(e,t,.28,.22),jc(e,t,Pe.z0,1),jc(e,t,Pe.z1,-1);for(let t of Or)v5(e,t)}function g5(e){let t=Pe.z1+To,o=t-.04,n=t+.04,r=(s,c,l,f)=>tr(e,s,c,o,l,f,n,Es),a=ft.halfW,i=(s,c,l,f,p,h)=>{let d=(u,v,m)=>[s+v*Math.cos(u),ft.spring+v*Math.sin(u),m];for(let u=0;u<h;u++){let v=f+(p-f)*u/h,m=f+(p-f)*(u+1)/h;vn(e,d(v,c,o),d(m,c,o),d(m,l,o),d(v,l,o),[0,0,-1],Es),vn(e,d(v,l,n),d(m,l,n),d(m,c,n),d(v,c,n),[0,0,1],Es)}};for(let s of Or){let c=s-a,l=s+a;r(c,ft.sill,c+.07,ft.spring),r(l-.07,ft.sill,l,ft.spring),r(c,ft.sill,l,ft.sill+.07),r(c,ft.spring-.04,l,ft.spring+.04);for(let p of[-.5,0,.5])r(s+p*a-.022,ft.sill,s+p*a+.022,ft.spring);let f=6;for(let p=1;p<f;p++){let h=ft.sill+(ft.spring-ft.sill)*p/f;r(c,h-.02,l,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let p=1;p<6;p++){let h=Math.PI*p/6,d=Math.cos(h),u=Math.sin(h),v=.02,m=(g,y)=>[s+d*g-u*v*y,ft.spring+u*g+d*v*y];vn(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],Es),vn(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],Es)}}}function x5(){let e=[],t=Pe.z1+To;for(let o of Or){let n=o-ft.halfW,r=o+ft.halfW;e.push([n,ft.sill,t],[r,ft.sill,t],[r,ft.spring,t],[n,ft.sill,t],[r,ft.spring,t],[n,ft.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,ft.spring,t],[o+ft.halfW*Math.cos(i),ft.spring+ft.halfW*Math.sin(i),t],[o+ft.halfW*Math.cos(s),ft.spring+ft.halfW*Math.sin(s),t])}}return e}function mp(e,t){e.save(),e.translate(Pe.x1+To,0,Pe.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function y5(e){mp(e,()=>{w0.addSurround(e),w0.addFrames(e,"fixed")})}function b5(e){return w0.glassPanes(e||"fixed").map(([o,n,r])=>[Pe.x1+To-r,n,Pe.zc-7+o])}function w5(e){p5(e),m5(e),g5(e),y5(e),e.curMat=[0,0,0]}var _5={x:Pe.x1+To,zLo:Pe.zc-w0.DOOR.r,zHi:Pe.zc+w0.DOOR.r},Ut=e=>e.toFixed(4);function M5(){return`
	const vec3 WIN_SKY = vec3(0.0, 0.58, 0.81);

	float winBar(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the window wall is at (x, y) on its plane, 0..1
	float winOpen(vec2 q, float soft) {
		float k = floor((q.x - ${Ut(ft.first)}) / ${Ut(ft.pitch)} + 0.5);
		if (k < 0.0 || k > ${Ut(ft.count-1)}) return 0.0;
		float dx = q.x - (${Ut(ft.first)} + k * ${Ut(ft.pitch)});
		float side = 1.0 - smoothstep(${Ut(ft.halfW)} - soft, ${Ut(ft.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Ut(ft.sill)} - soft, ${Ut(ft.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Ut(ft.spring)}));
		float head = q.y < ${Ut(ft.spring)} ? 1.0 : 1.0 - smoothstep(${Ut(ft.halfW)} - soft, ${Ut(ft.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Ut(ft.halfW*.5)}), 0.022, soft));
		float rowH = ${Ut((ft.spring-ft.sill)/6)};
		float ry = (q.y - ${Ut(ft.sill)}) / rowH;
		cover = max(cover, q.y < ${Ut(ft.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Ut(ft.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Ut(Pe.x0)} || p.z < ${Ut(Pe.z0-.1)} || p.z > ${Ut(Pe.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Ut(Pe.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Ut(Pe.z1+2*To)} - p.z) / WIN_SKY.z;
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
		${Bc.map(e=>`{ float d = abs(p.x - ${Ut(e)}); if (d < best) { best = d; lamp = vec3(${Ut(e)}, ${Ut(er.spring+.55)}, ${Ut(Pe.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Ut(Pe.z0+1.6)} || p.z < ${Ut(Pe.z0-er.r-.1)} || p.x < ${Ut(Pe.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Ut(er.r)}, ${Ut(er.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Ut(Pe.x0-1)}) return 0.0;
		float inC = smoothstep(${Ut(Pe.z0-1.5)}, ${Ut(Pe.z0)}, p.z) * smoothstep(${Ut(Pe.x0-1)}, ${Ut(Pe.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Ut(Pe.z0)}, ${Ut(Pe.z1)}, p.z);
		return inC * near;
	}`}gp.exports={wallWithHoles:Ss,windowLightGLSL:M5,addWing:w5,windowGlass:x5,farDoorGlass:b5,atFarDoor:mp,FAR_DOOR:_5,vaultY:b0,C:Pe,NICHE_X:Bc,NICHE:er,NICHE_PLINTH_TOP:u5,NICHE_STATUE_Z:d5,WIN:ft,winCentres:Or,piers:vp,PAINTING_X:f5,HEIGHT:ch}});var Fr=ve((NE,bp)=>{"use strict";var fh=Un(),Mo=8,E0=.35,yi=14,M0=4,He={x0:yi+E0,x1:yi+E0+2*M0,z0:5.9-M0,z1:5.9+M0,zc:5.9,cx:yi+E0+M0,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Mo},oculus:3.3};He.domeTop=He.dome.base+He.dome.r;var S0={spokes:16,ringE:[.42,.95],bar:.035},sn={sxz:1.32,sy:1.6,yaw:.6};sn.crownC=[He.cx,.4+3.4*sn.sy,He.zc];sn.crownR=[2.3*sn.sxz,1.9*sn.sy,2.3*sn.sxz];sn.trunkR=.26*sn.sxz;sn.trunkTop=.4+2.2*sn.sy;var xp={inner:1.05,outer:1.62,seat:.48,soil:.4},Vc=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),mn=[0,0,0],_0=[11,0,0],Uc=[10,0,0],Wc=[9,0,0],E5=[5,0,0],hh=[3,0,0];function fa(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Wn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var S5=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function A5(e){e.save(),e.translate(yi+E0,0,0),e.rotateY(-Math.PI/2),fh.wallWithHoles(e,{u0:0,u1:fh.C.z0,w0:0,w1:2*E0,top:()=>Mo,holes:[{u0:He.zc-He.arch.r,u1:He.zc+He.arch.r,bottom:0,head:S5(He.zc,He.arch.r,He.arch.spring),step:.05}],mat:_0,revealMat:mn,topStep:1}),e.restore();let t=yi-E0;for(let[i,s]of[[0,He.zc-He.arch.r],[He.zc+He.arch.r,fh.C.z0]])Wn(e,t-.12,0,i,t,.42,s,mn),Wn(e,t-.07,.42,i,t,.5,s,mn);let o=t,n=.24,r=40,a=(i,s,c)=>[c,He.arch.spring+Math.sin(i)*s,He.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;fa(e,a(s,He.arch.r,o-.07),a(c,He.arch.r,o-.07),a(c,He.arch.r+n,o-.07),a(s,He.arch.r+n,o-.07),[-1,0,0],mn),fa(e,a(s,He.arch.r+n,o),a(c,He.arch.r+n,o),a(c,He.arch.r+n,o-.07),a(s,He.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],mn),fa(e,a(s,He.arch.r,o),a(c,He.arch.r,o),a(c,He.arch.r,o-.07),a(s,He.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],mn)}Wn(e,o-.12,He.arch.spring+He.arch.r-.06,He.zc-.17,o,He.arch.spring+He.arch.r+n+.16,He.zc+.17,mn);for(let i of[-1,1]){let s=He.zc+i*He.arch.r,c=He.zc+i*(He.arch.r+n);Wn(e,o-.07,0,s,o,He.arch.spring,c,mn),Wn(e,o-.13,He.arch.spring-.16,s-i*.03,o,He.arch.spring,c+i*.08,mn),Wn(e,o-.12,0,s-i*.03,o,.5,c+i*.06,mn)}}function T5(e){let{x0:t,x1:o,z0:n,z1:r}=He;fa(e,[yi,0,n],[o,0,n],[o,0,r],[yi,0,r],[0,1,0],mn),e.curMat=_0,fa(e,[o,0,n],[o,0,r],[o,Mo,r],[o,Mo,n],[-1,0,0],_0),fa(e,[t,0,n],[o,0,n],[o,Mo,n],[t,Mo,n],[0,0,1],_0),fa(e,[o,0,r],[t,0,r],[t,Mo,r],[o,Mo,r],[0,0,-1],_0),fa(e,[t,0,r],[t,0,n],[t,Mo,n],[t,Mo,r],[1,0,0],_0),Wn(e,o-.12,0,n,o,.42,r,mn),Wn(e,t,0,n,o,.42,n+.12,mn),Wn(e,t,0,r-.12,o,.42,r,mn),Wn(e,o-.2,Mo-.3,n,o,Mo,r,mn),Wn(e,t,Mo-.3,n,o,Mo,n+.2,mn),Wn(e,t,Mo-.3,r-.2,o,Mo,r,mn),Wn(e,t,Mo-.3,n,t+.2,Mo,r,mn);let a=He.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([He.cx+Math.cos(y)*a,He.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(M0/Math.max(y,1e-6),M0/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,E=c(y),k=c(b),L=[He.cx+Math.cos(y)*E,Mo,He.zc+Math.sin(y)*E],N=[He.cx+Math.cos(b)*k,Mo,He.zc+Math.sin(b)*k];fa(e,[s[g][0],Mo,s[g][1]],[s[g+1][0],Mo,s[g+1][1]],N,L,[0,-1,0],Uc)}e.lathe([[a+.02,Mo-.18,1],[a-.12,Mo-.18,1],[a-.12,Mo-.06,1],[a-.05,Mo,1],[a,Mo+.02]],He.cx,He.zc,i,{mat:()=>mn});let l=16,f=(g,y,b)=>[He.cx+Math.cos(g)*Math.cos(y)*b,He.dome.base+Math.sin(y)*b,He.zc+Math.sin(g)*Math.cos(y)*b],p=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<l;y++){let b=Math.PI*2*g/i,E=Math.PI*2*(g+1)/i,k=p*y/l,L=p*(y+1)/l,N=(U,W)=>[-Math.cos(U)*Math.cos(W),-Math.sin(W),-Math.sin(U)*Math.cos(W)],H=[e.vert(f(b,k,a),N(b,k),Wc),e.vert(f(E,k,a),N(E,k),Wc),e.vert(f(E,L,a),N(E,L),Wc),e.vert(f(b,L,a),N(b,L),Wc)];e.tri(H[0],H[1],H[2]),e.tri(H[0],H[2],H[3])}for(let g=0;g<S0.spokes;g++){let y=Math.PI*2*g/S0.spokes,b=[];for(let E=0;E<=14;E++)b.push(f(y,(p-.06)*E/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>Uc})}for(let g of S0.ringE){let y=Math.cos(g)*(a-.04),b=He.dome.base+Math.sin(g)*(a-.04),E=[];for(let k=0;k<=72;k++){let L=Math.PI*2*k/72;E.push([He.cx+Math.cos(L)*y,b,He.zc+Math.sin(L)*y])}e.tube(E,()=>.035,72,6,{mat:()=>Uc})}e.ellipsoid([He.cx,He.dome.base+a-.06,He.zc],[.16,.08,.16],6,12,{mat:()=>Uc});let h=.46,d=.55,u=.12,v=(g,y,b,E)=>{Wn(e,g,h-.08,y,b,h,E,hh);let k=b-g>E-y?[g+.25,b-.25]:[g+.06,b-.06],L=b-g>E-y?[y+.06,E-.06]:[y+.25,E-.25];Wn(e,k[0],0,L[0],k[1],h-.08,L[1],hh)};v(o-u-d,n+1.1,o-u,r-1.1),v(t+1,n+u,o-1.1,n+u+d),v(t+1,r-u-d,o-1.1,r-u);let m=xp;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],He.cx,He.zc,64,{mat:()=>hh}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],He.cx,He.zc,48,{mat:()=>E5})}function k5(e){A5(e),T5(e),e.curMat=[0,0,0]}var uo=e=>e.toFixed(4);function yp(){let e=He.dome.r,t=S0.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${uo(Vc[0])}, ${uo(Vc[1])}, ${uo(Vc[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${uo(He.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${uo(He.cx)}, ${uo(He.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${uo(e-.15)} - soft, ${uo(e-.15)} + soft, d);
		float hw = ${uo(S0.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${uo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${uo(Math.PI*2/S0.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${uo(sn.crownC[0])}, ${uo(sn.crownC[1])}, ${uo(sn.crownC[2])});
		vec3 r = vec3(${uo(sn.crownR[0])}, ${uo(sn.crownR[1])}, ${uo(sn.crownR[2])});
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
		float tt = (${uo(sn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${uo(He.cx)}, ${uo(He.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${uo(sn.trunkR*.7)}, ${uo(sn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function L5(){return`
	${yp()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${uo(He.x0-.75)} || p.z < ${uo(He.z0-.5)} || p.z > ${uo(He.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${uo(He.x0-1.5)} || p.z < ${uo(He.z0-1.5)} || p.z > ${uo(He.z1+1.5)}) return 0.0;
		float inside = smoothstep(${uo(He.x0-1.2)}, ${uo(He.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${uo(He.cx)}, ${uo(He.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}bp.exports={addAlcove:k5,alcoveLightGLSL:L5,oculusGLSL:yp,A:He,BENCH:xp,SHAFT:Vc,TREE:sn}});var Ln=ve((PE,_p)=>{"use strict";var Qr=0;try{let e=location.search;/[?&]night\b/.test(e)&&(Qr=1)}catch(e){}var za=Qr,uh=0,wp=[],Xc={tick(e){let t=uh?Math.min(.1,e-uh):0;if(uh=e,za!==Qr){let o=t/2.4;za=Qr>za?Math.min(Qr,za+o):Math.max(Qr,za-o)}return Xc.night},get night(){return za*za*(3-2*za)},get isNight(){return Qr===1},set(e){Qr=e?1:0,wp.forEach(t=>t(Qr))},toggle(){Xc.set(!Qr)},onChange(e){wp.push(e)}};Xc.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;_p.exports=Xc});var Ra=ve((IE,ks)=>{"use strict";var dh=Ln(),{C:ph}=Un(),{A:Yc,BENCH:As}=Fr(),cn=Math.PI,z5=[18,29,40],Kc=.575,Ca=[],Ts=(e,t,o,n,r,a,i)=>Ca.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));z5.forEach(e=>{Ts(1.25+Kc+.48,3.25,e,[1,0],.48,Kc,{s:1.2}),Ts(12.75-Kc-.48,3.25,e,[-1,0],.48,Kc,{s:1.2})});[3,11].forEach(e=>Ts(e,3.45,ph.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var C5=[14.63,19.63,24.03,28.43,32.83,ph.x1-.28];C5.forEach(e=>Ts(e,3.15,ph.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>Ts(.35+.44,2.75,e,[1,0],.44,99));{let e=(As.inner+As.outer)/2,t=Math.atan2(-1.12,-.98);Ca.push({x:Yc.cx+Math.cos(t)*e,y:As.seat+.155,z:Yc.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[Yc.cx,Yc.zc,As.outer+.07,As.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var vh=.13,Qc=.21,gn=vh/Math.cos(cn/6),io=e=>e.toFixed(4);function Mp(e){let o=(e||Ca.map((n,r)=>r)).map(n=>{let r=Ca[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${io(r.ring[3]-.03)}) {
					float tt = ${io(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${io(r.x)}, ${io(r.z)}) + D.xz * tt - vec2(${io(r.ring[0])}, ${io(r.ring[1])});
					T *= smoothstep(${io(r.ring[2]-.02)}, ${io(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${io(r.o[0])}, ${io(r.o[1])}));
					if (behind > ${io(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${io(a)}, ${io(i)}))) * ${io(r.back)} / behind;
						T *= smoothstep(${io(r.hw-.04)}, ${io(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${io(r.x)}, ${io(r.y)}, ${io(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${io(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${io(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${io(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${io(n*1.7)}) + 0.04 * sin(time * 15.3 + ${io(n*2.9)}) * sin(time * 1.9 + ${io(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${io(1/(r.s*r.s))}) * (1.0 - smoothstep(${io(r.range*.6)}, ${io(r.range)}, d));
					sum += ${io(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${io(cn/6)}, ${io(cn/3)}) - ${io(cn/6)};
		float U = tan(t) / ${io(Math.tan(cn/6))};
		float V = (q.y / h) * (${io(vh/Qc)} / cos(t));
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
	}`}var ko=0,R5=1;function N5(){let e=[],t=[],o=[],n=[],r=[],a=(d,u,v,m)=>(e.push(d[0],d[1],d[2]),t.push(u[0],u[1],u[2]),o.push(v),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(d,u)=>[d[0]-u[0],d[1]-u[1],d[2]-u[2]],s=(d,u)=>[d[1]*u[2]-d[2]*u[1],d[2]*u[0]-d[0]*u[2],d[0]*u[1]-d[1]*u[0]],c=d=>{let u=Math.hypot(d[0],d[1],d[2])||1;return[d[0]/u,d[1]/u,d[2]/u]};function l(d,u,v,m,g,y){let b=c(s(i(u,d),i(m,d))),E=a(d,b,g,[0,0]),k=a(u,b,g,[1,0]),L=a(v,b,g,[1,1]),N=a(m,b,g,[0,1]);r.push(E,k,L,E,L,N),y&&r.push(E,L,k,E,N,L)}function f(d,u,v){for(let y=0;y<d.length;y++){let b=d[Math.max(0,y-1)],E=d[Math.min(d.length-1,y+1)],k=c(i(E,b)),L=Math.abs(k[1])>.9?[1,0,0]:[0,1,0],N=c(s(k,L)),H=s(N,k),U=typeof u=="function"?u(y/(d.length-1)):u;for(let W=0;W<=6;W++){let Q=W/6*cn*2,ie=Math.cos(Q),oe=Math.sin(Q),ee=[N[0]*ie+H[0]*oe,N[1]*ie+H[1]*oe,N[2]*ie+H[2]*oe];a([d[y][0]+ee[0]*U,d[y][1]+ee[1]*U,d[y][2]+ee[2]*U],ee,v)}}let g=e.length/3-d.length*7;for(let y=0;y<d.length-1;y++)for(let b=0;b<6;b++){let E=g+y*7+b,k=E+6+1;r.push(E,k,E+1,E+1,k,k+1)}}function p(d,u,v,m,g,y,b,E,k){let L=(N,H,U)=>{let W=y+cn/6+U*cn/3;return[d[0]+Math.cos(W)*N,H,d[2]+Math.sin(W)*N]};for(let N=0;N<6;N++)l(L(m,u,N+1),L(m,u,N),L(g,v,N),L(g,v,N+1),b);if(E&&g>0)for(let N=0;N<6;N++){let H=a([d[0],v,d[2]],[0,1,0],b),U=a(L(g,v,N),[0,1,0],b),W=a(L(g,v,N+1),[0,1,0],b);r.push(H,W,U)}if(k&&m>0)for(let N=0;N<6;N++){let H=a([d[0],u,d[2]],[0,-1,0],b),U=a(L(m,u,N),[0,-1,0],b),W=a(L(m,u,N+1),[0,-1,0],b);r.push(H,U,W)}}function h(d,u,v,m,g,y,b){let E=[];for(let L=0;L<=18;L++){let N=L/18,H=(b||0)+N*m*cn*2,U=v*(1-.75*N);E.push([d[0]+u[0]*Math.cos(H)*U,d[1]+Math.sin(H)*U,d[2]+u[2]*Math.cos(H)*U])}f(E,g,y)}return Ca.forEach(d=>{let u=d.s,v=Math.atan2(d.o[1],d.o[0]),m=[d.x,d.y,d.z],g=(E,k,L)=>[d.x+d.o[0]*E-d.o[1]*(L||0),d.y+k,d.z+d.o[1]*E+d.o[0]*(L||0)],y=d.y-Qc*u,b=d.y+Qc*u;for(let E=0;E<6;E++){let k=v+cn/6+E*cn/3,L=k+cn/3,N=gn*u*.97,H=[d.x+Math.cos(k)*N,y,d.z+Math.sin(k)*N],U=[d.x+Math.cos(L)*N,y,d.z+Math.sin(L)*N];l(U,H,[H[0],b,H[2]],[U[0],b,U[2]],R5,!0)}for(let E=0;E<6;E++){let k=v+cn/6+E*cn/3,L=gn*u;f([[d.x+Math.cos(k)*L,y-.02*u,d.z+Math.sin(k)*L],[d.x+Math.cos(k)*L,b+.02*u,d.z+Math.sin(k)*L]],.011*u,ko)}p(m,y-.035*u,y,gn*u*1.12,gn*u*1.12,v,ko,!0,!0),p(m,y-.1*u,y-.035*u,gn*u*.55,gn*u*1,v,ko,!1,!0),p(m,y-.17*u,y-.1*u,0,gn*u*.55,v,ko,!1,!1);for(let E=0;E<6;E++){let k=v+E*cn/3,L=vh*u*1.06,N=[d.x+Math.cos(k)*L,y-.06*u,d.z+Math.sin(k)*L];h(N,[-Math.sin(k),0,Math.cos(k)],.03*u,.85,.004*u,ko,.3)}p(m,b,b+.03*u,gn*u*1.14,gn*u*1.14,v,ko,!1,!0),p(m,b+.03*u,b+.2*u,gn*u*1.14,gn*u*.32,v,ko,!1,!1),p(m,b+.2*u,b+.27*u,gn*u*.34,gn*u*.34,v,ko,!1,!1),p(m,b+.27*u,b+.37*u,gn*u*.42,0,v,ko,!1,!0),f([[d.x,b+.36*u,d.z],[d.x,b+.47*u,d.z]],E=>.01*u*(1-.7*E),ko),p([d.x,0,d.z],b+.44*u,b+.47*u,.018*u,0,v,ko,!1,!0);for(let E=0;E<6;E++){let k=v+cn/6+E*cn/3,L=gn*u*1.14,N=[d.x+Math.cos(k)*L,b+.03*u,d.z+Math.sin(k)*L];f([N,[N[0],N[1]+.09*u,N[2]]],H=>.008*u*(1-.8*H),ko),p([N[0],0,N[2]],N[1]+.035*u,N[1]+.06*u,.014*u,.014*u,k,ko,!0,!0)}if(d.mount==="wall"){let E=d.back,k=y-.32,L=g(-E,0,0);((Q,ie,oe)=>{let ee=[d.o[0],0,d.o[1]],Te=[-d.o[1],0,d.o[0]],ne=(ut,wt,Xt)=>[L[0]+Te[0]*ut+ee[0]*Xt,wt,L[2]+Te[2]*ut+ee[2]*Xt],Xe=.03,ue=.065;l(ne(-oe,Q,ue),ne(oe,Q,ue),ne(oe,ie,ue),ne(-oe,ie,ue),ko,!0),l(ne(oe,Q,Xe),ne(oe,Q,ue),ne(oe,ie,ue),ne(oe,ie,Xe),ko,!0),l(ne(-oe,Q,ue),ne(-oe,Q,Xe),ne(-oe,ie,Xe),ne(-oe,ie,ue),ko,!0),l(ne(-oe,ie,ue),ne(oe,ie,ue),ne(oe,ie,Xe),ne(-oe,ie,Xe),ko,!0),l(ne(-oe,Q,Xe),ne(oe,Q,Xe),ne(oe,Q,ue),ne(-oe,Q,ue),ko,!0),p([L[0]+ee[0]*ue,0,L[2]+ee[2]*ue],ie,ie+.05,oe*.6,0,v,ko,!1,!0),p([L[0]+ee[0]*ue,0,L[2]+ee[2]*ue],Q-.05,Q,0,oe*.6,v,ko,!1,!1)})(k-.2,k+.2,.07);let H=[];for(let Q=0;Q<=14;Q++){let ie=Q/14,oe=-E+.05+ie*(E-.05),ee=k+.04+(y-.17*u-k-.04)*Math.pow(ie,2.2);H.push(g(oe,ee-d.y,0))}f(H,Q=>.022*(1-.3*Q),ko);let U=[];for(let Q=0;Q<=10;Q++){let ie=Q/10;U.push(g(-E+.05+ie*E*.6,k-.14+ie*.16+.05*Math.sin(ie*cn)-d.y,0))}f(U,.009,ko);let W=U[U.length-1];h([W[0]-d.o[0]*.03,W[1]+.02,W[2]-d.o[1]*.03],[d.o[0],0,d.o[1]],.045,1.1,.007,ko,-.4),[.3,.55].forEach(Q=>{let ie=H[Math.round(Q*14)],oe=U[Math.round(Q/.62*10)]||U[10];f([ie,oe],.006,ko)}),[-1,1].forEach(Q=>{let ie=g(-.05,-Qc*u-.2*u,0);h([ie[0]-d.o[1]*Q*.05,ie[1],ie[2]+d.o[0]*Q*.05],[-d.o[1]*Q,0,d.o[0]*Q],.05*u,.9,.006,ko,cn)})}else for(let E=0;E<3;E++){let k=v+E*cn*2/3,L=[d.x+Math.cos(k)*gn*u*.7,y-.035*u,d.z+Math.sin(k)*gn*u*.7],N=[d.x+Math.cos(k)*gn*u*1.25,y-.17*u,d.z+Math.sin(k)*gn*u*1.25];f([L,N],.012*u,ko)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}ks.exports=e=>{let t=N5(),o=e({vert:`
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
		${Mp()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>dh.night}}),n=[],r=[];Ca.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>dh.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),dh.night>.01&&a()}};ks.exports.lanternGLSL=Mp;ks.exports.LANTERNS=Ca;ks.exports.TREE_LANTERN=[Ca.length-1]});var tl=ve((OE,_r)=>{"use strict";var P5=Ln(),mo=Math.PI,$o=e=>(+e).toFixed(4),I5=e=>`vec3(${$o(e[0])}, ${$o(e[1])}, ${$o(e[2])})`,ct={x:-7,z:44.5},Lt=5.2,Pn=15,We={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},Zr={z0:42.2,z1:46.8,top:6.3,x:.35},el=[ct.x-Math.sqrt(Lt*Lt-3.05*3.05),0,0],Vo={x0:-2.05+el[0],x1:el[0],z0:41.45,z1:47.55,top:4.3},mh=[[Vo.x1+.05,2.35,Vo.z0-.45],[Vo.x1+.05,2.35,Vo.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-ct.z,e-ct.x);return[ct.x+Math.cos(n)*(Lt-.16),t,ct.z+Math.sin(n)*(Lt-.16)]}),no={ri:3.4,ro:Lt,a0:-35*mo/180,rise:.1836,step:3.6*mo/180,n:88,thick:.36};no.k=no.rise/no.step;var Vn=e=>no.a0-e,Pa=e=>e*no.k,zn={x:ct.x+.1,z:ct.z-.15,yaw:-mo/2,scale:1.1},Jc=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function Sp(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function O5(e,t){let o=1e9;for(let n=0;n<Jc.length-1;n++){let[r,a]=Jc[n],[i,s]=Jc[n+1],c=i-r,l=s-a,f=Math.max(0,Math.min(1,((e-r)*c+(t-a)*l)/(c*c+l*l)));o=Math.min(o,Math.hypot(e-r-c*f,t-a-l*f))}return o}var Zc=e=>We.spring+Math.sqrt(Math.max(0,We.r*We.r-(e-We.zc)*(e-We.zc))),Na=e=>ct.x+Math.sqrt(Math.max(0,Lt*Lt-(e-ct.z)*(e-ct.z)));function A0(e,t){return Math.hypot(e-ct.x,t-ct.z)<Lt||e<=0&&e>ct.x&&t>We.z0&&t<We.z1||e>Vo.x0&&e<Vo.x1&&t>Vo.z0&&t<Vo.z1}function F5(e,t){if(Math.hypot(e-ct.x,t-ct.z)<no.ri-.05)return 99;let n=Math.atan2(t-ct.z,e-ct.x),r=no.a0-n;for(;r<0;)r+=2*mo;for(;r>=2*mo;)r-=2*mo;return r>no.n*no.step?99:Pa(r)-no.thick}function G5(){let e=[],t=Sp(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let l=e[c];if(!(l[1]>.01)&&Math.hypot(l[0]-a,l[2]-i)<s+l[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-zn.x,c=i-zn.z,l=Math.cos(zn.yaw),f=Math.sin(zn.yaw),p=(l*s-f*c)/zn.scale,h=(f*s+l*c)/zn.scale;return p>-1.05&&p<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(Lt-1.45),s=t()*2*mo,c=ct.x+Math.cos(s)*i,l=ct.z+Math.sin(s)*i;if(!A0(c,l)||i>Lt-.18||n(c,l)||O5(c,l)<.62||F5(c,l)<2.3||c<Vo.x1+.9)continue;let f=.022+t()*.02;if(o(c,l,f))continue;let p=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,l,f,p,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*no.step,l=Vn(c),f=no.ri+.55+t()*(no.ro-no.ri-.75),p=.022+t()*.016;e.push([ct.x+Math.cos(l)*f,(a+1)*no.rise,ct.z+Math.sin(l)*f,p,.05+t()*.14,t()*100])}}for(let a of mh)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[Vo.z0-.35,Vo.z1+.35])for(let i=0;i<9;i++){let s=Vo.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-ct.x,c-ct.z)>Lt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function $5(e){let o=Sp(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,l=1e9;n.forEach((f,p)=>{let h=(s[0]-f[0])**2+(s[1]-f[1])**2*4+(s[2]-f[2])**2;h<l&&(l=h,c=p)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var gh=G5(),Ep=$5(gh.filter(e=>e[1]<2||e[1]>2.5)).concat(mh.map(e=>[e[0],e[1]+.35,e[2],.035]));function Ap(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${Ep.map((t,o)=>`
		{
			vec3 d = ${I5(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${$o(5.3+o*.71)} + ${$o(o*1.9)}) + 0.06 * sin(time * ${$o(11.7+o*1.3)} + ${$o(o*.7)});
			float w = ${$o(t[3]*Ep.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${$o(Pn)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${$o(ct.x)}, ${$o(Pn)}, ${$o(ct.z)}))), 0.0));
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
	}`}var Mt={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function Tp(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),l=e.v(o,a,i,s&&s[1]),f=e.v(n,a,i,s&&s[2]),p=e.v(r,a,i,s&&s[3]);e.idx.push(c,l,f,c,f,p)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function D5(){let e=Tp(),t=(n,r,a)=>[ct.x+Math.cos(n)*r,a,ct.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Vo.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,l=a+.2;if(!(A0(i,c)||A0(s,c)||A0(i,l)||A0(s,l)||A0((i+s)/2,(c+l)/2)))continue;let f=c,p=l;i>Na(We.z0)-.3&&(f=Math.max(f,We.z0),p=Math.min(p,We.z1),p<=f)||e.quad([i,0,f],[i,0,p],[s,0,p],[s,0,f],[0,1,0],Mt.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*mo,i=(r+1)/360*2*mo,s=(a+i)/2,c=t(s,Lt,0),l=0;c[0]>ct.x&&c[2]>We.z0-.02&&c[2]<We.z1+.02&&(l=Math.max(Zc(Math.min(Math.max(t(a,Lt,0)[2],We.z0),We.z1)),Zc(Math.min(Math.max(t(i,Lt,0)[2],We.z0),We.z1)))),c[0]<ct.x&&c[2]>Vo.z0-.02&&c[2]<Vo.z1+.02&&(l=Vo.top);let f=a*Lt,p=i*Lt,h=o(a).map(v=>-v),d=o(i).map(v=>-v),u=[l];for(let v=Math.ceil(l/2.5)*2.5;v<Pn;v+=2.5)v>l+.01&&u.push(v);u.push(Pn);for(let v=0;v<u.length-1;v++){let m=u[v],g=u[v+1],y=e.v(t(a,Lt,m),h,Mt.WALL,[f,m]),b=e.v(t(i,Lt,m),d,Mt.WALL,[p,m]),E=e.v(t(i,Lt,g),d,Mt.WALL,[p,g]),k=e.v(t(a,Lt,g),h,Mt.WALL,[f,g]);e.idx.push(y,b,E,y,E,k)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*mo,l=(s+1)/360*2*mo,f=(c+l)/2,p=t(f,Lt,0);if(r<1&&(p[0]>ct.x&&p[2]>We.z0&&p[2]<We.z1||p[0]<ct.x&&p[2]>Vo.z0&&p[2]<Vo.z1))continue;let h=Lt-i;e.quad(t(c,h,r),t(l,h,r),t(l,h,r+a),t(c,h,r+a),o(f).map(d=>-d),Mt.WALL,[[c*Lt,r+100],[l*Lt,r+100],[l*Lt,r+a+100],[c*Lt,r+a+100]]),e.quad(t(c,h,r+a),t(l,h,r+a),t(l,Lt,r+a),t(c,Lt,r+a),[0,1,0],Mt.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,Lt,r),t(l,Lt,r),t(l,h,r),t(c,h,r),[0,-1,0],Mt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=Zr.x;for(let[a,i]of[[We.z0,1],[We.z1,-1]]){let s=Na(a);e.quad([n,0,a],[s,0,a],[s,We.spring,a],[n,We.spring,a],[0,0,i],Mt.WALL,[[n,0],[s,0],[s,We.spring],[n,We.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*mo,s=(a+1)/r*mo,c=We.zc-Math.cos(i)*We.r,l=We.zc-Math.cos(s)*We.r,f=We.spring+Math.sin(i)*We.r,p=We.spring+Math.sin(s)*We.r,h=[0,-Math.sin(i),Math.cos(i)],d=[0,-Math.sin(s),Math.cos(s)],u=e.v([n,f,c],h,Mt.WALL,[n,i*We.r]),v=e.v([Na(c),f,c],h,Mt.WALL,[Na(c),i*We.r]),m=e.v([Na(l),p,l],d,Mt.WALL,[Na(l),s*We.r]),g=e.v([n,p,l],d,Mt.WALL,[n,s*We.r]);e.idx.push(u,v,m,u,m,g)}}{let n=Zr.x,r=.05;for(let l=Zr.z0;l<Zr.z1-1e-6;l+=r){let f=l,p=Math.min(Zr.z1,l+r),d=(u=>u>We.z0&&u<We.z1)((f+p)/2)?Math.max(Zc(f),Zc(p)):0;e.quad([n,d,f],[n,d,p],[n,Zr.top,p],[n,Zr.top,f],[1,0,0],Mt.HALLSTONE,[[f,d],[p,d],[p,Zr.top],[f,Zr.top]])}let a=.32,i=.06,s=n+i,c=36;for(let l=0;l<c;l++){let f=l/c*mo,p=(l+1)/c*mo,h=(g,y)=>[s,We.spring+Math.sin(g)*y,We.zc-Math.cos(g)*y],d=We.r,u=We.r+a;e.quad(h(f,d),h(p,d),h(p,u),h(f,u),[1,0,0],Mt.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let v=(g,y,b)=>[b,We.spring+Math.sin(g)*y,We.zc-Math.cos(g)*y],m=[0,Math.sin((f+p)/2),-Math.cos((f+p)/2)];e.quad(v(f,u,n),v(p,u,n),v(p,u,s),v(f,u,s),m,Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(v(f,d,n),v(p,d,n),v(p,d,s),v(f,d,s),m.map(g=>-g),Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[l,f,p]of[[We.z0-a,We.z0,-1],[We.z1,We.z1+a,1]]){e.quad([s,0,l],[s,0,f],[s,We.spring,f],[s,We.spring,l],[1,0,0],Mt.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=p<0?l:f,d=p<0?f:l;e.quad([n,0,h],[s,0,h],[s,We.spring,h],[n,We.spring,h],[0,0,p],Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,d],[s,0,d],[s,We.spring,d],[n,We.spring,d],[0,0,-p],Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let u=We.spring-.16,v=.16,m=.11,g=Math.min(l,f)-.05,y=Math.max(l,f)+.05;e.quad([n+m,u,g],[n+m,u,y],[n+m,u+v,y],[n+m,u+v,g],[1,0,0],Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,u+v,g],[n+m,u+v,g],[n+m,u+v,y],[n,u+v,y],[0,1,0],Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,u,g],[n,u,y],[n+m,u,y],[n+m,u,g],[0,-1,0],Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,u,b],[n+m,u,b],[n+m,u+v,b],[n,u+v,b],[0,0,b===g?-1:1],Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let l=We.spring+We.r-.05,f=We.spring+We.r+a+.12,p=.16,h=.22,d=s+.04;e.quad([d,l,We.zc-p],[d,l,We.zc+p],[d,f,We.zc+h],[d,f,We.zc-h],[1,0,0],Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let u of[-1,1])e.quad([n,l,We.zc+u*p],[d,l,We.zc+u*p],[d,f,We.zc+u*h],[n,f,We.zc+u*h],[0,0,u],Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,f,We.zc-h],[d,f,We.zc-h],[d,f,We.zc+h],[n,f,We.zc+h],[0,1,0],Mt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=Vo;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],Mt.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[l,f]of[[a,1],[i,-1]]){let p=ct.x-Math.sqrt(Lt*Lt-(l-ct.z)*(l-ct.z));e.quad([n,0,l],[p,0,l],[p,s,l],[n,s,l],[0,0,f],Mt.WALL,[[n,0],[p,0],[p,s],[n,s]])}let c=24;for(let l=0;l<c;l++){let f=a+(i-a)*l/c,p=a+(i-a)*(l+1)/c,h=ct.x-Math.sqrt(Lt*Lt-(f-ct.z)**2),d=ct.x-Math.sqrt(Lt*Lt-(p-ct.z)**2);e.quad([n,s,f],[h,s,f],[d,s,p],[n,s,p],[0,-1,0],Mt.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let l=0;l<c;l++){let f=a+(i-a)*l/c,p=a+(i-a)*(l+1)/c,h=ct.x-Math.sqrt(Lt*Lt-(f-ct.z)**2)+.05,d=ct.x-Math.sqrt(Lt*Lt-(p-ct.z)**2)+.05;e.quad([h,s-.3,f],[d,s-.3,p],[d,s,p],[h,s,f],[1,0,0],Mt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Lt];for(let a=0;a<120;a++){let i=a/120*2*mo,s=(a+1)/120*2*mo,c=(i+s)/2;c>mo&&(c-=2*mo);for(let l=0;l<r.length-1;l++){let f=r[l],p=r[l+1],h=c*180/mo;f>=3.3&&h>8&&h<85||e.quad(t(i,f,Pn),t(i,p,Pn),t(s,p,Pn),t(s,f,Pn),[0,-1,0],Mt.CEIL,[[i*f,f],[i*p,p],[s*p,p],[s*f,f]])}e.quad(t(i,1.15,Pn),t(s,1.15,Pn),t(s,1.15,Pn+.7),t(i,1.15,Pn+.7),o(c).map(l=>-l),Mt.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([ct.x,Pn+.7,ct.z],t(s,1.15,Pn+.7),t(i,1.15,Pn+.7),[0,-1,0],Mt.OCULUS)}}{let n=no.ri,r=no.ro,a=no.n*no.step;for(let c=0;c<no.n;c++){let l=c*no.step,f=(c+1)*no.step,p=Vn(l),h=Vn(f),d=(c+1)*no.rise,u=c*no.rise,v=2;for(let y=0;y<v;y++){let b=p+(h-p)*y/v-(y===0?.004:0),E=p+(h-p)*(y+1)/v;e.quad(t(b,n,d),t(b,r,d),t(E,r,d),t(E,n,d),[0,1,0],Mt.STEP,[[n*b,c],[r*b,c],[r*E,c],[n*E,c]])}let m=[-Math.sin(p),0,Math.cos(p)],g=p-.004;e.quad(t(g,n,u),t(g,r,u),t(g,r,d),t(g,n,d),m,Mt.STEP,[[n*p,c+.5],[r*p,c+.5],[r*p,c+.5],[n*p,c+.5]]),e.quad(t(p,n,Pa(l)+.06),t(h,n,Pa(f)+.06),t(h,n,d),t(g,n,d),o((p+h)/2).map(y=>-y),Mt.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*mo/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let l=c/i*a,f=(c+1)/i*a,p=Vn(l),h=Vn(f),d=Pa(l),u=Pa(f),v=d-no.thick,m=u-no.thick,g=o(p).map(N=>-N),y=o(h).map(N=>-N),b=e.v(t(p,n,v),g,Mt.STRING,[l*n,0]),E=e.v(t(h,n,m),y,Mt.STRING,[f*n,0]),k=e.v(t(h,n,u+.06),y,Mt.STRING,[f*n,1]),L=e.v(t(p,n,d+.06),g,Mt.STRING,[l*n,1]);e.idx.push(b,E,k,b,k,L);for(let N=0;N<s.length-1;N++){let H=s[N],U=s[N+1],W=Q=>{let ie=o(Q);return[-ie[0]*.12,-.99,-ie[2]*.12]};e.quad(t(p,H,v),t(p,U,v),t(h,U,m),t(h,H,m),W((p+h)/2),Mt.SOFFIT,[[l*H,H],[l*U,U],[f*U,U],[f*H,H]])}}}return e}function q5(){let e=Tp(),t=no.ri+.045,o=no.n*no.step,n=Math.ceil(o/(.8*mo/180)),r=.92,a=(c,l,f)=>[ct.x+Math.cos(c)*l,f,ct.z+Math.sin(c)*l],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let l=c/n*o,f=(c+1)/n*o,p=Vn(l),h=Vn(f),d=Pa(l)+.06,u=Pa(f)+.06,v=i(p).map(N=>-N),m=i(h).map(N=>-N),g=l*t,y=f*t,b=e.v(a(p,t,d),v,Mt.RAILING,[g,0]),E=e.v(a(h,t,u),m,Mt.RAILING,[y,0]),k=e.v(a(h,t,u+r),m,Mt.RAILING,[y,r]),L=e.v(a(p,t,d+r),v,Mt.RAILING,[g,r]);e.idx.push(b,E,k,b,k,L)}((c,l,f,p)=>{let d=v=>{let m=Vn(v),g=Pa(v)+.06+l,y=a(m,t+c,g),b=i(m),E=[];for(let k=0;k<8;k++){let L=k/8*2*mo,N=[b[0]*Math.cos(L),Math.sin(L),b[2]*Math.cos(L)];E.push([[y[0]+N[0]*f,y[1]+N[1]*f,y[2]+N[2]*f],N])}return E},u=d(0);for(let v=1;v<=n;v++){let m=d(v/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(u[g][0],u[g][1],p),E=e.v(m[g][0],m[g][1],p),k=e.v(m[y][0],m[y][1],p),L=e.v(u[y][0],u[y][1],p);e.idx.push(b,E,k,b,k,L)}u=m}})(0,r+.02,.028,Mt.IRON);for(let c of mh){let l=Math.atan2(c[2]-ct.z,c[0]-ct.x),f=[Math.cos(l),0,Math.sin(l)],p=12;for(let v=0;v<p;v++){let m=v/p*2*mo,g=(v+1)/p*2*mo,y=(b,E,k)=>[c[0]+Math.cos(b)*E,k,c[2]+Math.sin(b)*E];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Mt.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Mt.IRON)}let h=[c[0]+f[0]*.16,c[1]-.35,c[2]+f[2]*.16],d=[-f[2],0,f[0]],u=.018;e.quad([h[0]-d[0]*u,h[1],h[2]-d[2]*u],[h[0]+d[0]*u,h[1],h[2]+d[2]*u],[c[0]+d[0]*u,c[1]-.05,c[2]+d[2]*u],[c[0]-d[0]*u,c[1]-.05,c[2]-d[2]*u],[-f[0],.5,-f[2]],Mt.IRON)}{let c=Vn(0),l=a(c,t,0),f=10;for(let p=0;p<f;p++){let h=p/f*2*mo,d=(p+1)/f*2*mo,u=(v,m,g)=>[l[0]+Math.cos(v)*m,g,l[2]+Math.sin(v)*m];e.quad(u(h,.035,0),u(d,.035,0),u(d,.035,r+.1),u(h,.035,r+.1),[Math.cos((h+d)/2),0,Math.sin((h+d)/2)],Mt.IRON),e.quad(u(h,.06,r+.1),u(d,.06,r+.1),u(d,.03,r+.2),u(h,.03,r+.2),[Math.cos((h+d)/2)*.8,.6,Math.sin((h+d)/2)*.8],Mt.IRON)}}return e}function H5(){let e=[],t=[],o=[],n=[];for(let a of gh){let[i,s,c,l,f,p]=a,h=e.length/3;for(let u=0;u<=7;u++){let v=u/7*2*mo+p,m=Math.cos(v),g=Math.sin(v);e.push(i+m*l,s,c+g*l,i+m*l,s+f,c+g*l),t.push(m,0,g,m,0,g),o.push(0,f,p,1,f,p)}for(let u=0;u<7;u++){let v=h+u*2;n.push(v,v+2,v+3,v,v+3,v+1)}let d=e.length/3;e.push(i,s+f-.006,c),t.push(0,1,0),o.push(2,f,p);for(let u=0;u<7;u++){let v=u/7*2*mo+p;e.push(i+Math.cos(v)*l,s+f,c+Math.sin(v)*l),t.push(0,1,0),o.push(1,f,p)}for(let u=0;u<7;u++)n.push(d,d+1+u,d+1+(u+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function j5(){let e=[],t=[],o=[],n=[];for(let r of gh){let[a,i,s,,c,l]=r,f=e.length/3;for(let p of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(p[0],p[1]),o.push(l);n.push(f,f+1,f+2,f,f+2,f+3)}return{ctr:e,corner:t,ph:o,idx:n}}function B5(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let l=new Int8Array(e,i,o*3);i+=o*3;let f=new Uint8Array(e,i,o),p=new Float32Array(o*3),h=new Float32Array(o*3),d=new Float32Array(o),u=Math.cos(zn.yaw),v=Math.sin(zn.yaw),m=zn.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,E=(r[2]+s[g*3+2]/65535*a[2])*m;p[g*3]=zn.x+u*y+v*E,p[g*3+1]=b,p[g*3+2]=zn.z-v*y+u*E;let k=l[g*3]/127,L=l[g*3+1]/127,N=l[g*3+2]/127;h[g*3]=u*k+v*N,h[g*3+1]=L,h[g*3+2]=-v*k+u*N,d[g]=f[g]}return{pos:p,nrm:h,mat:d,idx:new Uint32Array(c)}}function U5(){let e=[],t=(p,h)=>[ct.x+Math.cos(p)*h,ct.z+Math.sin(p)*h];e.push([[0,We.z0],[Na(We.z0),We.z0]]),e.push([[Na(We.z1),We.z1],[0,We.z1]]);let o=Math.asin((We.z1-ct.z)/Lt),n=72;for(let p=0;p<n;p++){let h=o+p/n*(2*mo-2*o),d=o+(p+1)/n*(2*mo-2*o);e.push([t(h,Lt-.25),t(d,Lt-.25)])}let r=el[0]-.55+.35;e.push([[r,Vo.z0],[r,Vo.z1]]);let a=2.4/no.k,i=12;for(let p=0;p<i;p++){let h=Vn(p/i*a),d=Vn((p+1)/i*a);e.push([t(h,no.ri-.2),t(d,no.ri-.2)])}e.push([t(Vn(0),no.ri-.2),t(Vn(0),Lt)]),e.push([t(Vn(a),no.ri-.2),t(Vn(a),Lt)]);let s=Math.cos(zn.yaw),c=Math.sin(zn.yaw),l=zn.scale,f=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([p,h])=>[zn.x+(s*p+c*h)*l,zn.z+(-c*p+s*h)*l]);for(let p=0;p<4;p++)e.push([f[p],f[(p+1)%4]]);return e}_r.exports=e=>{let t=D5(),o=q5(),n=H5(),r=j5(),a=Ra(),i=`
	precision highp float;
	${P5.GLSL}
	uniform float time;
	${Ap()}
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
				// floor: big worn flags of pale stone, laid in rings round the middle
				vec2 q = v_pos.xz;
				float r = length(q - vec2(${$o(ct.x)}, ${$o(ct.z)}));
				float a = atan(q.y - ${$o(ct.z)}, q.x - ${$o(ct.x)});
				float ring = floor(r / 0.9);
				float cnt = max(1.0, floor(6.2831 * (ring + 0.5) * 0.9 / 0.95));
				float seg = a / 6.2831 * cnt + hash(vec2(ring, 3.0)) * 7.0;
				float jr = abs(fract(r / 0.9) - 0.5), ja = abs(fract(seg) - 0.5);
				float joint = smoothstep(0.485, 0.497, max(jr, ja * (r < 0.5 ? 0.0 : 1.0)));
				if (v_pos.x > ${$o(ct.x+Lt-.4)}) {
					// in the passage, straight flags
					vec2 s = v_pos.xz / vec2(0.9, 0.95);
					vec2 j = abs(fract(s + vec2(0.0, floor(s.x) * 0.5)) - 0.5);
					joint = smoothstep(0.485, 0.497, max(j.x, j.y));
					seg = floor(s.x) + floor(s.y) * 7.0;
				}
				base = limestone(q * 0.8 + vec2(seg, ring) * 1.7) * vec3(0.92, 0.88, 0.84);
				base *= 0.93 + 0.14 * hash(vec2(floor(seg), ring));
				base *= 1.0 - 0.45 * joint;
				// waxed by the candles: a soft sheen
				gloss = 0.32 * (1.0 - joint) * (0.7 + 0.3 * vnoise(q * 3.0));
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${$o(Pn)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${$o(ct.x)}, ${$o(ct.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${$o((no.ri+no.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${$o(ct.x)}, ${$o(ct.z)});
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
			vec3 base = vec3(0.86, 0.80, 0.68);
			vec3 spec;
			vec3 light = roomLight(v_pos, N, V, 0.25, spec);
			vec3 col = base * light + spec * 0.4;
			// the wax glows from within near the flame
			float fl = 0.85 + 0.15 * sin(time * 9.0 + v_info.z * 3.0) * sin(time * 2.3 + v_info.z);
			float glow = t > 1.5 ? 1.0 : smoothstep(0.35, 1.0, t) * smoothstep(0.30, 0.04, v_info.y * (1.0 - t) + 0.02);
			col += vec3(1.0, 0.62, 0.28) * glow * 0.85 * fl;
			col = roomHaze(v_pos, v_eye, col);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),p=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, halo;
		attribute vec3 ctr;
		attribute vec2 corner;
		attribute float ph;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			float fl = 0.85 + 0.10 * sin(time * 8.0 + ph * 2.0) + 0.05 * sin(time * 19.0 + ph);
			float sway = 0.0025 * sin(time * 3.1 + ph * 5.0);
			float w = halo > 0.5 ? 0.075 : 0.0075;
			float h = halo > 0.5 ? 0.075 : 0.030 * fl;
			vec3 c = ctr + vec3(0.0, halo > 0.5 ? 0.012 : 0.0, 0.0);
			vec3 p = c + right * corner.x * w + vec3(sway * corner.y, (halo > 0.5 ? corner.y * 2.0 - 1.0 : corner.y) * h, 0.0);
			v_uv = corner; v_fl = fl;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float halo, night;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			if (halo > 0.5) {
				vec2 d = vec2(v_uv.x, v_uv.y * 2.0 - 1.0);
				float g = exp(-dot(d, d) * 5.0) * 0.16 * v_fl;
				gl_FragColor = vec4(vec3(1.0, 0.55, 0.20) * g, 1.0);
				return;
			}
			// a teardrop: round at the bottom, drawn to a point at the top
			float y = v_uv.y;
			float wid = sqrt(max(0.0, y * (1.0 - y))) * 2.0 * (1.0 - 0.45 * y);
			float x = abs(v_uv.x);
			float a = 1.0 - smoothstep(wid * 0.6, wid, x);
			a *= smoothstep(0.0, 0.12, y);
			vec3 core = mix(vec3(1.0, 0.90, 0.62), vec3(1.0, 0.55, 0.18), smoothstep(0.2, 0.9, y));
			core = mix(vec3(0.35, 0.40, 0.85), core, smoothstep(0.02, 0.18, y));   // blue at the root
			gl_FragColor = vec4(core * a * 3.2 * v_fl, 1.0);
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(u=>{if(!u.ok)throw new Error("Could not load piano.bin");return u.arrayBuffer()}).then(u=>{let v=B5(u);h=e({vert:`
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
				}`,attributes:{position:v.pos,normal:v.nrm,mat:v.mat},elements:v.idx,cull:{enable:!1}})}).catch(u=>console.error(u));function d(u){let v=u&&u.reflected;c(),l(),f(),h&&h(),v||(p({halo:1}),p({halo:0}))}return d};_r.exports.C=ct;_r.exports.R=Lt;_r.exports.PASS=We;_r.exports.SURR=Zr;_r.exports.OFF=el;_r.exports.BAY=Vo;_r.exports.PATH=Jc;_r.exports.PIANO=zn;_r.exports.roomGLSL=Ap;_r.exports.segments=U5});var Fp=ve((FE,Op)=>{"use strict";var W5=pi(),{addFlutedColumn:kp,addStatue:V5,addPlant:X5}=op(),Lp=vi(),Y5=y0(),Gr=Un(),K5=Fr(),k0=tl(),Wt=14,Yo=Gr.C.hallEnd+.35,xo=8,ao=.35,xh=1.15,yh=1.15,bh=[18,29,40],Q5=[[[0,0],[0,k0.PASS.z0]],[[0,k0.PASS.z1],[0,Yo]],[[Wt,Yo],[Wt,0]],[[0,0],[Wt,0]],[[Wt,Yo],[0,Yo]]],Np=[];for(let e of bh)for(let t of[1.25,Wt-1.25]){let o=xh/2,n=yh/2;Np.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var nl=12,Pp=2.95,Ip=.62,il=Pp+Ip,rl=[{file:"venus.bin",x:1.85,z:Yo-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Wt-2.1,z:Yo-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Gr.NICHE_X[0],z:Gr.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Gr.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Gr.NICHE_X[1],z:Gr.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Gr.NICHE_PLINTH_TOP,mat:3}],Z5={x0:ao,x1:3.15,z0:3.6,z1:8.2,top:1},zp=.8,sl=1.17,Ls=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{Ls.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),Ls.push({x:Wt-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function wh(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var cl=[];for(let e of[-1,1])cl.push(...wh(Wt/2+e*il,nl,.85,.85));for(let e of rl.filter(t=>t.pedestal))cl.push(...wh(e.x,e.z,sl*1.1,sl*1.1));for(let e of Ls)cl.push(...wh(e.x,e.z,.42,.42));var J5=Q5.concat(Np,cl,k0.segments());function ew(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let l=a;l<=i;l++)for(let f=s;f<=c;f++)n(l,f,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let l=-1;l<=1;l++)for(let f=-1;f<=1;f++){let p=o.get(i+l+":"+(s+f));p&&c.push(...p)}return[...new Set(c)]}}}var al=[],Xo={curMat:[0,0,0]};function _h(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=Xo.curMat;return al.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function ro(e,t,o,n,r,a,i,s,c){let l=(f,p,h,d,u)=>{o.push(..._h(e,t,f,p,h,d,u))};l([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),l([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),l([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),l([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),l([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),l([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function T0(e,t,o,n,r){let a=Xo,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),l=a.vert(n,r);a.tri(i,s,c),a.tri(s,l,c)}function Cp(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,f=Math.cos(c),p=Math.sin(c),h=Math.cos(l),d=Math.sin(l),u=[e+o*f,t+o*p],v=[e+o*h,t+o*d],m=[e+n*f,t+n*p],g=[e+n*h,t+n*d];T0([u[0],u[1],r],[v[0],v[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),T0([u[0],u[1],a],[v[0],v[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+l)/2;T0([u[0],u[1],r],[v[0],v[1],r],[u[0],u[1],a],[v[0],v[1],a],[-Math.cos(y),-Math.sin(y),0]),T0([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function tw(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,f=e+o*Math.cos(c),p=t+o*Math.sin(c),h=e+o*Math.cos(l),d=t+o*Math.sin(l);T0([f,p,r],[h,d,r],[f,n,r],[h,n,r],[0,0,-1]),T0([f,p,a],[h,d,a],[f,n,a],[h,n,a],[0,0,1])}}function ow(e,t,o,n){let r=Wt/2,a=Pp,i=3,s=a+.42,c=s+.15,l=Ip,f=il,p=5.98,h=n-.45,d=n+.45,u=64,v=kp(Xo,r-f,n,0,p,l);kp(Xo,r+f,n,0,p,l),Xo.curMat=[0,0,0],Cp(r,i,a,s,h,d,u),Cp(r,i,s,c,h-.07,d+.07,u),tw(r,i,c,v+.05,h,d,u);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*f;ro(e,t,o,Math.min(y,b),i,h,Math.max(y,b),v+.05,d)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);ro(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=f+l*1.42+.45;ro(e,t,o,r-m,v,n-.7,r+m,v+.44,n+.7),ro(e,t,o,r-m+.12,v+.44,n-.62,r+m-.12,v+.7,n+.62),ro(e,t,o,r-m-.1,v+.7,n-.84,r+m+.1,v+.84,n+.84),ro(e,t,o,r-m-.22,v+.84,n-.96,r+m+.22,v+1,n+.96),ro(e,t,o,r-.3,i+a-.1,n-.56,r+.3,v,n+.56)}function Rp(e,t,o,n,r){ro(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),ro(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),ro(e,t,o,n-xh/2,.4,r-yh/2,n+xh/2,xo-1.35,r+yh/2),ro(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),ro(e,t,o,n-.67,xo-1.58,r-.67,n+.67,xo-1.35,r+.67),ro(e,t,o,n-.82,xo-1.35,r-.82,n+.82,xo-1.05,r+.82),ro(e,t,o,n-.66,xo-1.05,r-.66,n+.66,xo-.78,r+.66),ro(e,t,o,n-.92,xo-.78,r-.92,n+.92,xo-.55,r+.92),ro(e,t,o,n-.78,xo-.55,r-.78,n+.78,xo-.3,r+.78),ro(e,t,o,n-.92,xo-.3,r-.92,n+.92,xo-.1,r+.92)}function ol(e,t,o,n,r){r==="left"?(ro(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),ro(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(ro(e,t,o,Wt-.14,1,n-3.8/2,Wt+.08,5.7,n+3.8/2),ro(e,t,o,Wt-.18,1+.18,n-3.8/2+.18,Wt+.08+.04,5.7-.18,n+3.8/2-.18))}function nw(e,t,o,n){ro(e,t,o,.65,xo-.16,n-1.65,.65+.22,xo,n+1.65),ro(e,t,o,Wt-.65-.22,xo-.16,n-1.65,Wt-.65,xo,n+1.65),ro(e,t,o,.65,xo-.16,n-1.65,Wt-.65,xo,n-1.43),ro(e,t,o,.65,xo-.16,n+1.43,Wt-.65,xo,n+1.65),o.push(..._h(e,t,[.65+.22,xo-.16,n-1.43],[Wt-.65-.22,xo-.16,n-1.43],[.65+.22,xo-.16,n+1.43],[Wt-.65-.22,xo-.16,n+1.43],[0,-1,0]))}Op.exports=function(){let e=[],t=[],o=[];al=[],Xo=W5.createBuilder(e,t,o,al),o.push(..._h(e,t,[0,0,0],[Wt,0,0],[0,0,Yo],[Wt,0,Yo],[0,1,0])),Y5.addSkylight(Xo,[0,0,0],Yo),Xo.curMat=[0,0,0];{let c=k0.SURR;ro(e,t,o,-ao,0,0,ao,xo,c.z0),ro(e,t,o,-ao,0,c.z1,ao,xo,Yo),ro(e,t,o,-ao,c.top,c.z0,ao,xo,c.z1)}ro(e,t,o,Wt-ao,0,Gr.C.z1,Wt+ao,xo,Yo-ao),ro(e,t,o,Wt-ao-.12,0,Gr.C.z1+2*ao,Wt-ao,.42,Yo-ao),ro(e,t,o,Wt-ao-.07,.42,Gr.C.z1+2*ao,Wt-ao,.5,Yo-ao);for(let[c,l]of[[0,k0.SURR.z0],[k0.SURR.z1,Yo-ao]])ro(e,t,o,ao,0,c,ao+.12,.42,l),ro(e,t,o,ao,.42,c,ao+.07,.5,l);ro(e,t,o,ao,0,Yo-ao-.12,Wt-ao,.42,Yo-ao),ro(e,t,o,ao,.42,Yo-ao-.07,Wt-ao,.5,Yo-ao),Lp.addEntranceWall(Xo),Lp.addFrames(Xo),Xo.curMat=[0,0,0],ro(e,t,o,-ao,0,Yo-ao,Wt+ao,xo,Yo+ao),ow(e,t,o,nl);for(let c of bh)Rp(e,t,o,1.25,c),Rp(e,t,o,Wt-1.25,c);ol(e,t,o,22,"left"),ol(e,t,o,25,"right"),ol(e,t,o,33,"left"),ol(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)nw(e,t,o,c);Gr.addWing(Xo),Xo.curMat=[0,0,0];for(let c of rl.filter(l=>l.pedestal))V5(Xo,c.x,c.z,sl,zp);{let c=Z5;Xo.curMat=[0,0,0],Xo.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Xo.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Xo.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Xo.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}K5.addAlcove(Xo);for(let c of Ls)X5(Xo,c.x,c.z,c.seed,1,c.away);Xo.curMat=[0,0,0];let r=[[[Wt,Yo-.35],[0,Yo-.35]],[[0,3],[0,10]],[[Wt,15],[Wt,22]],[[0,24],[0,31]],[[Wt,33],[Wt,40]],[[0,41],[0,46]]],a=ew(J5),i=(c,l)=>{let f=0,p=1/0;return r.forEach((h,d)=>{let u=(h[0][0]+h[1][0])/2,v=(h[0][1]+h[1][1])/2,m=Math.hypot(c-u,l-v);m<p&&(p=m,f=d)}),f},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:rl,occluders:[...bh.flatMap(c=>[[1.25,c,.78],[Wt-1.25,c,.78]]),[Wt/2-il,nl,.86],[Wt/2+il,nl,.86],...rl.filter(c=>c.pedestal).map(c=>[c.x,c.z,sl*1.12]),...Ls.map(c=>[c.x,c.z,.34])],pedestalTop:zp,mat:al,getAreaIndex:i,getGridSegments:(c,l)=>a.get(c,l),getGridParts:(c,l)=>a.get(c,l),position:e,normal:t,elements:o}}});var Mh=ve((GE,Gp)=>{"use strict";var{doorLightGLSL:rw}=vi(),{skylightGLSL:aw}=y0(),{windowLightGLSL:iw,C:fr}=Un(),{alcoveLightGLSL:sw}=Fr(),Mr=e=>e.toFixed(4),cw=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();Gp.exports=(e,t,o)=>{let r=(t.occluders||[]).slice(0,24).map(([h,d,u])=>`ao = min(ao, contact(v_pos.xz, vec2(${h.toFixed(3)}, ${d.toFixed(3)}), ${u.toFixed(3)}));`).join(`
      `),a={c:[0,0,0,0],d:[1,0,0,0]},i=-1,s=[],c=h=>{let d=h&&h.tick!==void 0?h.tick:0;if(d!==i||s.length===0){i=d;let u=t.viewer||[7,2,20];for(s=t.lights.filter(v=>v.c[3]>.5).map(v=>({l:v,d:Math.hypot(v.c[0]-u[0],v.c[2]-u[2])})).sort((v,m)=>v.d-m.d).slice(0,8).map(v=>v.l);s.length<8;)s.push(a)}return s},l={},f="",p="";for(let h=0;h<8;h++)l["lightC"+h]=d=>c(d)[h].c,l["lightD"+h]=d=>c(d)[h].d,f+="uniform vec4 lightC"+h+", lightD"+h+`;
`,p+="pic += pictureLight(lightC"+h+", lightD"+h+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Ra().lanternGLSL()}

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

    ${rw()}

    ${aw()}

    ${iw()}

    ${sw()}

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
        step(abs(v_pos.z - ${Mr(fr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Mr((fr.z0+fr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Mr(fr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${cw}));
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
      light += sun * 0.85 * mix(1.0, 1.25, night) + glow * 0.05 * (1.0 - isCeiling) * mix(1.0, 1.1, night);
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
      light += winL * 0.48 * mix(1.0, 1.0, night) + cg * 0.16 * (1.0 - 0.4 * isCeiling) * mix(1.0, 0.7, night);

      // the little lamps in the statue niches
      float nl = nicheLight(v_pos, N);
      light += nl * 1.1;

      // soft contact shadows where pillars, statues and plants meet the floor
      if (isFloor > 0.5) {
        float ao = 1.0;
        ${r}
        // and a little darker along the foot of the walls
        float wallD = v_pos.x - 0.35;
        if (v_pos.x < 14.0) wallD = min(wallD, ${Mr(fr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Mr(fr.z0)} || v_pos.z > ${Mr(fr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Mr(fr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Mr(fr.z0)}), ${Mr(fr.z1)} - v_pos.z), ${Mr(fr.x1)} - v_pos.x);
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
        if (v_pos.z < ${Mr(fr.z0+.3)} && v_pos.x > ${Mr(fr.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements)})}});var Dp=ve(($E,$p)=>{"strict mode";var lw="https://api.artic.edu/api/v1/artworks/search",fw=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,hw="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",uw="&fields=image_id,title,artist_title",dw={low:400,mid:843,high:1686};$p.exports={fetchList:async function(e,t){let o=lw+hw+uw+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=fw(e,dw[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var jp=ve((DE,Hp)=>{"use strict";var pw=Uf(),vw=Ir(),mw=e=>"images/web/"+e.slug+(vw.isPhone?"-1024":"")+".webp";async function qp(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Hp.exports={fetchList:async function(e,t){return pw.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await qp(mw(e))}catch(o){t=await qp("images/"+e.file)}return{title:e.title,image:t}}}});var Up=ve((qE,Bp)=>{"strict mode";Bp.exports={default:"local",artic:Dp(),local:jp()}});var Sh=ve((HE,Vp)=>{"strict mode";var bi=document.createElement("canvas"),Eh=bi.width=bi.height=1024,Ia=bi.getContext("2d");Ia.mozImageSmoothingEnabled=!1;Ia.webkitImageSmoothingEnabled=!1;Ia.font="32px Verdana";Ia.textBaseline="bottom";Ia.fillStyle="#aaa";function Wp(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),l,f;for(l=f=c.length;e.measureText(r).width>o&&l>1;){l--,r=a="";for(var p=0;p<f;p++)p<l?(r+=c[p],p+1<l&&(r+=" ")):(a+=c[p],p+1<f&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=Wp(e,a,o,n),i>s&&(s=i)),s}Vp.exports={init(e,t,o=Eh){var n=[];Wp(Ia,t,Math.min(o*Eh,Eh),n),Ia.clearRect(0,0,bi.width,bi.height);for(var r=0;r<n.length;r++)Ia.fillText(n[r],0,bi.height-(Math.max(n.length,3)-r)*32);return e({data:bi,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Kp=ve((jE,Yp)=>{"strict mode";var Ah=Up(),gw=new URLSearchParams(window.location.search).get("api"),Xp=Ah[gw]||Ah[Ah.default],xw=Sh(),Th={},z0=[],yw=2;function bw(e){return(!navigator.connection||navigator.connection.downlink<yw)&&(e=e=="high"?"mid":"low"),e}var ww=Ir(),L0=document.createElement("canvas");L0.width=L0.height=ww.isPhone?1024:2048;var zh=L0.getContext("2d");zh.imageSmoothingEnabled=!0;zh.imageSmoothingQuality="high";var kh=!1,_w=e=>[(z0.pop()||e.texture)([[[200,200,200]]]),t=>(z0.pop()||e.texture)([[[0,0,0,0]]]),1];async function Lh(e,t,o){kh===!1&&(kh=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await Xp.fetchImage(t,bw(o));r=a.title,n=await createImageBitmap(a.image),zh.drawImage(n,0,0,L0.width,L0.height)}catch(a){return console.error(a),o=="high"?await Lh(e,t,"low"):_w(e)}return[(z0.pop()||e.texture)({data:L0,min:"mipmap",mipmap:"nice",aniso:kh,flipY:!0}),a=>xw.init(z0.pop()||e.texture,r,a),n.width/n.height]}Yp.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(Th).length;Xp.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(Th[s.image_id]){--t===0&&r();return}Th[s.image_id]=s,Lh(e,s,o).then(([c,l,f])=>{n({...s,tex:c,textGen:l,aspect:f}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,Lh(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(z0.push(e.tex),e.tex=void 0),e.text&&(z0.push(e.text),e.text=void 0)}}});var Zp=ve((BE,Qp)=>{Qp.exports=Mw;function Mw(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var ev=ve((UE,Jp)=>{Jp.exports=Ew;function Ew(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var ov=ve((WE,tv)=>{tv.exports=Sw;function Sw(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Ch=ve((VE,nv)=>{nv.exports=Aw;function Aw(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var av=ve((XE,rv)=>{rv.exports=Tw;function Tw(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var sv=ve((YE,iv)=>{iv.exports=kw;function kw(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],p=t[9],h=t[10],d=t[11],u=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,E=o*l-a*i,k=n*c-r*s,L=n*l-a*s,N=r*l-a*c,H=f*v-p*u,U=f*m-h*u,W=f*g-d*u,Q=p*m-h*v,ie=p*g-d*v,oe=h*g-d*m,ee=y*oe-b*ie+E*Q+k*W-L*U+N*H;return ee?(ee=1/ee,e[0]=(s*oe-c*ie+l*Q)*ee,e[1]=(r*ie-n*oe-a*Q)*ee,e[2]=(v*N-m*L+g*k)*ee,e[3]=(h*L-p*N-d*k)*ee,e[4]=(c*W-i*oe-l*U)*ee,e[5]=(o*oe-r*W+a*U)*ee,e[6]=(m*E-u*N-g*b)*ee,e[7]=(f*N-h*E+d*b)*ee,e[8]=(i*ie-s*W+l*H)*ee,e[9]=(n*W-o*ie-a*H)*ee,e[10]=(u*L-v*E+g*y)*ee,e[11]=(p*E-f*L-d*y)*ee,e[12]=(s*U-i*Q-c*H)*ee,e[13]=(o*Q-n*U+r*H)*ee,e[14]=(v*b-u*k-m*y)*ee,e[15]=(f*k-p*b+h*y)*ee,e):null}});var lv=ve((KE,cv)=>{cv.exports=Lw;function Lw(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],p=t[9],h=t[10],d=t[11],u=t[12],v=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-d*m)-p*(c*g-l*m)+v*(c*d-l*h),e[1]=-(n*(h*g-d*m)-p*(r*g-a*m)+v*(r*d-a*h)),e[2]=n*(c*g-l*m)-s*(r*g-a*m)+v*(r*l-a*c),e[3]=-(n*(c*d-l*h)-s*(r*d-a*h)+p*(r*l-a*c)),e[4]=-(i*(h*g-d*m)-f*(c*g-l*m)+u*(c*d-l*h)),e[5]=o*(h*g-d*m)-f*(r*g-a*m)+u*(r*d-a*h),e[6]=-(o*(c*g-l*m)-i*(r*g-a*m)+u*(r*l-a*c)),e[7]=o*(c*d-l*h)-i*(r*d-a*h)+f*(r*l-a*c),e[8]=i*(p*g-d*v)-f*(s*g-l*v)+u*(s*d-l*p),e[9]=-(o*(p*g-d*v)-f*(n*g-a*v)+u*(n*d-a*p)),e[10]=o*(s*g-l*v)-i*(n*g-a*v)+u*(n*l-a*s),e[11]=-(o*(s*d-l*p)-i*(n*d-a*p)+f*(n*l-a*s)),e[12]=-(i*(p*m-h*v)-f*(s*m-c*v)+u*(s*h-c*p)),e[13]=o*(p*m-h*v)-f*(n*m-r*v)+u*(n*h-r*p),e[14]=-(o*(s*m-c*v)-i*(n*m-r*v)+u*(n*c-r*s)),e[15]=o*(s*h-c*p)-i*(n*h-r*p)+f*(n*c-r*s),e}});var hv=ve((QE,fv)=>{fv.exports=zw;function zw(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],l=e[8],f=e[9],p=e[10],h=e[11],d=e[12],u=e[13],v=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,E=o*s-n*i,k=o*c-r*i,L=n*c-r*s,N=l*u-f*d,H=l*v-p*d,U=l*m-h*d,W=f*v-p*u,Q=f*m-h*u,ie=p*m-h*v;return g*ie-y*Q+b*W+E*U-k*H+L*N}});var dv=ve((ZE,uv)=>{uv.exports=Cw;function Cw(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],l=t[6],f=t[7],p=t[8],h=t[9],d=t[10],u=t[11],v=t[12],m=t[13],g=t[14],y=t[15],b=o[0],E=o[1],k=o[2],L=o[3];return e[0]=b*n+E*s+k*p+L*v,e[1]=b*r+E*c+k*h+L*m,e[2]=b*a+E*l+k*d+L*g,e[3]=b*i+E*f+k*u+L*y,b=o[4],E=o[5],k=o[6],L=o[7],e[4]=b*n+E*s+k*p+L*v,e[5]=b*r+E*c+k*h+L*m,e[6]=b*a+E*l+k*d+L*g,e[7]=b*i+E*f+k*u+L*y,b=o[8],E=o[9],k=o[10],L=o[11],e[8]=b*n+E*s+k*p+L*v,e[9]=b*r+E*c+k*h+L*m,e[10]=b*a+E*l+k*d+L*g,e[11]=b*i+E*f+k*u+L*y,b=o[12],E=o[13],k=o[14],L=o[15],e[12]=b*n+E*s+k*p+L*v,e[13]=b*r+E*c+k*h+L*m,e[14]=b*a+E*l+k*d+L*g,e[15]=b*i+E*f+k*u+L*y,e}});var vv=ve((JE,pv)=>{pv.exports=Rw;function Rw(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,l,f,p,h,d,u,v,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],l=t[3],f=t[4],p=t[5],h=t[6],d=t[7],u=t[8],v=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=l,e[4]=f,e[5]=p,e[6]=h,e[7]=d,e[8]=u,e[9]=v,e[10]=m,e[11]=g,e[12]=i*n+f*r+u*a+t[12],e[13]=s*n+p*r+v*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=l*n+d*r+g*a+t[15]),e}});var gv=ve((eS,mv)=>{mv.exports=Nw;function Nw(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var yv=ve((tS,xv)=>{xv.exports=Pw;function Pw(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,l,f,p,h,d,u,v,m,g,y,b,E,k,L,N,H,U,W,Q,ie,oe,ee,Te;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),l=Math.cos(o),f=1-l,p=t[0],h=t[1],d=t[2],u=t[3],v=t[4],m=t[5],g=t[6],y=t[7],b=t[8],E=t[9],k=t[10],L=t[11],N=r*r*f+l,H=a*r*f+i*c,U=i*r*f-a*c,W=r*a*f-i*c,Q=a*a*f+l,ie=i*a*f+r*c,oe=r*i*f+a*c,ee=a*i*f-r*c,Te=i*i*f+l,e[0]=p*N+v*H+b*U,e[1]=h*N+m*H+E*U,e[2]=d*N+g*H+k*U,e[3]=u*N+y*H+L*U,e[4]=p*W+v*Q+b*ie,e[5]=h*W+m*Q+E*ie,e[6]=d*W+g*Q+k*ie,e[7]=u*W+y*Q+L*ie,e[8]=p*oe+v*ee+b*Te,e[9]=h*oe+m*ee+E*Te,e[10]=d*oe+g*ee+k*Te,e[11]=u*oe+y*ee+L*Te,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var wv=ve((oS,bv)=>{bv.exports=Iw;function Iw(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],l=t[8],f=t[9],p=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+l*n,e[5]=i*r+f*n,e[6]=s*r+p*n,e[7]=c*r+h*n,e[8]=l*r-a*n,e[9]=f*r-i*n,e[10]=p*r-s*n,e[11]=h*r-c*n,e}});var Mv=ve((nS,_v)=>{_v.exports=Ow;function Ow(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],l=t[8],f=t[9],p=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-l*n,e[1]=i*r-f*n,e[2]=s*r-p*n,e[3]=c*r-h*n,e[8]=a*n+l*r,e[9]=i*n+f*r,e[10]=s*n+p*r,e[11]=c*n+h*r,e}});var Sv=ve((rS,Ev)=>{Ev.exports=Fw;function Fw(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],l=t[4],f=t[5],p=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+l*n,e[1]=i*r+f*n,e[2]=s*r+p*n,e[3]=c*r+h*n,e[4]=l*r-a*n,e[5]=f*r-i*n,e[6]=p*r-s*n,e[7]=h*r-c*n,e}});var Tv=ve((aS,Av)=>{Av.exports=Gw;function Gw(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],l=Math.sqrt(i*i+s*s+c*c);return Math.abs(l)<1e-6?null:(l=1/l,i*=l,s*=l,c*=l,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var Lv=ve((iS,kv)=>{kv.exports=$w;function $w(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,l=a+a,f=n*s,p=n*c,h=n*l,d=r*c,u=r*l,v=a*l,m=i*s,g=i*c,y=i*l;return e[0]=1-(d+v),e[1]=p+y,e[2]=h-g,e[3]=0,e[4]=p-y,e[5]=1-(f+v),e[6]=u+m,e[7]=0,e[8]=h+g,e[9]=u-m,e[10]=1-(f+d),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var Cv=ve((sS,zv)=>{zv.exports=Dw;function Dw(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Nv=ve((cS,Rv)=>{Rv.exports=qw;function qw(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var Iv=ve((lS,Pv)=>{Pv.exports=Hw;function Hw(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Fv=ve((fS,Ov)=>{Ov.exports=jw;function jw(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var $v=ve((hS,Gv)=>{Gv.exports=Bw;function Bw(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var qv=ve((uS,Dv)=>{Dv.exports=Uw;function Uw(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,l=o*i,f=n*i,p=n*s,h=r*i,d=r*s,u=r*c,v=a*i,m=a*s,g=a*c;return e[0]=1-p-u,e[1]=f+g,e[2]=h-m,e[3]=0,e[4]=f-g,e[5]=1-l-u,e[6]=d+v,e[7]=0,e[8]=h+m,e[9]=d-v,e[10]=1-l-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var jv=ve((dS,Hv)=>{Hv.exports=Ww;function Ww(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),l=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*l,e[15]=0,e}});var Uv=ve((pS,Bv)=>{Bv.exports=Vw;function Vw(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var Vv=ve((vS,Wv)=>{Wv.exports=Xw;function Xw(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),l=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*l*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var Yv=ve((mS,Xv)=>{Xv.exports=Yw;function Yw(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),l=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*l,e[15]=1,e}});var Qv=ve((gS,Kv)=>{var Kw=Ch();Kv.exports=Qw;function Qw(e,t,o,n){var r,a,i,s,c,l,f,p,h,d,u=t[0],v=t[1],m=t[2],g=n[0],y=n[1],b=n[2],E=o[0],k=o[1],L=o[2];return Math.abs(u-E)<1e-6&&Math.abs(v-k)<1e-6&&Math.abs(m-L)<1e-6?Kw(e):(f=u-E,p=v-k,h=m-L,d=1/Math.sqrt(f*f+p*p+h*h),f*=d,p*=d,h*=d,r=y*h-b*p,a=b*f-g*h,i=g*p-y*f,d=Math.sqrt(r*r+a*a+i*i),d?(d=1/d,r*=d,a*=d,i*=d):(r=0,a=0,i=0),s=p*i-h*a,c=h*r-f*i,l=f*a-p*r,d=Math.sqrt(s*s+c*c+l*l),d?(d=1/d,s*=d,c*=d,l*=d):(s=0,c=0,l=0),e[0]=r,e[1]=s,e[2]=f,e[3]=0,e[4]=a,e[5]=c,e[6]=p,e[7]=0,e[8]=i,e[9]=l,e[10]=h,e[11]=0,e[12]=-(r*u+a*v+i*m),e[13]=-(s*u+c*v+l*m),e[14]=-(f*u+p*v+h*m),e[15]=1,e)}});var Jv=ve((xS,Zv)=>{Zv.exports=Zw;function Zw(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var C0=ve((yS,em)=>{em.exports={create:Zp(),clone:ev(),copy:ov(),identity:Ch(),transpose:av(),invert:sv(),adjoint:lv(),determinant:hv(),multiply:dv(),translate:vv(),scale:gv(),rotate:yv(),rotateX:wv(),rotateY:Mv(),rotateZ:Sv(),fromRotation:Tv(),fromRotationTranslation:Lv(),fromScaling:Cv(),fromTranslation:Nv(),fromXRotation:Iv(),fromYRotation:Fv(),fromZRotation:$v(),fromQuat:qv(),frustum:jv(),perspective:Uv(),perspectiveFromFieldOfView:Vv(),ortho:Yv(),lookAt:Qv(),str:Jv()}});var nm=ve((bS,om)=>{"use strict";var tm=Kp(),Do=C0(),wi=Un(),Jw=3e3,ll="high",Rh,Cs=.36,Rs=13.64,R0=wi.C.hallEnd-.01,Ns=wi.C.z0+.01,e4=.356,t4=13.644,o4=wi.C.hallEnd-.006,n4=wi.C.z0+.006,r4=.12,hl=4,N0=e=>Cn[e]&&Cn[e].cy||hl,Nh=.26,a4=5.6,i4=7,Cn=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:R0},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:wi.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:wi.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:wi.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function s4(e,t){let o=t&&t.maxH||a4,n=t&&t.maxW||i4,r=Math.min(o,n/e);return{width:r*e,height:r}}function c4(e,t,o){let n=Cn[o],r=[],a=N0(o)-t/2;return n.side==="left"?(Do.fromTranslation(r,[Cs,a,n.z+e/2]),Do.rotateY(r,r,Math.PI/2)):n.side==="right"?(Do.fromTranslation(r,[Rs,a,n.z-e/2]),Do.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Do.fromTranslation(r,[n.x-e/2,a,Ns]):(Do.fromTranslation(r,[7+e/2,a,R0]),Do.rotateY(r,r,Math.PI)),Do.scale(r,r,[e,t,r4]),r}function l4(e,t,o){let n=Cn[o],r=[],a=N0(o)-t/2;return n.side==="left"?(Do.fromTranslation(r,[Cs,a,n.z+e/2]),Do.rotateY(r,r,Math.PI/2)):n.side==="right"?(Do.fromTranslation(r,[Rs,a,n.z-e/2]),Do.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Do.fromTranslation(r,[n.x-e/2,a,Ns]):(Do.fromTranslation(r,[7+e/2,a,R0]),Do.rotateY(r,r,Math.PI)),r}function f4(e,t,o){let n=Cn[o],r=[],a=N0(o)-t/2-Nh-.38;return n.side==="left"?(Do.fromTranslation(r,[e4,a,n.z+e/2]),Do.rotateY(r,r,Math.PI/2)):n.side==="right"?(Do.fromTranslation(r,[t4,a,n.z-e/2]),Do.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Do.fromTranslation(r,[n.x-e/2,a,n4]):(Do.fromTranslation(r,[7+e/2,a,o4]),Do.rotateY(r,r,Math.PI)),Do.scale(r,r,[2,2,2]),r}function h4(e,t,o){let n=Cn[o],r=N0(o)-t/2-Nh-.38;return n.side==="left"?[Cs+.55,r,n.z]:n.side==="right"?[Rs-.55,r,n.z]:n.side==="corridor"?[n.x,r,Ns+.55]:[7,r,R0-.55]}var zs=.42;function fl(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function u4(e,t,o){let n=Cn[o],r,a,i;n.side==="left"?(r=[Cs,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[Rs,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,Ns],a=[1,0,0],i=[0,0,1]):(r=[7,R0],a=[1,0,0],i=[0,0,-1]);let s=N0(o)+t/2+Nh+.3,c=Math.min(2.4,Math.max(.9,e*.55)),l=(d,u)=>[r[0]+i[0]*d,u,r[1]+i[2]*d],f=[.075,.062,.05],p=[{fixmodel:fl(l(.014,s),a,i,.1,.13,.028),fixcol:f,fixglow:0},{fixmodel:fl(l(zs/2,s),a,i,.02,.02,zs),fixcol:f,fixglow:0},{fixmodel:fl(l(zs,s),a,i,c,.034,.05),fixcol:f,fixglow:0},{fixmodel:fl(l(zs-.012,s-.019),a,i,c*.94,.006,.028),fixcol:f,fixglow:1}],h=l(zs,s-.02);return{fixtures:p,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}om.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!Cn[i])return;let{width:s,height:c}=s4(a.aspect,Cn[i]),l=u4(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=l.light),o.push({...a,fixtures:l.fixtures,side:Cn[i].side,model:c4(s,c,i),framemodel:l4(s,c,i),framesize:[s,c],textmodel:f4(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:h4(s,c,i),paintingPosition:Cn[i].side==="left"?[Cs+.05,hl,Cn[i].z]:Cn[i].side==="right"?[Rs-.05,hl,Cn[i].z]:Cn[i].side==="corridor"?[Cn[i].x,N0(i),Ns+.05]:[7,hl,R0-.05],textGen:null})};return tm.fetch(e,Cn.length,ll,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{tm.load(e,a,ll)}),ll="low",Rh&&clearTimeout(Rh),Rh=setTimeout(()=>{ll="high"},Jw)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var sm=ve((wS,im)=>{"use strict";var d4=Sh(),rm=Ir(),am=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function p4(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];am.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<am.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,l=(n+1)*4+a;o.push(i,s,l,i,l,c)}return{verts:t,elems:o}}var v4=`#extension GL_OES_standard_derivatives : enable
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
}`,m4=`
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
}`;im.exports=e=>{let t=d4.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Ra().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(rm.isPhone?1024:2048),detail:()=>rm.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=p4(),r=e({frag:v4,vert:m4,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var lm=ve((_S,cm)=>{"use strict";var g4=Mh();function x4(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let p=0;p<3;p++)a.push(t.getFloat32(12+p*4,!0)),i.push(t.getFloat32(24+p*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let l=new Uint16Array(e,s,r);s+=r*2;let f=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:l,nrm:f}}cm.exports=(e,t)=>{let o=[],n=[],r=[],a=[],i=null,s=t.statues.length,c=(f,p)=>{let h=o.length/3,d=p.height,u=Math.cos(p.yaw),v=Math.sin(p.yaw),m=p.base!==void 0?p.base:t.pedestalTop;for(let g=0;g<f.nV;g++){let y=(f.mn[0]+f.pos[g*3]/65535*f.sz[0])*d,b=(f.mn[1]+f.pos[g*3+1]/65535*f.sz[1])*d,E=(f.mn[2]+f.pos[g*3+2]/65535*f.sz[2])*d;o.push(p.x+u*y+v*E,m+b,p.z-v*y+u*E);let k=f.nrm[g*3]/127,L=f.nrm[g*3+1]/127,N=f.nrm[g*3+2]/127;n.push(u*k+v*N,L,-v*k+u*N),r.push(p.mat||1,0,0)}for(let g=0;g<f.nI;g++)a.push(h+f.idx[g])},l=()=>{a.length!==0&&(i=g4(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1))};return t.statues.forEach(f=>{fetch("res/"+f.file).then(p=>{if(!p.ok)throw new Error("Could not load "+f.file);return p.arrayBuffer()}).then(p=>c(x4(p),f)).catch(p=>console.error(p)).then(()=>{--s===0&&l()})}),function(){i&&i()}}});var bm=ve((MS,Ih)=>{"use strict";var y4=pi(),ln=1.29032,Mi=[9.2968,2,5.9],b4=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],ul=2147.64,fm=725,hm=1288,um=1450,dm=2576,or=-5.197,Si=3.865,Oa=10.135,Ai=-14.679,Ps=-30.229,Is=7.232,pm=-45.713,P0=17.1*ln,Ei=16.6*ln,Os=16.6*ln,vm=[6.9,17.1],dl=[2.95,16.6],w4=1.6,_4=0,M4=1,mm=2,Ph=3,gm=4,xm=5,E4=6;function S4(){let e=[],t=[],o=[],n=[],r=y4.createBuilder(e,t,o,n),a=(l,f,p,h,d,u,v=1,m=1)=>{let g=[];for(let y=0;y<=v;y++){let b=[];for(let E=0;E<=m;E++){let k=[l[0]+f[0]*y/v+p[0]*E/m,l[1]+f[1]*y/v+p[1]*E/m,l[2]+f[2]*y/v+p[2]*E/m],L=u(k);b.push(r.vert(k,h,[d,L[0],L[1]]))}g.push(b)}for(let y=0;y<v;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=l=>f=>[(Mi[2]-f[2])/ln-l,f[1]/ln];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],_4,l=>[l[0]/ln,l[2]/ln],13,14),a([Si,0,or],[0,0,Ai-or],[0,P0,0],[1,0,0],M4,i(8.6),6,6),a([-40,0,or],[Si+40,0,0],[0,P0,0],[0,0,1],mm,l=>[(Si-l[0])/ln,l[1]/ln],8,4),a([-40,0,-.36],[0,0,or+.36],[0,P0,0],[1,0,0],mm,l=>[-l[2]/ln,l[1]/ln]),a([Oa,0,-80],[0,0,or+80],[0,Ei,0],[-1,0,0],gm,i(8.6),12,6),a([Oa,0,or],[60,0,0],[0,Ei,0],[0,0,1],xm,l=>[(l[0]-Oa)/ln,l[1]/ln],8,4),a([70,0,or],[0,0,-.36-or],[0,Ei,0],[-1,0,0],xm,l=>[-l[2]/ln,l[1]/ln]);let s=l=>[(l[0]-Mi[0])/ln+4.18,l[1]/ln];a([-20,0,Ps],[Is+20,0,0],[0,Os,0],[0,0,1],Ph,s,8,6),a([Is,0,Ps],[0,0,pm-Ps],[0,Os,0],[1,0,0],Ph,i(28),4,4),a([Is,0,pm],[Oa-Is,0,0],[0,Ei,0],[0,0,1],gm,l=>[(l[0]-Mi[0])/ln,l[1]/ln],2,4),a([-20,0,Ai],[0,0,Ps-Ai],[0,Os,0],[1,0,0],Ph,i(16),4,4);let c=(l,f,p,h)=>a(l,f,p,h,E4,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function _i(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var $r=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",A4=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Ai],[Si,P0,or]],[[Oa,0,-80],[70,Ei,or]],[[-20,0,-80],[Is,Os,Ps]],[[-40,0,-80],[-20,Os,Ai]]],T4=A4.map(e=>`if (hitBox(ro, rd, ${$r(e[0])}, ${$r(e[1])}, 1e4) ) return 0.0;`).join(`
		`),ym="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>b4[t][e].toFixed(6)).join(", ")).join(", ")+")",k4=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${$r([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${T4}
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
	vec3 ro = ${$r(Mi)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${$r([-40,0,Ai])}, ${$r([Si-.02,P0,or])}, 0.995)) return false;
	if (hitBox(ro, rd, ${$r([Oa+.02,0,-80])}, ${$r([70,Ei,or])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${ym} * (p - ${$r(Mi)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${fm.toFixed(2)} + ${ul.toFixed(3)} * pc.x / pc.z) / ${um.toFixed(1)},
		(${hm.toFixed(2)} - ${ul.toFixed(3)} * pc.y / pc.z) / ${dm.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${ym} * (p - ${$r(Mi)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${fm.toFixed(2)} + ${ul.toFixed(3)} * pc.x / pc.z) / ${um.toFixed(1)},
		(${hm.toFixed(2)} - ${ul.toFixed(3)} * pc.y / pc.z) / ${dm.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${$r(Mi)}), n));
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
		base = texture2D(cobbleTex, fuv / ${w4.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${vm[0].toFixed(2)}, 1.0 - fuv.y / ${vm[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${dl[0].toFixed(2)}, 1.0 - fuv.y / ${dl[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${dl[0].toFixed(2)}, 1.0 - fuv.y / ${dl[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Si-.05).toFixed(3)} && v_pos.x < ${(Oa+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Ai.toFixed(3)};
		projectable = projectable && v_pos.z < ${(or+4.5).toFixed(3)};
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
}`,L4=`
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
}`,z4=Ln();Ih.exports=e=>{let t=S4(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=_i(e,"res/street/photo.jpg",o,[190,160,120]),i=_i(e,"res/street/photo_night.jpg",o,[12,14,22]),s=_i(e,"res/street/photo_mask.png",o,[255,255,255]),c=_i(e,"res/street/facade_pink.jpg",n,[200,150,135]),l=_i(e,"res/street/facade_yellow.jpg",n,[225,180,95]),f=_i(e,"res/street/facade_cream.jpg",n,[215,200,175]),p=_i(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),d=e({frag:k4,vert:L4,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:l,creamTex:f,cobbleTex:p,photoNight:i,night:()=>z4.night,time:()=>(Date.now()-h)/1e3}});return function(){d()}};Ih.exports.layout={MOUTH_Z:or,PINK_X:Si,RIGHT_X:Oa,PINK_H:P0,CREAM_H:Ei,S:ln}});var Mm=ve((ES,_m)=>{"use strict";var C4=Ln().GLSL,{glassPanes:R4}=vi(),wm=Un();function N4(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(R4(),[0,0,1]),o(wm.windowGlass(),[0,0,1]),o(wm.farDoorGlass(),[1,0,0]),{position:e,normal:t}}_m.exports=e=>{let t=N4(),o=e({frag:`
		precision highp float;
		${C4}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var Dm=ve((SS,Dh)=>{"use strict";var Lm=Ln().GLSL,P4=pi(),Oh=Ir(),{wallWithHoles:I4,C:$a}=Un(),Ke=.28,X={westBack:14.4,westCol:15-Ke,eastCol:37.4+Ke,eastBack:41.8,south:$a.z1+.7,northCol:$a.z1+.7+16,northBack:$a.z1+.7+19,cx:(15+37.4)/2,cz:($a.z1+.7+$a.z1+.7+16-Ke)/2},fo={x0:X.westCol+Ke,x1:X.eastCol-Ke,z0:X.south,z1:X.northCol-Ke},In=3.3,$s=.92,Da=5.6,Em=6,Er=11.9,Ga=9.6,$t={x0:X.cx-2.9,x1:X.cx+2.9,top:14.4},bl=7,zm=4,Gh=(X.eastCol-X.westCol)/bl,O4=(X.northCol-X.south)/zm,Cm=3,qs=.26,zi=1.4,ki=1.1,vl=3,Jr=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),$e={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},ea=[],Rm=(e,t,o)=>[X.cx+e,t,X.cz+o],ml=Rm(-5.9,0,3.4),qa=.85,Fa={c:[ml[0],4.6*qa+.5,ml[2]],r:[5*qa,3.6*qa,4.5*qa]},Nm=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[ml[0]+e.d[0]*qa,e.d[1]*qa+.5,ml[2]+e.d[2]*qa],r:e.r.map(t=>t*qa),n:e.n}));for(let e of Nm)ea.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var F4=[3.6,6.3,9];for(let e of F4){let t=8.6+e%1.7*.6;ea.push({c:Rm(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var G4=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:X.cx+e.d[0],z:X.cz+e.d[1],bloom:e.bloom}));for(let e of G4)ea.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var $h=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[X.cx+Math.cos(t)*2.3,X.cz+Math.sin(t)*2.3]});for(let[e,t]of $h)ea.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Pm=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),l=Math.floor(c/.9);for(let f=0;f<=l;f++){let p=f/l,h=o+(r-o)*p,d=n+(a-n)*p;i!==void 0&&Math.abs((r!==o?h:d)-i)<s||Pm.push([h,d])}};e(fo.x0+.45,fo.z0+1.2,fo.x0+.45,fo.z1-.45,X.cz,1),e(fo.x1-.45,fo.z0+1.2,fo.x1-.45,fo.z1-.45,X.cz,1),e(fo.x0+.45,fo.z1-.45,fo.x1-.45,fo.z1-.45,X.cx,1.9)}var $4=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],gl=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function O0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function fn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function D4(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var q4={north:[e=>[e[0],e[1],X.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[X.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[X.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function Im(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var H4=Im(X.westCol,Gh,bl,Ke+qs,Ke+qs),Sm=Im(X.south,O4,zm,.32,Ke+qs),I0=[X.cx-32.35,X.northCol-77],j4=Array.from({length:bl-1},(e,t)=>X.westCol+(t+1)*Gh),Om=e=>(e[1]-e[0])/2-.2,Ds=e=>(e[0]+e[1])/2;function B4(e,t){let o=Ds(e),n=Om(e);return{u0:e[0],u1:e[1],bottom:t?0:$s,head:r=>{let a=Math.abs(r-o);return a<n?In+Math.sqrt(n*n-a*a):In},step:.05}}function U4(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[$e.STONE,0,0]}}function W4(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[$e.STONE,0,0]}}function Am(e,t,o){let[n,r]=q4[t],a=D4(e,n,r),i=[];o.arches.forEach((f,p)=>i.push(B4(f,p===o.open)));let s=[];for(let f of o.bays||o.arches){let p=Ds(f);o.oculi&&i.push(U4(p,6.85,.3)),s.push({c:p,y0:o.win[0],y1:o.win[1],w:1.05})}for(let f of o.extraWindows||[])s.push(f);for(let f of s)i.push(W4(f.c,f.w,f.y0,f.y1));for(let f of o.extraHoles||[])i.push(f);I4(a,{u0:o.u0,u1:o.u1,w0:-Ke,w1:Ke,top:o.top,holes:i,mat:[$e.BRICK,0,0],revealMat:[$e.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(f,p,h,d,u,v,m)=>{let g=n([f,p,h]),y=n([d,u,v]);fn(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},l=(f,p,h,d,u,v)=>O0(a,f,p,h,d,u,[v,0,0]);for(let f of o.arches){let p=Ds(f),h=Om(f),d=28;for(let u of[Ke,-Ke]){let v=u>0?1:-1,m=u+v*.025;for(let g=0;g<d;g++){let y=Math.PI*g/d,b=Math.PI*(g+1)/d,E=(Q,ie)=>[p+Math.cos(Q)*ie,In+Math.sin(Q)*ie],k=E(y,h),L=E(b,h),N=E(y,h+.26),H=E(b,h+.26);l([k[0],k[1],m],[L[0],L[1],m],[H[0],H[1],m],[N[0],N[1],m],[0,0,v],$e.STONE);let U=Math.cos((y+b)/2),W=Math.sin((y+b)/2);l([N[0],N[1],u],[H[0],H[1],u],[H[0],H[1],m],[N[0],N[1],m],[U,W,0],$e.STONE)}}}if(o.arches.forEach((f,p)=>{p!==o.open&&c(f[0]-.02,$s,-Ke-.05,f[1]+.02,$s+.09,Ke+.05,$e.STONE)}),c(o.u0,Em,-Ke,o.u1,Em+.18,Ke+.09,$e.STONE),c(o.u0,o.win[0]-.12,Ke-.01,o.u1,o.win[0],Ke+.06,$e.STONE),o.cornice)for(let[f,p,h]of o.cornice)c(f,h-.22,Ke-.01,p,h,Ke+.16,$e.STONE),c(f,h,Ke-.01,p,h+.16,Ke+.42,$e.STONE);for(let{c:f,y0:p,y1:h,w:d,door:u}of s){let v=d/2;if(l([f-v-.01,p,.06],[f+v+.01,p,.06],[f+v+.01,h,.06],[f-v-.01,h,.06],[0,0,1],u?$e.DARK:$e.PANE),u){c(f-v-.16,0,Ke-.01,f-v,h+.16,Ke+.07,$e.STONE),c(f+v,0,Ke-.01,f+v+.16,h+.16,Ke+.07,$e.STONE),c(f-v-.16,h,Ke-.01,f+v+.16,h+.2,Ke+.09,$e.STONE),c(f-v,0,.07,f+v,h-.02,.12,$e.SHUTTER),c(f-.012,0,.12,f+.012,h-.02,.14,$e.DARK);continue}for(let m of[-1,1]){let g=f+m*v;c(g+m*.02,p+.02,Ke+.02,g+m*(v+.025),h-.02,Ke+.06,$e.SHUTTER)}c(f-v-.09,h,Ke-.01,f+v+.09,h+.16,Ke+.05,$e.STONE),c(f-v-.09,p-.1,Ke-.01,f+v+.09,p,Ke+.09,$e.STONE),c(f-.015,p,.06,f+.015,h,.09,$e.SHUTTER),c(f-v,(p+h)/2-.015,.06,f+v,(p+h)/2+.015,.09,$e.SHUTTER)}if(o.oculi)for(let f of o.bays||o.arches){let p=Ds(f);l([p-.31,6.54,0],[p+.31,6.54,0],[p+.31,7.16,0],[p-.31,7.16,0],[0,0,1],$e.DARK)}for(let f of o.cols){let p=$s+.09,h=n([f,0,0]);fn(e,h[0]-.24,p,h[2]-.24,h[0]+.24,p+.12,h[2]+.24,$e.MARBLE),e.lathe([[.23,p+.12,1],[.24,p+.17],[.2,p+.24],[.215,p+.28],[.17,p+.34,1],[.165,p+.6],[.155,In-.5],[.15,In-.38,1],[.175,In-.34,1],[.17,In-.3],[.2,In-.22],[.27,In-.15],[.29,In-.12,1]],h[0],h[2],18,{mat:()=>[$e.MARBLE,0,0]}),fn(e,h[0]-.29,In-.12,h[2]-.29,h[0]+.29,In+.01,h[2]+.29,$e.STONE)}o.walk&&o.walk(e)}function V4(e){let t=[-1,0,1].map(r=>{let a=X.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[$e.STONE,0,0]}});Am(e,"north",{u0:X.westCol-Ke,u1:X.eastCol+Ke,top:r=>r>$t.x0+1e-6&&r<$t.x1-1e-6?$t.top:Er,cuts:[$t.x0,$t.x0+1e-5,$t.x1-1e-5,$t.x1],arches:H4,open:Cm,cols:j4,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[X.westCol-Ke-3.3,$t.x0,Er],[$t.x1,X.eastCol+Ke+3.3,Er],[$t.x0-.2,$t.x1+.2,$t.top]],walk:r=>{fn(r,fo.x0,Da,X.northCol+Ke,fo.x1,Da+.2,X.northBack,$e.PLASTER),fn(r,fo.x0,0,X.northBack,fo.x1,Da,X.northBack+.3,$e.PLASTER);for(let a of[X.cx-7.2,X.cx,X.cx+7.2])O0(r,[a-.8,0,X.northBack-.01],[a+.8,0,X.northBack-.01],[a+.8,2.9,X.northBack-.01],[a-.8,2.9,X.northBack-.01],[0,0,-1],[$e.DARK,0,0]),fn(r,a-.98,0,X.northBack-.06,a+.98,3.12,X.northBack,$e.STONE),O0(r,[a-.8,0,X.northBack-.07],[a+.8,0,X.northBack-.07],[a+.8,2.9,X.northBack-.07],[a-.8,2.9,X.northBack-.07],[0,0,-1],[$e.DARK,0,0])}}),O0(e,[$t.x0,11,X.northCol+.2],[$t.x1,11,X.northCol+.2],[$t.x1,13.6,X.northCol+.2],[$t.x0,13.6,X.northCol+.2],[0,0,-1],[$e.DARK,0,0]),fn(e,$t.x0+.3,10.88,X.northCol-Ke-.06,$t.x1-.3,11,X.northCol-Ke+.1,$e.STONE),fn(e,X.westBack,Da+.2,X.northBack,X.eastBack,Er,X.northBack+3.4,$e.BRICK),fn(e,X.westBack,Ga,X.northCol-Ke,X.westCol-Ke,Er,X.northCol+Ke,$e.BRICK),fn(e,X.eastCol+Ke,Ga,X.northCol-Ke,X.eastBack,Er,X.northCol+Ke,$e.BRICK),fn(e,X.westBack,Da+.2,X.northCol+Ke+.12,X.eastBack,Er,X.northBack,$e.BRICK),Fs(e,[X.westBack-.5,Er+.16,X.northCol-Ke-.42],[$t.x0-X.westBack+.5,0,0],[0,2.6,4.4],$e.ROOF),Fs(e,[$t.x1,Er+.16,X.northCol-Ke-.42],[X.eastBack+.5-$t.x1,0,0],[0,2.6,4.4],$e.ROOF),Fs(e,[$t.x0-.3,$t.top+.16,X.northCol-Ke-.42],[$t.x1-$t.x0+.6,0,0],[0,1.4,3],$e.ROOF),Tm(e,[$t.x0-.3,$t.top+.16,X.northCol-Ke-.42],[$t.x0-.3,$t.top+1.56,X.northCol-Ke+2.58],[$t.x0-.3,$t.top+.16,X.northCol-Ke+2.58],[-1,0,0],$e.BRICK),Tm(e,[$t.x1+.3,$t.top+.16,X.northCol-Ke-.42],[$t.x1+.3,$t.top+1.56,X.northCol-Ke+2.58],[$t.x1+.3,$t.top+.16,X.northCol-Ke+2.58],[1,0,0],$e.BRICK),fn(e,$t.x0,Er,X.northCol+Ke,$t.x1,$t.top,X.northCol+2.6,$e.BRICK);for(let[r,a]of[[X.cx-9.8,X.northBack+.6],[X.cx+9.4,X.northBack+.4],[X.cx-4.6,X.northBack+1]])fn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,$e.BRICK),fn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,$e.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];Sm.forEach((p,h)=>{let d=Ds(p);h===1?c.push({c:d,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:d,y0:1,y1:2.75,w:1.05}),c.push({c:d,y0:3.85,y1:5.45,w:1.05})}),Am(e,r,{u0:X.south,u1:X.northCol-Ke,top:()=>Ga,arches:[],bays:Sm,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[X.south,X.northCol-Ke,Ga]]}),fn(e,a,0,X.south,i+s*(Ke+.12),Ga,X.northBack+.3,$e.BRICK);let l=i-s*Ke;fn(e,l,0,X.south,l-s*.06,.55,X.northCol-Ke,$e.STONE);let f=i-s*(Ke+.42);Fs(e,[f,Ga+.16,X.south],[0,0,X.northCol-Ke-X.south],[a-f+s*.4,1.9,0],$e.ROOF)};o("west",X.westBack,X.westCol),o("east",X.eastBack,X.eastCol);let n=$a.x1+.7;fn(e,13.65,7.4,X.south-.02,n,7.62,X.south+.14,$e.STONE),fn(e,13.65,10.4,X.south-.02,n,10.6,X.south+.38,$e.STONE),Fs(e,[13.65,10.6,X.south+.38],[n-13.65,0,0],[0,2.2,-5],$e.ROOF)}function Tm(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function Fs(e,t,o,n,r){let a=gl([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(l=>-l):a,s=(l,f)=>[t[0]+o[0]*l+n[0]*f,t[1]+o[1]*l+n[1]*f,t[2]+o[2]*l+n[2]*f];O0(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;O0(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],gl([-n[0],0,-n[2]]),[r,0,0])}function X4(e){let t=X.westBack,o=X.eastBack,n=X.south,r=X.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let l=0;l<=i;l++){let f=[t+(o-t)*c/a,0,n+(r-n)*l/i];s[c].push(e.vert(f,[0,1,0],[$e.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let l=0;l<i;l++)e.tri(s[c][l],s[c+1][l],s[c+1][l+1]),e.tri(s[c][l],s[c+1][l+1],s[c][l+1])}var Gs=.46,Li=.58,Ti=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function Y4(e,t,o){let n=ki+o,r=(e>0?fo.x1-X.cx:X.cx-fo.x0)-zi-o,a=ki+o,i=(t>0?fo.z1-X.cz:X.cz-fo.z0)-zi-o,s=vl+o,c=Math.sqrt(s*s-n*n),l=Math.sqrt(s*s-a*a),f=[[n,c],[n,i],[r,i],[r,a],[l,a]],p=Math.atan2(a,l),h=Math.atan2(c,n);for(let d=1;d<10;d++){let u=p+(h-p)*d/10;f.push([Math.cos(u)*s,Math.sin(u)*s])}return f.map(([d,u])=>[X.cx+e*d,X.cz+t*u])}function K4(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,l=i,f=Gs*.5,p=-f,h=a+f,d=[],u=Math.max(1,Math.ceil((h-p)/1));for(let v=0;v<=u;v++){let m=p+(h-p)*v/u,g=[];for(let y=0;y<Ti.length;y++){let[b,E]=Ti[y],k=Math.min(Ti.length-2,y),L=Ti[Math.max(0,y-1)],N=Ti[Math.min(Ti.length-1,y+1)],H=(N[0]-L[0])*Gs,W=(N[1]-L[1])*Li,Q=-H,ie=Math.hypot(W,Q)||1,oe=[t[0]+i*m+c*b*Gs,E*Li,t[1]+s*m+l*b*Gs],ee=[c*(-W/ie),-Q/ie,l*(-W/ie)];g.push(e.vert(oe,ee[1]<-.2?[c*Math.sign(b),.3,l*Math.sign(b)]:ee,[$e.HEDGE,0,0]))}d.push(g)}for(let v=0;v<u;v++)for(let m=0;m<Ti.length-1;m++)e.tri(d[v][m],d[v+1][m],d[v+1][m+1]),e.tri(d[v][m],d[v+1][m+1],d[v][m+1]);for(let[v,m]of[[0,-1],[u,1]]){let g=d[v],y=e.vert([t[0]+i*(v?h:p),Li*.5,t[1]+s*(v?h:p)],[i*m,0,s*m],[$e.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function Q4(e){for(let t of[-1,1])for(let o of[-1,1]){let n=Y4(t,o,.3);for(let r=0;r<n.length;r++)K4(e,n[r],n[(r+1)%n.length])}}function Z4(e){let t=X.cx,o=X.cz,n=()=>[$e.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[$e.DARK,0,0]});let r={mat:()=>[$e.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let l=c/12*Math.PI*1.6,f=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(l)*f*i*-1+0),1.95+Math.sin(l)*f,o])}e.tube(s,()=>.016,16,5,r)}}function J4(e){for(let[t,o]of $h)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[$e.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[$e.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[$e.BARK,0,0]})}function e_(e){let[t,,o]=Fa.c,n=Gm(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,l=>.2*(1-l*.75),14,9,{mat:()=>[$e.BARK,0,0]});for(let l=0;l<2;l++){let f=.55+l*.2,p=[t+a*f,s*f,o+i*f],h=n()*Math.PI*2;e.tube([p,[p[0]+Math.cos(h)*1.3,p[1]+.9,p[2]+Math.sin(h)*1.3],[p[0]+Math.cos(h)*2.3,p[1]+1.4+n(),p[2]+Math.sin(h)*2.3]],d=>.08*(1-d*.7),8,6,{mat:()=>[$e.BARK,0,0]})}}for(let a of ea.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[$e.BARK,0,0]})}function t_(e){let t=()=>[$e.FARBRICK,0,0],o=()=>[$e.LEAD,0,0],n=(a,i,s,c,l,f)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let p=[];for(let d=0;d<=12;d++){let u=d/12*Math.PI/2,v=Math.cos(u)*s,m=Math.sin(u)*l;f&&(v*=1-.18*Math.sin(u*2)),p.push([Math.max(v,s*.12),c+m])}e.lathe(p,a,i,28,{mat:o});let h=c+l;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};fn(e,14,0,104,52,26,150,$e.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{fn(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,$e.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function o_(e){let o=[X.cx,0,X.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let l=Math.PI/2*(c/r)-.05,f=[Math.sin(s)*Math.cos(l),Math.sin(l),Math.cos(s)*Math.cos(l)],p=[o[0]+f[0]*420,o[1]+f[1]*420,o[2]+f[2]*420];a[i].push(e.vert(p,[-f[0],-f[1],-f[2]],[$e.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function n_(){let e=[],t=[],o=[],n=[],r=P4.createBuilder(e,t,o,n);return X4(r),V4(r),Q4(r),Z4(r),J4(r),e_(r),r.save(),r.translate(I0[0],0,I0[1]),t_(r),r.restore(),o_(r),{position:e,normal:t,elements:o,attr:n}}var Fm=[[[13.65,0,$a.z0-.7],[$a.x1+.7,10.6,X.south]],[[X.westBack,Da,X.northCol-Ke],[X.eastBack,Er,X.northBack+3.4]],[[$t.x0,Er,X.northCol-Ke],[$t.x1,$t.top,X.northCol+2.6]],[[X.westBack,0,X.south],[X.westCol+Ke,Ga,X.northBack+.3]],[[X.eastCol-Ke,0,X.south],[X.eastBack,Ga,X.northBack+.3]],[[14+I0[0],0,104+I0[1]],[52+I0[0],26,150+I0[1]]]];function r_(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function pl(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,l=s*s-i*c;if(l<=0)return 0;let f=Math.sqrt(l),p=Math.max(0,(-s-f)/i),h=(-s+f)/i;return Math.max(0,h-p)}function Fh(e){for(let[t,o]of Fm)if(r_(e,Jr,t,o))return 0;return 1}function Gm(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function a_(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=Gm(21),c=(u,v,m,g,y,b,E)=>{let k=e.length/3;for(let[L,N]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...u),t.push(L,N),o.push(v,m,g),n.push(...y),r.push(...b),a.push(...E);i.push(k,k+1,k+2,k,k+2,k+3)},l=(u,v)=>{let m=1;for(let g of ea){if(g===v||!g.shadow)continue;let y=pl(u,Jr,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},f=ea.map(u=>({...u,pts:null}));for(let u of f)for(let v=0;v<u.n;v++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(u.spindle){let oe=b[1],ee=Math.sqrt(Math.max(.02,1-oe*oe))*(oe>0?1-oe*.55:1+oe*.25),Te=Math.hypot(b[0],b[2])||1,ne=ee*Math.min(1,Te*1.4);b=[b[0]/Te*ne,oe,b[2]/Te*ne]}u.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let E=[u.c[0]+b[0]*u.r[0],u.c[1]+b[1]*u.r[1],u.c[2]+b[2]*u.r[2]],k,L;if(u.magnolia){let oe=0;for(let ne of Nm)oe=Math.max(oe,pl(E,Jr,ne.c,ne.r));k=Math.exp(-oe*1.1);let ee=1;for(let ne of ea)if(!ne.magnolia&&ne.shadow){let Xe=pl(E,Jr,ne.c,ne.r);Xe>0&&(ee*=Math.exp(-Xe*.9))}k*=Fh(E)*ee;let Te=$4(E,Fa.c);L=gl([Te[0]/Fa.r[0]+b[0]*.5,Te[1]/Fa.r[1]+b[1]*.5,Te[2]/Fa.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(Te[0]/Fa.r[0],Te[1]/Fa.r[1],Te[2]/Fa.r[2])*.6+y*.4)}else{let oe=pl(E,Jr,u.c,u.r);k=Math.exp(-oe*(u.spindle?2.2:1.25)),k*=Fh(E)*l(E,ea[f.indexOf(u)]),L=gl([b[0]/u.r[0],b[1]/u.r[1],b[2]/u.r[2]])}let N=Math.max(0,L[0]*Jr[0]+L[1]*Jr[1]+L[2]*Jr[2]),H=.25+.75*Math.pow(y,1.5)*(.65+.35*(L[1]*.5+.5)),U=u.size[0]+(u.size[1]-u.size[0])*s(),W=.85+s()*.3,Q=u.leaf.map(oe=>oe*W),ie=u.cell;u.cell===3&&s()<.35&&(ie=2),c(E,U,ie,s()*Math.PI*2,[k,H,.35+.65*N],Q,u.bloom)}for(let[u,v]of Pm){let m=s()<.5;for(let g=0;g<3;g++){let y=[u+(s()-.5)*.7,.28+s()*.22,v+(s()-.5)*.5],b=Fh(y)*l(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let p=i.length/6,h=Array.from({length:p},(u,v)=>v);for(let u=p-1;u>0;u--){let v=Math.floor(s()*(u+1));[h[u],h[v]]=[h[v],h[u]]}let d=[];for(let u of h)for(let v=0;v<6;v++)d.push(i[u*6+v]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:d}}var Ve=e=>e.toFixed(4),Hs=e=>`vec3(${Ve(e[0])}, ${Ve(e[1])}, ${Ve(e[2])})`,$m=`
const vec3 SUN = ${Hs(Jr)};
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
`,i_=Fm.map(([e,t])=>`if (hitBox(ro, SUN, ${Hs(e)}, ${Hs(t)})) return 0.0;`).join(`
	`),s_=ea.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${Hs(e.c)}, ${Hs(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),c_=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${Ve(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${Ve(Da)} && u > ${Ve(o-Ke)} && u < ${Ve(o+n*r+Ke)}) {
				float k = floor((u - ${Ve(o)}) / ${Ve(n)});
				float a = ${Ve(o)} + k * ${Ve(n)} + (k < 0.5 ? ${Ve(a)} : 0.02);
				float b = ${Ve(o)} + (k + 1.0) * ${Ve(n)} - (k > ${Ve(r-1.5)} ? ${Ve(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Ve(s)}) < 0.5 ? 0.0 : ${Ve($s+.09)};
				bool hole = (q.y > sill && q.y < ${Ve(In)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Ve(In)} && d * d + (q.y - ${Ve(In)}) * (q.y - ${Ve(In)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,xl=ki+.3,yl=ki+.3,js=vl+.3,km=fo.x1-X.cx-zi-.3,l_=fo.z1-X.cz-zi-.3,f_=X.cz-fo.z0-zi-.3,h_=Math.sqrt(js*js-xl*xl),u_=Math.sqrt(js*js-yl*yl),d_=[[X.cx,X.cz,.86,1.18],[X.cx,X.cz,1.25,.3],...$h.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${Ve(e)}, ${Ve(t)}), ${Ve(o)}, ${Ve(n)})) return 0.0;`).join(`
	`),p_=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Ve(X.cx)}, ${Ve(X.cz)}));
	float b1 = xz.y > ${Ve(X.cz)} ? ${Ve(l_)} : ${Ve(f_)};
	vec2 A = vec2(${Ve(xl)}, ${Ve(h_)}), Bp = vec2(${Ve(xl)}, b1), C = vec2(${Ve(km)}, b1);
	vec2 D = vec2(${Ve(km)}, ${Ve(yl)}), E = vec2(${Ve(u_)}, ${Ve(yl)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Ve(js)}));
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
	${i_}
	${c_("z",X.northCol,X.westCol,Gh,bl,Ke+qs,Ke+qs,Cm,"ro.z > "+Ve(X.northCol-Ke))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${d_}
	if (ro.y < ${Ve(Li)} && ro.x > ${Ve(fo.x0)} && ro.x < ${Ve(fo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Ve(Li)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Ve(Gs*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Ve(Li)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${s_}
	return tr;
}
`,v_=`
precision highp float;
${Lm}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${$m}
${p_}

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
		bool yard = P.x > ${Ve(fo.x0)} && P.x < ${Ve(fo.x1)} && P.z < ${Ve(fo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Ve(fo.x0)}, ${Ve(fo.x1)} - P.x);
			float ez = min(P.z - ${Ve(fo.z0)}, ${Ve(fo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Ve(X.cx)}), dz = abs(P.z - ${Ve(X.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Ve(zi)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Ve(zi)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Ve(vl)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Ve(X.cz)}, P.x - ${Ve(X.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Ve(vl)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Ve(ki)} || dz < ${Ve(ki)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Ve(ki)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Ve(X.cx)}, ${Ve(X.cz)})));
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Ve(Li)}, P.y) * (0.6 + 0.4 * n);
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
	bool walk = (P.x < ${Ve(X.westCol)} || P.x > ${Ve(X.eastCol)} || P.z > ${Ve(X.northCol)}) && P.y < ${Ve(Da+.05)} && P.z > ${Ve(X.south-.1)} && P.z < ${Ve(X.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Ve(X.northCol)} ? P.z - ${Ve(X.northCol)} : (P.x < ${Ve(X.westCol)} ? ${Ve(X.westCol)} - P.x : P.x - ${Ve(X.eastCol)});
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
}`,m_=`
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
}`,g_=`
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
}`,x_=`
precision highp float;
${Lm}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${$m}
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
}`;function y_(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}Dh.exports=e=>{let t=n_(),o=a_(),n=y_(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>Oh.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:v_,vert:m_,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>Oh.gardenDetail}}),s=e({frag:x_,vert:g_,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Oh.leafShare/6)*6});return function(){i(),s()}};Dh.exports.layout={G:X,YARD:fo,SUN:Jr}});var Um=ve((AS,Bm)=>{"use strict";var b_=Ln().GLSL,w_=pi(),{C:jm}=Un(),On=jm.x1+.35,Bh=jm.zc,qh=[On-7.3,2,Bh],qm=5.2*Math.PI/180,Hm=2100,__=725,M_=1288,E_=1450,S_=2576,ha=Bh-3.2,Ml=Bh+3.3,Hh=On+5,jh=On+11.7,F0=3.9,Bs=On+22.7,wl=40;function A_(){let e=[],t=[],o=[],n=[],r=w_.createBuilder(e,t,o,n),a=(f,p,h,d,u,v)=>{let m=[];for(let g=0;g<=u;g++){m.push([]);for(let y=0;y<=v;y++){let b=[0,1,2].map(E=>f[E]+p[E]*g/u+h[E]*y/v);m[g].push(r.vert(b,d,[0,0,0]))}}for(let g=0;g<u;g++)for(let y=0;y<v;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=Ml-ha,s=.7;a([On-s,0,ha],[Hh-On+s,0,0],[0,0,i],[0,1,0],6,4);let c=jh-Hh,l=Math.hypot(c,F0);return a([Hh,0,ha],[c,F0,0],[0,0,i],[-F0/l,c/l,0],6,4),a([jh,F0,ha],[Bs-jh,0,0],[0,0,i],[0,1,0],6,4),a([On-s,0,ha],[Bs-On+s,0,0],[0,wl,0],[0,0,1],12,12),a([On-s,0,Ml],[Bs-On+s,0,0],[0,wl,0],[0,0,-1],12,12),a([Bs,0,ha],[0,wl,0],[0,0,i],[-1,0,0],8,4),a([On-s,wl,ha],[Bs-On+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var Xn=e=>e.toFixed(5),_l=[[On+3.4,3.7,ha+.01,1],[On+8.6,4.1,Ml-.01,-1],[On+14.8,F0+3.3,ha+.01,1],[On+19.6,F0+3.6,Ml-.01,-1]],T_=`
precision highp float;
${b_}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${_l.length};
vec4 LAMP[NLAMP];

void main() {
	${_l.map((e,t)=>`LAMP[${t}] = vec4(${Xn(e[0])}, ${Xn(e[1])}, ${Xn(e[2])}, ${Xn(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Xn(qh[0])}, ${Xn(qh[1])}, ${Xn(qh[2])});
	float c = ${Xn(Math.cos(qm))}, s = ${Xn(Math.sin(qm))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Xn(__)} + ${Xn(Hm)} * d.z / fw, ${Xn(M_)} - ${Xn(Hm)} * up / fw);
	vec2 uv = px / vec2(${Xn(E_)}, ${Xn(S_)});
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
	for (int i = 0; i < ${_l.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,k_=`
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
}`;Bm.exports=e=>{let t=A_(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:T_,vert:k_,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,l)=>{let[f,p,h]=s,d=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[u,v,m]of d){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(f+u[0]*c[0]+v[0]*y*c[0]+m[0]*b*c[0],p+u[1]*c[1]+v[1]*y*c[1]+m[1]*b*c[1],h+u[2]*c[2]+v[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...u),r.k.push(l);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of _l){let c=s[3],l=s[2]+c*.42;a([s[0],s[1],l],[.11,.17,.11],1);for(let f of[-1,1])for(let p of[-1,1])a([s[0]+f*.11,s[1],l+p*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,l],[.15,.03,.15],0),a([s[0],s[1]+.27,l],[.05,.05,.05],0),a([s[0],s[1]-.19,l],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var Qm=ve((TS,Km)=>{"use strict";var L_=Ln().GLSL,{A:Wm,BENCH:z_,SHAFT:Uh,TREE:Us,oculusGLSL:C_}=Fr(),R_=Ir(),El=Us.sxz,Vm=Us.sy,Xm=Us.yaw;function N_(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let l=new Uint16Array(e,s,o*2);s+=o*4;let f=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let p=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:l,nrm:f,idx:p}}function P_(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(Xm),i=Math.sin(Xm);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*El,l=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*Vm,f=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*El;t[s*3]=Wm.cx+a*c+i*f,t[s*3+1]=z_.soil+.02+l,t[s*3+2]=Wm.zc-i*c+a*f;let p=e.nrm[s*3]/127/El,h=e.nrm[s*3+1]/127/Vm,d=e.nrm[s*3+2]/127/El,u=Math.hypot(p,h,d)||1;p/=u,h/=u,d/=u,o[s*3]=a*p+i*d,o[s*3+1]=h,o[s*3+2]=-i*p+a*d,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function Ym(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var Yn=e=>e.toFixed(4),G0=Us.crownC,$0=Us.crownR,I_=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

const vec3 SHAFT = vec3(${Yn(Uh[0])}, ${Yn(Uh[1])}, ${Yn(Uh[2])});

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
	vec3 cc = vec3(${Yn(G0[0])}, ${Yn(G0[1])}, ${Yn(G0[2])});
	vec3 cr = vec3(${Yn($0[0])}, ${Yn($0[1])}, ${Yn($0[2])});
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
}`,Ha=Ra(),O_=`
precision highp float;
${L_}
uniform float time;
${Ha.lanternGLSL(Ha.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Ha.LANTERNS[Ha.TREE_LANTERN[0]].x.toFixed(3)}, ${Ha.LANTERNS[Ha.TREE_LANTERN[0]].y.toFixed(3)}, ${Ha.LANTERNS[Ha.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

${C_()}

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
	vec3 rel = (v_pos - vec3(${Yn(G0[0])}, ${Yn(G0[1])}, ${Yn(G0[2])})) / vec3(${Yn($0[0])}, ${Yn($0[1])}, ${Yn($0[2])});
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
}`;Km.exports=e=>{let t=null,o=Ym(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Ym(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=P_(N_(a));t=e({vert:I_,frag:O_,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>R_.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var i2=ve((kS,Yh)=>{"use strict";var Xh=Ln().GLSL,{A:Zm,BENCH:n2,oculusGLSL:r2}=Fr(),Jm=Ir(),F_=1.74,G_=1.877,ta=F_/G_,Ri={x:Zm.cx-1.22,z:Zm.zc+.02,hipY:n2.seat+.115},nr=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Wh=e=>[-e[0],-e[1],-e[2],e[3]],Ni=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},Vh=(e,t,o)=>nr(Ni([0,0,1],o*Math.PI/180),nr(Ni([0,1,0],t*Math.PI/180),Ni([1,0,0],e*Math.PI/180))),$_=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)};function ua(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,l=a*a,f=n*r,p=n*a,h=r*a,d=i*n,u=i*r,v=i*a;return[(1-2*(c+l))*o[0],2*(f+v)*o[0],2*(p-u)*o[0],0,2*(f-v)*o[1],(1-2*(s+l))*o[1],2*(h+d)*o[1],0,2*(p+u)*o[2],2*(h-d)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function Sr(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function D_(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,l=e[6]/o,f=e[8]/n,p=e[9]/n,h=e[10]/n,d=r+c+h,u;if(d>0){let v=Math.sqrt(d+1)*2;u=[(l-p)/v,(f-i)/v,(a-s)/v,v/4]}else if(r>c&&r>h){let v=Math.sqrt(1+r-c-h)*2;u=[v/4,(s+a)/v,(f+i)/v,(l-p)/v]}else if(c>h){let v=Math.sqrt(1+c-r-h)*2;u=[(s+a)/v,v/4,(p+l)/v,(f-i)/v]}else{let v=Math.sqrt(1+h-r-c)*2;u=[(f+i)/v,(p+l)/v,v/4,(a-s)/v]}return $_(u)}var Al={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Al[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],Al[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],Al[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function Ci(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function e2(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*Ci(e,.14,.07)+57*Ci(e,.72,.12),n=5*Ci(e,.06,.04)-9*Ci(e,.42,.12)+17*Ci(e,.62,.05)-3*Ci(e,.85,.1),r=-26*Ci(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function q_(e){let t=(e%1+1)%1,o=e2(t),n=e2(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var t2=`
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
}`,Tl=Ra(),o2=`
precision highp float;
${Xh}
uniform float time;
${Tl.lanternGLSL(Tl.TREE_LANTERN)}
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
// in the confessional: the priest's lamp (xyz, strength), and how much of
// the court's own light reaches him (0 there)
uniform vec4 boothLamp;
uniform float court;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${r2()}
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
		} else if (kind > 7.5) {
			// socks: fine charcoal wool in narrow ribs
			float rib = abs(fract(v_uv.x * 900.0) - 0.5) * 2.0;
			t.rgb = vec3(0.030, 0.029, 0.033) * (0.78 + 0.32 * smoothstep(0.2, 0.8, rib) + 0.1 * n);
			gloss = 0.02;
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
}`;function H_(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var a2={w:.13,h:.2},Sl=e=>.011*(1-Math.pow(1-e,3));function j_(){let e=[],t=[],o=[],n=[],r=[],a=(v,m,g,y,b,E,k)=>{let L=e.length/3;[v,m,g,y].forEach((N,H)=>{e.push(...N),t.push(...b),o.push(...k[H]),n.push(E)}),r.push(L,L+1,L+2,L,L+2,L+3)},{w:i,h:s}=a2,c=s/2,l=[[0,1],[1,1],[1,0],[0,0]],f=-.006,p=i+.001,h=c+.001;a([0,f,-h],[p,f,-h],[p,f,h],[0,f,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,f+.001,-h],[0,f+.001,h],[p,f+.001,h],[p,f+.001,-h],[0,1,0],2,l),a([-p,f,-h],[0,f,-h],[0,f,h],[-p,f,h],[0,-1,0],2,l),a([-p,f+.001,-h],[-p,f+.001,h],[0,f+.001,h],[0,f+.001,-h],[0,1,0],2,l);let d=8;for(let v of[1,-1]){for(let g=0;g<d;g++){let y=g/d,b=(g+1)/d,E=(.002+y*(i-.002))*v,k=(.002+b*(i-.002))*v,L=Sl(y),N=Sl(b),H=v>0?y:1-y,U=v>0?b:1-b,W=1,Q=-(N-L)/(k-E);a([E,L,-c],[k,N,-c],[k,N,c],[E,L,c],[Q,W,0],3,[[H,1],[U,1],[U,0],[H,0]]),a([E,f+.001,c],[k,f+.001,c],[k,N,c],[E,L,c],[0,0,1],4,l),a([E,L,-c],[k,N,-c],[k,f+.001,-c],[E,f+.001,-c],[0,0,-1],4,l)}let m=i*v;a([m,f+.001,-c],[m,Sl(1),-c],[m,Sl(1),c],[m,f+.001,c],[v,0,0],4,l)}let u=10;for(let v=0;v<u;v++){let m=v/u,g=(v+1)/u,y=e.length/3;for(let[b,E]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,E),t.push(0,1,0),o.push(b,(E+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function B_(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,l,f,p,h)=>{for(let d=0;d<p;d++){let u=i+(n()-.5)*c*2,v=s+(n()-.5)*l*2,m=20+n()*60,g=t.createRadialGradient(u,v,0,u,v,m);g.addColorStop(0,`rgba(${f},${h})`),g.addColorStop(1,`rgba(${f},0)`),t.fillStyle=g,t.fillRect(u-m,v-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,l])=>{t.lineWidth=l,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var U_=`
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
		float r = u * ${a2.w.toFixed(3)};
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
}`,W_=`
precision highp float;
${Xh}
uniform float time;
${Tl.lanternGLSL(Tl.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${r2()}
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
}`;function V_(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],l=[.8,.55,.22],f=[[0,-.15,l,2],[.0012,-.147,l,2],[.004,-.138,l,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],p=16;for(let h=0;h<f.length;h++){let[d,u,v,m]=f[h],g=m===2?.45:1;for(let y=0;y<=p;y++){let b=y/p*Math.PI*2;e.push(Math.cos(b)*d,u,Math.sin(b)*d*g);let E=Math.max(h-1,0),k=Math.min(h+1,f.length-1),L=f[k][0]-f[E][0],N=f[k][1]-f[E][1],H=Math.hypot(L,N)||1;t.push(Math.cos(b)*N/H,-L/H,Math.sin(b)*N/H/g),o.push(...v),n.push(m)}}for(let h=0;h<f.length-1;h++)for(let d=0;d<p;d++){let u=h*(p+1)+d,v=u+p+1;r.push(u,v,u+1,u+1,v,v+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var X_=`
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
}`,Y_=`
precision highp float;
${Xh}
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
}`,K_=`
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
}`,Q_=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Yh.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Ri.x,1.9,Ri.z],glow:0};Promise.all([fetch(t+"avatar.json").then(L=>L.json()),fetch(t+"avatar.bin").then(L=>L.arrayBuffer())]).then(([L,N])=>{o=s(L,N)}).catch(L=>console.error(L));let i=e.texture({data:[[[255,255,255,255]]]});function s(L,N){let H=(fe,Ye)=>new Float32Array(N,fe,Ye),U=L.bones,W=U.length,Q={};U.forEach((fe,Ye)=>{Q[fe.name]=Ye});let ie=[];for(let fe=0;fe<W;fe++)ie.push(Array.from(H(L.ibm+fe*64,16)));let oe=U.map(fe=>ua(fe.t,fe.r,fe.s)),ee=[];for(let fe=0;fe<W;fe++){let Ye=U[fe].parent;ee[fe]=Ye<0?oe[fe]:Sr(ee[Ye],oe[fe])}let Te=ee.map(D_),ne=L.meshes.map(fe=>{let Ye=H(fe.pos,fe.n*3),pt=H(fe.nrm,fe.n*3),lt=H(fe.uv,fe.n*2),Zt=new Uint8Array(N,fe.jnt,fe.n*4),Ht=H(fe.wgt,fe.n*4),w=new Uint16Array(N,fe.idx,fe.ni),_t={};for(let Nn in fe.morphs){let Bt=fe.morphs[Nn];_t[Nn]={idx:new Uint16Array(N,Bt.idx,Bt.n),d:H(Bt.d,Bt.n*3)}}let Jt=new Float32Array(fe.n*3),nt=new Float32Array(fe.n*3),vo=new Float32Array(fe.n*3),Tt=e.buffer({data:Jt,usage:"dynamic"}),tt=e.buffer({data:nt,usage:"dynamic"}),Dt=/hair/.test(fe.name),eo=/EyeAO|Eyelash/.test(fe.name),_o=/Body|Head/.test(fe.name),Co=fe.kind||0;return{m:fe,pos:Ye,nrm:pt,uv:lt,jnt:Zt,wgt:Ht,idx:w,morphs:_t,outP:Jt,outN:nt,work:vo,pb:Tt,nbuf:tt,tex:fe.tex?H_(e,t+fe.tex):i,kind:Co,alphaScale:/EyeAO/.test(fe.name)?.25:1,blend:fe.blend||Dt,alphaCut:Dt?.35:eo?.02:0,skin:_o?1:0}}),Xe=e({vert:t2,frag:o2,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>E?E.lamp:[0,0,0,0],court:()=>E?0:1},cull:{enable:!1}}),ue=e({vert:t2,frag:o2,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>E?E.lamp:[0,0,0,0],court:()=>E?0:1},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),ut=.3;for(let fe of ne)if(fe.uvBuf=e.buffer(fe.uv),/Body/.test(fe.m.name)){let Ye=[],pt=[];for(let lt=0;lt<fe.idx.length;lt+=3){let Zt=fe.idx[lt],Ht=fe.idx[lt+1],w=fe.idx[lt+2];(fe.pos[Zt*3+1]<ut&&fe.pos[Ht*3+1]<ut&&fe.pos[w*3+1]<ut?pt:Ye).push(Zt,Ht,w)}fe.el=e.elements({data:new Uint16Array(Ye),type:"uint16"}),pt.length&&(fe.sockEl=e.elements({data:new Uint16Array(pt),type:"uint16"}))}else fe.el=e.elements({data:fe.idx,type:"uint16"});let wt=ee[Q.Hips],Xt=Ni([1,0,0],-Math.PI/2),mt=Sr(ua([Ri.x-wt[12]*ta,Ri.hipY-wt[14]*ta,Ri.z+wt[13]*ta],Xt,[1,1,1]),ua([0,0,0],[0,0,0,1],[ta,ta,ta])),Yt=new Array(W),Ct=-1,go=(fe,Ye,pt)=>Sr(ua([fe,0,Ye],Ni([0,1,0],pt),[1,1,1]),ua([0,0,0],[0,0,0,1],[ta,ta,ta])),je=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(fe=>Q[fe]),Ft=je.map(fe=>ee[fe][13]*ta);function Fe(fe){let Ye=q_(fe.phase),pt={},lt=nt=>{for(let vo in nt){let Tt=nt[vo],tt=Vh(Tt[0],Tt[1],Tt[2]);pt[vo]=pt[vo]?nr(pt[vo],tt):tt}};lt(Ye.swing),lt(Ye.pose);let Zt=Math.cos(fe.heading),Ht=-Math.sin(fe.heading),w=go(fe.x+Zt*Ye.sway,fe.z+Ht*Ye.sway,fe.heading),_t=new Array(W);for(let nt=0;nt<W;nt++){let vo=U[nt],Tt=oe[nt],tt=pt[vo.name];if(tt){let Dt=Te[nt],eo=nr(Wh(Dt),nr(tt,Dt));Tt=ua(vo.t,nr(vo.r,eo),vo.s)}_t[nt]=vo.parent<0?Sr(w,Tt):Sr(_t[vo.parent],Tt)}let Jt=1/0;je.forEach((nt,vo)=>{Jt=Math.min(Jt,_t[nt][13]-Ft[vo])});for(let nt=0;nt<W;nt++)_t[nt]=_t[nt].slice(),_t[nt][13]-=Jt,Yt[nt]=Sr(_t[nt],ie[nt]);return{blink:0}}function Qe(fe,Ye){let pt=Math.sin(fe*2*Math.PI/4.6),lt=Math.sin(fe*.37)*.6+Math.sin(fe*.83+1)*.4,Zt={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+pt*.8,0,0],Spine2:[4+pt*.6,0,0],Neck:[10,0,0],Head:[12+lt*2,lt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Ht={};for(let Tt in Zt){let tt=Zt[Tt];Ht[Tt]=Vh(tt[0],tt[1],tt[2])}let w=go(Ye.x,Ye.z,Ye.heading),_t=new Array(W);for(let Tt=0;Tt<W;Tt++){let tt=U[Tt],Dt=oe[Tt],eo=Ht[tt.name];if(eo){let _o=Te[Tt],Co=nr(Wh(_o),nr(eo,_o));Dt=ua(tt.t,nr(tt.r,Co),tt.s)}_t[Tt]=tt.parent<0?Sr(w,Dt):Sr(_t[tt.parent],Dt)}let nt=_t[Q.Hips][13]-(Ye.y+.1);for(let Tt=0;Tt<W;Tt++)_t[Tt]=_t[Tt].slice(),_t[Tt][13]-=nt,Yt[Tt]=Sr(_t[Tt],ie[Tt]);let vo=fe%4.1;return{blink:vo<.16?Math.sin(vo/.16*Math.PI):0}}function qe(fe,Ye){if(E)return Qe(fe,E);if(Ye)return Fe(Ye);let pt=Math.sin(fe*2*Math.PI/4.2),lt=fe%3.7,Zt=lt<.16?Math.sin(lt/.16*Math.PI):0,w={RightArm:[0,0,11*Math.sin(fe*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((tt,Dt)=>{let eo=Math.sin(fe*1.1-Dt*.5);w["RightHand"+tt+"1"]=[0,0,8+12*eo],w["RightHand"+tt+"2"]=[0,0,6+10*eo]});let _t={},Jt=(tt,Dt)=>{for(let eo in tt){let _o=tt[eo],Co=Vh(_o[0]*Dt,_o[1]*Dt,_o[2]*Dt);_t[eo]=_t[eo]?nr(_t[eo],Co):Co}};Jt(Al,1),Jt({Spine1:[pt*.8,0,0],Spine2:[pt*.6,0,0]},1),Jt(w,1);let nt=new Array(W),vo=new Array(W);for(let tt=0;tt<W;tt++){let Dt=U[tt],eo=oe[tt],_o=_t[Dt.name];if(_o){let Co=Te[tt],Nn=nr(Wh(Co),nr(_o,Co));eo=ua(Dt.t,nr(Dt.r,Nn),Dt.s)}nt[tt]=Dt.parent<0?Sr(mt,eo):Sr(nt[Dt.parent],eo),vo[tt]=null}for(let tt=0;tt<W;tt++)Yt[tt]=Sr(nt[tt],ie[tt]);let Tt=tt=>[tt[12],tt[13],tt[14]];return a.headPos=Tt(nt[Q.Head]),a.hipsPos=Tt(nt[Q.Hips]),a.headM=nt[Q.Head],{blink:Zt}}function dt(fe,Ye){let{pos:pt,nrm:lt,jnt:Zt,wgt:Ht,outP:w,outN:_t,work:Jt,m:nt}=fe,vo=nt.n,Tt=pt;if(Ye){Jt.set(pt);for(let tt in fe.morphs){let Dt=Ye[tt]||0;if(Dt<=0)continue;let eo=fe.morphs[tt];for(let _o=0;_o<eo.idx.length;_o++){let Co=eo.idx[_o]*3;Jt[Co]+=eo.d[_o*3]*Dt,Jt[Co+1]+=eo.d[_o*3+1]*Dt,Jt[Co+2]+=eo.d[_o*3+2]*Dt}}Tt=Jt}for(let tt=0;tt<vo;tt++){let Dt=Tt[tt*3],eo=Tt[tt*3+1],_o=Tt[tt*3+2],Co=lt[tt*3],Nn=lt[tt*3+1],Bt=lt[tt*3+2],ga=0,Ja=0,Xi=0,oa=0,xa=0,jr=0;for(let ar=0;ar<4;ar++){let Fn=Ht[tt*4+ar];if(Fn===0)continue;let Lo=Yt[Zt[tt*4+ar]];ga+=Fn*(Lo[0]*Dt+Lo[4]*eo+Lo[8]*_o+Lo[12]),Ja+=Fn*(Lo[1]*Dt+Lo[5]*eo+Lo[9]*_o+Lo[13]),Xi+=Fn*(Lo[2]*Dt+Lo[6]*eo+Lo[10]*_o+Lo[14]),oa+=Fn*(Lo[0]*Co+Lo[4]*Nn+Lo[8]*Bt),xa+=Fn*(Lo[1]*Co+Lo[5]*Nn+Lo[9]*Bt),jr+=Fn*(Lo[2]*Co+Lo[6]*Nn+Lo[10]*Bt)}w[tt*3]=ga,w[tt*3+1]=Ja,w[tt*3+2]=Xi;let ei=Math.hypot(oa,xa,jr)||1;_t[tt*3]=oa/ei,_t[tt*3+1]=xa/ei,_t[tt*3+2]=jr/ei}nt.grid&&!Gt&&!E&&at(fe),fe.pb.subdata(w),fe.nbuf.subdata(_t)}function at(fe){let[Ye,pt]=fe.m.grid,lt=fe.outP,Zt=fe.outN,Ht=n2.seat+.012;for(let w=1;w<Ye;w++){let _t=Math.pow(1-w/(Ye-1),1.5);for(let Jt=0;Jt<pt;Jt++){let nt=(w*pt+Jt)*3;lt[nt+1]>Ht?lt[nt+1]=Ht+(lt[nt+1]-Ht)*Math.max(_t,.15):lt[nt+1]=Ht}}for(let w=0;w<Zt.length;w+=3)Zt[w]=0,Zt[w+1]=1,Zt[w+2]=0}let Gt=!1;function et(fe,Ye){Gt=!!Ye;let pt=qe(fe,Ye),lt={eyeBlinkLeft:pt.blink,eyeBlinkRight:pt.blink};for(let Zt of ne)dt(Zt,Object.keys(Zt.morphs).length?lt:null);a.pose=pt}return{parts:ne,update:et,drawOpaque:Xe,drawBlend:ue,state:a}}function c(L,N,H){let U=Math.min(1,Math.max(0,(H-L)/(N-L)));return U*U*(3-2*U)}let l=j_(),f=B_(),p=f?e.texture({data:f,flipY:!1,min:"linear",mag:"linear"}):i,h=e({vert:U_,frag:W_,attributes:{position:l.pos,normal:l.nrm,uv:l.uv,kind:l.kind},elements:new Uint16Array(l.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),d=V_(),u=e({vert:X_,frag:Y_,attributes:{position:d.pos,normal:d.nrm,color:d.col,mat:d.mat},elements:new Uint16Array(d.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),v=e({vert:K_,frag:Q_,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function m(L){let N=L.headM,H=ne=>{let Xe=Math.hypot(...ne)||1;return ne.map(ue=>ue/Xe)},U=H([N[4],N[5],N[6]]),W=H([N[8],N[9],N[10]]),Q=U,ie=W.map(ne=>-ne),oe=[ie[1]*Q[2]-ie[2]*Q[1],ie[2]*Q[0]-ie[0]*Q[2],ie[0]*Q[1]-ie[1]*Q[0]],ee=L.headPos,Te=[0,1,2].map(ne=>ee[ne]+U[ne]*.06+W[ne]*.185);return[oe[0],oe[1],oe[2],0,ie[0],ie[1],ie[2],0,Q[0],Q[1],Q[2],0,Te[0],Te[1],Te[2],1]}let g=-1,y="",b=null,E=null;function k(L){if(!o)return;let N=(Jm.motion,r()),H=b?[b.x,b.z,b.heading,b.phase].map(W=>W.toFixed(4)).join():"";(E||H!==y||!b&&Math.abs(N-g)>(Jm.isPhone?1/30:0))&&(o.update(N,b),g=N,y=H);for(let W of o.parts)W.blend||(o.drawOpaque({pb:W.pb,nb:W.nbuf,uv:W.uvBuf,el:W.el,tex:W.tex,alphaCut:W.alphaCut,skin:W.skin,kind:W.kind,alphaScale:W.alphaScale}),W.sockEl&&o.drawOpaque({pb:W.pb,nb:W.nbuf,uv:W.uvBuf,el:W.sockEl,tex:i,alphaCut:0,skin:0,kind:8,alphaScale:1}));let U=o.state;if(U.headM&&!b&&!E){h({model:m(U)});let W=U.headPos,Q=Math.sin(N*1.3)*.02,ie=[W[0],W[1]+.62+Q,W[2]+.05],oe=N*.6,ee=ua(ie,nr(Ni([0,1,0],oe),Ni([0,0,1],.18)),[1.2,1.2,1.2]),Te=.5+.5*Math.sin(N*2);u({model:ee,pulse:Te}),a.glowPos=ie,a.glow=.06+.03*Te,v({center:[ie[0],ie[1]-.12,ie[2]],size:.1,pulse:Te})}for(let W of o.parts)W.blend&&o.drawBlend({pb:W.pb,nb:W.nbuf,uv:W.uvBuf,el:W.el,tex:W.tex,alphaCut:W.alphaCut,skin:W.skin,kind:W.kind,alphaScale:W.alphaScale})}return k.state=a,k.place=Ri,k.setWalk=L=>{b=L||null,b&&(a.glow=0)},k.setSeat=L=>{E=L||null,a.glow=E?0:a.glow,g=-1},k};Yh.exports.PLACE=Ri});var Kh=ve((LS,s2)=>{"use strict";s2.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Zh=ve((zS,d2)=>{"use strict";var h2=Ir(),c2=ys(),ja=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Qh(){return h2.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Z_=`
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
`,l2=!1;function u2(){if(l2)return;l2=!0;let e=document.createElement("style");e.textContent=Z_,document.head.appendChild(e)}var J_='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function e6(e){return!e||!e.visit||!Qh()?"":(u2(),`<button type="button" class="visit-btn" data-visit="${ja(e.slug||"")}" aria-label="Visit what remained: watch ${ja(e.title)} come to life">${J_}<span>Visit what remained</span></button>`)}function t6(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let l=Math.random()*255;s[c]=s[c+1]=s[c+2]=l,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Ws=null;function o6(e){if(Ws||!e||!e.visit)return;u2();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(h2.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${ja(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${ja(e.title)}, ${ja(c2(e))}" src="${ja(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${ja(e.title)}</span>
			<span class="visit-meta">${ja(c2(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=t6(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),l=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,l));let f=m=>{m.key==="Escape"?(m.preventDefault(),v()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),d()),m.stopImmediatePropagation()};window.addEventListener("keydown",f,!0);let p=m=>m.stopImmediatePropagation();window.addEventListener("keyup",p,!0);let h=!1;function d(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function u(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>d()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&d()}),r.addEventListener("ended",d),r.addEventListener("error",d);function v(){if(Ws){Ws=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",f,!0),window.removeEventListener("keyup",p,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",v),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}d()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&v(),g.dataset.act==="again"&&(s.forEach(clearTimeout),u()))}),r.src=e.visit.video,Ws={close:v},requestAnimationFrame(()=>{n.classList.add("on"),c(u,1300)})}var f2={};function n6(e){if(!e||!e.visit||f2[e.visit.video]||!Qh())return;f2[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}d2.exports={available:Qh,button:e6,open:o6,warm:n6,get active(){return!!Ws}}});var Jh=ve((CS,p2)=>{p2.exports=1e-6});var eu=ve((RS,v2)=>{v2.exports=r6;function r6(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var g2=ve((NS,m2)=>{m2.exports=a6;function a6(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var tu=ve((PS,x2)=>{x2.exports=i6;function i6(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var ou=ve((IS,y2)=>{y2.exports=s6;function s6(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var nu=ve((OS,b2)=>{b2.exports=c6;function c6(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var E2=ve((FS,M2)=>{M2.exports=f6;var w2=tu(),_2=ou(),l6=nu();function f6(e,t){var o=w2(e[0],e[1],e[2]),n=w2(t[0],t[1],t[2]);_2(o,o),_2(n,n);var r=l6(o,n);return r>1?0:Math.acos(r)}});var A2=ve((GS,S2)=>{S2.exports=h6;function h6(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var k2=ve(($S,T2)=>{T2.exports=u6;function u6(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var z2=ve((DS,L2)=>{L2.exports=d6;var ru=Jh();function d6(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=ru*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=ru*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=ru*Math.max(1,Math.abs(r),Math.abs(s))}});var R2=ve((qS,C2)=>{C2.exports=p6;function p6(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var P2=ve((HS,N2)=>{N2.exports=v6;function v6(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var au=ve((jS,I2)=>{I2.exports=m6;function m6(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var F2=ve((BS,O2)=>{O2.exports=au()});var iu=ve((US,G2)=>{G2.exports=g6;function g6(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var D2=ve((WS,$2)=>{$2.exports=iu()});var su=ve((VS,q2)=>{q2.exports=x6;function x6(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var j2=ve((XS,H2)=>{H2.exports=su()});var U2=ve((YS,B2)=>{B2.exports=y6;function y6(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var V2=ve((KS,W2)=>{W2.exports=b6;function b6(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var Y2=ve((QS,X2)=>{X2.exports=w6;function w6(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var Q2=ve((ZS,K2)=>{K2.exports=_6;function _6(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var J2=ve((JS,Z2)=>{Z2.exports=M6;function M6(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var tg=ve((eA,eg)=>{eg.exports=E6;function E6(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var ng=ve((tA,og)=>{og.exports=S6;function S6(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var cu=ve((oA,rg)=>{rg.exports=A6;function A6(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var ig=ve((nA,ag)=>{ag.exports=cu()});var lu=ve((rA,sg)=>{sg.exports=T6;function T6(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var lg=ve((aA,cg)=>{cg.exports=lu()});var fu=ve((iA,fg)=>{fg.exports=k6;function k6(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var ug=ve((sA,hg)=>{hg.exports=fu()});var hu=ve((cA,dg)=>{dg.exports=L6;function L6(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var vg=ve((lA,pg)=>{pg.exports=hu()});var gg=ve((fA,mg)=>{mg.exports=z6;function z6(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var yg=ve((hA,xg)=>{xg.exports=C6;function C6(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var wg=ve((uA,bg)=>{bg.exports=R6;function R6(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var Mg=ve((dA,_g)=>{_g.exports=N6;function N6(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var Sg=ve((pA,Eg)=>{Eg.exports=P6;function P6(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var Tg=ve((vA,Ag)=>{Ag.exports=I6;function I6(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var Lg=ve((mA,kg)=>{kg.exports=O6;function O6(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var Cg=ve((gA,zg)=>{zg.exports=F6;function F6(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],l=o[3],f=l*n+s*a-c*r,p=l*r+c*n-i*a,h=l*a+i*r-s*n,d=-i*n-s*r-c*a;return e[0]=f*l+d*-i+p*-c-h*-s,e[1]=p*l+d*-s+h*-i-f*-c,e[2]=h*l+d*-c+f*-s-p*-i,e}});var Ng=ve((xA,Rg)=>{Rg.exports=G6;function G6(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=t[0],e[1]=r+i*l-s*c,e[2]=a+i*c+s*l,e}});var Ig=ve((yA,Pg)=>{Pg.exports=$6;function $6(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=r+s*c+i*l,e[1]=t[1],e[2]=a+s*l-i*c,e}});var Fg=ve((bA,Og)=>{Og.exports=D6;function D6(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=r+i*l-s*c,e[1]=a+i*c+s*l,e[2]=t[2],e}});var $g=ve((wA,Gg)=>{Gg.exports=q6;var Ba=eu()();function q6(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)Ba[0]=e[i],Ba[1]=e[i+1],Ba[2]=e[i+2],r(Ba,Ba,a),e[i]=Ba[0],e[i+1]=Ba[1],e[i+2]=Ba[2];return e}});var qg=ve((_A,Dg)=>{Dg.exports={EPSILON:Jh(),create:eu(),clone:g2(),angle:E2(),fromValues:tu(),copy:A2(),set:k2(),equals:z2(),exactEquals:R2(),add:P2(),subtract:au(),sub:F2(),multiply:iu(),mul:D2(),divide:su(),div:j2(),min:U2(),max:V2(),floor:Y2(),ceil:Q2(),round:J2(),scale:tg(),scaleAndAdd:ng(),distance:cu(),dist:ig(),squaredDistance:lu(),sqrDist:lg(),length:fu(),len:ug(),squaredLength:hu(),sqrLen:vg(),negate:gg(),inverse:yg(),normalize:ou(),dot:nu(),cross:wg(),lerp:Mg(),random:Sg(),transformMat4:Tg(),transformMat3:Lg(),transformQuat:Cg(),rotateX:Ng(),rotateY:Ig(),rotateZ:Fg(),forEach:$g()}});var Bg=ve((MA,jg)=>{"use strict";function Hg(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}jg.exports=function(t){let o=t.ownerDocument||document,n=Hg(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let f=t.requestPointerLock||t.webkitRequestPointerLock;if(f)try{let p=f.call(t);p&&p.catch&&p.catch(()=>{})}catch(p){}};t.addEventListener("mousedown",c,!1);let l=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=Hg(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",l),o.addEventListener("webkitpointerlockchange",l),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",f=>{r&&(a.dx=f.movementX||f.webkitMovementX||0,a.dy=f.movementY||f.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var Yg=ve((AA,Xg)=>{"use strict";var Pi=C0(),Ii=qg(),H6=Bg(),EA=Math.PI/4,SA=Math.PI/6,Ug=2,j6=1,B6=2.4,U6=2.4,W6=1e3,V6=5,X6=7,uu=Un().C,Vs=[[7,1.6],[7,uu.zc],[uu.x1-2.95,uu.zc]],Ua=Vs.slice(1).map((e,t)=>{let o=Vs[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),du=Ua.reduce((e,t)=>e+t.len,0);function Wg(e){let t=Math.max(0,Math.min(du,e));for(let n of Ua){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=Vs[Vs.length-1];return[o[0],o[1]]}function Y6(e){let t=0;for(let n=0;n<Ua.length;n++){let r=Ua[n],a=t+r.len;if(e<a-1e-4||n===Ua.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?Ua[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=Ua[Ua.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var K6=Math.PI/4,Q6=7,Z6=140,J6=70,Vg=(e,t,o)=>(1-e)*t+e*o,eM=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Xg.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[X6,Ug,Vs[0][1]],c=0,l=1,f=0,p=[.707,0,.707],h=[0,1,0],d=[0,0,0],u=.5,v=Pi.identity([]),m=Pi.identity([]),g=!1,y=[0,0,0],b=[0,0,0],E=1,k=!1;let L=Fe=>{n[1]+=Fe*K6},N=(Fe,Qe,qe)=>{if(Fe=Math.max(Math.min(Fe,100),-100),Qe=Math.max(Math.min(Qe,100),-100),n[0]=0,k){a=0;return}for(a+=Fe;a>=qe;)L(1),a-=qe;for(;a<=-qe;)L(-1),a+=qe};H6(document.body).on("attain",Fe=>{Fe.on("data",Qe=>{N(Qe.dx,Qe.dy,Z6)})});let U=null,W=null,Q=0,ie={x:0,y:0},oe=58,ee=document.createElement("div");ee.id="museum-mobile-controls",ee.innerHTML=`

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
	`,document.body.appendChild(ee);let Te=ee.querySelector("#museum-joystick"),ne=ee.querySelector("#museum-joystick-knob"),Xe=()=>{ne.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},ue=Fe=>{let Qe=Fe.clientX-ie.x,qe=Fe.clientY-ie.y,dt=Math.hypot(Qe,qe);if(dt>oe&&(Qe=Qe/dt*oe,qe=qe/dt*oe),ne.style.transform=`translate(
				calc(-50% + ${Qe}px),
				calc(-50% + ${qe}px)
			)`,dt<10){i[0]=0,i[2]=0;return}let Gt=Qe/oe,et=qe/oe;i[0]=0,i[2]=Math.abs(et)>.15?et:0},ut=(Fe,Qe)=>{for(let qe=0;qe<Fe.length;qe++)if(Fe[qe].identifier===Qe)return Fe[qe];return null},wt=Fe=>!!(Fe&&Fe.closest&&Fe.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Xt=Fe=>{if(!wt(Fe.target)&&(Fe.cancelable&&Fe.preventDefault(),!k))for(let Qe=0;Qe<Fe.changedTouches.length;Qe++){let qe=Fe.changedTouches[Qe];if(U===null&&qe.clientX<window.innerWidth*.48){U=qe.identifier;let dt=Te.getBoundingClientRect();ie.x=dt.left+dt.width/2,ie.y=dt.top+dt.height/2,ue(qe)}else W===null&&qe.clientX>=window.innerWidth*.48&&(W=qe.identifier,Q=qe.clientX,a=0)}},mt=Fe=>{if(wt(Fe.target)||(Fe.cancelable&&Fe.preventDefault(),k))return;let Qe=U===null?null:ut(Fe.touches,U);Qe&&ue(Qe);let qe=W===null?null:ut(Fe.touches,W);if(qe){let dt=qe.clientX-Q;Q=qe.clientX,N(dt,0,J6)}},Yt=Fe=>{if(!wt(Fe.target)){Fe.cancelable&&Fe.preventDefault();for(let Qe=0;Qe<Fe.changedTouches.length;Qe++){let qe=Fe.changedTouches[Qe];qe.identifier===U&&(U=null,Xe()),qe.identifier===W&&(W=null)}}};document.addEventListener("touchstart",Xt,{passive:!1}),document.addEventListener("touchmove",mt,{passive:!1}),document.addEventListener("touchend",Yt,{passive:!1}),document.addEventListener("touchcancel",Yt,{passive:!1});let Ct=document.createElement("style");Ct.textContent=`

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
	`,document.head.appendChild(Ct);var go={};let je=Fe=>{if(Fe.defaultPrevented||Fe.ctrlKey||Fe.altKey||Fe.metaKey)return;let Qe=Fe.type==="keydown";go[Fe.code]=Qe,Qe&&!Fe.repeat&&!k&&((Fe.code==="KeyA"||Fe.code==="ArrowLeft")&&L(-1),(Fe.code==="KeyD"||Fe.code==="ArrowRight")&&L(1)),g=!1;let qe=go.KeyW||go.ArrowUp?1:0;i=[0,0,(go.KeyS||go.ArrowDown?1:0)-qe],Fe.preventDefault()};window.addEventListener("keydown",je),window.addEventListener("keyup",je);var Ft=0;return{pos:s,fmouse:r,forward:p,up:h,setPaused:Fe=>{k=!!Fe,k&&(i[0]=0,i[2]=0,Xe())},place:(Fe,Qe)=>{c=Math.max(0,Math.min(du,Fe));let qe=Wg(c);s[0]=qe[0],s[2]=qe[1],n[1]=Qe,r[1]=Qe,a=0,l=1},view:()=>v,proj:()=>(Pi.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Fe})=>{let Qe=Fe-Ft;Ft=Fe;let qe=[0,0,0],dt=[];Ii.set(p,Math.sin(r[1]),0,-Math.cos(r[1])),Ii.set(h,0,1,0);let at=g?U6:B6,Gt=Math.sin(n[1]),et=-Math.cos(n[1]),fe=Y6(c),Ye=Gt*fe.ahead[0]+et*fe.ahead[1],pt=Gt*fe.back[0]+et*fe.back[1],lt=l;Math.max(Ye,pt)>.3&&(lt=Ye>=pt?1:-1);let Zt=k?0:-i[2]*at;f+=(Zt-f)*(1-Math.exp(-Math.min(Qe,.1)*5.5)),Zt===0&&Math.abs(f)<.01&&(f=0);let Ht=f*lt*Math.min(Qe,.1);k&&(i[0]=0,i[2]=0,Ht=0,f=0),Ht!==0&&(l=Math.sign(Ht)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(du,c+Ht));let w=Wg(c);Ii.set(d,w[0]-s[0],0,w[1]-s[2]);let _t=Ii.len(d);_t===0&&u!==.25&&(u=(Math.abs((u+.5)%1-.5)-.25)*.8+.25,(u+.01)%.25<.02&&(u=.25));let Jt=u;if(u+=_t/(g?V6:W6),s[1]=Ug,Ii.add(s,s,d),E<1){E+=Qe/j6,E=Math.min(E,1);let nt=eM(E);Ii.set(s,Vg(nt,y[0],b[0]),s[1],Vg(nt,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(Qe,.1)*Q6),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),Pi.identity(v),Pi.rotateX(v,v,0),Pi.rotateY(v,v,r[1]),Pi.translate(v,v,Ii.scale(qe,s,-1))}}}});var Qg=ve((TA,Kg)=>{"use strict";var{skylightGLSL:tM,Z_START:oM,Z_END:nM,GLASS_Y:rM}=y0(),{oculusGLSL:aM,A:Oi}=Fr(),{windowLightGLSL:iM,C:kl}=Un(),{doorLightGLSL:sM}=vi(),Ll=Ln(),Ar=e=>e.toFixed(4),pu=.1,vu=700,Fi={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.045};function cM(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],p=t[9],h=t[10],d=t[11],u=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,E=o*l-a*i,k=n*c-r*s,L=n*l-a*s,N=r*l-a*c,H=f*v-p*u,U=f*m-h*u,W=f*g-d*u,Q=p*m-h*v,ie=p*g-d*v,oe=h*g-d*m,ee=y*oe-b*ie+E*Q+k*W-L*U+N*H;return ee?(ee=1/ee,e[0]=(s*oe-c*ie+l*Q)*ee,e[1]=(r*ie-n*oe-a*Q)*ee,e[2]=(v*N-m*L+g*k)*ee,e[3]=(h*L-p*N-d*k)*ee,e[4]=(c*W-i*oe-l*U)*ee,e[5]=(o*oe-r*W+a*U)*ee,e[6]=(m*E-u*N-g*b)*ee,e[7]=(f*N-h*E+d*b)*ee,e[8]=(i*ie-s*W+l*H)*ee,e[9]=(n*W-o*ie-a*H)*ee,e[10]=(u*L-v*E+g*y)*ee,e[11]=(p*E-f*L-d*y)*ee,e[12]=(s*U-i*Q-c*H)*ee,e[13]=(o*Q-n*U+r*H)*ee,e[14]=(v*b-u*k-m*y)*ee,e[15]=(f*k-p*b+h*y)*ee,e):null}function lM(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var fM=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Kg.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:22,a=()=>t.post>=2?2:4,i=Te=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},Te||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),l=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,f=e.framebuffer({color:c,depth:l||!0}),p=[s(),s()],h=[s(),s()],d=[s(),s()],u=[s(),s()],v=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},E=(Te,ne,Xe)=>e(Object.assign({vert:fM,frag:Te,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:ne,framebuffer:e.prop("out")},Xe||{})),k=[2.6,0,oM-3.2,12.6,rM,nM+.4],L=[Oi.x0-.2,0,Oi.z0,Oi.x1,Oi.domeTop,Oi.z1],N=[kl.x0,0,kl.z0,kl.x1,7.6,kl.z1],H=[.35,0,.35,13.65,7.6,9],U=Te=>`vec3(${Ar(Te[0])}, ${Ar(Te[1])}, ${Ar(Te[2])}), vec3(${Ar(Te[3])}, ${Ar(Te[4])}, ${Ar(Te[5])})`,W=E(`
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

	${tM()}
	${aM()}
	${iM()}
	${sM()}

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
		const int N = ${r};
		vec3 sum = vec3(0.0);

		// the skylight
		if (strength.x > 0.0) {
			vec2 t = hitBox(eye, rd, ${U(k)});
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
			vec2 t = hitBox(eye, rd, ${U(L)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Ar(Oi.dome.base)} && p.x > ${Ar(Oi.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${U(N)});
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
			vec2 t = hitBox(eye, rd, ${U(H)});
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
	}`,{depthTex:()=>l,invVP:()=>v,eye:()=>g,time:e.context("time"),night:()=>Ll.night,strength:()=>{let Te=Fi.shafts*y.shafts,ne=Ll.night;return[.06*Te*(1+.9*ne),.1*Te*(1+.9*ne),.07*Te*(1+.4*ne),.04*Te*(1-.75*ne)]}}),Q=E(`
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
	}`,{src:e.prop("src"),dir:(Te,ne)=>[ne.dir[0]/ne.size[0],ne.dir[1]/ne.size[1]]}),ie=E(`
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
	}`,{src:e.prop("src"),texel:(Te,ne)=>[.5/ne.size[0],.5/ne.size[1]],threshold:e.prop("threshold")}),oe=E(`
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
		return 2.0 * ${Ar(pu)} * ${Ar(vu)} / (${Ar(vu+pu)} - z * ${Ar(vu-pu)});
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
	}`,{scene:()=>c,depthTex:()=>l||c,soft:()=>p[0],bloomA:()=>h[0],bloomB:()=>d[0],shafts:()=>u[0],res:Te=>[Te.drawingBufferWidth,Te.drawingBufferHeight],time:e.context("time"),exposure:()=>Fi.exposure*y.exposure,vignette:()=>Math.min(1,Fi.vignette+y.vignette+.22*Ll.night),night:()=>Ll.night,grain:()=>Fi.grain,bloomK:()=>Fi.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>t.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),ee=e({framebuffer:()=>f});return{shot:y,look:Fi,hasDepth:n,capture(Te,ne,Xe){let ue=Te.drawingBufferWidth,ut=Te.drawingBufferHeight;f.resize(ue,ut);let wt=Math.max(1,Math.ceil(ue/2)),Xt=Math.max(1,Math.ceil(ut/2));p.forEach(mt=>mt.resize(wt,Xt)),h.forEach(mt=>mt.resize(Math.max(1,Math.ceil(ue/4)),Math.max(1,Math.ceil(ut/4)))),d.forEach(mt=>mt.resize(Math.max(1,Math.ceil(ue/8)),Math.max(1,Math.ceil(ut/8)))),u.forEach(mt=>mt.resize(Math.max(1,Math.ceil(ue/a())),Math.max(1,Math.ceil(ut/a())))),lM(m,ne.proj,ne.view),cM(v,m),g[0]=ne.eye[0],g[1]=ne.eye[1],g[2]=ne.eye[2],ee(()=>{e.clear({color:[0,0,0,1],depth:1}),Xe()})},present(){let Te=ne=>[ne.width,ne.height];n&&t.post>=1&&Fi.shafts*y.shafts>.001?(W({out:u[0]}),Q({out:u[1],src:u[0],dir:[1,0],size:Te(u[0])}),Q({out:u[0],src:u[1],dir:[0,1],size:Te(u[0])})):e.clear({color:[0,0,0,1],framebuffer:u[0]}),ie({out:p[0],src:c,size:[f.width,f.height],threshold:0}),Q({out:p[1],src:p[0],dir:[1,0],size:Te(p[0])}),Q({out:p[0],src:p[1],dir:[0,1],size:Te(p[0])}),ie({out:h[0],src:p[0],size:Te(p[0]),threshold:.42}),Q({out:h[1],src:h[0],dir:[1,0],size:Te(h[0])}),Q({out:h[0],src:h[1],dir:[0,1],size:Te(h[0])}),ie({out:d[0],src:h[0],size:Te(h[0]),threshold:0}),Q({out:d[1],src:d[0],dir:[1.5,0],size:Te(d[0])}),Q({out:d[0],src:d[1],dir:[0,1.5],size:Te(d[0])}),oe({out:null})}}}});var ox=ve((kA,tx)=>{"use strict";var Zg=Ln().GLSL,hM=pi(),mu=vi(),{C:uM,FAR_DOOR:dM}=Un(),pM=100*Math.PI/180,Jg=e=>[dM.x-e[2],e[1],uM.zc-7+e[0]],ex=e=>[-e[2],e[1],e[0]];function vM(e){let t=[],o=[],n=[],r=[],a=hM.createBuilder(t,o,n,r);mu.addFrames(a,e);let i=mu.glassPanes(e),s=c=>{let l=[];for(let f=0;f<c.length;f+=3)l.push([c[f],c[f+1],c[f+2]]);return l};return{position:s(t),normal:s(o),elements:n,glass:i}}tx.exports=e=>{let t=mu.DOOR,o=["left","right"].map(f=>{let p=vM(f),h=p.position.length;return{part:f,hinge:f==="left"?t.x0:t.x1,sign:f==="left"?-1:1,src:p.position.map(d=>d.slice()),srcN:p.normal.map(d=>d.slice()),srcG:p.glass.map(d=>d.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(p.elements),type:"uint32"}),glassCount:p.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(p.glass.length*3),outGN:new Float32Array(p.glass.length*3)}}),n=null;function r(f){if(f!==n){n=f;for(let p of o){let h=p.sign*f,d=Math.cos(h),u=Math.sin(h),v=y=>{let b=y[0]-p.hinge,E=y[2];return[p.hinge+b*d+E*u,y[1],-b*u+E*d]},m=y=>[y[0]*d+y[2]*u,y[1],-y[0]*u+y[2]*d];p.src.forEach((y,b)=>{let E=Jg(v(y));p.outP.set(E,b*3),p.outN.set(ex(m(p.srcN[b])),b*3)});let g=ex(m([0,0,1]));p.srcG.forEach((y,b)=>{p.outG.set(Jg(v(y)),b*3),p.outGN.set(g,b*3)}),p.pos.subdata(p.outP),p.nrm.subdata(p.outN),p.gpos.subdata(p.outG),p.gnrm.subdata(p.outGN)}}}r(0);let a=`
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
		${Zg}
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
		${Zg}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,l=()=>{r(c*pM);for(let f of o)i({pos:f.pos,nrm:f.nrm,el:f.el})};return l.glass=()=>{for(let f of o)s({pos:f.gpos,nrm:f.gnrm,count:f.glassCount})},l.setOpen=f=>{c=f||0},l}});var rx=ve((LA,nx)=>{"use strict";var mM=Ln().GLSL,{skylightGLSL:gM}=y0(),{oculusGLSL:xM}=Fr(),{windowLightGLSL:yM}=Un(),da=.22;function bM(){let e=[],t=[],o=[],n=[];for(let c=0;c<=14;c++){let l=c/14,f=da*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9);for(let p=0;p<=4*2;p++){let h=p/4-1,d=l*da-da*.12,u=h*f,v=Math.abs(h)*f*.35-.12*l*l*da;e.push([d,v,u]),t.push([0,1,0]),o.push([l,h])}}let i=4*2+1;for(let c=0;c<14;c++)for(let l=0;l<i-1;l++){let f=c*i+l,p=f+1,h=f+i,d=h+1;n.push([f,h,p],[p,h,d])}let s=e.length;return e.push([-da*.12,0,-.003],[-da*.12,0,.003],[-da*.24,-.01,.0015],[-da*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([s,s+2,s+1],[s,s+3,s+2]),{pos:e,nrm:t,uv:o,idx:n}}nx.exports=e=>{let t=bM(),o=e({vert:`
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
		${mM}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${gM()}
		${xM()}
		${yM()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=Ln(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(da*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var sx=ve((zA,ix)=>{"use strict";var{skylightGLSL:wM,Z_START:ax,Z_END:_M}=y0(),{oculusGLSL:MM,A:D0}=Fr();ix.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=7,a=()=>(r=r*16807%2147483647,(r-1)/2147483646),i=[];for(let s=0;s<o;s++)i.push([2.5+a()*10.5,.3+a()*8,ax-3.5+a()*(_M-ax+4.5),a()]);for(let s=0;s<n;s++)i.push([D0.x0+.3+a()*(D0.x1-D0.x0-.6),.3+a()*7.5,D0.z0+.3+a()*(D0.z1-D0.z0-.6),a()]);return e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;

		${wM()}
		${MM()}

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
			gl_FragColor = vec4(mix(vec3(1.0, 0.93, 0.80), vec3(0.78, 0.86, 1.0) * 0.85, night) * a * v_light * tw * 0.75, 1.0);
		}`,attributes:{seed:i},count:i.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:s=>s.viewportHeight*.006},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}})}});var dx=ve((CA,ux)=>{"use strict";var{C:hx}=Un(),cx=Ln(),lx=15.3,EM=37.1,fx=hx.z1+.9,SM=hx.z1+.7+16-.6;ux.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let l=0;l<o;l++){let f=.35+Math.pow(r(),1.8)*2.4;a.push([lx+r()*(EM-lx),f,fx+r()*(SM-fx),r()])}let i=[],s=[];a.forEach(l=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(f=>{i.push(f[0],f[1]),s.push(...l)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>cx.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){cx.night>.01&&c()}}});var Rl=ve((RA,ur)=>{"use strict";var px=Ln(),Gi=tl(),AM=C0(),Va=Math.PI,st=e=>(+e).toFixed(4),qr=e=>`vec3(${st(e[0])}, ${st(e[1])}, ${st(e[2])})`,wo={x0:-2.05,z0:41.45,z1:47.55,top:5.1},so=-.55,hn=-2,Ko=42.25,bn=43.65,Lr=45.35,Kn=46.75,xn=2.75,Dr=.12,TM=(so+hn)/2,po={x:-1.3,y:1.42,w:.42,h:.52,z:bn,cell:.026},bt={x0:-1.85,x1:-.75,top:.98,z0:bn-.3,z1:bn-.02},Tr={x0:-1.44,x1:-1.16,y0:bt.top-.002,y1:bt.top+.018},hr={cx:-1.3,cz:bn-.165,w:.2,d:.255,y:bt.top+.0012},Sn={x:-1.03,z:bn-.14,r:.042,h:.075},Eo={x:-.86,z:bn-.12,h:.085,r:.019};Eo.flame=[Eo.x,bt.top+.012+Eo.h+.028,Eo.z];var Cl={a:[Sn.x-.004,bt.top+.03,Sn.z+.004],b:[Sn.x-.13,bt.top+.34,Sn.z-.12]},Po=[-1.5,2.42,44.66],nn=[-1.78,1.95,Ko+.09],kr={x:-1.32,z:44.08,y:.64,heading:.32},kM={window:{eye:[-1.3,1.33,42.8],target:[po.x,1.37,bn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[hr.cx,bt.top,hr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Wa={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function vx(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${st(po.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${qr(Po)};
		if (d.z > -0.001) return 0.0;
		float t = (${st(po.z)} - ${st(Po[2])}) / d.z;
		vec2 g = (${qr(Po)} + d * t).xy - vec2(${st(po.x)}, ${st(po.y)});
		float inWin = (1.0 - smoothstep(${st(po.w/2-.01)}, ${st(po.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${st(po.h/2-.01)}, ${st(po.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${st(po.z)}) / abs(${st(po.z)} - ${st(Po[2])}) / ${st(po.cell)};
		vec2 qc = fract(g / ${st(po.cell)} + 0.5) - 0.5;
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
		vec3 c = ${qr(Eo.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${st(Sn.x)}, ${st(Sn.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${st(Sn.x)}, ${st(Sn.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${st(Sn.r*.7)}, ${st(Sn.r*1.6)}, r)) * (1.0 - smoothstep(${st(bt.top+Sn.h*.8)}, ${st(bt.top+Sn.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${qr(Cl.a)}, qb = ${qr(Cl.b)};
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
		bool inB1 = p.z < ${st(bn)} && p.z > ${st(Ko-.04)} && p.x < ${st(so+.02)};
		bool inPriest = p.z >= ${st(bn)} && p.z < ${st(Lr)} && p.x < ${st(so)};
		bool inB2 = p.z >= ${st(Lr)} && p.z < ${st(Kn+.04)} && p.x < ${st(so)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${st(hn)}, ${st(so)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${st(wo.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${qr(Gi.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${qr(Po)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${qr(nn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${qr(Eo.flame)} - p;
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
	}`}var yn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function gx(){let e=[],t=[],o=[],n=[],r=[],a=(l,f)=>[l[0]-f[0],l[1]-f[1],l[2]-f[2]],i=(l,f)=>[l[1]*f[2]-l[2]*f[1],l[2]*f[0]-l[0]*f[2],l[0]*f[1]-l[1]*f[0]],s=l=>{let f=Math.hypot(l[0],l[1],l[2])||1;return[l[0]/f,l[1]/f,l[2]/f]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(l,f,p,h)=>(e.push(l[0],l[1],l[2]),t.push(f[0],f[1],f[2]),o.push(p),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(l,f,p,h,d,u)=>{let v=s(i(a(f,l),a(h,l)));u=u||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(l,v,d,u[0]),g=c.v(f,v,d,u[1]),y=c.v(p,v,d,u[2]),b=c.v(h,v,d,u[3]);r.push(m,g,y,m,y,b)},c.box=(l,f,p,h,d,u,v)=>{let m=(g,y,b,E,k,L,N,H)=>c.quad(g,y,b,E,v,[[k,N],[L,N],[L,H],[k,H]]);m([h,f,p],[h,f,u],[h,d,u],[h,d,p],p,u,f,d),m([l,f,u],[l,f,p],[l,d,p],[l,d,u],u,p,f,d),m([l,d,p],[h,d,p],[h,d,u],[l,d,u],l,h,p,u),m([l,f,u],[h,f,u],[h,f,p],[l,f,p],l,h,u,p),m([l,f,u],[h,f,u],[h,d,u],[l,d,u],l,h,f,d),m([h,f,p],[l,f,p],[l,d,p],[h,d,p],h,l,f,d)},c.tube=(l,f,p,h)=>{h=h||6;let d=e.length/3;for(let u=0;u<l.length;u++){let v=l[Math.max(0,u-1)],m=l[Math.min(l.length-1,u+1)],g=s(a(m,v)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),E=i(b,g),k=typeof f=="function"?f(u/(l.length-1)):f;for(let L=0;L<=h;L++){let N=L/h*Va*2,H=Math.cos(N),U=Math.sin(N),W=[b[0]*H+E[0]*U,b[1]*H+E[1]*U,b[2]*H+E[2]*U];c.v([l[u][0]+W[0]*k,l[u][1]+W[1]*k,l[u][2]+W[2]*k],W,p,[u/(l.length-1),L/h])}}for(let u=0;u<l.length-1;u++)for(let v=0;v<h;v++){let m=d+u*(h+1)+v,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(l,f,p,h,d)=>{d=d||20;let u=e.length/3;for(let v=0;v<p.length;v++){let[m,g]=p[v],y=p[Math.max(0,v-1)],b=p[Math.min(p.length-1,v+1)],E=b[0]-y[0],k=b[1]-y[1];for(let L=0;L<=d;L++){let N=L/d*Va*2,H=Math.cos(N),U=Math.sin(N),W=s([k*H,-E,k*U]);c.v([l+H*m,g,f+U*m],W,h,[L/d,v/(p.length-1)])}}for(let v=0;v<p.length-1;v++)for(let m=0;m<d;m++){let g=u+v*(d+1)+m,y=g+d+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(l,f,p,h,d,u)=>{let v=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=v[m],y=v[(m+1)%4],b=[l+g[0],p,f+g[1]],E=[l+y[0],p,f+y[1]],k=[l,d,f],L=s(i(a(k,b),a(E,b))),N=c.v(b,L,u,[0,0]),H=c.v(E,L,u,[1,0]),U=c.v(k,L,u,[.5,1]);r.push(N,U,H)}},c.orient=()=>{for(let l=0;l<r.length;l+=3){let[f,p,h]=[r[l],r[l+1],r[l+2]],d=m=>[e[m*3],e[m*3+1],e[m*3+2]],u=i(a(d(p),d(f)),a(d(h),d(f))),v=[0,1,2].map(m=>t[f*3+m]+t[p*3+m]+t[h*3+m]);u[0]*v[0]+u[1]*v[1]+u[2]*v[2]<0&&(r[l+1]=h,r[l+2]=p)}return c},c}function zl(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var zo={ys:1.78,a:.56,r:.78};zo.apex=zo.ys+Math.sqrt(zo.r*zo.r-(zo.r-zo.a)*(zo.r-zo.a));function LM(){let e=gx(),t=yn.WOOD,o=yn.CARVED,n=yn.DARKWOOD,r=.06;e.box(hn,0,Ko,so+.08,Dr,Kn,n),e.box(hn,xn-.06,Ko-.04,so+.1,xn,Kn+.04,t),e.box(so,xn-.2,Ko-.06,so+.12,xn-.06,Kn+.06,t),e.box(so+.02,xn,Ko-.08,so+.14,xn+.07,Kn+.08,n),e.box(hn,Dr,Ko,hn+.04,xn-.06,Kn,t);for(let[f,p,h]of[[Ko-r,Ko,-1],[Kn,Kn+r,1]]){e.box(hn,0,f,so+.08,xn,p,t);let d=h<0?f-.018:p;e.box(hn+.18,.45,Math.min(d,d+.018),so-.12,2.35,Math.max(d,d+.018),n),e.box(hn+.26,.55,Math.min(d,d+.03*h),so-.2,2.25,Math.max(d,d+.03*h),t)}{let f=bn-.02,p=bn+.02,h=po.x-po.w/2,d=po.x+po.w/2,u=po.y-po.h/2,v=po.y+po.h/2;e.box(hn,Dr,f,so,Tr.y0,p,t),e.box(hn,Tr.y0,f,Tr.x0,Tr.y1,p,t),e.box(Tr.x1,Tr.y0,f,so,Tr.y1,p,t),e.box(hn,Tr.y1,f,so,u,p,t),e.box(hn,u,f,h,v,p,t),e.box(d,u,f,so,v,p,t),e.box(hn,v,f,so,xn-.06,p,t);let m=.05,g=f-.025;e.box(h-m,u-m,g,d+m,u,f,n),e.box(h-m,v,g,d+m,v+m,f,n),e.box(h-m,u,g,h,v,f,n),e.box(d,u,g,d+m,v,f,n),e.box(h-m-.02,v+m,g-.015,d+m+.02,v+m+.03,f,t),e.box(Tr.x0-.01,Tr.y1,f-.006,Tr.x1+.01,Tr.y1+.008,f,yn.BRASS)}e.box(hn,Dr,Lr-.02,so,xn-.06,Lr+.02,t),e.box(bt.x0,bt.top-.035,bt.z0,bt.x1,bt.top,bt.z1,t),e.tube([[bt.x0,bt.top-.018,bt.z0],[bt.x1,bt.top-.018,bt.z0]],.02,t,8);for(let f of[bt.x0+.1,bt.x1-.1]){let p=[];for(let h=0;h<=8;h++){let d=h/8;p.push([f,bt.top-.04-.22*d,bt.z1-.02-.22*Math.cos(d*Va/2)])}e.tube(p,.018,n,6)}e.box(hn+.06,.12,Ko,so-.1,.44,Ko+.42,n),e.box(hn+.08,.44,Ko+.01,so-.12,.52,Ko+.41,yn.CUSHION),e.box(hn+.06,.12,Kn-.42,so-.1,.44,Kn,n),e.box(nn[0]-.05,nn[1]-.16,Ko,nn[0]+.05,nn[1]-.02,Ko+.012,yn.BRASS),e.tube([[nn[0],nn[1]-.09,Ko+.012],[nn[0],nn[1]-.09,nn[2]-.01],[nn[0],nn[1]-.05,nn[2]]],.006,yn.BRASS,6),e.lathe(nn[0],nn[2],[[0,nn[1]-.05],[.028,nn[1]-.035],[.034,nn[1]+.01],[.024,nn[1]+.06],[.026,nn[1]+.065]],yn.LAMPGLASS,16),e.box(kr.x-.22,.12,kr.z-.24,kr.x+.22,kr.y-.05,kr.z+.16,n),e.box(kr.x-.24,kr.y-.05,kr.z-.26,kr.x+.24,kr.y,kr.z+.18,yn.CUSHION),e.tube([[Po[0],xn-.06,Po[2]],[Po[0],Po[1]+.07,Po[2]]],.005,yn.BRASS,5),e.lathe(Po[0],Po[2],[[0,Po[1]+.09],[.03,Po[1]+.08],[.02,Po[1]+.06]],yn.BRASS,12),e.lathe(Po[0],Po[2],[[0,Po[1]-.06],[.035,Po[1]-.04],[.045,Po[1]],[.035,Po[1]+.05],[.018,Po[1]+.07]],yn.LAMPGLASS,16);let a=so,i=so+r;function s(f,p,h){let d=(f+p)/2,u=40,v=[];for(let g=0;g<=u;g++)v.push(Dr+(xn-.2-Dr)*g/u);let m=[];v.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(zo.ys+(zo.apex-zo.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let E=h?zl(y,zo.ys,zo.a,zo.r):0,k=h?zl(b,zo.ys,zo.a,zo.r):0,L=(N,H)=>[N,H];e.quad([i,y,d-E],[i,y,f],[i,b,f],[i,b,d-k],t,[L(d-E,y),L(f,y),L(f,b),L(d-k,b)]),e.quad([i,y,p],[i,y,d+E],[i,b,d+k],[i,b,p],t,[L(p,y),L(d+E,y),L(d+k,b),L(p,b)]),(E>0||k>0)&&(e.quad([a,y,d-E],[i,y,d-E],[i,b,d-k],[a,b,d-k],n),e.quad([i,y,d+E],[a,y,d+E],[a,b,d+k],[i,b,d+k],n),e.quad([a,y,f],[a,y,d-E],[a,b,d-k],[a,b,f],t),e.quad([a,y,d+E],[a,y,p],[a,b,p],[a,b,d+k],t))}if(e.box(a,xn-.2,f,i,xn-.06,p,t),e.box(i,xn-.42,f+.05,i+.012,xn-.24,p-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,E=b<.5?Dr+(zo.apex-Dr)*(b*2):zo.apex-(zo.apex-Dr)*((b-.5)*2),k=b<.5?-1:1;g.push([i+.01,Math.min(E,zo.apex-.002),d+k*(zl(E,zo.ys,zo.a,zo.r)+.03)])}e.tube(g,.022,n,6)}}s(Ko,bn,!0),s(Lr,Kn,!0);{let f=bn,p=Lr,h=(f+p)/2;e.box(a,Dr,f,i,xn-.06,p,t);let d={ys:1.85,a:.55,r:.8},u=[];for(let v=0;v<=40;v++){let m=v/40,g=d.ys+Math.sqrt(d.r*d.r-(d.r-d.a)*(d.r-d.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;u.push([i+.012,Math.min(y,g-.002),h+b*zl(y,d.ys,d.a,d.r)])}u.push(u[0]),e.tube(u,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,p-.13],[i+.06,1.12,p-.13],[i+.06,1.12,p-.2]],.009,yn.BRASS,6)}[Ko-.02,bn,Lr,Kn+.02].forEach((f,p)=>{let h=p===1||p===2,d=.075,u=xn+(h?.62:.4);e.box(so+.06,0,f-d,so+.06+2*d,u,f+d,t),e.box(so+.04,u-.04,f-d-.02,so+.08+2*d,u,f+d+.02,n);let v=so+.06+d,m=h?.62:.5;e.spire(v,f,u,d*.95,u+m,t);for(let g=1;g<=3;g++){let y=u+m*g/4.2,b=d*.95*(1-g/4.2)+.02;for(let[E,k]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[v+E*(b-.02),y-.02,f+k*(b-.02)],[v+E*(b+.015),y+.03,f+k*(b+.015)]],.008,n,4)}e.lathe(v,f,[[0,u+m-.02],[.03,u+m+.03],[.022,u+m+.07],[0,u+m+.1]],t,10)});let l=(f,p,h)=>{let d=(f+p)/2,u=so+.075,v=xn+.07,m=v+h,g=[1,0,0],y=e.v([u,v,f],g,o,[f,v]),b=e.v([u,v,p],g,o,[p,v]),E=e.v([u,m,d],g,o,[d,m]);e.idx.push(y,b,E);let k=e.v([u-.04,v,f],[-1,0,0],t),L=e.v([u-.04,v,p],[-1,0,0],t),N=e.v([u-.04,m,d],[-1,0,0],t);e.idx.push(k,N,L);let H=[],U=[];for(let oe=0;oe<=10;oe++){let ee=oe/10;H.push([u+.02,v+h*ee,f+(d-f)*ee]),U.push([u+.02,v+h*ee,p+(d-p)*ee])}e.tube(H,.022,n,6),e.tube(U,.022,n,6);for(let oe=2;oe<=8;oe+=2)for(let ee of[H[oe],U[oe]])e.tube([ee,[ee[0]+.01,ee[1]+.06,ee[2]+(ee===H[oe]?-.02:.02)]],.01,n,4);e.lathe(u,d,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([oe,ee])=>[oe,ee]),t,10);let W=Math.min(.17,h*.32),Q=v+h*.38,ie=[];for(let oe=0;oe<=24;oe++){let ee=oe/24*Va*2;ie.push([u+.012,Q+Math.sin(ee)*W,d+Math.cos(ee)*W])}e.tube(ie,.012,n,5)};l(Ko-.02,bn,.52),l(bn,Lr,.82),l(Lr,Kn+.02,.52),e.lathe(Sn.x,Sn.z,[[0,bt.top],[.036,bt.top+.001],[Sn.r,bt.top+.012],[Sn.r*1.02,bt.top+.035],[.036,bt.top+.052],[.02,bt.top+.062],[.016,bt.top+.068]],yn.INKGLASS,24),e.lathe(Sn.x,Sn.z,[[.016,bt.top+.064],[.021,bt.top+.066],[.022,bt.top+.075],[.016,bt.top+.076],[0,bt.top+.072]],yn.BRASS,20);{let f=Cl.a,p=Cl.b,h=26,d=y=>{let b=Math.sin(y*Va)*.025;return[f[0]+(p[0]-f[0])*y+b*.6,f[1]+(p[1]-f[1])*y+b*.4,f[2]+(p[2]-f[2])*y+b]},u=[];for(let y=0;y<=h;y++)u.push(d(y/h));e.tube(u,y=>.0028*(1-.7*y)+6e-4,yn.QUILL,5);let v=e.norm(e.sub(p,f)),m=e.norm(e.cross(v,[.2,1,.1])),g=e.cross(m,v);for(let y of[-1,1]){let b=e.pos.length/3;for(let E=0;E<=h;E++){let k=E/h,L=d(k),N=k<.28?0:(y>0?.03:.02)*Math.sin(Va*Math.pow((k-.28)/.72,.75)),H=N*.25,U=[L[0]+m[0]*y*N-g[0]*H,L[1]+m[1]*y*N-g[1]*H,L[2]+m[2]*y*N-g[2]*H];e.v(L,g,yn.QUILL,[k,0]),e.v(U,g,yn.QUILL,[k,y])}for(let E=0;E<h;E++){let k=b+E*2;e.idx.push(k,k+2,k+1,k+1,k+2,k+3)}}}return e.orient()}function zM(e,t){let n=wo.top,r=wo.x0;e(r-.35,0,wo.z0-.35,r,n+.35,wo.z1+.35),e(r,0,wo.z0-.35,-.35,n,wo.z0),e(r,0,wo.z1,-.35,n,wo.z1+.35),e(r,n,wo.z0,-.35,n+.35,wo.z1),e(.35,0,wo.z0-.42,.35+.16,n,wo.z0),e(.35,0,wo.z1,.35+.16,n,wo.z1+.42),e(.35,n,wo.z0-.5,.35+.18,n+.42,wo.z1+.5),e(.35,n+.42,wo.z0-.6,.35+.26,n+.52,wo.z1+.6),e(.35,0,wo.z0-.5,.35+.22,.42,wo.z0),e(.35,0,wo.z1,.35+.22,.42,wo.z1+.5),e(-.35-.01,0,wo.z0,.35+.12,.02,wo.z1),t(r,wo.z0,-.35,wo.z1)}ur.exports=e=>{let t=Ra(),o=px.GLSL,n=LM(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${Gi.roomGLSL()}
	${vx()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(ne,Xe,ue,ut){let wt=[],Xt=[],mt=[],Yt=[],Ct=[],Ft=so-.02,Fe=zo.apex+.08,Qe=Dr+.015;for(let qe=0;qe<=40;qe++){let dt=qe/40,at=Fe+(Qe-Fe)*dt;for(let Gt=0;Gt<=90;Gt++){let et=Gt/90,fe=ue?.2+.13*dt*dt:Xe-ne,Ye=ne+et*fe,pt=ue?.05+.02*dt:.035+.01*Math.sin(et*7),lt=et*ut*Va*2+Math.sin(dt*2+et*5)*.6,Zt=Ft-pt*(.5+.5*Math.sin(lt))-(ue?.02*dt:0),w=[1,0,-(-pt*.5*Math.cos(lt)*ut*Va*2/fe)],_t=Math.hypot(w[0],w[1],w[2]);wt.push(Zt,at,Ye),Xt.push(w[0]/_t,0,w[2]/_t),mt.push(2),Yt.push(Math.sin(lt),dt)}}for(let qe=0;qe<40;qe++)for(let dt=0;dt<90;dt++){let at=qe*91+dt,Gt=at+90+1;Ct.push(at,Gt,at+1,at+1,Gt,Gt+1)}for(let qe=0;qe<Ct.length;qe+=3){let[dt,at,Gt]=[Ct[qe],Ct[qe+1],Ct[qe+2]],et=lt=>[wt[lt*3],wt[lt*3+1],wt[lt*3+2]],fe=[0,1,2].map(lt=>et(at)[lt]-et(dt)[lt]),Ye=[0,1,2].map(lt=>et(Gt)[lt]-et(dt)[lt]);fe[1]*Ye[2]-fe[2]*Ye[1]<0&&(Ct[qe+1]=Gt,Ct[qe+2]=at)}return{pos:wt,nrm:Xt,kind:mt,uv:Yt,idx:Ct}}let c=s(Ko+.02,Ko+.4,!0,6),l=s(Lr+.04,Kn-.04,!1,9),f={pos:c.pos.concat(l.pos),nrm:c.nrm.concat(l.nrm),kind:c.kind.concat(l.kind),uv:c.uv.concat(l.uv),idx:c.idx.concat(l.idx.map(ne=>ne+c.pos.length/3))},p=e({vert:`
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
			vec3 p = vec3(${st(po.x)} + corner.x * ${st(po.w/2)}, ${st(po.y)} + corner.y * ${st(po.h/2)}, ${st(po.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${st(po.x)}, ${st(po.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${st(po.z)} ? -1.0 : 1.0);
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
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${st(po.x)} + corner.x * 0.75, ${st(po.y)} + corner.y * 0.9, ${st(Lr-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),u=14,v=[];for(let ne=0;ne<u;ne++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(Xe=>v.push(Xe[0],Xe[1],(ne+.5)/u));let m=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${st(TM)} + c.x * ${st((so-hn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${st(bn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${vx().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${qr(Po)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(v),size:3}},count:v.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),g=(()=>{if(typeof document=="undefined")return null;let ne=document.createElement("canvas");ne.width=512,ne.height=652;let Xe=ne.getContext("2d");Xe.fillStyle="#cdb38a",Xe.fillRect(0,0,ne.width,ne.height);let ue=7,ut=()=>(ue=ue*1664525+1013904223>>>0,ue/4294967296);for(let Xt=0;Xt<2400;Xt++){Xe.fillStyle=`rgba(${ut()<.5?"90,62,30":"245,230,200"},${.03+ut()*.05})`;let mt=ut()*ne.width,Yt=ut()*ne.height;Xe.fillRect(mt,Yt,1+ut()*14,1)}for(let Xt=0;Xt<26;Xt++){let mt=ut()*ne.width,Yt=ut()*ne.height,Ct=20+ut()*90,go=Xe.createRadialGradient(mt,Yt,0,mt,Yt,Ct);go.addColorStop(0,`rgba(120,80,35,${.04+ut()*.06})`),go.addColorStop(1,"rgba(120,80,35,0)"),Xe.fillStyle=go,Xe.fillRect(mt-Ct,Yt-Ct,Ct*2,Ct*2)}let wt=Xe.createRadialGradient(ne.width/2,ne.height/2,ne.width*.3,ne.width/2,ne.height/2,ne.height*.72);return wt.addColorStop(0,"rgba(110,70,30,0)"),wt.addColorStop(1,"rgba(110,70,30,0.38)"),Xe.fillStyle=wt,Xe.fillRect(0,0,ne.width,ne.height),ne})(),y=g?e.texture({data:g,min:"linear",mag:"linear",flipY:!1}):e.texture(),b=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),E=[18,24],k=[],L=[];for(let ne=0;ne<=E[1];ne++)for(let Xe=0;Xe<=E[0];Xe++)k.push(Xe/E[0],ne/E[1]);for(let ne=0;ne<E[1];ne++)for(let Xe=0;Xe<E[0];Xe++){let ue=ne*(E[0]+1)+Xe,ut=ue+E[0]+1;L.push(ue,ue+1,ut,ue+1,ut+1,ut)}let N=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${st(hr.cx+hr.w/2)} - s * ${st(hr.w)};
			float zNear = ${st(hr.cz-hr.d/2)};
			vec3 p = vec3(x, ${st(hr.y)}, zNear + t * ${st(hr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${st(hr.d)};
				float zf = zNear + 0.5 * ${st(hr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${st(hr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${st(bn+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(k),size:2}},elements:L,uniforms:{fold:()=>Wa.fold,slide:()=>Wa.slide,paperTex:y,inkTex:b},cull:{enable:!1}}),H=gx();H.lathe(Eo.x,Eo.z,[[0,bt.top],[.048,bt.top+.002],[.052,bt.top+.012],[.046,bt.top+.014],[.022,bt.top+.012],[0,bt.top+.012]],yn.BRASS,24),H.lathe(Eo.x,Eo.z,[[0,bt.top+.012],[Eo.r,bt.top+.012],[Eo.r*1.02,bt.top+.012+Eo.h*.6],[Eo.r,bt.top+.012+Eo.h],[Eo.r*.75,bt.top+.012+Eo.h-.004],[0,bt.top+.012+Eo.h-.008]],9,20),H.tube([[Eo.x,bt.top+.012+Eo.h-.008,Eo.z],[Eo.x+.001,bt.top+.012+Eo.h+.012,Eo.z]],.0012,8,4),H.orient();let U=e({vert:a,frag:`${r}
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
				float up = smoothstep(${st(bt.top+Eo.h*.4)}, ${st(bt.top+.012+Eo.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:H.pos,normal:H.nrm,kind:H.kind,uv:H.uv},elements:H.idx}),W=e({vert:`
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
			vec3 p = ${qr(Eo.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),Q=[0,0],ie=e({uniforms:{view:e.prop("view")}}),oe=new Float32Array(16);function ee(ne){AM.translate(oe,ne.view,Gi.OFF),ie({view:oe},()=>Te(ne))}function Te(ne){let Xe=ne&&ne.reflected;if(i(),p(),h(),Wa.ink&&Wa.inkDirty){let ue=Wa.ink;Q[0]!==ue.width||Q[1]!==ue.height?(b({data:ue,min:"linear",mag:"linear",flipY:!1}),Q=[ue.width,ue.height]):b.subimage(ue),Wa.inkDirty=!1}Wa.shown&&N(),px.night>.01&&(U(),Xe||(W({halo:1}),W({halo:0}))),Xe||(d(),m())}return ee};ur.exports.addBay=zM;ur.exports.BAY=wo;ur.exports.OFF=Gi.OFF;ur.exports.STATE=Wa;var mx=e=>[e[0]+Gi.OFF[0],e[1]+Gi.OFF[1],e[2]+Gi.OFF[2]];ur.exports.SHOTS=Object.fromEntries(Object.entries(kM).map(([e,t])=>[e,Object.assign({},t,{eye:mx(t.eye),target:mx(t.target)})]));ur.exports.SEAT=kr;ur.exports.LAMP=Po;ur.exports.SCONCE=nn;ur.exports.GRILLE=po;ur.exports.PAPER=hr;ur.exports.ZONE={FRONT:so,BACK:hn,ZA:Ko,ZB:bn,ZC:Lr,ZD:Kn}});var gu=ve((NA,yx)=>{"use strict";function CM(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var xx={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},RM=["th","ng","er"];function NM(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(xx).forEach(v=>{r[v]=xx[v]*o.pace});let a=[],i=0,s=0,c=0,l=[];function f(v,m){let g=CM(o.seed),y=o.xh,b={},E=ee=>{let Te=t[ee];if(!Te)return null;let ne=Math.floor(g()*Te.length);return Te.length>1&&ne===b[ee]&&(ne=(ne+1)%Te.length),b[ee]=ne,Te[ne]},k=ee=>{if(t[ee])return{g:E(ee),sc:1};let Te=ee.toLowerCase();return t[Te]?{g:E(Te),sc:/[A-Z]/.test(ee)?1.32:1}:null},L=[],N=.15,H=0,U=0,W=(g()-.5)*.02,Q=m/y,ie=v.split(/\n\s*\n/);ie.forEach((ee,Te)=>{ee.replace(/\s+/g," ").trim().split(" ").forEach(Xe=>{let ue=[];for(let mt=0;mt<Xe.length;mt++){let Yt=Xe.substr(mt,2).toLowerCase();if(RM.indexOf(Yt)>=0&&t[Yt]&&g()<.55&&Xe[mt]===Xe[mt].toLowerCase()){ue.push({ch:Yt,gl:{g:E(Yt),sc:1}}),mt++;continue}let Ct=k(Xe[mt]);Ct&&Ct.g&&ue.push({ch:Xe[mt],gl:Ct})}let ut=ue.map(()=>.17+g()*.07),wt=ue.reduce((mt,Yt,Ct)=>mt+Yt.gl.g.w*Yt.gl.sc+ut[Ct],0);H>0&&H+wt>Q&&(H=0,U++,N+=r.line,W=(g()-.5)*.02),ue.forEach((mt,Yt)=>{let Ct=mt.gl.g,go=mt.gl.sc*(.95+g()*.1),je=(g()-.5)*.06,Ft=(g()-.5)*.08+W*H,Fe=H,Qe=U*o.lineHeight+1.9+Ft,qe=Math.cos(je),dt=Math.sin(je),at=et=>[(Fe+(et[0]*qe-et[1]*dt)*go)*y,(Qe+(et[0]*dt+et[1]*qe)*go)*y],Gt=(et,fe)=>{let Ye=0;for(let lt=1;lt<et.length;lt++)Ye+=Math.hypot(et[lt][0]-et[lt-1][0],et[lt][1]-et[lt-1][1]);let pt=Math.max(o.minDur||(fe?.06:.07),Ye/(o.speed*y));L.push({pts:et,L:Ye,start:N,dur:pt,dot:fe}),N+=pt};if(Ct.s.forEach((et,fe)=>{fe>0&&(N+=r.stroke),Gt(et.map(at),!1)}),Ct.dot){let et=Ct.s[0][0];Ct.s.forEach(Ye=>Ye.forEach(pt=>{pt[1]<et[1]&&(et=pt)}));let fe=at([et[0]+.1,-1.36]);N+=r.stroke*1.4,Gt([fe,[fe[0]+y*.05,fe[1]+y*.03]],!0)}N+=r.letter*(.6+g()*.8),H+=Ct.w*go+ut[Yt]});let Xt=Xe[Xe.length-1];N+=/[.!?]/.test(Xt)?r.stop:/[,;:]/.test(Xt)?r.comma:r.word,H+=.55+g()*.2}),Te<ie.length-1&&(H=0,U+=1.6,N+=r.para)});let oe=(U+1)*o.lineHeight*y+y*1.55;return{strokes:L,total:N,height:oe}}function p(v,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(v*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=v+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,v,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=v=>v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;function d(v,m){let g=l[v.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let E=1;E<v.pts.length;E++){let k=v.pts[E-1],L=v.pts[E],N=Math.hypot(L[0]-k[0],L[1]-k[1]),H=b,U=b+N;if(b=U,U<=g||N===0)continue;if(H>=m)break;let W=Math.max(0,(g-H)/N),Q=Math.min(1,(m-H)/N),ie=[k[0]+(L[0]-k[0])*W,k[1]+(L[1]-k[1])*W],oe=[k[0]+(L[0]-k[0])*Q,k[1]+(L[1]-k[1])*Q],ee=(H+U)/2/(v.L||1),Te=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,ee)));n.lineWidth=y*Te,n.globalAlpha=.86+.14*Te,n.beginPath(),n.moveTo(ie[0],ie[1]),n.lineTo(oe[0],oe[1]),n.stroke()}v.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(v.pts[0][0],v.pts[0][1],y*.75,0,Math.PI*2),n.fill()),l[v.i]=m}function u(v){let m=(v-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);d(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(u):o.onDone&&o.onDone()}return{write(v,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=f(v,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(v):o.maxTime;if(b&&i>b){let k=b/i;a.forEach(L=>{L.start*=k,L.dur*=k}),i=b}a.forEach((k,L)=>{k.i=L}),l=[],p(g,y.height);let E=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||E){a.forEach(k=>d(k,k.L));return}return c=performance.now(),s=requestAnimationFrame(u),i},finish(){cancelAnimationFrame(s),a.forEach(v=>d(v,v.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}yx.exports=NM});var yu=ve((PA,bx)=>{"use strict";var xu=Ln(),PM='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',IM='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';bx.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=xu.isNight;o.innerHTML=r?PM:IM,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),xu.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),xu.toggle()}),o}});var Ax=ve((IA,Sx)=>{"use strict";var un=Rl(),OM=gu(),FM="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",wx=100,Xa=e=>Math.max(0,Math.min(1,e)),q0=(e,t,o)=>{let n=Xa((o-e)/(t-e));return n*n*(3-2*n)},$i=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Ya=(e,t,o)=>e+(t-e)*o,_x=(e,t,o)=>[Ya(e[0],t[0],o),Ya(e[1],t[1],o),Ya(e[2],t[2],o)];function Nl(e,t){let o=e.length-1,n=Xa(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],l=e[Math.min(o,r+2)];return[0,1,2].map(f=>.5*(2*s[f]+(-i[f]+c[f])*a+(2*i[f]-5*s[f]+4*c[f]-l[f])*a*a+(-i[f]+3*s[f]-3*c[f]+l[f])*a*a*a))}var Mx=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function Ex(e,t,o){return{eye:_x(e.eye,t.eye,o),target:_x(e.target,t.target,o),fov:Ya(e.fov,t.fov,o),roll:Ya(e.roll||0,t.roll||0,o)}}var H0={letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Xs={letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},GM=`
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
`;Sx.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=GM,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),l=a.querySelector(".conf-hint"),f=a.querySelector(".conf-final"),p=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,h=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let je=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(wx-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>wx&&je&&(s.value=je[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(je=>s.addEventListener(je,Ft=>Ft.stopPropagation())),a.addEventListener("pointerdown",je=>je.stopPropagation()),a.addEventListener("click",je=>{let Ft=je.target.closest("button");Ft&&(je.stopPropagation(),Ft.dataset.act==="send"&&W(),Ft.dataset.act==="leave"&&oe())});let d=!1,u="",v=0,m=null,g=null,y="",b=null,E=0,k="",L=document.createElement("canvas");L.width=512,L.height=652;function N(je){je!==k&&(k=je,i.classList.toggle("on",je==="write"),l.classList.toggle("on",je==="hint"),f.classList.toggle("on",je==="final"),je==="write"&&setTimeout(()=>{if(u==="write")try{s.focus({preventScroll:!0})}catch(Ft){}},900))}function H(je){u=je,v=0}function U(je,Ft){if(d)return;d=!0,m={eye:je.eye.slice(),target:je.target.slice(),fov:je.fov,roll:je.roll||0},g=Object.assign({},Ft),y="",s.value="",c.disabled=!0,un.STATE.fold=0,un.STATE.slide=0,un.STATE.shown=!0,un.STATE.active=!0;let Fe=L.getContext("2d");Fe.setTransform(1,0,0,1,0,0),Fe.clearRect(0,0,L.width,L.height),un.STATE.ink=L,un.STATE.inkDirty=!0,document.body.classList.add("confessing"),H("approach"),N("")}function W(){if(u!=="write"||(y=s.value.trim(),!y))return;s.blur(),N("");let je=Math.max(10,Math.min(22,24-y.length/28));b=OM(L,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:je,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:Ft=>2.4+Ft.length/160,fixed:{mx:46,my:40},onPen:()=>{un.STATE.inkDirty=!0},onDone:()=>{un.STATE.inkDirty=!0}}),H("down")}function Q(){try{let je={access_key:FM,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(je),keepalive:!0}).catch(()=>{})}catch(je){}}function ie(){u==="ready"&&(Q(),H("fold"),N(""))}function oe(){!d||u==="leave"||(N(""),s.blur(),ee=Te,H("leave"))}let ee=null,Te=null,ne=un.SHOTS.window,Xe=un.OFF,ue=je=>[je[0]+Xe[0],je[1],je[2]],ut=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],ue([1.25,1.5,43.25]),ue([-.55,1.36,42.92])],wt=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],ue([-1,1.55,43.6]),ue([-1.4,1.35,43.1]),ue([-1.5,1.33,43.3])];function Xt(je){let Ft=$i(Xa(je)),Fe=[m.eye,...ut,ne.eye],Qe=[m.target,...wt,ne.target];return{eye:Nl(Fe,Ft),target:Nl(Qe,q0(0,1,Ft*1.03)),fov:Ya(m.fov,ne.fov,q0(.6,.97,Ft)),roll:(m.roll||0)*(1-Ft)}}function mt(je,Ft){if(h)return je;let Fe=performance.now()/1e3,Qe=.004*Ft,qe=Math.sin(Fe*.61)*.6+Math.sin(Fe*1.37+1.3)*.4,dt=Math.sin(Fe*.47+2.1)*.6+Math.sin(Fe*1.13+.4)*.4;return{eye:[je.eye[0]+qe*Qe,je.eye[1]+dt*Qe*.7,je.eye[2]],target:[je.target[0]+dt*Qe*1.5,je.target[1]+qe*Qe,je.target[2]],fov:je.fov,roll:je.roll}}function Yt(je,Ft,Fe){let Qe={};for(let qe in Ft)Qe[qe]=typeof Ft[qe]=="number"&&typeof je[qe]=="number"?Ya(je[qe],Ft[qe],Fe):Ft[qe];return Qe}function Ct(je){je*=window.__confSpeed||1,v+=je;let Ft=Mx(ne),Fe=Mx(un.SHOTS.paper),Qe,qe;if(u==="approach"){let at=Xa(v/(h?.6:15));Qe=Xt(at),qe=Yt(g,H0,q0(.15,.9,at)),at>=1&&(H("write"),N("write"))}else if(u==="write")Qe=mt(Ft,1),qe=H0;else if(u==="down"){let dt=Xa(v/(h?.4:2));Qe=Ex(Ft,Fe,$i(dt)),qe=Yt(H0,Xs,$i(dt)),dt>=1&&(E=b.write(y,h)||0,un.STATE.inkDirty=!0,H("writing"))}else if(u==="writing")Qe=mt(Fe,.6),qe=Xs,v>E+.8&&(H("ready"),l.textContent=p?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",N("hint"));else if(u==="ready")Qe=mt(Fe,.6),qe=Xs;else if(u==="fold"){let dt=Xa(v/(h?.3:1.5));un.STATE.fold=$i(dt),Qe=mt(Fe,.6),qe=Xs,dt>=1&&H("slide")}else if(u==="slide"){let at=Xa(v/(h?.6:3.4));un.STATE.slide=$i(q0(0,.7,at));let Gt=$i(q0(.35,1,at));Qe=Ex(Fe,Ft,Gt),qe=Yt(Xs,H0,Gt),at>=1&&(un.STATE.shown=!1,H("final"),N("final"))}else if(u==="final")Qe=mt(Ft,1),qe=H0;else if(u==="leave"){let at=Xa(v/(h?.6:12)),Gt={eye:m.eye,target:m.target,fov:m.fov,roll:m.roll},et=$i(at),fe=[ee.eye,ue([-.55,1.4,42.95]),ue([1.4,1.55,43.4]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Gt.eye],Ye=[ee.target,ue([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Gt.target];if(Qe={eye:Nl(fe,et),target:Nl(Ye,et),fov:Ya(ee.fov,Gt.fov,et),roll:Gt.roll*et},qe=Yt(H0,g,q0(.1,.7,at)),at>=1){d=!1,un.STATE.active=!1,un.STATE.shown=!0,un.STATE.fold=0,un.STATE.slide=0;let pt=L.getContext("2d");pt.setTransform(1,0,0,1,0,0),pt.clearRect(0,0,L.width,L.height),un.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return Te=Qe,{camera:Qe,look:qe}}function go(){u==="ready"?ie():u==="writing"&&b&&(b.finish(),v=Math.max(v,E))}return{start:U,update:Ct,leave:oe,get active(){return d},get stage(){return u},wheel(je){je>8&&go()},swipe(je){je>0&&go()},tap(){go()},key(je){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(je)>=0?(go(),!0):je==="Escape"?(oe(),!0):!1},_setNote(je){s.value=je,s.dispatchEvent(new Event("input"))}}}});var Fx=ve((OA,Ox)=>{"use strict";var pa=C0(),Pl=Kh(),bu=Ic(),$M=ys(),wu=Zh(),DM=Ir(),Il=!DM.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:pr}=Fr(),{C:An,PAINTING_X:W0}=Un(),vr=e=>Math.max(0,Math.min(1,e)),Ie=(e,t,o)=>e+(t-e)*o,So=(e,t,o)=>[Ie(e[0],t[0],o),Ie(e[1],t[1],o),Ie(e[2],t[2],o)],Vt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Tx=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],kx=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Ce=(e,t,o)=>{let n=vr((o-e)/(t-e));return n*n*(3-2*n)};function qM(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),l=a*n,f=Math.max(-l,Math.min(l,e-t)),p=e-f,h=(o+i*f)*r,d=(o-i*h)*c,u=p+(f+h)*c;return t-e>0==u>t&&(u=t,d=0),[u,d]}var Lx=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,HM=e=>e*e*e,_u=e=>1-Math.pow(1-e,3),qo=e=>-(Math.cos(Math.PI*e)-1)/2;function Qo(e,t){let o=e.length-1,n=vr(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],l=e[Math.min(o,r+2)],f=a*a,p=f*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-l[h])*f+(-i[h]+3*s[h]-3*c[h]+l[h])*p))}var It=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function Bi(e,t,o){return It(So(e.eye,t.eye,o),So(e.target,t.target,o),Ie(e.fov,t.fov,o),Ie(e.roll,t.roll,o))}var ku=()=>Ce(.75,1.3,window.innerWidth/window.innerHeight),Qn=(e,t)=>Bi(e,t,ku()),Ol=[7,3.95,An.hallEnd-.05],jM=[An.x1,2.9,An.zc],B0=[16.75,4.55,6.75],Lu=[6.92,2.72,14.5],Hr=[7.3,.015,47.1],BM=[B0,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Lu],UM=[Lu,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Hr],qi=[W0[0],3,An.z0],Hi=[W0[1],3,An.z0],Eu=47.45,Ix=4.6,WM=13.2,VM=1.42,Ys=[7.55,1.25,46.75],zu=[17.25,2.42,46],Cu=[26.05,1.95,46],Ks=[36.15,.015,44],$l=()=>Ie(6.8,6.15,ku()),XM=[Ys,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],zu],YM=[zu,[20.2,2.05,45.6],[23.2,1.8,45],Cu],ji=[W0[2],3,An.z0],Su=[34.8,1.35,46],Qa=[7.89,.03,19.03],zx=.36,Cx=13.64,Rn=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function zr(e){let t=e.side==="left"?1:-1;return So([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],ku())}function KM(e){return e.side==="left"?Qn(It([8.6,3.9,e.z],[zx,1.45,e.z],76),It([8,3.6,e.z+.7],[zx,3.95,e.z-2],46,-.008)):Qn(It([5.4,3.9,e.z],[Cx,1.45,e.z],76),It([6,3.6,e.z-.7],[Cx,3.95,e.z+2],46,-.008))}var QM=()=>[Ks,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],zr(Rn[0])],ZM=()=>[zr(Rn[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],zr(Rn[3])],JM=()=>[zr(Rn[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Qa],Rx={2:{pos:()=>Lu,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Ys,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>zu,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Cu,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Su,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>zr(Rn[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>zr(Rn[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>zr(Rn[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>zr(Rn[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>zr(Rn[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>zr(Rn[5]),amp:[.12,.08,.1],tumble:.5}},Ka=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Qn(It([An.x0+.9,1.85,An.zc+.25],[An.x1,2.85,An.zc-.1],64),It([An.x0+1.2,2,An.zc+.35],[An.x1,2.6,An.zc-.15],50));return n.eye=Vt(Vt(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Qn(It([16.6,1.9,9.2],[17.3,.4,5.6],64),It([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Vt(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Qn(It([7,1.35,13],[7.2,7.6,20.4],74,.05),It([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Vt(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Qn(It([7,3.6,43.7],[7,3.85,Ol[2]],74),It([7,3.6,41.3],[7,3.95,Ol[2]],46));return o.eye=Vt(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Qn(It([7,3.9,40.3],[7,1.35,Ol[2]],76),It([6.3,3.6,41.2],[3.7,3.95,Ol[2]],46,-.008));return o.eye=Vt(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Qn(It([7.15,.15,46],[7.3,.04,Hr[2]],50),It([7.05,.14,45.9],[7.25,.05,Hr[2]],32));return o.eye=Vt(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Qn(It([7.15,.1,46.3],[7.05,.1,Eu],50),It([7.1,.12,45.85],[7,.2,Eu],30));return o.eye=Vt(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Qn(It([7.3,.85,45.65],[7.6,1.38,47.1],64),It([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Vt(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Qn(It([qi[0],2.3,46.85],[qi[0],1.25,qi[2]],74),It([qi[0]-.6,2.55,46.85],[qi[0]+1.9,2.9,qi[2]],46,.008));return o.eye=Vt(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Qn(It([Hi[0],1.95,46.85],[Hi[0],1,Hi[2]],74),It([Hi[0]-.6,2.1,46.85],[Hi[0]+1.9,2.75,Hi[2]],46,.008));return o.eye=Vt(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Qn(It([ji[0],1.4,46.85],[ji[0],.6,ji[2]],74),It([ji[0]-.6,1.45,46.85],[ji[0]+1.9,2,ji[2]],46,.008));return o.eye=Vt(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Qn(It([34.75,.5,44.15],[An.x1,.8,43.95],66),It([34.75,.45,44.3],[An.x1,.35,43.95],50));return o.eye=Vt(o.eye,t),o}},...Rn.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=KM(e);return r.eye=Vt(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Qn(It([7.75,2.6,18.6],[7.89,0,19.08],60),It([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-Qa[0],r=o.eye[2]-Qa[2];return o.eye=[Qa[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],Qa[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],eE=[1,.96,.88];function Nx(e,t){return{dur:t,cam(o,n,r){let a=qo(o),i=Bi(n,r,a),s=Rn[e].side==="left"?1:-1;return i.eye=Vt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=Ie(n[i],r[i],o));return a.aperture=Ie(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=qo(o),r=zr(Rn[e]),a=zr(Rn[e+1]),i=Rn[e].side==="left"?1:-1,s=Vt(So(r,a,.5),[i*1.2,.5,0]),c=Qo([r,So(r,s,.6),s,So(a,s,.6),a],n);return{phase:"fly",pos:Vt(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Mu=[{dur:6.2,cam(e,t,o){if(e<.5){let s=HM(e/.5),c=So(t.eye,[An.x1-3.2,2.6,An.zc],s),l=So(t.target,jM,Ce(0,.6,e/.5));return It(c,l,Ie(t.fov,t.fov-8,s),Ie(t.roll,.04,s))}let n=_u((e-.5)/.5),r=[[pr.cx+.4,10.4,pr.zc+.6],[pr.cx-.6,7.6,pr.zc+1.3],[pr.cx-1.9,4.6,pr.zc+1.75],o.eye],a=[[pr.cx-.1,0,pr.zc-.2],[pr.cx-1,.4,pr.zc-.1],[pr.cx-1.1,.8,pr.zc-.2],o.target];return It(Qo(r,n),Qo(a,n),Ie(o.fov+14,o.fov,n),Ie(-.25,o.roll,n))},look(e,t,o){let n=Ce(.22,.5,e),r=1-Ce(.5,.74,e);return{fade:e<.5?n:r,fadeColor:eE,exposure:Ie(t.exposure,o.exposure,Ce(.5,.9,e))*(1+2.2*(e<.5?Ce(.15,.5,e):1-Ce(.5,.8,e))),letterbox:Ie(t.letterbox,o.letterbox,Ce(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Ce(.6,1,e),focus:Ie(4,o.focus,Ce(.5,1,e)),shafts:Ie(t.shafts,o.shafts,Ce(.4,.6,e)),vignette:Ie(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=Qo(r,qo(e)),i=Ce(0,.12,e)*(1-Ce(.82,1,e)),s=So(So(t.target,o.target,Ce(.55,1,e)),n.pos,i),c=Ie(t.fov,o.fov,Ce(.3,1,e))-6*Math.sin(Math.PI*e),l=Ie(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return It(a,s,c,l)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ie(t.exposure,o.exposure,Ce(.25,.75,e)),letterbox:Ie(t.letterbox,o.letterbox,e),focus:Ie(a,o.focus,Ce(.8,1,e)),aperture:Ie(.7,o.aperture,Ce(.8,1,e)),shafts:Ie(t.shafts,o.shafts,Ce(.3,.8,e)),vignette:Ie(t.vignette,o.vignette,e)}},leaf(e){let t=Lx(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:Vt(Qo(BM,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Ce(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=Qo([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Ce(0,.8,e)*.6+qo(vr(e/.8))*.4),a=Qo([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],qo(Ce(.8,1,e))),i=e<.8?r:a,s=So(So(t.target,n.pos,Ce(.03,.22,e)),o.target,Ce(.82,1,e)),c=Ie(t.fov,o.fov,Ce(.15,.7,e))-6*Ce(.6,.8,e)*(1-Ce(.85,1,e)),l=Ie(t.roll,o.roll,Ce(0,.6,e))-.04*Math.sin(Math.PI*e);return It(i,s,c,l)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ie(t.exposure,o.exposure,Ce(.5,1,e)),letterbox:Ie(t.letterbox,o.letterbox,e),focus:Ie(a,o.focus,Ce(.84,1,e)),aperture:Ie(1.1,o.aperture,Ce(.84,1,e)),shafts:Ie(t.shafts,o.shafts,Ce(.2,.9,e)),vignette:Ie(t.vignette,o.vignette,Ce(.5,1,e))}},leaf(e){let t=Ie(Lx(e),e,.35),o=Qo(UM,Ce(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Ce(.55,.76,e)),r=Ce(.7,.8,e);return{phase:"fly",pos:Vt(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=qo(e),r=Bi(t,o,n);return r.eye=Vt(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=qo(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ie(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=qo(e),r=Qo([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=So(t.target,o.target,Ce(.1,.85,e));return It(r,a,Ie(t.fov,o.fov,Ce(.2,1,e)),Ie(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],Ce(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,o){return Bi(t,o,qo(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],qo(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Ie(Ix,$l(),e)}},{dur:7.5,kick:e=>vr((e-j0())/(1-j0())),cam(e,t,o,n){let r=j0(),a=Ce(0,r,e)*(1-Ce(r+.12,r+.35,e)),i=Px(Math.min(e,U0)),s=Vt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Ce(r+.12,1,e),l=Qo([t.eye,t.eye,Vt(t.eye,[0,.12,-.3]),o.eye],c);return s=So(s,n.pos,Ce(r+.06,r+.24,e)*(1-Ce(.9,1,e))),s=So(s,o.target,Ce(.88,1,e)),It(l,s,Ie(t.fov,o.fov,c),Ie(t.roll,o.roll,c))},look(e,t,o,n,r){let a=j0(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Ce(0,.12,e)*(1-Ce(a+.25,a+.5,e));return{letterbox:Ie(Ie(t.letterbox,o.letterbox,Ce(a,1,e)),1.75,s),exposure:Ie(t.exposure,o.exposure,Ce(a,1,e)),focus:e<a?t.focus:Ie(t.focus,i,Ce(a,a+.2,e)),aperture:Ie(t.aperture,o.aperture,Ce(a,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=vr((e-j0())/(1-j0()));if(t<=0)return{phase:"floor"};let o=Ce(0,.85,t)*.85+_u(Ce(0,.15,t))*.15;return{phase:"fly",pos:Vt(Hr,[(Ys[0]-Hr[0])*o+Math.sin(t*9)*.08*(1-t),(Ys[1]-Hr[1])*o,(Ys[2]-Hr[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?Px(e):null}},{dur:9,cam(e,t,o,n){let r=qo(e),a=Qo([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Ce(.6,.92,e),s=So(So(t.target,n.pos,Ce(0,.15,e)),o.target,1-i),c=Ie(t.fov,o.fov,Ce(.3,1,e)),l=Ie(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return It(a,s,c,l)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,Ce(.3,.8,e)),focus:Ie(a,o.focus,Ce(.6,.95,e)),aperture:Ie(t.aperture,o.aperture,Ce(.6,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,Ce(.3,.8,e))}},leaf(e){let t=qo(e);return{phase:"fly",pos:Vt(Qo(XM,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=qo(e),r=Bi(t,o,n);return r.eye=Vt(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],e));return n.aperture=Ie(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=qo(e);return{phase:"fly",pos:Vt(Qo(YM,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=qo(e),r=Bi(t,o,n);return r.eye=Vt(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],e));return n.aperture=Ie(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=qo(e);return{phase:"fly",pos:Vt(Qo([Cu,[29.2,1.75,45.5],[32.2,1.5,45.4],Su],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=qo(e),a=Qo([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Ce(.05,.3,e)*(1-Ce(.8,1,e)),s=So(So(t.target,o.target,Ce(.6,1,e)),n.pos,i);return It(a,s,Ie(t.fov,o.fov,Ce(.2,1,e)),Ie(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,e),focus:Ie(a,o.focus,Ce(.8,1,e)),aperture:Ie(.9,o.aperture,Ce(.8,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=Qo([Su,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ks],Ce(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Ce(.35,.82,e)),n=Ce(.78,.88,e);return{phase:"fly",pos:Vt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=vr((e-.02)/.09);return _u(t)+.07*Math.sin(vr((e-.08)/.18)*Math.PI)*(1-vr((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Ce(.02,.05,e)*(1-Ce(.08,.16,e)),a=Ce(.06,1,e),i=Qo([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+qo(a)*.45),s=Vt(n.pos,[1,-.2,-1.45]);i=So(i,s,Ce(.1,.22,e)*(1-Ce(.52,.72,e)));let c=Ce(.06,.16,e)*(1-Ce(.86,1,e)),l=So(t.target,n.pos,c);l=So(l,o.target,Ce(.86,1,e));let f=Ie(t.fov,o.fov,Ce(.1,1,e))+6*Math.sin(Math.PI*Ce(.08,.9,e)),p=Ie(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Ce(.1,.9,e))+r;return It(Vt(i,[0,r,0]),l,f,p)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Ce(.02,.06,e)*(1-Ce(.08,.3,e));return{letterbox:Ie(t.letterbox,o.letterbox,Ce(.1,.4,e)),exposure:Ie(t.exposure,o.exposure,e)*(1+.8*i),focus:Ie(a,o.focus,Ce(.86,1,e)),aperture:Ie(.8,o.aperture,Ce(.86,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)+i}},leaf(e){let t=vr((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=Qo(QM(),t*.6+qo(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:Vt(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>Nx(e,7.5)),{dur:10,cam(e,t,o,n){let r=qo(e),a=Qo([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Ce(0,.15,e)*(1-Ce(.85,1,e)),s=So(So(t.target,o.target,Ce(.5,1,e)),n.pos,i);return It(a,s,Ie(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ie(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,e),focus:Ie(a,o.focus,Ce(.85,1,e)),aperture:Ie(.6,o.aperture,Ce(.85,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=qo(e),o=Qo(ZM(),t);return{phase:"fly",pos:Vt(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>Nx(e,7.5)),{dur:10,cam(e,t,o,n){let r=qo(e),a=Qo([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Ce(0,.2,e)*(1-Ce(.9,1,e)),s=So(So(t.target,o.target,Ce(.5,1,e)),n.pos,i);return It(a,s,Ie(t.fov,o.fov,r),Ie(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,e),focus:Ie(a,o.focus,Ce(.85,1,e)),aperture:Ie(.7,o.aperture,Ce(.85,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=Qo(JM(),Ce(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Ce(.4,.84,e)),n=Ce(.8,.9,e);return{phase:"fly",pos:Vt(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],Au=9.2,U0=.6;function Px(e){return e<U0?Ie($l(),Au,e/U0):Ie(Au,WM,(e-U0)/(1-U0))}function j0(){return U0*vr((Hr[0]+.15-$l())/(Au-$l()))}var Tu={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Fl=e=>Object.assign({},Tu,Ka[e].look),tE=`
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
`;function dr(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var Di=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Gl(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}Ox.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let ae=document.createElement("link");ae.rel="stylesheet",ae.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",ae.setAttribute("data-tour-font",""),document.head.appendChild(ae)}let r=gu(),a=null;fetch("res/hand.json").then(ae=>ae.ok?ae.json():null).then(ae=>{a=ae}).catch(()=>{});let i=document.createElement("style");i.textContent=tE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=dr("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=dr("div","tour-mark",Di(Pl.name)),l=dr("button","tour-free","Explore freely");l.type="button";let f=dr("div","tour-links",bu.icons("tour-icon"));f.insertBefore(yu()("tour-icon"),f.firstChild),Il&&f.appendChild(l);let p=dr("div","tour-progress",Ka.map(()=>"<i></i>").join("")),h=dr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),d=h.querySelector("span"),u=dr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Di(Pl.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);Gl(u,.4,.35);let v=Pl.text.split(/\n\s*\n/).map(ae=>`<p class="tour-line">${Di(ae.trim())}</p>`).join(""),m=dr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Di(Pl.title)}</h2>
		<span class="tour-rule"></span>
		${bu.line("tour-line tour-contact")}
		${v}`);Gl(m,.25,.28);let g=dr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);Gl(g,.6,.3);let y=dr("div","tour-card tour-master","");function b(ae){let Se=dr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Je=Se.querySelector(".tour-title"),gt=Se.querySelector(".tour-body");return Se.filled=!1,Se.body=gt,Se.fill=()=>{let qt=ae();if(!qt||Se.filled)return;Se.filled=!0;let to=qt.title||"";Se.querySelector(".tour-kicker").textContent=$M(qt)||"Oil on canvas";let co=Se.querySelector(".visit-row");co.innerHTML=wu.button(qt),co.hidden=!co.innerHTML;let Zo=co.querySelector(".visit-btn");Zo&&(Zo.addEventListener("click",Ro=>{Ro.stopPropagation(),wu.open(qt)}),Se.warm=()=>wu.warm(qt));let kn=0;Je.innerHTML=to.split(" ").map(Ro=>'<span class="tour-word">'+Ro.split("").map(Gn=>`<span style="transition-delay:${(.35+kn++*.045).toFixed(3)}s">${Di(Gn)}</span>`).join("")+"</span>").join(" "),Je.setAttribute("aria-label",to);let mr=.35+to.length*.045+.2;Se.querySelector(".tour-rule").style.transitionDelay=mr.toFixed(2)+"s";let Jo=String(qt.description||"").split(/\n\s*\n/).filter(Ro=>Ro.trim());if(Se.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&Jo.length){gt.innerHTML=Jo.map(rn=>`<p class="hand-text">${Di(rn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let Ro=gt.querySelector("canvas"),Gn=Jo.map(rn=>rn.trim()).join(`

`),dn=!1,Br=!1,ya=0;gt.addEventListener("wheel",()=>{dn=!0},{passive:!0}),gt.addEventListener("touchmove",()=>{dn=!0},{passive:!0});let ti=parseFloat(getComputedStyle(gt).fontSize)||17,Ur=r(Ro,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,ti*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:rn=>3.5+rn.length/420,seed:3+to.length,onPen:rn=>{if(dn)return;let oi=rn-gt.clientHeight*.55;oi>gt.scrollTop+4&&(gt.scrollTop+=Math.min(16,oi-gt.scrollTop))}});Ro.addEventListener("click",rn=>{rn.stopPropagation(),clearTimeout(ya),Br?Ur.finish():(Br=!0,Ur.write(Gn,!0))}),Se.write=()=>{if(clearTimeout(ya),dn=!1,Br){Ur.write(Gn,!0);return}Ur.write("",!0),ya=setTimeout(()=>{Br=!0,Ur.write(Gn)},mr*.6*1e3)},Se.stopWrite=()=>{clearTimeout(ya),Ur.stop()};let Wr=0;window.addEventListener("resize",()=>{clearTimeout(Wr),Wr=setTimeout(()=>{Br&&Se.classList.contains("on")&&Ur.write(Gn,!0)},250)})}else gt.innerHTML=Jo.map(Ro=>`<p class="tour-line">${Di(Ro.trim())}</p>`).join(""),gt.querySelectorAll(".tour-line").forEach((Ro,Gn)=>{Ro.style.transitionDelay=(mr+.3+Math.min(Gn,6)*.35).toFixed(2)+"s"})},Se}let E=()=>t.paintings?t.paintings():[],k=ae=>E().find(Se=>Se.side==="corridor"&&Math.abs(Se.paintingPosition[0]-ae)<.5),L=b(()=>E().find(ae=>ae.side==="end")),N=()=>dr("div","tour-card",""),H=b(()=>k(qi[0])),U=b(()=>k(Hi[0])),W=b(()=>k(ji[0])),Q=Rn.map(ae=>b(()=>E().find(Se=>Se.side===ae.side&&Math.abs(Se.paintingPosition[2]-ae.z)<.5))),ie=dr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${Il?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${bu.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Il?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Gl(ie,.5,.35);let oe=[u,m,g,y,L,N(),N(),N(),H,U,W,N(),...Q,ie];s.append(...oe,c,f,p,h),document.body.appendChild(s);let ee=Ax()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{pt=-1}});document.body.classList.add("touring");let Te=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,ne=Te?"Scroll":"Swipe",Xe=Ka.map((ae,Se)=>Se===0?Te?"Scroll to begin":"Swipe up to begin":Se===1?ne+" to follow the leaf":Se===2?ne+" to follow the light":Se===3?ne+" for its story":Se===6||Se===7||Se===Ka.length-1?"":ne+" on"),ue=[0];Mu.forEach(ae=>ue.push(ue[ue.length-1]+ae.dur));let ut=ue[ue.length-1],wt=210,Xt=95,mt=.35,Yt=1.4,Ct=.32,go=1,je=1.3,Ft=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Fe=2.2,Qe=.7,qe=.9,dt=!0,at=0,Gt=0,et=0,fe=-10,Ye=!1,pt=-1,lt=0,Zt=0,Ht=0,w=null,_t=Object.assign({},Fl(0)),Jt=Ka[0].cam(0),nt={phase:"home",pos:B0.slice(),tumble:0},vo=0,Tt=ae=>{let Se=0;for(let Je=1;Je<ue.length;Je++)Math.abs(ue[Je]-ae)<Math.abs(ue[Se]-ae)&&(Se=Je);return Se};function tt(ae){let Se=oe[ae];Se&&Se.fill&&(Se.fill(),Se.body.scrollTop=0,Se.offsetWidth),oe.forEach((Je,gt)=>{let qt=Je.classList.contains("on");Je.classList.toggle("on",gt===ae),gt===ae&&!qt&&Je.write&&Je.write(),gt!==ae&&qt&&Je.stopWrite&&Je.stopWrite()}),Se&&Se.warm&&Se.warm(),d.textContent=Xe[ae]||"",h.classList.toggle("on",!!Xe[ae])}function Dt(){oe.forEach(ae=>{ae.stopWrite&&ae.classList.contains("on")&&ae.stopWrite(),ae.classList.remove("on")}),h.classList.remove("on")}let eo=null,_o=-1;function Co(ae){if(ee.active||!dt||w)return;let Se=Ht-fe>mt;if(fe=Ht,Se||!eo){let Je=0,gt=ut;for(let qt=0;qt<ue.length;qt++)if(ue[qt]<=at-.02&&(Je=ue[qt]),ue[qt]>=at+.02){gt=ue[qt];break}eo={lo:Je,hi:gt}}Ht<_o||(Ye=!1,et=Math.max(eo.lo,Math.min(eo.hi,et+ae)),et=Math.max(at-Fe,Math.min(at+Fe,et)))}function Nn(ae){if(ee.active||!dt||w)return;let Se=Ye?et:at,Je;if(ae>0)Je=ue.findIndex(gt=>gt>Se+.05);else{Je=-1;for(let gt=ue.length-1;gt>=0;gt--)if(ue[gt]<Se-.05){Je=gt;break}}Je<0||(et=ue[Je],Ye=!0,fe=Ht)}let Bt=null,ga=ae=>ae.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(ae=>s.addEventListener(ae,ga)),s.addEventListener("pointerdown",ae=>{if(ae.stopPropagation(),!(ae.target.closest("button, a")||ae.target.closest(".tour-body"))){Bt={x:ae.clientX,y:ae.clientY,lx:ae.clientX,ly:ae.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(ae.pointerId)}catch(Se){}}}),s.addEventListener("pointermove",ae=>{if(!Bt)return;let Se=ae.clientX-Bt.lx,Je=ae.clientY-Bt.ly;Bt.lx=ae.clientX,Bt.ly=ae.clientY;let gt=Math.abs(Je)>=Math.abs(Se)?-Je:-Se;Bt.moved+=Math.abs(gt);let qt=performance.now(),to=gt/Xt;Bt.v=Bt.v*.6+to/Math.max(.008,(qt-Bt.lt)/1e3)*.4,Bt.lt=qt,Bt.moved>6&&Co(to)});let Ja=ae=>{let Se=Bt;if(Bt=null,!!Se){if(ee.active){Se.moved<10&&performance.now()-Se.t<500?ee.tap():Se.y-(ae?ae.clientY:Se.ly)>30&&ee.swipe(1);return}Se.moved<10&&performance.now()-Se.t<500?Nn(1):performance.now()-Se.lt<120&&Co(Math.max(-1.6,Math.min(1.6,Se.v*.22)))}};s.addEventListener("pointerup",ae=>{ae.stopPropagation(),Ja(ae)}),s.addEventListener("pointercancel",()=>{Bt=null}),s.addEventListener("wheel",ae=>{if(ee.active){if(ae.target.closest(".conf-ui"))return;ae.preventDefault(),ee.wheel(ae.deltaY);return}if(ae.target.closest(".tour-body")){let Je=ae.target.closest(".tour-body"),gt=Je.scrollTop+Je.clientHeight>=Je.scrollHeight-2&&ae.deltaY>0,qt=Je.scrollTop<=0&&ae.deltaY<0;if(!gt&&!qt)return}ae.preventDefault();let Se=ae.deltaMode===1?ae.deltaY*16:ae.deltaMode===2?ae.deltaY*window.innerHeight:ae.deltaY;Co(Se/wt)},{passive:!1}),window.addEventListener("keydown",ae=>{if(!dt||w||document.body.classList.contains("visiting"))return;if(ee.active){if(ae.stopImmediatePropagation(),ae.target&&/TEXTAREA|INPUT|BUTTON/.test(ae.target.tagName))return;ee.key(ae.key)&&ae.preventDefault();return}let Se=ae.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(Se)>=0){if((Se==="Enter"||Se===" ")&&ae.target&&ae.target.tagName==="BUTTON")return;ae.preventDefault(),ae.stopImmediatePropagation(),Nn(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(Se)>=0?(ae.preventDefault(),ae.stopImmediatePropagation(),Nn(-1)):Se==="Escape"?(ae.preventDefault(),jr()):/^[wasdzq]$/i.test(Se)&&ae.stopImmediatePropagation()},!0),window.addEventListener("keyup",ae=>{dt&&!w&&/^(Arrow|[wasdzq]$)/i.test(ae.key)&&ae.stopImmediatePropagation()},!0),l.addEventListener("click",ae=>{ae.stopPropagation(),jr()}),ie.addEventListener("click",ae=>{let Se=ae.target.closest("button");Se&&(ae.stopPropagation(),Se.dataset.act==="free"&&jr(),Se.dataset.act==="replay"&&ei(),Se.dataset.act==="list"&&Wf().show(!1),Se.dataset.act==="confess"&&(Dt(),pt=-2,ee.start(Jt,_t)))});let Xi=[null,[pr.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+W0[0]-7,0],[42.5+W0[1]-7,0],[42.5+W0[2]-7,0],[1e3,Math.PI/2],...Rn.map(ae=>[ae.z-1.6,ae.side==="left"?-Math.PI/2:Math.PI/2]),[Qa[2]-1.6,Math.PI]],oa=null,xa=0;function jr(){if(!dt||w||!Il)return;let ae=Tt(at),Se=Xi[ae];oa=ae<=1?{phase:"home",pos:B0.slice()}:ae>=3&&ae<=6?{phase:"floor",pos:Hr.slice()}:ae===11?{phase:"floor",pos:Ks.slice()}:ae===18?{phase:"floor",pos:Qa.slice()}:null,xa=ae>=12?1:0,Se&&n.place&&n.place(Se[0],Se[1]),w={start:Ht,fromCam:Jt,fromLook:Object.assign({},_t)},Dt(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function ei(){at=et=0,Gt=0,Ye=!1,pt=-1,lt=0,Zt=0,nt={phase:"home",pos:B0.slice(),tumble:0},ar={start:Ht}}let ar={start:-1},Fn=!1,Lo=[];function es(ae){vo+=ae*(nt.phase==="floor"?0:1);let Se=nt.tumble===void 0?0:nt.tumble,Je=pa.fromTranslation(Lo,nt.pos);if(nt.phase==="home")Je=pa.rotateY(Je,Je,2.2+Math.sin(vo*.9)*.15),Je=pa.rotateZ(Je,Je,-1+Math.sin(vo*1.3)*.12),Je=pa.rotateX(Je,Je,.4);else if(nt.phase==="floor")Je=pa.rotateY(Je,Je,.65),Je=pa.rotateX(Je,Je,.16);else{let gt=Jt.eye,qt=nt.pos,to=[gt[0]-qt[0],gt[1]-qt[1],gt[2]-qt[2]],co=Math.hypot(to[0],to[1],to[2])||1;to=[to[0]/co,to[1]/co,to[2]/co];let Zo=[to[2],0,-to[0]],kn=Math.hypot(Zo[0],Zo[2])||1;Zo=[Zo[0]/kn,0,Zo[2]/kn];let mr=[Zo[1]*to[2]-Zo[2]*to[1],Zo[2]*to[0]-Zo[0]*to[2],Zo[0]*to[1]-Zo[1]*to[0]],Jo=[Zo[0],Zo[1],Zo[2],0,to[0],to[1],to[2],0,mr[0],mr[1],mr[2],0,qt[0],qt[1],qt[2],1];for(let Ro=0;Ro<16;Ro++)Je[Ro]=Jo[Ro];Je=pa.rotateY(Je,Je,vo*.9*Se+.65),Je=pa.rotateX(Je,Je,Math.sin(vo*2.3)*.9*Se),Je=pa.rotateZ(Je,Je,Math.sin(vo*1.7+1)*1.1*Se+(nt.swing||0)*.9)}return{visible:!0,model:Je}}function Tn(ae){for(let Se in Tu)_t[Se]=ae[Se]!==void 0?ae[Se]:Tu[Se]}function Ul(ae,Se){if(ae<=1)return{phase:"home",pos:B0.slice(),tumble:0};let Je=Rx[ae];if(Je){let gt=Je.amp;return{phase:"fly",pos:Vt(Je.pos(),[Math.sin(Se*.55)*gt[0],Math.sin(Se*.8)*gt[1],(1-Math.cos(Se*.45))*gt[2]]),tumble:Je.tumble}}return{phase:"floor",pos:(ae>=18?Qa:ae>=10?Ks:Hr).slice(),tumble:0}}let Js=0,ec=null;function Wl(ae){let Se=Math.min(.1,Math.max(0,ae-Js));if(Js=ae,Ht=ae,Fn||(Fn=!0,ar.start=ae),w)return null;if(ee.active){let yo=ee.update(Se);return Jt=yo.camera,Tn(yo.look),o&&window.__camOverride&&(Jt=window.__camOverride),o&&window.__lookOverride&&Object.assign(_t,window.__lookOverride),{camera:Jt,walker:null,door:1,look:_t,leaf:es(Se)}}if(!Ye&&!Bt&&Ht-fe>Qe){let yo=Tt(et);Math.abs(ue[yo]-et)<qe&&(et=ue[yo])}let Je=et-at;if(Ye){let jo=Math.sign(Je)*Math.min(go,Math.sqrt(2*je*Math.abs(Je)))-Gt;Gt+=Math.sign(jo)*Math.min(Math.abs(jo),je*Se),at+=Gt*Se,(Je>0&&at>=et||Je<0&&at<=et||Math.abs(et-at)<1e-4)&&(at=et,Gt=0,Ye=!1)}else{let yo=qM(at,et,Gt,Ct,Se,3);at=yo[0],Gt=yo[1],Math.abs(et-at)<1e-4&&Math.abs(Gt)<.001&&(at=et,Gt=0)}let gt=0;for(;gt<Mu.length-1&&at>=ue[gt+1];)gt++;let qt=Mu[gt],to=vr((at-ue[gt])/qt.dur),co=Ka[gt],Zo=Ka[gt+1],kn=Tt(at);kn!==lt&&(lt=kn,Zt=0);let mr=Math.abs(at-ue[kn])<.02;mr&&(Zt+=Se);let Jo=1-Ce(0,1.2,Math.abs(at-ue[kn])),Ro=qt.leaf(to);if(Ro.pos?nt=Object.assign({},Ro):nt=Object.assign({},Ro,{pos:Ro.phase==="home"?B0.slice():(gt>=10?Ks:Hr).slice()}),Rx[kn]&&Jo>0){let yo=Ul(kn,Zt);nt.pos=So(nt.pos,yo.pos,Jo)}let Gn=qt.walker&&(to>.01||gt===6)?qt.walker(to):null;ec=Gn==null?null:{x:Gn,z:Eu,heading:Math.PI/2,phase:(Gn-Ix)/VM};let dn=qt.cam(to,co.cam(0),Zo.cam(0),nt);if(Jo>0&&Zt>0){let yo=Ka[kn],jo=yo.cam(0),na=yo.cam(Zt);dn=It(Vt(dn.eye,kx(Tx(na.eye,jo.eye),Jo)),Vt(dn.target,kx(Tx(na.target,jo.target),Jo)),dn.fov+(na.fov-jo.fov)*Jo,dn.roll+(na.roll-jo.roll)*Jo)}if(Jo>0&&!Ft){let yo=Ht,jo=.006*Jo,na=Math.sin(yo*.61)*.6+Math.sin(yo*1.37+1.3)*.4,tc=Math.sin(yo*.47+2.1)*.6+Math.sin(yo*1.13+.4)*.4,oc=Math.sin(yo*.53+4)*.5+Math.sin(yo*.97+2.6)*.5;dn=It(Vt(dn.eye,[na*jo,tc*jo*.7,oc*jo]),Vt(dn.target,[tc*jo*1.8,na*jo*1.4,0]),dn.fov,dn.roll+oc*.0012*Jo)}Jt=dn;let Br=Fl(gt),ya=Fl(gt+1),ti=Object.assign({},Br,qt.look(to,Br,ya,nt,dn.eye));if(Jo>0){let yo=Fl(kn);for(let jo in yo)typeof yo[jo]=="number"&&(ti[jo]=Ie(ti[jo],yo[jo],Jo))}Tn(ti);let Wr=mr&&Math.abs(et-at)<.02?kn:-1;Wr!==pt&&(Wr>=0&&(_o=Ht+Yt),pt=Wr,Wr>=0?tt(Wr):Dt()),p.querySelectorAll("i").forEach((yo,jo)=>yo.classList.toggle("on",jo===kn));let rn=pt>=0?oe[pt]:null;rn&&rn.fill&&!rn.filled&&(rn.fill(),rn.filled&&(rn.classList.remove("on"),rn.offsetWidth,rn.classList.add("on")));let oi=vr((ae-ar.start)/2.6);return oi<1&&(_t.fade=Math.max(_t.fade,1-Ce(0,1,oi)),_t.fadeColor=[0,0,0]),o&&window.__camOverride&&(Jt=window.__camOverride),o&&window.__lookOverride&&Object.assign(_t,window.__lookOverride),{camera:Jt,walker:ec,door:qt.door?qt.door(to):gt>=12?1:0,look:_t,leaf:es(Se)}}return o&&(window.__tour={go:Nn,exit:jr,wind:Co,confess(){Dt(),pt=-2,ee.start(Jt,_t)},conf:ee,paper:Rl().STATE,seek(ae,Se){at=et=ue[ae]+(ue[ae+1]-ue[ae])*Se,Gt=0,Ye=!1,fe=Ht+1e6,ar.start=Ht-10,Fn=!0},jump(ae){at=et=ue[ae],Gt=0,Ye=!1,Zt=0,fe=Ht,ar.start=Ht-10,Fn=!0},state:()=>({current:Tt(at),scroll:+at.toFixed(3),target:+et.toFixed(3),shown:pt,move:Math.abs(et-at)>.02?{p:at}:null,camNow:Jt,leaf:nt,look:_t})}),{update:Wl,get active(){return dt&&!w},handover(ae){if(!w)return null;let Se=vr((ae-w.start)/1.8);return Se>=1?(dt=!1,null):{from:w.fromCam,fromLook:w.fromLook,k:qo(Se)}},restingDoor:()=>xa,restingLeaf(){return oa?(nt=oa,es(0)):null},mix:Bi,cam:It}}});var oE=Gd(),Ui=Ir(),Fu=Wf(),Dl=Ui.reflection,nE=!1,Qx=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),Gu=()=>Qx(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Gu=()=>Qx(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var Zx=()=>2*Math.atan(Math.tan(Gu()*.5)*window.innerHeight/window.innerWidth),rE=Kd(),ql=new rE;ql.showPanel(0);nE&&document.body.appendChild(ql.dom);var Ho,J0,Ru,K0,Nu,Io;function aE(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!aE())throw oE.finish(),Fu.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Ho=Qd()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Ui.pixelRatio});location.hash==="#list"&&Fu.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Fu.show(!1)});J0=Fp()();var iE=Mh();Ru=iE(Ho,J0,Dl);K0=nm()(Ho,J0);Nu=sm()(Ho);var Gx=lm()(Ho,J0),$x=bm()(Ho),Dx=Mm()(Ho),qx=Dm()(Ho),Hx=Um()(Ho),jx=Qm()(Ho),Wi=i2()(Ho),Pu=Kh(),Jx=Ic(),sE=ys(),Iu=Zh(),ey=Ln(),{A:X0}=Fr();Io=Yg()(J0,Zx);var Hl=Qg()(Ho,Ui),Y0=ox()(Ho),Bx=rx()(Ho),cE=sx()(Ho,Ui),lE=dx()(Ho,Ui),Ux=Ra()(Ho),Wx=Rl()(Ho),Vx=tl()(Ho),va=Fx()({fps:Io,paintings:()=>K0.interactables(),avatar:Wi,onExit:()=>Io.setPaused(!1)});Io.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Hl);var Q0=[],jl=[],Za=[7,2,1.6];J0.viewer=Za;var fE=Ho({cull:{enable:!0,face:"back"},uniforms:{view:()=>Q0,proj:()=>jl,yScale:1,mirrorOn:()=>Dl?1:0,night:()=>ey.night,time:Ho.context("time")}}),hE=Ho({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),ty=document.createElement("style");ty.textContent=`

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
`;document.head.appendChild(ty);var Cr=document.createElement("button");Cr.className="painting-plaque";Cr.type="button";Cr.setAttribute("aria-label","Read painting");document.body.appendChild(Cr);var Zn=document.createElement("div");Zn.className="story-overlay";Zn.innerHTML=`

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

		${Jx.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Zn);var Z0=document.createElement("div");Z0.className="museum-links";Z0.innerHTML=Jx.icons("museum-link");Z0.insertBefore(yu()("museum-link"),Z0.firstChild);["mousedown","pointerdown","click"].forEach(e=>Z0.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(Z0);var uE=Zn.querySelector("#story-title"),dE=Zn.querySelector("#story-body"),Xx=Zn.querySelector("#story-meta"),pE=Zn.querySelector(".story-contact"),Zs=Zn.querySelector(".story-visit");Zs.addEventListener("click",e=>{e.target.closest(".visit-btn")&&Vi&&Iu.open(Vi)});var vE=Zn.querySelector(".story-close"),Vi=null,rr={p:0,target:0,last:0},oy={title:Pu.title,description:Pu.text,isAbout:!0},ma=null;function $u(e){e&&(Vi=e,uE.textContent=e.title||"",dE.textContent=e.description||"",Xx.textContent=e.isAbout?"":sE(e),Xx.hidden=!!e.isAbout,pE.hidden=!e.isAbout,Zs.innerHTML=e.isAbout?"":Iu.button(e),Zs.hidden=!Zs.innerHTML,Zs.hidden||Iu.warm(e),Zn.classList.toggle("about-mode",!!e.isAbout),Zn.classList.add("open"),rr.target=e.isAbout?1:0,ma=e,Cr.classList.remove("visible"),Io.setPaused(!0))}function Du(){Zn.classList.remove("open"),rr.target=0,Vi=null,ma=null,Io.setPaused(!1)}function ny(e){e&&(e.preventDefault(),e.stopPropagation()),ma&&$u(ma)}Cr.addEventListener("pointerup",ny,!0);Cr.addEventListener("touchend",ny,{passive:!1,capture:!0});Cr.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),Vi===null&&ma&&$u(ma)},!0);vE.addEventListener("click",Du);Zn.addEventListener("click",e=>{e.target===Zn&&Du()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Zn.classList.contains("open")&&Du()});function Yx(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function mE(){if(Vi)return;if(va.active){ma=null,Cr.classList.remove("visible");return}let e=K0.interactables(),t=Io.forward[0],o=Io.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,l=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?l=1:l=-1;let f=s[0]-Io.pos[0],p=s[2]-Io.pos[2],h=-(f*c+p*l),d=Math.abs(f*l-p*c),u=-(t*c+o*l)/n,v=i.side==="end"?11:8,m=(i.width||2)/2;u>.9&&h>.5&&h<v&&d<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=Io.pos[0],s=Io.pos[2];t/n>.85&&i<13.6&&s>X0.z0-.5&&s<X0.z1+.5&&(r=Object.assign({},oy,{plaqueTitle:Pu.name}))}r?(ma=r,Cr.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,Cr.classList.add("visible")):(ma=null,Cr.classList.remove("visible"))}var qu=C0();function gE(){let e=Wi.state;if(!e||!e.glowPos)return null;let t=Yx(Io.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=Yx(Io.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Ou=null;window.addEventListener("pointerdown",e=>{Ou={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Ou;if(Ou=null,!t||Vi||va.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=gE();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),$u(oy))},!0);function xE(e){let t=Math.min(Math.max(e-rr.last,0),.1);rr.last=e;let o=t/1.6;if(rr.p=rr.target>rr.p?Math.min(1,rr.p+o):Math.max(0,rr.p-o),rr.p<=0)return;let n=rr.p<.5?2*rr.p*rr.p:1-Math.pow(-2*rr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=Wi.state,i=a&&a.hipsPos?a.hipsPos[0]:X0.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:X0.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],l=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],f=Io.pos,p=Io.forward,h=[f[0],f[1],f[2]],d=[f[0]+p[0],f[1]+p[1],f[2]+p[2]],u=(y,b)=>y.map((E,k)=>E+(b[k]-E)*n),v=[X0.cx-6.2,1.7,X0.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*v[b]+n*n*c[b]);qu.lookAt(Io.view(),g,u(d,l),[0,1,0])}var V0={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Bl=null;function yE(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),l=Math.sin(n);return qu.lookAt(e,t,o,[i[0]*l,c,i[2]*l])}function bE(e){let t=window.innerWidth/window.innerHeight,o=Hl.shot,n=va.active?va.update(e):null,r=n?null:va.handover(e),a=null,i=V0;if(n?(a=n.camera,i=n.look,Bl=n.leaf,Wi.setWalk(n.walker||null),Y0.setOpen(n.door||0)):(Bl=va.restingLeaf(),Wi.setWalk(null),Y0.setOpen(va.restingDoor())),r){let s=Io.pos,c=Io.forward,l=va.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],Zx()*180/Math.PI,0);a=va.mix(r.from,l,r.k),i={};for(let f in V0)i[f]=Array.isArray(V0[f])?V0[f]:r.fromLook[f]+(V0[f]-r.fromLook[f])*r.k}if(a)yE(Q0,a.eye,a.target,a.roll||0),qu.perspective(jl,a.fov*Math.PI/180,t,.1,700),Za[0]=a.eye[0],Za[1]=a.eye[1],Za[2]=a.eye[2];else{let s=Io.view(),c=Io.proj();for(let h=0;h<16;h++)Q0[h]=s[h],jl[h]=c[h];let l=s[12],f=s[13],p=s[14];Za[0]=-(s[0]*l+s[1]*f+s[2]*p),Za[1]=-(s[4]*l+s[5]*f+s[6]*p),Za[2]=-(s[8]*l+s[9]*f+s[10]*p)}for(let s in V0)o[s]=i[s]}var Qs=0,Kx=0;Ho.frame(function({time:e}){if(document.body.classList.contains("visiting")){Qs=0;return}ql.begin(),ey.tick(e),Qs++,Qs===60&&(Kx=e),Qs===180&&120/Math.max(e-Kx,.001)<32&&Ui.stepDown()&&(Dl=Ui.reflection,Qs=0),Io.tick({time:e}),xE(e),K0.update(Io.pos,Io.fmouse[1],Gu()),mE(),bE(e),Hl.capture(arguments[0],{view:Q0,proj:jl,eye:Za},()=>{fE(()=>{Dl&&hE(()=>{Ru(),Gx(),Ux(),Vx({reflected:!0}),Wx({reflected:!0,view:Q0}),jx(),Wi(),Nu(K0.batch()),$x(),qx(),Hx(),Bx(Bl),Y0(),Dx(),Y0.glass()}),Ru(),Gx(),Ux(),Vx(),Wx({view:Q0}),jx(),Wi(),Nu(K0.batch()),$x(),qx(),Hx(),lE(),Bx(Bl),Y0(),cE(),Dx(),Y0.glass()})}),Hl.present(),ql.end()});})();
