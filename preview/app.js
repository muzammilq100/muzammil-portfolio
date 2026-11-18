"use strict";(()=>{var bt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var gm=bt((oA,mm)=>{"use strict";var Oi=document.getElementById("loader"),Ci=Oi&&Oi.querySelector(".loader-name"),el=0,Df=0,Gf=!1,S4=performance.now(),Pi=.06,Ri=0,iu=0,hm=!1,E4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function A4(t){if(!Ci)return;let e=Ci.offsetWidth||1,n=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Ci.style.webkitMaskPosition=n,Ci.style.maskPosition=n}function pm(t){let e=Math.min(.05,iu?(t-iu)/1e3:.016);iu=t;let o=Gf?.75:.22+(Pi-Ri)*1.2;if(Ri=Math.min(Pi,Ri+Math.max(0,o)*e),E4&&(Ri=Pi),A4(Ri),Gf&&Ri>=.999){hm||(hm=!0,setTimeout(vm,650));return}requestAnimationFrame(pm)}Ci&&requestAnimationFrame(pm);function um(){let t=el?Df/Math.max(el,24):0;Pi=Math.max(Pi,Math.min(.9,.06+t*.84))}function vm(){Oi&&(Oi.classList.add("done"),setTimeout(()=>Oi.remove(),1400))}function cu(){Gf||(Gf=!0,window.__galleryReady=!0,Oi&&(Pi=1,Ci||vm()))}var dm=null;function z4(){clearTimeout(dm),Df>=el&&performance.now()-S4>600&&(dm=setTimeout(()=>{Df>=el&&cu()},450))}setTimeout(cu,2e4);var T4=t=>/(^|\/)(res|images)\//.test(t),qf=window.fetch.bind(window);async function L4(t,e){let o=await qf(t+".gz",e);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!T4(o))return qf(t,e);el++,um();let n=a=>(Df++,um(),z4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=L4(o,e).catch(()=>qf(t,e)):r=qf(t,e),r.then(n,a=>{throw n(),a})};mm.exports={finish:cu}});var wa=bt((nA,wm)=>{"use strict";var xm=typeof navigator!="undefined"&&navigator.userAgent||"",N4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,m0=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(xm)||/Macintosh/.test(xm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||N4,ym=typeof window!="undefined"&&window.devicePixelRatio||1,To={isPhone:m0,pixelRatio:m0?Math.min(ym,1.5):Math.min(ym,2),reflection:!m0,gardenDetail:m0?0:1,leafShare:m0?.65:1,motion:!m0,post:m0?1:2,level:m0?1:0};To.scale=1;var R4=m0?.55:.6,ol=0,Hf=0,nl=0,rl=0,Ii=1,al=0,Uf=48,$i=null,lu=0;function C4(t){$i={fps:t,scale:To.scale},To.scale>.86?To.scale=.85:To.reflection?To.stepDown():To.scale>.71?To.scale=.7:To.stepDown()||(To.scale=Math.max(R4,To.scale-.1))}var bm=!0;try{/[?&]noadapt\b/.test(location.search)&&(bm=!1)}catch(t){}To.frame=t=>{if(!bm)return;if(!(t>0)||t>1){ol=0,Hf=0;return}if(ol+=t,Hf++,ol<.75)return;let e=Hf/ol;if(ol=0,Hf=0,al>0&&(al-=.75,al<=0&&(Ii=1)),$i){if(e<$i.fps*1.08&&$i.scale>To.scale){if(++lu>=2){To.scale=1,Ii=1,al=0,Uf=Math.min(Uf,e*.85),lu=0,nl=0,$i=null;return}}else lu=0;$i=null}if(e<Uf){if(rl=0,++nl>=2){if(nl=0,To.scale>.61&&To.climbed){Ii=To.scale-.05,al=40,To.scale=Ii,To.climbed=!1;return}C4(e)}}else e>Math.max(Uf*1.15,55)?(nl=0,++rl>=6&&To.scale<Ii-.001?(To.scale=Math.min(Ii,To.scale+.05),To.climbed=!0,rl=0):rl>=6&&(To.climbed=!1)):(nl=0,rl=0)};To.stepDown=()=>{if(To.reflection)To.reflection=!1;else if(To.gardenDetail>0||To.motion)To.gardenDetail=0,To.motion=!1,To.leafShare=Math.min(To.leafShare,.65);else if(To.post>0)To.post--;else return!1;return To.level++,!0};wm.exports=To});var fu=bt((rA,_m)=>{"use strict";_m.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Bf=bt((aA,Sm)=>{"use strict";var Rr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Mm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',km='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Rr.instagramUrl="https://instagram.com/"+Rr.instagram;Rr.mailUrl="mailto:"+Rr.email+"?subject="+encodeURIComponent("Your paintings");Rr.icons=t=>`
	<a class="${t}" href="${Rr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Rr.instagram}" title="Instagram">${Mm}</a>
	<a class="${t}" href="${Rr.mailUrl}" aria-label="Email ${Rr.email}" title="Email">${km}</a>`;Rr.line=t=>`
	<span class="${t}">
		<a href="${Rr.instagramUrl}" target="_blank" rel="noopener">${Mm}<span>@${Rr.instagram}</span></a>
		<a href="${Rr.mailUrl}">${km}<span>${Rr.email}</span></a>
	</span>`;Sm.exports=Rr});var sl=bt((sA,Em)=>{"use strict";Em.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var hu=bt((iA,Tm)=>{"use strict";var O4=fu(),P4=Bf(),Am=sl(),I4=wa(),q0=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),$4=`
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
`,Cr=null;function F4(t){if(Cr){Cr.hidden=!1,requestAnimationFrame(()=>Cr.classList.add("on"));return}let e=document.createElement("style");e.textContent=$4,document.head.appendChild(e);let o=!I4.isPhone;Cr=document.createElement("div"),Cr.className="plist",Cr.setAttribute("role","region"),Cr.setAttribute("aria-label","All paintings"),Cr.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${P4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${O4.map(r=>`
			<article class="plist-item" id="${q0(r.slug)}">
				<img loading="lazy" decoding="async" alt="${q0(r.title)}, ${q0(Am(r))}"
					src="images/web/${q0(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${q0(r.file)}'">
				<p class="plist-meta">${q0(Am(r))}</p>
				<h2>${q0(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${q0(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Cr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Cr.querySelector(".plist-close");n&&n.addEventListener("click",zm),document.body.appendChild(Cr),requestAnimationFrame(()=>Cr.classList.add("on"))}function zm(){Cr&&(Cr.classList.remove("on"),setTimeout(()=>{Cr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Tm.exports={show:F4,hide:zm}});var Lm=bt((uu,du)=>{(function(t,e){typeof uu=="object"&&typeof du!="undefined"?du.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(uu,function(){var t=function(){function e(d){return r.appendChild(d.dom),d}function o(d){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===d?"block":"none";n=d}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(d){d.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var d=(performance||Date).now();if(f.update(d-a,200),d>s+1e3&&(c.update(1e3*i/(d-s),100),s=d,i=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:r,setMode:o}};return t.Panel=function(e,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,d=2*i,h=3*i,v=15*i,u=74*i,p=30*i,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(e,l,d),g.fillRect(h,v,u,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,v,u,p),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,v),g.fillStyle=o,g.fillText(s(y)+" "+e+" ("+s(r)+"-"+s(a)+")",l,d),g.drawImage(m,h+i,v,u-i,p,h,v,u-i,p),g.fillRect(h+u-i,v,i,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+u-i,v,i,s((1-y/b)*p))}}},t})});var Nm=bt((pu,vu)=>{(function(t,e){typeof pu=="object"&&typeof vu!="undefined"?vu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(pu,function(){"use strict";var t=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},e=function(x,E){for(var C=Object.keys(E),et=0;et<C.length;++et)x[C[et]]=E[C[et]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var E=new Error("(regl) "+x);throw console.error(E),E}function a(x,E){x||r(E)}function s(x){return x?": "+x:""}function i(x,E,C){x in E||r("unknown parameter ("+x+")"+s(C)+". possible values: "+Object.keys(E).join())}function c(x,E){t(x)||r("invalid parameter type"+s(E)+". must be a typed array")}function f(x,E){switch(E){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,E,C){f(x,E)||r("invalid parameter type"+s(C)+". expected "+E+", got "+typeof x)}function d(x,E){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+s(E)+". must be a nonnegative integer")}function h(x,E,C){E.indexOf(x)<0&&r("invalid value"+s(C)+". must be one of: "+E)}var v=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function u(x){Object.keys(x).forEach(function(E){v.indexOf(E)<0&&r('invalid regl constructor argument "'+E+'". must be one of '+v)})}function p(x,E){for(x=x+"";x.length<E;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,E){this.number=x,this.line=E,this.errors=[]}function y(x,E,C){this.file=x,this.line=E,this.message=C}function b(){var x=new Error,E=(x.stack||x).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(E);if(C)return C[1];var et=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(E);return et?et[1]:"unknown"}function w(){var x=new Error,E=(x.stack||x).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(E);if(C)return C[1];var et=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(E);return et?et[1]:"unknown"}function _(x,E){var C=x.split(`
`),et=1,ht=0,J={unknown:new m,0:new m};J.unknown.name=J[0].name=E||b(),J.unknown.lines.push(new g(0,""));for(var nt=0;nt<C.length;++nt){var St=C[nt],zt=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(St);if(zt)switch(zt[1]){case"line":var Pt=/(\d+)(\s+\d+)?/.exec(zt[2]);Pt&&(et=Pt[1]|0,Pt[2]&&(ht=Pt[2]|0,ht in J||(J[ht]=new m)));break;case"define":var Tt=/SHADER_NAME(_B64)?\s+(.*)$/.exec(zt[2]);Tt&&(J[ht].name=Tt[1]?n(Tt[2]):Tt[2]);break}J[ht].lines.push(new g(et++,St))}return Object.keys(J).forEach(function(qt){var Yt=J[qt];Yt.lines.forEach(function(Et){Yt.index[Et.number]=Et})}),J}function M(x){var E=[];return x.split(`
`).forEach(function(C){if(!(C.length<5)){var et=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);et?E.push(new y(et[1]|0,et[2]|0,et[3].trim())):C.length>0&&E.push(new y("unknown",0,C))}}),E}function z(x,E){E.forEach(function(C){var et=x[C.file];if(et){var ht=et.index[C.line];if(ht){ht.errors.push(C),et.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(C)})}function I(x,E,C,et,ht){if(!x.getShaderParameter(E,x.COMPILE_STATUS)){var J=x.getShaderInfoLog(E),nt=et===x.FRAGMENT_SHADER?"fragment":"vertex";ft(C,"string",nt+" shader source must be a string",ht);var St=_(C,ht),zt=M(J);z(St,zt),Object.keys(St).forEach(function(Pt){var Tt=St[Pt];if(!Tt.hasErrors)return;var qt=[""],Yt=[""];function Et(Gt,V){qt.push(Gt),Yt.push(V||"")}Et("file number "+Pt+": "+Tt.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Tt.lines.forEach(function(Gt){if(Gt.errors.length>0){Et(p(Gt.number,4)+"|  ","background-color:yellow; font-weight:bold"),Et(Gt.line+o,"color:red; background-color:yellow; font-weight:bold");var V=0;Gt.errors.forEach(function(rt){var Ot=rt.message,ee=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Ot);if(ee){var gt=ee[1];switch(Ot=ee[2],gt){case"assign":gt="=";break}V=Math.max(Gt.line.indexOf(gt,V),0)}else V=0;Et(p("| ",6)),Et(p("^^^",V+3)+o,"font-weight:bold"),Et(p("| ",6)),Et(Ot+o,"font-weight:bold")}),Et(p("| ",6)+o)}else Et(p(Gt.number,4)+"|  "),Et(Gt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Yt[0]=qt.join("%c"),console.log.apply(console,Yt)):console.log(qt.join(""))}),a.raise("Error compiling "+nt+" shader, "+St[0].name)}}function R(x,E,C,et,ht){if(!x.getProgramParameter(E,x.LINK_STATUS)){var J=x.getProgramInfoLog(E),nt=_(C,ht),St=_(et,ht),zt='Error linking program with vertex shader, "'+St[0].name+'", and fragment shader "'+nt[0].name+'"';typeof document!="undefined"?console.log("%c"+zt+o+"%c"+J,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(zt+o+J),a.raise(zt)}}function B(x){x._commandRef=b()}function D(x,E,C,et){B(x);function ht(zt){return zt?et.id(zt):0}x._fragId=ht(x.static.frag),x._vertId=ht(x.static.vert);function J(zt,Pt){Object.keys(Pt).forEach(function(Tt){zt[et.id(Tt)]=!0})}var nt=x._uniformSet={};J(nt,E.static),J(nt,E.dynamic);var St=x._attributeSet={};J(St,C.static),J(St,C.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function K(x,E){var C=w();r(x+" in command "+(E||b())+(C==="unknown"?"":" called from "+C))}function O(x,E,C){x||K(E,C||b())}function H(x,E,C,et){x in E||K("unknown parameter ("+x+")"+s(C)+". possible values: "+Object.keys(E).join(),et||b())}function ft(x,E,C,et){f(x,E)||K("invalid parameter type"+s(C)+". expected "+E+", got "+typeof x,et||b())}function It(x){x()}function Mt(x,E,C){x.texture?h(x.texture._texture.internalformat,E,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var vt=33071,st=9728,Wt=9984,Se=9985,Ne=9986,to=9987,it=5120,Lt=5121,wt=5122,Me=5123,kt=5124,Ct=5125,Ft=5126,ge=32819,Pe=32820,pe=33635,oe=34042,ct=36193,te={};te[it]=te[Lt]=1,te[wt]=te[Me]=te[ct]=te[pe]=te[ge]=te[Pe]=2,te[kt]=te[Ct]=te[Ft]=te[oe]=4;function Ee(x,E){return x===Pe||x===ge||x===pe?2:x===oe?4:te[x]*E}function le(x){return!(x&x-1)&&!!x}function Zt(x,E,C){var et,ht=E.width,J=E.height,nt=E.channels;a(ht>0&&ht<=C.maxTextureSize&&J>0&&J<=C.maxTextureSize,"invalid texture shape"),(x.wrapS!==vt||x.wrapT!==vt)&&a(le(ht)&&le(J),"incompatible wrap mode for texture, both width and height must be power of 2"),E.mipmask===1?ht!==1&&J!==1&&a(x.minFilter!==Wt&&x.minFilter!==Ne&&x.minFilter!==Se&&x.minFilter!==to,"min filter requires mipmap"):(a(le(ht)&&le(J),"texture must be a square power of 2 to support mipmapping"),a(E.mipmask===(ht<<1)-1,"missing or incomplete mipmap data")),E.type===Ft&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===st&&x.magFilter===st,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var St=E.images;for(et=0;et<16;++et)if(St[et]){var zt=ht>>et,Pt=J>>et;a(E.mipmask&1<<et,"missing mipmap data");var Tt=St[et];if(a(Tt.width===zt&&Tt.height===Pt,"invalid shape for mip images"),a(Tt.format===E.format&&Tt.internalformat===E.internalformat&&Tt.type===E.type,"incompatible type for mip image"),!Tt.compressed)if(Tt.data){var qt=Math.ceil(Ee(Tt.type,nt)*zt/Tt.unpackAlignment)*Tt.unpackAlignment;a(Tt.data.byteLength===qt*Pt,"invalid data for image, buffer size is inconsistent with image format")}else Tt.element||Tt.copy}else x.genMipmaps||a((E.mipmask&1<<et)===0,"extra mipmap data");E.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function so(x,E,C,et){var ht=x.width,J=x.height,nt=x.channels;a(ht>0&&ht<=et.maxTextureSize&&J>0&&J<=et.maxTextureSize,"invalid texture shape"),a(ht===J,"cube map must be square"),a(E.wrapS===vt&&E.wrapT===vt,"wrap mode not supported by cube map");for(var St=0;St<C.length;++St){var zt=C[St];a(zt.width===ht&&zt.height===J,"inconsistent cube map face shape"),E.genMipmaps&&(a(!zt.compressed,"can not generate mipmap for compressed textures"),a(zt.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Pt=zt.images,Tt=0;Tt<16;++Tt){var qt=Pt[Tt];if(qt){var Yt=ht>>Tt,Et=J>>Tt;a(zt.mipmask&1<<Tt,"missing mipmap data"),a(qt.width===Yt&&qt.height===Et,"invalid shape for mip images"),a(qt.format===x.format&&qt.internalformat===x.internalformat&&qt.type===x.type,"incompatible type for mip image"),qt.compressed||(qt.data?a(qt.data.byteLength===Yt*Et*Math.max(Ee(qt.type,nt),qt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):qt.element||qt.copy)}}}}var k=e(a,{optional:It,raise:r,commandRaise:K,command:O,parameter:i,commandParameter:H,constructor:u,type:l,commandType:ft,isTypedArray:c,nni:d,oneOf:h,shaderError:I,linkError:R,callSite:w,saveCommandRef:B,saveDrawInfo:D,framebufferFormat:Mt,guessCommand:b,texture2D:Zt,textureCube:so}),Be=0,Ie=0,no=5,uo=6;function wo(x,E){this.id=Be++,this.type=x,this.data=E}function mo(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Ho(x){if(x.length===0)return[];var E=x.charAt(0),C=x.charAt(x.length-1);if(x.length>1&&E===C&&(E==='"'||E==="'"))return['"'+mo(x.substr(1,x.length-2))+'"'];var et=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(et)return Ho(x.substr(0,et.index)).concat(Ho(et[1])).concat(Ho(x.substr(et.index+et[0].length)));var ht=x.split(".");if(ht.length===1)return['"'+mo(x)+'"'];for(var J=[],nt=0;nt<ht.length;++nt)J=J.concat(Ho(ht[nt]));return J}function ir(x){return"["+Ho(x).join("][")+"]"}function R0(x,E){return new wo(x,ir(E+""))}function pi(x){return typeof x=="function"&&!x._reglType||x instanceof wo}function Z(x,E){if(typeof x=="function")return new wo(Ie,x);if(typeof x=="number"||typeof x=="boolean")return new wo(no,x);if(Array.isArray(x))return new wo(uo,x.map((C,et)=>Z(C,E+"["+et+"]")));if(x instanceof wo)return x;k(!1,"invalid option type in uniform "+E)}var Ht={DynamicVariable:wo,define:R0,isDynamic:pi,unbox:Z,accessor:ir},Xt={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},Dt=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function xe(){var x={"":0},E=[""];return{id:function(C){var et=x[C];return et||(et=x[C]=E.length,E.push(C),et)},str:function(C){return E[C]}}}function Fe(x,E,C){var et=document.createElement("canvas");e(et.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(et),x===document.body&&(et.style.position="absolute",e(x.style,{margin:0,padding:0}));function ht(){var St=window.innerWidth,zt=window.innerHeight;if(x!==document.body){var Pt=x.getBoundingClientRect();St=Pt.right-Pt.left,zt=Pt.bottom-Pt.top}et.width=C*St,et.height=C*zt,e(et.style,{width:St+"px",height:zt+"px"})}var J;x!==document.body&&typeof ResizeObserver=="function"?(J=new ResizeObserver(function(){setTimeout(ht)}),J.observe(x)):window.addEventListener("resize",ht,!1);function nt(){J?J.disconnect():window.removeEventListener("resize",ht),x.removeChild(et)}return ht(),{canvas:et,onDestroy:nt}}function Ce(x,E){function C(et){try{return x.getContext(et,E)}catch(ht){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function _e(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function je(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function Te(x){return typeof x=="string"?x.split():(k(Array.isArray(x),"invalid extension array"),x)}function eo(x){return typeof x=="string"?(k(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function $e(x){var E=x||{},C,et,ht,J,nt={},St=[],zt=[],Pt=typeof window=="undefined"?1:window.devicePixelRatio,Tt=!1,qt=function(Gt){Gt&&k.raise(Gt)},Yt=function(){};if(typeof E=="string"?(k(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(E),k(C,"invalid query string for element")):typeof E=="object"?_e(E)?C=E:je(E)?(J=E,ht=J.canvas):(k.constructor(E),"gl"in E?J=E.gl:"canvas"in E?ht=eo(E.canvas):"container"in E&&(et=eo(E.container)),"attributes"in E&&(nt=E.attributes,k.type(nt,"object","invalid context attributes")),"extensions"in E&&(St=Te(E.extensions)),"optionalExtensions"in E&&(zt=Te(E.optionalExtensions)),"onDone"in E&&(k.type(E.onDone,"function","invalid or missing onDone callback"),qt=E.onDone),"profile"in E&&(Tt=!!E.profile),"pixelRatio"in E&&(Pt=+E.pixelRatio,k(Pt>0,"invalid pixel ratio"))):k.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?ht=C:et=C),!J){if(!ht){k(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Et=Fe(et||document.body,qt,Pt);if(!Et)return null;ht=Et.canvas,Yt=Et.onDestroy}nt.premultipliedAlpha===void 0&&(nt.premultipliedAlpha=!0),J=Ce(ht,nt)}return J?{gl:J,canvas:ht,container:et,extensions:St,optionalExtensions:zt,pixelRatio:Pt,profile:Tt,onDone:qt,onDestroy:Yt}:(Yt(),qt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function qe(x,E){var C={};function et(nt){k.type(nt,"string","extension name must be string");var St=nt.toLowerCase(),zt;try{zt=C[St]=x.getExtension(St)}catch(Pt){}return!!zt}for(var ht=0;ht<E.extensions.length;++ht){var J=E.extensions[ht];if(!et(J))return E.onDestroy(),E.onDone('"'+J+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return E.optionalExtensions.forEach(et),{extensions:C,restore:function(){Object.keys(C).forEach(function(nt){if(C[nt]&&!et(nt))throw new Error("(regl): error restoring extension "+nt)})}}}function ro(x,E){for(var C=Array(x),et=0;et<x;++et)C[et]=E(et);return C}var ke=5120,go=5121,Po=5122,Le=5123,jo=5124,ma=5125,u0=5126;function fo(x){for(var E=16;E<=1<<28;E*=16)if(x<=E)return E;return 0}function ko(x){var E,C;return E=(x>65535)<<4,x>>>=E,C=(x>255)<<3,x>>>=C,E|=C,C=(x>15)<<2,x>>>=C,E|=C,C=(x>3)<<1,x>>>=C,E|=C,E|x>>1}function Gn(){var x=ro(8,function(){return[]});function E(J){var nt=fo(J),St=x[ko(nt)>>2];return St.length>0?St.pop():new ArrayBuffer(nt)}function C(J){x[ko(J.byteLength)>>2].push(J)}function et(J,nt){var St=null;switch(J){case ke:St=new Int8Array(E(nt),0,nt);break;case go:St=new Uint8Array(E(nt),0,nt);break;case Po:St=new Int16Array(E(2*nt),0,nt);break;case Le:St=new Uint16Array(E(2*nt),0,nt);break;case jo:St=new Int32Array(E(4*nt),0,nt);break;case ma:St=new Uint32Array(E(4*nt),0,nt);break;case u0:St=new Float32Array(E(4*nt),0,nt);break;default:return null}return St.length!==nt?St.subarray(0,nt):St}function ht(J){C(J.buffer)}return{alloc:E,free:C,allocType:et,freeType:ht}}var W=Gn();W.zero=Gn();var pt=3408,ne=3410,ve=3411,ye=3412,sn=3413,cr=3414,Tr=3415,cn=33901,Mr=33902,ln=3379,_o=3386,Zn=34921,Ko=36347,Hn=36348,Br=35661,jr=35660,Xo=34930,ga=36349,kn=34076,Ia=34024,No=7936,fn=7937,xa=7938,ws=35724,Ja=34047,_s=36063,ff=34852,C0=3553,vi=34067,Ic=34069,d1=33984,d0=6408,$c=5126,kr=5121,Fc=36160,Ms=36053,ib=36064,cb=16384,lb=function(x,E){var C=1;E.ext_texture_filter_anisotropic&&(C=x.getParameter(Ja));var et=1,ht=1;E.webgl_draw_buffers&&(et=x.getParameter(ff),ht=x.getParameter(_s));var J=!!E.oes_texture_float;if(J){var nt=x.createTexture();x.bindTexture(C0,nt),x.texImage2D(C0,0,d0,1,1,0,d0,$c,null);var St=x.createFramebuffer();if(x.bindFramebuffer(Fc,St),x.framebufferTexture2D(Fc,ib,C0,nt,0),x.bindTexture(C0,null),x.checkFramebufferStatus(Fc)!==Ms)J=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(cb);var zt=W.allocType($c,4);x.readPixels(0,0,1,1,d0,$c,zt),x.getError()?J=!1:(x.deleteFramebuffer(St),x.deleteTexture(nt),J=zt[0]===1),W.freeType(zt)}}var Pt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Tt=!0;if(!Pt){var qt=x.createTexture(),Yt=W.allocType(kr,36);x.activeTexture(d1),x.bindTexture(vi,qt),x.texImage2D(Ic,0,d0,3,3,0,d0,kr,Yt),W.freeType(Yt),x.bindTexture(vi,null),x.deleteTexture(qt),Tt=!x.getError()}return{colorBits:[x.getParameter(ne),x.getParameter(ve),x.getParameter(ye),x.getParameter(sn)],depthBits:x.getParameter(cr),stencilBits:x.getParameter(Tr),subpixelBits:x.getParameter(pt),extensions:Object.keys(E).filter(function(Et){return!!E[Et]}),maxAnisotropic:C,maxDrawbuffers:et,maxColorAttachments:ht,pointSizeDims:x.getParameter(cn),lineWidthDims:x.getParameter(Mr),maxViewportDims:x.getParameter(_o),maxCombinedTextureUnits:x.getParameter(Br),maxCubeMapSize:x.getParameter(kn),maxRenderbufferSize:x.getParameter(Ia),maxTextureUnits:x.getParameter(Xo),maxTextureSize:x.getParameter(ln),maxAttributes:x.getParameter(Zn),maxVertexUniforms:x.getParameter(Ko),maxVertexTextureUnits:x.getParameter(jr),maxVaryingVectors:x.getParameter(Hn),maxFragmentUniforms:x.getParameter(ga),glsl:x.getParameter(ws),renderer:x.getParameter(fn),vendor:x.getParameter(No),version:x.getParameter(xa),readFloat:J,npotTextureCube:Tt}};function $a(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||t(x.data))}var na=function(x){return Object.keys(x).map(function(E){return x[E]})},hf={shape:db,flatten:ub};function fb(x,E,C){for(var et=0;et<E;++et)C[et]=x[et]}function hb(x,E,C,et){for(var ht=0,J=0;J<E;++J)for(var nt=x[J],St=0;St<C;++St)et[ht++]=nt[St]}function Mp(x,E,C,et,ht,J){for(var nt=J,St=0;St<E;++St)for(var zt=x[St],Pt=0;Pt<C;++Pt)for(var Tt=zt[Pt],qt=0;qt<et;++qt)ht[nt++]=Tt[qt]}function kp(x,E,C,et,ht){for(var J=1,nt=C+1;nt<E.length;++nt)J*=E[nt];var St=E[C];if(E.length-C===4){var zt=E[C+1],Pt=E[C+2],Tt=E[C+3];for(nt=0;nt<St;++nt)Mp(x[nt],zt,Pt,Tt,et,ht),ht+=J}else for(nt=0;nt<St;++nt)kp(x[nt],E,C+1,et,ht),ht+=J}function ub(x,E,C,et){var ht=1;if(E.length)for(var J=0;J<E.length;++J)ht*=E[J];else ht=0;var nt=et||W.allocType(C,ht);switch(E.length){case 0:break;case 1:fb(x,E[0],nt);break;case 2:hb(x,E[0],E[1],nt);break;case 3:Mp(x,E[0],E[1],E[2],nt,0);break;default:kp(x,E,0,nt,0)}return nt}function db(x){for(var E=[],C=x;C.length;C=C[0])E.push(C.length);return E}var p1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},pb=5120,vb=5122,mb=5124,gb=5121,xb=5123,yb=5125,bb=5126,wb=5126,ks={int8:pb,int16:vb,int32:mb,uint8:gb,uint16:xb,uint32:yb,float:bb,float32:wb},_b=35048,Mb=35040,uf={dynamic:_b,stream:Mb,static:35044},v1=hf.flatten,Sp=hf.shape,Ep=35044,kb=35040,m1=5121,g1=5126,O0=[];O0[5120]=1,O0[5122]=2,O0[5124]=4,O0[5121]=1,O0[5123]=2,O0[5125]=4,O0[5126]=4;function df(x){return p1[Object.prototype.toString.call(x)]|0}function Ap(x,E){for(var C=0;C<E.length;++C)x[C]=E[C]}function zp(x,E,C,et,ht,J,nt){for(var St=0,zt=0;zt<C;++zt)for(var Pt=0;Pt<et;++Pt)x[St++]=E[ht*zt+J*Pt+nt]}function Sb(x,E,C,et){var ht=0,J={};function nt(V){this.id=ht++,this.buffer=x.createBuffer(),this.type=V,this.usage=Ep,this.byteLength=0,this.dimension=1,this.dtype=m1,this.persistentData=null,C.profile&&(this.stats={size:0})}nt.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},nt.prototype.destroy=function(){Yt(this)};var St=[];function zt(V,rt){var Ot=St.pop();return Ot||(Ot=new nt(V)),Ot.bind(),qt(Ot,rt,kb,0,1,!1),Ot}function Pt(V){St.push(V)}function Tt(V,rt,Ot){V.byteLength=rt.byteLength,x.bufferData(V.type,rt,Ot)}function qt(V,rt,Ot,ee,gt,re){var _t;if(V.usage=Ot,Array.isArray(rt)){if(V.dtype=ee||g1,rt.length>0){var Ut;if(Array.isArray(rt[0])){_t=Sp(rt);for(var yt=1,Bt=1;Bt<_t.length;++Bt)yt*=_t[Bt];V.dimension=yt,Ut=v1(rt,_t,V.dtype),Tt(V,Ut,Ot),re?V.persistentData=Ut:W.freeType(Ut)}else if(typeof rt[0]=="number"){V.dimension=gt;var Ae=W.allocType(V.dtype,rt.length);Ap(Ae,rt),Tt(V,Ae,Ot),re?V.persistentData=Ae:W.freeType(Ae)}else t(rt[0])?(V.dimension=rt[0].length,V.dtype=ee||df(rt[0])||g1,Ut=v1(rt,[rt.length,rt[0].length],V.dtype),Tt(V,Ut,Ot),re?V.persistentData=Ut:W.freeType(Ut)):k.raise("invalid buffer data")}}else if(t(rt))V.dtype=ee||df(rt),V.dimension=gt,Tt(V,rt,Ot),re&&(V.persistentData=new Uint8Array(new Uint8Array(rt.buffer)));else if($a(rt)){_t=rt.shape;var Ue=rt.stride,Kt=rt.offset,$t=0,mt=0,Ge=0,Qe=0;_t.length===1?($t=_t[0],mt=1,Ge=Ue[0],Qe=0):_t.length===2?($t=_t[0],mt=_t[1],Ge=Ue[0],Qe=Ue[1]):k.raise("invalid shape"),V.dtype=ee||df(rt.data)||g1,V.dimension=mt;var fe=W.allocType(V.dtype,$t*mt);zp(fe,rt.data,$t,mt,Ge,Qe,Kt),Tt(V,fe,Ot),re?V.persistentData=fe:W.freeType(fe)}else rt instanceof ArrayBuffer?(V.dtype=m1,V.dimension=gt,Tt(V,rt,Ot),re&&(V.persistentData=new Uint8Array(new Uint8Array(rt)))):k.raise("invalid buffer data")}function Yt(V){E.bufferCount--,et(V);var rt=V.buffer;k(rt,"buffer must not be deleted already"),x.deleteBuffer(rt),V.buffer=null,delete J[V.id]}function Et(V,rt,Ot,ee){E.bufferCount++;var gt=new nt(rt);J[gt.id]=gt;function re(yt){var Bt=Ep,Ae=null,Ue=0,Kt=0,$t=1;return Array.isArray(yt)||t(yt)||$a(yt)||yt instanceof ArrayBuffer?Ae=yt:typeof yt=="number"?Ue=yt|0:yt&&(k.type(yt,"object","buffer arguments must be an object, a number or an array"),"data"in yt&&(k(Ae===null||Array.isArray(Ae)||t(Ae)||$a(Ae),"invalid data for buffer"),Ae=yt.data),"usage"in yt&&(k.parameter(yt.usage,uf,"invalid buffer usage"),Bt=uf[yt.usage]),"type"in yt&&(k.parameter(yt.type,ks,"invalid buffer type"),Kt=ks[yt.type]),"dimension"in yt&&(k.type(yt.dimension,"number","invalid dimension"),$t=yt.dimension|0),"length"in yt&&(k.nni(Ue,"buffer length must be a nonnegative integer"),Ue=yt.length|0)),gt.bind(),Ae?qt(gt,Ae,Bt,Kt,$t,ee):(Ue&&x.bufferData(gt.type,Ue,Bt),gt.dtype=Kt||m1,gt.usage=Bt,gt.dimension=$t,gt.byteLength=Ue),C.profile&&(gt.stats.size=gt.byteLength*O0[gt.dtype]),re}function _t(yt,Bt){k(Bt+yt.byteLength<=gt.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+yt.byteLength+" starting from offset "+Bt+" to a buffer of size "+gt.byteLength),x.bufferSubData(gt.type,Bt,yt)}function Ut(yt,Bt){var Ae=(Bt||0)|0,Ue;if(gt.bind(),t(yt)||yt instanceof ArrayBuffer)_t(yt,Ae);else if(Array.isArray(yt)){if(yt.length>0)if(typeof yt[0]=="number"){var Kt=W.allocType(gt.dtype,yt.length);Ap(Kt,yt),_t(Kt,Ae),W.freeType(Kt)}else if(Array.isArray(yt[0])||t(yt[0])){Ue=Sp(yt);var $t=v1(yt,Ue,gt.dtype);_t($t,Ae),W.freeType($t)}else k.raise("invalid buffer data")}else if($a(yt)){Ue=yt.shape;var mt=yt.stride,Ge=0,Qe=0,fe=0,io=0;Ue.length===1?(Ge=Ue[0],Qe=1,fe=mt[0],io=0):Ue.length===2?(Ge=Ue[0],Qe=Ue[1],fe=mt[0],io=mt[1]):k.raise("invalid shape");var We=Array.isArray(yt.data)?gt.dtype:df(yt.data),oo=W.allocType(We,Ge*Qe);zp(oo,yt.data,Ge,Qe,fe,io,yt.offset),_t(oo,Ae),W.freeType(oo)}else k.raise("invalid data for buffer subdata");return re}return Ot||re(V),re._reglType="buffer",re._buffer=gt,re.subdata=Ut,C.profile&&(re.stats=gt.stats),re.destroy=function(){Yt(gt)},re}function Gt(){na(J).forEach(function(V){V.buffer=x.createBuffer(),x.bindBuffer(V.type,V.buffer),x.bufferData(V.type,V.persistentData||V.byteLength,V.usage)})}return C.profile&&(E.getTotalBufferSize=function(){var V=0;return Object.keys(J).forEach(function(rt){V+=J[rt].stats.size}),V}),{create:Et,createStream:zt,destroyStream:Pt,clear:function(){na(J).forEach(Yt),St.forEach(Yt)},getBuffer:function(V){return V&&V._buffer instanceof nt?V._buffer:null},restore:Gt,_initBuffer:qt}}var Eb=0,Ab=0,zb=1,Tb=1,Lb=4,Nb=4,mi={points:Eb,point:Ab,lines:zb,line:Tb,triangles:Lb,triangle:Nb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Rb=0,Cb=1,qc=4,Ob=5120,gi=5121,Tp=5122,xi=5123,Lp=5124,Ss=5125,x1=34963,Pb=35040,Ib=35044;function $b(x,E,C,et){var ht={},J=0,nt={uint8:gi,uint16:xi};E.oes_element_index_uint&&(nt.uint32=Ss);function St(Gt){this.id=J++,ht[this.id]=this,this.buffer=Gt,this.primType=qc,this.vertCount=0,this.type=0}St.prototype.bind=function(){this.buffer.bind()};var zt=[];function Pt(Gt){var V=zt.pop();return V||(V=new St(C.create(null,x1,!0,!1)._buffer)),qt(V,Gt,Pb,-1,-1,0,0),V}function Tt(Gt){zt.push(Gt)}function qt(Gt,V,rt,Ot,ee,gt,re){Gt.buffer.bind();var _t;if(V){var Ut=re;!re&&(!t(V)||$a(V)&&!t(V.data))&&(Ut=E.oes_element_index_uint?Ss:xi),C._initBuffer(Gt.buffer,V,rt,Ut,3)}else x.bufferData(x1,gt,rt),Gt.buffer.dtype=_t||gi,Gt.buffer.usage=rt,Gt.buffer.dimension=3,Gt.buffer.byteLength=gt;if(_t=re,!re){switch(Gt.buffer.dtype){case gi:case Ob:_t=gi;break;case xi:case Tp:_t=xi;break;case Ss:case Lp:_t=Ss;break;default:k.raise("unsupported type for element array")}Gt.buffer.dtype=_t}Gt.type=_t,k(_t!==Ss||!!E.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var yt=ee;yt<0&&(yt=Gt.buffer.byteLength,_t===xi?yt>>=1:_t===Ss&&(yt>>=2)),Gt.vertCount=yt;var Bt=Ot;if(Ot<0){Bt=qc;var Ae=Gt.buffer.dimension;Ae===1&&(Bt=Rb),Ae===2&&(Bt=Cb),Ae===3&&(Bt=qc)}Gt.primType=Bt}function Yt(Gt){et.elementsCount--,k(Gt.buffer!==null,"must not double destroy elements"),delete ht[Gt.id],Gt.buffer.destroy(),Gt.buffer=null}function Et(Gt,V){var rt=C.create(null,x1,!0),Ot=new St(rt._buffer);et.elementsCount++;function ee(gt){if(!gt)rt(),Ot.primType=qc,Ot.vertCount=0,Ot.type=gi;else if(typeof gt=="number")rt(gt),Ot.primType=qc,Ot.vertCount=gt|0,Ot.type=gi;else{var re=null,_t=Ib,Ut=-1,yt=-1,Bt=0,Ae=0;Array.isArray(gt)||t(gt)||$a(gt)?re=gt:(k.type(gt,"object","invalid arguments for elements"),"data"in gt&&(re=gt.data,k(Array.isArray(re)||t(re)||$a(re),"invalid data for element buffer")),"usage"in gt&&(k.parameter(gt.usage,uf,"invalid element buffer usage"),_t=uf[gt.usage]),"primitive"in gt&&(k.parameter(gt.primitive,mi,"invalid element buffer primitive"),Ut=mi[gt.primitive]),"count"in gt&&(k(typeof gt.count=="number"&&gt.count>=0,"invalid vertex count for elements"),yt=gt.count|0),"type"in gt&&(k.parameter(gt.type,nt,"invalid buffer type"),Ae=nt[gt.type]),"length"in gt?Bt=gt.length|0:(Bt=yt,Ae===xi||Ae===Tp?Bt*=2:(Ae===Ss||Ae===Lp)&&(Bt*=4))),qt(Ot,re,_t,Ut,yt,Bt,Ae)}return ee}return ee(Gt),ee._reglType="elements",ee._elements=Ot,ee.subdata=function(gt,re){return rt.subdata(gt,re),ee},ee.destroy=function(){Yt(Ot)},ee}return{create:Et,createStream:Pt,destroyStream:Tt,getElements:function(Gt){return typeof Gt=="function"&&Gt._elements instanceof St?Gt._elements:null},clear:function(){na(ht).forEach(Yt)}}}var Np=new Float32Array(1),Fb=new Uint32Array(Np.buffer),qb=5123;function Rp(x){for(var E=W.allocType(qb,x.length),C=0;C<x.length;++C)if(isNaN(x[C]))E[C]=65535;else if(x[C]===1/0)E[C]=31744;else if(x[C]===-1/0)E[C]=64512;else{Np[0]=x[C];var et=Fb[0],ht=et>>>31<<15,J=(et<<1>>>24)-127,nt=et>>13&1023;if(J<-24)E[C]=ht;else if(J<-14){var St=-14-J;E[C]=ht+(nt+1024>>St)}else J>15?E[C]=ht+31744:E[C]=ht+(J+15<<10)+nt}return E}function yn(x){return Array.isArray(x)||t(x)}var Cp=function(x){return!(x&x-1)&&!!x},Db=34467,t0=3553,y1=34067,pf=34069,Es=6408,b1=6406,vf=6407,Dc=6409,mf=6410,Op=32854,w1=32855,Pp=36194,Gb=32819,Hb=32820,Ub=33635,Bb=34042,_1=6402,gf=34041,M1=35904,k1=35906,yi=36193,S1=33776,E1=33777,A1=33778,z1=33779,Ip=35986,$p=35987,Fp=34798,qp=35840,Dp=35841,Gp=35842,Hp=35843,Up=36196,bi=5121,T1=5123,L1=5125,Gc=5126,jb=10242,Wb=10243,Vb=10497,N1=33071,Xb=33648,Yb=10240,Kb=10241,R1=9728,Qb=9729,C1=9984,Bp=9985,jp=9986,O1=9987,Zb=33170,xf=4352,Jb=4353,tw=4354,ew=34046,ow=3317,nw=37440,rw=37441,aw=37443,Wp=37444,Hc=33984,sw=[C1,jp,Bp,O1],yf=[0,Dc,mf,vf,Es],ya={};ya[Dc]=ya[b1]=ya[_1]=1,ya[gf]=ya[mf]=2,ya[vf]=ya[M1]=3,ya[Es]=ya[k1]=4;function wi(x){return"[object "+x+"]"}var Vp=wi("HTMLCanvasElement"),Xp=wi("OffscreenCanvas"),Yp=wi("CanvasRenderingContext2D"),Kp=wi("ImageBitmap"),Qp=wi("HTMLImageElement"),Zp=wi("HTMLVideoElement"),iw=Object.keys(p1).concat([Vp,Xp,Yp,Kp,Qp,Zp]),_i=[];_i[bi]=1,_i[Gc]=4,_i[yi]=2,_i[T1]=2,_i[L1]=4;var lr=[];lr[Op]=2,lr[w1]=2,lr[Pp]=2,lr[gf]=4,lr[S1]=.5,lr[E1]=.5,lr[A1]=1,lr[z1]=1,lr[Ip]=.5,lr[$p]=1,lr[Fp]=1,lr[qp]=.5,lr[Dp]=.25,lr[Gp]=.5,lr[Hp]=.25,lr[Up]=.5;function Jp(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function tv(x){if(!Array.isArray(x))return!1;var E=x.length;return!(E===0||!yn(x[0]))}function As(x){return Object.prototype.toString.call(x)}function ev(x){return As(x)===Vp}function ov(x){return As(x)===Xp}function cw(x){return As(x)===Yp}function lw(x){return As(x)===Kp}function fw(x){return As(x)===Qp}function hw(x){return As(x)===Zp}function P1(x){if(!x)return!1;var E=As(x);return iw.indexOf(E)>=0?!0:Jp(x)||tv(x)||$a(x)}function nv(x){return p1[Object.prototype.toString.call(x)]|0}function uw(x,E){var C=E.length;switch(x.type){case bi:case T1:case L1:case Gc:var et=W.allocType(x.type,C);et.set(E),x.data=et;break;case yi:x.data=Rp(E);break;default:k.raise("unsupported texture type, must specify a typed array")}}function rv(x,E){return W.allocType(x.type===yi?Gc:x.type,E)}function av(x,E){x.type===yi?(x.data=Rp(E),W.freeType(E)):x.data=E}function dw(x,E,C,et,ht,J){for(var nt=x.width,St=x.height,zt=x.channels,Pt=nt*St*zt,Tt=rv(x,Pt),qt=0,Yt=0;Yt<St;++Yt)for(var Et=0;Et<nt;++Et)for(var Gt=0;Gt<zt;++Gt)Tt[qt++]=E[C*Et+et*Yt+ht*Gt+J];av(x,Tt)}function bf(x,E,C,et,ht,J){var nt;if(typeof lr[x]!="undefined"?nt=lr[x]:nt=ya[x]*_i[E],J&&(nt*=6),ht){for(var St=0,zt=C;zt>=1;)St+=nt*zt*zt,zt/=2;return St}else return nt*C*et}function pw(x,E,C,et,ht,J,nt){var St={"don't care":xf,"dont care":xf,nice:tw,fast:Jb},zt={repeat:Vb,clamp:N1,mirror:Xb},Pt={nearest:R1,linear:Qb},Tt=e({mipmap:O1,"nearest mipmap nearest":C1,"linear mipmap nearest":Bp,"nearest mipmap linear":jp,"linear mipmap linear":O1},Pt),qt={none:0,browser:Wp},Yt={uint8:bi,rgba4:Gb,rgb565:Ub,"rgb5 a1":Hb},Et={alpha:b1,luminance:Dc,"luminance alpha":mf,rgb:vf,rgba:Es,rgba4:Op,"rgb5 a1":w1,rgb565:Pp},Gt={};E.ext_srgb&&(Et.srgb=M1,Et.srgba=k1),E.oes_texture_float&&(Yt.float32=Yt.float=Gc),E.oes_texture_half_float&&(Yt.float16=Yt["half float"]=yi),E.webgl_depth_texture&&(e(Et,{depth:_1,"depth stencil":gf}),e(Yt,{uint16:T1,uint32:L1,"depth stencil":Bb})),E.webgl_compressed_texture_s3tc&&e(Gt,{"rgb s3tc dxt1":S1,"rgba s3tc dxt1":E1,"rgba s3tc dxt3":A1,"rgba s3tc dxt5":z1}),E.webgl_compressed_texture_atc&&e(Gt,{"rgb atc":Ip,"rgba atc explicit alpha":$p,"rgba atc interpolated alpha":Fp}),E.webgl_compressed_texture_pvrtc&&e(Gt,{"rgb pvrtc 4bppv1":qp,"rgb pvrtc 2bppv1":Dp,"rgba pvrtc 4bppv1":Gp,"rgba pvrtc 2bppv1":Hp}),E.webgl_compressed_texture_etc1&&(Gt["rgb etc1"]=Up);var V=Array.prototype.slice.call(x.getParameter(Db));Object.keys(Gt).forEach(function(N){var ot=Gt[N];V.indexOf(ot)>=0&&(Et[N]=ot)});var rt=Object.keys(Et);C.textureFormats=rt;var Ot=[];Object.keys(Et).forEach(function(N){var ot=Et[N];Ot[ot]=N});var ee=[];Object.keys(Yt).forEach(function(N){var ot=Yt[N];ee[ot]=N});var gt=[];Object.keys(Pt).forEach(function(N){var ot=Pt[N];gt[ot]=N});var re=[];Object.keys(Tt).forEach(function(N){var ot=Tt[N];re[ot]=N});var _t=[];Object.keys(zt).forEach(function(N){var ot=zt[N];_t[ot]=N});var Ut=rt.reduce(function(N,ot){var Q=Et[ot];return Q===Dc||Q===b1||Q===Dc||Q===mf||Q===_1||Q===gf||E.ext_srgb&&(Q===M1||Q===k1)?N[Q]=Q:Q===w1||ot.indexOf("rgba")>=0?N[Q]=Es:N[Q]=vf,N},{});function yt(){this.internalformat=Es,this.format=Es,this.type=bi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Wp,this.width=0,this.height=0,this.channels=0}function Bt(N,ot){N.internalformat=ot.internalformat,N.format=ot.format,N.type=ot.type,N.compressed=ot.compressed,N.premultiplyAlpha=ot.premultiplyAlpha,N.flipY=ot.flipY,N.unpackAlignment=ot.unpackAlignment,N.colorSpace=ot.colorSpace,N.width=ot.width,N.height=ot.height,N.channels=ot.channels}function Ae(N,ot){if(!(typeof ot!="object"||!ot)){if("premultiplyAlpha"in ot&&(k.type(ot.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),N.premultiplyAlpha=ot.premultiplyAlpha),"flipY"in ot&&(k.type(ot.flipY,"boolean","invalid texture flip"),N.flipY=ot.flipY),"alignment"in ot&&(k.oneOf(ot.alignment,[1,2,4,8],"invalid texture unpack alignment"),N.unpackAlignment=ot.alignment),"colorSpace"in ot&&(k.parameter(ot.colorSpace,qt,"invalid colorSpace"),N.colorSpace=qt[ot.colorSpace]),"type"in ot){var Q=ot.type;k(E.oes_texture_float||!(Q==="float"||Q==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),k(E.oes_texture_half_float||!(Q==="half float"||Q==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),k(E.webgl_depth_texture||!(Q==="uint16"||Q==="uint32"||Q==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),k.parameter(Q,Yt,"invalid texture type"),N.type=Yt[Q]}var se=N.width,co=N.height,T=N.channels,S=!1;"shape"in ot?(k(Array.isArray(ot.shape)&&ot.shape.length>=2,"shape must be an array"),se=ot.shape[0],co=ot.shape[1],ot.shape.length===3&&(T=ot.shape[2],k(T>0&&T<=4,"invalid number of channels"),S=!0),k(se>=0&&se<=C.maxTextureSize,"invalid width"),k(co>=0&&co<=C.maxTextureSize,"invalid height")):("radius"in ot&&(se=co=ot.radius,k(se>=0&&se<=C.maxTextureSize,"invalid radius")),"width"in ot&&(se=ot.width,k(se>=0&&se<=C.maxTextureSize,"invalid width")),"height"in ot&&(co=ot.height,k(co>=0&&co<=C.maxTextureSize,"invalid height")),"channels"in ot&&(T=ot.channels,k(T>0&&T<=4,"invalid number of channels"),S=!0)),N.width=se|0,N.height=co|0,N.channels=T|0;var $=!1;if("format"in ot){var j=ot.format;k(E.webgl_depth_texture||!(j==="depth"||j==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),k.parameter(j,Et,"invalid texture format");var X=N.internalformat=Et[j];N.format=Ut[X],j in Yt&&("type"in ot||(N.type=Yt[j])),j in Gt&&(N.compressed=!0),$=!0}!S&&$?N.channels=ya[N.format]:S&&!$?N.channels!==yf[N.format]&&(N.format=N.internalformat=yf[N.channels]):$&&S&&k(N.channels===ya[N.format],"number of channels inconsistent with specified format")}}function Ue(N){x.pixelStorei(nw,N.flipY),x.pixelStorei(rw,N.premultiplyAlpha),x.pixelStorei(aw,N.colorSpace),x.pixelStorei(ow,N.unpackAlignment)}function Kt(){yt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function $t(N,ot){var Q=null;if(P1(ot)?Q=ot:ot&&(k.type(ot,"object","invalid pixel data type"),Ae(N,ot),"x"in ot&&(N.xOffset=ot.x|0),"y"in ot&&(N.yOffset=ot.y|0),P1(ot.data)&&(Q=ot.data)),k(!N.compressed||Q instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ot.copy){k(!Q,"can not specify copy and data field for the same texture");var se=ht.viewportWidth,co=ht.viewportHeight;N.width=N.width||se-N.xOffset,N.height=N.height||co-N.yOffset,N.needsCopy=!0,k(N.xOffset>=0&&N.xOffset<se&&N.yOffset>=0&&N.yOffset<co&&N.width>0&&N.width<=se&&N.height>0&&N.height<=co,"copy texture read out of bounds")}else if(!Q)N.width=N.width||1,N.height=N.height||1,N.channels=N.channels||4;else if(t(Q))N.channels=N.channels||4,N.data=Q,!("type"in ot)&&N.type===bi&&(N.type=nv(Q));else if(Jp(Q))N.channels=N.channels||4,uw(N,Q),N.alignment=1,N.needsFree=!0;else if($a(Q)){var T=Q.data;!Array.isArray(T)&&N.type===bi&&(N.type=nv(T));var S=Q.shape,$=Q.stride,j,X,q,F,G,L;S.length===3?(q=S[2],L=$[2]):(k(S.length===2,"invalid ndarray pixel data, must be 2 or 3D"),q=1,L=1),j=S[0],X=S[1],F=$[0],G=$[1],N.alignment=1,N.width=j,N.height=X,N.channels=q,N.format=N.internalformat=yf[q],N.needsFree=!0,dw(N,T,F,G,L,Q.offset)}else if(ev(Q)||ov(Q)||cw(Q))ev(Q)||ov(Q)?N.element=Q:N.element=Q.canvas,N.width=N.element.width,N.height=N.element.height,N.channels=4;else if(lw(Q))N.element=Q,N.width=Q.width,N.height=Q.height,N.channels=4;else if(fw(Q))N.element=Q,N.width=Q.naturalWidth,N.height=Q.naturalHeight,N.channels=4;else if(hw(Q))N.element=Q,N.width=Q.videoWidth,N.height=Q.videoHeight,N.channels=4;else if(tv(Q)){var P=N.width||Q[0].length,A=N.height||Q.length,U=N.channels;yn(Q[0][0])?U=U||Q[0][0].length:U=U||1;for(var Y=hf.shape(Q),lt=1,ut=0;ut<Y.length;++ut)lt*=Y[ut];var at=rv(N,lt);hf.flatten(Q,Y,"",at),av(N,at),N.alignment=1,N.width=P,N.height=A,N.channels=U,N.format=N.internalformat=yf[U],N.needsFree=!0}N.type===Gc?k(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):N.type===yi&&k(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function mt(N,ot,Q){var se=N.element,co=N.data,T=N.internalformat,S=N.format,$=N.type,j=N.width,X=N.height;Ue(N),se?x.texImage2D(ot,Q,S,S,$,se):N.compressed?x.compressedTexImage2D(ot,Q,T,j,X,0,co):N.needsCopy?(et(),x.copyTexImage2D(ot,Q,S,N.xOffset,N.yOffset,j,X,0)):x.texImage2D(ot,Q,S,j,X,0,S,$,co||null)}function Ge(N,ot,Q,se,co){var T=N.element,S=N.data,$=N.internalformat,j=N.format,X=N.type,q=N.width,F=N.height;Ue(N),T?x.texSubImage2D(ot,co,Q,se,j,X,T):N.compressed?x.compressedTexSubImage2D(ot,co,Q,se,$,q,F,S):N.needsCopy?(et(),x.copyTexSubImage2D(ot,co,Q,se,N.xOffset,N.yOffset,q,F)):x.texSubImage2D(ot,co,Q,se,q,F,j,X,S)}var Qe=[];function fe(){return Qe.pop()||new Kt}function io(N){N.needsFree&&W.freeType(N.data),Kt.call(N),Qe.push(N)}function We(){yt.call(this),this.genMipmaps=!1,this.mipmapHint=xf,this.mipmask=0,this.images=Array(16)}function oo(N,ot,Q){var se=N.images[0]=fe();N.mipmask=1,se.width=N.width=ot,se.height=N.height=Q,se.channels=N.channels=4}function Ao(N,ot){var Q=null;if(P1(ot))Q=N.images[0]=fe(),Bt(Q,N),$t(Q,ot),N.mipmask=1;else if(Ae(N,ot),Array.isArray(ot.mipmap))for(var se=ot.mipmap,co=0;co<se.length;++co)Q=N.images[co]=fe(),Bt(Q,N),Q.width>>=co,Q.height>>=co,$t(Q,se[co]),N.mipmask|=1<<co;else Q=N.images[0]=fe(),Bt(Q,N),$t(Q,ot),N.mipmask=1;Bt(N,N.images[0]),N.compressed&&(N.internalformat===S1||N.internalformat===E1||N.internalformat===A1||N.internalformat===z1)&&k(N.width%4===0&&N.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function En(N,ot){for(var Q=N.images,se=0;se<Q.length;++se){if(!Q[se])return;mt(Q[se],ot,se)}}var Un=[];function po(){var N=Un.pop()||new We;yt.call(N),N.mipmask=0;for(var ot=0;ot<16;++ot)N.images[ot]=null;return N}function Cn(N){for(var ot=N.images,Q=0;Q<ot.length;++Q)ot[Q]&&io(ot[Q]),ot[Q]=null;Un.push(N)}function Qo(){this.minFilter=R1,this.magFilter=R1,this.wrapS=N1,this.wrapT=N1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=xf}function An(N,ot){if("min"in ot){var Q=ot.min;k.parameter(Q,Tt),N.minFilter=Tt[Q],sw.indexOf(N.minFilter)>=0&&!("faces"in ot)&&(N.genMipmaps=!0)}if("mag"in ot){var se=ot.mag;k.parameter(se,Pt),N.magFilter=Pt[se]}var co=N.wrapS,T=N.wrapT;if("wrap"in ot){var S=ot.wrap;typeof S=="string"?(k.parameter(S,zt),co=T=zt[S]):Array.isArray(S)&&(k.parameter(S[0],zt),k.parameter(S[1],zt),co=zt[S[0]],T=zt[S[1]])}else{if("wrapS"in ot){var $=ot.wrapS;k.parameter($,zt),co=zt[$]}if("wrapT"in ot){var j=ot.wrapT;k.parameter(j,zt),T=zt[j]}}if(N.wrapS=co,N.wrapT=T,"anisotropic"in ot){var X=ot.anisotropic;k(typeof X=="number"&&X>=1&&X<=C.maxAnisotropic,"aniso samples must be between 1 and "),N.anisotropic=ot.anisotropic}if("mipmap"in ot){var q=!1;switch(typeof ot.mipmap){case"string":k.parameter(ot.mipmap,St,"invalid mipmap hint"),N.mipmapHint=St[ot.mipmap],N.genMipmaps=!0,q=!0;break;case"boolean":q=N.genMipmaps=ot.mipmap;break;case"object":k(Array.isArray(ot.mipmap),"invalid mipmap type"),N.genMipmaps=!1,q=!0;break;default:k.raise("invalid mipmap type")}q&&!("min"in ot)&&(N.minFilter=C1)}}function On(N,ot){x.texParameteri(ot,Kb,N.minFilter),x.texParameteri(ot,Yb,N.magFilter),x.texParameteri(ot,jb,N.wrapS),x.texParameteri(ot,Wb,N.wrapT),E.ext_texture_filter_anisotropic&&x.texParameteri(ot,ew,N.anisotropic),N.genMipmaps&&(x.hint(Zb,N.mipmapHint),x.generateMipmap(ot))}var Pn=0,Jn={},fr=C.maxTextureUnits,bn=Array(fr).map(function(){return null});function Ze(N){yt.call(this),this.mipmask=0,this.internalformat=Es,this.id=Pn++,this.refCount=1,this.target=N,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Qo,nt.profile&&(this.stats={size:0})}function hr(N){x.activeTexture(Hc),x.bindTexture(N.target,N.texture)}function Ro(){var N=bn[0];N?x.bindTexture(N.target,N.texture):x.bindTexture(t0,null)}function Re(N){var ot=N.texture;k(ot,"must not double destroy texture");var Q=N.unit,se=N.target;Q>=0&&(x.activeTexture(Hc+Q),x.bindTexture(se,null),bn[Q]=null),x.deleteTexture(ot),N.texture=null,N.params=null,N.pixels=null,N.refCount=0,delete Jn[N.id],J.textureCount--}e(Ze.prototype,{bind:function(){var N=this;N.bindCount+=1;var ot=N.unit;if(ot<0){for(var Q=0;Q<fr;++Q){var se=bn[Q];if(se){if(se.bindCount>0)continue;se.unit=-1}bn[Q]=N,ot=Q;break}ot>=fr&&k.raise("insufficient number of texture units"),nt.profile&&J.maxTextureUnits<ot+1&&(J.maxTextureUnits=ot+1),N.unit=ot,x.activeTexture(Hc+ot),x.bindTexture(N.target,N.texture)}return ot},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Re(this)}});function ho(N,ot){var Q=new Ze(t0);Jn[Q.id]=Q,J.textureCount++;function se(S,$){var j=Q.texInfo;Qo.call(j);var X=po();return typeof S=="number"?typeof $=="number"?oo(X,S|0,$|0):oo(X,S|0,S|0):S?(k.type(S,"object","invalid arguments to regl.texture"),An(j,S),Ao(X,S)):oo(X,1,1),j.genMipmaps&&(X.mipmask=(X.width<<1)-1),Q.mipmask=X.mipmask,Bt(Q,X),k.texture2D(j,X,C),Q.internalformat=X.internalformat,se.width=X.width,se.height=X.height,hr(Q),En(X,t0),On(j,t0),Ro(),Cn(X),nt.profile&&(Q.stats.size=bf(Q.internalformat,Q.type,X.width,X.height,j.genMipmaps,!1)),se.format=Ot[Q.internalformat],se.type=ee[Q.type],se.mag=gt[j.magFilter],se.min=re[j.minFilter],se.wrapS=_t[j.wrapS],se.wrapT=_t[j.wrapT],se}function co(S,$,j,X){k(!!S,"must specify image data");var q=$|0,F=j|0,G=X|0,L=fe();return Bt(L,Q),L.width=0,L.height=0,$t(L,S),L.width=L.width||(Q.width>>G)-q,L.height=L.height||(Q.height>>G)-F,k(Q.type===L.type&&Q.format===L.format&&Q.internalformat===L.internalformat,"incompatible format for texture.subimage"),k(q>=0&&F>=0&&q+L.width<=Q.width&&F+L.height<=Q.height,"texture.subimage write out of bounds"),k(Q.mipmask&1<<G,"missing mipmap data"),k(L.data||L.element||L.needsCopy,"missing image data"),hr(Q),Ge(L,t0,q,F,G),Ro(),io(L),se}function T(S,$){var j=S|0,X=$|0||j;if(j===Q.width&&X===Q.height)return se;se.width=Q.width=j,se.height=Q.height=X,hr(Q);for(var q=0;Q.mipmask>>q;++q){var F=j>>q,G=X>>q;if(!F||!G)break;x.texImage2D(t0,q,Q.format,F,G,0,Q.format,Q.type,null)}return Ro(),nt.profile&&(Q.stats.size=bf(Q.internalformat,Q.type,j,X,!1,!1)),se}return se(N,ot),se.subimage=co,se.resize=T,se._reglType="texture2d",se._texture=Q,nt.profile&&(se.stats=Q.stats),se.destroy=function(){Q.decRef()},se}function Mo(N,ot,Q,se,co,T){var S=new Ze(y1);Jn[S.id]=S,J.cubeCount++;var $=new Array(6);function j(F,G,L,P,A,U){var Y,lt=S.texInfo;for(Qo.call(lt),Y=0;Y<6;++Y)$[Y]=po();if(typeof F=="number"||!F){var ut=F|0||1;for(Y=0;Y<6;++Y)oo($[Y],ut,ut)}else if(typeof F=="object")if(G)Ao($[0],F),Ao($[1],G),Ao($[2],L),Ao($[3],P),Ao($[4],A),Ao($[5],U);else if(An(lt,F),Ae(S,F),"faces"in F){var at=F.faces;for(k(Array.isArray(at)&&at.length===6,"cube faces must be a length 6 array"),Y=0;Y<6;++Y)k(typeof at[Y]=="object"&&!!at[Y],"invalid input for cube map face"),Bt($[Y],S),Ao($[Y],at[Y])}else for(Y=0;Y<6;++Y)Ao($[Y],F);else k.raise("invalid arguments to cube map");for(Bt(S,$[0]),C.npotTextureCube||k(Cp(S.width)&&Cp(S.height),"your browser does not support non power or two texture dimensions"),lt.genMipmaps?S.mipmask=($[0].width<<1)-1:S.mipmask=$[0].mipmask,k.textureCube(S,lt,$,C),S.internalformat=$[0].internalformat,j.width=$[0].width,j.height=$[0].height,hr(S),Y=0;Y<6;++Y)En($[Y],pf+Y);for(On(lt,y1),Ro(),nt.profile&&(S.stats.size=bf(S.internalformat,S.type,j.width,j.height,lt.genMipmaps,!0)),j.format=Ot[S.internalformat],j.type=ee[S.type],j.mag=gt[lt.magFilter],j.min=re[lt.minFilter],j.wrapS=_t[lt.wrapS],j.wrapT=_t[lt.wrapT],Y=0;Y<6;++Y)Cn($[Y]);return j}function X(F,G,L,P,A){k(!!G,"must specify image data"),k(typeof F=="number"&&F===(F|0)&&F>=0&&F<6,"invalid face");var U=L|0,Y=P|0,lt=A|0,ut=fe();return Bt(ut,S),ut.width=0,ut.height=0,$t(ut,G),ut.width=ut.width||(S.width>>lt)-U,ut.height=ut.height||(S.height>>lt)-Y,k(S.type===ut.type&&S.format===ut.format&&S.internalformat===ut.internalformat,"incompatible format for texture.subimage"),k(U>=0&&Y>=0&&U+ut.width<=S.width&&Y+ut.height<=S.height,"texture.subimage write out of bounds"),k(S.mipmask&1<<lt,"missing mipmap data"),k(ut.data||ut.element||ut.needsCopy,"missing image data"),hr(S),Ge(ut,pf+F,U,Y,lt),Ro(),io(ut),j}function q(F){var G=F|0;if(G!==S.width){j.width=S.width=G,j.height=S.height=G,hr(S);for(var L=0;L<6;++L)for(var P=0;S.mipmask>>P;++P)x.texImage2D(pf+L,P,S.format,G>>P,G>>P,0,S.format,S.type,null);return Ro(),nt.profile&&(S.stats.size=bf(S.internalformat,S.type,j.width,j.height,!1,!0)),j}}return j(N,ot,Q,se,co,T),j.subimage=X,j.resize=q,j._reglType="textureCube",j._texture=S,nt.profile&&(j.stats=S.stats),j.destroy=function(){S.decRef()},j}function wn(){for(var N=0;N<fr;++N)x.activeTexture(Hc+N),x.bindTexture(t0,null),bn[N]=null;na(Jn).forEach(Re),J.cubeCount=0,J.textureCount=0}nt.profile&&(J.getTotalTextureSize=function(){var N=0;return Object.keys(Jn).forEach(function(ot){N+=Jn[ot].stats.size}),N});function o0(){for(var N=0;N<fr;++N){var ot=bn[N];ot&&(ot.bindCount=0,ot.unit=-1,bn[N]=null)}na(Jn).forEach(function(Q){Q.texture=x.createTexture(),x.bindTexture(Q.target,Q.texture);for(var se=0;se<32;++se)if(Q.mipmask&1<<se)if(Q.target===t0)x.texImage2D(t0,se,Q.internalformat,Q.width>>se,Q.height>>se,0,Q.internalformat,Q.type,null);else for(var co=0;co<6;++co)x.texImage2D(pf+co,se,Q.internalformat,Q.width>>se,Q.height>>se,0,Q.internalformat,Q.type,null);On(Q.texInfo,Q.target)})}function Os(){for(var N=0;N<fr;++N){var ot=bn[N];ot&&(ot.bindCount=0,ot.unit=-1,bn[N]=null),x.activeTexture(Hc+N),x.bindTexture(t0,null),x.bindTexture(y1,null)}}return{create2D:ho,createCube:Mo,clear:wn,getTexture:function(N){return null},restore:o0,refresh:Os}}var P0=36161,wf=32854,sv=32855,iv=36194,cv=33189,lv=36168,fv=34041,hv=35907,uv=34836,dv=34842,pv=34843,Fa=[];Fa[wf]=2,Fa[sv]=2,Fa[iv]=2,Fa[cv]=2,Fa[lv]=1,Fa[fv]=4,Fa[hv]=4,Fa[uv]=16,Fa[dv]=8,Fa[pv]=6;function vv(x,E,C){return Fa[x]*E*C}var vw=function(x,E,C,et,ht){var J={rgba4:wf,rgb565:iv,"rgb5 a1":sv,depth:cv,stencil:lv,"depth stencil":fv};E.ext_srgb&&(J.srgba=hv),E.ext_color_buffer_half_float&&(J.rgba16f=dv,J.rgb16f=pv),E.webgl_color_buffer_float&&(J.rgba32f=uv);var nt=[];Object.keys(J).forEach(function(Et){var Gt=J[Et];nt[Gt]=Et});var St=0,zt={};function Pt(Et){this.id=St++,this.refCount=1,this.renderbuffer=Et,this.format=wf,this.width=0,this.height=0,ht.profile&&(this.stats={size:0})}Pt.prototype.decRef=function(){--this.refCount<=0&&Tt(this)};function Tt(Et){var Gt=Et.renderbuffer;k(Gt,"must not double destroy renderbuffer"),x.bindRenderbuffer(P0,null),x.deleteRenderbuffer(Gt),Et.renderbuffer=null,Et.refCount=0,delete zt[Et.id],et.renderbufferCount--}function qt(Et,Gt){var V=new Pt(x.createRenderbuffer());zt[V.id]=V,et.renderbufferCount++;function rt(ee,gt){var re=0,_t=0,Ut=wf;if(typeof ee=="object"&&ee){var yt=ee;if("shape"in yt){var Bt=yt.shape;k(Array.isArray(Bt)&&Bt.length>=2,"invalid renderbuffer shape"),re=Bt[0]|0,_t=Bt[1]|0}else"radius"in yt&&(re=_t=yt.radius|0),"width"in yt&&(re=yt.width|0),"height"in yt&&(_t=yt.height|0);"format"in yt&&(k.parameter(yt.format,J,"invalid renderbuffer format"),Ut=J[yt.format])}else typeof ee=="number"?(re=ee|0,typeof gt=="number"?_t=gt|0:_t=re):ee?k.raise("invalid arguments to renderbuffer constructor"):re=_t=1;if(k(re>0&&_t>0&&re<=C.maxRenderbufferSize&&_t<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(re===V.width&&_t===V.height&&Ut===V.format))return rt.width=V.width=re,rt.height=V.height=_t,V.format=Ut,x.bindRenderbuffer(P0,V.renderbuffer),x.renderbufferStorage(P0,Ut,re,_t),k(x.getError()===0,"invalid render buffer format"),ht.profile&&(V.stats.size=vv(V.format,V.width,V.height)),rt.format=nt[V.format],rt}function Ot(ee,gt){var re=ee|0,_t=gt|0||re;return re===V.width&&_t===V.height||(k(re>0&&_t>0&&re<=C.maxRenderbufferSize&&_t<=C.maxRenderbufferSize,"invalid renderbuffer size"),rt.width=V.width=re,rt.height=V.height=_t,x.bindRenderbuffer(P0,V.renderbuffer),x.renderbufferStorage(P0,V.format,re,_t),k(x.getError()===0,"invalid render buffer format"),ht.profile&&(V.stats.size=vv(V.format,V.width,V.height))),rt}return rt(Et,Gt),rt.resize=Ot,rt._reglType="renderbuffer",rt._renderbuffer=V,ht.profile&&(rt.stats=V.stats),rt.destroy=function(){V.decRef()},rt}ht.profile&&(et.getTotalRenderbufferSize=function(){var Et=0;return Object.keys(zt).forEach(function(Gt){Et+=zt[Gt].stats.size}),Et});function Yt(){na(zt).forEach(function(Et){Et.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(P0,Et.renderbuffer),x.renderbufferStorage(P0,Et.format,Et.width,Et.height)}),x.bindRenderbuffer(P0,null)}return{create:qt,clear:function(){na(zt).forEach(Tt)},restore:Yt}},p0=36160,I1=36161,zs=3553,_f=34069,mv=36064,gv=36096,xv=36128,yv=33306,bv=36053,mw=36054,gw=36055,xw=36057,yw=36061,bw=36193,ww=5121,_w=5126,wv=6407,_v=6408,Mw=6402,kw=[wv,_v],$1=[];$1[_v]=4,$1[wv]=3;var Mf=[];Mf[ww]=1,Mf[_w]=4,Mf[bw]=2;var Sw=32854,Ew=32855,Aw=36194,zw=33189,Tw=36168,Mv=34041,Lw=35907,Nw=34836,Rw=34842,Cw=34843,Ow=[Sw,Ew,Aw,Lw,Rw,Cw,Nw],Mi={};Mi[bv]="complete",Mi[mw]="incomplete attachment",Mi[xw]="incomplete dimensions",Mi[gw]="incomplete, missing attachment",Mi[yw]="unsupported";function Pw(x,E,C,et,ht,J){var nt={cur:null,next:null,dirty:!1,setFBO:null},St=["rgba"],zt=["rgba4","rgb565","rgb5 a1"];E.ext_srgb&&zt.push("srgba"),E.ext_color_buffer_half_float&&zt.push("rgba16f","rgb16f"),E.webgl_color_buffer_float&&zt.push("rgba32f");var Pt=["uint8"];E.oes_texture_half_float&&Pt.push("half float","float16"),E.oes_texture_float&&Pt.push("float","float32");function Tt(Kt,$t,mt){this.target=Kt,this.texture=$t,this.renderbuffer=mt;var Ge=0,Qe=0;$t?(Ge=$t.width,Qe=$t.height):mt&&(Ge=mt.width,Qe=mt.height),this.width=Ge,this.height=Qe}function qt(Kt){Kt&&(Kt.texture&&Kt.texture._texture.decRef(),Kt.renderbuffer&&Kt.renderbuffer._renderbuffer.decRef())}function Yt(Kt,$t,mt){if(Kt)if(Kt.texture){var Ge=Kt.texture._texture,Qe=Math.max(1,Ge.width),fe=Math.max(1,Ge.height);k(Qe===$t&&fe===mt,"inconsistent width/height for supplied texture"),Ge.refCount+=1}else{var io=Kt.renderbuffer._renderbuffer;k(io.width===$t&&io.height===mt,"inconsistent width/height for renderbuffer"),io.refCount+=1}}function Et(Kt,$t){$t&&($t.texture?x.framebufferTexture2D(p0,Kt,$t.target,$t.texture._texture.texture,0):x.framebufferRenderbuffer(p0,Kt,I1,$t.renderbuffer._renderbuffer.renderbuffer))}function Gt(Kt){var $t=zs,mt=null,Ge=null,Qe=Kt;typeof Kt=="object"&&(Qe=Kt.data,"target"in Kt&&($t=Kt.target|0)),k.type(Qe,"function","invalid attachment data");var fe=Qe._reglType;return fe==="texture2d"?(mt=Qe,k($t===zs)):fe==="textureCube"?(mt=Qe,k($t>=_f&&$t<_f+6,"invalid cube map target")):fe==="renderbuffer"?(Ge=Qe,$t=I1):k.raise("invalid regl object for attachment"),new Tt($t,mt,Ge)}function V(Kt,$t,mt,Ge,Qe){if(mt){var fe=et.create2D({width:Kt,height:$t,format:Ge,type:Qe});return fe._texture.refCount=0,new Tt(zs,fe,null)}else{var io=ht.create({width:Kt,height:$t,format:Ge});return io._renderbuffer.refCount=0,new Tt(I1,null,io)}}function rt(Kt){return Kt&&(Kt.texture||Kt.renderbuffer)}function Ot(Kt,$t,mt){Kt&&(Kt.texture?Kt.texture.resize($t,mt):Kt.renderbuffer&&Kt.renderbuffer.resize($t,mt),Kt.width=$t,Kt.height=mt)}var ee=0,gt={};function re(){this.id=ee++,gt[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function _t(Kt){Kt.colorAttachments.forEach(qt),qt(Kt.depthAttachment),qt(Kt.stencilAttachment),qt(Kt.depthStencilAttachment)}function Ut(Kt){var $t=Kt.framebuffer;k($t,"must not double destroy framebuffer"),x.deleteFramebuffer($t),Kt.framebuffer=null,J.framebufferCount--,delete gt[Kt.id]}function yt(Kt){var $t;x.bindFramebuffer(p0,Kt.framebuffer);var mt=Kt.colorAttachments;for($t=0;$t<mt.length;++$t)Et(mv+$t,mt[$t]);for($t=mt.length;$t<C.maxColorAttachments;++$t)x.framebufferTexture2D(p0,mv+$t,zs,null,0);x.framebufferTexture2D(p0,yv,zs,null,0),x.framebufferTexture2D(p0,gv,zs,null,0),x.framebufferTexture2D(p0,xv,zs,null,0),Et(gv,Kt.depthAttachment),Et(xv,Kt.stencilAttachment),Et(yv,Kt.depthStencilAttachment);var Ge=x.checkFramebufferStatus(p0);!x.isContextLost()&&Ge!==bv&&k.raise("framebuffer configuration not supported, status = "+Mi[Ge]),x.bindFramebuffer(p0,nt.next?nt.next.framebuffer:null),nt.cur=nt.next,x.getError()}function Bt(Kt,$t){var mt=new re;J.framebufferCount++;function Ge(fe,io){var We;k(nt.next!==mt,"can not update framebuffer which is currently in use");var oo=0,Ao=0,En=!0,Un=!0,po=null,Cn=!0,Qo="rgba",An="uint8",On=1,Pn=null,Jn=null,fr=null,bn=!1;if(typeof fe=="number")oo=fe|0,Ao=io|0||oo;else if(!fe)oo=Ao=1;else{k.type(fe,"object","invalid arguments for framebuffer");var Ze=fe;if("shape"in Ze){var hr=Ze.shape;k(Array.isArray(hr)&&hr.length>=2,"invalid shape for framebuffer"),oo=hr[0],Ao=hr[1]}else"radius"in Ze&&(oo=Ao=Ze.radius),"width"in Ze&&(oo=Ze.width),"height"in Ze&&(Ao=Ze.height);("color"in Ze||"colors"in Ze)&&(po=Ze.color||Ze.colors,Array.isArray(po)&&k(po.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),po||("colorCount"in Ze&&(On=Ze.colorCount|0,k(On>0,"invalid color buffer count")),"colorTexture"in Ze&&(Cn=!!Ze.colorTexture,Qo="rgba4"),"colorType"in Ze&&(An=Ze.colorType,Cn?(k(E.oes_texture_float||!(An==="float"||An==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),k(E.oes_texture_half_float||!(An==="half float"||An==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):An==="half float"||An==="float16"?(k(E.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Qo="rgba16f"):(An==="float"||An==="float32")&&(k(E.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Qo="rgba32f"),k.oneOf(An,Pt,"invalid color type")),"colorFormat"in Ze&&(Qo=Ze.colorFormat,St.indexOf(Qo)>=0?Cn=!0:zt.indexOf(Qo)>=0?Cn=!1:Cn?k.oneOf(Ze.colorFormat,St,"invalid color format for texture"):k.oneOf(Ze.colorFormat,zt,"invalid color format for renderbuffer"))),("depthTexture"in Ze||"depthStencilTexture"in Ze)&&(bn=!!(Ze.depthTexture||Ze.depthStencilTexture),k(!bn||E.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Ze&&(typeof Ze.depth=="boolean"?En=Ze.depth:(Pn=Ze.depth,Un=!1)),"stencil"in Ze&&(typeof Ze.stencil=="boolean"?Un=Ze.stencil:(Jn=Ze.stencil,En=!1)),"depthStencil"in Ze&&(typeof Ze.depthStencil=="boolean"?En=Un=Ze.depthStencil:(fr=Ze.depthStencil,En=!1,Un=!1))}var Ro=null,Re=null,ho=null,Mo=null;if(Array.isArray(po))Ro=po.map(Gt);else if(po)Ro=[Gt(po)];else for(Ro=new Array(On),We=0;We<On;++We)Ro[We]=V(oo,Ao,Cn,Qo,An);k(E.webgl_draw_buffers||Ro.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),k(Ro.length<=C.maxColorAttachments,"too many color attachments, not supported"),oo=oo||Ro[0].width,Ao=Ao||Ro[0].height,Pn?Re=Gt(Pn):En&&!Un&&(Re=V(oo,Ao,bn,"depth","uint32")),Jn?ho=Gt(Jn):Un&&!En&&(ho=V(oo,Ao,!1,"stencil","uint8")),fr?Mo=Gt(fr):!Pn&&!Jn&&Un&&En&&(Mo=V(oo,Ao,bn,"depth stencil","depth stencil")),k(!!Pn+!!Jn+!!fr<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var wn=null;for(We=0;We<Ro.length;++We)if(Yt(Ro[We],oo,Ao),k(!Ro[We]||Ro[We].texture&&kw.indexOf(Ro[We].texture._texture.format)>=0||Ro[We].renderbuffer&&Ow.indexOf(Ro[We].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+We+" is invalid"),Ro[We]&&Ro[We].texture){var o0=$1[Ro[We].texture._texture.format]*Mf[Ro[We].texture._texture.type];wn===null?wn=o0:k(wn===o0,"all color attachments much have the same number of bits per pixel.")}return Yt(Re,oo,Ao),k(!Re||Re.texture&&Re.texture._texture.format===Mw||Re.renderbuffer&&Re.renderbuffer._renderbuffer.format===zw,"invalid depth attachment for framebuffer object"),Yt(ho,oo,Ao),k(!ho||ho.renderbuffer&&ho.renderbuffer._renderbuffer.format===Tw,"invalid stencil attachment for framebuffer object"),Yt(Mo,oo,Ao),k(!Mo||Mo.texture&&Mo.texture._texture.format===Mv||Mo.renderbuffer&&Mo.renderbuffer._renderbuffer.format===Mv,"invalid depth-stencil attachment for framebuffer object"),_t(mt),mt.width=oo,mt.height=Ao,mt.colorAttachments=Ro,mt.depthAttachment=Re,mt.stencilAttachment=ho,mt.depthStencilAttachment=Mo,Ge.color=Ro.map(rt),Ge.depth=rt(Re),Ge.stencil=rt(ho),Ge.depthStencil=rt(Mo),Ge.width=mt.width,Ge.height=mt.height,yt(mt),Ge}function Qe(fe,io){k(nt.next!==mt,"can not resize a framebuffer which is currently in use");var We=Math.max(fe|0,1),oo=Math.max(io|0||We,1);if(We===mt.width&&oo===mt.height)return Ge;for(var Ao=mt.colorAttachments,En=0;En<Ao.length;++En)Ot(Ao[En],We,oo);return Ot(mt.depthAttachment,We,oo),Ot(mt.stencilAttachment,We,oo),Ot(mt.depthStencilAttachment,We,oo),mt.width=Ge.width=We,mt.height=Ge.height=oo,yt(mt),Ge}return Ge(Kt,$t),e(Ge,{resize:Qe,_reglType:"framebuffer",_framebuffer:mt,destroy:function(){Ut(mt),_t(mt)},use:function(fe){nt.setFBO({framebuffer:Ge},fe)}})}function Ae(Kt){var $t=Array(6);function mt(Qe){var fe;k($t.indexOf(nt.next)<0,"can not update framebuffer which is currently in use");var io={color:null},We=0,oo=null,Ao="rgba",En="uint8",Un=1;if(typeof Qe=="number")We=Qe|0;else if(!Qe)We=1;else{k.type(Qe,"object","invalid arguments for framebuffer");var po=Qe;if("shape"in po){var Cn=po.shape;k(Array.isArray(Cn)&&Cn.length>=2,"invalid shape for framebuffer"),k(Cn[0]===Cn[1],"cube framebuffer must be square"),We=Cn[0]}else"radius"in po&&(We=po.radius|0),"width"in po?(We=po.width|0,"height"in po&&k(po.height===We,"must be square")):"height"in po&&(We=po.height|0);("color"in po||"colors"in po)&&(oo=po.color||po.colors,Array.isArray(oo)&&k(oo.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),oo||("colorCount"in po&&(Un=po.colorCount|0,k(Un>0,"invalid color buffer count")),"colorType"in po&&(k.oneOf(po.colorType,Pt,"invalid color type"),En=po.colorType),"colorFormat"in po&&(Ao=po.colorFormat,k.oneOf(po.colorFormat,St,"invalid color format for texture"))),"depth"in po&&(io.depth=po.depth),"stencil"in po&&(io.stencil=po.stencil),"depthStencil"in po&&(io.depthStencil=po.depthStencil)}var Qo;if(oo)if(Array.isArray(oo))for(Qo=[],fe=0;fe<oo.length;++fe)Qo[fe]=oo[fe];else Qo=[oo];else{Qo=Array(Un);var An={radius:We,format:Ao,type:En};for(fe=0;fe<Un;++fe)Qo[fe]=et.createCube(An)}for(io.color=Array(Qo.length),fe=0;fe<Qo.length;++fe){var On=Qo[fe];k(typeof On=="function"&&On._reglType==="textureCube","invalid cube map"),We=We||On.width,k(On.width===We&&On.height===We,"invalid cube map shape"),io.color[fe]={target:_f,data:Qo[fe]}}for(fe=0;fe<6;++fe){for(var Pn=0;Pn<Qo.length;++Pn)io.color[Pn].target=_f+fe;fe>0&&(io.depth=$t[0].depth,io.stencil=$t[0].stencil,io.depthStencil=$t[0].depthStencil),$t[fe]?$t[fe](io):$t[fe]=Bt(io)}return e(mt,{width:We,height:We,color:Qo})}function Ge(Qe){var fe,io=Qe|0;if(k(io>0&&io<=C.maxCubeMapSize,"invalid radius for cube fbo"),io===mt.width)return mt;var We=mt.color;for(fe=0;fe<We.length;++fe)We[fe].resize(io);for(fe=0;fe<6;++fe)$t[fe].resize(io);return mt.width=mt.height=io,mt}return mt(Kt),e(mt,{faces:$t,resize:Ge,_reglType:"framebufferCube",destroy:function(){$t.forEach(function(Qe){Qe.destroy()})}})}function Ue(){nt.cur=null,nt.next=null,nt.dirty=!0,na(gt).forEach(function(Kt){Kt.framebuffer=x.createFramebuffer(),yt(Kt)})}return e(nt,{getFramebuffer:function(Kt){if(typeof Kt=="function"&&Kt._reglType==="framebuffer"){var $t=Kt._framebuffer;if($t instanceof re)return $t}return null},create:Bt,createCube:Ae,clear:function(){na(gt).forEach(Ut)},restore:Ue})}var Iw=5126,kv=34962;function F1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Iw,this.offset=0,this.stride=0,this.divisor=0}function $w(x,E,C,et,ht){for(var J=C.maxAttributes,nt=new Array(J),St=0;St<J;++St)nt[St]=new F1;var zt=0,Pt={},Tt={Record:F1,scope:{},state:nt,currentVAO:null,targetVAO:null,restore:Yt()?gt:function(){},createVAO:re,getVAO:Gt,destroyBuffer:qt,setVAO:Yt()?V:rt,clear:Yt()?Ot:function(){}};function qt(_t){for(var Ut=0;Ut<nt.length;++Ut){var yt=nt[Ut];yt.buffer===_t&&(x.disableVertexAttribArray(Ut),yt.buffer=null)}}function Yt(){return E.oes_vertex_array_object}function Et(){return E.angle_instanced_arrays}function Gt(_t){return typeof _t=="function"&&_t._vao?_t._vao:null}function V(_t){if(_t!==Tt.currentVAO){var Ut=Yt();_t?Ut.bindVertexArrayOES(_t.vao):Ut.bindVertexArrayOES(null),Tt.currentVAO=_t}}function rt(_t){if(_t!==Tt.currentVAO){if(_t)_t.bindAttrs();else for(var Ut=Et(),yt=0;yt<nt.length;++yt){var Bt=nt[yt];Bt.buffer?(x.enableVertexAttribArray(yt),x.vertexAttribPointer(yt,Bt.size,Bt.type,Bt.normalized,Bt.stride,Bt.offfset),Ut&&Bt.divisor&&Ut.vertexAttribDivisorANGLE(yt,Bt.divisor)):(x.disableVertexAttribArray(yt),x.vertexAttrib4f(yt,Bt.x,Bt.y,Bt.z,Bt.w))}Tt.currentVAO=_t}}function Ot(){na(Pt).forEach(function(_t){_t.destroy()})}function ee(){this.id=++zt,this.attributes=[];var _t=Yt();_t?this.vao=_t.createVertexArrayOES():this.vao=null,Pt[this.id]=this,this.buffers=[]}ee.prototype.bindAttrs=function(){for(var _t=Et(),Ut=this.attributes,yt=0;yt<Ut.length;++yt){var Bt=Ut[yt];Bt.buffer?(x.enableVertexAttribArray(yt),x.bindBuffer(kv,Bt.buffer.buffer),x.vertexAttribPointer(yt,Bt.size,Bt.type,Bt.normalized,Bt.stride,Bt.offset),_t&&Bt.divisor&&_t.vertexAttribDivisorANGLE(yt,Bt.divisor)):(x.disableVertexAttribArray(yt),x.vertexAttrib4f(yt,Bt.x,Bt.y,Bt.z,Bt.w))}for(var Ae=Ut.length;Ae<J;++Ae)x.disableVertexAttribArray(Ae)},ee.prototype.refresh=function(){var _t=Yt();_t&&(_t.bindVertexArrayOES(this.vao),this.bindAttrs(),Tt.currentVAO=this)},ee.prototype.destroy=function(){if(this.vao){var _t=Yt();this===Tt.currentVAO&&(Tt.currentVAO=null,_t.bindVertexArrayOES(null)),_t.deleteVertexArrayOES(this.vao),this.vao=null}Pt[this.id]&&(delete Pt[this.id],et.vaoCount-=1)};function gt(){var _t=Yt();_t&&na(Pt).forEach(function(Ut){Ut.refresh()})}function re(_t){var Ut=new ee;et.vaoCount+=1;function yt(Bt){k(Array.isArray(Bt),"arguments to vertex array constructor must be an array"),k(Bt.length<J,"too many attributes"),k(Bt.length>0,"must specify at least one attribute");var Ae={},Ue=Ut.attributes;Ue.length=Bt.length;for(var Kt=0;Kt<Bt.length;++Kt){var $t=Bt[Kt],mt=Ue[Kt]=new F1,Ge=$t.data||$t;if(Array.isArray(Ge)||t(Ge)||$a(Ge)){var Qe;Ut.buffers[Kt]&&(Qe=Ut.buffers[Kt],t(Ge)&&Qe._buffer.byteLength>=Ge.byteLength?Qe.subdata(Ge):(Qe.destroy(),Ut.buffers[Kt]=null)),Ut.buffers[Kt]||(Qe=Ut.buffers[Kt]=ht.create($t,kv,!1,!0)),mt.buffer=ht.getBuffer(Qe),mt.size=mt.buffer.dimension|0,mt.normalized=!1,mt.type=mt.buffer.dtype,mt.offset=0,mt.stride=0,mt.divisor=0,mt.state=1,Ae[Kt]=1}else ht.getBuffer($t)?(mt.buffer=ht.getBuffer($t),mt.size=mt.buffer.dimension|0,mt.normalized=!1,mt.type=mt.buffer.dtype,mt.offset=0,mt.stride=0,mt.divisor=0,mt.state=1):ht.getBuffer($t.buffer)?(mt.buffer=ht.getBuffer($t.buffer),mt.size=(+$t.size||mt.buffer.dimension)|0,mt.normalized=!!$t.normalized||!1,"type"in $t?(k.parameter($t.type,ks,"invalid buffer type"),mt.type=ks[$t.type]):mt.type=mt.buffer.dtype,mt.offset=($t.offset||0)|0,mt.stride=($t.stride||0)|0,mt.divisor=($t.divisor||0)|0,mt.state=1,k(mt.size>=1&&mt.size<=4,"size must be between 1 and 4"),k(mt.offset>=0,"invalid offset"),k(mt.stride>=0&&mt.stride<=255,"stride must be between 0 and 255"),k(mt.divisor>=0,"divisor must be positive"),k(!mt.divisor||!!E.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in $t?(k(Kt>0,"first attribute must not be a constant"),mt.x=+$t.x||0,mt.y=+$t.y||0,mt.z=+$t.z||0,mt.w=+$t.w||0,mt.state=2):k(!1,"invalid attribute spec for location "+Kt)}for(var fe=0;fe<Ut.buffers.length;++fe)!Ae[fe]&&Ut.buffers[fe]&&(Ut.buffers[fe].destroy(),Ut.buffers[fe]=null);return Ut.refresh(),yt}return yt.destroy=function(){for(var Bt=0;Bt<Ut.buffers.length;++Bt)Ut.buffers[Bt]&&Ut.buffers[Bt].destroy();Ut.buffers.length=0,Ut.destroy()},yt._vao=Ut,yt._reglType="vao",yt(_t)}return Tt}var Sv=35632,Fw=35633,qw=35718,Dw=35721;function Gw(x,E,C,et){var ht={},J={};function nt(V,rt,Ot,ee){this.name=V,this.id=rt,this.location=Ot,this.info=ee}function St(V,rt){for(var Ot=0;Ot<V.length;++Ot)if(V[Ot].id===rt.id){V[Ot].location=rt.location;return}V.push(rt)}function zt(V,rt,Ot){var ee=V===Sv?ht:J,gt=ee[rt];if(!gt){var re=E.str(rt);gt=x.createShader(V),x.shaderSource(gt,re),x.compileShader(gt),k.shaderError(x,gt,re,V,Ot),ee[rt]=gt}return gt}var Pt={},Tt=[],qt=0;function Yt(V,rt){this.id=qt++,this.fragId=V,this.vertId=rt,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,et.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Et(V,rt,Ot){var ee,gt,re=zt(Sv,V.fragId),_t=zt(Fw,V.vertId),Ut=V.program=x.createProgram();if(x.attachShader(Ut,re),x.attachShader(Ut,_t),Ot)for(ee=0;ee<Ot.length;++ee){var yt=Ot[ee];x.bindAttribLocation(Ut,yt[0],yt[1])}x.linkProgram(Ut),k.linkError(x,Ut,E.str(V.fragId),E.str(V.vertId),rt);var Bt=x.getProgramParameter(Ut,qw);et.profile&&(V.stats.uniformsCount=Bt);var Ae=V.uniforms;for(ee=0;ee<Bt;++ee)if(gt=x.getActiveUniform(Ut,ee),gt)if(gt.size>1)for(var Ue=0;Ue<gt.size;++Ue){var Kt=gt.name.replace("[0]","["+Ue+"]");St(Ae,new nt(Kt,E.id(Kt),x.getUniformLocation(Ut,Kt),gt))}else St(Ae,new nt(gt.name,E.id(gt.name),x.getUniformLocation(Ut,gt.name),gt));var $t=x.getProgramParameter(Ut,Dw);et.profile&&(V.stats.attributesCount=$t);var mt=V.attributes;for(ee=0;ee<$t;++ee)gt=x.getActiveAttrib(Ut,ee),gt&&St(mt,new nt(gt.name,E.id(gt.name),x.getAttribLocation(Ut,gt.name),gt))}et.profile&&(C.getMaxUniformsCount=function(){var V=0;return Tt.forEach(function(rt){rt.stats.uniformsCount>V&&(V=rt.stats.uniformsCount)}),V},C.getMaxAttributesCount=function(){var V=0;return Tt.forEach(function(rt){rt.stats.attributesCount>V&&(V=rt.stats.attributesCount)}),V});function Gt(){ht={},J={};for(var V=0;V<Tt.length;++V)Et(Tt[V],null,Tt[V].attributes.map(function(rt){return[rt.location,rt.name]}))}return{clear:function(){var V=x.deleteShader.bind(x);na(ht).forEach(V),ht={},na(J).forEach(V),J={},Tt.forEach(function(rt){x.deleteProgram(rt.program)}),Tt.length=0,Pt={},C.shaderCount=0},program:function(V,rt,Ot,ee){k.command(V>=0,"missing vertex shader",Ot),k.command(rt>=0,"missing fragment shader",Ot);var gt=Pt[rt];gt||(gt=Pt[rt]={});var re=gt[V];if(re&&(re.refCount++,!ee))return re;var _t=new Yt(rt,V);return C.shaderCount++,Et(_t,Ot,ee),re||(gt[V]=_t),Tt.push(_t),e(_t,{destroy:function(){if(_t.refCount--,_t.refCount<=0){x.deleteProgram(_t.program);var Ut=Tt.indexOf(_t);Tt.splice(Ut,1),C.shaderCount--}gt[_t.vertId].refCount<=0&&(x.deleteShader(J[_t.vertId]),delete J[_t.vertId],delete Pt[_t.fragId][_t.vertId]),Object.keys(Pt[_t.fragId]).length||(x.deleteShader(ht[_t.fragId]),delete ht[_t.fragId],delete Pt[_t.fragId])}})},restore:Gt,shader:zt,frag:-1,vert:-1}}var Hw=6408,Uc=5121,Uw=3333,kf=5126;function Bw(x,E,C,et,ht,J,nt){function St(Tt){var qt;E.next===null?(k(ht.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),qt=Uc):(k(E.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),qt=E.next.colorAttachments[0].texture._texture.type,J.oes_texture_float?(k(qt===Uc||qt===kf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),qt===kf&&k(nt.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):k(qt===Uc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Yt=0,Et=0,Gt=et.framebufferWidth,V=et.framebufferHeight,rt=null;t(Tt)?rt=Tt:Tt&&(k.type(Tt,"object","invalid arguments to regl.read()"),Yt=Tt.x|0,Et=Tt.y|0,k(Yt>=0&&Yt<et.framebufferWidth,"invalid x offset for regl.read"),k(Et>=0&&Et<et.framebufferHeight,"invalid y offset for regl.read"),Gt=(Tt.width||et.framebufferWidth-Yt)|0,V=(Tt.height||et.framebufferHeight-Et)|0,rt=Tt.data||null),rt&&(qt===Uc?k(rt instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):qt===kf&&k(rt instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),k(Gt>0&&Gt+Yt<=et.framebufferWidth,"invalid width for read pixels"),k(V>0&&V+Et<=et.framebufferHeight,"invalid height for read pixels"),C();var Ot=Gt*V*4;return rt||(qt===Uc?rt=new Uint8Array(Ot):qt===kf&&(rt=rt||new Float32Array(Ot))),k.isTypedArray(rt,"data buffer for regl.read() must be a typedarray"),k(rt.byteLength>=Ot,"data buffer for regl.read() too small"),x.pixelStorei(Uw,4),x.readPixels(Yt,Et,Gt,V,Hw,qt,rt),rt}function zt(Tt){var qt;return E.setFBO({framebuffer:Tt.framebuffer},function(){qt=St(Tt)}),qt}function Pt(Tt){return!Tt||!("framebuffer"in Tt)?St(Tt):zt(Tt)}return Pt}function ki(x){return Array.prototype.slice.call(x)}function Si(x){return ki(x).join("")}function jw(){var x=0,E=[],C=[];function et(qt){for(var Yt=0;Yt<C.length;++Yt)if(C[Yt]===qt)return E[Yt];var Et="g"+x++;return E.push(Et),C.push(qt),Et}function ht(){var qt=[];function Yt(){qt.push.apply(qt,ki(arguments))}var Et=[];function Gt(){var V="v"+x++;return Et.push(V),arguments.length>0&&(qt.push(V,"="),qt.push.apply(qt,ki(arguments)),qt.push(";")),V}return e(Yt,{def:Gt,toString:function(){return Si([Et.length>0?"var "+Et.join(",")+";":"",Si(qt)])}})}function J(){var qt=ht(),Yt=ht(),Et=qt.toString,Gt=Yt.toString;function V(rt,Ot){Yt(rt,Ot,"=",qt.def(rt,Ot),";")}return e(function(){qt.apply(qt,ki(arguments))},{def:qt.def,entry:qt,exit:Yt,save:V,set:function(rt,Ot,ee){V(rt,Ot),qt(rt,Ot,"=",ee,";")},toString:function(){return Et()+Gt()}})}function nt(){var qt=Si(arguments),Yt=J(),Et=J(),Gt=Yt.toString,V=Et.toString;return e(Yt,{then:function(){return Yt.apply(Yt,ki(arguments)),this},else:function(){return Et.apply(Et,ki(arguments)),this},toString:function(){var rt=V();return rt&&(rt="else{"+rt+"}"),Si(["if(",qt,"){",Gt(),"}",rt])}})}var St=ht(),zt={};function Pt(qt,Yt){var Et=[];function Gt(){var gt="a"+Et.length;return Et.push(gt),gt}Yt=Yt||0;for(var V=0;V<Yt;++V)Gt();var rt=J(),Ot=rt.toString,ee=zt[qt]=e(rt,{arg:Gt,toString:function(){return Si(["function(",Et.join(),"){",Ot(),"}"])}});return ee}function Tt(){var qt=['"use strict";',St,"return {"];Object.keys(zt).forEach(function(Gt){qt.push('"',Gt,'":',zt[Gt].toString(),",")}),qt.push("}");var Yt=Si(qt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Et=Function.apply(null,E.concat(Yt));return Et.apply(null,C)}return{global:St,link:et,block:ht,proc:Pt,scope:J,cond:nt,compile:Tt}}var Ei="xyzw".split(""),Ev=5121,Ai=1,q1=2,D1=0,G1=1,H1=2,U1=3,Sf=4,Av=5,zv=6,Tv="dither",Lv="blend.enable",Nv="blend.color",B1="blend.equation",j1="blend.func",Rv="depth.enable",Cv="depth.func",Ov="depth.range",Pv="depth.mask",W1="colorMask",Iv="cull.enable",$v="cull.face",V1="frontFace",X1="lineWidth",Fv="polygonOffset.enable",Y1="polygonOffset.offset",qv="sample.alpha",Dv="sample.enable",K1="sample.coverage",Gv="stencil.enable",Hv="stencil.mask",Q1="stencil.func",Z1="stencil.opFront",Bc="stencil.opBack",Uv="scissor.enable",Ef="scissor.box",v0="viewport",jc="profile",Ts="framebuffer",Wc="vert",Vc="frag",Ls="elements",Ns="primitive",Rs="count",Af="offset",zf="instances",Xc="vao",J1="Width",tu="Height",zi=Ts+J1,Ti=Ts+tu,Ww=v0+J1,Vw=v0+tu,Bv="drawingBuffer",jv=Bv+J1,Wv=Bv+tu,Xw=[j1,B1,Q1,Z1,Bc,K1,v0,Ef,Y1],Li=34962,Yw=34963,Kw=35632,Qw=35633,Vv=3553,Zw=34067,Jw=2884,t4=3042,e4=3024,o4=2960,n4=2929,r4=3089,a4=32823,s4=32926,i4=32928,eu=5126,Tf=35664,Lf=35665,Nf=35666,ou=5124,Rf=35667,Cf=35668,Of=35669,nu=35670,Pf=35671,If=35672,$f=35673,Yc=35674,Kc=35675,Qc=35676,Zc=35678,Jc=35680,Xv=4,tl=1028,Cs=1029,Yv=2304,ru=2305,c4=32775,l4=32776,f4=519,I0=7680,Kv=0,Qv=1,Zv=32774,h4=513,Jv=36160,u4=36064,e0={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},tm=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Ni={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},$0={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},em={frag:Kw,vert:Qw},au={cw:Yv,ccw:ru};function Ff(x){return Array.isArray(x)||t(x)||$a(x)}function om(x){return x.sort(function(E,C){return E===v0?-1:C===v0?1:E<C?-1:1})}function Lr(x,E,C,et){this.thisDep=x,this.contextDep=E,this.propDep=C,this.append=et}function F0(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function Sn(x){return new Lr(!1,!1,!1,x)}function Wr(x,E){var C=x.type;if(C===D1){var et=x.data.length;return new Lr(!0,et>=1,et>=2,E)}else if(C===Sf){var ht=x.data;return new Lr(ht.thisDep,ht.contextDep,ht.propDep,E)}else{if(C===Av)return new Lr(!1,!1,!1,E);if(C===zv){for(var J=!1,nt=!1,St=!1,zt=0;zt<x.data.length;++zt){var Pt=x.data[zt];if(Pt.type===G1)St=!0;else if(Pt.type===H1)nt=!0;else if(Pt.type===U1)J=!0;else if(Pt.type===D1){J=!0;var Tt=Pt.data;Tt>=1&&(nt=!0),Tt>=2&&(St=!0)}else Pt.type===Sf&&(J=J||Pt.data.thisDep,nt=nt||Pt.data.contextDep,St=St||Pt.data.propDep)}return new Lr(J,nt,St,E)}else return new Lr(C===U1,C===H1,C===G1,E)}}var nm=new Lr(!1,!1,!1,function(){});function d4(x,E,C,et,ht,J,nt,St,zt,Pt,Tt,qt,Yt,Et,Gt){var V=Pt.Record,rt={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(rt.min=c4,rt.max=l4);var Ot=C.angle_instanced_arrays,ee=C.webgl_draw_buffers,gt={dirty:!0,profile:Gt.profile},re={},_t=[],Ut={},yt={};function Bt(T){return T.replace(".","_")}function Ae(T,S,$){var j=Bt(T);_t.push(T),re[j]=gt[j]=!!$,Ut[j]=S}function Ue(T,S,$){var j=Bt(T);_t.push(T),Array.isArray($)?(gt[j]=$.slice(),re[j]=$.slice()):gt[j]=re[j]=$,yt[j]=S}Ae(Tv,e4),Ae(Lv,t4),Ue(Nv,"blendColor",[0,0,0,0]),Ue(B1,"blendEquationSeparate",[Zv,Zv]),Ue(j1,"blendFuncSeparate",[Qv,Kv,Qv,Kv]),Ae(Rv,n4,!0),Ue(Cv,"depthFunc",h4),Ue(Ov,"depthRange",[0,1]),Ue(Pv,"depthMask",!0),Ue(W1,W1,[!0,!0,!0,!0]),Ae(Iv,Jw),Ue($v,"cullFace",Cs),Ue(V1,V1,ru),Ue(X1,X1,1),Ae(Fv,a4),Ue(Y1,"polygonOffset",[0,0]),Ae(qv,s4),Ae(Dv,i4),Ue(K1,"sampleCoverage",[1,!1]),Ae(Gv,o4),Ue(Hv,"stencilMask",-1),Ue(Q1,"stencilFunc",[f4,0,-1]),Ue(Z1,"stencilOpSeparate",[tl,I0,I0,I0]),Ue(Bc,"stencilOpSeparate",[Cs,I0,I0,I0]),Ae(Uv,r4),Ue(Ef,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Ue(v0,v0,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Kt={gl:x,context:Yt,strings:E,next:re,current:gt,draw:qt,elements:J,buffer:ht,shader:Tt,attributes:Pt.state,vao:Pt,uniforms:zt,framebuffer:St,extensions:C,timer:Et,isBufferArgs:Ff},$t={primTypes:mi,compareFuncs:Ni,blendFuncs:e0,blendEquations:rt,stencilOps:$0,glTypes:ks,orientationType:au};k.optional(function(){Kt.isArrayLike=yn}),ee&&($t.backBuffer=[Cs],$t.drawBuffer=ro(et.maxDrawbuffers,function(T){return T===0?[0]:ro(T,function(S){return u4+S})}));var mt=0;function Ge(){var T=jw(),S=T.link,$=T.global;T.id=mt++,T.batchId="0";var j=S(Kt),X=T.shared={props:"a0"};Object.keys(Kt).forEach(function(P){X[P]=$.def(j,".",P)}),k.optional(function(){T.CHECK=S(k),T.commandStr=k.guessCommand(),T.command=S(T.commandStr),T.assert=function(P,A,U){P("if(!(",A,"))",this.CHECK,".commandRaise(",S(U),",",this.command,");")},$t.invalidBlendCombinations=tm});var q=T.next={},F=T.current={};Object.keys(yt).forEach(function(P){Array.isArray(gt[P])&&(q[P]=$.def(X.next,".",P),F[P]=$.def(X.current,".",P))});var G=T.constants={};Object.keys($t).forEach(function(P){G[P]=$.def(JSON.stringify($t[P]))}),T.invoke=function(P,A){switch(A.type){case D1:var U=["this",X.context,X.props,T.batchId];return P.def(S(A.data),".call(",U.slice(0,Math.max(A.data.length+1,4)),")");case G1:return P.def(X.props,A.data);case H1:return P.def(X.context,A.data);case U1:return P.def("this",A.data);case Sf:return A.data.append(T,P),A.data.ref;case Av:return A.data.toString();case zv:return A.data.map(function(Y){return T.invoke(P,Y)})}},T.attribCache={};var L={};return T.scopeAttrib=function(P){var A=E.id(P);if(A in L)return L[A];var U=Pt.scope[A];U||(U=Pt.scope[A]=new V);var Y=L[A]=S(U);return Y},T}function Qe(T){var S=T.static,$=T.dynamic,j;if(jc in S){var X=!!S[jc];j=Sn(function(F,G){return X}),j.enable=X}else if(jc in $){var q=$[jc];j=Wr(q,function(F,G){return F.invoke(G,q)})}return j}function fe(T,S){var $=T.static,j=T.dynamic;if(Ts in $){var X=$[Ts];return X?(X=St.getFramebuffer(X),k.command(X,"invalid framebuffer object"),Sn(function(F,G){var L=F.link(X),P=F.shared;G.set(P.framebuffer,".next",L);var A=P.context;return G.set(A,"."+zi,L+".width"),G.set(A,"."+Ti,L+".height"),L})):Sn(function(F,G){var L=F.shared;G.set(L.framebuffer,".next","null");var P=L.context;return G.set(P,"."+zi,P+"."+jv),G.set(P,"."+Ti,P+"."+Wv),"null"})}else if(Ts in j){var q=j[Ts];return Wr(q,function(F,G){var L=F.invoke(G,q),P=F.shared,A=P.framebuffer,U=G.def(A,".getFramebuffer(",L,")");k.optional(function(){F.assert(G,"!"+L+"||"+U,"invalid framebuffer object")}),G.set(A,".next",U);var Y=P.context;return G.set(Y,"."+zi,U+"?"+U+".width:"+Y+"."+jv),G.set(Y,"."+Ti,U+"?"+U+".height:"+Y+"."+Wv),U})}else return null}function io(T,S,$){var j=T.static,X=T.dynamic;function q(L){if(L in j){var P=j[L];k.commandType(P,"object","invalid "+L,$.commandStr);var A=!0,U=P.x|0,Y=P.y|0,lt,ut;return"width"in P?(lt=P.width|0,k.command(lt>=0,"invalid "+L,$.commandStr)):A=!1,"height"in P?(ut=P.height|0,k.command(ut>=0,"invalid "+L,$.commandStr)):A=!1,new Lr(!A&&S&&S.thisDep,!A&&S&&S.contextDep,!A&&S&&S.propDep,function(be,Je){var he=be.shared.context,Oe=lt;"width"in P||(Oe=Je.def(he,".",zi,"-",U));var Ve=ut;return"height"in P||(Ve=Je.def(he,".",Ti,"-",Y)),[U,Y,Oe,Ve]})}else if(L in X){var at=X[L],Nt=Wr(at,function(be,Je){var he=be.invoke(Je,at);k.optional(function(){be.assert(Je,he+"&&typeof "+he+'==="object"',"invalid "+L)});var Oe=be.shared.context,Ve=Je.def(he,".x|0"),zo=Je.def(he,".y|0"),dn=Je.def('"width" in ',he,"?",he,".width|0:","(",Oe,".",zi,"-",Ve,")"),Nr=Je.def('"height" in ',he,"?",he,".height|0:","(",Oe,".",Ti,"-",zo,")");return k.optional(function(){be.assert(Je,dn+">=0&&"+Nr+">=0","invalid "+L)}),[Ve,zo,dn,Nr]});return S&&(Nt.thisDep=Nt.thisDep||S.thisDep,Nt.contextDep=Nt.contextDep||S.contextDep,Nt.propDep=Nt.propDep||S.propDep),Nt}else return S?new Lr(S.thisDep,S.contextDep,S.propDep,function(be,Je){var he=be.shared.context;return[0,0,Je.def(he,".",zi),Je.def(he,".",Ti)]}):null}var F=q(v0);if(F){var G=F;F=new Lr(F.thisDep,F.contextDep,F.propDep,function(L,P){var A=G.append(L,P),U=L.shared.context;return P.set(U,"."+Ww,A[2]),P.set(U,"."+Vw,A[3]),A})}return{viewport:F,scissor_box:q(Ef)}}function We(T,S){var $=T.static,j=typeof $[Vc]=="string"&&typeof $[Wc]=="string";if(j){if(Object.keys(S.dynamic).length>0)return null;var X=S.static,q=Object.keys(X);if(q.length>0&&typeof X[q[0]]=="number"){for(var F=[],G=0;G<q.length;++G)k(typeof X[q[G]]=="number","must specify all vertex attribute locations when using vaos"),F.push([X[q[G]]|0,q[G]]);return F}}return null}function oo(T,S,$){var j=T.static,X=T.dynamic;function q(A){if(A in j){var U=E.id(j[A]);k.optional(function(){Tt.shader(em[A],U,k.guessCommand())});var Y=Sn(function(){return U});return Y.id=U,Y}else if(A in X){var lt=X[A];return Wr(lt,function(ut,at){var Nt=ut.invoke(at,lt),be=at.def(ut.shared.strings,".id(",Nt,")");return k.optional(function(){at(ut.shared.shader,".shader(",em[A],",",be,",",ut.command,");")}),be})}return null}var F=q(Vc),G=q(Wc),L=null,P;return F0(F)&&F0(G)?(L=Tt.program(G.id,F.id,null,$),P=Sn(function(A,U){return A.link(L)})):P=new Lr(F&&F.thisDep||G&&G.thisDep,F&&F.contextDep||G&&G.contextDep,F&&F.propDep||G&&G.propDep,function(A,U){var Y=A.shared.shader,lt;F?lt=F.append(A,U):lt=U.def(Y,".",Vc);var ut;G?ut=G.append(A,U):ut=U.def(Y,".",Wc);var at=Y+".program("+ut+","+lt;return k.optional(function(){at+=","+A.command}),U.def(at+")")}),{frag:F,vert:G,progVar:P,program:L}}function Ao(T,S){var $=T.static,j=T.dynamic;function X(){if(Ls in $){var A=$[Ls];Ff(A)?A=J.getElements(J.create(A,!0)):A&&(A=J.getElements(A),k.command(A,"invalid elements",S.commandStr));var U=Sn(function(lt,ut){if(A){var at=lt.link(A);return lt.ELEMENTS=at,at}return lt.ELEMENTS=null,null});return U.value=A,U}else if(Ls in j){var Y=j[Ls];return Wr(Y,function(lt,ut){var at=lt.shared,Nt=at.isBufferArgs,be=at.elements,Je=lt.invoke(ut,Y),he=ut.def("null"),Oe=ut.def(Nt,"(",Je,")"),Ve=lt.cond(Oe).then(he,"=",be,".createStream(",Je,");").else(he,"=",be,".getElements(",Je,");");return k.optional(function(){lt.assert(Ve.else,"!"+Je+"||"+he,"invalid elements")}),ut.entry(Ve),ut.exit(lt.cond(Oe).then(be,".destroyStream(",he,");")),lt.ELEMENTS=he,he})}return null}var q=X();function F(){if(Ns in $){var A=$[Ns];return k.commandParameter(A,mi,"invalid primitve",S.commandStr),Sn(function(Y,lt){return mi[A]})}else if(Ns in j){var U=j[Ns];return Wr(U,function(Y,lt){var ut=Y.constants.primTypes,at=Y.invoke(lt,U);return k.optional(function(){Y.assert(lt,at+" in "+ut,"invalid primitive, must be one of "+Object.keys(mi))}),lt.def(ut,"[",at,"]")})}else if(q)return F0(q)?q.value?Sn(function(Y,lt){return lt.def(Y.ELEMENTS,".primType")}):Sn(function(){return Xv}):new Lr(q.thisDep,q.contextDep,q.propDep,function(Y,lt){var ut=Y.ELEMENTS;return lt.def(ut,"?",ut,".primType:",Xv)});return null}function G(A,U){if(A in $){var Y=$[A]|0;return k.command(!U||Y>=0,"invalid "+A,S.commandStr),Sn(function(ut,at){return U&&(ut.OFFSET=Y),Y})}else if(A in j){var lt=j[A];return Wr(lt,function(ut,at){var Nt=ut.invoke(at,lt);return U&&(ut.OFFSET=Nt,k.optional(function(){ut.assert(at,Nt+">=0","invalid "+A)})),Nt})}else if(U&&q)return Sn(function(ut,at){return ut.OFFSET="0",0});return null}var L=G(Af,!0);function P(){if(Rs in $){var A=$[Rs]|0;return k.command(typeof A=="number"&&A>=0,"invalid vertex count",S.commandStr),Sn(function(){return A})}else if(Rs in j){var U=j[Rs];return Wr(U,function(ut,at){var Nt=ut.invoke(at,U);return k.optional(function(){ut.assert(at,"typeof "+Nt+'==="number"&&'+Nt+">=0&&"+Nt+"===("+Nt+"|0)","invalid vertex count")}),Nt})}else if(q)if(F0(q)){if(q)return L?new Lr(L.thisDep,L.contextDep,L.propDep,function(ut,at){var Nt=at.def(ut.ELEMENTS,".vertCount-",ut.OFFSET);return k.optional(function(){ut.assert(at,Nt+">=0","invalid vertex offset/element buffer too small")}),Nt}):Sn(function(ut,at){return at.def(ut.ELEMENTS,".vertCount")});var Y=Sn(function(){return-1});return k.optional(function(){Y.MISSING=!0}),Y}else{var lt=new Lr(q.thisDep||L.thisDep,q.contextDep||L.contextDep,q.propDep||L.propDep,function(ut,at){var Nt=ut.ELEMENTS;return ut.OFFSET?at.def(Nt,"?",Nt,".vertCount-",ut.OFFSET,":-1"):at.def(Nt,"?",Nt,".vertCount:-1")});return k.optional(function(){lt.DYNAMIC=!0}),lt}return null}return{elements:q,primitive:F(),count:P(),instances:G(zf,!1),offset:L}}function En(T,S){var $=T.static,j=T.dynamic,X={};return _t.forEach(function(q){var F=Bt(q);function G(L,P){if(q in $){var A=L($[q]);X[F]=Sn(function(){return A})}else if(q in j){var U=j[q];X[F]=Wr(U,function(Y,lt){return P(Y,lt,Y.invoke(lt,U))})}}switch(q){case Iv:case Lv:case Tv:case Gv:case Rv:case Uv:case Fv:case qv:case Dv:case Pv:return G(function(L){return k.commandType(L,"boolean",q,S.commandStr),L},function(L,P,A){return k.optional(function(){L.assert(P,"typeof "+A+'==="boolean"',"invalid flag "+q,L.commandStr)}),A});case Cv:return G(function(L){return k.commandParameter(L,Ni,"invalid "+q,S.commandStr),Ni[L]},function(L,P,A){var U=L.constants.compareFuncs;return k.optional(function(){L.assert(P,A+" in "+U,"invalid "+q+", must be one of "+Object.keys(Ni))}),P.def(U,"[",A,"]")});case Ov:return G(function(L){return k.command(yn(L)&&L.length===2&&typeof L[0]=="number"&&typeof L[1]=="number"&&L[0]<=L[1],"depth range is 2d array",S.commandStr),L},function(L,P,A){k.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===2&&typeof "+A+'[0]==="number"&&typeof '+A+'[1]==="number"&&'+A+"[0]<="+A+"[1]","depth range must be a 2d array")});var U=P.def("+",A,"[0]"),Y=P.def("+",A,"[1]");return[U,Y]});case j1:return G(function(L){k.commandType(L,"object","blend.func",S.commandStr);var P="srcRGB"in L?L.srcRGB:L.src,A="srcAlpha"in L?L.srcAlpha:L.src,U="dstRGB"in L?L.dstRGB:L.dst,Y="dstAlpha"in L?L.dstAlpha:L.dst;return k.commandParameter(P,e0,F+".srcRGB",S.commandStr),k.commandParameter(A,e0,F+".srcAlpha",S.commandStr),k.commandParameter(U,e0,F+".dstRGB",S.commandStr),k.commandParameter(Y,e0,F+".dstAlpha",S.commandStr),k.command(tm.indexOf(P+", "+U)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+P+", "+U+")",S.commandStr),[e0[P],e0[U],e0[A],e0[Y]]},function(L,P,A){var U=L.constants.blendFuncs;k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid blend func, must be an object")});function Y(he,Oe){var Ve=P.def('"',he,Oe,'" in ',A,"?",A,".",he,Oe,":",A,".",he);return k.optional(function(){L.assert(P,Ve+" in "+U,"invalid "+q+"."+he+Oe+", must be one of "+Object.keys(e0))}),Ve}var lt=Y("src","RGB"),ut=Y("dst","RGB");k.optional(function(){var he=L.constants.invalidBlendCombinations;L.assert(P,he+".indexOf("+lt+'+", "+'+ut+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var at=P.def(U,"[",lt,"]"),Nt=P.def(U,"[",Y("src","Alpha"),"]"),be=P.def(U,"[",ut,"]"),Je=P.def(U,"[",Y("dst","Alpha"),"]");return[at,be,Nt,Je]});case B1:return G(function(L){if(typeof L=="string")return k.commandParameter(L,rt,"invalid "+q,S.commandStr),[rt[L],rt[L]];if(typeof L=="object")return k.commandParameter(L.rgb,rt,q+".rgb",S.commandStr),k.commandParameter(L.alpha,rt,q+".alpha",S.commandStr),[rt[L.rgb],rt[L.alpha]];k.commandRaise("invalid blend.equation",S.commandStr)},function(L,P,A){var U=L.constants.blendEquations,Y=P.def(),lt=P.def(),ut=L.cond("typeof ",A,'==="string"');return k.optional(function(){function at(Nt,be,Je){L.assert(Nt,Je+" in "+U,"invalid "+be+", must be one of "+Object.keys(rt))}at(ut.then,q,A),L.assert(ut.else,A+"&&typeof "+A+'==="object"',"invalid "+q),at(ut.else,q+".rgb",A+".rgb"),at(ut.else,q+".alpha",A+".alpha")}),ut.then(Y,"=",lt,"=",U,"[",A,"];"),ut.else(Y,"=",U,"[",A,".rgb];",lt,"=",U,"[",A,".alpha];"),P(ut),[Y,lt]});case Nv:return G(function(L){return k.command(yn(L)&&L.length===4,"blend.color must be a 4d array",S.commandStr),ro(4,function(P){return+L[P]})},function(L,P,A){return k.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","blend.color must be a 4d array")}),ro(4,function(U){return P.def("+",A,"[",U,"]")})});case Hv:return G(function(L){return k.commandType(L,"number",F,S.commandStr),L|0},function(L,P,A){return k.optional(function(){L.assert(P,"typeof "+A+'==="number"',"invalid stencil.mask")}),P.def(A,"|0")});case Q1:return G(function(L){k.commandType(L,"object",F,S.commandStr);var P=L.cmp||"keep",A=L.ref||0,U="mask"in L?L.mask:-1;return k.commandParameter(P,Ni,q+".cmp",S.commandStr),k.commandType(A,"number",q+".ref",S.commandStr),k.commandType(U,"number",q+".mask",S.commandStr),[Ni[P],A,U]},function(L,P,A){var U=L.constants.compareFuncs;k.optional(function(){function at(){L.assert(P,Array.prototype.join.call(arguments,""),"invalid stencil.func")}at(A+"&&typeof ",A,'==="object"'),at('!("cmp" in ',A,")||(",A,".cmp in ",U,")")});var Y=P.def('"cmp" in ',A,"?",U,"[",A,".cmp]",":",I0),lt=P.def(A,".ref|0"),ut=P.def('"mask" in ',A,"?",A,".mask|0:-1");return[Y,lt,ut]});case Z1:case Bc:return G(function(L){k.commandType(L,"object",F,S.commandStr);var P=L.fail||"keep",A=L.zfail||"keep",U=L.zpass||"keep";return k.commandParameter(P,$0,q+".fail",S.commandStr),k.commandParameter(A,$0,q+".zfail",S.commandStr),k.commandParameter(U,$0,q+".zpass",S.commandStr),[q===Bc?Cs:tl,$0[P],$0[A],$0[U]]},function(L,P,A){var U=L.constants.stencilOps;k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+q)});function Y(lt){return k.optional(function(){L.assert(P,'!("'+lt+'" in '+A+")||("+A+"."+lt+" in "+U+")","invalid "+q+"."+lt+", must be one of "+Object.keys($0))}),P.def('"',lt,'" in ',A,"?",U,"[",A,".",lt,"]:",I0)}return[q===Bc?Cs:tl,Y("fail"),Y("zfail"),Y("zpass")]});case Y1:return G(function(L){k.commandType(L,"object",F,S.commandStr);var P=L.factor|0,A=L.units|0;return k.commandType(P,"number",F+".factor",S.commandStr),k.commandType(A,"number",F+".units",S.commandStr),[P,A]},function(L,P,A){k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+q)});var U=P.def(A,".factor|0"),Y=P.def(A,".units|0");return[U,Y]});case $v:return G(function(L){var P=0;return L==="front"?P=tl:L==="back"&&(P=Cs),k.command(!!P,F,S.commandStr),P},function(L,P,A){return k.optional(function(){L.assert(P,A+'==="front"||'+A+'==="back"',"invalid cull.face")}),P.def(A,'==="front"?',tl,":",Cs)});case X1:return G(function(L){return k.command(typeof L=="number"&&L>=et.lineWidthDims[0]&&L<=et.lineWidthDims[1],"invalid line width, must be a positive number between "+et.lineWidthDims[0]+" and "+et.lineWidthDims[1],S.commandStr),L},function(L,P,A){return k.optional(function(){L.assert(P,"typeof "+A+'==="number"&&'+A+">="+et.lineWidthDims[0]+"&&"+A+"<="+et.lineWidthDims[1],"invalid line width")}),A});case V1:return G(function(L){return k.commandParameter(L,au,F,S.commandStr),au[L]},function(L,P,A){return k.optional(function(){L.assert(P,A+'==="cw"||'+A+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),P.def(A+'==="cw"?'+Yv+":"+ru)});case W1:return G(function(L){return k.command(yn(L)&&L.length===4,"color.mask must be length 4 array",S.commandStr),L.map(function(P){return!!P})},function(L,P,A){return k.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","invalid color.mask")}),ro(4,function(U){return"!!"+A+"["+U+"]"})});case K1:return G(function(L){k.command(typeof L=="object"&&L,F,S.commandStr);var P="value"in L?L.value:1,A=!!L.invert;return k.command(typeof P=="number"&&P>=0&&P<=1,"sample.coverage.value must be a number between 0 and 1",S.commandStr),[P,A]},function(L,P,A){k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid sample.coverage")});var U=P.def('"value" in ',A,"?+",A,".value:1"),Y=P.def("!!",A,".invert");return[U,Y]})}}),X}function Un(T,S){var $=T.static,j=T.dynamic,X={};return Object.keys($).forEach(function(q){var F=$[q],G;if(typeof F=="number"||typeof F=="boolean")G=Sn(function(){return F});else if(typeof F=="function"){var L=F._reglType;L==="texture2d"||L==="textureCube"?G=Sn(function(P){return P.link(F)}):L==="framebuffer"||L==="framebufferCube"?(k.command(F.color.length>0,'missing color attachment for framebuffer sent to uniform "'+q+'"',S.commandStr),G=Sn(function(P){return P.link(F.color[0])})):k.commandRaise('invalid data for uniform "'+q+'"',S.commandStr)}else yn(F)?G=Sn(function(P){var A=P.global.def("[",ro(F.length,function(U){return k.command(typeof F[U]=="number"||typeof F[U]=="boolean","invalid uniform "+q,P.commandStr),F[U]}),"]");return A}):k.commandRaise('invalid or missing data for uniform "'+q+'"',S.commandStr);G.value=F,X[q]=G}),Object.keys(j).forEach(function(q){var F=j[q];X[q]=Wr(F,function(G,L){return G.invoke(L,F)})}),X}function po(T,S){var $=T.static,j=T.dynamic,X={};return Object.keys($).forEach(function(q){var F=$[q],G=E.id(q),L=new V;if(Ff(F))L.state=Ai,L.buffer=ht.getBuffer(ht.create(F,Li,!1,!0)),L.type=0;else{var P=ht.getBuffer(F);if(P)L.state=Ai,L.buffer=P,L.type=0;else if(k.command(typeof F=="object"&&F,"invalid data for attribute "+q,S.commandStr),"constant"in F){var A=F.constant;L.buffer="null",L.state=q1,typeof A=="number"?L.x=A:(k.command(yn(A)&&A.length>0&&A.length<=4,"invalid constant for attribute "+q,S.commandStr),Ei.forEach(function(be,Je){Je<A.length&&(L[be]=A[Je])}))}else{Ff(F.buffer)?P=ht.getBuffer(ht.create(F.buffer,Li,!1,!0)):P=ht.getBuffer(F.buffer),k.command(!!P,'missing buffer for attribute "'+q+'"',S.commandStr);var U=F.offset|0;k.command(U>=0,'invalid offset for attribute "'+q+'"',S.commandStr);var Y=F.stride|0;k.command(Y>=0&&Y<256,'invalid stride for attribute "'+q+'", must be integer betweeen [0, 255]',S.commandStr);var lt=F.size|0;k.command(!("size"in F)||lt>0&&lt<=4,'invalid size for attribute "'+q+'", must be 1,2,3,4',S.commandStr);var ut=!!F.normalized,at=0;"type"in F&&(k.commandParameter(F.type,ks,"invalid type for attribute "+q,S.commandStr),at=ks[F.type]);var Nt=F.divisor|0;"divisor"in F&&(k.command(Nt===0||Ot,'cannot specify divisor for attribute "'+q+'", instancing not supported',S.commandStr),k.command(Nt>=0,'invalid divisor for attribute "'+q+'"',S.commandStr)),k.optional(function(){var be=S.commandStr,Je=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(F).forEach(function(he){k.command(Je.indexOf(he)>=0,'unknown parameter "'+he+'" for attribute pointer "'+q+'" (valid parameters are '+Je+")",be)})}),L.buffer=P,L.state=Ai,L.size=lt,L.normalized=ut,L.type=at||P.dtype,L.offset=U,L.stride=Y,L.divisor=Nt}}X[q]=Sn(function(be,Je){var he=be.attribCache;if(G in he)return he[G];var Oe={isStream:!1};return Object.keys(L).forEach(function(Ve){Oe[Ve]=L[Ve]}),L.buffer&&(Oe.buffer=be.link(L.buffer),Oe.type=Oe.type||Oe.buffer+".dtype"),he[G]=Oe,Oe})}),Object.keys(j).forEach(function(q){var F=j[q];function G(L,P){var A=L.invoke(P,F),U=L.shared,Y=L.constants,lt=U.isBufferArgs,ut=U.buffer;k.optional(function(){L.assert(P,A+"&&(typeof "+A+'==="object"||typeof '+A+'==="function")&&('+lt+"("+A+")||"+ut+".getBuffer("+A+")||"+ut+".getBuffer("+A+".buffer)||"+lt+"("+A+'.buffer)||("constant" in '+A+"&&(typeof "+A+'.constant==="number"||'+U.isArrayLike+"("+A+".constant))))",'invalid dynamic attribute "'+q+'"')});var at={isStream:P.def(!1)},Nt=new V;Nt.state=Ai,Object.keys(Nt).forEach(function(Oe){at[Oe]=P.def(""+Nt[Oe])});var be=at.buffer,Je=at.type;P("if(",lt,"(",A,")){",at.isStream,"=true;",be,"=",ut,".createStream(",Li,",",A,");",Je,"=",be,".dtype;","}else{",be,"=",ut,".getBuffer(",A,");","if(",be,"){",Je,"=",be,".dtype;",'}else if("constant" in ',A,"){",at.state,"=",q1,";","if(typeof "+A+'.constant === "number"){',at[Ei[0]],"=",A,".constant;",Ei.slice(1).map(function(Oe){return at[Oe]}).join("="),"=0;","}else{",Ei.map(function(Oe,Ve){return at[Oe]+"="+A+".constant.length>"+Ve+"?"+A+".constant["+Ve+"]:0;"}).join(""),"}}else{","if(",lt,"(",A,".buffer)){",be,"=",ut,".createStream(",Li,",",A,".buffer);","}else{",be,"=",ut,".getBuffer(",A,".buffer);","}",Je,'="type" in ',A,"?",Y.glTypes,"[",A,".type]:",be,".dtype;",at.normalized,"=!!",A,".normalized;");function he(Oe){P(at[Oe],"=",A,".",Oe,"|0;")}return he("size"),he("offset"),he("stride"),he("divisor"),P("}}"),P.exit("if(",at.isStream,"){",ut,".destroyStream(",be,");","}"),at}X[q]=Wr(F,G)}),X}function Cn(T,S){var $=T.static,j=T.dynamic;if(Xc in $){var X=$[Xc];return X!==null&&Pt.getVAO(X)===null&&(X=Pt.createVAO(X)),Sn(function(F){return F.link(Pt.getVAO(X))})}else if(Xc in j){var q=j[Xc];return Wr(q,function(F,G){var L=F.invoke(G,q);return G.def(F.shared.vao+".getVAO("+L+")")})}return null}function Qo(T){var S=T.static,$=T.dynamic,j={};return Object.keys(S).forEach(function(X){var q=S[X];j[X]=Sn(function(F,G){return typeof q=="number"||typeof q=="boolean"?""+q:F.link(q)})}),Object.keys($).forEach(function(X){var q=$[X];j[X]=Wr(q,function(F,G){return F.invoke(G,q)})}),j}function An(T,S,$,j,X){var q=T.static,F=T.dynamic;k.optional(function(){var he=[Ts,Wc,Vc,Ls,Ns,Af,Rs,zf,jc,Xc].concat(_t);function Oe(Ve){Object.keys(Ve).forEach(function(zo){k.command(he.indexOf(zo)>=0,'unknown parameter "'+zo+'"',X.commandStr)})}Oe(q),Oe(F)});var G=We(T,S),L=fe(T,X),P=io(T,L,X),A=Ao(T,X),U=En(T,X),Y=oo(T,X,G);function lt(he){var Oe=P[he];Oe&&(U[he]=Oe)}lt(v0),lt(Bt(Ef));var ut=Object.keys(U).length>0,at={framebuffer:L,draw:A,shader:Y,state:U,dirty:ut,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(at.profile=Qe(T,X),at.uniforms=Un($,X),at.drawVAO=at.scopeVAO=Cn(T,X),!at.drawVAO&&Y.program&&!G&&C.angle_instanced_arrays){var Nt=!0,be=Y.program.attributes.map(function(he){var Oe=S.static[he];return Nt=Nt&&!!Oe,Oe});if(Nt&&be.length>0){var Je=Pt.getVAO(Pt.createVAO(be));at.drawVAO=new Lr(null,null,null,function(he,Oe){return he.link(Je)}),at.useVAO=!0}}return G?at.useVAO=!0:at.attributes=po(S,X),at.context=Qo(j,X),at}function On(T,S,$){var j=T.shared,X=j.context,q=T.scope();Object.keys($).forEach(function(F){S.save(X,"."+F);var G=$[F],L=G.append(T,S);Array.isArray(L)?q(X,".",F,"=[",L.join(),"];"):q(X,".",F,"=",L,";")}),S(q)}function Pn(T,S,$,j){var X=T.shared,q=X.gl,F=X.framebuffer,G;ee&&(G=S.def(X.extensions,".webgl_draw_buffers"));var L=T.constants,P=L.drawBuffer,A=L.backBuffer,U;$?U=$.append(T,S):U=S.def(F,".next"),j||S("if(",U,"!==",F,".cur){"),S("if(",U,"){",q,".bindFramebuffer(",Jv,",",U,".framebuffer);"),ee&&S(G,".drawBuffersWEBGL(",P,"[",U,".colorAttachments.length]);"),S("}else{",q,".bindFramebuffer(",Jv,",null);"),ee&&S(G,".drawBuffersWEBGL(",A,");"),S("}",F,".cur=",U,";"),j||S("}")}function Jn(T,S,$){var j=T.shared,X=j.gl,q=T.current,F=T.next,G=j.current,L=j.next,P=T.cond(G,".dirty");_t.forEach(function(A){var U=Bt(A);if(!(U in $.state)){var Y,lt;if(U in F){Y=F[U],lt=q[U];var ut=ro(gt[U].length,function(Nt){return P.def(Y,"[",Nt,"]")});P(T.cond(ut.map(function(Nt,be){return Nt+"!=="+lt+"["+be+"]"}).join("||")).then(X,".",yt[U],"(",ut,");",ut.map(function(Nt,be){return lt+"["+be+"]="+Nt}).join(";"),";"))}else{Y=P.def(L,".",U);var at=T.cond(Y,"!==",G,".",U);P(at),U in Ut?at(T.cond(Y).then(X,".enable(",Ut[U],");").else(X,".disable(",Ut[U],");"),G,".",U,"=",Y,";"):at(X,".",yt[U],"(",Y,");",G,".",U,"=",Y,";")}}}),Object.keys($.state).length===0&&P(G,".dirty=false;"),S(P)}function fr(T,S,$,j){var X=T.shared,q=T.current,F=X.current,G=X.gl;om(Object.keys($)).forEach(function(L){var P=$[L];if(!(j&&!j(P))){var A=P.append(T,S);if(Ut[L]){var U=Ut[L];F0(P)?A?S(G,".enable(",U,");"):S(G,".disable(",U,");"):S(T.cond(A).then(G,".enable(",U,");").else(G,".disable(",U,");")),S(F,".",L,"=",A,";")}else if(yn(A)){var Y=q[L];S(G,".",yt[L],"(",A,");",A.map(function(lt,ut){return Y+"["+ut+"]="+lt}).join(";"),";")}else S(G,".",yt[L],"(",A,");",F,".",L,"=",A,";")}})}function bn(T,S){Ot&&(T.instancing=S.def(T.shared.extensions,".angle_instanced_arrays"))}function Ze(T,S,$,j,X){var q=T.shared,F=T.stats,G=q.current,L=q.timer,P=$.profile;function A(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var U,Y;function lt(he){U=S.def(),he(U,"=",A(),";"),typeof X=="string"?he(F,".count+=",X,";"):he(F,".count++;"),Et&&(j?(Y=S.def(),he(Y,"=",L,".getNumPendingQueries();")):he(L,".beginQuery(",F,");"))}function ut(he){he(F,".cpuTime+=",A(),"-",U,";"),Et&&(j?he(L,".pushScopeStats(",Y,",",L,".getNumPendingQueries(),",F,");"):he(L,".endQuery();"))}function at(he){var Oe=S.def(G,".profile");S(G,".profile=",he,";"),S.exit(G,".profile=",Oe,";")}var Nt;if(P){if(F0(P)){P.enable?(lt(S),ut(S.exit),at("true")):at("false");return}Nt=P.append(T,S),at(Nt)}else Nt=S.def(G,".profile");var be=T.block();lt(be),S("if(",Nt,"){",be,"}");var Je=T.block();ut(Je),S.exit("if(",Nt,"){",Je,"}")}function hr(T,S,$,j,X){var q=T.shared;function F(L){switch(L){case Tf:case Rf:case Pf:return 2;case Lf:case Cf:case If:return 3;case Nf:case Of:case $f:return 4;default:return 1}}function G(L,P,A){var U=q.gl,Y=S.def(L,".location"),lt=S.def(q.attributes,"[",Y,"]"),ut=A.state,at=A.buffer,Nt=[A.x,A.y,A.z,A.w],be=["buffer","normalized","offset","stride"];function Je(){S("if(!",lt,".buffer){",U,".enableVertexAttribArray(",Y,");}");var Oe=A.type,Ve;if(A.size?Ve=S.def(A.size,"||",P):Ve=P,S("if(",lt,".type!==",Oe,"||",lt,".size!==",Ve,"||",be.map(function(dn){return lt+"."+dn+"!=="+A[dn]}).join("||"),"){",U,".bindBuffer(",Li,",",at,".buffer);",U,".vertexAttribPointer(",[Y,Ve,Oe,A.normalized,A.stride,A.offset],");",lt,".type=",Oe,";",lt,".size=",Ve,";",be.map(function(dn){return lt+"."+dn+"="+A[dn]+";"}).join(""),"}"),Ot){var zo=A.divisor;S("if(",lt,".divisor!==",zo,"){",T.instancing,".vertexAttribDivisorANGLE(",[Y,zo],");",lt,".divisor=",zo,";}")}}function he(){S("if(",lt,".buffer){",U,".disableVertexAttribArray(",Y,");",lt,".buffer=null;","}if(",Ei.map(function(Oe,Ve){return lt+"."+Oe+"!=="+Nt[Ve]}).join("||"),"){",U,".vertexAttrib4f(",Y,",",Nt,");",Ei.map(function(Oe,Ve){return lt+"."+Oe+"="+Nt[Ve]+";"}).join(""),"}")}ut===Ai?Je():ut===q1?he():(S("if(",ut,"===",Ai,"){"),Je(),S("}else{"),he(),S("}"))}j.forEach(function(L){var P=L.name,A=$.attributes[P],U;if(A){if(!X(A))return;U=A.append(T,S)}else{if(!X(nm))return;var Y=T.scopeAttrib(P);k.optional(function(){T.assert(S,Y+".state","missing attribute "+P)}),U={},Object.keys(new V).forEach(function(lt){U[lt]=S.def(Y,".",lt)})}G(T.link(L),F(L.info.type),U)})}function Ro(T,S,$,j,X){for(var q=T.shared,F=q.gl,G,L=0;L<j.length;++L){var P=j[L],A=P.name,U=P.info.type,Y=$.uniforms[A],lt=T.link(P),ut=lt+".location",at;if(Y){if(!X(Y))continue;if(F0(Y)){var Nt=Y.value;if(k.command(Nt!==null&&typeof Nt!="undefined",'missing uniform "'+A+'"',T.commandStr),U===Zc||U===Jc){k.command(typeof Nt=="function"&&(U===Zc&&(Nt._reglType==="texture2d"||Nt._reglType==="framebuffer")||U===Jc&&(Nt._reglType==="textureCube"||Nt._reglType==="framebufferCube")),"invalid texture for uniform "+A,T.commandStr);var be=T.link(Nt._texture||Nt.color[0]._texture);S(F,".uniform1i(",ut,",",be+".bind());"),S.exit(be,".unbind();")}else if(U===Yc||U===Kc||U===Qc){k.optional(function(){k.command(yn(Nt),"invalid matrix for uniform "+A,T.commandStr),k.command(U===Yc&&Nt.length===4||U===Kc&&Nt.length===9||U===Qc&&Nt.length===16,"invalid length for matrix uniform "+A,T.commandStr)});var Je=T.global.def("new Float32Array(["+Array.prototype.slice.call(Nt)+"])"),he=2;U===Kc?he=3:U===Qc&&(he=4),S(F,".uniformMatrix",he,"fv(",ut,",false,",Je,");")}else{switch(U){case eu:k.commandType(Nt,"number","uniform "+A,T.commandStr),G="1f";break;case Tf:k.command(yn(Nt)&&Nt.length===2,"uniform "+A,T.commandStr),G="2f";break;case Lf:k.command(yn(Nt)&&Nt.length===3,"uniform "+A,T.commandStr),G="3f";break;case Nf:k.command(yn(Nt)&&Nt.length===4,"uniform "+A,T.commandStr),G="4f";break;case nu:k.commandType(Nt,"boolean","uniform "+A,T.commandStr),G="1i";break;case ou:k.commandType(Nt,"number","uniform "+A,T.commandStr),G="1i";break;case Pf:k.command(yn(Nt)&&Nt.length===2,"uniform "+A,T.commandStr),G="2i";break;case Rf:k.command(yn(Nt)&&Nt.length===2,"uniform "+A,T.commandStr),G="2i";break;case If:k.command(yn(Nt)&&Nt.length===3,"uniform "+A,T.commandStr),G="3i";break;case Cf:k.command(yn(Nt)&&Nt.length===3,"uniform "+A,T.commandStr),G="3i";break;case $f:k.command(yn(Nt)&&Nt.length===4,"uniform "+A,T.commandStr),G="4i";break;case Of:k.command(yn(Nt)&&Nt.length===4,"uniform "+A,T.commandStr),G="4i";break}S(F,".uniform",G,"(",ut,",",yn(Nt)?Array.prototype.slice.call(Nt):Nt,");")}continue}else at=Y.append(T,S)}else{if(!X(nm))continue;at=S.def(q.uniforms,"[",E.id(A),"]")}U===Zc?(k(!Array.isArray(at),"must specify a scalar prop for textures"),S("if(",at,"&&",at,'._reglType==="framebuffer"){',at,"=",at,".color[0];","}")):U===Jc&&(k(!Array.isArray(at),"must specify a scalar prop for cube maps"),S("if(",at,"&&",at,'._reglType==="framebufferCube"){',at,"=",at,".color[0];","}")),k.optional(function(){function Nr(qa,fm){T.assert(S,qa,'bad data or missing for uniform "'+A+'".  '+fm)}function su(qa){k(!Array.isArray(at),"must not specify an array type for uniform"),Nr("typeof "+at+'==="'+qa+'"',"invalid type, expected "+qa)}function ba(qa,fm){Array.isArray(at)?k(at.length===qa,"must have length "+qa):Nr(q.isArrayLike+"("+at+")&&"+at+".length==="+qa,"invalid vector, should have length "+qa,T.commandStr)}function lm(qa){k(!Array.isArray(at),"must not specify a value type"),Nr("typeof "+at+'==="function"&&'+at+'._reglType==="texture'+(qa===Vv?"2d":"Cube")+'"',"invalid texture type",T.commandStr)}switch(U){case ou:su("number");break;case Rf:ba(2,"number");break;case Cf:ba(3,"number");break;case Of:ba(4,"number");break;case eu:su("number");break;case Tf:ba(2,"number");break;case Lf:ba(3,"number");break;case Nf:ba(4,"number");break;case nu:su("boolean");break;case Pf:ba(2,"boolean");break;case If:ba(3,"boolean");break;case $f:ba(4,"boolean");break;case Yc:ba(4,"number");break;case Kc:ba(9,"number");break;case Qc:ba(16,"number");break;case Zc:lm(Vv);break;case Jc:lm(Zw);break}});var Oe=1;switch(U){case Zc:case Jc:var Ve=S.def(at,"._texture");S(F,".uniform1i(",ut,",",Ve,".bind());"),S.exit(Ve,".unbind();");continue;case ou:case nu:G="1i";break;case Rf:case Pf:G="2i",Oe=2;break;case Cf:case If:G="3i",Oe=3;break;case Of:case $f:G="4i",Oe=4;break;case eu:G="1f";break;case Tf:G="2f",Oe=2;break;case Lf:G="3f",Oe=3;break;case Nf:G="4f",Oe=4;break;case Yc:G="Matrix2fv";break;case Kc:G="Matrix3fv";break;case Qc:G="Matrix4fv";break}if(S(F,".uniform",G,"(",ut,","),G.charAt(0)==="M"){var zo=Math.pow(U-Yc+2,2),dn=T.global.def("new Float32Array(",zo,")");Array.isArray(at)?S("false,(",ro(zo,function(Nr){return dn+"["+Nr+"]="+at[Nr]}),",",dn,")"):S("false,(Array.isArray(",at,")||",at," instanceof Float32Array)?",at,":(",ro(zo,function(Nr){return dn+"["+Nr+"]="+at+"["+Nr+"]"}),",",dn,")")}else Oe>1?S(ro(Oe,function(Nr){return Array.isArray(at)?at[Nr]:at+"["+Nr+"]"})):(k(!Array.isArray(at),"uniform value must not be an array"),S(at));S(");")}}function Re(T,S,$,j){var X=T.shared,q=X.gl,F=X.draw,G=j.draw;function L(){var Ve=G.elements,zo,dn=S;return Ve?((Ve.contextDep&&j.contextDynamic||Ve.propDep)&&(dn=$),zo=Ve.append(T,dn)):zo=dn.def(F,".",Ls),zo&&dn("if("+zo+")"+q+".bindBuffer("+Yw+","+zo+".buffer.buffer);"),zo}function P(){var Ve=G.count,zo,dn=S;return Ve?((Ve.contextDep&&j.contextDynamic||Ve.propDep)&&(dn=$),zo=Ve.append(T,dn),k.optional(function(){Ve.MISSING&&T.assert(S,"false","missing vertex count"),Ve.DYNAMIC&&T.assert(dn,zo+">=0","missing vertex count")})):(zo=dn.def(F,".",Rs),k.optional(function(){T.assert(dn,zo+">=0","missing vertex count")})),zo}var A=L();function U(Ve){var zo=G[Ve];return zo?zo.contextDep&&j.contextDynamic||zo.propDep?zo.append(T,$):zo.append(T,S):S.def(F,".",Ve)}var Y=U(Ns),lt=U(Af),ut=P();if(typeof ut=="number"){if(ut===0)return}else $("if(",ut,"){"),$.exit("}");var at,Nt;Ot&&(at=U(zf),Nt=T.instancing);var be=A+".type",Je=G.elements&&F0(G.elements);function he(){function Ve(){$(Nt,".drawElementsInstancedANGLE(",[Y,ut,be,lt+"<<(("+be+"-"+Ev+")>>1)",at],");")}function zo(){$(Nt,".drawArraysInstancedANGLE(",[Y,lt,ut,at],");")}A?Je?Ve():($("if(",A,"){"),Ve(),$("}else{"),zo(),$("}")):zo()}function Oe(){function Ve(){$(q+".drawElements("+[Y,ut,be,lt+"<<(("+be+"-"+Ev+")>>1)"]+");")}function zo(){$(q+".drawArrays("+[Y,lt,ut]+");")}A?Je?Ve():($("if(",A,"){"),Ve(),$("}else{"),zo(),$("}")):zo()}Ot&&(typeof at!="number"||at>=0)?typeof at=="string"?($("if(",at,">0){"),he(),$("}else if(",at,"<0){"),Oe(),$("}")):he():Oe()}function ho(T,S,$,j,X){var q=Ge(),F=q.proc("body",X);return k.optional(function(){q.commandStr=S.commandStr,q.command=q.link(S.commandStr)}),Ot&&(q.instancing=F.def(q.shared.extensions,".angle_instanced_arrays")),T(q,F,$,j),q.compile().body}function Mo(T,S,$,j){bn(T,S),$.useVAO?$.drawVAO?S(T.shared.vao,".setVAO(",$.drawVAO.append(T,S),");"):S(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(S(T.shared.vao,".setVAO(null);"),hr(T,S,$,j.attributes,function(){return!0})),Ro(T,S,$,j.uniforms,function(){return!0}),Re(T,S,S,$)}function wn(T,S){var $=T.proc("draw",1);bn(T,$),On(T,$,S.context),Pn(T,$,S.framebuffer),Jn(T,$,S),fr(T,$,S.state),Ze(T,$,S,!1,!0);var j=S.shader.progVar.append(T,$);if($(T.shared.gl,".useProgram(",j,".program);"),S.shader.program)Mo(T,$,S,S.shader.program);else{$(T.shared.vao,".setVAO(null);");var X=T.global.def("{}"),q=$.def(j,".id"),F=$.def(X,"[",q,"]");$(T.cond(F).then(F,".call(this,a0);").else(F,"=",X,"[",q,"]=",T.link(function(G){return ho(Mo,T,S,G,1)}),"(",j,");",F,".call(this,a0);"))}Object.keys(S.state).length>0&&$(T.shared.current,".dirty=true;")}function o0(T,S,$,j){T.batchId="a1",bn(T,S);function X(){return!0}hr(T,S,$,j.attributes,X),Ro(T,S,$,j.uniforms,X),Re(T,S,S,$)}function Os(T,S,$,j){bn(T,S);var X=$.contextDep,q=S.def(),F="a0",G="a1",L=S.def();T.shared.props=L,T.batchId=q;var P=T.scope(),A=T.scope();S(P.entry,"for(",q,"=0;",q,"<",G,";++",q,"){",L,"=",F,"[",q,"];",A,"}",P.exit);function U(be){return be.contextDep&&X||be.propDep}function Y(be){return!U(be)}if($.needsContext&&On(T,A,$.context),$.needsFramebuffer&&Pn(T,A,$.framebuffer),fr(T,A,$.state,U),$.profile&&U($.profile)&&Ze(T,A,$,!1,!0),j)$.useVAO?$.drawVAO?U($.drawVAO)?A(T.shared.vao,".setVAO(",$.drawVAO.append(T,A),");"):P(T.shared.vao,".setVAO(",$.drawVAO.append(T,P),");"):P(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(P(T.shared.vao,".setVAO(null);"),hr(T,P,$,j.attributes,Y),hr(T,A,$,j.attributes,U)),Ro(T,P,$,j.uniforms,Y),Ro(T,A,$,j.uniforms,U),Re(T,P,A,$);else{var lt=T.global.def("{}"),ut=$.shader.progVar.append(T,A),at=A.def(ut,".id"),Nt=A.def(lt,"[",at,"]");A(T.shared.gl,".useProgram(",ut,".program);","if(!",Nt,"){",Nt,"=",lt,"[",at,"]=",T.link(function(be){return ho(o0,T,$,be,2)}),"(",ut,");}",Nt,".call(this,a0[",q,"],",q,");")}}function N(T,S){var $=T.proc("batch",2);T.batchId="0",bn(T,$);var j=!1,X=!0;Object.keys(S.context).forEach(function(lt){j=j||S.context[lt].propDep}),j||(On(T,$,S.context),X=!1);var q=S.framebuffer,F=!1;q?(q.propDep?j=F=!0:q.contextDep&&j&&(F=!0),F||Pn(T,$,q)):Pn(T,$,null),S.state.viewport&&S.state.viewport.propDep&&(j=!0);function G(lt){return lt.contextDep&&j||lt.propDep}Jn(T,$,S),fr(T,$,S.state,function(lt){return!G(lt)}),(!S.profile||!G(S.profile))&&Ze(T,$,S,!1,"a1"),S.contextDep=j,S.needsContext=X,S.needsFramebuffer=F;var L=S.shader.progVar;if(L.contextDep&&j||L.propDep)Os(T,$,S,null);else{var P=L.append(T,$);if($(T.shared.gl,".useProgram(",P,".program);"),S.shader.program)Os(T,$,S,S.shader.program);else{$(T.shared.vao,".setVAO(null);");var A=T.global.def("{}"),U=$.def(P,".id"),Y=$.def(A,"[",U,"]");$(T.cond(Y).then(Y,".call(this,a0,a1);").else(Y,"=",A,"[",U,"]=",T.link(function(lt){return ho(Os,T,S,lt,2)}),"(",P,");",Y,".call(this,a0,a1);"))}}Object.keys(S.state).length>0&&$(T.shared.current,".dirty=true;")}function ot(T,S){var $=T.proc("scope",3);T.batchId="a2";var j=T.shared,X=j.current;On(T,$,S.context),S.framebuffer&&S.framebuffer.append(T,$),om(Object.keys(S.state)).forEach(function(F){var G=S.state[F],L=G.append(T,$);yn(L)?L.forEach(function(P,A){$.set(T.next[F],"["+A+"]",P)}):$.set(j.next,"."+F,L)}),Ze(T,$,S,!0,!0),[Ls,Af,Rs,zf,Ns].forEach(function(F){var G=S.draw[F];G&&$.set(j.draw,"."+F,""+G.append(T,$))}),Object.keys(S.uniforms).forEach(function(F){var G=S.uniforms[F].append(T,$);Array.isArray(G)&&(G="["+G.join()+"]"),$.set(j.uniforms,"["+E.id(F)+"]",G)}),Object.keys(S.attributes).forEach(function(F){var G=S.attributes[F].append(T,$),L=T.scopeAttrib(F);Object.keys(new V).forEach(function(P){$.set(L,"."+P,G[P])})}),S.scopeVAO&&$.set(j.vao,".targetVAO",S.scopeVAO.append(T,$));function q(F){var G=S.shader[F];G&&$.set(j.shader,"."+F,G.append(T,$))}q(Wc),q(Vc),Object.keys(S.state).length>0&&($(X,".dirty=true;"),$.exit(X,".dirty=true;")),$("a1(",T.shared.context,",a0,",T.batchId,");")}function Q(T){if(!(typeof T!="object"||yn(T))){for(var S=Object.keys(T),$=0;$<S.length;++$)if(Ht.isDynamic(T[S[$]]))return!0;return!1}}function se(T,S,$){var j=S.static[$];if(!j||!Q(j))return;var X=T.global,q=Object.keys(j),F=!1,G=!1,L=!1,P=T.global.def("{}");q.forEach(function(U){var Y=j[U];if(Ht.isDynamic(Y)){typeof Y=="function"&&(Y=j[U]=Ht.unbox(Y));var lt=Wr(Y,null);F=F||lt.thisDep,L=L||lt.propDep,G=G||lt.contextDep}else{switch(X(P,".",U,"="),typeof Y){case"number":X(Y);break;case"string":X('"',Y,'"');break;case"object":Array.isArray(Y)&&X("[",Y.join(),"]");break;default:X(T.link(Y));break}X(";")}});function A(U,Y){q.forEach(function(lt){var ut=j[lt];if(Ht.isDynamic(ut)){var at=U.invoke(Y,ut);Y(P,".",lt,"=",at,";")}})}S.dynamic[$]=new Ht.DynamicVariable(Sf,{thisDep:F,contextDep:G,propDep:L,ref:P,append:A}),delete S.static[$]}function co(T,S,$,j,X){var q=Ge();q.stats=q.link(X),Object.keys(S.static).forEach(function(G){se(q,S,G)}),Xw.forEach(function(G){se(q,T,G)});var F=An(T,S,$,j,q);return wn(q,F),ot(q,F),N(q,F),e(q.compile(),{destroy:function(){F.shader.program.destroy()}})}return{next:re,current:gt,procs:function(){var T=Ge(),S=T.proc("poll"),$=T.proc("refresh"),j=T.block();S(j),$(j);var X=T.shared,q=X.gl,F=X.next,G=X.current;j(G,".dirty=false;"),Pn(T,S),Pn(T,$,null,!0);var L;Ot&&(L=T.link(Ot)),C.oes_vertex_array_object&&$(T.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var P=0;P<et.maxAttributes;++P){var A=$.def(X.attributes,"[",P,"]"),U=T.cond(A,".buffer");U.then(q,".enableVertexAttribArray(",P,");",q,".bindBuffer(",Li,",",A,".buffer.buffer);",q,".vertexAttribPointer(",P,",",A,".size,",A,".type,",A,".normalized,",A,".stride,",A,".offset);").else(q,".disableVertexAttribArray(",P,");",q,".vertexAttrib4f(",P,",",A,".x,",A,".y,",A,".z,",A,".w);",A,".buffer=null;"),$(U),Ot&&$(L,".vertexAttribDivisorANGLE(",P,",",A,".divisor);")}return $(T.shared.vao,".currentVAO=null;",T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"),Object.keys(Ut).forEach(function(Y){var lt=Ut[Y],ut=j.def(F,".",Y),at=T.block();at("if(",ut,"){",q,".enable(",lt,")}else{",q,".disable(",lt,")}",G,".",Y,"=",ut,";"),$(at),S("if(",ut,"!==",G,".",Y,"){",at,"}")}),Object.keys(yt).forEach(function(Y){var lt=yt[Y],ut=gt[Y],at,Nt,be=T.block();if(be(q,".",lt,"("),yn(ut)){var Je=ut.length;at=T.global.def(F,".",Y),Nt=T.global.def(G,".",Y),be(ro(Je,function(he){return at+"["+he+"]"}),");",ro(Je,function(he){return Nt+"["+he+"]="+at+"["+he+"];"}).join("")),S("if(",ro(Je,function(he){return at+"["+he+"]!=="+Nt+"["+he+"]"}).join("||"),"){",be,"}")}else at=j.def(F,".",Y),Nt=j.def(G,".",Y),be(at,");",G,".",Y,"=",at,";"),S("if(",at,"!==",Nt,"){",be,"}");$(be)}),T.compile()}(),compile:co}}function p4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var v4=34918,m4=34919,rm=35007,g4=function(x,E){if(!E.ext_disjoint_timer_query)return null;var C=[];function et(){return C.pop()||E.ext_disjoint_timer_query.createQueryEXT()}function ht(Ot){C.push(Ot)}var J=[];function nt(Ot){var ee=et();E.ext_disjoint_timer_query.beginQueryEXT(rm,ee),J.push(ee),Et(J.length-1,J.length,Ot)}function St(){E.ext_disjoint_timer_query.endQueryEXT(rm)}function zt(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Pt=[];function Tt(){return Pt.pop()||new zt}function qt(Ot){Pt.push(Ot)}var Yt=[];function Et(Ot,ee,gt){var re=Tt();re.startQueryIndex=Ot,re.endQueryIndex=ee,re.sum=0,re.stats=gt,Yt.push(re)}var Gt=[],V=[];function rt(){var Ot,ee,gt=J.length;if(gt!==0){V.length=Math.max(V.length,gt+1),Gt.length=Math.max(Gt.length,gt+1),Gt[0]=0,V[0]=0;var re=0;for(Ot=0,ee=0;ee<J.length;++ee){var _t=J[ee];E.ext_disjoint_timer_query.getQueryObjectEXT(_t,m4)?(re+=E.ext_disjoint_timer_query.getQueryObjectEXT(_t,v4),ht(_t)):J[Ot++]=_t,Gt[ee+1]=re,V[ee+1]=Ot}for(J.length=Ot,Ot=0,ee=0;ee<Yt.length;++ee){var Ut=Yt[ee],yt=Ut.startQueryIndex,Bt=Ut.endQueryIndex;Ut.sum+=Gt[Bt]-Gt[yt];var Ae=V[yt],Ue=V[Bt];Ue===Ae?(Ut.stats.gpuTime+=Ut.sum/1e6,qt(Ut)):(Ut.startQueryIndex=Ae,Ut.endQueryIndex=Ue,Yt[Ot++]=Ut)}Yt.length=Ot}}return{beginQuery:nt,endQuery:St,pushScopeStats:Et,update:rt,getNumPendingQueries:function(){return J.length},clear:function(){C.push.apply(C,J);for(var Ot=0;Ot<C.length;Ot++)E.ext_disjoint_timer_query.deleteQueryEXT(C[Ot]);J.length=0,C.length=0},restore:function(){J.length=0,C.length=0}}},x4=16384,y4=256,b4=1024,w4=34962,am="webglcontextlost",sm="webglcontextrestored",im=1,_4=2,M4=3;function cm(x,E){for(var C=0;C<x.length;++C)if(x[C]===E)return C;return-1}function k4(x){var E=$e(x);if(!E)return null;var C=E.gl,et=C.getContextAttributes(),ht=C.isContextLost(),J=qe(C,E);if(!J)return null;var nt=xe(),St=p4(),zt=J.extensions,Pt=g4(C,zt),Tt=Dt(),qt=C.drawingBufferWidth,Yt=C.drawingBufferHeight,Et={tick:0,time:0,viewportWidth:qt,viewportHeight:Yt,framebufferWidth:qt,framebufferHeight:Yt,drawingBufferWidth:qt,drawingBufferHeight:Yt,pixelRatio:E.pixelRatio},Gt={},V={elements:null,primitive:4,count:-1,offset:0,instances:-1},rt=lb(C,zt),Ot=Sb(C,St,E,gt),ee=$w(C,zt,rt,St,Ot);function gt(Re){return ee.destroyBuffer(Re)}var re=$b(C,zt,Ot,St),_t=Gw(C,nt,St,E),Ut=pw(C,zt,rt,function(){Ae.procs.poll()},Et,St,E),yt=vw(C,zt,rt,St,E),Bt=Pw(C,zt,rt,Ut,yt,St),Ae=d4(C,nt,zt,rt,Ot,re,Ut,Bt,Gt,ee,_t,V,Et,Pt,E),Ue=Bw(C,Bt,Ae.procs.poll,Et,et,zt,rt),Kt=Ae.next,$t=C.canvas,mt=[],Ge=[],Qe=[],fe=[E.onDestroy],io=null;function We(){if(mt.length===0){Pt&&Pt.update(),io=null;return}io=Xt.next(We),fr();for(var Re=mt.length-1;Re>=0;--Re){var ho=mt[Re];ho&&ho(Et,null,0)}C.flush(),Pt&&Pt.update()}function oo(){!io&&mt.length>0&&(io=Xt.next(We))}function Ao(){io&&(Xt.cancel(We),io=null)}function En(Re){Re.preventDefault(),ht=!0,Ao(),Ge.forEach(function(ho){ho()})}function Un(Re){C.getError(),ht=!1,J.restore(),_t.restore(),Ot.restore(),Ut.restore(),yt.restore(),Bt.restore(),ee.restore(),Pt&&Pt.restore(),Ae.procs.refresh(),oo(),Qe.forEach(function(ho){ho()})}$t&&($t.addEventListener(am,En,!1),$t.addEventListener(sm,Un,!1));function po(){mt.length=0,Ao(),$t&&($t.removeEventListener(am,En),$t.removeEventListener(sm,Un)),_t.clear(),Bt.clear(),yt.clear(),Ut.clear(),re.clear(),Ot.clear(),ee.clear(),Pt&&Pt.clear(),fe.forEach(function(Re){Re()})}function Cn(Re){k(!!Re,"invalid args to regl({...})"),k.type(Re,"object","invalid args to regl({...})");function ho(X){var q=e({},X);delete q.uniforms,delete q.attributes,delete q.context,delete q.vao,"stencil"in q&&q.stencil.op&&(q.stencil.opBack=q.stencil.opFront=q.stencil.op,delete q.stencil.op);function F(G){if(G in q){var L=q[G];delete q[G],Object.keys(L).forEach(function(P){q[G+"."+P]=L[P]})}}return F("blend"),F("depth"),F("cull"),F("stencil"),F("polygonOffset"),F("scissor"),F("sample"),"vao"in X&&(q.vao=X.vao),q}function Mo(X,q){var F={},G={};return Object.keys(X).forEach(function(L){var P=X[L];if(Ht.isDynamic(P)){G[L]=Ht.unbox(P,L);return}else if(q&&Array.isArray(P)){for(var A=0;A<P.length;++A)if(Ht.isDynamic(P[A])){G[L]=Ht.unbox(P,L);return}}F[L]=P}),{dynamic:G,static:F}}var wn=Mo(Re.context||{},!0),o0=Mo(Re.uniforms||{},!0),Os=Mo(Re.attributes||{},!1),N=Mo(ho(Re),!1),ot={gpuTime:0,cpuTime:0,count:0},Q=Ae.compile(N,Os,o0,wn,ot),se=Q.draw,co=Q.batch,T=Q.scope,S=[];function $(X){for(;S.length<X;)S.push(null);return S}function j(X,q){var F;if(ht&&k.raise("context lost"),typeof X=="function")return T.call(this,null,X,0);if(typeof q=="function")if(typeof X=="number")for(F=0;F<X;++F)T.call(this,null,q,F);else if(Array.isArray(X))for(F=0;F<X.length;++F)T.call(this,X[F],q,F);else return T.call(this,X,q,0);else if(typeof X=="number"){if(X>0)return co.call(this,$(X|0),X|0)}else if(Array.isArray(X)){if(X.length)return co.call(this,X,X.length)}else return se.call(this,X)}return e(j,{stats:ot,destroy:function(){Q.destroy()}})}var Qo=Bt.setFBO=Cn({framebuffer:Ht.define.call(null,im,"framebuffer")});function An(Re,ho){var Mo=0;Ae.procs.poll();var wn=ho.color;wn&&(C.clearColor(+wn[0]||0,+wn[1]||0,+wn[2]||0,+wn[3]||0),Mo|=x4),"depth"in ho&&(C.clearDepth(+ho.depth),Mo|=y4),"stencil"in ho&&(C.clearStencil(ho.stencil|0),Mo|=b4),k(!!Mo,"called regl.clear with no buffer specified"),C.clear(Mo)}function On(Re){if(k(typeof Re=="object"&&Re,"regl.clear() takes an object as input"),"framebuffer"in Re)if(Re.framebuffer&&Re.framebuffer_reglType==="framebufferCube")for(var ho=0;ho<6;++ho)Qo(e({framebuffer:Re.framebuffer.faces[ho]},Re),An);else Qo(Re,An);else An(null,Re)}function Pn(Re){k.type(Re,"function","regl.frame() callback must be a function"),mt.push(Re);function ho(){var Mo=cm(mt,Re);k(Mo>=0,"cannot cancel a frame twice");function wn(){var o0=cm(mt,wn);mt[o0]=mt[mt.length-1],mt.length-=1,mt.length<=0&&Ao()}mt[Mo]=wn}return oo(),{cancel:ho}}function Jn(){var Re=Kt.viewport,ho=Kt.scissor_box;Re[0]=Re[1]=ho[0]=ho[1]=0,Et.viewportWidth=Et.framebufferWidth=Et.drawingBufferWidth=Re[2]=ho[2]=C.drawingBufferWidth,Et.viewportHeight=Et.framebufferHeight=Et.drawingBufferHeight=Re[3]=ho[3]=C.drawingBufferHeight}function fr(){Et.tick+=1,Et.time=Ze(),Jn(),Ae.procs.poll()}function bn(){Ut.refresh(),Jn(),Ae.procs.refresh(),Pt&&Pt.update()}function Ze(){return(Dt()-Tt)/1e3}bn();function hr(Re,ho){k.type(ho,"function","listener callback must be a function");var Mo;switch(Re){case"frame":return Pn(ho);case"lost":Mo=Ge;break;case"restore":Mo=Qe;break;case"destroy":Mo=fe;break;default:k.raise("invalid event, must be one of frame,lost,restore,destroy")}return Mo.push(ho),{cancel:function(){for(var wn=0;wn<Mo.length;++wn)if(Mo[wn]===ho){Mo[wn]=Mo[Mo.length-1],Mo.pop();return}}}}var Ro=e(Cn,{clear:On,prop:Ht.define.bind(null,im),context:Ht.define.bind(null,_4),this:Ht.define.bind(null,M4),draw:Cn({}),buffer:function(Re){return Ot.create(Re,w4,!1,!1)},elements:function(Re){return re.create(Re,!1)},texture:Ut.create2D,cube:Ut.createCube,renderbuffer:yt.create,framebuffer:Bt.create,framebufferCube:Bt.createCube,vao:ee.createVAO,attributes:et,frame:Pn,on:hr,limits:rt,hasExtension:function(Re){return rt.extensions.indexOf(Re.toLowerCase())>=0},read:Ue,destroy:po,_gl:C,_refresh:bn,poll:function(){fr(),Pt&&Pt.update()},now:Ze,stats:St});return E.onDone(null,Ro),Ro}return k4})});var Ps=bt((cA,Rm)=>{"use strict";var g0=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],x0=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],n0=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],jf=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],il=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],mu=t=>Math.hypot(t[0],t[1],t[2]),_a=t=>{let e=mu(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Fi(t,e){let o=t.length-1,n=Math.min(Math.max(e,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=[0,0,0];for(let d=0;d<3;d++)l[d]=.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*a*a+(-s[d]+3*i[d]-3*c[d]+f[d])*a*a*a);return l}function q4(t,e){return Fi(t.map(o=>[o,0,0]),e)[0]}function D4(t,e,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(h,v)=>{let u=new Array(9);for(let p=0;p<3;p++)for(let m=0;m<3;m++)u[p*3+m]=h[p*3]*v[m]+h[p*3+1]*v[3+m]+h[p*3+2]*v[6+m];return u},f=h=>[s.r[0]*h[0]+s.r[1]*h[1]+s.r[2]*h[2],s.r[3]*h[0]+s.r[4]*h[1]+s.r[5]*h[2],s.r[6]*h[0]+s.r[7]*h[1]+s.r[8]*h[2]];r.translate=(h,v,u)=>{let p=f([h,v,u]);s.t=[s.t[0]+p[0]*s.s,s.t[1]+p[1]*s.s,s.t[2]+p[2]*s.s]},r.scale=h=>{s.s*=h},r.rotateY=h=>{let v=Math.cos(h),u=Math.sin(h);s.r=c(s.r,[v,0,u,0,1,0,-u,0,v])},r.vert=(h,v,u)=>{let p=u||r.curMat,m=f(h),g=_a(f(v));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),n.push(p[0],p[1],p[2]),t.length/3-1};let l=h=>[t[h*3],t[h*3+1],t[h*3+2]],d=h=>[e[h*3],e[h*3+1],e[h*3+2]];return r.tri=(h,v,u)=>{let p=l(h),m=il(g0(l(v),p),g0(l(u),p)),g=x0(x0(d(h),d(v)),d(u));jf(m,g)<0?o.push(h,u,v):o.push(h,v,u)},r.box=(h,v,u,p,m,g,y)=>{let b=[[[h,v,u],[p,v,u],[h,m,u],[p,m,u],[0,0,-1]],[[p,v,g],[h,v,g],[p,m,g],[h,m,g],[0,0,1]],[[h,v,g],[h,v,u],[h,m,g],[h,m,u],[-1,0,0]],[[p,v,u],[p,v,g],[p,m,u],[p,m,g],[1,0,0]],[[h,m,u],[p,m,u],[h,m,g],[p,m,g],[0,1,0]],[[h,v,g],[p,v,g],[h,v,u],[p,v,u],[0,-1,0]]];for(let w of b){let _=r.vert(w[0],w[4],y),M=r.vert(w[1],w[4],y),z=r.vert(w[2],w[4],y),I=r.vert(w[3],w[4],y);r.tri(_,M,z),r.tri(M,I,z)}},r.surface=(h,v,u,p)=>{p=p||{};let m=.001,g=_=>Math.min(1,Math.max(0,_)),y=[],b=[];for(let _=0;_<=v;_++){let M=[],z=[];for(let I=0;I<=u;I++){let R=_/v,B=I/u,D=h(R,B),K=Math.min(1-m,Math.max(m,R)),O=p.wrapV?B:Math.min(1-m,Math.max(m,B)),H=g0(h(g(K+m),O),h(g(K-m),O)),ft=p.wrapV?O+m:g(O+m),It=p.wrapV?O-m:g(O-m),Mt=g0(h(K,ft),h(K,It)),vt=il(H,Mt);mu(vt)<1e-14&&(vt=p.inside?g0(D,p.inside(R,B)):[0,1,0]),vt=_a(vt),p.inside&&jf(vt,g0(D,p.inside(R,B)))<0&&(vt=n0(vt,-1));let st=p.mat?p.mat(R,B,D):null;M.push(r.vert(D,vt,st)),p.double&&z.push(r.vert(D,n0(vt,-1),st))}y.push(M),b.push(z)}let w=_=>{for(let M=0;M<v;M++)for(let z=0;z<u;z++){let I=_[M][z],R=_[M+1][z],B=_[M][z+1],D=_[M+1][z+1];r.tri(I,R,B),r.tri(R,D,B)}};w(y),p.double&&w(b)},r.ellipsoid=(h,v,u,p,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let w=y*Math.PI,_=b*Math.PI*2,M=g?g(y,b):1;return[h[0]+v[0]*M*Math.sin(w)*Math.cos(_),h[1]+v[1]*M*Math.cos(w),h[2]+v[2]*M*Math.sin(w)*Math.sin(_)]},u||10,p||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,v,u,p,m)=>{m=m||{};let g=40,y=[],b=null;for(let M=0;M<=g;M++){let z=M/g,I=Fi(h,Math.max(0,z-.01)),R=Fi(h,Math.min(1,z+.01)),B=_a(g0(R,I)),D;if(b)D=_a(g0(b,n0(B,jf(b,B))));else{let K=Math.abs(B[1])<.9?[0,1,0]:[1,0,0];D=_a(il(B,K))}y.push({N:D,B:_a(il(B,D))}),b=D}let w=M=>{let z=Math.min(Math.max(M,0),1)*g,I=Math.min(g-1,Math.floor(z)),R=z-I,B=y[I],D=y[I+1];return{N:_a(x0(n0(B.N,1-R),n0(D.N,R))),B:_a(x0(n0(B.B,1-R),n0(D.B,R)))}},_=m.squash||[1,1];r.surface((M,z)=>{let I=Fi(h,M),R=w(M),B=v(M),D=z*Math.PI*2;return x0(I,x0(n0(R.N,Math.cos(D)*B*_[0]),n0(R.B,Math.sin(D)*B*_[1])))},u||12,p||8,{wrapV:!0,inside:M=>Fi(h,M),mat:m.mat})},r.lathe=(h,v,u,p,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],w=h[y+1][1]-h[y][1];g.push(_a([w,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],w=h[y+1],_=y===0||b[2]===1,M=y===h.length-2||w[2]===1,z=_?g[y]:_a(x0(g[y-1],g[y])),I=M?g[y]:_a(x0(g[y],g[y+1])),R=[],B=[];for(let D=0;D<=p;D++){let K=D/p*Math.PI*2,O=Math.cos(K),H=Math.sin(K),ft=m.mat?m.mat(K,b[1]):null,It=m.mat?m.mat(K,w[1]):null;R.push(r.vert([v+b[0]*O,b[1],u+b[0]*H],[z[0]*O,z[1],z[0]*H],ft)),B.push(r.vert([v+w[0]*O,w[1],u+w[0]*H],[I[0]*O,I[1],I[0]*H],It))}for(let D=0;D<p;D++)r.tri(R[D],R[D+1],B[D]),r.tri(R[D+1],B[D+1],B[D])}},r}Rm.exports={createBuilder:D4,catmull:Fi,curve1:q4,sub:g0,add:x0,mul:n0,dot:jf,cross:il,norm:_a,len:mu}});var Im=bt((lA,Pm)=>{"use strict";var{norm:Wf,add:Vf,mul:D0,sub:G4,cross:Cm}=Ps(),Om=Math.PI*2,H4=(t,e,o)=>{let n=Math.min(1,Math.max(0,(o-t)/(e-t)));return n*n*(3-2*n)};function U4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function B4(t,e,o,n,r,a){let s=(h,v)=>[7,h*a,v];t.curMat=[0,0,0],t.box(e-a*1.36,n,o-a*1.36,e+a*1.36,n+.22,o+a*1.36),t.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],e,o,56,{mat:s});let i=n+.55,c=r-i,f=20,l=6,d=a*.075;return t.surface((h,v)=>{let u=i+h*c,p=a*(.96-.12*h),m=v*Om,g=v*f%1,y=p-d*4*g*(1-g);return[e+y*Math.cos(m),u,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[e,i+h*c,o],mat:(h,v)=>[7,v*Om*a,i+h*c]}),t.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,r+.33,o-a*1.42,e+a*1.42,r+.53,o+a*1.42),r+.53}function j4(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function W4(t,e,o,n,r){t.save(),t.translate(e,0,o),j4(t,n,r),t.restore()}function V4(t,e,o,n,r,a){let s=U4(n),i=a?Wf([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(r||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let d=l>=c-2,h=l*2.399963+s()*.5,v=[Math.cos(h),0,Math.sin(h)],u=[-Math.sin(h),0,Math.cos(h)],p=l*.618%1,m=d?.06+s()*.06:.12+.62*p,g=1;if(i){let vt=v[0]*i[0]+v[2]*i[2];g=.25+.75*H4(-.7,.5,vt),m*=g}let y=d?1.1+s()*.25:.85+.55*(1-p*.55)+s()*.15,b=d?1+s()*.2:.95+s()*.28,w=d?.055:.215+s()*.05,_=.04+s()*.05,M=[v[0]*_,f,v[2]*_],z=[M[0]+v[0]*Math.sin(m)*y*.92,M[1]+Math.cos(m)*y,M[2]+v[2]*Math.sin(m)*y*.92],I=[M[0]+v[0]*Math.sin(m*.5)*y*.45,M[1]+y*.5,M[2]+v[2]*Math.sin(m*.5)*y*.45];t.curMat=[4,0,0],t.tube([M,I,z],vt=>.02-.008*vt,8,7);let R=24,B=m*.9+.05,D=m+(d?.12:(.95+.45*p)*(.35+.65*g)),K=[z],O=[],H=z;for(let vt=0;vt<R;vt++){let st=vt/R,Wt=B+(D-B)*st*st,Se=[v[0]*Math.sin(Wt),Math.cos(Wt),v[2]*Math.sin(Wt)];O.push(Se),H=Vf(H,D0(Se,b/R)),K.push(H)}O.push(O[O.length-1]);let ft=vt=>{let st=vt*R,Wt=Math.min(R-1,Math.floor(st)),Se=st-Wt;return Vf(D0(K[Wt],1-Se),D0(K[Wt+1],Se))},It=vt=>{let st=vt*R,Wt=Math.min(R,Math.floor(st)),Se=Math.min(R,Wt+1),Ne=st-Wt;return Wf(Vf(D0(O[Wt],1-Ne),D0(O[Se],Ne)))},Mt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((vt,st)=>{let Wt=st*2-1,Se=ft(vt),Ne=It(vt),to=Mt*vt,it=Vf(D0(u,Math.cos(to)),D0(Cm(Ne,u),Math.sin(to)));it=Wf(G4(it,D0(Ne,it[0]*Ne[0]+it[1]*Ne[1]+it[2]*Ne[2])));let Lt=Wf(Cm(it,Ne)),wt=w*Math.pow(Math.sin(Math.PI*Math.pow(vt,.72)),.85),Me=.3*wt*Math.abs(Wt)+.012*Math.sin(vt*40+Wt*2)*Math.abs(Wt)*(d?0:1),kt=-.1*wt*Wt*Wt*Wt*Wt,Ct=Me+kt;return[Se[0]+it[0]*Wt*wt+Lt[0]*Ct,Se[1]+it[1]*Wt*wt+Lt[1]*Ct,Se[2]+it[2]*Wt*wt+Lt[2]*Ct]},14,8,{double:!0,mat:(vt,st)=>[2,st*2-1,vt]})}t.restore()}Pm.exports={addFlutedColumn:B4,addStatue:W4,addPlant:V4}});var G0=bt((fA,Dm)=>{"use strict";var At={xc:7,r:2.5,spring:4.7};At.x0=At.xc-At.r;At.x1=At.xc+At.r;At.top=At.spring+At.r;var Or=.06,nn=.1,$m=.08,Xf=At.r,Yf=[At.x0+Xf/3,At.x0+2*Xf/3,At.xc+Xf/3,At.xc+2*Xf/3],qi=.28,gu=[.95,1.65,2.35,3.05,3.75],Fm=[1.05,1.8],cl=[8,0,0],ra=[0,0,0];function Ma(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function Di(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Kf(t,e,o,n,r,a,s=48,i=0,c=Math.PI){let f=(l,d,h)=>[At.xc+d*Math.cos(l),At.spring+d*Math.sin(l),h];for(let l=0;l<s;l++){let d=i+(c-i)*l/s,h=i+(c-i)*(l+1)/s,v=(d+h)/2;Di(t,f(d,e,r),f(h,e,r),f(h,o,r),f(d,o,r),[0,0,1],a),Di(t,f(d,o,n),f(h,o,n),f(h,e,n),f(d,e,n),[0,0,-1],a),Di(t,f(d,e,n),f(h,e,n),f(h,e,r),f(d,e,r),[-Math.cos(v),-Math.sin(v),0],a),Di(t,f(h,o,n),f(d,o,n),f(d,o,r),f(h,o,r),[Math.cos(v),Math.sin(v),0],a)}}function X4(t){let n=a=>[At.xc+At.r*Math.cos(a),At.spring+At.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?At.r/Math.abs(s):1/0,f=i>1e-6?(8-At.spring)/i:1/0,l=Math.min(c,f);return[Math.min(At.x1,Math.max(At.x0,At.xc+s*l)),Math.min(8,At.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),f=n(i),l=r(s),d=r(i);for(let[v,u]of[[.35,1],[-.35,-1]])Di(t,[c[0],c[1],v],[f[0],f[1],v],[d[0],d[1],v],[l[0],l[1],v],[0,0,u],ra);let h=(s+i)/2;Di(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],ra)}}function Y4(t){Ma(t,-.35,0,-.35,At.x0,8,.35,ra),Ma(t,At.x1,0,-.35,14+.35,8,.35,ra),X4(t),qm(t)}function qm(t){Ma(t,At.x0-.32,.3,.35,At.x0,At.spring,.35+.07,ra),Ma(t,At.x1,.3,.35,At.x1+.32,At.spring,.35+.07,ra),Ma(t,At.x0-.32-.05,0,.35,At.x0,.3,.35+.07+.04,ra),Ma(t,At.x1,0,.35,At.x1+.32+.05,.3,.35+.07+.04,ra),Ma(t,At.x0-.32-.06,At.spring-.12,.35,At.x0,At.spring,.35+.07+.05,ra),Ma(t,At.x1,At.spring-.12,.35,At.x1+.32+.06,At.spring,.35+.07+.05,ra),Kf(t,At.r,At.r+.32,.35,.35+.07,ra),Kf(t,At.r+.32,At.r+.32+.06,.35,.35+.07+.03,ra),Ma(t,At.xc-.22,At.top-.08,.35,At.xc+.22,At.top+.32+.12,.35+.07+.06,ra)}function K4(t,e){e=e||"all";let o=e==="all",n=o||e==="fixed",r=-$m/2,a=$m/2,s=(h,v,u,p,m=0)=>Ma(t,h-m,v,r,u+m,p,a,cl),i=h=>At.spring+Math.sqrt(Math.max(0,At.r*At.r-(h-At.xc)*(h-At.xc))),c=e==="right"?At.xc:At.x0,f=e==="left"?At.xc:At.x1,l=h=>o||e==="left"&&h<At.xc||e==="right"&&h>At.xc,d=o?null:At.spring-.06;if(n){s(At.x0,0,At.x0+nn,At.spring),s(At.x1-nn,0,At.x1,At.spring),Kf(t,At.r-nn,At.r,r,a,cl,64),s(At.x0,0,At.x1,.05),s(At.x0,At.spring-.06,At.x1,At.spring+.06);for(let h of Fm)Kf(t,h-Or/2,h+Or/2,r,a,cl,48)}if(o){s(At.x0,0,At.x1,qi),s(At.xc-nn/2,0,At.xc+nn/2,At.top-nn*.5);for(let h of Yf)s(h-Or/2,qi,h+Or/2,i(h)-nn*.5);for(let h of gu)s(At.x0,h-Or/2,At.x1,h+Or/2)}else if(e==="fixed"){s(At.xc-nn/2,At.spring+.06,At.xc+nn/2,At.top-nn*.5);for(let h of Yf)s(h-Or/2,At.spring+.06,h+Or/2,i(h)-nn*.5)}else{let h=e==="left"?At.x0+nn:At.x1-nn;s(Math.min(h,h+(e==="left"?nn*.8:-nn*.8)),.05,Math.max(h,h+(e==="left"?nn*.8:-nn*.8)),d),s(c,.05,f,qi),s(c,d-.07,f,d);let v=e==="left"?At.xc-nn/2:At.xc;s(v,.05,v+nn/2,d);for(let u of Yf)l(u)&&s(u-Or/2,qi,u+Or/2,d-.07);for(let u of gu)s(c,u-Or/2,f,u+Or/2)}for(let h of[-1,1]){let v=At.xc+h*.16;l(v)&&(Ma(t,v-.02,1.05,a,v+.02,1.13,a+.06,cl),Ma(t,v-(h>0?0:.14),1.07,a+.05,v+(h>0?.14:0),1.11,a+.08,cl))}}function Q4(t){t=t||"all";let e=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=At;if(t!=="fixed"){let f=t==="right"?a:n,l=t==="left"?a:r;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,d=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(d),i+s*Math.sin(d),o])}return e}var Fo=t=>t.toFixed(4);function Z4(){let t=Yf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Fo(n)}), ${Fo(Or/2)}, soft));`).join(`
		`),e=gu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Fo(n)}), ${Fo(Or/2)}, soft));`).join(`
		`),o=Fm.map(n=>`ab = max(ab, barCover(abs(rr - ${Fo(n)}), ${Fo(Or/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Fo(At.x0)} - soft, ${Fo(At.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Fo(At.x1)} - soft, ${Fo(At.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Fo(At.xc)}, ${Fo(At.spring)}));
		float arch = q.y < ${Fo(At.spring)} ? 1.0 : 1.0 - smoothstep(${Fo(At.r)} - soft, ${Fo(At.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Fo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Fo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Fo(At.xc)}, ${Fo(At.spring)}));
		float vb = barCover(abs(q.x - ${Fo(At.xc)}), ${Fo(nn/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${Fo(At.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Fo(qi)} - soft, ${Fo(qi)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Fo(At.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Fo(At.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Fo(At.x0+nn/2)}), ${Fo(nn/2)}, soft),
			barCover(abs(q.x - ${Fo(At.x1-nn/2)}), ${Fo(nn/2)}, soft));
		frame = q.y < ${Fo(At.spring)} ? frame : barCover(abs(rr - ${Fo(At.r-nn/2)}), ${Fo(nn/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Dm.exports={addEntranceWall:Y4,addSurround:qm,addFrames:K4,glassPanes:Q4,doorLightGLSL:Z4,DOOR:At,WALL:.35}});var Hi=bt((hA,Wm)=>{"use strict";var $s=1.1583333333333334,Fs=(13.05-8*.16)/9,yu=$s+.16,bu=Fs+.16,b0=14/2-7.75/2,aa=15,ll=b0+7.75,y0=aa+13.05,sa=.3,w0={y:8+.18,inset:.15},Is={y:8+.36,inset:sa},wu=8+.2,fl=8+.62,_u=8+.9,Mu=.016,Bm=.28,jm=.66,J4=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),t_=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),e_=[9,0,0],ur=[10,0,0];function Gi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Pr(t,e,o,n,r,a,s){Gi(t,[e,a,o],[n,a,o],[n,a,r],[e,a,r],[0,-1,0],s)}function xu(t,e,o,n,r,a,s,i){Gi(t,[e,a,o],[n,a,o],[n,s,o],[e,s,o],[0,0,1],i),Gi(t,[n,a,r],[e,a,r],[e,s,r],[n,s,r],[0,0,-1],i),Gi(t,[e,a,r],[e,a,o],[e,s,o],[e,s,r],[1,0,0],i),Gi(t,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function Gm(t,e,o,n,r){Pr(t,e[0],e[1],e[2],o[1],n,r),Pr(t,e[0],o[3],e[2],e[3],n,r),Pr(t,e[0],o[1],o[0],o[3],n,r),Pr(t,o[2],o[1],e[2],o[3],n,r)}var Hm=t=>b0+t*yu,Um=t=>aa+t*bu;function o_(t,e,o=48){let n=[b0-sa,aa-sa,ll+sa,y0+sa],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,w0.inset),s=r(n,Is.inset);Pr(t,0,0,14,n[1],8,e),Pr(t,0,n[3],14,o,8,e),Pr(t,0,n[1],n[0],n[3],8,e),Pr(t,n[2],n[1],14,n[3],8,e);let i=.06,c=.06;t.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],ur),t.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,ur),t.box(n[0]-i,8-c,n[1],n[0],8,n[3],ur),t.box(n[2],8-c,n[1],n[2]+i,8,n[3],ur),xu(t,...n.slice(0,2),...n.slice(2),8,w0.y,ur),Gm(t,n,a,w0.y,ur),xu(t,...a.slice(0,2),...a.slice(2),w0.y,Is.y,ur),Gm(t,a,s,Is.y,ur);for(let f=1;f<6;f++){let l=Hm(f)-.16;t.box(l,wu,aa,l+.16,Is.y,y0,ur)}for(let f=1;f<9;f++){let l=Um(f)-.16;t.box(b0,wu,l,ll,Is.y,l+.16,ur)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let d=Hm(l),h=Um(f);xu(t,d,h,d+$s,h+Fs,Is.y,_u,ur),Pr(t,d,h,d+$s,h+Fs,_u,e_),n_(t,d+$s/2,h+Fs/2,$s/2,Fs/2)}}function n_(t,e,o,n,r){let a=fl,s=Mu;Pr(t,e-n,o-s,e+n,o+s,a,ur),Pr(t,e-s,o-r,e+s,o+r,a,ur);for(let i of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=i*r/c,d=-l*s,h=f*s;Gi(t,[e-f*c+d,a,o-l*c+h],[e+f*c+d,a,o+l*c+h],[e+f*c-d,a,o+l*c-h],[e-f*c-d,a,o-l*c-h],[0,-1,0],ur)}for(let i of[Bm,jm]){let c=i*n,f=i*r;Pr(t,e-c-s,o-f-s,e+c+s,o-f+s,a,ur),Pr(t,e-c-s,o+f-s,e+c+s,o+f+s,a,ur),Pr(t,e-c-s,o-f+s,e-c+s,o+f-s,a,ur),Pr(t,e+c-s,o-f+s,e+c+s,o+f-s,a,ur)}}var Xe=t=>t.toFixed(4);function r_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${J4.map(Xe).join(", ")});
	const vec3 SKY_MOON = vec3(${t_.map(Xe).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Xe(b0)}, ${Xe(aa)});
		vec2 pitch = vec2(${Xe(yu)}, ${Xe(bu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Xe(5)} || cell.y > ${Xe(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Xe($s)}, ${Xe(Fs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Xe(Mu)} - soft, ${Xe(Mu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Xe(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Xe(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Xe(w0.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Xe(wu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Xe(Is.y)} - p.y) / L.y)).xz;
		float tG = (${Xe(fl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Xe(_u)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Xe(b0-sa)}, ${Xe(aa-sa)}, ${Xe(ll+sa)}, ${Xe(y0+sa)}), soft)
		           * rectOpen(q1, vec4(${Xe(b0-sa+w0.inset)}, ${Xe(aa-sa+w0.inset)}, ${Xe(ll+sa-w0.inset)}, ${Xe(y0+sa-w0.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Xe(b0)}, ${Xe(aa)});
		vec2 pitch = vec2(${Xe(yu)}, ${Xe(bu)});
		vec2 paneHalf = vec2(${Xe($s/2)}, ${Xe(Fs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Xe(Bm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Xe(jm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Xe(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Xe(fl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Xe(b0)}, ${Xe(aa)}, ${Xe(ll)}, ${Xe(y0)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Xe(14/2)}, ${Xe((aa+y0)/2)}) - L.xz * (${Xe(fl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Xe(7.75/2)}, ${Xe(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Xe(aa-3)}, ${Xe(aa+2)}, p.z)
		        * (1.0 - smoothstep(${Xe(y0-2)}, ${Xe(y0+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Xe(7.75/2)}, ${Xe(14/2)}, abs(p.x - ${Xe(14/2)}));
		return z * x;
	}`}Wm.exports={addSkylight:o_,skylightGLSL:r_,Z_START:aa,Z_END:y0,GLASS_Y:fl,HEIGHT:8}});var xr=bt((uA,Qm)=>{"use strict";var Bi=G0(),Au=8,rn=.35,Jt={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Au},Vm=(Jt.z1-Jt.z0)/2,ku=Jt.crown-Jt.spring,Eu=(ku*ku+Vm*Vm)/(2*ku),zu=Jt.crown-Eu;function Ui(t){let e=t-Jt.zc;return zu+Math.sqrt(Math.max(0,Eu*Eu-e*e))}var De={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Da=Array.from({length:De.count},(t,e)=>De.first+e*De.pitch),Ym=Da.slice(1).map(t=>t-De.pitch/2),a_=[Da[0],Da[2],Da[4]],Zf=[Da[1],Da[3]],Vr={r:1.3,sill:.62,spring:3.3},Uo=[0,0,0],hl=[11,0,0],H0=[10,0,0],ul=[8,0,0];function tr(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Xr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function dl(t,e){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,n]);for(let p of i){f.add(p.u0),f.add(p.u1);let m=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.08)));for(let g=1;g<m;g++)f.add(p.u0+(p.u1-p.u0)*g/m)}for(let p of e.cuts||[])f.add(p);let l=e.topStep||.5;for(let p=o;p<n;p+=l)f.add(p);let d=[...f].filter(p=>p>=o-1e-9&&p<=n+1e-9).sort((p,m)=>p-m),h=(p,m)=>p.bot?p.bot(m):p.bottom,v=(p,m)=>{let g=s(p),y=m.map(_=>[Math.max(0,h(_,p)),Math.min(_.head(p),g)]).filter(_=>_[1]>_[0]).sort((_,M)=>_[0]-M[0]),b=[],w=0;for(let _ of y)_[0]>w+1e-6&&b.push([w,_[0]]),w=Math.max(w,_[1]);return g>w+1e-6&&b.push([w,g]),b},u=(p,m,g)=>[p,m,g];for(let p=0;p<d.length-1;p++){let m=d[p],g=d[p+1],y=(m+g)/2,b=i.filter(R=>y>R.u0&&y<R.u1),w=b.length?Math.max(m,Math.max(...b.map(R=>R.u0))+1e-7):m,_=b.length?Math.min(g,Math.min(...b.map(R=>R.u1))-1e-7):g,M=v(w,b),z=v(_,b),I=Math.min(M.length,z.length);for(let R=0;R<I;R++){let[B,D]=M[R],[K,O]=z[R];D-B<1e-6&&O-K<1e-6||(tr(t,u(m,B,a),u(g,K,a),u(g,O,a),u(m,D,a),[0,0,1],c),e.frontOnly||tr(t,u(g,K,r),u(m,B,r),u(m,D,r),u(g,O,r),[0,0,-1],c))}}e.noEnds||(tr(t,u(o,0,r),u(o,0,a),u(o,s(o),a),u(o,s(o),r),[-1,0,0],c),tr(t,u(n,0,a),u(n,0,r),u(n,s(n),r),u(n,s(n),a),[1,0,0],c));for(let p of i){if(p.noReveal)continue;let m=p.mat||e.revealMat||c,g=Math.max(0,h(p,p.u0+1e-7)),y=Math.max(0,h(p,p.u1-1e-7)),b=Math.min(p.head(p.u0+1e-7),s(p.u0)),w=Math.min(p.head(p.u1-1e-7),s(p.u1));b>g+1e-6&&tr(t,u(p.u0,g,a),u(p.u0,g,r),u(p.u0,b,r),u(p.u0,b,a),[1,0,0],m),w>y+1e-6&&tr(t,u(p.u1,y,r),u(p.u1,y,a),u(p.u1,w,a),u(p.u1,w,r),[-1,0,0],m);let _=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.06)));for(let M=0;M<_;M++){let z=p.u0+(p.u1-p.u0)*M/_,I=p.u0+(p.u1-p.u0)*(M+1)/_,R=Math.max(z,p.u0+1e-7),B=Math.min(I,p.u1-1e-7),D=Math.min(p.head(R),s(z)),K=Math.min(p.head(B),s(I));if(!(D>=s(z)-1e-6&&K>=s(I)-1e-6)){let ft=I-z,It=K-D,Mt=Math.hypot(ft,It)||1;tr(t,u(z,D,r),u(I,K,r),u(I,K,a),u(z,D,a),[It/Mt,-ft/Mt,0],m)}let O=h(p,R),H=h(p,B);if(O>1e-6||H>1e-6){let ft=I-z,It=H-O,Mt=Math.hypot(ft,It)||1;tr(t,u(I,H,r),u(z,O,r),u(z,O,a),u(I,H,a),[-It/Mt,ft/Mt,0],m)}}}}var Su=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function s_(t,e){let o=Vr.r,n=Vr.sill,r=Vr.spring,a=Jt.z0,s=24,i=(v,u,p)=>[e+Math.cos(v)*u,p,a-Math.sin(v)*u];for(let v=0;v<s;v++){let u=Math.PI*v/s,p=Math.PI*(v+1)/s,m=[-Math.cos(u),0,Math.sin(u)],g=[-Math.cos(p),0,Math.sin(p)],y=[t.vert(i(u,o,n),m,Uo),t.vert(i(p,o,n),g,Uo),t.vert(i(p,o,r),g,Uo),t.vert(i(u,o,r),m,Uo)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}let c=12,f=(v,u)=>[e+Math.cos(v)*Math.cos(u)*o,r+Math.sin(u)*o,a-Math.sin(v)*Math.cos(u)*o],l=(v,u)=>[-Math.cos(v)*Math.cos(u),-Math.sin(u),Math.sin(v)*Math.cos(u)];for(let v=0;v<s;v++)for(let u=0;u<c;u++){let p=Math.PI*v/s,m=Math.PI*(v+1)/s,g=Math.PI/2*u/c,y=Math.PI/2*(u+1)/c,b=[t.vert(f(p,g),l(p,g),H0),t.vert(f(m,g),l(m,g),H0),t.vert(f(m,y),l(m,y),H0),t.vert(f(p,y),l(p,y),H0)];t.tri(b[0],b[1],b[2]),t.tri(b[0],b[2],b[3])}for(let v=1;v<8;v++){let u=Math.PI*v/8,p=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;p.push(f(u,g).map((y,b)=>y-l(u,g)[b]*.02))}t.tube(p,m=>.035*(1-m*.6),12,6,{mat:()=>H0})}let d=t.vert([e,n,a],[0,1,0],Uo);for(let v=0;v<s;v++){let u=Math.PI*v/s,p=Math.PI*(v+1)/s;t.tri(d,t.vert(i(u,o,n),[0,1,0],Uo),t.vert(i(p,o,n),[0,1,0],Uo))}Xr(t,e-o-.12,n-.1,a,e+o+.12,n+.02,a+.12,Uo),Xr(t,e-o-.16,n-.2,a,e+o+.16,n-.1,a+.07,Uo);let h=.16;for(let v=0;v<s;v++){let u=Math.PI*v/s,p=Math.PI*(v+1)/s,m=(g,y,b)=>[e+Math.cos(g)*y,r+Math.sin(g)*y,b];tr(t,m(u,o,a+.05),m(p,o,a+.05),m(p,o+h,a+.05),m(u,o+h,a+.05),[0,0,1],Uo),tr(t,m(u,o+h,a),m(p,o+h,a),m(p,o+h,a+.05),m(u,o+h,a+.05),[Math.cos((u+p)/2),Math.sin((u+p)/2),0],Uo),tr(t,m(u,o,a),m(p,o,a),m(p,o,a+.05),m(u,o,a+.05),[-Math.cos((u+p)/2),-Math.sin((u+p)/2),0],Uo)}for(let v of[-1,1]){let u=e+v*o,p=e+v*(o+h);Xr(t,u,n,a,p,r,a+.05,Uo),Xr(t,u-v*.02,r-.12,a,p+v*.06,r,a+.09,Uo)}Xr(t,e-.11,r+o-.04,a,e+.11,r+o+h+.1,a+.09,Uo),t.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],e,a-.62,40,{mat:()=>Uo})}var i_=Vr.sill+.4,c_=Jt.z0-.62;function l_(t){tr(t,[14,0,Jt.z0-rn],[Jt.x1+rn,0,Jt.z0-rn],[Jt.x1+rn,0,Jt.z1+rn],[14,0,Jt.z1+rn],[0,1,0],Uo),t.curMat=hl,dl(t,{u0:14+rn,u1:Jt.x1+2*rn,w0:Jt.z0-2*rn,w1:Jt.z0,top:()=>Jt.spring,holes:Zf.map(f=>({u0:f-Vr.r,u1:f+Vr.r,bottom:Vr.sill,head:Su(f,Vr.r,Vr.spring),noReveal:!0})),mat:hl,cuts:[Jt.x1]});for(let f of Zf)s_(t,f);t.save(),t.translate(0,0,Jt.z1),t.rotateY(Math.PI),t.translate(-(Jt.x1+2*rn),0,-2*rn);let e=f=>Jt.x1+2*rn-f;dl(t,{u0:e(Jt.x1+2*rn),u1:e(13.65),w0:0,w1:2*rn,top:()=>Jt.spring,holes:Da.map(f=>({u0:e(f+De.halfW),u1:e(f-De.halfW),bottom:De.sill,head:Su(e(f),De.halfW,De.spring)})),mat:hl,revealMat:Uo}),t.restore(),t.save(),t.translate(Jt.x1,0,0),t.rotateY(-Math.PI/2);let o=Bi.DOOR,n=Jt.zc,r=o.r;dl(t,{u0:Jt.z0-2*rn,u1:Jt.z1+2*rn,w0:-2*rn,w1:0,top:f=>f<Jt.z0||f>Jt.z1?Jt.spring:Ui(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:Su(n,r,o.spring)}],mat:hl,revealMat:Uo}),t.restore(),t.save(),t.translate(14+rn,0,0),t.rotateY(-Math.PI/2),dl(t,{u0:Jt.z0,u1:Jt.z1,w0:-0,w1:2*rn,top:()=>Au,topStep:.15,holes:[{u0:Jt.z0,u1:Jt.z1,bottom:0,head:f=>Ui(f)}],mat:hl,revealMat:Uo}),t.restore();let a=14+rn,s=Math.ceil((Jt.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(Jt.x1-a)*f/s,d=[];for(let h=0;h<=i;h++){let v=Jt.z0+(Jt.z1-Jt.z0)*h/i,u=Ui(v),p=[0,zu-u,Jt.zc-v],m=Math.hypot(p[1],p[2]);d.push(t.vert([l,u,v],[0,p[1]/m,p[2]/m],H0))}c.push(d)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Xm(t,e,o,n){let a=[];for(let s=0;s<=32;s++){let i=Jt.z0+(Jt.z1-Jt.z0)*s/32,c=Ui(i),f=zu-c,l=Jt.zc-i,d=Math.hypot(f,l),h=[c+f/d*n,i+l/d*n];a.push({y:c,z:i,iy:h[0],iz:h[1],n:[0,f/d,l/d]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];tr(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,Uo),tr(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],Uo),tr(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],Uo)}}function Qf(t,e,o,n){let s=o,i=o+n*.16;Xr(t,e-.28,0,s,e+.28,Jt.spring-.3,i,Uo),Xr(t,e-.28-.06,0,s,e+.28+.06,.32,o+n*(.16+.05),Uo),Xr(t,e-.28-.05,Jt.spring-.3,s,e+.28+.05,Jt.spring-.1,o+n*(.16+.05),Uo),Xr(t,e-.28-.1,Jt.spring-.1,s,e+.28+.1,Jt.spring,o+n*(.16+.1),Uo)}function f_(t,e){let o=Ui(Jt.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(n,e,Jt.zc,48,{mat:()=>H0});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=e+Math.cos(a)*.32,i=Jt.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=H0,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function h_(t){t.curMat=Uo;for(let[e,o]of[[Jt.z0,1],[Jt.z1,-1]])Xr(t,14.35,Jt.spring-.12,e,Jt.x1,Jt.spring,e+o*.1,Uo),Xr(t,14.35,Jt.spring-.04,e,Jt.x1,Jt.spring+.05,e+o*.18,Uo);for(let[e,o]of[[Jt.z0,1],[Jt.z1,-1]])Xr(t,14.35,0,e,Jt.x1,.42,e+o*.12,Uo),Xr(t,14.35,.42,e,Jt.x1,.5,e+o*.07,Uo);for(let e of Ym)Xm(t,e,.24,.16),Qf(t,e,Jt.z0,1),Qf(t,e,Jt.z1,-1);for(let e of[14.35+.28,Jt.x1-.28])Xm(t,e,.28,.22),Qf(t,e,Jt.z0,1),Qf(t,e,Jt.z1,-1);for(let e of Da)f_(t,e)}function u_(t){let e=Jt.z1+rn,o=e-.04,n=e+.04,r=(i,c,f,l)=>Xr(t,i,c,o,f,l,n,ul),a=De.halfW,s=(i,c,f,l,d,h)=>{let v=(u,p,m)=>[i+p*Math.cos(u),De.spring+p*Math.sin(u),m];for(let u=0;u<h;u++){let p=l+(d-l)*u/h,m=l+(d-l)*(u+1)/h;tr(t,v(p,c,o),v(m,c,o),v(m,f,o),v(p,f,o),[0,0,-1],ul),tr(t,v(p,f,n),v(m,f,n),v(m,c,n),v(p,c,n),[0,0,1],ul)}};for(let i of Da){let c=i-a,f=i+a;r(c,De.sill,c+.07,De.spring),r(f-.07,De.sill,f,De.spring),r(c,De.sill,f,De.sill+.07),r(c,De.spring-.04,f,De.spring+.04);for(let d of[-.5,0,.5])r(i+d*a-.022,De.sill,i+d*a+.022,De.spring);let l=6;for(let d=1;d<l;d++){let h=De.sill+(De.spring-De.sill)*d/l;r(c,h-.02,f,h+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let d=1;d<6;d++){let h=Math.PI*d/6,v=Math.cos(h),u=Math.sin(h),p=.02,m=(g,y)=>[i+v*g-u*p*y,De.spring+u*g+v*p*y];tr(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],ul),tr(t,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],ul)}}}function d_(){let t=[],e=Jt.z1+rn;for(let o of Da){let n=o-De.halfW,r=o+De.halfW;t.push([n,De.sill,e],[r,De.sill,e],[r,De.spring,e],[n,De.sill,e],[r,De.spring,e],[n,De.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,De.spring,e],[o+De.halfW*Math.cos(s),De.spring+De.halfW*Math.sin(s),e],[o+De.halfW*Math.cos(i),De.spring+De.halfW*Math.sin(i),e])}}return t}function Km(t,e){t.save(),t.translate(Jt.x1+rn,0,Jt.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function p_(t){Km(t,()=>{Bi.addSurround(t),Bi.addFrames(t,"fixed")})}function v_(t){return Bi.glassPanes(t||"fixed").map(([o,n,r])=>[Jt.x1+rn-r,n,Jt.zc-7+o])}function m_(t){l_(t),h_(t),u_(t),p_(t),t.curMat=[0,0,0]}var g_={x:Jt.x1+rn,zLo:Jt.zc-Bi.DOOR.r,zHi:Jt.zc+Bi.DOOR.r},So=t=>t.toFixed(4);function x_(){return`
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
		float k = floor((q.x - ${So(De.first)}) / ${So(De.pitch)} + 0.5);
		if (k < 0.0 || k > ${So(De.count-1)}) return 0.0;
		float dx = q.x - (${So(De.first)} + k * ${So(De.pitch)});
		float side = 1.0 - smoothstep(${So(De.halfW)} - soft, ${So(De.halfW)} + soft, abs(dx));
		float sill = smoothstep(${So(De.sill)} - soft, ${So(De.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${So(De.spring)}));
		float head = q.y < ${So(De.spring)} ? 1.0 : 1.0 - smoothstep(${So(De.halfW)} - soft, ${So(De.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${So(De.halfW*.5)}), 0.022, soft));
		float rowH = ${So((De.spring-De.sill)/6)};
		float ry = (q.y - ${So(De.sill)}) / rowH;
		cover = max(cover, q.y < ${So(De.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${So(De.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${So(Jt.x0)} || p.z < ${So(Jt.z0-.1)} || p.z > ${So(Jt.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${So(Jt.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${So(Jt.z1+2*rn)} - p.z) / WIN_SKY.z;
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
		${Zf.map(t=>`{ float d = abs(p.x - ${So(t)}); if (d < best) { best = d; lamp = vec3(${So(t)}, ${So(Vr.spring+.55)}, ${So(Jt.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${So(Jt.z0+1.6)} || p.z < ${So(Jt.z0-Vr.r-.1)} || p.x < ${So(Jt.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${So(Vr.r)}, ${So(Vr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${So(Jt.x0-1)}) return 0.0;
		float inC = smoothstep(${So(Jt.z0-1.5)}, ${So(Jt.z0)}, p.z) * smoothstep(${So(Jt.x0-1)}, ${So(Jt.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${So(Jt.z0)}, ${So(Jt.z1)}, p.z);
		return inC * near;
	}`}Qm.exports={wallWithHoles:dl,windowLightGLSL:x_,addWing:m_,windowGlass:d_,farDoorGlass:v_,atFarDoor:Km,FAR_DOOR:g_,vaultY:Ui,C:Jt,NICHE_X:Zf,NICHE:Vr,NICHE_PLINTH_TOP:i_,NICHE_STATUE_Z:c_,WIN:De,winCentres:Da,piers:Ym,PAINTING_X:a_,HEIGHT:Au}});var ka=bt((dA,t2)=>{"use strict";var Tu=xr(),Jo=8,Vi=.35,qs=14,Wi=4,ie={x0:qs+Vi,x1:qs+Vi+2*Wi,z0:5.9-Wi,z1:5.9+Wi,zc:5.9,cx:qs+Vi+Wi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Jo},oculus:3.3};ie.domeTop=ie.dome.base+ie.dome.r;var Xi={spokes:16,ringE:[.42,.95],bar:.035},Bn={sxz:1.32,sy:1.6,yaw:.6};Bn.crownC=[ie.cx,.4+3.4*Bn.sy,ie.zc];Bn.crownR=[2.3*Bn.sxz,1.9*Bn.sy,2.3*Bn.sxz];Bn.trunkR=.26*Bn.sxz;Bn.trunkTop=.4+2.2*Bn.sy;var Zm={inner:1.05,outer:1.62,seat:.48,soil:.4},eh=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),er=[0,0,0],ji=[11,0,0],Jf=[10,0,0],th=[9,0,0],y_=[5,0,0],Lu=[3,0,0];function _0(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Ir(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}var b_=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function w_(t){t.save(),t.translate(qs+Vi,0,0),t.rotateY(-Math.PI/2),Tu.wallWithHoles(t,{u0:0,u1:Tu.C.z0,w0:0,w1:2*Vi,top:()=>Jo,holes:[{u0:ie.zc-ie.arch.r,u1:ie.zc+ie.arch.r,bottom:0,head:b_(ie.zc,ie.arch.r,ie.arch.spring),step:.05}],mat:ji,revealMat:er,topStep:1}),t.restore();let e=qs-Vi;for(let[s,i]of[[0,ie.zc-ie.arch.r],[ie.zc+ie.arch.r,Tu.C.z0]])Ir(t,e-.12,0,s,e,.42,i,er),Ir(t,e-.07,.42,s,e,.5,i,er);let o=e,n=.24,r=40,a=(s,i,c)=>[c,ie.arch.spring+Math.sin(s)*i,ie.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;_0(t,a(i,ie.arch.r,o-.07),a(c,ie.arch.r,o-.07),a(c,ie.arch.r+n,o-.07),a(i,ie.arch.r+n,o-.07),[-1,0,0],er),_0(t,a(i,ie.arch.r+n,o),a(c,ie.arch.r+n,o),a(c,ie.arch.r+n,o-.07),a(i,ie.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],er),_0(t,a(i,ie.arch.r,o),a(c,ie.arch.r,o),a(c,ie.arch.r,o-.07),a(i,ie.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],er)}Ir(t,o-.12,ie.arch.spring+ie.arch.r-.06,ie.zc-.17,o,ie.arch.spring+ie.arch.r+n+.16,ie.zc+.17,er);for(let s of[-1,1]){let i=ie.zc+s*ie.arch.r,c=ie.zc+s*(ie.arch.r+n);Ir(t,o-.07,0,i,o,ie.arch.spring,c,er),Ir(t,o-.13,ie.arch.spring-.16,i-s*.03,o,ie.arch.spring,c+s*.08,er),Ir(t,o-.12,0,i-s*.03,o,.5,c+s*.06,er)}}function __(t){let{x0:e,x1:o,z0:n,z1:r}=ie;_0(t,[qs,0,n],[o,0,n],[o,0,r],[qs,0,r],[0,1,0],er),t.curMat=ji,_0(t,[o,0,n],[o,0,r],[o,Jo,r],[o,Jo,n],[-1,0,0],ji),_0(t,[e,0,n],[o,0,n],[o,Jo,n],[e,Jo,n],[0,0,1],ji),_0(t,[o,0,r],[e,0,r],[e,Jo,r],[o,Jo,r],[0,0,-1],ji),_0(t,[e,0,r],[e,0,n],[e,Jo,n],[e,Jo,r],[1,0,0],ji),Ir(t,o-.12,0,n,o,.42,r,er),Ir(t,e,0,n,o,.42,n+.12,er),Ir(t,e,0,r-.12,o,.42,r,er),Ir(t,o-.2,Jo-.3,n,o,Jo,r,er),Ir(t,e,Jo-.3,n,o,Jo,n+.2,er),Ir(t,e,Jo-.3,r-.2,o,Jo,r,er),Ir(t,e,Jo-.3,n,e+.2,Jo,r,er);let a=ie.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let y=Math.PI*2*g/s;i.push([ie.cx+Math.cos(y)*a,ie.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(Wi/Math.max(y,1e-6),Wi/Math.max(b,1e-6))};for(let g=0;g<s;g++){let y=Math.PI*2*g/s,b=Math.PI*2*(g+1)/s,w=c(y),_=c(b),M=[ie.cx+Math.cos(y)*w,Jo,ie.zc+Math.sin(y)*w],z=[ie.cx+Math.cos(b)*_,Jo,ie.zc+Math.sin(b)*_];_0(t,[i[g][0],Jo,i[g][1]],[i[g+1][0],Jo,i[g+1][1]],z,M,[0,-1,0],Jf)}t.lathe([[a+.02,Jo-.18,1],[a-.12,Jo-.18,1],[a-.12,Jo-.06,1],[a-.05,Jo,1],[a,Jo+.02]],ie.cx,ie.zc,s,{mat:()=>er});let f=16,l=(g,y,b)=>[ie.cx+Math.cos(g)*Math.cos(y)*b,ie.dome.base+Math.sin(y)*b,ie.zc+Math.sin(g)*Math.cos(y)*b],d=Math.PI/2;for(let g=0;g<s;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,_=d*y/f,M=d*(y+1)/f,z=(R,B)=>[-Math.cos(R)*Math.cos(B),-Math.sin(B),-Math.sin(R)*Math.cos(B)],I=[t.vert(l(b,_,a),z(b,_),th),t.vert(l(w,_,a),z(w,_),th),t.vert(l(w,M,a),z(w,M),th),t.vert(l(b,M,a),z(b,M),th)];t.tri(I[0],I[1],I[2]),t.tri(I[0],I[2],I[3])}for(let g=0;g<Xi.spokes;g++){let y=Math.PI*2*g/Xi.spokes,b=[];for(let w=0;w<=14;w++)b.push(l(y,(d-.06)*w/14,a-.04));t.tube(b,()=>.04,20,6,{mat:()=>Jf})}for(let g of Xi.ringE){let y=Math.cos(g)*(a-.04),b=ie.dome.base+Math.sin(g)*(a-.04),w=[];for(let _=0;_<=72;_++){let M=Math.PI*2*_/72;w.push([ie.cx+Math.cos(M)*y,b,ie.zc+Math.sin(M)*y])}t.tube(w,()=>.035,72,6,{mat:()=>Jf})}t.ellipsoid([ie.cx,ie.dome.base+a-.06,ie.zc],[.16,.08,.16],6,12,{mat:()=>Jf});let h=.46,v=.55,u=.12,p=(g,y,b,w)=>{Ir(t,g,h-.08,y,b,h,w,Lu);let _=b-g>w-y?[g+.25,b-.25]:[g+.06,b-.06],M=b-g>w-y?[y+.06,w-.06]:[y+.25,w-.25];Ir(t,_[0],0,M[0],_[1],h-.08,M[1],Lu)};p(o-u-v,n+1.1,o-u,r-1.1),p(e+1,n+u,o-1.1,n+u+v),p(e+1,r-u-v,o-1.1,r-u);let m=Zm;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],ie.cx,ie.zc,64,{mat:()=>Lu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],ie.cx,ie.zc,48,{mat:()=>y_})}function M_(t){w_(t),__(t),t.curMat=[0,0,0]}var Bo=t=>t.toFixed(4);function Jm(){let t=ie.dome.r,e=Xi.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${Bo(eh[0])}, ${Bo(eh[1])}, ${Bo(eh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Bo(ie.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Bo(ie.cx)}, ${Bo(ie.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Bo(t-.15)} - soft, ${Bo(t-.15)} + soft, d);
		float hw = ${Bo(Xi.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Bo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Bo(Math.PI*2/Xi.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Bo(Bn.crownC[0])}, ${Bo(Bn.crownC[1])}, ${Bo(Bn.crownC[2])});
		vec3 r = vec3(${Bo(Bn.crownR[0])}, ${Bo(Bn.crownR[1])}, ${Bo(Bn.crownR[2])});
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
		float tt = (${Bo(Bn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Bo(ie.cx)}, ${Bo(ie.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Bo(Bn.trunkR*.7)}, ${Bo(Bn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function k_(){return`
	${Jm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Bo(ie.x0-.75)} || p.z < ${Bo(ie.z0-.5)} || p.z > ${Bo(ie.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Bo(ie.x0-1.5)} || p.z < ${Bo(ie.z0-1.5)} || p.z > ${Bo(ie.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Bo(ie.x0-1.2)}, ${Bo(ie.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Bo(ie.cx)}, ${Bo(ie.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}t2.exports={addAlcove:M_,alcoveLightGLSL:k_,oculusGLSL:Jm,A:ie,BENCH:Zm,SHAFT:eh,TREE:Bn}});var or=bt((pA,o2)=>{"use strict";var Ga=0;try{let t=location.search;/[?&]night\b/.test(t)&&(Ga=1)}catch(t){}var M0=Ga,Nu=0,e2=[],oh={tick(t){let e=Nu?Math.min(.1,t-Nu):0;if(Nu=t,M0!==Ga){let o=e/2.4;M0=Ga>M0?Math.min(Ga,M0+o):Math.max(Ga,M0-o)}return oh.night},get night(){return M0*M0*(3-2*M0)},get isNight(){return Ga===1},get settled(){return M0===Ga},set(t){Ga=t?1:0,e2.forEach(e=>e(Ga))},toggle(){oh.set(!Ga)},onChange(t){e2.push(t)}};oh.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;o2.exports=oh});var B0=bt((vA,ml)=>{"use strict";var Ru=or(),{C:Cu}=xr(),{A:nh,BENCH:pl}=ka(),jn=Math.PI,S_=[18,29,40],rh=.575,U0=[],vl=(t,e,o,n,r,a,s)=>U0.push(Object.assign({x:t,y:e,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));S_.forEach(t=>{vl(1.25+rh+.48,3.25,t,[1,0],.48,rh,{s:1.2}),vl(12.75-rh-.48,3.25,t,[-1,0],.48,rh,{s:1.2})});[3,11].forEach(t=>vl(t,3.45,Cu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var E_=[14.63,19.63,24.03,28.43,32.83,Cu.x1-.28];E_.forEach(t=>vl(t,3.15,Cu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>vl(.35+.44,2.75,t,[1,0],.44,99));{let t=(pl.inner+pl.outer)/2,e=Math.atan2(-1.12,-.98);U0.push({x:nh.cx+Math.cos(e)*t,y:pl.seat+.155,z:nh.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[nh.cx,nh.zc,pl.outer+.07,pl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Ou=.13,ah=.21,nr=Ou/Math.cos(jn/6),$o=t=>t.toFixed(4);function n2(t){let o=(t||U0.map((n,r)=>r)).map(n=>{let r=U0[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${$o(r.ring[3]-.03)}) {
					float tt = ${$o(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${$o(r.x)}, ${$o(r.z)}) + D.xz * tt - vec2(${$o(r.ring[0])}, ${$o(r.ring[1])});
					T *= smoothstep(${$o(r.ring[2]-.02)}, ${$o(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${$o(r.o[0])}, ${$o(r.o[1])}));
					if (behind > ${$o(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${$o(a)}, ${$o(s)}))) * ${$o(r.back)} / behind;
						T *= smoothstep(${$o(r.hw-.04)}, ${$o(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${$o(r.x)}, ${$o(r.y)}, ${$o(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${$o(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${$o(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${$o(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${$o(n*1.7)}) + 0.04 * sin(time * 15.3 + ${$o(n*2.9)}) * sin(time * 1.9 + ${$o(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${$o(1/(r.s*r.s))}) * (1.0 - smoothstep(${$o(r.range*.6)}, ${$o(r.range)}, d));
					sum += ${$o(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${$o(jn/6)}, ${$o(jn/3)}) - ${$o(jn/6)};
		float U = tan(t) / ${$o(Math.tan(jn/6))};
		float V = (q.y / h) * (${$o(Ou/ah)} / cos(t));
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
	}`}var an=0,A_=1;function z_(){let t=[],e=[],o=[],n=[],r=[],a=(v,u,p,m)=>(t.push(v[0],v[1],v[2]),e.push(u[0],u[1],u[2]),o.push(p),n.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(v,u)=>[v[0]-u[0],v[1]-u[1],v[2]-u[2]],i=(v,u)=>[v[1]*u[2]-v[2]*u[1],v[2]*u[0]-v[0]*u[2],v[0]*u[1]-v[1]*u[0]],c=v=>{let u=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/u,v[1]/u,v[2]/u]};function f(v,u,p,m,g,y){let b=c(i(s(u,v),s(m,v))),w=a(v,b,g,[0,0]),_=a(u,b,g,[1,0]),M=a(p,b,g,[1,1]),z=a(m,b,g,[0,1]);r.push(w,_,M,w,M,z),y&&r.push(w,M,_,w,z,M)}function l(v,u,p){for(let y=0;y<v.length;y++){let b=v[Math.max(0,y-1)],w=v[Math.min(v.length-1,y+1)],_=c(s(w,b)),M=Math.abs(_[1])>.9?[1,0,0]:[0,1,0],z=c(i(_,M)),I=i(z,_),R=typeof u=="function"?u(y/(v.length-1)):u;for(let B=0;B<=6;B++){let D=B/6*jn*2,K=Math.cos(D),O=Math.sin(D),H=[z[0]*K+I[0]*O,z[1]*K+I[1]*O,z[2]*K+I[2]*O];a([v[y][0]+H[0]*R,v[y][1]+H[1]*R,v[y][2]+H[2]*R],H,p)}}let g=t.length/3-v.length*7;for(let y=0;y<v.length-1;y++)for(let b=0;b<6;b++){let w=g+y*7+b,_=w+6+1;r.push(w,_,w+1,w+1,_,_+1)}}function d(v,u,p,m,g,y,b,w,_){let M=(z,I,R)=>{let B=y+jn/6+R*jn/3;return[v[0]+Math.cos(B)*z,I,v[2]+Math.sin(B)*z]};for(let z=0;z<6;z++)f(M(m,u,z+1),M(m,u,z),M(g,p,z),M(g,p,z+1),b);if(w&&g>0)for(let z=0;z<6;z++){let I=a([v[0],p,v[2]],[0,1,0],b),R=a(M(g,p,z),[0,1,0],b),B=a(M(g,p,z+1),[0,1,0],b);r.push(I,B,R)}if(_&&m>0)for(let z=0;z<6;z++){let I=a([v[0],u,v[2]],[0,-1,0],b),R=a(M(m,u,z),[0,-1,0],b),B=a(M(m,u,z+1),[0,-1,0],b);r.push(I,R,B)}}function h(v,u,p,m,g,y,b){let w=[];for(let M=0;M<=18;M++){let z=M/18,I=(b||0)+z*m*jn*2,R=p*(1-.75*z);w.push([v[0]+u[0]*Math.cos(I)*R,v[1]+Math.sin(I)*R,v[2]+u[2]*Math.cos(I)*R])}l(w,g,y)}return U0.forEach(v=>{let u=v.s,p=Math.atan2(v.o[1],v.o[0]),m=[v.x,v.y,v.z],g=(w,_,M)=>[v.x+v.o[0]*w-v.o[1]*(M||0),v.y+_,v.z+v.o[1]*w+v.o[0]*(M||0)],y=v.y-ah*u,b=v.y+ah*u;for(let w=0;w<6;w++){let _=p+jn/6+w*jn/3,M=_+jn/3,z=nr*u*.97,I=[v.x+Math.cos(_)*z,y,v.z+Math.sin(_)*z],R=[v.x+Math.cos(M)*z,y,v.z+Math.sin(M)*z];f(R,I,[I[0],b,I[2]],[R[0],b,R[2]],A_,!0)}for(let w=0;w<6;w++){let _=p+jn/6+w*jn/3,M=nr*u;l([[v.x+Math.cos(_)*M,y-.02*u,v.z+Math.sin(_)*M],[v.x+Math.cos(_)*M,b+.02*u,v.z+Math.sin(_)*M]],.011*u,an)}d(m,y-.035*u,y,nr*u*1.12,nr*u*1.12,p,an,!0,!0),d(m,y-.1*u,y-.035*u,nr*u*.55,nr*u*1,p,an,!1,!0),d(m,y-.17*u,y-.1*u,0,nr*u*.55,p,an,!1,!1);for(let w=0;w<6;w++){let _=p+w*jn/3,M=Ou*u*1.06,z=[v.x+Math.cos(_)*M,y-.06*u,v.z+Math.sin(_)*M];h(z,[-Math.sin(_),0,Math.cos(_)],.03*u,.85,.004*u,an,.3)}d(m,b,b+.03*u,nr*u*1.14,nr*u*1.14,p,an,!1,!0),d(m,b+.03*u,b+.2*u,nr*u*1.14,nr*u*.32,p,an,!1,!1),d(m,b+.2*u,b+.27*u,nr*u*.34,nr*u*.34,p,an,!1,!1),d(m,b+.27*u,b+.37*u,nr*u*.42,0,p,an,!1,!0),l([[v.x,b+.36*u,v.z],[v.x,b+.47*u,v.z]],w=>.01*u*(1-.7*w),an),d([v.x,0,v.z],b+.44*u,b+.47*u,.018*u,0,p,an,!1,!0);for(let w=0;w<6;w++){let _=p+jn/6+w*jn/3,M=nr*u*1.14,z=[v.x+Math.cos(_)*M,b+.03*u,v.z+Math.sin(_)*M];l([z,[z[0],z[1]+.09*u,z[2]]],I=>.008*u*(1-.8*I),an),d([z[0],0,z[2]],z[1]+.035*u,z[1]+.06*u,.014*u,.014*u,_,an,!0,!0)}if(v.mount==="wall"){let w=v.back,_=y-.32,M=g(-w,0,0);((D,K,O)=>{let H=[v.o[0],0,v.o[1]],ft=[-v.o[1],0,v.o[0]],It=(st,Wt,Se)=>[M[0]+ft[0]*st+H[0]*Se,Wt,M[2]+ft[2]*st+H[2]*Se],Mt=.03,vt=.065;f(It(-O,D,vt),It(O,D,vt),It(O,K,vt),It(-O,K,vt),an,!0),f(It(O,D,Mt),It(O,D,vt),It(O,K,vt),It(O,K,Mt),an,!0),f(It(-O,D,vt),It(-O,D,Mt),It(-O,K,Mt),It(-O,K,vt),an,!0),f(It(-O,K,vt),It(O,K,vt),It(O,K,Mt),It(-O,K,Mt),an,!0),f(It(-O,D,Mt),It(O,D,Mt),It(O,D,vt),It(-O,D,vt),an,!0),d([M[0]+H[0]*vt,0,M[2]+H[2]*vt],K,K+.05,O*.6,0,p,an,!1,!0),d([M[0]+H[0]*vt,0,M[2]+H[2]*vt],D-.05,D,0,O*.6,p,an,!1,!1)})(_-.2,_+.2,.07);let I=[];for(let D=0;D<=14;D++){let K=D/14,O=-w+.05+K*(w-.05),H=_+.04+(y-.17*u-_-.04)*Math.pow(K,2.2);I.push(g(O,H-v.y,0))}l(I,D=>.022*(1-.3*D),an);let R=[];for(let D=0;D<=10;D++){let K=D/10;R.push(g(-w+.05+K*w*.6,_-.14+K*.16+.05*Math.sin(K*jn)-v.y,0))}l(R,.009,an);let B=R[R.length-1];h([B[0]-v.o[0]*.03,B[1]+.02,B[2]-v.o[1]*.03],[v.o[0],0,v.o[1]],.045,1.1,.007,an,-.4),[.3,.55].forEach(D=>{let K=I[Math.round(D*14)],O=R[Math.round(D/.62*10)]||R[10];l([K,O],.006,an)}),[-1,1].forEach(D=>{let K=g(-.05,-ah*u-.2*u,0);h([K[0]-v.o[1]*D*.05,K[1],K[2]+v.o[0]*D*.05],[-v.o[1]*D,0,v.o[0]*D],.05*u,.9,.006,an,jn)})}else for(let w=0;w<3;w++){let _=p+w*jn*2/3,M=[v.x+Math.cos(_)*nr*u*.7,y-.035*u,v.z+Math.sin(_)*nr*u*.7],z=[v.x+Math.cos(_)*nr*u*1.25,y-.17*u,v.z+Math.sin(_)*nr*u*1.25];l([M,z],.012*u,an)}}),{pos:t,nrm:e,kind:o,uv:n,elems:r}}ml.exports=t=>{let e=z_(),o=t({vert:`
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
		${n2()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>Ru.night}}),n=[],r=[];U0.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:t.context("time"),night:()=>Ru.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Ru.night>.01&&a()}};ml.exports.lanternGLSL=n2;ml.exports.LANTERNS=U0;ml.exports.TREE_LANTERN=[U0.length-1]});var V0=bt((mA,Yr)=>{"use strict";var T_=or(),qo=Math.PI,Wn=t=>(+t).toFixed(4),L_=t=>`vec3(${Wn(t[0])}, ${Wn(t[1])}, ${Wn(t[2])})`,He={x:-7,z:44.5},ao=5.2,dr=15,ue={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},r0={z0:42.2,z1:46.8,top:6.3,x:.35},ch=[He.x-Math.sqrt(ao*ao-3.05*3.05),0,0],zn={x0:-2.05+ch[0],x1:ch[0],z0:41.45,z1:47.55,top:4.3},Pu=[[zn.x1+.05,2.35,zn.z0-.45],[zn.x1+.05,2.35,zn.z1+.45]].map(([t,e,o])=>{let n=Math.atan2(o-He.z,t-He.x);return[He.x+Math.cos(n)*(ao-.16),e,He.z+Math.sin(n)*(ao-.16)]}),Co={ri:3.4,ro:ao,a0:-35*qo/180,rise:.1836,step:3.6*qo/180,n:88,thick:.36};Co.k=Co.rise/Co.step;var $r=t=>Co.a0-t,W0=t=>t*Co.k,hn={x:He.x+.1,z:He.z-.15,yaw:-qo/2,scale:1.3},k0=hn.scale/1.1,gl={keyX0:hn.x-.524*k0,keyX1:hn.x+.491*k0,keyTop:.647*k0,keyFront:hn.z+.808*k0,keyBack:hn.z+.72*k0,stoolX:hn.x-.041*k0,stoolZ:hn.z+1.122*k0,stoolFront:hn.z+.96*k0,stoolTop:.37*k0,heading:qo},ih=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function a2(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function N_(t,e){let o=1e9;for(let n=0;n<ih.length-1;n++){let[r,a]=ih[n],[s,i]=ih[n+1],c=s-r,f=i-a,l=Math.max(0,Math.min(1,((t-r)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-r-c*l,e-a-f*l))}return o}var sh=t=>ue.spring+Math.sqrt(Math.max(0,ue.r*ue.r-(t-ue.zc)*(t-ue.zc))),j0=t=>He.x+Math.sqrt(Math.max(0,ao*ao-(t-He.z)*(t-He.z)));function Yi(t,e){return Math.hypot(t-He.x,e-He.z)<ao||t<=0&&t>He.x&&e>ue.z0&&e<ue.z1||t>zn.x0&&t<zn.x1&&e>zn.z0&&e<zn.z1}function R_(t,e){if(Math.hypot(t-He.x,e-He.z)<Co.ri-.05)return 99;let n=Math.atan2(e-He.z,t-He.x),r=Co.a0-n;for(;r<0;)r+=2*qo;for(;r>=2*qo;)r-=2*qo;return r>Co.n*Co.step?99:W0(r)-Co.thick}function C_(){let t=[],e=a2(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-hn.x,c=s-hn.z,f=Math.cos(hn.yaw),l=Math.sin(hn.yaw),d=(f*i-l*c)/hn.scale,h=(l*i+f*c)/hn.scale;return d>-1.05&&d<1.3&&h>-.7&&h<.72},r=0;for(;t.length<980&&r<6e4;){r++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(ao-1.45),i=e()*2*qo,c=He.x+Math.cos(i)*s,f=He.z+Math.sin(i)*s;if(!Yi(c,f)||s>ao-.18||n(c,f)||N_(c,f)<.62||R_(c,f)<2.3||c<zn.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let d=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,d,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Co.step,f=$r(c),l=Co.ri+.55+e()*(Co.ro-Co.ri-.75),d=.022+e()*.016;t.push([He.x+Math.cos(f)*l,(a+1)*Co.rise,He.z+Math.sin(f)*l,d,.05+e()*.14,e()*100])}}for(let a of Pu)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[zn.z0-.35,zn.z1+.35])for(let s=0;s<9;s++){let i=zn.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-He.x,c-He.z)>ao-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function O_(t){let o=a2(77),n=[];for(let r=0;r<14;r++){let a=t[Math.floor(o()*t.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;n.forEach((l,d)=>{let h=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;h<f&&(f=h,c=d)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/t.length])}var Iu=C_(),r2=O_(Iu.filter(t=>t[1]<2||t[1]>2.5)).concat(Pu.map(t=>[t[0],t[1]+.35,t[2],.035]));function s2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${r2.map((e,o)=>`
		{
			vec3 d = ${L_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Wn(5.3+o*.71)} + ${Wn(o*1.9)}) + 0.06 * sin(time * ${Wn(11.7+o*1.3)} + ${Wn(o*.7)});
			float w = ${Wn(e[3]*r2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Wn(dr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Wn(He.x)}, ${Wn(dr)}, ${Wn(He.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Wn(gl.stoolX)}, ${Wn(gl.keyFront+.1)})));
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
	}`}var Ke={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function i2(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),d=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,d)},t.tri=(e,o,n,r,a)=>{let s=t.v(e,r,a),i=t.v(o,r,a),c=t.v(n,r,a);t.idx.push(s,i,c)},t}function P_(){let t=i2(),e=(n,r,a)=>[He.x+Math.cos(n)*r,a,He.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>zn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,f=a+.2;if(!(Yi(s,c)||Yi(i,c)||Yi(s,f)||Yi(i,f)||Yi((s+i)/2,(c+f)/2)))continue;let l=c,d=f;s>j0(ue.z0)-.3&&(l=Math.max(l,ue.z0),d=Math.min(d,ue.z1),d<=l)||t.quad([s,0,l],[s,0,d],[i,0,d],[i,0,l],[0,1,0],Ke.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*qo,s=(r+1)/360*2*qo,i=(a+s)/2,c=e(i,ao,0),f=0;c[0]>He.x&&c[2]>ue.z0-.02&&c[2]<ue.z1+.02&&(f=Math.max(sh(Math.min(Math.max(e(a,ao,0)[2],ue.z0),ue.z1)),sh(Math.min(Math.max(e(s,ao,0)[2],ue.z0),ue.z1)))),c[0]<He.x&&c[2]>zn.z0-.02&&c[2]<zn.z1+.02&&(f=zn.top);let l=a*ao,d=s*ao,h=o(a).map(p=>-p),v=o(s).map(p=>-p),u=[f];for(let p=Math.ceil(f/2.5)*2.5;p<dr;p+=2.5)p>f+.01&&u.push(p);u.push(dr);for(let p=0;p<u.length-1;p++){let m=u[p],g=u[p+1],y=t.v(e(a,ao,m),h,Ke.WALL,[l,m]),b=t.v(e(s,ao,m),v,Ke.WALL,[d,m]),w=t.v(e(s,ao,g),v,Ke.WALL,[d,g]),_=t.v(e(a,ao,g),h,Ke.WALL,[l,g]);t.idx.push(y,b,w,y,w,_)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*qo,f=(i+1)/360*2*qo,l=(c+f)/2,d=e(l,ao,0);if(r<1&&(d[0]>He.x&&d[2]>ue.z0&&d[2]<ue.z1||d[0]<He.x&&d[2]>zn.z0&&d[2]<zn.z1))continue;let h=ao-s;t.quad(e(c,h,r),e(f,h,r),e(f,h,r+a),e(c,h,r+a),o(l).map(v=>-v),Ke.WALL,[[c*ao,r+100],[f*ao,r+100],[f*ao,r+a+100],[c*ao,r+a+100]]),t.quad(e(c,h,r+a),e(f,h,r+a),e(f,ao,r+a),e(c,ao,r+a),[0,1,0],Ke.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&t.quad(e(c,ao,r),e(f,ao,r),e(f,h,r),e(c,h,r),[0,-1,0],Ke.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=r0.x;for(let[a,s]of[[ue.z0,1],[ue.z1,-1]]){let i=j0(a);t.quad([n,0,a],[i,0,a],[i,ue.spring,a],[n,ue.spring,a],[0,0,s],Ke.WALL,[[n,0],[i,0],[i,ue.spring],[n,ue.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*qo,i=(a+1)/r*qo,c=ue.zc-Math.cos(s)*ue.r,f=ue.zc-Math.cos(i)*ue.r,l=ue.spring+Math.sin(s)*ue.r,d=ue.spring+Math.sin(i)*ue.r,h=[0,-Math.sin(s),Math.cos(s)],v=[0,-Math.sin(i),Math.cos(i)],u=t.v([n,l,c],h,Ke.WALL,[n,s*ue.r]),p=t.v([j0(c),l,c],h,Ke.WALL,[j0(c),s*ue.r]),m=t.v([j0(f),d,f],v,Ke.WALL,[j0(f),i*ue.r]),g=t.v([n,d,f],v,Ke.WALL,[n,i*ue.r]);t.idx.push(u,p,m,u,m,g)}}{let n=r0.x,r=.05;for(let f=r0.z0;f<r0.z1-1e-6;f+=r){let l=f,d=Math.min(r0.z1,f+r),v=(u=>u>ue.z0&&u<ue.z1)((l+d)/2)?Math.max(sh(l),sh(d)):0;t.quad([n,v,l],[n,v,d],[n,r0.top,d],[n,r0.top,l],[1,0,0],Ke.HALLSTONE,[[l,v],[d,v],[d,r0.top],[l,r0.top]])}let a=.32,s=.06,i=n+s,c=36;for(let f=0;f<c;f++){let l=f/c*qo,d=(f+1)/c*qo,h=(g,y)=>[i,ue.spring+Math.sin(g)*y,ue.zc-Math.cos(g)*y],v=ue.r,u=ue.r+a;t.quad(h(l,v),h(d,v),h(d,u),h(l,u),[1,0,0],Ke.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let p=(g,y,b)=>[b,ue.spring+Math.sin(g)*y,ue.zc-Math.cos(g)*y],m=[0,Math.sin((l+d)/2),-Math.cos((l+d)/2)];t.quad(p(l,u,n),p(d,u,n),p(d,u,i),p(l,u,i),m,Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(p(l,v,n),p(d,v,n),p(d,v,i),p(l,v,i),m.map(g=>-g),Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,d]of[[ue.z0-a,ue.z0,-1],[ue.z1,ue.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,ue.spring,l],[i,ue.spring,f],[1,0,0],Ke.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=d<0?f:l,v=d<0?l:f;t.quad([n,0,h],[i,0,h],[i,ue.spring,h],[n,ue.spring,h],[0,0,d],Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,0,v],[i,0,v],[i,ue.spring,v],[n,ue.spring,v],[0,0,-d],Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let u=ue.spring-.16,p=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;t.quad([n+m,u,g],[n+m,u,y],[n+m,u+p,y],[n+m,u+p,g],[1,0,0],Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,u+p,g],[n+m,u+p,g],[n+m,u+p,y],[n,u+p,y],[0,1,0],Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,u,g],[n,u,y],[n+m,u,y],[n+m,u,g],[0,-1,0],Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])t.quad([n,u,b],[n+m,u,b],[n+m,u+p,b],[n,u+p,b],[0,0,b===g?-1:1],Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=ue.spring+ue.r-.05,l=ue.spring+ue.r+a+.12,d=.16,h=.22,v=i+.04;t.quad([v,f,ue.zc-d],[v,f,ue.zc+d],[v,l,ue.zc+h],[v,l,ue.zc-h],[1,0,0],Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let u of[-1,1])t.quad([n,f,ue.zc+u*d],[v,f,ue.zc+u*d],[v,l,ue.zc+u*h],[n,l,ue.zc+u*h],[0,0,u],Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([n,l,ue.zc-h],[v,l,ue.zc-h],[v,l,ue.zc+h],[n,l,ue.zc+h],[0,1,0],Ke.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=zn;t.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],Ke.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let d=He.x-Math.sqrt(ao*ao-(f-He.z)*(f-He.z));t.quad([n,0,f],[d,0,f],[d,i,f],[n,i,f],[0,0,l],Ke.WALL,[[n,0],[d,0],[d,i],[n,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,d=a+(s-a)*(f+1)/c,h=He.x-Math.sqrt(ao*ao-(l-He.z)**2),v=He.x-Math.sqrt(ao*ao-(d-He.z)**2);t.quad([n,i,l],[h,i,l],[v,i,d],[n,i,d],[0,-1,0],Ke.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,d=a+(s-a)*(f+1)/c,h=He.x-Math.sqrt(ao*ao-(l-He.z)**2)+.05,v=He.x-Math.sqrt(ao*ao-(d-He.z)**2)+.05;t.quad([h,i-.3,l],[v,i-.3,d],[v,i,d],[h,i,l],[1,0,0],Ke.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,ao];for(let a=0;a<120;a++){let s=a/120*2*qo,i=(a+1)/120*2*qo,c=(s+i)/2;c>qo&&(c-=2*qo);for(let f=0;f<r.length-1;f++){let l=r[f],d=r[f+1],h=c*180/qo;l>=3.3&&h>8&&h<85||t.quad(e(s,l,dr),e(s,d,dr),e(i,d,dr),e(i,l,dr),[0,-1,0],Ke.CEIL,[[s*l,l],[s*d,d],[i*d,d],[i*l,l]])}t.quad(e(s,1.15,dr),e(i,1.15,dr),e(i,1.15,dr+.7),e(s,1.15,dr+.7),o(c).map(f=>-f),Ke.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([He.x,dr+.7,He.z],e(i,1.15,dr+.7),e(s,1.15,dr+.7),[0,-1,0],Ke.OCULUS)}}{let n=Co.ri,r=Co.ro,a=Co.n*Co.step;for(let c=0;c<Co.n;c++){let f=c*Co.step,l=(c+1)*Co.step,d=$r(f),h=$r(l),v=(c+1)*Co.rise,u=c*Co.rise,p=2;for(let y=0;y<p;y++){let b=d+(h-d)*y/p-(y===0?.004:0),w=d+(h-d)*(y+1)/p;t.quad(e(b,n,v),e(b,r,v),e(w,r,v),e(w,n,v),[0,1,0],Ke.STEP,[[n*b,c],[r*b,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(d),0,Math.cos(d)],g=d-.004;t.quad(e(g,n,u),e(g,r,u),e(g,r,v),e(g,n,v),m,Ke.STEP,[[n*d,c+.5],[r*d,c+.5],[r*d,c+.5],[n*d,c+.5]]),t.quad(e(d,n,W0(f)+.06),e(h,n,W0(l)+.06),e(h,n,v),e(g,n,v),o((d+h)/2).map(y=>-y),Ke.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*qo/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,d=$r(f),h=$r(l),v=W0(f),u=W0(l),p=v-Co.thick,m=u-Co.thick,g=o(d).map(z=>-z),y=o(h).map(z=>-z),b=t.v(e(d,n,p),g,Ke.STRING,[f*n,0]),w=t.v(e(h,n,m),y,Ke.STRING,[l*n,0]),_=t.v(e(h,n,u+.06),y,Ke.STRING,[l*n,1]),M=t.v(e(d,n,v+.06),g,Ke.STRING,[f*n,1]);t.idx.push(b,w,_,b,_,M);for(let z=0;z<i.length-1;z++){let I=i[z],R=i[z+1],B=D=>{let K=o(D);return[-K[0]*.12,-.99,-K[2]*.12]};t.quad(e(d,I,p),e(d,R,p),e(h,R,m),e(h,I,m),B((d+h)/2),Ke.SOFFIT,[[f*I,I],[f*R,R],[l*R,R],[l*I,I]])}}}return t}function I_(){let t=i2(),e=Co.ri+.045,o=Co.n*Co.step,n=Math.ceil(o/(.8*qo/180)),r=.92,a=(c,f,l)=>[He.x+Math.cos(c)*f,l,He.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,d=$r(f),h=$r(l),v=W0(f)+.06,u=W0(l)+.06,p=s(d).map(z=>-z),m=s(h).map(z=>-z),g=f*e,y=l*e,b=t.v(a(d,e,v),p,Ke.RAILING,[g,0]),w=t.v(a(h,e,u),m,Ke.RAILING,[y,0]),_=t.v(a(h,e,u+r),m,Ke.RAILING,[y,r]),M=t.v(a(d,e,v+r),p,Ke.RAILING,[g,r]);t.idx.push(b,w,_,b,_,M)}((c,f,l,d)=>{let v=p=>{let m=$r(p),g=W0(p)+.06+f,y=a(m,e+c,g),b=s(m),w=[];for(let _=0;_<8;_++){let M=_/8*2*qo,z=[b[0]*Math.cos(M),Math.sin(M),b[2]*Math.cos(M)];w.push([[y[0]+z[0]*l,y[1]+z[1]*l,y[2]+z[2]*l],z])}return w},u=v(0);for(let p=1;p<=n;p++){let m=v(p/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=t.v(u[g][0],u[g][1],d),w=t.v(m[g][0],m[g][1],d),_=t.v(m[y][0],m[y][1],d),M=t.v(u[y][0],u[y][1],d);t.idx.push(b,w,_,b,_,M)}u=m}})(0,r+.02,.028,Ke.IRON);for(let c of Pu){let f=Math.atan2(c[2]-He.z,c[0]-He.x),l=[Math.cos(f),0,Math.sin(f)],d=12;for(let p=0;p<d;p++){let m=p/d*2*qo,g=(p+1)/d*2*qo,y=(b,w,_)=>[c[0]+Math.cos(b)*w,_,c[2]+Math.sin(b)*w];t.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Ke.IRON),t.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Ke.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],v=[-l[2],0,l[0]],u=.018;t.quad([h[0]-v[0]*u,h[1],h[2]-v[2]*u],[h[0]+v[0]*u,h[1],h[2]+v[2]*u],[c[0]+v[0]*u,c[1]-.05,c[2]+v[2]*u],[c[0]-v[0]*u,c[1]-.05,c[2]-v[2]*u],[-l[0],.5,-l[2]],Ke.IRON)}{let c=$r(0),f=a(c,e,0),l=10;for(let d=0;d<l;d++){let h=d/l*2*qo,v=(d+1)/l*2*qo,u=(p,m,g)=>[f[0]+Math.cos(p)*m,g,f[2]+Math.sin(p)*m];t.quad(u(h,.035,0),u(v,.035,0),u(v,.035,r+.1),u(h,.035,r+.1),[Math.cos((h+v)/2),0,Math.sin((h+v)/2)],Ke.IRON),t.quad(u(h,.06,r+.1),u(v,.06,r+.1),u(v,.03,r+.2),u(h,.03,r+.2),[Math.cos((h+v)/2)*.8,.6,Math.sin((h+v)/2)*.8],Ke.IRON)}}return t}function $_(){let t=[],e=[],o=[],n=[];for(let a of Iu){let[s,i,c,f,l,d]=a,h=t.length/3;for(let u=0;u<=7;u++){let p=u/7*2*qo+d,m=Math.cos(p),g=Math.sin(p);t.push(s+m*f,i,c+g*f,s+m*f,i+l,c+g*f),e.push(m,0,g,m,0,g),o.push(0,l,d,1,l,d)}for(let u=0;u<7;u++){let p=h+u*2;n.push(p,p+2,p+3,p,p+3,p+1)}let v=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,d);for(let u=0;u<7;u++){let p=u/7*2*qo+d;t.push(s+Math.cos(p)*f,i+l,c+Math.sin(p)*f),e.push(0,1,0),o.push(1,l,d)}for(let u=0;u<7;u++)n.push(v,v+1+u,v+1+(u+1)%7)}return{pos:t,nrm:e,info:o,idx:n}}function F_(){let t=[],e=[],o=[],n=[];for(let r of Iu){let[a,s,i,,c,f]=r,l=t.length/3;for(let d of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(d[0],d[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:n}}function q_(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),d=new Float32Array(o*3),h=new Float32Array(o*3),v=new Float32Array(o),u=Math.cos(hn.yaw),p=Math.sin(hn.yaw),m=hn.scale;for(let g=0;g<o;g++){let y=(r[0]+i[g*3]/65535*a[0])*m,b=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;d[g*3]=hn.x+u*y+p*w,d[g*3+1]=b,d[g*3+2]=hn.z-p*y+u*w;let _=f[g*3]/127,M=f[g*3+1]/127,z=f[g*3+2]/127;h[g*3]=u*_+p*z,h[g*3+1]=M,h[g*3+2]=-p*_+u*z,v[g]=l[g]}return{pos:d,nrm:h,mat:v,idx:new Uint32Array(c)}}function D_(){let t=[],e=(d,h)=>[He.x+Math.cos(d)*h,He.z+Math.sin(d)*h];t.push([[0,ue.z0],[j0(ue.z0),ue.z0]]),t.push([[j0(ue.z1),ue.z1],[0,ue.z1]]);let o=Math.asin((ue.z1-He.z)/ao),n=72;for(let d=0;d<n;d++){let h=o+d/n*(2*qo-2*o),v=o+(d+1)/n*(2*qo-2*o);t.push([e(h,ao-.25),e(v,ao-.25)])}let r=ch[0]-.55+.35;t.push([[r,zn.z0],[r,zn.z1]]);let a=2.4/Co.k,s=12;for(let d=0;d<s;d++){let h=$r(d/s*a),v=$r((d+1)/s*a);t.push([e(h,Co.ri-.2),e(v,Co.ri-.2)])}t.push([e($r(0),Co.ri-.2),e($r(0),ao)]),t.push([e($r(a),Co.ri-.2),e($r(a),ao)]);let i=Math.cos(hn.yaw),c=Math.sin(hn.yaw),f=hn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([d,h])=>[hn.x+(i*d+c*h)*f,hn.z+(-c*d+i*h)*f]);for(let d=0;d<4;d++)t.push([l[d],l[(d+1)%4]]);return t}Yr.exports=t=>{let e=P_(),o=I_(),n=$_(),r=F_(),a=B0(),s=`
	precision highp float;
	${T_.GLSL}
	uniform float time;
	${s2()}
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
	}`,i=`
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
	}`,c=t({vert:i,frag:`${s}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Wn(dr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Wn(He.x)}, ${Wn(He.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Wn((Co.ri+Co.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Wn(He.x)}, ${Wn(He.z)});
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:new Uint32Array(e.idx),cull:{enable:!1}}),f=t({vert:i,frag:`${s}
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
		}`,attributes:{position:o.pos,normal:o.nrm,kind:o.kind,uv:o.uv},elements:new Uint32Array(o.idx),cull:{enable:!1}}),l=t({vert:`
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
		}`,frag:`${s}
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),d=t({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=q_(m);h=t({vert:`
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
				}`,frag:`${s}
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let v=(()=>{let m=[],g=[],y=[],b=[],_=[He.x,dr-.3,He.z],M=[gl.stoolX,.02,gl.keyFront+.1],z=1.25,I=2.35;for(let R=0;R<=40;R++){let B=R/40*2*qo,D=Math.cos(B),K=Math.sin(B);m.push(_[0]+D*z,_[1],_[2]+K*z,M[0]+D*I,M[1],M[2]+K*I),g.push(D,.08,K,D,.08,K),y.push(1,0)}for(let R=0;R<40;R++){let B=R*2;b.push(B,B+1,B+3,B,B+3,B+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),u=t({vert:`
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
		}`,attributes:{position:v.pos,normal:v.nrm,hh:v.hh},elements:v.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function p(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(u(),d({halo:1}),d({halo:0}))}return p};Yr.exports.C=He;Yr.exports.R=ao;Yr.exports.PASS=ue;Yr.exports.SURR=r0;Yr.exports.OFF=ch;Yr.exports.BAY=zn;Yr.exports.PATH=ih;Yr.exports.PIANO=hn;Yr.exports.PLAY=gl;Yr.exports.TOP=dr;Yr.exports.roomGLSL=s2;Yr.exports.segments=D_});var g2=bt((gA,m2)=>{"use strict";var G_=Ps(),{addFlutedColumn:c2,addStatue:H_,addPlant:U_}=Im(),l2=G0(),B_=Hi(),Ha=xr(),j_=ka(),Qi=V0(),Eo=14,Ln=Ha.C.hallEnd+.35,Vo=8,Io=.35,$u=1.15,Fu=1.15,qu=[18,29,40],W_=[[[0,0],[0,Qi.PASS.z0]],[[0,Qi.PASS.z1],[0,Ln]],[[Eo,Ln],[Eo,0]],[[0,0],[Eo,0]],[[Eo,Ln],[0,Ln]]],d2=[];for(let t of qu)for(let e of[1.25,Eo-1.25]){let o=$u/2,n=Fu/2;d2.push([[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]])}var fh=12,p2=2.95,v2=.62,dh=p2+v2,hh=[{file:"venus.bin",x:1.85,z:Ln-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Eo-2.1,z:Ln-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Ha.NICHE_X[0],z:Ha.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Ha.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Ha.NICHE_X[1],z:Ha.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Ha.NICHE_PLINTH_TOP,mat:3}],V_={x0:Io,x1:3.15,z0:3.6,z1:8.2,top:1},f2=.8,ph=1.17,xl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{xl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),xl.push({x:Eo-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function Du(t,e,o,n){return[[[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]]]}var vh=[];for(let t of[-1,1])vh.push(...Du(Eo/2+t*dh,fh,.85,.85));for(let t of hh.filter(e=>e.pedestal))vh.push(...Du(t.x,t.z,ph*1.1,ph*1.1));for(let t of xl)vh.push(...Du(t.x,t.z,.42,.42));var X_=W_.concat(d2,vh,Qi.segments());function Y_(t){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of t){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)n(f,l,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let d=o.get(s+f+":"+(i+l));d&&c.push(...d)}return[...new Set(c)]}}}var uh=[],Tn={curMat:[0,0,0]};function Gu(t,e,o,n,r,a,s){let i=t.length/3;t.push(...o,...n,...r,...a),e.push(...s,...s,...s,...s);let c=Tn.curMat;return uh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Oo(t,e,o,n,r,a,s,i,c){let f=(l,d,h,v,u)=>{o.push(...Gu(t,e,l,d,h,v,u))};f([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),f([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),f([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),f([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),f([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),f([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function Ki(t,e,o,n,r){let a=Tn,s=a.vert(t,r),i=a.vert(e,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(s,i,c),a.tri(i,f,c)}function h2(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),d=Math.sin(c),h=Math.cos(f),v=Math.sin(f),u=[t+o*l,e+o*d],p=[t+o*h,e+o*v],m=[t+n*l,e+n*d],g=[t+n*h,e+n*v];Ki([u[0],u[1],r],[p[0],p[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Ki([u[0],u[1],a],[p[0],p[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;Ki([u[0],u[1],r],[p[0],p[1],r],[u[0],u[1],a],[p[0],p[1],a],[-Math.cos(y),-Math.sin(y),0]),Ki([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function K_(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),d=e+o*Math.sin(c),h=t+o*Math.cos(f),v=e+o*Math.sin(f);Ki([l,d,r],[h,v,r],[l,n,r],[h,n,r],[0,0,-1]),Ki([l,d,a],[h,v,a],[l,n,a],[h,n,a],[0,0,1])}}function Q_(t,e,o,n){let r=Eo/2,a=p2,s=3,i=a+.42,c=i+.15,f=v2,l=dh,d=5.98,h=n-.45,v=n+.45,u=64,p=c2(Tn,r-l,n,0,d,f);c2(Tn,r+l,n,0,d,f),Tn.curMat=[0,0,0],h2(r,s,a,i,h,v,u),h2(r,s,i,c,h-.07,v+.07,u),K_(r,s,c,p+.05,h,v,u);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;Oo(t,e,o,Math.min(y,b),s,h,Math.max(y,b),p+.05,v)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);Oo(t,e,o,Math.min(y,b),s-.16,n-.6,Math.max(y,b),s,n+.6)}let m=l+f*1.42+.45;Oo(t,e,o,r-m,p,n-.7,r+m,p+.44,n+.7),Oo(t,e,o,r-m+.12,p+.44,n-.62,r+m-.12,p+.7,n+.62),Oo(t,e,o,r-m-.1,p+.7,n-.84,r+m+.1,p+.84,n+.84),Oo(t,e,o,r-m-.22,p+.84,n-.96,r+m+.22,p+1,n+.96),Oo(t,e,o,r-.3,s+a-.1,n-.56,r+.3,p,n+.56)}function u2(t,e,o,n,r){Oo(t,e,o,n-.72,0,r-.72,n+.72,.2,r+.72),Oo(t,e,o,n-.58,.2,r-.58,n+.58,.4,r+.58),Oo(t,e,o,n-$u/2,.4,r-Fu/2,n+$u/2,Vo-1.35,r+Fu/2),Oo(t,e,o,n-.67,.42,r-.67,n+.67,.62,r+.67),Oo(t,e,o,n-.67,Vo-1.58,r-.67,n+.67,Vo-1.35,r+.67),Oo(t,e,o,n-.82,Vo-1.35,r-.82,n+.82,Vo-1.05,r+.82),Oo(t,e,o,n-.66,Vo-1.05,r-.66,n+.66,Vo-.78,r+.66),Oo(t,e,o,n-.92,Vo-.78,r-.92,n+.92,Vo-.55,r+.92),Oo(t,e,o,n-.78,Vo-.55,r-.78,n+.78,Vo-.3,r+.78),Oo(t,e,o,n-.92,Vo-.3,r-.92,n+.92,Vo-.1,r+.92)}function lh(t,e,o,n,r){r==="left"?(Oo(t,e,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Oo(t,e,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Oo(t,e,o,Eo-.14,1,n-3.8/2,Eo+.08,5.7,n+3.8/2),Oo(t,e,o,Eo-.18,1+.18,n-3.8/2+.18,Eo+.08+.04,5.7-.18,n+3.8/2-.18))}function Z_(t,e,o,n){Oo(t,e,o,.65,Vo-.16,n-1.65,.65+.22,Vo,n+1.65),Oo(t,e,o,Eo-.65-.22,Vo-.16,n-1.65,Eo-.65,Vo,n+1.65),Oo(t,e,o,.65,Vo-.16,n-1.65,Eo-.65,Vo,n-1.43),Oo(t,e,o,.65,Vo-.16,n+1.43,Eo-.65,Vo,n+1.65),o.push(...Gu(t,e,[.65+.22,Vo-.16,n-1.43],[Eo-.65-.22,Vo-.16,n-1.43],[.65+.22,Vo-.16,n+1.43],[Eo-.65-.22,Vo-.16,n+1.43],[0,-1,0]))}m2.exports=function(){let t=[],e=[],o=[];uh=[],Tn=G_.createBuilder(t,e,o,uh),o.push(...Gu(t,e,[0,0,0],[Eo,0,0],[0,0,Ln],[Eo,0,Ln],[0,1,0])),B_.addSkylight(Tn,[0,0,0],Ln),Tn.curMat=[0,0,0];{let c=Qi.SURR;Oo(t,e,o,-Io,0,0,Io,Vo,c.z0),Oo(t,e,o,-Io,0,c.z1,Io,Vo,Ln),Oo(t,e,o,-Io,c.top,c.z0,Io,Vo,c.z1)}Oo(t,e,o,Eo-Io,0,Ha.C.z1,Eo+Io,Vo,Ln-Io),Oo(t,e,o,Eo-Io-.12,0,Ha.C.z1+2*Io,Eo-Io,.42,Ln-Io),Oo(t,e,o,Eo-Io-.07,.42,Ha.C.z1+2*Io,Eo-Io,.5,Ln-Io);for(let[c,f]of[[0,Qi.SURR.z0],[Qi.SURR.z1,Ln-Io]])Oo(t,e,o,Io,0,c,Io+.12,.42,f),Oo(t,e,o,Io,.42,c,Io+.07,.5,f);Oo(t,e,o,Io,0,Ln-Io-.12,Eo-Io,.42,Ln-Io),Oo(t,e,o,Io,.42,Ln-Io-.07,Eo-Io,.5,Ln-Io),l2.addEntranceWall(Tn),l2.addFrames(Tn),Tn.curMat=[0,0,0],Oo(t,e,o,-Io,0,Ln-Io,Eo+Io,Vo,Ln+Io),Q_(t,e,o,fh);for(let c of qu)u2(t,e,o,1.25,c),u2(t,e,o,Eo-1.25,c);lh(t,e,o,22,"left"),lh(t,e,o,25,"right"),lh(t,e,o,33,"left"),lh(t,e,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)Z_(t,e,o,c);Ha.addWing(Tn),Tn.curMat=[0,0,0];for(let c of hh.filter(f=>f.pedestal))H_(Tn,c.x,c.z,ph,f2);{let c=V_;Tn.curMat=[0,0,0],Tn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Tn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Tn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Tn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}j_.addAlcove(Tn);for(let c of xl)U_(Tn,c.x,c.z,c.seed,1,c.away);Tn.curMat=[0,0,0];let r=[[[Eo,Ln-.35],[0,Ln-.35]],[[0,3],[0,10]],[[Eo,15],[Eo,22]],[[0,24],[0,31]],[[Eo,33],[Eo,40]],[[0,41],[0,46]]],a=Y_(X_),s=(c,f)=>{let l=0,d=1/0;return r.forEach((h,v)=>{let u=(h[0][0]+h[1][0])/2,p=(h[0][1]+h[1][1])/2,m=Math.hypot(c-u,f-p);m<d&&(d=m,l=v)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:hh,occluders:[...qu.flatMap(c=>[[1.25,c,.78],[Eo-1.25,c,.78]]),[Eo/2-dh,fh,.86],[Eo/2+dh,fh,.86],...hh.filter(c=>c.pedestal).map(c=>[c.x,c.z,ph*1.12]),...xl.map(c=>[c.x,c.z,.34])],pedestalTop:f2,mat:uh,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var Hu=bt((xA,x2)=>{"use strict";var{doorLightGLSL:J_}=G0(),{skylightGLSL:t6}=Hi(),{windowLightGLSL:e6,C:ia}=xr(),{alcoveLightGLSL:o6}=ka(),Sa=t=>t.toFixed(4),n6=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();x2.exports=(t,e,o,n)=>{let a=(e.occluders||[]).slice(0,24).map(([v,u,p])=>`ao = min(ao, contact(v_pos.xz, vec2(${v.toFixed(3)}, ${u.toFixed(3)}), ${p.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=v=>{let u=v&&v.tick!==void 0?v.tick:0;if(u!==i||c.length===0){i=u;let p=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-p[0],m.c[2]-p[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},d="",h="";for(let v=0;v<8;v++)l["lightC"+v]=u=>f(u)[v].c,l["lightD"+v]=u=>f(u)[v].d,d+="uniform vec4 lightC"+v+", lightD"+v+`;
`,h+="pic += pictureLight(lightC"+v+", lightD"+v+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${B0().lanternGLSL()}

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    ${d}

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

    ${J_()}

    ${t6()}

    ${e6()}

    ${o6()}

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
        step(abs(v_pos.z - ${Sa(ia.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Sa((ia.z0+ia.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Sa(ia.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${n6}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Sa(ia.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Sa(ia.z0)} || v_pos.z > ${Sa(ia.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Sa(ia.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Sa(ia.z0)}), ${Sa(ia.z1)} - v_pos.z), ${Sa(ia.x1)} - v_pos.x);
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
        if (v_pos.z < ${Sa(ia.z0+.3)} && v_pos.x > ${Sa(ia.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:n?t.prop("offset"):0,count:n?t.prop("count"):e.elements.length})}});var b2=bt((yA,y2)=>{"strict mode";var r6="https://api.artic.edu/api/v1/artworks/search",a6=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,s6="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",i6="&fields=image_id,title,artist_title",c6={low:400,mid:843,high:1686};y2.exports={fetchList:async function(t,e){let o=r6+s6+i6+`&from=${t}&size=${e}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(t,e){let o=a6(t,c6[e]),n=await fetch(o).then(r=>r.blob());return{title:t.title+" - "+t.artist_title,image:n}}}});var M2=bt((bA,_2)=>{"use strict";var l6=fu(),f6=wa(),h6=t=>"images/web/"+t.slug+(f6.isPhone?"-1024":"")+".webp";async function w2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}_2.exports={fetchList:async function(t,e){return l6.slice(t,t+e).map((o,n)=>({...o,image_id:t+n}))},fetchImage:async function(t){let e;try{e=await w2(h6(t))}catch(o){e=await w2("images/"+t.file)}return{title:t.title,image:e}}}});var S2=bt((wA,k2)=>{"strict mode";k2.exports={default:"local",artic:b2(),local:M2()}});var Bu=bt((_A,A2)=>{"strict mode";var Ds=document.createElement("canvas"),Uu=Ds.width=Ds.height=1024,X0=Ds.getContext("2d");X0.mozImageSmoothingEnabled=!1;X0.webkitImageSmoothingEnabled=!1;X0.font="32px Verdana";X0.textBaseline="bottom";X0.fillStyle="#aaa";function E2(t,e,o,n){var r=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(r).width>o&&f>1;){f--,r=a="";for(var d=0;d<l;d++)d<f?(r+=c[d],d+1<f&&(r+=" ")):(a+=c[d],d+1<l&&(a+=" "))}return n.push(r),i=t.measureText(r).width,a&&(s=E2(t,a,o,n),s>i&&(i=s)),i}A2.exports={init(t,e,o=Uu){var n=[];E2(X0,e,Math.min(o*Uu,Uu),n),X0.clearRect(0,0,Ds.width,Ds.height);for(var r=0;r<n.length;r++)X0.fillText(n[r],0,Ds.height-(Math.max(n.length,3)-r)*32);return t({data:Ds,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var L2=bt((MA,T2)=>{"strict mode";var ju=S2(),u6=new URLSearchParams(window.location.search).get("api"),z2=ju[u6]||ju[ju.default],d6=Bu(),Wu={},Ji=[],p6=2;function v6(t){return(!navigator.connection||navigator.connection.downlink<p6)&&(t=t=="high"?"mid":"low"),t}var m6=wa(),Zi=document.createElement("canvas");Zi.width=Zi.height=m6.isPhone?1024:2048;var Yu=Zi.getContext("2d");Yu.imageSmoothingEnabled=!0;Yu.imageSmoothingQuality="high";var Vu=!1,g6=t=>[(Ji.pop()||t.texture)([[[200,200,200]]]),e=>(Ji.pop()||t.texture)([[[0,0,0,0]]]),1];async function Xu(t,e,o){Vu===!1&&(Vu=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await z2.fetchImage(e,v6(o));r=a.title,n=await createImageBitmap(a.image),Yu.drawImage(n,0,0,Zi.width,Zi.height)}catch(a){return console.error(a),o=="high"?await Xu(t,e,"low"):g6(t)}return[(Ji.pop()||t.texture)({data:Zi,min:"mipmap",mipmap:"nice",aniso:Vu,flipY:!0}),a=>d6.init(Ji.pop()||t.texture,r,a),n.width/n.height]}T2.exports={fetch:(t,e=10,o="low",n,r)=>{let a=Object.keys(Wu).length;z2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(Wu[i.image_id]){--e===0&&r();return}Wu[i.image_id]=i,Xu(t,i,o).then(([c,f,l])=>{n({...i,tex:c,textGen:f,aspect:l}),--e===0&&r()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,Xu(t,e,o).then(([n,r])=>{e.loading=!1,e.tex=n,e.text=r(e.width)}))},unload:t=>{t.tex&&(Ji.push(t.tex),t.tex=void 0),t.text&&(Ji.push(t.text),t.text=void 0)}}});var R2=bt((kA,N2)=>{N2.exports=x6;function x6(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var O2=bt((SA,C2)=>{C2.exports=y6;function y6(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var I2=bt((EA,P2)=>{P2.exports=b6;function b6(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Ku=bt((AA,$2)=>{$2.exports=w6;function w6(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var q2=bt((zA,F2)=>{F2.exports=_6;function _6(t,e){if(t===e){var o=e[1],n=e[2],r=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=r,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var G2=bt((TA,D2)=>{D2.exports=M6;function M6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],d=e[9],h=e[10],v=e[11],u=e[12],p=e[13],m=e[14],g=e[15],y=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,z=r*f-a*c,I=l*p-d*u,R=l*m-h*u,B=l*g-v*u,D=d*m-h*p,K=d*g-v*p,O=h*g-v*m,H=y*O-b*K+w*D+_*B-M*R+z*I;return H?(H=1/H,t[0]=(i*O-c*K+f*D)*H,t[1]=(r*K-n*O-a*D)*H,t[2]=(p*z-m*M+g*_)*H,t[3]=(h*M-d*z-v*_)*H,t[4]=(c*B-s*O-f*R)*H,t[5]=(o*O-r*B+a*R)*H,t[6]=(m*w-u*z-g*b)*H,t[7]=(l*z-h*w+v*b)*H,t[8]=(s*K-i*B+f*I)*H,t[9]=(n*B-o*K-a*I)*H,t[10]=(u*M-p*w+g*y)*H,t[11]=(d*w-l*M-v*y)*H,t[12]=(i*R-s*D-c*I)*H,t[13]=(o*D-n*R+r*I)*H,t[14]=(p*b-u*_-m*y)*H,t[15]=(l*_-d*b+h*y)*H,t):null}});var U2=bt((LA,H2)=>{H2.exports=k6;function k6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],d=e[9],h=e[10],v=e[11],u=e[12],p=e[13],m=e[14],g=e[15];return t[0]=i*(h*g-v*m)-d*(c*g-f*m)+p*(c*v-f*h),t[1]=-(n*(h*g-v*m)-d*(r*g-a*m)+p*(r*v-a*h)),t[2]=n*(c*g-f*m)-i*(r*g-a*m)+p*(r*f-a*c),t[3]=-(n*(c*v-f*h)-i*(r*v-a*h)+d*(r*f-a*c)),t[4]=-(s*(h*g-v*m)-l*(c*g-f*m)+u*(c*v-f*h)),t[5]=o*(h*g-v*m)-l*(r*g-a*m)+u*(r*v-a*h),t[6]=-(o*(c*g-f*m)-s*(r*g-a*m)+u*(r*f-a*c)),t[7]=o*(c*v-f*h)-s*(r*v-a*h)+l*(r*f-a*c),t[8]=s*(d*g-v*p)-l*(i*g-f*p)+u*(i*v-f*d),t[9]=-(o*(d*g-v*p)-l*(n*g-a*p)+u*(n*v-a*d)),t[10]=o*(i*g-f*p)-s*(n*g-a*p)+u*(n*f-a*i),t[11]=-(o*(i*v-f*d)-s*(n*v-a*d)+l*(n*f-a*i)),t[12]=-(s*(d*m-h*p)-l*(i*m-c*p)+u*(i*h-c*d)),t[13]=o*(d*m-h*p)-l*(n*m-r*p)+u*(n*h-r*d),t[14]=-(o*(i*m-c*p)-s*(n*m-r*p)+u*(n*c-r*i)),t[15]=o*(i*h-c*d)-s*(n*h-r*d)+l*(n*c-r*i),t}});var j2=bt((NA,B2)=>{B2.exports=S6;function S6(t){var e=t[0],o=t[1],n=t[2],r=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],d=t[10],h=t[11],v=t[12],u=t[13],p=t[14],m=t[15],g=e*s-o*a,y=e*i-n*a,b=e*c-r*a,w=o*i-n*s,_=o*c-r*s,M=n*c-r*i,z=f*u-l*v,I=f*p-d*v,R=f*m-h*v,B=l*p-d*u,D=l*m-h*u,K=d*m-h*p;return g*K-y*D+b*B+w*R-_*I+M*z}});var V2=bt((RA,W2)=>{W2.exports=E6;function E6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],d=e[8],h=e[9],v=e[10],u=e[11],p=e[12],m=e[13],g=e[14],y=e[15],b=o[0],w=o[1],_=o[2],M=o[3];return t[0]=b*n+w*i+_*d+M*p,t[1]=b*r+w*c+_*h+M*m,t[2]=b*a+w*f+_*v+M*g,t[3]=b*s+w*l+_*u+M*y,b=o[4],w=o[5],_=o[6],M=o[7],t[4]=b*n+w*i+_*d+M*p,t[5]=b*r+w*c+_*h+M*m,t[6]=b*a+w*f+_*v+M*g,t[7]=b*s+w*l+_*u+M*y,b=o[8],w=o[9],_=o[10],M=o[11],t[8]=b*n+w*i+_*d+M*p,t[9]=b*r+w*c+_*h+M*m,t[10]=b*a+w*f+_*v+M*g,t[11]=b*s+w*l+_*u+M*y,b=o[12],w=o[13],_=o[14],M=o[15],t[12]=b*n+w*i+_*d+M*p,t[13]=b*r+w*c+_*h+M*m,t[14]=b*a+w*f+_*v+M*g,t[15]=b*s+w*l+_*u+M*y,t}});var Y2=bt((CA,X2)=>{X2.exports=A6;function A6(t,e,o){var n=o[0],r=o[1],a=o[2],s,i,c,f,l,d,h,v,u,p,m,g;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],d=e[5],h=e[6],v=e[7],u=e[8],p=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=d,t[6]=h,t[7]=v,t[8]=u,t[9]=p,t[10]=m,t[11]=g,t[12]=s*n+l*r+u*a+e[12],t[13]=i*n+d*r+p*a+e[13],t[14]=c*n+h*r+m*a+e[14],t[15]=f*n+v*r+g*a+e[15]),t}});var Q2=bt((OA,K2)=>{K2.exports=z6;function z6(t,e,o){var n=o[0],r=o[1],a=o[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var J2=bt((PA,Z2)=>{Z2.exports=T6;function T6(t,e,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,f,l,d,h,v,u,p,m,g,y,b,w,_,M,z,I,R,B,D,K,O,H,ft;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,d=e[0],h=e[1],v=e[2],u=e[3],p=e[4],m=e[5],g=e[6],y=e[7],b=e[8],w=e[9],_=e[10],M=e[11],z=r*r*l+f,I=a*r*l+s*c,R=s*r*l-a*c,B=r*a*l-s*c,D=a*a*l+f,K=s*a*l+r*c,O=r*s*l+a*c,H=a*s*l-r*c,ft=s*s*l+f,t[0]=d*z+p*I+b*R,t[1]=h*z+m*I+w*R,t[2]=v*z+g*I+_*R,t[3]=u*z+y*I+M*R,t[4]=d*B+p*D+b*K,t[5]=h*B+m*D+w*K,t[6]=v*B+g*D+_*K,t[7]=u*B+y*D+M*K,t[8]=d*O+p*H+b*ft,t[9]=h*O+m*H+w*ft,t[10]=v*O+g*H+_*ft,t[11]=u*O+y*H+M*ft,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var eg=bt((IA,tg)=>{tg.exports=L6;function L6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],d=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*r+f*n,t[5]=s*r+l*n,t[6]=i*r+d*n,t[7]=c*r+h*n,t[8]=f*r-a*n,t[9]=l*r-s*n,t[10]=d*r-i*n,t[11]=h*r-c*n,t}});var ng=bt(($A,og)=>{og.exports=N6;function N6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],d=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r-f*n,t[1]=s*r-l*n,t[2]=i*r-d*n,t[3]=c*r-h*n,t[8]=a*n+f*r,t[9]=s*n+l*r,t[10]=i*n+d*r,t[11]=c*n+h*r,t}});var ag=bt((FA,rg)=>{rg.exports=R6;function R6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],d=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r+f*n,t[1]=s*r+l*n,t[2]=i*r+d*n,t[3]=c*r+h*n,t[4]=f*r-a*n,t[5]=l*r-s*n,t[6]=d*r-i*n,t[7]=h*r-c*n,t}});var ig=bt((qA,sg)=>{sg.exports=C6;function C6(t,e,o){var n,r,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,n=Math.sin(e),r=Math.cos(e),a=1-r,t[0]=s*s*a+r,t[1]=i*s*a+c*n,t[2]=c*s*a-i*n,t[3]=0,t[4]=s*i*a-c*n,t[5]=i*i*a+r,t[6]=c*i*a+s*n,t[7]=0,t[8]=s*c*a+i*n,t[9]=i*c*a-s*n,t[10]=c*c*a+r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var lg=bt((DA,cg)=>{cg.exports=O6;function O6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=n+n,c=r+r,f=a+a,l=n*i,d=n*c,h=n*f,v=r*c,u=r*f,p=a*f,m=s*i,g=s*c,y=s*f;return t[0]=1-(v+p),t[1]=d+y,t[2]=h-g,t[3]=0,t[4]=d-y,t[5]=1-(l+p),t[6]=u+m,t[7]=0,t[8]=h+g,t[9]=u-m,t[10]=1-(l+v),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var hg=bt((GA,fg)=>{fg.exports=P6;function P6(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var dg=bt((HA,ug)=>{ug.exports=I6;function I6(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var vg=bt((UA,pg)=>{pg.exports=$6;function $6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var gg=bt((BA,mg)=>{mg.exports=F6;function F6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var yg=bt((jA,xg)=>{xg.exports=q6;function q6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var wg=bt((WA,bg)=>{bg.exports=D6;function D6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=o+o,i=n+n,c=r+r,f=o*s,l=n*s,d=n*i,h=r*s,v=r*i,u=r*c,p=a*s,m=a*i,g=a*c;return t[0]=1-d-u,t[1]=l+g,t[2]=h-m,t[3]=0,t[4]=l-g,t[5]=1-f-u,t[6]=v+p,t[7]=0,t[8]=h+m,t[9]=v-p,t[10]=1-f-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Mg=bt((VA,_g)=>{_g.exports=G6;function G6(t,e,o,n,r,a,s){var i=1/(o-e),c=1/(r-n),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(r+n)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var Sg=bt((XA,kg)=>{kg.exports=H6;function H6(t,e,o,n,r){var a=1/Math.tan(e/2),s=1/(n-r);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*s,t[15]=0,t}});var Ag=bt((YA,Eg)=>{Eg.exports=U6;function U6(t,e,o,n){var r=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(r+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(r-a)*f*.5,t[10]=n/(o-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*o/(o-n),t[15]=0,t}});var Tg=bt((KA,zg)=>{zg.exports=B6;function B6(t,e,o,n,r,a,s){var i=1/(e-o),c=1/(n-r),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(r+n)*c,t[14]=(s+a)*f,t[15]=1,t}});var Ng=bt((QA,Lg)=>{var j6=Ku();Lg.exports=W6;function W6(t,e,o,n){var r,a,s,i,c,f,l,d,h,v,u=e[0],p=e[1],m=e[2],g=n[0],y=n[1],b=n[2],w=o[0],_=o[1],M=o[2];return Math.abs(u-w)<1e-6&&Math.abs(p-_)<1e-6&&Math.abs(m-M)<1e-6?j6(t):(l=u-w,d=p-_,h=m-M,v=1/Math.sqrt(l*l+d*d+h*h),l*=v,d*=v,h*=v,r=y*h-b*d,a=b*l-g*h,s=g*d-y*l,v=Math.sqrt(r*r+a*a+s*s),v?(v=1/v,r*=v,a*=v,s*=v):(r=0,a=0,s=0),i=d*s-h*a,c=h*r-l*s,f=l*a-d*r,v=Math.sqrt(i*i+c*c+f*f),v?(v=1/v,i*=v,c*=v,f*=v):(i=0,c=0,f=0),t[0]=r,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=d,t[7]=0,t[8]=s,t[9]=f,t[10]=h,t[11]=0,t[12]=-(r*u+a*p+s*m),t[13]=-(i*u+c*p+f*m),t[14]=-(l*u+d*p+h*m),t[15]=1,t)}});var Cg=bt((ZA,Rg)=>{Rg.exports=V6;function V6(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var tc=bt((JA,Og)=>{Og.exports={create:R2(),clone:O2(),copy:I2(),identity:Ku(),transpose:q2(),invert:G2(),adjoint:U2(),determinant:j2(),multiply:V2(),translate:Y2(),scale:Q2(),rotate:J2(),rotateX:eg(),rotateY:ng(),rotateZ:ag(),fromRotation:ig(),fromRotationTranslation:lg(),fromScaling:hg(),fromTranslation:dg(),fromXRotation:vg(),fromYRotation:gg(),fromZRotation:yg(),fromQuat:wg(),frustum:Mg(),perspective:Sg(),perspectiveFromFieldOfView:Ag(),ortho:Tg(),lookAt:Ng(),str:Cg()}});var $g=bt((tz,Ig)=>{"use strict";var Pg=L2(),_n=tc(),Gs=xr(),X6=3e3,mh="high",Qu,bl=.36,wl=13.64,ec=Gs.C.hallEnd-.01,_l=Gs.C.z0+.01,Y6=.356,K6=13.644,Q6=Gs.C.hallEnd-.006,Z6=Gs.C.z0+.006,J6=.12,xh=4,oc=t=>yr[t]&&yr[t].cy||xh,Zu=.26,tM=5.6,eM=7,yr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:ec},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Gs.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Gs.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Gs.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function oM(t,e){let o=e&&e.maxH||tM,n=e&&e.maxW||eM,r=Math.min(o,n/t);return{width:r*t,height:r}}function nM(t,e,o){let n=yr[o],r=[],a=oc(o)-e/2;return n.side==="left"?(_n.fromTranslation(r,[bl,a,n.z+t/2]),_n.rotateY(r,r,Math.PI/2)):n.side==="right"?(_n.fromTranslation(r,[wl,a,n.z-t/2]),_n.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?_n.fromTranslation(r,[n.x-t/2,a,_l]):(_n.fromTranslation(r,[7+t/2,a,ec]),_n.rotateY(r,r,Math.PI)),_n.scale(r,r,[t,e,J6]),r}function rM(t,e,o){let n=yr[o],r=[],a=oc(o)-e/2;return n.side==="left"?(_n.fromTranslation(r,[bl,a,n.z+t/2]),_n.rotateY(r,r,Math.PI/2)):n.side==="right"?(_n.fromTranslation(r,[wl,a,n.z-t/2]),_n.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?_n.fromTranslation(r,[n.x-t/2,a,_l]):(_n.fromTranslation(r,[7+t/2,a,ec]),_n.rotateY(r,r,Math.PI)),r}function aM(t,e,o){let n=yr[o],r=[],a=oc(o)-e/2-Zu-.38;return n.side==="left"?(_n.fromTranslation(r,[Y6,a,n.z+t/2]),_n.rotateY(r,r,Math.PI/2)):n.side==="right"?(_n.fromTranslation(r,[K6,a,n.z-t/2]),_n.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?_n.fromTranslation(r,[n.x-t/2,a,Z6]):(_n.fromTranslation(r,[7+t/2,a,Q6]),_n.rotateY(r,r,Math.PI)),_n.scale(r,r,[2,2,2]),r}function sM(t,e,o){let n=yr[o],r=oc(o)-e/2-Zu-.38;return n.side==="left"?[bl+.55,r,n.z]:n.side==="right"?[wl-.55,r,n.z]:n.side==="corridor"?[n.x,r,_l+.55]:[7,r,ec-.55]}var yl=.42;function gh(t,e,o,n,r,a){return[e[0]*n,e[1]*n,e[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function iM(t,e,o){let n=yr[o],r,a,s;n.side==="left"?(r=[bl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[wl,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,_l],a=[1,0,0],s=[0,0,1]):(r=[7,ec],a=[1,0,0],s=[0,0,-1]);let i=oc(o)+e/2+Zu+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(v,u)=>[r[0]+s[0]*v,u,r[1]+s[2]*v],l=[.075,.062,.05],d=[{fixmodel:gh(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:gh(f(yl/2,i),a,s,.02,.02,yl),fixcol:l,fixglow:0},{fixmodel:gh(f(yl,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:gh(f(yl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(yl,i-.02);return{fixtures:d,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}Ig.exports=(t,e)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!yr[s])return;let{width:i,height:c}=oM(a.aspect,yr[s]),f=iM(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:yr[s].side,model:nM(i,c,s),framemodel:rM(i,c,s),framesize:[i,c],textmodel:aM(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:sM(i,c,s),paintingPosition:yr[s].side==="left"?[bl+.05,xh,yr[s].z]:yr[s].side==="right"?[wl-.05,xh,yr[s].z]:yr[s].side==="corridor"?[yr[s].x,oc(s),_l+.05]:[7,xh,ec-.05],textGen:null})};return Pg.fetch(t,yr.length,mh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Pg.load(t,a,mh)}),mh="low",Qu&&clearTimeout(Qu),Qu=setTimeout(()=>{mh="high"},X6)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Gg=bt((ez,Dg)=>{"use strict";var cM=Bu(),Fg=wa(),qg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function lM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];qg.forEach(([n,r])=>{t.forEach(([a,s])=>e.push([a,s,n,r]))});let o=[];for(let n=0;n<qg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var fM=`#extension GL_OES_standard_derivatives : enable
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
}`,hM=`
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
}`;Dg.exports=t=>{let e=cM.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	${B0().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Fg.isPhone?1024:2048),detail:()=>Fg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=lM(),r=t({frag:fM,vert:hM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var Z0=bt((nz,Aa)=>{"use strict";var tn=Math.PI,xt=t=>(+t).toFixed(4),ze=[-90,0,0],jt=16,xo=22,bo=7.8,ca=11.6,pr=.55,la=(ca-bo)/(jt/2),ce={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};ce.top=ce.spring+ce.hw;var Fr={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Wo={rafter:xo/12,rafterW:.1,purlin:1,purlinW:.07},Al=[5.5,11,16.5],Rt={x0:jt/2-1.9,x1:jt/2+1.9,z0:5.6,z1:16.6,curb:.5,top:.36},pn={x:jt/2,z:14.9,plinth:.86,height:2.05,yaw:tn+.35,file:"res/nymph.bin"},a0=(()=>{let t=[-.68,.6,-.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Ju=t=>[t[0]+ze[0],t[1]+ze[1],t[2]+ze[2]];function Wg(){let t=ce.c.map(o=>`
		{
			float dz = q.z - ${xt(o)};
			float inside = smoothstep(-b, b, ${xt(ce.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${xt(ce.sill)});
			float arch = smoothstep(-b, b, ${xt(ce.hw)} - length(vec2(dz, max(q.y - ${xt(ce.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=ce.c.map(o=>`
		{
			float dz = q.z - ${xt(o)};
			if (abs(dz) < ${xt(ce.hw+.2)}) {
				${Fr.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${xt(Fr.w*.5)} - b, ${xt(Fr.w*.5)} + b, abs(dz - ${xt(n)})));`).join(`
				`)}
				float ry = q.y - ${xt(ce.sill)};
				float tr = abs(ry - ${xt(Fr.rowH)} * floor(ry / ${xt(Fr.rowH)} + 0.5));
				if (q.y < ${xt(ce.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${xt(Fr.w*.5)} - b, ${xt(Fr.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${xt(ce.spring)}));
				if (q.y > ${xt(ce.spring)}) bar = max(bar, 1.0 - smoothstep(${xt(Fr.w*.5)} - b, ${xt(Fr.w*.5)} + b, abs(rr - ${xt(Fr.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${xt(ce.hw)} - max(abs(dz), q.y > ${xt(ce.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${xt(a0[0])}, ${xt(a0[1])}, ${xt(a0[2])});

	// how open a window is at (y, z) on the wall's face; b softens edges
	float studioWinOpen(vec3 q, float b) {
		float o = 0.0;
		${t}
		return o;
	}
	float studioWinBars(vec3 q, float b) {
		float bar = 0.0;
		${e}
		return bar;
	}

	// the leaded pattern in each pane of the roof: q is the pane's own
	// coordinates (centre 0, half size ${xt(Wo.purlin/2)} x ${xt(Wo.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${xt(Wo.purlin/2)}, ${xt(Wo.rafter/2)});
		vec2 a = abs(q);
		float w = 0.022;
		float d = abs(length(q * vec2(1.0, 0.62)) - 0.36);               // the ring
		d = min(d, abs(dot(a, hs.yx) - hs.x * hs.y) / length(hs));       // the diamond
		d = min(d, abs(length(q) - 0.11));                               // the rondel
		d = min(d, abs(length(a - hs) - 0.30));                          // quarter rings
		d = min(d, abs(length(a - vec2(0.0, hs.y)) - 0.16));             // and at the ends
		float lead = 1.0 - smoothstep(w - b, w + b, d);
		// textured, faintly frosted glass in the rondel and the ring's petals
		float frost = smoothstep(0.11 + b, 0.11 - b, length(q)) * 0.35
			+ smoothstep(0.36 + b, 0.36 - b, length(q * vec2(1.0, 0.62))) * smoothstep(0.1, 0.16, length(q)) * 0.12;
		return (1.0 - lead) * (1.0 - frost);
	}

	float studioVineClump(float u, float seed) {
		return step(-0.25, 0.5 * sin(u * 1.9 + seed) + 0.5 * sin(u * 0.77 + seed * 1.3));
	}
	// how much of the sun the flowering vine takes at a point under a beam
	// (d: distance across the beam, u, v: along and across for the dapple)
	float studioVineShade(float d, float u, float v, float seed) {
		float band = smoothstep(0.5, 0.2, abs(d));
		float dap = 0.5 + 0.5 * sin(u * 23.0 + v * 9.0 + seed) * sin(v * 29.0 - u * 7.0 + seed * 2.0);
		dap = smoothstep(0.2, 0.65, dap);
		return band * studioVineClump(u, seed) * dap * 0.85;
	}

	float studioSun(vec3 pw) {
		vec3 p = pw - vec3(${xt(ze[0])}, ${xt(ze[1])}, ${xt(ze[2])});
		vec3 S = STUDIO_SUN;
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${xt(bo)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${xt(xo)}) return 0.0;
			vec3 h1 = p + S * ((${xt(-pr)} - p.x) / S.x);
			vec3 hm = p + S * ((${xt(-pr*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${xt(bo)}) {
			if (he.z < 0.0 || he.z > ${xt(xo)} || he.x < 0.0 || he.x > ${xt(jt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${Al.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${xt(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${ac.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${xt(n)}, he.x, he.z, ${xt(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${xt(la)} * p.x - p.y + ${xt(bo)}) / (S.y - ${xt(la)} * S.x);
		float tr = (${xt(la)} * (${xt(jt)} - p.x) - p.y + ${xt(bo)}) / (S.y + ${xt(la)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${xt(jt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${xt(jt/2-.01)} && hr.x <= ${xt(jt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${xt(xo)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${xt(Wo.rafter)} * floor(h.z / ${xt(Wo.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${xt(Wo.rafterW*.5)} - b, ${xt(Wo.rafterW*.5)} + b, rz);
		float ux = h.x < ${xt(jt/2)} ? h.x : ${xt(jt)} - h.x;
		float rx = abs(ux - ${xt(Wo.purlin)} * floor(ux / ${xt(Wo.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${xt(Wo.purlinW*.5)} - b, ${xt(Wo.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${xt(jt/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${xt(Wo.purlin)} * floor(ux / ${xt(Wo.purlin)}) - ${xt(Wo.purlin/2)}, h.z - ${xt(Wo.rafter)} * floor(h.z / ${xt(Wo.rafter)}) - ${xt(Wo.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${ac.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${xt(n)}, h.x, h.z, ${xt(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${xt(jt/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function sc(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var dt={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27};function Vg(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,n,r)=>(t.pos.push(e[0]+ze[0],e[1]+ze[1],e[2]+ze[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.float?t.anchor.push(t.float[0]+ze[0],t.float[1]+ze[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),d=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,d)},t.box=(e,o,n,r,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,n],[e,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[e,n],[e,s],[r,s],[r,n]]),f.bottom||t.quad([e,o,n],[r,o,n],[r,o,s],[e,o,s],[0,-1,0],i,[[e,n],[r,n],[r,s],[e,s]]),f.x0||t.quad([e,o,n],[e,o,s],[e,a,s],[e,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),f.x1||t.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),f.z0||t.quad([r,o,n],[e,o,n],[e,a,n],[r,a,n],[0,0,-1],i,[[r,o],[e,o],[e,a],[r,a]]),f.z1||t.quad([e,o,s],[r,o,s],[r,a,s],[e,a,s],[0,0,1],i,[[e,o],[r,o],[r,a],[e,a]])},t.tbox=(e,o,n,r,a,s,i,c,f)=>{let l=Math.cos(n),d=Math.sin(n),h=Math.cos(f||0),v=Math.sin(f||0),u=(g,y,b)=>{let w=a+(y-a)*h-b*v*0,_=b+(y-a)*v,M=a+(y-a)*h;return[e+l*g+d*_,M,o-d*g+l*_]},p=g=>{let y=g[1]*h-g[2]*v,b=g[2]*h+g[1]*v;return[l*g[0]+d*b,y,-d*g[0]+l*b]},m=(g,y,b,w,_)=>t.quad(u(...g),u(...y),u(...b),u(...w),p(_),c,[[g[0]+g[2],g[1]],[y[0]+y[2],y[1]],[b[0]+b[2],b[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},t.beam=(e,o,n,r,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(u=>u/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],d=Math.hypot(...l);l=l.map(u=>u/d),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let h=(u,p,m)=>[u[0]+l[0]*n*p+f[0]*n*m,u[1]+l[1]*n*p+f[1]*n*m,u[2]+l[2]*n*p+f[2]*n*m],v=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(u=>-u)],[[-1,-1],[1,-1],f.map(u=>-u)]];for(let[u,p,m]of v)t.quad(h(e,...u),h(o,...u),h(o,...p),h(e,...p),m,r,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,n,r,a)=>{let s=a||32,i=n.map(([c,f],l)=>{let d=n[Math.max(0,l-1)],h=n[Math.min(n.length-1,l+1)],v=h[0]-d[0],u=h[1]-d[1],p=Math.hypot(v,u)||1,m=u/p,g=-v/p,y=[];for(let b=0;b<=s;b++){let w=b/s*2*tn;y.push(t.v([e+Math.cos(w)*c,f,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[b/s*c*2*tn,f]))}return y});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],d=i[c][f+1],h=i[c+1][f+1],v=i[c+1][f];t.idx.push(l,v,h,l,h,d)}},t}var rc=t=>Math.abs(t)>=ce.hw?null:ce.spring+Math.sqrt(ce.hw*ce.hw-t*t),ac=[["truss",Al[0],3.1],["truss",Al[1],5.4],["truss",Al[2],7.7],["rafter",Wo.rafter*2,1.7],["rafter",Wo.rafter*5,8.5],["rafter",Wo.rafter*8,13.6],["rafter",Wo.rafter*10,17],["ridge",jt/2,.9]],yh=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,uM=t=>t<jt/2?bo+la*t:bo+la*(jt-t);function bh(t,e,o){return t==="truss"?[o,bo-.12,e]:t==="rafter"?[o,uM(o)-.2,e]:[e,ca-.32,o]}var wh=t=>t==="ridge"?[.4,xo-.4]:[.35,jt-.35],Kr={w:1.72,spring:2.05,r:2.05,frame:.21,zl:xo-.05,zf:xo-.13};Kr.c=Kr.r-Kr.w/2;var Ea=(t,e)=>{let o=Kr.r+(e||0),n=Math.abs(t)+Kr.c;return n>=o?Kr.spring:Kr.spring+Math.sqrt(o*o-n*n)};Kr.top=Ea(0);function dM(t){let e=jt/2,{w:o,frame:n,zl:r,zf:a}=Kr,s=o/2,i=s+n,c=.02;for(let M=-i;M<i-1e-6;M+=c){let z=M,I=Math.min(i,M+c),R=(z+I)/2,B=Ea(z,n),D=Ea(I,n),K=0,O=0;Math.abs(R)<s&&(K=Ea(z),O=Ea(I)),Math.abs(R)>=s;{let H=Math.abs(R)<s?K:0,ft=Math.abs(R)<s?O:0;t.quad([e+I,ft,a],[e+z,H,a],[e+z,B,a],[e+I,D,a],[0,0,-1],dt.DARKWOOD,[[I,ft],[z,H],[z,B],[I,D]])}t.quad([e+z,B,a],[e+z,B,xo],[e+I,D,xo],[e+I,D,a],[0,1,0],dt.DARKWOOD,[[z,0],[z,1],[I,1],[I,0]]),Math.abs(R)<s&&t.quad([e+z,K,a],[e+I,O,a],[e+I,O,r],[e+z,K,r],[0,-1,0],dt.DARKWOOD,[[z,0],[I,0],[I,1],[z,1]])}for(let M of[-1,1])t.quad([e+M*i,0,a],[e+M*i,0,xo],[e+M*i,Kr.spring,xo],[e+M*i,Kr.spring,a],[M,0,0],dt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+M*s,0,a],[e+M*s,Kr.spring,a],[e+M*s,Kr.spring,r],[e+M*s,0,r],[-M,0,0],dt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+M*(s+n/2)-n/2-.04,0,a-.04,e+M*(s+n/2)+n/2+.04,.42,xo,dt.DARKWOOD);let f=40;for(let M=0;M<f;M++){let z=-s+2*s*M/f,I=-s+2*s*(M+1)/f;t.beam([e+z,Ea(z)+.03,a-.015],[e+I,Ea(I)+.03,a-.015],.018,dt.DARKWOOD)}for(let M of[-1,1])t.beam([e+M*(s+.03),.42,a-.015],[e+M*(s+.03),Kr.spring+.02,a-.015],.018,dt.DARKWOOD);for(let M=-s;M<s-1e-6;M+=c){let z=M,I=Math.min(s,M+c),R=Ea(z),B=Ea(I);t.quad([e+I,0,r],[e+z,0,r],[e+z,R,r],[e+I,B,r],[0,0,-1],dt.REDDOOR,[[I,0],[z,0],[z,R],[I,B]])}let l=s-.2,d=.3,h=2.12,v=r-.006,u=.05,p=(M,z,I,R)=>t.box(e+M,z,v-.018,e+I,R,v,dt.REDDOOR);p(-l,d,l,d+u),p(-l,h-u,l,h),p(-l,d,-l+u,h),p(l-u,d,l,h),t.box(e-l+.14,d+.14,v-.022,e+l-.14,h-.14,v,dt.REDDOOR);let m=2.36;p(-s+.08,h+.06,s-.08,h+.12);for(let M of[-1,1]){let I=s-.17;for(let R=.07;R<I-1e-6;R+=c){let B=R,D=Math.min(I,R+c),K=Ea(B,-.18),O=Ea(D,-.18);if(K<=m+.02&&O<=m+.02)continue;let H=It=>e+M*It,ft=[[H(B),m,v+.004],[H(D),m,v+.004],[H(D),Math.max(m,O),v+.004],[H(B),Math.max(m,K),v+.004]];M>0?t.quad(ft[1],ft[0],ft[3],ft[2],[0,0,-1],dt.REDPANEL,[[D,0],[B,0],[B,1],[D,1]]):t.quad(...ft,[0,0,-1],dt.REDPANEL,[[B,0],[D,0],[D,1],[B,1]])}}t.beam([e,m-.02,v-.008],[e,Ea(0,-.12),v-.008],.03,dt.REDDOOR),t.beam([e-s+.1,m-.01,v-.006],[e+s-.1,m-.01,v-.006],.014,dt.REDDOOR);let g=e-s+.15,y=1.06,b=v-.03;t.box(g-.034,y-.2,b-.008,g+.034,y+.17,b+.012,dt.BRASS);for(let[M,z]of[[y+.2,.026],[y+.235,.016],[y-.23,.026],[y-.265,.016]])t.lathe(g,b-.002,[[0,M-z],[z,M-z*.4],[z,M+z*.4],[0,M+z]],dt.BRASS,12);for(let M=0;M<6;M++){let z=y-.17+M*.065;for(let I of[-1,1])t.beam([g+I*.034,z,b-.01],[g+I*.041,z+.03,b-.01],.006,dt.BRASS)}let w=b-.008,_=(M,z,I)=>{for(let R=0;R<I;R++){let B=tn*R/I,D=tn*(R+1)/I;for(let K=0;K<16;K++){let O=2*tn*K/16,H=2*tn*(K+1)/16,ft=(Se,Ne)=>[g+z*Math.sin(Se)*Math.cos(Ne),y+.03+z*Math.sin(Se)*Math.sin(Ne),M-z*Math.cos(Se)],It=(Se,Ne)=>[Math.sin(Se)*Math.cos(Ne),Math.sin(Se)*Math.sin(Ne),-Math.cos(Se)],Mt=t.v(ft(B,O),It(B,O),dt.BRASS),vt=t.v(ft(B,H),It(B,H),dt.BRASS),st=t.v(ft(D,H),It(D,H),dt.BRASS),Wt=t.v(ft(D,O),It(D,O),dt.BRASS);t.idx.push(Mt,vt,st,Mt,st,Wt)}}};t.beam([g,y+.03,w],[g,y+.03,w-.05],.011,dt.BRASS),_(w-.075,.034,10),t.box(g-.008,y-.1,b-.0125,g+.008,y-.06,b-.0085,dt.KEYHOLE)}function pM(t){let e=sc(77);for(let[o,n,r]of ac){let[a,s]=wh(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=bh(o,n,f),d=Math.sin(f*3.1+i*2+r)*.07,h=Math.cos(f*2.3+i+r)*.05,v=o==="ridge"?[l[0]+d,l[1]+h+.12,l[2]]:[l[0],l[1]+h+.12,l[2]+d];c&&(yh(f,r)||e()<.5)&&t.beam(c,v,.012+.008*e(),dt.WOOD),c=v}}}}function vM(t){let e=sc(4242),o=(r,a)=>!(r>Rt.x0-Rt.curb-.1&&r<Rt.x1+Rt.curb+.1&&a>Rt.z0-Rt.curb-.1&&a<Rt.z1+Rt.curb+.1)&&r>.2&&r<jt-.2&&a>.3&&a<xo-.4,n=(r,a,s,i)=>{let c=.022+e()*.022,f=e()*2*tn,l=Math.cos(f),d=Math.sin(f),h=(u,p)=>[r+(u*l-p*d)*c,a+.004*u*p,s+(u*d+p*l)*c],v=i?2:0;t.quad(h(-1,-1),h(-1,1),h(1,1),h(1,-1),[0,1,0],dt.BRACT,[[v,0],[v,1],[v+1,1],[v+1,0]])};for(let[r,a,s]of ac){let[i,c]=wh(r);for(let f=i;f<=c;f+=.05){if(!yh(f,s)||e()>.55)continue;let l=bh(r,a,f),d=l[0]+(e()-.5)*1.8,h=l[2]+(e()-.5)*1.8;o(d,h)&&n(d,.004,h,e()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(e()*4),s,i;a<2?(s=a?Rt.x1+Rt.curb+.12+e()*e()*.9:Rt.x0-Rt.curb-.12-e()*e()*.9,i=Rt.z0+e()*(Rt.z1-Rt.z0)):(i=a===2?Rt.z0-Rt.curb-.12-e()*e()*.9:Rt.z1+Rt.curb+.12+e()*e()*.9,s=Rt.x0+e()*(Rt.x1-Rt.x0)),o(s,i)&&n(s,.004,i,e()<.18)}for(let r=0;r<70;r++){let a=Rt.x0+.08+e()*(Rt.x1-Rt.x0-.16),s=Rt.z0+.08+e()*(Rt.z1-Rt.z0-.16);Math.hypot(a-pn.x,s-pn.z)<.6||(t.float=[a,s,a*5.1+s*2.9],n(a,.016,s,e()<.2),t.float=null)}}function mM(t,e,o){let n=(r,a,s,i,c)=>{let f=t.pos.length/3,l=Math.cos(s),d=Math.sin(s),h=Math.cos(i),v=Math.sin(i),u=[l,0,-d],p=[d*v,h,l*v],m=[u[1]*p[2]-u[2]*p[1],u[2]*p[0]-u[0]*p[2],u[0]*p[1]-u[1]*p[0]],g=c?.95:o()*.8;for(let[y,b]of[[0,0],[1,0],[1,1],[0,1]]){let w=(y-.5)*a,_=(b-.5)*a;t.pos.push(r[0]+u[0]*w+p[0]*_+ze[0],r[1]+u[1]*w+p[1]*_+ze[1],r[2]+u[2]*w+p[2]*_+ze[2]),t.nrm.push(...m),t.uv.push(y,b),t.shade.push(g),t.flower.push(1)}t.idx.push(f,f+1,f+2,f,f+2,f+3)};for(let[r,a,s]of ac){let[i,c]=wh(r);for(let f=i;f<=c;f+=.1){if(!yh(f,s))continue;let l=bh(r,a,f),d=()=>(o()-.5)*.7,h=4+Math.floor(o()*4);for(let v=0;v<h;v++){let u=r==="ridge"?[l[0]+d(),l[1]-o()*.25,l[2]+d()*.4]:[l[0]+d()*.4,l[1]-o()*.25,l[2]+d()];n(u,.42+o()*.4,o()*2*tn,(o()-.5)*2.4,o()<.16)}for(let v=0;v<5;v++){let u=o()*2*tn;e([l[0]+d()*.6,l[1]-o()*.2,l[2]+d()*.6],[Math.cos(u),-.3-o()*.5,Math.sin(u)],[-Math.sin(u),0,Math.cos(u)],.08+o()*.06,.1)}if(o()<.22){let v=.5+o()*2,u=[l[0],l[1],l[2]],p=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<v;m+=.13){u=[u[0]+p[0],u[1]-.13,u[2]+p[1]];let g=(.3+o()*.22)*(1-.4*m/v);if(n([u[0]+(o()-.5)*.08,u[1],u[2]+(o()-.5)*.08],g,o()*2*tn,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*tn;e([u[0],u[1],u[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var Hg=(()=>{let t=sc(9001),e=[],o=[];for(let[r,a,s]of ac){let[i,c]=wh(r);for(let f=i;f<=c;f+=.1)yh(f,s)&&o.push(bh(r,a,f))}let n=o.filter(r=>r[0]>Rt.x0-.6&&r[0]<Rt.x1+.6&&r[2]>Rt.z0&&r[2]<Rt.z1);for(let r=0;r<64;r++){let a=r%2===0&&n.length?n:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),Q0=[Rt.x0+.06,Rt.z0+.06,Rt.x1-.06,Rt.z1-.06];function gM(t,e){let o=e+t.offset,n=Math.floor(o/t.period),r=o-n*t.period,a=.6+.4*Math.sin(n*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>Q0[0]&&s<Q0[2]&&i>Q0[1]&&i<Q0[3],f=c?.017:.006,l=(t.start[1]-f)/t.speed;return{ph:r,Tf:l,lx:s,lz:i,inPool:c}}var Ua=[{at:[jt/2-.8,7.4],dir:.9,len:.58,kind:0,f:[.31,.17,.07],sip:21,first:9},{at:[jt/2+.9,11.6],dir:3.6,len:.52,kind:1,f:[.23,.13,.05],sip:29,first:17},{at:[jt/2-.3,12.8],dir:5.2,len:.46,kind:2,f:[.37,.11,.09],sip:25,first:4},{at:[jt/2+1.1,6.7],dir:2.2,len:.54,kind:1,f:[.27,.19,.06],sip:33,first:23},{at:[jt/2-1.2,10.4],dir:4.4,len:.43,kind:0,f:[.35,.15,.08],sip:27,first:13},{at:[jt/2+.4,9],dir:1.4,len:.62,kind:2,f:[.21,.12,.05],sip:31,first:28},{at:[jt/2-.9,13.3],dir:5.9,len:.4,kind:1,f:[.39,.21,.1],sip:23,first:6},{at:[jt/2+1.3,12.9],dir:3,len:.49,kind:0,f:[.29,.14,.07],sip:35,first:31}],xM=[Rt.x0+.38,Rt.z0+.38,Rt.x1-.38,pn.z-.95],Ml=[Rt.x0+.22,Rt.z0+.22,Rt.x1-.22,pn.z-.75],El=12,kl=-.36,Xg=[];function yM(){let t=Ua.map((f,l)=>({k:f,i:l,x:f.at[0],z:f.at[1],th:f.dir,w:0,v:.12,y:-.15,ph:l*2.1,pitch:0,nextSip:f.first,sipT:-1,kappa:0,bite:0,notice:0})),e=[],o=[];for(let f=0;f<El;f++)o.push({x:0,z:0,alive:0,born:0,seed:f*.37});let n={on:!1,x:0,z:0,t0:0},r=0,a=f=>Math.atan2(Math.sin(f),Math.cos(f)),s=f=>{let l=Math.sin(f*12.9898+78.233)*43758.5453;return l-Math.floor(l)};return{fish:t,events:e,crumbs:o,feed:n,drop:(f,l)=>{f=Math.max(Ml[0],Math.min(Ml[2],f)),l=Math.max(Ml[1],Math.min(Ml[3],l)),Object.assign(n,{on:!0,x:f,z:l,t0:r}),o.forEach((d,h)=>{let v=s(r+h)*Math.PI*2,u=.03+.11*Math.sqrt(s(r*1.7+h*3.1));Object.assign(d,{x:f+Math.cos(v)*u,z:l+Math.sin(v)*u,alive:1,born:r+s(h*5.3+r)*.35})}),e.push([f,l,r,1]);for(let d of t)d.notice=r+.25+Math.hypot(d.x-f,d.z-l)*.35+s(d.i*9.1+r)*.6},step:f=>{r+=f;let l=r,d=0;for(let h of o)h.alive&&(l<h.born||(d++,h.x+=Math.sin(l*.7+h.seed*11)*.004*f,h.z+=Math.cos(l*.6+h.seed*7)*.004*f));if(n.on&&d===0&&l>n.t0+1||n.on&&l>n.t0+40){n.on=!1;for(let h of o)h.alive=0}for(let h of t){let{k:v}=h,u=n.on&&l>h.notice,p=.38*Math.sin(l*v.f[0]+v.dir*3)+.22*Math.sin(l*v.f[1]*2.3+1.7*v.kind)+.12*Math.sin(l*1.1+v.dir),m=.11+.08*Math.sin(l*v.f[2]+v.dir)+.05*Math.max(0,Math.sin(l*.19+v.kind*4)-.6)*4,g=-(.1+.09*(.5+.5*Math.sin(l*.043+v.dir*2))),y=1.3,b=1;if(u){let O=null,H=1e9;for(let Wt of o){if(!Wt.alive||l<Wt.born)continue;let Se=Math.hypot(Wt.x-h.x,Wt.z-h.z)+.08*Math.sin(h.i*3.3+Wt.seed*9);Se<H&&(H=Se,O=Wt)}let ft=O?O.x:n.x,It=O?O.z:n.z,Mt=Math.hypot(ft-h.x,It-h.z),vt=Math.atan2(It-h.z,ft-h.x),st=a(vt-h.th);if(p=Math.max(-2.4,Math.min(2.4,st*2.6))+.25*Math.sin(l*2.3+h.i),y=2.6,m=(.13+.38*Math.min(1,Mt/1.2))*(.55+.45*Math.max(0,Math.cos(st))),g=g+(-.035-g)*(1-Math.min(1,Math.max(0,(Mt-.15)/.8))),b=.25,O&&l>h.bite&&h.y>-.08){let Wt=h.x+Math.cos(h.th)*.01,Se=h.z+Math.sin(h.th)*.01;Math.hypot(O.x-Wt,O.z-Se)<.075&&(O.alive=0,h.bite=l+1.4,e.push([O.x,O.z,l,.75]))}}let w=.55+h.v*(u?1.2:2.5),_=h.x+Math.cos(h.th)*w,M=h.z+Math.sin(h.th)*w,[z,I,R,B]=u?Ml:xM,D=Math.max(z-_,_-R,I-M,M-B,0);if(D>0){let O=(z+R)/2+Math.sin(l*.07+v.kind)*.6,H=(I+B)/2+Math.sin(l*.05+v.kind*2)*2,ft=Math.atan2(H-h.z,O-h.x);p+=Math.sign(a(ft-h.th))*Math.min(D*3,1.3)*(u?.5:1)}for(let O of t){if(O===h)continue;let H=O.x-h.x,ft=O.z-h.z,It=Math.hypot(H,ft),Mt=u?.32:.6;if(It<Mt){let vt=Math.sign(a(Math.atan2(ft,H)-h.th))||1;p-=vt*(Mt-It)*2*b*4*Math.max(0,Math.cos(Math.atan2(ft,H)-h.th)+.3)/(u?1:4)}}if(p=Math.max(-y,Math.min(y,p)),h.w+=(p-h.w)*Math.min(f*(u?4:1.6),1),h.th+=h.w*f,!u&&h.sipT<0&&l>h.nextSip&&(h.sipT=0,h.nextSip=l+v.sip*(.7+.6*s(l+v.kind))),h.sipT>=0){let O=h.sipT;h.sipT+=f;let H=Math.min(1,O/1.4)*(1-Math.max(0,Math.min(1,(O-2.4)/1.4)));g=g+(-.04-g)*H,m*=1-.65*H,O<1.5&&h.sipT>=1.5&&e.push([h.x+Math.cos(h.th)*.02,h.z+Math.sin(h.th)*.02,l,.9]),O<2.2&&h.sipT>=2.2&&e.push([h.x,h.z,l,.55]),(h.sipT>3.8||u)&&(h.sipT=-1)}h.v+=(Math.max(m,.03)-h.v)*Math.min(f*(u?2.2:.9),1),h.x+=Math.cos(h.th)*h.v*f,h.z+=Math.sin(h.th)*h.v*f,h.x=Math.max(Rt.x0+.12,Math.min(Rt.x1-.12,h.x)),h.z=Math.max(Rt.z0+.12,Math.min(pn.z-.62,h.z));let K=(g-h.y)*Math.min(f*(u?2.5:1.2),1);h.y+=K,h.pitch+=(Math.max(-.5,Math.min(.5,K/f/Math.max(h.v,.05)))-h.pitch)*Math.min(f*3,1),h.kappa=Math.max(-3.4,Math.min(3.4,h.w/Math.max(h.v,.09))),h.ph+=f*(3.2+32*h.v+2.5*Math.abs(h.w))}for(;e.length&&l-e[0][2]>10;)e.shift()},get t(){return r}}}function bM(){let t=Vg();{let e=Rt.x0-Rt.curb,o=Rt.x1+Rt.curb,n=Rt.z0-Rt.curb,r=Rt.z1+Rt.curb,a=[[0,0,jt,n],[0,r,jt,xo],[0,n,e,r],[o,n,jt,r]];for(let[s,i,c,f]of a)for(let d=s;d<c-1e-6;d+=1)for(let h=i;h<f-1e-6;h+=1){let v=d,u=Math.min(c,d+1),p=h,m=Math.min(f,h+1);t.quad([v,0,p],[v,0,m],[u,0,m],[u,0,p],[0,1,0],dt.FLOOR,[[v,p],[v,m],[u,m],[u,p]])}}for(let e of[0,1]){let o=e?jt:0,n=e?jt+pr:-pr,r=e?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<xo-1e-6;p+=a){let m=p,g=Math.min(xo,p+a),y=(m+g)/2,b=null;if(!e)for(let _ of ce.c)rc(y-_)!==null&&(b=[ce.sill,Math.min(rc(m-_)||ce.spring,rc(g-_)||ce.spring)]);let w=b?[[0,b[0]],[b[1],bo]]:[[0,bo]];for(let[_,M]of w)M<=_||(e?t.quad([o,_,g],[o,_,m],[o,M,m],[o,M,g],r,dt.PLASTER,[[g,_],[m,_],[m,M],[g,M]]):t.quad([o,_,m],[o,_,g],[o,M,g],[o,M,m],r,dt.PLASTER,[[m,_],[g,_],[g,M],[m,M]]))}if(!e)for(let p of ce.c){for(let b of[-1,1]){let w=p+b*ce.hw,_=[0,0,-b],M=[o,ce.sill,w],z=[n,ce.sill,w],I=[n,ce.spring,w],R=[o,ce.spring,w];b>0!=!!e?t.quad(M,z,I,R,_,dt.PLASTER,[[0,ce.sill],[pr,ce.sill],[pr,ce.spring],[0,ce.spring]]):t.quad(R,I,z,M,_,dt.PLASTER,[[0,ce.spring],[pr,ce.spring],[pr,ce.sill],[0,ce.sill]])}let m=28;for(let b=0;b<m;b++){let w=b/m*tn,_=(b+1)/m*tn,M=p+Math.cos(w)*ce.hw,z=p+Math.cos(_)*ce.hw,I=ce.spring+Math.sin(w)*ce.hw,R=ce.spring+Math.sin(_)*ce.hw,B=[0,-Math.sin((w+_)/2),-Math.cos((w+_)/2)];e?t.quad([o,I,M],[n,I,M],[n,R,z],[o,R,z],B,dt.PLASTER,[[0,w],[pr,w],[pr,_],[0,_]]):t.quad([o,R,z],[n,R,z],[n,I,M],[o,I,M],B,dt.PLASTER,[[0,_],[pr,_],[pr,w],[0,w]])}let g=e?jt-.08:-pr,y=e?jt+pr:.08;t.box(g,ce.sill-.09,p-ce.hw-.12,y,ce.sill,p+ce.hw+.12,dt.STONE)}let s=e?jt:0,i=e?-1:1,c=[.6,...ce.c.slice(1).map((p,m)=>(p+ce.c[m])/2),xo-.6];for(let p of c){let m=Math.min(s,s+i*.14),g=Math.max(s,s+i*.14);t.box(m,0,p-.34,g,bo-.7,p+.34,dt.STONE,{bottom:!0});let y=Math.min(s,s+i*.24),b=Math.max(s,s+i*.24);t.box(y,0,p-.44,b,.55,p+.44,dt.STONE,{bottom:!0}),t.box(y,bo-.95,p-.46,b,bo-.7,p+.46,dt.STONE)}let f=Math.min(s,s+i*.05),l=Math.max(s,s+i*.05);t.box(f,0,0,l,.22,xo,dt.STONE,{bottom:!0});let d=Math.min(s,s+i*.32),h=Math.max(s,s+i*.32);t.box(d,bo-.55,0,h,bo-.3,xo,dt.STONE);let v=Math.min(s,s+i*.42),u=Math.max(s,s+i*.42);t.box(v,bo-.3,0,u,bo-.12,xo,dt.STONE)}for(let[e,o]of[[0,1],[xo,-1]]){for(let c=0;c<32;c++){let f=c/32*jt,l=(c+1)/32*jt,d=v=>v<jt/2?bo+la*v:bo+la*(jt-v),h=o>0?[[l,0],[f,0],[f,d(f)],[l,d(l)]]:[[f,0],[l,0],[l,d(l)],[f,d(f)]];t.quad(...h.map(([v,u])=>[v,u,e]),[0,0,o],dt.PLASTER,h.map(([v,u])=>[v,u]))}let r=o>0?0:xo-.05,a=o>0?.05:xo;t.box(0,0,r,jt,.22,a,dt.STONE,{bottom:!0});let s=o>0?0:xo-.32,i=o>0?.32:xo;t.box(0,bo-.55,s,jt,bo-.3,i,dt.STONE)}{let o=jt/2-1.1,n=jt/2+1.1,r=3.9;t.box(o-.3,0,0,o,r+.3,.12,dt.STONE),t.box(n,0,0,n+.3,r+.3,.12,dt.STONE),t.box(o-.3,r,0,n+.3,r+.4,.14,dt.STONE);for(let[a,s]of[[o,jt/2-.01],[jt/2+.01,n]])t.box(a,0,.02,s,r,.02+.06,dt.WOOD),t.box(a+.12,.3,.02+.06,s-.12,1.7,.02+.09,dt.WOOD),t.box(a+.12,2,.02+.06,s-.12,r-.2,.02+.09,dt.WOOD)}dM(t);{let{x0:e,x1:o,z0:n,z1:r,curb:a,top:s}=Rt,i=.06,c=.08;t.box(e-a,0,n-a,e,s-c,r+a,dt.WMARBLE,{bottom:!0}),t.box(o,0,n-a,o+a,s-c,r+a,dt.WMARBLE,{bottom:!0}),t.box(e,0,n-a,o,s-c,n,dt.WMARBLE,{bottom:!0}),t.box(e,0,r,o,s-c,r+a,dt.WMARBLE,{bottom:!0}),t.box(e-a-i,s-c,n-a-i,e+i*.5,s,r+a+i,dt.WMARBLE),t.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,dt.WMARBLE),t.box(e+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,dt.WMARBLE),t.box(e+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,dt.WMARBLE);let f=.5;for(let v=e;v<o-1e-6;v+=f)for(let u=n;u<r-1e-6;u+=f){let p=v,m=Math.min(o,v+f),g=u,y=Math.min(r,u+f);t.quad([p,0,g],[p,0,y],[m,0,y],[m,0,g],[0,1,0],dt.WATER,[[p,g],[p,y],[m,y],[m,g]])}let{x:l,z:d,plinth:h}=pn;t.box(l-.42,0,d-.42,l+.42,h-.12,d+.42,dt.WMARBLE,{bottom:!0}),t.box(l-.5,h-.12,d-.5,l+.5,h,d+.5,dt.WMARBLE),t.box(l-.48,0,d-.48,l+.48,.12,d+.48,dt.WMARBLE,{bottom:!0})}return t}function wM(t){for(let o of[0]){let n=o?jt+pr*.5:-pr*.5,r=.05,a=Fr.w*.5;for(let s of ce.c){for(let i of Fr.cols){let c=rc(i)-.01;t.box(n-r,ce.sill,s+i-a,n+r,c,s+i+a,dt.STEEL)}for(let i=ce.sill+Fr.rowH;i<ce.spring+.01;i+=Fr.rowH)t.box(n-r,i-a,s-ce.hw,n+r,i+a,s+ce.hw,dt.STEEL);for(let[i,c]of[[ce.hw-.03,.06],[Fr.ring,a]])for(let l=0;l<24;l++){let d=l/24*tn,h=(l+1)/24*tn;t.beam([n,ce.spring+Math.sin(d)*i,s+Math.cos(d)*i],[n,ce.spring+Math.sin(h)*i,s+Math.cos(h)*i],c,dt.STEEL,[1,0,0])}for(let i of[-1,1])t.box(n-r,ce.sill,s+i*(ce.hw-.03)-.03,n+r,ce.spring,s+i*(ce.hw-.03)+.03,dt.STEEL);t.box(n-r,ce.sill,s-ce.hw,n+r,ce.sill+.06,s+ce.hw,dt.STEEL)}}let e=o=>o<jt/2?bo+la*o:bo+la*(jt-o);for(let o=0;o<=12;o++){let n=o*Wo.rafter;for(let[r,a]of[[-.3,jt/2],[jt/2,jt+.3]])t.beam([r,e(Math.max(0,Math.min(jt,r)))-.1,n],[a,e(a)-.1,n],.06,dt.STEEL)}for(let o=Wo.purlin;o<jt/2-.2;o+=Wo.purlin)for(let n of[o,jt-o])t.beam([n,e(n)-.06,-.2],[n,e(n)-.06,xo+.2],.035,dt.STEEL);t.beam([jt/2,ca-.14,-.2],[jt/2,ca-.14,xo+.2],.12,dt.STEEL);for(let o of[.05,jt-.05])t.beam([o,bo-.05,0],[o,bo-.05,xo],.1,dt.STEEL);for(let o of Al){t.box(-.05,bo-.13,o-.08,jt+.05,bo+.13,o+.08,dt.STEEL),t.beam([jt/2,bo,o],[jt/2,ca-.2,o],.07,dt.STEEL);for(let n of[-1,1])t.beam([jt/2+n*jt/4,bo,o],[jt/2,ca-.4,o],.055,dt.STEEL),t.beam([jt/2+n*jt/4,bo,o],[jt/2+n*jt/4,e(jt/2+n*jt/4)-.2,o],.045,dt.STEEL),t.beam([jt/2+n*(jt/2-.1),bo,o],[jt/2+n*jt/4,e(jt/2+n*jt/4)-.2,o],.045,dt.STEEL);for(let n of[-1,1])t.box(jt/2+n*jt/4-.12,bo-.18,o-.1,jt/2+n*jt/4+.12,bo+.18,o+.1,dt.STEEL)}}function _M(t){let e=sc(311),o=[],n=[[Rt.x0+.9,6.6,.9,10],[Rt.x1-.8,8.4,.85,9],[Rt.x0+.8,10.6,.8,8],[Rt.x1-.9,12.4,.9,10],[Rt.x0+1,13.9,.65,6],[jt/2+.2,9.6,.5,4],[Rt.x1-.7,15.9,.55,5]];for(let[a,s,i,c]of n)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let d=e()*2*tn,h=i*Math.sqrt(e()),v=a+Math.cos(d)*h,u=s+Math.sin(d)*h,p=.15+e()*.17;if(!(v-p<Rt.x0+.04||v+p>Rt.x1-.04||u-p<Rt.z0+.04||u+p>Rt.z1-.04)&&!(Math.hypot(v-pn.x,u-pn.z)<.62+p)&&!o.some(m=>Math.hypot(m[0]-v,m[1]-u)<(m[2]+p)*.93)){o.push([v,u,p,e()*2*tn,e()]);break}}for(let[a,s,i,c,f]of o){Xg.push([a,s,i]),t.float=[a,s,f*7.3+i*13];let l=28,d=4,h=i*1.08,v=[];for(let u=0;u<=d;u++){let p=[];for(let m=0;m<l;m++){let g=m/l*2*tn,y=u/d,b=g-c,w=.012+.004*(1-y*y)+.006*Math.pow(y,6)*(.5+.5*Math.sin(g*3+f*9));p.push(t.v([a+Math.cos(g)*h*y,w,s+Math.sin(g)*h*y],[0,1,0],dt.PAD,[.5+.5*y*Math.sin(b),.5+.5*y*Math.cos(b)]))}v.push(p)}for(let u=0;u<d;u++)for(let p=0;p<l;p++){let m=v[u][p],g=v[u][(p+1)%l],y=v[u+1][(p+1)%l],b=v[u+1][p];t.idx.push(m,g,y,m,y,b)}}t.float=null;let r=[[Rt.x0+.75,6.9,1],[Rt.x1-.65,8.1,.85],[Rt.x1-.95,12.6,1.1],[Rt.x0+.95,10.3,.8],[Rt.x1-.55,15.6,.9],[Rt.x0+1.15,13.7,.75]];for(let[a,s,i]of r){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,d,h],v)=>{for(let u=0;u<l;u++){let p=2*tn*u/l+v*.33,m=(90-(90-h)*i)*tn/180,g=6,y=4,b=[];for(let w=0;w<=g;w++){let _=w/g,M=(.18+.82*Math.sin(tn*Math.min(1,Math.pow(_,.8)*.75+.1)))*.36*d*c,z=[];for(let I=0;I<=y;I++){let R=I/y*2-1,B=R*M,D=Math.abs(R)*Math.abs(R)*.12*d*c,K=_*d*c,O=K*Math.cos(m),H=K*Math.sin(m)+D,ft=a+Math.cos(p)*O-Math.sin(p)*B,It=s+Math.sin(p)*O+Math.cos(p)*B;z.push(t.v([ft,.03+H,It],[-Math.cos(p)*Math.sin(m)*.6,.8,-Math.sin(p)*Math.sin(m)*.6],dt.PETAL,[(v===2?.5:0)+.5*(.5+.5*R*.92),.98-_*.96]))}b.push(z)}for(let w=0;w<g;w++)for(let _=0;_<y;_++){let M=b[w][_],z=b[w][_+1],I=b[w+1][_+1],R=b[w+1][_];t.idx.push(M,z,I,M,I,R,M,I,z,M,R,I)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],dt.STAMEN,12)}t.float=null}function MM(t){let e=sc(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,dt.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,dt.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,dt.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,f=11.1+(e()-.5)*2.2,l=.035+e()*.04,d=.09+e()*.14;if(t.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+d*.9],[l*.9,.86+d],[0,.86+d]],i%3?dt.JAR:dt.POT,14),i%3===0)for(let h=0;h<7;h++){let v=e()*2*tn,u=.28+e()*.12,p=.12+e()*.2;t.beam([c,.86+.03,f],[c+Math.cos(v)*p*u,.86+.03+u,f+Math.sin(v)*p*u],.0055,dt.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,dt.WOOD)}for(let o=0;o<5;o++){let n=.55+e()*.6,r=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+r*Math.sin(i)*0,r,a];t.quad([s+.18,0,a-n/2],[s+.18,0,a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a-n/2],[Math.cos(i),Math.sin(i),0],o%2?dt.WOOD:dt.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of Yg)t.beam([o[0],bo,o[2]],[o[0],o[1]+.05,o[2]],.008,dt.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],dt.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],dt.BULB,12)}var Yg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],oz=[[Rt.x0-1,Rt.z0-1,1],[Rt.x1+1,Rt.z0-1,.95],[Rt.x0-1,Rt.z1+1,1.15],[Rt.x1+1,Rt.z1+1,1.1],[.9,1.3,1.25],[jt-.9,xo-1.2,1.3]],Ug=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function kM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=sc(1213),o=(n,r,a,s,i)=>{let c=Ug[Math.floor(e()*Ug.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,d=5,h=t.pos.length/3,v=.6+e()*.4;for(let u=0;u<=d;u++){let p=u/d,m=i*p*p*s,g=[n[0]+r[0]*p*s,n[1]+r[1]*p*s-m,n[2]+r[2]*p*s];for(let y of[-.5,.5]){t.pos.push(g[0]+a[0]*y*l+ze[0],g[1]+a[1]*y*l-Math.abs(y)*.08*l+ze[1],g[2]+a[2]*y*l+ze[2]);let b=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...b)||1;t.nrm.push(b[0]/w,Math.abs(b[1]/w)+.2,b[2]/w),t.uv.push(y<0?c[0]:c[2],c[3]-(c[3]-c[1])*p),t.shade.push(v),t.flower.push(0)}}for(let u=0;u<d;u++){let p=h+u*2;t.idx.push(p,p+1,p+3,p,p+3,p+2)}};mM(t,o,e);for(let[n,r,a]of[[Rt.x0-.3,Rt.z0-.3,-1],[Rt.x1+.3,Rt.z1+.3,1],[Rt.x0-.3,Rt.z1+.2,-1]])for(let s=0;s<26;s++){let i=e()*2*tn,c=n+(e()-.3)*.5*-a,f=r+(e()-.5)*.8,l=Rt.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*e();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function SM(){let t=Vg();for(let o of[0]){let n=o?jt+pr*.5+.01:-pr*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of ce.c)for(let i=a-ce.hw;i<a+ce.hw-1e-6;i+=.05){let c=i,f=Math.min(a+ce.hw,i+.05),l=rc(c-a+1e-4)||ce.spring,d=rc(f-a-1e-4)||ce.spring;o?t.quad([n,ce.sill,f],[n,ce.sill,c],[n,l,c],[n,d,f],r,0,[[f,ce.sill],[c,ce.sill],[c,l],[f,d]]):t.quad([n,ce.sill,c],[n,ce.sill,f],[n,d,f],[n,l,c],r,0,[[c,ce.sill],[f,ce.sill],[f,d],[c,l]])}}let e=Math.hypot(la,1);return t.quad([0,bo+.002,xo],[0,bo+.002,0],[jt/2,ca+.002,0],[jt/2,ca+.002,xo],[la/e,-1/e,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,xo],[0,0],[jt/2,0],[jt/2,xo]]),t.quad([jt,bo+.002,0],[jt,bo+.002,xo],[jt/2,ca+.002,xo],[jt/2,ca+.002,0],[-la/e,-1/e,0],1,[[jt,0],[jt,xo],[jt/2,xo],[jt/2,0]]),t}var EM=`
	float hash13(vec3 p3) {
		p3 = fract(p3 * 0.1031);
		p3 += dot(p3, p3.zyx + 31.32);
		return fract((p3.x + p3.y) * p3.z);
	}
	float vnoise3(vec3 p) {
		vec3 i = floor(p), f = fract(p);
		f = f * f * (3.0 - 2.0 * f);
		return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
		           mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
	}
	float fbm3(vec3 p) {
		float s = 0.0, a = 0.5;
		for (int i = 0; i < 5; i++) { s += a * vnoise3(p); p = p * 2.03 + 7.1; a *= 0.5; }
		return s;
	}
`,AM=Yg.map(t=>Ju([t[0],t[1]-.22,t[2]])),Y0=`
	${EM}
	${Wg()}

	// the sky outside: what the windows and the roof show, and what
	// lights the room when the sun does not
	vec3 studioSky(vec3 d) {
		float up = clamp(d.y, -0.2, 1.0);
		vec3 dayZen = vec3(0.22, 0.45, 0.85), dayHor = vec3(0.86, 0.90, 0.92);
		vec3 day = mix(dayHor, dayZen, pow(max(up, 0.0), 0.55));
		float sd = max(dot(d, STUDIO_SUN), 0.0);
		day += vec3(1.0, 0.86, 0.62) * (pow(sd, 6.0) * 0.45 + pow(sd, 60.0) * 0.8);
		vec3 nZen = vec3(0.012, 0.022, 0.05), nHor = vec3(0.05, 0.065, 0.10);
		vec3 nite = mix(nHor, nZen, pow(max(up, 0.0), 0.5));
		// the moon, its halo, and the stars
		nite += vec3(0.55, 0.65, 0.9) * (pow(sd, 12.0) * 0.12 + pow(sd, 120.0) * 0.4) + vec3(0.95, 0.97, 1.0) * smoothstep(0.99955, 0.9997, sd) * 3.0;
		vec3 sg = floor(d * 260.0);
		float star = step(0.9965, hash13(sg)) * smoothstep(0.02, 0.2, d.y) * (0.5 + 0.5 * sin(time * 2.0 + hash13(sg + 3.0) * 30.0));
		nite += vec3(0.9, 0.93, 1.0) * star * 0.7;
		return mix(day, nite, night);
	}

	// the light reaching a point: sun through the openings, the sky
	// through the glass, light bounced off the sunlit floor, and at night
	// the pendant lamps. Returns diffuse light; spec gets the sun's glint.
	vec3 studioLight(vec3 pw, vec3 N, vec3 V, float gloss, out vec3 spec, out float sunVis) {
		vec3 p = pw - vec3(${xt(ze[0])}, ${xt(ze[1])}, ${xt(ze[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${xt(bo)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${xt(jt)} - p.x), min(p.z, ${xt(xo)} - p.z));
		float occ = mix(0.55, 1.0, smoothstep(0.0, 2.2, dw)) * mix(0.72, 1.0, smoothstep(0.0, 2.5, p.y));
		vec3 skyC = mix(vec3(0.70, 0.65, 0.58), vec3(0.028, 0.042, 0.08), night);
		col += skyC * (0.22 + 0.62 * upF) * occ * (0.85 + 0.3 * hgt) * 0.36;
		// the bright left windows, seen from walls and things facing them
		col += mix(vec3(1.0, 0.86, 0.66), vec3(0.06, 0.08, 0.14), night) * max(-N.x, 0.0) * 0.16 * occ;
		// light thrown back up off the sunlit floor: warm, from below
		float pools = mix(1.0, 0.15, night);
		col += vec3(0.95, 0.68, 0.42) * pools * (0.12 + 0.26 * max(-N.y, 0.0)) * (1.0 - smoothstep(0.5, 6.0, p.y)) * smoothstep(0.0, 1.2, dw);

		// the lamps (by night)
		if (night > 0.01) {
			${AM.map(t=>`
			{
				vec3 d = vec3(${xt(t[0])}, ${xt(t[1])}, ${xt(t[2])}) - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				// the shade throws the light downwards
				float cone = smoothstep(0.05, 0.55, Ld.y);
				float w = night * 6.5 * cone / (1.0 + dd * 0.9);
				col += vec3(1.0, 0.66, 0.36) * w * (max(dot(N, Ld), 0.0) * 0.85 + 0.15);
				spec += vec3(1.0, 0.7, 0.4) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss;
			}`).join("")}
		}
		return col;
	}

	// the dusty, sun-warmed air between the eye and a surface
	vec3 studioAir(vec3 col, vec3 pw, vec3 eye) {
		float d = length(pw - eye);
		float h = 1.0 - exp(-d * 0.035);
		vec3 airC = mix(vec3(0.36, 0.30, 0.24), vec3(0.02, 0.03, 0.05), night);
		return mix(col, airC, h * 0.25);
	}
`;function zM(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:f}}function Sl(t,e,o){let n=o&&o.wrap||"clamp",r=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:r,ready:!1};return fetch(e).then(s=>{if(!s.ok)throw new Error("Could not load "+e);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let f=new Image;f.onload=()=>i(f),f.onerror=c,f.src=URL.createObjectURL(s)}))).then(s=>{r({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:n}),a.ready=!0}).catch(s=>console.error(s)),a}var zl=8,TM=.3,K0=`
	uniform float stime;
	uniform vec4 ripples[${zl}];
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0025 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0015 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
		for (int i = 0; i < ${zl}; i++) {
			vec4 r = ripples[i];
			if (r.w <= 0.0) continue;
			float d = length(xz - r.xy);
			float x = d - r.z * ${xt(TM)};
			// a packet of a few rings, fading as it spreads
			float env = exp(-x * x * 30.0) * exp(-r.z * 0.38) * r.w / (1.0 + d * 3.0);
			h += 0.009 * sin(x * 42.0) * env;
		}
		return h;
	}
`,Bg=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	attribute vec4 anchor;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${K0}
	void main() {
		vec3 q = position;
		vec3 n = normal;
		if (anchor.w > 0.5) {
			// floating: a slow wander, a slow turn, and riding the water
			vec2 c = anchor.xy;
			float sd = anchor.z;
			vec2 drift = vec2(sin(stime * 0.045 + sd * 6.3), cos(stime * 0.037 + sd * 4.1)) * 0.05;
			float rot = sin(stime * 0.05 + sd * 9.0) * 0.18;
			vec2 rel = q.xz - c;
			float cr = cos(rot), sr = sin(rot);
			rel = vec2(cr * rel.x - sr * rel.y, sr * rel.x + cr * rel.y);
			vec2 cc = c + drift;
			q.xz = cc + rel;
			// lift and tilt with the water under it
			float h0 = poolHeight(cc);
			float e = 0.08;
			vec2 grad = vec2(poolHeight(cc + vec2(e, 0.0)) - h0, poolHeight(cc + vec2(0.0, e)) - h0) / e;
			q.y += h0 * 1.4 + dot(rel, grad) * 1.4;
			n = normalize(vec3(n.x - grad.x * n.y, n.y, n.z - grad.y * n.y));
		}
		v_pos = q; v_nrm = n; v_kind = kind; v_uv = uv;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = q; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,LM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex;
	${K0}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${Y0}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${xt(ze[0])}, ${xt(ze[1])}, ${xt(ze[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${dt.PETAL}.0)) N = -N;
		if (is(${dt.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${dt.FLOOR}.0) || is(${dt.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${dt.BRACT}.0)) {
			vec2 u = vec2(fract(v_uv.x), v_uv.y) * 2.0 - 1.0;
			float heart = length(vec2(u.x * 1.1, u.y + 0.15 * abs(u.x) * 2.0 - 0.1)) ;
			if (heart > 0.85 + 0.1 * sin(atan(u.y, u.x) * 3.0)) discard;
		}
		vec3 base = vec3(0.5);
		float gloss = 0.1;
		float checker = 0.0;
		float rough = 1.0;
		float aoK = 1.0;
		float sss = 0.0;

		if (is(${dt.PLASTER}.0) || is(${dt.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${xt(bo-2)}, ${xt(bo)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${dt.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${dt.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${dt.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${dt.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${dt.FLOOR}.0)) {
			// the gallery's own floor: polished chequered marble, black and
			// dark cream, laid on the diagonal, with fine veins and hair-line
			// grout, the polish duller where people walk
			vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (p.xz - vec2(${xt(jt/2)}, 0.0));
			float tileSize = 0.62;
			vec2 tile = floor(tq / tileSize);
			checker = mod(tile.x + tile.y, 2.0);
			float rnd = hash13(vec3(tile, 5.0));
			vec3 lightTile = vec3(0.44, 0.37, 0.24) * (0.9 + 0.16 * rnd);
			vec3 darkTile = vec3(0.0008, 0.0007, 0.0006) + vec3(0.0002) * rnd;
			float vein = abs(sin(tq.x * 5.5 + tq.y * 2.0 + sin(tq.y * 1.6) + rnd * 6.0));
			vein = 1.0 - smoothstep(0.0, 0.09, vein);
			base = mix(lightTile, darkTile, checker);
			base = mix(base, base * 0.65, vein * 0.35 * (1.0 - checker));
			base = mix(base, base * 2.2 + 0.0006, vein * 0.18 * checker);
			vec2 tf = fract(tq / tileSize);
			float edge = min(min(tf.x, 1.0 - tf.x), min(tf.y, 1.0 - tf.y)) * tileSize;
			float grout = 1.0 - smoothstep(0.0, 0.006, edge);
			base *= 1.0 - 0.45 * grout;
			gloss = (0.86 + 0.28 * hash13(vec3(tile, 17.0))) * (1.0 - 0.5 * grout);
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${xt(jt)} - p.x), min(p.z, ${xt(xo)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${xt(Rt.x0-Rt.curb)} - p.x, p.x - ${xt(Rt.x1+Rt.curb)}), vec2(${xt(Rt.z0-Rt.curb)} - p.z, p.z - ${xt(Rt.z1+Rt.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${dt.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${dt.REDDOOR}.0) || is(${dt.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${dt.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${dt.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${dt.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${dt.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${dt.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${dt.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${dt.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${dt.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${dt.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${dt.MARBLE}.0)) {
			// warm white marble with faint grey veins
			float v = fbm3(p * 2.2);
			float vein = 1.0 - smoothstep(0.0, 0.035, abs(sin((p.y * 3.0 + p.x * 2.0 + v * 6.0))) - 0.0) ;
			base = mix(vec3(0.86, 0.83, 0.77), vec3(0.93, 0.91, 0.86), v) * (1.0 - 0.06 * vein);
			// a little grime in the folds, darker at the foot
			base *= mix(0.84, 1.0, smoothstep(${xt(pn.plinth)}, ${xt(pn.plinth+.5)}, p.y));
			sss = 0.18;
			gloss = 0.32;
		} else if (is(${dt.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${dt.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${dt.PAINT}.0)) {
			// a canvas in progress (until his own go here): a warm toned
			// ground, a loose underpainting and a few strokes
			vec2 u = fract(v_uv);
			float idx = floor(v_uv.x);
			float sk = fbm3(vec3(u * vec2(3.0, 4.0), idx * 3.7));
			vec3 ground = mix(vec3(0.55, 0.36, 0.22), vec3(0.72, 0.56, 0.40), sk);
			float fig = smoothstep(0.32, 0.2, length((u - vec2(0.5, 0.58 + 0.04 * idx)) * vec2(1.4, 0.9)) + 0.15 * sk);
			base = mix(ground, vec3(0.22, 0.13, 0.08), fig * 0.6);
			base = mix(base, vec3(0.86, 0.80, 0.70), smoothstep(0.74, 0.8, fbm3(vec3(u * 9.0, idx))) * 0.5);
			float weave = 0.5 + 0.5 * sin(u.x * 610.0) * sin(u.y * 920.0);
			base *= 0.95 + 0.05 * weave;
			gloss = 0.3;
		} else if (is(${dt.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${dt.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${dt.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${dt.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${dt.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${dt.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${xt(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${dt.CLOTH}.0)) {
			float sp = smoothstep(0.86, 0.88, vnoise3(vec3(p.xz * 14.0, 5.0))) * smoothstep(0.5, 0.7, vnoise3(vec3(p.xz * 1.5, 1.0)));
			float sp2 = smoothstep(0.88, 0.9, vnoise3(vec3(p.xz * 19.0, 9.0))) * smoothstep(0.55, 0.75, vnoise3(vec3(p.xz * 1.2, 4.0)));
			base = vec3(0.52, 0.48, 0.42) * (0.9 + 0.12 * vnoise3(p * 25.0));
			base = mix(base, vec3(0.62, 0.30, 0.14), sp * 0.8);
			base = mix(base, vec3(0.20, 0.25, 0.35), sp2 * 0.7);
		}

		vec3 spec;
		float sunVis;
		vec3 light = studioLight(pw, N, V, gloss, spec, sunVis);
		vec3 col = base * light * aoK;

		// a soft sheen of light through the skin of petals and marble
		if (sss > 0.0) {
			float back = max(dot(-N, STUDIO_SUN), 0.0) * sunVis;
			float wrap = max(dot(N, STUDIO_SUN) + 0.5, 0.0) / 1.5 * sunVis;
			col += base * vec3(1.0, 0.82, 0.62) * (back * 0.8 + wrap * 0.6) * sss * mix(1.0, 0.1, night);
		}

		// reflections of the room and sky in the glossy things
		vec3 R = reflect(-V, N);
		float fres = pow(1.0 - max(dot(N, V), 0.0), 5.0);
		vec3 env = studioSky(R) * mix(0.35, 0.12, smoothstep(0.0, 0.5, -R.y)) * 0.8;
		col += spec;
		if (is(${dt.POT}.0) || is(${dt.STEEL}.0) || is(${dt.SHADE}.0) || is(${dt.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${dt.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${dt.REDDOOR}.0) || is(${dt.REDPANEL}.0) || is(${dt.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${dt.FLOOR}.0)) {
			// as polished as the gallery's: a clear reflection even looking
			// down, a mirror at grazing angles, more on the black tiles
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
			refl *= mix(0.72, 1.0, checker);
			refl *= gloss;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.4, 0.0, 0.45));
		}
		if (is(${dt.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = 0.012;
			float h0 = poolHeight(pw.xz);
			vec2 grad = vec2(poolHeight(pw.xz + vec2(e, 0.0)) - h0, poolHeight(pw.xz + vec2(0.0, e)) - h0) / e;
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			float stir = clamp(length(grad) * 9.0, 0.0, 1.0);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float F = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			float refl = mix(0.30, 0.95, F);
			// the sun (or the moon) glinting on the moving water
			vec3 Rw = reflect(-V, Nw);
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * sunVis;
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			col = base * light * 0.35 + glintC * glint;
			// where the rings pass, the mirror breaks into bands: crests tipped
			// away from you catch the bright roof, troughs show the dark depth
			float side = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 9.0, -1.0, 1.0);
			vec3 hi = studioSky(Rw) * mix(0.55, 0.30, night) + light * 0.04;
			vec3 lo = vec3(0.008, 0.011, 0.010);
			vec3 ringC = mix(lo, hi, 0.5 + 0.5 * side);
			col = mix(col, ringC, stir * 0.6);
			col = studioAir(col, pw, v_eye);
			alpha = 1.0 - refl * mirrorOn * (1.0 - stir * 0.6);
			alpha = max(alpha, glint);
			if (mirrorOn < 0.5) { col = mix(col, studioSky(Rw) * 0.35, F); alpha = 1.0; }
		}

		col = max(col, vec3(0.0));
		gl_FragColor = vec4(sqrt(col), alpha);
	}`;Aa.exports=function(t){let e=bM();wM(e),_M(e),MM(e),pM(e),vM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),r={t:0,ripples:[]};for(let it=0;it<zl;it++)r.ripples.push([0,0,0,0]);let a=0,s=()=>{r.t=(performance.now()-n)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(r.t=window.__studioFreeze);let it=[];for(let wt of Hg){let Me=gM(wt,r.t),kt=Me.ph-Me.Tf;Me.inPool&&kt>=0&&kt<.5&&!(wt.heard>r.t-1)&&(wt.heard=r.t,td.play(Me.lx+ze[0],Me.lz+ze[2],.4)),Me.inPool&&kt>=0&&kt<9&&it.push([Me.lx+ze[0],Me.lz+ze[2],kt,1])}let Lt=r.t-b.sim.t;for((Lt<0||Lt>120)&&(Lt=Math.min(Math.max(Lt,0),120));Lt>1e-6;){let wt=Math.min(Lt,.05);b.sim.step(wt),Lt-=wt}for(let wt of b.sim.events){let Me=r.t-wt[2];Me>=0&&Me<9&&it.push([wt[0]+ze[0],wt[1]+ze[2],Me,wt[3]])}for(let wt of b.sim.events)wt[2]>a&&(a=wt[2],td.play(wt[0]+ze[0],wt[1]+ze[2],wt[3]*.8));it.sort((wt,Me)=>wt[2]-Me[2]);for(let wt=0;wt<zl;wt++)r.ripples[wt]=it[wt]||[0,0,0,0]},i={stime:()=>r.t};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=r);for(let it=0;it<zl;it++)i["ripples["+it+"]"]=()=>r.ripples[it];let c=Sl(t,"res/pond/lilypad.webp"),f=Sl(t,"res/pond/petals.webp"),l=Object.assign({padTex:()=>c.tex,petalTex:()=>f.tex},i),d=(it,Lt)=>t({vert:Bg,frag:LM,attributes:{position:it.pos,normal:it.nrm,kind:it.kind,uv:it.uv,anchor:it.anchor&&it.anchor.length?it.anchor:new Float32Array(it.pos.length/3*4)},elements:new Uint32Array(it.idx),count:Lt||it.idx.length,uniforms:l,cull:{enable:!1},blend:o}),h=d(e),v=null;fetch(pn.file).then(it=>{if(!it.ok)throw new Error("Could not load "+pn.file);return it.arrayBuffer()}).then(it=>{let Lt=zM(it),wt={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},Me=pn.height,kt=Math.cos(pn.yaw),Ct=Math.sin(pn.yaw);for(let Ft=0;Ft<Lt.nV;Ft++){let ge=(Lt.mn[0]+Lt.pos[Ft*3]/65535*Lt.sz[0])*Me,Pe=(Lt.mn[1]+Lt.pos[Ft*3+1]/65535*Lt.sz[1])*Me,pe=(Lt.mn[2]+Lt.pos[Ft*3+2]/65535*Lt.sz[2])*Me;wt.pos.push(pn.x+kt*ge+Ct*pe+ze[0],pn.plinth+Pe+ze[1],pn.z-Ct*ge+kt*pe+ze[2]);let oe=Lt.nrm[Ft*3]/127,ct=Lt.nrm[Ft*3+1]/127,te=Lt.nrm[Ft*3+2]/127;wt.nrm.push(kt*oe+Ct*te,ct,-Ct*oe+kt*te),wt.kind.push(dt.MARBLE),wt.uv.push(0,0)}for(let Ft=0;Ft<Lt.nI;Ft++)wt.idx.push(Lt.idx[Ft]);v=d(wt)}).catch(it=>console.error(it));let u=Sl(t,"res/tree/leaves.webp"),p=kM(),m=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float shade, flower;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv; v_shade = shade; v_flower = flower;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D tex;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		${Y0}
		vec2 hash22(vec2 p) {
			vec3 a = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
			a += dot(a, a.yzx + 33.33);
			return fract((a.xx + a.yz) * a.zy);
		}
		// a clump of bougainvillea: papery bracts in threes, magenta or white
		vec4 blossom(vec2 uv, float seed) {
			vec2 c = uv - 0.5;
			float edge = length(c) * 2.0;
			if (edge > 0.95) return vec4(0.0);
			vec2 q = uv * 4.0 + seed * 13.0;
			vec2 cell = floor(q), fq = fract(q);
			float best = 0.0; float tone = 0.0; vec2 bl = vec2(0.0);
			for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
				vec2 o = vec2(float(i), float(j));
				vec2 h = hash22(cell + o);
				if (h.x > 0.96) continue;
				vec2 ctr = o + 0.2 + 0.6 * hash22(cell + o + 7.0);
				vec2 d = fq - ctr;
				float rot = h.y * 6.283;
				// three bracts round the centre
				for (int k = 0; k < 3; k++) {
					float a = rot + float(k) * 2.094;
					vec2 bc = vec2(cos(a), sin(a)) * 0.2;
					vec2 dd = d - bc;
					float m = smoothstep(0.26, 0.2, length(dd * vec2(1.0, 1.25)));
					if (m > best) { best = m; tone = h.y; bl = dd; }
				}
			}
			best *= smoothstep(0.95, 0.6, edge + 0.25 * (hash22(cell).x - 0.5));
			return vec4(bl, tone, best);
		}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			if (v_flower > 0.5) {
				vec4 b = blossom(v_uv, v_shade);
				if (b.w < 0.5) discard;
				bool white = v_shade > 0.9 || b.z > 0.93;
				vec3 pink = mix(vec3(0.62, 0.02, 0.24), vec3(0.78, 0.08, 0.36), b.z);
				vec3 base = white ? vec3(0.84, 0.80, 0.80) : pink;
				// the bract's veins and its paler heart
				base *= 0.8 + 0.3 * smoothstep(0.25, 0.0, length(b.xy));
				vec3 spec; float sv;
				vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
				float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
				vec3 col = base * light + base * vec3(1.0, 0.75, 0.8) * through * 2.6 * (1.0 - night) + spec * 0.15;
				col = studioAir(col, v_pos, v_eye);
				gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				return;
			}
			vec4 t = texture2D(tex, v_uv);
			if (t.a < 0.5) discard;
			vec3 base = t.rgb * t.rgb * vec3(0.8, 0.95, 0.75) * v_shade;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.4, spec, sv);
			// light through the leaf
			float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * vec3(0.9, 1.0, 0.5) * through * 2.2 * (1.0 - night) + spec * 0.3;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:p.pos,normal:p.nrm,uv:p.uv,shade:p.shade,flower:p.flower},elements:new Uint32Array(p.idx),uniforms:{tex:u.tex},cull:{enable:!1}}),g=(()=>{let it={corner:[],start:[],par:[],misc:[],idx:[]};return Hg.forEach((Lt,wt)=>{for(let Me of[[-1,-1],[1,-1],[1,1],[-1,1]])it.corner.push(Me[0],Me[1]),it.start.push(Lt.start[0]+ze[0],Lt.start[1],Lt.start[2]+ze[2]),it.par.push(Lt.period,Lt.offset,Lt.drift[0],Lt.drift[1]),it.misc.push(Lt.speed,Lt.seed,Lt.white);it.idx.push(wt*4,wt*4+1,wt*4+2,wt*4,wt*4+2,wt*4+3)}),it})(),y=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		attribute vec3 start;
		attribute vec4 par;
		attribute vec3 misc;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${K0}
		mat3 rotAxis(vec3 a, float t) {
			float c = cos(t), s = sin(t), ic = 1.0 - c;
			return mat3(c + a.x * a.x * ic, a.y * a.x * ic + a.z * s, a.z * a.x * ic - a.y * s,
			            a.x * a.y * ic - a.z * s, c + a.y * a.y * ic, a.z * a.y * ic + a.x * s,
			            a.x * a.z * ic + a.y * s, a.y * a.z * ic - a.x * s, c + a.z * a.z * ic);
		}
		void main() {
			float P = par.x, speed = misc.x, seed = misc.y;
			float tt = stime + par.y;
			float cyc = floor(tt / P);
			float ph = tt - cyc * P;
			float m = 0.6 + 0.4 * sin(cyc * 1.7 + seed * 5.0);
			vec2 land = start.xz + par.zw * m;
			vec2 lq = land - vec2(${xt(ze[0])}, ${xt(ze[2])});
			bool inPool = lq.x > ${xt(Q0[0])} && lq.x < ${xt(Q0[2])} && lq.y > ${xt(Q0[1])} && lq.y < ${xt(Q0[3])};
			float rest = inPool ? 0.017 : 0.006;
			float Tf = (start.y - rest) / speed;
			float s = clamp(ph / Tf, 0.0, 1.0);
			float size = 0.03 + 0.012 * seed;
			vec3 local = vec3(corner.x, 0.0, corner.y) * size;
			vec3 n = vec3(0.0, 1.0, 0.0);
			vec3 pos;
			if (ph < Tf) {
				// falling: a lazy sway from side to side, tumbling as it goes
				vec2 sway = vec2(sin(tt * 1.3 + seed * 7.0), cos(tt * 1.05 + seed * 3.0)) * 0.35 * sin(s * 3.14159);
				pos = vec3(start.x + (land.x - start.x) * s + sway.x, start.y - (start.y - rest) * s, start.z + (land.y - start.z) * s + sway.y);
				vec3 ax = normalize(vec3(sin(seed * 11.0), 0.6, cos(seed * 7.0)));
				mat3 R = rotAxis(ax, tt * (2.0 + seed * 2.5));
				// it flutters flatter as it slows near the ground
				local = R * local; n = R * n;
			} else {
				pos = vec3(land.x, rest, land.y);
				float a = seed * 6.283;
				mat3 Y = rotAxis(vec3(0.0, 1.0, 0.0), a);
				local = Y * local;
				if (inPool) {
					// floating: carried slowly, riding the swell and the rings
					float age = ph - Tf;
					pos.xz += vec2(sin(age * 0.12 + seed * 9.0), cos(age * 0.1 + seed * 5.0)) * 0.06 * min(age * 0.2, 1.0);
					float h0 = poolHeight(pos.xz);
					vec2 grad = vec2(poolHeight(pos.xz + vec2(0.05, 0.0)) - h0, poolHeight(pos.xz + vec2(0.0, 0.05)) - h0) / 0.05;
					pos.y += h0 * 1.4;
					local.y += dot(local.xz, grad) * 1.4;
					n = normalize(vec3(-grad.x, 1.0, -grad.y));
				}
			}
			// grow out of the flower at the start, fade away at the end
			v_fade = smoothstep(0.0, 1.2, ph) * (1.0 - smoothstep(P - 3.0, P - 0.2, ph));
			vec3 q = pos + local * (0.4 + 0.6 * v_fade);
			v_pos = q; v_nrm = n; v_uv = corner * 0.5 + 0.5; v_white = misc.z;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = q; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${Y0}
		void main() {
			vec2 u = v_uv * 2.0 - 1.0;
			float heart = length(vec2(u.x * 1.1, u.y + 0.15 * abs(u.x) * 2.0 - 0.1));
			if (heart > 0.85 + 0.1 * sin(atan(u.y, u.x) * 3.0)) discard;
			if (v_fade < 0.02) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			vec3 base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), v_white);
			base *= 0.85 + 0.25 * smoothstep(0.9, 0.0, heart);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
			float through = abs(dot(N, STUDIO_SUN)) * sv;
			vec3 col = base * light + base * vec3(1.0, 0.75, 0.8) * through * 1.6 * (1.0 - night);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{corner:g.corner,start:g.start,par:g.par,misc:g.misc},elements:new Uint32Array(g.idx),uniforms:i,cull:{enable:!1}}),b={sim:yM(),ready:!1};Tl=b.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=b.sim);let w=Object.assign({},i);Ua.forEach((it,Lt)=>{w["koiA["+Lt+"]"]=()=>{let wt=b.sim.fish[Lt];return[wt.x+ze[0],wt.y,wt.z+ze[2],wt.th]},w["koiB["+Lt+"]"]=()=>{let wt=b.sim.fish[Lt];return[wt.kappa,wt.ph,wt.v,wt.pitch]}});let _=(()=>{let Lt=Math.round(96*(Rt.z1-Rt.z0)/(Rt.x1-Rt.x0)),wt=new Uint8Array(96*Lt*4),Me=[-a0[0]/a0[1]*-kl,-a0[2]/a0[1]*-kl],kt=96/(Rt.x1-Rt.x0),Ct=Lt/(Rt.z1-Rt.z0);for(let Ft=0;Ft<Lt;Ft++)for(let ge=0;ge<96;ge++){let Pe=Rt.x0+(ge+.5)/kt,pe=Rt.z0+(Ft+.5)/Ct,oe=0;for(let ct of Xg){let te=Math.hypot(Pe-(ct[0]+Me[0]),pe-(ct[1]+Me[1]));oe=Math.max(oe,1-Math.min(1,Math.max(0,(te-ct[2]*.82)/(ct[2]*.35))))}wt[(Ft*96+ge)*4]=Math.round(oe*255),wt[(Ft*96+ge)*4+3]=255}return t.texture({width:96,height:Lt,data:wt,min:"linear",mag:"linear"})})(),M=`
		uniform vec4 koiA[${Ua.length}], koiB[${Ua.length}];
		// where we see a point under the water: at the surface's own depth
		vec4 underPos(vec3 q, mat4 proj, mat4 view, float order) {
			vec3 tr = view[3].xyz;
			vec3 eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			vec4 cq = proj * view * vec4(q, 1.0);
			vec3 sp = eye + (q - eye) * (eye.y / max(eye.y - q.y, 1e-4));
			vec4 cs = proj * view * vec4(sp, 1.0);
			float zs = cs.z / cs.w;
			// a whisker in front of the water, keeping near-before-far among
			// themselves
			float z = zs - 3e-5 + clamp((cq.z / cq.w - zs) * 1e-3, 0.0, 2e-5) * order;
			return vec4(cq.xy, z * cq.w, cq.w);
		}
		vec3 eyeOf(mat4 view) {
			vec3 tr = view[3].xyz;
			return -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
		}
	`,z=`
		uniform vec4 koiA[${Ua.length}], koiB[${Ua.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${xt(a0[0])}, ${xt(a0[1])}, ${xt(a0[2])});
		// light focused by the moving surface onto what's beneath it
		float caustic(vec2 p, float t) {
			vec2 q = p * 7.0;
			float c = 0.0;
			for (int i = 0; i < 3; i++) {
				q += vec2(sin(q.y * 0.9 + t * 0.9), cos(q.x * 0.8 - t * 0.7)) * 0.55;
				c += abs(sin(q.x) + sin(q.y));
			}
			return pow(max(1.0 - c / 3.6, 0.0), 2.5) * 4.0;
		}
		// how much a pad shades a point at height y below it
		float padShade(vec3 pw) {
			vec2 lp = pw.xz - vec2(${xt(ze[0])}, ${xt(ze[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${xt(kl)});
			vec2 uv = (lp - back - vec2(${xt(Rt.x0)}, ${xt(Rt.z0)})) / vec2(${xt(Rt.x1-Rt.x0)}, ${xt(Rt.z1-Rt.z0)});
			return texture2D(padShadow, uv).r;
		}
		// the sun's share of the light under the water at pw
		vec3 underSun(vec3 pw, vec3 N, float sv, out vec3 sunPart) {
			vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
			sunPart = sunC * sv * max(dot(N, W_SUN), 0.0);
			float ca = caustic(pw.xz - W_SUN.xz / W_SUN.y * pw.y, stime);
			return sunPart * (1.0 - 0.85 * padShade(pw)) * (0.35 + 1.25 * ca);
		}
		// what the water does to light that comes back up through it
		float showThrough(vec3 V) {
			float cosV = clamp(V.y, 0.0, 1.0);
			float Fr = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			return 1.0 - mix(0.05, 0.93, Fr);
		}
	`,I=(()=>{let it=[],Lt=[],wt=[],Me=[],kt=(Zt,so,k,Be,Ie)=>(it.push(Zt+ze[0],so,k+ze[2]),Lt.push(...Be),wt.push(Ie),it.length/3-1),Ct=(Zt,so,k,Be,Ie,no,uo)=>{let wo=it.length/3;for(let mo=0;mo<=Be;mo++)for(let Ho=0;Ho<=Ie;Ho++)kt(Zt[0]+so[0]*mo/Be+k[0]*Ho/Ie,Zt[1]+so[1]*mo/Be+k[1]*Ho/Ie,Zt[2]+so[2]*mo/Be+k[2]*Ho/Ie,no,uo);for(let mo=0;mo<Be;mo++)for(let Ho=0;Ho<Ie;Ho++){let ir=wo+mo*(Ie+1)+Ho;Me.push(ir,ir+1,ir+Ie+2,ir,ir+Ie+2,ir+Ie+1)}},{x0:Ft,x1:ge,z0:Pe,z1:pe}=Rt,oe=kl;Ct([Ft,oe,Pe],[ge-Ft,0,0],[0,0,pe-Pe],8,22,[0,1,0],0),Ct([Ft,0,Pe],[0,0,pe-Pe],[0,oe,0],22,2,[1,0,0],1),Ct([ge,0,Pe],[0,0,pe-Pe],[0,oe,0],22,2,[-1,0,0],1),Ct([Ft,0,Pe],[ge-Ft,0,0],[0,oe,0],8,2,[0,0,1],1),Ct([Ft,0,pe],[ge-Ft,0,0],[0,oe,0],8,2,[0,0,-1],1);let ct=pn.x-.42,te=pn.x+.42,Ee=pn.z-.42,le=pn.z+.42;return Ct([ct,0,Ee],[0,0,le-Ee],[0,oe,0],2,2,[-1,0,0],1),Ct([te,0,Ee],[0,0,le-Ee],[0,oe,0],2,2,[1,0,0],1),Ct([ct,0,Ee],[te-ct,0,0],[0,oe,0],2,2,[0,0,-1],1),Ct([ct,0,le],[te-ct,0,0],[0,oe,0],2,2,[0,0,1],1),{pos:it,nrm:Lt,kd:wt,idx:Me}})(),R=Sl(t,"res/pond/gravel.jpg",{wrap:"repeat"}),B=Object.assign({padShadow:_,gravel:()=>R.tex},w),D=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${K0}
		${M}
		void main() {
			vec3 q = position;
			float h0 = poolHeight(q.xz);
			vec2 grad = vec2(poolHeight(q.xz + vec2(0.03, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.03)) - h0) / 0.03;
			q.xz -= grad * (-q.y) * 1.2;
			v_pos = q; v_nrm = normal; v_kd = kd; v_eye = eyeOf(view);
			gl_Position = underPos(q, proj, view, 0.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D gravel;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${K0}
		${Y0}
		${z}
		float klen(int i) {
			${Ua.map((it,Lt)=>`if (i == ${Lt}) return ${xt(it.len)};`).join(" ")}
			return 0.45;
		}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			vec3 base;
			if (v_kd < 0.5) {
				base = texture2D(gravel, v_pos.xz * 1.9).rgb;
				base = base * base * vec3(1.25, 1.18, 1.0);
			} else {
				// the marble going down into the water, greening towards the bed
				vec2 wp = abs(N.x) > 0.5 ? v_pos.zy : v_pos.xy;
				base = vec3(0.70, 0.68, 0.62) * (0.92 + 0.12 * fract(sin(dot(floor(wp * 40.0), vec2(12.9, 78.2))) * 43758.5));
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${xt(kl)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${Ua.length}; i++) {
				vec4 A = koiA[i];
				float len = klen(i);
				vec2 F = vec2(cos(A.w), sin(A.w));
				vec2 c = A.xz - F * len * 0.42 - W_SUN.xz / W_SUN.y * (A.y - v_pos.y);
				vec2 d = v_pos.xz - c;
				float h = A.y - v_pos.y;
				float ell = pow(dot(d, F) / (len * 0.46), 2.0) + pow(dot(d, vec2(-F.y, F.x)) / (len * 0.12 + h * 0.08), 2.0);
				sh = max(sh, smoothstep(1.0, 0.25, ell) * (0.75 - h * 0.6));
			}
			lit *= 1.0 - sh;
			vec3 col = base * ((light - sunPart) * 0.9 + lit);
			// down through the water and back up again
			float path = -v_pos.y * (1.0 + 1.0 / max(V.y, 0.25));
			vec3 tr = exp(-path * vec3(0.75, 0.38, 0.48));
			col = col * tr + vec3(0.012, 0.020, 0.015) * (1.0 - tr) * mix(1.0, 0.12, night);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), showThrough(V) * 0.93);
		}`,attributes:{position:I.pos,normal:I.nrm,kd:I.kd},elements:new Uint16Array(I.idx),uniforms:B,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),K=Sl(t,"res/koi.webp"),O=null,H=null;fetch("res/koi.bin").then(it=>{if(!it.ok)throw new Error("Could not load res/koi.bin");return it.arrayBuffer()}).then(it=>{let Lt=new DataView(it),wt=Lt.getUint32(4,!0),Me=Lt.getUint32(8,!0),kt=Lt.getFloat32(12,!0),Ct=16,Ft=new Uint16Array(it,Ct,wt);Ct+=wt*2;let ge=new Int16Array(it,Ct,wt*2);Ct+=wt*4;let Pe=new Uint16Array(it,Ct,wt*2);Ct+=wt*4;let pe=new Uint16Array(it,Ct,Me);Ct+=Me*2;let oe=new Int8Array(it,Ct,wt*3);Ct+=wt*3;let ct=new Uint8Array(it,Ct,wt*2),te=Ua.length,Ee=new Float32Array(wt*3*te),le=new Float32Array(wt*3*te),Zt=new Float32Array(wt*2*te),so=new Float32Array(wt*2*te),k=new Float32Array(wt*4*te);Ua.forEach((no,uo)=>{for(let wo=0;wo<wt;wo++){let mo=uo*wt+wo;Ee[mo*3]=Ft[wo]/65535*1.2,Ee[mo*3+1]=ge[wo*2]/32767*kt,Ee[mo*3+2]=ge[wo*2+1]/32767*kt,le[mo*3]=oe[wo*3]/127,le[mo*3+1]=oe[wo*3+1]/127,le[mo*3+2]=oe[wo*3+2]/127,Zt[mo*2]=Pe[wo*2]/65535,Zt[mo*2+1]=Pe[wo*2+1]/65535,so[mo*2]=ct[wo*2]/255,so[mo*2+1]=ct[wo*2+1]/255,k[mo*4]=no.len,k[mo*4+1]=no.kind,k[mo*4+2]=uo,k[mo*4+3]=0}});let Be=[],Ie=[];for(let no=0;no<te;no++)for(let uo=0;uo<Me;uo+=3){let wo=pe[uo],mo=pe[uo+1],Ho=pe[uo+2];(Math.max(ct[wo*2],ct[mo*2],ct[Ho*2])>140?Ie:Be).push(wo+no*wt,mo+no*wt,Ho+no*wt)}H={body:t.elements({data:new Uint32Array(Be),type:"uint32"}),fins:t.elements({data:new Uint32Array(Ie),type:"uint32"})},O=t({vert:`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${K0}
				${M}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${Ua.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
					float th = A.w, kap = B.x, ph = B.y, v = B.z, pitch = B.w;
					vec3 f = vec3(cos(th), 0.0, sin(th));
					vec3 nl = vec3(-sin(th), 0.0, cos(th));
					// the spine bends along the arc of the turn, behind the nose
					float u = loc.x;
					float s = max(u, 0.0) * len;
					float ka = abs(kap) < 1e-3 ? 1e-3 : kap;
					vec3 P = A.xyz - f * (sin(ka * s) / ka) + nl * ((1.0 - cos(ka * s)) / ka);
					P.y = A.y - pitch * s;
					vec3 F = normalize(f * cos(ka * s) - nl * sin(ka * s) + vec3(0.0, pitch, 0.0));
					vec3 Sd = normalize(vec3(-F.z, 0.0, F.x));
					vec3 Up = cross(Sd, F);
					// the swimming wave: small at the head, wide at the tail, bigger
					// when it swims faster or turns
					float pace = clamp(v / 0.18, 0.2, 1.8);
					float amp = (0.010 + 0.10 * u * u) * (0.35 + 0.5 * min(pace, 1.3) + 0.25 * min(abs(kap), 1.0));
					float sway = amp * sin(ph - 6.0 * u);
					float dsway = amp * cos(ph - 6.0 * u) * -6.0;
					vec3 L = loc;
					// the fins trail and ripple a little behind the body
					sway += fin.x * 0.012 * sin(ph * 1.3 - 9.0 * u) * (0.6 + 0.4 * u);
					// the pectoral fins paddle slowly, and fold back when it hurries
					float pect = fin.y;
					float fast = smoothstep(0.7, 1.5, pace);
					L.z += pect * 0.05 * sin(ph * 0.45 + sign(L.y) * 0.9) * (1.0 - fast * 0.7);
					L.y *= 1.0 - 0.35 * pect * fast;
					L.x += pect * 0.05 * fast;
					vec3 q = P + Sd * (L.y + sway) * len + Up * L.z * len - F * (L.x - u) * len;
					vec3 n = normalize(F * (nrm.x - nrm.y * dsway) + Sd * nrm.y + Up * nrm.z);
					// seen through the moving surface, it wavers a little
					float h0 = poolHeight(q.xz);
					vec2 grad = vec2(poolHeight(q.xz + vec2(0.02, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.02)) - h0) / 0.02;
					q.xz -= grad * (-q.y) * 1.3;
					q.y = min(q.y, -0.006);
					v_pos = q; v_nrm = n; v_uv = uv; v_kind = km.y; v_seed = km.z; v_fin = fin.x; v_depth = max(-q.y, 0.0); v_u = u;
					v_eye = eyeOf(view);
					gl_Position = underPos(q, proj, view, 1.0);
				}`,frag:`
				precision highp float;
				uniform float night, time;
				uniform sampler2D koiTex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${K0}
				${Y0}
				${z}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 t = texture2D(koiTex, v_uv).rgb;
					vec3 lin = t * t;
					// the model is a kohaku; the others are recoloured from it,
					// keeping its scales and the fine rays of its fins
					float lum = dot(lin, vec3(0.3, 0.59, 0.11));
					float red = clamp((t.r - t.g) * 2.2, 0.0, 1.0);
					float jit = fract(sin(v_seed * 91.7) * 4375.85);
					vec3 base = lin;
					float gloss = 0.55, metal = 0.35;
					if (v_kind < 0.5) {
						// yamabuki: metallic gold all over
						base = mix(vec3(1.0, 0.60, 0.10), vec3(1.0, 0.70, 0.22), jit) * (0.45 + 0.75 * lum) * mix(1.0, 0.9, red);
						gloss = 0.85; metal = 1.0;
					} else if (v_kind > 1.5) {
						// orange all over, the old patches a deeper red
						base = mix(vec3(0.98, 0.40, 0.05) * (0.45 + 0.7 * lum), vec3(0.82, 0.12, 0.03) * (0.5 + 0.6 * lum), red);
						gloss = 0.7; metal = 0.6;
					} else {
						base = mix(lin, lin * vec3(1.0, 0.92 + 0.1 * jit, 0.9), 0.5);
					}
					// the dark eyes stay dark
					base = mix(base, lin, smoothstep(0.08, 0.02, lum));
					float a = mix(1.0, 0.68, v_fin);
					vec3 spec; float sv;
					vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, gloss, spec, sv);
					vec3 sunPart;
					vec3 lit = underSun(v_pos, N, sv, sunPart);
					float att = exp(-v_depth * 0.8);
					// sunlight through the thin fins
					float through = v_fin * max(dot(-N, W_SUN), 0.0) * sv;
					vec3 col = base * (((light - sunPart) + lit) * att + through * 0.8 * att * mix(vec3(1.0, 0.85, 0.6), vec3(0.4, 0.5, 0.8), night));
					// rounded: lit from above through the water, the belly in shade,
					// a sheen of the bright surface along the flanks
					col *= mix(0.42, 1.2, smoothstep(-0.7, 0.85, N.y));
					float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * smoothstep(-0.2, 0.6, N.y);
					col += mix(base, vec3(1.0), 0.4) * rim * 0.35 * mix(1.0, 0.15, night) * att;
					col += spec * (0.15 + 0.85 * metal) * att * (1.0 - 0.85 * padShade(v_pos)) * (1.0 - v_fin * 0.7) * mix(vec3(1.0), base * 2.0, metal);
					// the water takes the colour away with depth
					vec3 tr = exp(-v_depth * vec3(1.9, 1.15, 1.3));
					col = col * tr + vec3(0.010, 0.016, 0.012) * (1.0 - tr) * mix(1.0, 0.1, night);
					col = studioAir(col, v_pos, v_eye);
					a *= showThrough(V) * exp(-v_depth * 0.5);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
				}`,attributes:{loc:Ee,nrm:le,uv:Zt,fin:so,km:k},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>K.tex,padShadow:_},w),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),b.ready=!0}).catch(it=>console.error(it));let ft=()=>{O&&(O({els:H.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),O({els:H.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),O({els:H.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},It=(()=>{let it={cp:[],ci:[],idx:[]};for(let Lt=0;Lt<El;Lt++){let wt=it.cp.length/3,Me=5,kt=7;for(let Ct=0;Ct<=Me;Ct++)for(let Ft=0;Ft<kt;Ft++){let ge=Ct/Me*Math.PI,Pe=Ft/kt*Math.PI*2,pe=1+.35*Math.sin(Pe*3+Lt*1.7)*Math.sin(ge*2+Lt);it.cp.push(Math.sin(ge)*Math.cos(Pe)*pe,Math.cos(ge)*.6,Math.sin(ge)*Math.sin(Pe)*pe*(.8+.4*(Lt*.37%1))),it.ci.push(Lt)}for(let Ct=0;Ct<Me;Ct++)for(let Ft=0;Ft<kt;Ft++){let ge=wt+Ct*kt+Ft,Pe=wt+Ct*kt+(Ft+1)%kt,pe=wt+(Ct+1)*kt+Ft,oe=wt+(Ct+1)*kt+(Ft+1)%kt;it.idx.push(ge,Pe,oe,ge,oe,pe)}}return it})(),Mt=Object.assign({},i);for(let it=0;it<El;it++)Mt["crumbs["+it+"]"]=()=>{let Lt=b.sim.crumbs[it],wt=b.sim.t,Me=Lt.alive?Math.min(1,Math.max(0,(wt-Lt.born)/.25)):0;return[Lt.x+ze[0],Lt.z+ze[2],Me,Lt.seed]};let vt=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${El}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${K0}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${El}; i++) if (i == k) c = crumbs[i];
			float sz = 0.016 * (0.8 + 0.5 * fract(c.w * 3.7)) * c.z;
			float h0 = poolHeight(c.xy);
			vec3 q = vec3(c.x, 0.003 + h0 * 1.4, c.y) + cp * sz;
			v_pos = q; v_nrm = normalize(cp);
			vec3 tr = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			gl_Position = proj * view * vec4(q, 1.0);
			if (c.z < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		${Y0}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.2, spec, sv);
			vec3 base = vec3(0.78, 0.60, 0.36) * (0.85 + 0.3 * fract(sin(dot(floor(v_pos.xz * 900.0), vec2(12.9, 78.2))) * 43758.5));
			// wet underneath
			base *= mix(0.55, 1.0, smoothstep(-0.4, 0.4, N.y));
			vec3 col = studioAir(base * light + spec * 0.1, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{cp:It.cp,ci:It.ci},elements:new Uint32Array(It.idx),uniforms:Mt,cull:{enable:!1}}),st=SM(),Wt=t({vert:Bg,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${Y0}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${xt(ze[0])}, ${xt(ze[1])}, ${xt(ze[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${xt(jt/2)} ? p.x : ${xt(jt)} - p.x;
				vec2 pq = vec2(ux - ${xt(Wo.purlin)} * floor(ux / ${xt(Wo.purlin)}) - ${xt(Wo.purlin/2)}, p.z - ${xt(Wo.rafter)} * floor(p.z / ${xt(Wo.rafter)}) - ${xt(Wo.rafter/2)});
				float pat = studioRoofPattern(pq, 0.004);
				float lead = 1.0 - smoothstep(0.2, 0.6, pat);
				float frost = clamp(1.0 - pat, 0.0, 1.0) * (1.0 - lead);
				vec3 frostC = mix(vec3(0.95, 0.93, 0.88), vec3(0.10, 0.13, 0.20), night);
				col = mix(col, frostC, frost * 0.9);
				a = max(a, frost * 0.45);
				col = mix(col, vec3(0.03, 0.03, 0.035), lead);
				a = mix(a, 1.0, lead);
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,attributes:{position:st.pos,normal:st.nrm,kind:st.kind,uv:st.uv,anchor:st.anchor},uniforms:i,elements:new Uint32Array(st.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),Se=(()=>{let it={pos:[],idx:[]},Lt=300,wt=24,Me=12;for(let kt=0;kt<=Me;kt++){let Ct=-.25*tn+kt/Me*.75*tn;for(let Ft=0;Ft<=wt;Ft++){let ge=Ft/wt*2*tn;it.pos.push(ze[0]+jt/2+Lt*Math.cos(Ct)*Math.cos(ge),Lt*Math.sin(Ct),ze[2]+xo/2+Lt*Math.cos(Ct)*Math.sin(ge))}}for(let kt=0;kt<Me;kt++)for(let Ct=0;Ct<wt;Ct++){let Ft=kt*(wt+1)+Ct,ge=Ft+1,Pe=Ft+wt+2,pe=Ft+wt+1;it.idx.push(Ft,ge,Pe,Ft,Pe,pe)}return it})(),Ne=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position;
		varying vec3 v_pos, v_eye;
		void main() {
			v_pos = position;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_eye;
		${Y0}
		void main() {
			vec3 d = normalize(v_pos - v_eye);
			vec3 col = studioSky(d) * 1.15;
			// a far line of trees in the haze, and the meadow before them
			float az = atan(d.z, d.x);
			float tl = 0.045 + 0.05 * fbm3(vec3(az * 7.0, 0.0, 1.0)) + 0.025 * vnoise3(vec3(az * 40.0, 0.0, 2.0));
			float ground = smoothstep(0.004, -0.004, d.y);
			vec3 trees = mix(vec3(0.42, 0.46, 0.30), vec3(0.62, 0.60, 0.48), 0.5 + 0.5 * vnoise3(vec3(az * 30.0, d.y * 60.0, 0.0)));
			trees = mix(trees, studioSky(vec3(d.x, 0.02, d.z)), 0.45);
			trees = mix(trees, toNightC(trees), night);
			float inTrees = smoothstep(tl + 0.004, tl - 0.004, d.y) * (1.0 - ground);
			col = mix(col, trees * 1.15, inTrees);
			vec3 meadow = mix(vec3(0.55, 0.55, 0.32), vec3(0.75, 0.70, 0.50), vnoise3(vec3(d.xz * 80.0, 0.0)));
			meadow = mix(meadow, toNightC(meadow), night);
			col = mix(col, meadow, ground);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`.replace("${LIGHT}","").replace("void main() {",`vec3 toNightC(vec3 c) { float l = dot(c, vec3(0.3, 0.59, 0.11)); return vec3(l) * vec3(0.06, 0.08, 0.14); }
		void main() {`),attributes:{position:Se.pos},elements:new Uint32Array(Se.idx),cull:{enable:!1}});function to(it){it&&it.reflected||s(),Ne(),h(),it&&it.reflected||(D(),ft(),vt()),v&&v(),m(),y(),it&&it.reflected||Wt()}return to};var td=(()=>{let t=[[.3,1.45],[2,1.45],[3.58,1.45],[5.1,1.4],[6.53,.48]],e=null,o=null,n=[0,1.6,0],r=0,a=()=>{try{return localStorage.getItem("gallery-sound")!=="off"}catch(i){return!0}},s=()=>{if(e){e.state==="suspended"&&e.resume().catch(()=>{});return}let i=window.AudioContext||window.webkitAudioContext;if(i){try{e=new i}catch(c){return}fetch("res/audio/water-drops.mp3").then(c=>c.arrayBuffer()).then(c=>new Promise((f,l)=>e.decodeAudioData(c,f,l))).then(c=>{o=c}).catch(()=>{})}};return typeof window!="undefined"&&["pointerdown","touchend","keydown"].forEach(i=>window.addEventListener(i,s,{capture:!0,passive:!0})),{listen(i){n=i},play(i,c,f){if(!e||!o||e.state!=="running"||!a()||document.hidden||r>6)return;let l=Math.hypot(i-n[0],c-n[2],n[1]*.7),d=f*.6/(1+l*.5);if(d<.015)return;let[h,v]=t[Math.floor(Math.random()*t.length)],u=e.createBufferSource();u.buffer=o,u.playbackRate.value=.85+Math.random()*.35;let p=e.createBiquadFilter();p.type="lowpass",p.frequency.value=1800+9e3/(1+l*.6);let m=e.createGain();m.gain.value=d,u.connect(p),p.connect(m),m.connect(e.destination),r++,u.onended=()=>{r--},u.start(e.currentTime+Math.random()*.03,h,v)}}})(),Tl=null;function NM(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],n=t[0]+e[0]*o-ze[0],r=t[2]+e[2]*o-ze[2];return n<Rt.x0||n>Rt.x1||r<Rt.z0||r>Rt.z1||Math.abs(n-pn.x)<.45&&Math.abs(r-pn.z)<.45?null:[n+ze[0],r+ze[2]]}function RM(t,e){Tl&&Tl.drop(t-ze[0],e-ze[2])}function CM(){return!!(Tl&&Tl.feed.on)}var jg=[{from:[12.6,1.65,.9],to:[11.4,1.75,2.6],at:[6.2,2.6,15.5],fov:60},{from:[8,1.45,1.4],to:[8,1.25,4.4],at:[8,1.7,16],fov:50},{from:[7.2,1.6,3.8],to:[8.3,1.55,5.2],at:[13,1.4,10.4],fov:52},{from:[7.1,3.9,6.4],to:[8.6,3.7,7.6],at:[8,-.2,10.6],fov:50,pond:!0},{from:[6.2,1.45,10.4],to:[7,1.75,11.6],at:[8,2.3,15.2],fov:44},{from:[2.6,1.5,2.6],to:[3.6,1.6,4.4],at:[7,6.8,12],fov:62}],nc=11;function OM(t){let e=jg.length,o=Math.floor(t/nc)%e,n=t%nc/nc,r=n*n*(3-2*n),a=jg[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*r),i=Math.max(0,1-Math.min(n*nc,(1-n)*nc)/.7);return{eye:Ju(s),target:Ju(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/nc)}}Aa.exports.previewCam=OM;Aa.exports.poolHit=NM;Aa.exports.feedAt=RM;Aa.exports.feeding=CM;Aa.exports.listen=t=>td.listen(t);Aa.exports.sunGLSL=Wg;Aa.exports.O=ze;Aa.exports.SIZE={W:jt,L:xo,H:bo,RIDGE:ca};Aa.exports.BOX=[ze[0]-.8,0,ze[2]-.8,ze[0]+jt+.8,ca+.5,ze[2]+xo+.8];Aa.exports.AIR_BOX=[ze[0],0,ze[2],ze[0]+jt,ca,ze[2]+xo]});var Mh=bt((rz,e3)=>{"use strict";var{A:vr}=ka(),{C:In}=xr(),{DOOR:ic}=G0(),rr=V0(),cc=Z0(),Zg=In.hallEnd+.35,Jg={arch:[13.6,0,vr.zc-vr.arch.r-.3,14.4,vr.arch.spring+vr.arch.r+.3,vr.zc+vr.arch.r+.3],mouth:[13.3,0,In.z0-.3,14.3,8.2,In.z1+.3],stair:[-.5,0,rr.SURR.z0-.2,.5,rr.SURR.top+.3,rr.SURR.z1+.2],door:[ic.x0-.4,0,-.5,ic.x1+.4,ic.top+.4,.5],windows:[15.6,.4,In.z1-.2,36.9,6.4,In.z1+.9],farDoor:[In.x1-.2,0,In.zc-ic.r-.4,In.x1+.9,ic.top+.4,In.zc+ic.r+.4]},S0={court:[vr.x0-.4,0,vr.z0-.3,vr.x1+.3,vr.domeTop+.5,vr.z1+.3],stair:[rr.C.x-rr.R-2.6,0,rr.C.z-rr.R-1.5,.5,15.6,rr.C.z+rr.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,In.z1,46,60,In.z1+110],florence:[In.x1,-1,In.zc-30,In.x1+80,60,In.zc+30],studio:cc.BOX},PM=[[0,0,0,14,0,Zg],[13.6,0,In.z0,In.x1+.4,0,In.z1],[vr.x0-.4,0,vr.z0,vr.x1,0,vr.z1],[rr.C.x-rr.R-2.6,0,rr.C.z-rr.R,.4,0,rr.C.z+rr.R],[cc.BOX[0],0,cc.BOX[2],cc.BOX[3],0,cc.BOX[5]]],IM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Rl=new Float64Array(24),Ba=[7,2,2],t3=0,E0="out",_h=!0;try{/[?&]nocull\b/.test(location.search)&&(_h=!1)}catch(t){}var Ll={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Nl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Kg=!0;function $M(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),n=e(1),r=e(2),a=e(3),s=(i,c,f,l)=>{for(let d=0;d<4;d++)Rl[i*4+d]=c[d]+f*l[d]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function J0(t,e){if(!_h)return!0;let o=e?-t[4]:t[1],n=e?-t[1]:t[4];for(let r=0;r<6;r++){let a=Rl[r*4],s=Rl[r*4+1],i=Rl[r*4+2],c=Rl[r*4+3],f=a>0?t[3]:t[0],l=s>0?n:o,d=i>0?t[5]:t[2];if(a*f+s*l+i*d+c<0)return!1}return!0}var ed=(t,e)=>Ba[0]>t[0]-e&&Ba[0]<t[3]+e&&Ba[2]>t[2]-e&&Ba[2]<t[5]+e;function FM(t){if(ed(t,.6))return null;let e=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?t[3]:t[0])-Ba[0],a=(n&2?t[5]:t[2])-Ba[2],s=Math.atan2(r,a)-t3;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function Qg(t,e,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=FM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of t){let i=Jg[s];if(!ed(i,.6)&&(!J0(i,o)||!a(i)))return!1}return J0(e,o)&&a(e)}function qM(){let t=Ba[0],e=Ba[2],o=cc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>rr.C.z-rr.R-1.5&&t>rr.C.x-rr.R-2.6?"stair":t>14.1&&e>vr.z0-.3&&e<vr.z1+.3&&t<vr.x1+.3?"court":t>13.9&&e>In.z0-.4&&e<In.z1+.1&&t<In.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<Zg?"hall":"out"}var DM={PORTAL:Jg,ROOM:S0,update(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[r*4+i];n[r*4+a]=s}$M(n),Ba[0]=o[0],Ba[1]=o[1],Ba[2]=o[2],t3=Math.atan2(-t[2],-t[10]),E0=qM();for(let r in S0){if(r==="studio"||E0==="studio"){Ll[r]=Nl[r]=r==="studio"&&E0==="studio";continue}if(!_h||E0==="out"||E0===r||ed(S0[r],.3))Ll[r]=J0(S0[r],!1)||E0===r,Nl[r]=J0(S0[r],!0)||E0===r;else{let a=IM[E0][r];Ll[r]=a?Qg(a,S0[r],!1):J0(S0[r],!1),Nl[r]=a?Qg(a,S0[r],!0):J0(S0[r],!0)}}Kg=!_h||PM.some(r=>J0(r,!1))},get zone(){return E0},room(t,e){return e?Nl[t]:Ll[t]},box(t,e,o){return o&&!(e?Nl[o]:Ll[o])?!1:J0(t,e)},get floor(){return Kg}};e3.exports=DM});var n3=bt((az,o3)=>{"use strict";var GM=Hu(),HM=Mh();function UM(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=[],s=[];for(let d=0;d<3;d++)a.push(e.getFloat32(12+d*4,!0)),s.push(e.getFloat32(24+d*4,!0));let i=36,c=new Uint16Array(t,i,n*3);i+=n*6;let f=new Uint16Array(t,i,r);i+=r*2;let l=new Int8Array(t,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:f,nrm:l}}o3.exports=(t,e)=>{let o=[],n=[],r=[],a=[],s=null,i=e.statues.length,c=[],f=(d,h)=>{let v=o.length/3,u=h.height*.75,p=h.base!==void 0?h.base:e.pedestalTop;c.push({offset:a.length,count:d.nI,box:[h.x-u,p-.1,h.z-u,h.x+u,p+h.height+.2,h.z+u]});let m=h.height,g=Math.cos(h.yaw),y=Math.sin(h.yaw),b=h.base!==void 0?h.base:e.pedestalTop;for(let w=0;w<d.nV;w++){let _=(d.mn[0]+d.pos[w*3]/65535*d.sz[0])*m,M=(d.mn[1]+d.pos[w*3+1]/65535*d.sz[1])*m,z=(d.mn[2]+d.pos[w*3+2]/65535*d.sz[2])*m;o.push(h.x+g*_+y*z,b+M,h.z-y*_+g*z);let I=d.nrm[w*3]/127,R=d.nrm[w*3+1]/127,B=d.nrm[w*3+2]/127;n.push(g*I+y*B,R,-y*I+g*B),r.push(h.mat||1,0,0)}for(let w=0;w<d.nI;w++)a.push(v+d.idx[w])},l=()=>{a.length!==0&&(s=GM(t,{position:o,normal:n,mat:r,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(d=>{fetch("res/"+d.file).then(h=>{if(!h.ok)throw new Error("Could not load "+d.file);return h.arrayBuffer()}).then(h=>f(UM(h),d)).catch(h=>console.error(h)).then(()=>{--i===0&&l()})}),function(d){if(!s)return;let h=!!(d&&d.reflected),v=c.filter(u=>HM.box(u.box,h));v.length&&s(v)}}});var p3=bt((sz,nd)=>{"use strict";var BM=Ps(),Vn=1.29032,Us=[9.2968,2,5.9],jM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],kh=2147.64,r3=725,a3=1288,s3=1450,i3=2576,Qr=-5.197,js=3.865,ts=10.135,Ws=-14.679,Cl=-30.229,Ol=7.232,c3=-45.713,lc=17.1*Vn,Bs=16.6*Vn,Pl=16.6*Vn,l3=[6.9,17.1],Sh=[2.95,16.6],WM=1.6,VM=0,XM=1,f3=2,od=3,h3=4,u3=5,YM=6;function KM(){let t=[],e=[],o=[],n=[],r=BM.createBuilder(t,e,o,n),a=(f,l,d,h,v,u,p=1,m=1)=>{let g=[];for(let y=0;y<=p;y++){let b=[];for(let w=0;w<=m;w++){let _=[f[0]+l[0]*y/p+d[0]*w/m,f[1]+l[1]*y/p+d[1]*w/m,f[2]+l[2]*y/p+d[2]*w/m],M=u(_);b.push(r.vert(_,h,[v,M[0],M[1]]))}g.push(b)}for(let y=0;y<p;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},s=f=>l=>[(Us[2]-l[2])/Vn-f,l[1]/Vn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],VM,f=>[f[0]/Vn,f[2]/Vn],13,14),a([js,0,Qr],[0,0,Ws-Qr],[0,lc,0],[1,0,0],XM,s(8.6),6,6),a([-40,0,Qr],[js+40,0,0],[0,lc,0],[0,0,1],f3,f=>[(js-f[0])/Vn,f[1]/Vn],8,4),a([-40,0,-.36],[0,0,Qr+.36],[0,lc,0],[1,0,0],f3,f=>[-f[2]/Vn,f[1]/Vn]),a([ts,0,-80],[0,0,Qr+80],[0,Bs,0],[-1,0,0],h3,s(8.6),12,6),a([ts,0,Qr],[60,0,0],[0,Bs,0],[0,0,1],u3,f=>[(f[0]-ts)/Vn,f[1]/Vn],8,4),a([70,0,Qr],[0,0,-.36-Qr],[0,Bs,0],[-1,0,0],u3,f=>[-f[2]/Vn,f[1]/Vn]);let i=f=>[(f[0]-Us[0])/Vn+4.18,f[1]/Vn];a([-20,0,Cl],[Ol+20,0,0],[0,Pl,0],[0,0,1],od,i,8,6),a([Ol,0,Cl],[0,0,c3-Cl],[0,Pl,0],[1,0,0],od,s(28),4,4),a([Ol,0,c3],[ts-Ol,0,0],[0,Bs,0],[0,0,1],h3,f=>[(f[0]-Us[0])/Vn,f[1]/Vn],2,4),a([-20,0,Ws],[0,0,Cl-Ws],[0,Pl,0],[1,0,0],od,s(16),4,4);let c=(f,l,d,h)=>a(f,l,d,h,YM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:n}}function Hs(t,e,o,n){let r=t.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var ja=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",QM=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Ws],[js,lc,Qr]],[[ts,0,-80],[70,Bs,Qr]],[[-20,0,-80],[Ol,Pl,Cl]],[[-40,0,-80],[-20,Pl,Ws]]],ZM=QM.map(t=>`if (hitBox(ro, rd, ${ja(t[0])}, ${ja(t[1])}, 1e4) ) return 0.0;`).join(`
		`),d3="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>jM[e][t].toFixed(6)).join(", ")).join(", ")+")",JM=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${ja([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${ZM}
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
	vec3 ro = ${ja(Us)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${ja([-40,0,Ws])}, ${ja([js-.02,lc,Qr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${ja([ts+.02,0,-80])}, ${ja([70,Bs,Qr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${d3} * (p - ${ja(Us)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${r3.toFixed(2)} + ${kh.toFixed(3)} * pc.x / pc.z) / ${s3.toFixed(1)},
		(${a3.toFixed(2)} - ${kh.toFixed(3)} * pc.y / pc.z) / ${i3.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${d3} * (p - ${ja(Us)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${r3.toFixed(2)} + ${kh.toFixed(3)} * pc.x / pc.z) / ${s3.toFixed(1)},
		(${a3.toFixed(2)} - ${kh.toFixed(3)} * pc.y / pc.z) / ${i3.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${ja(Us)}), n));
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
		base = texture2D(cobbleTex, fuv / ${WM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${l3[0].toFixed(2)}, 1.0 - fuv.y / ${l3[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Sh[0].toFixed(2)}, 1.0 - fuv.y / ${Sh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Sh[0].toFixed(2)}, 1.0 - fuv.y / ${Sh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(js-.05).toFixed(3)} && v_pos.x < ${(ts+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Ws.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Qr+4.5).toFixed(3)};
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
}`,t8=`
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
}`,e8=or();nd.exports=t=>{let e=KM(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Hs(t,"res/street/photo.jpg",o,[190,160,120]),s=Hs(t,"res/street/photo_night.jpg",o,[12,14,22]),i=Hs(t,"res/street/photo_mask.png",o,[255,255,255]),c=Hs(t,"res/street/facade_pink.jpg",n,[200,150,135]),f=Hs(t,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Hs(t,"res/street/facade_cream.jpg",n,[215,200,175]),d=Hs(t,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),v=t({frag:JM,vert:t8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:d,photoNight:s,night:()=>e8.night,time:()=>(Date.now()-h)/1e3}});return function(){v()}};nd.exports.layout={MOUTH_Z:Qr,PINK_X:js,RIGHT_X:ts,PINK_H:lc,CREAM_H:Bs,S:Vn}});var g3=bt((iz,m3)=>{"use strict";var o8=or().GLSL,{glassPanes:n8}=G0(),v3=xr();function r8(){let t=[],e=[],o=(n,r)=>{for(let a of n)t.push(a),e.push(r)};return o(n8(),[0,0,1]),o(v3.windowGlass(),[0,0,1]),o(v3.farDoorGlass(),[1,0,0]),{position:t,normal:e}}m3.exports=t=>{let e=r8(),o=t({frag:`
		precision highp float;
		${o8}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var O3=bt((cz,cd)=>{"use strict";var M3=or().GLSL,a8=Ps(),rd=wa(),{wallWithHoles:s8,C:ns}=xr(),me=.28,tt={westBack:14.4,westCol:15-me,eastCol:37.4+me,eastBack:41.8,south:ns.z1+.7,northCol:ns.z1+.7+16,northBack:ns.z1+.7+19,cx:(15+37.4)/2,cz:(ns.z1+.7+ns.z1+.7+16-me)/2},Do={x0:tt.westCol+me,x1:tt.eastCol-me,z0:tt.south,z1:tt.northCol-me},Sr=3.3,Fl=.92,rs=5.6,x3=6,za=11.9,os=9.6,yo={x0:tt.cx-2.9,x1:tt.cx+2.9,top:14.4},Rh=7,k3=4,sd=(tt.eastCol-tt.westCol)/Rh,i8=(tt.northCol-tt.south)/k3,S3=3,Dl=.26,Ks=1.4,Xs=1.1,Ah=3,s0=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),ae={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},i0=[],E3=(t,e,o)=>[tt.cx+t,e,tt.cz+o],zh=E3(-5.9,0,3.4),as=.85,es={c:[zh[0],4.6*as+.5,zh[2]],r:[5*as,3.6*as,4.5*as]},A3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[zh[0]+t.d[0]*as,t.d[1]*as+.5,zh[2]+t.d[2]*as],r:t.r.map(e=>e*as),n:t.n}));for(let t of A3)i0.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var c8=[3.6,6.3,9];for(let t of c8){let e=8.6+t%1.7*.6;i0.push({c:E3(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var l8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:tt.cx+t.d[0],z:tt.cz+t.d[1],bloom:t.bloom}));for(let t of l8)i0.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var id=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[tt.cx+Math.cos(e)*2.3,tt.cz+Math.sin(e)*2.3]});for(let[t,e]of id)i0.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var z3=[];{let t=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let d=l/f,h=o+(r-o)*d,v=n+(a-n)*d;s!==void 0&&Math.abs((r!==o?h:v)-s)<i||z3.push([h,v])}};t(Do.x0+.45,Do.z0+1.2,Do.x0+.45,Do.z1-.45,tt.cz,1),t(Do.x1-.45,Do.z0+1.2,Do.x1-.45,Do.z1-.45,tt.cz,1),t(Do.x0+.45,Do.z1-.45,Do.x1-.45,Do.z1-.45,tt.cx,1.9)}var f8=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Th=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function hc(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Xn(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function h8(t,e,o){return{vert:(n,r,a)=>t.vert(e(n),o(r),a),tri:t.tri}}var u8={north:[t=>[t[0],t[1],tt.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[tt.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[tt.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function T3(t,e,o,n,r){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?n:.02),c=t+(s+1)*e-(s===o-1?r:.02);a.push([i,c,t+(s+.5)*e])}return a}var d8=T3(tt.westCol,sd,Rh,me+Dl,me+Dl),y3=T3(tt.south,i8,k3,.32,me+Dl),fc=[tt.cx-32.35,tt.northCol-77],p8=Array.from({length:Rh-1},(t,e)=>tt.westCol+(e+1)*sd),L3=t=>(t[1]-t[0])/2-.2,ql=t=>(t[0]+t[1])/2;function v8(t,e){let o=ql(t),n=L3(t);return{u0:t[0],u1:t[1],bottom:e?0:Fl,head:r=>{let a=Math.abs(r-o);return a<n?Sr+Math.sqrt(n*n-a*a):Sr},step:.05}}function m8(t,e,o){return{u0:t-o,u1:t+o,bot:n=>e-Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),head:n=>e+Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),step:.04,mat:[ae.STONE,0,0]}}function g8(t,e,o,n){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>n,step:.5,mat:[ae.STONE,0,0]}}function b3(t,e,o){let[n,r]=u8[e],a=h8(t,n,r),s=[];o.arches.forEach((l,d)=>s.push(v8(l,d===o.open)));let i=[];for(let l of o.bays||o.arches){let d=ql(l);o.oculi&&s.push(m8(d,6.85,.3)),i.push({c:d,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(g8(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);s8(a,{u0:o.u0,u1:o.u1,w0:-me,w1:me,top:o.top,holes:s,mat:[ae.BRICK,0,0],revealMat:[ae.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,d,h,v,u,p,m)=>{let g=n([l,d,h]),y=n([v,u,p]);Xn(t,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,d,h,v,u,p)=>hc(a,l,d,h,v,u,[p,0,0]);for(let l of o.arches){let d=ql(l),h=L3(l),v=28;for(let u of[me,-me]){let p=u>0?1:-1,m=u+p*.025;for(let g=0;g<v;g++){let y=Math.PI*g/v,b=Math.PI*(g+1)/v,w=(D,K)=>[d+Math.cos(D)*K,Sr+Math.sin(D)*K],_=w(y,h),M=w(b,h),z=w(y,h+.26),I=w(b,h+.26);f([_[0],_[1],m],[M[0],M[1],m],[I[0],I[1],m],[z[0],z[1],m],[0,0,p],ae.STONE);let R=Math.cos((y+b)/2),B=Math.sin((y+b)/2);f([z[0],z[1],u],[I[0],I[1],u],[I[0],I[1],m],[z[0],z[1],m],[R,B,0],ae.STONE)}}}if(o.arches.forEach((l,d)=>{d!==o.open&&c(l[0]-.02,Fl,-me-.05,l[1]+.02,Fl+.09,me+.05,ae.STONE)}),c(o.u0,x3,-me,o.u1,x3+.18,me+.09,ae.STONE),c(o.u0,o.win[0]-.12,me-.01,o.u1,o.win[0],me+.06,ae.STONE),o.cornice)for(let[l,d,h]of o.cornice)c(l,h-.22,me-.01,d,h,me+.16,ae.STONE),c(l,h,me-.01,d,h+.16,me+.42,ae.STONE);for(let{c:l,y0:d,y1:h,w:v,door:u}of i){let p=v/2;if(f([l-p-.01,d,.06],[l+p+.01,d,.06],[l+p+.01,h,.06],[l-p-.01,h,.06],[0,0,1],u?ae.DARK:ae.PANE),u){c(l-p-.16,0,me-.01,l-p,h+.16,me+.07,ae.STONE),c(l+p,0,me-.01,l+p+.16,h+.16,me+.07,ae.STONE),c(l-p-.16,h,me-.01,l+p+.16,h+.2,me+.09,ae.STONE),c(l-p,0,.07,l+p,h-.02,.12,ae.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,ae.DARK);continue}for(let m of[-1,1]){let g=l+m*p;c(g+m*.02,d+.02,me+.02,g+m*(p+.025),h-.02,me+.06,ae.SHUTTER)}c(l-p-.09,h,me-.01,l+p+.09,h+.16,me+.05,ae.STONE),c(l-p-.09,d-.1,me-.01,l+p+.09,d,me+.09,ae.STONE),c(l-.015,d,.06,l+.015,h,.09,ae.SHUTTER),c(l-p,(d+h)/2-.015,.06,l+p,(d+h)/2+.015,.09,ae.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let d=ql(l);f([d-.31,6.54,0],[d+.31,6.54,0],[d+.31,7.16,0],[d-.31,7.16,0],[0,0,1],ae.DARK)}for(let l of o.cols){let d=Fl+.09,h=n([l,0,0]);Xn(t,h[0]-.24,d,h[2]-.24,h[0]+.24,d+.12,h[2]+.24,ae.MARBLE),t.lathe([[.23,d+.12,1],[.24,d+.17],[.2,d+.24],[.215,d+.28],[.17,d+.34,1],[.165,d+.6],[.155,Sr-.5],[.15,Sr-.38,1],[.175,Sr-.34,1],[.17,Sr-.3],[.2,Sr-.22],[.27,Sr-.15],[.29,Sr-.12,1]],h[0],h[2],18,{mat:()=>[ae.MARBLE,0,0]}),Xn(t,h[0]-.29,Sr-.12,h[2]-.29,h[0]+.29,Sr+.01,h[2]+.29,ae.STONE)}o.walk&&o.walk(t)}function x8(t){let e=[-1,0,1].map(r=>{let a=tt.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[ae.STONE,0,0]}});b3(t,"north",{u0:tt.westCol-me,u1:tt.eastCol+me,top:r=>r>yo.x0+1e-6&&r<yo.x1-1e-6?yo.top:za,cuts:[yo.x0,yo.x0+1e-5,yo.x1-1e-5,yo.x1],arches:d8,open:S3,cols:p8,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[tt.westCol-me-3.3,yo.x0,za],[yo.x1,tt.eastCol+me+3.3,za],[yo.x0-.2,yo.x1+.2,yo.top]],walk:r=>{Xn(r,Do.x0,rs,tt.northCol+me,Do.x1,rs+.2,tt.northBack,ae.PLASTER),Xn(r,Do.x0,0,tt.northBack,Do.x1,rs,tt.northBack+.3,ae.PLASTER);for(let a of[tt.cx-7.2,tt.cx,tt.cx+7.2])hc(r,[a-.8,0,tt.northBack-.01],[a+.8,0,tt.northBack-.01],[a+.8,2.9,tt.northBack-.01],[a-.8,2.9,tt.northBack-.01],[0,0,-1],[ae.DARK,0,0]),Xn(r,a-.98,0,tt.northBack-.06,a+.98,3.12,tt.northBack,ae.STONE),hc(r,[a-.8,0,tt.northBack-.07],[a+.8,0,tt.northBack-.07],[a+.8,2.9,tt.northBack-.07],[a-.8,2.9,tt.northBack-.07],[0,0,-1],[ae.DARK,0,0])}}),hc(t,[yo.x0,11,tt.northCol+.2],[yo.x1,11,tt.northCol+.2],[yo.x1,13.6,tt.northCol+.2],[yo.x0,13.6,tt.northCol+.2],[0,0,-1],[ae.DARK,0,0]),Xn(t,yo.x0+.3,10.88,tt.northCol-me-.06,yo.x1-.3,11,tt.northCol-me+.1,ae.STONE),Xn(t,tt.westBack,rs+.2,tt.northBack,tt.eastBack,za,tt.northBack+3.4,ae.BRICK),Xn(t,tt.westBack,os,tt.northCol-me,tt.westCol-me,za,tt.northCol+me,ae.BRICK),Xn(t,tt.eastCol+me,os,tt.northCol-me,tt.eastBack,za,tt.northCol+me,ae.BRICK),Xn(t,tt.westBack,rs+.2,tt.northCol+me+.12,tt.eastBack,za,tt.northBack,ae.BRICK),Il(t,[tt.westBack-.5,za+.16,tt.northCol-me-.42],[yo.x0-tt.westBack+.5,0,0],[0,2.6,4.4],ae.ROOF),Il(t,[yo.x1,za+.16,tt.northCol-me-.42],[tt.eastBack+.5-yo.x1,0,0],[0,2.6,4.4],ae.ROOF),Il(t,[yo.x0-.3,yo.top+.16,tt.northCol-me-.42],[yo.x1-yo.x0+.6,0,0],[0,1.4,3],ae.ROOF),w3(t,[yo.x0-.3,yo.top+.16,tt.northCol-me-.42],[yo.x0-.3,yo.top+1.56,tt.northCol-me+2.58],[yo.x0-.3,yo.top+.16,tt.northCol-me+2.58],[-1,0,0],ae.BRICK),w3(t,[yo.x1+.3,yo.top+.16,tt.northCol-me-.42],[yo.x1+.3,yo.top+1.56,tt.northCol-me+2.58],[yo.x1+.3,yo.top+.16,tt.northCol-me+2.58],[1,0,0],ae.BRICK),Xn(t,yo.x0,za,tt.northCol+me,yo.x1,yo.top,tt.northCol+2.6,ae.BRICK);for(let[r,a]of[[tt.cx-9.8,tt.northBack+.6],[tt.cx+9.4,tt.northBack+.4],[tt.cx-4.6,tt.northBack+1]])Xn(t,r-.4,12.5,a-.4,r+.4,15.4,a+.4,ae.BRICK),Xn(t,r-.52,15.4,a-.52,r+.52,15.62,a+.52,ae.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];y3.forEach((d,h)=>{let v=ql(d);h===1?c.push({c:v,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:v,y0:1,y1:2.75,w:1.05}),c.push({c:v,y0:3.85,y1:5.45,w:1.05})}),b3(t,r,{u0:tt.south,u1:tt.northCol-me,top:()=>os,arches:[],bays:y3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[tt.south,tt.northCol-me,os]]}),Xn(t,a,0,tt.south,s+i*(me+.12),os,tt.northBack+.3,ae.BRICK);let f=s-i*me;Xn(t,f,0,tt.south,f-i*.06,.55,tt.northCol-me,ae.STONE);let l=s-i*(me+.42);Il(t,[l,os+.16,tt.south],[0,0,tt.northCol-me-tt.south],[a-l+i*.4,1.9,0],ae.ROOF)};o("west",tt.westBack,tt.westCol),o("east",tt.eastBack,tt.eastCol);let n=ns.x1+.7;Xn(t,13.65,7.4,tt.south-.02,n,7.62,tt.south+.14,ae.STONE),Xn(t,13.65,10.4,tt.south-.02,n,10.6,tt.south+.38,ae.STONE),Il(t,[13.65,10.6,tt.south+.38],[n-13.65,0,0],[0,2.2,-5],ae.ROOF)}function w3(t,e,o,n,r,a){let s=[a,0,0];t.tri(t.vert(e,r,s),t.vert(o,r,s),t.vert(n,r,s))}function Il(t,e,o,n,r){let a=Th([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+n[0]*l,e[1]+o[1]*f+n[1]*l,e[2]+o[2]*f+n[2]*l];hc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;hc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],Th([-n[0],0,-n[2]]),[r,0,0])}function y8(t){let e=tt.westBack,o=tt.eastBack,n=tt.south,r=tt.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,n+(r-n)*f/s];i[c].push(t.vert(l,[0,1,0],[ae.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var $l=.46,Ys=.58,Vs=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function b8(t,e,o){let n=Xs+o,r=(t>0?Do.x1-tt.cx:tt.cx-Do.x0)-Ks-o,a=Xs+o,s=(e>0?Do.z1-tt.cz:tt.cz-Do.z0)-Ks-o,i=Ah+o,c=Math.sqrt(i*i-n*n),f=Math.sqrt(i*i-a*a),l=[[n,c],[n,s],[r,s],[r,a],[f,a]],d=Math.atan2(a,f),h=Math.atan2(c,n);for(let v=1;v<10;v++){let u=d+(h-d)*v/10;l.push([Math.cos(u)*i,Math.sin(u)*i])}return l.map(([v,u])=>[tt.cx+t*v,tt.cz+e*u])}function w8(t,e,o){let n=o[0]-e[0],r=o[1]-e[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,f=s,l=$l*.5,d=-l,h=a+l,v=[],u=Math.max(1,Math.ceil((h-d)/1));for(let p=0;p<=u;p++){let m=d+(h-d)*p/u,g=[];for(let y=0;y<Vs.length;y++){let[b,w]=Vs[y],_=Math.min(Vs.length-2,y),M=Vs[Math.max(0,y-1)],z=Vs[Math.min(Vs.length-1,y+1)],I=(z[0]-M[0])*$l,B=(z[1]-M[1])*Ys,D=-I,K=Math.hypot(B,D)||1,O=[e[0]+s*m+c*b*$l,w*Ys,e[1]+i*m+f*b*$l],H=[c*(-B/K),-D/K,f*(-B/K)];g.push(t.vert(O,H[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:H,[ae.HEDGE,0,0]))}v.push(g)}for(let p=0;p<u;p++)for(let m=0;m<Vs.length-1;m++)t.tri(v[p][m],v[p+1][m],v[p+1][m+1]),t.tri(v[p][m],v[p+1][m+1],v[p][m+1]);for(let[p,m]of[[0,-1],[u,1]]){let g=v[p],y=t.vert([e[0]+s*(p?h:d),Ys*.5,e[1]+i*(p?h:d)],[s*m,0,i*m],[ae.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)t.tri(y,g[b],g[b+1])}}function _8(t){for(let e of[-1,1])for(let o of[-1,1]){let n=b8(e,o,.3);for(let r=0;r<n.length;r++)w8(t,n[r],n[(r+1)%n.length])}}function M8(t){let e=tt.cx,o=tt.cz,n=()=>[ae.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:n}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:n}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[ae.DARK,0,0]});let r={mat:()=>[ae.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,r),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,r),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,r),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,r)}}function k8(t){for(let[e,o]of id)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[ae.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[ae.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[ae.BARK,0,0]})}function S8(t){let[e,,o]=es.c,n=R3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[ae.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,d=[e+a*l,i*l,o+s*l],h=n()*Math.PI*2;t.tube([d,[d[0]+Math.cos(h)*1.3,d[1]+.9,d[2]+Math.sin(h)*1.3],[d[0]+Math.cos(h)*2.3,d[1]+1.4+n(),d[2]+Math.sin(h)*2.3]],v=>.08*(1-v*.7),8,6,{mat:()=>[ae.BARK,0,0]})}}for(let a of i0.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[ae.BARK,0,0]})}function E8(t){let e=()=>[ae.FARBRICK,0,0],o=()=>[ae.LEAD,0,0],n=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let d=[];for(let v=0;v<=12;v++){let u=v/12*Math.PI/2,p=Math.cos(u)*i,m=Math.sin(u)*f;l&&(p*=1-.18*Math.sin(u*2)),d.push([Math.max(p,i*.12),c+m])}t.lathe(d,a,s,28,{mat:o});let h=c+f;t.lathe([[i*.13,h-.2,1],[i*.13,h+3,1],[i*.18,h+3.2,1],[i*.02,h+6.4]],a,s,10,{mat:o})};Xn(t,14,0,104,52,26,150,ae.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{Xn(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,ae.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};r(20.5,109,36),r(46.5,112,38)}function A8(t){let o=[tt.cx,0,tt.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],d=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(d,[-l[0],-l[1],-l[2]],[ae.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function z8(){let t=[],e=[],o=[],n=[],r=a8.createBuilder(t,e,o,n);return y8(r),x8(r),_8(r),M8(r),k8(r),S8(r),r.save(),r.translate(fc[0],0,fc[1]),E8(r),r.restore(),A8(r),{position:t,normal:e,elements:o,attr:n}}var N3=[[[13.65,0,ns.z0-.7],[ns.x1+.7,10.6,tt.south]],[[tt.westBack,rs,tt.northCol-me],[tt.eastBack,za,tt.northBack+3.4]],[[yo.x0,za,tt.northCol-me],[yo.x1,yo.top,tt.northCol+2.6]],[[tt.westBack,0,tt.south],[tt.westCol+me,os,tt.northBack+.3]],[[tt.eastCol-me,0,tt.south],[tt.eastBack,os,tt.northBack+.3]],[[14+fc[0],0,104+fc[1]],[52+fc[0],26,150+fc[1]]]];function T8(t,e,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>n[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(n[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function Eh(t,e,o,n){let r=[(t[0]-o[0])/n[0],(t[1]-o[1])/n[1],(t[2]-o[2])/n[2]],a=[e[0]/n[0],e[1]/n[1],e[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),d=Math.max(0,(-i-l)/s),h=(-i+l)/s;return Math.max(0,h-d)}function ad(t){for(let[e,o]of N3)if(T8(t,s0,e,o))return 0;return 1}function R3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function L8(){let t=[],e=[],o=[],n=[],r=[],a=[],s=[],i=R3(21),c=(u,p,m,g,y,b,w)=>{let _=t.length/3;for(let[M,z]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...u),e.push(M,z),o.push(p,m,g),n.push(...y),r.push(...b),a.push(...w);s.push(_,_+1,_+2,_,_+2,_+3)},f=(u,p)=>{let m=1;for(let g of i0){if(g===p||!g.shadow)continue;let y=Eh(u,s0,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=i0.map(u=>({...u,pts:null}));for(let u of l)for(let p=0;p<u.n;p++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(i(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(u.spindle){let O=b[1],H=Math.sqrt(Math.max(.02,1-O*O))*(O>0?1-O*.55:1+O*.25),ft=Math.hypot(b[0],b[2])||1,It=H*Math.min(1,ft*1.4);b=[b[0]/ft*It,O,b[2]/ft*It]}u.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let w=[u.c[0]+b[0]*u.r[0],u.c[1]+b[1]*u.r[1],u.c[2]+b[2]*u.r[2]],_,M;if(u.magnolia){let O=0;for(let It of A3)O=Math.max(O,Eh(w,s0,It.c,It.r));_=Math.exp(-O*1.1);let H=1;for(let It of i0)if(!It.magnolia&&It.shadow){let Mt=Eh(w,s0,It.c,It.r);Mt>0&&(H*=Math.exp(-Mt*.9))}_*=ad(w)*H;let ft=f8(w,es.c);M=Th([ft[0]/es.r[0]+b[0]*.5,ft[1]/es.r[1]+b[1]*.5,ft[2]/es.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(ft[0]/es.r[0],ft[1]/es.r[1],ft[2]/es.r[2])*.6+y*.4)}else{let O=Eh(w,s0,u.c,u.r);_=Math.exp(-O*(u.spindle?2.2:1.25)),_*=ad(w)*f(w,i0[l.indexOf(u)]),M=Th([b[0]/u.r[0],b[1]/u.r[1],b[2]/u.r[2]])}let z=Math.max(0,M[0]*s0[0]+M[1]*s0[1]+M[2]*s0[2]),I=.25+.75*Math.pow(y,1.5)*(.65+.35*(M[1]*.5+.5)),R=u.size[0]+(u.size[1]-u.size[0])*i(),B=.85+i()*.3,D=u.leaf.map(O=>O*B),K=u.cell;u.cell===3&&i()<.35&&(K=2),c(w,R,K,i()*Math.PI*2,[_,I,.35+.65*z],D,u.bloom)}for(let[u,p]of z3){let m=i()<.5;for(let g=0;g<3;g++){let y=[u+(i()-.5)*.7,.28+i()*.22,p+(i()-.5)*.5],b=ad(y)*f(y,null);c(y,.32+i()*.12,i()<.7?3:2,i()*6.28,[b,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let d=s.length/6,h=Array.from({length:d},(u,p)=>p);for(let u=d-1;u>0;u--){let p=Math.floor(i()*(u+1));[h[u],h[p]]=[h[p],h[u]]}let v=[];for(let u of h)for(let p=0;p<6;p++)v.push(s[u*6+p]);return{center:t,corner:e,par:o,light:n,tint:r,bloom:a,elements:v}}var de=t=>t.toFixed(4),Gl=t=>`vec3(${de(t[0])}, ${de(t[1])}, ${de(t[2])})`,C3=`
const vec3 SUN = ${Gl(s0)};
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
`,N8=N3.map(([t,e])=>`if (hitBox(ro, SUN, ${Gl(t)}, ${Gl(e)})) return 0.0;`).join(`
	`),R8=i0.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Gl(t.c)}, ${Gl(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),C8=(t,e,o,n,r,a,s,i,c)=>`
	{
		float t = (${de(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${de(rs)} && u > ${de(o-me)} && u < ${de(o+n*r+me)}) {
				float k = floor((u - ${de(o)}) / ${de(n)});
				float a = ${de(o)} + k * ${de(n)} + (k < 0.5 ? ${de(a)} : 0.02);
				float b = ${de(o)} + (k + 1.0) * ${de(n)} - (k > ${de(r-1.5)} ? ${de(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${de(i)}) < 0.5 ? 0.0 : ${de(Fl+.09)};
				bool hole = (q.y > sill && q.y < ${de(Sr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${de(Sr)} && d * d + (q.y - ${de(Sr)}) * (q.y - ${de(Sr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Lh=Xs+.3,Nh=Xs+.3,Hl=Ah+.3,_3=Do.x1-tt.cx-Ks-.3,O8=Do.z1-tt.cz-Ks-.3,P8=tt.cz-Do.z0-Ks-.3,I8=Math.sqrt(Hl*Hl-Lh*Lh),$8=Math.sqrt(Hl*Hl-Nh*Nh),F8=[[tt.cx,tt.cz,.86,1.18],[tt.cx,tt.cz,1.25,.3],...id.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,n])=>`if (hitCyl(ro, vec2(${de(t)}, ${de(e)}), ${de(o)}, ${de(n)})) return 0.0;`).join(`
	`),q8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${de(tt.cx)}, ${de(tt.cz)}));
	float b1 = xz.y > ${de(tt.cz)} ? ${de(O8)} : ${de(P8)};
	vec2 A = vec2(${de(Lh)}, ${de(I8)}), Bp = vec2(${de(Lh)}, b1), C = vec2(${de(_3)}, b1);
	vec2 D = vec2(${de(_3)}, ${de(Nh)}), E = vec2(${de($8)}, ${de(Nh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${de(Hl)}));
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
	${N8}
	${C8("z",tt.northCol,tt.westCol,sd,Rh,me+Dl,me+Dl,S3,"ro.z > "+de(tt.northCol-me))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${F8}
	if (ro.y < ${de(Ys)} && ro.x > ${de(Do.x0)} && ro.x < ${de(Do.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${de(Ys)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${de($l*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${de(Ys)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${R8}
	return tr;
}
`,D8=`
precision highp float;
${M3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${C3}
${q8}

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

	if (kind == ${ae.SKY}.0) {
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

	if (kind == ${ae.GROUND}.0) {
		bool yard = P.x > ${de(Do.x0)} && P.x < ${de(Do.x1)} && P.z < ${de(Do.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${de(Do.x0)}, ${de(Do.x1)} - P.x);
			float ez = min(P.z - ${de(Do.z0)}, ${de(Do.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${de(tt.cx)}), dz = abs(P.z - ${de(tt.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${de(Ks)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${de(Ks)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${de(Ah)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${de(tt.cz)}, P.x - ${de(tt.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${de(Ah)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${de(Xs)} || dz < ${de(Xs)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${de(Xs)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${de(tt.cx)}, ${de(tt.cz)})));
		}
	} else if (kind == ${ae.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${ae.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${ae.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${ae.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${de(Ys)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${ae.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${ae.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${ae.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${ae.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${ae.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${ae.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${ae.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${ae.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${ae.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${ae.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${ae.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${de(tt.westCol)} || P.x > ${de(tt.eastCol)} || P.z > ${de(tt.northCol)}) && P.y < ${de(rs+.05)} && P.z > ${de(tt.south-.1)} && P.z < ${de(tt.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${de(tt.northCol)} ? P.z - ${de(tt.northCol)} : (P.x < ${de(tt.westCol)} ? ${de(tt.westCol)} - P.x : P.x - ${de(tt.eastCol)});
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
}`,G8=`
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
}`,H8=`
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
}`,U8=`
precision highp float;
${M3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${C3}
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
}`;function B8(t,e,o){let n=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}cd.exports=t=>{let e=z8(),o=L8(),n=B8(t,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>rd.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=t({frag:D8,vert:G8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>rd.gardenDetail}}),i=t({frag:U8,vert:H8,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*rd.leafShare/6)*6});return function(){s(),i()}};cd.exports.layout={G:tt,YARD:Do,SUN:s0}});var q3=bt((lz,F3)=>{"use strict";var j8=or().GLSL,W8=Ps(),{C:$3}=xr(),Er=$3.x1+.35,ud=$3.zc,ld=[Er-7.3,2,ud],P3=5.2*Math.PI/180,I3=2100,V8=725,X8=1288,Y8=1450,K8=2576,A0=ud-3.2,Ph=ud+3.3,fd=Er+5,hd=Er+11.7,uc=3.9,Ul=Er+22.7,Ch=40;function Q8(){let t=[],e=[],o=[],n=[],r=W8.createBuilder(t,e,o,n),a=(l,d,h,v,u,p)=>{let m=[];for(let g=0;g<=u;g++){m.push([]);for(let y=0;y<=p;y++){let b=[0,1,2].map(w=>l[w]+d[w]*g/u+h[w]*y/p);m[g].push(r.vert(b,v,[0,0,0]))}}for(let g=0;g<u;g++)for(let y=0;y<p;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},s=Ph-A0,i=.7;a([Er-i,0,A0],[fd-Er+i,0,0],[0,0,s],[0,1,0],6,4);let c=hd-fd,f=Math.hypot(c,uc);return a([fd,0,A0],[c,uc,0],[0,0,s],[-uc/f,c/f,0],6,4),a([hd,uc,A0],[Ul-hd,0,0],[0,0,s],[0,1,0],6,4),a([Er-i,0,A0],[Ul-Er+i,0,0],[0,Ch,0],[0,0,1],12,12),a([Er-i,0,Ph],[Ul-Er+i,0,0],[0,Ch,0],[0,0,-1],12,12),a([Ul,0,A0],[0,Ch,0],[0,0,s],[-1,0,0],8,4),a([Er-i,Ch,A0],[Ul-Er+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:n}}var qr=t=>t.toFixed(5),Oh=[[Er+3.4,3.7,A0+.01,1],[Er+8.6,4.1,Ph-.01,-1],[Er+14.8,uc+3.3,A0+.01,1],[Er+19.6,uc+3.6,Ph-.01,-1]],Z8=`
precision highp float;
${j8}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Oh.length};
vec4 LAMP[NLAMP];

void main() {
	${Oh.map((t,e)=>`LAMP[${e}] = vec4(${qr(t[0])}, ${qr(t[1])}, ${qr(t[2])}, ${qr(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${qr(ld[0])}, ${qr(ld[1])}, ${qr(ld[2])});
	float c = ${qr(Math.cos(P3))}, s = ${qr(Math.sin(P3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${qr(V8)} + ${qr(I3)} * d.z / fw, ${qr(X8)} - ${qr(I3)} * up / fw);
	vec2 uv = px / vec2(${qr(Y8)}, ${qr(K8)});
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
	for (int i = 0; i < ${Oh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,J8=`
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
}`;F3.exports=t=>{let e=Q8(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=t({frag:Z8,vert:J8,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,d,h]=i,v=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[u,p,m]of v){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+u[0]*c[0]+p[0]*y*c[0]+m[0]*b*c[0],d+u[1]*c[1]+p[1]*y*c[1]+m[1]*b*c[1],h+u[2]*c[2]+p[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...u),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of Oh){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let d of[-1,1])a([i[0]+l*.11,i[1],f+d*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var B3=bt((fz,U3)=>{"use strict";var tk=or().GLSL,{A:$h,BENCH:pd,SHAFT:dd,TREE:Bl,oculusGLSL:ek}=ka(),ok=wa(),Ih=Bl.sxz,D3=Bl.sy,G3=Bl.yaw;function nk(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0),a=[0,1,2].map(h=>e.getFloat32(16+h*4,!0)),s=[0,1,2].map(h=>e.getFloat32(28+h*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let d=new Uint32Array(t,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:d}}function rk(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),n=new Float32Array(t.nV*2),r=new Float32Array(t.nV),a=Math.cos(G3),s=Math.sin(G3);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*Ih,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*D3,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*Ih;e[i*3]=$h.cx+a*c+s*l,e[i*3+1]=pd.soil+.02+f,e[i*3+2]=$h.zc-s*c+a*l;let d=t.nrm[i*3]/127/Ih,h=t.nrm[i*3+1]/127/D3,v=t.nrm[i*3+2]/127/Ih,u=Math.hypot(d,h,v)||1;d/=u,h/=u,v/=u,o[i*3]=a*d+s*v,o[i*3+1]=h,o[i*3+2]=-s*d+a*v,n[i*2]=t.uv[i*2]/65535,n[i*2+1]=t.uv[i*2+1]/65535,r[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:n,leaf:r,elements:t.idx}}function H3(t,e,o,n){let r=t.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var ar=t=>t.toFixed(4),dc=Bl.crownC,pc=Bl.crownR,ak=`
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

const vec3 SHAFT = vec3(${ar(dd[0])}, ${ar(dd[1])}, ${ar(dd[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${ar($h.cx)}, ${ar($h.zc)});
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
	vec3 cc = vec3(${ar(dc[0])}, ${ar(dc[1])}, ${ar(dc[2])});
	vec3 cr = vec3(${ar(pc[0])}, ${ar(pc[1])}, ${ar(pc[2])});
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
}`,ss=B0(),sk=`
precision highp float;
${tk}
uniform float time;
${ss.lanternGLSL(ss.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${ss.LANTERNS[ss.TREE_LANTERN[0]].x.toFixed(3)}, ${ss.LANTERNS[ss.TREE_LANTERN[0]].y.toFixed(3)}, ${ss.LANTERNS[ss.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${ek()}

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
	vec3 rel = (v_pos - vec3(${ar(dc[0])}, ${ar(dc[1])}, ${ar(dc[2])})) / vec3(${ar(pc[0])}, ${ar(pc[1])}, ${ar(pc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${ar(pd.soil)}, ${ar(pd.soil+.5)}, v_pos.y);

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
}`;U3.exports=t=>{let e=null,o=H3(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=H3(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=rk(nk(a));e=t({vert:ak,frag:sk,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>ok.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Gh=bt((hz,X3)=>{"use strict";var vc=V0(),ik="res/audio/go-tomorrow.mp3",ck="res/audio/go-tomorrow.json",W3="gallery-sound",Fh=[vc.PIANO.x,1,vc.PIANO.z],lk=vc.R,Zr=!0;try{localStorage.getItem(W3)==="off"&&(Zr=!1)}catch(t){}var Nn=null,br=null,jl=null,Wl=null,is=null,z0=null,Qs=!1,qh=null,j3=[],fk=(typeof performance!="undefined"?performance.now():0)/1e3;function hk(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(r()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function uk(){if(Nn)return;Nn=new Audio,Nn.src=ik,Nn.loop=!0,Nn.preload="auto",Nn.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){Nn.volume=.2;return}try{br=new t;let e=br.createMediaElementSource(Nn);is=br.createBiquadFilter(),is.type="lowpass",is.frequency.value=1500,is.Q.value=.4,jl=br.createGain(),jl.gain.value=0,Wl=br.createGain(),Wl.gain.value=0;let o=br.createConvolver();o.buffer=hk(br),z0=br.createGain(),z0.gain.value=Zr?1:0,e.connect(is),is.connect(jl),jl.connect(z0),is.connect(o),o.connect(Wl),Wl.connect(z0),z0.connect(br.destination)}catch(e){br=null,Nn.volume=.2}}function V3(){if(Qs||!Zr)return;uk();let t=()=>Nn.play().then(()=>{Qs=!0}).catch(()=>{});br&&br.state==="suspended"?br.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,V3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Nn||!Qs||(document.hidden?Nn.pause():Zr&&Nn.play().catch(()=>{}))}),fetch(ck).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};qh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var Dh={AT:Fh,listen(t){if(!br||!Qs)return;let e=t[0]-Fh[0],o=t[2]-Fh[2],n=Math.hypot(e,o,(t[1]-Fh[1])*.5),r=Math.hypot(t[0]-vc.C.x,t[2]-vc.C.z)<lk+.4||t[0]<-.2&&Math.abs(t[2]-vc.C.z)<4,a,s,i;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(n,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=br.currentTime;jl.gain.setTargetAtTime(a,c,.35),Wl.gain.setTargetAtTime(s,c,.35),is.frequency.setTargetAtTime(i,c,.35)},time(){let t=qh&&qh.dur||158;return Nn&&Qs&&!Nn.paused||Nn&&Qs?Nn.currentTime%t:((performance.now()/1e3-fk)%t+t)%t},get cues(){return qh},get on(){return Zr},set(t){Zr=!!t;try{localStorage.setItem(W3,Zr?"on":"off")}catch(e){}Zr?(V3(),Nn&&Qs&&Nn.play().catch(()=>{}),z0&&z0.gain.setTargetAtTime(1,br.currentTime,.2)):z0?z0.gain.setTargetAtTime(0,br.currentTime,.15):Nn&&Nn.pause(),j3.forEach(e=>e(Zr))},toggle(){Dh.set(!Zr)},onChange(t){j3.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=t+" sound-toggle";let r=()=>{n.innerHTML=Zr?e:o,n.setAttribute("aria-label",Zr?"Turn the music off":"Turn the music on"),n.title=Zr?"Music on":"Music off",n.setAttribute("aria-pressed",Zr?"true":"false")};return r(),Dh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Dh.toggle()}),n}};X3.exports=Dh});var ax=bt((uz,yd)=>{"use strict";var gd=or().GLSL,{A:Y3,BENCH:ex,oculusGLSL:ox}=ka(),K3=wa(),nx=V0(),Q3=Gh(),dk=1.74,pk=1.877,Ar=dk/pk,Js={x:Y3.cx-1.22,z:Y3.zc+.02,hipY:ex.seat+.115},en=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],Wa=t=>[-t[0],-t[1],-t[2],t[3]],ls=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,n=Math.sin(e/2);return[t[0]/o*n,t[1]/o*n,t[2]/o*n,Math.cos(e/2)]},Hh=(t,e,o)=>en(ls([0,0,1],o*Math.PI/180),en(ls([0,1,0],e*Math.PI/180),ls([1,0,0],t*Math.PI/180))),xd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},c0=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Xl=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],cs=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],md=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Bh=t=>Math.hypot(t[0],t[1],t[2]),Vl=t=>{let e=Bh(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},Wh=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],vk=(t,e)=>{let o=[t[0],t[1],t[2]],n=cs(Wh(o,e),2);return Xl(Xl(e,cs(n,t[3])),Wh(o,n))},mk=(t,e)=>{let o=Wh(t,e),n=1+md(t,e);return n<1e-6?[0,0,1,0]:xd([o[0],o[1],o[2],n])};function fa(t,e,o){let[n,r,a,s]=e,i=n*n,c=r*r,f=a*a,l=n*r,d=n*a,h=r*a,v=s*n,u=s*r,p=s*a;return[(1-2*(c+f))*o[0],2*(l+p)*o[0],2*(d-u)*o[0],0,2*(l-p)*o[1],(1-2*(i+f))*o[1],2*(h+v)*o[1],0,2*(d+u)*o[2],2*(h-v)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function Yn(t,e){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=t[r]*e[n*4]+t[4+r]*e[n*4+1]+t[8+r]*e[n*4+2]+t[12+r]*e[n*4+3];return o}function vd(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),n=Math.hypot(t[8],t[9],t[10]),r=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/n,d=t[9]/n,h=t[10]/n,v=r+c+h,u;if(v>0){let p=Math.sqrt(v+1)*2;u=[(f-d)/p,(l-s)/p,(a-i)/p,p/4]}else if(r>c&&r>h){let p=Math.sqrt(1+r-c-h)*2;u=[p/4,(i+a)/p,(l+s)/p,(f-d)/p]}else if(c>h){let p=Math.sqrt(1+c-r-h)*2;u=[(i+a)/p,p/4,(d+f)/p,(l-s)/p]}else{let p=Math.sqrt(1+h-r-c)*2;u=[(l+s)/p,(d+f)/p,p/4,(a-i)/p]}return xd(u)}var jh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{jh[t+"Hand"+n+"1"]=[0,0,e*(18+r*6)*o],jh[t+"Hand"+n+"2"]=[0,0,e*(26+r*6)*o],jh[t+"Hand"+n+"3"]=[0,0,e*16*o]})}function Zs(t,e,o){let n=t-e;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function Z3(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*Zs(t,.14,.07)+57*Zs(t,.72,.12),n=5*Zs(t,.06,.04)-9*Zs(t,.42,.12)+17*Zs(t,.62,.05)-3*Zs(t,.85,.1),r=-26*Zs(t,.58,.06);return{hip:e,knee:o,ankle:n,toe:r}}function gk(t){let e=(t%1+1)%1,o=Z3(e),n=Z3(e+.5),r=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var J3=`
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
}`,Vh=B0(),tx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${gd}
uniform float time;
${nx.roomGLSL()}
${Vh.lanternGLSL(Vh.TREE_LANTERN)}
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
${ox()}
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
}`;function xk(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var rx={w:.13,h:.2},Uh=t=>.011*(1-Math.pow(1-t,3));function yk(){let t=[],e=[],o=[],n=[],r=[],a=(p,m,g,y,b,w,_)=>{let M=t.length/3;[p,m,g,y].forEach((z,I)=>{t.push(...z),e.push(...b),o.push(..._[I]),n.push(w)}),r.push(M,M+1,M+2,M,M+2,M+3)},{w:s,h:i}=rx,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,d=s+.001,h=c+.001;a([0,l,-h],[d,l,-h],[d,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[d,l+.001,h],[d,l+.001,-h],[0,1,0],2,f),a([-d,l,-h],[0,l,-h],[0,l,h],[-d,l,h],[0,-1,0],2,f),a([-d,l+.001,-h],[-d,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let v=8;for(let p of[1,-1]){for(let g=0;g<v;g++){let y=g/v,b=(g+1)/v,w=(.002+y*(s-.002))*p,_=(.002+b*(s-.002))*p,M=Uh(y),z=Uh(b),I=p>0?y:1-y,R=p>0?b:1-b,B=1,D=-(z-M)/(_-w);a([w,M,-c],[_,z,-c],[_,z,c],[w,M,c],[D,B,0],3,[[I,1],[R,1],[R,0],[I,0]]),a([w,l+.001,c],[_,l+.001,c],[_,z,c],[w,M,c],[0,0,1],4,f),a([w,M,-c],[_,z,-c],[_,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,f)}let m=s*p;a([m,l+.001,-c],[m,Uh(1),-c],[m,Uh(1),c],[m,l+.001,c],[p,0,0],4,f)}let u=10;for(let p=0;p<u;p++){let m=p/u,g=(p+1)/u,y=t.length/3;for(let[b,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(b,0,w),e.push(0,1,0),o.push(b,(w+c)/i),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:t,nrm:e,uv:o,kind:n,idx:r}}function bk(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,f,l,d,h)=>{for(let v=0;v<d;v++){let u=s+(n()-.5)*c*2,p=i+(n()-.5)*f*2,m=20+n()*60,g=e.createRadialGradient(u,p,0,u,p,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(u-m,p-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+n()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${n()*.05})`,e.fillRect(n()*512,n()*768,1,1);return t}var wk=`
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
		float r = u * ${rx.w.toFixed(3)};
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
}`,_k=`
precision highp float;
${gd}
uniform float time;
${Vh.lanternGLSL(Vh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${ox()}
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
}`;function Mk(){let t=[],e=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],d=16;for(let h=0;h<l.length;h++){let[v,u,p,m]=l[h],g=m===2?.45:1;for(let y=0;y<=d;y++){let b=y/d*Math.PI*2;t.push(Math.cos(b)*v,u,Math.sin(b)*v*g);let w=Math.max(h-1,0),_=Math.min(h+1,l.length-1),M=l[_][0]-l[w][0],z=l[_][1]-l[w][1],I=Math.hypot(M,z)||1;e.push(Math.cos(b)*z/I,-M/I,Math.sin(b)*z/I/g),o.push(...p),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let v=0;v<d;v++){let u=h*(d+1)+v,p=u+d+1;r.push(u,p,u+1,u+1,p,p+1)}return{pos:t,nrm:e,col:o,mat:n,idx:r}}var kk=`
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
}`,Sk=`
precision highp float;
${gd}
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
}`,Ek=`
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
}`,Ak=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;yd.exports=t=>{let e="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Js.x,1.9,Js.z],glow:0};Promise.all([fetch(e+"avatar.json").then(R=>R.json()),fetch(e+"avatar.bin").then(R=>R.arrayBuffer())]).then(([R,B])=>{o=f(R,B)}).catch(R=>console.error(R));let s=null;Promise.all([fetch(e+"motion.json").then(R=>R.ok?R.json():null),fetch(e+"motion.bin").then(R=>R.ok?R.arrayBuffer():null)]).then(([R,B])=>{if(!R||!B)return;let D={};for(let K in R.clips){let O=R.clips[K],H=O.bones.length,ft=new Float32Array(B,O.mean,H*4),It={};O.bones.forEach((Mt,vt)=>{It[Mt]=[ft[vt*4],ft[vt*4+1],ft[vt*4+2],ft[vt*4+3]]}),D[K]=Object.assign({},O,{Q:new Int16Array(B,O.q,O.frames*H*4),H:new Float32Array(B,O.hips,O.frames*3),meanQ:It})}s=D}).catch(()=>{});function i(R,B){let D=R.frames,K=R.bones.length,O=(B%D+D)%D,H=Math.floor(O)%D,ft=(H+1)%D,It=O-Math.floor(O),Mt={};for(let Wt=0;Wt<K;Wt++){let Se=(H*K+Wt)*4,Ne=(ft*K+Wt)*4,to=R.Q[Se],it=R.Q[Se+1],Lt=R.Q[Se+2],wt=R.Q[Se+3],Me=R.Q[Ne],kt=R.Q[Ne+1],Ct=R.Q[Ne+2],Ft=R.Q[Ne+3];to*Me+it*kt+Lt*Ct+wt*Ft<0&&(Me=-Me,kt=-kt,Ct=-Ct,Ft=-Ft),Mt[R.bones[Wt]]=xd([to+(Me-to)*It,it+(kt-it)*It,Lt+(Ct-Lt)*It,wt+(Ft-wt)*It])}let vt=H*3,st=ft*3;return{q:Mt,hips:[R.H[vt]+(R.H[st]-R.H[vt])*It,R.H[vt+1]+(R.H[st+1]-R.H[vt+1])*It,R.H[vt+2]+(R.H[st+2]-R.H[vt+2])*It]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(R,B){let D=(Z,Ht)=>new Float32Array(B,Z,Ht),K=R.bones,O=K.length,H={};K.forEach((Z,Ht)=>{H[Z.name]=Ht});let ft=[];for(let Z=0;Z<O;Z++)ft.push(Array.from(D(R.ibm+Z*64,16)));let It=K.map(Z=>fa(Z.t,Z.r,Z.s)),Mt=[];for(let Z=0;Z<O;Z++){let Ht=K[Z].parent;Mt[Z]=Ht<0?It[Z]:Yn(Mt[Ht],It[Z])}let vt=Mt.map(vd),st=R.meshes.map(Z=>{let Ht=D(Z.pos,Z.n*3),Xt=D(Z.nrm,Z.n*3),Dt=D(Z.uv,Z.n*2),xe=new Uint8Array(B,Z.jnt,Z.n*4),Fe=D(Z.wgt,Z.n*4),Ce=new Uint16Array(B,Z.idx,Z.ni),_e={};for(let Le in Z.morphs){let jo=Z.morphs[Le];_e[Le]={idx:new Uint16Array(B,jo.idx,jo.n),d:D(jo.d,jo.n*3)}}let je=new Float32Array(Z.n*3),Te=new Float32Array(Z.n*3),eo=new Float32Array(Z.n*3),$e=t.buffer({data:je,usage:"dynamic"}),qe=t.buffer({data:Te,usage:"dynamic"}),ro=/avaturn_hair/.test(Z.name),ke=/EyeAO|Eyelash/.test(Z.name),go=/Body|Head/.test(Z.name),Po=Z.kind||0;return{m:Z,pos:Ht,nrm:Xt,uv:Dt,jnt:xe,wgt:Fe,idx:Ce,morphs:_e,outP:je,outN:Te,work:eo,pb:$e,nbuf:qe,tex:Z.tex?xk(t,e+Z.tex):c,kind:Po,alphaScale:/EyeAO/.test(Z.name)?.25:1,blend:Z.blend||ro,alphaCut:ro?.35:ke?.02:0,skin:go?1:0}}),Wt=t({vert:J3,frag:tx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!z?M.lamp:[0,0,0,0],court:()=>M||z?0:1,candle:()=>z?1:0},cull:{enable:!1}}),Se=t({vert:J3,frag:tx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!z?M.lamp:[0,0,0,0],court:()=>M||z?0:1,candle:()=>z?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Ne=.3;for(let Z of st)if(Z.uvBuf=t.buffer(Z.uv),/Body/.test(Z.m.name)){let Ht=[],Xt=[];for(let Dt=0;Dt<Z.idx.length;Dt+=3){let xe=Z.idx[Dt],Fe=Z.idx[Dt+1],Ce=Z.idx[Dt+2];(Z.pos[xe*3+1]<Ne&&Z.pos[Fe*3+1]<Ne&&Z.pos[Ce*3+1]<Ne?Xt:Ht).push(xe,Fe,Ce)}Z.el=t.elements({data:new Uint16Array(Ht),type:"uint16"}),Xt.length&&(Z.sockEl=t.elements({data:new Uint16Array(Xt),type:"uint16"}))}else Z.el=t.elements({data:Z.idx,type:"uint16"});let to=Mt[H.Hips],it=ls([1,0,0],-Math.PI/2),Lt=Yn(fa([Js.x-to[12]*Ar,Js.hipY-to[14]*Ar,Js.z+to[13]*Ar],it,[1,1,1]),fa([0,0,0],[0,0,0,1],[Ar,Ar,Ar])),wt=new Array(O),Me=-1,kt=(Z,Ht,Xt)=>Yn(fa([Z,0,Ht],ls([0,1,0],Xt),[1,1,1]),fa([0,0,0],[0,0,0,1],[Ar,Ar,Ar])),Ct=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Z=>H[Z]),Ft=Ct.map(Z=>Mt[Z][13]*Ar);function ge(Z){if(s&&s.walk)return Pe(Z);let Ht=gk(Z.phase),Xt={},Dt=Te=>{for(let eo in Te){let $e=Te[eo],qe=Hh($e[0],$e[1],$e[2]);Xt[eo]=Xt[eo]?en(Xt[eo],qe):qe}};Dt(Ht.swing),Dt(Ht.pose);let xe=Math.cos(Z.heading),Fe=-Math.sin(Z.heading),Ce=kt(Z.x+xe*Ht.sway,Z.z+Fe*Ht.sway,Z.heading),_e=new Array(O);for(let Te=0;Te<O;Te++){let eo=K[Te],$e=It[Te],qe=Xt[eo.name];if(qe){let ro=vt[Te],ke=en(Wa(ro),en(qe,ro));$e=fa(eo.t,en(eo.r,ke),eo.s)}_e[Te]=eo.parent<0?Yn(Ce,$e):Yn(_e[eo.parent],$e)}let je=1/0;Ct.forEach((Te,eo)=>{je=Math.min(je,_e[Te][13]-Ft[eo])});for(let Te=0;Te<O;Te++)_e[Te]=_e[Te].slice(),_e[Te][13]-=je,wt[Te]=Yn(_e[Te],ft[Te]);return{blink:0}}function Pe(Z){let Ht=s.walk,Xt=i(Ht,(Z.phase+Ht.phase0)*Ht.frames),Dt=kt(Z.x,Z.z,Z.heading),xe=new Array(O),Fe=H.Hips;for(let _e=0;_e<O;_e++){let je=K[_e],Te=It[_e],eo=Xt.q[je.name];if(eo){let $e=vt[_e],qe=en(Wa($e),en(eo,$e)),ro=_e===Fe?[je.t[0]+Xt.hips[0],je.t[1]+Xt.hips[1],je.t[2]+Xt.hips[2]]:je.t;Te=fa(ro,en(je.r,qe),je.s)}xe[_e]=je.parent<0?Yn(Dt,Te):Yn(xe[je.parent],Te)}let Ce=1/0;Ct.forEach((_e,je)=>{Ce=Math.min(Ce,xe[_e][13]-Ft[je])});for(let _e=0;_e<O;_e++)xe[_e]=xe[_e].slice(),xe[_e][13]-=Ce,wt[_e]=Yn(xe[_e],ft[_e]);return{blink:0}}function pe(Z,Ht){let Xt=Math.sin(Z*2*Math.PI/4.6),Dt=Math.sin(Z*.37)*.6+Math.sin(Z*.83+1)*.4,xe={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Xt*.8,0,0],Spine2:[4+Xt*.6,0,0],Neck:[10,0,0],Head:[12+Dt*2,Dt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Fe={};for(let $e in xe){let qe=xe[$e];Fe[$e]=Hh(qe[0],qe[1],qe[2])}let Ce=kt(Ht.x,Ht.z,Ht.heading),_e=new Array(O);for(let $e=0;$e<O;$e++){let qe=K[$e],ro=It[$e],ke=Fe[qe.name];if(ke){let go=vt[$e],Po=en(Wa(go),en(ke,go));ro=fa(qe.t,en(qe.r,Po),qe.s)}_e[$e]=qe.parent<0?Yn(Ce,ro):Yn(_e[qe.parent],ro)}let Te=_e[H.Hips][13]-(Ht.y+.1);for(let $e=0;$e<O;$e++)_e[$e]=_e[$e].slice(),_e[$e][13]-=Te,wt[$e]=Yn(_e[$e],ft[$e]);let eo=Z%4.1;return{blink:eo<.16?Math.sin(eo/.16*Math.PI):0}}let oe=Z=>[Mt[Z][12],Mt[Z][13],Mt[Z][14]],ct=(Z,Ht)=>{let Xt=Vl(Z),Dt=Vl(c0(Ht,cs(Xt,md(Ht,Xt)))),xe=Wh(Xt,Dt);return vd([Xt[0],Xt[1],Xt[2],0,Dt[0],Dt[1],Dt[2],0,xe[0],xe[1],xe[2],0,0,0,0,1])},te={};for(let Z of["Left","Right"]){let Ht=H[Z+"Arm"],Xt=H[Z+"ForeArm"],Dt=H[Z+"Hand"],xe=H[Z+"HandMiddle1"];te[Z]={a:Ht,f:Xt,h:Dt,upper:Bh(c0(oe(Xt),oe(Ht)))*Ar,fore:Bh(c0(oe(Dt),oe(Xt)))*Ar,dir0:Vl(c0(oe(Xt),oe(Ht))),qf0:ct(c0(oe(Dt),oe(Xt)),[0,1,0]),qh0:ct(c0(oe(xe),oe(Dt)),[0,1,0])}}let Ee={};for(let Z of["Left","Right"])Ee[te[Z].a]={side:Z,part:0},Ee[te[Z].f]={side:Z,part:1},Ee[te[Z].h]={side:Z,part:2};function le(Z,Ht,Xt){if(!Z||!Z.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Dt=0,xe=Z.length-1,Fe=-1;for(;Dt<=xe;){let jo=Dt+xe>>1;Z[jo].t<=Ht?(Fe=jo,Dt=jo+1):xe=jo-1}let Ce=Z[Z.length-1],_e=Z[0],je=Fe>=0?Z[Fe]:{t:Ce.t-Xt,x:Ce.x,w:Ce.w},Te=Fe+1<Z.length?Z[Fe+1]:{t:_e.t+Xt,x:_e.x,w:_e.w},eo=Math.max(.05,Te.t-je.t),$e=Math.min(.14,eo*.45),qe=Math.max(0,Math.min(1,(Ht-je.t-$e)/Math.max(eo-$e-.03,.02))),ro=qe*qe*(3-2*qe),ke=Ht-je.t,go=(.55+.45*je.w)*Math.exp(-ke/.11),Po=Te.t-Ht,Le=Po<.05?(.55+.45*Te.w)*(1-Po/.05):0;return{x:je.x+(Te.x-je.x)*ro,lift:Math.sin(Math.PI*qe)*Math.min(.05,.012+eo*.03)*(eo>2.5?.4:1),press:Math.max(go,Le),finger:Le>go?((Fe+1)*7+3)%4:(Math.max(Fe,0)*7+3)%4,busy:Math.exp(-ke/.9)}}let Zt={lean:0,turn:0,nod:0,pedal:0,last:-1},so=["Index","Middle","Ring","Pinky"];function k(Z){let Ht=nx.PLAY,Xt=Q3.cues,Dt=Q3.time(),xe=Xt&&Xt.dur||158,Fe={Left:le(Xt&&Xt.left,Dt,xe),Right:le(Xt&&Xt.right,Dt,xe)},Ce=.35;if(Xt&&Xt.level&&Xt.level.length){let fo=Dt*8,ko=Math.floor(fo)%Xt.level.length,Gn=(ko+1)%Xt.level.length;Ce=Xt.level[ko]+(Xt.level[Gn]-Xt.level[ko])*(fo-Math.floor(fo))}let _e=Zt.last<0?0:Math.min(.1,Math.max(0,Z-Zt.last));Zt.last=Z;let je=fo=>Math.min(1,_e*fo);Zt.lean+=(Ce-Zt.lean)*je(1.2),Zt.turn+=(Fe.Right.busy-Fe.Left.busy-Zt.turn)*je(1.5),Zt.nod+=(Math.max(Fe.Right.press,Fe.Left.press*.7)-Zt.nod)*je(6),Zt.pedal+=((Fe.Left.busy>.35?1:.15)-Zt.pedal)*je(5);let Te=Math.sin(Z*2*Math.PI/4.6),eo=Math.sin(Dt*.41)*.6+Math.sin(Dt*.17+1)*.4,$e={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Zt.pedal,0,0],Spine:[9+3.5*Zt.lean+eo*1.6,Zt.turn*2.5,-Zt.turn*1.6],Spine1:[7+Te*.8+2.5*Zt.lean,Zt.turn*2.5,-Zt.turn*1.2],Spine2:[6+Te*.6+eo*.8,Zt.turn*1.5,0],Neck:[13+3*Zt.lean,Zt.turn*3,0],Head:[15+Zt.nod*3.5+eo*1.5,Zt.turn*5,eo*1.5]};for(let fo of["Left","Right"]){let ko=fo==="Left"?-1:1,Gn=Fe[fo];so.forEach((W,pt)=>{let ne=pt===Gn.finger?Gn.press:Gn.press*.2;$e[fo+"Hand"+W+"1"]=[0,0,ko*(20+3*pt+20*ne)],$e[fo+"Hand"+W+"2"]=[0,0,ko*(26+4*pt-6*ne)],$e[fo+"Hand"+W+"3"]=[0,0,ko*14]}),$e[fo+"HandThumb1"]=[0,ko*-18,ko*10]}let qe={};for(let fo in $e){let ko=$e[fo];qe[fo]=Hh(ko[0],ko[1],ko[2])}let ro=Mt[H.Hips][13]*Ar,ke=Yn(fa([Ht.stoolX,Ht.stoolTop+.1-ro,Ht.stoolFront+.15],ls([0,1,0],Ht.heading),[1,1,1]),fa([0,0,0],[0,0,0,1],[Ar,Ar,Ar])),go=(Ht.keyX0+Ht.keyX1)/2,Po={};for(let fo of["Left","Right"]){let ko=Fe[fo],Gn=fo==="Left"?go-.4+.33*ko.x:go+.07+.33*ko.x;Po[fo]=[Gn,Ht.keyTop+.062+ko.lift-ko.press*.012,Ht.keyFront+.075]}let Le=new Array(O),jo={},ma=[0,1,0];for(let fo=0;fo<O;fo++){let ko=K[fo],Gn=It[fo],W=qe[ko.name],pt=Ee[fo];if(pt){let ne=te[pt.side];if(pt.part===0){let ve=Le[ko.parent],ye=Yn(ve,It[fo]),sn=[ye[12],ye[13],ye[14]],cr=en(vd(ve),Wa(vt[ko.parent])),Tr=c0(Po[pt.side],sn),cn=Bh(Tr),Mr=(ne.upper+ne.fore)*.995;cn>Mr&&(Tr=cs(Tr,Mr/cn),cn=Mr);let ln=cs(Tr,1/cn),_o=(ne.upper*ne.upper-ne.fore*ne.fore+cn*cn)/(2*cn),Zn=Math.sqrt(Math.max(0,ne.upper*ne.upper-_o*_o)),Ko=[pt.side==="Left"?-.6:.6,-.8,.3];Ko=Vl(c0(Ko,cs(ln,md(Ko,ln))));let Hn=Xl(sn,Xl(cs(ln,_o),cs(Ko,Zn)));ne.T=Xl(sn,Tr),ne.elbow=Hn;let Br=Vl(c0(Hn,sn)),jr=en(mk(vk(cr,ne.dir0),Br),cr);jo[fo]=jr,W=en(Wa(cr),jr)}else if(pt.part===1){let ve=en(ct(c0(ne.T,ne.elbow),ma),Wa(ne.qf0));jo[fo]=ve,W=en(Wa(jo[ko.parent]),ve)}else{let ve=Fe[pt.side],ye=en(ct([pt.side==="Left"?.12:-.12,-.2-.1*ve.press,-1],ma),Wa(ne.qh0));jo[fo]=ye,W=en(Wa(jo[ko.parent]),ye)}}if(W){let ne=vt[fo],ve=en(Wa(ne),en(W,ne));Gn=fa(ko.t,en(ko.r,ve),ko.s)}Le[fo]=ko.parent<0?Yn(ke,Gn):Yn(Le[ko.parent],Gn)}for(let fo=0;fo<O;fo++)wt[fo]=Yn(Le[fo],ft[fo]);a.pianist={head:[Le[H.Head][12],Le[H.Head][13],Le[H.Head][14]]};let u0=Z%4.3;return{blink:u0<.16?Math.sin(u0/.16*Math.PI):0}}function Be(Z,Ht){if(z)return k(Z);if(M)return pe(Z,M);if(Ht)return ge(Ht);let Xt=Math.sin(Z*2*Math.PI/4.2),Dt=Z%3.7,xe=Dt<.16?Math.sin(Dt/.16*Math.PI):0,Fe=Math.sin(Z*.45),Ce=Math.sin(Z*.31+.8),_e=Math.max(0,Math.sin(Z*.085)-.75)*4,je={RightArm:[0,-22*_e,11*Fe],RightForeArm:[0,8+26*_e,0],RightHand:[38*Ce,0,6*Math.sin(Z*.7)],LeftUpLeg:[0,0,3.2*Math.sin(Z*.36)],RightFoot:[5*Math.sin(Z*.52+.4),0,0],Head:[0,1.6*Math.sin(Z*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ke,go)=>{let Po=Math.sin(Z*1.1-go*.5);je["RightHand"+ke+"1"]=[0,0,8+12*Po],je["RightHand"+ke+"2"]=[0,0,6+10*Po]});let Te={},eo=(ke,go)=>{for(let Po in ke){let Le=ke[Po],jo=Hh(Le[0]*go,Le[1]*go,Le[2]*go);Te[Po]=Te[Po]?en(Te[Po],jo):jo}};eo(jh,1),eo({Spine1:[Xt*.8,0,0],Spine2:[Xt*.6,0,0]},1),eo(je,1);let $e=new Array(O),qe=new Array(O);for(let ke=0;ke<O;ke++){let go=K[ke],Po=It[ke],Le=Te[go.name];if(Le){let jo=vt[ke],ma=en(Wa(jo),en(Le,jo));Po=fa(go.t,en(go.r,ma),go.s)}$e[ke]=go.parent<0?Yn(Lt,Po):Yn($e[go.parent],Po),qe[ke]=null}for(let ke=0;ke<O;ke++)wt[ke]=Yn($e[ke],ft[ke]);let ro=ke=>[ke[12],ke[13],ke[14]];return a.headPos=ro($e[H.Head]),a.hipsPos=ro($e[H.Hips]),a.headM=$e[H.Head],{blink:xe}}function Ie(Z,Ht){let{pos:Xt,nrm:Dt,jnt:xe,wgt:Fe,outP:Ce,outN:_e,work:je,m:Te}=Z,eo=Te.n,$e=Xt;if(Ht){je.set(Xt);for(let qe in Z.morphs){let ro=Ht[qe]||0;if(ro<=0)continue;let ke=Z.morphs[qe];for(let go=0;go<ke.idx.length;go++){let Po=ke.idx[go]*3;je[Po]+=ke.d[go*3]*ro,je[Po+1]+=ke.d[go*3+1]*ro,je[Po+2]+=ke.d[go*3+2]*ro}}$e=je}for(let qe=0;qe<eo;qe++){let ro=$e[qe*3],ke=$e[qe*3+1],go=$e[qe*3+2],Po=Dt[qe*3],Le=Dt[qe*3+1],jo=Dt[qe*3+2],ma=0,u0=0,fo=0,ko=0,Gn=0,W=0;for(let ne=0;ne<4;ne++){let ve=Fe[qe*4+ne];if(ve===0)continue;let ye=wt[xe[qe*4+ne]];ma+=ve*(ye[0]*ro+ye[4]*ke+ye[8]*go+ye[12]),u0+=ve*(ye[1]*ro+ye[5]*ke+ye[9]*go+ye[13]),fo+=ve*(ye[2]*ro+ye[6]*ke+ye[10]*go+ye[14]),ko+=ve*(ye[0]*Po+ye[4]*Le+ye[8]*jo),Gn+=ve*(ye[1]*Po+ye[5]*Le+ye[9]*jo),W+=ve*(ye[2]*Po+ye[6]*Le+ye[10]*jo)}Ce[qe*3]=ma,Ce[qe*3+1]=u0,Ce[qe*3+2]=fo;let pt=Math.hypot(ko,Gn,W)||1;_e[qe*3]=ko/pt,_e[qe*3+1]=Gn/pt,_e[qe*3+2]=W/pt}Te.grid&&!uo&&!M&&!z&&no(Z),Z.sway&&R0(Z),Z.pb.subdata(Ce),Z.nbuf.subdata(_e)}function no(Z){let[Ht,Xt]=Z.m.grid,Dt=Z.outP,xe=Z.outN,Fe=ex.seat+.012;for(let Ce=1;Ce<Ht;Ce++){let _e=Math.pow(1-Ce/(Ht-1),1.5);for(let je=0;je<Xt;je++){let Te=(Ce*Xt+je)*3;Dt[Te+1]>Fe?Dt[Te+1]=Fe+(Dt[Te+1]-Fe)*Math.max(_e,.15):Dt[Te+1]=Fe}}for(let Ce=0;Ce<xe.length;Ce+=3)xe[Ce]=0,xe[Ce+1]=1,xe[Ce+2]=0}let uo=!1,wo=(Z,Ht,Xt,Dt,xe)=>({bone:H[Z],rate:Ht,damp:Xt,drag:Dt,most:xe,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),mo={head:wo("Head",15,.32,.012,.035),chest:wo("Spine2",9,.38,.03,.1),hips:wo("Hips",7,.42,.045,.16)},Ho=-1;function ir(Z){let Ht=Ho<0?0:Z-Ho;Ho=Z;for(let Xt in mo){let Dt=mo[Xt],xe=wt[Dt.bone],Fe=Mt[Dt.bone],Ce=Fe[12],_e=Fe[13],je=Fe[14],Te=[xe[0]*Ce+xe[4]*_e+xe[8]*je+xe[12],xe[1]*Ce+xe[5]*_e+xe[9]*je+xe[13],xe[2]*Ce+xe[6]*_e+xe[10]*je+xe[14]];if(!Dt.p||!(Ht>0)||Ht>.25||Math.hypot(Te[0]-Dt.p[0],Te[1]-Dt.p[1],Te[2]-Dt.p[2])>.5){Dt.p=Te,Dt.x=[0,0,0],Dt.v=[0,0,0],Dt.vel=[0,0,0];continue}let eo=[(Te[0]-Dt.p[0])/Ht,(Te[1]-Dt.p[1])/Ht,(Te[2]-Dt.p[2])/Ht],$e=Math.max(1,Math.ceil(Ht/.016)),qe=Ht/$e;for(let ke=0;ke<3;ke++){let go=Math.max(-30,Math.min(30,(eo[ke]-Dt.vel[ke])/Ht)),Po=-eo[ke]*Dt.drag;for(let Le=0;Le<$e;Le++)Dt.v[ke]+=((Po-Dt.x[ke])*Dt.rate*Dt.rate-2*Dt.damp*Dt.rate*Dt.v[ke]-go)*qe,Dt.x[ke]+=Dt.v[ke]*qe}let ro=Math.hypot(Dt.x[0],Dt.x[1],Dt.x[2]);if(ro>Dt.most){let ke=Dt.most/ro;Dt.x=[Dt.x[0]*ke,Dt.x[1]*ke,Dt.x[2]*ke]}Dt.p=Te,Dt.vel=eo}}for(let Z of st){let Ht=Z.m,Xt=Ht.n,Dt=null,xe=null;if(Ht.kind===9){xe="head",Dt=new Float32Array(Xt);for(let Fe=0;Fe<Xt;Fe++){let Ce=Z.uv[Fe*2]<-.5?0:Z.uv[Fe*2+1];Dt[Fe]=Ce*Ce}}else if(Ht.name==="scarf"){xe="chest",Dt=new Float32Array(Xt);for(let Fe=0;Fe<Xt;Fe++)Dt[Fe]=l(1.52,1.12,Z.pos[Fe*3+1])}else if(Ht.grid){xe="hips",Dt=new Float32Array(Xt);let Fe=Ht.grid[0],Ce=Ht.grid[1];for(let _e=0;_e<Xt;_e++)Dt[_e]=Math.pow(Math.floor(_e/Ce)/(Fe-1),1.6)}Dt&&(Z.sway=Dt,Z.spring=mo[xe],Z.loose=xe)}function R0(Z){if(!uo&&!z&&!M)return;let Ht=Z.spring.x,Xt=Z.sway,Dt=Z.outP;if(!(Math.abs(Ht[0])+Math.abs(Ht[1])+Math.abs(Ht[2])<1e-5))for(let xe=0,Fe=Xt.length;xe<Fe;xe++){let Ce=Xt[xe];Ce>0&&(Dt[xe*3]+=Ht[0]*Ce,Dt[xe*3+1]+=Ht[1]*Ce,Dt[xe*3+2]+=Ht[2]*Ce)}}function pi(Z,Ht){uo=!!Ht;let Xt=Be(Z,Ht);ir(Z);let Dt={eyeBlinkLeft:Xt.blink,eyeBlinkRight:Xt.blink};for(let xe of st)Ie(xe,Object.keys(xe.morphs).length?Dt:null);a.pose=Xt}return{parts:st,update:pi,drawOpaque:Wt,drawBlend:Se,state:a}}function l(R,B,D){let K=Math.min(1,Math.max(0,(D-R)/(B-R)));return K*K*(3-2*K)}let d=yk(),h=bk(),v=h?t.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,u=t({vert:wk,frag:_k,attributes:{position:d.pos,normal:d.nrm,uv:d.uv,kind:d.kind},elements:new Uint16Array(d.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:v},cull:{enable:!1}}),p=Mk(),m=t({vert:kk,frag:Sk,attributes:{position:p.pos,normal:p.nrm,color:p.col,mat:p.mat},elements:new Uint16Array(p.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:Ek,frag:Ak,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(R){let B=R.headM,D=st=>{let Wt=Math.hypot(...st)||1;return st.map(Se=>Se/Wt)},K=D([B[4],B[5],B[6]]),O=D([B[8],B[9],B[10]]),H=K,ft=O.map(st=>-st),It=[ft[1]*H[2]-ft[2]*H[1],ft[2]*H[0]-ft[0]*H[2],ft[0]*H[1]-ft[1]*H[0]],Mt=R.headPos,vt=[0,1,2].map(st=>Mt[st]+K[st]*.06+O[st]*.185);return[It[0],It[1],It[2],0,ft[0],ft[1],ft[2],0,H[0],H[1],H[2],0,vt[0],vt[1],vt[2],1]}let b=-1,w="",_=null,M=null,z=!1;function I(R){if(!o)return;let B=(K3.motion,r()),D=_?[_.x,_.z,_.heading,_.phase].map(O=>O.toFixed(4)).join():"";(M||z||D!==w||!_&&Math.abs(B-b)>(K3.isPhone?1/30:0))&&(o.update(B,_),b=B,w=D);for(let O of o.parts)O.blend||(o.drawOpaque({pb:O.pb,nb:O.nbuf,uv:O.uvBuf,el:O.el,tex:O.tex,alphaCut:O.alphaCut,skin:O.skin,kind:O.kind,alphaScale:O.alphaScale}),O.sockEl&&o.drawOpaque({pb:O.pb,nb:O.nbuf,uv:O.uvBuf,el:O.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let K=o.state;if(K.headM&&!_&&!M&&!z){u({model:y(K)});let O=K.headPos,H=Math.sin(B*1.3)*.02,ft=[O[0],O[1]+.62+H,O[2]+.05],It=B*.6,Mt=fa(ft,en(ls([0,1,0],It),ls([0,0,1],.18)),[1.2,1.2,1.2]),vt=.5+.5*Math.sin(B*2);m({model:Mt,pulse:vt}),a.glowPos=ft,a.glow=.06+.03*vt,g({center:[ft[0],ft[1]-.12,ft[2]],size:.1,pulse:vt})}for(let O of o.parts)O.blend&&o.drawBlend({pb:O.pb,nb:O.nbuf,uv:O.uvBuf,el:O.el,tex:O.tex,alphaCut:O.alphaCut,skin:O.skin,kind:O.kind,alphaScale:O.alphaScale})}return I.state=a,I.place=Js,I.setWalk=R=>{_=R||null,_&&(a.glow=0)},I.setSeat=R=>{M=R||null,a.glow=M?0:a.glow,b=-1},I.setPiano=R=>{R=!!R,R!==z&&(z=R,z&&(a.glow=0),b=-1)},I};yd.exports.PLACE=Js});var bd=bt((dz,sx)=>{"use strict";sx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var _d=bt((pz,ux)=>{"use strict";var fx=wa(),ix=sl(),fs=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function wd(){return fx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var zk=`
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
`,cx=!1;function hx(){if(cx)return;cx=!0;let t=document.createElement("style");t.textContent=zk,document.head.appendChild(t)}var Tk='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Lk(t){return!t||!t.visit||!wd()?"":(hx(),`<button type="button" class="visit-btn" data-visit="${fs(t.slug||"")}" aria-label="Visit what remained: watch ${fs(t.title)} come to life">${Tk}<span>Visit what remained</span></button>`)}function Nk(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Yl=null;function Rk(t){if(Yl||!t||!t.visit)return;hx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(fx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+t.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${fs(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${fs(t.title)}, ${fs(ix(t))}" src="${fs(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${fs(t.title)}</span>
			<span class="visit-meta">${fs(ix(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=Nk(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),p()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),v()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let d=m=>m.stopImmediatePropagation();window.addEventListener("keyup",d,!0);let h=!1;function v(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function u(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>v()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&v()}),r.addEventListener("ended",v),r.addEventListener("error",v);function p(){if(Yl){Yl=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",d,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",p),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}v()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&p(),g.dataset.act==="again"&&(i.forEach(clearTimeout),u()))}),r.src=t.visit.video,Yl={close:p},requestAnimationFrame(()=>{n.classList.add("on"),c(u,1300)})}var lx={};function Ck(t){if(!t||!t.visit||lx[t.visit.video]||!wd())return;lx[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}ux.exports={available:wd,button:Lk,open:Rk,warm:Ck,get active(){return!!Yl}}});var vx=bt((vz,px)=>{"use strict";var Ok=wa(),bc=[0,0],mc=[0,0],T0=null,kd=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(bc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),bc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),kd=performance.now())},{passive:!0});let t=()=>{kd=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(T0||(T0=[e.gamma,e.beta]),T0[0]+=(e.gamma-T0[0])*.01,T0[1]+=(e.beta-T0[1])*.01,bc[0]=Math.max(-1,Math.min(1,(e.gamma-T0[0])/14)),bc[1]=Math.max(-1,Math.min(1,(e.beta-T0[1])/14)))},{passive:!0})}var dx=0,gc=null,Xh=null,l0=[0,0,0],Md=0,xc=null,yc=0,ti={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Pk={apply(t,e){let o=Math.min(.1,Math.max(0,e-dx));dx=e;let n=t.eye,r=t.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!gc;if(gc&&o>0){let b=[n[0]-gc[0],n[1]-gc[1],n[2]-gc[2]],w=Math.hypot(b[0],b[1],b[2]);if(w>2.5)l=!0;else{let M=Math.min(1,o*5);for(let z=0;z<3;z++)l0[z]+=(b[z]/o-l0[z])*M}let _=Math.hypot(r[0]-Xh[0],r[1]-Xh[1],r[2]-Xh[2]);yc=w/o<.12&&_/o<.2?yc+o:0}l&&(l0[0]=l0[1]=l0[2]=0,yc=0),gc=n.slice(),Xh=r.slice(),Md=Math.hypot(l0[0],l0[1],l0[2]);let d=Math.min(1,o*2.6);mc[0]+=(bc[0]-mc[0])*d,mc[1]+=(bc[1]-mc[1])*d;let h=Math.max(.03,Math.min(.32,s*.05)),v=(Ok.isPhone&&!T0?1.5:1)*Math.min(1,yc/2.5),u=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*h*.55*v,p=Math.sin(e*.097+.6)*h*.16*v,m=mc[0]*h+u,g=-mc[1]*h*.45+p;for(let b=0;b<3;b++)ti.eye[b]=n[b]+i[b]*m+f[b]*g,ti.target[b]=r[b]+(i[b]*m+f[b]*g)*.12;n[1]>.05&&(ti.eye[1]=Math.max(.05,ti.eye[1]));let y=l0[0]*i[0]+l0[2]*i[2];return ti.fov=t.fov+Math.min(3.5,Md*.55),ti.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),ti},pull(t,e){(xc===null||!(Math.abs(t.focus-xc)<40))&&(xc=t.focus);let o=1/60;xc+=(t.focus-xc)*Math.min(1,o*3.2),t.focus=xc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,yc/3))},get speed(){return Md},get resting(){return yc>2&&performance.now()-kd>2e3}};px.exports=Pk});var Sd=bt((mz,mx)=>{mx.exports=1e-6});var Ed=bt((gz,gx)=>{gx.exports=Ik;function Ik(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var yx=bt((xz,xx)=>{xx.exports=$k;function $k(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Ad=bt((yz,bx)=>{bx.exports=Fk;function Fk(t,e,o){var n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=o,n}});var zd=bt((bz,wx)=>{wx.exports=qk;function qk(t,e){var o=e[0],n=e[1],r=e[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var Td=bt((wz,_x)=>{_x.exports=Dk;function Dk(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var Ex=bt((_z,Sx)=>{Sx.exports=Hk;var Mx=Ad(),kx=zd(),Gk=Td();function Hk(t,e){var o=Mx(t[0],t[1],t[2]),n=Mx(e[0],e[1],e[2]);kx(o,o),kx(n,n);var r=Gk(o,n);return r>1?0:Math.acos(r)}});var zx=bt((Mz,Ax)=>{Ax.exports=Uk;function Uk(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Lx=bt((kz,Tx)=>{Tx.exports=Bk;function Bk(t,e,o,n){return t[0]=e,t[1]=o,t[2]=n,t}});var Rx=bt((Sz,Nx)=>{Nx.exports=jk;var Ld=Sd();function jk(t,e){var o=t[0],n=t[1],r=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=Ld*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=Ld*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=Ld*Math.max(1,Math.abs(r),Math.abs(i))}});var Ox=bt((Ez,Cx)=>{Cx.exports=Wk;function Wk(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var Ix=bt((Az,Px)=>{Px.exports=Vk;function Vk(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var Nd=bt((zz,$x)=>{$x.exports=Xk;function Xk(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var qx=bt((Tz,Fx)=>{Fx.exports=Nd()});var Rd=bt((Lz,Dx)=>{Dx.exports=Yk;function Yk(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Hx=bt((Nz,Gx)=>{Gx.exports=Rd()});var Cd=bt((Rz,Ux)=>{Ux.exports=Kk;function Kk(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var jx=bt((Cz,Bx)=>{Bx.exports=Cd()});var Vx=bt((Oz,Wx)=>{Wx.exports=Qk;function Qk(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var Yx=bt((Pz,Xx)=>{Xx.exports=Zk;function Zk(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var Qx=bt((Iz,Kx)=>{Kx.exports=Jk;function Jk(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var Jx=bt(($z,Zx)=>{Zx.exports=tS;function tS(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var ey=bt((Fz,ty)=>{ty.exports=eS;function eS(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var ny=bt((qz,oy)=>{oy.exports=oS;function oS(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var ay=bt((Dz,ry)=>{ry.exports=nS;function nS(t,e,o,n){return t[0]=e[0]+o[0]*n,t[1]=e[1]+o[1]*n,t[2]=e[2]+o[2]*n,t}});var Od=bt((Gz,sy)=>{sy.exports=rS;function rS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(o*o+n*n+r*r)}});var cy=bt((Hz,iy)=>{iy.exports=Od()});var Pd=bt((Uz,ly)=>{ly.exports=aS;function aS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return o*o+n*n+r*r}});var hy=bt((Bz,fy)=>{fy.exports=Pd()});var Id=bt((jz,uy)=>{uy.exports=sS;function sS(t){var e=t[0],o=t[1],n=t[2];return Math.sqrt(e*e+o*o+n*n)}});var py=bt((Wz,dy)=>{dy.exports=Id()});var $d=bt((Vz,vy)=>{vy.exports=iS;function iS(t){var e=t[0],o=t[1],n=t[2];return e*e+o*o+n*n}});var gy=bt((Xz,my)=>{my.exports=$d()});var yy=bt((Yz,xy)=>{xy.exports=cS;function cS(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var wy=bt((Kz,by)=>{by.exports=lS;function lS(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var My=bt((Qz,_y)=>{_y.exports=fS;function fS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=r*c-a*i,t[1]=a*s-n*c,t[2]=n*i-r*s,t}});var Sy=bt((Zz,ky)=>{ky.exports=hS;function hS(t,e,o,n){var r=e[0],a=e[1],s=e[2];return t[0]=r+n*(o[0]-r),t[1]=a+n*(o[1]-a),t[2]=s+n*(o[2]-s),t}});var Ay=bt((Jz,Ey)=>{Ey.exports=uS;function uS(t,e){e=e||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t[2]=n*e,t}});var Ty=bt((tT,zy)=>{zy.exports=dS;function dS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,t[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,t[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,t}});var Ny=bt((eT,Ly)=>{Ly.exports=pS;function pS(t,e,o){var n=e[0],r=e[1],a=e[2];return t[0]=n*o[0]+r*o[3]+a*o[6],t[1]=n*o[1]+r*o[4]+a*o[7],t[2]=n*o[2]+r*o[5]+a*o[8],t}});var Cy=bt((oT,Ry)=>{Ry.exports=vS;function vS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*n+i*a-c*r,d=f*r+c*n-s*a,h=f*a+s*r-i*n,v=-s*n-i*r-c*a;return t[0]=l*f+v*-s+d*-c-h*-i,t[1]=d*f+v*-i+h*-s-l*-c,t[2]=h*f+v*-c+l*-i-d*-s,t}});var Py=bt((nT,Oy)=>{Oy.exports=mS;function mS(t,e,o,n){var r=o[1],a=o[2],s=e[1]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=e[0],t[1]=r+s*f-i*c,t[2]=a+s*c+i*f,t}});var $y=bt((rT,Iy)=>{Iy.exports=gS;function gS(t,e,o,n){var r=o[0],a=o[2],s=e[0]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var qy=bt((aT,Fy)=>{Fy.exports=xS;function xS(t,e,o,n){var r=o[0],a=o[1],s=e[0]-r,i=e[1]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var Gy=bt((sT,Dy)=>{Dy.exports=yS;var hs=Ed()();function yS(t,e,o,n,r,a){var s,i;for(e||(e=3),o||(o=0),n?i=Math.min(n*e+o,t.length):i=t.length,s=o;s<i;s+=e)hs[0]=t[s],hs[1]=t[s+1],hs[2]=t[s+2],r(hs,hs,a),t[s]=hs[0],t[s+1]=hs[1],t[s+2]=hs[2];return t}});var Uy=bt((iT,Hy)=>{Hy.exports={EPSILON:Sd(),create:Ed(),clone:yx(),angle:Ex(),fromValues:Ad(),copy:zx(),set:Lx(),equals:Rx(),exactEquals:Ox(),add:Ix(),subtract:Nd(),sub:qx(),multiply:Rd(),mul:Hx(),divide:Cd(),div:jx(),min:Vx(),max:Yx(),floor:Qx(),ceil:Jx(),round:ey(),scale:ny(),scaleAndAdd:ay(),distance:Od(),dist:cy(),squaredDistance:Pd(),sqrDist:hy(),length:Id(),len:py(),squaredLength:$d(),sqrLen:gy(),negate:yy(),inverse:wy(),normalize:zd(),dot:Td(),cross:My(),lerp:Sy(),random:Ay(),transformMat4:Ty(),transformMat3:Ny(),transformQuat:Cy(),rotateX:Py(),rotateY:$y(),rotateZ:qy(),forEach:Gy()}});var Wy=bt((cT,jy)=>{"use strict";function By(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(n=>n(o))}}}jy.exports=function(e){let o=e.ownerDocument||document,n=By(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let d=l.call(e);d&&d.catch&&d.catch(()=>{})}catch(d){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=By(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||e).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var Qy=bt((hT,Ky)=>{"use strict";var ei=tc(),oi=Uy(),bS=Wy(),lT=Math.PI/4,fT=Math.PI/6,Vy=2,wS=1,_S=2.4,MS=2.4,kS=1e3,SS=5,ES=7,Fd=xr().C,Kl=[[7,1.6],[7,Fd.zc],[Fd.x1-2.95,Fd.zc]],us=Kl.slice(1).map((t,e)=>{let o=Kl[e],n=t[0]-o[0],r=t[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),qd=us.reduce((t,e)=>t+e.len,0);function Xy(t){let e=Math.max(0,Math.min(qd,t));for(let n of us){if(e<=n.len)return[n.a[0]+n.dir[0]*e,n.a[1]+n.dir[1]*e];e-=n.len}let o=Kl[Kl.length-1];return[o[0],o[1]]}function AS(t){let e=0;for(let n=0;n<us.length;n++){let r=us[n],a=e+r.len;if(t<a-1e-4||n===us.length-1){let s=r.dir,c=t<=e+1e-4&&n>0?us[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=us[us.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var zS=Math.PI/4,TS=7,LS=140,NS=70,Yy=(t,e,o)=>(1-t)*e+t*o,RS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;Ky.exports=function({getGridSegments:t,getGridParts:e},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[ES,Vy,Kl[0][1]],c=0,f=1,l=0,d=[.707,0,.707],h=[0,1,0],v=[0,0,0],u=.5,p=ei.identity([]),m=ei.identity([]),g=!1,y=[0,0,0],b=[0,0,0],w=1,_=!1;let M=kt=>{n[1]+=kt*zS},z=(kt,Ct,Ft)=>{if(kt=Math.max(Math.min(kt,100),-100),Ct=Math.max(Math.min(Ct,100),-100),n[0]=0,_){a=0;return}for(a+=kt;a>=Ft;)M(1),a-=Ft;for(;a<=-Ft;)M(-1),a+=Ft};bS(document.body).on("attain",kt=>{kt.on("data",Ct=>{z(Ct.dx,Ct.dy,LS)})});let R=null,B=null,D=0,K={x:0,y:0},O=58,H=document.createElement("div");H.id="museum-mobile-controls",H.innerHTML=`

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
	`,document.body.appendChild(H);let ft=H.querySelector("#museum-joystick"),It=H.querySelector("#museum-joystick-knob"),Mt=()=>{It.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},vt=kt=>{let Ct=kt.clientX-K.x,Ft=kt.clientY-K.y,ge=Math.hypot(Ct,Ft);if(ge>O&&(Ct=Ct/ge*O,Ft=Ft/ge*O),It.style.transform=`translate(
				calc(-50% + ${Ct}px),
				calc(-50% + ${Ft}px)
			)`,ge<10){s[0]=0,s[2]=0;return}let pe=Ct/O,oe=Ft/O;s[0]=0,s[2]=Math.abs(oe)>.15?oe:0},st=(kt,Ct)=>{for(let Ft=0;Ft<kt.length;Ft++)if(kt[Ft].identifier===Ct)return kt[Ft];return null},Wt=kt=>!!(kt&&kt.closest&&kt.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Se=kt=>{if(!Wt(kt.target)&&(kt.cancelable&&kt.preventDefault(),!_))for(let Ct=0;Ct<kt.changedTouches.length;Ct++){let Ft=kt.changedTouches[Ct];if(R===null&&Ft.clientX<window.innerWidth*.48){R=Ft.identifier;let ge=ft.getBoundingClientRect();K.x=ge.left+ge.width/2,K.y=ge.top+ge.height/2,vt(Ft)}else B===null&&Ft.clientX>=window.innerWidth*.48&&(B=Ft.identifier,D=Ft.clientX,a=0)}},Ne=kt=>{if(Wt(kt.target)||(kt.cancelable&&kt.preventDefault(),_))return;let Ct=R===null?null:st(kt.touches,R);Ct&&vt(Ct);let Ft=B===null?null:st(kt.touches,B);if(Ft){let ge=Ft.clientX-D;D=Ft.clientX,z(ge,0,NS)}},to=kt=>{if(!Wt(kt.target)){kt.cancelable&&kt.preventDefault();for(let Ct=0;Ct<kt.changedTouches.length;Ct++){let Ft=kt.changedTouches[Ct];Ft.identifier===R&&(R=null,Mt()),Ft.identifier===B&&(B=null)}}};document.addEventListener("touchstart",Se,{passive:!1}),document.addEventListener("touchmove",Ne,{passive:!1}),document.addEventListener("touchend",to,{passive:!1}),document.addEventListener("touchcancel",to,{passive:!1});let it=document.createElement("style");it.textContent=`

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
	`,document.head.appendChild(it);var Lt={};let wt=kt=>{if(kt.defaultPrevented||kt.ctrlKey||kt.altKey||kt.metaKey)return;let Ct=kt.type==="keydown";Lt[kt.code]=Ct,Ct&&!kt.repeat&&!_&&((kt.code==="KeyA"||kt.code==="ArrowLeft")&&M(-1),(kt.code==="KeyD"||kt.code==="ArrowRight")&&M(1)),g=!1;let Ft=Lt.KeyW||Lt.ArrowUp?1:0;s=[0,0,(Lt.KeyS||Lt.ArrowDown?1:0)-Ft],kt.preventDefault()};window.addEventListener("keydown",wt),window.addEventListener("keyup",wt);var Me=0;return{pos:i,fmouse:r,forward:d,up:h,setPaused:kt=>{_=!!kt,_&&(s[0]=0,s[2]=0,Mt())},place:(kt,Ct)=>{c=Math.max(0,Math.min(qd,kt));let Ft=Xy(c);i[0]=Ft[0],i[2]=Ft[1],n[1]=Ct,r[1]=Ct,a=0,f=1},view:()=>p,proj:()=>(ei.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:kt})=>{let Ct=kt-Me;Me=kt;let Ft=[0,0,0],ge=[];oi.set(d,Math.sin(r[1]),0,-Math.cos(r[1])),oi.set(h,0,1,0);let Pe=g?MS:_S,pe=Math.sin(n[1]),oe=-Math.cos(n[1]),ct=AS(c),te=pe*ct.ahead[0]+oe*ct.ahead[1],Ee=pe*ct.back[0]+oe*ct.back[1],le=f;Math.max(te,Ee)>.3&&(le=te>=Ee?1:-1);let Zt=_?0:-s[2]*Pe;l+=(Zt-l)*(1-Math.exp(-Math.min(Ct,.1)*5.5)),Zt===0&&Math.abs(l)<.01&&(l=0);let so=l*le*Math.min(Ct,.1);_&&(s[0]=0,s[2]=0,so=0,l=0),so!==0&&(f=Math.sign(so)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(qd,c+so));let k=Xy(c);oi.set(v,k[0]-i[0],0,k[1]-i[2]);let Be=oi.len(v);Be===0&&u!==.25&&(u=(Math.abs((u+.5)%1-.5)-.25)*.8+.25,(u+.01)%.25<.02&&(u=.25));let Ie=u;if(u+=Be/(g?SS:kS),i[1]=Vy,oi.add(i,i,v),w<1){w+=Ct/wS,w=Math.min(w,1);let no=RS(w);oi.set(i,Yy(no,y[0],b[0]),i[1],Yy(no,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(Ct,.1)*TS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),ei.identity(p),ei.rotateX(p,p,0),ei.rotateY(p,p,r[1]),ei.translate(p,p,oi.scale(Ft,i,-1))}}}});var t5=bt((uT,Jy)=>{"use strict";var{skylightGLSL:CS,Z_START:OS,Z_END:PS,GLASS_Y:IS}=Hi(),{oculusGLSL:$S,A:ni}=ka(),{windowLightGLSL:FS,C:Yh}=xr(),{doorLightGLSL:qS}=G0(),Kh=or(),Ql=Mh(),Zy=Z0(),Ta=t=>t.toFixed(4),Dd=.1,Gd=700,wc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function DS(t,e){let o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],d=e[9],h=e[10],v=e[11],u=e[12],p=e[13],m=e[14],g=e[15],y=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,z=r*f-a*c,I=l*p-d*u,R=l*m-h*u,B=l*g-v*u,D=d*m-h*p,K=d*g-v*p,O=h*g-v*m,H=y*O-b*K+w*D+_*B-M*R+z*I;return H?(H=1/H,t[0]=(i*O-c*K+f*D)*H,t[1]=(r*K-n*O-a*D)*H,t[2]=(p*z-m*M+g*_)*H,t[3]=(h*M-d*z-v*_)*H,t[4]=(c*B-s*O-f*R)*H,t[5]=(o*O-r*B+a*R)*H,t[6]=(m*w-u*z-g*b)*H,t[7]=(l*z-h*w+v*b)*H,t[8]=(s*K-i*B+f*I)*H,t[9]=(n*B-o*K-a*I)*H,t[10]=(u*M-p*w+g*y)*H,t[11]=(d*w-l*M-v*y)*H,t[12]=(i*R-s*D-c*I)*H,t[13]=(o*D-n*R+r*I)*H,t[14]=(p*b-u*_-m*y)*H,t[15]=(l*_-d*b+h*y)*H,t):null}function GS(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)t[r]=n[r];return t}var HS=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Jy.exports=(t,e)=>{let o=!!e.isPhone,n=t.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>e.post>=2?2:4,s=st=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},st||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),f=n?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:f||!0}),d=[i(),i()],h=[i(),i()],v=[i(),i()],u=[i(),i()],p=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},w=(st,Wt,Se)=>t(Object.assign({vert:HS,frag:st,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Wt,framebuffer:t.prop("out")},Se||{})),_=[2.6,0,OS-3.2,12.6,IS,PS+.4],M=[ni.x0-.2,0,ni.z0,ni.x1,ni.domeTop,ni.z1],z=[Yh.x0,0,Yh.z0,Yh.x1,7.6,Yh.z1],I=[.35,0,.35,13.65,7.6,9],R=Zy.AIR_BOX,B=st=>`vec3(${Ta(st[0])}, ${Ta(st[1])}, ${Ta(st[2])}), vec3(${Ta(st[3])}, ${Ta(st[4])}, ${Ta(st[5])})`,D=w(`
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

	${CS()}
	${$S()}
	${FS()}
	${qS()}
	${Zy.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${B(_)});
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
			vec2 t = hitBox(eye, rd, ${B(M)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Ta(ni.dome.base)} && p.x > ${Ta(ni.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${B(z)});
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
			vec2 t = hitBox(eye, rd, ${B(I)});
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
			vec2 t = hitBox(eye, rd, ${B(R)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += studioSun(p) * air(p);
				}
				float ph = phase(dot(rd, STUDIO_SUN), 0.6) + 0.04;
				sum += mix(vec3(1.0, 0.84, 0.62), vec3(0.62, 0.74, 1.0) * 1.15, night) * acc * st * ph * strength5;
			}
		}

		gl_FragColor = vec4(sum, 1.0);
	}`,{depthTex:()=>f,invVP:()=>p,eye:()=>g,time:t.context("time"),night:()=>Kh.night,strength:()=>K,strength5:()=>O}),K=[0,0,0,0],O=0;function H(){let st=wc.shafts*y.shafts,Wt=Kh.night;return K[0]=Ql.box(_)?.06*st*(1+.9*Wt):0,K[1]=Ql.box(M,!1,"court")?.1*st*(1+.9*Wt):0,K[2]=Ql.box(z)?.07*st*(1+.4*Wt):0,K[3]=Ql.box(I)?.04*st*(1-.75*Wt):0,Ql.zone==="studio"?(K[0]=K[1]=K[2]=K[3]=0,O=.03*st*(1+1.3*Wt)):O=0,K[0]+K[1]+K[2]+K[3]+O>5e-4}let ft=w(`
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
	}`,{src:t.prop("src"),dir:(st,Wt)=>[Wt.dir[0]/Wt.size[0],Wt.dir[1]/Wt.size[1]]}),It=w(`
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
	}`,{src:t.prop("src"),texel:(st,Wt)=>[.5/Wt.size[0],.5/Wt.size[1]],threshold:t.prop("threshold")}),Mt=w(`
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
		return 2.0 * ${Ta(Dd)} * ${Ta(Gd)} / (${Ta(Gd+Dd)} - z * ${Ta(Gd-Dd)});
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

		col = mix(col, fadeColor, fade);
		gl_FragColor = vec4(col, 1.0);
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>d[0],bloomA:()=>h[0],bloomB:()=>v[0],shafts:()=>u[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>wc.exposure*y.exposure,vignette:()=>Math.min(1,wc.vignette+y.vignette+.22*Kh.night),night:()=>Kh.night,grain:()=>wc.grain,bloomK:()=>wc.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>e.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),vt=t({framebuffer:()=>l});return{shot:y,look:wc,hasDepth:n,capture(st,Wt,Se){let Ne=Math.max(.4,Math.min(1,e.scale||1)),to=Math.max(2,Math.round(st.drawingBufferWidth*Ne/2)*2),it=Math.max(2,Math.round(st.drawingBufferHeight*Ne/2)*2);(l.width!==to||l.height!==it)&&l.resize(to,it);let Lt=Math.max(1,Math.ceil(to/2)),wt=Math.max(1,Math.ceil(it/2));d.forEach(Me=>Me.resize(Lt,wt)),h.forEach(Me=>Me.resize(Math.max(1,Math.ceil(to/4)),Math.max(1,Math.ceil(it/4)))),v.forEach(Me=>Me.resize(Math.max(1,Math.ceil(to/8)),Math.max(1,Math.ceil(it/8)))),u.forEach(Me=>Me.resize(Math.max(1,Math.ceil(to/a())),Math.max(1,Math.ceil(it/a())))),GS(m,Wt.proj,Wt.view),DS(p,m),g[0]=Wt.eye[0],g[1]=Wt.eye[1],g[2]=Wt.eye[2],vt(()=>{t.clear({color:[0,0,0,1],depth:1}),Se()})},present(){let st=Wt=>[Wt.width,Wt.height];n&&e.post>=1&&H()?(D({out:u[0]}),ft({out:u[1],src:u[0],dir:[1,0],size:st(u[0])}),ft({out:u[0],src:u[1],dir:[0,1],size:st(u[0])})):t.clear({color:[0,0,0,1],framebuffer:u[0]}),It({out:d[0],src:c,size:[l.width,l.height],threshold:0}),ft({out:d[1],src:d[0],dir:[1,0],size:st(d[0])}),ft({out:d[0],src:d[1],dir:[0,1],size:st(d[0])}),It({out:h[0],src:d[0],size:st(d[0]),threshold:.42}),ft({out:h[1],src:h[0],dir:[1,0],size:st(h[0])}),ft({out:h[0],src:h[1],dir:[0,1],size:st(h[0])}),It({out:v[0],src:h[0],size:st(h[0]),threshold:0}),ft({out:v[1],src:v[0],dir:[1.5,0],size:st(v[0])}),ft({out:v[0],src:v[1],dir:[0,1.5],size:st(v[0])}),Mt({out:null})}}}});var a5=bt((dT,r5)=>{"use strict";var e5=or().GLSL,US=Ps(),Hd=G0(),{C:BS,FAR_DOOR:jS}=xr(),WS=100*Math.PI/180,o5=t=>[jS.x-t[2],t[1],BS.zc-7+t[0]],n5=t=>[-t[2],t[1],t[0]];function VS(t){let e=[],o=[],n=[],r=[],a=US.createBuilder(e,o,n,r);Hd.addFrames(a,t);let s=Hd.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:n,glass:s}}r5.exports=t=>{let e=Hd.DOOR,o=["left","right"].map(l=>{let d=VS(l),h=d.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:d.position.map(v=>v.slice()),srcN:d.normal.map(v=>v.slice()),srcG:d.glass.map(v=>v.slice()),pos:t.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(d.elements),type:"uint32"}),glassCount:d.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(d.glass.length*3),outGN:new Float32Array(d.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let d of o){let h=d.sign*l,v=Math.cos(h),u=Math.sin(h),p=y=>{let b=y[0]-d.hinge,w=y[2];return[d.hinge+b*v+w*u,y[1],-b*u+w*v]},m=y=>[y[0]*v+y[2]*u,y[1],-y[0]*u+y[2]*v];d.src.forEach((y,b)=>{let w=o5(p(y));d.outP.set(w,b*3),d.outN.set(n5(m(d.srcN[b])),b*3)});let g=n5(m([0,0,1]));d.srcG.forEach((y,b)=>{d.outG.set(o5(p(y)),b*3),d.outGN.set(g,b*3)}),d.pos.subdata(d.outP),d.nrm.subdata(d.outN),d.gpos.subdata(d.outG),d.gnrm.subdata(d.outGN)}}}r(0);let a=`
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
	}`,s=t({vert:a,frag:`
		precision highp float;
		${e5}
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
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},elements:t.prop("el"),cull:{enable:!1}}),i=t({vert:a,frag:`
		precision highp float;
		${e5}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*WS);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var i5=bt((pT,s5)=>{"use strict";var XS=or().GLSL,{skylightGLSL:YS}=Hi(),{oculusGLSL:KS}=ka(),{windowLightGLSL:QS}=xr(),Va=.22;function ZS(){let t=[],e=[],o=[],n=[],s=(l,d)=>{let h=Va*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(d>0?1.06:.94),v=l*Va-Va*.12,u=d*h,p=Math.abs(d)*h*.42-.14*l*l*Va;p+=Math.sin(l*17+(d>0?0:2.1))*.012*Va*d*d;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=p*g-u*y,w=p*y+u*g;return[v,b,w+.05*Va*l*l]},i=(l,d)=>{let v=s(Math.min(1,l+.01),d),u=s(Math.max(0,l-.01),d),p=s(l,Math.min(1,d+.01)),m=s(l,Math.max(-1,d-.01)),g=[v[0]-u[0],v[1]-u[1],v[2]-u[2]],y=[p[0]-m[0],p[1]-m[1],p[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],w=Math.hypot(b[0],b[1],b[2])||1,_=b[1]<0?-1:1;return[b[0]/w*_,b[1]/w*_,b[2]/w*_]};for(let l=0;l<=18;l++){let d=l/18;for(let h=0;h<=5*2;h++){let v=h/5-1;t.push(s(d,v)),e.push(i(Math.min(.97,Math.max(.03,d)),v)),o.push([d,v])}}let c=5*2+1;for(let l=0;l<18;l++)for(let d=0;d<c-1;d++){let h=l*c+d,v=h+1,u=h+c,p=u+1;n.push([h,u,v],[v,u,p])}let f=t.length;return t.push([-Va*.12,0,-.003],[-Va*.12,0,.003],[-Va*.24,-.01,.0015],[-Va*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:n}}s5.exports=t=>{let e=ZS(),o=t({vert:`
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
		${XS}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${YS()}
		${KS()}
		${QS()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),n=or(),r=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Va*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var f5=bt((vT,l5)=>{"use strict";var{skylightGLSL:JS,Z_START:c5,Z_END:tE}=Hi(),{oculusGLSL:eE,A:_c}=ka(),{windowLightGLSL:oE,C:ri}=xr();l5.exports=(t,e)=>{let o=e.isPhone?900:2600,n=e.isPhone?350:900,r=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=ri.x0+.6,f=ri.x1-.3,l=[];for(let u=0;u<o;u++)l.push([2.5+i()*10.5,.3+i()*8,c5-3.5+i()*(tE-c5+4.5),i()]);for(let u=0;u<n;u++)l.push([_c.x0+.3+i()*(_c.x1-_c.x0-.6),.3+i()*7.5,_c.z0+.3+i()*(_c.z1-_c.z0-.6),i()]);for(let u=0;u<r;u++)l.push([c+i()*(f-c),.2+i()*5.6,ri.z0+.25+i()*(ri.z1-ri.z0-.5),i()]);let d=u=>u.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],v=t({vert:`
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

		${JS()}
		${eE()}
		${oE()}

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
				p.x = ${d(c)} + mod(p.x - ${d(c)} - gust.x * (0.55 + 0.9 * seed.w), ${d(f-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${d(ri.z0+.1)}, ${d(ri.z1-.1)});
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
			float size = sharp + blur * ${d(a)} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:u=>u.viewportHeight*.006,focus:(u,p)=>p&&p.focus||6,aperture:(u,p)=>p&&p.aperture||0,wake0:(u,p)=>(p&&p.wake||h)[0],wake1:(u,p)=>(p&&p.wake||h)[1],wake2:(u,p)=>(p&&p.wake||h)[2],wake3:(u,p)=>(p&&p.wake||h)[3],wakeDir:(u,p)=>p&&p.wakeDir||[0,0,1],gust:(u,p)=>p&&p.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return u=>v(u||{})}});var m5=bt((mT,v5)=>{"use strict";var{C:p5}=xr(),h5=or(),u5=15.3,nE=37.1,d5=p5.z1+.9,rE=p5.z1+.7+16-.6;v5.exports=(t,e)=>{let o=e.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([u5+r()*(nE-u5),l,d5+r()*(rE-d5),r()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>h5.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){h5.night>.01&&c()}}});var Jh=bt((gT,da)=>{"use strict";var g5=or(),f0=V0(),aE=tc(),ps=Math.PI,we=t=>(+t).toFixed(4),Xa=t=>`vec3(${we(t[0])}, ${we(t[1])}, ${we(t[2])})`,Zo={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Lo=-.55,Qn=-2,vn=42.25,Fn=43.65,Ra=45.35,Dr=46.75,sr=2.75,ha=.12,sE=(Lo+Qn)/2,Go={x:-1.3,y:1.42,w:.42,h:.52,z:Fn,cell:.026},Ye={x0:-1.85,x1:-.75,top:.98,z0:Fn-.3,z1:Fn-.02},La={x0:-1.44,x1:-1.16,y0:Ye.top-.002,y1:Ye.top+.018},ua={cx:-1.3,cz:Fn-.165,w:.2,d:.255,y:Ye.top+.0012},mr={x:-1.03,z:Fn-.14,r:.042,h:.075},on={x:-.86,z:Fn-.12,h:.085,r:.019};on.flame=[on.x,Ye.top+.012+on.h+.028,on.z];var Zh={a:[mr.x-.004,Ye.top+.03,mr.z+.004],b:[mr.x-.13,Ye.top+.34,mr.z-.12]},mn=[-1.5,2.42,44.66],$n=[-1.78,1.95,vn+.09],Na={x:-1.32,z:44.08,y:.64,heading:.32},b5={window:{eye:[-1.3,1.33,42.8],target:[Go.x,1.37,Fn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[ua.cx,Ye.top,ua.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},zr={z0:(vn+Fn)/2+.03,z1:(vn+Fn)/2+.56,y0:.98,y1:1.78,x:Lo+.03,cell:.047};b5.peek={eye:[-1.2,1.42,42.95],target:[f0.PLAY.stoolX-f0.OFF[0],.85,f0.PLAY.keyFront+.2],fov:30};var ds={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function x5(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${we(Go.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Xa(mn)};
		if (d.z > -0.001) return 0.0;
		float t = (${we(Go.z)} - ${we(mn[2])}) / d.z;
		vec2 g = (${Xa(mn)} + d * t).xy - vec2(${we(Go.x)}, ${we(Go.y)});
		float inWin = (1.0 - smoothstep(${we(Go.w/2-.01)}, ${we(Go.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${we(Go.h/2-.01)}, ${we(Go.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${we(Go.z)}) / abs(${we(Go.z)} - ${we(mn[2])}) / ${we(Go.cell)};
		vec2 qc = fract(g / ${we(Go.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Xa(on.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${we(mr.x)}, ${we(mr.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${we(mr.x)}, ${we(mr.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${we(mr.r*.7)}, ${we(mr.r*1.6)}, r)) * (1.0 - smoothstep(${we(Ye.top+mr.h*.8)}, ${we(Ye.top+mr.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Xa(Zh.a)}, qb = ${Xa(Zh.b)};
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
		bool inB1 = p.z < ${we(Fn)} && p.z > ${we(vn-.04)} && p.x < ${we(Lo+.02)};
		bool inPriest = p.z >= ${we(Fn)} && p.z < ${we(Ra)} && p.x < ${we(Lo)};
		bool inB2 = p.z >= ${we(Ra)} && p.z < ${we(Dr+.04)} && p.x < ${we(Lo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${we(Qn)}, ${we(Lo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${we(Zo.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Xa(f0.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Xa(mn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Xa($n)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Xa(on.flame)} - p;
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
	}`}var Kn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function w5(){let t=[],e=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(f,l,d,h)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(d),n.push(h?h[0]:0,h?h[1]:0),t.length/3-1),c.quad=(f,l,d,h,v,u)=>{let p=i(s(a(l,f),a(h,f)));u=u||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,p,v,u[0]),g=c.v(l,p,v,u[1]),y=c.v(d,p,v,u[2]),b=c.v(h,p,v,u[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,d,h,v,u,p)=>{let m=(g,y,b,w,_,M,z,I)=>c.quad(g,y,b,w,p,[[_,z],[M,z],[M,I],[_,I]]);m([h,l,d],[h,l,u],[h,v,u],[h,v,d],d,u,l,v),m([f,l,u],[f,l,d],[f,v,d],[f,v,u],u,d,l,v),m([f,v,d],[h,v,d],[h,v,u],[f,v,u],f,h,d,u),m([f,l,u],[h,l,u],[h,l,d],[f,l,d],f,h,u,d),m([f,l,u],[h,l,u],[h,v,u],[f,v,u],f,h,l,v),m([h,l,d],[f,l,d],[f,v,d],[h,v,d],h,f,l,v)},c.tube=(f,l,d,h)=>{h=h||6;let v=t.length/3;for(let u=0;u<f.length;u++){let p=f[Math.max(0,u-1)],m=f[Math.min(f.length-1,u+1)],g=i(a(m,p)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=i(s(g,y)),w=s(b,g),_=typeof l=="function"?l(u/(f.length-1)):l;for(let M=0;M<=h;M++){let z=M/h*ps*2,I=Math.cos(z),R=Math.sin(z),B=[b[0]*I+w[0]*R,b[1]*I+w[1]*R,b[2]*I+w[2]*R];c.v([f[u][0]+B[0]*_,f[u][1]+B[1]*_,f[u][2]+B[2]*_],B,d,[u/(f.length-1),M/h])}}for(let u=0;u<f.length-1;u++)for(let p=0;p<h;p++){let m=v+u*(h+1)+p,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,d,h,v)=>{v=v||20;let u=t.length/3;for(let p=0;p<d.length;p++){let[m,g]=d[p],y=d[Math.max(0,p-1)],b=d[Math.min(d.length-1,p+1)],w=b[0]-y[0],_=b[1]-y[1];for(let M=0;M<=v;M++){let z=M/v*ps*2,I=Math.cos(z),R=Math.sin(z),B=i([_*I,-w,_*R]);c.v([f+I*m,g,l+R*m],B,h,[M/v,p/(d.length-1)])}}for(let p=0;p<d.length-1;p++)for(let m=0;m<v;m++){let g=u+p*(v+1)+m,y=g+v+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,d,h,v,u)=>{let p=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=p[m],y=p[(m+1)%4],b=[f+g[0],d,l+g[1]],w=[f+y[0],d,l+y[1]],_=[f,v,l],M=i(s(a(_,b),a(w,b))),z=c.v(b,M,u,[0,0]),I=c.v(w,M,u,[1,0]),R=c.v(_,M,u,[.5,1]);r.push(z,R,I)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,d,h]=[r[f],r[f+1],r[f+2]],v=m=>[t[m*3],t[m*3+1],t[m*3+2]],u=s(a(v(d),v(l)),a(v(h),v(l))),p=[0,1,2].map(m=>e[l*3+m]+e[d*3+m]+e[h*3+m]);u[0]*p[0]+u[1]*p[1]+u[2]*p[2]<0&&(r[f+1]=h,r[f+2]=d)}return c},c}function Qh(t,e,o,n){if(t<=e)return o;let r=t-e;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var un={ys:1.78,a:.56,r:.78};un.apex=un.ys+Math.sqrt(un.r*un.r-(un.r-un.a)*(un.r-un.a));function iE(){let t=w5(),e=Kn.WOOD,o=Kn.CARVED,n=Kn.DARKWOOD,r=.06;t.box(Qn,0,vn,Lo+.08,ha,Dr,n),t.box(Qn,sr-.06,vn-.04,Lo+.1,sr,Dr+.04,e),t.box(Lo,sr-.2,vn-.06,Lo+.12,sr-.06,Dr+.06,e),t.box(Lo+.02,sr,vn-.08,Lo+.14,sr+.07,Dr+.08,n),t.box(Qn,ha,vn,Qn+.04,sr-.06,Dr,e);for(let[l,d,h]of[[vn-r,vn,-1],[Dr,Dr+r,1]]){t.box(Qn,0,l,Lo+.08,sr,d,e);let v=h<0?l-.018:d;t.box(Qn+.18,.45,Math.min(v,v+.018),Lo-.12,2.35,Math.max(v,v+.018),n),t.box(Qn+.26,.55,Math.min(v,v+.03*h),Lo-.2,2.25,Math.max(v,v+.03*h),e)}{let l=Fn-.02,d=Fn+.02,h=Go.x-Go.w/2,v=Go.x+Go.w/2,u=Go.y-Go.h/2,p=Go.y+Go.h/2;t.box(Qn,ha,l,Lo,La.y0,d,e),t.box(Qn,La.y0,l,La.x0,La.y1,d,e),t.box(La.x1,La.y0,l,Lo,La.y1,d,e),t.box(Qn,La.y1,l,Lo,u,d,e),t.box(Qn,u,l,h,p,d,e),t.box(v,u,l,Lo,p,d,e),t.box(Qn,p,l,Lo,sr-.06,d,e);let m=.05,g=l-.025;t.box(h-m,u-m,g,v+m,u,l,n),t.box(h-m,p,g,v+m,p+m,l,n),t.box(h-m,u,g,h,p,l,n),t.box(v,u,g,v+m,p,l,n),t.box(h-m-.02,p+m,g-.015,v+m+.02,p+m+.03,l,e),t.box(La.x0-.01,La.y1,l-.006,La.x1+.01,La.y1+.008,l,Kn.BRASS)}{let l=zr,d=Lo+.008,h=Lo+.052;t.box(d,l.y0,l.z0-.035,h,l.y1,l.z0,n),t.box(d,l.y0,l.z0,h,l.y0+.04,l.z1,n),t.box(d,l.y1-.04,l.z0,h,l.y1,l.z1,n),t.box(d+.008,ha,l.z0-.035,h-.008,l.y0,l.z1,e),t.box(h-.008,ha+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),t.box(d-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,Kn.BRASS)}t.box(Qn,ha,Ra-.02,Lo,sr-.06,Ra+.02,e),t.box(Ye.x0,Ye.top-.035,Ye.z0,Ye.x1,Ye.top,Ye.z1,e),t.tube([[Ye.x0,Ye.top-.018,Ye.z0],[Ye.x1,Ye.top-.018,Ye.z0]],.02,e,8);for(let l of[Ye.x0+.1,Ye.x1-.1]){let d=[];for(let h=0;h<=8;h++){let v=h/8;d.push([l,Ye.top-.04-.22*v,Ye.z1-.02-.22*Math.cos(v*ps/2)])}t.tube(d,.018,n,6)}t.box(Qn+.06,.12,vn,Lo-.1,.44,vn+.42,n),t.box(Qn+.08,.44,vn+.01,Lo-.12,.52,vn+.41,Kn.CUSHION),t.box(Qn+.06,.12,Dr-.42,Lo-.1,.44,Dr,n),t.box($n[0]-.05,$n[1]-.16,vn,$n[0]+.05,$n[1]-.02,vn+.012,Kn.BRASS),t.tube([[$n[0],$n[1]-.09,vn+.012],[$n[0],$n[1]-.09,$n[2]-.01],[$n[0],$n[1]-.05,$n[2]]],.006,Kn.BRASS,6),t.lathe($n[0],$n[2],[[0,$n[1]-.05],[.028,$n[1]-.035],[.034,$n[1]+.01],[.024,$n[1]+.06],[.026,$n[1]+.065]],Kn.LAMPGLASS,16),t.box(Na.x-.22,.12,Na.z-.24,Na.x+.22,Na.y-.05,Na.z+.16,n),t.box(Na.x-.24,Na.y-.05,Na.z-.26,Na.x+.24,Na.y,Na.z+.18,Kn.CUSHION),t.tube([[mn[0],sr-.06,mn[2]],[mn[0],mn[1]+.07,mn[2]]],.005,Kn.BRASS,5),t.lathe(mn[0],mn[2],[[0,mn[1]+.09],[.03,mn[1]+.08],[.02,mn[1]+.06]],Kn.BRASS,12),t.lathe(mn[0],mn[2],[[0,mn[1]-.06],[.035,mn[1]-.04],[.045,mn[1]],[.035,mn[1]+.05],[.018,mn[1]+.07]],Kn.LAMPGLASS,16);let a=Lo,s=Lo+r;function i(l,d,h){let v=(l+d)/2,u=40,p=[];for(let g=0;g<=u;g++)p.push(ha+(sr-.2-ha)*g/u);let m=[];p.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(un.ys+(un.apex-un.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let w=h?Qh(y,un.ys,un.a,un.r):0,_=h?Qh(b,un.ys,un.a,un.r):0,M=(z,I)=>[z,I];t.quad([s,y,v-w],[s,y,l],[s,b,l],[s,b,v-_],e,[M(v-w,y),M(l,y),M(l,b),M(v-_,b)]),t.quad([s,y,d],[s,y,v+w],[s,b,v+_],[s,b,d],e,[M(d,y),M(v+w,y),M(v+_,b),M(d,b)]),(w>0||_>0)&&(t.quad([a,y,v-w],[s,y,v-w],[s,b,v-_],[a,b,v-_],n),t.quad([s,y,v+w],[a,y,v+w],[a,b,v+_],[s,b,v+_],n),t.quad([a,y,l],[a,y,v-w],[a,b,v-_],[a,b,l],e),t.quad([a,y,v+w],[a,y,d],[a,b,d],[a,b,v+_],e))}if(t.box(a,sr-.2,l,s,sr-.06,d,e),t.box(s,sr-.42,l+.05,s+.012,sr-.24,d-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,w=b<.5?ha+(un.apex-ha)*(b*2):un.apex-(un.apex-ha)*((b-.5)*2),_=b<.5?-1:1;g.push([s+.01,Math.min(w,un.apex-.002),v+_*(Qh(w,un.ys,un.a,un.r)+.03)])}t.tube(g,.022,n,6)}}i(vn,Fn,!0),i(Ra,Dr,!0);{let l=Fn,d=Ra,h=(l+d)/2;t.box(a,ha,l,s,sr-.06,d,e);let v={ys:1.85,a:.55,r:.8},u=[];for(let p=0;p<=40;p++){let m=p/40,g=v.ys+Math.sqrt(v.r*v.r-(v.r-v.a)*(v.r-v.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;u.push([s+.012,Math.min(y,g-.002),h+b*Qh(y,v.ys,v.a,v.r)])}u.push(u[0]),t.tube(u,.02,n,6),t.box(s,.95,h-.22,s+.015,1.3,h+.22,o),t.box(s,.35,h-.42,s+.01,.75,h+.42,n),t.tube([[s+.03,1.12,d-.13],[s+.06,1.12,d-.13],[s+.06,1.12,d-.2]],.009,Kn.BRASS,6)}[vn-.02,Fn,Ra,Dr+.02].forEach((l,d)=>{let h=d===1||d===2,v=.075,u=sr+(h?.62:.4);t.box(Lo+.06,0,l-v,Lo+.06+2*v,u,l+v,e),t.box(Lo+.04,u-.04,l-v-.02,Lo+.08+2*v,u,l+v+.02,n);let p=Lo+.06+v,m=h?.62:.5;t.spire(p,l,u,v*.95,u+m,e);for(let g=1;g<=3;g++){let y=u+m*g/4.2,b=v*.95*(1-g/4.2)+.02;for(let[w,_]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[p+w*(b-.02),y-.02,l+_*(b-.02)],[p+w*(b+.015),y+.03,l+_*(b+.015)]],.008,n,4)}t.lathe(p,l,[[0,u+m-.02],[.03,u+m+.03],[.022,u+m+.07],[0,u+m+.1]],e,10)});let f=(l,d,h)=>{let v=(l+d)/2,u=Lo+.075,p=sr+.07,m=p+h,g=[1,0,0],y=t.v([u,p,l],g,o,[l,p]),b=t.v([u,p,d],g,o,[d,p]),w=t.v([u,m,v],g,o,[v,m]);t.idx.push(y,b,w);let _=t.v([u-.04,p,l],[-1,0,0],e),M=t.v([u-.04,p,d],[-1,0,0],e),z=t.v([u-.04,m,v],[-1,0,0],e);t.idx.push(_,z,M);let I=[],R=[];for(let O=0;O<=10;O++){let H=O/10;I.push([u+.02,p+h*H,l+(v-l)*H]),R.push([u+.02,p+h*H,d+(v-d)*H])}t.tube(I,.022,n,6),t.tube(R,.022,n,6);for(let O=2;O<=8;O+=2)for(let H of[I[O],R[O]])t.tube([H,[H[0]+.01,H[1]+.06,H[2]+(H===I[O]?-.02:.02)]],.01,n,4);t.lathe(u,v,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([O,H])=>[O,H]),e,10);let B=Math.min(.17,h*.32),D=p+h*.38,K=[];for(let O=0;O<=24;O++){let H=O/24*ps*2;K.push([u+.012,D+Math.sin(H)*B,v+Math.cos(H)*B])}t.tube(K,.012,n,5)};f(vn-.02,Fn,.52),f(Fn,Ra,.82),f(Ra,Dr+.02,.52),t.lathe(mr.x,mr.z,[[0,Ye.top],[.036,Ye.top+.001],[mr.r,Ye.top+.012],[mr.r*1.02,Ye.top+.035],[.036,Ye.top+.052],[.02,Ye.top+.062],[.016,Ye.top+.068]],Kn.INKGLASS,24),t.lathe(mr.x,mr.z,[[.016,Ye.top+.064],[.021,Ye.top+.066],[.022,Ye.top+.075],[.016,Ye.top+.076],[0,Ye.top+.072]],Kn.BRASS,20);{let l=Zh.a,d=Zh.b,h=26,v=y=>{let b=Math.sin(y*ps)*.025;return[l[0]+(d[0]-l[0])*y+b*.6,l[1]+(d[1]-l[1])*y+b*.4,l[2]+(d[2]-l[2])*y+b]},u=[];for(let y=0;y<=h;y++)u.push(v(y/h));t.tube(u,y=>.0028*(1-.7*y)+6e-4,Kn.QUILL,5);let p=t.norm(t.sub(d,l)),m=t.norm(t.cross(p,[.2,1,.1])),g=t.cross(m,p);for(let y of[-1,1]){let b=t.pos.length/3;for(let w=0;w<=h;w++){let _=w/h,M=v(_),z=_<.28?0:(y>0?.03:.02)*Math.sin(ps*Math.pow((_-.28)/.72,.75)),I=z*.25,R=[M[0]+m[0]*y*z-g[0]*I,M[1]+m[1]*y*z-g[1]*I,M[2]+m[2]*y*z-g[2]*I];t.v(M,g,Kn.QUILL,[_,0]),t.v(R,g,Kn.QUILL,[_,y])}for(let w=0;w<h;w++){let _=b+w*2;t.idx.push(_,_+2,_+1,_+1,_+2,_+3)}}}return t.orient()}function cE(t,e){let n=Zo.top,r=Zo.x0;t(r-.35,0,Zo.z0-.35,r,n+.35,Zo.z1+.35),t(r,0,Zo.z0-.35,-.35,n,Zo.z0),t(r,0,Zo.z1,-.35,n,Zo.z1+.35),t(r,n,Zo.z0,-.35,n+.35,Zo.z1),t(.35,0,Zo.z0-.42,.35+.16,n,Zo.z0),t(.35,0,Zo.z1,.35+.16,n,Zo.z1+.42),t(.35,n,Zo.z0-.5,.35+.18,n+.42,Zo.z1+.5),t(.35,n+.42,Zo.z0-.6,.35+.26,n+.52,Zo.z1+.6),t(.35,0,Zo.z0-.5,.35+.22,.42,Zo.z0),t(.35,0,Zo.z1,.35+.22,.42,Zo.z1+.5),t(-.35-.01,0,Zo.z0,.35+.12,.02,Zo.z1),e(r,Zo.z0,-.35,Zo.z1)}da.exports=t=>{let e=B0(),o=g5.GLSL,n=iE(),r=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${f0.roomGLSL()}
	${x5()}
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
	}`,s=t({vert:a,frag:`${r}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(Mt,vt,st,Wt){let Se=[],Ne=[],to=[],it=[],Lt=[],kt=Lo-.02,Ct=un.apex+.08,Ft=ha+.015;for(let ge=0;ge<=40;ge++){let Pe=ge/40,pe=Ct+(Ft-Ct)*Pe;for(let oe=0;oe<=90;oe++){let ct=oe/90,te=st?.2+.13*Pe*Pe:vt-Mt,Ee=Mt+ct*te,le=st?.05+.02*Pe:.035+.01*Math.sin(ct*7),Zt=ct*Wt*ps*2+Math.sin(Pe*2+ct*5)*.6,so=kt-le*(.5+.5*Math.sin(Zt))-(st?.02*Pe:0),Be=[1,0,-(-le*.5*Math.cos(Zt)*Wt*ps*2/te)],Ie=Math.hypot(Be[0],Be[1],Be[2]);Se.push(so,pe,Ee),Ne.push(Be[0]/Ie,0,Be[2]/Ie),to.push(2),it.push(Math.sin(Zt),Pe)}}for(let ge=0;ge<40;ge++)for(let Pe=0;Pe<90;Pe++){let pe=ge*91+Pe,oe=pe+90+1;Lt.push(pe,oe,pe+1,pe+1,oe,oe+1)}for(let ge=0;ge<Lt.length;ge+=3){let[Pe,pe,oe]=[Lt[ge],Lt[ge+1],Lt[ge+2]],ct=Zt=>[Se[Zt*3],Se[Zt*3+1],Se[Zt*3+2]],te=[0,1,2].map(Zt=>ct(pe)[Zt]-ct(Pe)[Zt]),Ee=[0,1,2].map(Zt=>ct(oe)[Zt]-ct(Pe)[Zt]);te[1]*Ee[2]-te[2]*Ee[1]<0&&(Lt[ge+1]=oe,Lt[ge+2]=pe)}return{pos:Se,nrm:Ne,kind:to,uv:it,idx:Lt}}let c=i(vn+.02,vn+.4,!0,6),f=i(Ra+.04,Dr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(Mt=>Mt+c.pos.length/3))},d=t({vert:`
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),h=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${we(Go.x)} + corner.x * ${we(Go.w/2)}, ${we(Go.y)} + corner.y * ${we(Go.h/2)}, ${we(Go.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${we(Go.x)}, ${we(Go.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${we(Go.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),v=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${we(zr.x)}, ${we((zr.y0+zr.y1)/2)} + corner.y * ${we((zr.y1-zr.y0)/2-.04)}, ${we((zr.z0+zr.z1)/2)} + corner.x * ${we((zr.z1-zr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${we((zr.z0+zr.z1)/2)}, ${we((zr.y0+zr.y1)/2)})) * ${we(Go.cell/zr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${we(zr.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),u=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${we(Go.x)} + corner.x * 0.75, ${we(Go.y)} + corner.y * 0.9, ${we(Ra-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),p=14,m=[];for(let Mt=0;Mt<p;Mt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(vt=>m.push(vt[0],vt[1],(Mt+.5)/p));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${we(sE)} + c.x * ${we((Lo-Qn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${we(Fn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${x5().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Xa(mn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let Mt=document.createElement("canvas");Mt.width=512,Mt.height=652;let vt=Mt.getContext("2d");vt.fillStyle="#cdb38a",vt.fillRect(0,0,Mt.width,Mt.height);let st=7,Wt=()=>(st=st*1664525+1013904223>>>0,st/4294967296);for(let Ne=0;Ne<2400;Ne++){vt.fillStyle=`rgba(${Wt()<.5?"90,62,30":"245,230,200"},${.03+Wt()*.05})`;let to=Wt()*Mt.width,it=Wt()*Mt.height;vt.fillRect(to,it,1+Wt()*14,1)}for(let Ne=0;Ne<26;Ne++){let to=Wt()*Mt.width,it=Wt()*Mt.height,Lt=20+Wt()*90,wt=vt.createRadialGradient(to,it,0,to,it,Lt);wt.addColorStop(0,`rgba(120,80,35,${.04+Wt()*.06})`),wt.addColorStop(1,"rgba(120,80,35,0)"),vt.fillStyle=wt,vt.fillRect(to-Lt,it-Lt,Lt*2,Lt*2)}let Se=vt.createRadialGradient(Mt.width/2,Mt.height/2,Mt.width*.3,Mt.width/2,Mt.height/2,Mt.height*.72);return Se.addColorStop(0,"rgba(110,70,30,0)"),Se.addColorStop(1,"rgba(110,70,30,0.38)"),vt.fillStyle=Se,vt.fillRect(0,0,Mt.width,Mt.height),Mt})(),b=y?t.texture({data:y,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),_=[18,24],M=[],z=[];for(let Mt=0;Mt<=_[1];Mt++)for(let vt=0;vt<=_[0];vt++)M.push(vt/_[0],Mt/_[1]);for(let Mt=0;Mt<_[1];Mt++)for(let vt=0;vt<_[0];vt++){let st=Mt*(_[0]+1)+vt,Wt=st+_[0]+1;z.push(st,st+1,Wt,st+1,Wt+1,Wt)}let I=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${we(ua.cx+ua.w/2)} - s * ${we(ua.w)};
			float zNear = ${we(ua.cz-ua.d/2)};
			vec3 p = vec3(x, ${we(ua.y)}, zNear + t * ${we(ua.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${we(ua.d)};
				float zf = zNear + 0.5 * ${we(ua.d)};
				p.z = zf - dd * cos(a);
				p.y = ${we(ua.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${we(Fn+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(M),size:2}},elements:z,uniforms:{fold:()=>ds.fold,slide:()=>ds.slide,paperTex:b,inkTex:w},cull:{enable:!1}}),R=w5();R.lathe(on.x,on.z,[[0,Ye.top],[.048,Ye.top+.002],[.052,Ye.top+.012],[.046,Ye.top+.014],[.022,Ye.top+.012],[0,Ye.top+.012]],Kn.BRASS,24),R.lathe(on.x,on.z,[[0,Ye.top+.012],[on.r,Ye.top+.012],[on.r*1.02,Ye.top+.012+on.h*.6],[on.r,Ye.top+.012+on.h],[on.r*.75,Ye.top+.012+on.h-.004],[0,Ye.top+.012+on.h-.008]],9,20),R.tube([[on.x,Ye.top+.012+on.h-.008,on.z],[on.x+.001,Ye.top+.012+on.h+.012,on.z]],.0012,8,4),R.orient();let B=t({vert:a,frag:`${r}
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
				float up = smoothstep(${we(Ye.top+on.h*.4)}, ${we(Ye.top+.012+on.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:R.pos,normal:R.nrm,kind:R.kind,uv:R.uv},elements:R.idx}),D=t({vert:`
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
			vec3 p = ${Xa(on.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),K=[0,0],O=t({uniforms:{view:t.prop("view")}}),H=new Float32Array(16);function ft(Mt){aE.translate(H,Mt.view,f0.OFF),O({view:H},()=>It(Mt))}function It(Mt){let vt=Mt&&Mt.reflected;if(s(),d(),h(),v(),ds.ink&&ds.inkDirty){let st=ds.ink;K[0]!==st.width||K[1]!==st.height?(w({data:st,min:"linear",mag:"linear",flipY:!1}),K=[st.width,st.height]):w.subimage(st),ds.inkDirty=!1}ds.shown&&I(),g5.night>.01&&(B(),vt||(D({halo:1}),D({halo:0}))),vt||(u(),g())}return ft};da.exports.addBay=cE;da.exports.BAY=Zo;da.exports.OFF=f0.OFF;da.exports.STATE=ds;var y5=t=>[t[0]+f0.OFF[0],t[1]+f0.OFF[1],t[2]+f0.OFF[2]];da.exports.SHOTS=Object.fromEntries(Object.entries(b5).map(([t,e])=>[t,Object.assign({},e,{eye:y5(e.eye),target:y5(e.target)})]));da.exports.SEAT=Na;da.exports.LAMP=mn;da.exports.SCONCE=$n;da.exports.GRILLE=Go;da.exports.PAPER=ua;da.exports.ZONE={FRONT:Lo,BACK:Qn,ZA:vn,ZB:Fn,ZC:Ra,ZD:Dr}});var Ud=bt((xT,M5)=>{"use strict";function lE(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var _5={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},fE=["th","ng","er"];function hE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=t.getContext("2d"),r={};Object.keys(_5).forEach(p=>{r[p]=_5[p]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(p,m){let g=lE(o.seed),y=o.xh,b={},w=H=>{let ft=e[H];if(!ft)return null;let It=Math.floor(g()*ft.length);return ft.length>1&&It===b[H]&&(It=(It+1)%ft.length),b[H]=It,ft[It]},_=H=>{if(e[H])return{g:w(H),sc:1};let ft=H.toLowerCase();return e[ft]?{g:w(ft),sc:/[A-Z]/.test(H)?1.32:1}:null},M=[],z=.15,I=0,R=0,B=(g()-.5)*.02,D=m/y,K=p.split(/\n\s*\n/);K.forEach((H,ft)=>{H.replace(/\s+/g," ").trim().split(" ").forEach(Mt=>{let vt=[];for(let Ne=0;Ne<Mt.length;Ne++){let to=Mt.substr(Ne,2).toLowerCase();if(fE.indexOf(to)>=0&&e[to]&&g()<.55&&Mt[Ne]===Mt[Ne].toLowerCase()){vt.push({ch:to,gl:{g:w(to),sc:1}}),Ne++;continue}let it=_(Mt[Ne]);it&&it.g&&vt.push({ch:Mt[Ne],gl:it})}let st=vt.map(()=>.17+g()*.07),Wt=vt.reduce((Ne,to,it)=>Ne+to.gl.g.w*to.gl.sc+st[it],0);I>0&&I+Wt>D&&(I=0,R++,z+=r.line,B=(g()-.5)*.02),vt.forEach((Ne,to)=>{let it=Ne.gl.g,Lt=Ne.gl.sc*(.95+g()*.1),wt=(g()-.5)*.06,Me=(g()-.5)*.08+B*I,kt=I,Ct=R*o.lineHeight+1.9+Me,Ft=Math.cos(wt),ge=Math.sin(wt),Pe=oe=>[(kt+(oe[0]*Ft-oe[1]*ge)*Lt)*y,(Ct+(oe[0]*ge+oe[1]*Ft)*Lt)*y],pe=(oe,ct)=>{let te=0;for(let le=1;le<oe.length;le++)te+=Math.hypot(oe[le][0]-oe[le-1][0],oe[le][1]-oe[le-1][1]);let Ee=Math.max(o.minDur||(ct?.06:.07),te/(o.speed*y));M.push({pts:oe,L:te,start:z,dur:Ee,dot:ct}),z+=Ee};if(it.s.forEach((oe,ct)=>{ct>0&&(z+=r.stroke),pe(oe.map(Pe),!1)}),it.dot){let oe=it.s[0][0];it.s.forEach(te=>te.forEach(Ee=>{Ee[1]<oe[1]&&(oe=Ee)}));let ct=Pe([oe[0]+.1,-1.36]);z+=r.stroke*1.4,pe([ct,[ct[0]+y*.05,ct[1]+y*.03]],!0)}z+=r.letter*(.6+g()*.8),I+=it.w*Lt+st[to]});let Se=Mt[Mt.length-1];z+=/[.!?]/.test(Se)?r.stop:/[,;:]/.test(Se)?r.comma:r.word,I+=.55+g()*.2}),ft<K.length-1&&(I=0,R+=1.6,z+=r.para)});let O=(R+1)*o.lineHeight*y+y*1.55;return{strokes:M,total:z,height:O}}function d(p,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(p*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=p+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,p,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;function v(p,m){let g=f[p.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let w=1;w<p.pts.length;w++){let _=p.pts[w-1],M=p.pts[w],z=Math.hypot(M[0]-_[0],M[1]-_[1]),I=b,R=b+z;if(b=R,R<=g||z===0)continue;if(I>=m)break;let B=Math.max(0,(g-I)/z),D=Math.min(1,(m-I)/z),K=[_[0]+(M[0]-_[0])*B,_[1]+(M[1]-_[1])*B],O=[_[0]+(M[0]-_[0])*D,_[1]+(M[1]-_[1])*D],H=(I+R)/2/(p.L||1),ft=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,H)));n.lineWidth=y*ft,n.globalAlpha=.86+.14*ft,n.beginPath(),n.moveTo(K[0],K[1]),n.lineTo(O[0],O[1]),n.stroke()}p.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(p.pts[0][0],p.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[p.i]=m}function u(p){let m=(p-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);v(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(u):o.onDone&&o.onDone()}return{write(p,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,y=l(p,g);a=y.strokes,s=y.total;let b=typeof o.maxTime=="function"?o.maxTime(p):o.maxTime;if(b&&s>b){let _=b/s;a.forEach(M=>{M.start*=_,M.dur*=_}),s=b}a.forEach((_,M)=>{_.i=M}),f=[],d(g,y.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(_=>v(_,_.L));return}return c=performance.now(),i=requestAnimationFrame(u),s},finish(){cancelAnimationFrame(i),a.forEach(p=>v(p,p.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}M5.exports=hE});var jd=bt((yT,k5)=>{"use strict";var Bd=or(),uE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',dE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';k5.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let n=()=>{let r=Bd.isNight;o.innerHTML=r?uE:dE,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Bd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Bd.toggle()}),o}});var z5=bt((bT,A5)=>{"use strict";var qn=Jh(),pE=V0(),vE=Ud(),mE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",S5=100,L0=t=>Math.max(0,Math.min(1,t)),Jr=(t,e,o)=>{let n=L0((o-t)/(e-t));return n*n*(3-2*n)},Ya=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Ca=(t,e,o)=>t+(e-t)*o,Jl=(t,e,o)=>[Ca(t[0],e[0],o),Ca(t[1],e[1],o),Ca(t[2],e[2],o)];function ai(t,e){let o=t.length-1,n=L0(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var t1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function Wd(t,e,o){return{eye:Jl(t.eye,e.eye,o),target:Jl(t.target,e.target,o),fov:Ca(t.fov,e.fov,o),roll:Ca(t.roll||0,e.roll||0,o)}}var tf=pE.PLAY,Ka=[tf.stoolX,1,tf.keyFront+.25],e1=[tf.stoolX,tf.keyTop+.03,tf.keyFront-.05],Xd=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[Ka[0]+Math.cos(e)*o,1.15+.4*t,Ka[2]+Math.sin(e)*o]},Mc=[{eye:Xd(1),target:[Ka[0],.92,Ka[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:e1},{eye:[Ka[0]+1,1.14,Ka[2]+1.72],target:[e1[0]+.05,.8,e1[2]+.05],fov:40,aperture:1,to:e1}],E5=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),o1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:E5(t.eye,t.to||Ka),aperture:t.aperture,vignette:.42,shafts:0}),Vd={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},kc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Zl={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},gE=`
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
`;A5.exports=function(e){let{root:o,avatar:n}=e,r=document.createElement("style");r.textContent=gE,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),d=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let ct=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(S5-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>S5&&ct&&(i.value=ct[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(ct=>i.addEventListener(ct,te=>te.stopPropagation())),a.addEventListener("pointerdown",ct=>ct.stopPropagation()),a.addEventListener("click",ct=>{let te=ct.target.closest("button");te&&(ct.stopPropagation(),te.dataset.act==="send"&&ft(),te.dataset.act==="leave"&&vt())});let u=!1,p="",m=0,g=null,y=null,b="",w=null,_=0,M="",z=document.createElement("canvas");z.width=512,z.height=652;function I(ct){ct!==M&&(M=ct,s.classList.toggle("on",ct==="write"),f.classList.toggle("on",ct==="hint"),l.classList.toggle("on",u&&ct==="hint"&&(p==="room"||p==="peek")),d.classList.toggle("on",ct==="final"),ct==="write"&&setTimeout(()=>{if(p==="write")try{i.focus({preventScroll:!0})}catch(te){}},900))}function R(ct){p=ct,m=0}function B(ct,te){if(u)return;u=!0,g={eye:ct.eye.slice(),target:ct.target.slice(),fov:ct.fov,roll:ct.roll||0},y=Object.assign({},te),b="",i.value="",c.disabled=!0,qn.STATE.fold=0,qn.STATE.slide=0,qn.STATE.shown=!0,qn.STATE.active=!0;let Ee=z.getContext("2d");Ee.setTransform(1,0,0,1,0,0),Ee.clearRect(0,0,z.width,z.height),qn.STATE.ink=z,qn.STATE.inkDirty=!0,document.body.classList.add("confessing");let le=Mc[0],Zt=v?.3:5.5,so=v?.3:3.6;D.i=0,D.u=0,D.T=Zt+so,D.moving=!0,D.rest=0,D.raw=!0,D.lookFrom=y,D.lookTo=o1(le);let k=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Xd(0)],Be=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Ka[0],1,Ka[2]-.1],le.target];D.path=Ie=>{let no=Ie*(Zt+so);if(no<Zt){let mo=no/Zt,Ho=1-Math.cos(mo*Math.PI/2);return{eye:ai(k,Ho),target:ai(Be,Jr(0,1,Ho*1.05)),fov:Ca(g.fov,52,Jr(.4,1,Ho)),roll:(g.roll||0)*(1-Ho)}}let uo=(no-Zt)/so,wo=1-Math.pow(1-uo,2.4);return{eye:Xd(wo),target:le.target,fov:Ca(52,le.fov,wo),roll:.05*Math.sin(Math.PI*wo)}},R("room"),I("")}let D={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},K=()=>h?"Scroll on":"Swipe up";function O(ct){let te=Se,Ee=Mc[ct],le={eye:te.eye.slice(),target:te.target.slice(),fov:te.fov,roll:te.roll||0},Zt=Jl(le.eye,Ee.eye,.5),so=[Zt[0]-Ka[0],0,Zt[2]-Ka[2]],k=Math.hypot(so[0],so[2])||1,Be=[Zt[0]+so[0]/k*.6,Zt[1]+.3,Zt[2]+so[2]/k*.6];D.path=Ie=>{let no=1-Ie;return{eye:[0,1,2].map(uo=>no*no*le.eye[uo]+2*no*Ie*Be[uo]+Ie*Ie*Ee.eye[uo]),target:Jl(le.target,Ee.target,Jr(0,1,Ie)),fov:Ca(le.fov,Ee.fov,Ie),roll:le.roll*no}},D.lookFrom=H||o1(Mc[D.i]),D.lookTo=o1(Ee),D.i=ct,D.u=0,D.moving=!0,D.rest=0,D.raw=!1,D.T=v?.4:Math.max(2.8,Math.min(4.4,E5(le.eye,Ee.eye)*1+1.6)),I("")}let H=null;function ft(){if(p!=="write"||(b=i.value.trim(),!b))return;i.blur(),I("");let ct=Math.max(10,Math.min(22,24-b.length/28));w=vE(z,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:ct,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:te=>2.4+te.length/160,fixed:{mx:46,my:40},onPen:()=>{qn.STATE.inkDirty=!0},onDone:()=>{qn.STATE.inkDirty=!0}}),R("down")}function It(){try{let ct={access_key:mE,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(ct),keepalive:!0}).catch(()=>{})}catch(ct){}}function Mt(){p==="ready"&&(It(),R("fold"),I(""))}function vt(){!u||p==="leave"||(I(""),i.blur(),st=Se,Wt=H,R("leave"))}let st=null,Wt=null,Se=null,Ne=qn.SHOTS.window,to=qn.OFF,it=ct=>[ct[0]+to[0],ct[1],ct[2]],Lt=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],it([1.25,1.5,43.25]),it([-.55,1.36,42.92])],wt=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],it([-1,1.55,43.6]),it([-1.4,1.35,43.1]),it([-1.5,1.33,43.3])];function Me(ct){let te=Ya(L0(ct)),Ee=[g.eye,...Lt,Ne.eye],le=[g.target,...wt,Ne.target];return{eye:ai(Ee,te),target:ai(le,Jr(0,1,te*1.03)),fov:Ca(g.fov,Ne.fov,Jr(.6,.97,te)),roll:(g.roll||0)*(1-te)}}function kt(ct,te){if(v)return ct;let Ee=performance.now()/1e3,le=.004*te,Zt=Math.sin(Ee*.61)*.6+Math.sin(Ee*1.37+1.3)*.4,so=Math.sin(Ee*.47+2.1)*.6+Math.sin(Ee*1.13+.4)*.4;return{eye:[ct.eye[0]+Zt*le,ct.eye[1]+so*le*.7,ct.eye[2]],target:[ct.target[0]+so*le*1.5,ct.target[1]+Zt*le,ct.target[2]],fov:ct.fov,roll:ct.roll}}function Ct(ct,te,Ee){let le={};for(let Zt in te)le[Zt]=typeof te[Zt]=="number"&&typeof ct[Zt]=="number"?Ca(ct[Zt],te[Zt],Ee):te[Zt];return le}function Ft(ct){ct*=window.__confSpeed||1,m+=ct;let te=t1(Ne),Ee=t1(qn.SHOTS.paper),le,Zt,so=t1(qn.SHOTS.peek);if(p==="room")D.moving?(D.u=Math.min(1,D.u+ct/D.T),le=D.path(D.raw?D.u:Ya(D.u)),Zt=Ct(D.lookFrom,D.lookTo,Jr(.1,.9,D.u)),D.raw&&(Zt.fade=(y.fade||0)*(1-Jr(0,.12,D.u))),D.u>=1&&(D.moving=!1,D.rest=0,f.textContent=K(),I("hint"))):(D.rest+=ct,le=kt(t1(Mc[D.i]),2.5),Zt=o1(Mc[D.i]));else if(p==="enter"){let Be=L0(m/(v?.6:9)),Ie=Ya(Be),no=[ge.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],it([.75,1.5,42.95]),it([-.25,1.42,42.82]),it([-.9,1.42,42.82]),so.eye];le={eye:ai(no,Ie),target:Jl(ge.target,so.target,Jr(0,.35,Ie)),fov:Ca(ge.fov,so.fov,Jr(.3,1,Ie)),roll:0},Zt=Ct(Pe,Vd,Jr(.2,.9,Be)),Be>=1&&R("peek")}else if(p==="peek")le=kt(so,1.5),Zt=Vd,m>(v?.5:3.2)&&R("turn");else if(p==="turn"){let k=L0(m/(v?.4:3.2));le=Wd(so,te,Ya(k)),Zt=Ct(Vd,kc,Ya(k)),k>=1&&(R("write"),I("write"))}else if(p==="write")le=kt(te,1),Zt=kc;else if(p==="down"){let k=L0(m/(v?.4:2));le=Wd(te,Ee,Ya(k)),Zt=Ct(kc,Zl,Ya(k)),k>=1&&(_=w.write(b,v)||0,qn.STATE.inkDirty=!0,R("writing"))}else if(p==="writing")le=kt(Ee,.6),Zt=Zl,m>_+.8&&(R("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",I("hint"));else if(p==="ready")le=kt(Ee,.6),Zt=Zl;else if(p==="fold"){let k=L0(m/(v?.3:1.5));qn.STATE.fold=Ya(k),le=kt(Ee,.6),Zt=Zl,k>=1&&R("slide")}else if(p==="slide"){let Be=L0(m/(v?.6:3.4));qn.STATE.slide=Ya(Jr(0,.7,Be));let Ie=Ya(Jr(.35,1,Be));le=Wd(Ee,te,Ie),Zt=Ct(Zl,kc,Ie),Be>=1&&(qn.STATE.shown=!1,R("final"),I("final"))}else if(p==="final")le=kt(te,1),Zt=kc;else if(p==="leave"){let k=v?.6:st.eye[0]<to[0]-.3?12:7,Be=L0(m/k),Ie={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},no=Ya(Be),uo=st.eye[0]<to[0]-.3,wo=uo?[st.eye,it([-.55,1.4,42.8]),it([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Ie.eye]:[st.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Ie.eye],mo=uo?[st.target,it([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Ie.target]:[st.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Ie.target];if(le={eye:ai(wo,no),target:ai(mo,no),fov:Ca(st.fov,Ie.fov,no),roll:Ie.roll*no},Zt=Ct(Wt||kc,y,Jr(.1,.7,Be)),Zt.fade=(y.fade||0)*Jr(.82,1,Be),Be>=1){u=!1,qn.STATE.active=!1,qn.STATE.shown=!0,qn.STATE.fold=0,qn.STATE.slide=0;let Ho=z.getContext("2d");Ho.setTransform(1,0,0,1,0,0),Ho.clearRect(0,0,z.width,z.height),qn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return Se=le,H=Zt,{camera:le,look:Zt}}let ge=null,Pe=null;function pe(){if(p==="room"){if(D.moving||D.rest<.4)return;D.i<Mc.length-1?O(D.i+1):(ge=Se,Pe=H,I(""),R("enter"));return}if(p==="peek"){m>.4&&R("turn");return}p==="ready"?Mt():p==="writing"&&w&&(w.finish(),m=Math.max(m,_))}function oe(){p==="room"&&!D.moving&&D.rest>.4&&D.i>0&&O(D.i-1)}return{start:B,update:Ft,leave:vt,get active(){return u},get stage(){return p},wheel(ct){ct>8?pe():ct<-8&&oe()},swipe(ct){ct>0?pe():ct<0&&oe()},tap(){pe()},key(ct){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ct)>=0?(pe(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(ct)>=0?(oe(),!0):ct==="Escape"?(vt(),!0):!1},_setNote(ct){i.value=ct,i.dispatchEvent(new Event("input"))}}}});var $5=bt((wT,I5)=>{"use strict";var Sc=tc(),n1=bd(),Yd=Bf(),xE=sl(),Kd=_d(),yE=wa(),r1=!yE.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:pa}=ka(),{C:gr,PAINTING_X:Tc}=xr(),ea=t=>Math.max(0,Math.min(1,t)),Qt=(t,e,o)=>t+(e-t)*o,Yo=(t,e,o)=>[Qt(t[0],e[0],o),Qt(t[1],e[1],o),Qt(t[2],e[2],o)],vo=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],Qd=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Gr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Vt=(t,e,o)=>{let n=ea((o-t)/(e-t));return n*n*(3-2*n)};function bE(t,e,o,n,r,a){if(r<=0)return[t,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*n,l=Math.max(-f,Math.min(f,t-e)),d=t-l,h=(o+s*l)*r,v=(o-s*h)*c,u=d+(l+h)*c;return e-t>0==u>e&&(u=e,v=0),[u,v]}var T5=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,wE=t=>t*t*t,Zd=t=>1-Math.pow(1-t,3),Mn=t=>-(Math.cos(Math.PI*t)-1)/2;function Rn(t,e){let o=t.length-1,n=ea(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=a*a,d=l*a;return[0,1,2].map(h=>.5*(2*i[h]+(-s[h]+c[h])*a+(2*s[h]-5*i[h]+4*c[h]-f[h])*l+(-s[h]+3*i[h]-3*c[h]+f[h])*d))}var lo=(t,e,o,n)=>({eye:t,target:e,fov:o,roll:n||0});function fi(t,e,o){return lo(Yo(t.eye,e.eye,o),Yo(t.target,e.target,o),Qt(t.fov,e.fov,o),Qt(t.roll,e.roll,o))}var np=()=>Vt(.75,1.3,window.innerWidth/window.innerHeight),Hr=(t,e)=>fi(t,e,np()),a1=[7,3.95,gr.hallEnd-.05],_E=[gr.x1,2.9,gr.zc],Ac=[16.75,4.55,6.75],rp=[6.92,2.72,14.5],Qa=[7.3,.015,47.1],ME=[Ac,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],rp],kE=[rp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Qa],ii=[Tc[0],3,gr.z0],ci=[Tc[1],3,gr.z0],tp=47.45,P5=4.6,SE=13.2,EE=1.57,ef=[7.55,1.25,46.75],ap=[17.25,2.42,46],sp=[26.05,1.95,46],of=[36.15,.015,44],l1=()=>Qt(6.8,6.15,np()),AE=[ef,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],ap],zE=[ap,[20.2,2.05,45.6],[23.2,1.8,45],sp],li=[Tc[2],3,gr.z0],ep=[34.8,1.35,46],ms=[7.89,.03,19.03],L5=.36,N5=13.64,wr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Oa(t){let e=t.side==="left"?1:-1;return Yo([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],np())}function TE(t){return t.side==="left"?Hr(lo([8.6,3.9,t.z],[L5,1.45,t.z],76),lo([8,3.6,t.z+.7],[L5,3.95,t.z-2],46,-.008)):Hr(lo([5.4,3.9,t.z],[N5,1.45,t.z],76),lo([6,3.6,t.z-.7],[N5,3.95,t.z+2],46,-.008))}var LE=()=>[of,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Oa(wr[0])],NE=()=>[Oa(wr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Oa(wr[3])],RE=()=>[Oa(wr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],ms],R5={2:{pos:()=>rp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>ef,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>ap,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>sp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>ep,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Oa(wr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Oa(wr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Oa(wr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Oa(wr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Oa(wr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Oa(wr[5]),amp:[.12,.08,.1],tumble:.5}},vs=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],n=Hr(lo([gr.x0+.9,1.85,gr.zc+.25],[gr.x1,2.85,gr.zc-.1],64),lo([gr.x0+1.2,2,gr.zc+.35],[gr.x1,2.6,gr.zc-.15],50));return n.eye=vo(vo(n.eye,[e,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=Hr(lo([16.6,1.9,9.2],[17.3,.4,5.6],64),lo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=vo(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=Hr(lo([7,1.35,13],[7.2,7.6,20.4],74,.05),lo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=vo(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=Hr(lo([7,3.6,43.7],[7,3.85,a1[2]],74),lo([7,3.6,41.3],[7,3.95,a1[2]],46));return o.eye=vo(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Hr(lo([7,3.9,40.3],[7,1.35,a1[2]],76),lo([6.3,3.6,41.2],[3.7,3.95,a1[2]],46,-.008));return o.eye=vo(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Hr(lo([7.15,.15,46],[7.3,.04,Qa[2]],50),lo([7.05,.14,45.9],[7.25,.05,Qa[2]],32));return o.eye=vo(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=Hr(lo([7.15,.1,46.3],[7.05,.1,tp],50),lo([7.1,.12,45.85],[7,.2,tp],30));return o.eye=vo(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=Hr(lo([7.3,.85,45.65],[7.6,1.38,47.1],64),lo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=vo(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Hr(lo([ii[0],2.3,46.85],[ii[0],1.25,ii[2]],74),lo([ii[0]-.6,2.55,46.85],[ii[0]+1.9,2.9,ii[2]],46,.008));return o.eye=vo(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Hr(lo([ci[0],1.95,46.85],[ci[0],1,ci[2]],74),lo([ci[0]-.6,2.1,46.85],[ci[0]+1.9,2.75,ci[2]],46,.008));return o.eye=vo(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Hr(lo([li[0],1.4,46.85],[li[0],.6,li[2]],74),lo([li[0]-.6,1.45,46.85],[li[0]+1.9,2,li[2]],46,.008));return o.eye=vo(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Hr(lo([34.75,.5,44.15],[gr.x1,.8,43.95],66),lo([34.75,.45,44.3],[gr.x1,.35,43.95],50));return o.eye=vo(o.eye,e),o}},...wr.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=TE(t);return r.eye=vo(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=Hr(lo([7.75,2.6,18.6],[7.89,0,19.08],60),lo([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-ms[0],r=o.eye[2]-ms[2];return o.eye=[ms[0]+n*Math.cos(e)-r*Math.sin(e),o.eye[1],ms[2]+n*Math.sin(e)+r*Math.cos(e)],o}}],CE=[1,.96,.88];function C5(t,e){return{dur:e,cam(o,n,r){let a=Mn(o),s=fi(n,r,a),i=wr[t].side==="left"?1:-1;return s.eye=vo(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=Qt(n[s],r[s],o));return a.aperture=Qt(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=Mn(o),r=Oa(wr[t]),a=Oa(wr[t+1]),s=wr[t].side==="left"?1:-1,i=vo(Yo(r,a,.5),[s*1.2,.5,0]),c=Rn([r,Yo(r,i,.6),i,Yo(a,i,.6),a],n);return{phase:"fly",pos:vo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Jd=[{dur:6.2,cam(t,e,o){if(t<.5){let i=wE(t/.5),c=Yo(e.eye,[gr.x1-3.2,2.6,gr.zc],i),f=Yo(e.target,_E,Vt(0,.6,t/.5));return lo(c,f,Qt(e.fov,e.fov-8,i),Qt(e.roll,.04,i))}let n=Zd((t-.5)/.5),r=[[pa.cx+.4,10.4,pa.zc+.6],[pa.cx-.6,7.6,pa.zc+1.3],[pa.cx-1.9,4.6,pa.zc+1.75],o.eye],a=[[pa.cx-.1,0,pa.zc-.2],[pa.cx-1,.4,pa.zc-.1],[pa.cx-1.1,.8,pa.zc-.2],o.target];return lo(Rn(r,n),Rn(a,n),Qt(o.fov+14,o.fov,n),Qt(-.25,o.roll,n))},look(t,e,o){let n=Vt(.22,.5,t),r=1-Vt(.5,.74,t);return{fade:t<.5?n:r,fadeColor:CE,exposure:Qt(e.exposure,o.exposure,Vt(.5,.9,t))*(1+2.2*(t<.5?Vt(.15,.5,t):1-Vt(.5,.8,t))),letterbox:Qt(e.letterbox,o.letterbox,Vt(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*Vt(.6,1,t),focus:Qt(4,o.focus,Vt(.5,1,t)),shafts:Qt(e.shafts,o.shafts,Vt(.4,.6,t)),vignette:Qt(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,n){let r=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=Rn(r,Mn(t)),s=Vt(0,.12,t)*(1-Vt(.82,1,t)),i=Yo(Yo(e.target,o.target,Vt(.55,1,t)),n.pos,s),c=Qt(e.fov,o.fov,Vt(.3,1,t))-6*Math.sin(Math.PI*t),f=Qt(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return lo(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Qt(e.exposure,o.exposure,Vt(.25,.75,t)),letterbox:Qt(e.letterbox,o.letterbox,t),focus:Qt(a,o.focus,Vt(.8,1,t)),aperture:Qt(.7,o.aperture,Vt(.8,1,t)),shafts:Qt(e.shafts,o.shafts,Vt(.3,.8,t)),vignette:Qt(e.vignette,o.vignette,t)}},leaf(t){let e=T5(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:vo(Rn(ME,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*Vt(.8,1,t)}}},{dur:11.5,cam(t,e,o,n){let r=Rn([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Vt(0,.8,t)*.6+Mn(ea(t/.8))*.4),a=Rn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],Mn(Vt(.8,1,t))),s=t<.8?r:a,i=Yo(Yo(e.target,n.pos,Vt(.03,.22,t)),o.target,Vt(.82,1,t)),c=Qt(e.fov,o.fov,Vt(.15,.7,t))-6*Vt(.6,.8,t)*(1-Vt(.85,1,t)),f=Qt(e.roll,o.roll,Vt(0,.6,t))-.04*Math.sin(Math.PI*t);return lo(s,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Qt(e.exposure,o.exposure,Vt(.5,1,t)),letterbox:Qt(e.letterbox,o.letterbox,t),focus:Qt(a,o.focus,Vt(.84,1,t)),aperture:Qt(1.1,o.aperture,Vt(.84,1,t)),shafts:Qt(e.shafts,o.shafts,Vt(.2,.9,t)),vignette:Qt(e.vignette,o.vignette,Vt(.5,1,t))}},leaf(t){let e=Qt(T5(t),t,.35),o=Rn(kE,Vt(0,.78,e)),n=Math.sin(t*Math.PI*8)*.35*(1-Vt(.55,.76,t)),r=Vt(.7,.8,t);return{phase:"fly",pos:vo(o,[n,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(t,e,o){let n=Mn(t),r=fi(e,o,n);return r.eye=vo(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(t,e,o){let n=Mn(t),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Qt(e[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let n=Mn(t),r=Rn([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Yo(e.target,o.target,Vt(.1,.85,t));return lo(r,a,Qt(e.fov,o.fov,Vt(.2,1,t)),Qt(e.roll,o.roll,n))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Qt(e[r],o[r],Vt(.2,1,t)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return fi(e,o,Mn(t))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Qt(e[r],o[r],Mn(t)));return n},leaf(){return{phase:"floor"}},walker(t){return Qt(P5,l1(),t)}},{dur:11,kick:t=>ea((t-Ec())/(1-Ec())),cam(t,e,o,n){let r=Ec(),a=Vt(0,r,t)*(1-Vt(r+.12,r+.35,t)),s=O5(Math.min(t,zc)),i=vo(e.target,[(s-e.target[0])*.15*a,0,0]),c=Vt(r+.12,1,t),f=Rn([e.eye,e.eye,vo(e.eye,[0,.12,-.3]),o.eye],c);return i=Yo(i,n.pos,Vt(r+.06,r+.24,t)*(1-Vt(.9,1,t))),i=Yo(i,o.target,Vt(.88,1,t)),lo(f,i,Qt(e.fov,o.fov,c),Qt(e.roll,o.roll,c))},look(t,e,o,n,r){let a=Ec(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Vt(0,.12,t)*(1-Vt(a+.25,a+.5,t));return{letterbox:Qt(Qt(e.letterbox,o.letterbox,Vt(a,1,t)),1.75,i),exposure:Qt(e.exposure,o.exposure,Vt(a,1,t)),focus:t<a?e.focus:Qt(e.focus,s,Vt(a,a+.2,t)),aperture:Qt(e.aperture,o.aperture,Vt(a,1,t)),vignette:Qt(e.vignette,o.vignette,t),shafts:Qt(e.shafts,o.shafts,t)}},leaf(t){let e=ea((t-Ec())/(1-Ec()));if(e<=0)return{phase:"floor"};let o=Vt(0,.85,e)*.85+Zd(Vt(0,.15,e))*.15;return{phase:"fly",pos:vo(Qa,[(ef[0]-Qa[0])*o+Math.sin(e*9)*.08*(1-e),(ef[1]-Qa[1])*o,(ef[2]-Qa[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?O5(t):null}},{dur:9,cam(t,e,o,n){let r=Mn(t),a=Rn([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-Vt(.6,.92,t),i=Yo(Yo(e.target,n.pos,Vt(0,.15,t)),o.target,1-s),c=Qt(e.fov,o.fov,Vt(.3,1,t)),f=Qt(e.roll,o.roll,r)+.04*Math.sin(Math.PI*t);return lo(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Qt(e.letterbox,o.letterbox,t),exposure:Qt(e.exposure,o.exposure,Vt(.3,.8,t)),focus:Qt(a,o.focus,Vt(.6,.95,t)),aperture:Qt(e.aperture,o.aperture,Vt(.6,1,t)),vignette:Qt(e.vignette,o.vignette,t),shafts:Qt(e.shafts,o.shafts,Vt(.3,.8,t))}},leaf(t){let e=Mn(t);return{phase:"fly",pos:vo(Rn(AE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=Mn(t),r=fi(e,o,n);return r.eye=vo(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Qt(e[r],o[r],t));return n.aperture=Qt(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=Mn(t);return{phase:"fly",pos:vo(Rn(zE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=Mn(t),r=fi(e,o,n);return r.eye=vo(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Qt(e[r],o[r],t));return n.aperture=Qt(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=Mn(t);return{phase:"fly",pos:vo(Rn([sp,[29.2,1.75,45.5],[32.2,1.5,45.4],ep],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,n){let r=Mn(t),a=Rn([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=Vt(.05,.3,t)*(1-Vt(.8,1,t)),i=Yo(Yo(e.target,o.target,Vt(.6,1,t)),n.pos,s);return lo(a,i,Qt(e.fov,o.fov,Vt(.2,1,t)),Qt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Qt(e.letterbox,o.letterbox,t),exposure:Qt(e.exposure,o.exposure,t),focus:Qt(a,o.focus,Vt(.8,1,t)),aperture:Qt(.9,o.aperture,Vt(.8,1,t)),vignette:Qt(e.vignette,o.vignette,t),shafts:Qt(e.shafts,o.shafts,t)}},leaf(t){let e=Rn([ep,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],of],Vt(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-Vt(.35,.82,t)),n=Vt(.78,.88,t);return{phase:"fly",pos:vo(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(t){let e=ea((t-.02)/.09);return Zd(e)+.07*Math.sin(ea((t-.08)/.18)*Math.PI)*(1-ea((t-.08)/.3))},cam(t,e,o,n){let r=Math.sin(t*340)*.012*Vt(.02,.05,t)*(1-Vt(.08,.16,t)),a=Vt(.06,1,t),s=Rn([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+Mn(a)*.45),i=vo(n.pos,[1,-.2,-1.45]);s=Yo(s,i,Vt(.1,.22,t)*(1-Vt(.52,.72,t)));let c=Vt(.06,.16,t)*(1-Vt(.86,1,t)),f=Yo(e.target,n.pos,c);f=Yo(f,o.target,Vt(.86,1,t));let l=Qt(e.fov,o.fov,Vt(.1,1,t))+6*Math.sin(Math.PI*Vt(.08,.9,t)),d=Qt(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*Vt(.1,.9,t))+r;return lo(vo(s,[0,r,0]),f,l,d)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Vt(.02,.06,t)*(1-Vt(.08,.3,t));return{letterbox:Qt(e.letterbox,o.letterbox,Vt(.1,.4,t)),exposure:Qt(e.exposure,o.exposure,t)*(1+.8*s),focus:Qt(a,o.focus,Vt(.86,1,t)),aperture:Qt(.8,o.aperture,Vt(.86,1,t)),vignette:Qt(e.vignette,o.vignette,t),shafts:Qt(e.shafts,o.shafts,t)+s}},leaf(t){let e=ea((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=Rn(LE(),e*.6+Mn(e)*.4),n=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:vo(o,[0,n*.6,n]),tumble:1.4-.8*e}}},...[0,1].map(t=>C5(t,7.5)),{dur:10,cam(t,e,o,n){let r=Mn(t),a=Rn([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=Vt(0,.15,t)*(1-Vt(.85,1,t)),i=Yo(Yo(e.target,o.target,Vt(.5,1,t)),n.pos,s);return lo(a,i,Qt(e.fov,o.fov,r)+4*Math.sin(Math.PI*r),Qt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Qt(e.letterbox,o.letterbox,t),exposure:Qt(e.exposure,o.exposure,t),focus:Qt(a,o.focus,Vt(.85,1,t)),aperture:Qt(.6,o.aperture,Vt(.85,1,t)),vignette:Qt(e.vignette,o.vignette,t),shafts:Qt(e.shafts,o.shafts,t)}},leaf(t){let e=Mn(t),o=Rn(NE(),e);return{phase:"fly",pos:vo(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>C5(t,7.5)),{dur:10,cam(t,e,o,n){let r=Mn(t),a=Rn([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=Vt(0,.2,t)*(1-Vt(.9,1,t)),i=Yo(Yo(e.target,o.target,Vt(.5,1,t)),n.pos,s);return lo(a,i,Qt(e.fov,o.fov,r),Qt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Qt(e.letterbox,o.letterbox,t),exposure:Qt(e.exposure,o.exposure,t),focus:Qt(a,o.focus,Vt(.85,1,t)),aperture:Qt(.7,o.aperture,Vt(.85,1,t)),vignette:Qt(e.vignette,o.vignette,t),shafts:Qt(e.shafts,o.shafts,t)}},leaf(t){let e=Rn(RE(),Vt(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-Vt(.4,.84,t)),n=Vt(.8,.9,t);return{phase:"fly",pos:vo(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],op=9.2,zc=.72;function O5(t){return t<zc?Qt(l1(),op,t/zc):Qt(op,SE,(t-zc)/(1-zc))}function Ec(){return zc*ea((Qa[0]+.15-l1())/(op-l1()))}var c1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},s1=t=>Object.assign({},c1,vs[t].look),OE=`
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
`;function ta(t,e,o){let n=document.createElement(t);return e&&(n.className=e),o!==void 0&&(n.innerHTML=o),n}var si=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function i1(t,e,o){t.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(e+r*o).toFixed(2)+"s"})}I5.exports=function(e){let o=/tourdebug/.test(location.search),{fps:n}=e;if(!document.querySelector("link[data-tour-font]")){let W=document.createElement("link");W.rel="stylesheet",W.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",W.setAttribute("data-tour-font",""),document.head.appendChild(W)}let r=Ud(),a=null;fetch("res/hand.json").then(W=>W.ok?W.json():null).then(W=>{a=W}).catch(()=>{});let s=document.createElement("style");s.textContent=OE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=ta("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=ta("div","tour-mark",si(n1.name)),f=ta("button","tour-free","Explore freely");f.type="button";let l=ta("div","tour-links",Yd.icons("tour-icon"));l.insertBefore(jd()("tour-icon"),l.firstChild),l.insertBefore(Gh().button("tour-icon"),l.firstChild.nextSibling);let d=ta("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');d.type="button",d.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(d),r1&&l.appendChild(f);let h=ta("div","tour-progress",vs.map(()=>"<i></i>").join("")),v=ta("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),u=v.querySelector("span"),p=ta("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${si(n1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);i1(p,.4,.35);let m=n1.text.split(/\n\s*\n/).map(W=>`<p class="tour-line">${si(W.trim())}</p>`).join(""),g=ta("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${si(n1.title)}</h2>
		<span class="tour-rule"></span>
		${Yd.line("tour-line tour-contact")}
		${m}`);i1(g,.25,.28);let y=ta("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);i1(y,.6,.3);let b=ta("div","tour-card tour-master","");function w(W){let pt=ta("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),ne=pt.querySelector(".tour-title"),ve=pt.querySelector(".tour-body");return pt.filled=!1,pt.body=ve,pt.fill=()=>{let ye=W();if(!ye||pt.filled)return;pt.filled=!0;let sn=ye.title||"";pt.querySelector(".tour-kicker").textContent=xE(ye)||"Oil on canvas";let cr=pt.querySelector(".visit-row");cr.innerHTML=Kd.button(ye),cr.hidden=!cr.innerHTML;let Tr=cr.querySelector(".visit-btn");Tr&&(Tr.addEventListener("click",_o=>{_o.stopPropagation(),Kd.open(ye)}),pt.warm=()=>Kd.warm(ye));let cn=0;ne.innerHTML=sn.split(" ").map(_o=>'<span class="tour-word">'+_o.split("").map(Zn=>`<span style="transition-delay:${(.35+cn++*.045).toFixed(3)}s">${si(Zn)}</span>`).join("")+"</span>").join(" "),ne.setAttribute("aria-label",sn);let Mr=.35+sn.length*.045+.2;pt.querySelector(".tour-rule").style.transitionDelay=Mr.toFixed(2)+"s";let ln=String(ye.description||"").split(/\n\s*\n/).filter(_o=>_o.trim());if(pt.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&ln.length){ve.innerHTML=ln.map(kn=>`<p class="hand-text">${si(kn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let _o=ve.querySelector("canvas"),Zn=ln.map(kn=>kn.trim()).join(`

`),Ko=!1,Hn=!1,Br=0;ve.addEventListener("wheel",()=>{Ko=!0},{passive:!0}),ve.addEventListener("touchmove",()=>{Ko=!0},{passive:!0});let jr=parseFloat(getComputedStyle(ve).fontSize)||17,Xo=r(_o,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,jr*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:kn=>3.5+kn.length/420,seed:3+sn.length,onPen:kn=>{if(Ko)return;let Ia=kn-ve.clientHeight*.55;Ia>ve.scrollTop+4&&(ve.scrollTop+=Math.min(16,Ia-ve.scrollTop))}});_o.addEventListener("click",kn=>{kn.stopPropagation(),clearTimeout(Br),Hn?Xo.finish():(Hn=!0,Xo.write(Zn,!0))}),pt.write=()=>{if(clearTimeout(Br),Ko=!1,Hn){Xo.write(Zn,!0);return}Xo.write("",!0),Br=setTimeout(()=>{Hn=!0,Xo.write(Zn)},Mr*.6*1e3)},pt.stopWrite=()=>{clearTimeout(Br),Xo.stop()};let ga=0;window.addEventListener("resize",()=>{clearTimeout(ga),ga=setTimeout(()=>{Hn&&pt.classList.contains("on")&&Xo.write(Zn,!0)},250)})}else ve.innerHTML=ln.map(_o=>`<p class="tour-line">${si(_o.trim())}</p>`).join(""),ve.querySelectorAll(".tour-line").forEach((_o,Zn)=>{_o.style.transitionDelay=(Mr+.3+Math.min(Zn,6)*.35).toFixed(2)+"s"})},pt}let _=()=>e.paintings?e.paintings():[],M=W=>_().find(pt=>pt.side==="corridor"&&Math.abs(pt.paintingPosition[0]-W)<.5),z=w(()=>_().find(W=>W.side==="end")),I=()=>ta("div","tour-card",""),R=w(()=>M(ii[0])),B=w(()=>M(ci[0])),D=w(()=>M(li[0])),K=wr.map(W=>w(()=>_().find(pt=>pt.side===W.side&&Math.abs(pt.paintingPosition[2]-W.z)<.5))),O=ta("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${r1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Yd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${r1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);i1(O,.5,.35);let H=[p,g,y,b,z,I(),I(),I(),R,B,D,I(),...K,O];i.append(...H,c,l,h,v),document.body.appendChild(i);let ft=z5()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{le=-1,_e&&(ke={start:k},_e=!1)}});document.body.classList.add("touring");let It=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Mt=It?"Scroll":"Swipe",vt=vs.map((W,pt)=>pt===0?It?"Scroll to begin":"Swipe up to begin":pt===1?Mt+" to follow the leaf":pt===2?Mt+" to follow the light":pt===3?Mt+" for its story":pt===6||pt===7||pt===vs.length-1?"":Mt+" on"),st=[0];Jd.forEach(W=>st.push(st[st.length-1]+W.dur));let Wt=st[st.length-1],Se=210,Ne=95,to=.35,it=1.4,Lt=.32,wt=1,Me=1.3,kt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ct=2.2,Ft=.7,ge=.9,Pe=!0,pe=0,oe=0,ct=0,te=-10,Ee=!1,le=-1,Zt=0,so=0,k=0,Be=null,Ie=Object.assign({},s1(0)),no=vs[0].cam(0),uo={phase:"home",pos:Ac.slice(),tumble:0},wo=0,mo=W=>{let pt=0;for(let ne=1;ne<st.length;ne++)Math.abs(st[ne]-W)<Math.abs(st[pt]-W)&&(pt=ne);return pt};function Ho(W){let pt=H[W];pt&&pt.fill&&(pt.fill(),pt.body.scrollTop=0,pt.offsetWidth),H.forEach((ne,ve)=>{let ye=ne.classList.contains("on");ne.classList.toggle("on",ve===W),ve===W&&!ye&&ne.write&&ne.write(),ve!==W&&ye&&ne.stopWrite&&ne.stopWrite()}),pt&&pt.warm&&pt.warm(),u.textContent=vt[W]||"",v.classList.toggle("on",!!vt[W])}function ir(){H.forEach(W=>{W.stopWrite&&W.classList.contains("on")&&W.stopWrite(),W.classList.remove("on")}),v.classList.remove("on")}let R0=null,pi=-1;function Z(W){if(ft.active||!Pe||Be)return;let pt=k-te>to;if(te=k,pt||!R0){let ne=0,ve=Wt;for(let ye=0;ye<st.length;ye++)if(st[ye]<=pe-.02&&(ne=st[ye]),st[ye]>=pe+.02){ve=st[ye];break}R0={lo:ne,hi:ve}}k<pi||(Ee=!1,ct=Math.max(R0.lo,Math.min(R0.hi,ct+W)),ct=Math.max(pe-Ct,Math.min(pe+Ct,ct)))}function Ht(W){if(ft.active||!Pe||Be)return;let pt=Ee?ct:pe,ne;if(W>0)ne=st.findIndex(ve=>ve>pt+.05);else{ne=-1;for(let ve=st.length-1;ve>=0;ve--)if(st[ve]<pt-.05){ne=ve;break}}ne<0||(ct=st[ne],Ee=!0,te=k)}let Xt=null,Dt=W=>W.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(W=>i.addEventListener(W,Dt)),i.addEventListener("pointerdown",W=>{if(W.stopPropagation(),!(W.target.closest("button, a")||W.target.closest(".tour-body"))){Xt={x:W.clientX,y:W.clientY,lx:W.clientX,ly:W.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(W.pointerId)}catch(pt){}}}),i.addEventListener("pointermove",W=>{if(!Xt)return;let pt=W.clientX-Xt.lx,ne=W.clientY-Xt.ly;Xt.lx=W.clientX,Xt.ly=W.clientY;let ve=Math.abs(ne)>=Math.abs(pt)?-ne:-pt;Xt.moved+=Math.abs(ve);let ye=performance.now(),sn=ve/Ne;Xt.v=Xt.v*.6+sn/Math.max(.008,(ye-Xt.lt)/1e3)*.4,Xt.lt=ye,Xt.moved>6&&Z(sn)});let xe=W=>{let pt=Xt;if(Xt=null,!!pt){if(ft.active){pt.moved<10&&performance.now()-pt.t<500?ft.tap():pt.y-(W?W.clientY:pt.ly)>30&&ft.swipe(1);return}pt.moved<10&&performance.now()-pt.t<500?Ht(1):performance.now()-pt.lt<120&&Z(Math.max(-1.6,Math.min(1.6,pt.v*.22)))}};i.addEventListener("pointerup",W=>{W.stopPropagation(),xe(W)}),i.addEventListener("pointercancel",()=>{Xt=null}),i.addEventListener("wheel",W=>{if(ft.active){if(W.target.closest(".conf-ui"))return;W.preventDefault(),ft.wheel(W.deltaY);return}if(W.target.closest(".tour-body")){let ne=W.target.closest(".tour-body"),ve=ne.scrollTop+ne.clientHeight>=ne.scrollHeight-2&&W.deltaY>0,ye=ne.scrollTop<=0&&W.deltaY<0;if(!ve&&!ye)return}W.preventDefault();let pt=W.deltaMode===1?W.deltaY*16:W.deltaMode===2?W.deltaY*window.innerHeight:W.deltaY;Z(pt/Se)},{passive:!1}),window.addEventListener("keydown",W=>{if(!Pe||Be||document.body.classList.contains("visiting"))return;if(ft.active){if(W.stopImmediatePropagation(),W.target&&/TEXTAREA|INPUT|BUTTON/.test(W.target.tagName))return;ft.key(W.key)&&W.preventDefault();return}let pt=W.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(pt)>=0){if((pt==="Enter"||pt===" ")&&W.target&&W.target.tagName==="BUTTON")return;W.preventDefault(),W.stopImmediatePropagation(),Ht(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(pt)>=0?(W.preventDefault(),W.stopImmediatePropagation(),Ht(-1)):pt==="Escape"?(W.preventDefault(),qe()):/^[wasdzq]$/i.test(pt)&&W.stopImmediatePropagation()},!0),window.addEventListener("keyup",W=>{Pe&&!Be&&/^(Arrow|[wasdzq]$)/i.test(W.key)&&W.stopImmediatePropagation()},!0),f.addEventListener("click",W=>{W.stopPropagation(),qe()}),["mousedown","pointerdown"].forEach(W=>d.addEventListener(W,pt=>pt.stopPropagation())),d.addEventListener("click",W=>{W.stopPropagation(),je()});let Fe=lo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),Ce=null,_e=!1;function je(){if(!Pe||Be||ft.active||Ce)return;ir(),le=-2;let W=no.eye;if(W[0]>.5&&W[0]<13.5&&W[2]>36&&W[2]<50){_e=!1,ft.start(no,Ie);return}Ce={t:0}}O.addEventListener("click",W=>{let pt=W.target.closest("button");pt&&(W.stopPropagation(),pt.dataset.act==="free"&&qe(),pt.dataset.act==="replay"&&ro(),pt.dataset.act==="list"&&hu().show(!1),pt.dataset.act==="confess"&&(ir(),le=-2,ft.start(no,Ie)))});let Te=[null,[pa.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Tc[0]-7,0],[42.5+Tc[1]-7,0],[42.5+Tc[2]-7,0],[1e3,Math.PI/2],...wr.map(W=>[W.z-1.6,W.side==="left"?-Math.PI/2:Math.PI/2]),[ms[2]-1.6,Math.PI]],eo=null,$e=0;function qe(){if(!Pe||Be||!r1)return;let W=mo(pe),pt=Te[W];eo=W<=1?{phase:"home",pos:Ac.slice()}:W>=3&&W<=6?{phase:"floor",pos:Qa.slice()}:W===11?{phase:"floor",pos:of.slice()}:W===18?{phase:"floor",pos:ms.slice()}:null,$e=W>=12?1:0,pt&&n.place&&n.place(pt[0],pt[1]),Be={start:k,fromCam:no,fromLook:Object.assign({},Ie)},ir(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function ro(){pe=ct=0,oe=0,Ee=!1,le=-1,Zt=0,so=0,uo={phase:"home",pos:Ac.slice(),tumble:0},ke={start:k}}let ke={start:-1},go=!1,Po=[],Le={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function jo(W){wo+=W*(uo.phase==="floor"?0:1);let pt=uo.tumble===void 0?0:uo.tumble,ne=Sc.fromTranslation(Po,uo.pos);if(uo.phase==="home")ne=Sc.rotateY(ne,ne,2.2+Math.sin(wo*.9)*.15),ne=Sc.rotateZ(ne,ne,-1+Math.sin(wo*1.3)*.12),ne=Sc.rotateX(ne,ne,.4);else if(uo.phase==="floor")ne=Sc.rotateY(ne,ne,.65),ne=Sc.rotateX(ne,ne,.16);else{let ve=uo.pos;if(Le.prev&&W>0){let kr=[ve[0]-Le.prev[0],ve[1]-Le.prev[1],ve[2]-Le.prev[2]];if(Math.hypot(kr[0],kr[1],kr[2])<1.5){let Fc=Math.min(1,W*6);for(let Ms=0;Ms<3;Ms++)Le.vel[Ms]+=(kr[Ms]/W-Le.vel[Ms])*Fc}else Le.vel=[0,0,0]}Le.prev=ve.slice();let ye=Le.vel,sn=Math.hypot(ye[0],ye[1],ye[2]),cr=Vt(.25,1.4,sn),Tr=Vt(.5,2,-ye[1]),cn=wo*.35*(.3+pt)+.65,Mr=[Math.cos(cn),0,Math.sin(cn)];sn>.001&&(Mr=Yo(Mr,Gr(ye,-1/sn),cr));let ln=Math.min(1,W*4);Le.axis=Yo(Le.axis,Mr,Le.fresh?1:ln);let _o=Le.axis,Zn=Math.hypot(_o[0],_o[1],_o[2])||1;_o=Gr(_o,1/Zn);let Ko=no.eye,Hn=[Ko[0]-ve[0],Ko[1]-ve[1],Ko[2]-ve[2]],Br=Math.hypot(Hn[0],Hn[1],Hn[2])||1,jr=Qt(.6,.22,cr),Xo=[Hn[0]/Br*jr,1+Hn[1]/Br*jr,Hn[2]/Br*jr],ga=_o[0]*Xo[0]+_o[1]*Xo[1]+_o[2]*Xo[2];Xo=Qd(Xo,Gr(_o,ga));let kn=Math.hypot(Xo[0],Xo[1],Xo[2])||1;Xo=Gr(Xo,1/kn);let Ia=[_o[1]*Xo[2]-_o[2]*Xo[1],_o[2]*Xo[0]-_o[0]*Xo[2],_o[0]*Xo[1]-_o[1]*Xo[0]],No=Math.hypot(ye[0],ye[2]),fn=0;if(No>.15&&Le.dir&&W>0){let kr=[ye[0]/No,ye[2]/No];fn=(Le.dir[0]*kr[1]-Le.dir[1]*kr[0])/W,Le.dir=kr}else No>.15&&(Le.dir=[ye[0]/No,ye[2]/No]);Le.bank+=(Math.max(-.8,Math.min(.8,fn*.3))*cr-Le.bank)*Math.min(1,W*3),Le.rock+=W*(1.5+2.4*cr),Le.spin+=W*Tr*7*(.4+pt);let xa=Math.sin(Le.rock)*(.26+.45*pt)*(1-.5*Tr)+Le.bank+Le.spin,ws=Math.sin(Le.rock*.63+1)*(.16+.3*pt)+(uo.swing||0)*.9,Ja=Math.cos(xa),_s=Math.sin(xa),ff=vo(Gr(Xo,Ja),Gr(Ia,_s)),C0=vo(Gr(Ia,Ja),Gr(Xo,-_s));Ja=Math.cos(ws),_s=Math.sin(ws);let vi=vo(Gr(_o,Ja),Gr(ff,_s)),Ic=vo(Gr(ff,Ja),Gr(_o,-_s)),d1=Math.sin(Le.rock+1.5708)*.035*(.3+pt)*(1-.5*cr),d0=vo(ve,Gr(Ia,d1)),$c=[vi[0],vi[1],vi[2],0,Ic[0],Ic[1],Ic[2],0,C0[0],C0[1],C0[2],0,d0[0],d0[1],d0[2],1];for(let kr=0;kr<16;kr++)ne[kr]=$c[kr];Le.fresh=!1}return uo.phase!=="fly"&&(Le.prev=null,Le.vel=[0,0,0],Le.fresh=!0,Le.spin=0,Le.bank=0,Le.dir=null),{visible:!0,model:ne}}function ma(W){for(let pt in c1)Ie[pt]=W[pt]!==void 0?W[pt]:c1[pt]}function u0(W,pt){if(W<=1)return{phase:"home",pos:Ac.slice(),tumble:0};let ne=R5[W];if(ne){let ve=ne.amp;return{phase:"fly",pos:vo(ne.pos(),[Math.sin(pt*.55)*ve[0],Math.sin(pt*.8)*ve[1],(1-Math.cos(pt*.45))*ve[2]]),tumble:ne.tumble}}return{phase:"floor",pos:(W>=18?ms:W>=10?of:Qa).slice(),tumble:0}}let fo=0,ko=null;function Gn(W){let pt=Math.min(.1,Math.max(0,W-fo));if(fo=W,k=W,go||(go=!0,ke.start=W),Be)return null;if(Ce&&(Ce.t+=pt,Ce.t>=.7&&(Ce=null,_e=!0,ft.start(Fe,Object.assign({},c1,{fade:1,fadeColor:[0,0,0]})))),ft.active){let No=ft.update(pt);return no=No.camera,ma(No.look),o&&window.__camOverride&&(no=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ie,window.__lookOverride),{camera:no,walker:null,door:1,look:Ie,leaf:jo(pt)}}if(!Ee&&!Xt&&k-te>Ft){let No=mo(ct);Math.abs(st[No]-ct)<ge&&(ct=st[No])}let ne=ct-pe;if(Ee){let fn=Math.sign(ne)*Math.min(wt,Math.sqrt(2*Me*Math.abs(ne)))-oe;oe+=Math.sign(fn)*Math.min(Math.abs(fn),Me*pt),pe+=oe*pt,(ne>0&&pe>=ct||ne<0&&pe<=ct||Math.abs(ct-pe)<1e-4)&&(pe=ct,oe=0,Ee=!1)}else{let No=bE(pe,ct,oe,Lt,pt,3);pe=No[0],oe=No[1],Math.abs(ct-pe)<1e-4&&Math.abs(oe)<.001&&(pe=ct,oe=0)}let ve=0;for(;ve<Jd.length-1&&pe>=st[ve+1];)ve++;let ye=Jd[ve],sn=ea((pe-st[ve])/ye.dur),cr=vs[ve],Tr=vs[ve+1],cn=mo(pe);cn!==Zt&&(Zt=cn,so=0);let Mr=Math.abs(pe-st[cn])<.02;Mr&&(so+=pt);let ln=1-Vt(0,1.2,Math.abs(pe-st[cn])),_o=ye.leaf(sn);if(_o.pos?uo=Object.assign({},_o):uo=Object.assign({},_o,{pos:_o.phase==="home"?Ac.slice():(ve>=10?of:Qa).slice()}),R5[cn]&&ln>0){let No=u0(cn,so);uo.pos=Yo(uo.pos,No.pos,ln)}let Zn=ye.walker&&(sn>.01||ve===6)?ye.walker(sn):null;ko=Zn==null?null:{x:Zn,z:tp,heading:Math.PI/2,phase:(Zn-P5)/EE};let Ko=ye.cam(sn,cr.cam(0),Tr.cam(0),uo);if(ln>0&&so>0){let No=vs[cn],fn=No.cam(0),xa=No.cam(so);Ko=lo(vo(Ko.eye,Gr(Qd(xa.eye,fn.eye),ln)),vo(Ko.target,Gr(Qd(xa.target,fn.target),ln)),Ko.fov+(xa.fov-fn.fov)*ln,Ko.roll+(xa.roll-fn.roll)*ln)}if(ln>0&&!kt){let No=k,fn=.006*ln,xa=Math.sin(No*.61)*.6+Math.sin(No*1.37+1.3)*.4,ws=Math.sin(No*.47+2.1)*.6+Math.sin(No*1.13+.4)*.4,Ja=Math.sin(No*.53+4)*.5+Math.sin(No*.97+2.6)*.5;Ko=lo(vo(Ko.eye,[xa*fn,ws*fn*.7,Ja*fn]),vo(Ko.target,[ws*fn*1.8,xa*fn*1.4,0]),Ko.fov,Ko.roll+Ja*.0012*ln)}no=Ko;let Hn=s1(ve),Br=s1(ve+1),jr=Object.assign({},Hn,ye.look(sn,Hn,Br,uo,Ko.eye));if(ln>0){let No=s1(cn);for(let fn in No)typeof No[fn]=="number"&&(jr[fn]=Qt(jr[fn],No[fn],ln))}ma(jr);let ga=Mr&&Math.abs(ct-pe)<.02?cn:-1;ga!==le&&(ga>=0&&(pi=k+it),le=ga,ga>=0?Ho(ga):ir()),h.querySelectorAll("i").forEach((No,fn)=>No.classList.toggle("on",fn===cn));let kn=le>=0?H[le]:null;kn&&kn.fill&&!kn.filled&&(kn.fill(),kn.filled&&(kn.classList.remove("on"),kn.offsetWidth,kn.classList.add("on")));let Ia=ea((W-ke.start)/2.6);return Ia<1&&(Ie.fade=Math.max(Ie.fade,1-Vt(0,1,Ia)),Ie.fadeColor=[0,0,0]),o&&window.__camOverride&&(no=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ie,window.__lookOverride),{camera:no,walker:ko,door:ye.door?ye.door(sn):ve>=12?1:0,look:Ce?Object.assign(Ie,{fade:Math.max(Ie.fade||0,ea(Ce.t/.6)),fadeColor:[0,0,0]}):Ie,leaf:jo(pt)}}return o&&(window.__tour={go:Ht,exit:qe,wind:Z,confess(){ir(),le=-2,ft.start(no,Ie)},note:()=>je(),conf:ft,paper:Jh().STATE,seek(W,pt){pe=ct=st[W]+(st[W+1]-st[W])*pt,oe=0,Ee=!1,te=k+1e6,ke.start=k-10,go=!0},jump(W){pe=ct=st[W],oe=0,Ee=!1,so=0,te=k,ke.start=k-10,go=!0},state:()=>({current:mo(pe),scroll:+pe.toFixed(3),target:+ct.toFixed(3),shown:le,move:Math.abs(ct-pe)>.02?{p:pe}:null,camNow:no,leaf:uo,look:Ie})}),{update:Gn,get active(){return Pe&&!Be},handover(W){if(!Be)return null;let pt=ea((W-Be.start)/1.8);return pt>=1?(Pe=!1,null):{from:Be.fromCam,fromLook:Be.fromLook,k:Mn(pt)}},restingDoor:()=>$e,restingLeaf(){return eo?(uo=eo,jo(0)):null},mix:fi,cam:lo}}});var PE=gm(),Za=wa(),xp=hu(),u1=Za.reflection,IE=!1,tb=(t,e,o,n,r)=>n+(t-e)*(r-n)/(o-e),yp=()=>tb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(yp=()=>tb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var eb=()=>2*Math.atan(Math.tan(yp()*.5)*window.innerHeight/window.innerWidth),$E=Lm(),sf=new $E;sf.showPanel(0);IE&&document.body.appendChild(sf.dom);var xn,Pc,fp,Rc,hp,gn;function FE(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!FE())throw PE.finish(),xp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");xn=Nm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Za.pixelRatio});location.hash==="#list"&&xp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&xp.show(!1)});Pc=g2()();var qE=Hu();fp=qE(xn,Pc,u1);Rc=$g()(xn,Pc);hp=Gg()(xn);var F5=n3()(xn,Pc),q5=p3()(xn),D5=g3()(xn),G5=O3()(xn),H5=q3()(xn),U5=B3()(xn),ys=ax()(xn),up=bd(),ob=Bf(),DE=sl(),dp=_d(),pp=or(),Dn=Mh(),vp=vx(),nb=Gh(),{A:Nc}=ka();gn=Qy()(Pc,eb);var Cc=t5()(xn,Za),gs=a5()(xn),B5=i5()(xn),GE=f5()(xn,Za),HE=m5()(xn,Za),j5=B0()(xn),W5=Jh()(xn),V5=V0()(xn),X5=Z0()(xn),h0=$5()({fps:gn,paintings:()=>Rc.interactables(),avatar:ys,onExit:()=>gn.setPaused(!1)});gn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Cc);var xs=[],Oc=[],_r=[7,2,1.6];Pc.viewer=_r;var UE=xn({cull:{enable:!0,face:"back"},uniforms:{view:()=>xs,proj:()=>Oc,yScale:1,mirrorOn:()=>u1?1:0,night:()=>pp.night,time:xn.context("time")}}),BE=xn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),rb=document.createElement("style");rb.textContent=`

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
`;document.head.appendChild(rb);var Pa=document.createElement("button");Pa.className="painting-plaque";Pa.type="button";Pa.setAttribute("aria-label","Read painting");document.body.appendChild(Pa);var Ur=document.createElement("div");Ur.className="story-overlay";Ur.innerHTML=`

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

		${ob.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Ur);var bs=document.createElement("div");bs.className="museum-links";bs.innerHTML=ob.icons("museum-link");bs.insertBefore(jd()("museum-link"),bs.firstChild);bs.insertBefore(nb.button("museum-link"),bs.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>bs.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(bs);var jE=Ur.querySelector("#story-title"),WE=Ur.querySelector("#story-body"),Y5=Ur.querySelector("#story-meta"),VE=Ur.querySelector(".story-contact"),af=Ur.querySelector(".story-visit");af.addEventListener("click",t=>{t.target.closest(".visit-btn")&&di&&dp.open(di)});var XE=Ur.querySelector(".story-close"),di=null,oa={p:0,target:0,last:0},ab={title:up.title,description:up.text,isAbout:!0},N0=null;function bp(t){t&&(di=t,jE.textContent=t.title||"",WE.textContent=t.description||"",Y5.textContent=t.isAbout?"":DE(t),Y5.hidden=!!t.isAbout,VE.hidden=!t.isAbout,af.innerHTML=t.isAbout?"":dp.button(t),af.hidden=!af.innerHTML,af.hidden||dp.warm(t),Ur.classList.toggle("about-mode",!!t.isAbout),Ur.classList.add("open"),oa.target=t.isAbout?1:0,N0=t,Pa.classList.remove("visible"),gn.setPaused(!0))}function wp(){Ur.classList.remove("open"),oa.target=0,di=null,N0=null,gn.setPaused(!1)}function sb(t){t&&(t.preventDefault(),t.stopPropagation()),N0&&bp(N0)}Pa.addEventListener("pointerup",sb,!0);Pa.addEventListener("touchend",sb,{passive:!1,capture:!0});Pa.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),di===null&&N0&&bp(N0)},!0);XE.addEventListener("click",wp);Ur.addEventListener("click",t=>{t.target===Ur&&wp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&Ur.classList.contains("open")&&wp()});function K5(t,e){let o=e[0],n=e[1],r=e[2];return[t[0]*o+t[4]*n+t[8]*r+t[12],t[1]*o+t[5]*n+t[9]*r+t[13],t[2]*o+t[6]*n+t[10]*r+t[14],t[3]*o+t[7]*n+t[11]*r+t[15]]}function YE(){if(di)return;if(h0.active){N0=null,Pa.classList.remove("visible");return}let t=Rc.interactables(),e=gn.forward[0],o=gn.forward[2],n=Math.hypot(e,o)||1,r=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-gn.pos[0],d=i[2]-gn.pos[2],h=-(l*c+d*f),v=Math.abs(l*f-d*c),u=-(e*c+o*f)/n,p=s.side==="end"?11:8,m=(s.width||2)/2;u>.9&&h>.5&&h<p&&v<m+.8&&h<a&&(r=s,a=h)}if(!r){let s=gn.pos[0],i=gn.pos[2];e/n>.85&&s<13.6&&i>Nc.z0-.5&&i<Nc.z1+.5&&(r=Object.assign({},ab,{plaqueTitle:up.name}))}r?(N0=r,Pa.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,Pa.classList.add("visible")):(N0=null,Pa.classList.remove("visible"))}var lf=tc();function KE(){let t=ys.state;if(!t||!t.glowPos)return null;let e=K5(gn.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=K5(gn.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var mp=null;window.addEventListener("pointerdown",t=>{mp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=mp;if(mp=null,!e||di||h0.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=KE();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:t.clientX,a=n?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),bp(ab))},!0);function QE(t){let e=Math.min(Math.max(t-oa.last,0),.1);oa.last=t;let o=e/1.6;if(oa.p=oa.target>oa.p?Math.min(1,oa.p+o):Math.max(0,oa.p-o),oa.p<=0)return;let n=oa.p<.5?2*oa.p*oa.p:1-Math.pow(-2*oa.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=ys.state,s=a&&a.hipsPos?a.hipsPos[0]:Nc.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:Nc.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=gn.pos,d=gn.forward,h=[l[0],l[1],l[2]],v=[l[0]+d[0],l[1]+d[1],l[2]+d[2]],u=(y,b)=>y.map((w,_)=>w+(b[_]-w)*n),p=[Nc.cx-6.2,1.7,Nc.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*p[b]+n*n*c[b]);lf.lookAt(gn.view(),g,u(v,f),[0,1,0])}var _p=/[?&]studio\b/.test(location.search);if(_p){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",e=>{gp.takes(e)||or().toggle()}),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&or().toggle()})}var gp=(()=>{let t={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},e=null,o=null,n=null,r=(c,f)=>{n&&(n.textContent=c,n.classList.add("on"),t.hintUntil=f?t.now+f:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),e=document.createElement("div"),e.className="koi-feed",e.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(e),o=e.querySelector(".koi-feed-btn"),n=e.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",f=>{f.stopPropagation(),t.mode==="idle"&&(t.mode="aim",t.holdAt=t.now-t.offset,t.since=t.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),r("Touch the water where it should fall"))})},s=(c,f)=>{let l=lf.multiply([],Oc,xs),d=lf.invert([],l);if(!d)return null;let h=c/window.innerWidth*2-1,v=1-f/window.innerHeight*2,u=[0,0,0,0];for(let p=0;p<4;p++)u[p]=d[p]*h+d[4+p]*v+d[8+p]*1+d[12+p];return[u[0]/u[3]-_r[0],u[1]/u[3]-_r[1],u[2]/u[3]-_r[2]]},i=()=>{t.holdAt!==null&&(t.offset=t.now-t.holdAt),t.holdAt=null,t.mode="idle",t.doneShot=t.lastShot,document.body.classList.remove("koi-aim"),n&&n.classList.remove("on")};return{time(c){return t.now=c,t.holdAt!==null?t.holdAt:c-t.offset},update(c){e||a(),c.shot!==t.lastShot&&(t.lastShot=c.shot);let f=Z0();t.mode==="idle"?o.classList.toggle("on",!!c.pond&&t.doneShot!==c.shot):t.mode==="aim"?t.now-t.since>40&&i():t.mode==="watch"&&(f.feeding()&&(t.fedTill=t.now),(t.now-t.fedTill>5&&t.now-t.since>8||t.now-t.since>60)&&i()),t.hintUntil&&t.now>t.hintUntil&&(n.classList.remove("on"),t.hintUntil=0)},takes(c){if(t.mode==="idle")return!1;let f=Z0(),l=s(c.clientX,c.clientY),d=l&&f.poolHit(_r,l);return d?(f.feedAt(d[0],d[1]),t.fedTill=t.now,t.mode==="aim"&&r("and they come, like embers through the dark",5),t.mode="watch",t.since=t.now,document.body.classList.remove("koi-aim"),!0):(t.mode==="aim"&&r("Upon the water, there\u2026"),!0)}}})(),hi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},ui=null,cf=!1,f1=!1;function ZE(t,e,o,n){let r=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),f=Math.sin(n);return lf.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function JE(t){let e=window.innerWidth/window.innerHeight,o=Cc.shot,n=h0.active?h0.update(t):null,r=n?null:h0.handover(t),a=null,s=hi;if(n){a=n.camera,s=n.look,ui=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;ys.setWalk(i),cf=!!i,gs.setOpen(n.door||0)}else ui=h0.restingLeaf(),ys.setWalk(null),cf=!1,gs.setOpen(h0.restingDoor());if(r){let i=gn.pos,c=gn.forward,f=h0.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],eb()*180/Math.PI,0);a=h0.mix(r.from,f,r.k),s={};for(let l in hi)s[l]=Array.isArray(hi[l])?hi[l]:r.fromLook[l]+(hi[l]-r.fromLook[l])*r.k}if(a&&n&&(a=vp.apply(a,t)),_p&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=Z0().previewCam(gp.time(t));gp.update(i),a=i,s=Object.assign({},hi,{fade:i.fade,focus:8})}if(a)ZE(xs,a.eye,a.target,a.roll||0),lf.perspective(Oc,a.fov*Math.PI/180,e,.1,700),_r[0]=a.eye[0],_r[1]=a.eye[1],_r[2]=a.eye[2];else{let i=gn.view(),c=gn.proj();for(let h=0;h<16;h++)xs[h]=i[h],Oc[h]=c[h];let f=i[12],l=i[13],d=i[14];_r[0]=-(i[0]*f+i[1]*l+i[2]*d),_r[1]=-(i[4]*f+i[5]*l+i[6]*d),_r[2]=-(i[8]*f+i[9]*l+i[10]*d)}for(let i in hi)o[i]=s[i];n&&vp.pull(o,t)}var va={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},ip=[9,9,9,9],Q5=[0,0,0,0],nf=0,cp=0,Lc=null,Z5=0,J5=0,rf=0;function tA(t){let e=Math.min(.1,Math.max(0,t-Z5));Z5=t,va.focus=Cc.shot.focus,va.aperture=Za.post>=2?Cc.shot.aperture:0;for(let s=0;s<4;s++)ip[s]+=e,va.wake[s][3]=Q5[s]*Math.exp(-ip[s]/1.1);let o=ui&&ui.visible?ui.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(Lc){let i=[s[0]-Lc[0],s[1]-Lc[1],s[2]-Lc[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let h=0;h<3;h++)va.wakeDir[h]+=(i[h]/c-va.wakeDir[h])*l;let d=Math.hypot(va.wakeDir[0],va.wakeDir[1],va.wakeDir[2])||1;for(let h=0;h<3;h++)va.wakeDir[h]/=d;if(cp+=e,cp>.14){cp=0;let h=va.wake[nf];h[0]=s[0],h[1]=s[1],h[2]=s[2],Q5[nf]=Math.min(1,(f-.12)/1.6)*.5,ip[nf]=0,nf=(nf+1)%4}}}Lc=s}else o||(Lc=null);let n=gs.openNow?gs.openNow():0,r=e>0?(n-J5)/e:0;J5=n;let a=Math.max(-1,Math.min(1,r*1.2));rf+=(a-rf)*Math.min(1,e*(Math.abs(a)>Math.abs(rf)?6:.7)),va.gust[0]+=rf*5.5*e,va.gust[1]=Math.abs(rf)}var lp=0,h1=!1;xn.frame(function({time:t}){if(document.body.classList.contains("visiting")){lp=0;return}sf.begin(),pp.tick(t);let e=h0.active&&vp.resting&&pp.settled&&(Za.isPhone||Za.scale<1||Za.level>0);if(e){if(h1=!h1,h1){sf.end();return}}else h1=!1;let o=t-lp;lp=t,Za.frame(e?o/2:o),u1=Za.reflection,gn.tick({time:t}),QE(t),Rc.update(gn.pos,gn.fmouse[1],yp()),YE(),JE(t),Dn.update(xs,Oc,_r),nb.listen(_r),(Dn.zone==="studio"||_p)&&Z0().listen(_r),f1=!cf&&Dn.room("stair")&&(!Dn.room("court")||_r[0]<.5||_r[2]>30),ys.setPiano(f1),tA(t),Cc.capture(arguments[0],{view:xs,proj:Oc,eye:_r},()=>{UE(()=>{u1&&Dn.floor&&BE(()=>{Dn.room("studio",!0)&&X5({reflected:!0}),Dn.zone!=="studio"&&(fp(),F5({reflected:!0}),j5(),Dn.room("stair",!0)&&(V5({reflected:!0}),W5({reflected:!0,view:xs})),Dn.room("court",!0)&&U5(),(f1||Dn.room("court",!0)||cf)&&ys(),hp(Rc.batch()),Dn.room("street",!0)&&q5(),Dn.room("garden",!0)&&G5(),Dn.room("florence",!0)&&H5(),B5(ui),gs(),D5(),gs.glass())}),Dn.room("studio")&&X5(),Dn.zone!=="studio"&&(fp(),F5(),j5(),Dn.room("stair")&&(V5(),W5({view:xs})),Dn.room("court")&&U5(),(f1||Dn.room("court")||cf)&&ys(),hp(Rc.batch()),Dn.room("street")&&q5(),Dn.room("garden")&&(G5(),HE()),Dn.room("florence")&&H5(),B5(ui),gs(),GE(va),D5(),gs.glass())})}),Cc.present(),sf.end()});})();
