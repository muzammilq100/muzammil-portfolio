"use strict";(()=>{var bt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var dm=bt((tA,um)=>{"use strict";var Ni=document.getElementById("loader"),Li=Ni&&Ni.querySelector(".loader-name"),tl=0,$f=0,Ff=!1,w4=performance.now(),Ri=.06,zi=0,ru=0,im=!1,_4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function M4(t){if(!Li)return;let e=Li.offsetWidth||1,n=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Li.style.webkitMaskPosition=n,Li.style.maskPosition=n}function fm(t){let e=Math.min(.05,ru?(t-ru)/1e3:.016);ru=t;let o=Ff?.75:.22+(Ri-zi)*1.2;if(zi=Math.min(Ri,zi+Math.max(0,o)*e),_4&&(zi=Ri),M4(zi),Ff&&zi>=.999){im||(im=!0,setTimeout(hm,650));return}requestAnimationFrame(fm)}Li&&requestAnimationFrame(fm);function cm(){let t=tl?$f/Math.max(tl,24):0;Ri=Math.max(Ri,Math.min(.9,.06+t*.84))}function hm(){Ni&&(Ni.classList.add("done"),setTimeout(()=>Ni.remove(),1400))}function au(){Ff||(Ff=!0,window.__galleryReady=!0,Ni&&(Ri=1,Li||hm()))}var lm=null;function k4(){clearTimeout(lm),$f>=tl&&performance.now()-w4>600&&(lm=setTimeout(()=>{$f>=tl&&au()},450))}setTimeout(au,2e4);var S4=t=>/(^|\/)(res|images)\//.test(t),If=window.fetch.bind(window);async function E4(t,e){let o=await If(t+".gz",e);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!S4(o))return If(t,e);tl++,cm();let n=a=>($f++,cm(),k4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=E4(o,e).catch(()=>If(t,e)):r=If(t,e),r.then(n,a=>{throw n(),a})};um.exports={finish:au}});var b0=bt((eA,gm)=>{"use strict";var pm=typeof navigator!="undefined"&&navigator.userAgent||"",A4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,pa=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(pm)||/Macintosh/.test(pm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||A4,vm=typeof window!="undefined"&&window.devicePixelRatio||1,Mo={isPhone:pa,pixelRatio:pa?Math.min(vm,1.5):Math.min(vm,2),reflection:!pa,gardenDetail:pa?0:1,leafShare:pa?.65:1,motion:!pa,post:pa?1:2,level:pa?1:0};Mo.scale=1;var T4=pa?.55:.6,el=0,qf=0,ol=0,nl=0,Ci=1,rl=0,Df=48,Oi=null,su=0;function z4(t){Oi={fps:t,scale:Mo.scale},Mo.scale>.86?Mo.scale=.85:Mo.reflection?Mo.stepDown():Mo.scale>.71?Mo.scale=.7:Mo.stepDown()||(Mo.scale=Math.max(T4,Mo.scale-.1))}var mm=!0;try{/[?&]noadapt\b/.test(location.search)&&(mm=!1)}catch(t){}Mo.frame=t=>{if(!mm)return;if(!(t>0)||t>1){el=0,qf=0;return}if(el+=t,qf++,el<.75)return;let e=qf/el;if(el=0,qf=0,rl>0&&(rl-=.75,rl<=0&&(Ci=1)),Oi){if(e<Oi.fps*1.08&&Oi.scale>Mo.scale){if(++su>=2){Mo.scale=1,Ci=1,rl=0,Df=Math.min(Df,e*.85),su=0,ol=0,Oi=null;return}}else su=0;Oi=null}if(e<Df){if(nl=0,++ol>=2){if(ol=0,Mo.scale>.61&&Mo.climbed){Ci=Mo.scale-.05,rl=40,Mo.scale=Ci,Mo.climbed=!1;return}z4(e)}}else e>Math.max(Df*1.15,55)?(ol=0,++nl>=6&&Mo.scale<Ci-.001?(Mo.scale=Math.min(Ci,Mo.scale+.05),Mo.climbed=!0,nl=0):nl>=6&&(Mo.climbed=!1)):(ol=0,nl=0)};Mo.stepDown=()=>{if(Mo.reflection)Mo.reflection=!1;else if(Mo.gardenDetail>0||Mo.motion)Mo.gardenDetail=0,Mo.motion=!1,Mo.leafShare=Math.min(Mo.leafShare,.65);else if(Mo.post>0)Mo.post--;else return!1;return Mo.level++,!0};gm.exports=Mo});var iu=bt((oA,xm)=>{"use strict";xm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Gf=bt((nA,wm)=>{"use strict";var Nr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},ym='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',bm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Nr.instagramUrl="https://instagram.com/"+Nr.instagram;Nr.mailUrl="mailto:"+Nr.email+"?subject="+encodeURIComponent("Your paintings");Nr.icons=t=>`
	<a class="${t}" href="${Nr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Nr.instagram}" title="Instagram">${ym}</a>
	<a class="${t}" href="${Nr.mailUrl}" aria-label="Email ${Nr.email}" title="Email">${bm}</a>`;Nr.line=t=>`
	<span class="${t}">
		<a href="${Nr.instagramUrl}" target="_blank" rel="noopener">${ym}<span>@${Nr.instagram}</span></a>
		<a href="${Nr.mailUrl}">${bm}<span>${Nr.email}</span></a>
	</span>`;wm.exports=Nr});var al=bt((rA,_m)=>{"use strict";_m.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var cu=bt((aA,Sm)=>{"use strict";var L4=iu(),N4=Gf(),Mm=al(),R4=b0(),$a=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),C4=`
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
`,Rr=null;function O4(t){if(Rr){Rr.hidden=!1,requestAnimationFrame(()=>Rr.classList.add("on"));return}let e=document.createElement("style");e.textContent=C4,document.head.appendChild(e);let o=!R4.isPhone;Rr=document.createElement("div"),Rr.className="plist",Rr.setAttribute("role","region"),Rr.setAttribute("aria-label","All paintings"),Rr.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${N4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${L4.map(r=>`
			<article class="plist-item" id="${$a(r.slug)}">
				<img loading="lazy" decoding="async" alt="${$a(r.title)}, ${$a(Mm(r))}"
					src="images/web/${$a(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${$a(r.file)}'">
				<p class="plist-meta">${$a(Mm(r))}</p>
				<h2>${$a(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${$a(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Rr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Rr.querySelector(".plist-close");n&&n.addEventListener("click",km),document.body.appendChild(Rr),requestAnimationFrame(()=>Rr.classList.add("on"))}function km(){Rr&&(Rr.classList.remove("on"),setTimeout(()=>{Rr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Sm.exports={show:O4,hide:km}});var Em=bt((lu,fu)=>{(function(t,e){typeof lu=="object"&&typeof fu!="undefined"?fu.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(lu,function(){var t=function(){function e(v){return r.appendChild(v.dom),v}function o(v){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===v?"block":"none";n=v}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(v){v.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var v=(performance||Date).now();if(f.update(v-a,200),v>s+1e3&&(c.update(1e3*i/(v-s),100),s=v,i=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return v},update:function(){a=this.end()},domElement:r,setMode:o}};return t.Panel=function(e,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,v=2*i,h=3*i,u=15*i,d=74*i,p=30*i,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(e,l,v),g.fillRect(h,u,d,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,u,d,p),{dom:m,update:function(x,b){r=Math.min(r,x),a=Math.max(a,x),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,u),g.fillStyle=o,g.fillText(s(x)+" "+e+" ("+s(r)+"-"+s(a)+")",l,v),g.drawImage(m,h+i,u,d-i,p,h,u,d-i,p),g.fillRect(h+d-i,u,i,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+d-i,u,i,s((1-x/b)*p))}}},t})});var Am=bt((hu,uu)=>{(function(t,e){typeof hu=="object"&&typeof uu!="undefined"?uu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(hu,function(){"use strict";var t=function(y){return y instanceof Uint8Array||y instanceof Uint16Array||y instanceof Uint32Array||y instanceof Int8Array||y instanceof Int16Array||y instanceof Int32Array||y instanceof Float32Array||y instanceof Float64Array||y instanceof Uint8ClampedArray},e=function(y,E){for(var C=Object.keys(E),at=0;at<C.length;++at)y[C[at]]=E[C[at]];return y},o=`
`;function n(y){return typeof atob!="undefined"?atob(y):"base64:"+y}function r(y){var E=new Error("(regl) "+y);throw console.error(E),E}function a(y,E){y||r(E)}function s(y){return y?": "+y:""}function i(y,E,C){y in E||r("unknown parameter ("+y+")"+s(C)+". possible values: "+Object.keys(E).join())}function c(y,E){t(y)||r("invalid parameter type"+s(E)+". must be a typed array")}function f(y,E){switch(E){case"number":return typeof y=="number";case"object":return typeof y=="object";case"string":return typeof y=="string";case"boolean":return typeof y=="boolean";case"function":return typeof y=="function";case"undefined":return typeof y=="undefined";case"symbol":return typeof y=="symbol"}}function l(y,E,C){f(y,E)||r("invalid parameter type"+s(C)+". expected "+E+", got "+typeof y)}function v(y,E){y>=0&&(y|0)===y||r("invalid parameter type, ("+y+")"+s(E)+". must be a nonnegative integer")}function h(y,E,C){E.indexOf(y)<0&&r("invalid value"+s(C)+". must be one of: "+E)}var u=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function d(y){Object.keys(y).forEach(function(E){u.indexOf(E)<0&&r('invalid regl constructor argument "'+E+'". must be one of '+u)})}function p(y,E){for(y=y+"";y.length<E;)y=" "+y;return y}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(y,E){this.number=y,this.line=E,this.errors=[]}function x(y,E,C){this.file=y,this.line=E,this.message=C}function b(){var y=new Error,E=(y.stack||y).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(E);if(C)return C[1];var at=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(E);return at?at[1]:"unknown"}function w(){var y=new Error,E=(y.stack||y).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(E);if(C)return C[1];var at=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(E);return at?at[1]:"unknown"}function _(y,E){var C=y.split(`
`),at=1,dt=0,nt={unknown:new m,0:new m};nt.unknown.name=nt[0].name=E||b(),nt.unknown.lines.push(new g(0,""));for(var ct=0;ct<C.length;++ct){var Mt=C[ct],Et=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Mt);if(Et)switch(Et[1]){case"line":var Nt=/(\d+)(\s+\d+)?/.exec(Et[2]);Nt&&(at=Nt[1]|0,Nt[2]&&(dt=Nt[2]|0,dt in nt||(nt[dt]=new m)));break;case"define":var At=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Et[2]);At&&(nt[dt].name=At[1]?n(At[2]):At[2]);break}nt[dt].lines.push(new g(at++,Mt))}return Object.keys(nt).forEach(function(Ct){var Bt=nt[Ct];Bt.lines.forEach(function(kt){Bt.index[kt.number]=kt})}),nt}function M(y){var E=[];return y.split(`
`).forEach(function(C){if(!(C.length<5)){var at=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);at?E.push(new x(at[1]|0,at[2]|0,at[3].trim())):C.length>0&&E.push(new x("unknown",0,C))}}),E}function A(y,E){E.forEach(function(C){var at=y[C.file];if(at){var dt=at.index[C.line];if(dt){dt.errors.push(C),at.hasErrors=!0;return}}y.unknown.hasErrors=!0,y.unknown.lines[0].errors.push(C)})}function I(y,E,C,at,dt){if(!y.getShaderParameter(E,y.COMPILE_STATUS)){var nt=y.getShaderInfoLog(E),ct=at===y.FRAGMENT_SHADER?"fragment":"vertex";H(C,"string",ct+" shader source must be a string",dt);var Mt=_(C,dt),Et=M(nt);A(Mt,Et),Object.keys(Mt).forEach(function(Nt){var At=Mt[Nt];if(!At.hasErrors)return;var Ct=[""],Bt=[""];function kt(Pt,Y){Ct.push(Pt),Bt.push(Y||"")}kt("file number "+Nt+": "+At.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),At.lines.forEach(function(Pt){if(Pt.errors.length>0){kt(p(Pt.number,4)+"|  ","background-color:yellow; font-weight:bold"),kt(Pt.line+o,"color:red; background-color:yellow; font-weight:bold");var Y=0;Pt.errors.forEach(function(lt){var Lt=lt.message,Xt=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Lt);if(Xt){var xt=Xt[1];switch(Lt=Xt[2],xt){case"assign":xt="=";break}Y=Math.max(Pt.line.indexOf(xt,Y),0)}else Y=0;kt(p("| ",6)),kt(p("^^^",Y+3)+o,"font-weight:bold"),kt(p("| ",6)),kt(Lt+o,"font-weight:bold")}),kt(p("| ",6)+o)}else kt(p(Pt.number,4)+"|  "),kt(Pt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Bt[0]=Ct.join("%c"),console.log.apply(console,Bt)):console.log(Ct.join(""))}),a.raise("Error compiling "+ct+" shader, "+Mt[0].name)}}function R(y,E,C,at,dt){if(!y.getProgramParameter(E,y.LINK_STATUS)){var nt=y.getProgramInfoLog(E),ct=_(C,dt),Mt=_(at,dt),Et='Error linking program with vertex shader, "'+Mt[0].name+'", and fragment shader "'+ct[0].name+'"';typeof document!="undefined"?console.log("%c"+Et+o+"%c"+nt,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Et+o+nt),a.raise(Et)}}function B(y){y._commandRef=b()}function D(y,E,C,at){B(y);function dt(Et){return Et?at.id(Et):0}y._fragId=dt(y.static.frag),y._vertId=dt(y.static.vert);function nt(Et,Nt){Object.keys(Nt).forEach(function(At){Et[at.id(At)]=!0})}var ct=y._uniformSet={};nt(ct,E.static),nt(ct,E.dynamic);var Mt=y._attributeSet={};nt(Mt,C.static),nt(Mt,C.dynamic),y._hasCount="count"in y.static||"count"in y.dynamic||"elements"in y.static||"elements"in y.dynamic}function Z(y,E){var C=w();r(y+" in command "+(E||b())+(C==="unknown"?"":" called from "+C))}function P(y,E,C){y||Z(E,C||b())}function j(y,E,C,at){y in E||Z("unknown parameter ("+y+")"+s(C)+". possible values: "+Object.keys(E).join(),at||b())}function H(y,E,C,at){f(y,E)||Z("invalid parameter type"+s(C)+". expected "+E+", got "+typeof y,at||b())}function J(y){y()}function V(y,E,C){y.texture?h(y.texture._texture.internalformat,E,"unsupported texture format for attachment"):h(y.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var st=33071,et=9728,mt=9984,Dt=9985,ne=9986,Se=9987,Zt=5120,Ue=5121,yo=5122,Bo=5123,ee=5124,be=5125,Pe=5126,ao=32819,_o=32820,Ie=33635,we=34042,_t=36193,le={};le[Zt]=le[Ue]=1,le[yo]=le[Bo]=le[_t]=le[Ie]=le[ao]=le[_o]=2,le[ee]=le[be]=le[Pe]=le[we]=4;function $e(y,E){return y===_o||y===ao||y===Ie?2:y===we?4:le[y]*E}function me(y){return!(y&y-1)&&!!y}function Jt(y,E,C){var at,dt=E.width,nt=E.height,ct=E.channels;a(dt>0&&dt<=C.maxTextureSize&&nt>0&&nt<=C.maxTextureSize,"invalid texture shape"),(y.wrapS!==st||y.wrapT!==st)&&a(me(dt)&&me(nt),"incompatible wrap mode for texture, both width and height must be power of 2"),E.mipmask===1?dt!==1&&nt!==1&&a(y.minFilter!==mt&&y.minFilter!==ne&&y.minFilter!==Dt&&y.minFilter!==Se,"min filter requires mipmap"):(a(me(dt)&&me(nt),"texture must be a square power of 2 to support mipmapping"),a(E.mipmask===(dt<<1)-1,"missing or incomplete mipmap data")),E.type===Pe&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(y.minFilter===et&&y.magFilter===et,"filter not supported, must enable oes_texture_float_linear"),a(!y.genMipmaps,"mipmap generation not supported with float textures"));var Mt=E.images;for(at=0;at<16;++at)if(Mt[at]){var Et=dt>>at,Nt=nt>>at;a(E.mipmask&1<<at,"missing mipmap data");var At=Mt[at];if(a(At.width===Et&&At.height===Nt,"invalid shape for mip images"),a(At.format===E.format&&At.internalformat===E.internalformat&&At.type===E.type,"incompatible type for mip image"),!At.compressed)if(At.data){var Ct=Math.ceil($e(At.type,ct)*Et/At.unpackAlignment)*At.unpackAlignment;a(At.data.byteLength===Ct*Nt,"invalid data for image, buffer size is inconsistent with image format")}else At.element||At.copy}else y.genMipmaps||a((E.mipmask&1<<at)===0,"extra mipmap data");E.compressed&&a(!y.genMipmaps,"mipmap generation for compressed images not supported")}function So(y,E,C,at){var dt=y.width,nt=y.height,ct=y.channels;a(dt>0&&dt<=at.maxTextureSize&&nt>0&&nt<=at.maxTextureSize,"invalid texture shape"),a(dt===nt,"cube map must be square"),a(E.wrapS===st&&E.wrapT===st,"wrap mode not supported by cube map");for(var Mt=0;Mt<C.length;++Mt){var Et=C[Mt];a(Et.width===dt&&Et.height===nt,"inconsistent cube map face shape"),E.genMipmaps&&(a(!Et.compressed,"can not generate mipmap for compressed textures"),a(Et.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Nt=Et.images,At=0;At<16;++At){var Ct=Nt[At];if(Ct){var Bt=dt>>At,kt=nt>>At;a(Et.mipmask&1<<At,"missing mipmap data"),a(Ct.width===Bt&&Ct.height===kt,"invalid shape for mip images"),a(Ct.format===y.format&&Ct.internalformat===y.internalformat&&Ct.type===y.type,"incompatible type for mip image"),Ct.compressed||(Ct.data?a(Ct.data.byteLength===Bt*kt*Math.max($e(Ct.type,ct),Ct.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Ct.element||Ct.copy)}}}}var S=e(a,{optional:J,raise:r,commandRaise:Z,command:P,parameter:i,commandParameter:j,constructor:d,type:l,commandType:H,isTypedArray:c,nni:v,oneOf:h,shaderError:I,linkError:R,callSite:w,saveCommandRef:B,saveDrawInfo:D,framebufferFormat:V,guessCommand:b,texture2D:Jt,textureCube:So}),co=0,Je=0,Eo=5,Oo=6;function bn(y,E){this.id=co++,this.type=y,this.data=E}function Ar(y){return y.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Kn(y){if(y.length===0)return[];var E=y.charAt(0),C=y.charAt(y.length-1);if(y.length>1&&E===C&&(E==='"'||E==="'"))return['"'+Ar(y.substr(1,y.length-2))+'"'];var at=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(y);if(at)return Kn(y.substr(0,at.index)).concat(Kn(at[1])).concat(Kn(y.substr(at.index+at[0].length)));var dt=y.split(".");if(dt.length===1)return['"'+Ar(y)+'"'];for(var nt=[],ct=0;ct<dt.length;++ct)nt=nt.concat(Kn(dt[ct]));return nt}function Q0(y){return"["+Kn(y).join("][")+"]"}function La(y,E){return new bn(y,Q0(E+""))}function hi(y){return typeof y=="function"&&!y._reglType||y instanceof bn}function ot(y,E){if(typeof y=="function")return new bn(Je,y);if(typeof y=="number"||typeof y=="boolean")return new bn(Eo,y);if(Array.isArray(y))return new bn(Oo,y.map((C,at)=>ot(C,E+"["+at+"]")));if(y instanceof bn)return y;S(!1,"invalid option type in uniform "+E)}var It={DynamicVariable:bn,define:La,isDynamic:hi,unbox:ot,accessor:Q0},Ht={next:typeof requestAnimationFrame=="function"?function(y){return requestAnimationFrame(y)}:function(y){return setTimeout(y,16)},cancel:typeof cancelAnimationFrame=="function"?function(y){return cancelAnimationFrame(y)}:clearTimeout},Ot=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function ue(){var y={"":0},E=[""];return{id:function(C){var at=y[C];return at||(at=y[C]=E.length,E.push(C),at)},str:function(C){return E[C]}}}function ze(y,E,C){var at=document.createElement("canvas");e(at.style,{border:0,margin:0,padding:0,top:0,left:0}),y.appendChild(at),y===document.body&&(at.style.position="absolute",e(y.style,{margin:0,padding:0}));function dt(){var Mt=window.innerWidth,Et=window.innerHeight;if(y!==document.body){var Nt=y.getBoundingClientRect();Mt=Nt.right-Nt.left,Et=Nt.bottom-Nt.top}at.width=C*Mt,at.height=C*Et,e(at.style,{width:Mt+"px",height:Et+"px"})}var nt;y!==document.body&&typeof ResizeObserver=="function"?(nt=new ResizeObserver(function(){setTimeout(dt)}),nt.observe(y)):window.addEventListener("resize",dt,!1);function ct(){nt?nt.disconnect():window.removeEventListener("resize",dt),y.removeChild(at)}return dt(),{canvas:at,onDestroy:ct}}function Ee(y,E){function C(at){try{return y.getContext(at,E)}catch(dt){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function ge(y){return typeof y.nodeName=="string"&&typeof y.appendChild=="function"&&typeof y.getBoundingClientRect=="function"}function qe(y){return typeof y.drawArrays=="function"||typeof y.drawElements=="function"}function _e(y){return typeof y=="string"?y.split():(S(Array.isArray(y),"invalid extension array"),y)}function Ye(y){return typeof y=="string"?(S(typeof document!="undefined","not supported outside of DOM"),document.querySelector(y)):y}function Te(y){var E=y||{},C,at,dt,nt,ct={},Mt=[],Et=[],Nt=typeof window=="undefined"?1:window.devicePixelRatio,At=!1,Ct=function(Pt){Pt&&S.raise(Pt)},Bt=function(){};if(typeof E=="string"?(S(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(E),S(C,"invalid query string for element")):typeof E=="object"?ge(E)?C=E:qe(E)?(nt=E,dt=nt.canvas):(S.constructor(E),"gl"in E?nt=E.gl:"canvas"in E?dt=Ye(E.canvas):"container"in E&&(at=Ye(E.container)),"attributes"in E&&(ct=E.attributes,S.type(ct,"object","invalid context attributes")),"extensions"in E&&(Mt=_e(E.extensions)),"optionalExtensions"in E&&(Et=_e(E.optionalExtensions)),"onDone"in E&&(S.type(E.onDone,"function","invalid or missing onDone callback"),Ct=E.onDone),"profile"in E&&(At=!!E.profile),"pixelRatio"in E&&(Nt=+E.pixelRatio,S(Nt>0,"invalid pixel ratio"))):S.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?dt=C:at=C),!nt){if(!dt){S(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var kt=ze(at||document.body,Ct,Nt);if(!kt)return null;dt=kt.canvas,Bt=kt.onDestroy}ct.premultipliedAlpha===void 0&&(ct.premultipliedAlpha=!0),nt=Ee(dt,ct)}return nt?{gl:nt,canvas:dt,container:at,extensions:Mt,optionalExtensions:Et,pixelRatio:Nt,profile:At,onDone:Ct,onDestroy:Bt}:(Bt(),Ct("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Le(y,E){var C={};function at(ct){S.type(ct,"string","extension name must be string");var Mt=ct.toLowerCase(),Et;try{Et=C[Mt]=y.getExtension(Mt)}catch(Nt){}return!!Et}for(var dt=0;dt<E.extensions.length;++dt){var nt=E.extensions[dt];if(!at(nt))return E.onDestroy(),E.onDone('"'+nt+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return E.optionalExtensions.forEach(at),{extensions:C,restore:function(){Object.keys(C).forEach(function(ct){if(C[ct]&&!at(ct))throw new Error("(regl): error restoring extension "+ct)})}}}function Qe(y,E){for(var C=Array(y),at=0;at<y;++at)C[at]=E(at);return C}var xe=5120,lo=5121,No=5122,Me=5123,Go=5124,v0=5125,fa=5126;function no(y){for(var E=16;E<=1<<28;E*=16)if(y<=E)return E;return 0}function mo(y){var E,C;return E=(y>65535)<<4,y>>>=E,C=(y>255)<<3,y>>>=C,E|=C,C=(y>15)<<2,y>>>=C,E|=C,C=(y>3)<<1,y>>>=C,E|=C,E|y>>1}function $n(){var y=Qe(8,function(){return[]});function E(nt){var ct=no(nt),Mt=y[mo(ct)>>2];return Mt.length>0?Mt.pop():new ArrayBuffer(ct)}function C(nt){y[mo(nt.byteLength)>>2].push(nt)}function at(nt,ct){var Mt=null;switch(nt){case xe:Mt=new Int8Array(E(ct),0,ct);break;case lo:Mt=new Uint8Array(E(ct),0,ct);break;case No:Mt=new Int16Array(E(2*ct),0,ct);break;case Me:Mt=new Uint16Array(E(2*ct),0,ct);break;case Go:Mt=new Int32Array(E(4*ct),0,ct);break;case v0:Mt=new Uint32Array(E(4*ct),0,ct);break;case fa:Mt=new Float32Array(E(4*ct),0,ct);break;default:return null}return Mt.length!==ct?Mt.subarray(0,ct):Mt}function dt(nt){C(nt.buffer)}return{alloc:E,free:C,allocType:at,freeType:dt}}var X=$n();X.zero=$n();var vt=3408,Yt=3410,fe=3411,de=3412,nn=3413,sr=3414,Tr=3415,rn=33901,br=33902,an=3379,po=3386,Qn=34921,Vo=36347,Fn=36348,Br=35661,Ur=35660,jo=34930,m0=36349,wn=34076,O0=34024,Ao=7936,sn=7937,g0=7938,ms=35724,Z0=34047,gs=36063,sf=34852,Na=3553,ui=34067,Pc=34069,f1=33984,ha=6408,Ic=5126,wr=5121,$c=36160,xs=36053,nb=36064,rb=16384,ab=function(y,E){var C=1;E.ext_texture_filter_anisotropic&&(C=y.getParameter(Z0));var at=1,dt=1;E.webgl_draw_buffers&&(at=y.getParameter(sf),dt=y.getParameter(gs));var nt=!!E.oes_texture_float;if(nt){var ct=y.createTexture();y.bindTexture(Na,ct),y.texImage2D(Na,0,ha,1,1,0,ha,Ic,null);var Mt=y.createFramebuffer();if(y.bindFramebuffer($c,Mt),y.framebufferTexture2D($c,nb,Na,ct,0),y.bindTexture(Na,null),y.checkFramebufferStatus($c)!==xs)nt=!1;else{y.viewport(0,0,1,1),y.clearColor(1,0,0,1),y.clear(rb);var Et=X.allocType(Ic,4);y.readPixels(0,0,1,1,ha,Ic,Et),y.getError()?nt=!1:(y.deleteFramebuffer(Mt),y.deleteTexture(ct),nt=Et[0]===1),X.freeType(Et)}}var Nt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),At=!0;if(!Nt){var Ct=y.createTexture(),Bt=X.allocType(wr,36);y.activeTexture(f1),y.bindTexture(ui,Ct),y.texImage2D(Pc,0,ha,3,3,0,ha,wr,Bt),X.freeType(Bt),y.bindTexture(ui,null),y.deleteTexture(Ct),At=!y.getError()}return{colorBits:[y.getParameter(Yt),y.getParameter(fe),y.getParameter(de),y.getParameter(nn)],depthBits:y.getParameter(sr),stencilBits:y.getParameter(Tr),subpixelBits:y.getParameter(vt),extensions:Object.keys(E).filter(function(kt){return!!E[kt]}),maxAnisotropic:C,maxDrawbuffers:at,maxColorAttachments:dt,pointSizeDims:y.getParameter(rn),lineWidthDims:y.getParameter(br),maxViewportDims:y.getParameter(po),maxCombinedTextureUnits:y.getParameter(Br),maxCubeMapSize:y.getParameter(wn),maxRenderbufferSize:y.getParameter(O0),maxTextureUnits:y.getParameter(jo),maxTextureSize:y.getParameter(an),maxAttributes:y.getParameter(Qn),maxVertexUniforms:y.getParameter(Vo),maxVertexTextureUnits:y.getParameter(Ur),maxVaryingVectors:y.getParameter(Fn),maxFragmentUniforms:y.getParameter(m0),glsl:y.getParameter(ms),renderer:y.getParameter(sn),vendor:y.getParameter(Ao),version:y.getParameter(g0),readFloat:nt,npotTextureCube:At}};function P0(y){return!!y&&typeof y=="object"&&Array.isArray(y.shape)&&Array.isArray(y.stride)&&typeof y.offset=="number"&&y.shape.length===y.stride.length&&(Array.isArray(y.data)||t(y.data))}var o0=function(y){return Object.keys(y).map(function(E){return y[E]})},cf={shape:lb,flatten:cb};function sb(y,E,C){for(var at=0;at<E;++at)C[at]=y[at]}function ib(y,E,C,at){for(var dt=0,nt=0;nt<E;++nt)for(var ct=y[nt],Mt=0;Mt<C;++Mt)at[dt++]=ct[Mt]}function yp(y,E,C,at,dt,nt){for(var ct=nt,Mt=0;Mt<E;++Mt)for(var Et=y[Mt],Nt=0;Nt<C;++Nt)for(var At=Et[Nt],Ct=0;Ct<at;++Ct)dt[ct++]=At[Ct]}function bp(y,E,C,at,dt){for(var nt=1,ct=C+1;ct<E.length;++ct)nt*=E[ct];var Mt=E[C];if(E.length-C===4){var Et=E[C+1],Nt=E[C+2],At=E[C+3];for(ct=0;ct<Mt;++ct)yp(y[ct],Et,Nt,At,at,dt),dt+=nt}else for(ct=0;ct<Mt;++ct)bp(y[ct],E,C+1,at,dt),dt+=nt}function cb(y,E,C,at){var dt=1;if(E.length)for(var nt=0;nt<E.length;++nt)dt*=E[nt];else dt=0;var ct=at||X.allocType(C,dt);switch(E.length){case 0:break;case 1:sb(y,E[0],ct);break;case 2:ib(y,E[0],E[1],ct);break;case 3:yp(y,E[0],E[1],E[2],ct,0);break;default:bp(y,E,0,ct,0)}return ct}function lb(y){for(var E=[],C=y;C.length;C=C[0])E.push(C.length);return E}var h1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},fb=5120,hb=5122,ub=5124,db=5121,pb=5123,vb=5125,mb=5126,gb=5126,ys={int8:fb,int16:hb,int32:ub,uint8:db,uint16:pb,uint32:vb,float:mb,float32:gb},xb=35048,yb=35040,lf={dynamic:xb,stream:yb,static:35044},u1=cf.flatten,wp=cf.shape,_p=35044,bb=35040,d1=5121,p1=5126,Ra=[];Ra[5120]=1,Ra[5122]=2,Ra[5124]=4,Ra[5121]=1,Ra[5123]=2,Ra[5125]=4,Ra[5126]=4;function ff(y){return h1[Object.prototype.toString.call(y)]|0}function Mp(y,E){for(var C=0;C<E.length;++C)y[C]=E[C]}function kp(y,E,C,at,dt,nt,ct){for(var Mt=0,Et=0;Et<C;++Et)for(var Nt=0;Nt<at;++Nt)y[Mt++]=E[dt*Et+nt*Nt+ct]}function wb(y,E,C,at){var dt=0,nt={};function ct(Y){this.id=dt++,this.buffer=y.createBuffer(),this.type=Y,this.usage=_p,this.byteLength=0,this.dimension=1,this.dtype=d1,this.persistentData=null,C.profile&&(this.stats={size:0})}ct.prototype.bind=function(){y.bindBuffer(this.type,this.buffer)},ct.prototype.destroy=function(){Bt(this)};var Mt=[];function Et(Y,lt){var Lt=Mt.pop();return Lt||(Lt=new ct(Y)),Lt.bind(),Ct(Lt,lt,bb,0,1,!1),Lt}function Nt(Y){Mt.push(Y)}function At(Y,lt,Lt){Y.byteLength=lt.byteLength,y.bufferData(Y.type,lt,Lt)}function Ct(Y,lt,Lt,Xt,xt,Kt){var wt;if(Y.usage=Lt,Array.isArray(lt)){if(Y.dtype=Xt||p1,lt.length>0){var $t;if(Array.isArray(lt[0])){wt=wp(lt);for(var yt=1,Ft=1;Ft<wt.length;++Ft)yt*=wt[Ft];Y.dimension=yt,$t=u1(lt,wt,Y.dtype),At(Y,$t,Lt),Kt?Y.persistentData=$t:X.freeType($t)}else if(typeof lt[0]=="number"){Y.dimension=xt;var ye=X.allocType(Y.dtype,lt.length);Mp(ye,lt),At(Y,ye,Lt),Kt?Y.persistentData=ye:X.freeType(ye)}else t(lt[0])?(Y.dimension=lt[0].length,Y.dtype=Xt||ff(lt[0])||p1,$t=u1(lt,[lt.length,lt[0].length],Y.dtype),At(Y,$t,Lt),Kt?Y.persistentData=$t:X.freeType($t)):S.raise("invalid buffer data")}}else if(t(lt))Y.dtype=Xt||ff(lt),Y.dimension=xt,At(Y,lt,Lt),Kt&&(Y.persistentData=new Uint8Array(new Uint8Array(lt.buffer)));else if(P0(lt)){wt=lt.shape;var Fe=lt.stride,Ut=lt.offset,Rt=0,gt=0,Re=0,We=0;wt.length===1?(Rt=wt[0],gt=1,Re=Fe[0],We=0):wt.length===2?(Rt=wt[0],gt=wt[1],Re=Fe[0],We=Fe[1]):S.raise("invalid shape"),Y.dtype=Xt||ff(lt.data)||p1,Y.dimension=gt;var ae=X.allocType(Y.dtype,Rt*gt);kp(ae,lt.data,Rt,gt,Re,We,Ut),At(Y,ae,Lt),Kt?Y.persistentData=ae:X.freeType(ae)}else lt instanceof ArrayBuffer?(Y.dtype=d1,Y.dimension=xt,At(Y,lt,Lt),Kt&&(Y.persistentData=new Uint8Array(new Uint8Array(lt)))):S.raise("invalid buffer data")}function Bt(Y){E.bufferCount--,at(Y);var lt=Y.buffer;S(lt,"buffer must not be deleted already"),y.deleteBuffer(lt),Y.buffer=null,delete nt[Y.id]}function kt(Y,lt,Lt,Xt){E.bufferCount++;var xt=new ct(lt);nt[xt.id]=xt;function Kt(yt){var Ft=_p,ye=null,Fe=0,Ut=0,Rt=1;return Array.isArray(yt)||t(yt)||P0(yt)||yt instanceof ArrayBuffer?ye=yt:typeof yt=="number"?Fe=yt|0:yt&&(S.type(yt,"object","buffer arguments must be an object, a number or an array"),"data"in yt&&(S(ye===null||Array.isArray(ye)||t(ye)||P0(ye),"invalid data for buffer"),ye=yt.data),"usage"in yt&&(S.parameter(yt.usage,lf,"invalid buffer usage"),Ft=lf[yt.usage]),"type"in yt&&(S.parameter(yt.type,ys,"invalid buffer type"),Ut=ys[yt.type]),"dimension"in yt&&(S.type(yt.dimension,"number","invalid dimension"),Rt=yt.dimension|0),"length"in yt&&(S.nni(Fe,"buffer length must be a nonnegative integer"),Fe=yt.length|0)),xt.bind(),ye?Ct(xt,ye,Ft,Ut,Rt,Xt):(Fe&&y.bufferData(xt.type,Fe,Ft),xt.dtype=Ut||d1,xt.usage=Ft,xt.dimension=Rt,xt.byteLength=Fe),C.profile&&(xt.stats.size=xt.byteLength*Ra[xt.dtype]),Kt}function wt(yt,Ft){S(Ft+yt.byteLength<=xt.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+yt.byteLength+" starting from offset "+Ft+" to a buffer of size "+xt.byteLength),y.bufferSubData(xt.type,Ft,yt)}function $t(yt,Ft){var ye=(Ft||0)|0,Fe;if(xt.bind(),t(yt)||yt instanceof ArrayBuffer)wt(yt,ye);else if(Array.isArray(yt)){if(yt.length>0)if(typeof yt[0]=="number"){var Ut=X.allocType(xt.dtype,yt.length);Mp(Ut,yt),wt(Ut,ye),X.freeType(Ut)}else if(Array.isArray(yt[0])||t(yt[0])){Fe=wp(yt);var Rt=u1(yt,Fe,xt.dtype);wt(Rt,ye),X.freeType(Rt)}else S.raise("invalid buffer data")}else if(P0(yt)){Fe=yt.shape;var gt=yt.stride,Re=0,We=0,ae=0,to=0;Fe.length===1?(Re=Fe[0],We=1,ae=gt[0],to=0):Fe.length===2?(Re=Fe[0],We=Fe[1],ae=gt[0],to=gt[1]):S.raise("invalid shape");var De=Array.isArray(yt.data)?xt.dtype:ff(yt.data),Ke=X.allocType(De,Re*We);kp(Ke,yt.data,Re,We,ae,to,yt.offset),wt(Ke,ye),X.freeType(Ke)}else S.raise("invalid data for buffer subdata");return Kt}return Lt||Kt(Y),Kt._reglType="buffer",Kt._buffer=xt,Kt.subdata=$t,C.profile&&(Kt.stats=xt.stats),Kt.destroy=function(){Bt(xt)},Kt}function Pt(){o0(nt).forEach(function(Y){Y.buffer=y.createBuffer(),y.bindBuffer(Y.type,Y.buffer),y.bufferData(Y.type,Y.persistentData||Y.byteLength,Y.usage)})}return C.profile&&(E.getTotalBufferSize=function(){var Y=0;return Object.keys(nt).forEach(function(lt){Y+=nt[lt].stats.size}),Y}),{create:kt,createStream:Et,destroyStream:Nt,clear:function(){o0(nt).forEach(Bt),Mt.forEach(Bt)},getBuffer:function(Y){return Y&&Y._buffer instanceof ct?Y._buffer:null},restore:Pt,_initBuffer:Ct}}var _b=0,Mb=0,kb=1,Sb=1,Eb=4,Ab=4,di={points:_b,point:Mb,lines:kb,line:Sb,triangles:Eb,triangle:Ab,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Tb=0,zb=1,Fc=4,Lb=5120,pi=5121,Sp=5122,vi=5123,Ep=5124,bs=5125,v1=34963,Nb=35040,Rb=35044;function Cb(y,E,C,at){var dt={},nt=0,ct={uint8:pi,uint16:vi};E.oes_element_index_uint&&(ct.uint32=bs);function Mt(Pt){this.id=nt++,dt[this.id]=this,this.buffer=Pt,this.primType=Fc,this.vertCount=0,this.type=0}Mt.prototype.bind=function(){this.buffer.bind()};var Et=[];function Nt(Pt){var Y=Et.pop();return Y||(Y=new Mt(C.create(null,v1,!0,!1)._buffer)),Ct(Y,Pt,Nb,-1,-1,0,0),Y}function At(Pt){Et.push(Pt)}function Ct(Pt,Y,lt,Lt,Xt,xt,Kt){Pt.buffer.bind();var wt;if(Y){var $t=Kt;!Kt&&(!t(Y)||P0(Y)&&!t(Y.data))&&($t=E.oes_element_index_uint?bs:vi),C._initBuffer(Pt.buffer,Y,lt,$t,3)}else y.bufferData(v1,xt,lt),Pt.buffer.dtype=wt||pi,Pt.buffer.usage=lt,Pt.buffer.dimension=3,Pt.buffer.byteLength=xt;if(wt=Kt,!Kt){switch(Pt.buffer.dtype){case pi:case Lb:wt=pi;break;case vi:case Sp:wt=vi;break;case bs:case Ep:wt=bs;break;default:S.raise("unsupported type for element array")}Pt.buffer.dtype=wt}Pt.type=wt,S(wt!==bs||!!E.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var yt=Xt;yt<0&&(yt=Pt.buffer.byteLength,wt===vi?yt>>=1:wt===bs&&(yt>>=2)),Pt.vertCount=yt;var Ft=Lt;if(Lt<0){Ft=Fc;var ye=Pt.buffer.dimension;ye===1&&(Ft=Tb),ye===2&&(Ft=zb),ye===3&&(Ft=Fc)}Pt.primType=Ft}function Bt(Pt){at.elementsCount--,S(Pt.buffer!==null,"must not double destroy elements"),delete dt[Pt.id],Pt.buffer.destroy(),Pt.buffer=null}function kt(Pt,Y){var lt=C.create(null,v1,!0),Lt=new Mt(lt._buffer);at.elementsCount++;function Xt(xt){if(!xt)lt(),Lt.primType=Fc,Lt.vertCount=0,Lt.type=pi;else if(typeof xt=="number")lt(xt),Lt.primType=Fc,Lt.vertCount=xt|0,Lt.type=pi;else{var Kt=null,wt=Rb,$t=-1,yt=-1,Ft=0,ye=0;Array.isArray(xt)||t(xt)||P0(xt)?Kt=xt:(S.type(xt,"object","invalid arguments for elements"),"data"in xt&&(Kt=xt.data,S(Array.isArray(Kt)||t(Kt)||P0(Kt),"invalid data for element buffer")),"usage"in xt&&(S.parameter(xt.usage,lf,"invalid element buffer usage"),wt=lf[xt.usage]),"primitive"in xt&&(S.parameter(xt.primitive,di,"invalid element buffer primitive"),$t=di[xt.primitive]),"count"in xt&&(S(typeof xt.count=="number"&&xt.count>=0,"invalid vertex count for elements"),yt=xt.count|0),"type"in xt&&(S.parameter(xt.type,ct,"invalid buffer type"),ye=ct[xt.type]),"length"in xt?Ft=xt.length|0:(Ft=yt,ye===vi||ye===Sp?Ft*=2:(ye===bs||ye===Ep)&&(Ft*=4))),Ct(Lt,Kt,wt,$t,yt,Ft,ye)}return Xt}return Xt(Pt),Xt._reglType="elements",Xt._elements=Lt,Xt.subdata=function(xt,Kt){return lt.subdata(xt,Kt),Xt},Xt.destroy=function(){Bt(Lt)},Xt}return{create:kt,createStream:Nt,destroyStream:At,getElements:function(Pt){return typeof Pt=="function"&&Pt._elements instanceof Mt?Pt._elements:null},clear:function(){o0(dt).forEach(Bt)}}}var Ap=new Float32Array(1),Ob=new Uint32Array(Ap.buffer),Pb=5123;function Tp(y){for(var E=X.allocType(Pb,y.length),C=0;C<y.length;++C)if(isNaN(y[C]))E[C]=65535;else if(y[C]===1/0)E[C]=31744;else if(y[C]===-1/0)E[C]=64512;else{Ap[0]=y[C];var at=Ob[0],dt=at>>>31<<15,nt=(at<<1>>>24)-127,ct=at>>13&1023;if(nt<-24)E[C]=dt;else if(nt<-14){var Mt=-14-nt;E[C]=dt+(ct+1024>>Mt)}else nt>15?E[C]=dt+31744:E[C]=dt+(nt+15<<10)+ct}return E}function vn(y){return Array.isArray(y)||t(y)}var zp=function(y){return!(y&y-1)&&!!y},Ib=34467,J0=3553,m1=34067,hf=34069,ws=6408,g1=6406,uf=6407,qc=6409,df=6410,Lp=32854,x1=32855,Np=36194,$b=32819,Fb=32820,qb=33635,Db=34042,y1=6402,pf=34041,b1=35904,w1=35906,mi=36193,_1=33776,M1=33777,k1=33778,S1=33779,Rp=35986,Cp=35987,Op=34798,Pp=35840,Ip=35841,$p=35842,Fp=35843,qp=36196,gi=5121,E1=5123,A1=5125,Dc=5126,Gb=10242,Hb=10243,Bb=10497,T1=33071,Ub=33648,jb=10240,Wb=10241,z1=9728,Vb=9729,L1=9984,Dp=9985,Gp=9986,N1=9987,Xb=33170,vf=4352,Yb=4353,Kb=4354,Qb=34046,Zb=3317,Jb=37440,tw=37441,ew=37443,Hp=37444,Gc=33984,ow=[L1,Gp,Dp,N1],mf=[0,qc,df,uf,ws],x0={};x0[qc]=x0[g1]=x0[y1]=1,x0[pf]=x0[df]=2,x0[uf]=x0[b1]=3,x0[ws]=x0[w1]=4;function xi(y){return"[object "+y+"]"}var Bp=xi("HTMLCanvasElement"),Up=xi("OffscreenCanvas"),jp=xi("CanvasRenderingContext2D"),Wp=xi("ImageBitmap"),Vp=xi("HTMLImageElement"),Xp=xi("HTMLVideoElement"),nw=Object.keys(h1).concat([Bp,Up,jp,Wp,Vp,Xp]),yi=[];yi[gi]=1,yi[Dc]=4,yi[mi]=2,yi[E1]=2,yi[A1]=4;var ir=[];ir[Lp]=2,ir[x1]=2,ir[Np]=2,ir[pf]=4,ir[_1]=.5,ir[M1]=.5,ir[k1]=1,ir[S1]=1,ir[Rp]=.5,ir[Cp]=1,ir[Op]=1,ir[Pp]=.5,ir[Ip]=.25,ir[$p]=.5,ir[Fp]=.25,ir[qp]=.5;function Yp(y){return Array.isArray(y)&&(y.length===0||typeof y[0]=="number")}function Kp(y){if(!Array.isArray(y))return!1;var E=y.length;return!(E===0||!vn(y[0]))}function _s(y){return Object.prototype.toString.call(y)}function Qp(y){return _s(y)===Bp}function Zp(y){return _s(y)===Up}function rw(y){return _s(y)===jp}function aw(y){return _s(y)===Wp}function sw(y){return _s(y)===Vp}function iw(y){return _s(y)===Xp}function R1(y){if(!y)return!1;var E=_s(y);return nw.indexOf(E)>=0?!0:Yp(y)||Kp(y)||P0(y)}function Jp(y){return h1[Object.prototype.toString.call(y)]|0}function cw(y,E){var C=E.length;switch(y.type){case gi:case E1:case A1:case Dc:var at=X.allocType(y.type,C);at.set(E),y.data=at;break;case mi:y.data=Tp(E);break;default:S.raise("unsupported texture type, must specify a typed array")}}function tv(y,E){return X.allocType(y.type===mi?Dc:y.type,E)}function ev(y,E){y.type===mi?(y.data=Tp(E),X.freeType(E)):y.data=E}function lw(y,E,C,at,dt,nt){for(var ct=y.width,Mt=y.height,Et=y.channels,Nt=ct*Mt*Et,At=tv(y,Nt),Ct=0,Bt=0;Bt<Mt;++Bt)for(var kt=0;kt<ct;++kt)for(var Pt=0;Pt<Et;++Pt)At[Ct++]=E[C*kt+at*Bt+dt*Pt+nt];ev(y,At)}function gf(y,E,C,at,dt,nt){var ct;if(typeof ir[y]!="undefined"?ct=ir[y]:ct=x0[y]*yi[E],nt&&(ct*=6),dt){for(var Mt=0,Et=C;Et>=1;)Mt+=ct*Et*Et,Et/=2;return Mt}else return ct*C*at}function fw(y,E,C,at,dt,nt,ct){var Mt={"don't care":vf,"dont care":vf,nice:Kb,fast:Yb},Et={repeat:Bb,clamp:T1,mirror:Ub},Nt={nearest:z1,linear:Vb},At=e({mipmap:N1,"nearest mipmap nearest":L1,"linear mipmap nearest":Dp,"nearest mipmap linear":Gp,"linear mipmap linear":N1},Nt),Ct={none:0,browser:Hp},Bt={uint8:gi,rgba4:$b,rgb565:qb,"rgb5 a1":Fb},kt={alpha:g1,luminance:qc,"luminance alpha":df,rgb:uf,rgba:ws,rgba4:Lp,"rgb5 a1":x1,rgb565:Np},Pt={};E.ext_srgb&&(kt.srgb=b1,kt.srgba=w1),E.oes_texture_float&&(Bt.float32=Bt.float=Dc),E.oes_texture_half_float&&(Bt.float16=Bt["half float"]=mi),E.webgl_depth_texture&&(e(kt,{depth:y1,"depth stencil":pf}),e(Bt,{uint16:E1,uint32:A1,"depth stencil":Db})),E.webgl_compressed_texture_s3tc&&e(Pt,{"rgb s3tc dxt1":_1,"rgba s3tc dxt1":M1,"rgba s3tc dxt3":k1,"rgba s3tc dxt5":S1}),E.webgl_compressed_texture_atc&&e(Pt,{"rgb atc":Rp,"rgba atc explicit alpha":Cp,"rgba atc interpolated alpha":Op}),E.webgl_compressed_texture_pvrtc&&e(Pt,{"rgb pvrtc 4bppv1":Pp,"rgb pvrtc 2bppv1":Ip,"rgba pvrtc 4bppv1":$p,"rgba pvrtc 2bppv1":Fp}),E.webgl_compressed_texture_etc1&&(Pt["rgb etc1"]=qp);var Y=Array.prototype.slice.call(y.getParameter(Ib));Object.keys(Pt).forEach(function(N){var it=Pt[N];Y.indexOf(it)>=0&&(kt[N]=it)});var lt=Object.keys(kt);C.textureFormats=lt;var Lt=[];Object.keys(kt).forEach(function(N){var it=kt[N];Lt[it]=N});var Xt=[];Object.keys(Bt).forEach(function(N){var it=Bt[N];Xt[it]=N});var xt=[];Object.keys(Nt).forEach(function(N){var it=Nt[N];xt[it]=N});var Kt=[];Object.keys(At).forEach(function(N){var it=At[N];Kt[it]=N});var wt=[];Object.keys(Et).forEach(function(N){var it=Et[N];wt[it]=N});var $t=lt.reduce(function(N,it){var tt=kt[it];return tt===qc||tt===g1||tt===qc||tt===df||tt===y1||tt===pf||E.ext_srgb&&(tt===b1||tt===w1)?N[tt]=tt:tt===x1||it.indexOf("rgba")>=0?N[tt]=ws:N[tt]=uf,N},{});function yt(){this.internalformat=ws,this.format=ws,this.type=gi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Hp,this.width=0,this.height=0,this.channels=0}function Ft(N,it){N.internalformat=it.internalformat,N.format=it.format,N.type=it.type,N.compressed=it.compressed,N.premultiplyAlpha=it.premultiplyAlpha,N.flipY=it.flipY,N.unpackAlignment=it.unpackAlignment,N.colorSpace=it.colorSpace,N.width=it.width,N.height=it.height,N.channels=it.channels}function ye(N,it){if(!(typeof it!="object"||!it)){if("premultiplyAlpha"in it&&(S.type(it.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),N.premultiplyAlpha=it.premultiplyAlpha),"flipY"in it&&(S.type(it.flipY,"boolean","invalid texture flip"),N.flipY=it.flipY),"alignment"in it&&(S.oneOf(it.alignment,[1,2,4,8],"invalid texture unpack alignment"),N.unpackAlignment=it.alignment),"colorSpace"in it&&(S.parameter(it.colorSpace,Ct,"invalid colorSpace"),N.colorSpace=Ct[it.colorSpace]),"type"in it){var tt=it.type;S(E.oes_texture_float||!(tt==="float"||tt==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),S(E.oes_texture_half_float||!(tt==="half float"||tt==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),S(E.webgl_depth_texture||!(tt==="uint16"||tt==="uint32"||tt==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(tt,Bt,"invalid texture type"),N.type=Bt[tt]}var te=N.width,eo=N.height,z=N.channels,k=!1;"shape"in it?(S(Array.isArray(it.shape)&&it.shape.length>=2,"shape must be an array"),te=it.shape[0],eo=it.shape[1],it.shape.length===3&&(z=it.shape[2],S(z>0&&z<=4,"invalid number of channels"),k=!0),S(te>=0&&te<=C.maxTextureSize,"invalid width"),S(eo>=0&&eo<=C.maxTextureSize,"invalid height")):("radius"in it&&(te=eo=it.radius,S(te>=0&&te<=C.maxTextureSize,"invalid radius")),"width"in it&&(te=it.width,S(te>=0&&te<=C.maxTextureSize,"invalid width")),"height"in it&&(eo=it.height,S(eo>=0&&eo<=C.maxTextureSize,"invalid height")),"channels"in it&&(z=it.channels,S(z>0&&z<=4,"invalid number of channels"),k=!0)),N.width=te|0,N.height=eo|0,N.channels=z|0;var $=!1;if("format"in it){var W=it.format;S(E.webgl_depth_texture||!(W==="depth"||W==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(W,kt,"invalid texture format");var K=N.internalformat=kt[W];N.format=$t[K],W in Bt&&("type"in it||(N.type=Bt[W])),W in Pt&&(N.compressed=!0),$=!0}!k&&$?N.channels=x0[N.format]:k&&!$?N.channels!==mf[N.format]&&(N.format=N.internalformat=mf[N.channels]):$&&k&&S(N.channels===x0[N.format],"number of channels inconsistent with specified format")}}function Fe(N){y.pixelStorei(Jb,N.flipY),y.pixelStorei(tw,N.premultiplyAlpha),y.pixelStorei(ew,N.colorSpace),y.pixelStorei(Zb,N.unpackAlignment)}function Ut(){yt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Rt(N,it){var tt=null;if(R1(it)?tt=it:it&&(S.type(it,"object","invalid pixel data type"),ye(N,it),"x"in it&&(N.xOffset=it.x|0),"y"in it&&(N.yOffset=it.y|0),R1(it.data)&&(tt=it.data)),S(!N.compressed||tt instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),it.copy){S(!tt,"can not specify copy and data field for the same texture");var te=dt.viewportWidth,eo=dt.viewportHeight;N.width=N.width||te-N.xOffset,N.height=N.height||eo-N.yOffset,N.needsCopy=!0,S(N.xOffset>=0&&N.xOffset<te&&N.yOffset>=0&&N.yOffset<eo&&N.width>0&&N.width<=te&&N.height>0&&N.height<=eo,"copy texture read out of bounds")}else if(!tt)N.width=N.width||1,N.height=N.height||1,N.channels=N.channels||4;else if(t(tt))N.channels=N.channels||4,N.data=tt,!("type"in it)&&N.type===gi&&(N.type=Jp(tt));else if(Yp(tt))N.channels=N.channels||4,cw(N,tt),N.alignment=1,N.needsFree=!0;else if(P0(tt)){var z=tt.data;!Array.isArray(z)&&N.type===gi&&(N.type=Jp(z));var k=tt.shape,$=tt.stride,W,K,q,F,G,L;k.length===3?(q=k[2],L=$[2]):(S(k.length===2,"invalid ndarray pixel data, must be 2 or 3D"),q=1,L=1),W=k[0],K=k[1],F=$[0],G=$[1],N.alignment=1,N.width=W,N.height=K,N.channels=q,N.format=N.internalformat=mf[q],N.needsFree=!0,lw(N,z,F,G,L,tt.offset)}else if(Qp(tt)||Zp(tt)||rw(tt))Qp(tt)||Zp(tt)?N.element=tt:N.element=tt.canvas,N.width=N.element.width,N.height=N.element.height,N.channels=4;else if(aw(tt))N.element=tt,N.width=tt.width,N.height=tt.height,N.channels=4;else if(sw(tt))N.element=tt,N.width=tt.naturalWidth,N.height=tt.naturalHeight,N.channels=4;else if(iw(tt))N.element=tt,N.width=tt.videoWidth,N.height=tt.videoHeight,N.channels=4;else if(Kp(tt)){var O=N.width||tt[0].length,T=N.height||tt.length,U=N.channels;vn(tt[0][0])?U=U||tt[0][0].length:U=U||1;for(var Q=cf.shape(tt),ht=1,pt=0;pt<Q.length;++pt)ht*=Q[pt];var ft=tv(N,ht);cf.flatten(tt,Q,"",ft),ev(N,ft),N.alignment=1,N.width=O,N.height=T,N.channels=U,N.format=N.internalformat=mf[U],N.needsFree=!0}N.type===Dc?S(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):N.type===mi&&S(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function gt(N,it,tt){var te=N.element,eo=N.data,z=N.internalformat,k=N.format,$=N.type,W=N.width,K=N.height;Fe(N),te?y.texImage2D(it,tt,k,k,$,te):N.compressed?y.compressedTexImage2D(it,tt,z,W,K,0,eo):N.needsCopy?(at(),y.copyTexImage2D(it,tt,k,N.xOffset,N.yOffset,W,K,0)):y.texImage2D(it,tt,k,W,K,0,k,$,eo||null)}function Re(N,it,tt,te,eo){var z=N.element,k=N.data,$=N.internalformat,W=N.format,K=N.type,q=N.width,F=N.height;Fe(N),z?y.texSubImage2D(it,eo,tt,te,W,K,z):N.compressed?y.compressedTexSubImage2D(it,eo,tt,te,$,q,F,k):N.needsCopy?(at(),y.copyTexSubImage2D(it,eo,tt,te,N.xOffset,N.yOffset,q,F)):y.texSubImage2D(it,eo,tt,te,q,F,W,K,k)}var We=[];function ae(){return We.pop()||new Ut}function to(N){N.needsFree&&X.freeType(N.data),Ut.call(N),We.push(N)}function De(){yt.call(this),this.genMipmaps=!1,this.mipmapHint=vf,this.mipmask=0,this.images=Array(16)}function Ke(N,it,tt){var te=N.images[0]=ae();N.mipmask=1,te.width=N.width=it,te.height=N.height=tt,te.channels=N.channels=4}function bo(N,it){var tt=null;if(R1(it))tt=N.images[0]=ae(),Ft(tt,N),Rt(tt,it),N.mipmask=1;else if(ye(N,it),Array.isArray(it.mipmap))for(var te=it.mipmap,eo=0;eo<te.length;++eo)tt=N.images[eo]=ae(),Ft(tt,N),tt.width>>=eo,tt.height>>=eo,Rt(tt,te[eo]),N.mipmask|=1<<eo;else tt=N.images[0]=ae(),Ft(tt,N),Rt(tt,it),N.mipmask=1;Ft(N,N.images[0]),N.compressed&&(N.internalformat===_1||N.internalformat===M1||N.internalformat===k1||N.internalformat===S1)&&S(N.width%4===0&&N.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Mn(N,it){for(var tt=N.images,te=0;te<tt.length;++te){if(!tt[te])return;gt(tt[te],it,te)}}var qn=[];function so(){var N=qn.pop()||new De;yt.call(N),N.mipmask=0;for(var it=0;it<16;++it)N.images[it]=null;return N}function Ln(N){for(var it=N.images,tt=0;tt<it.length;++tt)it[tt]&&to(it[tt]),it[tt]=null;qn.push(N)}function Xo(){this.minFilter=z1,this.magFilter=z1,this.wrapS=T1,this.wrapT=T1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=vf}function kn(N,it){if("min"in it){var tt=it.min;S.parameter(tt,At),N.minFilter=At[tt],ow.indexOf(N.minFilter)>=0&&!("faces"in it)&&(N.genMipmaps=!0)}if("mag"in it){var te=it.mag;S.parameter(te,Nt),N.magFilter=Nt[te]}var eo=N.wrapS,z=N.wrapT;if("wrap"in it){var k=it.wrap;typeof k=="string"?(S.parameter(k,Et),eo=z=Et[k]):Array.isArray(k)&&(S.parameter(k[0],Et),S.parameter(k[1],Et),eo=Et[k[0]],z=Et[k[1]])}else{if("wrapS"in it){var $=it.wrapS;S.parameter($,Et),eo=Et[$]}if("wrapT"in it){var W=it.wrapT;S.parameter(W,Et),z=Et[W]}}if(N.wrapS=eo,N.wrapT=z,"anisotropic"in it){var K=it.anisotropic;S(typeof K=="number"&&K>=1&&K<=C.maxAnisotropic,"aniso samples must be between 1 and "),N.anisotropic=it.anisotropic}if("mipmap"in it){var q=!1;switch(typeof it.mipmap){case"string":S.parameter(it.mipmap,Mt,"invalid mipmap hint"),N.mipmapHint=Mt[it.mipmap],N.genMipmaps=!0,q=!0;break;case"boolean":q=N.genMipmaps=it.mipmap;break;case"object":S(Array.isArray(it.mipmap),"invalid mipmap type"),N.genMipmaps=!1,q=!0;break;default:S.raise("invalid mipmap type")}q&&!("min"in it)&&(N.minFilter=L1)}}function Nn(N,it){y.texParameteri(it,Wb,N.minFilter),y.texParameteri(it,jb,N.magFilter),y.texParameteri(it,Gb,N.wrapS),y.texParameteri(it,Hb,N.wrapT),E.ext_texture_filter_anisotropic&&y.texParameteri(it,Qb,N.anisotropic),N.genMipmaps&&(y.hint(Xb,N.mipmapHint),y.generateMipmap(it))}var Rn=0,Zn={},cr=C.maxTextureUnits,mn=Array(cr).map(function(){return null});function Ve(N){yt.call(this),this.mipmask=0,this.internalformat=ws,this.id=Rn++,this.refCount=1,this.target=N,this.texture=y.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Xo,ct.profile&&(this.stats={size:0})}function lr(N){y.activeTexture(Gc),y.bindTexture(N.target,N.texture)}function To(){var N=mn[0];N?y.bindTexture(N.target,N.texture):y.bindTexture(J0,null)}function ke(N){var it=N.texture;S(it,"must not double destroy texture");var tt=N.unit,te=N.target;tt>=0&&(y.activeTexture(Gc+tt),y.bindTexture(te,null),mn[tt]=null),y.deleteTexture(it),N.texture=null,N.params=null,N.pixels=null,N.refCount=0,delete Zn[N.id],nt.textureCount--}e(Ve.prototype,{bind:function(){var N=this;N.bindCount+=1;var it=N.unit;if(it<0){for(var tt=0;tt<cr;++tt){var te=mn[tt];if(te){if(te.bindCount>0)continue;te.unit=-1}mn[tt]=N,it=tt;break}it>=cr&&S.raise("insufficient number of texture units"),ct.profile&&nt.maxTextureUnits<it+1&&(nt.maxTextureUnits=it+1),N.unit=it,y.activeTexture(Gc+it),y.bindTexture(N.target,N.texture)}return it},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&ke(this)}});function ro(N,it){var tt=new Ve(J0);Zn[tt.id]=tt,nt.textureCount++;function te(k,$){var W=tt.texInfo;Xo.call(W);var K=so();return typeof k=="number"?typeof $=="number"?Ke(K,k|0,$|0):Ke(K,k|0,k|0):k?(S.type(k,"object","invalid arguments to regl.texture"),kn(W,k),bo(K,k)):Ke(K,1,1),W.genMipmaps&&(K.mipmask=(K.width<<1)-1),tt.mipmask=K.mipmask,Ft(tt,K),S.texture2D(W,K,C),tt.internalformat=K.internalformat,te.width=K.width,te.height=K.height,lr(tt),Mn(K,J0),Nn(W,J0),To(),Ln(K),ct.profile&&(tt.stats.size=gf(tt.internalformat,tt.type,K.width,K.height,W.genMipmaps,!1)),te.format=Lt[tt.internalformat],te.type=Xt[tt.type],te.mag=xt[W.magFilter],te.min=Kt[W.minFilter],te.wrapS=wt[W.wrapS],te.wrapT=wt[W.wrapT],te}function eo(k,$,W,K){S(!!k,"must specify image data");var q=$|0,F=W|0,G=K|0,L=ae();return Ft(L,tt),L.width=0,L.height=0,Rt(L,k),L.width=L.width||(tt.width>>G)-q,L.height=L.height||(tt.height>>G)-F,S(tt.type===L.type&&tt.format===L.format&&tt.internalformat===L.internalformat,"incompatible format for texture.subimage"),S(q>=0&&F>=0&&q+L.width<=tt.width&&F+L.height<=tt.height,"texture.subimage write out of bounds"),S(tt.mipmask&1<<G,"missing mipmap data"),S(L.data||L.element||L.needsCopy,"missing image data"),lr(tt),Re(L,J0,q,F,G),To(),to(L),te}function z(k,$){var W=k|0,K=$|0||W;if(W===tt.width&&K===tt.height)return te;te.width=tt.width=W,te.height=tt.height=K,lr(tt);for(var q=0;tt.mipmask>>q;++q){var F=W>>q,G=K>>q;if(!F||!G)break;y.texImage2D(J0,q,tt.format,F,G,0,tt.format,tt.type,null)}return To(),ct.profile&&(tt.stats.size=gf(tt.internalformat,tt.type,W,K,!1,!1)),te}return te(N,it),te.subimage=eo,te.resize=z,te._reglType="texture2d",te._texture=tt,ct.profile&&(te.stats=tt.stats),te.destroy=function(){tt.decRef()},te}function vo(N,it,tt,te,eo,z){var k=new Ve(m1);Zn[k.id]=k,nt.cubeCount++;var $=new Array(6);function W(F,G,L,O,T,U){var Q,ht=k.texInfo;for(Xo.call(ht),Q=0;Q<6;++Q)$[Q]=so();if(typeof F=="number"||!F){var pt=F|0||1;for(Q=0;Q<6;++Q)Ke($[Q],pt,pt)}else if(typeof F=="object")if(G)bo($[0],F),bo($[1],G),bo($[2],L),bo($[3],O),bo($[4],T),bo($[5],U);else if(kn(ht,F),ye(k,F),"faces"in F){var ft=F.faces;for(S(Array.isArray(ft)&&ft.length===6,"cube faces must be a length 6 array"),Q=0;Q<6;++Q)S(typeof ft[Q]=="object"&&!!ft[Q],"invalid input for cube map face"),Ft($[Q],k),bo($[Q],ft[Q])}else for(Q=0;Q<6;++Q)bo($[Q],F);else S.raise("invalid arguments to cube map");for(Ft(k,$[0]),C.npotTextureCube||S(zp(k.width)&&zp(k.height),"your browser does not support non power or two texture dimensions"),ht.genMipmaps?k.mipmask=($[0].width<<1)-1:k.mipmask=$[0].mipmask,S.textureCube(k,ht,$,C),k.internalformat=$[0].internalformat,W.width=$[0].width,W.height=$[0].height,lr(k),Q=0;Q<6;++Q)Mn($[Q],hf+Q);for(Nn(ht,m1),To(),ct.profile&&(k.stats.size=gf(k.internalformat,k.type,W.width,W.height,ht.genMipmaps,!0)),W.format=Lt[k.internalformat],W.type=Xt[k.type],W.mag=xt[ht.magFilter],W.min=Kt[ht.minFilter],W.wrapS=wt[ht.wrapS],W.wrapT=wt[ht.wrapT],Q=0;Q<6;++Q)Ln($[Q]);return W}function K(F,G,L,O,T){S(!!G,"must specify image data"),S(typeof F=="number"&&F===(F|0)&&F>=0&&F<6,"invalid face");var U=L|0,Q=O|0,ht=T|0,pt=ae();return Ft(pt,k),pt.width=0,pt.height=0,Rt(pt,G),pt.width=pt.width||(k.width>>ht)-U,pt.height=pt.height||(k.height>>ht)-Q,S(k.type===pt.type&&k.format===pt.format&&k.internalformat===pt.internalformat,"incompatible format for texture.subimage"),S(U>=0&&Q>=0&&U+pt.width<=k.width&&Q+pt.height<=k.height,"texture.subimage write out of bounds"),S(k.mipmask&1<<ht,"missing mipmap data"),S(pt.data||pt.element||pt.needsCopy,"missing image data"),lr(k),Re(pt,hf+F,U,Q,ht),To(),to(pt),W}function q(F){var G=F|0;if(G!==k.width){W.width=k.width=G,W.height=k.height=G,lr(k);for(var L=0;L<6;++L)for(var O=0;k.mipmask>>O;++O)y.texImage2D(hf+L,O,k.format,G>>O,G>>O,0,k.format,k.type,null);return To(),ct.profile&&(k.stats.size=gf(k.internalformat,k.type,W.width,W.height,!1,!0)),W}}return W(N,it,tt,te,eo,z),W.subimage=K,W.resize=q,W._reglType="textureCube",W._texture=k,ct.profile&&(W.stats=k.stats),W.destroy=function(){k.decRef()},W}function gn(){for(var N=0;N<cr;++N)y.activeTexture(Gc+N),y.bindTexture(J0,null),mn[N]=null;o0(Zn).forEach(ke),nt.cubeCount=0,nt.textureCount=0}ct.profile&&(nt.getTotalTextureSize=function(){var N=0;return Object.keys(Zn).forEach(function(it){N+=Zn[it].stats.size}),N});function ea(){for(var N=0;N<cr;++N){var it=mn[N];it&&(it.bindCount=0,it.unit=-1,mn[N]=null)}o0(Zn).forEach(function(tt){tt.texture=y.createTexture(),y.bindTexture(tt.target,tt.texture);for(var te=0;te<32;++te)if(tt.mipmask&1<<te)if(tt.target===J0)y.texImage2D(J0,te,tt.internalformat,tt.width>>te,tt.height>>te,0,tt.internalformat,tt.type,null);else for(var eo=0;eo<6;++eo)y.texImage2D(hf+eo,te,tt.internalformat,tt.width>>te,tt.height>>te,0,tt.internalformat,tt.type,null);Nn(tt.texInfo,tt.target)})}function zs(){for(var N=0;N<cr;++N){var it=mn[N];it&&(it.bindCount=0,it.unit=-1,mn[N]=null),y.activeTexture(Gc+N),y.bindTexture(J0,null),y.bindTexture(m1,null)}}return{create2D:ro,createCube:vo,clear:gn,getTexture:function(N){return null},restore:ea,refresh:zs}}var Ca=36161,xf=32854,ov=32855,nv=36194,rv=33189,av=36168,sv=34041,iv=35907,cv=34836,lv=34842,fv=34843,I0=[];I0[xf]=2,I0[ov]=2,I0[nv]=2,I0[rv]=2,I0[av]=1,I0[sv]=4,I0[iv]=4,I0[cv]=16,I0[lv]=8,I0[fv]=6;function hv(y,E,C){return I0[y]*E*C}var hw=function(y,E,C,at,dt){var nt={rgba4:xf,rgb565:nv,"rgb5 a1":ov,depth:rv,stencil:av,"depth stencil":sv};E.ext_srgb&&(nt.srgba=iv),E.ext_color_buffer_half_float&&(nt.rgba16f=lv,nt.rgb16f=fv),E.webgl_color_buffer_float&&(nt.rgba32f=cv);var ct=[];Object.keys(nt).forEach(function(kt){var Pt=nt[kt];ct[Pt]=kt});var Mt=0,Et={};function Nt(kt){this.id=Mt++,this.refCount=1,this.renderbuffer=kt,this.format=xf,this.width=0,this.height=0,dt.profile&&(this.stats={size:0})}Nt.prototype.decRef=function(){--this.refCount<=0&&At(this)};function At(kt){var Pt=kt.renderbuffer;S(Pt,"must not double destroy renderbuffer"),y.bindRenderbuffer(Ca,null),y.deleteRenderbuffer(Pt),kt.renderbuffer=null,kt.refCount=0,delete Et[kt.id],at.renderbufferCount--}function Ct(kt,Pt){var Y=new Nt(y.createRenderbuffer());Et[Y.id]=Y,at.renderbufferCount++;function lt(Xt,xt){var Kt=0,wt=0,$t=xf;if(typeof Xt=="object"&&Xt){var yt=Xt;if("shape"in yt){var Ft=yt.shape;S(Array.isArray(Ft)&&Ft.length>=2,"invalid renderbuffer shape"),Kt=Ft[0]|0,wt=Ft[1]|0}else"radius"in yt&&(Kt=wt=yt.radius|0),"width"in yt&&(Kt=yt.width|0),"height"in yt&&(wt=yt.height|0);"format"in yt&&(S.parameter(yt.format,nt,"invalid renderbuffer format"),$t=nt[yt.format])}else typeof Xt=="number"?(Kt=Xt|0,typeof xt=="number"?wt=xt|0:wt=Kt):Xt?S.raise("invalid arguments to renderbuffer constructor"):Kt=wt=1;if(S(Kt>0&&wt>0&&Kt<=C.maxRenderbufferSize&&wt<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(Kt===Y.width&&wt===Y.height&&$t===Y.format))return lt.width=Y.width=Kt,lt.height=Y.height=wt,Y.format=$t,y.bindRenderbuffer(Ca,Y.renderbuffer),y.renderbufferStorage(Ca,$t,Kt,wt),S(y.getError()===0,"invalid render buffer format"),dt.profile&&(Y.stats.size=hv(Y.format,Y.width,Y.height)),lt.format=ct[Y.format],lt}function Lt(Xt,xt){var Kt=Xt|0,wt=xt|0||Kt;return Kt===Y.width&&wt===Y.height||(S(Kt>0&&wt>0&&Kt<=C.maxRenderbufferSize&&wt<=C.maxRenderbufferSize,"invalid renderbuffer size"),lt.width=Y.width=Kt,lt.height=Y.height=wt,y.bindRenderbuffer(Ca,Y.renderbuffer),y.renderbufferStorage(Ca,Y.format,Kt,wt),S(y.getError()===0,"invalid render buffer format"),dt.profile&&(Y.stats.size=hv(Y.format,Y.width,Y.height))),lt}return lt(kt,Pt),lt.resize=Lt,lt._reglType="renderbuffer",lt._renderbuffer=Y,dt.profile&&(lt.stats=Y.stats),lt.destroy=function(){Y.decRef()},lt}dt.profile&&(at.getTotalRenderbufferSize=function(){var kt=0;return Object.keys(Et).forEach(function(Pt){kt+=Et[Pt].stats.size}),kt});function Bt(){o0(Et).forEach(function(kt){kt.renderbuffer=y.createRenderbuffer(),y.bindRenderbuffer(Ca,kt.renderbuffer),y.renderbufferStorage(Ca,kt.format,kt.width,kt.height)}),y.bindRenderbuffer(Ca,null)}return{create:Ct,clear:function(){o0(Et).forEach(At)},restore:Bt}},ua=36160,C1=36161,Ms=3553,yf=34069,uv=36064,dv=36096,pv=36128,vv=33306,mv=36053,uw=36054,dw=36055,pw=36057,vw=36061,mw=36193,gw=5121,xw=5126,gv=6407,xv=6408,yw=6402,bw=[gv,xv],O1=[];O1[xv]=4,O1[gv]=3;var bf=[];bf[gw]=1,bf[xw]=4,bf[mw]=2;var ww=32854,_w=32855,Mw=36194,kw=33189,Sw=36168,yv=34041,Ew=35907,Aw=34836,Tw=34842,zw=34843,Lw=[ww,_w,Mw,Ew,Tw,zw,Aw],bi={};bi[mv]="complete",bi[uw]="incomplete attachment",bi[pw]="incomplete dimensions",bi[dw]="incomplete, missing attachment",bi[vw]="unsupported";function Nw(y,E,C,at,dt,nt){var ct={cur:null,next:null,dirty:!1,setFBO:null},Mt=["rgba"],Et=["rgba4","rgb565","rgb5 a1"];E.ext_srgb&&Et.push("srgba"),E.ext_color_buffer_half_float&&Et.push("rgba16f","rgb16f"),E.webgl_color_buffer_float&&Et.push("rgba32f");var Nt=["uint8"];E.oes_texture_half_float&&Nt.push("half float","float16"),E.oes_texture_float&&Nt.push("float","float32");function At(Ut,Rt,gt){this.target=Ut,this.texture=Rt,this.renderbuffer=gt;var Re=0,We=0;Rt?(Re=Rt.width,We=Rt.height):gt&&(Re=gt.width,We=gt.height),this.width=Re,this.height=We}function Ct(Ut){Ut&&(Ut.texture&&Ut.texture._texture.decRef(),Ut.renderbuffer&&Ut.renderbuffer._renderbuffer.decRef())}function Bt(Ut,Rt,gt){if(Ut)if(Ut.texture){var Re=Ut.texture._texture,We=Math.max(1,Re.width),ae=Math.max(1,Re.height);S(We===Rt&&ae===gt,"inconsistent width/height for supplied texture"),Re.refCount+=1}else{var to=Ut.renderbuffer._renderbuffer;S(to.width===Rt&&to.height===gt,"inconsistent width/height for renderbuffer"),to.refCount+=1}}function kt(Ut,Rt){Rt&&(Rt.texture?y.framebufferTexture2D(ua,Ut,Rt.target,Rt.texture._texture.texture,0):y.framebufferRenderbuffer(ua,Ut,C1,Rt.renderbuffer._renderbuffer.renderbuffer))}function Pt(Ut){var Rt=Ms,gt=null,Re=null,We=Ut;typeof Ut=="object"&&(We=Ut.data,"target"in Ut&&(Rt=Ut.target|0)),S.type(We,"function","invalid attachment data");var ae=We._reglType;return ae==="texture2d"?(gt=We,S(Rt===Ms)):ae==="textureCube"?(gt=We,S(Rt>=yf&&Rt<yf+6,"invalid cube map target")):ae==="renderbuffer"?(Re=We,Rt=C1):S.raise("invalid regl object for attachment"),new At(Rt,gt,Re)}function Y(Ut,Rt,gt,Re,We){if(gt){var ae=at.create2D({width:Ut,height:Rt,format:Re,type:We});return ae._texture.refCount=0,new At(Ms,ae,null)}else{var to=dt.create({width:Ut,height:Rt,format:Re});return to._renderbuffer.refCount=0,new At(C1,null,to)}}function lt(Ut){return Ut&&(Ut.texture||Ut.renderbuffer)}function Lt(Ut,Rt,gt){Ut&&(Ut.texture?Ut.texture.resize(Rt,gt):Ut.renderbuffer&&Ut.renderbuffer.resize(Rt,gt),Ut.width=Rt,Ut.height=gt)}var Xt=0,xt={};function Kt(){this.id=Xt++,xt[this.id]=this,this.framebuffer=y.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function wt(Ut){Ut.colorAttachments.forEach(Ct),Ct(Ut.depthAttachment),Ct(Ut.stencilAttachment),Ct(Ut.depthStencilAttachment)}function $t(Ut){var Rt=Ut.framebuffer;S(Rt,"must not double destroy framebuffer"),y.deleteFramebuffer(Rt),Ut.framebuffer=null,nt.framebufferCount--,delete xt[Ut.id]}function yt(Ut){var Rt;y.bindFramebuffer(ua,Ut.framebuffer);var gt=Ut.colorAttachments;for(Rt=0;Rt<gt.length;++Rt)kt(uv+Rt,gt[Rt]);for(Rt=gt.length;Rt<C.maxColorAttachments;++Rt)y.framebufferTexture2D(ua,uv+Rt,Ms,null,0);y.framebufferTexture2D(ua,vv,Ms,null,0),y.framebufferTexture2D(ua,dv,Ms,null,0),y.framebufferTexture2D(ua,pv,Ms,null,0),kt(dv,Ut.depthAttachment),kt(pv,Ut.stencilAttachment),kt(vv,Ut.depthStencilAttachment);var Re=y.checkFramebufferStatus(ua);!y.isContextLost()&&Re!==mv&&S.raise("framebuffer configuration not supported, status = "+bi[Re]),y.bindFramebuffer(ua,ct.next?ct.next.framebuffer:null),ct.cur=ct.next,y.getError()}function Ft(Ut,Rt){var gt=new Kt;nt.framebufferCount++;function Re(ae,to){var De;S(ct.next!==gt,"can not update framebuffer which is currently in use");var Ke=0,bo=0,Mn=!0,qn=!0,so=null,Ln=!0,Xo="rgba",kn="uint8",Nn=1,Rn=null,Zn=null,cr=null,mn=!1;if(typeof ae=="number")Ke=ae|0,bo=to|0||Ke;else if(!ae)Ke=bo=1;else{S.type(ae,"object","invalid arguments for framebuffer");var Ve=ae;if("shape"in Ve){var lr=Ve.shape;S(Array.isArray(lr)&&lr.length>=2,"invalid shape for framebuffer"),Ke=lr[0],bo=lr[1]}else"radius"in Ve&&(Ke=bo=Ve.radius),"width"in Ve&&(Ke=Ve.width),"height"in Ve&&(bo=Ve.height);("color"in Ve||"colors"in Ve)&&(so=Ve.color||Ve.colors,Array.isArray(so)&&S(so.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),so||("colorCount"in Ve&&(Nn=Ve.colorCount|0,S(Nn>0,"invalid color buffer count")),"colorTexture"in Ve&&(Ln=!!Ve.colorTexture,Xo="rgba4"),"colorType"in Ve&&(kn=Ve.colorType,Ln?(S(E.oes_texture_float||!(kn==="float"||kn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),S(E.oes_texture_half_float||!(kn==="half float"||kn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):kn==="half float"||kn==="float16"?(S(E.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Xo="rgba16f"):(kn==="float"||kn==="float32")&&(S(E.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Xo="rgba32f"),S.oneOf(kn,Nt,"invalid color type")),"colorFormat"in Ve&&(Xo=Ve.colorFormat,Mt.indexOf(Xo)>=0?Ln=!0:Et.indexOf(Xo)>=0?Ln=!1:Ln?S.oneOf(Ve.colorFormat,Mt,"invalid color format for texture"):S.oneOf(Ve.colorFormat,Et,"invalid color format for renderbuffer"))),("depthTexture"in Ve||"depthStencilTexture"in Ve)&&(mn=!!(Ve.depthTexture||Ve.depthStencilTexture),S(!mn||E.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Ve&&(typeof Ve.depth=="boolean"?Mn=Ve.depth:(Rn=Ve.depth,qn=!1)),"stencil"in Ve&&(typeof Ve.stencil=="boolean"?qn=Ve.stencil:(Zn=Ve.stencil,Mn=!1)),"depthStencil"in Ve&&(typeof Ve.depthStencil=="boolean"?Mn=qn=Ve.depthStencil:(cr=Ve.depthStencil,Mn=!1,qn=!1))}var To=null,ke=null,ro=null,vo=null;if(Array.isArray(so))To=so.map(Pt);else if(so)To=[Pt(so)];else for(To=new Array(Nn),De=0;De<Nn;++De)To[De]=Y(Ke,bo,Ln,Xo,kn);S(E.webgl_draw_buffers||To.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),S(To.length<=C.maxColorAttachments,"too many color attachments, not supported"),Ke=Ke||To[0].width,bo=bo||To[0].height,Rn?ke=Pt(Rn):Mn&&!qn&&(ke=Y(Ke,bo,mn,"depth","uint32")),Zn?ro=Pt(Zn):qn&&!Mn&&(ro=Y(Ke,bo,!1,"stencil","uint8")),cr?vo=Pt(cr):!Rn&&!Zn&&qn&&Mn&&(vo=Y(Ke,bo,mn,"depth stencil","depth stencil")),S(!!Rn+!!Zn+!!cr<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var gn=null;for(De=0;De<To.length;++De)if(Bt(To[De],Ke,bo),S(!To[De]||To[De].texture&&bw.indexOf(To[De].texture._texture.format)>=0||To[De].renderbuffer&&Lw.indexOf(To[De].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+De+" is invalid"),To[De]&&To[De].texture){var ea=O1[To[De].texture._texture.format]*bf[To[De].texture._texture.type];gn===null?gn=ea:S(gn===ea,"all color attachments much have the same number of bits per pixel.")}return Bt(ke,Ke,bo),S(!ke||ke.texture&&ke.texture._texture.format===yw||ke.renderbuffer&&ke.renderbuffer._renderbuffer.format===kw,"invalid depth attachment for framebuffer object"),Bt(ro,Ke,bo),S(!ro||ro.renderbuffer&&ro.renderbuffer._renderbuffer.format===Sw,"invalid stencil attachment for framebuffer object"),Bt(vo,Ke,bo),S(!vo||vo.texture&&vo.texture._texture.format===yv||vo.renderbuffer&&vo.renderbuffer._renderbuffer.format===yv,"invalid depth-stencil attachment for framebuffer object"),wt(gt),gt.width=Ke,gt.height=bo,gt.colorAttachments=To,gt.depthAttachment=ke,gt.stencilAttachment=ro,gt.depthStencilAttachment=vo,Re.color=To.map(lt),Re.depth=lt(ke),Re.stencil=lt(ro),Re.depthStencil=lt(vo),Re.width=gt.width,Re.height=gt.height,yt(gt),Re}function We(ae,to){S(ct.next!==gt,"can not resize a framebuffer which is currently in use");var De=Math.max(ae|0,1),Ke=Math.max(to|0||De,1);if(De===gt.width&&Ke===gt.height)return Re;for(var bo=gt.colorAttachments,Mn=0;Mn<bo.length;++Mn)Lt(bo[Mn],De,Ke);return Lt(gt.depthAttachment,De,Ke),Lt(gt.stencilAttachment,De,Ke),Lt(gt.depthStencilAttachment,De,Ke),gt.width=Re.width=De,gt.height=Re.height=Ke,yt(gt),Re}return Re(Ut,Rt),e(Re,{resize:We,_reglType:"framebuffer",_framebuffer:gt,destroy:function(){$t(gt),wt(gt)},use:function(ae){ct.setFBO({framebuffer:Re},ae)}})}function ye(Ut){var Rt=Array(6);function gt(We){var ae;S(Rt.indexOf(ct.next)<0,"can not update framebuffer which is currently in use");var to={color:null},De=0,Ke=null,bo="rgba",Mn="uint8",qn=1;if(typeof We=="number")De=We|0;else if(!We)De=1;else{S.type(We,"object","invalid arguments for framebuffer");var so=We;if("shape"in so){var Ln=so.shape;S(Array.isArray(Ln)&&Ln.length>=2,"invalid shape for framebuffer"),S(Ln[0]===Ln[1],"cube framebuffer must be square"),De=Ln[0]}else"radius"in so&&(De=so.radius|0),"width"in so?(De=so.width|0,"height"in so&&S(so.height===De,"must be square")):"height"in so&&(De=so.height|0);("color"in so||"colors"in so)&&(Ke=so.color||so.colors,Array.isArray(Ke)&&S(Ke.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),Ke||("colorCount"in so&&(qn=so.colorCount|0,S(qn>0,"invalid color buffer count")),"colorType"in so&&(S.oneOf(so.colorType,Nt,"invalid color type"),Mn=so.colorType),"colorFormat"in so&&(bo=so.colorFormat,S.oneOf(so.colorFormat,Mt,"invalid color format for texture"))),"depth"in so&&(to.depth=so.depth),"stencil"in so&&(to.stencil=so.stencil),"depthStencil"in so&&(to.depthStencil=so.depthStencil)}var Xo;if(Ke)if(Array.isArray(Ke))for(Xo=[],ae=0;ae<Ke.length;++ae)Xo[ae]=Ke[ae];else Xo=[Ke];else{Xo=Array(qn);var kn={radius:De,format:bo,type:Mn};for(ae=0;ae<qn;++ae)Xo[ae]=at.createCube(kn)}for(to.color=Array(Xo.length),ae=0;ae<Xo.length;++ae){var Nn=Xo[ae];S(typeof Nn=="function"&&Nn._reglType==="textureCube","invalid cube map"),De=De||Nn.width,S(Nn.width===De&&Nn.height===De,"invalid cube map shape"),to.color[ae]={target:yf,data:Xo[ae]}}for(ae=0;ae<6;++ae){for(var Rn=0;Rn<Xo.length;++Rn)to.color[Rn].target=yf+ae;ae>0&&(to.depth=Rt[0].depth,to.stencil=Rt[0].stencil,to.depthStencil=Rt[0].depthStencil),Rt[ae]?Rt[ae](to):Rt[ae]=Ft(to)}return e(gt,{width:De,height:De,color:Xo})}function Re(We){var ae,to=We|0;if(S(to>0&&to<=C.maxCubeMapSize,"invalid radius for cube fbo"),to===gt.width)return gt;var De=gt.color;for(ae=0;ae<De.length;++ae)De[ae].resize(to);for(ae=0;ae<6;++ae)Rt[ae].resize(to);return gt.width=gt.height=to,gt}return gt(Ut),e(gt,{faces:Rt,resize:Re,_reglType:"framebufferCube",destroy:function(){Rt.forEach(function(We){We.destroy()})}})}function Fe(){ct.cur=null,ct.next=null,ct.dirty=!0,o0(xt).forEach(function(Ut){Ut.framebuffer=y.createFramebuffer(),yt(Ut)})}return e(ct,{getFramebuffer:function(Ut){if(typeof Ut=="function"&&Ut._reglType==="framebuffer"){var Rt=Ut._framebuffer;if(Rt instanceof Kt)return Rt}return null},create:Ft,createCube:ye,clear:function(){o0(xt).forEach($t)},restore:Fe})}var Rw=5126,bv=34962;function P1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Rw,this.offset=0,this.stride=0,this.divisor=0}function Cw(y,E,C,at,dt){for(var nt=C.maxAttributes,ct=new Array(nt),Mt=0;Mt<nt;++Mt)ct[Mt]=new P1;var Et=0,Nt={},At={Record:P1,scope:{},state:ct,currentVAO:null,targetVAO:null,restore:Bt()?xt:function(){},createVAO:Kt,getVAO:Pt,destroyBuffer:Ct,setVAO:Bt()?Y:lt,clear:Bt()?Lt:function(){}};function Ct(wt){for(var $t=0;$t<ct.length;++$t){var yt=ct[$t];yt.buffer===wt&&(y.disableVertexAttribArray($t),yt.buffer=null)}}function Bt(){return E.oes_vertex_array_object}function kt(){return E.angle_instanced_arrays}function Pt(wt){return typeof wt=="function"&&wt._vao?wt._vao:null}function Y(wt){if(wt!==At.currentVAO){var $t=Bt();wt?$t.bindVertexArrayOES(wt.vao):$t.bindVertexArrayOES(null),At.currentVAO=wt}}function lt(wt){if(wt!==At.currentVAO){if(wt)wt.bindAttrs();else for(var $t=kt(),yt=0;yt<ct.length;++yt){var Ft=ct[yt];Ft.buffer?(y.enableVertexAttribArray(yt),y.vertexAttribPointer(yt,Ft.size,Ft.type,Ft.normalized,Ft.stride,Ft.offfset),$t&&Ft.divisor&&$t.vertexAttribDivisorANGLE(yt,Ft.divisor)):(y.disableVertexAttribArray(yt),y.vertexAttrib4f(yt,Ft.x,Ft.y,Ft.z,Ft.w))}At.currentVAO=wt}}function Lt(){o0(Nt).forEach(function(wt){wt.destroy()})}function Xt(){this.id=++Et,this.attributes=[];var wt=Bt();wt?this.vao=wt.createVertexArrayOES():this.vao=null,Nt[this.id]=this,this.buffers=[]}Xt.prototype.bindAttrs=function(){for(var wt=kt(),$t=this.attributes,yt=0;yt<$t.length;++yt){var Ft=$t[yt];Ft.buffer?(y.enableVertexAttribArray(yt),y.bindBuffer(bv,Ft.buffer.buffer),y.vertexAttribPointer(yt,Ft.size,Ft.type,Ft.normalized,Ft.stride,Ft.offset),wt&&Ft.divisor&&wt.vertexAttribDivisorANGLE(yt,Ft.divisor)):(y.disableVertexAttribArray(yt),y.vertexAttrib4f(yt,Ft.x,Ft.y,Ft.z,Ft.w))}for(var ye=$t.length;ye<nt;++ye)y.disableVertexAttribArray(ye)},Xt.prototype.refresh=function(){var wt=Bt();wt&&(wt.bindVertexArrayOES(this.vao),this.bindAttrs(),At.currentVAO=this)},Xt.prototype.destroy=function(){if(this.vao){var wt=Bt();this===At.currentVAO&&(At.currentVAO=null,wt.bindVertexArrayOES(null)),wt.deleteVertexArrayOES(this.vao),this.vao=null}Nt[this.id]&&(delete Nt[this.id],at.vaoCount-=1)};function xt(){var wt=Bt();wt&&o0(Nt).forEach(function($t){$t.refresh()})}function Kt(wt){var $t=new Xt;at.vaoCount+=1;function yt(Ft){S(Array.isArray(Ft),"arguments to vertex array constructor must be an array"),S(Ft.length<nt,"too many attributes"),S(Ft.length>0,"must specify at least one attribute");var ye={},Fe=$t.attributes;Fe.length=Ft.length;for(var Ut=0;Ut<Ft.length;++Ut){var Rt=Ft[Ut],gt=Fe[Ut]=new P1,Re=Rt.data||Rt;if(Array.isArray(Re)||t(Re)||P0(Re)){var We;$t.buffers[Ut]&&(We=$t.buffers[Ut],t(Re)&&We._buffer.byteLength>=Re.byteLength?We.subdata(Re):(We.destroy(),$t.buffers[Ut]=null)),$t.buffers[Ut]||(We=$t.buffers[Ut]=dt.create(Rt,bv,!1,!0)),gt.buffer=dt.getBuffer(We),gt.size=gt.buffer.dimension|0,gt.normalized=!1,gt.type=gt.buffer.dtype,gt.offset=0,gt.stride=0,gt.divisor=0,gt.state=1,ye[Ut]=1}else dt.getBuffer(Rt)?(gt.buffer=dt.getBuffer(Rt),gt.size=gt.buffer.dimension|0,gt.normalized=!1,gt.type=gt.buffer.dtype,gt.offset=0,gt.stride=0,gt.divisor=0,gt.state=1):dt.getBuffer(Rt.buffer)?(gt.buffer=dt.getBuffer(Rt.buffer),gt.size=(+Rt.size||gt.buffer.dimension)|0,gt.normalized=!!Rt.normalized||!1,"type"in Rt?(S.parameter(Rt.type,ys,"invalid buffer type"),gt.type=ys[Rt.type]):gt.type=gt.buffer.dtype,gt.offset=(Rt.offset||0)|0,gt.stride=(Rt.stride||0)|0,gt.divisor=(Rt.divisor||0)|0,gt.state=1,S(gt.size>=1&&gt.size<=4,"size must be between 1 and 4"),S(gt.offset>=0,"invalid offset"),S(gt.stride>=0&&gt.stride<=255,"stride must be between 0 and 255"),S(gt.divisor>=0,"divisor must be positive"),S(!gt.divisor||!!E.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Rt?(S(Ut>0,"first attribute must not be a constant"),gt.x=+Rt.x||0,gt.y=+Rt.y||0,gt.z=+Rt.z||0,gt.w=+Rt.w||0,gt.state=2):S(!1,"invalid attribute spec for location "+Ut)}for(var ae=0;ae<$t.buffers.length;++ae)!ye[ae]&&$t.buffers[ae]&&($t.buffers[ae].destroy(),$t.buffers[ae]=null);return $t.refresh(),yt}return yt.destroy=function(){for(var Ft=0;Ft<$t.buffers.length;++Ft)$t.buffers[Ft]&&$t.buffers[Ft].destroy();$t.buffers.length=0,$t.destroy()},yt._vao=$t,yt._reglType="vao",yt(wt)}return At}var wv=35632,Ow=35633,Pw=35718,Iw=35721;function $w(y,E,C,at){var dt={},nt={};function ct(Y,lt,Lt,Xt){this.name=Y,this.id=lt,this.location=Lt,this.info=Xt}function Mt(Y,lt){for(var Lt=0;Lt<Y.length;++Lt)if(Y[Lt].id===lt.id){Y[Lt].location=lt.location;return}Y.push(lt)}function Et(Y,lt,Lt){var Xt=Y===wv?dt:nt,xt=Xt[lt];if(!xt){var Kt=E.str(lt);xt=y.createShader(Y),y.shaderSource(xt,Kt),y.compileShader(xt),S.shaderError(y,xt,Kt,Y,Lt),Xt[lt]=xt}return xt}var Nt={},At=[],Ct=0;function Bt(Y,lt){this.id=Ct++,this.fragId=Y,this.vertId=lt,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,at.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function kt(Y,lt,Lt){var Xt,xt,Kt=Et(wv,Y.fragId),wt=Et(Ow,Y.vertId),$t=Y.program=y.createProgram();if(y.attachShader($t,Kt),y.attachShader($t,wt),Lt)for(Xt=0;Xt<Lt.length;++Xt){var yt=Lt[Xt];y.bindAttribLocation($t,yt[0],yt[1])}y.linkProgram($t),S.linkError(y,$t,E.str(Y.fragId),E.str(Y.vertId),lt);var Ft=y.getProgramParameter($t,Pw);at.profile&&(Y.stats.uniformsCount=Ft);var ye=Y.uniforms;for(Xt=0;Xt<Ft;++Xt)if(xt=y.getActiveUniform($t,Xt),xt)if(xt.size>1)for(var Fe=0;Fe<xt.size;++Fe){var Ut=xt.name.replace("[0]","["+Fe+"]");Mt(ye,new ct(Ut,E.id(Ut),y.getUniformLocation($t,Ut),xt))}else Mt(ye,new ct(xt.name,E.id(xt.name),y.getUniformLocation($t,xt.name),xt));var Rt=y.getProgramParameter($t,Iw);at.profile&&(Y.stats.attributesCount=Rt);var gt=Y.attributes;for(Xt=0;Xt<Rt;++Xt)xt=y.getActiveAttrib($t,Xt),xt&&Mt(gt,new ct(xt.name,E.id(xt.name),y.getAttribLocation($t,xt.name),xt))}at.profile&&(C.getMaxUniformsCount=function(){var Y=0;return At.forEach(function(lt){lt.stats.uniformsCount>Y&&(Y=lt.stats.uniformsCount)}),Y},C.getMaxAttributesCount=function(){var Y=0;return At.forEach(function(lt){lt.stats.attributesCount>Y&&(Y=lt.stats.attributesCount)}),Y});function Pt(){dt={},nt={};for(var Y=0;Y<At.length;++Y)kt(At[Y],null,At[Y].attributes.map(function(lt){return[lt.location,lt.name]}))}return{clear:function(){var Y=y.deleteShader.bind(y);o0(dt).forEach(Y),dt={},o0(nt).forEach(Y),nt={},At.forEach(function(lt){y.deleteProgram(lt.program)}),At.length=0,Nt={},C.shaderCount=0},program:function(Y,lt,Lt,Xt){S.command(Y>=0,"missing vertex shader",Lt),S.command(lt>=0,"missing fragment shader",Lt);var xt=Nt[lt];xt||(xt=Nt[lt]={});var Kt=xt[Y];if(Kt&&(Kt.refCount++,!Xt))return Kt;var wt=new Bt(lt,Y);return C.shaderCount++,kt(wt,Lt,Xt),Kt||(xt[Y]=wt),At.push(wt),e(wt,{destroy:function(){if(wt.refCount--,wt.refCount<=0){y.deleteProgram(wt.program);var $t=At.indexOf(wt);At.splice($t,1),C.shaderCount--}xt[wt.vertId].refCount<=0&&(y.deleteShader(nt[wt.vertId]),delete nt[wt.vertId],delete Nt[wt.fragId][wt.vertId]),Object.keys(Nt[wt.fragId]).length||(y.deleteShader(dt[wt.fragId]),delete dt[wt.fragId],delete Nt[wt.fragId])}})},restore:Pt,shader:Et,frag:-1,vert:-1}}var Fw=6408,Hc=5121,qw=3333,wf=5126;function Dw(y,E,C,at,dt,nt,ct){function Mt(At){var Ct;E.next===null?(S(dt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Ct=Hc):(S(E.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Ct=E.next.colorAttachments[0].texture._texture.type,nt.oes_texture_float?(S(Ct===Hc||Ct===wf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Ct===wf&&S(ct.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):S(Ct===Hc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Bt=0,kt=0,Pt=at.framebufferWidth,Y=at.framebufferHeight,lt=null;t(At)?lt=At:At&&(S.type(At,"object","invalid arguments to regl.read()"),Bt=At.x|0,kt=At.y|0,S(Bt>=0&&Bt<at.framebufferWidth,"invalid x offset for regl.read"),S(kt>=0&&kt<at.framebufferHeight,"invalid y offset for regl.read"),Pt=(At.width||at.framebufferWidth-Bt)|0,Y=(At.height||at.framebufferHeight-kt)|0,lt=At.data||null),lt&&(Ct===Hc?S(lt instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Ct===wf&&S(lt instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),S(Pt>0&&Pt+Bt<=at.framebufferWidth,"invalid width for read pixels"),S(Y>0&&Y+kt<=at.framebufferHeight,"invalid height for read pixels"),C();var Lt=Pt*Y*4;return lt||(Ct===Hc?lt=new Uint8Array(Lt):Ct===wf&&(lt=lt||new Float32Array(Lt))),S.isTypedArray(lt,"data buffer for regl.read() must be a typedarray"),S(lt.byteLength>=Lt,"data buffer for regl.read() too small"),y.pixelStorei(qw,4),y.readPixels(Bt,kt,Pt,Y,Fw,Ct,lt),lt}function Et(At){var Ct;return E.setFBO({framebuffer:At.framebuffer},function(){Ct=Mt(At)}),Ct}function Nt(At){return!At||!("framebuffer"in At)?Mt(At):Et(At)}return Nt}function wi(y){return Array.prototype.slice.call(y)}function _i(y){return wi(y).join("")}function Gw(){var y=0,E=[],C=[];function at(Ct){for(var Bt=0;Bt<C.length;++Bt)if(C[Bt]===Ct)return E[Bt];var kt="g"+y++;return E.push(kt),C.push(Ct),kt}function dt(){var Ct=[];function Bt(){Ct.push.apply(Ct,wi(arguments))}var kt=[];function Pt(){var Y="v"+y++;return kt.push(Y),arguments.length>0&&(Ct.push(Y,"="),Ct.push.apply(Ct,wi(arguments)),Ct.push(";")),Y}return e(Bt,{def:Pt,toString:function(){return _i([kt.length>0?"var "+kt.join(",")+";":"",_i(Ct)])}})}function nt(){var Ct=dt(),Bt=dt(),kt=Ct.toString,Pt=Bt.toString;function Y(lt,Lt){Bt(lt,Lt,"=",Ct.def(lt,Lt),";")}return e(function(){Ct.apply(Ct,wi(arguments))},{def:Ct.def,entry:Ct,exit:Bt,save:Y,set:function(lt,Lt,Xt){Y(lt,Lt),Ct(lt,Lt,"=",Xt,";")},toString:function(){return kt()+Pt()}})}function ct(){var Ct=_i(arguments),Bt=nt(),kt=nt(),Pt=Bt.toString,Y=kt.toString;return e(Bt,{then:function(){return Bt.apply(Bt,wi(arguments)),this},else:function(){return kt.apply(kt,wi(arguments)),this},toString:function(){var lt=Y();return lt&&(lt="else{"+lt+"}"),_i(["if(",Ct,"){",Pt(),"}",lt])}})}var Mt=dt(),Et={};function Nt(Ct,Bt){var kt=[];function Pt(){var xt="a"+kt.length;return kt.push(xt),xt}Bt=Bt||0;for(var Y=0;Y<Bt;++Y)Pt();var lt=nt(),Lt=lt.toString,Xt=Et[Ct]=e(lt,{arg:Pt,toString:function(){return _i(["function(",kt.join(),"){",Lt(),"}"])}});return Xt}function At(){var Ct=['"use strict";',Mt,"return {"];Object.keys(Et).forEach(function(Pt){Ct.push('"',Pt,'":',Et[Pt].toString(),",")}),Ct.push("}");var Bt=_i(Ct).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),kt=Function.apply(null,E.concat(Bt));return kt.apply(null,C)}return{global:Mt,link:at,block:dt,proc:Nt,scope:nt,cond:ct,compile:At}}var Mi="xyzw".split(""),_v=5121,ki=1,I1=2,$1=0,F1=1,q1=2,D1=3,_f=4,Mv=5,kv=6,Sv="dither",Ev="blend.enable",Av="blend.color",G1="blend.equation",H1="blend.func",Tv="depth.enable",zv="depth.func",Lv="depth.range",Nv="depth.mask",B1="colorMask",Rv="cull.enable",Cv="cull.face",U1="frontFace",j1="lineWidth",Ov="polygonOffset.enable",W1="polygonOffset.offset",Pv="sample.alpha",Iv="sample.enable",V1="sample.coverage",$v="stencil.enable",Fv="stencil.mask",X1="stencil.func",Y1="stencil.opFront",Bc="stencil.opBack",qv="scissor.enable",Mf="scissor.box",da="viewport",Uc="profile",ks="framebuffer",jc="vert",Wc="frag",Ss="elements",Es="primitive",As="count",kf="offset",Sf="instances",Vc="vao",K1="Width",Q1="Height",Si=ks+K1,Ei=ks+Q1,Hw=da+K1,Bw=da+Q1,Dv="drawingBuffer",Gv=Dv+K1,Hv=Dv+Q1,Uw=[H1,G1,X1,Y1,Bc,V1,da,Mf,W1],Ai=34962,jw=34963,Ww=35632,Vw=35633,Bv=3553,Xw=34067,Yw=2884,Kw=3042,Qw=3024,Zw=2960,Jw=2929,t4=3089,e4=32823,o4=32926,n4=32928,Z1=5126,Ef=35664,Af=35665,Tf=35666,J1=5124,zf=35667,Lf=35668,Nf=35669,tu=35670,Rf=35671,Cf=35672,Of=35673,Xc=35674,Yc=35675,Kc=35676,Qc=35678,Zc=35680,Uv=4,Jc=1028,Ts=1029,jv=2304,eu=2305,r4=32775,a4=32776,s4=519,Oa=7680,Wv=0,Vv=1,Xv=32774,i4=513,Yv=36160,c4=36064,ta={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Kv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Ti={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Pa={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Qv={frag:Ww,vert:Vw},ou={cw:jv,ccw:eu};function Pf(y){return Array.isArray(y)||t(y)||P0(y)}function Zv(y){return y.sort(function(E,C){return E===da?-1:C===da?1:E<C?-1:1})}function zr(y,E,C,at){this.thisDep=y,this.contextDep=E,this.propDep=C,this.append=at}function Ia(y){return y&&!(y.thisDep||y.contextDep||y.propDep)}function _n(y){return new zr(!1,!1,!1,y)}function jr(y,E){var C=y.type;if(C===$1){var at=y.data.length;return new zr(!0,at>=1,at>=2,E)}else if(C===_f){var dt=y.data;return new zr(dt.thisDep,dt.contextDep,dt.propDep,E)}else{if(C===Mv)return new zr(!1,!1,!1,E);if(C===kv){for(var nt=!1,ct=!1,Mt=!1,Et=0;Et<y.data.length;++Et){var Nt=y.data[Et];if(Nt.type===F1)Mt=!0;else if(Nt.type===q1)ct=!0;else if(Nt.type===D1)nt=!0;else if(Nt.type===$1){nt=!0;var At=Nt.data;At>=1&&(ct=!0),At>=2&&(Mt=!0)}else Nt.type===_f&&(nt=nt||Nt.data.thisDep,ct=ct||Nt.data.contextDep,Mt=Mt||Nt.data.propDep)}return new zr(nt,ct,Mt,E)}else return new zr(C===D1,C===q1,C===F1,E)}}var Jv=new zr(!1,!1,!1,function(){});function l4(y,E,C,at,dt,nt,ct,Mt,Et,Nt,At,Ct,Bt,kt,Pt){var Y=Nt.Record,lt={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(lt.min=r4,lt.max=a4);var Lt=C.angle_instanced_arrays,Xt=C.webgl_draw_buffers,xt={dirty:!0,profile:Pt.profile},Kt={},wt=[],$t={},yt={};function Ft(z){return z.replace(".","_")}function ye(z,k,$){var W=Ft(z);wt.push(z),Kt[W]=xt[W]=!!$,$t[W]=k}function Fe(z,k,$){var W=Ft(z);wt.push(z),Array.isArray($)?(xt[W]=$.slice(),Kt[W]=$.slice()):xt[W]=Kt[W]=$,yt[W]=k}ye(Sv,Qw),ye(Ev,Kw),Fe(Av,"blendColor",[0,0,0,0]),Fe(G1,"blendEquationSeparate",[Xv,Xv]),Fe(H1,"blendFuncSeparate",[Vv,Wv,Vv,Wv]),ye(Tv,Jw,!0),Fe(zv,"depthFunc",i4),Fe(Lv,"depthRange",[0,1]),Fe(Nv,"depthMask",!0),Fe(B1,B1,[!0,!0,!0,!0]),ye(Rv,Yw),Fe(Cv,"cullFace",Ts),Fe(U1,U1,eu),Fe(j1,j1,1),ye(Ov,e4),Fe(W1,"polygonOffset",[0,0]),ye(Pv,o4),ye(Iv,n4),Fe(V1,"sampleCoverage",[1,!1]),ye($v,Zw),Fe(Fv,"stencilMask",-1),Fe(X1,"stencilFunc",[s4,0,-1]),Fe(Y1,"stencilOpSeparate",[Jc,Oa,Oa,Oa]),Fe(Bc,"stencilOpSeparate",[Ts,Oa,Oa,Oa]),ye(qv,t4),Fe(Mf,"scissor",[0,0,y.drawingBufferWidth,y.drawingBufferHeight]),Fe(da,da,[0,0,y.drawingBufferWidth,y.drawingBufferHeight]);var Ut={gl:y,context:Bt,strings:E,next:Kt,current:xt,draw:Ct,elements:nt,buffer:dt,shader:At,attributes:Nt.state,vao:Nt,uniforms:Et,framebuffer:Mt,extensions:C,timer:kt,isBufferArgs:Pf},Rt={primTypes:di,compareFuncs:Ti,blendFuncs:ta,blendEquations:lt,stencilOps:Pa,glTypes:ys,orientationType:ou};S.optional(function(){Ut.isArrayLike=vn}),Xt&&(Rt.backBuffer=[Ts],Rt.drawBuffer=Qe(at.maxDrawbuffers,function(z){return z===0?[0]:Qe(z,function(k){return c4+k})}));var gt=0;function Re(){var z=Gw(),k=z.link,$=z.global;z.id=gt++,z.batchId="0";var W=k(Ut),K=z.shared={props:"a0"};Object.keys(Ut).forEach(function(O){K[O]=$.def(W,".",O)}),S.optional(function(){z.CHECK=k(S),z.commandStr=S.guessCommand(),z.command=k(z.commandStr),z.assert=function(O,T,U){O("if(!(",T,"))",this.CHECK,".commandRaise(",k(U),",",this.command,");")},Rt.invalidBlendCombinations=Kv});var q=z.next={},F=z.current={};Object.keys(yt).forEach(function(O){Array.isArray(xt[O])&&(q[O]=$.def(K.next,".",O),F[O]=$.def(K.current,".",O))});var G=z.constants={};Object.keys(Rt).forEach(function(O){G[O]=$.def(JSON.stringify(Rt[O]))}),z.invoke=function(O,T){switch(T.type){case $1:var U=["this",K.context,K.props,z.batchId];return O.def(k(T.data),".call(",U.slice(0,Math.max(T.data.length+1,4)),")");case F1:return O.def(K.props,T.data);case q1:return O.def(K.context,T.data);case D1:return O.def("this",T.data);case _f:return T.data.append(z,O),T.data.ref;case Mv:return T.data.toString();case kv:return T.data.map(function(Q){return z.invoke(O,Q)})}},z.attribCache={};var L={};return z.scopeAttrib=function(O){var T=E.id(O);if(T in L)return L[T];var U=Nt.scope[T];U||(U=Nt.scope[T]=new Y);var Q=L[T]=k(U);return Q},z}function We(z){var k=z.static,$=z.dynamic,W;if(Uc in k){var K=!!k[Uc];W=_n(function(F,G){return K}),W.enable=K}else if(Uc in $){var q=$[Uc];W=jr(q,function(F,G){return F.invoke(G,q)})}return W}function ae(z,k){var $=z.static,W=z.dynamic;if(ks in $){var K=$[ks];return K?(K=Mt.getFramebuffer(K),S.command(K,"invalid framebuffer object"),_n(function(F,G){var L=F.link(K),O=F.shared;G.set(O.framebuffer,".next",L);var T=O.context;return G.set(T,"."+Si,L+".width"),G.set(T,"."+Ei,L+".height"),L})):_n(function(F,G){var L=F.shared;G.set(L.framebuffer,".next","null");var O=L.context;return G.set(O,"."+Si,O+"."+Gv),G.set(O,"."+Ei,O+"."+Hv),"null"})}else if(ks in W){var q=W[ks];return jr(q,function(F,G){var L=F.invoke(G,q),O=F.shared,T=O.framebuffer,U=G.def(T,".getFramebuffer(",L,")");S.optional(function(){F.assert(G,"!"+L+"||"+U,"invalid framebuffer object")}),G.set(T,".next",U);var Q=O.context;return G.set(Q,"."+Si,U+"?"+U+".width:"+Q+"."+Gv),G.set(Q,"."+Ei,U+"?"+U+".height:"+Q+"."+Hv),U})}else return null}function to(z,k,$){var W=z.static,K=z.dynamic;function q(L){if(L in W){var O=W[L];S.commandType(O,"object","invalid "+L,$.commandStr);var T=!0,U=O.x|0,Q=O.y|0,ht,pt;return"width"in O?(ht=O.width|0,S.command(ht>=0,"invalid "+L,$.commandStr)):T=!1,"height"in O?(pt=O.height|0,S.command(pt>=0,"invalid "+L,$.commandStr)):T=!1,new zr(!T&&k&&k.thisDep,!T&&k&&k.contextDep,!T&&k&&k.propDep,function(pe,Xe){var se=pe.shared.context,Ae=ht;"width"in O||(Ae=Xe.def(se,".",Si,"-",U));var Ge=pt;return"height"in O||(Ge=Xe.def(se,".",Ei,"-",Q)),[U,Q,Ae,Ge]})}else if(L in K){var ft=K[L],zt=jr(ft,function(pe,Xe){var se=pe.invoke(Xe,ft);S.optional(function(){pe.assert(Xe,se+"&&typeof "+se+'==="object"',"invalid "+L)});var Ae=pe.shared.context,Ge=Xe.def(se,".x|0"),wo=Xe.def(se,".y|0"),fn=Xe.def('"width" in ',se,"?",se,".width|0:","(",Ae,".",Si,"-",Ge,")"),Lr=Xe.def('"height" in ',se,"?",se,".height|0:","(",Ae,".",Ei,"-",wo,")");return S.optional(function(){pe.assert(Xe,fn+">=0&&"+Lr+">=0","invalid "+L)}),[Ge,wo,fn,Lr]});return k&&(zt.thisDep=zt.thisDep||k.thisDep,zt.contextDep=zt.contextDep||k.contextDep,zt.propDep=zt.propDep||k.propDep),zt}else return k?new zr(k.thisDep,k.contextDep,k.propDep,function(pe,Xe){var se=pe.shared.context;return[0,0,Xe.def(se,".",Si),Xe.def(se,".",Ei)]}):null}var F=q(da);if(F){var G=F;F=new zr(F.thisDep,F.contextDep,F.propDep,function(L,O){var T=G.append(L,O),U=L.shared.context;return O.set(U,"."+Hw,T[2]),O.set(U,"."+Bw,T[3]),T})}return{viewport:F,scissor_box:q(Mf)}}function De(z,k){var $=z.static,W=typeof $[Wc]=="string"&&typeof $[jc]=="string";if(W){if(Object.keys(k.dynamic).length>0)return null;var K=k.static,q=Object.keys(K);if(q.length>0&&typeof K[q[0]]=="number"){for(var F=[],G=0;G<q.length;++G)S(typeof K[q[G]]=="number","must specify all vertex attribute locations when using vaos"),F.push([K[q[G]]|0,q[G]]);return F}}return null}function Ke(z,k,$){var W=z.static,K=z.dynamic;function q(T){if(T in W){var U=E.id(W[T]);S.optional(function(){At.shader(Qv[T],U,S.guessCommand())});var Q=_n(function(){return U});return Q.id=U,Q}else if(T in K){var ht=K[T];return jr(ht,function(pt,ft){var zt=pt.invoke(ft,ht),pe=ft.def(pt.shared.strings,".id(",zt,")");return S.optional(function(){ft(pt.shared.shader,".shader(",Qv[T],",",pe,",",pt.command,");")}),pe})}return null}var F=q(Wc),G=q(jc),L=null,O;return Ia(F)&&Ia(G)?(L=At.program(G.id,F.id,null,$),O=_n(function(T,U){return T.link(L)})):O=new zr(F&&F.thisDep||G&&G.thisDep,F&&F.contextDep||G&&G.contextDep,F&&F.propDep||G&&G.propDep,function(T,U){var Q=T.shared.shader,ht;F?ht=F.append(T,U):ht=U.def(Q,".",Wc);var pt;G?pt=G.append(T,U):pt=U.def(Q,".",jc);var ft=Q+".program("+pt+","+ht;return S.optional(function(){ft+=","+T.command}),U.def(ft+")")}),{frag:F,vert:G,progVar:O,program:L}}function bo(z,k){var $=z.static,W=z.dynamic;function K(){if(Ss in $){var T=$[Ss];Pf(T)?T=nt.getElements(nt.create(T,!0)):T&&(T=nt.getElements(T),S.command(T,"invalid elements",k.commandStr));var U=_n(function(ht,pt){if(T){var ft=ht.link(T);return ht.ELEMENTS=ft,ft}return ht.ELEMENTS=null,null});return U.value=T,U}else if(Ss in W){var Q=W[Ss];return jr(Q,function(ht,pt){var ft=ht.shared,zt=ft.isBufferArgs,pe=ft.elements,Xe=ht.invoke(pt,Q),se=pt.def("null"),Ae=pt.def(zt,"(",Xe,")"),Ge=ht.cond(Ae).then(se,"=",pe,".createStream(",Xe,");").else(se,"=",pe,".getElements(",Xe,");");return S.optional(function(){ht.assert(Ge.else,"!"+Xe+"||"+se,"invalid elements")}),pt.entry(Ge),pt.exit(ht.cond(Ae).then(pe,".destroyStream(",se,");")),ht.ELEMENTS=se,se})}return null}var q=K();function F(){if(Es in $){var T=$[Es];return S.commandParameter(T,di,"invalid primitve",k.commandStr),_n(function(Q,ht){return di[T]})}else if(Es in W){var U=W[Es];return jr(U,function(Q,ht){var pt=Q.constants.primTypes,ft=Q.invoke(ht,U);return S.optional(function(){Q.assert(ht,ft+" in "+pt,"invalid primitive, must be one of "+Object.keys(di))}),ht.def(pt,"[",ft,"]")})}else if(q)return Ia(q)?q.value?_n(function(Q,ht){return ht.def(Q.ELEMENTS,".primType")}):_n(function(){return Uv}):new zr(q.thisDep,q.contextDep,q.propDep,function(Q,ht){var pt=Q.ELEMENTS;return ht.def(pt,"?",pt,".primType:",Uv)});return null}function G(T,U){if(T in $){var Q=$[T]|0;return S.command(!U||Q>=0,"invalid "+T,k.commandStr),_n(function(pt,ft){return U&&(pt.OFFSET=Q),Q})}else if(T in W){var ht=W[T];return jr(ht,function(pt,ft){var zt=pt.invoke(ft,ht);return U&&(pt.OFFSET=zt,S.optional(function(){pt.assert(ft,zt+">=0","invalid "+T)})),zt})}else if(U&&q)return _n(function(pt,ft){return pt.OFFSET="0",0});return null}var L=G(kf,!0);function O(){if(As in $){var T=$[As]|0;return S.command(typeof T=="number"&&T>=0,"invalid vertex count",k.commandStr),_n(function(){return T})}else if(As in W){var U=W[As];return jr(U,function(pt,ft){var zt=pt.invoke(ft,U);return S.optional(function(){pt.assert(ft,"typeof "+zt+'==="number"&&'+zt+">=0&&"+zt+"===("+zt+"|0)","invalid vertex count")}),zt})}else if(q)if(Ia(q)){if(q)return L?new zr(L.thisDep,L.contextDep,L.propDep,function(pt,ft){var zt=ft.def(pt.ELEMENTS,".vertCount-",pt.OFFSET);return S.optional(function(){pt.assert(ft,zt+">=0","invalid vertex offset/element buffer too small")}),zt}):_n(function(pt,ft){return ft.def(pt.ELEMENTS,".vertCount")});var Q=_n(function(){return-1});return S.optional(function(){Q.MISSING=!0}),Q}else{var ht=new zr(q.thisDep||L.thisDep,q.contextDep||L.contextDep,q.propDep||L.propDep,function(pt,ft){var zt=pt.ELEMENTS;return pt.OFFSET?ft.def(zt,"?",zt,".vertCount-",pt.OFFSET,":-1"):ft.def(zt,"?",zt,".vertCount:-1")});return S.optional(function(){ht.DYNAMIC=!0}),ht}return null}return{elements:q,primitive:F(),count:O(),instances:G(Sf,!1),offset:L}}function Mn(z,k){var $=z.static,W=z.dynamic,K={};return wt.forEach(function(q){var F=Ft(q);function G(L,O){if(q in $){var T=L($[q]);K[F]=_n(function(){return T})}else if(q in W){var U=W[q];K[F]=jr(U,function(Q,ht){return O(Q,ht,Q.invoke(ht,U))})}}switch(q){case Rv:case Ev:case Sv:case $v:case Tv:case qv:case Ov:case Pv:case Iv:case Nv:return G(function(L){return S.commandType(L,"boolean",q,k.commandStr),L},function(L,O,T){return S.optional(function(){L.assert(O,"typeof "+T+'==="boolean"',"invalid flag "+q,L.commandStr)}),T});case zv:return G(function(L){return S.commandParameter(L,Ti,"invalid "+q,k.commandStr),Ti[L]},function(L,O,T){var U=L.constants.compareFuncs;return S.optional(function(){L.assert(O,T+" in "+U,"invalid "+q+", must be one of "+Object.keys(Ti))}),O.def(U,"[",T,"]")});case Lv:return G(function(L){return S.command(vn(L)&&L.length===2&&typeof L[0]=="number"&&typeof L[1]=="number"&&L[0]<=L[1],"depth range is 2d array",k.commandStr),L},function(L,O,T){S.optional(function(){L.assert(O,L.shared.isArrayLike+"("+T+")&&"+T+".length===2&&typeof "+T+'[0]==="number"&&typeof '+T+'[1]==="number"&&'+T+"[0]<="+T+"[1]","depth range must be a 2d array")});var U=O.def("+",T,"[0]"),Q=O.def("+",T,"[1]");return[U,Q]});case H1:return G(function(L){S.commandType(L,"object","blend.func",k.commandStr);var O="srcRGB"in L?L.srcRGB:L.src,T="srcAlpha"in L?L.srcAlpha:L.src,U="dstRGB"in L?L.dstRGB:L.dst,Q="dstAlpha"in L?L.dstAlpha:L.dst;return S.commandParameter(O,ta,F+".srcRGB",k.commandStr),S.commandParameter(T,ta,F+".srcAlpha",k.commandStr),S.commandParameter(U,ta,F+".dstRGB",k.commandStr),S.commandParameter(Q,ta,F+".dstAlpha",k.commandStr),S.command(Kv.indexOf(O+", "+U)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+O+", "+U+")",k.commandStr),[ta[O],ta[U],ta[T],ta[Q]]},function(L,O,T){var U=L.constants.blendFuncs;S.optional(function(){L.assert(O,T+"&&typeof "+T+'==="object"',"invalid blend func, must be an object")});function Q(se,Ae){var Ge=O.def('"',se,Ae,'" in ',T,"?",T,".",se,Ae,":",T,".",se);return S.optional(function(){L.assert(O,Ge+" in "+U,"invalid "+q+"."+se+Ae+", must be one of "+Object.keys(ta))}),Ge}var ht=Q("src","RGB"),pt=Q("dst","RGB");S.optional(function(){var se=L.constants.invalidBlendCombinations;L.assert(O,se+".indexOf("+ht+'+", "+'+pt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ft=O.def(U,"[",ht,"]"),zt=O.def(U,"[",Q("src","Alpha"),"]"),pe=O.def(U,"[",pt,"]"),Xe=O.def(U,"[",Q("dst","Alpha"),"]");return[ft,pe,zt,Xe]});case G1:return G(function(L){if(typeof L=="string")return S.commandParameter(L,lt,"invalid "+q,k.commandStr),[lt[L],lt[L]];if(typeof L=="object")return S.commandParameter(L.rgb,lt,q+".rgb",k.commandStr),S.commandParameter(L.alpha,lt,q+".alpha",k.commandStr),[lt[L.rgb],lt[L.alpha]];S.commandRaise("invalid blend.equation",k.commandStr)},function(L,O,T){var U=L.constants.blendEquations,Q=O.def(),ht=O.def(),pt=L.cond("typeof ",T,'==="string"');return S.optional(function(){function ft(zt,pe,Xe){L.assert(zt,Xe+" in "+U,"invalid "+pe+", must be one of "+Object.keys(lt))}ft(pt.then,q,T),L.assert(pt.else,T+"&&typeof "+T+'==="object"',"invalid "+q),ft(pt.else,q+".rgb",T+".rgb"),ft(pt.else,q+".alpha",T+".alpha")}),pt.then(Q,"=",ht,"=",U,"[",T,"];"),pt.else(Q,"=",U,"[",T,".rgb];",ht,"=",U,"[",T,".alpha];"),O(pt),[Q,ht]});case Av:return G(function(L){return S.command(vn(L)&&L.length===4,"blend.color must be a 4d array",k.commandStr),Qe(4,function(O){return+L[O]})},function(L,O,T){return S.optional(function(){L.assert(O,L.shared.isArrayLike+"("+T+")&&"+T+".length===4","blend.color must be a 4d array")}),Qe(4,function(U){return O.def("+",T,"[",U,"]")})});case Fv:return G(function(L){return S.commandType(L,"number",F,k.commandStr),L|0},function(L,O,T){return S.optional(function(){L.assert(O,"typeof "+T+'==="number"',"invalid stencil.mask")}),O.def(T,"|0")});case X1:return G(function(L){S.commandType(L,"object",F,k.commandStr);var O=L.cmp||"keep",T=L.ref||0,U="mask"in L?L.mask:-1;return S.commandParameter(O,Ti,q+".cmp",k.commandStr),S.commandType(T,"number",q+".ref",k.commandStr),S.commandType(U,"number",q+".mask",k.commandStr),[Ti[O],T,U]},function(L,O,T){var U=L.constants.compareFuncs;S.optional(function(){function ft(){L.assert(O,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ft(T+"&&typeof ",T,'==="object"'),ft('!("cmp" in ',T,")||(",T,".cmp in ",U,")")});var Q=O.def('"cmp" in ',T,"?",U,"[",T,".cmp]",":",Oa),ht=O.def(T,".ref|0"),pt=O.def('"mask" in ',T,"?",T,".mask|0:-1");return[Q,ht,pt]});case Y1:case Bc:return G(function(L){S.commandType(L,"object",F,k.commandStr);var O=L.fail||"keep",T=L.zfail||"keep",U=L.zpass||"keep";return S.commandParameter(O,Pa,q+".fail",k.commandStr),S.commandParameter(T,Pa,q+".zfail",k.commandStr),S.commandParameter(U,Pa,q+".zpass",k.commandStr),[q===Bc?Ts:Jc,Pa[O],Pa[T],Pa[U]]},function(L,O,T){var U=L.constants.stencilOps;S.optional(function(){L.assert(O,T+"&&typeof "+T+'==="object"',"invalid "+q)});function Q(ht){return S.optional(function(){L.assert(O,'!("'+ht+'" in '+T+")||("+T+"."+ht+" in "+U+")","invalid "+q+"."+ht+", must be one of "+Object.keys(Pa))}),O.def('"',ht,'" in ',T,"?",U,"[",T,".",ht,"]:",Oa)}return[q===Bc?Ts:Jc,Q("fail"),Q("zfail"),Q("zpass")]});case W1:return G(function(L){S.commandType(L,"object",F,k.commandStr);var O=L.factor|0,T=L.units|0;return S.commandType(O,"number",F+".factor",k.commandStr),S.commandType(T,"number",F+".units",k.commandStr),[O,T]},function(L,O,T){S.optional(function(){L.assert(O,T+"&&typeof "+T+'==="object"',"invalid "+q)});var U=O.def(T,".factor|0"),Q=O.def(T,".units|0");return[U,Q]});case Cv:return G(function(L){var O=0;return L==="front"?O=Jc:L==="back"&&(O=Ts),S.command(!!O,F,k.commandStr),O},function(L,O,T){return S.optional(function(){L.assert(O,T+'==="front"||'+T+'==="back"',"invalid cull.face")}),O.def(T,'==="front"?',Jc,":",Ts)});case j1:return G(function(L){return S.command(typeof L=="number"&&L>=at.lineWidthDims[0]&&L<=at.lineWidthDims[1],"invalid line width, must be a positive number between "+at.lineWidthDims[0]+" and "+at.lineWidthDims[1],k.commandStr),L},function(L,O,T){return S.optional(function(){L.assert(O,"typeof "+T+'==="number"&&'+T+">="+at.lineWidthDims[0]+"&&"+T+"<="+at.lineWidthDims[1],"invalid line width")}),T});case U1:return G(function(L){return S.commandParameter(L,ou,F,k.commandStr),ou[L]},function(L,O,T){return S.optional(function(){L.assert(O,T+'==="cw"||'+T+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),O.def(T+'==="cw"?'+jv+":"+eu)});case B1:return G(function(L){return S.command(vn(L)&&L.length===4,"color.mask must be length 4 array",k.commandStr),L.map(function(O){return!!O})},function(L,O,T){return S.optional(function(){L.assert(O,L.shared.isArrayLike+"("+T+")&&"+T+".length===4","invalid color.mask")}),Qe(4,function(U){return"!!"+T+"["+U+"]"})});case V1:return G(function(L){S.command(typeof L=="object"&&L,F,k.commandStr);var O="value"in L?L.value:1,T=!!L.invert;return S.command(typeof O=="number"&&O>=0&&O<=1,"sample.coverage.value must be a number between 0 and 1",k.commandStr),[O,T]},function(L,O,T){S.optional(function(){L.assert(O,T+"&&typeof "+T+'==="object"',"invalid sample.coverage")});var U=O.def('"value" in ',T,"?+",T,".value:1"),Q=O.def("!!",T,".invert");return[U,Q]})}}),K}function qn(z,k){var $=z.static,W=z.dynamic,K={};return Object.keys($).forEach(function(q){var F=$[q],G;if(typeof F=="number"||typeof F=="boolean")G=_n(function(){return F});else if(typeof F=="function"){var L=F._reglType;L==="texture2d"||L==="textureCube"?G=_n(function(O){return O.link(F)}):L==="framebuffer"||L==="framebufferCube"?(S.command(F.color.length>0,'missing color attachment for framebuffer sent to uniform "'+q+'"',k.commandStr),G=_n(function(O){return O.link(F.color[0])})):S.commandRaise('invalid data for uniform "'+q+'"',k.commandStr)}else vn(F)?G=_n(function(O){var T=O.global.def("[",Qe(F.length,function(U){return S.command(typeof F[U]=="number"||typeof F[U]=="boolean","invalid uniform "+q,O.commandStr),F[U]}),"]");return T}):S.commandRaise('invalid or missing data for uniform "'+q+'"',k.commandStr);G.value=F,K[q]=G}),Object.keys(W).forEach(function(q){var F=W[q];K[q]=jr(F,function(G,L){return G.invoke(L,F)})}),K}function so(z,k){var $=z.static,W=z.dynamic,K={};return Object.keys($).forEach(function(q){var F=$[q],G=E.id(q),L=new Y;if(Pf(F))L.state=ki,L.buffer=dt.getBuffer(dt.create(F,Ai,!1,!0)),L.type=0;else{var O=dt.getBuffer(F);if(O)L.state=ki,L.buffer=O,L.type=0;else if(S.command(typeof F=="object"&&F,"invalid data for attribute "+q,k.commandStr),"constant"in F){var T=F.constant;L.buffer="null",L.state=I1,typeof T=="number"?L.x=T:(S.command(vn(T)&&T.length>0&&T.length<=4,"invalid constant for attribute "+q,k.commandStr),Mi.forEach(function(pe,Xe){Xe<T.length&&(L[pe]=T[Xe])}))}else{Pf(F.buffer)?O=dt.getBuffer(dt.create(F.buffer,Ai,!1,!0)):O=dt.getBuffer(F.buffer),S.command(!!O,'missing buffer for attribute "'+q+'"',k.commandStr);var U=F.offset|0;S.command(U>=0,'invalid offset for attribute "'+q+'"',k.commandStr);var Q=F.stride|0;S.command(Q>=0&&Q<256,'invalid stride for attribute "'+q+'", must be integer betweeen [0, 255]',k.commandStr);var ht=F.size|0;S.command(!("size"in F)||ht>0&&ht<=4,'invalid size for attribute "'+q+'", must be 1,2,3,4',k.commandStr);var pt=!!F.normalized,ft=0;"type"in F&&(S.commandParameter(F.type,ys,"invalid type for attribute "+q,k.commandStr),ft=ys[F.type]);var zt=F.divisor|0;"divisor"in F&&(S.command(zt===0||Lt,'cannot specify divisor for attribute "'+q+'", instancing not supported',k.commandStr),S.command(zt>=0,'invalid divisor for attribute "'+q+'"',k.commandStr)),S.optional(function(){var pe=k.commandStr,Xe=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(F).forEach(function(se){S.command(Xe.indexOf(se)>=0,'unknown parameter "'+se+'" for attribute pointer "'+q+'" (valid parameters are '+Xe+")",pe)})}),L.buffer=O,L.state=ki,L.size=ht,L.normalized=pt,L.type=ft||O.dtype,L.offset=U,L.stride=Q,L.divisor=zt}}K[q]=_n(function(pe,Xe){var se=pe.attribCache;if(G in se)return se[G];var Ae={isStream:!1};return Object.keys(L).forEach(function(Ge){Ae[Ge]=L[Ge]}),L.buffer&&(Ae.buffer=pe.link(L.buffer),Ae.type=Ae.type||Ae.buffer+".dtype"),se[G]=Ae,Ae})}),Object.keys(W).forEach(function(q){var F=W[q];function G(L,O){var T=L.invoke(O,F),U=L.shared,Q=L.constants,ht=U.isBufferArgs,pt=U.buffer;S.optional(function(){L.assert(O,T+"&&(typeof "+T+'==="object"||typeof '+T+'==="function")&&('+ht+"("+T+")||"+pt+".getBuffer("+T+")||"+pt+".getBuffer("+T+".buffer)||"+ht+"("+T+'.buffer)||("constant" in '+T+"&&(typeof "+T+'.constant==="number"||'+U.isArrayLike+"("+T+".constant))))",'invalid dynamic attribute "'+q+'"')});var ft={isStream:O.def(!1)},zt=new Y;zt.state=ki,Object.keys(zt).forEach(function(Ae){ft[Ae]=O.def(""+zt[Ae])});var pe=ft.buffer,Xe=ft.type;O("if(",ht,"(",T,")){",ft.isStream,"=true;",pe,"=",pt,".createStream(",Ai,",",T,");",Xe,"=",pe,".dtype;","}else{",pe,"=",pt,".getBuffer(",T,");","if(",pe,"){",Xe,"=",pe,".dtype;",'}else if("constant" in ',T,"){",ft.state,"=",I1,";","if(typeof "+T+'.constant === "number"){',ft[Mi[0]],"=",T,".constant;",Mi.slice(1).map(function(Ae){return ft[Ae]}).join("="),"=0;","}else{",Mi.map(function(Ae,Ge){return ft[Ae]+"="+T+".constant.length>"+Ge+"?"+T+".constant["+Ge+"]:0;"}).join(""),"}}else{","if(",ht,"(",T,".buffer)){",pe,"=",pt,".createStream(",Ai,",",T,".buffer);","}else{",pe,"=",pt,".getBuffer(",T,".buffer);","}",Xe,'="type" in ',T,"?",Q.glTypes,"[",T,".type]:",pe,".dtype;",ft.normalized,"=!!",T,".normalized;");function se(Ae){O(ft[Ae],"=",T,".",Ae,"|0;")}return se("size"),se("offset"),se("stride"),se("divisor"),O("}}"),O.exit("if(",ft.isStream,"){",pt,".destroyStream(",pe,");","}"),ft}K[q]=jr(F,G)}),K}function Ln(z,k){var $=z.static,W=z.dynamic;if(Vc in $){var K=$[Vc];return K!==null&&Nt.getVAO(K)===null&&(K=Nt.createVAO(K)),_n(function(F){return F.link(Nt.getVAO(K))})}else if(Vc in W){var q=W[Vc];return jr(q,function(F,G){var L=F.invoke(G,q);return G.def(F.shared.vao+".getVAO("+L+")")})}return null}function Xo(z){var k=z.static,$=z.dynamic,W={};return Object.keys(k).forEach(function(K){var q=k[K];W[K]=_n(function(F,G){return typeof q=="number"||typeof q=="boolean"?""+q:F.link(q)})}),Object.keys($).forEach(function(K){var q=$[K];W[K]=jr(q,function(F,G){return F.invoke(G,q)})}),W}function kn(z,k,$,W,K){var q=z.static,F=z.dynamic;S.optional(function(){var se=[ks,jc,Wc,Ss,Es,kf,As,Sf,Uc,Vc].concat(wt);function Ae(Ge){Object.keys(Ge).forEach(function(wo){S.command(se.indexOf(wo)>=0,'unknown parameter "'+wo+'"',K.commandStr)})}Ae(q),Ae(F)});var G=De(z,k),L=ae(z,K),O=to(z,L,K),T=bo(z,K),U=Mn(z,K),Q=Ke(z,K,G);function ht(se){var Ae=O[se];Ae&&(U[se]=Ae)}ht(da),ht(Ft(Mf));var pt=Object.keys(U).length>0,ft={framebuffer:L,draw:T,shader:Q,state:U,dirty:pt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ft.profile=We(z,K),ft.uniforms=qn($,K),ft.drawVAO=ft.scopeVAO=Ln(z,K),!ft.drawVAO&&Q.program&&!G&&C.angle_instanced_arrays){var zt=!0,pe=Q.program.attributes.map(function(se){var Ae=k.static[se];return zt=zt&&!!Ae,Ae});if(zt&&pe.length>0){var Xe=Nt.getVAO(Nt.createVAO(pe));ft.drawVAO=new zr(null,null,null,function(se,Ae){return se.link(Xe)}),ft.useVAO=!0}}return G?ft.useVAO=!0:ft.attributes=so(k,K),ft.context=Xo(W,K),ft}function Nn(z,k,$){var W=z.shared,K=W.context,q=z.scope();Object.keys($).forEach(function(F){k.save(K,"."+F);var G=$[F],L=G.append(z,k);Array.isArray(L)?q(K,".",F,"=[",L.join(),"];"):q(K,".",F,"=",L,";")}),k(q)}function Rn(z,k,$,W){var K=z.shared,q=K.gl,F=K.framebuffer,G;Xt&&(G=k.def(K.extensions,".webgl_draw_buffers"));var L=z.constants,O=L.drawBuffer,T=L.backBuffer,U;$?U=$.append(z,k):U=k.def(F,".next"),W||k("if(",U,"!==",F,".cur){"),k("if(",U,"){",q,".bindFramebuffer(",Yv,",",U,".framebuffer);"),Xt&&k(G,".drawBuffersWEBGL(",O,"[",U,".colorAttachments.length]);"),k("}else{",q,".bindFramebuffer(",Yv,",null);"),Xt&&k(G,".drawBuffersWEBGL(",T,");"),k("}",F,".cur=",U,";"),W||k("}")}function Zn(z,k,$){var W=z.shared,K=W.gl,q=z.current,F=z.next,G=W.current,L=W.next,O=z.cond(G,".dirty");wt.forEach(function(T){var U=Ft(T);if(!(U in $.state)){var Q,ht;if(U in F){Q=F[U],ht=q[U];var pt=Qe(xt[U].length,function(zt){return O.def(Q,"[",zt,"]")});O(z.cond(pt.map(function(zt,pe){return zt+"!=="+ht+"["+pe+"]"}).join("||")).then(K,".",yt[U],"(",pt,");",pt.map(function(zt,pe){return ht+"["+pe+"]="+zt}).join(";"),";"))}else{Q=O.def(L,".",U);var ft=z.cond(Q,"!==",G,".",U);O(ft),U in $t?ft(z.cond(Q).then(K,".enable(",$t[U],");").else(K,".disable(",$t[U],");"),G,".",U,"=",Q,";"):ft(K,".",yt[U],"(",Q,");",G,".",U,"=",Q,";")}}}),Object.keys($.state).length===0&&O(G,".dirty=false;"),k(O)}function cr(z,k,$,W){var K=z.shared,q=z.current,F=K.current,G=K.gl;Zv(Object.keys($)).forEach(function(L){var O=$[L];if(!(W&&!W(O))){var T=O.append(z,k);if($t[L]){var U=$t[L];Ia(O)?T?k(G,".enable(",U,");"):k(G,".disable(",U,");"):k(z.cond(T).then(G,".enable(",U,");").else(G,".disable(",U,");")),k(F,".",L,"=",T,";")}else if(vn(T)){var Q=q[L];k(G,".",yt[L],"(",T,");",T.map(function(ht,pt){return Q+"["+pt+"]="+ht}).join(";"),";")}else k(G,".",yt[L],"(",T,");",F,".",L,"=",T,";")}})}function mn(z,k){Lt&&(z.instancing=k.def(z.shared.extensions,".angle_instanced_arrays"))}function Ve(z,k,$,W,K){var q=z.shared,F=z.stats,G=q.current,L=q.timer,O=$.profile;function T(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var U,Q;function ht(se){U=k.def(),se(U,"=",T(),";"),typeof K=="string"?se(F,".count+=",K,";"):se(F,".count++;"),kt&&(W?(Q=k.def(),se(Q,"=",L,".getNumPendingQueries();")):se(L,".beginQuery(",F,");"))}function pt(se){se(F,".cpuTime+=",T(),"-",U,";"),kt&&(W?se(L,".pushScopeStats(",Q,",",L,".getNumPendingQueries(),",F,");"):se(L,".endQuery();"))}function ft(se){var Ae=k.def(G,".profile");k(G,".profile=",se,";"),k.exit(G,".profile=",Ae,";")}var zt;if(O){if(Ia(O)){O.enable?(ht(k),pt(k.exit),ft("true")):ft("false");return}zt=O.append(z,k),ft(zt)}else zt=k.def(G,".profile");var pe=z.block();ht(pe),k("if(",zt,"){",pe,"}");var Xe=z.block();pt(Xe),k.exit("if(",zt,"){",Xe,"}")}function lr(z,k,$,W,K){var q=z.shared;function F(L){switch(L){case Ef:case zf:case Rf:return 2;case Af:case Lf:case Cf:return 3;case Tf:case Nf:case Of:return 4;default:return 1}}function G(L,O,T){var U=q.gl,Q=k.def(L,".location"),ht=k.def(q.attributes,"[",Q,"]"),pt=T.state,ft=T.buffer,zt=[T.x,T.y,T.z,T.w],pe=["buffer","normalized","offset","stride"];function Xe(){k("if(!",ht,".buffer){",U,".enableVertexAttribArray(",Q,");}");var Ae=T.type,Ge;if(T.size?Ge=k.def(T.size,"||",O):Ge=O,k("if(",ht,".type!==",Ae,"||",ht,".size!==",Ge,"||",pe.map(function(fn){return ht+"."+fn+"!=="+T[fn]}).join("||"),"){",U,".bindBuffer(",Ai,",",ft,".buffer);",U,".vertexAttribPointer(",[Q,Ge,Ae,T.normalized,T.stride,T.offset],");",ht,".type=",Ae,";",ht,".size=",Ge,";",pe.map(function(fn){return ht+"."+fn+"="+T[fn]+";"}).join(""),"}"),Lt){var wo=T.divisor;k("if(",ht,".divisor!==",wo,"){",z.instancing,".vertexAttribDivisorANGLE(",[Q,wo],");",ht,".divisor=",wo,";}")}}function se(){k("if(",ht,".buffer){",U,".disableVertexAttribArray(",Q,");",ht,".buffer=null;","}if(",Mi.map(function(Ae,Ge){return ht+"."+Ae+"!=="+zt[Ge]}).join("||"),"){",U,".vertexAttrib4f(",Q,",",zt,");",Mi.map(function(Ae,Ge){return ht+"."+Ae+"="+zt[Ge]+";"}).join(""),"}")}pt===ki?Xe():pt===I1?se():(k("if(",pt,"===",ki,"){"),Xe(),k("}else{"),se(),k("}"))}W.forEach(function(L){var O=L.name,T=$.attributes[O],U;if(T){if(!K(T))return;U=T.append(z,k)}else{if(!K(Jv))return;var Q=z.scopeAttrib(O);S.optional(function(){z.assert(k,Q+".state","missing attribute "+O)}),U={},Object.keys(new Y).forEach(function(ht){U[ht]=k.def(Q,".",ht)})}G(z.link(L),F(L.info.type),U)})}function To(z,k,$,W,K){for(var q=z.shared,F=q.gl,G,L=0;L<W.length;++L){var O=W[L],T=O.name,U=O.info.type,Q=$.uniforms[T],ht=z.link(O),pt=ht+".location",ft;if(Q){if(!K(Q))continue;if(Ia(Q)){var zt=Q.value;if(S.command(zt!==null&&typeof zt!="undefined",'missing uniform "'+T+'"',z.commandStr),U===Qc||U===Zc){S.command(typeof zt=="function"&&(U===Qc&&(zt._reglType==="texture2d"||zt._reglType==="framebuffer")||U===Zc&&(zt._reglType==="textureCube"||zt._reglType==="framebufferCube")),"invalid texture for uniform "+T,z.commandStr);var pe=z.link(zt._texture||zt.color[0]._texture);k(F,".uniform1i(",pt,",",pe+".bind());"),k.exit(pe,".unbind();")}else if(U===Xc||U===Yc||U===Kc){S.optional(function(){S.command(vn(zt),"invalid matrix for uniform "+T,z.commandStr),S.command(U===Xc&&zt.length===4||U===Yc&&zt.length===9||U===Kc&&zt.length===16,"invalid length for matrix uniform "+T,z.commandStr)});var Xe=z.global.def("new Float32Array(["+Array.prototype.slice.call(zt)+"])"),se=2;U===Yc?se=3:U===Kc&&(se=4),k(F,".uniformMatrix",se,"fv(",pt,",false,",Xe,");")}else{switch(U){case Z1:S.commandType(zt,"number","uniform "+T,z.commandStr),G="1f";break;case Ef:S.command(vn(zt)&&zt.length===2,"uniform "+T,z.commandStr),G="2f";break;case Af:S.command(vn(zt)&&zt.length===3,"uniform "+T,z.commandStr),G="3f";break;case Tf:S.command(vn(zt)&&zt.length===4,"uniform "+T,z.commandStr),G="4f";break;case tu:S.commandType(zt,"boolean","uniform "+T,z.commandStr),G="1i";break;case J1:S.commandType(zt,"number","uniform "+T,z.commandStr),G="1i";break;case Rf:S.command(vn(zt)&&zt.length===2,"uniform "+T,z.commandStr),G="2i";break;case zf:S.command(vn(zt)&&zt.length===2,"uniform "+T,z.commandStr),G="2i";break;case Cf:S.command(vn(zt)&&zt.length===3,"uniform "+T,z.commandStr),G="3i";break;case Lf:S.command(vn(zt)&&zt.length===3,"uniform "+T,z.commandStr),G="3i";break;case Of:S.command(vn(zt)&&zt.length===4,"uniform "+T,z.commandStr),G="4i";break;case Nf:S.command(vn(zt)&&zt.length===4,"uniform "+T,z.commandStr),G="4i";break}k(F,".uniform",G,"(",pt,",",vn(zt)?Array.prototype.slice.call(zt):zt,");")}continue}else ft=Q.append(z,k)}else{if(!K(Jv))continue;ft=k.def(q.uniforms,"[",E.id(T),"]")}U===Qc?(S(!Array.isArray(ft),"must specify a scalar prop for textures"),k("if(",ft,"&&",ft,'._reglType==="framebuffer"){',ft,"=",ft,".color[0];","}")):U===Zc&&(S(!Array.isArray(ft),"must specify a scalar prop for cube maps"),k("if(",ft,"&&",ft,'._reglType==="framebufferCube"){',ft,"=",ft,".color[0];","}")),S.optional(function(){function Lr($0,sm){z.assert(k,$0,'bad data or missing for uniform "'+T+'".  '+sm)}function nu($0){S(!Array.isArray(ft),"must not specify an array type for uniform"),Lr("typeof "+ft+'==="'+$0+'"',"invalid type, expected "+$0)}function y0($0,sm){Array.isArray(ft)?S(ft.length===$0,"must have length "+$0):Lr(q.isArrayLike+"("+ft+")&&"+ft+".length==="+$0,"invalid vector, should have length "+$0,z.commandStr)}function am($0){S(!Array.isArray(ft),"must not specify a value type"),Lr("typeof "+ft+'==="function"&&'+ft+'._reglType==="texture'+($0===Bv?"2d":"Cube")+'"',"invalid texture type",z.commandStr)}switch(U){case J1:nu("number");break;case zf:y0(2,"number");break;case Lf:y0(3,"number");break;case Nf:y0(4,"number");break;case Z1:nu("number");break;case Ef:y0(2,"number");break;case Af:y0(3,"number");break;case Tf:y0(4,"number");break;case tu:nu("boolean");break;case Rf:y0(2,"boolean");break;case Cf:y0(3,"boolean");break;case Of:y0(4,"boolean");break;case Xc:y0(4,"number");break;case Yc:y0(9,"number");break;case Kc:y0(16,"number");break;case Qc:am(Bv);break;case Zc:am(Xw);break}});var Ae=1;switch(U){case Qc:case Zc:var Ge=k.def(ft,"._texture");k(F,".uniform1i(",pt,",",Ge,".bind());"),k.exit(Ge,".unbind();");continue;case J1:case tu:G="1i";break;case zf:case Rf:G="2i",Ae=2;break;case Lf:case Cf:G="3i",Ae=3;break;case Nf:case Of:G="4i",Ae=4;break;case Z1:G="1f";break;case Ef:G="2f",Ae=2;break;case Af:G="3f",Ae=3;break;case Tf:G="4f",Ae=4;break;case Xc:G="Matrix2fv";break;case Yc:G="Matrix3fv";break;case Kc:G="Matrix4fv";break}if(k(F,".uniform",G,"(",pt,","),G.charAt(0)==="M"){var wo=Math.pow(U-Xc+2,2),fn=z.global.def("new Float32Array(",wo,")");Array.isArray(ft)?k("false,(",Qe(wo,function(Lr){return fn+"["+Lr+"]="+ft[Lr]}),",",fn,")"):k("false,(Array.isArray(",ft,")||",ft," instanceof Float32Array)?",ft,":(",Qe(wo,function(Lr){return fn+"["+Lr+"]="+ft+"["+Lr+"]"}),",",fn,")")}else Ae>1?k(Qe(Ae,function(Lr){return Array.isArray(ft)?ft[Lr]:ft+"["+Lr+"]"})):(S(!Array.isArray(ft),"uniform value must not be an array"),k(ft));k(");")}}function ke(z,k,$,W){var K=z.shared,q=K.gl,F=K.draw,G=W.draw;function L(){var Ge=G.elements,wo,fn=k;return Ge?((Ge.contextDep&&W.contextDynamic||Ge.propDep)&&(fn=$),wo=Ge.append(z,fn)):wo=fn.def(F,".",Ss),wo&&fn("if("+wo+")"+q+".bindBuffer("+jw+","+wo+".buffer.buffer);"),wo}function O(){var Ge=G.count,wo,fn=k;return Ge?((Ge.contextDep&&W.contextDynamic||Ge.propDep)&&(fn=$),wo=Ge.append(z,fn),S.optional(function(){Ge.MISSING&&z.assert(k,"false","missing vertex count"),Ge.DYNAMIC&&z.assert(fn,wo+">=0","missing vertex count")})):(wo=fn.def(F,".",As),S.optional(function(){z.assert(fn,wo+">=0","missing vertex count")})),wo}var T=L();function U(Ge){var wo=G[Ge];return wo?wo.contextDep&&W.contextDynamic||wo.propDep?wo.append(z,$):wo.append(z,k):k.def(F,".",Ge)}var Q=U(Es),ht=U(kf),pt=O();if(typeof pt=="number"){if(pt===0)return}else $("if(",pt,"){"),$.exit("}");var ft,zt;Lt&&(ft=U(Sf),zt=z.instancing);var pe=T+".type",Xe=G.elements&&Ia(G.elements);function se(){function Ge(){$(zt,".drawElementsInstancedANGLE(",[Q,pt,pe,ht+"<<(("+pe+"-"+_v+")>>1)",ft],");")}function wo(){$(zt,".drawArraysInstancedANGLE(",[Q,ht,pt,ft],");")}T?Xe?Ge():($("if(",T,"){"),Ge(),$("}else{"),wo(),$("}")):wo()}function Ae(){function Ge(){$(q+".drawElements("+[Q,pt,pe,ht+"<<(("+pe+"-"+_v+")>>1)"]+");")}function wo(){$(q+".drawArrays("+[Q,ht,pt]+");")}T?Xe?Ge():($("if(",T,"){"),Ge(),$("}else{"),wo(),$("}")):wo()}Lt&&(typeof ft!="number"||ft>=0)?typeof ft=="string"?($("if(",ft,">0){"),se(),$("}else if(",ft,"<0){"),Ae(),$("}")):se():Ae()}function ro(z,k,$,W,K){var q=Re(),F=q.proc("body",K);return S.optional(function(){q.commandStr=k.commandStr,q.command=q.link(k.commandStr)}),Lt&&(q.instancing=F.def(q.shared.extensions,".angle_instanced_arrays")),z(q,F,$,W),q.compile().body}function vo(z,k,$,W){mn(z,k),$.useVAO?$.drawVAO?k(z.shared.vao,".setVAO(",$.drawVAO.append(z,k),");"):k(z.shared.vao,".setVAO(",z.shared.vao,".targetVAO);"):(k(z.shared.vao,".setVAO(null);"),lr(z,k,$,W.attributes,function(){return!0})),To(z,k,$,W.uniforms,function(){return!0}),ke(z,k,k,$)}function gn(z,k){var $=z.proc("draw",1);mn(z,$),Nn(z,$,k.context),Rn(z,$,k.framebuffer),Zn(z,$,k),cr(z,$,k.state),Ve(z,$,k,!1,!0);var W=k.shader.progVar.append(z,$);if($(z.shared.gl,".useProgram(",W,".program);"),k.shader.program)vo(z,$,k,k.shader.program);else{$(z.shared.vao,".setVAO(null);");var K=z.global.def("{}"),q=$.def(W,".id"),F=$.def(K,"[",q,"]");$(z.cond(F).then(F,".call(this,a0);").else(F,"=",K,"[",q,"]=",z.link(function(G){return ro(vo,z,k,G,1)}),"(",W,");",F,".call(this,a0);"))}Object.keys(k.state).length>0&&$(z.shared.current,".dirty=true;")}function ea(z,k,$,W){z.batchId="a1",mn(z,k);function K(){return!0}lr(z,k,$,W.attributes,K),To(z,k,$,W.uniforms,K),ke(z,k,k,$)}function zs(z,k,$,W){mn(z,k);var K=$.contextDep,q=k.def(),F="a0",G="a1",L=k.def();z.shared.props=L,z.batchId=q;var O=z.scope(),T=z.scope();k(O.entry,"for(",q,"=0;",q,"<",G,";++",q,"){",L,"=",F,"[",q,"];",T,"}",O.exit);function U(pe){return pe.contextDep&&K||pe.propDep}function Q(pe){return!U(pe)}if($.needsContext&&Nn(z,T,$.context),$.needsFramebuffer&&Rn(z,T,$.framebuffer),cr(z,T,$.state,U),$.profile&&U($.profile)&&Ve(z,T,$,!1,!0),W)$.useVAO?$.drawVAO?U($.drawVAO)?T(z.shared.vao,".setVAO(",$.drawVAO.append(z,T),");"):O(z.shared.vao,".setVAO(",$.drawVAO.append(z,O),");"):O(z.shared.vao,".setVAO(",z.shared.vao,".targetVAO);"):(O(z.shared.vao,".setVAO(null);"),lr(z,O,$,W.attributes,Q),lr(z,T,$,W.attributes,U)),To(z,O,$,W.uniforms,Q),To(z,T,$,W.uniforms,U),ke(z,O,T,$);else{var ht=z.global.def("{}"),pt=$.shader.progVar.append(z,T),ft=T.def(pt,".id"),zt=T.def(ht,"[",ft,"]");T(z.shared.gl,".useProgram(",pt,".program);","if(!",zt,"){",zt,"=",ht,"[",ft,"]=",z.link(function(pe){return ro(ea,z,$,pe,2)}),"(",pt,");}",zt,".call(this,a0[",q,"],",q,");")}}function N(z,k){var $=z.proc("batch",2);z.batchId="0",mn(z,$);var W=!1,K=!0;Object.keys(k.context).forEach(function(ht){W=W||k.context[ht].propDep}),W||(Nn(z,$,k.context),K=!1);var q=k.framebuffer,F=!1;q?(q.propDep?W=F=!0:q.contextDep&&W&&(F=!0),F||Rn(z,$,q)):Rn(z,$,null),k.state.viewport&&k.state.viewport.propDep&&(W=!0);function G(ht){return ht.contextDep&&W||ht.propDep}Zn(z,$,k),cr(z,$,k.state,function(ht){return!G(ht)}),(!k.profile||!G(k.profile))&&Ve(z,$,k,!1,"a1"),k.contextDep=W,k.needsContext=K,k.needsFramebuffer=F;var L=k.shader.progVar;if(L.contextDep&&W||L.propDep)zs(z,$,k,null);else{var O=L.append(z,$);if($(z.shared.gl,".useProgram(",O,".program);"),k.shader.program)zs(z,$,k,k.shader.program);else{$(z.shared.vao,".setVAO(null);");var T=z.global.def("{}"),U=$.def(O,".id"),Q=$.def(T,"[",U,"]");$(z.cond(Q).then(Q,".call(this,a0,a1);").else(Q,"=",T,"[",U,"]=",z.link(function(ht){return ro(zs,z,k,ht,2)}),"(",O,");",Q,".call(this,a0,a1);"))}}Object.keys(k.state).length>0&&$(z.shared.current,".dirty=true;")}function it(z,k){var $=z.proc("scope",3);z.batchId="a2";var W=z.shared,K=W.current;Nn(z,$,k.context),k.framebuffer&&k.framebuffer.append(z,$),Zv(Object.keys(k.state)).forEach(function(F){var G=k.state[F],L=G.append(z,$);vn(L)?L.forEach(function(O,T){$.set(z.next[F],"["+T+"]",O)}):$.set(W.next,"."+F,L)}),Ve(z,$,k,!0,!0),[Ss,kf,As,Sf,Es].forEach(function(F){var G=k.draw[F];G&&$.set(W.draw,"."+F,""+G.append(z,$))}),Object.keys(k.uniforms).forEach(function(F){var G=k.uniforms[F].append(z,$);Array.isArray(G)&&(G="["+G.join()+"]"),$.set(W.uniforms,"["+E.id(F)+"]",G)}),Object.keys(k.attributes).forEach(function(F){var G=k.attributes[F].append(z,$),L=z.scopeAttrib(F);Object.keys(new Y).forEach(function(O){$.set(L,"."+O,G[O])})}),k.scopeVAO&&$.set(W.vao,".targetVAO",k.scopeVAO.append(z,$));function q(F){var G=k.shader[F];G&&$.set(W.shader,"."+F,G.append(z,$))}q(jc),q(Wc),Object.keys(k.state).length>0&&($(K,".dirty=true;"),$.exit(K,".dirty=true;")),$("a1(",z.shared.context,",a0,",z.batchId,");")}function tt(z){if(!(typeof z!="object"||vn(z))){for(var k=Object.keys(z),$=0;$<k.length;++$)if(It.isDynamic(z[k[$]]))return!0;return!1}}function te(z,k,$){var W=k.static[$];if(!W||!tt(W))return;var K=z.global,q=Object.keys(W),F=!1,G=!1,L=!1,O=z.global.def("{}");q.forEach(function(U){var Q=W[U];if(It.isDynamic(Q)){typeof Q=="function"&&(Q=W[U]=It.unbox(Q));var ht=jr(Q,null);F=F||ht.thisDep,L=L||ht.propDep,G=G||ht.contextDep}else{switch(K(O,".",U,"="),typeof Q){case"number":K(Q);break;case"string":K('"',Q,'"');break;case"object":Array.isArray(Q)&&K("[",Q.join(),"]");break;default:K(z.link(Q));break}K(";")}});function T(U,Q){q.forEach(function(ht){var pt=W[ht];if(It.isDynamic(pt)){var ft=U.invoke(Q,pt);Q(O,".",ht,"=",ft,";")}})}k.dynamic[$]=new It.DynamicVariable(_f,{thisDep:F,contextDep:G,propDep:L,ref:O,append:T}),delete k.static[$]}function eo(z,k,$,W,K){var q=Re();q.stats=q.link(K),Object.keys(k.static).forEach(function(G){te(q,k,G)}),Uw.forEach(function(G){te(q,z,G)});var F=kn(z,k,$,W,q);return gn(q,F),it(q,F),N(q,F),e(q.compile(),{destroy:function(){F.shader.program.destroy()}})}return{next:Kt,current:xt,procs:function(){var z=Re(),k=z.proc("poll"),$=z.proc("refresh"),W=z.block();k(W),$(W);var K=z.shared,q=K.gl,F=K.next,G=K.current;W(G,".dirty=false;"),Rn(z,k),Rn(z,$,null,!0);var L;Lt&&(L=z.link(Lt)),C.oes_vertex_array_object&&$(z.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var O=0;O<at.maxAttributes;++O){var T=$.def(K.attributes,"[",O,"]"),U=z.cond(T,".buffer");U.then(q,".enableVertexAttribArray(",O,");",q,".bindBuffer(",Ai,",",T,".buffer.buffer);",q,".vertexAttribPointer(",O,",",T,".size,",T,".type,",T,".normalized,",T,".stride,",T,".offset);").else(q,".disableVertexAttribArray(",O,");",q,".vertexAttrib4f(",O,",",T,".x,",T,".y,",T,".z,",T,".w);",T,".buffer=null;"),$(U),Lt&&$(L,".vertexAttribDivisorANGLE(",O,",",T,".divisor);")}return $(z.shared.vao,".currentVAO=null;",z.shared.vao,".setVAO(",z.shared.vao,".targetVAO);"),Object.keys($t).forEach(function(Q){var ht=$t[Q],pt=W.def(F,".",Q),ft=z.block();ft("if(",pt,"){",q,".enable(",ht,")}else{",q,".disable(",ht,")}",G,".",Q,"=",pt,";"),$(ft),k("if(",pt,"!==",G,".",Q,"){",ft,"}")}),Object.keys(yt).forEach(function(Q){var ht=yt[Q],pt=xt[Q],ft,zt,pe=z.block();if(pe(q,".",ht,"("),vn(pt)){var Xe=pt.length;ft=z.global.def(F,".",Q),zt=z.global.def(G,".",Q),pe(Qe(Xe,function(se){return ft+"["+se+"]"}),");",Qe(Xe,function(se){return zt+"["+se+"]="+ft+"["+se+"];"}).join("")),k("if(",Qe(Xe,function(se){return ft+"["+se+"]!=="+zt+"["+se+"]"}).join("||"),"){",pe,"}")}else ft=W.def(F,".",Q),zt=W.def(G,".",Q),pe(ft,");",G,".",Q,"=",ft,";"),k("if(",ft,"!==",zt,"){",pe,"}");$(pe)}),z.compile()}(),compile:eo}}function f4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var h4=34918,u4=34919,tm=35007,d4=function(y,E){if(!E.ext_disjoint_timer_query)return null;var C=[];function at(){return C.pop()||E.ext_disjoint_timer_query.createQueryEXT()}function dt(Lt){C.push(Lt)}var nt=[];function ct(Lt){var Xt=at();E.ext_disjoint_timer_query.beginQueryEXT(tm,Xt),nt.push(Xt),kt(nt.length-1,nt.length,Lt)}function Mt(){E.ext_disjoint_timer_query.endQueryEXT(tm)}function Et(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Nt=[];function At(){return Nt.pop()||new Et}function Ct(Lt){Nt.push(Lt)}var Bt=[];function kt(Lt,Xt,xt){var Kt=At();Kt.startQueryIndex=Lt,Kt.endQueryIndex=Xt,Kt.sum=0,Kt.stats=xt,Bt.push(Kt)}var Pt=[],Y=[];function lt(){var Lt,Xt,xt=nt.length;if(xt!==0){Y.length=Math.max(Y.length,xt+1),Pt.length=Math.max(Pt.length,xt+1),Pt[0]=0,Y[0]=0;var Kt=0;for(Lt=0,Xt=0;Xt<nt.length;++Xt){var wt=nt[Xt];E.ext_disjoint_timer_query.getQueryObjectEXT(wt,u4)?(Kt+=E.ext_disjoint_timer_query.getQueryObjectEXT(wt,h4),dt(wt)):nt[Lt++]=wt,Pt[Xt+1]=Kt,Y[Xt+1]=Lt}for(nt.length=Lt,Lt=0,Xt=0;Xt<Bt.length;++Xt){var $t=Bt[Xt],yt=$t.startQueryIndex,Ft=$t.endQueryIndex;$t.sum+=Pt[Ft]-Pt[yt];var ye=Y[yt],Fe=Y[Ft];Fe===ye?($t.stats.gpuTime+=$t.sum/1e6,Ct($t)):($t.startQueryIndex=ye,$t.endQueryIndex=Fe,Bt[Lt++]=$t)}Bt.length=Lt}}return{beginQuery:ct,endQuery:Mt,pushScopeStats:kt,update:lt,getNumPendingQueries:function(){return nt.length},clear:function(){C.push.apply(C,nt);for(var Lt=0;Lt<C.length;Lt++)E.ext_disjoint_timer_query.deleteQueryEXT(C[Lt]);nt.length=0,C.length=0},restore:function(){nt.length=0,C.length=0}}},p4=16384,v4=256,m4=1024,g4=34962,em="webglcontextlost",om="webglcontextrestored",nm=1,x4=2,y4=3;function rm(y,E){for(var C=0;C<y.length;++C)if(y[C]===E)return C;return-1}function b4(y){var E=Te(y);if(!E)return null;var C=E.gl,at=C.getContextAttributes(),dt=C.isContextLost(),nt=Le(C,E);if(!nt)return null;var ct=ue(),Mt=f4(),Et=nt.extensions,Nt=d4(C,Et),At=Ot(),Ct=C.drawingBufferWidth,Bt=C.drawingBufferHeight,kt={tick:0,time:0,viewportWidth:Ct,viewportHeight:Bt,framebufferWidth:Ct,framebufferHeight:Bt,drawingBufferWidth:Ct,drawingBufferHeight:Bt,pixelRatio:E.pixelRatio},Pt={},Y={elements:null,primitive:4,count:-1,offset:0,instances:-1},lt=ab(C,Et),Lt=wb(C,Mt,E,xt),Xt=Cw(C,Et,lt,Mt,Lt);function xt(ke){return Xt.destroyBuffer(ke)}var Kt=Cb(C,Et,Lt,Mt),wt=$w(C,ct,Mt,E),$t=fw(C,Et,lt,function(){ye.procs.poll()},kt,Mt,E),yt=hw(C,Et,lt,Mt,E),Ft=Nw(C,Et,lt,$t,yt,Mt),ye=l4(C,ct,Et,lt,Lt,Kt,$t,Ft,Pt,Xt,wt,Y,kt,Nt,E),Fe=Dw(C,Ft,ye.procs.poll,kt,at,Et,lt),Ut=ye.next,Rt=C.canvas,gt=[],Re=[],We=[],ae=[E.onDestroy],to=null;function De(){if(gt.length===0){Nt&&Nt.update(),to=null;return}to=Ht.next(De),cr();for(var ke=gt.length-1;ke>=0;--ke){var ro=gt[ke];ro&&ro(kt,null,0)}C.flush(),Nt&&Nt.update()}function Ke(){!to&&gt.length>0&&(to=Ht.next(De))}function bo(){to&&(Ht.cancel(De),to=null)}function Mn(ke){ke.preventDefault(),dt=!0,bo(),Re.forEach(function(ro){ro()})}function qn(ke){C.getError(),dt=!1,nt.restore(),wt.restore(),Lt.restore(),$t.restore(),yt.restore(),Ft.restore(),Xt.restore(),Nt&&Nt.restore(),ye.procs.refresh(),Ke(),We.forEach(function(ro){ro()})}Rt&&(Rt.addEventListener(em,Mn,!1),Rt.addEventListener(om,qn,!1));function so(){gt.length=0,bo(),Rt&&(Rt.removeEventListener(em,Mn),Rt.removeEventListener(om,qn)),wt.clear(),Ft.clear(),yt.clear(),$t.clear(),Kt.clear(),Lt.clear(),Xt.clear(),Nt&&Nt.clear(),ae.forEach(function(ke){ke()})}function Ln(ke){S(!!ke,"invalid args to regl({...})"),S.type(ke,"object","invalid args to regl({...})");function ro(K){var q=e({},K);delete q.uniforms,delete q.attributes,delete q.context,delete q.vao,"stencil"in q&&q.stencil.op&&(q.stencil.opBack=q.stencil.opFront=q.stencil.op,delete q.stencil.op);function F(G){if(G in q){var L=q[G];delete q[G],Object.keys(L).forEach(function(O){q[G+"."+O]=L[O]})}}return F("blend"),F("depth"),F("cull"),F("stencil"),F("polygonOffset"),F("scissor"),F("sample"),"vao"in K&&(q.vao=K.vao),q}function vo(K,q){var F={},G={};return Object.keys(K).forEach(function(L){var O=K[L];if(It.isDynamic(O)){G[L]=It.unbox(O,L);return}else if(q&&Array.isArray(O)){for(var T=0;T<O.length;++T)if(It.isDynamic(O[T])){G[L]=It.unbox(O,L);return}}F[L]=O}),{dynamic:G,static:F}}var gn=vo(ke.context||{},!0),ea=vo(ke.uniforms||{},!0),zs=vo(ke.attributes||{},!1),N=vo(ro(ke),!1),it={gpuTime:0,cpuTime:0,count:0},tt=ye.compile(N,zs,ea,gn,it),te=tt.draw,eo=tt.batch,z=tt.scope,k=[];function $(K){for(;k.length<K;)k.push(null);return k}function W(K,q){var F;if(dt&&S.raise("context lost"),typeof K=="function")return z.call(this,null,K,0);if(typeof q=="function")if(typeof K=="number")for(F=0;F<K;++F)z.call(this,null,q,F);else if(Array.isArray(K))for(F=0;F<K.length;++F)z.call(this,K[F],q,F);else return z.call(this,K,q,0);else if(typeof K=="number"){if(K>0)return eo.call(this,$(K|0),K|0)}else if(Array.isArray(K)){if(K.length)return eo.call(this,K,K.length)}else return te.call(this,K)}return e(W,{stats:it,destroy:function(){tt.destroy()}})}var Xo=Ft.setFBO=Ln({framebuffer:It.define.call(null,nm,"framebuffer")});function kn(ke,ro){var vo=0;ye.procs.poll();var gn=ro.color;gn&&(C.clearColor(+gn[0]||0,+gn[1]||0,+gn[2]||0,+gn[3]||0),vo|=p4),"depth"in ro&&(C.clearDepth(+ro.depth),vo|=v4),"stencil"in ro&&(C.clearStencil(ro.stencil|0),vo|=m4),S(!!vo,"called regl.clear with no buffer specified"),C.clear(vo)}function Nn(ke){if(S(typeof ke=="object"&&ke,"regl.clear() takes an object as input"),"framebuffer"in ke)if(ke.framebuffer&&ke.framebuffer_reglType==="framebufferCube")for(var ro=0;ro<6;++ro)Xo(e({framebuffer:ke.framebuffer.faces[ro]},ke),kn);else Xo(ke,kn);else kn(null,ke)}function Rn(ke){S.type(ke,"function","regl.frame() callback must be a function"),gt.push(ke);function ro(){var vo=rm(gt,ke);S(vo>=0,"cannot cancel a frame twice");function gn(){var ea=rm(gt,gn);gt[ea]=gt[gt.length-1],gt.length-=1,gt.length<=0&&bo()}gt[vo]=gn}return Ke(),{cancel:ro}}function Zn(){var ke=Ut.viewport,ro=Ut.scissor_box;ke[0]=ke[1]=ro[0]=ro[1]=0,kt.viewportWidth=kt.framebufferWidth=kt.drawingBufferWidth=ke[2]=ro[2]=C.drawingBufferWidth,kt.viewportHeight=kt.framebufferHeight=kt.drawingBufferHeight=ke[3]=ro[3]=C.drawingBufferHeight}function cr(){kt.tick+=1,kt.time=Ve(),Zn(),ye.procs.poll()}function mn(){$t.refresh(),Zn(),ye.procs.refresh(),Nt&&Nt.update()}function Ve(){return(Ot()-At)/1e3}mn();function lr(ke,ro){S.type(ro,"function","listener callback must be a function");var vo;switch(ke){case"frame":return Rn(ro);case"lost":vo=Re;break;case"restore":vo=We;break;case"destroy":vo=ae;break;default:S.raise("invalid event, must be one of frame,lost,restore,destroy")}return vo.push(ro),{cancel:function(){for(var gn=0;gn<vo.length;++gn)if(vo[gn]===ro){vo[gn]=vo[vo.length-1],vo.pop();return}}}}var To=e(Ln,{clear:Nn,prop:It.define.bind(null,nm),context:It.define.bind(null,x4),this:It.define.bind(null,y4),draw:Ln({}),buffer:function(ke){return Lt.create(ke,g4,!1,!1)},elements:function(ke){return Kt.create(ke,!1)},texture:$t.create2D,cube:$t.createCube,renderbuffer:yt.create,framebuffer:Ft.create,framebufferCube:Ft.createCube,vao:Xt.createVAO,attributes:at,frame:Rn,on:lr,limits:lt,hasExtension:function(ke){return lt.extensions.indexOf(ke.toLowerCase())>=0},read:Fe,destroy:so,_gl:C,_refresh:mn,poll:function(){cr(),Nt&&Nt.update()},now:Ve,stats:Mt});return E.onDone(null,To),To}return b4})});var Ls=bt((sA,Tm)=>{"use strict";var va=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],ma=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],oa=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Hf=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],sl=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],du=t=>Math.hypot(t[0],t[1],t[2]),w0=t=>{let e=du(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Pi(t,e){let o=t.length-1,n=Math.min(Math.max(e,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=[0,0,0];for(let v=0;v<3;v++)l[v]=.5*(2*i[v]+(-s[v]+c[v])*a+(2*s[v]-5*i[v]+4*c[v]-f[v])*a*a+(-s[v]+3*i[v]-3*c[v]+f[v])*a*a*a);return l}function P4(t,e){return Pi(t.map(o=>[o,0,0]),e)[0]}function I4(t,e,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(h,u)=>{let d=new Array(9);for(let p=0;p<3;p++)for(let m=0;m<3;m++)d[p*3+m]=h[p*3]*u[m]+h[p*3+1]*u[3+m]+h[p*3+2]*u[6+m];return d},f=h=>[s.r[0]*h[0]+s.r[1]*h[1]+s.r[2]*h[2],s.r[3]*h[0]+s.r[4]*h[1]+s.r[5]*h[2],s.r[6]*h[0]+s.r[7]*h[1]+s.r[8]*h[2]];r.translate=(h,u,d)=>{let p=f([h,u,d]);s.t=[s.t[0]+p[0]*s.s,s.t[1]+p[1]*s.s,s.t[2]+p[2]*s.s]},r.scale=h=>{s.s*=h},r.rotateY=h=>{let u=Math.cos(h),d=Math.sin(h);s.r=c(s.r,[u,0,d,0,1,0,-d,0,u])},r.vert=(h,u,d)=>{let p=d||r.curMat,m=f(h),g=w0(f(u));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),n.push(p[0],p[1],p[2]),t.length/3-1};let l=h=>[t[h*3],t[h*3+1],t[h*3+2]],v=h=>[e[h*3],e[h*3+1],e[h*3+2]];return r.tri=(h,u,d)=>{let p=l(h),m=sl(va(l(u),p),va(l(d),p)),g=ma(ma(v(h),v(u)),v(d));Hf(m,g)<0?o.push(h,d,u):o.push(h,u,d)},r.box=(h,u,d,p,m,g,x)=>{let b=[[[h,u,d],[p,u,d],[h,m,d],[p,m,d],[0,0,-1]],[[p,u,g],[h,u,g],[p,m,g],[h,m,g],[0,0,1]],[[h,u,g],[h,u,d],[h,m,g],[h,m,d],[-1,0,0]],[[p,u,d],[p,u,g],[p,m,d],[p,m,g],[1,0,0]],[[h,m,d],[p,m,d],[h,m,g],[p,m,g],[0,1,0]],[[h,u,g],[p,u,g],[h,u,d],[p,u,d],[0,-1,0]]];for(let w of b){let _=r.vert(w[0],w[4],x),M=r.vert(w[1],w[4],x),A=r.vert(w[2],w[4],x),I=r.vert(w[3],w[4],x);r.tri(_,M,A),r.tri(M,I,A)}},r.surface=(h,u,d,p)=>{p=p||{};let m=.001,g=_=>Math.min(1,Math.max(0,_)),x=[],b=[];for(let _=0;_<=u;_++){let M=[],A=[];for(let I=0;I<=d;I++){let R=_/u,B=I/d,D=h(R,B),Z=Math.min(1-m,Math.max(m,R)),P=p.wrapV?B:Math.min(1-m,Math.max(m,B)),j=va(h(g(Z+m),P),h(g(Z-m),P)),H=p.wrapV?P+m:g(P+m),J=p.wrapV?P-m:g(P-m),V=va(h(Z,H),h(Z,J)),st=sl(j,V);du(st)<1e-14&&(st=p.inside?va(D,p.inside(R,B)):[0,1,0]),st=w0(st),p.inside&&Hf(st,va(D,p.inside(R,B)))<0&&(st=oa(st,-1));let et=p.mat?p.mat(R,B,D):null;M.push(r.vert(D,st,et)),p.double&&A.push(r.vert(D,oa(st,-1),et))}x.push(M),b.push(A)}let w=_=>{for(let M=0;M<u;M++)for(let A=0;A<d;A++){let I=_[M][A],R=_[M+1][A],B=_[M][A+1],D=_[M+1][A+1];r.tri(I,R,B),r.tri(R,D,B)}};w(x),p.double&&w(b)},r.ellipsoid=(h,u,d,p,m)=>{m=m||{};let g=m.warp||null;r.surface((x,b)=>{let w=x*Math.PI,_=b*Math.PI*2,M=g?g(x,b):1;return[h[0]+u[0]*M*Math.sin(w)*Math.cos(_),h[1]+u[1]*M*Math.cos(w),h[2]+u[2]*M*Math.sin(w)*Math.sin(_)]},d||10,p||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,u,d,p,m)=>{m=m||{};let g=40,x=[],b=null;for(let M=0;M<=g;M++){let A=M/g,I=Pi(h,Math.max(0,A-.01)),R=Pi(h,Math.min(1,A+.01)),B=w0(va(R,I)),D;if(b)D=w0(va(b,oa(B,Hf(b,B))));else{let Z=Math.abs(B[1])<.9?[0,1,0]:[1,0,0];D=w0(sl(B,Z))}x.push({N:D,B:w0(sl(B,D))}),b=D}let w=M=>{let A=Math.min(Math.max(M,0),1)*g,I=Math.min(g-1,Math.floor(A)),R=A-I,B=x[I],D=x[I+1];return{N:w0(ma(oa(B.N,1-R),oa(D.N,R))),B:w0(ma(oa(B.B,1-R),oa(D.B,R)))}},_=m.squash||[1,1];r.surface((M,A)=>{let I=Pi(h,M),R=w(M),B=u(M),D=A*Math.PI*2;return ma(I,ma(oa(R.N,Math.cos(D)*B*_[0]),oa(R.B,Math.sin(D)*B*_[1])))},d||12,p||8,{wrapV:!0,inside:M=>Pi(h,M),mat:m.mat})},r.lathe=(h,u,d,p,m)=>{m=m||{};let g=[];for(let x=0;x<h.length-1;x++){let b=h[x+1][0]-h[x][0],w=h[x+1][1]-h[x][1];g.push(w0([w,-b,0]))}for(let x=0;x<h.length-1;x++){let b=h[x],w=h[x+1],_=x===0||b[2]===1,M=x===h.length-2||w[2]===1,A=_?g[x]:w0(ma(g[x-1],g[x])),I=M?g[x]:w0(ma(g[x],g[x+1])),R=[],B=[];for(let D=0;D<=p;D++){let Z=D/p*Math.PI*2,P=Math.cos(Z),j=Math.sin(Z),H=m.mat?m.mat(Z,b[1]):null,J=m.mat?m.mat(Z,w[1]):null;R.push(r.vert([u+b[0]*P,b[1],d+b[0]*j],[A[0]*P,A[1],A[0]*j],H)),B.push(r.vert([u+w[0]*P,w[1],d+w[0]*j],[I[0]*P,I[1],I[0]*j],J))}for(let D=0;D<p;D++)r.tri(R[D],R[D+1],B[D]),r.tri(R[D+1],B[D+1],B[D])}},r}Tm.exports={createBuilder:I4,catmull:Pi,curve1:P4,sub:va,add:ma,mul:oa,dot:Hf,cross:sl,norm:w0,len:du}});var Rm=bt((iA,Nm)=>{"use strict";var{norm:Bf,add:Uf,mul:Fa,sub:$4,cross:zm}=Ls(),Lm=Math.PI*2,F4=(t,e,o)=>{let n=Math.min(1,Math.max(0,(o-t)/(e-t)));return n*n*(3-2*n)};function q4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function D4(t,e,o,n,r,a){let s=(h,u)=>[7,h*a,u];t.curMat=[0,0,0],t.box(e-a*1.36,n,o-a*1.36,e+a*1.36,n+.22,o+a*1.36),t.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],e,o,56,{mat:s});let i=n+.55,c=r-i,f=20,l=6,v=a*.075;return t.surface((h,u)=>{let d=i+h*c,p=a*(.96-.12*h),m=u*Lm,g=u*f%1,x=p-v*4*g*(1-g);return[e+x*Math.cos(m),d,o+x*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[e,i+h*c,o],mat:(h,u)=>[7,u*Lm*a,i+h*c]}),t.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,r+.33,o-a*1.42,e+a*1.42,r+.53,o+a*1.42),r+.53}function G4(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function H4(t,e,o,n,r){t.save(),t.translate(e,0,o),G4(t,n,r),t.restore()}function B4(t,e,o,n,r,a){let s=q4(n),i=a?Bf([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(r||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let v=l>=c-2,h=l*2.399963+s()*.5,u=[Math.cos(h),0,Math.sin(h)],d=[-Math.sin(h),0,Math.cos(h)],p=l*.618%1,m=v?.06+s()*.06:.12+.62*p,g=1;if(i){let st=u[0]*i[0]+u[2]*i[2];g=.25+.75*F4(-.7,.5,st),m*=g}let x=v?1.1+s()*.25:.85+.55*(1-p*.55)+s()*.15,b=v?1+s()*.2:.95+s()*.28,w=v?.055:.215+s()*.05,_=.04+s()*.05,M=[u[0]*_,f,u[2]*_],A=[M[0]+u[0]*Math.sin(m)*x*.92,M[1]+Math.cos(m)*x,M[2]+u[2]*Math.sin(m)*x*.92],I=[M[0]+u[0]*Math.sin(m*.5)*x*.45,M[1]+x*.5,M[2]+u[2]*Math.sin(m*.5)*x*.45];t.curMat=[4,0,0],t.tube([M,I,A],st=>.02-.008*st,8,7);let R=24,B=m*.9+.05,D=m+(v?.12:(.95+.45*p)*(.35+.65*g)),Z=[A],P=[],j=A;for(let st=0;st<R;st++){let et=st/R,mt=B+(D-B)*et*et,Dt=[u[0]*Math.sin(mt),Math.cos(mt),u[2]*Math.sin(mt)];P.push(Dt),j=Uf(j,Fa(Dt,b/R)),Z.push(j)}P.push(P[P.length-1]);let H=st=>{let et=st*R,mt=Math.min(R-1,Math.floor(et)),Dt=et-mt;return Uf(Fa(Z[mt],1-Dt),Fa(Z[mt+1],Dt))},J=st=>{let et=st*R,mt=Math.min(R,Math.floor(et)),Dt=Math.min(R,mt+1),ne=et-mt;return Bf(Uf(Fa(P[mt],1-ne),Fa(P[Dt],ne)))},V=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((st,et)=>{let mt=et*2-1,Dt=H(st),ne=J(st),Se=V*st,Zt=Uf(Fa(d,Math.cos(Se)),Fa(zm(ne,d),Math.sin(Se)));Zt=Bf($4(Zt,Fa(ne,Zt[0]*ne[0]+Zt[1]*ne[1]+Zt[2]*ne[2])));let Ue=Bf(zm(Zt,ne)),yo=w*Math.pow(Math.sin(Math.PI*Math.pow(st,.72)),.85),Bo=.3*yo*Math.abs(mt)+.012*Math.sin(st*40+mt*2)*Math.abs(mt)*(v?0:1),ee=-.1*yo*mt*mt*mt*mt,be=Bo+ee;return[Dt[0]+Zt[0]*mt*yo+Ue[0]*be,Dt[1]+Zt[1]*mt*yo+Ue[1]*be,Dt[2]+Zt[2]*mt*yo+Ue[2]*be]},14,8,{double:!0,mat:(st,et)=>[2,et*2-1,st]})}t.restore()}Nm.exports={addFlutedColumn:D4,addStatue:H4,addPlant:B4}});var qa=bt((cA,Im)=>{"use strict";var St={xc:7,r:2.5,spring:4.7};St.x0=St.xc-St.r;St.x1=St.xc+St.r;St.top=St.spring+St.r;var Cr=.06,tn=.1,Cm=.08,jf=St.r,Wf=[St.x0+jf/3,St.x0+2*jf/3,St.xc+jf/3,St.xc+2*jf/3],Ii=.28,pu=[.95,1.65,2.35,3.05,3.75],Om=[1.05,1.8],il=[8,0,0],n0=[0,0,0];function _0(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function $i(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Vf(t,e,o,n,r,a,s=48,i=0,c=Math.PI){let f=(l,v,h)=>[St.xc+v*Math.cos(l),St.spring+v*Math.sin(l),h];for(let l=0;l<s;l++){let v=i+(c-i)*l/s,h=i+(c-i)*(l+1)/s,u=(v+h)/2;$i(t,f(v,e,r),f(h,e,r),f(h,o,r),f(v,o,r),[0,0,1],a),$i(t,f(v,o,n),f(h,o,n),f(h,e,n),f(v,e,n),[0,0,-1],a),$i(t,f(v,e,n),f(h,e,n),f(h,e,r),f(v,e,r),[-Math.cos(u),-Math.sin(u),0],a),$i(t,f(h,o,n),f(v,o,n),f(v,o,r),f(h,o,r),[Math.cos(u),Math.sin(u),0],a)}}function U4(t){let n=a=>[St.xc+St.r*Math.cos(a),St.spring+St.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?St.r/Math.abs(s):1/0,f=i>1e-6?(8-St.spring)/i:1/0,l=Math.min(c,f);return[Math.min(St.x1,Math.max(St.x0,St.xc+s*l)),Math.min(8,St.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),f=n(i),l=r(s),v=r(i);for(let[u,d]of[[.35,1],[-.35,-1]])$i(t,[c[0],c[1],u],[f[0],f[1],u],[v[0],v[1],u],[l[0],l[1],u],[0,0,d],n0);let h=(s+i)/2;$i(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],n0)}}function j4(t){_0(t,-.35,0,-.35,St.x0,8,.35,n0),_0(t,St.x1,0,-.35,14+.35,8,.35,n0),U4(t),Pm(t)}function Pm(t){_0(t,St.x0-.32,.3,.35,St.x0,St.spring,.35+.07,n0),_0(t,St.x1,.3,.35,St.x1+.32,St.spring,.35+.07,n0),_0(t,St.x0-.32-.05,0,.35,St.x0,.3,.35+.07+.04,n0),_0(t,St.x1,0,.35,St.x1+.32+.05,.3,.35+.07+.04,n0),_0(t,St.x0-.32-.06,St.spring-.12,.35,St.x0,St.spring,.35+.07+.05,n0),_0(t,St.x1,St.spring-.12,.35,St.x1+.32+.06,St.spring,.35+.07+.05,n0),Vf(t,St.r,St.r+.32,.35,.35+.07,n0),Vf(t,St.r+.32,St.r+.32+.06,.35,.35+.07+.03,n0),_0(t,St.xc-.22,St.top-.08,.35,St.xc+.22,St.top+.32+.12,.35+.07+.06,n0)}function W4(t,e){e=e||"all";let o=e==="all",n=o||e==="fixed",r=-Cm/2,a=Cm/2,s=(h,u,d,p,m=0)=>_0(t,h-m,u,r,d+m,p,a,il),i=h=>St.spring+Math.sqrt(Math.max(0,St.r*St.r-(h-St.xc)*(h-St.xc))),c=e==="right"?St.xc:St.x0,f=e==="left"?St.xc:St.x1,l=h=>o||e==="left"&&h<St.xc||e==="right"&&h>St.xc,v=o?null:St.spring-.06;if(n){s(St.x0,0,St.x0+tn,St.spring),s(St.x1-tn,0,St.x1,St.spring),Vf(t,St.r-tn,St.r,r,a,il,64),s(St.x0,0,St.x1,.05),s(St.x0,St.spring-.06,St.x1,St.spring+.06);for(let h of Om)Vf(t,h-Cr/2,h+Cr/2,r,a,il,48)}if(o){s(St.x0,0,St.x1,Ii),s(St.xc-tn/2,0,St.xc+tn/2,St.top-tn*.5);for(let h of Wf)s(h-Cr/2,Ii,h+Cr/2,i(h)-tn*.5);for(let h of pu)s(St.x0,h-Cr/2,St.x1,h+Cr/2)}else if(e==="fixed"){s(St.xc-tn/2,St.spring+.06,St.xc+tn/2,St.top-tn*.5);for(let h of Wf)s(h-Cr/2,St.spring+.06,h+Cr/2,i(h)-tn*.5)}else{let h=e==="left"?St.x0+tn:St.x1-tn;s(Math.min(h,h+(e==="left"?tn*.8:-tn*.8)),.05,Math.max(h,h+(e==="left"?tn*.8:-tn*.8)),v),s(c,.05,f,Ii),s(c,v-.07,f,v);let u=e==="left"?St.xc-tn/2:St.xc;s(u,.05,u+tn/2,v);for(let d of Wf)l(d)&&s(d-Cr/2,Ii,d+Cr/2,v-.07);for(let d of pu)s(c,d-Cr/2,f,d+Cr/2)}for(let h of[-1,1]){let u=St.xc+h*.16;l(u)&&(_0(t,u-.02,1.05,a,u+.02,1.13,a+.06,il),_0(t,u-(h>0?0:.14),1.07,a+.05,u+(h>0?.14:0),1.11,a+.08,il))}}function V4(t){t=t||"all";let e=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=St;if(t!=="fixed"){let f=t==="right"?a:n,l=t==="left"?a:r;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,v=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(v),i+s*Math.sin(v),o])}return e}var Po=t=>t.toFixed(4);function X4(){let t=Wf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Po(n)}), ${Po(Cr/2)}, soft));`).join(`
		`),e=pu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Po(n)}), ${Po(Cr/2)}, soft));`).join(`
		`),o=Om.map(n=>`ab = max(ab, barCover(abs(rr - ${Po(n)}), ${Po(Cr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Po(St.x0)} - soft, ${Po(St.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Po(St.x1)} - soft, ${Po(St.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Po(St.xc)}, ${Po(St.spring)}));
		float arch = q.y < ${Po(St.spring)} ? 1.0 : 1.0 - smoothstep(${Po(St.r)} - soft, ${Po(St.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Po(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Po(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Po(St.xc)}, ${Po(St.spring)}));
		float vb = barCover(abs(q.x - ${Po(St.xc)}), ${Po(tn/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${Po(St.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Po(Ii)} - soft, ${Po(Ii)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Po(St.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Po(St.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Po(St.x0+tn/2)}), ${Po(tn/2)}, soft),
			barCover(abs(q.x - ${Po(St.x1-tn/2)}), ${Po(tn/2)}, soft));
		frame = q.y < ${Po(St.spring)} ? frame : barCover(abs(rr - ${Po(St.r-tn/2)}), ${Po(tn/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Im.exports={addEntranceWall:j4,addSurround:Pm,addFrames:W4,glassPanes:V4,doorLightGLSL:X4,DOOR:St,WALL:.35}});var qi=bt((lA,Hm)=>{"use strict";var Rs=1.1583333333333334,Cs=(13.05-8*.16)/9,mu=Rs+.16,gu=Cs+.16,xa=14/2-7.75/2,r0=15,cl=xa+7.75,ga=r0+13.05,a0=.3,ya={y:8+.18,inset:.15},Ns={y:8+.36,inset:a0},xu=8+.2,ll=8+.62,yu=8+.9,bu=.016,Dm=.28,Gm=.66,Y4=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),K4=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Q4=[9,0,0],fr=[10,0,0];function Fi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Or(t,e,o,n,r,a,s){Fi(t,[e,a,o],[n,a,o],[n,a,r],[e,a,r],[0,-1,0],s)}function vu(t,e,o,n,r,a,s,i){Fi(t,[e,a,o],[n,a,o],[n,s,o],[e,s,o],[0,0,1],i),Fi(t,[n,a,r],[e,a,r],[e,s,r],[n,s,r],[0,0,-1],i),Fi(t,[e,a,r],[e,a,o],[e,s,o],[e,s,r],[1,0,0],i),Fi(t,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function $m(t,e,o,n,r){Or(t,e[0],e[1],e[2],o[1],n,r),Or(t,e[0],o[3],e[2],e[3],n,r),Or(t,e[0],o[1],o[0],o[3],n,r),Or(t,o[2],o[1],e[2],o[3],n,r)}var Fm=t=>xa+t*mu,qm=t=>r0+t*gu;function Z4(t,e,o=48){let n=[xa-a0,r0-a0,cl+a0,ga+a0],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,ya.inset),s=r(n,Ns.inset);Or(t,0,0,14,n[1],8,e),Or(t,0,n[3],14,o,8,e),Or(t,0,n[1],n[0],n[3],8,e),Or(t,n[2],n[1],14,n[3],8,e);let i=.06,c=.06;t.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],fr),t.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,fr),t.box(n[0]-i,8-c,n[1],n[0],8,n[3],fr),t.box(n[2],8-c,n[1],n[2]+i,8,n[3],fr),vu(t,...n.slice(0,2),...n.slice(2),8,ya.y,fr),$m(t,n,a,ya.y,fr),vu(t,...a.slice(0,2),...a.slice(2),ya.y,Ns.y,fr),$m(t,a,s,Ns.y,fr);for(let f=1;f<6;f++){let l=Fm(f)-.16;t.box(l,xu,r0,l+.16,Ns.y,ga,fr)}for(let f=1;f<9;f++){let l=qm(f)-.16;t.box(xa,xu,l,cl,Ns.y,l+.16,fr)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let v=Fm(l),h=qm(f);vu(t,v,h,v+Rs,h+Cs,Ns.y,yu,fr),Or(t,v,h,v+Rs,h+Cs,yu,Q4),J4(t,v+Rs/2,h+Cs/2,Rs/2,Cs/2)}}function J4(t,e,o,n,r){let a=ll,s=bu;Or(t,e-n,o-s,e+n,o+s,a,fr),Or(t,e-s,o-r,e+s,o+r,a,fr);for(let i of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=i*r/c,v=-l*s,h=f*s;Fi(t,[e-f*c+v,a,o-l*c+h],[e+f*c+v,a,o+l*c+h],[e+f*c-v,a,o+l*c-h],[e-f*c-v,a,o-l*c-h],[0,-1,0],fr)}for(let i of[Dm,Gm]){let c=i*n,f=i*r;Or(t,e-c-s,o-f-s,e+c+s,o-f+s,a,fr),Or(t,e-c-s,o+f-s,e+c+s,o+f+s,a,fr),Or(t,e-c-s,o-f+s,e-c+s,o+f-s,a,fr),Or(t,e+c-s,o-f+s,e+c+s,o+f-s,a,fr)}}var He=t=>t.toFixed(4);function t_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${Y4.map(He).join(", ")});
	const vec3 SKY_MOON = vec3(${K4.map(He).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${He(xa)}, ${He(r0)});
		vec2 pitch = vec2(${He(mu)}, ${He(gu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${He(5)} || cell.y > ${He(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${He(Rs)}, ${He(Cs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${He(bu)} - soft, ${He(bu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${He(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${He(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${He(ya.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${He(xu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${He(Ns.y)} - p.y) / L.y)).xz;
		float tG = (${He(ll)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${He(yu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${He(xa-a0)}, ${He(r0-a0)}, ${He(cl+a0)}, ${He(ga+a0)}), soft)
		           * rectOpen(q1, vec4(${He(xa-a0+ya.inset)}, ${He(r0-a0+ya.inset)}, ${He(cl+a0-ya.inset)}, ${He(ga+a0-ya.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${He(xa)}, ${He(r0)});
		vec2 pitch = vec2(${He(mu)}, ${He(gu)});
		vec2 paneHalf = vec2(${He(Rs/2)}, ${He(Cs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${He(Dm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${He(Gm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${He(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${He(ll)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${He(xa)}, ${He(r0)}, ${He(cl)}, ${He(ga)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${He(14/2)}, ${He((r0+ga)/2)}) - L.xz * (${He(ll)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${He(7.75/2)}, ${He(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${He(r0-3)}, ${He(r0+2)}, p.z)
		        * (1.0 - smoothstep(${He(ga-2)}, ${He(ga+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${He(7.75/2)}, ${He(14/2)}, abs(p.x - ${He(14/2)}));
		return z * x;
	}`}Hm.exports={addSkylight:Z4,skylightGLSL:t_,Z_START:r0,Z_END:ga,GLASS_Y:ll,HEIGHT:8}});var mr=bt((fA,Vm)=>{"use strict";var Gi=qa(),ku=8,en=.35,Vt={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:ku},Bm=(Vt.z1-Vt.z0)/2,wu=Vt.crown-Vt.spring,Mu=(wu*wu+Bm*Bm)/(2*wu),Su=Vt.crown-Mu;function Di(t){let e=t-Vt.zc;return Su+Math.sqrt(Math.max(0,Mu*Mu-e*e))}var Ne={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},F0=Array.from({length:Ne.count},(t,e)=>Ne.first+e*Ne.pitch),jm=F0.slice(1).map(t=>t-Ne.pitch/2),e_=[F0[0],F0[2],F0[4]],Yf=[F0[1],F0[3]],Wr={r:1.3,sill:.62,spring:3.3},qo=[0,0,0],fl=[11,0,0],Da=[10,0,0],hl=[8,0,0];function Jn(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Vr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function ul(t,e){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,n]);for(let p of i){f.add(p.u0),f.add(p.u1);let m=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.08)));for(let g=1;g<m;g++)f.add(p.u0+(p.u1-p.u0)*g/m)}for(let p of e.cuts||[])f.add(p);let l=e.topStep||.5;for(let p=o;p<n;p+=l)f.add(p);let v=[...f].filter(p=>p>=o-1e-9&&p<=n+1e-9).sort((p,m)=>p-m),h=(p,m)=>p.bot?p.bot(m):p.bottom,u=(p,m)=>{let g=s(p),x=m.map(_=>[Math.max(0,h(_,p)),Math.min(_.head(p),g)]).filter(_=>_[1]>_[0]).sort((_,M)=>_[0]-M[0]),b=[],w=0;for(let _ of x)_[0]>w+1e-6&&b.push([w,_[0]]),w=Math.max(w,_[1]);return g>w+1e-6&&b.push([w,g]),b},d=(p,m,g)=>[p,m,g];for(let p=0;p<v.length-1;p++){let m=v[p],g=v[p+1],x=(m+g)/2,b=i.filter(R=>x>R.u0&&x<R.u1),w=b.length?Math.max(m,Math.max(...b.map(R=>R.u0))+1e-7):m,_=b.length?Math.min(g,Math.min(...b.map(R=>R.u1))-1e-7):g,M=u(w,b),A=u(_,b),I=Math.min(M.length,A.length);for(let R=0;R<I;R++){let[B,D]=M[R],[Z,P]=A[R];D-B<1e-6&&P-Z<1e-6||(Jn(t,d(m,B,a),d(g,Z,a),d(g,P,a),d(m,D,a),[0,0,1],c),e.frontOnly||Jn(t,d(g,Z,r),d(m,B,r),d(m,D,r),d(g,P,r),[0,0,-1],c))}}e.noEnds||(Jn(t,d(o,0,r),d(o,0,a),d(o,s(o),a),d(o,s(o),r),[-1,0,0],c),Jn(t,d(n,0,a),d(n,0,r),d(n,s(n),r),d(n,s(n),a),[1,0,0],c));for(let p of i){if(p.noReveal)continue;let m=p.mat||e.revealMat||c,g=Math.max(0,h(p,p.u0+1e-7)),x=Math.max(0,h(p,p.u1-1e-7)),b=Math.min(p.head(p.u0+1e-7),s(p.u0)),w=Math.min(p.head(p.u1-1e-7),s(p.u1));b>g+1e-6&&Jn(t,d(p.u0,g,a),d(p.u0,g,r),d(p.u0,b,r),d(p.u0,b,a),[1,0,0],m),w>x+1e-6&&Jn(t,d(p.u1,x,r),d(p.u1,x,a),d(p.u1,w,a),d(p.u1,w,r),[-1,0,0],m);let _=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.06)));for(let M=0;M<_;M++){let A=p.u0+(p.u1-p.u0)*M/_,I=p.u0+(p.u1-p.u0)*(M+1)/_,R=Math.max(A,p.u0+1e-7),B=Math.min(I,p.u1-1e-7),D=Math.min(p.head(R),s(A)),Z=Math.min(p.head(B),s(I));if(!(D>=s(A)-1e-6&&Z>=s(I)-1e-6)){let H=I-A,J=Z-D,V=Math.hypot(H,J)||1;Jn(t,d(A,D,r),d(I,Z,r),d(I,Z,a),d(A,D,a),[J/V,-H/V,0],m)}let P=h(p,R),j=h(p,B);if(P>1e-6||j>1e-6){let H=I-A,J=j-P,V=Math.hypot(H,J)||1;Jn(t,d(I,j,r),d(A,P,r),d(A,P,a),d(I,j,a),[-J/V,H/V,0],m)}}}}var _u=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function o_(t,e){let o=Wr.r,n=Wr.sill,r=Wr.spring,a=Vt.z0,s=24,i=(u,d,p)=>[e+Math.cos(u)*d,p,a-Math.sin(u)*d];for(let u=0;u<s;u++){let d=Math.PI*u/s,p=Math.PI*(u+1)/s,m=[-Math.cos(d),0,Math.sin(d)],g=[-Math.cos(p),0,Math.sin(p)],x=[t.vert(i(d,o,n),m,qo),t.vert(i(p,o,n),g,qo),t.vert(i(p,o,r),g,qo),t.vert(i(d,o,r),m,qo)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,f=(u,d)=>[e+Math.cos(u)*Math.cos(d)*o,r+Math.sin(d)*o,a-Math.sin(u)*Math.cos(d)*o],l=(u,d)=>[-Math.cos(u)*Math.cos(d),-Math.sin(d),Math.sin(u)*Math.cos(d)];for(let u=0;u<s;u++)for(let d=0;d<c;d++){let p=Math.PI*u/s,m=Math.PI*(u+1)/s,g=Math.PI/2*d/c,x=Math.PI/2*(d+1)/c,b=[t.vert(f(p,g),l(p,g),Da),t.vert(f(m,g),l(m,g),Da),t.vert(f(m,x),l(m,x),Da),t.vert(f(p,x),l(p,x),Da)];t.tri(b[0],b[1],b[2]),t.tri(b[0],b[2],b[3])}for(let u=1;u<8;u++){let d=Math.PI*u/8,p=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;p.push(f(d,g).map((x,b)=>x-l(d,g)[b]*.02))}t.tube(p,m=>.035*(1-m*.6),12,6,{mat:()=>Da})}let v=t.vert([e,n,a],[0,1,0],qo);for(let u=0;u<s;u++){let d=Math.PI*u/s,p=Math.PI*(u+1)/s;t.tri(v,t.vert(i(d,o,n),[0,1,0],qo),t.vert(i(p,o,n),[0,1,0],qo))}Vr(t,e-o-.12,n-.1,a,e+o+.12,n+.02,a+.12,qo),Vr(t,e-o-.16,n-.2,a,e+o+.16,n-.1,a+.07,qo);let h=.16;for(let u=0;u<s;u++){let d=Math.PI*u/s,p=Math.PI*(u+1)/s,m=(g,x,b)=>[e+Math.cos(g)*x,r+Math.sin(g)*x,b];Jn(t,m(d,o,a+.05),m(p,o,a+.05),m(p,o+h,a+.05),m(d,o+h,a+.05),[0,0,1],qo),Jn(t,m(d,o+h,a),m(p,o+h,a),m(p,o+h,a+.05),m(d,o+h,a+.05),[Math.cos((d+p)/2),Math.sin((d+p)/2),0],qo),Jn(t,m(d,o,a),m(p,o,a),m(p,o,a+.05),m(d,o,a+.05),[-Math.cos((d+p)/2),-Math.sin((d+p)/2),0],qo)}for(let u of[-1,1]){let d=e+u*o,p=e+u*(o+h);Vr(t,d,n,a,p,r,a+.05,qo),Vr(t,d-u*.02,r-.12,a,p+u*.06,r,a+.09,qo)}Vr(t,e-.11,r+o-.04,a,e+.11,r+o+h+.1,a+.09,qo),t.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],e,a-.62,40,{mat:()=>qo})}var n_=Wr.sill+.4,r_=Vt.z0-.62;function a_(t){Jn(t,[14,0,Vt.z0-en],[Vt.x1+en,0,Vt.z0-en],[Vt.x1+en,0,Vt.z1+en],[14,0,Vt.z1+en],[0,1,0],qo),t.curMat=fl,ul(t,{u0:14+en,u1:Vt.x1+2*en,w0:Vt.z0-2*en,w1:Vt.z0,top:()=>Vt.spring,holes:Yf.map(f=>({u0:f-Wr.r,u1:f+Wr.r,bottom:Wr.sill,head:_u(f,Wr.r,Wr.spring),noReveal:!0})),mat:fl,cuts:[Vt.x1]});for(let f of Yf)o_(t,f);t.save(),t.translate(0,0,Vt.z1),t.rotateY(Math.PI),t.translate(-(Vt.x1+2*en),0,-2*en);let e=f=>Vt.x1+2*en-f;ul(t,{u0:e(Vt.x1+2*en),u1:e(13.65),w0:0,w1:2*en,top:()=>Vt.spring,holes:F0.map(f=>({u0:e(f+Ne.halfW),u1:e(f-Ne.halfW),bottom:Ne.sill,head:_u(e(f),Ne.halfW,Ne.spring)})),mat:fl,revealMat:qo}),t.restore(),t.save(),t.translate(Vt.x1,0,0),t.rotateY(-Math.PI/2);let o=Gi.DOOR,n=Vt.zc,r=o.r;ul(t,{u0:Vt.z0-2*en,u1:Vt.z1+2*en,w0:-2*en,w1:0,top:f=>f<Vt.z0||f>Vt.z1?Vt.spring:Di(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:_u(n,r,o.spring)}],mat:fl,revealMat:qo}),t.restore(),t.save(),t.translate(14+en,0,0),t.rotateY(-Math.PI/2),ul(t,{u0:Vt.z0,u1:Vt.z1,w0:-0,w1:2*en,top:()=>ku,topStep:.15,holes:[{u0:Vt.z0,u1:Vt.z1,bottom:0,head:f=>Di(f)}],mat:fl,revealMat:qo}),t.restore();let a=14+en,s=Math.ceil((Vt.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(Vt.x1-a)*f/s,v=[];for(let h=0;h<=i;h++){let u=Vt.z0+(Vt.z1-Vt.z0)*h/i,d=Di(u),p=[0,Su-d,Vt.zc-u],m=Math.hypot(p[1],p[2]);v.push(t.vert([l,d,u],[0,p[1]/m,p[2]/m],Da))}c.push(v)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Um(t,e,o,n){let a=[];for(let s=0;s<=32;s++){let i=Vt.z0+(Vt.z1-Vt.z0)*s/32,c=Di(i),f=Su-c,l=Vt.zc-i,v=Math.hypot(f,l),h=[c+f/v*n,i+l/v*n];a.push({y:c,z:i,iy:h[0],iz:h[1],n:[0,f/v,l/v]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];Jn(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,qo),Jn(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],qo),Jn(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],qo)}}function Xf(t,e,o,n){let s=o,i=o+n*.16;Vr(t,e-.28,0,s,e+.28,Vt.spring-.3,i,qo),Vr(t,e-.28-.06,0,s,e+.28+.06,.32,o+n*(.16+.05),qo),Vr(t,e-.28-.05,Vt.spring-.3,s,e+.28+.05,Vt.spring-.1,o+n*(.16+.05),qo),Vr(t,e-.28-.1,Vt.spring-.1,s,e+.28+.1,Vt.spring,o+n*(.16+.1),qo)}function s_(t,e){let o=Di(Vt.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(n,e,Vt.zc,48,{mat:()=>Da});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=e+Math.cos(a)*.32,i=Vt.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=Da,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function i_(t){t.curMat=qo;for(let[e,o]of[[Vt.z0,1],[Vt.z1,-1]])Vr(t,14.35,Vt.spring-.12,e,Vt.x1,Vt.spring,e+o*.1,qo),Vr(t,14.35,Vt.spring-.04,e,Vt.x1,Vt.spring+.05,e+o*.18,qo);for(let[e,o]of[[Vt.z0,1],[Vt.z1,-1]])Vr(t,14.35,0,e,Vt.x1,.42,e+o*.12,qo),Vr(t,14.35,.42,e,Vt.x1,.5,e+o*.07,qo);for(let e of jm)Um(t,e,.24,.16),Xf(t,e,Vt.z0,1),Xf(t,e,Vt.z1,-1);for(let e of[14.35+.28,Vt.x1-.28])Um(t,e,.28,.22),Xf(t,e,Vt.z0,1),Xf(t,e,Vt.z1,-1);for(let e of F0)s_(t,e)}function c_(t){let e=Vt.z1+en,o=e-.04,n=e+.04,r=(i,c,f,l)=>Vr(t,i,c,o,f,l,n,hl),a=Ne.halfW,s=(i,c,f,l,v,h)=>{let u=(d,p,m)=>[i+p*Math.cos(d),Ne.spring+p*Math.sin(d),m];for(let d=0;d<h;d++){let p=l+(v-l)*d/h,m=l+(v-l)*(d+1)/h;Jn(t,u(p,c,o),u(m,c,o),u(m,f,o),u(p,f,o),[0,0,-1],hl),Jn(t,u(p,f,n),u(m,f,n),u(m,c,n),u(p,c,n),[0,0,1],hl)}};for(let i of F0){let c=i-a,f=i+a;r(c,Ne.sill,c+.07,Ne.spring),r(f-.07,Ne.sill,f,Ne.spring),r(c,Ne.sill,f,Ne.sill+.07),r(c,Ne.spring-.04,f,Ne.spring+.04);for(let v of[-.5,0,.5])r(i+v*a-.022,Ne.sill,i+v*a+.022,Ne.spring);let l=6;for(let v=1;v<l;v++){let h=Ne.sill+(Ne.spring-Ne.sill)*v/l;r(c,h-.02,f,h+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let v=1;v<6;v++){let h=Math.PI*v/6,u=Math.cos(h),d=Math.sin(h),p=.02,m=(g,x)=>[i+u*g-d*p*x,Ne.spring+d*g+u*p*x];Jn(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],hl),Jn(t,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],hl)}}}function l_(){let t=[],e=Vt.z1+en;for(let o of F0){let n=o-Ne.halfW,r=o+Ne.halfW;t.push([n,Ne.sill,e],[r,Ne.sill,e],[r,Ne.spring,e],[n,Ne.sill,e],[r,Ne.spring,e],[n,Ne.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Ne.spring,e],[o+Ne.halfW*Math.cos(s),Ne.spring+Ne.halfW*Math.sin(s),e],[o+Ne.halfW*Math.cos(i),Ne.spring+Ne.halfW*Math.sin(i),e])}}return t}function Wm(t,e){t.save(),t.translate(Vt.x1+en,0,Vt.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function f_(t){Wm(t,()=>{Gi.addSurround(t),Gi.addFrames(t,"fixed")})}function h_(t){return Gi.glassPanes(t||"fixed").map(([o,n,r])=>[Vt.x1+en-r,n,Vt.zc-7+o])}function u_(t){a_(t),i_(t),c_(t),f_(t),t.curMat=[0,0,0]}var d_={x:Vt.x1+en,zLo:Vt.zc-Gi.DOOR.r,zHi:Vt.zc+Gi.DOOR.r},go=t=>t.toFixed(4);function p_(){return`
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
		float k = floor((q.x - ${go(Ne.first)}) / ${go(Ne.pitch)} + 0.5);
		if (k < 0.0 || k > ${go(Ne.count-1)}) return 0.0;
		float dx = q.x - (${go(Ne.first)} + k * ${go(Ne.pitch)});
		float side = 1.0 - smoothstep(${go(Ne.halfW)} - soft, ${go(Ne.halfW)} + soft, abs(dx));
		float sill = smoothstep(${go(Ne.sill)} - soft, ${go(Ne.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${go(Ne.spring)}));
		float head = q.y < ${go(Ne.spring)} ? 1.0 : 1.0 - smoothstep(${go(Ne.halfW)} - soft, ${go(Ne.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${go(Ne.halfW*.5)}), 0.022, soft));
		float rowH = ${go((Ne.spring-Ne.sill)/6)};
		float ry = (q.y - ${go(Ne.sill)}) / rowH;
		cover = max(cover, q.y < ${go(Ne.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${go(Ne.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${go(Vt.x0)} || p.z < ${go(Vt.z0-.1)} || p.z > ${go(Vt.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${go(Vt.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${go(Vt.z1+2*en)} - p.z) / WIN_SKY.z;
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
		${Yf.map(t=>`{ float d = abs(p.x - ${go(t)}); if (d < best) { best = d; lamp = vec3(${go(t)}, ${go(Wr.spring+.55)}, ${go(Vt.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${go(Vt.z0+1.6)} || p.z < ${go(Vt.z0-Wr.r-.1)} || p.x < ${go(Vt.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${go(Wr.r)}, ${go(Wr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${go(Vt.x0-1)}) return 0.0;
		float inC = smoothstep(${go(Vt.z0-1.5)}, ${go(Vt.z0)}, p.z) * smoothstep(${go(Vt.x0-1)}, ${go(Vt.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${go(Vt.z0)}, ${go(Vt.z1)}, p.z);
		return inC * near;
	}`}Vm.exports={wallWithHoles:ul,windowLightGLSL:p_,addWing:u_,windowGlass:l_,farDoorGlass:h_,atFarDoor:Wm,FAR_DOOR:d_,vaultY:Di,C:Vt,NICHE_X:Yf,NICHE:Wr,NICHE_PLINTH_TOP:n_,NICHE_STATUE_Z:r_,WIN:Ne,winCentres:F0,piers:jm,PAINTING_X:e_,HEIGHT:ku}});var M0=bt((hA,Km)=>{"use strict";var Eu=mr(),Qo=8,Ui=.35,Os=14,Bi=4,oe={x0:Os+Ui,x1:Os+Ui+2*Bi,z0:5.9-Bi,z1:5.9+Bi,zc:5.9,cx:Os+Ui+Bi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Qo},oculus:3.3};oe.domeTop=oe.dome.base+oe.dome.r;var ji={spokes:16,ringE:[.42,.95],bar:.035},Dn={sxz:1.32,sy:1.6,yaw:.6};Dn.crownC=[oe.cx,.4+3.4*Dn.sy,oe.zc];Dn.crownR=[2.3*Dn.sxz,1.9*Dn.sy,2.3*Dn.sxz];Dn.trunkR=.26*Dn.sxz;Dn.trunkTop=.4+2.2*Dn.sy;var Xm={inner:1.05,outer:1.62,seat:.48,soil:.4},Zf=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),tr=[0,0,0],Hi=[11,0,0],Kf=[10,0,0],Qf=[9,0,0],v_=[5,0,0],Au=[3,0,0];function ba(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Pr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}var m_=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function g_(t){t.save(),t.translate(Os+Ui,0,0),t.rotateY(-Math.PI/2),Eu.wallWithHoles(t,{u0:0,u1:Eu.C.z0,w0:0,w1:2*Ui,top:()=>Qo,holes:[{u0:oe.zc-oe.arch.r,u1:oe.zc+oe.arch.r,bottom:0,head:m_(oe.zc,oe.arch.r,oe.arch.spring),step:.05}],mat:Hi,revealMat:tr,topStep:1}),t.restore();let e=Os-Ui;for(let[s,i]of[[0,oe.zc-oe.arch.r],[oe.zc+oe.arch.r,Eu.C.z0]])Pr(t,e-.12,0,s,e,.42,i,tr),Pr(t,e-.07,.42,s,e,.5,i,tr);let o=e,n=.24,r=40,a=(s,i,c)=>[c,oe.arch.spring+Math.sin(s)*i,oe.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;ba(t,a(i,oe.arch.r,o-.07),a(c,oe.arch.r,o-.07),a(c,oe.arch.r+n,o-.07),a(i,oe.arch.r+n,o-.07),[-1,0,0],tr),ba(t,a(i,oe.arch.r+n,o),a(c,oe.arch.r+n,o),a(c,oe.arch.r+n,o-.07),a(i,oe.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],tr),ba(t,a(i,oe.arch.r,o),a(c,oe.arch.r,o),a(c,oe.arch.r,o-.07),a(i,oe.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],tr)}Pr(t,o-.12,oe.arch.spring+oe.arch.r-.06,oe.zc-.17,o,oe.arch.spring+oe.arch.r+n+.16,oe.zc+.17,tr);for(let s of[-1,1]){let i=oe.zc+s*oe.arch.r,c=oe.zc+s*(oe.arch.r+n);Pr(t,o-.07,0,i,o,oe.arch.spring,c,tr),Pr(t,o-.13,oe.arch.spring-.16,i-s*.03,o,oe.arch.spring,c+s*.08,tr),Pr(t,o-.12,0,i-s*.03,o,.5,c+s*.06,tr)}}function x_(t){let{x0:e,x1:o,z0:n,z1:r}=oe;ba(t,[Os,0,n],[o,0,n],[o,0,r],[Os,0,r],[0,1,0],tr),t.curMat=Hi,ba(t,[o,0,n],[o,0,r],[o,Qo,r],[o,Qo,n],[-1,0,0],Hi),ba(t,[e,0,n],[o,0,n],[o,Qo,n],[e,Qo,n],[0,0,1],Hi),ba(t,[o,0,r],[e,0,r],[e,Qo,r],[o,Qo,r],[0,0,-1],Hi),ba(t,[e,0,r],[e,0,n],[e,Qo,n],[e,Qo,r],[1,0,0],Hi),Pr(t,o-.12,0,n,o,.42,r,tr),Pr(t,e,0,n,o,.42,n+.12,tr),Pr(t,e,0,r-.12,o,.42,r,tr),Pr(t,o-.2,Qo-.3,n,o,Qo,r,tr),Pr(t,e,Qo-.3,n,o,Qo,n+.2,tr),Pr(t,e,Qo-.3,r-.2,o,Qo,r,tr),Pr(t,e,Qo-.3,n,e+.2,Qo,r,tr);let a=oe.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let x=Math.PI*2*g/s;i.push([oe.cx+Math.cos(x)*a,oe.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(Bi/Math.max(x,1e-6),Bi/Math.max(b,1e-6))};for(let g=0;g<s;g++){let x=Math.PI*2*g/s,b=Math.PI*2*(g+1)/s,w=c(x),_=c(b),M=[oe.cx+Math.cos(x)*w,Qo,oe.zc+Math.sin(x)*w],A=[oe.cx+Math.cos(b)*_,Qo,oe.zc+Math.sin(b)*_];ba(t,[i[g][0],Qo,i[g][1]],[i[g+1][0],Qo,i[g+1][1]],A,M,[0,-1,0],Kf)}t.lathe([[a+.02,Qo-.18,1],[a-.12,Qo-.18,1],[a-.12,Qo-.06,1],[a-.05,Qo,1],[a,Qo+.02]],oe.cx,oe.zc,s,{mat:()=>tr});let f=16,l=(g,x,b)=>[oe.cx+Math.cos(g)*Math.cos(x)*b,oe.dome.base+Math.sin(x)*b,oe.zc+Math.sin(g)*Math.cos(x)*b],v=Math.PI/2;for(let g=0;g<s;g++)for(let x=0;x<f;x++){let b=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,_=v*x/f,M=v*(x+1)/f,A=(R,B)=>[-Math.cos(R)*Math.cos(B),-Math.sin(B),-Math.sin(R)*Math.cos(B)],I=[t.vert(l(b,_,a),A(b,_),Qf),t.vert(l(w,_,a),A(w,_),Qf),t.vert(l(w,M,a),A(w,M),Qf),t.vert(l(b,M,a),A(b,M),Qf)];t.tri(I[0],I[1],I[2]),t.tri(I[0],I[2],I[3])}for(let g=0;g<ji.spokes;g++){let x=Math.PI*2*g/ji.spokes,b=[];for(let w=0;w<=14;w++)b.push(l(x,(v-.06)*w/14,a-.04));t.tube(b,()=>.04,20,6,{mat:()=>Kf})}for(let g of ji.ringE){let x=Math.cos(g)*(a-.04),b=oe.dome.base+Math.sin(g)*(a-.04),w=[];for(let _=0;_<=72;_++){let M=Math.PI*2*_/72;w.push([oe.cx+Math.cos(M)*x,b,oe.zc+Math.sin(M)*x])}t.tube(w,()=>.035,72,6,{mat:()=>Kf})}t.ellipsoid([oe.cx,oe.dome.base+a-.06,oe.zc],[.16,.08,.16],6,12,{mat:()=>Kf});let h=.46,u=.55,d=.12,p=(g,x,b,w)=>{Pr(t,g,h-.08,x,b,h,w,Au);let _=b-g>w-x?[g+.25,b-.25]:[g+.06,b-.06],M=b-g>w-x?[x+.06,w-.06]:[x+.25,w-.25];Pr(t,_[0],0,M[0],_[1],h-.08,M[1],Au)};p(o-d-u,n+1.1,o-d,r-1.1),p(e+1,n+d,o-1.1,n+d+u),p(e+1,r-d-u,o-1.1,r-d);let m=Xm;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],oe.cx,oe.zc,64,{mat:()=>Au}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],oe.cx,oe.zc,48,{mat:()=>v_})}function y_(t){g_(t),x_(t),t.curMat=[0,0,0]}var Do=t=>t.toFixed(4);function Ym(){let t=oe.dome.r,e=ji.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${Do(Zf[0])}, ${Do(Zf[1])}, ${Do(Zf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Do(oe.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Do(oe.cx)}, ${Do(oe.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Do(t-.15)} - soft, ${Do(t-.15)} + soft, d);
		float hw = ${Do(ji.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Do(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Do(Math.PI*2/ji.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Do(Dn.crownC[0])}, ${Do(Dn.crownC[1])}, ${Do(Dn.crownC[2])});
		vec3 r = vec3(${Do(Dn.crownR[0])}, ${Do(Dn.crownR[1])}, ${Do(Dn.crownR[2])});
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
		float tt = (${Do(Dn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Do(oe.cx)}, ${Do(oe.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Do(Dn.trunkR*.7)}, ${Do(Dn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function b_(){return`
	${Ym()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Do(oe.x0-.75)} || p.z < ${Do(oe.z0-.5)} || p.z > ${Do(oe.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Do(oe.x0-1.5)} || p.z < ${Do(oe.z0-1.5)} || p.z > ${Do(oe.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Do(oe.x0-1.2)}, ${Do(oe.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Do(oe.cx)}, ${Do(oe.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Km.exports={addAlcove:y_,alcoveLightGLSL:b_,oculusGLSL:Ym,A:oe,BENCH:Xm,SHAFT:Zf,TREE:Dn}});var er=bt((uA,Zm)=>{"use strict";var q0=0;try{let t=location.search;/[?&]night\b/.test(t)&&(q0=1)}catch(t){}var wa=q0,Tu=0,Qm=[],Jf={tick(t){let e=Tu?Math.min(.1,t-Tu):0;if(Tu=t,wa!==q0){let o=e/2.4;wa=q0>wa?Math.min(q0,wa+o):Math.max(q0,wa-o)}return Jf.night},get night(){return wa*wa*(3-2*wa)},get isNight(){return q0===1},get settled(){return wa===q0},set(t){q0=t?1:0,Qm.forEach(e=>e(q0))},toggle(){Jf.set(!q0)},onChange(t){Qm.push(t)}};Jf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;Zm.exports=Jf});var Ha=bt((dA,vl)=>{"use strict";var zu=er(),{C:Lu}=mr(),{A:th,BENCH:dl}=M0(),Gn=Math.PI,w_=[18,29,40],eh=.575,Ga=[],pl=(t,e,o,n,r,a,s)=>Ga.push(Object.assign({x:t,y:e,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));w_.forEach(t=>{pl(1.25+eh+.48,3.25,t,[1,0],.48,eh,{s:1.2}),pl(12.75-eh-.48,3.25,t,[-1,0],.48,eh,{s:1.2})});[3,11].forEach(t=>pl(t,3.45,Lu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var __=[14.63,19.63,24.03,28.43,32.83,Lu.x1-.28];__.forEach(t=>pl(t,3.15,Lu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>pl(.35+.44,2.75,t,[1,0],.44,99));{let t=(dl.inner+dl.outer)/2,e=Math.atan2(-1.12,-.98);Ga.push({x:th.cx+Math.cos(e)*t,y:dl.seat+.155,z:th.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[th.cx,th.zc,dl.outer+.07,dl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Nu=.13,oh=.21,or=Nu/Math.cos(Gn/6),Co=t=>t.toFixed(4);function Jm(t){let o=(t||Ga.map((n,r)=>r)).map(n=>{let r=Ga[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Co(r.ring[3]-.03)}) {
					float tt = ${Co(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Co(r.x)}, ${Co(r.z)}) + D.xz * tt - vec2(${Co(r.ring[0])}, ${Co(r.ring[1])});
					T *= smoothstep(${Co(r.ring[2]-.02)}, ${Co(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Co(r.o[0])}, ${Co(r.o[1])}));
					if (behind > ${Co(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Co(a)}, ${Co(s)}))) * ${Co(r.back)} / behind;
						T *= smoothstep(${Co(r.hw-.04)}, ${Co(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Co(r.x)}, ${Co(r.y)}, ${Co(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${Co(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Co(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${Co(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Co(n*1.7)}) + 0.04 * sin(time * 15.3 + ${Co(n*2.9)}) * sin(time * 1.9 + ${Co(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Co(1/(r.s*r.s))}) * (1.0 - smoothstep(${Co(r.range*.6)}, ${Co(r.range)}, d));
					sum += ${Co(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Co(Gn/6)}, ${Co(Gn/3)}) - ${Co(Gn/6)};
		float U = tan(t) / ${Co(Math.tan(Gn/6))};
		float V = (q.y / h) * (${Co(Nu/oh)} / cos(t));
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
	}`}var on=0,M_=1;function k_(){let t=[],e=[],o=[],n=[],r=[],a=(u,d,p,m)=>(t.push(u[0],u[1],u[2]),e.push(d[0],d[1],d[2]),o.push(p),n.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(u,d)=>[u[0]-d[0],u[1]-d[1],u[2]-d[2]],i=(u,d)=>[u[1]*d[2]-u[2]*d[1],u[2]*d[0]-u[0]*d[2],u[0]*d[1]-u[1]*d[0]],c=u=>{let d=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/d,u[1]/d,u[2]/d]};function f(u,d,p,m,g,x){let b=c(i(s(d,u),s(m,u))),w=a(u,b,g,[0,0]),_=a(d,b,g,[1,0]),M=a(p,b,g,[1,1]),A=a(m,b,g,[0,1]);r.push(w,_,M,w,M,A),x&&r.push(w,M,_,w,A,M)}function l(u,d,p){for(let x=0;x<u.length;x++){let b=u[Math.max(0,x-1)],w=u[Math.min(u.length-1,x+1)],_=c(s(w,b)),M=Math.abs(_[1])>.9?[1,0,0]:[0,1,0],A=c(i(_,M)),I=i(A,_),R=typeof d=="function"?d(x/(u.length-1)):d;for(let B=0;B<=6;B++){let D=B/6*Gn*2,Z=Math.cos(D),P=Math.sin(D),j=[A[0]*Z+I[0]*P,A[1]*Z+I[1]*P,A[2]*Z+I[2]*P];a([u[x][0]+j[0]*R,u[x][1]+j[1]*R,u[x][2]+j[2]*R],j,p)}}let g=t.length/3-u.length*7;for(let x=0;x<u.length-1;x++)for(let b=0;b<6;b++){let w=g+x*7+b,_=w+6+1;r.push(w,_,w+1,w+1,_,_+1)}}function v(u,d,p,m,g,x,b,w,_){let M=(A,I,R)=>{let B=x+Gn/6+R*Gn/3;return[u[0]+Math.cos(B)*A,I,u[2]+Math.sin(B)*A]};for(let A=0;A<6;A++)f(M(m,d,A+1),M(m,d,A),M(g,p,A),M(g,p,A+1),b);if(w&&g>0)for(let A=0;A<6;A++){let I=a([u[0],p,u[2]],[0,1,0],b),R=a(M(g,p,A),[0,1,0],b),B=a(M(g,p,A+1),[0,1,0],b);r.push(I,B,R)}if(_&&m>0)for(let A=0;A<6;A++){let I=a([u[0],d,u[2]],[0,-1,0],b),R=a(M(m,d,A),[0,-1,0],b),B=a(M(m,d,A+1),[0,-1,0],b);r.push(I,R,B)}}function h(u,d,p,m,g,x,b){let w=[];for(let M=0;M<=18;M++){let A=M/18,I=(b||0)+A*m*Gn*2,R=p*(1-.75*A);w.push([u[0]+d[0]*Math.cos(I)*R,u[1]+Math.sin(I)*R,u[2]+d[2]*Math.cos(I)*R])}l(w,g,x)}return Ga.forEach(u=>{let d=u.s,p=Math.atan2(u.o[1],u.o[0]),m=[u.x,u.y,u.z],g=(w,_,M)=>[u.x+u.o[0]*w-u.o[1]*(M||0),u.y+_,u.z+u.o[1]*w+u.o[0]*(M||0)],x=u.y-oh*d,b=u.y+oh*d;for(let w=0;w<6;w++){let _=p+Gn/6+w*Gn/3,M=_+Gn/3,A=or*d*.97,I=[u.x+Math.cos(_)*A,x,u.z+Math.sin(_)*A],R=[u.x+Math.cos(M)*A,x,u.z+Math.sin(M)*A];f(R,I,[I[0],b,I[2]],[R[0],b,R[2]],M_,!0)}for(let w=0;w<6;w++){let _=p+Gn/6+w*Gn/3,M=or*d;l([[u.x+Math.cos(_)*M,x-.02*d,u.z+Math.sin(_)*M],[u.x+Math.cos(_)*M,b+.02*d,u.z+Math.sin(_)*M]],.011*d,on)}v(m,x-.035*d,x,or*d*1.12,or*d*1.12,p,on,!0,!0),v(m,x-.1*d,x-.035*d,or*d*.55,or*d*1,p,on,!1,!0),v(m,x-.17*d,x-.1*d,0,or*d*.55,p,on,!1,!1);for(let w=0;w<6;w++){let _=p+w*Gn/3,M=Nu*d*1.06,A=[u.x+Math.cos(_)*M,x-.06*d,u.z+Math.sin(_)*M];h(A,[-Math.sin(_),0,Math.cos(_)],.03*d,.85,.004*d,on,.3)}v(m,b,b+.03*d,or*d*1.14,or*d*1.14,p,on,!1,!0),v(m,b+.03*d,b+.2*d,or*d*1.14,or*d*.32,p,on,!1,!1),v(m,b+.2*d,b+.27*d,or*d*.34,or*d*.34,p,on,!1,!1),v(m,b+.27*d,b+.37*d,or*d*.42,0,p,on,!1,!0),l([[u.x,b+.36*d,u.z],[u.x,b+.47*d,u.z]],w=>.01*d*(1-.7*w),on),v([u.x,0,u.z],b+.44*d,b+.47*d,.018*d,0,p,on,!1,!0);for(let w=0;w<6;w++){let _=p+Gn/6+w*Gn/3,M=or*d*1.14,A=[u.x+Math.cos(_)*M,b+.03*d,u.z+Math.sin(_)*M];l([A,[A[0],A[1]+.09*d,A[2]]],I=>.008*d*(1-.8*I),on),v([A[0],0,A[2]],A[1]+.035*d,A[1]+.06*d,.014*d,.014*d,_,on,!0,!0)}if(u.mount==="wall"){let w=u.back,_=x-.32,M=g(-w,0,0);((D,Z,P)=>{let j=[u.o[0],0,u.o[1]],H=[-u.o[1],0,u.o[0]],J=(et,mt,Dt)=>[M[0]+H[0]*et+j[0]*Dt,mt,M[2]+H[2]*et+j[2]*Dt],V=.03,st=.065;f(J(-P,D,st),J(P,D,st),J(P,Z,st),J(-P,Z,st),on,!0),f(J(P,D,V),J(P,D,st),J(P,Z,st),J(P,Z,V),on,!0),f(J(-P,D,st),J(-P,D,V),J(-P,Z,V),J(-P,Z,st),on,!0),f(J(-P,Z,st),J(P,Z,st),J(P,Z,V),J(-P,Z,V),on,!0),f(J(-P,D,V),J(P,D,V),J(P,D,st),J(-P,D,st),on,!0),v([M[0]+j[0]*st,0,M[2]+j[2]*st],Z,Z+.05,P*.6,0,p,on,!1,!0),v([M[0]+j[0]*st,0,M[2]+j[2]*st],D-.05,D,0,P*.6,p,on,!1,!1)})(_-.2,_+.2,.07);let I=[];for(let D=0;D<=14;D++){let Z=D/14,P=-w+.05+Z*(w-.05),j=_+.04+(x-.17*d-_-.04)*Math.pow(Z,2.2);I.push(g(P,j-u.y,0))}l(I,D=>.022*(1-.3*D),on);let R=[];for(let D=0;D<=10;D++){let Z=D/10;R.push(g(-w+.05+Z*w*.6,_-.14+Z*.16+.05*Math.sin(Z*Gn)-u.y,0))}l(R,.009,on);let B=R[R.length-1];h([B[0]-u.o[0]*.03,B[1]+.02,B[2]-u.o[1]*.03],[u.o[0],0,u.o[1]],.045,1.1,.007,on,-.4),[.3,.55].forEach(D=>{let Z=I[Math.round(D*14)],P=R[Math.round(D/.62*10)]||R[10];l([Z,P],.006,on)}),[-1,1].forEach(D=>{let Z=g(-.05,-oh*d-.2*d,0);h([Z[0]-u.o[1]*D*.05,Z[1],Z[2]+u.o[0]*D*.05],[-u.o[1]*D,0,u.o[0]*D],.05*d,.9,.006,on,Gn)})}else for(let w=0;w<3;w++){let _=p+w*Gn*2/3,M=[u.x+Math.cos(_)*or*d*.7,x-.035*d,u.z+Math.sin(_)*or*d*.7],A=[u.x+Math.cos(_)*or*d*1.25,x-.17*d,u.z+Math.sin(_)*or*d*1.25];l([M,A],.012*d,on)}}),{pos:t,nrm:e,kind:o,uv:n,elems:r}}vl.exports=t=>{let e=k_(),o=t({vert:`
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
		${Jm()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>zu.night}}),n=[],r=[];Ga.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:t.context("time"),night:()=>zu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),zu.night>.01&&a()}};vl.exports.lanternGLSL=Jm;vl.exports.LANTERNS=Ga;vl.exports.TREE_LANTERN=[Ga.length-1]});var ja=bt((pA,Xr)=>{"use strict";var S_=er(),Io=Math.PI,Hn=t=>(+t).toFixed(4),E_=t=>`vec3(${Hn(t[0])}, ${Hn(t[1])}, ${Hn(t[2])})`,Ce={x:-7,z:44.5},Ze=5.2,hr=15,ie={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},na={z0:42.2,z1:46.8,top:6.3,x:.35},ah=[Ce.x-Math.sqrt(Ze*Ze-3.05*3.05),0,0],Sn={x0:-2.05+ah[0],x1:ah[0],z0:41.45,z1:47.55,top:4.3},Ru=[[Sn.x1+.05,2.35,Sn.z0-.45],[Sn.x1+.05,2.35,Sn.z1+.45]].map(([t,e,o])=>{let n=Math.atan2(o-Ce.z,t-Ce.x);return[Ce.x+Math.cos(n)*(Ze-.16),e,Ce.z+Math.sin(n)*(Ze-.16)]}),zo={ri:3.4,ro:Ze,a0:-35*Io/180,rise:.1836,step:3.6*Io/180,n:88,thick:.36};zo.k=zo.rise/zo.step;var Ir=t=>zo.a0-t,Ua=t=>t*zo.k,cn={x:Ce.x+.1,z:Ce.z-.15,yaw:-Io/2,scale:1.3},_a=cn.scale/1.1,ml={keyX0:cn.x-.524*_a,keyX1:cn.x+.491*_a,keyTop:.647*_a,keyFront:cn.z+.808*_a,keyBack:cn.z+.72*_a,stoolX:cn.x-.041*_a,stoolZ:cn.z+1.122*_a,stoolFront:cn.z+.96*_a,stoolTop:.37*_a,heading:Io},rh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function e2(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function A_(t,e){let o=1e9;for(let n=0;n<rh.length-1;n++){let[r,a]=rh[n],[s,i]=rh[n+1],c=s-r,f=i-a,l=Math.max(0,Math.min(1,((t-r)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-r-c*l,e-a-f*l))}return o}var nh=t=>ie.spring+Math.sqrt(Math.max(0,ie.r*ie.r-(t-ie.zc)*(t-ie.zc))),Ba=t=>Ce.x+Math.sqrt(Math.max(0,Ze*Ze-(t-Ce.z)*(t-Ce.z)));function Wi(t,e){return Math.hypot(t-Ce.x,e-Ce.z)<Ze||t<=0&&t>Ce.x&&e>ie.z0&&e<ie.z1||t>Sn.x0&&t<Sn.x1&&e>Sn.z0&&e<Sn.z1}function T_(t,e){if(Math.hypot(t-Ce.x,e-Ce.z)<zo.ri-.05)return 99;let n=Math.atan2(e-Ce.z,t-Ce.x),r=zo.a0-n;for(;r<0;)r+=2*Io;for(;r>=2*Io;)r-=2*Io;return r>zo.n*zo.step?99:Ua(r)-zo.thick}function z_(){let t=[],e=e2(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-cn.x,c=s-cn.z,f=Math.cos(cn.yaw),l=Math.sin(cn.yaw),v=(f*i-l*c)/cn.scale,h=(l*i+f*c)/cn.scale;return v>-1.05&&v<1.3&&h>-.7&&h<.72},r=0;for(;t.length<980&&r<6e4;){r++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(Ze-1.45),i=e()*2*Io,c=Ce.x+Math.cos(i)*s,f=Ce.z+Math.sin(i)*s;if(!Wi(c,f)||s>Ze-.18||n(c,f)||A_(c,f)<.62||T_(c,f)<2.3||c<Sn.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let v=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,v,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*zo.step,f=Ir(c),l=zo.ri+.55+e()*(zo.ro-zo.ri-.75),v=.022+e()*.016;t.push([Ce.x+Math.cos(f)*l,(a+1)*zo.rise,Ce.z+Math.sin(f)*l,v,.05+e()*.14,e()*100])}}for(let a of Ru)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[Sn.z0-.35,Sn.z1+.35])for(let s=0;s<9;s++){let i=Sn.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-Ce.x,c-Ce.z)>Ze-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function L_(t){let o=e2(77),n=[];for(let r=0;r<14;r++){let a=t[Math.floor(o()*t.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;n.forEach((l,v)=>{let h=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;h<f&&(f=h,c=v)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/t.length])}var Cu=z_(),t2=L_(Cu.filter(t=>t[1]<2||t[1]>2.5)).concat(Ru.map(t=>[t[0],t[1]+.35,t[2],.035]));function o2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${t2.map((e,o)=>`
		{
			vec3 d = ${E_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Hn(5.3+o*.71)} + ${Hn(o*1.9)}) + 0.06 * sin(time * ${Hn(11.7+o*1.3)} + ${Hn(o*.7)});
			float w = ${Hn(e[3]*t2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Hn(hr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Hn(Ce.x)}, ${Hn(hr)}, ${Hn(Ce.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Hn(ml.stoolX)}, ${Hn(ml.keyFront+.1)})));
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
	}`}var je={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function n2(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),v=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.tri=(e,o,n,r,a)=>{let s=t.v(e,r,a),i=t.v(o,r,a),c=t.v(n,r,a);t.idx.push(s,i,c)},t}function N_(){let t=n2(),e=(n,r,a)=>[Ce.x+Math.cos(n)*r,a,Ce.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Sn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,f=a+.2;if(!(Wi(s,c)||Wi(i,c)||Wi(s,f)||Wi(i,f)||Wi((s+i)/2,(c+f)/2)))continue;let l=c,v=f;s>Ba(ie.z0)-.3&&(l=Math.max(l,ie.z0),v=Math.min(v,ie.z1),v<=l)||t.quad([s,0,l],[s,0,v],[i,0,v],[i,0,l],[0,1,0],je.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*Io,s=(r+1)/360*2*Io,i=(a+s)/2,c=e(i,Ze,0),f=0;c[0]>Ce.x&&c[2]>ie.z0-.02&&c[2]<ie.z1+.02&&(f=Math.max(nh(Math.min(Math.max(e(a,Ze,0)[2],ie.z0),ie.z1)),nh(Math.min(Math.max(e(s,Ze,0)[2],ie.z0),ie.z1)))),c[0]<Ce.x&&c[2]>Sn.z0-.02&&c[2]<Sn.z1+.02&&(f=Sn.top);let l=a*Ze,v=s*Ze,h=o(a).map(p=>-p),u=o(s).map(p=>-p),d=[f];for(let p=Math.ceil(f/2.5)*2.5;p<hr;p+=2.5)p>f+.01&&d.push(p);d.push(hr);for(let p=0;p<d.length-1;p++){let m=d[p],g=d[p+1],x=t.v(e(a,Ze,m),h,je.WALL,[l,m]),b=t.v(e(s,Ze,m),u,je.WALL,[v,m]),w=t.v(e(s,Ze,g),u,je.WALL,[v,g]),_=t.v(e(a,Ze,g),h,je.WALL,[l,g]);t.idx.push(x,b,w,x,w,_)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*Io,f=(i+1)/360*2*Io,l=(c+f)/2,v=e(l,Ze,0);if(r<1&&(v[0]>Ce.x&&v[2]>ie.z0&&v[2]<ie.z1||v[0]<Ce.x&&v[2]>Sn.z0&&v[2]<Sn.z1))continue;let h=Ze-s;t.quad(e(c,h,r),e(f,h,r),e(f,h,r+a),e(c,h,r+a),o(l).map(u=>-u),je.WALL,[[c*Ze,r+100],[f*Ze,r+100],[f*Ze,r+a+100],[c*Ze,r+a+100]]),t.quad(e(c,h,r+a),e(f,h,r+a),e(f,Ze,r+a),e(c,Ze,r+a),[0,1,0],je.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&t.quad(e(c,Ze,r),e(f,Ze,r),e(f,h,r),e(c,h,r),[0,-1,0],je.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=na.x;for(let[a,s]of[[ie.z0,1],[ie.z1,-1]]){let i=Ba(a);t.quad([n,0,a],[i,0,a],[i,ie.spring,a],[n,ie.spring,a],[0,0,s],je.WALL,[[n,0],[i,0],[i,ie.spring],[n,ie.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*Io,i=(a+1)/r*Io,c=ie.zc-Math.cos(s)*ie.r,f=ie.zc-Math.cos(i)*ie.r,l=ie.spring+Math.sin(s)*ie.r,v=ie.spring+Math.sin(i)*ie.r,h=[0,-Math.sin(s),Math.cos(s)],u=[0,-Math.sin(i),Math.cos(i)],d=t.v([n,l,c],h,je.WALL,[n,s*ie.r]),p=t.v([Ba(c),l,c],h,je.WALL,[Ba(c),s*ie.r]),m=t.v([Ba(f),v,f],u,je.WALL,[Ba(f),i*ie.r]),g=t.v([n,v,f],u,je.WALL,[n,i*ie.r]);t.idx.push(d,p,m,d,m,g)}}{let n=na.x,r=.05;for(let f=na.z0;f<na.z1-1e-6;f+=r){let l=f,v=Math.min(na.z1,f+r),u=(d=>d>ie.z0&&d<ie.z1)((l+v)/2)?Math.max(nh(l),nh(v)):0;t.quad([n,u,l],[n,u,v],[n,na.top,v],[n,na.top,l],[1,0,0],je.HALLSTONE,[[l,u],[v,u],[v,na.top],[l,na.top]])}let a=.32,s=.06,i=n+s,c=36;for(let f=0;f<c;f++){let l=f/c*Io,v=(f+1)/c*Io,h=(g,x)=>[i,ie.spring+Math.sin(g)*x,ie.zc-Math.cos(g)*x],u=ie.r,d=ie.r+a;t.quad(h(l,u),h(v,u),h(v,d),h(l,d),[1,0,0],je.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let p=(g,x,b)=>[b,ie.spring+Math.sin(g)*x,ie.zc-Math.cos(g)*x],m=[0,Math.sin((l+v)/2),-Math.cos((l+v)/2)];t.quad(p(l,d,n),p(v,d,n),p(v,d,i),p(l,d,i),m,je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(p(l,u,n),p(v,u,n),p(v,u,i),p(l,u,i),m.map(g=>-g),je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,v]of[[ie.z0-a,ie.z0,-1],[ie.z1,ie.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,ie.spring,l],[i,ie.spring,f],[1,0,0],je.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=v<0?f:l,u=v<0?l:f;t.quad([n,0,h],[i,0,h],[i,ie.spring,h],[n,ie.spring,h],[0,0,v],je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,0,u],[i,0,u],[i,ie.spring,u],[n,ie.spring,u],[0,0,-v],je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let d=ie.spring-.16,p=.16,m=.11,g=Math.min(f,l)-.05,x=Math.max(f,l)+.05;t.quad([n+m,d,g],[n+m,d,x],[n+m,d+p,x],[n+m,d+p,g],[1,0,0],je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,d+p,g],[n+m,d+p,g],[n+m,d+p,x],[n,d+p,x],[0,1,0],je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,d,g],[n,d,x],[n+m,d,x],[n+m,d,g],[0,-1,0],je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,x])t.quad([n,d,b],[n+m,d,b],[n+m,d+p,b],[n,d+p,b],[0,0,b===g?-1:1],je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=ie.spring+ie.r-.05,l=ie.spring+ie.r+a+.12,v=.16,h=.22,u=i+.04;t.quad([u,f,ie.zc-v],[u,f,ie.zc+v],[u,l,ie.zc+h],[u,l,ie.zc-h],[1,0,0],je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let d of[-1,1])t.quad([n,f,ie.zc+d*v],[u,f,ie.zc+d*v],[u,l,ie.zc+d*h],[n,l,ie.zc+d*h],[0,0,d],je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([n,l,ie.zc-h],[u,l,ie.zc-h],[u,l,ie.zc+h],[n,l,ie.zc+h],[0,1,0],je.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=Sn;t.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],je.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let v=Ce.x-Math.sqrt(Ze*Ze-(f-Ce.z)*(f-Ce.z));t.quad([n,0,f],[v,0,f],[v,i,f],[n,i,f],[0,0,l],je.WALL,[[n,0],[v,0],[v,i],[n,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,h=Ce.x-Math.sqrt(Ze*Ze-(l-Ce.z)**2),u=Ce.x-Math.sqrt(Ze*Ze-(v-Ce.z)**2);t.quad([n,i,l],[h,i,l],[u,i,v],[n,i,v],[0,-1,0],je.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,h=Ce.x-Math.sqrt(Ze*Ze-(l-Ce.z)**2)+.05,u=Ce.x-Math.sqrt(Ze*Ze-(v-Ce.z)**2)+.05;t.quad([h,i-.3,l],[u,i-.3,v],[u,i,v],[h,i,l],[1,0,0],je.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Ze];for(let a=0;a<120;a++){let s=a/120*2*Io,i=(a+1)/120*2*Io,c=(s+i)/2;c>Io&&(c-=2*Io);for(let f=0;f<r.length-1;f++){let l=r[f],v=r[f+1],h=c*180/Io;l>=3.3&&h>8&&h<85||t.quad(e(s,l,hr),e(s,v,hr),e(i,v,hr),e(i,l,hr),[0,-1,0],je.CEIL,[[s*l,l],[s*v,v],[i*v,v],[i*l,l]])}t.quad(e(s,1.15,hr),e(i,1.15,hr),e(i,1.15,hr+.7),e(s,1.15,hr+.7),o(c).map(f=>-f),je.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([Ce.x,hr+.7,Ce.z],e(i,1.15,hr+.7),e(s,1.15,hr+.7),[0,-1,0],je.OCULUS)}}{let n=zo.ri,r=zo.ro,a=zo.n*zo.step;for(let c=0;c<zo.n;c++){let f=c*zo.step,l=(c+1)*zo.step,v=Ir(f),h=Ir(l),u=(c+1)*zo.rise,d=c*zo.rise,p=2;for(let x=0;x<p;x++){let b=v+(h-v)*x/p-(x===0?.004:0),w=v+(h-v)*(x+1)/p;t.quad(e(b,n,u),e(b,r,u),e(w,r,u),e(w,n,u),[0,1,0],je.STEP,[[n*b,c],[r*b,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(v),0,Math.cos(v)],g=v-.004;t.quad(e(g,n,d),e(g,r,d),e(g,r,u),e(g,n,u),m,je.STEP,[[n*v,c+.5],[r*v,c+.5],[r*v,c+.5],[n*v,c+.5]]),t.quad(e(v,n,Ua(f)+.06),e(h,n,Ua(l)+.06),e(h,n,u),e(g,n,u),o((v+h)/2).map(x=>-x),je.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*Io/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,v=Ir(f),h=Ir(l),u=Ua(f),d=Ua(l),p=u-zo.thick,m=d-zo.thick,g=o(v).map(A=>-A),x=o(h).map(A=>-A),b=t.v(e(v,n,p),g,je.STRING,[f*n,0]),w=t.v(e(h,n,m),x,je.STRING,[l*n,0]),_=t.v(e(h,n,d+.06),x,je.STRING,[l*n,1]),M=t.v(e(v,n,u+.06),g,je.STRING,[f*n,1]);t.idx.push(b,w,_,b,_,M);for(let A=0;A<i.length-1;A++){let I=i[A],R=i[A+1],B=D=>{let Z=o(D);return[-Z[0]*.12,-.99,-Z[2]*.12]};t.quad(e(v,I,p),e(v,R,p),e(h,R,m),e(h,I,m),B((v+h)/2),je.SOFFIT,[[f*I,I],[f*R,R],[l*R,R],[l*I,I]])}}}return t}function R_(){let t=n2(),e=zo.ri+.045,o=zo.n*zo.step,n=Math.ceil(o/(.8*Io/180)),r=.92,a=(c,f,l)=>[Ce.x+Math.cos(c)*f,l,Ce.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,v=Ir(f),h=Ir(l),u=Ua(f)+.06,d=Ua(l)+.06,p=s(v).map(A=>-A),m=s(h).map(A=>-A),g=f*e,x=l*e,b=t.v(a(v,e,u),p,je.RAILING,[g,0]),w=t.v(a(h,e,d),m,je.RAILING,[x,0]),_=t.v(a(h,e,d+r),m,je.RAILING,[x,r]),M=t.v(a(v,e,u+r),p,je.RAILING,[g,r]);t.idx.push(b,w,_,b,_,M)}((c,f,l,v)=>{let u=p=>{let m=Ir(p),g=Ua(p)+.06+f,x=a(m,e+c,g),b=s(m),w=[];for(let _=0;_<8;_++){let M=_/8*2*Io,A=[b[0]*Math.cos(M),Math.sin(M),b[2]*Math.cos(M)];w.push([[x[0]+A[0]*l,x[1]+A[1]*l,x[2]+A[2]*l],A])}return w},d=u(0);for(let p=1;p<=n;p++){let m=u(p/n*o);for(let g=0;g<8;g++){let x=(g+1)%8,b=t.v(d[g][0],d[g][1],v),w=t.v(m[g][0],m[g][1],v),_=t.v(m[x][0],m[x][1],v),M=t.v(d[x][0],d[x][1],v);t.idx.push(b,w,_,b,_,M)}d=m}})(0,r+.02,.028,je.IRON);for(let c of Ru){let f=Math.atan2(c[2]-Ce.z,c[0]-Ce.x),l=[Math.cos(f),0,Math.sin(f)],v=12;for(let p=0;p<v;p++){let m=p/v*2*Io,g=(p+1)/v*2*Io,x=(b,w,_)=>[c[0]+Math.cos(b)*w,_,c[2]+Math.sin(b)*w];t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,.13,c[1]-.05),x(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],je.IRON),t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,0,c[1]+.002),x(m,0,c[1]+.002),[0,1,0],je.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],u=[-l[2],0,l[0]],d=.018;t.quad([h[0]-u[0]*d,h[1],h[2]-u[2]*d],[h[0]+u[0]*d,h[1],h[2]+u[2]*d],[c[0]+u[0]*d,c[1]-.05,c[2]+u[2]*d],[c[0]-u[0]*d,c[1]-.05,c[2]-u[2]*d],[-l[0],.5,-l[2]],je.IRON)}{let c=Ir(0),f=a(c,e,0),l=10;for(let v=0;v<l;v++){let h=v/l*2*Io,u=(v+1)/l*2*Io,d=(p,m,g)=>[f[0]+Math.cos(p)*m,g,f[2]+Math.sin(p)*m];t.quad(d(h,.035,0),d(u,.035,0),d(u,.035,r+.1),d(h,.035,r+.1),[Math.cos((h+u)/2),0,Math.sin((h+u)/2)],je.IRON),t.quad(d(h,.06,r+.1),d(u,.06,r+.1),d(u,.03,r+.2),d(h,.03,r+.2),[Math.cos((h+u)/2)*.8,.6,Math.sin((h+u)/2)*.8],je.IRON)}}return t}function C_(){let t=[],e=[],o=[],n=[];for(let a of Cu){let[s,i,c,f,l,v]=a,h=t.length/3;for(let d=0;d<=7;d++){let p=d/7*2*Io+v,m=Math.cos(p),g=Math.sin(p);t.push(s+m*f,i,c+g*f,s+m*f,i+l,c+g*f),e.push(m,0,g,m,0,g),o.push(0,l,v,1,l,v)}for(let d=0;d<7;d++){let p=h+d*2;n.push(p,p+2,p+3,p,p+3,p+1)}let u=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,v);for(let d=0;d<7;d++){let p=d/7*2*Io+v;t.push(s+Math.cos(p)*f,i+l,c+Math.sin(p)*f),e.push(0,1,0),o.push(1,l,v)}for(let d=0;d<7;d++)n.push(u,u+1+d,u+1+(d+1)%7)}return{pos:t,nrm:e,info:o,idx:n}}function O_(){let t=[],e=[],o=[],n=[];for(let r of Cu){let[a,s,i,,c,f]=r,l=t.length/3;for(let v of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(v[0],v[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:n}}function P_(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),v=new Float32Array(o*3),h=new Float32Array(o*3),u=new Float32Array(o),d=Math.cos(cn.yaw),p=Math.sin(cn.yaw),m=cn.scale;for(let g=0;g<o;g++){let x=(r[0]+i[g*3]/65535*a[0])*m,b=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;v[g*3]=cn.x+d*x+p*w,v[g*3+1]=b,v[g*3+2]=cn.z-p*x+d*w;let _=f[g*3]/127,M=f[g*3+1]/127,A=f[g*3+2]/127;h[g*3]=d*_+p*A,h[g*3+1]=M,h[g*3+2]=-p*_+d*A,u[g]=l[g]}return{pos:v,nrm:h,mat:u,idx:new Uint32Array(c)}}function I_(){let t=[],e=(v,h)=>[Ce.x+Math.cos(v)*h,Ce.z+Math.sin(v)*h];t.push([[0,ie.z0],[Ba(ie.z0),ie.z0]]),t.push([[Ba(ie.z1),ie.z1],[0,ie.z1]]);let o=Math.asin((ie.z1-Ce.z)/Ze),n=72;for(let v=0;v<n;v++){let h=o+v/n*(2*Io-2*o),u=o+(v+1)/n*(2*Io-2*o);t.push([e(h,Ze-.25),e(u,Ze-.25)])}let r=ah[0]-.55+.35;t.push([[r,Sn.z0],[r,Sn.z1]]);let a=2.4/zo.k,s=12;for(let v=0;v<s;v++){let h=Ir(v/s*a),u=Ir((v+1)/s*a);t.push([e(h,zo.ri-.2),e(u,zo.ri-.2)])}t.push([e(Ir(0),zo.ri-.2),e(Ir(0),Ze)]),t.push([e(Ir(a),zo.ri-.2),e(Ir(a),Ze)]);let i=Math.cos(cn.yaw),c=Math.sin(cn.yaw),f=cn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([v,h])=>[cn.x+(i*v+c*h)*f,cn.z+(-c*v+i*h)*f]);for(let v=0;v<4;v++)t.push([l[v],l[(v+1)%4]]);return t}Xr.exports=t=>{let e=N_(),o=R_(),n=C_(),r=O_(),a=Ha(),s=`
	precision highp float;
	${S_.GLSL}
	uniform float time;
	${o2()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Hn(hr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Hn(Ce.x)}, ${Hn(Ce.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Hn((zo.ri+zo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Hn(Ce.x)}, ${Hn(Ce.z)});
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),v=t({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=P_(m);h=t({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let u=(()=>{let m=[],g=[],x=[],b=[],_=[Ce.x,hr-.3,Ce.z],M=[ml.stoolX,.02,ml.keyFront+.1],A=1.25,I=2.35;for(let R=0;R<=40;R++){let B=R/40*2*Io,D=Math.cos(B),Z=Math.sin(B);m.push(_[0]+D*A,_[1],_[2]+Z*A,M[0]+D*I,M[1],M[2]+Z*I),g.push(D,.08,Z,D,.08,Z),x.push(1,0)}for(let R=0;R<40;R++){let B=R*2;b.push(B,B+1,B+3,B,B+3,B+2)}return{pos:m,nrm:g,hh:x,idx:b}})(),d=t({vert:`
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
		}`,attributes:{position:u.pos,normal:u.nrm,hh:u.hh},elements:u.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function p(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(d(),v({halo:1}),v({halo:0}))}return p};Xr.exports.C=Ce;Xr.exports.R=Ze;Xr.exports.PASS=ie;Xr.exports.SURR=na;Xr.exports.OFF=ah;Xr.exports.BAY=Sn;Xr.exports.PATH=rh;Xr.exports.PIANO=cn;Xr.exports.PLAY=ml;Xr.exports.TOP=hr;Xr.exports.roomGLSL=o2;Xr.exports.segments=I_});var d2=bt((vA,u2)=>{"use strict";var $_=Ls(),{addFlutedColumn:r2,addStatue:F_,addPlant:q_}=Rm(),a2=qa(),D_=qi(),D0=mr(),G_=M0(),Xi=ja(),xo=14,An=D0.C.hallEnd+.35,Uo=8,Ro=.35,Ou=1.15,Pu=1.15,Iu=[18,29,40],H_=[[[0,0],[0,Xi.PASS.z0]],[[0,Xi.PASS.z1],[0,An]],[[xo,An],[xo,0]],[[0,0],[xo,0]],[[xo,An],[0,An]]],l2=[];for(let t of Iu)for(let e of[1.25,xo-1.25]){let o=Ou/2,n=Pu/2;l2.push([[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]])}var ih=12,f2=2.95,h2=.62,fh=f2+h2,ch=[{file:"venus.bin",x:1.85,z:An-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:xo-2.1,z:An-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:D0.NICHE_X[0],z:D0.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:D0.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:D0.NICHE_X[1],z:D0.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:D0.NICHE_PLINTH_TOP,mat:3}],B_={x0:Ro,x1:3.15,z0:3.6,z1:8.2,top:1},s2=.8,hh=1.17,gl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{gl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),gl.push({x:xo-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function $u(t,e,o,n){return[[[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]]]}var uh=[];for(let t of[-1,1])uh.push(...$u(xo/2+t*fh,ih,.85,.85));for(let t of ch.filter(e=>e.pedestal))uh.push(...$u(t.x,t.z,hh*1.1,hh*1.1));for(let t of gl)uh.push(...$u(t.x,t.z,.42,.42));var U_=H_.concat(l2,uh,Xi.segments());function j_(t){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of t){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)n(f,l,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let v=o.get(s+f+":"+(i+l));v&&c.push(...v)}return[...new Set(c)]}}}var lh=[],En={curMat:[0,0,0]};function Fu(t,e,o,n,r,a,s){let i=t.length/3;t.push(...o,...n,...r,...a),e.push(...s,...s,...s,...s);let c=En.curMat;return lh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Lo(t,e,o,n,r,a,s,i,c){let f=(l,v,h,u,d)=>{o.push(...Fu(t,e,l,v,h,u,d))};f([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),f([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),f([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),f([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),f([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),f([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function Vi(t,e,o,n,r){let a=En,s=a.vert(t,r),i=a.vert(e,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(s,i,c),a.tri(i,f,c)}function i2(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),v=Math.sin(c),h=Math.cos(f),u=Math.sin(f),d=[t+o*l,e+o*v],p=[t+o*h,e+o*u],m=[t+n*l,e+n*v],g=[t+n*h,e+n*u];Vi([d[0],d[1],r],[p[0],p[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Vi([d[0],d[1],a],[p[0],p[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+f)/2;Vi([d[0],d[1],r],[p[0],p[1],r],[d[0],d[1],a],[p[0],p[1],a],[-Math.cos(x),-Math.sin(x),0]),Vi([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function W_(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),v=e+o*Math.sin(c),h=t+o*Math.cos(f),u=e+o*Math.sin(f);Vi([l,v,r],[h,u,r],[l,n,r],[h,n,r],[0,0,-1]),Vi([l,v,a],[h,u,a],[l,n,a],[h,n,a],[0,0,1])}}function V_(t,e,o,n){let r=xo/2,a=f2,s=3,i=a+.42,c=i+.15,f=h2,l=fh,v=5.98,h=n-.45,u=n+.45,d=64,p=r2(En,r-l,n,0,v,f);r2(En,r+l,n,0,v,f),En.curMat=[0,0,0],i2(r,s,a,i,h,u,d),i2(r,s,i,c,h-.07,u+.07,d),W_(r,s,c,p+.05,h,u,d);for(let g of[-1,1]){let x=r+g*(c-.02),b=r+g*l;Lo(t,e,o,Math.min(x,b),s,h,Math.max(x,b),p+.05,u)}for(let g of[-1,1]){let x=r+g*(a-.05),b=r+g*(a+.85);Lo(t,e,o,Math.min(x,b),s-.16,n-.6,Math.max(x,b),s,n+.6)}let m=l+f*1.42+.45;Lo(t,e,o,r-m,p,n-.7,r+m,p+.44,n+.7),Lo(t,e,o,r-m+.12,p+.44,n-.62,r+m-.12,p+.7,n+.62),Lo(t,e,o,r-m-.1,p+.7,n-.84,r+m+.1,p+.84,n+.84),Lo(t,e,o,r-m-.22,p+.84,n-.96,r+m+.22,p+1,n+.96),Lo(t,e,o,r-.3,s+a-.1,n-.56,r+.3,p,n+.56)}function c2(t,e,o,n,r){Lo(t,e,o,n-.72,0,r-.72,n+.72,.2,r+.72),Lo(t,e,o,n-.58,.2,r-.58,n+.58,.4,r+.58),Lo(t,e,o,n-Ou/2,.4,r-Pu/2,n+Ou/2,Uo-1.35,r+Pu/2),Lo(t,e,o,n-.67,.42,r-.67,n+.67,.62,r+.67),Lo(t,e,o,n-.67,Uo-1.58,r-.67,n+.67,Uo-1.35,r+.67),Lo(t,e,o,n-.82,Uo-1.35,r-.82,n+.82,Uo-1.05,r+.82),Lo(t,e,o,n-.66,Uo-1.05,r-.66,n+.66,Uo-.78,r+.66),Lo(t,e,o,n-.92,Uo-.78,r-.92,n+.92,Uo-.55,r+.92),Lo(t,e,o,n-.78,Uo-.55,r-.78,n+.78,Uo-.3,r+.78),Lo(t,e,o,n-.92,Uo-.3,r-.92,n+.92,Uo-.1,r+.92)}function sh(t,e,o,n,r){r==="left"?(Lo(t,e,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Lo(t,e,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Lo(t,e,o,xo-.14,1,n-3.8/2,xo+.08,5.7,n+3.8/2),Lo(t,e,o,xo-.18,1+.18,n-3.8/2+.18,xo+.08+.04,5.7-.18,n+3.8/2-.18))}function X_(t,e,o,n){Lo(t,e,o,.65,Uo-.16,n-1.65,.65+.22,Uo,n+1.65),Lo(t,e,o,xo-.65-.22,Uo-.16,n-1.65,xo-.65,Uo,n+1.65),Lo(t,e,o,.65,Uo-.16,n-1.65,xo-.65,Uo,n-1.43),Lo(t,e,o,.65,Uo-.16,n+1.43,xo-.65,Uo,n+1.65),o.push(...Fu(t,e,[.65+.22,Uo-.16,n-1.43],[xo-.65-.22,Uo-.16,n-1.43],[.65+.22,Uo-.16,n+1.43],[xo-.65-.22,Uo-.16,n+1.43],[0,-1,0]))}u2.exports=function(){let t=[],e=[],o=[];lh=[],En=$_.createBuilder(t,e,o,lh),o.push(...Fu(t,e,[0,0,0],[xo,0,0],[0,0,An],[xo,0,An],[0,1,0])),D_.addSkylight(En,[0,0,0],An),En.curMat=[0,0,0];{let c=Xi.SURR;Lo(t,e,o,-Ro,0,0,Ro,Uo,c.z0),Lo(t,e,o,-Ro,0,c.z1,Ro,Uo,An),Lo(t,e,o,-Ro,c.top,c.z0,Ro,Uo,c.z1)}Lo(t,e,o,xo-Ro,0,D0.C.z1,xo+Ro,Uo,An-Ro),Lo(t,e,o,xo-Ro-.12,0,D0.C.z1+2*Ro,xo-Ro,.42,An-Ro),Lo(t,e,o,xo-Ro-.07,.42,D0.C.z1+2*Ro,xo-Ro,.5,An-Ro);for(let[c,f]of[[0,Xi.SURR.z0],[Xi.SURR.z1,An-Ro]])Lo(t,e,o,Ro,0,c,Ro+.12,.42,f),Lo(t,e,o,Ro,.42,c,Ro+.07,.5,f);Lo(t,e,o,Ro,0,An-Ro-.12,xo-Ro,.42,An-Ro),Lo(t,e,o,Ro,.42,An-Ro-.07,xo-Ro,.5,An-Ro),a2.addEntranceWall(En),a2.addFrames(En),En.curMat=[0,0,0],Lo(t,e,o,-Ro,0,An-Ro,xo+Ro,Uo,An+Ro),V_(t,e,o,ih);for(let c of Iu)c2(t,e,o,1.25,c),c2(t,e,o,xo-1.25,c);sh(t,e,o,22,"left"),sh(t,e,o,25,"right"),sh(t,e,o,33,"left"),sh(t,e,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)X_(t,e,o,c);D0.addWing(En),En.curMat=[0,0,0];for(let c of ch.filter(f=>f.pedestal))F_(En,c.x,c.z,hh,s2);{let c=B_;En.curMat=[0,0,0],En.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),En.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),En.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),En.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}G_.addAlcove(En);for(let c of gl)q_(En,c.x,c.z,c.seed,1,c.away);En.curMat=[0,0,0];let r=[[[xo,An-.35],[0,An-.35]],[[0,3],[0,10]],[[xo,15],[xo,22]],[[0,24],[0,31]],[[xo,33],[xo,40]],[[0,41],[0,46]]],a=j_(U_),s=(c,f)=>{let l=0,v=1/0;return r.forEach((h,u)=>{let d=(h[0][0]+h[1][0])/2,p=(h[0][1]+h[1][1])/2,m=Math.hypot(c-d,f-p);m<v&&(v=m,l=u)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:ch,occluders:[...Iu.flatMap(c=>[[1.25,c,.78],[xo-1.25,c,.78]]),[xo/2-fh,ih,.86],[xo/2+fh,ih,.86],...ch.filter(c=>c.pedestal).map(c=>[c.x,c.z,hh*1.12]),...gl.map(c=>[c.x,c.z,.34])],pedestalTop:s2,mat:lh,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var qu=bt((mA,p2)=>{"use strict";var{doorLightGLSL:Y_}=qa(),{skylightGLSL:K_}=qi(),{windowLightGLSL:Q_,C:s0}=mr(),{alcoveLightGLSL:Z_}=M0(),k0=t=>t.toFixed(4),J_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();p2.exports=(t,e,o,n)=>{let a=(e.occluders||[]).slice(0,24).map(([u,d,p])=>`ao = min(ao, contact(v_pos.xz, vec2(${u.toFixed(3)}, ${d.toFixed(3)}), ${p.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=u=>{let d=u&&u.tick!==void 0?u.tick:0;if(d!==i||c.length===0){i=d;let p=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-p[0],m.c[2]-p[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},v="",h="";for(let u=0;u<8;u++)l["lightC"+u]=d=>f(d)[u].c,l["lightD"+u]=d=>f(d)[u].d,v+="uniform vec4 lightC"+u+", lightD"+u+`;
`,h+="pic += pictureLight(lightC"+u+", lightD"+u+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Ha().lanternGLSL()}

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    ${v}

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

    ${Y_()}

    ${K_()}

    ${Q_()}

    ${Z_()}

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
        step(abs(v_pos.z - ${k0(s0.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${k0((s0.z0+s0.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${k0(s0.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${J_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${k0(s0.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${k0(s0.z0)} || v_pos.z > ${k0(s0.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${k0(s0.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${k0(s0.z0)}), ${k0(s0.z1)} - v_pos.z), ${k0(s0.x1)} - v_pos.x);
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
        if (v_pos.z < ${k0(s0.z0+.3)} && v_pos.x > ${k0(s0.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:n?t.prop("offset"):0,count:n?t.prop("count"):e.elements.length})}});var m2=bt((gA,v2)=>{"strict mode";var t6="https://api.artic.edu/api/v1/artworks/search",e6=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,o6="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",n6="&fields=image_id,title,artist_title",r6={low:400,mid:843,high:1686};v2.exports={fetchList:async function(t,e){let o=t6+o6+n6+`&from=${t}&size=${e}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(t,e){let o=e6(t,r6[e]),n=await fetch(o).then(r=>r.blob());return{title:t.title+" - "+t.artist_title,image:n}}}});var y2=bt((xA,x2)=>{"use strict";var a6=iu(),s6=b0(),i6=t=>"images/web/"+t.slug+(s6.isPhone?"-1024":"")+".webp";async function g2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}x2.exports={fetchList:async function(t,e){return a6.slice(t,t+e).map((o,n)=>({...o,image_id:t+n}))},fetchImage:async function(t){let e;try{e=await g2(i6(t))}catch(o){e=await g2("images/"+t.file)}return{title:t.title,image:e}}}});var w2=bt((yA,b2)=>{"strict mode";b2.exports={default:"local",artic:m2(),local:y2()}});var Gu=bt((bA,M2)=>{"strict mode";var Ps=document.createElement("canvas"),Du=Ps.width=Ps.height=1024,Wa=Ps.getContext("2d");Wa.mozImageSmoothingEnabled=!1;Wa.webkitImageSmoothingEnabled=!1;Wa.font="32px Verdana";Wa.textBaseline="bottom";Wa.fillStyle="#aaa";function _2(t,e,o,n){var r=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(r).width>o&&f>1;){f--,r=a="";for(var v=0;v<l;v++)v<f?(r+=c[v],v+1<f&&(r+=" ")):(a+=c[v],v+1<l&&(a+=" "))}return n.push(r),i=t.measureText(r).width,a&&(s=_2(t,a,o,n),s>i&&(i=s)),i}M2.exports={init(t,e,o=Du){var n=[];_2(Wa,e,Math.min(o*Du,Du),n),Wa.clearRect(0,0,Ps.width,Ps.height);for(var r=0;r<n.length;r++)Wa.fillText(n[r],0,Ps.height-(Math.max(n.length,3)-r)*32);return t({data:Ps,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var E2=bt((wA,S2)=>{"strict mode";var Hu=w2(),c6=new URLSearchParams(window.location.search).get("api"),k2=Hu[c6]||Hu[Hu.default],l6=Gu(),Bu={},Ki=[],f6=2;function h6(t){return(!navigator.connection||navigator.connection.downlink<f6)&&(t=t=="high"?"mid":"low"),t}var u6=b0(),Yi=document.createElement("canvas");Yi.width=Yi.height=u6.isPhone?1024:2048;var Wu=Yi.getContext("2d");Wu.imageSmoothingEnabled=!0;Wu.imageSmoothingQuality="high";var Uu=!1,d6=t=>[(Ki.pop()||t.texture)([[[200,200,200]]]),e=>(Ki.pop()||t.texture)([[[0,0,0,0]]]),1];async function ju(t,e,o){Uu===!1&&(Uu=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await k2.fetchImage(e,h6(o));r=a.title,n=await createImageBitmap(a.image),Wu.drawImage(n,0,0,Yi.width,Yi.height)}catch(a){return console.error(a),o=="high"?await ju(t,e,"low"):d6(t)}return[(Ki.pop()||t.texture)({data:Yi,min:"mipmap",mipmap:"nice",aniso:Uu,flipY:!0}),a=>l6.init(Ki.pop()||t.texture,r,a),n.width/n.height]}S2.exports={fetch:(t,e=10,o="low",n,r)=>{let a=Object.keys(Bu).length;k2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(Bu[i.image_id]){--e===0&&r();return}Bu[i.image_id]=i,ju(t,i,o).then(([c,f,l])=>{n({...i,tex:c,textGen:f,aspect:l}),--e===0&&r()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,ju(t,e,o).then(([n,r])=>{e.loading=!1,e.tex=n,e.text=r(e.width)}))},unload:t=>{t.tex&&(Ki.push(t.tex),t.tex=void 0),t.text&&(Ki.push(t.text),t.text=void 0)}}});var T2=bt((_A,A2)=>{A2.exports=p6;function p6(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var L2=bt((MA,z2)=>{z2.exports=v6;function v6(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var R2=bt((kA,N2)=>{N2.exports=m6;function m6(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Vu=bt((SA,C2)=>{C2.exports=g6;function g6(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var P2=bt((EA,O2)=>{O2.exports=x6;function x6(t,e){if(t===e){var o=e[1],n=e[2],r=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=r,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var $2=bt((AA,I2)=>{I2.exports=y6;function y6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],h=e[10],u=e[11],d=e[12],p=e[13],m=e[14],g=e[15],x=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,A=r*f-a*c,I=l*p-v*d,R=l*m-h*d,B=l*g-u*d,D=v*m-h*p,Z=v*g-u*p,P=h*g-u*m,j=x*P-b*Z+w*D+_*B-M*R+A*I;return j?(j=1/j,t[0]=(i*P-c*Z+f*D)*j,t[1]=(r*Z-n*P-a*D)*j,t[2]=(p*A-m*M+g*_)*j,t[3]=(h*M-v*A-u*_)*j,t[4]=(c*B-s*P-f*R)*j,t[5]=(o*P-r*B+a*R)*j,t[6]=(m*w-d*A-g*b)*j,t[7]=(l*A-h*w+u*b)*j,t[8]=(s*Z-i*B+f*I)*j,t[9]=(n*B-o*Z-a*I)*j,t[10]=(d*M-p*w+g*x)*j,t[11]=(v*w-l*M-u*x)*j,t[12]=(i*R-s*D-c*I)*j,t[13]=(o*D-n*R+r*I)*j,t[14]=(p*b-d*_-m*x)*j,t[15]=(l*_-v*b+h*x)*j,t):null}});var q2=bt((TA,F2)=>{F2.exports=b6;function b6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],h=e[10],u=e[11],d=e[12],p=e[13],m=e[14],g=e[15];return t[0]=i*(h*g-u*m)-v*(c*g-f*m)+p*(c*u-f*h),t[1]=-(n*(h*g-u*m)-v*(r*g-a*m)+p*(r*u-a*h)),t[2]=n*(c*g-f*m)-i*(r*g-a*m)+p*(r*f-a*c),t[3]=-(n*(c*u-f*h)-i*(r*u-a*h)+v*(r*f-a*c)),t[4]=-(s*(h*g-u*m)-l*(c*g-f*m)+d*(c*u-f*h)),t[5]=o*(h*g-u*m)-l*(r*g-a*m)+d*(r*u-a*h),t[6]=-(o*(c*g-f*m)-s*(r*g-a*m)+d*(r*f-a*c)),t[7]=o*(c*u-f*h)-s*(r*u-a*h)+l*(r*f-a*c),t[8]=s*(v*g-u*p)-l*(i*g-f*p)+d*(i*u-f*v),t[9]=-(o*(v*g-u*p)-l*(n*g-a*p)+d*(n*u-a*v)),t[10]=o*(i*g-f*p)-s*(n*g-a*p)+d*(n*f-a*i),t[11]=-(o*(i*u-f*v)-s*(n*u-a*v)+l*(n*f-a*i)),t[12]=-(s*(v*m-h*p)-l*(i*m-c*p)+d*(i*h-c*v)),t[13]=o*(v*m-h*p)-l*(n*m-r*p)+d*(n*h-r*v),t[14]=-(o*(i*m-c*p)-s*(n*m-r*p)+d*(n*c-r*i)),t[15]=o*(i*h-c*v)-s*(n*h-r*v)+l*(n*c-r*i),t}});var G2=bt((zA,D2)=>{D2.exports=w6;function w6(t){var e=t[0],o=t[1],n=t[2],r=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],v=t[10],h=t[11],u=t[12],d=t[13],p=t[14],m=t[15],g=e*s-o*a,x=e*i-n*a,b=e*c-r*a,w=o*i-n*s,_=o*c-r*s,M=n*c-r*i,A=f*d-l*u,I=f*p-v*u,R=f*m-h*u,B=l*p-v*d,D=l*m-h*d,Z=v*m-h*p;return g*Z-x*D+b*B+w*R-_*I+M*A}});var B2=bt((LA,H2)=>{H2.exports=_6;function _6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],v=e[8],h=e[9],u=e[10],d=e[11],p=e[12],m=e[13],g=e[14],x=e[15],b=o[0],w=o[1],_=o[2],M=o[3];return t[0]=b*n+w*i+_*v+M*p,t[1]=b*r+w*c+_*h+M*m,t[2]=b*a+w*f+_*u+M*g,t[3]=b*s+w*l+_*d+M*x,b=o[4],w=o[5],_=o[6],M=o[7],t[4]=b*n+w*i+_*v+M*p,t[5]=b*r+w*c+_*h+M*m,t[6]=b*a+w*f+_*u+M*g,t[7]=b*s+w*l+_*d+M*x,b=o[8],w=o[9],_=o[10],M=o[11],t[8]=b*n+w*i+_*v+M*p,t[9]=b*r+w*c+_*h+M*m,t[10]=b*a+w*f+_*u+M*g,t[11]=b*s+w*l+_*d+M*x,b=o[12],w=o[13],_=o[14],M=o[15],t[12]=b*n+w*i+_*v+M*p,t[13]=b*r+w*c+_*h+M*m,t[14]=b*a+w*f+_*u+M*g,t[15]=b*s+w*l+_*d+M*x,t}});var j2=bt((NA,U2)=>{U2.exports=M6;function M6(t,e,o){var n=o[0],r=o[1],a=o[2],s,i,c,f,l,v,h,u,d,p,m,g;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],v=e[5],h=e[6],u=e[7],d=e[8],p=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=v,t[6]=h,t[7]=u,t[8]=d,t[9]=p,t[10]=m,t[11]=g,t[12]=s*n+l*r+d*a+e[12],t[13]=i*n+v*r+p*a+e[13],t[14]=c*n+h*r+m*a+e[14],t[15]=f*n+u*r+g*a+e[15]),t}});var V2=bt((RA,W2)=>{W2.exports=k6;function k6(t,e,o){var n=o[0],r=o[1],a=o[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Y2=bt((CA,X2)=>{X2.exports=S6;function S6(t,e,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,f,l,v,h,u,d,p,m,g,x,b,w,_,M,A,I,R,B,D,Z,P,j,H;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,v=e[0],h=e[1],u=e[2],d=e[3],p=e[4],m=e[5],g=e[6],x=e[7],b=e[8],w=e[9],_=e[10],M=e[11],A=r*r*l+f,I=a*r*l+s*c,R=s*r*l-a*c,B=r*a*l-s*c,D=a*a*l+f,Z=s*a*l+r*c,P=r*s*l+a*c,j=a*s*l-r*c,H=s*s*l+f,t[0]=v*A+p*I+b*R,t[1]=h*A+m*I+w*R,t[2]=u*A+g*I+_*R,t[3]=d*A+x*I+M*R,t[4]=v*B+p*D+b*Z,t[5]=h*B+m*D+w*Z,t[6]=u*B+g*D+_*Z,t[7]=d*B+x*D+M*Z,t[8]=v*P+p*j+b*H,t[9]=h*P+m*j+w*H,t[10]=u*P+g*j+_*H,t[11]=d*P+x*j+M*H,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var Q2=bt((OA,K2)=>{K2.exports=E6;function E6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],v=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*r+f*n,t[5]=s*r+l*n,t[6]=i*r+v*n,t[7]=c*r+h*n,t[8]=f*r-a*n,t[9]=l*r-s*n,t[10]=v*r-i*n,t[11]=h*r-c*n,t}});var J2=bt((PA,Z2)=>{Z2.exports=A6;function A6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],v=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r-f*n,t[1]=s*r-l*n,t[2]=i*r-v*n,t[3]=c*r-h*n,t[8]=a*n+f*r,t[9]=s*n+l*r,t[10]=i*n+v*r,t[11]=c*n+h*r,t}});var eg=bt((IA,tg)=>{tg.exports=T6;function T6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],v=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r+f*n,t[1]=s*r+l*n,t[2]=i*r+v*n,t[3]=c*r+h*n,t[4]=f*r-a*n,t[5]=l*r-s*n,t[6]=v*r-i*n,t[7]=h*r-c*n,t}});var ng=bt(($A,og)=>{og.exports=z6;function z6(t,e,o){var n,r,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,n=Math.sin(e),r=Math.cos(e),a=1-r,t[0]=s*s*a+r,t[1]=i*s*a+c*n,t[2]=c*s*a-i*n,t[3]=0,t[4]=s*i*a-c*n,t[5]=i*i*a+r,t[6]=c*i*a+s*n,t[7]=0,t[8]=s*c*a+i*n,t[9]=i*c*a-s*n,t[10]=c*c*a+r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var ag=bt((FA,rg)=>{rg.exports=L6;function L6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=n+n,c=r+r,f=a+a,l=n*i,v=n*c,h=n*f,u=r*c,d=r*f,p=a*f,m=s*i,g=s*c,x=s*f;return t[0]=1-(u+p),t[1]=v+x,t[2]=h-g,t[3]=0,t[4]=v-x,t[5]=1-(l+p),t[6]=d+m,t[7]=0,t[8]=h+g,t[9]=d-m,t[10]=1-(l+u),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var ig=bt((qA,sg)=>{sg.exports=N6;function N6(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var lg=bt((DA,cg)=>{cg.exports=R6;function R6(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var hg=bt((GA,fg)=>{fg.exports=C6;function C6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var dg=bt((HA,ug)=>{ug.exports=O6;function O6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var vg=bt((BA,pg)=>{pg.exports=P6;function P6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var gg=bt((UA,mg)=>{mg.exports=I6;function I6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=o+o,i=n+n,c=r+r,f=o*s,l=n*s,v=n*i,h=r*s,u=r*i,d=r*c,p=a*s,m=a*i,g=a*c;return t[0]=1-v-d,t[1]=l+g,t[2]=h-m,t[3]=0,t[4]=l-g,t[5]=1-f-d,t[6]=u+p,t[7]=0,t[8]=h+m,t[9]=u-p,t[10]=1-f-v,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var yg=bt((jA,xg)=>{xg.exports=$6;function $6(t,e,o,n,r,a,s){var i=1/(o-e),c=1/(r-n),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(r+n)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var wg=bt((WA,bg)=>{bg.exports=F6;function F6(t,e,o,n,r){var a=1/Math.tan(e/2),s=1/(n-r);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*s,t[15]=0,t}});var Mg=bt((VA,_g)=>{_g.exports=q6;function q6(t,e,o,n){var r=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(r+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(r-a)*f*.5,t[10]=n/(o-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*o/(o-n),t[15]=0,t}});var Sg=bt((XA,kg)=>{kg.exports=D6;function D6(t,e,o,n,r,a,s){var i=1/(e-o),c=1/(n-r),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(r+n)*c,t[14]=(s+a)*f,t[15]=1,t}});var Ag=bt((YA,Eg)=>{var G6=Vu();Eg.exports=H6;function H6(t,e,o,n){var r,a,s,i,c,f,l,v,h,u,d=e[0],p=e[1],m=e[2],g=n[0],x=n[1],b=n[2],w=o[0],_=o[1],M=o[2];return Math.abs(d-w)<1e-6&&Math.abs(p-_)<1e-6&&Math.abs(m-M)<1e-6?G6(t):(l=d-w,v=p-_,h=m-M,u=1/Math.sqrt(l*l+v*v+h*h),l*=u,v*=u,h*=u,r=x*h-b*v,a=b*l-g*h,s=g*v-x*l,u=Math.sqrt(r*r+a*a+s*s),u?(u=1/u,r*=u,a*=u,s*=u):(r=0,a=0,s=0),i=v*s-h*a,c=h*r-l*s,f=l*a-v*r,u=Math.sqrt(i*i+c*c+f*f),u?(u=1/u,i*=u,c*=u,f*=u):(i=0,c=0,f=0),t[0]=r,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=v,t[7]=0,t[8]=s,t[9]=f,t[10]=h,t[11]=0,t[12]=-(r*d+a*p+s*m),t[13]=-(i*d+c*p+f*m),t[14]=-(l*d+v*p+h*m),t[15]=1,t)}});var zg=bt((KA,Tg)=>{Tg.exports=B6;function B6(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var Qi=bt((QA,Lg)=>{Lg.exports={create:T2(),clone:L2(),copy:R2(),identity:Vu(),transpose:P2(),invert:$2(),adjoint:q2(),determinant:G2(),multiply:B2(),translate:j2(),scale:V2(),rotate:Y2(),rotateX:Q2(),rotateY:J2(),rotateZ:eg(),fromRotation:ng(),fromRotationTranslation:ag(),fromScaling:ig(),fromTranslation:lg(),fromXRotation:hg(),fromYRotation:dg(),fromZRotation:vg(),fromQuat:gg(),frustum:yg(),perspective:wg(),perspectiveFromFieldOfView:Mg(),ortho:Sg(),lookAt:Ag(),str:zg()}});var Cg=bt((ZA,Rg)=>{"use strict";var Ng=E2(),xn=Qi(),Is=mr(),U6=3e3,dh="high",Xu,yl=.36,bl=13.64,Zi=Is.C.hallEnd-.01,wl=Is.C.z0+.01,j6=.356,W6=13.644,V6=Is.C.hallEnd-.006,X6=Is.C.z0+.006,Y6=.12,vh=4,Ji=t=>gr[t]&&gr[t].cy||vh,Yu=.26,K6=5.6,Q6=7,gr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Zi},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Is.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Is.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Is.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function Z6(t,e){let o=e&&e.maxH||K6,n=e&&e.maxW||Q6,r=Math.min(o,n/t);return{width:r*t,height:r}}function J6(t,e,o){let n=gr[o],r=[],a=Ji(o)-e/2;return n.side==="left"?(xn.fromTranslation(r,[yl,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[bl,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,wl]):(xn.fromTranslation(r,[7+t/2,a,Zi]),xn.rotateY(r,r,Math.PI)),xn.scale(r,r,[t,e,Y6]),r}function tM(t,e,o){let n=gr[o],r=[],a=Ji(o)-e/2;return n.side==="left"?(xn.fromTranslation(r,[yl,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[bl,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,wl]):(xn.fromTranslation(r,[7+t/2,a,Zi]),xn.rotateY(r,r,Math.PI)),r}function eM(t,e,o){let n=gr[o],r=[],a=Ji(o)-e/2-Yu-.38;return n.side==="left"?(xn.fromTranslation(r,[j6,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[W6,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,X6]):(xn.fromTranslation(r,[7+t/2,a,V6]),xn.rotateY(r,r,Math.PI)),xn.scale(r,r,[2,2,2]),r}function oM(t,e,o){let n=gr[o],r=Ji(o)-e/2-Yu-.38;return n.side==="left"?[yl+.55,r,n.z]:n.side==="right"?[bl-.55,r,n.z]:n.side==="corridor"?[n.x,r,wl+.55]:[7,r,Zi-.55]}var xl=.42;function ph(t,e,o,n,r,a){return[e[0]*n,e[1]*n,e[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function nM(t,e,o){let n=gr[o],r,a,s;n.side==="left"?(r=[yl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[bl,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,wl],a=[1,0,0],s=[0,0,1]):(r=[7,Zi],a=[1,0,0],s=[0,0,-1]);let i=Ji(o)+e/2+Yu+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(u,d)=>[r[0]+s[0]*u,d,r[1]+s[2]*u],l=[.075,.062,.05],v=[{fixmodel:ph(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:ph(f(xl/2,i),a,s,.02,.02,xl),fixcol:l,fixglow:0},{fixmodel:ph(f(xl,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:ph(f(xl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(xl,i-.02);return{fixtures:v,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}Rg.exports=(t,e)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!gr[s])return;let{width:i,height:c}=Z6(a.aspect,gr[s]),f=nM(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:gr[s].side,model:J6(i,c,s),framemodel:tM(i,c,s),framesize:[i,c],textmodel:eM(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:oM(i,c,s),paintingPosition:gr[s].side==="left"?[yl+.05,vh,gr[s].z]:gr[s].side==="right"?[bl-.05,vh,gr[s].z]:gr[s].side==="corridor"?[gr[s].x,Ji(s),wl+.05]:[7,vh,Zi-.05],textGen:null})};return Ng.fetch(t,gr.length,dh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Ng.load(t,a,dh)}),dh="low",Xu&&clearTimeout(Xu),Xu=setTimeout(()=>{dh="high"},U6)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var $g=bt((JA,Ig)=>{"use strict";var rM=Gu(),Og=b0(),Pg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function aM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Pg.forEach(([n,r])=>{t.forEach(([a,s])=>e.push([a,s,n,r]))});let o=[];for(let n=0;n<Pg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var sM=`#extension GL_OES_standard_derivatives : enable
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
}`,iM=`
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
}`;Ig.exports=t=>{let e=rM.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Ha().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Og.isPhone?1024:2048),detail:()=>Og.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=aM(),r=t({frag:sM,vert:iM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var Fs=bt((eT,G0)=>{"use strict";var Yo=Math.PI,Tt=t=>(+t).toFixed(4),Oe=[-90,0,0],qt=16,fo=22,uo=7.8,i0=11.6,ur=.55,c0=(i0-uo)/(qt/2),re={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};re.top=re.spring+re.hw;var $r={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Ho={rafter:fo/12,rafterW:.1,purlin:1,purlinW:.07},kl=[5.5,11,16.5],jt={x0:qt/2-1.9,x1:qt/2+1.9,z0:5.6,z1:16.6,curb:.5,top:.36},Bn={x:qt/2,z:14.9,plinth:.86,height:2.05,yaw:Yo+.35,file:"res/nymph.bin"},Ku=(()=>{let t=[-.68,.6,-.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Qu=t=>[t[0]+Oe[0],t[1]+Oe[1],t[2]+Oe[2]];function Hg(){let t=re.c.map(o=>`
		{
			float dz = q.z - ${Tt(o)};
			float inside = smoothstep(-b, b, ${Tt(re.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${Tt(re.sill)});
			float arch = smoothstep(-b, b, ${Tt(re.hw)} - length(vec2(dz, max(q.y - ${Tt(re.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=re.c.map(o=>`
		{
			float dz = q.z - ${Tt(o)};
			if (abs(dz) < ${Tt(re.hw+.2)}) {
				${$r.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${Tt($r.w*.5)} - b, ${Tt($r.w*.5)} + b, abs(dz - ${Tt(n)})));`).join(`
				`)}
				float ry = q.y - ${Tt(re.sill)};
				float tr = abs(ry - ${Tt($r.rowH)} * floor(ry / ${Tt($r.rowH)} + 0.5));
				if (q.y < ${Tt(re.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${Tt($r.w*.5)} - b, ${Tt($r.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${Tt(re.spring)}));
				if (q.y > ${Tt(re.spring)}) bar = max(bar, 1.0 - smoothstep(${Tt($r.w*.5)} - b, ${Tt($r.w*.5)} + b, abs(rr - ${Tt($r.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${Tt(re.hw)} - max(abs(dz), q.y > ${Tt(re.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${Tt(Ku[0])}, ${Tt(Ku[1])}, ${Tt(Ku[2])});

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
	// coordinates (centre 0, half size ${Tt(Ho.purlin/2)} x ${Tt(Ho.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${Tt(Ho.purlin/2)}, ${Tt(Ho.rafter/2)});
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
		vec3 p = pw - vec3(${Tt(Oe[0])}, ${Tt(Oe[1])}, ${Tt(Oe[2])});
		vec3 S = STUDIO_SUN;
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${Tt(uo)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${Tt(fo)}) return 0.0;
			vec3 h1 = p + S * ((${Tt(-ur)} - p.x) / S.x);
			vec3 hm = p + S * ((${Tt(-ur*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${Tt(uo)}) {
			if (he.z < 0.0 || he.z > ${Tt(fo)} || he.x < 0.0 || he.x > ${Tt(qt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${kl.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${Tt(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${rc.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${Tt(n)}, he.x, he.z, ${Tt(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${Tt(c0)} * p.x - p.y + ${Tt(uo)}) / (S.y - ${Tt(c0)} * S.x);
		float tr = (${Tt(c0)} * (${Tt(qt)} - p.x) - p.y + ${Tt(uo)}) / (S.y + ${Tt(c0)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${Tt(qt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${Tt(qt/2-.01)} && hr.x <= ${Tt(qt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${Tt(fo)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${Tt(Ho.rafter)} * floor(h.z / ${Tt(Ho.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${Tt(Ho.rafterW*.5)} - b, ${Tt(Ho.rafterW*.5)} + b, rz);
		float ux = h.x < ${Tt(qt/2)} ? h.x : ${Tt(qt)} - h.x;
		float rx = abs(ux - ${Tt(Ho.purlin)} * floor(ux / ${Tt(Ho.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${Tt(Ho.purlinW*.5)} - b, ${Tt(Ho.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${Tt(qt/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${Tt(Ho.purlin)} * floor(ux / ${Tt(Ho.purlin)}) - ${Tt(Ho.purlin/2)}, h.z - ${Tt(Ho.rafter)} * floor(h.z / ${Tt(Ho.rafter)}) - ${Tt(Ho.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${rc.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${Tt(n)}, h.x, h.z, ${Tt(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${Tt(qt/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function ac(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var ut={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27};function Bg(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,n,r)=>(t.pos.push(e[0]+Oe[0],e[1]+Oe[1],e[2]+Oe[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.float?t.anchor.push(t.float[0]+Oe[0],t.float[1]+Oe[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),v=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.box=(e,o,n,r,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,n],[e,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[e,n],[e,s],[r,s],[r,n]]),f.bottom||t.quad([e,o,n],[r,o,n],[r,o,s],[e,o,s],[0,-1,0],i,[[e,n],[r,n],[r,s],[e,s]]),f.x0||t.quad([e,o,n],[e,o,s],[e,a,s],[e,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),f.x1||t.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),f.z0||t.quad([r,o,n],[e,o,n],[e,a,n],[r,a,n],[0,0,-1],i,[[r,o],[e,o],[e,a],[r,a]]),f.z1||t.quad([e,o,s],[r,o,s],[r,a,s],[e,a,s],[0,0,1],i,[[e,o],[r,o],[r,a],[e,a]])},t.tbox=(e,o,n,r,a,s,i,c,f)=>{let l=Math.cos(n),v=Math.sin(n),h=Math.cos(f||0),u=Math.sin(f||0),d=(g,x,b)=>{let w=a+(x-a)*h-b*u*0,_=b+(x-a)*u,M=a+(x-a)*h;return[e+l*g+v*_,M,o-v*g+l*_]},p=g=>{let x=g[1]*h-g[2]*u,b=g[2]*h+g[1]*u;return[l*g[0]+v*b,x,-v*g[0]+l*b]},m=(g,x,b,w,_)=>t.quad(d(...g),d(...x),d(...b),d(...w),p(_),c,[[g[0]+g[2],g[1]],[x[0]+x[2],x[1]],[b[0]+b[2],b[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},t.beam=(e,o,n,r,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(d=>d/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],v=Math.hypot(...l);l=l.map(d=>d/v),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let h=(d,p,m)=>[d[0]+l[0]*n*p+f[0]*n*m,d[1]+l[1]*n*p+f[1]*n*m,d[2]+l[2]*n*p+f[2]*n*m],u=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(d=>-d)],[[-1,-1],[1,-1],f.map(d=>-d)]];for(let[d,p,m]of u)t.quad(h(e,...d),h(o,...d),h(o,...p),h(e,...p),m,r,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,n,r,a)=>{let s=a||32,i=n.map(([c,f],l)=>{let v=n[Math.max(0,l-1)],h=n[Math.min(n.length-1,l+1)],u=h[0]-v[0],d=h[1]-v[1],p=Math.hypot(u,d)||1,m=d/p,g=-u/p,x=[];for(let b=0;b<=s;b++){let w=b/s*2*Yo;x.push(t.v([e+Math.cos(w)*c,f,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[b/s*c*2*Yo,f]))}return x});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],v=i[c][f+1],h=i[c+1][f+1],u=i[c+1][f];t.idx.push(l,u,h,l,h,v)}},t}var nc=t=>Math.abs(t)>=re.hw?null:re.spring+Math.sqrt(re.hw*re.hw-t*t),rc=[["truss",kl[0],3.1],["truss",kl[1],5.4],["truss",kl[2],7.7],["rafter",Ho.rafter*2,1.7],["rafter",Ho.rafter*5,8.5],["rafter",Ho.rafter*8,13.6],["rafter",Ho.rafter*10,17],["ridge",qt/2,.9]],mh=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,cM=t=>t<qt/2?uo+c0*t:uo+c0*(qt-t);function gh(t,e,o){return t==="truss"?[o,uo-.12,e]:t==="rafter"?[o,cM(o)-.2,e]:[e,i0-.32,o]}var xh=t=>t==="ridge"?[.4,fo-.4]:[.35,qt-.35],Yr={w:1.72,spring:2.05,r:2.05,frame:.21,zl:fo-.05,zf:fo-.13};Yr.c=Yr.r-Yr.w/2;var S0=(t,e)=>{let o=Yr.r+(e||0),n=Math.abs(t)+Yr.c;return n>=o?Yr.spring:Yr.spring+Math.sqrt(o*o-n*n)};Yr.top=S0(0);function lM(t){let e=qt/2,{w:o,frame:n,zl:r,zf:a}=Yr,s=o/2,i=s+n,c=.02;for(let M=-i;M<i-1e-6;M+=c){let A=M,I=Math.min(i,M+c),R=(A+I)/2,B=S0(A,n),D=S0(I,n),Z=0,P=0;Math.abs(R)<s&&(Z=S0(A),P=S0(I)),Math.abs(R)>=s;{let j=Math.abs(R)<s?Z:0,H=Math.abs(R)<s?P:0;t.quad([e+I,H,a],[e+A,j,a],[e+A,B,a],[e+I,D,a],[0,0,-1],ut.DARKWOOD,[[I,H],[A,j],[A,B],[I,D]])}t.quad([e+A,B,a],[e+A,B,fo],[e+I,D,fo],[e+I,D,a],[0,1,0],ut.DARKWOOD,[[A,0],[A,1],[I,1],[I,0]]),Math.abs(R)<s&&t.quad([e+A,Z,a],[e+I,P,a],[e+I,P,r],[e+A,Z,r],[0,-1,0],ut.DARKWOOD,[[A,0],[I,0],[I,1],[A,1]])}for(let M of[-1,1])t.quad([e+M*i,0,a],[e+M*i,0,fo],[e+M*i,Yr.spring,fo],[e+M*i,Yr.spring,a],[M,0,0],ut.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+M*s,0,a],[e+M*s,Yr.spring,a],[e+M*s,Yr.spring,r],[e+M*s,0,r],[-M,0,0],ut.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+M*(s+n/2)-n/2-.04,0,a-.04,e+M*(s+n/2)+n/2+.04,.42,fo,ut.DARKWOOD);let f=40;for(let M=0;M<f;M++){let A=-s+2*s*M/f,I=-s+2*s*(M+1)/f;t.beam([e+A,S0(A)+.03,a-.015],[e+I,S0(I)+.03,a-.015],.018,ut.DARKWOOD)}for(let M of[-1,1])t.beam([e+M*(s+.03),.42,a-.015],[e+M*(s+.03),Yr.spring+.02,a-.015],.018,ut.DARKWOOD);for(let M=-s;M<s-1e-6;M+=c){let A=M,I=Math.min(s,M+c),R=S0(A),B=S0(I);t.quad([e+I,0,r],[e+A,0,r],[e+A,R,r],[e+I,B,r],[0,0,-1],ut.REDDOOR,[[I,0],[A,0],[A,R],[I,B]])}let l=s-.2,v=.3,h=2.12,u=r-.006,d=.05,p=(M,A,I,R)=>t.box(e+M,A,u-.018,e+I,R,u,ut.REDDOOR);p(-l,v,l,v+d),p(-l,h-d,l,h),p(-l,v,-l+d,h),p(l-d,v,l,h),t.box(e-l+.14,v+.14,u-.022,e+l-.14,h-.14,u,ut.REDDOOR);let m=2.36;p(-s+.08,h+.06,s-.08,h+.12);for(let M of[-1,1]){let I=s-.17;for(let R=.07;R<I-1e-6;R+=c){let B=R,D=Math.min(I,R+c),Z=S0(B,-.18),P=S0(D,-.18);if(Z<=m+.02&&P<=m+.02)continue;let j=J=>e+M*J,H=[[j(B),m,u+.004],[j(D),m,u+.004],[j(D),Math.max(m,P),u+.004],[j(B),Math.max(m,Z),u+.004]];M>0?t.quad(H[1],H[0],H[3],H[2],[0,0,-1],ut.REDPANEL,[[D,0],[B,0],[B,1],[D,1]]):t.quad(...H,[0,0,-1],ut.REDPANEL,[[B,0],[D,0],[D,1],[B,1]])}}t.beam([e,m-.02,u-.008],[e,S0(0,-.12),u-.008],.03,ut.REDDOOR),t.beam([e-s+.1,m-.01,u-.006],[e+s-.1,m-.01,u-.006],.014,ut.REDDOOR);let g=e-s+.15,x=1.06,b=u-.03;t.box(g-.034,x-.2,b-.008,g+.034,x+.17,b+.012,ut.BRASS);for(let[M,A]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(g,b-.002,[[0,M-A],[A,M-A*.4],[A,M+A*.4],[0,M+A]],ut.BRASS,12);for(let M=0;M<6;M++){let A=x-.17+M*.065;for(let I of[-1,1])t.beam([g+I*.034,A,b-.01],[g+I*.041,A+.03,b-.01],.006,ut.BRASS)}let w=b-.008,_=(M,A,I)=>{for(let R=0;R<I;R++){let B=Yo*R/I,D=Yo*(R+1)/I;for(let Z=0;Z<16;Z++){let P=2*Yo*Z/16,j=2*Yo*(Z+1)/16,H=(Dt,ne)=>[g+A*Math.sin(Dt)*Math.cos(ne),x+.03+A*Math.sin(Dt)*Math.sin(ne),M-A*Math.cos(Dt)],J=(Dt,ne)=>[Math.sin(Dt)*Math.cos(ne),Math.sin(Dt)*Math.sin(ne),-Math.cos(Dt)],V=t.v(H(B,P),J(B,P),ut.BRASS),st=t.v(H(B,j),J(B,j),ut.BRASS),et=t.v(H(D,j),J(D,j),ut.BRASS),mt=t.v(H(D,P),J(D,P),ut.BRASS);t.idx.push(V,st,et,V,et,mt)}}};t.beam([g,x+.03,w],[g,x+.03,w-.05],.011,ut.BRASS),_(w-.075,.034,10),t.box(g-.008,x-.1,b-.0125,g+.008,x-.06,b-.0085,ut.KEYHOLE)}function fM(t){let e=ac(77);for(let[o,n,r]of rc){let[a,s]=xh(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=gh(o,n,f),v=Math.sin(f*3.1+i*2+r)*.07,h=Math.cos(f*2.3+i+r)*.05,u=o==="ridge"?[l[0]+v,l[1]+h+.12,l[2]]:[l[0],l[1]+h+.12,l[2]+v];c&&(mh(f,r)||e()<.5)&&t.beam(c,u,.012+.008*e(),ut.WOOD),c=u}}}}function hM(t){let e=ac(4242),o=(r,a)=>!(r>jt.x0-jt.curb-.1&&r<jt.x1+jt.curb+.1&&a>jt.z0-jt.curb-.1&&a<jt.z1+jt.curb+.1)&&r>.2&&r<qt-.2&&a>.3&&a<fo-.4,n=(r,a,s,i)=>{let c=.022+e()*.022,f=e()*2*Yo,l=Math.cos(f),v=Math.sin(f),h=(d,p)=>[r+(d*l-p*v)*c,a+.004*d*p,s+(d*v+p*l)*c],u=i?2:0;t.quad(h(-1,-1),h(-1,1),h(1,1),h(1,-1),[0,1,0],ut.BRACT,[[u,0],[u,1],[u+1,1],[u+1,0]])};for(let[r,a,s]of rc){let[i,c]=xh(r);for(let f=i;f<=c;f+=.05){if(!mh(f,s)||e()>.55)continue;let l=gh(r,a,f),v=l[0]+(e()-.5)*1.8,h=l[2]+(e()-.5)*1.8;o(v,h)&&n(v,.004,h,e()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(e()*4),s,i;a<2?(s=a?jt.x1+jt.curb+.12+e()*e()*.9:jt.x0-jt.curb-.12-e()*e()*.9,i=jt.z0+e()*(jt.z1-jt.z0)):(i=a===2?jt.z0-jt.curb-.12-e()*e()*.9:jt.z1+jt.curb+.12+e()*e()*.9,s=jt.x0+e()*(jt.x1-jt.x0)),o(s,i)&&n(s,.004,i,e()<.18)}for(let r=0;r<70;r++){let a=jt.x0+.08+e()*(jt.x1-jt.x0-.16),s=jt.z0+.08+e()*(jt.z1-jt.z0-.16);Math.hypot(a-Bn.x,s-Bn.z)<.6||(t.float=[a,s,a*5.1+s*2.9],n(a,.016,s,e()<.2),t.float=null)}}function uM(t,e,o){let n=(r,a,s,i,c)=>{let f=t.pos.length/3,l=Math.cos(s),v=Math.sin(s),h=Math.cos(i),u=Math.sin(i),d=[l,0,-v],p=[v*u,h,l*u],m=[d[1]*p[2]-d[2]*p[1],d[2]*p[0]-d[0]*p[2],d[0]*p[1]-d[1]*p[0]],g=c?.95:o()*.8;for(let[x,b]of[[0,0],[1,0],[1,1],[0,1]]){let w=(x-.5)*a,_=(b-.5)*a;t.pos.push(r[0]+d[0]*w+p[0]*_+Oe[0],r[1]+d[1]*w+p[1]*_+Oe[1],r[2]+d[2]*w+p[2]*_+Oe[2]),t.nrm.push(...m),t.uv.push(x,b),t.shade.push(g),t.flower.push(1)}t.idx.push(f,f+1,f+2,f,f+2,f+3)};for(let[r,a,s]of rc){let[i,c]=xh(r);for(let f=i;f<=c;f+=.1){if(!mh(f,s))continue;let l=gh(r,a,f),v=()=>(o()-.5)*.7,h=4+Math.floor(o()*4);for(let u=0;u<h;u++){let d=r==="ridge"?[l[0]+v(),l[1]-o()*.25,l[2]+v()*.4]:[l[0]+v()*.4,l[1]-o()*.25,l[2]+v()];n(d,.42+o()*.4,o()*2*Yo,(o()-.5)*2.4,o()<.16)}for(let u=0;u<5;u++){let d=o()*2*Yo;e([l[0]+v()*.6,l[1]-o()*.2,l[2]+v()*.6],[Math.cos(d),-.3-o()*.5,Math.sin(d)],[-Math.sin(d),0,Math.cos(d)],.08+o()*.06,.1)}if(o()<.22){let u=.5+o()*2,d=[l[0],l[1],l[2]],p=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<u;m+=.13){d=[d[0]+p[0],d[1]-.13,d[2]+p[1]];let g=(.3+o()*.22)*(1-.4*m/u);if(n([d[0]+(o()-.5)*.08,d[1],d[2]+(o()-.5)*.08],g,o()*2*Yo,(o()-.5)*.8,o()<.15),o()<.6){let x=o()*2*Yo;e([d[0],d[1],d[2]],[Math.cos(x),-.6,Math.sin(x)],[-Math.sin(x),0,Math.cos(x)],.05+o()*.04,.1)}}}}}}var Fg=(()=>{let t=ac(9001),e=[],o=[];for(let[r,a,s]of rc){let[i,c]=xh(r);for(let f=i;f<=c;f+=.1)mh(f,s)&&o.push(gh(r,a,f))}let n=o.filter(r=>r[0]>jt.x0-.6&&r[0]<jt.x1+.6&&r[2]>jt.z0&&r[2]<jt.z1);for(let r=0;r<64;r++){let a=r%2===0&&n.length?n:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),Va=[jt.x0+.06,jt.z0+.06,jt.x1-.06,jt.z1-.06];function dM(t,e){let o=e+t.offset,n=Math.floor(o/t.period),r=o-n*t.period,a=.6+.4*Math.sin(n*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>Va[0]&&s<Va[2]&&i>Va[1]&&i<Va[3],f=c?.017:.006,l=(t.start[1]-f)/t.speed;return{ph:r,Tf:l,lx:s,lz:i,inPool:c}}var ec=[{at:[qt/2-.8,7.4],dir:.9,len:.52,kind:0,f:[.31,.17,.07],sip:21,first:9},{at:[qt/2+.9,11.6],dir:3.6,len:.46,kind:1,f:[.23,.13,.05],sip:29,first:17},{at:[qt/2-.3,12.8],dir:5.2,len:.41,kind:2,f:[.37,.11,.09],sip:25,first:4},{at:[qt/2+1.1,6.7],dir:2.2,len:.48,kind:1,f:[.27,.19,.06],sip:33,first:23},{at:[qt/2-1.2,10.4],dir:4.4,len:.38,kind:0,f:[.35,.15,.08],sip:27,first:13},{at:[qt/2+.4,9],dir:1.4,len:.55,kind:2,f:[.21,.12,.05],sip:31,first:28},{at:[qt/2-.9,13.3],dir:5.9,len:.36,kind:1,f:[.39,.21,.1],sip:23,first:6},{at:[qt/2+1.3,12.9],dir:3,len:.44,kind:0,f:[.29,.14,.07],sip:35,first:31}],pM=[jt.x0+.38,jt.z0+.38,jt.x1-.38,Bn.z-.95],_l=[jt.x0+.22,jt.z0+.22,jt.x1-.22,Bn.z-.75],Ml=12;function vM(){let t=ec.map((f,l)=>({k:f,i:l,x:f.at[0],z:f.at[1],th:f.dir,w:0,v:.12,y:-.15,ph:l*2.1,pitch:0,nextSip:f.first,sipT:-1,kappa:0,bite:0,notice:0})),e=[],o=[];for(let f=0;f<Ml;f++)o.push({x:0,z:0,alive:0,born:0,seed:f*.37});let n={on:!1,x:0,z:0,t0:0},r=0,a=f=>Math.atan2(Math.sin(f),Math.cos(f)),s=f=>{let l=Math.sin(f*12.9898+78.233)*43758.5453;return l-Math.floor(l)};return{fish:t,events:e,crumbs:o,feed:n,drop:(f,l)=>{f=Math.max(_l[0],Math.min(_l[2],f)),l=Math.max(_l[1],Math.min(_l[3],l)),Object.assign(n,{on:!0,x:f,z:l,t0:r}),o.forEach((v,h)=>{let u=s(r+h)*Math.PI*2,d=.03+.11*Math.sqrt(s(r*1.7+h*3.1));Object.assign(v,{x:f+Math.cos(u)*d,z:l+Math.sin(u)*d,alive:1,born:r+s(h*5.3+r)*.35})}),e.push([f,l,r,1]);for(let v of t)v.notice=r+.25+Math.hypot(v.x-f,v.z-l)*.35+s(v.i*9.1+r)*.6},step:f=>{r+=f;let l=r,v=0;for(let h of o)h.alive&&(l<h.born||(v++,h.x+=Math.sin(l*.7+h.seed*11)*.004*f,h.z+=Math.cos(l*.6+h.seed*7)*.004*f));if(n.on&&v===0&&l>n.t0+1||n.on&&l>n.t0+40){n.on=!1;for(let h of o)h.alive=0}for(let h of t){let{k:u}=h,d=n.on&&l>h.notice,p=.38*Math.sin(l*u.f[0]+u.dir*3)+.22*Math.sin(l*u.f[1]*2.3+1.7*u.kind)+.12*Math.sin(l*1.1+u.dir),m=.11+.08*Math.sin(l*u.f[2]+u.dir)+.05*Math.max(0,Math.sin(l*.19+u.kind*4)-.6)*4,g=-(.1+.09*(.5+.5*Math.sin(l*.043+u.dir*2))),x=1.3,b=1;if(d){let P=null,j=1e9;for(let mt of o){if(!mt.alive||l<mt.born)continue;let Dt=Math.hypot(mt.x-h.x,mt.z-h.z)+.08*Math.sin(h.i*3.3+mt.seed*9);Dt<j&&(j=Dt,P=mt)}let H=P?P.x:n.x,J=P?P.z:n.z,V=Math.hypot(H-h.x,J-h.z),st=Math.atan2(J-h.z,H-h.x),et=a(st-h.th);if(p=Math.max(-2.4,Math.min(2.4,et*2.6))+.25*Math.sin(l*2.3+h.i),x=2.6,m=(.13+.38*Math.min(1,V/1.2))*(.55+.45*Math.max(0,Math.cos(et))),g=g+(-.035-g)*(1-Math.min(1,Math.max(0,(V-.15)/.8))),b=.25,P&&l>h.bite&&h.y>-.08){let mt=h.x+Math.cos(h.th)*.01,Dt=h.z+Math.sin(h.th)*.01;Math.hypot(P.x-mt,P.z-Dt)<.075&&(P.alive=0,h.bite=l+1.4,e.push([P.x,P.z,l,.75]))}}let w=.55+h.v*(d?1.2:2.5),_=h.x+Math.cos(h.th)*w,M=h.z+Math.sin(h.th)*w,[A,I,R,B]=d?_l:pM,D=Math.max(A-_,_-R,I-M,M-B,0);if(D>0){let P=(A+R)/2+Math.sin(l*.07+u.kind)*.6,j=(I+B)/2+Math.sin(l*.05+u.kind*2)*2,H=Math.atan2(j-h.z,P-h.x);p+=Math.sign(a(H-h.th))*Math.min(D*3,1.3)*(d?.5:1)}for(let P of t){if(P===h)continue;let j=P.x-h.x,H=P.z-h.z,J=Math.hypot(j,H),V=d?.32:.6;if(J<V){let st=Math.sign(a(Math.atan2(H,j)-h.th))||1;p-=st*(V-J)*2*b*4*Math.max(0,Math.cos(Math.atan2(H,j)-h.th)+.3)/(d?1:4)}}if(p=Math.max(-x,Math.min(x,p)),h.w+=(p-h.w)*Math.min(f*(d?4:1.6),1),h.th+=h.w*f,!d&&h.sipT<0&&l>h.nextSip&&(h.sipT=0,h.nextSip=l+u.sip*(.7+.6*s(l+u.kind))),h.sipT>=0){let P=h.sipT;h.sipT+=f;let j=Math.min(1,P/1.4)*(1-Math.max(0,Math.min(1,(P-2.4)/1.4)));g=g+(-.04-g)*j,m*=1-.65*j,P<1.5&&h.sipT>=1.5&&e.push([h.x+Math.cos(h.th)*.02,h.z+Math.sin(h.th)*.02,l,.9]),P<2.2&&h.sipT>=2.2&&e.push([h.x,h.z,l,.55]),(h.sipT>3.8||d)&&(h.sipT=-1)}h.v+=(Math.max(m,.03)-h.v)*Math.min(f*(d?2.2:.9),1),h.x+=Math.cos(h.th)*h.v*f,h.z+=Math.sin(h.th)*h.v*f,h.x=Math.max(jt.x0+.12,Math.min(jt.x1-.12,h.x)),h.z=Math.max(jt.z0+.12,Math.min(Bn.z-.62,h.z));let Z=(g-h.y)*Math.min(f*(d?2.5:1.2),1);h.y+=Z,h.pitch+=(Math.max(-.5,Math.min(.5,Z/f/Math.max(h.v,.05)))-h.pitch)*Math.min(f*3,1),h.kappa=Math.max(-3.4,Math.min(3.4,h.w/Math.max(h.v,.09))),h.ph+=f*(3.2+32*h.v+2.5*Math.abs(h.w))}for(;e.length&&l-e[0][2]>10;)e.shift()},get t(){return r}}}function mM(){let t={loc:[],nrm:[],part:[],body:[],fins:[]},e=(h,u,d,p,m)=>(t.loc.push(h,u,d),t.nrm.push(p[0],p[1],p[2]),t.part.push(m),t.loc.length/3-1),o=.86,n=h=>{let u=Math.min(Math.max(h/o,0),1);return Math.pow(u,.42)*Math.pow(1-u*.93,.85)},r=0;for(let h=0;h<=100;h++)r=Math.max(r,n(h/100*o));let a=h=>.118*n(h)/r+.005,s=h=>.102*n(h)/r+.005,i=26,c=18,f=[];for(let h=0;h<=i;h++){let u=o*Math.pow(h/i,1.15),d=[];for(let p=0;p<c;p++){let m=p/c*Math.PI*2,g=Math.cos(m),x=Math.sin(m),b=a(u),w=s(u)*(x<0?.88:1),M=[-((a(u+.01)-a(Math.max(u-.01,0)))/.02)*.8,g/b,x/w],A=Math.hypot(M[0],M[1],M[2]);d.push(e(u,g*b,x*w,[M[0]/A,M[1]/A,M[2]/A],0))}f.push(d)}let l=e(-.006,0,0,[-1,0,0],0);for(let h=0;h<c;h++)t.body.push(l,f[0][(h+1)%c],f[0][h]);for(let h=0;h<i;h++)for(let u=0;u<c;u++){let d=f[h][u],p=f[h][(u+1)%c],m=f[h+1][(u+1)%c],g=f[h+1][u];t.body.push(d,p,m,d,m,g)}let v=(h,u,d,p)=>{let m=t.loc.length/3;for(let g=0;g<=u;g++)for(let x=0;x<=d;x++){let b=p(g/u,x/d);e(b[0],b[1],b[2],b[3],h)}for(let g=0;g<u;g++)for(let x=0;x<d;x++){let b=m+g*(d+1)+x,w=b+1,_=b+d+2,M=b+d+1;t.fins.push(b,w,_,b,_,M)}};v(1,8,10,(h,u)=>{let d=u*2-1;return[.8+h*(.25+.09*d*d),0,d*(.02+h*.13),[0,1,0]]}),v(2,10,3,(h,u)=>{let d=.3+h*.4,p=s(d);return[d+u*.05,0,p-.004+u*.055*Math.sin(Math.PI*Math.pow(h,.7))*(1.15-h*.6),[0,1,0]]});for(let h of[-1,1])v(3,4,4,(u,d)=>[.2+d*.07+u*.08,h*(a(.22)*.8+u*.12),-s(.22)*.55-u*.035,[0,0,1]]);for(let h of[-1,1])v(4,3,3,(u,d)=>[.5+d*.05+u*.06,h*(a(.5)*.45+u*.05),-s(.5)*.85-u*.03,[0,0,1]]);return t}function gM(){let t=Bg();{let e=jt.x0-jt.curb,o=jt.x1+jt.curb,n=jt.z0-jt.curb,r=jt.z1+jt.curb,a=[[0,0,qt,n],[0,r,qt,fo],[0,n,e,r],[o,n,qt,r]];for(let[s,i,c,f]of a)for(let v=s;v<c-1e-6;v+=1)for(let h=i;h<f-1e-6;h+=1){let u=v,d=Math.min(c,v+1),p=h,m=Math.min(f,h+1);t.quad([u,0,p],[u,0,m],[d,0,m],[d,0,p],[0,1,0],ut.FLOOR,[[u,p],[u,m],[d,m],[d,p]])}}for(let e of[0,1]){let o=e?qt:0,n=e?qt+ur:-ur,r=e?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<fo-1e-6;p+=a){let m=p,g=Math.min(fo,p+a),x=(m+g)/2,b=null;if(!e)for(let _ of re.c)nc(x-_)!==null&&(b=[re.sill,Math.min(nc(m-_)||re.spring,nc(g-_)||re.spring)]);let w=b?[[0,b[0]],[b[1],uo]]:[[0,uo]];for(let[_,M]of w)M<=_||(e?t.quad([o,_,g],[o,_,m],[o,M,m],[o,M,g],r,ut.PLASTER,[[g,_],[m,_],[m,M],[g,M]]):t.quad([o,_,m],[o,_,g],[o,M,g],[o,M,m],r,ut.PLASTER,[[m,_],[g,_],[g,M],[m,M]]))}if(!e)for(let p of re.c){for(let b of[-1,1]){let w=p+b*re.hw,_=[0,0,-b],M=[o,re.sill,w],A=[n,re.sill,w],I=[n,re.spring,w],R=[o,re.spring,w];b>0!=!!e?t.quad(M,A,I,R,_,ut.PLASTER,[[0,re.sill],[ur,re.sill],[ur,re.spring],[0,re.spring]]):t.quad(R,I,A,M,_,ut.PLASTER,[[0,re.spring],[ur,re.spring],[ur,re.sill],[0,re.sill]])}let m=28;for(let b=0;b<m;b++){let w=b/m*Yo,_=(b+1)/m*Yo,M=p+Math.cos(w)*re.hw,A=p+Math.cos(_)*re.hw,I=re.spring+Math.sin(w)*re.hw,R=re.spring+Math.sin(_)*re.hw,B=[0,-Math.sin((w+_)/2),-Math.cos((w+_)/2)];e?t.quad([o,I,M],[n,I,M],[n,R,A],[o,R,A],B,ut.PLASTER,[[0,w],[ur,w],[ur,_],[0,_]]):t.quad([o,R,A],[n,R,A],[n,I,M],[o,I,M],B,ut.PLASTER,[[0,_],[ur,_],[ur,w],[0,w]])}let g=e?qt-.08:-ur,x=e?qt+ur:.08;t.box(g,re.sill-.09,p-re.hw-.12,x,re.sill,p+re.hw+.12,ut.STONE)}let s=e?qt:0,i=e?-1:1,c=[.6,...re.c.slice(1).map((p,m)=>(p+re.c[m])/2),fo-.6];for(let p of c){let m=Math.min(s,s+i*.14),g=Math.max(s,s+i*.14);t.box(m,0,p-.34,g,uo-.7,p+.34,ut.STONE,{bottom:!0});let x=Math.min(s,s+i*.24),b=Math.max(s,s+i*.24);t.box(x,0,p-.44,b,.55,p+.44,ut.STONE,{bottom:!0}),t.box(x,uo-.95,p-.46,b,uo-.7,p+.46,ut.STONE)}let f=Math.min(s,s+i*.05),l=Math.max(s,s+i*.05);t.box(f,0,0,l,.22,fo,ut.STONE,{bottom:!0});let v=Math.min(s,s+i*.32),h=Math.max(s,s+i*.32);t.box(v,uo-.55,0,h,uo-.3,fo,ut.STONE);let u=Math.min(s,s+i*.42),d=Math.max(s,s+i*.42);t.box(u,uo-.3,0,d,uo-.12,fo,ut.STONE)}for(let[e,o]of[[0,1],[fo,-1]]){for(let c=0;c<32;c++){let f=c/32*qt,l=(c+1)/32*qt,v=u=>u<qt/2?uo+c0*u:uo+c0*(qt-u),h=o>0?[[l,0],[f,0],[f,v(f)],[l,v(l)]]:[[f,0],[l,0],[l,v(l)],[f,v(f)]];t.quad(...h.map(([u,d])=>[u,d,e]),[0,0,o],ut.PLASTER,h.map(([u,d])=>[u,d]))}let r=o>0?0:fo-.05,a=o>0?.05:fo;t.box(0,0,r,qt,.22,a,ut.STONE,{bottom:!0});let s=o>0?0:fo-.32,i=o>0?.32:fo;t.box(0,uo-.55,s,qt,uo-.3,i,ut.STONE)}{let o=qt/2-1.1,n=qt/2+1.1,r=3.9;t.box(o-.3,0,0,o,r+.3,.12,ut.STONE),t.box(n,0,0,n+.3,r+.3,.12,ut.STONE),t.box(o-.3,r,0,n+.3,r+.4,.14,ut.STONE);for(let[a,s]of[[o,qt/2-.01],[qt/2+.01,n]])t.box(a,0,.02,s,r,.02+.06,ut.WOOD),t.box(a+.12,.3,.02+.06,s-.12,1.7,.02+.09,ut.WOOD),t.box(a+.12,2,.02+.06,s-.12,r-.2,.02+.09,ut.WOOD)}lM(t);{let{x0:e,x1:o,z0:n,z1:r,curb:a,top:s}=jt,i=.06,c=.08;t.box(e-a,0,n-a,e,s-c,r+a,ut.WMARBLE,{bottom:!0}),t.box(o,0,n-a,o+a,s-c,r+a,ut.WMARBLE,{bottom:!0}),t.box(e,0,n-a,o,s-c,n,ut.WMARBLE,{bottom:!0}),t.box(e,0,r,o,s-c,r+a,ut.WMARBLE,{bottom:!0}),t.box(e-a-i,s-c,n-a-i,e+i*.5,s,r+a+i,ut.WMARBLE),t.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,ut.WMARBLE),t.box(e+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,ut.WMARBLE),t.box(e+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,ut.WMARBLE);let f=.5;for(let u=e;u<o-1e-6;u+=f)for(let d=n;d<r-1e-6;d+=f){let p=u,m=Math.min(o,u+f),g=d,x=Math.min(r,d+f);t.quad([p,0,g],[p,0,x],[m,0,x],[m,0,g],[0,1,0],ut.WATER,[[p,g],[p,x],[m,x],[m,g]])}let{x:l,z:v,plinth:h}=Bn;t.box(l-.42,0,v-.42,l+.42,h-.12,v+.42,ut.WMARBLE,{bottom:!0}),t.box(l-.5,h-.12,v-.5,l+.5,h,v+.5,ut.WMARBLE),t.box(l-.48,0,v-.48,l+.48,.12,v+.48,ut.WMARBLE,{bottom:!0})}return t}function xM(t){for(let o of[0]){let n=o?qt+ur*.5:-ur*.5,r=.05,a=$r.w*.5;for(let s of re.c){for(let i of $r.cols){let c=nc(i)-.01;t.box(n-r,re.sill,s+i-a,n+r,c,s+i+a,ut.STEEL)}for(let i=re.sill+$r.rowH;i<re.spring+.01;i+=$r.rowH)t.box(n-r,i-a,s-re.hw,n+r,i+a,s+re.hw,ut.STEEL);for(let[i,c]of[[re.hw-.03,.06],[$r.ring,a]])for(let l=0;l<24;l++){let v=l/24*Yo,h=(l+1)/24*Yo;t.beam([n,re.spring+Math.sin(v)*i,s+Math.cos(v)*i],[n,re.spring+Math.sin(h)*i,s+Math.cos(h)*i],c,ut.STEEL,[1,0,0])}for(let i of[-1,1])t.box(n-r,re.sill,s+i*(re.hw-.03)-.03,n+r,re.spring,s+i*(re.hw-.03)+.03,ut.STEEL);t.box(n-r,re.sill,s-re.hw,n+r,re.sill+.06,s+re.hw,ut.STEEL)}}let e=o=>o<qt/2?uo+c0*o:uo+c0*(qt-o);for(let o=0;o<=12;o++){let n=o*Ho.rafter;for(let[r,a]of[[-.3,qt/2],[qt/2,qt+.3]])t.beam([r,e(Math.max(0,Math.min(qt,r)))-.1,n],[a,e(a)-.1,n],.06,ut.STEEL)}for(let o=Ho.purlin;o<qt/2-.2;o+=Ho.purlin)for(let n of[o,qt-o])t.beam([n,e(n)-.06,-.2],[n,e(n)-.06,fo+.2],.035,ut.STEEL);t.beam([qt/2,i0-.14,-.2],[qt/2,i0-.14,fo+.2],.12,ut.STEEL);for(let o of[.05,qt-.05])t.beam([o,uo-.05,0],[o,uo-.05,fo],.1,ut.STEEL);for(let o of kl){t.box(-.05,uo-.13,o-.08,qt+.05,uo+.13,o+.08,ut.STEEL),t.beam([qt/2,uo,o],[qt/2,i0-.2,o],.07,ut.STEEL);for(let n of[-1,1])t.beam([qt/2+n*qt/4,uo,o],[qt/2,i0-.4,o],.055,ut.STEEL),t.beam([qt/2+n*qt/4,uo,o],[qt/2+n*qt/4,e(qt/2+n*qt/4)-.2,o],.045,ut.STEEL),t.beam([qt/2+n*(qt/2-.1),uo,o],[qt/2+n*qt/4,e(qt/2+n*qt/4)-.2,o],.045,ut.STEEL);for(let n of[-1,1])t.box(qt/2+n*qt/4-.12,uo-.18,o-.1,qt/2+n*qt/4+.12,uo+.18,o+.1,ut.STEEL)}}function yM(t){let e=ac(311),o=[],n=[[jt.x0+.9,6.6,.9,10],[jt.x1-.8,8.4,.85,9],[jt.x0+.8,10.6,.8,8],[jt.x1-.9,12.4,.9,10],[jt.x0+1,13.9,.65,6],[qt/2+.2,9.6,.5,4],[jt.x1-.7,15.9,.55,5]];for(let[a,s,i,c]of n)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let v=e()*2*Yo,h=i*Math.sqrt(e()),u=a+Math.cos(v)*h,d=s+Math.sin(v)*h,p=.15+e()*.17;if(!(u-p<jt.x0+.04||u+p>jt.x1-.04||d-p<jt.z0+.04||d+p>jt.z1-.04)&&!(Math.hypot(u-Bn.x,d-Bn.z)<.62+p)&&!o.some(m=>Math.hypot(m[0]-u,m[1]-d)<(m[2]+p)*.93)){o.push([u,d,p,e()*2*Yo,e()]);break}}for(let[a,s,i,c,f]of o){t.float=[a,s,f*7.3+i*13];let l=30,v=.34+f*.1,h=t.v([a,.012,s],[0,1,0],ut.PAD,[.5,f]),u=null;for(let d=0;d<=l;d++){let p=c+v/2+(2*Yo-v)*d/l,m=i*(1+.03*Math.sin(p*7+f*10)),g=t.v([a+Math.cos(p)*m,.012+.008*Math.sin(p*3+f*9),s+Math.sin(p)*m],[0,1,0],ut.PAD,[1,f]);u!==null&&t.idx.push(h,u,g),u=g}u=null;for(let d=0;d<=l;d++){let p=c+v/2+(2*Yo-v)*d/l,m=i*(1+.03*Math.sin(p*7+f*10)),g=[a+Math.cos(p)*m,.012,s+Math.sin(p)*m],x=[a+Math.cos(p)*(m+.012),.03,s+Math.sin(p)*(m+.012)],b=t.v(g,[Math.cos(p),.4,Math.sin(p)],ut.PAD,[1.2,f]),w=t.v(x,[Math.cos(p),.4,Math.sin(p)],ut.PAD,[1.2,f]);u&&t.idx.push(u[0],b,w,u[0],w,u[1]),u=[b,w]}}t.float=null;let r=[[jt.x0+.75,6.9,1],[jt.x1-.65,8.1,.85],[jt.x1-.95,12.6,1.1],[jt.x0+.95,10.3,.8],[jt.x1-.55,15.6,.9],[jt.x0+1.15,13.7,.75]];for(let[a,s,i]of r){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,v,h],u)=>{for(let d=0;d<l;d++){let p=2*Yo*d/l+u*.33,m=(90-(90-h)*i)*Yo/180,g=6,x=4,b=[];for(let w=0;w<=g;w++){let _=w/g,M=Math.sin(Yo*Math.pow(_,.8))*.42*v*c,A=[];for(let I=0;I<=x;I++){let R=I/x*2-1,B=R*M,D=Math.abs(R)*Math.abs(R)*.12*v*c,Z=_*v*c,P=Z*Math.cos(m),j=Z*Math.sin(m)+D,H=a+Math.cos(p)*P-Math.sin(p)*B,J=s+Math.sin(p)*P+Math.cos(p)*B;A.push(t.v([H,.03+j,J],[-Math.cos(p)*Math.sin(m)*.6,.8,-Math.sin(p)*Math.sin(m)*.6],ut.PETAL,[_,(R+1)/2]))}b.push(A)}for(let w=0;w<g;w++)for(let _=0;_<x;_++){let M=b[w][_],A=b[w][_+1],I=b[w+1][_+1],R=b[w+1][_];t.idx.push(M,A,I,M,I,R,M,I,A,M,R,I)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],ut.STAMEN,12)}t.float=null}function bM(t){let e=ac(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,ut.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,ut.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,ut.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,f=11.1+(e()-.5)*2.2,l=.035+e()*.04,v=.09+e()*.14;if(t.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+v*.9],[l*.9,.86+v],[0,.86+v]],i%3?ut.JAR:ut.POT,14),i%3===0)for(let h=0;h<7;h++){let u=e()*2*Yo,d=.28+e()*.12,p=.12+e()*.2;t.beam([c,.86+.03,f],[c+Math.cos(u)*p*d,.86+.03+d,f+Math.sin(u)*p*d],.0055,ut.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,ut.WOOD)}for(let o=0;o<5;o++){let n=.55+e()*.6,r=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+r*Math.sin(i)*0,r,a];t.quad([s+.18,0,a-n/2],[s+.18,0,a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a-n/2],[Math.cos(i),Math.sin(i),0],o%2?ut.WOOD:ut.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of Ug)t.beam([o[0],uo,o[2]],[o[0],o[1]+.05,o[2]],.008,ut.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],ut.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],ut.BULB,12)}var Ug=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],tT=[[jt.x0-1,jt.z0-1,1],[jt.x1+1,jt.z0-1,.95],[jt.x0-1,jt.z1+1,1.15],[jt.x1+1,jt.z1+1,1.1],[.9,1.3,1.25],[qt-.9,fo-1.2,1.3]],qg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function wM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=ac(1213),o=(n,r,a,s,i)=>{let c=qg[Math.floor(e()*qg.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,v=5,h=t.pos.length/3,u=.6+e()*.4;for(let d=0;d<=v;d++){let p=d/v,m=i*p*p*s,g=[n[0]+r[0]*p*s,n[1]+r[1]*p*s-m,n[2]+r[2]*p*s];for(let x of[-.5,.5]){t.pos.push(g[0]+a[0]*x*l+Oe[0],g[1]+a[1]*x*l-Math.abs(x)*.08*l+Oe[1],g[2]+a[2]*x*l+Oe[2]);let b=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...b)||1;t.nrm.push(b[0]/w,Math.abs(b[1]/w)+.2,b[2]/w),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*p),t.shade.push(u),t.flower.push(0)}}for(let d=0;d<v;d++){let p=h+d*2;t.idx.push(p,p+1,p+3,p,p+3,p+2)}};uM(t,o,e);for(let[n,r,a]of[[jt.x0-.3,jt.z0-.3,-1],[jt.x1+.3,jt.z1+.3,1],[jt.x0-.3,jt.z1+.2,-1]])for(let s=0;s<26;s++){let i=e()*2*Yo,c=n+(e()-.3)*.5*-a,f=r+(e()-.5)*.8,l=jt.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*e();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function _M(){let t=Bg();for(let o of[0]){let n=o?qt+ur*.5+.01:-ur*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of re.c)for(let i=a-re.hw;i<a+re.hw-1e-6;i+=.05){let c=i,f=Math.min(a+re.hw,i+.05),l=nc(c-a+1e-4)||re.spring,v=nc(f-a-1e-4)||re.spring;o?t.quad([n,re.sill,f],[n,re.sill,c],[n,l,c],[n,v,f],r,0,[[f,re.sill],[c,re.sill],[c,l],[f,v]]):t.quad([n,re.sill,c],[n,re.sill,f],[n,v,f],[n,l,c],r,0,[[c,re.sill],[f,re.sill],[f,v],[c,l]])}}let e=Math.hypot(c0,1);return t.quad([0,uo+.002,fo],[0,uo+.002,0],[qt/2,i0+.002,0],[qt/2,i0+.002,fo],[c0/e,-1/e,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,fo],[0,0],[qt/2,0],[qt/2,fo]]),t.quad([qt,uo+.002,0],[qt,uo+.002,fo],[qt/2,i0+.002,fo],[qt/2,i0+.002,0],[-c0/e,-1/e,0],1,[[qt,0],[qt,fo],[qt/2,fo],[qt/2,0]]),t}var MM=`
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
`,kM=Ug.map(t=>Qu([t[0],t[1]-.22,t[2]])),$s=`
	${MM}
	${Hg()}

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
		vec3 p = pw - vec3(${Tt(Oe[0])}, ${Tt(Oe[1])}, ${Tt(Oe[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${Tt(uo)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${Tt(qt)} - p.x), min(p.z, ${Tt(fo)} - p.z));
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
			${kM.map(t=>`
			{
				vec3 d = vec3(${Tt(t[0])}, ${Tt(t[1])}, ${Tt(t[2])}) - pw;
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
`;function SM(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:f}}function EM(t,e){let o=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),n={tex:o,ready:!1};return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((a,s)=>{let i=new Image;i.onload=()=>a(i),i.onerror=s,i.src=URL.createObjectURL(r)}))).then(r=>{o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear"}),n.ready=!0}).catch(r=>console.error(r)),n}var Sl=8,AM=.3,oc=`
	uniform float stime;
	uniform vec4 ripples[${Sl}];
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0025 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0015 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
		for (int i = 0; i < ${Sl}; i++) {
			vec4 r = ripples[i];
			if (r.w <= 0.0) continue;
			float d = length(xz - r.xy);
			float x = d - r.z * ${Tt(AM)};
			// a packet of a few rings, fading as it spreads
			float env = exp(-x * x * 30.0) * exp(-r.z * 0.38) * r.w / (1.0 + d * 3.0);
			h += 0.009 * sin(x * 42.0) * env;
		}
		return h;
	}
`,Dg=`
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
	${oc}
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
	}`,TM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	${oc}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${$s}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${Tt(Oe[0])}, ${Tt(Oe[1])}, ${Tt(Oe[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${ut.PETAL}.0)) N = -N;
		if (is(${ut.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${ut.FLOOR}.0) || is(${ut.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${ut.BRACT}.0)) {
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

		if (is(${ut.PLASTER}.0) || is(${ut.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${Tt(uo-2)}, ${Tt(uo)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${ut.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${ut.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${ut.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${ut.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${ut.FLOOR}.0)) {
			// the gallery's own floor: polished chequered marble, black and
			// dark cream, laid on the diagonal, with fine veins and hair-line
			// grout, the polish duller where people walk
			vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (p.xz - vec2(${Tt(qt/2)}, 0.0));
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
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${Tt(qt)} - p.x), min(p.z, ${Tt(fo)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${Tt(jt.x0-jt.curb)} - p.x, p.x - ${Tt(jt.x1+jt.curb)}), vec2(${Tt(jt.z0-jt.curb)} - p.z, p.z - ${Tt(jt.z1+jt.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${ut.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${ut.REDDOOR}.0) || is(${ut.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${ut.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${ut.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${ut.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${ut.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${ut.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${ut.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${ut.PAD}.0)) {
			float sh = v_uv.y;
			vec2 q = (p.xz) * 9.0;
			float veins = smoothstep(0.85, 1.0, abs(sin(atan(q.y, q.x) * 9.0)));
			base = mix(vec3(0.10, 0.20, 0.05), vec3(0.28, 0.36, 0.10), sh) * (0.85 + 0.25 * vnoise3(vec3(p.xz * 18.0, sh)));
			base = mix(base, vec3(0.45, 0.22, 0.10), smoothstep(1.1, 1.2, v_uv.x) * 0.7);
			base *= 1.0 - veins * 0.12;
			gloss = 0.55;
		} else if (is(${ut.PETAL}.0)) {
			base = mix(vec3(0.98, 0.90, 0.92), vec3(0.86, 0.36, 0.62), smoothstep(0.2, 1.0, v_uv.x));
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${ut.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${ut.MARBLE}.0)) {
			// warm white marble with faint grey veins
			float v = fbm3(p * 2.2);
			float vein = 1.0 - smoothstep(0.0, 0.035, abs(sin((p.y * 3.0 + p.x * 2.0 + v * 6.0))) - 0.0) ;
			base = mix(vec3(0.86, 0.83, 0.77), vec3(0.93, 0.91, 0.86), v) * (1.0 - 0.06 * vein);
			// a little grime in the folds, darker at the foot
			base *= mix(0.84, 1.0, smoothstep(${Tt(Bn.plinth)}, ${Tt(Bn.plinth+.5)}, p.y));
			sss = 0.18;
			gloss = 0.32;
		} else if (is(${ut.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${ut.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${ut.PAINT}.0)) {
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
		} else if (is(${ut.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${ut.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${ut.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${ut.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${ut.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${ut.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${Tt(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${ut.CLOTH}.0)) {
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
		if (is(${ut.POT}.0) || is(${ut.STEEL}.0) || is(${ut.SHADE}.0) || is(${ut.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${ut.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${ut.REDDOOR}.0) || is(${ut.REDPANEL}.0) || is(${ut.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${ut.FLOOR}.0)) {
			// as polished as the gallery's: a clear reflection even looking
			// down, a mirror at grazing angles, more on the black tiles
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
			refl *= mix(0.72, 1.0, checker);
			refl *= gloss;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.4, 0.0, 0.45));
		}
		if (is(${ut.WATER}.0)) {
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
	}`;G0.exports=function(t){let e=gM();xM(e),yM(e),bM(e),fM(e),hM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),r={t:0,ripples:[]};for(let H=0;H<Sl;H++)r.ripples.push([0,0,0,0]);let a=()=>{r.t=(performance.now()-n)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(r.t=window.__studioFreeze);let H=[];for(let V of Fg){let st=dM(V,r.t),et=st.ph-st.Tf;st.inPool&&et>=0&&et<9&&H.push([st.lx+Oe[0],st.lz+Oe[2],et,1])}let J=r.t-g.sim.t;for((J<0||J>120)&&(J=Math.min(Math.max(J,0),120));J>1e-6;){let V=Math.min(J,.05);g.sim.step(V),J-=V}for(let V of g.sim.events){let st=r.t-V[2];st>=0&&st<9&&H.push([V[0]+Oe[0],V[1]+Oe[2],st,V[3]])}H.sort((V,st)=>V[2]-st[2]);for(let V=0;V<Sl;V++)r.ripples[V]=H[V]||[0,0,0,0]},s={stime:()=>r.t};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=r);for(let H=0;H<Sl;H++)s["ripples["+H+"]"]=()=>r.ripples[H];let i=(H,J)=>t({vert:Dg,frag:TM,attributes:{position:H.pos,normal:H.nrm,kind:H.kind,uv:H.uv,anchor:H.anchor&&H.anchor.length?H.anchor:new Float32Array(H.pos.length/3*4)},elements:new Uint32Array(H.idx),count:J||H.idx.length,uniforms:s,cull:{enable:!1},blend:o}),c=i(e),f=null;fetch(Bn.file).then(H=>{if(!H.ok)throw new Error("Could not load "+Bn.file);return H.arrayBuffer()}).then(H=>{let J=SM(H),V={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},st=Bn.height,et=Math.cos(Bn.yaw),mt=Math.sin(Bn.yaw);for(let Dt=0;Dt<J.nV;Dt++){let ne=(J.mn[0]+J.pos[Dt*3]/65535*J.sz[0])*st,Se=(J.mn[1]+J.pos[Dt*3+1]/65535*J.sz[1])*st,Zt=(J.mn[2]+J.pos[Dt*3+2]/65535*J.sz[2])*st;V.pos.push(Bn.x+et*ne+mt*Zt+Oe[0],Bn.plinth+Se+Oe[1],Bn.z-mt*ne+et*Zt+Oe[2]);let Ue=J.nrm[Dt*3]/127,yo=J.nrm[Dt*3+1]/127,Bo=J.nrm[Dt*3+2]/127;V.nrm.push(et*Ue+mt*Bo,yo,-mt*Ue+et*Bo),V.kind.push(ut.MARBLE),V.uv.push(0,0)}for(let Dt=0;Dt<J.nI;Dt++)V.idx.push(J.idx[Dt]);f=i(V)}).catch(H=>console.error(H));let l=EM(t,"res/tree/leaves.webp"),v=wM(),h=t({vert:`
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
		${$s}
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
		}`,attributes:{position:v.pos,normal:v.nrm,uv:v.uv,shade:v.shade,flower:v.flower},elements:new Uint32Array(v.idx),uniforms:{tex:l.tex},cull:{enable:!1}}),u=(()=>{let H={corner:[],start:[],par:[],misc:[],idx:[]};return Fg.forEach((J,V)=>{for(let st of[[-1,-1],[1,-1],[1,1],[-1,1]])H.corner.push(st[0],st[1]),H.start.push(J.start[0]+Oe[0],J.start[1],J.start[2]+Oe[2]),H.par.push(J.period,J.offset,J.drift[0],J.drift[1]),H.misc.push(J.speed,J.seed,J.white);H.idx.push(V*4,V*4+1,V*4+2,V*4,V*4+2,V*4+3)}),H})(),d=t({vert:`
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
		${oc}
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
			vec2 lq = land - vec2(${Tt(Oe[0])}, ${Tt(Oe[2])});
			bool inPool = lq.x > ${Tt(Va[0])} && lq.x < ${Tt(Va[2])} && lq.y > ${Tt(Va[1])} && lq.y < ${Tt(Va[3])};
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
		${$s}
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
		}`,attributes:{corner:u.corner,start:u.start,par:u.par,misc:u.misc},elements:new Uint32Array(u.idx),uniforms:s,cull:{enable:!1}}),p=mM(),m=p.loc.length/3;{let H=p.loc,J=p.body;for(let V=0;V<J.length;V+=3){let st=[0,1,2].map(Zt=>[H[J[V+Zt]*3],H[J[V+Zt]*3+1],H[J[V+Zt]*3+2]]),et=st[1].map((Zt,Ue)=>Zt-st[0][Ue]),mt=st[2].map((Zt,Ue)=>Zt-st[0][Ue]),Dt=[et[1]*mt[2]-et[2]*mt[1],et[2]*mt[0]-et[0]*mt[2],et[0]*mt[1]-et[1]*mt[0]],ne=[0,1,2].map(Zt=>(st[0][Zt]+st[1][Zt]+st[2][Zt])/3),Se=[ne[0]<.01?-1:0,ne[1],ne[2]];if(Dt[0]*Se[0]+Dt[1]*Se[1]+Dt[2]*Se[2]>0){let Zt=J[V+1];J[V+1]=J[V+2],J[V+2]=Zt}}}let g={loc:[],nrm:[],km:[],body:[],fins:[],sim:vM()};ec.forEach((H,J)=>{for(let V=0;V<m;V++)g.loc.push(p.loc[V*3],p.loc[V*3+1],p.loc[V*3+2]),g.nrm.push(p.nrm[V*3],p.nrm[V*3+1],p.nrm[V*3+2]),g.km.push(H.len,H.kind,p.part[V],J);for(let V of p.fins)g.fins.push(V+J*m);for(let V of p.body)g.body.push(V+J*m)});let x={};for(let H of["loc","nrm","km"])x[H]=t.buffer(new Float32Array(g[H]));let b={fins:t.elements({data:new Uint32Array(g.fins),type:"uint32"}),body:t.elements({data:new Uint32Array(g.body),type:"uint32"})},w=Object.assign({},s);ec.forEach((H,J)=>{w["koiA["+J+"]"]=()=>{let V=g.sim.fish[J];return[V.x+Oe[0],V.y,V.z+Oe[2],V.th]},w["koiB["+J+"]"]=()=>{let V=g.sim.fish[J];return[V.kappa,V.ph,V.v,V.pitch]}}),typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=g.sim);let _=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 koiA[${ec.length}], koiB[${ec.length}];
		attribute vec3 loc, nrm;
		attribute vec4 km;
		varying vec3 v_pos, v_nrm, v_eye, v_loc;
		varying float v_kind, v_part, v_depth, v_seed;
		${oc}
		void main() {
			float len = km.x, part = km.z;
			int fi = int(km.w + 0.5);
			vec4 A = koiA[0], B = koiB[0];
			for (int i = 1; i < ${ec.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
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
			float amp = (0.012 + 0.11 * u * u) * (0.35 + 0.5 * min(pace, 1.3) + 0.25 * min(abs(kap), 1.0));
			float sway = amp * sin(ph - 6.0 * u);
			float dsway = amp * cos(ph - 6.0 * u) * -6.0;
			vec3 L = loc;
			if (part > 2.5 && part < 3.5) {
				// the pectoral fins paddle slowly, and fold back when it hurries
				float root = clamp((abs(L.y) - 0.06) / 0.12, 0.0, 1.0);
				L.z += root * 0.05 * sin(ph * 0.45 + sign(L.y) * 0.9);
				L.y *= 1.0 - 0.35 * root * smoothstep(0.7, 1.5, pace);
				L.x += root * 0.05 * smoothstep(0.7, 1.5, pace);
			}
			if (part > 3.5) L.z += 0.012 * sin(ph * 0.6);
			vec3 q = P + Sd * (L.y + sway) * len + Up * L.z * len - F * (L.x - u) * len;
			vec3 n = normalize(F * (nrm.x - nrm.y * dsway) + Sd * nrm.y + Up * nrm.z);
			// seen through the moving surface, it wavers a little
			float h0 = poolHeight(q.xz);
			vec2 grad = vec2(poolHeight(q.xz + vec2(0.02, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.02)) - h0) / 0.02;
			q.xz -= grad * (-q.y) * 1.3;
			q.y = min(q.y, -0.006);
			v_pos = q; v_nrm = n; v_loc = vec3(u, L.y, L.z); v_kind = km.y; v_seed = km.w; v_part = part; v_depth = max(-q.y, 0.0);
			vec3 tr = view[3].xyz;
			vec3 eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			v_eye = eye;
			vec4 cq = proj * view * vec4(q, 1.0);
			// put it at the depth of the water where we see it through
			vec3 sp = eye + (q - eye) * (eye.y / max(eye.y - q.y, 1e-4));
			vec4 cs = proj * view * vec4(sp, 1.0);
			gl_Position = cq;
			gl_Position.z = (cs.z / cs.w - 3e-5) * cq.w;
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye, v_loc;
		varying float v_kind, v_part, v_depth, v_seed;
		${oc}
		${$s}
		float kh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
		float kn(vec2 p) {
			vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
			return mix(mix(kh(i), kh(i + vec2(1.0, 0.0)), f.x), mix(kh(i + vec2(0.0, 1.0)), kh(i + vec2(1.0, 1.0)), f.x), f.y);
		}
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
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			bool fin = v_part > 0.5;
			if (fin && dot(N, V) < 0.0) N = -N;
			float u = v_loc.x, lat = v_loc.y, up = v_loc.z;
			// the pattern, fixed to the fish
			vec3 orange = vec3(0.95, 0.36, 0.035), gold = vec3(0.98, 0.58, 0.10), white = vec3(0.86, 0.85, 0.80);
			float blot = kn(vec2(u * 7.0, lat * 9.0 + up * 6.0) + v_kind * 13.0 + v_seed * 7.31) * 0.65 + kn(vec2(u * 15.0, (lat + up) * 18.0)) * 0.35;
			vec3 base;
			float gloss = 0.5;
			if (v_kind < 0.5) {
				// yamabuki: metallic orange gold all over
				base = mix(orange, gold, 0.45 + 0.4 * blot);
				gloss = 0.85;
			} else if (v_kind < 1.5) {
				// kohaku: white, with deep orange-red patches over the back
				float red = smoothstep(0.50, 0.56, blot + 0.18 * smoothstep(-0.02, 0.05, up)) * smoothstep(0.03, 0.12, u) * (1.0 - smoothstep(0.78, 0.86, u));
				base = mix(white, vec3(0.90, 0.20, 0.03), red);
			} else {
				// orange with a net of darker-edged scales
				base = mix(orange, vec3(0.99, 0.48, 0.07), blot * 0.5);
				vec2 sg = vec2(u * 34.0 + up * 17.0, u * 34.0 - up * 17.0 + lat * 20.0);
				float edge = smoothstep(0.32, 0.5, max(abs(fract(sg.x) - 0.5), abs(fract(sg.y) - 0.5)));
				base *= 1.0 - 0.28 * edge * smoothstep(-0.02, 0.04, up) * step(0.1, u);
			}
			// pale belly, and the scales catching the light along the flank
			base = mix(base, white * 0.95, smoothstep(0.0, -0.06, up) * 0.55 * (v_part < 0.5 ? 1.0 : 0.0));
			float scale = kh(floor(vec2(u * 42.0, (lat + up) * 50.0)));
			// the fins: paler, see-through, with fine rays
			float a = 1.0;
			if (fin) {
				float ray = v_part < 1.5 ? atan(up, u - 0.78) : (v_part < 2.5 ? u * 1.0 : length(vec2(lat, up)));
				float rays = 0.75 + 0.25 * sin(ray * (v_part < 2.5 ? 70.0 : 120.0));
				base = mix(base, gold * vec3(1.0, 0.9, 0.85), 0.5) * rays;
				if (v_kind > 0.5 && v_kind < 1.5) base = mix(base, white, 0.6);
				a = 0.62;
				// the forked edge of the tail
				if (v_part < 1.5 && u > 0.80 + (0.25 + 0.09 * pow(up / 0.15, 2.0)) * 0.97 - 0.06 * (1.0 - min(abs(up) / 0.1, 1.0))) discard;
			}
			// the eyes
			float ed = length(vec2((u - 0.085) * 1.0, up - 0.022));
			if (!fin && ed < 0.016 && abs(lat) > 0.025) { base = mix(vec3(0.02), vec3(0.75, 0.6, 0.3), smoothstep(0.016, 0.011, ed) * smoothstep(0.004, 0.008, ed) * 0.5); gloss = 0.95; }

			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x, 0.02, v_pos.z), N, V, gloss, spec, sv);
			// light comes down through the water: dimmer with depth, and
			// gathered into wandering bright threads
			float att = exp(-v_depth * 0.8);
			vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
			float ca = caustic(v_pos.xz, stime) * sv * max(N.y, 0.0);
			light = light * att + sunC * ca * 0.22 * att;
			vec3 col = base * light;
			float metal = v_kind < 0.5 ? 1.0 : 0.4;
			col += spec * (0.2 + 0.8 * metal) * (0.6 + 0.8 * scale) * att * (fin ? 0.3 : 1.0) * base * 1.6;
			// the water's green-brown takes the colour away with depth
			vec3 tr = exp(-v_depth * vec3(1.9, 1.15, 1.3));
			col = col * tr + vec3(0.010, 0.016, 0.012) * (1.0 - tr) * mix(1.0, 0.1, night);
			col = studioAir(col, v_pos, v_eye);
			// how much shows through: less at grazing angles, where the
			// surface mirrors the room, and less the deeper it swims
			float cosV = clamp(V.y, 0.0, 1.0);
			float Fr = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			a *= (1.0 - mix(0.04, 0.92, Fr)) * exp(-v_depth * 0.5);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,attributes:x,elements:t.prop("els"),uniforms:w,cull:{enable:t.prop("cull"),face:"front"},depth:{enable:!0,mask:!1,func:"less"},blend:o}),M=()=>{_({els:b.fins,cull:!1}),_({els:b.body,cull:!0})},A=(()=>{let H={cp:[],ci:[],idx:[]};for(let J=0;J<Ml;J++){let V=H.cp.length/3,st=5,et=7;for(let mt=0;mt<=st;mt++)for(let Dt=0;Dt<et;Dt++){let ne=mt/st*Math.PI,Se=Dt/et*Math.PI*2,Zt=1+.35*Math.sin(Se*3+J*1.7)*Math.sin(ne*2+J);H.cp.push(Math.sin(ne)*Math.cos(Se)*Zt,Math.cos(ne)*.6,Math.sin(ne)*Math.sin(Se)*Zt*(.8+.4*(J*.37%1))),H.ci.push(J)}for(let mt=0;mt<st;mt++)for(let Dt=0;Dt<et;Dt++){let ne=V+mt*et+Dt,Se=V+mt*et+(Dt+1)%et,Zt=V+(mt+1)*et+Dt,Ue=V+(mt+1)*et+(Dt+1)%et;H.idx.push(ne,Se,Ue,ne,Ue,Zt)}}return H})(),I=Object.assign({},s);for(let H=0;H<Ml;H++)I["crumbs["+H+"]"]=()=>{let J=g.sim.crumbs[H],V=g.sim.t,st=J.alive?Math.min(1,Math.max(0,(V-J.born)/.25)):0;return[J.x+Oe[0],J.z+Oe[2],st,J.seed]};let R=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Ml}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${oc}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Ml}; i++) if (i == k) c = crumbs[i];
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
		${$s}
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
		}`,attributes:{cp:A.cp,ci:A.ci},elements:new Uint32Array(A.idx),uniforms:I,cull:{enable:!1}});El=g.sim;let B=_M(),D=t({vert:Dg,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${$s}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${Tt(Oe[0])}, ${Tt(Oe[1])}, ${Tt(Oe[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${Tt(qt/2)} ? p.x : ${Tt(qt)} - p.x;
				vec2 pq = vec2(ux - ${Tt(Ho.purlin)} * floor(ux / ${Tt(Ho.purlin)}) - ${Tt(Ho.purlin/2)}, p.z - ${Tt(Ho.rafter)} * floor(p.z / ${Tt(Ho.rafter)}) - ${Tt(Ho.rafter/2)});
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
		}`,attributes:{position:B.pos,normal:B.nrm,kind:B.kind,uv:B.uv,anchor:B.anchor},uniforms:s,elements:new Uint32Array(B.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),Z=(()=>{let H={pos:[],idx:[]},J=300,V=24,st=12;for(let et=0;et<=st;et++){let mt=-.25*Yo+et/st*.75*Yo;for(let Dt=0;Dt<=V;Dt++){let ne=Dt/V*2*Yo;H.pos.push(Oe[0]+qt/2+J*Math.cos(mt)*Math.cos(ne),J*Math.sin(mt),Oe[2]+fo/2+J*Math.cos(mt)*Math.sin(ne))}}for(let et=0;et<st;et++)for(let mt=0;mt<V;mt++){let Dt=et*(V+1)+mt,ne=Dt+1,Se=Dt+V+2,Zt=Dt+V+1;H.idx.push(Dt,ne,Se,Dt,Se,Zt)}return H})(),P=t({vert:`
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
		${$s}
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
		void main() {`),attributes:{position:Z.pos},elements:new Uint32Array(Z.idx),cull:{enable:!1}});function j(H){H&&H.reflected||a(),P(),c(),H&&H.reflected||(M(),R()),f&&f(),h(),d(),H&&H.reflected||D()}return j};var El=null;function zM(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],n=t[0]+e[0]*o-Oe[0],r=t[2]+e[2]*o-Oe[2];return n<jt.x0||n>jt.x1||r<jt.z0||r>jt.z1||Math.abs(n-Bn.x)<.45&&Math.abs(r-Bn.z)<.45?null:[n+Oe[0],r+Oe[2]]}function LM(t,e){El&&El.drop(t-Oe[0],e-Oe[2])}function NM(){return!!(El&&El.feed.on)}var Gg=[{from:[12.6,1.65,.9],to:[11.4,1.75,2.6],at:[6.2,2.6,15.5],fov:60},{from:[8,1.45,1.4],to:[8,1.25,4.4],at:[8,1.7,16],fov:50},{from:[7.2,1.6,3.8],to:[8.3,1.55,5.2],at:[13,1.4,10.4],fov:52},{from:[7.1,3.9,6.4],to:[8.6,3.7,7.6],at:[8,-.2,10.6],fov:50,pond:!0},{from:[6.2,1.45,10.4],to:[7,1.75,11.6],at:[8,2.3,15.2],fov:44},{from:[2.6,1.5,2.6],to:[3.6,1.6,4.4],at:[7,6.8,12],fov:62}],tc=11;function RM(t){let e=Gg.length,o=Math.floor(t/tc)%e,n=t%tc/tc,r=n*n*(3-2*n),a=Gg[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*r),i=Math.max(0,1-Math.min(n*tc,(1-n)*tc)/.7);return{eye:Qu(s),target:Qu(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/tc)}}G0.exports.previewCam=RM;G0.exports.poolHit=zM;G0.exports.feedAt=LM;G0.exports.feeding=NM;G0.exports.sunGLSL=Hg;G0.exports.O=Oe;G0.exports.SIZE={W:qt,L:fo,H:uo,RIDGE:i0};G0.exports.BOX=[Oe[0]-.8,0,Oe[2]-.8,Oe[0]+qt+.8,i0+.5,Oe[2]+fo+.8];G0.exports.AIR_BOX=[Oe[0],0,Oe[2],Oe[0]+qt,i0,Oe[2]+fo]});var bh=bt((oT,Kg)=>{"use strict";var{A:dr}=M0(),{C:Cn}=mr(),{DOOR:sc}=qa(),nr=ja(),ic=Fs(),Vg=Cn.hallEnd+.35,Xg={arch:[13.6,0,dr.zc-dr.arch.r-.3,14.4,dr.arch.spring+dr.arch.r+.3,dr.zc+dr.arch.r+.3],mouth:[13.3,0,Cn.z0-.3,14.3,8.2,Cn.z1+.3],stair:[-.5,0,nr.SURR.z0-.2,.5,nr.SURR.top+.3,nr.SURR.z1+.2],door:[sc.x0-.4,0,-.5,sc.x1+.4,sc.top+.4,.5],windows:[15.6,.4,Cn.z1-.2,36.9,6.4,Cn.z1+.9],farDoor:[Cn.x1-.2,0,Cn.zc-sc.r-.4,Cn.x1+.9,sc.top+.4,Cn.zc+sc.r+.4]},Ma={court:[dr.x0-.4,0,dr.z0-.3,dr.x1+.3,dr.domeTop+.5,dr.z1+.3],stair:[nr.C.x-nr.R-2.6,0,nr.C.z-nr.R-1.5,.5,15.6,nr.C.z+nr.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Cn.z1,46,60,Cn.z1+110],florence:[Cn.x1,-1,Cn.zc-30,Cn.x1+80,60,Cn.zc+30],studio:ic.BOX},CM=[[0,0,0,14,0,Vg],[13.6,0,Cn.z0,Cn.x1+.4,0,Cn.z1],[dr.x0-.4,0,dr.z0,dr.x1,0,dr.z1],[nr.C.x-nr.R-2.6,0,nr.C.z-nr.R,.4,0,nr.C.z+nr.R],[ic.BOX[0],0,ic.BOX[2],ic.BOX[3],0,ic.BOX[5]]],OM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},zl=new Float64Array(24),H0=[7,2,2],Yg=0,ka="out",yh=!0;try{/[?&]nocull\b/.test(location.search)&&(yh=!1)}catch(t){}var Al={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Tl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},jg=!0;function PM(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),n=e(1),r=e(2),a=e(3),s=(i,c,f,l)=>{for(let v=0;v<4;v++)zl[i*4+v]=c[v]+f*l[v]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function Xa(t,e){if(!yh)return!0;let o=e?-t[4]:t[1],n=e?-t[1]:t[4];for(let r=0;r<6;r++){let a=zl[r*4],s=zl[r*4+1],i=zl[r*4+2],c=zl[r*4+3],f=a>0?t[3]:t[0],l=s>0?n:o,v=i>0?t[5]:t[2];if(a*f+s*l+i*v+c<0)return!1}return!0}var Zu=(t,e)=>H0[0]>t[0]-e&&H0[0]<t[3]+e&&H0[2]>t[2]-e&&H0[2]<t[5]+e;function IM(t){if(Zu(t,.6))return null;let e=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?t[3]:t[0])-H0[0],a=(n&2?t[5]:t[2])-H0[2],s=Math.atan2(r,a)-Yg;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function Wg(t,e,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=IM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of t){let i=Xg[s];if(!Zu(i,.6)&&(!Xa(i,o)||!a(i)))return!1}return Xa(e,o)&&a(e)}function $M(){let t=H0[0],e=H0[2],o=ic.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>nr.C.z-nr.R-1.5&&t>nr.C.x-nr.R-2.6?"stair":t>14.1&&e>dr.z0-.3&&e<dr.z1+.3&&t<dr.x1+.3?"court":t>13.9&&e>Cn.z0-.4&&e<Cn.z1+.1&&t<Cn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<Vg?"hall":"out"}var FM={PORTAL:Xg,ROOM:Ma,update(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[r*4+i];n[r*4+a]=s}PM(n),H0[0]=o[0],H0[1]=o[1],H0[2]=o[2],Yg=Math.atan2(-t[2],-t[10]),ka=$M();for(let r in Ma){if(r==="studio"||ka==="studio"){Al[r]=Tl[r]=r==="studio"&&ka==="studio";continue}if(!yh||ka==="out"||ka===r||Zu(Ma[r],.3))Al[r]=Xa(Ma[r],!1)||ka===r,Tl[r]=Xa(Ma[r],!0)||ka===r;else{let a=OM[ka][r];Al[r]=a?Wg(a,Ma[r],!1):Xa(Ma[r],!1),Tl[r]=a?Wg(a,Ma[r],!0):Xa(Ma[r],!0)}}jg=!yh||CM.some(r=>Xa(r,!1))},get zone(){return ka},room(t,e){return e?Tl[t]:Al[t]},box(t,e,o){return o&&!(e?Tl[o]:Al[o])?!1:Xa(t,e)},get floor(){return jg}};Kg.exports=FM});var Zg=bt((nT,Qg)=>{"use strict";var qM=qu(),DM=bh();function GM(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=[],s=[];for(let v=0;v<3;v++)a.push(e.getFloat32(12+v*4,!0)),s.push(e.getFloat32(24+v*4,!0));let i=36,c=new Uint16Array(t,i,n*3);i+=n*6;let f=new Uint16Array(t,i,r);i+=r*2;let l=new Int8Array(t,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:f,nrm:l}}Qg.exports=(t,e)=>{let o=[],n=[],r=[],a=[],s=null,i=e.statues.length,c=[],f=(v,h)=>{let u=o.length/3,d=h.height*.75,p=h.base!==void 0?h.base:e.pedestalTop;c.push({offset:a.length,count:v.nI,box:[h.x-d,p-.1,h.z-d,h.x+d,p+h.height+.2,h.z+d]});let m=h.height,g=Math.cos(h.yaw),x=Math.sin(h.yaw),b=h.base!==void 0?h.base:e.pedestalTop;for(let w=0;w<v.nV;w++){let _=(v.mn[0]+v.pos[w*3]/65535*v.sz[0])*m,M=(v.mn[1]+v.pos[w*3+1]/65535*v.sz[1])*m,A=(v.mn[2]+v.pos[w*3+2]/65535*v.sz[2])*m;o.push(h.x+g*_+x*A,b+M,h.z-x*_+g*A);let I=v.nrm[w*3]/127,R=v.nrm[w*3+1]/127,B=v.nrm[w*3+2]/127;n.push(g*I+x*B,R,-x*I+g*B),r.push(h.mat||1,0,0)}for(let w=0;w<v.nI;w++)a.push(u+v.idx[w])},l=()=>{a.length!==0&&(s=qM(t,{position:o,normal:n,mat:r,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(v=>{fetch("res/"+v.file).then(h=>{if(!h.ok)throw new Error("Could not load "+v.file);return h.arrayBuffer()}).then(h=>f(GM(h),v)).catch(h=>console.error(h)).then(()=>{--i===0&&l()})}),function(v){if(!s)return;let h=!!(v&&v.reflected),u=c.filter(d=>DM.box(d.box,h));u.length&&s(u)}}});var l3=bt((rT,td)=>{"use strict";var HM=Ls(),Un=1.29032,Ds=[9.2968,2,5.9],BM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],wh=2147.64,Jg=725,t3=1288,e3=1450,o3=2576,Kr=-5.197,Hs=3.865,Ya=10.135,Bs=-14.679,Ll=-30.229,Nl=7.232,n3=-45.713,cc=17.1*Un,Gs=16.6*Un,Rl=16.6*Un,r3=[6.9,17.1],_h=[2.95,16.6],UM=1.6,jM=0,WM=1,a3=2,Ju=3,s3=4,i3=5,VM=6;function XM(){let t=[],e=[],o=[],n=[],r=HM.createBuilder(t,e,o,n),a=(f,l,v,h,u,d,p=1,m=1)=>{let g=[];for(let x=0;x<=p;x++){let b=[];for(let w=0;w<=m;w++){let _=[f[0]+l[0]*x/p+v[0]*w/m,f[1]+l[1]*x/p+v[1]*w/m,f[2]+l[2]*x/p+v[2]*w/m],M=d(_);b.push(r.vert(_,h,[u,M[0],M[1]]))}g.push(b)}for(let x=0;x<p;x++)for(let b=0;b<m;b++)r.tri(g[x][b],g[x+1][b],g[x][b+1]),r.tri(g[x+1][b],g[x+1][b+1],g[x][b+1])},s=f=>l=>[(Ds[2]-l[2])/Un-f,l[1]/Un];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],jM,f=>[f[0]/Un,f[2]/Un],13,14),a([Hs,0,Kr],[0,0,Bs-Kr],[0,cc,0],[1,0,0],WM,s(8.6),6,6),a([-40,0,Kr],[Hs+40,0,0],[0,cc,0],[0,0,1],a3,f=>[(Hs-f[0])/Un,f[1]/Un],8,4),a([-40,0,-.36],[0,0,Kr+.36],[0,cc,0],[1,0,0],a3,f=>[-f[2]/Un,f[1]/Un]),a([Ya,0,-80],[0,0,Kr+80],[0,Gs,0],[-1,0,0],s3,s(8.6),12,6),a([Ya,0,Kr],[60,0,0],[0,Gs,0],[0,0,1],i3,f=>[(f[0]-Ya)/Un,f[1]/Un],8,4),a([70,0,Kr],[0,0,-.36-Kr],[0,Gs,0],[-1,0,0],i3,f=>[-f[2]/Un,f[1]/Un]);let i=f=>[(f[0]-Ds[0])/Un+4.18,f[1]/Un];a([-20,0,Ll],[Nl+20,0,0],[0,Rl,0],[0,0,1],Ju,i,8,6),a([Nl,0,Ll],[0,0,n3-Ll],[0,Rl,0],[1,0,0],Ju,s(28),4,4),a([Nl,0,n3],[Ya-Nl,0,0],[0,Gs,0],[0,0,1],s3,f=>[(f[0]-Ds[0])/Un,f[1]/Un],2,4),a([-20,0,Bs],[0,0,Ll-Bs],[0,Rl,0],[1,0,0],Ju,s(16),4,4);let c=(f,l,v,h)=>a(f,l,v,h,VM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:n}}function qs(t,e,o,n){let r=t.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var B0=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",YM=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Bs],[Hs,cc,Kr]],[[Ya,0,-80],[70,Gs,Kr]],[[-20,0,-80],[Nl,Rl,Ll]],[[-40,0,-80],[-20,Rl,Bs]]],KM=YM.map(t=>`if (hitBox(ro, rd, ${B0(t[0])}, ${B0(t[1])}, 1e4) ) return 0.0;`).join(`
		`),c3="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>BM[e][t].toFixed(6)).join(", ")).join(", ")+")",QM=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${B0([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${KM}
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
	vec3 ro = ${B0(Ds)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${B0([-40,0,Bs])}, ${B0([Hs-.02,cc,Kr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${B0([Ya+.02,0,-80])}, ${B0([70,Gs,Kr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${c3} * (p - ${B0(Ds)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Jg.toFixed(2)} + ${wh.toFixed(3)} * pc.x / pc.z) / ${e3.toFixed(1)},
		(${t3.toFixed(2)} - ${wh.toFixed(3)} * pc.y / pc.z) / ${o3.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${c3} * (p - ${B0(Ds)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Jg.toFixed(2)} + ${wh.toFixed(3)} * pc.x / pc.z) / ${e3.toFixed(1)},
		(${t3.toFixed(2)} - ${wh.toFixed(3)} * pc.y / pc.z) / ${o3.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${B0(Ds)}), n));
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
		base = texture2D(cobbleTex, fuv / ${UM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${r3[0].toFixed(2)}, 1.0 - fuv.y / ${r3[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${_h[0].toFixed(2)}, 1.0 - fuv.y / ${_h[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${_h[0].toFixed(2)}, 1.0 - fuv.y / ${_h[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Hs-.05).toFixed(3)} && v_pos.x < ${(Ya+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Bs.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Kr+4.5).toFixed(3)};
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
}`,ZM=`
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
}`,JM=er();td.exports=t=>{let e=XM(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=qs(t,"res/street/photo.jpg",o,[190,160,120]),s=qs(t,"res/street/photo_night.jpg",o,[12,14,22]),i=qs(t,"res/street/photo_mask.png",o,[255,255,255]),c=qs(t,"res/street/facade_pink.jpg",n,[200,150,135]),f=qs(t,"res/street/facade_yellow.jpg",n,[225,180,95]),l=qs(t,"res/street/facade_cream.jpg",n,[215,200,175]),v=qs(t,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),u=t({frag:QM,vert:ZM,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:v,photoNight:s,night:()=>JM.night,time:()=>(Date.now()-h)/1e3}});return function(){u()}};td.exports.layout={MOUTH_Z:Kr,PINK_X:Hs,RIGHT_X:Ya,PINK_H:cc,CREAM_H:Gs,S:Un}});var u3=bt((aT,h3)=>{"use strict";var t8=er().GLSL,{glassPanes:e8}=qa(),f3=mr();function o8(){let t=[],e=[],o=(n,r)=>{for(let a of n)t.push(a),e.push(r)};return o(e8(),[0,0,1]),o(f3.windowGlass(),[0,0,1]),o(f3.farDoorGlass(),[1,0,0]),{position:t,normal:e}}h3.exports=t=>{let e=o8(),o=t({frag:`
		precision highp float;
		${t8}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var z3=bt((sT,ad)=>{"use strict";var x3=er().GLSL,n8=Ls(),ed=b0(),{wallWithHoles:r8,C:Za}=mr(),he=.28,rt={westBack:14.4,westCol:15-he,eastCol:37.4+he,eastBack:41.8,south:Za.z1+.7,northCol:Za.z1+.7+16,northBack:Za.z1+.7+19,cx:(15+37.4)/2,cz:(Za.z1+.7+Za.z1+.7+16-he)/2},$o={x0:rt.westCol+he,x1:rt.eastCol-he,z0:rt.south,z1:rt.northCol-he},_r=3.3,Pl=.92,Ja=5.6,d3=6,E0=11.9,Qa=9.6,ho={x0:rt.cx-2.9,x1:rt.cx+2.9,top:14.4},zh=7,y3=4,nd=(rt.eastCol-rt.westCol)/zh,a8=(rt.northCol-rt.south)/y3,b3=3,$l=.26,Vs=1.4,js=1.1,kh=3,ra=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),Qt={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},aa=[],w3=(t,e,o)=>[rt.cx+t,e,rt.cz+o],Sh=w3(-5.9,0,3.4),ts=.85,Ka={c:[Sh[0],4.6*ts+.5,Sh[2]],r:[5*ts,3.6*ts,4.5*ts]},_3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[Sh[0]+t.d[0]*ts,t.d[1]*ts+.5,Sh[2]+t.d[2]*ts],r:t.r.map(e=>e*ts),n:t.n}));for(let t of _3)aa.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var s8=[3.6,6.3,9];for(let t of s8){let e=8.6+t%1.7*.6;aa.push({c:w3(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var i8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:rt.cx+t.d[0],z:rt.cz+t.d[1],bloom:t.bloom}));for(let t of i8)aa.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var rd=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[rt.cx+Math.cos(e)*2.3,rt.cz+Math.sin(e)*2.3]});for(let[t,e]of rd)aa.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var M3=[];{let t=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let v=l/f,h=o+(r-o)*v,u=n+(a-n)*v;s!==void 0&&Math.abs((r!==o?h:u)-s)<i||M3.push([h,u])}};t($o.x0+.45,$o.z0+1.2,$o.x0+.45,$o.z1-.45,rt.cz,1),t($o.x1-.45,$o.z0+1.2,$o.x1-.45,$o.z1-.45,rt.cz,1),t($o.x0+.45,$o.z1-.45,$o.x1-.45,$o.z1-.45,rt.cx,1.9)}var c8=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Eh=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function fc(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function jn(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function l8(t,e,o){return{vert:(n,r,a)=>t.vert(e(n),o(r),a),tri:t.tri}}var f8={north:[t=>[t[0],t[1],rt.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[rt.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[rt.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function k3(t,e,o,n,r){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?n:.02),c=t+(s+1)*e-(s===o-1?r:.02);a.push([i,c,t+(s+.5)*e])}return a}var h8=k3(rt.westCol,nd,zh,he+$l,he+$l),p3=k3(rt.south,a8,y3,.32,he+$l),lc=[rt.cx-32.35,rt.northCol-77],u8=Array.from({length:zh-1},(t,e)=>rt.westCol+(e+1)*nd),S3=t=>(t[1]-t[0])/2-.2,Il=t=>(t[0]+t[1])/2;function d8(t,e){let o=Il(t),n=S3(t);return{u0:t[0],u1:t[1],bottom:e?0:Pl,head:r=>{let a=Math.abs(r-o);return a<n?_r+Math.sqrt(n*n-a*a):_r},step:.05}}function p8(t,e,o){return{u0:t-o,u1:t+o,bot:n=>e-Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),head:n=>e+Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),step:.04,mat:[Qt.STONE,0,0]}}function v8(t,e,o,n){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>n,step:.5,mat:[Qt.STONE,0,0]}}function v3(t,e,o){let[n,r]=f8[e],a=l8(t,n,r),s=[];o.arches.forEach((l,v)=>s.push(d8(l,v===o.open)));let i=[];for(let l of o.bays||o.arches){let v=Il(l);o.oculi&&s.push(p8(v,6.85,.3)),i.push({c:v,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(v8(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);r8(a,{u0:o.u0,u1:o.u1,w0:-he,w1:he,top:o.top,holes:s,mat:[Qt.BRICK,0,0],revealMat:[Qt.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,v,h,u,d,p,m)=>{let g=n([l,v,h]),x=n([u,d,p]);jn(t,g[0],g[1],g[2],x[0],x[1],x[2],m)},f=(l,v,h,u,d,p)=>fc(a,l,v,h,u,d,[p,0,0]);for(let l of o.arches){let v=Il(l),h=S3(l),u=28;for(let d of[he,-he]){let p=d>0?1:-1,m=d+p*.025;for(let g=0;g<u;g++){let x=Math.PI*g/u,b=Math.PI*(g+1)/u,w=(D,Z)=>[v+Math.cos(D)*Z,_r+Math.sin(D)*Z],_=w(x,h),M=w(b,h),A=w(x,h+.26),I=w(b,h+.26);f([_[0],_[1],m],[M[0],M[1],m],[I[0],I[1],m],[A[0],A[1],m],[0,0,p],Qt.STONE);let R=Math.cos((x+b)/2),B=Math.sin((x+b)/2);f([A[0],A[1],d],[I[0],I[1],d],[I[0],I[1],m],[A[0],A[1],m],[R,B,0],Qt.STONE)}}}if(o.arches.forEach((l,v)=>{v!==o.open&&c(l[0]-.02,Pl,-he-.05,l[1]+.02,Pl+.09,he+.05,Qt.STONE)}),c(o.u0,d3,-he,o.u1,d3+.18,he+.09,Qt.STONE),c(o.u0,o.win[0]-.12,he-.01,o.u1,o.win[0],he+.06,Qt.STONE),o.cornice)for(let[l,v,h]of o.cornice)c(l,h-.22,he-.01,v,h,he+.16,Qt.STONE),c(l,h,he-.01,v,h+.16,he+.42,Qt.STONE);for(let{c:l,y0:v,y1:h,w:u,door:d}of i){let p=u/2;if(f([l-p-.01,v,.06],[l+p+.01,v,.06],[l+p+.01,h,.06],[l-p-.01,h,.06],[0,0,1],d?Qt.DARK:Qt.PANE),d){c(l-p-.16,0,he-.01,l-p,h+.16,he+.07,Qt.STONE),c(l+p,0,he-.01,l+p+.16,h+.16,he+.07,Qt.STONE),c(l-p-.16,h,he-.01,l+p+.16,h+.2,he+.09,Qt.STONE),c(l-p,0,.07,l+p,h-.02,.12,Qt.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,Qt.DARK);continue}for(let m of[-1,1]){let g=l+m*p;c(g+m*.02,v+.02,he+.02,g+m*(p+.025),h-.02,he+.06,Qt.SHUTTER)}c(l-p-.09,h,he-.01,l+p+.09,h+.16,he+.05,Qt.STONE),c(l-p-.09,v-.1,he-.01,l+p+.09,v,he+.09,Qt.STONE),c(l-.015,v,.06,l+.015,h,.09,Qt.SHUTTER),c(l-p,(v+h)/2-.015,.06,l+p,(v+h)/2+.015,.09,Qt.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let v=Il(l);f([v-.31,6.54,0],[v+.31,6.54,0],[v+.31,7.16,0],[v-.31,7.16,0],[0,0,1],Qt.DARK)}for(let l of o.cols){let v=Pl+.09,h=n([l,0,0]);jn(t,h[0]-.24,v,h[2]-.24,h[0]+.24,v+.12,h[2]+.24,Qt.MARBLE),t.lathe([[.23,v+.12,1],[.24,v+.17],[.2,v+.24],[.215,v+.28],[.17,v+.34,1],[.165,v+.6],[.155,_r-.5],[.15,_r-.38,1],[.175,_r-.34,1],[.17,_r-.3],[.2,_r-.22],[.27,_r-.15],[.29,_r-.12,1]],h[0],h[2],18,{mat:()=>[Qt.MARBLE,0,0]}),jn(t,h[0]-.29,_r-.12,h[2]-.29,h[0]+.29,_r+.01,h[2]+.29,Qt.STONE)}o.walk&&o.walk(t)}function m8(t){let e=[-1,0,1].map(r=>{let a=rt.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[Qt.STONE,0,0]}});v3(t,"north",{u0:rt.westCol-he,u1:rt.eastCol+he,top:r=>r>ho.x0+1e-6&&r<ho.x1-1e-6?ho.top:E0,cuts:[ho.x0,ho.x0+1e-5,ho.x1-1e-5,ho.x1],arches:h8,open:b3,cols:u8,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[rt.westCol-he-3.3,ho.x0,E0],[ho.x1,rt.eastCol+he+3.3,E0],[ho.x0-.2,ho.x1+.2,ho.top]],walk:r=>{jn(r,$o.x0,Ja,rt.northCol+he,$o.x1,Ja+.2,rt.northBack,Qt.PLASTER),jn(r,$o.x0,0,rt.northBack,$o.x1,Ja,rt.northBack+.3,Qt.PLASTER);for(let a of[rt.cx-7.2,rt.cx,rt.cx+7.2])fc(r,[a-.8,0,rt.northBack-.01],[a+.8,0,rt.northBack-.01],[a+.8,2.9,rt.northBack-.01],[a-.8,2.9,rt.northBack-.01],[0,0,-1],[Qt.DARK,0,0]),jn(r,a-.98,0,rt.northBack-.06,a+.98,3.12,rt.northBack,Qt.STONE),fc(r,[a-.8,0,rt.northBack-.07],[a+.8,0,rt.northBack-.07],[a+.8,2.9,rt.northBack-.07],[a-.8,2.9,rt.northBack-.07],[0,0,-1],[Qt.DARK,0,0])}}),fc(t,[ho.x0,11,rt.northCol+.2],[ho.x1,11,rt.northCol+.2],[ho.x1,13.6,rt.northCol+.2],[ho.x0,13.6,rt.northCol+.2],[0,0,-1],[Qt.DARK,0,0]),jn(t,ho.x0+.3,10.88,rt.northCol-he-.06,ho.x1-.3,11,rt.northCol-he+.1,Qt.STONE),jn(t,rt.westBack,Ja+.2,rt.northBack,rt.eastBack,E0,rt.northBack+3.4,Qt.BRICK),jn(t,rt.westBack,Qa,rt.northCol-he,rt.westCol-he,E0,rt.northCol+he,Qt.BRICK),jn(t,rt.eastCol+he,Qa,rt.northCol-he,rt.eastBack,E0,rt.northCol+he,Qt.BRICK),jn(t,rt.westBack,Ja+.2,rt.northCol+he+.12,rt.eastBack,E0,rt.northBack,Qt.BRICK),Cl(t,[rt.westBack-.5,E0+.16,rt.northCol-he-.42],[ho.x0-rt.westBack+.5,0,0],[0,2.6,4.4],Qt.ROOF),Cl(t,[ho.x1,E0+.16,rt.northCol-he-.42],[rt.eastBack+.5-ho.x1,0,0],[0,2.6,4.4],Qt.ROOF),Cl(t,[ho.x0-.3,ho.top+.16,rt.northCol-he-.42],[ho.x1-ho.x0+.6,0,0],[0,1.4,3],Qt.ROOF),m3(t,[ho.x0-.3,ho.top+.16,rt.northCol-he-.42],[ho.x0-.3,ho.top+1.56,rt.northCol-he+2.58],[ho.x0-.3,ho.top+.16,rt.northCol-he+2.58],[-1,0,0],Qt.BRICK),m3(t,[ho.x1+.3,ho.top+.16,rt.northCol-he-.42],[ho.x1+.3,ho.top+1.56,rt.northCol-he+2.58],[ho.x1+.3,ho.top+.16,rt.northCol-he+2.58],[1,0,0],Qt.BRICK),jn(t,ho.x0,E0,rt.northCol+he,ho.x1,ho.top,rt.northCol+2.6,Qt.BRICK);for(let[r,a]of[[rt.cx-9.8,rt.northBack+.6],[rt.cx+9.4,rt.northBack+.4],[rt.cx-4.6,rt.northBack+1]])jn(t,r-.4,12.5,a-.4,r+.4,15.4,a+.4,Qt.BRICK),jn(t,r-.52,15.4,a-.52,r+.52,15.62,a+.52,Qt.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];p3.forEach((v,h)=>{let u=Il(v);h===1?c.push({c:u,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:u,y0:1,y1:2.75,w:1.05}),c.push({c:u,y0:3.85,y1:5.45,w:1.05})}),v3(t,r,{u0:rt.south,u1:rt.northCol-he,top:()=>Qa,arches:[],bays:p3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[rt.south,rt.northCol-he,Qa]]}),jn(t,a,0,rt.south,s+i*(he+.12),Qa,rt.northBack+.3,Qt.BRICK);let f=s-i*he;jn(t,f,0,rt.south,f-i*.06,.55,rt.northCol-he,Qt.STONE);let l=s-i*(he+.42);Cl(t,[l,Qa+.16,rt.south],[0,0,rt.northCol-he-rt.south],[a-l+i*.4,1.9,0],Qt.ROOF)};o("west",rt.westBack,rt.westCol),o("east",rt.eastBack,rt.eastCol);let n=Za.x1+.7;jn(t,13.65,7.4,rt.south-.02,n,7.62,rt.south+.14,Qt.STONE),jn(t,13.65,10.4,rt.south-.02,n,10.6,rt.south+.38,Qt.STONE),Cl(t,[13.65,10.6,rt.south+.38],[n-13.65,0,0],[0,2.2,-5],Qt.ROOF)}function m3(t,e,o,n,r,a){let s=[a,0,0];t.tri(t.vert(e,r,s),t.vert(o,r,s),t.vert(n,r,s))}function Cl(t,e,o,n,r){let a=Eh([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+n[0]*l,e[1]+o[1]*f+n[1]*l,e[2]+o[2]*f+n[2]*l];fc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;fc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],Eh([-n[0],0,-n[2]]),[r,0,0])}function g8(t){let e=rt.westBack,o=rt.eastBack,n=rt.south,r=rt.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,n+(r-n)*f/s];i[c].push(t.vert(l,[0,1,0],[Qt.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var Ol=.46,Ws=.58,Us=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function x8(t,e,o){let n=js+o,r=(t>0?$o.x1-rt.cx:rt.cx-$o.x0)-Vs-o,a=js+o,s=(e>0?$o.z1-rt.cz:rt.cz-$o.z0)-Vs-o,i=kh+o,c=Math.sqrt(i*i-n*n),f=Math.sqrt(i*i-a*a),l=[[n,c],[n,s],[r,s],[r,a],[f,a]],v=Math.atan2(a,f),h=Math.atan2(c,n);for(let u=1;u<10;u++){let d=v+(h-v)*u/10;l.push([Math.cos(d)*i,Math.sin(d)*i])}return l.map(([u,d])=>[rt.cx+t*u,rt.cz+e*d])}function y8(t,e,o){let n=o[0]-e[0],r=o[1]-e[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,f=s,l=Ol*.5,v=-l,h=a+l,u=[],d=Math.max(1,Math.ceil((h-v)/1));for(let p=0;p<=d;p++){let m=v+(h-v)*p/d,g=[];for(let x=0;x<Us.length;x++){let[b,w]=Us[x],_=Math.min(Us.length-2,x),M=Us[Math.max(0,x-1)],A=Us[Math.min(Us.length-1,x+1)],I=(A[0]-M[0])*Ol,B=(A[1]-M[1])*Ws,D=-I,Z=Math.hypot(B,D)||1,P=[e[0]+s*m+c*b*Ol,w*Ws,e[1]+i*m+f*b*Ol],j=[c*(-B/Z),-D/Z,f*(-B/Z)];g.push(t.vert(P,j[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:j,[Qt.HEDGE,0,0]))}u.push(g)}for(let p=0;p<d;p++)for(let m=0;m<Us.length-1;m++)t.tri(u[p][m],u[p+1][m],u[p+1][m+1]),t.tri(u[p][m],u[p+1][m+1],u[p][m+1]);for(let[p,m]of[[0,-1],[d,1]]){let g=u[p],x=t.vert([e[0]+s*(p?h:v),Ws*.5,e[1]+i*(p?h:v)],[s*m,0,i*m],[Qt.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)t.tri(x,g[b],g[b+1])}}function b8(t){for(let e of[-1,1])for(let o of[-1,1]){let n=x8(e,o,.3);for(let r=0;r<n.length;r++)y8(t,n[r],n[(r+1)%n.length])}}function w8(t){let e=rt.cx,o=rt.cz,n=()=>[Qt.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:n}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:n}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[Qt.DARK,0,0]});let r={mat:()=>[Qt.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,r),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,r),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,r),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,r)}}function _8(t){for(let[e,o]of rd)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[Qt.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[Qt.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[Qt.BARK,0,0]})}function M8(t){let[e,,o]=Ka.c,n=A3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Qt.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,v=[e+a*l,i*l,o+s*l],h=n()*Math.PI*2;t.tube([v,[v[0]+Math.cos(h)*1.3,v[1]+.9,v[2]+Math.sin(h)*1.3],[v[0]+Math.cos(h)*2.3,v[1]+1.4+n(),v[2]+Math.sin(h)*2.3]],u=>.08*(1-u*.7),8,6,{mat:()=>[Qt.BARK,0,0]})}}for(let a of aa.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Qt.BARK,0,0]})}function k8(t){let e=()=>[Qt.FARBRICK,0,0],o=()=>[Qt.LEAD,0,0],n=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let v=[];for(let u=0;u<=12;u++){let d=u/12*Math.PI/2,p=Math.cos(d)*i,m=Math.sin(d)*f;l&&(p*=1-.18*Math.sin(d*2)),v.push([Math.max(p,i*.12),c+m])}t.lathe(v,a,s,28,{mat:o});let h=c+f;t.lathe([[i*.13,h-.2,1],[i*.13,h+3,1],[i*.18,h+3.2,1],[i*.02,h+6.4]],a,s,10,{mat:o})};jn(t,14,0,104,52,26,150,Qt.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{jn(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,Qt.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};r(20.5,109,36),r(46.5,112,38)}function S8(t){let o=[rt.cx,0,rt.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],v=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(v,[-l[0],-l[1],-l[2]],[Qt.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function E8(){let t=[],e=[],o=[],n=[],r=n8.createBuilder(t,e,o,n);return g8(r),m8(r),b8(r),w8(r),_8(r),M8(r),r.save(),r.translate(lc[0],0,lc[1]),k8(r),r.restore(),S8(r),{position:t,normal:e,elements:o,attr:n}}var E3=[[[13.65,0,Za.z0-.7],[Za.x1+.7,10.6,rt.south]],[[rt.westBack,Ja,rt.northCol-he],[rt.eastBack,E0,rt.northBack+3.4]],[[ho.x0,E0,rt.northCol-he],[ho.x1,ho.top,rt.northCol+2.6]],[[rt.westBack,0,rt.south],[rt.westCol+he,Qa,rt.northBack+.3]],[[rt.eastCol-he,0,rt.south],[rt.eastBack,Qa,rt.northBack+.3]],[[14+lc[0],0,104+lc[1]],[52+lc[0],26,150+lc[1]]]];function A8(t,e,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>n[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(n[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function Mh(t,e,o,n){let r=[(t[0]-o[0])/n[0],(t[1]-o[1])/n[1],(t[2]-o[2])/n[2]],a=[e[0]/n[0],e[1]/n[1],e[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),v=Math.max(0,(-i-l)/s),h=(-i+l)/s;return Math.max(0,h-v)}function od(t){for(let[e,o]of E3)if(A8(t,ra,e,o))return 0;return 1}function A3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function T8(){let t=[],e=[],o=[],n=[],r=[],a=[],s=[],i=A3(21),c=(d,p,m,g,x,b,w)=>{let _=t.length/3;for(let[M,A]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...d),e.push(M,A),o.push(p,m,g),n.push(...x),r.push(...b),a.push(...w);s.push(_,_+1,_+2,_,_+2,_+3)},f=(d,p)=>{let m=1;for(let g of aa){if(g===p||!g.shadow)continue;let x=Mh(d,ra,g.c,g.r);x>0&&(m*=Math.exp(-x*.9))}return m},l=aa.map(d=>({...d,pts:null}));for(let d of l)for(let p=0;p<d.n;p++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,x=Math.pow(i(),.35)*.98,b=[m[0]/g*x,m[1]/g*x,m[2]/g*x];if(d.spindle){let P=b[1],j=Math.sqrt(Math.max(.02,1-P*P))*(P>0?1-P*.55:1+P*.25),H=Math.hypot(b[0],b[2])||1,J=j*Math.min(1,H*1.4);b=[b[0]/H*J,P,b[2]/H*J]}d.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let w=[d.c[0]+b[0]*d.r[0],d.c[1]+b[1]*d.r[1],d.c[2]+b[2]*d.r[2]],_,M;if(d.magnolia){let P=0;for(let J of _3)P=Math.max(P,Mh(w,ra,J.c,J.r));_=Math.exp(-P*1.1);let j=1;for(let J of aa)if(!J.magnolia&&J.shadow){let V=Mh(w,ra,J.c,J.r);V>0&&(j*=Math.exp(-V*.9))}_*=od(w)*j;let H=c8(w,Ka.c);M=Eh([H[0]/Ka.r[0]+b[0]*.5,H[1]/Ka.r[1]+b[1]*.5,H[2]/Ka.r[2]+b[2]*.5]),x=Math.min(1,Math.hypot(H[0]/Ka.r[0],H[1]/Ka.r[1],H[2]/Ka.r[2])*.6+x*.4)}else{let P=Mh(w,ra,d.c,d.r);_=Math.exp(-P*(d.spindle?2.2:1.25)),_*=od(w)*f(w,aa[l.indexOf(d)]),M=Eh([b[0]/d.r[0],b[1]/d.r[1],b[2]/d.r[2]])}let A=Math.max(0,M[0]*ra[0]+M[1]*ra[1]+M[2]*ra[2]),I=.25+.75*Math.pow(x,1.5)*(.65+.35*(M[1]*.5+.5)),R=d.size[0]+(d.size[1]-d.size[0])*i(),B=.85+i()*.3,D=d.leaf.map(P=>P*B),Z=d.cell;d.cell===3&&i()<.35&&(Z=2),c(w,R,Z,i()*Math.PI*2,[_,I,.35+.65*A],D,d.bloom)}for(let[d,p]of M3){let m=i()<.5;for(let g=0;g<3;g++){let x=[d+(i()-.5)*.7,.28+i()*.22,p+(i()-.5)*.5],b=od(x)*f(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[b,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let v=s.length/6,h=Array.from({length:v},(d,p)=>p);for(let d=v-1;d>0;d--){let p=Math.floor(i()*(d+1));[h[d],h[p]]=[h[p],h[d]]}let u=[];for(let d of h)for(let p=0;p<6;p++)u.push(s[d*6+p]);return{center:t,corner:e,par:o,light:n,tint:r,bloom:a,elements:u}}var ce=t=>t.toFixed(4),Fl=t=>`vec3(${ce(t[0])}, ${ce(t[1])}, ${ce(t[2])})`,T3=`
const vec3 SUN = ${Fl(ra)};
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
`,z8=E3.map(([t,e])=>`if (hitBox(ro, SUN, ${Fl(t)}, ${Fl(e)})) return 0.0;`).join(`
	`),L8=aa.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Fl(t.c)}, ${Fl(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),N8=(t,e,o,n,r,a,s,i,c)=>`
	{
		float t = (${ce(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${ce(Ja)} && u > ${ce(o-he)} && u < ${ce(o+n*r+he)}) {
				float k = floor((u - ${ce(o)}) / ${ce(n)});
				float a = ${ce(o)} + k * ${ce(n)} + (k < 0.5 ? ${ce(a)} : 0.02);
				float b = ${ce(o)} + (k + 1.0) * ${ce(n)} - (k > ${ce(r-1.5)} ? ${ce(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${ce(i)}) < 0.5 ? 0.0 : ${ce(Pl+.09)};
				bool hole = (q.y > sill && q.y < ${ce(_r)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${ce(_r)} && d * d + (q.y - ${ce(_r)}) * (q.y - ${ce(_r)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Ah=js+.3,Th=js+.3,ql=kh+.3,g3=$o.x1-rt.cx-Vs-.3,R8=$o.z1-rt.cz-Vs-.3,C8=rt.cz-$o.z0-Vs-.3,O8=Math.sqrt(ql*ql-Ah*Ah),P8=Math.sqrt(ql*ql-Th*Th),I8=[[rt.cx,rt.cz,.86,1.18],[rt.cx,rt.cz,1.25,.3],...rd.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,n])=>`if (hitCyl(ro, vec2(${ce(t)}, ${ce(e)}), ${ce(o)}, ${ce(n)})) return 0.0;`).join(`
	`),$8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${ce(rt.cx)}, ${ce(rt.cz)}));
	float b1 = xz.y > ${ce(rt.cz)} ? ${ce(R8)} : ${ce(C8)};
	vec2 A = vec2(${ce(Ah)}, ${ce(O8)}), Bp = vec2(${ce(Ah)}, b1), C = vec2(${ce(g3)}, b1);
	vec2 D = vec2(${ce(g3)}, ${ce(Th)}), E = vec2(${ce(P8)}, ${ce(Th)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${ce(ql)}));
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
	${z8}
	${N8("z",rt.northCol,rt.westCol,nd,zh,he+$l,he+$l,b3,"ro.z > "+ce(rt.northCol-he))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${I8}
	if (ro.y < ${ce(Ws)} && ro.x > ${ce($o.x0)} && ro.x < ${ce($o.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${ce(Ws)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${ce(Ol*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${ce(Ws)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${L8}
	return tr;
}
`,F8=`
precision highp float;
${x3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${T3}
${$8}

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

	if (kind == ${Qt.SKY}.0) {
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

	if (kind == ${Qt.GROUND}.0) {
		bool yard = P.x > ${ce($o.x0)} && P.x < ${ce($o.x1)} && P.z < ${ce($o.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${ce($o.x0)}, ${ce($o.x1)} - P.x);
			float ez = min(P.z - ${ce($o.z0)}, ${ce($o.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${ce(rt.cx)}), dz = abs(P.z - ${ce(rt.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${ce(Vs)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${ce(Vs)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${ce(kh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${ce(rt.cz)}, P.x - ${ce(rt.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${ce(kh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${ce(js)} || dz < ${ce(js)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${ce(js)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${ce(rt.cx)}, ${ce(rt.cz)})));
		}
	} else if (kind == ${Qt.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${Qt.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${Qt.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${Qt.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${ce(Ws)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${Qt.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${Qt.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${Qt.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${Qt.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${Qt.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${Qt.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${Qt.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${Qt.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${Qt.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${Qt.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${Qt.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${ce(rt.westCol)} || P.x > ${ce(rt.eastCol)} || P.z > ${ce(rt.northCol)}) && P.y < ${ce(Ja+.05)} && P.z > ${ce(rt.south-.1)} && P.z < ${ce(rt.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${ce(rt.northCol)} ? P.z - ${ce(rt.northCol)} : (P.x < ${ce(rt.westCol)} ? ${ce(rt.westCol)} - P.x : P.x - ${ce(rt.eastCol)});
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
}`,q8=`
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
}`,D8=`
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
}`,G8=`
precision highp float;
${x3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${T3}
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
}`;function H8(t,e,o){let n=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}ad.exports=t=>{let e=E8(),o=T8(),n=H8(t,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>ed.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=t({frag:F8,vert:q8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>ed.gardenDetail}}),i=t({frag:G8,vert:D8,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*ed.leafShare/6)*6});return function(){s(),i()}};ad.exports.layout={G:rt,YARD:$o,SUN:ra}});var O3=bt((iT,C3)=>{"use strict";var B8=er().GLSL,U8=Ls(),{C:R3}=mr(),Mr=R3.x1+.35,ld=R3.zc,sd=[Mr-7.3,2,ld],L3=5.2*Math.PI/180,N3=2100,j8=725,W8=1288,V8=1450,X8=2576,Sa=ld-3.2,Rh=ld+3.3,id=Mr+5,cd=Mr+11.7,hc=3.9,Dl=Mr+22.7,Lh=40;function Y8(){let t=[],e=[],o=[],n=[],r=U8.createBuilder(t,e,o,n),a=(l,v,h,u,d,p)=>{let m=[];for(let g=0;g<=d;g++){m.push([]);for(let x=0;x<=p;x++){let b=[0,1,2].map(w=>l[w]+v[w]*g/d+h[w]*x/p);m[g].push(r.vert(b,u,[0,0,0]))}}for(let g=0;g<d;g++)for(let x=0;x<p;x++)r.tri(m[g][x],m[g+1][x],m[g+1][x+1]),r.tri(m[g][x],m[g+1][x+1],m[g][x+1])},s=Rh-Sa,i=.7;a([Mr-i,0,Sa],[id-Mr+i,0,0],[0,0,s],[0,1,0],6,4);let c=cd-id,f=Math.hypot(c,hc);return a([id,0,Sa],[c,hc,0],[0,0,s],[-hc/f,c/f,0],6,4),a([cd,hc,Sa],[Dl-cd,0,0],[0,0,s],[0,1,0],6,4),a([Mr-i,0,Sa],[Dl-Mr+i,0,0],[0,Lh,0],[0,0,1],12,12),a([Mr-i,0,Rh],[Dl-Mr+i,0,0],[0,Lh,0],[0,0,-1],12,12),a([Dl,0,Sa],[0,Lh,0],[0,0,s],[-1,0,0],8,4),a([Mr-i,Lh,Sa],[Dl-Mr+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:n}}var Fr=t=>t.toFixed(5),Nh=[[Mr+3.4,3.7,Sa+.01,1],[Mr+8.6,4.1,Rh-.01,-1],[Mr+14.8,hc+3.3,Sa+.01,1],[Mr+19.6,hc+3.6,Rh-.01,-1]],K8=`
precision highp float;
${B8}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Nh.length};
vec4 LAMP[NLAMP];

void main() {
	${Nh.map((t,e)=>`LAMP[${e}] = vec4(${Fr(t[0])}, ${Fr(t[1])}, ${Fr(t[2])}, ${Fr(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Fr(sd[0])}, ${Fr(sd[1])}, ${Fr(sd[2])});
	float c = ${Fr(Math.cos(L3))}, s = ${Fr(Math.sin(L3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Fr(j8)} + ${Fr(N3)} * d.z / fw, ${Fr(W8)} - ${Fr(N3)} * up / fw);
	vec2 uv = px / vec2(${Fr(V8)}, ${Fr(X8)});
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
	for (int i = 0; i < ${Nh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,Q8=`
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
}`;C3.exports=t=>{let e=Y8(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=t({frag:K8,vert:Q8,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,v,h]=i,u=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[d,p,m]of u){let g=r.pos.length/3;for(let[x,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+d[0]*c[0]+p[0]*x*c[0]+m[0]*b*c[0],v+d[1]*c[1]+p[1]*x*c[1]+m[1]*b*c[1],h+d[2]*c[2]+p[2]*x*c[2]+m[2]*b*c[2]),r.nrm.push(...d),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of Nh){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let v of[-1,1])a([i[0]+l*.11,i[1],f+v*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var q3=bt((cT,F3)=>{"use strict";var Z8=er().GLSL,{A:Oh,BENCH:hd,SHAFT:fd,TREE:Gl,oculusGLSL:J8}=M0(),tk=b0(),Ch=Gl.sxz,P3=Gl.sy,I3=Gl.yaw;function ek(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0),a=[0,1,2].map(h=>e.getFloat32(16+h*4,!0)),s=[0,1,2].map(h=>e.getFloat32(28+h*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let v=new Uint32Array(t,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:v}}function ok(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),n=new Float32Array(t.nV*2),r=new Float32Array(t.nV),a=Math.cos(I3),s=Math.sin(I3);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*Ch,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*P3,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*Ch;e[i*3]=Oh.cx+a*c+s*l,e[i*3+1]=hd.soil+.02+f,e[i*3+2]=Oh.zc-s*c+a*l;let v=t.nrm[i*3]/127/Ch,h=t.nrm[i*3+1]/127/P3,u=t.nrm[i*3+2]/127/Ch,d=Math.hypot(v,h,u)||1;v/=d,h/=d,u/=d,o[i*3]=a*v+s*u,o[i*3+1]=h,o[i*3+2]=-s*v+a*u,n[i*2]=t.uv[i*2]/65535,n[i*2+1]=t.uv[i*2+1]/65535,r[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:n,leaf:r,elements:t.idx}}function $3(t,e,o,n){let r=t.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var rr=t=>t.toFixed(4),uc=Gl.crownC,dc=Gl.crownR,nk=`
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

const vec3 SHAFT = vec3(${rr(fd[0])}, ${rr(fd[1])}, ${rr(fd[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${rr(Oh.cx)}, ${rr(Oh.zc)});
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
	vec3 cc = vec3(${rr(uc[0])}, ${rr(uc[1])}, ${rr(uc[2])});
	vec3 cr = vec3(${rr(dc[0])}, ${rr(dc[1])}, ${rr(dc[2])});
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
}`,es=Ha(),rk=`
precision highp float;
${Z8}
uniform float time;
${es.lanternGLSL(es.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${es.LANTERNS[es.TREE_LANTERN[0]].x.toFixed(3)}, ${es.LANTERNS[es.TREE_LANTERN[0]].y.toFixed(3)}, ${es.LANTERNS[es.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${J8()}

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
	vec3 rel = (v_pos - vec3(${rr(uc[0])}, ${rr(uc[1])}, ${rr(uc[2])})) / vec3(${rr(dc[0])}, ${rr(dc[1])}, ${rr(dc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${rr(hd.soil)}, ${rr(hd.soil+.5)}, v_pos.y);

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
}`;F3.exports=t=>{let e=null,o=$3(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=$3(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=ok(ek(a));e=t({vert:nk,frag:rk,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>tk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Fh=bt((lT,B3)=>{"use strict";var pc=ja(),ak="res/audio/go-tomorrow.mp3",sk="res/audio/go-tomorrow.json",G3="gallery-sound",Ph=[pc.PIANO.x,1,pc.PIANO.z],ik=pc.R,Qr=!0;try{localStorage.getItem(G3)==="off"&&(Qr=!1)}catch(t){}var Tn=null,xr=null,Hl=null,Bl=null,os=null,Ea=null,Xs=!1,Ih=null,D3=[],ck=(typeof performance!="undefined"?performance.now():0)/1e3;function lk(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(r()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function fk(){if(Tn)return;Tn=new Audio,Tn.src=ak,Tn.loop=!0,Tn.preload="auto",Tn.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){Tn.volume=.2;return}try{xr=new t;let e=xr.createMediaElementSource(Tn);os=xr.createBiquadFilter(),os.type="lowpass",os.frequency.value=1500,os.Q.value=.4,Hl=xr.createGain(),Hl.gain.value=0,Bl=xr.createGain(),Bl.gain.value=0;let o=xr.createConvolver();o.buffer=lk(xr),Ea=xr.createGain(),Ea.gain.value=Qr?1:0,e.connect(os),os.connect(Hl),Hl.connect(Ea),os.connect(o),o.connect(Bl),Bl.connect(Ea),Ea.connect(xr.destination)}catch(e){xr=null,Tn.volume=.2}}function H3(){if(Xs||!Qr)return;fk();let t=()=>Tn.play().then(()=>{Xs=!0}).catch(()=>{});xr&&xr.state==="suspended"?xr.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,H3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Tn||!Xs||(document.hidden?Tn.pause():Qr&&Tn.play().catch(()=>{}))}),fetch(sk).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};Ih={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var $h={AT:Ph,listen(t){if(!xr||!Xs)return;let e=t[0]-Ph[0],o=t[2]-Ph[2],n=Math.hypot(e,o,(t[1]-Ph[1])*.5),r=Math.hypot(t[0]-pc.C.x,t[2]-pc.C.z)<ik+.4||t[0]<-.2&&Math.abs(t[2]-pc.C.z)<4,a,s,i;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(n,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=xr.currentTime;Hl.gain.setTargetAtTime(a,c,.35),Bl.gain.setTargetAtTime(s,c,.35),os.frequency.setTargetAtTime(i,c,.35)},time(){let t=Ih&&Ih.dur||158;return Tn&&Xs&&!Tn.paused||Tn&&Xs?Tn.currentTime%t:((performance.now()/1e3-ck)%t+t)%t},get cues(){return Ih},get on(){return Qr},set(t){Qr=!!t;try{localStorage.setItem(G3,Qr?"on":"off")}catch(e){}Qr?(H3(),Tn&&Xs&&Tn.play().catch(()=>{}),Ea&&Ea.gain.setTargetAtTime(1,xr.currentTime,.2)):Ea?Ea.gain.setTargetAtTime(0,xr.currentTime,.15):Tn&&Tn.pause(),D3.forEach(e=>e(Qr))},toggle(){$h.set(!Qr)},onChange(t){D3.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=t+" sound-toggle";let r=()=>{n.innerHTML=Qr?e:o,n.setAttribute("aria-label",Qr?"Turn the music off":"Turn the music on"),n.title=Qr?"Music on":"Music off",n.setAttribute("aria-pressed",Qr?"true":"false")};return r(),$h.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),$h.toggle()}),n}};B3.exports=$h});var tx=bt((fT,md)=>{"use strict";var pd=er().GLSL,{A:U3,BENCH:K3,oculusGLSL:Q3}=M0(),j3=b0(),Z3=ja(),W3=Fh(),hk=1.74,uk=1.877,kr=hk/uk,Ks={x:U3.cx-1.22,z:U3.zc+.02,hipY:K3.seat+.115},Zo=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],U0=t=>[-t[0],-t[1],-t[2],t[3]],rs=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,n=Math.sin(e/2);return[t[0]/o*n,t[1]/o*n,t[2]/o*n,Math.cos(e/2)]},qh=(t,e,o)=>Zo(rs([0,0,1],o*Math.PI/180),Zo(rs([0,1,0],e*Math.PI/180),rs([1,0,0],t*Math.PI/180))),vd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},sa=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],jl=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ns=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],dd=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Gh=t=>Math.hypot(t[0],t[1],t[2]),Ul=t=>{let e=Gh(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},Bh=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],dk=(t,e)=>{let o=[t[0],t[1],t[2]],n=ns(Bh(o,e),2);return jl(jl(e,ns(n,t[3])),Bh(o,n))},pk=(t,e)=>{let o=Bh(t,e),n=1+dd(t,e);return n<1e-6?[0,0,1,0]:vd([o[0],o[1],o[2],n])};function l0(t,e,o){let[n,r,a,s]=e,i=n*n,c=r*r,f=a*a,l=n*r,v=n*a,h=r*a,u=s*n,d=s*r,p=s*a;return[(1-2*(c+f))*o[0],2*(l+p)*o[0],2*(v-d)*o[0],0,2*(l-p)*o[1],(1-2*(i+f))*o[1],2*(h+u)*o[1],0,2*(v+d)*o[2],2*(h-u)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function Wn(t,e){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=t[r]*e[n*4]+t[4+r]*e[n*4+1]+t[8+r]*e[n*4+2]+t[12+r]*e[n*4+3];return o}function ud(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),n=Math.hypot(t[8],t[9],t[10]),r=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/n,v=t[9]/n,h=t[10]/n,u=r+c+h,d;if(u>0){let p=Math.sqrt(u+1)*2;d=[(f-v)/p,(l-s)/p,(a-i)/p,p/4]}else if(r>c&&r>h){let p=Math.sqrt(1+r-c-h)*2;d=[p/4,(i+a)/p,(l+s)/p,(f-v)/p]}else if(c>h){let p=Math.sqrt(1+c-r-h)*2;d=[(i+a)/p,p/4,(v+f)/p,(l-s)/p]}else{let p=Math.sqrt(1+h-r-c)*2;d=[(l+s)/p,(v+f)/p,p/4,(a-i)/p]}return vd(d)}var Hh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Hh[t+"Hand"+n+"1"]=[0,0,e*(18+r*6)*o],Hh[t+"Hand"+n+"2"]=[0,0,e*(26+r*6)*o],Hh[t+"Hand"+n+"3"]=[0,0,e*16*o]})}function Ys(t,e,o){let n=t-e;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function V3(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*Ys(t,.14,.07)+57*Ys(t,.72,.12),n=5*Ys(t,.06,.04)-9*Ys(t,.42,.12)+17*Ys(t,.62,.05)-3*Ys(t,.85,.1),r=-26*Ys(t,.58,.06);return{hip:e,knee:o,ankle:n,toe:r}}function vk(t){let e=(t%1+1)%1,o=V3(e),n=V3(e+.5),r=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var X3=`
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
}`,Uh=Ha(),Y3=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${pd}
uniform float time;
${Z3.roomGLSL()}
${Uh.lanternGLSL(Uh.TREE_LANTERN)}
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
${Q3()}
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
}`;function mk(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var J3={w:.13,h:.2},Dh=t=>.011*(1-Math.pow(1-t,3));function gk(){let t=[],e=[],o=[],n=[],r=[],a=(p,m,g,x,b,w,_)=>{let M=t.length/3;[p,m,g,x].forEach((A,I)=>{t.push(...A),e.push(...b),o.push(..._[I]),n.push(w)}),r.push(M,M+1,M+2,M,M+2,M+3)},{w:s,h:i}=J3,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,v=s+.001,h=c+.001;a([0,l,-h],[v,l,-h],[v,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[v,l+.001,h],[v,l+.001,-h],[0,1,0],2,f),a([-v,l,-h],[0,l,-h],[0,l,h],[-v,l,h],[0,-1,0],2,f),a([-v,l+.001,-h],[-v,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let u=8;for(let p of[1,-1]){for(let g=0;g<u;g++){let x=g/u,b=(g+1)/u,w=(.002+x*(s-.002))*p,_=(.002+b*(s-.002))*p,M=Dh(x),A=Dh(b),I=p>0?x:1-x,R=p>0?b:1-b,B=1,D=-(A-M)/(_-w);a([w,M,-c],[_,A,-c],[_,A,c],[w,M,c],[D,B,0],3,[[I,1],[R,1],[R,0],[I,0]]),a([w,l+.001,c],[_,l+.001,c],[_,A,c],[w,M,c],[0,0,1],4,f),a([w,M,-c],[_,A,-c],[_,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,f)}let m=s*p;a([m,l+.001,-c],[m,Dh(1),-c],[m,Dh(1),c],[m,l+.001,c],[p,0,0],4,f)}let d=10;for(let p=0;p<d;p++){let m=p/d,g=(p+1)/d,x=t.length/3;for(let[b,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(b,0,w),e.push(0,1,0),o.push(b,(w+c)/i),n.push(5);r.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:n,idx:r}}function xk(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,f,l,v,h)=>{for(let u=0;u<v;u++){let d=s+(n()-.5)*c*2,p=i+(n()-.5)*f*2,m=20+n()*60,g=e.createRadialGradient(d,p,0,d,p,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(d-m,p-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+n()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${n()*.05})`,e.fillRect(n()*512,n()*768,1,1);return t}var yk=`
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
		float r = u * ${J3.w.toFixed(3)};
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
}`,bk=`
precision highp float;
${pd}
uniform float time;
${Uh.lanternGLSL(Uh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Q3()}
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
}`;function wk(){let t=[],e=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],v=16;for(let h=0;h<l.length;h++){let[u,d,p,m]=l[h],g=m===2?.45:1;for(let x=0;x<=v;x++){let b=x/v*Math.PI*2;t.push(Math.cos(b)*u,d,Math.sin(b)*u*g);let w=Math.max(h-1,0),_=Math.min(h+1,l.length-1),M=l[_][0]-l[w][0],A=l[_][1]-l[w][1],I=Math.hypot(M,A)||1;e.push(Math.cos(b)*A/I,-M/I,Math.sin(b)*A/I/g),o.push(...p),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let u=0;u<v;u++){let d=h*(v+1)+u,p=d+v+1;r.push(d,p,d+1,d+1,p,p+1)}return{pos:t,nrm:e,col:o,mat:n,idx:r}}var _k=`
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
}`,Mk=`
precision highp float;
${pd}
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
}`,kk=`
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
}`,Sk=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;md.exports=t=>{let e="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Ks.x,1.9,Ks.z],glow:0};Promise.all([fetch(e+"avatar.json").then(R=>R.json()),fetch(e+"avatar.bin").then(R=>R.arrayBuffer())]).then(([R,B])=>{o=f(R,B)}).catch(R=>console.error(R));let s=null;Promise.all([fetch(e+"motion.json").then(R=>R.ok?R.json():null),fetch(e+"motion.bin").then(R=>R.ok?R.arrayBuffer():null)]).then(([R,B])=>{if(!R||!B)return;let D={};for(let Z in R.clips){let P=R.clips[Z],j=P.bones.length,H=new Float32Array(B,P.mean,j*4),J={};P.bones.forEach((V,st)=>{J[V]=[H[st*4],H[st*4+1],H[st*4+2],H[st*4+3]]}),D[Z]=Object.assign({},P,{Q:new Int16Array(B,P.q,P.frames*j*4),H:new Float32Array(B,P.hips,P.frames*3),meanQ:J})}s=D}).catch(()=>{});function i(R,B){let D=R.frames,Z=R.bones.length,P=(B%D+D)%D,j=Math.floor(P)%D,H=(j+1)%D,J=P-Math.floor(P),V={};for(let mt=0;mt<Z;mt++){let Dt=(j*Z+mt)*4,ne=(H*Z+mt)*4,Se=R.Q[Dt],Zt=R.Q[Dt+1],Ue=R.Q[Dt+2],yo=R.Q[Dt+3],Bo=R.Q[ne],ee=R.Q[ne+1],be=R.Q[ne+2],Pe=R.Q[ne+3];Se*Bo+Zt*ee+Ue*be+yo*Pe<0&&(Bo=-Bo,ee=-ee,be=-be,Pe=-Pe),V[R.bones[mt]]=vd([Se+(Bo-Se)*J,Zt+(ee-Zt)*J,Ue+(be-Ue)*J,yo+(Pe-yo)*J])}let st=j*3,et=H*3;return{q:V,hips:[R.H[st]+(R.H[et]-R.H[st])*J,R.H[st+1]+(R.H[et+1]-R.H[st+1])*J,R.H[st+2]+(R.H[et+2]-R.H[st+2])*J]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(R,B){let D=(ot,It)=>new Float32Array(B,ot,It),Z=R.bones,P=Z.length,j={};Z.forEach((ot,It)=>{j[ot.name]=It});let H=[];for(let ot=0;ot<P;ot++)H.push(Array.from(D(R.ibm+ot*64,16)));let J=Z.map(ot=>l0(ot.t,ot.r,ot.s)),V=[];for(let ot=0;ot<P;ot++){let It=Z[ot].parent;V[ot]=It<0?J[ot]:Wn(V[It],J[ot])}let st=V.map(ud),et=R.meshes.map(ot=>{let It=D(ot.pos,ot.n*3),Ht=D(ot.nrm,ot.n*3),Ot=D(ot.uv,ot.n*2),ue=new Uint8Array(B,ot.jnt,ot.n*4),ze=D(ot.wgt,ot.n*4),Ee=new Uint16Array(B,ot.idx,ot.ni),ge={};for(let Me in ot.morphs){let Go=ot.morphs[Me];ge[Me]={idx:new Uint16Array(B,Go.idx,Go.n),d:D(Go.d,Go.n*3)}}let qe=new Float32Array(ot.n*3),_e=new Float32Array(ot.n*3),Ye=new Float32Array(ot.n*3),Te=t.buffer({data:qe,usage:"dynamic"}),Le=t.buffer({data:_e,usage:"dynamic"}),Qe=/avaturn_hair/.test(ot.name),xe=/EyeAO|Eyelash/.test(ot.name),lo=/Body|Head/.test(ot.name),No=ot.kind||0;return{m:ot,pos:It,nrm:Ht,uv:Ot,jnt:ue,wgt:ze,idx:Ee,morphs:ge,outP:qe,outN:_e,work:Ye,pb:Te,nbuf:Le,tex:ot.tex?mk(t,e+ot.tex):c,kind:No,alphaScale:/EyeAO/.test(ot.name)?.25:1,blend:ot.blend||Qe,alphaCut:Qe?.35:xe?.02:0,skin:lo?1:0}}),mt=t({vert:X3,frag:Y3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!A?M.lamp:[0,0,0,0],court:()=>M||A?0:1,candle:()=>A?1:0},cull:{enable:!1}}),Dt=t({vert:X3,frag:Y3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!A?M.lamp:[0,0,0,0],court:()=>M||A?0:1,candle:()=>A?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),ne=.3;for(let ot of et)if(ot.uvBuf=t.buffer(ot.uv),/Body/.test(ot.m.name)){let It=[],Ht=[];for(let Ot=0;Ot<ot.idx.length;Ot+=3){let ue=ot.idx[Ot],ze=ot.idx[Ot+1],Ee=ot.idx[Ot+2];(ot.pos[ue*3+1]<ne&&ot.pos[ze*3+1]<ne&&ot.pos[Ee*3+1]<ne?Ht:It).push(ue,ze,Ee)}ot.el=t.elements({data:new Uint16Array(It),type:"uint16"}),Ht.length&&(ot.sockEl=t.elements({data:new Uint16Array(Ht),type:"uint16"}))}else ot.el=t.elements({data:ot.idx,type:"uint16"});let Se=V[j.Hips],Zt=rs([1,0,0],-Math.PI/2),Ue=Wn(l0([Ks.x-Se[12]*kr,Ks.hipY-Se[14]*kr,Ks.z+Se[13]*kr],Zt,[1,1,1]),l0([0,0,0],[0,0,0,1],[kr,kr,kr])),yo=new Array(P),Bo=-1,ee=(ot,It,Ht)=>Wn(l0([ot,0,It],rs([0,1,0],Ht),[1,1,1]),l0([0,0,0],[0,0,0,1],[kr,kr,kr])),be=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(ot=>j[ot]),Pe=be.map(ot=>V[ot][13]*kr);function ao(ot){if(s&&s.walk)return _o(ot);let It=vk(ot.phase),Ht={},Ot=_e=>{for(let Ye in _e){let Te=_e[Ye],Le=qh(Te[0],Te[1],Te[2]);Ht[Ye]=Ht[Ye]?Zo(Ht[Ye],Le):Le}};Ot(It.swing),Ot(It.pose);let ue=Math.cos(ot.heading),ze=-Math.sin(ot.heading),Ee=ee(ot.x+ue*It.sway,ot.z+ze*It.sway,ot.heading),ge=new Array(P);for(let _e=0;_e<P;_e++){let Ye=Z[_e],Te=J[_e],Le=Ht[Ye.name];if(Le){let Qe=st[_e],xe=Zo(U0(Qe),Zo(Le,Qe));Te=l0(Ye.t,Zo(Ye.r,xe),Ye.s)}ge[_e]=Ye.parent<0?Wn(Ee,Te):Wn(ge[Ye.parent],Te)}let qe=1/0;be.forEach((_e,Ye)=>{qe=Math.min(qe,ge[_e][13]-Pe[Ye])});for(let _e=0;_e<P;_e++)ge[_e]=ge[_e].slice(),ge[_e][13]-=qe,yo[_e]=Wn(ge[_e],H[_e]);return{blink:0}}function _o(ot){let It=s.walk,Ht=i(It,(ot.phase+It.phase0)*It.frames),Ot=ee(ot.x,ot.z,ot.heading),ue=new Array(P),ze=j.Hips;for(let ge=0;ge<P;ge++){let qe=Z[ge],_e=J[ge],Ye=Ht.q[qe.name];if(Ye){let Te=st[ge],Le=Zo(U0(Te),Zo(Ye,Te)),Qe=ge===ze?[qe.t[0]+Ht.hips[0],qe.t[1]+Ht.hips[1],qe.t[2]+Ht.hips[2]]:qe.t;_e=l0(Qe,Zo(qe.r,Le),qe.s)}ue[ge]=qe.parent<0?Wn(Ot,_e):Wn(ue[qe.parent],_e)}let Ee=1/0;be.forEach((ge,qe)=>{Ee=Math.min(Ee,ue[ge][13]-Pe[qe])});for(let ge=0;ge<P;ge++)ue[ge]=ue[ge].slice(),ue[ge][13]-=Ee,yo[ge]=Wn(ue[ge],H[ge]);return{blink:0}}function Ie(ot,It){let Ht=Math.sin(ot*2*Math.PI/4.6),Ot=Math.sin(ot*.37)*.6+Math.sin(ot*.83+1)*.4,ue={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Ht*.8,0,0],Spine2:[4+Ht*.6,0,0],Neck:[10,0,0],Head:[12+Ot*2,Ot*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},ze={};for(let Te in ue){let Le=ue[Te];ze[Te]=qh(Le[0],Le[1],Le[2])}let Ee=ee(It.x,It.z,It.heading),ge=new Array(P);for(let Te=0;Te<P;Te++){let Le=Z[Te],Qe=J[Te],xe=ze[Le.name];if(xe){let lo=st[Te],No=Zo(U0(lo),Zo(xe,lo));Qe=l0(Le.t,Zo(Le.r,No),Le.s)}ge[Te]=Le.parent<0?Wn(Ee,Qe):Wn(ge[Le.parent],Qe)}let _e=ge[j.Hips][13]-(It.y+.1);for(let Te=0;Te<P;Te++)ge[Te]=ge[Te].slice(),ge[Te][13]-=_e,yo[Te]=Wn(ge[Te],H[Te]);let Ye=ot%4.1;return{blink:Ye<.16?Math.sin(Ye/.16*Math.PI):0}}let we=ot=>[V[ot][12],V[ot][13],V[ot][14]],_t=(ot,It)=>{let Ht=Ul(ot),Ot=Ul(sa(It,ns(Ht,dd(It,Ht)))),ue=Bh(Ht,Ot);return ud([Ht[0],Ht[1],Ht[2],0,Ot[0],Ot[1],Ot[2],0,ue[0],ue[1],ue[2],0,0,0,0,1])},le={};for(let ot of["Left","Right"]){let It=j[ot+"Arm"],Ht=j[ot+"ForeArm"],Ot=j[ot+"Hand"],ue=j[ot+"HandMiddle1"];le[ot]={a:It,f:Ht,h:Ot,upper:Gh(sa(we(Ht),we(It)))*kr,fore:Gh(sa(we(Ot),we(Ht)))*kr,dir0:Ul(sa(we(Ht),we(It))),qf0:_t(sa(we(Ot),we(Ht)),[0,1,0]),qh0:_t(sa(we(ue),we(Ot)),[0,1,0])}}let $e={};for(let ot of["Left","Right"])$e[le[ot].a]={side:ot,part:0},$e[le[ot].f]={side:ot,part:1},$e[le[ot].h]={side:ot,part:2};function me(ot,It,Ht){if(!ot||!ot.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Ot=0,ue=ot.length-1,ze=-1;for(;Ot<=ue;){let Go=Ot+ue>>1;ot[Go].t<=It?(ze=Go,Ot=Go+1):ue=Go-1}let Ee=ot[ot.length-1],ge=ot[0],qe=ze>=0?ot[ze]:{t:Ee.t-Ht,x:Ee.x,w:Ee.w},_e=ze+1<ot.length?ot[ze+1]:{t:ge.t+Ht,x:ge.x,w:ge.w},Ye=Math.max(.05,_e.t-qe.t),Te=Math.min(.14,Ye*.45),Le=Math.max(0,Math.min(1,(It-qe.t-Te)/Math.max(Ye-Te-.03,.02))),Qe=Le*Le*(3-2*Le),xe=It-qe.t,lo=(.55+.45*qe.w)*Math.exp(-xe/.11),No=_e.t-It,Me=No<.05?(.55+.45*_e.w)*(1-No/.05):0;return{x:qe.x+(_e.x-qe.x)*Qe,lift:Math.sin(Math.PI*Le)*Math.min(.05,.012+Ye*.03)*(Ye>2.5?.4:1),press:Math.max(lo,Me),finger:Me>lo?((ze+1)*7+3)%4:(Math.max(ze,0)*7+3)%4,busy:Math.exp(-xe/.9)}}let Jt={lean:0,turn:0,nod:0,pedal:0,last:-1},So=["Index","Middle","Ring","Pinky"];function S(ot){let It=Z3.PLAY,Ht=W3.cues,Ot=W3.time(),ue=Ht&&Ht.dur||158,ze={Left:me(Ht&&Ht.left,Ot,ue),Right:me(Ht&&Ht.right,Ot,ue)},Ee=.35;if(Ht&&Ht.level&&Ht.level.length){let no=Ot*8,mo=Math.floor(no)%Ht.level.length,$n=(mo+1)%Ht.level.length;Ee=Ht.level[mo]+(Ht.level[$n]-Ht.level[mo])*(no-Math.floor(no))}let ge=Jt.last<0?0:Math.min(.1,Math.max(0,ot-Jt.last));Jt.last=ot;let qe=no=>Math.min(1,ge*no);Jt.lean+=(Ee-Jt.lean)*qe(1.2),Jt.turn+=(ze.Right.busy-ze.Left.busy-Jt.turn)*qe(1.5),Jt.nod+=(Math.max(ze.Right.press,ze.Left.press*.7)-Jt.nod)*qe(6),Jt.pedal+=((ze.Left.busy>.35?1:.15)-Jt.pedal)*qe(5);let _e=Math.sin(ot*2*Math.PI/4.6),Ye=Math.sin(Ot*.41)*.6+Math.sin(Ot*.17+1)*.4,Te={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Jt.pedal,0,0],Spine:[9+3.5*Jt.lean+Ye*1.6,Jt.turn*2.5,-Jt.turn*1.6],Spine1:[7+_e*.8+2.5*Jt.lean,Jt.turn*2.5,-Jt.turn*1.2],Spine2:[6+_e*.6+Ye*.8,Jt.turn*1.5,0],Neck:[13+3*Jt.lean,Jt.turn*3,0],Head:[15+Jt.nod*3.5+Ye*1.5,Jt.turn*5,Ye*1.5]};for(let no of["Left","Right"]){let mo=no==="Left"?-1:1,$n=ze[no];So.forEach((X,vt)=>{let Yt=vt===$n.finger?$n.press:$n.press*.2;Te[no+"Hand"+X+"1"]=[0,0,mo*(20+3*vt+20*Yt)],Te[no+"Hand"+X+"2"]=[0,0,mo*(26+4*vt-6*Yt)],Te[no+"Hand"+X+"3"]=[0,0,mo*14]}),Te[no+"HandThumb1"]=[0,mo*-18,mo*10]}let Le={};for(let no in Te){let mo=Te[no];Le[no]=qh(mo[0],mo[1],mo[2])}let Qe=V[j.Hips][13]*kr,xe=Wn(l0([It.stoolX,It.stoolTop+.1-Qe,It.stoolFront+.15],rs([0,1,0],It.heading),[1,1,1]),l0([0,0,0],[0,0,0,1],[kr,kr,kr])),lo=(It.keyX0+It.keyX1)/2,No={};for(let no of["Left","Right"]){let mo=ze[no],$n=no==="Left"?lo-.4+.33*mo.x:lo+.07+.33*mo.x;No[no]=[$n,It.keyTop+.062+mo.lift-mo.press*.012,It.keyFront+.075]}let Me=new Array(P),Go={},v0=[0,1,0];for(let no=0;no<P;no++){let mo=Z[no],$n=J[no],X=Le[mo.name],vt=$e[no];if(vt){let Yt=le[vt.side];if(vt.part===0){let fe=Me[mo.parent],de=Wn(fe,J[no]),nn=[de[12],de[13],de[14]],sr=Zo(ud(fe),U0(st[mo.parent])),Tr=sa(No[vt.side],nn),rn=Gh(Tr),br=(Yt.upper+Yt.fore)*.995;rn>br&&(Tr=ns(Tr,br/rn),rn=br);let an=ns(Tr,1/rn),po=(Yt.upper*Yt.upper-Yt.fore*Yt.fore+rn*rn)/(2*rn),Qn=Math.sqrt(Math.max(0,Yt.upper*Yt.upper-po*po)),Vo=[vt.side==="Left"?-.6:.6,-.8,.3];Vo=Ul(sa(Vo,ns(an,dd(Vo,an))));let Fn=jl(nn,jl(ns(an,po),ns(Vo,Qn)));Yt.T=jl(nn,Tr),Yt.elbow=Fn;let Br=Ul(sa(Fn,nn)),Ur=Zo(pk(dk(sr,Yt.dir0),Br),sr);Go[no]=Ur,X=Zo(U0(sr),Ur)}else if(vt.part===1){let fe=Zo(_t(sa(Yt.T,Yt.elbow),v0),U0(Yt.qf0));Go[no]=fe,X=Zo(U0(Go[mo.parent]),fe)}else{let fe=ze[vt.side],de=Zo(_t([vt.side==="Left"?.12:-.12,-.2-.1*fe.press,-1],v0),U0(Yt.qh0));Go[no]=de,X=Zo(U0(Go[mo.parent]),de)}}if(X){let Yt=st[no],fe=Zo(U0(Yt),Zo(X,Yt));$n=l0(mo.t,Zo(mo.r,fe),mo.s)}Me[no]=mo.parent<0?Wn(xe,$n):Wn(Me[mo.parent],$n)}for(let no=0;no<P;no++)yo[no]=Wn(Me[no],H[no]);a.pianist={head:[Me[j.Head][12],Me[j.Head][13],Me[j.Head][14]]};let fa=ot%4.3;return{blink:fa<.16?Math.sin(fa/.16*Math.PI):0}}function co(ot,It){if(A)return S(ot);if(M)return Ie(ot,M);if(It)return ao(It);let Ht=Math.sin(ot*2*Math.PI/4.2),Ot=ot%3.7,ue=Ot<.16?Math.sin(Ot/.16*Math.PI):0,ze=Math.sin(ot*.45),Ee=Math.sin(ot*.31+.8),ge=Math.max(0,Math.sin(ot*.085)-.75)*4,qe={RightArm:[0,-22*ge,11*ze],RightForeArm:[0,8+26*ge,0],RightHand:[38*Ee,0,6*Math.sin(ot*.7)],LeftUpLeg:[0,0,3.2*Math.sin(ot*.36)],RightFoot:[5*Math.sin(ot*.52+.4),0,0],Head:[0,1.6*Math.sin(ot*.21),0]};["Index","Middle","Ring","Pinky"].forEach((xe,lo)=>{let No=Math.sin(ot*1.1-lo*.5);qe["RightHand"+xe+"1"]=[0,0,8+12*No],qe["RightHand"+xe+"2"]=[0,0,6+10*No]});let _e={},Ye=(xe,lo)=>{for(let No in xe){let Me=xe[No],Go=qh(Me[0]*lo,Me[1]*lo,Me[2]*lo);_e[No]=_e[No]?Zo(_e[No],Go):Go}};Ye(Hh,1),Ye({Spine1:[Ht*.8,0,0],Spine2:[Ht*.6,0,0]},1),Ye(qe,1);let Te=new Array(P),Le=new Array(P);for(let xe=0;xe<P;xe++){let lo=Z[xe],No=J[xe],Me=_e[lo.name];if(Me){let Go=st[xe],v0=Zo(U0(Go),Zo(Me,Go));No=l0(lo.t,Zo(lo.r,v0),lo.s)}Te[xe]=lo.parent<0?Wn(Ue,No):Wn(Te[lo.parent],No),Le[xe]=null}for(let xe=0;xe<P;xe++)yo[xe]=Wn(Te[xe],H[xe]);let Qe=xe=>[xe[12],xe[13],xe[14]];return a.headPos=Qe(Te[j.Head]),a.hipsPos=Qe(Te[j.Hips]),a.headM=Te[j.Head],{blink:ue}}function Je(ot,It){let{pos:Ht,nrm:Ot,jnt:ue,wgt:ze,outP:Ee,outN:ge,work:qe,m:_e}=ot,Ye=_e.n,Te=Ht;if(It){qe.set(Ht);for(let Le in ot.morphs){let Qe=It[Le]||0;if(Qe<=0)continue;let xe=ot.morphs[Le];for(let lo=0;lo<xe.idx.length;lo++){let No=xe.idx[lo]*3;qe[No]+=xe.d[lo*3]*Qe,qe[No+1]+=xe.d[lo*3+1]*Qe,qe[No+2]+=xe.d[lo*3+2]*Qe}}Te=qe}for(let Le=0;Le<Ye;Le++){let Qe=Te[Le*3],xe=Te[Le*3+1],lo=Te[Le*3+2],No=Ot[Le*3],Me=Ot[Le*3+1],Go=Ot[Le*3+2],v0=0,fa=0,no=0,mo=0,$n=0,X=0;for(let Yt=0;Yt<4;Yt++){let fe=ze[Le*4+Yt];if(fe===0)continue;let de=yo[ue[Le*4+Yt]];v0+=fe*(de[0]*Qe+de[4]*xe+de[8]*lo+de[12]),fa+=fe*(de[1]*Qe+de[5]*xe+de[9]*lo+de[13]),no+=fe*(de[2]*Qe+de[6]*xe+de[10]*lo+de[14]),mo+=fe*(de[0]*No+de[4]*Me+de[8]*Go),$n+=fe*(de[1]*No+de[5]*Me+de[9]*Go),X+=fe*(de[2]*No+de[6]*Me+de[10]*Go)}Ee[Le*3]=v0,Ee[Le*3+1]=fa,Ee[Le*3+2]=no;let vt=Math.hypot(mo,$n,X)||1;ge[Le*3]=mo/vt,ge[Le*3+1]=$n/vt,ge[Le*3+2]=X/vt}_e.grid&&!Oo&&!M&&!A&&Eo(ot),ot.sway&&La(ot),ot.pb.subdata(Ee),ot.nbuf.subdata(ge)}function Eo(ot){let[It,Ht]=ot.m.grid,Ot=ot.outP,ue=ot.outN,ze=K3.seat+.012;for(let Ee=1;Ee<It;Ee++){let ge=Math.pow(1-Ee/(It-1),1.5);for(let qe=0;qe<Ht;qe++){let _e=(Ee*Ht+qe)*3;Ot[_e+1]>ze?Ot[_e+1]=ze+(Ot[_e+1]-ze)*Math.max(ge,.15):Ot[_e+1]=ze}}for(let Ee=0;Ee<ue.length;Ee+=3)ue[Ee]=0,ue[Ee+1]=1,ue[Ee+2]=0}let Oo=!1,bn=(ot,It,Ht,Ot,ue)=>({bone:j[ot],rate:It,damp:Ht,drag:Ot,most:ue,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Ar={head:bn("Head",15,.32,.012,.035),chest:bn("Spine2",9,.38,.03,.1),hips:bn("Hips",7,.42,.045,.16)},Kn=-1;function Q0(ot){let It=Kn<0?0:ot-Kn;Kn=ot;for(let Ht in Ar){let Ot=Ar[Ht],ue=yo[Ot.bone],ze=V[Ot.bone],Ee=ze[12],ge=ze[13],qe=ze[14],_e=[ue[0]*Ee+ue[4]*ge+ue[8]*qe+ue[12],ue[1]*Ee+ue[5]*ge+ue[9]*qe+ue[13],ue[2]*Ee+ue[6]*ge+ue[10]*qe+ue[14]];if(!Ot.p||!(It>0)||It>.25||Math.hypot(_e[0]-Ot.p[0],_e[1]-Ot.p[1],_e[2]-Ot.p[2])>.5){Ot.p=_e,Ot.x=[0,0,0],Ot.v=[0,0,0],Ot.vel=[0,0,0];continue}let Ye=[(_e[0]-Ot.p[0])/It,(_e[1]-Ot.p[1])/It,(_e[2]-Ot.p[2])/It],Te=Math.max(1,Math.ceil(It/.016)),Le=It/Te;for(let xe=0;xe<3;xe++){let lo=Math.max(-30,Math.min(30,(Ye[xe]-Ot.vel[xe])/It)),No=-Ye[xe]*Ot.drag;for(let Me=0;Me<Te;Me++)Ot.v[xe]+=((No-Ot.x[xe])*Ot.rate*Ot.rate-2*Ot.damp*Ot.rate*Ot.v[xe]-lo)*Le,Ot.x[xe]+=Ot.v[xe]*Le}let Qe=Math.hypot(Ot.x[0],Ot.x[1],Ot.x[2]);if(Qe>Ot.most){let xe=Ot.most/Qe;Ot.x=[Ot.x[0]*xe,Ot.x[1]*xe,Ot.x[2]*xe]}Ot.p=_e,Ot.vel=Ye}}for(let ot of et){let It=ot.m,Ht=It.n,Ot=null,ue=null;if(It.kind===9){ue="head",Ot=new Float32Array(Ht);for(let ze=0;ze<Ht;ze++){let Ee=ot.uv[ze*2]<-.5?0:ot.uv[ze*2+1];Ot[ze]=Ee*Ee}}else if(It.name==="scarf"){ue="chest",Ot=new Float32Array(Ht);for(let ze=0;ze<Ht;ze++)Ot[ze]=l(1.52,1.12,ot.pos[ze*3+1])}else if(It.grid){ue="hips",Ot=new Float32Array(Ht);let ze=It.grid[0],Ee=It.grid[1];for(let ge=0;ge<Ht;ge++)Ot[ge]=Math.pow(Math.floor(ge/Ee)/(ze-1),1.6)}Ot&&(ot.sway=Ot,ot.spring=Ar[ue],ot.loose=ue)}function La(ot){if(!Oo&&!A&&!M)return;let It=ot.spring.x,Ht=ot.sway,Ot=ot.outP;if(!(Math.abs(It[0])+Math.abs(It[1])+Math.abs(It[2])<1e-5))for(let ue=0,ze=Ht.length;ue<ze;ue++){let Ee=Ht[ue];Ee>0&&(Ot[ue*3]+=It[0]*Ee,Ot[ue*3+1]+=It[1]*Ee,Ot[ue*3+2]+=It[2]*Ee)}}function hi(ot,It){Oo=!!It;let Ht=co(ot,It);Q0(ot);let Ot={eyeBlinkLeft:Ht.blink,eyeBlinkRight:Ht.blink};for(let ue of et)Je(ue,Object.keys(ue.morphs).length?Ot:null);a.pose=Ht}return{parts:et,update:hi,drawOpaque:mt,drawBlend:Dt,state:a}}function l(R,B,D){let Z=Math.min(1,Math.max(0,(D-R)/(B-R)));return Z*Z*(3-2*Z)}let v=gk(),h=xk(),u=h?t.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,d=t({vert:yk,frag:bk,attributes:{position:v.pos,normal:v.nrm,uv:v.uv,kind:v.kind},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:u},cull:{enable:!1}}),p=wk(),m=t({vert:_k,frag:Mk,attributes:{position:p.pos,normal:p.nrm,color:p.col,mat:p.mat},elements:new Uint16Array(p.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:kk,frag:Sk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(R){let B=R.headM,D=et=>{let mt=Math.hypot(...et)||1;return et.map(Dt=>Dt/mt)},Z=D([B[4],B[5],B[6]]),P=D([B[8],B[9],B[10]]),j=Z,H=P.map(et=>-et),J=[H[1]*j[2]-H[2]*j[1],H[2]*j[0]-H[0]*j[2],H[0]*j[1]-H[1]*j[0]],V=R.headPos,st=[0,1,2].map(et=>V[et]+Z[et]*.06+P[et]*.185);return[J[0],J[1],J[2],0,H[0],H[1],H[2],0,j[0],j[1],j[2],0,st[0],st[1],st[2],1]}let b=-1,w="",_=null,M=null,A=!1;function I(R){if(!o)return;let B=(j3.motion,r()),D=_?[_.x,_.z,_.heading,_.phase].map(P=>P.toFixed(4)).join():"";(M||A||D!==w||!_&&Math.abs(B-b)>(j3.isPhone?1/30:0))&&(o.update(B,_),b=B,w=D);for(let P of o.parts)P.blend||(o.drawOpaque({pb:P.pb,nb:P.nbuf,uv:P.uvBuf,el:P.el,tex:P.tex,alphaCut:P.alphaCut,skin:P.skin,kind:P.kind,alphaScale:P.alphaScale}),P.sockEl&&o.drawOpaque({pb:P.pb,nb:P.nbuf,uv:P.uvBuf,el:P.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let Z=o.state;if(Z.headM&&!_&&!M&&!A){d({model:x(Z)});let P=Z.headPos,j=Math.sin(B*1.3)*.02,H=[P[0],P[1]+.62+j,P[2]+.05],J=B*.6,V=l0(H,Zo(rs([0,1,0],J),rs([0,0,1],.18)),[1.2,1.2,1.2]),st=.5+.5*Math.sin(B*2);m({model:V,pulse:st}),a.glowPos=H,a.glow=.06+.03*st,g({center:[H[0],H[1]-.12,H[2]],size:.1,pulse:st})}for(let P of o.parts)P.blend&&o.drawBlend({pb:P.pb,nb:P.nbuf,uv:P.uvBuf,el:P.el,tex:P.tex,alphaCut:P.alphaCut,skin:P.skin,kind:P.kind,alphaScale:P.alphaScale})}return I.state=a,I.place=Ks,I.setWalk=R=>{_=R||null,_&&(a.glow=0)},I.setSeat=R=>{M=R||null,a.glow=M?0:a.glow,b=-1},I.setPiano=R=>{R=!!R,R!==A&&(A=R,A&&(a.glow=0),b=-1)},I};md.exports.PLACE=Ks});var gd=bt((hT,ex)=>{"use strict";ex.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var yd=bt((uT,ix)=>{"use strict";var ax=b0(),ox=al(),as=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function xd(){return ax.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Ek=`
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
`,nx=!1;function sx(){if(nx)return;nx=!0;let t=document.createElement("style");t.textContent=Ek,document.head.appendChild(t)}var Ak='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Tk(t){return!t||!t.visit||!xd()?"":(sx(),`<button type="button" class="visit-btn" data-visit="${as(t.slug||"")}" aria-label="Visit what remained: watch ${as(t.title)} come to life">${Ak}<span>Visit what remained</span></button>`)}function zk(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Wl=null;function Lk(t){if(Wl||!t||!t.visit)return;sx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(ax.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+t.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${as(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${as(t.title)}, ${as(ox(t))}" src="${as(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${as(t.title)}</span>
			<span class="visit-meta">${as(ox(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=zk(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),p()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),u()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let v=m=>m.stopImmediatePropagation();window.addEventListener("keyup",v,!0);let h=!1;function u(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function d(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>u()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&u()}),r.addEventListener("ended",u),r.addEventListener("error",u);function p(){if(Wl){Wl=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",v,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",p),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}u()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&p(),g.dataset.act==="again"&&(i.forEach(clearTimeout),d()))}),r.src=t.visit.video,Wl={close:p},requestAnimationFrame(()=>{n.classList.add("on"),c(d,1300)})}var rx={};function Nk(t){if(!t||!t.visit||rx[t.visit.video]||!xd())return;rx[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}ix.exports={available:xd,button:Tk,open:Lk,warm:Nk,get active(){return!!Wl}}});var fx=bt((dT,lx)=>{"use strict";var Rk=b0(),yc=[0,0],vc=[0,0],Aa=null,wd=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(yc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),yc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),wd=performance.now())},{passive:!0});let t=()=>{wd=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(Aa||(Aa=[e.gamma,e.beta]),Aa[0]+=(e.gamma-Aa[0])*.01,Aa[1]+=(e.beta-Aa[1])*.01,yc[0]=Math.max(-1,Math.min(1,(e.gamma-Aa[0])/14)),yc[1]=Math.max(-1,Math.min(1,(e.beta-Aa[1])/14)))},{passive:!0})}var cx=0,mc=null,jh=null,ia=[0,0,0],bd=0,gc=null,xc=0,Qs={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Ck={apply(t,e){let o=Math.min(.1,Math.max(0,e-cx));cx=e;let n=t.eye,r=t.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!mc;if(mc&&o>0){let b=[n[0]-mc[0],n[1]-mc[1],n[2]-mc[2]],w=Math.hypot(b[0],b[1],b[2]);if(w>2.5)l=!0;else{let M=Math.min(1,o*5);for(let A=0;A<3;A++)ia[A]+=(b[A]/o-ia[A])*M}let _=Math.hypot(r[0]-jh[0],r[1]-jh[1],r[2]-jh[2]);xc=w/o<.12&&_/o<.2?xc+o:0}l&&(ia[0]=ia[1]=ia[2]=0,xc=0),mc=n.slice(),jh=r.slice(),bd=Math.hypot(ia[0],ia[1],ia[2]);let v=Math.min(1,o*2.6);vc[0]+=(yc[0]-vc[0])*v,vc[1]+=(yc[1]-vc[1])*v;let h=Math.max(.03,Math.min(.32,s*.05)),u=(Rk.isPhone&&!Aa?1.5:1)*Math.min(1,xc/2.5),d=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*h*.55*u,p=Math.sin(e*.097+.6)*h*.16*u,m=vc[0]*h+d,g=-vc[1]*h*.45+p;for(let b=0;b<3;b++)Qs.eye[b]=n[b]+i[b]*m+f[b]*g,Qs.target[b]=r[b]+(i[b]*m+f[b]*g)*.12;n[1]>.05&&(Qs.eye[1]=Math.max(.05,Qs.eye[1]));let x=ia[0]*i[0]+ia[2]*i[2];return Qs.fov=t.fov+Math.min(3.5,bd*.55),Qs.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),Qs},pull(t,e){(gc===null||!(Math.abs(t.focus-gc)<40))&&(gc=t.focus);let o=1/60;gc+=(t.focus-gc)*Math.min(1,o*3.2),t.focus=gc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,xc/3))},get speed(){return bd},get resting(){return xc>2&&performance.now()-wd>2e3}};lx.exports=Ck});var _d=bt((pT,hx)=>{hx.exports=1e-6});var Md=bt((vT,ux)=>{ux.exports=Ok;function Ok(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var px=bt((mT,dx)=>{dx.exports=Pk;function Pk(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var kd=bt((gT,vx)=>{vx.exports=Ik;function Ik(t,e,o){var n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=o,n}});var Sd=bt((xT,mx)=>{mx.exports=$k;function $k(t,e){var o=e[0],n=e[1],r=e[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var Ed=bt((yT,gx)=>{gx.exports=Fk;function Fk(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var wx=bt((bT,bx)=>{bx.exports=Dk;var xx=kd(),yx=Sd(),qk=Ed();function Dk(t,e){var o=xx(t[0],t[1],t[2]),n=xx(e[0],e[1],e[2]);yx(o,o),yx(n,n);var r=qk(o,n);return r>1?0:Math.acos(r)}});var Mx=bt((wT,_x)=>{_x.exports=Gk;function Gk(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Sx=bt((_T,kx)=>{kx.exports=Hk;function Hk(t,e,o,n){return t[0]=e,t[1]=o,t[2]=n,t}});var Ax=bt((MT,Ex)=>{Ex.exports=Bk;var Ad=_d();function Bk(t,e){var o=t[0],n=t[1],r=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=Ad*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=Ad*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=Ad*Math.max(1,Math.abs(r),Math.abs(i))}});var zx=bt((kT,Tx)=>{Tx.exports=Uk;function Uk(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var Nx=bt((ST,Lx)=>{Lx.exports=jk;function jk(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var Td=bt((ET,Rx)=>{Rx.exports=Wk;function Wk(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Ox=bt((AT,Cx)=>{Cx.exports=Td()});var zd=bt((TT,Px)=>{Px.exports=Vk;function Vk(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var $x=bt((zT,Ix)=>{Ix.exports=zd()});var Ld=bt((LT,Fx)=>{Fx.exports=Xk;function Xk(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Dx=bt((NT,qx)=>{qx.exports=Ld()});var Hx=bt((RT,Gx)=>{Gx.exports=Yk;function Yk(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var Ux=bt((CT,Bx)=>{Bx.exports=Kk;function Kk(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var Wx=bt((OT,jx)=>{jx.exports=Qk;function Qk(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var Xx=bt((PT,Vx)=>{Vx.exports=Zk;function Zk(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var Kx=bt((IT,Yx)=>{Yx.exports=Jk;function Jk(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var Zx=bt(($T,Qx)=>{Qx.exports=tS;function tS(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var t5=bt((FT,Jx)=>{Jx.exports=eS;function eS(t,e,o,n){return t[0]=e[0]+o[0]*n,t[1]=e[1]+o[1]*n,t[2]=e[2]+o[2]*n,t}});var Nd=bt((qT,e5)=>{e5.exports=oS;function oS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(o*o+n*n+r*r)}});var n5=bt((DT,o5)=>{o5.exports=Nd()});var Rd=bt((GT,r5)=>{r5.exports=nS;function nS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return o*o+n*n+r*r}});var s5=bt((HT,a5)=>{a5.exports=Rd()});var Cd=bt((BT,i5)=>{i5.exports=rS;function rS(t){var e=t[0],o=t[1],n=t[2];return Math.sqrt(e*e+o*o+n*n)}});var l5=bt((UT,c5)=>{c5.exports=Cd()});var Od=bt((jT,f5)=>{f5.exports=aS;function aS(t){var e=t[0],o=t[1],n=t[2];return e*e+o*o+n*n}});var u5=bt((WT,h5)=>{h5.exports=Od()});var p5=bt((VT,d5)=>{d5.exports=sS;function sS(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var m5=bt((XT,v5)=>{v5.exports=iS;function iS(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var x5=bt((YT,g5)=>{g5.exports=cS;function cS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=r*c-a*i,t[1]=a*s-n*c,t[2]=n*i-r*s,t}});var b5=bt((KT,y5)=>{y5.exports=lS;function lS(t,e,o,n){var r=e[0],a=e[1],s=e[2];return t[0]=r+n*(o[0]-r),t[1]=a+n*(o[1]-a),t[2]=s+n*(o[2]-s),t}});var _5=bt((QT,w5)=>{w5.exports=fS;function fS(t,e){e=e||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t[2]=n*e,t}});var k5=bt((ZT,M5)=>{M5.exports=hS;function hS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,t[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,t[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,t}});var E5=bt((JT,S5)=>{S5.exports=uS;function uS(t,e,o){var n=e[0],r=e[1],a=e[2];return t[0]=n*o[0]+r*o[3]+a*o[6],t[1]=n*o[1]+r*o[4]+a*o[7],t[2]=n*o[2]+r*o[5]+a*o[8],t}});var T5=bt((tz,A5)=>{A5.exports=dS;function dS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*n+i*a-c*r,v=f*r+c*n-s*a,h=f*a+s*r-i*n,u=-s*n-i*r-c*a;return t[0]=l*f+u*-s+v*-c-h*-i,t[1]=v*f+u*-i+h*-s-l*-c,t[2]=h*f+u*-c+l*-i-v*-s,t}});var L5=bt((ez,z5)=>{z5.exports=pS;function pS(t,e,o,n){var r=o[1],a=o[2],s=e[1]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=e[0],t[1]=r+s*f-i*c,t[2]=a+s*c+i*f,t}});var R5=bt((oz,N5)=>{N5.exports=vS;function vS(t,e,o,n){var r=o[0],a=o[2],s=e[0]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var O5=bt((nz,C5)=>{C5.exports=mS;function mS(t,e,o,n){var r=o[0],a=o[1],s=e[0]-r,i=e[1]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var I5=bt((rz,P5)=>{P5.exports=gS;var ss=Md()();function gS(t,e,o,n,r,a){var s,i;for(e||(e=3),o||(o=0),n?i=Math.min(n*e+o,t.length):i=t.length,s=o;s<i;s+=e)ss[0]=t[s],ss[1]=t[s+1],ss[2]=t[s+2],r(ss,ss,a),t[s]=ss[0],t[s+1]=ss[1],t[s+2]=ss[2];return t}});var F5=bt((az,$5)=>{$5.exports={EPSILON:_d(),create:Md(),clone:px(),angle:wx(),fromValues:kd(),copy:Mx(),set:Sx(),equals:Ax(),exactEquals:zx(),add:Nx(),subtract:Td(),sub:Ox(),multiply:zd(),mul:$x(),divide:Ld(),div:Dx(),min:Hx(),max:Ux(),floor:Wx(),ceil:Xx(),round:Kx(),scale:Zx(),scaleAndAdd:t5(),distance:Nd(),dist:n5(),squaredDistance:Rd(),sqrDist:s5(),length:Cd(),len:l5(),squaredLength:Od(),sqrLen:u5(),negate:p5(),inverse:m5(),normalize:Sd(),dot:Ed(),cross:x5(),lerp:b5(),random:_5(),transformMat4:k5(),transformMat3:E5(),transformQuat:T5(),rotateX:L5(),rotateY:R5(),rotateZ:O5(),forEach:I5()}});var G5=bt((sz,D5)=>{"use strict";function q5(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(n=>n(o))}}}D5.exports=function(e){let o=e.ownerDocument||document,n=q5(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let v=l.call(e);v&&v.catch&&v.catch(()=>{})}catch(v){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=q5(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||e).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var W5=bt((lz,j5)=>{"use strict";var Zs=Qi(),Js=F5(),xS=G5(),iz=Math.PI/4,cz=Math.PI/6,H5=2,yS=1,bS=2.4,wS=2.4,_S=1e3,MS=5,kS=7,Pd=mr().C,Vl=[[7,1.6],[7,Pd.zc],[Pd.x1-2.95,Pd.zc]],is=Vl.slice(1).map((t,e)=>{let o=Vl[e],n=t[0]-o[0],r=t[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Id=is.reduce((t,e)=>t+e.len,0);function B5(t){let e=Math.max(0,Math.min(Id,t));for(let n of is){if(e<=n.len)return[n.a[0]+n.dir[0]*e,n.a[1]+n.dir[1]*e];e-=n.len}let o=Vl[Vl.length-1];return[o[0],o[1]]}function SS(t){let e=0;for(let n=0;n<is.length;n++){let r=is[n],a=e+r.len;if(t<a-1e-4||n===is.length-1){let s=r.dir,c=t<=e+1e-4&&n>0?is[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=is[is.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var ES=Math.PI/4,AS=7,TS=140,zS=70,U5=(t,e,o)=>(1-t)*e+t*o,LS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;j5.exports=function({getGridSegments:t,getGridParts:e},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[kS,H5,Vl[0][1]],c=0,f=1,l=0,v=[.707,0,.707],h=[0,1,0],u=[0,0,0],d=.5,p=Zs.identity([]),m=Zs.identity([]),g=!1,x=[0,0,0],b=[0,0,0],w=1,_=!1;let M=ee=>{n[1]+=ee*ES},A=(ee,be,Pe)=>{if(ee=Math.max(Math.min(ee,100),-100),be=Math.max(Math.min(be,100),-100),n[0]=0,_){a=0;return}for(a+=ee;a>=Pe;)M(1),a-=Pe;for(;a<=-Pe;)M(-1),a+=Pe};xS(document.body).on("attain",ee=>{ee.on("data",be=>{A(be.dx,be.dy,TS)})});let R=null,B=null,D=0,Z={x:0,y:0},P=58,j=document.createElement("div");j.id="museum-mobile-controls",j.innerHTML=`

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
	`,document.body.appendChild(j);let H=j.querySelector("#museum-joystick"),J=j.querySelector("#museum-joystick-knob"),V=()=>{J.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},st=ee=>{let be=ee.clientX-Z.x,Pe=ee.clientY-Z.y,ao=Math.hypot(be,Pe);if(ao>P&&(be=be/ao*P,Pe=Pe/ao*P),J.style.transform=`translate(
				calc(-50% + ${be}px),
				calc(-50% + ${Pe}px)
			)`,ao<10){s[0]=0,s[2]=0;return}let Ie=be/P,we=Pe/P;s[0]=0,s[2]=Math.abs(we)>.15?we:0},et=(ee,be)=>{for(let Pe=0;Pe<ee.length;Pe++)if(ee[Pe].identifier===be)return ee[Pe];return null},mt=ee=>!!(ee&&ee.closest&&ee.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Dt=ee=>{if(!mt(ee.target)&&(ee.cancelable&&ee.preventDefault(),!_))for(let be=0;be<ee.changedTouches.length;be++){let Pe=ee.changedTouches[be];if(R===null&&Pe.clientX<window.innerWidth*.48){R=Pe.identifier;let ao=H.getBoundingClientRect();Z.x=ao.left+ao.width/2,Z.y=ao.top+ao.height/2,st(Pe)}else B===null&&Pe.clientX>=window.innerWidth*.48&&(B=Pe.identifier,D=Pe.clientX,a=0)}},ne=ee=>{if(mt(ee.target)||(ee.cancelable&&ee.preventDefault(),_))return;let be=R===null?null:et(ee.touches,R);be&&st(be);let Pe=B===null?null:et(ee.touches,B);if(Pe){let ao=Pe.clientX-D;D=Pe.clientX,A(ao,0,zS)}},Se=ee=>{if(!mt(ee.target)){ee.cancelable&&ee.preventDefault();for(let be=0;be<ee.changedTouches.length;be++){let Pe=ee.changedTouches[be];Pe.identifier===R&&(R=null,V()),Pe.identifier===B&&(B=null)}}};document.addEventListener("touchstart",Dt,{passive:!1}),document.addEventListener("touchmove",ne,{passive:!1}),document.addEventListener("touchend",Se,{passive:!1}),document.addEventListener("touchcancel",Se,{passive:!1});let Zt=document.createElement("style");Zt.textContent=`

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
	`,document.head.appendChild(Zt);var Ue={};let yo=ee=>{if(ee.defaultPrevented||ee.ctrlKey||ee.altKey||ee.metaKey)return;let be=ee.type==="keydown";Ue[ee.code]=be,be&&!ee.repeat&&!_&&((ee.code==="KeyA"||ee.code==="ArrowLeft")&&M(-1),(ee.code==="KeyD"||ee.code==="ArrowRight")&&M(1)),g=!1;let Pe=Ue.KeyW||Ue.ArrowUp?1:0;s=[0,0,(Ue.KeyS||Ue.ArrowDown?1:0)-Pe],ee.preventDefault()};window.addEventListener("keydown",yo),window.addEventListener("keyup",yo);var Bo=0;return{pos:i,fmouse:r,forward:v,up:h,setPaused:ee=>{_=!!ee,_&&(s[0]=0,s[2]=0,V())},place:(ee,be)=>{c=Math.max(0,Math.min(Id,ee));let Pe=B5(c);i[0]=Pe[0],i[2]=Pe[1],n[1]=be,r[1]=be,a=0,f=1},view:()=>p,proj:()=>(Zs.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:ee})=>{let be=ee-Bo;Bo=ee;let Pe=[0,0,0],ao=[];Js.set(v,Math.sin(r[1]),0,-Math.cos(r[1])),Js.set(h,0,1,0);let _o=g?wS:bS,Ie=Math.sin(n[1]),we=-Math.cos(n[1]),_t=SS(c),le=Ie*_t.ahead[0]+we*_t.ahead[1],$e=Ie*_t.back[0]+we*_t.back[1],me=f;Math.max(le,$e)>.3&&(me=le>=$e?1:-1);let Jt=_?0:-s[2]*_o;l+=(Jt-l)*(1-Math.exp(-Math.min(be,.1)*5.5)),Jt===0&&Math.abs(l)<.01&&(l=0);let So=l*me*Math.min(be,.1);_&&(s[0]=0,s[2]=0,So=0,l=0),So!==0&&(f=Math.sign(So)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Id,c+So));let S=B5(c);Js.set(u,S[0]-i[0],0,S[1]-i[2]);let co=Js.len(u);co===0&&d!==.25&&(d=(Math.abs((d+.5)%1-.5)-.25)*.8+.25,(d+.01)%.25<.02&&(d=.25));let Je=d;if(d+=co/(g?MS:_S),i[1]=H5,Js.add(i,i,u),w<1){w+=be/yS,w=Math.min(w,1);let Eo=LS(w);Js.set(i,U5(Eo,x[0],b[0]),i[1],U5(Eo,x[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(be,.1)*AS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),Zs.identity(p),Zs.rotateX(p,p,0),Zs.rotateY(p,p,r[1]),Zs.translate(p,p,Js.scale(Pe,i,-1))}}}});var Y5=bt((fz,X5)=>{"use strict";var{skylightGLSL:NS,Z_START:RS,Z_END:CS,GLASS_Y:OS}=qi(),{oculusGLSL:PS,A:ti}=M0(),{windowLightGLSL:IS,C:Wh}=mr(),{doorLightGLSL:$S}=qa(),Vh=er(),Xl=bh(),V5=Fs(),A0=t=>t.toFixed(4),$d=.1,Fd=700,bc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function FS(t,e){let o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],h=e[10],u=e[11],d=e[12],p=e[13],m=e[14],g=e[15],x=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,A=r*f-a*c,I=l*p-v*d,R=l*m-h*d,B=l*g-u*d,D=v*m-h*p,Z=v*g-u*p,P=h*g-u*m,j=x*P-b*Z+w*D+_*B-M*R+A*I;return j?(j=1/j,t[0]=(i*P-c*Z+f*D)*j,t[1]=(r*Z-n*P-a*D)*j,t[2]=(p*A-m*M+g*_)*j,t[3]=(h*M-v*A-u*_)*j,t[4]=(c*B-s*P-f*R)*j,t[5]=(o*P-r*B+a*R)*j,t[6]=(m*w-d*A-g*b)*j,t[7]=(l*A-h*w+u*b)*j,t[8]=(s*Z-i*B+f*I)*j,t[9]=(n*B-o*Z-a*I)*j,t[10]=(d*M-p*w+g*x)*j,t[11]=(v*w-l*M-u*x)*j,t[12]=(i*R-s*D-c*I)*j,t[13]=(o*D-n*R+r*I)*j,t[14]=(p*b-d*_-m*x)*j,t[15]=(l*_-v*b+h*x)*j,t):null}function qS(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)t[r]=n[r];return t}var DS=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;X5.exports=(t,e)=>{let o=!!e.isPhone,n=t.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>e.post>=2?2:4,s=et=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},et||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),f=n?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:f||!0}),v=[i(),i()],h=[i(),i()],u=[i(),i()],d=[i(),i()],p=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},w=(et,mt,Dt)=>t(Object.assign({vert:DS,frag:et,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:mt,framebuffer:t.prop("out")},Dt||{})),_=[2.6,0,RS-3.2,12.6,OS,CS+.4],M=[ti.x0-.2,0,ti.z0,ti.x1,ti.domeTop,ti.z1],A=[Wh.x0,0,Wh.z0,Wh.x1,7.6,Wh.z1],I=[.35,0,.35,13.65,7.6,9],R=V5.AIR_BOX,B=et=>`vec3(${A0(et[0])}, ${A0(et[1])}, ${A0(et[2])}), vec3(${A0(et[3])}, ${A0(et[4])}, ${A0(et[5])})`,D=w(`
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

	${NS()}
	${PS()}
	${IS()}
	${$S()}
	${V5.sunGLSL()}

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
					if (p.y < ${A0(ti.dome.base)} && p.x > ${A0(ti.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${B(A)});
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
	}`,{depthTex:()=>f,invVP:()=>p,eye:()=>g,time:t.context("time"),night:()=>Vh.night,strength:()=>Z,strength5:()=>P}),Z=[0,0,0,0],P=0;function j(){let et=bc.shafts*x.shafts,mt=Vh.night;return Z[0]=Xl.box(_)?.06*et*(1+.9*mt):0,Z[1]=Xl.box(M,!1,"court")?.1*et*(1+.9*mt):0,Z[2]=Xl.box(A)?.07*et*(1+.4*mt):0,Z[3]=Xl.box(I)?.04*et*(1-.75*mt):0,Xl.zone==="studio"?(Z[0]=Z[1]=Z[2]=Z[3]=0,P=.03*et*(1+1.3*mt)):P=0,Z[0]+Z[1]+Z[2]+Z[3]+P>5e-4}let H=w(`
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
	}`,{src:t.prop("src"),dir:(et,mt)=>[mt.dir[0]/mt.size[0],mt.dir[1]/mt.size[1]]}),J=w(`
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
	}`,{src:t.prop("src"),texel:(et,mt)=>[.5/mt.size[0],.5/mt.size[1]],threshold:t.prop("threshold")}),V=w(`
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
		return 2.0 * ${A0($d)} * ${A0(Fd)} / (${A0(Fd+$d)} - z * ${A0(Fd-$d)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>v[0],bloomA:()=>h[0],bloomB:()=>u[0],shafts:()=>d[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>bc.exposure*x.exposure,vignette:()=>Math.min(1,bc.vignette+x.vignette+.22*Vh.night),night:()=>Vh.night,grain:()=>bc.grain,bloomK:()=>bc.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>e.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:n?1:0},{framebuffer:null}),st=t({framebuffer:()=>l});return{shot:x,look:bc,hasDepth:n,capture(et,mt,Dt){let ne=Math.max(.4,Math.min(1,e.scale||1)),Se=Math.max(2,Math.round(et.drawingBufferWidth*ne/2)*2),Zt=Math.max(2,Math.round(et.drawingBufferHeight*ne/2)*2);(l.width!==Se||l.height!==Zt)&&l.resize(Se,Zt);let Ue=Math.max(1,Math.ceil(Se/2)),yo=Math.max(1,Math.ceil(Zt/2));v.forEach(Bo=>Bo.resize(Ue,yo)),h.forEach(Bo=>Bo.resize(Math.max(1,Math.ceil(Se/4)),Math.max(1,Math.ceil(Zt/4)))),u.forEach(Bo=>Bo.resize(Math.max(1,Math.ceil(Se/8)),Math.max(1,Math.ceil(Zt/8)))),d.forEach(Bo=>Bo.resize(Math.max(1,Math.ceil(Se/a())),Math.max(1,Math.ceil(Zt/a())))),qS(m,mt.proj,mt.view),FS(p,m),g[0]=mt.eye[0],g[1]=mt.eye[1],g[2]=mt.eye[2],st(()=>{t.clear({color:[0,0,0,1],depth:1}),Dt()})},present(){let et=mt=>[mt.width,mt.height];n&&e.post>=1&&j()?(D({out:d[0]}),H({out:d[1],src:d[0],dir:[1,0],size:et(d[0])}),H({out:d[0],src:d[1],dir:[0,1],size:et(d[0])})):t.clear({color:[0,0,0,1],framebuffer:d[0]}),J({out:v[0],src:c,size:[l.width,l.height],threshold:0}),H({out:v[1],src:v[0],dir:[1,0],size:et(v[0])}),H({out:v[0],src:v[1],dir:[0,1],size:et(v[0])}),J({out:h[0],src:v[0],size:et(v[0]),threshold:.42}),H({out:h[1],src:h[0],dir:[1,0],size:et(h[0])}),H({out:h[0],src:h[1],dir:[0,1],size:et(h[0])}),J({out:u[0],src:h[0],size:et(h[0]),threshold:0}),H({out:u[1],src:u[0],dir:[1.5,0],size:et(u[0])}),H({out:u[0],src:u[1],dir:[0,1.5],size:et(u[0])}),V({out:null})}}}});var ty=bt((hz,J5)=>{"use strict";var K5=er().GLSL,GS=Ls(),qd=qa(),{C:HS,FAR_DOOR:BS}=mr(),US=100*Math.PI/180,Q5=t=>[BS.x-t[2],t[1],HS.zc-7+t[0]],Z5=t=>[-t[2],t[1],t[0]];function jS(t){let e=[],o=[],n=[],r=[],a=GS.createBuilder(e,o,n,r);qd.addFrames(a,t);let s=qd.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:n,glass:s}}J5.exports=t=>{let e=qd.DOOR,o=["left","right"].map(l=>{let v=jS(l),h=v.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:v.position.map(u=>u.slice()),srcN:v.normal.map(u=>u.slice()),srcG:v.glass.map(u=>u.slice()),pos:t.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(v.elements),type:"uint32"}),glassCount:v.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(v.glass.length*3),outGN:new Float32Array(v.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let v of o){let h=v.sign*l,u=Math.cos(h),d=Math.sin(h),p=x=>{let b=x[0]-v.hinge,w=x[2];return[v.hinge+b*u+w*d,x[1],-b*d+w*u]},m=x=>[x[0]*u+x[2]*d,x[1],-x[0]*d+x[2]*u];v.src.forEach((x,b)=>{let w=Q5(p(x));v.outP.set(w,b*3),v.outN.set(Z5(m(v.srcN[b])),b*3)});let g=Z5(m([0,0,1]));v.srcG.forEach((x,b)=>{v.outG.set(Q5(p(x)),b*3),v.outGN.set(g,b*3)}),v.pos.subdata(v.outP),v.nrm.subdata(v.outN),v.gpos.subdata(v.outG),v.gnrm.subdata(v.outGN)}}}r(0);let a=`
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
		${K5}
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
		${K5}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*US);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var oy=bt((uz,ey)=>{"use strict";var WS=er().GLSL,{skylightGLSL:VS}=qi(),{oculusGLSL:XS}=M0(),{windowLightGLSL:YS}=mr(),j0=.22;function KS(){let t=[],e=[],o=[],n=[],s=(l,v)=>{let h=j0*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(v>0?1.06:.94),u=l*j0-j0*.12,d=v*h,p=Math.abs(v)*h*.42-.14*l*l*j0;p+=Math.sin(l*17+(v>0?0:2.1))*.012*j0*v*v;let m=(l-.3)*.55,g=Math.cos(m),x=Math.sin(m),b=p*g-d*x,w=p*x+d*g;return[u,b,w+.05*j0*l*l]},i=(l,v)=>{let u=s(Math.min(1,l+.01),v),d=s(Math.max(0,l-.01),v),p=s(l,Math.min(1,v+.01)),m=s(l,Math.max(-1,v-.01)),g=[u[0]-d[0],u[1]-d[1],u[2]-d[2]],x=[p[0]-m[0],p[1]-m[1],p[2]-m[2]],b=[x[1]*g[2]-x[2]*g[1],x[2]*g[0]-x[0]*g[2],x[0]*g[1]-x[1]*g[0]],w=Math.hypot(b[0],b[1],b[2])||1,_=b[1]<0?-1:1;return[b[0]/w*_,b[1]/w*_,b[2]/w*_]};for(let l=0;l<=18;l++){let v=l/18;for(let h=0;h<=5*2;h++){let u=h/5-1;t.push(s(v,u)),e.push(i(Math.min(.97,Math.max(.03,v)),u)),o.push([v,u])}}let c=5*2+1;for(let l=0;l<18;l++)for(let v=0;v<c-1;v++){let h=l*c+v,u=h+1,d=h+c,p=d+1;n.push([h,d,u],[u,d,p])}let f=t.length;return t.push([-j0*.12,0,-.003],[-j0*.12,0,.003],[-j0*.24,-.01,.0015],[-j0*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:n}}ey.exports=t=>{let e=KS(),o=t({vert:`
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
		${WS}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${VS()}
		${XS()}
		${YS()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),n=er(),r=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(j0*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var ay=bt((dz,ry)=>{"use strict";var{skylightGLSL:QS,Z_START:ny,Z_END:ZS}=qi(),{oculusGLSL:JS,A:wc}=M0(),{windowLightGLSL:tE,C:ei}=mr();ry.exports=(t,e)=>{let o=e.isPhone?900:2600,n=e.isPhone?350:900,r=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=ei.x0+.6,f=ei.x1-.3,l=[];for(let d=0;d<o;d++)l.push([2.5+i()*10.5,.3+i()*8,ny-3.5+i()*(ZS-ny+4.5),i()]);for(let d=0;d<n;d++)l.push([wc.x0+.3+i()*(wc.x1-wc.x0-.6),.3+i()*7.5,wc.z0+.3+i()*(wc.z1-wc.z0-.6),i()]);for(let d=0;d<r;d++)l.push([c+i()*(f-c),.2+i()*5.6,ei.z0+.25+i()*(ei.z1-ei.z0-.5),i()]);let v=d=>d.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],u=t({vert:`
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

		${QS()}
		${JS()}
		${tE()}

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
				p.x = ${v(c)} + mod(p.x - ${v(c)} - gust.x * (0.55 + 0.9 * seed.w), ${v(f-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${v(ei.z0+.1)}, ${v(ei.z1-.1)});
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
			float size = sharp + blur * ${v(a)} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:d=>d.viewportHeight*.006,focus:(d,p)=>p&&p.focus||6,aperture:(d,p)=>p&&p.aperture||0,wake0:(d,p)=>(p&&p.wake||h)[0],wake1:(d,p)=>(p&&p.wake||h)[1],wake2:(d,p)=>(p&&p.wake||h)[2],wake3:(d,p)=>(p&&p.wake||h)[3],wakeDir:(d,p)=>p&&p.wakeDir||[0,0,1],gust:(d,p)=>p&&p.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return d=>u(d||{})}});var hy=bt((pz,fy)=>{"use strict";var{C:ly}=mr(),sy=er(),iy=15.3,eE=37.1,cy=ly.z1+.9,oE=ly.z1+.7+16-.6;fy.exports=(t,e)=>{let o=e.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([iy+r()*(eE-iy),l,cy+r()*(oE-cy),r()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>sy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){sy.night>.01&&c()}}});var Kh=bt((vz,u0)=>{"use strict";var uy=er(),ca=ja(),nE=Qi(),ls=Math.PI,ve=t=>(+t).toFixed(4),W0=t=>`vec3(${ve(t[0])}, ${ve(t[1])}, ${ve(t[2])})`,Ko={x0:-2.05,z0:41.45,z1:47.55,top:5.1},ko=-.55,Xn=-2,hn=42.25,Pn=43.65,L0=45.35,qr=46.75,ar=2.75,f0=.12,rE=(ko+Xn)/2,Fo={x:-1.3,y:1.42,w:.42,h:.52,z:Pn,cell:.026},Be={x0:-1.85,x1:-.75,top:.98,z0:Pn-.3,z1:Pn-.02},T0={x0:-1.44,x1:-1.16,y0:Be.top-.002,y1:Be.top+.018},h0={cx:-1.3,cz:Pn-.165,w:.2,d:.255,y:Be.top+.0012},pr={x:-1.03,z:Pn-.14,r:.042,h:.075},Jo={x:-.86,z:Pn-.12,h:.085,r:.019};Jo.flame=[Jo.x,Be.top+.012+Jo.h+.028,Jo.z];var Yh={a:[pr.x-.004,Be.top+.03,pr.z+.004],b:[pr.x-.13,Be.top+.34,pr.z-.12]},un=[-1.5,2.42,44.66],On=[-1.78,1.95,hn+.09],z0={x:-1.32,z:44.08,y:.64,heading:.32},vy={window:{eye:[-1.3,1.33,42.8],target:[Fo.x,1.37,Pn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[h0.cx,Be.top,h0.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Sr={z0:(hn+Pn)/2+.03,z1:(hn+Pn)/2+.56,y0:.98,y1:1.78,x:ko+.03,cell:.047};vy.peek={eye:[-1.2,1.42,42.95],target:[ca.PLAY.stoolX-ca.OFF[0],.85,ca.PLAY.keyFront+.2],fov:30};var cs={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function dy(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${ve(Fo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${W0(un)};
		if (d.z > -0.001) return 0.0;
		float t = (${ve(Fo.z)} - ${ve(un[2])}) / d.z;
		vec2 g = (${W0(un)} + d * t).xy - vec2(${ve(Fo.x)}, ${ve(Fo.y)});
		float inWin = (1.0 - smoothstep(${ve(Fo.w/2-.01)}, ${ve(Fo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${ve(Fo.h/2-.01)}, ${ve(Fo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${ve(Fo.z)}) / abs(${ve(Fo.z)} - ${ve(un[2])}) / ${ve(Fo.cell)};
		vec2 qc = fract(g / ${ve(Fo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${W0(Jo.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${ve(pr.x)}, ${ve(pr.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${ve(pr.x)}, ${ve(pr.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${ve(pr.r*.7)}, ${ve(pr.r*1.6)}, r)) * (1.0 - smoothstep(${ve(Be.top+pr.h*.8)}, ${ve(Be.top+pr.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${W0(Yh.a)}, qb = ${W0(Yh.b)};
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
		bool inB1 = p.z < ${ve(Pn)} && p.z > ${ve(hn-.04)} && p.x < ${ve(ko+.02)};
		bool inPriest = p.z >= ${ve(Pn)} && p.z < ${ve(L0)} && p.x < ${ve(ko)};
		bool inB2 = p.z >= ${ve(L0)} && p.z < ${ve(qr+.04)} && p.x < ${ve(ko)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${ve(Xn)}, ${ve(ko)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${ve(Ko.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${W0(ca.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${W0(un)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${W0(On)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${W0(Jo.flame)} - p;
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
	}`}var Vn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function my(){let t=[],e=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(f,l,v,h)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(v),n.push(h?h[0]:0,h?h[1]:0),t.length/3-1),c.quad=(f,l,v,h,u,d)=>{let p=i(s(a(l,f),a(h,f)));d=d||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,p,u,d[0]),g=c.v(l,p,u,d[1]),x=c.v(v,p,u,d[2]),b=c.v(h,p,u,d[3]);r.push(m,g,x,m,x,b)},c.box=(f,l,v,h,u,d,p)=>{let m=(g,x,b,w,_,M,A,I)=>c.quad(g,x,b,w,p,[[_,A],[M,A],[M,I],[_,I]]);m([h,l,v],[h,l,d],[h,u,d],[h,u,v],v,d,l,u),m([f,l,d],[f,l,v],[f,u,v],[f,u,d],d,v,l,u),m([f,u,v],[h,u,v],[h,u,d],[f,u,d],f,h,v,d),m([f,l,d],[h,l,d],[h,l,v],[f,l,v],f,h,d,v),m([f,l,d],[h,l,d],[h,u,d],[f,u,d],f,h,l,u),m([h,l,v],[f,l,v],[f,u,v],[h,u,v],h,f,l,u)},c.tube=(f,l,v,h)=>{h=h||6;let u=t.length/3;for(let d=0;d<f.length;d++){let p=f[Math.max(0,d-1)],m=f[Math.min(f.length-1,d+1)],g=i(a(m,p)),x=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=i(s(g,x)),w=s(b,g),_=typeof l=="function"?l(d/(f.length-1)):l;for(let M=0;M<=h;M++){let A=M/h*ls*2,I=Math.cos(A),R=Math.sin(A),B=[b[0]*I+w[0]*R,b[1]*I+w[1]*R,b[2]*I+w[2]*R];c.v([f[d][0]+B[0]*_,f[d][1]+B[1]*_,f[d][2]+B[2]*_],B,v,[d/(f.length-1),M/h])}}for(let d=0;d<f.length-1;d++)for(let p=0;p<h;p++){let m=u+d*(h+1)+p,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,v,h,u)=>{u=u||20;let d=t.length/3;for(let p=0;p<v.length;p++){let[m,g]=v[p],x=v[Math.max(0,p-1)],b=v[Math.min(v.length-1,p+1)],w=b[0]-x[0],_=b[1]-x[1];for(let M=0;M<=u;M++){let A=M/u*ls*2,I=Math.cos(A),R=Math.sin(A),B=i([_*I,-w,_*R]);c.v([f+I*m,g,l+R*m],B,h,[M/u,p/(v.length-1)])}}for(let p=0;p<v.length-1;p++)for(let m=0;m<u;m++){let g=d+p*(u+1)+m,x=g+u+1;r.push(g,x,g+1,g+1,x,x+1)}},c.spire=(f,l,v,h,u,d)=>{let p=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=p[m],x=p[(m+1)%4],b=[f+g[0],v,l+g[1]],w=[f+x[0],v,l+x[1]],_=[f,u,l],M=i(s(a(_,b),a(w,b))),A=c.v(b,M,d,[0,0]),I=c.v(w,M,d,[1,0]),R=c.v(_,M,d,[.5,1]);r.push(A,R,I)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,v,h]=[r[f],r[f+1],r[f+2]],u=m=>[t[m*3],t[m*3+1],t[m*3+2]],d=s(a(u(v),u(l)),a(u(h),u(l))),p=[0,1,2].map(m=>e[l*3+m]+e[v*3+m]+e[h*3+m]);d[0]*p[0]+d[1]*p[1]+d[2]*p[2]<0&&(r[f+1]=h,r[f+2]=v)}return c},c}function Xh(t,e,o,n){if(t<=e)return o;let r=t-e;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var ln={ys:1.78,a:.56,r:.78};ln.apex=ln.ys+Math.sqrt(ln.r*ln.r-(ln.r-ln.a)*(ln.r-ln.a));function aE(){let t=my(),e=Vn.WOOD,o=Vn.CARVED,n=Vn.DARKWOOD,r=.06;t.box(Xn,0,hn,ko+.08,f0,qr,n),t.box(Xn,ar-.06,hn-.04,ko+.1,ar,qr+.04,e),t.box(ko,ar-.2,hn-.06,ko+.12,ar-.06,qr+.06,e),t.box(ko+.02,ar,hn-.08,ko+.14,ar+.07,qr+.08,n),t.box(Xn,f0,hn,Xn+.04,ar-.06,qr,e);for(let[l,v,h]of[[hn-r,hn,-1],[qr,qr+r,1]]){t.box(Xn,0,l,ko+.08,ar,v,e);let u=h<0?l-.018:v;t.box(Xn+.18,.45,Math.min(u,u+.018),ko-.12,2.35,Math.max(u,u+.018),n),t.box(Xn+.26,.55,Math.min(u,u+.03*h),ko-.2,2.25,Math.max(u,u+.03*h),e)}{let l=Pn-.02,v=Pn+.02,h=Fo.x-Fo.w/2,u=Fo.x+Fo.w/2,d=Fo.y-Fo.h/2,p=Fo.y+Fo.h/2;t.box(Xn,f0,l,ko,T0.y0,v,e),t.box(Xn,T0.y0,l,T0.x0,T0.y1,v,e),t.box(T0.x1,T0.y0,l,ko,T0.y1,v,e),t.box(Xn,T0.y1,l,ko,d,v,e),t.box(Xn,d,l,h,p,v,e),t.box(u,d,l,ko,p,v,e),t.box(Xn,p,l,ko,ar-.06,v,e);let m=.05,g=l-.025;t.box(h-m,d-m,g,u+m,d,l,n),t.box(h-m,p,g,u+m,p+m,l,n),t.box(h-m,d,g,h,p,l,n),t.box(u,d,g,u+m,p,l,n),t.box(h-m-.02,p+m,g-.015,u+m+.02,p+m+.03,l,e),t.box(T0.x0-.01,T0.y1,l-.006,T0.x1+.01,T0.y1+.008,l,Vn.BRASS)}{let l=Sr,v=ko+.008,h=ko+.052;t.box(v,l.y0,l.z0-.035,h,l.y1,l.z0,n),t.box(v,l.y0,l.z0,h,l.y0+.04,l.z1,n),t.box(v,l.y1-.04,l.z0,h,l.y1,l.z1,n),t.box(v+.008,f0,l.z0-.035,h-.008,l.y0,l.z1,e),t.box(h-.008,f0+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),t.box(v-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,Vn.BRASS)}t.box(Xn,f0,L0-.02,ko,ar-.06,L0+.02,e),t.box(Be.x0,Be.top-.035,Be.z0,Be.x1,Be.top,Be.z1,e),t.tube([[Be.x0,Be.top-.018,Be.z0],[Be.x1,Be.top-.018,Be.z0]],.02,e,8);for(let l of[Be.x0+.1,Be.x1-.1]){let v=[];for(let h=0;h<=8;h++){let u=h/8;v.push([l,Be.top-.04-.22*u,Be.z1-.02-.22*Math.cos(u*ls/2)])}t.tube(v,.018,n,6)}t.box(Xn+.06,.12,hn,ko-.1,.44,hn+.42,n),t.box(Xn+.08,.44,hn+.01,ko-.12,.52,hn+.41,Vn.CUSHION),t.box(Xn+.06,.12,qr-.42,ko-.1,.44,qr,n),t.box(On[0]-.05,On[1]-.16,hn,On[0]+.05,On[1]-.02,hn+.012,Vn.BRASS),t.tube([[On[0],On[1]-.09,hn+.012],[On[0],On[1]-.09,On[2]-.01],[On[0],On[1]-.05,On[2]]],.006,Vn.BRASS,6),t.lathe(On[0],On[2],[[0,On[1]-.05],[.028,On[1]-.035],[.034,On[1]+.01],[.024,On[1]+.06],[.026,On[1]+.065]],Vn.LAMPGLASS,16),t.box(z0.x-.22,.12,z0.z-.24,z0.x+.22,z0.y-.05,z0.z+.16,n),t.box(z0.x-.24,z0.y-.05,z0.z-.26,z0.x+.24,z0.y,z0.z+.18,Vn.CUSHION),t.tube([[un[0],ar-.06,un[2]],[un[0],un[1]+.07,un[2]]],.005,Vn.BRASS,5),t.lathe(un[0],un[2],[[0,un[1]+.09],[.03,un[1]+.08],[.02,un[1]+.06]],Vn.BRASS,12),t.lathe(un[0],un[2],[[0,un[1]-.06],[.035,un[1]-.04],[.045,un[1]],[.035,un[1]+.05],[.018,un[1]+.07]],Vn.LAMPGLASS,16);let a=ko,s=ko+r;function i(l,v,h){let u=(l+v)/2,d=40,p=[];for(let g=0;g<=d;g++)p.push(f0+(ar-.2-f0)*g/d);let m=[];p.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(ln.ys+(ln.apex-ln.ys)*g/24);m.sort((g,x)=>g-x);for(let g=0;g<m.length-1;g++){let x=m[g],b=m[g+1];if(b-x<1e-4)continue;let w=h?Xh(x,ln.ys,ln.a,ln.r):0,_=h?Xh(b,ln.ys,ln.a,ln.r):0,M=(A,I)=>[A,I];t.quad([s,x,u-w],[s,x,l],[s,b,l],[s,b,u-_],e,[M(u-w,x),M(l,x),M(l,b),M(u-_,b)]),t.quad([s,x,v],[s,x,u+w],[s,b,u+_],[s,b,v],e,[M(v,x),M(u+w,x),M(u+_,b),M(v,b)]),(w>0||_>0)&&(t.quad([a,x,u-w],[s,x,u-w],[s,b,u-_],[a,b,u-_],n),t.quad([s,x,u+w],[a,x,u+w],[a,b,u+_],[s,b,u+_],n),t.quad([a,x,l],[a,x,u-w],[a,b,u-_],[a,b,l],e),t.quad([a,x,u+w],[a,x,v],[a,b,v],[a,b,u+_],e))}if(t.box(a,ar-.2,l,s,ar-.06,v,e),t.box(s,ar-.42,l+.05,s+.012,ar-.24,v-.05,o),h){let g=[];for(let x=0;x<=30;x++){let b=x/30,w=b<.5?f0+(ln.apex-f0)*(b*2):ln.apex-(ln.apex-f0)*((b-.5)*2),_=b<.5?-1:1;g.push([s+.01,Math.min(w,ln.apex-.002),u+_*(Xh(w,ln.ys,ln.a,ln.r)+.03)])}t.tube(g,.022,n,6)}}i(hn,Pn,!0),i(L0,qr,!0);{let l=Pn,v=L0,h=(l+v)/2;t.box(a,f0,l,s,ar-.06,v,e);let u={ys:1.85,a:.55,r:.8},d=[];for(let p=0;p<=40;p++){let m=p/40,g=u.ys+Math.sqrt(u.r*u.r-(u.r-u.a)*(u.r-u.a)),x=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;d.push([s+.012,Math.min(x,g-.002),h+b*Xh(x,u.ys,u.a,u.r)])}d.push(d[0]),t.tube(d,.02,n,6),t.box(s,.95,h-.22,s+.015,1.3,h+.22,o),t.box(s,.35,h-.42,s+.01,.75,h+.42,n),t.tube([[s+.03,1.12,v-.13],[s+.06,1.12,v-.13],[s+.06,1.12,v-.2]],.009,Vn.BRASS,6)}[hn-.02,Pn,L0,qr+.02].forEach((l,v)=>{let h=v===1||v===2,u=.075,d=ar+(h?.62:.4);t.box(ko+.06,0,l-u,ko+.06+2*u,d,l+u,e),t.box(ko+.04,d-.04,l-u-.02,ko+.08+2*u,d,l+u+.02,n);let p=ko+.06+u,m=h?.62:.5;t.spire(p,l,d,u*.95,d+m,e);for(let g=1;g<=3;g++){let x=d+m*g/4.2,b=u*.95*(1-g/4.2)+.02;for(let[w,_]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[p+w*(b-.02),x-.02,l+_*(b-.02)],[p+w*(b+.015),x+.03,l+_*(b+.015)]],.008,n,4)}t.lathe(p,l,[[0,d+m-.02],[.03,d+m+.03],[.022,d+m+.07],[0,d+m+.1]],e,10)});let f=(l,v,h)=>{let u=(l+v)/2,d=ko+.075,p=ar+.07,m=p+h,g=[1,0,0],x=t.v([d,p,l],g,o,[l,p]),b=t.v([d,p,v],g,o,[v,p]),w=t.v([d,m,u],g,o,[u,m]);t.idx.push(x,b,w);let _=t.v([d-.04,p,l],[-1,0,0],e),M=t.v([d-.04,p,v],[-1,0,0],e),A=t.v([d-.04,m,u],[-1,0,0],e);t.idx.push(_,A,M);let I=[],R=[];for(let P=0;P<=10;P++){let j=P/10;I.push([d+.02,p+h*j,l+(u-l)*j]),R.push([d+.02,p+h*j,v+(u-v)*j])}t.tube(I,.022,n,6),t.tube(R,.022,n,6);for(let P=2;P<=8;P+=2)for(let j of[I[P],R[P]])t.tube([j,[j[0]+.01,j[1]+.06,j[2]+(j===I[P]?-.02:.02)]],.01,n,4);t.lathe(d,u,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([P,j])=>[P,j]),e,10);let B=Math.min(.17,h*.32),D=p+h*.38,Z=[];for(let P=0;P<=24;P++){let j=P/24*ls*2;Z.push([d+.012,D+Math.sin(j)*B,u+Math.cos(j)*B])}t.tube(Z,.012,n,5)};f(hn-.02,Pn,.52),f(Pn,L0,.82),f(L0,qr+.02,.52),t.lathe(pr.x,pr.z,[[0,Be.top],[.036,Be.top+.001],[pr.r,Be.top+.012],[pr.r*1.02,Be.top+.035],[.036,Be.top+.052],[.02,Be.top+.062],[.016,Be.top+.068]],Vn.INKGLASS,24),t.lathe(pr.x,pr.z,[[.016,Be.top+.064],[.021,Be.top+.066],[.022,Be.top+.075],[.016,Be.top+.076],[0,Be.top+.072]],Vn.BRASS,20);{let l=Yh.a,v=Yh.b,h=26,u=x=>{let b=Math.sin(x*ls)*.025;return[l[0]+(v[0]-l[0])*x+b*.6,l[1]+(v[1]-l[1])*x+b*.4,l[2]+(v[2]-l[2])*x+b]},d=[];for(let x=0;x<=h;x++)d.push(u(x/h));t.tube(d,x=>.0028*(1-.7*x)+6e-4,Vn.QUILL,5);let p=t.norm(t.sub(v,l)),m=t.norm(t.cross(p,[.2,1,.1])),g=t.cross(m,p);for(let x of[-1,1]){let b=t.pos.length/3;for(let w=0;w<=h;w++){let _=w/h,M=u(_),A=_<.28?0:(x>0?.03:.02)*Math.sin(ls*Math.pow((_-.28)/.72,.75)),I=A*.25,R=[M[0]+m[0]*x*A-g[0]*I,M[1]+m[1]*x*A-g[1]*I,M[2]+m[2]*x*A-g[2]*I];t.v(M,g,Vn.QUILL,[_,0]),t.v(R,g,Vn.QUILL,[_,x])}for(let w=0;w<h;w++){let _=b+w*2;t.idx.push(_,_+2,_+1,_+1,_+2,_+3)}}}return t.orient()}function sE(t,e){let n=Ko.top,r=Ko.x0;t(r-.35,0,Ko.z0-.35,r,n+.35,Ko.z1+.35),t(r,0,Ko.z0-.35,-.35,n,Ko.z0),t(r,0,Ko.z1,-.35,n,Ko.z1+.35),t(r,n,Ko.z0,-.35,n+.35,Ko.z1),t(.35,0,Ko.z0-.42,.35+.16,n,Ko.z0),t(.35,0,Ko.z1,.35+.16,n,Ko.z1+.42),t(.35,n,Ko.z0-.5,.35+.18,n+.42,Ko.z1+.5),t(.35,n+.42,Ko.z0-.6,.35+.26,n+.52,Ko.z1+.6),t(.35,0,Ko.z0-.5,.35+.22,.42,Ko.z0),t(.35,0,Ko.z1,.35+.22,.42,Ko.z1+.5),t(-.35-.01,0,Ko.z0,.35+.12,.02,Ko.z1),e(r,Ko.z0,-.35,Ko.z1)}u0.exports=t=>{let e=Ha(),o=uy.GLSL,n=aE(),r=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${ca.roomGLSL()}
	${dy()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(V,st,et,mt){let Dt=[],ne=[],Se=[],Zt=[],Ue=[],ee=ko-.02,be=ln.apex+.08,Pe=f0+.015;for(let ao=0;ao<=40;ao++){let _o=ao/40,Ie=be+(Pe-be)*_o;for(let we=0;we<=90;we++){let _t=we/90,le=et?.2+.13*_o*_o:st-V,$e=V+_t*le,me=et?.05+.02*_o:.035+.01*Math.sin(_t*7),Jt=_t*mt*ls*2+Math.sin(_o*2+_t*5)*.6,So=ee-me*(.5+.5*Math.sin(Jt))-(et?.02*_o:0),co=[1,0,-(-me*.5*Math.cos(Jt)*mt*ls*2/le)],Je=Math.hypot(co[0],co[1],co[2]);Dt.push(So,Ie,$e),ne.push(co[0]/Je,0,co[2]/Je),Se.push(2),Zt.push(Math.sin(Jt),_o)}}for(let ao=0;ao<40;ao++)for(let _o=0;_o<90;_o++){let Ie=ao*91+_o,we=Ie+90+1;Ue.push(Ie,we,Ie+1,Ie+1,we,we+1)}for(let ao=0;ao<Ue.length;ao+=3){let[_o,Ie,we]=[Ue[ao],Ue[ao+1],Ue[ao+2]],_t=Jt=>[Dt[Jt*3],Dt[Jt*3+1],Dt[Jt*3+2]],le=[0,1,2].map(Jt=>_t(Ie)[Jt]-_t(_o)[Jt]),$e=[0,1,2].map(Jt=>_t(we)[Jt]-_t(_o)[Jt]);le[1]*$e[2]-le[2]*$e[1]<0&&(Ue[ao+1]=we,Ue[ao+2]=Ie)}return{pos:Dt,nrm:ne,kind:Se,uv:Zt,idx:Ue}}let c=i(hn+.02,hn+.4,!0,6),f=i(L0+.04,qr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(V=>V+c.pos.length/3))},v=t({vert:`
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
			vec3 p = vec3(${ve(Fo.x)} + corner.x * ${ve(Fo.w/2)}, ${ve(Fo.y)} + corner.y * ${ve(Fo.h/2)}, ${ve(Fo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${ve(Fo.x)}, ${ve(Fo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${ve(Fo.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),u=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${ve(Sr.x)}, ${ve((Sr.y0+Sr.y1)/2)} + corner.y * ${ve((Sr.y1-Sr.y0)/2-.04)}, ${ve((Sr.z0+Sr.z1)/2)} + corner.x * ${ve((Sr.z1-Sr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${ve((Sr.z0+Sr.z1)/2)}, ${ve((Sr.y0+Sr.y1)/2)})) * ${ve(Fo.cell/Sr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${ve(Sr.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),d=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${ve(Fo.x)} + corner.x * 0.75, ${ve(Fo.y)} + corner.y * 0.9, ${ve(L0-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),p=14,m=[];for(let V=0;V<p;V++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(st=>m.push(st[0],st[1],(V+.5)/p));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${ve(rE)} + c.x * ${ve((ko-Xn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${ve(Pn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${dy().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${W0(un)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let V=document.createElement("canvas");V.width=512,V.height=652;let st=V.getContext("2d");st.fillStyle="#cdb38a",st.fillRect(0,0,V.width,V.height);let et=7,mt=()=>(et=et*1664525+1013904223>>>0,et/4294967296);for(let ne=0;ne<2400;ne++){st.fillStyle=`rgba(${mt()<.5?"90,62,30":"245,230,200"},${.03+mt()*.05})`;let Se=mt()*V.width,Zt=mt()*V.height;st.fillRect(Se,Zt,1+mt()*14,1)}for(let ne=0;ne<26;ne++){let Se=mt()*V.width,Zt=mt()*V.height,Ue=20+mt()*90,yo=st.createRadialGradient(Se,Zt,0,Se,Zt,Ue);yo.addColorStop(0,`rgba(120,80,35,${.04+mt()*.06})`),yo.addColorStop(1,"rgba(120,80,35,0)"),st.fillStyle=yo,st.fillRect(Se-Ue,Zt-Ue,Ue*2,Ue*2)}let Dt=st.createRadialGradient(V.width/2,V.height/2,V.width*.3,V.width/2,V.height/2,V.height*.72);return Dt.addColorStop(0,"rgba(110,70,30,0)"),Dt.addColorStop(1,"rgba(110,70,30,0.38)"),st.fillStyle=Dt,st.fillRect(0,0,V.width,V.height),V})(),b=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),_=[18,24],M=[],A=[];for(let V=0;V<=_[1];V++)for(let st=0;st<=_[0];st++)M.push(st/_[0],V/_[1]);for(let V=0;V<_[1];V++)for(let st=0;st<_[0];st++){let et=V*(_[0]+1)+st,mt=et+_[0]+1;A.push(et,et+1,mt,et+1,mt+1,mt)}let I=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${ve(h0.cx+h0.w/2)} - s * ${ve(h0.w)};
			float zNear = ${ve(h0.cz-h0.d/2)};
			vec3 p = vec3(x, ${ve(h0.y)}, zNear + t * ${ve(h0.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${ve(h0.d)};
				float zf = zNear + 0.5 * ${ve(h0.d)};
				p.z = zf - dd * cos(a);
				p.y = ${ve(h0.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${ve(Pn+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(M),size:2}},elements:A,uniforms:{fold:()=>cs.fold,slide:()=>cs.slide,paperTex:b,inkTex:w},cull:{enable:!1}}),R=my();R.lathe(Jo.x,Jo.z,[[0,Be.top],[.048,Be.top+.002],[.052,Be.top+.012],[.046,Be.top+.014],[.022,Be.top+.012],[0,Be.top+.012]],Vn.BRASS,24),R.lathe(Jo.x,Jo.z,[[0,Be.top+.012],[Jo.r,Be.top+.012],[Jo.r*1.02,Be.top+.012+Jo.h*.6],[Jo.r,Be.top+.012+Jo.h],[Jo.r*.75,Be.top+.012+Jo.h-.004],[0,Be.top+.012+Jo.h-.008]],9,20),R.tube([[Jo.x,Be.top+.012+Jo.h-.008,Jo.z],[Jo.x+.001,Be.top+.012+Jo.h+.012,Jo.z]],.0012,8,4),R.orient();let B=t({vert:a,frag:`${r}
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
				float up = smoothstep(${ve(Be.top+Jo.h*.4)}, ${ve(Be.top+.012+Jo.h)}, v_pos.y);
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
			vec3 p = ${W0(Jo.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),Z=[0,0],P=t({uniforms:{view:t.prop("view")}}),j=new Float32Array(16);function H(V){nE.translate(j,V.view,ca.OFF),P({view:j},()=>J(V))}function J(V){let st=V&&V.reflected;if(s(),v(),h(),u(),cs.ink&&cs.inkDirty){let et=cs.ink;Z[0]!==et.width||Z[1]!==et.height?(w({data:et,min:"linear",mag:"linear",flipY:!1}),Z=[et.width,et.height]):w.subimage(et),cs.inkDirty=!1}cs.shown&&I(),uy.night>.01&&(B(),st||(D({halo:1}),D({halo:0}))),st||(d(),g())}return H};u0.exports.addBay=sE;u0.exports.BAY=Ko;u0.exports.OFF=ca.OFF;u0.exports.STATE=cs;var py=t=>[t[0]+ca.OFF[0],t[1]+ca.OFF[1],t[2]+ca.OFF[2]];u0.exports.SHOTS=Object.fromEntries(Object.entries(vy).map(([t,e])=>[t,Object.assign({},e,{eye:py(e.eye),target:py(e.target)})]));u0.exports.SEAT=z0;u0.exports.LAMP=un;u0.exports.SCONCE=On;u0.exports.GRILLE=Fo;u0.exports.PAPER=h0;u0.exports.ZONE={FRONT:ko,BACK:Xn,ZA:hn,ZB:Pn,ZC:L0,ZD:qr}});var Dd=bt((mz,xy)=>{"use strict";function iE(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var gy={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},cE=["th","ng","er"];function lE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=t.getContext("2d"),r={};Object.keys(gy).forEach(p=>{r[p]=gy[p]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(p,m){let g=iE(o.seed),x=o.xh,b={},w=j=>{let H=e[j];if(!H)return null;let J=Math.floor(g()*H.length);return H.length>1&&J===b[j]&&(J=(J+1)%H.length),b[j]=J,H[J]},_=j=>{if(e[j])return{g:w(j),sc:1};let H=j.toLowerCase();return e[H]?{g:w(H),sc:/[A-Z]/.test(j)?1.32:1}:null},M=[],A=.15,I=0,R=0,B=(g()-.5)*.02,D=m/x,Z=p.split(/\n\s*\n/);Z.forEach((j,H)=>{j.replace(/\s+/g," ").trim().split(" ").forEach(V=>{let st=[];for(let ne=0;ne<V.length;ne++){let Se=V.substr(ne,2).toLowerCase();if(cE.indexOf(Se)>=0&&e[Se]&&g()<.55&&V[ne]===V[ne].toLowerCase()){st.push({ch:Se,gl:{g:w(Se),sc:1}}),ne++;continue}let Zt=_(V[ne]);Zt&&Zt.g&&st.push({ch:V[ne],gl:Zt})}let et=st.map(()=>.17+g()*.07),mt=st.reduce((ne,Se,Zt)=>ne+Se.gl.g.w*Se.gl.sc+et[Zt],0);I>0&&I+mt>D&&(I=0,R++,A+=r.line,B=(g()-.5)*.02),st.forEach((ne,Se)=>{let Zt=ne.gl.g,Ue=ne.gl.sc*(.95+g()*.1),yo=(g()-.5)*.06,Bo=(g()-.5)*.08+B*I,ee=I,be=R*o.lineHeight+1.9+Bo,Pe=Math.cos(yo),ao=Math.sin(yo),_o=we=>[(ee+(we[0]*Pe-we[1]*ao)*Ue)*x,(be+(we[0]*ao+we[1]*Pe)*Ue)*x],Ie=(we,_t)=>{let le=0;for(let me=1;me<we.length;me++)le+=Math.hypot(we[me][0]-we[me-1][0],we[me][1]-we[me-1][1]);let $e=Math.max(o.minDur||(_t?.06:.07),le/(o.speed*x));M.push({pts:we,L:le,start:A,dur:$e,dot:_t}),A+=$e};if(Zt.s.forEach((we,_t)=>{_t>0&&(A+=r.stroke),Ie(we.map(_o),!1)}),Zt.dot){let we=Zt.s[0][0];Zt.s.forEach(le=>le.forEach($e=>{$e[1]<we[1]&&(we=$e)}));let _t=_o([we[0]+.1,-1.36]);A+=r.stroke*1.4,Ie([_t,[_t[0]+x*.05,_t[1]+x*.03]],!0)}A+=r.letter*(.6+g()*.8),I+=Zt.w*Ue+et[Se]});let Dt=V[V.length-1];A+=/[.!?]/.test(Dt)?r.stop:/[,;:]/.test(Dt)?r.comma:r.word,I+=.55+g()*.2}),H<Z.length-1&&(I=0,R+=1.6,A+=r.para)});let P=(R+1)*o.lineHeight*x+x*1.55;return{strokes:M,total:A,height:P}}function v(p,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(p*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=p+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,p,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;function u(p,m){let g=f[p.i]||0;if(m<=g)return;let x=o.width*o.xh,b=0;for(let w=1;w<p.pts.length;w++){let _=p.pts[w-1],M=p.pts[w],A=Math.hypot(M[0]-_[0],M[1]-_[1]),I=b,R=b+A;if(b=R,R<=g||A===0)continue;if(I>=m)break;let B=Math.max(0,(g-I)/A),D=Math.min(1,(m-I)/A),Z=[_[0]+(M[0]-_[0])*B,_[1]+(M[1]-_[1])*B],P=[_[0]+(M[0]-_[0])*D,_[1]+(M[1]-_[1])*D],j=(I+R)/2/(p.L||1),H=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,j)));n.lineWidth=x*H,n.globalAlpha=.86+.14*H,n.beginPath(),n.moveTo(Z[0],Z[1]),n.lineTo(P[0],P[1]),n.stroke()}p.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(p.pts[0][0],p.pts[0][1],x*.75,0,Math.PI*2),n.fill()),f[p.i]=m}function d(p){let m=(p-c)/1e3;for(let g=0;g<a.length;g++){let x=a[g];if(x.start>m)break;let b=Math.min(1,(m-x.start)/x.dur);u(x,h(b)*x.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(d):o.onDone&&o.onDone()}return{write(p,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=l(p,g);a=x.strokes,s=x.total;let b=typeof o.maxTime=="function"?o.maxTime(p):o.maxTime;if(b&&s>b){let _=b/s;a.forEach(M=>{M.start*=_,M.dur*=_}),s=b}a.forEach((_,M)=>{_.i=M}),f=[],v(g,x.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(_=>u(_,_.L));return}return c=performance.now(),i=requestAnimationFrame(d),s},finish(){cancelAnimationFrame(i),a.forEach(p=>u(p,p.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}xy.exports=lE});var Hd=bt((gz,yy)=>{"use strict";var Gd=er(),fE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',hE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';yy.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let n=()=>{let r=Gd.isNight;o.innerHTML=r?fE:hE,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Gd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Gd.toggle()}),o}});var My=bt((xz,_y)=>{"use strict";var In=Kh(),uE=ja(),dE=Dd(),pE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",by=100,Ta=t=>Math.max(0,Math.min(1,t)),Zr=(t,e,o)=>{let n=Ta((o-t)/(e-t));return n*n*(3-2*n)},V0=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,N0=(t,e,o)=>t+(e-t)*o,Kl=(t,e,o)=>[N0(t[0],e[0],o),N0(t[1],e[1],o),N0(t[2],e[2],o)];function oi(t,e){let o=t.length-1,n=Ta(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var Qh=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function Bd(t,e,o){return{eye:Kl(t.eye,e.eye,o),target:Kl(t.target,e.target,o),fov:N0(t.fov,e.fov,o),roll:N0(t.roll||0,e.roll||0,o)}}var Ql=uE.PLAY,X0=[Ql.stoolX,1,Ql.keyFront+.25],Zh=[Ql.stoolX,Ql.keyTop+.03,Ql.keyFront-.05],jd=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[X0[0]+Math.cos(e)*o,1.15+.4*t,X0[2]+Math.sin(e)*o]},_c=[{eye:jd(1),target:[X0[0],.92,X0[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:Zh},{eye:[X0[0]+1,1.14,X0[2]+1.72],target:[Zh[0]+.05,.8,Zh[2]+.05],fov:40,aperture:1,to:Zh}],wy=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Jh=t=>({fade:0,letterbox:.55,exposure:1.3,focus:wy(t.eye,t.to||X0),aperture:t.aperture,vignette:.42,shafts:0}),Ud={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Mc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Yl={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},vE=`
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
`;_y.exports=function(e){let{root:o,avatar:n}=e,r=document.createElement("style");r.textContent=vE,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),v=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,u=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let _t=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(by-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>by&&_t&&(i.value=_t[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(_t=>i.addEventListener(_t,le=>le.stopPropagation())),a.addEventListener("pointerdown",_t=>_t.stopPropagation()),a.addEventListener("click",_t=>{let le=_t.target.closest("button");le&&(_t.stopPropagation(),le.dataset.act==="send"&&H(),le.dataset.act==="leave"&&st())});let d=!1,p="",m=0,g=null,x=null,b="",w=null,_=0,M="",A=document.createElement("canvas");A.width=512,A.height=652;function I(_t){_t!==M&&(M=_t,s.classList.toggle("on",_t==="write"),f.classList.toggle("on",_t==="hint"),l.classList.toggle("on",d&&_t==="hint"&&(p==="room"||p==="peek")),v.classList.toggle("on",_t==="final"),_t==="write"&&setTimeout(()=>{if(p==="write")try{i.focus({preventScroll:!0})}catch(le){}},900))}function R(_t){p=_t,m=0}function B(_t,le){if(d)return;d=!0,g={eye:_t.eye.slice(),target:_t.target.slice(),fov:_t.fov,roll:_t.roll||0},x=Object.assign({},le),b="",i.value="",c.disabled=!0,In.STATE.fold=0,In.STATE.slide=0,In.STATE.shown=!0,In.STATE.active=!0;let $e=A.getContext("2d");$e.setTransform(1,0,0,1,0,0),$e.clearRect(0,0,A.width,A.height),In.STATE.ink=A,In.STATE.inkDirty=!0,document.body.classList.add("confessing");let me=_c[0],Jt=u?.3:5.5,So=u?.3:3.6;D.i=0,D.u=0,D.T=Jt+So,D.moving=!0,D.rest=0,D.raw=!0,D.lookFrom=x,D.lookTo=Jh(me);let S=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],jd(0)],co=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[X0[0],1,X0[2]-.1],me.target];D.path=Je=>{let Eo=Je*(Jt+So);if(Eo<Jt){let Ar=Eo/Jt,Kn=1-Math.cos(Ar*Math.PI/2);return{eye:oi(S,Kn),target:oi(co,Zr(0,1,Kn*1.05)),fov:N0(g.fov,52,Zr(.4,1,Kn)),roll:(g.roll||0)*(1-Kn)}}let Oo=(Eo-Jt)/So,bn=1-Math.pow(1-Oo,2.4);return{eye:jd(bn),target:me.target,fov:N0(52,me.fov,bn),roll:.05*Math.sin(Math.PI*bn)}},R("room"),I("")}let D={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},Z=()=>h?"Scroll on":"Swipe up";function P(_t){let le=Dt,$e=_c[_t],me={eye:le.eye.slice(),target:le.target.slice(),fov:le.fov,roll:le.roll||0},Jt=Kl(me.eye,$e.eye,.5),So=[Jt[0]-X0[0],0,Jt[2]-X0[2]],S=Math.hypot(So[0],So[2])||1,co=[Jt[0]+So[0]/S*.6,Jt[1]+.3,Jt[2]+So[2]/S*.6];D.path=Je=>{let Eo=1-Je;return{eye:[0,1,2].map(Oo=>Eo*Eo*me.eye[Oo]+2*Eo*Je*co[Oo]+Je*Je*$e.eye[Oo]),target:Kl(me.target,$e.target,Zr(0,1,Je)),fov:N0(me.fov,$e.fov,Je),roll:me.roll*Eo}},D.lookFrom=j||Jh(_c[D.i]),D.lookTo=Jh($e),D.i=_t,D.u=0,D.moving=!0,D.rest=0,D.raw=!1,D.T=u?.4:Math.max(2.8,Math.min(4.4,wy(me.eye,$e.eye)*1+1.6)),I("")}let j=null;function H(){if(p!=="write"||(b=i.value.trim(),!b))return;i.blur(),I("");let _t=Math.max(10,Math.min(22,24-b.length/28));w=dE(A,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:_t,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:le=>2.4+le.length/160,fixed:{mx:46,my:40},onPen:()=>{In.STATE.inkDirty=!0},onDone:()=>{In.STATE.inkDirty=!0}}),R("down")}function J(){try{let _t={access_key:pE,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(_t),keepalive:!0}).catch(()=>{})}catch(_t){}}function V(){p==="ready"&&(J(),R("fold"),I(""))}function st(){!d||p==="leave"||(I(""),i.blur(),et=Dt,mt=j,R("leave"))}let et=null,mt=null,Dt=null,ne=In.SHOTS.window,Se=In.OFF,Zt=_t=>[_t[0]+Se[0],_t[1],_t[2]],Ue=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],Zt([1.25,1.5,43.25]),Zt([-.55,1.36,42.92])],yo=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],Zt([-1,1.55,43.6]),Zt([-1.4,1.35,43.1]),Zt([-1.5,1.33,43.3])];function Bo(_t){let le=V0(Ta(_t)),$e=[g.eye,...Ue,ne.eye],me=[g.target,...yo,ne.target];return{eye:oi($e,le),target:oi(me,Zr(0,1,le*1.03)),fov:N0(g.fov,ne.fov,Zr(.6,.97,le)),roll:(g.roll||0)*(1-le)}}function ee(_t,le){if(u)return _t;let $e=performance.now()/1e3,me=.004*le,Jt=Math.sin($e*.61)*.6+Math.sin($e*1.37+1.3)*.4,So=Math.sin($e*.47+2.1)*.6+Math.sin($e*1.13+.4)*.4;return{eye:[_t.eye[0]+Jt*me,_t.eye[1]+So*me*.7,_t.eye[2]],target:[_t.target[0]+So*me*1.5,_t.target[1]+Jt*me,_t.target[2]],fov:_t.fov,roll:_t.roll}}function be(_t,le,$e){let me={};for(let Jt in le)me[Jt]=typeof le[Jt]=="number"&&typeof _t[Jt]=="number"?N0(_t[Jt],le[Jt],$e):le[Jt];return me}function Pe(_t){_t*=window.__confSpeed||1,m+=_t;let le=Qh(ne),$e=Qh(In.SHOTS.paper),me,Jt,So=Qh(In.SHOTS.peek);if(p==="room")D.moving?(D.u=Math.min(1,D.u+_t/D.T),me=D.path(D.raw?D.u:V0(D.u)),Jt=be(D.lookFrom,D.lookTo,Zr(.1,.9,D.u)),D.raw&&(Jt.fade=(x.fade||0)*(1-Zr(0,.12,D.u))),D.u>=1&&(D.moving=!1,D.rest=0,f.textContent=Z(),I("hint"))):(D.rest+=_t,me=ee(Qh(_c[D.i]),2.5),Jt=Jh(_c[D.i]));else if(p==="enter"){let co=Ta(m/(u?.6:9)),Je=V0(co),Eo=[ao.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],Zt([.75,1.5,42.95]),Zt([-.25,1.42,42.82]),Zt([-.9,1.42,42.82]),So.eye];me={eye:oi(Eo,Je),target:Kl(ao.target,So.target,Zr(0,.35,Je)),fov:N0(ao.fov,So.fov,Zr(.3,1,Je)),roll:0},Jt=be(_o,Ud,Zr(.2,.9,co)),co>=1&&R("peek")}else if(p==="peek")me=ee(So,1.5),Jt=Ud,m>(u?.5:3.2)&&R("turn");else if(p==="turn"){let S=Ta(m/(u?.4:3.2));me=Bd(So,le,V0(S)),Jt=be(Ud,Mc,V0(S)),S>=1&&(R("write"),I("write"))}else if(p==="write")me=ee(le,1),Jt=Mc;else if(p==="down"){let S=Ta(m/(u?.4:2));me=Bd(le,$e,V0(S)),Jt=be(Mc,Yl,V0(S)),S>=1&&(_=w.write(b,u)||0,In.STATE.inkDirty=!0,R("writing"))}else if(p==="writing")me=ee($e,.6),Jt=Yl,m>_+.8&&(R("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",I("hint"));else if(p==="ready")me=ee($e,.6),Jt=Yl;else if(p==="fold"){let S=Ta(m/(u?.3:1.5));In.STATE.fold=V0(S),me=ee($e,.6),Jt=Yl,S>=1&&R("slide")}else if(p==="slide"){let co=Ta(m/(u?.6:3.4));In.STATE.slide=V0(Zr(0,.7,co));let Je=V0(Zr(.35,1,co));me=Bd($e,le,Je),Jt=be(Yl,Mc,Je),co>=1&&(In.STATE.shown=!1,R("final"),I("final"))}else if(p==="final")me=ee(le,1),Jt=Mc;else if(p==="leave"){let S=u?.6:et.eye[0]<Se[0]-.3?12:7,co=Ta(m/S),Je={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},Eo=V0(co),Oo=et.eye[0]<Se[0]-.3,bn=Oo?[et.eye,Zt([-.55,1.4,42.8]),Zt([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Je.eye]:[et.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Je.eye],Ar=Oo?[et.target,Zt([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Je.target]:[et.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Je.target];if(me={eye:oi(bn,Eo),target:oi(Ar,Eo),fov:N0(et.fov,Je.fov,Eo),roll:Je.roll*Eo},Jt=be(mt||Mc,x,Zr(.1,.7,co)),Jt.fade=(x.fade||0)*Zr(.82,1,co),co>=1){d=!1,In.STATE.active=!1,In.STATE.shown=!0,In.STATE.fold=0,In.STATE.slide=0;let Kn=A.getContext("2d");Kn.setTransform(1,0,0,1,0,0),Kn.clearRect(0,0,A.width,A.height),In.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return Dt=me,j=Jt,{camera:me,look:Jt}}let ao=null,_o=null;function Ie(){if(p==="room"){if(D.moving||D.rest<.4)return;D.i<_c.length-1?P(D.i+1):(ao=Dt,_o=j,I(""),R("enter"));return}if(p==="peek"){m>.4&&R("turn");return}p==="ready"?V():p==="writing"&&w&&(w.finish(),m=Math.max(m,_))}function we(){p==="room"&&!D.moving&&D.rest>.4&&D.i>0&&P(D.i-1)}return{start:B,update:Pe,leave:st,get active(){return d},get stage(){return p},wheel(_t){_t>8?Ie():_t<-8&&we()},swipe(_t){_t>0?Ie():_t<0&&we()},tap(){Ie()},key(_t){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(_t)>=0?(Ie(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(_t)>=0?(we(),!0):_t==="Escape"?(st(),!0):!1},_setNote(_t){i.value=_t,i.dispatchEvent(new Event("input"))}}}});var Ry=bt((yz,Ny)=>{"use strict";var kc=Qi(),t1=gd(),Wd=Gf(),mE=al(),Vd=yd(),gE=b0(),e1=!gE.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:d0}=M0(),{C:vr,PAINTING_X:Tc}=mr(),t0=t=>Math.max(0,Math.min(1,t)),Wt=(t,e,o)=>t+(e-t)*o,Wo=(t,e,o)=>[Wt(t[0],e[0],o),Wt(t[1],e[1],o),Wt(t[2],e[2],o)],io=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],Xd=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Dr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Gt=(t,e,o)=>{let n=t0((o-t)/(e-t));return n*n*(3-2*n)};function xE(t,e,o,n,r,a){if(r<=0)return[t,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*n,l=Math.max(-f,Math.min(f,t-e)),v=t-l,h=(o+s*l)*r,u=(o-s*h)*c,d=v+(l+h)*c;return e-t>0==d>e&&(d=e,u=0),[d,u]}var ky=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,yE=t=>t*t*t,Yd=t=>1-Math.pow(1-t,3),yn=t=>-(Math.cos(Math.PI*t)-1)/2;function zn(t,e){let o=t.length-1,n=t0(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=a*a,v=l*a;return[0,1,2].map(h=>.5*(2*i[h]+(-s[h]+c[h])*a+(2*s[h]-5*i[h]+4*c[h]-f[h])*l+(-s[h]+3*i[h]-3*c[h]+f[h])*v))}var oo=(t,e,o,n)=>({eye:t,target:e,fov:o,roll:n||0});function ii(t,e,o){return oo(Wo(t.eye,e.eye,o),Wo(t.target,e.target,o),Wt(t.fov,e.fov,o),Wt(t.roll,e.roll,o))}var tp=()=>Gt(.75,1.3,window.innerWidth/window.innerHeight),Gr=(t,e)=>ii(t,e,tp()),o1=[7,3.95,vr.hallEnd-.05],bE=[vr.x1,2.9,vr.zc],Ec=[16.75,4.55,6.75],ep=[6.92,2.72,14.5],Y0=[7.3,.015,47.1],wE=[Ec,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],ep],_E=[ep,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Y0],ri=[Tc[0],3,vr.z0],ai=[Tc[1],3,vr.z0],Qd=47.45,Ly=4.6,ME=13.2,kE=1.57,Zl=[7.55,1.25,46.75],op=[17.25,2.42,46],np=[26.05,1.95,46],Jl=[36.15,.015,44],s1=()=>Wt(6.8,6.15,tp()),SE=[Zl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],op],EE=[op,[20.2,2.05,45.6],[23.2,1.8,45],np],si=[Tc[2],3,vr.z0],Zd=[34.8,1.35,46],hs=[7.89,.03,19.03],Sy=.36,Ey=13.64,yr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function R0(t){let e=t.side==="left"?1:-1;return Wo([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],tp())}function AE(t){return t.side==="left"?Gr(oo([8.6,3.9,t.z],[Sy,1.45,t.z],76),oo([8,3.6,t.z+.7],[Sy,3.95,t.z-2],46,-.008)):Gr(oo([5.4,3.9,t.z],[Ey,1.45,t.z],76),oo([6,3.6,t.z-.7],[Ey,3.95,t.z+2],46,-.008))}var TE=()=>[Jl,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],R0(yr[0])],zE=()=>[R0(yr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],R0(yr[3])],LE=()=>[R0(yr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],hs],Ay={2:{pos:()=>ep,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Zl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>op,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>np,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Zd,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>R0(yr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>R0(yr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>R0(yr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>R0(yr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>R0(yr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>R0(yr[5]),amp:[.12,.08,.1],tumble:.5}},fs=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],n=Gr(oo([vr.x0+.9,1.85,vr.zc+.25],[vr.x1,2.85,vr.zc-.1],64),oo([vr.x0+1.2,2,vr.zc+.35],[vr.x1,2.6,vr.zc-.15],50));return n.eye=io(io(n.eye,[e,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=Gr(oo([16.6,1.9,9.2],[17.3,.4,5.6],64),oo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=io(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=Gr(oo([7,1.35,13],[7.2,7.6,20.4],74,.05),oo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=io(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=Gr(oo([7,3.6,43.7],[7,3.85,o1[2]],74),oo([7,3.6,41.3],[7,3.95,o1[2]],46));return o.eye=io(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Gr(oo([7,3.9,40.3],[7,1.35,o1[2]],76),oo([6.3,3.6,41.2],[3.7,3.95,o1[2]],46,-.008));return o.eye=io(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Gr(oo([7.15,.15,46],[7.3,.04,Y0[2]],50),oo([7.05,.14,45.9],[7.25,.05,Y0[2]],32));return o.eye=io(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=Gr(oo([7.15,.1,46.3],[7.05,.1,Qd],50),oo([7.1,.12,45.85],[7,.2,Qd],30));return o.eye=io(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=Gr(oo([7.3,.85,45.65],[7.6,1.38,47.1],64),oo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=io(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Gr(oo([ri[0],2.3,46.85],[ri[0],1.25,ri[2]],74),oo([ri[0]-.6,2.55,46.85],[ri[0]+1.9,2.9,ri[2]],46,.008));return o.eye=io(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Gr(oo([ai[0],1.95,46.85],[ai[0],1,ai[2]],74),oo([ai[0]-.6,2.1,46.85],[ai[0]+1.9,2.75,ai[2]],46,.008));return o.eye=io(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Gr(oo([si[0],1.4,46.85],[si[0],.6,si[2]],74),oo([si[0]-.6,1.45,46.85],[si[0]+1.9,2,si[2]],46,.008));return o.eye=io(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Gr(oo([34.75,.5,44.15],[vr.x1,.8,43.95],66),oo([34.75,.45,44.3],[vr.x1,.35,43.95],50));return o.eye=io(o.eye,e),o}},...yr.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=AE(t);return r.eye=io(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=Gr(oo([7.75,2.6,18.6],[7.89,0,19.08],60),oo([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-hs[0],r=o.eye[2]-hs[2];return o.eye=[hs[0]+n*Math.cos(e)-r*Math.sin(e),o.eye[1],hs[2]+n*Math.sin(e)+r*Math.cos(e)],o}}],NE=[1,.96,.88];function Ty(t,e){return{dur:e,cam(o,n,r){let a=yn(o),s=ii(n,r,a),i=yr[t].side==="left"?1:-1;return s.eye=io(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=Wt(n[s],r[s],o));return a.aperture=Wt(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=yn(o),r=R0(yr[t]),a=R0(yr[t+1]),s=yr[t].side==="left"?1:-1,i=io(Wo(r,a,.5),[s*1.2,.5,0]),c=zn([r,Wo(r,i,.6),i,Wo(a,i,.6),a],n);return{phase:"fly",pos:io(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Kd=[{dur:6.2,cam(t,e,o){if(t<.5){let i=yE(t/.5),c=Wo(e.eye,[vr.x1-3.2,2.6,vr.zc],i),f=Wo(e.target,bE,Gt(0,.6,t/.5));return oo(c,f,Wt(e.fov,e.fov-8,i),Wt(e.roll,.04,i))}let n=Yd((t-.5)/.5),r=[[d0.cx+.4,10.4,d0.zc+.6],[d0.cx-.6,7.6,d0.zc+1.3],[d0.cx-1.9,4.6,d0.zc+1.75],o.eye],a=[[d0.cx-.1,0,d0.zc-.2],[d0.cx-1,.4,d0.zc-.1],[d0.cx-1.1,.8,d0.zc-.2],o.target];return oo(zn(r,n),zn(a,n),Wt(o.fov+14,o.fov,n),Wt(-.25,o.roll,n))},look(t,e,o){let n=Gt(.22,.5,t),r=1-Gt(.5,.74,t);return{fade:t<.5?n:r,fadeColor:NE,exposure:Wt(e.exposure,o.exposure,Gt(.5,.9,t))*(1+2.2*(t<.5?Gt(.15,.5,t):1-Gt(.5,.8,t))),letterbox:Wt(e.letterbox,o.letterbox,Gt(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*Gt(.6,1,t),focus:Wt(4,o.focus,Gt(.5,1,t)),shafts:Wt(e.shafts,o.shafts,Gt(.4,.6,t)),vignette:Wt(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,n){let r=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=zn(r,yn(t)),s=Gt(0,.12,t)*(1-Gt(.82,1,t)),i=Wo(Wo(e.target,o.target,Gt(.55,1,t)),n.pos,s),c=Wt(e.fov,o.fov,Gt(.3,1,t))-6*Math.sin(Math.PI*t),f=Wt(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return oo(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Wt(e.exposure,o.exposure,Gt(.25,.75,t)),letterbox:Wt(e.letterbox,o.letterbox,t),focus:Wt(a,o.focus,Gt(.8,1,t)),aperture:Wt(.7,o.aperture,Gt(.8,1,t)),shafts:Wt(e.shafts,o.shafts,Gt(.3,.8,t)),vignette:Wt(e.vignette,o.vignette,t)}},leaf(t){let e=ky(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:io(zn(wE,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*Gt(.8,1,t)}}},{dur:11.5,cam(t,e,o,n){let r=zn([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Gt(0,.8,t)*.6+yn(t0(t/.8))*.4),a=zn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],yn(Gt(.8,1,t))),s=t<.8?r:a,i=Wo(Wo(e.target,n.pos,Gt(.03,.22,t)),o.target,Gt(.82,1,t)),c=Wt(e.fov,o.fov,Gt(.15,.7,t))-6*Gt(.6,.8,t)*(1-Gt(.85,1,t)),f=Wt(e.roll,o.roll,Gt(0,.6,t))-.04*Math.sin(Math.PI*t);return oo(s,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Wt(e.exposure,o.exposure,Gt(.5,1,t)),letterbox:Wt(e.letterbox,o.letterbox,t),focus:Wt(a,o.focus,Gt(.84,1,t)),aperture:Wt(1.1,o.aperture,Gt(.84,1,t)),shafts:Wt(e.shafts,o.shafts,Gt(.2,.9,t)),vignette:Wt(e.vignette,o.vignette,Gt(.5,1,t))}},leaf(t){let e=Wt(ky(t),t,.35),o=zn(_E,Gt(0,.78,e)),n=Math.sin(t*Math.PI*8)*.35*(1-Gt(.55,.76,t)),r=Gt(.7,.8,t);return{phase:"fly",pos:io(o,[n,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(t,e,o){let n=yn(t),r=ii(e,o,n);return r.eye=io(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(t,e,o){let n=yn(t),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Wt(e[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let n=yn(t),r=zn([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Wo(e.target,o.target,Gt(.1,.85,t));return oo(r,a,Wt(e.fov,o.fov,Gt(.2,1,t)),Wt(e.roll,o.roll,n))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Wt(e[r],o[r],Gt(.2,1,t)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return ii(e,o,yn(t))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Wt(e[r],o[r],yn(t)));return n},leaf(){return{phase:"floor"}},walker(t){return Wt(Ly,s1(),t)}},{dur:11,kick:t=>t0((t-Sc())/(1-Sc())),cam(t,e,o,n){let r=Sc(),a=Gt(0,r,t)*(1-Gt(r+.12,r+.35,t)),s=zy(Math.min(t,Ac)),i=io(e.target,[(s-e.target[0])*.15*a,0,0]),c=Gt(r+.12,1,t),f=zn([e.eye,e.eye,io(e.eye,[0,.12,-.3]),o.eye],c);return i=Wo(i,n.pos,Gt(r+.06,r+.24,t)*(1-Gt(.9,1,t))),i=Wo(i,o.target,Gt(.88,1,t)),oo(f,i,Wt(e.fov,o.fov,c),Wt(e.roll,o.roll,c))},look(t,e,o,n,r){let a=Sc(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Gt(0,.12,t)*(1-Gt(a+.25,a+.5,t));return{letterbox:Wt(Wt(e.letterbox,o.letterbox,Gt(a,1,t)),1.75,i),exposure:Wt(e.exposure,o.exposure,Gt(a,1,t)),focus:t<a?e.focus:Wt(e.focus,s,Gt(a,a+.2,t)),aperture:Wt(e.aperture,o.aperture,Gt(a,1,t)),vignette:Wt(e.vignette,o.vignette,t),shafts:Wt(e.shafts,o.shafts,t)}},leaf(t){let e=t0((t-Sc())/(1-Sc()));if(e<=0)return{phase:"floor"};let o=Gt(0,.85,e)*.85+Yd(Gt(0,.15,e))*.15;return{phase:"fly",pos:io(Y0,[(Zl[0]-Y0[0])*o+Math.sin(e*9)*.08*(1-e),(Zl[1]-Y0[1])*o,(Zl[2]-Y0[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?zy(t):null}},{dur:9,cam(t,e,o,n){let r=yn(t),a=zn([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-Gt(.6,.92,t),i=Wo(Wo(e.target,n.pos,Gt(0,.15,t)),o.target,1-s),c=Wt(e.fov,o.fov,Gt(.3,1,t)),f=Wt(e.roll,o.roll,r)+.04*Math.sin(Math.PI*t);return oo(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Wt(e.letterbox,o.letterbox,t),exposure:Wt(e.exposure,o.exposure,Gt(.3,.8,t)),focus:Wt(a,o.focus,Gt(.6,.95,t)),aperture:Wt(e.aperture,o.aperture,Gt(.6,1,t)),vignette:Wt(e.vignette,o.vignette,t),shafts:Wt(e.shafts,o.shafts,Gt(.3,.8,t))}},leaf(t){let e=yn(t);return{phase:"fly",pos:io(zn(SE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=yn(t),r=ii(e,o,n);return r.eye=io(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Wt(e[r],o[r],t));return n.aperture=Wt(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=yn(t);return{phase:"fly",pos:io(zn(EE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=yn(t),r=ii(e,o,n);return r.eye=io(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Wt(e[r],o[r],t));return n.aperture=Wt(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=yn(t);return{phase:"fly",pos:io(zn([np,[29.2,1.75,45.5],[32.2,1.5,45.4],Zd],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,n){let r=yn(t),a=zn([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=Gt(.05,.3,t)*(1-Gt(.8,1,t)),i=Wo(Wo(e.target,o.target,Gt(.6,1,t)),n.pos,s);return oo(a,i,Wt(e.fov,o.fov,Gt(.2,1,t)),Wt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Wt(e.letterbox,o.letterbox,t),exposure:Wt(e.exposure,o.exposure,t),focus:Wt(a,o.focus,Gt(.8,1,t)),aperture:Wt(.9,o.aperture,Gt(.8,1,t)),vignette:Wt(e.vignette,o.vignette,t),shafts:Wt(e.shafts,o.shafts,t)}},leaf(t){let e=zn([Zd,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Jl],Gt(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-Gt(.35,.82,t)),n=Gt(.78,.88,t);return{phase:"fly",pos:io(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(t){let e=t0((t-.02)/.09);return Yd(e)+.07*Math.sin(t0((t-.08)/.18)*Math.PI)*(1-t0((t-.08)/.3))},cam(t,e,o,n){let r=Math.sin(t*340)*.012*Gt(.02,.05,t)*(1-Gt(.08,.16,t)),a=Gt(.06,1,t),s=zn([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+yn(a)*.45),i=io(n.pos,[1,-.2,-1.45]);s=Wo(s,i,Gt(.1,.22,t)*(1-Gt(.52,.72,t)));let c=Gt(.06,.16,t)*(1-Gt(.86,1,t)),f=Wo(e.target,n.pos,c);f=Wo(f,o.target,Gt(.86,1,t));let l=Wt(e.fov,o.fov,Gt(.1,1,t))+6*Math.sin(Math.PI*Gt(.08,.9,t)),v=Wt(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*Gt(.1,.9,t))+r;return oo(io(s,[0,r,0]),f,l,v)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Gt(.02,.06,t)*(1-Gt(.08,.3,t));return{letterbox:Wt(e.letterbox,o.letterbox,Gt(.1,.4,t)),exposure:Wt(e.exposure,o.exposure,t)*(1+.8*s),focus:Wt(a,o.focus,Gt(.86,1,t)),aperture:Wt(.8,o.aperture,Gt(.86,1,t)),vignette:Wt(e.vignette,o.vignette,t),shafts:Wt(e.shafts,o.shafts,t)+s}},leaf(t){let e=t0((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=zn(TE(),e*.6+yn(e)*.4),n=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:io(o,[0,n*.6,n]),tumble:1.4-.8*e}}},...[0,1].map(t=>Ty(t,7.5)),{dur:10,cam(t,e,o,n){let r=yn(t),a=zn([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=Gt(0,.15,t)*(1-Gt(.85,1,t)),i=Wo(Wo(e.target,o.target,Gt(.5,1,t)),n.pos,s);return oo(a,i,Wt(e.fov,o.fov,r)+4*Math.sin(Math.PI*r),Wt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Wt(e.letterbox,o.letterbox,t),exposure:Wt(e.exposure,o.exposure,t),focus:Wt(a,o.focus,Gt(.85,1,t)),aperture:Wt(.6,o.aperture,Gt(.85,1,t)),vignette:Wt(e.vignette,o.vignette,t),shafts:Wt(e.shafts,o.shafts,t)}},leaf(t){let e=yn(t),o=zn(zE(),e);return{phase:"fly",pos:io(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>Ty(t,7.5)),{dur:10,cam(t,e,o,n){let r=yn(t),a=zn([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=Gt(0,.2,t)*(1-Gt(.9,1,t)),i=Wo(Wo(e.target,o.target,Gt(.5,1,t)),n.pos,s);return oo(a,i,Wt(e.fov,o.fov,r),Wt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Wt(e.letterbox,o.letterbox,t),exposure:Wt(e.exposure,o.exposure,t),focus:Wt(a,o.focus,Gt(.85,1,t)),aperture:Wt(.7,o.aperture,Gt(.85,1,t)),vignette:Wt(e.vignette,o.vignette,t),shafts:Wt(e.shafts,o.shafts,t)}},leaf(t){let e=zn(LE(),Gt(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-Gt(.4,.84,t)),n=Gt(.8,.9,t);return{phase:"fly",pos:io(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],Jd=9.2,Ac=.72;function zy(t){return t<Ac?Wt(s1(),Jd,t/Ac):Wt(Jd,ME,(t-Ac)/(1-Ac))}function Sc(){return Ac*t0((Y0[0]+.15-s1())/(Jd-s1()))}var a1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},n1=t=>Object.assign({},a1,fs[t].look),RE=`
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
`;function Jr(t,e,o){let n=document.createElement(t);return e&&(n.className=e),o!==void 0&&(n.innerHTML=o),n}var ni=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function r1(t,e,o){t.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(e+r*o).toFixed(2)+"s"})}Ny.exports=function(e){let o=/tourdebug/.test(location.search),{fps:n}=e;if(!document.querySelector("link[data-tour-font]")){let X=document.createElement("link");X.rel="stylesheet",X.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",X.setAttribute("data-tour-font",""),document.head.appendChild(X)}let r=Dd(),a=null;fetch("res/hand.json").then(X=>X.ok?X.json():null).then(X=>{a=X}).catch(()=>{});let s=document.createElement("style");s.textContent=RE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=Jr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Jr("div","tour-mark",ni(t1.name)),f=Jr("button","tour-free","Explore freely");f.type="button";let l=Jr("div","tour-links",Wd.icons("tour-icon"));l.insertBefore(Hd()("tour-icon"),l.firstChild),l.insertBefore(Fh().button("tour-icon"),l.firstChild.nextSibling);let v=Jr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');v.type="button",v.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(v),e1&&l.appendChild(f);let h=Jr("div","tour-progress",fs.map(()=>"<i></i>").join("")),u=Jr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),d=u.querySelector("span"),p=Jr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${ni(t1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);r1(p,.4,.35);let m=t1.text.split(/\n\s*\n/).map(X=>`<p class="tour-line">${ni(X.trim())}</p>`).join(""),g=Jr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${ni(t1.title)}</h2>
		<span class="tour-rule"></span>
		${Wd.line("tour-line tour-contact")}
		${m}`);r1(g,.25,.28);let x=Jr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);r1(x,.6,.3);let b=Jr("div","tour-card tour-master","");function w(X){let vt=Jr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Yt=vt.querySelector(".tour-title"),fe=vt.querySelector(".tour-body");return vt.filled=!1,vt.body=fe,vt.fill=()=>{let de=X();if(!de||vt.filled)return;vt.filled=!0;let nn=de.title||"";vt.querySelector(".tour-kicker").textContent=mE(de)||"Oil on canvas";let sr=vt.querySelector(".visit-row");sr.innerHTML=Vd.button(de),sr.hidden=!sr.innerHTML;let Tr=sr.querySelector(".visit-btn");Tr&&(Tr.addEventListener("click",po=>{po.stopPropagation(),Vd.open(de)}),vt.warm=()=>Vd.warm(de));let rn=0;Yt.innerHTML=nn.split(" ").map(po=>'<span class="tour-word">'+po.split("").map(Qn=>`<span style="transition-delay:${(.35+rn++*.045).toFixed(3)}s">${ni(Qn)}</span>`).join("")+"</span>").join(" "),Yt.setAttribute("aria-label",nn);let br=.35+nn.length*.045+.2;vt.querySelector(".tour-rule").style.transitionDelay=br.toFixed(2)+"s";let an=String(de.description||"").split(/\n\s*\n/).filter(po=>po.trim());if(vt.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&an.length){fe.innerHTML=an.map(wn=>`<p class="hand-text">${ni(wn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let po=fe.querySelector("canvas"),Qn=an.map(wn=>wn.trim()).join(`

`),Vo=!1,Fn=!1,Br=0;fe.addEventListener("wheel",()=>{Vo=!0},{passive:!0}),fe.addEventListener("touchmove",()=>{Vo=!0},{passive:!0});let Ur=parseFloat(getComputedStyle(fe).fontSize)||17,jo=r(po,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Ur*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:wn=>3.5+wn.length/420,seed:3+nn.length,onPen:wn=>{if(Vo)return;let O0=wn-fe.clientHeight*.55;O0>fe.scrollTop+4&&(fe.scrollTop+=Math.min(16,O0-fe.scrollTop))}});po.addEventListener("click",wn=>{wn.stopPropagation(),clearTimeout(Br),Fn?jo.finish():(Fn=!0,jo.write(Qn,!0))}),vt.write=()=>{if(clearTimeout(Br),Vo=!1,Fn){jo.write(Qn,!0);return}jo.write("",!0),Br=setTimeout(()=>{Fn=!0,jo.write(Qn)},br*.6*1e3)},vt.stopWrite=()=>{clearTimeout(Br),jo.stop()};let m0=0;window.addEventListener("resize",()=>{clearTimeout(m0),m0=setTimeout(()=>{Fn&&vt.classList.contains("on")&&jo.write(Qn,!0)},250)})}else fe.innerHTML=an.map(po=>`<p class="tour-line">${ni(po.trim())}</p>`).join(""),fe.querySelectorAll(".tour-line").forEach((po,Qn)=>{po.style.transitionDelay=(br+.3+Math.min(Qn,6)*.35).toFixed(2)+"s"})},vt}let _=()=>e.paintings?e.paintings():[],M=X=>_().find(vt=>vt.side==="corridor"&&Math.abs(vt.paintingPosition[0]-X)<.5),A=w(()=>_().find(X=>X.side==="end")),I=()=>Jr("div","tour-card",""),R=w(()=>M(ri[0])),B=w(()=>M(ai[0])),D=w(()=>M(si[0])),Z=yr.map(X=>w(()=>_().find(vt=>vt.side===X.side&&Math.abs(vt.paintingPosition[2]-X.z)<.5))),P=Jr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${e1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Wd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${e1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);r1(P,.5,.35);let j=[p,g,x,b,A,I(),I(),I(),R,B,D,I(),...Z,P];i.append(...j,c,l,h,u),document.body.appendChild(i);let H=My()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{me=-1,ge&&(xe={start:S},ge=!1)}});document.body.classList.add("touring");let J=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,V=J?"Scroll":"Swipe",st=fs.map((X,vt)=>vt===0?J?"Scroll to begin":"Swipe up to begin":vt===1?V+" to follow the leaf":vt===2?V+" to follow the light":vt===3?V+" for its story":vt===6||vt===7||vt===fs.length-1?"":V+" on"),et=[0];Kd.forEach(X=>et.push(et[et.length-1]+X.dur));let mt=et[et.length-1],Dt=210,ne=95,Se=.35,Zt=1.4,Ue=.32,yo=1,Bo=1.3,ee=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,be=2.2,Pe=.7,ao=.9,_o=!0,Ie=0,we=0,_t=0,le=-10,$e=!1,me=-1,Jt=0,So=0,S=0,co=null,Je=Object.assign({},n1(0)),Eo=fs[0].cam(0),Oo={phase:"home",pos:Ec.slice(),tumble:0},bn=0,Ar=X=>{let vt=0;for(let Yt=1;Yt<et.length;Yt++)Math.abs(et[Yt]-X)<Math.abs(et[vt]-X)&&(vt=Yt);return vt};function Kn(X){let vt=j[X];vt&&vt.fill&&(vt.fill(),vt.body.scrollTop=0,vt.offsetWidth),j.forEach((Yt,fe)=>{let de=Yt.classList.contains("on");Yt.classList.toggle("on",fe===X),fe===X&&!de&&Yt.write&&Yt.write(),fe!==X&&de&&Yt.stopWrite&&Yt.stopWrite()}),vt&&vt.warm&&vt.warm(),d.textContent=st[X]||"",u.classList.toggle("on",!!st[X])}function Q0(){j.forEach(X=>{X.stopWrite&&X.classList.contains("on")&&X.stopWrite(),X.classList.remove("on")}),u.classList.remove("on")}let La=null,hi=-1;function ot(X){if(H.active||!_o||co)return;let vt=S-le>Se;if(le=S,vt||!La){let Yt=0,fe=mt;for(let de=0;de<et.length;de++)if(et[de]<=Ie-.02&&(Yt=et[de]),et[de]>=Ie+.02){fe=et[de];break}La={lo:Yt,hi:fe}}S<hi||($e=!1,_t=Math.max(La.lo,Math.min(La.hi,_t+X)),_t=Math.max(Ie-be,Math.min(Ie+be,_t)))}function It(X){if(H.active||!_o||co)return;let vt=$e?_t:Ie,Yt;if(X>0)Yt=et.findIndex(fe=>fe>vt+.05);else{Yt=-1;for(let fe=et.length-1;fe>=0;fe--)if(et[fe]<vt-.05){Yt=fe;break}}Yt<0||(_t=et[Yt],$e=!0,le=S)}let Ht=null,Ot=X=>X.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(X=>i.addEventListener(X,Ot)),i.addEventListener("pointerdown",X=>{if(X.stopPropagation(),!(X.target.closest("button, a")||X.target.closest(".tour-body"))){Ht={x:X.clientX,y:X.clientY,lx:X.clientX,ly:X.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(X.pointerId)}catch(vt){}}}),i.addEventListener("pointermove",X=>{if(!Ht)return;let vt=X.clientX-Ht.lx,Yt=X.clientY-Ht.ly;Ht.lx=X.clientX,Ht.ly=X.clientY;let fe=Math.abs(Yt)>=Math.abs(vt)?-Yt:-vt;Ht.moved+=Math.abs(fe);let de=performance.now(),nn=fe/ne;Ht.v=Ht.v*.6+nn/Math.max(.008,(de-Ht.lt)/1e3)*.4,Ht.lt=de,Ht.moved>6&&ot(nn)});let ue=X=>{let vt=Ht;if(Ht=null,!!vt){if(H.active){vt.moved<10&&performance.now()-vt.t<500?H.tap():vt.y-(X?X.clientY:vt.ly)>30&&H.swipe(1);return}vt.moved<10&&performance.now()-vt.t<500?It(1):performance.now()-vt.lt<120&&ot(Math.max(-1.6,Math.min(1.6,vt.v*.22)))}};i.addEventListener("pointerup",X=>{X.stopPropagation(),ue(X)}),i.addEventListener("pointercancel",()=>{Ht=null}),i.addEventListener("wheel",X=>{if(H.active){if(X.target.closest(".conf-ui"))return;X.preventDefault(),H.wheel(X.deltaY);return}if(X.target.closest(".tour-body")){let Yt=X.target.closest(".tour-body"),fe=Yt.scrollTop+Yt.clientHeight>=Yt.scrollHeight-2&&X.deltaY>0,de=Yt.scrollTop<=0&&X.deltaY<0;if(!fe&&!de)return}X.preventDefault();let vt=X.deltaMode===1?X.deltaY*16:X.deltaMode===2?X.deltaY*window.innerHeight:X.deltaY;ot(vt/Dt)},{passive:!1}),window.addEventListener("keydown",X=>{if(!_o||co||document.body.classList.contains("visiting"))return;if(H.active){if(X.stopImmediatePropagation(),X.target&&/TEXTAREA|INPUT|BUTTON/.test(X.target.tagName))return;H.key(X.key)&&X.preventDefault();return}let vt=X.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(vt)>=0){if((vt==="Enter"||vt===" ")&&X.target&&X.target.tagName==="BUTTON")return;X.preventDefault(),X.stopImmediatePropagation(),It(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(vt)>=0?(X.preventDefault(),X.stopImmediatePropagation(),It(-1)):vt==="Escape"?(X.preventDefault(),Le()):/^[wasdzq]$/i.test(vt)&&X.stopImmediatePropagation()},!0),window.addEventListener("keyup",X=>{_o&&!co&&/^(Arrow|[wasdzq]$)/i.test(X.key)&&X.stopImmediatePropagation()},!0),f.addEventListener("click",X=>{X.stopPropagation(),Le()}),["mousedown","pointerdown"].forEach(X=>v.addEventListener(X,vt=>vt.stopPropagation())),v.addEventListener("click",X=>{X.stopPropagation(),qe()});let ze=oo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),Ee=null,ge=!1;function qe(){if(!_o||co||H.active||Ee)return;Q0(),me=-2;let X=Eo.eye;if(X[0]>.5&&X[0]<13.5&&X[2]>36&&X[2]<50){ge=!1,H.start(Eo,Je);return}Ee={t:0}}P.addEventListener("click",X=>{let vt=X.target.closest("button");vt&&(X.stopPropagation(),vt.dataset.act==="free"&&Le(),vt.dataset.act==="replay"&&Qe(),vt.dataset.act==="list"&&cu().show(!1),vt.dataset.act==="confess"&&(Q0(),me=-2,H.start(Eo,Je)))});let _e=[null,[d0.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Tc[0]-7,0],[42.5+Tc[1]-7,0],[42.5+Tc[2]-7,0],[1e3,Math.PI/2],...yr.map(X=>[X.z-1.6,X.side==="left"?-Math.PI/2:Math.PI/2]),[hs[2]-1.6,Math.PI]],Ye=null,Te=0;function Le(){if(!_o||co||!e1)return;let X=Ar(Ie),vt=_e[X];Ye=X<=1?{phase:"home",pos:Ec.slice()}:X>=3&&X<=6?{phase:"floor",pos:Y0.slice()}:X===11?{phase:"floor",pos:Jl.slice()}:X===18?{phase:"floor",pos:hs.slice()}:null,Te=X>=12?1:0,vt&&n.place&&n.place(vt[0],vt[1]),co={start:S,fromCam:Eo,fromLook:Object.assign({},Je)},Q0(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Qe(){Ie=_t=0,we=0,$e=!1,me=-1,Jt=0,So=0,Oo={phase:"home",pos:Ec.slice(),tumble:0},xe={start:S}}let xe={start:-1},lo=!1,No=[],Me={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Go(X){bn+=X*(Oo.phase==="floor"?0:1);let vt=Oo.tumble===void 0?0:Oo.tumble,Yt=kc.fromTranslation(No,Oo.pos);if(Oo.phase==="home")Yt=kc.rotateY(Yt,Yt,2.2+Math.sin(bn*.9)*.15),Yt=kc.rotateZ(Yt,Yt,-1+Math.sin(bn*1.3)*.12),Yt=kc.rotateX(Yt,Yt,.4);else if(Oo.phase==="floor")Yt=kc.rotateY(Yt,Yt,.65),Yt=kc.rotateX(Yt,Yt,.16);else{let fe=Oo.pos;if(Me.prev&&X>0){let wr=[fe[0]-Me.prev[0],fe[1]-Me.prev[1],fe[2]-Me.prev[2]];if(Math.hypot(wr[0],wr[1],wr[2])<1.5){let $c=Math.min(1,X*6);for(let xs=0;xs<3;xs++)Me.vel[xs]+=(wr[xs]/X-Me.vel[xs])*$c}else Me.vel=[0,0,0]}Me.prev=fe.slice();let de=Me.vel,nn=Math.hypot(de[0],de[1],de[2]),sr=Gt(.25,1.4,nn),Tr=Gt(.5,2,-de[1]),rn=bn*.35*(.3+vt)+.65,br=[Math.cos(rn),0,Math.sin(rn)];nn>.001&&(br=Wo(br,Dr(de,-1/nn),sr));let an=Math.min(1,X*4);Me.axis=Wo(Me.axis,br,Me.fresh?1:an);let po=Me.axis,Qn=Math.hypot(po[0],po[1],po[2])||1;po=Dr(po,1/Qn);let Vo=Eo.eye,Fn=[Vo[0]-fe[0],Vo[1]-fe[1],Vo[2]-fe[2]],Br=Math.hypot(Fn[0],Fn[1],Fn[2])||1,Ur=Wt(.6,.22,sr),jo=[Fn[0]/Br*Ur,1+Fn[1]/Br*Ur,Fn[2]/Br*Ur],m0=po[0]*jo[0]+po[1]*jo[1]+po[2]*jo[2];jo=Xd(jo,Dr(po,m0));let wn=Math.hypot(jo[0],jo[1],jo[2])||1;jo=Dr(jo,1/wn);let O0=[po[1]*jo[2]-po[2]*jo[1],po[2]*jo[0]-po[0]*jo[2],po[0]*jo[1]-po[1]*jo[0]],Ao=Math.hypot(de[0],de[2]),sn=0;if(Ao>.15&&Me.dir&&X>0){let wr=[de[0]/Ao,de[2]/Ao];sn=(Me.dir[0]*wr[1]-Me.dir[1]*wr[0])/X,Me.dir=wr}else Ao>.15&&(Me.dir=[de[0]/Ao,de[2]/Ao]);Me.bank+=(Math.max(-.8,Math.min(.8,sn*.3))*sr-Me.bank)*Math.min(1,X*3),Me.rock+=X*(1.5+2.4*sr),Me.spin+=X*Tr*7*(.4+vt);let g0=Math.sin(Me.rock)*(.26+.45*vt)*(1-.5*Tr)+Me.bank+Me.spin,ms=Math.sin(Me.rock*.63+1)*(.16+.3*vt)+(Oo.swing||0)*.9,Z0=Math.cos(g0),gs=Math.sin(g0),sf=io(Dr(jo,Z0),Dr(O0,gs)),Na=io(Dr(O0,Z0),Dr(jo,-gs));Z0=Math.cos(ms),gs=Math.sin(ms);let ui=io(Dr(po,Z0),Dr(sf,gs)),Pc=io(Dr(sf,Z0),Dr(po,-gs)),f1=Math.sin(Me.rock+1.5708)*.035*(.3+vt)*(1-.5*sr),ha=io(fe,Dr(O0,f1)),Ic=[ui[0],ui[1],ui[2],0,Pc[0],Pc[1],Pc[2],0,Na[0],Na[1],Na[2],0,ha[0],ha[1],ha[2],1];for(let wr=0;wr<16;wr++)Yt[wr]=Ic[wr];Me.fresh=!1}return Oo.phase!=="fly"&&(Me.prev=null,Me.vel=[0,0,0],Me.fresh=!0,Me.spin=0,Me.bank=0,Me.dir=null),{visible:!0,model:Yt}}function v0(X){for(let vt in a1)Je[vt]=X[vt]!==void 0?X[vt]:a1[vt]}function fa(X,vt){if(X<=1)return{phase:"home",pos:Ec.slice(),tumble:0};let Yt=Ay[X];if(Yt){let fe=Yt.amp;return{phase:"fly",pos:io(Yt.pos(),[Math.sin(vt*.55)*fe[0],Math.sin(vt*.8)*fe[1],(1-Math.cos(vt*.45))*fe[2]]),tumble:Yt.tumble}}return{phase:"floor",pos:(X>=18?hs:X>=10?Jl:Y0).slice(),tumble:0}}let no=0,mo=null;function $n(X){let vt=Math.min(.1,Math.max(0,X-no));if(no=X,S=X,lo||(lo=!0,xe.start=X),co)return null;if(Ee&&(Ee.t+=vt,Ee.t>=.7&&(Ee=null,ge=!0,H.start(ze,Object.assign({},a1,{fade:1,fadeColor:[0,0,0]})))),H.active){let Ao=H.update(vt);return Eo=Ao.camera,v0(Ao.look),o&&window.__camOverride&&(Eo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Je,window.__lookOverride),{camera:Eo,walker:null,door:1,look:Je,leaf:Go(vt)}}if(!$e&&!Ht&&S-le>Pe){let Ao=Ar(_t);Math.abs(et[Ao]-_t)<ao&&(_t=et[Ao])}let Yt=_t-Ie;if($e){let sn=Math.sign(Yt)*Math.min(yo,Math.sqrt(2*Bo*Math.abs(Yt)))-we;we+=Math.sign(sn)*Math.min(Math.abs(sn),Bo*vt),Ie+=we*vt,(Yt>0&&Ie>=_t||Yt<0&&Ie<=_t||Math.abs(_t-Ie)<1e-4)&&(Ie=_t,we=0,$e=!1)}else{let Ao=xE(Ie,_t,we,Ue,vt,3);Ie=Ao[0],we=Ao[1],Math.abs(_t-Ie)<1e-4&&Math.abs(we)<.001&&(Ie=_t,we=0)}let fe=0;for(;fe<Kd.length-1&&Ie>=et[fe+1];)fe++;let de=Kd[fe],nn=t0((Ie-et[fe])/de.dur),sr=fs[fe],Tr=fs[fe+1],rn=Ar(Ie);rn!==Jt&&(Jt=rn,So=0);let br=Math.abs(Ie-et[rn])<.02;br&&(So+=vt);let an=1-Gt(0,1.2,Math.abs(Ie-et[rn])),po=de.leaf(nn);if(po.pos?Oo=Object.assign({},po):Oo=Object.assign({},po,{pos:po.phase==="home"?Ec.slice():(fe>=10?Jl:Y0).slice()}),Ay[rn]&&an>0){let Ao=fa(rn,So);Oo.pos=Wo(Oo.pos,Ao.pos,an)}let Qn=de.walker&&(nn>.01||fe===6)?de.walker(nn):null;mo=Qn==null?null:{x:Qn,z:Qd,heading:Math.PI/2,phase:(Qn-Ly)/kE};let Vo=de.cam(nn,sr.cam(0),Tr.cam(0),Oo);if(an>0&&So>0){let Ao=fs[rn],sn=Ao.cam(0),g0=Ao.cam(So);Vo=oo(io(Vo.eye,Dr(Xd(g0.eye,sn.eye),an)),io(Vo.target,Dr(Xd(g0.target,sn.target),an)),Vo.fov+(g0.fov-sn.fov)*an,Vo.roll+(g0.roll-sn.roll)*an)}if(an>0&&!ee){let Ao=S,sn=.006*an,g0=Math.sin(Ao*.61)*.6+Math.sin(Ao*1.37+1.3)*.4,ms=Math.sin(Ao*.47+2.1)*.6+Math.sin(Ao*1.13+.4)*.4,Z0=Math.sin(Ao*.53+4)*.5+Math.sin(Ao*.97+2.6)*.5;Vo=oo(io(Vo.eye,[g0*sn,ms*sn*.7,Z0*sn]),io(Vo.target,[ms*sn*1.8,g0*sn*1.4,0]),Vo.fov,Vo.roll+Z0*.0012*an)}Eo=Vo;let Fn=n1(fe),Br=n1(fe+1),Ur=Object.assign({},Fn,de.look(nn,Fn,Br,Oo,Vo.eye));if(an>0){let Ao=n1(rn);for(let sn in Ao)typeof Ao[sn]=="number"&&(Ur[sn]=Wt(Ur[sn],Ao[sn],an))}v0(Ur);let m0=br&&Math.abs(_t-Ie)<.02?rn:-1;m0!==me&&(m0>=0&&(hi=S+Zt),me=m0,m0>=0?Kn(m0):Q0()),h.querySelectorAll("i").forEach((Ao,sn)=>Ao.classList.toggle("on",sn===rn));let wn=me>=0?j[me]:null;wn&&wn.fill&&!wn.filled&&(wn.fill(),wn.filled&&(wn.classList.remove("on"),wn.offsetWidth,wn.classList.add("on")));let O0=t0((X-xe.start)/2.6);return O0<1&&(Je.fade=Math.max(Je.fade,1-Gt(0,1,O0)),Je.fadeColor=[0,0,0]),o&&window.__camOverride&&(Eo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Je,window.__lookOverride),{camera:Eo,walker:mo,door:de.door?de.door(nn):fe>=12?1:0,look:Ee?Object.assign(Je,{fade:Math.max(Je.fade||0,t0(Ee.t/.6)),fadeColor:[0,0,0]}):Je,leaf:Go(vt)}}return o&&(window.__tour={go:It,exit:Le,wind:ot,confess(){Q0(),me=-2,H.start(Eo,Je)},note:()=>qe(),conf:H,paper:Kh().STATE,seek(X,vt){Ie=_t=et[X]+(et[X+1]-et[X])*vt,we=0,$e=!1,le=S+1e6,xe.start=S-10,lo=!0},jump(X){Ie=_t=et[X],we=0,$e=!1,So=0,le=S,xe.start=S-10,lo=!0},state:()=>({current:Ar(Ie),scroll:+Ie.toFixed(3),target:+_t.toFixed(3),shown:me,move:Math.abs(_t-Ie)>.02?{p:Ie}:null,camNow:Eo,leaf:Oo,look:Je})}),{update:$n,get active(){return _o&&!co},handover(X){if(!co)return null;let vt=t0((X-co.start)/1.8);return vt>=1?(_o=!1,null):{from:co.fromCam,fromLook:co.fromLook,k:yn(vt)}},restingDoor:()=>Te,restingLeaf(){return Ye?(Oo=Ye,Go(0)):null},mix:ii,cam:oo}}});var CE=dm(),K0=b0(),vp=cu(),l1=K0.reflection,OE=!1,Yy=(t,e,o,n,r)=>n+(t-e)*(r-n)/(o-e),mp=()=>Yy(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(mp=()=>Yy(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var Ky=()=>2*Math.atan(Math.tan(mp()*.5)*window.innerHeight/window.innerWidth),PE=Em(),nf=new PE;nf.showPanel(0);OE&&document.body.appendChild(nf.dom);var pn,Oc,ip,Nc,cp,dn;function IE(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!IE())throw CE.finish(),vp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");pn=Am()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:K0.pixelRatio});location.hash==="#list"&&vp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&vp.show(!1)});Oc=d2()();var $E=qu();ip=$E(pn,Oc,l1);Nc=Cg()(pn,Oc);cp=$g()(pn);var Cy=Zg()(pn,Oc),Oy=l3()(pn),Py=u3()(pn),Iy=z3()(pn),$y=O3()(pn),Fy=q3()(pn),ps=tx()(pn),lp=gd(),Qy=Gf(),FE=al(),fp=yd(),hp=er(),Yn=bh(),up=fx(),Zy=Fh(),{A:Lc}=M0();dn=W5()(Oc,Ky);var Rc=Y5()(pn,K0),us=ty()(pn),qy=oy()(pn),qE=ay()(pn,K0),DE=hy()(pn,K0),Dy=Ha()(pn),Gy=Kh()(pn),Hy=ja()(pn),By=Fs()(pn),la=Ry()({fps:dn,paintings:()=>Nc.interactables(),avatar:ps,onExit:()=>dn.setPaused(!1)});dn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Rc);var ds=[],Cc=[],Er=[7,2,1.6];Oc.viewer=Er;var GE=pn({cull:{enable:!0,face:"back"},uniforms:{view:()=>ds,proj:()=>Cc,yScale:1,mirrorOn:()=>l1?1:0,night:()=>hp.night,time:pn.context("time")}}),HE=pn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),Jy=document.createElement("style");Jy.textContent=`

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
`;document.head.appendChild(Jy);var C0=document.createElement("button");C0.className="painting-plaque";C0.type="button";C0.setAttribute("aria-label","Read painting");document.body.appendChild(C0);var Hr=document.createElement("div");Hr.className="story-overlay";Hr.innerHTML=`

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

		${Qy.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Hr);var vs=document.createElement("div");vs.className="museum-links";vs.innerHTML=Qy.icons("museum-link");vs.insertBefore(Hd()("museum-link"),vs.firstChild);vs.insertBefore(Zy.button("museum-link"),vs.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>vs.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(vs);var BE=Hr.querySelector("#story-title"),UE=Hr.querySelector("#story-body"),Uy=Hr.querySelector("#story-meta"),jE=Hr.querySelector(".story-contact"),of=Hr.querySelector(".story-visit");of.addEventListener("click",t=>{t.target.closest(".visit-btn")&&fi&&fp.open(fi)});var WE=Hr.querySelector(".story-close"),fi=null,e0={p:0,target:0,last:0},tb={title:lp.title,description:lp.text,isAbout:!0},za=null;function gp(t){t&&(fi=t,BE.textContent=t.title||"",UE.textContent=t.description||"",Uy.textContent=t.isAbout?"":FE(t),Uy.hidden=!!t.isAbout,jE.hidden=!t.isAbout,of.innerHTML=t.isAbout?"":fp.button(t),of.hidden=!of.innerHTML,of.hidden||fp.warm(t),Hr.classList.toggle("about-mode",!!t.isAbout),Hr.classList.add("open"),e0.target=t.isAbout?1:0,za=t,C0.classList.remove("visible"),dn.setPaused(!0))}function xp(){Hr.classList.remove("open"),e0.target=0,fi=null,za=null,dn.setPaused(!1)}function eb(t){t&&(t.preventDefault(),t.stopPropagation()),za&&gp(za)}C0.addEventListener("pointerup",eb,!0);C0.addEventListener("touchend",eb,{passive:!1,capture:!0});C0.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),fi===null&&za&&gp(za)},!0);WE.addEventListener("click",xp);Hr.addEventListener("click",t=>{t.target===Hr&&xp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&Hr.classList.contains("open")&&xp()});function jy(t,e){let o=e[0],n=e[1],r=e[2];return[t[0]*o+t[4]*n+t[8]*r+t[12],t[1]*o+t[5]*n+t[9]*r+t[13],t[2]*o+t[6]*n+t[10]*r+t[14],t[3]*o+t[7]*n+t[11]*r+t[15]]}function VE(){if(fi)return;if(la.active){za=null,C0.classList.remove("visible");return}let t=Nc.interactables(),e=dn.forward[0],o=dn.forward[2],n=Math.hypot(e,o)||1,r=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-dn.pos[0],v=i[2]-dn.pos[2],h=-(l*c+v*f),u=Math.abs(l*f-v*c),d=-(e*c+o*f)/n,p=s.side==="end"?11:8,m=(s.width||2)/2;d>.9&&h>.5&&h<p&&u<m+.8&&h<a&&(r=s,a=h)}if(!r){let s=dn.pos[0],i=dn.pos[2];e/n>.85&&s<13.6&&i>Lc.z0-.5&&i<Lc.z1+.5&&(r=Object.assign({},tb,{plaqueTitle:lp.name}))}r?(za=r,C0.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,C0.classList.add("visible")):(za=null,C0.classList.remove("visible"))}var af=Qi();function XE(){let t=ps.state;if(!t||!t.glowPos)return null;let e=jy(dn.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=jy(dn.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var dp=null;window.addEventListener("pointerdown",t=>{dp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=dp;if(dp=null,!e||fi||la.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=XE();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:t.clientX,a=n?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),gp(tb))},!0);function YE(t){let e=Math.min(Math.max(t-e0.last,0),.1);e0.last=t;let o=e/1.6;if(e0.p=e0.target>e0.p?Math.min(1,e0.p+o):Math.max(0,e0.p-o),e0.p<=0)return;let n=e0.p<.5?2*e0.p*e0.p:1-Math.pow(-2*e0.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=ps.state,s=a&&a.hipsPos?a.hipsPos[0]:Lc.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:Lc.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=dn.pos,v=dn.forward,h=[l[0],l[1],l[2]],u=[l[0]+v[0],l[1]+v[1],l[2]+v[2]],d=(x,b)=>x.map((w,_)=>w+(b[_]-w)*n),p=[Lc.cx-6.2,1.7,Lc.zc],m=1-n,g=h.map((x,b)=>m*m*x+2*m*n*p[b]+n*n*c[b]);af.lookAt(dn.view(),g,d(u,f),[0,1,0])}var ob=/[?&]studio\b/.test(location.search);if(ob){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",e=>{pp.takes(e)||er().toggle()}),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&er().toggle()})}var pp=(()=>{let t={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},e=null,o=null,n=null,r=(c,f)=>{n&&(n.textContent=c,n.classList.add("on"),t.hintUntil=f?t.now+f:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),e=document.createElement("div"),e.className="koi-feed",e.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(e),o=e.querySelector(".koi-feed-btn"),n=e.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",f=>{f.stopPropagation(),t.mode==="idle"&&(t.mode="aim",t.holdAt=t.now-t.offset,t.since=t.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),r("Touch the water where it should fall"))})},s=(c,f)=>{let l=af.multiply([],Cc,ds),v=af.invert([],l);if(!v)return null;let h=c/window.innerWidth*2-1,u=1-f/window.innerHeight*2,d=[0,0,0,0];for(let p=0;p<4;p++)d[p]=v[p]*h+v[4+p]*u+v[8+p]*1+v[12+p];return[d[0]/d[3]-Er[0],d[1]/d[3]-Er[1],d[2]/d[3]-Er[2]]},i=()=>{t.holdAt!==null&&(t.offset=t.now-t.holdAt),t.holdAt=null,t.mode="idle",t.doneShot=t.lastShot,document.body.classList.remove("koi-aim"),n&&n.classList.remove("on")};return{time(c){return t.now=c,t.holdAt!==null?t.holdAt:c-t.offset},update(c){e||a(),c.shot!==t.lastShot&&(t.lastShot=c.shot);let f=Fs();t.mode==="idle"?o.classList.toggle("on",!!c.pond&&t.doneShot!==c.shot):t.mode==="aim"?t.now-t.since>40&&i():t.mode==="watch"&&(f.feeding()&&(t.fedTill=t.now),(t.now-t.fedTill>5&&t.now-t.since>8||t.now-t.since>60)&&i()),t.hintUntil&&t.now>t.hintUntil&&(n.classList.remove("on"),t.hintUntil=0)},takes(c){if(t.mode==="idle")return!1;let f=Fs(),l=s(c.clientX,c.clientY),v=l&&f.poolHit(Er,l);return v?(f.feedAt(v[0],v[1]),t.fedTill=t.now,t.mode==="aim"&&r("and they come, like embers through the dark",5),t.mode="watch",t.since=t.now,document.body.classList.remove("koi-aim"),!0):(t.mode==="aim"&&r("Upon the water, there\u2026"),!0)}}})(),ci={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},li=null,rf=!1,i1=!1;function KE(t,e,o,n){let r=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),f=Math.sin(n);return af.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function QE(t){let e=window.innerWidth/window.innerHeight,o=Rc.shot,n=la.active?la.update(t):null,r=n?null:la.handover(t),a=null,s=ci;if(n){a=n.camera,s=n.look,li=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;ps.setWalk(i),rf=!!i,us.setOpen(n.door||0)}else li=la.restingLeaf(),ps.setWalk(null),rf=!1,us.setOpen(la.restingDoor());if(r){let i=dn.pos,c=dn.forward,f=la.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],Ky()*180/Math.PI,0);a=la.mix(r.from,f,r.k),s={};for(let l in ci)s[l]=Array.isArray(ci[l])?ci[l]:r.fromLook[l]+(ci[l]-r.fromLook[l])*r.k}if(a&&n&&(a=up.apply(a,t)),ob&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=Fs().previewCam(pp.time(t));pp.update(i),a=i,s=Object.assign({},ci,{fade:i.fade,focus:8})}if(a)KE(ds,a.eye,a.target,a.roll||0),af.perspective(Cc,a.fov*Math.PI/180,e,.1,700),Er[0]=a.eye[0],Er[1]=a.eye[1],Er[2]=a.eye[2];else{let i=dn.view(),c=dn.proj();for(let h=0;h<16;h++)ds[h]=i[h],Cc[h]=c[h];let f=i[12],l=i[13],v=i[14];Er[0]=-(i[0]*f+i[1]*l+i[2]*v),Er[1]=-(i[4]*f+i[5]*l+i[6]*v),Er[2]=-(i[8]*f+i[9]*l+i[10]*v)}for(let i in ci)o[i]=s[i];n&&up.pull(o,t)}var p0={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},rp=[9,9,9,9],Wy=[0,0,0,0],tf=0,ap=0,zc=null,Vy=0,Xy=0,ef=0;function ZE(t){let e=Math.min(.1,Math.max(0,t-Vy));Vy=t,p0.focus=Rc.shot.focus,p0.aperture=K0.post>=2?Rc.shot.aperture:0;for(let s=0;s<4;s++)rp[s]+=e,p0.wake[s][3]=Wy[s]*Math.exp(-rp[s]/1.1);let o=li&&li.visible?li.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(zc){let i=[s[0]-zc[0],s[1]-zc[1],s[2]-zc[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let h=0;h<3;h++)p0.wakeDir[h]+=(i[h]/c-p0.wakeDir[h])*l;let v=Math.hypot(p0.wakeDir[0],p0.wakeDir[1],p0.wakeDir[2])||1;for(let h=0;h<3;h++)p0.wakeDir[h]/=v;if(ap+=e,ap>.14){ap=0;let h=p0.wake[tf];h[0]=s[0],h[1]=s[1],h[2]=s[2],Wy[tf]=Math.min(1,(f-.12)/1.6)*.5,rp[tf]=0,tf=(tf+1)%4}}}zc=s}else o||(zc=null);let n=us.openNow?us.openNow():0,r=e>0?(n-Xy)/e:0;Xy=n;let a=Math.max(-1,Math.min(1,r*1.2));ef+=(a-ef)*Math.min(1,e*(Math.abs(a)>Math.abs(ef)?6:.7)),p0.gust[0]+=ef*5.5*e,p0.gust[1]=Math.abs(ef)}var sp=0,c1=!1;pn.frame(function({time:t}){if(document.body.classList.contains("visiting")){sp=0;return}nf.begin(),hp.tick(t);let e=la.active&&up.resting&&hp.settled&&(K0.isPhone||K0.scale<1||K0.level>0);if(e){if(c1=!c1,c1){nf.end();return}}else c1=!1;let o=t-sp;sp=t,K0.frame(e?o/2:o),l1=K0.reflection,dn.tick({time:t}),YE(t),Nc.update(dn.pos,dn.fmouse[1],mp()),VE(),QE(t),Yn.update(ds,Cc,Er),Zy.listen(Er),i1=!rf&&Yn.room("stair")&&(!Yn.room("court")||Er[0]<.5||Er[2]>30),ps.setPiano(i1),ZE(t),Rc.capture(arguments[0],{view:ds,proj:Cc,eye:Er},()=>{GE(()=>{l1&&Yn.floor&&HE(()=>{Yn.room("studio",!0)&&By({reflected:!0}),Yn.zone!=="studio"&&(ip(),Cy({reflected:!0}),Dy(),Yn.room("stair",!0)&&(Hy({reflected:!0}),Gy({reflected:!0,view:ds})),Yn.room("court",!0)&&Fy(),(i1||Yn.room("court",!0)||rf)&&ps(),cp(Nc.batch()),Yn.room("street",!0)&&Oy(),Yn.room("garden",!0)&&Iy(),Yn.room("florence",!0)&&$y(),qy(li),us(),Py(),us.glass())}),Yn.room("studio")&&By(),Yn.zone!=="studio"&&(ip(),Cy(),Dy(),Yn.room("stair")&&(Hy(),Gy({view:ds})),Yn.room("court")&&Fy(),(i1||Yn.room("court")||rf)&&ps(),cp(Nc.batch()),Yn.room("street")&&Oy(),Yn.room("garden")&&(Iy(),DE()),Yn.room("florence")&&$y(),qy(li),us(),qE(p0),Py(),us.glass())})}),Rc.present(),nf.end()});})();
