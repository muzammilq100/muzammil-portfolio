"use strict";(()=>{var St=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Qm=St((hz,Km)=>{"use strict";var tc=document.getElementById("loader"),Ji=tc&&tc.querySelector(".loader-name"),kl=0,lh=0,fh=!1,v6=performance.now(),ec=.06,Zi=0,Ru=0,jm=!1,m6=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function g6(t){if(!Ji)return;let e=Ji.offsetWidth||1,r=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Ji.style.webkitMaskPosition=r,Ji.style.maskPosition=r}function Xm(t){let e=Math.min(.05,Ru?(t-Ru)/1e3:.016);Ru=t;let o=fh?.75:.22+(ec-Zi)*1.2;if(Zi=Math.min(ec,Zi+Math.max(0,o)*e),m6&&(Zi=ec),g6(Zi),fh&&Zi>=.999){jm||(jm=!0,setTimeout(Ym,650));return}requestAnimationFrame(Xm)}Ji&&requestAnimationFrame(Xm);function Wm(){let t=kl?lh/Math.max(kl,24):0;ec=Math.max(ec,Math.min(.9,.06+t*.84))}function Ym(){tc&&(tc.classList.add("done"),setTimeout(()=>tc.remove(),1400))}function Ou(){fh||(fh=!0,window.__galleryReady=!0,tc&&(ec=1,Ji||Ym()))}var Vm=null;function x6(){clearTimeout(Vm),lh>=kl&&performance.now()-v6>600&&(Vm=setTimeout(()=>{lh>=kl&&Ou()},450))}setTimeout(Ou,2e4);var y6=t=>/(^|\/)(res|images)\//.test(t),ch=window.fetch.bind(window);async function b6(t,e){let o=await ch(t+".gz",e);if(!o.ok)throw new Error("no .gz");let r=new Uint8Array(await o.arrayBuffer());if(!(r[0]===31&&r[1]===139))return new Response(r);let n=new Blob([r]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(n).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!y6(o))return ch(t,e);kl++,Wm();let r=a=>(lh++,Wm(),x6(),a),n;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?n=b6(o,e).catch(()=>ch(t,e)):n=ch(t,e),n.then(r,a=>{throw r(),a})};Km.exports={finish:Ou}});var Cr=St((uz,e2)=>{"use strict";var Zm=typeof navigator!="undefined"&&navigator.userAgent||"",w6=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,La=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Zm)||/Macintosh/.test(Zm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||w6,Jm=typeof window!="undefined"&&window.devicePixelRatio||1,$o={isPhone:La,pixelRatio:La?Math.min(Jm,1.5):Math.min(Jm,2),reflection:!La,gardenDetail:La?0:1,leafShare:La?.65:1,motion:!La,post:La?1:2,level:La?1:0};$o.scale=1;var _6=La?.55:.6,Sl=0,hh=0,El=0,zl=0,oc=1,Al=0,uh=48,nc=null,Cu=0;function M6(t){nc={fps:t,scale:$o.scale},$o.scale>.86?$o.scale=.85:$o.reflection?$o.stepDown():$o.scale>.71?$o.scale=.7:$o.stepDown()||($o.scale=Math.max(_6,$o.scale-.1))}var t2=!0;try{/[?&]noadapt\b/.test(location.search)&&(t2=!1)}catch(t){}$o.frame=t=>{if(!t2)return;if(!(t>0)||t>1){Sl=0,hh=0;return}if(Sl+=t,hh++,Sl<.75)return;let e=hh/Sl;if(Sl=0,hh=0,Al>0&&(Al-=.75,Al<=0&&(oc=1)),nc){if(e<nc.fps*1.08&&nc.scale>$o.scale){if(++Cu>=2){$o.scale=1,oc=1,Al=0,uh=Math.min(uh,e*.85),Cu=0,El=0,nc=null;return}}else Cu=0;nc=null}if(e<uh){if(zl=0,++El>=2){if(El=0,$o.scale>.61&&$o.climbed){oc=$o.scale-.05,Al=40,$o.scale=oc,$o.climbed=!1;return}M6(e)}}else e>Math.max(uh*1.15,55)?(El=0,++zl>=6&&$o.scale<oc-.001?($o.scale=Math.min(oc,$o.scale+.05),$o.climbed=!0,zl=0):zl>=6&&($o.climbed=!1)):(El=0,zl=0)};$o.stepDown=()=>{if($o.reflection)$o.reflection=!1;else if($o.gardenDetail>0||$o.motion)$o.gardenDetail=0,$o.motion=!1,$o.leafShare=Math.min($o.leafShare,.65);else if($o.post>0)$o.post--;else return!1;return $o.level++,!0};e2.exports=$o});var Pu=St((dz,o2)=>{"use strict";o2.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var dh=St((pz,a2)=>{"use strict";var j0={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},n2='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',r2='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';j0.instagramUrl="https://instagram.com/"+j0.instagram;j0.mailUrl="mailto:"+j0.email+"?subject="+encodeURIComponent("Your paintings");j0.icons=t=>`
	<a class="${t}" href="${j0.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${j0.instagram}" title="Instagram">${n2}</a>
	<a class="${t}" href="${j0.mailUrl}" aria-label="Email ${j0.email}" title="Email">${r2}</a>`;j0.line=t=>`
	<span class="${t}">
		<a href="${j0.instagramUrl}" target="_blank" rel="noopener">${n2}<span>@${j0.instagram}</span></a>
		<a href="${j0.mailUrl}">${r2}<span>${j0.email}</span></a>
	</span>`;a2.exports=j0});var Tl=St((vz,s2)=>{"use strict";s2.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var Iu=St((mz,l2)=>{"use strict";var k6=Pu(),S6=dh(),i2=Tl(),E6=Cr(),os=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),z6=`
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
`,W0=null;function A6(t){if(W0){W0.hidden=!1,requestAnimationFrame(()=>W0.classList.add("on"));return}let e=document.createElement("style");e.textContent=z6,document.head.appendChild(e);let o=!E6.isPhone;W0=document.createElement("div"),W0.className="plist",W0.setAttribute("role","region"),W0.setAttribute("aria-label","All paintings"),W0.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${S6.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${k6.map(n=>`
			<article class="plist-item" id="${os(n.slug)}">
				<img loading="lazy" decoding="async" alt="${os(n.title)}, ${os(i2(n))}"
					src="images/web/${os(n.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${os(n.file)}'">
				<p class="plist-meta">${os(i2(n))}</p>
				<h2>${os(n.title)}</h2>
				<details><summary>Read its story</summary>
					${String(n.description).split(/\n\s*\n/).map(a=>`<p>${os(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(n=>W0.addEventListener(n,a=>a.stopPropagation(),{passive:!0}));let r=W0.querySelector(".plist-close");r&&r.addEventListener("click",c2),document.body.appendChild(W0),requestAnimationFrame(()=>W0.classList.add("on"))}function c2(){W0&&(W0.classList.remove("on"),setTimeout(()=>{W0.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}l2.exports={show:A6,hide:c2}});var f2=St(($u,Du)=>{(function(t,e){typeof $u=="object"&&typeof Du!="undefined"?Du.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})($u,function(){var t=function(){function e(v){return n.appendChild(v.dom),v}function o(v){for(var d=0;d<n.children.length;d++)n.children[d].style.display=d===v?"block":"none";r=v}var r=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(v){v.preventDefault(),o(++r%n.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:n,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var v=(performance||Date).now();if(f.update(v-a,200),v>s+1e3&&(c.update(1e3*i/(v-s),100),s=v,i=0,l)){var d=performance.memory;l.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return v},update:function(){a=this.end()},domElement:n,setMode:o}};return t.Panel=function(e,o,r){var n=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,v=2*i,d=3*i,p=15*i,u=74*i,h=30*i,g=document.createElement("canvas");g.width=c,g.height=f,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*i+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=r,m.fillRect(0,0,c,f),m.fillStyle=o,m.fillText(e,l,v),m.fillRect(d,p,u,h),m.fillStyle=r,m.globalAlpha=.9,m.fillRect(d,p,u,h),{dom:g,update:function(x,y){n=Math.min(n,x),a=Math.max(a,x),m.fillStyle=r,m.globalAlpha=1,m.fillRect(0,0,c,p),m.fillStyle=o,m.fillText(s(x)+" "+e+" ("+s(n)+"-"+s(a)+")",l,v),m.drawImage(g,d+i,p,u-i,h,d,p,u-i,h),m.fillRect(d+u-i,p,i,h),m.fillStyle=r,m.globalAlpha=.9,m.fillRect(d+u-i,p,i,s((1-x/y)*h))}}},t})});var h2=St((qu,Fu)=>{(function(t,e){typeof qu=="object"&&typeof Fu!="undefined"?Fu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(qu,function(){"use strict";var t=function(w){return w instanceof Uint8Array||w instanceof Uint16Array||w instanceof Uint32Array||w instanceof Int8Array||w instanceof Int16Array||w instanceof Int32Array||w instanceof Float32Array||w instanceof Float64Array||w instanceof Uint8ClampedArray},e=function(w,T){for(var C=Object.keys(T),it=0;it<C.length;++it)w[C[it]]=T[C[it]];return w},o=`
`;function r(w){return typeof atob!="undefined"?atob(w):"base64:"+w}function n(w){var T=new Error("(regl) "+w);throw console.error(T),T}function a(w,T){w||n(T)}function s(w){return w?": "+w:""}function i(w,T,C){w in T||n("unknown parameter ("+w+")"+s(C)+". possible values: "+Object.keys(T).join())}function c(w,T){t(w)||n("invalid parameter type"+s(T)+". must be a typed array")}function f(w,T){switch(T){case"number":return typeof w=="number";case"object":return typeof w=="object";case"string":return typeof w=="string";case"boolean":return typeof w=="boolean";case"function":return typeof w=="function";case"undefined":return typeof w=="undefined";case"symbol":return typeof w=="symbol"}}function l(w,T,C){f(w,T)||n("invalid parameter type"+s(C)+". expected "+T+", got "+typeof w)}function v(w,T){w>=0&&(w|0)===w||n("invalid parameter type, ("+w+")"+s(T)+". must be a nonnegative integer")}function d(w,T,C){T.indexOf(w)<0&&n("invalid value"+s(C)+". must be one of: "+T)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function u(w){Object.keys(w).forEach(function(T){p.indexOf(T)<0&&n('invalid regl constructor argument "'+T+'". must be one of '+p)})}function h(w,T){for(w=w+"";w.length<T;)w=" "+w;return w}function g(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function m(w,T){this.number=w,this.line=T,this.errors=[]}function x(w,T,C){this.file=w,this.line=T,this.message=C}function y(){var w=new Error,T=(w.stack||w).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(T);if(C)return C[1];var it=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(T);return it?it[1]:"unknown"}function b(){var w=new Error,T=(w.stack||w).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(T);if(C)return C[1];var it=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(T);return it?it[1]:"unknown"}function M(w,T){var C=w.split(`
`),it=1,bt=0,rt={unknown:new g,0:new g};rt.unknown.name=rt[0].name=T||y(),rt.unknown.lines.push(new m(0,""));for(var pt=0;pt<C.length;++pt){var Ot=C[pt],$t=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Ot);if($t)switch($t[1]){case"line":var Ut=/(\d+)(\s+\d+)?/.exec($t[2]);Ut&&(it=Ut[1]|0,Ut[2]&&(bt=Ut[2]|0,bt in rt||(rt[bt]=new g)));break;case"define":var Dt=/SHADER_NAME(_B64)?\s+(.*)$/.exec($t[2]);Dt&&(rt[bt].name=Dt[1]?r(Dt[2]):Dt[2]);break}rt[bt].lines.push(new m(it++,Ot))}return Object.keys(rt).forEach(function(Kt){var ne=rt[Kt];ne.lines.forEach(function(Ct){ne.index[Ct.number]=Ct})}),rt}function _(w){var T=[];return w.split(`
`).forEach(function(C){if(!(C.length<5)){var it=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);it?T.push(new x(it[1]|0,it[2]|0,it[3].trim())):C.length>0&&T.push(new x("unknown",0,C))}}),T}function k(w,T){T.forEach(function(C){var it=w[C.file];if(it){var bt=it.index[C.line];if(bt){bt.errors.push(C),it.hasErrors=!0;return}}w.unknown.hasErrors=!0,w.unknown.lines[0].errors.push(C)})}function A(w,T,C,it,bt){if(!w.getShaderParameter(T,w.COMPILE_STATUS)){var rt=w.getShaderInfoLog(T),pt=it===w.FRAGMENT_SHADER?"fragment":"vertex";ft(C,"string",pt+" shader source must be a string",bt);var Ot=M(C,bt),$t=_(rt);k(Ot,$t),Object.keys(Ot).forEach(function(Ut){var Dt=Ot[Ut];if(!Dt.hasErrors)return;var Kt=[""],ne=[""];function Ct(Zt,Q){Kt.push(Zt),ne.push(Q||"")}Ct("file number "+Ut+": "+Dt.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Dt.lines.forEach(function(Zt){if(Zt.errors.length>0){Ct(h(Zt.number,4)+"|  ","background-color:yellow; font-weight:bold"),Ct(Zt.line+o,"color:red; background-color:yellow; font-weight:bold");var Q=0;Zt.errors.forEach(function(vt){var Ht=vt.message,ve=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Ht);if(ve){var kt=ve[1];switch(Ht=ve[2],kt){case"assign":kt="=";break}Q=Math.max(Zt.line.indexOf(kt,Q),0)}else Q=0;Ct(h("| ",6)),Ct(h("^^^",Q+3)+o,"font-weight:bold"),Ct(h("| ",6)),Ct(Ht+o,"font-weight:bold")}),Ct(h("| ",6)+o)}else Ct(h(Zt.number,4)+"|  "),Ct(Zt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(ne[0]=Kt.join("%c"),console.log.apply(console,ne)):console.log(Kt.join(""))}),a.raise("Error compiling "+pt+" shader, "+Ot[0].name)}}function z(w,T,C,it,bt){if(!w.getProgramParameter(T,w.LINK_STATUS)){var rt=w.getProgramInfoLog(T),pt=M(C,bt),Ot=M(it,bt),$t='Error linking program with vertex shader, "'+Ot[0].name+'", and fragment shader "'+pt[0].name+'"';typeof document!="undefined"?console.log("%c"+$t+o+"%c"+rt,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log($t+o+rt),a.raise($t)}}function D(w){w._commandRef=y()}function P(w,T,C,it){D(w);function bt($t){return $t?it.id($t):0}w._fragId=bt(w.static.frag),w._vertId=bt(w.static.vert);function rt($t,Ut){Object.keys(Ut).forEach(function(Dt){$t[it.id(Dt)]=!0})}var pt=w._uniformSet={};rt(pt,T.static),rt(pt,T.dynamic);var Ot=w._attributeSet={};rt(Ot,C.static),rt(Ot,C.dynamic),w._hasCount="count"in w.static||"count"in w.dynamic||"elements"in w.static||"elements"in w.dynamic}function G(w,T){var C=b();n(w+" in command "+(T||y())+(C==="unknown"?"":" called from "+C))}function I(w,T,C){w||G(T,C||y())}function H(w,T,C,it){w in T||G("unknown parameter ("+w+")"+s(C)+". possible values: "+Object.keys(T).join(),it||y())}function ft(w,T,C,it){f(w,T)||G("invalid parameter type"+s(C)+". expected "+T+", got "+typeof w,it||y())}function Nt(w){w()}function _t(w,T,C){w.texture?d(w.texture._texture.internalformat,T,"unsupported texture format for attachment"):d(w.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var xt=33071,ut=9728,Yt=9984,Se=9985,Oe=9986,oo=9987,me=5120,Ke=5121,Ye=5122,nt=5123,V=5124,mt=5125,Lt=5126,fe=32819,_e=32820,ae=33635,qt=34042,at=36193,Wt={};Wt[me]=Wt[Ke]=1,Wt[Ye]=Wt[nt]=Wt[at]=Wt[ae]=Wt[fe]=Wt[_e]=2,Wt[V]=Wt[mt]=Wt[Lt]=Wt[qt]=4;function Ne(w,T){return w===_e||w===fe||w===ae?2:w===qt?4:Wt[w]*T}function oe(w){return!(w&w-1)&&!!w}function It(w,T,C){var it,bt=T.width,rt=T.height,pt=T.channels;a(bt>0&&bt<=C.maxTextureSize&&rt>0&&rt<=C.maxTextureSize,"invalid texture shape"),(w.wrapS!==xt||w.wrapT!==xt)&&a(oe(bt)&&oe(rt),"incompatible wrap mode for texture, both width and height must be power of 2"),T.mipmask===1?bt!==1&&rt!==1&&a(w.minFilter!==Yt&&w.minFilter!==Oe&&w.minFilter!==Se&&w.minFilter!==oo,"min filter requires mipmap"):(a(oe(bt)&&oe(rt),"texture must be a square power of 2 to support mipmapping"),a(T.mipmask===(bt<<1)-1,"missing or incomplete mipmap data")),T.type===Lt&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(w.minFilter===ut&&w.magFilter===ut,"filter not supported, must enable oes_texture_float_linear"),a(!w.genMipmaps,"mipmap generation not supported with float textures"));var Ot=T.images;for(it=0;it<16;++it)if(Ot[it]){var $t=bt>>it,Ut=rt>>it;a(T.mipmask&1<<it,"missing mipmap data");var Dt=Ot[it];if(a(Dt.width===$t&&Dt.height===Ut,"invalid shape for mip images"),a(Dt.format===T.format&&Dt.internalformat===T.internalformat&&Dt.type===T.type,"incompatible type for mip image"),!Dt.compressed)if(Dt.data){var Kt=Math.ceil(Ne(Dt.type,pt)*$t/Dt.unpackAlignment)*Dt.unpackAlignment;a(Dt.data.byteLength===Kt*Ut,"invalid data for image, buffer size is inconsistent with image format")}else Dt.element||Dt.copy}else w.genMipmaps||a((T.mipmask&1<<it)===0,"extra mipmap data");T.compressed&&a(!w.genMipmaps,"mipmap generation for compressed images not supported")}function $e(w,T,C,it){var bt=w.width,rt=w.height,pt=w.channels;a(bt>0&&bt<=it.maxTextureSize&&rt>0&&rt<=it.maxTextureSize,"invalid texture shape"),a(bt===rt,"cube map must be square"),a(T.wrapS===xt&&T.wrapT===xt,"wrap mode not supported by cube map");for(var Ot=0;Ot<C.length;++Ot){var $t=C[Ot];a($t.width===bt&&$t.height===rt,"inconsistent cube map face shape"),T.genMipmaps&&(a(!$t.compressed,"can not generate mipmap for compressed textures"),a($t.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Ut=$t.images,Dt=0;Dt<16;++Dt){var Kt=Ut[Dt];if(Kt){var ne=bt>>Dt,Ct=rt>>Dt;a($t.mipmask&1<<Dt,"missing mipmap data"),a(Kt.width===ne&&Kt.height===Ct,"invalid shape for mip images"),a(Kt.format===w.format&&Kt.internalformat===w.internalformat&&Kt.type===w.type,"incompatible type for mip image"),Kt.compressed||(Kt.data?a(Kt.data.byteLength===ne*Ct*Math.max(Ne(Kt.type,pt),Kt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Kt.element||Kt.copy)}}}}var S=e(a,{optional:Nt,raise:n,commandRaise:G,command:I,parameter:i,commandParameter:H,constructor:u,type:l,commandType:ft,isTypedArray:c,nni:v,oneOf:d,shaderError:A,linkError:z,callSite:b,saveCommandRef:D,saveDrawInfo:P,framebufferFormat:_t,guessCommand:y,texture2D:It,textureCube:$e}),De=0,Be=0,co=5,mo=6;function go(w,T){this.id=De++,this.type=w,this.data=T}function No(w){return w.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function zo(w){if(w.length===0)return[];var T=w.charAt(0),C=w.charAt(w.length-1);if(w.length>1&&T===C&&(T==='"'||T==="'"))return['"'+No(w.substr(1,w.length-2))+'"'];var it=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(w);if(it)return zo(w.substr(0,it.index)).concat(zo(it[1])).concat(zo(w.substr(it.index+it[0].length)));var bt=w.split(".");if(bt.length===1)return['"'+No(w)+'"'];for(var rt=[],pt=0;pt<bt.length;++pt)rt=rt.concat(zo(bt[pt]));return rt}function rn(w){return"["+zo(w).join("][")+"]"}function Xn(w,T){return new go(w,rn(T+""))}function O0(w){return typeof w=="function"&&!w._reglType||w instanceof go}function et(w,T){if(typeof w=="function")return new go(Be,w);if(typeof w=="number"||typeof w=="boolean")return new go(co,w);if(Array.isArray(w))return new go(mo,w.map((C,it)=>et(C,T+"["+it+"]")));if(w instanceof go)return w;S(!1,"invalid option type in uniform "+T)}var Bt={DynamicVariable:go,define:Xn,isDynamic:O0,unbox:et,accessor:rn},B={next:typeof requestAnimationFrame=="function"?function(w){return requestAnimationFrame(w)}:function(w){return setTimeout(w,16)},cancel:typeof cancelAnimationFrame=="function"?function(w){return cancelAnimationFrame(w)}:clearTimeout},Y=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function J(){var w={"":0},T=[""];return{id:function(C){var it=w[C];return it||(it=w[C]=T.length,T.push(C),it)},str:function(C){return T[C]}}}function Vt(w,T,C){var it=document.createElement("canvas");e(it.style,{border:0,margin:0,padding:0,top:0,left:0}),w.appendChild(it),w===document.body&&(it.style.position="absolute",e(w.style,{margin:0,padding:0}));function bt(){var Ot=window.innerWidth,$t=window.innerHeight;if(w!==document.body){var Ut=w.getBoundingClientRect();Ot=Ut.right-Ut.left,$t=Ut.bottom-Ut.top}it.width=C*Ot,it.height=C*$t,e(it.style,{width:Ot+"px",height:$t+"px"})}var rt;w!==document.body&&typeof ResizeObserver=="function"?(rt=new ResizeObserver(function(){setTimeout(bt)}),rt.observe(w)):window.addEventListener("resize",bt,!1);function pt(){rt?rt.disconnect():window.removeEventListener("resize",bt),w.removeChild(it)}return bt(),{canvas:it,onDestroy:pt}}function Xt(w,T){function C(it){try{return w.getContext(it,T)}catch(bt){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function zt(w){return typeof w.nodeName=="string"&&typeof w.appendChild=="function"&&typeof w.getBoundingClientRect=="function"}function Rt(w){return typeof w.drawArrays=="function"||typeof w.drawElements=="function"}function Qt(w){return typeof w=="string"?w.split():(S(Array.isArray(w),"invalid extension array"),w)}function se(w){return typeof w=="string"?(S(typeof document!="undefined","not supported outside of DOM"),document.querySelector(w)):w}function ce(w){var T=w||{},C,it,bt,rt,pt={},Ot=[],$t=[],Ut=typeof window=="undefined"?1:window.devicePixelRatio,Dt=!1,Kt=function(Zt){Zt&&S.raise(Zt)},ne=function(){};if(typeof T=="string"?(S(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(T),S(C,"invalid query string for element")):typeof T=="object"?zt(T)?C=T:Rt(T)?(rt=T,bt=rt.canvas):(S.constructor(T),"gl"in T?rt=T.gl:"canvas"in T?bt=se(T.canvas):"container"in T&&(it=se(T.container)),"attributes"in T&&(pt=T.attributes,S.type(pt,"object","invalid context attributes")),"extensions"in T&&(Ot=Qt(T.extensions)),"optionalExtensions"in T&&($t=Qt(T.optionalExtensions)),"onDone"in T&&(S.type(T.onDone,"function","invalid or missing onDone callback"),Kt=T.onDone),"profile"in T&&(Dt=!!T.profile),"pixelRatio"in T&&(Ut=+T.pixelRatio,S(Ut>0,"invalid pixel ratio"))):S.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?bt=C:it=C),!rt){if(!bt){S(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Ct=Vt(it||document.body,Kt,Ut);if(!Ct)return null;bt=Ct.canvas,ne=Ct.onDestroy}pt.premultipliedAlpha===void 0&&(pt.premultipliedAlpha=!0),rt=Xt(bt,pt)}return rt?{gl:rt,canvas:bt,container:it,extensions:Ot,optionalExtensions:$t,pixelRatio:Ut,profile:Dt,onDone:Kt,onDestroy:ne}:(ne(),Kt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function xe(w,T){var C={};function it(pt){S.type(pt,"string","extension name must be string");var Ot=pt.toLowerCase(),$t;try{$t=C[Ot]=w.getExtension(Ot)}catch(Ut){}return!!$t}for(var bt=0;bt<T.extensions.length;++bt){var rt=T.extensions[bt];if(!it(rt))return T.onDestroy(),T.onDone('"'+rt+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return T.optionalExtensions.forEach(it),{extensions:C,restore:function(){Object.keys(C).forEach(function(pt){if(C[pt]&&!it(pt))throw new Error("(regl): error restoring extension "+pt)})}}}function Ge(w,T){for(var C=Array(w),it=0;it<w;++it)C[it]=T(it);return C}var ie=5120,Ve=5121,Ze=5122,ge=5123,je=5124,Uo=5125,Ao=5126;function Ie(w){for(var T=16;T<=1<<28;T*=16)if(w<=T)return T;return 0}function He(w){var T,C;return T=(w>65535)<<4,w>>>=T,C=(w>255)<<3,w>>>=C,T|=C,C=(w>15)<<2,w>>>=C,T|=C,C=(w>3)<<1,w>>>=C,T|=C,T|w>>1}function lo(){var w=Ge(8,function(){return[]});function T(rt){var pt=Ie(rt),Ot=w[He(pt)>>2];return Ot.length>0?Ot.pop():new ArrayBuffer(pt)}function C(rt){w[He(rt.byteLength)>>2].push(rt)}function it(rt,pt){var Ot=null;switch(rt){case ie:Ot=new Int8Array(T(pt),0,pt);break;case Ve:Ot=new Uint8Array(T(pt),0,pt);break;case Ze:Ot=new Int16Array(T(2*pt),0,pt);break;case ge:Ot=new Uint16Array(T(2*pt),0,pt);break;case je:Ot=new Int32Array(T(4*pt),0,pt);break;case Uo:Ot=new Uint32Array(T(4*pt),0,pt);break;case Ao:Ot=new Float32Array(T(4*pt),0,pt);break;default:return null}return Ot.length!==pt?Ot.subarray(0,pt):Ot}function bt(rt){C(rt.buffer)}return{alloc:T,free:C,allocType:it,freeType:bt}}var j=lo();j.zero=lo();var ht=3408,pe=3410,he=3411,Pe=3412,un=3413,v0=3414,H0=3415,dn=33901,C0=33902,pn=3379,To=3386,i0=34921,en=36347,Yn=36348,nr=35661,rr=35660,Jo=34930,Lr=36349,Tn=34076,Kr=34024,qo=7936,vn=7937,Nr=7938,$s=35724,da=34047,Ds=36063,Of=34852,Ka=3553,Pi=34067,al=34069,D1=33984,za=6408,sl=5126,P0=5121,il=36160,qs=36053,Qb=36064,Zb=16384,Jb=function(w,T){var C=1;T.ext_texture_filter_anisotropic&&(C=w.getParameter(da));var it=1,bt=1;T.webgl_draw_buffers&&(it=w.getParameter(Of),bt=w.getParameter(Ds));var rt=!!T.oes_texture_float;if(rt){var pt=w.createTexture();w.bindTexture(Ka,pt),w.texImage2D(Ka,0,za,1,1,0,za,sl,null);var Ot=w.createFramebuffer();if(w.bindFramebuffer(il,Ot),w.framebufferTexture2D(il,Qb,Ka,pt,0),w.bindTexture(Ka,null),w.checkFramebufferStatus(il)!==qs)rt=!1;else{w.viewport(0,0,1,1),w.clearColor(1,0,0,1),w.clear(Zb);var $t=j.allocType(sl,4);w.readPixels(0,0,1,1,za,sl,$t),w.getError()?rt=!1:(w.deleteFramebuffer(Ot),w.deleteTexture(pt),rt=$t[0]===1),j.freeType($t)}}var Ut=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Dt=!0;if(!Ut){var Kt=w.createTexture(),ne=j.allocType(P0,36);w.activeTexture(D1),w.bindTexture(Pi,Kt),w.texImage2D(al,0,za,3,3,0,za,P0,ne),j.freeType(ne),w.bindTexture(Pi,null),w.deleteTexture(Kt),Dt=!w.getError()}return{colorBits:[w.getParameter(pe),w.getParameter(he),w.getParameter(Pe),w.getParameter(un)],depthBits:w.getParameter(v0),stencilBits:w.getParameter(H0),subpixelBits:w.getParameter(ht),extensions:Object.keys(T).filter(function(Ct){return!!T[Ct]}),maxAnisotropic:C,maxDrawbuffers:it,maxColorAttachments:bt,pointSizeDims:w.getParameter(dn),lineWidthDims:w.getParameter(C0),maxViewportDims:w.getParameter(To),maxCombinedTextureUnits:w.getParameter(nr),maxCubeMapSize:w.getParameter(Tn),maxRenderbufferSize:w.getParameter(Kr),maxTextureUnits:w.getParameter(Jo),maxTextureSize:w.getParameter(pn),maxAttributes:w.getParameter(i0),maxVertexUniforms:w.getParameter(en),maxVertexTextureUnits:w.getParameter(rr),maxVaryingVectors:w.getParameter(Yn),maxFragmentUniforms:w.getParameter(Lr),glsl:w.getParameter($s),renderer:w.getParameter(vn),vendor:w.getParameter(qo),version:w.getParameter(Nr),readFloat:rt,npotTextureCube:Dt}};function Qr(w){return!!w&&typeof w=="object"&&Array.isArray(w.shape)&&Array.isArray(w.stride)&&typeof w.offset=="number"&&w.shape.length===w.stride.length&&(Array.isArray(w.data)||t(w.data))}var mr=function(w){return Object.keys(w).map(function(T){return w[T]})},Cf={shape:nw,flatten:ow};function tw(w,T,C){for(var it=0;it<T;++it)C[it]=w[it]}function ew(w,T,C,it){for(var bt=0,rt=0;rt<T;++rt)for(var pt=w[rt],Ot=0;Ot<C;++Ot)it[bt++]=pt[Ot]}function nv(w,T,C,it,bt,rt){for(var pt=rt,Ot=0;Ot<T;++Ot)for(var $t=w[Ot],Ut=0;Ut<C;++Ut)for(var Dt=$t[Ut],Kt=0;Kt<it;++Kt)bt[pt++]=Dt[Kt]}function rv(w,T,C,it,bt){for(var rt=1,pt=C+1;pt<T.length;++pt)rt*=T[pt];var Ot=T[C];if(T.length-C===4){var $t=T[C+1],Ut=T[C+2],Dt=T[C+3];for(pt=0;pt<Ot;++pt)nv(w[pt],$t,Ut,Dt,it,bt),bt+=rt}else for(pt=0;pt<Ot;++pt)rv(w[pt],T,C+1,it,bt),bt+=rt}function ow(w,T,C,it){var bt=1;if(T.length)for(var rt=0;rt<T.length;++rt)bt*=T[rt];else bt=0;var pt=it||j.allocType(C,bt);switch(T.length){case 0:break;case 1:tw(w,T[0],pt);break;case 2:ew(w,T[0],T[1],pt);break;case 3:nv(w,T[0],T[1],T[2],pt,0);break;default:rv(w,T,0,pt,0)}return pt}function nw(w){for(var T=[],C=w;C.length;C=C[0])T.push(C.length);return T}var q1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},rw=5120,aw=5122,sw=5124,iw=5121,cw=5123,lw=5125,fw=5126,hw=5126,Fs={int8:rw,int16:aw,int32:sw,uint8:iw,uint16:cw,uint32:lw,float:fw,float32:hw},uw=35048,dw=35040,Pf={dynamic:uw,stream:dw,static:35044},F1=Cf.flatten,av=Cf.shape,sv=35044,pw=35040,G1=5121,H1=5126,Qa=[];Qa[5120]=1,Qa[5122]=2,Qa[5124]=4,Qa[5121]=1,Qa[5123]=2,Qa[5125]=4,Qa[5126]=4;function If(w){return q1[Object.prototype.toString.call(w)]|0}function iv(w,T){for(var C=0;C<T.length;++C)w[C]=T[C]}function cv(w,T,C,it,bt,rt,pt){for(var Ot=0,$t=0;$t<C;++$t)for(var Ut=0;Ut<it;++Ut)w[Ot++]=T[bt*$t+rt*Ut+pt]}function vw(w,T,C,it){var bt=0,rt={};function pt(Q){this.id=bt++,this.buffer=w.createBuffer(),this.type=Q,this.usage=sv,this.byteLength=0,this.dimension=1,this.dtype=G1,this.persistentData=null,C.profile&&(this.stats={size:0})}pt.prototype.bind=function(){w.bindBuffer(this.type,this.buffer)},pt.prototype.destroy=function(){ne(this)};var Ot=[];function $t(Q,vt){var Ht=Ot.pop();return Ht||(Ht=new pt(Q)),Ht.bind(),Kt(Ht,vt,pw,0,1,!1),Ht}function Ut(Q){Ot.push(Q)}function Dt(Q,vt,Ht){Q.byteLength=vt.byteLength,w.bufferData(Q.type,vt,Ht)}function Kt(Q,vt,Ht,ve,kt,be){var Tt;if(Q.usage=Ht,Array.isArray(vt)){if(Q.dtype=ve||H1,vt.length>0){var Jt;if(Array.isArray(vt[0])){Tt=av(vt);for(var At=1,te=1;te<Tt.length;++te)At*=Tt[te];Q.dimension=At,Jt=F1(vt,Tt,Q.dtype),Dt(Q,Jt,Ht),be?Q.persistentData=Jt:j.freeType(Jt)}else if(typeof vt[0]=="number"){Q.dimension=kt;var Ue=j.allocType(Q.dtype,vt.length);iv(Ue,vt),Dt(Q,Ue,Ht),be?Q.persistentData=Ue:j.freeType(Ue)}else t(vt[0])?(Q.dimension=vt[0].length,Q.dtype=ve||If(vt[0])||H1,Jt=F1(vt,[vt.length,vt[0].length],Q.dtype),Dt(Q,Jt,Ht),be?Q.persistentData=Jt:j.freeType(Jt)):S.raise("invalid buffer data")}}else if(t(vt))Q.dtype=ve||If(vt),Q.dimension=kt,Dt(Q,vt,Ht),be&&(Q.persistentData=new Uint8Array(new Uint8Array(vt.buffer)));else if(Qr(vt)){Tt=vt.shape;var no=vt.stride,re=vt.offset,jt=0,Mt=0,Je=0,uo=0;Tt.length===1?(jt=Tt[0],Mt=1,Je=no[0],uo=0):Tt.length===2?(jt=Tt[0],Mt=Tt[1],Je=no[0],uo=no[1]):S.raise("invalid shape"),Q.dtype=ve||If(vt.data)||H1,Q.dimension=Mt;var Ee=j.allocType(Q.dtype,jt*Mt);cv(Ee,vt.data,jt,Mt,Je,uo,re),Dt(Q,Ee,Ht),be?Q.persistentData=Ee:j.freeType(Ee)}else vt instanceof ArrayBuffer?(Q.dtype=G1,Q.dimension=kt,Dt(Q,vt,Ht),be&&(Q.persistentData=new Uint8Array(new Uint8Array(vt)))):S.raise("invalid buffer data")}function ne(Q){T.bufferCount--,it(Q);var vt=Q.buffer;S(vt,"buffer must not be deleted already"),w.deleteBuffer(vt),Q.buffer=null,delete rt[Q.id]}function Ct(Q,vt,Ht,ve){T.bufferCount++;var kt=new pt(vt);rt[kt.id]=kt;function be(At){var te=sv,Ue=null,no=0,re=0,jt=1;return Array.isArray(At)||t(At)||Qr(At)||At instanceof ArrayBuffer?Ue=At:typeof At=="number"?no=At|0:At&&(S.type(At,"object","buffer arguments must be an object, a number or an array"),"data"in At&&(S(Ue===null||Array.isArray(Ue)||t(Ue)||Qr(Ue),"invalid data for buffer"),Ue=At.data),"usage"in At&&(S.parameter(At.usage,Pf,"invalid buffer usage"),te=Pf[At.usage]),"type"in At&&(S.parameter(At.type,Fs,"invalid buffer type"),re=Fs[At.type]),"dimension"in At&&(S.type(At.dimension,"number","invalid dimension"),jt=At.dimension|0),"length"in At&&(S.nni(no,"buffer length must be a nonnegative integer"),no=At.length|0)),kt.bind(),Ue?Kt(kt,Ue,te,re,jt,ve):(no&&w.bufferData(kt.type,no,te),kt.dtype=re||G1,kt.usage=te,kt.dimension=jt,kt.byteLength=no),C.profile&&(kt.stats.size=kt.byteLength*Qa[kt.dtype]),be}function Tt(At,te){S(te+At.byteLength<=kt.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+At.byteLength+" starting from offset "+te+" to a buffer of size "+kt.byteLength),w.bufferSubData(kt.type,te,At)}function Jt(At,te){var Ue=(te||0)|0,no;if(kt.bind(),t(At)||At instanceof ArrayBuffer)Tt(At,Ue);else if(Array.isArray(At)){if(At.length>0)if(typeof At[0]=="number"){var re=j.allocType(kt.dtype,At.length);iv(re,At),Tt(re,Ue),j.freeType(re)}else if(Array.isArray(At[0])||t(At[0])){no=av(At);var jt=F1(At,no,kt.dtype);Tt(jt,Ue),j.freeType(jt)}else S.raise("invalid buffer data")}else if(Qr(At)){no=At.shape;var Mt=At.stride,Je=0,uo=0,Ee=0,bo=0;no.length===1?(Je=no[0],uo=1,Ee=Mt[0],bo=0):no.length===2?(Je=no[0],uo=no[1],Ee=Mt[0],bo=Mt[1]):S.raise("invalid shape");var ro=Array.isArray(At.data)?kt.dtype:If(At.data),xo=j.allocType(ro,Je*uo);cv(xo,At.data,Je,uo,Ee,bo,At.offset),Tt(xo,Ue),j.freeType(xo)}else S.raise("invalid data for buffer subdata");return be}return Ht||be(Q),be._reglType="buffer",be._buffer=kt,be.subdata=Jt,C.profile&&(be.stats=kt.stats),be.destroy=function(){ne(kt)},be}function Zt(){mr(rt).forEach(function(Q){Q.buffer=w.createBuffer(),w.bindBuffer(Q.type,Q.buffer),w.bufferData(Q.type,Q.persistentData||Q.byteLength,Q.usage)})}return C.profile&&(T.getTotalBufferSize=function(){var Q=0;return Object.keys(rt).forEach(function(vt){Q+=rt[vt].stats.size}),Q}),{create:Ct,createStream:$t,destroyStream:Ut,clear:function(){mr(rt).forEach(ne),Ot.forEach(ne)},getBuffer:function(Q){return Q&&Q._buffer instanceof pt?Q._buffer:null},restore:Zt,_initBuffer:Kt}}var mw=0,gw=0,xw=1,yw=1,bw=4,ww=4,Ii={points:mw,point:gw,lines:xw,line:yw,triangles:bw,triangle:ww,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},_w=0,Mw=1,cl=4,kw=5120,$i=5121,lv=5122,Di=5123,fv=5124,Gs=5125,U1=34963,Sw=35040,Ew=35044;function zw(w,T,C,it){var bt={},rt=0,pt={uint8:$i,uint16:Di};T.oes_element_index_uint&&(pt.uint32=Gs);function Ot(Zt){this.id=rt++,bt[this.id]=this,this.buffer=Zt,this.primType=cl,this.vertCount=0,this.type=0}Ot.prototype.bind=function(){this.buffer.bind()};var $t=[];function Ut(Zt){var Q=$t.pop();return Q||(Q=new Ot(C.create(null,U1,!0,!1)._buffer)),Kt(Q,Zt,Sw,-1,-1,0,0),Q}function Dt(Zt){$t.push(Zt)}function Kt(Zt,Q,vt,Ht,ve,kt,be){Zt.buffer.bind();var Tt;if(Q){var Jt=be;!be&&(!t(Q)||Qr(Q)&&!t(Q.data))&&(Jt=T.oes_element_index_uint?Gs:Di),C._initBuffer(Zt.buffer,Q,vt,Jt,3)}else w.bufferData(U1,kt,vt),Zt.buffer.dtype=Tt||$i,Zt.buffer.usage=vt,Zt.buffer.dimension=3,Zt.buffer.byteLength=kt;if(Tt=be,!be){switch(Zt.buffer.dtype){case $i:case kw:Tt=$i;break;case Di:case lv:Tt=Di;break;case Gs:case fv:Tt=Gs;break;default:S.raise("unsupported type for element array")}Zt.buffer.dtype=Tt}Zt.type=Tt,S(Tt!==Gs||!!T.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var At=ve;At<0&&(At=Zt.buffer.byteLength,Tt===Di?At>>=1:Tt===Gs&&(At>>=2)),Zt.vertCount=At;var te=Ht;if(Ht<0){te=cl;var Ue=Zt.buffer.dimension;Ue===1&&(te=_w),Ue===2&&(te=Mw),Ue===3&&(te=cl)}Zt.primType=te}function ne(Zt){it.elementsCount--,S(Zt.buffer!==null,"must not double destroy elements"),delete bt[Zt.id],Zt.buffer.destroy(),Zt.buffer=null}function Ct(Zt,Q){var vt=C.create(null,U1,!0),Ht=new Ot(vt._buffer);it.elementsCount++;function ve(kt){if(!kt)vt(),Ht.primType=cl,Ht.vertCount=0,Ht.type=$i;else if(typeof kt=="number")vt(kt),Ht.primType=cl,Ht.vertCount=kt|0,Ht.type=$i;else{var be=null,Tt=Ew,Jt=-1,At=-1,te=0,Ue=0;Array.isArray(kt)||t(kt)||Qr(kt)?be=kt:(S.type(kt,"object","invalid arguments for elements"),"data"in kt&&(be=kt.data,S(Array.isArray(be)||t(be)||Qr(be),"invalid data for element buffer")),"usage"in kt&&(S.parameter(kt.usage,Pf,"invalid element buffer usage"),Tt=Pf[kt.usage]),"primitive"in kt&&(S.parameter(kt.primitive,Ii,"invalid element buffer primitive"),Jt=Ii[kt.primitive]),"count"in kt&&(S(typeof kt.count=="number"&&kt.count>=0,"invalid vertex count for elements"),At=kt.count|0),"type"in kt&&(S.parameter(kt.type,pt,"invalid buffer type"),Ue=pt[kt.type]),"length"in kt?te=kt.length|0:(te=At,Ue===Di||Ue===lv?te*=2:(Ue===Gs||Ue===fv)&&(te*=4))),Kt(Ht,be,Tt,Jt,At,te,Ue)}return ve}return ve(Zt),ve._reglType="elements",ve._elements=Ht,ve.subdata=function(kt,be){return vt.subdata(kt,be),ve},ve.destroy=function(){ne(Ht)},ve}return{create:Ct,createStream:Ut,destroyStream:Dt,getElements:function(Zt){return typeof Zt=="function"&&Zt._elements instanceof Ot?Zt._elements:null},clear:function(){mr(bt).forEach(ne)}}}var hv=new Float32Array(1),Aw=new Uint32Array(hv.buffer),Tw=5123;function uv(w){for(var T=j.allocType(Tw,w.length),C=0;C<w.length;++C)if(isNaN(w[C]))T[C]=65535;else if(w[C]===1/0)T[C]=31744;else if(w[C]===-1/0)T[C]=64512;else{hv[0]=w[C];var it=Aw[0],bt=it>>>31<<15,rt=(it<<1>>>24)-127,pt=it>>13&1023;if(rt<-24)T[C]=bt;else if(rt<-14){var Ot=-14-rt;T[C]=bt+(pt+1024>>Ot)}else rt>15?T[C]=bt+31744:T[C]=bt+(rt+15<<10)+pt}return T}function kn(w){return Array.isArray(w)||t(w)}var dv=function(w){return!(w&w-1)&&!!w},Lw=34467,pa=3553,B1=34067,$f=34069,Hs=6408,j1=6406,Df=6407,ll=6409,qf=6410,pv=32854,W1=32855,vv=36194,Nw=32819,Rw=32820,Ow=33635,Cw=34042,V1=6402,Ff=34041,X1=35904,Y1=35906,qi=36193,K1=33776,Q1=33777,Z1=33778,J1=33779,mv=35986,gv=35987,xv=34798,yv=35840,bv=35841,wv=35842,_v=35843,Mv=36196,Fi=5121,tu=5123,eu=5125,fl=5126,Pw=10242,Iw=10243,$w=10497,ou=33071,Dw=33648,qw=10240,Fw=10241,nu=9728,Gw=9729,ru=9984,kv=9985,Sv=9986,au=9987,Hw=33170,Gf=4352,Uw=4353,Bw=4354,jw=34046,Ww=3317,Vw=37440,Xw=37441,Yw=37443,Ev=37444,hl=33984,Kw=[ru,Sv,kv,au],Hf=[0,ll,qf,Df,Hs],Rr={};Rr[ll]=Rr[j1]=Rr[V1]=1,Rr[Ff]=Rr[qf]=2,Rr[Df]=Rr[X1]=3,Rr[Hs]=Rr[Y1]=4;function Gi(w){return"[object "+w+"]"}var zv=Gi("HTMLCanvasElement"),Av=Gi("OffscreenCanvas"),Tv=Gi("CanvasRenderingContext2D"),Lv=Gi("ImageBitmap"),Nv=Gi("HTMLImageElement"),Rv=Gi("HTMLVideoElement"),Qw=Object.keys(q1).concat([zv,Av,Tv,Lv,Nv,Rv]),Hi=[];Hi[Fi]=1,Hi[fl]=4,Hi[qi]=2,Hi[tu]=2,Hi[eu]=4;var m0=[];m0[pv]=2,m0[W1]=2,m0[vv]=2,m0[Ff]=4,m0[K1]=.5,m0[Q1]=.5,m0[Z1]=1,m0[J1]=1,m0[mv]=.5,m0[gv]=1,m0[xv]=1,m0[yv]=.5,m0[bv]=.25,m0[wv]=.5,m0[_v]=.25,m0[Mv]=.5;function Ov(w){return Array.isArray(w)&&(w.length===0||typeof w[0]=="number")}function Cv(w){if(!Array.isArray(w))return!1;var T=w.length;return!(T===0||!kn(w[0]))}function Us(w){return Object.prototype.toString.call(w)}function Pv(w){return Us(w)===zv}function Iv(w){return Us(w)===Av}function Zw(w){return Us(w)===Tv}function Jw(w){return Us(w)===Lv}function t4(w){return Us(w)===Nv}function e4(w){return Us(w)===Rv}function su(w){if(!w)return!1;var T=Us(w);return Qw.indexOf(T)>=0?!0:Ov(w)||Cv(w)||Qr(w)}function $v(w){return q1[Object.prototype.toString.call(w)]|0}function o4(w,T){var C=T.length;switch(w.type){case Fi:case tu:case eu:case fl:var it=j.allocType(w.type,C);it.set(T),w.data=it;break;case qi:w.data=uv(T);break;default:S.raise("unsupported texture type, must specify a typed array")}}function Dv(w,T){return j.allocType(w.type===qi?fl:w.type,T)}function qv(w,T){w.type===qi?(w.data=uv(T),j.freeType(T)):w.data=T}function n4(w,T,C,it,bt,rt){for(var pt=w.width,Ot=w.height,$t=w.channels,Ut=pt*Ot*$t,Dt=Dv(w,Ut),Kt=0,ne=0;ne<Ot;++ne)for(var Ct=0;Ct<pt;++Ct)for(var Zt=0;Zt<$t;++Zt)Dt[Kt++]=T[C*Ct+it*ne+bt*Zt+rt];qv(w,Dt)}function Uf(w,T,C,it,bt,rt){var pt;if(typeof m0[w]!="undefined"?pt=m0[w]:pt=Rr[w]*Hi[T],rt&&(pt*=6),bt){for(var Ot=0,$t=C;$t>=1;)Ot+=pt*$t*$t,$t/=2;return Ot}else return pt*C*it}function r4(w,T,C,it,bt,rt,pt){var Ot={"don't care":Gf,"dont care":Gf,nice:Bw,fast:Uw},$t={repeat:$w,clamp:ou,mirror:Dw},Ut={nearest:nu,linear:Gw},Dt=e({mipmap:au,"nearest mipmap nearest":ru,"linear mipmap nearest":kv,"nearest mipmap linear":Sv,"linear mipmap linear":au},Ut),Kt={none:0,browser:Ev},ne={uint8:Fi,rgba4:Nw,rgb565:Ow,"rgb5 a1":Rw},Ct={alpha:j1,luminance:ll,"luminance alpha":qf,rgb:Df,rgba:Hs,rgba4:pv,"rgb5 a1":W1,rgb565:vv},Zt={};T.ext_srgb&&(Ct.srgb=X1,Ct.srgba=Y1),T.oes_texture_float&&(ne.float32=ne.float=fl),T.oes_texture_half_float&&(ne.float16=ne["half float"]=qi),T.webgl_depth_texture&&(e(Ct,{depth:V1,"depth stencil":Ff}),e(ne,{uint16:tu,uint32:eu,"depth stencil":Cw})),T.webgl_compressed_texture_s3tc&&e(Zt,{"rgb s3tc dxt1":K1,"rgba s3tc dxt1":Q1,"rgba s3tc dxt3":Z1,"rgba s3tc dxt5":J1}),T.webgl_compressed_texture_atc&&e(Zt,{"rgb atc":mv,"rgba atc explicit alpha":gv,"rgba atc interpolated alpha":xv}),T.webgl_compressed_texture_pvrtc&&e(Zt,{"rgb pvrtc 4bppv1":yv,"rgb pvrtc 2bppv1":bv,"rgba pvrtc 4bppv1":wv,"rgba pvrtc 2bppv1":_v}),T.webgl_compressed_texture_etc1&&(Zt["rgb etc1"]=Mv);var Q=Array.prototype.slice.call(w.getParameter(Lw));Object.keys(Zt).forEach(function(O){var lt=Zt[O];Q.indexOf(lt)>=0&&(Ct[O]=lt)});var vt=Object.keys(Ct);C.textureFormats=vt;var Ht=[];Object.keys(Ct).forEach(function(O){var lt=Ct[O];Ht[lt]=O});var ve=[];Object.keys(ne).forEach(function(O){var lt=ne[O];ve[lt]=O});var kt=[];Object.keys(Ut).forEach(function(O){var lt=Ut[O];kt[lt]=O});var be=[];Object.keys(Dt).forEach(function(O){var lt=Dt[O];be[lt]=O});var Tt=[];Object.keys($t).forEach(function(O){var lt=$t[O];Tt[lt]=O});var Jt=vt.reduce(function(O,lt){var ot=Ct[lt];return ot===ll||ot===j1||ot===ll||ot===qf||ot===V1||ot===Ff||T.ext_srgb&&(ot===X1||ot===Y1)?O[ot]=ot:ot===W1||lt.indexOf("rgba")>=0?O[ot]=Hs:O[ot]=Df,O},{});function At(){this.internalformat=Hs,this.format=Hs,this.type=Fi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Ev,this.width=0,this.height=0,this.channels=0}function te(O,lt){O.internalformat=lt.internalformat,O.format=lt.format,O.type=lt.type,O.compressed=lt.compressed,O.premultiplyAlpha=lt.premultiplyAlpha,O.flipY=lt.flipY,O.unpackAlignment=lt.unpackAlignment,O.colorSpace=lt.colorSpace,O.width=lt.width,O.height=lt.height,O.channels=lt.channels}function Ue(O,lt){if(!(typeof lt!="object"||!lt)){if("premultiplyAlpha"in lt&&(S.type(lt.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),O.premultiplyAlpha=lt.premultiplyAlpha),"flipY"in lt&&(S.type(lt.flipY,"boolean","invalid texture flip"),O.flipY=lt.flipY),"alignment"in lt&&(S.oneOf(lt.alignment,[1,2,4,8],"invalid texture unpack alignment"),O.unpackAlignment=lt.alignment),"colorSpace"in lt&&(S.parameter(lt.colorSpace,Kt,"invalid colorSpace"),O.colorSpace=Kt[lt.colorSpace]),"type"in lt){var ot=lt.type;S(T.oes_texture_float||!(ot==="float"||ot==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),S(T.oes_texture_half_float||!(ot==="half float"||ot==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),S(T.webgl_depth_texture||!(ot==="uint16"||ot==="uint32"||ot==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(ot,ne,"invalid texture type"),O.type=ne[ot]}var Me=O.width,wo=O.height,N=O.channels,E=!1;"shape"in lt?(S(Array.isArray(lt.shape)&&lt.shape.length>=2,"shape must be an array"),Me=lt.shape[0],wo=lt.shape[1],lt.shape.length===3&&(N=lt.shape[2],S(N>0&&N<=4,"invalid number of channels"),E=!0),S(Me>=0&&Me<=C.maxTextureSize,"invalid width"),S(wo>=0&&wo<=C.maxTextureSize,"invalid height")):("radius"in lt&&(Me=wo=lt.radius,S(Me>=0&&Me<=C.maxTextureSize,"invalid radius")),"width"in lt&&(Me=lt.width,S(Me>=0&&Me<=C.maxTextureSize,"invalid width")),"height"in lt&&(wo=lt.height,S(wo>=0&&wo<=C.maxTextureSize,"invalid height")),"channels"in lt&&(N=lt.channels,S(N>0&&N<=4,"invalid number of channels"),E=!0)),O.width=Me|0,O.height=wo|0,O.channels=N|0;var q=!1;if("format"in lt){var K=lt.format;S(T.webgl_depth_texture||!(K==="depth"||K==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(K,Ct,"invalid texture format");var Z=O.internalformat=Ct[K];O.format=Jt[Z],K in ne&&("type"in lt||(O.type=ne[K])),K in Zt&&(O.compressed=!0),q=!0}!E&&q?O.channels=Rr[O.format]:E&&!q?O.channels!==Hf[O.format]&&(O.format=O.internalformat=Hf[O.channels]):q&&E&&S(O.channels===Rr[O.format],"number of channels inconsistent with specified format")}}function no(O){w.pixelStorei(Vw,O.flipY),w.pixelStorei(Xw,O.premultiplyAlpha),w.pixelStorei(Yw,O.colorSpace),w.pixelStorei(Ww,O.unpackAlignment)}function re(){At.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function jt(O,lt){var ot=null;if(su(lt)?ot=lt:lt&&(S.type(lt,"object","invalid pixel data type"),Ue(O,lt),"x"in lt&&(O.xOffset=lt.x|0),"y"in lt&&(O.yOffset=lt.y|0),su(lt.data)&&(ot=lt.data)),S(!O.compressed||ot instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),lt.copy){S(!ot,"can not specify copy and data field for the same texture");var Me=bt.viewportWidth,wo=bt.viewportHeight;O.width=O.width||Me-O.xOffset,O.height=O.height||wo-O.yOffset,O.needsCopy=!0,S(O.xOffset>=0&&O.xOffset<Me&&O.yOffset>=0&&O.yOffset<wo&&O.width>0&&O.width<=Me&&O.height>0&&O.height<=wo,"copy texture read out of bounds")}else if(!ot)O.width=O.width||1,O.height=O.height||1,O.channels=O.channels||4;else if(t(ot))O.channels=O.channels||4,O.data=ot,!("type"in lt)&&O.type===Fi&&(O.type=$v(ot));else if(Ov(ot))O.channels=O.channels||4,o4(O,ot),O.alignment=1,O.needsFree=!0;else if(Qr(ot)){var N=ot.data;!Array.isArray(N)&&O.type===Fi&&(O.type=$v(N));var E=ot.shape,q=ot.stride,K,Z,U,F,W,R;E.length===3?(U=E[2],R=q[2]):(S(E.length===2,"invalid ndarray pixel data, must be 2 or 3D"),U=1,R=1),K=E[0],Z=E[1],F=q[0],W=q[1],O.alignment=1,O.width=K,O.height=Z,O.channels=U,O.format=O.internalformat=Hf[U],O.needsFree=!0,n4(O,N,F,W,R,ot.offset)}else if(Pv(ot)||Iv(ot)||Zw(ot))Pv(ot)||Iv(ot)?O.element=ot:O.element=ot.canvas,O.width=O.element.width,O.height=O.element.height,O.channels=4;else if(Jw(ot))O.element=ot,O.width=ot.width,O.height=ot.height,O.channels=4;else if(t4(ot))O.element=ot,O.width=ot.naturalWidth,O.height=ot.naturalHeight,O.channels=4;else if(e4(ot))O.element=ot,O.width=ot.videoWidth,O.height=ot.videoHeight,O.channels=4;else if(Cv(ot)){var $=O.width||ot[0].length,L=O.height||ot.length,X=O.channels;kn(ot[0][0])?X=X||ot[0][0].length:X=X||1;for(var tt=Cf.shape(ot),yt=1,wt=0;wt<tt.length;++wt)yt*=tt[wt];var gt=Dv(O,yt);Cf.flatten(ot,tt,"",gt),qv(O,gt),O.alignment=1,O.width=$,O.height=L,O.channels=X,O.format=O.internalformat=Hf[X],O.needsFree=!0}O.type===fl?S(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):O.type===qi&&S(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function Mt(O,lt,ot){var Me=O.element,wo=O.data,N=O.internalformat,E=O.format,q=O.type,K=O.width,Z=O.height;no(O),Me?w.texImage2D(lt,ot,E,E,q,Me):O.compressed?w.compressedTexImage2D(lt,ot,N,K,Z,0,wo):O.needsCopy?(it(),w.copyTexImage2D(lt,ot,E,O.xOffset,O.yOffset,K,Z,0)):w.texImage2D(lt,ot,E,K,Z,0,E,q,wo||null)}function Je(O,lt,ot,Me,wo){var N=O.element,E=O.data,q=O.internalformat,K=O.format,Z=O.type,U=O.width,F=O.height;no(O),N?w.texSubImage2D(lt,wo,ot,Me,K,Z,N):O.compressed?w.compressedTexSubImage2D(lt,wo,ot,Me,q,U,F,E):O.needsCopy?(it(),w.copyTexSubImage2D(lt,wo,ot,Me,O.xOffset,O.yOffset,U,F)):w.texSubImage2D(lt,wo,ot,Me,U,F,K,Z,E)}var uo=[];function Ee(){return uo.pop()||new re}function bo(O){O.needsFree&&j.freeType(O.data),re.call(O),uo.push(O)}function ro(){At.call(this),this.genMipmaps=!1,this.mipmapHint=Gf,this.mipmask=0,this.images=Array(16)}function xo(O,lt,ot){var Me=O.images[0]=Ee();O.mipmask=1,Me.width=O.width=lt,Me.height=O.height=ot,Me.channels=O.channels=4}function Po(O,lt){var ot=null;if(su(lt))ot=O.images[0]=Ee(),te(ot,O),jt(ot,lt),O.mipmask=1;else if(Ue(O,lt),Array.isArray(lt.mipmap))for(var Me=lt.mipmap,wo=0;wo<Me.length;++wo)ot=O.images[wo]=Ee(),te(ot,O),ot.width>>=wo,ot.height>>=wo,jt(ot,Me[wo]),O.mipmask|=1<<wo;else ot=O.images[0]=Ee(),te(ot,O),jt(ot,lt),O.mipmask=1;te(O,O.images[0]),O.compressed&&(O.internalformat===K1||O.internalformat===Q1||O.internalformat===Z1||O.internalformat===J1)&&S(O.width%4===0&&O.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Nn(O,lt){for(var ot=O.images,Me=0;Me<ot.length;++Me){if(!ot[Me])return;Mt(ot[Me],lt,Me)}}var Kn=[];function ko(){var O=Kn.pop()||new ro;At.call(O),O.mipmask=0;for(var lt=0;lt<16;++lt)O.images[lt]=null;return O}function Dn(O){for(var lt=O.images,ot=0;ot<lt.length;++ot)lt[ot]&&bo(lt[ot]),lt[ot]=null;Kn.push(O)}function on(){this.minFilter=nu,this.magFilter=nu,this.wrapS=ou,this.wrapT=ou,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Gf}function Rn(O,lt){if("min"in lt){var ot=lt.min;S.parameter(ot,Dt),O.minFilter=Dt[ot],Kw.indexOf(O.minFilter)>=0&&!("faces"in lt)&&(O.genMipmaps=!0)}if("mag"in lt){var Me=lt.mag;S.parameter(Me,Ut),O.magFilter=Ut[Me]}var wo=O.wrapS,N=O.wrapT;if("wrap"in lt){var E=lt.wrap;typeof E=="string"?(S.parameter(E,$t),wo=N=$t[E]):Array.isArray(E)&&(S.parameter(E[0],$t),S.parameter(E[1],$t),wo=$t[E[0]],N=$t[E[1]])}else{if("wrapS"in lt){var q=lt.wrapS;S.parameter(q,$t),wo=$t[q]}if("wrapT"in lt){var K=lt.wrapT;S.parameter(K,$t),N=$t[K]}}if(O.wrapS=wo,O.wrapT=N,"anisotropic"in lt){var Z=lt.anisotropic;S(typeof Z=="number"&&Z>=1&&Z<=C.maxAnisotropic,"aniso samples must be between 1 and "),O.anisotropic=lt.anisotropic}if("mipmap"in lt){var U=!1;switch(typeof lt.mipmap){case"string":S.parameter(lt.mipmap,Ot,"invalid mipmap hint"),O.mipmapHint=Ot[lt.mipmap],O.genMipmaps=!0,U=!0;break;case"boolean":U=O.genMipmaps=lt.mipmap;break;case"object":S(Array.isArray(lt.mipmap),"invalid mipmap type"),O.genMipmaps=!1,U=!0;break;default:S.raise("invalid mipmap type")}U&&!("min"in lt)&&(O.minFilter=ru)}}function qn(O,lt){w.texParameteri(lt,Fw,O.minFilter),w.texParameteri(lt,qw,O.magFilter),w.texParameteri(lt,Pw,O.wrapS),w.texParameteri(lt,Iw,O.wrapT),T.ext_texture_filter_anisotropic&&w.texParameteri(lt,jw,O.anisotropic),O.genMipmaps&&(w.hint(Hw,O.mipmapHint),w.generateMipmap(lt))}var Fn=0,c0={},g0=C.maxTextureUnits,Sn=Array(g0).map(function(){return null});function po(O){At.call(this),this.mipmask=0,this.internalformat=Hs,this.id=Fn++,this.refCount=1,this.target=O,this.texture=w.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new on,pt.profile&&(this.stats={size:0})}function x0(O){w.activeTexture(hl),w.bindTexture(O.target,O.texture)}function Fo(){var O=Sn[0];O?w.bindTexture(O.target,O.texture):w.bindTexture(pa,null)}function We(O){var lt=O.texture;S(lt,"must not double destroy texture");var ot=O.unit,Me=O.target;ot>=0&&(w.activeTexture(hl+ot),w.bindTexture(Me,null),Sn[ot]=null),w.deleteTexture(lt),O.texture=null,O.params=null,O.pixels=null,O.refCount=0,delete c0[O.id],rt.textureCount--}e(po.prototype,{bind:function(){var O=this;O.bindCount+=1;var lt=O.unit;if(lt<0){for(var ot=0;ot<g0;++ot){var Me=Sn[ot];if(Me){if(Me.bindCount>0)continue;Me.unit=-1}Sn[ot]=O,lt=ot;break}lt>=g0&&S.raise("insufficient number of texture units"),pt.profile&&rt.maxTextureUnits<lt+1&&(rt.maxTextureUnits=lt+1),O.unit=lt,w.activeTexture(hl+lt),w.bindTexture(O.target,O.texture)}return lt},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&We(this)}});function Mo(O,lt){var ot=new po(pa);c0[ot.id]=ot,rt.textureCount++;function Me(E,q){var K=ot.texInfo;on.call(K);var Z=ko();return typeof E=="number"?typeof q=="number"?xo(Z,E|0,q|0):xo(Z,E|0,E|0):E?(S.type(E,"object","invalid arguments to regl.texture"),Rn(K,E),Po(Z,E)):xo(Z,1,1),K.genMipmaps&&(Z.mipmask=(Z.width<<1)-1),ot.mipmask=Z.mipmask,te(ot,Z),S.texture2D(K,Z,C),ot.internalformat=Z.internalformat,Me.width=Z.width,Me.height=Z.height,x0(ot),Nn(Z,pa),qn(K,pa),Fo(),Dn(Z),pt.profile&&(ot.stats.size=Uf(ot.internalformat,ot.type,Z.width,Z.height,K.genMipmaps,!1)),Me.format=Ht[ot.internalformat],Me.type=ve[ot.type],Me.mag=kt[K.magFilter],Me.min=be[K.minFilter],Me.wrapS=Tt[K.wrapS],Me.wrapT=Tt[K.wrapT],Me}function wo(E,q,K,Z){S(!!E,"must specify image data");var U=q|0,F=K|0,W=Z|0,R=Ee();return te(R,ot),R.width=0,R.height=0,jt(R,E),R.width=R.width||(ot.width>>W)-U,R.height=R.height||(ot.height>>W)-F,S(ot.type===R.type&&ot.format===R.format&&ot.internalformat===R.internalformat,"incompatible format for texture.subimage"),S(U>=0&&F>=0&&U+R.width<=ot.width&&F+R.height<=ot.height,"texture.subimage write out of bounds"),S(ot.mipmask&1<<W,"missing mipmap data"),S(R.data||R.element||R.needsCopy,"missing image data"),x0(ot),Je(R,pa,U,F,W),Fo(),bo(R),Me}function N(E,q){var K=E|0,Z=q|0||K;if(K===ot.width&&Z===ot.height)return Me;Me.width=ot.width=K,Me.height=ot.height=Z,x0(ot);for(var U=0;ot.mipmask>>U;++U){var F=K>>U,W=Z>>U;if(!F||!W)break;w.texImage2D(pa,U,ot.format,F,W,0,ot.format,ot.type,null)}return Fo(),pt.profile&&(ot.stats.size=Uf(ot.internalformat,ot.type,K,Z,!1,!1)),Me}return Me(O,lt),Me.subimage=wo,Me.resize=N,Me._reglType="texture2d",Me._texture=ot,pt.profile&&(Me.stats=ot.stats),Me.destroy=function(){ot.decRef()},Me}function Ro(O,lt,ot,Me,wo,N){var E=new po(B1);c0[E.id]=E,rt.cubeCount++;var q=new Array(6);function K(F,W,R,$,L,X){var tt,yt=E.texInfo;for(on.call(yt),tt=0;tt<6;++tt)q[tt]=ko();if(typeof F=="number"||!F){var wt=F|0||1;for(tt=0;tt<6;++tt)xo(q[tt],wt,wt)}else if(typeof F=="object")if(W)Po(q[0],F),Po(q[1],W),Po(q[2],R),Po(q[3],$),Po(q[4],L),Po(q[5],X);else if(Rn(yt,F),Ue(E,F),"faces"in F){var gt=F.faces;for(S(Array.isArray(gt)&&gt.length===6,"cube faces must be a length 6 array"),tt=0;tt<6;++tt)S(typeof gt[tt]=="object"&&!!gt[tt],"invalid input for cube map face"),te(q[tt],E),Po(q[tt],gt[tt])}else for(tt=0;tt<6;++tt)Po(q[tt],F);else S.raise("invalid arguments to cube map");for(te(E,q[0]),C.npotTextureCube||S(dv(E.width)&&dv(E.height),"your browser does not support non power or two texture dimensions"),yt.genMipmaps?E.mipmask=(q[0].width<<1)-1:E.mipmask=q[0].mipmask,S.textureCube(E,yt,q,C),E.internalformat=q[0].internalformat,K.width=q[0].width,K.height=q[0].height,x0(E),tt=0;tt<6;++tt)Nn(q[tt],$f+tt);for(qn(yt,B1),Fo(),pt.profile&&(E.stats.size=Uf(E.internalformat,E.type,K.width,K.height,yt.genMipmaps,!0)),K.format=Ht[E.internalformat],K.type=ve[E.type],K.mag=kt[yt.magFilter],K.min=be[yt.minFilter],K.wrapS=Tt[yt.wrapS],K.wrapT=Tt[yt.wrapT],tt=0;tt<6;++tt)Dn(q[tt]);return K}function Z(F,W,R,$,L){S(!!W,"must specify image data"),S(typeof F=="number"&&F===(F|0)&&F>=0&&F<6,"invalid face");var X=R|0,tt=$|0,yt=L|0,wt=Ee();return te(wt,E),wt.width=0,wt.height=0,jt(wt,W),wt.width=wt.width||(E.width>>yt)-X,wt.height=wt.height||(E.height>>yt)-tt,S(E.type===wt.type&&E.format===wt.format&&E.internalformat===wt.internalformat,"incompatible format for texture.subimage"),S(X>=0&&tt>=0&&X+wt.width<=E.width&&tt+wt.height<=E.height,"texture.subimage write out of bounds"),S(E.mipmask&1<<yt,"missing mipmap data"),S(wt.data||wt.element||wt.needsCopy,"missing image data"),x0(E),Je(wt,$f+F,X,tt,yt),Fo(),bo(wt),K}function U(F){var W=F|0;if(W!==E.width){K.width=E.width=W,K.height=E.height=W,x0(E);for(var R=0;R<6;++R)for(var $=0;E.mipmask>>$;++$)w.texImage2D($f+R,$,E.format,W>>$,W>>$,0,E.format,E.type,null);return Fo(),pt.profile&&(E.stats.size=Uf(E.internalformat,E.type,K.width,K.height,!1,!0)),K}}return K(O,lt,ot,Me,wo,N),K.subimage=Z,K.resize=U,K._reglType="textureCube",K._texture=E,pt.profile&&(K.stats=E.stats),K.destroy=function(){E.decRef()},K}function En(){for(var O=0;O<g0;++O)w.activeTexture(hl+O),w.bindTexture(pa,null),Sn[O]=null;mr(c0).forEach(We),rt.cubeCount=0,rt.textureCount=0}pt.profile&&(rt.getTotalTextureSize=function(){var O=0;return Object.keys(c0).forEach(function(lt){O+=c0[lt].stats.size}),O});function ma(){for(var O=0;O<g0;++O){var lt=Sn[O];lt&&(lt.bindCount=0,lt.unit=-1,Sn[O]=null)}mr(c0).forEach(function(ot){ot.texture=w.createTexture(),w.bindTexture(ot.target,ot.texture);for(var Me=0;Me<32;++Me)if(ot.mipmask&1<<Me)if(ot.target===pa)w.texImage2D(pa,Me,ot.internalformat,ot.width>>Me,ot.height>>Me,0,ot.internalformat,ot.type,null);else for(var wo=0;wo<6;++wo)w.texImage2D($f+wo,Me,ot.internalformat,ot.width>>Me,ot.height>>Me,0,ot.internalformat,ot.type,null);qn(ot.texInfo,ot.target)})}function Ks(){for(var O=0;O<g0;++O){var lt=Sn[O];lt&&(lt.bindCount=0,lt.unit=-1,Sn[O]=null),w.activeTexture(hl+O),w.bindTexture(pa,null),w.bindTexture(B1,null)}}return{create2D:Mo,createCube:Ro,clear:En,getTexture:function(O){return null},restore:ma,refresh:Ks}}var Za=36161,Bf=32854,Fv=32855,Gv=36194,Hv=33189,Uv=36168,Bv=34041,jv=35907,Wv=34836,Vv=34842,Xv=34843,Zr=[];Zr[Bf]=2,Zr[Fv]=2,Zr[Gv]=2,Zr[Hv]=2,Zr[Uv]=1,Zr[Bv]=4,Zr[jv]=4,Zr[Wv]=16,Zr[Vv]=8,Zr[Xv]=6;function Yv(w,T,C){return Zr[w]*T*C}var a4=function(w,T,C,it,bt){var rt={rgba4:Bf,rgb565:Gv,"rgb5 a1":Fv,depth:Hv,stencil:Uv,"depth stencil":Bv};T.ext_srgb&&(rt.srgba=jv),T.ext_color_buffer_half_float&&(rt.rgba16f=Vv,rt.rgb16f=Xv),T.webgl_color_buffer_float&&(rt.rgba32f=Wv);var pt=[];Object.keys(rt).forEach(function(Ct){var Zt=rt[Ct];pt[Zt]=Ct});var Ot=0,$t={};function Ut(Ct){this.id=Ot++,this.refCount=1,this.renderbuffer=Ct,this.format=Bf,this.width=0,this.height=0,bt.profile&&(this.stats={size:0})}Ut.prototype.decRef=function(){--this.refCount<=0&&Dt(this)};function Dt(Ct){var Zt=Ct.renderbuffer;S(Zt,"must not double destroy renderbuffer"),w.bindRenderbuffer(Za,null),w.deleteRenderbuffer(Zt),Ct.renderbuffer=null,Ct.refCount=0,delete $t[Ct.id],it.renderbufferCount--}function Kt(Ct,Zt){var Q=new Ut(w.createRenderbuffer());$t[Q.id]=Q,it.renderbufferCount++;function vt(ve,kt){var be=0,Tt=0,Jt=Bf;if(typeof ve=="object"&&ve){var At=ve;if("shape"in At){var te=At.shape;S(Array.isArray(te)&&te.length>=2,"invalid renderbuffer shape"),be=te[0]|0,Tt=te[1]|0}else"radius"in At&&(be=Tt=At.radius|0),"width"in At&&(be=At.width|0),"height"in At&&(Tt=At.height|0);"format"in At&&(S.parameter(At.format,rt,"invalid renderbuffer format"),Jt=rt[At.format])}else typeof ve=="number"?(be=ve|0,typeof kt=="number"?Tt=kt|0:Tt=be):ve?S.raise("invalid arguments to renderbuffer constructor"):be=Tt=1;if(S(be>0&&Tt>0&&be<=C.maxRenderbufferSize&&Tt<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(be===Q.width&&Tt===Q.height&&Jt===Q.format))return vt.width=Q.width=be,vt.height=Q.height=Tt,Q.format=Jt,w.bindRenderbuffer(Za,Q.renderbuffer),w.renderbufferStorage(Za,Jt,be,Tt),S(w.getError()===0,"invalid render buffer format"),bt.profile&&(Q.stats.size=Yv(Q.format,Q.width,Q.height)),vt.format=pt[Q.format],vt}function Ht(ve,kt){var be=ve|0,Tt=kt|0||be;return be===Q.width&&Tt===Q.height||(S(be>0&&Tt>0&&be<=C.maxRenderbufferSize&&Tt<=C.maxRenderbufferSize,"invalid renderbuffer size"),vt.width=Q.width=be,vt.height=Q.height=Tt,w.bindRenderbuffer(Za,Q.renderbuffer),w.renderbufferStorage(Za,Q.format,be,Tt),S(w.getError()===0,"invalid render buffer format"),bt.profile&&(Q.stats.size=Yv(Q.format,Q.width,Q.height))),vt}return vt(Ct,Zt),vt.resize=Ht,vt._reglType="renderbuffer",vt._renderbuffer=Q,bt.profile&&(vt.stats=Q.stats),vt.destroy=function(){Q.decRef()},vt}bt.profile&&(it.getTotalRenderbufferSize=function(){var Ct=0;return Object.keys($t).forEach(function(Zt){Ct+=$t[Zt].stats.size}),Ct});function ne(){mr($t).forEach(function(Ct){Ct.renderbuffer=w.createRenderbuffer(),w.bindRenderbuffer(Za,Ct.renderbuffer),w.renderbufferStorage(Za,Ct.format,Ct.width,Ct.height)}),w.bindRenderbuffer(Za,null)}return{create:Kt,clear:function(){mr($t).forEach(Dt)},restore:ne}},Aa=36160,iu=36161,Bs=3553,jf=34069,Kv=36064,Qv=36096,Zv=36128,Jv=33306,tm=36053,s4=36054,i4=36055,c4=36057,l4=36061,f4=36193,h4=5121,u4=5126,em=6407,om=6408,d4=6402,p4=[em,om],cu=[];cu[om]=4,cu[em]=3;var Wf=[];Wf[h4]=1,Wf[u4]=4,Wf[f4]=2;var v4=32854,m4=32855,g4=36194,x4=33189,y4=36168,nm=34041,b4=35907,w4=34836,_4=34842,M4=34843,k4=[v4,m4,g4,b4,_4,M4,w4],Ui={};Ui[tm]="complete",Ui[s4]="incomplete attachment",Ui[c4]="incomplete dimensions",Ui[i4]="incomplete, missing attachment",Ui[l4]="unsupported";function S4(w,T,C,it,bt,rt){var pt={cur:null,next:null,dirty:!1,setFBO:null},Ot=["rgba"],$t=["rgba4","rgb565","rgb5 a1"];T.ext_srgb&&$t.push("srgba"),T.ext_color_buffer_half_float&&$t.push("rgba16f","rgb16f"),T.webgl_color_buffer_float&&$t.push("rgba32f");var Ut=["uint8"];T.oes_texture_half_float&&Ut.push("half float","float16"),T.oes_texture_float&&Ut.push("float","float32");function Dt(re,jt,Mt){this.target=re,this.texture=jt,this.renderbuffer=Mt;var Je=0,uo=0;jt?(Je=jt.width,uo=jt.height):Mt&&(Je=Mt.width,uo=Mt.height),this.width=Je,this.height=uo}function Kt(re){re&&(re.texture&&re.texture._texture.decRef(),re.renderbuffer&&re.renderbuffer._renderbuffer.decRef())}function ne(re,jt,Mt){if(re)if(re.texture){var Je=re.texture._texture,uo=Math.max(1,Je.width),Ee=Math.max(1,Je.height);S(uo===jt&&Ee===Mt,"inconsistent width/height for supplied texture"),Je.refCount+=1}else{var bo=re.renderbuffer._renderbuffer;S(bo.width===jt&&bo.height===Mt,"inconsistent width/height for renderbuffer"),bo.refCount+=1}}function Ct(re,jt){jt&&(jt.texture?w.framebufferTexture2D(Aa,re,jt.target,jt.texture._texture.texture,0):w.framebufferRenderbuffer(Aa,re,iu,jt.renderbuffer._renderbuffer.renderbuffer))}function Zt(re){var jt=Bs,Mt=null,Je=null,uo=re;typeof re=="object"&&(uo=re.data,"target"in re&&(jt=re.target|0)),S.type(uo,"function","invalid attachment data");var Ee=uo._reglType;return Ee==="texture2d"?(Mt=uo,S(jt===Bs)):Ee==="textureCube"?(Mt=uo,S(jt>=jf&&jt<jf+6,"invalid cube map target")):Ee==="renderbuffer"?(Je=uo,jt=iu):S.raise("invalid regl object for attachment"),new Dt(jt,Mt,Je)}function Q(re,jt,Mt,Je,uo){if(Mt){var Ee=it.create2D({width:re,height:jt,format:Je,type:uo});return Ee._texture.refCount=0,new Dt(Bs,Ee,null)}else{var bo=bt.create({width:re,height:jt,format:Je});return bo._renderbuffer.refCount=0,new Dt(iu,null,bo)}}function vt(re){return re&&(re.texture||re.renderbuffer)}function Ht(re,jt,Mt){re&&(re.texture?re.texture.resize(jt,Mt):re.renderbuffer&&re.renderbuffer.resize(jt,Mt),re.width=jt,re.height=Mt)}var ve=0,kt={};function be(){this.id=ve++,kt[this.id]=this,this.framebuffer=w.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Tt(re){re.colorAttachments.forEach(Kt),Kt(re.depthAttachment),Kt(re.stencilAttachment),Kt(re.depthStencilAttachment)}function Jt(re){var jt=re.framebuffer;S(jt,"must not double destroy framebuffer"),w.deleteFramebuffer(jt),re.framebuffer=null,rt.framebufferCount--,delete kt[re.id]}function At(re){var jt;w.bindFramebuffer(Aa,re.framebuffer);var Mt=re.colorAttachments;for(jt=0;jt<Mt.length;++jt)Ct(Kv+jt,Mt[jt]);for(jt=Mt.length;jt<C.maxColorAttachments;++jt)w.framebufferTexture2D(Aa,Kv+jt,Bs,null,0);w.framebufferTexture2D(Aa,Jv,Bs,null,0),w.framebufferTexture2D(Aa,Qv,Bs,null,0),w.framebufferTexture2D(Aa,Zv,Bs,null,0),Ct(Qv,re.depthAttachment),Ct(Zv,re.stencilAttachment),Ct(Jv,re.depthStencilAttachment);var Je=w.checkFramebufferStatus(Aa);!w.isContextLost()&&Je!==tm&&S.raise("framebuffer configuration not supported, status = "+Ui[Je]),w.bindFramebuffer(Aa,pt.next?pt.next.framebuffer:null),pt.cur=pt.next,w.getError()}function te(re,jt){var Mt=new be;rt.framebufferCount++;function Je(Ee,bo){var ro;S(pt.next!==Mt,"can not update framebuffer which is currently in use");var xo=0,Po=0,Nn=!0,Kn=!0,ko=null,Dn=!0,on="rgba",Rn="uint8",qn=1,Fn=null,c0=null,g0=null,Sn=!1;if(typeof Ee=="number")xo=Ee|0,Po=bo|0||xo;else if(!Ee)xo=Po=1;else{S.type(Ee,"object","invalid arguments for framebuffer");var po=Ee;if("shape"in po){var x0=po.shape;S(Array.isArray(x0)&&x0.length>=2,"invalid shape for framebuffer"),xo=x0[0],Po=x0[1]}else"radius"in po&&(xo=Po=po.radius),"width"in po&&(xo=po.width),"height"in po&&(Po=po.height);("color"in po||"colors"in po)&&(ko=po.color||po.colors,Array.isArray(ko)&&S(ko.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),ko||("colorCount"in po&&(qn=po.colorCount|0,S(qn>0,"invalid color buffer count")),"colorTexture"in po&&(Dn=!!po.colorTexture,on="rgba4"),"colorType"in po&&(Rn=po.colorType,Dn?(S(T.oes_texture_float||!(Rn==="float"||Rn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),S(T.oes_texture_half_float||!(Rn==="half float"||Rn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Rn==="half float"||Rn==="float16"?(S(T.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),on="rgba16f"):(Rn==="float"||Rn==="float32")&&(S(T.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),on="rgba32f"),S.oneOf(Rn,Ut,"invalid color type")),"colorFormat"in po&&(on=po.colorFormat,Ot.indexOf(on)>=0?Dn=!0:$t.indexOf(on)>=0?Dn=!1:Dn?S.oneOf(po.colorFormat,Ot,"invalid color format for texture"):S.oneOf(po.colorFormat,$t,"invalid color format for renderbuffer"))),("depthTexture"in po||"depthStencilTexture"in po)&&(Sn=!!(po.depthTexture||po.depthStencilTexture),S(!Sn||T.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in po&&(typeof po.depth=="boolean"?Nn=po.depth:(Fn=po.depth,Kn=!1)),"stencil"in po&&(typeof po.stencil=="boolean"?Kn=po.stencil:(c0=po.stencil,Nn=!1)),"depthStencil"in po&&(typeof po.depthStencil=="boolean"?Nn=Kn=po.depthStencil:(g0=po.depthStencil,Nn=!1,Kn=!1))}var Fo=null,We=null,Mo=null,Ro=null;if(Array.isArray(ko))Fo=ko.map(Zt);else if(ko)Fo=[Zt(ko)];else for(Fo=new Array(qn),ro=0;ro<qn;++ro)Fo[ro]=Q(xo,Po,Dn,on,Rn);S(T.webgl_draw_buffers||Fo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),S(Fo.length<=C.maxColorAttachments,"too many color attachments, not supported"),xo=xo||Fo[0].width,Po=Po||Fo[0].height,Fn?We=Zt(Fn):Nn&&!Kn&&(We=Q(xo,Po,Sn,"depth","uint32")),c0?Mo=Zt(c0):Kn&&!Nn&&(Mo=Q(xo,Po,!1,"stencil","uint8")),g0?Ro=Zt(g0):!Fn&&!c0&&Kn&&Nn&&(Ro=Q(xo,Po,Sn,"depth stencil","depth stencil")),S(!!Fn+!!c0+!!g0<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var En=null;for(ro=0;ro<Fo.length;++ro)if(ne(Fo[ro],xo,Po),S(!Fo[ro]||Fo[ro].texture&&p4.indexOf(Fo[ro].texture._texture.format)>=0||Fo[ro].renderbuffer&&k4.indexOf(Fo[ro].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+ro+" is invalid"),Fo[ro]&&Fo[ro].texture){var ma=cu[Fo[ro].texture._texture.format]*Wf[Fo[ro].texture._texture.type];En===null?En=ma:S(En===ma,"all color attachments much have the same number of bits per pixel.")}return ne(We,xo,Po),S(!We||We.texture&&We.texture._texture.format===d4||We.renderbuffer&&We.renderbuffer._renderbuffer.format===x4,"invalid depth attachment for framebuffer object"),ne(Mo,xo,Po),S(!Mo||Mo.renderbuffer&&Mo.renderbuffer._renderbuffer.format===y4,"invalid stencil attachment for framebuffer object"),ne(Ro,xo,Po),S(!Ro||Ro.texture&&Ro.texture._texture.format===nm||Ro.renderbuffer&&Ro.renderbuffer._renderbuffer.format===nm,"invalid depth-stencil attachment for framebuffer object"),Tt(Mt),Mt.width=xo,Mt.height=Po,Mt.colorAttachments=Fo,Mt.depthAttachment=We,Mt.stencilAttachment=Mo,Mt.depthStencilAttachment=Ro,Je.color=Fo.map(vt),Je.depth=vt(We),Je.stencil=vt(Mo),Je.depthStencil=vt(Ro),Je.width=Mt.width,Je.height=Mt.height,At(Mt),Je}function uo(Ee,bo){S(pt.next!==Mt,"can not resize a framebuffer which is currently in use");var ro=Math.max(Ee|0,1),xo=Math.max(bo|0||ro,1);if(ro===Mt.width&&xo===Mt.height)return Je;for(var Po=Mt.colorAttachments,Nn=0;Nn<Po.length;++Nn)Ht(Po[Nn],ro,xo);return Ht(Mt.depthAttachment,ro,xo),Ht(Mt.stencilAttachment,ro,xo),Ht(Mt.depthStencilAttachment,ro,xo),Mt.width=Je.width=ro,Mt.height=Je.height=xo,At(Mt),Je}return Je(re,jt),e(Je,{resize:uo,_reglType:"framebuffer",_framebuffer:Mt,destroy:function(){Jt(Mt),Tt(Mt)},use:function(Ee){pt.setFBO({framebuffer:Je},Ee)}})}function Ue(re){var jt=Array(6);function Mt(uo){var Ee;S(jt.indexOf(pt.next)<0,"can not update framebuffer which is currently in use");var bo={color:null},ro=0,xo=null,Po="rgba",Nn="uint8",Kn=1;if(typeof uo=="number")ro=uo|0;else if(!uo)ro=1;else{S.type(uo,"object","invalid arguments for framebuffer");var ko=uo;if("shape"in ko){var Dn=ko.shape;S(Array.isArray(Dn)&&Dn.length>=2,"invalid shape for framebuffer"),S(Dn[0]===Dn[1],"cube framebuffer must be square"),ro=Dn[0]}else"radius"in ko&&(ro=ko.radius|0),"width"in ko?(ro=ko.width|0,"height"in ko&&S(ko.height===ro,"must be square")):"height"in ko&&(ro=ko.height|0);("color"in ko||"colors"in ko)&&(xo=ko.color||ko.colors,Array.isArray(xo)&&S(xo.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),xo||("colorCount"in ko&&(Kn=ko.colorCount|0,S(Kn>0,"invalid color buffer count")),"colorType"in ko&&(S.oneOf(ko.colorType,Ut,"invalid color type"),Nn=ko.colorType),"colorFormat"in ko&&(Po=ko.colorFormat,S.oneOf(ko.colorFormat,Ot,"invalid color format for texture"))),"depth"in ko&&(bo.depth=ko.depth),"stencil"in ko&&(bo.stencil=ko.stencil),"depthStencil"in ko&&(bo.depthStencil=ko.depthStencil)}var on;if(xo)if(Array.isArray(xo))for(on=[],Ee=0;Ee<xo.length;++Ee)on[Ee]=xo[Ee];else on=[xo];else{on=Array(Kn);var Rn={radius:ro,format:Po,type:Nn};for(Ee=0;Ee<Kn;++Ee)on[Ee]=it.createCube(Rn)}for(bo.color=Array(on.length),Ee=0;Ee<on.length;++Ee){var qn=on[Ee];S(typeof qn=="function"&&qn._reglType==="textureCube","invalid cube map"),ro=ro||qn.width,S(qn.width===ro&&qn.height===ro,"invalid cube map shape"),bo.color[Ee]={target:jf,data:on[Ee]}}for(Ee=0;Ee<6;++Ee){for(var Fn=0;Fn<on.length;++Fn)bo.color[Fn].target=jf+Ee;Ee>0&&(bo.depth=jt[0].depth,bo.stencil=jt[0].stencil,bo.depthStencil=jt[0].depthStencil),jt[Ee]?jt[Ee](bo):jt[Ee]=te(bo)}return e(Mt,{width:ro,height:ro,color:on})}function Je(uo){var Ee,bo=uo|0;if(S(bo>0&&bo<=C.maxCubeMapSize,"invalid radius for cube fbo"),bo===Mt.width)return Mt;var ro=Mt.color;for(Ee=0;Ee<ro.length;++Ee)ro[Ee].resize(bo);for(Ee=0;Ee<6;++Ee)jt[Ee].resize(bo);return Mt.width=Mt.height=bo,Mt}return Mt(re),e(Mt,{faces:jt,resize:Je,_reglType:"framebufferCube",destroy:function(){jt.forEach(function(uo){uo.destroy()})}})}function no(){pt.cur=null,pt.next=null,pt.dirty=!0,mr(kt).forEach(function(re){re.framebuffer=w.createFramebuffer(),At(re)})}return e(pt,{getFramebuffer:function(re){if(typeof re=="function"&&re._reglType==="framebuffer"){var jt=re._framebuffer;if(jt instanceof be)return jt}return null},create:te,createCube:Ue,clear:function(){mr(kt).forEach(Jt)},restore:no})}var E4=5126,rm=34962;function lu(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=E4,this.offset=0,this.stride=0,this.divisor=0}function z4(w,T,C,it,bt){for(var rt=C.maxAttributes,pt=new Array(rt),Ot=0;Ot<rt;++Ot)pt[Ot]=new lu;var $t=0,Ut={},Dt={Record:lu,scope:{},state:pt,currentVAO:null,targetVAO:null,restore:ne()?kt:function(){},createVAO:be,getVAO:Zt,destroyBuffer:Kt,setVAO:ne()?Q:vt,clear:ne()?Ht:function(){}};function Kt(Tt){for(var Jt=0;Jt<pt.length;++Jt){var At=pt[Jt];At.buffer===Tt&&(w.disableVertexAttribArray(Jt),At.buffer=null)}}function ne(){return T.oes_vertex_array_object}function Ct(){return T.angle_instanced_arrays}function Zt(Tt){return typeof Tt=="function"&&Tt._vao?Tt._vao:null}function Q(Tt){if(Tt!==Dt.currentVAO){var Jt=ne();Tt?Jt.bindVertexArrayOES(Tt.vao):Jt.bindVertexArrayOES(null),Dt.currentVAO=Tt}}function vt(Tt){if(Tt!==Dt.currentVAO){if(Tt)Tt.bindAttrs();else for(var Jt=Ct(),At=0;At<pt.length;++At){var te=pt[At];te.buffer?(w.enableVertexAttribArray(At),w.vertexAttribPointer(At,te.size,te.type,te.normalized,te.stride,te.offfset),Jt&&te.divisor&&Jt.vertexAttribDivisorANGLE(At,te.divisor)):(w.disableVertexAttribArray(At),w.vertexAttrib4f(At,te.x,te.y,te.z,te.w))}Dt.currentVAO=Tt}}function Ht(){mr(Ut).forEach(function(Tt){Tt.destroy()})}function ve(){this.id=++$t,this.attributes=[];var Tt=ne();Tt?this.vao=Tt.createVertexArrayOES():this.vao=null,Ut[this.id]=this,this.buffers=[]}ve.prototype.bindAttrs=function(){for(var Tt=Ct(),Jt=this.attributes,At=0;At<Jt.length;++At){var te=Jt[At];te.buffer?(w.enableVertexAttribArray(At),w.bindBuffer(rm,te.buffer.buffer),w.vertexAttribPointer(At,te.size,te.type,te.normalized,te.stride,te.offset),Tt&&te.divisor&&Tt.vertexAttribDivisorANGLE(At,te.divisor)):(w.disableVertexAttribArray(At),w.vertexAttrib4f(At,te.x,te.y,te.z,te.w))}for(var Ue=Jt.length;Ue<rt;++Ue)w.disableVertexAttribArray(Ue)},ve.prototype.refresh=function(){var Tt=ne();Tt&&(Tt.bindVertexArrayOES(this.vao),this.bindAttrs(),Dt.currentVAO=this)},ve.prototype.destroy=function(){if(this.vao){var Tt=ne();this===Dt.currentVAO&&(Dt.currentVAO=null,Tt.bindVertexArrayOES(null)),Tt.deleteVertexArrayOES(this.vao),this.vao=null}Ut[this.id]&&(delete Ut[this.id],it.vaoCount-=1)};function kt(){var Tt=ne();Tt&&mr(Ut).forEach(function(Jt){Jt.refresh()})}function be(Tt){var Jt=new ve;it.vaoCount+=1;function At(te){S(Array.isArray(te),"arguments to vertex array constructor must be an array"),S(te.length<rt,"too many attributes"),S(te.length>0,"must specify at least one attribute");var Ue={},no=Jt.attributes;no.length=te.length;for(var re=0;re<te.length;++re){var jt=te[re],Mt=no[re]=new lu,Je=jt.data||jt;if(Array.isArray(Je)||t(Je)||Qr(Je)){var uo;Jt.buffers[re]&&(uo=Jt.buffers[re],t(Je)&&uo._buffer.byteLength>=Je.byteLength?uo.subdata(Je):(uo.destroy(),Jt.buffers[re]=null)),Jt.buffers[re]||(uo=Jt.buffers[re]=bt.create(jt,rm,!1,!0)),Mt.buffer=bt.getBuffer(uo),Mt.size=Mt.buffer.dimension|0,Mt.normalized=!1,Mt.type=Mt.buffer.dtype,Mt.offset=0,Mt.stride=0,Mt.divisor=0,Mt.state=1,Ue[re]=1}else bt.getBuffer(jt)?(Mt.buffer=bt.getBuffer(jt),Mt.size=Mt.buffer.dimension|0,Mt.normalized=!1,Mt.type=Mt.buffer.dtype,Mt.offset=0,Mt.stride=0,Mt.divisor=0,Mt.state=1):bt.getBuffer(jt.buffer)?(Mt.buffer=bt.getBuffer(jt.buffer),Mt.size=(+jt.size||Mt.buffer.dimension)|0,Mt.normalized=!!jt.normalized||!1,"type"in jt?(S.parameter(jt.type,Fs,"invalid buffer type"),Mt.type=Fs[jt.type]):Mt.type=Mt.buffer.dtype,Mt.offset=(jt.offset||0)|0,Mt.stride=(jt.stride||0)|0,Mt.divisor=(jt.divisor||0)|0,Mt.state=1,S(Mt.size>=1&&Mt.size<=4,"size must be between 1 and 4"),S(Mt.offset>=0,"invalid offset"),S(Mt.stride>=0&&Mt.stride<=255,"stride must be between 0 and 255"),S(Mt.divisor>=0,"divisor must be positive"),S(!Mt.divisor||!!T.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in jt?(S(re>0,"first attribute must not be a constant"),Mt.x=+jt.x||0,Mt.y=+jt.y||0,Mt.z=+jt.z||0,Mt.w=+jt.w||0,Mt.state=2):S(!1,"invalid attribute spec for location "+re)}for(var Ee=0;Ee<Jt.buffers.length;++Ee)!Ue[Ee]&&Jt.buffers[Ee]&&(Jt.buffers[Ee].destroy(),Jt.buffers[Ee]=null);return Jt.refresh(),At}return At.destroy=function(){for(var te=0;te<Jt.buffers.length;++te)Jt.buffers[te]&&Jt.buffers[te].destroy();Jt.buffers.length=0,Jt.destroy()},At._vao=Jt,At._reglType="vao",At(Tt)}return Dt}var am=35632,A4=35633,T4=35718,L4=35721;function N4(w,T,C,it){var bt={},rt={};function pt(Q,vt,Ht,ve){this.name=Q,this.id=vt,this.location=Ht,this.info=ve}function Ot(Q,vt){for(var Ht=0;Ht<Q.length;++Ht)if(Q[Ht].id===vt.id){Q[Ht].location=vt.location;return}Q.push(vt)}function $t(Q,vt,Ht){var ve=Q===am?bt:rt,kt=ve[vt];if(!kt){var be=T.str(vt);kt=w.createShader(Q),w.shaderSource(kt,be),w.compileShader(kt),S.shaderError(w,kt,be,Q,Ht),ve[vt]=kt}return kt}var Ut={},Dt=[],Kt=0;function ne(Q,vt){this.id=Kt++,this.fragId=Q,this.vertId=vt,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,it.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Ct(Q,vt,Ht){var ve,kt,be=$t(am,Q.fragId),Tt=$t(A4,Q.vertId),Jt=Q.program=w.createProgram();if(w.attachShader(Jt,be),w.attachShader(Jt,Tt),Ht)for(ve=0;ve<Ht.length;++ve){var At=Ht[ve];w.bindAttribLocation(Jt,At[0],At[1])}w.linkProgram(Jt),S.linkError(w,Jt,T.str(Q.fragId),T.str(Q.vertId),vt);var te=w.getProgramParameter(Jt,T4);it.profile&&(Q.stats.uniformsCount=te);var Ue=Q.uniforms;for(ve=0;ve<te;++ve)if(kt=w.getActiveUniform(Jt,ve),kt)if(kt.size>1)for(var no=0;no<kt.size;++no){var re=kt.name.replace("[0]","["+no+"]");Ot(Ue,new pt(re,T.id(re),w.getUniformLocation(Jt,re),kt))}else Ot(Ue,new pt(kt.name,T.id(kt.name),w.getUniformLocation(Jt,kt.name),kt));var jt=w.getProgramParameter(Jt,L4);it.profile&&(Q.stats.attributesCount=jt);var Mt=Q.attributes;for(ve=0;ve<jt;++ve)kt=w.getActiveAttrib(Jt,ve),kt&&Ot(Mt,new pt(kt.name,T.id(kt.name),w.getAttribLocation(Jt,kt.name),kt))}it.profile&&(C.getMaxUniformsCount=function(){var Q=0;return Dt.forEach(function(vt){vt.stats.uniformsCount>Q&&(Q=vt.stats.uniformsCount)}),Q},C.getMaxAttributesCount=function(){var Q=0;return Dt.forEach(function(vt){vt.stats.attributesCount>Q&&(Q=vt.stats.attributesCount)}),Q});function Zt(){bt={},rt={};for(var Q=0;Q<Dt.length;++Q)Ct(Dt[Q],null,Dt[Q].attributes.map(function(vt){return[vt.location,vt.name]}))}return{clear:function(){var Q=w.deleteShader.bind(w);mr(bt).forEach(Q),bt={},mr(rt).forEach(Q),rt={},Dt.forEach(function(vt){w.deleteProgram(vt.program)}),Dt.length=0,Ut={},C.shaderCount=0},program:function(Q,vt,Ht,ve){S.command(Q>=0,"missing vertex shader",Ht),S.command(vt>=0,"missing fragment shader",Ht);var kt=Ut[vt];kt||(kt=Ut[vt]={});var be=kt[Q];if(be&&(be.refCount++,!ve))return be;var Tt=new ne(vt,Q);return C.shaderCount++,Ct(Tt,Ht,ve),be||(kt[Q]=Tt),Dt.push(Tt),e(Tt,{destroy:function(){if(Tt.refCount--,Tt.refCount<=0){w.deleteProgram(Tt.program);var Jt=Dt.indexOf(Tt);Dt.splice(Jt,1),C.shaderCount--}kt[Tt.vertId].refCount<=0&&(w.deleteShader(rt[Tt.vertId]),delete rt[Tt.vertId],delete Ut[Tt.fragId][Tt.vertId]),Object.keys(Ut[Tt.fragId]).length||(w.deleteShader(bt[Tt.fragId]),delete bt[Tt.fragId],delete Ut[Tt.fragId])}})},restore:Zt,shader:$t,frag:-1,vert:-1}}var R4=6408,ul=5121,O4=3333,Vf=5126;function C4(w,T,C,it,bt,rt,pt){function Ot(Dt){var Kt;T.next===null?(S(bt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Kt=ul):(S(T.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Kt=T.next.colorAttachments[0].texture._texture.type,rt.oes_texture_float?(S(Kt===ul||Kt===Vf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Kt===Vf&&S(pt.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):S(Kt===ul,"Reading from a framebuffer is only allowed for the type 'uint8'"));var ne=0,Ct=0,Zt=it.framebufferWidth,Q=it.framebufferHeight,vt=null;t(Dt)?vt=Dt:Dt&&(S.type(Dt,"object","invalid arguments to regl.read()"),ne=Dt.x|0,Ct=Dt.y|0,S(ne>=0&&ne<it.framebufferWidth,"invalid x offset for regl.read"),S(Ct>=0&&Ct<it.framebufferHeight,"invalid y offset for regl.read"),Zt=(Dt.width||it.framebufferWidth-ne)|0,Q=(Dt.height||it.framebufferHeight-Ct)|0,vt=Dt.data||null),vt&&(Kt===ul?S(vt instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Kt===Vf&&S(vt instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),S(Zt>0&&Zt+ne<=it.framebufferWidth,"invalid width for read pixels"),S(Q>0&&Q+Ct<=it.framebufferHeight,"invalid height for read pixels"),C();var Ht=Zt*Q*4;return vt||(Kt===ul?vt=new Uint8Array(Ht):Kt===Vf&&(vt=vt||new Float32Array(Ht))),S.isTypedArray(vt,"data buffer for regl.read() must be a typedarray"),S(vt.byteLength>=Ht,"data buffer for regl.read() too small"),w.pixelStorei(O4,4),w.readPixels(ne,Ct,Zt,Q,R4,Kt,vt),vt}function $t(Dt){var Kt;return T.setFBO({framebuffer:Dt.framebuffer},function(){Kt=Ot(Dt)}),Kt}function Ut(Dt){return!Dt||!("framebuffer"in Dt)?Ot(Dt):$t(Dt)}return Ut}function Bi(w){return Array.prototype.slice.call(w)}function ji(w){return Bi(w).join("")}function P4(){var w=0,T=[],C=[];function it(Kt){for(var ne=0;ne<C.length;++ne)if(C[ne]===Kt)return T[ne];var Ct="g"+w++;return T.push(Ct),C.push(Kt),Ct}function bt(){var Kt=[];function ne(){Kt.push.apply(Kt,Bi(arguments))}var Ct=[];function Zt(){var Q="v"+w++;return Ct.push(Q),arguments.length>0&&(Kt.push(Q,"="),Kt.push.apply(Kt,Bi(arguments)),Kt.push(";")),Q}return e(ne,{def:Zt,toString:function(){return ji([Ct.length>0?"var "+Ct.join(",")+";":"",ji(Kt)])}})}function rt(){var Kt=bt(),ne=bt(),Ct=Kt.toString,Zt=ne.toString;function Q(vt,Ht){ne(vt,Ht,"=",Kt.def(vt,Ht),";")}return e(function(){Kt.apply(Kt,Bi(arguments))},{def:Kt.def,entry:Kt,exit:ne,save:Q,set:function(vt,Ht,ve){Q(vt,Ht),Kt(vt,Ht,"=",ve,";")},toString:function(){return Ct()+Zt()}})}function pt(){var Kt=ji(arguments),ne=rt(),Ct=rt(),Zt=ne.toString,Q=Ct.toString;return e(ne,{then:function(){return ne.apply(ne,Bi(arguments)),this},else:function(){return Ct.apply(Ct,Bi(arguments)),this},toString:function(){var vt=Q();return vt&&(vt="else{"+vt+"}"),ji(["if(",Kt,"){",Zt(),"}",vt])}})}var Ot=bt(),$t={};function Ut(Kt,ne){var Ct=[];function Zt(){var kt="a"+Ct.length;return Ct.push(kt),kt}ne=ne||0;for(var Q=0;Q<ne;++Q)Zt();var vt=rt(),Ht=vt.toString,ve=$t[Kt]=e(vt,{arg:Zt,toString:function(){return ji(["function(",Ct.join(),"){",Ht(),"}"])}});return ve}function Dt(){var Kt=['"use strict";',Ot,"return {"];Object.keys($t).forEach(function(Zt){Kt.push('"',Zt,'":',$t[Zt].toString(),",")}),Kt.push("}");var ne=ji(Kt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Ct=Function.apply(null,T.concat(ne));return Ct.apply(null,C)}return{global:Ot,link:it,block:bt,proc:Ut,scope:rt,cond:pt,compile:Dt}}var Wi="xyzw".split(""),sm=5121,Vi=1,fu=2,hu=0,uu=1,du=2,pu=3,Xf=4,im=5,cm=6,lm="dither",fm="blend.enable",hm="blend.color",vu="blend.equation",mu="blend.func",um="depth.enable",dm="depth.func",pm="depth.range",vm="depth.mask",gu="colorMask",mm="cull.enable",gm="cull.face",xu="frontFace",yu="lineWidth",xm="polygonOffset.enable",bu="polygonOffset.offset",ym="sample.alpha",bm="sample.enable",wu="sample.coverage",wm="stencil.enable",_m="stencil.mask",_u="stencil.func",Mu="stencil.opFront",dl="stencil.opBack",Mm="scissor.enable",Yf="scissor.box",Ta="viewport",pl="profile",js="framebuffer",vl="vert",ml="frag",Ws="elements",Vs="primitive",Xs="count",Kf="offset",Qf="instances",gl="vao",ku="Width",Su="Height",Xi=js+ku,Yi=js+Su,I4=Ta+ku,$4=Ta+Su,km="drawingBuffer",Sm=km+ku,Em=km+Su,D4=[mu,vu,_u,Mu,dl,wu,Ta,Yf,bu],Ki=34962,q4=34963,F4=35632,G4=35633,zm=3553,H4=34067,U4=2884,B4=3042,j4=3024,W4=2960,V4=2929,X4=3089,Y4=32823,K4=32926,Q4=32928,Eu=5126,Zf=35664,Jf=35665,th=35666,zu=5124,eh=35667,oh=35668,nh=35669,Au=35670,rh=35671,ah=35672,sh=35673,xl=35674,yl=35675,bl=35676,wl=35678,_l=35680,Am=4,Ml=1028,Ys=1029,Tm=2304,Tu=2305,Z4=32775,J4=32776,t6=519,Ja=7680,Lm=0,Nm=1,Rm=32774,e6=513,Om=36160,o6=36064,va={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Cm=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Qi={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},ts={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Pm={frag:F4,vert:G4},Lu={cw:Tm,ccw:Tu};function ih(w){return Array.isArray(w)||t(w)||Qr(w)}function Im(w){return w.sort(function(T,C){return T===Ta?-1:C===Ta?1:T<C?-1:1})}function U0(w,T,C,it){this.thisDep=w,this.contextDep=T,this.propDep=C,this.append=it}function es(w){return w&&!(w.thisDep||w.contextDep||w.propDep)}function Ln(w){return new U0(!1,!1,!1,w)}function ar(w,T){var C=w.type;if(C===hu){var it=w.data.length;return new U0(!0,it>=1,it>=2,T)}else if(C===Xf){var bt=w.data;return new U0(bt.thisDep,bt.contextDep,bt.propDep,T)}else{if(C===im)return new U0(!1,!1,!1,T);if(C===cm){for(var rt=!1,pt=!1,Ot=!1,$t=0;$t<w.data.length;++$t){var Ut=w.data[$t];if(Ut.type===uu)Ot=!0;else if(Ut.type===du)pt=!0;else if(Ut.type===pu)rt=!0;else if(Ut.type===hu){rt=!0;var Dt=Ut.data;Dt>=1&&(pt=!0),Dt>=2&&(Ot=!0)}else Ut.type===Xf&&(rt=rt||Ut.data.thisDep,pt=pt||Ut.data.contextDep,Ot=Ot||Ut.data.propDep)}return new U0(rt,pt,Ot,T)}else return new U0(C===pu,C===du,C===uu,T)}}var $m=new U0(!1,!1,!1,function(){});function n6(w,T,C,it,bt,rt,pt,Ot,$t,Ut,Dt,Kt,ne,Ct,Zt){var Q=Ut.Record,vt={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(vt.min=Z4,vt.max=J4);var Ht=C.angle_instanced_arrays,ve=C.webgl_draw_buffers,kt={dirty:!0,profile:Zt.profile},be={},Tt=[],Jt={},At={};function te(N){return N.replace(".","_")}function Ue(N,E,q){var K=te(N);Tt.push(N),be[K]=kt[K]=!!q,Jt[K]=E}function no(N,E,q){var K=te(N);Tt.push(N),Array.isArray(q)?(kt[K]=q.slice(),be[K]=q.slice()):kt[K]=be[K]=q,At[K]=E}Ue(lm,j4),Ue(fm,B4),no(hm,"blendColor",[0,0,0,0]),no(vu,"blendEquationSeparate",[Rm,Rm]),no(mu,"blendFuncSeparate",[Nm,Lm,Nm,Lm]),Ue(um,V4,!0),no(dm,"depthFunc",e6),no(pm,"depthRange",[0,1]),no(vm,"depthMask",!0),no(gu,gu,[!0,!0,!0,!0]),Ue(mm,U4),no(gm,"cullFace",Ys),no(xu,xu,Tu),no(yu,yu,1),Ue(xm,Y4),no(bu,"polygonOffset",[0,0]),Ue(ym,K4),Ue(bm,Q4),no(wu,"sampleCoverage",[1,!1]),Ue(wm,W4),no(_m,"stencilMask",-1),no(_u,"stencilFunc",[t6,0,-1]),no(Mu,"stencilOpSeparate",[Ml,Ja,Ja,Ja]),no(dl,"stencilOpSeparate",[Ys,Ja,Ja,Ja]),Ue(Mm,X4),no(Yf,"scissor",[0,0,w.drawingBufferWidth,w.drawingBufferHeight]),no(Ta,Ta,[0,0,w.drawingBufferWidth,w.drawingBufferHeight]);var re={gl:w,context:ne,strings:T,next:be,current:kt,draw:Kt,elements:rt,buffer:bt,shader:Dt,attributes:Ut.state,vao:Ut,uniforms:$t,framebuffer:Ot,extensions:C,timer:Ct,isBufferArgs:ih},jt={primTypes:Ii,compareFuncs:Qi,blendFuncs:va,blendEquations:vt,stencilOps:ts,glTypes:Fs,orientationType:Lu};S.optional(function(){re.isArrayLike=kn}),ve&&(jt.backBuffer=[Ys],jt.drawBuffer=Ge(it.maxDrawbuffers,function(N){return N===0?[0]:Ge(N,function(E){return o6+E})}));var Mt=0;function Je(){var N=P4(),E=N.link,q=N.global;N.id=Mt++,N.batchId="0";var K=E(re),Z=N.shared={props:"a0"};Object.keys(re).forEach(function($){Z[$]=q.def(K,".",$)}),S.optional(function(){N.CHECK=E(S),N.commandStr=S.guessCommand(),N.command=E(N.commandStr),N.assert=function($,L,X){$("if(!(",L,"))",this.CHECK,".commandRaise(",E(X),",",this.command,");")},jt.invalidBlendCombinations=Cm});var U=N.next={},F=N.current={};Object.keys(At).forEach(function($){Array.isArray(kt[$])&&(U[$]=q.def(Z.next,".",$),F[$]=q.def(Z.current,".",$))});var W=N.constants={};Object.keys(jt).forEach(function($){W[$]=q.def(JSON.stringify(jt[$]))}),N.invoke=function($,L){switch(L.type){case hu:var X=["this",Z.context,Z.props,N.batchId];return $.def(E(L.data),".call(",X.slice(0,Math.max(L.data.length+1,4)),")");case uu:return $.def(Z.props,L.data);case du:return $.def(Z.context,L.data);case pu:return $.def("this",L.data);case Xf:return L.data.append(N,$),L.data.ref;case im:return L.data.toString();case cm:return L.data.map(function(tt){return N.invoke($,tt)})}},N.attribCache={};var R={};return N.scopeAttrib=function($){var L=T.id($);if(L in R)return R[L];var X=Ut.scope[L];X||(X=Ut.scope[L]=new Q);var tt=R[L]=E(X);return tt},N}function uo(N){var E=N.static,q=N.dynamic,K;if(pl in E){var Z=!!E[pl];K=Ln(function(F,W){return Z}),K.enable=Z}else if(pl in q){var U=q[pl];K=ar(U,function(F,W){return F.invoke(W,U)})}return K}function Ee(N,E){var q=N.static,K=N.dynamic;if(js in q){var Z=q[js];return Z?(Z=Ot.getFramebuffer(Z),S.command(Z,"invalid framebuffer object"),Ln(function(F,W){var R=F.link(Z),$=F.shared;W.set($.framebuffer,".next",R);var L=$.context;return W.set(L,"."+Xi,R+".width"),W.set(L,"."+Yi,R+".height"),R})):Ln(function(F,W){var R=F.shared;W.set(R.framebuffer,".next","null");var $=R.context;return W.set($,"."+Xi,$+"."+Sm),W.set($,"."+Yi,$+"."+Em),"null"})}else if(js in K){var U=K[js];return ar(U,function(F,W){var R=F.invoke(W,U),$=F.shared,L=$.framebuffer,X=W.def(L,".getFramebuffer(",R,")");S.optional(function(){F.assert(W,"!"+R+"||"+X,"invalid framebuffer object")}),W.set(L,".next",X);var tt=$.context;return W.set(tt,"."+Xi,X+"?"+X+".width:"+tt+"."+Sm),W.set(tt,"."+Yi,X+"?"+X+".height:"+tt+"."+Em),X})}else return null}function bo(N,E,q){var K=N.static,Z=N.dynamic;function U(R){if(R in K){var $=K[R];S.commandType($,"object","invalid "+R,q.commandStr);var L=!0,X=$.x|0,tt=$.y|0,yt,wt;return"width"in $?(yt=$.width|0,S.command(yt>=0,"invalid "+R,q.commandStr)):L=!1,"height"in $?(wt=$.height|0,S.command(wt>=0,"invalid "+R,q.commandStr)):L=!1,new U0(!L&&E&&E.thisDep,!L&&E&&E.contextDep,!L&&E&&E.propDep,function(qe,vo){var ze=qe.shared.context,Xe=yt;"width"in $||(Xe=vo.def(ze,".",Xi,"-",X));var ao=wt;return"height"in $||(ao=vo.def(ze,".",Yi,"-",tt)),[X,tt,Xe,ao]})}else if(R in Z){var gt=Z[R],Ft=ar(gt,function(qe,vo){var ze=qe.invoke(vo,gt);S.optional(function(){qe.assert(vo,ze+"&&typeof "+ze+'==="object"',"invalid "+R)});var Xe=qe.shared.context,ao=vo.def(ze,".x|0"),Io=vo.def(ze,".y|0"),yn=vo.def('"width" in ',ze,"?",ze,".width|0:","(",Xe,".",Xi,"-",ao,")"),B0=vo.def('"height" in ',ze,"?",ze,".height|0:","(",Xe,".",Yi,"-",Io,")");return S.optional(function(){qe.assert(vo,yn+">=0&&"+B0+">=0","invalid "+R)}),[ao,Io,yn,B0]});return E&&(Ft.thisDep=Ft.thisDep||E.thisDep,Ft.contextDep=Ft.contextDep||E.contextDep,Ft.propDep=Ft.propDep||E.propDep),Ft}else return E?new U0(E.thisDep,E.contextDep,E.propDep,function(qe,vo){var ze=qe.shared.context;return[0,0,vo.def(ze,".",Xi),vo.def(ze,".",Yi)]}):null}var F=U(Ta);if(F){var W=F;F=new U0(F.thisDep,F.contextDep,F.propDep,function(R,$){var L=W.append(R,$),X=R.shared.context;return $.set(X,"."+I4,L[2]),$.set(X,"."+$4,L[3]),L})}return{viewport:F,scissor_box:U(Yf)}}function ro(N,E){var q=N.static,K=typeof q[ml]=="string"&&typeof q[vl]=="string";if(K){if(Object.keys(E.dynamic).length>0)return null;var Z=E.static,U=Object.keys(Z);if(U.length>0&&typeof Z[U[0]]=="number"){for(var F=[],W=0;W<U.length;++W)S(typeof Z[U[W]]=="number","must specify all vertex attribute locations when using vaos"),F.push([Z[U[W]]|0,U[W]]);return F}}return null}function xo(N,E,q){var K=N.static,Z=N.dynamic;function U(L){if(L in K){var X=T.id(K[L]);S.optional(function(){Dt.shader(Pm[L],X,S.guessCommand())});var tt=Ln(function(){return X});return tt.id=X,tt}else if(L in Z){var yt=Z[L];return ar(yt,function(wt,gt){var Ft=wt.invoke(gt,yt),qe=gt.def(wt.shared.strings,".id(",Ft,")");return S.optional(function(){gt(wt.shared.shader,".shader(",Pm[L],",",qe,",",wt.command,");")}),qe})}return null}var F=U(ml),W=U(vl),R=null,$;return es(F)&&es(W)?(R=Dt.program(W.id,F.id,null,q),$=Ln(function(L,X){return L.link(R)})):$=new U0(F&&F.thisDep||W&&W.thisDep,F&&F.contextDep||W&&W.contextDep,F&&F.propDep||W&&W.propDep,function(L,X){var tt=L.shared.shader,yt;F?yt=F.append(L,X):yt=X.def(tt,".",ml);var wt;W?wt=W.append(L,X):wt=X.def(tt,".",vl);var gt=tt+".program("+wt+","+yt;return S.optional(function(){gt+=","+L.command}),X.def(gt+")")}),{frag:F,vert:W,progVar:$,program:R}}function Po(N,E){var q=N.static,K=N.dynamic;function Z(){if(Ws in q){var L=q[Ws];ih(L)?L=rt.getElements(rt.create(L,!0)):L&&(L=rt.getElements(L),S.command(L,"invalid elements",E.commandStr));var X=Ln(function(yt,wt){if(L){var gt=yt.link(L);return yt.ELEMENTS=gt,gt}return yt.ELEMENTS=null,null});return X.value=L,X}else if(Ws in K){var tt=K[Ws];return ar(tt,function(yt,wt){var gt=yt.shared,Ft=gt.isBufferArgs,qe=gt.elements,vo=yt.invoke(wt,tt),ze=wt.def("null"),Xe=wt.def(Ft,"(",vo,")"),ao=yt.cond(Xe).then(ze,"=",qe,".createStream(",vo,");").else(ze,"=",qe,".getElements(",vo,");");return S.optional(function(){yt.assert(ao.else,"!"+vo+"||"+ze,"invalid elements")}),wt.entry(ao),wt.exit(yt.cond(Xe).then(qe,".destroyStream(",ze,");")),yt.ELEMENTS=ze,ze})}return null}var U=Z();function F(){if(Vs in q){var L=q[Vs];return S.commandParameter(L,Ii,"invalid primitve",E.commandStr),Ln(function(tt,yt){return Ii[L]})}else if(Vs in K){var X=K[Vs];return ar(X,function(tt,yt){var wt=tt.constants.primTypes,gt=tt.invoke(yt,X);return S.optional(function(){tt.assert(yt,gt+" in "+wt,"invalid primitive, must be one of "+Object.keys(Ii))}),yt.def(wt,"[",gt,"]")})}else if(U)return es(U)?U.value?Ln(function(tt,yt){return yt.def(tt.ELEMENTS,".primType")}):Ln(function(){return Am}):new U0(U.thisDep,U.contextDep,U.propDep,function(tt,yt){var wt=tt.ELEMENTS;return yt.def(wt,"?",wt,".primType:",Am)});return null}function W(L,X){if(L in q){var tt=q[L]|0;return S.command(!X||tt>=0,"invalid "+L,E.commandStr),Ln(function(wt,gt){return X&&(wt.OFFSET=tt),tt})}else if(L in K){var yt=K[L];return ar(yt,function(wt,gt){var Ft=wt.invoke(gt,yt);return X&&(wt.OFFSET=Ft,S.optional(function(){wt.assert(gt,Ft+">=0","invalid "+L)})),Ft})}else if(X&&U)return Ln(function(wt,gt){return wt.OFFSET="0",0});return null}var R=W(Kf,!0);function $(){if(Xs in q){var L=q[Xs]|0;return S.command(typeof L=="number"&&L>=0,"invalid vertex count",E.commandStr),Ln(function(){return L})}else if(Xs in K){var X=K[Xs];return ar(X,function(wt,gt){var Ft=wt.invoke(gt,X);return S.optional(function(){wt.assert(gt,"typeof "+Ft+'==="number"&&'+Ft+">=0&&"+Ft+"===("+Ft+"|0)","invalid vertex count")}),Ft})}else if(U)if(es(U)){if(U)return R?new U0(R.thisDep,R.contextDep,R.propDep,function(wt,gt){var Ft=gt.def(wt.ELEMENTS,".vertCount-",wt.OFFSET);return S.optional(function(){wt.assert(gt,Ft+">=0","invalid vertex offset/element buffer too small")}),Ft}):Ln(function(wt,gt){return gt.def(wt.ELEMENTS,".vertCount")});var tt=Ln(function(){return-1});return S.optional(function(){tt.MISSING=!0}),tt}else{var yt=new U0(U.thisDep||R.thisDep,U.contextDep||R.contextDep,U.propDep||R.propDep,function(wt,gt){var Ft=wt.ELEMENTS;return wt.OFFSET?gt.def(Ft,"?",Ft,".vertCount-",wt.OFFSET,":-1"):gt.def(Ft,"?",Ft,".vertCount:-1")});return S.optional(function(){yt.DYNAMIC=!0}),yt}return null}return{elements:U,primitive:F(),count:$(),instances:W(Qf,!1),offset:R}}function Nn(N,E){var q=N.static,K=N.dynamic,Z={};return Tt.forEach(function(U){var F=te(U);function W(R,$){if(U in q){var L=R(q[U]);Z[F]=Ln(function(){return L})}else if(U in K){var X=K[U];Z[F]=ar(X,function(tt,yt){return $(tt,yt,tt.invoke(yt,X))})}}switch(U){case mm:case fm:case lm:case wm:case um:case Mm:case xm:case ym:case bm:case vm:return W(function(R){return S.commandType(R,"boolean",U,E.commandStr),R},function(R,$,L){return S.optional(function(){R.assert($,"typeof "+L+'==="boolean"',"invalid flag "+U,R.commandStr)}),L});case dm:return W(function(R){return S.commandParameter(R,Qi,"invalid "+U,E.commandStr),Qi[R]},function(R,$,L){var X=R.constants.compareFuncs;return S.optional(function(){R.assert($,L+" in "+X,"invalid "+U+", must be one of "+Object.keys(Qi))}),$.def(X,"[",L,"]")});case pm:return W(function(R){return S.command(kn(R)&&R.length===2&&typeof R[0]=="number"&&typeof R[1]=="number"&&R[0]<=R[1],"depth range is 2d array",E.commandStr),R},function(R,$,L){S.optional(function(){R.assert($,R.shared.isArrayLike+"("+L+")&&"+L+".length===2&&typeof "+L+'[0]==="number"&&typeof '+L+'[1]==="number"&&'+L+"[0]<="+L+"[1]","depth range must be a 2d array")});var X=$.def("+",L,"[0]"),tt=$.def("+",L,"[1]");return[X,tt]});case mu:return W(function(R){S.commandType(R,"object","blend.func",E.commandStr);var $="srcRGB"in R?R.srcRGB:R.src,L="srcAlpha"in R?R.srcAlpha:R.src,X="dstRGB"in R?R.dstRGB:R.dst,tt="dstAlpha"in R?R.dstAlpha:R.dst;return S.commandParameter($,va,F+".srcRGB",E.commandStr),S.commandParameter(L,va,F+".srcAlpha",E.commandStr),S.commandParameter(X,va,F+".dstRGB",E.commandStr),S.commandParameter(tt,va,F+".dstAlpha",E.commandStr),S.command(Cm.indexOf($+", "+X)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+$+", "+X+")",E.commandStr),[va[$],va[X],va[L],va[tt]]},function(R,$,L){var X=R.constants.blendFuncs;S.optional(function(){R.assert($,L+"&&typeof "+L+'==="object"',"invalid blend func, must be an object")});function tt(ze,Xe){var ao=$.def('"',ze,Xe,'" in ',L,"?",L,".",ze,Xe,":",L,".",ze);return S.optional(function(){R.assert($,ao+" in "+X,"invalid "+U+"."+ze+Xe+", must be one of "+Object.keys(va))}),ao}var yt=tt("src","RGB"),wt=tt("dst","RGB");S.optional(function(){var ze=R.constants.invalidBlendCombinations;R.assert($,ze+".indexOf("+yt+'+", "+'+wt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var gt=$.def(X,"[",yt,"]"),Ft=$.def(X,"[",tt("src","Alpha"),"]"),qe=$.def(X,"[",wt,"]"),vo=$.def(X,"[",tt("dst","Alpha"),"]");return[gt,qe,Ft,vo]});case vu:return W(function(R){if(typeof R=="string")return S.commandParameter(R,vt,"invalid "+U,E.commandStr),[vt[R],vt[R]];if(typeof R=="object")return S.commandParameter(R.rgb,vt,U+".rgb",E.commandStr),S.commandParameter(R.alpha,vt,U+".alpha",E.commandStr),[vt[R.rgb],vt[R.alpha]];S.commandRaise("invalid blend.equation",E.commandStr)},function(R,$,L){var X=R.constants.blendEquations,tt=$.def(),yt=$.def(),wt=R.cond("typeof ",L,'==="string"');return S.optional(function(){function gt(Ft,qe,vo){R.assert(Ft,vo+" in "+X,"invalid "+qe+", must be one of "+Object.keys(vt))}gt(wt.then,U,L),R.assert(wt.else,L+"&&typeof "+L+'==="object"',"invalid "+U),gt(wt.else,U+".rgb",L+".rgb"),gt(wt.else,U+".alpha",L+".alpha")}),wt.then(tt,"=",yt,"=",X,"[",L,"];"),wt.else(tt,"=",X,"[",L,".rgb];",yt,"=",X,"[",L,".alpha];"),$(wt),[tt,yt]});case hm:return W(function(R){return S.command(kn(R)&&R.length===4,"blend.color must be a 4d array",E.commandStr),Ge(4,function($){return+R[$]})},function(R,$,L){return S.optional(function(){R.assert($,R.shared.isArrayLike+"("+L+")&&"+L+".length===4","blend.color must be a 4d array")}),Ge(4,function(X){return $.def("+",L,"[",X,"]")})});case _m:return W(function(R){return S.commandType(R,"number",F,E.commandStr),R|0},function(R,$,L){return S.optional(function(){R.assert($,"typeof "+L+'==="number"',"invalid stencil.mask")}),$.def(L,"|0")});case _u:return W(function(R){S.commandType(R,"object",F,E.commandStr);var $=R.cmp||"keep",L=R.ref||0,X="mask"in R?R.mask:-1;return S.commandParameter($,Qi,U+".cmp",E.commandStr),S.commandType(L,"number",U+".ref",E.commandStr),S.commandType(X,"number",U+".mask",E.commandStr),[Qi[$],L,X]},function(R,$,L){var X=R.constants.compareFuncs;S.optional(function(){function gt(){R.assert($,Array.prototype.join.call(arguments,""),"invalid stencil.func")}gt(L+"&&typeof ",L,'==="object"'),gt('!("cmp" in ',L,")||(",L,".cmp in ",X,")")});var tt=$.def('"cmp" in ',L,"?",X,"[",L,".cmp]",":",Ja),yt=$.def(L,".ref|0"),wt=$.def('"mask" in ',L,"?",L,".mask|0:-1");return[tt,yt,wt]});case Mu:case dl:return W(function(R){S.commandType(R,"object",F,E.commandStr);var $=R.fail||"keep",L=R.zfail||"keep",X=R.zpass||"keep";return S.commandParameter($,ts,U+".fail",E.commandStr),S.commandParameter(L,ts,U+".zfail",E.commandStr),S.commandParameter(X,ts,U+".zpass",E.commandStr),[U===dl?Ys:Ml,ts[$],ts[L],ts[X]]},function(R,$,L){var X=R.constants.stencilOps;S.optional(function(){R.assert($,L+"&&typeof "+L+'==="object"',"invalid "+U)});function tt(yt){return S.optional(function(){R.assert($,'!("'+yt+'" in '+L+")||("+L+"."+yt+" in "+X+")","invalid "+U+"."+yt+", must be one of "+Object.keys(ts))}),$.def('"',yt,'" in ',L,"?",X,"[",L,".",yt,"]:",Ja)}return[U===dl?Ys:Ml,tt("fail"),tt("zfail"),tt("zpass")]});case bu:return W(function(R){S.commandType(R,"object",F,E.commandStr);var $=R.factor|0,L=R.units|0;return S.commandType($,"number",F+".factor",E.commandStr),S.commandType(L,"number",F+".units",E.commandStr),[$,L]},function(R,$,L){S.optional(function(){R.assert($,L+"&&typeof "+L+'==="object"',"invalid "+U)});var X=$.def(L,".factor|0"),tt=$.def(L,".units|0");return[X,tt]});case gm:return W(function(R){var $=0;return R==="front"?$=Ml:R==="back"&&($=Ys),S.command(!!$,F,E.commandStr),$},function(R,$,L){return S.optional(function(){R.assert($,L+'==="front"||'+L+'==="back"',"invalid cull.face")}),$.def(L,'==="front"?',Ml,":",Ys)});case yu:return W(function(R){return S.command(typeof R=="number"&&R>=it.lineWidthDims[0]&&R<=it.lineWidthDims[1],"invalid line width, must be a positive number between "+it.lineWidthDims[0]+" and "+it.lineWidthDims[1],E.commandStr),R},function(R,$,L){return S.optional(function(){R.assert($,"typeof "+L+'==="number"&&'+L+">="+it.lineWidthDims[0]+"&&"+L+"<="+it.lineWidthDims[1],"invalid line width")}),L});case xu:return W(function(R){return S.commandParameter(R,Lu,F,E.commandStr),Lu[R]},function(R,$,L){return S.optional(function(){R.assert($,L+'==="cw"||'+L+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),$.def(L+'==="cw"?'+Tm+":"+Tu)});case gu:return W(function(R){return S.command(kn(R)&&R.length===4,"color.mask must be length 4 array",E.commandStr),R.map(function($){return!!$})},function(R,$,L){return S.optional(function(){R.assert($,R.shared.isArrayLike+"("+L+")&&"+L+".length===4","invalid color.mask")}),Ge(4,function(X){return"!!"+L+"["+X+"]"})});case wu:return W(function(R){S.command(typeof R=="object"&&R,F,E.commandStr);var $="value"in R?R.value:1,L=!!R.invert;return S.command(typeof $=="number"&&$>=0&&$<=1,"sample.coverage.value must be a number between 0 and 1",E.commandStr),[$,L]},function(R,$,L){S.optional(function(){R.assert($,L+"&&typeof "+L+'==="object"',"invalid sample.coverage")});var X=$.def('"value" in ',L,"?+",L,".value:1"),tt=$.def("!!",L,".invert");return[X,tt]})}}),Z}function Kn(N,E){var q=N.static,K=N.dynamic,Z={};return Object.keys(q).forEach(function(U){var F=q[U],W;if(typeof F=="number"||typeof F=="boolean")W=Ln(function(){return F});else if(typeof F=="function"){var R=F._reglType;R==="texture2d"||R==="textureCube"?W=Ln(function($){return $.link(F)}):R==="framebuffer"||R==="framebufferCube"?(S.command(F.color.length>0,'missing color attachment for framebuffer sent to uniform "'+U+'"',E.commandStr),W=Ln(function($){return $.link(F.color[0])})):S.commandRaise('invalid data for uniform "'+U+'"',E.commandStr)}else kn(F)?W=Ln(function($){var L=$.global.def("[",Ge(F.length,function(X){return S.command(typeof F[X]=="number"||typeof F[X]=="boolean","invalid uniform "+U,$.commandStr),F[X]}),"]");return L}):S.commandRaise('invalid or missing data for uniform "'+U+'"',E.commandStr);W.value=F,Z[U]=W}),Object.keys(K).forEach(function(U){var F=K[U];Z[U]=ar(F,function(W,R){return W.invoke(R,F)})}),Z}function ko(N,E){var q=N.static,K=N.dynamic,Z={};return Object.keys(q).forEach(function(U){var F=q[U],W=T.id(U),R=new Q;if(ih(F))R.state=Vi,R.buffer=bt.getBuffer(bt.create(F,Ki,!1,!0)),R.type=0;else{var $=bt.getBuffer(F);if($)R.state=Vi,R.buffer=$,R.type=0;else if(S.command(typeof F=="object"&&F,"invalid data for attribute "+U,E.commandStr),"constant"in F){var L=F.constant;R.buffer="null",R.state=fu,typeof L=="number"?R.x=L:(S.command(kn(L)&&L.length>0&&L.length<=4,"invalid constant for attribute "+U,E.commandStr),Wi.forEach(function(qe,vo){vo<L.length&&(R[qe]=L[vo])}))}else{ih(F.buffer)?$=bt.getBuffer(bt.create(F.buffer,Ki,!1,!0)):$=bt.getBuffer(F.buffer),S.command(!!$,'missing buffer for attribute "'+U+'"',E.commandStr);var X=F.offset|0;S.command(X>=0,'invalid offset for attribute "'+U+'"',E.commandStr);var tt=F.stride|0;S.command(tt>=0&&tt<256,'invalid stride for attribute "'+U+'", must be integer betweeen [0, 255]',E.commandStr);var yt=F.size|0;S.command(!("size"in F)||yt>0&&yt<=4,'invalid size for attribute "'+U+'", must be 1,2,3,4',E.commandStr);var wt=!!F.normalized,gt=0;"type"in F&&(S.commandParameter(F.type,Fs,"invalid type for attribute "+U,E.commandStr),gt=Fs[F.type]);var Ft=F.divisor|0;"divisor"in F&&(S.command(Ft===0||Ht,'cannot specify divisor for attribute "'+U+'", instancing not supported',E.commandStr),S.command(Ft>=0,'invalid divisor for attribute "'+U+'"',E.commandStr)),S.optional(function(){var qe=E.commandStr,vo=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(F).forEach(function(ze){S.command(vo.indexOf(ze)>=0,'unknown parameter "'+ze+'" for attribute pointer "'+U+'" (valid parameters are '+vo+")",qe)})}),R.buffer=$,R.state=Vi,R.size=yt,R.normalized=wt,R.type=gt||$.dtype,R.offset=X,R.stride=tt,R.divisor=Ft}}Z[U]=Ln(function(qe,vo){var ze=qe.attribCache;if(W in ze)return ze[W];var Xe={isStream:!1};return Object.keys(R).forEach(function(ao){Xe[ao]=R[ao]}),R.buffer&&(Xe.buffer=qe.link(R.buffer),Xe.type=Xe.type||Xe.buffer+".dtype"),ze[W]=Xe,Xe})}),Object.keys(K).forEach(function(U){var F=K[U];function W(R,$){var L=R.invoke($,F),X=R.shared,tt=R.constants,yt=X.isBufferArgs,wt=X.buffer;S.optional(function(){R.assert($,L+"&&(typeof "+L+'==="object"||typeof '+L+'==="function")&&('+yt+"("+L+")||"+wt+".getBuffer("+L+")||"+wt+".getBuffer("+L+".buffer)||"+yt+"("+L+'.buffer)||("constant" in '+L+"&&(typeof "+L+'.constant==="number"||'+X.isArrayLike+"("+L+".constant))))",'invalid dynamic attribute "'+U+'"')});var gt={isStream:$.def(!1)},Ft=new Q;Ft.state=Vi,Object.keys(Ft).forEach(function(Xe){gt[Xe]=$.def(""+Ft[Xe])});var qe=gt.buffer,vo=gt.type;$("if(",yt,"(",L,")){",gt.isStream,"=true;",qe,"=",wt,".createStream(",Ki,",",L,");",vo,"=",qe,".dtype;","}else{",qe,"=",wt,".getBuffer(",L,");","if(",qe,"){",vo,"=",qe,".dtype;",'}else if("constant" in ',L,"){",gt.state,"=",fu,";","if(typeof "+L+'.constant === "number"){',gt[Wi[0]],"=",L,".constant;",Wi.slice(1).map(function(Xe){return gt[Xe]}).join("="),"=0;","}else{",Wi.map(function(Xe,ao){return gt[Xe]+"="+L+".constant.length>"+ao+"?"+L+".constant["+ao+"]:0;"}).join(""),"}}else{","if(",yt,"(",L,".buffer)){",qe,"=",wt,".createStream(",Ki,",",L,".buffer);","}else{",qe,"=",wt,".getBuffer(",L,".buffer);","}",vo,'="type" in ',L,"?",tt.glTypes,"[",L,".type]:",qe,".dtype;",gt.normalized,"=!!",L,".normalized;");function ze(Xe){$(gt[Xe],"=",L,".",Xe,"|0;")}return ze("size"),ze("offset"),ze("stride"),ze("divisor"),$("}}"),$.exit("if(",gt.isStream,"){",wt,".destroyStream(",qe,");","}"),gt}Z[U]=ar(F,W)}),Z}function Dn(N,E){var q=N.static,K=N.dynamic;if(gl in q){var Z=q[gl];return Z!==null&&Ut.getVAO(Z)===null&&(Z=Ut.createVAO(Z)),Ln(function(F){return F.link(Ut.getVAO(Z))})}else if(gl in K){var U=K[gl];return ar(U,function(F,W){var R=F.invoke(W,U);return W.def(F.shared.vao+".getVAO("+R+")")})}return null}function on(N){var E=N.static,q=N.dynamic,K={};return Object.keys(E).forEach(function(Z){var U=E[Z];K[Z]=Ln(function(F,W){return typeof U=="number"||typeof U=="boolean"?""+U:F.link(U)})}),Object.keys(q).forEach(function(Z){var U=q[Z];K[Z]=ar(U,function(F,W){return F.invoke(W,U)})}),K}function Rn(N,E,q,K,Z){var U=N.static,F=N.dynamic;S.optional(function(){var ze=[js,vl,ml,Ws,Vs,Kf,Xs,Qf,pl,gl].concat(Tt);function Xe(ao){Object.keys(ao).forEach(function(Io){S.command(ze.indexOf(Io)>=0,'unknown parameter "'+Io+'"',Z.commandStr)})}Xe(U),Xe(F)});var W=ro(N,E),R=Ee(N,Z),$=bo(N,R,Z),L=Po(N,Z),X=Nn(N,Z),tt=xo(N,Z,W);function yt(ze){var Xe=$[ze];Xe&&(X[ze]=Xe)}yt(Ta),yt(te(Yf));var wt=Object.keys(X).length>0,gt={framebuffer:R,draw:L,shader:tt,state:X,dirty:wt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(gt.profile=uo(N,Z),gt.uniforms=Kn(q,Z),gt.drawVAO=gt.scopeVAO=Dn(N,Z),!gt.drawVAO&&tt.program&&!W&&C.angle_instanced_arrays){var Ft=!0,qe=tt.program.attributes.map(function(ze){var Xe=E.static[ze];return Ft=Ft&&!!Xe,Xe});if(Ft&&qe.length>0){var vo=Ut.getVAO(Ut.createVAO(qe));gt.drawVAO=new U0(null,null,null,function(ze,Xe){return ze.link(vo)}),gt.useVAO=!0}}return W?gt.useVAO=!0:gt.attributes=ko(E,Z),gt.context=on(K,Z),gt}function qn(N,E,q){var K=N.shared,Z=K.context,U=N.scope();Object.keys(q).forEach(function(F){E.save(Z,"."+F);var W=q[F],R=W.append(N,E);Array.isArray(R)?U(Z,".",F,"=[",R.join(),"];"):U(Z,".",F,"=",R,";")}),E(U)}function Fn(N,E,q,K){var Z=N.shared,U=Z.gl,F=Z.framebuffer,W;ve&&(W=E.def(Z.extensions,".webgl_draw_buffers"));var R=N.constants,$=R.drawBuffer,L=R.backBuffer,X;q?X=q.append(N,E):X=E.def(F,".next"),K||E("if(",X,"!==",F,".cur){"),E("if(",X,"){",U,".bindFramebuffer(",Om,",",X,".framebuffer);"),ve&&E(W,".drawBuffersWEBGL(",$,"[",X,".colorAttachments.length]);"),E("}else{",U,".bindFramebuffer(",Om,",null);"),ve&&E(W,".drawBuffersWEBGL(",L,");"),E("}",F,".cur=",X,";"),K||E("}")}function c0(N,E,q){var K=N.shared,Z=K.gl,U=N.current,F=N.next,W=K.current,R=K.next,$=N.cond(W,".dirty");Tt.forEach(function(L){var X=te(L);if(!(X in q.state)){var tt,yt;if(X in F){tt=F[X],yt=U[X];var wt=Ge(kt[X].length,function(Ft){return $.def(tt,"[",Ft,"]")});$(N.cond(wt.map(function(Ft,qe){return Ft+"!=="+yt+"["+qe+"]"}).join("||")).then(Z,".",At[X],"(",wt,");",wt.map(function(Ft,qe){return yt+"["+qe+"]="+Ft}).join(";"),";"))}else{tt=$.def(R,".",X);var gt=N.cond(tt,"!==",W,".",X);$(gt),X in Jt?gt(N.cond(tt).then(Z,".enable(",Jt[X],");").else(Z,".disable(",Jt[X],");"),W,".",X,"=",tt,";"):gt(Z,".",At[X],"(",tt,");",W,".",X,"=",tt,";")}}}),Object.keys(q.state).length===0&&$(W,".dirty=false;"),E($)}function g0(N,E,q,K){var Z=N.shared,U=N.current,F=Z.current,W=Z.gl;Im(Object.keys(q)).forEach(function(R){var $=q[R];if(!(K&&!K($))){var L=$.append(N,E);if(Jt[R]){var X=Jt[R];es($)?L?E(W,".enable(",X,");"):E(W,".disable(",X,");"):E(N.cond(L).then(W,".enable(",X,");").else(W,".disable(",X,");")),E(F,".",R,"=",L,";")}else if(kn(L)){var tt=U[R];E(W,".",At[R],"(",L,");",L.map(function(yt,wt){return tt+"["+wt+"]="+yt}).join(";"),";")}else E(W,".",At[R],"(",L,");",F,".",R,"=",L,";")}})}function Sn(N,E){Ht&&(N.instancing=E.def(N.shared.extensions,".angle_instanced_arrays"))}function po(N,E,q,K,Z){var U=N.shared,F=N.stats,W=U.current,R=U.timer,$=q.profile;function L(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var X,tt;function yt(ze){X=E.def(),ze(X,"=",L(),";"),typeof Z=="string"?ze(F,".count+=",Z,";"):ze(F,".count++;"),Ct&&(K?(tt=E.def(),ze(tt,"=",R,".getNumPendingQueries();")):ze(R,".beginQuery(",F,");"))}function wt(ze){ze(F,".cpuTime+=",L(),"-",X,";"),Ct&&(K?ze(R,".pushScopeStats(",tt,",",R,".getNumPendingQueries(),",F,");"):ze(R,".endQuery();"))}function gt(ze){var Xe=E.def(W,".profile");E(W,".profile=",ze,";"),E.exit(W,".profile=",Xe,";")}var Ft;if($){if(es($)){$.enable?(yt(E),wt(E.exit),gt("true")):gt("false");return}Ft=$.append(N,E),gt(Ft)}else Ft=E.def(W,".profile");var qe=N.block();yt(qe),E("if(",Ft,"){",qe,"}");var vo=N.block();wt(vo),E.exit("if(",Ft,"){",vo,"}")}function x0(N,E,q,K,Z){var U=N.shared;function F(R){switch(R){case Zf:case eh:case rh:return 2;case Jf:case oh:case ah:return 3;case th:case nh:case sh:return 4;default:return 1}}function W(R,$,L){var X=U.gl,tt=E.def(R,".location"),yt=E.def(U.attributes,"[",tt,"]"),wt=L.state,gt=L.buffer,Ft=[L.x,L.y,L.z,L.w],qe=["buffer","normalized","offset","stride"];function vo(){E("if(!",yt,".buffer){",X,".enableVertexAttribArray(",tt,");}");var Xe=L.type,ao;if(L.size?ao=E.def(L.size,"||",$):ao=$,E("if(",yt,".type!==",Xe,"||",yt,".size!==",ao,"||",qe.map(function(yn){return yt+"."+yn+"!=="+L[yn]}).join("||"),"){",X,".bindBuffer(",Ki,",",gt,".buffer);",X,".vertexAttribPointer(",[tt,ao,Xe,L.normalized,L.stride,L.offset],");",yt,".type=",Xe,";",yt,".size=",ao,";",qe.map(function(yn){return yt+"."+yn+"="+L[yn]+";"}).join(""),"}"),Ht){var Io=L.divisor;E("if(",yt,".divisor!==",Io,"){",N.instancing,".vertexAttribDivisorANGLE(",[tt,Io],");",yt,".divisor=",Io,";}")}}function ze(){E("if(",yt,".buffer){",X,".disableVertexAttribArray(",tt,");",yt,".buffer=null;","}if(",Wi.map(function(Xe,ao){return yt+"."+Xe+"!=="+Ft[ao]}).join("||"),"){",X,".vertexAttrib4f(",tt,",",Ft,");",Wi.map(function(Xe,ao){return yt+"."+Xe+"="+Ft[ao]+";"}).join(""),"}")}wt===Vi?vo():wt===fu?ze():(E("if(",wt,"===",Vi,"){"),vo(),E("}else{"),ze(),E("}"))}K.forEach(function(R){var $=R.name,L=q.attributes[$],X;if(L){if(!Z(L))return;X=L.append(N,E)}else{if(!Z($m))return;var tt=N.scopeAttrib($);S.optional(function(){N.assert(E,tt+".state","missing attribute "+$)}),X={},Object.keys(new Q).forEach(function(yt){X[yt]=E.def(tt,".",yt)})}W(N.link(R),F(R.info.type),X)})}function Fo(N,E,q,K,Z){for(var U=N.shared,F=U.gl,W,R=0;R<K.length;++R){var $=K[R],L=$.name,X=$.info.type,tt=q.uniforms[L],yt=N.link($),wt=yt+".location",gt;if(tt){if(!Z(tt))continue;if(es(tt)){var Ft=tt.value;if(S.command(Ft!==null&&typeof Ft!="undefined",'missing uniform "'+L+'"',N.commandStr),X===wl||X===_l){S.command(typeof Ft=="function"&&(X===wl&&(Ft._reglType==="texture2d"||Ft._reglType==="framebuffer")||X===_l&&(Ft._reglType==="textureCube"||Ft._reglType==="framebufferCube")),"invalid texture for uniform "+L,N.commandStr);var qe=N.link(Ft._texture||Ft.color[0]._texture);E(F,".uniform1i(",wt,",",qe+".bind());"),E.exit(qe,".unbind();")}else if(X===xl||X===yl||X===bl){S.optional(function(){S.command(kn(Ft),"invalid matrix for uniform "+L,N.commandStr),S.command(X===xl&&Ft.length===4||X===yl&&Ft.length===9||X===bl&&Ft.length===16,"invalid length for matrix uniform "+L,N.commandStr)});var vo=N.global.def("new Float32Array(["+Array.prototype.slice.call(Ft)+"])"),ze=2;X===yl?ze=3:X===bl&&(ze=4),E(F,".uniformMatrix",ze,"fv(",wt,",false,",vo,");")}else{switch(X){case Eu:S.commandType(Ft,"number","uniform "+L,N.commandStr),W="1f";break;case Zf:S.command(kn(Ft)&&Ft.length===2,"uniform "+L,N.commandStr),W="2f";break;case Jf:S.command(kn(Ft)&&Ft.length===3,"uniform "+L,N.commandStr),W="3f";break;case th:S.command(kn(Ft)&&Ft.length===4,"uniform "+L,N.commandStr),W="4f";break;case Au:S.commandType(Ft,"boolean","uniform "+L,N.commandStr),W="1i";break;case zu:S.commandType(Ft,"number","uniform "+L,N.commandStr),W="1i";break;case rh:S.command(kn(Ft)&&Ft.length===2,"uniform "+L,N.commandStr),W="2i";break;case eh:S.command(kn(Ft)&&Ft.length===2,"uniform "+L,N.commandStr),W="2i";break;case ah:S.command(kn(Ft)&&Ft.length===3,"uniform "+L,N.commandStr),W="3i";break;case oh:S.command(kn(Ft)&&Ft.length===3,"uniform "+L,N.commandStr),W="3i";break;case sh:S.command(kn(Ft)&&Ft.length===4,"uniform "+L,N.commandStr),W="4i";break;case nh:S.command(kn(Ft)&&Ft.length===4,"uniform "+L,N.commandStr),W="4i";break}E(F,".uniform",W,"(",wt,",",kn(Ft)?Array.prototype.slice.call(Ft):Ft,");")}continue}else gt=tt.append(N,E)}else{if(!Z($m))continue;gt=E.def(U.uniforms,"[",T.id(L),"]")}X===wl?(S(!Array.isArray(gt),"must specify a scalar prop for textures"),E("if(",gt,"&&",gt,'._reglType==="framebuffer"){',gt,"=",gt,".color[0];","}")):X===_l&&(S(!Array.isArray(gt),"must specify a scalar prop for cube maps"),E("if(",gt,"&&",gt,'._reglType==="framebufferCube"){',gt,"=",gt,".color[0];","}")),S.optional(function(){function B0(Jr,Bm){N.assert(E,Jr,'bad data or missing for uniform "'+L+'".  '+Bm)}function Nu(Jr){S(!Array.isArray(gt),"must not specify an array type for uniform"),B0("typeof "+gt+'==="'+Jr+'"',"invalid type, expected "+Jr)}function Or(Jr,Bm){Array.isArray(gt)?S(gt.length===Jr,"must have length "+Jr):B0(U.isArrayLike+"("+gt+")&&"+gt+".length==="+Jr,"invalid vector, should have length "+Jr,N.commandStr)}function Um(Jr){S(!Array.isArray(gt),"must not specify a value type"),B0("typeof "+gt+'==="function"&&'+gt+'._reglType==="texture'+(Jr===zm?"2d":"Cube")+'"',"invalid texture type",N.commandStr)}switch(X){case zu:Nu("number");break;case eh:Or(2,"number");break;case oh:Or(3,"number");break;case nh:Or(4,"number");break;case Eu:Nu("number");break;case Zf:Or(2,"number");break;case Jf:Or(3,"number");break;case th:Or(4,"number");break;case Au:Nu("boolean");break;case rh:Or(2,"boolean");break;case ah:Or(3,"boolean");break;case sh:Or(4,"boolean");break;case xl:Or(4,"number");break;case yl:Or(9,"number");break;case bl:Or(16,"number");break;case wl:Um(zm);break;case _l:Um(H4);break}});var Xe=1;switch(X){case wl:case _l:var ao=E.def(gt,"._texture");E(F,".uniform1i(",wt,",",ao,".bind());"),E.exit(ao,".unbind();");continue;case zu:case Au:W="1i";break;case eh:case rh:W="2i",Xe=2;break;case oh:case ah:W="3i",Xe=3;break;case nh:case sh:W="4i",Xe=4;break;case Eu:W="1f";break;case Zf:W="2f",Xe=2;break;case Jf:W="3f",Xe=3;break;case th:W="4f",Xe=4;break;case xl:W="Matrix2fv";break;case yl:W="Matrix3fv";break;case bl:W="Matrix4fv";break}if(E(F,".uniform",W,"(",wt,","),W.charAt(0)==="M"){var Io=Math.pow(X-xl+2,2),yn=N.global.def("new Float32Array(",Io,")");Array.isArray(gt)?E("false,(",Ge(Io,function(B0){return yn+"["+B0+"]="+gt[B0]}),",",yn,")"):E("false,(Array.isArray(",gt,")||",gt," instanceof Float32Array)?",gt,":(",Ge(Io,function(B0){return yn+"["+B0+"]="+gt+"["+B0+"]"}),",",yn,")")}else Xe>1?E(Ge(Xe,function(B0){return Array.isArray(gt)?gt[B0]:gt+"["+B0+"]"})):(S(!Array.isArray(gt),"uniform value must not be an array"),E(gt));E(");")}}function We(N,E,q,K){var Z=N.shared,U=Z.gl,F=Z.draw,W=K.draw;function R(){var ao=W.elements,Io,yn=E;return ao?((ao.contextDep&&K.contextDynamic||ao.propDep)&&(yn=q),Io=ao.append(N,yn)):Io=yn.def(F,".",Ws),Io&&yn("if("+Io+")"+U+".bindBuffer("+q4+","+Io+".buffer.buffer);"),Io}function $(){var ao=W.count,Io,yn=E;return ao?((ao.contextDep&&K.contextDynamic||ao.propDep)&&(yn=q),Io=ao.append(N,yn),S.optional(function(){ao.MISSING&&N.assert(E,"false","missing vertex count"),ao.DYNAMIC&&N.assert(yn,Io+">=0","missing vertex count")})):(Io=yn.def(F,".",Xs),S.optional(function(){N.assert(yn,Io+">=0","missing vertex count")})),Io}var L=R();function X(ao){var Io=W[ao];return Io?Io.contextDep&&K.contextDynamic||Io.propDep?Io.append(N,q):Io.append(N,E):E.def(F,".",ao)}var tt=X(Vs),yt=X(Kf),wt=$();if(typeof wt=="number"){if(wt===0)return}else q("if(",wt,"){"),q.exit("}");var gt,Ft;Ht&&(gt=X(Qf),Ft=N.instancing);var qe=L+".type",vo=W.elements&&es(W.elements);function ze(){function ao(){q(Ft,".drawElementsInstancedANGLE(",[tt,wt,qe,yt+"<<(("+qe+"-"+sm+")>>1)",gt],");")}function Io(){q(Ft,".drawArraysInstancedANGLE(",[tt,yt,wt,gt],");")}L?vo?ao():(q("if(",L,"){"),ao(),q("}else{"),Io(),q("}")):Io()}function Xe(){function ao(){q(U+".drawElements("+[tt,wt,qe,yt+"<<(("+qe+"-"+sm+")>>1)"]+");")}function Io(){q(U+".drawArrays("+[tt,yt,wt]+");")}L?vo?ao():(q("if(",L,"){"),ao(),q("}else{"),Io(),q("}")):Io()}Ht&&(typeof gt!="number"||gt>=0)?typeof gt=="string"?(q("if(",gt,">0){"),ze(),q("}else if(",gt,"<0){"),Xe(),q("}")):ze():Xe()}function Mo(N,E,q,K,Z){var U=Je(),F=U.proc("body",Z);return S.optional(function(){U.commandStr=E.commandStr,U.command=U.link(E.commandStr)}),Ht&&(U.instancing=F.def(U.shared.extensions,".angle_instanced_arrays")),N(U,F,q,K),U.compile().body}function Ro(N,E,q,K){Sn(N,E),q.useVAO?q.drawVAO?E(N.shared.vao,".setVAO(",q.drawVAO.append(N,E),");"):E(N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"):(E(N.shared.vao,".setVAO(null);"),x0(N,E,q,K.attributes,function(){return!0})),Fo(N,E,q,K.uniforms,function(){return!0}),We(N,E,E,q)}function En(N,E){var q=N.proc("draw",1);Sn(N,q),qn(N,q,E.context),Fn(N,q,E.framebuffer),c0(N,q,E),g0(N,q,E.state),po(N,q,E,!1,!0);var K=E.shader.progVar.append(N,q);if(q(N.shared.gl,".useProgram(",K,".program);"),E.shader.program)Ro(N,q,E,E.shader.program);else{q(N.shared.vao,".setVAO(null);");var Z=N.global.def("{}"),U=q.def(K,".id"),F=q.def(Z,"[",U,"]");q(N.cond(F).then(F,".call(this,a0);").else(F,"=",Z,"[",U,"]=",N.link(function(W){return Mo(Ro,N,E,W,1)}),"(",K,");",F,".call(this,a0);"))}Object.keys(E.state).length>0&&q(N.shared.current,".dirty=true;")}function ma(N,E,q,K){N.batchId="a1",Sn(N,E);function Z(){return!0}x0(N,E,q,K.attributes,Z),Fo(N,E,q,K.uniforms,Z),We(N,E,E,q)}function Ks(N,E,q,K){Sn(N,E);var Z=q.contextDep,U=E.def(),F="a0",W="a1",R=E.def();N.shared.props=R,N.batchId=U;var $=N.scope(),L=N.scope();E($.entry,"for(",U,"=0;",U,"<",W,";++",U,"){",R,"=",F,"[",U,"];",L,"}",$.exit);function X(qe){return qe.contextDep&&Z||qe.propDep}function tt(qe){return!X(qe)}if(q.needsContext&&qn(N,L,q.context),q.needsFramebuffer&&Fn(N,L,q.framebuffer),g0(N,L,q.state,X),q.profile&&X(q.profile)&&po(N,L,q,!1,!0),K)q.useVAO?q.drawVAO?X(q.drawVAO)?L(N.shared.vao,".setVAO(",q.drawVAO.append(N,L),");"):$(N.shared.vao,".setVAO(",q.drawVAO.append(N,$),");"):$(N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"):($(N.shared.vao,".setVAO(null);"),x0(N,$,q,K.attributes,tt),x0(N,L,q,K.attributes,X)),Fo(N,$,q,K.uniforms,tt),Fo(N,L,q,K.uniforms,X),We(N,$,L,q);else{var yt=N.global.def("{}"),wt=q.shader.progVar.append(N,L),gt=L.def(wt,".id"),Ft=L.def(yt,"[",gt,"]");L(N.shared.gl,".useProgram(",wt,".program);","if(!",Ft,"){",Ft,"=",yt,"[",gt,"]=",N.link(function(qe){return Mo(ma,N,q,qe,2)}),"(",wt,");}",Ft,".call(this,a0[",U,"],",U,");")}}function O(N,E){var q=N.proc("batch",2);N.batchId="0",Sn(N,q);var K=!1,Z=!0;Object.keys(E.context).forEach(function(yt){K=K||E.context[yt].propDep}),K||(qn(N,q,E.context),Z=!1);var U=E.framebuffer,F=!1;U?(U.propDep?K=F=!0:U.contextDep&&K&&(F=!0),F||Fn(N,q,U)):Fn(N,q,null),E.state.viewport&&E.state.viewport.propDep&&(K=!0);function W(yt){return yt.contextDep&&K||yt.propDep}c0(N,q,E),g0(N,q,E.state,function(yt){return!W(yt)}),(!E.profile||!W(E.profile))&&po(N,q,E,!1,"a1"),E.contextDep=K,E.needsContext=Z,E.needsFramebuffer=F;var R=E.shader.progVar;if(R.contextDep&&K||R.propDep)Ks(N,q,E,null);else{var $=R.append(N,q);if(q(N.shared.gl,".useProgram(",$,".program);"),E.shader.program)Ks(N,q,E,E.shader.program);else{q(N.shared.vao,".setVAO(null);");var L=N.global.def("{}"),X=q.def($,".id"),tt=q.def(L,"[",X,"]");q(N.cond(tt).then(tt,".call(this,a0,a1);").else(tt,"=",L,"[",X,"]=",N.link(function(yt){return Mo(Ks,N,E,yt,2)}),"(",$,");",tt,".call(this,a0,a1);"))}}Object.keys(E.state).length>0&&q(N.shared.current,".dirty=true;")}function lt(N,E){var q=N.proc("scope",3);N.batchId="a2";var K=N.shared,Z=K.current;qn(N,q,E.context),E.framebuffer&&E.framebuffer.append(N,q),Im(Object.keys(E.state)).forEach(function(F){var W=E.state[F],R=W.append(N,q);kn(R)?R.forEach(function($,L){q.set(N.next[F],"["+L+"]",$)}):q.set(K.next,"."+F,R)}),po(N,q,E,!0,!0),[Ws,Kf,Xs,Qf,Vs].forEach(function(F){var W=E.draw[F];W&&q.set(K.draw,"."+F,""+W.append(N,q))}),Object.keys(E.uniforms).forEach(function(F){var W=E.uniforms[F].append(N,q);Array.isArray(W)&&(W="["+W.join()+"]"),q.set(K.uniforms,"["+T.id(F)+"]",W)}),Object.keys(E.attributes).forEach(function(F){var W=E.attributes[F].append(N,q),R=N.scopeAttrib(F);Object.keys(new Q).forEach(function($){q.set(R,"."+$,W[$])})}),E.scopeVAO&&q.set(K.vao,".targetVAO",E.scopeVAO.append(N,q));function U(F){var W=E.shader[F];W&&q.set(K.shader,"."+F,W.append(N,q))}U(vl),U(ml),Object.keys(E.state).length>0&&(q(Z,".dirty=true;"),q.exit(Z,".dirty=true;")),q("a1(",N.shared.context,",a0,",N.batchId,");")}function ot(N){if(!(typeof N!="object"||kn(N))){for(var E=Object.keys(N),q=0;q<E.length;++q)if(Bt.isDynamic(N[E[q]]))return!0;return!1}}function Me(N,E,q){var K=E.static[q];if(!K||!ot(K))return;var Z=N.global,U=Object.keys(K),F=!1,W=!1,R=!1,$=N.global.def("{}");U.forEach(function(X){var tt=K[X];if(Bt.isDynamic(tt)){typeof tt=="function"&&(tt=K[X]=Bt.unbox(tt));var yt=ar(tt,null);F=F||yt.thisDep,R=R||yt.propDep,W=W||yt.contextDep}else{switch(Z($,".",X,"="),typeof tt){case"number":Z(tt);break;case"string":Z('"',tt,'"');break;case"object":Array.isArray(tt)&&Z("[",tt.join(),"]");break;default:Z(N.link(tt));break}Z(";")}});function L(X,tt){U.forEach(function(yt){var wt=K[yt];if(Bt.isDynamic(wt)){var gt=X.invoke(tt,wt);tt($,".",yt,"=",gt,";")}})}E.dynamic[q]=new Bt.DynamicVariable(Xf,{thisDep:F,contextDep:W,propDep:R,ref:$,append:L}),delete E.static[q]}function wo(N,E,q,K,Z){var U=Je();U.stats=U.link(Z),Object.keys(E.static).forEach(function(W){Me(U,E,W)}),D4.forEach(function(W){Me(U,N,W)});var F=Rn(N,E,q,K,U);return En(U,F),lt(U,F),O(U,F),e(U.compile(),{destroy:function(){F.shader.program.destroy()}})}return{next:be,current:kt,procs:function(){var N=Je(),E=N.proc("poll"),q=N.proc("refresh"),K=N.block();E(K),q(K);var Z=N.shared,U=Z.gl,F=Z.next,W=Z.current;K(W,".dirty=false;"),Fn(N,E),Fn(N,q,null,!0);var R;Ht&&(R=N.link(Ht)),C.oes_vertex_array_object&&q(N.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var $=0;$<it.maxAttributes;++$){var L=q.def(Z.attributes,"[",$,"]"),X=N.cond(L,".buffer");X.then(U,".enableVertexAttribArray(",$,");",U,".bindBuffer(",Ki,",",L,".buffer.buffer);",U,".vertexAttribPointer(",$,",",L,".size,",L,".type,",L,".normalized,",L,".stride,",L,".offset);").else(U,".disableVertexAttribArray(",$,");",U,".vertexAttrib4f(",$,",",L,".x,",L,".y,",L,".z,",L,".w);",L,".buffer=null;"),q(X),Ht&&q(R,".vertexAttribDivisorANGLE(",$,",",L,".divisor);")}return q(N.shared.vao,".currentVAO=null;",N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"),Object.keys(Jt).forEach(function(tt){var yt=Jt[tt],wt=K.def(F,".",tt),gt=N.block();gt("if(",wt,"){",U,".enable(",yt,")}else{",U,".disable(",yt,")}",W,".",tt,"=",wt,";"),q(gt),E("if(",wt,"!==",W,".",tt,"){",gt,"}")}),Object.keys(At).forEach(function(tt){var yt=At[tt],wt=kt[tt],gt,Ft,qe=N.block();if(qe(U,".",yt,"("),kn(wt)){var vo=wt.length;gt=N.global.def(F,".",tt),Ft=N.global.def(W,".",tt),qe(Ge(vo,function(ze){return gt+"["+ze+"]"}),");",Ge(vo,function(ze){return Ft+"["+ze+"]="+gt+"["+ze+"];"}).join("")),E("if(",Ge(vo,function(ze){return gt+"["+ze+"]!=="+Ft+"["+ze+"]"}).join("||"),"){",qe,"}")}else gt=K.def(F,".",tt),Ft=K.def(W,".",tt),qe(gt,");",W,".",tt,"=",gt,";"),E("if(",gt,"!==",Ft,"){",qe,"}");q(qe)}),N.compile()}(),compile:wo}}function r6(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var a6=34918,s6=34919,Dm=35007,i6=function(w,T){if(!T.ext_disjoint_timer_query)return null;var C=[];function it(){return C.pop()||T.ext_disjoint_timer_query.createQueryEXT()}function bt(Ht){C.push(Ht)}var rt=[];function pt(Ht){var ve=it();T.ext_disjoint_timer_query.beginQueryEXT(Dm,ve),rt.push(ve),Ct(rt.length-1,rt.length,Ht)}function Ot(){T.ext_disjoint_timer_query.endQueryEXT(Dm)}function $t(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Ut=[];function Dt(){return Ut.pop()||new $t}function Kt(Ht){Ut.push(Ht)}var ne=[];function Ct(Ht,ve,kt){var be=Dt();be.startQueryIndex=Ht,be.endQueryIndex=ve,be.sum=0,be.stats=kt,ne.push(be)}var Zt=[],Q=[];function vt(){var Ht,ve,kt=rt.length;if(kt!==0){Q.length=Math.max(Q.length,kt+1),Zt.length=Math.max(Zt.length,kt+1),Zt[0]=0,Q[0]=0;var be=0;for(Ht=0,ve=0;ve<rt.length;++ve){var Tt=rt[ve];T.ext_disjoint_timer_query.getQueryObjectEXT(Tt,s6)?(be+=T.ext_disjoint_timer_query.getQueryObjectEXT(Tt,a6),bt(Tt)):rt[Ht++]=Tt,Zt[ve+1]=be,Q[ve+1]=Ht}for(rt.length=Ht,Ht=0,ve=0;ve<ne.length;++ve){var Jt=ne[ve],At=Jt.startQueryIndex,te=Jt.endQueryIndex;Jt.sum+=Zt[te]-Zt[At];var Ue=Q[At],no=Q[te];no===Ue?(Jt.stats.gpuTime+=Jt.sum/1e6,Kt(Jt)):(Jt.startQueryIndex=Ue,Jt.endQueryIndex=no,ne[Ht++]=Jt)}ne.length=Ht}}return{beginQuery:pt,endQuery:Ot,pushScopeStats:Ct,update:vt,getNumPendingQueries:function(){return rt.length},clear:function(){C.push.apply(C,rt);for(var Ht=0;Ht<C.length;Ht++)T.ext_disjoint_timer_query.deleteQueryEXT(C[Ht]);rt.length=0,C.length=0},restore:function(){rt.length=0,C.length=0}}},c6=16384,l6=256,f6=1024,h6=34962,qm="webglcontextlost",Fm="webglcontextrestored",Gm=1,u6=2,d6=3;function Hm(w,T){for(var C=0;C<w.length;++C)if(w[C]===T)return C;return-1}function p6(w){var T=ce(w);if(!T)return null;var C=T.gl,it=C.getContextAttributes(),bt=C.isContextLost(),rt=xe(C,T);if(!rt)return null;var pt=J(),Ot=r6(),$t=rt.extensions,Ut=i6(C,$t),Dt=Y(),Kt=C.drawingBufferWidth,ne=C.drawingBufferHeight,Ct={tick:0,time:0,viewportWidth:Kt,viewportHeight:ne,framebufferWidth:Kt,framebufferHeight:ne,drawingBufferWidth:Kt,drawingBufferHeight:ne,pixelRatio:T.pixelRatio},Zt={},Q={elements:null,primitive:4,count:-1,offset:0,instances:-1},vt=Jb(C,$t),Ht=vw(C,Ot,T,kt),ve=z4(C,$t,vt,Ot,Ht);function kt(We){return ve.destroyBuffer(We)}var be=zw(C,$t,Ht,Ot),Tt=N4(C,pt,Ot,T),Jt=r4(C,$t,vt,function(){Ue.procs.poll()},Ct,Ot,T),At=a4(C,$t,vt,Ot,T),te=S4(C,$t,vt,Jt,At,Ot),Ue=n6(C,pt,$t,vt,Ht,be,Jt,te,Zt,ve,Tt,Q,Ct,Ut,T),no=C4(C,te,Ue.procs.poll,Ct,it,$t,vt),re=Ue.next,jt=C.canvas,Mt=[],Je=[],uo=[],Ee=[T.onDestroy],bo=null;function ro(){if(Mt.length===0){Ut&&Ut.update(),bo=null;return}bo=B.next(ro),g0();for(var We=Mt.length-1;We>=0;--We){var Mo=Mt[We];Mo&&Mo(Ct,null,0)}C.flush(),Ut&&Ut.update()}function xo(){!bo&&Mt.length>0&&(bo=B.next(ro))}function Po(){bo&&(B.cancel(ro),bo=null)}function Nn(We){We.preventDefault(),bt=!0,Po(),Je.forEach(function(Mo){Mo()})}function Kn(We){C.getError(),bt=!1,rt.restore(),Tt.restore(),Ht.restore(),Jt.restore(),At.restore(),te.restore(),ve.restore(),Ut&&Ut.restore(),Ue.procs.refresh(),xo(),uo.forEach(function(Mo){Mo()})}jt&&(jt.addEventListener(qm,Nn,!1),jt.addEventListener(Fm,Kn,!1));function ko(){Mt.length=0,Po(),jt&&(jt.removeEventListener(qm,Nn),jt.removeEventListener(Fm,Kn)),Tt.clear(),te.clear(),At.clear(),Jt.clear(),be.clear(),Ht.clear(),ve.clear(),Ut&&Ut.clear(),Ee.forEach(function(We){We()})}function Dn(We){S(!!We,"invalid args to regl({...})"),S.type(We,"object","invalid args to regl({...})");function Mo(Z){var U=e({},Z);delete U.uniforms,delete U.attributes,delete U.context,delete U.vao,"stencil"in U&&U.stencil.op&&(U.stencil.opBack=U.stencil.opFront=U.stencil.op,delete U.stencil.op);function F(W){if(W in U){var R=U[W];delete U[W],Object.keys(R).forEach(function($){U[W+"."+$]=R[$]})}}return F("blend"),F("depth"),F("cull"),F("stencil"),F("polygonOffset"),F("scissor"),F("sample"),"vao"in Z&&(U.vao=Z.vao),U}function Ro(Z,U){var F={},W={};return Object.keys(Z).forEach(function(R){var $=Z[R];if(Bt.isDynamic($)){W[R]=Bt.unbox($,R);return}else if(U&&Array.isArray($)){for(var L=0;L<$.length;++L)if(Bt.isDynamic($[L])){W[R]=Bt.unbox($,R);return}}F[R]=$}),{dynamic:W,static:F}}var En=Ro(We.context||{},!0),ma=Ro(We.uniforms||{},!0),Ks=Ro(We.attributes||{},!1),O=Ro(Mo(We),!1),lt={gpuTime:0,cpuTime:0,count:0},ot=Ue.compile(O,Ks,ma,En,lt),Me=ot.draw,wo=ot.batch,N=ot.scope,E=[];function q(Z){for(;E.length<Z;)E.push(null);return E}function K(Z,U){var F;if(bt&&S.raise("context lost"),typeof Z=="function")return N.call(this,null,Z,0);if(typeof U=="function")if(typeof Z=="number")for(F=0;F<Z;++F)N.call(this,null,U,F);else if(Array.isArray(Z))for(F=0;F<Z.length;++F)N.call(this,Z[F],U,F);else return N.call(this,Z,U,0);else if(typeof Z=="number"){if(Z>0)return wo.call(this,q(Z|0),Z|0)}else if(Array.isArray(Z)){if(Z.length)return wo.call(this,Z,Z.length)}else return Me.call(this,Z)}return e(K,{stats:lt,destroy:function(){ot.destroy()}})}var on=te.setFBO=Dn({framebuffer:Bt.define.call(null,Gm,"framebuffer")});function Rn(We,Mo){var Ro=0;Ue.procs.poll();var En=Mo.color;En&&(C.clearColor(+En[0]||0,+En[1]||0,+En[2]||0,+En[3]||0),Ro|=c6),"depth"in Mo&&(C.clearDepth(+Mo.depth),Ro|=l6),"stencil"in Mo&&(C.clearStencil(Mo.stencil|0),Ro|=f6),S(!!Ro,"called regl.clear with no buffer specified"),C.clear(Ro)}function qn(We){if(S(typeof We=="object"&&We,"regl.clear() takes an object as input"),"framebuffer"in We)if(We.framebuffer&&We.framebuffer_reglType==="framebufferCube")for(var Mo=0;Mo<6;++Mo)on(e({framebuffer:We.framebuffer.faces[Mo]},We),Rn);else on(We,Rn);else Rn(null,We)}function Fn(We){S.type(We,"function","regl.frame() callback must be a function"),Mt.push(We);function Mo(){var Ro=Hm(Mt,We);S(Ro>=0,"cannot cancel a frame twice");function En(){var ma=Hm(Mt,En);Mt[ma]=Mt[Mt.length-1],Mt.length-=1,Mt.length<=0&&Po()}Mt[Ro]=En}return xo(),{cancel:Mo}}function c0(){var We=re.viewport,Mo=re.scissor_box;We[0]=We[1]=Mo[0]=Mo[1]=0,Ct.viewportWidth=Ct.framebufferWidth=Ct.drawingBufferWidth=We[2]=Mo[2]=C.drawingBufferWidth,Ct.viewportHeight=Ct.framebufferHeight=Ct.drawingBufferHeight=We[3]=Mo[3]=C.drawingBufferHeight}function g0(){Ct.tick+=1,Ct.time=po(),c0(),Ue.procs.poll()}function Sn(){Jt.refresh(),c0(),Ue.procs.refresh(),Ut&&Ut.update()}function po(){return(Y()-Dt)/1e3}Sn();function x0(We,Mo){S.type(Mo,"function","listener callback must be a function");var Ro;switch(We){case"frame":return Fn(Mo);case"lost":Ro=Je;break;case"restore":Ro=uo;break;case"destroy":Ro=Ee;break;default:S.raise("invalid event, must be one of frame,lost,restore,destroy")}return Ro.push(Mo),{cancel:function(){for(var En=0;En<Ro.length;++En)if(Ro[En]===Mo){Ro[En]=Ro[Ro.length-1],Ro.pop();return}}}}var Fo=e(Dn,{clear:qn,prop:Bt.define.bind(null,Gm),context:Bt.define.bind(null,u6),this:Bt.define.bind(null,d6),draw:Dn({}),buffer:function(We){return Ht.create(We,h6,!1,!1)},elements:function(We){return be.create(We,!1)},texture:Jt.create2D,cube:Jt.createCube,renderbuffer:At.create,framebuffer:te.create,framebufferCube:te.createCube,vao:ve.createVAO,attributes:it,frame:Fn,on:x0,limits:vt,hasExtension:function(We){return vt.extensions.indexOf(We.toLowerCase())>=0},read:no,destroy:ko,_gl:C,_refresh:Sn,poll:function(){g0(),Ut&&Ut.update()},now:po,stats:Ot});return T.onDone(null,Fo),Fo}return p6})});var Qs=St((gz,u2)=>{"use strict";var Na=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ra=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ga=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],ph=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Ll=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Gu=t=>Math.hypot(t[0],t[1],t[2]),Pr=t=>{let e=Gu(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function rc(t,e){let o=t.length-1,r=Math.min(Math.max(e,0),1)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=[0,0,0];for(let v=0;v<3;v++)l[v]=.5*(2*i[v]+(-s[v]+c[v])*a+(2*s[v]-5*i[v]+4*c[v]-f[v])*a*a+(-s[v]+3*i[v]-3*c[v]+f[v])*a*a*a);return l}function T6(t,e){return rc(t.map(o=>[o,0,0]),e)[0]}function L6(t,e,o,r){let n={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];n.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},n.restore=()=>{s=i.pop()};let c=(d,p)=>{let u=new Array(9);for(let h=0;h<3;h++)for(let g=0;g<3;g++)u[h*3+g]=d[h*3]*p[g]+d[h*3+1]*p[3+g]+d[h*3+2]*p[6+g];return u},f=d=>[s.r[0]*d[0]+s.r[1]*d[1]+s.r[2]*d[2],s.r[3]*d[0]+s.r[4]*d[1]+s.r[5]*d[2],s.r[6]*d[0]+s.r[7]*d[1]+s.r[8]*d[2]];n.translate=(d,p,u)=>{let h=f([d,p,u]);s.t=[s.t[0]+h[0]*s.s,s.t[1]+h[1]*s.s,s.t[2]+h[2]*s.s]},n.scale=d=>{s.s*=d},n.rotateY=d=>{let p=Math.cos(d),u=Math.sin(d);s.r=c(s.r,[p,0,u,0,1,0,-u,0,p])},n.vert=(d,p,u)=>{let h=u||n.curMat,g=f(d),m=Pr(f(p));return t.push(g[0]*s.s+s.t[0],g[1]*s.s+s.t[1],g[2]*s.s+s.t[2]),e.push(m[0],m[1],m[2]),r.push(h[0],h[1],h[2]),t.length/3-1};let l=d=>[t[d*3],t[d*3+1],t[d*3+2]],v=d=>[e[d*3],e[d*3+1],e[d*3+2]];return n.tri=(d,p,u)=>{let h=l(d),g=Ll(Na(l(p),h),Na(l(u),h)),m=Ra(Ra(v(d),v(p)),v(u));ph(g,m)<0?o.push(d,u,p):o.push(d,p,u)},n.box=(d,p,u,h,g,m,x)=>{let y=[[[d,p,u],[h,p,u],[d,g,u],[h,g,u],[0,0,-1]],[[h,p,m],[d,p,m],[h,g,m],[d,g,m],[0,0,1]],[[d,p,m],[d,p,u],[d,g,m],[d,g,u],[-1,0,0]],[[h,p,u],[h,p,m],[h,g,u],[h,g,m],[1,0,0]],[[d,g,u],[h,g,u],[d,g,m],[h,g,m],[0,1,0]],[[d,p,m],[h,p,m],[d,p,u],[h,p,u],[0,-1,0]]];for(let b of y){let M=n.vert(b[0],b[4],x),_=n.vert(b[1],b[4],x),k=n.vert(b[2],b[4],x),A=n.vert(b[3],b[4],x);n.tri(M,_,k),n.tri(_,A,k)}},n.surface=(d,p,u,h)=>{h=h||{};let g=.001,m=M=>Math.min(1,Math.max(0,M)),x=[],y=[];for(let M=0;M<=p;M++){let _=[],k=[];for(let A=0;A<=u;A++){let z=M/p,D=A/u,P=d(z,D),G=Math.min(1-g,Math.max(g,z)),I=h.wrapV?D:Math.min(1-g,Math.max(g,D)),H=Na(d(m(G+g),I),d(m(G-g),I)),ft=h.wrapV?I+g:m(I+g),Nt=h.wrapV?I-g:m(I-g),_t=Na(d(G,ft),d(G,Nt)),xt=Ll(H,_t);Gu(xt)<1e-14&&(xt=h.inside?Na(P,h.inside(z,D)):[0,1,0]),xt=Pr(xt),h.inside&&ph(xt,Na(P,h.inside(z,D)))<0&&(xt=ga(xt,-1));let ut=h.mat?h.mat(z,D,P):null;_.push(n.vert(P,xt,ut)),h.double&&k.push(n.vert(P,ga(xt,-1),ut))}x.push(_),y.push(k)}let b=M=>{for(let _=0;_<p;_++)for(let k=0;k<u;k++){let A=M[_][k],z=M[_+1][k],D=M[_][k+1],P=M[_+1][k+1];n.tri(A,z,D),n.tri(z,P,D)}};b(x),h.double&&b(y)},n.ellipsoid=(d,p,u,h,g)=>{g=g||{};let m=g.warp||null;n.surface((x,y)=>{let b=x*Math.PI,M=y*Math.PI*2,_=m?m(x,y):1;return[d[0]+p[0]*_*Math.sin(b)*Math.cos(M),d[1]+p[1]*_*Math.cos(b),d[2]+p[2]*_*Math.sin(b)*Math.sin(M)]},u||10,h||14,{wrapV:!0,inside:()=>d,mat:g.mat})},n.tube=(d,p,u,h,g)=>{g=g||{};let m=40,x=[],y=null;for(let _=0;_<=m;_++){let k=_/m,A=rc(d,Math.max(0,k-.01)),z=rc(d,Math.min(1,k+.01)),D=Pr(Na(z,A)),P;if(y)P=Pr(Na(y,ga(D,ph(y,D))));else{let G=Math.abs(D[1])<.9?[0,1,0]:[1,0,0];P=Pr(Ll(D,G))}x.push({N:P,B:Pr(Ll(D,P))}),y=P}let b=_=>{let k=Math.min(Math.max(_,0),1)*m,A=Math.min(m-1,Math.floor(k)),z=k-A,D=x[A],P=x[A+1];return{N:Pr(Ra(ga(D.N,1-z),ga(P.N,z))),B:Pr(Ra(ga(D.B,1-z),ga(P.B,z)))}},M=g.squash||[1,1];n.surface((_,k)=>{let A=rc(d,_),z=b(_),D=p(_),P=k*Math.PI*2;return Ra(A,Ra(ga(z.N,Math.cos(P)*D*M[0]),ga(z.B,Math.sin(P)*D*M[1])))},u||12,h||8,{wrapV:!0,inside:_=>rc(d,_),mat:g.mat})},n.lathe=(d,p,u,h,g)=>{g=g||{};let m=[];for(let x=0;x<d.length-1;x++){let y=d[x+1][0]-d[x][0],b=d[x+1][1]-d[x][1];m.push(Pr([b,-y,0]))}for(let x=0;x<d.length-1;x++){let y=d[x],b=d[x+1],M=x===0||y[2]===1,_=x===d.length-2||b[2]===1,k=M?m[x]:Pr(Ra(m[x-1],m[x])),A=_?m[x]:Pr(Ra(m[x],m[x+1])),z=[],D=[];for(let P=0;P<=h;P++){let G=P/h*Math.PI*2,I=Math.cos(G),H=Math.sin(G),ft=g.mat?g.mat(G,y[1]):null,Nt=g.mat?g.mat(G,b[1]):null;z.push(n.vert([p+y[0]*I,y[1],u+y[0]*H],[k[0]*I,k[1],k[0]*H],ft)),D.push(n.vert([p+b[0]*I,b[1],u+b[0]*H],[A[0]*I,A[1],A[0]*H],Nt))}for(let P=0;P<h;P++)n.tri(z[P],z[P+1],D[P]),n.tri(z[P+1],D[P+1],D[P])}},n}u2.exports={createBuilder:L6,catmull:rc,curve1:T6,sub:Na,add:Ra,mul:ga,dot:ph,cross:Ll,norm:Pr,len:Gu}});var m2=St((xz,v2)=>{"use strict";var{norm:vh,add:mh,mul:ns,sub:N6,cross:d2}=Qs(),p2=Math.PI*2,R6=(t,e,o)=>{let r=Math.min(1,Math.max(0,(o-t)/(e-t)));return r*r*(3-2*r)};function O6(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function C6(t,e,o,r,n,a){let s=(d,p)=>[7,d*a,p];t.curMat=[0,0,0],t.box(e-a*1.36,r,o-a*1.36,e+a*1.36,r+.22,o+a*1.36),t.lathe([[a*1.24,r+.22,1],[a*1.3,r+.27],[a*1.31,r+.32],[a*1.26,r+.37,1],[a*1.1,r+.4],[a*1.14,r+.44,1],[a*1.18,r+.47],[a*1.1,r+.52,1],[a*.96,r+.55]],e,o,56,{mat:s});let i=r+.55,c=n-i,f=20,l=6,v=a*.075;return t.surface((d,p)=>{let u=i+d*c,h=a*(.96-.12*d),g=p*p2,m=p*f%1,x=h-v*4*m*(1-m);return[e+x*Math.cos(g),u,o+x*Math.sin(g)]},10,f*l,{wrapV:!0,inside:d=>[e,i+d*c,o],mat:(d,p)=>[7,p*p2*a,i+d*c]}),t.lathe([[a*.8,n-.02,1],[a*.9,n+.02],[a*.9,n+.07,1],[a*.82,n+.09,1],[a*.86,n+.13],[a*1.06,n+.2],[a*1.22,n+.28],[a*1.28,n+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,n+.33,o-a*1.42,e+a*1.42,n+.53,o+a*1.42),n+.53}function P6(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function I6(t,e,o,r,n){t.save(),t.translate(e,0,o),P6(t,r,n),t.restore()}function $6(t,e,o,r,n,a){let s=O6(r),i=a?vh([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(n||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let v=l>=c-2,d=l*2.399963+s()*.5,p=[Math.cos(d),0,Math.sin(d)],u=[-Math.sin(d),0,Math.cos(d)],h=l*.618%1,g=v?.06+s()*.06:.12+.62*h,m=1;if(i){let xt=p[0]*i[0]+p[2]*i[2];m=.25+.75*R6(-.7,.5,xt),g*=m}let x=v?1.1+s()*.25:.85+.55*(1-h*.55)+s()*.15,y=v?1+s()*.2:.95+s()*.28,b=v?.055:.215+s()*.05,M=.04+s()*.05,_=[p[0]*M,f,p[2]*M],k=[_[0]+p[0]*Math.sin(g)*x*.92,_[1]+Math.cos(g)*x,_[2]+p[2]*Math.sin(g)*x*.92],A=[_[0]+p[0]*Math.sin(g*.5)*x*.45,_[1]+x*.5,_[2]+p[2]*Math.sin(g*.5)*x*.45];t.curMat=[4,0,0],t.tube([_,A,k],xt=>.02-.008*xt,8,7);let z=24,D=g*.9+.05,P=g+(v?.12:(.95+.45*h)*(.35+.65*m)),G=[k],I=[],H=k;for(let xt=0;xt<z;xt++){let ut=xt/z,Yt=D+(P-D)*ut*ut,Se=[p[0]*Math.sin(Yt),Math.cos(Yt),p[2]*Math.sin(Yt)];I.push(Se),H=mh(H,ns(Se,y/z)),G.push(H)}I.push(I[I.length-1]);let ft=xt=>{let ut=xt*z,Yt=Math.min(z-1,Math.floor(ut)),Se=ut-Yt;return mh(ns(G[Yt],1-Se),ns(G[Yt+1],Se))},Nt=xt=>{let ut=xt*z,Yt=Math.min(z,Math.floor(ut)),Se=Math.min(z,Yt+1),Oe=ut-Yt;return vh(mh(ns(I[Yt],1-Oe),ns(I[Se],Oe)))},_t=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((xt,ut)=>{let Yt=ut*2-1,Se=ft(xt),Oe=Nt(xt),oo=_t*xt,me=mh(ns(u,Math.cos(oo)),ns(d2(Oe,u),Math.sin(oo)));me=vh(N6(me,ns(Oe,me[0]*Oe[0]+me[1]*Oe[1]+me[2]*Oe[2])));let Ke=vh(d2(me,Oe)),Ye=b*Math.pow(Math.sin(Math.PI*Math.pow(xt,.72)),.85),nt=.3*Ye*Math.abs(Yt)+.012*Math.sin(xt*40+Yt*2)*Math.abs(Yt)*(v?0:1),V=-.1*Ye*Yt*Yt*Yt*Yt,mt=nt+V;return[Se[0]+me[0]*Yt*Ye+Ke[0]*mt,Se[1]+me[1]*Yt*Ye+Ke[1]*mt,Se[2]+me[2]*Yt*Ye+Ke[2]*mt]},14,8,{double:!0,mat:(xt,ut)=>[2,ut*2-1,xt]})}t.restore()}v2.exports={addFlutedColumn:C6,addStatue:I6,addPlant:$6}});var rs=St((yz,b2)=>{"use strict";var Pt={xc:7,r:2.5,spring:4.7};Pt.x0=Pt.xc-Pt.r;Pt.x1=Pt.xc+Pt.r;Pt.top=Pt.spring+Pt.r;var V0=.06,ln=.1,g2=.08,gh=Pt.r,xh=[Pt.x0+gh/3,Pt.x0+2*gh/3,Pt.xc+gh/3,Pt.xc+2*gh/3],ac=.28,Hu=[.95,1.65,2.35,3.05,3.75],x2=[1.05,1.8],Nl=[8,0,0],gr=[0,0,0];function Ir(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function sc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function yh(t,e,o,r,n,a,s=48,i=0,c=Math.PI){let f=(l,v,d)=>[Pt.xc+v*Math.cos(l),Pt.spring+v*Math.sin(l),d];for(let l=0;l<s;l++){let v=i+(c-i)*l/s,d=i+(c-i)*(l+1)/s,p=(v+d)/2;sc(t,f(v,e,n),f(d,e,n),f(d,o,n),f(v,o,n),[0,0,1],a),sc(t,f(v,o,r),f(d,o,r),f(d,e,r),f(v,e,r),[0,0,-1],a),sc(t,f(v,e,r),f(d,e,r),f(d,e,n),f(v,e,n),[-Math.cos(p),-Math.sin(p),0],a),sc(t,f(d,o,r),f(v,o,r),f(v,o,n),f(d,o,n),[Math.cos(p),Math.sin(p),0],a)}}function D6(t){let r=a=>[Pt.xc+Pt.r*Math.cos(a),Pt.spring+Pt.r*Math.sin(a)],n=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?Pt.r/Math.abs(s):1/0,f=i>1e-6?(8-Pt.spring)/i:1/0,l=Math.min(c,f);return[Math.min(Pt.x1,Math.max(Pt.x0,Pt.xc+s*l)),Math.min(8,Pt.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=r(s),f=r(i),l=n(s),v=n(i);for(let[p,u]of[[.35,1],[-.35,-1]])sc(t,[c[0],c[1],p],[f[0],f[1],p],[v[0],v[1],p],[l[0],l[1],p],[0,0,u],gr);let d=(s+i)/2;sc(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(d),-Math.sin(d),0],gr)}}function q6(t){Ir(t,-.35,0,-.35,Pt.x0,8,.35,gr),Ir(t,Pt.x1,0,-.35,14+.35,8,.35,gr),D6(t),y2(t)}function y2(t){Ir(t,Pt.x0-.32,.3,.35,Pt.x0,Pt.spring,.35+.07,gr),Ir(t,Pt.x1,.3,.35,Pt.x1+.32,Pt.spring,.35+.07,gr),Ir(t,Pt.x0-.32-.05,0,.35,Pt.x0,.3,.35+.07+.04,gr),Ir(t,Pt.x1,0,.35,Pt.x1+.32+.05,.3,.35+.07+.04,gr),Ir(t,Pt.x0-.32-.06,Pt.spring-.12,.35,Pt.x0,Pt.spring,.35+.07+.05,gr),Ir(t,Pt.x1,Pt.spring-.12,.35,Pt.x1+.32+.06,Pt.spring,.35+.07+.05,gr),yh(t,Pt.r,Pt.r+.32,.35,.35+.07,gr),yh(t,Pt.r+.32,Pt.r+.32+.06,.35,.35+.07+.03,gr),Ir(t,Pt.xc-.22,Pt.top-.08,.35,Pt.xc+.22,Pt.top+.32+.12,.35+.07+.06,gr)}function F6(t,e){e=e||"all";let o=e==="all",r=o||e==="fixed",n=-g2/2,a=g2/2,s=(d,p,u,h,g=0)=>Ir(t,d-g,p,n,u+g,h,a,Nl),i=d=>Pt.spring+Math.sqrt(Math.max(0,Pt.r*Pt.r-(d-Pt.xc)*(d-Pt.xc))),c=e==="right"?Pt.xc:Pt.x0,f=e==="left"?Pt.xc:Pt.x1,l=d=>o||e==="left"&&d<Pt.xc||e==="right"&&d>Pt.xc,v=o?null:Pt.spring-.06;if(r){s(Pt.x0,0,Pt.x0+ln,Pt.spring),s(Pt.x1-ln,0,Pt.x1,Pt.spring),yh(t,Pt.r-ln,Pt.r,n,a,Nl,64),s(Pt.x0,0,Pt.x1,.05),s(Pt.x0,Pt.spring-.06,Pt.x1,Pt.spring+.06);for(let d of x2)yh(t,d-V0/2,d+V0/2,n,a,Nl,48)}if(o){s(Pt.x0,0,Pt.x1,ac),s(Pt.xc-ln/2,0,Pt.xc+ln/2,Pt.top-ln*.5);for(let d of xh)s(d-V0/2,ac,d+V0/2,i(d)-ln*.5);for(let d of Hu)s(Pt.x0,d-V0/2,Pt.x1,d+V0/2)}else if(e==="fixed"){s(Pt.xc-ln/2,Pt.spring+.06,Pt.xc+ln/2,Pt.top-ln*.5);for(let d of xh)s(d-V0/2,Pt.spring+.06,d+V0/2,i(d)-ln*.5)}else{let d=e==="left"?Pt.x0+ln:Pt.x1-ln;s(Math.min(d,d+(e==="left"?ln*.8:-ln*.8)),.05,Math.max(d,d+(e==="left"?ln*.8:-ln*.8)),v),s(c,.05,f,ac),s(c,v-.07,f,v);let p=e==="left"?Pt.xc-ln/2:Pt.xc;s(p,.05,p+ln/2,v);for(let u of xh)l(u)&&s(u-V0/2,ac,u+V0/2,v-.07);for(let u of Hu)s(c,u-V0/2,f,u+V0/2)}for(let d of[-1,1]){let p=Pt.xc+d*.16;l(p)&&(Ir(t,p-.02,1.05,a,p+.02,1.13,a+.06,Nl),Ir(t,p-(d>0?0:.14),1.07,a+.05,p+(d>0?.14:0),1.11,a+.08,Nl))}}function G6(t){t=t||"all";let e=[],o=0,{x0:r,x1:n,xc:a,r:s,spring:i}=Pt;if(t!=="fixed"){let f=t==="right"?a:r,l=t==="left"?a:n;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,v=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(v),i+s*Math.sin(v),o])}return e}var Wo=t=>t.toFixed(4);function H6(){let t=xh.map(r=>`vb = max(vb, barCover(abs(q.x - ${Wo(r)}), ${Wo(V0/2)}, soft));`).join(`
		`),e=Hu.map(r=>`hb = max(hb, barCover(abs(q.y - ${Wo(r)}), ${Wo(V0/2)}, soft));`).join(`
		`),o=x2.map(r=>`ab = max(ab, barCover(abs(rr - ${Wo(r)}), ${Wo(V0/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Wo(Pt.x0)} - soft, ${Wo(Pt.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Wo(Pt.x1)} - soft, ${Wo(Pt.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Wo(Pt.xc)}, ${Wo(Pt.spring)}));
		float arch = q.y < ${Wo(Pt.spring)} ? 1.0 : 1.0 - smoothstep(${Wo(Pt.r)} - soft, ${Wo(Pt.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Wo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Wo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Wo(Pt.xc)}, ${Wo(Pt.spring)}));
		float vb = barCover(abs(q.x - ${Wo(Pt.xc)}), ${Wo(ln/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${Wo(Pt.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Wo(ac)} - soft, ${Wo(ac)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Wo(Pt.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Wo(Pt.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Wo(Pt.x0+ln/2)}), ${Wo(ln/2)}, soft),
			barCover(abs(q.x - ${Wo(Pt.x1-ln/2)}), ${Wo(ln/2)}, soft));
		frame = q.y < ${Wo(Pt.spring)} ? frame : barCover(abs(rr - ${Wo(Pt.r-ln/2)}), ${Wo(ln/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}b2.exports={addEntranceWall:q6,addSurround:y2,addFrames:F6,glassPanes:G6,doorLightGLSL:H6,DOOR:Pt,WALL:.35}});var cc=St((bz,E2)=>{"use strict";var Js=1.1583333333333334,ti=(13.05-8*.16)/9,Bu=Js+.16,ju=ti+.16,Ca=14/2-7.75/2,xr=15,Rl=Ca+7.75,Oa=xr+13.05,yr=.3,Pa={y:8+.18,inset:.15},Zs={y:8+.36,inset:yr},Wu=8+.2,Ol=8+.62,Vu=8+.9,Xu=.016,k2=.28,S2=.66,U6=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),B6=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),j6=[9,0,0],y0=[10,0,0];function ic(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function X0(t,e,o,r,n,a,s){ic(t,[e,a,o],[r,a,o],[r,a,n],[e,a,n],[0,-1,0],s)}function Uu(t,e,o,r,n,a,s,i){ic(t,[e,a,o],[r,a,o],[r,s,o],[e,s,o],[0,0,1],i),ic(t,[r,a,n],[e,a,n],[e,s,n],[r,s,n],[0,0,-1],i),ic(t,[e,a,n],[e,a,o],[e,s,o],[e,s,n],[1,0,0],i),ic(t,[r,a,o],[r,a,n],[r,s,n],[r,s,o],[-1,0,0],i)}function w2(t,e,o,r,n){X0(t,e[0],e[1],e[2],o[1],r,n),X0(t,e[0],o[3],e[2],e[3],r,n),X0(t,e[0],o[1],o[0],o[3],r,n),X0(t,o[2],o[1],e[2],o[3],r,n)}var _2=t=>Ca+t*Bu,M2=t=>xr+t*ju;function W6(t,e,o=48){let r=[Ca-yr,xr-yr,Rl+yr,Oa+yr],n=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=n(r,Pa.inset),s=n(r,Zs.inset);X0(t,0,0,14,r[1],8,e),X0(t,0,r[3],14,o,8,e),X0(t,0,r[1],r[0],r[3],8,e),X0(t,r[2],r[1],14,r[3],8,e);let i=.06,c=.06;t.box(r[0]-i,8-c,r[1]-i,r[2]+i,8,r[1],y0),t.box(r[0]-i,8-c,r[3],r[2]+i,8,r[3]+i,y0),t.box(r[0]-i,8-c,r[1],r[0],8,r[3],y0),t.box(r[2],8-c,r[1],r[2]+i,8,r[3],y0),Uu(t,...r.slice(0,2),...r.slice(2),8,Pa.y,y0),w2(t,r,a,Pa.y,y0),Uu(t,...a.slice(0,2),...a.slice(2),Pa.y,Zs.y,y0),w2(t,a,s,Zs.y,y0);for(let f=1;f<6;f++){let l=_2(f)-.16;t.box(l,Wu,xr,l+.16,Zs.y,Oa,y0)}for(let f=1;f<9;f++){let l=M2(f)-.16;t.box(Ca,Wu,l,Rl,Zs.y,l+.16,y0)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let v=_2(l),d=M2(f);Uu(t,v,d,v+Js,d+ti,Zs.y,Vu,y0),X0(t,v,d,v+Js,d+ti,Vu,j6),V6(t,v+Js/2,d+ti/2,Js/2,ti/2)}}function V6(t,e,o,r,n){let a=Ol,s=Xu;X0(t,e-r,o-s,e+r,o+s,a,y0),X0(t,e-s,o-n,e+s,o+n,a,y0);for(let i of[1,-1]){let c=Math.hypot(r,n),f=r/c,l=i*n/c,v=-l*s,d=f*s;ic(t,[e-f*c+v,a,o-l*c+d],[e+f*c+v,a,o+l*c+d],[e+f*c-v,a,o+l*c-d],[e-f*c-v,a,o-l*c-d],[0,-1,0],y0)}for(let i of[k2,S2]){let c=i*r,f=i*n;X0(t,e-c-s,o-f-s,e+c+s,o-f+s,a,y0),X0(t,e-c-s,o+f-s,e+c+s,o+f+s,a,y0),X0(t,e-c-s,o-f+s,e-c+s,o+f-s,a,y0),X0(t,e+c-s,o-f+s,e+c+s,o+f-s,a,y0)}}var so=t=>t.toFixed(4);function X6(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${U6.map(so).join(", ")});
	const vec3 SKY_MOON = vec3(${B6.map(so).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${so(Ca)}, ${so(xr)});
		vec2 pitch = vec2(${so(Bu)}, ${so(ju)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${so(5)} || cell.y > ${so(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${so(Js)}, ${so(ti)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${so(Xu)} - soft, ${so(Xu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${so(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${so(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${so(Pa.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${so(Wu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${so(Zs.y)} - p.y) / L.y)).xz;
		float tG = (${so(Ol)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${so(Vu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${so(Ca-yr)}, ${so(xr-yr)}, ${so(Rl+yr)}, ${so(Oa+yr)}), soft)
		           * rectOpen(q1, vec4(${so(Ca-yr+Pa.inset)}, ${so(xr-yr+Pa.inset)}, ${so(Rl+yr-Pa.inset)}, ${so(Oa+yr-Pa.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${so(Ca)}, ${so(xr)});
		vec2 pitch = vec2(${so(Bu)}, ${so(ju)});
		vec2 paneHalf = vec2(${so(Js/2)}, ${so(ti/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${so(k2)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${so(S2)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${so(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${so(Ol)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${so(Ca)}, ${so(xr)}, ${so(Rl)}, ${so(Oa)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${so(14/2)}, ${so((xr+Oa)/2)}) - L.xz * (${so(Ol)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${so(7.75/2)}, ${so(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${so(xr-3)}, ${so(xr+2)}, p.z)
		        * (1.0 - smoothstep(${so(Oa-2)}, ${so(Oa+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${so(7.75/2)}, ${so(14/2)}, abs(p.x - ${so(14/2)}));
		return z * x;
	}`}E2.exports={addSkylight:W6,skylightGLSL:X6,Z_START:xr,Z_END:Oa,GLASS_Y:Ol,HEIGHT:8}});var A0=St((wz,N2)=>{"use strict";var fc=rs(),Zu=8,fn=.35,ue={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Zu},z2=(ue.z1-ue.z0)/2,Yu=ue.crown-ue.spring,Qu=(Yu*Yu+z2*z2)/(2*Yu),Ju=ue.crown-Qu;function lc(t){let e=t-ue.zc;return Ju+Math.sqrt(Math.max(0,Qu*Qu-e*e))}var Qe={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},ta=Array.from({length:Qe.count},(t,e)=>Qe.first+e*Qe.pitch),T2=ta.slice(1).map(t=>t-Qe.pitch/2),Y6=[ta[0],ta[2],ta[4]],wh=[ta[1],ta[3]],sr={r:1.3,sill:.62,spring:3.3},Ko=[0,0,0],Cl=[11,0,0],as=[10,0,0],Pl=[8,0,0];function l0(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function ir(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function Il(t,e){let{u0:o,u1:r,w0:n,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,r]);for(let h of i){f.add(h.u0),f.add(h.u1);let g=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.08)));for(let m=1;m<g;m++)f.add(h.u0+(h.u1-h.u0)*m/g)}for(let h of e.cuts||[])f.add(h);let l=e.topStep||.5;for(let h=o;h<r;h+=l)f.add(h);let v=[...f].filter(h=>h>=o-1e-9&&h<=r+1e-9).sort((h,g)=>h-g),d=(h,g)=>h.bot?h.bot(g):h.bottom,p=(h,g)=>{let m=s(h),x=g.map(M=>[Math.max(0,d(M,h)),Math.min(M.head(h),m)]).filter(M=>M[1]>M[0]).sort((M,_)=>M[0]-_[0]),y=[],b=0;for(let M of x)M[0]>b+1e-6&&y.push([b,M[0]]),b=Math.max(b,M[1]);return m>b+1e-6&&y.push([b,m]),y},u=(h,g,m)=>[h,g,m];for(let h=0;h<v.length-1;h++){let g=v[h],m=v[h+1],x=(g+m)/2,y=i.filter(z=>x>z.u0&&x<z.u1),b=y.length?Math.max(g,Math.max(...y.map(z=>z.u0))+1e-7):g,M=y.length?Math.min(m,Math.min(...y.map(z=>z.u1))-1e-7):m,_=p(b,y),k=p(M,y),A=Math.min(_.length,k.length);for(let z=0;z<A;z++){let[D,P]=_[z],[G,I]=k[z];P-D<1e-6&&I-G<1e-6||(l0(t,u(g,D,a),u(m,G,a),u(m,I,a),u(g,P,a),[0,0,1],c),e.frontOnly||l0(t,u(m,G,n),u(g,D,n),u(g,P,n),u(m,I,n),[0,0,-1],c))}}e.noEnds||(l0(t,u(o,0,n),u(o,0,a),u(o,s(o),a),u(o,s(o),n),[-1,0,0],c),l0(t,u(r,0,a),u(r,0,n),u(r,s(r),n),u(r,s(r),a),[1,0,0],c));for(let h of i){if(h.noReveal)continue;let g=h.mat||e.revealMat||c,m=Math.max(0,d(h,h.u0+1e-7)),x=Math.max(0,d(h,h.u1-1e-7)),y=Math.min(h.head(h.u0+1e-7),s(h.u0)),b=Math.min(h.head(h.u1-1e-7),s(h.u1));y>m+1e-6&&l0(t,u(h.u0,m,a),u(h.u0,m,n),u(h.u0,y,n),u(h.u0,y,a),[1,0,0],g),b>x+1e-6&&l0(t,u(h.u1,x,n),u(h.u1,x,a),u(h.u1,b,a),u(h.u1,b,n),[-1,0,0],g);let M=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.06)));for(let _=0;_<M;_++){let k=h.u0+(h.u1-h.u0)*_/M,A=h.u0+(h.u1-h.u0)*(_+1)/M,z=Math.max(k,h.u0+1e-7),D=Math.min(A,h.u1-1e-7),P=Math.min(h.head(z),s(k)),G=Math.min(h.head(D),s(A));if(!(P>=s(k)-1e-6&&G>=s(A)-1e-6)){let ft=A-k,Nt=G-P,_t=Math.hypot(ft,Nt)||1;l0(t,u(k,P,n),u(A,G,n),u(A,G,a),u(k,P,a),[Nt/_t,-ft/_t,0],g)}let I=d(h,z),H=d(h,D);if(I>1e-6||H>1e-6){let ft=A-k,Nt=H-I,_t=Math.hypot(ft,Nt)||1;l0(t,u(A,H,n),u(k,I,n),u(k,I,a),u(A,H,a),[-Nt/_t,ft/_t,0],g)}}}}var Ku=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function K6(t,e){let o=sr.r,r=sr.sill,n=sr.spring,a=ue.z0,s=24,i=(p,u,h)=>[e+Math.cos(p)*u,h,a-Math.sin(p)*u];for(let p=0;p<s;p++){let u=Math.PI*p/s,h=Math.PI*(p+1)/s,g=[-Math.cos(u),0,Math.sin(u)],m=[-Math.cos(h),0,Math.sin(h)],x=[t.vert(i(u,o,r),g,Ko),t.vert(i(h,o,r),m,Ko),t.vert(i(h,o,n),m,Ko),t.vert(i(u,o,n),g,Ko)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,f=(p,u)=>[e+Math.cos(p)*Math.cos(u)*o,n+Math.sin(u)*o,a-Math.sin(p)*Math.cos(u)*o],l=(p,u)=>[-Math.cos(p)*Math.cos(u),-Math.sin(u),Math.sin(p)*Math.cos(u)];for(let p=0;p<s;p++)for(let u=0;u<c;u++){let h=Math.PI*p/s,g=Math.PI*(p+1)/s,m=Math.PI/2*u/c,x=Math.PI/2*(u+1)/c,y=[t.vert(f(h,m),l(h,m),as),t.vert(f(g,m),l(g,m),as),t.vert(f(g,x),l(g,x),as),t.vert(f(h,x),l(h,x),as)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}for(let p=1;p<8;p++){let u=Math.PI*p/8,h=[];for(let g=0;g<=10;g++){let m=Math.PI/2*g/10*.97;h.push(f(u,m).map((x,y)=>x-l(u,m)[y]*.02))}t.tube(h,g=>.035*(1-g*.6),12,6,{mat:()=>as})}let v=t.vert([e,r,a],[0,1,0],Ko);for(let p=0;p<s;p++){let u=Math.PI*p/s,h=Math.PI*(p+1)/s;t.tri(v,t.vert(i(u,o,r),[0,1,0],Ko),t.vert(i(h,o,r),[0,1,0],Ko))}ir(t,e-o-.12,r-.1,a,e+o+.12,r+.02,a+.12,Ko),ir(t,e-o-.16,r-.2,a,e+o+.16,r-.1,a+.07,Ko);let d=.16;for(let p=0;p<s;p++){let u=Math.PI*p/s,h=Math.PI*(p+1)/s,g=(m,x,y)=>[e+Math.cos(m)*x,n+Math.sin(m)*x,y];l0(t,g(u,o,a+.05),g(h,o,a+.05),g(h,o+d,a+.05),g(u,o+d,a+.05),[0,0,1],Ko),l0(t,g(u,o+d,a),g(h,o+d,a),g(h,o+d,a+.05),g(u,o+d,a+.05),[Math.cos((u+h)/2),Math.sin((u+h)/2),0],Ko),l0(t,g(u,o,a),g(h,o,a),g(h,o,a+.05),g(u,o,a+.05),[-Math.cos((u+h)/2),-Math.sin((u+h)/2),0],Ko)}for(let p of[-1,1]){let u=e+p*o,h=e+p*(o+d);ir(t,u,r,a,h,n,a+.05,Ko),ir(t,u-p*.02,n-.12,a,h+p*.06,n,a+.09,Ko)}ir(t,e-.11,n+o-.04,a,e+.11,n+o+d+.1,a+.09,Ko),t.lathe([[.66,r,1],[.66,r+.06,1],[.62,r+.1],[.6,r+.3],[.64,r+.34,1],[.64,r+.4,1],[0,r+.4]],e,a-.62,40,{mat:()=>Ko})}var Q6=sr.sill+.4,Z6=ue.z0-.62;function J6(t){l0(t,[14,0,ue.z0-fn],[ue.x1+fn,0,ue.z0-fn],[ue.x1+fn,0,ue.z1+fn],[14,0,ue.z1+fn],[0,1,0],Ko),t.curMat=Cl,Il(t,{u0:14+fn,u1:ue.x1+2*fn,w0:ue.z0-2*fn,w1:ue.z0,top:()=>ue.spring,holes:wh.map(f=>({u0:f-sr.r,u1:f+sr.r,bottom:sr.sill,head:Ku(f,sr.r,sr.spring),noReveal:!0})),mat:Cl,cuts:[ue.x1]});for(let f of wh)K6(t,f);t.save(),t.translate(0,0,ue.z1),t.rotateY(Math.PI),t.translate(-(ue.x1+2*fn),0,-2*fn);let e=f=>ue.x1+2*fn-f;Il(t,{u0:e(ue.x1+2*fn),u1:e(13.65),w0:0,w1:2*fn,top:()=>ue.spring,holes:ta.map(f=>({u0:e(f+Qe.halfW),u1:e(f-Qe.halfW),bottom:Qe.sill,head:Ku(e(f),Qe.halfW,Qe.spring)})),mat:Cl,revealMat:Ko}),t.restore(),t.save(),t.translate(ue.x1,0,0),t.rotateY(-Math.PI/2);let o=fc.DOOR,r=ue.zc,n=o.r;Il(t,{u0:ue.z0-2*fn,u1:ue.z1+2*fn,w0:-2*fn,w1:0,top:f=>f<ue.z0||f>ue.z1?ue.spring:lc(f),topStep:.15,holes:[{u0:r-n,u1:r+n,bottom:0,head:Ku(r,n,o.spring)}],mat:Cl,revealMat:Ko}),t.restore(),t.save(),t.translate(14+fn,0,0),t.rotateY(-Math.PI/2),Il(t,{u0:ue.z0,u1:ue.z1,w0:-0,w1:2*fn,top:()=>Zu,topStep:.15,holes:[{u0:ue.z0,u1:ue.z1,bottom:0,head:f=>lc(f)}],mat:Cl,revealMat:Ko}),t.restore();let a=14+fn,s=Math.ceil((ue.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(ue.x1-a)*f/s,v=[];for(let d=0;d<=i;d++){let p=ue.z0+(ue.z1-ue.z0)*d/i,u=lc(p),h=[0,Ju-u,ue.zc-p],g=Math.hypot(h[1],h[2]);v.push(t.vert([l,u,p],[0,h[1]/g,h[2]/g],as))}c.push(v)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function A2(t,e,o,r){let a=[];for(let s=0;s<=32;s++){let i=ue.z0+(ue.z1-ue.z0)*s/32,c=lc(i),f=Ju-c,l=ue.zc-i,v=Math.hypot(f,l),d=[c+f/v*r,i+l/v*r];a.push({y:c,z:i,iy:d[0],iz:d[1],n:[0,f/v,l/v]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];l0(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,Ko),l0(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],Ko),l0(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],Ko)}}function bh(t,e,o,r){let s=o,i=o+r*.16;ir(t,e-.28,0,s,e+.28,ue.spring-.3,i,Ko),ir(t,e-.28-.06,0,s,e+.28+.06,.32,o+r*(.16+.05),Ko),ir(t,e-.28-.05,ue.spring-.3,s,e+.28+.05,ue.spring-.1,o+r*(.16+.05),Ko),ir(t,e-.28-.1,ue.spring-.1,s,e+.28+.1,ue.spring,o+r*(.16+.1),Ko)}function t_(t,e){let o=lc(ue.zc),r=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(r,e,ue.zc,48,{mat:()=>as});for(let n=0;n<8;n++){let a=n*Math.PI/4,s=e+Math.cos(a)*.32,i=ue.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=as,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function e_(t){t.curMat=Ko;for(let[e,o]of[[ue.z0,1],[ue.z1,-1]])ir(t,14.35,ue.spring-.12,e,ue.x1,ue.spring,e+o*.1,Ko),ir(t,14.35,ue.spring-.04,e,ue.x1,ue.spring+.05,e+o*.18,Ko);for(let[e,o]of[[ue.z0,1],[ue.z1,-1]])ir(t,14.35,0,e,ue.x1,.42,e+o*.12,Ko),ir(t,14.35,.42,e,ue.x1,.5,e+o*.07,Ko);for(let e of T2)A2(t,e,.24,.16),bh(t,e,ue.z0,1),bh(t,e,ue.z1,-1);for(let e of[14.35+.28,ue.x1-.28])A2(t,e,.28,.22),bh(t,e,ue.z0,1),bh(t,e,ue.z1,-1);for(let e of ta)t_(t,e)}function o_(t){let e=ue.z1+fn,o=e-.04,r=e+.04,n=(i,c,f,l)=>ir(t,i,c,o,f,l,r,Pl),a=Qe.halfW,s=(i,c,f,l,v,d)=>{let p=(u,h,g)=>[i+h*Math.cos(u),Qe.spring+h*Math.sin(u),g];for(let u=0;u<d;u++){let h=l+(v-l)*u/d,g=l+(v-l)*(u+1)/d;l0(t,p(h,c,o),p(g,c,o),p(g,f,o),p(h,f,o),[0,0,-1],Pl),l0(t,p(h,f,r),p(g,f,r),p(g,c,r),p(h,c,r),[0,0,1],Pl)}};for(let i of ta){let c=i-a,f=i+a;n(c,Qe.sill,c+.07,Qe.spring),n(f-.07,Qe.sill,f,Qe.spring),n(c,Qe.sill,f,Qe.sill+.07),n(c,Qe.spring-.04,f,Qe.spring+.04);for(let v of[-.5,0,.5])n(i+v*a-.022,Qe.sill,i+v*a+.022,Qe.spring);let l=6;for(let v=1;v<l;v++){let d=Qe.sill+(Qe.spring-Qe.sill)*v/l;n(c,d-.02,f,d+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let v=1;v<6;v++){let d=Math.PI*v/6,p=Math.cos(d),u=Math.sin(d),h=.02,g=(m,x)=>[i+p*m-u*h*x,Qe.spring+u*m+p*h*x];l0(t,[...g(.44,-1),o],[...g(a-.05,-1),o],[...g(a-.05,1),o],[...g(.44,1),o],[0,0,-1],Pl),l0(t,[...g(.44,1),r],[...g(a-.05,1),r],[...g(a-.05,-1),r],[...g(.44,-1),r],[0,0,1],Pl)}}}function n_(){let t=[],e=ue.z1+fn;for(let o of ta){let r=o-Qe.halfW,n=o+Qe.halfW;t.push([r,Qe.sill,e],[n,Qe.sill,e],[n,Qe.spring,e],[r,Qe.sill,e],[n,Qe.spring,e],[r,Qe.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Qe.spring,e],[o+Qe.halfW*Math.cos(s),Qe.spring+Qe.halfW*Math.sin(s),e],[o+Qe.halfW*Math.cos(i),Qe.spring+Qe.halfW*Math.sin(i),e])}}return t}function L2(t,e){t.save(),t.translate(ue.x1+fn,0,ue.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function r_(t){L2(t,()=>{fc.addSurround(t),fc.addFrames(t,"fixed")})}function a_(t){return fc.glassPanes(t||"fixed").map(([o,r,n])=>[ue.x1+fn-n,r,ue.zc-7+o])}function s_(t){J6(t),e_(t),o_(t),r_(t),t.curMat=[0,0,0]}var i_={x:ue.x1+fn,zLo:ue.zc-fc.DOOR.r,zHi:ue.zc+fc.DOOR.r},Oo=t=>t.toFixed(4);function c_(){return`
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
		float k = floor((q.x - ${Oo(Qe.first)}) / ${Oo(Qe.pitch)} + 0.5);
		if (k < 0.0 || k > ${Oo(Qe.count-1)}) return 0.0;
		float dx = q.x - (${Oo(Qe.first)} + k * ${Oo(Qe.pitch)});
		float side = 1.0 - smoothstep(${Oo(Qe.halfW)} - soft, ${Oo(Qe.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Oo(Qe.sill)} - soft, ${Oo(Qe.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Oo(Qe.spring)}));
		float head = q.y < ${Oo(Qe.spring)} ? 1.0 : 1.0 - smoothstep(${Oo(Qe.halfW)} - soft, ${Oo(Qe.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Oo(Qe.halfW*.5)}), 0.022, soft));
		float rowH = ${Oo((Qe.spring-Qe.sill)/6)};
		float ry = (q.y - ${Oo(Qe.sill)}) / rowH;
		cover = max(cover, q.y < ${Oo(Qe.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Oo(Qe.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Oo(ue.x0)} || p.z < ${Oo(ue.z0-.1)} || p.z > ${Oo(ue.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Oo(ue.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Oo(ue.z1+2*fn)} - p.z) / WIN_SKY.z;
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
		${wh.map(t=>`{ float d = abs(p.x - ${Oo(t)}); if (d < best) { best = d; lamp = vec3(${Oo(t)}, ${Oo(sr.spring+.55)}, ${Oo(ue.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Oo(ue.z0+1.6)} || p.z < ${Oo(ue.z0-sr.r-.1)} || p.x < ${Oo(ue.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Oo(sr.r)}, ${Oo(sr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Oo(ue.x0-1)}) return 0.0;
		float inC = smoothstep(${Oo(ue.z0-1.5)}, ${Oo(ue.z0)}, p.z) * smoothstep(${Oo(ue.x0-1)}, ${Oo(ue.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Oo(ue.z0)}, ${Oo(ue.z1)}, p.z);
		return inC * near;
	}`}N2.exports={wallWithHoles:Il,windowLightGLSL:c_,addWing:s_,windowGlass:n_,farDoorGlass:a_,atFarDoor:L2,FAR_DOOR:i_,vaultY:lc,C:ue,NICHE_X:wh,NICHE:sr,NICHE_PLINTH_TOP:Q6,NICHE_STATUE_Z:Z6,WIN:Qe,winCentres:ta,piers:T2,PAINTING_X:Y6,HEIGHT:Zu}});var $r=St((_z,C2)=>{"use strict";var td=A0(),an=8,dc=.35,ei=14,uc=4,ke={x0:ei+dc,x1:ei+dc+2*uc,z0:5.9-uc,z1:5.9+uc,zc:5.9,cx:ei+dc+uc,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:an},oculus:3.3};ke.domeTop=ke.dome.base+ke.dome.r;var pc={spokes:16,ringE:[.42,.95],bar:.035},Qn={sxz:1.32,sy:1.6,yaw:.6};Qn.crownC=[ke.cx,.4+3.4*Qn.sy,ke.zc];Qn.crownR=[2.3*Qn.sxz,1.9*Qn.sy,2.3*Qn.sxz];Qn.trunkR=.26*Qn.sxz;Qn.trunkTop=.4+2.2*Qn.sy;var R2={inner:1.05,outer:1.62,seat:.48,soil:.4},kh=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),f0=[0,0,0],hc=[11,0,0],_h=[10,0,0],Mh=[9,0,0],l_=[5,0,0],ed=[3,0,0];function Ia(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Y0(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}var f_=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function h_(t){t.save(),t.translate(ei+dc,0,0),t.rotateY(-Math.PI/2),td.wallWithHoles(t,{u0:0,u1:td.C.z0,w0:0,w1:2*dc,top:()=>an,holes:[{u0:ke.zc-ke.arch.r,u1:ke.zc+ke.arch.r,bottom:0,head:f_(ke.zc,ke.arch.r,ke.arch.spring),step:.05}],mat:hc,revealMat:f0,topStep:1}),t.restore();let e=ei-dc;for(let[s,i]of[[0,ke.zc-ke.arch.r],[ke.zc+ke.arch.r,td.C.z0]])Y0(t,e-.12,0,s,e,.42,i,f0),Y0(t,e-.07,.42,s,e,.5,i,f0);let o=e,r=.24,n=40,a=(s,i,c)=>[c,ke.arch.spring+Math.sin(s)*i,ke.zc+Math.cos(s)*i];for(let s=0;s<n;s++){let i=Math.PI*s/n,c=Math.PI*(s+1)/n;Ia(t,a(i,ke.arch.r,o-.07),a(c,ke.arch.r,o-.07),a(c,ke.arch.r+r,o-.07),a(i,ke.arch.r+r,o-.07),[-1,0,0],f0),Ia(t,a(i,ke.arch.r+r,o),a(c,ke.arch.r+r,o),a(c,ke.arch.r+r,o-.07),a(i,ke.arch.r+r,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],f0),Ia(t,a(i,ke.arch.r,o),a(c,ke.arch.r,o),a(c,ke.arch.r,o-.07),a(i,ke.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],f0)}Y0(t,o-.12,ke.arch.spring+ke.arch.r-.06,ke.zc-.17,o,ke.arch.spring+ke.arch.r+r+.16,ke.zc+.17,f0);for(let s of[-1,1]){let i=ke.zc+s*ke.arch.r,c=ke.zc+s*(ke.arch.r+r);Y0(t,o-.07,0,i,o,ke.arch.spring,c,f0),Y0(t,o-.13,ke.arch.spring-.16,i-s*.03,o,ke.arch.spring,c+s*.08,f0),Y0(t,o-.12,0,i-s*.03,o,.5,c+s*.06,f0)}}function u_(t){let{x0:e,x1:o,z0:r,z1:n}=ke;Ia(t,[ei,0,r],[o,0,r],[o,0,n],[ei,0,n],[0,1,0],f0),t.curMat=hc,Ia(t,[o,0,r],[o,0,n],[o,an,n],[o,an,r],[-1,0,0],hc),Ia(t,[e,0,r],[o,0,r],[o,an,r],[e,an,r],[0,0,1],hc),Ia(t,[o,0,n],[e,0,n],[e,an,n],[o,an,n],[0,0,-1],hc),Ia(t,[e,0,n],[e,0,r],[e,an,r],[e,an,n],[1,0,0],hc),Y0(t,o-.12,0,r,o,.42,n,f0),Y0(t,e,0,r,o,.42,r+.12,f0),Y0(t,e,0,n-.12,o,.42,n,f0),Y0(t,o-.2,an-.3,r,o,an,n,f0),Y0(t,e,an-.3,r,o,an,r+.2,f0),Y0(t,e,an-.3,n-.2,o,an,n,f0),Y0(t,e,an-.3,r,e+.2,an,n,f0);let a=ke.dome.r,s=48,i=[];for(let m=0;m<=s;m++){let x=Math.PI*2*m/s;i.push([ke.cx+Math.cos(x)*a,ke.zc+Math.sin(x)*a])}let c=m=>{let x=Math.abs(Math.cos(m)),y=Math.abs(Math.sin(m));return Math.min(uc/Math.max(x,1e-6),uc/Math.max(y,1e-6))};for(let m=0;m<s;m++){let x=Math.PI*2*m/s,y=Math.PI*2*(m+1)/s,b=c(x),M=c(y),_=[ke.cx+Math.cos(x)*b,an,ke.zc+Math.sin(x)*b],k=[ke.cx+Math.cos(y)*M,an,ke.zc+Math.sin(y)*M];Ia(t,[i[m][0],an,i[m][1]],[i[m+1][0],an,i[m+1][1]],k,_,[0,-1,0],_h)}t.lathe([[a+.02,an-.18,1],[a-.12,an-.18,1],[a-.12,an-.06,1],[a-.05,an,1],[a,an+.02]],ke.cx,ke.zc,s,{mat:()=>f0});let f=16,l=(m,x,y)=>[ke.cx+Math.cos(m)*Math.cos(x)*y,ke.dome.base+Math.sin(x)*y,ke.zc+Math.sin(m)*Math.cos(x)*y],v=Math.PI/2;for(let m=0;m<s;m++)for(let x=0;x<f;x++){let y=Math.PI*2*m/s,b=Math.PI*2*(m+1)/s,M=v*x/f,_=v*(x+1)/f,k=(z,D)=>[-Math.cos(z)*Math.cos(D),-Math.sin(D),-Math.sin(z)*Math.cos(D)],A=[t.vert(l(y,M,a),k(y,M),Mh),t.vert(l(b,M,a),k(b,M),Mh),t.vert(l(b,_,a),k(b,_),Mh),t.vert(l(y,_,a),k(y,_),Mh)];t.tri(A[0],A[1],A[2]),t.tri(A[0],A[2],A[3])}for(let m=0;m<pc.spokes;m++){let x=Math.PI*2*m/pc.spokes,y=[];for(let b=0;b<=14;b++)y.push(l(x,(v-.06)*b/14,a-.04));t.tube(y,()=>.04,20,6,{mat:()=>_h})}for(let m of pc.ringE){let x=Math.cos(m)*(a-.04),y=ke.dome.base+Math.sin(m)*(a-.04),b=[];for(let M=0;M<=72;M++){let _=Math.PI*2*M/72;b.push([ke.cx+Math.cos(_)*x,y,ke.zc+Math.sin(_)*x])}t.tube(b,()=>.035,72,6,{mat:()=>_h})}t.ellipsoid([ke.cx,ke.dome.base+a-.06,ke.zc],[.16,.08,.16],6,12,{mat:()=>_h});let d=.46,p=.55,u=.12,h=(m,x,y,b)=>{Y0(t,m,d-.08,x,y,d,b,ed);let M=y-m>b-x?[m+.25,y-.25]:[m+.06,y-.06],_=y-m>b-x?[x+.06,b-.06]:[x+.25,b-.25];Y0(t,M[0],0,_[0],M[1],d-.08,_[1],ed)};h(o-u-p,r+1.1,o-u,n-1.1),h(e+1,r+u,o-1.1,r+u+p),h(e+1,n-u-p,o-1.1,n-u);let g=R2;t.lathe([[g.outer,0,1],[g.outer,g.seat-.1,1],[g.outer+.07,g.seat-.07,1],[g.outer+.07,g.seat,1],[g.inner-.05,g.seat,1],[g.inner-.05,g.seat-.06,1],[g.inner,g.seat-.08,1],[g.inner,g.soil]],ke.cx,ke.zc,64,{mat:()=>ed}),t.lathe([[g.inner,g.soil,1],[0,g.soil+.03]],ke.cx,ke.zc,48,{mat:()=>l_})}function d_(t){h_(t),u_(t),t.curMat=[0,0,0]}var Qo=t=>t.toFixed(4);function O2(){let t=ke.dome.r,e=pc.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${Qo(kh[0])}, ${Qo(kh[1])}, ${Qo(kh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Qo(ke.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Qo(ke.cx)}, ${Qo(ke.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Qo(t-.15)} - soft, ${Qo(t-.15)} + soft, d);
		float hw = ${Qo(pc.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Qo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Qo(Math.PI*2/pc.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Qo(Qn.crownC[0])}, ${Qo(Qn.crownC[1])}, ${Qo(Qn.crownC[2])});
		vec3 r = vec3(${Qo(Qn.crownR[0])}, ${Qo(Qn.crownR[1])}, ${Qo(Qn.crownR[2])});
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
		float tt = (${Qo(Qn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Qo(ke.cx)}, ${Qo(ke.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Qo(Qn.trunkR*.7)}, ${Qo(Qn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function p_(){return`
	${O2()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Qo(ke.x0-.75)} || p.z < ${Qo(ke.z0-.5)} || p.z > ${Qo(ke.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Qo(ke.x0-1.5)} || p.z < ${Qo(ke.z0-1.5)} || p.z > ${Qo(ke.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Qo(ke.x0-1.2)}, ${Qo(ke.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Qo(ke.cx)}, ${Qo(ke.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}C2.exports={addAlcove:d_,alcoveLightGLSL:p_,oculusGLSL:O2,A:ke,BENCH:R2,SHAFT:kh,TREE:Qn}});var Zn=St((Mz,I2)=>{"use strict";var ea=0;try{let t=location.search;/[?&]night\b/.test(t)&&(ea=1)}catch(t){}var $a=ea,od=0,P2=[],Sh={tick(t){let e=od?Math.min(.1,t-od):0;if(od=t,$a!==ea){let o=e/2.4;$a=ea>$a?Math.min(ea,$a+o):Math.max(ea,$a-o)}return Sh.night},get night(){return $a*$a*(3-2*$a)},get isNight(){return ea===1},get settled(){return $a===ea},set(t){ea=t?1:0,P2.forEach(e=>e(ea))},toggle(){Sh.set(!ea)},onChange(t){P2.push(t)}};Sh.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;I2.exports=Sh});var is=St((kz,ql)=>{"use strict";var nd=Zn(),{C:rd}=A0(),{A:Eh,BENCH:$l}=$r(),Jn=Math.PI,v_=[18,29,40],zh=.575,ss=[],Dl=(t,e,o,r,n,a,s)=>ss.push(Object.assign({x:t,y:e,z:o,o:r,back:n,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));v_.forEach(t=>{Dl(1.25+zh+.48,3.25,t,[1,0],.48,zh,{s:1.2}),Dl(12.75-zh-.48,3.25,t,[-1,0],.48,zh,{s:1.2})});[3,11].forEach(t=>Dl(t,3.45,rd.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var m_=[14.63,19.63,24.03,28.43,32.83,rd.x1-.28];m_.forEach(t=>Dl(t,3.15,rd.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>Dl(.35+.44,2.75,t,[1,0],.44,99));{let t=($l.inner+$l.outer)/2,e=Math.atan2(-1.12,-.98);ss.push({x:Eh.cx+Math.cos(e)*t,y:$l.seat+.155,z:Eh.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[Eh.cx,Eh.zc,$l.outer+.07,$l.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var ad=.13,Ah=.21,h0=ad/Math.cos(Jn/6),jo=t=>t.toFixed(4);function $2(t){let o=(t||ss.map((r,n)=>n)).map(r=>{let n=ss[r],a=-n.o[1],s=n.o[0],i=n.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${jo(n.ring[3]-.03)}) {
					float tt = ${jo(n.y-n.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${jo(n.x)}, ${jo(n.z)}) + D.xz * tt - vec2(${jo(n.ring[0])}, ${jo(n.ring[1])});
					T *= smoothstep(${jo(n.ring[2]-.02)}, ${jo(n.ring[2]+.12)}, length(hit));
				}`:"",c=n.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${jo(n.o[0])}, ${jo(n.o[1])}));
					if (behind > ${jo(n.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${jo(a)}, ${jo(s)}))) * ${jo(n.back)} / behind;
						T *= smoothstep(${jo(n.hw-.04)}, ${jo(n.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${jo(n.x)}, ${jo(n.y)}, ${jo(n.z)});
				float d2 = dot(D, D);
				if (d2 < ${jo(n.range*n.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${jo(Math.cos(Math.atan2(n.o[1],n.o[0])))}, s = ${jo(Math.sin(Math.atan2(n.o[1],n.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${jo(r*1.7)}) + 0.04 * sin(time * 15.3 + ${jo(r*2.9)}) * sin(time * 1.9 + ${jo(r*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${jo(1/(n.s*n.s))}) * (1.0 - smoothstep(${jo(n.range*.6)}, ${jo(n.range)}, d));
					sum += ${jo(n.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${jo(Jn/6)}, ${jo(Jn/3)}) - ${jo(Jn/6)};
		float U = tan(t) / ${jo(Math.tan(Jn/6))};
		float V = (q.y / h) * (${jo(ad/Ah)} / cos(t));
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
	}`}var hn=0,g_=1;function x_(){let t=[],e=[],o=[],r=[],n=[],a=(p,u,h,g)=>(t.push(p[0],p[1],p[2]),e.push(u[0],u[1],u[2]),o.push(h),r.push(g?g[0]:0,g?g[1]:0),t.length/3-1),s=(p,u)=>[p[0]-u[0],p[1]-u[1],p[2]-u[2]],i=(p,u)=>[p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]],c=p=>{let u=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/u,p[1]/u,p[2]/u]};function f(p,u,h,g,m,x){let y=c(i(s(u,p),s(g,p))),b=a(p,y,m,[0,0]),M=a(u,y,m,[1,0]),_=a(h,y,m,[1,1]),k=a(g,y,m,[0,1]);n.push(b,M,_,b,_,k),x&&n.push(b,_,M,b,k,_)}function l(p,u,h){for(let x=0;x<p.length;x++){let y=p[Math.max(0,x-1)],b=p[Math.min(p.length-1,x+1)],M=c(s(b,y)),_=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],k=c(i(M,_)),A=i(k,M),z=typeof u=="function"?u(x/(p.length-1)):u;for(let D=0;D<=6;D++){let P=D/6*Jn*2,G=Math.cos(P),I=Math.sin(P),H=[k[0]*G+A[0]*I,k[1]*G+A[1]*I,k[2]*G+A[2]*I];a([p[x][0]+H[0]*z,p[x][1]+H[1]*z,p[x][2]+H[2]*z],H,h)}}let m=t.length/3-p.length*7;for(let x=0;x<p.length-1;x++)for(let y=0;y<6;y++){let b=m+x*7+y,M=b+6+1;n.push(b,M,b+1,b+1,M,M+1)}}function v(p,u,h,g,m,x,y,b,M){let _=(k,A,z)=>{let D=x+Jn/6+z*Jn/3;return[p[0]+Math.cos(D)*k,A,p[2]+Math.sin(D)*k]};for(let k=0;k<6;k++)f(_(g,u,k+1),_(g,u,k),_(m,h,k),_(m,h,k+1),y);if(b&&m>0)for(let k=0;k<6;k++){let A=a([p[0],h,p[2]],[0,1,0],y),z=a(_(m,h,k),[0,1,0],y),D=a(_(m,h,k+1),[0,1,0],y);n.push(A,D,z)}if(M&&g>0)for(let k=0;k<6;k++){let A=a([p[0],u,p[2]],[0,-1,0],y),z=a(_(g,u,k),[0,-1,0],y),D=a(_(g,u,k+1),[0,-1,0],y);n.push(A,z,D)}}function d(p,u,h,g,m,x,y){let b=[];for(let _=0;_<=18;_++){let k=_/18,A=(y||0)+k*g*Jn*2,z=h*(1-.75*k);b.push([p[0]+u[0]*Math.cos(A)*z,p[1]+Math.sin(A)*z,p[2]+u[2]*Math.cos(A)*z])}l(b,m,x)}return ss.forEach(p=>{let u=p.s,h=Math.atan2(p.o[1],p.o[0]),g=[p.x,p.y,p.z],m=(b,M,_)=>[p.x+p.o[0]*b-p.o[1]*(_||0),p.y+M,p.z+p.o[1]*b+p.o[0]*(_||0)],x=p.y-Ah*u,y=p.y+Ah*u;for(let b=0;b<6;b++){let M=h+Jn/6+b*Jn/3,_=M+Jn/3,k=h0*u*.97,A=[p.x+Math.cos(M)*k,x,p.z+Math.sin(M)*k],z=[p.x+Math.cos(_)*k,x,p.z+Math.sin(_)*k];f(z,A,[A[0],y,A[2]],[z[0],y,z[2]],g_,!0)}for(let b=0;b<6;b++){let M=h+Jn/6+b*Jn/3,_=h0*u;l([[p.x+Math.cos(M)*_,x-.02*u,p.z+Math.sin(M)*_],[p.x+Math.cos(M)*_,y+.02*u,p.z+Math.sin(M)*_]],.011*u,hn)}v(g,x-.035*u,x,h0*u*1.12,h0*u*1.12,h,hn,!0,!0),v(g,x-.1*u,x-.035*u,h0*u*.55,h0*u*1,h,hn,!1,!0),v(g,x-.17*u,x-.1*u,0,h0*u*.55,h,hn,!1,!1);for(let b=0;b<6;b++){let M=h+b*Jn/3,_=ad*u*1.06,k=[p.x+Math.cos(M)*_,x-.06*u,p.z+Math.sin(M)*_];d(k,[-Math.sin(M),0,Math.cos(M)],.03*u,.85,.004*u,hn,.3)}v(g,y,y+.03*u,h0*u*1.14,h0*u*1.14,h,hn,!1,!0),v(g,y+.03*u,y+.2*u,h0*u*1.14,h0*u*.32,h,hn,!1,!1),v(g,y+.2*u,y+.27*u,h0*u*.34,h0*u*.34,h,hn,!1,!1),v(g,y+.27*u,y+.37*u,h0*u*.42,0,h,hn,!1,!0),l([[p.x,y+.36*u,p.z],[p.x,y+.47*u,p.z]],b=>.01*u*(1-.7*b),hn),v([p.x,0,p.z],y+.44*u,y+.47*u,.018*u,0,h,hn,!1,!0);for(let b=0;b<6;b++){let M=h+Jn/6+b*Jn/3,_=h0*u*1.14,k=[p.x+Math.cos(M)*_,y+.03*u,p.z+Math.sin(M)*_];l([k,[k[0],k[1]+.09*u,k[2]]],A=>.008*u*(1-.8*A),hn),v([k[0],0,k[2]],k[1]+.035*u,k[1]+.06*u,.014*u,.014*u,M,hn,!0,!0)}if(p.mount==="wall"){let b=p.back,M=x-.32,_=m(-b,0,0);((P,G,I)=>{let H=[p.o[0],0,p.o[1]],ft=[-p.o[1],0,p.o[0]],Nt=(ut,Yt,Se)=>[_[0]+ft[0]*ut+H[0]*Se,Yt,_[2]+ft[2]*ut+H[2]*Se],_t=.03,xt=.065;f(Nt(-I,P,xt),Nt(I,P,xt),Nt(I,G,xt),Nt(-I,G,xt),hn,!0),f(Nt(I,P,_t),Nt(I,P,xt),Nt(I,G,xt),Nt(I,G,_t),hn,!0),f(Nt(-I,P,xt),Nt(-I,P,_t),Nt(-I,G,_t),Nt(-I,G,xt),hn,!0),f(Nt(-I,G,xt),Nt(I,G,xt),Nt(I,G,_t),Nt(-I,G,_t),hn,!0),f(Nt(-I,P,_t),Nt(I,P,_t),Nt(I,P,xt),Nt(-I,P,xt),hn,!0),v([_[0]+H[0]*xt,0,_[2]+H[2]*xt],G,G+.05,I*.6,0,h,hn,!1,!0),v([_[0]+H[0]*xt,0,_[2]+H[2]*xt],P-.05,P,0,I*.6,h,hn,!1,!1)})(M-.2,M+.2,.07);let A=[];for(let P=0;P<=14;P++){let G=P/14,I=-b+.05+G*(b-.05),H=M+.04+(x-.17*u-M-.04)*Math.pow(G,2.2);A.push(m(I,H-p.y,0))}l(A,P=>.022*(1-.3*P),hn);let z=[];for(let P=0;P<=10;P++){let G=P/10;z.push(m(-b+.05+G*b*.6,M-.14+G*.16+.05*Math.sin(G*Jn)-p.y,0))}l(z,.009,hn);let D=z[z.length-1];d([D[0]-p.o[0]*.03,D[1]+.02,D[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,hn,-.4),[.3,.55].forEach(P=>{let G=A[Math.round(P*14)],I=z[Math.round(P/.62*10)]||z[10];l([G,I],.006,hn)}),[-1,1].forEach(P=>{let G=m(-.05,-Ah*u-.2*u,0);d([G[0]-p.o[1]*P*.05,G[1],G[2]+p.o[0]*P*.05],[-p.o[1]*P,0,p.o[0]*P],.05*u,.9,.006,hn,Jn)})}else for(let b=0;b<3;b++){let M=h+b*Jn*2/3,_=[p.x+Math.cos(M)*h0*u*.7,x-.035*u,p.z+Math.sin(M)*h0*u*.7],k=[p.x+Math.cos(M)*h0*u*1.25,x-.17*u,p.z+Math.sin(M)*h0*u*1.25];l([_,k],.012*u,hn)}}),{pos:t,nrm:e,kind:o,uv:r,elems:n}}ql.exports=t=>{let e=x_(),o=t({vert:`
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
		${$2()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>nd.night}}),r=[],n=[];ss.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{r.push(c[0],c[1]),n.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:r,at:n},count:r.length/2,uniforms:{time:t.context("time"),night:()=>nd.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),nd.night>.01&&a()}};ql.exports.lanternGLSL=$2;ql.exports.LANTERNS=ss;ql.exports.TREE_LANTERN=[ss.length-1]});var fs=St((Sz,cr)=>{"use strict";var y_=Zn(),Vo=Math.PI,t0=t=>(+t).toFixed(4),b_=t=>`vec3(${t0(t[0])}, ${t0(t[1])}, ${t0(t[2])})`,eo={x:-7,z:44.5},yo=5.2,b0=15,Ae={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},xa={z0:42.2,z1:46.8,top:6.3,x:.35},Nh=[eo.x-Math.sqrt(yo*yo-3.05*3.05),0,0],On={x0:-2.05+Nh[0],x1:Nh[0],z0:41.45,z1:47.55,top:4.3},sd=[[On.x1+.05,2.35,On.z0-.45],[On.x1+.05,2.35,On.z1+.45]].map(([t,e,o])=>{let r=Math.atan2(o-eo.z,t-eo.x);return[eo.x+Math.cos(r)*(yo-.16),e,eo.z+Math.sin(r)*(yo-.16)]}),Go={ri:3.4,ro:yo,a0:-35*Vo/180,rise:.1836,step:3.6*Vo/180,n:88,thick:.36};Go.k=Go.rise/Go.step;var K0=t=>Go.a0-t,ls=t=>t*Go.k,mn={x:eo.x+.1,z:eo.z-.15,yaw:-Vo/2,scale:1.3},Da=mn.scale/1.1,Fl={keyX0:mn.x-.524*Da,keyX1:mn.x+.491*Da,keyTop:.647*Da,keyFront:mn.z+.808*Da,keyBack:mn.z+.72*Da,stoolX:mn.x-.041*Da,stoolZ:mn.z+1.122*Da,stoolFront:mn.z+.96*Da,stoolTop:.37*Da,heading:Vo},Lh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function q2(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function w_(t,e){let o=1e9;for(let r=0;r<Lh.length-1;r++){let[n,a]=Lh[r],[s,i]=Lh[r+1],c=s-n,f=i-a,l=Math.max(0,Math.min(1,((t-n)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-n-c*l,e-a-f*l))}return o}var Th=t=>Ae.spring+Math.sqrt(Math.max(0,Ae.r*Ae.r-(t-Ae.zc)*(t-Ae.zc))),cs=t=>eo.x+Math.sqrt(Math.max(0,yo*yo-(t-eo.z)*(t-eo.z)));function vc(t,e){return Math.hypot(t-eo.x,e-eo.z)<yo||t<=0&&t>eo.x&&e>Ae.z0&&e<Ae.z1||t>On.x0&&t<On.x1&&e>On.z0&&e<On.z1}function __(t,e){if(Math.hypot(t-eo.x,e-eo.z)<Go.ri-.05)return 99;let r=Math.atan2(e-eo.z,t-eo.x),n=Go.a0-r;for(;n<0;)n+=2*Vo;for(;n>=2*Vo;)n-=2*Vo;return n>Go.n*Go.step?99:ls(n)-Go.thick}function M_(){let t=[],e=q2(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},r=(a,s)=>{let i=a-mn.x,c=s-mn.z,f=Math.cos(mn.yaw),l=Math.sin(mn.yaw),v=(f*i-l*c)/mn.scale,d=(l*i+f*c)/mn.scale;return v>-1.05&&v<1.3&&d>-.7&&d<.72},n=0;for(;t.length<980&&n<6e4;){n++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(yo-1.45),i=e()*2*Vo,c=eo.x+Math.cos(i)*s,f=eo.z+Math.sin(i)*s;if(!vc(c,f)||s>yo-.18||r(c,f)||w_(c,f)<.62||__(c,f)<2.3||c<On.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let v=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,v,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Go.step,f=K0(c),l=Go.ri+.55+e()*(Go.ro-Go.ri-.75),v=.022+e()*.016;t.push([eo.x+Math.cos(f)*l,(a+1)*Go.rise,eo.z+Math.sin(f)*l,v,.05+e()*.14,e()*100])}}for(let a of sd)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[On.z0-.35,On.z1+.35])for(let s=0;s<9;s++){let i=On.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-eo.x,c-eo.z)>yo-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function k_(t){let o=q2(77),r=[];for(let n=0;n<14;n++){let a=t[Math.floor(o()*t.length)];r.push([a[0],a[1]+a[4],a[2]])}for(let n=0;n<12;n++){let a=r.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;r.forEach((l,v)=>{let d=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;d<f&&(f=d,c=v)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}r=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:r[i])}return r.filter(n=>n[3]>0).map(n=>[n[0],n[1]+.12,n[2],n[3]/t.length])}var id=M_(),D2=k_(id.filter(t=>t[1]<2||t[1]>2.5)).concat(sd.map(t=>[t[0],t[1]+.35,t[2],.035]));function F2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${D2.map((e,o)=>`
		{
			vec3 d = ${b_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${t0(5.3+o*.71)} + ${t0(o*1.9)}) + 0.06 * sin(time * ${t0(11.7+o*1.3)} + ${t0(o*.7)});
			float w = ${t0(e[3]*D2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${t0(b0)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${t0(eo.x)}, ${t0(b0)}, ${t0(eo.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${t0(Fl.stoolX)}, ${t0(Fl.keyFront+.1)})));
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
	}`}var fo={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function G2(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,r,n)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),v=t.v(n,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.tri=(e,o,r,n,a)=>{let s=t.v(e,n,a),i=t.v(o,n,a),c=t.v(r,n,a);t.idx.push(s,i,c)},t}function S_(){let t=G2(),e=(r,n,a)=>[eo.x+Math.cos(r)*n,a,eo.z+Math.sin(r)*n],o=r=>[Math.cos(r),0,Math.sin(r)];for(let n=0;n>On.x0-.01;n-=.25)for(let a=41.2;a<47.8;a+=.2){let s=n-.25,i=n,c=a,f=a+.2;if(!(vc(s,c)||vc(i,c)||vc(s,f)||vc(i,f)||vc((s+i)/2,(c+f)/2)))continue;let l=c,v=f;s>cs(Ae.z0)-.3&&(l=Math.max(l,Ae.z0),v=Math.min(v,Ae.z1),v<=l)||t.quad([s,0,l],[s,0,v],[i,0,v],[i,0,l],[0,1,0],fo.FLOOR)}{for(let n=0;n<360;n++){let a=n/360*2*Vo,s=(n+1)/360*2*Vo,i=(a+s)/2,c=e(i,yo,0),f=0;c[0]>eo.x&&c[2]>Ae.z0-.02&&c[2]<Ae.z1+.02&&(f=Math.max(Th(Math.min(Math.max(e(a,yo,0)[2],Ae.z0),Ae.z1)),Th(Math.min(Math.max(e(s,yo,0)[2],Ae.z0),Ae.z1)))),c[0]<eo.x&&c[2]>On.z0-.02&&c[2]<On.z1+.02&&(f=On.top);let l=a*yo,v=s*yo,d=o(a).map(h=>-h),p=o(s).map(h=>-h),u=[f];for(let h=Math.ceil(f/2.5)*2.5;h<b0;h+=2.5)h>f+.01&&u.push(h);u.push(b0);for(let h=0;h<u.length-1;h++){let g=u[h],m=u[h+1],x=t.v(e(a,yo,g),d,fo.WALL,[l,g]),y=t.v(e(s,yo,g),p,fo.WALL,[v,g]),b=t.v(e(s,yo,m),p,fo.WALL,[v,m]),M=t.v(e(a,yo,m),d,fo.WALL,[l,m]);t.idx.push(x,y,b,x,b,M)}}for(let[n,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*Vo,f=(i+1)/360*2*Vo,l=(c+f)/2,v=e(l,yo,0);if(n<1&&(v[0]>eo.x&&v[2]>Ae.z0&&v[2]<Ae.z1||v[0]<eo.x&&v[2]>On.z0&&v[2]<On.z1))continue;let d=yo-s;t.quad(e(c,d,n),e(f,d,n),e(f,d,n+a),e(c,d,n+a),o(l).map(p=>-p),fo.WALL,[[c*yo,n+100],[f*yo,n+100],[f*yo,n+a+100],[c*yo,n+a+100]]),t.quad(e(c,d,n+a),e(f,d,n+a),e(f,yo,n+a),e(c,yo,n+a),[0,1,0],fo.WALL,[[0,200],[0,200],[0,200],[0,200]]),n>1&&t.quad(e(c,yo,n),e(f,yo,n),e(f,d,n),e(c,d,n),[0,-1,0],fo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=xa.x;for(let[a,s]of[[Ae.z0,1],[Ae.z1,-1]]){let i=cs(a);t.quad([r,0,a],[i,0,a],[i,Ae.spring,a],[r,Ae.spring,a],[0,0,s],fo.WALL,[[r,0],[i,0],[i,Ae.spring],[r,Ae.spring]])}let n=40;for(let a=0;a<n;a++){let s=a/n*Vo,i=(a+1)/n*Vo,c=Ae.zc-Math.cos(s)*Ae.r,f=Ae.zc-Math.cos(i)*Ae.r,l=Ae.spring+Math.sin(s)*Ae.r,v=Ae.spring+Math.sin(i)*Ae.r,d=[0,-Math.sin(s),Math.cos(s)],p=[0,-Math.sin(i),Math.cos(i)],u=t.v([r,l,c],d,fo.WALL,[r,s*Ae.r]),h=t.v([cs(c),l,c],d,fo.WALL,[cs(c),s*Ae.r]),g=t.v([cs(f),v,f],p,fo.WALL,[cs(f),i*Ae.r]),m=t.v([r,v,f],p,fo.WALL,[r,i*Ae.r]);t.idx.push(u,h,g,u,g,m)}}{let r=xa.x,n=.05;for(let f=xa.z0;f<xa.z1-1e-6;f+=n){let l=f,v=Math.min(xa.z1,f+n),p=(u=>u>Ae.z0&&u<Ae.z1)((l+v)/2)?Math.max(Th(l),Th(v)):0;t.quad([r,p,l],[r,p,v],[r,xa.top,v],[r,xa.top,l],[1,0,0],fo.HALLSTONE,[[l,p],[v,p],[v,xa.top],[l,xa.top]])}let a=.32,s=.06,i=r+s,c=36;for(let f=0;f<c;f++){let l=f/c*Vo,v=(f+1)/c*Vo,d=(m,x)=>[i,Ae.spring+Math.sin(m)*x,Ae.zc-Math.cos(m)*x],p=Ae.r,u=Ae.r+a;t.quad(d(l,p),d(v,p),d(v,u),d(l,u),[1,0,0],fo.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let h=(m,x,y)=>[y,Ae.spring+Math.sin(m)*x,Ae.zc-Math.cos(m)*x],g=[0,Math.sin((l+v)/2),-Math.cos((l+v)/2)];t.quad(h(l,u,r),h(v,u,r),h(v,u,i),h(l,u,i),g,fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(h(l,p,r),h(v,p,r),h(v,p,i),h(l,p,i),g.map(m=>-m),fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,v]of[[Ae.z0-a,Ae.z0,-1],[Ae.z1,Ae.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,Ae.spring,l],[i,Ae.spring,f],[1,0,0],fo.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let d=v<0?f:l,p=v<0?l:f;t.quad([r,0,d],[i,0,d],[i,Ae.spring,d],[r,Ae.spring,d],[0,0,v],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,0,p],[i,0,p],[i,Ae.spring,p],[r,Ae.spring,p],[0,0,-v],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let u=Ae.spring-.16,h=.16,g=.11,m=Math.min(f,l)-.05,x=Math.max(f,l)+.05;t.quad([r+g,u,m],[r+g,u,x],[r+g,u+h,x],[r+g,u+h,m],[1,0,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,u+h,m],[r+g,u+h,m],[r+g,u+h,x],[r,u+h,x],[0,1,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,u,m],[r,u,x],[r+g,u,x],[r+g,u,m],[0,-1,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let y of[m,x])t.quad([r,u,y],[r+g,u,y],[r+g,u+h,y],[r,u+h,y],[0,0,y===m?-1:1],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=Ae.spring+Ae.r-.05,l=Ae.spring+Ae.r+a+.12,v=.16,d=.22,p=i+.04;t.quad([p,f,Ae.zc-v],[p,f,Ae.zc+v],[p,l,Ae.zc+d],[p,l,Ae.zc-d],[1,0,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let u of[-1,1])t.quad([r,f,Ae.zc+u*v],[p,f,Ae.zc+u*v],[p,l,Ae.zc+u*d],[r,l,Ae.zc+u*d],[0,0,u],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([r,l,Ae.zc-d],[p,l,Ae.zc-d],[p,l,Ae.zc+d],[r,l,Ae.zc+d],[0,1,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:r,x1:n,z0:a,z1:s,top:i}=On;t.quad([r,0,a],[r,0,s],[r,i,s],[r,i,a],[1,0,0],fo.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let v=eo.x-Math.sqrt(yo*yo-(f-eo.z)*(f-eo.z));t.quad([r,0,f],[v,0,f],[v,i,f],[r,i,f],[0,0,l],fo.WALL,[[r,0],[v,0],[v,i],[r,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,d=eo.x-Math.sqrt(yo*yo-(l-eo.z)**2),p=eo.x-Math.sqrt(yo*yo-(v-eo.z)**2);t.quad([r,i,l],[d,i,l],[p,i,v],[r,i,v],[0,-1,0],fo.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,d=eo.x-Math.sqrt(yo*yo-(l-eo.z)**2)+.05,p=eo.x-Math.sqrt(yo*yo-(v-eo.z)**2)+.05;t.quad([d,i-.3,l],[p,i-.3,v],[p,i,v],[d,i,l],[1,0,0],fo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=[1.15,1.6,2.3,3,3.35,4.2,yo];for(let a=0;a<120;a++){let s=a/120*2*Vo,i=(a+1)/120*2*Vo,c=(s+i)/2;c>Vo&&(c-=2*Vo);for(let f=0;f<n.length-1;f++){let l=n[f],v=n[f+1],d=c*180/Vo;l>=3.3&&d>8&&d<85||t.quad(e(s,l,b0),e(s,v,b0),e(i,v,b0),e(i,l,b0),[0,-1,0],fo.CEIL,[[s*l,l],[s*v,v],[i*v,v],[i*l,l]])}t.quad(e(s,1.15,b0),e(i,1.15,b0),e(i,1.15,b0+.7),e(s,1.15,b0+.7),o(c).map(f=>-f),fo.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([eo.x,b0+.7,eo.z],e(i,1.15,b0+.7),e(s,1.15,b0+.7),[0,-1,0],fo.OCULUS)}}{let r=Go.ri,n=Go.ro,a=Go.n*Go.step;for(let c=0;c<Go.n;c++){let f=c*Go.step,l=(c+1)*Go.step,v=K0(f),d=K0(l),p=(c+1)*Go.rise,u=c*Go.rise,h=2;for(let x=0;x<h;x++){let y=v+(d-v)*x/h-(x===0?.004:0),b=v+(d-v)*(x+1)/h;t.quad(e(y,r,p),e(y,n,p),e(b,n,p),e(b,r,p),[0,1,0],fo.STEP,[[r*y,c],[n*y,c],[n*b,c],[r*b,c]])}let g=[-Math.sin(v),0,Math.cos(v)],m=v-.004;t.quad(e(m,r,u),e(m,n,u),e(m,n,p),e(m,r,p),g,fo.STEP,[[r*v,c+.5],[n*v,c+.5],[n*v,c+.5],[r*v,c+.5]]),t.quad(e(v,r,ls(f)+.06),e(d,r,ls(l)+.06),e(d,r,p),e(m,r,p),o((v+d)/2).map(x=>-x),fo.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*Vo/180)),i=[r,r+.6,r+1.2,n];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,v=K0(f),d=K0(l),p=ls(f),u=ls(l),h=p-Go.thick,g=u-Go.thick,m=o(v).map(k=>-k),x=o(d).map(k=>-k),y=t.v(e(v,r,h),m,fo.STRING,[f*r,0]),b=t.v(e(d,r,g),x,fo.STRING,[l*r,0]),M=t.v(e(d,r,u+.06),x,fo.STRING,[l*r,1]),_=t.v(e(v,r,p+.06),m,fo.STRING,[f*r,1]);t.idx.push(y,b,M,y,M,_);for(let k=0;k<i.length-1;k++){let A=i[k],z=i[k+1],D=P=>{let G=o(P);return[-G[0]*.12,-.99,-G[2]*.12]};t.quad(e(v,A,h),e(v,z,h),e(d,z,g),e(d,A,g),D((v+d)/2),fo.SOFFIT,[[f*A,A],[f*z,z],[l*z,z],[l*A,A]])}}}return t}function E_(){let t=G2(),e=Go.ri+.045,o=Go.n*Go.step,r=Math.ceil(o/(.8*Vo/180)),n=.92,a=(c,f,l)=>[eo.x+Math.cos(c)*f,l,eo.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<r;c++){let f=c/r*o,l=(c+1)/r*o,v=K0(f),d=K0(l),p=ls(f)+.06,u=ls(l)+.06,h=s(v).map(k=>-k),g=s(d).map(k=>-k),m=f*e,x=l*e,y=t.v(a(v,e,p),h,fo.RAILING,[m,0]),b=t.v(a(d,e,u),g,fo.RAILING,[x,0]),M=t.v(a(d,e,u+n),g,fo.RAILING,[x,n]),_=t.v(a(v,e,p+n),h,fo.RAILING,[m,n]);t.idx.push(y,b,M,y,M,_)}((c,f,l,v)=>{let p=h=>{let g=K0(h),m=ls(h)+.06+f,x=a(g,e+c,m),y=s(g),b=[];for(let M=0;M<8;M++){let _=M/8*2*Vo,k=[y[0]*Math.cos(_),Math.sin(_),y[2]*Math.cos(_)];b.push([[x[0]+k[0]*l,x[1]+k[1]*l,x[2]+k[2]*l],k])}return b},u=p(0);for(let h=1;h<=r;h++){let g=p(h/r*o);for(let m=0;m<8;m++){let x=(m+1)%8,y=t.v(u[m][0],u[m][1],v),b=t.v(g[m][0],g[m][1],v),M=t.v(g[x][0],g[x][1],v),_=t.v(u[x][0],u[x][1],v);t.idx.push(y,b,M,y,M,_)}u=g}})(0,n+.02,.028,fo.IRON);for(let c of sd){let f=Math.atan2(c[2]-eo.z,c[0]-eo.x),l=[Math.cos(f),0,Math.sin(f)],v=12;for(let h=0;h<v;h++){let g=h/v*2*Vo,m=(h+1)/v*2*Vo,x=(y,b,M)=>[c[0]+Math.cos(y)*b,M,c[2]+Math.sin(y)*b];t.quad(x(g,.16,c[1]),x(m,.16,c[1]),x(m,.13,c[1]-.05),x(g,.13,c[1]-.05),[Math.cos(g)*.6,.8,Math.sin(g)*.6],fo.IRON),t.quad(x(g,.16,c[1]),x(m,.16,c[1]),x(m,0,c[1]+.002),x(g,0,c[1]+.002),[0,1,0],fo.IRON)}let d=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],p=[-l[2],0,l[0]],u=.018;t.quad([d[0]-p[0]*u,d[1],d[2]-p[2]*u],[d[0]+p[0]*u,d[1],d[2]+p[2]*u],[c[0]+p[0]*u,c[1]-.05,c[2]+p[2]*u],[c[0]-p[0]*u,c[1]-.05,c[2]-p[2]*u],[-l[0],.5,-l[2]],fo.IRON)}{let c=K0(0),f=a(c,e,0),l=10;for(let v=0;v<l;v++){let d=v/l*2*Vo,p=(v+1)/l*2*Vo,u=(h,g,m)=>[f[0]+Math.cos(h)*g,m,f[2]+Math.sin(h)*g];t.quad(u(d,.035,0),u(p,.035,0),u(p,.035,n+.1),u(d,.035,n+.1),[Math.cos((d+p)/2),0,Math.sin((d+p)/2)],fo.IRON),t.quad(u(d,.06,n+.1),u(p,.06,n+.1),u(p,.03,n+.2),u(d,.03,n+.2),[Math.cos((d+p)/2)*.8,.6,Math.sin((d+p)/2)*.8],fo.IRON)}}return t}function z_(){let t=[],e=[],o=[],r=[];for(let a of id){let[s,i,c,f,l,v]=a,d=t.length/3;for(let u=0;u<=7;u++){let h=u/7*2*Vo+v,g=Math.cos(h),m=Math.sin(h);t.push(s+g*f,i,c+m*f,s+g*f,i+l,c+m*f),e.push(g,0,m,g,0,m),o.push(0,l,v,1,l,v)}for(let u=0;u<7;u++){let h=d+u*2;r.push(h,h+2,h+3,h,h+3,h+1)}let p=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,v);for(let u=0;u<7;u++){let h=u/7*2*Vo+v;t.push(s+Math.cos(h)*f,i+l,c+Math.sin(h)*f),e.push(0,1,0),o.push(1,l,v)}for(let u=0;u<7;u++)r.push(p,p+1+u,p+1+(u+1)%7)}return{pos:t,nrm:e,info:o,idx:r}}function A_(){let t=[],e=[],o=[],r=[];for(let n of id){let[a,s,i,,c,f]=n,l=t.length/3;for(let v of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(v[0],v[1]),o.push(f);r.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:r}}function T_(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let m=0;m<3;m++)n.push(e.getFloat32(12+m*4,!0)),a.push(e.getFloat32(24+m*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),v=new Float32Array(o*3),d=new Float32Array(o*3),p=new Float32Array(o),u=Math.cos(mn.yaw),h=Math.sin(mn.yaw),g=mn.scale;for(let m=0;m<o;m++){let x=(n[0]+i[m*3]/65535*a[0])*g,y=(n[1]+i[m*3+1]/65535*a[1])*g,b=(n[2]+i[m*3+2]/65535*a[2])*g;v[m*3]=mn.x+u*x+h*b,v[m*3+1]=y,v[m*3+2]=mn.z-h*x+u*b;let M=f[m*3]/127,_=f[m*3+1]/127,k=f[m*3+2]/127;d[m*3]=u*M+h*k,d[m*3+1]=_,d[m*3+2]=-h*M+u*k,p[m]=l[m]}return{pos:v,nrm:d,mat:p,idx:new Uint32Array(c)}}function L_(){let t=[],e=(v,d)=>[eo.x+Math.cos(v)*d,eo.z+Math.sin(v)*d];t.push([[0,Ae.z0],[cs(Ae.z0),Ae.z0]]),t.push([[cs(Ae.z1),Ae.z1],[0,Ae.z1]]);let o=Math.asin((Ae.z1-eo.z)/yo),r=72;for(let v=0;v<r;v++){let d=o+v/r*(2*Vo-2*o),p=o+(v+1)/r*(2*Vo-2*o);t.push([e(d,yo-.25),e(p,yo-.25)])}let n=Nh[0]-.55+.35;t.push([[n,On.z0],[n,On.z1]]);let a=2.4/Go.k,s=12;for(let v=0;v<s;v++){let d=K0(v/s*a),p=K0((v+1)/s*a);t.push([e(d,Go.ri-.2),e(p,Go.ri-.2)])}t.push([e(K0(0),Go.ri-.2),e(K0(0),yo)]),t.push([e(K0(a),Go.ri-.2),e(K0(a),yo)]);let i=Math.cos(mn.yaw),c=Math.sin(mn.yaw),f=mn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([v,d])=>[mn.x+(i*v+c*d)*f,mn.z+(-c*v+i*d)*f]);for(let v=0;v<4;v++)t.push([l[v],l[(v+1)%4]]);return t}cr.exports=t=>{let e=S_(),o=E_(),r=z_(),n=A_(),a=is(),s=`
	precision highp float;
	${y_.GLSL}
	uniform float time;
	${F2()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${t0(b0)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${t0(eo.x)}, ${t0(eo.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${t0((Go.ri+Go.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${t0(eo.x)}, ${t0(eo.z)});
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
		}`,attributes:{position:r.pos,normal:r.nrm,info:r.info},elements:new Uint32Array(r.idx),cull:{enable:!1}}),v=t({vert:`
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
		}`,attributes:{ctr:n.ctr,corner:n.corner,ph:n.ph},elements:new Uint32Array(n.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=null;fetch("res/piano.bin").then(g=>{if(!g.ok)throw new Error("Could not load piano.bin");return g.arrayBuffer()}).then(g=>{let m=T_(g);d=t({vert:`
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
				}`,attributes:{position:m.pos,normal:m.nrm,mat:m.mat},elements:m.idx,cull:{enable:!1}})}).catch(g=>console.error(g));let p=(()=>{let g=[],m=[],x=[],y=[],M=[eo.x,b0-.3,eo.z],_=[Fl.stoolX,.02,Fl.keyFront+.1],k=1.25,A=2.35;for(let z=0;z<=40;z++){let D=z/40*2*Vo,P=Math.cos(D),G=Math.sin(D);g.push(M[0]+P*k,M[1],M[2]+G*k,_[0]+P*A,_[1],_[2]+G*A),m.push(P,.08,G,P,.08,G),x.push(1,0)}for(let z=0;z<40;z++){let D=z*2;y.push(D,D+1,D+3,D,D+3,D+2)}return{pos:g,nrm:m,hh:x,idx:y}})(),u=t({vert:`
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
		}`,attributes:{position:p.pos,normal:p.nrm,hh:p.hh},elements:p.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function h(g){let m=g&&g.reflected;c(),f(),l(),d&&d(),m||(u(),v({halo:1}),v({halo:0}))}return h};cr.exports.C=eo;cr.exports.R=yo;cr.exports.PASS=Ae;cr.exports.SURR=xa;cr.exports.OFF=Nh;cr.exports.BAY=On;cr.exports.PATH=Lh;cr.exports.PIANO=mn;cr.exports.PLAY=Fl;cr.exports.TOP=b0;cr.exports.roomGLSL=F2;cr.exports.segments=L_});var Q2=St((Ez,K2)=>{"use strict";var N_=Qs(),{addFlutedColumn:H2,addStatue:R_,addPlant:O_}=m2(),U2=rs(),C_=cc(),oa=A0(),P_=$r(),gc=fs(),Co=14,Pn=oa.C.hallEnd+.35,Zo=8,Bo=.35,cd=1.15,ld=1.15,fd=[18,29,40],I_=[[[0,0],[0,gc.PASS.z0]],[[0,gc.PASS.z1],[0,Pn]],[[Co,Pn],[Co,0]],[[0,0],[Co,0]],[[Co,Pn],[0,Pn]]],V2=[];for(let t of fd)for(let e of[1.25,Co-1.25]){let o=cd/2,r=ld/2;V2.push([[e-o,t-r],[e+o,t-r]],[[e+o,t-r],[e+o,t+r]],[[e+o,t+r],[e-o,t+r]],[[e-o,t+r],[e-o,t-r]])}var Oh=12,X2=2.95,Y2=.62,Ih=X2+Y2,Ch=[{file:"venus.bin",x:1.85,z:Pn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Co-2.1,z:Pn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:oa.NICHE_X[0],z:oa.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:oa.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:oa.NICHE_X[1],z:oa.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:oa.NICHE_PLINTH_TOP,mat:3}],$_={x0:Bo,x1:3.15,z0:3.6,z1:8.2,top:1},B2=.8,$h=1.17,Gl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{Gl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),Gl.push({x:Co-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function hd(t,e,o,r){return[[[t-o,e-r],[t+o,e-r]],[[t+o,e-r],[t+o,e+r]],[[t+o,e+r],[t-o,e+r]],[[t-o,e+r],[t-o,e-r]]]}var Dh=[];for(let t of[-1,1])Dh.push(...hd(Co/2+t*Ih,Oh,.85,.85));for(let t of Ch.filter(e=>e.pedestal))Dh.push(...hd(t.x,t.z,$h*1.1,$h*1.1));for(let t of Gl)Dh.push(...hd(t.x,t.z,.42,.42));var D_=I_.concat(V2,Dh,gc.segments());function q_(t){let o=new Map,r=(n,a,s)=>{let i=n+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let n of t){let a=Math.floor(Math.min(n[0][0],n[1][0])/4)-1,s=Math.floor(Math.max(n[0][0],n[1][0])/4)+1,i=Math.floor(Math.min(n[0][1],n[1][1])/4)-1,c=Math.floor(Math.max(n[0][1],n[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)r(f,l,n)}return{get(n,a){let s=Math.floor(n/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let v=o.get(s+f+":"+(i+l));v&&c.push(...v)}return[...new Set(c)]}}}var Ph=[],Cn={curMat:[0,0,0]};function ud(t,e,o,r,n,a,s){let i=t.length/3;t.push(...o,...r,...n,...a),e.push(...s,...s,...s,...s);let c=Cn.curMat;return Ph.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Ho(t,e,o,r,n,a,s,i,c){let f=(l,v,d,p,u)=>{o.push(...ud(t,e,l,v,d,p,u))};f([r,n,a],[s,n,a],[r,i,a],[s,i,a],[0,0,-1]),f([s,n,c],[r,n,c],[s,i,c],[r,i,c],[0,0,1]),f([r,n,c],[r,n,a],[r,i,c],[r,i,a],[-1,0,0]),f([s,n,a],[s,n,c],[s,i,a],[s,i,c],[1,0,0]),f([r,i,a],[s,i,a],[r,i,c],[s,i,c],[0,1,0]),f([r,n,c],[s,n,c],[r,n,a],[s,n,a],[0,-1,0])}function mc(t,e,o,r,n){let a=Cn,s=a.vert(t,n),i=a.vert(e,n),c=a.vert(o,n),f=a.vert(r,n);a.tri(s,i,c),a.tri(i,f,c)}function j2(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),v=Math.sin(c),d=Math.cos(f),p=Math.sin(f),u=[t+o*l,e+o*v],h=[t+o*d,e+o*p],g=[t+r*l,e+r*v],m=[t+r*d,e+r*p];mc([u[0],u[1],n],[h[0],h[1],n],[g[0],g[1],n],[m[0],m[1],n],[0,0,-1]),mc([u[0],u[1],a],[h[0],h[1],a],[g[0],g[1],a],[m[0],m[1],a],[0,0,1]);let x=(c+f)/2;mc([u[0],u[1],n],[h[0],h[1],n],[u[0],u[1],a],[h[0],h[1],a],[-Math.cos(x),-Math.sin(x),0]),mc([g[0],g[1],n],[m[0],m[1],n],[g[0],g[1],a],[m[0],m[1],a],[Math.cos(x),Math.sin(x),0])}}function F_(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),v=e+o*Math.sin(c),d=t+o*Math.cos(f),p=e+o*Math.sin(f);mc([l,v,n],[d,p,n],[l,r,n],[d,r,n],[0,0,-1]),mc([l,v,a],[d,p,a],[l,r,a],[d,r,a],[0,0,1])}}function G_(t,e,o,r){let n=Co/2,a=X2,s=3,i=a+.42,c=i+.15,f=Y2,l=Ih,v=5.98,d=r-.45,p=r+.45,u=64,h=H2(Cn,n-l,r,0,v,f);H2(Cn,n+l,r,0,v,f),Cn.curMat=[0,0,0],j2(n,s,a,i,d,p,u),j2(n,s,i,c,d-.07,p+.07,u),F_(n,s,c,h+.05,d,p,u);for(let m of[-1,1]){let x=n+m*(c-.02),y=n+m*l;Ho(t,e,o,Math.min(x,y),s,d,Math.max(x,y),h+.05,p)}for(let m of[-1,1]){let x=n+m*(a-.05),y=n+m*(a+.85);Ho(t,e,o,Math.min(x,y),s-.16,r-.6,Math.max(x,y),s,r+.6)}let g=l+f*1.42+.45;Ho(t,e,o,n-g,h,r-.7,n+g,h+.44,r+.7),Ho(t,e,o,n-g+.12,h+.44,r-.62,n+g-.12,h+.7,r+.62),Ho(t,e,o,n-g-.1,h+.7,r-.84,n+g+.1,h+.84,r+.84),Ho(t,e,o,n-g-.22,h+.84,r-.96,n+g+.22,h+1,r+.96),Ho(t,e,o,n-.3,s+a-.1,r-.56,n+.3,h,r+.56)}function W2(t,e,o,r,n){Ho(t,e,o,r-.72,0,n-.72,r+.72,.2,n+.72),Ho(t,e,o,r-.58,.2,n-.58,r+.58,.4,n+.58),Ho(t,e,o,r-cd/2,.4,n-ld/2,r+cd/2,Zo-1.35,n+ld/2),Ho(t,e,o,r-.67,.42,n-.67,r+.67,.62,n+.67),Ho(t,e,o,r-.67,Zo-1.58,n-.67,r+.67,Zo-1.35,n+.67),Ho(t,e,o,r-.82,Zo-1.35,n-.82,r+.82,Zo-1.05,n+.82),Ho(t,e,o,r-.66,Zo-1.05,n-.66,r+.66,Zo-.78,n+.66),Ho(t,e,o,r-.92,Zo-.78,n-.92,r+.92,Zo-.55,n+.92),Ho(t,e,o,r-.78,Zo-.55,n-.78,r+.78,Zo-.3,n+.78),Ho(t,e,o,r-.92,Zo-.3,n-.92,r+.92,Zo-.1,n+.92)}function Rh(t,e,o,r,n){n==="left"?(Ho(t,e,o,-.08,1,r-3.8/2,.14,5.7,r+3.8/2),Ho(t,e,o,-.08-.04,1+.18,r-3.8/2+.18,.18,5.7-.18,r+3.8/2-.18)):(Ho(t,e,o,Co-.14,1,r-3.8/2,Co+.08,5.7,r+3.8/2),Ho(t,e,o,Co-.18,1+.18,r-3.8/2+.18,Co+.08+.04,5.7-.18,r+3.8/2-.18))}function H_(t,e,o,r){Ho(t,e,o,.65,Zo-.16,r-1.65,.65+.22,Zo,r+1.65),Ho(t,e,o,Co-.65-.22,Zo-.16,r-1.65,Co-.65,Zo,r+1.65),Ho(t,e,o,.65,Zo-.16,r-1.65,Co-.65,Zo,r-1.43),Ho(t,e,o,.65,Zo-.16,r+1.43,Co-.65,Zo,r+1.65),o.push(...ud(t,e,[.65+.22,Zo-.16,r-1.43],[Co-.65-.22,Zo-.16,r-1.43],[.65+.22,Zo-.16,r+1.43],[Co-.65-.22,Zo-.16,r+1.43],[0,-1,0]))}K2.exports=function(){let t=[],e=[],o=[];Ph=[],Cn=N_.createBuilder(t,e,o,Ph),o.push(...ud(t,e,[0,0,0],[Co,0,0],[0,0,Pn],[Co,0,Pn],[0,1,0])),C_.addSkylight(Cn,[0,0,0],Pn),Cn.curMat=[0,0,0];{let c=gc.SURR;Ho(t,e,o,-Bo,0,0,Bo,Zo,c.z0),Ho(t,e,o,-Bo,0,c.z1,Bo,Zo,Pn),Ho(t,e,o,-Bo,c.top,c.z0,Bo,Zo,c.z1)}Ho(t,e,o,Co-Bo,0,oa.C.z1,Co+Bo,Zo,Pn-Bo),Ho(t,e,o,Co-Bo-.12,0,oa.C.z1+2*Bo,Co-Bo,.42,Pn-Bo),Ho(t,e,o,Co-Bo-.07,.42,oa.C.z1+2*Bo,Co-Bo,.5,Pn-Bo);for(let[c,f]of[[0,gc.SURR.z0],[gc.SURR.z1,Pn-Bo]])Ho(t,e,o,Bo,0,c,Bo+.12,.42,f),Ho(t,e,o,Bo,.42,c,Bo+.07,.5,f);Ho(t,e,o,Bo,0,Pn-Bo-.12,Co-Bo,.42,Pn-Bo),Ho(t,e,o,Bo,.42,Pn-Bo-.07,Co-Bo,.5,Pn-Bo),U2.addEntranceWall(Cn),U2.addFrames(Cn),Cn.curMat=[0,0,0],Ho(t,e,o,-Bo,0,Pn-Bo,Co+Bo,Zo,Pn+Bo),G_(t,e,o,Oh);for(let c of fd)W2(t,e,o,1.25,c),W2(t,e,o,Co-1.25,c);Rh(t,e,o,22,"left"),Rh(t,e,o,25,"right"),Rh(t,e,o,33,"left"),Rh(t,e,o,36,"right");let r=[4,9,34,39,44,49];for(let c of r)H_(t,e,o,c);oa.addWing(Cn),Cn.curMat=[0,0,0];for(let c of Ch.filter(f=>f.pedestal))R_(Cn,c.x,c.z,$h,B2);{let c=$_;Cn.curMat=[0,0,0],Cn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Cn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Cn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Cn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}P_.addAlcove(Cn);for(let c of Gl)O_(Cn,c.x,c.z,c.seed,1,c.away);Cn.curMat=[0,0,0];let n=[[[Co,Pn-.35],[0,Pn-.35]],[[0,3],[0,10]],[[Co,15],[Co,22]],[[0,24],[0,31]],[[Co,33],[Co,40]],[[0,41],[0,46]]],a=q_(D_),s=(c,f)=>{let l=0,v=1/0;return n.forEach((d,p)=>{let u=(d[0][0]+d[1][0])/2,h=(d[0][1]+d[1][1])/2,g=Math.hypot(c-u,f-h);g<v&&(v=g,l=p)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:n,lights:i,statues:Ch,occluders:[...fd.flatMap(c=>[[1.25,c,.78],[Co-1.25,c,.78]]),[Co/2-Ih,Oh,.86],[Co/2+Ih,Oh,.86],...Ch.filter(c=>c.pedestal).map(c=>[c.x,c.z,$h*1.12]),...Gl.map(c=>[c.x,c.z,.34])],pedestalTop:B2,mat:Ph,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var dd=St((zz,Z2)=>{"use strict";var{doorLightGLSL:U_}=rs(),{skylightGLSL:B_}=cc(),{windowLightGLSL:j_,C:br}=A0(),{alcoveLightGLSL:W_}=$r(),Dr=t=>t.toFixed(4),V_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();Z2.exports=(t,e,o,r)=>{let a=(e.occluders||[]).slice(0,24).map(([p,u,h])=>`ao = min(ao, contact(v_pos.xz, vec2(${p.toFixed(3)}, ${u.toFixed(3)}), ${h.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=p=>{let u=p&&p.tick!==void 0?p.tick:0;if(u!==i||c.length===0){i=u;let h=e.viewer||[7,2,20];for(c=e.lights.filter(g=>g.c[3]>.5).map(g=>({l:g,d:Math.hypot(g.c[0]-h[0],g.c[2]-h[2])})).sort((g,m)=>g.d-m.d).slice(0,8).map(g=>g.l);c.length<8;)c.push(s)}return c},l={},v="",d="";for(let p=0;p<8;p++)l["lightC"+p]=u=>f(u)[p].c,l["lightD"+p]=u=>f(u)[p].d,v+="uniform vec4 lightC"+p+", lightD"+p+`;
`,d+="pic += pictureLight(lightC"+p+", lightD"+p+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${is().lanternGLSL()}

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

    ${U_()}

    ${B_()}

    ${j_()}

    ${W_()}

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
        step(abs(v_pos.z - ${Dr(br.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Dr((br.z0+br.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      ${d}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Dr(br.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${V_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Dr(br.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Dr(br.z0)} || v_pos.z > ${Dr(br.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Dr(br.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Dr(br.z0)}), ${Dr(br.z1)} - v_pos.z), ${Dr(br.x1)} - v_pos.x);
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
        if (v_pos.z < ${Dr(br.z0+.3)} && v_pos.x > ${Dr(br.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:r?t.prop("offset"):0,count:r?t.prop("count"):e.elements.length})}});var t3=St((Az,J2)=>{"strict mode";var X_="https://api.artic.edu/api/v1/artworks/search",Y_=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,K_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",Q_="&fields=image_id,title,artist_title",Z_={low:400,mid:843,high:1686};J2.exports={fetchList:async function(t,e){let o=X_+K_+Q_+`&from=${t}&size=${e}`;return(await fetch(o).then(n=>n.json())).data.filter(n=>n.image_id)},fetchImage:async function(t,e){let o=Y_(t,Z_[e]),r=await fetch(o).then(n=>n.blob());return{title:t.title+" - "+t.artist_title,image:r}}}});var n3=St((Tz,o3)=>{"use strict";var J_=Pu(),tM=Cr(),eM=t=>"images/web/"+t.slug+(tM.isPhone?"-1024":"")+".webp";async function e3(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}o3.exports={fetchList:async function(t,e){return J_.slice(t,t+e).map((o,r)=>({...o,image_id:t+r}))},fetchImage:async function(t){let e;try{e=await e3(eM(t))}catch(o){e=await e3("images/"+t.file)}return{title:t.title,image:e}}}});var a3=St((Lz,r3)=>{"strict mode";r3.exports={default:"local",artic:t3(),local:n3()}});var vd=St((Nz,i3)=>{"strict mode";var oi=document.createElement("canvas"),pd=oi.width=oi.height=1024,hs=oi.getContext("2d");hs.mozImageSmoothingEnabled=!1;hs.webkitImageSmoothingEnabled=!1;hs.font="32px Verdana";hs.textBaseline="bottom";hs.fillStyle="#aaa";function s3(t,e,o,r){var n=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(n).width>o&&f>1;){f--,n=a="";for(var v=0;v<l;v++)v<f?(n+=c[v],v+1<f&&(n+=" ")):(a+=c[v],v+1<l&&(a+=" "))}return r.push(n),i=t.measureText(n).width,a&&(s=s3(t,a,o,r),s>i&&(i=s)),i}i3.exports={init(t,e,o=pd){var r=[];s3(hs,e,Math.min(o*pd,pd),r),hs.clearRect(0,0,oi.width,oi.height);for(var n=0;n<r.length;n++)hs.fillText(r[n],0,oi.height-(Math.max(r.length,3)-n)*32);return t({data:oi,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var f3=St((Rz,l3)=>{"strict mode";var md=a3(),oM=new URLSearchParams(window.location.search).get("api"),c3=md[oM]||md[md.default],nM=vd(),gd={},yc=[],rM=2;function aM(t){return(!navigator.connection||navigator.connection.downlink<rM)&&(t=t=="high"?"mid":"low"),t}var sM=Cr(),xc=document.createElement("canvas");xc.width=xc.height=sM.isPhone?1024:2048;var bd=xc.getContext("2d");bd.imageSmoothingEnabled=!0;bd.imageSmoothingQuality="high";var xd=!1,iM=t=>[(yc.pop()||t.texture)([[[200,200,200]]]),e=>(yc.pop()||t.texture)([[[0,0,0,0]]]),1];async function yd(t,e,o){xd===!1&&(xd=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let r,n;try{let a=await c3.fetchImage(e,aM(o));n=a.title,r=await createImageBitmap(a.image),bd.drawImage(r,0,0,xc.width,xc.height)}catch(a){return console.error(a),o=="high"?await yd(t,e,"low"):iM(t)}return[(yc.pop()||t.texture)({data:xc,min:"mipmap",mipmap:"nice",aniso:xd,flipY:!0}),a=>nM.init(yc.pop()||t.texture,n,a),r.width/r.height]}l3.exports={fetch:(t,e=10,o="low",r,n)=>{let a=Object.keys(gd).length;c3.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(gd[i.image_id]){--e===0&&n();return}gd[i.image_id]=i,yd(t,i,o).then(([c,f,l])=>{r({...i,tex:c,textGen:f,aspect:l}),--e===0&&n()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,yd(t,e,o).then(([r,n])=>{e.loading=!1,e.tex=r,e.text=n(e.width)}))},unload:t=>{t.tex&&(yc.push(t.tex),t.tex=void 0),t.text&&(yc.push(t.text),t.text=void 0)}}});var u3=St((Oz,h3)=>{h3.exports=cM;function cM(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var p3=St((Cz,d3)=>{d3.exports=lM;function lM(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var m3=St((Pz,v3)=>{v3.exports=fM;function fM(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var wd=St((Iz,g3)=>{g3.exports=hM;function hM(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var y3=St(($z,x3)=>{x3.exports=uM;function uM(t,e){if(t===e){var o=e[1],r=e[2],n=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=a,t[11]=e[14],t[12]=n,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var w3=St((Dz,b3)=>{b3.exports=dM;function dM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],d=e[10],p=e[11],u=e[12],h=e[13],g=e[14],m=e[15],x=o*i-r*s,y=o*c-n*s,b=o*f-a*s,M=r*c-n*i,_=r*f-a*i,k=n*f-a*c,A=l*h-v*u,z=l*g-d*u,D=l*m-p*u,P=v*g-d*h,G=v*m-p*h,I=d*m-p*g,H=x*I-y*G+b*P+M*D-_*z+k*A;return H?(H=1/H,t[0]=(i*I-c*G+f*P)*H,t[1]=(n*G-r*I-a*P)*H,t[2]=(h*k-g*_+m*M)*H,t[3]=(d*_-v*k-p*M)*H,t[4]=(c*D-s*I-f*z)*H,t[5]=(o*I-n*D+a*z)*H,t[6]=(g*b-u*k-m*y)*H,t[7]=(l*k-d*b+p*y)*H,t[8]=(s*G-i*D+f*A)*H,t[9]=(r*D-o*G-a*A)*H,t[10]=(u*_-h*b+m*x)*H,t[11]=(v*b-l*_-p*x)*H,t[12]=(i*z-s*P-c*A)*H,t[13]=(o*P-r*z+n*A)*H,t[14]=(h*y-u*M-g*x)*H,t[15]=(l*M-v*y+d*x)*H,t):null}});var M3=St((qz,_3)=>{_3.exports=pM;function pM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],d=e[10],p=e[11],u=e[12],h=e[13],g=e[14],m=e[15];return t[0]=i*(d*m-p*g)-v*(c*m-f*g)+h*(c*p-f*d),t[1]=-(r*(d*m-p*g)-v*(n*m-a*g)+h*(n*p-a*d)),t[2]=r*(c*m-f*g)-i*(n*m-a*g)+h*(n*f-a*c),t[3]=-(r*(c*p-f*d)-i*(n*p-a*d)+v*(n*f-a*c)),t[4]=-(s*(d*m-p*g)-l*(c*m-f*g)+u*(c*p-f*d)),t[5]=o*(d*m-p*g)-l*(n*m-a*g)+u*(n*p-a*d),t[6]=-(o*(c*m-f*g)-s*(n*m-a*g)+u*(n*f-a*c)),t[7]=o*(c*p-f*d)-s*(n*p-a*d)+l*(n*f-a*c),t[8]=s*(v*m-p*h)-l*(i*m-f*h)+u*(i*p-f*v),t[9]=-(o*(v*m-p*h)-l*(r*m-a*h)+u*(r*p-a*v)),t[10]=o*(i*m-f*h)-s*(r*m-a*h)+u*(r*f-a*i),t[11]=-(o*(i*p-f*v)-s*(r*p-a*v)+l*(r*f-a*i)),t[12]=-(s*(v*g-d*h)-l*(i*g-c*h)+u*(i*d-c*v)),t[13]=o*(v*g-d*h)-l*(r*g-n*h)+u*(r*d-n*v),t[14]=-(o*(i*g-c*h)-s*(r*g-n*h)+u*(r*c-n*i)),t[15]=o*(i*d-c*v)-s*(r*d-n*v)+l*(r*c-n*i),t}});var S3=St((Fz,k3)=>{k3.exports=vM;function vM(t){var e=t[0],o=t[1],r=t[2],n=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],v=t[10],d=t[11],p=t[12],u=t[13],h=t[14],g=t[15],m=e*s-o*a,x=e*i-r*a,y=e*c-n*a,b=o*i-r*s,M=o*c-n*s,_=r*c-n*i,k=f*u-l*p,A=f*h-v*p,z=f*g-d*p,D=l*h-v*u,P=l*g-d*u,G=v*g-d*h;return m*G-x*P+y*D+b*z-M*A+_*k}});var z3=St((Gz,E3)=>{E3.exports=mM;function mM(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],v=e[8],d=e[9],p=e[10],u=e[11],h=e[12],g=e[13],m=e[14],x=e[15],y=o[0],b=o[1],M=o[2],_=o[3];return t[0]=y*r+b*i+M*v+_*h,t[1]=y*n+b*c+M*d+_*g,t[2]=y*a+b*f+M*p+_*m,t[3]=y*s+b*l+M*u+_*x,y=o[4],b=o[5],M=o[6],_=o[7],t[4]=y*r+b*i+M*v+_*h,t[5]=y*n+b*c+M*d+_*g,t[6]=y*a+b*f+M*p+_*m,t[7]=y*s+b*l+M*u+_*x,y=o[8],b=o[9],M=o[10],_=o[11],t[8]=y*r+b*i+M*v+_*h,t[9]=y*n+b*c+M*d+_*g,t[10]=y*a+b*f+M*p+_*m,t[11]=y*s+b*l+M*u+_*x,y=o[12],b=o[13],M=o[14],_=o[15],t[12]=y*r+b*i+M*v+_*h,t[13]=y*n+b*c+M*d+_*g,t[14]=y*a+b*f+M*p+_*m,t[15]=y*s+b*l+M*u+_*x,t}});var T3=St((Hz,A3)=>{A3.exports=gM;function gM(t,e,o){var r=o[0],n=o[1],a=o[2],s,i,c,f,l,v,d,p,u,h,g,m;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*a+e[12],t[13]=e[1]*r+e[5]*n+e[9]*a+e[13],t[14]=e[2]*r+e[6]*n+e[10]*a+e[14],t[15]=e[3]*r+e[7]*n+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],v=e[5],d=e[6],p=e[7],u=e[8],h=e[9],g=e[10],m=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=v,t[6]=d,t[7]=p,t[8]=u,t[9]=h,t[10]=g,t[11]=m,t[12]=s*r+l*n+u*a+e[12],t[13]=i*r+v*n+h*a+e[13],t[14]=c*r+d*n+g*a+e[14],t[15]=f*r+p*n+m*a+e[15]),t}});var N3=St((Uz,L3)=>{L3.exports=xM;function xM(t,e,o){var r=o[0],n=o[1],a=o[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var O3=St((Bz,R3)=>{R3.exports=yM;function yM(t,e,o,r){var n=r[0],a=r[1],s=r[2],i=Math.sqrt(n*n+a*a+s*s),c,f,l,v,d,p,u,h,g,m,x,y,b,M,_,k,A,z,D,P,G,I,H,ft;return Math.abs(i)<1e-6?null:(i=1/i,n*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,v=e[0],d=e[1],p=e[2],u=e[3],h=e[4],g=e[5],m=e[6],x=e[7],y=e[8],b=e[9],M=e[10],_=e[11],k=n*n*l+f,A=a*n*l+s*c,z=s*n*l-a*c,D=n*a*l-s*c,P=a*a*l+f,G=s*a*l+n*c,I=n*s*l+a*c,H=a*s*l-n*c,ft=s*s*l+f,t[0]=v*k+h*A+y*z,t[1]=d*k+g*A+b*z,t[2]=p*k+m*A+M*z,t[3]=u*k+x*A+_*z,t[4]=v*D+h*P+y*G,t[5]=d*D+g*P+b*G,t[6]=p*D+m*P+M*G,t[7]=u*D+x*P+_*G,t[8]=v*I+h*H+y*ft,t[9]=d*I+g*H+b*ft,t[10]=p*I+m*H+M*ft,t[11]=u*I+x*H+_*ft,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var P3=St((jz,C3)=>{C3.exports=bM;function bM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],v=e[10],d=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*n+f*r,t[5]=s*n+l*r,t[6]=i*n+v*r,t[7]=c*n+d*r,t[8]=f*n-a*r,t[9]=l*n-s*r,t[10]=v*n-i*r,t[11]=d*n-c*r,t}});var $3=St((Wz,I3)=>{I3.exports=wM;function wM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],v=e[10],d=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n-f*r,t[1]=s*n-l*r,t[2]=i*n-v*r,t[3]=c*n-d*r,t[8]=a*r+f*n,t[9]=s*r+l*n,t[10]=i*r+v*n,t[11]=c*r+d*n,t}});var q3=St((Vz,D3)=>{D3.exports=_M;function _M(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],v=e[6],d=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n+f*r,t[1]=s*n+l*r,t[2]=i*n+v*r,t[3]=c*n+d*r,t[4]=f*n-a*r,t[5]=l*n-s*r,t[6]=v*n-i*r,t[7]=d*n-c*r,t}});var G3=St((Xz,F3)=>{F3.exports=MM;function MM(t,e,o){var r,n,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,r=Math.sin(e),n=Math.cos(e),a=1-n,t[0]=s*s*a+n,t[1]=i*s*a+c*r,t[2]=c*s*a-i*r,t[3]=0,t[4]=s*i*a-c*r,t[5]=i*i*a+n,t[6]=c*i*a+s*r,t[7]=0,t[8]=s*c*a+i*r,t[9]=i*c*a-s*r,t[10]=c*c*a+n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var U3=St((Yz,H3)=>{H3.exports=kM;function kM(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=r+r,c=n+n,f=a+a,l=r*i,v=r*c,d=r*f,p=n*c,u=n*f,h=a*f,g=s*i,m=s*c,x=s*f;return t[0]=1-(p+h),t[1]=v+x,t[2]=d-m,t[3]=0,t[4]=v-x,t[5]=1-(l+h),t[6]=u+g,t[7]=0,t[8]=d+m,t[9]=u-g,t[10]=1-(l+p),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var j3=St((Kz,B3)=>{B3.exports=SM;function SM(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var V3=St((Qz,W3)=>{W3.exports=EM;function EM(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var Y3=St((Zz,X3)=>{X3.exports=zM;function zM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Q3=St((Jz,K3)=>{K3.exports=AM;function AM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var J3=St((tA,Z3)=>{Z3.exports=TM;function TM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var eg=St((eA,tg)=>{tg.exports=LM;function LM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=o+o,i=r+r,c=n+n,f=o*s,l=r*s,v=r*i,d=n*s,p=n*i,u=n*c,h=a*s,g=a*i,m=a*c;return t[0]=1-v-u,t[1]=l+m,t[2]=d-g,t[3]=0,t[4]=l-m,t[5]=1-f-u,t[6]=p+h,t[7]=0,t[8]=d+g,t[9]=p-h,t[10]=1-f-v,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var ng=St((oA,og)=>{og.exports=NM;function NM(t,e,o,r,n,a,s){var i=1/(o-e),c=1/(n-r),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(n+r)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var ag=St((nA,rg)=>{rg.exports=RM;function RM(t,e,o,r,n){var a=1/Math.tan(e/2),s=1/(r-n);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*s,t[15]=0,t}});var ig=St((rA,sg)=>{sg.exports=OM;function OM(t,e,o,r){var n=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(n+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(n-a)*f*.5,t[10]=r/(o-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*o/(o-r),t[15]=0,t}});var lg=St((aA,cg)=>{cg.exports=CM;function CM(t,e,o,r,n,a,s){var i=1/(e-o),c=1/(r-n),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(n+r)*c,t[14]=(s+a)*f,t[15]=1,t}});var hg=St((sA,fg)=>{var PM=wd();fg.exports=IM;function IM(t,e,o,r){var n,a,s,i,c,f,l,v,d,p,u=e[0],h=e[1],g=e[2],m=r[0],x=r[1],y=r[2],b=o[0],M=o[1],_=o[2];return Math.abs(u-b)<1e-6&&Math.abs(h-M)<1e-6&&Math.abs(g-_)<1e-6?PM(t):(l=u-b,v=h-M,d=g-_,p=1/Math.sqrt(l*l+v*v+d*d),l*=p,v*=p,d*=p,n=x*d-y*v,a=y*l-m*d,s=m*v-x*l,p=Math.sqrt(n*n+a*a+s*s),p?(p=1/p,n*=p,a*=p,s*=p):(n=0,a=0,s=0),i=v*s-d*a,c=d*n-l*s,f=l*a-v*n,p=Math.sqrt(i*i+c*c+f*f),p?(p=1/p,i*=p,c*=p,f*=p):(i=0,c=0,f=0),t[0]=n,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=v,t[7]=0,t[8]=s,t[9]=f,t[10]=d,t[11]=0,t[12]=-(n*u+a*h+s*g),t[13]=-(i*u+c*h+f*g),t[14]=-(l*u+v*h+d*g),t[15]=1,t)}});var dg=St((iA,ug)=>{ug.exports=$M;function $M(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var bc=St((cA,pg)=>{pg.exports={create:u3(),clone:p3(),copy:m3(),identity:wd(),transpose:y3(),invert:w3(),adjoint:M3(),determinant:S3(),multiply:z3(),translate:T3(),scale:N3(),rotate:O3(),rotateX:P3(),rotateY:$3(),rotateZ:q3(),fromRotation:G3(),fromRotationTranslation:U3(),fromScaling:j3(),fromTranslation:V3(),fromXRotation:Y3(),fromYRotation:Q3(),fromZRotation:J3(),fromQuat:eg(),frustum:ng(),perspective:ag(),perspectiveFromFieldOfView:ig(),ortho:lg(),lookAt:hg(),str:dg()}});var gg=St((lA,mg)=>{"use strict";var vg=f3(),zn=bc(),ni=A0(),DM=3e3,qh="high",_d,Ul=.36,Bl=13.64,wc=ni.C.hallEnd-.01,jl=ni.C.z0+.01,qM=.356,FM=13.644,GM=ni.C.hallEnd-.006,HM=ni.C.z0+.006,UM=.12,Gh=4,_c=t=>T0[t]&&T0[t].cy||Gh,Md=.26,BM=5.6,jM=7,T0=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:wc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:ni.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ni.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ni.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function WM(t,e){let o=e&&e.maxH||BM,r=e&&e.maxW||jM,n=Math.min(o,r/t);return{width:n*t,height:n}}function VM(t,e,o){let r=T0[o],n=[],a=_c(o)-e/2;return r.side==="left"?(zn.fromTranslation(n,[Ul,a,r.z+t/2]),zn.rotateY(n,n,Math.PI/2)):r.side==="right"?(zn.fromTranslation(n,[Bl,a,r.z-t/2]),zn.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?zn.fromTranslation(n,[r.x-t/2,a,jl]):(zn.fromTranslation(n,[7+t/2,a,wc]),zn.rotateY(n,n,Math.PI)),zn.scale(n,n,[t,e,UM]),n}function XM(t,e,o){let r=T0[o],n=[],a=_c(o)-e/2;return r.side==="left"?(zn.fromTranslation(n,[Ul,a,r.z+t/2]),zn.rotateY(n,n,Math.PI/2)):r.side==="right"?(zn.fromTranslation(n,[Bl,a,r.z-t/2]),zn.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?zn.fromTranslation(n,[r.x-t/2,a,jl]):(zn.fromTranslation(n,[7+t/2,a,wc]),zn.rotateY(n,n,Math.PI)),n}function YM(t,e,o){let r=T0[o],n=[],a=_c(o)-e/2-Md-.38;return r.side==="left"?(zn.fromTranslation(n,[qM,a,r.z+t/2]),zn.rotateY(n,n,Math.PI/2)):r.side==="right"?(zn.fromTranslation(n,[FM,a,r.z-t/2]),zn.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?zn.fromTranslation(n,[r.x-t/2,a,HM]):(zn.fromTranslation(n,[7+t/2,a,GM]),zn.rotateY(n,n,Math.PI)),zn.scale(n,n,[2,2,2]),n}function KM(t,e,o){let r=T0[o],n=_c(o)-e/2-Md-.38;return r.side==="left"?[Ul+.55,n,r.z]:r.side==="right"?[Bl-.55,n,r.z]:r.side==="corridor"?[r.x,n,jl+.55]:[7,n,wc-.55]}var Hl=.42;function Fh(t,e,o,r,n,a){return[e[0]*r,e[1]*r,e[2]*r,0,0,n,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function QM(t,e,o){let r=T0[o],n,a,s;r.side==="left"?(n=[Ul,r.z],a=[0,0,1],s=[1,0,0]):r.side==="right"?(n=[Bl,r.z],a=[0,0,1],s=[-1,0,0]):r.side==="corridor"?(n=[r.x,jl],a=[1,0,0],s=[0,0,1]):(n=[7,wc],a=[1,0,0],s=[0,0,-1]);let i=_c(o)+e/2+Md+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(p,u)=>[n[0]+s[0]*p,u,n[1]+s[2]*p],l=[.075,.062,.05],v=[{fixmodel:Fh(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Fh(f(Hl/2,i),a,s,.02,.02,Hl),fixcol:l,fixglow:0},{fixmodel:Fh(f(Hl,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Fh(f(Hl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],d=f(Hl,i-.02);return{fixtures:v,light:{c:[d[0],d[1],d[2],1],d:[a[0],a[1],a[2],c/2]}}}mg.exports=(t,e)=>{let o=[],r=[],n=a=>{let s=a.image_id;if(!T0[s])return;let{width:i,height:c}=WM(a.aspect,T0[s]),f=QM(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:T0[s].side,model:VM(i,c,s),framemodel:XM(i,c,s),framesize:[i,c],textmodel:YM(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:KM(i,c,s),paintingPosition:T0[s].side==="left"?[Ul+.05,Gh,T0[s].z]:T0[s].side==="right"?[Bl-.05,Gh,T0[s].z]:T0[s].side==="corridor"?[T0[s].x,_c(s),jl+.05]:[7,Gh,wc-.05],textGen:null})};return vg.fetch(t,T0.length,qh,n,()=>{}),{update:()=>{r=o,r.forEach(a=>{vg.load(t,a,qh)}),qh="low",_d&&clearTimeout(_d),_d=setTimeout(()=>{qh="high"},DM)},batch:()=>r,interactables:()=>r.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var wg=St((fA,bg)=>{"use strict";var ZM=vd(),xg=Cr(),yg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function JM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];yg.forEach(([r,n])=>{t.forEach(([a,s])=>e.push([a,s,r,n]))});let o=[];for(let r=0;r<yg.length-1;r++)for(let n=0;n<4;n++){let a=(n+1)%4,s=r*4+n,i=r*4+a,c=(r+1)*4+n,f=(r+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var t8=`#extension GL_OES_standard_derivatives : enable
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
}`,e8=`
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
}`;bg.exports=t=>{let e=ZM.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	${is().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(xg.isPhone?1024:2048),detail:()=>xg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),r=JM(),n=t({frag:t8,vert:e8,attributes:{prof:r.verts},elements:r.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),n(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var ii=St((uA,L0)=>{"use strict";var Te=Math.PI,ct=t=>(+t).toFixed(4),de=[-90,0,0],Gt=16,Re=22,ho=7.8,_r=11.6,w0=.55,Mr=(_r-ho)/(Gt/2),ye={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};ye.top=ye.spring+ye.hw;var Q0={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Fa={rafter:Re/12,rafterW:.1,purlin:1,purlinW:.07},Sc=[5.5,11,16.5],Lo={cx:Gt/2,hw:1.12,spring:3.95,pier:1.05,face:Re-1.45,back:Re-.2,floor:.66,top:6.55};Lo.x0=Lo.cx-Lo.hw-Lo.pier;Lo.x1=Lo.cx+Lo.hw+Lo.pier;var dt={x0:Gt/2-1.7,x1:Gt/2+1.7,z0:Re-Lo.face+.44,z1:Re-8.2,curb:.5,top:.36},to={cx:Gt/2,cz:18.1,ri:1.66,ro:2.06,top:6,hw:.84,spring:3.4,cornice:4.85,cloth:2.6,gap:.92},_g=[.647,.614,.279,-.154,-.322,-.191,-.012,.041,-.087,-.551,-.876,-1,.368,.414,.325,.162,.216,.345,.495,.35,.369,-.7,-.522,-.318,-.128,-.041,.581,.696,.442,.274,.394,.607,.713,-.498,-.313,.401,.802,.751,-.174,-.702,-.917,-.992,-.883,.29,.475,.557,.55,.426,.135,-.125,-.259,-.391,-.671,-.951,-.964,-.727,-.471,-.32,-.244,-.123,.166,.573,.775,.395],Gn=t=>dt.z1-(t-5.6)/11*(dt.z1-dt.z0),gn={x:Gt/2,z:1,plinth:Lo.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},Hh=Re-gn.z,wr=(()=>{let t=[-.8,.42,.43],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),kd=(()=>{let t=[-.3,.82,.48],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Ed=t=>[t[0]+de[0],t[1]+de[1],t[2]+de[2]];function Td(){let t=ye.c.map(o=>`
		{
			float dz = q.z - ${ct(o)};
			float inside = smoothstep(-b, b, ${ct(ye.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${ct(ye.sill)});
			float arch = smoothstep(-b, b, ${ct(ye.hw)} - length(vec2(dz, max(q.y - ${ct(ye.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=ye.c.map(o=>`
		{
			float dz = q.z - ${ct(o)};
			if (abs(dz) < ${ct(ye.hw+.2)}) {
				${Q0.cols.map(r=>`bar = max(bar, 1.0 - smoothstep(${ct(Q0.w*.5)} - b, ${ct(Q0.w*.5)} + b, abs(dz - ${ct(r)})));`).join(`
				`)}
				float ry = q.y - ${ct(ye.sill)};
				float tr = abs(ry - ${ct(Q0.rowH)} * floor(ry / ${ct(Q0.rowH)} + 0.5));
				if (q.y < ${ct(ye.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${ct(Q0.w*.5)} - b, ${ct(Q0.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${ct(ye.spring)}));
				if (q.y > ${ct(ye.spring)}) bar = max(bar, 1.0 - smoothstep(${ct(Q0.w*.5)} - b, ${ct(Q0.w*.5)} + b, abs(rr - ${ct(Q0.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${ct(ye.hw)} - max(abs(dz), q.y > ${ct(ye.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN_D = vec3(${ct(wr[0])}, ${ct(wr[1])}, ${ct(wr[2])});
	const vec3 STUDIO_MOON_D = vec3(${ct(kd[0])}, ${ct(kd[1])}, ${ct(kd[2])});
#define STUDIO_SUN normalize(mix(STUDIO_SUN_D, STUDIO_MOON_D, smoothstep(0.25, 0.75, night)))

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

	float studioSun0(vec3 pw) {
		vec3 p = pw - vec3(${ct(de[0])}, ${ct(de[1])}, ${ct(de[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${ct(Gt)} - p.x, p.y, ${ct(Re)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${ct(Lo.cx)};
			if (abs(dxn) < ${ct(Lo.hw)} && q.z > ${ct(Lo.face)} && q.y > ${ct(Lo.floor-.05)} && q.y < ${ct(Lo.spring)} + sqrt(max(${ct(Lo.hw*Lo.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${ct(Lo.face)} - q.z) / Sq.z);
				float hx = hf.x - ${ct(Lo.cx)};
				float edge = ${ct(Lo.hw)} - abs(hx);
				float topY = ${ct(Lo.spring)} + sqrt(max(${ct(Lo.hw*Lo.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${ct(Lo.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${ct(Lo.x0-.2)}, 0.0, ${ct(Lo.face-.3)}), bmax = vec3(${ct(Lo.x1+.2)}, ${ct(6.95)}, ${ct(Re)});
				vec3 inv = 1.0 / Sq;
				vec3 t0 = (bmin - q) * inv, t1 = (bmax - q) * inv;
				vec3 tn = min(t0, t1), tf = max(t0, t1);
				float a = max(max(tn.x, tn.y), tn.z), bb = min(min(tf.x, tf.y), tf.z);
				if (bb > max(a, 0.0) && a > 0.0) return 0.0;
			}
		}
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${ct(ho)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${ct(Re)}) return 0.0;
			vec3 h1 = p + S * ((${ct(-w0)} - p.x) / S.x);
			vec3 hm = p + S * ((${ct(-w0*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${ct(ho)}) {
			if (he.z < 0.0 || he.z > ${ct(Re)} || he.x < 0.0 || he.x > ${ct(Gt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${Sc.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${ct(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${si.filter(o=>o[0]==="truss").map(([o,r,n])=>`vis *= 1.0 - studioVineShade(he.z - ${ct(r)}, he.x, he.z, ${ct(n)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${ct(Mr)} * p.x - p.y + ${ct(ho)}) / (S.y - ${ct(Mr)} * S.x);
		float tr = (${ct(Mr)} * (${ct(Gt)} - p.x) - p.y + ${ct(ho)}) / (S.y + ${ct(Mr)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${ct(Gt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${ct(Gt/2-.01)} && hr.x <= ${ct(Gt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${ct(Re)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${ct(Fa.rafter)} * floor(h.z / ${ct(Fa.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${ct(Fa.rafterW*.5)} - b, ${ct(Fa.rafterW*.5)} + b, rz);
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${ct(Gt/2)})));
		// the old glass is grimy: it lets less through than the windows,
		// unevenly, so the roof's light falls in soft dim drifts and the
		// windows' patterned beams are the bright, dramatic ones
		float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
		// and the vine along the rafters and the ridge
		${si.filter(o=>o[0]==="rafter").map(([o,r,n])=>`pat *= 1.0 - studioVineShade(h.z - ${ct(r)}, h.x, h.z, ${ct(n)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${ct(Gt/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}

	// the rotunda: its ring of stone stops the sun except through the
	// arches; its sheer cloth lets about half through
	float rotHit(vec2 c, vec2 d, float a, float R, out float t1, out float t2) {
		float b = dot(c, d), cc = dot(c, c) - R * R, disc = b * b - a * cc;
		if (disc <= 0.0) { t1 = t2 = -1.0; return 0.0; }
		float q = sqrt(disc);
		t1 = (-b - q) / a; t2 = (-b + q) / a;
		return 1.0;
	}
	float rotOpen(vec3 h, float R) {
		float an = atan(h.x - ${ct(to.cx)}, h.z - ${ct(to.cz)});
		float m = an - 1.5707963 * floor(an / 1.5707963 + 0.5);
		float d = R * sin(m);
		return (abs(d) < ${ct(to.hw)} && h.y < ${ct(to.spring)} + sqrt(max(${ct(to.hw*to.hw)} - d * d, 0.0))) ? 1.0 : 0.0;
	}
	float rotShade(vec3 pw) {
		vec3 p = pw - vec3(${ct(de[0])}, ${ct(de[1])}, ${ct(de[2])});
		vec3 S = STUDIO_SUN;
		vec2 c = p.xz - vec2(${ct(to.cx)}, ${ct(to.cz)});
		vec2 d = S.xz;
		float a = dot(d, d);
		float k = 1.0, t1, t2;
		// the stone (as one thin ring at the middle of the wall)
		if (rotHit(c, d, a, ${ct((to.ri+to.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.03) { vec3 h = p + S * t1; if (h.y < ${ct(to.top-.2)} && rotOpen(h, ${ct((to.ri+to.ro)/2)}) < 0.5) return 0.0; }
			if (t2 > 0.03) { vec3 h = p + S * t2; if (h.y < ${ct(to.top-.2)} && rotOpen(h, ${ct((to.ri+to.ro)/2)}) < 0.5) return 0.0; }
		}
		// the cloth, except where it parts on the pool's line
		if (rotHit(c, d, a, ${ct(to.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.08) {
					vec3 h = p + S * t;
					float an = atan(h.x - ${ct(to.cx)}, h.z - ${ct(to.cz)});
					float lat = ${ct(to.cloth+.15)} * abs(sin(an));
					bool gap = lat < ${ct(to.gap)} && h.y < ${ct(to.top)};
					if (h.y < ${ct(to.top)} && !gap) k *= 0.5;
				}
			}
		}
		return k;
	}
	float studioSun(vec3 pw) { float s0 = studioSun0(pw); return s0 > 0.0 ? s0 * rotShade(pw) : 0.0; }`}function Ga(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var Et={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30};function zd(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,r,n)=>(t.pos.push(e[0]+de[0],e[1]+de[1],e[2]+de[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.float?t.anchor.push(t.float[0]+de[0],t.float[1]+de[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),v=t.v(n,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.box=(e,o,r,n,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,r],[e,a,s],[n,a,s],[n,a,r],[0,1,0],i,[[e,r],[e,s],[n,s],[n,r]]),f.bottom||t.quad([e,o,r],[n,o,r],[n,o,s],[e,o,s],[0,-1,0],i,[[e,r],[n,r],[n,s],[e,s]]),f.x0||t.quad([e,o,r],[e,o,s],[e,a,s],[e,a,r],[-1,0,0],i,[[r,o],[s,o],[s,a],[r,a]]),f.x1||t.quad([n,o,s],[n,o,r],[n,a,r],[n,a,s],[1,0,0],i,[[s,o],[r,o],[r,a],[s,a]]),f.z0||t.quad([n,o,r],[e,o,r],[e,a,r],[n,a,r],[0,0,-1],i,[[n,o],[e,o],[e,a],[n,a]]),f.z1||t.quad([e,o,s],[n,o,s],[n,a,s],[e,a,s],[0,0,1],i,[[e,o],[n,o],[n,a],[e,a]])},t.tbox=(e,o,r,n,a,s,i,c,f)=>{let l=Math.cos(r),v=Math.sin(r),d=Math.cos(f||0),p=Math.sin(f||0),u=(m,x,y)=>{let b=a+(x-a)*d-y*p*0,M=y+(x-a)*p,_=a+(x-a)*d;return[e+l*m+v*M,_,o-v*m+l*M]},h=m=>{let x=m[1]*d-m[2]*p,y=m[2]*d+m[1]*p;return[l*m[0]+v*y,x,-v*m[0]+l*y]},g=(m,x,y,b,M)=>t.quad(u(...m),u(...x),u(...y),u(...b),h(M),c,[[m[0]+m[2],m[1]],[x[0]+x[2],x[1]],[y[0]+y[2],y[1]],[b[0]+b[2],b[1]]]);g([-n,s,-i],[-n,s,i],[n,s,i],[n,s,-i],[0,1,0]),g([-n,a,-i],[n,a,-i],[n,a,i],[-n,a,i],[0,-1,0]),g([-n,a,-i],[-n,a,i],[-n,s,i],[-n,s,-i],[-1,0,0]),g([n,a,i],[n,a,-i],[n,s,-i],[n,s,i],[1,0,0]),g([n,a,-i],[-n,a,-i],[-n,s,-i],[n,s,-i],[0,0,-1]),g([-n,a,i],[n,a,i],[n,s,i],[-n,s,i],[0,0,1])},t.beam=(e,o,r,n,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(u=>u/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],v=Math.hypot(...l);l=l.map(u=>u/v),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let d=(u,h,g)=>[u[0]+l[0]*r*h+f[0]*r*g,u[1]+l[1]*r*h+f[1]*r*g,u[2]+l[2]*r*h+f[2]*r*g],p=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(u=>-u)],[[-1,-1],[1,-1],f.map(u=>-u)]];for(let[u,h,g]of p)t.quad(d(e,...u),d(o,...u),d(o,...h),d(e,...h),g,n,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,r,n,a)=>{let s=a||32,i=r.map(([c,f],l)=>{let v=r[Math.max(0,l-1)],d=r[Math.min(r.length-1,l+1)],p=d[0]-v[0],u=d[1]-v[1],h=Math.hypot(p,u)||1,g=u/h,m=-p/h,x=[];for(let y=0;y<=s;y++){let b=y/s*2*Te;x.push(t.v([e+Math.cos(b)*c,f,o+Math.sin(b)*c],[Math.cos(b)*g,m,Math.sin(b)*g],n,[y/s*c*2*Te,f]))}return x});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],v=i[c][f+1],d=i[c+1][f+1],p=i[c+1][f];t.idx.push(l,p,d,l,d,v)}},t}var ya=t=>Math.abs(t)>=ye.hw?null:ye.spring+Math.sqrt(ye.hw*ye.hw-t*t),si=[["truss",Sc[0],3.1],["truss",Sc[1],5.4],["truss",Sc[2],7.7],["rafter",Fa.rafter*2,1.7],["rafter",Fa.rafter*5,8.5],["rafter",Fa.rafter*8,13.6],["rafter",Fa.rafter*10,17],["ridge",Gt/2,.9],...[.75,...ye.c.slice(1).map((t,e)=>(t+ye.c[e])/2),Re-.75].map((t,e)=>["wall",t,2.3+e*4.1])],Ql=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,o8=t=>t<Gt/2?ho+Mr*t:ho+Mr*(Gt-t);function jh(t,e,o){return t==="wall"?[.12,o,e]:t==="truss"?[o,ho-.12,e]:t==="rafter"?[o,o8(o)-.2,e]:[e,_r-.32,o]}var Wh=t=>t==="ridge"?[.4,Re-.4]:t==="wall"?[.15,ho-.05]:[.35,Gt-.35],_0={w:1.72,spring:2.05,r:2.05,frame:.21,zl:Re-.05,zf:Re-.13};_0.c=_0.r-_0.w/2;var qr=(t,e)=>{let o=_0.r+(e||0),r=Math.abs(t)+_0.c;return r>=o?_0.spring:_0.spring+Math.sqrt(o*o-r*r)};_0.top=qr(0);function n8(t){let e=Gt/2,{w:o,frame:r,zl:n,zf:a}=_0,s=o/2,i=s+r,c=.02;for(let _=-i;_<i-1e-6;_+=c){let k=_,A=Math.min(i,_+c),z=(k+A)/2,D=qr(k,r),P=qr(A,r),G=0,I=0;Math.abs(z)<s&&(G=qr(k),I=qr(A)),Math.abs(z)>=s;{let H=Math.abs(z)<s?G:0,ft=Math.abs(z)<s?I:0;t.quad([e+A,ft,a],[e+k,H,a],[e+k,D,a],[e+A,P,a],[0,0,-1],Et.DARKWOOD,[[A,ft],[k,H],[k,D],[A,P]])}t.quad([e+k,D,a],[e+k,D,Re],[e+A,P,Re],[e+A,P,a],[0,1,0],Et.DARKWOOD,[[k,0],[k,1],[A,1],[A,0]]),Math.abs(z)<s&&t.quad([e+k,G,a],[e+A,I,a],[e+A,I,n],[e+k,G,n],[0,-1,0],Et.DARKWOOD,[[k,0],[A,0],[A,1],[k,1]])}for(let _ of[-1,1])t.quad([e+_*i,0,a],[e+_*i,0,Re],[e+_*i,_0.spring,Re],[e+_*i,_0.spring,a],[_,0,0],Et.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+_*s,0,a],[e+_*s,_0.spring,a],[e+_*s,_0.spring,n],[e+_*s,0,n],[-_,0,0],Et.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+_*(s+r/2)-r/2-.04,0,a-.04,e+_*(s+r/2)+r/2+.04,.42,Re,Et.DARKWOOD);let f=40;for(let _=0;_<f;_++){let k=-s+2*s*_/f,A=-s+2*s*(_+1)/f;t.beam([e+k,qr(k)+.03,a-.015],[e+A,qr(A)+.03,a-.015],.018,Et.DARKWOOD)}for(let _ of[-1,1])t.beam([e+_*(s+.03),.42,a-.015],[e+_*(s+.03),_0.spring+.02,a-.015],.018,Et.DARKWOOD);for(let _=-s;_<s-1e-6;_+=c){let k=_,A=Math.min(s,_+c),z=qr(k),D=qr(A);t.quad([e+A,0,n],[e+k,0,n],[e+k,z,n],[e+A,D,n],[0,0,-1],Et.REDDOOR,[[A,0],[k,0],[k,z],[A,D]])}let l=s-.2,v=.3,d=2.12,p=n-.006,u=.05,h=(_,k,A,z)=>t.box(e+_,k,p-.018,e+A,z,p,Et.REDDOOR);h(-l,v,l,v+u),h(-l,d-u,l,d),h(-l,v,-l+u,d),h(l-u,v,l,d),t.box(e-l+.14,v+.14,p-.022,e+l-.14,d-.14,p,Et.REDDOOR);let g=2.36;h(-s+.08,d+.06,s-.08,d+.12);for(let _ of[-1,1]){let A=s-.17;for(let z=.07;z<A-1e-6;z+=c){let D=z,P=Math.min(A,z+c),G=qr(D,-.18),I=qr(P,-.18);if(G<=g+.02&&I<=g+.02)continue;let H=Nt=>e+_*Nt,ft=[[H(D),g,p+.004],[H(P),g,p+.004],[H(P),Math.max(g,I),p+.004],[H(D),Math.max(g,G),p+.004]];_>0?t.quad(ft[1],ft[0],ft[3],ft[2],[0,0,-1],Et.REDPANEL,[[P,0],[D,0],[D,1],[P,1]]):t.quad(...ft,[0,0,-1],Et.REDPANEL,[[D,0],[P,0],[P,1],[D,1]])}}t.beam([e,g-.02,p-.008],[e,qr(0,-.12),p-.008],.03,Et.REDDOOR),t.beam([e-s+.1,g-.01,p-.006],[e+s-.1,g-.01,p-.006],.014,Et.REDDOOR);let m=e-s+.15,x=1.06,y=p-.03;t.box(m-.034,x-.2,y-.008,m+.034,x+.17,y+.012,Et.BRASS);for(let[_,k]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(m,y-.002,[[0,_-k],[k,_-k*.4],[k,_+k*.4],[0,_+k]],Et.BRASS,12);for(let _=0;_<6;_++){let k=x-.17+_*.065;for(let A of[-1,1])t.beam([m+A*.034,k,y-.01],[m+A*.041,k+.03,y-.01],.006,Et.BRASS)}let b=y-.008,M=(_,k,A)=>{for(let z=0;z<A;z++){let D=Te*z/A,P=Te*(z+1)/A;for(let G=0;G<16;G++){let I=2*Te*G/16,H=2*Te*(G+1)/16,ft=(Se,Oe)=>[m+k*Math.sin(Se)*Math.cos(Oe),x+.03+k*Math.sin(Se)*Math.sin(Oe),_-k*Math.cos(Se)],Nt=(Se,Oe)=>[Math.sin(Se)*Math.cos(Oe),Math.sin(Se)*Math.sin(Oe),-Math.cos(Se)],_t=t.v(ft(D,I),Nt(D,I),Et.BRASS),xt=t.v(ft(D,H),Nt(D,H),Et.BRASS),ut=t.v(ft(P,H),Nt(P,H),Et.BRASS),Yt=t.v(ft(P,I),Nt(P,I),Et.BRASS);t.idx.push(_t,xt,ut,_t,ut,Yt)}}};t.beam([m,x+.03,b],[m,x+.03,b-.05],.011,Et.BRASS),M(b-.075,.034,10),t.box(m-.008,x-.1,y-.0125,m+.008,x-.06,y-.0085,Et.KEYHOLE)}var Mg=[0,Te/2,Te,-Te/2],Sd=t=>{let e=Te/2;return t-Math.round(t/e)*e},Xl=t=>{let e=Math.abs(t);return to.top-.55*Math.pow(Math.max(0,Math.sin(e*3+.6)),6)-.25*Math.pow(Math.max(0,Math.sin(e*7+1.9)),8)-.06*Math.sin(e*23)};function r8(t){let{cx:e,cz:o,ri:r,ro:n,hw:a,spring:s}=to,i=Et.OLDSTONE,c=(d,p,u)=>[e+Math.sin(d)*p,u,o+Math.cos(d)*p],f=d=>s+Math.sqrt(Math.max(0,a*a-d*d)),l=(d,p)=>{let u=[];for(let m=0;m<=160;m++)u.push(-Te+2*Te*m/160);let g=Math.asin(Math.min(.999,a/d));for(let m of Mg)for(let x of[-1,1])u.push(((m+x*g+Te)%(2*Te)+2*Te)%(2*Te)-Te);u.sort((m,x)=>m-x);for(let m=0;m<u.length-1;m++){let x=u[m],y=u[m+1];if(y-x<1e-5)continue;let b=Sd((x+y)/2),M=Math.abs(d*Math.sin(b))<a&&Math.abs(b)<Te/4,_=_t=>M?f(d*Math.sin(Sd(_t))):0,k=[Math.sin(x)*p,0,Math.cos(x)*p],A=[Math.sin(y)*p,0,Math.cos(y)*p],z=c(x,d,_(x)),D=c(y,d,_(y)),P=c(y,d,Xl(y)),G=c(x,d,Xl(x)),I=t.v(z,k,i,[d*x,z[1]]),H=t.v(D,A,i,[d*y,D[1]]),ft=t.v(P,A,i,[d*y,P[1]]),Nt=t.v(G,k,i,[d*x,G[1]]);if(p>0?t.idx.push(I,H,ft,I,ft,Nt):t.idx.push(I,ft,H,I,Nt,ft),p>0){let _t=c(x,r,Xl(x)),xt=c(y,r,Xl(y));t.quad(G,P,xt,_t,[0,1,0],i,[[G[0],G[2]],[P[0],P[2]],[xt[0],xt[2]],[_t[0],_t[2]]])}}};l(n,1),l(r,-1);for(let d of Mg){let p=[Math.sin(d),0,Math.cos(d)],u=[Math.cos(d),0,-Math.sin(d)],h=(x,y,b)=>[e+p[0]*Math.sqrt(y*y-x*x)+u[0]*x,b,o+p[2]*Math.sqrt(y*y-x*x)+u[2]*x];for(let x of[-1,1]){let y=x*a,b=[-u[0]*x,0,-u[2]*x];t.quad(h(y,r,0),h(y,n,0),h(y,n,s),h(y,r,s),b,i,[[0,0],[1,0],[1,1],[0,1]])}let g=20;for(let x=0;x<g;x++){let y=-a+2*a*x/g,b=-a+2*a*(x+1)/g,M=(y+b)/2,_=f(M),k=[-(u[0]*M),-(_-s),-(u[2]*M)],A=Math.hypot(...k),z=k.map(D=>D/A);t.quad(h(y,r,f(y)),h(b,r,f(b)),h(b,n,f(b)),h(y,n,f(y)),z,i,[[y,0],[b,0],[b,1],[y,1]])}let m=n+.05;for(let x=0;x<24;x++){let y=Te*x/24,b=Te*(x+1)/24,M=a+.08,_=k=>{let A=Math.cos(k)*M;return h(Math.max(-m+.01,Math.min(m-.01,A)),m,s+Math.sin(k)*M)};t.beam(_(y),_(b),.06,i)}for(let x of[-1,1]){let y=h(x*(a+.1),n+.06,s-.15),b=h(x*(a+.1),n+.06,s);t.beam(y,b,.14,i)}t.beam(h(0,n+.07,s+a-.05),h(0,n+.07,s+a+.3),.13,i)}let v=(d,p,u,h,g)=>{for(let x=0;x<96;x++){let y=-Te+2*Te*x/96,b=-Te+2*Te*(x+1)/96,M=Sd((y+b)/2);if(g&&Math.abs(p*Math.sin(M))<a+.05&&Math.abs(M)<Te/4)continue;let _=[Math.sin(y),0,Math.cos(y)],k=[Math.sin(b),0,Math.cos(b)],A=t.v(c(y,p,u),_,i,[p*y,u]),z=t.v(c(b,p,u),k,i,[p*b,u]),D=t.v(c(b,p,h),k,i,[p*b,h]),P=t.v(c(y,p,h),_,i,[p*y,h]);t.idx.push(A,z,D,A,D,P),t.quad(c(y,p,h),c(b,p,h),c(b,d,h),c(y,d,h),[0,1,0],i,[[y,0],[b,0],[b,1],[y,1]]),t.quad(c(y,d,u),c(b,d,u),c(b,p,u),c(y,p,u),[0,-1,0],i,[[y,0],[b,0],[b,1],[y,1]])}};v(n-.02,n+.12,0,.38,!0),v(n-.02,n+.1,to.cornice-.12,to.cornice,!1),v(n-.02,n+.2,to.cornice,to.cornice+.2,!1);for(let d of[Te/4,3*Te/4,-Te/4,-3*Te/4]){let p=.3/n;for(let[u,h,g,m]of[[n,n+.07,.38,to.cornice-.12]]){let x=d-p,y=d+p,b=[Math.sin(d),0,Math.cos(d)];t.quad(c(x,h,g),c(y,h,g),c(y,h,m),c(x,h,m),b,i,[[x*h,g],[y*h,g],[y*h,m],[x*h,m]]);for(let[M,_]of[[x,-1],[y,1]]){let k=[Math.cos(M)*_,0,-Math.sin(M)*_];t.quad(c(M,u,g),c(M,h,g),c(M,h,m),c(M,u,m),k,i,[[0,g],[1,g],[1,m],[0,m]])}}}}function a8(){let{cx:t,cz:e,ro:o}=to,r=[],n=[],a=[],s=[],i=[],c=u=>{let h=(u/(2*Te)*4%1+1)%1*64,g=Math.floor(h),m=h-g;return _g[g%64]*(1-m)+_g[(g+1)%64]*m},f=Ga(9090),l=Math.asin(Math.min(.999,to.gap/to.cloth)),v=[[l,Te-l,0],[-Te+l,-l,0],[-l-.02,l+.02,1],[Te-l-.02,Te+l+.02,1]],d=46,p=8;for(let[u,h,g]of v){let m=Math.round((h-u)*to.cloth/.035),x=r.length/3,y=[],b=[];for(let _=0;_<=m;_++)b.push(.2+.25*f());for(let _=0;_<=(g?d:d+p);_++){let k=[];for(let A=0;A<=m;A++){let z=u+(h-u)*A/m,D=Xl(z)+.04,P=Math.min(z-u,h-z)*to.cloth,G,I;if(_===0)G=to.ri+.12,I=D+.03;else if(_===1)G=o+.08,I=D+.07;else if(_<=d){let H=(_-1)/(d-1);if(I=(D+.02)*(1-H),g){let Se=Math.abs(Math.sin(z))*to.cloth/to.gap,Oe=to.spring+to.hw+.32+.35*(1-Math.min(1,Se));I=D+.02-(D+.02-Oe)*H}let ft=.38*Math.pow(H,2)+.1*Math.sqrt(H)+.26,Nt=(.05+.34*Math.pow(H,1.3))*c(z),_t=(.02+.07*H)*Math.sin(z*to.cloth/.16+2*c(z*1.7)),xt=.03*(1-H)*Math.sin(z*to.cloth/.055)+.015*Math.sin(z*to.cloth/.031+H*3),ut=_t+xt,Yt=.12*Math.exp(-P/.25)*Math.sin(P*18)*H;G=Math.max(o+.26,o+ft+Nt+ut+Yt),g&&(G=o+.26+.06*Math.sin(z*to.cloth/.09)+.05*H)}else{let H=(_-d)/p;G=o+.74+.39*c(z)+H*b[A]*(.7+.3*(1+c(z+.3))),I=.012+.05*Math.max(0,Math.sin(H*7+z*23))*(1-H)+.03*(1-H)}k.push([t+Math.sin(z)*G,I,e+Math.cos(z)*G])}y.push(k)}for(let _=0;_<y.length;_++)for(let k=0;k<=m;k++){let A=y[_][k],z=y[_][Math.max(k-1,0)],D=y[_][Math.min(k+1,m)],P=y[Math.max(_-1,0)][k],G=y[Math.min(_+1,y.length-1)][k],I=[D[0]-z[0],D[1]-z[1],D[2]-z[2]],H=[G[0]-P[0],G[1]-P[1],G[2]-P[2]],ft=[I[1]*H[2]-I[2]*H[1],I[2]*H[0]-I[0]*H[2],I[0]*H[1]-I[1]*H[0]],Nt=Math.hypot(...ft)||1;ft=ft.map(xt=>xt/Nt),r.push(A[0]+de[0],A[1]+de[1],A[2]+de[2]),n.push(...ft),a.push((u+(h-u)*k/m)*to.cloth,_/(d+p));let _t=_<=1?0:_<=d?(_-1)/(d-1):1-(_-d)/p*.9;i.push(_<=d?Math.pow(_t,1.3)*(1-.6*Math.pow(_t,6)):.4*_t*_t)}let M=m+1;for(let _=0;_<y.length-1;_++)for(let k=0;k<m;k++){let A=x+_*M+k;s.push(A,A+1,A+M+1,A,A+M+1,A+M)}}for(let u of[Te/2,-Te/2]){let h=r.length/3,g=40,m=30,x=[Math.sin(u),0,Math.cos(u)],y=[Math.cos(u),0,-Math.sin(u)];for(let b=0;b<=m;b++)for(let M=0;M<=g;M++){let _=-to.hw+2*to.hw*M/g,k=b/m,z=(to.spring+Math.sqrt(Math.max(0,to.hw*to.hw-_*_))-.02)*(1-k)+.01,D=(to.ri+to.ro)/2+.06*Math.sin(_*34)*(.3+k)+.12*k*k,P=[t+x[0]*D+y[0]*_,z,e+x[2]*D+y[2]*_];r.push(P[0]+de[0],P[1]+de[1],P[2]+de[2]),i.push(.6*k);let G=[x[0]+y[0]*Math.cos(_*34)*.6,.1,x[2]+y[2]*Math.cos(_*34)*.6],I=Math.hypot(...G);n.push(G[0]/I,G[1]/I,G[2]/I),a.push(_,k)}for(let b=0;b<m;b++)for(let M=0;M<g;M++){let _=h+b*(g+1)+M;s.push(_,_+1,_+g+2,_,_+g+2,_+g+1)}}return{pos:r,nrm:n,uv:a,idx:s,sw:i}}function s8(t,e){let o=t.pos.length/3;for(let r=0;r<e.pos.length;r+=3){let n=e.pos[r]-de[0],a=e.pos[r+2]-de[2];t.pos.push(Gt-n+de[0],e.pos[r+1],Re-a+de[2]),t.nrm.push(-e.nrm[r],e.nrm[r+1],-e.nrm[r+2])}t.kind.push(...e.kind),t.uv.push(...e.uv),t.anchor.push(...e.anchor);for(let r of e.idx)t.idx.push(r+o)}function i8(t){let{cx:e,hw:o,spring:r,pier:n,face:a,back:s,floor:i,x0:c,x1:f}=Lo,l=Et.OLDSTONE,v=Et.HOLLOW,d=s-o,p=5.35,u=g=>r+Math.sqrt(Math.max(0,o*o-(g-e)*(g-e)));t.box(c-.1,0,a-.28,f+.1,i-.06,Re,l,{bottom:!0}),t.box(c-.14,i-.06,a-.34,f+.14,i,Re,l),t.box(e-.95,dt.top,a-.62,e+.95,dt.top+.15,a-.28,l,{bottom:!0});for(let[g,m]of[[c,e-o],[e+o,f]]){t.box(g,i,a+.03,m,p,Re,v,{bottom:!0});let x=g<e?g:m,y=g<e?m:g,b=g<e?1:-1,M=11,_=(p-.38-i)/M;for(let k=0;k<M;k++){let A=i+k*_+.018,z=i+(k+1)*_-.018,D=k%2===0,P=x+b*.01,G=D?y-b*.01:x+b*(n*.66);if(t.box(Math.min(P,G),A,a-.06,Math.max(P,G),z,a+.03,l,{z1:!0}),!D){let H=x+b*(n*.66+.025),ft=y-b*.01;t.box(Math.min(H,ft),A,a-.02,Math.max(H,ft),z,a+.03,l,{z1:!0})}let I=x-b*.035;t.box(Math.min(I,x+b*.02),A,a-.035,Math.max(I,x+b*.02),z,D?a+.9:a+.55,l)}t.box(g-.05,p-.38,a-.07,m+.05,p-.3,Re,l),t.box(g-.02,p-.3,a-.03,m+.02,p-.12,Re,l),t.box(g-.09,p-.12,a-.11,m+.09,p,Re,l)}let h=.03;for(let g=e-o;g<e+o-1e-6;g+=h){let m=g,x=Math.min(e+o,g+h);t.quad([x,u(x),a+.02],[m,u(m),a+.02],[m,p,a+.02],[x,p,a+.02],[0,0,-1],l,[[x,u(x)],[m,u(m)],[m,p],[x,p]])}{let m=o+.07;for(let y=0;y<36;y++){let b=Te*y/36,M=Te*(y+1)/36;t.beam([e+Math.cos(b)*m,r+Math.sin(b)*m,a-.02],[e+Math.cos(M)*m,r+Math.sin(M)*m,a-.02],.065,l,[0,0,1])}for(let y of[-1,1])t.box(e+y*o-.16,r-.14,a-.06,e+y*o+.16,r,a+.4,l);let x=r+o;t.quad([e-.17,x+.32,a-.08],[e+.17,x+.32,a-.08],[e+.11,x-.06,a-.08],[e-.11,x-.06,a-.08],[0,0,-1],l,[[0,1],[1,1],[1,0],[0,0]]);for(let y of[-1,1])t.quad([e+y*.11,x-.06,a-.08],[e+y*.17,x+.32,a-.08],[e+y*.17,x+.32,a+.02],[e+y*.11,x-.06,a+.02],[y,-.15,0],l,[[0,0],[1,0],[1,1],[0,1]]);t.quad([e-.11,x-.06,a-.08],[e+.11,x-.06,a-.08],[e+.11,x-.06,a+.02],[e-.11,x-.06,a+.02],[0,-1,0],l,[[0,0],[1,0],[1,1],[0,1]])}for(let g of[-1,1]){let m=e+g*o;t.quad([m,i,a],[m,i,d],[m,r,d],[m,r,a],[-g,0,0],v,[[a,i],[d,i],[d,r],[a,r]])}{for(let y=0;y<40;y++){let b=Te*y/40,M=Te*(y+1)/40,_=(A,z)=>[e+Math.cos(A)*o,r+Math.sin(A)*o,z],k=[-Math.cos((b+M)/2),-Math.sin((b+M)/2),0];t.quad(_(b,a),_(M,a),_(M,d),_(b,d),k,v,[[o*b+0,a],[o*M,a],[o*M,d],[o*b,d]])}for(let y=0;y<40;y++){let b=Te*y/40,M=Te*(y+1)/40,_=(G,I)=>[e+Math.cos(G)*o,I,d+Math.sin(G)*o],k=G=>[-Math.cos(G),0,-Math.sin(G)],A=t.v(_(b,i),k(b),v,[o*b,i]),z=t.v(_(M,i),k(M),v,[o*M,i]),D=t.v(_(M,r),k(M),v,[o*M,r]),P=t.v(_(b,r),k(b),v,[o*b,r]);t.idx.push(A,z,D,A,D,P)}let x=[];for(let y=0;y<=14;y++){let b=Te/2*y/14,M=[];for(let _=0;_<=40;_++){let k=Te*_/40,A=[Math.cos(k)*Math.cos(b),Math.sin(b),Math.sin(k)*Math.cos(b)];M.push(t.v([e+o*A[0],r+o*A[1],d+o*A[2]],A.map(z=>-z),v,[o*k,r+o*b]))}x.push(M)}for(let y=0;y<14;y++)for(let b=0;b<40;b++){let M=x[y][b],_=x[y][b+1],k=x[y+1][b+1],A=x[y+1][b];t.idx.push(M,_,k,M,k,A)}t.box(e-o,i-.02,a-.02,e+o,i,s,v,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(gn.x-.6,i,Hh-.5,gn.x+.6,gn.plinth-.05,Hh+.55,l,{bottom:!0}),t.box(gn.x-.64,gn.plinth-.05,Hh-.54,gn.x+.64,gn.plinth,Hh+.59,l),t.box(c-.06,p,a-.08,f+.06,p+.32,Re,l),t.box(c-.02,p+.32,a-.02,f+.02,p+.78,Re,l),t.box(c-.12,p+.78,a-.16,f+.12,p+.86,Re,l),t.box(c-.2,p+.86,a-.26,f+.2,p+1.02,Re,l);{let g=p+.55,m=.34,x=.2,y=28,b=[];for(let M=0;M<=4;M++){let _=M/4,k=[];for(let A=0;A<=y;A++){let z=2*Te*A/y,D=.09*Math.sqrt(Math.max(0,1-_*_))+.01;k.push(t.v([e+Math.cos(z)*m*_,g+Math.sin(z)*x*_,a-.02-D],[Math.cos(z)*_*.6,Math.sin(z)*_*.6,-1],l,[Math.cos(z)*_,Math.sin(z)*_]))}b.push(k)}for(let M=0;M<4;M++)for(let _=0;_<y;_++){let k=b[M][_],A=b[M][_+1],z=b[M+1][_+1],D=b[M+1][_];t.idx.push(k,D,z,k,z,A)}for(let M=0;M<y;M++){let _=2*Te*M/y,k=2*Te*(M+1)/y;t.beam([e+Math.cos(_)*(m+.03),g+Math.sin(_)*(x+.03),a-.04],[e+Math.cos(k)*(m+.03),g+Math.sin(k)*(x+.03),a-.04],.025,l,[0,0,1])}for(let M of[-1,1])for(let _=0;_<14;_++){let k=1.8*Te*_/14,A=1.8*Te*(_+1)/14,z=.1*(1-_/16),D=.1*(1-(_+1)/16),P=e+M*(m+.16),G=g;t.beam([P+M*Math.cos(k)*z,G+Math.sin(k)*z,a-.04],[P+M*Math.cos(A)*D,G+Math.sin(A)*D,a-.04],.018,l,[0,0,1])}}{let g=p+1.02,m=.62,x=(f-c)/2+.2,y=a-.2,b=_=>g+m*(1-Math.abs(_-e)/x);for(let _=e-x;_<e+x-1e-6;_+=.1){let k=_,A=Math.min(e+x,_+.1);t.quad([A,g,y],[k,g,y],[k,b(k),y],[A,b(A),y],[0,0,-1],l,[[A,g],[k,g],[k,b(k)],[A,b(A)]])}let M=Math.hypot(x,m);for(let _ of[-1,1]){let k=[_*m/M,x/M,0],A=e+_*(x+.06);t.quad([e,g+m+.06,y-.06],[A,g-.02,y-.06],[A,g-.02,Re],[e,g+m+.06,Re],k,l,[[0,y],[M,y],[M,Re],[0,Re]]),t.quad([e,g+m+.06,y-.06],[e,g+m-.06,y-.06],[A,g-.12,y-.06],[A,g-.02,y-.06],[0,0,-1],l,[[0,1],[0,0],[M,0],[M,1]])}}}function c8(t){let e=Ga(77);for(let[o,r,n]of si){let[a,s]=Wh(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=jh(o,r,f),v=Math.sin(f*3.1+i*2+n)*.07,d=Math.cos(f*2.3+i+n)*.05,p=o==="wall"?.25+.5*f/ho:0,u=o==="wall"?[.05+Math.abs(d)*.6,l[1],l[2]+v*(1.5+i)*(1+2*p)+(i-.5)*p]:o==="ridge"?[l[0]+v,l[1]+d+.12,l[2]]:[l[0],l[1]+d+.12,l[2]+v];c&&(o==="wall"||Ql(f,n)||e()<.5)&&t.beam(c,u,(o==="wall"?.022*(1.2-f/ho):.012)+.008*e(),Et.WOOD),c=u}}}}function l8(t){let e=Ga(4242),o=(n,a)=>!(n>dt.x0-dt.curb-.1&&n<dt.x1+dt.curb+.1&&a>dt.z0-dt.curb-.1&&a<dt.z1+dt.curb+.1)&&n>.2&&n<Gt-.2&&a>.3&&a<Re-.4,r=(n,a,s,i)=>{let c=.022+e()*.022,f=e()*2*Te,l=Math.cos(f),v=Math.sin(f),d=(u,h)=>[n+(u*l-h*v)*c,a+.004*u*h,s+(u*v+h*l)*c],p=i?2:0;t.quad(d(-1,-1),d(-1,1),d(1,1),d(1,-1),[0,1,0],Et.BRACT,[[p,0],[p,1],[p+1,1],[p+1,0]])};for(let[n,a,s]of si){let[i,c]=Wh(n);for(let f=i;f<=c;f+=.05){if(!Ql(f,s)||e()>.55)continue;let l=jh(n,a,f),v=l[0]+(e()-.5)*1.8,d=l[2]+(e()-.5)*1.8;o(v,d)&&r(v,.004,d,e()<.18)}}for(let n=0;n<260;n++){let a=Math.floor(e()*4),s,i;a<2?(s=a?dt.x1+dt.curb+.12+e()*e()*.9:dt.x0-dt.curb-.12-e()*e()*.9,i=dt.z0+e()*(dt.z1-dt.z0)):(i=a===2?dt.z0-dt.curb-.12-e()*e()*.9:dt.z1+dt.curb+.12+e()*e()*.9,s=dt.x0+e()*(dt.x1-dt.x0)),o(s,i)&&r(s,.004,i,e()<.18)}for(let n=0;n<70;n++){let a=dt.x0+.08+e()*(dt.x1-dt.x0-.16),s=dt.z0+.08+e()*(dt.z1-dt.z0-.16);Math.hypot(a-gn.x,s-gn.z)<.6||(t.float=[a,s,a*5.1+s*2.9],r(a,.016,s,e()<.2),t.float=null)}}function f8(t,e,o){let r=(a,s,i,c,f)=>{let l=t.pos.length/3,v=Math.cos(i),d=Math.sin(i),p=Math.cos(c),u=Math.sin(c),h=[v,0,-d],g=[d*u,p,v*u],m=[h[1]*g[2]-h[2]*g[1],h[2]*g[0]-h[0]*g[2],h[0]*g[1]-h[1]*g[0]],x=f?.95:o()*.8;for(let[y,b]of[[0,0],[1,0],[1,1],[0,1]]){let M=(y-.5)*s,_=(b-.5)*s;t.pos.push(a[0]+h[0]*M+g[0]*_+de[0],a[1]+h[1]*M+g[1]*_+de[1],a[2]+h[2]*M+g[2]*_+de[2]),t.nrm.push(...m),t.uv.push(y,b),t.shade.push(x),t.flower.push(1)}t.idx.push(l,l+1,l+2,l,l+2,l+3)};function n(a,s,i){let c=s/ho,f=Math.min(.15+.9*c,a<1||a>Re-1?.6:1.15),l=Math.round(3+7*c),v=s<1?0:Math.round((2+9*c)*(Ql(s*1.4,i)?1:.45));for(let d=0;d<l;d++){let p=o()*2*Te;e([.04+o()*.22,s+(o()-.5)*.12,a+(o()-.5)*2*f],[Math.cos(p)*.4+.5,-.2-o()*.5,Math.sin(p)],[0,0,1],.07+o()*.06,.1)}for(let d=0;d<v;d++)r([.06+o()*.28,s+(o()-.5)*.18,a+(o()-.5)*2*f*.9],.34+o()*.32,o()*2*Te,(o()-.5)*2.4,o()<.14);if(s>3&&o()<.05){let d=[.15,s,a+(o()-.5)*2*f],p=.4+o()*1.2;for(let u=0;u<p;u+=.13)d=[d[0]+.03,d[1]-.13,d[2]+(o()-.5)*.06],r([d[0],d[1],d[2]],(.26+o()*.2)*(1-.4*u/p),o()*2*Te,(o()-.5)*.8,o()<.15)}}for(let[a,s,i]of si){let[c,f]=Wh(a);for(let l=c;l<=f;l+=.1){if(a==="wall"){n(s,l,i);continue}if(!Ql(l,i))continue;let v=jh(a,s,l),d=()=>(o()-.5)*.7,p=4+Math.floor(o()*4);for(let u=0;u<p;u++){let h=a==="ridge"?[v[0]+d(),v[1]-o()*.25,v[2]+d()*.4]:[v[0]+d()*.4,v[1]-o()*.25,v[2]+d()];r(h,.42+o()*.4,o()*2*Te,(o()-.5)*2.4,o()<.16)}for(let u=0;u<5;u++){let h=o()*2*Te;e([v[0]+d()*.6,v[1]-o()*.2,v[2]+d()*.6],[Math.cos(h),-.3-o()*.5,Math.sin(h)],[-Math.sin(h),0,Math.cos(h)],.08+o()*.06,.1)}if(o()<.22){let u=.5+o()*2,h=[v[0],v[1],v[2]],g=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<u;m+=.13){h=[h[0]+g[0],h[1]-.13,h[2]+g[1]];let x=(.3+o()*.22)*(1-.4*m/u);if(r([h[0]+(o()-.5)*.08,h[1],h[2]+(o()-.5)*.08],x,o()*2*Te,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*Te;e([h[0],h[1],h[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var kg=(()=>{let t=Ga(9001),e=[],o=[];for(let[n,a,s]of si){let[i,c]=Wh(n);for(let f=i;f<=c;f+=.1)Ql(f,s)&&o.push(jh(n,a,f))}let r=o.filter(n=>n[0]>dt.x0-.6&&n[0]<dt.x1+.6&&n[2]>dt.z0&&n[2]<dt.z1);for(let n=0;n<64;n++){let a=n%2===0&&r.length?r:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),us=[dt.x0+.06,dt.z0+.06,dt.x1-.06,dt.z1-.06];function h8(t,e){let o=e+t.offset,r=Math.floor(o/t.period),n=o-r*t.period,a=.6+.4*Math.sin(r*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>us[0]&&s<us[2]&&i>us[1]&&i<us[3],f=c?.017:.006,l=(t.start[1]-f)/t.speed;return{ph:n,Tf:l,lx:s,lz:i,inPool:c}}var na=[{at:[Gt/2-.8,Gn(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[Gt/2+.9,Gn(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[Gt/2-.3,Gn(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[Gt/2+1,Gn(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[Gt/2-1.1,Gn(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[Gt/2+.4,Gn(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[Gt/2-.9,Gn(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[Gt/2+1.1,Gn(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],ri=[dt.x0+.5,dt.z0+.5,dt.x1-.5,dt.z1-.55],Wl=[dt.x0+.25,dt.z0+.25,dt.x1-.25,dt.z1-.3],Yl=12,Vl=-.36,Ad=[];function u8(){let t=u=>{let h=Math.sin(u*12.9898+78.233)*43758.5453;return h-Math.floor(h)},e=na.map((u,h)=>({k:u,i:h,x:u.at[0],z:u.at[1],th:u.dir,w:0,v:.08,y:-.17,ph:h*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:h%2===0,modeT:t(h*3.1)*3,aim:u.dir,nextAim:t(h*7.7)*5,yAim:-.17,nextY:t(h*5.9)*8,gx:u.at[0],gz:u.at[1],nextSip:u.first,sipT:-1,bite:0,notice:0})),o=[],r=[];for(let u=0;u<Yl;u++)r.push({x:0,z:0,alive:0,born:0,seed:u*.37});let n={on:!1,x:0,z:0,t0:0,petal:!1,eaten:0,lure:null},a=0,s=0,i=u=>Math.atan2(Math.sin(u),Math.cos(u)),c=()=>t(++s*1.618+a*.37);return{fish:e,events:o,crumbs:r,feed:n,drop:(u,h)=>{u=Math.max(Wl[0],Math.min(Wl[2],u)),h=Math.max(Wl[1],Math.min(Wl[3],h)),Object.assign(n,{on:!0,x:u,z:h,t0:a,petal:!1,eaten:0}),r.forEach((g,m)=>{let x=t(a+m)*Math.PI*2,y=.04+.16*Math.sqrt(t(a*1.7+m*3.1));Object.assign(g,{x:u+Math.cos(x)*y,z:h+Math.sin(x)*y,alive:1,born:a+t(m*5.3+a)*.35})}),o.push([u,h,a,1]);for(let g of e)g.notice=a+.3+Math.hypot(g.x-u,g.z-h)*.35+t(g.i*9.1+a)*.7},lure:(u,h)=>{let g=null,m=1e9;for(let x of e){let y=Math.hypot(x.x-u,x.z-h);y<m&&(m=y,g=x)}n.lure={x:u,z:h,fish:g}},petal:(u,h)=>{Object.assign(n,{on:!0,x:u,z:h,t0:a,petal:!0,eaten:0}),r.forEach((m,x)=>Object.assign(m,{x:u,z:h,alive:x===0?1:0,born:a})),o.push([u,h,a,.45]);let g=n.lure&&n.lure.fish;if(!g){let m=1e9;for(let x of e){let y=Math.hypot(x.x-u,x.z-h);y<m&&(m=y,g=x)}}Math.hypot(g.x-u,g.z-h)>1.4&&(g.x=u+.2,g.z=h-1.2,g.th=Math.PI/2,g.y=-.22,g.v=.06);for(let m of e)m.notice=m===g?a+.9:a+4.5+Math.hypot(m.x-u,m.z-h)*.8+t(m.i*9.1)*2;n.lure=null},unpetal:()=>{if(!n.petal){n.lure=null;return}n.on=!1,n.petal=!1,n.eaten=0,n.lure=null;for(let u of r)u.alive=0},step:u=>{a+=u;let h=a,g=0;for(let m of r)!m.alive||h<m.born||(g++,m.x+=Math.sin(h*.7+m.seed*11)*.004*u,m.z+=Math.cos(h*.6+m.seed*7)*.004*u);if(n.on&&(g===0&&h>n.t0+1&&!n.petal||n.petal&&n.eaten&&h>n.eaten+3||h>n.t0+40)){n.petal=!1,n.on=!1;for(let m of r)m.alive=0}for(let m of e){let{k:x}=m,y=x.len,b=n.on&&h>m.notice;(h>m.nextAim||Math.hypot(m.gx-m.x,m.gz-m.z)<.7)&&(m.gx=ri[0]+c()*(ri[2]-ri[0]),m.gz=ri[1]+c()*(ri[3]-ri[1]),m.nextAim=h+12+c()*14),n.lure&&n.lure.fish===m&&(m.gx=n.lure.x+Math.cos(h*.3)*.3,m.gz=n.lure.z-.45+Math.sin(h*.3)*.2,m.nextAim=h+1,m.yAim=-.2),m.aim=Math.atan2(m.gz-m.z,m.gx-m.x)+.35*Math.sin(h*.21+m.i*1.7);let M=m.aim,_=.7,k=null;if(b){let me=1e9;for(let nt of r){if(!nt.alive||h<nt.born)continue;let V=Math.hypot(nt.x-m.x,nt.z-m.z)+.1*Math.sin(m.i*3.3+nt.seed*9);V<me&&(me=V,k=nt)}let Ke=k?k.x:n.x,Ye=k?k.z:n.z;M=Math.atan2(Ye-m.z,Ke-m.x),m.aim=M,_=1.8}let A=.6+y*.8+m.v*2,z=b?Wl:ri,D=0;for(let me of[0,.5,-.5]){let Ke=m.x+Math.cos(m.th+me)*A,Ye=m.z+Math.sin(m.th+me)*A;D=Math.max(D,Math.max(z[0]-Ke,Ke-z[2],z[1]-Ye,Ye-z[3],0))}if(D>0){let me=(z[0]+z[2])/2,Ke=(z[1]+z[3])/2+Math.sin(m.i*2.3)*1.5,Ye=Math.atan2(Ke-m.z,me-m.x),nt=Math.min(1,D*2.2);M=m.th+i(Ye-m.th)*nt+i(M-m.th)*(1-nt),b||(m.aim=M),_=Math.max(_,.6+nt*.8)}let P=0;for(let me of e){if(me===m)continue;let Ke=me.x-m.x,Ye=me.z-m.z,nt=Math.hypot(Ke,Ye),V=(b?.4:1)*(y+me.k.len)/2+.2;if(nt<V&&Math.abs(me.y-m.y)<.14){let mt=i(Math.atan2(Ye,Ke)-m.th);(Math.abs(mt)<1.6||nt<V*.5)&&(P-=Math.sign(mt||1)*(V-nt)/V*(Math.abs(mt)<1.6?1:.6))}}let G=i(M-m.th)+P*(b?.4:2);m.modeT-=u,b?(m.stroking=!0,m.modeT=Math.max(m.modeT,.4)):m.modeT<=0&&(m.stroking=!m.stroking,m.modeT=m.stroking?1.2+c()*1.6:1.6+c()*3.2),!m.stroking&&(Math.abs(G)>.9||m.v<.035)&&(m.stroking=!0,m.modeT=1+c()*.8),!b&&m.sipT<0&&h>m.nextSip&&(m.sipT=0,m.nextSip=h+x.sip*(.7+.6*c()));let I=0;if(m.sipT>=0){let me=m.sipT;m.sipT+=u,I=Math.min(1,me/1.6)*(1-Math.max(0,Math.min(1,(me-2.6)/1.6))),me<1.7&&m.sipT>=1.7&&o.push([m.x+Math.cos(m.th)*.03,m.z+Math.sin(m.th)*.03,h,.9]),me<2.4&&m.sipT>=2.4&&o.push([m.x,m.z,h,.55]),(m.sipT>4.2||b)&&(m.sipT=-1)}let H=b&&n.petal?.7:1,ft=(m.stroking?b?2.4*H:1:0)*(1-.6*I);m.thrust+=(ft-m.thrust)*Math.min(u*3,1);let Nt=b?.9:.55;m.v+=(m.thrust*.085*(.7+.4*y)-Nt*m.v)*u,m.v=Math.max(m.v,.008);let _t=.35+.65*Math.min(1,m.thrust),xt=Math.max(-_,Math.min(_,G*1.3))*_t;m.w+=(xt-m.w)*Math.min(u*2.2,1),m.th+=m.w*u,h>m.nextY&&(m.yAim=-(.13+c()*.1),m.nextY=h+6+c()*10);let ut=m.yAim;if(I>0&&(ut+=(-.045-ut)*I),b){let me=k?k.x:n.x,Ke=k?k.z:n.z,Ye=1-Math.min(1,Math.max(0,(Math.hypot(me-m.x,Ke-m.z)-.15)/.9));if(ut+=((n.petal?.012:-.04)-ut)*Ye,k&&h>m.bite&&m.y>(n.petal?-.02:-.08)){let nt=m.x+Math.cos(m.th)*(n.petal?.09:.02),V=m.z+Math.sin(m.th)*(n.petal?.09:.02);Math.hypot(k.x-nt,k.z-V)<(n.petal?.14:.09)&&(k.alive=0,m.bite=h+1.3,n.petal?(n.eaten=h,o.push([k.x,k.z,h,1.6]),o.push([k.x+Math.cos(m.th)*.12,k.z+Math.sin(m.th)*.12,h+.01,1])):o.push([k.x,k.z,h,.75]))}}m.x+=Math.cos(m.th)*m.v*u,m.z+=Math.sin(m.th)*m.v*u,m.x=Math.max(dt.x0+.15,Math.min(dt.x1-.15,m.x)),m.z=Math.max(dt.z0+.15,Math.min(dt.z1-.15,m.z));let Yt=(ut-m.y)*Math.min(u*(b?2:.8),1);m.y+=Yt;let Se=b&&n.petal?.75:.4;m.pitch+=(Math.max(-Se,Math.min(Se,Yt/u/Math.max(m.v,.06)*(b&&n.petal?1.8:1)))-m.pitch)*Math.min(u*2.5,1);let Oe=Math.max(-1/y,Math.min(1/y,m.w/Math.max(m.v,.1)));m.kappa+=(Oe-m.kappa)*Math.min(u*4,1);let oo=.12+.88*Math.min(1.4,m.thrust)+.4*Math.min(1,Math.abs(m.w));m.amp+=(oo-m.amp)*Math.min(u*2,1),m.ph+=u*(2+5.5*Math.min(1.6,m.thrust))*(.75+.35/Math.sqrt(y))}for(;o.length&&h-o[0][2]>10;)o.shift()},get t(){return a}}}function d8(){let t=zd();{let e=dt.x0-dt.curb,o=dt.x1+dt.curb,r=dt.z0-dt.curb,n=dt.z1+dt.curb,a=[[0,0,Gt,r],[0,n,Gt,Re],[0,r,e,n],[o,r,Gt,n]];for(let[s,i,c,f]of a)for(let v=s;v<c-1e-6;v+=1)for(let d=i;d<f-1e-6;d+=1){let p=v,u=Math.min(c,v+1),h=d,g=Math.min(f,d+1);t.quad([p,0,h],[p,0,g],[u,0,g],[u,0,h],[0,1,0],Et.FLOOR,[[p,h],[p,g],[u,g],[u,h]])}}for(let e of[0,1]){let o=e?Gt:0,r=e?Gt+w0:-w0,n=e?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<Re-1e-6;p+=a){let u=p,h=Math.min(Re,p+a),g=(u+h)/2,m=null;if(!e)for(let y of ye.c)ya(g-y)!==null&&(m=[ye.sill,Math.min(ya(u-y)||ye.spring,ya(h-y)||ye.spring)]);let x=m?[[0,m[0]],[m[1],ho]]:[[0,ho]];for(let[y,b]of x)b<=y||(e?t.quad([o,y,h],[o,y,u],[o,b,u],[o,b,h],n,Et.ROCK,[[h,y],[u,y],[u,b],[h,b]]):t.quad([o,y,u],[o,y,h],[o,b,h],[o,b,u],n,Et.ROCK,[[u,y],[h,y],[h,b],[u,b]]))}if(!e)for(let p of ye.c){for(let m of[-1,1]){let x=p+m*ye.hw,y=[0,0,-m],b=[o,ye.sill,x],M=[r,ye.sill,x],_=[r,ye.spring,x],k=[o,ye.spring,x];m>0!=!!e?t.quad(b,M,_,k,y,Et.ROCK,[[0,ye.sill],[w0,ye.sill],[w0,ye.spring],[0,ye.spring]]):t.quad(k,_,M,b,y,Et.ROCK,[[0,ye.spring],[w0,ye.spring],[w0,ye.sill],[0,ye.sill]])}let u=28;for(let m=0;m<u;m++){let x=m/u*Te,y=(m+1)/u*Te,b=p+Math.cos(x)*ye.hw,M=p+Math.cos(y)*ye.hw,_=ye.spring+Math.sin(x)*ye.hw,k=ye.spring+Math.sin(y)*ye.hw,A=[0,-Math.sin((x+y)/2),-Math.cos((x+y)/2)];e?t.quad([o,_,b],[r,_,b],[r,k,M],[o,k,M],A,Et.ROCK,[[0,x],[w0,x],[w0,y],[0,y]]):t.quad([o,k,M],[r,k,M],[r,_,b],[o,_,b],A,Et.ROCK,[[0,y],[w0,y],[w0,x],[0,x]])}let h=e?Gt-.08:-w0,g=e?Gt+w0:.08;t.box(h,ye.sill-.09,p-ye.hw-.12,g,ye.sill,p+ye.hw+.12,Et.OLDSTONE)}let s=e?Gt:0,i=e?-1:1,c=Et.OLDSTONE,f=Math.min(s,s+i*.32),l=Math.max(s,s+i*.32);t.box(f,ho-.55,0,l,ho-.3,Re,c);let v=Math.min(s,s+i*.42),d=Math.max(s,s+i*.42);t.box(v,ho-.3,0,d,ho-.12,Re,c)}for(let[e,o]of[[0,1],[Re,-1]]){for(let s=0;s<32;s++){let i=s/32*Gt,c=(s+1)/32*Gt,f=v=>v<Gt/2?ho+Mr*v:ho+Mr*(Gt-v),l=o>0?[[c,0],[i,0],[i,f(i)],[c,f(c)]]:[[i,0],[c,0],[c,f(c)],[i,f(i)]];t.quad(...l.map(([v,d])=>[v,d,e]),[0,0,o],Et.ROCK,l.map(([v,d])=>[v,d]))}let n=o>0?0:Re-.32,a=o>0?.32:Re;t.box(0,ho-.55,n,Gt,ho-.3,a,Et.OLDSTONE)}n8(t);{let e=zd();i8(e),s8(t,e)}r8(t);{let{x0:e,x1:o,z0:r,z1:n,curb:a,top:s}=dt,i=.06,c=.08;t.box(e-a,0,r-a,e,s-c,n+a,Et.OLDSTONE,{bottom:!0}),t.box(o,0,r-a,o+a,s-c,n+a,Et.OLDSTONE,{bottom:!0}),t.box(e,0,r-a,o,s-c,r,Et.OLDSTONE,{bottom:!0}),t.box(e,0,n,o,s-c,n+a,Et.OLDSTONE,{bottom:!0}),t.box(e-a-i,s-c,r-a-i,e+i*.5,s,n+a+i,Et.OLDSTONE),t.box(o-i*.5,s-c,r-a-i,o+a+i,s,n+a+i,Et.OLDSTONE),t.box(e+i*.5,s-c,r-a-i,o-i*.5,s,r+i*.5,Et.OLDSTONE),t.box(e+i*.5,s-c,n-i*.5,o-i*.5,s,n+a+i,Et.OLDSTONE);let f=.5;for(let l=e;l<o-1e-6;l+=f)for(let v=r;v<n-1e-6;v+=f){let d=l,p=Math.min(o,l+f),u=v,h=Math.min(n,v+f);t.quad([d,0,u],[d,0,h],[p,0,h],[p,0,u],[0,1,0],Et.WATER,[[d,u],[d,h],[p,h],[p,u]])}}return t}function p8(t){for(let o of[0]){let r=o?Gt+w0*.5:-w0*.5,n=.05,a=Q0.w*.5;for(let s of ye.c){for(let i of Q0.cols){let c=ya(i)-.01;t.box(r-n,ye.sill,s+i-a,r+n,c,s+i+a,Et.STEEL)}for(let i=ye.sill+Q0.rowH;i<ye.spring+.01;i+=Q0.rowH)t.box(r-n,i-a,s-ye.hw,r+n,i+a,s+ye.hw,Et.STEEL);for(let[i,c]of[[ye.hw-.03,.06],[Q0.ring,a]])for(let l=0;l<24;l++){let v=l/24*Te,d=(l+1)/24*Te;t.beam([r,ye.spring+Math.sin(v)*i,s+Math.cos(v)*i],[r,ye.spring+Math.sin(d)*i,s+Math.cos(d)*i],c,Et.STEEL,[1,0,0])}for(let i of[-1,1])t.box(r-n,ye.sill,s+i*(ye.hw-.03)-.03,r+n,ye.spring,s+i*(ye.hw-.03)+.03,Et.STEEL);t.box(r-n,ye.sill,s-ye.hw,r+n,ye.sill+.06,s+ye.hw,Et.STEEL)}}let e=o=>o<Gt/2?ho+Mr*o:ho+Mr*(Gt-o);for(let o=0;o<=12;o++){let r=o*Fa.rafter;for(let[n,a]of[[-.3,Gt/2],[Gt/2,Gt+.3]])t.beam([n,e(Math.max(0,Math.min(Gt,n)))-.1,r],[a,e(a)-.1,r],.06,Et.STEEL)}t.beam([Gt/2,_r-.14,-.2],[Gt/2,_r-.14,Re+.2],.12,Et.STEEL);for(let o of[.05,Gt-.05])t.beam([o,ho-.05,0],[o,ho-.05,Re],.1,Et.STEEL);for(let o of Sc){t.box(-.05,ho-.13,o-.08,Gt+.05,ho+.13,o+.08,Et.STEEL),t.beam([Gt/2,ho,o],[Gt/2,_r-.2,o],.07,Et.STEEL);for(let r of[-1,1])t.beam([Gt/2+r*Gt/4,ho,o],[Gt/2,_r-.4,o],.055,Et.STEEL),t.beam([Gt/2+r*Gt/4,ho,o],[Gt/2+r*Gt/4,e(Gt/2+r*Gt/4)-.2,o],.045,Et.STEEL),t.beam([Gt/2+r*(Gt/2-.1),ho,o],[Gt/2+r*Gt/4,e(Gt/2+r*Gt/4)-.2,o],.045,Et.STEEL);for(let r of[-1,1])t.box(Gt/2+r*Gt/4-.12,ho-.18,o-.1,Gt/2+r*Gt/4+.12,ho+.18,o+.1,Et.STEEL)}}function v8(t){let e=Ga(311),o=[],r=[[dt.x0+.9,Gn(6.6),.9,11],[dt.x1-.8,Gn(8.4),.85,10],[dt.x0+.8,Gn(10.6),.8,9],[dt.x1-.9,Gn(12.4),.9,11],[dt.x0+1,Gn(13.9),.65,7],[Gt/2+.2,Gn(9.6),.5,4],[dt.x1-.7,Gn(15.9),.6,6]];for(let[a,s,i,c]of r)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let v=e()*2*Te,d=i*Math.sqrt(e()),p=a+Math.cos(v)*d,u=s+Math.sin(v)*d,h=.15+e()*.17;if(!(p-h<dt.x0+.04||p+h>dt.x1-.04||u-h<dt.z0+.04||u+h>dt.z1-.04)&&!(Math.hypot(p-gn.x,u-gn.z)<.62+h)&&!o.some(g=>Math.hypot(g[0]-p,g[1]-u)<(g[2]+h)*.93)){o.push([p,u,h,e()*2*Te,e()]);break}}for(let[a,s,i,c,f]of o){Ad.push([a,s,i]),t.float=[a,s,f*7.3+i*13];let l=28,v=4,d=i*1.08,p=[];for(let u=0;u<=v;u++){let h=[];for(let g=0;g<l;g++){let m=g/l*2*Te,x=u/v,y=m-c,b=.012+.004*(1-x*x)+.006*Math.pow(x,6)*(.5+.5*Math.sin(m*3+f*9));h.push(t.v([a+Math.cos(m)*d*x,b,s+Math.sin(m)*d*x],[0,1,0],Et.PAD,[.5+.5*x*Math.sin(y),.5+.5*x*Math.cos(y)]))}p.push(h)}for(let u=0;u<v;u++)for(let h=0;h<l;h++){let g=p[u][h],m=p[u][(h+1)%l],x=p[u+1][(h+1)%l],y=p[u+1][h];t.idx.push(g,m,x,g,x,y)}}t.float=null;let n=[[dt.x0+.75,Gn(6.9),1],[dt.x1-.65,Gn(8.1),.85],[dt.x1-.95,Gn(12.6),1.1],[dt.x0+.95,Gn(10.3),.8],[dt.x1-.55,Gn(15.6),.9],[dt.x0+1.05,Gn(13.7),.75]];for(let[a,s,i]of n){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,v,d],p)=>{for(let u=0;u<l;u++){let h=2*Te*u/l+p*.33,g=(90-(90-d)*i)*Te/180,m=6,x=4,y=[];for(let b=0;b<=m;b++){let M=b/m,_=(.18+.82*Math.sin(Te*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*v*c,k=[];for(let A=0;A<=x;A++){let z=A/x*2-1,D=z*_,P=Math.abs(z)*Math.abs(z)*.12*v*c,G=M*v*c,I=G*Math.cos(g),H=G*Math.sin(g)+P,ft=a+Math.cos(h)*I-Math.sin(h)*D,Nt=s+Math.sin(h)*I+Math.cos(h)*D;k.push(t.v([ft,.03+H,Nt],[-Math.cos(h)*Math.sin(g)*.6,.8,-Math.sin(h)*Math.sin(g)*.6],Et.PETAL,[(p===2?.5:0)+.5*(.5+.5*z*.92),.98-M*.96]))}y.push(k)}for(let b=0;b<m;b++)for(let M=0;M<x;M++){let _=y[b][M],k=y[b][M+1],A=y[b+1][M+1],z=y[b+1][M];t.idx.push(_,k,A,_,A,z,_,A,k,_,z,A)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],Et.STAMEN,12)}t.float=null}function m8(t){let e=Ga(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,Et.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,Et.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,Et.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,f=11.1+(e()-.5)*2.2,l=.035+e()*.04,v=.09+e()*.14;if(t.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+v*.9],[l*.9,.86+v],[0,.86+v]],i%3?Et.JAR:Et.POT,14),i%3===0)for(let d=0;d<7;d++){let p=e()*2*Te,u=.28+e()*.12,h=.12+e()*.2;t.beam([c,.86+.03,f],[c+Math.cos(p)*h*u,.86+.03+u,f+Math.sin(p)*h*u],.0055,Et.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,Et.WOOD)}for(let o=0;o<5;o++){let r=.55+e()*.6,n=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+n*Math.sin(i)*0,n,a];t.quad([s+.18,0,a-r/2],[s+.18,0,a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a-r/2],[Math.cos(i),Math.sin(i),0],o%2?Et.WOOD:Et.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of Tg)t.beam([o[0],ho,o[2]],[o[0],o[1]+.05,o[2]],.008,Et.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],Et.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],Et.BULB,12)}var Tg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],hA=[[dt.x0-1,dt.z0-1,1],[dt.x1+1,dt.z0-1,.95],[dt.x0-1,dt.z1+1,1.15],[dt.x1+1,dt.z1+1,1.1],[.9,1.3,1.25],[Gt-.9,Re-1.2,1.3]],Sg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function g8(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=Ga(1213),o=(r,n,a,s,i)=>{let c=Sg[Math.floor(e()*Sg.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,v=5,d=t.pos.length/3,p=.6+e()*.4;for(let u=0;u<=v;u++){let h=u/v,g=i*h*h*s,m=[r[0]+n[0]*h*s,r[1]+n[1]*h*s-g,r[2]+n[2]*h*s];for(let x of[-.5,.5]){t.pos.push(m[0]+a[0]*x*l+de[0],m[1]+a[1]*x*l-Math.abs(x)*.08*l+de[1],m[2]+a[2]*x*l+de[2]);let y=[n[1]*a[2]-n[2]*a[1],n[2]*a[0]-n[0]*a[2],n[0]*a[1]-n[1]*a[0]],b=Math.hypot(...y)||1;t.nrm.push(y[0]/b,Math.abs(y[1]/b)+.2,y[2]/b),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*h),t.shade.push(p),t.flower.push(0)}}for(let u=0;u<v;u++){let h=d+u*2;t.idx.push(h,h+1,h+3,h,h+3,h+2)}};f8(t,o,e);for(let[r,n,a]of[[dt.x0-.3,dt.z1+.3,-1],[dt.x1+.3,dt.z0-.3,1],[dt.x0-.3,dt.z0-.2,-1]])for(let s=0;s<26;s++){let i=e()*2*Te,c=r+(e()-.3)*.5*-a,f=n+(e()-.5)*.8,l=dt.top+.01-Math.max(0,Math.abs(c-r)-.1)*.6*e();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function x8(){let t=zd();for(let o of[0]){let r=o?Gt+w0*.5+.01:-w0*.5-.01,n=o?[-1,0,0]:[1,0,0];for(let a of ye.c)for(let i=a-ye.hw;i<a+ye.hw-1e-6;i+=.05){let c=i,f=Math.min(a+ye.hw,i+.05),l=ya(c-a+1e-4)||ye.spring,v=ya(f-a-1e-4)||ye.spring;o?t.quad([r,ye.sill,f],[r,ye.sill,c],[r,l,c],[r,v,f],n,0,[[f,ye.sill],[c,ye.sill],[c,l],[f,v]]):t.quad([r,ye.sill,c],[r,ye.sill,f],[r,v,f],[r,l,c],n,0,[[c,ye.sill],[f,ye.sill],[f,v],[c,l]])}}let e=Math.hypot(Mr,1);return t.quad([0,ho+.002,Re],[0,ho+.002,0],[Gt/2,_r+.002,0],[Gt/2,_r+.002,Re],[Mr/e,-1/e,0].map(o=>-o).map((o,r)=>r===1?-Math.abs(o):o),1,[[0,Re],[0,0],[Gt/2,0],[Gt/2,Re]]),t.quad([Gt,ho+.002,0],[Gt,ho+.002,Re],[Gt/2,_r+.002,Re],[Gt/2,_r+.002,0],[-Mr/e,-1/e,0],1,[[Gt,0],[Gt,Re],[Gt/2,Re],[Gt/2,0]]),t}var ai={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]],rleaf:[[.69824,.75586,.78076,.99414],[.79834,.75586,.88867,.99414],[.9043,.75586,.99072,.99414],[.94043,.54395,.99707,.70605]],petal:[[.56445,.75391,.68555,.99609]]},y8=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],Mc={IVY:0,BLADE:1,DAISY:2,WEED:3,ROSE:4,RLEAF:5,GRAPE:6},Eg=[[[.006,.013,-.051],[-.04,-.022,.004],[-.029,.026,-.015]],[[-.094,.019,.023],[.014,-.004,-.003],[.06,.026,-.027]],[[-.034,-.031,.002],[-.019,.07,-.028],[-.07,.018,-.039]],[[.102,-.049,-.011],[.057,-.046,.157],[.042,-.031,.089]],[[.026,.006,.019],[-.038,-.037,-.073],[-.042,-.019,.021]],[[.088,-.048,.008],[.143,-.012,.005],[-.044,.033,.028]],[[.039,-.084,-.04],[-.054,-.031,.031],[.076,.028,.014]],[[.082,-.037,-.05],[-.078,.011,.004],[-.076,-.047,.042]]],b8=2;function w8(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},e=[],o={pos:[],nrm:[],uv:[],info:[],idx:[]},r=t,n=Ga(2718),a=nt=>{let V=Math.hypot(nt[0],nt[1],nt[2])||1;return[nt[0]/V,nt[1]/V,nt[2]/V]},s=(nt,V)=>[nt[1]*V[2]-nt[2]*V[1],nt[2]*V[0]-nt[0]*V[2],nt[0]*V[1]-nt[1]*V[0]],i=(nt,V)=>nt[0]*V[0]+nt[1]*V[1]+nt[2]*V[2],c=(nt,V,mt)=>[nt[0]+V[0]*mt,nt[1]+V[1]*mt,nt[2]+V[2]*mt],f=nt=>nt[Math.floor(n()*nt.length)],l=nt=>(nt[2]-nt[0])*b8/(nt[3]-nt[1]),v=(nt,V,mt,Lt,fe,_e)=>(r.pos.push(nt[0]+de[0],nt[1]+de[1],nt[2]+de[2]),r.nrm.push(V[0],V[1],V[2]),r.uv.push(mt[0],mt[1]),r.info.push(Lt,fe,_e),r.pos.length/3-1),d=(nt,V,mt,Lt,fe,_e,ae,qt,at)=>{let Wt=at?2:1,Ne=r.pos.length/3;for(let oe=0;oe<=Wt;oe++){let It=oe/Wt,$e=at?c(c(nt,mt,It),qt,at*It*It):c(nt,mt,It),S=Lt[3]+(Lt[1]-Lt[3])*It;v(c($e,V,-1),ae,[Lt[0],S],fe,_e,It),v(c($e,V,1),ae,[Lt[2],S],fe,_e,It)}for(let oe=0;oe<Wt;oe++){let It=Ne+oe*2;r.idx.push(It,It+1,It+3,It,It+3,It+2)}},p=null,u=[...ai.ivy,...ai.ivy,...ai.weed.slice(0,7)],h=[0,1,0],g=(nt,V,mt,Lt,fe)=>{let _e=f(u),ae=s(mt,V),qt=a(c(c(V,mt,n()*.9-.25),ae,(n()-.5)*.8)),at=a(c(mt,qt,-i(mt,qt))),Wt=(n()-.5)*2,Ne=Math.cos(Wt),oe=Math.sin(Wt);at=a(c(c([0,0,0],at,Ne),s(qt,at),oe));let It=s(at,qt),$e=Lt*l(_e);d(c(nt,at,-Lt*.18),c([0,0,0],It,$e/2),c([0,0,0],at,Lt),_e,fe,Mc.IVY,qt)},m=(nt,V,mt,Lt,fe)=>{let _e=Math.floor(n()*Eg.length),ae=Eg[_e],qt=s(mt,V),at=a(c(c(V,mt,n()*.8-.3),qt,(n()-.5)*.9)),Wt=a(c(mt,at,-i(mt,at))),Ne=n()*2*Te,oe=Math.cos(Ne),It=Math.sin(Ne);Wt=a(c(c([0,0,0],Wt,oe),s(at,Wt),It));let $e=s(Wt,at),S=_e%4/4,De=Math.floor(_e/4)/2,Be=1.4,co=[],mo=r.pos.length/3;for(let go=0;go<3;go++)for(let No=0;No<3;No++){let zo=No/2-.5,rn=.5-go/2;co.push(c(c(c(nt,$e,zo*Lt),Wt,rn*Lt),at,ae[go][No]*Lt*Be))}for(let go=0;go<3;go++)for(let No=0;No<3;No++){let zo=Math.max(No-1,0),rn=Math.min(No+1,2),Xn=Math.max(go-1,0),O0=Math.min(go+1,2),et=c(co[go*3+rn],co[go*3+zo],-1),Bt=c(co[Xn*3+No],co[O0*3+No],-1),B=a(s(et,Bt));i(B,at)<0&&(B=B.map(Y=>-Y)),v(co[go*3+No],B,[S+No/2*.25,De+go/2*.5],fe,Mc.GRAPE,1)}for(let go=0;go<2;go++)for(let No=0;No<2;No++){let zo=mo+go*3+No;r.idx.push(zo,zo+1,zo+4,zo,zo+4,zo+3)}},x=(nt,V,mt,Lt,fe,_e,ae,qt,at,Wt=.3)=>{let Ne=Math.max(3,Math.round(fe*2.4*ae)),oe=[];for(let $e=0;$e<Ne;$e++){let S=Lt+(n()-.5)*fe,De=Math.min(1,Math.abs(S-Lt)/(fe/2+.001)),Be=_e*(.6+.4*n())*(1-.5*De*De);oe.push([S,qt||n()*.15,(n()-.5)*.5,Be,0])}let It=0;for(;oe.length&&It++<4e3;){let[$e,S,De,Be,co]=oe.pop(),mo=S;for(let go=0;go<260&&(De+=(n()-.5)*.45,De=Math.max(-1,Math.min(1,De)),$e+=Math.sin(De)*.09,S+=(qt?-1:1)*Math.cos(De)*.09,!(qt?mo-S>Be||S<(at?at($e):.05):S-mo>Be));go++){let zo=qt?(mo-S)/Be:(S-mo)/Be,rn=n()<.9*ae?n()<.5?2:1:0;for(let Xn=0;Xn<rn;Xn++){let O0=.015+n()*.11,et=$e+(n()-.5)*.2,Bt=S+(n()-.5)*.12;if(p&&p(et,Bt))continue;let B=c(c(c(nt,V,et),h,Bt),mt,O0),Y=(.14+.1*n())*(qt?1.05-.3*zo:1.2-.4*zo),J=.45+.55*(O0/.125)*(.6+.4*n());n()<Wt?n()<.55&&m(B,mt,h,Y*1.7,J):g(B,mt,h,Y,J)}co<2&&n()<.035&&oe.push([$e,S,De+(n()<.5?-.7:.7),Be*(.35+.4*n())*(1-zo*.5),co+1])}}},y=(nt,V,mt,Lt,fe)=>{let _e=f(ai.rleaf),ae=a(c(c(V,mt,n()*.8-.1),s(mt,V),(n()-.5)*.9)),qt=a(c(mt,ae,-i(mt,ae))),at=(n()-.5)*3,Wt=Math.cos(at),Ne=Math.sin(at);qt=a(c(c([0,0,0],qt,Wt),s(ae,qt),Ne));let oe=s(qt,ae);d(c(nt,qt,-Lt*.1),c([0,0,0],oe,Lt*l(_e)/2),c([0,0,0],qt,Lt),_e,fe,Mc.RLEAF,ae)},b=(nt,V,mt,Lt,fe,_e,ae)=>{let qt=Math.max(3,Math.round(fe*2.2)),at=($e,S,De)=>c(c(c(nt,V,$e),h,S),mt,De),Wt=y,Ne=null,oe=($e,...S)=>{p&&p(i(c($e,nt,-1),V),$e[1])||Wt($e,...S)},It=($e,S,De)=>{p&&p(i(c($e,nt,-1),V),$e[1])||e.push({at:$e,f:S,size:De,spin:n()*2*Te})};for(let $e=0;$e<qt;$e++){let S=Lt+(n()-.5)*fe*.35,De=.05,Be=(n()-.5)*1.4,co=_e*(.6+.4*n()),mo=(S-Lt)/(fe/2+.001);for(let go=0;go<200&&De<co&&(Be+=(n()-.5)*.3+mo*.012+(De>co*.6?Math.sign(Be||1)*.02:0),Be=Math.max(-1.25,Math.min(1.25,Be)),S+=Math.sin(Be)*.08,De+=Math.cos(Be)*.08,!(Math.abs(S-Lt)>fe*.6));go++){let No=De/co;for(let zo=0;zo<(n()<.8?2:1);zo++){let rn=.02+n()*.12;oe(at(S+(n()-.5)*.16,De+(n()-.5)*.12,rn),mt,h,.07+n()*.05,.5+.5*n())}if(No>.2&&n()<ae*(.018+.038*No)){let zo=1+Math.floor(n()*3);for(let rn=0;rn<zo;rn++){let Xn=a(c(c(mt,h,(n()-.4)*.8),s(h,mt),(n()-.5)*.9));It(at(S+(n()-.5)*.22,De+(n()-.5)*.2,.16+n()*.1),Xn,.19+n()*.09)}for(let rn=0;rn<3;rn++)oe(at(S+(n()-.5)*.25,De+(n()-.5)*.2,.05+n()*.08),mt,h,.07+n()*.04,.6+.4*n())}}}},M=(nt,...V)=>b(nt.o,nt.u,nt.n,...V),_={o:[0,0,0],u:[1,0,0],n:[0,0,1]},k={o:[0,0,Re],u:[1,0,0],n:[0,0,-1]},A={o:[Gt,0,0],u:[0,0,1],n:[-1,0,0]},z=(nt,...V)=>x(nt.o,nt.u,nt.n,...V);z(_,4.1,3,7,1.5),z(_,12,3.4,5.8,1.3),z(_,1,2.2,4.2,1.2),z(_,15,2,5,1.2),M(_,3.6,3.2,5.6,1.1),M(_,12.6,3,4.8,1),M(_,.9,1.6,3.2,.8);{let nt=Lo.face-.26,V={o:[0,0,Re-nt+.03],u:[1,0,0],n:[0,0,1]},mt=5.35+1.02;x(V.o,V.u,V.n,Gt-Lo.x1+1,1.9,2.2,1.2,mt,()=>3.2),x(V.o,V.u,V.n,Gt-Lo.x0-.5,.8,1,.8,mt,()=>4.6);for(let Lt=0;Lt<70;Lt++){let fe=Lo.x0+.2+Math.pow(n(),1.6)*2.4,_e=(Lo.x1-Lo.x0)/2+.2,ae=mt+.62*(1-Math.abs(fe-Lo.cx)/_e)+.02;g([Gt-fe,ae+n()*.05,.1+n()*(Re-nt-.15)],a([0,1,.3]),[0,0,1],.08+n()*.05,.7+.3*n())}}p=(nt,V)=>Math.abs(nt-Gt/2)<_0.w/2+_0.frame+.12&&V<_0.top+_0.frame+.12,z(k,5.3,3.2,6.2,1.4),z(k,11,3.6,7,1.4),z(k,1.2,2.4,4.4,1.2),z(k,14.9,2.2,5.4,1.2),x(k.o,k.u,k.n,Gt/2+.3,3.8,1.8,1.3,5.4,nt=>Math.abs(nt-Gt/2)<1.25?4.15:2.4),M(k,5.6,3.4,5.2,1.2),M(k,10.6,3.6,5.8,1.2),M(k,14.6,2,4,.9),p=null,z(A,2.6,4,7,1.4),z(A,9.2,4.6,5.4,1.2),z(A,15.6,5,7.4,1.5),z(A,20.9,2,4,1.2),M(A,3.2,3.6,5.4,1.1),M(A,8.6,3,4.2,1),M(A,13.4,3.2,5.8,1.1),M(A,18.6,3.4,5,1.2),p=(nt,V)=>ye.c.some(mt=>{let Lt=ya(nt-mt);return Lt!==null&&Math.abs(nt-mt)<ye.hw+.06&&V>ye.sill-.05&&V<Lt+.06});for(let[nt,V]of si.filter(mt=>mt[0]==="wall")){let mt=V<1||V>Re-1;x([0,0,0],[0,0,1],[1,0,0],V,mt?1:1.7,ho-.6,mt?.9:1.1,0,null,.85)}for(let nt of ye.c)x([0,0,0],[0,0,1],[1,0,0],nt,ye.hw*2.3,1.6,.8,ho-.6,V=>ya(V-nt)!==null?ya(V-nt)+.15:ho-2.2,.85);p=null,r=o;let D=(nt,V,mt,Lt,fe,_e,ae)=>{let qt=f(ai.blade),at=[Math.cos(_e),0,Math.sin(_e)],Wt=Math.max(Lt*.16,.012);d([nt,V,mt],[-at[2]*Wt/2,0,at[0]*Wt/2],[at[0]*fe*Lt*.4,Lt,at[2]*fe*Lt*.4],qt,ae,Mc.BLADE,a([at[0]*.5,1,at[2]*.5]),at,Lt>.12?Lt*fe*.6:0)},P=(nt,V,mt,Lt,fe)=>{for(let _e=0;_e<fe;_e++){let ae=n()*2*Te,qt=n()*.035;D(nt+Math.cos(ae)*qt,V,mt+Math.sin(ae)*qt,Lt*(.45+.55*n()),.25+.75*n(),ae+(n()-.5),.6+.4*n())}},G=(nt,V,mt,Lt)=>{let fe=4+Math.floor(n()*3),_e=n()*2*Te;for(let ae=0;ae<fe;ae++){let qt=f(ai.weed),at=_e+ae*2*Te/fe+(n()-.5)*.4,Wt=[Math.cos(at),0,Math.sin(at)],Ne=.35+n()*.45,oe=Lt*(.7+.5*n()),It=[Wt[0]*Math.cos(Ne)*oe,Math.sin(Ne)*oe,Wt[2]*Math.cos(Ne)*oe],$e=oe*l(qt);d([nt,V+.004,mt],[-Wt[2]*$e/2,0,Wt[0]*$e/2],It,qt,.7+.3*n(),Mc.WEED,a([-Wt[0]*Math.sin(Ne),Math.cos(Ne),-Wt[2]*Math.sin(Ne)]),[0,-1,0],oe*.15)}},I=(nt,V,mt)=>{let Lt=.05+n()*.12;D(nt,V,mt,Lt+.02,.15,n()*2*Te,.8);let fe=f(ai.daisy),_e=.03+n()*.025,ae=(n()-.5)*.6,qt=n()*2*Te,at=[Math.cos(qt)*_e*2,Math.sin(ae)*_e,Math.sin(qt)*_e*2],Wt=[-Math.sin(qt)*_e,0,Math.cos(qt)*_e];d([nt-Math.cos(qt)*_e,V+Lt,mt-Math.sin(qt)*_e],Wt,at,fe,1,Mc.DAISY,[0,1,0]),G(nt,V,mt,.04)},H=(nt,V,mt,Lt)=>{let fe=n();fe<.8?P(nt,V,mt,Lt?.2+.3*n():.08+.1*n(),Lt?5+Math.floor(n()*6):3+Math.floor(n()*3)):fe<.93?G(nt,V,mt,Lt?.09+.06*n():.06+.03*n()):I(nt,V,mt)},ft=dt.x0-dt.curb-.08,Nt=dt.x1+dt.curb+.08,_t=dt.z0-dt.curb-.08,xt=dt.z1+dt.curb+.08,ut=Gt-Lo.x1-.16,Yt=Gt-Lo.x0+.16,Se=Re-Lo.face+.36,Oe=(nt,V)=>Math.hypot(nt-to.cx,V-to.cz),oo=(nt,V)=>Oe(nt,V)>to.ri-.1&&Oe(nt,V)<to.ro+1.6||nt>ft&&nt<Nt&&V>_t&&V<xt||nt>ut&&nt<Yt&&V<Se||Math.abs(nt-Gt/2)<1.15&&V>Re-.5||nt<.06||nt>Gt-.06||V<.06||V>Re-.06,me=(nt,V)=>{let mt=Math.min(nt,Gt-nt,V,Re-V),Lt=Math.max(ft-nt,nt-Nt,_t-V,V-xt),fe=Math.max(ut-nt,nt-Yt,V-Se);return Math.min(mt,Math.max(Lt,0)+(Lt<0?9:0),Math.max(fe,0)+(fe<0?9:0))},Ke=(nt,V)=>.5+.5*Math.sin(nt*.9+1.3)*Math.sin(V*.7-.4)+.25*Math.sin(nt*2.3+V*1.7);for(let nt=0;nt*2<Gt;nt++)for(let V=0;V*2<Re;V++)for(let[mt,Lt]of y8){let fe=(nt+mt)*2,_e=(V+Lt)*2;if(oo(fe,_e))continue;let ae=me(fe,_e),qt=(ae<1.2?.75-.4*ae:.2)*Math.max(.2,Ke(fe,_e));n()<qt&&H(fe,.002,_e,ae<.8&&n()<.85)}let Ye=(nt,V,mt)=>{let Lt=Math.hypot(V[0]-nt[0],V[1]-nt[1]);for(let fe=0;fe<Lt;fe+=.08){if(n()>.8)continue;let _e=fe/Lt,ae=.04+Math.pow(n(),2)*.3,qt=nt[0]+(V[0]-nt[0])*_e+mt[0]*ae,at=nt[1]+(V[1]-nt[1])*_e+mt[1]*ae;oo(qt,at)||H(qt,.002,at,!0)}};Ye([0,0],[0,Re],[1,0]),Ye([Gt,0],[Gt,Re],[-1,0]),Ye([0,0],[Gt,0],[0,1]),Ye([0,Re],[Gt,Re],[0,-1]),Ye([ft,_t],[Nt,_t],[0,-1]),Ye([ft,_t],[ft,xt],[-1,0]),Ye([Nt,_t],[Nt,xt],[1,0]),Ye([ut,Se],[Yt,Se],[0,1]),Ye([ut,0],[ut,Se],[-1,0]),Ye([Yt,0],[Yt,Se],[1,0]);for(let nt=0;nt<60;nt++){let V=Math.floor(n()*3),mt,Lt;V<2?(mt=V?dt.x1+.08+n()*.38:dt.x0-.08-n()*.38,Lt=dt.z0+n()*(dt.z1-dt.z0)):(Lt=dt.z1+.08+n()*.38,mt=dt.x0+n()*(dt.x1-dt.x0)),P(mt,dt.top,Lt,.04+.06*n(),2+Math.floor(n()*3))}return{walls:t,ground:o,roses:e}}var _8=`
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
`,M8=Tg.map(t=>Ed([t[0],t[1]-.22,t[2]])),Fr=`
	${_8}
	${Td()}

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
		vec3 p = pw - vec3(${ct(de[0])}, ${ct(de[1])}, ${ct(de[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.84, 0.62) * 4.6, vec3(0.50, 0.64, 1.0) * 1.6, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${ct(ho)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${ct(Gt)} - p.x), min(p.z, ${ct(Re)} - p.z));
		float occ = mix(0.55, 1.0, smoothstep(0.0, 2.2, dw)) * mix(0.72, 1.0, smoothstep(0.0, 2.5, p.y));
		// (kept low and cool: the shade is deep and a little green-grey, so
		// the room feels old and still and the sunbeams carry the drama)
		vec3 skyC = mix(vec3(0.50, 0.55, 0.54), vec3(0.020, 0.032, 0.065), night);
		col += skyC * (0.18 + 0.55 * upF) * occ * (0.85 + 0.3 * hgt) * 0.22;
		// the bright left windows, seen from walls and things facing them
		col += mix(vec3(1.0, 0.86, 0.66), vec3(0.06, 0.08, 0.14), night) * max(-N.x, 0.0) * 0.12 * occ;
		// light thrown back up off the sunlit floor: warm, from below
		float pools = mix(1.0, 0.15, night);
		col += vec3(0.95, 0.68, 0.42) * pools * (0.07 + 0.18 * max(-N.y, 0.0)) * (1.0 - smoothstep(0.5, 6.0, p.y)) * smoothstep(0.0, 1.2, dw);

		// the lamps (by night)
		if (night > 0.01) {
			${M8.map(t=>`
			{
				vec3 d = vec3(${ct(t[0])}, ${ct(t[1])}, ${ct(t[2])}) - pw;
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
		float h = 1.0 - exp(-d * 0.06);
		// thicker low down, where the damp hangs over the floor and the pool
		float low = 1.0 - smoothstep(0.0, 3.0, (pw.y + eye.y) * 0.5);
		vec3 airC = mix(vec3(0.17, 0.17, 0.16), vec3(0.012, 0.018, 0.035), night);
		return mix(col, airC, clamp(h * (0.42 + 0.25 * low), 0.0, 0.8));
	}
`;function k8(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let l=0;l<3;l++)n.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:r,mn:n,sz:a,pos:i,idx:c,nrm:f}}function lr(t,e,o){let r=o&&o.wrap||"clamp",n=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:n,ready:!1};return fetch(e).then(s=>{if(!s.ok)throw new Error("Could not load "+e);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let f=new Image;f.onload=()=>i(f),f.onerror=c,f.src=URL.createObjectURL(s)}))).then(s=>{n({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:r}),a.ready=!0}).catch(s=>console.error(s)),a}var Uh=128,Bh=Math.round((dt.z1-dt.z0)/(11/372)),Kl=(dt.x1-dt.x0)/Uh,Lg=(dt.z1-dt.z0)/Bh,S8=.02,Ng=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,qa=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${Ng}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${Uh-1}.0, ${Bh-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${Uh}.0, ${Bh}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${ct(dt.x0+de[0])}, ${ct(dt.z0+de[2])})) / vec2(${ct(Kl)}, ${ct(Lg)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${ct(S8)};
#endif
		return h;
	}
`,zg=`
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
	${qa}
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
	}`,E8=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm, floorCol, floorNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${qa}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${Fr}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	// a photographed stone laid flat on a face, along the face's main axis:
	// its texture coordinates and the directions of the picture's right and up
	void planar(vec3 p, vec3 N, float scale, out vec2 uv, out vec3 T, out vec3 B) {
		vec3 a = abs(N);
		if (a.y > a.x && a.y > a.z) { uv = p.xz; T = vec3(1.0, 0.0, 0.0); B = vec3(0.0, 0.0, -1.0); }
		else if (a.x > a.z) { uv = vec2(p.z, -p.y); T = vec3(0.0, 0.0, 1.0); B = vec3(0.0, 1.0, 0.0); }
		else { uv = vec2(p.x, -p.y); T = vec3(1.0, 0.0, 0.0); B = vec3(0.0, 1.0, 0.0); }
		uv /= scale;
	}
	// the stone's relief from its normal map (rg), and its hollows (b)
	vec3 bumped(vec3 N, vec3 T, vec3 B, vec4 tn, float k) {
		vec2 d = tn.rg * 2.0 - 1.0;
		return normalize(N + (T * d.x + B * d.y) * k);
	}
	// the old stone's colour: greyed, cooled, a little green, as in his photograph
	vec3 oldTone(vec3 tc) {
		float lum = dot(tc, vec3(0.3, 0.59, 0.11));
		return mix(vec3(lum), tc, 0.42) * vec3(1.06, 1.10, 1.06);
	}

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${ct(de[0])}, ${ct(de[1])}, ${ct(de[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${Et.PETAL}.0)) N = -N;
		if (is(${Et.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${Et.FLOOR}.0) || is(${Et.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${Et.BRACT}.0)) {
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

		if (is(${Et.ROCK}.0)) {
			// rough walling: uneven slabs of pale coral stone bedded in lime,
			// greyed by age, damp and darker at the foot, streaked where rain
			// once ran down
			vec2 uv; vec3 T, B;
			planar(p, N, 2.0, uv, T, B);
			vec3 tc = texture2D(rockCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(rockNrm, uv);
			float lum = dot(tc, vec3(0.3, 0.59, 0.11));
			base = mix(vec3(lum), tc, 0.5) * vec3(1.62, 1.64, 1.56);
			base *= 0.86 + 0.24 * fbm3(p * vec3(0.22, 0.16, 0.22) + 5.0);
			float streak = fbm3(vec3((p.x + p.z) * 1.6, p.y * 0.1, 3.0));
			base = mix(base, base * vec3(0.72, 0.75, 0.70), smoothstep(0.52, 0.78, streak) * 0.8);
			base *= mix(0.66, 1.0, smoothstep(0.0, 1.3, p.y + 0.4 * streak));
			base *= mix(1.0, 0.84, smoothstep(${ct(ho-2.2)}, ${ct(ho)}, p.y));
			N = bumped(N, T, B, tn, 1.4);
			aoK = mix(0.42, 1.0, tn.b);
			gloss = 0.05;
		} else if (is(${Et.OLDSTONE}.0) || is(${Et.HOLLOW}.0)) {
			// old weathered limestone, dressed in blocks: grey and lichened,
			// darker and greener low down and where the water has been
			vec2 uv; vec3 T, B;
			planar(p, N, 1.7, uv, T, B);
			vec3 tc = texture2D(oldCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(oldNrm, uv);
			base = oldTone(tc) * 1.18;
			base *= 0.86 + 0.26 * fbm3(p * 0.5 + 9.0);
			float streak = fbm3(vec3((p.x + p.z) * 3.0, p.y * 0.25, 7.0));
			base = mix(base, base * vec3(0.55, 0.58, 0.52), smoothstep(0.55, 0.8, streak) * 0.75);
			// moss and wet near the water and the floor
			float low = 1.0 - smoothstep(0.0, ${ct(dt.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${Et.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${ct(Lo.floor)}, ${ct(Lo.spring)}, p.y));
			}
			N = bumped(N, T, B, tn, 1.1);
			aoK = mix(0.5, 1.0, tn.b);
			gloss = 0.08;
		} else if (is(${Et.PLASTER}.0) || is(${Et.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${ct(ho-2)}, ${ct(ho)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${Et.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${Et.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${Et.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${Et.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${Et.FLOOR}.0)) {
			// flagstones: irregular grey slabs, worn and uneven, with grass and
			// moss in the joints between them (res/studio/floor_*)
			vec2 uv = p.xz / 2.0;
			vec3 tc = texture2D(floorCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(floorNrm, uv);
			float lum = dot(tc, vec3(0.3, 0.59, 0.11));
			float green = smoothstep(-0.01, 0.035, sqrt(tc.g) - 0.5 * (sqrt(tc.r) + sqrt(tc.b)));
			// the stones greyed like his photograph, the joints kept green
			base = mix(mix(vec3(lum), tc, 0.35) * vec3(1.18, 1.20, 1.16), tc * vec3(0.62, 1.12, 0.42), green);
			base *= 0.84 + 0.28 * fbm3(vec3(p.xz * 0.3, 4.0));
			// damp and darker near the walls and round the pool
			float wallD = min(min(p.x, ${ct(Gt)} - p.x), min(p.z, ${ct(Re)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${ct(dt.x0-dt.curb)} - p.x, p.x - ${ct(dt.x1+dt.curb)}), vec2(${ct(dt.z0-dt.curb)} - p.z, p.z - ${ct(dt.z1+dt.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${Et.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${Et.REDDOOR}.0) || is(${Et.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${Et.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${Et.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${Et.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${Et.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${Et.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${Et.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${Et.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${Et.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${Et.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${Et.MARBLE}.0)) {
			// the nymph, aged like the niche: weathered pale stone gone grey,
			// rain streaks down her, grime in the folds and under her, lichen at the foot
			vec3 w = pow(abs(N), vec3(4.0)); w /= (w.x + w.y + w.z);
			vec3 tc = texture2D(oldCol, p.zy * 0.9).rgb * w.x + texture2D(oldCol, p.xz * 0.9).rgb * w.y + texture2D(oldCol, p.xy * 0.9).rgb * w.z;
			tc *= tc;
			base = mix(vec3(0.27, 0.26, 0.225), oldTone(tc) * 1.05, 0.65);
			float rain = fbm3(vec3(p.x * 7.0, p.y * 0.7, p.z * 7.0));
			base *= mix(1.0, 0.5, smoothstep(0.5, 0.8, rain));
			// grey-green lichen in blotches
			float lich = smoothstep(0.58, 0.72, fbm3(p * 9.0 + 4.0));
			base = mix(base, vec3(0.14, 0.15, 0.11), lich * 0.55);
			base *= mix(0.62, 1.0, smoothstep(-0.7, 0.35, N.y));
			float foot = 1.0 - smoothstep(${ct(gn.plinth)}, ${ct(gn.plinth+.7)}, p.y);
			base = mix(base, base * vec3(0.55, 0.62, 0.48), foot * smoothstep(0.4, 0.7, fbm3(p * 6.0)));
			sss = 0.06;
			gloss = 0.14;
		} else if (is(${Et.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${Et.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${Et.PAINT}.0)) {
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
		} else if (is(${Et.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${Et.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${Et.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${Et.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${Et.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${Et.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${ct(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${Et.CLOTH}.0)) {
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
		if (is(${Et.POT}.0) || is(${Et.STEEL}.0) || is(${Et.SHADE}.0) || is(${Et.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${Et.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${Et.REDDOOR}.0) || is(${Et.REDPANEL}.0) || is(${Et.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${Et.FLOOR}.0)) {
			// worn stone: no mirror, just a faint sheen of the room at grazing angles
			float cosV = clamp(V.y, 0.0, 1.0);
			alpha = 1.0 - 0.1 * pow(1.0 - cosV, 4.0) * mirrorOn;
		}
		if (is(${Et.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${ct(Kl)};
			float h0 = poolHeight(pw.xz);
			vec2 grad = vec2(poolHeight(pw.xz + vec2(e, 0.0)) - poolHeight(pw.xz - vec2(e, 0.0)), poolHeight(pw.xz + vec2(0.0, e)) - poolHeight(pw.xz - vec2(0.0, e))) / (2.0 * e);
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			float stir = clamp(length(grad) * 6.0, 0.0, 1.0);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float F = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			float refl = mix(0.30, 0.95, F);
			// the sun (or the moon) glinting on the moving water
			vec3 Rw = reflect(-V, Nw);
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * sunVis;
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			col = base * light * 0.35;
			// where the rings pass, crests tipped away from you catch the bright
			// roof, troughs show the dark depth
			float side = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 9.0, -1.0, 1.0);
			vec3 hi = studioSky(Rw) * mix(0.55, 0.30, night) + light * 0.04;
			vec3 lo = vec3(0.008, 0.011, 0.010);
			vec3 ringC = mix(lo, hi, 0.5 + 0.5 * side);
			col = mix(col, ringC, stir * (reflOn > 0.5 ? 0.25 : 0.6));
			col = studioAir(col, pw, v_eye);
			alpha = 1.0 - refl * mirrorOn * (1.0 - stir * 0.6);
			if (reflOn > 0.5 && mirrorOn > 0.5) {
				// the room's reflection, bent by the slope of the water under it
				vec3 dN = Nw - vec3(0.0, 1.0, 0.0);
				vec3 rgt = vec3(view[0].x, view[1].x, view[2].x), upv = vec3(view[0].y, view[1].y, view[2].y);
				float dist = length(v_eye - pw);
				vec2 off = vec2(dot(dN, rgt), dot(dN, upv)) * 0.3 / (1.0 + dist * 0.2);
				vec3 rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize + off, vec2(0.001), vec2(0.999))).rgb;
				col = mix(col, rc * rc, refl * (1.0 - stir * 0.3));
				alpha = 1.0;
			}
			col += glintC * glint;
			alpha = max(alpha, glint);
			if (mirrorOn < 0.5) { col = mix(col, studioSky(Rw) * 0.35, F); alpha = 1.0; }
		}

		col = max(col, vec3(0.0));
		gl_FragColor = vec4(sqrt(col), alpha);
	}`;L0.exports=function(t){let e=d8();p8(e),v8(e),m8(e),c8(e),l8(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},r=performance.now(),n={t:0},a=0,s=t._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=B=>i?B:`#define NO_SIM
`+B,f=(()=>{let B=Uh,Y=Bh,J=new Uint8Array(B*Y*4);for(let je=0;je<B*Y;je++)J[je*4]=128,J[je*4+2]=128;let Vt=()=>t.framebuffer({color:t.texture({width:B,height:Y,data:J,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),Xt=[Vt(),Vt()],zt=0,Rt=new Uint8Array(B*Y*4);for(let je=0;je<Y;je++)for(let Uo=0;Uo<B;Uo++){let Ao=dt.x0+(Uo+.5)*Kl,Ie=dt.z0+(je+.5)*Lg,He=Math.abs(Ao-gn.x)<.43&&Math.abs(Ie-gn.z)<.43,lo=0;for(let ht of Ad)lo=Math.max(lo,1-Math.min(1,Math.max(0,(Math.hypot(Ao-ht[0],Ie-ht[1])-ht[2]*.7)/(ht[2]*.3))));let j=(je*B+Uo)*4;Rt[j]=He?0:255,Rt[j+1]=Math.round(lo*255),Rt[j+3]=255}let Qt=t.texture({width:B,height:Y,data:Rt,min:"nearest",mag:"nearest",wrap:"clamp"}),se=16,ce=[];for(let je=0;je<se;je++)ce.push([0,0,0,.04]);let xe={prev:t.prop("prev"),mask:Qt};for(let je=0;je<se;je++)xe["src["+je+"]"]=(Uo=>()=>ce[Uo])(je);let Ge=Math.pow(.36*(1/60)/Kl,2),ie=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${se}];
			varying vec2 uv;
			${Ng}
			void main() {
				vec2 px = 1.0 / vec2(${B}.0, ${Y}.0);
				vec4 c = texture2D(prev, uv);
				vec4 m = texture2D(mask, uv);
				float h = simDec(c.rg), hp = simDec(c.ba);
				if (m.r < 0.5) { gl_FragColor = vec4(simEnc(0.0), simEnc(0.0)); return; }
				// the neighbours (a wall or the plinth turns the wave back)
				float hs[4];
				vec2 d[4];
				d[0] = vec2(px.x, 0.0); d[1] = vec2(-px.x, 0.0); d[2] = vec2(0.0, px.y); d[3] = vec2(0.0, -px.y);
				float lap = -4.0 * h;
				for (int k = 0; k < 4; k++) {
					vec2 q = uv + d[k];
					bool inside = q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0 && texture2D(mask, q).r > 0.5;
					lap += inside ? simDec(texture2D(prev, q).rg) : h;
				}
				// the pads hush the small waves under them
				float damp = mix(0.996, 0.95, m.g);
				float hn = h + (h - hp) * damp + ${ct(Ge)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${ct(dt.x0+de[0])}, ${ct(dt.z0+de[2])}) + uv * vec2(${ct(dt.x1-dt.x0)}, ${ct(dt.z1-dt.z0)});
				for (int i = 0; i < ${se}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:xe,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:B,height:Y}}),Ve=[],Ze=0,ge=0;return{tex:()=>Xt[zt].color[0],drop(je,Uo,Ao,Ie){Ve.push([je,Uo,Ze,Ao,0,Ie||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([je,Uo,Ze,Ao])},advance(je,Uo){let Ao=je-Ze-ge;if(Ao<0||Ao>2){Ze=je,ge=0;return}ge+=Ao;let Ie=0;for(;ge>=1/60&&Ie<8;){ge-=1/60,Ze+=1/60,Ie++;let He=0;for(let lo=Ve.length-1;lo>=0;lo--){let j=Ve[lo],ht=Ze-j[2];if(ht>1.4){Ve.splice(lo,1);continue}if(He>=se)continue;let pe=j[3]*.05*Math.sin(ht*2*Math.PI*2.4)*Math.exp(-ht*3.2),he=ce[He++];he[0]=j[0],he[1]=j[1],he[2]=pe,he[3]=j[5]}for(let lo of Uo){if(He>=se)break;let j=ce[He++];j[0]=lo[0],j[1]=lo[1],j[2]=lo[2],j[3]=lo[3]}for(;He<se;He++)ce[He][2]=0;ie({prev:Xt[zt].color[0],out:Xt[1-zt]}),zt=1-zt}Ie===8&&(ge=0,Ze=je)},read(){return t.read({framebuffer:Xt[zt]})}}})(),l=()=>{n.t=(performance.now()-r)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(n.t=window.__studioFreeze);for(let J of kg){let Vt=h8(J,n.t),Xt=Vt.ph-Vt.Tf;Vt.inPool&&Xt>=0&&Xt<.5&&!(J.heard>n.t-1)&&(J.heard=n.t,f.drop(Vt.lx+de[0],Vt.lz+de[2],1.1,.04))}let B=n.t-mt.sim.t;for((B<0||B>120)&&(B=Math.min(Math.max(B,0),120));B>1e-6;){let J=Math.min(B,.05);mt.sim.step(J),B-=J}for(let J of mt.sim.events)J[2]>a&&(a=J[2],f.drop(J[0]+de[0],J[1]+de[2],J[3]*1.3,J[3]>=1?.07:.04));let Y=[];for(let J of mt.sim.fish){let Vt=Math.min(1,Math.max(0,(J.y+.15)/.09));if(Vt<=0)continue;let Xt=.008*Vt*Math.min(1.5,J.v/.15);Y.push([J.x+de[0]+Math.cos(J.th)*.02,J.z+de[2]+Math.sin(J.th)*.02,Xt,.045]),Y.push([J.x+de[0]-Math.cos(J.th)*.14,J.z+de[2]-Math.sin(J.th)*.14,-Xt,.055])}f.advance(n.t,Y)},v={stime:()=>n.t,simTex:()=>f.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=n,window.__pondSim=f);let d=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=[4,4],u=0,h=t({}),g=()=>h(B=>{let Y=B.viewportWidth,J=B.viewportHeight;d.width!==Y||d.height!==J?d({copy:!0,width:Y,height:J,min:"linear",mag:"linear",wrap:"clamp"}):d.subimage({copy:!0,width:Y,height:J}),p[0]=Y,p[1]=J,u=1}),m=lr(t,"res/pond/lilypad.webp"),x=lr(t,"res/pond/petals.webp"),y=lr(t,"res/studio/rock_col.webp",{wrap:"repeat"}),b=lr(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),M=lr(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),_=lr(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),k=lr(t,"res/studio/floor_col.webp",{wrap:"repeat"}),A=lr(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),z=Object.assign({padTex:()=>m.tex,petalTex:()=>x.tex,reflTex:()=>d,reflSize:()=>p,reflOn:()=>u,rockCol:()=>y.tex,rockNrm:()=>b.tex,oldCol:()=>M.tex,oldNrm:()=>_.tex,floorCol:()=>k.tex,floorNrm:()=>A.tex},v),D=(B,Y)=>t({vert:c(zg),frag:E8,attributes:{position:B.pos,normal:B.nrm,kind:B.kind,uv:B.uv,anchor:B.anchor&&B.anchor.length?B.anchor:new Float32Array(B.pos.length/3*4)},elements:new Uint32Array(B.idx),count:Y||B.idx.length,uniforms:z,cull:{enable:!1},blend:o}),P=D(e),G=null;fetch(gn.file).then(B=>{if(!B.ok)throw new Error("Could not load "+gn.file);return B.arrayBuffer()}).then(B=>{let Y=k8(B),J={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},Vt=gn.height,Xt=Math.cos(gn.yaw),zt=Math.sin(gn.yaw);for(let Rt=0;Rt<Y.nV;Rt++){let Qt=(Y.mn[0]+Y.pos[Rt*3]/65535*Y.sz[0])*Vt,se=(Y.mn[1]+Y.pos[Rt*3+1]/65535*Y.sz[1])*Vt,ce=(Y.mn[2]+Y.pos[Rt*3+2]/65535*Y.sz[2])*Vt;J.pos.push(gn.x+Xt*Qt+zt*ce+de[0],gn.plinth+se+de[1],gn.z-zt*Qt+Xt*ce+de[2]);let xe=Y.nrm[Rt*3]/127,Ge=Y.nrm[Rt*3+1]/127,ie=Y.nrm[Rt*3+2]/127;J.nrm.push(Xt*xe+zt*ie,Ge,-zt*xe+Xt*ie),J.kind.push(Et.MARBLE),J.uv.push(0,0)}for(let Rt=0;Rt<Y.nI;Rt++)J.idx.push(Y.idx[Rt]);G=D(J)}).catch(B=>console.error(B));let I=lr(t,"res/tree/leaves.webp"),H=g8(),ft=t({vert:c(`
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
		}`),frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D tex;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		${Fr}
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
		}`,attributes:{position:H.pos,normal:H.nrm,uv:H.uv,shade:H.shade,flower:H.flower},elements:new Uint32Array(H.idx),uniforms:{tex:I.tex},cull:{enable:!1}}),Nt=lr(t,"res/studio/plants.webp"),_t=lr(t,"res/studio/vleaves.webp"),xt=w8(),ut=B=>t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal, info;
		attribute vec2 uv;
		varying vec3 v_pos, v_nrm, v_eye, v_info;
		varying vec2 v_uv;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv; v_info = info;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D tex, tex2;
		varying vec3 v_pos, v_nrm, v_eye, v_info;
		varying vec2 v_uv;
		${Fr}
		void main() {
			vec4 tx = v_info.y > 5.5 ? texture2D(tex2, v_uv) : texture2D(tex, v_uv);
			if (tx.a < 0.5) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float type = v_info.y;
			vec3 base = tx.rgb * tx.rgb;
			float gloss = 0.3, through = 1.8;
			vec3 trC = vec3(0.9, 1.0, 0.5);
			if (type < 0.5) {
				// ivy: the photographed leaves deepened to an old ivy's dark green
				float l = dot(base, vec3(0.3, 0.59, 0.11));
				base = mix(vec3(l), base, 1.3) * vec3(0.42, 0.60, 0.36);
				gloss = 0.55; through = 1.2;
			} else if (type < 1.5) {
				base *= vec3(0.80, 0.92, 0.62);
				// darker down in the grass, near the ground
				base *= mix(0.35, 1.0, smoothstep(0.0, 0.7, v_info.z));
			} else if (type < 2.5) {
				gloss = 0.15; through = 0.8;
			} else if (type < 3.5) {
				base *= vec3(0.62, 0.78, 0.5);
			} else if (type < 4.5) {
				// rose petals: dark red velvet, the sun glowing red through them
				gloss = 0.22; through = 1.6; trC = vec3(1.0, 0.35, 0.35);
			} else if (type > 5.5) {
				// the vine's leaves, as photographed, a little deepened for the shade of the room
				base *= vec3(0.78, 0.86, 0.68);
				gloss = 0.4; through = 1.3;
			} else {
				// the rose's own leaves: a deeper, bluer green than the ivy
				base *= vec3(0.55, 0.72, 0.5);
				gloss = 0.45; through = 1.0;
			}
			base *= v_info.x;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, gloss, spec, sv);
			float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * trC * tr * through * (1.0 - night) + spec * 0.2 * gloss;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:B.pos,normal:B.nrm,uv:B.uv,info:B.info},elements:new Uint32Array(B.idx),uniforms:{tex:Nt.tex,tex2:_t.tex},cull:{enable:!1}}),Yt=ut(xt.walls),Se=a8(),Oe=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		uniform float time;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float sw;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		void main() {
			// a slow flow in the still air: waves running down the fall, the
			// hem lifting and settling, never in step round the drum
			vec2 c = position.xz - vec2(${ct(to.cx+de[0])}, ${ct(to.cz+de[2])});
			float a = atan(c.x, c.y);
			vec2 out2 = normalize(c);
			float y = position.y;
			float w = sin(time * 0.55 + a * 2.3 - y * 0.9) * 0.6 + sin(time * 0.93 + a * 5.1 + y * 1.7) * 0.3 + sin(time * 0.31 - a * 1.3) * 0.4;
			float side = sin(time * 0.7 + a * 3.7 - y * 1.3);
			vec3 p0 = position + vec3(out2.x, 0.0, out2.y) * w * 0.07 * sw + vec3(-out2.y, 0.0, out2.x) * side * 0.035 * sw;
			v_pos = p0; v_nrm = normalize(normal + vec3(out2.x, 0.0, out2.y) * side * 0.25 * sw); v_uv = uv;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = p0; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${Fr}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			float facing = dot(N, V);
			if (facing < 0.0) N = -N;
			float cosV = abs(facing);
			// the net: fine threads, and the threads' own unevenness in streaks down the fall
			vec2 w = v_uv * vec2(260.0, 900.0);
			float threads = max(smoothstep(0.78, 0.98, abs(sin(w.x))), smoothstep(0.78, 0.98, abs(sin(w.y))));
			float streak = 0.5 + 0.5 * sin(v_uv.x * 41.0 + sin(v_uv.y * 9.0 + v_uv.x * 3.0) * 2.0);
			float sheer = 0.5 + 0.16 * streak + 0.08 * threads;
			// edge on, the net closes up into solid colour
			float a = clamp(sheer + (1.0 - sheer) * pow(1.0 - cosV, 2.6) * 0.9, 0.0, 0.9);
			vec3 base = vec3(0.2, 0.008, 0.036) * (0.8 + 0.4 * streak);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.35, spec, sv);
			float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv * (1.0 - night * 0.6);
			float sheen = pow(1.0 - cosV, 3.0);
			// (a little of the room's own dim light caught in the net, so it reads even in the shade)
			vec3 col = base * (light + vec3(0.6, 0.5, 0.48)) * (1.0 + 1.6 * sheen) + vec3(0.3, 0.012, 0.025) * tr * 0.45 + spec * 0.03;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)) * a, a);
		}`,attributes:{position:Se.pos,normal:Se.nrm,uv:Se.uv,sw:Se.sw},elements:new Uint32Array(Se.idx),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",srcAlpha:"one",dstRGB:"one minus src alpha",dstAlpha:"one minus src alpha"}}}),oo=lr(t,"res/studio/rose_col.webp"),me=null;fetch("res/studio/rose.bin").then(B=>{if(!B.ok)throw new Error("Could not load res/studio/rose.bin");return B.arrayBuffer()}).then(B=>{let Y=new DataView(B).getUint32(4,!0),J=new Float32Array(B,8,Y*8),Vt=new Float32Array(xt.roses.length*Y*3),Xt=new Float32Array(Vt.length),zt=new Float32Array(xt.roses.length*Y*2),Rt=0;for(let Qt of xt.roses){let se=Qt.f,ce=Math.abs(se[1])>.9?[1,0,0]:[0,1,0],xe=[ce[1]*se[2]-ce[2]*se[1],ce[2]*se[0]-ce[0]*se[2],ce[0]*se[1]-ce[1]*se[0]],Ge=Math.hypot(...xe),ie=xe.map(Ao=>Ao/Ge),Ve=[se[1]*ie[2]-se[2]*ie[1],se[2]*ie[0]-se[0]*ie[2],se[0]*ie[1]-se[1]*ie[0]],Ze=Math.cos(Qt.spin),ge=Math.sin(Qt.spin),je=ie.map((Ao,Ie)=>Ao*Ze+Ve[Ie]*ge),Uo=Ve.map((Ao,Ie)=>Ao*Ze-ie[Ie]*ge);for(let Ao=0;Ao<Y;Ao++){let Ie=J[Ao*8],He=J[Ao*8+1],lo=J[Ao*8+2],j=J[Ao*8+3],ht=J[Ao*8+4],pe=J[Ao*8+5];for(let he=0;he<3;he++)Vt[Rt*3+he]=Qt.at[he]+de[he]+(je[he]*Ie+Uo[he]*He+se[he]*lo)*Qt.size,Xt[Rt*3+he]=je[he]*j+Uo[he]*ht+se[he]*pe;zt[Rt*2]=J[Ao*8+6],zt[Rt*2+1]=J[Ao*8+7],Rt++}}me=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				uniform float yScale;
				attribute vec3 position, normal;
				attribute vec2 uv;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				void main() {
					v_pos = position; v_nrm = normal; v_uv = uv;
					vec3 t = view[3].xyz;
					v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
					v_eye.y *= yScale;
					vec3 p = position; p.y *= yScale;
					gl_Position = proj * view * vec4(p, 1.0);
				}`),frag:`
				precision highp float;
				uniform float night, time;
				uniform sampler2D tex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				${Fr}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 base = texture2D(tex, v_uv).rgb; base *= base;
					vec3 spec; float sv;
					vec3 light = studioLight(v_pos, N, V, 0.25, spec, sv);
					// velvet: a soft sheen at the petals' edges, and the sun glowing red through them
					float rim = pow(1.0 - max(dot(N, V), 0.0), 2.0);
					float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv * (1.0 - night);
					vec3 col = base * light * (1.0 + 0.35 * rim) + base * vec3(1.0, 0.3, 0.3) * tr * 1.5 + spec * 0.05;
					col = studioAir(col, v_pos, v_eye);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				}`,attributes:{position:Vt,normal:Xt,uv:zt},count:Rt,uniforms:{tex:oo.tex},cull:{enable:!1}})}).catch(B=>console.error(B));let Ke=ut(xt.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",xt.walls.pos.length/3,"ground verts",xt.ground.pos.length/3);let Ye=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, gFloat, gSize;
		uniform vec3 gPos, gAxis;
		uniform float gAng;
		attribute vec2 corner;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${qa}
		mat3 rotAxis(vec3 a, float t) {
			float c = cos(t), s = sin(t), ic = 1.0 - c;
			return mat3(c + a.x * a.x * ic, a.y * a.x * ic + a.z * s, a.z * a.x * ic - a.y * s,
			            a.x * a.y * ic - a.z * s, c + a.y * a.y * ic, a.z * a.y * ic + a.x * s,
			            a.x * a.z * ic + a.y * s, a.y * a.z * ic - a.x * s, c + a.z * a.z * ic);
		}
		void main() {
			vec3 local = vec3(corner.x, 0.0, corner.y) * gSize;
			// a little cupped, like a real bract
			local.y += 0.25 * gSize * (corner.x * corner.x + corner.y * corner.y) * 0.5;
			vec3 n = vec3(0.0, 1.0, 0.0);
			vec3 pos = gPos;
			mat3 R = rotAxis(normalize(gAxis), gAng);
			if (gFloat > 0.5) {
				float h0 = poolHeight(pos.xz);
				vec2 grad = vec2(poolHeight(pos.xz + vec2(0.05, 0.0)) - h0, poolHeight(pos.xz + vec2(0.0, 0.05)) - h0) / 0.05;
				pos.y = 0.017 + h0 * 1.4;
				R = rotAxis(vec3(0.0, 1.0, 0.0), gAng);
				local = R * local;
				local.y += dot(local.xz, grad) * 1.4;
				n = normalize(vec3(-grad.x, 1.0, -grad.y));
			} else { local = R * local; n = R * n; }
			vec3 q = pos + local;
			v_pos = q; v_nrm = n; v_uv = corner * 0.5 + 0.5;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = q; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${Fr}
		void main() {
			vec2 u = v_uv * 2.0 - 1.0;
			float heart = length(vec2(u.x * 1.1, u.y + 0.15 * abs(u.x) * 2.0 - 0.1));
			if (heart > 0.85 + 0.1 * sin(atan(u.y, u.x) * 3.0)) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			// veined from the heart out, deeper magenta at the base
			float vein = 0.5 + 0.5 * cos(atan(u.y, u.x) * 9.0);
			vec3 base = vec3(0.62, 0.03, 0.22) * (0.85 + 0.25 * smoothstep(0.9, 0.0, heart)) * (0.92 + 0.12 * vein);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
			float through = abs(dot(N, STUDIO_SUN)) * sv;
			// it carries a little light of its own, so the eye can follow it through the shade
			vec3 col = base * (light + vec3(0.22, 0.16, 0.18)) + base * vec3(1.0, 0.75, 0.8) * through * 1.8 * (1.0 - night * 0.5);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,1]]},elements:[[0,1,2],[0,2,3]],uniforms:Object.assign({gPos:()=>{let B=Gr,Y=mt.sim.crumbs[0];return B.floating?[Y.x+de[0],0,Y.z+de[2]]:[B.pos[0]+de[0],B.pos[1],B.pos[2]+de[2]]},gAxis:()=>Gr.axis,gAng:()=>Gr.ang,gSize:()=>Gr.size,gFloat:()=>Gr.floating?1:0},v),cull:{enable:!1}}),nt=(()=>{let B={corner:[],start:[],par:[],misc:[],idx:[]};return kg.forEach((Y,J)=>{for(let Vt of[[-1,-1],[1,-1],[1,1],[-1,1]])B.corner.push(Vt[0],Vt[1]),B.start.push(Y.start[0]+de[0],Y.start[1],Y.start[2]+de[2]),B.par.push(Y.period,Y.offset,Y.drift[0],Y.drift[1]),B.misc.push(Y.speed,Y.seed,Y.white);B.idx.push(J*4,J*4+1,J*4+2,J*4,J*4+2,J*4+3)}),B})(),V=t({vert:c(`
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
		${qa}
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
			vec2 lq = land - vec2(${ct(de[0])}, ${ct(de[2])});
			bool inPool = lq.x > ${ct(us[0])} && lq.x < ${ct(us[2])} && lq.y > ${ct(us[1])} && lq.y < ${ct(us[3])};
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
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${Fr}
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
		}`,attributes:{corner:nt.corner,start:nt.start,par:nt.par,misc:nt.misc},elements:new Uint32Array(nt.idx),uniforms:v,cull:{enable:!1}}),mt={sim:u8(),ready:!1};I0=mt.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=mt.sim);let Lt=Object.assign({},v);na.forEach((B,Y)=>{Lt["koiA["+Y+"]"]=()=>{let J=mt.sim.fish[Y];return[J.x+de[0],J.y,J.z+de[2],J.th]},Lt["koiB["+Y+"]"]=()=>{let J=mt.sim.fish[Y];return[J.kappa,J.ph,J.amp,J.pitch]}});let fe=(()=>{let Y=Math.round(96*(dt.z1-dt.z0)/(dt.x1-dt.x0)),J=new Uint8Array(96*Y*4),Vt=[-wr[0]/wr[1]*-Vl,-wr[2]/wr[1]*-Vl],Xt=96/(dt.x1-dt.x0),zt=Y/(dt.z1-dt.z0);for(let Rt=0;Rt<Y;Rt++)for(let Qt=0;Qt<96;Qt++){let se=dt.x0+(Qt+.5)/Xt,ce=dt.z0+(Rt+.5)/zt,xe=0;for(let Ge of Ad){let ie=Math.hypot(se-(Ge[0]+Vt[0]),ce-(Ge[1]+Vt[1]));xe=Math.max(xe,1-Math.min(1,Math.max(0,(ie-Ge[2]*.82)/(Ge[2]*.35))))}J[(Rt*96+Qt)*4]=Math.round(xe*255),J[(Rt*96+Qt)*4+3]=255}return t.texture({width:96,height:Y,data:J,min:"linear",mag:"linear"})})(),_e=`
		uniform vec4 koiA[${na.length}], koiB[${na.length}];
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
	`,ae=`
		uniform vec4 koiA[${na.length}], koiB[${na.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${ct(wr[0])}, ${ct(wr[1])}, ${ct(wr[2])});
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
			vec2 lp = pw.xz - vec2(${ct(de[0])}, ${ct(de[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${ct(Vl)});
			vec2 uv = (lp - back - vec2(${ct(dt.x0)}, ${ct(dt.z0)})) / vec2(${ct(dt.x1-dt.x0)}, ${ct(dt.z1-dt.z0)});
			return texture2D(padShadow, uv).r;
		}
		// the sun's share of the light under the water at pw
		vec3 underSun(vec3 pw, vec3 N, float sv, out vec3 sunPart) {
			vec3 sunC = mix(vec3(1.0, 0.84, 0.62) * 4.6, vec3(0.50, 0.64, 1.0) * 1.6, night);
			sunPart = sunC * sv * max(dot(N, W_SUN), 0.0);
			float ca = caustic(pw.xz - W_SUN.xz / W_SUN.y * pw.y, stime);
			return sunPart * (1.0 - 0.85 * padShade(pw)) * (0.35 + 1.25 * ca);
		}
		// the water's surface over a point under it, as the eye sees it: the
		// room's reflection (bent by the waves), the sun's glint, and the rest
		// let through from below
		uniform sampler2D reflTex;
		uniform vec2 reflSize;
		uniform float reflOn;
		uniform mat4 view;
		vec3 throughSurface(vec3 under, vec3 pw, vec3 eye) {
			vec3 S = eye + (pw - eye) * (eye.y / max(eye.y - pw.y, 1e-4));
			float e = ${ct(Kl)};
			vec2 grad = vec2(poolHeight(S.xz + vec2(e, 0.0)) - poolHeight(S.xz - vec2(e, 0.0)), poolHeight(S.xz + vec2(0.0, e)) - poolHeight(S.xz - vec2(0.0, e))) / (2.0 * e);
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			vec3 V = normalize(eye - S);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float R = mix(0.06, 1.0, pow(1.0 - cosV, 5.0));
			vec3 Rw = reflect(-V, Nw);
			vec3 rc;
			if (reflOn > 0.5) {
				vec3 dN = Nw - vec3(0.0, 1.0, 0.0);
				vec3 rgt = vec3(view[0].x, view[1].x, view[2].x), upv = vec3(view[0].y, view[1].y, view[2].y);
				float dist = length(eye - S);
				vec2 off = vec2(dot(dN, rgt), dot(dN, upv)) * 0.3 / (1.0 + dist * 0.2);
				rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize + off, vec2(0.001), vec2(0.999))).rgb;
				rc *= rc;
			} else {
				rc = studioSky(Rw) * 0.35;
			}
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * studioSun(S + vec3(0.0, 0.02, 0.0));
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			// a passing ring bends the light from below into bright and dark bands
			float ring = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 12.0, -1.0, 1.0);
			float stir = clamp(length(grad) * 8.0, 0.0, 1.0);
			under *= 1.0 + 0.55 * ring * stir;
			return under * (1.0 - R) + rc * R + glintC * glint;
		}
		// what the water does to light that comes back up through it
		float showThrough(vec3 V) {
			float cosV = clamp(V.y, 0.0, 1.0);
			float Fr = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			return 1.0 - mix(0.05, 0.93, Fr);
		}
	`,qt=(()=>{let B=[],Y=[],J=[],Vt=[],Xt=(Ge,ie,Ve,Ze,ge)=>(B.push(Ge+de[0],ie,Ve+de[2]),Y.push(...Ze),J.push(ge),B.length/3-1),zt=(Ge,ie,Ve,Ze,ge,je,Uo)=>{let Ao=B.length/3;for(let Ie=0;Ie<=Ze;Ie++)for(let He=0;He<=ge;He++)Xt(Ge[0]+ie[0]*Ie/Ze+Ve[0]*He/ge,Ge[1]+ie[1]*Ie/Ze+Ve[1]*He/ge,Ge[2]+ie[2]*Ie/Ze+Ve[2]*He/ge,je,Uo);for(let Ie=0;Ie<Ze;Ie++)for(let He=0;He<ge;He++){let lo=Ao+Ie*(ge+1)+He;Vt.push(lo,lo+1,lo+ge+2,lo,lo+ge+2,lo+ge+1)}},{x0:Rt,x1:Qt,z0:se,z1:ce}=dt,xe=Vl;return zt([Rt,xe,se],[Qt-Rt,0,0],[0,0,ce-se],8,22,[0,1,0],0),zt([Rt,0,se],[0,0,ce-se],[0,xe,0],22,2,[1,0,0],1),zt([Qt,0,se],[0,0,ce-se],[0,xe,0],22,2,[-1,0,0],1),zt([Rt,0,se],[Qt-Rt,0,0],[0,xe,0],8,2,[0,0,1],1),zt([Rt,0,ce],[Qt-Rt,0,0],[0,xe,0],8,2,[0,0,-1],1),{pos:B,nrm:Y,kd:J,idx:Vt}})(),at=lr(t,"res/pond/gravel.jpg",{wrap:"repeat"}),Wt=Object.assign({padShadow:fe,gravel:()=>at.tex,reflTex:()=>d,reflSize:()=>p,reflOn:()=>u},Lt),Ne=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${qa}
		${_e}
		void main() {
			vec3 q = position;
			float h0 = poolHeight(q.xz);
			vec2 grad = vec2(poolHeight(q.xz + vec2(0.03, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.03)) - h0) / 0.03;
			q.xz -= grad * (-q.y) * 1.2;
			v_pos = q; v_nrm = normal; v_kd = kd; v_eye = eyeOf(view);
			gl_Position = underPos(q, proj, view, 0.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D gravel;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${qa}
		${Fr}
		${ae}
		float klen(int i) {
			${na.map((B,Y)=>`if (i == ${Y}) return ${ct(B.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${ct(Vl)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${na.length}; i++) {
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
			col = throughSurface(col, v_pos, v_eye);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:qt.pos,normal:qt.nrm,kd:qt.kd},elements:new Uint16Array(qt.idx),uniforms:Wt,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),oe=lr(t,"res/koi.webp"),It=null,$e=null;fetch("res/koi.bin").then(B=>{if(!B.ok)throw new Error("Could not load res/koi.bin");return B.arrayBuffer()}).then(B=>{let Y=new DataView(B),J=Y.getUint32(4,!0),Vt=Y.getUint32(8,!0),Xt=Y.getFloat32(12,!0),zt=16,Rt=new Uint16Array(B,zt,J);zt+=J*2;let Qt=new Int16Array(B,zt,J*2);zt+=J*4;let se=new Uint16Array(B,zt,J*2);zt+=J*4;let ce=new Uint16Array(B,zt,Vt);zt+=Vt*2;let xe=new Int8Array(B,zt,J*3);zt+=J*3;let Ge=new Uint8Array(B,zt,J*2),ie=na.length,Ve=new Float32Array(J*3*ie),Ze=new Float32Array(J*3*ie),ge=new Float32Array(J*2*ie),je=new Float32Array(J*2*ie),Uo=new Float32Array(J*4*ie);na.forEach((He,lo)=>{for(let j=0;j<J;j++){let ht=lo*J+j;Ve[ht*3]=Rt[j]/65535*1.2,Ve[ht*3+1]=Qt[j*2]/32767*Xt,Ve[ht*3+2]=Qt[j*2+1]/32767*Xt,Ze[ht*3]=xe[j*3]/127,Ze[ht*3+1]=xe[j*3+1]/127,Ze[ht*3+2]=xe[j*3+2]/127,ge[ht*2]=se[j*2]/65535,ge[ht*2+1]=se[j*2+1]/65535,je[ht*2]=Ge[j*2]/255,je[ht*2+1]=Ge[j*2+1]/255,Uo[ht*4]=He.len,Uo[ht*4+1]=He.kind,Uo[ht*4+2]=lo,Uo[ht*4+3]=0}});let Ao=[],Ie=[];for(let He=0;He<ie;He++)for(let lo=0;lo<Vt;lo+=3){let j=ce[lo],ht=ce[lo+1],pe=ce[lo+2];(Math.max(Ge[j*2],Ge[ht*2],Ge[pe*2])>140?Ie:Ao).push(j+He*J,ht+He*J,pe+He*J)}$e={body:t.elements({data:new Uint32Array(Ao),type:"uint32"}),fins:t.elements({data:new Uint32Array(Ie),type:"uint32"})},It=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${qa}
				${_e}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${na.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
					float th = A.w, kap = B.x, ph = B.y, beat = B.z, pitch = B.w;
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
					// (beat: how hard the tail is working, 0.1 gliding .. 1.5 hurrying)
					float amp = (0.004 + 0.085 * u * u) * beat;
					float sway = amp * sin(ph - 6.0 * u);
					float dsway = amp * cos(ph - 6.0 * u) * -6.0;
					vec3 L = loc;
					// the fins trail and ripple a little behind the body
					sway += fin.x * 0.012 * sin(ph * 1.3 - 9.0 * u) * (0.6 + 0.4 * u);
					// the pectoral fins paddle slowly, and fold back when it hurries
					float pect = fin.y;
					float fast = smoothstep(0.8, 1.5, beat);
					// gliding, they spread and scull slowly; stroking, they fold back
					L.z += pect * (0.03 + 0.03 * (1.0 - fast)) * sin(stime * (1.6 + 0.3 * km.z) + sign(L.y) * 0.9 + km.z);
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
				}`),frag:`
				precision highp float;
				uniform float night, time;
				uniform sampler2D koiTex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${qa}
				${Fr}
				${ae}
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
						base = mix(vec3(1.0, 0.46, 0.05), vec3(1.0, 0.56, 0.10), jit) * (0.40 + 0.72 * lum) * mix(1.0, 0.85, red);
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
					col = throughSurface(col, v_pos, v_eye);
					col = studioAir(col, v_pos, v_eye);
					a *= mix(1.0, exp(-v_depth * 0.5), 0.5);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
				}`,attributes:{loc:Ve,nrm:Ze,uv:ge,fin:je,km:Uo},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>oe.tex,padShadow:fe,reflTex:()=>d,reflSize:()=>p,reflOn:()=>u},Lt),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),mt.ready=!0}).catch(B=>console.error(B));let S=()=>{It&&(It({els:$e.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),It({els:$e.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),It({els:$e.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},De=(()=>{let B={cp:[],ci:[],idx:[]};for(let Y=0;Y<Yl;Y++){let J=B.cp.length/3,Vt=5,Xt=7;for(let zt=0;zt<=Vt;zt++)for(let Rt=0;Rt<Xt;Rt++){let Qt=zt/Vt*Math.PI,se=Rt/Xt*Math.PI*2,ce=1+.35*Math.sin(se*3+Y*1.7)*Math.sin(Qt*2+Y);B.cp.push(Math.sin(Qt)*Math.cos(se)*ce,Math.cos(Qt)*.6,Math.sin(Qt)*Math.sin(se)*ce*(.8+.4*(Y*.37%1))),B.ci.push(Y)}for(let zt=0;zt<Vt;zt++)for(let Rt=0;Rt<Xt;Rt++){let Qt=J+zt*Xt+Rt,se=J+zt*Xt+(Rt+1)%Xt,ce=J+(zt+1)*Xt+Rt,xe=J+(zt+1)*Xt+(Rt+1)%Xt;B.idx.push(Qt,se,xe,Qt,xe,ce)}}return B})(),Be=Object.assign({},v);for(let B=0;B<Yl;B++)Be["crumbs["+B+"]"]=()=>{let Y=mt.sim.crumbs[B],J=mt.sim.t,Vt=Y.alive&&!mt.sim.feed.petal?Math.min(1,Math.max(0,(J-Y.born)/.25)):0;return[Y.x+de[0],Y.z+de[2],Vt,Y.seed]};let co=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Yl}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${qa}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Yl}; i++) if (i == k) c = crumbs[i];
			float sz = 0.016 * (0.8 + 0.5 * fract(c.w * 3.7)) * c.z;
			float h0 = poolHeight(c.xy);
			vec3 q = vec3(c.x, 0.003 + h0 * 1.4, c.y) + cp * sz;
			v_pos = q; v_nrm = normalize(cp);
			vec3 tr = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			gl_Position = proj * view * vec4(q, 1.0);
			if (c.z < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		${Fr}
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
		}`,attributes:{cp:De.cp,ci:De.ci},elements:new Uint32Array(De.idx),uniforms:Be,cull:{enable:!1}}),mo=x8(),go=t({vert:c(zg),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${Fr}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${ct(de[0])}, ${ct(de[1])}, ${ct(de[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof: old plain glass, grimed and streaked, dimming the sky
			if (v_kind > 0.5) {
				float grime = smoothstep(0.25, 0.75, vnoise3(vec3(p.x * 0.35, p.z * 0.28, 2.0)));
				col = mix(col, mix(vec3(0.26, 0.27, 0.24), vec3(0.03, 0.035, 0.05), night), 0.6 + 0.3 * grime);
				a = max(a, 0.48 + 0.25 * (1.0 - grime));
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,attributes:{position:mo.pos,normal:mo.nrm,kind:mo.kind,uv:mo.uv,anchor:mo.anchor},uniforms:v,elements:new Uint32Array(mo.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),No=(()=>{let B={pos:[],idx:[]},Y=300,J=24,Vt=12;for(let Xt=0;Xt<=Vt;Xt++){let zt=-.25*Te+Xt/Vt*.75*Te;for(let Rt=0;Rt<=J;Rt++){let Qt=Rt/J*2*Te;B.pos.push(de[0]+Gt/2+Y*Math.cos(zt)*Math.cos(Qt),Y*Math.sin(zt),de[2]+Re/2+Y*Math.cos(zt)*Math.sin(Qt))}}for(let Xt=0;Xt<Vt;Xt++)for(let zt=0;zt<J;zt++){let Rt=Xt*(J+1)+zt,Qt=Rt+1,se=Rt+J+2,ce=Rt+J+1;B.idx.push(Rt,Qt,se,Rt,se,ce)}return B})(),zo=t({vert:c(`
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
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_eye;
		${Fr}
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
		void main() {`),attributes:{position:No.pos},elements:new Uint32Array(No.idx),cull:{enable:!1}}),rn=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),Xn=rn?2600:6500,O0=[];{let B=Ga(4242),Y=(Vt,Xt,zt)=>{let Rt=-Vt/wr[0],Qt=Xt+wr[1]*Rt,se=zt+wr[2]*Rt;return ye.c.some(ce=>{let xe=ya(se-ce);return xe!==null&&Qt>ye.sill&&Qt<xe})},J=0;for(;O0.length<Xn&&J++<Xn*60;){let Vt=[.2+B()*(Gt-.4),.1+B()*(ho+1),.2+B()*(Re-.4)];O0.length<Xn*.8&&!Y(...Vt)||O0.push([...Vt,B()])}}let et=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, night, pixelScale;
		attribute vec4 seed;
		varying float v_light, v_seed, v_spark;
		${Td()}
		void main() {
			float s = seed.w * 6.2831;
			vec3 p = seed.xyz;
			// slow drifting and turning, a faint settling, never in step
			p += vec3(sin(time * 0.10 + s * 3.0) * 0.32 + sin(time * 0.043 + s * 7.0) * 0.2,
			          sin(time * 0.07 + s * 5.0) * 0.25 - 0.015 * time * (0.4 + seed.w),
			          cos(time * 0.085 + s * 2.0) * 0.32 + cos(time * 0.037 + s * 9.0) * 0.2);
			p.y = mod(p.y - 0.1, ${ct(ho+1)}) + 0.1;
			p += vec3(${ct(de[0])}, ${ct(de[1])}, ${ct(de[2])});
			float light = studioSun(p);
			// a faint few in the shade too, so the dark air is not empty
			float dim = 0.05 * (1.0 - night * 0.5);
			v_seed = seed.w;
			v_spark = step(0.955, fract(seed.w * 37.0));
			vec4 vp = view * vec4(p, 1.0);
			float dist = max(-vp.z, 0.05);
			gl_Position = proj * vp;
			float lit = max(light, dim * step(0.7, fract(seed.w * 11.0)));
			if (lit <= 0.01 || vp.z > -0.15) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; v_light = 0.0; return; }
			float sharp = clamp(pixelScale * (0.9 + 1.3 * seed.w) / dist, 1.3, 5.0);
			// near the lens they swim out of focus into soft discs
			float blur = 1.0 - smoothstep(0.4, 2.2, dist);
			float size = sharp + blur * ${rn?"12.0":"20.0"} * (0.6 + 0.4 * seed.w);
			if (v_spark > 0.5) size = max(size, pixelScale * 9.0 / dist + 5.0);
			gl_PointSize = size;
			v_light = lit * (v_spark > 0.5 ? 1.0 : pow(sharp / size, 1.2) * (1.0 + 2.0 * blur));
		}`,frag:`
		precision highp float;
		uniform float time, night;
		varying float v_light, v_seed, v_spark;
		void main() {
			vec2 q = gl_PointCoord - 0.5;
			float r = length(q) * 2.0;
			vec3 c = mix(vec3(1.0, 0.90, 0.72), vec3(0.75, 0.84, 1.0), night);
			if (v_spark > 0.5) {
				// a glint: it flashes now and then as the fleck turns
				float ph = fract(time * (0.08 + 0.12 * v_seed) + v_seed * 13.0);
				float flash = smoothstep(0.0, 0.04, ph) * (1.0 - smoothstep(0.04, 0.22, ph));
				float core = exp(-r * r * 30.0);
				float star = exp(-abs(q.x) * 70.0) * exp(-abs(q.y) * 5.0) + exp(-abs(q.y) * 70.0) * exp(-abs(q.x) * 5.0);
				float a = (core * 1.6 + star * 0.9) * flash + core * 0.15;
				gl_FragColor = vec4(c * vec3(1.0, 0.97, 0.92) * a * v_light * 2.2, 1.0);
				return;
			}
			float point = exp(-r * r * 3.2) * (1.0 - smoothstep(0.85, 1.0, r));
			float t1 = sin(time * (0.9 + v_seed * 2.3) + v_seed * 40.0), t2 = sin(time * (0.37 + v_seed * 1.1) + v_seed * 17.0);
			float tw = 0.35 + 0.65 * smoothstep(-0.6, 1.0, t1 * t2 + 0.35 * t1);
			gl_FragColor = vec4(c * point * v_light * tw * 1.1, 1.0);
		}`,attributes:{seed:O0},count:Xn,primitive:"points",uniforms:{pixelScale:B=>B.viewportHeight*.0055},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function Bt(B){B&&B.reflected||(g(),l()),zo(),P(),B&&B.reflected||(Ne(),S(),co()),G&&G(),ft(),Yt(),me&&me(),B&&B.reflected||Ke(),V(),Gr.vis&&!(Gr.floating&&mt.sim.feed.eaten)&&Ye(),Oe(),B&&B.reflected||(go(),et())}return Bt};var I0=null,Gr={vis:!1,pos:[0,0,0],axis:[0,1,0],ang:0,size:.06,floating:!1};function z8(t){Object.assign(Gr,t)}function A8(t,e){I0&&!I0.feed.lure&&!I0.feed.petal&&I0.lure(t,e)}function T8(t,e){I0&&!I0.feed.petal&&(I0.petal(t,e),Gr.floating=!0)}function L8(){I0&&I0.unpetal(),Gr.floating=!1}function N8(){let t=I0&&I0.feed;return{landed:!!(t&&(t.petal||t.eaten))&&Gr.floating,eaten:!!(t&&t.eaten&&Gr.floating)}}function R8(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],r=t[0]+e[0]*o-de[0],n=t[2]+e[2]*o-de[2];return r<dt.x0||r>dt.x1||n<dt.z0||n>dt.z1?null:[r+de[0],n+de[2]]}function O8(t,e){I0&&I0.drop(t-de[0],e-de[2])}function C8(){return!!(I0&&I0.feed.on)}var Ag=[{from:[8,1.65,21.75],to:[8,1.7,21.2],at:[8,2.3,1],fov:52},{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],kc=11;function P8(t){let e=Ag.length,o=Math.floor(t/kc)%e,r=t%kc/kc,n=r*r*(3-2*r),a=Ag[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*n),i=Math.max(0,1-Math.min(r*kc,(1-r)*kc)/.7);return{eye:Ed(s),target:Ed(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/kc)}}L0.exports.previewCam=P8;L0.exports.setGuide=z8;L0.exports.petalLure=A8;L0.exports.petalLand=T8;L0.exports.petalReset=L8;L0.exports.petalState=N8;L0.exports.STUDIO={W:Gt,L:Re,H:ho,POOL:dt,ROT:to,NICHE:Lo,VENUS:gn,WIN:ye,TRUSS_Z:Sc};L0.exports.poolHit=R8;L0.exports.feedAt=O8;L0.exports.feeding=C8;L0.exports.sunGLSL=Td;L0.exports.O=de;L0.exports.SIZE={W:Gt,L:Re,H:ho,RIDGE:_r};L0.exports.BOX=[de[0]-.8,0,de[2]-.8,de[0]+Gt+.8,_r+.5,de[2]+Re+.8];L0.exports.AIR_BOX=[de[0],0,de[2],de[0]+Gt,_r,de[2]+Re]});var Xh=St((dA,$g)=>{"use strict";var{A:M0}=$r(),{C:Hn}=A0(),{DOOR:Ec}=rs(),u0=fs(),zc=ii(),Cg=Hn.hallEnd+.35,Pg={arch:[13.6,0,M0.zc-M0.arch.r-.3,14.4,M0.arch.spring+M0.arch.r+.3,M0.zc+M0.arch.r+.3],mouth:[13.3,0,Hn.z0-.3,14.3,8.2,Hn.z1+.3],stair:[-.5,0,u0.SURR.z0-.2,.5,u0.SURR.top+.3,u0.SURR.z1+.2],door:[Ec.x0-.4,0,-.5,Ec.x1+.4,Ec.top+.4,.5],windows:[15.6,.4,Hn.z1-.2,36.9,6.4,Hn.z1+.9],farDoor:[Hn.x1-.2,0,Hn.zc-Ec.r-.4,Hn.x1+.9,Ec.top+.4,Hn.zc+Ec.r+.4]},Ha={court:[M0.x0-.4,0,M0.z0-.3,M0.x1+.3,M0.domeTop+.5,M0.z1+.3],stair:[u0.C.x-u0.R-2.6,0,u0.C.z-u0.R-1.5,.5,15.6,u0.C.z+u0.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Hn.z1,46,60,Hn.z1+110],florence:[Hn.x1,-1,Hn.zc-30,Hn.x1+80,60,Hn.zc+30],studio:zc.BOX},I8=[[0,0,0,14,0,Cg],[13.6,0,Hn.z0,Hn.x1+.4,0,Hn.z1],[M0.x0-.4,0,M0.z0,M0.x1,0,M0.z1],[u0.C.x-u0.R-2.6,0,u0.C.z-u0.R,.4,0,u0.C.z+u0.R],[zc.BOX[0],0,zc.BOX[2],zc.BOX[3],0,zc.BOX[5]]],$8={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},tf=new Float64Array(24),ra=[7,2,2],Ig=0,Ua="out",Vh=!0;try{/[?&]nocull\b/.test(location.search)&&(Vh=!1)}catch(t){}var Zl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Jl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Rg=!0;function D8(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),r=e(1),n=e(2),a=e(3),s=(i,c,f,l)=>{for(let v=0;v<4;v++)tf[i*4+v]=c[v]+f*l[v]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,r),s(3,a,-1,r),s(4,a,1,n),s(5,a,-1,n)}function ds(t,e){if(!Vh)return!0;let o=e?-t[4]:t[1],r=e?-t[1]:t[4];for(let n=0;n<6;n++){let a=tf[n*4],s=tf[n*4+1],i=tf[n*4+2],c=tf[n*4+3],f=a>0?t[3]:t[0],l=s>0?r:o,v=i>0?t[5]:t[2];if(a*f+s*l+i*v+c<0)return!1}return!0}var Ld=(t,e)=>ra[0]>t[0]-e&&ra[0]<t[3]+e&&ra[2]>t[2]-e&&ra[2]<t[5]+e;function q8(t){if(Ld(t,.6))return null;let e=1/0,o=-1/0;for(let r=0;r<4;r++){let n=(r&1?t[3]:t[0])-ra[0],a=(r&2?t[5]:t[2])-ra[2],s=Math.atan2(n,a)-Ig;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function Og(t,e,o){let r=-Math.PI,n=Math.PI,a=s=>{let i=q8(s);return i?(r=Math.max(r,i[0]-.03),n=Math.min(n,i[1]+.03),r<=n):!0};for(let s of t){let i=Pg[s];if(!Ld(i,.6)&&(!ds(i,o)||!a(i)))return!1}return ds(e,o)&&a(e)}function F8(){let t=ra[0],e=ra[2],o=zc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>u0.C.z-u0.R-1.5&&t>u0.C.x-u0.R-2.6?"stair":t>14.1&&e>M0.z0-.3&&e<M0.z1+.3&&t<M0.x1+.3?"court":t>13.9&&e>Hn.z0-.4&&e<Hn.z1+.1&&t<Hn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<Cg?"hall":"out"}var G8={PORTAL:Pg,ROOM:Ha,update(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[n*4+i];r[n*4+a]=s}D8(r),ra[0]=o[0],ra[1]=o[1],ra[2]=o[2],Ig=Math.atan2(-t[2],-t[10]),Ua=F8();for(let n in Ha){if(n==="studio"||Ua==="studio"){Zl[n]=Jl[n]=n==="studio"&&Ua==="studio";continue}if(!Vh||Ua==="out"||Ua===n||Ld(Ha[n],.3))Zl[n]=ds(Ha[n],!1)||Ua===n,Jl[n]=ds(Ha[n],!0)||Ua===n;else{let a=$8[Ua][n];Zl[n]=a?Og(a,Ha[n],!1):ds(Ha[n],!1),Jl[n]=a?Og(a,Ha[n],!0):ds(Ha[n],!0)}}Rg=!Vh||I8.some(n=>ds(n,!1))},get zone(){return Ua},room(t,e){return e?Jl[t]:Zl[t]},box(t,e,o){return o&&!(e?Jl[o]:Zl[o])?!1:ds(t,e)},get floor(){return Rg}};$g.exports=G8});var qg=St((pA,Dg)=>{"use strict";var H8=dd(),U8=Xh();function B8(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let r=e.getUint32(4,!0),n=e.getUint32(8,!0),a=[],s=[];for(let v=0;v<3;v++)a.push(e.getFloat32(12+v*4,!0)),s.push(e.getFloat32(24+v*4,!0));let i=36,c=new Uint16Array(t,i,r*3);i+=r*6;let f=new Uint16Array(t,i,n);i+=n*2;let l=new Int8Array(t,i,r*3);return{nV:r,nI:n,mn:a,sz:s,pos:c,idx:f,nrm:l}}Dg.exports=(t,e)=>{let o=[],r=[],n=[],a=[],s=null,i=e.statues.length,c=[],f=(v,d)=>{let p=o.length/3,u=d.height*.75,h=d.base!==void 0?d.base:e.pedestalTop;c.push({offset:a.length,count:v.nI,box:[d.x-u,h-.1,d.z-u,d.x+u,h+d.height+.2,d.z+u]});let g=d.height,m=Math.cos(d.yaw),x=Math.sin(d.yaw),y=d.base!==void 0?d.base:e.pedestalTop;for(let b=0;b<v.nV;b++){let M=(v.mn[0]+v.pos[b*3]/65535*v.sz[0])*g,_=(v.mn[1]+v.pos[b*3+1]/65535*v.sz[1])*g,k=(v.mn[2]+v.pos[b*3+2]/65535*v.sz[2])*g;o.push(d.x+m*M+x*k,y+_,d.z-x*M+m*k);let A=v.nrm[b*3]/127,z=v.nrm[b*3+1]/127,D=v.nrm[b*3+2]/127;r.push(m*A+x*D,z,-x*A+m*D),n.push(d.mat||1,0,0)}for(let b=0;b<v.nI;b++)a.push(p+v.idx[b])},l=()=>{a.length!==0&&(s=H8(t,{position:o,normal:r,mat:n,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(v=>{fetch("res/"+v.file).then(d=>{if(!d.ok)throw new Error("Could not load "+v.file);return d.arrayBuffer()}).then(d=>f(B8(d),v)).catch(d=>console.error(d)).then(()=>{--i===0&&l()})}),function(v){if(!s)return;let d=!!(v&&v.reflected),p=c.filter(u=>U8.box(u.box,d));p.length&&s(p)}}});var Kg=St((vA,Rd)=>{"use strict";var j8=Qs(),e0=1.29032,li=[9.2968,2,5.9],W8=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Yh=2147.64,Fg=725,Gg=1288,Hg=1450,Ug=2576,fr=-5.197,hi=3.865,ps=10.135,ui=-14.679,ef=-30.229,of=7.232,Bg=-45.713,Ac=17.1*e0,fi=16.6*e0,nf=16.6*e0,jg=[6.9,17.1],Kh=[2.95,16.6],V8=1.6,X8=0,Y8=1,Wg=2,Nd=3,Vg=4,Xg=5,K8=6;function Q8(){let t=[],e=[],o=[],r=[],n=j8.createBuilder(t,e,o,r),a=(f,l,v,d,p,u,h=1,g=1)=>{let m=[];for(let x=0;x<=h;x++){let y=[];for(let b=0;b<=g;b++){let M=[f[0]+l[0]*x/h+v[0]*b/g,f[1]+l[1]*x/h+v[1]*b/g,f[2]+l[2]*x/h+v[2]*b/g],_=u(M);y.push(n.vert(M,d,[p,_[0],_[1]]))}m.push(y)}for(let x=0;x<h;x++)for(let y=0;y<g;y++)n.tri(m[x][y],m[x+1][y],m[x][y+1]),n.tri(m[x+1][y],m[x+1][y+1],m[x][y+1])},s=f=>l=>[(li[2]-l[2])/e0-f,l[1]/e0];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],X8,f=>[f[0]/e0,f[2]/e0],13,14),a([hi,0,fr],[0,0,ui-fr],[0,Ac,0],[1,0,0],Y8,s(8.6),6,6),a([-40,0,fr],[hi+40,0,0],[0,Ac,0],[0,0,1],Wg,f=>[(hi-f[0])/e0,f[1]/e0],8,4),a([-40,0,-.36],[0,0,fr+.36],[0,Ac,0],[1,0,0],Wg,f=>[-f[2]/e0,f[1]/e0]),a([ps,0,-80],[0,0,fr+80],[0,fi,0],[-1,0,0],Vg,s(8.6),12,6),a([ps,0,fr],[60,0,0],[0,fi,0],[0,0,1],Xg,f=>[(f[0]-ps)/e0,f[1]/e0],8,4),a([70,0,fr],[0,0,-.36-fr],[0,fi,0],[-1,0,0],Xg,f=>[-f[2]/e0,f[1]/e0]);let i=f=>[(f[0]-li[0])/e0+4.18,f[1]/e0];a([-20,0,ef],[of+20,0,0],[0,nf,0],[0,0,1],Nd,i,8,6),a([of,0,ef],[0,0,Bg-ef],[0,nf,0],[1,0,0],Nd,s(28),4,4),a([of,0,Bg],[ps-of,0,0],[0,fi,0],[0,0,1],Vg,f=>[(f[0]-li[0])/e0,f[1]/e0],2,4),a([-20,0,ui],[0,0,ef-ui],[0,nf,0],[1,0,0],Nd,s(16),4,4);let c=(f,l,v,d)=>a(f,l,v,d,K8,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:r}}function ci(t,e,o,r){let n=t.texture({data:[[r]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{n({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),n}var aa=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",Z8=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,ui],[hi,Ac,fr]],[[ps,0,-80],[70,fi,fr]],[[-20,0,-80],[of,nf,ef]],[[-40,0,-80],[-20,nf,ui]]],J8=Z8.map(t=>`if (hitBox(ro, rd, ${aa(t[0])}, ${aa(t[1])}, 1e4) ) return 0.0;`).join(`
		`),Yg="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>W8[e][t].toFixed(6)).join(", ")).join(", ")+")",tk=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${aa([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${J8}
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
	vec3 ro = ${aa(li)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${aa([-40,0,ui])}, ${aa([hi-.02,Ac,fr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${aa([ps+.02,0,-80])}, ${aa([70,fi,fr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${Yg} * (p - ${aa(li)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Fg.toFixed(2)} + ${Yh.toFixed(3)} * pc.x / pc.z) / ${Hg.toFixed(1)},
		(${Gg.toFixed(2)} - ${Yh.toFixed(3)} * pc.y / pc.z) / ${Ug.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${Yg} * (p - ${aa(li)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Fg.toFixed(2)} + ${Yh.toFixed(3)} * pc.x / pc.z) / ${Hg.toFixed(1)},
		(${Gg.toFixed(2)} - ${Yh.toFixed(3)} * pc.y / pc.z) / ${Ug.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${aa(li)}), n));
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
		base = texture2D(cobbleTex, fuv / ${V8.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${jg[0].toFixed(2)}, 1.0 - fuv.y / ${jg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Kh[0].toFixed(2)}, 1.0 - fuv.y / ${Kh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Kh[0].toFixed(2)}, 1.0 - fuv.y / ${Kh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(hi-.05).toFixed(3)} && v_pos.x < ${(ps+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${ui.toFixed(3)};
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
}`,ek=`
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
}`,ok=Zn();Rd.exports=t=>{let e=Q8(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},r={wrapS:"mirror",wrapT:"clamp",flipY:!1},n={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=ci(t,"res/street/photo.jpg",o,[190,160,120]),s=ci(t,"res/street/photo_night.jpg",o,[12,14,22]),i=ci(t,"res/street/photo_mask.png",o,[255,255,255]),c=ci(t,"res/street/facade_pink.jpg",r,[200,150,135]),f=ci(t,"res/street/facade_yellow.jpg",r,[225,180,95]),l=ci(t,"res/street/facade_cream.jpg",r,[215,200,175]),v=ci(t,"res/street/cobbles.jpg",n,[95,95,95]),d=Date.now(),p=t({frag:tk,vert:ek,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:v,photoNight:s,night:()=>ok.night,time:()=>(Date.now()-d)/1e3}});return function(){p()}};Rd.exports.layout={MOUTH_Z:fr,PINK_X:hi,RIGHT_X:ps,PINK_H:Ac,CREAM_H:fi,S:e0}});var Jg=St((mA,Zg)=>{"use strict";var nk=Zn().GLSL,{glassPanes:rk}=rs(),Qg=A0();function ak(){let t=[],e=[],o=(r,n)=>{for(let a of r)t.push(a),e.push(n)};return o(rk(),[0,0,1]),o(Qg.windowGlass(),[0,0,1]),o(Qg.farDoorGlass(),[1,0,0]),{position:t,normal:e}}Zg.exports=t=>{let e=ak(),o=t({frag:`
		precision highp float;
		${nk}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var mx=St((gA,$d)=>{"use strict";var ax=Zn().GLSL,sk=Qs(),Od=Cr(),{wallWithHoles:ik,C:gs}=A0(),Ce=.28,st={westBack:14.4,westCol:15-Ce,eastCol:37.4+Ce,eastBack:41.8,south:gs.z1+.7,northCol:gs.z1+.7+16,northBack:gs.z1+.7+19,cx:(15+37.4)/2,cz:(gs.z1+.7+gs.z1+.7+16-Ce)/2},Xo={x0:st.westCol+Ce,x1:st.eastCol-Ce,z0:st.south,z1:st.northCol-Ce},$0=3.3,sf=.92,xs=5.6,tx=6,Hr=11.9,ms=9.6,Eo={x0:st.cx-2.9,x1:st.cx+2.9,top:14.4},n1=7,sx=4,Pd=(st.eastCol-st.westCol)/n1,ck=(st.northCol-st.south)/sx,ix=3,lf=.26,mi=1.4,pi=1.1,Zh=3,ba=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),we={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},wa=[],cx=(t,e,o)=>[st.cx+t,e,st.cz+o],Jh=cx(-5.9,0,3.4),ys=.85,vs={c:[Jh[0],4.6*ys+.5,Jh[2]],r:[5*ys,3.6*ys,4.5*ys]},lx=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[Jh[0]+t.d[0]*ys,t.d[1]*ys+.5,Jh[2]+t.d[2]*ys],r:t.r.map(e=>e*ys),n:t.n}));for(let t of lx)wa.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var lk=[3.6,6.3,9];for(let t of lk){let e=8.6+t%1.7*.6;wa.push({c:cx(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var fk=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:st.cx+t.d[0],z:st.cz+t.d[1],bloom:t.bloom}));for(let t of fk)wa.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var Id=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[st.cx+Math.cos(e)*2.3,st.cz+Math.sin(e)*2.3]});for(let[t,e]of Id)wa.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var fx=[];{let t=(o,r,n,a,s,i)=>{let c=Math.hypot(n-o,a-r),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let v=l/f,d=o+(n-o)*v,p=r+(a-r)*v;s!==void 0&&Math.abs((n!==o?d:p)-s)<i||fx.push([d,p])}};t(Xo.x0+.45,Xo.z0+1.2,Xo.x0+.45,Xo.z1-.45,st.cz,1),t(Xo.x1-.45,Xo.z0+1.2,Xo.x1-.45,Xo.z1-.45,st.cz,1),t(Xo.x0+.45,Xo.z1-.45,Xo.x1-.45,Xo.z1-.45,st.cx,1.9)}var hk=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],t1=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function Lc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function o0(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),[i,0,0])}function uk(t,e,o){return{vert:(r,n,a)=>t.vert(e(r),o(n),a),tri:t.tri}}var dk={north:[t=>[t[0],t[1],st.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[st.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[st.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function hx(t,e,o,r,n){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?r:.02),c=t+(s+1)*e-(s===o-1?n:.02);a.push([i,c,t+(s+.5)*e])}return a}var pk=hx(st.westCol,Pd,n1,Ce+lf,Ce+lf),ex=hx(st.south,ck,sx,.32,Ce+lf),Tc=[st.cx-32.35,st.northCol-77],vk=Array.from({length:n1-1},(t,e)=>st.westCol+(e+1)*Pd),ux=t=>(t[1]-t[0])/2-.2,cf=t=>(t[0]+t[1])/2;function mk(t,e){let o=cf(t),r=ux(t);return{u0:t[0],u1:t[1],bottom:e?0:sf,head:n=>{let a=Math.abs(n-o);return a<r?$0+Math.sqrt(r*r-a*a):$0},step:.05}}function gk(t,e,o){return{u0:t-o,u1:t+o,bot:r=>e-Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),head:r=>e+Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),step:.04,mat:[we.STONE,0,0]}}function xk(t,e,o,r){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>r,step:.5,mat:[we.STONE,0,0]}}function ox(t,e,o){let[r,n]=dk[e],a=uk(t,r,n),s=[];o.arches.forEach((l,v)=>s.push(mk(l,v===o.open)));let i=[];for(let l of o.bays||o.arches){let v=cf(l);o.oculi&&s.push(gk(v,6.85,.3)),i.push({c:v,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(xk(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);ik(a,{u0:o.u0,u1:o.u1,w0:-Ce,w1:Ce,top:o.top,holes:s,mat:[we.BRICK,0,0],revealMat:[we.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,v,d,p,u,h,g)=>{let m=r([l,v,d]),x=r([p,u,h]);o0(t,m[0],m[1],m[2],x[0],x[1],x[2],g)},f=(l,v,d,p,u,h)=>Lc(a,l,v,d,p,u,[h,0,0]);for(let l of o.arches){let v=cf(l),d=ux(l),p=28;for(let u of[Ce,-Ce]){let h=u>0?1:-1,g=u+h*.025;for(let m=0;m<p;m++){let x=Math.PI*m/p,y=Math.PI*(m+1)/p,b=(P,G)=>[v+Math.cos(P)*G,$0+Math.sin(P)*G],M=b(x,d),_=b(y,d),k=b(x,d+.26),A=b(y,d+.26);f([M[0],M[1],g],[_[0],_[1],g],[A[0],A[1],g],[k[0],k[1],g],[0,0,h],we.STONE);let z=Math.cos((x+y)/2),D=Math.sin((x+y)/2);f([k[0],k[1],u],[A[0],A[1],u],[A[0],A[1],g],[k[0],k[1],g],[z,D,0],we.STONE)}}}if(o.arches.forEach((l,v)=>{v!==o.open&&c(l[0]-.02,sf,-Ce-.05,l[1]+.02,sf+.09,Ce+.05,we.STONE)}),c(o.u0,tx,-Ce,o.u1,tx+.18,Ce+.09,we.STONE),c(o.u0,o.win[0]-.12,Ce-.01,o.u1,o.win[0],Ce+.06,we.STONE),o.cornice)for(let[l,v,d]of o.cornice)c(l,d-.22,Ce-.01,v,d,Ce+.16,we.STONE),c(l,d,Ce-.01,v,d+.16,Ce+.42,we.STONE);for(let{c:l,y0:v,y1:d,w:p,door:u}of i){let h=p/2;if(f([l-h-.01,v,.06],[l+h+.01,v,.06],[l+h+.01,d,.06],[l-h-.01,d,.06],[0,0,1],u?we.DARK:we.PANE),u){c(l-h-.16,0,Ce-.01,l-h,d+.16,Ce+.07,we.STONE),c(l+h,0,Ce-.01,l+h+.16,d+.16,Ce+.07,we.STONE),c(l-h-.16,d,Ce-.01,l+h+.16,d+.2,Ce+.09,we.STONE),c(l-h,0,.07,l+h,d-.02,.12,we.SHUTTER),c(l-.012,0,.12,l+.012,d-.02,.14,we.DARK);continue}for(let g of[-1,1]){let m=l+g*h;c(m+g*.02,v+.02,Ce+.02,m+g*(h+.025),d-.02,Ce+.06,we.SHUTTER)}c(l-h-.09,d,Ce-.01,l+h+.09,d+.16,Ce+.05,we.STONE),c(l-h-.09,v-.1,Ce-.01,l+h+.09,v,Ce+.09,we.STONE),c(l-.015,v,.06,l+.015,d,.09,we.SHUTTER),c(l-h,(v+d)/2-.015,.06,l+h,(v+d)/2+.015,.09,we.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let v=cf(l);f([v-.31,6.54,0],[v+.31,6.54,0],[v+.31,7.16,0],[v-.31,7.16,0],[0,0,1],we.DARK)}for(let l of o.cols){let v=sf+.09,d=r([l,0,0]);o0(t,d[0]-.24,v,d[2]-.24,d[0]+.24,v+.12,d[2]+.24,we.MARBLE),t.lathe([[.23,v+.12,1],[.24,v+.17],[.2,v+.24],[.215,v+.28],[.17,v+.34,1],[.165,v+.6],[.155,$0-.5],[.15,$0-.38,1],[.175,$0-.34,1],[.17,$0-.3],[.2,$0-.22],[.27,$0-.15],[.29,$0-.12,1]],d[0],d[2],18,{mat:()=>[we.MARBLE,0,0]}),o0(t,d[0]-.29,$0-.12,d[2]-.29,d[0]+.29,$0+.01,d[2]+.29,we.STONE)}o.walk&&o.walk(t)}function yk(t){let e=[-1,0,1].map(n=>{let a=st.cx+n*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[we.STONE,0,0]}});ox(t,"north",{u0:st.westCol-Ce,u1:st.eastCol+Ce,top:n=>n>Eo.x0+1e-6&&n<Eo.x1-1e-6?Eo.top:Hr,cuts:[Eo.x0,Eo.x0+1e-5,Eo.x1-1e-5,Eo.x1],arches:pk,open:ix,cols:vk,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[st.westCol-Ce-3.3,Eo.x0,Hr],[Eo.x1,st.eastCol+Ce+3.3,Hr],[Eo.x0-.2,Eo.x1+.2,Eo.top]],walk:n=>{o0(n,Xo.x0,xs,st.northCol+Ce,Xo.x1,xs+.2,st.northBack,we.PLASTER),o0(n,Xo.x0,0,st.northBack,Xo.x1,xs,st.northBack+.3,we.PLASTER);for(let a of[st.cx-7.2,st.cx,st.cx+7.2])Lc(n,[a-.8,0,st.northBack-.01],[a+.8,0,st.northBack-.01],[a+.8,2.9,st.northBack-.01],[a-.8,2.9,st.northBack-.01],[0,0,-1],[we.DARK,0,0]),o0(n,a-.98,0,st.northBack-.06,a+.98,3.12,st.northBack,we.STONE),Lc(n,[a-.8,0,st.northBack-.07],[a+.8,0,st.northBack-.07],[a+.8,2.9,st.northBack-.07],[a-.8,2.9,st.northBack-.07],[0,0,-1],[we.DARK,0,0])}}),Lc(t,[Eo.x0,11,st.northCol+.2],[Eo.x1,11,st.northCol+.2],[Eo.x1,13.6,st.northCol+.2],[Eo.x0,13.6,st.northCol+.2],[0,0,-1],[we.DARK,0,0]),o0(t,Eo.x0+.3,10.88,st.northCol-Ce-.06,Eo.x1-.3,11,st.northCol-Ce+.1,we.STONE),o0(t,st.westBack,xs+.2,st.northBack,st.eastBack,Hr,st.northBack+3.4,we.BRICK),o0(t,st.westBack,ms,st.northCol-Ce,st.westCol-Ce,Hr,st.northCol+Ce,we.BRICK),o0(t,st.eastCol+Ce,ms,st.northCol-Ce,st.eastBack,Hr,st.northCol+Ce,we.BRICK),o0(t,st.westBack,xs+.2,st.northCol+Ce+.12,st.eastBack,Hr,st.northBack,we.BRICK),rf(t,[st.westBack-.5,Hr+.16,st.northCol-Ce-.42],[Eo.x0-st.westBack+.5,0,0],[0,2.6,4.4],we.ROOF),rf(t,[Eo.x1,Hr+.16,st.northCol-Ce-.42],[st.eastBack+.5-Eo.x1,0,0],[0,2.6,4.4],we.ROOF),rf(t,[Eo.x0-.3,Eo.top+.16,st.northCol-Ce-.42],[Eo.x1-Eo.x0+.6,0,0],[0,1.4,3],we.ROOF),nx(t,[Eo.x0-.3,Eo.top+.16,st.northCol-Ce-.42],[Eo.x0-.3,Eo.top+1.56,st.northCol-Ce+2.58],[Eo.x0-.3,Eo.top+.16,st.northCol-Ce+2.58],[-1,0,0],we.BRICK),nx(t,[Eo.x1+.3,Eo.top+.16,st.northCol-Ce-.42],[Eo.x1+.3,Eo.top+1.56,st.northCol-Ce+2.58],[Eo.x1+.3,Eo.top+.16,st.northCol-Ce+2.58],[1,0,0],we.BRICK),o0(t,Eo.x0,Hr,st.northCol+Ce,Eo.x1,Eo.top,st.northCol+2.6,we.BRICK);for(let[n,a]of[[st.cx-9.8,st.northBack+.6],[st.cx+9.4,st.northBack+.4],[st.cx-4.6,st.northBack+1]])o0(t,n-.4,12.5,a-.4,n+.4,15.4,a+.4,we.BRICK),o0(t,n-.52,15.4,a-.52,n+.52,15.62,a+.52,we.STONE);let o=(n,a,s)=>{let i=n==="west"?-1:1,c=[];ex.forEach((v,d)=>{let p=cf(v);d===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),ox(t,n,{u0:st.south,u1:st.northCol-Ce,top:()=>ms,arches:[],bays:ex,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[st.south,st.northCol-Ce,ms]]}),o0(t,a,0,st.south,s+i*(Ce+.12),ms,st.northBack+.3,we.BRICK);let f=s-i*Ce;o0(t,f,0,st.south,f-i*.06,.55,st.northCol-Ce,we.STONE);let l=s-i*(Ce+.42);rf(t,[l,ms+.16,st.south],[0,0,st.northCol-Ce-st.south],[a-l+i*.4,1.9,0],we.ROOF)};o("west",st.westBack,st.westCol),o("east",st.eastBack,st.eastCol);let r=gs.x1+.7;o0(t,13.65,7.4,st.south-.02,r,7.62,st.south+.14,we.STONE),o0(t,13.65,10.4,st.south-.02,r,10.6,st.south+.38,we.STONE),rf(t,[13.65,10.6,st.south+.38],[r-13.65,0,0],[0,2.2,-5],we.ROOF)}function nx(t,e,o,r,n,a){let s=[a,0,0];t.tri(t.vert(e,n,s),t.vert(o,n,s),t.vert(r,n,s))}function rf(t,e,o,r,n){let a=t1([o[1]*r[2]-o[2]*r[1],o[2]*r[0]-o[0]*r[2],o[0]*r[1]-o[1]*r[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+r[0]*l,e[1]+o[1]*f+r[1]*l,e[2]+o[2]*f+r[2]*l];Lc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[n,0,0]);let c=.08;Lc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],t1([-r[0],0,-r[2]]),[n,0,0])}function bk(t){let e=st.westBack,o=st.eastBack,r=st.south,n=st.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,r+(n-r)*f/s];i[c].push(t.vert(l,[0,1,0],[we.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var af=.46,vi=.58,di=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function wk(t,e,o){let r=pi+o,n=(t>0?Xo.x1-st.cx:st.cx-Xo.x0)-mi-o,a=pi+o,s=(e>0?Xo.z1-st.cz:st.cz-Xo.z0)-mi-o,i=Zh+o,c=Math.sqrt(i*i-r*r),f=Math.sqrt(i*i-a*a),l=[[r,c],[r,s],[n,s],[n,a],[f,a]],v=Math.atan2(a,f),d=Math.atan2(c,r);for(let p=1;p<10;p++){let u=v+(d-v)*p/10;l.push([Math.cos(u)*i,Math.sin(u)*i])}return l.map(([p,u])=>[st.cx+t*p,st.cz+e*u])}function _k(t,e,o){let r=o[0]-e[0],n=o[1]-e[1],a=Math.hypot(r,n),s=r/a,i=n/a,c=-i,f=s,l=af*.5,v=-l,d=a+l,p=[],u=Math.max(1,Math.ceil((d-v)/1));for(let h=0;h<=u;h++){let g=v+(d-v)*h/u,m=[];for(let x=0;x<di.length;x++){let[y,b]=di[x],M=Math.min(di.length-2,x),_=di[Math.max(0,x-1)],k=di[Math.min(di.length-1,x+1)],A=(k[0]-_[0])*af,D=(k[1]-_[1])*vi,P=-A,G=Math.hypot(D,P)||1,I=[e[0]+s*g+c*y*af,b*vi,e[1]+i*g+f*y*af],H=[c*(-D/G),-P/G,f*(-D/G)];m.push(t.vert(I,H[1]<-.2?[c*Math.sign(y),.3,f*Math.sign(y)]:H,[we.HEDGE,0,0]))}p.push(m)}for(let h=0;h<u;h++)for(let g=0;g<di.length-1;g++)t.tri(p[h][g],p[h+1][g],p[h+1][g+1]),t.tri(p[h][g],p[h+1][g+1],p[h][g+1]);for(let[h,g]of[[0,-1],[u,1]]){let m=p[h],x=t.vert([e[0]+s*(h?d:v),vi*.5,e[1]+i*(h?d:v)],[s*g,0,i*g],[we.HEDGE,0,0]);for(let y=0;y<m.length-1;y++)t.tri(x,m[y],m[y+1])}}function Mk(t){for(let e of[-1,1])for(let o of[-1,1]){let r=wk(e,o,.3);for(let n=0;n<r.length;n++)_k(t,r[n],r[(n+1)%r.length])}}function kk(t){let e=st.cx,o=st.cz,r=()=>[we.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:r}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:r}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[we.DARK,0,0]});let n={mat:()=>[we.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,n),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,n);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,n),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,n),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,n);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,n)}}function Sk(t){for(let[e,o]of Id)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[we.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[we.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],r=>.045-r*.02,6,6,{mat:()=>[we.BARK,0,0]})}function Ek(t){let[e,,o]=vs.c,r=px(7),n=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of n){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(r()-.5),i+1.4,o+s*1.35+(r()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[we.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,v=[e+a*l,i*l,o+s*l],d=r()*Math.PI*2;t.tube([v,[v[0]+Math.cos(d)*1.3,v[1]+.9,v[2]+Math.sin(d)*1.3],[v[0]+Math.cos(d)*2.3,v[1]+1.4+r(),v[2]+Math.sin(d)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[we.BARK,0,0]})}}for(let a of wa.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[we.BARK,0,0]})}function zk(t){let e=()=>[we.FARBRICK,0,0],o=()=>[we.LEAD,0,0],r=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let v=[];for(let p=0;p<=12;p++){let u=p/12*Math.PI/2,h=Math.cos(u)*i,g=Math.sin(u)*f;l&&(h*=1-.18*Math.sin(u*2)),v.push([Math.max(h,i*.12),c+g])}t.lathe(v,a,s,28,{mat:o});let d=c+f;t.lathe([[i*.13,d-.2,1],[i*.13,d+3,1],[i*.18,d+3.2,1],[i*.02,d+6.4]],a,s,10,{mat:o})};o0(t,14,0,104,52,26,150,we.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),r(26,124,7.2,33,9.5,!0),r(40.5,116,6,31,8,!0),r(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let n=(a,s,i)=>{o0(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,we.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};n(20.5,109,36),n(46.5,112,38)}function Ak(t){let o=[st.cx,0,st.cz],r=24,n=10,a=[];for(let s=0;s<=r;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/r;for(let c=0;c<=n;c++){let f=Math.PI/2*(c/n)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],v=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(v,[-l[0],-l[1],-l[2]],[we.SKY,0,0]))}}for(let s=0;s<r;s++)for(let i=0;i<n;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function Tk(){let t=[],e=[],o=[],r=[],n=sk.createBuilder(t,e,o,r);return bk(n),yk(n),Mk(n),kk(n),Sk(n),Ek(n),n.save(),n.translate(Tc[0],0,Tc[1]),zk(n),n.restore(),Ak(n),{position:t,normal:e,elements:o,attr:r}}var dx=[[[13.65,0,gs.z0-.7],[gs.x1+.7,10.6,st.south]],[[st.westBack,xs,st.northCol-Ce],[st.eastBack,Hr,st.northBack+3.4]],[[Eo.x0,Hr,st.northCol-Ce],[Eo.x1,Eo.top,st.northCol+2.6]],[[st.westBack,0,st.south],[st.westCol+Ce,ms,st.northBack+.3]],[[st.eastCol-Ce,0,st.south],[st.eastBack,ms,st.northBack+.3]],[[14+Tc[0],0,104+Tc[1]],[52+Tc[0],26,150+Tc[1]]]];function Lk(t,e,o,r){let n=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>r[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(r[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),n=Math.max(n,i),a=Math.min(a,c),n>a)return!1}return!0}function Qh(t,e,o,r){let n=[(t[0]-o[0])/r[0],(t[1]-o[1])/r[1],(t[2]-o[2])/r[2]],a=[e[0]/r[0],e[1]/r[1],e[2]/r[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=n[0]*a[0]+n[1]*a[1]+n[2]*a[2],c=n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),v=Math.max(0,(-i-l)/s),d=(-i+l)/s;return Math.max(0,d-v)}function Cd(t){for(let[e,o]of dx)if(Lk(t,ba,e,o))return 0;return 1}function px(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function Nk(){let t=[],e=[],o=[],r=[],n=[],a=[],s=[],i=px(21),c=(u,h,g,m,x,y,b)=>{let M=t.length/3;for(let[_,k]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...u),e.push(_,k),o.push(h,g,m),r.push(...x),n.push(...y),a.push(...b);s.push(M,M+1,M+2,M,M+2,M+3)},f=(u,h)=>{let g=1;for(let m of wa){if(m===h||!m.shadow)continue;let x=Qh(u,ba,m.c,m.r);x>0&&(g*=Math.exp(-x*.9))}return g},l=wa.map(u=>({...u,pts:null}));for(let u of l)for(let h=0;h<u.n;h++){let g;do g=[i()*2-1,i()*2-1,i()*2-1];while(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]>1);let m=Math.hypot(g[0],g[1],g[2])||1,x=Math.pow(i(),.35)*.98,y=[g[0]/m*x,g[1]/m*x,g[2]/m*x];if(u.spindle){let I=y[1],H=Math.sqrt(Math.max(.02,1-I*I))*(I>0?1-I*.55:1+I*.25),ft=Math.hypot(y[0],y[2])||1,Nt=H*Math.min(1,ft*1.4);y=[y[0]/ft*Nt,I,y[2]/ft*Nt]}u.magnolia&&y[1]<-.55&&(y[1]=-.55+(y[1]+.55)*.35);let b=[u.c[0]+y[0]*u.r[0],u.c[1]+y[1]*u.r[1],u.c[2]+y[2]*u.r[2]],M,_;if(u.magnolia){let I=0;for(let Nt of lx)I=Math.max(I,Qh(b,ba,Nt.c,Nt.r));M=Math.exp(-I*1.1);let H=1;for(let Nt of wa)if(!Nt.magnolia&&Nt.shadow){let _t=Qh(b,ba,Nt.c,Nt.r);_t>0&&(H*=Math.exp(-_t*.9))}M*=Cd(b)*H;let ft=hk(b,vs.c);_=t1([ft[0]/vs.r[0]+y[0]*.5,ft[1]/vs.r[1]+y[1]*.5,ft[2]/vs.r[2]+y[2]*.5]),x=Math.min(1,Math.hypot(ft[0]/vs.r[0],ft[1]/vs.r[1],ft[2]/vs.r[2])*.6+x*.4)}else{let I=Qh(b,ba,u.c,u.r);M=Math.exp(-I*(u.spindle?2.2:1.25)),M*=Cd(b)*f(b,wa[l.indexOf(u)]),_=t1([y[0]/u.r[0],y[1]/u.r[1],y[2]/u.r[2]])}let k=Math.max(0,_[0]*ba[0]+_[1]*ba[1]+_[2]*ba[2]),A=.25+.75*Math.pow(x,1.5)*(.65+.35*(_[1]*.5+.5)),z=u.size[0]+(u.size[1]-u.size[0])*i(),D=.85+i()*.3,P=u.leaf.map(I=>I*D),G=u.cell;u.cell===3&&i()<.35&&(G=2),c(b,z,G,i()*Math.PI*2,[M,A,.35+.65*k],P,u.bloom)}for(let[u,h]of fx){let g=i()<.5;for(let m=0;m<3;m++){let x=[u+(i()-.5)*.7,.28+i()*.22,h+(i()-.5)*.5],y=Cd(x)*f(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[y,.6+i()*.3,.8],[.75,.9,.6],g?[1,.55,.75]:[.85,.8,1.15])}}let v=s.length/6,d=Array.from({length:v},(u,h)=>h);for(let u=v-1;u>0;u--){let h=Math.floor(i()*(u+1));[d[u],d[h]]=[d[h],d[u]]}let p=[];for(let u of d)for(let h=0;h<6;h++)p.push(s[u*6+h]);return{center:t,corner:e,par:o,light:r,tint:n,bloom:a,elements:p}}var Le=t=>t.toFixed(4),ff=t=>`vec3(${Le(t[0])}, ${Le(t[1])}, ${Le(t[2])})`,vx=`
const vec3 SUN = ${ff(ba)};
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
`,Rk=dx.map(([t,e])=>`if (hitBox(ro, SUN, ${ff(t)}, ${ff(e)})) return 0.0;`).join(`
	`),Ok=wa.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${ff(t.c)}, ${ff(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),Ck=(t,e,o,r,n,a,s,i,c)=>`
	{
		float t = (${Le(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${Le(xs)} && u > ${Le(o-Ce)} && u < ${Le(o+r*n+Ce)}) {
				float k = floor((u - ${Le(o)}) / ${Le(r)});
				float a = ${Le(o)} + k * ${Le(r)} + (k < 0.5 ? ${Le(a)} : 0.02);
				float b = ${Le(o)} + (k + 1.0) * ${Le(r)} - (k > ${Le(n-1.5)} ? ${Le(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Le(i)}) < 0.5 ? 0.0 : ${Le(sf+.09)};
				bool hole = (q.y > sill && q.y < ${Le($0)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Le($0)} && d * d + (q.y - ${Le($0)}) * (q.y - ${Le($0)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,e1=pi+.3,o1=pi+.3,hf=Zh+.3,rx=Xo.x1-st.cx-mi-.3,Pk=Xo.z1-st.cz-mi-.3,Ik=st.cz-Xo.z0-mi-.3,$k=Math.sqrt(hf*hf-e1*e1),Dk=Math.sqrt(hf*hf-o1*o1),qk=[[st.cx,st.cz,.86,1.18],[st.cx,st.cz,1.25,.3],...Id.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,r])=>`if (hitCyl(ro, vec2(${Le(t)}, ${Le(e)}), ${Le(o)}, ${Le(r)})) return 0.0;`).join(`
	`),Fk=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Le(st.cx)}, ${Le(st.cz)}));
	float b1 = xz.y > ${Le(st.cz)} ? ${Le(Pk)} : ${Le(Ik)};
	vec2 A = vec2(${Le(e1)}, ${Le($k)}), Bp = vec2(${Le(e1)}, b1), C = vec2(${Le(rx)}, b1);
	vec2 D = vec2(${Le(rx)}, ${Le(o1)}), E = vec2(${Le(Dk)}, ${Le(o1)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Le(hf)}));
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
	${Rk}
	${Ck("z",st.northCol,st.westCol,Pd,n1,Ce+lf,Ce+lf,ix,"ro.z > "+Le(st.northCol-Ce))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${qk}
	if (ro.y < ${Le(vi)} && ro.x > ${Le(Xo.x0)} && ro.x < ${Le(Xo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Le(vi)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Le(af*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Le(vi)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${Ok}
	return tr;
}
`,Gk=`
precision highp float;
${ax}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${vx}
${Fk}

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

	if (kind == ${we.SKY}.0) {
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

	if (kind == ${we.GROUND}.0) {
		bool yard = P.x > ${Le(Xo.x0)} && P.x < ${Le(Xo.x1)} && P.z < ${Le(Xo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Le(Xo.x0)}, ${Le(Xo.x1)} - P.x);
			float ez = min(P.z - ${Le(Xo.z0)}, ${Le(Xo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Le(st.cx)}), dz = abs(P.z - ${Le(st.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Le(mi)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Le(mi)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Le(Zh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Le(st.cz)}, P.x - ${Le(st.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Le(Zh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Le(pi)} || dz < ${Le(pi)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Le(pi)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Le(st.cx)}, ${Le(st.cz)})));
		}
	} else if (kind == ${we.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${we.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${we.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${we.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Le(vi)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${we.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${we.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${we.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${we.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${we.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${we.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${we.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${we.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${we.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${we.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${we.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Le(st.westCol)} || P.x > ${Le(st.eastCol)} || P.z > ${Le(st.northCol)}) && P.y < ${Le(xs+.05)} && P.z > ${Le(st.south-.1)} && P.z < ${Le(st.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Le(st.northCol)} ? P.z - ${Le(st.northCol)} : (P.x < ${Le(st.westCol)} ? ${Le(st.westCol)} - P.x : P.x - ${Le(st.eastCol)});
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
}`,Hk=`
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
}`,Uk=`
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
}`,Bk=`
precision highp float;
${ax}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${vx}
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
}`;function jk(t,e,o){let r=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"})).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}$d.exports=t=>{let e=Tk(),o=Nk(),r=jk(t,"res/garden/foliage.webp",[0,0,0,0]),n=Date.now(),a=()=>Od.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:20,s=t({frag:Gk,vert:Hk,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>Od.gardenDetail}}),i=t({frag:Bk,vert:Uk,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:r,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Od.leafShare/6)*6});return function(){s(),i()}};$d.exports.layout={G:st,YARD:Xo,SUN:ba}});var wx=St((xA,bx)=>{"use strict";var Wk=Zn().GLSL,Vk=Qs(),{C:yx}=A0(),D0=yx.x1+.35,Gd=yx.zc,Dd=[D0-7.3,2,Gd],gx=5.2*Math.PI/180,xx=2100,Xk=725,Yk=1288,Kk=1450,Qk=2576,Ba=Gd-3.2,s1=Gd+3.3,qd=D0+5,Fd=D0+11.7,Nc=3.9,uf=D0+22.7,r1=40;function Zk(){let t=[],e=[],o=[],r=[],n=Vk.createBuilder(t,e,o,r),a=(l,v,d,p,u,h)=>{let g=[];for(let m=0;m<=u;m++){g.push([]);for(let x=0;x<=h;x++){let y=[0,1,2].map(b=>l[b]+v[b]*m/u+d[b]*x/h);g[m].push(n.vert(y,p,[0,0,0]))}}for(let m=0;m<u;m++)for(let x=0;x<h;x++)n.tri(g[m][x],g[m+1][x],g[m+1][x+1]),n.tri(g[m][x],g[m+1][x+1],g[m][x+1])},s=s1-Ba,i=.7;a([D0-i,0,Ba],[qd-D0+i,0,0],[0,0,s],[0,1,0],6,4);let c=Fd-qd,f=Math.hypot(c,Nc);return a([qd,0,Ba],[c,Nc,0],[0,0,s],[-Nc/f,c/f,0],6,4),a([Fd,Nc,Ba],[uf-Fd,0,0],[0,0,s],[0,1,0],6,4),a([D0-i,0,Ba],[uf-D0+i,0,0],[0,r1,0],[0,0,1],12,12),a([D0-i,0,s1],[uf-D0+i,0,0],[0,r1,0],[0,0,-1],12,12),a([uf,0,Ba],[0,r1,0],[0,0,s],[-1,0,0],8,4),a([D0-i,r1,Ba],[uf-D0+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:r}}var Z0=t=>t.toFixed(5),a1=[[D0+3.4,3.7,Ba+.01,1],[D0+8.6,4.1,s1-.01,-1],[D0+14.8,Nc+3.3,Ba+.01,1],[D0+19.6,Nc+3.6,s1-.01,-1]],Jk=`
precision highp float;
${Wk}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${a1.length};
vec4 LAMP[NLAMP];

void main() {
	${a1.map((t,e)=>`LAMP[${e}] = vec4(${Z0(t[0])}, ${Z0(t[1])}, ${Z0(t[2])}, ${Z0(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Z0(Dd[0])}, ${Z0(Dd[1])}, ${Z0(Dd[2])});
	float c = ${Z0(Math.cos(gx))}, s = ${Z0(Math.sin(gx))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Z0(Xk)} + ${Z0(xx)} * d.z / fw, ${Z0(Yk)} - ${Z0(xx)} * up / fw);
	vec2 uv = px / vec2(${Z0(Kk)}, ${Z0(Qk)});
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
	for (int i = 0; i < ${a1.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,tS=`
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
}`;bx.exports=t=>{let e=Zk(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let r=t({frag:Jk,vert:tS,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),n={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,v,d]=i,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[u,h,g]of p){let m=n.pos.length/3;for(let[x,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.pos.push(l+u[0]*c[0]+h[0]*x*c[0]+g[0]*y*c[0],v+u[1]*c[1]+h[1]*x*c[1]+g[1]*y*c[1],d+u[2]*c[2]+h[2]*x*c[2]+g[2]*y*c[2]),n.nrm.push(...u),n.k.push(f);n.idx.push(m,m+1,m+2,m,m+2,m+3)}};for(let i of a1){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let v of[-1,1])a([i[0]+l*.11,i[1],f+v*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:n.pos,normal:n.nrm,k:n.k},elements:new Uint16Array(n.idx),cull:{enable:!1}});return function(){r(),s()}}});var Ex=St((yA,Sx)=>{"use strict";var eS=Zn().GLSL,{A:c1,BENCH:Ud,SHAFT:Hd,TREE:df,oculusGLSL:oS}=$r(),nS=Cr(),i1=df.sxz,_x=df.sy,Mx=df.yaw;function rS(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=e.getUint32(12,!0),a=[0,1,2].map(d=>e.getFloat32(16+d*4,!0)),s=[0,1,2].map(d=>e.getFloat32(28+d*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let v=new Uint32Array(t,i,n);return{nV:o,nWood:r,nI:n,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:v}}function aS(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),r=new Float32Array(t.nV*2),n=new Float32Array(t.nV),a=Math.cos(Mx),s=Math.sin(Mx);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*i1,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*_x,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*i1;e[i*3]=c1.cx+a*c+s*l,e[i*3+1]=Ud.soil+.02+f,e[i*3+2]=c1.zc-s*c+a*l;let v=t.nrm[i*3]/127/i1,d=t.nrm[i*3+1]/127/_x,p=t.nrm[i*3+2]/127/i1,u=Math.hypot(v,d,p)||1;v/=u,d/=u,p/=u,o[i*3]=a*v+s*p,o[i*3+1]=d,o[i*3+2]=-s*v+a*p,r[i*2]=t.uv[i*2]/65535,r[i*2+1]=t.uv[i*2+1]/65535,n[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:r,leaf:n,elements:t.idx}}function kx(t,e,o,r){let n=t.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>n({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),n}var d0=t=>t.toFixed(4),Rc=df.crownC,Oc=df.crownR,sS=`
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

const vec3 SHAFT = vec3(${d0(Hd[0])}, ${d0(Hd[1])}, ${d0(Hd[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${d0(c1.cx)}, ${d0(c1.zc)});
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
	vec3 cc = vec3(${d0(Rc[0])}, ${d0(Rc[1])}, ${d0(Rc[2])});
	vec3 cr = vec3(${d0(Oc[0])}, ${d0(Oc[1])}, ${d0(Oc[2])});
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
}`,bs=is(),iS=`
precision highp float;
${eS}
uniform float time;
${bs.lanternGLSL(bs.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${bs.LANTERNS[bs.TREE_LANTERN[0]].x.toFixed(3)}, ${bs.LANTERNS[bs.TREE_LANTERN[0]].y.toFixed(3)}, ${bs.LANTERNS[bs.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${oS()}

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
	vec3 rel = (v_pos - vec3(${d0(Rc[0])}, ${d0(Rc[1])}, ${d0(Rc[2])})) / vec3(${d0(Oc[0])}, ${d0(Oc[1])}, ${d0(Oc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${d0(Ud.soil)}, ${d0(Ud.soil+.5)}, v_pos.y);

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
}`;Sx.exports=t=>{let e=null,o=kx(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),r=kx(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),n=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=aS(rS(a));e=t({vert:sS,frag:iS,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:r,time:()=>nS.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var u1=St((bA,Lx)=>{"use strict";var Cc=fs(),cS="res/audio/go-tomorrow.mp3",lS="res/audio/go-tomorrow.json",Ax="gallery-sound",l1=[Cc.PIANO.x,1,Cc.PIANO.z],fS=Cc.R,hr=!0;try{localStorage.getItem(Ax)==="off"&&(hr=!1)}catch(t){}var In=null,N0=null,pf=null,vf=null,ws=null,ja=null,gi=!1,f1=null,zx=[],hS=(typeof performance!="undefined"?performance.now():0)/1e3;function uS(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),r=12345,n=()=>(r=r*16807%2147483647,r/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(n()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function dS(){if(In)return;In=new Audio,In.src=cS,In.loop=!0,In.preload="auto",In.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){In.volume=.2;return}try{N0=new t;let e=N0.createMediaElementSource(In);ws=N0.createBiquadFilter(),ws.type="lowpass",ws.frequency.value=1500,ws.Q.value=.4,pf=N0.createGain(),pf.gain.value=0,vf=N0.createGain(),vf.gain.value=0;let o=N0.createConvolver();o.buffer=uS(N0),ja=N0.createGain(),ja.gain.value=hr?1:0,e.connect(ws),ws.connect(pf),pf.connect(ja),ws.connect(o),o.connect(vf),vf.connect(ja),ja.connect(N0.destination)}catch(e){N0=null,In.volume=.2}}function Tx(){if(gi||!hr)return;dS();let t=()=>In.play().then(()=>{gi=!0}).catch(()=>{});N0&&N0.state==="suspended"?N0.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,Tx,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!In||!gi||(document.hidden?In.pause():hr&&In.play().catch(()=>{}))}),fetch(lS).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let r=o.map(s=>s[2]).sort((s,i)=>s-i),n=r[Math.floor(r.length*.03)]||0,a=r[Math.floor(r.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-n)/Math.max(a-n,.001)))}))};f1={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var h1={AT:l1,listen(t){if(!N0||!gi)return;let e=t[0]-l1[0],o=t[2]-l1[2],r=Math.hypot(e,o,(t[1]-l1[1])*.5),n=Math.hypot(t[0]-Cc.C.x,t[2]-Cc.C.z)<fS+.4||t[0]<-.2&&Math.abs(t[2]-Cc.C.z)<4,a,s,i;if(n){let f=Math.max(0,Math.min(1,(r-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(r,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=N0.currentTime;pf.gain.setTargetAtTime(a,c,.35),vf.gain.setTargetAtTime(s,c,.35),ws.frequency.setTargetAtTime(i,c,.35)},time(){let t=f1&&f1.dur||158;return In&&gi&&!In.paused||In&&gi?In.currentTime%t:((performance.now()/1e3-hS)%t+t)%t},get cues(){return f1},get on(){return hr},set(t){hr=!!t;try{localStorage.setItem(Ax,hr?"on":"off")}catch(e){}hr?(Tx(),In&&gi&&In.play().catch(()=>{}),ja&&ja.gain.setTargetAtTime(1,N0.currentTime,.2)):ja?ja.gain.setTargetAtTime(0,N0.currentTime,.15):In&&In.pause(),zx.forEach(e=>e(hr))},toggle(){h1.set(!hr)},onChange(t){zx.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',r=document.createElement("button");r.type="button",r.className=t+" sound-toggle";let n=()=>{r.innerHTML=hr?e:o,r.setAttribute("aria-label",hr?"Turn the music off":"Turn the music on"),r.title=hr?"Music on":"Music off",r.setAttribute("aria-pressed",hr?"true":"false")};return n(),h1.onChange(n),["mousedown","pointerdown"].forEach(a=>r.addEventListener(a,s=>s.stopPropagation())),r.addEventListener("click",a=>{a.stopPropagation(),h1.toggle()}),r}};Lx.exports=h1});var Gx=St((wA,Xd)=>{"use strict";var Wd=Zn().GLSL,{A:Nx,BENCH:$x,oculusGLSL:Dx}=$r(),Rx=Cr(),qx=fs(),Ox=u1(),pS=1.74,vS=1.877,q0=pS/vS,yi={x:Nx.cx-1.22,z:Nx.zc+.02,hipY:$x.seat+.115},sn=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],sa=t=>[-t[0],-t[1],-t[2],t[3]],Ms=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,r=Math.sin(e/2);return[t[0]/o*r,t[1]/o*r,t[2]/o*r,Math.cos(e/2)]},d1=(t,e,o)=>sn(Ms([0,0,1],o*Math.PI/180),sn(Ms([0,1,0],e*Math.PI/180),Ms([1,0,0],t*Math.PI/180))),Vd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},_a=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],gf=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],_s=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],jd=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],v1=t=>Math.hypot(t[0],t[1],t[2]),mf=t=>{let e=v1(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},g1=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],mS=(t,e)=>{let o=[t[0],t[1],t[2]],r=_s(g1(o,e),2);return gf(gf(e,_s(r,t[3])),g1(o,r))},gS=(t,e)=>{let o=g1(t,e),r=1+jd(t,e);return r<1e-6?[0,0,1,0]:Vd([o[0],o[1],o[2],r])};function kr(t,e,o){let[r,n,a,s]=e,i=r*r,c=n*n,f=a*a,l=r*n,v=r*a,d=n*a,p=s*r,u=s*n,h=s*a;return[(1-2*(c+f))*o[0],2*(l+h)*o[0],2*(v-u)*o[0],0,2*(l-h)*o[1],(1-2*(i+f))*o[1],2*(d+p)*o[1],0,2*(v+u)*o[2],2*(d-p)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function n0(t,e){let o=new Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++)o[r*4+n]=t[n]*e[r*4]+t[4+n]*e[r*4+1]+t[8+n]*e[r*4+2]+t[12+n]*e[r*4+3];return o}function Bd(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),r=Math.hypot(t[8],t[9],t[10]),n=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/r,v=t[9]/r,d=t[10]/r,p=n+c+d,u;if(p>0){let h=Math.sqrt(p+1)*2;u=[(f-v)/h,(l-s)/h,(a-i)/h,h/4]}else if(n>c&&n>d){let h=Math.sqrt(1+n-c-d)*2;u=[h/4,(i+a)/h,(l+s)/h,(f-v)/h]}else if(c>d){let h=Math.sqrt(1+c-n-d)*2;u=[(i+a)/h,h/4,(v+f)/h,(l-s)/h]}else{let h=Math.sqrt(1+d-n-c)*2;u=[(l+s)/h,(v+f)/h,h/4,(a-i)/h]}return Vd(u)}var m1={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((r,n)=>{m1[t+"Hand"+r+"1"]=[0,0,e*(18+n*6)*o],m1[t+"Hand"+r+"2"]=[0,0,e*(26+n*6)*o],m1[t+"Hand"+r+"3"]=[0,0,e*16*o]})}function xi(t,e,o){let r=t-e;return r-=Math.round(r),Math.exp(-(r/o)*(r/o))}function Cx(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*xi(t,.14,.07)+57*xi(t,.72,.12),r=5*xi(t,.06,.04)-9*xi(t,.42,.12)+17*xi(t,.62,.05)-3*xi(t,.85,.1),n=-26*xi(t,.58,.06);return{hip:e,knee:o,ankle:r,toe:n}}function xS(t){let e=(t%1+1)%1,o=Cx(e),r=Cx(e+.5),n=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*n,0,0],RightArm:[-16*n,0,0],LeftForeArm:[0,-14-8*Math.max(0,-n),0],RightForeArm:[0,14+8*Math.max(0,n),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-r.hip,0,0],RightLeg:[r.knee,0,0],RightFoot:[r.ankle,0,0],RightToeBase:[r.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*n}}var Px=`
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
}`,x1=is(),Ix=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${Wd}
uniform float time;
${qx.roomGLSL()}
${x1.lanternGLSL(x1.TREE_LANTERN)}
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
${Dx()}
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
}`;function yS(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((n,a)=>{let s=new Image;s.onload=()=>n(s),s.onerror=a,s.src=URL.createObjectURL(r)}))).then(r=>o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),o}var Fx={w:.13,h:.2},p1=t=>.011*(1-Math.pow(1-t,3));function bS(){let t=[],e=[],o=[],r=[],n=[],a=(h,g,m,x,y,b,M)=>{let _=t.length/3;[h,g,m,x].forEach((k,A)=>{t.push(...k),e.push(...y),o.push(...M[A]),r.push(b)}),n.push(_,_+1,_+2,_,_+2,_+3)},{w:s,h:i}=Fx,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,v=s+.001,d=c+.001;a([0,l,-d],[v,l,-d],[v,l,d],[0,l,d],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-d],[0,l+.001,d],[v,l+.001,d],[v,l+.001,-d],[0,1,0],2,f),a([-v,l,-d],[0,l,-d],[0,l,d],[-v,l,d],[0,-1,0],2,f),a([-v,l+.001,-d],[-v,l+.001,d],[0,l+.001,d],[0,l+.001,-d],[0,1,0],2,f);let p=8;for(let h of[1,-1]){for(let m=0;m<p;m++){let x=m/p,y=(m+1)/p,b=(.002+x*(s-.002))*h,M=(.002+y*(s-.002))*h,_=p1(x),k=p1(y),A=h>0?x:1-x,z=h>0?y:1-y,D=1,P=-(k-_)/(M-b);a([b,_,-c],[M,k,-c],[M,k,c],[b,_,c],[P,D,0],3,[[A,1],[z,1],[z,0],[A,0]]),a([b,l+.001,c],[M,l+.001,c],[M,k,c],[b,_,c],[0,0,1],4,f),a([b,_,-c],[M,k,-c],[M,l+.001,-c],[b,l+.001,-c],[0,0,-1],4,f)}let g=s*h;a([g,l+.001,-c],[g,p1(1),-c],[g,p1(1),c],[g,l+.001,c],[h,0,0],4,f)}let u=10;for(let h=0;h<u;h++){let g=h/u,m=(h+1)/u,x=t.length/3;for(let[y,b]of[[g,-c],[m,-c],[m,c],[g,c]])t.push(y,0,b),e.push(0,1,0),o.push(y,(b+c)/i),r.push(5);n.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:r,idx:n}}function wS(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,r=()=>(o=o*16807%2147483647,o/2147483647),n=(s,i,c,f,l,v,d)=>{for(let p=0;p<v;p++){let u=s+(r()-.5)*c*2,h=i+(r()-.5)*f*2,g=20+r()*60,m=e.createRadialGradient(u,h,0,u,h,g);m.addColorStop(0,`rgba(${l},${d})`),m.addColorStop(1,`rgba(${l},0)`),e.fillStyle=m,e.fillRect(u-g,h-g,g*2,g*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+r()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+r()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${r()*.05})`,e.fillRect(r()*512,r()*768,1,1);return t}var _S=`
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
		float r = u * ${Fx.w.toFixed(3)};
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
}`,MS=`
precision highp float;
${Wd}
uniform float time;
${x1.lanternGLSL(x1.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Dx()}
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
}`;function kS(){let t=[],e=[],o=[],r=[],n=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],v=16;for(let d=0;d<l.length;d++){let[p,u,h,g]=l[d],m=g===2?.45:1;for(let x=0;x<=v;x++){let y=x/v*Math.PI*2;t.push(Math.cos(y)*p,u,Math.sin(y)*p*m);let b=Math.max(d-1,0),M=Math.min(d+1,l.length-1),_=l[M][0]-l[b][0],k=l[M][1]-l[b][1],A=Math.hypot(_,k)||1;e.push(Math.cos(y)*k/A,-_/A,Math.sin(y)*k/A/m),o.push(...h),r.push(g)}}for(let d=0;d<l.length-1;d++)for(let p=0;p<v;p++){let u=d*(v+1)+p,h=u+v+1;n.push(u,h,u+1,u+1,h,h+1)}return{pos:t,nrm:e,col:o,mat:r,idx:n}}var SS=`
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
}`,ES=`
precision highp float;
${Wd}
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
}`,zS=`
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
}`,AS=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Xd.exports=t=>{let e="res/avatar/",o=null,r=Date.now(),n=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3,a={glowPos:[yi.x,1.9,yi.z],glow:0};Promise.all([fetch(e+"avatar.json").then(z=>z.json()),fetch(e+"avatar.bin").then(z=>z.arrayBuffer())]).then(([z,D])=>{o=f(z,D)}).catch(z=>console.error(z));let s=null;Promise.all([fetch(e+"motion.json").then(z=>z.ok?z.json():null),fetch(e+"motion.bin").then(z=>z.ok?z.arrayBuffer():null)]).then(([z,D])=>{if(!z||!D)return;let P={};for(let G in z.clips){let I=z.clips[G],H=I.bones.length,ft=new Float32Array(D,I.mean,H*4),Nt={};I.bones.forEach((_t,xt)=>{Nt[_t]=[ft[xt*4],ft[xt*4+1],ft[xt*4+2],ft[xt*4+3]]}),P[G]=Object.assign({},I,{Q:new Int16Array(D,I.q,I.frames*H*4),H:new Float32Array(D,I.hips,I.frames*3),meanQ:Nt})}s=P}).catch(()=>{});function i(z,D){let P=z.frames,G=z.bones.length,I=(D%P+P)%P,H=Math.floor(I)%P,ft=(H+1)%P,Nt=I-Math.floor(I),_t={};for(let Yt=0;Yt<G;Yt++){let Se=(H*G+Yt)*4,Oe=(ft*G+Yt)*4,oo=z.Q[Se],me=z.Q[Se+1],Ke=z.Q[Se+2],Ye=z.Q[Se+3],nt=z.Q[Oe],V=z.Q[Oe+1],mt=z.Q[Oe+2],Lt=z.Q[Oe+3];oo*nt+me*V+Ke*mt+Ye*Lt<0&&(nt=-nt,V=-V,mt=-mt,Lt=-Lt),_t[z.bones[Yt]]=Vd([oo+(nt-oo)*Nt,me+(V-me)*Nt,Ke+(mt-Ke)*Nt,Ye+(Lt-Ye)*Nt])}let xt=H*3,ut=ft*3;return{q:_t,hips:[z.H[xt]+(z.H[ut]-z.H[xt])*Nt,z.H[xt+1]+(z.H[ut+1]-z.H[xt+1])*Nt,z.H[xt+2]+(z.H[ut+2]-z.H[xt+2])*Nt]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(z,D){let P=(et,Bt)=>new Float32Array(D,et,Bt),G=z.bones,I=G.length,H={};G.forEach((et,Bt)=>{H[et.name]=Bt});let ft=[];for(let et=0;et<I;et++)ft.push(Array.from(P(z.ibm+et*64,16)));let Nt=G.map(et=>kr(et.t,et.r,et.s)),_t=[];for(let et=0;et<I;et++){let Bt=G[et].parent;_t[et]=Bt<0?Nt[et]:n0(_t[Bt],Nt[et])}let xt=_t.map(Bd),ut=z.meshes.map(et=>{let Bt=P(et.pos,et.n*3),B=P(et.nrm,et.n*3),Y=P(et.uv,et.n*2),J=new Uint8Array(D,et.jnt,et.n*4),Vt=P(et.wgt,et.n*4),Xt=new Uint16Array(D,et.idx,et.ni),zt={};for(let ge in et.morphs){let je=et.morphs[ge];zt[ge]={idx:new Uint16Array(D,je.idx,je.n),d:P(je.d,je.n*3)}}let Rt=new Float32Array(et.n*3),Qt=new Float32Array(et.n*3),se=new Float32Array(et.n*3),ce=t.buffer({data:Rt,usage:"dynamic"}),xe=t.buffer({data:Qt,usage:"dynamic"}),Ge=/avaturn_hair/.test(et.name),ie=/EyeAO|Eyelash/.test(et.name),Ve=/Body|Head/.test(et.name),Ze=et.kind||0;return{m:et,pos:Bt,nrm:B,uv:Y,jnt:J,wgt:Vt,idx:Xt,morphs:zt,outP:Rt,outN:Qt,work:se,pb:ce,nbuf:xe,tex:et.tex?yS(t,e+et.tex):c,kind:Ze,alphaScale:/EyeAO/.test(et.name)?.25:1,blend:et.blend||Ge,alphaCut:Ge?.35:ie?.02:0,skin:Ve?1:0}}),Yt=t({vert:Px,frag:Ix,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!k?_.lamp:[0,0,0,0],court:()=>_||k?0:1,candle:()=>k?1:0},cull:{enable:!1}}),Se=t({vert:Px,frag:Ix,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!k?_.lamp:[0,0,0,0],court:()=>_||k?0:1,candle:()=>k?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Oe=.3;for(let et of ut)if(et.uvBuf=t.buffer(et.uv),/Body/.test(et.m.name)){let Bt=[],B=[];for(let Y=0;Y<et.idx.length;Y+=3){let J=et.idx[Y],Vt=et.idx[Y+1],Xt=et.idx[Y+2];(et.pos[J*3+1]<Oe&&et.pos[Vt*3+1]<Oe&&et.pos[Xt*3+1]<Oe?B:Bt).push(J,Vt,Xt)}et.el=t.elements({data:new Uint16Array(Bt),type:"uint16"}),B.length&&(et.sockEl=t.elements({data:new Uint16Array(B),type:"uint16"}))}else et.el=t.elements({data:et.idx,type:"uint16"});let oo=_t[H.Hips],me=Ms([1,0,0],-Math.PI/2),Ke=n0(kr([yi.x-oo[12]*q0,yi.hipY-oo[14]*q0,yi.z+oo[13]*q0],me,[1,1,1]),kr([0,0,0],[0,0,0,1],[q0,q0,q0])),Ye=new Array(I),nt=-1,V=(et,Bt,B)=>n0(kr([et,0,Bt],Ms([0,1,0],B),[1,1,1]),kr([0,0,0],[0,0,0,1],[q0,q0,q0])),mt=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(et=>H[et]),Lt=mt.map(et=>_t[et][13]*q0);function fe(et){if(s&&s.walk)return _e(et);let Bt=xS(et.phase),B={},Y=Qt=>{for(let se in Qt){let ce=Qt[se],xe=d1(ce[0],ce[1],ce[2]);B[se]=B[se]?sn(B[se],xe):xe}};Y(Bt.swing),Y(Bt.pose);let J=Math.cos(et.heading),Vt=-Math.sin(et.heading),Xt=V(et.x+J*Bt.sway,et.z+Vt*Bt.sway,et.heading),zt=new Array(I);for(let Qt=0;Qt<I;Qt++){let se=G[Qt],ce=Nt[Qt],xe=B[se.name];if(xe){let Ge=xt[Qt],ie=sn(sa(Ge),sn(xe,Ge));ce=kr(se.t,sn(se.r,ie),se.s)}zt[Qt]=se.parent<0?n0(Xt,ce):n0(zt[se.parent],ce)}let Rt=1/0;mt.forEach((Qt,se)=>{Rt=Math.min(Rt,zt[Qt][13]-Lt[se])});for(let Qt=0;Qt<I;Qt++)zt[Qt]=zt[Qt].slice(),zt[Qt][13]-=Rt,Ye[Qt]=n0(zt[Qt],ft[Qt]);return{blink:0}}function _e(et){let Bt=s.walk,B=i(Bt,(et.phase+Bt.phase0)*Bt.frames),Y=V(et.x,et.z,et.heading),J=new Array(I),Vt=H.Hips;for(let zt=0;zt<I;zt++){let Rt=G[zt],Qt=Nt[zt],se=B.q[Rt.name];if(se){let ce=xt[zt],xe=sn(sa(ce),sn(se,ce)),Ge=zt===Vt?[Rt.t[0]+B.hips[0],Rt.t[1]+B.hips[1],Rt.t[2]+B.hips[2]]:Rt.t;Qt=kr(Ge,sn(Rt.r,xe),Rt.s)}J[zt]=Rt.parent<0?n0(Y,Qt):n0(J[Rt.parent],Qt)}let Xt=1/0;mt.forEach((zt,Rt)=>{Xt=Math.min(Xt,J[zt][13]-Lt[Rt])});for(let zt=0;zt<I;zt++)J[zt]=J[zt].slice(),J[zt][13]-=Xt,Ye[zt]=n0(J[zt],ft[zt]);return{blink:0}}function ae(et,Bt){let B=Math.sin(et*2*Math.PI/4.6),Y=Math.sin(et*.37)*.6+Math.sin(et*.83+1)*.4,J={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+B*.8,0,0],Spine2:[4+B*.6,0,0],Neck:[10,0,0],Head:[12+Y*2,Y*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Vt={};for(let ce in J){let xe=J[ce];Vt[ce]=d1(xe[0],xe[1],xe[2])}let Xt=V(Bt.x,Bt.z,Bt.heading),zt=new Array(I);for(let ce=0;ce<I;ce++){let xe=G[ce],Ge=Nt[ce],ie=Vt[xe.name];if(ie){let Ve=xt[ce],Ze=sn(sa(Ve),sn(ie,Ve));Ge=kr(xe.t,sn(xe.r,Ze),xe.s)}zt[ce]=xe.parent<0?n0(Xt,Ge):n0(zt[xe.parent],Ge)}let Qt=zt[H.Hips][13]-(Bt.y+.1);for(let ce=0;ce<I;ce++)zt[ce]=zt[ce].slice(),zt[ce][13]-=Qt,Ye[ce]=n0(zt[ce],ft[ce]);let se=et%4.1;return{blink:se<.16?Math.sin(se/.16*Math.PI):0}}let qt=et=>[_t[et][12],_t[et][13],_t[et][14]],at=(et,Bt)=>{let B=mf(et),Y=mf(_a(Bt,_s(B,jd(Bt,B)))),J=g1(B,Y);return Bd([B[0],B[1],B[2],0,Y[0],Y[1],Y[2],0,J[0],J[1],J[2],0,0,0,0,1])},Wt={};for(let et of["Left","Right"]){let Bt=H[et+"Arm"],B=H[et+"ForeArm"],Y=H[et+"Hand"],J=H[et+"HandMiddle1"];Wt[et]={a:Bt,f:B,h:Y,upper:v1(_a(qt(B),qt(Bt)))*q0,fore:v1(_a(qt(Y),qt(B)))*q0,dir0:mf(_a(qt(B),qt(Bt))),qf0:at(_a(qt(Y),qt(B)),[0,1,0]),qh0:at(_a(qt(J),qt(Y)),[0,1,0])}}let Ne={};for(let et of["Left","Right"])Ne[Wt[et].a]={side:et,part:0},Ne[Wt[et].f]={side:et,part:1},Ne[Wt[et].h]={side:et,part:2};function oe(et,Bt,B){if(!et||!et.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Y=0,J=et.length-1,Vt=-1;for(;Y<=J;){let je=Y+J>>1;et[je].t<=Bt?(Vt=je,Y=je+1):J=je-1}let Xt=et[et.length-1],zt=et[0],Rt=Vt>=0?et[Vt]:{t:Xt.t-B,x:Xt.x,w:Xt.w},Qt=Vt+1<et.length?et[Vt+1]:{t:zt.t+B,x:zt.x,w:zt.w},se=Math.max(.05,Qt.t-Rt.t),ce=Math.min(.14,se*.45),xe=Math.max(0,Math.min(1,(Bt-Rt.t-ce)/Math.max(se-ce-.03,.02))),Ge=xe*xe*(3-2*xe),ie=Bt-Rt.t,Ve=(.55+.45*Rt.w)*Math.exp(-ie/.11),Ze=Qt.t-Bt,ge=Ze<.05?(.55+.45*Qt.w)*(1-Ze/.05):0;return{x:Rt.x+(Qt.x-Rt.x)*Ge,lift:Math.sin(Math.PI*xe)*Math.min(.05,.012+se*.03)*(se>2.5?.4:1),press:Math.max(Ve,ge),finger:ge>Ve?((Vt+1)*7+3)%4:(Math.max(Vt,0)*7+3)%4,busy:Math.exp(-ie/.9)}}let It={lean:0,turn:0,nod:0,pedal:0,last:-1},$e=["Index","Middle","Ring","Pinky"];function S(et){let Bt=qx.PLAY,B=Ox.cues,Y=Ox.time(),J=B&&B.dur||158,Vt={Left:oe(B&&B.left,Y,J),Right:oe(B&&B.right,Y,J)},Xt=.35;if(B&&B.level&&B.level.length){let Ie=Y*8,He=Math.floor(Ie)%B.level.length,lo=(He+1)%B.level.length;Xt=B.level[He]+(B.level[lo]-B.level[He])*(Ie-Math.floor(Ie))}let zt=It.last<0?0:Math.min(.1,Math.max(0,et-It.last));It.last=et;let Rt=Ie=>Math.min(1,zt*Ie);It.lean+=(Xt-It.lean)*Rt(1.2),It.turn+=(Vt.Right.busy-Vt.Left.busy-It.turn)*Rt(1.5),It.nod+=(Math.max(Vt.Right.press,Vt.Left.press*.7)-It.nod)*Rt(6),It.pedal+=((Vt.Left.busy>.35?1:.15)-It.pedal)*Rt(5);let Qt=Math.sin(et*2*Math.PI/4.6),se=Math.sin(Y*.41)*.6+Math.sin(Y*.17+1)*.4,ce={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*It.pedal,0,0],Spine:[9+3.5*It.lean+se*1.6,It.turn*2.5,-It.turn*1.6],Spine1:[7+Qt*.8+2.5*It.lean,It.turn*2.5,-It.turn*1.2],Spine2:[6+Qt*.6+se*.8,It.turn*1.5,0],Neck:[13+3*It.lean,It.turn*3,0],Head:[15+It.nod*3.5+se*1.5,It.turn*5,se*1.5]};for(let Ie of["Left","Right"]){let He=Ie==="Left"?-1:1,lo=Vt[Ie];$e.forEach((j,ht)=>{let pe=ht===lo.finger?lo.press:lo.press*.2;ce[Ie+"Hand"+j+"1"]=[0,0,He*(20+3*ht+20*pe)],ce[Ie+"Hand"+j+"2"]=[0,0,He*(26+4*ht-6*pe)],ce[Ie+"Hand"+j+"3"]=[0,0,He*14]}),ce[Ie+"HandThumb1"]=[0,He*-18,He*10]}let xe={};for(let Ie in ce){let He=ce[Ie];xe[Ie]=d1(He[0],He[1],He[2])}let Ge=_t[H.Hips][13]*q0,ie=n0(kr([Bt.stoolX,Bt.stoolTop+.1-Ge,Bt.stoolFront+.15],Ms([0,1,0],Bt.heading),[1,1,1]),kr([0,0,0],[0,0,0,1],[q0,q0,q0])),Ve=(Bt.keyX0+Bt.keyX1)/2,Ze={};for(let Ie of["Left","Right"]){let He=Vt[Ie],lo=Ie==="Left"?Ve-.4+.33*He.x:Ve+.07+.33*He.x;Ze[Ie]=[lo,Bt.keyTop+.062+He.lift-He.press*.012,Bt.keyFront+.075]}let ge=new Array(I),je={},Uo=[0,1,0];for(let Ie=0;Ie<I;Ie++){let He=G[Ie],lo=Nt[Ie],j=xe[He.name],ht=Ne[Ie];if(ht){let pe=Wt[ht.side];if(ht.part===0){let he=ge[He.parent],Pe=n0(he,Nt[Ie]),un=[Pe[12],Pe[13],Pe[14]],v0=sn(Bd(he),sa(xt[He.parent])),H0=_a(Ze[ht.side],un),dn=v1(H0),C0=(pe.upper+pe.fore)*.995;dn>C0&&(H0=_s(H0,C0/dn),dn=C0);let pn=_s(H0,1/dn),To=(pe.upper*pe.upper-pe.fore*pe.fore+dn*dn)/(2*dn),i0=Math.sqrt(Math.max(0,pe.upper*pe.upper-To*To)),en=[ht.side==="Left"?-.6:.6,-.8,.3];en=mf(_a(en,_s(pn,jd(en,pn))));let Yn=gf(un,gf(_s(pn,To),_s(en,i0)));pe.T=gf(un,H0),pe.elbow=Yn;let nr=mf(_a(Yn,un)),rr=sn(gS(mS(v0,pe.dir0),nr),v0);je[Ie]=rr,j=sn(sa(v0),rr)}else if(ht.part===1){let he=sn(at(_a(pe.T,pe.elbow),Uo),sa(pe.qf0));je[Ie]=he,j=sn(sa(je[He.parent]),he)}else{let he=Vt[ht.side],Pe=sn(at([ht.side==="Left"?.12:-.12,-.2-.1*he.press,-1],Uo),sa(pe.qh0));je[Ie]=Pe,j=sn(sa(je[He.parent]),Pe)}}if(j){let pe=xt[Ie],he=sn(sa(pe),sn(j,pe));lo=kr(He.t,sn(He.r,he),He.s)}ge[Ie]=He.parent<0?n0(ie,lo):n0(ge[He.parent],lo)}for(let Ie=0;Ie<I;Ie++)Ye[Ie]=n0(ge[Ie],ft[Ie]);a.pianist={head:[ge[H.Head][12],ge[H.Head][13],ge[H.Head][14]]};let Ao=et%4.3;return{blink:Ao<.16?Math.sin(Ao/.16*Math.PI):0}}function De(et,Bt){if(k)return S(et);if(_)return ae(et,_);if(Bt)return fe(Bt);let B=Math.sin(et*2*Math.PI/4.2),Y=et%3.7,J=Y<.16?Math.sin(Y/.16*Math.PI):0,Vt=Math.sin(et*.45),Xt=Math.sin(et*.31+.8),zt=Math.max(0,Math.sin(et*.085)-.75)*4,Rt={RightArm:[0,-22*zt,11*Vt],RightForeArm:[0,8+26*zt,0],RightHand:[38*Xt,0,6*Math.sin(et*.7)],LeftUpLeg:[0,0,3.2*Math.sin(et*.36)],RightFoot:[5*Math.sin(et*.52+.4),0,0],Head:[0,1.6*Math.sin(et*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ie,Ve)=>{let Ze=Math.sin(et*1.1-Ve*.5);Rt["RightHand"+ie+"1"]=[0,0,8+12*Ze],Rt["RightHand"+ie+"2"]=[0,0,6+10*Ze]});let Qt={},se=(ie,Ve)=>{for(let Ze in ie){let ge=ie[Ze],je=d1(ge[0]*Ve,ge[1]*Ve,ge[2]*Ve);Qt[Ze]=Qt[Ze]?sn(Qt[Ze],je):je}};se(m1,1),se({Spine1:[B*.8,0,0],Spine2:[B*.6,0,0]},1),se(Rt,1);let ce=new Array(I),xe=new Array(I);for(let ie=0;ie<I;ie++){let Ve=G[ie],Ze=Nt[ie],ge=Qt[Ve.name];if(ge){let je=xt[ie],Uo=sn(sa(je),sn(ge,je));Ze=kr(Ve.t,sn(Ve.r,Uo),Ve.s)}ce[ie]=Ve.parent<0?n0(Ke,Ze):n0(ce[Ve.parent],Ze),xe[ie]=null}for(let ie=0;ie<I;ie++)Ye[ie]=n0(ce[ie],ft[ie]);let Ge=ie=>[ie[12],ie[13],ie[14]];return a.headPos=Ge(ce[H.Head]),a.hipsPos=Ge(ce[H.Hips]),a.headM=ce[H.Head],{blink:J}}function Be(et,Bt){let{pos:B,nrm:Y,jnt:J,wgt:Vt,outP:Xt,outN:zt,work:Rt,m:Qt}=et,se=Qt.n,ce=B;if(Bt){Rt.set(B);for(let xe in et.morphs){let Ge=Bt[xe]||0;if(Ge<=0)continue;let ie=et.morphs[xe];for(let Ve=0;Ve<ie.idx.length;Ve++){let Ze=ie.idx[Ve]*3;Rt[Ze]+=ie.d[Ve*3]*Ge,Rt[Ze+1]+=ie.d[Ve*3+1]*Ge,Rt[Ze+2]+=ie.d[Ve*3+2]*Ge}}ce=Rt}for(let xe=0;xe<se;xe++){let Ge=ce[xe*3],ie=ce[xe*3+1],Ve=ce[xe*3+2],Ze=Y[xe*3],ge=Y[xe*3+1],je=Y[xe*3+2],Uo=0,Ao=0,Ie=0,He=0,lo=0,j=0;for(let pe=0;pe<4;pe++){let he=Vt[xe*4+pe];if(he===0)continue;let Pe=Ye[J[xe*4+pe]];Uo+=he*(Pe[0]*Ge+Pe[4]*ie+Pe[8]*Ve+Pe[12]),Ao+=he*(Pe[1]*Ge+Pe[5]*ie+Pe[9]*Ve+Pe[13]),Ie+=he*(Pe[2]*Ge+Pe[6]*ie+Pe[10]*Ve+Pe[14]),He+=he*(Pe[0]*Ze+Pe[4]*ge+Pe[8]*je),lo+=he*(Pe[1]*Ze+Pe[5]*ge+Pe[9]*je),j+=he*(Pe[2]*Ze+Pe[6]*ge+Pe[10]*je)}Xt[xe*3]=Uo,Xt[xe*3+1]=Ao,Xt[xe*3+2]=Ie;let ht=Math.hypot(He,lo,j)||1;zt[xe*3]=He/ht,zt[xe*3+1]=lo/ht,zt[xe*3+2]=j/ht}Qt.grid&&!mo&&!_&&!k&&co(et),et.sway&&Xn(et),et.pb.subdata(Xt),et.nbuf.subdata(zt)}function co(et){let[Bt,B]=et.m.grid,Y=et.outP,J=et.outN,Vt=$x.seat+.012;for(let Xt=1;Xt<Bt;Xt++){let zt=Math.pow(1-Xt/(Bt-1),1.5);for(let Rt=0;Rt<B;Rt++){let Qt=(Xt*B+Rt)*3;Y[Qt+1]>Vt?Y[Qt+1]=Vt+(Y[Qt+1]-Vt)*Math.max(zt,.15):Y[Qt+1]=Vt}}for(let Xt=0;Xt<J.length;Xt+=3)J[Xt]=0,J[Xt+1]=1,J[Xt+2]=0}let mo=!1,go=(et,Bt,B,Y,J)=>({bone:H[et],rate:Bt,damp:B,drag:Y,most:J,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),No={head:go("Head",15,.32,.012,.035),chest:go("Spine2",9,.38,.03,.1),hips:go("Hips",7,.42,.045,.16)},zo=-1;function rn(et){let Bt=zo<0?0:et-zo;zo=et;for(let B in No){let Y=No[B],J=Ye[Y.bone],Vt=_t[Y.bone],Xt=Vt[12],zt=Vt[13],Rt=Vt[14],Qt=[J[0]*Xt+J[4]*zt+J[8]*Rt+J[12],J[1]*Xt+J[5]*zt+J[9]*Rt+J[13],J[2]*Xt+J[6]*zt+J[10]*Rt+J[14]];if(!Y.p||!(Bt>0)||Bt>.25||Math.hypot(Qt[0]-Y.p[0],Qt[1]-Y.p[1],Qt[2]-Y.p[2])>.5){Y.p=Qt,Y.x=[0,0,0],Y.v=[0,0,0],Y.vel=[0,0,0];continue}let se=[(Qt[0]-Y.p[0])/Bt,(Qt[1]-Y.p[1])/Bt,(Qt[2]-Y.p[2])/Bt],ce=Math.max(1,Math.ceil(Bt/.016)),xe=Bt/ce;for(let ie=0;ie<3;ie++){let Ve=Math.max(-30,Math.min(30,(se[ie]-Y.vel[ie])/Bt)),Ze=-se[ie]*Y.drag;for(let ge=0;ge<ce;ge++)Y.v[ie]+=((Ze-Y.x[ie])*Y.rate*Y.rate-2*Y.damp*Y.rate*Y.v[ie]-Ve)*xe,Y.x[ie]+=Y.v[ie]*xe}let Ge=Math.hypot(Y.x[0],Y.x[1],Y.x[2]);if(Ge>Y.most){let ie=Y.most/Ge;Y.x=[Y.x[0]*ie,Y.x[1]*ie,Y.x[2]*ie]}Y.p=Qt,Y.vel=se}}for(let et of ut){let Bt=et.m,B=Bt.n,Y=null,J=null;if(Bt.kind===9){J="head",Y=new Float32Array(B);for(let Vt=0;Vt<B;Vt++){let Xt=et.uv[Vt*2]<-.5?0:et.uv[Vt*2+1];Y[Vt]=Xt*Xt}}else if(Bt.name==="scarf"){J="chest",Y=new Float32Array(B);for(let Vt=0;Vt<B;Vt++)Y[Vt]=l(1.52,1.12,et.pos[Vt*3+1])}else if(Bt.grid){J="hips",Y=new Float32Array(B);let Vt=Bt.grid[0],Xt=Bt.grid[1];for(let zt=0;zt<B;zt++)Y[zt]=Math.pow(Math.floor(zt/Xt)/(Vt-1),1.6)}Y&&(et.sway=Y,et.spring=No[J],et.loose=J)}function Xn(et){if(!mo&&!k&&!_)return;let Bt=et.spring.x,B=et.sway,Y=et.outP;if(!(Math.abs(Bt[0])+Math.abs(Bt[1])+Math.abs(Bt[2])<1e-5))for(let J=0,Vt=B.length;J<Vt;J++){let Xt=B[J];Xt>0&&(Y[J*3]+=Bt[0]*Xt,Y[J*3+1]+=Bt[1]*Xt,Y[J*3+2]+=Bt[2]*Xt)}}function O0(et,Bt){mo=!!Bt;let B=De(et,Bt);rn(et);let Y={eyeBlinkLeft:B.blink,eyeBlinkRight:B.blink};for(let J of ut)Be(J,Object.keys(J.morphs).length?Y:null);a.pose=B}return{parts:ut,update:O0,drawOpaque:Yt,drawBlend:Se,state:a}}function l(z,D,P){let G=Math.min(1,Math.max(0,(P-z)/(D-z)));return G*G*(3-2*G)}let v=bS(),d=wS(),p=d?t.texture({data:d,flipY:!1,min:"linear",mag:"linear"}):c,u=t({vert:_S,frag:MS,attributes:{position:v.pos,normal:v.nrm,uv:v.uv,kind:v.kind},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),h=kS(),g=t({vert:SS,frag:ES,attributes:{position:h.pos,normal:h.nrm,color:h.col,mat:h.mat},elements:new Uint16Array(h.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),m=t({vert:zS,frag:AS,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(z){let D=z.headM,P=ut=>{let Yt=Math.hypot(...ut)||1;return ut.map(Se=>Se/Yt)},G=P([D[4],D[5],D[6]]),I=P([D[8],D[9],D[10]]),H=G,ft=I.map(ut=>-ut),Nt=[ft[1]*H[2]-ft[2]*H[1],ft[2]*H[0]-ft[0]*H[2],ft[0]*H[1]-ft[1]*H[0]],_t=z.headPos,xt=[0,1,2].map(ut=>_t[ut]+G[ut]*.06+I[ut]*.185);return[Nt[0],Nt[1],Nt[2],0,ft[0],ft[1],ft[2],0,H[0],H[1],H[2],0,xt[0],xt[1],xt[2],1]}let y=-1,b="",M=null,_=null,k=!1;function A(z){if(!o)return;let D=(Rx.motion,n()),P=M?[M.x,M.z,M.heading,M.phase].map(I=>I.toFixed(4)).join():"";(_||k||P!==b||!M&&Math.abs(D-y)>(Rx.isPhone?1/30:0))&&(o.update(D,M),y=D,b=P);for(let I of o.parts)I.blend||(o.drawOpaque({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.el,tex:I.tex,alphaCut:I.alphaCut,skin:I.skin,kind:I.kind,alphaScale:I.alphaScale}),I.sockEl&&o.drawOpaque({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let G=o.state;if(G.headM&&!M&&!_&&!k){u({model:x(G)});let I=G.headPos,H=Math.sin(D*1.3)*.02,ft=[I[0],I[1]+.62+H,I[2]+.05],Nt=D*.6,_t=kr(ft,sn(Ms([0,1,0],Nt),Ms([0,0,1],.18)),[1.2,1.2,1.2]),xt=.5+.5*Math.sin(D*2);g({model:_t,pulse:xt}),a.glowPos=ft,a.glow=.06+.03*xt,m({center:[ft[0],ft[1]-.12,ft[2]],size:.1,pulse:xt})}for(let I of o.parts)I.blend&&o.drawBlend({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.el,tex:I.tex,alphaCut:I.alphaCut,skin:I.skin,kind:I.kind,alphaScale:I.alphaScale})}return A.state=a,A.place=yi,A.setWalk=z=>{M=z||null,M&&(a.glow=0)},A.setSeat=z=>{_=z||null,a.glow=_?0:a.glow,y=-1},A.setPiano=z=>{z=!!z,z!==k&&(k=z,k&&(a.glow=0),y=-1)},A};Xd.exports.PLACE=yi});var Yd=St((_A,Hx)=>{"use strict";Hx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Qd=St((MA,Xx)=>{"use strict";var Wx=Cr(),Ux=Tl(),ks=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Kd(){return Wx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var TS=`
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
`,Bx=!1;function Vx(){if(Bx)return;Bx=!0;let t=document.createElement("style");t.textContent=TS,document.head.appendChild(t)}var LS='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function NS(t){return!t||!t.visit||!Kd()?"":(Vx(),`<button type="button" class="visit-btn" data-visit="${ks(t.slug||"")}" aria-label="Visit what remained: watch ${ks(t.title)} come to life">${LS}<span>Visit what remained</span></button>`)}function RS(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),r=!0,n=0;return function a(s){if(r){if(s-n>70){n=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{r=!1}}var xf=null;function OS(t){if(xf||!t||!t.visit)return;Vx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(Wx.isPhone?"-1024":"")+".webp",r=document.createElement("div");r.className="visit",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Visiting "+t.title),r.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${ks(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${ks(t.title)}, ${ks(Ux(t))}" src="${ks(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${ks(t.title)}</span>
			<span class="visit-meta">${ks(Ux(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(r);let n=r.querySelector("video"),a=r.querySelector(".visit-title"),s=RS(r.querySelector(".visit-grain")),i=[],c=(g,m)=>i.push(setTimeout(g,m)),f=g=>g.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(g=>r.addEventListener(g,f));let l=g=>{g.key==="Escape"?(g.preventDefault(),h()):g.key===" "&&!(g.target&&g.target.tagName==="BUTTON")&&(g.preventDefault(),p()),g.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let v=g=>g.stopImmediatePropagation();window.addEventListener("keyup",v,!0);let d=!1;function p(){d||(d=!0,a.classList.add("on"),r.classList.add("resolved"),c(()=>{let g=r.querySelector('[data-act="back"]');g&&g.focus({preventScroll:!0})},1300))}function u(){d=!1,r.classList.remove("resolved"),a.classList.remove("on");try{n.currentTime=0}catch(m){}let g=n.play();g&&g.catch&&g.catch(()=>p()),r.classList.add("playing"),c(()=>{d||a.classList.add("on")},1600),c(()=>{d||a.classList.remove("on")},6200)}n.addEventListener("timeupdate",()=>{n.duration&&n.currentTime>n.duration-1.2&&p()}),n.addEventListener("ended",p),n.addEventListener("error",p);function h(){if(xf){xf=null,i.forEach(clearTimeout),r.classList.remove("on");try{n.pause()}catch(g){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",v,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),r.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}r.querySelector(".visit-close").addEventListener("click",h),r.querySelector(".visit-skip").addEventListener("click",()=>{try{n.pause()}catch(g){}p()}),r.querySelector(".visit-end").addEventListener("click",g=>{let m=g.target.closest("button");m&&(m.dataset.act==="back"&&h(),m.dataset.act==="again"&&(i.forEach(clearTimeout),u()))}),n.src=t.visit.video,xf={close:h},requestAnimationFrame(()=>{r.classList.add("on"),c(u,1300)})}var jx={};function CS(t){if(!t||!t.visit||jx[t.visit.video]||!Kd())return;jx[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}Xx.exports={available:Kd,button:NS,open:OS,warm:CS,get active(){return!!xf}}});var Qx=St((kA,Kx)=>{"use strict";var PS=Cr(),qc=[0,0],Pc=[0,0],Wa=null,Jd=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(qc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),qc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),Jd=performance.now())},{passive:!0});let t=()=>{Jd=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(Wa||(Wa=[e.gamma,e.beta]),Wa[0]+=(e.gamma-Wa[0])*.01,Wa[1]+=(e.beta-Wa[1])*.01,qc[0]=Math.max(-1,Math.min(1,(e.gamma-Wa[0])/14)),qc[1]=Math.max(-1,Math.min(1,(e.beta-Wa[1])/14)))},{passive:!0})}var Yx=0,Ic=null,y1=null,Ma=[0,0,0],Zd=0,$c=null,Dc=0,bi={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},IS={apply(t,e){let o=Math.min(.1,Math.max(0,e-Yx));Yx=e;let r=t.eye,n=t.target,a=[n[0]-r[0],n[1]-r[1],n[2]-r[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!Ic;if(Ic&&o>0){let y=[r[0]-Ic[0],r[1]-Ic[1],r[2]-Ic[2]],b=Math.hypot(y[0],y[1],y[2]);if(b>2.5)l=!0;else{let _=Math.min(1,o*5);for(let k=0;k<3;k++)Ma[k]+=(y[k]/o-Ma[k])*_}let M=Math.hypot(n[0]-y1[0],n[1]-y1[1],n[2]-y1[2]);Dc=b/o<.12&&M/o<.2?Dc+o:0}l&&(Ma[0]=Ma[1]=Ma[2]=0,Dc=0),Ic=r.slice(),y1=n.slice(),Zd=Math.hypot(Ma[0],Ma[1],Ma[2]);let v=Math.min(1,o*2.6);Pc[0]+=(qc[0]-Pc[0])*v,Pc[1]+=(qc[1]-Pc[1])*v;let d=Math.max(.03,Math.min(.32,s*.05)),p=(PS.isPhone&&!Wa?1.5:1)*Math.min(1,Dc/2.5),u=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*d*.55*p,h=Math.sin(e*.097+.6)*d*.16*p,g=Pc[0]*d+u,m=-Pc[1]*d*.45+h;for(let y=0;y<3;y++)bi.eye[y]=r[y]+i[y]*g+f[y]*m,bi.target[y]=n[y]+(i[y]*g+f[y]*m)*.12;r[1]>.05&&(bi.eye[1]=Math.max(.05,bi.eye[1]));let x=Ma[0]*i[0]+Ma[2]*i[2];return bi.fov=t.fov+Math.min(3.5,Zd*.55),bi.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),bi},pull(t,e){($c===null||!(Math.abs(t.focus-$c)<40))&&($c=t.focus);let o=1/60;$c+=(t.focus-$c)*Math.min(1,o*3.2),t.focus=$c,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,Dc/3))},get speed(){return Zd},get resting(){return Dc>2&&performance.now()-Jd>2e3}};Kx.exports=IS});var tp=St((SA,Zx)=>{Zx.exports=1e-6});var ep=St((EA,Jx)=>{Jx.exports=$S;function $S(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var e5=St((zA,t5)=>{t5.exports=DS;function DS(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var op=St((AA,o5)=>{o5.exports=qS;function qS(t,e,o){var r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=o,r}});var np=St((TA,n5)=>{n5.exports=FS;function FS(t,e){var o=e[0],r=e[1],n=e[2],a=o*o+r*r+n*n;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var rp=St((LA,r5)=>{r5.exports=GS;function GS(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var c5=St((NA,i5)=>{i5.exports=US;var a5=op(),s5=np(),HS=rp();function US(t,e){var o=a5(t[0],t[1],t[2]),r=a5(e[0],e[1],e[2]);s5(o,o),s5(r,r);var n=HS(o,r);return n>1?0:Math.acos(n)}});var f5=St((RA,l5)=>{l5.exports=BS;function BS(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var u5=St((OA,h5)=>{h5.exports=jS;function jS(t,e,o,r){return t[0]=e,t[1]=o,t[2]=r,t}});var p5=St((CA,d5)=>{d5.exports=WS;var ap=tp();function WS(t,e){var o=t[0],r=t[1],n=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=ap*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(r-s)<=ap*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-i)<=ap*Math.max(1,Math.abs(n),Math.abs(i))}});var m5=St((PA,v5)=>{v5.exports=VS;function VS(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var x5=St((IA,g5)=>{g5.exports=XS;function XS(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var sp=St(($A,y5)=>{y5.exports=YS;function YS(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var w5=St((DA,b5)=>{b5.exports=sp()});var ip=St((qA,_5)=>{_5.exports=KS;function KS(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var k5=St((FA,M5)=>{M5.exports=ip()});var cp=St((GA,S5)=>{S5.exports=QS;function QS(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var z5=St((HA,E5)=>{E5.exports=cp()});var T5=St((UA,A5)=>{A5.exports=ZS;function ZS(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var N5=St((BA,L5)=>{L5.exports=JS;function JS(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var O5=St((jA,R5)=>{R5.exports=tE;function tE(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var P5=St((WA,C5)=>{C5.exports=eE;function eE(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var $5=St((VA,I5)=>{I5.exports=oE;function oE(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var q5=St((XA,D5)=>{D5.exports=nE;function nE(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var G5=St((YA,F5)=>{F5.exports=rE;function rE(t,e,o,r){return t[0]=e[0]+o[0]*r,t[1]=e[1]+o[1]*r,t[2]=e[2]+o[2]*r,t}});var lp=St((KA,H5)=>{H5.exports=aE;function aE(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(o*o+r*r+n*n)}});var B5=St((QA,U5)=>{U5.exports=lp()});var fp=St((ZA,j5)=>{j5.exports=sE;function sE(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return o*o+r*r+n*n}});var V5=St((JA,W5)=>{W5.exports=fp()});var hp=St((tT,X5)=>{X5.exports=iE;function iE(t){var e=t[0],o=t[1],r=t[2];return Math.sqrt(e*e+o*o+r*r)}});var K5=St((eT,Y5)=>{Y5.exports=hp()});var up=St((oT,Q5)=>{Q5.exports=cE;function cE(t){var e=t[0],o=t[1],r=t[2];return e*e+o*o+r*r}});var J5=St((nT,Z5)=>{Z5.exports=up()});var ey=St((rT,ty)=>{ty.exports=lE;function lE(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var ny=St((aT,oy)=>{oy.exports=fE;function fE(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var ay=St((sT,ry)=>{ry.exports=hE;function hE(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=n*c-a*i,t[1]=a*s-r*c,t[2]=r*i-n*s,t}});var iy=St((iT,sy)=>{sy.exports=uE;function uE(t,e,o,r){var n=e[0],a=e[1],s=e[2];return t[0]=n+r*(o[0]-n),t[1]=a+r*(o[1]-a),t[2]=s+r*(o[2]-s),t}});var ly=St((cT,cy)=>{cy.exports=dE;function dE(t,e){e=e||1;var o=Math.random()*2*Math.PI,r=Math.random()*2-1,n=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(o)*n,t[1]=Math.sin(o)*n,t[2]=r*e,t}});var hy=St((lT,fy)=>{fy.exports=pE;function pE(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[3]*r+o[7]*n+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*r+o[4]*n+o[8]*a+o[12])/s,t[1]=(o[1]*r+o[5]*n+o[9]*a+o[13])/s,t[2]=(o[2]*r+o[6]*n+o[10]*a+o[14])/s,t}});var dy=St((fT,uy)=>{uy.exports=vE;function vE(t,e,o){var r=e[0],n=e[1],a=e[2];return t[0]=r*o[0]+n*o[3]+a*o[6],t[1]=r*o[1]+n*o[4]+a*o[7],t[2]=r*o[2]+n*o[5]+a*o[8],t}});var vy=St((hT,py)=>{py.exports=mE;function mE(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*r+i*a-c*n,v=f*n+c*r-s*a,d=f*a+s*n-i*r,p=-s*r-i*n-c*a;return t[0]=l*f+p*-s+v*-c-d*-i,t[1]=v*f+p*-i+d*-s-l*-c,t[2]=d*f+p*-c+l*-i-v*-s,t}});var gy=St((uT,my)=>{my.exports=gE;function gE(t,e,o,r){var n=o[1],a=o[2],s=e[1]-n,i=e[2]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=e[0],t[1]=n+s*f-i*c,t[2]=a+s*c+i*f,t}});var yy=St((dT,xy)=>{xy.exports=xE;function xE(t,e,o,r){var n=o[0],a=o[2],s=e[0]-n,i=e[2]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=n+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var wy=St((pT,by)=>{by.exports=yE;function yE(t,e,o,r){var n=o[0],a=o[1],s=e[0]-n,i=e[1]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=n+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var My=St((vT,_y)=>{_y.exports=bE;var Ss=ep()();function bE(t,e,o,r,n,a){var s,i;for(e||(e=3),o||(o=0),r?i=Math.min(r*e+o,t.length):i=t.length,s=o;s<i;s+=e)Ss[0]=t[s],Ss[1]=t[s+1],Ss[2]=t[s+2],n(Ss,Ss,a),t[s]=Ss[0],t[s+1]=Ss[1],t[s+2]=Ss[2];return t}});var Sy=St((mT,ky)=>{ky.exports={EPSILON:tp(),create:ep(),clone:e5(),angle:c5(),fromValues:op(),copy:f5(),set:u5(),equals:p5(),exactEquals:m5(),add:x5(),subtract:sp(),sub:w5(),multiply:ip(),mul:k5(),divide:cp(),div:z5(),min:T5(),max:N5(),floor:O5(),ceil:P5(),round:$5(),scale:q5(),scaleAndAdd:G5(),distance:lp(),dist:B5(),squaredDistance:fp(),sqrDist:V5(),length:hp(),len:K5(),squaredLength:up(),sqrLen:J5(),negate:ey(),inverse:ny(),normalize:np(),dot:rp(),cross:ay(),lerp:iy(),random:ly(),transformMat4:hy(),transformMat3:dy(),transformQuat:vy(),rotateX:gy(),rotateY:yy(),rotateZ:wy(),forEach:My()}});var Ay=St((gT,zy)=>{"use strict";function Ey(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(r=>r(o))}}}zy.exports=function(e){let o=e.ownerDocument||document,r=Ey(),n=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let v=l.call(e);v&&v.catch&&v.catch(()=>{})}catch(v){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){n&&(r.emit("release"),n.emit("end"),n=null);return}n=Ey(),s=Date.now(),r.emit("attain",n)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>r.emit("error")),(o.body||e).addEventListener("mousemove",l=>{n&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,r.emit("data",a),n.emit("data",a))},!1),r.request=c,r.target=i,r.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},r}});var Oy=St((bT,Ry)=>{"use strict";var wi=bc(),_i=Sy(),wE=Ay(),xT=Math.PI/4,yT=Math.PI/6,Ty=2,_E=1,ME=2.4,kE=2.4,SE=1e3,EE=5,zE=7,dp=A0().C,yf=[[7,1.6],[7,dp.zc],[dp.x1-2.95,dp.zc]],Es=yf.slice(1).map((t,e)=>{let o=yf[e],r=t[0]-o[0],n=t[1]-o[1],a=Math.hypot(r,n);return{a:o,len:a,dir:[r/a,n/a]}}),pp=Es.reduce((t,e)=>t+e.len,0);function Ly(t){let e=Math.max(0,Math.min(pp,t));for(let r of Es){if(e<=r.len)return[r.a[0]+r.dir[0]*e,r.a[1]+r.dir[1]*e];e-=r.len}let o=yf[yf.length-1];return[o[0],o[1]]}function AE(t){let e=0;for(let r=0;r<Es.length;r++){let n=Es[r],a=e+n.len;if(t<a-1e-4||r===Es.length-1){let s=n.dir,c=t<=e+1e-4&&r>0?Es[r-1].dir:n.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=Es[Es.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var TE=Math.PI/4,LE=7,NE=140,RE=70,Ny=(t,e,o)=>(1-t)*e+t*o,OE=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;Ry.exports=function({getGridSegments:t,getGridParts:e},o){var r=[0,Math.PI],n=[0,Math.PI],a=0,s=[0,0,0],i=[zE,Ty,yf[0][1]],c=0,f=1,l=0,v=[.707,0,.707],d=[0,1,0],p=[0,0,0],u=.5,h=wi.identity([]),g=wi.identity([]),m=!1,x=[0,0,0],y=[0,0,0],b=1,M=!1;let _=V=>{r[1]+=V*TE},k=(V,mt,Lt)=>{if(V=Math.max(Math.min(V,100),-100),mt=Math.max(Math.min(mt,100),-100),r[0]=0,M){a=0;return}for(a+=V;a>=Lt;)_(1),a-=Lt;for(;a<=-Lt;)_(-1),a+=Lt};wE(document.body).on("attain",V=>{V.on("data",mt=>{k(mt.dx,mt.dy,NE)})});let z=null,D=null,P=0,G={x:0,y:0},I=58,H=document.createElement("div");H.id="museum-mobile-controls",H.innerHTML=`

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
	`,document.body.appendChild(H);let ft=H.querySelector("#museum-joystick"),Nt=H.querySelector("#museum-joystick-knob"),_t=()=>{Nt.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},xt=V=>{let mt=V.clientX-G.x,Lt=V.clientY-G.y,fe=Math.hypot(mt,Lt);if(fe>I&&(mt=mt/fe*I,Lt=Lt/fe*I),Nt.style.transform=`translate(
				calc(-50% + ${mt}px),
				calc(-50% + ${Lt}px)
			)`,fe<10){s[0]=0,s[2]=0;return}let ae=mt/I,qt=Lt/I;s[0]=0,s[2]=Math.abs(qt)>.15?qt:0},ut=(V,mt)=>{for(let Lt=0;Lt<V.length;Lt++)if(V[Lt].identifier===mt)return V[Lt];return null},Yt=V=>!!(V&&V.closest&&V.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Se=V=>{if(!Yt(V.target)&&(V.cancelable&&V.preventDefault(),!M))for(let mt=0;mt<V.changedTouches.length;mt++){let Lt=V.changedTouches[mt];if(z===null&&Lt.clientX<window.innerWidth*.48){z=Lt.identifier;let fe=ft.getBoundingClientRect();G.x=fe.left+fe.width/2,G.y=fe.top+fe.height/2,xt(Lt)}else D===null&&Lt.clientX>=window.innerWidth*.48&&(D=Lt.identifier,P=Lt.clientX,a=0)}},Oe=V=>{if(Yt(V.target)||(V.cancelable&&V.preventDefault(),M))return;let mt=z===null?null:ut(V.touches,z);mt&&xt(mt);let Lt=D===null?null:ut(V.touches,D);if(Lt){let fe=Lt.clientX-P;P=Lt.clientX,k(fe,0,RE)}},oo=V=>{if(!Yt(V.target)){V.cancelable&&V.preventDefault();for(let mt=0;mt<V.changedTouches.length;mt++){let Lt=V.changedTouches[mt];Lt.identifier===z&&(z=null,_t()),Lt.identifier===D&&(D=null)}}};document.addEventListener("touchstart",Se,{passive:!1}),document.addEventListener("touchmove",Oe,{passive:!1}),document.addEventListener("touchend",oo,{passive:!1}),document.addEventListener("touchcancel",oo,{passive:!1});let me=document.createElement("style");me.textContent=`

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
	`,document.head.appendChild(me);var Ke={};let Ye=V=>{if(V.defaultPrevented||V.ctrlKey||V.altKey||V.metaKey)return;let mt=V.type==="keydown";Ke[V.code]=mt,mt&&!V.repeat&&!M&&((V.code==="KeyA"||V.code==="ArrowLeft")&&_(-1),(V.code==="KeyD"||V.code==="ArrowRight")&&_(1)),m=!1;let Lt=Ke.KeyW||Ke.ArrowUp?1:0;s=[0,0,(Ke.KeyS||Ke.ArrowDown?1:0)-Lt],V.preventDefault()};window.addEventListener("keydown",Ye),window.addEventListener("keyup",Ye);var nt=0;return{pos:i,fmouse:n,forward:v,up:d,setPaused:V=>{M=!!V,M&&(s[0]=0,s[2]=0,_t())},place:(V,mt)=>{c=Math.max(0,Math.min(pp,V));let Lt=Ly(c);i[0]=Lt[0],i[2]=Lt[1],r[1]=mt,n[1]=mt,a=0,f=1},view:()=>h,proj:()=>(wi.perspective(g,o(),window.innerWidth/window.innerHeight,.1,700),g),tick:({time:V})=>{let mt=V-nt;nt=V;let Lt=[0,0,0],fe=[];_i.set(v,Math.sin(n[1]),0,-Math.cos(n[1])),_i.set(d,0,1,0);let _e=m?kE:ME,ae=Math.sin(r[1]),qt=-Math.cos(r[1]),at=AE(c),Wt=ae*at.ahead[0]+qt*at.ahead[1],Ne=ae*at.back[0]+qt*at.back[1],oe=f;Math.max(Wt,Ne)>.3&&(oe=Wt>=Ne?1:-1);let It=M?0:-s[2]*_e;l+=(It-l)*(1-Math.exp(-Math.min(mt,.1)*5.5)),It===0&&Math.abs(l)<.01&&(l=0);let $e=l*oe*Math.min(mt,.1);M&&(s[0]=0,s[2]=0,$e=0,l=0),$e!==0&&(f=Math.sign($e)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(pp,c+$e));let S=Ly(c);_i.set(p,S[0]-i[0],0,S[1]-i[2]);let De=_i.len(p);De===0&&u!==.25&&(u=(Math.abs((u+.5)%1-.5)-.25)*.8+.25,(u+.01)%.25<.02&&(u=.25));let Be=u;if(u+=De/(m?EE:SE),i[1]=Ty,_i.add(i,i,p),b<1){b+=mt/_E,b=Math.min(b,1);let co=OE(b);_i.set(i,Ny(co,x[0],y[0]),i[1],Ny(co,x[2],y[2]))}n[0]=0,n[1]+=(r[1]-n[1])*Math.min(1,Math.min(mt,.1)*LE),Math.abs(r[1]-n[1])<5e-4&&(n[1]=r[1]),wi.identity(h),wi.rotateX(h,h,0),wi.rotateY(h,h,n[1]),wi.translate(h,h,_i.scale(Lt,i,-1))}}}});var Iy=St((wT,Py)=>{"use strict";var{skylightGLSL:CE,Z_START:PE,Z_END:IE,GLASS_Y:$E}=cc(),{oculusGLSL:DE,A:Mi}=$r(),{windowLightGLSL:qE,C:b1}=A0(),{doorLightGLSL:FE}=rs(),w1=Zn(),Fc=Xh(),Cy=ii(),Ur=t=>t.toFixed(4),vp=.1,mp=700,Gc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function GE(t,e){let o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],d=e[10],p=e[11],u=e[12],h=e[13],g=e[14],m=e[15],x=o*i-r*s,y=o*c-n*s,b=o*f-a*s,M=r*c-n*i,_=r*f-a*i,k=n*f-a*c,A=l*h-v*u,z=l*g-d*u,D=l*m-p*u,P=v*g-d*h,G=v*m-p*h,I=d*m-p*g,H=x*I-y*G+b*P+M*D-_*z+k*A;return H?(H=1/H,t[0]=(i*I-c*G+f*P)*H,t[1]=(n*G-r*I-a*P)*H,t[2]=(h*k-g*_+m*M)*H,t[3]=(d*_-v*k-p*M)*H,t[4]=(c*D-s*I-f*z)*H,t[5]=(o*I-n*D+a*z)*H,t[6]=(g*b-u*k-m*y)*H,t[7]=(l*k-d*b+p*y)*H,t[8]=(s*G-i*D+f*A)*H,t[9]=(r*D-o*G-a*A)*H,t[10]=(u*_-h*b+m*x)*H,t[11]=(v*b-l*_-p*x)*H,t[12]=(i*z-s*P-c*A)*H,t[13]=(o*P-r*z+n*A)*H,t[14]=(h*y-u*M-g*x)*H,t[15]=(l*M-v*y+d*x)*H,t):null}function HE(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[n*4+i];r[n*4+a]=s}for(let n=0;n<16;n++)t[n]=r[n];return t}var UE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Py.exports=(t,e)=>{let o=!!e.isPhone,r=t.hasExtension("webgl_depth_texture"),n=o?10:18,a=()=>e.post>=2?2:4,s=ut=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},ut||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),f=r?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:f||!0}),v=[i(),i()],d=[i(),i()],p=[i(),i()],u=[i(),i()],h=new Array(16).fill(0),g=new Array(16).fill(0),m=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},y={position:[-1,-1,3,-1,-1,3]},b=(ut,Yt,Se)=>t(Object.assign({vert:UE,frag:ut,attributes:y,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Yt,framebuffer:t.prop("out")},Se||{})),M=[2.6,0,PE-3.2,12.6,$E,IE+.4],_=[Mi.x0-.2,0,Mi.z0,Mi.x1,Mi.domeTop,Mi.z1],k=[b1.x0,0,b1.z0,b1.x1,7.6,b1.z1],A=[.35,0,.35,13.65,7.6,9],z=Cy.AIR_BOX,D=ut=>`vec3(${Ur(ut[0])}, ${Ur(ut[1])}, ${Ur(ut[2])}), vec3(${Ur(ut[3])}, ${Ur(ut[4])}, ${Ur(ut[5])})`,P=b(`
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

	${CE()}
	${DE()}
	${qE()}
	${FE()}
	${Cy.sunGLSL()}

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
		const int N = ${n};
		vec3 sum = vec3(0.0);

		// the skylight
		if (strength.x > 0.0) {
			vec2 t = hitBox(eye, rd, ${D(M)});
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
			vec2 t = hitBox(eye, rd, ${D(_)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Ur(Mi.dome.base)} && p.x > ${Ur(Mi.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${D(k)});
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
			vec2 t = hitBox(eye, rd, ${D(A)});
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
			vec2 t = hitBox(eye, rd, ${D(z)});
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
	}`,{depthTex:()=>f,invVP:()=>h,eye:()=>m,time:t.context("time"),night:()=>w1.night,strength:()=>G,strength5:()=>I}),G=[0,0,0,0],I=0;function H(){let ut=Gc.shafts*x.shafts,Yt=w1.night;return G[0]=Fc.box(M)?.06*ut*(1+.9*Yt):0,G[1]=Fc.box(_,!1,"court")?.1*ut*(1+.9*Yt):0,G[2]=Fc.box(k)?.07*ut*(1+.4*Yt):0,G[3]=Fc.box(A)?.04*ut*(1-.75*Yt):0,Fc.zone==="studio"?(G[0]=G[1]=G[2]=G[3]=0,I=.065*ut*(1+1*Yt)):I=0,G[0]+G[1]+G[2]+G[3]+I>5e-4}let ft=b(`
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
	}`,{src:t.prop("src"),dir:(ut,Yt)=>[Yt.dir[0]/Yt.size[0],Yt.dir[1]/Yt.size[1]]}),Nt=b(`
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
	}`,{src:t.prop("src"),texel:(ut,Yt)=>[.5/Yt.size[0],.5/Yt.size[1]],threshold:t.prop("threshold")}),_t=b(`
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
		return 2.0 * ${Ur(vp)} * ${Ur(mp)} / (${Ur(mp+vp)} - z * ${Ur(mp-vp)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>v[0],bloomA:()=>d[0],bloomB:()=>p[0],shafts:()=>u[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>Gc.exposure*x.exposure,vignette:()=>Math.min(1,Gc.vignette+x.vignette+.22*w1.night+(Fc.zone==="studio"?.2:0)),night:()=>w1.night,grain:()=>Gc.grain,bloomK:()=>Gc.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>e.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:r?1:0},{framebuffer:null}),xt=t({framebuffer:()=>l});return{shot:x,look:Gc,hasDepth:r,capture(ut,Yt,Se){let Oe=Math.max(.4,Math.min(1,e.scale||1)),oo=Math.max(2,Math.round(ut.drawingBufferWidth*Oe/2)*2),me=Math.max(2,Math.round(ut.drawingBufferHeight*Oe/2)*2);(l.width!==oo||l.height!==me)&&l.resize(oo,me);let Ke=Math.max(1,Math.ceil(oo/2)),Ye=Math.max(1,Math.ceil(me/2));v.forEach(nt=>nt.resize(Ke,Ye)),d.forEach(nt=>nt.resize(Math.max(1,Math.ceil(oo/4)),Math.max(1,Math.ceil(me/4)))),p.forEach(nt=>nt.resize(Math.max(1,Math.ceil(oo/8)),Math.max(1,Math.ceil(me/8)))),u.forEach(nt=>nt.resize(Math.max(1,Math.ceil(oo/a())),Math.max(1,Math.ceil(me/a())))),HE(g,Yt.proj,Yt.view),GE(h,g),m[0]=Yt.eye[0],m[1]=Yt.eye[1],m[2]=Yt.eye[2],xt(()=>{t.clear({color:[0,0,0,1],depth:1}),Se()})},present(){let ut=Yt=>[Yt.width,Yt.height];r&&e.post>=1&&H()?(P({out:u[0]}),ft({out:u[1],src:u[0],dir:[1,0],size:ut(u[0])}),ft({out:u[0],src:u[1],dir:[0,1],size:ut(u[0])})):t.clear({color:[0,0,0,1],framebuffer:u[0]}),Nt({out:v[0],src:c,size:[l.width,l.height],threshold:0}),ft({out:v[1],src:v[0],dir:[1,0],size:ut(v[0])}),ft({out:v[0],src:v[1],dir:[0,1],size:ut(v[0])}),Nt({out:d[0],src:v[0],size:ut(v[0]),threshold:.42}),ft({out:d[1],src:d[0],dir:[1,0],size:ut(d[0])}),ft({out:d[0],src:d[1],dir:[0,1],size:ut(d[0])}),Nt({out:p[0],src:d[0],size:ut(d[0]),threshold:0}),ft({out:p[1],src:p[0],dir:[1.5,0],size:ut(p[0])}),ft({out:p[0],src:p[1],dir:[0,1.5],size:ut(p[0])}),_t({out:null})}}}});var Gy=St((_T,Fy)=>{"use strict";var $y=Zn().GLSL,BE=Qs(),gp=rs(),{C:jE,FAR_DOOR:WE}=A0(),VE=100*Math.PI/180,Dy=t=>[WE.x-t[2],t[1],jE.zc-7+t[0]],qy=t=>[-t[2],t[1],t[0]];function XE(t){let e=[],o=[],r=[],n=[],a=BE.createBuilder(e,o,r,n);gp.addFrames(a,t);let s=gp.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:r,glass:s}}Fy.exports=t=>{let e=gp.DOOR,o=["left","right"].map(l=>{let v=XE(l),d=v.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:v.position.map(p=>p.slice()),srcN:v.normal.map(p=>p.slice()),srcG:v.glass.map(p=>p.slice()),pos:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(v.elements),type:"uint32"}),glassCount:v.glass.length,outP:new Float32Array(d*3),outN:new Float32Array(d*3),outG:new Float32Array(v.glass.length*3),outGN:new Float32Array(v.glass.length*3)}}),r=null;function n(l){if(l!==r){r=l;for(let v of o){let d=v.sign*l,p=Math.cos(d),u=Math.sin(d),h=x=>{let y=x[0]-v.hinge,b=x[2];return[v.hinge+y*p+b*u,x[1],-y*u+b*p]},g=x=>[x[0]*p+x[2]*u,x[1],-x[0]*u+x[2]*p];v.src.forEach((x,y)=>{let b=Dy(h(x));v.outP.set(b,y*3),v.outN.set(qy(g(v.srcN[y])),y*3)});let m=qy(g([0,0,1]));v.srcG.forEach((x,y)=>{v.outG.set(Dy(h(x)),y*3),v.outGN.set(m,y*3)}),v.pos.subdata(v.outP),v.nrm.subdata(v.outN),v.gpos.subdata(v.outG),v.gnrm.subdata(v.outGN)}}}n(0);let a=`
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
		${$y}
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
		${$y}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{n(c*VE);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var Uy=St((MT,Hy)=>{"use strict";var YE=Zn().GLSL,{skylightGLSL:KE}=cc(),{oculusGLSL:QE}=$r(),{windowLightGLSL:ZE}=A0(),ia=.22;function JE(){let t=[],e=[],o=[],r=[],s=(l,v)=>{let d=ia*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(v>0?1.06:.94),p=l*ia-ia*.12,u=v*d,h=Math.abs(v)*d*.42-.14*l*l*ia;h+=Math.sin(l*17+(v>0?0:2.1))*.012*ia*v*v;let g=(l-.3)*.55,m=Math.cos(g),x=Math.sin(g),y=h*m-u*x,b=h*x+u*m;return[p,y,b+.05*ia*l*l]},i=(l,v)=>{let p=s(Math.min(1,l+.01),v),u=s(Math.max(0,l-.01),v),h=s(l,Math.min(1,v+.01)),g=s(l,Math.max(-1,v-.01)),m=[p[0]-u[0],p[1]-u[1],p[2]-u[2]],x=[h[0]-g[0],h[1]-g[1],h[2]-g[2]],y=[x[1]*m[2]-x[2]*m[1],x[2]*m[0]-x[0]*m[2],x[0]*m[1]-x[1]*m[0]],b=Math.hypot(y[0],y[1],y[2])||1,M=y[1]<0?-1:1;return[y[0]/b*M,y[1]/b*M,y[2]/b*M]};for(let l=0;l<=18;l++){let v=l/18;for(let d=0;d<=5*2;d++){let p=d/5-1;t.push(s(v,p)),e.push(i(Math.min(.97,Math.max(.03,v)),p)),o.push([v,p])}}let c=5*2+1;for(let l=0;l<18;l++)for(let v=0;v<c-1;v++){let d=l*c+v,p=d+1,u=d+c,h=u+1;r.push([d,u,p],[p,u,h])}let f=t.length;return t.push([-ia*.12,0,-.003],[-ia*.12,0,.003],[-ia*.24,-.01,.0015],[-ia*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),r.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:r}}Hy.exports=t=>{let e=JE(),o=t({vert:`
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
		${YE}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${KE()}
		${QE()}
		${ZE()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),r=Zn(),n=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(ia*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>r.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),r.night>.01&&n({model:a.model}))}}});var Wy=St((kT,jy)=>{"use strict";var{skylightGLSL:t7,Z_START:By,Z_END:e7}=cc(),{oculusGLSL:o7,A:Hc}=$r(),{windowLightGLSL:n7,C:ki}=A0();jy.exports=(t,e)=>{let o=e.isPhone?900:2600,r=e.isPhone?350:900,n=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=ki.x0+.6,f=ki.x1-.3,l=[];for(let u=0;u<o;u++)l.push([2.5+i()*10.5,.3+i()*8,By-3.5+i()*(e7-By+4.5),i()]);for(let u=0;u<r;u++)l.push([Hc.x0+.3+i()*(Hc.x1-Hc.x0-.6),.3+i()*7.5,Hc.z0+.3+i()*(Hc.z1-Hc.z0-.6),i()]);for(let u=0;u<n;u++)l.push([c+i()*(f-c),.2+i()*5.6,ki.z0+.25+i()*(ki.z1-ki.z0-.5),i()]);let v=u=>u.toFixed(4),d=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=t({vert:`
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

		${t7()}
		${o7()}
		${n7()}

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
				p.z = clamp(p.z, ${v(ki.z0+.1)}, ${v(ki.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:u=>u.viewportHeight*.006,focus:(u,h)=>h&&h.focus||6,aperture:(u,h)=>h&&h.aperture||0,wake0:(u,h)=>(h&&h.wake||d)[0],wake1:(u,h)=>(h&&h.wake||d)[1],wake2:(u,h)=>(h&&h.wake||d)[2],wake3:(u,h)=>(h&&h.wake||d)[3],wakeDir:(u,h)=>h&&h.wakeDir||[0,0,1],gust:(u,h)=>h&&h.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return u=>p(u||{})}});var Zy=St((ST,Qy)=>{"use strict";var{C:Ky}=A0(),Vy=Zn(),Xy=15.3,r7=37.1,Yy=Ky.z1+.9,a7=Ky.z1+.7+16-.6;Qy.exports=(t,e)=>{let o=e.isPhone?36:80,r=11,n=()=>(r=r*16807%2147483647,(r-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(n(),1.8)*2.4;a.push([Xy+n()*(r7-Xy),l,Yy+n()*(a7-Yy),n()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>Vy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Vy.night>.01&&c()}}});var k1=St((ET,zr)=>{"use strict";var Jy=Zn(),ka=fs(),s7=bc(),As=Math.PI,Fe=t=>(+t).toFixed(4),ca=t=>`vec3(${Fe(t[0])}, ${Fe(t[1])}, ${Fe(t[2])})`,nn={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Do=-.55,a0=-2,bn=42.25,Bn=43.65,Wr=45.35,J0=46.75,p0=2.75,Sr=.12,i7=(Do+a0)/2,Yo={x:-1.3,y:1.42,w:.42,h:.52,z:Bn,cell:.026},io={x0:-1.85,x1:-.75,top:.98,z0:Bn-.3,z1:Bn-.02},Br={x0:-1.44,x1:-1.16,y0:io.top-.002,y1:io.top+.018},Er={cx:-1.3,cz:Bn-.165,w:.2,d:.255,y:io.top+.0012},k0={x:-1.03,z:Bn-.14,r:.042,h:.075},cn={x:-.86,z:Bn-.12,h:.085,r:.019};cn.flame=[cn.x,io.top+.012+cn.h+.028,cn.z];var M1={a:[k0.x-.004,io.top+.03,k0.z+.004],b:[k0.x-.13,io.top+.34,k0.z-.12]},wn=[-1.5,2.42,44.66],Un=[-1.78,1.95,bn+.09],jr={x:-1.32,z:44.08,y:.64,heading:.32},ob={window:{eye:[-1.3,1.33,42.8],target:[Yo.x,1.37,Bn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[Er.cx,io.top,Er.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},F0={z0:(bn+Bn)/2+.03,z1:(bn+Bn)/2+.56,y0:.98,y1:1.78,x:Do+.03,cell:.047};ob.peek={eye:[-1.2,1.42,42.95],target:[ka.PLAY.stoolX-ka.OFF[0],.85,ka.PLAY.keyFront+.2],fov:30};var zs={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function tb(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${Fe(Yo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${ca(wn)};
		if (d.z > -0.001) return 0.0;
		float t = (${Fe(Yo.z)} - ${Fe(wn[2])}) / d.z;
		vec2 g = (${ca(wn)} + d * t).xy - vec2(${Fe(Yo.x)}, ${Fe(Yo.y)});
		float inWin = (1.0 - smoothstep(${Fe(Yo.w/2-.01)}, ${Fe(Yo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${Fe(Yo.h/2-.01)}, ${Fe(Yo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${Fe(Yo.z)}) / abs(${Fe(Yo.z)} - ${Fe(wn[2])}) / ${Fe(Yo.cell)};
		vec2 qc = fract(g / ${Fe(Yo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${ca(cn.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${Fe(k0.x)}, ${Fe(k0.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${Fe(k0.x)}, ${Fe(k0.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${Fe(k0.r*.7)}, ${Fe(k0.r*1.6)}, r)) * (1.0 - smoothstep(${Fe(io.top+k0.h*.8)}, ${Fe(io.top+k0.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${ca(M1.a)}, qb = ${ca(M1.b)};
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
		bool inB1 = p.z < ${Fe(Bn)} && p.z > ${Fe(bn-.04)} && p.x < ${Fe(Do+.02)};
		bool inPriest = p.z >= ${Fe(Bn)} && p.z < ${Fe(Wr)} && p.x < ${Fe(Do)};
		bool inB2 = p.z >= ${Fe(Wr)} && p.z < ${Fe(J0+.04)} && p.x < ${Fe(Do)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${Fe(a0)}, ${Fe(Do)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${Fe(nn.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${ca(ka.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${ca(wn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${ca(Un)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${ca(cn.flame)} - p;
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
	}`}var r0={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function nb(){let t=[],e=[],o=[],r=[],n=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:r,idx:n,norm:i,cross:s,sub:a};return c.v=(f,l,v,d)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(v),r.push(d?d[0]:0,d?d[1]:0),t.length/3-1),c.quad=(f,l,v,d,p,u)=>{let h=i(s(a(l,f),a(d,f)));u=u||[[0,0],[1,0],[1,1],[0,1]];let g=c.v(f,h,p,u[0]),m=c.v(l,h,p,u[1]),x=c.v(v,h,p,u[2]),y=c.v(d,h,p,u[3]);n.push(g,m,x,g,x,y)},c.box=(f,l,v,d,p,u,h)=>{let g=(m,x,y,b,M,_,k,A)=>c.quad(m,x,y,b,h,[[M,k],[_,k],[_,A],[M,A]]);g([d,l,v],[d,l,u],[d,p,u],[d,p,v],v,u,l,p),g([f,l,u],[f,l,v],[f,p,v],[f,p,u],u,v,l,p),g([f,p,v],[d,p,v],[d,p,u],[f,p,u],f,d,v,u),g([f,l,u],[d,l,u],[d,l,v],[f,l,v],f,d,u,v),g([f,l,u],[d,l,u],[d,p,u],[f,p,u],f,d,l,p),g([d,l,v],[f,l,v],[f,p,v],[d,p,v],d,f,l,p)},c.tube=(f,l,v,d)=>{d=d||6;let p=t.length/3;for(let u=0;u<f.length;u++){let h=f[Math.max(0,u-1)],g=f[Math.min(f.length-1,u+1)],m=i(a(g,h)),x=Math.abs(m[1])>.9?[1,0,0]:[0,1,0],y=i(s(m,x)),b=s(y,m),M=typeof l=="function"?l(u/(f.length-1)):l;for(let _=0;_<=d;_++){let k=_/d*As*2,A=Math.cos(k),z=Math.sin(k),D=[y[0]*A+b[0]*z,y[1]*A+b[1]*z,y[2]*A+b[2]*z];c.v([f[u][0]+D[0]*M,f[u][1]+D[1]*M,f[u][2]+D[2]*M],D,v,[u/(f.length-1),_/d])}}for(let u=0;u<f.length-1;u++)for(let h=0;h<d;h++){let g=p+u*(d+1)+h,m=g+d+1;n.push(g,g+1,m,g+1,m+1,m)}},c.lathe=(f,l,v,d,p)=>{p=p||20;let u=t.length/3;for(let h=0;h<v.length;h++){let[g,m]=v[h],x=v[Math.max(0,h-1)],y=v[Math.min(v.length-1,h+1)],b=y[0]-x[0],M=y[1]-x[1];for(let _=0;_<=p;_++){let k=_/p*As*2,A=Math.cos(k),z=Math.sin(k),D=i([M*A,-b,M*z]);c.v([f+A*g,m,l+z*g],D,d,[_/p,h/(v.length-1)])}}for(let h=0;h<v.length-1;h++)for(let g=0;g<p;g++){let m=u+h*(p+1)+g,x=m+p+1;n.push(m,x,m+1,m+1,x,x+1)}},c.spire=(f,l,v,d,p,u)=>{let h=[[-d,-d],[d,-d],[d,d],[-d,d]];for(let g=0;g<4;g++){let m=h[g],x=h[(g+1)%4],y=[f+m[0],v,l+m[1]],b=[f+x[0],v,l+x[1]],M=[f,p,l],_=i(s(a(M,y),a(b,y))),k=c.v(y,_,u,[0,0]),A=c.v(b,_,u,[1,0]),z=c.v(M,_,u,[.5,1]);n.push(k,z,A)}},c.orient=()=>{for(let f=0;f<n.length;f+=3){let[l,v,d]=[n[f],n[f+1],n[f+2]],p=g=>[t[g*3],t[g*3+1],t[g*3+2]],u=s(a(p(v),p(l)),a(p(d),p(l))),h=[0,1,2].map(g=>e[l*3+g]+e[v*3+g]+e[d*3+g]);u[0]*h[0]+u[1]*h[1]+u[2]*h[2]<0&&(n[f+1]=d,n[f+2]=v)}return c},c}function _1(t,e,o,r){if(t<=e)return o;let n=t-e;return n>=r?0:Math.max(0,Math.sqrt(r*r-n*n)-(r-o))}var xn={ys:1.78,a:.56,r:.78};xn.apex=xn.ys+Math.sqrt(xn.r*xn.r-(xn.r-xn.a)*(xn.r-xn.a));function c7(){let t=nb(),e=r0.WOOD,o=r0.CARVED,r=r0.DARKWOOD,n=.06;t.box(a0,0,bn,Do+.08,Sr,J0,r),t.box(a0,p0-.06,bn-.04,Do+.1,p0,J0+.04,e),t.box(Do,p0-.2,bn-.06,Do+.12,p0-.06,J0+.06,e),t.box(Do+.02,p0,bn-.08,Do+.14,p0+.07,J0+.08,r),t.box(a0,Sr,bn,a0+.04,p0-.06,J0,e);for(let[l,v,d]of[[bn-n,bn,-1],[J0,J0+n,1]]){t.box(a0,0,l,Do+.08,p0,v,e);let p=d<0?l-.018:v;t.box(a0+.18,.45,Math.min(p,p+.018),Do-.12,2.35,Math.max(p,p+.018),r),t.box(a0+.26,.55,Math.min(p,p+.03*d),Do-.2,2.25,Math.max(p,p+.03*d),e)}{let l=Bn-.02,v=Bn+.02,d=Yo.x-Yo.w/2,p=Yo.x+Yo.w/2,u=Yo.y-Yo.h/2,h=Yo.y+Yo.h/2;t.box(a0,Sr,l,Do,Br.y0,v,e),t.box(a0,Br.y0,l,Br.x0,Br.y1,v,e),t.box(Br.x1,Br.y0,l,Do,Br.y1,v,e),t.box(a0,Br.y1,l,Do,u,v,e),t.box(a0,u,l,d,h,v,e),t.box(p,u,l,Do,h,v,e),t.box(a0,h,l,Do,p0-.06,v,e);let g=.05,m=l-.025;t.box(d-g,u-g,m,p+g,u,l,r),t.box(d-g,h,m,p+g,h+g,l,r),t.box(d-g,u,m,d,h,l,r),t.box(p,u,m,p+g,h,l,r),t.box(d-g-.02,h+g,m-.015,p+g+.02,h+g+.03,l,e),t.box(Br.x0-.01,Br.y1,l-.006,Br.x1+.01,Br.y1+.008,l,r0.BRASS)}{let l=F0,v=Do+.008,d=Do+.052;t.box(v,l.y0,l.z0-.035,d,l.y1,l.z0,r),t.box(v,l.y0,l.z0,d,l.y0+.04,l.z1,r),t.box(v,l.y1-.04,l.z0,d,l.y1,l.z1,r),t.box(v+.008,Sr,l.z0-.035,d-.008,l.y0,l.z1,e),t.box(d-.008,Sr+.12,l.z0+.03,d,l.y0-.08,l.z1-.06,r),t.box(v-.004,l.y0-.012,l.z0-.045,d+.012,l.y0,l.z1,r0.BRASS)}t.box(a0,Sr,Wr-.02,Do,p0-.06,Wr+.02,e),t.box(io.x0,io.top-.035,io.z0,io.x1,io.top,io.z1,e),t.tube([[io.x0,io.top-.018,io.z0],[io.x1,io.top-.018,io.z0]],.02,e,8);for(let l of[io.x0+.1,io.x1-.1]){let v=[];for(let d=0;d<=8;d++){let p=d/8;v.push([l,io.top-.04-.22*p,io.z1-.02-.22*Math.cos(p*As/2)])}t.tube(v,.018,r,6)}t.box(a0+.06,.12,bn,Do-.1,.44,bn+.42,r),t.box(a0+.08,.44,bn+.01,Do-.12,.52,bn+.41,r0.CUSHION),t.box(a0+.06,.12,J0-.42,Do-.1,.44,J0,r),t.box(Un[0]-.05,Un[1]-.16,bn,Un[0]+.05,Un[1]-.02,bn+.012,r0.BRASS),t.tube([[Un[0],Un[1]-.09,bn+.012],[Un[0],Un[1]-.09,Un[2]-.01],[Un[0],Un[1]-.05,Un[2]]],.006,r0.BRASS,6),t.lathe(Un[0],Un[2],[[0,Un[1]-.05],[.028,Un[1]-.035],[.034,Un[1]+.01],[.024,Un[1]+.06],[.026,Un[1]+.065]],r0.LAMPGLASS,16),t.box(jr.x-.22,.12,jr.z-.24,jr.x+.22,jr.y-.05,jr.z+.16,r),t.box(jr.x-.24,jr.y-.05,jr.z-.26,jr.x+.24,jr.y,jr.z+.18,r0.CUSHION),t.tube([[wn[0],p0-.06,wn[2]],[wn[0],wn[1]+.07,wn[2]]],.005,r0.BRASS,5),t.lathe(wn[0],wn[2],[[0,wn[1]+.09],[.03,wn[1]+.08],[.02,wn[1]+.06]],r0.BRASS,12),t.lathe(wn[0],wn[2],[[0,wn[1]-.06],[.035,wn[1]-.04],[.045,wn[1]],[.035,wn[1]+.05],[.018,wn[1]+.07]],r0.LAMPGLASS,16);let a=Do,s=Do+n;function i(l,v,d){let p=(l+v)/2,u=40,h=[];for(let m=0;m<=u;m++)h.push(Sr+(p0-.2-Sr)*m/u);let g=[];h.forEach(m=>g.push(m));for(let m=1;m<24;m++)g.push(xn.ys+(xn.apex-xn.ys)*m/24);g.sort((m,x)=>m-x);for(let m=0;m<g.length-1;m++){let x=g[m],y=g[m+1];if(y-x<1e-4)continue;let b=d?_1(x,xn.ys,xn.a,xn.r):0,M=d?_1(y,xn.ys,xn.a,xn.r):0,_=(k,A)=>[k,A];t.quad([s,x,p-b],[s,x,l],[s,y,l],[s,y,p-M],e,[_(p-b,x),_(l,x),_(l,y),_(p-M,y)]),t.quad([s,x,v],[s,x,p+b],[s,y,p+M],[s,y,v],e,[_(v,x),_(p+b,x),_(p+M,y),_(v,y)]),(b>0||M>0)&&(t.quad([a,x,p-b],[s,x,p-b],[s,y,p-M],[a,y,p-M],r),t.quad([s,x,p+b],[a,x,p+b],[a,y,p+M],[s,y,p+M],r),t.quad([a,x,l],[a,x,p-b],[a,y,p-M],[a,y,l],e),t.quad([a,x,p+b],[a,x,v],[a,y,v],[a,y,p+M],e))}if(t.box(a,p0-.2,l,s,p0-.06,v,e),t.box(s,p0-.42,l+.05,s+.012,p0-.24,v-.05,o),d){let m=[];for(let x=0;x<=30;x++){let y=x/30,b=y<.5?Sr+(xn.apex-Sr)*(y*2):xn.apex-(xn.apex-Sr)*((y-.5)*2),M=y<.5?-1:1;m.push([s+.01,Math.min(b,xn.apex-.002),p+M*(_1(b,xn.ys,xn.a,xn.r)+.03)])}t.tube(m,.022,r,6)}}i(bn,Bn,!0),i(Wr,J0,!0);{let l=Bn,v=Wr,d=(l+v)/2;t.box(a,Sr,l,s,p0-.06,v,e);let p={ys:1.85,a:.55,r:.8},u=[];for(let h=0;h<=40;h++){let g=h/40,m=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),x=g<.5?.35+(m-.35)*(g*2):m-(m-.35)*((g-.5)*2),y=g<.5?-1:1;u.push([s+.012,Math.min(x,m-.002),d+y*_1(x,p.ys,p.a,p.r)])}u.push(u[0]),t.tube(u,.02,r,6),t.box(s,.95,d-.22,s+.015,1.3,d+.22,o),t.box(s,.35,d-.42,s+.01,.75,d+.42,r),t.tube([[s+.03,1.12,v-.13],[s+.06,1.12,v-.13],[s+.06,1.12,v-.2]],.009,r0.BRASS,6)}[bn-.02,Bn,Wr,J0+.02].forEach((l,v)=>{let d=v===1||v===2,p=.075,u=p0+(d?.62:.4);t.box(Do+.06,0,l-p,Do+.06+2*p,u,l+p,e),t.box(Do+.04,u-.04,l-p-.02,Do+.08+2*p,u,l+p+.02,r);let h=Do+.06+p,g=d?.62:.5;t.spire(h,l,u,p*.95,u+g,e);for(let m=1;m<=3;m++){let x=u+g*m/4.2,y=p*.95*(1-m/4.2)+.02;for(let[b,M]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[h+b*(y-.02),x-.02,l+M*(y-.02)],[h+b*(y+.015),x+.03,l+M*(y+.015)]],.008,r,4)}t.lathe(h,l,[[0,u+g-.02],[.03,u+g+.03],[.022,u+g+.07],[0,u+g+.1]],e,10)});let f=(l,v,d)=>{let p=(l+v)/2,u=Do+.075,h=p0+.07,g=h+d,m=[1,0,0],x=t.v([u,h,l],m,o,[l,h]),y=t.v([u,h,v],m,o,[v,h]),b=t.v([u,g,p],m,o,[p,g]);t.idx.push(x,y,b);let M=t.v([u-.04,h,l],[-1,0,0],e),_=t.v([u-.04,h,v],[-1,0,0],e),k=t.v([u-.04,g,p],[-1,0,0],e);t.idx.push(M,k,_);let A=[],z=[];for(let I=0;I<=10;I++){let H=I/10;A.push([u+.02,h+d*H,l+(p-l)*H]),z.push([u+.02,h+d*H,v+(p-v)*H])}t.tube(A,.022,r,6),t.tube(z,.022,r,6);for(let I=2;I<=8;I+=2)for(let H of[A[I],z[I]])t.tube([H,[H[0]+.01,H[1]+.06,H[2]+(H===A[I]?-.02:.02)]],.01,r,4);t.lathe(u,p,[[0,g],[.035,g+.06],[.022,g+.12],[0,g+.16]].map(([I,H])=>[I,H]),e,10);let D=Math.min(.17,d*.32),P=h+d*.38,G=[];for(let I=0;I<=24;I++){let H=I/24*As*2;G.push([u+.012,P+Math.sin(H)*D,p+Math.cos(H)*D])}t.tube(G,.012,r,5)};f(bn-.02,Bn,.52),f(Bn,Wr,.82),f(Wr,J0+.02,.52),t.lathe(k0.x,k0.z,[[0,io.top],[.036,io.top+.001],[k0.r,io.top+.012],[k0.r*1.02,io.top+.035],[.036,io.top+.052],[.02,io.top+.062],[.016,io.top+.068]],r0.INKGLASS,24),t.lathe(k0.x,k0.z,[[.016,io.top+.064],[.021,io.top+.066],[.022,io.top+.075],[.016,io.top+.076],[0,io.top+.072]],r0.BRASS,20);{let l=M1.a,v=M1.b,d=26,p=x=>{let y=Math.sin(x*As)*.025;return[l[0]+(v[0]-l[0])*x+y*.6,l[1]+(v[1]-l[1])*x+y*.4,l[2]+(v[2]-l[2])*x+y]},u=[];for(let x=0;x<=d;x++)u.push(p(x/d));t.tube(u,x=>.0028*(1-.7*x)+6e-4,r0.QUILL,5);let h=t.norm(t.sub(v,l)),g=t.norm(t.cross(h,[.2,1,.1])),m=t.cross(g,h);for(let x of[-1,1]){let y=t.pos.length/3;for(let b=0;b<=d;b++){let M=b/d,_=p(M),k=M<.28?0:(x>0?.03:.02)*Math.sin(As*Math.pow((M-.28)/.72,.75)),A=k*.25,z=[_[0]+g[0]*x*k-m[0]*A,_[1]+g[1]*x*k-m[1]*A,_[2]+g[2]*x*k-m[2]*A];t.v(_,m,r0.QUILL,[M,0]),t.v(z,m,r0.QUILL,[M,x])}for(let b=0;b<d;b++){let M=y+b*2;t.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return t.orient()}function l7(t,e){let r=nn.top,n=nn.x0;t(n-.35,0,nn.z0-.35,n,r+.35,nn.z1+.35),t(n,0,nn.z0-.35,-.35,r,nn.z0),t(n,0,nn.z1,-.35,r,nn.z1+.35),t(n,r,nn.z0,-.35,r+.35,nn.z1),t(.35,0,nn.z0-.42,.35+.16,r,nn.z0),t(.35,0,nn.z1,.35+.16,r,nn.z1+.42),t(.35,r,nn.z0-.5,.35+.18,r+.42,nn.z1+.5),t(.35,r+.42,nn.z0-.6,.35+.26,r+.52,nn.z1+.6),t(.35,0,nn.z0-.5,.35+.22,.42,nn.z0),t(.35,0,nn.z1,.35+.22,.42,nn.z1+.5),t(-.35-.01,0,nn.z0,.35+.12,.02,nn.z1),e(n,nn.z0,-.35,nn.z1)}zr.exports=t=>{let e=is(),o=Jy.GLSL,r=c7(),n=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${ka.roomGLSL()}
	${tb()}
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
	}`,s=t({vert:a,frag:`${n}
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
		}`,attributes:{position:r.pos,normal:r.nrm,kind:r.kind,uv:r.uv},elements:r.idx});function i(_t,xt,ut,Yt){let Se=[],Oe=[],oo=[],me=[],Ke=[],V=Do-.02,mt=xn.apex+.08,Lt=Sr+.015;for(let fe=0;fe<=40;fe++){let _e=fe/40,ae=mt+(Lt-mt)*_e;for(let qt=0;qt<=90;qt++){let at=qt/90,Wt=ut?.2+.13*_e*_e:xt-_t,Ne=_t+at*Wt,oe=ut?.05+.02*_e:.035+.01*Math.sin(at*7),It=at*Yt*As*2+Math.sin(_e*2+at*5)*.6,$e=V-oe*(.5+.5*Math.sin(It))-(ut?.02*_e:0),De=[1,0,-(-oe*.5*Math.cos(It)*Yt*As*2/Wt)],Be=Math.hypot(De[0],De[1],De[2]);Se.push($e,ae,Ne),Oe.push(De[0]/Be,0,De[2]/Be),oo.push(2),me.push(Math.sin(It),_e)}}for(let fe=0;fe<40;fe++)for(let _e=0;_e<90;_e++){let ae=fe*91+_e,qt=ae+90+1;Ke.push(ae,qt,ae+1,ae+1,qt,qt+1)}for(let fe=0;fe<Ke.length;fe+=3){let[_e,ae,qt]=[Ke[fe],Ke[fe+1],Ke[fe+2]],at=It=>[Se[It*3],Se[It*3+1],Se[It*3+2]],Wt=[0,1,2].map(It=>at(ae)[It]-at(_e)[It]),Ne=[0,1,2].map(It=>at(qt)[It]-at(_e)[It]);Wt[1]*Ne[2]-Wt[2]*Ne[1]<0&&(Ke[fe+1]=qt,Ke[fe+2]=ae)}return{pos:Se,nrm:Oe,kind:oo,uv:me,idx:Ke}}let c=i(bn+.02,bn+.4,!0,6),f=i(Wr+.04,J0-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(_t=>_t+c.pos.length/3))},v=t({vert:`
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
		}`,frag:`${n}
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),d=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${Fe(Yo.x)} + corner.x * ${Fe(Yo.w/2)}, ${Fe(Yo.y)} + corner.y * ${Fe(Yo.h/2)}, ${Fe(Yo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${Fe(Yo.x)}, ${Fe(Yo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${Fe(Yo.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),p=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${Fe(F0.x)}, ${Fe((F0.y0+F0.y1)/2)} + corner.y * ${Fe((F0.y1-F0.y0)/2-.04)}, ${Fe((F0.z0+F0.z1)/2)} + corner.x * ${Fe((F0.z1-F0.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${Fe((F0.z0+F0.z1)/2)}, ${Fe((F0.y0+F0.y1)/2)})) * ${Fe(Yo.cell/F0.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${Fe(F0.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${Fe(Yo.x)} + corner.x * 0.75, ${Fe(Yo.y)} + corner.y * 0.9, ${Fe(Wr-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=14,g=[];for(let _t=0;_t<h;_t++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(xt=>g.push(xt[0],xt[1],(_t+.5)/h));let m=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${Fe(i7)} + c.x * ${Fe((Do-a0)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${Fe(Bn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${tb().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${ca(wn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(g),size:3}},count:g.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let _t=document.createElement("canvas");_t.width=512,_t.height=652;let xt=_t.getContext("2d");xt.fillStyle="#cdb38a",xt.fillRect(0,0,_t.width,_t.height);let ut=7,Yt=()=>(ut=ut*1664525+1013904223>>>0,ut/4294967296);for(let Oe=0;Oe<2400;Oe++){xt.fillStyle=`rgba(${Yt()<.5?"90,62,30":"245,230,200"},${.03+Yt()*.05})`;let oo=Yt()*_t.width,me=Yt()*_t.height;xt.fillRect(oo,me,1+Yt()*14,1)}for(let Oe=0;Oe<26;Oe++){let oo=Yt()*_t.width,me=Yt()*_t.height,Ke=20+Yt()*90,Ye=xt.createRadialGradient(oo,me,0,oo,me,Ke);Ye.addColorStop(0,`rgba(120,80,35,${.04+Yt()*.06})`),Ye.addColorStop(1,"rgba(120,80,35,0)"),xt.fillStyle=Ye,xt.fillRect(oo-Ke,me-Ke,Ke*2,Ke*2)}let Se=xt.createRadialGradient(_t.width/2,_t.height/2,_t.width*.3,_t.width/2,_t.height/2,_t.height*.72);return Se.addColorStop(0,"rgba(110,70,30,0)"),Se.addColorStop(1,"rgba(110,70,30,0.38)"),xt.fillStyle=Se,xt.fillRect(0,0,_t.width,_t.height),_t})(),y=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),b=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],_=[],k=[];for(let _t=0;_t<=M[1];_t++)for(let xt=0;xt<=M[0];xt++)_.push(xt/M[0],_t/M[1]);for(let _t=0;_t<M[1];_t++)for(let xt=0;xt<M[0];xt++){let ut=_t*(M[0]+1)+xt,Yt=ut+M[0]+1;k.push(ut,ut+1,Yt,ut+1,Yt+1,Yt)}let A=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${Fe(Er.cx+Er.w/2)} - s * ${Fe(Er.w)};
			float zNear = ${Fe(Er.cz-Er.d/2)};
			vec3 p = vec3(x, ${Fe(Er.y)}, zNear + t * ${Fe(Er.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${Fe(Er.d)};
				float zf = zNear + 0.5 * ${Fe(Er.d)};
				p.z = zf - dd * cos(a);
				p.y = ${Fe(Er.y)} + dd * sin(a) + 0.0016 * fold;
				n = vec3(0.0, cos(a), sin(a));
			}
			// then the whole of it slides through the slit
			p.z += slide * 0.40;
			p.y += 0.004 * fold;
			v_pos = p; v_n = n; v_st = st; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		uniform sampler2D paperTex, inkTex;
		uniform float fold;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// beyond the slit it is inside the wall
			if (v_pos.z > ${Fe(Bn+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(_),size:2}},elements:k,uniforms:{fold:()=>zs.fold,slide:()=>zs.slide,paperTex:y,inkTex:b},cull:{enable:!1}}),z=nb();z.lathe(cn.x,cn.z,[[0,io.top],[.048,io.top+.002],[.052,io.top+.012],[.046,io.top+.014],[.022,io.top+.012],[0,io.top+.012]],r0.BRASS,24),z.lathe(cn.x,cn.z,[[0,io.top+.012],[cn.r,io.top+.012],[cn.r*1.02,io.top+.012+cn.h*.6],[cn.r,io.top+.012+cn.h],[cn.r*.75,io.top+.012+cn.h-.004],[0,io.top+.012+cn.h-.008]],9,20),z.tube([[cn.x,io.top+.012+cn.h-.008,cn.z],[cn.x+.001,io.top+.012+cn.h+.012,cn.z]],.0012,8,4),z.orient();let D=t({vert:a,frag:`${n}
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
				float up = smoothstep(${Fe(io.top+cn.h*.4)}, ${Fe(io.top+.012+cn.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:z.pos,normal:z.nrm,kind:z.kind,uv:z.uv},elements:z.idx}),P=t({vert:`
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
			vec3 p = ${ca(cn.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),G=[0,0],I=t({uniforms:{view:t.prop("view")}}),H=new Float32Array(16);function ft(_t){s7.translate(H,_t.view,ka.OFF),I({view:H},()=>Nt(_t))}function Nt(_t){let xt=_t&&_t.reflected;if(s(),v(),d(),p(),zs.ink&&zs.inkDirty){let ut=zs.ink;G[0]!==ut.width||G[1]!==ut.height?(b({data:ut,min:"linear",mag:"linear",flipY:!1}),G=[ut.width,ut.height]):b.subimage(ut),zs.inkDirty=!1}zs.shown&&A(),Jy.night>.01&&(D(),xt||(P({halo:1}),P({halo:0}))),xt||(u(),m())}return ft};zr.exports.addBay=l7;zr.exports.BAY=nn;zr.exports.OFF=ka.OFF;zr.exports.STATE=zs;var eb=t=>[t[0]+ka.OFF[0],t[1]+ka.OFF[1],t[2]+ka.OFF[2]];zr.exports.SHOTS=Object.fromEntries(Object.entries(ob).map(([t,e])=>[t,Object.assign({},e,{eye:eb(e.eye),target:eb(e.target)})]));zr.exports.SEAT=jr;zr.exports.LAMP=wn;zr.exports.SCONCE=Un;zr.exports.GRILLE=Yo;zr.exports.PAPER=Er;zr.exports.ZONE={FRONT:Do,BACK:a0,ZA:bn,ZB:Bn,ZC:Wr,ZD:J0}});var xp=St((zT,ab)=>{"use strict";function f7(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var rb={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},h7=["th","ng","er"];function u7(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let r=t.getContext("2d"),n={};Object.keys(rb).forEach(h=>{n[h]=rb[h]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(h,g){let m=f7(o.seed),x=o.xh,y={},b=H=>{let ft=e[H];if(!ft)return null;let Nt=Math.floor(m()*ft.length);return ft.length>1&&Nt===y[H]&&(Nt=(Nt+1)%ft.length),y[H]=Nt,ft[Nt]},M=H=>{if(e[H])return{g:b(H),sc:1};let ft=H.toLowerCase();return e[ft]?{g:b(ft),sc:/[A-Z]/.test(H)?1.32:1}:null},_=[],k=.15,A=0,z=0,D=(m()-.5)*.02,P=g/x,G=h.split(/\n\s*\n/);G.forEach((H,ft)=>{H.replace(/\s+/g," ").trim().split(" ").forEach(_t=>{let xt=[];for(let Oe=0;Oe<_t.length;Oe++){let oo=_t.substr(Oe,2).toLowerCase();if(h7.indexOf(oo)>=0&&e[oo]&&m()<.55&&_t[Oe]===_t[Oe].toLowerCase()){xt.push({ch:oo,gl:{g:b(oo),sc:1}}),Oe++;continue}let me=M(_t[Oe]);me&&me.g&&xt.push({ch:_t[Oe],gl:me})}let ut=xt.map(()=>.17+m()*.07),Yt=xt.reduce((Oe,oo,me)=>Oe+oo.gl.g.w*oo.gl.sc+ut[me],0);A>0&&A+Yt>P&&(A=0,z++,k+=n.line,D=(m()-.5)*.02),xt.forEach((Oe,oo)=>{let me=Oe.gl.g,Ke=Oe.gl.sc*(.95+m()*.1),Ye=(m()-.5)*.06,nt=(m()-.5)*.08+D*A,V=A,mt=z*o.lineHeight+1.9+nt,Lt=Math.cos(Ye),fe=Math.sin(Ye),_e=qt=>[(V+(qt[0]*Lt-qt[1]*fe)*Ke)*x,(mt+(qt[0]*fe+qt[1]*Lt)*Ke)*x],ae=(qt,at)=>{let Wt=0;for(let oe=1;oe<qt.length;oe++)Wt+=Math.hypot(qt[oe][0]-qt[oe-1][0],qt[oe][1]-qt[oe-1][1]);let Ne=Math.max(o.minDur||(at?.06:.07),Wt/(o.speed*x));_.push({pts:qt,L:Wt,start:k,dur:Ne,dot:at}),k+=Ne};if(me.s.forEach((qt,at)=>{at>0&&(k+=n.stroke),ae(qt.map(_e),!1)}),me.dot){let qt=me.s[0][0];me.s.forEach(Wt=>Wt.forEach(Ne=>{Ne[1]<qt[1]&&(qt=Ne)}));let at=_e([qt[0]+.1,-1.36]);k+=n.stroke*1.4,ae([at,[at[0]+x*.05,at[1]+x*.03]],!0)}k+=n.letter*(.6+m()*.8),A+=me.w*Ke+ut[oo]});let Se=_t[_t.length-1];k+=/[.!?]/.test(Se)?n.stop:/[,;:]/.test(Se)?n.comma:n.word,A+=.55+m()*.2}),ft<G.length-1&&(A=0,z+=1.6,k+=n.para)});let I=(z+1)*o.lineHeight*x+x*1.55;return{strokes:_,total:k,height:I}}function v(h,g){if(o.fixed){let m=o.fixed;r.setTransform(1,0,0,1,m.mx,m.my),r.clearRect(-m.mx,-m.my,t.width,t.height)}else{let m=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(h*m),t.height=Math.round(g*m),t.style.height=g+"px",t.style.width=h+"px",r.setTransform(m,0,0,m,0,0),r.clearRect(0,0,h,g)}r.strokeStyle=o.ink,r.fillStyle=o.ink,r.lineCap="round",r.lineJoin="round",o.shadow&&(r.shadowColor=o.shadow,r.shadowBlur=o.shadowBlur||6)}let d=h=>h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;function p(h,g){let m=f[h.i]||0;if(g<=m)return;let x=o.width*o.xh,y=0;for(let b=1;b<h.pts.length;b++){let M=h.pts[b-1],_=h.pts[b],k=Math.hypot(_[0]-M[0],_[1]-M[1]),A=y,z=y+k;if(y=z,z<=m||k===0)continue;if(A>=g)break;let D=Math.max(0,(m-A)/k),P=Math.min(1,(g-A)/k),G=[M[0]+(_[0]-M[0])*D,M[1]+(_[1]-M[1])*D],I=[M[0]+(_[0]-M[0])*P,M[1]+(_[1]-M[1])*P],H=(A+z)/2/(h.L||1),ft=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,H)));r.lineWidth=x*ft,r.globalAlpha=.86+.14*ft,r.beginPath(),r.moveTo(G[0],G[1]),r.lineTo(I[0],I[1]),r.stroke()}h.dot&&m===0&&(r.globalAlpha=1,r.beginPath(),r.arc(h.pts[0][0],h.pts[0][1],x*.75,0,Math.PI*2),r.fill()),f[h.i]=g}function u(h){let g=(h-c)/1e3;for(let m=0;m<a.length;m++){let x=a[m];if(x.start>g)break;let y=Math.min(1,(g-x.start)/x.dur);p(x,d(y)*x.L)}if(o.onPen){let m=0;for(;m+1<a.length&&a[m+1].start<=g;)m++;a[m]&&o.onPen(a[m].pts[0][1])}g<s?i=requestAnimationFrame(u):o.onDone&&o.onDone()}return{write(h,g){cancelAnimationFrame(i);let m=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=l(h,m);a=x.strokes,s=x.total;let y=typeof o.maxTime=="function"?o.maxTime(h):o.maxTime;if(y&&s>y){let M=y/s;a.forEach(_=>{_.start*=M,_.dur*=M}),s=y}a.forEach((M,_)=>{M.i=_}),f=[],v(m,x.height);let b=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(g||b){a.forEach(M=>p(M,M.L));return}return c=performance.now(),i=requestAnimationFrame(u),s},finish(){cancelAnimationFrame(i),a.forEach(h=>p(h,h.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}ab.exports=u7});var bp=St((AT,sb)=>{"use strict";var yp=Zn(),d7='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',p7='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';sb.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let r=()=>{let n=yp.isNight;o.innerHTML=n?d7:p7,o.setAttribute("aria-label",n?"Switch to day":"Switch to night"),o.title=n?"Day":"Night",o.setAttribute("aria-pressed",n?"true":"false")};return r(),yp.onChange(r),["mousedown","pointerdown"].forEach(n=>o.addEventListener(n,a=>a.stopPropagation())),o.addEventListener("click",n=>{n.stopPropagation(),yp.toggle()}),o}});var fb=St((TT,lb)=>{"use strict";var jn=k1(),v7=fs(),m7=xp(),g7="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",ib=100,Va=t=>Math.max(0,Math.min(1,t)),ur=(t,e,o)=>{let r=Va((o-t)/(e-t));return r*r*(3-2*r)},la=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Vr=(t,e,o)=>t+(e-t)*o,wf=(t,e,o)=>[Vr(t[0],e[0],o),Vr(t[1],e[1],o),Vr(t[2],e[2],o)];function Si(t,e){let o=t.length-1,r=Va(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var S1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function wp(t,e,o){return{eye:wf(t.eye,e.eye,o),target:wf(t.target,e.target,o),fov:Vr(t.fov,e.fov,o),roll:Vr(t.roll||0,e.roll||0,o)}}var _f=v7.PLAY,fa=[_f.stoolX,1,_f.keyFront+.25],E1=[_f.stoolX,_f.keyTop+.03,_f.keyFront-.05],Mp=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[fa[0]+Math.cos(e)*o,1.15+.4*t,fa[2]+Math.sin(e)*o]},Uc=[{eye:Mp(1),target:[fa[0],.92,fa[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:E1},{eye:[fa[0]+1,1.14,fa[2]+1.72],target:[E1[0]+.05,.8,E1[2]+.05],fov:40,aperture:1,to:E1}],cb=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),z1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:cb(t.eye,t.to||fa),aperture:t.aperture,vignette:.42,shafts:0}),_p={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Bc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},bf={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},x7=`
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
`;lb.exports=function(e){let{root:o,avatar:r}=e,n=document.createElement("style");n.textContent=x7,document.head.appendChild(n);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),v=a.querySelector(".conf-final"),d=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,p=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let at=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(ib-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>ib&&at&&(i.value=at[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(at=>i.addEventListener(at,Wt=>Wt.stopPropagation())),a.addEventListener("pointerdown",at=>at.stopPropagation()),a.addEventListener("click",at=>{let Wt=at.target.closest("button");Wt&&(at.stopPropagation(),Wt.dataset.act==="send"&&ft(),Wt.dataset.act==="leave"&&xt())});let u=!1,h="",g=0,m=null,x=null,y="",b=null,M=0,_="",k=document.createElement("canvas");k.width=512,k.height=652;function A(at){at!==_&&(_=at,s.classList.toggle("on",at==="write"),f.classList.toggle("on",at==="hint"),l.classList.toggle("on",u&&at==="hint"&&(h==="room"||h==="peek")),v.classList.toggle("on",at==="final"),at==="write"&&setTimeout(()=>{if(h==="write")try{i.focus({preventScroll:!0})}catch(Wt){}},900))}function z(at){h=at,g=0}function D(at,Wt){if(u)return;u=!0,m={eye:at.eye.slice(),target:at.target.slice(),fov:at.fov,roll:at.roll||0},x=Object.assign({},Wt),y="",i.value="",c.disabled=!0,jn.STATE.fold=0,jn.STATE.slide=0,jn.STATE.shown=!0,jn.STATE.active=!0;let Ne=k.getContext("2d");Ne.setTransform(1,0,0,1,0,0),Ne.clearRect(0,0,k.width,k.height),jn.STATE.ink=k,jn.STATE.inkDirty=!0,document.body.classList.add("confessing");let oe=Uc[0],It=p?.3:5.5,$e=p?.3:3.6;P.i=0,P.u=0,P.T=It+$e,P.moving=!0,P.rest=0,P.raw=!0,P.lookFrom=x,P.lookTo=z1(oe);let S=[m.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Mp(0)],De=[m.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[fa[0],1,fa[2]-.1],oe.target];P.path=Be=>{let co=Be*(It+$e);if(co<It){let No=co/It,zo=1-Math.cos(No*Math.PI/2);return{eye:Si(S,zo),target:Si(De,ur(0,1,zo*1.05)),fov:Vr(m.fov,52,ur(.4,1,zo)),roll:(m.roll||0)*(1-zo)}}let mo=(co-It)/$e,go=1-Math.pow(1-mo,2.4);return{eye:Mp(go),target:oe.target,fov:Vr(52,oe.fov,go),roll:.05*Math.sin(Math.PI*go)}},z("room"),A("")}let P={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},G=()=>d?"Scroll on":"Swipe up";function I(at){let Wt=Se,Ne=Uc[at],oe={eye:Wt.eye.slice(),target:Wt.target.slice(),fov:Wt.fov,roll:Wt.roll||0},It=wf(oe.eye,Ne.eye,.5),$e=[It[0]-fa[0],0,It[2]-fa[2]],S=Math.hypot($e[0],$e[2])||1,De=[It[0]+$e[0]/S*.6,It[1]+.3,It[2]+$e[2]/S*.6];P.path=Be=>{let co=1-Be;return{eye:[0,1,2].map(mo=>co*co*oe.eye[mo]+2*co*Be*De[mo]+Be*Be*Ne.eye[mo]),target:wf(oe.target,Ne.target,ur(0,1,Be)),fov:Vr(oe.fov,Ne.fov,Be),roll:oe.roll*co}},P.lookFrom=H||z1(Uc[P.i]),P.lookTo=z1(Ne),P.i=at,P.u=0,P.moving=!0,P.rest=0,P.raw=!1,P.T=p?.4:Math.max(2.8,Math.min(4.4,cb(oe.eye,Ne.eye)*1+1.6)),A("")}let H=null;function ft(){if(h!=="write"||(y=i.value.trim(),!y))return;i.blur(),A("");let at=Math.max(10,Math.min(22,24-y.length/28));b=m7(k,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:at,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:Wt=>2.4+Wt.length/160,fixed:{mx:46,my:40},onPen:()=>{jn.STATE.inkDirty=!0},onDone:()=>{jn.STATE.inkDirty=!0}}),z("down")}function Nt(){try{let at={access_key:g7,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(at),keepalive:!0}).catch(()=>{})}catch(at){}}function _t(){h==="ready"&&(Nt(),z("fold"),A(""))}function xt(){!u||h==="leave"||(A(""),i.blur(),ut=Se,Yt=H,z("leave"))}let ut=null,Yt=null,Se=null,Oe=jn.SHOTS.window,oo=jn.OFF,me=at=>[at[0]+oo[0],at[1],at[2]],Ke=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],me([1.25,1.5,43.25]),me([-.55,1.36,42.92])],Ye=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],me([-1,1.55,43.6]),me([-1.4,1.35,43.1]),me([-1.5,1.33,43.3])];function nt(at){let Wt=la(Va(at)),Ne=[m.eye,...Ke,Oe.eye],oe=[m.target,...Ye,Oe.target];return{eye:Si(Ne,Wt),target:Si(oe,ur(0,1,Wt*1.03)),fov:Vr(m.fov,Oe.fov,ur(.6,.97,Wt)),roll:(m.roll||0)*(1-Wt)}}function V(at,Wt){if(p)return at;let Ne=performance.now()/1e3,oe=.004*Wt,It=Math.sin(Ne*.61)*.6+Math.sin(Ne*1.37+1.3)*.4,$e=Math.sin(Ne*.47+2.1)*.6+Math.sin(Ne*1.13+.4)*.4;return{eye:[at.eye[0]+It*oe,at.eye[1]+$e*oe*.7,at.eye[2]],target:[at.target[0]+$e*oe*1.5,at.target[1]+It*oe,at.target[2]],fov:at.fov,roll:at.roll}}function mt(at,Wt,Ne){let oe={};for(let It in Wt)oe[It]=typeof Wt[It]=="number"&&typeof at[It]=="number"?Vr(at[It],Wt[It],Ne):Wt[It];return oe}function Lt(at){at*=window.__confSpeed||1,g+=at;let Wt=S1(Oe),Ne=S1(jn.SHOTS.paper),oe,It,$e=S1(jn.SHOTS.peek);if(h==="room")P.moving?(P.u=Math.min(1,P.u+at/P.T),oe=P.path(P.raw?P.u:la(P.u)),It=mt(P.lookFrom,P.lookTo,ur(.1,.9,P.u)),P.raw&&(It.fade=(x.fade||0)*(1-ur(0,.12,P.u))),P.u>=1&&(P.moving=!1,P.rest=0,f.textContent=G(),A("hint"))):(P.rest+=at,oe=V(S1(Uc[P.i]),2.5),It=z1(Uc[P.i]));else if(h==="enter"){let De=Va(g/(p?.6:9)),Be=la(De),co=[fe.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],me([.75,1.5,42.95]),me([-.25,1.42,42.82]),me([-.9,1.42,42.82]),$e.eye];oe={eye:Si(co,Be),target:wf(fe.target,$e.target,ur(0,.35,Be)),fov:Vr(fe.fov,$e.fov,ur(.3,1,Be)),roll:0},It=mt(_e,_p,ur(.2,.9,De)),De>=1&&z("peek")}else if(h==="peek")oe=V($e,1.5),It=_p,g>(p?.5:3.2)&&z("turn");else if(h==="turn"){let S=Va(g/(p?.4:3.2));oe=wp($e,Wt,la(S)),It=mt(_p,Bc,la(S)),S>=1&&(z("write"),A("write"))}else if(h==="write")oe=V(Wt,1),It=Bc;else if(h==="down"){let S=Va(g/(p?.4:2));oe=wp(Wt,Ne,la(S)),It=mt(Bc,bf,la(S)),S>=1&&(M=b.write(y,p)||0,jn.STATE.inkDirty=!0,z("writing"))}else if(h==="writing")oe=V(Ne,.6),It=bf,g>M+.8&&(z("ready"),f.textContent=d?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",A("hint"));else if(h==="ready")oe=V(Ne,.6),It=bf;else if(h==="fold"){let S=Va(g/(p?.3:1.5));jn.STATE.fold=la(S),oe=V(Ne,.6),It=bf,S>=1&&z("slide")}else if(h==="slide"){let De=Va(g/(p?.6:3.4));jn.STATE.slide=la(ur(0,.7,De));let Be=la(ur(.35,1,De));oe=wp(Ne,Wt,Be),It=mt(bf,Bc,Be),De>=1&&(jn.STATE.shown=!1,z("final"),A("final"))}else if(h==="final")oe=V(Wt,1),It=Bc;else if(h==="leave"){let S=p?.6:ut.eye[0]<oo[0]-.3?12:7,De=Va(g/S),Be={eye:m.eye,target:m.target,fov:m.fov,roll:m.roll},co=la(De),mo=ut.eye[0]<oo[0]-.3,go=mo?[ut.eye,me([-.55,1.4,42.8]),me([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Be.eye]:[ut.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Be.eye],No=mo?[ut.target,me([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Be.target]:[ut.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Be.target];if(oe={eye:Si(go,co),target:Si(No,co),fov:Vr(ut.fov,Be.fov,co),roll:Be.roll*co},It=mt(Yt||Bc,x,ur(.1,.7,De)),It.fade=(x.fade||0)*ur(.82,1,De),De>=1){u=!1,jn.STATE.active=!1,jn.STATE.shown=!0,jn.STATE.fold=0,jn.STATE.slide=0;let zo=k.getContext("2d");zo.setTransform(1,0,0,1,0,0),zo.clearRect(0,0,k.width,k.height),jn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return Se=oe,H=It,{camera:oe,look:It}}let fe=null,_e=null;function ae(){if(h==="room"){if(P.moving||P.rest<.4)return;P.i<Uc.length-1?I(P.i+1):(fe=Se,_e=H,A(""),z("enter"));return}if(h==="peek"){g>.4&&z("turn");return}h==="ready"?_t():h==="writing"&&b&&(b.finish(),g=Math.max(g,M))}function qt(){h==="room"&&!P.moving&&P.rest>.4&&P.i>0&&I(P.i-1)}return{start:D,update:Lt,leave:xt,get active(){return u},get stage(){return h},wheel(at){at>8?ae():at<-8&&qt()},swipe(at){at>0?ae():at<0&&qt()},tap(){ae()},key(at){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(at)>=0?(ae(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(at)>=0?(qt(),!0):at==="Escape"?(xt(),!0):!1},_setNote(at){i.value=at,i.dispatchEvent(new Event("input"))}}}});var yb=St((LT,xb)=>{"use strict";var jc=bc(),A1=Yd(),kp=dh(),y7=Tl(),Sp=Qd(),b7=Cr(),T1=!b7.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Ar}=$r(),{C:S0,PAINTING_X:Yc}=A0(),pr=t=>Math.max(0,Math.min(1,t)),le=(t,e,o)=>t+(e-t)*o,tn=(t,e,o)=>[le(t[0],e[0],o),le(t[1],e[1],o),le(t[2],e[2],o)],So=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],Ep=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],tr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],ee=(t,e,o)=>{let r=pr((o-t)/(e-t));return r*r*(3-2*r)};function w7(t,e,o,r,n,a){if(n<=0)return[t,o];let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*r,l=Math.max(-f,Math.min(f,t-e)),v=t-l,d=(o+s*l)*n,p=(o-s*d)*c,u=v+(l+d)*c;return e-t>0==u>e&&(u=e,p=0),[u,p]}var hb=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,_7=t=>t*t*t,zp=t=>1-Math.pow(1-t,3),An=t=>-(Math.cos(Math.PI*t)-1)/2;function $n(t,e){let o=t.length-1,r=pr(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=a*a,v=l*a;return[0,1,2].map(d=>.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*l+(-s[d]+3*i[d]-3*c[d]+f[d])*v))}var _o=(t,e,o,r)=>({eye:t,target:e,fov:o,roll:r||0});function Li(t,e,o){return _o(tn(t.eye,e.eye,o),tn(t.target,e.target,o),le(t.fov,e.fov,o),le(t.roll,e.roll,o))}var Rp=()=>ee(.75,1.3,window.innerWidth/window.innerHeight),er=(t,e)=>Li(t,e,Rp()),L1=[7,3.95,S0.hallEnd-.05],M7=[S0.x1,2.9,S0.zc],Vc=[16.75,4.55,6.75],Op=[6.92,2.72,14.5],ha=[7.3,.015,47.1],k7=[Vc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Op],S7=[Op,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],ha],zi=[Yc[0],3,S0.z0],Ai=[Yc[1],3,S0.z0],Tp=47.45,gb=4.6,E7=13.2,z7=1.57,Mf=[7.55,1.25,46.75],Cp=[17.25,2.42,46],Pp=[26.05,1.95,46],kf=[36.15,.015,44],C1=()=>le(6.8,6.15,Rp()),A7=[Mf,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Cp],T7=[Cp,[20.2,2.05,45.6],[23.2,1.8,45],Pp],Ti=[Yc[2],3,S0.z0],Lp=[34.8,1.35,46],Ls=[7.89,.03,19.03],ub=.36,db=13.64,R0=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Xr(t){let e=t.side==="left"?1:-1;return tn([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],Rp())}function L7(t){return t.side==="left"?er(_o([8.6,3.9,t.z],[ub,1.45,t.z],76),_o([8,3.6,t.z+.7],[ub,3.95,t.z-2],46,-.008)):er(_o([5.4,3.9,t.z],[db,1.45,t.z],76),_o([6,3.6,t.z-.7],[db,3.95,t.z+2],46,-.008))}var N7=()=>[kf,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Xr(R0[0])],R7=()=>[Xr(R0[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Xr(R0[3])],O7=()=>[Xr(R0[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Ls],pb={2:{pos:()=>Op,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Mf,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Cp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Pp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Lp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Xr(R0[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Xr(R0[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Xr(R0[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Xr(R0[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Xr(R0[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Xr(R0[5]),amp:[.12,.08,.1],tumble:.5}},Ts=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],r=er(_o([S0.x0+.9,1.85,S0.zc+.25],[S0.x1,2.85,S0.zc-.1],64),_o([S0.x0+1.2,2,S0.zc+.35],[S0.x1,2.6,S0.zc-.15],50));return r.eye=So(So(r.eye,[e,0,0]),o),r}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=er(_o([16.6,1.9,9.2],[17.3,.4,5.6],64),_o([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=So(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=er(_o([7,1.35,13],[7.2,7.6,20.4],74,.05),_o([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=So(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=er(_o([7,3.6,43.7],[7,3.85,L1[2]],74),_o([7,3.6,41.3],[7,3.95,L1[2]],46));return o.eye=So(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=er(_o([7,3.9,40.3],[7,1.35,L1[2]],76),_o([6.3,3.6,41.2],[3.7,3.95,L1[2]],46,-.008));return o.eye=So(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=er(_o([7.15,.15,46],[7.3,.04,ha[2]],50),_o([7.05,.14,45.9],[7.25,.05,ha[2]],32));return o.eye=So(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=er(_o([7.15,.1,46.3],[7.05,.1,Tp],50),_o([7.1,.12,45.85],[7,.2,Tp],30));return o.eye=So(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=er(_o([7.3,.85,45.65],[7.6,1.38,47.1],64),_o([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=So(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=er(_o([zi[0],2.3,46.85],[zi[0],1.25,zi[2]],74),_o([zi[0]-.6,2.55,46.85],[zi[0]+1.9,2.9,zi[2]],46,.008));return o.eye=So(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=er(_o([Ai[0],1.95,46.85],[Ai[0],1,Ai[2]],74),_o([Ai[0]-.6,2.1,46.85],[Ai[0]+1.9,2.75,Ai[2]],46,.008));return o.eye=So(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=er(_o([Ti[0],1.4,46.85],[Ti[0],.6,Ti[2]],74),_o([Ti[0]-.6,1.45,46.85],[Ti[0]+1.9,2,Ti[2]],46,.008));return o.eye=So(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=er(_o([34.75,.5,44.15],[S0.x1,.8,43.95],66),_o([34.75,.45,44.3],[S0.x1,.35,43.95],50));return o.eye=So(o.eye,e),o}},...R0.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let r=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],n=L7(t);return n.eye=So(n.eye,r),n}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=er(_o([7.75,2.6,18.6],[7.89,0,19.08],60),_o([7.75,2.3,18.45],[7.89,0,19.08],46)),r=o.eye[0]-Ls[0],n=o.eye[2]-Ls[2];return o.eye=[Ls[0]+r*Math.cos(e)-n*Math.sin(e),o.eye[1],Ls[2]+r*Math.sin(e)+n*Math.cos(e)],o}}],C7=[1,.96,.88];function vb(t,e){return{dur:e,cam(o,r,n){let a=An(o),s=Li(r,n,a),i=R0[t].side==="left"?1:-1;return s.eye=So(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,r,n){let a={};for(let s in n)typeof n[s]=="number"&&(a[s]=le(r[s],n[s],o));return a.aperture=le(r.aperture,n.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let r=An(o),n=Xr(R0[t]),a=Xr(R0[t+1]),s=R0[t].side==="left"?1:-1,i=So(tn(n,a,.5),[s*1.2,.5,0]),c=$n([n,tn(n,i,.6),i,tn(a,i,.6),a],r);return{phase:"fly",pos:So(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Ap=[{dur:6.2,cam(t,e,o){if(t<.5){let i=_7(t/.5),c=tn(e.eye,[S0.x1-3.2,2.6,S0.zc],i),f=tn(e.target,M7,ee(0,.6,t/.5));return _o(c,f,le(e.fov,e.fov-8,i),le(e.roll,.04,i))}let r=zp((t-.5)/.5),n=[[Ar.cx+.4,10.4,Ar.zc+.6],[Ar.cx-.6,7.6,Ar.zc+1.3],[Ar.cx-1.9,4.6,Ar.zc+1.75],o.eye],a=[[Ar.cx-.1,0,Ar.zc-.2],[Ar.cx-1,.4,Ar.zc-.1],[Ar.cx-1.1,.8,Ar.zc-.2],o.target];return _o($n(n,r),$n(a,r),le(o.fov+14,o.fov,r),le(-.25,o.roll,r))},look(t,e,o){let r=ee(.22,.5,t),n=1-ee(.5,.74,t);return{fade:t<.5?r:n,fadeColor:C7,exposure:le(e.exposure,o.exposure,ee(.5,.9,t))*(1+2.2*(t<.5?ee(.15,.5,t):1-ee(.5,.8,t))),letterbox:le(e.letterbox,o.letterbox,ee(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*ee(.6,1,t),focus:le(4,o.focus,ee(.5,1,t)),shafts:le(e.shafts,o.shafts,ee(.4,.6,t)),vignette:le(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,r){let n=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=$n(n,An(t)),s=ee(0,.12,t)*(1-ee(.82,1,t)),i=tn(tn(e.target,o.target,ee(.55,1,t)),r.pos,s),c=le(e.fov,o.fov,ee(.3,1,t))-6*Math.sin(Math.PI*t),f=le(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return _o(a,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:le(e.exposure,o.exposure,ee(.25,.75,t)),letterbox:le(e.letterbox,o.letterbox,t),focus:le(a,o.focus,ee(.8,1,t)),aperture:le(.7,o.aperture,ee(.8,1,t)),shafts:le(e.shafts,o.shafts,ee(.3,.8,t)),vignette:le(e.vignette,o.vignette,t)}},leaf(t){let e=hb(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:So($n(k7,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*ee(.8,1,t)}}},{dur:11.5,cam(t,e,o,r){let n=$n([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],ee(0,.8,t)*.6+An(pr(t/.8))*.4),a=$n([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],An(ee(.8,1,t))),s=t<.8?n:a,i=tn(tn(e.target,r.pos,ee(.03,.22,t)),o.target,ee(.82,1,t)),c=le(e.fov,o.fov,ee(.15,.7,t))-6*ee(.6,.8,t)*(1-ee(.85,1,t)),f=le(e.roll,o.roll,ee(0,.6,t))-.04*Math.sin(Math.PI*t);return _o(s,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:le(e.exposure,o.exposure,ee(.5,1,t)),letterbox:le(e.letterbox,o.letterbox,t),focus:le(a,o.focus,ee(.84,1,t)),aperture:le(1.1,o.aperture,ee(.84,1,t)),shafts:le(e.shafts,o.shafts,ee(.2,.9,t)),vignette:le(e.vignette,o.vignette,ee(.5,1,t))}},leaf(t){let e=le(hb(t),t,.35),o=$n(S7,ee(0,.78,e)),r=Math.sin(t*Math.PI*8)*.35*(1-ee(.55,.76,t)),n=ee(.7,.8,t);return{phase:"fly",pos:So(o,[r,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-n),0]),tumble:1-n,swing:r}}},{dur:2.6,cam(t,e,o){let r=An(t),n=Li(e,o,r);return n.eye=So(n.eye,[0,0,-.35*Math.sin(Math.PI*r)]),n},look(t,e,o){let r=An(t),n={};for(let a in o)typeof o[a]=="number"&&(n[a]=le(e[a],o[a],r));return n},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let r=An(t),n=$n([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],r),a=tn(e.target,o.target,ee(.1,.85,t));return _o(n,a,le(e.fov,o.fov,ee(.2,1,t)),le(e.roll,o.roll,r))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=le(e[n],o[n],ee(.2,1,t)));return r},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return Li(e,o,An(t))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=le(e[n],o[n],An(t)));return r},leaf(){return{phase:"floor"}},walker(t){return le(gb,C1(),t)}},{dur:11,kick:t=>pr((t-Wc())/(1-Wc())),cam(t,e,o,r){let n=Wc(),a=ee(0,n,t)*(1-ee(n+.12,n+.35,t)),s=mb(Math.min(t,Xc)),i=So(e.target,[(s-e.target[0])*.15*a,0,0]),c=ee(n+.12,1,t),f=$n([e.eye,e.eye,So(e.eye,[0,.12,-.3]),o.eye],c);return i=tn(i,r.pos,ee(n+.06,n+.24,t)*(1-ee(.9,1,t))),i=tn(i,o.target,ee(.88,1,t)),_o(f,i,le(e.fov,o.fov,c),le(e.roll,o.roll,c))},look(t,e,o,r,n){let a=Wc(),s=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),i=ee(0,.12,t)*(1-ee(a+.25,a+.5,t));return{letterbox:le(le(e.letterbox,o.letterbox,ee(a,1,t)),1.75,i),exposure:le(e.exposure,o.exposure,ee(a,1,t)),focus:t<a?e.focus:le(e.focus,s,ee(a,a+.2,t)),aperture:le(e.aperture,o.aperture,ee(a,1,t)),vignette:le(e.vignette,o.vignette,t),shafts:le(e.shafts,o.shafts,t)}},leaf(t){let e=pr((t-Wc())/(1-Wc()));if(e<=0)return{phase:"floor"};let o=ee(0,.85,e)*.85+zp(ee(0,.15,e))*.15;return{phase:"fly",pos:So(ha,[(Mf[0]-ha[0])*o+Math.sin(e*9)*.08*(1-e),(Mf[1]-ha[1])*o,(Mf[2]-ha[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?mb(t):null}},{dur:9,cam(t,e,o,r){let n=An(t),a=$n([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],n),s=1-ee(.6,.92,t),i=tn(tn(e.target,r.pos,ee(0,.15,t)),o.target,1-s),c=le(e.fov,o.fov,ee(.3,1,t)),f=le(e.roll,o.roll,n)+.04*Math.sin(Math.PI*t);return _o(a,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:le(e.letterbox,o.letterbox,t),exposure:le(e.exposure,o.exposure,ee(.3,.8,t)),focus:le(a,o.focus,ee(.6,.95,t)),aperture:le(e.aperture,o.aperture,ee(.6,1,t)),vignette:le(e.vignette,o.vignette,t),shafts:le(e.shafts,o.shafts,ee(.3,.8,t))}},leaf(t){let e=An(t);return{phase:"fly",pos:So($n(A7,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=An(t),n=Li(e,o,r);return n.eye=So(n.eye,[0,.12*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=le(e[n],o[n],t));return r.aperture=le(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=An(t);return{phase:"fly",pos:So($n(T7,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=An(t),n=Li(e,o,r);return n.eye=So(n.eye,[0,.1*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=le(e[n],o[n],t));return r.aperture=le(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=An(t);return{phase:"fly",pos:So($n([Pp,[29.2,1.75,45.5],[32.2,1.5,45.4],Lp],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,r){let n=An(t),a=$n([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],n),s=ee(.05,.3,t)*(1-ee(.8,1,t)),i=tn(tn(e.target,o.target,ee(.6,1,t)),r.pos,s);return _o(a,i,le(e.fov,o.fov,ee(.2,1,t)),le(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:le(e.letterbox,o.letterbox,t),exposure:le(e.exposure,o.exposure,t),focus:le(a,o.focus,ee(.8,1,t)),aperture:le(.9,o.aperture,ee(.8,1,t)),vignette:le(e.vignette,o.vignette,t),shafts:le(e.shafts,o.shafts,t)}},leaf(t){let e=$n([Lp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],kf],ee(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-ee(.35,.82,t)),r=ee(.78,.88,t);return{phase:"fly",pos:So(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-r),o]),tumble:.7*(1-r),swing:o}}},{dur:12,door(t){let e=pr((t-.02)/.09);return zp(e)+.07*Math.sin(pr((t-.08)/.18)*Math.PI)*(1-pr((t-.08)/.3))},cam(t,e,o,r){let n=Math.sin(t*340)*.012*ee(.02,.05,t)*(1-ee(.08,.16,t)),a=ee(.06,1,t),s=$n([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+An(a)*.45),i=So(r.pos,[1,-.2,-1.45]);s=tn(s,i,ee(.1,.22,t)*(1-ee(.52,.72,t)));let c=ee(.06,.16,t)*(1-ee(.86,1,t)),f=tn(e.target,r.pos,c);f=tn(f,o.target,ee(.86,1,t));let l=le(e.fov,o.fov,ee(.1,1,t))+6*Math.sin(Math.PI*ee(.08,.9,t)),v=le(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*ee(.1,.9,t))+n;return _o(So(s,[0,n,0]),f,l,v)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),s=ee(.02,.06,t)*(1-ee(.08,.3,t));return{letterbox:le(e.letterbox,o.letterbox,ee(.1,.4,t)),exposure:le(e.exposure,o.exposure,t)*(1+.8*s),focus:le(a,o.focus,ee(.86,1,t)),aperture:le(.8,o.aperture,ee(.86,1,t)),vignette:le(e.vignette,o.vignette,t),shafts:le(e.shafts,o.shafts,t)+s}},leaf(t){let e=pr((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=$n(N7(),e*.6+An(e)*.4),r=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:So(o,[0,r*.6,r]),tumble:1.4-.8*e}}},...[0,1].map(t=>vb(t,7.5)),{dur:10,cam(t,e,o,r){let n=An(t),a=$n([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],n),s=ee(0,.15,t)*(1-ee(.85,1,t)),i=tn(tn(e.target,o.target,ee(.5,1,t)),r.pos,s);return _o(a,i,le(e.fov,o.fov,n)+4*Math.sin(Math.PI*n),le(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:le(e.letterbox,o.letterbox,t),exposure:le(e.exposure,o.exposure,t),focus:le(a,o.focus,ee(.85,1,t)),aperture:le(.6,o.aperture,ee(.85,1,t)),vignette:le(e.vignette,o.vignette,t),shafts:le(e.shafts,o.shafts,t)}},leaf(t){let e=An(t),o=$n(R7(),e);return{phase:"fly",pos:So(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>vb(t,7.5)),{dur:10,cam(t,e,o,r){let n=An(t),a=$n([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],n),s=ee(0,.2,t)*(1-ee(.9,1,t)),i=tn(tn(e.target,o.target,ee(.5,1,t)),r.pos,s);return _o(a,i,le(e.fov,o.fov,n),le(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:le(e.letterbox,o.letterbox,t),exposure:le(e.exposure,o.exposure,t),focus:le(a,o.focus,ee(.85,1,t)),aperture:le(.7,o.aperture,ee(.85,1,t)),vignette:le(e.vignette,o.vignette,t),shafts:le(e.shafts,o.shafts,t)}},leaf(t){let e=$n(O7(),ee(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-ee(.4,.84,t)),r=ee(.8,.9,t);return{phase:"fly",pos:So(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-r),0]),tumble:.8*(1-r),swing:o}}}],Np=9.2,Xc=.72;function mb(t){return t<Xc?le(C1(),Np,t/Xc):le(Np,E7,(t-Xc)/(1-Xc))}function Wc(){return Xc*pr((ha[0]+.15-C1())/(Np-C1()))}var O1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},N1=t=>Object.assign({},O1,Ts[t].look),P7=`
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
`;function dr(t,e,o){let r=document.createElement(t);return e&&(r.className=e),o!==void 0&&(r.innerHTML=o),r}var Ei=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function R1(t,e,o){t.querySelectorAll(".tour-line").forEach((r,n)=>{r.style.transitionDelay=(e+n*o).toFixed(2)+"s"})}xb.exports=function(e){let o=/tourdebug/.test(location.search),{fps:r}=e;if(!document.querySelector("link[data-tour-font]")){let j=document.createElement("link");j.rel="stylesheet",j.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",j.setAttribute("data-tour-font",""),document.head.appendChild(j)}let n=xp(),a=null;fetch("res/hand.json").then(j=>j.ok?j.json():null).then(j=>{a=j}).catch(()=>{});let s=document.createElement("style");s.textContent=P7+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=dr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=dr("div","tour-mark",Ei(A1.name)),f=dr("button","tour-free","Explore freely");f.type="button";let l=dr("div","tour-links",kp.icons("tour-icon"));l.insertBefore(bp()("tour-icon"),l.firstChild),l.insertBefore(u1().button("tour-icon"),l.firstChild.nextSibling);let v=dr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');v.type="button",v.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(v),T1&&l.appendChild(f);let d=dr("div","tour-progress",Ts.map(()=>"<i></i>").join("")),p=dr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),u=p.querySelector("span"),h=dr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Ei(A1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);R1(h,.4,.35);let g=A1.text.split(/\n\s*\n/).map(j=>`<p class="tour-line">${Ei(j.trim())}</p>`).join(""),m=dr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Ei(A1.title)}</h2>
		<span class="tour-rule"></span>
		${kp.line("tour-line tour-contact")}
		${g}`);R1(m,.25,.28);let x=dr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);R1(x,.6,.3);let y=dr("div","tour-card tour-master","");function b(j){let ht=dr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),pe=ht.querySelector(".tour-title"),he=ht.querySelector(".tour-body");return ht.filled=!1,ht.body=he,ht.fill=()=>{let Pe=j();if(!Pe||ht.filled)return;ht.filled=!0;let un=Pe.title||"";ht.querySelector(".tour-kicker").textContent=y7(Pe)||"Oil on canvas";let v0=ht.querySelector(".visit-row");v0.innerHTML=Sp.button(Pe),v0.hidden=!v0.innerHTML;let H0=v0.querySelector(".visit-btn");H0&&(H0.addEventListener("click",To=>{To.stopPropagation(),Sp.open(Pe)}),ht.warm=()=>Sp.warm(Pe));let dn=0;pe.innerHTML=un.split(" ").map(To=>'<span class="tour-word">'+To.split("").map(i0=>`<span style="transition-delay:${(.35+dn++*.045).toFixed(3)}s">${Ei(i0)}</span>`).join("")+"</span>").join(" "),pe.setAttribute("aria-label",un);let C0=.35+un.length*.045+.2;ht.querySelector(".tour-rule").style.transitionDelay=C0.toFixed(2)+"s";let pn=String(Pe.description||"").split(/\n\s*\n/).filter(To=>To.trim());if(ht.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&pn.length){he.innerHTML=pn.map(Tn=>`<p class="hand-text">${Ei(Tn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let To=he.querySelector("canvas"),i0=pn.map(Tn=>Tn.trim()).join(`

`),en=!1,Yn=!1,nr=0;he.addEventListener("wheel",()=>{en=!0},{passive:!0}),he.addEventListener("touchmove",()=>{en=!0},{passive:!0});let rr=parseFloat(getComputedStyle(he).fontSize)||17,Jo=n(To,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,rr*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:Tn=>3.5+Tn.length/420,seed:3+un.length,onPen:Tn=>{if(en)return;let Kr=Tn-he.clientHeight*.55;Kr>he.scrollTop+4&&(he.scrollTop+=Math.min(16,Kr-he.scrollTop))}});To.addEventListener("click",Tn=>{Tn.stopPropagation(),clearTimeout(nr),Yn?Jo.finish():(Yn=!0,Jo.write(i0,!0))}),ht.write=()=>{if(clearTimeout(nr),en=!1,Yn){Jo.write(i0,!0);return}Jo.write("",!0),nr=setTimeout(()=>{Yn=!0,Jo.write(i0)},C0*.6*1e3)},ht.stopWrite=()=>{clearTimeout(nr),Jo.stop()};let Lr=0;window.addEventListener("resize",()=>{clearTimeout(Lr),Lr=setTimeout(()=>{Yn&&ht.classList.contains("on")&&Jo.write(i0,!0)},250)})}else he.innerHTML=pn.map(To=>`<p class="tour-line">${Ei(To.trim())}</p>`).join(""),he.querySelectorAll(".tour-line").forEach((To,i0)=>{To.style.transitionDelay=(C0+.3+Math.min(i0,6)*.35).toFixed(2)+"s"})},ht}let M=()=>e.paintings?e.paintings():[],_=j=>M().find(ht=>ht.side==="corridor"&&Math.abs(ht.paintingPosition[0]-j)<.5),k=b(()=>M().find(j=>j.side==="end")),A=()=>dr("div","tour-card",""),z=b(()=>_(zi[0])),D=b(()=>_(Ai[0])),P=b(()=>_(Ti[0])),G=R0.map(j=>b(()=>M().find(ht=>ht.side===j.side&&Math.abs(ht.paintingPosition[2]-j.z)<.5))),I=dr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${T1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${kp.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${T1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);R1(I,.5,.35);let H=[h,m,x,y,k,A(),A(),A(),z,D,P,A(),...G,I];i.append(...H,c,l,d,p),document.body.appendChild(i);let ft=fb()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{oe=-1,zt&&(ie={start:S},zt=!1)}});document.body.classList.add("touring");let Nt=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,_t=Nt?"Scroll":"Swipe",xt=Ts.map((j,ht)=>ht===0?Nt?"Scroll to begin":"Swipe up to begin":ht===1?_t+" to follow the leaf":ht===2?_t+" to follow the light":ht===3?_t+" for its story":ht===6||ht===7||ht===Ts.length-1?"":_t+" on"),ut=[0];Ap.forEach(j=>ut.push(ut[ut.length-1]+j.dur));let Yt=ut[ut.length-1],Se=210,Oe=95,oo=.35,me=1.4,Ke=.32,Ye=1,nt=1.3,V=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,mt=2.2,Lt=.7,fe=.9,_e=!0,ae=0,qt=0,at=0,Wt=-10,Ne=!1,oe=-1,It=0,$e=0,S=0,De=null,Be=Object.assign({},N1(0)),co=Ts[0].cam(0),mo={phase:"home",pos:Vc.slice(),tumble:0},go=0,No=j=>{let ht=0;for(let pe=1;pe<ut.length;pe++)Math.abs(ut[pe]-j)<Math.abs(ut[ht]-j)&&(ht=pe);return ht};function zo(j){let ht=H[j];ht&&ht.fill&&(ht.fill(),ht.body.scrollTop=0,ht.offsetWidth),H.forEach((pe,he)=>{let Pe=pe.classList.contains("on");pe.classList.toggle("on",he===j),he===j&&!Pe&&pe.write&&pe.write(),he!==j&&Pe&&pe.stopWrite&&pe.stopWrite()}),ht&&ht.warm&&ht.warm(),u.textContent=xt[j]||"",p.classList.toggle("on",!!xt[j])}function rn(){H.forEach(j=>{j.stopWrite&&j.classList.contains("on")&&j.stopWrite(),j.classList.remove("on")}),p.classList.remove("on")}let Xn=null,O0=-1;function et(j){if(ft.active||!_e||De)return;let ht=S-Wt>oo;if(Wt=S,ht||!Xn){let pe=0,he=Yt;for(let Pe=0;Pe<ut.length;Pe++)if(ut[Pe]<=ae-.02&&(pe=ut[Pe]),ut[Pe]>=ae+.02){he=ut[Pe];break}Xn={lo:pe,hi:he}}S<O0||(Ne=!1,at=Math.max(Xn.lo,Math.min(Xn.hi,at+j)),at=Math.max(ae-mt,Math.min(ae+mt,at)))}function Bt(j){if(ft.active||!_e||De)return;let ht=Ne?at:ae,pe;if(j>0)pe=ut.findIndex(he=>he>ht+.05);else{pe=-1;for(let he=ut.length-1;he>=0;he--)if(ut[he]<ht-.05){pe=he;break}}pe<0||(at=ut[pe],Ne=!0,Wt=S)}let B=null,Y=j=>j.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(j=>i.addEventListener(j,Y)),i.addEventListener("pointerdown",j=>{if(j.stopPropagation(),!(j.target.closest("button, a")||j.target.closest(".tour-body"))){B={x:j.clientX,y:j.clientY,lx:j.clientX,ly:j.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(j.pointerId)}catch(ht){}}}),i.addEventListener("pointermove",j=>{if(!B)return;let ht=j.clientX-B.lx,pe=j.clientY-B.ly;B.lx=j.clientX,B.ly=j.clientY;let he=Math.abs(pe)>=Math.abs(ht)?-pe:-ht;B.moved+=Math.abs(he);let Pe=performance.now(),un=he/Oe;B.v=B.v*.6+un/Math.max(.008,(Pe-B.lt)/1e3)*.4,B.lt=Pe,B.moved>6&&et(un)});let J=j=>{let ht=B;if(B=null,!!ht){if(ft.active){ht.moved<10&&performance.now()-ht.t<500?ft.tap():ht.y-(j?j.clientY:ht.ly)>30&&ft.swipe(1);return}ht.moved<10&&performance.now()-ht.t<500?Bt(1):performance.now()-ht.lt<120&&et(Math.max(-1.6,Math.min(1.6,ht.v*.22)))}};i.addEventListener("pointerup",j=>{j.stopPropagation(),J(j)}),i.addEventListener("pointercancel",()=>{B=null}),i.addEventListener("wheel",j=>{if(ft.active){if(j.target.closest(".conf-ui"))return;j.preventDefault(),ft.wheel(j.deltaY);return}if(j.target.closest(".tour-body")){let pe=j.target.closest(".tour-body"),he=pe.scrollTop+pe.clientHeight>=pe.scrollHeight-2&&j.deltaY>0,Pe=pe.scrollTop<=0&&j.deltaY<0;if(!he&&!Pe)return}j.preventDefault();let ht=j.deltaMode===1?j.deltaY*16:j.deltaMode===2?j.deltaY*window.innerHeight:j.deltaY;et(ht/Se)},{passive:!1}),window.addEventListener("keydown",j=>{if(!_e||De||document.body.classList.contains("visiting"))return;if(ft.active){if(j.stopImmediatePropagation(),j.target&&/TEXTAREA|INPUT|BUTTON/.test(j.target.tagName))return;ft.key(j.key)&&j.preventDefault();return}let ht=j.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ht)>=0){if((ht==="Enter"||ht===" ")&&j.target&&j.target.tagName==="BUTTON")return;j.preventDefault(),j.stopImmediatePropagation(),Bt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ht)>=0?(j.preventDefault(),j.stopImmediatePropagation(),Bt(-1)):ht==="Escape"?(j.preventDefault(),xe()):/^[wasdzq]$/i.test(ht)&&j.stopImmediatePropagation()},!0),window.addEventListener("keyup",j=>{_e&&!De&&/^(Arrow|[wasdzq]$)/i.test(j.key)&&j.stopImmediatePropagation()},!0),f.addEventListener("click",j=>{j.stopPropagation(),xe()}),["mousedown","pointerdown"].forEach(j=>v.addEventListener(j,ht=>ht.stopPropagation())),v.addEventListener("click",j=>{j.stopPropagation(),Rt()});let Vt=_o([8.6,1.75,44.3],[-3,1.85,44.5],55,0),Xt=null,zt=!1;function Rt(){if(!_e||De||ft.active||Xt)return;rn(),oe=-2;let j=co.eye;if(j[0]>.5&&j[0]<13.5&&j[2]>36&&j[2]<50){zt=!1,ft.start(co,Be);return}Xt={t:0}}I.addEventListener("click",j=>{let ht=j.target.closest("button");ht&&(j.stopPropagation(),ht.dataset.act==="free"&&xe(),ht.dataset.act==="replay"&&Ge(),ht.dataset.act==="list"&&Iu().show(!1),ht.dataset.act==="confess"&&(rn(),oe=-2,ft.start(co,Be)))});let Qt=[null,[Ar.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Yc[0]-7,0],[42.5+Yc[1]-7,0],[42.5+Yc[2]-7,0],[1e3,Math.PI/2],...R0.map(j=>[j.z-1.6,j.side==="left"?-Math.PI/2:Math.PI/2]),[Ls[2]-1.6,Math.PI]],se=null,ce=0;function xe(){if(!_e||De||!T1)return;let j=No(ae),ht=Qt[j];se=j<=1?{phase:"home",pos:Vc.slice()}:j>=3&&j<=6?{phase:"floor",pos:ha.slice()}:j===11?{phase:"floor",pos:kf.slice()}:j===18?{phase:"floor",pos:Ls.slice()}:null,ce=j>=12?1:0,ht&&r.place&&r.place(ht[0],ht[1]),De={start:S,fromCam:co,fromLook:Object.assign({},Be)},rn(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Ge(){ae=at=0,qt=0,Ne=!1,oe=-1,It=0,$e=0,mo={phase:"home",pos:Vc.slice(),tumble:0},ie={start:S}}let ie={start:-1},Ve=!1,Ze=[],ge={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function je(j){go+=j*(mo.phase==="floor"?0:1);let ht=mo.tumble===void 0?0:mo.tumble,pe=jc.fromTranslation(Ze,mo.pos);if(mo.phase==="home")pe=jc.rotateY(pe,pe,2.2+Math.sin(go*.9)*.15),pe=jc.rotateZ(pe,pe,-1+Math.sin(go*1.3)*.12),pe=jc.rotateX(pe,pe,.4);else if(mo.phase==="floor")pe=jc.rotateY(pe,pe,.65),pe=jc.rotateX(pe,pe,.16);else{let he=mo.pos;if(ge.prev&&j>0){let P0=[he[0]-ge.prev[0],he[1]-ge.prev[1],he[2]-ge.prev[2]];if(Math.hypot(P0[0],P0[1],P0[2])<1.5){let il=Math.min(1,j*6);for(let qs=0;qs<3;qs++)ge.vel[qs]+=(P0[qs]/j-ge.vel[qs])*il}else ge.vel=[0,0,0]}ge.prev=he.slice();let Pe=ge.vel,un=Math.hypot(Pe[0],Pe[1],Pe[2]),v0=ee(.25,1.4,un),H0=ee(.5,2,-Pe[1]),dn=go*.35*(.3+ht)+.65,C0=[Math.cos(dn),0,Math.sin(dn)];un>.001&&(C0=tn(C0,tr(Pe,-1/un),v0));let pn=Math.min(1,j*4);ge.axis=tn(ge.axis,C0,ge.fresh?1:pn);let To=ge.axis,i0=Math.hypot(To[0],To[1],To[2])||1;To=tr(To,1/i0);let en=co.eye,Yn=[en[0]-he[0],en[1]-he[1],en[2]-he[2]],nr=Math.hypot(Yn[0],Yn[1],Yn[2])||1,rr=le(.6,.22,v0),Jo=[Yn[0]/nr*rr,1+Yn[1]/nr*rr,Yn[2]/nr*rr],Lr=To[0]*Jo[0]+To[1]*Jo[1]+To[2]*Jo[2];Jo=Ep(Jo,tr(To,Lr));let Tn=Math.hypot(Jo[0],Jo[1],Jo[2])||1;Jo=tr(Jo,1/Tn);let Kr=[To[1]*Jo[2]-To[2]*Jo[1],To[2]*Jo[0]-To[0]*Jo[2],To[0]*Jo[1]-To[1]*Jo[0]],qo=Math.hypot(Pe[0],Pe[2]),vn=0;if(qo>.15&&ge.dir&&j>0){let P0=[Pe[0]/qo,Pe[2]/qo];vn=(ge.dir[0]*P0[1]-ge.dir[1]*P0[0])/j,ge.dir=P0}else qo>.15&&(ge.dir=[Pe[0]/qo,Pe[2]/qo]);ge.bank+=(Math.max(-.8,Math.min(.8,vn*.3))*v0-ge.bank)*Math.min(1,j*3),ge.rock+=j*(1.5+2.4*v0),ge.spin+=j*H0*7*(.4+ht);let Nr=Math.sin(ge.rock)*(.26+.45*ht)*(1-.5*H0)+ge.bank+ge.spin,$s=Math.sin(ge.rock*.63+1)*(.16+.3*ht)+(mo.swing||0)*.9,da=Math.cos(Nr),Ds=Math.sin(Nr),Of=So(tr(Jo,da),tr(Kr,Ds)),Ka=So(tr(Kr,da),tr(Jo,-Ds));da=Math.cos($s),Ds=Math.sin($s);let Pi=So(tr(To,da),tr(Of,Ds)),al=So(tr(Of,da),tr(To,-Ds)),D1=Math.sin(ge.rock+1.5708)*.035*(.3+ht)*(1-.5*v0),za=So(he,tr(Kr,D1)),sl=[Pi[0],Pi[1],Pi[2],0,al[0],al[1],al[2],0,Ka[0],Ka[1],Ka[2],0,za[0],za[1],za[2],1];for(let P0=0;P0<16;P0++)pe[P0]=sl[P0];ge.fresh=!1}return mo.phase!=="fly"&&(ge.prev=null,ge.vel=[0,0,0],ge.fresh=!0,ge.spin=0,ge.bank=0,ge.dir=null),{visible:!0,model:pe}}function Uo(j){for(let ht in O1)Be[ht]=j[ht]!==void 0?j[ht]:O1[ht]}function Ao(j,ht){if(j<=1)return{phase:"home",pos:Vc.slice(),tumble:0};let pe=pb[j];if(pe){let he=pe.amp;return{phase:"fly",pos:So(pe.pos(),[Math.sin(ht*.55)*he[0],Math.sin(ht*.8)*he[1],(1-Math.cos(ht*.45))*he[2]]),tumble:pe.tumble}}return{phase:"floor",pos:(j>=18?Ls:j>=10?kf:ha).slice(),tumble:0}}let Ie=0,He=null;function lo(j){let ht=Math.min(.1,Math.max(0,j-Ie));if(Ie=j,S=j,Ve||(Ve=!0,ie.start=j),De)return null;if(Xt&&(Xt.t+=ht,Xt.t>=.7&&(Xt=null,zt=!0,ft.start(Vt,Object.assign({},O1,{fade:1,fadeColor:[0,0,0]})))),ft.active){let qo=ft.update(ht);return co=qo.camera,Uo(qo.look),o&&window.__camOverride&&(co=window.__camOverride),o&&window.__lookOverride&&Object.assign(Be,window.__lookOverride),{camera:co,walker:null,door:1,look:Be,leaf:je(ht)}}if(!Ne&&!B&&S-Wt>Lt){let qo=No(at);Math.abs(ut[qo]-at)<fe&&(at=ut[qo])}let pe=at-ae;if(Ne){let vn=Math.sign(pe)*Math.min(Ye,Math.sqrt(2*nt*Math.abs(pe)))-qt;qt+=Math.sign(vn)*Math.min(Math.abs(vn),nt*ht),ae+=qt*ht,(pe>0&&ae>=at||pe<0&&ae<=at||Math.abs(at-ae)<1e-4)&&(ae=at,qt=0,Ne=!1)}else{let qo=w7(ae,at,qt,Ke,ht,3);ae=qo[0],qt=qo[1],Math.abs(at-ae)<1e-4&&Math.abs(qt)<.001&&(ae=at,qt=0)}let he=0;for(;he<Ap.length-1&&ae>=ut[he+1];)he++;let Pe=Ap[he],un=pr((ae-ut[he])/Pe.dur),v0=Ts[he],H0=Ts[he+1],dn=No(ae);dn!==It&&(It=dn,$e=0);let C0=Math.abs(ae-ut[dn])<.02;C0&&($e+=ht);let pn=1-ee(0,1.2,Math.abs(ae-ut[dn])),To=Pe.leaf(un);if(To.pos?mo=Object.assign({},To):mo=Object.assign({},To,{pos:To.phase==="home"?Vc.slice():(he>=10?kf:ha).slice()}),pb[dn]&&pn>0){let qo=Ao(dn,$e);mo.pos=tn(mo.pos,qo.pos,pn)}let i0=Pe.walker&&(un>.01||he===6)?Pe.walker(un):null;He=i0==null?null:{x:i0,z:Tp,heading:Math.PI/2,phase:(i0-gb)/z7};let en=Pe.cam(un,v0.cam(0),H0.cam(0),mo);if(pn>0&&$e>0){let qo=Ts[dn],vn=qo.cam(0),Nr=qo.cam($e);en=_o(So(en.eye,tr(Ep(Nr.eye,vn.eye),pn)),So(en.target,tr(Ep(Nr.target,vn.target),pn)),en.fov+(Nr.fov-vn.fov)*pn,en.roll+(Nr.roll-vn.roll)*pn)}if(pn>0&&!V){let qo=S,vn=.006*pn,Nr=Math.sin(qo*.61)*.6+Math.sin(qo*1.37+1.3)*.4,$s=Math.sin(qo*.47+2.1)*.6+Math.sin(qo*1.13+.4)*.4,da=Math.sin(qo*.53+4)*.5+Math.sin(qo*.97+2.6)*.5;en=_o(So(en.eye,[Nr*vn,$s*vn*.7,da*vn]),So(en.target,[$s*vn*1.8,Nr*vn*1.4,0]),en.fov,en.roll+da*.0012*pn)}co=en;let Yn=N1(he),nr=N1(he+1),rr=Object.assign({},Yn,Pe.look(un,Yn,nr,mo,en.eye));if(pn>0){let qo=N1(dn);for(let vn in qo)typeof qo[vn]=="number"&&(rr[vn]=le(rr[vn],qo[vn],pn))}Uo(rr);let Lr=C0&&Math.abs(at-ae)<.02?dn:-1;Lr!==oe&&(Lr>=0&&(O0=S+me),oe=Lr,Lr>=0?zo(Lr):rn()),d.querySelectorAll("i").forEach((qo,vn)=>qo.classList.toggle("on",vn===dn));let Tn=oe>=0?H[oe]:null;Tn&&Tn.fill&&!Tn.filled&&(Tn.fill(),Tn.filled&&(Tn.classList.remove("on"),Tn.offsetWidth,Tn.classList.add("on")));let Kr=pr((j-ie.start)/2.6);return Kr<1&&(Be.fade=Math.max(Be.fade,1-ee(0,1,Kr)),Be.fadeColor=[0,0,0]),o&&window.__camOverride&&(co=window.__camOverride),o&&window.__lookOverride&&Object.assign(Be,window.__lookOverride),{camera:co,walker:He,door:Pe.door?Pe.door(un):he>=12?1:0,look:Xt?Object.assign(Be,{fade:Math.max(Be.fade||0,pr(Xt.t/.6)),fadeColor:[0,0,0]}):Be,leaf:je(ht)}}return o&&(window.__tour={go:Bt,exit:xe,wind:et,confess(){rn(),oe=-2,ft.start(co,Be)},note:()=>Rt(),conf:ft,paper:k1().STATE,seek(j,ht){ae=at=ut[j]+(ut[j+1]-ut[j])*ht,qt=0,Ne=!1,Wt=S+1e6,ie.start=S-10,Ve=!0},jump(j){ae=at=ut[j],qt=0,Ne=!1,$e=0,Wt=S,ie.start=S-10,Ve=!0},state:()=>({current:No(ae),scroll:+ae.toFixed(3),target:+at.toFixed(3),shown:oe,move:Math.abs(at-ae)>.02?{p:ae}:null,camNow:co,leaf:mo,look:Be})}),{update:lo,get active(){return _e&&!De},handover(j){if(!De)return null;let ht=pr((j-De.start)/1.8);return ht>=1?(_e=!1,null):{from:De.fromCam,fromLook:De.fromLook,k:An(ht)}},restingDoor:()=>ce,restingLeaf(){return se?(mo=se,je(0)):null},mix:Li,cam:_o}}});var Eb=St((RT,Sb)=>{var Ni=ii(),Ip=Ni.O,{W:I7,H:NT,POOL:kb,ROT:Ns,WIN:$7}=Ni.STUDIO,bb=t=>[t[0]+Ip[0],t[1]+Ip[1],t[2]+Ip[2]],Qc=(t,e,o)=>t+(e-t)*o,Kc=(t,e,o)=>[Qc(t[0],e[0],o),Qc(t[1],e[1],o),Qc(t[2],e[2],o)],Zc=t=>Math.max(0,Math.min(1,t)),Rs=t=>t*t*(3-2*t),wb=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;function _b(t,e){let o=t.length-1,r=Zc(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=a*a,v=l*a;return[0,1,2].map(d=>.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*l+(-s[d]+3*i[d]-3*c[d]+f[d])*v))}var Vn=[I7/2+.35,.02,kb.z0+3.5],Wn=Ns.cx,Dp=[4.3,7.42,16.35],Sf=[2.25,3.35,$7.c[2]-.75],Ef=[Wn,1.95,20.85],Xa=[Wn,1.45,Ns.cz-Ns.ro-1.55],Sa=[Wn+.2,.95,kb.z0+2.6],E0=[{petal:Dp,eye:[5.75,6.25,14.55],at:Dp,fov:40,look:{focus:2.4,aperture:.7}},{petal:Sf,eye:[3.6,3.05,Sf[2]-1.15],at:Sf,fov:46,look:{focus:3.3,aperture:.6}},{petal:Ef,eye:[Wn,Ef[1]-.06,Ef[2]+.95],at:[Wn,2.1,1],fov:50,look:{focus:.9,aperture:.12}},{petal:Xa,eye:[Wn,Xa[1]-.06,Xa[2]+.95],at:[Wn,2.1,1],fov:54,look:{focus:1.5,aperture:.15}},{petal:Sa,eye:[Wn+1.35,.42,Sa[2]+1.7],at:[Wn,2.1,1],fov:48,look:{focus:2.2,aperture:.55}},{petal:Vn,eye:[Vn[0]-.62,.2,Vn[2]+.85],at:[Vn[0]+.05,0,Vn[2]-.1],fov:40,look:{focus:1.05,aperture:.8}}],qp=[{dur:5.5,petal:[Dp,[3.6,6.4,15.6],[2.7,5.1,14.6],[2.15,4.1,13.4],Sf],eye:[E0[0].eye,[5,5.4,14.6],[4.2,3.9,13.4],E0[1].eye]},{dur:7,petal:[Sf,[3,3.9,15],[4.6,3.4,18.4],[6.4,2.6,20.6],Ef],eye:[E0[1].eye,[2,2.7,15.2],[3,2.2,20.3],[5.9,2,21.8],E0[2].eye],at:(t,e)=>t<.72?e:Kc(e,E0[2].at,Rs((t-.72)/.28))},{dur:7,petal:[Ef,[Wn,2,Ns.cz+Ns.ri],[Wn,1.85,Ns.cz],[Wn,1.65,Ns.cz-Ns.ri],Xa],eye:null,follow:t=>[Wn,t[1]-.06,t[2]+.95],at:()=>E0[2].at},{dur:7,petal:[Xa,[Wn+.25,1.05,Xa[2]-3.2],[Wn-.35,.65,(Xa[2]+Sa[2])/2],[Wn+.3,.75,Sa[2]+1.8],Sa],eye:[E0[3].eye,[Wn+1.6,.7,Xa[2]-1.5],[Wn+1.75,.45,(Xa[2]+Sa[2])/2+1],E0[4].eye],at:(t,e)=>t<.3?Kc(E0[3].at,e,Rs(t/.3)):Kc(e,E0[4].at,Rs(Zc((t-.55)/.45)))},{dur:6,petal:[Sa,[Wn-.4,1.35,Sa[2]-.8],[Wn-.15,.9,Sa[2]+.4],[Vn[0]-.1,.38,Vn[2]-.15],[Vn[0],.06,Vn[2]],Vn],eye:[E0[4].eye,[Wn+1.2,.5,Sa[2]+1.6],[Vn[0]-.4,.3,Vn[2]+1.2],E0[5].eye],at:(t,e)=>t<.25?Kc(E0[4].at,e,Rs(t/.25)):Kc(e,E0[5].at,Rs(Zc((t-.7)/.3)))}],z0=[0];qp.forEach(t=>z0.push(z0[z0.length-1]+t.dur));var $p=z0[z0.length-1],D7=210,q7=95,F7=.35,G7=.45,H7=.7,U7=.9;function Mb(t,e,o,r,n,a){r=Math.max(1e-4,r);let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),f=t-e,l=a*r;f=Math.max(-l,Math.min(l,f));let v=t-f,d=(o+s*f)*n,p=(o-s*d)*c,u=v+(f+d)*c;return e-t>0==u>e&&(u=e,p=(u-e)/n),[u,p]}Sb.exports=function(){let e=0,o=0,r=0,n=-10,a=0,s=null,i=null,c=!1,f=!1,l=!1,v=0,d=b=>{let M=0;for(let _=1;_<z0.length;_++)Math.abs(z0[_]-b)<Math.abs(z0[M]-b)&&(M=_);return M},p=b=>{(a-n>F7||i===null)&&(i=d(r)),n=a,c=!1;let M=z0[Math.max(0,i-1)],_=z0[Math.min(z0.length-1,i+1)];r=Math.max(M,Math.min(_,r+b))},u=b=>{let M=d(r);r=z0[Math.max(0,Math.min(z0.length-1,M+b))],c=!0,n=a},h=null,g=b=>{if(b.target.closest&&b.target.closest(".koi-feed, .st-ui"))return;b.preventDefault();let M=b.deltaMode===1?b.deltaY*16:b.deltaMode===2?b.deltaY*window.innerHeight:b.deltaY;p(M/D7)};window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("pointerdown",b=>{b.target.closest&&b.target.closest("button, a, .st-ui")||(h={ly:b.clientY,lx:b.clientX,moved:0,t:performance.now(),v:0,lt:performance.now()})}),window.addEventListener("pointermove",b=>{if(!h)return;let M=b.clientX-h.lx,_=b.clientY-h.ly;h.lx=b.clientX,h.ly=b.clientY;let k=Math.abs(_)>=Math.abs(M)?-_:-M;h.moved+=Math.abs(k);let A=performance.now(),z=k/q7;h.v=h.v*.6+z/Math.max(.008,(A-h.lt)/1e3)*.4,h.lt=A,h.moved>6&&p(z)}),window.addEventListener("pointerup",()=>{let b=h;h=null,b&&b.moved>=10&&performance.now()-b.lt<120&&p(Math.max(-1.6,Math.min(1.6,b.v*.22)))}),window.addEventListener("keydown",b=>{b.key==="ArrowDown"||b.key==="ArrowRight"||b.key==="PageDown"?u(1):(b.key==="ArrowUp"||b.key==="ArrowLeft"||b.key==="PageUp")&&u(-1)});function m(){u(1)}function x(b,M){let _=0;for(;_<qp.length-1&&b>=z0[_+1];)_++;let k=qp[_],A=Zc((b-z0[_])/k.dur),z=wb(A),D=d(b),P=1-Rs(Zc(Math.abs(b-z0[D])/.9)),G=_b(k.petal,z),I=[Math.sin(M*.53+D)*.06,Math.sin(M*.71+D*2)*.05,Math.cos(M*.47+D)*.06],H=D===5?0:P;G=[G[0]+I[0]*H,G[1]+I[1]*H,G[2]+I[2]*H];let ft=k.eye?_b(k.eye,z):k.follow(G),Nt=k.at?k.at(A,G):G;ft=[ft[0]+Math.sin(M*.31)*.025,ft[1]+Math.sin(M*.43+1)*.018,ft[2]+Math.cos(M*.27)*.025];let _t=Qc(E0[_].fov,E0[_+1].fov,Rs(A)),xt=E0[_].look,ut=E0[_+1].look,Yt=Math.hypot(ft[0]-G[0],ft[1]-G[1],ft[2]-G[2]),Se=Qc(xt.aperture,ut.aperture,Rs(A)),Oe=b*1.7+M*.5,oo=[Math.sin(Oe*.37),.8+.2*Math.cos(Oe*.5),Math.cos(Oe*.29)],me=(_===4?1-A:1)*(Oe*1.3)+(_===4?A*.3:0),Ke=_===1?Math.sin(A*Math.PI)*-.07:_===3?Math.sin(A*Math.PI)*.05:0;return{p:G,eye:ft,at:Nt,fov:_t,focus:Yt,aperture:Se,axis:oo,ang:me,roll:Ke,idx:_,u:A,near:D}}function y(b){let M=s===null?0:Math.min(.1,b-s);if(s=b,a=b,!c&&!h&&a-n>H7){let A=d(r);Math.abs(z0[A]-r)<U7&&(r=z0[A])}if(c){let A=Mb(e,r,o,1.2,M,1.4);e=A[0],o=A[1],Math.abs(r-e)<.001&&(e=r,o=0,c=!1)}else{let A=Mb(e,r,o,G7,M,3);e=A[0],o=A[1],Math.abs(r-e)<1e-4&&Math.abs(o)<.001&&(e=r,o=0)}typeof window!="undefined"&&window.__stScroll!==void 0&&/tourdebug/.test(location.search)&&(e=r=window.__stScroll,o=0);let _=x(e,b);_.idx>=3&&!l&&(Ni.petalLure(Vn[0],Vn[2]),l=!0),e>=$p-.02&&!f&&(Ni.petalLand(Vn[0],Vn[2]),f=!0,v=b),e<$p-.3&&f&&(Ni.petalReset(),f=!1),_.idx<3&&l&&(l=!1);let k=Ni.petalState();if(f){let A=wb(Zc((b-v)/7)),z=[Vn[0]-.36,.1,Vn[2]+.5];_.eye=Kc(_.eye,z,A),_.fov=Qc(_.fov,34,A),_.focus=Math.hypot(_.eye[0]-Vn[0],_.eye[1]-Vn[1],_.eye[2]-Vn[2])}return Ni.setGuide({vis:!0,pos:_.p,axis:_.axis,ang:_.ang,size:.07}),{eye:bb(_.eye),target:bb(_.at),fov:_.fov,roll:_.roll,fade:0,pond:f&&k.eaten,shot:f?5:_.near,look:{letterbox:.55,focus:Math.max(.3,_.focus),aperture:_.aperture,vignette:.28,exposure:1,shafts:1}}}return{update:y,tap:m,get scroll(){return e},END:$p}}});var B7=Qm(),ua=Cr(),Jp=Iu(),$1=ua.reflection,j7=!1,Ub=(t,e,o,r,n)=>r+(t-e)*(n-r)/(o-e),tv=()=>Ub(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(tv=()=>Ub(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var Bb=()=>2*Math.atan(Math.tan(tv()*.5)*window.innerHeight/window.innerWidth),W7=f2(),Lf=new W7;Lf.showPanel(0);j7&&document.body.appendChild(Lf.dom);var Mn,rl,Bp,el,jp,_n;function V7(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!V7())throw B7.finish(),Jp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Mn=h2()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:ua.pixelRatio});location.hash==="#list"&&Jp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Jp.show(!1)});rl=Q2()();var X7=dd();Bp=X7(Mn,rl,$1);el=gg()(Mn,rl);jp=wg()(Mn);var zb=qg()(Mn,rl),Ab=Kg()(Mn),Tb=Jg()(Mn),Lb=mx()(Mn),Nb=wx()(Mn),Rb=Ex()(Mn),Ps=Gx()(Mn),Wp=Yd(),jb=dh(),Y7=Tl(),Vp=Qd(),Xp=Zn(),s0=Xh(),Yp=Qx(),Wb=u1(),{A:tl}=$r();_n=Oy()(rl,Bb);var ol=Iy()(Mn,ua),Os=Gy()(Mn),Ob=Uy()(Mn),K7=Wy()(Mn,ua),Q7=Zy()(Mn,ua),Cb=is()(Mn),Pb=k1()(Mn),Ib=fs()(Mn),$b=ii()(Mn),Ea=yb()({fps:_n,paintings:()=>el.interactables(),avatar:Ps,onExit:()=>_n.setPaused(!1)});_n.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=ol);var Cs=[],nl=[],G0=[7,2,1.6];rl.viewer=G0;var Z7=Mn({cull:{enable:!0,face:"back"},uniforms:{view:()=>Cs,proj:()=>nl,yScale:1,mirrorOn:()=>$1?1:0,night:()=>Xp.night,time:Mn.context("time")}}),J7=Mn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),Vb=document.createElement("style");Vb.textContent=`

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
`;document.head.appendChild(Vb);var Yr=document.createElement("button");Yr.className="painting-plaque";Yr.type="button";Yr.setAttribute("aria-label","Read painting");document.body.appendChild(Yr);var or=document.createElement("div");or.className="story-overlay";or.innerHTML=`

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

		${jb.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(or);var Is=document.createElement("div");Is.className="museum-links";Is.innerHTML=jb.icons("museum-link");Is.insertBefore(bp()("museum-link"),Is.firstChild);Is.insertBefore(Wb.button("museum-link"),Is.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>Is.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(Is);var tz=or.querySelector("#story-title"),ez=or.querySelector("#story-body"),Db=or.querySelector("#story-meta"),oz=or.querySelector(".story-contact"),Tf=or.querySelector(".story-visit");Tf.addEventListener("click",t=>{t.target.closest(".visit-btn")&&Ci&&Vp.open(Ci)});var nz=or.querySelector(".story-close"),Ci=null,vr={p:0,target:0,last:0},Xb={title:Wp.title,description:Wp.text,isAbout:!0},Ya=null;function ev(t){t&&(Ci=t,tz.textContent=t.title||"",ez.textContent=t.description||"",Db.textContent=t.isAbout?"":Y7(t),Db.hidden=!!t.isAbout,oz.hidden=!t.isAbout,Tf.innerHTML=t.isAbout?"":Vp.button(t),Tf.hidden=!Tf.innerHTML,Tf.hidden||Vp.warm(t),or.classList.toggle("about-mode",!!t.isAbout),or.classList.add("open"),vr.target=t.isAbout?1:0,Ya=t,Yr.classList.remove("visible"),_n.setPaused(!0))}function ov(){or.classList.remove("open"),vr.target=0,Ci=null,Ya=null,_n.setPaused(!1)}function Yb(t){t&&(t.preventDefault(),t.stopPropagation()),Ya&&ev(Ya)}Yr.addEventListener("pointerup",Yb,!0);Yr.addEventListener("touchend",Yb,{passive:!1,capture:!0});Yr.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),Ci===null&&Ya&&ev(Ya)},!0);nz.addEventListener("click",ov);or.addEventListener("click",t=>{t.target===or&&ov()});window.addEventListener("keydown",t=>{t.code==="Escape"&&or.classList.contains("open")&&ov()});function qb(t,e){let o=e[0],r=e[1],n=e[2];return[t[0]*o+t[4]*r+t[8]*n+t[12],t[1]*o+t[5]*r+t[9]*n+t[13],t[2]*o+t[6]*r+t[10]*n+t[14],t[3]*o+t[7]*r+t[11]*n+t[15]]}function rz(){if(Ci)return;if(Ea.active){Ya=null,Yr.classList.remove("visible");return}let t=el.interactables(),e=_n.forward[0],o=_n.forward[2],r=Math.hypot(e,o)||1,n=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-_n.pos[0],v=i[2]-_n.pos[2],d=-(l*c+v*f),p=Math.abs(l*f-v*c),u=-(e*c+o*f)/r,h=s.side==="end"?11:8,g=(s.width||2)/2;u>.9&&d>.5&&d<h&&p<g+.8&&d<a&&(n=s,a=d)}if(!n){let s=_n.pos[0],i=_n.pos[2];e/r>.85&&s<13.6&&i>tl.z0-.5&&i<tl.z1+.5&&(n=Object.assign({},Xb,{plaqueTitle:Wp.name}))}n?(Ya=n,Yr.textContent=n.isAbout?"ABOUT  \xB7  "+n.plaqueTitle:"READ  \xB7  "+n.title,Yr.classList.add("visible")):(Ya=null,Yr.classList.remove("visible"))}var Rf=bc();function az(){let t=Ps.state;if(!t||!t.glowPos)return null;let e=qb(_n.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=qb(_n.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Kp=null;window.addEventListener("pointerdown",t=>{Kp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=Kp;if(Kp=null,!e||Ci||Ea.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=az();if(!o)return;let r=!!document.pointerLockElement,n=r?window.innerWidth/2:t.clientX,a=r?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(n-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),ev(Xb))},!0);function sz(t){let e=Math.min(Math.max(t-vr.last,0),.1);vr.last=t;let o=e/1.6;if(vr.p=vr.target>vr.p?Math.min(1,vr.p+o):Math.max(0,vr.p-o),vr.p<=0)return;let r=vr.p<.5?2*vr.p*vr.p:1-Math.pow(-2*vr.p+2,2)/2,n=window.innerHeight>window.innerWidth,a=Ps.state,s=a&&a.hipsPos?a.hipsPos[0]:tl.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:tl.zc,c=n?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=n?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=_n.pos,v=_n.forward,d=[l[0],l[1],l[2]],p=[l[0]+v[0],l[1]+v[1],l[2]+v[2]],u=(x,y)=>x.map((b,M)=>b+(y[M]-b)*r),h=[tl.cx-6.2,1.7,tl.zc],g=1-r,m=d.map((x,y)=>g*g*x+2*g*r*h[y]+r*r*c[y]);Rf.lookAt(_n.view(),m,u(p,f),[0,1,0])}var Kb=/[?&]studio\b/.test(location.search);if(Kb){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t);let e=document.createElement("button");e.type="button",e.className="st-ui",e.setAttribute("aria-label","Day or night"),e.textContent="\u263E",t.textContent+=".st-ui { position: fixed; top: 18px; right: 18px; z-index: 30; width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(244,236,223,0.4); background: rgba(12,10,8,0.3); color: #f4ecdf; font-size: 20px; cursor: pointer; backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }",document.body.appendChild(e),e.addEventListener("pointerdown",r=>r.stopPropagation()),e.addEventListener("click",r=>{r.stopPropagation(),Zn().toggle(),setTimeout(()=>{e.textContent=Zn().night>.5?"\u2600":"\u263E"},50)});let o=null;window.addEventListener("pointerdown",r=>{o={x:r.clientX,y:r.clientY,t:performance.now()}}),window.addEventListener("pointerup",r=>{let n=o;o=null,!(!n||Math.hypot(r.clientX-n.x,r.clientY-n.y)>10||performance.now()-n.t>500)&&(r.target.closest&&r.target.closest("button")||Zp.takes(r)||Qp().tap())}),window.addEventListener("keydown",r=>{r.key==="n"?Zn().toggle():r.key===" "&&Qp().tap()})}var Fp=null;function Qp(){return Fp||(Fp=Eb()()),Fp}var Zp=(()=>{let t={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},e=null,o=null,r=null,n=(c,f)=>{r&&(r.textContent=c,r.classList.add("on"),t.hintUntil=f?t.now+f:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),e=document.createElement("div"),e.className="koi-feed",e.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(e),o=e.querySelector(".koi-feed-btn"),r=e.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",f=>{f.stopPropagation(),t.mode==="idle"&&(t.mode="aim",t.holdAt=t.now-t.offset,t.since=t.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),n("Touch the water where it should fall"))})},s=(c,f)=>{let l=Rf.multiply([],nl,Cs),v=Rf.invert([],l);if(!v)return null;let d=c/window.innerWidth*2-1,p=1-f/window.innerHeight*2,u=[0,0,0,0];for(let h=0;h<4;h++)u[h]=v[h]*d+v[4+h]*p+v[8+h]*1+v[12+h];return[u[0]/u[3]-G0[0],u[1]/u[3]-G0[1],u[2]/u[3]-G0[2]]},i=()=>{t.holdAt!==null&&(t.offset=t.now-t.holdAt),t.holdAt=null,t.mode="idle",t.doneShot=t.lastShot,document.body.classList.remove("koi-aim"),r&&r.classList.remove("on")};return{time(c){return t.now=c,t.holdAt!==null?t.holdAt:c-t.offset},update(c){e||a(),c.shot!==t.lastShot&&(t.lastShot=c.shot);let f=ii();t.mode==="idle"?o.classList.toggle("on",!!c.pond&&t.doneShot!==c.shot):t.mode==="aim"?t.now-t.since>40&&i():t.mode==="watch"&&(f.feeding()&&(t.fedTill=t.now),(t.now-t.fedTill>5&&t.now-t.since>8||t.now-t.since>60)&&i()),t.hintUntil&&t.now>t.hintUntil&&(r.classList.remove("on"),t.hintUntil=0)},takes(c){if(t.mode==="idle")return!1;let f=ii(),l=s(c.clientX,c.clientY),v=l&&f.poolHit(G0,l);return v?(f.feedAt(v[0],v[1]),t.fedTill=t.now,t.mode==="aim"&&n("and they come, like embers through the dark",5),t.mode="watch",t.since=t.now,document.body.classList.remove("koi-aim"),!0):(t.mode==="aim"&&n("Upon the water, there\u2026"),!0)}}})(),Ri={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Oi=null,Nf=!1,P1=!1;function iz(t,e,o,r){let n=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(n[0],n[1],n[2])||1,s=[-n[2]/a,0,n[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(r),f=Math.sin(r);return Rf.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function cz(t){let e=window.innerWidth/window.innerHeight,o=ol.shot,r=Ea.active?Ea.update(t):null,n=r?null:Ea.handover(t),a=null,s=Ri;if(r){a=r.camera,s=r.look,Oi=r.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:r.walker||null;Ps.setWalk(i),Nf=!!i,Os.setOpen(r.door||0)}else Oi=Ea.restingLeaf(),Ps.setWalk(null),Nf=!1,Os.setOpen(Ea.restingDoor());if(n){let i=_n.pos,c=_n.forward,f=Ea.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],Bb()*180/Math.PI,0);a=Ea.mix(n.from,f,n.k),s={};for(let l in Ri)s[l]=Array.isArray(Ri[l])?Ri[l]:n.fromLook[l]+(Ri[l]-n.fromLook[l])*n.k}if(a&&r&&(a=Yp.apply(a,t)),Kb&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=Qp().update(Zp.time(t));Zp.update(i),a=i,s=Object.assign({},Ri,i.look)}if(a)iz(Cs,a.eye,a.target,a.roll||0),Rf.perspective(nl,a.fov*Math.PI/180,e,.1,700),G0[0]=a.eye[0],G0[1]=a.eye[1],G0[2]=a.eye[2];else{let i=_n.view(),c=_n.proj();for(let d=0;d<16;d++)Cs[d]=i[d],nl[d]=c[d];let f=i[12],l=i[13],v=i[14];G0[0]=-(i[0]*f+i[1]*l+i[2]*v),G0[1]=-(i[4]*f+i[5]*l+i[6]*v),G0[2]=-(i[8]*f+i[9]*l+i[10]*v)}for(let i in Ri)o[i]=s[i];r&&Yp.pull(o,t)}var Tr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},Gp=[9,9,9,9],Fb=[0,0,0,0],zf=0,Hp=0,Jc=null,Gb=0,Hb=0,Af=0;function lz(t){let e=Math.min(.1,Math.max(0,t-Gb));Gb=t,Tr.focus=ol.shot.focus,Tr.aperture=ua.post>=2?ol.shot.aperture:0;for(let s=0;s<4;s++)Gp[s]+=e,Tr.wake[s][3]=Fb[s]*Math.exp(-Gp[s]/1.1);let o=Oi&&Oi.visible?Oi.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(Jc){let i=[s[0]-Jc[0],s[1]-Jc[1],s[2]-Jc[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let d=0;d<3;d++)Tr.wakeDir[d]+=(i[d]/c-Tr.wakeDir[d])*l;let v=Math.hypot(Tr.wakeDir[0],Tr.wakeDir[1],Tr.wakeDir[2])||1;for(let d=0;d<3;d++)Tr.wakeDir[d]/=v;if(Hp+=e,Hp>.14){Hp=0;let d=Tr.wake[zf];d[0]=s[0],d[1]=s[1],d[2]=s[2],Fb[zf]=Math.min(1,(f-.12)/1.6)*.5,Gp[zf]=0,zf=(zf+1)%4}}}Jc=s}else o||(Jc=null);let r=Os.openNow?Os.openNow():0,n=e>0?(r-Hb)/e:0;Hb=r;let a=Math.max(-1,Math.min(1,n*1.2));Af+=(a-Af)*Math.min(1,e*(Math.abs(a)>Math.abs(Af)?6:.7)),Tr.gust[0]+=Af*5.5*e,Tr.gust[1]=Math.abs(Af)}var Up=0,I1=!1;Mn.frame(function({time:t}){if(document.body.classList.contains("visiting")){Up=0;return}Lf.begin(),Xp.tick(t);let e=Ea.active&&Yp.resting&&Xp.settled&&(ua.isPhone||ua.scale<1||ua.level>0);if(e){if(I1=!I1,I1){Lf.end();return}}else I1=!1;let o=t-Up;Up=t,ua.frame(e?o/2:o),$1=ua.reflection,_n.tick({time:t}),sz(t),el.update(_n.pos,_n.fmouse[1],tv()),rz(),cz(t),s0.update(Cs,nl,G0),Wb.listen(G0),P1=!Nf&&s0.room("stair")&&(!s0.room("court")||G0[0]<.5||G0[2]>30),Ps.setPiano(P1),lz(t),ol.capture(arguments[0],{view:Cs,proj:nl,eye:G0},()=>{Z7(()=>{$1&&s0.floor&&J7(()=>{s0.room("studio",!0)&&$b({reflected:!0}),s0.zone!=="studio"&&(Bp(),zb({reflected:!0}),Cb(),s0.room("stair",!0)&&(Ib({reflected:!0}),Pb({reflected:!0,view:Cs})),s0.room("court",!0)&&Rb(),(P1||s0.room("court",!0)||Nf)&&Ps(),jp(el.batch()),s0.room("street",!0)&&Ab(),s0.room("garden",!0)&&Lb(),s0.room("florence",!0)&&Nb(),Ob(Oi),Os(),Tb(),Os.glass())}),s0.room("studio")&&$b(),s0.zone!=="studio"&&(Bp(),zb(),Cb(),s0.room("stair")&&(Ib(),Pb({view:Cs})),s0.room("court")&&Rb(),(P1||s0.room("court")||Nf)&&Ps(),jp(el.batch()),s0.room("street")&&Ab(),s0.room("garden")&&(Lb(),Q7()),s0.room("florence")&&Nb(),Ob(Oi),Os(),K7(Tr),Tb(),Os.glass())})}),ol.present(),Lf.end()});})();
