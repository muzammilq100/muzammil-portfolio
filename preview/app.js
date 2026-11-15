"use strict";(()=>{var de=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Av=de((Pk,Sv)=>{"use strict";var ls=document.getElementById("loader"),cs=ls&&ls.querySelector(".loader-name"),kc=0,Jl=0,ef=!1,Sw=performance.now(),fs=.06,ss=0,wu=0,wv=!1,Aw=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Tw(e){if(!cs)return;let t=cs.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";cs.style.webkitMaskPosition=n,cs.style.maskPosition=n}function Ev(e){let t=Math.min(.05,wu?(e-wu)/1e3:.016);wu=e;let o=ef?.75:.22+(fs-ss)*1.2;if(ss=Math.min(fs,ss+Math.max(0,o)*t),Aw&&(ss=fs),Tw(ss),ef&&ss>=.999){wv||(wv=!0,setTimeout(kv,650));return}requestAnimationFrame(Ev)}cs&&requestAnimationFrame(Ev);function _v(){let e=kc?Jl/Math.max(kc,24):0;fs=Math.max(fs,Math.min(.9,.06+e*.84))}function kv(){ls&&(ls.classList.add("done"),setTimeout(()=>ls.remove(),1400))}function _u(){ef||(ef=!0,window.__galleryReady=!0,ls&&(fs=1,cs||kv()))}var Mv=null;function Lw(){clearTimeout(Mv),Jl>=kc&&performance.now()-Sw>600&&(Mv=setTimeout(()=>{Jl>=kc&&_u()},450))}setTimeout(_u,2e4);var zw=e=>/(^|\/)(res|images)\//.test(e),Zl=window.fetch.bind(window);async function Nw(e,t){let o=await Zl(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!zw(o))return Zl(e,t);kc++,_v();let n=a=>(Jl++,_v(),Lw(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=Nw(o,t).catch(()=>Zl(e,t)):r=Zl(e,t),r.then(n,a=>{throw n(),a})};Sv.exports={finish:_u}});var ta=de((Ik,Nv)=>{"use strict";var Tv=typeof navigator!="undefined"&&navigator.userAgent||"",Rw=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Za=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Tv)||/Macintosh/.test(Tv)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||Rw,Lv=typeof window!="undefined"&&window.devicePixelRatio||1,ho={isPhone:Za,pixelRatio:Za?Math.min(Lv,1.5):Math.min(Lv,2),reflection:!Za,gardenDetail:Za?0:1,leafShare:Za?.65:1,motion:!Za,post:Za?1:2,level:Za?1:0};ho.scale=1;var Cw=Za?.55:.6,Sc=0,tf=0,Ac=0,Tc=0,hs=1,Lc=0,of=48,us=null,Mu=0;function Pw(e){us={fps:e,scale:ho.scale},ho.scale>.86?ho.scale=.85:ho.reflection?ho.stepDown():ho.scale>.71?ho.scale=.7:ho.stepDown()||(ho.scale=Math.max(Cw,ho.scale-.1))}var zv=!0;try{/[?&]noadapt\b/.test(location.search)&&(zv=!1)}catch(e){}ho.frame=e=>{if(!zv)return;if(!(e>0)||e>1){Sc=0,tf=0;return}if(Sc+=e,tf++,Sc<.75)return;let t=tf/Sc;if(Sc=0,tf=0,Lc>0&&(Lc-=.75,Lc<=0&&(hs=1)),us){if(t<us.fps*1.08&&us.scale>ho.scale){if(++Mu>=2){ho.scale=1,hs=1,Lc=0,of=Math.min(of,t*.85),Mu=0,Ac=0,us=null;return}}else Mu=0;us=null}if(t<of){if(Tc=0,++Ac>=2){if(Ac=0,ho.scale>.61&&ho.climbed){hs=ho.scale-.05,Lc=40,ho.scale=hs,ho.climbed=!1;return}Pw(t)}}else t>Math.max(of*1.15,55)?(Ac=0,++Tc>=6&&ho.scale<hs-.001?(ho.scale=Math.min(hs,ho.scale+.05),ho.climbed=!0,Tc=0):Tc>=6&&(ho.climbed=!1)):(Ac=0,Tc=0)};ho.stepDown=()=>{if(ho.reflection)ho.reflection=!1;else if(ho.gardenDetail>0||ho.motion)ho.gardenDetail=0,ho.motion=!1,ho.leafShare=Math.min(ho.leafShare,.65);else if(ho.post>0)ho.post--;else return!1;return ho.level++,!0};Nv.exports=ho});var Eu=de((Ok,Rv)=>{"use strict";Rv.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var nf=de((Fk,Iv)=>{"use strict";var mr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Cv='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Pv='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';mr.instagramUrl="https://instagram.com/"+mr.instagram;mr.mailUrl="mailto:"+mr.email+"?subject="+encodeURIComponent("Your paintings");mr.icons=e=>`
	<a class="${e}" href="${mr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${mr.instagram}" title="Instagram">${Cv}</a>
	<a class="${e}" href="${mr.mailUrl}" aria-label="Email ${mr.email}" title="Email">${Pv}</a>`;mr.line=e=>`
	<span class="${e}">
		<a href="${mr.instagramUrl}" target="_blank" rel="noopener">${Cv}<span>@${mr.instagram}</span></a>
		<a href="${mr.mailUrl}">${Pv}<span>${mr.email}</span></a>
	</span>`;Iv.exports=mr});var zc=de((Gk,Ov)=>{"use strict";Ov.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var ku=de(($k,$v)=>{"use strict";var Iw=Eu(),Ow=nf(),Fv=zc(),Fw=ta(),yi=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Gw=`
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
`,gr=null;function $w(e){if(gr){gr.hidden=!1,requestAnimationFrame(()=>gr.classList.add("on"));return}let t=document.createElement("style");t.textContent=Gw,document.head.appendChild(t);let o=!Fw.isPhone;gr=document.createElement("div"),gr.className="plist",gr.setAttribute("role","region"),gr.setAttribute("aria-label","All paintings"),gr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${Ow.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${Iw.map(r=>`
			<article class="plist-item" id="${yi(r.slug)}">
				<img loading="lazy" decoding="async" alt="${yi(r.title)}, ${yi(Fv(r))}"
					src="images/web/${yi(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${yi(r.file)}'">
				<p class="plist-meta">${yi(Fv(r))}</p>
				<h2>${yi(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${yi(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>gr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=gr.querySelector(".plist-close");n&&n.addEventListener("click",Gv),document.body.appendChild(gr),requestAnimationFrame(()=>gr.classList.add("on"))}function Gv(){gr&&(gr.classList.remove("on"),setTimeout(()=>{gr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}$v.exports={show:$w,hide:Gv}});var Dv=de((Su,Au)=>{(function(e,t){typeof Su=="object"&&typeof Au!="undefined"?Au.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Su,function(){var e=function(){function t(u){return r.appendChild(u.dom),u}function o(u){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===u?"block":"none";n=u}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(u){u.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var u=(performance||Date).now();if(f.update(u-a,200),u>i+1e3&&(c.update(1e3*s/(u-i),100),i=u,s=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,l=3*s,u=2*s,h=3*s,d=15*s,p=74*s,v=30*s,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(t,l,u),g.fillRect(h,d,p,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,d,p,v),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,d),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",l,u),g.drawImage(m,h+s,d,p-s,v,h,d,p-s,v),g.fillRect(h+p-s,d,s,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+p-s,d,s,i((1-y/b)*v))}}},e})});var qv=de((Tu,Lu)=>{(function(e,t){typeof Tu=="object"&&typeof Lu!="undefined"?Lu.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(Tu,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,E){for(var N=Object.keys(E),Q=0;Q<N.length;++Q)x[N[Q]]=E[N[Q]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var E=new Error("(regl) "+x);throw console.error(E),E}function a(x,E){x||r(E)}function i(x){return x?": "+x:""}function s(x,E,N){x in E||r("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(E).join())}function c(x,E){e(x)||r("invalid parameter type"+i(E)+". must be a typed array")}function f(x,E){switch(E){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,E,N){f(x,E)||r("invalid parameter type"+i(N)+". expected "+E+", got "+typeof x)}function u(x,E){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(E)+". must be a nonnegative integer")}function h(x,E,N){E.indexOf(x)<0&&r("invalid value"+i(N)+". must be one of: "+E)}var d=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function p(x){Object.keys(x).forEach(function(E){d.indexOf(E)<0&&r('invalid regl constructor argument "'+E+'". must be one of '+d)})}function v(x,E){for(x=x+"";x.length<E;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,E){this.number=x,this.line=E,this.errors=[]}function y(x,E,N){this.file=x,this.line=E,this.message=N}function b(){var x=new Error,E=(x.stack||x).toString(),N=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(E);if(N)return N[1];var Q=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(E);return Q?Q[1]:"unknown"}function M(){var x=new Error,E=(x.stack||x).toString(),N=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(E);if(N)return N[1];var Q=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(E);return Q?Q[1]:"unknown"}function k(x,E){var N=x.split(`
`),Q=1,se=0,Y={unknown:new m,0:new m};Y.unknown.name=Y[0].name=E||b(),Y.unknown.lines.push(new g(0,""));for(var ee=0;ee<N.length;++ee){var xe=N[ee],we=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(xe);if(we)switch(we[1]){case"line":var ke=/(\d+)(\s+\d+)?/.exec(we[2]);ke&&(Q=ke[1]|0,ke[2]&&(se=ke[2]|0,se in Y||(Y[se]=new m)));break;case"define":var _e=/SHADER_NAME(_B64)?\s+(.*)$/.exec(we[2]);_e&&(Y[se].name=_e[1]?n(_e[2]):_e[2]);break}Y[se].lines.push(new g(Q++,xe))}return Object.keys(Y).forEach(function(Ae){var Re=Y[Ae];Re.lines.forEach(function(ye){Re.index[ye.number]=ye})}),Y}function z(x){var E=[];return x.split(`
`).forEach(function(N){if(!(N.length<5)){var Q=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(N);Q?E.push(new y(Q[1]|0,Q[2]|0,Q[3].trim())):N.length>0&&E.push(new y("unknown",0,N))}}),E}function R(x,E){E.forEach(function(N){var Q=x[N.file];if(Q){var se=Q.index[N.line];if(se){se.errors.push(N),Q.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(N)})}function D(x,E,N,Q,se){if(!x.getShaderParameter(E,x.COMPILE_STATUS)){var Y=x.getShaderInfoLog(E),ee=Q===x.FRAGMENT_SHADER?"fragment":"vertex";$e(N,"string",ee+" shader source must be a string",se);var xe=k(N,se),we=z(Y);R(xe,we),Object.keys(xe).forEach(function(ke){var _e=xe[ke];if(!_e.hasErrors)return;var Ae=[""],Re=[""];function ye(Te,j){Ae.push(Te),Re.push(j||"")}ye("file number "+ke+": "+_e.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),_e.lines.forEach(function(Te){if(Te.errors.length>0){ye(v(Te.number,4)+"|  ","background-color:yellow; font-weight:bold"),ye(Te.line+o,"color:red; background-color:yellow; font-weight:bold");var j=0;Te.errors.forEach(function(te){var Ee=te.message,Ge=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Ee);if(Ge){var he=Ge[1];switch(Ee=Ge[2],he){case"assign":he="=";break}j=Math.max(Te.line.indexOf(he,j),0)}else j=0;ye(v("| ",6)),ye(v("^^^",j+3)+o,"font-weight:bold"),ye(v("| ",6)),ye(Ee+o,"font-weight:bold")}),ye(v("| ",6)+o)}else ye(v(Te.number,4)+"|  "),ye(Te.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Re[0]=Ae.join("%c"),console.log.apply(console,Re)):console.log(Ae.join(""))}),a.raise("Error compiling "+ee+" shader, "+xe[0].name)}}function q(x,E,N,Q,se){if(!x.getProgramParameter(E,x.LINK_STATUS)){var Y=x.getProgramInfoLog(E),ee=k(N,se),xe=k(Q,se),we='Error linking program with vertex shader, "'+xe[0].name+'", and fragment shader "'+ee[0].name+'"';typeof document!="undefined"?console.log("%c"+we+o+"%c"+Y,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(we+o+Y),a.raise(we)}}function oe(x){x._commandRef=b()}function I(x,E,N,Q){oe(x);function se(we){return we?Q.id(we):0}x._fragId=se(x.static.frag),x._vertId=se(x.static.vert);function Y(we,ke){Object.keys(ke).forEach(function(_e){we[Q.id(_e)]=!0})}var ee=x._uniformSet={};Y(ee,E.static),Y(ee,E.dynamic);var xe=x._attributeSet={};Y(xe,N.static),Y(xe,N.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function ae(x,E){var N=M();r(x+" in command "+(E||b())+(N==="unknown"?"":" called from "+N))}function J(x,E,N){x||ae(E,N||b())}function ne(x,E,N,Q){x in E||ae("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(E).join(),Q||b())}function $e(x,E,N,Q){f(x,E)||ae("invalid parameter type"+i(N)+". expected "+E+", got "+typeof x,Q||b())}function Ye(x){x()}function fe(x,E,N){x.texture?h(x.texture._texture.internalformat,E,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,N,"unsupported renderbuffer format for attachment")}var ve=33071,Fe=9728,ft=9984,Gt=9985,zt=9986,po=9987,gt=5120,Qt=5121,Bo=5122,sr=5123,Qe=5124,vt=5125,Ct=5126,Et=32819,oo=32820,ht=33635,mt=34042,me=36193,Oe={};Oe[gt]=Oe[Qt]=1,Oe[Bo]=Oe[sr]=Oe[me]=Oe[ht]=Oe[Et]=Oe[oo]=2,Oe[Qe]=Oe[vt]=Oe[Ct]=Oe[mt]=4;function kt(x,E){return x===oo||x===Et||x===ht?2:x===mt?4:Oe[x]*E}function tt(x){return!(x&x-1)&&!!x}function at(x,E,N){var Q,se=E.width,Y=E.height,ee=E.channels;a(se>0&&se<=N.maxTextureSize&&Y>0&&Y<=N.maxTextureSize,"invalid texture shape"),(x.wrapS!==ve||x.wrapT!==ve)&&a(tt(se)&&tt(Y),"incompatible wrap mode for texture, both width and height must be power of 2"),E.mipmask===1?se!==1&&Y!==1&&a(x.minFilter!==ft&&x.minFilter!==zt&&x.minFilter!==Gt&&x.minFilter!==po,"min filter requires mipmap"):(a(tt(se)&&tt(Y),"texture must be a square power of 2 to support mipmapping"),a(E.mipmask===(se<<1)-1,"missing or incomplete mipmap data")),E.type===Ct&&(N.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===Fe&&x.magFilter===Fe,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var xe=E.images;for(Q=0;Q<16;++Q)if(xe[Q]){var we=se>>Q,ke=Y>>Q;a(E.mipmask&1<<Q,"missing mipmap data");var _e=xe[Q];if(a(_e.width===we&&_e.height===ke,"invalid shape for mip images"),a(_e.format===E.format&&_e.internalformat===E.internalformat&&_e.type===E.type,"incompatible type for mip image"),!_e.compressed)if(_e.data){var Ae=Math.ceil(kt(_e.type,ee)*we/_e.unpackAlignment)*_e.unpackAlignment;a(_e.data.byteLength===Ae*ke,"invalid data for image, buffer size is inconsistent with image format")}else _e.element||_e.copy}else x.genMipmaps||a((E.mipmask&1<<Q)===0,"extra mipmap data");E.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function vo(x,E,N,Q){var se=x.width,Y=x.height,ee=x.channels;a(se>0&&se<=Q.maxTextureSize&&Y>0&&Y<=Q.maxTextureSize,"invalid texture shape"),a(se===Y,"cube map must be square"),a(E.wrapS===ve&&E.wrapT===ve,"wrap mode not supported by cube map");for(var xe=0;xe<N.length;++xe){var we=N[xe];a(we.width===se&&we.height===Y,"inconsistent cube map face shape"),E.genMipmaps&&(a(!we.compressed,"can not generate mipmap for compressed textures"),a(we.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var ke=we.images,_e=0;_e<16;++_e){var Ae=ke[_e];if(Ae){var Re=se>>_e,ye=Y>>_e;a(we.mipmask&1<<_e,"missing mipmap data"),a(Ae.width===Re&&Ae.height===ye,"invalid shape for mip images"),a(Ae.format===x.format&&Ae.internalformat===x.internalformat&&Ae.type===x.type,"incompatible type for mip image"),Ae.compressed||(Ae.data?a(Ae.data.byteLength===Re*ye*Math.max(kt(Ae.type,ee),Ae.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Ae.element||Ae.copy)}}}}var _=t(a,{optional:Ye,raise:r,commandRaise:ae,command:J,parameter:s,commandParameter:ne,constructor:p,type:l,commandType:$e,isTypedArray:c,nni:u,oneOf:h,shaderError:D,linkError:q,callSite:M,saveCommandRef:oe,saveDrawInfo:I,framebufferFormat:fe,guessCommand:b,texture2D:at,textureCube:vo}),Vt=0,Ht=0,X=5,He=6;function Ke(x,E){this.id=Vt++,this.type=x,this.data=E}function dt(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Pt(x){if(x.length===0)return[];var E=x.charAt(0),N=x.charAt(x.length-1);if(x.length>1&&E===N&&(E==='"'||E==="'"))return['"'+dt(x.substr(1,x.length-2))+'"'];var Q=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(Q)return Pt(x.substr(0,Q.index)).concat(Pt(Q[1])).concat(Pt(x.substr(Q.index+Q[0].length)));var se=x.split(".");if(se.length===1)return['"'+dt(x)+'"'];for(var Y=[],ee=0;ee<se.length;++ee)Y=Y.concat(Pt(se[ee]));return Y}function Xt(x){return"["+Pt(x).join("][")+"]"}function no(x,E){return new Ke(x,Xt(E+""))}function ro(x){return typeof x=="function"&&!x._reglType||x instanceof Ke}function eo(x,E){if(typeof x=="function")return new Ke(Ht,x);if(typeof x=="number"||typeof x=="boolean")return new Ke(X,x);if(Array.isArray(x))return new Ke(He,x.map((N,Q)=>eo(N,E+"["+Q+"]")));if(x instanceof Ke)return x;_(!1,"invalid option type in uniform "+E)}var nt={DynamicVariable:Ke,define:no,isDynamic:ro,unbox:eo,accessor:Xt},bt={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},wt=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Nt(){var x={"":0},E=[""];return{id:function(N){var Q=x[N];return Q||(Q=x[N]=E.length,E.push(N),Q)},str:function(N){return E[N]}}}function Co(x,E,N){var Q=document.createElement("canvas");t(Q.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(Q),x===document.body&&(Q.style.position="absolute",t(x.style,{margin:0,padding:0}));function se(){var xe=window.innerWidth,we=window.innerHeight;if(x!==document.body){var ke=x.getBoundingClientRect();xe=ke.right-ke.left,we=ke.bottom-ke.top}Q.width=N*xe,Q.height=N*we,t(Q.style,{width:xe+"px",height:we+"px"})}var Y;x!==document.body&&typeof ResizeObserver=="function"?(Y=new ResizeObserver(function(){setTimeout(se)}),Y.observe(x)):window.addEventListener("resize",se,!1);function ee(){Y?Y.disconnect():window.removeEventListener("resize",se),x.removeChild(Q)}return se(),{canvas:Q,onDestroy:ee}}function yt(x,E){function N(Q){try{return x.getContext(Q,E)}catch(se){return null}}return N("webgl")||N("experimental-webgl")||N("webgl-experimental")}function to(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function wo(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function Po(x){return typeof x=="string"?x.split():(_(Array.isArray(x),"invalid extension array"),x)}function Ao(x){return typeof x=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function Vr(x){var E=x||{},N,Q,se,Y,ee={},xe=[],we=[],ke=typeof window=="undefined"?1:window.devicePixelRatio,_e=!1,Ae=function(Te){Te&&_.raise(Te)},Re=function(){};if(typeof E=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),N=document.querySelector(E),_(N,"invalid query string for element")):typeof E=="object"?to(E)?N=E:wo(E)?(Y=E,se=Y.canvas):(_.constructor(E),"gl"in E?Y=E.gl:"canvas"in E?se=Ao(E.canvas):"container"in E&&(Q=Ao(E.container)),"attributes"in E&&(ee=E.attributes,_.type(ee,"object","invalid context attributes")),"extensions"in E&&(xe=Po(E.extensions)),"optionalExtensions"in E&&(we=Po(E.optionalExtensions)),"onDone"in E&&(_.type(E.onDone,"function","invalid or missing onDone callback"),Ae=E.onDone),"profile"in E&&(_e=!!E.profile),"pixelRatio"in E&&(ke=+E.pixelRatio,_(ke>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),N&&(N.nodeName.toLowerCase()==="canvas"?se=N:Q=N),!Y){if(!se){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var ye=Co(Q||document.body,Ae,ke);if(!ye)return null;se=ye.canvas,Re=ye.onDestroy}ee.premultipliedAlpha===void 0&&(ee.premultipliedAlpha=!0),Y=yt(se,ee)}return Y?{gl:Y,canvas:se,container:Q,extensions:xe,optionalExtensions:we,pixelRatio:ke,profile:_e,onDone:Ae,onDestroy:Re}:(Re(),Ae("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Xr(x,E){var N={};function Q(ee){_.type(ee,"string","extension name must be string");var xe=ee.toLowerCase(),we;try{we=N[xe]=x.getExtension(xe)}catch(ke){}return!!we}for(var se=0;se<E.extensions.length;++se){var Y=E.extensions[se];if(!Q(Y))return E.onDestroy(),E.onDone('"'+Y+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return E.optionalExtensions.forEach(Q),{extensions:N,restore:function(){Object.keys(N).forEach(function(ee){if(N[ee]&&!Q(ee))throw new Error("(regl): error restoring extension "+ee)})}}}function xt(x,E){for(var N=Array(x),Q=0;Q<x;++Q)N[Q]=E(Q);return N}var Jt=5120,ln=5121,Qn=5122,St=5123,To=5124,fn=5125,Lo=5126;function Va(x){for(var E=16;E<=1<<28;E*=16)if(x<=E)return E;return 0}function Xa(x){var E,N;return E=(x>65535)<<4,x>>>=E,N=(x>255)<<3,x>>>=N,E|=N,N=(x>15)<<2,x>>>=N,E|=N,N=(x>3)<<1,x>>>=N,E|=N,E|x>>1}function Ca(){var x=xt(8,function(){return[]});function E(Y){var ee=Va(Y),xe=x[Xa(ee)>>2];return xe.length>0?xe.pop():new ArrayBuffer(ee)}function N(Y){x[Xa(Y.byteLength)>>2].push(Y)}function Q(Y,ee){var xe=null;switch(Y){case Jt:xe=new Int8Array(E(ee),0,ee);break;case ln:xe=new Uint8Array(E(ee),0,ee);break;case Qn:xe=new Int16Array(E(2*ee),0,ee);break;case St:xe=new Uint16Array(E(2*ee),0,ee);break;case To:xe=new Int32Array(E(4*ee),0,ee);break;case fn:xe=new Uint32Array(E(4*ee),0,ee);break;case Lo:xe=new Float32Array(E(4*ee),0,ee);break;default:return null}return xe.length!==ee?xe.subarray(0,ee):xe}function se(Y){N(Y.buffer)}return{alloc:E,free:N,allocType:Q,freeType:se}}var U=Ca();U.zero=Ca();var ge=3408,rt=3410,it=3411,qt=3412,Uo=3413,Zn=3414,ma=3415,Tn=33901,Yr=33902,bn=3379,fo=3386,Jn=34921,tn=36347,er=36348,Kr=35661,ga=35660,Io=34930,Qr=36349,hn=34076,xa=34024,mo=7936,Wo=7937,Zr=7938,Ki=35724,Pa=34047,Qi=36063,Ml=34852,di=3553,B0=34067,ic=34069,Ah=33984,Ya=6408,sc=5126,cr=5121,cc=36160,Zi=36053,cb=36064,lb=16384,fb=function(x,E){var N=1;E.ext_texture_filter_anisotropic&&(N=x.getParameter(Pa));var Q=1,se=1;E.webgl_draw_buffers&&(Q=x.getParameter(Ml),se=x.getParameter(Qi));var Y=!!E.oes_texture_float;if(Y){var ee=x.createTexture();x.bindTexture(di,ee),x.texImage2D(di,0,Ya,1,1,0,Ya,sc,null);var xe=x.createFramebuffer();if(x.bindFramebuffer(cc,xe),x.framebufferTexture2D(cc,cb,di,ee,0),x.bindTexture(di,null),x.checkFramebufferStatus(cc)!==Zi)Y=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(lb);var we=U.allocType(sc,4);x.readPixels(0,0,1,1,Ya,sc,we),x.getError()?Y=!1:(x.deleteFramebuffer(xe),x.deleteTexture(ee),Y=we[0]===1),U.freeType(we)}}var ke=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),_e=!0;if(!ke){var Ae=x.createTexture(),Re=U.allocType(cr,36);x.activeTexture(Ah),x.bindTexture(B0,Ae),x.texImage2D(ic,0,Ya,3,3,0,Ya,cr,Re),U.freeType(Re),x.bindTexture(B0,null),x.deleteTexture(Ae),_e=!x.getError()}return{colorBits:[x.getParameter(rt),x.getParameter(it),x.getParameter(qt),x.getParameter(Uo)],depthBits:x.getParameter(Zn),stencilBits:x.getParameter(ma),subpixelBits:x.getParameter(ge),extensions:Object.keys(E).filter(function(ye){return!!E[ye]}),maxAnisotropic:N,maxDrawbuffers:Q,maxColorAttachments:se,pointSizeDims:x.getParameter(Tn),lineWidthDims:x.getParameter(Yr),maxViewportDims:x.getParameter(fo),maxCombinedTextureUnits:x.getParameter(Kr),maxCubeMapSize:x.getParameter(hn),maxRenderbufferSize:x.getParameter(xa),maxTextureUnits:x.getParameter(Io),maxTextureSize:x.getParameter(bn),maxAttributes:x.getParameter(Jn),maxVertexUniforms:x.getParameter(tn),maxVertexTextureUnits:x.getParameter(ga),maxVaryingVectors:x.getParameter(er),maxFragmentUniforms:x.getParameter(Qr),glsl:x.getParameter(Ki),renderer:x.getParameter(Wo),vendor:x.getParameter(mo),version:x.getParameter(Zr),readFloat:Y,npotTextureCube:_e}};function ya(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var Fr=function(x){return Object.keys(x).map(function(E){return x[E]})},El={shape:pb,flatten:db};function hb(x,E,N){for(var Q=0;Q<E;++Q)N[Q]=x[Q]}function ub(x,E,N,Q){for(var se=0,Y=0;Y<E;++Y)for(var ee=x[Y],xe=0;xe<N;++xe)Q[se++]=ee[xe]}function Cd(x,E,N,Q,se,Y){for(var ee=Y,xe=0;xe<E;++xe)for(var we=x[xe],ke=0;ke<N;++ke)for(var _e=we[ke],Ae=0;Ae<Q;++Ae)se[ee++]=_e[Ae]}function Pd(x,E,N,Q,se){for(var Y=1,ee=N+1;ee<E.length;++ee)Y*=E[ee];var xe=E[N];if(E.length-N===4){var we=E[N+1],ke=E[N+2],_e=E[N+3];for(ee=0;ee<xe;++ee)Cd(x[ee],we,ke,_e,Q,se),se+=Y}else for(ee=0;ee<xe;++ee)Pd(x[ee],E,N+1,Q,se),se+=Y}function db(x,E,N,Q){var se=1;if(E.length)for(var Y=0;Y<E.length;++Y)se*=E[Y];else se=0;var ee=Q||U.allocType(N,se);switch(E.length){case 0:break;case 1:hb(x,E[0],ee);break;case 2:ub(x,E[0],E[1],ee);break;case 3:Cd(x,E[0],E[1],E[2],ee,0);break;default:Pd(x,E,0,ee,0)}return ee}function pb(x){for(var E=[],N=x;N.length;N=N[0])E.push(N.length);return E}var Th={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},vb=5120,mb=5122,gb=5124,xb=5121,yb=5123,bb=5125,wb=5126,_b=5126,Ji={int8:vb,int16:mb,int32:gb,uint8:xb,uint16:yb,uint32:bb,float:wb,float32:_b},Mb=35048,Eb=35040,kl={dynamic:Mb,stream:Eb,static:35044},Lh=El.flatten,Id=El.shape,Od=35044,kb=35040,zh=5121,Nh=5126,pi=[];pi[5120]=1,pi[5122]=2,pi[5124]=4,pi[5121]=1,pi[5123]=2,pi[5125]=4,pi[5126]=4;function Sl(x){return Th[Object.prototype.toString.call(x)]|0}function Fd(x,E){for(var N=0;N<E.length;++N)x[N]=E[N]}function Gd(x,E,N,Q,se,Y,ee){for(var xe=0,we=0;we<N;++we)for(var ke=0;ke<Q;++ke)x[xe++]=E[se*we+Y*ke+ee]}function Sb(x,E,N,Q){var se=0,Y={};function ee(j){this.id=se++,this.buffer=x.createBuffer(),this.type=j,this.usage=Od,this.byteLength=0,this.dimension=1,this.dtype=zh,this.persistentData=null,N.profile&&(this.stats={size:0})}ee.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},ee.prototype.destroy=function(){Re(this)};var xe=[];function we(j,te){var Ee=xe.pop();return Ee||(Ee=new ee(j)),Ee.bind(),Ae(Ee,te,kb,0,1,!1),Ee}function ke(j){xe.push(j)}function _e(j,te,Ee){j.byteLength=te.byteLength,x.bufferData(j.type,te,Ee)}function Ae(j,te,Ee,Ge,he,De){var pe;if(j.usage=Ee,Array.isArray(te)){if(j.dtype=Ge||Nh,te.length>0){var Le;if(Array.isArray(te[0])){pe=Id(te);for(var ue=1,ze=1;ze<pe.length;++ze)ue*=pe[ze];j.dimension=ue,Le=Lh(te,pe,j.dtype),_e(j,Le,Ee),De?j.persistentData=Le:U.freeType(Le)}else if(typeof te[0]=="number"){j.dimension=he;var ot=U.allocType(j.dtype,te.length);Fd(ot,te),_e(j,ot,Ee),De?j.persistentData=ot:U.freeType(ot)}else e(te[0])?(j.dimension=te[0].length,j.dtype=Ge||Sl(te[0])||Nh,Le=Lh(te,[te.length,te[0].length],j.dtype),_e(j,Le,Ee),De?j.persistentData=Le:U.freeType(Le)):_.raise("invalid buffer data")}}else if(e(te))j.dtype=Ge||Sl(te),j.dimension=he,_e(j,te,Ee),De&&(j.persistentData=new Uint8Array(new Uint8Array(te.buffer)));else if(ya(te)){pe=te.shape;var _t=te.stride,Ce=te.offset,Se=0,le=0,pt=0,It=0;pe.length===1?(Se=pe[0],le=1,pt=_t[0],It=0):pe.length===2?(Se=pe[0],le=pe[1],pt=_t[0],It=_t[1]):_.raise("invalid shape"),j.dtype=Ge||Sl(te.data)||Nh,j.dimension=le;var Ue=U.allocType(j.dtype,Se*le);Gd(Ue,te.data,Se,le,pt,It,Ce),_e(j,Ue,Ee),De?j.persistentData=Ue:U.freeType(Ue)}else te instanceof ArrayBuffer?(j.dtype=zh,j.dimension=he,_e(j,te,Ee),De&&(j.persistentData=new Uint8Array(new Uint8Array(te)))):_.raise("invalid buffer data")}function Re(j){E.bufferCount--,Q(j);var te=j.buffer;_(te,"buffer must not be deleted already"),x.deleteBuffer(te),j.buffer=null,delete Y[j.id]}function ye(j,te,Ee,Ge){E.bufferCount++;var he=new ee(te);Y[he.id]=he;function De(ue){var ze=Od,ot=null,_t=0,Ce=0,Se=1;return Array.isArray(ue)||e(ue)||ya(ue)||ue instanceof ArrayBuffer?ot=ue:typeof ue=="number"?_t=ue|0:ue&&(_.type(ue,"object","buffer arguments must be an object, a number or an array"),"data"in ue&&(_(ot===null||Array.isArray(ot)||e(ot)||ya(ot),"invalid data for buffer"),ot=ue.data),"usage"in ue&&(_.parameter(ue.usage,kl,"invalid buffer usage"),ze=kl[ue.usage]),"type"in ue&&(_.parameter(ue.type,Ji,"invalid buffer type"),Ce=Ji[ue.type]),"dimension"in ue&&(_.type(ue.dimension,"number","invalid dimension"),Se=ue.dimension|0),"length"in ue&&(_.nni(_t,"buffer length must be a nonnegative integer"),_t=ue.length|0)),he.bind(),ot?Ae(he,ot,ze,Ce,Se,Ge):(_t&&x.bufferData(he.type,_t,ze),he.dtype=Ce||zh,he.usage=ze,he.dimension=Se,he.byteLength=_t),N.profile&&(he.stats.size=he.byteLength*pi[he.dtype]),De}function pe(ue,ze){_(ze+ue.byteLength<=he.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+ue.byteLength+" starting from offset "+ze+" to a buffer of size "+he.byteLength),x.bufferSubData(he.type,ze,ue)}function Le(ue,ze){var ot=(ze||0)|0,_t;if(he.bind(),e(ue)||ue instanceof ArrayBuffer)pe(ue,ot);else if(Array.isArray(ue)){if(ue.length>0)if(typeof ue[0]=="number"){var Ce=U.allocType(he.dtype,ue.length);Fd(Ce,ue),pe(Ce,ot),U.freeType(Ce)}else if(Array.isArray(ue[0])||e(ue[0])){_t=Id(ue);var Se=Lh(ue,_t,he.dtype);pe(Se,ot),U.freeType(Se)}else _.raise("invalid buffer data")}else if(ya(ue)){_t=ue.shape;var le=ue.stride,pt=0,It=0,Ue=0,jt=0;_t.length===1?(pt=_t[0],It=1,Ue=le[0],jt=0):_t.length===2?(pt=_t[0],It=_t[1],Ue=le[0],jt=le[1]):_.raise("invalid shape");var Mt=Array.isArray(ue.data)?he.dtype:Sl(ue.data),$t=U.allocType(Mt,pt*It);Gd($t,ue.data,pt,It,Ue,jt,ue.offset),pe($t,ot),U.freeType($t)}else _.raise("invalid data for buffer subdata");return De}return Ee||De(j),De._reglType="buffer",De._buffer=he,De.subdata=Le,N.profile&&(De.stats=he.stats),De.destroy=function(){Re(he)},De}function Te(){Fr(Y).forEach(function(j){j.buffer=x.createBuffer(),x.bindBuffer(j.type,j.buffer),x.bufferData(j.type,j.persistentData||j.byteLength,j.usage)})}return N.profile&&(E.getTotalBufferSize=function(){var j=0;return Object.keys(Y).forEach(function(te){j+=Y[te].stats.size}),j}),{create:ye,createStream:we,destroyStream:ke,clear:function(){Fr(Y).forEach(Re),xe.forEach(Re)},getBuffer:function(j){return j&&j._buffer instanceof ee?j._buffer:null},restore:Te,_initBuffer:Ae}}var Ab=0,Tb=0,Lb=1,zb=1,Nb=4,Rb=4,U0={points:Ab,point:Tb,lines:Lb,line:zb,triangles:Nb,triangle:Rb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Cb=0,Pb=1,lc=4,Ib=5120,W0=5121,$d=5122,V0=5123,Dd=5124,e0=5125,Rh=34963,Ob=35040,Fb=35044;function Gb(x,E,N,Q){var se={},Y=0,ee={uint8:W0,uint16:V0};E.oes_element_index_uint&&(ee.uint32=e0);function xe(Te){this.id=Y++,se[this.id]=this,this.buffer=Te,this.primType=lc,this.vertCount=0,this.type=0}xe.prototype.bind=function(){this.buffer.bind()};var we=[];function ke(Te){var j=we.pop();return j||(j=new xe(N.create(null,Rh,!0,!1)._buffer)),Ae(j,Te,Ob,-1,-1,0,0),j}function _e(Te){we.push(Te)}function Ae(Te,j,te,Ee,Ge,he,De){Te.buffer.bind();var pe;if(j){var Le=De;!De&&(!e(j)||ya(j)&&!e(j.data))&&(Le=E.oes_element_index_uint?e0:V0),N._initBuffer(Te.buffer,j,te,Le,3)}else x.bufferData(Rh,he,te),Te.buffer.dtype=pe||W0,Te.buffer.usage=te,Te.buffer.dimension=3,Te.buffer.byteLength=he;if(pe=De,!De){switch(Te.buffer.dtype){case W0:case Ib:pe=W0;break;case V0:case $d:pe=V0;break;case e0:case Dd:pe=e0;break;default:_.raise("unsupported type for element array")}Te.buffer.dtype=pe}Te.type=pe,_(pe!==e0||!!E.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var ue=Ge;ue<0&&(ue=Te.buffer.byteLength,pe===V0?ue>>=1:pe===e0&&(ue>>=2)),Te.vertCount=ue;var ze=Ee;if(Ee<0){ze=lc;var ot=Te.buffer.dimension;ot===1&&(ze=Cb),ot===2&&(ze=Pb),ot===3&&(ze=lc)}Te.primType=ze}function Re(Te){Q.elementsCount--,_(Te.buffer!==null,"must not double destroy elements"),delete se[Te.id],Te.buffer.destroy(),Te.buffer=null}function ye(Te,j){var te=N.create(null,Rh,!0),Ee=new xe(te._buffer);Q.elementsCount++;function Ge(he){if(!he)te(),Ee.primType=lc,Ee.vertCount=0,Ee.type=W0;else if(typeof he=="number")te(he),Ee.primType=lc,Ee.vertCount=he|0,Ee.type=W0;else{var De=null,pe=Fb,Le=-1,ue=-1,ze=0,ot=0;Array.isArray(he)||e(he)||ya(he)?De=he:(_.type(he,"object","invalid arguments for elements"),"data"in he&&(De=he.data,_(Array.isArray(De)||e(De)||ya(De),"invalid data for element buffer")),"usage"in he&&(_.parameter(he.usage,kl,"invalid element buffer usage"),pe=kl[he.usage]),"primitive"in he&&(_.parameter(he.primitive,U0,"invalid element buffer primitive"),Le=U0[he.primitive]),"count"in he&&(_(typeof he.count=="number"&&he.count>=0,"invalid vertex count for elements"),ue=he.count|0),"type"in he&&(_.parameter(he.type,ee,"invalid buffer type"),ot=ee[he.type]),"length"in he?ze=he.length|0:(ze=ue,ot===V0||ot===$d?ze*=2:(ot===e0||ot===Dd)&&(ze*=4))),Ae(Ee,De,pe,Le,ue,ze,ot)}return Ge}return Ge(Te),Ge._reglType="elements",Ge._elements=Ee,Ge.subdata=function(he,De){return te.subdata(he,De),Ge},Ge.destroy=function(){Re(Ee)},Ge}return{create:ye,createStream:ke,destroyStream:_e,getElements:function(Te){return typeof Te=="function"&&Te._elements instanceof xe?Te._elements:null},clear:function(){Fr(se).forEach(Re)}}}var qd=new Float32Array(1),$b=new Uint32Array(qd.buffer),Db=5123;function Hd(x){for(var E=U.allocType(Db,x.length),N=0;N<x.length;++N)if(isNaN(x[N]))E[N]=65535;else if(x[N]===1/0)E[N]=31744;else if(x[N]===-1/0)E[N]=64512;else{qd[0]=x[N];var Q=$b[0],se=Q>>>31<<15,Y=(Q<<1>>>24)-127,ee=Q>>13&1023;if(Y<-24)E[N]=se;else if(Y<-14){var xe=-14-Y;E[N]=se+(ee+1024>>xe)}else Y>15?E[N]=se+31744:E[N]=se+(Y+15<<10)+ee}return E}function on(x){return Array.isArray(x)||e(x)}var jd=function(x){return!(x&x-1)&&!!x},qb=34467,Ia=3553,Ch=34067,Al=34069,t0=6408,Ph=6406,Tl=6407,fc=6409,Ll=6410,Bd=32854,Ih=32855,Ud=36194,Hb=32819,jb=32820,Bb=33635,Ub=34042,Oh=6402,zl=34041,Fh=35904,Gh=35906,X0=36193,$h=33776,Dh=33777,qh=33778,Hh=33779,Wd=35986,Vd=35987,Xd=34798,Yd=35840,Kd=35841,Qd=35842,Zd=35843,Jd=36196,Y0=5121,jh=5123,Bh=5125,hc=5126,Wb=10242,Vb=10243,Xb=10497,Uh=33071,Yb=33648,Kb=10240,Qb=10241,Wh=9728,Zb=9729,Vh=9984,ep=9985,tp=9986,Xh=9987,Jb=33170,Nl=4352,e5=4353,t5=4354,o5=34046,n5=3317,r5=37440,a5=37441,i5=37443,op=37444,uc=33984,s5=[Vh,tp,ep,Xh],Rl=[0,fc,Ll,Tl,t0],Jr={};Jr[fc]=Jr[Ph]=Jr[Oh]=1,Jr[zl]=Jr[Ll]=2,Jr[Tl]=Jr[Fh]=3,Jr[t0]=Jr[Gh]=4;function K0(x){return"[object "+x+"]"}var np=K0("HTMLCanvasElement"),rp=K0("OffscreenCanvas"),ap=K0("CanvasRenderingContext2D"),ip=K0("ImageBitmap"),sp=K0("HTMLImageElement"),cp=K0("HTMLVideoElement"),c5=Object.keys(Th).concat([np,rp,ap,ip,sp,cp]),Q0=[];Q0[Y0]=1,Q0[hc]=4,Q0[X0]=2,Q0[jh]=2,Q0[Bh]=4;var jn=[];jn[Bd]=2,jn[Ih]=2,jn[Ud]=2,jn[zl]=4,jn[$h]=.5,jn[Dh]=.5,jn[qh]=1,jn[Hh]=1,jn[Wd]=.5,jn[Vd]=1,jn[Xd]=1,jn[Yd]=.5,jn[Kd]=.25,jn[Qd]=.5,jn[Zd]=.25,jn[Jd]=.5;function lp(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function fp(x){if(!Array.isArray(x))return!1;var E=x.length;return!(E===0||!on(x[0]))}function o0(x){return Object.prototype.toString.call(x)}function hp(x){return o0(x)===np}function up(x){return o0(x)===rp}function l5(x){return o0(x)===ap}function f5(x){return o0(x)===ip}function h5(x){return o0(x)===sp}function u5(x){return o0(x)===cp}function Yh(x){if(!x)return!1;var E=o0(x);return c5.indexOf(E)>=0?!0:lp(x)||fp(x)||ya(x)}function dp(x){return Th[Object.prototype.toString.call(x)]|0}function d5(x,E){var N=E.length;switch(x.type){case Y0:case jh:case Bh:case hc:var Q=U.allocType(x.type,N);Q.set(E),x.data=Q;break;case X0:x.data=Hd(E);break;default:_.raise("unsupported texture type, must specify a typed array")}}function pp(x,E){return U.allocType(x.type===X0?hc:x.type,E)}function vp(x,E){x.type===X0?(x.data=Hd(E),U.freeType(E)):x.data=E}function p5(x,E,N,Q,se,Y){for(var ee=x.width,xe=x.height,we=x.channels,ke=ee*xe*we,_e=pp(x,ke),Ae=0,Re=0;Re<xe;++Re)for(var ye=0;ye<ee;++ye)for(var Te=0;Te<we;++Te)_e[Ae++]=E[N*ye+Q*Re+se*Te+Y];vp(x,_e)}function Cl(x,E,N,Q,se,Y){var ee;if(typeof jn[x]!="undefined"?ee=jn[x]:ee=Jr[x]*Q0[E],Y&&(ee*=6),se){for(var xe=0,we=N;we>=1;)xe+=ee*we*we,we/=2;return xe}else return ee*N*Q}function v5(x,E,N,Q,se,Y,ee){var xe={"don't care":Nl,"dont care":Nl,nice:t5,fast:e5},we={repeat:Xb,clamp:Uh,mirror:Yb},ke={nearest:Wh,linear:Zb},_e=t({mipmap:Xh,"nearest mipmap nearest":Vh,"linear mipmap nearest":ep,"nearest mipmap linear":tp,"linear mipmap linear":Xh},ke),Ae={none:0,browser:op},Re={uint8:Y0,rgba4:Hb,rgb565:Bb,"rgb5 a1":jb},ye={alpha:Ph,luminance:fc,"luminance alpha":Ll,rgb:Tl,rgba:t0,rgba4:Bd,"rgb5 a1":Ih,rgb565:Ud},Te={};E.ext_srgb&&(ye.srgb=Fh,ye.srgba=Gh),E.oes_texture_float&&(Re.float32=Re.float=hc),E.oes_texture_half_float&&(Re.float16=Re["half float"]=X0),E.webgl_depth_texture&&(t(ye,{depth:Oh,"depth stencil":zl}),t(Re,{uint16:jh,uint32:Bh,"depth stencil":Ub})),E.webgl_compressed_texture_s3tc&&t(Te,{"rgb s3tc dxt1":$h,"rgba s3tc dxt1":Dh,"rgba s3tc dxt3":qh,"rgba s3tc dxt5":Hh}),E.webgl_compressed_texture_atc&&t(Te,{"rgb atc":Wd,"rgba atc explicit alpha":Vd,"rgba atc interpolated alpha":Xd}),E.webgl_compressed_texture_pvrtc&&t(Te,{"rgb pvrtc 4bppv1":Yd,"rgb pvrtc 2bppv1":Kd,"rgba pvrtc 4bppv1":Qd,"rgba pvrtc 2bppv1":Zd}),E.webgl_compressed_texture_etc1&&(Te["rgb etc1"]=Jd);var j=Array.prototype.slice.call(x.getParameter(qb));Object.keys(Te).forEach(function(L){var Z=Te[L];j.indexOf(Z)>=0&&(ye[L]=Z)});var te=Object.keys(ye);N.textureFormats=te;var Ee=[];Object.keys(ye).forEach(function(L){var Z=ye[L];Ee[Z]=L});var Ge=[];Object.keys(Re).forEach(function(L){var Z=Re[L];Ge[Z]=L});var he=[];Object.keys(ke).forEach(function(L){var Z=ke[L];he[Z]=L});var De=[];Object.keys(_e).forEach(function(L){var Z=_e[L];De[Z]=L});var pe=[];Object.keys(we).forEach(function(L){var Z=we[L];pe[Z]=L});var Le=te.reduce(function(L,Z){var V=ye[Z];return V===fc||V===Ph||V===fc||V===Ll||V===Oh||V===zl||E.ext_srgb&&(V===Fh||V===Gh)?L[V]=V:V===Ih||Z.indexOf("rgba")>=0?L[V]=t0:L[V]=Tl,L},{});function ue(){this.internalformat=t0,this.format=t0,this.type=Y0,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=op,this.width=0,this.height=0,this.channels=0}function ze(L,Z){L.internalformat=Z.internalformat,L.format=Z.format,L.type=Z.type,L.compressed=Z.compressed,L.premultiplyAlpha=Z.premultiplyAlpha,L.flipY=Z.flipY,L.unpackAlignment=Z.unpackAlignment,L.colorSpace=Z.colorSpace,L.width=Z.width,L.height=Z.height,L.channels=Z.channels}function ot(L,Z){if(!(typeof Z!="object"||!Z)){if("premultiplyAlpha"in Z&&(_.type(Z.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),L.premultiplyAlpha=Z.premultiplyAlpha),"flipY"in Z&&(_.type(Z.flipY,"boolean","invalid texture flip"),L.flipY=Z.flipY),"alignment"in Z&&(_.oneOf(Z.alignment,[1,2,4,8],"invalid texture unpack alignment"),L.unpackAlignment=Z.alignment),"colorSpace"in Z&&(_.parameter(Z.colorSpace,Ae,"invalid colorSpace"),L.colorSpace=Ae[Z.colorSpace]),"type"in Z){var V=Z.type;_(E.oes_texture_float||!(V==="float"||V==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(E.oes_texture_half_float||!(V==="half float"||V==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(E.webgl_depth_texture||!(V==="uint16"||V==="uint32"||V==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(V,Re,"invalid texture type"),L.type=Re[V]}var je=L.width,Bt=L.height,A=L.channels,w=!1;"shape"in Z?(_(Array.isArray(Z.shape)&&Z.shape.length>=2,"shape must be an array"),je=Z.shape[0],Bt=Z.shape[1],Z.shape.length===3&&(A=Z.shape[2],_(A>0&&A<=4,"invalid number of channels"),w=!0),_(je>=0&&je<=N.maxTextureSize,"invalid width"),_(Bt>=0&&Bt<=N.maxTextureSize,"invalid height")):("radius"in Z&&(je=Bt=Z.radius,_(je>=0&&je<=N.maxTextureSize,"invalid radius")),"width"in Z&&(je=Z.width,_(je>=0&&je<=N.maxTextureSize,"invalid width")),"height"in Z&&(Bt=Z.height,_(Bt>=0&&Bt<=N.maxTextureSize,"invalid height")),"channels"in Z&&(A=Z.channels,_(A>0&&A<=4,"invalid number of channels"),w=!0)),L.width=je|0,L.height=Bt|0,L.channels=A|0;var P=!1;if("format"in Z){var H=Z.format;_(E.webgl_depth_texture||!(H==="depth"||H==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(H,ye,"invalid texture format");var B=L.internalformat=ye[H];L.format=Le[B],H in Re&&("type"in Z||(L.type=Re[H])),H in Te&&(L.compressed=!0),P=!0}!w&&P?L.channels=Jr[L.format]:w&&!P?L.channels!==Rl[L.format]&&(L.format=L.internalformat=Rl[L.channels]):P&&w&&_(L.channels===Jr[L.format],"number of channels inconsistent with specified format")}}function _t(L){x.pixelStorei(r5,L.flipY),x.pixelStorei(a5,L.premultiplyAlpha),x.pixelStorei(i5,L.colorSpace),x.pixelStorei(n5,L.unpackAlignment)}function Ce(){ue.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Se(L,Z){var V=null;if(Yh(Z)?V=Z:Z&&(_.type(Z,"object","invalid pixel data type"),ot(L,Z),"x"in Z&&(L.xOffset=Z.x|0),"y"in Z&&(L.yOffset=Z.y|0),Yh(Z.data)&&(V=Z.data)),_(!L.compressed||V instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),Z.copy){_(!V,"can not specify copy and data field for the same texture");var je=se.viewportWidth,Bt=se.viewportHeight;L.width=L.width||je-L.xOffset,L.height=L.height||Bt-L.yOffset,L.needsCopy=!0,_(L.xOffset>=0&&L.xOffset<je&&L.yOffset>=0&&L.yOffset<Bt&&L.width>0&&L.width<=je&&L.height>0&&L.height<=Bt,"copy texture read out of bounds")}else if(!V)L.width=L.width||1,L.height=L.height||1,L.channels=L.channels||4;else if(e(V))L.channels=L.channels||4,L.data=V,!("type"in Z)&&L.type===Y0&&(L.type=dp(V));else if(lp(V))L.channels=L.channels||4,d5(L,V),L.alignment=1,L.needsFree=!0;else if(ya(V)){var A=V.data;!Array.isArray(A)&&L.type===Y0&&(L.type=dp(A));var w=V.shape,P=V.stride,H,B,F,O,G,T;w.length===3?(F=w[2],T=P[2]):(_(w.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,T=1),H=w[0],B=w[1],O=P[0],G=P[1],L.alignment=1,L.width=H,L.height=B,L.channels=F,L.format=L.internalformat=Rl[F],L.needsFree=!0,p5(L,A,O,G,T,V.offset)}else if(hp(V)||up(V)||l5(V))hp(V)||up(V)?L.element=V:L.element=V.canvas,L.width=L.element.width,L.height=L.element.height,L.channels=4;else if(f5(V))L.element=V,L.width=V.width,L.height=V.height,L.channels=4;else if(h5(V))L.element=V,L.width=V.naturalWidth,L.height=V.naturalHeight,L.channels=4;else if(u5(V))L.element=V,L.width=V.videoWidth,L.height=V.videoHeight,L.channels=4;else if(fp(V)){var C=L.width||V[0].length,S=L.height||V.length,$=L.channels;on(V[0][0])?$=$||V[0][0].length:$=$||1;for(var W=El.shape(V),ie=1,ce=0;ce<W.length;++ce)ie*=W[ce];var re=pp(L,ie);El.flatten(V,W,"",re),vp(L,re),L.alignment=1,L.width=C,L.height=S,L.channels=$,L.format=L.internalformat=Rl[$],L.needsFree=!0}L.type===hc?_(N.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):L.type===X0&&_(N.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function le(L,Z,V){var je=L.element,Bt=L.data,A=L.internalformat,w=L.format,P=L.type,H=L.width,B=L.height;_t(L),je?x.texImage2D(Z,V,w,w,P,je):L.compressed?x.compressedTexImage2D(Z,V,A,H,B,0,Bt):L.needsCopy?(Q(),x.copyTexImage2D(Z,V,w,L.xOffset,L.yOffset,H,B,0)):x.texImage2D(Z,V,w,H,B,0,w,P,Bt||null)}function pt(L,Z,V,je,Bt){var A=L.element,w=L.data,P=L.internalformat,H=L.format,B=L.type,F=L.width,O=L.height;_t(L),A?x.texSubImage2D(Z,Bt,V,je,H,B,A):L.compressed?x.compressedTexSubImage2D(Z,Bt,V,je,P,F,O,w):L.needsCopy?(Q(),x.copyTexSubImage2D(Z,Bt,V,je,L.xOffset,L.yOffset,F,O)):x.texSubImage2D(Z,Bt,V,je,F,O,H,B,w)}var It=[];function Ue(){return It.pop()||new Ce}function jt(L){L.needsFree&&U.freeType(L.data),Ce.call(L),It.push(L)}function Mt(){ue.call(this),this.genMipmaps=!1,this.mipmapHint=Nl,this.mipmask=0,this.images=Array(16)}function $t(L,Z,V){var je=L.images[0]=Ue();L.mipmask=1,je.width=L.width=Z,je.height=L.height=V,je.channels=L.channels=4}function co(L,Z){var V=null;if(Yh(Z))V=L.images[0]=Ue(),ze(V,L),Se(V,Z),L.mipmask=1;else if(ot(L,Z),Array.isArray(Z.mipmap))for(var je=Z.mipmap,Bt=0;Bt<je.length;++Bt)V=L.images[Bt]=Ue(),ze(V,L),V.width>>=Bt,V.height>>=Bt,Se(V,je[Bt]),L.mipmask|=1<<Bt;else V=L.images[0]=Ue(),ze(V,L),Se(V,Z),L.mipmask=1;ze(L,L.images[0]),L.compressed&&(L.internalformat===$h||L.internalformat===Dh||L.internalformat===qh||L.internalformat===Hh)&&_(L.width%4===0&&L.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function dn(L,Z){for(var V=L.images,je=0;je<V.length;++je){if(!V[je])return;le(V[je],Z,je)}}var Ln=[];function Yt(){var L=Ln.pop()||new Mt;ue.call(L),L.mipmask=0;for(var Z=0;Z<16;++Z)L.images[Z]=null;return L}function wn(L){for(var Z=L.images,V=0;V<Z.length;++V)Z[V]&&jt(Z[V]),Z[V]=null;Ln.push(L)}function Fo(){this.minFilter=Wh,this.magFilter=Wh,this.wrapS=Uh,this.wrapT=Uh,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Nl}function pn(L,Z){if("min"in Z){var V=Z.min;_.parameter(V,_e),L.minFilter=_e[V],s5.indexOf(L.minFilter)>=0&&!("faces"in Z)&&(L.genMipmaps=!0)}if("mag"in Z){var je=Z.mag;_.parameter(je,ke),L.magFilter=ke[je]}var Bt=L.wrapS,A=L.wrapT;if("wrap"in Z){var w=Z.wrap;typeof w=="string"?(_.parameter(w,we),Bt=A=we[w]):Array.isArray(w)&&(_.parameter(w[0],we),_.parameter(w[1],we),Bt=we[w[0]],A=we[w[1]])}else{if("wrapS"in Z){var P=Z.wrapS;_.parameter(P,we),Bt=we[P]}if("wrapT"in Z){var H=Z.wrapT;_.parameter(H,we),A=we[H]}}if(L.wrapS=Bt,L.wrapT=A,"anisotropic"in Z){var B=Z.anisotropic;_(typeof B=="number"&&B>=1&&B<=N.maxAnisotropic,"aniso samples must be between 1 and "),L.anisotropic=Z.anisotropic}if("mipmap"in Z){var F=!1;switch(typeof Z.mipmap){case"string":_.parameter(Z.mipmap,xe,"invalid mipmap hint"),L.mipmapHint=xe[Z.mipmap],L.genMipmaps=!0,F=!0;break;case"boolean":F=L.genMipmaps=Z.mipmap;break;case"object":_(Array.isArray(Z.mipmap),"invalid mipmap type"),L.genMipmaps=!1,F=!0;break;default:_.raise("invalid mipmap type")}F&&!("min"in Z)&&(L.minFilter=Vh)}}function _n(L,Z){x.texParameteri(Z,Qb,L.minFilter),x.texParameteri(Z,Kb,L.magFilter),x.texParameteri(Z,Wb,L.wrapS),x.texParameteri(Z,Vb,L.wrapT),E.ext_texture_filter_anisotropic&&x.texParameteri(Z,o5,L.anisotropic),L.genMipmaps&&(x.hint(Jb,L.mipmapHint),x.generateMipmap(Z))}var Mn=0,On={},Bn=N.maxTextureUnits,nn=Array(Bn).map(function(){return null});function Ot(L){ue.call(this),this.mipmask=0,this.internalformat=t0,this.id=Mn++,this.refCount=1,this.target=L,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Fo,ee.profile&&(this.stats={size:0})}function Un(L){x.activeTexture(uc),x.bindTexture(L.target,L.texture)}function go(){var L=nn[0];L?x.bindTexture(L.target,L.texture):x.bindTexture(Ia,null)}function st(L){var Z=L.texture;_(Z,"must not double destroy texture");var V=L.unit,je=L.target;V>=0&&(x.activeTexture(uc+V),x.bindTexture(je,null),nn[V]=null),x.deleteTexture(Z),L.texture=null,L.params=null,L.pixels=null,L.refCount=0,delete On[L.id],Y.textureCount--}t(Ot.prototype,{bind:function(){var L=this;L.bindCount+=1;var Z=L.unit;if(Z<0){for(var V=0;V<Bn;++V){var je=nn[V];if(je){if(je.bindCount>0)continue;je.unit=-1}nn[V]=L,Z=V;break}Z>=Bn&&_.raise("insufficient number of texture units"),ee.profile&&Y.maxTextureUnits<Z+1&&(Y.maxTextureUnits=Z+1),L.unit=Z,x.activeTexture(uc+Z),x.bindTexture(L.target,L.texture)}return Z},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&st(this)}});function Wt(L,Z){var V=new Ot(Ia);On[V.id]=V,Y.textureCount++;function je(w,P){var H=V.texInfo;Fo.call(H);var B=Yt();return typeof w=="number"?typeof P=="number"?$t(B,w|0,P|0):$t(B,w|0,w|0):w?(_.type(w,"object","invalid arguments to regl.texture"),pn(H,w),co(B,w)):$t(B,1,1),H.genMipmaps&&(B.mipmask=(B.width<<1)-1),V.mipmask=B.mipmask,ze(V,B),_.texture2D(H,B,N),V.internalformat=B.internalformat,je.width=B.width,je.height=B.height,Un(V),dn(B,Ia),_n(H,Ia),go(),wn(B),ee.profile&&(V.stats.size=Cl(V.internalformat,V.type,B.width,B.height,H.genMipmaps,!1)),je.format=Ee[V.internalformat],je.type=Ge[V.type],je.mag=he[H.magFilter],je.min=De[H.minFilter],je.wrapS=pe[H.wrapS],je.wrapT=pe[H.wrapT],je}function Bt(w,P,H,B){_(!!w,"must specify image data");var F=P|0,O=H|0,G=B|0,T=Ue();return ze(T,V),T.width=0,T.height=0,Se(T,w),T.width=T.width||(V.width>>G)-F,T.height=T.height||(V.height>>G)-O,_(V.type===T.type&&V.format===T.format&&V.internalformat===T.internalformat,"incompatible format for texture.subimage"),_(F>=0&&O>=0&&F+T.width<=V.width&&O+T.height<=V.height,"texture.subimage write out of bounds"),_(V.mipmask&1<<G,"missing mipmap data"),_(T.data||T.element||T.needsCopy,"missing image data"),Un(V),pt(T,Ia,F,O,G),go(),jt(T),je}function A(w,P){var H=w|0,B=P|0||H;if(H===V.width&&B===V.height)return je;je.width=V.width=H,je.height=V.height=B,Un(V);for(var F=0;V.mipmask>>F;++F){var O=H>>F,G=B>>F;if(!O||!G)break;x.texImage2D(Ia,F,V.format,O,G,0,V.format,V.type,null)}return go(),ee.profile&&(V.stats.size=Cl(V.internalformat,V.type,H,B,!1,!1)),je}return je(L,Z),je.subimage=Bt,je.resize=A,je._reglType="texture2d",je._texture=V,ee.profile&&(je.stats=V.stats),je.destroy=function(){V.decRef()},je}function ao(L,Z,V,je,Bt,A){var w=new Ot(Ch);On[w.id]=w,Y.cubeCount++;var P=new Array(6);function H(O,G,T,C,S,$){var W,ie=w.texInfo;for(Fo.call(ie),W=0;W<6;++W)P[W]=Yt();if(typeof O=="number"||!O){var ce=O|0||1;for(W=0;W<6;++W)$t(P[W],ce,ce)}else if(typeof O=="object")if(G)co(P[0],O),co(P[1],G),co(P[2],T),co(P[3],C),co(P[4],S),co(P[5],$);else if(pn(ie,O),ot(w,O),"faces"in O){var re=O.faces;for(_(Array.isArray(re)&&re.length===6,"cube faces must be a length 6 array"),W=0;W<6;++W)_(typeof re[W]=="object"&&!!re[W],"invalid input for cube map face"),ze(P[W],w),co(P[W],re[W])}else for(W=0;W<6;++W)co(P[W],O);else _.raise("invalid arguments to cube map");for(ze(w,P[0]),N.npotTextureCube||_(jd(w.width)&&jd(w.height),"your browser does not support non power or two texture dimensions"),ie.genMipmaps?w.mipmask=(P[0].width<<1)-1:w.mipmask=P[0].mipmask,_.textureCube(w,ie,P,N),w.internalformat=P[0].internalformat,H.width=P[0].width,H.height=P[0].height,Un(w),W=0;W<6;++W)dn(P[W],Al+W);for(_n(ie,Ch),go(),ee.profile&&(w.stats.size=Cl(w.internalformat,w.type,H.width,H.height,ie.genMipmaps,!0)),H.format=Ee[w.internalformat],H.type=Ge[w.type],H.mag=he[ie.magFilter],H.min=De[ie.minFilter],H.wrapS=pe[ie.wrapS],H.wrapT=pe[ie.wrapT],W=0;W<6;++W)wn(P[W]);return H}function B(O,G,T,C,S){_(!!G,"must specify image data"),_(typeof O=="number"&&O===(O|0)&&O>=0&&O<6,"invalid face");var $=T|0,W=C|0,ie=S|0,ce=Ue();return ze(ce,w),ce.width=0,ce.height=0,Se(ce,G),ce.width=ce.width||(w.width>>ie)-$,ce.height=ce.height||(w.height>>ie)-W,_(w.type===ce.type&&w.format===ce.format&&w.internalformat===ce.internalformat,"incompatible format for texture.subimage"),_($>=0&&W>=0&&$+ce.width<=w.width&&W+ce.height<=w.height,"texture.subimage write out of bounds"),_(w.mipmask&1<<ie,"missing mipmap data"),_(ce.data||ce.element||ce.needsCopy,"missing image data"),Un(w),pt(ce,Al+O,$,W,ie),go(),jt(ce),H}function F(O){var G=O|0;if(G!==w.width){H.width=w.width=G,H.height=w.height=G,Un(w);for(var T=0;T<6;++T)for(var C=0;w.mipmask>>C;++C)x.texImage2D(Al+T,C,w.format,G>>C,G>>C,0,w.format,w.type,null);return go(),ee.profile&&(w.stats.size=Cl(w.internalformat,w.type,H.width,H.height,!1,!0)),H}}return H(L,Z,V,je,Bt,A),H.subimage=B,H.resize=F,H._reglType="textureCube",H._texture=w,ee.profile&&(H.stats=w.stats),H.destroy=function(){w.decRef()},H}function rn(){for(var L=0;L<Bn;++L)x.activeTexture(uc+L),x.bindTexture(Ia,null),nn[L]=null;Fr(On).forEach(st),Y.cubeCount=0,Y.textureCount=0}ee.profile&&(Y.getTotalTextureSize=function(){var L=0;return Object.keys(On).forEach(function(Z){L+=On[Z].stats.size}),L});function Fa(){for(var L=0;L<Bn;++L){var Z=nn[L];Z&&(Z.bindCount=0,Z.unit=-1,nn[L]=null)}Fr(On).forEach(function(V){V.texture=x.createTexture(),x.bindTexture(V.target,V.texture);for(var je=0;je<32;++je)if(V.mipmask&1<<je)if(V.target===Ia)x.texImage2D(Ia,je,V.internalformat,V.width>>je,V.height>>je,0,V.internalformat,V.type,null);else for(var Bt=0;Bt<6;++Bt)x.texImage2D(Al+Bt,je,V.internalformat,V.width>>je,V.height>>je,0,V.internalformat,V.type,null);_n(V.texInfo,V.target)})}function l0(){for(var L=0;L<Bn;++L){var Z=nn[L];Z&&(Z.bindCount=0,Z.unit=-1,nn[L]=null),x.activeTexture(uc+L),x.bindTexture(Ia,null),x.bindTexture(Ch,null)}}return{create2D:Wt,createCube:ao,clear:rn,getTexture:function(L){return null},restore:Fa,refresh:l0}}var vi=36161,Pl=32854,mp=32855,gp=36194,xp=33189,yp=36168,bp=34041,wp=35907,_p=34836,Mp=34842,Ep=34843,ba=[];ba[Pl]=2,ba[mp]=2,ba[gp]=2,ba[xp]=2,ba[yp]=1,ba[bp]=4,ba[wp]=4,ba[_p]=16,ba[Mp]=8,ba[Ep]=6;function kp(x,E,N){return ba[x]*E*N}var m5=function(x,E,N,Q,se){var Y={rgba4:Pl,rgb565:gp,"rgb5 a1":mp,depth:xp,stencil:yp,"depth stencil":bp};E.ext_srgb&&(Y.srgba=wp),E.ext_color_buffer_half_float&&(Y.rgba16f=Mp,Y.rgb16f=Ep),E.webgl_color_buffer_float&&(Y.rgba32f=_p);var ee=[];Object.keys(Y).forEach(function(ye){var Te=Y[ye];ee[Te]=ye});var xe=0,we={};function ke(ye){this.id=xe++,this.refCount=1,this.renderbuffer=ye,this.format=Pl,this.width=0,this.height=0,se.profile&&(this.stats={size:0})}ke.prototype.decRef=function(){--this.refCount<=0&&_e(this)};function _e(ye){var Te=ye.renderbuffer;_(Te,"must not double destroy renderbuffer"),x.bindRenderbuffer(vi,null),x.deleteRenderbuffer(Te),ye.renderbuffer=null,ye.refCount=0,delete we[ye.id],Q.renderbufferCount--}function Ae(ye,Te){var j=new ke(x.createRenderbuffer());we[j.id]=j,Q.renderbufferCount++;function te(Ge,he){var De=0,pe=0,Le=Pl;if(typeof Ge=="object"&&Ge){var ue=Ge;if("shape"in ue){var ze=ue.shape;_(Array.isArray(ze)&&ze.length>=2,"invalid renderbuffer shape"),De=ze[0]|0,pe=ze[1]|0}else"radius"in ue&&(De=pe=ue.radius|0),"width"in ue&&(De=ue.width|0),"height"in ue&&(pe=ue.height|0);"format"in ue&&(_.parameter(ue.format,Y,"invalid renderbuffer format"),Le=Y[ue.format])}else typeof Ge=="number"?(De=Ge|0,typeof he=="number"?pe=he|0:pe=De):Ge?_.raise("invalid arguments to renderbuffer constructor"):De=pe=1;if(_(De>0&&pe>0&&De<=N.maxRenderbufferSize&&pe<=N.maxRenderbufferSize,"invalid renderbuffer size"),!(De===j.width&&pe===j.height&&Le===j.format))return te.width=j.width=De,te.height=j.height=pe,j.format=Le,x.bindRenderbuffer(vi,j.renderbuffer),x.renderbufferStorage(vi,Le,De,pe),_(x.getError()===0,"invalid render buffer format"),se.profile&&(j.stats.size=kp(j.format,j.width,j.height)),te.format=ee[j.format],te}function Ee(Ge,he){var De=Ge|0,pe=he|0||De;return De===j.width&&pe===j.height||(_(De>0&&pe>0&&De<=N.maxRenderbufferSize&&pe<=N.maxRenderbufferSize,"invalid renderbuffer size"),te.width=j.width=De,te.height=j.height=pe,x.bindRenderbuffer(vi,j.renderbuffer),x.renderbufferStorage(vi,j.format,De,pe),_(x.getError()===0,"invalid render buffer format"),se.profile&&(j.stats.size=kp(j.format,j.width,j.height))),te}return te(ye,Te),te.resize=Ee,te._reglType="renderbuffer",te._renderbuffer=j,se.profile&&(te.stats=j.stats),te.destroy=function(){j.decRef()},te}se.profile&&(Q.getTotalRenderbufferSize=function(){var ye=0;return Object.keys(we).forEach(function(Te){ye+=we[Te].stats.size}),ye});function Re(){Fr(we).forEach(function(ye){ye.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(vi,ye.renderbuffer),x.renderbufferStorage(vi,ye.format,ye.width,ye.height)}),x.bindRenderbuffer(vi,null)}return{create:Ae,clear:function(){Fr(we).forEach(_e)},restore:Re}},Ka=36160,Kh=36161,n0=3553,Il=34069,Sp=36064,Ap=36096,Tp=36128,Lp=33306,zp=36053,g5=36054,x5=36055,y5=36057,b5=36061,w5=36193,_5=5121,M5=5126,Np=6407,Rp=6408,E5=6402,k5=[Np,Rp],Qh=[];Qh[Rp]=4,Qh[Np]=3;var Ol=[];Ol[_5]=1,Ol[M5]=4,Ol[w5]=2;var S5=32854,A5=32855,T5=36194,L5=33189,z5=36168,Cp=34041,N5=35907,R5=34836,C5=34842,P5=34843,I5=[S5,A5,T5,N5,C5,P5,R5],Z0={};Z0[zp]="complete",Z0[g5]="incomplete attachment",Z0[y5]="incomplete dimensions",Z0[x5]="incomplete, missing attachment",Z0[b5]="unsupported";function O5(x,E,N,Q,se,Y){var ee={cur:null,next:null,dirty:!1,setFBO:null},xe=["rgba"],we=["rgba4","rgb565","rgb5 a1"];E.ext_srgb&&we.push("srgba"),E.ext_color_buffer_half_float&&we.push("rgba16f","rgb16f"),E.webgl_color_buffer_float&&we.push("rgba32f");var ke=["uint8"];E.oes_texture_half_float&&ke.push("half float","float16"),E.oes_texture_float&&ke.push("float","float32");function _e(Ce,Se,le){this.target=Ce,this.texture=Se,this.renderbuffer=le;var pt=0,It=0;Se?(pt=Se.width,It=Se.height):le&&(pt=le.width,It=le.height),this.width=pt,this.height=It}function Ae(Ce){Ce&&(Ce.texture&&Ce.texture._texture.decRef(),Ce.renderbuffer&&Ce.renderbuffer._renderbuffer.decRef())}function Re(Ce,Se,le){if(Ce)if(Ce.texture){var pt=Ce.texture._texture,It=Math.max(1,pt.width),Ue=Math.max(1,pt.height);_(It===Se&&Ue===le,"inconsistent width/height for supplied texture"),pt.refCount+=1}else{var jt=Ce.renderbuffer._renderbuffer;_(jt.width===Se&&jt.height===le,"inconsistent width/height for renderbuffer"),jt.refCount+=1}}function ye(Ce,Se){Se&&(Se.texture?x.framebufferTexture2D(Ka,Ce,Se.target,Se.texture._texture.texture,0):x.framebufferRenderbuffer(Ka,Ce,Kh,Se.renderbuffer._renderbuffer.renderbuffer))}function Te(Ce){var Se=n0,le=null,pt=null,It=Ce;typeof Ce=="object"&&(It=Ce.data,"target"in Ce&&(Se=Ce.target|0)),_.type(It,"function","invalid attachment data");var Ue=It._reglType;return Ue==="texture2d"?(le=It,_(Se===n0)):Ue==="textureCube"?(le=It,_(Se>=Il&&Se<Il+6,"invalid cube map target")):Ue==="renderbuffer"?(pt=It,Se=Kh):_.raise("invalid regl object for attachment"),new _e(Se,le,pt)}function j(Ce,Se,le,pt,It){if(le){var Ue=Q.create2D({width:Ce,height:Se,format:pt,type:It});return Ue._texture.refCount=0,new _e(n0,Ue,null)}else{var jt=se.create({width:Ce,height:Se,format:pt});return jt._renderbuffer.refCount=0,new _e(Kh,null,jt)}}function te(Ce){return Ce&&(Ce.texture||Ce.renderbuffer)}function Ee(Ce,Se,le){Ce&&(Ce.texture?Ce.texture.resize(Se,le):Ce.renderbuffer&&Ce.renderbuffer.resize(Se,le),Ce.width=Se,Ce.height=le)}var Ge=0,he={};function De(){this.id=Ge++,he[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function pe(Ce){Ce.colorAttachments.forEach(Ae),Ae(Ce.depthAttachment),Ae(Ce.stencilAttachment),Ae(Ce.depthStencilAttachment)}function Le(Ce){var Se=Ce.framebuffer;_(Se,"must not double destroy framebuffer"),x.deleteFramebuffer(Se),Ce.framebuffer=null,Y.framebufferCount--,delete he[Ce.id]}function ue(Ce){var Se;x.bindFramebuffer(Ka,Ce.framebuffer);var le=Ce.colorAttachments;for(Se=0;Se<le.length;++Se)ye(Sp+Se,le[Se]);for(Se=le.length;Se<N.maxColorAttachments;++Se)x.framebufferTexture2D(Ka,Sp+Se,n0,null,0);x.framebufferTexture2D(Ka,Lp,n0,null,0),x.framebufferTexture2D(Ka,Ap,n0,null,0),x.framebufferTexture2D(Ka,Tp,n0,null,0),ye(Ap,Ce.depthAttachment),ye(Tp,Ce.stencilAttachment),ye(Lp,Ce.depthStencilAttachment);var pt=x.checkFramebufferStatus(Ka);!x.isContextLost()&&pt!==zp&&_.raise("framebuffer configuration not supported, status = "+Z0[pt]),x.bindFramebuffer(Ka,ee.next?ee.next.framebuffer:null),ee.cur=ee.next,x.getError()}function ze(Ce,Se){var le=new De;Y.framebufferCount++;function pt(Ue,jt){var Mt;_(ee.next!==le,"can not update framebuffer which is currently in use");var $t=0,co=0,dn=!0,Ln=!0,Yt=null,wn=!0,Fo="rgba",pn="uint8",_n=1,Mn=null,On=null,Bn=null,nn=!1;if(typeof Ue=="number")$t=Ue|0,co=jt|0||$t;else if(!Ue)$t=co=1;else{_.type(Ue,"object","invalid arguments for framebuffer");var Ot=Ue;if("shape"in Ot){var Un=Ot.shape;_(Array.isArray(Un)&&Un.length>=2,"invalid shape for framebuffer"),$t=Un[0],co=Un[1]}else"radius"in Ot&&($t=co=Ot.radius),"width"in Ot&&($t=Ot.width),"height"in Ot&&(co=Ot.height);("color"in Ot||"colors"in Ot)&&(Yt=Ot.color||Ot.colors,Array.isArray(Yt)&&_(Yt.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),Yt||("colorCount"in Ot&&(_n=Ot.colorCount|0,_(_n>0,"invalid color buffer count")),"colorTexture"in Ot&&(wn=!!Ot.colorTexture,Fo="rgba4"),"colorType"in Ot&&(pn=Ot.colorType,wn?(_(E.oes_texture_float||!(pn==="float"||pn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(E.oes_texture_half_float||!(pn==="half float"||pn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):pn==="half float"||pn==="float16"?(_(E.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Fo="rgba16f"):(pn==="float"||pn==="float32")&&(_(E.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Fo="rgba32f"),_.oneOf(pn,ke,"invalid color type")),"colorFormat"in Ot&&(Fo=Ot.colorFormat,xe.indexOf(Fo)>=0?wn=!0:we.indexOf(Fo)>=0?wn=!1:wn?_.oneOf(Ot.colorFormat,xe,"invalid color format for texture"):_.oneOf(Ot.colorFormat,we,"invalid color format for renderbuffer"))),("depthTexture"in Ot||"depthStencilTexture"in Ot)&&(nn=!!(Ot.depthTexture||Ot.depthStencilTexture),_(!nn||E.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Ot&&(typeof Ot.depth=="boolean"?dn=Ot.depth:(Mn=Ot.depth,Ln=!1)),"stencil"in Ot&&(typeof Ot.stencil=="boolean"?Ln=Ot.stencil:(On=Ot.stencil,dn=!1)),"depthStencil"in Ot&&(typeof Ot.depthStencil=="boolean"?dn=Ln=Ot.depthStencil:(Bn=Ot.depthStencil,dn=!1,Ln=!1))}var go=null,st=null,Wt=null,ao=null;if(Array.isArray(Yt))go=Yt.map(Te);else if(Yt)go=[Te(Yt)];else for(go=new Array(_n),Mt=0;Mt<_n;++Mt)go[Mt]=j($t,co,wn,Fo,pn);_(E.webgl_draw_buffers||go.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(go.length<=N.maxColorAttachments,"too many color attachments, not supported"),$t=$t||go[0].width,co=co||go[0].height,Mn?st=Te(Mn):dn&&!Ln&&(st=j($t,co,nn,"depth","uint32")),On?Wt=Te(On):Ln&&!dn&&(Wt=j($t,co,!1,"stencil","uint8")),Bn?ao=Te(Bn):!Mn&&!On&&Ln&&dn&&(ao=j($t,co,nn,"depth stencil","depth stencil")),_(!!Mn+!!On+!!Bn<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var rn=null;for(Mt=0;Mt<go.length;++Mt)if(Re(go[Mt],$t,co),_(!go[Mt]||go[Mt].texture&&k5.indexOf(go[Mt].texture._texture.format)>=0||go[Mt].renderbuffer&&I5.indexOf(go[Mt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Mt+" is invalid"),go[Mt]&&go[Mt].texture){var Fa=Qh[go[Mt].texture._texture.format]*Ol[go[Mt].texture._texture.type];rn===null?rn=Fa:_(rn===Fa,"all color attachments much have the same number of bits per pixel.")}return Re(st,$t,co),_(!st||st.texture&&st.texture._texture.format===E5||st.renderbuffer&&st.renderbuffer._renderbuffer.format===L5,"invalid depth attachment for framebuffer object"),Re(Wt,$t,co),_(!Wt||Wt.renderbuffer&&Wt.renderbuffer._renderbuffer.format===z5,"invalid stencil attachment for framebuffer object"),Re(ao,$t,co),_(!ao||ao.texture&&ao.texture._texture.format===Cp||ao.renderbuffer&&ao.renderbuffer._renderbuffer.format===Cp,"invalid depth-stencil attachment for framebuffer object"),pe(le),le.width=$t,le.height=co,le.colorAttachments=go,le.depthAttachment=st,le.stencilAttachment=Wt,le.depthStencilAttachment=ao,pt.color=go.map(te),pt.depth=te(st),pt.stencil=te(Wt),pt.depthStencil=te(ao),pt.width=le.width,pt.height=le.height,ue(le),pt}function It(Ue,jt){_(ee.next!==le,"can not resize a framebuffer which is currently in use");var Mt=Math.max(Ue|0,1),$t=Math.max(jt|0||Mt,1);if(Mt===le.width&&$t===le.height)return pt;for(var co=le.colorAttachments,dn=0;dn<co.length;++dn)Ee(co[dn],Mt,$t);return Ee(le.depthAttachment,Mt,$t),Ee(le.stencilAttachment,Mt,$t),Ee(le.depthStencilAttachment,Mt,$t),le.width=pt.width=Mt,le.height=pt.height=$t,ue(le),pt}return pt(Ce,Se),t(pt,{resize:It,_reglType:"framebuffer",_framebuffer:le,destroy:function(){Le(le),pe(le)},use:function(Ue){ee.setFBO({framebuffer:pt},Ue)}})}function ot(Ce){var Se=Array(6);function le(It){var Ue;_(Se.indexOf(ee.next)<0,"can not update framebuffer which is currently in use");var jt={color:null},Mt=0,$t=null,co="rgba",dn="uint8",Ln=1;if(typeof It=="number")Mt=It|0;else if(!It)Mt=1;else{_.type(It,"object","invalid arguments for framebuffer");var Yt=It;if("shape"in Yt){var wn=Yt.shape;_(Array.isArray(wn)&&wn.length>=2,"invalid shape for framebuffer"),_(wn[0]===wn[1],"cube framebuffer must be square"),Mt=wn[0]}else"radius"in Yt&&(Mt=Yt.radius|0),"width"in Yt?(Mt=Yt.width|0,"height"in Yt&&_(Yt.height===Mt,"must be square")):"height"in Yt&&(Mt=Yt.height|0);("color"in Yt||"colors"in Yt)&&($t=Yt.color||Yt.colors,Array.isArray($t)&&_($t.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),$t||("colorCount"in Yt&&(Ln=Yt.colorCount|0,_(Ln>0,"invalid color buffer count")),"colorType"in Yt&&(_.oneOf(Yt.colorType,ke,"invalid color type"),dn=Yt.colorType),"colorFormat"in Yt&&(co=Yt.colorFormat,_.oneOf(Yt.colorFormat,xe,"invalid color format for texture"))),"depth"in Yt&&(jt.depth=Yt.depth),"stencil"in Yt&&(jt.stencil=Yt.stencil),"depthStencil"in Yt&&(jt.depthStencil=Yt.depthStencil)}var Fo;if($t)if(Array.isArray($t))for(Fo=[],Ue=0;Ue<$t.length;++Ue)Fo[Ue]=$t[Ue];else Fo=[$t];else{Fo=Array(Ln);var pn={radius:Mt,format:co,type:dn};for(Ue=0;Ue<Ln;++Ue)Fo[Ue]=Q.createCube(pn)}for(jt.color=Array(Fo.length),Ue=0;Ue<Fo.length;++Ue){var _n=Fo[Ue];_(typeof _n=="function"&&_n._reglType==="textureCube","invalid cube map"),Mt=Mt||_n.width,_(_n.width===Mt&&_n.height===Mt,"invalid cube map shape"),jt.color[Ue]={target:Il,data:Fo[Ue]}}for(Ue=0;Ue<6;++Ue){for(var Mn=0;Mn<Fo.length;++Mn)jt.color[Mn].target=Il+Ue;Ue>0&&(jt.depth=Se[0].depth,jt.stencil=Se[0].stencil,jt.depthStencil=Se[0].depthStencil),Se[Ue]?Se[Ue](jt):Se[Ue]=ze(jt)}return t(le,{width:Mt,height:Mt,color:Fo})}function pt(It){var Ue,jt=It|0;if(_(jt>0&&jt<=N.maxCubeMapSize,"invalid radius for cube fbo"),jt===le.width)return le;var Mt=le.color;for(Ue=0;Ue<Mt.length;++Ue)Mt[Ue].resize(jt);for(Ue=0;Ue<6;++Ue)Se[Ue].resize(jt);return le.width=le.height=jt,le}return le(Ce),t(le,{faces:Se,resize:pt,_reglType:"framebufferCube",destroy:function(){Se.forEach(function(It){It.destroy()})}})}function _t(){ee.cur=null,ee.next=null,ee.dirty=!0,Fr(he).forEach(function(Ce){Ce.framebuffer=x.createFramebuffer(),ue(Ce)})}return t(ee,{getFramebuffer:function(Ce){if(typeof Ce=="function"&&Ce._reglType==="framebuffer"){var Se=Ce._framebuffer;if(Se instanceof De)return Se}return null},create:ze,createCube:ot,clear:function(){Fr(he).forEach(Le)},restore:_t})}var F5=5126,Pp=34962;function Zh(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=F5,this.offset=0,this.stride=0,this.divisor=0}function G5(x,E,N,Q,se){for(var Y=N.maxAttributes,ee=new Array(Y),xe=0;xe<Y;++xe)ee[xe]=new Zh;var we=0,ke={},_e={Record:Zh,scope:{},state:ee,currentVAO:null,targetVAO:null,restore:Re()?he:function(){},createVAO:De,getVAO:Te,destroyBuffer:Ae,setVAO:Re()?j:te,clear:Re()?Ee:function(){}};function Ae(pe){for(var Le=0;Le<ee.length;++Le){var ue=ee[Le];ue.buffer===pe&&(x.disableVertexAttribArray(Le),ue.buffer=null)}}function Re(){return E.oes_vertex_array_object}function ye(){return E.angle_instanced_arrays}function Te(pe){return typeof pe=="function"&&pe._vao?pe._vao:null}function j(pe){if(pe!==_e.currentVAO){var Le=Re();pe?Le.bindVertexArrayOES(pe.vao):Le.bindVertexArrayOES(null),_e.currentVAO=pe}}function te(pe){if(pe!==_e.currentVAO){if(pe)pe.bindAttrs();else for(var Le=ye(),ue=0;ue<ee.length;++ue){var ze=ee[ue];ze.buffer?(x.enableVertexAttribArray(ue),x.vertexAttribPointer(ue,ze.size,ze.type,ze.normalized,ze.stride,ze.offfset),Le&&ze.divisor&&Le.vertexAttribDivisorANGLE(ue,ze.divisor)):(x.disableVertexAttribArray(ue),x.vertexAttrib4f(ue,ze.x,ze.y,ze.z,ze.w))}_e.currentVAO=pe}}function Ee(){Fr(ke).forEach(function(pe){pe.destroy()})}function Ge(){this.id=++we,this.attributes=[];var pe=Re();pe?this.vao=pe.createVertexArrayOES():this.vao=null,ke[this.id]=this,this.buffers=[]}Ge.prototype.bindAttrs=function(){for(var pe=ye(),Le=this.attributes,ue=0;ue<Le.length;++ue){var ze=Le[ue];ze.buffer?(x.enableVertexAttribArray(ue),x.bindBuffer(Pp,ze.buffer.buffer),x.vertexAttribPointer(ue,ze.size,ze.type,ze.normalized,ze.stride,ze.offset),pe&&ze.divisor&&pe.vertexAttribDivisorANGLE(ue,ze.divisor)):(x.disableVertexAttribArray(ue),x.vertexAttrib4f(ue,ze.x,ze.y,ze.z,ze.w))}for(var ot=Le.length;ot<Y;++ot)x.disableVertexAttribArray(ot)},Ge.prototype.refresh=function(){var pe=Re();pe&&(pe.bindVertexArrayOES(this.vao),this.bindAttrs(),_e.currentVAO=this)},Ge.prototype.destroy=function(){if(this.vao){var pe=Re();this===_e.currentVAO&&(_e.currentVAO=null,pe.bindVertexArrayOES(null)),pe.deleteVertexArrayOES(this.vao),this.vao=null}ke[this.id]&&(delete ke[this.id],Q.vaoCount-=1)};function he(){var pe=Re();pe&&Fr(ke).forEach(function(Le){Le.refresh()})}function De(pe){var Le=new Ge;Q.vaoCount+=1;function ue(ze){_(Array.isArray(ze),"arguments to vertex array constructor must be an array"),_(ze.length<Y,"too many attributes"),_(ze.length>0,"must specify at least one attribute");var ot={},_t=Le.attributes;_t.length=ze.length;for(var Ce=0;Ce<ze.length;++Ce){var Se=ze[Ce],le=_t[Ce]=new Zh,pt=Se.data||Se;if(Array.isArray(pt)||e(pt)||ya(pt)){var It;Le.buffers[Ce]&&(It=Le.buffers[Ce],e(pt)&&It._buffer.byteLength>=pt.byteLength?It.subdata(pt):(It.destroy(),Le.buffers[Ce]=null)),Le.buffers[Ce]||(It=Le.buffers[Ce]=se.create(Se,Pp,!1,!0)),le.buffer=se.getBuffer(It),le.size=le.buffer.dimension|0,le.normalized=!1,le.type=le.buffer.dtype,le.offset=0,le.stride=0,le.divisor=0,le.state=1,ot[Ce]=1}else se.getBuffer(Se)?(le.buffer=se.getBuffer(Se),le.size=le.buffer.dimension|0,le.normalized=!1,le.type=le.buffer.dtype,le.offset=0,le.stride=0,le.divisor=0,le.state=1):se.getBuffer(Se.buffer)?(le.buffer=se.getBuffer(Se.buffer),le.size=(+Se.size||le.buffer.dimension)|0,le.normalized=!!Se.normalized||!1,"type"in Se?(_.parameter(Se.type,Ji,"invalid buffer type"),le.type=Ji[Se.type]):le.type=le.buffer.dtype,le.offset=(Se.offset||0)|0,le.stride=(Se.stride||0)|0,le.divisor=(Se.divisor||0)|0,le.state=1,_(le.size>=1&&le.size<=4,"size must be between 1 and 4"),_(le.offset>=0,"invalid offset"),_(le.stride>=0&&le.stride<=255,"stride must be between 0 and 255"),_(le.divisor>=0,"divisor must be positive"),_(!le.divisor||!!E.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Se?(_(Ce>0,"first attribute must not be a constant"),le.x=+Se.x||0,le.y=+Se.y||0,le.z=+Se.z||0,le.w=+Se.w||0,le.state=2):_(!1,"invalid attribute spec for location "+Ce)}for(var Ue=0;Ue<Le.buffers.length;++Ue)!ot[Ue]&&Le.buffers[Ue]&&(Le.buffers[Ue].destroy(),Le.buffers[Ue]=null);return Le.refresh(),ue}return ue.destroy=function(){for(var ze=0;ze<Le.buffers.length;++ze)Le.buffers[ze]&&Le.buffers[ze].destroy();Le.buffers.length=0,Le.destroy()},ue._vao=Le,ue._reglType="vao",ue(pe)}return _e}var Ip=35632,$5=35633,D5=35718,q5=35721;function H5(x,E,N,Q){var se={},Y={};function ee(j,te,Ee,Ge){this.name=j,this.id=te,this.location=Ee,this.info=Ge}function xe(j,te){for(var Ee=0;Ee<j.length;++Ee)if(j[Ee].id===te.id){j[Ee].location=te.location;return}j.push(te)}function we(j,te,Ee){var Ge=j===Ip?se:Y,he=Ge[te];if(!he){var De=E.str(te);he=x.createShader(j),x.shaderSource(he,De),x.compileShader(he),_.shaderError(x,he,De,j,Ee),Ge[te]=he}return he}var ke={},_e=[],Ae=0;function Re(j,te){this.id=Ae++,this.fragId=j,this.vertId=te,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,Q.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function ye(j,te,Ee){var Ge,he,De=we(Ip,j.fragId),pe=we($5,j.vertId),Le=j.program=x.createProgram();if(x.attachShader(Le,De),x.attachShader(Le,pe),Ee)for(Ge=0;Ge<Ee.length;++Ge){var ue=Ee[Ge];x.bindAttribLocation(Le,ue[0],ue[1])}x.linkProgram(Le),_.linkError(x,Le,E.str(j.fragId),E.str(j.vertId),te);var ze=x.getProgramParameter(Le,D5);Q.profile&&(j.stats.uniformsCount=ze);var ot=j.uniforms;for(Ge=0;Ge<ze;++Ge)if(he=x.getActiveUniform(Le,Ge),he)if(he.size>1)for(var _t=0;_t<he.size;++_t){var Ce=he.name.replace("[0]","["+_t+"]");xe(ot,new ee(Ce,E.id(Ce),x.getUniformLocation(Le,Ce),he))}else xe(ot,new ee(he.name,E.id(he.name),x.getUniformLocation(Le,he.name),he));var Se=x.getProgramParameter(Le,q5);Q.profile&&(j.stats.attributesCount=Se);var le=j.attributes;for(Ge=0;Ge<Se;++Ge)he=x.getActiveAttrib(Le,Ge),he&&xe(le,new ee(he.name,E.id(he.name),x.getAttribLocation(Le,he.name),he))}Q.profile&&(N.getMaxUniformsCount=function(){var j=0;return _e.forEach(function(te){te.stats.uniformsCount>j&&(j=te.stats.uniformsCount)}),j},N.getMaxAttributesCount=function(){var j=0;return _e.forEach(function(te){te.stats.attributesCount>j&&(j=te.stats.attributesCount)}),j});function Te(){se={},Y={};for(var j=0;j<_e.length;++j)ye(_e[j],null,_e[j].attributes.map(function(te){return[te.location,te.name]}))}return{clear:function(){var j=x.deleteShader.bind(x);Fr(se).forEach(j),se={},Fr(Y).forEach(j),Y={},_e.forEach(function(te){x.deleteProgram(te.program)}),_e.length=0,ke={},N.shaderCount=0},program:function(j,te,Ee,Ge){_.command(j>=0,"missing vertex shader",Ee),_.command(te>=0,"missing fragment shader",Ee);var he=ke[te];he||(he=ke[te]={});var De=he[j];if(De&&(De.refCount++,!Ge))return De;var pe=new Re(te,j);return N.shaderCount++,ye(pe,Ee,Ge),De||(he[j]=pe),_e.push(pe),t(pe,{destroy:function(){if(pe.refCount--,pe.refCount<=0){x.deleteProgram(pe.program);var Le=_e.indexOf(pe);_e.splice(Le,1),N.shaderCount--}he[pe.vertId].refCount<=0&&(x.deleteShader(Y[pe.vertId]),delete Y[pe.vertId],delete ke[pe.fragId][pe.vertId]),Object.keys(ke[pe.fragId]).length||(x.deleteShader(se[pe.fragId]),delete se[pe.fragId],delete ke[pe.fragId])}})},restore:Te,shader:we,frag:-1,vert:-1}}var j5=6408,dc=5121,B5=3333,Fl=5126;function U5(x,E,N,Q,se,Y,ee){function xe(_e){var Ae;E.next===null?(_(se.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Ae=dc):(_(E.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Ae=E.next.colorAttachments[0].texture._texture.type,Y.oes_texture_float?(_(Ae===dc||Ae===Fl,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Ae===Fl&&_(ee.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(Ae===dc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Re=0,ye=0,Te=Q.framebufferWidth,j=Q.framebufferHeight,te=null;e(_e)?te=_e:_e&&(_.type(_e,"object","invalid arguments to regl.read()"),Re=_e.x|0,ye=_e.y|0,_(Re>=0&&Re<Q.framebufferWidth,"invalid x offset for regl.read"),_(ye>=0&&ye<Q.framebufferHeight,"invalid y offset for regl.read"),Te=(_e.width||Q.framebufferWidth-Re)|0,j=(_e.height||Q.framebufferHeight-ye)|0,te=_e.data||null),te&&(Ae===dc?_(te instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Ae===Fl&&_(te instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(Te>0&&Te+Re<=Q.framebufferWidth,"invalid width for read pixels"),_(j>0&&j+ye<=Q.framebufferHeight,"invalid height for read pixels"),N();var Ee=Te*j*4;return te||(Ae===dc?te=new Uint8Array(Ee):Ae===Fl&&(te=te||new Float32Array(Ee))),_.isTypedArray(te,"data buffer for regl.read() must be a typedarray"),_(te.byteLength>=Ee,"data buffer for regl.read() too small"),x.pixelStorei(B5,4),x.readPixels(Re,ye,Te,j,j5,Ae,te),te}function we(_e){var Ae;return E.setFBO({framebuffer:_e.framebuffer},function(){Ae=xe(_e)}),Ae}function ke(_e){return!_e||!("framebuffer"in _e)?xe(_e):we(_e)}return ke}function J0(x){return Array.prototype.slice.call(x)}function es(x){return J0(x).join("")}function W5(){var x=0,E=[],N=[];function Q(Ae){for(var Re=0;Re<N.length;++Re)if(N[Re]===Ae)return E[Re];var ye="g"+x++;return E.push(ye),N.push(Ae),ye}function se(){var Ae=[];function Re(){Ae.push.apply(Ae,J0(arguments))}var ye=[];function Te(){var j="v"+x++;return ye.push(j),arguments.length>0&&(Ae.push(j,"="),Ae.push.apply(Ae,J0(arguments)),Ae.push(";")),j}return t(Re,{def:Te,toString:function(){return es([ye.length>0?"var "+ye.join(",")+";":"",es(Ae)])}})}function Y(){var Ae=se(),Re=se(),ye=Ae.toString,Te=Re.toString;function j(te,Ee){Re(te,Ee,"=",Ae.def(te,Ee),";")}return t(function(){Ae.apply(Ae,J0(arguments))},{def:Ae.def,entry:Ae,exit:Re,save:j,set:function(te,Ee,Ge){j(te,Ee),Ae(te,Ee,"=",Ge,";")},toString:function(){return ye()+Te()}})}function ee(){var Ae=es(arguments),Re=Y(),ye=Y(),Te=Re.toString,j=ye.toString;return t(Re,{then:function(){return Re.apply(Re,J0(arguments)),this},else:function(){return ye.apply(ye,J0(arguments)),this},toString:function(){var te=j();return te&&(te="else{"+te+"}"),es(["if(",Ae,"){",Te(),"}",te])}})}var xe=se(),we={};function ke(Ae,Re){var ye=[];function Te(){var he="a"+ye.length;return ye.push(he),he}Re=Re||0;for(var j=0;j<Re;++j)Te();var te=Y(),Ee=te.toString,Ge=we[Ae]=t(te,{arg:Te,toString:function(){return es(["function(",ye.join(),"){",Ee(),"}"])}});return Ge}function _e(){var Ae=['"use strict";',xe,"return {"];Object.keys(we).forEach(function(Te){Ae.push('"',Te,'":',we[Te].toString(),",")}),Ae.push("}");var Re=es(Ae).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),ye=Function.apply(null,E.concat(Re));return ye.apply(null,N)}return{global:xe,link:Q,block:se,proc:ke,scope:Y,cond:ee,compile:_e}}var ts="xyzw".split(""),Op=5121,os=1,Jh=2,eu=0,tu=1,ou=2,nu=3,Gl=4,Fp=5,Gp=6,$p="dither",Dp="blend.enable",qp="blend.color",ru="blend.equation",au="blend.func",Hp="depth.enable",jp="depth.func",Bp="depth.range",Up="depth.mask",iu="colorMask",Wp="cull.enable",Vp="cull.face",su="frontFace",cu="lineWidth",Xp="polygonOffset.enable",lu="polygonOffset.offset",Yp="sample.alpha",Kp="sample.enable",fu="sample.coverage",Qp="stencil.enable",Zp="stencil.mask",hu="stencil.func",uu="stencil.opFront",pc="stencil.opBack",Jp="scissor.enable",$l="scissor.box",Qa="viewport",vc="profile",r0="framebuffer",mc="vert",gc="frag",a0="elements",i0="primitive",s0="count",Dl="offset",ql="instances",xc="vao",du="Width",pu="Height",ns=r0+du,rs=r0+pu,V5=Qa+du,X5=Qa+pu,ev="drawingBuffer",tv=ev+du,ov=ev+pu,Y5=[au,ru,hu,uu,pc,fu,Qa,$l,lu],as=34962,K5=34963,Q5=35632,Z5=35633,nv=3553,J5=34067,ew=2884,tw=3042,ow=3024,nw=2960,rw=2929,aw=3089,iw=32823,sw=32926,cw=32928,vu=5126,Hl=35664,jl=35665,Bl=35666,mu=5124,Ul=35667,Wl=35668,Vl=35669,gu=35670,Xl=35671,Yl=35672,Kl=35673,yc=35674,bc=35675,wc=35676,_c=35678,Mc=35680,rv=4,Ec=1028,c0=1029,av=2304,xu=2305,lw=32775,fw=32776,hw=519,mi=7680,iv=0,sv=1,cv=32774,uw=513,lv=36160,dw=36064,Oa={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},fv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],is={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},gi={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},hv={frag:Q5,vert:Z5},yu={cw:av,ccw:xu};function Ql(x){return Array.isArray(x)||e(x)||ya(x)}function uv(x){return x.sort(function(E,N){return E===Qa?-1:N===Qa?1:E<N?-1:1})}function pr(x,E,N,Q){this.thisDep=x,this.contextDep=E,this.propDep=N,this.append=Q}function xi(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function un(x){return new pr(!1,!1,!1,x)}function Ar(x,E){var N=x.type;if(N===eu){var Q=x.data.length;return new pr(!0,Q>=1,Q>=2,E)}else if(N===Gl){var se=x.data;return new pr(se.thisDep,se.contextDep,se.propDep,E)}else{if(N===Fp)return new pr(!1,!1,!1,E);if(N===Gp){for(var Y=!1,ee=!1,xe=!1,we=0;we<x.data.length;++we){var ke=x.data[we];if(ke.type===tu)xe=!0;else if(ke.type===ou)ee=!0;else if(ke.type===nu)Y=!0;else if(ke.type===eu){Y=!0;var _e=ke.data;_e>=1&&(ee=!0),_e>=2&&(xe=!0)}else ke.type===Gl&&(Y=Y||ke.data.thisDep,ee=ee||ke.data.contextDep,xe=xe||ke.data.propDep)}return new pr(Y,ee,xe,E)}else return new pr(N===nu,N===ou,N===tu,E)}}var dv=new pr(!1,!1,!1,function(){});function pw(x,E,N,Q,se,Y,ee,xe,we,ke,_e,Ae,Re,ye,Te){var j=ke.Record,te={add:32774,subtract:32778,"reverse subtract":32779};N.ext_blend_minmax&&(te.min=lw,te.max=fw);var Ee=N.angle_instanced_arrays,Ge=N.webgl_draw_buffers,he={dirty:!0,profile:Te.profile},De={},pe=[],Le={},ue={};function ze(A){return A.replace(".","_")}function ot(A,w,P){var H=ze(A);pe.push(A),De[H]=he[H]=!!P,Le[H]=w}function _t(A,w,P){var H=ze(A);pe.push(A),Array.isArray(P)?(he[H]=P.slice(),De[H]=P.slice()):he[H]=De[H]=P,ue[H]=w}ot($p,ow),ot(Dp,tw),_t(qp,"blendColor",[0,0,0,0]),_t(ru,"blendEquationSeparate",[cv,cv]),_t(au,"blendFuncSeparate",[sv,iv,sv,iv]),ot(Hp,rw,!0),_t(jp,"depthFunc",uw),_t(Bp,"depthRange",[0,1]),_t(Up,"depthMask",!0),_t(iu,iu,[!0,!0,!0,!0]),ot(Wp,ew),_t(Vp,"cullFace",c0),_t(su,su,xu),_t(cu,cu,1),ot(Xp,iw),_t(lu,"polygonOffset",[0,0]),ot(Yp,sw),ot(Kp,cw),_t(fu,"sampleCoverage",[1,!1]),ot(Qp,nw),_t(Zp,"stencilMask",-1),_t(hu,"stencilFunc",[hw,0,-1]),_t(uu,"stencilOpSeparate",[Ec,mi,mi,mi]),_t(pc,"stencilOpSeparate",[c0,mi,mi,mi]),ot(Jp,aw),_t($l,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),_t(Qa,Qa,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Ce={gl:x,context:Re,strings:E,next:De,current:he,draw:Ae,elements:Y,buffer:se,shader:_e,attributes:ke.state,vao:ke,uniforms:we,framebuffer:xe,extensions:N,timer:ye,isBufferArgs:Ql},Se={primTypes:U0,compareFuncs:is,blendFuncs:Oa,blendEquations:te,stencilOps:gi,glTypes:Ji,orientationType:yu};_.optional(function(){Ce.isArrayLike=on}),Ge&&(Se.backBuffer=[c0],Se.drawBuffer=xt(Q.maxDrawbuffers,function(A){return A===0?[0]:xt(A,function(w){return dw+w})}));var le=0;function pt(){var A=W5(),w=A.link,P=A.global;A.id=le++,A.batchId="0";var H=w(Ce),B=A.shared={props:"a0"};Object.keys(Ce).forEach(function(C){B[C]=P.def(H,".",C)}),_.optional(function(){A.CHECK=w(_),A.commandStr=_.guessCommand(),A.command=w(A.commandStr),A.assert=function(C,S,$){C("if(!(",S,"))",this.CHECK,".commandRaise(",w($),",",this.command,");")},Se.invalidBlendCombinations=fv});var F=A.next={},O=A.current={};Object.keys(ue).forEach(function(C){Array.isArray(he[C])&&(F[C]=P.def(B.next,".",C),O[C]=P.def(B.current,".",C))});var G=A.constants={};Object.keys(Se).forEach(function(C){G[C]=P.def(JSON.stringify(Se[C]))}),A.invoke=function(C,S){switch(S.type){case eu:var $=["this",B.context,B.props,A.batchId];return C.def(w(S.data),".call(",$.slice(0,Math.max(S.data.length+1,4)),")");case tu:return C.def(B.props,S.data);case ou:return C.def(B.context,S.data);case nu:return C.def("this",S.data);case Gl:return S.data.append(A,C),S.data.ref;case Fp:return S.data.toString();case Gp:return S.data.map(function(W){return A.invoke(C,W)})}},A.attribCache={};var T={};return A.scopeAttrib=function(C){var S=E.id(C);if(S in T)return T[S];var $=ke.scope[S];$||($=ke.scope[S]=new j);var W=T[S]=w($);return W},A}function It(A){var w=A.static,P=A.dynamic,H;if(vc in w){var B=!!w[vc];H=un(function(O,G){return B}),H.enable=B}else if(vc in P){var F=P[vc];H=Ar(F,function(O,G){return O.invoke(G,F)})}return H}function Ue(A,w){var P=A.static,H=A.dynamic;if(r0 in P){var B=P[r0];return B?(B=xe.getFramebuffer(B),_.command(B,"invalid framebuffer object"),un(function(O,G){var T=O.link(B),C=O.shared;G.set(C.framebuffer,".next",T);var S=C.context;return G.set(S,"."+ns,T+".width"),G.set(S,"."+rs,T+".height"),T})):un(function(O,G){var T=O.shared;G.set(T.framebuffer,".next","null");var C=T.context;return G.set(C,"."+ns,C+"."+tv),G.set(C,"."+rs,C+"."+ov),"null"})}else if(r0 in H){var F=H[r0];return Ar(F,function(O,G){var T=O.invoke(G,F),C=O.shared,S=C.framebuffer,$=G.def(S,".getFramebuffer(",T,")");_.optional(function(){O.assert(G,"!"+T+"||"+$,"invalid framebuffer object")}),G.set(S,".next",$);var W=C.context;return G.set(W,"."+ns,$+"?"+$+".width:"+W+"."+tv),G.set(W,"."+rs,$+"?"+$+".height:"+W+"."+ov),$})}else return null}function jt(A,w,P){var H=A.static,B=A.dynamic;function F(T){if(T in H){var C=H[T];_.commandType(C,"object","invalid "+T,P.commandStr);var S=!0,$=C.x|0,W=C.y|0,ie,ce;return"width"in C?(ie=C.width|0,_.command(ie>=0,"invalid "+T,P.commandStr)):S=!1,"height"in C?(ce=C.height|0,_.command(ce>=0,"invalid "+T,P.commandStr)):S=!1,new pr(!S&&w&&w.thisDep,!S&&w&&w.contextDep,!S&&w&&w.propDep,function(Je,Ft){var We=Je.shared.context,lt=ie;"width"in C||(lt=Ft.def(We,".",ns,"-",$));var At=ce;return"height"in C||(At=Ft.def(We,".",rs,"-",W)),[$,W,lt,At]})}else if(T in B){var re=B[T],Me=Ar(re,function(Je,Ft){var We=Je.invoke(Ft,re);_.optional(function(){Je.assert(Ft,We+"&&typeof "+We+'==="object"',"invalid "+T)});var lt=Je.shared.context,At=Ft.def(We,".x|0"),lo=Ft.def(We,".y|0"),Ko=Ft.def('"width" in ',We,"?",We,".width|0:","(",lt,".",ns,"-",At,")"),vr=Ft.def('"height" in ',We,"?",We,".height|0:","(",lt,".",rs,"-",lo,")");return _.optional(function(){Je.assert(Ft,Ko+">=0&&"+vr+">=0","invalid "+T)}),[At,lo,Ko,vr]});return w&&(Me.thisDep=Me.thisDep||w.thisDep,Me.contextDep=Me.contextDep||w.contextDep,Me.propDep=Me.propDep||w.propDep),Me}else return w?new pr(w.thisDep,w.contextDep,w.propDep,function(Je,Ft){var We=Je.shared.context;return[0,0,Ft.def(We,".",ns),Ft.def(We,".",rs)]}):null}var O=F(Qa);if(O){var G=O;O=new pr(O.thisDep,O.contextDep,O.propDep,function(T,C){var S=G.append(T,C),$=T.shared.context;return C.set($,"."+V5,S[2]),C.set($,"."+X5,S[3]),S})}return{viewport:O,scissor_box:F($l)}}function Mt(A,w){var P=A.static,H=typeof P[gc]=="string"&&typeof P[mc]=="string";if(H){if(Object.keys(w.dynamic).length>0)return null;var B=w.static,F=Object.keys(B);if(F.length>0&&typeof B[F[0]]=="number"){for(var O=[],G=0;G<F.length;++G)_(typeof B[F[G]]=="number","must specify all vertex attribute locations when using vaos"),O.push([B[F[G]]|0,F[G]]);return O}}return null}function $t(A,w,P){var H=A.static,B=A.dynamic;function F(S){if(S in H){var $=E.id(H[S]);_.optional(function(){_e.shader(hv[S],$,_.guessCommand())});var W=un(function(){return $});return W.id=$,W}else if(S in B){var ie=B[S];return Ar(ie,function(ce,re){var Me=ce.invoke(re,ie),Je=re.def(ce.shared.strings,".id(",Me,")");return _.optional(function(){re(ce.shared.shader,".shader(",hv[S],",",Je,",",ce.command,");")}),Je})}return null}var O=F(gc),G=F(mc),T=null,C;return xi(O)&&xi(G)?(T=_e.program(G.id,O.id,null,P),C=un(function(S,$){return S.link(T)})):C=new pr(O&&O.thisDep||G&&G.thisDep,O&&O.contextDep||G&&G.contextDep,O&&O.propDep||G&&G.propDep,function(S,$){var W=S.shared.shader,ie;O?ie=O.append(S,$):ie=$.def(W,".",gc);var ce;G?ce=G.append(S,$):ce=$.def(W,".",mc);var re=W+".program("+ce+","+ie;return _.optional(function(){re+=","+S.command}),$.def(re+")")}),{frag:O,vert:G,progVar:C,program:T}}function co(A,w){var P=A.static,H=A.dynamic;function B(){if(a0 in P){var S=P[a0];Ql(S)?S=Y.getElements(Y.create(S,!0)):S&&(S=Y.getElements(S),_.command(S,"invalid elements",w.commandStr));var $=un(function(ie,ce){if(S){var re=ie.link(S);return ie.ELEMENTS=re,re}return ie.ELEMENTS=null,null});return $.value=S,$}else if(a0 in H){var W=H[a0];return Ar(W,function(ie,ce){var re=ie.shared,Me=re.isBufferArgs,Je=re.elements,Ft=ie.invoke(ce,W),We=ce.def("null"),lt=ce.def(Me,"(",Ft,")"),At=ie.cond(lt).then(We,"=",Je,".createStream(",Ft,");").else(We,"=",Je,".getElements(",Ft,");");return _.optional(function(){ie.assert(At.else,"!"+Ft+"||"+We,"invalid elements")}),ce.entry(At),ce.exit(ie.cond(lt).then(Je,".destroyStream(",We,");")),ie.ELEMENTS=We,We})}return null}var F=B();function O(){if(i0 in P){var S=P[i0];return _.commandParameter(S,U0,"invalid primitve",w.commandStr),un(function(W,ie){return U0[S]})}else if(i0 in H){var $=H[i0];return Ar($,function(W,ie){var ce=W.constants.primTypes,re=W.invoke(ie,$);return _.optional(function(){W.assert(ie,re+" in "+ce,"invalid primitive, must be one of "+Object.keys(U0))}),ie.def(ce,"[",re,"]")})}else if(F)return xi(F)?F.value?un(function(W,ie){return ie.def(W.ELEMENTS,".primType")}):un(function(){return rv}):new pr(F.thisDep,F.contextDep,F.propDep,function(W,ie){var ce=W.ELEMENTS;return ie.def(ce,"?",ce,".primType:",rv)});return null}function G(S,$){if(S in P){var W=P[S]|0;return _.command(!$||W>=0,"invalid "+S,w.commandStr),un(function(ce,re){return $&&(ce.OFFSET=W),W})}else if(S in H){var ie=H[S];return Ar(ie,function(ce,re){var Me=ce.invoke(re,ie);return $&&(ce.OFFSET=Me,_.optional(function(){ce.assert(re,Me+">=0","invalid "+S)})),Me})}else if($&&F)return un(function(ce,re){return ce.OFFSET="0",0});return null}var T=G(Dl,!0);function C(){if(s0 in P){var S=P[s0]|0;return _.command(typeof S=="number"&&S>=0,"invalid vertex count",w.commandStr),un(function(){return S})}else if(s0 in H){var $=H[s0];return Ar($,function(ce,re){var Me=ce.invoke(re,$);return _.optional(function(){ce.assert(re,"typeof "+Me+'==="number"&&'+Me+">=0&&"+Me+"===("+Me+"|0)","invalid vertex count")}),Me})}else if(F)if(xi(F)){if(F)return T?new pr(T.thisDep,T.contextDep,T.propDep,function(ce,re){var Me=re.def(ce.ELEMENTS,".vertCount-",ce.OFFSET);return _.optional(function(){ce.assert(re,Me+">=0","invalid vertex offset/element buffer too small")}),Me}):un(function(ce,re){return re.def(ce.ELEMENTS,".vertCount")});var W=un(function(){return-1});return _.optional(function(){W.MISSING=!0}),W}else{var ie=new pr(F.thisDep||T.thisDep,F.contextDep||T.contextDep,F.propDep||T.propDep,function(ce,re){var Me=ce.ELEMENTS;return ce.OFFSET?re.def(Me,"?",Me,".vertCount-",ce.OFFSET,":-1"):re.def(Me,"?",Me,".vertCount:-1")});return _.optional(function(){ie.DYNAMIC=!0}),ie}return null}return{elements:F,primitive:O(),count:C(),instances:G(ql,!1),offset:T}}function dn(A,w){var P=A.static,H=A.dynamic,B={};return pe.forEach(function(F){var O=ze(F);function G(T,C){if(F in P){var S=T(P[F]);B[O]=un(function(){return S})}else if(F in H){var $=H[F];B[O]=Ar($,function(W,ie){return C(W,ie,W.invoke(ie,$))})}}switch(F){case Wp:case Dp:case $p:case Qp:case Hp:case Jp:case Xp:case Yp:case Kp:case Up:return G(function(T){return _.commandType(T,"boolean",F,w.commandStr),T},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="boolean"',"invalid flag "+F,T.commandStr)}),S});case jp:return G(function(T){return _.commandParameter(T,is,"invalid "+F,w.commandStr),is[T]},function(T,C,S){var $=T.constants.compareFuncs;return _.optional(function(){T.assert(C,S+" in "+$,"invalid "+F+", must be one of "+Object.keys(is))}),C.def($,"[",S,"]")});case Bp:return G(function(T){return _.command(on(T)&&T.length===2&&typeof T[0]=="number"&&typeof T[1]=="number"&&T[0]<=T[1],"depth range is 2d array",w.commandStr),T},function(T,C,S){_.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var $=C.def("+",S,"[0]"),W=C.def("+",S,"[1]");return[$,W]});case au:return G(function(T){_.commandType(T,"object","blend.func",w.commandStr);var C="srcRGB"in T?T.srcRGB:T.src,S="srcAlpha"in T?T.srcAlpha:T.src,$="dstRGB"in T?T.dstRGB:T.dst,W="dstAlpha"in T?T.dstAlpha:T.dst;return _.commandParameter(C,Oa,O+".srcRGB",w.commandStr),_.commandParameter(S,Oa,O+".srcAlpha",w.commandStr),_.commandParameter($,Oa,O+".dstRGB",w.commandStr),_.commandParameter(W,Oa,O+".dstAlpha",w.commandStr),_.command(fv.indexOf(C+", "+$)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+C+", "+$+")",w.commandStr),[Oa[C],Oa[$],Oa[S],Oa[W]]},function(T,C,S){var $=T.constants.blendFuncs;_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function W(We,lt){var At=C.def('"',We,lt,'" in ',S,"?",S,".",We,lt,":",S,".",We);return _.optional(function(){T.assert(C,At+" in "+$,"invalid "+F+"."+We+lt+", must be one of "+Object.keys(Oa))}),At}var ie=W("src","RGB"),ce=W("dst","RGB");_.optional(function(){var We=T.constants.invalidBlendCombinations;T.assert(C,We+".indexOf("+ie+'+", "+'+ce+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var re=C.def($,"[",ie,"]"),Me=C.def($,"[",W("src","Alpha"),"]"),Je=C.def($,"[",ce,"]"),Ft=C.def($,"[",W("dst","Alpha"),"]");return[re,Je,Me,Ft]});case ru:return G(function(T){if(typeof T=="string")return _.commandParameter(T,te,"invalid "+F,w.commandStr),[te[T],te[T]];if(typeof T=="object")return _.commandParameter(T.rgb,te,F+".rgb",w.commandStr),_.commandParameter(T.alpha,te,F+".alpha",w.commandStr),[te[T.rgb],te[T.alpha]];_.commandRaise("invalid blend.equation",w.commandStr)},function(T,C,S){var $=T.constants.blendEquations,W=C.def(),ie=C.def(),ce=T.cond("typeof ",S,'==="string"');return _.optional(function(){function re(Me,Je,Ft){T.assert(Me,Ft+" in "+$,"invalid "+Je+", must be one of "+Object.keys(te))}re(ce.then,F,S),T.assert(ce.else,S+"&&typeof "+S+'==="object"',"invalid "+F),re(ce.else,F+".rgb",S+".rgb"),re(ce.else,F+".alpha",S+".alpha")}),ce.then(W,"=",ie,"=",$,"[",S,"];"),ce.else(W,"=",$,"[",S,".rgb];",ie,"=",$,"[",S,".alpha];"),C(ce),[W,ie]});case qp:return G(function(T){return _.command(on(T)&&T.length===4,"blend.color must be a 4d array",w.commandStr),xt(4,function(C){return+T[C]})},function(T,C,S){return _.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),xt(4,function($){return C.def("+",S,"[",$,"]")})});case Zp:return G(function(T){return _.commandType(T,"number",O,w.commandStr),T|0},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="number"',"invalid stencil.mask")}),C.def(S,"|0")});case hu:return G(function(T){_.commandType(T,"object",O,w.commandStr);var C=T.cmp||"keep",S=T.ref||0,$="mask"in T?T.mask:-1;return _.commandParameter(C,is,F+".cmp",w.commandStr),_.commandType(S,"number",F+".ref",w.commandStr),_.commandType($,"number",F+".mask",w.commandStr),[is[C],S,$]},function(T,C,S){var $=T.constants.compareFuncs;_.optional(function(){function re(){T.assert(C,Array.prototype.join.call(arguments,""),"invalid stencil.func")}re(S+"&&typeof ",S,'==="object"'),re('!("cmp" in ',S,")||(",S,".cmp in ",$,")")});var W=C.def('"cmp" in ',S,"?",$,"[",S,".cmp]",":",mi),ie=C.def(S,".ref|0"),ce=C.def('"mask" in ',S,"?",S,".mask|0:-1");return[W,ie,ce]});case uu:case pc:return G(function(T){_.commandType(T,"object",O,w.commandStr);var C=T.fail||"keep",S=T.zfail||"keep",$=T.zpass||"keep";return _.commandParameter(C,gi,F+".fail",w.commandStr),_.commandParameter(S,gi,F+".zfail",w.commandStr),_.commandParameter($,gi,F+".zpass",w.commandStr),[F===pc?c0:Ec,gi[C],gi[S],gi[$]]},function(T,C,S){var $=T.constants.stencilOps;_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid "+F)});function W(ie){return _.optional(function(){T.assert(C,'!("'+ie+'" in '+S+")||("+S+"."+ie+" in "+$+")","invalid "+F+"."+ie+", must be one of "+Object.keys(gi))}),C.def('"',ie,'" in ',S,"?",$,"[",S,".",ie,"]:",mi)}return[F===pc?c0:Ec,W("fail"),W("zfail"),W("zpass")]});case lu:return G(function(T){_.commandType(T,"object",O,w.commandStr);var C=T.factor|0,S=T.units|0;return _.commandType(C,"number",O+".factor",w.commandStr),_.commandType(S,"number",O+".units",w.commandStr),[C,S]},function(T,C,S){_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid "+F)});var $=C.def(S,".factor|0"),W=C.def(S,".units|0");return[$,W]});case Vp:return G(function(T){var C=0;return T==="front"?C=Ec:T==="back"&&(C=c0),_.command(!!C,O,w.commandStr),C},function(T,C,S){return _.optional(function(){T.assert(C,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),C.def(S,'==="front"?',Ec,":",c0)});case cu:return G(function(T){return _.command(typeof T=="number"&&T>=Q.lineWidthDims[0]&&T<=Q.lineWidthDims[1],"invalid line width, must be a positive number between "+Q.lineWidthDims[0]+" and "+Q.lineWidthDims[1],w.commandStr),T},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="number"&&'+S+">="+Q.lineWidthDims[0]+"&&"+S+"<="+Q.lineWidthDims[1],"invalid line width")}),S});case su:return G(function(T){return _.commandParameter(T,yu,O,w.commandStr),yu[T]},function(T,C,S){return _.optional(function(){T.assert(C,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),C.def(S+'==="cw"?'+av+":"+xu)});case iu:return G(function(T){return _.command(on(T)&&T.length===4,"color.mask must be length 4 array",w.commandStr),T.map(function(C){return!!C})},function(T,C,S){return _.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),xt(4,function($){return"!!"+S+"["+$+"]"})});case fu:return G(function(T){_.command(typeof T=="object"&&T,O,w.commandStr);var C="value"in T?T.value:1,S=!!T.invert;return _.command(typeof C=="number"&&C>=0&&C<=1,"sample.coverage.value must be a number between 0 and 1",w.commandStr),[C,S]},function(T,C,S){_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var $=C.def('"value" in ',S,"?+",S,".value:1"),W=C.def("!!",S,".invert");return[$,W]})}}),B}function Ln(A,w){var P=A.static,H=A.dynamic,B={};return Object.keys(P).forEach(function(F){var O=P[F],G;if(typeof O=="number"||typeof O=="boolean")G=un(function(){return O});else if(typeof O=="function"){var T=O._reglType;T==="texture2d"||T==="textureCube"?G=un(function(C){return C.link(O)}):T==="framebuffer"||T==="framebufferCube"?(_.command(O.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',w.commandStr),G=un(function(C){return C.link(O.color[0])})):_.commandRaise('invalid data for uniform "'+F+'"',w.commandStr)}else on(O)?G=un(function(C){var S=C.global.def("[",xt(O.length,function($){return _.command(typeof O[$]=="number"||typeof O[$]=="boolean","invalid uniform "+F,C.commandStr),O[$]}),"]");return S}):_.commandRaise('invalid or missing data for uniform "'+F+'"',w.commandStr);G.value=O,B[F]=G}),Object.keys(H).forEach(function(F){var O=H[F];B[F]=Ar(O,function(G,T){return G.invoke(T,O)})}),B}function Yt(A,w){var P=A.static,H=A.dynamic,B={};return Object.keys(P).forEach(function(F){var O=P[F],G=E.id(F),T=new j;if(Ql(O))T.state=os,T.buffer=se.getBuffer(se.create(O,as,!1,!0)),T.type=0;else{var C=se.getBuffer(O);if(C)T.state=os,T.buffer=C,T.type=0;else if(_.command(typeof O=="object"&&O,"invalid data for attribute "+F,w.commandStr),"constant"in O){var S=O.constant;T.buffer="null",T.state=Jh,typeof S=="number"?T.x=S:(_.command(on(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+F,w.commandStr),ts.forEach(function(Je,Ft){Ft<S.length&&(T[Je]=S[Ft])}))}else{Ql(O.buffer)?C=se.getBuffer(se.create(O.buffer,as,!1,!0)):C=se.getBuffer(O.buffer),_.command(!!C,'missing buffer for attribute "'+F+'"',w.commandStr);var $=O.offset|0;_.command($>=0,'invalid offset for attribute "'+F+'"',w.commandStr);var W=O.stride|0;_.command(W>=0&&W<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',w.commandStr);var ie=O.size|0;_.command(!("size"in O)||ie>0&&ie<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',w.commandStr);var ce=!!O.normalized,re=0;"type"in O&&(_.commandParameter(O.type,Ji,"invalid type for attribute "+F,w.commandStr),re=Ji[O.type]);var Me=O.divisor|0;"divisor"in O&&(_.command(Me===0||Ee,'cannot specify divisor for attribute "'+F+'", instancing not supported',w.commandStr),_.command(Me>=0,'invalid divisor for attribute "'+F+'"',w.commandStr)),_.optional(function(){var Je=w.commandStr,Ft=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(O).forEach(function(We){_.command(Ft.indexOf(We)>=0,'unknown parameter "'+We+'" for attribute pointer "'+F+'" (valid parameters are '+Ft+")",Je)})}),T.buffer=C,T.state=os,T.size=ie,T.normalized=ce,T.type=re||C.dtype,T.offset=$,T.stride=W,T.divisor=Me}}B[F]=un(function(Je,Ft){var We=Je.attribCache;if(G in We)return We[G];var lt={isStream:!1};return Object.keys(T).forEach(function(At){lt[At]=T[At]}),T.buffer&&(lt.buffer=Je.link(T.buffer),lt.type=lt.type||lt.buffer+".dtype"),We[G]=lt,lt})}),Object.keys(H).forEach(function(F){var O=H[F];function G(T,C){var S=T.invoke(C,O),$=T.shared,W=T.constants,ie=$.isBufferArgs,ce=$.buffer;_.optional(function(){T.assert(C,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+ie+"("+S+")||"+ce+".getBuffer("+S+")||"+ce+".getBuffer("+S+".buffer)||"+ie+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+$.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+F+'"')});var re={isStream:C.def(!1)},Me=new j;Me.state=os,Object.keys(Me).forEach(function(lt){re[lt]=C.def(""+Me[lt])});var Je=re.buffer,Ft=re.type;C("if(",ie,"(",S,")){",re.isStream,"=true;",Je,"=",ce,".createStream(",as,",",S,");",Ft,"=",Je,".dtype;","}else{",Je,"=",ce,".getBuffer(",S,");","if(",Je,"){",Ft,"=",Je,".dtype;",'}else if("constant" in ',S,"){",re.state,"=",Jh,";","if(typeof "+S+'.constant === "number"){',re[ts[0]],"=",S,".constant;",ts.slice(1).map(function(lt){return re[lt]}).join("="),"=0;","}else{",ts.map(function(lt,At){return re[lt]+"="+S+".constant.length>"+At+"?"+S+".constant["+At+"]:0;"}).join(""),"}}else{","if(",ie,"(",S,".buffer)){",Je,"=",ce,".createStream(",as,",",S,".buffer);","}else{",Je,"=",ce,".getBuffer(",S,".buffer);","}",Ft,'="type" in ',S,"?",W.glTypes,"[",S,".type]:",Je,".dtype;",re.normalized,"=!!",S,".normalized;");function We(lt){C(re[lt],"=",S,".",lt,"|0;")}return We("size"),We("offset"),We("stride"),We("divisor"),C("}}"),C.exit("if(",re.isStream,"){",ce,".destroyStream(",Je,");","}"),re}B[F]=Ar(O,G)}),B}function wn(A,w){var P=A.static,H=A.dynamic;if(xc in P){var B=P[xc];return B!==null&&ke.getVAO(B)===null&&(B=ke.createVAO(B)),un(function(O){return O.link(ke.getVAO(B))})}else if(xc in H){var F=H[xc];return Ar(F,function(O,G){var T=O.invoke(G,F);return G.def(O.shared.vao+".getVAO("+T+")")})}return null}function Fo(A){var w=A.static,P=A.dynamic,H={};return Object.keys(w).forEach(function(B){var F=w[B];H[B]=un(function(O,G){return typeof F=="number"||typeof F=="boolean"?""+F:O.link(F)})}),Object.keys(P).forEach(function(B){var F=P[B];H[B]=Ar(F,function(O,G){return O.invoke(G,F)})}),H}function pn(A,w,P,H,B){var F=A.static,O=A.dynamic;_.optional(function(){var We=[r0,mc,gc,a0,i0,Dl,s0,ql,vc,xc].concat(pe);function lt(At){Object.keys(At).forEach(function(lo){_.command(We.indexOf(lo)>=0,'unknown parameter "'+lo+'"',B.commandStr)})}lt(F),lt(O)});var G=Mt(A,w),T=Ue(A,B),C=jt(A,T,B),S=co(A,B),$=dn(A,B),W=$t(A,B,G);function ie(We){var lt=C[We];lt&&($[We]=lt)}ie(Qa),ie(ze($l));var ce=Object.keys($).length>0,re={framebuffer:T,draw:S,shader:W,state:$,dirty:ce,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(re.profile=It(A,B),re.uniforms=Ln(P,B),re.drawVAO=re.scopeVAO=wn(A,B),!re.drawVAO&&W.program&&!G&&N.angle_instanced_arrays){var Me=!0,Je=W.program.attributes.map(function(We){var lt=w.static[We];return Me=Me&&!!lt,lt});if(Me&&Je.length>0){var Ft=ke.getVAO(ke.createVAO(Je));re.drawVAO=new pr(null,null,null,function(We,lt){return We.link(Ft)}),re.useVAO=!0}}return G?re.useVAO=!0:re.attributes=Yt(w,B),re.context=Fo(H,B),re}function _n(A,w,P){var H=A.shared,B=H.context,F=A.scope();Object.keys(P).forEach(function(O){w.save(B,"."+O);var G=P[O],T=G.append(A,w);Array.isArray(T)?F(B,".",O,"=[",T.join(),"];"):F(B,".",O,"=",T,";")}),w(F)}function Mn(A,w,P,H){var B=A.shared,F=B.gl,O=B.framebuffer,G;Ge&&(G=w.def(B.extensions,".webgl_draw_buffers"));var T=A.constants,C=T.drawBuffer,S=T.backBuffer,$;P?$=P.append(A,w):$=w.def(O,".next"),H||w("if(",$,"!==",O,".cur){"),w("if(",$,"){",F,".bindFramebuffer(",lv,",",$,".framebuffer);"),Ge&&w(G,".drawBuffersWEBGL(",C,"[",$,".colorAttachments.length]);"),w("}else{",F,".bindFramebuffer(",lv,",null);"),Ge&&w(G,".drawBuffersWEBGL(",S,");"),w("}",O,".cur=",$,";"),H||w("}")}function On(A,w,P){var H=A.shared,B=H.gl,F=A.current,O=A.next,G=H.current,T=H.next,C=A.cond(G,".dirty");pe.forEach(function(S){var $=ze(S);if(!($ in P.state)){var W,ie;if($ in O){W=O[$],ie=F[$];var ce=xt(he[$].length,function(Me){return C.def(W,"[",Me,"]")});C(A.cond(ce.map(function(Me,Je){return Me+"!=="+ie+"["+Je+"]"}).join("||")).then(B,".",ue[$],"(",ce,");",ce.map(function(Me,Je){return ie+"["+Je+"]="+Me}).join(";"),";"))}else{W=C.def(T,".",$);var re=A.cond(W,"!==",G,".",$);C(re),$ in Le?re(A.cond(W).then(B,".enable(",Le[$],");").else(B,".disable(",Le[$],");"),G,".",$,"=",W,";"):re(B,".",ue[$],"(",W,");",G,".",$,"=",W,";")}}}),Object.keys(P.state).length===0&&C(G,".dirty=false;"),w(C)}function Bn(A,w,P,H){var B=A.shared,F=A.current,O=B.current,G=B.gl;uv(Object.keys(P)).forEach(function(T){var C=P[T];if(!(H&&!H(C))){var S=C.append(A,w);if(Le[T]){var $=Le[T];xi(C)?S?w(G,".enable(",$,");"):w(G,".disable(",$,");"):w(A.cond(S).then(G,".enable(",$,");").else(G,".disable(",$,");")),w(O,".",T,"=",S,";")}else if(on(S)){var W=F[T];w(G,".",ue[T],"(",S,");",S.map(function(ie,ce){return W+"["+ce+"]="+ie}).join(";"),";")}else w(G,".",ue[T],"(",S,");",O,".",T,"=",S,";")}})}function nn(A,w){Ee&&(A.instancing=w.def(A.shared.extensions,".angle_instanced_arrays"))}function Ot(A,w,P,H,B){var F=A.shared,O=A.stats,G=F.current,T=F.timer,C=P.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var $,W;function ie(We){$=w.def(),We($,"=",S(),";"),typeof B=="string"?We(O,".count+=",B,";"):We(O,".count++;"),ye&&(H?(W=w.def(),We(W,"=",T,".getNumPendingQueries();")):We(T,".beginQuery(",O,");"))}function ce(We){We(O,".cpuTime+=",S(),"-",$,";"),ye&&(H?We(T,".pushScopeStats(",W,",",T,".getNumPendingQueries(),",O,");"):We(T,".endQuery();"))}function re(We){var lt=w.def(G,".profile");w(G,".profile=",We,";"),w.exit(G,".profile=",lt,";")}var Me;if(C){if(xi(C)){C.enable?(ie(w),ce(w.exit),re("true")):re("false");return}Me=C.append(A,w),re(Me)}else Me=w.def(G,".profile");var Je=A.block();ie(Je),w("if(",Me,"){",Je,"}");var Ft=A.block();ce(Ft),w.exit("if(",Me,"){",Ft,"}")}function Un(A,w,P,H,B){var F=A.shared;function O(T){switch(T){case Hl:case Ul:case Xl:return 2;case jl:case Wl:case Yl:return 3;case Bl:case Vl:case Kl:return 4;default:return 1}}function G(T,C,S){var $=F.gl,W=w.def(T,".location"),ie=w.def(F.attributes,"[",W,"]"),ce=S.state,re=S.buffer,Me=[S.x,S.y,S.z,S.w],Je=["buffer","normalized","offset","stride"];function Ft(){w("if(!",ie,".buffer){",$,".enableVertexAttribArray(",W,");}");var lt=S.type,At;if(S.size?At=w.def(S.size,"||",C):At=C,w("if(",ie,".type!==",lt,"||",ie,".size!==",At,"||",Je.map(function(Ko){return ie+"."+Ko+"!=="+S[Ko]}).join("||"),"){",$,".bindBuffer(",as,",",re,".buffer);",$,".vertexAttribPointer(",[W,At,lt,S.normalized,S.stride,S.offset],");",ie,".type=",lt,";",ie,".size=",At,";",Je.map(function(Ko){return ie+"."+Ko+"="+S[Ko]+";"}).join(""),"}"),Ee){var lo=S.divisor;w("if(",ie,".divisor!==",lo,"){",A.instancing,".vertexAttribDivisorANGLE(",[W,lo],");",ie,".divisor=",lo,";}")}}function We(){w("if(",ie,".buffer){",$,".disableVertexAttribArray(",W,");",ie,".buffer=null;","}if(",ts.map(function(lt,At){return ie+"."+lt+"!=="+Me[At]}).join("||"),"){",$,".vertexAttrib4f(",W,",",Me,");",ts.map(function(lt,At){return ie+"."+lt+"="+Me[At]+";"}).join(""),"}")}ce===os?Ft():ce===Jh?We():(w("if(",ce,"===",os,"){"),Ft(),w("}else{"),We(),w("}"))}H.forEach(function(T){var C=T.name,S=P.attributes[C],$;if(S){if(!B(S))return;$=S.append(A,w)}else{if(!B(dv))return;var W=A.scopeAttrib(C);_.optional(function(){A.assert(w,W+".state","missing attribute "+C)}),$={},Object.keys(new j).forEach(function(ie){$[ie]=w.def(W,".",ie)})}G(A.link(T),O(T.info.type),$)})}function go(A,w,P,H,B){for(var F=A.shared,O=F.gl,G,T=0;T<H.length;++T){var C=H[T],S=C.name,$=C.info.type,W=P.uniforms[S],ie=A.link(C),ce=ie+".location",re;if(W){if(!B(W))continue;if(xi(W)){var Me=W.value;if(_.command(Me!==null&&typeof Me!="undefined",'missing uniform "'+S+'"',A.commandStr),$===_c||$===Mc){_.command(typeof Me=="function"&&($===_c&&(Me._reglType==="texture2d"||Me._reglType==="framebuffer")||$===Mc&&(Me._reglType==="textureCube"||Me._reglType==="framebufferCube")),"invalid texture for uniform "+S,A.commandStr);var Je=A.link(Me._texture||Me.color[0]._texture);w(O,".uniform1i(",ce,",",Je+".bind());"),w.exit(Je,".unbind();")}else if($===yc||$===bc||$===wc){_.optional(function(){_.command(on(Me),"invalid matrix for uniform "+S,A.commandStr),_.command($===yc&&Me.length===4||$===bc&&Me.length===9||$===wc&&Me.length===16,"invalid length for matrix uniform "+S,A.commandStr)});var Ft=A.global.def("new Float32Array(["+Array.prototype.slice.call(Me)+"])"),We=2;$===bc?We=3:$===wc&&(We=4),w(O,".uniformMatrix",We,"fv(",ce,",false,",Ft,");")}else{switch($){case vu:_.commandType(Me,"number","uniform "+S,A.commandStr),G="1f";break;case Hl:_.command(on(Me)&&Me.length===2,"uniform "+S,A.commandStr),G="2f";break;case jl:_.command(on(Me)&&Me.length===3,"uniform "+S,A.commandStr),G="3f";break;case Bl:_.command(on(Me)&&Me.length===4,"uniform "+S,A.commandStr),G="4f";break;case gu:_.commandType(Me,"boolean","uniform "+S,A.commandStr),G="1i";break;case mu:_.commandType(Me,"number","uniform "+S,A.commandStr),G="1i";break;case Xl:_.command(on(Me)&&Me.length===2,"uniform "+S,A.commandStr),G="2i";break;case Ul:_.command(on(Me)&&Me.length===2,"uniform "+S,A.commandStr),G="2i";break;case Yl:_.command(on(Me)&&Me.length===3,"uniform "+S,A.commandStr),G="3i";break;case Wl:_.command(on(Me)&&Me.length===3,"uniform "+S,A.commandStr),G="3i";break;case Kl:_.command(on(Me)&&Me.length===4,"uniform "+S,A.commandStr),G="4i";break;case Vl:_.command(on(Me)&&Me.length===4,"uniform "+S,A.commandStr),G="4i";break}w(O,".uniform",G,"(",ce,",",on(Me)?Array.prototype.slice.call(Me):Me,");")}continue}else re=W.append(A,w)}else{if(!B(dv))continue;re=w.def(F.uniforms,"[",E.id(S),"]")}$===_c?(_(!Array.isArray(re),"must specify a scalar prop for textures"),w("if(",re,"&&",re,'._reglType==="framebuffer"){',re,"=",re,".color[0];","}")):$===Mc&&(_(!Array.isArray(re),"must specify a scalar prop for cube maps"),w("if(",re,"&&",re,'._reglType==="framebufferCube"){',re,"=",re,".color[0];","}")),_.optional(function(){function vr(wa,bv){A.assert(w,wa,'bad data or missing for uniform "'+S+'".  '+bv)}function bu(wa){_(!Array.isArray(re),"must not specify an array type for uniform"),vr("typeof "+re+'==="'+wa+'"',"invalid type, expected "+wa)}function ea(wa,bv){Array.isArray(re)?_(re.length===wa,"must have length "+wa):vr(F.isArrayLike+"("+re+")&&"+re+".length==="+wa,"invalid vector, should have length "+wa,A.commandStr)}function yv(wa){_(!Array.isArray(re),"must not specify a value type"),vr("typeof "+re+'==="function"&&'+re+'._reglType==="texture'+(wa===nv?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch($){case mu:bu("number");break;case Ul:ea(2,"number");break;case Wl:ea(3,"number");break;case Vl:ea(4,"number");break;case vu:bu("number");break;case Hl:ea(2,"number");break;case jl:ea(3,"number");break;case Bl:ea(4,"number");break;case gu:bu("boolean");break;case Xl:ea(2,"boolean");break;case Yl:ea(3,"boolean");break;case Kl:ea(4,"boolean");break;case yc:ea(4,"number");break;case bc:ea(9,"number");break;case wc:ea(16,"number");break;case _c:yv(nv);break;case Mc:yv(J5);break}});var lt=1;switch($){case _c:case Mc:var At=w.def(re,"._texture");w(O,".uniform1i(",ce,",",At,".bind());"),w.exit(At,".unbind();");continue;case mu:case gu:G="1i";break;case Ul:case Xl:G="2i",lt=2;break;case Wl:case Yl:G="3i",lt=3;break;case Vl:case Kl:G="4i",lt=4;break;case vu:G="1f";break;case Hl:G="2f",lt=2;break;case jl:G="3f",lt=3;break;case Bl:G="4f",lt=4;break;case yc:G="Matrix2fv";break;case bc:G="Matrix3fv";break;case wc:G="Matrix4fv";break}if(w(O,".uniform",G,"(",ce,","),G.charAt(0)==="M"){var lo=Math.pow($-yc+2,2),Ko=A.global.def("new Float32Array(",lo,")");Array.isArray(re)?w("false,(",xt(lo,function(vr){return Ko+"["+vr+"]="+re[vr]}),",",Ko,")"):w("false,(Array.isArray(",re,")||",re," instanceof Float32Array)?",re,":(",xt(lo,function(vr){return Ko+"["+vr+"]="+re+"["+vr+"]"}),",",Ko,")")}else lt>1?w(xt(lt,function(vr){return Array.isArray(re)?re[vr]:re+"["+vr+"]"})):(_(!Array.isArray(re),"uniform value must not be an array"),w(re));w(");")}}function st(A,w,P,H){var B=A.shared,F=B.gl,O=B.draw,G=H.draw;function T(){var At=G.elements,lo,Ko=w;return At?((At.contextDep&&H.contextDynamic||At.propDep)&&(Ko=P),lo=At.append(A,Ko)):lo=Ko.def(O,".",a0),lo&&Ko("if("+lo+")"+F+".bindBuffer("+K5+","+lo+".buffer.buffer);"),lo}function C(){var At=G.count,lo,Ko=w;return At?((At.contextDep&&H.contextDynamic||At.propDep)&&(Ko=P),lo=At.append(A,Ko),_.optional(function(){At.MISSING&&A.assert(w,"false","missing vertex count"),At.DYNAMIC&&A.assert(Ko,lo+">=0","missing vertex count")})):(lo=Ko.def(O,".",s0),_.optional(function(){A.assert(Ko,lo+">=0","missing vertex count")})),lo}var S=T();function $(At){var lo=G[At];return lo?lo.contextDep&&H.contextDynamic||lo.propDep?lo.append(A,P):lo.append(A,w):w.def(O,".",At)}var W=$(i0),ie=$(Dl),ce=C();if(typeof ce=="number"){if(ce===0)return}else P("if(",ce,"){"),P.exit("}");var re,Me;Ee&&(re=$(ql),Me=A.instancing);var Je=S+".type",Ft=G.elements&&xi(G.elements);function We(){function At(){P(Me,".drawElementsInstancedANGLE(",[W,ce,Je,ie+"<<(("+Je+"-"+Op+")>>1)",re],");")}function lo(){P(Me,".drawArraysInstancedANGLE(",[W,ie,ce,re],");")}S?Ft?At():(P("if(",S,"){"),At(),P("}else{"),lo(),P("}")):lo()}function lt(){function At(){P(F+".drawElements("+[W,ce,Je,ie+"<<(("+Je+"-"+Op+")>>1)"]+");")}function lo(){P(F+".drawArrays("+[W,ie,ce]+");")}S?Ft?At():(P("if(",S,"){"),At(),P("}else{"),lo(),P("}")):lo()}Ee&&(typeof re!="number"||re>=0)?typeof re=="string"?(P("if(",re,">0){"),We(),P("}else if(",re,"<0){"),lt(),P("}")):We():lt()}function Wt(A,w,P,H,B){var F=pt(),O=F.proc("body",B);return _.optional(function(){F.commandStr=w.commandStr,F.command=F.link(w.commandStr)}),Ee&&(F.instancing=O.def(F.shared.extensions,".angle_instanced_arrays")),A(F,O,P,H),F.compile().body}function ao(A,w,P,H){nn(A,w),P.useVAO?P.drawVAO?w(A.shared.vao,".setVAO(",P.drawVAO.append(A,w),");"):w(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(w(A.shared.vao,".setVAO(null);"),Un(A,w,P,H.attributes,function(){return!0})),go(A,w,P,H.uniforms,function(){return!0}),st(A,w,w,P)}function rn(A,w){var P=A.proc("draw",1);nn(A,P),_n(A,P,w.context),Mn(A,P,w.framebuffer),On(A,P,w),Bn(A,P,w.state),Ot(A,P,w,!1,!0);var H=w.shader.progVar.append(A,P);if(P(A.shared.gl,".useProgram(",H,".program);"),w.shader.program)ao(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var B=A.global.def("{}"),F=P.def(H,".id"),O=P.def(B,"[",F,"]");P(A.cond(O).then(O,".call(this,a0);").else(O,"=",B,"[",F,"]=",A.link(function(G){return Wt(ao,A,w,G,1)}),"(",H,");",O,".call(this,a0);"))}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function Fa(A,w,P,H){A.batchId="a1",nn(A,w);function B(){return!0}Un(A,w,P,H.attributes,B),go(A,w,P,H.uniforms,B),st(A,w,w,P)}function l0(A,w,P,H){nn(A,w);var B=P.contextDep,F=w.def(),O="a0",G="a1",T=w.def();A.shared.props=T,A.batchId=F;var C=A.scope(),S=A.scope();w(C.entry,"for(",F,"=0;",F,"<",G,";++",F,"){",T,"=",O,"[",F,"];",S,"}",C.exit);function $(Je){return Je.contextDep&&B||Je.propDep}function W(Je){return!$(Je)}if(P.needsContext&&_n(A,S,P.context),P.needsFramebuffer&&Mn(A,S,P.framebuffer),Bn(A,S,P.state,$),P.profile&&$(P.profile)&&Ot(A,S,P,!1,!0),H)P.useVAO?P.drawVAO?$(P.drawVAO)?S(A.shared.vao,".setVAO(",P.drawVAO.append(A,S),");"):C(A.shared.vao,".setVAO(",P.drawVAO.append(A,C),");"):C(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(C(A.shared.vao,".setVAO(null);"),Un(A,C,P,H.attributes,W),Un(A,S,P,H.attributes,$)),go(A,C,P,H.uniforms,W),go(A,S,P,H.uniforms,$),st(A,C,S,P);else{var ie=A.global.def("{}"),ce=P.shader.progVar.append(A,S),re=S.def(ce,".id"),Me=S.def(ie,"[",re,"]");S(A.shared.gl,".useProgram(",ce,".program);","if(!",Me,"){",Me,"=",ie,"[",re,"]=",A.link(function(Je){return Wt(Fa,A,P,Je,2)}),"(",ce,");}",Me,".call(this,a0[",F,"],",F,");")}}function L(A,w){var P=A.proc("batch",2);A.batchId="0",nn(A,P);var H=!1,B=!0;Object.keys(w.context).forEach(function(ie){H=H||w.context[ie].propDep}),H||(_n(A,P,w.context),B=!1);var F=w.framebuffer,O=!1;F?(F.propDep?H=O=!0:F.contextDep&&H&&(O=!0),O||Mn(A,P,F)):Mn(A,P,null),w.state.viewport&&w.state.viewport.propDep&&(H=!0);function G(ie){return ie.contextDep&&H||ie.propDep}On(A,P,w),Bn(A,P,w.state,function(ie){return!G(ie)}),(!w.profile||!G(w.profile))&&Ot(A,P,w,!1,"a1"),w.contextDep=H,w.needsContext=B,w.needsFramebuffer=O;var T=w.shader.progVar;if(T.contextDep&&H||T.propDep)l0(A,P,w,null);else{var C=T.append(A,P);if(P(A.shared.gl,".useProgram(",C,".program);"),w.shader.program)l0(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var S=A.global.def("{}"),$=P.def(C,".id"),W=P.def(S,"[",$,"]");P(A.cond(W).then(W,".call(this,a0,a1);").else(W,"=",S,"[",$,"]=",A.link(function(ie){return Wt(l0,A,w,ie,2)}),"(",C,");",W,".call(this,a0,a1);"))}}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function Z(A,w){var P=A.proc("scope",3);A.batchId="a2";var H=A.shared,B=H.current;_n(A,P,w.context),w.framebuffer&&w.framebuffer.append(A,P),uv(Object.keys(w.state)).forEach(function(O){var G=w.state[O],T=G.append(A,P);on(T)?T.forEach(function(C,S){P.set(A.next[O],"["+S+"]",C)}):P.set(H.next,"."+O,T)}),Ot(A,P,w,!0,!0),[a0,Dl,s0,ql,i0].forEach(function(O){var G=w.draw[O];G&&P.set(H.draw,"."+O,""+G.append(A,P))}),Object.keys(w.uniforms).forEach(function(O){var G=w.uniforms[O].append(A,P);Array.isArray(G)&&(G="["+G.join()+"]"),P.set(H.uniforms,"["+E.id(O)+"]",G)}),Object.keys(w.attributes).forEach(function(O){var G=w.attributes[O].append(A,P),T=A.scopeAttrib(O);Object.keys(new j).forEach(function(C){P.set(T,"."+C,G[C])})}),w.scopeVAO&&P.set(H.vao,".targetVAO",w.scopeVAO.append(A,P));function F(O){var G=w.shader[O];G&&P.set(H.shader,"."+O,G.append(A,P))}F(mc),F(gc),Object.keys(w.state).length>0&&(P(B,".dirty=true;"),P.exit(B,".dirty=true;")),P("a1(",A.shared.context,",a0,",A.batchId,");")}function V(A){if(!(typeof A!="object"||on(A))){for(var w=Object.keys(A),P=0;P<w.length;++P)if(nt.isDynamic(A[w[P]]))return!0;return!1}}function je(A,w,P){var H=w.static[P];if(!H||!V(H))return;var B=A.global,F=Object.keys(H),O=!1,G=!1,T=!1,C=A.global.def("{}");F.forEach(function($){var W=H[$];if(nt.isDynamic(W)){typeof W=="function"&&(W=H[$]=nt.unbox(W));var ie=Ar(W,null);O=O||ie.thisDep,T=T||ie.propDep,G=G||ie.contextDep}else{switch(B(C,".",$,"="),typeof W){case"number":B(W);break;case"string":B('"',W,'"');break;case"object":Array.isArray(W)&&B("[",W.join(),"]");break;default:B(A.link(W));break}B(";")}});function S($,W){F.forEach(function(ie){var ce=H[ie];if(nt.isDynamic(ce)){var re=$.invoke(W,ce);W(C,".",ie,"=",re,";")}})}w.dynamic[P]=new nt.DynamicVariable(Gl,{thisDep:O,contextDep:G,propDep:T,ref:C,append:S}),delete w.static[P]}function Bt(A,w,P,H,B){var F=pt();F.stats=F.link(B),Object.keys(w.static).forEach(function(G){je(F,w,G)}),Y5.forEach(function(G){je(F,A,G)});var O=pn(A,w,P,H,F);return rn(F,O),Z(F,O),L(F,O),t(F.compile(),{destroy:function(){O.shader.program.destroy()}})}return{next:De,current:he,procs:function(){var A=pt(),w=A.proc("poll"),P=A.proc("refresh"),H=A.block();w(H),P(H);var B=A.shared,F=B.gl,O=B.next,G=B.current;H(G,".dirty=false;"),Mn(A,w),Mn(A,P,null,!0);var T;Ee&&(T=A.link(Ee)),N.oes_vertex_array_object&&P(A.link(N.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var C=0;C<Q.maxAttributes;++C){var S=P.def(B.attributes,"[",C,"]"),$=A.cond(S,".buffer");$.then(F,".enableVertexAttribArray(",C,");",F,".bindBuffer(",as,",",S,".buffer.buffer);",F,".vertexAttribPointer(",C,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(F,".disableVertexAttribArray(",C,");",F,".vertexAttrib4f(",C,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),P($),Ee&&P(T,".vertexAttribDivisorANGLE(",C,",",S,".divisor);")}return P(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Le).forEach(function(W){var ie=Le[W],ce=H.def(O,".",W),re=A.block();re("if(",ce,"){",F,".enable(",ie,")}else{",F,".disable(",ie,")}",G,".",W,"=",ce,";"),P(re),w("if(",ce,"!==",G,".",W,"){",re,"}")}),Object.keys(ue).forEach(function(W){var ie=ue[W],ce=he[W],re,Me,Je=A.block();if(Je(F,".",ie,"("),on(ce)){var Ft=ce.length;re=A.global.def(O,".",W),Me=A.global.def(G,".",W),Je(xt(Ft,function(We){return re+"["+We+"]"}),");",xt(Ft,function(We){return Me+"["+We+"]="+re+"["+We+"];"}).join("")),w("if(",xt(Ft,function(We){return re+"["+We+"]!=="+Me+"["+We+"]"}).join("||"),"){",Je,"}")}else re=H.def(O,".",W),Me=H.def(G,".",W),Je(re,");",G,".",W,"=",re,";"),w("if(",re,"!==",Me,"){",Je,"}");P(Je)}),A.compile()}(),compile:Bt}}function vw(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var mw=34918,gw=34919,pv=35007,xw=function(x,E){if(!E.ext_disjoint_timer_query)return null;var N=[];function Q(){return N.pop()||E.ext_disjoint_timer_query.createQueryEXT()}function se(Ee){N.push(Ee)}var Y=[];function ee(Ee){var Ge=Q();E.ext_disjoint_timer_query.beginQueryEXT(pv,Ge),Y.push(Ge),ye(Y.length-1,Y.length,Ee)}function xe(){E.ext_disjoint_timer_query.endQueryEXT(pv)}function we(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var ke=[];function _e(){return ke.pop()||new we}function Ae(Ee){ke.push(Ee)}var Re=[];function ye(Ee,Ge,he){var De=_e();De.startQueryIndex=Ee,De.endQueryIndex=Ge,De.sum=0,De.stats=he,Re.push(De)}var Te=[],j=[];function te(){var Ee,Ge,he=Y.length;if(he!==0){j.length=Math.max(j.length,he+1),Te.length=Math.max(Te.length,he+1),Te[0]=0,j[0]=0;var De=0;for(Ee=0,Ge=0;Ge<Y.length;++Ge){var pe=Y[Ge];E.ext_disjoint_timer_query.getQueryObjectEXT(pe,gw)?(De+=E.ext_disjoint_timer_query.getQueryObjectEXT(pe,mw),se(pe)):Y[Ee++]=pe,Te[Ge+1]=De,j[Ge+1]=Ee}for(Y.length=Ee,Ee=0,Ge=0;Ge<Re.length;++Ge){var Le=Re[Ge],ue=Le.startQueryIndex,ze=Le.endQueryIndex;Le.sum+=Te[ze]-Te[ue];var ot=j[ue],_t=j[ze];_t===ot?(Le.stats.gpuTime+=Le.sum/1e6,Ae(Le)):(Le.startQueryIndex=ot,Le.endQueryIndex=_t,Re[Ee++]=Le)}Re.length=Ee}}return{beginQuery:ee,endQuery:xe,pushScopeStats:ye,update:te,getNumPendingQueries:function(){return Y.length},clear:function(){N.push.apply(N,Y);for(var Ee=0;Ee<N.length;Ee++)E.ext_disjoint_timer_query.deleteQueryEXT(N[Ee]);Y.length=0,N.length=0},restore:function(){Y.length=0,N.length=0}}},yw=16384,bw=256,ww=1024,_w=34962,vv="webglcontextlost",mv="webglcontextrestored",gv=1,Mw=2,Ew=3;function xv(x,E){for(var N=0;N<x.length;++N)if(x[N]===E)return N;return-1}function kw(x){var E=Vr(x);if(!E)return null;var N=E.gl,Q=N.getContextAttributes(),se=N.isContextLost(),Y=Xr(N,E);if(!Y)return null;var ee=Nt(),xe=vw(),we=Y.extensions,ke=xw(N,we),_e=wt(),Ae=N.drawingBufferWidth,Re=N.drawingBufferHeight,ye={tick:0,time:0,viewportWidth:Ae,viewportHeight:Re,framebufferWidth:Ae,framebufferHeight:Re,drawingBufferWidth:Ae,drawingBufferHeight:Re,pixelRatio:E.pixelRatio},Te={},j={elements:null,primitive:4,count:-1,offset:0,instances:-1},te=fb(N,we),Ee=Sb(N,xe,E,he),Ge=G5(N,we,te,xe,Ee);function he(st){return Ge.destroyBuffer(st)}var De=Gb(N,we,Ee,xe),pe=H5(N,ee,xe,E),Le=v5(N,we,te,function(){ot.procs.poll()},ye,xe,E),ue=m5(N,we,te,xe,E),ze=O5(N,we,te,Le,ue,xe),ot=pw(N,ee,we,te,Ee,De,Le,ze,Te,Ge,pe,j,ye,ke,E),_t=U5(N,ze,ot.procs.poll,ye,Q,we,te),Ce=ot.next,Se=N.canvas,le=[],pt=[],It=[],Ue=[E.onDestroy],jt=null;function Mt(){if(le.length===0){ke&&ke.update(),jt=null;return}jt=bt.next(Mt),Bn();for(var st=le.length-1;st>=0;--st){var Wt=le[st];Wt&&Wt(ye,null,0)}N.flush(),ke&&ke.update()}function $t(){!jt&&le.length>0&&(jt=bt.next(Mt))}function co(){jt&&(bt.cancel(Mt),jt=null)}function dn(st){st.preventDefault(),se=!0,co(),pt.forEach(function(Wt){Wt()})}function Ln(st){N.getError(),se=!1,Y.restore(),pe.restore(),Ee.restore(),Le.restore(),ue.restore(),ze.restore(),Ge.restore(),ke&&ke.restore(),ot.procs.refresh(),$t(),It.forEach(function(Wt){Wt()})}Se&&(Se.addEventListener(vv,dn,!1),Se.addEventListener(mv,Ln,!1));function Yt(){le.length=0,co(),Se&&(Se.removeEventListener(vv,dn),Se.removeEventListener(mv,Ln)),pe.clear(),ze.clear(),ue.clear(),Le.clear(),De.clear(),Ee.clear(),Ge.clear(),ke&&ke.clear(),Ue.forEach(function(st){st()})}function wn(st){_(!!st,"invalid args to regl({...})"),_.type(st,"object","invalid args to regl({...})");function Wt(B){var F=t({},B);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function O(G){if(G in F){var T=F[G];delete F[G],Object.keys(T).forEach(function(C){F[G+"."+C]=T[C]})}}return O("blend"),O("depth"),O("cull"),O("stencil"),O("polygonOffset"),O("scissor"),O("sample"),"vao"in B&&(F.vao=B.vao),F}function ao(B,F){var O={},G={};return Object.keys(B).forEach(function(T){var C=B[T];if(nt.isDynamic(C)){G[T]=nt.unbox(C,T);return}else if(F&&Array.isArray(C)){for(var S=0;S<C.length;++S)if(nt.isDynamic(C[S])){G[T]=nt.unbox(C,T);return}}O[T]=C}),{dynamic:G,static:O}}var rn=ao(st.context||{},!0),Fa=ao(st.uniforms||{},!0),l0=ao(st.attributes||{},!1),L=ao(Wt(st),!1),Z={gpuTime:0,cpuTime:0,count:0},V=ot.compile(L,l0,Fa,rn,Z),je=V.draw,Bt=V.batch,A=V.scope,w=[];function P(B){for(;w.length<B;)w.push(null);return w}function H(B,F){var O;if(se&&_.raise("context lost"),typeof B=="function")return A.call(this,null,B,0);if(typeof F=="function")if(typeof B=="number")for(O=0;O<B;++O)A.call(this,null,F,O);else if(Array.isArray(B))for(O=0;O<B.length;++O)A.call(this,B[O],F,O);else return A.call(this,B,F,0);else if(typeof B=="number"){if(B>0)return Bt.call(this,P(B|0),B|0)}else if(Array.isArray(B)){if(B.length)return Bt.call(this,B,B.length)}else return je.call(this,B)}return t(H,{stats:Z,destroy:function(){V.destroy()}})}var Fo=ze.setFBO=wn({framebuffer:nt.define.call(null,gv,"framebuffer")});function pn(st,Wt){var ao=0;ot.procs.poll();var rn=Wt.color;rn&&(N.clearColor(+rn[0]||0,+rn[1]||0,+rn[2]||0,+rn[3]||0),ao|=yw),"depth"in Wt&&(N.clearDepth(+Wt.depth),ao|=bw),"stencil"in Wt&&(N.clearStencil(Wt.stencil|0),ao|=ww),_(!!ao,"called regl.clear with no buffer specified"),N.clear(ao)}function _n(st){if(_(typeof st=="object"&&st,"regl.clear() takes an object as input"),"framebuffer"in st)if(st.framebuffer&&st.framebuffer_reglType==="framebufferCube")for(var Wt=0;Wt<6;++Wt)Fo(t({framebuffer:st.framebuffer.faces[Wt]},st),pn);else Fo(st,pn);else pn(null,st)}function Mn(st){_.type(st,"function","regl.frame() callback must be a function"),le.push(st);function Wt(){var ao=xv(le,st);_(ao>=0,"cannot cancel a frame twice");function rn(){var Fa=xv(le,rn);le[Fa]=le[le.length-1],le.length-=1,le.length<=0&&co()}le[ao]=rn}return $t(),{cancel:Wt}}function On(){var st=Ce.viewport,Wt=Ce.scissor_box;st[0]=st[1]=Wt[0]=Wt[1]=0,ye.viewportWidth=ye.framebufferWidth=ye.drawingBufferWidth=st[2]=Wt[2]=N.drawingBufferWidth,ye.viewportHeight=ye.framebufferHeight=ye.drawingBufferHeight=st[3]=Wt[3]=N.drawingBufferHeight}function Bn(){ye.tick+=1,ye.time=Ot(),On(),ot.procs.poll()}function nn(){Le.refresh(),On(),ot.procs.refresh(),ke&&ke.update()}function Ot(){return(wt()-_e)/1e3}nn();function Un(st,Wt){_.type(Wt,"function","listener callback must be a function");var ao;switch(st){case"frame":return Mn(Wt);case"lost":ao=pt;break;case"restore":ao=It;break;case"destroy":ao=Ue;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return ao.push(Wt),{cancel:function(){for(var rn=0;rn<ao.length;++rn)if(ao[rn]===Wt){ao[rn]=ao[ao.length-1],ao.pop();return}}}}var go=t(wn,{clear:_n,prop:nt.define.bind(null,gv),context:nt.define.bind(null,Mw),this:nt.define.bind(null,Ew),draw:wn({}),buffer:function(st){return Ee.create(st,_w,!1,!1)},elements:function(st){return De.create(st,!1)},texture:Le.create2D,cube:Le.createCube,renderbuffer:ue.create,framebuffer:ze.create,framebufferCube:ze.createCube,vao:Ge.createVAO,attributes:Q,frame:Mn,on:Un,limits:te,hasExtension:function(st){return te.extensions.indexOf(st.toLowerCase())>=0},read:_t,destroy:Yt,_gl:N,_refresh:nn,poll:function(){Bn(),ke&&ke.update()},now:Ot,stats:xe});return E.onDone(null,go),go}return kw})});var f0=de((Dk,Hv)=>{"use strict";var Ja=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],ei=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Ga=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],rf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Nc=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],zu=e=>Math.hypot(e[0],e[1],e[2]),oa=e=>{let t=zu(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function ds(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=[0,0,0];for(let u=0;u<3;u++)l[u]=.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-f[u])*a*a+(-i[u]+3*s[u]-3*c[u]+f[u])*a*a*a);return l}function Dw(e,t){return ds(e.map(o=>[o,0,0]),t)[0]}function qw(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,d)=>{let p=new Array(9);for(let v=0;v<3;v++)for(let m=0;m<3;m++)p[v*3+m]=h[v*3]*d[m]+h[v*3+1]*d[3+m]+h[v*3+2]*d[6+m];return p},f=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,d,p)=>{let v=f([h,d,p]);i.t=[i.t[0]+v[0]*i.s,i.t[1]+v[1]*i.s,i.t[2]+v[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let d=Math.cos(h),p=Math.sin(h);i.r=c(i.r,[d,0,p,0,1,0,-p,0,d])},r.vert=(h,d,p)=>{let v=p||r.curMat,m=f(h),g=oa(f(d));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(v[0],v[1],v[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],u=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,d,p)=>{let v=l(h),m=Nc(Ja(l(d),v),Ja(l(p),v)),g=ei(ei(u(h),u(d)),u(p));rf(m,g)<0?o.push(h,p,d):o.push(h,d,p)},r.box=(h,d,p,v,m,g,y)=>{let b=[[[h,d,p],[v,d,p],[h,m,p],[v,m,p],[0,0,-1]],[[v,d,g],[h,d,g],[v,m,g],[h,m,g],[0,0,1]],[[h,d,g],[h,d,p],[h,m,g],[h,m,p],[-1,0,0]],[[v,d,p],[v,d,g],[v,m,p],[v,m,g],[1,0,0]],[[h,m,p],[v,m,p],[h,m,g],[v,m,g],[0,1,0]],[[h,d,g],[v,d,g],[h,d,p],[v,d,p],[0,-1,0]]];for(let M of b){let k=r.vert(M[0],M[4],y),z=r.vert(M[1],M[4],y),R=r.vert(M[2],M[4],y),D=r.vert(M[3],M[4],y);r.tri(k,z,R),r.tri(z,D,R)}},r.surface=(h,d,p,v)=>{v=v||{};let m=.001,g=k=>Math.min(1,Math.max(0,k)),y=[],b=[];for(let k=0;k<=d;k++){let z=[],R=[];for(let D=0;D<=p;D++){let q=k/d,oe=D/p,I=h(q,oe),ae=Math.min(1-m,Math.max(m,q)),J=v.wrapV?oe:Math.min(1-m,Math.max(m,oe)),ne=Ja(h(g(ae+m),J),h(g(ae-m),J)),$e=v.wrapV?J+m:g(J+m),Ye=v.wrapV?J-m:g(J-m),fe=Ja(h(ae,$e),h(ae,Ye)),ve=Nc(ne,fe);zu(ve)<1e-14&&(ve=v.inside?Ja(I,v.inside(q,oe)):[0,1,0]),ve=oa(ve),v.inside&&rf(ve,Ja(I,v.inside(q,oe)))<0&&(ve=Ga(ve,-1));let Fe=v.mat?v.mat(q,oe,I):null;z.push(r.vert(I,ve,Fe)),v.double&&R.push(r.vert(I,Ga(ve,-1),Fe))}y.push(z),b.push(R)}let M=k=>{for(let z=0;z<d;z++)for(let R=0;R<p;R++){let D=k[z][R],q=k[z+1][R],oe=k[z][R+1],I=k[z+1][R+1];r.tri(D,q,oe),r.tri(q,I,oe)}};M(y),v.double&&M(b)},r.ellipsoid=(h,d,p,v,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let M=y*Math.PI,k=b*Math.PI*2,z=g?g(y,b):1;return[h[0]+d[0]*z*Math.sin(M)*Math.cos(k),h[1]+d[1]*z*Math.cos(M),h[2]+d[2]*z*Math.sin(M)*Math.sin(k)]},p||10,v||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,d,p,v,m)=>{m=m||{};let g=40,y=[],b=null;for(let z=0;z<=g;z++){let R=z/g,D=ds(h,Math.max(0,R-.01)),q=ds(h,Math.min(1,R+.01)),oe=oa(Ja(q,D)),I;if(b)I=oa(Ja(b,Ga(oe,rf(b,oe))));else{let ae=Math.abs(oe[1])<.9?[0,1,0]:[1,0,0];I=oa(Nc(oe,ae))}y.push({N:I,B:oa(Nc(oe,I))}),b=I}let M=z=>{let R=Math.min(Math.max(z,0),1)*g,D=Math.min(g-1,Math.floor(R)),q=R-D,oe=y[D],I=y[D+1];return{N:oa(ei(Ga(oe.N,1-q),Ga(I.N,q))),B:oa(ei(Ga(oe.B,1-q),Ga(I.B,q)))}},k=m.squash||[1,1];r.surface((z,R)=>{let D=ds(h,z),q=M(z),oe=d(z),I=R*Math.PI*2;return ei(D,ei(Ga(q.N,Math.cos(I)*oe*k[0]),Ga(q.B,Math.sin(I)*oe*k[1])))},p||12,v||8,{wrapV:!0,inside:z=>ds(h,z),mat:m.mat})},r.lathe=(h,d,p,v,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],M=h[y+1][1]-h[y][1];g.push(oa([M,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],M=h[y+1],k=y===0||b[2]===1,z=y===h.length-2||M[2]===1,R=k?g[y]:oa(ei(g[y-1],g[y])),D=z?g[y]:oa(ei(g[y],g[y+1])),q=[],oe=[];for(let I=0;I<=v;I++){let ae=I/v*Math.PI*2,J=Math.cos(ae),ne=Math.sin(ae),$e=m.mat?m.mat(ae,b[1]):null,Ye=m.mat?m.mat(ae,M[1]):null;q.push(r.vert([d+b[0]*J,b[1],p+b[0]*ne],[R[0]*J,R[1],R[0]*ne],$e)),oe.push(r.vert([d+M[0]*J,M[1],p+M[0]*ne],[D[0]*J,D[1],D[0]*ne],Ye))}for(let I=0;I<v;I++)r.tri(q[I],q[I+1],oe[I]),r.tri(q[I+1],oe[I+1],oe[I])}},r}Hv.exports={createBuilder:qw,catmull:ds,curve1:Dw,sub:Ja,add:ei,mul:Ga,dot:rf,cross:Nc,norm:oa,len:zu}});var Wv=de((qk,Uv)=>{"use strict";var{norm:af,add:sf,mul:bi,sub:Hw,cross:jv}=f0(),Bv=Math.PI*2,jw=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function Bw(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function Uw(e,t,o,n,r,a){let i=(h,d)=>[7,h*a,d];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,f=20,l=6,u=a*.075;return e.surface((h,d)=>{let p=s+h*c,v=a*(.96-.12*h),m=d*Bv,g=d*f%1,y=v-u*4*g*(1-g);return[t+y*Math.cos(m),p,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,d)=>[7,d*Bv*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function Ww(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function Vw(e,t,o,n,r){e.save(),e.translate(t,0,o),Ww(e,n,r),e.restore()}function Xw(e,t,o,n,r,a){let i=Bw(n),s=a?af([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let u=l>=c-2,h=l*2.399963+i()*.5,d=[Math.cos(h),0,Math.sin(h)],p=[-Math.sin(h),0,Math.cos(h)],v=l*.618%1,m=u?.06+i()*.06:.12+.62*v,g=1;if(s){let ve=d[0]*s[0]+d[2]*s[2];g=.25+.75*jw(-.7,.5,ve),m*=g}let y=u?1.1+i()*.25:.85+.55*(1-v*.55)+i()*.15,b=u?1+i()*.2:.95+i()*.28,M=u?.055:.215+i()*.05,k=.04+i()*.05,z=[d[0]*k,f,d[2]*k],R=[z[0]+d[0]*Math.sin(m)*y*.92,z[1]+Math.cos(m)*y,z[2]+d[2]*Math.sin(m)*y*.92],D=[z[0]+d[0]*Math.sin(m*.5)*y*.45,z[1]+y*.5,z[2]+d[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([z,D,R],ve=>.02-.008*ve,8,7);let q=24,oe=m*.9+.05,I=m+(u?.12:(.95+.45*v)*(.35+.65*g)),ae=[R],J=[],ne=R;for(let ve=0;ve<q;ve++){let Fe=ve/q,ft=oe+(I-oe)*Fe*Fe,Gt=[d[0]*Math.sin(ft),Math.cos(ft),d[2]*Math.sin(ft)];J.push(Gt),ne=sf(ne,bi(Gt,b/q)),ae.push(ne)}J.push(J[J.length-1]);let $e=ve=>{let Fe=ve*q,ft=Math.min(q-1,Math.floor(Fe)),Gt=Fe-ft;return sf(bi(ae[ft],1-Gt),bi(ae[ft+1],Gt))},Ye=ve=>{let Fe=ve*q,ft=Math.min(q,Math.floor(Fe)),Gt=Math.min(q,ft+1),zt=Fe-ft;return af(sf(bi(J[ft],1-zt),bi(J[Gt],zt)))},fe=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((ve,Fe)=>{let ft=Fe*2-1,Gt=$e(ve),zt=Ye(ve),po=fe*ve,gt=sf(bi(p,Math.cos(po)),bi(jv(zt,p),Math.sin(po)));gt=af(Hw(gt,bi(zt,gt[0]*zt[0]+gt[1]*zt[1]+gt[2]*zt[2])));let Qt=af(jv(gt,zt)),Bo=M*Math.pow(Math.sin(Math.PI*Math.pow(ve,.72)),.85),sr=.3*Bo*Math.abs(ft)+.012*Math.sin(ve*40+ft*2)*Math.abs(ft)*(u?0:1),Qe=-.1*Bo*ft*ft*ft*ft,vt=sr+Qe;return[Gt[0]+gt[0]*ft*Bo+Qt[0]*vt,Gt[1]+gt[1]*ft*Bo+Qt[1]*vt,Gt[2]+gt[2]*ft*Bo+Qt[2]*vt]},14,8,{double:!0,mat:(ve,Fe)=>[2,Fe*2-1,ve]})}e.restore()}Uv.exports={addFlutedColumn:Uw,addStatue:Vw,addPlant:Xw}});var wi=de((Hk,Kv)=>{"use strict";var be={xc:7,r:2.5,spring:4.7};be.x0=be.xc-be.r;be.x1=be.xc+be.r;be.top=be.spring+be.r;var xr=.06,qo=.1,Vv=.08,cf=be.r,lf=[be.x0+cf/3,be.x0+2*cf/3,be.xc+cf/3,be.xc+2*cf/3],ps=.28,Nu=[.95,1.65,2.35,3.05,3.75],Xv=[1.05,1.8],Rc=[8,0,0],Gr=[0,0,0];function na(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function vs(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function ff(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let f=(l,u,h)=>[be.xc+u*Math.cos(l),be.spring+u*Math.sin(l),h];for(let l=0;l<i;l++){let u=s+(c-s)*l/i,h=s+(c-s)*(l+1)/i,d=(u+h)/2;vs(e,f(u,t,r),f(h,t,r),f(h,o,r),f(u,o,r),[0,0,1],a),vs(e,f(u,o,n),f(h,o,n),f(h,t,n),f(u,t,n),[0,0,-1],a),vs(e,f(u,t,n),f(h,t,n),f(h,t,r),f(u,t,r),[-Math.cos(d),-Math.sin(d),0],a),vs(e,f(h,o,n),f(u,o,n),f(u,o,r),f(h,o,r),[Math.cos(d),Math.sin(d),0],a)}}function Yw(e){let n=a=>[be.xc+be.r*Math.cos(a),be.spring+be.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?be.r/Math.abs(i):1/0,f=s>1e-6?(8-be.spring)/s:1/0,l=Math.min(c,f);return[Math.min(be.x1,Math.max(be.x0,be.xc+i*l)),Math.min(8,be.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),l=r(i),u=r(s);for(let[d,p]of[[.35,1],[-.35,-1]])vs(e,[c[0],c[1],d],[f[0],f[1],d],[u[0],u[1],d],[l[0],l[1],d],[0,0,p],Gr);let h=(i+s)/2;vs(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Gr)}}function Kw(e){na(e,-.35,0,-.35,be.x0,8,.35,Gr),na(e,be.x1,0,-.35,14+.35,8,.35,Gr),Yw(e),Yv(e)}function Yv(e){na(e,be.x0-.32,.3,.35,be.x0,be.spring,.35+.07,Gr),na(e,be.x1,.3,.35,be.x1+.32,be.spring,.35+.07,Gr),na(e,be.x0-.32-.05,0,.35,be.x0,.3,.35+.07+.04,Gr),na(e,be.x1,0,.35,be.x1+.32+.05,.3,.35+.07+.04,Gr),na(e,be.x0-.32-.06,be.spring-.12,.35,be.x0,be.spring,.35+.07+.05,Gr),na(e,be.x1,be.spring-.12,.35,be.x1+.32+.06,be.spring,.35+.07+.05,Gr),ff(e,be.r,be.r+.32,.35,.35+.07,Gr),ff(e,be.r+.32,be.r+.32+.06,.35,.35+.07+.03,Gr),na(e,be.xc-.22,be.top-.08,.35,be.xc+.22,be.top+.32+.12,.35+.07+.06,Gr)}function Qw(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-Vv/2,a=Vv/2,i=(h,d,p,v,m=0)=>na(e,h-m,d,r,p+m,v,a,Rc),s=h=>be.spring+Math.sqrt(Math.max(0,be.r*be.r-(h-be.xc)*(h-be.xc))),c=t==="right"?be.xc:be.x0,f=t==="left"?be.xc:be.x1,l=h=>o||t==="left"&&h<be.xc||t==="right"&&h>be.xc,u=o?null:be.spring-.06;if(n){i(be.x0,0,be.x0+qo,be.spring),i(be.x1-qo,0,be.x1,be.spring),ff(e,be.r-qo,be.r,r,a,Rc,64),i(be.x0,0,be.x1,.05),i(be.x0,be.spring-.06,be.x1,be.spring+.06);for(let h of Xv)ff(e,h-xr/2,h+xr/2,r,a,Rc,48)}if(o){i(be.x0,0,be.x1,ps),i(be.xc-qo/2,0,be.xc+qo/2,be.top-qo*.5);for(let h of lf)i(h-xr/2,ps,h+xr/2,s(h)-qo*.5);for(let h of Nu)i(be.x0,h-xr/2,be.x1,h+xr/2)}else if(t==="fixed"){i(be.xc-qo/2,be.spring+.06,be.xc+qo/2,be.top-qo*.5);for(let h of lf)i(h-xr/2,be.spring+.06,h+xr/2,s(h)-qo*.5)}else{let h=t==="left"?be.x0+qo:be.x1-qo;i(Math.min(h,h+(t==="left"?qo*.8:-qo*.8)),.05,Math.max(h,h+(t==="left"?qo*.8:-qo*.8)),u),i(c,.05,f,ps),i(c,u-.07,f,u);let d=t==="left"?be.xc-qo/2:be.xc;i(d,.05,d+qo/2,u);for(let p of lf)l(p)&&i(p-xr/2,ps,p+xr/2,u-.07);for(let p of Nu)i(c,p-xr/2,f,p+xr/2)}for(let h of[-1,1]){let d=be.xc+h*.16;l(d)&&(na(e,d-.02,1.05,a,d+.02,1.13,a+.06,Rc),na(e,d-(h>0?0:.14),1.07,a+.05,d+(h>0?.14:0),1.11,a+.08,Rc))}}function Zw(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=be;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:r;if(t.push([f,0,o],[l,0,o],[l,s,o],[f,0,o],[l,s,o],[f,s,o]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,u=Math.PI*(f+1)/c;t.push([a,s,o],[a+i*Math.cos(l),s+i*Math.sin(l),o],[a+i*Math.cos(u),s+i*Math.sin(u),o])}return t}var Mo=e=>e.toFixed(4);function Jw(){let e=lf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Mo(n)}), ${Mo(xr/2)}, soft));`).join(`
		`),t=Nu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Mo(n)}), ${Mo(xr/2)}, soft));`).join(`
		`),o=Xv.map(n=>`ab = max(ab, barCover(abs(rr - ${Mo(n)}), ${Mo(xr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Mo(be.x0)} - soft, ${Mo(be.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Mo(be.x1)} - soft, ${Mo(be.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Mo(be.xc)}, ${Mo(be.spring)}));
		float arch = q.y < ${Mo(be.spring)} ? 1.0 : 1.0 - smoothstep(${Mo(be.r)} - soft, ${Mo(be.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Mo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Mo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Mo(be.xc)}, ${Mo(be.spring)}));
		float vb = barCover(abs(q.x - ${Mo(be.xc)}), ${Mo(qo/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Mo(be.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Mo(ps)} - soft, ${Mo(ps)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Mo(be.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Mo(be.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Mo(be.x0+qo/2)}), ${Mo(qo/2)}, soft),
			barCover(abs(q.x - ${Mo(be.x1-qo/2)}), ${Mo(qo/2)}, soft));
		frame = q.y < ${Mo(be.spring)} ? frame : barCover(abs(rr - ${Mo(be.r-qo/2)}), ${Mo(qo/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Kv.exports={addEntranceWall:Kw,addSurround:Yv,addFrames:Qw,glassPanes:Zw,doorLightGLSL:Jw,DOOR:be,WALL:.35}});var gs=de((jk,om)=>{"use strict";var u0=1.1583333333333334,d0=(13.05-8*.16)/9,Cu=u0+.16,Pu=d0+.16,oi=14/2-7.75/2,$r=15,Cc=oi+7.75,ti=$r+13.05,Dr=.3,ni={y:8+.18,inset:.15},h0={y:8+.36,inset:Dr},Iu=8+.2,Pc=8+.62,Ou=8+.9,Fu=.016,em=.28,tm=.66,e4=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),t4=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),o4=[9,0,0],Wn=[10,0,0];function ms(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function yr(e,t,o,n,r,a,i){ms(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function Ru(e,t,o,n,r,a,i,s){ms(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),ms(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),ms(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),ms(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function Qv(e,t,o,n,r){yr(e,t[0],t[1],t[2],o[1],n,r),yr(e,t[0],o[3],t[2],t[3],n,r),yr(e,t[0],o[1],o[0],o[3],n,r),yr(e,o[2],o[1],t[2],o[3],n,r)}var Zv=e=>oi+e*Cu,Jv=e=>$r+e*Pu;function n4(e,t,o=48){let n=[oi-Dr,$r-Dr,Cc+Dr,ti+Dr],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,ni.inset),i=r(n,h0.inset);yr(e,0,0,14,n[1],8,t),yr(e,0,n[3],14,o,8,t),yr(e,0,n[1],n[0],n[3],8,t),yr(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],Wn),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,Wn),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],Wn),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],Wn),Ru(e,...n.slice(0,2),...n.slice(2),8,ni.y,Wn),Qv(e,n,a,ni.y,Wn),Ru(e,...a.slice(0,2),...a.slice(2),ni.y,h0.y,Wn),Qv(e,a,i,h0.y,Wn);for(let f=1;f<6;f++){let l=Zv(f)-.16;e.box(l,Iu,$r,l+.16,h0.y,ti,Wn)}for(let f=1;f<9;f++){let l=Jv(f)-.16;e.box(oi,Iu,l,Cc,h0.y,l+.16,Wn)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let u=Zv(l),h=Jv(f);Ru(e,u,h,u+u0,h+d0,h0.y,Ou,Wn),yr(e,u,h,u+u0,h+d0,Ou,o4),r4(e,u+u0/2,h+d0/2,u0/2,d0/2)}}function r4(e,t,o,n,r){let a=Pc,i=Fu;yr(e,t-n,o-i,t+n,o+i,a,Wn),yr(e,t-i,o-r,t+i,o+r,a,Wn);for(let s of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=s*r/c,u=-l*i,h=f*i;ms(e,[t-f*c+u,a,o-l*c+h],[t+f*c+u,a,o+l*c+h],[t+f*c-u,a,o+l*c-h],[t-f*c-u,a,o-l*c-h],[0,-1,0],Wn)}for(let s of[em,tm]){let c=s*n,f=s*r;yr(e,t-c-i,o-f-i,t+c+i,o-f+i,a,Wn),yr(e,t-c-i,o+f-i,t+c+i,o+f+i,a,Wn),yr(e,t-c-i,o-f+i,t-c+i,o+f-i,a,Wn),yr(e,t+c-i,o-f+i,t+c+i,o+f-i,a,Wn)}}var Tt=e=>e.toFixed(4);function a4(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${e4.map(Tt).join(", ")});
	const vec3 SKY_MOON = vec3(${t4.map(Tt).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Tt(oi)}, ${Tt($r)});
		vec2 pitch = vec2(${Tt(Cu)}, ${Tt(Pu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Tt(5)} || cell.y > ${Tt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Tt(u0)}, ${Tt(d0)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Tt(Fu)} - soft, ${Tt(Fu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Tt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Tt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Tt(ni.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Tt(Iu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Tt(h0.y)} - p.y) / L.y)).xz;
		float tG = (${Tt(Pc)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Tt(Ou)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Tt(oi-Dr)}, ${Tt($r-Dr)}, ${Tt(Cc+Dr)}, ${Tt(ti+Dr)}), soft)
		           * rectOpen(q1, vec4(${Tt(oi-Dr+ni.inset)}, ${Tt($r-Dr+ni.inset)}, ${Tt(Cc+Dr-ni.inset)}, ${Tt(ti+Dr-ni.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Tt(oi)}, ${Tt($r)});
		vec2 pitch = vec2(${Tt(Cu)}, ${Tt(Pu)});
		vec2 paneHalf = vec2(${Tt(u0/2)}, ${Tt(d0/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Tt(em)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Tt(tm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Tt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Tt(Pc)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Tt(oi)}, ${Tt($r)}, ${Tt(Cc)}, ${Tt(ti)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Tt(14/2)}, ${Tt(($r+ti)/2)}) - L.xz * (${Tt(Pc)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Tt(7.75/2)}, ${Tt(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Tt($r-3)}, ${Tt($r+2)}, p.z)
		        * (1.0 - smoothstep(${Tt(ti-2)}, ${Tt(ti+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Tt(7.75/2)}, ${Tt(14/2)}, abs(p.x - ${Tt(14/2)}));
		return z * x;
	}`}om.exports={addSkylight:n4,skylightGLSL:a4,Z_START:$r,Z_END:ti,GLASS_Y:Pc,HEIGHT:8}});var tr=de((Bk,sm)=>{"use strict";var ys=wi(),qu=8,Ho=.35,Ie={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:qu},nm=(Ie.z1-Ie.z0)/2,Gu=Ie.crown-Ie.spring,Du=(Gu*Gu+nm*nm)/(2*Gu),Hu=Ie.crown-Du;function xs(e){let t=e-Ie.zc;return Hu+Math.sqrt(Math.max(0,Du*Du-t*t))}var ut={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},_a=Array.from({length:ut.count},(e,t)=>ut.first+t*ut.pitch),am=_a.slice(1).map(e=>e-ut.pitch/2),i4=[_a[0],_a[2],_a[4]],uf=[_a[1],_a[3]],Tr={r:1.3,sill:.62,spring:3.3},zo=[0,0,0],Ic=[11,0,0],_i=[10,0,0],Oc=[8,0,0];function Fn(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Lr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function Fc(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,f=new Set([o,n]);for(let v of s){f.add(v.u0),f.add(v.u1);let m=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.08)));for(let g=1;g<m;g++)f.add(v.u0+(v.u1-v.u0)*g/m)}for(let v of t.cuts||[])f.add(v);let l=t.topStep||.5;for(let v=o;v<n;v+=l)f.add(v);let u=[...f].filter(v=>v>=o-1e-9&&v<=n+1e-9).sort((v,m)=>v-m),h=(v,m)=>v.bot?v.bot(m):v.bottom,d=(v,m)=>{let g=i(v),y=m.map(k=>[Math.max(0,h(k,v)),Math.min(k.head(v),g)]).filter(k=>k[1]>k[0]).sort((k,z)=>k[0]-z[0]),b=[],M=0;for(let k of y)k[0]>M+1e-6&&b.push([M,k[0]]),M=Math.max(M,k[1]);return g>M+1e-6&&b.push([M,g]),b},p=(v,m,g)=>[v,m,g];for(let v=0;v<u.length-1;v++){let m=u[v],g=u[v+1],y=(m+g)/2,b=s.filter(q=>y>q.u0&&y<q.u1),M=b.length?Math.max(m,Math.max(...b.map(q=>q.u0))+1e-7):m,k=b.length?Math.min(g,Math.min(...b.map(q=>q.u1))-1e-7):g,z=d(M,b),R=d(k,b),D=Math.min(z.length,R.length);for(let q=0;q<D;q++){let[oe,I]=z[q],[ae,J]=R[q];I-oe<1e-6&&J-ae<1e-6||(Fn(e,p(m,oe,a),p(g,ae,a),p(g,J,a),p(m,I,a),[0,0,1],c),t.frontOnly||Fn(e,p(g,ae,r),p(m,oe,r),p(m,I,r),p(g,J,r),[0,0,-1],c))}}t.noEnds||(Fn(e,p(o,0,r),p(o,0,a),p(o,i(o),a),p(o,i(o),r),[-1,0,0],c),Fn(e,p(n,0,a),p(n,0,r),p(n,i(n),r),p(n,i(n),a),[1,0,0],c));for(let v of s){if(v.noReveal)continue;let m=v.mat||t.revealMat||c,g=Math.max(0,h(v,v.u0+1e-7)),y=Math.max(0,h(v,v.u1-1e-7)),b=Math.min(v.head(v.u0+1e-7),i(v.u0)),M=Math.min(v.head(v.u1-1e-7),i(v.u1));b>g+1e-6&&Fn(e,p(v.u0,g,a),p(v.u0,g,r),p(v.u0,b,r),p(v.u0,b,a),[1,0,0],m),M>y+1e-6&&Fn(e,p(v.u1,y,r),p(v.u1,y,a),p(v.u1,M,a),p(v.u1,M,r),[-1,0,0],m);let k=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.06)));for(let z=0;z<k;z++){let R=v.u0+(v.u1-v.u0)*z/k,D=v.u0+(v.u1-v.u0)*(z+1)/k,q=Math.max(R,v.u0+1e-7),oe=Math.min(D,v.u1-1e-7),I=Math.min(v.head(q),i(R)),ae=Math.min(v.head(oe),i(D));if(!(I>=i(R)-1e-6&&ae>=i(D)-1e-6)){let $e=D-R,Ye=ae-I,fe=Math.hypot($e,Ye)||1;Fn(e,p(R,I,r),p(D,ae,r),p(D,ae,a),p(R,I,a),[Ye/fe,-$e/fe,0],m)}let J=h(v,q),ne=h(v,oe);if(J>1e-6||ne>1e-6){let $e=D-R,Ye=ne-J,fe=Math.hypot($e,Ye)||1;Fn(e,p(D,ne,r),p(R,J,r),p(R,J,a),p(D,ne,a),[-Ye/fe,$e/fe,0],m)}}}}var $u=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function s4(e,t){let o=Tr.r,n=Tr.sill,r=Tr.spring,a=Ie.z0,i=24,s=(d,p,v)=>[t+Math.cos(d)*p,v,a-Math.sin(d)*p];for(let d=0;d<i;d++){let p=Math.PI*d/i,v=Math.PI*(d+1)/i,m=[-Math.cos(p),0,Math.sin(p)],g=[-Math.cos(v),0,Math.sin(v)],y=[e.vert(s(p,o,n),m,zo),e.vert(s(v,o,n),g,zo),e.vert(s(v,o,r),g,zo),e.vert(s(p,o,r),m,zo)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,f=(d,p)=>[t+Math.cos(d)*Math.cos(p)*o,r+Math.sin(p)*o,a-Math.sin(d)*Math.cos(p)*o],l=(d,p)=>[-Math.cos(d)*Math.cos(p),-Math.sin(p),Math.sin(d)*Math.cos(p)];for(let d=0;d<i;d++)for(let p=0;p<c;p++){let v=Math.PI*d/i,m=Math.PI*(d+1)/i,g=Math.PI/2*p/c,y=Math.PI/2*(p+1)/c,b=[e.vert(f(v,g),l(v,g),_i),e.vert(f(m,g),l(m,g),_i),e.vert(f(m,y),l(m,y),_i),e.vert(f(v,y),l(v,y),_i)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let d=1;d<8;d++){let p=Math.PI*d/8,v=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;v.push(f(p,g).map((y,b)=>y-l(p,g)[b]*.02))}e.tube(v,m=>.035*(1-m*.6),12,6,{mat:()=>_i})}let u=e.vert([t,n,a],[0,1,0],zo);for(let d=0;d<i;d++){let p=Math.PI*d/i,v=Math.PI*(d+1)/i;e.tri(u,e.vert(s(p,o,n),[0,1,0],zo),e.vert(s(v,o,n),[0,1,0],zo))}Lr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,zo),Lr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,zo);let h=.16;for(let d=0;d<i;d++){let p=Math.PI*d/i,v=Math.PI*(d+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];Fn(e,m(p,o,a+.05),m(v,o,a+.05),m(v,o+h,a+.05),m(p,o+h,a+.05),[0,0,1],zo),Fn(e,m(p,o+h,a),m(v,o+h,a),m(v,o+h,a+.05),m(p,o+h,a+.05),[Math.cos((p+v)/2),Math.sin((p+v)/2),0],zo),Fn(e,m(p,o,a),m(v,o,a),m(v,o,a+.05),m(p,o,a+.05),[-Math.cos((p+v)/2),-Math.sin((p+v)/2),0],zo)}for(let d of[-1,1]){let p=t+d*o,v=t+d*(o+h);Lr(e,p,n,a,v,r,a+.05,zo),Lr(e,p-d*.02,r-.12,a,v+d*.06,r,a+.09,zo)}Lr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,zo),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>zo})}var c4=Tr.sill+.4,l4=Ie.z0-.62;function f4(e){Fn(e,[14,0,Ie.z0-Ho],[Ie.x1+Ho,0,Ie.z0-Ho],[Ie.x1+Ho,0,Ie.z1+Ho],[14,0,Ie.z1+Ho],[0,1,0],zo),e.curMat=Ic,Fc(e,{u0:14+Ho,u1:Ie.x1+2*Ho,w0:Ie.z0-2*Ho,w1:Ie.z0,top:()=>Ie.spring,holes:uf.map(f=>({u0:f-Tr.r,u1:f+Tr.r,bottom:Tr.sill,head:$u(f,Tr.r,Tr.spring),noReveal:!0})),mat:Ic,cuts:[Ie.x1]});for(let f of uf)s4(e,f);e.save(),e.translate(0,0,Ie.z1),e.rotateY(Math.PI),e.translate(-(Ie.x1+2*Ho),0,-2*Ho);let t=f=>Ie.x1+2*Ho-f;Fc(e,{u0:t(Ie.x1+2*Ho),u1:t(13.65),w0:0,w1:2*Ho,top:()=>Ie.spring,holes:_a.map(f=>({u0:t(f+ut.halfW),u1:t(f-ut.halfW),bottom:ut.sill,head:$u(t(f),ut.halfW,ut.spring)})),mat:Ic,revealMat:zo}),e.restore(),e.save(),e.translate(Ie.x1,0,0),e.rotateY(-Math.PI/2);let o=ys.DOOR,n=Ie.zc,r=o.r;Fc(e,{u0:Ie.z0-2*Ho,u1:Ie.z1+2*Ho,w0:-2*Ho,w1:0,top:f=>f<Ie.z0||f>Ie.z1?Ie.spring:xs(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:$u(n,r,o.spring)}],mat:Ic,revealMat:zo}),e.restore(),e.save(),e.translate(14+Ho,0,0),e.rotateY(-Math.PI/2),Fc(e,{u0:Ie.z0,u1:Ie.z1,w0:-0,w1:2*Ho,top:()=>qu,topStep:.15,holes:[{u0:Ie.z0,u1:Ie.z1,bottom:0,head:f=>xs(f)}],mat:Ic,revealMat:zo}),e.restore();let a=14+Ho,i=Math.ceil((Ie.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let l=a+(Ie.x1-a)*f/i,u=[];for(let h=0;h<=s;h++){let d=Ie.z0+(Ie.z1-Ie.z0)*h/s,p=xs(d),v=[0,Hu-p,Ie.zc-d],m=Math.hypot(v[1],v[2]);u.push(e.vert([l,p,d],[0,v[1]/m,v[2]/m],_i))}c.push(u)}for(let f=0;f<i;f++)for(let l=0;l<s;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function rm(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=Ie.z0+(Ie.z1-Ie.z0)*i/32,c=xs(s),f=Hu-c,l=Ie.zc-s,u=Math.hypot(f,l),h=[c+f/u*n,s+l/u*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,f/u,l/u]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Fn(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,zo),Fn(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],zo),Fn(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],zo)}}function hf(e,t,o,n){let i=o,s=o+n*.16;Lr(e,t-.28,0,i,t+.28,Ie.spring-.3,s,zo),Lr(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),zo),Lr(e,t-.28-.05,Ie.spring-.3,i,t+.28+.05,Ie.spring-.1,o+n*(.16+.05),zo),Lr(e,t-.28-.1,Ie.spring-.1,i,t+.28+.1,Ie.spring,o+n*(.16+.1),zo)}function h4(e,t){let o=xs(Ie.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,Ie.zc,48,{mat:()=>_i});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=Ie.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=_i,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function u4(e){e.curMat=zo;for(let[t,o]of[[Ie.z0,1],[Ie.z1,-1]])Lr(e,14.35,Ie.spring-.12,t,Ie.x1,Ie.spring,t+o*.1,zo),Lr(e,14.35,Ie.spring-.04,t,Ie.x1,Ie.spring+.05,t+o*.18,zo);for(let[t,o]of[[Ie.z0,1],[Ie.z1,-1]])Lr(e,14.35,0,t,Ie.x1,.42,t+o*.12,zo),Lr(e,14.35,.42,t,Ie.x1,.5,t+o*.07,zo);for(let t of am)rm(e,t,.24,.16),hf(e,t,Ie.z0,1),hf(e,t,Ie.z1,-1);for(let t of[14.35+.28,Ie.x1-.28])rm(e,t,.28,.22),hf(e,t,Ie.z0,1),hf(e,t,Ie.z1,-1);for(let t of _a)h4(e,t)}function d4(e){let t=Ie.z1+Ho,o=t-.04,n=t+.04,r=(s,c,f,l)=>Lr(e,s,c,o,f,l,n,Oc),a=ut.halfW,i=(s,c,f,l,u,h)=>{let d=(p,v,m)=>[s+v*Math.cos(p),ut.spring+v*Math.sin(p),m];for(let p=0;p<h;p++){let v=l+(u-l)*p/h,m=l+(u-l)*(p+1)/h;Fn(e,d(v,c,o),d(m,c,o),d(m,f,o),d(v,f,o),[0,0,-1],Oc),Fn(e,d(v,f,n),d(m,f,n),d(m,c,n),d(v,c,n),[0,0,1],Oc)}};for(let s of _a){let c=s-a,f=s+a;r(c,ut.sill,c+.07,ut.spring),r(f-.07,ut.sill,f,ut.spring),r(c,ut.sill,f,ut.sill+.07),r(c,ut.spring-.04,f,ut.spring+.04);for(let u of[-.5,0,.5])r(s+u*a-.022,ut.sill,s+u*a+.022,ut.spring);let l=6;for(let u=1;u<l;u++){let h=ut.sill+(ut.spring-ut.sill)*u/l;r(c,h-.02,f,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let u=1;u<6;u++){let h=Math.PI*u/6,d=Math.cos(h),p=Math.sin(h),v=.02,m=(g,y)=>[s+d*g-p*v*y,ut.spring+p*g+d*v*y];Fn(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],Oc),Fn(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],Oc)}}}function p4(){let e=[],t=Ie.z1+Ho;for(let o of _a){let n=o-ut.halfW,r=o+ut.halfW;e.push([n,ut.sill,t],[r,ut.sill,t],[r,ut.spring,t],[n,ut.sill,t],[r,ut.spring,t],[n,ut.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,ut.spring,t],[o+ut.halfW*Math.cos(i),ut.spring+ut.halfW*Math.sin(i),t],[o+ut.halfW*Math.cos(s),ut.spring+ut.halfW*Math.sin(s),t])}}return e}function im(e,t){e.save(),e.translate(Ie.x1+Ho,0,Ie.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function v4(e){im(e,()=>{ys.addSurround(e),ys.addFrames(e,"fixed")})}function m4(e){return ys.glassPanes(e||"fixed").map(([o,n,r])=>[Ie.x1+Ho-r,n,Ie.zc-7+o])}function g4(e){f4(e),u4(e),d4(e),v4(e),e.curMat=[0,0,0]}var x4={x:Ie.x1+Ho,zLo:Ie.zc-ys.DOOR.r,zHi:Ie.zc+ys.DOOR.r},io=e=>e.toFixed(4);function y4(){return`
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
		float k = floor((q.x - ${io(ut.first)}) / ${io(ut.pitch)} + 0.5);
		if (k < 0.0 || k > ${io(ut.count-1)}) return 0.0;
		float dx = q.x - (${io(ut.first)} + k * ${io(ut.pitch)});
		float side = 1.0 - smoothstep(${io(ut.halfW)} - soft, ${io(ut.halfW)} + soft, abs(dx));
		float sill = smoothstep(${io(ut.sill)} - soft, ${io(ut.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${io(ut.spring)}));
		float head = q.y < ${io(ut.spring)} ? 1.0 : 1.0 - smoothstep(${io(ut.halfW)} - soft, ${io(ut.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${io(ut.halfW*.5)}), 0.022, soft));
		float rowH = ${io((ut.spring-ut.sill)/6)};
		float ry = (q.y - ${io(ut.sill)}) / rowH;
		cover = max(cover, q.y < ${io(ut.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${io(ut.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${io(Ie.x0)} || p.z < ${io(Ie.z0-.1)} || p.z > ${io(Ie.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${io(Ie.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${io(Ie.z1+2*Ho)} - p.z) / WIN_SKY.z;
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
		${uf.map(e=>`{ float d = abs(p.x - ${io(e)}); if (d < best) { best = d; lamp = vec3(${io(e)}, ${io(Tr.spring+.55)}, ${io(Ie.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${io(Ie.z0+1.6)} || p.z < ${io(Ie.z0-Tr.r-.1)} || p.x < ${io(Ie.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${io(Tr.r)}, ${io(Tr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${io(Ie.x0-1)}) return 0.0;
		float inC = smoothstep(${io(Ie.z0-1.5)}, ${io(Ie.z0)}, p.z) * smoothstep(${io(Ie.x0-1)}, ${io(Ie.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${io(Ie.z0)}, ${io(Ie.z1)}, p.z);
		return inC * near;
	}`}sm.exports={wallWithHoles:Fc,windowLightGLSL:y4,addWing:g4,windowGlass:p4,farDoorGlass:m4,atFarDoor:im,FAR_DOOR:x4,vaultY:xs,C:Ie,NICHE_X:uf,NICHE:Tr,NICHE_PLINTH_TOP:c4,NICHE_STATUE_Z:l4,WIN:ut,winCentres:_a,piers:am,PAINTING_X:i4,HEIGHT:qu}});var ra=de((Uk,fm)=>{"use strict";var ju=tr(),$o=8,_s=.35,p0=14,ws=4,Be={x0:p0+_s,x1:p0+_s+2*ws,z0:5.9-ws,z1:5.9+ws,zc:5.9,cx:p0+_s+ws,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:$o},oculus:3.3};Be.domeTop=Be.dome.base+Be.dome.r;var Ms={spokes:16,ringE:[.42,.95],bar:.035},zn={sxz:1.32,sy:1.6,yaw:.6};zn.crownC=[Be.cx,.4+3.4*zn.sy,Be.zc];zn.crownR=[2.3*zn.sxz,1.9*zn.sy,2.3*zn.sxz];zn.trunkR=.26*zn.sxz;zn.trunkTop=.4+2.2*zn.sy;var cm={inner:1.05,outer:1.62,seat:.48,soil:.4},vf=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),Gn=[0,0,0],bs=[11,0,0],df=[10,0,0],pf=[9,0,0],b4=[5,0,0],Bu=[3,0,0];function ri(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function br(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var w4=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function _4(e){e.save(),e.translate(p0+_s,0,0),e.rotateY(-Math.PI/2),ju.wallWithHoles(e,{u0:0,u1:ju.C.z0,w0:0,w1:2*_s,top:()=>$o,holes:[{u0:Be.zc-Be.arch.r,u1:Be.zc+Be.arch.r,bottom:0,head:w4(Be.zc,Be.arch.r,Be.arch.spring),step:.05}],mat:bs,revealMat:Gn,topStep:1}),e.restore();let t=p0-_s;for(let[i,s]of[[0,Be.zc-Be.arch.r],[Be.zc+Be.arch.r,ju.C.z0]])br(e,t-.12,0,i,t,.42,s,Gn),br(e,t-.07,.42,i,t,.5,s,Gn);let o=t,n=.24,r=40,a=(i,s,c)=>[c,Be.arch.spring+Math.sin(i)*s,Be.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;ri(e,a(s,Be.arch.r,o-.07),a(c,Be.arch.r,o-.07),a(c,Be.arch.r+n,o-.07),a(s,Be.arch.r+n,o-.07),[-1,0,0],Gn),ri(e,a(s,Be.arch.r+n,o),a(c,Be.arch.r+n,o),a(c,Be.arch.r+n,o-.07),a(s,Be.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Gn),ri(e,a(s,Be.arch.r,o),a(c,Be.arch.r,o),a(c,Be.arch.r,o-.07),a(s,Be.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Gn)}br(e,o-.12,Be.arch.spring+Be.arch.r-.06,Be.zc-.17,o,Be.arch.spring+Be.arch.r+n+.16,Be.zc+.17,Gn);for(let i of[-1,1]){let s=Be.zc+i*Be.arch.r,c=Be.zc+i*(Be.arch.r+n);br(e,o-.07,0,s,o,Be.arch.spring,c,Gn),br(e,o-.13,Be.arch.spring-.16,s-i*.03,o,Be.arch.spring,c+i*.08,Gn),br(e,o-.12,0,s-i*.03,o,.5,c+i*.06,Gn)}}function M4(e){let{x0:t,x1:o,z0:n,z1:r}=Be;ri(e,[p0,0,n],[o,0,n],[o,0,r],[p0,0,r],[0,1,0],Gn),e.curMat=bs,ri(e,[o,0,n],[o,0,r],[o,$o,r],[o,$o,n],[-1,0,0],bs),ri(e,[t,0,n],[o,0,n],[o,$o,n],[t,$o,n],[0,0,1],bs),ri(e,[o,0,r],[t,0,r],[t,$o,r],[o,$o,r],[0,0,-1],bs),ri(e,[t,0,r],[t,0,n],[t,$o,n],[t,$o,r],[1,0,0],bs),br(e,o-.12,0,n,o,.42,r,Gn),br(e,t,0,n,o,.42,n+.12,Gn),br(e,t,0,r-.12,o,.42,r,Gn),br(e,o-.2,$o-.3,n,o,$o,r,Gn),br(e,t,$o-.3,n,o,$o,n+.2,Gn),br(e,t,$o-.3,r-.2,o,$o,r,Gn),br(e,t,$o-.3,n,t+.2,$o,r,Gn);let a=Be.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([Be.cx+Math.cos(y)*a,Be.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(ws/Math.max(y,1e-6),ws/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,M=c(y),k=c(b),z=[Be.cx+Math.cos(y)*M,$o,Be.zc+Math.sin(y)*M],R=[Be.cx+Math.cos(b)*k,$o,Be.zc+Math.sin(b)*k];ri(e,[s[g][0],$o,s[g][1]],[s[g+1][0],$o,s[g+1][1]],R,z,[0,-1,0],df)}e.lathe([[a+.02,$o-.18,1],[a-.12,$o-.18,1],[a-.12,$o-.06,1],[a-.05,$o,1],[a,$o+.02]],Be.cx,Be.zc,i,{mat:()=>Gn});let f=16,l=(g,y,b)=>[Be.cx+Math.cos(g)*Math.cos(y)*b,Be.dome.base+Math.sin(y)*b,Be.zc+Math.sin(g)*Math.cos(y)*b],u=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/i,M=Math.PI*2*(g+1)/i,k=u*y/f,z=u*(y+1)/f,R=(q,oe)=>[-Math.cos(q)*Math.cos(oe),-Math.sin(oe),-Math.sin(q)*Math.cos(oe)],D=[e.vert(l(b,k,a),R(b,k),pf),e.vert(l(M,k,a),R(M,k),pf),e.vert(l(M,z,a),R(M,z),pf),e.vert(l(b,z,a),R(b,z),pf)];e.tri(D[0],D[1],D[2]),e.tri(D[0],D[2],D[3])}for(let g=0;g<Ms.spokes;g++){let y=Math.PI*2*g/Ms.spokes,b=[];for(let M=0;M<=14;M++)b.push(l(y,(u-.06)*M/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>df})}for(let g of Ms.ringE){let y=Math.cos(g)*(a-.04),b=Be.dome.base+Math.sin(g)*(a-.04),M=[];for(let k=0;k<=72;k++){let z=Math.PI*2*k/72;M.push([Be.cx+Math.cos(z)*y,b,Be.zc+Math.sin(z)*y])}e.tube(M,()=>.035,72,6,{mat:()=>df})}e.ellipsoid([Be.cx,Be.dome.base+a-.06,Be.zc],[.16,.08,.16],6,12,{mat:()=>df});let h=.46,d=.55,p=.12,v=(g,y,b,M)=>{br(e,g,h-.08,y,b,h,M,Bu);let k=b-g>M-y?[g+.25,b-.25]:[g+.06,b-.06],z=b-g>M-y?[y+.06,M-.06]:[y+.25,M-.25];br(e,k[0],0,z[0],k[1],h-.08,z[1],Bu)};v(o-p-d,n+1.1,o-p,r-1.1),v(t+1,n+p,o-1.1,n+p+d),v(t+1,r-p-d,o-1.1,r-p);let m=cm;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],Be.cx,Be.zc,64,{mat:()=>Bu}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],Be.cx,Be.zc,48,{mat:()=>b4})}function E4(e){_4(e),M4(e),e.curMat=[0,0,0]}var No=e=>e.toFixed(4);function lm(){let e=Be.dome.r,t=Ms.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${No(vf[0])}, ${No(vf[1])}, ${No(vf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${No(Be.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${No(Be.cx)}, ${No(Be.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${No(e-.15)} - soft, ${No(e-.15)} + soft, d);
		float hw = ${No(Ms.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${No(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${No(Math.PI*2/Ms.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${No(zn.crownC[0])}, ${No(zn.crownC[1])}, ${No(zn.crownC[2])});
		vec3 r = vec3(${No(zn.crownR[0])}, ${No(zn.crownR[1])}, ${No(zn.crownR[2])});
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
		float tt = (${No(zn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${No(Be.cx)}, ${No(Be.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${No(zn.trunkR*.7)}, ${No(zn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function k4(){return`
	${lm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${No(Be.x0-.75)} || p.z < ${No(Be.z0-.5)} || p.z > ${No(Be.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${No(Be.x0-1.5)} || p.z < ${No(Be.z0-1.5)} || p.z > ${No(Be.z1+1.5)}) return 0.0;
		float inside = smoothstep(${No(Be.x0-1.2)}, ${No(Be.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${No(Be.cx)}, ${No(Be.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}fm.exports={addAlcove:E4,alcoveLightGLSL:k4,oculusGLSL:lm,A:Be,BENCH:cm,SHAFT:vf,TREE:zn}});var or=de((Wk,um)=>{"use strict";var Ma=0;try{let e=location.search;/[?&]night\b/.test(e)&&(Ma=1)}catch(e){}var ai=Ma,Uu=0,hm=[],mf={tick(e){let t=Uu?Math.min(.1,e-Uu):0;if(Uu=e,ai!==Ma){let o=t/2.4;ai=Ma>ai?Math.min(Ma,ai+o):Math.max(Ma,ai-o)}return mf.night},get night(){return ai*ai*(3-2*ai)},get isNight(){return Ma===1},get settled(){return ai===Ma},set(e){Ma=e?1:0,hm.forEach(t=>t(Ma))},toggle(){mf.set(!Ma)},onChange(e){hm.push(e)}};mf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;um.exports=mf});var Ei=de((Vk,Dc)=>{"use strict";var Wu=or(),{C:Vu}=tr(),{A:gf,BENCH:Gc}=ra(),Nn=Math.PI,S4=[18,29,40],xf=.575,Mi=[],$c=(e,t,o,n,r,a,i)=>Mi.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));S4.forEach(e=>{$c(1.25+xf+.48,3.25,e,[1,0],.48,xf,{s:1.2}),$c(12.75-xf-.48,3.25,e,[-1,0],.48,xf,{s:1.2})});[3,11].forEach(e=>$c(e,3.45,Vu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var A4=[14.63,19.63,24.03,28.43,32.83,Vu.x1-.28];A4.forEach(e=>$c(e,3.15,Vu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>$c(.35+.44,2.75,e,[1,0],.44,99));{let e=(Gc.inner+Gc.outer)/2,t=Math.atan2(-1.12,-.98);Mi.push({x:gf.cx+Math.cos(t)*e,y:Gc.seat+.155,z:gf.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[gf.cx,gf.zc,Gc.outer+.07,Gc.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Xu=.13,yf=.21,$n=Xu/Math.cos(Nn/6),_o=e=>e.toFixed(4);function dm(e){let o=(e||Mi.map((n,r)=>r)).map(n=>{let r=Mi[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${_o(r.ring[3]-.03)}) {
					float tt = ${_o(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${_o(r.x)}, ${_o(r.z)}) + D.xz * tt - vec2(${_o(r.ring[0])}, ${_o(r.ring[1])});
					T *= smoothstep(${_o(r.ring[2]-.02)}, ${_o(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${_o(r.o[0])}, ${_o(r.o[1])}));
					if (behind > ${_o(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${_o(a)}, ${_o(i)}))) * ${_o(r.back)} / behind;
						T *= smoothstep(${_o(r.hw-.04)}, ${_o(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${_o(r.x)}, ${_o(r.y)}, ${_o(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${_o(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${_o(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${_o(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${_o(n*1.7)}) + 0.04 * sin(time * 15.3 + ${_o(n*2.9)}) * sin(time * 1.9 + ${_o(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${_o(1/(r.s*r.s))}) * (1.0 - smoothstep(${_o(r.range*.6)}, ${_o(r.range)}, d));
					sum += ${_o(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${_o(Nn/6)}, ${_o(Nn/3)}) - ${_o(Nn/6)};
		float U = tan(t) / ${_o(Math.tan(Nn/6))};
		float V = (q.y / h) * (${_o(Xu/yf)} / cos(t));
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
	}`}var jo=0,T4=1;function L4(){let e=[],t=[],o=[],n=[],r=[],a=(d,p,v,m)=>(e.push(d[0],d[1],d[2]),t.push(p[0],p[1],p[2]),o.push(v),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(d,p)=>[d[0]-p[0],d[1]-p[1],d[2]-p[2]],s=(d,p)=>[d[1]*p[2]-d[2]*p[1],d[2]*p[0]-d[0]*p[2],d[0]*p[1]-d[1]*p[0]],c=d=>{let p=Math.hypot(d[0],d[1],d[2])||1;return[d[0]/p,d[1]/p,d[2]/p]};function f(d,p,v,m,g,y){let b=c(s(i(p,d),i(m,d))),M=a(d,b,g,[0,0]),k=a(p,b,g,[1,0]),z=a(v,b,g,[1,1]),R=a(m,b,g,[0,1]);r.push(M,k,z,M,z,R),y&&r.push(M,z,k,M,R,z)}function l(d,p,v){for(let y=0;y<d.length;y++){let b=d[Math.max(0,y-1)],M=d[Math.min(d.length-1,y+1)],k=c(i(M,b)),z=Math.abs(k[1])>.9?[1,0,0]:[0,1,0],R=c(s(k,z)),D=s(R,k),q=typeof p=="function"?p(y/(d.length-1)):p;for(let oe=0;oe<=6;oe++){let I=oe/6*Nn*2,ae=Math.cos(I),J=Math.sin(I),ne=[R[0]*ae+D[0]*J,R[1]*ae+D[1]*J,R[2]*ae+D[2]*J];a([d[y][0]+ne[0]*q,d[y][1]+ne[1]*q,d[y][2]+ne[2]*q],ne,v)}}let g=e.length/3-d.length*7;for(let y=0;y<d.length-1;y++)for(let b=0;b<6;b++){let M=g+y*7+b,k=M+6+1;r.push(M,k,M+1,M+1,k,k+1)}}function u(d,p,v,m,g,y,b,M,k){let z=(R,D,q)=>{let oe=y+Nn/6+q*Nn/3;return[d[0]+Math.cos(oe)*R,D,d[2]+Math.sin(oe)*R]};for(let R=0;R<6;R++)f(z(m,p,R+1),z(m,p,R),z(g,v,R),z(g,v,R+1),b);if(M&&g>0)for(let R=0;R<6;R++){let D=a([d[0],v,d[2]],[0,1,0],b),q=a(z(g,v,R),[0,1,0],b),oe=a(z(g,v,R+1),[0,1,0],b);r.push(D,oe,q)}if(k&&m>0)for(let R=0;R<6;R++){let D=a([d[0],p,d[2]],[0,-1,0],b),q=a(z(m,p,R),[0,-1,0],b),oe=a(z(m,p,R+1),[0,-1,0],b);r.push(D,q,oe)}}function h(d,p,v,m,g,y,b){let M=[];for(let z=0;z<=18;z++){let R=z/18,D=(b||0)+R*m*Nn*2,q=v*(1-.75*R);M.push([d[0]+p[0]*Math.cos(D)*q,d[1]+Math.sin(D)*q,d[2]+p[2]*Math.cos(D)*q])}l(M,g,y)}return Mi.forEach(d=>{let p=d.s,v=Math.atan2(d.o[1],d.o[0]),m=[d.x,d.y,d.z],g=(M,k,z)=>[d.x+d.o[0]*M-d.o[1]*(z||0),d.y+k,d.z+d.o[1]*M+d.o[0]*(z||0)],y=d.y-yf*p,b=d.y+yf*p;for(let M=0;M<6;M++){let k=v+Nn/6+M*Nn/3,z=k+Nn/3,R=$n*p*.97,D=[d.x+Math.cos(k)*R,y,d.z+Math.sin(k)*R],q=[d.x+Math.cos(z)*R,y,d.z+Math.sin(z)*R];f(q,D,[D[0],b,D[2]],[q[0],b,q[2]],T4,!0)}for(let M=0;M<6;M++){let k=v+Nn/6+M*Nn/3,z=$n*p;l([[d.x+Math.cos(k)*z,y-.02*p,d.z+Math.sin(k)*z],[d.x+Math.cos(k)*z,b+.02*p,d.z+Math.sin(k)*z]],.011*p,jo)}u(m,y-.035*p,y,$n*p*1.12,$n*p*1.12,v,jo,!0,!0),u(m,y-.1*p,y-.035*p,$n*p*.55,$n*p*1,v,jo,!1,!0),u(m,y-.17*p,y-.1*p,0,$n*p*.55,v,jo,!1,!1);for(let M=0;M<6;M++){let k=v+M*Nn/3,z=Xu*p*1.06,R=[d.x+Math.cos(k)*z,y-.06*p,d.z+Math.sin(k)*z];h(R,[-Math.sin(k),0,Math.cos(k)],.03*p,.85,.004*p,jo,.3)}u(m,b,b+.03*p,$n*p*1.14,$n*p*1.14,v,jo,!1,!0),u(m,b+.03*p,b+.2*p,$n*p*1.14,$n*p*.32,v,jo,!1,!1),u(m,b+.2*p,b+.27*p,$n*p*.34,$n*p*.34,v,jo,!1,!1),u(m,b+.27*p,b+.37*p,$n*p*.42,0,v,jo,!1,!0),l([[d.x,b+.36*p,d.z],[d.x,b+.47*p,d.z]],M=>.01*p*(1-.7*M),jo),u([d.x,0,d.z],b+.44*p,b+.47*p,.018*p,0,v,jo,!1,!0);for(let M=0;M<6;M++){let k=v+Nn/6+M*Nn/3,z=$n*p*1.14,R=[d.x+Math.cos(k)*z,b+.03*p,d.z+Math.sin(k)*z];l([R,[R[0],R[1]+.09*p,R[2]]],D=>.008*p*(1-.8*D),jo),u([R[0],0,R[2]],R[1]+.035*p,R[1]+.06*p,.014*p,.014*p,k,jo,!0,!0)}if(d.mount==="wall"){let M=d.back,k=y-.32,z=g(-M,0,0);((I,ae,J)=>{let ne=[d.o[0],0,d.o[1]],$e=[-d.o[1],0,d.o[0]],Ye=(Fe,ft,Gt)=>[z[0]+$e[0]*Fe+ne[0]*Gt,ft,z[2]+$e[2]*Fe+ne[2]*Gt],fe=.03,ve=.065;f(Ye(-J,I,ve),Ye(J,I,ve),Ye(J,ae,ve),Ye(-J,ae,ve),jo,!0),f(Ye(J,I,fe),Ye(J,I,ve),Ye(J,ae,ve),Ye(J,ae,fe),jo,!0),f(Ye(-J,I,ve),Ye(-J,I,fe),Ye(-J,ae,fe),Ye(-J,ae,ve),jo,!0),f(Ye(-J,ae,ve),Ye(J,ae,ve),Ye(J,ae,fe),Ye(-J,ae,fe),jo,!0),f(Ye(-J,I,fe),Ye(J,I,fe),Ye(J,I,ve),Ye(-J,I,ve),jo,!0),u([z[0]+ne[0]*ve,0,z[2]+ne[2]*ve],ae,ae+.05,J*.6,0,v,jo,!1,!0),u([z[0]+ne[0]*ve,0,z[2]+ne[2]*ve],I-.05,I,0,J*.6,v,jo,!1,!1)})(k-.2,k+.2,.07);let D=[];for(let I=0;I<=14;I++){let ae=I/14,J=-M+.05+ae*(M-.05),ne=k+.04+(y-.17*p-k-.04)*Math.pow(ae,2.2);D.push(g(J,ne-d.y,0))}l(D,I=>.022*(1-.3*I),jo);let q=[];for(let I=0;I<=10;I++){let ae=I/10;q.push(g(-M+.05+ae*M*.6,k-.14+ae*.16+.05*Math.sin(ae*Nn)-d.y,0))}l(q,.009,jo);let oe=q[q.length-1];h([oe[0]-d.o[0]*.03,oe[1]+.02,oe[2]-d.o[1]*.03],[d.o[0],0,d.o[1]],.045,1.1,.007,jo,-.4),[.3,.55].forEach(I=>{let ae=D[Math.round(I*14)],J=q[Math.round(I/.62*10)]||q[10];l([ae,J],.006,jo)}),[-1,1].forEach(I=>{let ae=g(-.05,-yf*p-.2*p,0);h([ae[0]-d.o[1]*I*.05,ae[1],ae[2]+d.o[0]*I*.05],[-d.o[1]*I,0,d.o[0]*I],.05*p,.9,.006,jo,Nn)})}else for(let M=0;M<3;M++){let k=v+M*Nn*2/3,z=[d.x+Math.cos(k)*$n*p*.7,y-.035*p,d.z+Math.sin(k)*$n*p*.7],R=[d.x+Math.cos(k)*$n*p*1.25,y-.17*p,d.z+Math.sin(k)*$n*p*1.25];l([z,R],.012*p,jo)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}Dc.exports=e=>{let t=L4(),o=e({vert:`
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
		${dm()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>Wu.night}}),n=[],r=[];Mi.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>Wu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Wu.night>.01&&a()}};Dc.exports.lanternGLSL=dm;Dc.exports.LANTERNS=Mi;Dc.exports.TREE_LANTERN=[Mi.length-1]});var Ai=de((Xk,zr)=>{"use strict";var z4=or(),Eo=Math.PI,Vo=e=>(+e).toFixed(4),N4=e=>`vec3(${Vo(e[0])}, ${Vo(e[1])}, ${Vo(e[2])})`,ct={x:-7,z:44.5},Dt=5.2,Vn=15,Ve={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},$a={z0:42.2,z1:46.8,top:6.3,x:.35},_f=[ct.x-Math.sqrt(Dt*Dt-3.05*3.05),0,0],vn={x0:-2.05+_f[0],x1:_f[0],z0:41.45,z1:47.55,top:4.3},Yu=[[vn.x1+.05,2.35,vn.z0-.45],[vn.x1+.05,2.35,vn.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-ct.z,e-ct.x);return[ct.x+Math.cos(n)*(Dt-.16),t,ct.z+Math.sin(n)*(Dt-.16)]}),xo={ri:3.4,ro:Dt,a0:-35*Eo/180,rise:.1836,step:3.6*Eo/180,n:88,thick:.36};xo.k=xo.rise/xo.step;var wr=e=>xo.a0-e,Si=e=>e*xo.k,Xo={x:ct.x+.1,z:ct.z-.15,yaw:-Eo/2,scale:1.3},ii=Xo.scale/1.1,qc={keyX0:Xo.x-.524*ii,keyX1:Xo.x+.491*ii,keyTop:.647*ii,keyFront:Xo.z+.808*ii,keyBack:Xo.z+.72*ii,stoolX:Xo.x-.041*ii,stoolZ:Xo.z+1.122*ii,stoolFront:Xo.z+.96*ii,stoolTop:.37*ii,heading:Eo},wf=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function vm(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function R4(e,t){let o=1e9;for(let n=0;n<wf.length-1;n++){let[r,a]=wf[n],[i,s]=wf[n+1],c=i-r,f=s-a,l=Math.max(0,Math.min(1,((e-r)*c+(t-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(e-r-c*l,t-a-f*l))}return o}var bf=e=>Ve.spring+Math.sqrt(Math.max(0,Ve.r*Ve.r-(e-Ve.zc)*(e-Ve.zc))),ki=e=>ct.x+Math.sqrt(Math.max(0,Dt*Dt-(e-ct.z)*(e-ct.z)));function Es(e,t){return Math.hypot(e-ct.x,t-ct.z)<Dt||e<=0&&e>ct.x&&t>Ve.z0&&t<Ve.z1||e>vn.x0&&e<vn.x1&&t>vn.z0&&t<vn.z1}function C4(e,t){if(Math.hypot(e-ct.x,t-ct.z)<xo.ri-.05)return 99;let n=Math.atan2(t-ct.z,e-ct.x),r=xo.a0-n;for(;r<0;)r+=2*Eo;for(;r>=2*Eo;)r-=2*Eo;return r>xo.n*xo.step?99:Si(r)-xo.thick}function P4(){let e=[],t=vm(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let f=e[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-i)<s+f[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-Xo.x,c=i-Xo.z,f=Math.cos(Xo.yaw),l=Math.sin(Xo.yaw),u=(f*s-l*c)/Xo.scale,h=(l*s+f*c)/Xo.scale;return u>-1.05&&u<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(Dt-1.45),s=t()*2*Eo,c=ct.x+Math.cos(s)*i,f=ct.z+Math.sin(s)*i;if(!Es(c,f)||i>Dt-.18||n(c,f)||R4(c,f)<.62||C4(c,f)<2.3||c<vn.x1+.9)continue;let l=.022+t()*.02;if(o(c,f,l))continue;let u=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,f,l,u,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*xo.step,f=wr(c),l=xo.ri+.55+t()*(xo.ro-xo.ri-.75),u=.022+t()*.016;e.push([ct.x+Math.cos(f)*l,(a+1)*xo.rise,ct.z+Math.sin(f)*l,u,.05+t()*.14,t()*100])}}for(let a of Yu)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[vn.z0-.35,vn.z1+.35])for(let i=0;i<9;i++){let s=vn.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-ct.x,c-ct.z)>Dt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function I4(e){let o=vm(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,f=1e9;n.forEach((l,u)=>{let h=(s[0]-l[0])**2+(s[1]-l[1])**2*4+(s[2]-l[2])**2;h<f&&(f=h,c=u)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var Ku=P4(),pm=I4(Ku.filter(e=>e[1]<2||e[1]>2.5)).concat(Yu.map(e=>[e[0],e[1]+.35,e[2],.035]));function mm(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${pm.map((t,o)=>`
		{
			vec3 d = ${N4(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Vo(5.3+o*.71)} + ${Vo(o*1.9)}) + 0.06 * sin(time * ${Vo(11.7+o*1.3)} + ${Vo(o*.7)});
			float w = ${Vo(t[3]*pm.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Vo(Vn)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Vo(ct.x)}, ${Vo(Vn)}, ${Vo(ct.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Vo(qc.stoolX)}, ${Vo(qc.keyFront+.1)})));
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
	}`}var Rt={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function gm(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),f=e.v(o,a,i,s&&s[1]),l=e.v(n,a,i,s&&s[2]),u=e.v(r,a,i,s&&s[3]);e.idx.push(c,f,l,c,l,u)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function O4(){let e=gm(),t=(n,r,a)=>[ct.x+Math.cos(n)*r,a,ct.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>vn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,f=a+.2;if(!(Es(i,c)||Es(s,c)||Es(i,f)||Es(s,f)||Es((i+s)/2,(c+f)/2)))continue;let l=c,u=f;i>ki(Ve.z0)-.3&&(l=Math.max(l,Ve.z0),u=Math.min(u,Ve.z1),u<=l)||e.quad([i,0,l],[i,0,u],[s,0,u],[s,0,l],[0,1,0],Rt.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*Eo,i=(r+1)/360*2*Eo,s=(a+i)/2,c=t(s,Dt,0),f=0;c[0]>ct.x&&c[2]>Ve.z0-.02&&c[2]<Ve.z1+.02&&(f=Math.max(bf(Math.min(Math.max(t(a,Dt,0)[2],Ve.z0),Ve.z1)),bf(Math.min(Math.max(t(i,Dt,0)[2],Ve.z0),Ve.z1)))),c[0]<ct.x&&c[2]>vn.z0-.02&&c[2]<vn.z1+.02&&(f=vn.top);let l=a*Dt,u=i*Dt,h=o(a).map(v=>-v),d=o(i).map(v=>-v),p=[f];for(let v=Math.ceil(f/2.5)*2.5;v<Vn;v+=2.5)v>f+.01&&p.push(v);p.push(Vn);for(let v=0;v<p.length-1;v++){let m=p[v],g=p[v+1],y=e.v(t(a,Dt,m),h,Rt.WALL,[l,m]),b=e.v(t(i,Dt,m),d,Rt.WALL,[u,m]),M=e.v(t(i,Dt,g),d,Rt.WALL,[u,g]),k=e.v(t(a,Dt,g),h,Rt.WALL,[l,g]);e.idx.push(y,b,M,y,M,k)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*Eo,f=(s+1)/360*2*Eo,l=(c+f)/2,u=t(l,Dt,0);if(r<1&&(u[0]>ct.x&&u[2]>Ve.z0&&u[2]<Ve.z1||u[0]<ct.x&&u[2]>vn.z0&&u[2]<vn.z1))continue;let h=Dt-i;e.quad(t(c,h,r),t(f,h,r),t(f,h,r+a),t(c,h,r+a),o(l).map(d=>-d),Rt.WALL,[[c*Dt,r+100],[f*Dt,r+100],[f*Dt,r+a+100],[c*Dt,r+a+100]]),e.quad(t(c,h,r+a),t(f,h,r+a),t(f,Dt,r+a),t(c,Dt,r+a),[0,1,0],Rt.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,Dt,r),t(f,Dt,r),t(f,h,r),t(c,h,r),[0,-1,0],Rt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=$a.x;for(let[a,i]of[[Ve.z0,1],[Ve.z1,-1]]){let s=ki(a);e.quad([n,0,a],[s,0,a],[s,Ve.spring,a],[n,Ve.spring,a],[0,0,i],Rt.WALL,[[n,0],[s,0],[s,Ve.spring],[n,Ve.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*Eo,s=(a+1)/r*Eo,c=Ve.zc-Math.cos(i)*Ve.r,f=Ve.zc-Math.cos(s)*Ve.r,l=Ve.spring+Math.sin(i)*Ve.r,u=Ve.spring+Math.sin(s)*Ve.r,h=[0,-Math.sin(i),Math.cos(i)],d=[0,-Math.sin(s),Math.cos(s)],p=e.v([n,l,c],h,Rt.WALL,[n,i*Ve.r]),v=e.v([ki(c),l,c],h,Rt.WALL,[ki(c),i*Ve.r]),m=e.v([ki(f),u,f],d,Rt.WALL,[ki(f),s*Ve.r]),g=e.v([n,u,f],d,Rt.WALL,[n,s*Ve.r]);e.idx.push(p,v,m,p,m,g)}}{let n=$a.x,r=.05;for(let f=$a.z0;f<$a.z1-1e-6;f+=r){let l=f,u=Math.min($a.z1,f+r),d=(p=>p>Ve.z0&&p<Ve.z1)((l+u)/2)?Math.max(bf(l),bf(u)):0;e.quad([n,d,l],[n,d,u],[n,$a.top,u],[n,$a.top,l],[1,0,0],Rt.HALLSTONE,[[l,d],[u,d],[u,$a.top],[l,$a.top]])}let a=.32,i=.06,s=n+i,c=36;for(let f=0;f<c;f++){let l=f/c*Eo,u=(f+1)/c*Eo,h=(g,y)=>[s,Ve.spring+Math.sin(g)*y,Ve.zc-Math.cos(g)*y],d=Ve.r,p=Ve.r+a;e.quad(h(l,d),h(u,d),h(u,p),h(l,p),[1,0,0],Rt.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let v=(g,y,b)=>[b,Ve.spring+Math.sin(g)*y,Ve.zc-Math.cos(g)*y],m=[0,Math.sin((l+u)/2),-Math.cos((l+u)/2)];e.quad(v(l,p,n),v(u,p,n),v(u,p,s),v(l,p,s),m,Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(v(l,d,n),v(u,d,n),v(u,d,s),v(l,d,s),m.map(g=>-g),Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,u]of[[Ve.z0-a,Ve.z0,-1],[Ve.z1,Ve.z1+a,1]]){e.quad([s,0,f],[s,0,l],[s,Ve.spring,l],[s,Ve.spring,f],[1,0,0],Rt.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=u<0?f:l,d=u<0?l:f;e.quad([n,0,h],[s,0,h],[s,Ve.spring,h],[n,Ve.spring,h],[0,0,u],Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,d],[s,0,d],[s,Ve.spring,d],[n,Ve.spring,d],[0,0,-u],Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let p=Ve.spring-.16,v=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;e.quad([n+m,p,g],[n+m,p,y],[n+m,p+v,y],[n+m,p+v,g],[1,0,0],Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,p+v,g],[n+m,p+v,g],[n+m,p+v,y],[n,p+v,y],[0,1,0],Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,p,g],[n,p,y],[n+m,p,y],[n+m,p,g],[0,-1,0],Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,p,b],[n+m,p,b],[n+m,p+v,b],[n,p+v,b],[0,0,b===g?-1:1],Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=Ve.spring+Ve.r-.05,l=Ve.spring+Ve.r+a+.12,u=.16,h=.22,d=s+.04;e.quad([d,f,Ve.zc-u],[d,f,Ve.zc+u],[d,l,Ve.zc+h],[d,l,Ve.zc-h],[1,0,0],Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let p of[-1,1])e.quad([n,f,Ve.zc+p*u],[d,f,Ve.zc+p*u],[d,l,Ve.zc+p*h],[n,l,Ve.zc+p*h],[0,0,p],Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,l,Ve.zc-h],[d,l,Ve.zc-h],[d,l,Ve.zc+h],[n,l,Ve.zc+h],[0,1,0],Rt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=vn;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],Rt.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[f,l]of[[a,1],[i,-1]]){let u=ct.x-Math.sqrt(Dt*Dt-(f-ct.z)*(f-ct.z));e.quad([n,0,f],[u,0,f],[u,s,f],[n,s,f],[0,0,l],Rt.WALL,[[n,0],[u,0],[u,s],[n,s]])}let c=24;for(let f=0;f<c;f++){let l=a+(i-a)*f/c,u=a+(i-a)*(f+1)/c,h=ct.x-Math.sqrt(Dt*Dt-(l-ct.z)**2),d=ct.x-Math.sqrt(Dt*Dt-(u-ct.z)**2);e.quad([n,s,l],[h,s,l],[d,s,u],[n,s,u],[0,-1,0],Rt.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(i-a)*f/c,u=a+(i-a)*(f+1)/c,h=ct.x-Math.sqrt(Dt*Dt-(l-ct.z)**2)+.05,d=ct.x-Math.sqrt(Dt*Dt-(u-ct.z)**2)+.05;e.quad([h,s-.3,l],[d,s-.3,u],[d,s,u],[h,s,l],[1,0,0],Rt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Dt];for(let a=0;a<120;a++){let i=a/120*2*Eo,s=(a+1)/120*2*Eo,c=(i+s)/2;c>Eo&&(c-=2*Eo);for(let f=0;f<r.length-1;f++){let l=r[f],u=r[f+1],h=c*180/Eo;l>=3.3&&h>8&&h<85||e.quad(t(i,l,Vn),t(i,u,Vn),t(s,u,Vn),t(s,l,Vn),[0,-1,0],Rt.CEIL,[[i*l,l],[i*u,u],[s*u,u],[s*l,l]])}e.quad(t(i,1.15,Vn),t(s,1.15,Vn),t(s,1.15,Vn+.7),t(i,1.15,Vn+.7),o(c).map(f=>-f),Rt.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([ct.x,Vn+.7,ct.z],t(s,1.15,Vn+.7),t(i,1.15,Vn+.7),[0,-1,0],Rt.OCULUS)}}{let n=xo.ri,r=xo.ro,a=xo.n*xo.step;for(let c=0;c<xo.n;c++){let f=c*xo.step,l=(c+1)*xo.step,u=wr(f),h=wr(l),d=(c+1)*xo.rise,p=c*xo.rise,v=2;for(let y=0;y<v;y++){let b=u+(h-u)*y/v-(y===0?.004:0),M=u+(h-u)*(y+1)/v;e.quad(t(b,n,d),t(b,r,d),t(M,r,d),t(M,n,d),[0,1,0],Rt.STEP,[[n*b,c],[r*b,c],[r*M,c],[n*M,c]])}let m=[-Math.sin(u),0,Math.cos(u)],g=u-.004;e.quad(t(g,n,p),t(g,r,p),t(g,r,d),t(g,n,d),m,Rt.STEP,[[n*u,c+.5],[r*u,c+.5],[r*u,c+.5],[n*u,c+.5]]),e.quad(t(u,n,Si(f)+.06),t(h,n,Si(l)+.06),t(h,n,d),t(g,n,d),o((u+h)/2).map(y=>-y),Rt.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*Eo/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let f=c/i*a,l=(c+1)/i*a,u=wr(f),h=wr(l),d=Si(f),p=Si(l),v=d-xo.thick,m=p-xo.thick,g=o(u).map(R=>-R),y=o(h).map(R=>-R),b=e.v(t(u,n,v),g,Rt.STRING,[f*n,0]),M=e.v(t(h,n,m),y,Rt.STRING,[l*n,0]),k=e.v(t(h,n,p+.06),y,Rt.STRING,[l*n,1]),z=e.v(t(u,n,d+.06),g,Rt.STRING,[f*n,1]);e.idx.push(b,M,k,b,k,z);for(let R=0;R<s.length-1;R++){let D=s[R],q=s[R+1],oe=I=>{let ae=o(I);return[-ae[0]*.12,-.99,-ae[2]*.12]};e.quad(t(u,D,v),t(u,q,v),t(h,q,m),t(h,D,m),oe((u+h)/2),Rt.SOFFIT,[[f*D,D],[f*q,q],[l*q,q],[l*D,D]])}}}return e}function F4(){let e=gm(),t=xo.ri+.045,o=xo.n*xo.step,n=Math.ceil(o/(.8*Eo/180)),r=.92,a=(c,f,l)=>[ct.x+Math.cos(c)*f,l,ct.z+Math.sin(c)*f],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,u=wr(f),h=wr(l),d=Si(f)+.06,p=Si(l)+.06,v=i(u).map(R=>-R),m=i(h).map(R=>-R),g=f*t,y=l*t,b=e.v(a(u,t,d),v,Rt.RAILING,[g,0]),M=e.v(a(h,t,p),m,Rt.RAILING,[y,0]),k=e.v(a(h,t,p+r),m,Rt.RAILING,[y,r]),z=e.v(a(u,t,d+r),v,Rt.RAILING,[g,r]);e.idx.push(b,M,k,b,k,z)}((c,f,l,u)=>{let d=v=>{let m=wr(v),g=Si(v)+.06+f,y=a(m,t+c,g),b=i(m),M=[];for(let k=0;k<8;k++){let z=k/8*2*Eo,R=[b[0]*Math.cos(z),Math.sin(z),b[2]*Math.cos(z)];M.push([[y[0]+R[0]*l,y[1]+R[1]*l,y[2]+R[2]*l],R])}return M},p=d(0);for(let v=1;v<=n;v++){let m=d(v/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(p[g][0],p[g][1],u),M=e.v(m[g][0],m[g][1],u),k=e.v(m[y][0],m[y][1],u),z=e.v(p[y][0],p[y][1],u);e.idx.push(b,M,k,b,k,z)}p=m}})(0,r+.02,.028,Rt.IRON);for(let c of Yu){let f=Math.atan2(c[2]-ct.z,c[0]-ct.x),l=[Math.cos(f),0,Math.sin(f)],u=12;for(let v=0;v<u;v++){let m=v/u*2*Eo,g=(v+1)/u*2*Eo,y=(b,M,k)=>[c[0]+Math.cos(b)*M,k,c[2]+Math.sin(b)*M];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Rt.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Rt.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],d=[-l[2],0,l[0]],p=.018;e.quad([h[0]-d[0]*p,h[1],h[2]-d[2]*p],[h[0]+d[0]*p,h[1],h[2]+d[2]*p],[c[0]+d[0]*p,c[1]-.05,c[2]+d[2]*p],[c[0]-d[0]*p,c[1]-.05,c[2]-d[2]*p],[-l[0],.5,-l[2]],Rt.IRON)}{let c=wr(0),f=a(c,t,0),l=10;for(let u=0;u<l;u++){let h=u/l*2*Eo,d=(u+1)/l*2*Eo,p=(v,m,g)=>[f[0]+Math.cos(v)*m,g,f[2]+Math.sin(v)*m];e.quad(p(h,.035,0),p(d,.035,0),p(d,.035,r+.1),p(h,.035,r+.1),[Math.cos((h+d)/2),0,Math.sin((h+d)/2)],Rt.IRON),e.quad(p(h,.06,r+.1),p(d,.06,r+.1),p(d,.03,r+.2),p(h,.03,r+.2),[Math.cos((h+d)/2)*.8,.6,Math.sin((h+d)/2)*.8],Rt.IRON)}}return e}function G4(){let e=[],t=[],o=[],n=[];for(let a of Ku){let[i,s,c,f,l,u]=a,h=e.length/3;for(let p=0;p<=7;p++){let v=p/7*2*Eo+u,m=Math.cos(v),g=Math.sin(v);e.push(i+m*f,s,c+g*f,i+m*f,s+l,c+g*f),t.push(m,0,g,m,0,g),o.push(0,l,u,1,l,u)}for(let p=0;p<7;p++){let v=h+p*2;n.push(v,v+2,v+3,v,v+3,v+1)}let d=e.length/3;e.push(i,s+l-.006,c),t.push(0,1,0),o.push(2,l,u);for(let p=0;p<7;p++){let v=p/7*2*Eo+u;e.push(i+Math.cos(v)*f,s+l,c+Math.sin(v)*f),t.push(0,1,0),o.push(1,l,u)}for(let p=0;p<7;p++)n.push(d,d+1+p,d+1+(p+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function $4(){let e=[],t=[],o=[],n=[];for(let r of Ku){let[a,i,s,,c,f]=r,l=e.length/3;for(let u of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(u[0],u[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:e,corner:t,ph:o,idx:n}}function D4(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let f=new Int8Array(e,i,o*3);i+=o*3;let l=new Uint8Array(e,i,o),u=new Float32Array(o*3),h=new Float32Array(o*3),d=new Float32Array(o),p=Math.cos(Xo.yaw),v=Math.sin(Xo.yaw),m=Xo.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,M=(r[2]+s[g*3+2]/65535*a[2])*m;u[g*3]=Xo.x+p*y+v*M,u[g*3+1]=b,u[g*3+2]=Xo.z-v*y+p*M;let k=f[g*3]/127,z=f[g*3+1]/127,R=f[g*3+2]/127;h[g*3]=p*k+v*R,h[g*3+1]=z,h[g*3+2]=-v*k+p*R,d[g]=l[g]}return{pos:u,nrm:h,mat:d,idx:new Uint32Array(c)}}function q4(){let e=[],t=(u,h)=>[ct.x+Math.cos(u)*h,ct.z+Math.sin(u)*h];e.push([[0,Ve.z0],[ki(Ve.z0),Ve.z0]]),e.push([[ki(Ve.z1),Ve.z1],[0,Ve.z1]]);let o=Math.asin((Ve.z1-ct.z)/Dt),n=72;for(let u=0;u<n;u++){let h=o+u/n*(2*Eo-2*o),d=o+(u+1)/n*(2*Eo-2*o);e.push([t(h,Dt-.25),t(d,Dt-.25)])}let r=_f[0]-.55+.35;e.push([[r,vn.z0],[r,vn.z1]]);let a=2.4/xo.k,i=12;for(let u=0;u<i;u++){let h=wr(u/i*a),d=wr((u+1)/i*a);e.push([t(h,xo.ri-.2),t(d,xo.ri-.2)])}e.push([t(wr(0),xo.ri-.2),t(wr(0),Dt)]),e.push([t(wr(a),xo.ri-.2),t(wr(a),Dt)]);let s=Math.cos(Xo.yaw),c=Math.sin(Xo.yaw),f=Xo.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([u,h])=>[Xo.x+(s*u+c*h)*f,Xo.z+(-c*u+s*h)*f]);for(let u=0;u<4;u++)e.push([l[u],l[(u+1)%4]]);return e}zr.exports=e=>{let t=O4(),o=F4(),n=G4(),r=$4(),a=Ei(),i=`
	precision highp float;
	${z4.GLSL}
	uniform float time;
	${mm()}
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
				float r = length(q - vec2(${Vo(ct.x)}, ${Vo(ct.z)}));
				float a = atan(q.y - ${Vo(ct.z)}, q.x - ${Vo(ct.x)});
				float ring = floor(r / 0.9);
				float cnt = max(1.0, floor(6.2831 * (ring + 0.5) * 0.9 / 0.95));
				float seg = a / 6.2831 * cnt + hash(vec2(ring, 3.0)) * 7.0;
				float jr = abs(fract(r / 0.9) - 0.5), ja = abs(fract(seg) - 0.5);
				float joint = smoothstep(0.485, 0.497, max(jr, ja * (r < 0.5 ? 0.0 : 1.0)));
				if (v_pos.x > ${Vo(ct.x+Dt-.4)}) {
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Vo(Vn)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Vo(ct.x)}, ${Vo(ct.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Vo((xo.ri+xo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Vo(ct.x)}, ${Vo(ct.z)});
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:new Uint32Array(t.idx),cull:{enable:!1}}),f=e({vert:s,frag:`${i}
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
		}`,attributes:{position:o.pos,normal:o.nrm,kind:o.kind,uv:o.uv},elements:new Uint32Array(o.idx),cull:{enable:!1}}),l=e({vert:`
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),u=e({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=D4(m);h=e({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let d=(()=>{let m=[],g=[],y=[],b=[],k=[ct.x,Vn-.3,ct.z],z=[qc.stoolX,.02,qc.keyFront+.1],R=1.25,D=2.35;for(let q=0;q<=40;q++){let oe=q/40*2*Eo,I=Math.cos(oe),ae=Math.sin(oe);m.push(k[0]+I*R,k[1],k[2]+ae*R,z[0]+I*D,z[1],z[2]+ae*D),g.push(I,.08,ae,I,.08,ae),y.push(1,0)}for(let q=0;q<40;q++){let oe=q*2;b.push(oe,oe+1,oe+3,oe,oe+3,oe+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),p=e({vert:`
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
		}`,attributes:{position:d.pos,normal:d.nrm,hh:d.hh},elements:d.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function v(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(p(),u({halo:1}),u({halo:0}))}return v};zr.exports.C=ct;zr.exports.R=Dt;zr.exports.PASS=Ve;zr.exports.SURR=$a;zr.exports.OFF=_f;zr.exports.BAY=vn;zr.exports.PATH=wf;zr.exports.PIANO=Xo;zr.exports.PLAY=qc;zr.exports.TOP=Vn;zr.exports.roomGLSL=mm;zr.exports.segments=q4});var Am=de((Yk,Sm)=>{"use strict";var H4=f0(),{addFlutedColumn:xm,addStatue:j4,addPlant:B4}=Wv(),ym=wi(),U4=gs(),Ea=tr(),W4=ra(),Ss=Ai(),so=14,gn=Ea.C.hallEnd+.35,Ro=8,bo=.35,Qu=1.15,Zu=1.15,Ju=[18,29,40],V4=[[[0,0],[0,Ss.PASS.z0]],[[0,Ss.PASS.z1],[0,gn]],[[so,gn],[so,0]],[[0,0],[so,0]],[[so,gn],[0,gn]]],Mm=[];for(let e of Ju)for(let t of[1.25,so-1.25]){let o=Qu/2,n=Zu/2;Mm.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var Ef=12,Em=2.95,km=.62,Af=Em+km,kf=[{file:"venus.bin",x:1.85,z:gn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:so-2.1,z:gn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Ea.NICHE_X[0],z:Ea.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Ea.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Ea.NICHE_X[1],z:Ea.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Ea.NICHE_PLINTH_TOP,mat:3}],X4={x0:bo,x1:3.15,z0:3.6,z1:8.2,top:1},bm=.8,Tf=1.17,Hc=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{Hc.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),Hc.push({x:so-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function e1(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var Lf=[];for(let e of[-1,1])Lf.push(...e1(so/2+e*Af,Ef,.85,.85));for(let e of kf.filter(t=>t.pedestal))Lf.push(...e1(e.x,e.z,Tf*1.1,Tf*1.1));for(let e of Hc)Lf.push(...e1(e.x,e.z,.42,.42));var Y4=V4.concat(Mm,Lf,Ss.segments());function K4(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=i;f++)for(let l=s;l<=c;l++)n(f,l,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let u=o.get(i+f+":"+(s+l));u&&c.push(...u)}return[...new Set(c)]}}}var Sf=[],mn={curMat:[0,0,0]};function t1(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=mn.curMat;return Sf.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function yo(e,t,o,n,r,a,i,s,c){let f=(l,u,h,d,p)=>{o.push(...t1(e,t,l,u,h,d,p))};f([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),f([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function ks(e,t,o,n,r){let a=mn,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(i,s,c),a.tri(s,f,c)}function wm(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=Math.cos(c),u=Math.sin(c),h=Math.cos(f),d=Math.sin(f),p=[e+o*l,t+o*u],v=[e+o*h,t+o*d],m=[e+n*l,t+n*u],g=[e+n*h,t+n*d];ks([p[0],p[1],r],[v[0],v[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),ks([p[0],p[1],a],[v[0],v[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;ks([p[0],p[1],r],[v[0],v[1],r],[p[0],p[1],a],[v[0],v[1],a],[-Math.cos(y),-Math.sin(y),0]),ks([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function Q4(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=e+o*Math.cos(c),u=t+o*Math.sin(c),h=e+o*Math.cos(f),d=t+o*Math.sin(f);ks([l,u,r],[h,d,r],[l,n,r],[h,n,r],[0,0,-1]),ks([l,u,a],[h,d,a],[l,n,a],[h,n,a],[0,0,1])}}function Z4(e,t,o,n){let r=so/2,a=Em,i=3,s=a+.42,c=s+.15,f=km,l=Af,u=5.98,h=n-.45,d=n+.45,p=64,v=xm(mn,r-l,n,0,u,f);xm(mn,r+l,n,0,u,f),mn.curMat=[0,0,0],wm(r,i,a,s,h,d,p),wm(r,i,s,c,h-.07,d+.07,p),Q4(r,i,c,v+.05,h,d,p);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;yo(e,t,o,Math.min(y,b),i,h,Math.max(y,b),v+.05,d)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);yo(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=l+f*1.42+.45;yo(e,t,o,r-m,v,n-.7,r+m,v+.44,n+.7),yo(e,t,o,r-m+.12,v+.44,n-.62,r+m-.12,v+.7,n+.62),yo(e,t,o,r-m-.1,v+.7,n-.84,r+m+.1,v+.84,n+.84),yo(e,t,o,r-m-.22,v+.84,n-.96,r+m+.22,v+1,n+.96),yo(e,t,o,r-.3,i+a-.1,n-.56,r+.3,v,n+.56)}function _m(e,t,o,n,r){yo(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),yo(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),yo(e,t,o,n-Qu/2,.4,r-Zu/2,n+Qu/2,Ro-1.35,r+Zu/2),yo(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),yo(e,t,o,n-.67,Ro-1.58,r-.67,n+.67,Ro-1.35,r+.67),yo(e,t,o,n-.82,Ro-1.35,r-.82,n+.82,Ro-1.05,r+.82),yo(e,t,o,n-.66,Ro-1.05,r-.66,n+.66,Ro-.78,r+.66),yo(e,t,o,n-.92,Ro-.78,r-.92,n+.92,Ro-.55,r+.92),yo(e,t,o,n-.78,Ro-.55,r-.78,n+.78,Ro-.3,r+.78),yo(e,t,o,n-.92,Ro-.3,r-.92,n+.92,Ro-.1,r+.92)}function Mf(e,t,o,n,r){r==="left"?(yo(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),yo(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(yo(e,t,o,so-.14,1,n-3.8/2,so+.08,5.7,n+3.8/2),yo(e,t,o,so-.18,1+.18,n-3.8/2+.18,so+.08+.04,5.7-.18,n+3.8/2-.18))}function J4(e,t,o,n){yo(e,t,o,.65,Ro-.16,n-1.65,.65+.22,Ro,n+1.65),yo(e,t,o,so-.65-.22,Ro-.16,n-1.65,so-.65,Ro,n+1.65),yo(e,t,o,.65,Ro-.16,n-1.65,so-.65,Ro,n-1.43),yo(e,t,o,.65,Ro-.16,n+1.43,so-.65,Ro,n+1.65),o.push(...t1(e,t,[.65+.22,Ro-.16,n-1.43],[so-.65-.22,Ro-.16,n-1.43],[.65+.22,Ro-.16,n+1.43],[so-.65-.22,Ro-.16,n+1.43],[0,-1,0]))}Sm.exports=function(){let e=[],t=[],o=[];Sf=[],mn=H4.createBuilder(e,t,o,Sf),o.push(...t1(e,t,[0,0,0],[so,0,0],[0,0,gn],[so,0,gn],[0,1,0])),U4.addSkylight(mn,[0,0,0],gn),mn.curMat=[0,0,0];{let c=Ss.SURR;yo(e,t,o,-bo,0,0,bo,Ro,c.z0),yo(e,t,o,-bo,0,c.z1,bo,Ro,gn),yo(e,t,o,-bo,c.top,c.z0,bo,Ro,c.z1)}yo(e,t,o,so-bo,0,Ea.C.z1,so+bo,Ro,gn-bo),yo(e,t,o,so-bo-.12,0,Ea.C.z1+2*bo,so-bo,.42,gn-bo),yo(e,t,o,so-bo-.07,.42,Ea.C.z1+2*bo,so-bo,.5,gn-bo);for(let[c,f]of[[0,Ss.SURR.z0],[Ss.SURR.z1,gn-bo]])yo(e,t,o,bo,0,c,bo+.12,.42,f),yo(e,t,o,bo,.42,c,bo+.07,.5,f);yo(e,t,o,bo,0,gn-bo-.12,so-bo,.42,gn-bo),yo(e,t,o,bo,.42,gn-bo-.07,so-bo,.5,gn-bo),ym.addEntranceWall(mn),ym.addFrames(mn),mn.curMat=[0,0,0],yo(e,t,o,-bo,0,gn-bo,so+bo,Ro,gn+bo),Z4(e,t,o,Ef);for(let c of Ju)_m(e,t,o,1.25,c),_m(e,t,o,so-1.25,c);Mf(e,t,o,22,"left"),Mf(e,t,o,25,"right"),Mf(e,t,o,33,"left"),Mf(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)J4(e,t,o,c);Ea.addWing(mn),mn.curMat=[0,0,0];for(let c of kf.filter(f=>f.pedestal))j4(mn,c.x,c.z,Tf,bm);{let c=X4;mn.curMat=[0,0,0],mn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),mn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),mn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),mn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}W4.addAlcove(mn);for(let c of Hc)B4(mn,c.x,c.z,c.seed,1,c.away);mn.curMat=[0,0,0];let r=[[[so,gn-.35],[0,gn-.35]],[[0,3],[0,10]],[[so,15],[so,22]],[[0,24],[0,31]],[[so,33],[so,40]],[[0,41],[0,46]]],a=K4(Y4),i=(c,f)=>{let l=0,u=1/0;return r.forEach((h,d)=>{let p=(h[0][0]+h[1][0])/2,v=(h[0][1]+h[1][1])/2,m=Math.hypot(c-p,f-v);m<u&&(u=m,l=d)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:kf,occluders:[...Ju.flatMap(c=>[[1.25,c,.78],[so-1.25,c,.78]]),[so/2-Af,Ef,.86],[so/2+Af,Ef,.86],...kf.filter(c=>c.pedestal).map(c=>[c.x,c.z,Tf*1.12]),...Hc.map(c=>[c.x,c.z,.34])],pedestalTop:bm,mat:Sf,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:o}}});var o1=de((Kk,Tm)=>{"use strict";var{doorLightGLSL:e_}=wi(),{skylightGLSL:t_}=gs(),{windowLightGLSL:o_,C:qr}=tr(),{alcoveLightGLSL:n_}=ra(),aa=e=>e.toFixed(4),r_=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();Tm.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([d,p,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${d.toFixed(3)}, ${p.toFixed(3)}), ${v.toFixed(3)}));`).join(`
      `),i={c:[0,0,0,0],d:[1,0,0,0]},s=-1,c=[],f=d=>{let p=d&&d.tick!==void 0?d.tick:0;if(p!==s||c.length===0){s=p;let v=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-v[0],m.c[2]-v[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(i)}return c},l={},u="",h="";for(let d=0;d<8;d++)l["lightC"+d]=p=>f(p)[d].c,l["lightD"+d]=p=>f(p)[d].d,u+="uniform vec4 lightC"+d+", lightD"+d+`;
`,h+="pic += pictureLight(lightC"+d+", lightD"+d+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Ei().lanternGLSL()}

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

    ${e_()}

    ${t_()}

    ${o_()}

    ${n_()}

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
        step(abs(v_pos.z - ${aa(qr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${aa((qr.z0+qr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${aa(qr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${r_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${aa(qr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${aa(qr.z0)} || v_pos.z > ${aa(qr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${aa(qr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${aa(qr.z0)}), ${aa(qr.z1)} - v_pos.z), ${aa(qr.x1)} - v_pos.x);
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
        if (v_pos.z < ${aa(qr.z0+.3)} && v_pos.x > ${aa(qr.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var zm=de((Qk,Lm)=>{"strict mode";var a_="https://api.artic.edu/api/v1/artworks/search",i_=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,s_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",c_="&fields=image_id,title,artist_title",l_={low:400,mid:843,high:1686};Lm.exports={fetchList:async function(e,t){let o=a_+s_+c_+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=i_(e,l_[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var Cm=de((Zk,Rm)=>{"use strict";var f_=Eu(),h_=ta(),u_=e=>"images/web/"+e.slug+(h_.isPhone?"-1024":"")+".webp";async function Nm(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Rm.exports={fetchList:async function(e,t){return f_.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await Nm(u_(e))}catch(o){t=await Nm("images/"+e.file)}return{title:e.title,image:t}}}});var Im=de((Jk,Pm)=>{"strict mode";Pm.exports={default:"local",artic:zm(),local:Cm()}});var r1=de((eS,Fm)=>{"strict mode";var v0=document.createElement("canvas"),n1=v0.width=v0.height=1024,Ti=v0.getContext("2d");Ti.mozImageSmoothingEnabled=!1;Ti.webkitImageSmoothingEnabled=!1;Ti.font="32px Verdana";Ti.textBaseline="bottom";Ti.fillStyle="#aaa";function Om(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(r).width>o&&f>1;){f--,r=a="";for(var u=0;u<l;u++)u<f?(r+=c[u],u+1<f&&(r+=" ")):(a+=c[u],u+1<l&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=Om(e,a,o,n),i>s&&(s=i)),s}Fm.exports={init(e,t,o=n1){var n=[];Om(Ti,t,Math.min(o*n1,n1),n),Ti.clearRect(0,0,v0.width,v0.height);for(var r=0;r<n.length;r++)Ti.fillText(n[r],0,v0.height-(Math.max(n.length,3)-r)*32);return e({data:v0,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Dm=de((tS,$m)=>{"strict mode";var a1=Im(),d_=new URLSearchParams(window.location.search).get("api"),Gm=a1[d_]||a1[a1.default],p_=r1(),i1={},Ts=[],v_=2;function m_(e){return(!navigator.connection||navigator.connection.downlink<v_)&&(e=e=="high"?"mid":"low"),e}var g_=ta(),As=document.createElement("canvas");As.width=As.height=g_.isPhone?1024:2048;var l1=As.getContext("2d");l1.imageSmoothingEnabled=!0;l1.imageSmoothingQuality="high";var s1=!1,x_=e=>[(Ts.pop()||e.texture)([[[200,200,200]]]),t=>(Ts.pop()||e.texture)([[[0,0,0,0]]]),1];async function c1(e,t,o){s1===!1&&(s1=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await Gm.fetchImage(t,m_(o));r=a.title,n=await createImageBitmap(a.image),l1.drawImage(n,0,0,As.width,As.height)}catch(a){return console.error(a),o=="high"?await c1(e,t,"low"):x_(e)}return[(Ts.pop()||e.texture)({data:As,min:"mipmap",mipmap:"nice",aniso:s1,flipY:!0}),a=>p_.init(Ts.pop()||e.texture,r,a),n.width/n.height]}$m.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(i1).length;Gm.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(i1[s.image_id]){--t===0&&r();return}i1[s.image_id]=s,c1(e,s,o).then(([c,f,l])=>{n({...s,tex:c,textGen:f,aspect:l}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,c1(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(Ts.push(e.tex),e.tex=void 0),e.text&&(Ts.push(e.text),e.text=void 0)}}});var Hm=de((oS,qm)=>{qm.exports=y_;function y_(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Bm=de((nS,jm)=>{jm.exports=b_;function b_(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Wm=de((rS,Um)=>{Um.exports=w_;function w_(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var f1=de((aS,Vm)=>{Vm.exports=__;function __(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Ym=de((iS,Xm)=>{Xm.exports=M_;function M_(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var Qm=de((sS,Km)=>{Km.exports=E_;function E_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,M=o*f-a*i,k=n*c-r*s,z=n*f-a*s,R=r*f-a*c,D=l*v-u*p,q=l*m-h*p,oe=l*g-d*p,I=u*m-h*v,ae=u*g-d*v,J=h*g-d*m,ne=y*J-b*ae+M*I+k*oe-z*q+R*D;return ne?(ne=1/ne,e[0]=(s*J-c*ae+f*I)*ne,e[1]=(r*ae-n*J-a*I)*ne,e[2]=(v*R-m*z+g*k)*ne,e[3]=(h*z-u*R-d*k)*ne,e[4]=(c*oe-i*J-f*q)*ne,e[5]=(o*J-r*oe+a*q)*ne,e[6]=(m*M-p*R-g*b)*ne,e[7]=(l*R-h*M+d*b)*ne,e[8]=(i*ae-s*oe+f*D)*ne,e[9]=(n*oe-o*ae-a*D)*ne,e[10]=(p*z-v*M+g*y)*ne,e[11]=(u*M-l*z-d*y)*ne,e[12]=(s*q-i*I-c*D)*ne,e[13]=(o*I-n*q+r*D)*ne,e[14]=(v*b-p*k-m*y)*ne,e[15]=(l*k-u*b+h*y)*ne,e):null}});var Jm=de((cS,Zm)=>{Zm.exports=k_;function k_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-d*m)-u*(c*g-f*m)+v*(c*d-f*h),e[1]=-(n*(h*g-d*m)-u*(r*g-a*m)+v*(r*d-a*h)),e[2]=n*(c*g-f*m)-s*(r*g-a*m)+v*(r*f-a*c),e[3]=-(n*(c*d-f*h)-s*(r*d-a*h)+u*(r*f-a*c)),e[4]=-(i*(h*g-d*m)-l*(c*g-f*m)+p*(c*d-f*h)),e[5]=o*(h*g-d*m)-l*(r*g-a*m)+p*(r*d-a*h),e[6]=-(o*(c*g-f*m)-i*(r*g-a*m)+p*(r*f-a*c)),e[7]=o*(c*d-f*h)-i*(r*d-a*h)+l*(r*f-a*c),e[8]=i*(u*g-d*v)-l*(s*g-f*v)+p*(s*d-f*u),e[9]=-(o*(u*g-d*v)-l*(n*g-a*v)+p*(n*d-a*u)),e[10]=o*(s*g-f*v)-i*(n*g-a*v)+p*(n*f-a*s),e[11]=-(o*(s*d-f*u)-i*(n*d-a*u)+l*(n*f-a*s)),e[12]=-(i*(u*m-h*v)-l*(s*m-c*v)+p*(s*h-c*u)),e[13]=o*(u*m-h*v)-l*(n*m-r*v)+p*(n*h-r*u),e[14]=-(o*(s*m-c*v)-i*(n*m-r*v)+p*(n*c-r*s)),e[15]=o*(s*h-c*u)-i*(n*h-r*u)+l*(n*c-r*s),e}});var t2=de((lS,e2)=>{e2.exports=S_;function S_(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],l=e[9],u=e[10],h=e[11],d=e[12],p=e[13],v=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,M=o*s-n*i,k=o*c-r*i,z=n*c-r*s,R=f*p-l*d,D=f*v-u*d,q=f*m-h*d,oe=l*v-u*p,I=l*m-h*p,ae=u*m-h*v;return g*ae-y*I+b*oe+M*q-k*D+z*R}});var n2=de((fS,o2)=>{o2.exports=A_;function A_(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],v=t[12],m=t[13],g=t[14],y=t[15],b=o[0],M=o[1],k=o[2],z=o[3];return e[0]=b*n+M*s+k*u+z*v,e[1]=b*r+M*c+k*h+z*m,e[2]=b*a+M*f+k*d+z*g,e[3]=b*i+M*l+k*p+z*y,b=o[4],M=o[5],k=o[6],z=o[7],e[4]=b*n+M*s+k*u+z*v,e[5]=b*r+M*c+k*h+z*m,e[6]=b*a+M*f+k*d+z*g,e[7]=b*i+M*l+k*p+z*y,b=o[8],M=o[9],k=o[10],z=o[11],e[8]=b*n+M*s+k*u+z*v,e[9]=b*r+M*c+k*h+z*m,e[10]=b*a+M*f+k*d+z*g,e[11]=b*i+M*l+k*p+z*y,b=o[12],M=o[13],k=o[14],z=o[15],e[12]=b*n+M*s+k*u+z*v,e[13]=b*r+M*c+k*h+z*m,e[14]=b*a+M*f+k*d+z*g,e[15]=b*i+M*l+k*p+z*y,e}});var a2=de((hS,r2)=>{r2.exports=T_;function T_(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,f,l,u,h,d,p,v,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],l=t[4],u=t[5],h=t[6],d=t[7],p=t[8],v=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=l,e[5]=u,e[6]=h,e[7]=d,e[8]=p,e[9]=v,e[10]=m,e[11]=g,e[12]=i*n+l*r+p*a+t[12],e[13]=s*n+u*r+v*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=f*n+d*r+g*a+t[15]),e}});var s2=de((uS,i2)=>{i2.exports=L_;function L_(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var l2=de((dS,c2)=>{c2.exports=z_;function z_(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,f,l,u,h,d,p,v,m,g,y,b,M,k,z,R,D,q,oe,I,ae,J,ne,$e;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),f=Math.cos(o),l=1-f,u=t[0],h=t[1],d=t[2],p=t[3],v=t[4],m=t[5],g=t[6],y=t[7],b=t[8],M=t[9],k=t[10],z=t[11],R=r*r*l+f,D=a*r*l+i*c,q=i*r*l-a*c,oe=r*a*l-i*c,I=a*a*l+f,ae=i*a*l+r*c,J=r*i*l+a*c,ne=a*i*l-r*c,$e=i*i*l+f,e[0]=u*R+v*D+b*q,e[1]=h*R+m*D+M*q,e[2]=d*R+g*D+k*q,e[3]=p*R+y*D+z*q,e[4]=u*oe+v*I+b*ae,e[5]=h*oe+m*I+M*ae,e[6]=d*oe+g*I+k*ae,e[7]=p*oe+y*I+z*ae,e[8]=u*J+v*ne+b*$e,e[9]=h*J+m*ne+M*$e,e[10]=d*J+g*ne+k*$e,e[11]=p*J+y*ne+z*$e,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var h2=de((pS,f2)=>{f2.exports=N_;function N_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],l=t[9],u=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+f*n,e[5]=i*r+l*n,e[6]=s*r+u*n,e[7]=c*r+h*n,e[8]=f*r-a*n,e[9]=l*r-i*n,e[10]=u*r-s*n,e[11]=h*r-c*n,e}});var d2=de((vS,u2)=>{u2.exports=R_;function R_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],l=t[9],u=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-f*n,e[1]=i*r-l*n,e[2]=s*r-u*n,e[3]=c*r-h*n,e[8]=a*n+f*r,e[9]=i*n+l*r,e[10]=s*n+u*r,e[11]=c*n+h*r,e}});var v2=de((mS,p2)=>{p2.exports=C_;function C_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],l=t[5],u=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+f*n,e[1]=i*r+l*n,e[2]=s*r+u*n,e[3]=c*r+h*n,e[4]=f*r-a*n,e[5]=l*r-i*n,e[6]=u*r-s*n,e[7]=h*r-c*n,e}});var g2=de((gS,m2)=>{m2.exports=P_;function P_(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var y2=de((xS,x2)=>{x2.exports=I_;function I_(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,f=a+a,l=n*s,u=n*c,h=n*f,d=r*c,p=r*f,v=a*f,m=i*s,g=i*c,y=i*f;return e[0]=1-(d+v),e[1]=u+y,e[2]=h-g,e[3]=0,e[4]=u-y,e[5]=1-(l+v),e[6]=p+m,e[7]=0,e[8]=h+g,e[9]=p-m,e[10]=1-(l+d),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var w2=de((yS,b2)=>{b2.exports=O_;function O_(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var M2=de((bS,_2)=>{_2.exports=F_;function F_(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var k2=de((wS,E2)=>{E2.exports=G_;function G_(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var A2=de((_S,S2)=>{S2.exports=$_;function $_(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var L2=de((MS,T2)=>{T2.exports=D_;function D_(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var N2=de((ES,z2)=>{z2.exports=q_;function q_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,f=o*i,l=n*i,u=n*s,h=r*i,d=r*s,p=r*c,v=a*i,m=a*s,g=a*c;return e[0]=1-u-p,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-p,e[6]=d+v,e[7]=0,e[8]=h+m,e[9]=d-v,e[10]=1-f-u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var C2=de((kS,R2)=>{R2.exports=H_;function H_(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var I2=de((SS,P2)=>{P2.exports=j_;function j_(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var F2=de((AS,O2)=>{O2.exports=B_;function B_(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*f*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var $2=de((TS,G2)=>{G2.exports=U_;function U_(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var q2=de((LS,D2)=>{var W_=f1();D2.exports=V_;function V_(e,t,o,n){var r,a,i,s,c,f,l,u,h,d,p=t[0],v=t[1],m=t[2],g=n[0],y=n[1],b=n[2],M=o[0],k=o[1],z=o[2];return Math.abs(p-M)<1e-6&&Math.abs(v-k)<1e-6&&Math.abs(m-z)<1e-6?W_(e):(l=p-M,u=v-k,h=m-z,d=1/Math.sqrt(l*l+u*u+h*h),l*=d,u*=d,h*=d,r=y*h-b*u,a=b*l-g*h,i=g*u-y*l,d=Math.sqrt(r*r+a*a+i*i),d?(d=1/d,r*=d,a*=d,i*=d):(r=0,a=0,i=0),s=u*i-h*a,c=h*r-l*i,f=l*a-u*r,d=Math.sqrt(s*s+c*c+f*f),d?(d=1/d,s*=d,c*=d,f*=d):(s=0,c=0,f=0),e[0]=r,e[1]=s,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=u,e[7]=0,e[8]=i,e[9]=f,e[10]=h,e[11]=0,e[12]=-(r*p+a*v+i*m),e[13]=-(s*p+c*v+f*m),e[14]=-(l*p+u*v+h*m),e[15]=1,e)}});var j2=de((zS,H2)=>{H2.exports=X_;function X_(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var Ls=de((NS,B2)=>{B2.exports={create:Hm(),clone:Bm(),copy:Wm(),identity:f1(),transpose:Ym(),invert:Qm(),adjoint:Jm(),determinant:t2(),multiply:n2(),translate:a2(),scale:s2(),rotate:l2(),rotateX:h2(),rotateY:d2(),rotateZ:v2(),fromRotation:g2(),fromRotationTranslation:y2(),fromScaling:w2(),fromTranslation:M2(),fromXRotation:k2(),fromYRotation:A2(),fromZRotation:L2(),fromQuat:N2(),frustum:C2(),perspective:I2(),perspectiveFromFieldOfView:F2(),ortho:$2(),lookAt:q2(),str:j2()}});var V2=de((RS,W2)=>{"use strict";var U2=Dm(),an=Ls(),m0=tr(),Y_=3e3,zf="high",h1,Bc=.36,Uc=13.64,zs=m0.C.hallEnd-.01,Wc=m0.C.z0+.01,K_=.356,Q_=13.644,Z_=m0.C.hallEnd-.006,J_=m0.C.z0+.006,e6=.12,Rf=4,Ns=e=>nr[e]&&nr[e].cy||Rf,u1=.26,t6=5.6,o6=7,nr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:zs},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:m0.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:m0.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:m0.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function n6(e,t){let o=t&&t.maxH||t6,n=t&&t.maxW||o6,r=Math.min(o,n/e);return{width:r*e,height:r}}function r6(e,t,o){let n=nr[o],r=[],a=Ns(o)-t/2;return n.side==="left"?(an.fromTranslation(r,[Bc,a,n.z+e/2]),an.rotateY(r,r,Math.PI/2)):n.side==="right"?(an.fromTranslation(r,[Uc,a,n.z-e/2]),an.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?an.fromTranslation(r,[n.x-e/2,a,Wc]):(an.fromTranslation(r,[7+e/2,a,zs]),an.rotateY(r,r,Math.PI)),an.scale(r,r,[e,t,e6]),r}function a6(e,t,o){let n=nr[o],r=[],a=Ns(o)-t/2;return n.side==="left"?(an.fromTranslation(r,[Bc,a,n.z+e/2]),an.rotateY(r,r,Math.PI/2)):n.side==="right"?(an.fromTranslation(r,[Uc,a,n.z-e/2]),an.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?an.fromTranslation(r,[n.x-e/2,a,Wc]):(an.fromTranslation(r,[7+e/2,a,zs]),an.rotateY(r,r,Math.PI)),r}function i6(e,t,o){let n=nr[o],r=[],a=Ns(o)-t/2-u1-.38;return n.side==="left"?(an.fromTranslation(r,[K_,a,n.z+e/2]),an.rotateY(r,r,Math.PI/2)):n.side==="right"?(an.fromTranslation(r,[Q_,a,n.z-e/2]),an.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?an.fromTranslation(r,[n.x-e/2,a,J_]):(an.fromTranslation(r,[7+e/2,a,Z_]),an.rotateY(r,r,Math.PI)),an.scale(r,r,[2,2,2]),r}function s6(e,t,o){let n=nr[o],r=Ns(o)-t/2-u1-.38;return n.side==="left"?[Bc+.55,r,n.z]:n.side==="right"?[Uc-.55,r,n.z]:n.side==="corridor"?[n.x,r,Wc+.55]:[7,r,zs-.55]}var jc=.42;function Nf(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function c6(e,t,o){let n=nr[o],r,a,i;n.side==="left"?(r=[Bc,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[Uc,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,Wc],a=[1,0,0],i=[0,0,1]):(r=[7,zs],a=[1,0,0],i=[0,0,-1]);let s=Ns(o)+t/2+u1+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(d,p)=>[r[0]+i[0]*d,p,r[1]+i[2]*d],l=[.075,.062,.05],u=[{fixmodel:Nf(f(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Nf(f(jc/2,s),a,i,.02,.02,jc),fixcol:l,fixglow:0},{fixmodel:Nf(f(jc,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Nf(f(jc-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(jc,s-.02);return{fixtures:u,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}W2.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!nr[i])return;let{width:s,height:c}=n6(a.aspect,nr[i]),f=c6(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),o.push({...a,fixtures:f.fixtures,side:nr[i].side,model:r6(s,c,i),framemodel:a6(s,c,i),framesize:[s,c],textmodel:i6(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:s6(s,c,i),paintingPosition:nr[i].side==="left"?[Bc+.05,Rf,nr[i].z]:nr[i].side==="right"?[Uc-.05,Rf,nr[i].z]:nr[i].side==="corridor"?[nr[i].x,Ns(i),Wc+.05]:[7,Rf,zs-.05],textGen:null})};return U2.fetch(e,nr.length,zf,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{U2.load(e,a,zf)}),zf="low",h1&&clearTimeout(h1),h1=setTimeout(()=>{zf="high"},Y_)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Q2=de((CS,K2)=>{"use strict";var l6=r1(),X2=ta(),Y2=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function f6(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];Y2.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<Y2.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(i,s,f,i,f,c)}return{verts:t,elems:o}}var h6=`#extension GL_OES_standard_derivatives : enable
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
}`,u6=`
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
}`;K2.exports=e=>{let t=l6.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Ei().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(X2.isPhone?1024:2048),detail:()=>X2.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=f6(),r=e({frag:h6,vert:u6,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Of=de((PS,ng)=>{"use strict";var{A:Xn}=ra(),{C:En}=tr(),{DOOR:Rs}=wi(),Dn=Ai(),eg=En.hallEnd+.35,tg={arch:[13.6,0,Xn.zc-Xn.arch.r-.3,14.4,Xn.arch.spring+Xn.arch.r+.3,Xn.zc+Xn.arch.r+.3],mouth:[13.3,0,En.z0-.3,14.3,8.2,En.z1+.3],stair:[-.5,0,Dn.SURR.z0-.2,.5,Dn.SURR.top+.3,Dn.SURR.z1+.2],door:[Rs.x0-.4,0,-.5,Rs.x1+.4,Rs.top+.4,.5],windows:[15.6,.4,En.z1-.2,36.9,6.4,En.z1+.9],farDoor:[En.x1-.2,0,En.zc-Rs.r-.4,En.x1+.9,Rs.top+.4,En.zc+Rs.r+.4]},si={court:[Xn.x0-.4,0,Xn.z0-.3,Xn.x1+.3,Xn.domeTop+.5,Xn.z1+.3],stair:[Dn.C.x-Dn.R-2.6,0,Dn.C.z-Dn.R-1.5,.5,15.6,Dn.C.z+Dn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,En.z1,46,60,En.z1+110],florence:[En.x1,-1,En.zc-30,En.x1+80,60,En.zc+30]},d6=[[0,0,0,14,0,eg],[13.6,0,En.z0,En.x1+.4,0,En.z1],[Xn.x0-.4,0,Xn.z0,Xn.x1,0,Xn.z1],[Dn.C.x-Dn.R-2.6,0,Dn.C.z-Dn.R,.4,0,Dn.C.z+Dn.R]],p6={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Vc=new Float64Array(24),ka=[7,2,2],og=0,g0="out",If=!0;try{/[?&]nocull\b/.test(location.search)&&(If=!1)}catch(e){}var Cf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},Pf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},Z2=!0;function v6(e){let t=s=>[e[s],e[4+s],e[8+s],e[12+s]],o=t(0),n=t(1),r=t(2),a=t(3),i=(s,c,f,l)=>{for(let u=0;u<4;u++)Vc[s*4+u]=c[u]+f*l[u]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function Li(e,t){if(!If)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=Vc[r*4],i=Vc[r*4+1],s=Vc[r*4+2],c=Vc[r*4+3],f=a>0?e[3]:e[0],l=i>0?n:o,u=s>0?e[5]:e[2];if(a*f+i*l+s*u+c<0)return!1}return!0}var d1=(e,t)=>ka[0]>e[0]-t&&ka[0]<e[3]+t&&ka[2]>e[2]-t&&ka[2]<e[5]+t;function m6(e){if(d1(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-ka[0],a=(n&2?e[5]:e[2])-ka[2],i=Math.atan2(r,a)-og;i-=Math.round(i/(2*Math.PI))*2*Math.PI,t=Math.min(t,i),o=Math.max(o,i)}return o-t>Math.PI?null:[t,o]}function J2(e,t,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=m6(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of e){let s=tg[i];if(!d1(s,.6)&&(!Li(s,o)||!a(s)))return!1}return Li(t,o)&&a(t)}function g6(){let e=ka[0],t=ka[2];return e<0&&t>Dn.C.z-Dn.R-1.5&&e>Dn.C.x-Dn.R-2.6?"stair":e>14.1&&t>Xn.z0-.3&&t<Xn.z1+.3&&e<Xn.x1+.3?"court":e>13.9&&t>En.z0-.4&&t<En.z1+.1&&e<En.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<eg?"hall":"out"}var x6={PORTAL:tg,ROOM:si,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*e[r*4+s];n[r*4+a]=i}v6(n),ka[0]=o[0],ka[1]=o[1],ka[2]=o[2],og=Math.atan2(-e[2],-e[10]),g0=g6();for(let r in si)if(!If||g0==="out"||g0===r||d1(si[r],.3))Cf[r]=Li(si[r],!1)||g0===r,Pf[r]=Li(si[r],!0)||g0===r;else{let a=p6[g0][r];Cf[r]=a?J2(a,si[r],!1):Li(si[r],!1),Pf[r]=a?J2(a,si[r],!0):Li(si[r],!0)}Z2=!If||d6.some(r=>Li(r,!1))},get zone(){return g0},room(e,t){return t?Pf[e]:Cf[e]},box(e,t,o){return o&&!(t?Pf[o]:Cf[o])?!1:Li(e,t)},get floor(){return Z2}};ng.exports=x6});var ag=de((IS,rg)=>{"use strict";var y6=o1(),b6=Of();function w6(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let u=0;u<3;u++)a.push(t.getFloat32(12+u*4,!0)),i.push(t.getFloat32(24+u*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,r);s+=r*2;let l=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:f,nrm:l}}rg.exports=(e,t)=>{let o=[],n=[],r=[],a=[],i=null,s=t.statues.length,c=[],f=(u,h)=>{let d=o.length/3,p=h.height*.75,v=h.base!==void 0?h.base:t.pedestalTop;c.push({offset:a.length,count:u.nI,box:[h.x-p,v-.1,h.z-p,h.x+p,v+h.height+.2,h.z+p]});let m=h.height,g=Math.cos(h.yaw),y=Math.sin(h.yaw),b=h.base!==void 0?h.base:t.pedestalTop;for(let M=0;M<u.nV;M++){let k=(u.mn[0]+u.pos[M*3]/65535*u.sz[0])*m,z=(u.mn[1]+u.pos[M*3+1]/65535*u.sz[1])*m,R=(u.mn[2]+u.pos[M*3+2]/65535*u.sz[2])*m;o.push(h.x+g*k+y*R,b+z,h.z-y*k+g*R);let D=u.nrm[M*3]/127,q=u.nrm[M*3+1]/127,oe=u.nrm[M*3+2]/127;n.push(g*D+y*oe,q,-y*D+g*oe),r.push(h.mat||1,0,0)}for(let M=0;M<u.nI;M++)a.push(d+u.idx[M])},l=()=>{a.length!==0&&(i=y6(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1,!0))};return t.statues.forEach(u=>{fetch("res/"+u.file).then(h=>{if(!h.ok)throw new Error("Could not load "+u.file);return h.arrayBuffer()}).then(h=>f(w6(h),u)).catch(h=>console.error(h)).then(()=>{--s===0&&l()})}),function(u){if(!i)return;let h=!!(u&&u.reflected),d=c.filter(p=>b6.box(p.box,h));d.length&&i(d)}}});var mg=de((OS,v1)=>{"use strict";var _6=f0(),Rn=1.29032,y0=[9.2968,2,5.9],M6=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Ff=2147.64,ig=725,sg=1288,cg=1450,lg=2576,Nr=-5.197,w0=3.865,zi=10.135,_0=-14.679,Xc=-30.229,Yc=7.232,fg=-45.713,Cs=17.1*Rn,b0=16.6*Rn,Kc=16.6*Rn,hg=[6.9,17.1],Gf=[2.95,16.6],E6=1.6,k6=0,S6=1,ug=2,p1=3,dg=4,pg=5,A6=6;function T6(){let e=[],t=[],o=[],n=[],r=_6.createBuilder(e,t,o,n),a=(f,l,u,h,d,p,v=1,m=1)=>{let g=[];for(let y=0;y<=v;y++){let b=[];for(let M=0;M<=m;M++){let k=[f[0]+l[0]*y/v+u[0]*M/m,f[1]+l[1]*y/v+u[1]*M/m,f[2]+l[2]*y/v+u[2]*M/m],z=p(k);b.push(r.vert(k,h,[d,z[0],z[1]]))}g.push(b)}for(let y=0;y<v;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=f=>l=>[(y0[2]-l[2])/Rn-f,l[1]/Rn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],k6,f=>[f[0]/Rn,f[2]/Rn],13,14),a([w0,0,Nr],[0,0,_0-Nr],[0,Cs,0],[1,0,0],S6,i(8.6),6,6),a([-40,0,Nr],[w0+40,0,0],[0,Cs,0],[0,0,1],ug,f=>[(w0-f[0])/Rn,f[1]/Rn],8,4),a([-40,0,-.36],[0,0,Nr+.36],[0,Cs,0],[1,0,0],ug,f=>[-f[2]/Rn,f[1]/Rn]),a([zi,0,-80],[0,0,Nr+80],[0,b0,0],[-1,0,0],dg,i(8.6),12,6),a([zi,0,Nr],[60,0,0],[0,b0,0],[0,0,1],pg,f=>[(f[0]-zi)/Rn,f[1]/Rn],8,4),a([70,0,Nr],[0,0,-.36-Nr],[0,b0,0],[-1,0,0],pg,f=>[-f[2]/Rn,f[1]/Rn]);let s=f=>[(f[0]-y0[0])/Rn+4.18,f[1]/Rn];a([-20,0,Xc],[Yc+20,0,0],[0,Kc,0],[0,0,1],p1,s,8,6),a([Yc,0,Xc],[0,0,fg-Xc],[0,Kc,0],[1,0,0],p1,i(28),4,4),a([Yc,0,fg],[zi-Yc,0,0],[0,b0,0],[0,0,1],dg,f=>[(f[0]-y0[0])/Rn,f[1]/Rn],2,4),a([-20,0,_0],[0,0,Xc-_0],[0,Kc,0],[1,0,0],p1,i(16),4,4);let c=(f,l,u,h)=>a(f,l,u,h,A6,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function x0(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Sa=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",L6=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,_0],[w0,Cs,Nr]],[[zi,0,-80],[70,b0,Nr]],[[-20,0,-80],[Yc,Kc,Xc]],[[-40,0,-80],[-20,Kc,_0]]],z6=L6.map(e=>`if (hitBox(ro, rd, ${Sa(e[0])}, ${Sa(e[1])}, 1e4) ) return 0.0;`).join(`
		`),vg="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>M6[t][e].toFixed(6)).join(", ")).join(", ")+")",N6=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Sa([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${z6}
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
	vec3 ro = ${Sa(y0)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Sa([-40,0,_0])}, ${Sa([w0-.02,Cs,Nr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Sa([zi+.02,0,-80])}, ${Sa([70,b0,Nr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${vg} * (p - ${Sa(y0)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${ig.toFixed(2)} + ${Ff.toFixed(3)} * pc.x / pc.z) / ${cg.toFixed(1)},
		(${sg.toFixed(2)} - ${Ff.toFixed(3)} * pc.y / pc.z) / ${lg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${vg} * (p - ${Sa(y0)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${ig.toFixed(2)} + ${Ff.toFixed(3)} * pc.x / pc.z) / ${cg.toFixed(1)},
		(${sg.toFixed(2)} - ${Ff.toFixed(3)} * pc.y / pc.z) / ${lg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Sa(y0)}), n));
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
		base = texture2D(cobbleTex, fuv / ${E6.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${hg[0].toFixed(2)}, 1.0 - fuv.y / ${hg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Gf[0].toFixed(2)}, 1.0 - fuv.y / ${Gf[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Gf[0].toFixed(2)}, 1.0 - fuv.y / ${Gf[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(w0-.05).toFixed(3)} && v_pos.x < ${(zi+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${_0.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Nr+4.5).toFixed(3)};
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
}`,R6=`
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
}`,C6=or();v1.exports=e=>{let t=T6(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=x0(e,"res/street/photo.jpg",o,[190,160,120]),i=x0(e,"res/street/photo_night.jpg",o,[12,14,22]),s=x0(e,"res/street/photo_mask.png",o,[255,255,255]),c=x0(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=x0(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=x0(e,"res/street/facade_cream.jpg",n,[215,200,175]),u=x0(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),d=e({frag:N6,vert:R6,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:u,photoNight:i,night:()=>C6.night,time:()=>(Date.now()-h)/1e3}});return function(){d()}};v1.exports.layout={MOUTH_Z:Nr,PINK_X:w0,RIGHT_X:zi,PINK_H:Cs,CREAM_H:b0,S:Rn}});var yg=de((FS,xg)=>{"use strict";var P6=or().GLSL,{glassPanes:I6}=wi(),gg=tr();function O6(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(I6(),[0,0,1]),o(gg.windowGlass(),[0,0,1]),o(gg.farDoorGlass(),[1,0,0]),{position:e,normal:t}}xg.exports=e=>{let t=O6(),o=e({frag:`
		precision highp float;
		${P6}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var Og=de((GS,b1)=>{"use strict";var kg=or().GLSL,F6=f0(),m1=ta(),{wallWithHoles:G6,C:Ci}=tr(),Ze=.28,K={westBack:14.4,westCol:15-Ze,eastCol:37.4+Ze,eastBack:41.8,south:Ci.z1+.7,northCol:Ci.z1+.7+16,northBack:Ci.z1+.7+19,cx:(15+37.4)/2,cz:(Ci.z1+.7+Ci.z1+.7+16-Ze)/2},ko={x0:K.westCol+Ze,x1:K.eastCol-Ze,z0:K.south,z1:K.northCol-Ze},lr=3.3,Jc=.92,Pi=5.6,bg=6,ia=11.9,Ri=9.6,Zt={x0:K.cx-2.9,x1:K.cx+2.9,top:14.4},Uf=7,Sg=4,x1=(K.eastCol-K.westCol)/Uf,$6=(K.northCol-K.south)/Sg,Ag=3,tl=.26,S0=1.4,E0=1.1,Df=3,Da=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),qe={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},qa=[],Tg=(e,t,o)=>[K.cx+e,t,K.cz+o],qf=Tg(-5.9,0,3.4),Ii=.85,Ni={c:[qf[0],4.6*Ii+.5,qf[2]],r:[5*Ii,3.6*Ii,4.5*Ii]},Lg=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[qf[0]+e.d[0]*Ii,e.d[1]*Ii+.5,qf[2]+e.d[2]*Ii],r:e.r.map(t=>t*Ii),n:e.n}));for(let e of Lg)qa.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var D6=[3.6,6.3,9];for(let e of D6){let t=8.6+e%1.7*.6;qa.push({c:Tg(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var q6=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:K.cx+e.d[0],z:K.cz+e.d[1],bloom:e.bloom}));for(let e of q6)qa.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var y1=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[K.cx+Math.cos(t)*2.3,K.cz+Math.sin(t)*2.3]});for(let[e,t]of y1)qa.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var zg=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let u=l/f,h=o+(r-o)*u,d=n+(a-n)*u;i!==void 0&&Math.abs((r!==o?h:d)-i)<s||zg.push([h,d])}};e(ko.x0+.45,ko.z0+1.2,ko.x0+.45,ko.z1-.45,K.cz,1),e(ko.x1-.45,ko.z0+1.2,ko.x1-.45,ko.z1-.45,K.cz,1),e(ko.x0+.45,ko.z1-.45,ko.x1-.45,ko.z1-.45,K.cx,1.9)}var H6=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Hf=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function Is(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Cn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function j6(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var B6={north:[e=>[e[0],e[1],K.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[K.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[K.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function Ng(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var U6=Ng(K.westCol,x1,Uf,Ze+tl,Ze+tl),wg=Ng(K.south,$6,Sg,.32,Ze+tl),Ps=[K.cx-32.35,K.northCol-77],W6=Array.from({length:Uf-1},(e,t)=>K.westCol+(t+1)*x1),Rg=e=>(e[1]-e[0])/2-.2,el=e=>(e[0]+e[1])/2;function V6(e,t){let o=el(e),n=Rg(e);return{u0:e[0],u1:e[1],bottom:t?0:Jc,head:r=>{let a=Math.abs(r-o);return a<n?lr+Math.sqrt(n*n-a*a):lr},step:.05}}function X6(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[qe.STONE,0,0]}}function Y6(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[qe.STONE,0,0]}}function _g(e,t,o){let[n,r]=B6[t],a=j6(e,n,r),i=[];o.arches.forEach((l,u)=>i.push(V6(l,u===o.open)));let s=[];for(let l of o.bays||o.arches){let u=el(l);o.oculi&&i.push(X6(u,6.85,.3)),s.push({c:u,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])s.push(l);for(let l of s)i.push(Y6(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])i.push(l);G6(a,{u0:o.u0,u1:o.u1,w0:-Ze,w1:Ze,top:o.top,holes:i,mat:[qe.BRICK,0,0],revealMat:[qe.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,u,h,d,p,v,m)=>{let g=n([l,u,h]),y=n([d,p,v]);Cn(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,u,h,d,p,v)=>Is(a,l,u,h,d,p,[v,0,0]);for(let l of o.arches){let u=el(l),h=Rg(l),d=28;for(let p of[Ze,-Ze]){let v=p>0?1:-1,m=p+v*.025;for(let g=0;g<d;g++){let y=Math.PI*g/d,b=Math.PI*(g+1)/d,M=(I,ae)=>[u+Math.cos(I)*ae,lr+Math.sin(I)*ae],k=M(y,h),z=M(b,h),R=M(y,h+.26),D=M(b,h+.26);f([k[0],k[1],m],[z[0],z[1],m],[D[0],D[1],m],[R[0],R[1],m],[0,0,v],qe.STONE);let q=Math.cos((y+b)/2),oe=Math.sin((y+b)/2);f([R[0],R[1],p],[D[0],D[1],p],[D[0],D[1],m],[R[0],R[1],m],[q,oe,0],qe.STONE)}}}if(o.arches.forEach((l,u)=>{u!==o.open&&c(l[0]-.02,Jc,-Ze-.05,l[1]+.02,Jc+.09,Ze+.05,qe.STONE)}),c(o.u0,bg,-Ze,o.u1,bg+.18,Ze+.09,qe.STONE),c(o.u0,o.win[0]-.12,Ze-.01,o.u1,o.win[0],Ze+.06,qe.STONE),o.cornice)for(let[l,u,h]of o.cornice)c(l,h-.22,Ze-.01,u,h,Ze+.16,qe.STONE),c(l,h,Ze-.01,u,h+.16,Ze+.42,qe.STONE);for(let{c:l,y0:u,y1:h,w:d,door:p}of s){let v=d/2;if(f([l-v-.01,u,.06],[l+v+.01,u,.06],[l+v+.01,h,.06],[l-v-.01,h,.06],[0,0,1],p?qe.DARK:qe.PANE),p){c(l-v-.16,0,Ze-.01,l-v,h+.16,Ze+.07,qe.STONE),c(l+v,0,Ze-.01,l+v+.16,h+.16,Ze+.07,qe.STONE),c(l-v-.16,h,Ze-.01,l+v+.16,h+.2,Ze+.09,qe.STONE),c(l-v,0,.07,l+v,h-.02,.12,qe.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,qe.DARK);continue}for(let m of[-1,1]){let g=l+m*v;c(g+m*.02,u+.02,Ze+.02,g+m*(v+.025),h-.02,Ze+.06,qe.SHUTTER)}c(l-v-.09,h,Ze-.01,l+v+.09,h+.16,Ze+.05,qe.STONE),c(l-v-.09,u-.1,Ze-.01,l+v+.09,u,Ze+.09,qe.STONE),c(l-.015,u,.06,l+.015,h,.09,qe.SHUTTER),c(l-v,(u+h)/2-.015,.06,l+v,(u+h)/2+.015,.09,qe.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let u=el(l);f([u-.31,6.54,0],[u+.31,6.54,0],[u+.31,7.16,0],[u-.31,7.16,0],[0,0,1],qe.DARK)}for(let l of o.cols){let u=Jc+.09,h=n([l,0,0]);Cn(e,h[0]-.24,u,h[2]-.24,h[0]+.24,u+.12,h[2]+.24,qe.MARBLE),e.lathe([[.23,u+.12,1],[.24,u+.17],[.2,u+.24],[.215,u+.28],[.17,u+.34,1],[.165,u+.6],[.155,lr-.5],[.15,lr-.38,1],[.175,lr-.34,1],[.17,lr-.3],[.2,lr-.22],[.27,lr-.15],[.29,lr-.12,1]],h[0],h[2],18,{mat:()=>[qe.MARBLE,0,0]}),Cn(e,h[0]-.29,lr-.12,h[2]-.29,h[0]+.29,lr+.01,h[2]+.29,qe.STONE)}o.walk&&o.walk(e)}function K6(e){let t=[-1,0,1].map(r=>{let a=K.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[qe.STONE,0,0]}});_g(e,"north",{u0:K.westCol-Ze,u1:K.eastCol+Ze,top:r=>r>Zt.x0+1e-6&&r<Zt.x1-1e-6?Zt.top:ia,cuts:[Zt.x0,Zt.x0+1e-5,Zt.x1-1e-5,Zt.x1],arches:U6,open:Ag,cols:W6,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[K.westCol-Ze-3.3,Zt.x0,ia],[Zt.x1,K.eastCol+Ze+3.3,ia],[Zt.x0-.2,Zt.x1+.2,Zt.top]],walk:r=>{Cn(r,ko.x0,Pi,K.northCol+Ze,ko.x1,Pi+.2,K.northBack,qe.PLASTER),Cn(r,ko.x0,0,K.northBack,ko.x1,Pi,K.northBack+.3,qe.PLASTER);for(let a of[K.cx-7.2,K.cx,K.cx+7.2])Is(r,[a-.8,0,K.northBack-.01],[a+.8,0,K.northBack-.01],[a+.8,2.9,K.northBack-.01],[a-.8,2.9,K.northBack-.01],[0,0,-1],[qe.DARK,0,0]),Cn(r,a-.98,0,K.northBack-.06,a+.98,3.12,K.northBack,qe.STONE),Is(r,[a-.8,0,K.northBack-.07],[a+.8,0,K.northBack-.07],[a+.8,2.9,K.northBack-.07],[a-.8,2.9,K.northBack-.07],[0,0,-1],[qe.DARK,0,0])}}),Is(e,[Zt.x0,11,K.northCol+.2],[Zt.x1,11,K.northCol+.2],[Zt.x1,13.6,K.northCol+.2],[Zt.x0,13.6,K.northCol+.2],[0,0,-1],[qe.DARK,0,0]),Cn(e,Zt.x0+.3,10.88,K.northCol-Ze-.06,Zt.x1-.3,11,K.northCol-Ze+.1,qe.STONE),Cn(e,K.westBack,Pi+.2,K.northBack,K.eastBack,ia,K.northBack+3.4,qe.BRICK),Cn(e,K.westBack,Ri,K.northCol-Ze,K.westCol-Ze,ia,K.northCol+Ze,qe.BRICK),Cn(e,K.eastCol+Ze,Ri,K.northCol-Ze,K.eastBack,ia,K.northCol+Ze,qe.BRICK),Cn(e,K.westBack,Pi+.2,K.northCol+Ze+.12,K.eastBack,ia,K.northBack,qe.BRICK),Qc(e,[K.westBack-.5,ia+.16,K.northCol-Ze-.42],[Zt.x0-K.westBack+.5,0,0],[0,2.6,4.4],qe.ROOF),Qc(e,[Zt.x1,ia+.16,K.northCol-Ze-.42],[K.eastBack+.5-Zt.x1,0,0],[0,2.6,4.4],qe.ROOF),Qc(e,[Zt.x0-.3,Zt.top+.16,K.northCol-Ze-.42],[Zt.x1-Zt.x0+.6,0,0],[0,1.4,3],qe.ROOF),Mg(e,[Zt.x0-.3,Zt.top+.16,K.northCol-Ze-.42],[Zt.x0-.3,Zt.top+1.56,K.northCol-Ze+2.58],[Zt.x0-.3,Zt.top+.16,K.northCol-Ze+2.58],[-1,0,0],qe.BRICK),Mg(e,[Zt.x1+.3,Zt.top+.16,K.northCol-Ze-.42],[Zt.x1+.3,Zt.top+1.56,K.northCol-Ze+2.58],[Zt.x1+.3,Zt.top+.16,K.northCol-Ze+2.58],[1,0,0],qe.BRICK),Cn(e,Zt.x0,ia,K.northCol+Ze,Zt.x1,Zt.top,K.northCol+2.6,qe.BRICK);for(let[r,a]of[[K.cx-9.8,K.northBack+.6],[K.cx+9.4,K.northBack+.4],[K.cx-4.6,K.northBack+1]])Cn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,qe.BRICK),Cn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,qe.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];wg.forEach((u,h)=>{let d=el(u);h===1?c.push({c:d,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:d,y0:1,y1:2.75,w:1.05}),c.push({c:d,y0:3.85,y1:5.45,w:1.05})}),_g(e,r,{u0:K.south,u1:K.northCol-Ze,top:()=>Ri,arches:[],bays:wg,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[K.south,K.northCol-Ze,Ri]]}),Cn(e,a,0,K.south,i+s*(Ze+.12),Ri,K.northBack+.3,qe.BRICK);let f=i-s*Ze;Cn(e,f,0,K.south,f-s*.06,.55,K.northCol-Ze,qe.STONE);let l=i-s*(Ze+.42);Qc(e,[l,Ri+.16,K.south],[0,0,K.northCol-Ze-K.south],[a-l+s*.4,1.9,0],qe.ROOF)};o("west",K.westBack,K.westCol),o("east",K.eastBack,K.eastCol);let n=Ci.x1+.7;Cn(e,13.65,7.4,K.south-.02,n,7.62,K.south+.14,qe.STONE),Cn(e,13.65,10.4,K.south-.02,n,10.6,K.south+.38,qe.STONE),Qc(e,[13.65,10.6,K.south+.38],[n-13.65,0,0],[0,2.2,-5],qe.ROOF)}function Mg(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function Qc(e,t,o,n,r){let a=Hf([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,l)=>[t[0]+o[0]*f+n[0]*l,t[1]+o[1]*f+n[1]*l,t[2]+o[2]*f+n[2]*l];Is(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;Is(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],Hf([-n[0],0,-n[2]]),[r,0,0])}function Q6(e){let t=K.westBack,o=K.eastBack,n=K.south,r=K.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let l=[t+(o-t)*c/a,0,n+(r-n)*f/i];s[c].push(e.vert(l,[0,1,0],[qe.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var Zc=.46,k0=.58,M0=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function Z6(e,t,o){let n=E0+o,r=(e>0?ko.x1-K.cx:K.cx-ko.x0)-S0-o,a=E0+o,i=(t>0?ko.z1-K.cz:K.cz-ko.z0)-S0-o,s=Df+o,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[r,i],[r,a],[f,a]],u=Math.atan2(a,f),h=Math.atan2(c,n);for(let d=1;d<10;d++){let p=u+(h-u)*d/10;l.push([Math.cos(p)*s,Math.sin(p)*s])}return l.map(([d,p])=>[K.cx+e*d,K.cz+t*p])}function J6(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,f=i,l=Zc*.5,u=-l,h=a+l,d=[],p=Math.max(1,Math.ceil((h-u)/1));for(let v=0;v<=p;v++){let m=u+(h-u)*v/p,g=[];for(let y=0;y<M0.length;y++){let[b,M]=M0[y],k=Math.min(M0.length-2,y),z=M0[Math.max(0,y-1)],R=M0[Math.min(M0.length-1,y+1)],D=(R[0]-z[0])*Zc,oe=(R[1]-z[1])*k0,I=-D,ae=Math.hypot(oe,I)||1,J=[t[0]+i*m+c*b*Zc,M*k0,t[1]+s*m+f*b*Zc],ne=[c*(-oe/ae),-I/ae,f*(-oe/ae)];g.push(e.vert(J,ne[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:ne,[qe.HEDGE,0,0]))}d.push(g)}for(let v=0;v<p;v++)for(let m=0;m<M0.length-1;m++)e.tri(d[v][m],d[v+1][m],d[v+1][m+1]),e.tri(d[v][m],d[v+1][m+1],d[v][m+1]);for(let[v,m]of[[0,-1],[p,1]]){let g=d[v],y=e.vert([t[0]+i*(v?h:u),k0*.5,t[1]+s*(v?h:u)],[i*m,0,s*m],[qe.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function eM(e){for(let t of[-1,1])for(let o of[-1,1]){let n=Z6(t,o,.3);for(let r=0;r<n.length;r++)J6(e,n[r],n[(r+1)%n.length])}}function tM(e){let t=K.cx,o=K.cz,n=()=>[qe.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[qe.DARK,0,0]});let r={mat:()=>[qe.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*l*i*-1+0),1.95+Math.sin(f)*l,o])}e.tube(s,()=>.016,16,5,r)}}function oM(e){for(let[t,o]of y1)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[qe.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[qe.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[qe.BARK,0,0]})}function nM(e){let[t,,o]=Ni.c,n=Pg(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[qe.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,u=[t+a*l,s*l,o+i*l],h=n()*Math.PI*2;e.tube([u,[u[0]+Math.cos(h)*1.3,u[1]+.9,u[2]+Math.sin(h)*1.3],[u[0]+Math.cos(h)*2.3,u[1]+1.4+n(),u[2]+Math.sin(h)*2.3]],d=>.08*(1-d*.7),8,6,{mat:()=>[qe.BARK,0,0]})}}for(let a of qa.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[qe.BARK,0,0]})}function rM(e){let t=()=>[qe.FARBRICK,0,0],o=()=>[qe.LEAD,0,0],n=(a,i,s,c,f,l)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let u=[];for(let d=0;d<=12;d++){let p=d/12*Math.PI/2,v=Math.cos(p)*s,m=Math.sin(p)*f;l&&(v*=1-.18*Math.sin(p*2)),u.push([Math.max(v,s*.12),c+m])}e.lathe(u,a,i,28,{mat:o});let h=c+f;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};Cn(e,14,0,104,52,26,150,qe.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{Cn(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,qe.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function aM(e){let o=[K.cx,0,K.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],u=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[i].push(e.vert(u,[-l[0],-l[1],-l[2]],[qe.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function iM(){let e=[],t=[],o=[],n=[],r=F6.createBuilder(e,t,o,n);return Q6(r),K6(r),eM(r),tM(r),oM(r),nM(r),r.save(),r.translate(Ps[0],0,Ps[1]),rM(r),r.restore(),aM(r),{position:e,normal:t,elements:o,attr:n}}var Cg=[[[13.65,0,Ci.z0-.7],[Ci.x1+.7,10.6,K.south]],[[K.westBack,Pi,K.northCol-Ze],[K.eastBack,ia,K.northBack+3.4]],[[Zt.x0,ia,K.northCol-Ze],[Zt.x1,Zt.top,K.northCol+2.6]],[[K.westBack,0,K.south],[K.westCol+Ze,Ri,K.northBack+.3]],[[K.eastCol-Ze,0,K.south],[K.eastBack,Ri,K.northBack+.3]],[[14+Ps[0],0,104+Ps[1]],[52+Ps[0],26,150+Ps[1]]]];function sM(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function $f(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=s*s-i*c;if(f<=0)return 0;let l=Math.sqrt(f),u=Math.max(0,(-s-l)/i),h=(-s+l)/i;return Math.max(0,h-u)}function g1(e){for(let[t,o]of Cg)if(sM(e,Da,t,o))return 0;return 1}function Pg(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function cM(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=Pg(21),c=(p,v,m,g,y,b,M)=>{let k=e.length/3;for(let[z,R]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...p),t.push(z,R),o.push(v,m,g),n.push(...y),r.push(...b),a.push(...M);i.push(k,k+1,k+2,k,k+2,k+3)},f=(p,v)=>{let m=1;for(let g of qa){if(g===v||!g.shadow)continue;let y=$f(p,Da,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=qa.map(p=>({...p,pts:null}));for(let p of l)for(let v=0;v<p.n;v++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(p.spindle){let J=b[1],ne=Math.sqrt(Math.max(.02,1-J*J))*(J>0?1-J*.55:1+J*.25),$e=Math.hypot(b[0],b[2])||1,Ye=ne*Math.min(1,$e*1.4);b=[b[0]/$e*Ye,J,b[2]/$e*Ye]}p.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let M=[p.c[0]+b[0]*p.r[0],p.c[1]+b[1]*p.r[1],p.c[2]+b[2]*p.r[2]],k,z;if(p.magnolia){let J=0;for(let Ye of Lg)J=Math.max(J,$f(M,Da,Ye.c,Ye.r));k=Math.exp(-J*1.1);let ne=1;for(let Ye of qa)if(!Ye.magnolia&&Ye.shadow){let fe=$f(M,Da,Ye.c,Ye.r);fe>0&&(ne*=Math.exp(-fe*.9))}k*=g1(M)*ne;let $e=H6(M,Ni.c);z=Hf([$e[0]/Ni.r[0]+b[0]*.5,$e[1]/Ni.r[1]+b[1]*.5,$e[2]/Ni.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot($e[0]/Ni.r[0],$e[1]/Ni.r[1],$e[2]/Ni.r[2])*.6+y*.4)}else{let J=$f(M,Da,p.c,p.r);k=Math.exp(-J*(p.spindle?2.2:1.25)),k*=g1(M)*f(M,qa[l.indexOf(p)]),z=Hf([b[0]/p.r[0],b[1]/p.r[1],b[2]/p.r[2]])}let R=Math.max(0,z[0]*Da[0]+z[1]*Da[1]+z[2]*Da[2]),D=.25+.75*Math.pow(y,1.5)*(.65+.35*(z[1]*.5+.5)),q=p.size[0]+(p.size[1]-p.size[0])*s(),oe=.85+s()*.3,I=p.leaf.map(J=>J*oe),ae=p.cell;p.cell===3&&s()<.35&&(ae=2),c(M,q,ae,s()*Math.PI*2,[k,D,.35+.65*R],I,p.bloom)}for(let[p,v]of zg){let m=s()<.5;for(let g=0;g<3;g++){let y=[p+(s()-.5)*.7,.28+s()*.22,v+(s()-.5)*.5],b=g1(y)*f(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let u=i.length/6,h=Array.from({length:u},(p,v)=>v);for(let p=u-1;p>0;p--){let v=Math.floor(s()*(p+1));[h[p],h[v]]=[h[v],h[p]]}let d=[];for(let p of h)for(let v=0;v<6;v++)d.push(i[p*6+v]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:d}}var Xe=e=>e.toFixed(4),ol=e=>`vec3(${Xe(e[0])}, ${Xe(e[1])}, ${Xe(e[2])})`,Ig=`
const vec3 SUN = ${ol(Da)};
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
`,lM=Cg.map(([e,t])=>`if (hitBox(ro, SUN, ${ol(e)}, ${ol(t)})) return 0.0;`).join(`
	`),fM=qa.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${ol(e.c)}, ${ol(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),hM=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${Xe(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${Xe(Pi)} && u > ${Xe(o-Ze)} && u < ${Xe(o+n*r+Ze)}) {
				float k = floor((u - ${Xe(o)}) / ${Xe(n)});
				float a = ${Xe(o)} + k * ${Xe(n)} + (k < 0.5 ? ${Xe(a)} : 0.02);
				float b = ${Xe(o)} + (k + 1.0) * ${Xe(n)} - (k > ${Xe(r-1.5)} ? ${Xe(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Xe(s)}) < 0.5 ? 0.0 : ${Xe(Jc+.09)};
				bool hole = (q.y > sill && q.y < ${Xe(lr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Xe(lr)} && d * d + (q.y - ${Xe(lr)}) * (q.y - ${Xe(lr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,jf=E0+.3,Bf=E0+.3,nl=Df+.3,Eg=ko.x1-K.cx-S0-.3,uM=ko.z1-K.cz-S0-.3,dM=K.cz-ko.z0-S0-.3,pM=Math.sqrt(nl*nl-jf*jf),vM=Math.sqrt(nl*nl-Bf*Bf),mM=[[K.cx,K.cz,.86,1.18],[K.cx,K.cz,1.25,.3],...y1.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${Xe(e)}, ${Xe(t)}), ${Xe(o)}, ${Xe(n)})) return 0.0;`).join(`
	`),gM=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Xe(K.cx)}, ${Xe(K.cz)}));
	float b1 = xz.y > ${Xe(K.cz)} ? ${Xe(uM)} : ${Xe(dM)};
	vec2 A = vec2(${Xe(jf)}, ${Xe(pM)}), Bp = vec2(${Xe(jf)}, b1), C = vec2(${Xe(Eg)}, b1);
	vec2 D = vec2(${Xe(Eg)}, ${Xe(Bf)}), E = vec2(${Xe(vM)}, ${Xe(Bf)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Xe(nl)}));
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
	${lM}
	${hM("z",K.northCol,K.westCol,x1,Uf,Ze+tl,Ze+tl,Ag,"ro.z > "+Xe(K.northCol-Ze))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${mM}
	if (ro.y < ${Xe(k0)} && ro.x > ${Xe(ko.x0)} && ro.x < ${Xe(ko.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Xe(k0)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Xe(Zc*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Xe(k0)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${fM}
	return tr;
}
`,xM=`
precision highp float;
${kg}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Ig}
${gM}

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

	if (kind == ${qe.SKY}.0) {
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

	if (kind == ${qe.GROUND}.0) {
		bool yard = P.x > ${Xe(ko.x0)} && P.x < ${Xe(ko.x1)} && P.z < ${Xe(ko.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Xe(ko.x0)}, ${Xe(ko.x1)} - P.x);
			float ez = min(P.z - ${Xe(ko.z0)}, ${Xe(ko.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Xe(K.cx)}), dz = abs(P.z - ${Xe(K.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Xe(S0)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Xe(S0)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Xe(Df)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Xe(K.cz)}, P.x - ${Xe(K.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Xe(Df)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Xe(E0)} || dz < ${Xe(E0)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Xe(E0)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Xe(K.cx)}, ${Xe(K.cz)})));
		}
	} else if (kind == ${qe.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${qe.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${qe.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${qe.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Xe(k0)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${qe.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${qe.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${qe.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${qe.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${qe.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${qe.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${qe.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${qe.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${qe.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${qe.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${qe.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Xe(K.westCol)} || P.x > ${Xe(K.eastCol)} || P.z > ${Xe(K.northCol)}) && P.y < ${Xe(Pi+.05)} && P.z > ${Xe(K.south-.1)} && P.z < ${Xe(K.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Xe(K.northCol)} ? P.z - ${Xe(K.northCol)} : (P.x < ${Xe(K.westCol)} ? ${Xe(K.westCol)} - P.x : P.x - ${Xe(K.eastCol)});
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
}`,yM=`
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
}`,bM=`
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
}`,wM=`
precision highp float;
${kg}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Ig}
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
}`;function _M(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}b1.exports=e=>{let t=iM(),o=cM(),n=_M(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>m1.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:xM,vert:yM,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>m1.gardenDetail}}),s=e({frag:wM,vert:bM,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*m1.leafShare/6)*6});return function(){i(),s()}};b1.exports.layout={G:K,YARD:ko,SUN:Da}});var qg=de(($S,Dg)=>{"use strict";var MM=or().GLSL,EM=f0(),{C:$g}=tr(),fr=$g.x1+.35,E1=$g.zc,w1=[fr-7.3,2,E1],Fg=5.2*Math.PI/180,Gg=2100,kM=725,SM=1288,AM=1450,TM=2576,ci=E1-3.2,Xf=E1+3.3,_1=fr+5,M1=fr+11.7,Os=3.9,rl=fr+22.7,Wf=40;function LM(){let e=[],t=[],o=[],n=[],r=EM.createBuilder(e,t,o,n),a=(l,u,h,d,p,v)=>{let m=[];for(let g=0;g<=p;g++){m.push([]);for(let y=0;y<=v;y++){let b=[0,1,2].map(M=>l[M]+u[M]*g/p+h[M]*y/v);m[g].push(r.vert(b,d,[0,0,0]))}}for(let g=0;g<p;g++)for(let y=0;y<v;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=Xf-ci,s=.7;a([fr-s,0,ci],[_1-fr+s,0,0],[0,0,i],[0,1,0],6,4);let c=M1-_1,f=Math.hypot(c,Os);return a([_1,0,ci],[c,Os,0],[0,0,i],[-Os/f,c/f,0],6,4),a([M1,Os,ci],[rl-M1,0,0],[0,0,i],[0,1,0],6,4),a([fr-s,0,ci],[rl-fr+s,0,0],[0,Wf,0],[0,0,1],12,12),a([fr-s,0,Xf],[rl-fr+s,0,0],[0,Wf,0],[0,0,-1],12,12),a([rl,0,ci],[0,Wf,0],[0,0,i],[-1,0,0],8,4),a([fr-s,Wf,ci],[rl-fr+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var _r=e=>e.toFixed(5),Vf=[[fr+3.4,3.7,ci+.01,1],[fr+8.6,4.1,Xf-.01,-1],[fr+14.8,Os+3.3,ci+.01,1],[fr+19.6,Os+3.6,Xf-.01,-1]],zM=`
precision highp float;
${MM}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Vf.length};
vec4 LAMP[NLAMP];

void main() {
	${Vf.map((e,t)=>`LAMP[${t}] = vec4(${_r(e[0])}, ${_r(e[1])}, ${_r(e[2])}, ${_r(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${_r(w1[0])}, ${_r(w1[1])}, ${_r(w1[2])});
	float c = ${_r(Math.cos(Fg))}, s = ${_r(Math.sin(Fg))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${_r(kM)} + ${_r(Gg)} * d.z / fw, ${_r(SM)} - ${_r(Gg)} * up / fw);
	vec2 uv = px / vec2(${_r(AM)}, ${_r(TM)});
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
	for (int i = 0; i < ${Vf.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,NM=`
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
}`;Dg.exports=e=>{let t=LM(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:zM,vert:NM,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,f)=>{let[l,u,h]=s,d=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[p,v,m]of d){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+p[0]*c[0]+v[0]*y*c[0]+m[0]*b*c[0],u+p[1]*c[1]+v[1]*y*c[1]+m[1]*b*c[1],h+p[2]*c[2]+v[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...p),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of Vf){let c=s[3],f=s[2]+c*.42;a([s[0],s[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let u of[-1,1])a([s[0]+l*.11,s[1],f+u*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,f],[.15,.03,.15],0),a([s[0],s[1]+.27,f],[.05,.05,.05],0),a([s[0],s[1]-.19,f],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var Wg=de((DS,Ug)=>{"use strict";var RM=or().GLSL,{A:Kf,BENCH:S1,SHAFT:k1,TREE:al,oculusGLSL:CM}=ra(),PM=ta(),Yf=al.sxz,Hg=al.sy,jg=al.yaw;function IM(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let f=new Uint16Array(e,s,o*2);s+=o*4;let l=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let u=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:f,nrm:l,idx:u}}function OM(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(jg),i=Math.sin(jg);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*Yf,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*Hg,l=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*Yf;t[s*3]=Kf.cx+a*c+i*l,t[s*3+1]=S1.soil+.02+f,t[s*3+2]=Kf.zc-i*c+a*l;let u=e.nrm[s*3]/127/Yf,h=e.nrm[s*3+1]/127/Hg,d=e.nrm[s*3+2]/127/Yf,p=Math.hypot(u,h,d)||1;u/=p,h/=p,d/=p,o[s*3]=a*u+i*d,o[s*3+1]=h,o[s*3+2]=-i*u+a*d,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function Bg(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var qn=e=>e.toFixed(4),Fs=al.crownC,Gs=al.crownR,FM=`
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

const vec3 SHAFT = vec3(${qn(k1[0])}, ${qn(k1[1])}, ${qn(k1[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${qn(Kf.cx)}, ${qn(Kf.zc)});
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
	vec3 cc = vec3(${qn(Fs[0])}, ${qn(Fs[1])}, ${qn(Fs[2])});
	vec3 cr = vec3(${qn(Gs[0])}, ${qn(Gs[1])}, ${qn(Gs[2])});
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
}`,Oi=Ei(),GM=`
precision highp float;
${RM}
uniform float time;
${Oi.lanternGLSL(Oi.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Oi.LANTERNS[Oi.TREE_LANTERN[0]].x.toFixed(3)}, ${Oi.LANTERNS[Oi.TREE_LANTERN[0]].y.toFixed(3)}, ${Oi.LANTERNS[Oi.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${CM()}

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
	vec3 rel = (v_pos - vec3(${qn(Fs[0])}, ${qn(Fs[1])}, ${qn(Fs[2])})) / vec3(${qn(Gs[0])}, ${qn(Gs[1])}, ${qn(Gs[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${qn(S1.soil)}, ${qn(S1.soil+.5)}, v_pos.y);

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
}`;Ug.exports=e=>{let t=null,o=Bg(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Bg(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=OM(IM(a));t=e({vert:FM,frag:GM,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>PM.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var eh=de((qS,Kg)=>{"use strict";var $s=Ai(),$M="res/audio/go-tomorrow.mp3",DM="res/audio/go-tomorrow.json",Xg="gallery-sound",Qf=[$s.PIANO.x,1,$s.PIANO.z],qM=$s.R,Rr=!0;try{localStorage.getItem(Xg)==="off"&&(Rr=!1)}catch(e){}var xn=null,rr=null,il=null,sl=null,Fi=null,li=null,A0=!1,Zf=null,Vg=[],HM=(typeof performance!="undefined"?performance.now():0)/1e3;function jM(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let i=o.getChannelData(a),s=0;for(let c=0;c<t;c++){let f=c/e.sampleRate,l=.25+.6*Math.exp(-f*2.2);s+=(r()-s)*l,i[c]=s*Math.pow(1-c/t,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function BM(){if(xn)return;xn=new Audio,xn.src=$M,xn.loop=!0,xn.preload="auto",xn.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){xn.volume=.2;return}try{rr=new e;let t=rr.createMediaElementSource(xn);Fi=rr.createBiquadFilter(),Fi.type="lowpass",Fi.frequency.value=1500,Fi.Q.value=.4,il=rr.createGain(),il.gain.value=0,sl=rr.createGain(),sl.gain.value=0;let o=rr.createConvolver();o.buffer=jM(rr),li=rr.createGain(),li.gain.value=Rr?1:0,t.connect(Fi),Fi.connect(il),il.connect(li),Fi.connect(o),o.connect(sl),sl.connect(li),li.connect(rr.destination)}catch(t){rr=null,xn.volume=.2}}function Yg(){if(A0||!Rr)return;BM();let e=()=>xn.play().then(()=>{A0=!0}).catch(()=>{});rr&&rr.state==="suspended"?rr.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,Yg,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!xn||!A0||(document.hidden?xn.pause():Rr&&xn.play().catch(()=>{}))}),fetch(DM).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(i=>i[2]).sort((i,s)=>i-s),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(i=>({t:i[0],w:i[1],x:Math.max(0,Math.min(1,(i[2]-r)/Math.max(a-r,.001)))}))};Zf={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var Jf={AT:Qf,listen(e){if(!rr||!A0)return;let t=e[0]-Qf[0],o=e[2]-Qf[2],n=Math.hypot(t,o,(e[1]-Qf[1])*.5),r=Math.hypot(e[0]-$s.C.x,e[2]-$s.C.z)<qM+.4||e[0]<-.2&&Math.abs(e[2]-$s.C.z)<4,a,i,s;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,i=.22+.16*f,s=16e3}else{let f=5.5/Math.max(n,5.5),l=e[0]>14.2&&e[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,i=.34*Math.pow(f,.95)*l,s=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=rr.currentTime;il.gain.setTargetAtTime(a,c,.35),sl.gain.setTargetAtTime(i,c,.35),Fi.frequency.setTargetAtTime(s,c,.35)},time(){let e=Zf&&Zf.dur||158;return xn&&A0&&!xn.paused||xn&&A0?xn.currentTime%e:((performance.now()/1e3-HM)%e+e)%e},get cues(){return Zf},get on(){return Rr},set(e){Rr=!!e;try{localStorage.setItem(Xg,Rr?"on":"off")}catch(t){}Rr?(Yg(),xn&&A0&&xn.play().catch(()=>{}),li&&li.gain.setTargetAtTime(1,rr.currentTime,.2)):li?li.gain.setTargetAtTime(0,rr.currentTime,.15):xn&&xn.pause(),Vg.forEach(t=>t(Rr))},toggle(){Jf.set(!Rr)},onChange(e){Vg.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=Rr?t:o,n.setAttribute("aria-label",Rr?"Turn the music off":"Turn the music on"),n.title=Rr?"Music on":"Music off",n.setAttribute("aria-pressed",Rr?"true":"false")};return r(),Jf.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,i=>i.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Jf.toggle()}),n}};Kg.exports=Jf});var cx=de((HS,z1)=>{"use strict";var L1=or().GLSL,{A:Qg,BENCH:nx,oculusGLSL:rx}=ra(),Zg=ta(),ax=Ai(),Jg=eh(),UM=1.74,WM=1.877,hr=UM/WM,L0={x:Qg.cx-1.22,z:Qg.zc+.02,hipY:nx.seat+.115},Qo=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Ha=e=>[-e[0],-e[1],-e[2],e[3]],$i=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},th=(e,t,o)=>Qo($i([0,0,1],o*Math.PI/180),Qo($i([0,1,0],t*Math.PI/180),$i([1,0,0],e*Math.PI/180))),ix=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},ja=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],ll=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Gi=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],T1=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],nh=e=>Math.hypot(e[0],e[1],e[2]),cl=e=>{let t=nh(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},ah=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],VM=(e,t)=>{let o=[e[0],e[1],e[2]],n=Gi(ah(o,t),2);return ll(ll(t,Gi(n,e[3])),ah(o,n))},XM=(e,t)=>{let o=ah(e,t),n=1+T1(e,t);return n<1e-6?[0,0,1,0]:ix([o[0],o[1],o[2],n])};function sa(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,f=a*a,l=n*r,u=n*a,h=r*a,d=i*n,p=i*r,v=i*a;return[(1-2*(c+f))*o[0],2*(l+v)*o[0],2*(u-p)*o[0],0,2*(l-v)*o[1],(1-2*(s+f))*o[1],2*(h+d)*o[1],0,2*(u+p)*o[2],2*(h-d)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function ar(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function A1(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,f=e[6]/o,l=e[8]/n,u=e[9]/n,h=e[10]/n,d=r+c+h,p;if(d>0){let v=Math.sqrt(d+1)*2;p=[(f-u)/v,(l-i)/v,(a-s)/v,v/4]}else if(r>c&&r>h){let v=Math.sqrt(1+r-c-h)*2;p=[v/4,(s+a)/v,(l+i)/v,(f-u)/v]}else if(c>h){let v=Math.sqrt(1+c-r-h)*2;p=[(s+a)/v,v/4,(u+f)/v,(l-i)/v]}else{let v=Math.sqrt(1+h-r-c)*2;p=[(l+i)/v,(u+f)/v,v/4,(a-s)/v]}return ix(p)}var rh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{rh[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],rh[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],rh[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function T0(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function ex(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*T0(e,.14,.07)+57*T0(e,.72,.12),n=5*T0(e,.06,.04)-9*T0(e,.42,.12)+17*T0(e,.62,.05)-3*T0(e,.85,.1),r=-26*T0(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function YM(e){let t=(e%1+1)%1,o=ex(t),n=ex(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var tx=`
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
}`,ih=Ei(),ox=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${L1}
uniform float time;
${ax.roomGLSL()}
${ih.lanternGLSL(ih.TREE_LANTERN)}
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
${rx()}
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
	// the outfit: a long black wool overcoat, a ribbed roll-neck, pleated
	// pinstripe trousers, a leather belt and shoes, a maroon scarf
	// (scripts/avatar/build_outfit.py makes them)
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
		N = bump(N, v_pos, folds * 0.012 + grain * 0.0006 * fade, 1.0);
		// the hollows of the folds hold a little shadow
		t.rgb *= 0.82 + 0.36 * folds;
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
}`;function KM(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var sx={w:.13,h:.2},oh=e=>.011*(1-Math.pow(1-e,3));function QM(){let e=[],t=[],o=[],n=[],r=[],a=(v,m,g,y,b,M,k)=>{let z=e.length/3;[v,m,g,y].forEach((R,D)=>{e.push(...R),t.push(...b),o.push(...k[D]),n.push(M)}),r.push(z,z+1,z+2,z,z+2,z+3)},{w:i,h:s}=sx,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,u=i+.001,h=c+.001;a([0,l,-h],[u,l,-h],[u,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[u,l+.001,h],[u,l+.001,-h],[0,1,0],2,f),a([-u,l,-h],[0,l,-h],[0,l,h],[-u,l,h],[0,-1,0],2,f),a([-u,l+.001,-h],[-u,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let d=8;for(let v of[1,-1]){for(let g=0;g<d;g++){let y=g/d,b=(g+1)/d,M=(.002+y*(i-.002))*v,k=(.002+b*(i-.002))*v,z=oh(y),R=oh(b),D=v>0?y:1-y,q=v>0?b:1-b,oe=1,I=-(R-z)/(k-M);a([M,z,-c],[k,R,-c],[k,R,c],[M,z,c],[I,oe,0],3,[[D,1],[q,1],[q,0],[D,0]]),a([M,l+.001,c],[k,l+.001,c],[k,R,c],[M,z,c],[0,0,1],4,f),a([M,z,-c],[k,R,-c],[k,l+.001,-c],[M,l+.001,-c],[0,0,-1],4,f)}let m=i*v;a([m,l+.001,-c],[m,oh(1),-c],[m,oh(1),c],[m,l+.001,c],[v,0,0],4,f)}let p=10;for(let v=0;v<p;v++){let m=v/p,g=(v+1)/p,y=e.length/3;for(let[b,M]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,M),t.push(0,1,0),o.push(b,(M+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function ZM(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,f,l,u,h)=>{for(let d=0;d<u;d++){let p=i+(n()-.5)*c*2,v=s+(n()-.5)*f*2,m=20+n()*60,g=t.createRadialGradient(p,v,0,p,v,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),t.fillStyle=g,t.fillRect(p-m,v-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var JM=`
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
		float r = u * ${sx.w.toFixed(3)};
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
}`,eE=`
precision highp float;
${L1}
uniform float time;
${ih.lanternGLSL(ih.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${rx()}
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
}`;function tE(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],u=16;for(let h=0;h<l.length;h++){let[d,p,v,m]=l[h],g=m===2?.45:1;for(let y=0;y<=u;y++){let b=y/u*Math.PI*2;e.push(Math.cos(b)*d,p,Math.sin(b)*d*g);let M=Math.max(h-1,0),k=Math.min(h+1,l.length-1),z=l[k][0]-l[M][0],R=l[k][1]-l[M][1],D=Math.hypot(z,R)||1;t.push(Math.cos(b)*R/D,-z/D,Math.sin(b)*R/D/g),o.push(...v),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let d=0;d<u;d++){let p=h*(u+1)+d,v=p+u+1;r.push(p,v,p+1,p+1,v,v+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var oE=`
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
}`,nE=`
precision highp float;
${L1}
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
}`,rE=`
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
}`,aE=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;z1.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[L0.x,1.9,L0.z],glow:0};Promise.all([fetch(t+"avatar.json").then(R=>R.json()),fetch(t+"avatar.bin").then(R=>R.arrayBuffer())]).then(([R,D])=>{o=s(R,D)}).catch(R=>console.error(R));let i=e.texture({data:[[[255,255,255,255]]]});function s(R,D){let q=(X,He)=>new Float32Array(D,X,He),oe=R.bones,I=oe.length,ae={};oe.forEach((X,He)=>{ae[X.name]=He});let J=[];for(let X=0;X<I;X++)J.push(Array.from(q(R.ibm+X*64,16)));let ne=oe.map(X=>sa(X.t,X.r,X.s)),$e=[];for(let X=0;X<I;X++){let He=oe[X].parent;$e[X]=He<0?ne[X]:ar($e[He],ne[X])}let Ye=$e.map(A1),fe=R.meshes.map(X=>{let He=q(X.pos,X.n*3),Ke=q(X.nrm,X.n*3),dt=q(X.uv,X.n*2),Pt=new Uint8Array(D,X.jnt,X.n*4),Xt=q(X.wgt,X.n*4),no=new Uint16Array(D,X.idx,X.ni),ro={};for(let Po in X.morphs){let Ao=X.morphs[Po];ro[Po]={idx:new Uint16Array(D,Ao.idx,Ao.n),d:q(Ao.d,Ao.n*3)}}let eo=new Float32Array(X.n*3),nt=new Float32Array(X.n*3),bt=new Float32Array(X.n*3),wt=e.buffer({data:eo,usage:"dynamic"}),Nt=e.buffer({data:nt,usage:"dynamic"}),Co=/avaturn_hair/.test(X.name),yt=/EyeAO|Eyelash/.test(X.name),to=/Body|Head/.test(X.name),wo=X.kind||0;return{m:X,pos:He,nrm:Ke,uv:dt,jnt:Pt,wgt:Xt,idx:no,morphs:ro,outP:eo,outN:nt,work:bt,pb:wt,nbuf:Nt,tex:X.tex?KM(e,t+X.tex):i,kind:wo,alphaScale:/EyeAO/.test(X.name)?.25:1,blend:X.blend||Co,alphaCut:Co?.35:yt?.02:0,skin:to?1:0}}),ve=e({vert:tx,frag:ox,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!k?M.lamp:[0,0,0,0],court:()=>M||k?0:1,candle:()=>k?1:0},cull:{enable:!1}}),Fe=e({vert:tx,frag:ox,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!k?M.lamp:[0,0,0,0],court:()=>M||k?0:1,candle:()=>k?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),ft=.3;for(let X of fe)if(X.uvBuf=e.buffer(X.uv),/Body/.test(X.m.name)){let He=[],Ke=[];for(let dt=0;dt<X.idx.length;dt+=3){let Pt=X.idx[dt],Xt=X.idx[dt+1],no=X.idx[dt+2];(X.pos[Pt*3+1]<ft&&X.pos[Xt*3+1]<ft&&X.pos[no*3+1]<ft?Ke:He).push(Pt,Xt,no)}X.el=e.elements({data:new Uint16Array(He),type:"uint16"}),Ke.length&&(X.sockEl=e.elements({data:new Uint16Array(Ke),type:"uint16"}))}else X.el=e.elements({data:X.idx,type:"uint16"});let Gt=$e[ae.Hips],zt=$i([1,0,0],-Math.PI/2),po=ar(sa([L0.x-Gt[12]*hr,L0.hipY-Gt[14]*hr,L0.z+Gt[13]*hr],zt,[1,1,1]),sa([0,0,0],[0,0,0,1],[hr,hr,hr])),gt=new Array(I),Qt=-1,Bo=(X,He,Ke)=>ar(sa([X,0,He],$i([0,1,0],Ke),[1,1,1]),sa([0,0,0],[0,0,0,1],[hr,hr,hr])),sr=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(X=>ae[X]),Qe=sr.map(X=>$e[X][13]*hr);function vt(X){let He=YM(X.phase),Ke={},dt=nt=>{for(let bt in nt){let wt=nt[bt],Nt=th(wt[0],wt[1],wt[2]);Ke[bt]=Ke[bt]?Qo(Ke[bt],Nt):Nt}};dt(He.swing),dt(He.pose);let Pt=Math.cos(X.heading),Xt=-Math.sin(X.heading),no=Bo(X.x+Pt*He.sway,X.z+Xt*He.sway,X.heading),ro=new Array(I);for(let nt=0;nt<I;nt++){let bt=oe[nt],wt=ne[nt],Nt=Ke[bt.name];if(Nt){let Co=Ye[nt],yt=Qo(Ha(Co),Qo(Nt,Co));wt=sa(bt.t,Qo(bt.r,yt),bt.s)}ro[nt]=bt.parent<0?ar(no,wt):ar(ro[bt.parent],wt)}let eo=1/0;sr.forEach((nt,bt)=>{eo=Math.min(eo,ro[nt][13]-Qe[bt])});for(let nt=0;nt<I;nt++)ro[nt]=ro[nt].slice(),ro[nt][13]-=eo,gt[nt]=ar(ro[nt],J[nt]);return{blink:0}}function Ct(X,He){let Ke=Math.sin(X*2*Math.PI/4.6),dt=Math.sin(X*.37)*.6+Math.sin(X*.83+1)*.4,Pt={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Ke*.8,0,0],Spine2:[4+Ke*.6,0,0],Neck:[10,0,0],Head:[12+dt*2,dt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Xt={};for(let wt in Pt){let Nt=Pt[wt];Xt[wt]=th(Nt[0],Nt[1],Nt[2])}let no=Bo(He.x,He.z,He.heading),ro=new Array(I);for(let wt=0;wt<I;wt++){let Nt=oe[wt],Co=ne[wt],yt=Xt[Nt.name];if(yt){let to=Ye[wt],wo=Qo(Ha(to),Qo(yt,to));Co=sa(Nt.t,Qo(Nt.r,wo),Nt.s)}ro[wt]=Nt.parent<0?ar(no,Co):ar(ro[Nt.parent],Co)}let nt=ro[ae.Hips][13]-(He.y+.1);for(let wt=0;wt<I;wt++)ro[wt]=ro[wt].slice(),ro[wt][13]-=nt,gt[wt]=ar(ro[wt],J[wt]);let bt=X%4.1;return{blink:bt<.16?Math.sin(bt/.16*Math.PI):0}}let Et=X=>[$e[X][12],$e[X][13],$e[X][14]],oo=(X,He)=>{let Ke=cl(X),dt=cl(ja(He,Gi(Ke,T1(He,Ke)))),Pt=ah(Ke,dt);return A1([Ke[0],Ke[1],Ke[2],0,dt[0],dt[1],dt[2],0,Pt[0],Pt[1],Pt[2],0,0,0,0,1])},ht={};for(let X of["Left","Right"]){let He=ae[X+"Arm"],Ke=ae[X+"ForeArm"],dt=ae[X+"Hand"],Pt=ae[X+"HandMiddle1"];ht[X]={a:He,f:Ke,h:dt,upper:nh(ja(Et(Ke),Et(He)))*hr,fore:nh(ja(Et(dt),Et(Ke)))*hr,dir0:cl(ja(Et(Ke),Et(He))),qf0:oo(ja(Et(dt),Et(Ke)),[0,1,0]),qh0:oo(ja(Et(Pt),Et(dt)),[0,1,0])}}let mt={};for(let X of["Left","Right"])mt[ht[X].a]={side:X,part:0},mt[ht[X].f]={side:X,part:1},mt[ht[X].h]={side:X,part:2};function me(X,He,Ke){if(!X||!X.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let dt=0,Pt=X.length-1,Xt=-1;for(;dt<=Pt;){let Ao=dt+Pt>>1;X[Ao].t<=He?(Xt=Ao,dt=Ao+1):Pt=Ao-1}let no=X[X.length-1],ro=X[0],eo=Xt>=0?X[Xt]:{t:no.t-Ke,x:no.x,w:no.w},nt=Xt+1<X.length?X[Xt+1]:{t:ro.t+Ke,x:ro.x,w:ro.w},bt=Math.max(.05,nt.t-eo.t),wt=Math.min(.14,bt*.45),Nt=Math.max(0,Math.min(1,(He-eo.t-wt)/Math.max(bt-wt-.03,.02))),Co=Nt*Nt*(3-2*Nt),yt=He-eo.t,to=(.55+.45*eo.w)*Math.exp(-yt/.11),wo=nt.t-He,Po=wo<.05?(.55+.45*nt.w)*(1-wo/.05):0;return{x:eo.x+(nt.x-eo.x)*Co,lift:Math.sin(Math.PI*Nt)*Math.min(.05,.012+bt*.03)*(bt>2.5?.4:1),press:Math.max(to,Po),finger:Po>to?((Xt+1)*7+3)%4:(Math.max(Xt,0)*7+3)%4,busy:Math.exp(-yt/.9)}}let Oe={lean:0,turn:0,nod:0,pedal:0,last:-1},kt=["Index","Middle","Ring","Pinky"];function tt(X){let He=ax.PLAY,Ke=Jg.cues,dt=Jg.time(),Pt=Ke&&Ke.dur||158,Xt={Left:me(Ke&&Ke.left,dt,Pt),Right:me(Ke&&Ke.right,dt,Pt)},no=.35;if(Ke&&Ke.level&&Ke.level.length){let xt=dt*8,Jt=Math.floor(xt)%Ke.level.length,ln=(Jt+1)%Ke.level.length;no=Ke.level[Jt]+(Ke.level[ln]-Ke.level[Jt])*(xt-Math.floor(xt))}let ro=Oe.last<0?0:Math.min(.1,Math.max(0,X-Oe.last));Oe.last=X;let eo=xt=>Math.min(1,ro*xt);Oe.lean+=(no-Oe.lean)*eo(1.2),Oe.turn+=(Xt.Right.busy-Xt.Left.busy-Oe.turn)*eo(1.5),Oe.nod+=(Math.max(Xt.Right.press,Xt.Left.press*.7)-Oe.nod)*eo(6),Oe.pedal+=((Xt.Left.busy>.35?1:.15)-Oe.pedal)*eo(5);let nt=Math.sin(X*2*Math.PI/4.6),bt=Math.sin(dt*.41)*.6+Math.sin(dt*.17+1)*.4,wt={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Oe.pedal,0,0],Spine:[9+3.5*Oe.lean+bt*1.6,Oe.turn*2.5,-Oe.turn*1.6],Spine1:[7+nt*.8+2.5*Oe.lean,Oe.turn*2.5,-Oe.turn*1.2],Spine2:[6+nt*.6+bt*.8,Oe.turn*1.5,0],Neck:[13+3*Oe.lean,Oe.turn*3,0],Head:[15+Oe.nod*3.5+bt*1.5,Oe.turn*5,bt*1.5]};for(let xt of["Left","Right"]){let Jt=xt==="Left"?-1:1,ln=Xt[xt];kt.forEach((Qn,St)=>{let To=St===ln.finger?ln.press:ln.press*.2;wt[xt+"Hand"+Qn+"1"]=[0,0,Jt*(20+3*St+20*To)],wt[xt+"Hand"+Qn+"2"]=[0,0,Jt*(26+4*St-6*To)],wt[xt+"Hand"+Qn+"3"]=[0,0,Jt*14]}),wt[xt+"HandThumb1"]=[0,Jt*-18,Jt*10]}let Nt={};for(let xt in wt){let Jt=wt[xt];Nt[xt]=th(Jt[0],Jt[1],Jt[2])}let Co=$e[ae.Hips][13]*hr,yt=ar(sa([He.stoolX,He.stoolTop+.1-Co,He.stoolFront+.15],$i([0,1,0],He.heading),[1,1,1]),sa([0,0,0],[0,0,0,1],[hr,hr,hr])),to=(He.keyX0+He.keyX1)/2,wo={};for(let xt of["Left","Right"]){let Jt=Xt[xt],ln=xt==="Left"?to-.4+.33*Jt.x:to+.07+.33*Jt.x;wo[xt]=[ln,He.keyTop+.062+Jt.lift-Jt.press*.012,He.keyFront+.075]}let Po=new Array(I),Ao={},Vr=[0,1,0];for(let xt=0;xt<I;xt++){let Jt=oe[xt],ln=ne[xt],Qn=Nt[Jt.name],St=mt[xt];if(St){let To=ht[St.side];if(St.part===0){let fn=Po[Jt.parent],Lo=ar(fn,ne[xt]),Va=[Lo[12],Lo[13],Lo[14]],Xa=Qo(A1(fn),Ha(Ye[Jt.parent])),Ca=ja(wo[St.side],Va),U=nh(Ca),ge=(To.upper+To.fore)*.995;U>ge&&(Ca=Gi(Ca,ge/U),U=ge);let rt=Gi(Ca,1/U),it=(To.upper*To.upper-To.fore*To.fore+U*U)/(2*U),qt=Math.sqrt(Math.max(0,To.upper*To.upper-it*it)),Uo=[St.side==="Left"?-.6:.6,-.8,.3];Uo=cl(ja(Uo,Gi(rt,T1(Uo,rt))));let Zn=ll(Va,ll(Gi(rt,it),Gi(Uo,qt)));To.T=ll(Va,Ca),To.elbow=Zn;let ma=cl(ja(Zn,Va)),Tn=Qo(XM(VM(Xa,To.dir0),ma),Xa);Ao[xt]=Tn,Qn=Qo(Ha(Xa),Tn)}else if(St.part===1){let fn=Qo(oo(ja(To.T,To.elbow),Vr),Ha(To.qf0));Ao[xt]=fn,Qn=Qo(Ha(Ao[Jt.parent]),fn)}else{let fn=Xt[St.side],Lo=Qo(oo([St.side==="Left"?.12:-.12,-.2-.1*fn.press,-1],Vr),Ha(To.qh0));Ao[xt]=Lo,Qn=Qo(Ha(Ao[Jt.parent]),Lo)}}if(Qn){let To=Ye[xt],fn=Qo(Ha(To),Qo(Qn,To));ln=sa(Jt.t,Qo(Jt.r,fn),Jt.s)}Po[xt]=Jt.parent<0?ar(yt,ln):ar(Po[Jt.parent],ln)}for(let xt=0;xt<I;xt++)gt[xt]=ar(Po[xt],J[xt]);a.pianist={head:[Po[ae.Head][12],Po[ae.Head][13],Po[ae.Head][14]]};let Xr=X%4.3;return{blink:Xr<.16?Math.sin(Xr/.16*Math.PI):0}}function at(X,He){if(k)return tt(X);if(M)return Ct(X,M);if(He)return vt(He);let Ke=Math.sin(X*2*Math.PI/4.2),dt=X%3.7,Pt=dt<.16?Math.sin(dt/.16*Math.PI):0,Xt=Math.sin(X*.45),no=Math.sin(X*.31+.8),ro=Math.max(0,Math.sin(X*.085)-.75)*4,eo={RightArm:[0,-22*ro,11*Xt],RightForeArm:[0,8+26*ro,0],RightHand:[38*no,0,6*Math.sin(X*.7)],LeftUpLeg:[0,0,3.2*Math.sin(X*.36)],RightFoot:[5*Math.sin(X*.52+.4),0,0],Head:[0,1.6*Math.sin(X*.21),0]};["Index","Middle","Ring","Pinky"].forEach((yt,to)=>{let wo=Math.sin(X*1.1-to*.5);eo["RightHand"+yt+"1"]=[0,0,8+12*wo],eo["RightHand"+yt+"2"]=[0,0,6+10*wo]});let nt={},bt=(yt,to)=>{for(let wo in yt){let Po=yt[wo],Ao=th(Po[0]*to,Po[1]*to,Po[2]*to);nt[wo]=nt[wo]?Qo(nt[wo],Ao):Ao}};bt(rh,1),bt({Spine1:[Ke*.8,0,0],Spine2:[Ke*.6,0,0]},1),bt(eo,1);let wt=new Array(I),Nt=new Array(I);for(let yt=0;yt<I;yt++){let to=oe[yt],wo=ne[yt],Po=nt[to.name];if(Po){let Ao=Ye[yt],Vr=Qo(Ha(Ao),Qo(Po,Ao));wo=sa(to.t,Qo(to.r,Vr),to.s)}wt[yt]=to.parent<0?ar(po,wo):ar(wt[to.parent],wo),Nt[yt]=null}for(let yt=0;yt<I;yt++)gt[yt]=ar(wt[yt],J[yt]);let Co=yt=>[yt[12],yt[13],yt[14]];return a.headPos=Co(wt[ae.Head]),a.hipsPos=Co(wt[ae.Hips]),a.headM=wt[ae.Head],{blink:Pt}}function vo(X,He){let{pos:Ke,nrm:dt,jnt:Pt,wgt:Xt,outP:no,outN:ro,work:eo,m:nt}=X,bt=nt.n,wt=Ke;if(He){eo.set(Ke);for(let Nt in X.morphs){let Co=He[Nt]||0;if(Co<=0)continue;let yt=X.morphs[Nt];for(let to=0;to<yt.idx.length;to++){let wo=yt.idx[to]*3;eo[wo]+=yt.d[to*3]*Co,eo[wo+1]+=yt.d[to*3+1]*Co,eo[wo+2]+=yt.d[to*3+2]*Co}}wt=eo}for(let Nt=0;Nt<bt;Nt++){let Co=wt[Nt*3],yt=wt[Nt*3+1],to=wt[Nt*3+2],wo=dt[Nt*3],Po=dt[Nt*3+1],Ao=dt[Nt*3+2],Vr=0,Xr=0,xt=0,Jt=0,ln=0,Qn=0;for(let To=0;To<4;To++){let fn=Xt[Nt*4+To];if(fn===0)continue;let Lo=gt[Pt[Nt*4+To]];Vr+=fn*(Lo[0]*Co+Lo[4]*yt+Lo[8]*to+Lo[12]),Xr+=fn*(Lo[1]*Co+Lo[5]*yt+Lo[9]*to+Lo[13]),xt+=fn*(Lo[2]*Co+Lo[6]*yt+Lo[10]*to+Lo[14]),Jt+=fn*(Lo[0]*wo+Lo[4]*Po+Lo[8]*Ao),ln+=fn*(Lo[1]*wo+Lo[5]*Po+Lo[9]*Ao),Qn+=fn*(Lo[2]*wo+Lo[6]*Po+Lo[10]*Ao)}no[Nt*3]=Vr,no[Nt*3+1]=Xr,no[Nt*3+2]=xt;let St=Math.hypot(Jt,ln,Qn)||1;ro[Nt*3]=Jt/St,ro[Nt*3+1]=ln/St,ro[Nt*3+2]=Qn/St}nt.grid&&!Vt&&!M&&!k&&_(X),X.pb.subdata(no),X.nbuf.subdata(ro)}function _(X){let[He,Ke]=X.m.grid,dt=X.outP,Pt=X.outN,Xt=nx.seat+.012;for(let no=1;no<He;no++){let ro=Math.pow(1-no/(He-1),1.5);for(let eo=0;eo<Ke;eo++){let nt=(no*Ke+eo)*3;dt[nt+1]>Xt?dt[nt+1]=Xt+(dt[nt+1]-Xt)*Math.max(ro,.15):dt[nt+1]=Xt}}for(let no=0;no<Pt.length;no+=3)Pt[no]=0,Pt[no+1]=1,Pt[no+2]=0}let Vt=!1;function Ht(X,He){Vt=!!He;let Ke=at(X,He),dt={eyeBlinkLeft:Ke.blink,eyeBlinkRight:Ke.blink};for(let Pt of fe)vo(Pt,Object.keys(Pt.morphs).length?dt:null);a.pose=Ke}return{parts:fe,update:Ht,drawOpaque:ve,drawBlend:Fe,state:a}}function c(R,D,q){let oe=Math.min(1,Math.max(0,(q-R)/(D-R)));return oe*oe*(3-2*oe)}let f=QM(),l=ZM(),u=l?e.texture({data:l,flipY:!1,min:"linear",mag:"linear"}):i,h=e({vert:JM,frag:eE,attributes:{position:f.pos,normal:f.nrm,uv:f.uv,kind:f.kind},elements:new Uint16Array(f.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:u},cull:{enable:!1}}),d=tE(),p=e({vert:oE,frag:nE,attributes:{position:d.pos,normal:d.nrm,color:d.col,mat:d.mat},elements:new Uint16Array(d.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),v=e({vert:rE,frag:aE,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function m(R){let D=R.headM,q=fe=>{let ve=Math.hypot(...fe)||1;return fe.map(Fe=>Fe/ve)},oe=q([D[4],D[5],D[6]]),I=q([D[8],D[9],D[10]]),ae=oe,J=I.map(fe=>-fe),ne=[J[1]*ae[2]-J[2]*ae[1],J[2]*ae[0]-J[0]*ae[2],J[0]*ae[1]-J[1]*ae[0]],$e=R.headPos,Ye=[0,1,2].map(fe=>$e[fe]+oe[fe]*.06+I[fe]*.185);return[ne[0],ne[1],ne[2],0,J[0],J[1],J[2],0,ae[0],ae[1],ae[2],0,Ye[0],Ye[1],Ye[2],1]}let g=-1,y="",b=null,M=null,k=!1;function z(R){if(!o)return;let D=(Zg.motion,r()),q=b?[b.x,b.z,b.heading,b.phase].map(I=>I.toFixed(4)).join():"";(M||k||q!==y||!b&&Math.abs(D-g)>(Zg.isPhone?1/30:0))&&(o.update(D,b),g=D,y=q);for(let I of o.parts)I.blend||(o.drawOpaque({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.el,tex:I.tex,alphaCut:I.alphaCut,skin:I.skin,kind:I.kind,alphaScale:I.alphaScale}),I.sockEl&&o.drawOpaque({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.sockEl,tex:i,alphaCut:0,skin:0,kind:8,alphaScale:1}));let oe=o.state;if(oe.headM&&!b&&!M&&!k){h({model:m(oe)});let I=oe.headPos,ae=Math.sin(D*1.3)*.02,J=[I[0],I[1]+.62+ae,I[2]+.05],ne=D*.6,$e=sa(J,Qo($i([0,1,0],ne),$i([0,0,1],.18)),[1.2,1.2,1.2]),Ye=.5+.5*Math.sin(D*2);p({model:$e,pulse:Ye}),a.glowPos=J,a.glow=.06+.03*Ye,v({center:[J[0],J[1]-.12,J[2]],size:.1,pulse:Ye})}for(let I of o.parts)I.blend&&o.drawBlend({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.el,tex:I.tex,alphaCut:I.alphaCut,skin:I.skin,kind:I.kind,alphaScale:I.alphaScale})}return z.state=a,z.place=L0,z.setWalk=R=>{b=R||null,b&&(a.glow=0)},z.setSeat=R=>{M=R||null,a.glow=M?0:a.glow,g=-1},z.setPiano=R=>{R=!!R,R!==k&&(k=R,k&&(a.glow=0),g=-1)},z};z1.exports.PLACE=L0});var N1=de((jS,lx)=>{"use strict";lx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var C1=de((BS,vx)=>{"use strict";var dx=ta(),fx=zc(),Di=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function R1(){return dx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var iE=`
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
`,hx=!1;function px(){if(hx)return;hx=!0;let e=document.createElement("style");e.textContent=iE,document.head.appendChild(e)}var sE='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function cE(e){return!e||!e.visit||!R1()?"":(px(),`<button type="button" class="visit-btn" data-visit="${Di(e.slug||"")}" aria-label="Visit what remained: watch ${Di(e.title)} come to life">${sE}<span>Visit what remained</span></button>`)}function lE(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var fl=null;function fE(e){if(fl||!e||!e.visit)return;px();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(dx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${Di(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Di(e.title)}, ${Di(fx(e))}" src="${Di(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Di(e.title)}</span>
			<span class="visit-meta">${Di(fx(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=lE(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),v()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),d()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let u=m=>m.stopImmediatePropagation();window.addEventListener("keyup",u,!0);let h=!1;function d(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function p(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>d()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&d()}),r.addEventListener("ended",d),r.addEventListener("error",d);function v(){if(fl){fl=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",u,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",v),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}d()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&v(),g.dataset.act==="again"&&(s.forEach(clearTimeout),p()))}),r.src=e.visit.video,fl={close:v},requestAnimationFrame(()=>{n.classList.add("on"),c(p,1300)})}var ux={};function hE(e){if(!e||!e.visit||ux[e.visit.video]||!R1())return;ux[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}vx.exports={available:R1,button:cE,open:fE,warm:hE,get active(){return!!fl}}});var xx=de((US,gx)=>{"use strict";var uE=ta(),Bs=[0,0],Ds=[0,0],fi=null,I1=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(Bs[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),Bs[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),I1=performance.now())},{passive:!0});let e=()=>{I1=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(fi||(fi=[t.gamma,t.beta]),fi[0]+=(t.gamma-fi[0])*.01,fi[1]+=(t.beta-fi[1])*.01,Bs[0]=Math.max(-1,Math.min(1,(t.gamma-fi[0])/14)),Bs[1]=Math.max(-1,Math.min(1,(t.beta-fi[1])/14)))},{passive:!0})}var mx=0,qs=null,sh=null,Ba=[0,0,0],P1=0,Hs=null,js=0,z0={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},dE={apply(e,t){let o=Math.min(.1,Math.max(0,t-mx));mx=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let f=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],l=!qs;if(qs&&o>0){let b=[n[0]-qs[0],n[1]-qs[1],n[2]-qs[2]],M=Math.hypot(b[0],b[1],b[2]);if(M>2.5)l=!0;else{let z=Math.min(1,o*5);for(let R=0;R<3;R++)Ba[R]+=(b[R]/o-Ba[R])*z}let k=Math.hypot(r[0]-sh[0],r[1]-sh[1],r[2]-sh[2]);js=M/o<.12&&k/o<.2?js+o:0}l&&(Ba[0]=Ba[1]=Ba[2]=0,js=0),qs=n.slice(),sh=r.slice(),P1=Math.hypot(Ba[0],Ba[1],Ba[2]);let u=Math.min(1,o*2.6);Ds[0]+=(Bs[0]-Ds[0])*u,Ds[1]+=(Bs[1]-Ds[1])*u;let h=Math.max(.03,Math.min(.32,i*.05)),d=(uE.isPhone&&!fi?1.5:1)*Math.min(1,js/2.5),p=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*d,v=Math.sin(t*.097+.6)*h*.16*d,m=Ds[0]*h+p,g=-Ds[1]*h*.45+v;for(let b=0;b<3;b++)z0.eye[b]=n[b]+s[b]*m+f[b]*g,z0.target[b]=r[b]+(s[b]*m+f[b]*g)*.12;n[1]>.05&&(z0.eye[1]=Math.max(.05,z0.eye[1]));let y=Ba[0]*s[0]+Ba[2]*s[2];return z0.fov=e.fov+Math.min(3.5,P1*.55),z0.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),z0},pull(e,t){(Hs===null||!(Math.abs(e.focus-Hs)<40))&&(Hs=e.focus);let o=1/60;Hs+=(e.focus-Hs)*Math.min(1,o*3.2),e.focus=Hs,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,js/3))},get speed(){return P1},get resting(){return js>2&&performance.now()-I1>2e3}};gx.exports=dE});var O1=de((WS,yx)=>{yx.exports=1e-6});var F1=de((VS,bx)=>{bx.exports=pE;function pE(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var _x=de((XS,wx)=>{wx.exports=vE;function vE(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var G1=de((YS,Mx)=>{Mx.exports=mE;function mE(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var $1=de((KS,Ex)=>{Ex.exports=gE;function gE(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var D1=de((QS,kx)=>{kx.exports=xE;function xE(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Lx=de((ZS,Tx)=>{Tx.exports=bE;var Sx=G1(),Ax=$1(),yE=D1();function bE(e,t){var o=Sx(e[0],e[1],e[2]),n=Sx(t[0],t[1],t[2]);Ax(o,o),Ax(n,n);var r=yE(o,n);return r>1?0:Math.acos(r)}});var Nx=de((JS,zx)=>{zx.exports=wE;function wE(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Cx=de((eA,Rx)=>{Rx.exports=_E;function _E(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var Ix=de((tA,Px)=>{Px.exports=ME;var q1=O1();function ME(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=q1*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=q1*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=q1*Math.max(1,Math.abs(r),Math.abs(s))}});var Fx=de((oA,Ox)=>{Ox.exports=EE;function EE(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var $x=de((nA,Gx)=>{Gx.exports=kE;function kE(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var H1=de((rA,Dx)=>{Dx.exports=SE;function SE(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var Hx=de((aA,qx)=>{qx.exports=H1()});var j1=de((iA,jx)=>{jx.exports=AE;function AE(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var Ux=de((sA,Bx)=>{Bx.exports=j1()});var B1=de((cA,Wx)=>{Wx.exports=TE;function TE(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var Xx=de((lA,Vx)=>{Vx.exports=B1()});var Kx=de((fA,Yx)=>{Yx.exports=LE;function LE(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var Zx=de((hA,Qx)=>{Qx.exports=zE;function zE(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var e3=de((uA,Jx)=>{Jx.exports=NE;function NE(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var o3=de((dA,t3)=>{t3.exports=RE;function RE(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var r3=de((pA,n3)=>{n3.exports=CE;function CE(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var i3=de((vA,a3)=>{a3.exports=PE;function PE(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var c3=de((mA,s3)=>{s3.exports=IE;function IE(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var U1=de((gA,l3)=>{l3.exports=OE;function OE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var h3=de((xA,f3)=>{f3.exports=U1()});var W1=de((yA,u3)=>{u3.exports=FE;function FE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var p3=de((bA,d3)=>{d3.exports=W1()});var V1=de((wA,v3)=>{v3.exports=GE;function GE(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var g3=de((_A,m3)=>{m3.exports=V1()});var X1=de((MA,x3)=>{x3.exports=$E;function $E(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var b3=de((EA,y3)=>{y3.exports=X1()});var _3=de((kA,w3)=>{w3.exports=DE;function DE(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var E3=de((SA,M3)=>{M3.exports=qE;function qE(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var S3=de((AA,k3)=>{k3.exports=HE;function HE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var T3=de((TA,A3)=>{A3.exports=jE;function jE(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var z3=de((LA,L3)=>{L3.exports=BE;function BE(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var R3=de((zA,N3)=>{N3.exports=UE;function UE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var P3=de((NA,C3)=>{C3.exports=WE;function WE(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var O3=de((RA,I3)=>{I3.exports=VE;function VE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],f=o[3],l=f*n+s*a-c*r,u=f*r+c*n-i*a,h=f*a+i*r-s*n,d=-i*n-s*r-c*a;return e[0]=l*f+d*-i+u*-c-h*-s,e[1]=u*f+d*-s+h*-i-l*-c,e[2]=h*f+d*-c+l*-s-u*-i,e}});var G3=de((CA,F3)=>{F3.exports=XE;function XE(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=r+i*f-s*c,e[2]=a+i*c+s*f,e}});var D3=de((PA,$3)=>{$3.exports=YE;function YE(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var H3=de((IA,q3)=>{q3.exports=KE;function KE(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var B3=de((OA,j3)=>{j3.exports=QE;var qi=F1()();function QE(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)qi[0]=e[i],qi[1]=e[i+1],qi[2]=e[i+2],r(qi,qi,a),e[i]=qi[0],e[i+1]=qi[1],e[i+2]=qi[2];return e}});var W3=de((FA,U3)=>{U3.exports={EPSILON:O1(),create:F1(),clone:_x(),angle:Lx(),fromValues:G1(),copy:Nx(),set:Cx(),equals:Ix(),exactEquals:Fx(),add:$x(),subtract:H1(),sub:Hx(),multiply:j1(),mul:Ux(),divide:B1(),div:Xx(),min:Kx(),max:Zx(),floor:e3(),ceil:o3(),round:r3(),scale:i3(),scaleAndAdd:c3(),distance:U1(),dist:h3(),squaredDistance:W1(),sqrDist:p3(),length:V1(),len:g3(),squaredLength:X1(),sqrLen:b3(),negate:_3(),inverse:E3(),normalize:$1(),dot:D1(),cross:S3(),lerp:T3(),random:z3(),transformMat4:R3(),transformMat3:P3(),transformQuat:O3(),rotateX:G3(),rotateY:D3(),rotateZ:H3(),forEach:B3()}});var Y3=de((GA,X3)=>{"use strict";function V3(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}X3.exports=function(t){let o=t.ownerDocument||document,n=V3(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let u=l.call(t);u&&u.catch&&u.catch(()=>{})}catch(u){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=V3(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var ey=de((qA,J3)=>{"use strict";var N0=Ls(),R0=W3(),ZE=Y3(),$A=Math.PI/4,DA=Math.PI/6,K3=2,JE=1,e8=2.4,t8=2.4,o8=1e3,n8=5,r8=7,Y1=tr().C,hl=[[7,1.6],[7,Y1.zc],[Y1.x1-2.95,Y1.zc]],Hi=hl.slice(1).map((e,t)=>{let o=hl[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),K1=Hi.reduce((e,t)=>e+t.len,0);function Q3(e){let t=Math.max(0,Math.min(K1,e));for(let n of Hi){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=hl[hl.length-1];return[o[0],o[1]]}function a8(e){let t=0;for(let n=0;n<Hi.length;n++){let r=Hi[n],a=t+r.len;if(e<a-1e-4||n===Hi.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?Hi[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=Hi[Hi.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var i8=Math.PI/4,s8=7,c8=140,l8=70,Z3=(e,t,o)=>(1-e)*t+e*o,f8=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;J3.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[r8,K3,hl[0][1]],c=0,f=1,l=0,u=[.707,0,.707],h=[0,1,0],d=[0,0,0],p=.5,v=N0.identity([]),m=N0.identity([]),g=!1,y=[0,0,0],b=[0,0,0],M=1,k=!1;let z=Qe=>{n[1]+=Qe*i8},R=(Qe,vt,Ct)=>{if(Qe=Math.max(Math.min(Qe,100),-100),vt=Math.max(Math.min(vt,100),-100),n[0]=0,k){a=0;return}for(a+=Qe;a>=Ct;)z(1),a-=Ct;for(;a<=-Ct;)z(-1),a+=Ct};ZE(document.body).on("attain",Qe=>{Qe.on("data",vt=>{R(vt.dx,vt.dy,c8)})});let q=null,oe=null,I=0,ae={x:0,y:0},J=58,ne=document.createElement("div");ne.id="museum-mobile-controls",ne.innerHTML=`

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
	`,document.body.appendChild(ne);let $e=ne.querySelector("#museum-joystick"),Ye=ne.querySelector("#museum-joystick-knob"),fe=()=>{Ye.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},ve=Qe=>{let vt=Qe.clientX-ae.x,Ct=Qe.clientY-ae.y,Et=Math.hypot(vt,Ct);if(Et>J&&(vt=vt/Et*J,Ct=Ct/Et*J),Ye.style.transform=`translate(
				calc(-50% + ${vt}px),
				calc(-50% + ${Ct}px)
			)`,Et<10){i[0]=0,i[2]=0;return}let ht=vt/J,mt=Ct/J;i[0]=0,i[2]=Math.abs(mt)>.15?mt:0},Fe=(Qe,vt)=>{for(let Ct=0;Ct<Qe.length;Ct++)if(Qe[Ct].identifier===vt)return Qe[Ct];return null},ft=Qe=>!!(Qe&&Qe.closest&&Qe.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Gt=Qe=>{if(!ft(Qe.target)&&(Qe.cancelable&&Qe.preventDefault(),!k))for(let vt=0;vt<Qe.changedTouches.length;vt++){let Ct=Qe.changedTouches[vt];if(q===null&&Ct.clientX<window.innerWidth*.48){q=Ct.identifier;let Et=$e.getBoundingClientRect();ae.x=Et.left+Et.width/2,ae.y=Et.top+Et.height/2,ve(Ct)}else oe===null&&Ct.clientX>=window.innerWidth*.48&&(oe=Ct.identifier,I=Ct.clientX,a=0)}},zt=Qe=>{if(ft(Qe.target)||(Qe.cancelable&&Qe.preventDefault(),k))return;let vt=q===null?null:Fe(Qe.touches,q);vt&&ve(vt);let Ct=oe===null?null:Fe(Qe.touches,oe);if(Ct){let Et=Ct.clientX-I;I=Ct.clientX,R(Et,0,l8)}},po=Qe=>{if(!ft(Qe.target)){Qe.cancelable&&Qe.preventDefault();for(let vt=0;vt<Qe.changedTouches.length;vt++){let Ct=Qe.changedTouches[vt];Ct.identifier===q&&(q=null,fe()),Ct.identifier===oe&&(oe=null)}}};document.addEventListener("touchstart",Gt,{passive:!1}),document.addEventListener("touchmove",zt,{passive:!1}),document.addEventListener("touchend",po,{passive:!1}),document.addEventListener("touchcancel",po,{passive:!1});let gt=document.createElement("style");gt.textContent=`

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
	`,document.head.appendChild(gt);var Qt={};let Bo=Qe=>{if(Qe.defaultPrevented||Qe.ctrlKey||Qe.altKey||Qe.metaKey)return;let vt=Qe.type==="keydown";Qt[Qe.code]=vt,vt&&!Qe.repeat&&!k&&((Qe.code==="KeyA"||Qe.code==="ArrowLeft")&&z(-1),(Qe.code==="KeyD"||Qe.code==="ArrowRight")&&z(1)),g=!1;let Ct=Qt.KeyW||Qt.ArrowUp?1:0;i=[0,0,(Qt.KeyS||Qt.ArrowDown?1:0)-Ct],Qe.preventDefault()};window.addEventListener("keydown",Bo),window.addEventListener("keyup",Bo);var sr=0;return{pos:s,fmouse:r,forward:u,up:h,setPaused:Qe=>{k=!!Qe,k&&(i[0]=0,i[2]=0,fe())},place:(Qe,vt)=>{c=Math.max(0,Math.min(K1,Qe));let Ct=Q3(c);s[0]=Ct[0],s[2]=Ct[1],n[1]=vt,r[1]=vt,a=0,f=1},view:()=>v,proj:()=>(N0.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Qe})=>{let vt=Qe-sr;sr=Qe;let Ct=[0,0,0],Et=[];R0.set(u,Math.sin(r[1]),0,-Math.cos(r[1])),R0.set(h,0,1,0);let oo=g?t8:e8,ht=Math.sin(n[1]),mt=-Math.cos(n[1]),me=a8(c),Oe=ht*me.ahead[0]+mt*me.ahead[1],kt=ht*me.back[0]+mt*me.back[1],tt=f;Math.max(Oe,kt)>.3&&(tt=Oe>=kt?1:-1);let at=k?0:-i[2]*oo;l+=(at-l)*(1-Math.exp(-Math.min(vt,.1)*5.5)),at===0&&Math.abs(l)<.01&&(l=0);let vo=l*tt*Math.min(vt,.1);k&&(i[0]=0,i[2]=0,vo=0,l=0),vo!==0&&(f=Math.sign(vo)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(K1,c+vo));let _=Q3(c);R0.set(d,_[0]-s[0],0,_[1]-s[2]);let Vt=R0.len(d);Vt===0&&p!==.25&&(p=(Math.abs((p+.5)%1-.5)-.25)*.8+.25,(p+.01)%.25<.02&&(p=.25));let Ht=p;if(p+=Vt/(g?n8:o8),s[1]=K3,R0.add(s,s,d),M<1){M+=vt/JE,M=Math.min(M,1);let X=f8(M);R0.set(s,Z3(X,y[0],b[0]),s[1],Z3(X,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(vt,.1)*s8),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),N0.identity(v),N0.rotateX(v,v,0),N0.rotateY(v,v,r[1]),N0.translate(v,v,R0.scale(Ct,s,-1))}}}});var oy=de((HA,ty)=>{"use strict";var{skylightGLSL:h8,Z_START:u8,Z_END:d8,GLASS_Y:p8}=gs(),{oculusGLSL:v8,A:C0}=ra(),{windowLightGLSL:m8,C:ch}=tr(),{doorLightGLSL:g8}=wi(),lh=or(),fh=Of(),ca=e=>e.toFixed(4),Q1=.1,Z1=700,Us={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function x8(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,M=o*f-a*i,k=n*c-r*s,z=n*f-a*s,R=r*f-a*c,D=l*v-u*p,q=l*m-h*p,oe=l*g-d*p,I=u*m-h*v,ae=u*g-d*v,J=h*g-d*m,ne=y*J-b*ae+M*I+k*oe-z*q+R*D;return ne?(ne=1/ne,e[0]=(s*J-c*ae+f*I)*ne,e[1]=(r*ae-n*J-a*I)*ne,e[2]=(v*R-m*z+g*k)*ne,e[3]=(h*z-u*R-d*k)*ne,e[4]=(c*oe-i*J-f*q)*ne,e[5]=(o*J-r*oe+a*q)*ne,e[6]=(m*M-p*R-g*b)*ne,e[7]=(l*R-h*M+d*b)*ne,e[8]=(i*ae-s*oe+f*D)*ne,e[9]=(n*oe-o*ae-a*D)*ne,e[10]=(p*z-v*M+g*y)*ne,e[11]=(u*M-l*z-d*y)*ne,e[12]=(s*q-i*I-c*D)*ne,e[13]=(o*I-n*q+r*D)*ne,e[14]=(v*b-p*k-m*y)*ne,e[15]=(l*k-u*b+h*y)*ne,e):null}function y8(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var b8=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;ty.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>t.post>=2?2:4,i=fe=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},fe||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=e.framebuffer({color:c,depth:f||!0}),u=[s(),s()],h=[s(),s()],d=[s(),s()],p=[s(),s()],v=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},M=(fe,ve,Fe)=>e(Object.assign({vert:b8,frag:fe,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:ve,framebuffer:e.prop("out")},Fe||{})),k=[2.6,0,u8-3.2,12.6,p8,d8+.4],z=[C0.x0-.2,0,C0.z0,C0.x1,C0.domeTop,C0.z1],R=[ch.x0,0,ch.z0,ch.x1,7.6,ch.z1],D=[.35,0,.35,13.65,7.6,9],q=fe=>`vec3(${ca(fe[0])}, ${ca(fe[1])}, ${ca(fe[2])}), vec3(${ca(fe[3])}, ${ca(fe[4])}, ${ca(fe[5])})`,oe=M(`
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

	${h8()}
	${v8()}
	${m8()}
	${g8()}

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
			vec2 t = hitBox(eye, rd, ${q(k)});
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
			vec2 t = hitBox(eye, rd, ${q(z)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${ca(C0.dome.base)} && p.x > ${ca(C0.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${q(R)});
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
			vec2 t = hitBox(eye, rd, ${q(D)});
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
	}`,{depthTex:()=>f,invVP:()=>v,eye:()=>g,time:e.context("time"),night:()=>lh.night,strength:()=>I}),I=[0,0,0,0];function ae(){let fe=Us.shafts*y.shafts,ve=lh.night;return I[0]=fh.box(k)?.06*fe*(1+.9*ve):0,I[1]=fh.box(z,!1,"court")?.1*fe*(1+.9*ve):0,I[2]=fh.box(R)?.07*fe*(1+.4*ve):0,I[3]=fh.box(D)?.04*fe*(1-.75*ve):0,I[0]+I[1]+I[2]+I[3]>5e-4}let J=M(`
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
	}`,{src:e.prop("src"),dir:(fe,ve)=>[ve.dir[0]/ve.size[0],ve.dir[1]/ve.size[1]]}),ne=M(`
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
	}`,{src:e.prop("src"),texel:(fe,ve)=>[.5/ve.size[0],.5/ve.size[1]],threshold:e.prop("threshold")}),$e=M(`
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
		return 2.0 * ${ca(Q1)} * ${ca(Z1)} / (${ca(Z1+Q1)} - z * ${ca(Z1-Q1)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>u[0],bloomA:()=>h[0],bloomB:()=>d[0],shafts:()=>p[0],res:()=>[l.width,l.height],time:e.context("time"),exposure:()=>Us.exposure*y.exposure,vignette:()=>Math.min(1,Us.vignette+y.vignette+.22*lh.night),night:()=>lh.night,grain:()=>Us.grain,bloomK:()=>Us.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>t.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),Ye=e({framebuffer:()=>l});return{shot:y,look:Us,hasDepth:n,capture(fe,ve,Fe){let ft=Math.max(.4,Math.min(1,t.scale||1)),Gt=Math.max(2,Math.round(fe.drawingBufferWidth*ft/2)*2),zt=Math.max(2,Math.round(fe.drawingBufferHeight*ft/2)*2);(l.width!==Gt||l.height!==zt)&&l.resize(Gt,zt);let po=Math.max(1,Math.ceil(Gt/2)),gt=Math.max(1,Math.ceil(zt/2));u.forEach(Qt=>Qt.resize(po,gt)),h.forEach(Qt=>Qt.resize(Math.max(1,Math.ceil(Gt/4)),Math.max(1,Math.ceil(zt/4)))),d.forEach(Qt=>Qt.resize(Math.max(1,Math.ceil(Gt/8)),Math.max(1,Math.ceil(zt/8)))),p.forEach(Qt=>Qt.resize(Math.max(1,Math.ceil(Gt/a())),Math.max(1,Math.ceil(zt/a())))),y8(m,ve.proj,ve.view),x8(v,m),g[0]=ve.eye[0],g[1]=ve.eye[1],g[2]=ve.eye[2],Ye(()=>{e.clear({color:[0,0,0,1],depth:1}),Fe()})},present(){let fe=ve=>[ve.width,ve.height];n&&t.post>=1&&ae()?(oe({out:p[0]}),J({out:p[1],src:p[0],dir:[1,0],size:fe(p[0])}),J({out:p[0],src:p[1],dir:[0,1],size:fe(p[0])})):e.clear({color:[0,0,0,1],framebuffer:p[0]}),ne({out:u[0],src:c,size:[l.width,l.height],threshold:0}),J({out:u[1],src:u[0],dir:[1,0],size:fe(u[0])}),J({out:u[0],src:u[1],dir:[0,1],size:fe(u[0])}),ne({out:h[0],src:u[0],size:fe(u[0]),threshold:.42}),J({out:h[1],src:h[0],dir:[1,0],size:fe(h[0])}),J({out:h[0],src:h[1],dir:[0,1],size:fe(h[0])}),ne({out:d[0],src:h[0],size:fe(h[0]),threshold:0}),J({out:d[1],src:d[0],dir:[1.5,0],size:fe(d[0])}),J({out:d[0],src:d[1],dir:[0,1.5],size:fe(d[0])}),$e({out:null})}}}});var sy=de((jA,iy)=>{"use strict";var ny=or().GLSL,w8=f0(),J1=wi(),{C:_8,FAR_DOOR:M8}=tr(),E8=100*Math.PI/180,ry=e=>[M8.x-e[2],e[1],_8.zc-7+e[0]],ay=e=>[-e[2],e[1],e[0]];function k8(e){let t=[],o=[],n=[],r=[],a=w8.createBuilder(t,o,n,r);J1.addFrames(a,e);let i=J1.glassPanes(e),s=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:s(t),normal:s(o),elements:n,glass:i}}iy.exports=e=>{let t=J1.DOOR,o=["left","right"].map(l=>{let u=k8(l),h=u.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:u.position.map(d=>d.slice()),srcN:u.normal.map(d=>d.slice()),srcG:u.glass.map(d=>d.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(u.elements),type:"uint32"}),glassCount:u.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(u.glass.length*3),outGN:new Float32Array(u.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let u of o){let h=u.sign*l,d=Math.cos(h),p=Math.sin(h),v=y=>{let b=y[0]-u.hinge,M=y[2];return[u.hinge+b*d+M*p,y[1],-b*p+M*d]},m=y=>[y[0]*d+y[2]*p,y[1],-y[0]*p+y[2]*d];u.src.forEach((y,b)=>{let M=ry(v(y));u.outP.set(M,b*3),u.outN.set(ay(m(u.srcN[b])),b*3)});let g=ay(m([0,0,1]));u.srcG.forEach((y,b)=>{u.outG.set(ry(v(y)),b*3),u.outGN.set(g,b*3)}),u.pos.subdata(u.outP),u.nrm.subdata(u.outN),u.gpos.subdata(u.outG),u.gnrm.subdata(u.outGN)}}}r(0);let a=`
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
		${ny}
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
		${ny}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*E8);for(let l of o)i({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var ly=de((BA,cy)=>{"use strict";var S8=or().GLSL,{skylightGLSL:A8}=gs(),{oculusGLSL:T8}=ra(),{windowLightGLSL:L8}=tr(),Aa=.22;function z8(){let e=[],t=[],o=[],n=[],i=(l,u)=>{let h=Aa*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(u>0?1.06:.94),d=l*Aa-Aa*.12,p=u*h,v=Math.abs(u)*h*.42-.14*l*l*Aa;v+=Math.sin(l*17+(u>0?0:2.1))*.012*Aa*u*u;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=v*g-p*y,M=v*y+p*g;return[d,b,M+.05*Aa*l*l]},s=(l,u)=>{let d=i(Math.min(1,l+.01),u),p=i(Math.max(0,l-.01),u),v=i(l,Math.min(1,u+.01)),m=i(l,Math.max(-1,u-.01)),g=[d[0]-p[0],d[1]-p[1],d[2]-p[2]],y=[v[0]-m[0],v[1]-m[1],v[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],M=Math.hypot(b[0],b[1],b[2])||1,k=b[1]<0?-1:1;return[b[0]/M*k,b[1]/M*k,b[2]/M*k]};for(let l=0;l<=18;l++){let u=l/18;for(let h=0;h<=5*2;h++){let d=h/5-1;e.push(i(u,d)),t.push(s(Math.min(.97,Math.max(.03,u)),d)),o.push([u,d])}}let c=5*2+1;for(let l=0;l<18;l++)for(let u=0;u<c-1;u++){let h=l*c+u,d=h+1,p=h+c,v=p+1;n.push([h,p,d],[d,p,v])}let f=e.length;return e.push([-Aa*.12,0,-.003],[-Aa*.12,0,.003],[-Aa*.24,-.01,.0015],[-Aa*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:e,nrm:t,uv:o,idx:n}}cy.exports=e=>{let t=z8(),o=e({vert:`
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
		${S8}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${A8()}
		${T8()}
		${L8()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=or(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Aa*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var uy=de((UA,hy)=>{"use strict";var{skylightGLSL:N8,Z_START:fy,Z_END:R8}=gs(),{oculusGLSL:C8,A:Ws}=ra(),{windowLightGLSL:P8,C:P0}=tr();hy.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=P0.x0+.6,f=P0.x1-.3,l=[];for(let p=0;p<o;p++)l.push([2.5+s()*10.5,.3+s()*8,fy-3.5+s()*(R8-fy+4.5),s()]);for(let p=0;p<n;p++)l.push([Ws.x0+.3+s()*(Ws.x1-Ws.x0-.6),.3+s()*7.5,Ws.z0+.3+s()*(Ws.z1-Ws.z0-.6),s()]);for(let p=0;p<r;p++)l.push([c+s()*(f-c),.2+s()*5.6,P0.z0+.25+s()*(P0.z1-P0.z0-.5),s()]);let u=p=>p.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],d=e({vert:`
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

		${N8()}
		${C8()}
		${P8()}

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
				p.x = ${u(c)} + mod(p.x - ${u(c)} - gust.x * (0.55 + 0.9 * seed.w), ${u(f-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${u(P0.z0+.1)}, ${u(P0.z1-.1)});
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
			float size = sharp + blur * ${u(a)} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:p=>p.viewportHeight*.006,focus:(p,v)=>v&&v.focus||6,aperture:(p,v)=>v&&v.aperture||0,wake0:(p,v)=>(v&&v.wake||h)[0],wake1:(p,v)=>(v&&v.wake||h)[1],wake2:(p,v)=>(v&&v.wake||h)[2],wake3:(p,v)=>(v&&v.wake||h)[3],wakeDir:(p,v)=>v&&v.wakeDir||[0,0,1],gust:(p,v)=>v&&v.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return p=>d(p||{})}});var xy=de((WA,gy)=>{"use strict";var{C:my}=tr(),dy=or(),py=15.3,I8=37.1,vy=my.z1+.9,O8=my.z1+.7+16-.6;gy.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([py+r()*(I8-py),l,vy+r()*(O8-vy),r()])}let i=[],s=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>dy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){dy.night>.01&&c()}}});var dh=de((VA,Br)=>{"use strict";var yy=or(),Ua=Ai(),F8=Ls(),Bi=Math.PI,et=e=>(+e).toFixed(4),Ta=e=>`vec3(${et(e[0])}, ${et(e[1])}, ${et(e[2])})`,Go={x0:-2.05,z0:41.45,z1:47.55,top:5.1},uo=-.55,In=-2,Zo=42.25,Sn=43.65,ha=45.35,Mr=46.75,Hn=2.75,Hr=.12,G8=(uo+In)/2,So={x:-1.3,y:1.42,w:.42,h:.52,z:Sn,cell:.026},Lt={x0:-1.85,x1:-.75,top:.98,z0:Sn-.3,z1:Sn-.02},la={x0:-1.44,x1:-1.16,y0:Lt.top-.002,y1:Lt.top+.018},jr={cx:-1.3,cz:Sn-.165,w:.2,d:.255,y:Lt.top+.0012},Yn={x:-1.03,z:Sn-.14,r:.042,h:.075},Do={x:-.86,z:Sn-.12,h:.085,r:.019};Do.flame=[Do.x,Lt.top+.012+Do.h+.028,Do.z];var uh={a:[Yn.x-.004,Lt.top+.03,Yn.z+.004],b:[Yn.x-.13,Lt.top+.34,Yn.z-.12]},Jo=[-1.5,2.42,44.66],kn=[-1.78,1.95,Zo+.09],fa={x:-1.32,z:44.08,y:.64,heading:.32},_y={window:{eye:[-1.3,1.33,42.8],target:[So.x,1.37,Sn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[jr.cx,Lt.top,jr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},ur={z0:(Zo+Sn)/2+.03,z1:(Zo+Sn)/2+.56,y0:.98,y1:1.78,x:uo+.03,cell:.047};_y.peek={eye:[-1.2,1.42,42.95],target:[Ua.PLAY.stoolX-Ua.OFF[0],.85,Ua.PLAY.keyFront+.2],fov:30};var ji={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function by(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${et(So.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Ta(Jo)};
		if (d.z > -0.001) return 0.0;
		float t = (${et(So.z)} - ${et(Jo[2])}) / d.z;
		vec2 g = (${Ta(Jo)} + d * t).xy - vec2(${et(So.x)}, ${et(So.y)});
		float inWin = (1.0 - smoothstep(${et(So.w/2-.01)}, ${et(So.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${et(So.h/2-.01)}, ${et(So.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${et(So.z)}) / abs(${et(So.z)} - ${et(Jo[2])}) / ${et(So.cell)};
		vec2 qc = fract(g / ${et(So.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Ta(Do.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${et(Yn.x)}, ${et(Yn.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${et(Yn.x)}, ${et(Yn.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${et(Yn.r*.7)}, ${et(Yn.r*1.6)}, r)) * (1.0 - smoothstep(${et(Lt.top+Yn.h*.8)}, ${et(Lt.top+Yn.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Ta(uh.a)}, qb = ${Ta(uh.b)};
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
		bool inB1 = p.z < ${et(Sn)} && p.z > ${et(Zo-.04)} && p.x < ${et(uo+.02)};
		bool inPriest = p.z >= ${et(Sn)} && p.z < ${et(ha)} && p.x < ${et(uo)};
		bool inB2 = p.z >= ${et(ha)} && p.z < ${et(Mr+.04)} && p.x < ${et(uo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${et(In)}, ${et(uo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${et(Go.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Ta(Ua.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Ta(Jo)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Ta(kn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Ta(Do.flame)} - p;
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
	}`}var Pn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function My(){let e=[],t=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],i=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],s=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(f,l,u,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),o.push(u),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,u,h,d,p)=>{let v=s(i(a(l,f),a(h,f)));p=p||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,v,d,p[0]),g=c.v(l,v,d,p[1]),y=c.v(u,v,d,p[2]),b=c.v(h,v,d,p[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,u,h,d,p,v)=>{let m=(g,y,b,M,k,z,R,D)=>c.quad(g,y,b,M,v,[[k,R],[z,R],[z,D],[k,D]]);m([h,l,u],[h,l,p],[h,d,p],[h,d,u],u,p,l,d),m([f,l,p],[f,l,u],[f,d,u],[f,d,p],p,u,l,d),m([f,d,u],[h,d,u],[h,d,p],[f,d,p],f,h,u,p),m([f,l,p],[h,l,p],[h,l,u],[f,l,u],f,h,p,u),m([f,l,p],[h,l,p],[h,d,p],[f,d,p],f,h,l,d),m([h,l,u],[f,l,u],[f,d,u],[h,d,u],h,f,l,d)},c.tube=(f,l,u,h)=>{h=h||6;let d=e.length/3;for(let p=0;p<f.length;p++){let v=f[Math.max(0,p-1)],m=f[Math.min(f.length-1,p+1)],g=s(a(m,v)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),M=i(b,g),k=typeof l=="function"?l(p/(f.length-1)):l;for(let z=0;z<=h;z++){let R=z/h*Bi*2,D=Math.cos(R),q=Math.sin(R),oe=[b[0]*D+M[0]*q,b[1]*D+M[1]*q,b[2]*D+M[2]*q];c.v([f[p][0]+oe[0]*k,f[p][1]+oe[1]*k,f[p][2]+oe[2]*k],oe,u,[p/(f.length-1),z/h])}}for(let p=0;p<f.length-1;p++)for(let v=0;v<h;v++){let m=d+p*(h+1)+v,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,u,h,d)=>{d=d||20;let p=e.length/3;for(let v=0;v<u.length;v++){let[m,g]=u[v],y=u[Math.max(0,v-1)],b=u[Math.min(u.length-1,v+1)],M=b[0]-y[0],k=b[1]-y[1];for(let z=0;z<=d;z++){let R=z/d*Bi*2,D=Math.cos(R),q=Math.sin(R),oe=s([k*D,-M,k*q]);c.v([f+D*m,g,l+q*m],oe,h,[z/d,v/(u.length-1)])}}for(let v=0;v<u.length-1;v++)for(let m=0;m<d;m++){let g=p+v*(d+1)+m,y=g+d+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,u,h,d,p)=>{let v=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=v[m],y=v[(m+1)%4],b=[f+g[0],u,l+g[1]],M=[f+y[0],u,l+y[1]],k=[f,d,l],z=s(i(a(k,b),a(M,b))),R=c.v(b,z,p,[0,0]),D=c.v(M,z,p,[1,0]),q=c.v(k,z,p,[.5,1]);r.push(R,q,D)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,u,h]=[r[f],r[f+1],r[f+2]],d=m=>[e[m*3],e[m*3+1],e[m*3+2]],p=i(a(d(u),d(l)),a(d(h),d(l))),v=[0,1,2].map(m=>t[l*3+m]+t[u*3+m]+t[h*3+m]);p[0]*v[0]+p[1]*v[1]+p[2]*v[2]<0&&(r[f+1]=h,r[f+2]=u)}return c},c}function hh(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var Yo={ys:1.78,a:.56,r:.78};Yo.apex=Yo.ys+Math.sqrt(Yo.r*Yo.r-(Yo.r-Yo.a)*(Yo.r-Yo.a));function $8(){let e=My(),t=Pn.WOOD,o=Pn.CARVED,n=Pn.DARKWOOD,r=.06;e.box(In,0,Zo,uo+.08,Hr,Mr,n),e.box(In,Hn-.06,Zo-.04,uo+.1,Hn,Mr+.04,t),e.box(uo,Hn-.2,Zo-.06,uo+.12,Hn-.06,Mr+.06,t),e.box(uo+.02,Hn,Zo-.08,uo+.14,Hn+.07,Mr+.08,n),e.box(In,Hr,Zo,In+.04,Hn-.06,Mr,t);for(let[l,u,h]of[[Zo-r,Zo,-1],[Mr,Mr+r,1]]){e.box(In,0,l,uo+.08,Hn,u,t);let d=h<0?l-.018:u;e.box(In+.18,.45,Math.min(d,d+.018),uo-.12,2.35,Math.max(d,d+.018),n),e.box(In+.26,.55,Math.min(d,d+.03*h),uo-.2,2.25,Math.max(d,d+.03*h),t)}{let l=Sn-.02,u=Sn+.02,h=So.x-So.w/2,d=So.x+So.w/2,p=So.y-So.h/2,v=So.y+So.h/2;e.box(In,Hr,l,uo,la.y0,u,t),e.box(In,la.y0,l,la.x0,la.y1,u,t),e.box(la.x1,la.y0,l,uo,la.y1,u,t),e.box(In,la.y1,l,uo,p,u,t),e.box(In,p,l,h,v,u,t),e.box(d,p,l,uo,v,u,t),e.box(In,v,l,uo,Hn-.06,u,t);let m=.05,g=l-.025;e.box(h-m,p-m,g,d+m,p,l,n),e.box(h-m,v,g,d+m,v+m,l,n),e.box(h-m,p,g,h,v,l,n),e.box(d,p,g,d+m,v,l,n),e.box(h-m-.02,v+m,g-.015,d+m+.02,v+m+.03,l,t),e.box(la.x0-.01,la.y1,l-.006,la.x1+.01,la.y1+.008,l,Pn.BRASS)}{let l=ur,u=uo+.008,h=uo+.052;e.box(u,l.y0,l.z0-.035,h,l.y1,l.z0,n),e.box(u,l.y0,l.z0,h,l.y0+.04,l.z1,n),e.box(u,l.y1-.04,l.z0,h,l.y1,l.z1,n),e.box(u+.008,Hr,l.z0-.035,h-.008,l.y0,l.z1,t),e.box(h-.008,Hr+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),e.box(u-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,Pn.BRASS)}e.box(In,Hr,ha-.02,uo,Hn-.06,ha+.02,t),e.box(Lt.x0,Lt.top-.035,Lt.z0,Lt.x1,Lt.top,Lt.z1,t),e.tube([[Lt.x0,Lt.top-.018,Lt.z0],[Lt.x1,Lt.top-.018,Lt.z0]],.02,t,8);for(let l of[Lt.x0+.1,Lt.x1-.1]){let u=[];for(let h=0;h<=8;h++){let d=h/8;u.push([l,Lt.top-.04-.22*d,Lt.z1-.02-.22*Math.cos(d*Bi/2)])}e.tube(u,.018,n,6)}e.box(In+.06,.12,Zo,uo-.1,.44,Zo+.42,n),e.box(In+.08,.44,Zo+.01,uo-.12,.52,Zo+.41,Pn.CUSHION),e.box(In+.06,.12,Mr-.42,uo-.1,.44,Mr,n),e.box(kn[0]-.05,kn[1]-.16,Zo,kn[0]+.05,kn[1]-.02,Zo+.012,Pn.BRASS),e.tube([[kn[0],kn[1]-.09,Zo+.012],[kn[0],kn[1]-.09,kn[2]-.01],[kn[0],kn[1]-.05,kn[2]]],.006,Pn.BRASS,6),e.lathe(kn[0],kn[2],[[0,kn[1]-.05],[.028,kn[1]-.035],[.034,kn[1]+.01],[.024,kn[1]+.06],[.026,kn[1]+.065]],Pn.LAMPGLASS,16),e.box(fa.x-.22,.12,fa.z-.24,fa.x+.22,fa.y-.05,fa.z+.16,n),e.box(fa.x-.24,fa.y-.05,fa.z-.26,fa.x+.24,fa.y,fa.z+.18,Pn.CUSHION),e.tube([[Jo[0],Hn-.06,Jo[2]],[Jo[0],Jo[1]+.07,Jo[2]]],.005,Pn.BRASS,5),e.lathe(Jo[0],Jo[2],[[0,Jo[1]+.09],[.03,Jo[1]+.08],[.02,Jo[1]+.06]],Pn.BRASS,12),e.lathe(Jo[0],Jo[2],[[0,Jo[1]-.06],[.035,Jo[1]-.04],[.045,Jo[1]],[.035,Jo[1]+.05],[.018,Jo[1]+.07]],Pn.LAMPGLASS,16);let a=uo,i=uo+r;function s(l,u,h){let d=(l+u)/2,p=40,v=[];for(let g=0;g<=p;g++)v.push(Hr+(Hn-.2-Hr)*g/p);let m=[];v.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(Yo.ys+(Yo.apex-Yo.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let M=h?hh(y,Yo.ys,Yo.a,Yo.r):0,k=h?hh(b,Yo.ys,Yo.a,Yo.r):0,z=(R,D)=>[R,D];e.quad([i,y,d-M],[i,y,l],[i,b,l],[i,b,d-k],t,[z(d-M,y),z(l,y),z(l,b),z(d-k,b)]),e.quad([i,y,u],[i,y,d+M],[i,b,d+k],[i,b,u],t,[z(u,y),z(d+M,y),z(d+k,b),z(u,b)]),(M>0||k>0)&&(e.quad([a,y,d-M],[i,y,d-M],[i,b,d-k],[a,b,d-k],n),e.quad([i,y,d+M],[a,y,d+M],[a,b,d+k],[i,b,d+k],n),e.quad([a,y,l],[a,y,d-M],[a,b,d-k],[a,b,l],t),e.quad([a,y,d+M],[a,y,u],[a,b,u],[a,b,d+k],t))}if(e.box(a,Hn-.2,l,i,Hn-.06,u,t),e.box(i,Hn-.42,l+.05,i+.012,Hn-.24,u-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,M=b<.5?Hr+(Yo.apex-Hr)*(b*2):Yo.apex-(Yo.apex-Hr)*((b-.5)*2),k=b<.5?-1:1;g.push([i+.01,Math.min(M,Yo.apex-.002),d+k*(hh(M,Yo.ys,Yo.a,Yo.r)+.03)])}e.tube(g,.022,n,6)}}s(Zo,Sn,!0),s(ha,Mr,!0);{let l=Sn,u=ha,h=(l+u)/2;e.box(a,Hr,l,i,Hn-.06,u,t);let d={ys:1.85,a:.55,r:.8},p=[];for(let v=0;v<=40;v++){let m=v/40,g=d.ys+Math.sqrt(d.r*d.r-(d.r-d.a)*(d.r-d.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;p.push([i+.012,Math.min(y,g-.002),h+b*hh(y,d.ys,d.a,d.r)])}p.push(p[0]),e.tube(p,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,u-.13],[i+.06,1.12,u-.13],[i+.06,1.12,u-.2]],.009,Pn.BRASS,6)}[Zo-.02,Sn,ha,Mr+.02].forEach((l,u)=>{let h=u===1||u===2,d=.075,p=Hn+(h?.62:.4);e.box(uo+.06,0,l-d,uo+.06+2*d,p,l+d,t),e.box(uo+.04,p-.04,l-d-.02,uo+.08+2*d,p,l+d+.02,n);let v=uo+.06+d,m=h?.62:.5;e.spire(v,l,p,d*.95,p+m,t);for(let g=1;g<=3;g++){let y=p+m*g/4.2,b=d*.95*(1-g/4.2)+.02;for(let[M,k]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[v+M*(b-.02),y-.02,l+k*(b-.02)],[v+M*(b+.015),y+.03,l+k*(b+.015)]],.008,n,4)}e.lathe(v,l,[[0,p+m-.02],[.03,p+m+.03],[.022,p+m+.07],[0,p+m+.1]],t,10)});let f=(l,u,h)=>{let d=(l+u)/2,p=uo+.075,v=Hn+.07,m=v+h,g=[1,0,0],y=e.v([p,v,l],g,o,[l,v]),b=e.v([p,v,u],g,o,[u,v]),M=e.v([p,m,d],g,o,[d,m]);e.idx.push(y,b,M);let k=e.v([p-.04,v,l],[-1,0,0],t),z=e.v([p-.04,v,u],[-1,0,0],t),R=e.v([p-.04,m,d],[-1,0,0],t);e.idx.push(k,R,z);let D=[],q=[];for(let J=0;J<=10;J++){let ne=J/10;D.push([p+.02,v+h*ne,l+(d-l)*ne]),q.push([p+.02,v+h*ne,u+(d-u)*ne])}e.tube(D,.022,n,6),e.tube(q,.022,n,6);for(let J=2;J<=8;J+=2)for(let ne of[D[J],q[J]])e.tube([ne,[ne[0]+.01,ne[1]+.06,ne[2]+(ne===D[J]?-.02:.02)]],.01,n,4);e.lathe(p,d,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([J,ne])=>[J,ne]),t,10);let oe=Math.min(.17,h*.32),I=v+h*.38,ae=[];for(let J=0;J<=24;J++){let ne=J/24*Bi*2;ae.push([p+.012,I+Math.sin(ne)*oe,d+Math.cos(ne)*oe])}e.tube(ae,.012,n,5)};f(Zo-.02,Sn,.52),f(Sn,ha,.82),f(ha,Mr+.02,.52),e.lathe(Yn.x,Yn.z,[[0,Lt.top],[.036,Lt.top+.001],[Yn.r,Lt.top+.012],[Yn.r*1.02,Lt.top+.035],[.036,Lt.top+.052],[.02,Lt.top+.062],[.016,Lt.top+.068]],Pn.INKGLASS,24),e.lathe(Yn.x,Yn.z,[[.016,Lt.top+.064],[.021,Lt.top+.066],[.022,Lt.top+.075],[.016,Lt.top+.076],[0,Lt.top+.072]],Pn.BRASS,20);{let l=uh.a,u=uh.b,h=26,d=y=>{let b=Math.sin(y*Bi)*.025;return[l[0]+(u[0]-l[0])*y+b*.6,l[1]+(u[1]-l[1])*y+b*.4,l[2]+(u[2]-l[2])*y+b]},p=[];for(let y=0;y<=h;y++)p.push(d(y/h));e.tube(p,y=>.0028*(1-.7*y)+6e-4,Pn.QUILL,5);let v=e.norm(e.sub(u,l)),m=e.norm(e.cross(v,[.2,1,.1])),g=e.cross(m,v);for(let y of[-1,1]){let b=e.pos.length/3;for(let M=0;M<=h;M++){let k=M/h,z=d(k),R=k<.28?0:(y>0?.03:.02)*Math.sin(Bi*Math.pow((k-.28)/.72,.75)),D=R*.25,q=[z[0]+m[0]*y*R-g[0]*D,z[1]+m[1]*y*R-g[1]*D,z[2]+m[2]*y*R-g[2]*D];e.v(z,g,Pn.QUILL,[k,0]),e.v(q,g,Pn.QUILL,[k,y])}for(let M=0;M<h;M++){let k=b+M*2;e.idx.push(k,k+2,k+1,k+1,k+2,k+3)}}}return e.orient()}function D8(e,t){let n=Go.top,r=Go.x0;e(r-.35,0,Go.z0-.35,r,n+.35,Go.z1+.35),e(r,0,Go.z0-.35,-.35,n,Go.z0),e(r,0,Go.z1,-.35,n,Go.z1+.35),e(r,n,Go.z0,-.35,n+.35,Go.z1),e(.35,0,Go.z0-.42,.35+.16,n,Go.z0),e(.35,0,Go.z1,.35+.16,n,Go.z1+.42),e(.35,n,Go.z0-.5,.35+.18,n+.42,Go.z1+.5),e(.35,n+.42,Go.z0-.6,.35+.26,n+.52,Go.z1+.6),e(.35,0,Go.z0-.5,.35+.22,.42,Go.z0),e(.35,0,Go.z1,.35+.22,.42,Go.z1+.5),e(-.35-.01,0,Go.z0,.35+.12,.02,Go.z1),t(r,Go.z0,-.35,Go.z1)}Br.exports=e=>{let t=Ei(),o=yy.GLSL,n=$8(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${Ua.roomGLSL()}
	${by()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(fe,ve,Fe,ft){let Gt=[],zt=[],po=[],gt=[],Qt=[],Qe=uo-.02,vt=Yo.apex+.08,Ct=Hr+.015;for(let Et=0;Et<=40;Et++){let oo=Et/40,ht=vt+(Ct-vt)*oo;for(let mt=0;mt<=90;mt++){let me=mt/90,Oe=Fe?.2+.13*oo*oo:ve-fe,kt=fe+me*Oe,tt=Fe?.05+.02*oo:.035+.01*Math.sin(me*7),at=me*ft*Bi*2+Math.sin(oo*2+me*5)*.6,vo=Qe-tt*(.5+.5*Math.sin(at))-(Fe?.02*oo:0),Vt=[1,0,-(-tt*.5*Math.cos(at)*ft*Bi*2/Oe)],Ht=Math.hypot(Vt[0],Vt[1],Vt[2]);Gt.push(vo,ht,kt),zt.push(Vt[0]/Ht,0,Vt[2]/Ht),po.push(2),gt.push(Math.sin(at),oo)}}for(let Et=0;Et<40;Et++)for(let oo=0;oo<90;oo++){let ht=Et*91+oo,mt=ht+90+1;Qt.push(ht,mt,ht+1,ht+1,mt,mt+1)}for(let Et=0;Et<Qt.length;Et+=3){let[oo,ht,mt]=[Qt[Et],Qt[Et+1],Qt[Et+2]],me=at=>[Gt[at*3],Gt[at*3+1],Gt[at*3+2]],Oe=[0,1,2].map(at=>me(ht)[at]-me(oo)[at]),kt=[0,1,2].map(at=>me(mt)[at]-me(oo)[at]);Oe[1]*kt[2]-Oe[2]*kt[1]<0&&(Qt[Et+1]=mt,Qt[Et+2]=ht)}return{pos:Gt,nrm:zt,kind:po,uv:gt,idx:Qt}}let c=s(Zo+.02,Zo+.4,!0,6),f=s(ha+.04,Mr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(fe=>fe+c.pos.length/3))},u=e({vert:`
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),h=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${et(So.x)} + corner.x * ${et(So.w/2)}, ${et(So.y)} + corner.y * ${et(So.h/2)}, ${et(So.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${et(So.x)}, ${et(So.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${et(So.z)} ? -1.0 : 1.0);
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
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${et(ur.x)}, ${et((ur.y0+ur.y1)/2)} + corner.y * ${et((ur.y1-ur.y0)/2-.04)}, ${et((ur.z0+ur.z1)/2)} + corner.x * ${et((ur.z1-ur.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${et((ur.z0+ur.z1)/2)}, ${et((ur.y0+ur.y1)/2)})) * ${et(So.cell/ur.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${et(ur.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),p=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${et(So.x)} + corner.x * 0.75, ${et(So.y)} + corner.y * 0.9, ${et(ha-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),v=14,m=[];for(let fe=0;fe<v;fe++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(ve=>m.push(ve[0],ve[1],(fe+.5)/v));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${et(G8)} + c.x * ${et((uo-In)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${et(Sn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${by().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Ta(Jo)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let fe=document.createElement("canvas");fe.width=512,fe.height=652;let ve=fe.getContext("2d");ve.fillStyle="#cdb38a",ve.fillRect(0,0,fe.width,fe.height);let Fe=7,ft=()=>(Fe=Fe*1664525+1013904223>>>0,Fe/4294967296);for(let zt=0;zt<2400;zt++){ve.fillStyle=`rgba(${ft()<.5?"90,62,30":"245,230,200"},${.03+ft()*.05})`;let po=ft()*fe.width,gt=ft()*fe.height;ve.fillRect(po,gt,1+ft()*14,1)}for(let zt=0;zt<26;zt++){let po=ft()*fe.width,gt=ft()*fe.height,Qt=20+ft()*90,Bo=ve.createRadialGradient(po,gt,0,po,gt,Qt);Bo.addColorStop(0,`rgba(120,80,35,${.04+ft()*.06})`),Bo.addColorStop(1,"rgba(120,80,35,0)"),ve.fillStyle=Bo,ve.fillRect(po-Qt,gt-Qt,Qt*2,Qt*2)}let Gt=ve.createRadialGradient(fe.width/2,fe.height/2,fe.width*.3,fe.width/2,fe.height/2,fe.height*.72);return Gt.addColorStop(0,"rgba(110,70,30,0)"),Gt.addColorStop(1,"rgba(110,70,30,0.38)"),ve.fillStyle=Gt,ve.fillRect(0,0,fe.width,fe.height),fe})(),b=y?e.texture({data:y,min:"linear",mag:"linear",flipY:!1}):e.texture(),M=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),k=[18,24],z=[],R=[];for(let fe=0;fe<=k[1];fe++)for(let ve=0;ve<=k[0];ve++)z.push(ve/k[0],fe/k[1]);for(let fe=0;fe<k[1];fe++)for(let ve=0;ve<k[0];ve++){let Fe=fe*(k[0]+1)+ve,ft=Fe+k[0]+1;R.push(Fe,Fe+1,ft,Fe+1,ft+1,ft)}let D=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${et(jr.cx+jr.w/2)} - s * ${et(jr.w)};
			float zNear = ${et(jr.cz-jr.d/2)};
			vec3 p = vec3(x, ${et(jr.y)}, zNear + t * ${et(jr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${et(jr.d)};
				float zf = zNear + 0.5 * ${et(jr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${et(jr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${et(Sn+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(z),size:2}},elements:R,uniforms:{fold:()=>ji.fold,slide:()=>ji.slide,paperTex:b,inkTex:M},cull:{enable:!1}}),q=My();q.lathe(Do.x,Do.z,[[0,Lt.top],[.048,Lt.top+.002],[.052,Lt.top+.012],[.046,Lt.top+.014],[.022,Lt.top+.012],[0,Lt.top+.012]],Pn.BRASS,24),q.lathe(Do.x,Do.z,[[0,Lt.top+.012],[Do.r,Lt.top+.012],[Do.r*1.02,Lt.top+.012+Do.h*.6],[Do.r,Lt.top+.012+Do.h],[Do.r*.75,Lt.top+.012+Do.h-.004],[0,Lt.top+.012+Do.h-.008]],9,20),q.tube([[Do.x,Lt.top+.012+Do.h-.008,Do.z],[Do.x+.001,Lt.top+.012+Do.h+.012,Do.z]],.0012,8,4),q.orient();let oe=e({vert:a,frag:`${r}
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
				float up = smoothstep(${et(Lt.top+Do.h*.4)}, ${et(Lt.top+.012+Do.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:q.pos,normal:q.nrm,kind:q.kind,uv:q.uv},elements:q.idx}),I=e({vert:`
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
			vec3 p = ${Ta(Do.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),ae=[0,0],J=e({uniforms:{view:e.prop("view")}}),ne=new Float32Array(16);function $e(fe){F8.translate(ne,fe.view,Ua.OFF),J({view:ne},()=>Ye(fe))}function Ye(fe){let ve=fe&&fe.reflected;if(i(),u(),h(),d(),ji.ink&&ji.inkDirty){let Fe=ji.ink;ae[0]!==Fe.width||ae[1]!==Fe.height?(M({data:Fe,min:"linear",mag:"linear",flipY:!1}),ae=[Fe.width,Fe.height]):M.subimage(Fe),ji.inkDirty=!1}ji.shown&&D(),yy.night>.01&&(oe(),ve||(I({halo:1}),I({halo:0}))),ve||(p(),g())}return $e};Br.exports.addBay=D8;Br.exports.BAY=Go;Br.exports.OFF=Ua.OFF;Br.exports.STATE=ji;var wy=e=>[e[0]+Ua.OFF[0],e[1]+Ua.OFF[1],e[2]+Ua.OFF[2]];Br.exports.SHOTS=Object.fromEntries(Object.entries(_y).map(([e,t])=>[e,Object.assign({},t,{eye:wy(t.eye),target:wy(t.target)})]));Br.exports.SEAT=fa;Br.exports.LAMP=Jo;Br.exports.SCONCE=kn;Br.exports.GRILLE=So;Br.exports.PAPER=jr;Br.exports.ZONE={FRONT:uo,BACK:In,ZA:Zo,ZB:Sn,ZC:ha,ZD:Mr}});var ed=de((XA,ky)=>{"use strict";function q8(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var Ey={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},H8=["th","ng","er"];function j8(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(Ey).forEach(v=>{r[v]=Ey[v]*o.pace});let a=[],i=0,s=0,c=0,f=[];function l(v,m){let g=q8(o.seed),y=o.xh,b={},M=ne=>{let $e=t[ne];if(!$e)return null;let Ye=Math.floor(g()*$e.length);return $e.length>1&&Ye===b[ne]&&(Ye=(Ye+1)%$e.length),b[ne]=Ye,$e[Ye]},k=ne=>{if(t[ne])return{g:M(ne),sc:1};let $e=ne.toLowerCase();return t[$e]?{g:M($e),sc:/[A-Z]/.test(ne)?1.32:1}:null},z=[],R=.15,D=0,q=0,oe=(g()-.5)*.02,I=m/y,ae=v.split(/\n\s*\n/);ae.forEach((ne,$e)=>{ne.replace(/\s+/g," ").trim().split(" ").forEach(fe=>{let ve=[];for(let zt=0;zt<fe.length;zt++){let po=fe.substr(zt,2).toLowerCase();if(H8.indexOf(po)>=0&&t[po]&&g()<.55&&fe[zt]===fe[zt].toLowerCase()){ve.push({ch:po,gl:{g:M(po),sc:1}}),zt++;continue}let gt=k(fe[zt]);gt&&gt.g&&ve.push({ch:fe[zt],gl:gt})}let Fe=ve.map(()=>.17+g()*.07),ft=ve.reduce((zt,po,gt)=>zt+po.gl.g.w*po.gl.sc+Fe[gt],0);D>0&&D+ft>I&&(D=0,q++,R+=r.line,oe=(g()-.5)*.02),ve.forEach((zt,po)=>{let gt=zt.gl.g,Qt=zt.gl.sc*(.95+g()*.1),Bo=(g()-.5)*.06,sr=(g()-.5)*.08+oe*D,Qe=D,vt=q*o.lineHeight+1.9+sr,Ct=Math.cos(Bo),Et=Math.sin(Bo),oo=mt=>[(Qe+(mt[0]*Ct-mt[1]*Et)*Qt)*y,(vt+(mt[0]*Et+mt[1]*Ct)*Qt)*y],ht=(mt,me)=>{let Oe=0;for(let tt=1;tt<mt.length;tt++)Oe+=Math.hypot(mt[tt][0]-mt[tt-1][0],mt[tt][1]-mt[tt-1][1]);let kt=Math.max(o.minDur||(me?.06:.07),Oe/(o.speed*y));z.push({pts:mt,L:Oe,start:R,dur:kt,dot:me}),R+=kt};if(gt.s.forEach((mt,me)=>{me>0&&(R+=r.stroke),ht(mt.map(oo),!1)}),gt.dot){let mt=gt.s[0][0];gt.s.forEach(Oe=>Oe.forEach(kt=>{kt[1]<mt[1]&&(mt=kt)}));let me=oo([mt[0]+.1,-1.36]);R+=r.stroke*1.4,ht([me,[me[0]+y*.05,me[1]+y*.03]],!0)}R+=r.letter*(.6+g()*.8),D+=gt.w*Qt+Fe[po]});let Gt=fe[fe.length-1];R+=/[.!?]/.test(Gt)?r.stop:/[,;:]/.test(Gt)?r.comma:r.word,D+=.55+g()*.2}),$e<ae.length-1&&(D=0,q+=1.6,R+=r.para)});let J=(q+1)*o.lineHeight*y+y*1.55;return{strokes:z,total:R,height:J}}function u(v,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(v*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=v+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,v,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=v=>v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;function d(v,m){let g=f[v.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let M=1;M<v.pts.length;M++){let k=v.pts[M-1],z=v.pts[M],R=Math.hypot(z[0]-k[0],z[1]-k[1]),D=b,q=b+R;if(b=q,q<=g||R===0)continue;if(D>=m)break;let oe=Math.max(0,(g-D)/R),I=Math.min(1,(m-D)/R),ae=[k[0]+(z[0]-k[0])*oe,k[1]+(z[1]-k[1])*oe],J=[k[0]+(z[0]-k[0])*I,k[1]+(z[1]-k[1])*I],ne=(D+q)/2/(v.L||1),$e=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,ne)));n.lineWidth=y*$e,n.globalAlpha=.86+.14*$e,n.beginPath(),n.moveTo(ae[0],ae[1]),n.lineTo(J[0],J[1]),n.stroke()}v.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(v.pts[0][0],v.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[v.i]=m}function p(v){let m=(v-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);d(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(p):o.onDone&&o.onDone()}return{write(v,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=l(v,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(v):o.maxTime;if(b&&i>b){let k=b/i;a.forEach(z=>{z.start*=k,z.dur*=k}),i=b}a.forEach((k,z)=>{k.i=z}),f=[],u(g,y.height);let M=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||M){a.forEach(k=>d(k,k.L));return}return c=performance.now(),s=requestAnimationFrame(p),i},finish(){cancelAnimationFrame(s),a.forEach(v=>d(v,v.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}ky.exports=j8});var od=de((YA,Sy)=>{"use strict";var td=or(),B8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',U8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Sy.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=td.isNight;o.innerHTML=r?B8:U8,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),td.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),td.toggle()}),o}});var zy=de((KA,Ly)=>{"use strict";var An=dh(),W8=Ai(),V8=ed(),X8="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Ay=100,hi=e=>Math.max(0,Math.min(1,e)),Cr=(e,t,o)=>{let n=hi((o-e)/(t-e));return n*n*(3-2*n)},La=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,ua=(e,t,o)=>e+(t-e)*o,dl=(e,t,o)=>[ua(e[0],t[0],o),ua(e[1],t[1],o),ua(e[2],t[2],o)];function I0(e,t){let o=e.length-1,n=hi(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-f[l])*a*a+(-i[l]+3*s[l]-3*c[l]+f[l])*a*a*a))}var ph=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function nd(e,t,o){return{eye:dl(e.eye,t.eye,o),target:dl(e.target,t.target,o),fov:ua(e.fov,t.fov,o),roll:ua(e.roll||0,t.roll||0,o)}}var pl=W8.PLAY,za=[pl.stoolX,1,pl.keyFront+.25],vh=[pl.stoolX,pl.keyTop+.03,pl.keyFront-.05],ad=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[za[0]+Math.cos(t)*o,1.15+.4*e,za[2]+Math.sin(t)*o]},Vs=[{eye:ad(1),target:[za[0],.92,za[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:vh},{eye:[za[0]+1,1.14,za[2]+1.72],target:[vh[0]+.05,.8,vh[2]+.05],fov:40,aperture:1,to:vh}],Ty=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),mh=e=>({fade:0,letterbox:.55,exposure:1.3,focus:Ty(e.eye,e.to||za),aperture:e.aperture,vignette:.42,shafts:0}),rd={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Xs={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},ul={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},Y8=`
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
`;Ly.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=Y8,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),u=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,d=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let me=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Ay-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>Ay&&me&&(s.value=me[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(me=>s.addEventListener(me,Oe=>Oe.stopPropagation())),a.addEventListener("pointerdown",me=>me.stopPropagation()),a.addEventListener("click",me=>{let Oe=me.target.closest("button");Oe&&(me.stopPropagation(),Oe.dataset.act==="send"&&$e(),Oe.dataset.act==="leave"&&ve())});let p=!1,v="",m=0,g=null,y=null,b="",M=null,k=0,z="",R=document.createElement("canvas");R.width=512,R.height=652;function D(me){me!==z&&(z=me,i.classList.toggle("on",me==="write"),f.classList.toggle("on",me==="hint"),l.classList.toggle("on",p&&me==="hint"&&(v==="room"||v==="peek")),u.classList.toggle("on",me==="final"),me==="write"&&setTimeout(()=>{if(v==="write")try{s.focus({preventScroll:!0})}catch(Oe){}},900))}function q(me){v=me,m=0}function oe(me,Oe){if(p)return;p=!0,g={eye:me.eye.slice(),target:me.target.slice(),fov:me.fov,roll:me.roll||0},y=Object.assign({},Oe),b="",s.value="",c.disabled=!0,An.STATE.fold=0,An.STATE.slide=0,An.STATE.shown=!0,An.STATE.active=!0;let kt=R.getContext("2d");kt.setTransform(1,0,0,1,0,0),kt.clearRect(0,0,R.width,R.height),An.STATE.ink=R,An.STATE.inkDirty=!0,document.body.classList.add("confessing");let tt=Vs[0],at=d?.3:5.5,vo=d?.3:3.6;I.i=0,I.u=0,I.T=at+vo,I.moving=!0,I.rest=0,I.raw=!0,I.lookFrom=y,I.lookTo=mh(tt);let _=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],ad(0)],Vt=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[za[0],1,za[2]-.1],tt.target];I.path=Ht=>{let X=Ht*(at+vo);if(X<at){let dt=X/at,Pt=1-Math.cos(dt*Math.PI/2);return{eye:I0(_,Pt),target:I0(Vt,Cr(0,1,Pt*1.05)),fov:ua(g.fov,52,Cr(.4,1,Pt)),roll:(g.roll||0)*(1-Pt)}}let He=(X-at)/vo,Ke=1-Math.pow(1-He,2.4);return{eye:ad(Ke),target:tt.target,fov:ua(52,tt.fov,Ke),roll:.05*Math.sin(Math.PI*Ke)}},q("room"),D("")}let I={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},ae=()=>h?"Scroll on":"Swipe up";function J(me){let Oe=Gt,kt=Vs[me],tt={eye:Oe.eye.slice(),target:Oe.target.slice(),fov:Oe.fov,roll:Oe.roll||0},at=dl(tt.eye,kt.eye,.5),vo=[at[0]-za[0],0,at[2]-za[2]],_=Math.hypot(vo[0],vo[2])||1,Vt=[at[0]+vo[0]/_*.6,at[1]+.3,at[2]+vo[2]/_*.6];I.path=Ht=>{let X=1-Ht;return{eye:[0,1,2].map(He=>X*X*tt.eye[He]+2*X*Ht*Vt[He]+Ht*Ht*kt.eye[He]),target:dl(tt.target,kt.target,Cr(0,1,Ht)),fov:ua(tt.fov,kt.fov,Ht),roll:tt.roll*X}},I.lookFrom=ne||mh(Vs[I.i]),I.lookTo=mh(kt),I.i=me,I.u=0,I.moving=!0,I.rest=0,I.raw=!1,I.T=d?.4:Math.max(2.8,Math.min(4.4,Ty(tt.eye,kt.eye)*1+1.6)),D("")}let ne=null;function $e(){if(v!=="write"||(b=s.value.trim(),!b))return;s.blur(),D("");let me=Math.max(10,Math.min(22,24-b.length/28));M=V8(R,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:me,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:Oe=>2.4+Oe.length/160,fixed:{mx:46,my:40},onPen:()=>{An.STATE.inkDirty=!0},onDone:()=>{An.STATE.inkDirty=!0}}),q("down")}function Ye(){try{let me={access_key:X8,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(me),keepalive:!0}).catch(()=>{})}catch(me){}}function fe(){v==="ready"&&(Ye(),q("fold"),D(""))}function ve(){!p||v==="leave"||(D(""),s.blur(),Fe=Gt,ft=ne,q("leave"))}let Fe=null,ft=null,Gt=null,zt=An.SHOTS.window,po=An.OFF,gt=me=>[me[0]+po[0],me[1],me[2]],Qt=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],gt([1.25,1.5,43.25]),gt([-.55,1.36,42.92])],Bo=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],gt([-1,1.55,43.6]),gt([-1.4,1.35,43.1]),gt([-1.5,1.33,43.3])];function sr(me){let Oe=La(hi(me)),kt=[g.eye,...Qt,zt.eye],tt=[g.target,...Bo,zt.target];return{eye:I0(kt,Oe),target:I0(tt,Cr(0,1,Oe*1.03)),fov:ua(g.fov,zt.fov,Cr(.6,.97,Oe)),roll:(g.roll||0)*(1-Oe)}}function Qe(me,Oe){if(d)return me;let kt=performance.now()/1e3,tt=.004*Oe,at=Math.sin(kt*.61)*.6+Math.sin(kt*1.37+1.3)*.4,vo=Math.sin(kt*.47+2.1)*.6+Math.sin(kt*1.13+.4)*.4;return{eye:[me.eye[0]+at*tt,me.eye[1]+vo*tt*.7,me.eye[2]],target:[me.target[0]+vo*tt*1.5,me.target[1]+at*tt,me.target[2]],fov:me.fov,roll:me.roll}}function vt(me,Oe,kt){let tt={};for(let at in Oe)tt[at]=typeof Oe[at]=="number"&&typeof me[at]=="number"?ua(me[at],Oe[at],kt):Oe[at];return tt}function Ct(me){me*=window.__confSpeed||1,m+=me;let Oe=ph(zt),kt=ph(An.SHOTS.paper),tt,at,vo=ph(An.SHOTS.peek);if(v==="room")I.moving?(I.u=Math.min(1,I.u+me/I.T),tt=I.path(I.raw?I.u:La(I.u)),at=vt(I.lookFrom,I.lookTo,Cr(.1,.9,I.u)),I.raw&&(at.fade=(y.fade||0)*(1-Cr(0,.12,I.u))),I.u>=1&&(I.moving=!1,I.rest=0,f.textContent=ae(),D("hint"))):(I.rest+=me,tt=Qe(ph(Vs[I.i]),2.5),at=mh(Vs[I.i]));else if(v==="enter"){let Vt=hi(m/(d?.6:9)),Ht=La(Vt),X=[Et.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],gt([.75,1.5,42.95]),gt([-.25,1.42,42.82]),gt([-.9,1.42,42.82]),vo.eye];tt={eye:I0(X,Ht),target:dl(Et.target,vo.target,Cr(0,.35,Ht)),fov:ua(Et.fov,vo.fov,Cr(.3,1,Ht)),roll:0},at=vt(oo,rd,Cr(.2,.9,Vt)),Vt>=1&&q("peek")}else if(v==="peek")tt=Qe(vo,1.5),at=rd,m>(d?.5:3.2)&&q("turn");else if(v==="turn"){let _=hi(m/(d?.4:3.2));tt=nd(vo,Oe,La(_)),at=vt(rd,Xs,La(_)),_>=1&&(q("write"),D("write"))}else if(v==="write")tt=Qe(Oe,1),at=Xs;else if(v==="down"){let _=hi(m/(d?.4:2));tt=nd(Oe,kt,La(_)),at=vt(Xs,ul,La(_)),_>=1&&(k=M.write(b,d)||0,An.STATE.inkDirty=!0,q("writing"))}else if(v==="writing")tt=Qe(kt,.6),at=ul,m>k+.8&&(q("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",D("hint"));else if(v==="ready")tt=Qe(kt,.6),at=ul;else if(v==="fold"){let _=hi(m/(d?.3:1.5));An.STATE.fold=La(_),tt=Qe(kt,.6),at=ul,_>=1&&q("slide")}else if(v==="slide"){let Vt=hi(m/(d?.6:3.4));An.STATE.slide=La(Cr(0,.7,Vt));let Ht=La(Cr(.35,1,Vt));tt=nd(kt,Oe,Ht),at=vt(ul,Xs,Ht),Vt>=1&&(An.STATE.shown=!1,q("final"),D("final"))}else if(v==="final")tt=Qe(Oe,1),at=Xs;else if(v==="leave"){let _=d?.6:Fe.eye[0]<po[0]-.3?12:7,Vt=hi(m/_),Ht={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},X=La(Vt),He=Fe.eye[0]<po[0]-.3,Ke=He?[Fe.eye,gt([-.55,1.4,42.8]),gt([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Ht.eye]:[Fe.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Ht.eye],dt=He?[Fe.target,gt([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Ht.target]:[Fe.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Ht.target];if(tt={eye:I0(Ke,X),target:I0(dt,X),fov:ua(Fe.fov,Ht.fov,X),roll:Ht.roll*X},at=vt(ft||Xs,y,Cr(.1,.7,Vt)),at.fade=(y.fade||0)*Cr(.82,1,Vt),Vt>=1){p=!1,An.STATE.active=!1,An.STATE.shown=!0,An.STATE.fold=0,An.STATE.slide=0;let Pt=R.getContext("2d");Pt.setTransform(1,0,0,1,0,0),Pt.clearRect(0,0,R.width,R.height),An.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return Gt=tt,ne=at,{camera:tt,look:at}}let Et=null,oo=null;function ht(){if(v==="room"){if(I.moving||I.rest<.4)return;I.i<Vs.length-1?J(I.i+1):(Et=Gt,oo=ne,D(""),q("enter"));return}if(v==="peek"){m>.4&&q("turn");return}v==="ready"?fe():v==="writing"&&M&&(M.finish(),m=Math.max(m,k))}function mt(){v==="room"&&!I.moving&&I.rest>.4&&I.i>0&&J(I.i-1)}return{start:oe,update:Ct,leave:ve,get active(){return p},get stage(){return v},wheel(me){me>8?ht():me<-8&&mt()},swipe(me){me>0?ht():me<0&&mt()},tap(){ht()},key(me){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(me)>=0?(ht(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(me)>=0?(mt(),!0):me==="Escape"?(ve(),!0):!1},_setNote(me){s.value=me,s.dispatchEvent(new Event("input"))}}}});var $y=de((QA,Gy)=>{"use strict";var Ys=Ls(),gh=N1(),id=nf(),K8=zc(),sd=C1(),Q8=ta(),xh=!Q8.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Ur}=ra(),{C:Kn,PAINTING_X:Js}=tr(),Ir=e=>Math.max(0,Math.min(1,e)),Pe=(e,t,o)=>e+(t-e)*o,Oo=(e,t,o)=>[Pe(e[0],t[0],o),Pe(e[1],t[1],o),Pe(e[2],t[2],o)],Kt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],cd=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Er=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Ne=(e,t,o)=>{let n=Ir((o-e)/(t-e));return n*n*(3-2*n)};function Z8(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,l=Math.max(-f,Math.min(f,e-t)),u=e-l,h=(o+i*l)*r,d=(o-i*h)*c,p=u+(l+h)*c;return t-e>0==p>t&&(p=t,d=0),[p,d]}var Ny=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,J8=e=>e*e*e,ld=e=>1-Math.pow(1-e,3),sn=e=>-(Math.cos(Math.PI*e)-1)/2;function yn(e,t){let o=e.length-1,n=Ir(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=a*a,u=l*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-f[h])*l+(-i[h]+3*s[h]-3*c[h]+f[h])*u))}var Ut=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function D0(e,t,o){return Ut(Oo(e.eye,t.eye,o),Oo(e.target,t.target,o),Pe(e.fov,t.fov,o),Pe(e.roll,t.roll,o))}var pd=()=>Ne(.75,1.3,window.innerWidth/window.innerHeight),kr=(e,t)=>D0(e,t,pd()),yh=[7,3.95,Kn.hallEnd-.05],ek=[Kn.x1,2.9,Kn.zc],Qs=[16.75,4.55,6.75],vd=[6.92,2.72,14.5],Na=[7.3,.015,47.1],tk=[Qs,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],vd],ok=[vd,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Na],F0=[Js[0],3,Kn.z0],G0=[Js[1],3,Kn.z0],hd=47.45,Fy=4.6,nk=13.2,rk=1.42,vl=[7.55,1.25,46.75],md=[17.25,2.42,46],gd=[26.05,1.95,46],ml=[36.15,.015,44],Mh=()=>Pe(6.8,6.15,pd()),ak=[vl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],md],ik=[md,[20.2,2.05,45.6],[23.2,1.8,45],gd],$0=[Js[2],3,Kn.z0],ud=[34.8,1.35,46],Wi=[7.89,.03,19.03],Ry=.36,Cy=13.64,ir=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function da(e){let t=e.side==="left"?1:-1;return Oo([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],pd())}function sk(e){return e.side==="left"?kr(Ut([8.6,3.9,e.z],[Ry,1.45,e.z],76),Ut([8,3.6,e.z+.7],[Ry,3.95,e.z-2],46,-.008)):kr(Ut([5.4,3.9,e.z],[Cy,1.45,e.z],76),Ut([6,3.6,e.z-.7],[Cy,3.95,e.z+2],46,-.008))}var ck=()=>[ml,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],da(ir[0])],lk=()=>[da(ir[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],da(ir[3])],fk=()=>[da(ir[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Wi],Py={2:{pos:()=>vd,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>vl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>md,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>gd,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>ud,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>da(ir[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>da(ir[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>da(ir[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>da(ir[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>da(ir[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>da(ir[5]),amp:[.12,.08,.1],tumble:.5}},Ui=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=kr(Ut([Kn.x0+.9,1.85,Kn.zc+.25],[Kn.x1,2.85,Kn.zc-.1],64),Ut([Kn.x0+1.2,2,Kn.zc+.35],[Kn.x1,2.6,Kn.zc-.15],50));return n.eye=Kt(Kt(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=kr(Ut([16.6,1.9,9.2],[17.3,.4,5.6],64),Ut([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Kt(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=kr(Ut([7,1.35,13],[7.2,7.6,20.4],74,.05),Ut([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Kt(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=kr(Ut([7,3.6,43.7],[7,3.85,yh[2]],74),Ut([7,3.6,41.3],[7,3.95,yh[2]],46));return o.eye=Kt(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=kr(Ut([7,3.9,40.3],[7,1.35,yh[2]],76),Ut([6.3,3.6,41.2],[3.7,3.95,yh[2]],46,-.008));return o.eye=Kt(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=kr(Ut([7.15,.15,46],[7.3,.04,Na[2]],50),Ut([7.05,.14,45.9],[7.25,.05,Na[2]],32));return o.eye=Kt(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=kr(Ut([7.15,.1,46.3],[7.05,.1,hd],50),Ut([7.1,.12,45.85],[7,.2,hd],30));return o.eye=Kt(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=kr(Ut([7.3,.85,45.65],[7.6,1.38,47.1],64),Ut([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Kt(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=kr(Ut([F0[0],2.3,46.85],[F0[0],1.25,F0[2]],74),Ut([F0[0]-.6,2.55,46.85],[F0[0]+1.9,2.9,F0[2]],46,.008));return o.eye=Kt(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=kr(Ut([G0[0],1.95,46.85],[G0[0],1,G0[2]],74),Ut([G0[0]-.6,2.1,46.85],[G0[0]+1.9,2.75,G0[2]],46,.008));return o.eye=Kt(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=kr(Ut([$0[0],1.4,46.85],[$0[0],.6,$0[2]],74),Ut([$0[0]-.6,1.45,46.85],[$0[0]+1.9,2,$0[2]],46,.008));return o.eye=Kt(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=kr(Ut([34.75,.5,44.15],[Kn.x1,.8,43.95],66),Ut([34.75,.45,44.3],[Kn.x1,.35,43.95],50));return o.eye=Kt(o.eye,t),o}},...ir.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=sk(e);return r.eye=Kt(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=kr(Ut([7.75,2.6,18.6],[7.89,0,19.08],60),Ut([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-Wi[0],r=o.eye[2]-Wi[2];return o.eye=[Wi[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],Wi[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],hk=[1,.96,.88];function Iy(e,t){return{dur:t,cam(o,n,r){let a=sn(o),i=D0(n,r,a),s=ir[e].side==="left"?1:-1;return i.eye=Kt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=Pe(n[i],r[i],o));return a.aperture=Pe(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=sn(o),r=da(ir[e]),a=da(ir[e+1]),i=ir[e].side==="left"?1:-1,s=Kt(Oo(r,a,.5),[i*1.2,.5,0]),c=yn([r,Oo(r,s,.6),s,Oo(a,s,.6),a],n);return{phase:"fly",pos:Kt(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var fd=[{dur:6.2,cam(e,t,o){if(e<.5){let s=J8(e/.5),c=Oo(t.eye,[Kn.x1-3.2,2.6,Kn.zc],s),f=Oo(t.target,ek,Ne(0,.6,e/.5));return Ut(c,f,Pe(t.fov,t.fov-8,s),Pe(t.roll,.04,s))}let n=ld((e-.5)/.5),r=[[Ur.cx+.4,10.4,Ur.zc+.6],[Ur.cx-.6,7.6,Ur.zc+1.3],[Ur.cx-1.9,4.6,Ur.zc+1.75],o.eye],a=[[Ur.cx-.1,0,Ur.zc-.2],[Ur.cx-1,.4,Ur.zc-.1],[Ur.cx-1.1,.8,Ur.zc-.2],o.target];return Ut(yn(r,n),yn(a,n),Pe(o.fov+14,o.fov,n),Pe(-.25,o.roll,n))},look(e,t,o){let n=Ne(.22,.5,e),r=1-Ne(.5,.74,e);return{fade:e<.5?n:r,fadeColor:hk,exposure:Pe(t.exposure,o.exposure,Ne(.5,.9,e))*(1+2.2*(e<.5?Ne(.15,.5,e):1-Ne(.5,.8,e))),letterbox:Pe(t.letterbox,o.letterbox,Ne(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Ne(.6,1,e),focus:Pe(4,o.focus,Ne(.5,1,e)),shafts:Pe(t.shafts,o.shafts,Ne(.4,.6,e)),vignette:Pe(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=yn(r,sn(e)),i=Ne(0,.12,e)*(1-Ne(.82,1,e)),s=Oo(Oo(t.target,o.target,Ne(.55,1,e)),n.pos,i),c=Pe(t.fov,o.fov,Ne(.3,1,e))-6*Math.sin(Math.PI*e),f=Pe(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return Ut(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Pe(t.exposure,o.exposure,Ne(.25,.75,e)),letterbox:Pe(t.letterbox,o.letterbox,e),focus:Pe(a,o.focus,Ne(.8,1,e)),aperture:Pe(.7,o.aperture,Ne(.8,1,e)),shafts:Pe(t.shafts,o.shafts,Ne(.3,.8,e)),vignette:Pe(t.vignette,o.vignette,e)}},leaf(e){let t=Ny(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:Kt(yn(tk,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Ne(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=yn([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Ne(0,.8,e)*.6+sn(Ir(e/.8))*.4),a=yn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],sn(Ne(.8,1,e))),i=e<.8?r:a,s=Oo(Oo(t.target,n.pos,Ne(.03,.22,e)),o.target,Ne(.82,1,e)),c=Pe(t.fov,o.fov,Ne(.15,.7,e))-6*Ne(.6,.8,e)*(1-Ne(.85,1,e)),f=Pe(t.roll,o.roll,Ne(0,.6,e))-.04*Math.sin(Math.PI*e);return Ut(i,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Pe(t.exposure,o.exposure,Ne(.5,1,e)),letterbox:Pe(t.letterbox,o.letterbox,e),focus:Pe(a,o.focus,Ne(.84,1,e)),aperture:Pe(1.1,o.aperture,Ne(.84,1,e)),shafts:Pe(t.shafts,o.shafts,Ne(.2,.9,e)),vignette:Pe(t.vignette,o.vignette,Ne(.5,1,e))}},leaf(e){let t=Pe(Ny(e),e,.35),o=yn(ok,Ne(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Ne(.55,.76,e)),r=Ne(.7,.8,e);return{phase:"fly",pos:Kt(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=sn(e),r=D0(t,o,n);return r.eye=Kt(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=sn(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Pe(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=sn(e),r=yn([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Oo(t.target,o.target,Ne(.1,.85,e));return Ut(r,a,Pe(t.fov,o.fov,Ne(.2,1,e)),Pe(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Pe(t[r],o[r],Ne(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,o){return D0(t,o,sn(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Pe(t[r],o[r],sn(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Pe(Fy,Mh(),e)}},{dur:7.5,kick:e=>Ir((e-Ks())/(1-Ks())),cam(e,t,o,n){let r=Ks(),a=Ne(0,r,e)*(1-Ne(r+.12,r+.35,e)),i=Oy(Math.min(e,Zs)),s=Kt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Ne(r+.12,1,e),f=yn([t.eye,t.eye,Kt(t.eye,[0,.12,-.3]),o.eye],c);return s=Oo(s,n.pos,Ne(r+.06,r+.24,e)*(1-Ne(.9,1,e))),s=Oo(s,o.target,Ne(.88,1,e)),Ut(f,s,Pe(t.fov,o.fov,c),Pe(t.roll,o.roll,c))},look(e,t,o,n,r){let a=Ks(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Ne(0,.12,e)*(1-Ne(a+.25,a+.5,e));return{letterbox:Pe(Pe(t.letterbox,o.letterbox,Ne(a,1,e)),1.75,s),exposure:Pe(t.exposure,o.exposure,Ne(a,1,e)),focus:e<a?t.focus:Pe(t.focus,i,Ne(a,a+.2,e)),aperture:Pe(t.aperture,o.aperture,Ne(a,1,e)),vignette:Pe(t.vignette,o.vignette,e),shafts:Pe(t.shafts,o.shafts,e)}},leaf(e){let t=Ir((e-Ks())/(1-Ks()));if(t<=0)return{phase:"floor"};let o=Ne(0,.85,t)*.85+ld(Ne(0,.15,t))*.15;return{phase:"fly",pos:Kt(Na,[(vl[0]-Na[0])*o+Math.sin(t*9)*.08*(1-t),(vl[1]-Na[1])*o,(vl[2]-Na[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?Oy(e):null}},{dur:9,cam(e,t,o,n){let r=sn(e),a=yn([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Ne(.6,.92,e),s=Oo(Oo(t.target,n.pos,Ne(0,.15,e)),o.target,1-i),c=Pe(t.fov,o.fov,Ne(.3,1,e)),f=Pe(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return Ut(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Pe(t.letterbox,o.letterbox,e),exposure:Pe(t.exposure,o.exposure,Ne(.3,.8,e)),focus:Pe(a,o.focus,Ne(.6,.95,e)),aperture:Pe(t.aperture,o.aperture,Ne(.6,1,e)),vignette:Pe(t.vignette,o.vignette,e),shafts:Pe(t.shafts,o.shafts,Ne(.3,.8,e))}},leaf(e){let t=sn(e);return{phase:"fly",pos:Kt(yn(ak,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=sn(e),r=D0(t,o,n);return r.eye=Kt(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Pe(t[r],o[r],e));return n.aperture=Pe(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=sn(e);return{phase:"fly",pos:Kt(yn(ik,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=sn(e),r=D0(t,o,n);return r.eye=Kt(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Pe(t[r],o[r],e));return n.aperture=Pe(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=sn(e);return{phase:"fly",pos:Kt(yn([gd,[29.2,1.75,45.5],[32.2,1.5,45.4],ud],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=sn(e),a=yn([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Ne(.05,.3,e)*(1-Ne(.8,1,e)),s=Oo(Oo(t.target,o.target,Ne(.6,1,e)),n.pos,i);return Ut(a,s,Pe(t.fov,o.fov,Ne(.2,1,e)),Pe(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Pe(t.letterbox,o.letterbox,e),exposure:Pe(t.exposure,o.exposure,e),focus:Pe(a,o.focus,Ne(.8,1,e)),aperture:Pe(.9,o.aperture,Ne(.8,1,e)),vignette:Pe(t.vignette,o.vignette,e),shafts:Pe(t.shafts,o.shafts,e)}},leaf(e){let t=yn([ud,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],ml],Ne(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Ne(.35,.82,e)),n=Ne(.78,.88,e);return{phase:"fly",pos:Kt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=Ir((e-.02)/.09);return ld(t)+.07*Math.sin(Ir((e-.08)/.18)*Math.PI)*(1-Ir((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Ne(.02,.05,e)*(1-Ne(.08,.16,e)),a=Ne(.06,1,e),i=yn([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+sn(a)*.45),s=Kt(n.pos,[1,-.2,-1.45]);i=Oo(i,s,Ne(.1,.22,e)*(1-Ne(.52,.72,e)));let c=Ne(.06,.16,e)*(1-Ne(.86,1,e)),f=Oo(t.target,n.pos,c);f=Oo(f,o.target,Ne(.86,1,e));let l=Pe(t.fov,o.fov,Ne(.1,1,e))+6*Math.sin(Math.PI*Ne(.08,.9,e)),u=Pe(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Ne(.1,.9,e))+r;return Ut(Kt(i,[0,r,0]),f,l,u)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Ne(.02,.06,e)*(1-Ne(.08,.3,e));return{letterbox:Pe(t.letterbox,o.letterbox,Ne(.1,.4,e)),exposure:Pe(t.exposure,o.exposure,e)*(1+.8*i),focus:Pe(a,o.focus,Ne(.86,1,e)),aperture:Pe(.8,o.aperture,Ne(.86,1,e)),vignette:Pe(t.vignette,o.vignette,e),shafts:Pe(t.shafts,o.shafts,e)+i}},leaf(e){let t=Ir((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=yn(ck(),t*.6+sn(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:Kt(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>Iy(e,7.5)),{dur:10,cam(e,t,o,n){let r=sn(e),a=yn([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Ne(0,.15,e)*(1-Ne(.85,1,e)),s=Oo(Oo(t.target,o.target,Ne(.5,1,e)),n.pos,i);return Ut(a,s,Pe(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),Pe(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Pe(t.letterbox,o.letterbox,e),exposure:Pe(t.exposure,o.exposure,e),focus:Pe(a,o.focus,Ne(.85,1,e)),aperture:Pe(.6,o.aperture,Ne(.85,1,e)),vignette:Pe(t.vignette,o.vignette,e),shafts:Pe(t.shafts,o.shafts,e)}},leaf(e){let t=sn(e),o=yn(lk(),t);return{phase:"fly",pos:Kt(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>Iy(e,7.5)),{dur:10,cam(e,t,o,n){let r=sn(e),a=yn([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Ne(0,.2,e)*(1-Ne(.9,1,e)),s=Oo(Oo(t.target,o.target,Ne(.5,1,e)),n.pos,i);return Ut(a,s,Pe(t.fov,o.fov,r),Pe(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Pe(t.letterbox,o.letterbox,e),exposure:Pe(t.exposure,o.exposure,e),focus:Pe(a,o.focus,Ne(.85,1,e)),aperture:Pe(.7,o.aperture,Ne(.85,1,e)),vignette:Pe(t.vignette,o.vignette,e),shafts:Pe(t.shafts,o.shafts,e)}},leaf(e){let t=yn(fk(),Ne(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Ne(.4,.84,e)),n=Ne(.8,.9,e);return{phase:"fly",pos:Kt(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],dd=9.2,Zs=.6;function Oy(e){return e<Zs?Pe(Mh(),dd,e/Zs):Pe(dd,nk,(e-Zs)/(1-Zs))}function Ks(){return Zs*Ir((Na[0]+.15-Mh())/(dd-Mh()))}var _h={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},bh=e=>Object.assign({},_h,Ui[e].look),uk=`
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
`;function Pr(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var O0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function wh(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}Gy.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let U=document.createElement("link");U.rel="stylesheet",U.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",U.setAttribute("data-tour-font",""),document.head.appendChild(U)}let r=ed(),a=null;fetch("res/hand.json").then(U=>U.ok?U.json():null).then(U=>{a=U}).catch(()=>{});let i=document.createElement("style");i.textContent=uk+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=Pr("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Pr("div","tour-mark",O0(gh.name)),f=Pr("button","tour-free","Explore freely");f.type="button";let l=Pr("div","tour-links",id.icons("tour-icon"));l.insertBefore(od()("tour-icon"),l.firstChild),l.insertBefore(eh().button("tour-icon"),l.firstChild.nextSibling);let u=Pr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');u.type="button",u.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(u),xh&&l.appendChild(f);let h=Pr("div","tour-progress",Ui.map(()=>"<i></i>").join("")),d=Pr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=d.querySelector("span"),v=Pr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${O0(gh.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);wh(v,.4,.35);let m=gh.text.split(/\n\s*\n/).map(U=>`<p class="tour-line">${O0(U.trim())}</p>`).join(""),g=Pr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${O0(gh.title)}</h2>
		<span class="tour-rule"></span>
		${id.line("tour-line tour-contact")}
		${m}`);wh(g,.25,.28);let y=Pr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);wh(y,.6,.3);let b=Pr("div","tour-card tour-master","");function M(U){let ge=Pr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),rt=ge.querySelector(".tour-title"),it=ge.querySelector(".tour-body");return ge.filled=!1,ge.body=it,ge.fill=()=>{let qt=U();if(!qt||ge.filled)return;ge.filled=!0;let Uo=qt.title||"";ge.querySelector(".tour-kicker").textContent=K8(qt)||"Oil on canvas";let Zn=ge.querySelector(".visit-row");Zn.innerHTML=sd.button(qt),Zn.hidden=!Zn.innerHTML;let ma=Zn.querySelector(".visit-btn");ma&&(ma.addEventListener("click",fo=>{fo.stopPropagation(),sd.open(qt)}),ge.warm=()=>sd.warm(qt));let Tn=0;rt.innerHTML=Uo.split(" ").map(fo=>'<span class="tour-word">'+fo.split("").map(Jn=>`<span style="transition-delay:${(.35+Tn++*.045).toFixed(3)}s">${O0(Jn)}</span>`).join("")+"</span>").join(" "),rt.setAttribute("aria-label",Uo);let Yr=.35+Uo.length*.045+.2;ge.querySelector(".tour-rule").style.transitionDelay=Yr.toFixed(2)+"s";let bn=String(qt.description||"").split(/\n\s*\n/).filter(fo=>fo.trim());if(ge.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&bn.length){it.innerHTML=bn.map(hn=>`<p class="hand-text">${O0(hn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let fo=it.querySelector("canvas"),Jn=bn.map(hn=>hn.trim()).join(`

`),tn=!1,er=!1,Kr=0;it.addEventListener("wheel",()=>{tn=!0},{passive:!0}),it.addEventListener("touchmove",()=>{tn=!0},{passive:!0});let ga=parseFloat(getComputedStyle(it).fontSize)||17,Io=r(fo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,ga*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:hn=>3.5+hn.length/420,seed:3+Uo.length,onPen:hn=>{if(tn)return;let xa=hn-it.clientHeight*.55;xa>it.scrollTop+4&&(it.scrollTop+=Math.min(16,xa-it.scrollTop))}});fo.addEventListener("click",hn=>{hn.stopPropagation(),clearTimeout(Kr),er?Io.finish():(er=!0,Io.write(Jn,!0))}),ge.write=()=>{if(clearTimeout(Kr),tn=!1,er){Io.write(Jn,!0);return}Io.write("",!0),Kr=setTimeout(()=>{er=!0,Io.write(Jn)},Yr*.6*1e3)},ge.stopWrite=()=>{clearTimeout(Kr),Io.stop()};let Qr=0;window.addEventListener("resize",()=>{clearTimeout(Qr),Qr=setTimeout(()=>{er&&ge.classList.contains("on")&&Io.write(Jn,!0)},250)})}else it.innerHTML=bn.map(fo=>`<p class="tour-line">${O0(fo.trim())}</p>`).join(""),it.querySelectorAll(".tour-line").forEach((fo,Jn)=>{fo.style.transitionDelay=(Yr+.3+Math.min(Jn,6)*.35).toFixed(2)+"s"})},ge}let k=()=>t.paintings?t.paintings():[],z=U=>k().find(ge=>ge.side==="corridor"&&Math.abs(ge.paintingPosition[0]-U)<.5),R=M(()=>k().find(U=>U.side==="end")),D=()=>Pr("div","tour-card",""),q=M(()=>z(F0[0])),oe=M(()=>z(G0[0])),I=M(()=>z($0[0])),ae=ir.map(U=>M(()=>k().find(ge=>ge.side===U.side&&Math.abs(ge.paintingPosition[2]-U.z)<.5))),J=Pr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${xh?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${id.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${xh?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);wh(J,.5,.35);let ne=[v,g,y,b,R,D(),D(),D(),q,oe,I,D(),...ae,J];s.append(...ne,c,l,h,d),document.body.appendChild(s);let $e=zy()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{tt=-1,to&&(Jt={start:_},to=!1)}});document.body.classList.add("touring");let Ye=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,fe=Ye?"Scroll":"Swipe",ve=Ui.map((U,ge)=>ge===0?Ye?"Scroll to begin":"Swipe up to begin":ge===1?fe+" to follow the leaf":ge===2?fe+" to follow the light":ge===3?fe+" for its story":ge===6||ge===7||ge===Ui.length-1?"":fe+" on"),Fe=[0];fd.forEach(U=>Fe.push(Fe[Fe.length-1]+U.dur));let ft=Fe[Fe.length-1],Gt=210,zt=95,po=.35,gt=1.4,Qt=.32,Bo=1,sr=1.3,Qe=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,vt=2.2,Ct=.7,Et=.9,oo=!0,ht=0,mt=0,me=0,Oe=-10,kt=!1,tt=-1,at=0,vo=0,_=0,Vt=null,Ht=Object.assign({},bh(0)),X=Ui[0].cam(0),He={phase:"home",pos:Qs.slice(),tumble:0},Ke=0,dt=U=>{let ge=0;for(let rt=1;rt<Fe.length;rt++)Math.abs(Fe[rt]-U)<Math.abs(Fe[ge]-U)&&(ge=rt);return ge};function Pt(U){let ge=ne[U];ge&&ge.fill&&(ge.fill(),ge.body.scrollTop=0,ge.offsetWidth),ne.forEach((rt,it)=>{let qt=rt.classList.contains("on");rt.classList.toggle("on",it===U),it===U&&!qt&&rt.write&&rt.write(),it!==U&&qt&&rt.stopWrite&&rt.stopWrite()}),ge&&ge.warm&&ge.warm(),p.textContent=ve[U]||"",d.classList.toggle("on",!!ve[U])}function Xt(){ne.forEach(U=>{U.stopWrite&&U.classList.contains("on")&&U.stopWrite(),U.classList.remove("on")}),d.classList.remove("on")}let no=null,ro=-1;function eo(U){if($e.active||!oo||Vt)return;let ge=_-Oe>po;if(Oe=_,ge||!no){let rt=0,it=ft;for(let qt=0;qt<Fe.length;qt++)if(Fe[qt]<=ht-.02&&(rt=Fe[qt]),Fe[qt]>=ht+.02){it=Fe[qt];break}no={lo:rt,hi:it}}_<ro||(kt=!1,me=Math.max(no.lo,Math.min(no.hi,me+U)),me=Math.max(ht-vt,Math.min(ht+vt,me)))}function nt(U){if($e.active||!oo||Vt)return;let ge=kt?me:ht,rt;if(U>0)rt=Fe.findIndex(it=>it>ge+.05);else{rt=-1;for(let it=Fe.length-1;it>=0;it--)if(Fe[it]<ge-.05){rt=it;break}}rt<0||(me=Fe[rt],kt=!0,Oe=_)}let bt=null,wt=U=>U.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(U=>s.addEventListener(U,wt)),s.addEventListener("pointerdown",U=>{if(U.stopPropagation(),!(U.target.closest("button, a")||U.target.closest(".tour-body"))){bt={x:U.clientX,y:U.clientY,lx:U.clientX,ly:U.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(U.pointerId)}catch(ge){}}}),s.addEventListener("pointermove",U=>{if(!bt)return;let ge=U.clientX-bt.lx,rt=U.clientY-bt.ly;bt.lx=U.clientX,bt.ly=U.clientY;let it=Math.abs(rt)>=Math.abs(ge)?-rt:-ge;bt.moved+=Math.abs(it);let qt=performance.now(),Uo=it/zt;bt.v=bt.v*.6+Uo/Math.max(.008,(qt-bt.lt)/1e3)*.4,bt.lt=qt,bt.moved>6&&eo(Uo)});let Nt=U=>{let ge=bt;if(bt=null,!!ge){if($e.active){ge.moved<10&&performance.now()-ge.t<500?$e.tap():ge.y-(U?U.clientY:ge.ly)>30&&$e.swipe(1);return}ge.moved<10&&performance.now()-ge.t<500?nt(1):performance.now()-ge.lt<120&&eo(Math.max(-1.6,Math.min(1.6,ge.v*.22)))}};s.addEventListener("pointerup",U=>{U.stopPropagation(),Nt(U)}),s.addEventListener("pointercancel",()=>{bt=null}),s.addEventListener("wheel",U=>{if($e.active){if(U.target.closest(".conf-ui"))return;U.preventDefault(),$e.wheel(U.deltaY);return}if(U.target.closest(".tour-body")){let rt=U.target.closest(".tour-body"),it=rt.scrollTop+rt.clientHeight>=rt.scrollHeight-2&&U.deltaY>0,qt=rt.scrollTop<=0&&U.deltaY<0;if(!it&&!qt)return}U.preventDefault();let ge=U.deltaMode===1?U.deltaY*16:U.deltaMode===2?U.deltaY*window.innerHeight:U.deltaY;eo(ge/Gt)},{passive:!1}),window.addEventListener("keydown",U=>{if(!oo||Vt||document.body.classList.contains("visiting"))return;if($e.active){if(U.stopImmediatePropagation(),U.target&&/TEXTAREA|INPUT|BUTTON/.test(U.target.tagName))return;$e.key(U.key)&&U.preventDefault();return}let ge=U.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ge)>=0){if((ge==="Enter"||ge===" ")&&U.target&&U.target.tagName==="BUTTON")return;U.preventDefault(),U.stopImmediatePropagation(),nt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ge)>=0?(U.preventDefault(),U.stopImmediatePropagation(),nt(-1)):ge==="Escape"?(U.preventDefault(),Xr()):/^[wasdzq]$/i.test(ge)&&U.stopImmediatePropagation()},!0),window.addEventListener("keyup",U=>{oo&&!Vt&&/^(Arrow|[wasdzq]$)/i.test(U.key)&&U.stopImmediatePropagation()},!0),f.addEventListener("click",U=>{U.stopPropagation(),Xr()}),["mousedown","pointerdown"].forEach(U=>u.addEventListener(U,ge=>ge.stopPropagation())),u.addEventListener("click",U=>{U.stopPropagation(),wo()});let Co=Ut([8.6,1.75,44.3],[-3,1.85,44.5],55,0),yt=null,to=!1;function wo(){if(!oo||Vt||$e.active||yt)return;Xt(),tt=-2;let U=X.eye;if(U[0]>.5&&U[0]<13.5&&U[2]>36&&U[2]<50){to=!1,$e.start(X,Ht);return}yt={t:0}}J.addEventListener("click",U=>{let ge=U.target.closest("button");ge&&(U.stopPropagation(),ge.dataset.act==="free"&&Xr(),ge.dataset.act==="replay"&&xt(),ge.dataset.act==="list"&&ku().show(!1),ge.dataset.act==="confess"&&(Xt(),tt=-2,$e.start(X,Ht)))});let Po=[null,[Ur.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Js[0]-7,0],[42.5+Js[1]-7,0],[42.5+Js[2]-7,0],[1e3,Math.PI/2],...ir.map(U=>[U.z-1.6,U.side==="left"?-Math.PI/2:Math.PI/2]),[Wi[2]-1.6,Math.PI]],Ao=null,Vr=0;function Xr(){if(!oo||Vt||!xh)return;let U=dt(ht),ge=Po[U];Ao=U<=1?{phase:"home",pos:Qs.slice()}:U>=3&&U<=6?{phase:"floor",pos:Na.slice()}:U===11?{phase:"floor",pos:ml.slice()}:U===18?{phase:"floor",pos:Wi.slice()}:null,Vr=U>=12?1:0,ge&&n.place&&n.place(ge[0],ge[1]),Vt={start:_,fromCam:X,fromLook:Object.assign({},Ht)},Xt(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function xt(){ht=me=0,mt=0,kt=!1,tt=-1,at=0,vo=0,He={phase:"home",pos:Qs.slice(),tumble:0},Jt={start:_}}let Jt={start:-1},ln=!1,Qn=[],St={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function To(U){Ke+=U*(He.phase==="floor"?0:1);let ge=He.tumble===void 0?0:He.tumble,rt=Ys.fromTranslation(Qn,He.pos);if(He.phase==="home")rt=Ys.rotateY(rt,rt,2.2+Math.sin(Ke*.9)*.15),rt=Ys.rotateZ(rt,rt,-1+Math.sin(Ke*1.3)*.12),rt=Ys.rotateX(rt,rt,.4);else if(He.phase==="floor")rt=Ys.rotateY(rt,rt,.65),rt=Ys.rotateX(rt,rt,.16);else{let it=He.pos;if(St.prev&&U>0){let cr=[it[0]-St.prev[0],it[1]-St.prev[1],it[2]-St.prev[2]];if(Math.hypot(cr[0],cr[1],cr[2])<1.5){let cc=Math.min(1,U*6);for(let Zi=0;Zi<3;Zi++)St.vel[Zi]+=(cr[Zi]/U-St.vel[Zi])*cc}else St.vel=[0,0,0]}St.prev=it.slice();let qt=St.vel,Uo=Math.hypot(qt[0],qt[1],qt[2]),Zn=Ne(.25,1.4,Uo),ma=Ne(.5,2,-qt[1]),Tn=Ke*.35*(.3+ge)+.65,Yr=[Math.cos(Tn),0,Math.sin(Tn)];Uo>.001&&(Yr=Oo(Yr,Er(qt,-1/Uo),Zn));let bn=Math.min(1,U*4);St.axis=Oo(St.axis,Yr,St.fresh?1:bn);let fo=St.axis,Jn=Math.hypot(fo[0],fo[1],fo[2])||1;fo=Er(fo,1/Jn);let tn=X.eye,er=[tn[0]-it[0],tn[1]-it[1],tn[2]-it[2]],Kr=Math.hypot(er[0],er[1],er[2])||1,ga=Pe(.6,.22,Zn),Io=[er[0]/Kr*ga,1+er[1]/Kr*ga,er[2]/Kr*ga],Qr=fo[0]*Io[0]+fo[1]*Io[1]+fo[2]*Io[2];Io=cd(Io,Er(fo,Qr));let hn=Math.hypot(Io[0],Io[1],Io[2])||1;Io=Er(Io,1/hn);let xa=[fo[1]*Io[2]-fo[2]*Io[1],fo[2]*Io[0]-fo[0]*Io[2],fo[0]*Io[1]-fo[1]*Io[0]],mo=Math.hypot(qt[0],qt[2]),Wo=0;if(mo>.15&&St.dir&&U>0){let cr=[qt[0]/mo,qt[2]/mo];Wo=(St.dir[0]*cr[1]-St.dir[1]*cr[0])/U,St.dir=cr}else mo>.15&&(St.dir=[qt[0]/mo,qt[2]/mo]);St.bank+=(Math.max(-.8,Math.min(.8,Wo*.3))*Zn-St.bank)*Math.min(1,U*3),St.rock+=U*(1.5+2.4*Zn),St.spin+=U*ma*7*(.4+ge);let Zr=Math.sin(St.rock)*(.26+.45*ge)*(1-.5*ma)+St.bank+St.spin,Ki=Math.sin(St.rock*.63+1)*(.16+.3*ge)+(He.swing||0)*.9,Pa=Math.cos(Zr),Qi=Math.sin(Zr),Ml=Kt(Er(Io,Pa),Er(xa,Qi)),di=Kt(Er(xa,Pa),Er(Io,-Qi));Pa=Math.cos(Ki),Qi=Math.sin(Ki);let B0=Kt(Er(fo,Pa),Er(Ml,Qi)),ic=Kt(Er(Ml,Pa),Er(fo,-Qi)),Ah=Math.sin(St.rock+1.5708)*.035*(.3+ge)*(1-.5*Zn),Ya=Kt(it,Er(xa,Ah)),sc=[B0[0],B0[1],B0[2],0,ic[0],ic[1],ic[2],0,di[0],di[1],di[2],0,Ya[0],Ya[1],Ya[2],1];for(let cr=0;cr<16;cr++)rt[cr]=sc[cr];St.fresh=!1}return He.phase!=="fly"&&(St.prev=null,St.vel=[0,0,0],St.fresh=!0,St.spin=0,St.bank=0,St.dir=null),{visible:!0,model:rt}}function fn(U){for(let ge in _h)Ht[ge]=U[ge]!==void 0?U[ge]:_h[ge]}function Lo(U,ge){if(U<=1)return{phase:"home",pos:Qs.slice(),tumble:0};let rt=Py[U];if(rt){let it=rt.amp;return{phase:"fly",pos:Kt(rt.pos(),[Math.sin(ge*.55)*it[0],Math.sin(ge*.8)*it[1],(1-Math.cos(ge*.45))*it[2]]),tumble:rt.tumble}}return{phase:"floor",pos:(U>=18?Wi:U>=10?ml:Na).slice(),tumble:0}}let Va=0,Xa=null;function Ca(U){let ge=Math.min(.1,Math.max(0,U-Va));if(Va=U,_=U,ln||(ln=!0,Jt.start=U),Vt)return null;if(yt&&(yt.t+=ge,yt.t>=.7&&(yt=null,to=!0,$e.start(Co,Object.assign({},_h,{fade:1,fadeColor:[0,0,0]})))),$e.active){let mo=$e.update(ge);return X=mo.camera,fn(mo.look),o&&window.__camOverride&&(X=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ht,window.__lookOverride),{camera:X,walker:null,door:1,look:Ht,leaf:To(ge)}}if(!kt&&!bt&&_-Oe>Ct){let mo=dt(me);Math.abs(Fe[mo]-me)<Et&&(me=Fe[mo])}let rt=me-ht;if(kt){let Wo=Math.sign(rt)*Math.min(Bo,Math.sqrt(2*sr*Math.abs(rt)))-mt;mt+=Math.sign(Wo)*Math.min(Math.abs(Wo),sr*ge),ht+=mt*ge,(rt>0&&ht>=me||rt<0&&ht<=me||Math.abs(me-ht)<1e-4)&&(ht=me,mt=0,kt=!1)}else{let mo=Z8(ht,me,mt,Qt,ge,3);ht=mo[0],mt=mo[1],Math.abs(me-ht)<1e-4&&Math.abs(mt)<.001&&(ht=me,mt=0)}let it=0;for(;it<fd.length-1&&ht>=Fe[it+1];)it++;let qt=fd[it],Uo=Ir((ht-Fe[it])/qt.dur),Zn=Ui[it],ma=Ui[it+1],Tn=dt(ht);Tn!==at&&(at=Tn,vo=0);let Yr=Math.abs(ht-Fe[Tn])<.02;Yr&&(vo+=ge);let bn=1-Ne(0,1.2,Math.abs(ht-Fe[Tn])),fo=qt.leaf(Uo);if(fo.pos?He=Object.assign({},fo):He=Object.assign({},fo,{pos:fo.phase==="home"?Qs.slice():(it>=10?ml:Na).slice()}),Py[Tn]&&bn>0){let mo=Lo(Tn,vo);He.pos=Oo(He.pos,mo.pos,bn)}let Jn=qt.walker&&(Uo>.01||it===6)?qt.walker(Uo):null;Xa=Jn==null?null:{x:Jn,z:hd,heading:Math.PI/2,phase:(Jn-Fy)/rk};let tn=qt.cam(Uo,Zn.cam(0),ma.cam(0),He);if(bn>0&&vo>0){let mo=Ui[Tn],Wo=mo.cam(0),Zr=mo.cam(vo);tn=Ut(Kt(tn.eye,Er(cd(Zr.eye,Wo.eye),bn)),Kt(tn.target,Er(cd(Zr.target,Wo.target),bn)),tn.fov+(Zr.fov-Wo.fov)*bn,tn.roll+(Zr.roll-Wo.roll)*bn)}if(bn>0&&!Qe){let mo=_,Wo=.006*bn,Zr=Math.sin(mo*.61)*.6+Math.sin(mo*1.37+1.3)*.4,Ki=Math.sin(mo*.47+2.1)*.6+Math.sin(mo*1.13+.4)*.4,Pa=Math.sin(mo*.53+4)*.5+Math.sin(mo*.97+2.6)*.5;tn=Ut(Kt(tn.eye,[Zr*Wo,Ki*Wo*.7,Pa*Wo]),Kt(tn.target,[Ki*Wo*1.8,Zr*Wo*1.4,0]),tn.fov,tn.roll+Pa*.0012*bn)}X=tn;let er=bh(it),Kr=bh(it+1),ga=Object.assign({},er,qt.look(Uo,er,Kr,He,tn.eye));if(bn>0){let mo=bh(Tn);for(let Wo in mo)typeof mo[Wo]=="number"&&(ga[Wo]=Pe(ga[Wo],mo[Wo],bn))}fn(ga);let Qr=Yr&&Math.abs(me-ht)<.02?Tn:-1;Qr!==tt&&(Qr>=0&&(ro=_+gt),tt=Qr,Qr>=0?Pt(Qr):Xt()),h.querySelectorAll("i").forEach((mo,Wo)=>mo.classList.toggle("on",Wo===Tn));let hn=tt>=0?ne[tt]:null;hn&&hn.fill&&!hn.filled&&(hn.fill(),hn.filled&&(hn.classList.remove("on"),hn.offsetWidth,hn.classList.add("on")));let xa=Ir((U-Jt.start)/2.6);return xa<1&&(Ht.fade=Math.max(Ht.fade,1-Ne(0,1,xa)),Ht.fadeColor=[0,0,0]),o&&window.__camOverride&&(X=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ht,window.__lookOverride),{camera:X,walker:Xa,door:qt.door?qt.door(Uo):it>=12?1:0,look:yt?Object.assign(Ht,{fade:Math.max(Ht.fade||0,Ir(yt.t/.6)),fadeColor:[0,0,0]}):Ht,leaf:To(ge)}}return o&&(window.__tour={go:nt,exit:Xr,wind:eo,confess(){Xt(),tt=-2,$e.start(X,Ht)},note:()=>wo(),conf:$e,paper:dh().STATE,seek(U,ge){ht=me=Fe[U]+(Fe[U+1]-Fe[U])*ge,mt=0,kt=!1,Oe=_+1e6,Jt.start=_-10,ln=!0},jump(U){ht=me=Fe[U],mt=0,kt=!1,vo=0,Oe=_,Jt.start=_-10,ln=!0},state:()=>({current:dt(ht),scroll:+ht.toFixed(3),target:+me.toFixed(3),shown:tt,move:Math.abs(me-ht)>.02?{p:ht}:null,camNow:X,leaf:He,look:Ht})}),{update:Ca,get active(){return oo&&!Vt},handover(U){if(!Vt)return null;let ge=Ir((U-Vt.start)/1.8);return ge>=1?(oo=!1,null):{from:Vt.fromCam,fromLook:Vt.fromLook,k:sn(ge)}},restingDoor:()=>Vr,restingLeaf(){return Ao?(He=Ao,To(0)):null},mix:D0,cam:Ut}}});var dk=Av(),Ra=ta(),Td=ku(),Sh=Ra.reflection,pk=!1,tb=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),Ld=()=>tb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Ld=()=>tb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var ob=()=>2*Math.atan(Math.tan(Ld()*.5)*window.innerHeight/window.innerWidth),vk=Dv(),bl=new vk;bl.showPanel(0);pk&&document.body.appendChild(bl.dom);var cn,ac,wd,nc,_d,en;function mk(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!mk())throw dk.finish(),Td.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");cn=qv()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Ra.pixelRatio});location.hash==="#list"&&Td.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Td.show(!1)});ac=Am()();var gk=o1();wd=gk(cn,ac,Sh);nc=V2()(cn,ac);_d=Q2()(cn);var Dy=ag()(cn,ac),qy=mg()(cn),Hy=yg()(cn),jy=Og()(cn),By=qg()(cn),Uy=Wg()(cn),Xi=cx()(cn),Md=N1(),nb=nf(),xk=zc(),Ed=C1(),kd=or(),dr=Of(),Sd=xx(),rb=eh(),{A:oc}=ra();en=ey()(ac,ob);var rc=oy()(cn,Ra),Vi=sy()(cn),Wy=ly()(cn),yk=uy()(cn,Ra),bk=xy()(cn,Ra),Vy=Ei()(cn),Xy=dh()(cn),Yy=Ai()(cn),Wa=$y()({fps:en,paintings:()=>nc.interactables(),avatar:Xi,onExit:()=>en.setPaused(!1)});en.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=rc);var q0=[],_l=[],pa=[7,2,1.6];ac.viewer=pa;var wk=cn({cull:{enable:!0,face:"back"},uniforms:{view:()=>q0,proj:()=>_l,yScale:1,mirrorOn:()=>Sh?1:0,night:()=>kd.night,time:cn.context("time")}}),_k=cn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),ab=document.createElement("style");ab.textContent=`

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
`;document.head.appendChild(ab);var va=document.createElement("button");va.className="painting-plaque";va.type="button";va.setAttribute("aria-label","Read painting");document.body.appendChild(va);var Sr=document.createElement("div");Sr.className="story-overlay";Sr.innerHTML=`

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

		${nb.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Sr);var Yi=document.createElement("div");Yi.className="museum-links";Yi.innerHTML=nb.icons("museum-link");Yi.insertBefore(od()("museum-link"),Yi.firstChild);Yi.insertBefore(rb.button("museum-link"),Yi.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>Yi.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(Yi);var Mk=Sr.querySelector("#story-title"),Ek=Sr.querySelector("#story-body"),Ky=Sr.querySelector("#story-meta"),kk=Sr.querySelector(".story-contact"),yl=Sr.querySelector(".story-visit");yl.addEventListener("click",e=>{e.target.closest(".visit-btn")&&j0&&Ed.open(j0)});var Sk=Sr.querySelector(".story-close"),j0=null,Or={p:0,target:0,last:0},ib={title:Md.title,description:Md.text,isAbout:!0},ui=null;function zd(e){e&&(j0=e,Mk.textContent=e.title||"",Ek.textContent=e.description||"",Ky.textContent=e.isAbout?"":xk(e),Ky.hidden=!!e.isAbout,kk.hidden=!e.isAbout,yl.innerHTML=e.isAbout?"":Ed.button(e),yl.hidden=!yl.innerHTML,yl.hidden||Ed.warm(e),Sr.classList.toggle("about-mode",!!e.isAbout),Sr.classList.add("open"),Or.target=e.isAbout?1:0,ui=e,va.classList.remove("visible"),en.setPaused(!0))}function Nd(){Sr.classList.remove("open"),Or.target=0,j0=null,ui=null,en.setPaused(!1)}function sb(e){e&&(e.preventDefault(),e.stopPropagation()),ui&&zd(ui)}va.addEventListener("pointerup",sb,!0);va.addEventListener("touchend",sb,{passive:!1,capture:!0});va.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),j0===null&&ui&&zd(ui)},!0);Sk.addEventListener("click",Nd);Sr.addEventListener("click",e=>{e.target===Sr&&Nd()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Sr.classList.contains("open")&&Nd()});function Qy(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function Ak(){if(j0)return;if(Wa.active){ui=null,va.classList.remove("visible");return}let e=nc.interactables(),t=en.forward[0],o=en.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let l=s[0]-en.pos[0],u=s[2]-en.pos[2],h=-(l*c+u*f),d=Math.abs(l*f-u*c),p=-(t*c+o*f)/n,v=i.side==="end"?11:8,m=(i.width||2)/2;p>.9&&h>.5&&h<v&&d<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=en.pos[0],s=en.pos[2];t/n>.85&&i<13.6&&s>oc.z0-.5&&s<oc.z1+.5&&(r=Object.assign({},ib,{plaqueTitle:Md.name}))}r?(ui=r,va.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,va.classList.add("visible")):(ui=null,va.classList.remove("visible"))}var Rd=Ls();function Tk(){let e=Xi.state;if(!e||!e.glowPos)return null;let t=Qy(en.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=Qy(en.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Ad=null;window.addEventListener("pointerdown",e=>{Ad={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Ad;if(Ad=null,!t||j0||Wa.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=Tk();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),zd(ib))},!0);function Lk(e){let t=Math.min(Math.max(e-Or.last,0),.1);Or.last=e;let o=t/1.6;if(Or.p=Or.target>Or.p?Math.min(1,Or.p+o):Math.max(0,Or.p-o),Or.p<=0)return;let n=Or.p<.5?2*Or.p*Or.p:1-Math.pow(-2*Or.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=Xi.state,i=a&&a.hipsPos?a.hipsPos[0]:oc.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:oc.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=en.pos,u=en.forward,h=[l[0],l[1],l[2]],d=[l[0]+u[0],l[1]+u[1],l[2]+u[2]],p=(y,b)=>y.map((M,k)=>M+(b[k]-M)*n),v=[oc.cx-6.2,1.7,oc.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*v[b]+n*n*c[b]);Rd.lookAt(en.view(),g,p(d,f),[0,1,0])}var ec={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},H0=null,wl=!1,Eh=!1;function zk(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Rd.lookAt(e,t,o,[i[0]*f,c,i[2]*f])}function Nk(e){let t=window.innerWidth/window.innerHeight,o=rc.shot,n=Wa.active?Wa.update(e):null,r=n?null:Wa.handover(e),a=null,i=ec;if(n){a=n.camera,i=n.look,H0=n.leaf;let s=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;Xi.setWalk(s),wl=!!s,Vi.setOpen(n.door||0)}else H0=Wa.restingLeaf(),Xi.setWalk(null),wl=!1,Vi.setOpen(Wa.restingDoor());if(r){let s=en.pos,c=en.forward,f=Wa.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],ob()*180/Math.PI,0);a=Wa.mix(r.from,f,r.k),i={};for(let l in ec)i[l]=Array.isArray(ec[l])?ec[l]:r.fromLook[l]+(ec[l]-r.fromLook[l])*r.k}if(a&&n&&(a=Sd.apply(a,e)),a)zk(q0,a.eye,a.target,a.roll||0),Rd.perspective(_l,a.fov*Math.PI/180,t,.1,700),pa[0]=a.eye[0],pa[1]=a.eye[1],pa[2]=a.eye[2];else{let s=en.view(),c=en.proj();for(let h=0;h<16;h++)q0[h]=s[h],_l[h]=c[h];let f=s[12],l=s[13],u=s[14];pa[0]=-(s[0]*f+s[1]*l+s[2]*u),pa[1]=-(s[4]*f+s[5]*l+s[6]*u),pa[2]=-(s[8]*f+s[9]*l+s[10]*u)}for(let s in ec)o[s]=i[s];n&&Sd.pull(o,e)}var Wr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},xd=[9,9,9,9],Zy=[0,0,0,0],gl=0,yd=0,tc=null,Jy=0,eb=0,xl=0;function Rk(e){let t=Math.min(.1,Math.max(0,e-Jy));Jy=e,Wr.focus=rc.shot.focus,Wr.aperture=Ra.post>=2?rc.shot.aperture:0;for(let i=0;i<4;i++)xd[i]+=t,Wr.wake[i][3]=Zy[i]*Math.exp(-xd[i]/1.1);let o=H0&&H0.visible?H0.model:null;if(o&&t>0){let i=[o[12],o[13],o[14]];if(tc){let s=[i[0]-tc[0],i[1]-tc[1],i[2]-tc[2]],c=Math.hypot(s[0],s[1],s[2]),f=c/t;if(c<1.5&&f>.12){let l=Math.min(1,t*8);for(let h=0;h<3;h++)Wr.wakeDir[h]+=(s[h]/c-Wr.wakeDir[h])*l;let u=Math.hypot(Wr.wakeDir[0],Wr.wakeDir[1],Wr.wakeDir[2])||1;for(let h=0;h<3;h++)Wr.wakeDir[h]/=u;if(yd+=t,yd>.14){yd=0;let h=Wr.wake[gl];h[0]=i[0],h[1]=i[1],h[2]=i[2],Zy[gl]=Math.min(1,(f-.12)/1.6)*.5,xd[gl]=0,gl=(gl+1)%4}}}tc=i}else o||(tc=null);let n=Vi.openNow?Vi.openNow():0,r=t>0?(n-eb)/t:0;eb=n;let a=Math.max(-1,Math.min(1,r*1.2));xl+=(a-xl)*Math.min(1,t*(Math.abs(a)>Math.abs(xl)?6:.7)),Wr.gust[0]+=xl*5.5*t,Wr.gust[1]=Math.abs(xl)}var bd=0,kh=!1;cn.frame(function({time:e}){if(document.body.classList.contains("visiting")){bd=0;return}bl.begin(),kd.tick(e);let t=Wa.active&&Sd.resting&&kd.settled&&(Ra.isPhone||Ra.scale<1||Ra.level>0);if(t){if(kh=!kh,kh){bl.end();return}}else kh=!1;let o=e-bd;bd=e,Ra.frame(t?o/2:o),Sh=Ra.reflection,en.tick({time:e}),Lk(e),nc.update(en.pos,en.fmouse[1],Ld()),Ak(),Nk(e),dr.update(q0,_l,pa),rb.listen(pa),Eh=!wl&&dr.room("stair")&&(!dr.room("court")||pa[0]<.5||pa[2]>30),Xi.setPiano(Eh),Rk(e),rc.capture(arguments[0],{view:q0,proj:_l,eye:pa},()=>{wk(()=>{Sh&&dr.floor&&_k(()=>{wd(),Dy({reflected:!0}),Vy(),dr.room("stair",!0)&&(Yy({reflected:!0}),Xy({reflected:!0,view:q0})),dr.room("court",!0)&&Uy(),(Eh||dr.room("court",!0)||wl)&&Xi(),_d(nc.batch()),dr.room("street",!0)&&qy(),dr.room("garden",!0)&&jy(),dr.room("florence",!0)&&By(),Wy(H0),Vi(),Hy(),Vi.glass()}),wd(),Dy(),Vy(),dr.room("stair")&&(Yy(),Xy({view:q0})),dr.room("court")&&Uy(),(Eh||dr.room("court")||wl)&&Xi(),_d(nc.batch()),dr.room("street")&&qy(),dr.room("garden")&&(jy(),bk()),dr.room("florence")&&By(),Wy(H0),Vi(),yk(Wr),Hy(),Vi.glass()})}),rc.present(),bl.end()});})();
