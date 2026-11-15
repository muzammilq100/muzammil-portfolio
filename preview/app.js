"use strict";(()=>{var ve=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Tv=ve((PE,Av)=>{"use strict";var ls=document.getElementById("loader"),cs=ls&&ls.querySelector(".loader-name"),Ec=0,Jl=0,ef=!1,Sw=performance.now(),fs=.06,ss=0,wu=0,_v=!1,Aw=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Tw(e){if(!cs)return;let t=cs.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";cs.style.webkitMaskPosition=n,cs.style.maskPosition=n}function Ev(e){let t=Math.min(.05,wu?(e-wu)/1e3:.016);wu=e;let o=ef?.75:.22+(fs-ss)*1.2;if(ss=Math.min(fs,ss+Math.max(0,o)*t),Aw&&(ss=fs),Tw(ss),ef&&ss>=.999){_v||(_v=!0,setTimeout(Sv,650));return}requestAnimationFrame(Ev)}cs&&requestAnimationFrame(Ev);function Mv(){let e=Ec?Jl/Math.max(Ec,24):0;fs=Math.max(fs,Math.min(.9,.06+e*.84))}function Sv(){ls&&(ls.classList.add("done"),setTimeout(()=>ls.remove(),1400))}function _u(){ef||(ef=!0,window.__galleryReady=!0,ls&&(fs=1,cs||Sv()))}var kv=null;function Lw(){clearTimeout(kv),Jl>=Ec&&performance.now()-Sw>600&&(kv=setTimeout(()=>{Jl>=Ec&&_u()},450))}setTimeout(_u,2e4);var zw=e=>/(^|\/)(res|images)\//.test(e),Zl=window.fetch.bind(window);async function Nw(e,t){let o=await Zl(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!zw(o))return Zl(e,t);Ec++,Mv();let n=a=>(Jl++,Mv(),Lw(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=Nw(o,t).catch(()=>Zl(e,t)):r=Zl(e,t),r.then(n,a=>{throw n(),a})};Av.exports={finish:_u}});var na=ve((IE,Rv)=>{"use strict";var Lv=typeof navigator!="undefined"&&navigator.userAgent||"",Rw=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Ka=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Lv)||/Macintosh/.test(Lv)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||Rw,zv=typeof window!="undefined"&&window.devicePixelRatio||1,po={isPhone:Ka,pixelRatio:Ka?Math.min(zv,1.5):Math.min(zv,2),reflection:!Ka,gardenDetail:Ka?0:1,leafShare:Ka?.65:1,motion:!Ka,post:Ka?1:2,level:Ka?1:0};po.scale=1;var Cw=Ka?.55:.6,Sc=0,tf=0,Ac=0,Tc=0,hs=1,Lc=0,of=48,us=null,Mu=0;function Pw(e){us={fps:e,scale:po.scale},po.scale>.86?po.scale=.85:po.reflection?po.stepDown():po.scale>.71?po.scale=.7:po.stepDown()||(po.scale=Math.max(Cw,po.scale-.1))}var Nv=!0;try{/[?&]noadapt\b/.test(location.search)&&(Nv=!1)}catch(e){}po.frame=e=>{if(!Nv)return;if(!(e>0)||e>1){Sc=0,tf=0;return}if(Sc+=e,tf++,Sc<.75)return;let t=tf/Sc;if(Sc=0,tf=0,Lc>0&&(Lc-=.75,Lc<=0&&(hs=1)),us){if(t<us.fps*1.08&&us.scale>po.scale){if(++Mu>=2){po.scale=1,hs=1,Lc=0,of=Math.min(of,t*.85),Mu=0,Ac=0,us=null;return}}else Mu=0;us=null}if(t<of){if(Tc=0,++Ac>=2){if(Ac=0,po.scale>.61&&po.climbed){hs=po.scale-.05,Lc=40,po.scale=hs,po.climbed=!1;return}Pw(t)}}else t>Math.max(of*1.15,55)?(Ac=0,++Tc>=6&&po.scale<hs-.001?(po.scale=Math.min(hs,po.scale+.05),po.climbed=!0,Tc=0):Tc>=6&&(po.climbed=!1)):(Ac=0,Tc=0)};po.stepDown=()=>{if(po.reflection)po.reflection=!1;else if(po.gardenDetail>0||po.motion)po.gardenDetail=0,po.motion=!1,po.leafShare=Math.min(po.leafShare,.65);else if(po.post>0)po.post--;else return!1;return po.level++,!0};Rv.exports=po});var ku=ve((OE,Cv)=>{"use strict";Cv.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var nf=ve((FE,Ov)=>{"use strict";var xr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Pv='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Iv='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';xr.instagramUrl="https://instagram.com/"+xr.instagram;xr.mailUrl="mailto:"+xr.email+"?subject="+encodeURIComponent("Your paintings");xr.icons=e=>`
	<a class="${e}" href="${xr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${xr.instagram}" title="Instagram">${Pv}</a>
	<a class="${e}" href="${xr.mailUrl}" aria-label="Email ${xr.email}" title="Email">${Iv}</a>`;xr.line=e=>`
	<span class="${e}">
		<a href="${xr.instagramUrl}" target="_blank" rel="noopener">${Pv}<span>@${xr.instagram}</span></a>
		<a href="${xr.mailUrl}">${Iv}<span>${xr.email}</span></a>
	</span>`;Ov.exports=xr});var zc=ve((GE,Fv)=>{"use strict";Fv.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var Eu=ve(($E,Dv)=>{"use strict";var Iw=ku(),Ow=nf(),Gv=zc(),Fw=na(),x0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Gw=`
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
`,yr=null;function $w(e){if(yr){yr.hidden=!1,requestAnimationFrame(()=>yr.classList.add("on"));return}let t=document.createElement("style");t.textContent=Gw,document.head.appendChild(t);let o=!Fw.isPhone;yr=document.createElement("div"),yr.className="plist",yr.setAttribute("role","region"),yr.setAttribute("aria-label","All paintings"),yr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${Ow.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${Iw.map(r=>`
			<article class="plist-item" id="${x0(r.slug)}">
				<img loading="lazy" decoding="async" alt="${x0(r.title)}, ${x0(Gv(r))}"
					src="images/web/${x0(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${x0(r.file)}'">
				<p class="plist-meta">${x0(Gv(r))}</p>
				<h2>${x0(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${x0(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>yr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=yr.querySelector(".plist-close");n&&n.addEventListener("click",$v),document.body.appendChild(yr),requestAnimationFrame(()=>yr.classList.add("on"))}function $v(){yr&&(yr.classList.remove("on"),setTimeout(()=>{yr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Dv.exports={show:$w,hide:$v}});var qv=ve((Su,Au)=>{(function(e,t){typeof Su=="object"&&typeof Au!="undefined"?Au.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Su,function(){var e=function(){function t(u){return r.appendChild(u.dom),u}function o(u){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===u?"block":"none";n=u}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(u){u.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var u=(performance||Date).now();if(f.update(u-a,200),u>i+1e3&&(c.update(1e3*s/(u-i),100),i=u,s=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,l=3*s,u=2*s,h=3*s,d=15*s,p=74*s,v=30*s,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(t,l,u),g.fillRect(h,d,p,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,d,p,v),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,d),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",l,u),g.drawImage(m,h+s,d,p-s,v,h,d,p-s,v),g.fillRect(h+p-s,d,s,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+p-s,d,s,i((1-y/b)*v))}}},e})});var Hv=ve((Tu,Lu)=>{(function(e,t){typeof Tu=="object"&&typeof Lu!="undefined"?Lu.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(Tu,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,M){for(var N=Object.keys(M),J=0;J<N.length;++J)x[N[J]]=M[N[J]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var M=new Error("(regl) "+x);throw console.error(M),M}function a(x,M){x||r(M)}function i(x){return x?": "+x:""}function s(x,M,N){x in M||r("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(M).join())}function c(x,M){e(x)||r("invalid parameter type"+i(M)+". must be a typed array")}function f(x,M){switch(M){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,M,N){f(x,M)||r("invalid parameter type"+i(N)+". expected "+M+", got "+typeof x)}function u(x,M){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(M)+". must be a nonnegative integer")}function h(x,M,N){M.indexOf(x)<0&&r("invalid value"+i(N)+". must be one of: "+M)}var d=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function p(x){Object.keys(x).forEach(function(M){d.indexOf(M)<0&&r('invalid regl constructor argument "'+M+'". must be one of '+d)})}function v(x,M){for(x=x+"";x.length<M;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,M){this.number=x,this.line=M,this.errors=[]}function y(x,M,N){this.file=x,this.line=M,this.message=N}function b(){var x=new Error,M=(x.stack||x).toString(),N=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(M);if(N)return N[1];var J=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(M);return J?J[1]:"unknown"}function k(){var x=new Error,M=(x.stack||x).toString(),N=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(M);if(N)return N[1];var J=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(M);return J?J[1]:"unknown"}function E(x,M){var N=x.split(`
`),J=1,ce=0,Q={unknown:new m,0:new m};Q.unknown.name=Q[0].name=M||b(),Q.unknown.lines.push(new g(0,""));for(var oe=0;oe<N.length;++oe){var xe=N[oe],we=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(xe);if(we)switch(we[1]){case"line":var Ee=/(\d+)(\s+\d+)?/.exec(we[2]);Ee&&(J=Ee[1]|0,Ee[2]&&(ce=Ee[2]|0,ce in Q||(Q[ce]=new m)));break;case"define":var _e=/SHADER_NAME(_B64)?\s+(.*)$/.exec(we[2]);_e&&(Q[ce].name=_e[1]?n(_e[2]):_e[2]);break}Q[ce].lines.push(new g(J++,xe))}return Object.keys(Q).forEach(function(Te){var Fe=Q[Te];Fe.lines.forEach(function(ye){Fe.index[ye.number]=ye})}),Q}function L(x){var M=[];return x.split(`
`).forEach(function(N){if(!(N.length<5)){var J=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(N);J?M.push(new y(J[1]|0,J[2]|0,J[3].trim())):N.length>0&&M.push(new y("unknown",0,N))}}),M}function R(x,M){M.forEach(function(N){var J=x[N.file];if(J){var ce=J.index[N.line];if(ce){ce.errors.push(N),J.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(N)})}function W(x,M,N,J,ce){if(!x.getShaderParameter(M,x.COMPILE_STATUS)){var Q=x.getShaderInfoLog(M),oe=J===x.FRAGMENT_SHADER?"fragment":"vertex";Le(N,"string",oe+" shader source must be a string",ce);var xe=E(N,ce),we=L(Q);R(xe,we),Object.keys(xe).forEach(function(Ee){var _e=xe[Ee];if(!_e.hasErrors)return;var Te=[""],Fe=[""];function ye(Ne,U){Te.push(Ne),Fe.push(U||"")}ye("file number "+Ee+": "+_e.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),_e.lines.forEach(function(Ne){if(Ne.errors.length>0){ye(v(Ne.number,4)+"|  ","background-color:yellow; font-weight:bold"),ye(Ne.line+o,"color:red; background-color:yellow; font-weight:bold");var U=0;Ne.errors.forEach(function(ne){var ke=ne.message,qe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(ke);if(qe){var de=qe[1];switch(ke=qe[2],de){case"assign":de="=";break}U=Math.max(Ne.line.indexOf(de,U),0)}else U=0;ye(v("| ",6)),ye(v("^^^",U+3)+o,"font-weight:bold"),ye(v("| ",6)),ye(ke+o,"font-weight:bold")}),ye(v("| ",6)+o)}else ye(v(Ne.number,4)+"|  "),ye(Ne.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Fe[0]=Te.join("%c"),console.log.apply(console,Fe)):console.log(Te.join(""))}),a.raise("Error compiling "+oe+" shader, "+xe[0].name)}}function P(x,M,N,J,ce){if(!x.getProgramParameter(M,x.LINK_STATUS)){var Q=x.getProgramInfoLog(M),oe=E(N,ce),xe=E(J,ce),we='Error linking program with vertex shader, "'+xe[0].name+'", and fragment shader "'+oe[0].name+'"';typeof document!="undefined"?console.log("%c"+we+o+"%c"+Q,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(we+o+Q),a.raise(we)}}function te(x){x._commandRef=b()}function G(x,M,N,J){te(x);function ce(we){return we?J.id(we):0}x._fragId=ce(x.static.frag),x._vertId=ce(x.static.vert);function Q(we,Ee){Object.keys(Ee).forEach(function(_e){we[J.id(_e)]=!0})}var oe=x._uniformSet={};Q(oe,M.static),Q(oe,M.dynamic);var xe=x._attributeSet={};Q(xe,N.static),Q(xe,N.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function ae(x,M){var N=k();r(x+" in command "+(M||b())+(N==="unknown"?"":" called from "+N))}function D(x,M,N){x||ae(M,N||b())}function Y(x,M,N,J){x in M||ae("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(M).join(),J||b())}function Le(x,M,N,J){f(x,M)||ae("invalid parameter type"+i(N)+". expected "+M+", got "+typeof x,J||b())}function He(x){x()}function fe(x,M,N){x.texture?h(x.texture._texture.internalformat,M,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,N,"unsupported renderbuffer format for attachment")}var ie=33071,Ae=9728,ft=9984,Nt=9985,Mt=9986,ro=9987,St=5120,qt=5121,ko=5122,Fn=5123,Xe=5124,ut=5125,At=5126,Zt=32819,uo=32820,Tt=33635,dt=34042,ge=36193,et={};et[St]=et[qt]=1,et[ko]=et[Fn]=et[ge]=et[Tt]=et[Zt]=et[uo]=2,et[Xe]=et[ut]=et[At]=et[dt]=4;function Lt(x,M){return x===uo||x===Zt||x===Tt?2:x===dt?4:et[x]*M}function st(x){return!(x&x-1)&&!!x}function We(x,M,N){var J,ce=M.width,Q=M.height,oe=M.channels;a(ce>0&&ce<=N.maxTextureSize&&Q>0&&Q<=N.maxTextureSize,"invalid texture shape"),(x.wrapS!==ie||x.wrapT!==ie)&&a(st(ce)&&st(Q),"incompatible wrap mode for texture, both width and height must be power of 2"),M.mipmask===1?ce!==1&&Q!==1&&a(x.minFilter!==ft&&x.minFilter!==Mt&&x.minFilter!==Nt&&x.minFilter!==ro,"min filter requires mipmap"):(a(st(ce)&&st(Q),"texture must be a square power of 2 to support mipmapping"),a(M.mipmask===(ce<<1)-1,"missing or incomplete mipmap data")),M.type===At&&(N.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===Ae&&x.magFilter===Ae,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var xe=M.images;for(J=0;J<16;++J)if(xe[J]){var we=ce>>J,Ee=Q>>J;a(M.mipmask&1<<J,"missing mipmap data");var _e=xe[J];if(a(_e.width===we&&_e.height===Ee,"invalid shape for mip images"),a(_e.format===M.format&&_e.internalformat===M.internalformat&&_e.type===M.type,"incompatible type for mip image"),!_e.compressed)if(_e.data){var Te=Math.ceil(Lt(_e.type,oe)*we/_e.unpackAlignment)*_e.unpackAlignment;a(_e.data.byteLength===Te*Ee,"invalid data for image, buffer size is inconsistent with image format")}else _e.element||_e.copy}else x.genMipmaps||a((M.mipmask&1<<J)===0,"extra mipmap data");M.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function mo(x,M,N,J){var ce=x.width,Q=x.height,oe=x.channels;a(ce>0&&ce<=J.maxTextureSize&&Q>0&&Q<=J.maxTextureSize,"invalid texture shape"),a(ce===Q,"cube map must be square"),a(M.wrapS===ie&&M.wrapT===ie,"wrap mode not supported by cube map");for(var xe=0;xe<N.length;++xe){var we=N[xe];a(we.width===ce&&we.height===Q,"inconsistent cube map face shape"),M.genMipmaps&&(a(!we.compressed,"can not generate mipmap for compressed textures"),a(we.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Ee=we.images,_e=0;_e<16;++_e){var Te=Ee[_e];if(Te){var Fe=ce>>_e,ye=Q>>_e;a(we.mipmask&1<<_e,"missing mipmap data"),a(Te.width===Fe&&Te.height===ye,"invalid shape for mip images"),a(Te.format===x.format&&Te.internalformat===x.internalformat&&Te.type===x.type,"incompatible type for mip image"),Te.compressed||(Te.data?a(Te.data.byteLength===Fe*ye*Math.max(Lt(Te.type,oe),Te.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Te.element||Te.copy)}}}}var _=t(a,{optional:He,raise:r,commandRaise:ae,command:D,parameter:s,commandParameter:Y,constructor:p,type:l,commandType:Le,isTypedArray:c,nni:u,oneOf:h,shaderError:W,linkError:P,callSite:k,saveCommandRef:te,saveDrawInfo:G,framebufferFormat:fe,guessCommand:b,texture2D:We,textureCube:mo}),to=0,Wt=0,go=5,So=6;function ln(x,M){this.id=to++,this.type=x,this.data=M}function pr(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Gn(x){if(x.length===0)return[];var M=x.charAt(0),N=x.charAt(x.length-1);if(x.length>1&&M===N&&(M==='"'||M==="'"))return['"'+pr(x.substr(1,x.length-2))+'"'];var J=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(J)return Gn(x.substr(0,J.index)).concat(Gn(J[1])).concat(Gn(x.substr(J.index+J[0].length)));var ce=x.split(".");if(ce.length===1)return['"'+pr(x)+'"'];for(var Q=[],oe=0;oe<ce.length;++oe)Q=Q.concat(Gn(ce[oe]));return Q}function Ca(x){return"["+Gn(x).join("][")+"]"}function h0(x,M){return new ln(x,Ca(M+""))}function Bi(x){return typeof x=="function"&&!x._reglType||x instanceof ln}function K(x,M){if(typeof x=="function")return new ln(Wt,x);if(typeof x=="number"||typeof x=="boolean")return new ln(go,x);if(Array.isArray(x))return new ln(So,x.map((N,J)=>K(N,M+"["+J+"]")));if(x instanceof ln)return x;_(!1,"invalid option type in uniform "+M)}var Re={DynamicVariable:ln,define:h0,isDynamic:Bi,unbox:K,accessor:Ca},Oe={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},ze=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function nt(){var x={"":0},M=[""];return{id:function(N){var J=x[N];return J||(J=x[N]=M.length,M.push(N),J)},str:function(N){return M[N]}}}function bt(x,M,N){var J=document.createElement("canvas");t(J.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(J),x===document.body&&(J.style.position="absolute",t(x.style,{margin:0,padding:0}));function ce(){var xe=window.innerWidth,we=window.innerHeight;if(x!==document.body){var Ee=x.getBoundingClientRect();xe=Ee.right-Ee.left,we=Ee.bottom-Ee.top}J.width=N*xe,J.height=N*we,t(J.style,{width:xe+"px",height:we+"px"})}var Q;x!==document.body&&typeof ResizeObserver=="function"?(Q=new ResizeObserver(function(){setTimeout(ce)}),Q.observe(x)):window.addEventListener("resize",ce,!1);function oe(){Q?Q.disconnect():window.removeEventListener("resize",ce),x.removeChild(J)}return ce(),{canvas:J,onDestroy:oe}}function gt(x,M){function N(J){try{return x.getContext(J,M)}catch(ce){return null}}return N("webgl")||N("experimental-webgl")||N("webgl-experimental")}function ct(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function Rt(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function pt(x){return typeof x=="string"?x.split():(_(Array.isArray(x),"invalid extension array"),x)}function Ht(x){return typeof x=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function yt(x){var M=x||{},N,J,ce,Q,oe={},xe=[],we=[],Ee=typeof window=="undefined"?1:window.devicePixelRatio,_e=!1,Te=function(Ne){Ne&&_.raise(Ne)},Fe=function(){};if(typeof M=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),N=document.querySelector(M),_(N,"invalid query string for element")):typeof M=="object"?ct(M)?N=M:Rt(M)?(Q=M,ce=Q.canvas):(_.constructor(M),"gl"in M?Q=M.gl:"canvas"in M?ce=Ht(M.canvas):"container"in M&&(J=Ht(M.container)),"attributes"in M&&(oe=M.attributes,_.type(oe,"object","invalid context attributes")),"extensions"in M&&(xe=pt(M.extensions)),"optionalExtensions"in M&&(we=pt(M.optionalExtensions)),"onDone"in M&&(_.type(M.onDone,"function","invalid or missing onDone callback"),Te=M.onDone),"profile"in M&&(_e=!!M.profile),"pixelRatio"in M&&(Ee=+M.pixelRatio,_(Ee>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),N&&(N.nodeName.toLowerCase()==="canvas"?ce=N:J=N),!Q){if(!ce){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var ye=bt(J||document.body,Te,Ee);if(!ye)return null;ce=ye.canvas,Fe=ye.onDestroy}oe.premultipliedAlpha===void 0&&(oe.premultipliedAlpha=!0),Q=gt(ce,oe)}return Q?{gl:Q,canvas:ce,container:J,extensions:xe,optionalExtensions:we,pixelRatio:Ee,profile:_e,onDone:Te,onDestroy:Fe}:(Fe(),Te("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function wt(x,M){var N={};function J(oe){_.type(oe,"string","extension name must be string");var xe=oe.toLowerCase(),we;try{we=N[xe]=x.getExtension(xe)}catch(Ee){}return!!we}for(var ce=0;ce<M.extensions.length;++ce){var Q=M.extensions[ce];if(!J(Q))return M.onDestroy(),M.onDone('"'+Q+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return M.optionalExtensions.forEach(J),{extensions:N,restore:function(){Object.keys(N).forEach(function(oe){if(N[oe]&&!J(oe))throw new Error("(regl): error restoring extension "+oe)})}}}function Ut(x,M){for(var N=Array(x),J=0;J<x;++J)N[J]=M(J);return N}var lt=5120,oo=5121,_o=5122,vt=5123,Co=5124,Zr=5125,Wa=5126;function Kt(x){for(var M=16;M<=1<<28;M*=16)if(x<=M)return M;return 0}function so(x){var M,N;return M=(x>65535)<<4,x>>>=M,N=(x>255)<<3,x>>>=N,M|=N,N=(x>15)<<2,x>>>=N,M|=N,N=(x>3)<<1,x>>>=N,M|=N,M|x>>1}function Sn(){var x=Ut(8,function(){return[]});function M(Q){var oe=Kt(Q),xe=x[so(oe)>>2];return xe.length>0?xe.pop():new ArrayBuffer(oe)}function N(Q){x[so(Q.byteLength)>>2].push(Q)}function J(Q,oe){var xe=null;switch(Q){case lt:xe=new Int8Array(M(oe),0,oe);break;case oo:xe=new Uint8Array(M(oe),0,oe);break;case _o:xe=new Int16Array(M(2*oe),0,oe);break;case vt:xe=new Uint16Array(M(2*oe),0,oe);break;case Co:xe=new Int32Array(M(4*oe),0,oe);break;case Zr:xe=new Uint32Array(M(4*oe),0,oe);break;case Wa:xe=new Float32Array(M(4*oe),0,oe);break;default:return null}return xe.length!==oe?xe.subarray(0,oe):xe}function ce(Q){N(Q.buffer)}return{alloc:M,free:N,allocType:J,freeType:ce}}var B=Sn();B.zero=Sn();var he=3408,Be=3410,tt=3411,rt=3412,Wo=3413,Vn=3414,vr=3415,Vo=33901,sr=33902,Xo=3379,ao=3386,$n=34921,Fo=36347,An=36348,Lr=35661,zr=35660,Io=34930,Jr=36349,fn=34076,ga=34024,xo=7936,Yo=7937,ea=7938,Y0=35724,Pa=34047,K0=36063,Ml=34852,u0=3553,Ui=34067,ic=34069,Ah=33984,Va=6408,sc=5126,cr=5121,cc=36160,Q0=36053,cb=36064,lb=16384,fb=function(x,M){var N=1;M.ext_texture_filter_anisotropic&&(N=x.getParameter(Pa));var J=1,ce=1;M.webgl_draw_buffers&&(J=x.getParameter(Ml),ce=x.getParameter(K0));var Q=!!M.oes_texture_float;if(Q){var oe=x.createTexture();x.bindTexture(u0,oe),x.texImage2D(u0,0,Va,1,1,0,Va,sc,null);var xe=x.createFramebuffer();if(x.bindFramebuffer(cc,xe),x.framebufferTexture2D(cc,cb,u0,oe,0),x.bindTexture(u0,null),x.checkFramebufferStatus(cc)!==Q0)Q=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(lb);var we=B.allocType(sc,4);x.readPixels(0,0,1,1,Va,sc,we),x.getError()?Q=!1:(x.deleteFramebuffer(xe),x.deleteTexture(oe),Q=we[0]===1),B.freeType(we)}}var Ee=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),_e=!0;if(!Ee){var Te=x.createTexture(),Fe=B.allocType(cr,36);x.activeTexture(Ah),x.bindTexture(Ui,Te),x.texImage2D(ic,0,Va,3,3,0,Va,cr,Fe),B.freeType(Fe),x.bindTexture(Ui,null),x.deleteTexture(Te),_e=!x.getError()}return{colorBits:[x.getParameter(Be),x.getParameter(tt),x.getParameter(rt),x.getParameter(Wo)],depthBits:x.getParameter(Vn),stencilBits:x.getParameter(vr),subpixelBits:x.getParameter(he),extensions:Object.keys(M).filter(function(ye){return!!M[ye]}),maxAnisotropic:N,maxDrawbuffers:J,maxColorAttachments:ce,pointSizeDims:x.getParameter(Vo),lineWidthDims:x.getParameter(sr),maxViewportDims:x.getParameter(ao),maxCombinedTextureUnits:x.getParameter(Lr),maxCubeMapSize:x.getParameter(fn),maxRenderbufferSize:x.getParameter(ga),maxTextureUnits:x.getParameter(Io),maxTextureSize:x.getParameter(Xo),maxAttributes:x.getParameter($n),maxVertexUniforms:x.getParameter(Fo),maxVertexTextureUnits:x.getParameter(zr),maxVaryingVectors:x.getParameter(An),maxFragmentUniforms:x.getParameter(Jr),glsl:x.getParameter(Y0),renderer:x.getParameter(Yo),vendor:x.getParameter(xo),version:x.getParameter(ea),readFloat:Q,npotTextureCube:_e}};function xa(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var qr=function(x){return Object.keys(x).map(function(M){return x[M]})},kl={shape:pb,flatten:db};function hb(x,M,N){for(var J=0;J<M;++J)N[J]=x[J]}function ub(x,M,N,J){for(var ce=0,Q=0;Q<M;++Q)for(var oe=x[Q],xe=0;xe<N;++xe)J[ce++]=oe[xe]}function Pd(x,M,N,J,ce,Q){for(var oe=Q,xe=0;xe<M;++xe)for(var we=x[xe],Ee=0;Ee<N;++Ee)for(var _e=we[Ee],Te=0;Te<J;++Te)ce[oe++]=_e[Te]}function Id(x,M,N,J,ce){for(var Q=1,oe=N+1;oe<M.length;++oe)Q*=M[oe];var xe=M[N];if(M.length-N===4){var we=M[N+1],Ee=M[N+2],_e=M[N+3];for(oe=0;oe<xe;++oe)Pd(x[oe],we,Ee,_e,J,ce),ce+=Q}else for(oe=0;oe<xe;++oe)Id(x[oe],M,N+1,J,ce),ce+=Q}function db(x,M,N,J){var ce=1;if(M.length)for(var Q=0;Q<M.length;++Q)ce*=M[Q];else ce=0;var oe=J||B.allocType(N,ce);switch(M.length){case 0:break;case 1:hb(x,M[0],oe);break;case 2:ub(x,M[0],M[1],oe);break;case 3:Pd(x,M[0],M[1],M[2],oe,0);break;default:Id(x,M,0,oe,0)}return oe}function pb(x){for(var M=[],N=x;N.length;N=N[0])M.push(N.length);return M}var Th={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},vb=5120,mb=5122,gb=5124,xb=5121,yb=5123,bb=5125,wb=5126,_b=5126,Z0={int8:vb,int16:mb,int32:gb,uint8:xb,uint16:yb,uint32:bb,float:wb,float32:_b},Mb=35048,kb=35040,El={dynamic:Mb,stream:kb,static:35044},Lh=kl.flatten,Od=kl.shape,Fd=35044,Eb=35040,zh=5121,Nh=5126,d0=[];d0[5120]=1,d0[5122]=2,d0[5124]=4,d0[5121]=1,d0[5123]=2,d0[5125]=4,d0[5126]=4;function Sl(x){return Th[Object.prototype.toString.call(x)]|0}function Gd(x,M){for(var N=0;N<M.length;++N)x[N]=M[N]}function $d(x,M,N,J,ce,Q,oe){for(var xe=0,we=0;we<N;++we)for(var Ee=0;Ee<J;++Ee)x[xe++]=M[ce*we+Q*Ee+oe]}function Sb(x,M,N,J){var ce=0,Q={};function oe(U){this.id=ce++,this.buffer=x.createBuffer(),this.type=U,this.usage=Fd,this.byteLength=0,this.dimension=1,this.dtype=zh,this.persistentData=null,N.profile&&(this.stats={size:0})}oe.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},oe.prototype.destroy=function(){Fe(this)};var xe=[];function we(U,ne){var ke=xe.pop();return ke||(ke=new oe(U)),ke.bind(),Te(ke,ne,Eb,0,1,!1),ke}function Ee(U){xe.push(U)}function _e(U,ne,ke){U.byteLength=ne.byteLength,x.bufferData(U.type,ne,ke)}function Te(U,ne,ke,qe,de,Ue){var me;if(U.usage=ke,Array.isArray(ne)){if(U.dtype=qe||Nh,ne.length>0){var Ce;if(Array.isArray(ne[0])){me=Od(ne);for(var pe=1,Pe=1;Pe<me.length;++Pe)pe*=me[Pe];U.dimension=pe,Ce=Lh(ne,me,U.dtype),_e(U,Ce,ke),Ue?U.persistentData=Ce:B.freeType(Ce)}else if(typeof ne[0]=="number"){U.dimension=de;var ht=B.allocType(U.dtype,ne.length);Gd(ht,ne),_e(U,ht,ke),Ue?U.persistentData=ht:B.freeType(ht)}else e(ne[0])?(U.dimension=ne[0].length,U.dtype=qe||Sl(ne[0])||Nh,Ce=Lh(ne,[ne.length,ne[0].length],U.dtype),_e(U,Ce,ke),Ue?U.persistentData=Ce:B.freeType(Ce)):_.raise("invalid buffer data")}}else if(e(ne))U.dtype=qe||Sl(ne),U.dimension=de,_e(U,ne,ke),Ue&&(U.persistentData=new Uint8Array(new Uint8Array(ne.buffer)));else if(xa(ne)){me=ne.shape;var zt=ne.stride,Ge=ne.offset,Se=0,ue=0,kt=0,Gt=0;me.length===1?(Se=me[0],ue=1,kt=zt[0],Gt=0):me.length===2?(Se=me[0],ue=me[1],kt=zt[0],Gt=zt[1]):_.raise("invalid shape"),U.dtype=qe||Sl(ne.data)||Nh,U.dimension=ue;var Ke=B.allocType(U.dtype,Se*ue);$d(Ke,ne.data,Se,ue,kt,Gt,Ge),_e(U,Ke,ke),Ue?U.persistentData=Ke:B.freeType(Ke)}else ne instanceof ArrayBuffer?(U.dtype=zh,U.dimension=de,_e(U,ne,ke),Ue&&(U.persistentData=new Uint8Array(new Uint8Array(ne)))):_.raise("invalid buffer data")}function Fe(U){M.bufferCount--,J(U);var ne=U.buffer;_(ne,"buffer must not be deleted already"),x.deleteBuffer(ne),U.buffer=null,delete Q[U.id]}function ye(U,ne,ke,qe){M.bufferCount++;var de=new oe(ne);Q[de.id]=de;function Ue(pe){var Pe=Fd,ht=null,zt=0,Ge=0,Se=1;return Array.isArray(pe)||e(pe)||xa(pe)||pe instanceof ArrayBuffer?ht=pe:typeof pe=="number"?zt=pe|0:pe&&(_.type(pe,"object","buffer arguments must be an object, a number or an array"),"data"in pe&&(_(ht===null||Array.isArray(ht)||e(ht)||xa(ht),"invalid data for buffer"),ht=pe.data),"usage"in pe&&(_.parameter(pe.usage,El,"invalid buffer usage"),Pe=El[pe.usage]),"type"in pe&&(_.parameter(pe.type,Z0,"invalid buffer type"),Ge=Z0[pe.type]),"dimension"in pe&&(_.type(pe.dimension,"number","invalid dimension"),Se=pe.dimension|0),"length"in pe&&(_.nni(zt,"buffer length must be a nonnegative integer"),zt=pe.length|0)),de.bind(),ht?Te(de,ht,Pe,Ge,Se,qe):(zt&&x.bufferData(de.type,zt,Pe),de.dtype=Ge||zh,de.usage=Pe,de.dimension=Se,de.byteLength=zt),N.profile&&(de.stats.size=de.byteLength*d0[de.dtype]),Ue}function me(pe,Pe){_(Pe+pe.byteLength<=de.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+pe.byteLength+" starting from offset "+Pe+" to a buffer of size "+de.byteLength),x.bufferSubData(de.type,Pe,pe)}function Ce(pe,Pe){var ht=(Pe||0)|0,zt;if(de.bind(),e(pe)||pe instanceof ArrayBuffer)me(pe,ht);else if(Array.isArray(pe)){if(pe.length>0)if(typeof pe[0]=="number"){var Ge=B.allocType(de.dtype,pe.length);Gd(Ge,pe),me(Ge,ht),B.freeType(Ge)}else if(Array.isArray(pe[0])||e(pe[0])){zt=Od(pe);var Se=Lh(pe,zt,de.dtype);me(Se,ht),B.freeType(Se)}else _.raise("invalid buffer data")}else if(xa(pe)){zt=pe.shape;var ue=pe.stride,kt=0,Gt=0,Ke=0,Vt=0;zt.length===1?(kt=zt[0],Gt=1,Ke=ue[0],Vt=0):zt.length===2?(kt=zt[0],Gt=zt[1],Ke=ue[0],Vt=ue[1]):_.raise("invalid shape");var Ct=Array.isArray(pe.data)?de.dtype:Sl(pe.data),Bt=B.allocType(Ct,kt*Gt);$d(Bt,pe.data,kt,Gt,Ke,Vt,pe.offset),me(Bt,ht),B.freeType(Bt)}else _.raise("invalid data for buffer subdata");return Ue}return ke||Ue(U),Ue._reglType="buffer",Ue._buffer=de,Ue.subdata=Ce,N.profile&&(Ue.stats=de.stats),Ue.destroy=function(){Fe(de)},Ue}function Ne(){qr(Q).forEach(function(U){U.buffer=x.createBuffer(),x.bindBuffer(U.type,U.buffer),x.bufferData(U.type,U.persistentData||U.byteLength,U.usage)})}return N.profile&&(M.getTotalBufferSize=function(){var U=0;return Object.keys(Q).forEach(function(ne){U+=Q[ne].stats.size}),U}),{create:ye,createStream:we,destroyStream:Ee,clear:function(){qr(Q).forEach(Fe),xe.forEach(Fe)},getBuffer:function(U){return U&&U._buffer instanceof oe?U._buffer:null},restore:Ne,_initBuffer:Te}}var Ab=0,Tb=0,Lb=1,zb=1,Nb=4,Rb=4,ji={points:Ab,point:Tb,lines:Lb,line:zb,triangles:Nb,triangle:Rb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Cb=0,Pb=1,lc=4,Ib=5120,Wi=5121,Dd=5122,Vi=5123,qd=5124,J0=5125,Rh=34963,Ob=35040,Fb=35044;function Gb(x,M,N,J){var ce={},Q=0,oe={uint8:Wi,uint16:Vi};M.oes_element_index_uint&&(oe.uint32=J0);function xe(Ne){this.id=Q++,ce[this.id]=this,this.buffer=Ne,this.primType=lc,this.vertCount=0,this.type=0}xe.prototype.bind=function(){this.buffer.bind()};var we=[];function Ee(Ne){var U=we.pop();return U||(U=new xe(N.create(null,Rh,!0,!1)._buffer)),Te(U,Ne,Ob,-1,-1,0,0),U}function _e(Ne){we.push(Ne)}function Te(Ne,U,ne,ke,qe,de,Ue){Ne.buffer.bind();var me;if(U){var Ce=Ue;!Ue&&(!e(U)||xa(U)&&!e(U.data))&&(Ce=M.oes_element_index_uint?J0:Vi),N._initBuffer(Ne.buffer,U,ne,Ce,3)}else x.bufferData(Rh,de,ne),Ne.buffer.dtype=me||Wi,Ne.buffer.usage=ne,Ne.buffer.dimension=3,Ne.buffer.byteLength=de;if(me=Ue,!Ue){switch(Ne.buffer.dtype){case Wi:case Ib:me=Wi;break;case Vi:case Dd:me=Vi;break;case J0:case qd:me=J0;break;default:_.raise("unsupported type for element array")}Ne.buffer.dtype=me}Ne.type=me,_(me!==J0||!!M.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var pe=qe;pe<0&&(pe=Ne.buffer.byteLength,me===Vi?pe>>=1:me===J0&&(pe>>=2)),Ne.vertCount=pe;var Pe=ke;if(ke<0){Pe=lc;var ht=Ne.buffer.dimension;ht===1&&(Pe=Cb),ht===2&&(Pe=Pb),ht===3&&(Pe=lc)}Ne.primType=Pe}function Fe(Ne){J.elementsCount--,_(Ne.buffer!==null,"must not double destroy elements"),delete ce[Ne.id],Ne.buffer.destroy(),Ne.buffer=null}function ye(Ne,U){var ne=N.create(null,Rh,!0),ke=new xe(ne._buffer);J.elementsCount++;function qe(de){if(!de)ne(),ke.primType=lc,ke.vertCount=0,ke.type=Wi;else if(typeof de=="number")ne(de),ke.primType=lc,ke.vertCount=de|0,ke.type=Wi;else{var Ue=null,me=Fb,Ce=-1,pe=-1,Pe=0,ht=0;Array.isArray(de)||e(de)||xa(de)?Ue=de:(_.type(de,"object","invalid arguments for elements"),"data"in de&&(Ue=de.data,_(Array.isArray(Ue)||e(Ue)||xa(Ue),"invalid data for element buffer")),"usage"in de&&(_.parameter(de.usage,El,"invalid element buffer usage"),me=El[de.usage]),"primitive"in de&&(_.parameter(de.primitive,ji,"invalid element buffer primitive"),Ce=ji[de.primitive]),"count"in de&&(_(typeof de.count=="number"&&de.count>=0,"invalid vertex count for elements"),pe=de.count|0),"type"in de&&(_.parameter(de.type,oe,"invalid buffer type"),ht=oe[de.type]),"length"in de?Pe=de.length|0:(Pe=pe,ht===Vi||ht===Dd?Pe*=2:(ht===J0||ht===qd)&&(Pe*=4))),Te(ke,Ue,me,Ce,pe,Pe,ht)}return qe}return qe(Ne),qe._reglType="elements",qe._elements=ke,qe.subdata=function(de,Ue){return ne.subdata(de,Ue),qe},qe.destroy=function(){Fe(ke)},qe}return{create:ye,createStream:Ee,destroyStream:_e,getElements:function(Ne){return typeof Ne=="function"&&Ne._elements instanceof xe?Ne._elements:null},clear:function(){qr(ce).forEach(Fe)}}}var Hd=new Float32Array(1),$b=new Uint32Array(Hd.buffer),Db=5123;function Bd(x){for(var M=B.allocType(Db,x.length),N=0;N<x.length;++N)if(isNaN(x[N]))M[N]=65535;else if(x[N]===1/0)M[N]=31744;else if(x[N]===-1/0)M[N]=64512;else{Hd[0]=x[N];var J=$b[0],ce=J>>>31<<15,Q=(J<<1>>>24)-127,oe=J>>13&1023;if(Q<-24)M[N]=ce;else if(Q<-14){var xe=-14-Q;M[N]=ce+(oe+1024>>xe)}else Q>15?M[N]=ce+31744:M[N]=ce+(Q+15<<10)+oe}return M}function on(x){return Array.isArray(x)||e(x)}var Ud=function(x){return!(x&x-1)&&!!x},qb=34467,Ia=3553,Ch=34067,Al=34069,ei=6408,Ph=6406,Tl=6407,fc=6409,Ll=6410,jd=32854,Ih=32855,Wd=36194,Hb=32819,Bb=32820,Ub=33635,jb=34042,Oh=6402,zl=34041,Fh=35904,Gh=35906,Xi=36193,$h=33776,Dh=33777,qh=33778,Hh=33779,Vd=35986,Xd=35987,Yd=34798,Kd=35840,Qd=35841,Zd=35842,Jd=35843,ep=36196,Yi=5121,Bh=5123,Uh=5125,hc=5126,Wb=10242,Vb=10243,Xb=10497,jh=33071,Yb=33648,Kb=10240,Qb=10241,Wh=9728,Zb=9729,Vh=9984,tp=9985,op=9986,Xh=9987,Jb=33170,Nl=4352,e5=4353,t5=4354,o5=34046,n5=3317,r5=37440,a5=37441,i5=37443,np=37444,uc=33984,s5=[Vh,op,tp,Xh],Rl=[0,fc,Ll,Tl,ei],ta={};ta[fc]=ta[Ph]=ta[Oh]=1,ta[zl]=ta[Ll]=2,ta[Tl]=ta[Fh]=3,ta[ei]=ta[Gh]=4;function Ki(x){return"[object "+x+"]"}var rp=Ki("HTMLCanvasElement"),ap=Ki("OffscreenCanvas"),ip=Ki("CanvasRenderingContext2D"),sp=Ki("ImageBitmap"),cp=Ki("HTMLImageElement"),lp=Ki("HTMLVideoElement"),c5=Object.keys(Th).concat([rp,ap,ip,sp,cp,lp]),Qi=[];Qi[Yi]=1,Qi[hc]=4,Qi[Xi]=2,Qi[Bh]=2,Qi[Uh]=4;var Xn=[];Xn[jd]=2,Xn[Ih]=2,Xn[Wd]=2,Xn[zl]=4,Xn[$h]=.5,Xn[Dh]=.5,Xn[qh]=1,Xn[Hh]=1,Xn[Vd]=.5,Xn[Xd]=1,Xn[Yd]=1,Xn[Kd]=.5,Xn[Qd]=.25,Xn[Zd]=.5,Xn[Jd]=.25,Xn[ep]=.5;function fp(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function hp(x){if(!Array.isArray(x))return!1;var M=x.length;return!(M===0||!on(x[0]))}function ti(x){return Object.prototype.toString.call(x)}function up(x){return ti(x)===rp}function dp(x){return ti(x)===ap}function l5(x){return ti(x)===ip}function f5(x){return ti(x)===sp}function h5(x){return ti(x)===cp}function u5(x){return ti(x)===lp}function Yh(x){if(!x)return!1;var M=ti(x);return c5.indexOf(M)>=0?!0:fp(x)||hp(x)||xa(x)}function pp(x){return Th[Object.prototype.toString.call(x)]|0}function d5(x,M){var N=M.length;switch(x.type){case Yi:case Bh:case Uh:case hc:var J=B.allocType(x.type,N);J.set(M),x.data=J;break;case Xi:x.data=Bd(M);break;default:_.raise("unsupported texture type, must specify a typed array")}}function vp(x,M){return B.allocType(x.type===Xi?hc:x.type,M)}function mp(x,M){x.type===Xi?(x.data=Bd(M),B.freeType(M)):x.data=M}function p5(x,M,N,J,ce,Q){for(var oe=x.width,xe=x.height,we=x.channels,Ee=oe*xe*we,_e=vp(x,Ee),Te=0,Fe=0;Fe<xe;++Fe)for(var ye=0;ye<oe;++ye)for(var Ne=0;Ne<we;++Ne)_e[Te++]=M[N*ye+J*Fe+ce*Ne+Q];mp(x,_e)}function Cl(x,M,N,J,ce,Q){var oe;if(typeof Xn[x]!="undefined"?oe=Xn[x]:oe=ta[x]*Qi[M],Q&&(oe*=6),ce){for(var xe=0,we=N;we>=1;)xe+=oe*we*we,we/=2;return xe}else return oe*N*J}function v5(x,M,N,J,ce,Q,oe){var xe={"don't care":Nl,"dont care":Nl,nice:t5,fast:e5},we={repeat:Xb,clamp:jh,mirror:Yb},Ee={nearest:Wh,linear:Zb},_e=t({mipmap:Xh,"nearest mipmap nearest":Vh,"linear mipmap nearest":tp,"nearest mipmap linear":op,"linear mipmap linear":Xh},Ee),Te={none:0,browser:np},Fe={uint8:Yi,rgba4:Hb,rgb565:Ub,"rgb5 a1":Bb},ye={alpha:Ph,luminance:fc,"luminance alpha":Ll,rgb:Tl,rgba:ei,rgba4:jd,"rgb5 a1":Ih,rgb565:Wd},Ne={};M.ext_srgb&&(ye.srgb=Fh,ye.srgba=Gh),M.oes_texture_float&&(Fe.float32=Fe.float=hc),M.oes_texture_half_float&&(Fe.float16=Fe["half float"]=Xi),M.webgl_depth_texture&&(t(ye,{depth:Oh,"depth stencil":zl}),t(Fe,{uint16:Bh,uint32:Uh,"depth stencil":jb})),M.webgl_compressed_texture_s3tc&&t(Ne,{"rgb s3tc dxt1":$h,"rgba s3tc dxt1":Dh,"rgba s3tc dxt3":qh,"rgba s3tc dxt5":Hh}),M.webgl_compressed_texture_atc&&t(Ne,{"rgb atc":Vd,"rgba atc explicit alpha":Xd,"rgba atc interpolated alpha":Yd}),M.webgl_compressed_texture_pvrtc&&t(Ne,{"rgb pvrtc 4bppv1":Kd,"rgb pvrtc 2bppv1":Qd,"rgba pvrtc 4bppv1":Zd,"rgba pvrtc 2bppv1":Jd}),M.webgl_compressed_texture_etc1&&(Ne["rgb etc1"]=ep);var U=Array.prototype.slice.call(x.getParameter(qb));Object.keys(Ne).forEach(function(z){var ee=Ne[z];U.indexOf(ee)>=0&&(ye[z]=ee)});var ne=Object.keys(ye);N.textureFormats=ne;var ke=[];Object.keys(ye).forEach(function(z){var ee=ye[z];ke[ee]=z});var qe=[];Object.keys(Fe).forEach(function(z){var ee=Fe[z];qe[ee]=z});var de=[];Object.keys(Ee).forEach(function(z){var ee=Ee[z];de[ee]=z});var Ue=[];Object.keys(_e).forEach(function(z){var ee=_e[z];Ue[ee]=z});var me=[];Object.keys(we).forEach(function(z){var ee=we[z];me[ee]=z});var Ce=ne.reduce(function(z,ee){var X=ye[ee];return X===fc||X===Ph||X===fc||X===Ll||X===Oh||X===zl||M.ext_srgb&&(X===Fh||X===Gh)?z[X]=X:X===Ih||ee.indexOf("rgba")>=0?z[X]=ei:z[X]=Tl,z},{});function pe(){this.internalformat=ei,this.format=ei,this.type=Yi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=np,this.width=0,this.height=0,this.channels=0}function Pe(z,ee){z.internalformat=ee.internalformat,z.format=ee.format,z.type=ee.type,z.compressed=ee.compressed,z.premultiplyAlpha=ee.premultiplyAlpha,z.flipY=ee.flipY,z.unpackAlignment=ee.unpackAlignment,z.colorSpace=ee.colorSpace,z.width=ee.width,z.height=ee.height,z.channels=ee.channels}function ht(z,ee){if(!(typeof ee!="object"||!ee)){if("premultiplyAlpha"in ee&&(_.type(ee.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),z.premultiplyAlpha=ee.premultiplyAlpha),"flipY"in ee&&(_.type(ee.flipY,"boolean","invalid texture flip"),z.flipY=ee.flipY),"alignment"in ee&&(_.oneOf(ee.alignment,[1,2,4,8],"invalid texture unpack alignment"),z.unpackAlignment=ee.alignment),"colorSpace"in ee&&(_.parameter(ee.colorSpace,Te,"invalid colorSpace"),z.colorSpace=Te[ee.colorSpace]),"type"in ee){var X=ee.type;_(M.oes_texture_float||!(X==="float"||X==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(M.oes_texture_half_float||!(X==="half float"||X==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(M.webgl_depth_texture||!(X==="uint16"||X==="uint32"||X==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(X,Fe,"invalid texture type"),z.type=Fe[X]}var Ve=z.width,Xt=z.height,A=z.channels,w=!1;"shape"in ee?(_(Array.isArray(ee.shape)&&ee.shape.length>=2,"shape must be an array"),Ve=ee.shape[0],Xt=ee.shape[1],ee.shape.length===3&&(A=ee.shape[2],_(A>0&&A<=4,"invalid number of channels"),w=!0),_(Ve>=0&&Ve<=N.maxTextureSize,"invalid width"),_(Xt>=0&&Xt<=N.maxTextureSize,"invalid height")):("radius"in ee&&(Ve=Xt=ee.radius,_(Ve>=0&&Ve<=N.maxTextureSize,"invalid radius")),"width"in ee&&(Ve=ee.width,_(Ve>=0&&Ve<=N.maxTextureSize,"invalid width")),"height"in ee&&(Xt=ee.height,_(Xt>=0&&Xt<=N.maxTextureSize,"invalid height")),"channels"in ee&&(A=ee.channels,_(A>0&&A<=4,"invalid number of channels"),w=!0)),z.width=Ve|0,z.height=Xt|0,z.channels=A|0;var I=!1;if("format"in ee){var H=ee.format;_(M.webgl_depth_texture||!(H==="depth"||H==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(H,ye,"invalid texture format");var j=z.internalformat=ye[H];z.format=Ce[j],H in Fe&&("type"in ee||(z.type=Fe[H])),H in Ne&&(z.compressed=!0),I=!0}!w&&I?z.channels=ta[z.format]:w&&!I?z.channels!==Rl[z.format]&&(z.format=z.internalformat=Rl[z.channels]):I&&w&&_(z.channels===ta[z.format],"number of channels inconsistent with specified format")}}function zt(z){x.pixelStorei(r5,z.flipY),x.pixelStorei(a5,z.premultiplyAlpha),x.pixelStorei(i5,z.colorSpace),x.pixelStorei(n5,z.unpackAlignment)}function Ge(){pe.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Se(z,ee){var X=null;if(Yh(ee)?X=ee:ee&&(_.type(ee,"object","invalid pixel data type"),ht(z,ee),"x"in ee&&(z.xOffset=ee.x|0),"y"in ee&&(z.yOffset=ee.y|0),Yh(ee.data)&&(X=ee.data)),_(!z.compressed||X instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ee.copy){_(!X,"can not specify copy and data field for the same texture");var Ve=ce.viewportWidth,Xt=ce.viewportHeight;z.width=z.width||Ve-z.xOffset,z.height=z.height||Xt-z.yOffset,z.needsCopy=!0,_(z.xOffset>=0&&z.xOffset<Ve&&z.yOffset>=0&&z.yOffset<Xt&&z.width>0&&z.width<=Ve&&z.height>0&&z.height<=Xt,"copy texture read out of bounds")}else if(!X)z.width=z.width||1,z.height=z.height||1,z.channels=z.channels||4;else if(e(X))z.channels=z.channels||4,z.data=X,!("type"in ee)&&z.type===Yi&&(z.type=pp(X));else if(fp(X))z.channels=z.channels||4,d5(z,X),z.alignment=1,z.needsFree=!0;else if(xa(X)){var A=X.data;!Array.isArray(A)&&z.type===Yi&&(z.type=pp(A));var w=X.shape,I=X.stride,H,j,F,O,$,T;w.length===3?(F=w[2],T=I[2]):(_(w.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,T=1),H=w[0],j=w[1],O=I[0],$=I[1],z.alignment=1,z.width=H,z.height=j,z.channels=F,z.format=z.internalformat=Rl[F],z.needsFree=!0,p5(z,A,O,$,T,X.offset)}else if(up(X)||dp(X)||l5(X))up(X)||dp(X)?z.element=X:z.element=X.canvas,z.width=z.element.width,z.height=z.element.height,z.channels=4;else if(f5(X))z.element=X,z.width=X.width,z.height=X.height,z.channels=4;else if(h5(X))z.element=X,z.width=X.naturalWidth,z.height=X.naturalHeight,z.channels=4;else if(u5(X))z.element=X,z.width=X.videoWidth,z.height=X.videoHeight,z.channels=4;else if(hp(X)){var C=z.width||X[0].length,S=z.height||X.length,q=z.channels;on(X[0][0])?q=q||X[0][0].length:q=q||1;for(var V=kl.shape(X),se=1,le=0;le<V.length;++le)se*=V[le];var re=vp(z,se);kl.flatten(X,V,"",re),mp(z,re),z.alignment=1,z.width=C,z.height=S,z.channels=q,z.format=z.internalformat=Rl[q],z.needsFree=!0}z.type===hc?_(N.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):z.type===Xi&&_(N.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ue(z,ee,X){var Ve=z.element,Xt=z.data,A=z.internalformat,w=z.format,I=z.type,H=z.width,j=z.height;zt(z),Ve?x.texImage2D(ee,X,w,w,I,Ve):z.compressed?x.compressedTexImage2D(ee,X,A,H,j,0,Xt):z.needsCopy?(J(),x.copyTexImage2D(ee,X,w,z.xOffset,z.yOffset,H,j,0)):x.texImage2D(ee,X,w,H,j,0,w,I,Xt||null)}function kt(z,ee,X,Ve,Xt){var A=z.element,w=z.data,I=z.internalformat,H=z.format,j=z.type,F=z.width,O=z.height;zt(z),A?x.texSubImage2D(ee,Xt,X,Ve,H,j,A):z.compressed?x.compressedTexSubImage2D(ee,Xt,X,Ve,I,F,O,w):z.needsCopy?(J(),x.copyTexSubImage2D(ee,Xt,X,Ve,z.xOffset,z.yOffset,F,O)):x.texSubImage2D(ee,Xt,X,Ve,F,O,H,j,w)}var Gt=[];function Ke(){return Gt.pop()||new Ge}function Vt(z){z.needsFree&&B.freeType(z.data),Ge.call(z),Gt.push(z)}function Ct(){pe.call(this),this.genMipmaps=!1,this.mipmapHint=Nl,this.mipmask=0,this.images=Array(16)}function Bt(z,ee,X){var Ve=z.images[0]=Ke();z.mipmask=1,Ve.width=z.width=ee,Ve.height=z.height=X,Ve.channels=z.channels=4}function fo(z,ee){var X=null;if(Yh(ee))X=z.images[0]=Ke(),Pe(X,z),Se(X,ee),z.mipmask=1;else if(ht(z,ee),Array.isArray(ee.mipmap))for(var Ve=ee.mipmap,Xt=0;Xt<Ve.length;++Xt)X=z.images[Xt]=Ke(),Pe(X,z),X.width>>=Xt,X.height>>=Xt,Se(X,Ve[Xt]),z.mipmask|=1<<Xt;else X=z.images[0]=Ke(),Pe(X,z),Se(X,ee),z.mipmask=1;Pe(z,z.images[0]),z.compressed&&(z.internalformat===$h||z.internalformat===Dh||z.internalformat===qh||z.internalformat===Hh)&&_(z.width%4===0&&z.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function un(z,ee){for(var X=z.images,Ve=0;Ve<X.length;++Ve){if(!X[Ve])return;ue(X[Ve],ee,Ve)}}var Tn=[];function Jt(){var z=Tn.pop()||new Ct;pe.call(z),z.mipmask=0;for(var ee=0;ee<16;++ee)z.images[ee]=null;return z}function yn(z){for(var ee=z.images,X=0;X<ee.length;++X)ee[X]&&Vt(ee[X]),ee[X]=null;Tn.push(z)}function Go(){this.minFilter=Wh,this.magFilter=Wh,this.wrapS=jh,this.wrapT=jh,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Nl}function dn(z,ee){if("min"in ee){var X=ee.min;_.parameter(X,_e),z.minFilter=_e[X],s5.indexOf(z.minFilter)>=0&&!("faces"in ee)&&(z.genMipmaps=!0)}if("mag"in ee){var Ve=ee.mag;_.parameter(Ve,Ee),z.magFilter=Ee[Ve]}var Xt=z.wrapS,A=z.wrapT;if("wrap"in ee){var w=ee.wrap;typeof w=="string"?(_.parameter(w,we),Xt=A=we[w]):Array.isArray(w)&&(_.parameter(w[0],we),_.parameter(w[1],we),Xt=we[w[0]],A=we[w[1]])}else{if("wrapS"in ee){var I=ee.wrapS;_.parameter(I,we),Xt=we[I]}if("wrapT"in ee){var H=ee.wrapT;_.parameter(H,we),A=we[H]}}if(z.wrapS=Xt,z.wrapT=A,"anisotropic"in ee){var j=ee.anisotropic;_(typeof j=="number"&&j>=1&&j<=N.maxAnisotropic,"aniso samples must be between 1 and "),z.anisotropic=ee.anisotropic}if("mipmap"in ee){var F=!1;switch(typeof ee.mipmap){case"string":_.parameter(ee.mipmap,xe,"invalid mipmap hint"),z.mipmapHint=xe[ee.mipmap],z.genMipmaps=!0,F=!0;break;case"boolean":F=z.genMipmaps=ee.mipmap;break;case"object":_(Array.isArray(ee.mipmap),"invalid mipmap type"),z.genMipmaps=!1,F=!0;break;default:_.raise("invalid mipmap type")}F&&!("min"in ee)&&(z.minFilter=Vh)}}function bn(z,ee){x.texParameteri(ee,Qb,z.minFilter),x.texParameteri(ee,Kb,z.magFilter),x.texParameteri(ee,Wb,z.wrapS),x.texParameteri(ee,Vb,z.wrapT),M.ext_texture_filter_anisotropic&&x.texParameteri(ee,o5,z.anisotropic),z.genMipmaps&&(x.hint(Jb,z.mipmapHint),x.generateMipmap(ee))}var wn=0,Dn={},Yn=N.maxTextureUnits,nn=Array(Yn).map(function(){return null});function $t(z){pe.call(this),this.mipmask=0,this.internalformat=ei,this.id=wn++,this.refCount=1,this.target=z,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Go,oe.profile&&(this.stats={size:0})}function Kn(z){x.activeTexture(uc),x.bindTexture(z.target,z.texture)}function yo(){var z=nn[0];z?x.bindTexture(z.target,z.texture):x.bindTexture(Ia,null)}function mt(z){var ee=z.texture;_(ee,"must not double destroy texture");var X=z.unit,Ve=z.target;X>=0&&(x.activeTexture(uc+X),x.bindTexture(Ve,null),nn[X]=null),x.deleteTexture(ee),z.texture=null,z.params=null,z.pixels=null,z.refCount=0,delete Dn[z.id],Q.textureCount--}t($t.prototype,{bind:function(){var z=this;z.bindCount+=1;var ee=z.unit;if(ee<0){for(var X=0;X<Yn;++X){var Ve=nn[X];if(Ve){if(Ve.bindCount>0)continue;Ve.unit=-1}nn[X]=z,ee=X;break}ee>=Yn&&_.raise("insufficient number of texture units"),oe.profile&&Q.maxTextureUnits<ee+1&&(Q.maxTextureUnits=ee+1),z.unit=ee,x.activeTexture(uc+ee),x.bindTexture(z.target,z.texture)}return ee},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&mt(this)}});function Qt(z,ee){var X=new $t(Ia);Dn[X.id]=X,Q.textureCount++;function Ve(w,I){var H=X.texInfo;Go.call(H);var j=Jt();return typeof w=="number"?typeof I=="number"?Bt(j,w|0,I|0):Bt(j,w|0,w|0):w?(_.type(w,"object","invalid arguments to regl.texture"),dn(H,w),fo(j,w)):Bt(j,1,1),H.genMipmaps&&(j.mipmask=(j.width<<1)-1),X.mipmask=j.mipmask,Pe(X,j),_.texture2D(H,j,N),X.internalformat=j.internalformat,Ve.width=j.width,Ve.height=j.height,Kn(X),un(j,Ia),bn(H,Ia),yo(),yn(j),oe.profile&&(X.stats.size=Cl(X.internalformat,X.type,j.width,j.height,H.genMipmaps,!1)),Ve.format=ke[X.internalformat],Ve.type=qe[X.type],Ve.mag=de[H.magFilter],Ve.min=Ue[H.minFilter],Ve.wrapS=me[H.wrapS],Ve.wrapT=me[H.wrapT],Ve}function Xt(w,I,H,j){_(!!w,"must specify image data");var F=I|0,O=H|0,$=j|0,T=Ke();return Pe(T,X),T.width=0,T.height=0,Se(T,w),T.width=T.width||(X.width>>$)-F,T.height=T.height||(X.height>>$)-O,_(X.type===T.type&&X.format===T.format&&X.internalformat===T.internalformat,"incompatible format for texture.subimage"),_(F>=0&&O>=0&&F+T.width<=X.width&&O+T.height<=X.height,"texture.subimage write out of bounds"),_(X.mipmask&1<<$,"missing mipmap data"),_(T.data||T.element||T.needsCopy,"missing image data"),Kn(X),kt(T,Ia,F,O,$),yo(),Vt(T),Ve}function A(w,I){var H=w|0,j=I|0||H;if(H===X.width&&j===X.height)return Ve;Ve.width=X.width=H,Ve.height=X.height=j,Kn(X);for(var F=0;X.mipmask>>F;++F){var O=H>>F,$=j>>F;if(!O||!$)break;x.texImage2D(Ia,F,X.format,O,$,0,X.format,X.type,null)}return yo(),oe.profile&&(X.stats.size=Cl(X.internalformat,X.type,H,j,!1,!1)),Ve}return Ve(z,ee),Ve.subimage=Xt,Ve.resize=A,Ve._reglType="texture2d",Ve._texture=X,oe.profile&&(Ve.stats=X.stats),Ve.destroy=function(){X.decRef()},Ve}function io(z,ee,X,Ve,Xt,A){var w=new $t(Ch);Dn[w.id]=w,Q.cubeCount++;var I=new Array(6);function H(O,$,T,C,S,q){var V,se=w.texInfo;for(Go.call(se),V=0;V<6;++V)I[V]=Jt();if(typeof O=="number"||!O){var le=O|0||1;for(V=0;V<6;++V)Bt(I[V],le,le)}else if(typeof O=="object")if($)fo(I[0],O),fo(I[1],$),fo(I[2],T),fo(I[3],C),fo(I[4],S),fo(I[5],q);else if(dn(se,O),ht(w,O),"faces"in O){var re=O.faces;for(_(Array.isArray(re)&&re.length===6,"cube faces must be a length 6 array"),V=0;V<6;++V)_(typeof re[V]=="object"&&!!re[V],"invalid input for cube map face"),Pe(I[V],w),fo(I[V],re[V])}else for(V=0;V<6;++V)fo(I[V],O);else _.raise("invalid arguments to cube map");for(Pe(w,I[0]),N.npotTextureCube||_(Ud(w.width)&&Ud(w.height),"your browser does not support non power or two texture dimensions"),se.genMipmaps?w.mipmask=(I[0].width<<1)-1:w.mipmask=I[0].mipmask,_.textureCube(w,se,I,N),w.internalformat=I[0].internalformat,H.width=I[0].width,H.height=I[0].height,Kn(w),V=0;V<6;++V)un(I[V],Al+V);for(bn(se,Ch),yo(),oe.profile&&(w.stats.size=Cl(w.internalformat,w.type,H.width,H.height,se.genMipmaps,!0)),H.format=ke[w.internalformat],H.type=qe[w.type],H.mag=de[se.magFilter],H.min=Ue[se.minFilter],H.wrapS=me[se.wrapS],H.wrapT=me[se.wrapT],V=0;V<6;++V)yn(I[V]);return H}function j(O,$,T,C,S){_(!!$,"must specify image data"),_(typeof O=="number"&&O===(O|0)&&O>=0&&O<6,"invalid face");var q=T|0,V=C|0,se=S|0,le=Ke();return Pe(le,w),le.width=0,le.height=0,Se(le,$),le.width=le.width||(w.width>>se)-q,le.height=le.height||(w.height>>se)-V,_(w.type===le.type&&w.format===le.format&&w.internalformat===le.internalformat,"incompatible format for texture.subimage"),_(q>=0&&V>=0&&q+le.width<=w.width&&V+le.height<=w.height,"texture.subimage write out of bounds"),_(w.mipmask&1<<se,"missing mipmap data"),_(le.data||le.element||le.needsCopy,"missing image data"),Kn(w),kt(le,Al+O,q,V,se),yo(),Vt(le),H}function F(O){var $=O|0;if($!==w.width){H.width=w.width=$,H.height=w.height=$,Kn(w);for(var T=0;T<6;++T)for(var C=0;w.mipmask>>C;++C)x.texImage2D(Al+T,C,w.format,$>>C,$>>C,0,w.format,w.type,null);return yo(),oe.profile&&(w.stats.size=Cl(w.internalformat,w.type,H.width,H.height,!1,!0)),H}}return H(z,ee,X,Ve,Xt,A),H.subimage=j,H.resize=F,H._reglType="textureCube",H._texture=w,oe.profile&&(H.stats=w.stats),H.destroy=function(){w.decRef()},H}function rn(){for(var z=0;z<Yn;++z)x.activeTexture(uc+z),x.bindTexture(Ia,null),nn[z]=null;qr(Dn).forEach(mt),Q.cubeCount=0,Q.textureCount=0}oe.profile&&(Q.getTotalTextureSize=function(){var z=0;return Object.keys(Dn).forEach(function(ee){z+=Dn[ee].stats.size}),z});function Fa(){for(var z=0;z<Yn;++z){var ee=nn[z];ee&&(ee.bindCount=0,ee.unit=-1,nn[z]=null)}qr(Dn).forEach(function(X){X.texture=x.createTexture(),x.bindTexture(X.target,X.texture);for(var Ve=0;Ve<32;++Ve)if(X.mipmask&1<<Ve)if(X.target===Ia)x.texImage2D(Ia,Ve,X.internalformat,X.width>>Ve,X.height>>Ve,0,X.internalformat,X.type,null);else for(var Xt=0;Xt<6;++Xt)x.texImage2D(Al+Xt,Ve,X.internalformat,X.width>>Ve,X.height>>Ve,0,X.internalformat,X.type,null);bn(X.texInfo,X.target)})}function ci(){for(var z=0;z<Yn;++z){var ee=nn[z];ee&&(ee.bindCount=0,ee.unit=-1,nn[z]=null),x.activeTexture(uc+z),x.bindTexture(Ia,null),x.bindTexture(Ch,null)}}return{create2D:Qt,createCube:io,clear:rn,getTexture:function(z){return null},restore:Fa,refresh:ci}}var p0=36161,Pl=32854,gp=32855,xp=36194,yp=33189,bp=36168,wp=34041,_p=35907,Mp=34836,kp=34842,Ep=34843,ya=[];ya[Pl]=2,ya[gp]=2,ya[xp]=2,ya[yp]=2,ya[bp]=1,ya[wp]=4,ya[_p]=4,ya[Mp]=16,ya[kp]=8,ya[Ep]=6;function Sp(x,M,N){return ya[x]*M*N}var m5=function(x,M,N,J,ce){var Q={rgba4:Pl,rgb565:xp,"rgb5 a1":gp,depth:yp,stencil:bp,"depth stencil":wp};M.ext_srgb&&(Q.srgba=_p),M.ext_color_buffer_half_float&&(Q.rgba16f=kp,Q.rgb16f=Ep),M.webgl_color_buffer_float&&(Q.rgba32f=Mp);var oe=[];Object.keys(Q).forEach(function(ye){var Ne=Q[ye];oe[Ne]=ye});var xe=0,we={};function Ee(ye){this.id=xe++,this.refCount=1,this.renderbuffer=ye,this.format=Pl,this.width=0,this.height=0,ce.profile&&(this.stats={size:0})}Ee.prototype.decRef=function(){--this.refCount<=0&&_e(this)};function _e(ye){var Ne=ye.renderbuffer;_(Ne,"must not double destroy renderbuffer"),x.bindRenderbuffer(p0,null),x.deleteRenderbuffer(Ne),ye.renderbuffer=null,ye.refCount=0,delete we[ye.id],J.renderbufferCount--}function Te(ye,Ne){var U=new Ee(x.createRenderbuffer());we[U.id]=U,J.renderbufferCount++;function ne(qe,de){var Ue=0,me=0,Ce=Pl;if(typeof qe=="object"&&qe){var pe=qe;if("shape"in pe){var Pe=pe.shape;_(Array.isArray(Pe)&&Pe.length>=2,"invalid renderbuffer shape"),Ue=Pe[0]|0,me=Pe[1]|0}else"radius"in pe&&(Ue=me=pe.radius|0),"width"in pe&&(Ue=pe.width|0),"height"in pe&&(me=pe.height|0);"format"in pe&&(_.parameter(pe.format,Q,"invalid renderbuffer format"),Ce=Q[pe.format])}else typeof qe=="number"?(Ue=qe|0,typeof de=="number"?me=de|0:me=Ue):qe?_.raise("invalid arguments to renderbuffer constructor"):Ue=me=1;if(_(Ue>0&&me>0&&Ue<=N.maxRenderbufferSize&&me<=N.maxRenderbufferSize,"invalid renderbuffer size"),!(Ue===U.width&&me===U.height&&Ce===U.format))return ne.width=U.width=Ue,ne.height=U.height=me,U.format=Ce,x.bindRenderbuffer(p0,U.renderbuffer),x.renderbufferStorage(p0,Ce,Ue,me),_(x.getError()===0,"invalid render buffer format"),ce.profile&&(U.stats.size=Sp(U.format,U.width,U.height)),ne.format=oe[U.format],ne}function ke(qe,de){var Ue=qe|0,me=de|0||Ue;return Ue===U.width&&me===U.height||(_(Ue>0&&me>0&&Ue<=N.maxRenderbufferSize&&me<=N.maxRenderbufferSize,"invalid renderbuffer size"),ne.width=U.width=Ue,ne.height=U.height=me,x.bindRenderbuffer(p0,U.renderbuffer),x.renderbufferStorage(p0,U.format,Ue,me),_(x.getError()===0,"invalid render buffer format"),ce.profile&&(U.stats.size=Sp(U.format,U.width,U.height))),ne}return ne(ye,Ne),ne.resize=ke,ne._reglType="renderbuffer",ne._renderbuffer=U,ce.profile&&(ne.stats=U.stats),ne.destroy=function(){U.decRef()},ne}ce.profile&&(J.getTotalRenderbufferSize=function(){var ye=0;return Object.keys(we).forEach(function(Ne){ye+=we[Ne].stats.size}),ye});function Fe(){qr(we).forEach(function(ye){ye.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(p0,ye.renderbuffer),x.renderbufferStorage(p0,ye.format,ye.width,ye.height)}),x.bindRenderbuffer(p0,null)}return{create:Te,clear:function(){qr(we).forEach(_e)},restore:Fe}},Xa=36160,Kh=36161,oi=3553,Il=34069,Ap=36064,Tp=36096,Lp=36128,zp=33306,Np=36053,g5=36054,x5=36055,y5=36057,b5=36061,w5=36193,_5=5121,M5=5126,Rp=6407,Cp=6408,k5=6402,E5=[Rp,Cp],Qh=[];Qh[Cp]=4,Qh[Rp]=3;var Ol=[];Ol[_5]=1,Ol[M5]=4,Ol[w5]=2;var S5=32854,A5=32855,T5=36194,L5=33189,z5=36168,Pp=34041,N5=35907,R5=34836,C5=34842,P5=34843,I5=[S5,A5,T5,N5,C5,P5,R5],Zi={};Zi[Np]="complete",Zi[g5]="incomplete attachment",Zi[y5]="incomplete dimensions",Zi[x5]="incomplete, missing attachment",Zi[b5]="unsupported";function O5(x,M,N,J,ce,Q){var oe={cur:null,next:null,dirty:!1,setFBO:null},xe=["rgba"],we=["rgba4","rgb565","rgb5 a1"];M.ext_srgb&&we.push("srgba"),M.ext_color_buffer_half_float&&we.push("rgba16f","rgb16f"),M.webgl_color_buffer_float&&we.push("rgba32f");var Ee=["uint8"];M.oes_texture_half_float&&Ee.push("half float","float16"),M.oes_texture_float&&Ee.push("float","float32");function _e(Ge,Se,ue){this.target=Ge,this.texture=Se,this.renderbuffer=ue;var kt=0,Gt=0;Se?(kt=Se.width,Gt=Se.height):ue&&(kt=ue.width,Gt=ue.height),this.width=kt,this.height=Gt}function Te(Ge){Ge&&(Ge.texture&&Ge.texture._texture.decRef(),Ge.renderbuffer&&Ge.renderbuffer._renderbuffer.decRef())}function Fe(Ge,Se,ue){if(Ge)if(Ge.texture){var kt=Ge.texture._texture,Gt=Math.max(1,kt.width),Ke=Math.max(1,kt.height);_(Gt===Se&&Ke===ue,"inconsistent width/height for supplied texture"),kt.refCount+=1}else{var Vt=Ge.renderbuffer._renderbuffer;_(Vt.width===Se&&Vt.height===ue,"inconsistent width/height for renderbuffer"),Vt.refCount+=1}}function ye(Ge,Se){Se&&(Se.texture?x.framebufferTexture2D(Xa,Ge,Se.target,Se.texture._texture.texture,0):x.framebufferRenderbuffer(Xa,Ge,Kh,Se.renderbuffer._renderbuffer.renderbuffer))}function Ne(Ge){var Se=oi,ue=null,kt=null,Gt=Ge;typeof Ge=="object"&&(Gt=Ge.data,"target"in Ge&&(Se=Ge.target|0)),_.type(Gt,"function","invalid attachment data");var Ke=Gt._reglType;return Ke==="texture2d"?(ue=Gt,_(Se===oi)):Ke==="textureCube"?(ue=Gt,_(Se>=Il&&Se<Il+6,"invalid cube map target")):Ke==="renderbuffer"?(kt=Gt,Se=Kh):_.raise("invalid regl object for attachment"),new _e(Se,ue,kt)}function U(Ge,Se,ue,kt,Gt){if(ue){var Ke=J.create2D({width:Ge,height:Se,format:kt,type:Gt});return Ke._texture.refCount=0,new _e(oi,Ke,null)}else{var Vt=ce.create({width:Ge,height:Se,format:kt});return Vt._renderbuffer.refCount=0,new _e(Kh,null,Vt)}}function ne(Ge){return Ge&&(Ge.texture||Ge.renderbuffer)}function ke(Ge,Se,ue){Ge&&(Ge.texture?Ge.texture.resize(Se,ue):Ge.renderbuffer&&Ge.renderbuffer.resize(Se,ue),Ge.width=Se,Ge.height=ue)}var qe=0,de={};function Ue(){this.id=qe++,de[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function me(Ge){Ge.colorAttachments.forEach(Te),Te(Ge.depthAttachment),Te(Ge.stencilAttachment),Te(Ge.depthStencilAttachment)}function Ce(Ge){var Se=Ge.framebuffer;_(Se,"must not double destroy framebuffer"),x.deleteFramebuffer(Se),Ge.framebuffer=null,Q.framebufferCount--,delete de[Ge.id]}function pe(Ge){var Se;x.bindFramebuffer(Xa,Ge.framebuffer);var ue=Ge.colorAttachments;for(Se=0;Se<ue.length;++Se)ye(Ap+Se,ue[Se]);for(Se=ue.length;Se<N.maxColorAttachments;++Se)x.framebufferTexture2D(Xa,Ap+Se,oi,null,0);x.framebufferTexture2D(Xa,zp,oi,null,0),x.framebufferTexture2D(Xa,Tp,oi,null,0),x.framebufferTexture2D(Xa,Lp,oi,null,0),ye(Tp,Ge.depthAttachment),ye(Lp,Ge.stencilAttachment),ye(zp,Ge.depthStencilAttachment);var kt=x.checkFramebufferStatus(Xa);!x.isContextLost()&&kt!==Np&&_.raise("framebuffer configuration not supported, status = "+Zi[kt]),x.bindFramebuffer(Xa,oe.next?oe.next.framebuffer:null),oe.cur=oe.next,x.getError()}function Pe(Ge,Se){var ue=new Ue;Q.framebufferCount++;function kt(Ke,Vt){var Ct;_(oe.next!==ue,"can not update framebuffer which is currently in use");var Bt=0,fo=0,un=!0,Tn=!0,Jt=null,yn=!0,Go="rgba",dn="uint8",bn=1,wn=null,Dn=null,Yn=null,nn=!1;if(typeof Ke=="number")Bt=Ke|0,fo=Vt|0||Bt;else if(!Ke)Bt=fo=1;else{_.type(Ke,"object","invalid arguments for framebuffer");var $t=Ke;if("shape"in $t){var Kn=$t.shape;_(Array.isArray(Kn)&&Kn.length>=2,"invalid shape for framebuffer"),Bt=Kn[0],fo=Kn[1]}else"radius"in $t&&(Bt=fo=$t.radius),"width"in $t&&(Bt=$t.width),"height"in $t&&(fo=$t.height);("color"in $t||"colors"in $t)&&(Jt=$t.color||$t.colors,Array.isArray(Jt)&&_(Jt.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),Jt||("colorCount"in $t&&(bn=$t.colorCount|0,_(bn>0,"invalid color buffer count")),"colorTexture"in $t&&(yn=!!$t.colorTexture,Go="rgba4"),"colorType"in $t&&(dn=$t.colorType,yn?(_(M.oes_texture_float||!(dn==="float"||dn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(M.oes_texture_half_float||!(dn==="half float"||dn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):dn==="half float"||dn==="float16"?(_(M.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Go="rgba16f"):(dn==="float"||dn==="float32")&&(_(M.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Go="rgba32f"),_.oneOf(dn,Ee,"invalid color type")),"colorFormat"in $t&&(Go=$t.colorFormat,xe.indexOf(Go)>=0?yn=!0:we.indexOf(Go)>=0?yn=!1:yn?_.oneOf($t.colorFormat,xe,"invalid color format for texture"):_.oneOf($t.colorFormat,we,"invalid color format for renderbuffer"))),("depthTexture"in $t||"depthStencilTexture"in $t)&&(nn=!!($t.depthTexture||$t.depthStencilTexture),_(!nn||M.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in $t&&(typeof $t.depth=="boolean"?un=$t.depth:(wn=$t.depth,Tn=!1)),"stencil"in $t&&(typeof $t.stencil=="boolean"?Tn=$t.stencil:(Dn=$t.stencil,un=!1)),"depthStencil"in $t&&(typeof $t.depthStencil=="boolean"?un=Tn=$t.depthStencil:(Yn=$t.depthStencil,un=!1,Tn=!1))}var yo=null,mt=null,Qt=null,io=null;if(Array.isArray(Jt))yo=Jt.map(Ne);else if(Jt)yo=[Ne(Jt)];else for(yo=new Array(bn),Ct=0;Ct<bn;++Ct)yo[Ct]=U(Bt,fo,yn,Go,dn);_(M.webgl_draw_buffers||yo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(yo.length<=N.maxColorAttachments,"too many color attachments, not supported"),Bt=Bt||yo[0].width,fo=fo||yo[0].height,wn?mt=Ne(wn):un&&!Tn&&(mt=U(Bt,fo,nn,"depth","uint32")),Dn?Qt=Ne(Dn):Tn&&!un&&(Qt=U(Bt,fo,!1,"stencil","uint8")),Yn?io=Ne(Yn):!wn&&!Dn&&Tn&&un&&(io=U(Bt,fo,nn,"depth stencil","depth stencil")),_(!!wn+!!Dn+!!Yn<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var rn=null;for(Ct=0;Ct<yo.length;++Ct)if(Fe(yo[Ct],Bt,fo),_(!yo[Ct]||yo[Ct].texture&&E5.indexOf(yo[Ct].texture._texture.format)>=0||yo[Ct].renderbuffer&&I5.indexOf(yo[Ct].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Ct+" is invalid"),yo[Ct]&&yo[Ct].texture){var Fa=Qh[yo[Ct].texture._texture.format]*Ol[yo[Ct].texture._texture.type];rn===null?rn=Fa:_(rn===Fa,"all color attachments much have the same number of bits per pixel.")}return Fe(mt,Bt,fo),_(!mt||mt.texture&&mt.texture._texture.format===k5||mt.renderbuffer&&mt.renderbuffer._renderbuffer.format===L5,"invalid depth attachment for framebuffer object"),Fe(Qt,Bt,fo),_(!Qt||Qt.renderbuffer&&Qt.renderbuffer._renderbuffer.format===z5,"invalid stencil attachment for framebuffer object"),Fe(io,Bt,fo),_(!io||io.texture&&io.texture._texture.format===Pp||io.renderbuffer&&io.renderbuffer._renderbuffer.format===Pp,"invalid depth-stencil attachment for framebuffer object"),me(ue),ue.width=Bt,ue.height=fo,ue.colorAttachments=yo,ue.depthAttachment=mt,ue.stencilAttachment=Qt,ue.depthStencilAttachment=io,kt.color=yo.map(ne),kt.depth=ne(mt),kt.stencil=ne(Qt),kt.depthStencil=ne(io),kt.width=ue.width,kt.height=ue.height,pe(ue),kt}function Gt(Ke,Vt){_(oe.next!==ue,"can not resize a framebuffer which is currently in use");var Ct=Math.max(Ke|0,1),Bt=Math.max(Vt|0||Ct,1);if(Ct===ue.width&&Bt===ue.height)return kt;for(var fo=ue.colorAttachments,un=0;un<fo.length;++un)ke(fo[un],Ct,Bt);return ke(ue.depthAttachment,Ct,Bt),ke(ue.stencilAttachment,Ct,Bt),ke(ue.depthStencilAttachment,Ct,Bt),ue.width=kt.width=Ct,ue.height=kt.height=Bt,pe(ue),kt}return kt(Ge,Se),t(kt,{resize:Gt,_reglType:"framebuffer",_framebuffer:ue,destroy:function(){Ce(ue),me(ue)},use:function(Ke){oe.setFBO({framebuffer:kt},Ke)}})}function ht(Ge){var Se=Array(6);function ue(Gt){var Ke;_(Se.indexOf(oe.next)<0,"can not update framebuffer which is currently in use");var Vt={color:null},Ct=0,Bt=null,fo="rgba",un="uint8",Tn=1;if(typeof Gt=="number")Ct=Gt|0;else if(!Gt)Ct=1;else{_.type(Gt,"object","invalid arguments for framebuffer");var Jt=Gt;if("shape"in Jt){var yn=Jt.shape;_(Array.isArray(yn)&&yn.length>=2,"invalid shape for framebuffer"),_(yn[0]===yn[1],"cube framebuffer must be square"),Ct=yn[0]}else"radius"in Jt&&(Ct=Jt.radius|0),"width"in Jt?(Ct=Jt.width|0,"height"in Jt&&_(Jt.height===Ct,"must be square")):"height"in Jt&&(Ct=Jt.height|0);("color"in Jt||"colors"in Jt)&&(Bt=Jt.color||Jt.colors,Array.isArray(Bt)&&_(Bt.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),Bt||("colorCount"in Jt&&(Tn=Jt.colorCount|0,_(Tn>0,"invalid color buffer count")),"colorType"in Jt&&(_.oneOf(Jt.colorType,Ee,"invalid color type"),un=Jt.colorType),"colorFormat"in Jt&&(fo=Jt.colorFormat,_.oneOf(Jt.colorFormat,xe,"invalid color format for texture"))),"depth"in Jt&&(Vt.depth=Jt.depth),"stencil"in Jt&&(Vt.stencil=Jt.stencil),"depthStencil"in Jt&&(Vt.depthStencil=Jt.depthStencil)}var Go;if(Bt)if(Array.isArray(Bt))for(Go=[],Ke=0;Ke<Bt.length;++Ke)Go[Ke]=Bt[Ke];else Go=[Bt];else{Go=Array(Tn);var dn={radius:Ct,format:fo,type:un};for(Ke=0;Ke<Tn;++Ke)Go[Ke]=J.createCube(dn)}for(Vt.color=Array(Go.length),Ke=0;Ke<Go.length;++Ke){var bn=Go[Ke];_(typeof bn=="function"&&bn._reglType==="textureCube","invalid cube map"),Ct=Ct||bn.width,_(bn.width===Ct&&bn.height===Ct,"invalid cube map shape"),Vt.color[Ke]={target:Il,data:Go[Ke]}}for(Ke=0;Ke<6;++Ke){for(var wn=0;wn<Go.length;++wn)Vt.color[wn].target=Il+Ke;Ke>0&&(Vt.depth=Se[0].depth,Vt.stencil=Se[0].stencil,Vt.depthStencil=Se[0].depthStencil),Se[Ke]?Se[Ke](Vt):Se[Ke]=Pe(Vt)}return t(ue,{width:Ct,height:Ct,color:Go})}function kt(Gt){var Ke,Vt=Gt|0;if(_(Vt>0&&Vt<=N.maxCubeMapSize,"invalid radius for cube fbo"),Vt===ue.width)return ue;var Ct=ue.color;for(Ke=0;Ke<Ct.length;++Ke)Ct[Ke].resize(Vt);for(Ke=0;Ke<6;++Ke)Se[Ke].resize(Vt);return ue.width=ue.height=Vt,ue}return ue(Ge),t(ue,{faces:Se,resize:kt,_reglType:"framebufferCube",destroy:function(){Se.forEach(function(Gt){Gt.destroy()})}})}function zt(){oe.cur=null,oe.next=null,oe.dirty=!0,qr(de).forEach(function(Ge){Ge.framebuffer=x.createFramebuffer(),pe(Ge)})}return t(oe,{getFramebuffer:function(Ge){if(typeof Ge=="function"&&Ge._reglType==="framebuffer"){var Se=Ge._framebuffer;if(Se instanceof Ue)return Se}return null},create:Pe,createCube:ht,clear:function(){qr(de).forEach(Ce)},restore:zt})}var F5=5126,Ip=34962;function Zh(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=F5,this.offset=0,this.stride=0,this.divisor=0}function G5(x,M,N,J,ce){for(var Q=N.maxAttributes,oe=new Array(Q),xe=0;xe<Q;++xe)oe[xe]=new Zh;var we=0,Ee={},_e={Record:Zh,scope:{},state:oe,currentVAO:null,targetVAO:null,restore:Fe()?de:function(){},createVAO:Ue,getVAO:Ne,destroyBuffer:Te,setVAO:Fe()?U:ne,clear:Fe()?ke:function(){}};function Te(me){for(var Ce=0;Ce<oe.length;++Ce){var pe=oe[Ce];pe.buffer===me&&(x.disableVertexAttribArray(Ce),pe.buffer=null)}}function Fe(){return M.oes_vertex_array_object}function ye(){return M.angle_instanced_arrays}function Ne(me){return typeof me=="function"&&me._vao?me._vao:null}function U(me){if(me!==_e.currentVAO){var Ce=Fe();me?Ce.bindVertexArrayOES(me.vao):Ce.bindVertexArrayOES(null),_e.currentVAO=me}}function ne(me){if(me!==_e.currentVAO){if(me)me.bindAttrs();else for(var Ce=ye(),pe=0;pe<oe.length;++pe){var Pe=oe[pe];Pe.buffer?(x.enableVertexAttribArray(pe),x.vertexAttribPointer(pe,Pe.size,Pe.type,Pe.normalized,Pe.stride,Pe.offfset),Ce&&Pe.divisor&&Ce.vertexAttribDivisorANGLE(pe,Pe.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,Pe.x,Pe.y,Pe.z,Pe.w))}_e.currentVAO=me}}function ke(){qr(Ee).forEach(function(me){me.destroy()})}function qe(){this.id=++we,this.attributes=[];var me=Fe();me?this.vao=me.createVertexArrayOES():this.vao=null,Ee[this.id]=this,this.buffers=[]}qe.prototype.bindAttrs=function(){for(var me=ye(),Ce=this.attributes,pe=0;pe<Ce.length;++pe){var Pe=Ce[pe];Pe.buffer?(x.enableVertexAttribArray(pe),x.bindBuffer(Ip,Pe.buffer.buffer),x.vertexAttribPointer(pe,Pe.size,Pe.type,Pe.normalized,Pe.stride,Pe.offset),me&&Pe.divisor&&me.vertexAttribDivisorANGLE(pe,Pe.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,Pe.x,Pe.y,Pe.z,Pe.w))}for(var ht=Ce.length;ht<Q;++ht)x.disableVertexAttribArray(ht)},qe.prototype.refresh=function(){var me=Fe();me&&(me.bindVertexArrayOES(this.vao),this.bindAttrs(),_e.currentVAO=this)},qe.prototype.destroy=function(){if(this.vao){var me=Fe();this===_e.currentVAO&&(_e.currentVAO=null,me.bindVertexArrayOES(null)),me.deleteVertexArrayOES(this.vao),this.vao=null}Ee[this.id]&&(delete Ee[this.id],J.vaoCount-=1)};function de(){var me=Fe();me&&qr(Ee).forEach(function(Ce){Ce.refresh()})}function Ue(me){var Ce=new qe;J.vaoCount+=1;function pe(Pe){_(Array.isArray(Pe),"arguments to vertex array constructor must be an array"),_(Pe.length<Q,"too many attributes"),_(Pe.length>0,"must specify at least one attribute");var ht={},zt=Ce.attributes;zt.length=Pe.length;for(var Ge=0;Ge<Pe.length;++Ge){var Se=Pe[Ge],ue=zt[Ge]=new Zh,kt=Se.data||Se;if(Array.isArray(kt)||e(kt)||xa(kt)){var Gt;Ce.buffers[Ge]&&(Gt=Ce.buffers[Ge],e(kt)&&Gt._buffer.byteLength>=kt.byteLength?Gt.subdata(kt):(Gt.destroy(),Ce.buffers[Ge]=null)),Ce.buffers[Ge]||(Gt=Ce.buffers[Ge]=ce.create(Se,Ip,!1,!0)),ue.buffer=ce.getBuffer(Gt),ue.size=ue.buffer.dimension|0,ue.normalized=!1,ue.type=ue.buffer.dtype,ue.offset=0,ue.stride=0,ue.divisor=0,ue.state=1,ht[Ge]=1}else ce.getBuffer(Se)?(ue.buffer=ce.getBuffer(Se),ue.size=ue.buffer.dimension|0,ue.normalized=!1,ue.type=ue.buffer.dtype,ue.offset=0,ue.stride=0,ue.divisor=0,ue.state=1):ce.getBuffer(Se.buffer)?(ue.buffer=ce.getBuffer(Se.buffer),ue.size=(+Se.size||ue.buffer.dimension)|0,ue.normalized=!!Se.normalized||!1,"type"in Se?(_.parameter(Se.type,Z0,"invalid buffer type"),ue.type=Z0[Se.type]):ue.type=ue.buffer.dtype,ue.offset=(Se.offset||0)|0,ue.stride=(Se.stride||0)|0,ue.divisor=(Se.divisor||0)|0,ue.state=1,_(ue.size>=1&&ue.size<=4,"size must be between 1 and 4"),_(ue.offset>=0,"invalid offset"),_(ue.stride>=0&&ue.stride<=255,"stride must be between 0 and 255"),_(ue.divisor>=0,"divisor must be positive"),_(!ue.divisor||!!M.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Se?(_(Ge>0,"first attribute must not be a constant"),ue.x=+Se.x||0,ue.y=+Se.y||0,ue.z=+Se.z||0,ue.w=+Se.w||0,ue.state=2):_(!1,"invalid attribute spec for location "+Ge)}for(var Ke=0;Ke<Ce.buffers.length;++Ke)!ht[Ke]&&Ce.buffers[Ke]&&(Ce.buffers[Ke].destroy(),Ce.buffers[Ke]=null);return Ce.refresh(),pe}return pe.destroy=function(){for(var Pe=0;Pe<Ce.buffers.length;++Pe)Ce.buffers[Pe]&&Ce.buffers[Pe].destroy();Ce.buffers.length=0,Ce.destroy()},pe._vao=Ce,pe._reglType="vao",pe(me)}return _e}var Op=35632,$5=35633,D5=35718,q5=35721;function H5(x,M,N,J){var ce={},Q={};function oe(U,ne,ke,qe){this.name=U,this.id=ne,this.location=ke,this.info=qe}function xe(U,ne){for(var ke=0;ke<U.length;++ke)if(U[ke].id===ne.id){U[ke].location=ne.location;return}U.push(ne)}function we(U,ne,ke){var qe=U===Op?ce:Q,de=qe[ne];if(!de){var Ue=M.str(ne);de=x.createShader(U),x.shaderSource(de,Ue),x.compileShader(de),_.shaderError(x,de,Ue,U,ke),qe[ne]=de}return de}var Ee={},_e=[],Te=0;function Fe(U,ne){this.id=Te++,this.fragId=U,this.vertId=ne,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,J.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function ye(U,ne,ke){var qe,de,Ue=we(Op,U.fragId),me=we($5,U.vertId),Ce=U.program=x.createProgram();if(x.attachShader(Ce,Ue),x.attachShader(Ce,me),ke)for(qe=0;qe<ke.length;++qe){var pe=ke[qe];x.bindAttribLocation(Ce,pe[0],pe[1])}x.linkProgram(Ce),_.linkError(x,Ce,M.str(U.fragId),M.str(U.vertId),ne);var Pe=x.getProgramParameter(Ce,D5);J.profile&&(U.stats.uniformsCount=Pe);var ht=U.uniforms;for(qe=0;qe<Pe;++qe)if(de=x.getActiveUniform(Ce,qe),de)if(de.size>1)for(var zt=0;zt<de.size;++zt){var Ge=de.name.replace("[0]","["+zt+"]");xe(ht,new oe(Ge,M.id(Ge),x.getUniformLocation(Ce,Ge),de))}else xe(ht,new oe(de.name,M.id(de.name),x.getUniformLocation(Ce,de.name),de));var Se=x.getProgramParameter(Ce,q5);J.profile&&(U.stats.attributesCount=Se);var ue=U.attributes;for(qe=0;qe<Se;++qe)de=x.getActiveAttrib(Ce,qe),de&&xe(ue,new oe(de.name,M.id(de.name),x.getAttribLocation(Ce,de.name),de))}J.profile&&(N.getMaxUniformsCount=function(){var U=0;return _e.forEach(function(ne){ne.stats.uniformsCount>U&&(U=ne.stats.uniformsCount)}),U},N.getMaxAttributesCount=function(){var U=0;return _e.forEach(function(ne){ne.stats.attributesCount>U&&(U=ne.stats.attributesCount)}),U});function Ne(){ce={},Q={};for(var U=0;U<_e.length;++U)ye(_e[U],null,_e[U].attributes.map(function(ne){return[ne.location,ne.name]}))}return{clear:function(){var U=x.deleteShader.bind(x);qr(ce).forEach(U),ce={},qr(Q).forEach(U),Q={},_e.forEach(function(ne){x.deleteProgram(ne.program)}),_e.length=0,Ee={},N.shaderCount=0},program:function(U,ne,ke,qe){_.command(U>=0,"missing vertex shader",ke),_.command(ne>=0,"missing fragment shader",ke);var de=Ee[ne];de||(de=Ee[ne]={});var Ue=de[U];if(Ue&&(Ue.refCount++,!qe))return Ue;var me=new Fe(ne,U);return N.shaderCount++,ye(me,ke,qe),Ue||(de[U]=me),_e.push(me),t(me,{destroy:function(){if(me.refCount--,me.refCount<=0){x.deleteProgram(me.program);var Ce=_e.indexOf(me);_e.splice(Ce,1),N.shaderCount--}de[me.vertId].refCount<=0&&(x.deleteShader(Q[me.vertId]),delete Q[me.vertId],delete Ee[me.fragId][me.vertId]),Object.keys(Ee[me.fragId]).length||(x.deleteShader(ce[me.fragId]),delete ce[me.fragId],delete Ee[me.fragId])}})},restore:Ne,shader:we,frag:-1,vert:-1}}var B5=6408,dc=5121,U5=3333,Fl=5126;function j5(x,M,N,J,ce,Q,oe){function xe(_e){var Te;M.next===null?(_(ce.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Te=dc):(_(M.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Te=M.next.colorAttachments[0].texture._texture.type,Q.oes_texture_float?(_(Te===dc||Te===Fl,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Te===Fl&&_(oe.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(Te===dc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Fe=0,ye=0,Ne=J.framebufferWidth,U=J.framebufferHeight,ne=null;e(_e)?ne=_e:_e&&(_.type(_e,"object","invalid arguments to regl.read()"),Fe=_e.x|0,ye=_e.y|0,_(Fe>=0&&Fe<J.framebufferWidth,"invalid x offset for regl.read"),_(ye>=0&&ye<J.framebufferHeight,"invalid y offset for regl.read"),Ne=(_e.width||J.framebufferWidth-Fe)|0,U=(_e.height||J.framebufferHeight-ye)|0,ne=_e.data||null),ne&&(Te===dc?_(ne instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Te===Fl&&_(ne instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(Ne>0&&Ne+Fe<=J.framebufferWidth,"invalid width for read pixels"),_(U>0&&U+ye<=J.framebufferHeight,"invalid height for read pixels"),N();var ke=Ne*U*4;return ne||(Te===dc?ne=new Uint8Array(ke):Te===Fl&&(ne=ne||new Float32Array(ke))),_.isTypedArray(ne,"data buffer for regl.read() must be a typedarray"),_(ne.byteLength>=ke,"data buffer for regl.read() too small"),x.pixelStorei(U5,4),x.readPixels(Fe,ye,Ne,U,B5,Te,ne),ne}function we(_e){var Te;return M.setFBO({framebuffer:_e.framebuffer},function(){Te=xe(_e)}),Te}function Ee(_e){return!_e||!("framebuffer"in _e)?xe(_e):we(_e)}return Ee}function Ji(x){return Array.prototype.slice.call(x)}function es(x){return Ji(x).join("")}function W5(){var x=0,M=[],N=[];function J(Te){for(var Fe=0;Fe<N.length;++Fe)if(N[Fe]===Te)return M[Fe];var ye="g"+x++;return M.push(ye),N.push(Te),ye}function ce(){var Te=[];function Fe(){Te.push.apply(Te,Ji(arguments))}var ye=[];function Ne(){var U="v"+x++;return ye.push(U),arguments.length>0&&(Te.push(U,"="),Te.push.apply(Te,Ji(arguments)),Te.push(";")),U}return t(Fe,{def:Ne,toString:function(){return es([ye.length>0?"var "+ye.join(",")+";":"",es(Te)])}})}function Q(){var Te=ce(),Fe=ce(),ye=Te.toString,Ne=Fe.toString;function U(ne,ke){Fe(ne,ke,"=",Te.def(ne,ke),";")}return t(function(){Te.apply(Te,Ji(arguments))},{def:Te.def,entry:Te,exit:Fe,save:U,set:function(ne,ke,qe){U(ne,ke),Te(ne,ke,"=",qe,";")},toString:function(){return ye()+Ne()}})}function oe(){var Te=es(arguments),Fe=Q(),ye=Q(),Ne=Fe.toString,U=ye.toString;return t(Fe,{then:function(){return Fe.apply(Fe,Ji(arguments)),this},else:function(){return ye.apply(ye,Ji(arguments)),this},toString:function(){var ne=U();return ne&&(ne="else{"+ne+"}"),es(["if(",Te,"){",Ne(),"}",ne])}})}var xe=ce(),we={};function Ee(Te,Fe){var ye=[];function Ne(){var de="a"+ye.length;return ye.push(de),de}Fe=Fe||0;for(var U=0;U<Fe;++U)Ne();var ne=Q(),ke=ne.toString,qe=we[Te]=t(ne,{arg:Ne,toString:function(){return es(["function(",ye.join(),"){",ke(),"}"])}});return qe}function _e(){var Te=['"use strict";',xe,"return {"];Object.keys(we).forEach(function(Ne){Te.push('"',Ne,'":',we[Ne].toString(),",")}),Te.push("}");var Fe=es(Te).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),ye=Function.apply(null,M.concat(Fe));return ye.apply(null,N)}return{global:xe,link:J,block:ce,proc:Ee,scope:Q,cond:oe,compile:_e}}var ts="xyzw".split(""),Fp=5121,os=1,Jh=2,eu=0,tu=1,ou=2,nu=3,Gl=4,Gp=5,$p=6,Dp="dither",qp="blend.enable",Hp="blend.color",ru="blend.equation",au="blend.func",Bp="depth.enable",Up="depth.func",jp="depth.range",Wp="depth.mask",iu="colorMask",Vp="cull.enable",Xp="cull.face",su="frontFace",cu="lineWidth",Yp="polygonOffset.enable",lu="polygonOffset.offset",Kp="sample.alpha",Qp="sample.enable",fu="sample.coverage",Zp="stencil.enable",Jp="stencil.mask",hu="stencil.func",uu="stencil.opFront",pc="stencil.opBack",ev="scissor.enable",$l="scissor.box",Ya="viewport",vc="profile",ni="framebuffer",mc="vert",gc="frag",ri="elements",ai="primitive",ii="count",Dl="offset",ql="instances",xc="vao",du="Width",pu="Height",ns=ni+du,rs=ni+pu,V5=Ya+du,X5=Ya+pu,tv="drawingBuffer",ov=tv+du,nv=tv+pu,Y5=[au,ru,hu,uu,pc,fu,Ya,$l,lu],as=34962,K5=34963,Q5=35632,Z5=35633,rv=3553,J5=34067,ew=2884,tw=3042,ow=3024,nw=2960,rw=2929,aw=3089,iw=32823,sw=32926,cw=32928,vu=5126,Hl=35664,Bl=35665,Ul=35666,mu=5124,jl=35667,Wl=35668,Vl=35669,gu=35670,Xl=35671,Yl=35672,Kl=35673,yc=35674,bc=35675,wc=35676,_c=35678,Mc=35680,av=4,kc=1028,si=1029,iv=2304,xu=2305,lw=32775,fw=32776,hw=519,v0=7680,sv=0,cv=1,lv=32774,uw=513,fv=36160,dw=36064,Oa={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},hv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],is={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},m0={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},uv={frag:Q5,vert:Z5},yu={cw:iv,ccw:xu};function Ql(x){return Array.isArray(x)||e(x)||xa(x)}function dv(x){return x.sort(function(M,N){return M===Ya?-1:N===Ya?1:M<N?-1:1})}function mr(x,M,N,J){this.thisDep=x,this.contextDep=M,this.propDep=N,this.append=J}function g0(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function hn(x){return new mr(!1,!1,!1,x)}function Nr(x,M){var N=x.type;if(N===eu){var J=x.data.length;return new mr(!0,J>=1,J>=2,M)}else if(N===Gl){var ce=x.data;return new mr(ce.thisDep,ce.contextDep,ce.propDep,M)}else{if(N===Gp)return new mr(!1,!1,!1,M);if(N===$p){for(var Q=!1,oe=!1,xe=!1,we=0;we<x.data.length;++we){var Ee=x.data[we];if(Ee.type===tu)xe=!0;else if(Ee.type===ou)oe=!0;else if(Ee.type===nu)Q=!0;else if(Ee.type===eu){Q=!0;var _e=Ee.data;_e>=1&&(oe=!0),_e>=2&&(xe=!0)}else Ee.type===Gl&&(Q=Q||Ee.data.thisDep,oe=oe||Ee.data.contextDep,xe=xe||Ee.data.propDep)}return new mr(Q,oe,xe,M)}else return new mr(N===nu,N===ou,N===tu,M)}}var pv=new mr(!1,!1,!1,function(){});function pw(x,M,N,J,ce,Q,oe,xe,we,Ee,_e,Te,Fe,ye,Ne){var U=Ee.Record,ne={add:32774,subtract:32778,"reverse subtract":32779};N.ext_blend_minmax&&(ne.min=lw,ne.max=fw);var ke=N.angle_instanced_arrays,qe=N.webgl_draw_buffers,de={dirty:!0,profile:Ne.profile},Ue={},me=[],Ce={},pe={};function Pe(A){return A.replace(".","_")}function ht(A,w,I){var H=Pe(A);me.push(A),Ue[H]=de[H]=!!I,Ce[H]=w}function zt(A,w,I){var H=Pe(A);me.push(A),Array.isArray(I)?(de[H]=I.slice(),Ue[H]=I.slice()):de[H]=Ue[H]=I,pe[H]=w}ht(Dp,ow),ht(qp,tw),zt(Hp,"blendColor",[0,0,0,0]),zt(ru,"blendEquationSeparate",[lv,lv]),zt(au,"blendFuncSeparate",[cv,sv,cv,sv]),ht(Bp,rw,!0),zt(Up,"depthFunc",uw),zt(jp,"depthRange",[0,1]),zt(Wp,"depthMask",!0),zt(iu,iu,[!0,!0,!0,!0]),ht(Vp,ew),zt(Xp,"cullFace",si),zt(su,su,xu),zt(cu,cu,1),ht(Yp,iw),zt(lu,"polygonOffset",[0,0]),ht(Kp,sw),ht(Qp,cw),zt(fu,"sampleCoverage",[1,!1]),ht(Zp,nw),zt(Jp,"stencilMask",-1),zt(hu,"stencilFunc",[hw,0,-1]),zt(uu,"stencilOpSeparate",[kc,v0,v0,v0]),zt(pc,"stencilOpSeparate",[si,v0,v0,v0]),ht(ev,aw),zt($l,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),zt(Ya,Ya,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Ge={gl:x,context:Fe,strings:M,next:Ue,current:de,draw:Te,elements:Q,buffer:ce,shader:_e,attributes:Ee.state,vao:Ee,uniforms:we,framebuffer:xe,extensions:N,timer:ye,isBufferArgs:Ql},Se={primTypes:ji,compareFuncs:is,blendFuncs:Oa,blendEquations:ne,stencilOps:m0,glTypes:Z0,orientationType:yu};_.optional(function(){Ge.isArrayLike=on}),qe&&(Se.backBuffer=[si],Se.drawBuffer=Ut(J.maxDrawbuffers,function(A){return A===0?[0]:Ut(A,function(w){return dw+w})}));var ue=0;function kt(){var A=W5(),w=A.link,I=A.global;A.id=ue++,A.batchId="0";var H=w(Ge),j=A.shared={props:"a0"};Object.keys(Ge).forEach(function(C){j[C]=I.def(H,".",C)}),_.optional(function(){A.CHECK=w(_),A.commandStr=_.guessCommand(),A.command=w(A.commandStr),A.assert=function(C,S,q){C("if(!(",S,"))",this.CHECK,".commandRaise(",w(q),",",this.command,");")},Se.invalidBlendCombinations=hv});var F=A.next={},O=A.current={};Object.keys(pe).forEach(function(C){Array.isArray(de[C])&&(F[C]=I.def(j.next,".",C),O[C]=I.def(j.current,".",C))});var $=A.constants={};Object.keys(Se).forEach(function(C){$[C]=I.def(JSON.stringify(Se[C]))}),A.invoke=function(C,S){switch(S.type){case eu:var q=["this",j.context,j.props,A.batchId];return C.def(w(S.data),".call(",q.slice(0,Math.max(S.data.length+1,4)),")");case tu:return C.def(j.props,S.data);case ou:return C.def(j.context,S.data);case nu:return C.def("this",S.data);case Gl:return S.data.append(A,C),S.data.ref;case Gp:return S.data.toString();case $p:return S.data.map(function(V){return A.invoke(C,V)})}},A.attribCache={};var T={};return A.scopeAttrib=function(C){var S=M.id(C);if(S in T)return T[S];var q=Ee.scope[S];q||(q=Ee.scope[S]=new U);var V=T[S]=w(q);return V},A}function Gt(A){var w=A.static,I=A.dynamic,H;if(vc in w){var j=!!w[vc];H=hn(function(O,$){return j}),H.enable=j}else if(vc in I){var F=I[vc];H=Nr(F,function(O,$){return O.invoke($,F)})}return H}function Ke(A,w){var I=A.static,H=A.dynamic;if(ni in I){var j=I[ni];return j?(j=xe.getFramebuffer(j),_.command(j,"invalid framebuffer object"),hn(function(O,$){var T=O.link(j),C=O.shared;$.set(C.framebuffer,".next",T);var S=C.context;return $.set(S,"."+ns,T+".width"),$.set(S,"."+rs,T+".height"),T})):hn(function(O,$){var T=O.shared;$.set(T.framebuffer,".next","null");var C=T.context;return $.set(C,"."+ns,C+"."+ov),$.set(C,"."+rs,C+"."+nv),"null"})}else if(ni in H){var F=H[ni];return Nr(F,function(O,$){var T=O.invoke($,F),C=O.shared,S=C.framebuffer,q=$.def(S,".getFramebuffer(",T,")");_.optional(function(){O.assert($,"!"+T+"||"+q,"invalid framebuffer object")}),$.set(S,".next",q);var V=C.context;return $.set(V,"."+ns,q+"?"+q+".width:"+V+"."+ov),$.set(V,"."+rs,q+"?"+q+".height:"+V+"."+nv),q})}else return null}function Vt(A,w,I){var H=A.static,j=A.dynamic;function F(T){if(T in H){var C=H[T];_.commandType(C,"object","invalid "+T,I.commandStr);var S=!0,q=C.x|0,V=C.y|0,se,le;return"width"in C?(se=C.width|0,_.command(se>=0,"invalid "+T,I.commandStr)):S=!1,"height"in C?(le=C.height|0,_.command(le>=0,"invalid "+T,I.commandStr)):S=!1,new mr(!S&&w&&w.thisDep,!S&&w&&w.contextDep,!S&&w&&w.propDep,function(at,Dt){var Qe=at.shared.context,xt=se;"width"in C||(xt=Dt.def(Qe,".",ns,"-",q));var Pt=le;return"height"in C||(Pt=Dt.def(Qe,".",rs,"-",V)),[q,V,xt,Pt]})}else if(T in j){var re=j[T],Me=Nr(re,function(at,Dt){var Qe=at.invoke(Dt,re);_.optional(function(){at.assert(Dt,Qe+"&&typeof "+Qe+'==="object"',"invalid "+T)});var xt=at.shared.context,Pt=Dt.def(Qe,".x|0"),ho=Dt.def(Qe,".y|0"),Zo=Dt.def('"width" in ',Qe,"?",Qe,".width|0:","(",xt,".",ns,"-",Pt,")"),gr=Dt.def('"height" in ',Qe,"?",Qe,".height|0:","(",xt,".",rs,"-",ho,")");return _.optional(function(){at.assert(Dt,Zo+">=0&&"+gr+">=0","invalid "+T)}),[Pt,ho,Zo,gr]});return w&&(Me.thisDep=Me.thisDep||w.thisDep,Me.contextDep=Me.contextDep||w.contextDep,Me.propDep=Me.propDep||w.propDep),Me}else return w?new mr(w.thisDep,w.contextDep,w.propDep,function(at,Dt){var Qe=at.shared.context;return[0,0,Dt.def(Qe,".",ns),Dt.def(Qe,".",rs)]}):null}var O=F(Ya);if(O){var $=O;O=new mr(O.thisDep,O.contextDep,O.propDep,function(T,C){var S=$.append(T,C),q=T.shared.context;return C.set(q,"."+V5,S[2]),C.set(q,"."+X5,S[3]),S})}return{viewport:O,scissor_box:F($l)}}function Ct(A,w){var I=A.static,H=typeof I[gc]=="string"&&typeof I[mc]=="string";if(H){if(Object.keys(w.dynamic).length>0)return null;var j=w.static,F=Object.keys(j);if(F.length>0&&typeof j[F[0]]=="number"){for(var O=[],$=0;$<F.length;++$)_(typeof j[F[$]]=="number","must specify all vertex attribute locations when using vaos"),O.push([j[F[$]]|0,F[$]]);return O}}return null}function Bt(A,w,I){var H=A.static,j=A.dynamic;function F(S){if(S in H){var q=M.id(H[S]);_.optional(function(){_e.shader(uv[S],q,_.guessCommand())});var V=hn(function(){return q});return V.id=q,V}else if(S in j){var se=j[S];return Nr(se,function(le,re){var Me=le.invoke(re,se),at=re.def(le.shared.strings,".id(",Me,")");return _.optional(function(){re(le.shared.shader,".shader(",uv[S],",",at,",",le.command,");")}),at})}return null}var O=F(gc),$=F(mc),T=null,C;return g0(O)&&g0($)?(T=_e.program($.id,O.id,null,I),C=hn(function(S,q){return S.link(T)})):C=new mr(O&&O.thisDep||$&&$.thisDep,O&&O.contextDep||$&&$.contextDep,O&&O.propDep||$&&$.propDep,function(S,q){var V=S.shared.shader,se;O?se=O.append(S,q):se=q.def(V,".",gc);var le;$?le=$.append(S,q):le=q.def(V,".",mc);var re=V+".program("+le+","+se;return _.optional(function(){re+=","+S.command}),q.def(re+")")}),{frag:O,vert:$,progVar:C,program:T}}function fo(A,w){var I=A.static,H=A.dynamic;function j(){if(ri in I){var S=I[ri];Ql(S)?S=Q.getElements(Q.create(S,!0)):S&&(S=Q.getElements(S),_.command(S,"invalid elements",w.commandStr));var q=hn(function(se,le){if(S){var re=se.link(S);return se.ELEMENTS=re,re}return se.ELEMENTS=null,null});return q.value=S,q}else if(ri in H){var V=H[ri];return Nr(V,function(se,le){var re=se.shared,Me=re.isBufferArgs,at=re.elements,Dt=se.invoke(le,V),Qe=le.def("null"),xt=le.def(Me,"(",Dt,")"),Pt=se.cond(xt).then(Qe,"=",at,".createStream(",Dt,");").else(Qe,"=",at,".getElements(",Dt,");");return _.optional(function(){se.assert(Pt.else,"!"+Dt+"||"+Qe,"invalid elements")}),le.entry(Pt),le.exit(se.cond(xt).then(at,".destroyStream(",Qe,");")),se.ELEMENTS=Qe,Qe})}return null}var F=j();function O(){if(ai in I){var S=I[ai];return _.commandParameter(S,ji,"invalid primitve",w.commandStr),hn(function(V,se){return ji[S]})}else if(ai in H){var q=H[ai];return Nr(q,function(V,se){var le=V.constants.primTypes,re=V.invoke(se,q);return _.optional(function(){V.assert(se,re+" in "+le,"invalid primitive, must be one of "+Object.keys(ji))}),se.def(le,"[",re,"]")})}else if(F)return g0(F)?F.value?hn(function(V,se){return se.def(V.ELEMENTS,".primType")}):hn(function(){return av}):new mr(F.thisDep,F.contextDep,F.propDep,function(V,se){var le=V.ELEMENTS;return se.def(le,"?",le,".primType:",av)});return null}function $(S,q){if(S in I){var V=I[S]|0;return _.command(!q||V>=0,"invalid "+S,w.commandStr),hn(function(le,re){return q&&(le.OFFSET=V),V})}else if(S in H){var se=H[S];return Nr(se,function(le,re){var Me=le.invoke(re,se);return q&&(le.OFFSET=Me,_.optional(function(){le.assert(re,Me+">=0","invalid "+S)})),Me})}else if(q&&F)return hn(function(le,re){return le.OFFSET="0",0});return null}var T=$(Dl,!0);function C(){if(ii in I){var S=I[ii]|0;return _.command(typeof S=="number"&&S>=0,"invalid vertex count",w.commandStr),hn(function(){return S})}else if(ii in H){var q=H[ii];return Nr(q,function(le,re){var Me=le.invoke(re,q);return _.optional(function(){le.assert(re,"typeof "+Me+'==="number"&&'+Me+">=0&&"+Me+"===("+Me+"|0)","invalid vertex count")}),Me})}else if(F)if(g0(F)){if(F)return T?new mr(T.thisDep,T.contextDep,T.propDep,function(le,re){var Me=re.def(le.ELEMENTS,".vertCount-",le.OFFSET);return _.optional(function(){le.assert(re,Me+">=0","invalid vertex offset/element buffer too small")}),Me}):hn(function(le,re){return re.def(le.ELEMENTS,".vertCount")});var V=hn(function(){return-1});return _.optional(function(){V.MISSING=!0}),V}else{var se=new mr(F.thisDep||T.thisDep,F.contextDep||T.contextDep,F.propDep||T.propDep,function(le,re){var Me=le.ELEMENTS;return le.OFFSET?re.def(Me,"?",Me,".vertCount-",le.OFFSET,":-1"):re.def(Me,"?",Me,".vertCount:-1")});return _.optional(function(){se.DYNAMIC=!0}),se}return null}return{elements:F,primitive:O(),count:C(),instances:$(ql,!1),offset:T}}function un(A,w){var I=A.static,H=A.dynamic,j={};return me.forEach(function(F){var O=Pe(F);function $(T,C){if(F in I){var S=T(I[F]);j[O]=hn(function(){return S})}else if(F in H){var q=H[F];j[O]=Nr(q,function(V,se){return C(V,se,V.invoke(se,q))})}}switch(F){case Vp:case qp:case Dp:case Zp:case Bp:case ev:case Yp:case Kp:case Qp:case Wp:return $(function(T){return _.commandType(T,"boolean",F,w.commandStr),T},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="boolean"',"invalid flag "+F,T.commandStr)}),S});case Up:return $(function(T){return _.commandParameter(T,is,"invalid "+F,w.commandStr),is[T]},function(T,C,S){var q=T.constants.compareFuncs;return _.optional(function(){T.assert(C,S+" in "+q,"invalid "+F+", must be one of "+Object.keys(is))}),C.def(q,"[",S,"]")});case jp:return $(function(T){return _.command(on(T)&&T.length===2&&typeof T[0]=="number"&&typeof T[1]=="number"&&T[0]<=T[1],"depth range is 2d array",w.commandStr),T},function(T,C,S){_.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var q=C.def("+",S,"[0]"),V=C.def("+",S,"[1]");return[q,V]});case au:return $(function(T){_.commandType(T,"object","blend.func",w.commandStr);var C="srcRGB"in T?T.srcRGB:T.src,S="srcAlpha"in T?T.srcAlpha:T.src,q="dstRGB"in T?T.dstRGB:T.dst,V="dstAlpha"in T?T.dstAlpha:T.dst;return _.commandParameter(C,Oa,O+".srcRGB",w.commandStr),_.commandParameter(S,Oa,O+".srcAlpha",w.commandStr),_.commandParameter(q,Oa,O+".dstRGB",w.commandStr),_.commandParameter(V,Oa,O+".dstAlpha",w.commandStr),_.command(hv.indexOf(C+", "+q)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+C+", "+q+")",w.commandStr),[Oa[C],Oa[q],Oa[S],Oa[V]]},function(T,C,S){var q=T.constants.blendFuncs;_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function V(Qe,xt){var Pt=C.def('"',Qe,xt,'" in ',S,"?",S,".",Qe,xt,":",S,".",Qe);return _.optional(function(){T.assert(C,Pt+" in "+q,"invalid "+F+"."+Qe+xt+", must be one of "+Object.keys(Oa))}),Pt}var se=V("src","RGB"),le=V("dst","RGB");_.optional(function(){var Qe=T.constants.invalidBlendCombinations;T.assert(C,Qe+".indexOf("+se+'+", "+'+le+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var re=C.def(q,"[",se,"]"),Me=C.def(q,"[",V("src","Alpha"),"]"),at=C.def(q,"[",le,"]"),Dt=C.def(q,"[",V("dst","Alpha"),"]");return[re,at,Me,Dt]});case ru:return $(function(T){if(typeof T=="string")return _.commandParameter(T,ne,"invalid "+F,w.commandStr),[ne[T],ne[T]];if(typeof T=="object")return _.commandParameter(T.rgb,ne,F+".rgb",w.commandStr),_.commandParameter(T.alpha,ne,F+".alpha",w.commandStr),[ne[T.rgb],ne[T.alpha]];_.commandRaise("invalid blend.equation",w.commandStr)},function(T,C,S){var q=T.constants.blendEquations,V=C.def(),se=C.def(),le=T.cond("typeof ",S,'==="string"');return _.optional(function(){function re(Me,at,Dt){T.assert(Me,Dt+" in "+q,"invalid "+at+", must be one of "+Object.keys(ne))}re(le.then,F,S),T.assert(le.else,S+"&&typeof "+S+'==="object"',"invalid "+F),re(le.else,F+".rgb",S+".rgb"),re(le.else,F+".alpha",S+".alpha")}),le.then(V,"=",se,"=",q,"[",S,"];"),le.else(V,"=",q,"[",S,".rgb];",se,"=",q,"[",S,".alpha];"),C(le),[V,se]});case Hp:return $(function(T){return _.command(on(T)&&T.length===4,"blend.color must be a 4d array",w.commandStr),Ut(4,function(C){return+T[C]})},function(T,C,S){return _.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),Ut(4,function(q){return C.def("+",S,"[",q,"]")})});case Jp:return $(function(T){return _.commandType(T,"number",O,w.commandStr),T|0},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="number"',"invalid stencil.mask")}),C.def(S,"|0")});case hu:return $(function(T){_.commandType(T,"object",O,w.commandStr);var C=T.cmp||"keep",S=T.ref||0,q="mask"in T?T.mask:-1;return _.commandParameter(C,is,F+".cmp",w.commandStr),_.commandType(S,"number",F+".ref",w.commandStr),_.commandType(q,"number",F+".mask",w.commandStr),[is[C],S,q]},function(T,C,S){var q=T.constants.compareFuncs;_.optional(function(){function re(){T.assert(C,Array.prototype.join.call(arguments,""),"invalid stencil.func")}re(S+"&&typeof ",S,'==="object"'),re('!("cmp" in ',S,")||(",S,".cmp in ",q,")")});var V=C.def('"cmp" in ',S,"?",q,"[",S,".cmp]",":",v0),se=C.def(S,".ref|0"),le=C.def('"mask" in ',S,"?",S,".mask|0:-1");return[V,se,le]});case uu:case pc:return $(function(T){_.commandType(T,"object",O,w.commandStr);var C=T.fail||"keep",S=T.zfail||"keep",q=T.zpass||"keep";return _.commandParameter(C,m0,F+".fail",w.commandStr),_.commandParameter(S,m0,F+".zfail",w.commandStr),_.commandParameter(q,m0,F+".zpass",w.commandStr),[F===pc?si:kc,m0[C],m0[S],m0[q]]},function(T,C,S){var q=T.constants.stencilOps;_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid "+F)});function V(se){return _.optional(function(){T.assert(C,'!("'+se+'" in '+S+")||("+S+"."+se+" in "+q+")","invalid "+F+"."+se+", must be one of "+Object.keys(m0))}),C.def('"',se,'" in ',S,"?",q,"[",S,".",se,"]:",v0)}return[F===pc?si:kc,V("fail"),V("zfail"),V("zpass")]});case lu:return $(function(T){_.commandType(T,"object",O,w.commandStr);var C=T.factor|0,S=T.units|0;return _.commandType(C,"number",O+".factor",w.commandStr),_.commandType(S,"number",O+".units",w.commandStr),[C,S]},function(T,C,S){_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid "+F)});var q=C.def(S,".factor|0"),V=C.def(S,".units|0");return[q,V]});case Xp:return $(function(T){var C=0;return T==="front"?C=kc:T==="back"&&(C=si),_.command(!!C,O,w.commandStr),C},function(T,C,S){return _.optional(function(){T.assert(C,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),C.def(S,'==="front"?',kc,":",si)});case cu:return $(function(T){return _.command(typeof T=="number"&&T>=J.lineWidthDims[0]&&T<=J.lineWidthDims[1],"invalid line width, must be a positive number between "+J.lineWidthDims[0]+" and "+J.lineWidthDims[1],w.commandStr),T},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="number"&&'+S+">="+J.lineWidthDims[0]+"&&"+S+"<="+J.lineWidthDims[1],"invalid line width")}),S});case su:return $(function(T){return _.commandParameter(T,yu,O,w.commandStr),yu[T]},function(T,C,S){return _.optional(function(){T.assert(C,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),C.def(S+'==="cw"?'+iv+":"+xu)});case iu:return $(function(T){return _.command(on(T)&&T.length===4,"color.mask must be length 4 array",w.commandStr),T.map(function(C){return!!C})},function(T,C,S){return _.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),Ut(4,function(q){return"!!"+S+"["+q+"]"})});case fu:return $(function(T){_.command(typeof T=="object"&&T,O,w.commandStr);var C="value"in T?T.value:1,S=!!T.invert;return _.command(typeof C=="number"&&C>=0&&C<=1,"sample.coverage.value must be a number between 0 and 1",w.commandStr),[C,S]},function(T,C,S){_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var q=C.def('"value" in ',S,"?+",S,".value:1"),V=C.def("!!",S,".invert");return[q,V]})}}),j}function Tn(A,w){var I=A.static,H=A.dynamic,j={};return Object.keys(I).forEach(function(F){var O=I[F],$;if(typeof O=="number"||typeof O=="boolean")$=hn(function(){return O});else if(typeof O=="function"){var T=O._reglType;T==="texture2d"||T==="textureCube"?$=hn(function(C){return C.link(O)}):T==="framebuffer"||T==="framebufferCube"?(_.command(O.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',w.commandStr),$=hn(function(C){return C.link(O.color[0])})):_.commandRaise('invalid data for uniform "'+F+'"',w.commandStr)}else on(O)?$=hn(function(C){var S=C.global.def("[",Ut(O.length,function(q){return _.command(typeof O[q]=="number"||typeof O[q]=="boolean","invalid uniform "+F,C.commandStr),O[q]}),"]");return S}):_.commandRaise('invalid or missing data for uniform "'+F+'"',w.commandStr);$.value=O,j[F]=$}),Object.keys(H).forEach(function(F){var O=H[F];j[F]=Nr(O,function($,T){return $.invoke(T,O)})}),j}function Jt(A,w){var I=A.static,H=A.dynamic,j={};return Object.keys(I).forEach(function(F){var O=I[F],$=M.id(F),T=new U;if(Ql(O))T.state=os,T.buffer=ce.getBuffer(ce.create(O,as,!1,!0)),T.type=0;else{var C=ce.getBuffer(O);if(C)T.state=os,T.buffer=C,T.type=0;else if(_.command(typeof O=="object"&&O,"invalid data for attribute "+F,w.commandStr),"constant"in O){var S=O.constant;T.buffer="null",T.state=Jh,typeof S=="number"?T.x=S:(_.command(on(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+F,w.commandStr),ts.forEach(function(at,Dt){Dt<S.length&&(T[at]=S[Dt])}))}else{Ql(O.buffer)?C=ce.getBuffer(ce.create(O.buffer,as,!1,!0)):C=ce.getBuffer(O.buffer),_.command(!!C,'missing buffer for attribute "'+F+'"',w.commandStr);var q=O.offset|0;_.command(q>=0,'invalid offset for attribute "'+F+'"',w.commandStr);var V=O.stride|0;_.command(V>=0&&V<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',w.commandStr);var se=O.size|0;_.command(!("size"in O)||se>0&&se<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',w.commandStr);var le=!!O.normalized,re=0;"type"in O&&(_.commandParameter(O.type,Z0,"invalid type for attribute "+F,w.commandStr),re=Z0[O.type]);var Me=O.divisor|0;"divisor"in O&&(_.command(Me===0||ke,'cannot specify divisor for attribute "'+F+'", instancing not supported',w.commandStr),_.command(Me>=0,'invalid divisor for attribute "'+F+'"',w.commandStr)),_.optional(function(){var at=w.commandStr,Dt=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(O).forEach(function(Qe){_.command(Dt.indexOf(Qe)>=0,'unknown parameter "'+Qe+'" for attribute pointer "'+F+'" (valid parameters are '+Dt+")",at)})}),T.buffer=C,T.state=os,T.size=se,T.normalized=le,T.type=re||C.dtype,T.offset=q,T.stride=V,T.divisor=Me}}j[F]=hn(function(at,Dt){var Qe=at.attribCache;if($ in Qe)return Qe[$];var xt={isStream:!1};return Object.keys(T).forEach(function(Pt){xt[Pt]=T[Pt]}),T.buffer&&(xt.buffer=at.link(T.buffer),xt.type=xt.type||xt.buffer+".dtype"),Qe[$]=xt,xt})}),Object.keys(H).forEach(function(F){var O=H[F];function $(T,C){var S=T.invoke(C,O),q=T.shared,V=T.constants,se=q.isBufferArgs,le=q.buffer;_.optional(function(){T.assert(C,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+se+"("+S+")||"+le+".getBuffer("+S+")||"+le+".getBuffer("+S+".buffer)||"+se+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+q.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+F+'"')});var re={isStream:C.def(!1)},Me=new U;Me.state=os,Object.keys(Me).forEach(function(xt){re[xt]=C.def(""+Me[xt])});var at=re.buffer,Dt=re.type;C("if(",se,"(",S,")){",re.isStream,"=true;",at,"=",le,".createStream(",as,",",S,");",Dt,"=",at,".dtype;","}else{",at,"=",le,".getBuffer(",S,");","if(",at,"){",Dt,"=",at,".dtype;",'}else if("constant" in ',S,"){",re.state,"=",Jh,";","if(typeof "+S+'.constant === "number"){',re[ts[0]],"=",S,".constant;",ts.slice(1).map(function(xt){return re[xt]}).join("="),"=0;","}else{",ts.map(function(xt,Pt){return re[xt]+"="+S+".constant.length>"+Pt+"?"+S+".constant["+Pt+"]:0;"}).join(""),"}}else{","if(",se,"(",S,".buffer)){",at,"=",le,".createStream(",as,",",S,".buffer);","}else{",at,"=",le,".getBuffer(",S,".buffer);","}",Dt,'="type" in ',S,"?",V.glTypes,"[",S,".type]:",at,".dtype;",re.normalized,"=!!",S,".normalized;");function Qe(xt){C(re[xt],"=",S,".",xt,"|0;")}return Qe("size"),Qe("offset"),Qe("stride"),Qe("divisor"),C("}}"),C.exit("if(",re.isStream,"){",le,".destroyStream(",at,");","}"),re}j[F]=Nr(O,$)}),j}function yn(A,w){var I=A.static,H=A.dynamic;if(xc in I){var j=I[xc];return j!==null&&Ee.getVAO(j)===null&&(j=Ee.createVAO(j)),hn(function(O){return O.link(Ee.getVAO(j))})}else if(xc in H){var F=H[xc];return Nr(F,function(O,$){var T=O.invoke($,F);return $.def(O.shared.vao+".getVAO("+T+")")})}return null}function Go(A){var w=A.static,I=A.dynamic,H={};return Object.keys(w).forEach(function(j){var F=w[j];H[j]=hn(function(O,$){return typeof F=="number"||typeof F=="boolean"?""+F:O.link(F)})}),Object.keys(I).forEach(function(j){var F=I[j];H[j]=Nr(F,function(O,$){return O.invoke($,F)})}),H}function dn(A,w,I,H,j){var F=A.static,O=A.dynamic;_.optional(function(){var Qe=[ni,mc,gc,ri,ai,Dl,ii,ql,vc,xc].concat(me);function xt(Pt){Object.keys(Pt).forEach(function(ho){_.command(Qe.indexOf(ho)>=0,'unknown parameter "'+ho+'"',j.commandStr)})}xt(F),xt(O)});var $=Ct(A,w),T=Ke(A,j),C=Vt(A,T,j),S=fo(A,j),q=un(A,j),V=Bt(A,j,$);function se(Qe){var xt=C[Qe];xt&&(q[Qe]=xt)}se(Ya),se(Pe($l));var le=Object.keys(q).length>0,re={framebuffer:T,draw:S,shader:V,state:q,dirty:le,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(re.profile=Gt(A,j),re.uniforms=Tn(I,j),re.drawVAO=re.scopeVAO=yn(A,j),!re.drawVAO&&V.program&&!$&&N.angle_instanced_arrays){var Me=!0,at=V.program.attributes.map(function(Qe){var xt=w.static[Qe];return Me=Me&&!!xt,xt});if(Me&&at.length>0){var Dt=Ee.getVAO(Ee.createVAO(at));re.drawVAO=new mr(null,null,null,function(Qe,xt){return Qe.link(Dt)}),re.useVAO=!0}}return $?re.useVAO=!0:re.attributes=Jt(w,j),re.context=Go(H,j),re}function bn(A,w,I){var H=A.shared,j=H.context,F=A.scope();Object.keys(I).forEach(function(O){w.save(j,"."+O);var $=I[O],T=$.append(A,w);Array.isArray(T)?F(j,".",O,"=[",T.join(),"];"):F(j,".",O,"=",T,";")}),w(F)}function wn(A,w,I,H){var j=A.shared,F=j.gl,O=j.framebuffer,$;qe&&($=w.def(j.extensions,".webgl_draw_buffers"));var T=A.constants,C=T.drawBuffer,S=T.backBuffer,q;I?q=I.append(A,w):q=w.def(O,".next"),H||w("if(",q,"!==",O,".cur){"),w("if(",q,"){",F,".bindFramebuffer(",fv,",",q,".framebuffer);"),qe&&w($,".drawBuffersWEBGL(",C,"[",q,".colorAttachments.length]);"),w("}else{",F,".bindFramebuffer(",fv,",null);"),qe&&w($,".drawBuffersWEBGL(",S,");"),w("}",O,".cur=",q,";"),H||w("}")}function Dn(A,w,I){var H=A.shared,j=H.gl,F=A.current,O=A.next,$=H.current,T=H.next,C=A.cond($,".dirty");me.forEach(function(S){var q=Pe(S);if(!(q in I.state)){var V,se;if(q in O){V=O[q],se=F[q];var le=Ut(de[q].length,function(Me){return C.def(V,"[",Me,"]")});C(A.cond(le.map(function(Me,at){return Me+"!=="+se+"["+at+"]"}).join("||")).then(j,".",pe[q],"(",le,");",le.map(function(Me,at){return se+"["+at+"]="+Me}).join(";"),";"))}else{V=C.def(T,".",q);var re=A.cond(V,"!==",$,".",q);C(re),q in Ce?re(A.cond(V).then(j,".enable(",Ce[q],");").else(j,".disable(",Ce[q],");"),$,".",q,"=",V,";"):re(j,".",pe[q],"(",V,");",$,".",q,"=",V,";")}}}),Object.keys(I.state).length===0&&C($,".dirty=false;"),w(C)}function Yn(A,w,I,H){var j=A.shared,F=A.current,O=j.current,$=j.gl;dv(Object.keys(I)).forEach(function(T){var C=I[T];if(!(H&&!H(C))){var S=C.append(A,w);if(Ce[T]){var q=Ce[T];g0(C)?S?w($,".enable(",q,");"):w($,".disable(",q,");"):w(A.cond(S).then($,".enable(",q,");").else($,".disable(",q,");")),w(O,".",T,"=",S,";")}else if(on(S)){var V=F[T];w($,".",pe[T],"(",S,");",S.map(function(se,le){return V+"["+le+"]="+se}).join(";"),";")}else w($,".",pe[T],"(",S,");",O,".",T,"=",S,";")}})}function nn(A,w){ke&&(A.instancing=w.def(A.shared.extensions,".angle_instanced_arrays"))}function $t(A,w,I,H,j){var F=A.shared,O=A.stats,$=F.current,T=F.timer,C=I.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var q,V;function se(Qe){q=w.def(),Qe(q,"=",S(),";"),typeof j=="string"?Qe(O,".count+=",j,";"):Qe(O,".count++;"),ye&&(H?(V=w.def(),Qe(V,"=",T,".getNumPendingQueries();")):Qe(T,".beginQuery(",O,");"))}function le(Qe){Qe(O,".cpuTime+=",S(),"-",q,";"),ye&&(H?Qe(T,".pushScopeStats(",V,",",T,".getNumPendingQueries(),",O,");"):Qe(T,".endQuery();"))}function re(Qe){var xt=w.def($,".profile");w($,".profile=",Qe,";"),w.exit($,".profile=",xt,";")}var Me;if(C){if(g0(C)){C.enable?(se(w),le(w.exit),re("true")):re("false");return}Me=C.append(A,w),re(Me)}else Me=w.def($,".profile");var at=A.block();se(at),w("if(",Me,"){",at,"}");var Dt=A.block();le(Dt),w.exit("if(",Me,"){",Dt,"}")}function Kn(A,w,I,H,j){var F=A.shared;function O(T){switch(T){case Hl:case jl:case Xl:return 2;case Bl:case Wl:case Yl:return 3;case Ul:case Vl:case Kl:return 4;default:return 1}}function $(T,C,S){var q=F.gl,V=w.def(T,".location"),se=w.def(F.attributes,"[",V,"]"),le=S.state,re=S.buffer,Me=[S.x,S.y,S.z,S.w],at=["buffer","normalized","offset","stride"];function Dt(){w("if(!",se,".buffer){",q,".enableVertexAttribArray(",V,");}");var xt=S.type,Pt;if(S.size?Pt=w.def(S.size,"||",C):Pt=C,w("if(",se,".type!==",xt,"||",se,".size!==",Pt,"||",at.map(function(Zo){return se+"."+Zo+"!=="+S[Zo]}).join("||"),"){",q,".bindBuffer(",as,",",re,".buffer);",q,".vertexAttribPointer(",[V,Pt,xt,S.normalized,S.stride,S.offset],");",se,".type=",xt,";",se,".size=",Pt,";",at.map(function(Zo){return se+"."+Zo+"="+S[Zo]+";"}).join(""),"}"),ke){var ho=S.divisor;w("if(",se,".divisor!==",ho,"){",A.instancing,".vertexAttribDivisorANGLE(",[V,ho],");",se,".divisor=",ho,";}")}}function Qe(){w("if(",se,".buffer){",q,".disableVertexAttribArray(",V,");",se,".buffer=null;","}if(",ts.map(function(xt,Pt){return se+"."+xt+"!=="+Me[Pt]}).join("||"),"){",q,".vertexAttrib4f(",V,",",Me,");",ts.map(function(xt,Pt){return se+"."+xt+"="+Me[Pt]+";"}).join(""),"}")}le===os?Dt():le===Jh?Qe():(w("if(",le,"===",os,"){"),Dt(),w("}else{"),Qe(),w("}"))}H.forEach(function(T){var C=T.name,S=I.attributes[C],q;if(S){if(!j(S))return;q=S.append(A,w)}else{if(!j(pv))return;var V=A.scopeAttrib(C);_.optional(function(){A.assert(w,V+".state","missing attribute "+C)}),q={},Object.keys(new U).forEach(function(se){q[se]=w.def(V,".",se)})}$(A.link(T),O(T.info.type),q)})}function yo(A,w,I,H,j){for(var F=A.shared,O=F.gl,$,T=0;T<H.length;++T){var C=H[T],S=C.name,q=C.info.type,V=I.uniforms[S],se=A.link(C),le=se+".location",re;if(V){if(!j(V))continue;if(g0(V)){var Me=V.value;if(_.command(Me!==null&&typeof Me!="undefined",'missing uniform "'+S+'"',A.commandStr),q===_c||q===Mc){_.command(typeof Me=="function"&&(q===_c&&(Me._reglType==="texture2d"||Me._reglType==="framebuffer")||q===Mc&&(Me._reglType==="textureCube"||Me._reglType==="framebufferCube")),"invalid texture for uniform "+S,A.commandStr);var at=A.link(Me._texture||Me.color[0]._texture);w(O,".uniform1i(",le,",",at+".bind());"),w.exit(at,".unbind();")}else if(q===yc||q===bc||q===wc){_.optional(function(){_.command(on(Me),"invalid matrix for uniform "+S,A.commandStr),_.command(q===yc&&Me.length===4||q===bc&&Me.length===9||q===wc&&Me.length===16,"invalid length for matrix uniform "+S,A.commandStr)});var Dt=A.global.def("new Float32Array(["+Array.prototype.slice.call(Me)+"])"),Qe=2;q===bc?Qe=3:q===wc&&(Qe=4),w(O,".uniformMatrix",Qe,"fv(",le,",false,",Dt,");")}else{switch(q){case vu:_.commandType(Me,"number","uniform "+S,A.commandStr),$="1f";break;case Hl:_.command(on(Me)&&Me.length===2,"uniform "+S,A.commandStr),$="2f";break;case Bl:_.command(on(Me)&&Me.length===3,"uniform "+S,A.commandStr),$="3f";break;case Ul:_.command(on(Me)&&Me.length===4,"uniform "+S,A.commandStr),$="4f";break;case gu:_.commandType(Me,"boolean","uniform "+S,A.commandStr),$="1i";break;case mu:_.commandType(Me,"number","uniform "+S,A.commandStr),$="1i";break;case Xl:_.command(on(Me)&&Me.length===2,"uniform "+S,A.commandStr),$="2i";break;case jl:_.command(on(Me)&&Me.length===2,"uniform "+S,A.commandStr),$="2i";break;case Yl:_.command(on(Me)&&Me.length===3,"uniform "+S,A.commandStr),$="3i";break;case Wl:_.command(on(Me)&&Me.length===3,"uniform "+S,A.commandStr),$="3i";break;case Kl:_.command(on(Me)&&Me.length===4,"uniform "+S,A.commandStr),$="4i";break;case Vl:_.command(on(Me)&&Me.length===4,"uniform "+S,A.commandStr),$="4i";break}w(O,".uniform",$,"(",le,",",on(Me)?Array.prototype.slice.call(Me):Me,");")}continue}else re=V.append(A,w)}else{if(!j(pv))continue;re=w.def(F.uniforms,"[",M.id(S),"]")}q===_c?(_(!Array.isArray(re),"must specify a scalar prop for textures"),w("if(",re,"&&",re,'._reglType==="framebuffer"){',re,"=",re,".color[0];","}")):q===Mc&&(_(!Array.isArray(re),"must specify a scalar prop for cube maps"),w("if(",re,"&&",re,'._reglType==="framebufferCube"){',re,"=",re,".color[0];","}")),_.optional(function(){function gr(ba,wv){A.assert(w,ba,'bad data or missing for uniform "'+S+'".  '+wv)}function bu(ba){_(!Array.isArray(re),"must not specify an array type for uniform"),gr("typeof "+re+'==="'+ba+'"',"invalid type, expected "+ba)}function oa(ba,wv){Array.isArray(re)?_(re.length===ba,"must have length "+ba):gr(F.isArrayLike+"("+re+")&&"+re+".length==="+ba,"invalid vector, should have length "+ba,A.commandStr)}function bv(ba){_(!Array.isArray(re),"must not specify a value type"),gr("typeof "+re+'==="function"&&'+re+'._reglType==="texture'+(ba===rv?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch(q){case mu:bu("number");break;case jl:oa(2,"number");break;case Wl:oa(3,"number");break;case Vl:oa(4,"number");break;case vu:bu("number");break;case Hl:oa(2,"number");break;case Bl:oa(3,"number");break;case Ul:oa(4,"number");break;case gu:bu("boolean");break;case Xl:oa(2,"boolean");break;case Yl:oa(3,"boolean");break;case Kl:oa(4,"boolean");break;case yc:oa(4,"number");break;case bc:oa(9,"number");break;case wc:oa(16,"number");break;case _c:bv(rv);break;case Mc:bv(J5);break}});var xt=1;switch(q){case _c:case Mc:var Pt=w.def(re,"._texture");w(O,".uniform1i(",le,",",Pt,".bind());"),w.exit(Pt,".unbind();");continue;case mu:case gu:$="1i";break;case jl:case Xl:$="2i",xt=2;break;case Wl:case Yl:$="3i",xt=3;break;case Vl:case Kl:$="4i",xt=4;break;case vu:$="1f";break;case Hl:$="2f",xt=2;break;case Bl:$="3f",xt=3;break;case Ul:$="4f",xt=4;break;case yc:$="Matrix2fv";break;case bc:$="Matrix3fv";break;case wc:$="Matrix4fv";break}if(w(O,".uniform",$,"(",le,","),$.charAt(0)==="M"){var ho=Math.pow(q-yc+2,2),Zo=A.global.def("new Float32Array(",ho,")");Array.isArray(re)?w("false,(",Ut(ho,function(gr){return Zo+"["+gr+"]="+re[gr]}),",",Zo,")"):w("false,(Array.isArray(",re,")||",re," instanceof Float32Array)?",re,":(",Ut(ho,function(gr){return Zo+"["+gr+"]="+re+"["+gr+"]"}),",",Zo,")")}else xt>1?w(Ut(xt,function(gr){return Array.isArray(re)?re[gr]:re+"["+gr+"]"})):(_(!Array.isArray(re),"uniform value must not be an array"),w(re));w(");")}}function mt(A,w,I,H){var j=A.shared,F=j.gl,O=j.draw,$=H.draw;function T(){var Pt=$.elements,ho,Zo=w;return Pt?((Pt.contextDep&&H.contextDynamic||Pt.propDep)&&(Zo=I),ho=Pt.append(A,Zo)):ho=Zo.def(O,".",ri),ho&&Zo("if("+ho+")"+F+".bindBuffer("+K5+","+ho+".buffer.buffer);"),ho}function C(){var Pt=$.count,ho,Zo=w;return Pt?((Pt.contextDep&&H.contextDynamic||Pt.propDep)&&(Zo=I),ho=Pt.append(A,Zo),_.optional(function(){Pt.MISSING&&A.assert(w,"false","missing vertex count"),Pt.DYNAMIC&&A.assert(Zo,ho+">=0","missing vertex count")})):(ho=Zo.def(O,".",ii),_.optional(function(){A.assert(Zo,ho+">=0","missing vertex count")})),ho}var S=T();function q(Pt){var ho=$[Pt];return ho?ho.contextDep&&H.contextDynamic||ho.propDep?ho.append(A,I):ho.append(A,w):w.def(O,".",Pt)}var V=q(ai),se=q(Dl),le=C();if(typeof le=="number"){if(le===0)return}else I("if(",le,"){"),I.exit("}");var re,Me;ke&&(re=q(ql),Me=A.instancing);var at=S+".type",Dt=$.elements&&g0($.elements);function Qe(){function Pt(){I(Me,".drawElementsInstancedANGLE(",[V,le,at,se+"<<(("+at+"-"+Fp+")>>1)",re],");")}function ho(){I(Me,".drawArraysInstancedANGLE(",[V,se,le,re],");")}S?Dt?Pt():(I("if(",S,"){"),Pt(),I("}else{"),ho(),I("}")):ho()}function xt(){function Pt(){I(F+".drawElements("+[V,le,at,se+"<<(("+at+"-"+Fp+")>>1)"]+");")}function ho(){I(F+".drawArrays("+[V,se,le]+");")}S?Dt?Pt():(I("if(",S,"){"),Pt(),I("}else{"),ho(),I("}")):ho()}ke&&(typeof re!="number"||re>=0)?typeof re=="string"?(I("if(",re,">0){"),Qe(),I("}else if(",re,"<0){"),xt(),I("}")):Qe():xt()}function Qt(A,w,I,H,j){var F=kt(),O=F.proc("body",j);return _.optional(function(){F.commandStr=w.commandStr,F.command=F.link(w.commandStr)}),ke&&(F.instancing=O.def(F.shared.extensions,".angle_instanced_arrays")),A(F,O,I,H),F.compile().body}function io(A,w,I,H){nn(A,w),I.useVAO?I.drawVAO?w(A.shared.vao,".setVAO(",I.drawVAO.append(A,w),");"):w(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(w(A.shared.vao,".setVAO(null);"),Kn(A,w,I,H.attributes,function(){return!0})),yo(A,w,I,H.uniforms,function(){return!0}),mt(A,w,w,I)}function rn(A,w){var I=A.proc("draw",1);nn(A,I),bn(A,I,w.context),wn(A,I,w.framebuffer),Dn(A,I,w),Yn(A,I,w.state),$t(A,I,w,!1,!0);var H=w.shader.progVar.append(A,I);if(I(A.shared.gl,".useProgram(",H,".program);"),w.shader.program)io(A,I,w,w.shader.program);else{I(A.shared.vao,".setVAO(null);");var j=A.global.def("{}"),F=I.def(H,".id"),O=I.def(j,"[",F,"]");I(A.cond(O).then(O,".call(this,a0);").else(O,"=",j,"[",F,"]=",A.link(function($){return Qt(io,A,w,$,1)}),"(",H,");",O,".call(this,a0);"))}Object.keys(w.state).length>0&&I(A.shared.current,".dirty=true;")}function Fa(A,w,I,H){A.batchId="a1",nn(A,w);function j(){return!0}Kn(A,w,I,H.attributes,j),yo(A,w,I,H.uniforms,j),mt(A,w,w,I)}function ci(A,w,I,H){nn(A,w);var j=I.contextDep,F=w.def(),O="a0",$="a1",T=w.def();A.shared.props=T,A.batchId=F;var C=A.scope(),S=A.scope();w(C.entry,"for(",F,"=0;",F,"<",$,";++",F,"){",T,"=",O,"[",F,"];",S,"}",C.exit);function q(at){return at.contextDep&&j||at.propDep}function V(at){return!q(at)}if(I.needsContext&&bn(A,S,I.context),I.needsFramebuffer&&wn(A,S,I.framebuffer),Yn(A,S,I.state,q),I.profile&&q(I.profile)&&$t(A,S,I,!1,!0),H)I.useVAO?I.drawVAO?q(I.drawVAO)?S(A.shared.vao,".setVAO(",I.drawVAO.append(A,S),");"):C(A.shared.vao,".setVAO(",I.drawVAO.append(A,C),");"):C(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(C(A.shared.vao,".setVAO(null);"),Kn(A,C,I,H.attributes,V),Kn(A,S,I,H.attributes,q)),yo(A,C,I,H.uniforms,V),yo(A,S,I,H.uniforms,q),mt(A,C,S,I);else{var se=A.global.def("{}"),le=I.shader.progVar.append(A,S),re=S.def(le,".id"),Me=S.def(se,"[",re,"]");S(A.shared.gl,".useProgram(",le,".program);","if(!",Me,"){",Me,"=",se,"[",re,"]=",A.link(function(at){return Qt(Fa,A,I,at,2)}),"(",le,");}",Me,".call(this,a0[",F,"],",F,");")}}function z(A,w){var I=A.proc("batch",2);A.batchId="0",nn(A,I);var H=!1,j=!0;Object.keys(w.context).forEach(function(se){H=H||w.context[se].propDep}),H||(bn(A,I,w.context),j=!1);var F=w.framebuffer,O=!1;F?(F.propDep?H=O=!0:F.contextDep&&H&&(O=!0),O||wn(A,I,F)):wn(A,I,null),w.state.viewport&&w.state.viewport.propDep&&(H=!0);function $(se){return se.contextDep&&H||se.propDep}Dn(A,I,w),Yn(A,I,w.state,function(se){return!$(se)}),(!w.profile||!$(w.profile))&&$t(A,I,w,!1,"a1"),w.contextDep=H,w.needsContext=j,w.needsFramebuffer=O;var T=w.shader.progVar;if(T.contextDep&&H||T.propDep)ci(A,I,w,null);else{var C=T.append(A,I);if(I(A.shared.gl,".useProgram(",C,".program);"),w.shader.program)ci(A,I,w,w.shader.program);else{I(A.shared.vao,".setVAO(null);");var S=A.global.def("{}"),q=I.def(C,".id"),V=I.def(S,"[",q,"]");I(A.cond(V).then(V,".call(this,a0,a1);").else(V,"=",S,"[",q,"]=",A.link(function(se){return Qt(ci,A,w,se,2)}),"(",C,");",V,".call(this,a0,a1);"))}}Object.keys(w.state).length>0&&I(A.shared.current,".dirty=true;")}function ee(A,w){var I=A.proc("scope",3);A.batchId="a2";var H=A.shared,j=H.current;bn(A,I,w.context),w.framebuffer&&w.framebuffer.append(A,I),dv(Object.keys(w.state)).forEach(function(O){var $=w.state[O],T=$.append(A,I);on(T)?T.forEach(function(C,S){I.set(A.next[O],"["+S+"]",C)}):I.set(H.next,"."+O,T)}),$t(A,I,w,!0,!0),[ri,Dl,ii,ql,ai].forEach(function(O){var $=w.draw[O];$&&I.set(H.draw,"."+O,""+$.append(A,I))}),Object.keys(w.uniforms).forEach(function(O){var $=w.uniforms[O].append(A,I);Array.isArray($)&&($="["+$.join()+"]"),I.set(H.uniforms,"["+M.id(O)+"]",$)}),Object.keys(w.attributes).forEach(function(O){var $=w.attributes[O].append(A,I),T=A.scopeAttrib(O);Object.keys(new U).forEach(function(C){I.set(T,"."+C,$[C])})}),w.scopeVAO&&I.set(H.vao,".targetVAO",w.scopeVAO.append(A,I));function F(O){var $=w.shader[O];$&&I.set(H.shader,"."+O,$.append(A,I))}F(mc),F(gc),Object.keys(w.state).length>0&&(I(j,".dirty=true;"),I.exit(j,".dirty=true;")),I("a1(",A.shared.context,",a0,",A.batchId,");")}function X(A){if(!(typeof A!="object"||on(A))){for(var w=Object.keys(A),I=0;I<w.length;++I)if(Re.isDynamic(A[w[I]]))return!0;return!1}}function Ve(A,w,I){var H=w.static[I];if(!H||!X(H))return;var j=A.global,F=Object.keys(H),O=!1,$=!1,T=!1,C=A.global.def("{}");F.forEach(function(q){var V=H[q];if(Re.isDynamic(V)){typeof V=="function"&&(V=H[q]=Re.unbox(V));var se=Nr(V,null);O=O||se.thisDep,T=T||se.propDep,$=$||se.contextDep}else{switch(j(C,".",q,"="),typeof V){case"number":j(V);break;case"string":j('"',V,'"');break;case"object":Array.isArray(V)&&j("[",V.join(),"]");break;default:j(A.link(V));break}j(";")}});function S(q,V){F.forEach(function(se){var le=H[se];if(Re.isDynamic(le)){var re=q.invoke(V,le);V(C,".",se,"=",re,";")}})}w.dynamic[I]=new Re.DynamicVariable(Gl,{thisDep:O,contextDep:$,propDep:T,ref:C,append:S}),delete w.static[I]}function Xt(A,w,I,H,j){var F=kt();F.stats=F.link(j),Object.keys(w.static).forEach(function($){Ve(F,w,$)}),Y5.forEach(function($){Ve(F,A,$)});var O=dn(A,w,I,H,F);return rn(F,O),ee(F,O),z(F,O),t(F.compile(),{destroy:function(){O.shader.program.destroy()}})}return{next:Ue,current:de,procs:function(){var A=kt(),w=A.proc("poll"),I=A.proc("refresh"),H=A.block();w(H),I(H);var j=A.shared,F=j.gl,O=j.next,$=j.current;H($,".dirty=false;"),wn(A,w),wn(A,I,null,!0);var T;ke&&(T=A.link(ke)),N.oes_vertex_array_object&&I(A.link(N.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var C=0;C<J.maxAttributes;++C){var S=I.def(j.attributes,"[",C,"]"),q=A.cond(S,".buffer");q.then(F,".enableVertexAttribArray(",C,");",F,".bindBuffer(",as,",",S,".buffer.buffer);",F,".vertexAttribPointer(",C,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(F,".disableVertexAttribArray(",C,");",F,".vertexAttrib4f(",C,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),I(q),ke&&I(T,".vertexAttribDivisorANGLE(",C,",",S,".divisor);")}return I(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Ce).forEach(function(V){var se=Ce[V],le=H.def(O,".",V),re=A.block();re("if(",le,"){",F,".enable(",se,")}else{",F,".disable(",se,")}",$,".",V,"=",le,";"),I(re),w("if(",le,"!==",$,".",V,"){",re,"}")}),Object.keys(pe).forEach(function(V){var se=pe[V],le=de[V],re,Me,at=A.block();if(at(F,".",se,"("),on(le)){var Dt=le.length;re=A.global.def(O,".",V),Me=A.global.def($,".",V),at(Ut(Dt,function(Qe){return re+"["+Qe+"]"}),");",Ut(Dt,function(Qe){return Me+"["+Qe+"]="+re+"["+Qe+"];"}).join("")),w("if(",Ut(Dt,function(Qe){return re+"["+Qe+"]!=="+Me+"["+Qe+"]"}).join("||"),"){",at,"}")}else re=H.def(O,".",V),Me=H.def($,".",V),at(re,");",$,".",V,"=",re,";"),w("if(",re,"!==",Me,"){",at,"}");I(at)}),A.compile()}(),compile:Xt}}function vw(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var mw=34918,gw=34919,vv=35007,xw=function(x,M){if(!M.ext_disjoint_timer_query)return null;var N=[];function J(){return N.pop()||M.ext_disjoint_timer_query.createQueryEXT()}function ce(ke){N.push(ke)}var Q=[];function oe(ke){var qe=J();M.ext_disjoint_timer_query.beginQueryEXT(vv,qe),Q.push(qe),ye(Q.length-1,Q.length,ke)}function xe(){M.ext_disjoint_timer_query.endQueryEXT(vv)}function we(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Ee=[];function _e(){return Ee.pop()||new we}function Te(ke){Ee.push(ke)}var Fe=[];function ye(ke,qe,de){var Ue=_e();Ue.startQueryIndex=ke,Ue.endQueryIndex=qe,Ue.sum=0,Ue.stats=de,Fe.push(Ue)}var Ne=[],U=[];function ne(){var ke,qe,de=Q.length;if(de!==0){U.length=Math.max(U.length,de+1),Ne.length=Math.max(Ne.length,de+1),Ne[0]=0,U[0]=0;var Ue=0;for(ke=0,qe=0;qe<Q.length;++qe){var me=Q[qe];M.ext_disjoint_timer_query.getQueryObjectEXT(me,gw)?(Ue+=M.ext_disjoint_timer_query.getQueryObjectEXT(me,mw),ce(me)):Q[ke++]=me,Ne[qe+1]=Ue,U[qe+1]=ke}for(Q.length=ke,ke=0,qe=0;qe<Fe.length;++qe){var Ce=Fe[qe],pe=Ce.startQueryIndex,Pe=Ce.endQueryIndex;Ce.sum+=Ne[Pe]-Ne[pe];var ht=U[pe],zt=U[Pe];zt===ht?(Ce.stats.gpuTime+=Ce.sum/1e6,Te(Ce)):(Ce.startQueryIndex=ht,Ce.endQueryIndex=zt,Fe[ke++]=Ce)}Fe.length=ke}}return{beginQuery:oe,endQuery:xe,pushScopeStats:ye,update:ne,getNumPendingQueries:function(){return Q.length},clear:function(){N.push.apply(N,Q);for(var ke=0;ke<N.length;ke++)M.ext_disjoint_timer_query.deleteQueryEXT(N[ke]);Q.length=0,N.length=0},restore:function(){Q.length=0,N.length=0}}},yw=16384,bw=256,ww=1024,_w=34962,mv="webglcontextlost",gv="webglcontextrestored",xv=1,Mw=2,kw=3;function yv(x,M){for(var N=0;N<x.length;++N)if(x[N]===M)return N;return-1}function Ew(x){var M=yt(x);if(!M)return null;var N=M.gl,J=N.getContextAttributes(),ce=N.isContextLost(),Q=wt(N,M);if(!Q)return null;var oe=nt(),xe=vw(),we=Q.extensions,Ee=xw(N,we),_e=ze(),Te=N.drawingBufferWidth,Fe=N.drawingBufferHeight,ye={tick:0,time:0,viewportWidth:Te,viewportHeight:Fe,framebufferWidth:Te,framebufferHeight:Fe,drawingBufferWidth:Te,drawingBufferHeight:Fe,pixelRatio:M.pixelRatio},Ne={},U={elements:null,primitive:4,count:-1,offset:0,instances:-1},ne=fb(N,we),ke=Sb(N,xe,M,de),qe=G5(N,we,ne,xe,ke);function de(mt){return qe.destroyBuffer(mt)}var Ue=Gb(N,we,ke,xe),me=H5(N,oe,xe,M),Ce=v5(N,we,ne,function(){ht.procs.poll()},ye,xe,M),pe=m5(N,we,ne,xe,M),Pe=O5(N,we,ne,Ce,pe,xe),ht=pw(N,oe,we,ne,ke,Ue,Ce,Pe,Ne,qe,me,U,ye,Ee,M),zt=j5(N,Pe,ht.procs.poll,ye,J,we,ne),Ge=ht.next,Se=N.canvas,ue=[],kt=[],Gt=[],Ke=[M.onDestroy],Vt=null;function Ct(){if(ue.length===0){Ee&&Ee.update(),Vt=null;return}Vt=Oe.next(Ct),Yn();for(var mt=ue.length-1;mt>=0;--mt){var Qt=ue[mt];Qt&&Qt(ye,null,0)}N.flush(),Ee&&Ee.update()}function Bt(){!Vt&&ue.length>0&&(Vt=Oe.next(Ct))}function fo(){Vt&&(Oe.cancel(Ct),Vt=null)}function un(mt){mt.preventDefault(),ce=!0,fo(),kt.forEach(function(Qt){Qt()})}function Tn(mt){N.getError(),ce=!1,Q.restore(),me.restore(),ke.restore(),Ce.restore(),pe.restore(),Pe.restore(),qe.restore(),Ee&&Ee.restore(),ht.procs.refresh(),Bt(),Gt.forEach(function(Qt){Qt()})}Se&&(Se.addEventListener(mv,un,!1),Se.addEventListener(gv,Tn,!1));function Jt(){ue.length=0,fo(),Se&&(Se.removeEventListener(mv,un),Se.removeEventListener(gv,Tn)),me.clear(),Pe.clear(),pe.clear(),Ce.clear(),Ue.clear(),ke.clear(),qe.clear(),Ee&&Ee.clear(),Ke.forEach(function(mt){mt()})}function yn(mt){_(!!mt,"invalid args to regl({...})"),_.type(mt,"object","invalid args to regl({...})");function Qt(j){var F=t({},j);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function O($){if($ in F){var T=F[$];delete F[$],Object.keys(T).forEach(function(C){F[$+"."+C]=T[C]})}}return O("blend"),O("depth"),O("cull"),O("stencil"),O("polygonOffset"),O("scissor"),O("sample"),"vao"in j&&(F.vao=j.vao),F}function io(j,F){var O={},$={};return Object.keys(j).forEach(function(T){var C=j[T];if(Re.isDynamic(C)){$[T]=Re.unbox(C,T);return}else if(F&&Array.isArray(C)){for(var S=0;S<C.length;++S)if(Re.isDynamic(C[S])){$[T]=Re.unbox(C,T);return}}O[T]=C}),{dynamic:$,static:O}}var rn=io(mt.context||{},!0),Fa=io(mt.uniforms||{},!0),ci=io(mt.attributes||{},!1),z=io(Qt(mt),!1),ee={gpuTime:0,cpuTime:0,count:0},X=ht.compile(z,ci,Fa,rn,ee),Ve=X.draw,Xt=X.batch,A=X.scope,w=[];function I(j){for(;w.length<j;)w.push(null);return w}function H(j,F){var O;if(ce&&_.raise("context lost"),typeof j=="function")return A.call(this,null,j,0);if(typeof F=="function")if(typeof j=="number")for(O=0;O<j;++O)A.call(this,null,F,O);else if(Array.isArray(j))for(O=0;O<j.length;++O)A.call(this,j[O],F,O);else return A.call(this,j,F,0);else if(typeof j=="number"){if(j>0)return Xt.call(this,I(j|0),j|0)}else if(Array.isArray(j)){if(j.length)return Xt.call(this,j,j.length)}else return Ve.call(this,j)}return t(H,{stats:ee,destroy:function(){X.destroy()}})}var Go=Pe.setFBO=yn({framebuffer:Re.define.call(null,xv,"framebuffer")});function dn(mt,Qt){var io=0;ht.procs.poll();var rn=Qt.color;rn&&(N.clearColor(+rn[0]||0,+rn[1]||0,+rn[2]||0,+rn[3]||0),io|=yw),"depth"in Qt&&(N.clearDepth(+Qt.depth),io|=bw),"stencil"in Qt&&(N.clearStencil(Qt.stencil|0),io|=ww),_(!!io,"called regl.clear with no buffer specified"),N.clear(io)}function bn(mt){if(_(typeof mt=="object"&&mt,"regl.clear() takes an object as input"),"framebuffer"in mt)if(mt.framebuffer&&mt.framebuffer_reglType==="framebufferCube")for(var Qt=0;Qt<6;++Qt)Go(t({framebuffer:mt.framebuffer.faces[Qt]},mt),dn);else Go(mt,dn);else dn(null,mt)}function wn(mt){_.type(mt,"function","regl.frame() callback must be a function"),ue.push(mt);function Qt(){var io=yv(ue,mt);_(io>=0,"cannot cancel a frame twice");function rn(){var Fa=yv(ue,rn);ue[Fa]=ue[ue.length-1],ue.length-=1,ue.length<=0&&fo()}ue[io]=rn}return Bt(),{cancel:Qt}}function Dn(){var mt=Ge.viewport,Qt=Ge.scissor_box;mt[0]=mt[1]=Qt[0]=Qt[1]=0,ye.viewportWidth=ye.framebufferWidth=ye.drawingBufferWidth=mt[2]=Qt[2]=N.drawingBufferWidth,ye.viewportHeight=ye.framebufferHeight=ye.drawingBufferHeight=mt[3]=Qt[3]=N.drawingBufferHeight}function Yn(){ye.tick+=1,ye.time=$t(),Dn(),ht.procs.poll()}function nn(){Ce.refresh(),Dn(),ht.procs.refresh(),Ee&&Ee.update()}function $t(){return(ze()-_e)/1e3}nn();function Kn(mt,Qt){_.type(Qt,"function","listener callback must be a function");var io;switch(mt){case"frame":return wn(Qt);case"lost":io=kt;break;case"restore":io=Gt;break;case"destroy":io=Ke;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return io.push(Qt),{cancel:function(){for(var rn=0;rn<io.length;++rn)if(io[rn]===Qt){io[rn]=io[io.length-1],io.pop();return}}}}var yo=t(yn,{clear:bn,prop:Re.define.bind(null,xv),context:Re.define.bind(null,Mw),this:Re.define.bind(null,kw),draw:yn({}),buffer:function(mt){return ke.create(mt,_w,!1,!1)},elements:function(mt){return Ue.create(mt,!1)},texture:Ce.create2D,cube:Ce.createCube,renderbuffer:pe.create,framebuffer:Pe.create,framebufferCube:Pe.createCube,vao:qe.createVAO,attributes:J,frame:wn,on:Kn,limits:ne,hasExtension:function(mt){return ne.extensions.indexOf(mt.toLowerCase())>=0},read:zt,destroy:Jt,_gl:N,_refresh:nn,poll:function(){Yn(),Ee&&Ee.update()},now:$t,stats:xe});return M.onDone(null,yo),yo}return Ew})});var li=ve((DE,Bv)=>{"use strict";var Qa=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Za=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Ga=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],rf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Nc=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],zu=e=>Math.hypot(e[0],e[1],e[2]),ra=e=>{let t=zu(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function ds(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=[0,0,0];for(let u=0;u<3;u++)l[u]=.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-f[u])*a*a+(-i[u]+3*s[u]-3*c[u]+f[u])*a*a*a);return l}function Dw(e,t){return ds(e.map(o=>[o,0,0]),t)[0]}function qw(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,d)=>{let p=new Array(9);for(let v=0;v<3;v++)for(let m=0;m<3;m++)p[v*3+m]=h[v*3]*d[m]+h[v*3+1]*d[3+m]+h[v*3+2]*d[6+m];return p},f=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,d,p)=>{let v=f([h,d,p]);i.t=[i.t[0]+v[0]*i.s,i.t[1]+v[1]*i.s,i.t[2]+v[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let d=Math.cos(h),p=Math.sin(h);i.r=c(i.r,[d,0,p,0,1,0,-p,0,d])},r.vert=(h,d,p)=>{let v=p||r.curMat,m=f(h),g=ra(f(d));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(v[0],v[1],v[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],u=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,d,p)=>{let v=l(h),m=Nc(Qa(l(d),v),Qa(l(p),v)),g=Za(Za(u(h),u(d)),u(p));rf(m,g)<0?o.push(h,p,d):o.push(h,d,p)},r.box=(h,d,p,v,m,g,y)=>{let b=[[[h,d,p],[v,d,p],[h,m,p],[v,m,p],[0,0,-1]],[[v,d,g],[h,d,g],[v,m,g],[h,m,g],[0,0,1]],[[h,d,g],[h,d,p],[h,m,g],[h,m,p],[-1,0,0]],[[v,d,p],[v,d,g],[v,m,p],[v,m,g],[1,0,0]],[[h,m,p],[v,m,p],[h,m,g],[v,m,g],[0,1,0]],[[h,d,g],[v,d,g],[h,d,p],[v,d,p],[0,-1,0]]];for(let k of b){let E=r.vert(k[0],k[4],y),L=r.vert(k[1],k[4],y),R=r.vert(k[2],k[4],y),W=r.vert(k[3],k[4],y);r.tri(E,L,R),r.tri(L,W,R)}},r.surface=(h,d,p,v)=>{v=v||{};let m=.001,g=E=>Math.min(1,Math.max(0,E)),y=[],b=[];for(let E=0;E<=d;E++){let L=[],R=[];for(let W=0;W<=p;W++){let P=E/d,te=W/p,G=h(P,te),ae=Math.min(1-m,Math.max(m,P)),D=v.wrapV?te:Math.min(1-m,Math.max(m,te)),Y=Qa(h(g(ae+m),D),h(g(ae-m),D)),Le=v.wrapV?D+m:g(D+m),He=v.wrapV?D-m:g(D-m),fe=Qa(h(ae,Le),h(ae,He)),ie=Nc(Y,fe);zu(ie)<1e-14&&(ie=v.inside?Qa(G,v.inside(P,te)):[0,1,0]),ie=ra(ie),v.inside&&rf(ie,Qa(G,v.inside(P,te)))<0&&(ie=Ga(ie,-1));let Ae=v.mat?v.mat(P,te,G):null;L.push(r.vert(G,ie,Ae)),v.double&&R.push(r.vert(G,Ga(ie,-1),Ae))}y.push(L),b.push(R)}let k=E=>{for(let L=0;L<d;L++)for(let R=0;R<p;R++){let W=E[L][R],P=E[L+1][R],te=E[L][R+1],G=E[L+1][R+1];r.tri(W,P,te),r.tri(P,G,te)}};k(y),v.double&&k(b)},r.ellipsoid=(h,d,p,v,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let k=y*Math.PI,E=b*Math.PI*2,L=g?g(y,b):1;return[h[0]+d[0]*L*Math.sin(k)*Math.cos(E),h[1]+d[1]*L*Math.cos(k),h[2]+d[2]*L*Math.sin(k)*Math.sin(E)]},p||10,v||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,d,p,v,m)=>{m=m||{};let g=40,y=[],b=null;for(let L=0;L<=g;L++){let R=L/g,W=ds(h,Math.max(0,R-.01)),P=ds(h,Math.min(1,R+.01)),te=ra(Qa(P,W)),G;if(b)G=ra(Qa(b,Ga(te,rf(b,te))));else{let ae=Math.abs(te[1])<.9?[0,1,0]:[1,0,0];G=ra(Nc(te,ae))}y.push({N:G,B:ra(Nc(te,G))}),b=G}let k=L=>{let R=Math.min(Math.max(L,0),1)*g,W=Math.min(g-1,Math.floor(R)),P=R-W,te=y[W],G=y[W+1];return{N:ra(Za(Ga(te.N,1-P),Ga(G.N,P))),B:ra(Za(Ga(te.B,1-P),Ga(G.B,P)))}},E=m.squash||[1,1];r.surface((L,R)=>{let W=ds(h,L),P=k(L),te=d(L),G=R*Math.PI*2;return Za(W,Za(Ga(P.N,Math.cos(G)*te*E[0]),Ga(P.B,Math.sin(G)*te*E[1])))},p||12,v||8,{wrapV:!0,inside:L=>ds(h,L),mat:m.mat})},r.lathe=(h,d,p,v,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],k=h[y+1][1]-h[y][1];g.push(ra([k,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],k=h[y+1],E=y===0||b[2]===1,L=y===h.length-2||k[2]===1,R=E?g[y]:ra(Za(g[y-1],g[y])),W=L?g[y]:ra(Za(g[y],g[y+1])),P=[],te=[];for(let G=0;G<=v;G++){let ae=G/v*Math.PI*2,D=Math.cos(ae),Y=Math.sin(ae),Le=m.mat?m.mat(ae,b[1]):null,He=m.mat?m.mat(ae,k[1]):null;P.push(r.vert([d+b[0]*D,b[1],p+b[0]*Y],[R[0]*D,R[1],R[0]*Y],Le)),te.push(r.vert([d+k[0]*D,k[1],p+k[0]*Y],[W[0]*D,W[1],W[0]*Y],He))}for(let G=0;G<v;G++)r.tri(P[G],P[G+1],te[G]),r.tri(P[G+1],te[G+1],te[G])}},r}Bv.exports={createBuilder:qw,catmull:ds,curve1:Dw,sub:Qa,add:Za,mul:Ga,dot:rf,cross:Nc,norm:ra,len:zu}});var Vv=ve((qE,Wv)=>{"use strict";var{norm:af,add:sf,mul:y0,sub:Hw,cross:Uv}=li(),jv=Math.PI*2,Bw=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function Uw(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function jw(e,t,o,n,r,a){let i=(h,d)=>[7,h*a,d];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,f=20,l=6,u=a*.075;return e.surface((h,d)=>{let p=s+h*c,v=a*(.96-.12*h),m=d*jv,g=d*f%1,y=v-u*4*g*(1-g);return[t+y*Math.cos(m),p,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,d)=>[7,d*jv*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function Ww(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function Vw(e,t,o,n,r){e.save(),e.translate(t,0,o),Ww(e,n,r),e.restore()}function Xw(e,t,o,n,r,a){let i=Uw(n),s=a?af([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let u=l>=c-2,h=l*2.399963+i()*.5,d=[Math.cos(h),0,Math.sin(h)],p=[-Math.sin(h),0,Math.cos(h)],v=l*.618%1,m=u?.06+i()*.06:.12+.62*v,g=1;if(s){let ie=d[0]*s[0]+d[2]*s[2];g=.25+.75*Bw(-.7,.5,ie),m*=g}let y=u?1.1+i()*.25:.85+.55*(1-v*.55)+i()*.15,b=u?1+i()*.2:.95+i()*.28,k=u?.055:.215+i()*.05,E=.04+i()*.05,L=[d[0]*E,f,d[2]*E],R=[L[0]+d[0]*Math.sin(m)*y*.92,L[1]+Math.cos(m)*y,L[2]+d[2]*Math.sin(m)*y*.92],W=[L[0]+d[0]*Math.sin(m*.5)*y*.45,L[1]+y*.5,L[2]+d[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([L,W,R],ie=>.02-.008*ie,8,7);let P=24,te=m*.9+.05,G=m+(u?.12:(.95+.45*v)*(.35+.65*g)),ae=[R],D=[],Y=R;for(let ie=0;ie<P;ie++){let Ae=ie/P,ft=te+(G-te)*Ae*Ae,Nt=[d[0]*Math.sin(ft),Math.cos(ft),d[2]*Math.sin(ft)];D.push(Nt),Y=sf(Y,y0(Nt,b/P)),ae.push(Y)}D.push(D[D.length-1]);let Le=ie=>{let Ae=ie*P,ft=Math.min(P-1,Math.floor(Ae)),Nt=Ae-ft;return sf(y0(ae[ft],1-Nt),y0(ae[ft+1],Nt))},He=ie=>{let Ae=ie*P,ft=Math.min(P,Math.floor(Ae)),Nt=Math.min(P,ft+1),Mt=Ae-ft;return af(sf(y0(D[ft],1-Mt),y0(D[Nt],Mt)))},fe=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((ie,Ae)=>{let ft=Ae*2-1,Nt=Le(ie),Mt=He(ie),ro=fe*ie,St=sf(y0(p,Math.cos(ro)),y0(Uv(Mt,p),Math.sin(ro)));St=af(Hw(St,y0(Mt,St[0]*Mt[0]+St[1]*Mt[1]+St[2]*Mt[2])));let qt=af(Uv(St,Mt)),ko=k*Math.pow(Math.sin(Math.PI*Math.pow(ie,.72)),.85),Fn=.3*ko*Math.abs(ft)+.012*Math.sin(ie*40+ft*2)*Math.abs(ft)*(u?0:1),Xe=-.1*ko*ft*ft*ft*ft,ut=Fn+Xe;return[Nt[0]+St[0]*ft*ko+qt[0]*ut,Nt[1]+St[1]*ft*ko+qt[1]*ut,Nt[2]+St[2]*ft*ko+qt[2]*ut]},14,8,{double:!0,mat:(ie,Ae)=>[2,Ae*2-1,ie]})}e.restore()}Wv.exports={addFlutedColumn:jw,addStatue:Vw,addPlant:Xw}});var b0=ve((HE,Qv)=>{"use strict";var be={xc:7,r:2.5,spring:4.7};be.x0=be.xc-be.r;be.x1=be.xc+be.r;be.top=be.spring+be.r;var br=.06,Bo=.1,Xv=.08,cf=be.r,lf=[be.x0+cf/3,be.x0+2*cf/3,be.xc+cf/3,be.xc+2*cf/3],ps=.28,Nu=[.95,1.65,2.35,3.05,3.75],Yv=[1.05,1.8],Rc=[8,0,0],Hr=[0,0,0];function aa(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function vs(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function ff(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let f=(l,u,h)=>[be.xc+u*Math.cos(l),be.spring+u*Math.sin(l),h];for(let l=0;l<i;l++){let u=s+(c-s)*l/i,h=s+(c-s)*(l+1)/i,d=(u+h)/2;vs(e,f(u,t,r),f(h,t,r),f(h,o,r),f(u,o,r),[0,0,1],a),vs(e,f(u,o,n),f(h,o,n),f(h,t,n),f(u,t,n),[0,0,-1],a),vs(e,f(u,t,n),f(h,t,n),f(h,t,r),f(u,t,r),[-Math.cos(d),-Math.sin(d),0],a),vs(e,f(h,o,n),f(u,o,n),f(u,o,r),f(h,o,r),[Math.cos(d),Math.sin(d),0],a)}}function Yw(e){let n=a=>[be.xc+be.r*Math.cos(a),be.spring+be.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?be.r/Math.abs(i):1/0,f=s>1e-6?(8-be.spring)/s:1/0,l=Math.min(c,f);return[Math.min(be.x1,Math.max(be.x0,be.xc+i*l)),Math.min(8,be.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),l=r(i),u=r(s);for(let[d,p]of[[.35,1],[-.35,-1]])vs(e,[c[0],c[1],d],[f[0],f[1],d],[u[0],u[1],d],[l[0],l[1],d],[0,0,p],Hr);let h=(i+s)/2;vs(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Hr)}}function Kw(e){aa(e,-.35,0,-.35,be.x0,8,.35,Hr),aa(e,be.x1,0,-.35,14+.35,8,.35,Hr),Yw(e),Kv(e)}function Kv(e){aa(e,be.x0-.32,.3,.35,be.x0,be.spring,.35+.07,Hr),aa(e,be.x1,.3,.35,be.x1+.32,be.spring,.35+.07,Hr),aa(e,be.x0-.32-.05,0,.35,be.x0,.3,.35+.07+.04,Hr),aa(e,be.x1,0,.35,be.x1+.32+.05,.3,.35+.07+.04,Hr),aa(e,be.x0-.32-.06,be.spring-.12,.35,be.x0,be.spring,.35+.07+.05,Hr),aa(e,be.x1,be.spring-.12,.35,be.x1+.32+.06,be.spring,.35+.07+.05,Hr),ff(e,be.r,be.r+.32,.35,.35+.07,Hr),ff(e,be.r+.32,be.r+.32+.06,.35,.35+.07+.03,Hr),aa(e,be.xc-.22,be.top-.08,.35,be.xc+.22,be.top+.32+.12,.35+.07+.06,Hr)}function Qw(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-Xv/2,a=Xv/2,i=(h,d,p,v,m=0)=>aa(e,h-m,d,r,p+m,v,a,Rc),s=h=>be.spring+Math.sqrt(Math.max(0,be.r*be.r-(h-be.xc)*(h-be.xc))),c=t==="right"?be.xc:be.x0,f=t==="left"?be.xc:be.x1,l=h=>o||t==="left"&&h<be.xc||t==="right"&&h>be.xc,u=o?null:be.spring-.06;if(n){i(be.x0,0,be.x0+Bo,be.spring),i(be.x1-Bo,0,be.x1,be.spring),ff(e,be.r-Bo,be.r,r,a,Rc,64),i(be.x0,0,be.x1,.05),i(be.x0,be.spring-.06,be.x1,be.spring+.06);for(let h of Yv)ff(e,h-br/2,h+br/2,r,a,Rc,48)}if(o){i(be.x0,0,be.x1,ps),i(be.xc-Bo/2,0,be.xc+Bo/2,be.top-Bo*.5);for(let h of lf)i(h-br/2,ps,h+br/2,s(h)-Bo*.5);for(let h of Nu)i(be.x0,h-br/2,be.x1,h+br/2)}else if(t==="fixed"){i(be.xc-Bo/2,be.spring+.06,be.xc+Bo/2,be.top-Bo*.5);for(let h of lf)i(h-br/2,be.spring+.06,h+br/2,s(h)-Bo*.5)}else{let h=t==="left"?be.x0+Bo:be.x1-Bo;i(Math.min(h,h+(t==="left"?Bo*.8:-Bo*.8)),.05,Math.max(h,h+(t==="left"?Bo*.8:-Bo*.8)),u),i(c,.05,f,ps),i(c,u-.07,f,u);let d=t==="left"?be.xc-Bo/2:be.xc;i(d,.05,d+Bo/2,u);for(let p of lf)l(p)&&i(p-br/2,ps,p+br/2,u-.07);for(let p of Nu)i(c,p-br/2,f,p+br/2)}for(let h of[-1,1]){let d=be.xc+h*.16;l(d)&&(aa(e,d-.02,1.05,a,d+.02,1.13,a+.06,Rc),aa(e,d-(h>0?0:.14),1.07,a+.05,d+(h>0?.14:0),1.11,a+.08,Rc))}}function Zw(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=be;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:r;if(t.push([f,0,o],[l,0,o],[l,s,o],[f,0,o],[l,s,o],[f,s,o]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,u=Math.PI*(f+1)/c;t.push([a,s,o],[a+i*Math.cos(l),s+i*Math.sin(l),o],[a+i*Math.cos(u),s+i*Math.sin(u),o])}return t}var Ao=e=>e.toFixed(4);function Jw(){let e=lf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Ao(n)}), ${Ao(br/2)}, soft));`).join(`
		`),t=Nu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Ao(n)}), ${Ao(br/2)}, soft));`).join(`
		`),o=Yv.map(n=>`ab = max(ab, barCover(abs(rr - ${Ao(n)}), ${Ao(br/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Ao(be.x0)} - soft, ${Ao(be.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Ao(be.x1)} - soft, ${Ao(be.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Ao(be.xc)}, ${Ao(be.spring)}));
		float arch = q.y < ${Ao(be.spring)} ? 1.0 : 1.0 - smoothstep(${Ao(be.r)} - soft, ${Ao(be.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Ao(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Ao(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Ao(be.xc)}, ${Ao(be.spring)}));
		float vb = barCover(abs(q.x - ${Ao(be.xc)}), ${Ao(Bo/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Ao(be.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Ao(ps)} - soft, ${Ao(ps)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Ao(be.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Ao(be.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Ao(be.x0+Bo/2)}), ${Ao(Bo/2)}, soft),
			barCover(abs(q.x - ${Ao(be.x1-Bo/2)}), ${Ao(Bo/2)}, soft));
		frame = q.y < ${Ao(be.spring)} ? frame : barCover(abs(rr - ${Ao(be.r-Bo/2)}), ${Ao(Bo/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Qv.exports={addEntranceWall:Kw,addSurround:Kv,addFrames:Qw,glassPanes:Zw,doorLightGLSL:Jw,DOOR:be,WALL:.35}});var gs=ve((BE,nm)=>{"use strict";var hi=1.1583333333333334,ui=(13.05-8*.16)/9,Cu=hi+.16,Pu=ui+.16,e0=14/2-7.75/2,Br=15,Cc=e0+7.75,Ja=Br+13.05,Ur=.3,t0={y:8+.18,inset:.15},fi={y:8+.36,inset:Ur},Iu=8+.2,Pc=8+.62,Ou=8+.9,Fu=.016,tm=.28,om=.66,e4=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),t4=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),o4=[9,0,0],Qn=[10,0,0];function ms(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function wr(e,t,o,n,r,a,i){ms(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function Ru(e,t,o,n,r,a,i,s){ms(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),ms(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),ms(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),ms(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function Zv(e,t,o,n,r){wr(e,t[0],t[1],t[2],o[1],n,r),wr(e,t[0],o[3],t[2],t[3],n,r),wr(e,t[0],o[1],o[0],o[3],n,r),wr(e,o[2],o[1],t[2],o[3],n,r)}var Jv=e=>e0+e*Cu,em=e=>Br+e*Pu;function n4(e,t,o=48){let n=[e0-Ur,Br-Ur,Cc+Ur,Ja+Ur],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,t0.inset),i=r(n,fi.inset);wr(e,0,0,14,n[1],8,t),wr(e,0,n[3],14,o,8,t),wr(e,0,n[1],n[0],n[3],8,t),wr(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],Qn),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,Qn),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],Qn),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],Qn),Ru(e,...n.slice(0,2),...n.slice(2),8,t0.y,Qn),Zv(e,n,a,t0.y,Qn),Ru(e,...a.slice(0,2),...a.slice(2),t0.y,fi.y,Qn),Zv(e,a,i,fi.y,Qn);for(let f=1;f<6;f++){let l=Jv(f)-.16;e.box(l,Iu,Br,l+.16,fi.y,Ja,Qn)}for(let f=1;f<9;f++){let l=em(f)-.16;e.box(e0,Iu,l,Cc,fi.y,l+.16,Qn)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let u=Jv(l),h=em(f);Ru(e,u,h,u+hi,h+ui,fi.y,Ou,Qn),wr(e,u,h,u+hi,h+ui,Ou,o4),r4(e,u+hi/2,h+ui/2,hi/2,ui/2)}}function r4(e,t,o,n,r){let a=Pc,i=Fu;wr(e,t-n,o-i,t+n,o+i,a,Qn),wr(e,t-i,o-r,t+i,o+r,a,Qn);for(let s of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=s*r/c,u=-l*i,h=f*i;ms(e,[t-f*c+u,a,o-l*c+h],[t+f*c+u,a,o+l*c+h],[t+f*c-u,a,o+l*c-h],[t-f*c-u,a,o-l*c-h],[0,-1,0],Qn)}for(let s of[tm,om]){let c=s*n,f=s*r;wr(e,t-c-i,o-f-i,t+c+i,o-f+i,a,Qn),wr(e,t-c-i,o+f-i,t+c+i,o+f+i,a,Qn),wr(e,t-c-i,o-f+i,t-c+i,o+f-i,a,Qn),wr(e,t+c-i,o-f+i,t+c+i,o+f-i,a,Qn)}}var It=e=>e.toFixed(4);function a4(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${e4.map(It).join(", ")});
	const vec3 SKY_MOON = vec3(${t4.map(It).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${It(e0)}, ${It(Br)});
		vec2 pitch = vec2(${It(Cu)}, ${It(Pu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${It(5)} || cell.y > ${It(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${It(hi)}, ${It(ui)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${It(Fu)} - soft, ${It(Fu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${It(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${It(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${It(t0.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${It(Iu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${It(fi.y)} - p.y) / L.y)).xz;
		float tG = (${It(Pc)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${It(Ou)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${It(e0-Ur)}, ${It(Br-Ur)}, ${It(Cc+Ur)}, ${It(Ja+Ur)}), soft)
		           * rectOpen(q1, vec4(${It(e0-Ur+t0.inset)}, ${It(Br-Ur+t0.inset)}, ${It(Cc+Ur-t0.inset)}, ${It(Ja+Ur-t0.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${It(e0)}, ${It(Br)});
		vec2 pitch = vec2(${It(Cu)}, ${It(Pu)});
		vec2 paneHalf = vec2(${It(hi/2)}, ${It(ui/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${It(tm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${It(om)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${It(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${It(Pc)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${It(e0)}, ${It(Br)}, ${It(Cc)}, ${It(Ja)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${It(14/2)}, ${It((Br+Ja)/2)}) - L.xz * (${It(Pc)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${It(7.75/2)}, ${It(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${It(Br-3)}, ${It(Br+2)}, p.z)
		        * (1.0 - smoothstep(${It(Ja-2)}, ${It(Ja+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${It(7.75/2)}, ${It(14/2)}, abs(p.x - ${It(14/2)}));
		return z * x;
	}`}nm.exports={addSkylight:n4,skylightGLSL:a4,Z_START:Br,Z_END:Ja,GLASS_Y:Pc,HEIGHT:8}});var or=ve((UE,cm)=>{"use strict";var ys=b0(),qu=8,Uo=.35,De={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:qu},rm=(De.z1-De.z0)/2,Gu=De.crown-De.spring,Du=(Gu*Gu+rm*rm)/(2*Gu),Hu=De.crown-Du;function xs(e){let t=e-De.zc;return Hu+Math.sqrt(Math.max(0,Du*Du-t*t))}var _t={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},wa=Array.from({length:_t.count},(e,t)=>_t.first+t*_t.pitch),im=wa.slice(1).map(e=>e-_t.pitch/2),i4=[wa[0],wa[2],wa[4]],uf=[wa[1],wa[3]],Rr={r:1.3,sill:.62,spring:3.3},No=[0,0,0],Ic=[11,0,0],w0=[10,0,0],Oc=[8,0,0];function qn(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Cr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function Fc(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,f=new Set([o,n]);for(let v of s){f.add(v.u0),f.add(v.u1);let m=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.08)));for(let g=1;g<m;g++)f.add(v.u0+(v.u1-v.u0)*g/m)}for(let v of t.cuts||[])f.add(v);let l=t.topStep||.5;for(let v=o;v<n;v+=l)f.add(v);let u=[...f].filter(v=>v>=o-1e-9&&v<=n+1e-9).sort((v,m)=>v-m),h=(v,m)=>v.bot?v.bot(m):v.bottom,d=(v,m)=>{let g=i(v),y=m.map(E=>[Math.max(0,h(E,v)),Math.min(E.head(v),g)]).filter(E=>E[1]>E[0]).sort((E,L)=>E[0]-L[0]),b=[],k=0;for(let E of y)E[0]>k+1e-6&&b.push([k,E[0]]),k=Math.max(k,E[1]);return g>k+1e-6&&b.push([k,g]),b},p=(v,m,g)=>[v,m,g];for(let v=0;v<u.length-1;v++){let m=u[v],g=u[v+1],y=(m+g)/2,b=s.filter(P=>y>P.u0&&y<P.u1),k=b.length?Math.max(m,Math.max(...b.map(P=>P.u0))+1e-7):m,E=b.length?Math.min(g,Math.min(...b.map(P=>P.u1))-1e-7):g,L=d(k,b),R=d(E,b),W=Math.min(L.length,R.length);for(let P=0;P<W;P++){let[te,G]=L[P],[ae,D]=R[P];G-te<1e-6&&D-ae<1e-6||(qn(e,p(m,te,a),p(g,ae,a),p(g,D,a),p(m,G,a),[0,0,1],c),t.frontOnly||qn(e,p(g,ae,r),p(m,te,r),p(m,G,r),p(g,D,r),[0,0,-1],c))}}t.noEnds||(qn(e,p(o,0,r),p(o,0,a),p(o,i(o),a),p(o,i(o),r),[-1,0,0],c),qn(e,p(n,0,a),p(n,0,r),p(n,i(n),r),p(n,i(n),a),[1,0,0],c));for(let v of s){if(v.noReveal)continue;let m=v.mat||t.revealMat||c,g=Math.max(0,h(v,v.u0+1e-7)),y=Math.max(0,h(v,v.u1-1e-7)),b=Math.min(v.head(v.u0+1e-7),i(v.u0)),k=Math.min(v.head(v.u1-1e-7),i(v.u1));b>g+1e-6&&qn(e,p(v.u0,g,a),p(v.u0,g,r),p(v.u0,b,r),p(v.u0,b,a),[1,0,0],m),k>y+1e-6&&qn(e,p(v.u1,y,r),p(v.u1,y,a),p(v.u1,k,a),p(v.u1,k,r),[-1,0,0],m);let E=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.06)));for(let L=0;L<E;L++){let R=v.u0+(v.u1-v.u0)*L/E,W=v.u0+(v.u1-v.u0)*(L+1)/E,P=Math.max(R,v.u0+1e-7),te=Math.min(W,v.u1-1e-7),G=Math.min(v.head(P),i(R)),ae=Math.min(v.head(te),i(W));if(!(G>=i(R)-1e-6&&ae>=i(W)-1e-6)){let Le=W-R,He=ae-G,fe=Math.hypot(Le,He)||1;qn(e,p(R,G,r),p(W,ae,r),p(W,ae,a),p(R,G,a),[He/fe,-Le/fe,0],m)}let D=h(v,P),Y=h(v,te);if(D>1e-6||Y>1e-6){let Le=W-R,He=Y-D,fe=Math.hypot(Le,He)||1;qn(e,p(W,Y,r),p(R,D,r),p(R,D,a),p(W,Y,a),[-He/fe,Le/fe,0],m)}}}}var $u=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function s4(e,t){let o=Rr.r,n=Rr.sill,r=Rr.spring,a=De.z0,i=24,s=(d,p,v)=>[t+Math.cos(d)*p,v,a-Math.sin(d)*p];for(let d=0;d<i;d++){let p=Math.PI*d/i,v=Math.PI*(d+1)/i,m=[-Math.cos(p),0,Math.sin(p)],g=[-Math.cos(v),0,Math.sin(v)],y=[e.vert(s(p,o,n),m,No),e.vert(s(v,o,n),g,No),e.vert(s(v,o,r),g,No),e.vert(s(p,o,r),m,No)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,f=(d,p)=>[t+Math.cos(d)*Math.cos(p)*o,r+Math.sin(p)*o,a-Math.sin(d)*Math.cos(p)*o],l=(d,p)=>[-Math.cos(d)*Math.cos(p),-Math.sin(p),Math.sin(d)*Math.cos(p)];for(let d=0;d<i;d++)for(let p=0;p<c;p++){let v=Math.PI*d/i,m=Math.PI*(d+1)/i,g=Math.PI/2*p/c,y=Math.PI/2*(p+1)/c,b=[e.vert(f(v,g),l(v,g),w0),e.vert(f(m,g),l(m,g),w0),e.vert(f(m,y),l(m,y),w0),e.vert(f(v,y),l(v,y),w0)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let d=1;d<8;d++){let p=Math.PI*d/8,v=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;v.push(f(p,g).map((y,b)=>y-l(p,g)[b]*.02))}e.tube(v,m=>.035*(1-m*.6),12,6,{mat:()=>w0})}let u=e.vert([t,n,a],[0,1,0],No);for(let d=0;d<i;d++){let p=Math.PI*d/i,v=Math.PI*(d+1)/i;e.tri(u,e.vert(s(p,o,n),[0,1,0],No),e.vert(s(v,o,n),[0,1,0],No))}Cr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,No),Cr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,No);let h=.16;for(let d=0;d<i;d++){let p=Math.PI*d/i,v=Math.PI*(d+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];qn(e,m(p,o,a+.05),m(v,o,a+.05),m(v,o+h,a+.05),m(p,o+h,a+.05),[0,0,1],No),qn(e,m(p,o+h,a),m(v,o+h,a),m(v,o+h,a+.05),m(p,o+h,a+.05),[Math.cos((p+v)/2),Math.sin((p+v)/2),0],No),qn(e,m(p,o,a),m(v,o,a),m(v,o,a+.05),m(p,o,a+.05),[-Math.cos((p+v)/2),-Math.sin((p+v)/2),0],No)}for(let d of[-1,1]){let p=t+d*o,v=t+d*(o+h);Cr(e,p,n,a,v,r,a+.05,No),Cr(e,p-d*.02,r-.12,a,v+d*.06,r,a+.09,No)}Cr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,No),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>No})}var c4=Rr.sill+.4,l4=De.z0-.62;function f4(e){qn(e,[14,0,De.z0-Uo],[De.x1+Uo,0,De.z0-Uo],[De.x1+Uo,0,De.z1+Uo],[14,0,De.z1+Uo],[0,1,0],No),e.curMat=Ic,Fc(e,{u0:14+Uo,u1:De.x1+2*Uo,w0:De.z0-2*Uo,w1:De.z0,top:()=>De.spring,holes:uf.map(f=>({u0:f-Rr.r,u1:f+Rr.r,bottom:Rr.sill,head:$u(f,Rr.r,Rr.spring),noReveal:!0})),mat:Ic,cuts:[De.x1]});for(let f of uf)s4(e,f);e.save(),e.translate(0,0,De.z1),e.rotateY(Math.PI),e.translate(-(De.x1+2*Uo),0,-2*Uo);let t=f=>De.x1+2*Uo-f;Fc(e,{u0:t(De.x1+2*Uo),u1:t(13.65),w0:0,w1:2*Uo,top:()=>De.spring,holes:wa.map(f=>({u0:t(f+_t.halfW),u1:t(f-_t.halfW),bottom:_t.sill,head:$u(t(f),_t.halfW,_t.spring)})),mat:Ic,revealMat:No}),e.restore(),e.save(),e.translate(De.x1,0,0),e.rotateY(-Math.PI/2);let o=ys.DOOR,n=De.zc,r=o.r;Fc(e,{u0:De.z0-2*Uo,u1:De.z1+2*Uo,w0:-2*Uo,w1:0,top:f=>f<De.z0||f>De.z1?De.spring:xs(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:$u(n,r,o.spring)}],mat:Ic,revealMat:No}),e.restore(),e.save(),e.translate(14+Uo,0,0),e.rotateY(-Math.PI/2),Fc(e,{u0:De.z0,u1:De.z1,w0:-0,w1:2*Uo,top:()=>qu,topStep:.15,holes:[{u0:De.z0,u1:De.z1,bottom:0,head:f=>xs(f)}],mat:Ic,revealMat:No}),e.restore();let a=14+Uo,i=Math.ceil((De.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let l=a+(De.x1-a)*f/i,u=[];for(let h=0;h<=s;h++){let d=De.z0+(De.z1-De.z0)*h/s,p=xs(d),v=[0,Hu-p,De.zc-d],m=Math.hypot(v[1],v[2]);u.push(e.vert([l,p,d],[0,v[1]/m,v[2]/m],w0))}c.push(u)}for(let f=0;f<i;f++)for(let l=0;l<s;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function am(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=De.z0+(De.z1-De.z0)*i/32,c=xs(s),f=Hu-c,l=De.zc-s,u=Math.hypot(f,l),h=[c+f/u*n,s+l/u*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,f/u,l/u]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];qn(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,No),qn(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],No),qn(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],No)}}function hf(e,t,o,n){let i=o,s=o+n*.16;Cr(e,t-.28,0,i,t+.28,De.spring-.3,s,No),Cr(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),No),Cr(e,t-.28-.05,De.spring-.3,i,t+.28+.05,De.spring-.1,o+n*(.16+.05),No),Cr(e,t-.28-.1,De.spring-.1,i,t+.28+.1,De.spring,o+n*(.16+.1),No)}function h4(e,t){let o=xs(De.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,De.zc,48,{mat:()=>w0});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=De.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=w0,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function u4(e){e.curMat=No;for(let[t,o]of[[De.z0,1],[De.z1,-1]])Cr(e,14.35,De.spring-.12,t,De.x1,De.spring,t+o*.1,No),Cr(e,14.35,De.spring-.04,t,De.x1,De.spring+.05,t+o*.18,No);for(let[t,o]of[[De.z0,1],[De.z1,-1]])Cr(e,14.35,0,t,De.x1,.42,t+o*.12,No),Cr(e,14.35,.42,t,De.x1,.5,t+o*.07,No);for(let t of im)am(e,t,.24,.16),hf(e,t,De.z0,1),hf(e,t,De.z1,-1);for(let t of[14.35+.28,De.x1-.28])am(e,t,.28,.22),hf(e,t,De.z0,1),hf(e,t,De.z1,-1);for(let t of wa)h4(e,t)}function d4(e){let t=De.z1+Uo,o=t-.04,n=t+.04,r=(s,c,f,l)=>Cr(e,s,c,o,f,l,n,Oc),a=_t.halfW,i=(s,c,f,l,u,h)=>{let d=(p,v,m)=>[s+v*Math.cos(p),_t.spring+v*Math.sin(p),m];for(let p=0;p<h;p++){let v=l+(u-l)*p/h,m=l+(u-l)*(p+1)/h;qn(e,d(v,c,o),d(m,c,o),d(m,f,o),d(v,f,o),[0,0,-1],Oc),qn(e,d(v,f,n),d(m,f,n),d(m,c,n),d(v,c,n),[0,0,1],Oc)}};for(let s of wa){let c=s-a,f=s+a;r(c,_t.sill,c+.07,_t.spring),r(f-.07,_t.sill,f,_t.spring),r(c,_t.sill,f,_t.sill+.07),r(c,_t.spring-.04,f,_t.spring+.04);for(let u of[-.5,0,.5])r(s+u*a-.022,_t.sill,s+u*a+.022,_t.spring);let l=6;for(let u=1;u<l;u++){let h=_t.sill+(_t.spring-_t.sill)*u/l;r(c,h-.02,f,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let u=1;u<6;u++){let h=Math.PI*u/6,d=Math.cos(h),p=Math.sin(h),v=.02,m=(g,y)=>[s+d*g-p*v*y,_t.spring+p*g+d*v*y];qn(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],Oc),qn(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],Oc)}}}function p4(){let e=[],t=De.z1+Uo;for(let o of wa){let n=o-_t.halfW,r=o+_t.halfW;e.push([n,_t.sill,t],[r,_t.sill,t],[r,_t.spring,t],[n,_t.sill,t],[r,_t.spring,t],[n,_t.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,_t.spring,t],[o+_t.halfW*Math.cos(i),_t.spring+_t.halfW*Math.sin(i),t],[o+_t.halfW*Math.cos(s),_t.spring+_t.halfW*Math.sin(s),t])}}return e}function sm(e,t){e.save(),e.translate(De.x1+Uo,0,De.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function v4(e){sm(e,()=>{ys.addSurround(e),ys.addFrames(e,"fixed")})}function m4(e){return ys.glassPanes(e||"fixed").map(([o,n,r])=>[De.x1+Uo-r,n,De.zc-7+o])}function g4(e){f4(e),u4(e),d4(e),v4(e),e.curMat=[0,0,0]}var x4={x:De.x1+Uo,zLo:De.zc-ys.DOOR.r,zHi:De.zc+ys.DOOR.r},co=e=>e.toFixed(4);function y4(){return`
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
		float k = floor((q.x - ${co(_t.first)}) / ${co(_t.pitch)} + 0.5);
		if (k < 0.0 || k > ${co(_t.count-1)}) return 0.0;
		float dx = q.x - (${co(_t.first)} + k * ${co(_t.pitch)});
		float side = 1.0 - smoothstep(${co(_t.halfW)} - soft, ${co(_t.halfW)} + soft, abs(dx));
		float sill = smoothstep(${co(_t.sill)} - soft, ${co(_t.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${co(_t.spring)}));
		float head = q.y < ${co(_t.spring)} ? 1.0 : 1.0 - smoothstep(${co(_t.halfW)} - soft, ${co(_t.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${co(_t.halfW*.5)}), 0.022, soft));
		float rowH = ${co((_t.spring-_t.sill)/6)};
		float ry = (q.y - ${co(_t.sill)}) / rowH;
		cover = max(cover, q.y < ${co(_t.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${co(_t.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${co(De.x0)} || p.z < ${co(De.z0-.1)} || p.z > ${co(De.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${co(De.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${co(De.z1+2*Uo)} - p.z) / WIN_SKY.z;
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
		${uf.map(e=>`{ float d = abs(p.x - ${co(e)}); if (d < best) { best = d; lamp = vec3(${co(e)}, ${co(Rr.spring+.55)}, ${co(De.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${co(De.z0+1.6)} || p.z < ${co(De.z0-Rr.r-.1)} || p.x < ${co(De.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${co(Rr.r)}, ${co(Rr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${co(De.x0-1)}) return 0.0;
		float inC = smoothstep(${co(De.z0-1.5)}, ${co(De.z0)}, p.z) * smoothstep(${co(De.x0-1)}, ${co(De.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${co(De.z0)}, ${co(De.z1)}, p.z);
		return inC * near;
	}`}cm.exports={wallWithHoles:Fc,windowLightGLSL:y4,addWing:g4,windowGlass:p4,farDoorGlass:m4,atFarDoor:sm,FAR_DOOR:x4,vaultY:xs,C:De,NICHE_X:uf,NICHE:Rr,NICHE_PLINTH_TOP:c4,NICHE_STATUE_Z:l4,WIN:_t,winCentres:wa,piers:im,PAINTING_X:i4,HEIGHT:qu}});var ia=ve((jE,hm)=>{"use strict";var Bu=or(),Do=8,_s=.35,di=14,ws=4,Ye={x0:di+_s,x1:di+_s+2*ws,z0:5.9-ws,z1:5.9+ws,zc:5.9,cx:di+_s+ws,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Do},oculus:3.3};Ye.domeTop=Ye.dome.base+Ye.dome.r;var Ms={spokes:16,ringE:[.42,.95],bar:.035},Ln={sxz:1.32,sy:1.6,yaw:.6};Ln.crownC=[Ye.cx,.4+3.4*Ln.sy,Ye.zc];Ln.crownR=[2.3*Ln.sxz,1.9*Ln.sy,2.3*Ln.sxz];Ln.trunkR=.26*Ln.sxz;Ln.trunkTop=.4+2.2*Ln.sy;var lm={inner:1.05,outer:1.62,seat:.48,soil:.4},vf=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),Hn=[0,0,0],bs=[11,0,0],df=[10,0,0],pf=[9,0,0],b4=[5,0,0],Uu=[3,0,0];function o0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function _r(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var w4=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function _4(e){e.save(),e.translate(di+_s,0,0),e.rotateY(-Math.PI/2),Bu.wallWithHoles(e,{u0:0,u1:Bu.C.z0,w0:0,w1:2*_s,top:()=>Do,holes:[{u0:Ye.zc-Ye.arch.r,u1:Ye.zc+Ye.arch.r,bottom:0,head:w4(Ye.zc,Ye.arch.r,Ye.arch.spring),step:.05}],mat:bs,revealMat:Hn,topStep:1}),e.restore();let t=di-_s;for(let[i,s]of[[0,Ye.zc-Ye.arch.r],[Ye.zc+Ye.arch.r,Bu.C.z0]])_r(e,t-.12,0,i,t,.42,s,Hn),_r(e,t-.07,.42,i,t,.5,s,Hn);let o=t,n=.24,r=40,a=(i,s,c)=>[c,Ye.arch.spring+Math.sin(i)*s,Ye.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;o0(e,a(s,Ye.arch.r,o-.07),a(c,Ye.arch.r,o-.07),a(c,Ye.arch.r+n,o-.07),a(s,Ye.arch.r+n,o-.07),[-1,0,0],Hn),o0(e,a(s,Ye.arch.r+n,o),a(c,Ye.arch.r+n,o),a(c,Ye.arch.r+n,o-.07),a(s,Ye.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Hn),o0(e,a(s,Ye.arch.r,o),a(c,Ye.arch.r,o),a(c,Ye.arch.r,o-.07),a(s,Ye.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Hn)}_r(e,o-.12,Ye.arch.spring+Ye.arch.r-.06,Ye.zc-.17,o,Ye.arch.spring+Ye.arch.r+n+.16,Ye.zc+.17,Hn);for(let i of[-1,1]){let s=Ye.zc+i*Ye.arch.r,c=Ye.zc+i*(Ye.arch.r+n);_r(e,o-.07,0,s,o,Ye.arch.spring,c,Hn),_r(e,o-.13,Ye.arch.spring-.16,s-i*.03,o,Ye.arch.spring,c+i*.08,Hn),_r(e,o-.12,0,s-i*.03,o,.5,c+i*.06,Hn)}}function M4(e){let{x0:t,x1:o,z0:n,z1:r}=Ye;o0(e,[di,0,n],[o,0,n],[o,0,r],[di,0,r],[0,1,0],Hn),e.curMat=bs,o0(e,[o,0,n],[o,0,r],[o,Do,r],[o,Do,n],[-1,0,0],bs),o0(e,[t,0,n],[o,0,n],[o,Do,n],[t,Do,n],[0,0,1],bs),o0(e,[o,0,r],[t,0,r],[t,Do,r],[o,Do,r],[0,0,-1],bs),o0(e,[t,0,r],[t,0,n],[t,Do,n],[t,Do,r],[1,0,0],bs),_r(e,o-.12,0,n,o,.42,r,Hn),_r(e,t,0,n,o,.42,n+.12,Hn),_r(e,t,0,r-.12,o,.42,r,Hn),_r(e,o-.2,Do-.3,n,o,Do,r,Hn),_r(e,t,Do-.3,n,o,Do,n+.2,Hn),_r(e,t,Do-.3,r-.2,o,Do,r,Hn),_r(e,t,Do-.3,n,t+.2,Do,r,Hn);let a=Ye.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([Ye.cx+Math.cos(y)*a,Ye.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(ws/Math.max(y,1e-6),ws/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,k=c(y),E=c(b),L=[Ye.cx+Math.cos(y)*k,Do,Ye.zc+Math.sin(y)*k],R=[Ye.cx+Math.cos(b)*E,Do,Ye.zc+Math.sin(b)*E];o0(e,[s[g][0],Do,s[g][1]],[s[g+1][0],Do,s[g+1][1]],R,L,[0,-1,0],df)}e.lathe([[a+.02,Do-.18,1],[a-.12,Do-.18,1],[a-.12,Do-.06,1],[a-.05,Do,1],[a,Do+.02]],Ye.cx,Ye.zc,i,{mat:()=>Hn});let f=16,l=(g,y,b)=>[Ye.cx+Math.cos(g)*Math.cos(y)*b,Ye.dome.base+Math.sin(y)*b,Ye.zc+Math.sin(g)*Math.cos(y)*b],u=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/i,k=Math.PI*2*(g+1)/i,E=u*y/f,L=u*(y+1)/f,R=(P,te)=>[-Math.cos(P)*Math.cos(te),-Math.sin(te),-Math.sin(P)*Math.cos(te)],W=[e.vert(l(b,E,a),R(b,E),pf),e.vert(l(k,E,a),R(k,E),pf),e.vert(l(k,L,a),R(k,L),pf),e.vert(l(b,L,a),R(b,L),pf)];e.tri(W[0],W[1],W[2]),e.tri(W[0],W[2],W[3])}for(let g=0;g<Ms.spokes;g++){let y=Math.PI*2*g/Ms.spokes,b=[];for(let k=0;k<=14;k++)b.push(l(y,(u-.06)*k/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>df})}for(let g of Ms.ringE){let y=Math.cos(g)*(a-.04),b=Ye.dome.base+Math.sin(g)*(a-.04),k=[];for(let E=0;E<=72;E++){let L=Math.PI*2*E/72;k.push([Ye.cx+Math.cos(L)*y,b,Ye.zc+Math.sin(L)*y])}e.tube(k,()=>.035,72,6,{mat:()=>df})}e.ellipsoid([Ye.cx,Ye.dome.base+a-.06,Ye.zc],[.16,.08,.16],6,12,{mat:()=>df});let h=.46,d=.55,p=.12,v=(g,y,b,k)=>{_r(e,g,h-.08,y,b,h,k,Uu);let E=b-g>k-y?[g+.25,b-.25]:[g+.06,b-.06],L=b-g>k-y?[y+.06,k-.06]:[y+.25,k-.25];_r(e,E[0],0,L[0],E[1],h-.08,L[1],Uu)};v(o-p-d,n+1.1,o-p,r-1.1),v(t+1,n+p,o-1.1,n+p+d),v(t+1,r-p-d,o-1.1,r-p);let m=lm;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],Ye.cx,Ye.zc,64,{mat:()=>Uu}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],Ye.cx,Ye.zc,48,{mat:()=>b4})}function k4(e){_4(e),M4(e),e.curMat=[0,0,0]}var Ro=e=>e.toFixed(4);function fm(){let e=Ye.dome.r,t=Ms.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${Ro(vf[0])}, ${Ro(vf[1])}, ${Ro(vf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Ro(Ye.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Ro(Ye.cx)}, ${Ro(Ye.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Ro(e-.15)} - soft, ${Ro(e-.15)} + soft, d);
		float hw = ${Ro(Ms.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Ro(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Ro(Math.PI*2/Ms.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Ro(Ln.crownC[0])}, ${Ro(Ln.crownC[1])}, ${Ro(Ln.crownC[2])});
		vec3 r = vec3(${Ro(Ln.crownR[0])}, ${Ro(Ln.crownR[1])}, ${Ro(Ln.crownR[2])});
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
		float tt = (${Ro(Ln.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Ro(Ye.cx)}, ${Ro(Ye.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Ro(Ln.trunkR*.7)}, ${Ro(Ln.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function E4(){return`
	${fm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Ro(Ye.x0-.75)} || p.z < ${Ro(Ye.z0-.5)} || p.z > ${Ro(Ye.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Ro(Ye.x0-1.5)} || p.z < ${Ro(Ye.z0-1.5)} || p.z > ${Ro(Ye.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Ro(Ye.x0-1.2)}, ${Ro(Ye.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Ro(Ye.cx)}, ${Ro(Ye.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}hm.exports={addAlcove:k4,alcoveLightGLSL:E4,oculusGLSL:fm,A:Ye,BENCH:lm,SHAFT:vf,TREE:Ln}});var nr=ve((WE,dm)=>{"use strict";var _a=0;try{let e=location.search;/[?&]night\b/.test(e)&&(_a=1)}catch(e){}var n0=_a,ju=0,um=[],mf={tick(e){let t=ju?Math.min(.1,e-ju):0;if(ju=e,n0!==_a){let o=t/2.4;n0=_a>n0?Math.min(_a,n0+o):Math.max(_a,n0-o)}return mf.night},get night(){return n0*n0*(3-2*n0)},get isNight(){return _a===1},get settled(){return n0===_a},set(e){_a=e?1:0,um.forEach(t=>t(_a))},toggle(){mf.set(!_a)},onChange(e){um.push(e)}};mf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;dm.exports=mf});var M0=ve((VE,Dc)=>{"use strict";var Wu=nr(),{C:Vu}=or(),{A:gf,BENCH:Gc}=ia(),zn=Math.PI,S4=[18,29,40],xf=.575,_0=[],$c=(e,t,o,n,r,a,i)=>_0.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));S4.forEach(e=>{$c(1.25+xf+.48,3.25,e,[1,0],.48,xf,{s:1.2}),$c(12.75-xf-.48,3.25,e,[-1,0],.48,xf,{s:1.2})});[3,11].forEach(e=>$c(e,3.45,Vu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var A4=[14.63,19.63,24.03,28.43,32.83,Vu.x1-.28];A4.forEach(e=>$c(e,3.15,Vu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>$c(.35+.44,2.75,e,[1,0],.44,99));{let e=(Gc.inner+Gc.outer)/2,t=Math.atan2(-1.12,-.98);_0.push({x:gf.cx+Math.cos(t)*e,y:Gc.seat+.155,z:gf.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[gf.cx,gf.zc,Gc.outer+.07,Gc.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Xu=.13,yf=.21,Bn=Xu/Math.cos(zn/6),Eo=e=>e.toFixed(4);function pm(e){let o=(e||_0.map((n,r)=>r)).map(n=>{let r=_0[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Eo(r.ring[3]-.03)}) {
					float tt = ${Eo(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Eo(r.x)}, ${Eo(r.z)}) + D.xz * tt - vec2(${Eo(r.ring[0])}, ${Eo(r.ring[1])});
					T *= smoothstep(${Eo(r.ring[2]-.02)}, ${Eo(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Eo(r.o[0])}, ${Eo(r.o[1])}));
					if (behind > ${Eo(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Eo(a)}, ${Eo(i)}))) * ${Eo(r.back)} / behind;
						T *= smoothstep(${Eo(r.hw-.04)}, ${Eo(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Eo(r.x)}, ${Eo(r.y)}, ${Eo(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${Eo(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Eo(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${Eo(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Eo(n*1.7)}) + 0.04 * sin(time * 15.3 + ${Eo(n*2.9)}) * sin(time * 1.9 + ${Eo(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Eo(1/(r.s*r.s))}) * (1.0 - smoothstep(${Eo(r.range*.6)}, ${Eo(r.range)}, d));
					sum += ${Eo(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Eo(zn/6)}, ${Eo(zn/3)}) - ${Eo(zn/6)};
		float U = tan(t) / ${Eo(Math.tan(zn/6))};
		float V = (q.y / h) * (${Eo(Xu/yf)} / cos(t));
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
	}`}var jo=0,T4=1;function L4(){let e=[],t=[],o=[],n=[],r=[],a=(d,p,v,m)=>(e.push(d[0],d[1],d[2]),t.push(p[0],p[1],p[2]),o.push(v),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(d,p)=>[d[0]-p[0],d[1]-p[1],d[2]-p[2]],s=(d,p)=>[d[1]*p[2]-d[2]*p[1],d[2]*p[0]-d[0]*p[2],d[0]*p[1]-d[1]*p[0]],c=d=>{let p=Math.hypot(d[0],d[1],d[2])||1;return[d[0]/p,d[1]/p,d[2]/p]};function f(d,p,v,m,g,y){let b=c(s(i(p,d),i(m,d))),k=a(d,b,g,[0,0]),E=a(p,b,g,[1,0]),L=a(v,b,g,[1,1]),R=a(m,b,g,[0,1]);r.push(k,E,L,k,L,R),y&&r.push(k,L,E,k,R,L)}function l(d,p,v){for(let y=0;y<d.length;y++){let b=d[Math.max(0,y-1)],k=d[Math.min(d.length-1,y+1)],E=c(i(k,b)),L=Math.abs(E[1])>.9?[1,0,0]:[0,1,0],R=c(s(E,L)),W=s(R,E),P=typeof p=="function"?p(y/(d.length-1)):p;for(let te=0;te<=6;te++){let G=te/6*zn*2,ae=Math.cos(G),D=Math.sin(G),Y=[R[0]*ae+W[0]*D,R[1]*ae+W[1]*D,R[2]*ae+W[2]*D];a([d[y][0]+Y[0]*P,d[y][1]+Y[1]*P,d[y][2]+Y[2]*P],Y,v)}}let g=e.length/3-d.length*7;for(let y=0;y<d.length-1;y++)for(let b=0;b<6;b++){let k=g+y*7+b,E=k+6+1;r.push(k,E,k+1,k+1,E,E+1)}}function u(d,p,v,m,g,y,b,k,E){let L=(R,W,P)=>{let te=y+zn/6+P*zn/3;return[d[0]+Math.cos(te)*R,W,d[2]+Math.sin(te)*R]};for(let R=0;R<6;R++)f(L(m,p,R+1),L(m,p,R),L(g,v,R),L(g,v,R+1),b);if(k&&g>0)for(let R=0;R<6;R++){let W=a([d[0],v,d[2]],[0,1,0],b),P=a(L(g,v,R),[0,1,0],b),te=a(L(g,v,R+1),[0,1,0],b);r.push(W,te,P)}if(E&&m>0)for(let R=0;R<6;R++){let W=a([d[0],p,d[2]],[0,-1,0],b),P=a(L(m,p,R),[0,-1,0],b),te=a(L(m,p,R+1),[0,-1,0],b);r.push(W,P,te)}}function h(d,p,v,m,g,y,b){let k=[];for(let L=0;L<=18;L++){let R=L/18,W=(b||0)+R*m*zn*2,P=v*(1-.75*R);k.push([d[0]+p[0]*Math.cos(W)*P,d[1]+Math.sin(W)*P,d[2]+p[2]*Math.cos(W)*P])}l(k,g,y)}return _0.forEach(d=>{let p=d.s,v=Math.atan2(d.o[1],d.o[0]),m=[d.x,d.y,d.z],g=(k,E,L)=>[d.x+d.o[0]*k-d.o[1]*(L||0),d.y+E,d.z+d.o[1]*k+d.o[0]*(L||0)],y=d.y-yf*p,b=d.y+yf*p;for(let k=0;k<6;k++){let E=v+zn/6+k*zn/3,L=E+zn/3,R=Bn*p*.97,W=[d.x+Math.cos(E)*R,y,d.z+Math.sin(E)*R],P=[d.x+Math.cos(L)*R,y,d.z+Math.sin(L)*R];f(P,W,[W[0],b,W[2]],[P[0],b,P[2]],T4,!0)}for(let k=0;k<6;k++){let E=v+zn/6+k*zn/3,L=Bn*p;l([[d.x+Math.cos(E)*L,y-.02*p,d.z+Math.sin(E)*L],[d.x+Math.cos(E)*L,b+.02*p,d.z+Math.sin(E)*L]],.011*p,jo)}u(m,y-.035*p,y,Bn*p*1.12,Bn*p*1.12,v,jo,!0,!0),u(m,y-.1*p,y-.035*p,Bn*p*.55,Bn*p*1,v,jo,!1,!0),u(m,y-.17*p,y-.1*p,0,Bn*p*.55,v,jo,!1,!1);for(let k=0;k<6;k++){let E=v+k*zn/3,L=Xu*p*1.06,R=[d.x+Math.cos(E)*L,y-.06*p,d.z+Math.sin(E)*L];h(R,[-Math.sin(E),0,Math.cos(E)],.03*p,.85,.004*p,jo,.3)}u(m,b,b+.03*p,Bn*p*1.14,Bn*p*1.14,v,jo,!1,!0),u(m,b+.03*p,b+.2*p,Bn*p*1.14,Bn*p*.32,v,jo,!1,!1),u(m,b+.2*p,b+.27*p,Bn*p*.34,Bn*p*.34,v,jo,!1,!1),u(m,b+.27*p,b+.37*p,Bn*p*.42,0,v,jo,!1,!0),l([[d.x,b+.36*p,d.z],[d.x,b+.47*p,d.z]],k=>.01*p*(1-.7*k),jo),u([d.x,0,d.z],b+.44*p,b+.47*p,.018*p,0,v,jo,!1,!0);for(let k=0;k<6;k++){let E=v+zn/6+k*zn/3,L=Bn*p*1.14,R=[d.x+Math.cos(E)*L,b+.03*p,d.z+Math.sin(E)*L];l([R,[R[0],R[1]+.09*p,R[2]]],W=>.008*p*(1-.8*W),jo),u([R[0],0,R[2]],R[1]+.035*p,R[1]+.06*p,.014*p,.014*p,E,jo,!0,!0)}if(d.mount==="wall"){let k=d.back,E=y-.32,L=g(-k,0,0);((G,ae,D)=>{let Y=[d.o[0],0,d.o[1]],Le=[-d.o[1],0,d.o[0]],He=(Ae,ft,Nt)=>[L[0]+Le[0]*Ae+Y[0]*Nt,ft,L[2]+Le[2]*Ae+Y[2]*Nt],fe=.03,ie=.065;f(He(-D,G,ie),He(D,G,ie),He(D,ae,ie),He(-D,ae,ie),jo,!0),f(He(D,G,fe),He(D,G,ie),He(D,ae,ie),He(D,ae,fe),jo,!0),f(He(-D,G,ie),He(-D,G,fe),He(-D,ae,fe),He(-D,ae,ie),jo,!0),f(He(-D,ae,ie),He(D,ae,ie),He(D,ae,fe),He(-D,ae,fe),jo,!0),f(He(-D,G,fe),He(D,G,fe),He(D,G,ie),He(-D,G,ie),jo,!0),u([L[0]+Y[0]*ie,0,L[2]+Y[2]*ie],ae,ae+.05,D*.6,0,v,jo,!1,!0),u([L[0]+Y[0]*ie,0,L[2]+Y[2]*ie],G-.05,G,0,D*.6,v,jo,!1,!1)})(E-.2,E+.2,.07);let W=[];for(let G=0;G<=14;G++){let ae=G/14,D=-k+.05+ae*(k-.05),Y=E+.04+(y-.17*p-E-.04)*Math.pow(ae,2.2);W.push(g(D,Y-d.y,0))}l(W,G=>.022*(1-.3*G),jo);let P=[];for(let G=0;G<=10;G++){let ae=G/10;P.push(g(-k+.05+ae*k*.6,E-.14+ae*.16+.05*Math.sin(ae*zn)-d.y,0))}l(P,.009,jo);let te=P[P.length-1];h([te[0]-d.o[0]*.03,te[1]+.02,te[2]-d.o[1]*.03],[d.o[0],0,d.o[1]],.045,1.1,.007,jo,-.4),[.3,.55].forEach(G=>{let ae=W[Math.round(G*14)],D=P[Math.round(G/.62*10)]||P[10];l([ae,D],.006,jo)}),[-1,1].forEach(G=>{let ae=g(-.05,-yf*p-.2*p,0);h([ae[0]-d.o[1]*G*.05,ae[1],ae[2]+d.o[0]*G*.05],[-d.o[1]*G,0,d.o[0]*G],.05*p,.9,.006,jo,zn)})}else for(let k=0;k<3;k++){let E=v+k*zn*2/3,L=[d.x+Math.cos(E)*Bn*p*.7,y-.035*p,d.z+Math.sin(E)*Bn*p*.7],R=[d.x+Math.cos(E)*Bn*p*1.25,y-.17*p,d.z+Math.sin(E)*Bn*p*1.25];l([L,R],.012*p,jo)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}Dc.exports=e=>{let t=L4(),o=e({vert:`
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
		${pm()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>Wu.night}}),n=[],r=[];_0.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>Wu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Wu.night>.01&&a()}};Dc.exports.lanternGLSL=pm;Dc.exports.LANTERNS=_0;Dc.exports.TREE_LANTERN=[_0.length-1]});var S0=ve((XE,Pr)=>{"use strict";var z4=nr(),To=Math.PI,Nn=e=>(+e).toFixed(4),N4=e=>`vec3(${Nn(e[0])}, ${Nn(e[1])}, ${Nn(e[2])})`,Et={x:-7,z:44.5},jt=5.2,Zn=15,Ze={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},$a={z0:42.2,z1:46.8,top:6.3,x:.35},_f=[Et.x-Math.sqrt(jt*jt-3.05*3.05),0,0],pn={x0:-2.05+_f[0],x1:_f[0],z0:41.45,z1:47.55,top:4.3},Yu=[[pn.x1+.05,2.35,pn.z0-.45],[pn.x1+.05,2.35,pn.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-Et.z,e-Et.x);return[Et.x+Math.cos(n)*(jt-.16),t,Et.z+Math.sin(n)*(jt-.16)]}),bo={ri:3.4,ro:jt,a0:-35*To/180,rise:.1836,step:3.6*To/180,n:88,thick:.36};bo.k=bo.rise/bo.step;var Mr=e=>bo.a0-e,E0=e=>e*bo.k,Ko={x:Et.x+.1,z:Et.z-.15,yaw:-To/2,scale:1.3},r0=Ko.scale/1.1,qc={keyX0:Ko.x-.524*r0,keyX1:Ko.x+.491*r0,keyTop:.647*r0,keyFront:Ko.z+.808*r0,keyBack:Ko.z+.72*r0,stoolX:Ko.x-.041*r0,stoolZ:Ko.z+1.122*r0,stoolFront:Ko.z+.96*r0,stoolTop:.37*r0,heading:To},wf=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function mm(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function R4(e,t){let o=1e9;for(let n=0;n<wf.length-1;n++){let[r,a]=wf[n],[i,s]=wf[n+1],c=i-r,f=s-a,l=Math.max(0,Math.min(1,((e-r)*c+(t-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(e-r-c*l,t-a-f*l))}return o}var bf=e=>Ze.spring+Math.sqrt(Math.max(0,Ze.r*Ze.r-(e-Ze.zc)*(e-Ze.zc))),k0=e=>Et.x+Math.sqrt(Math.max(0,jt*jt-(e-Et.z)*(e-Et.z)));function ks(e,t){return Math.hypot(e-Et.x,t-Et.z)<jt||e<=0&&e>Et.x&&t>Ze.z0&&t<Ze.z1||e>pn.x0&&e<pn.x1&&t>pn.z0&&t<pn.z1}function C4(e,t){if(Math.hypot(e-Et.x,t-Et.z)<bo.ri-.05)return 99;let n=Math.atan2(t-Et.z,e-Et.x),r=bo.a0-n;for(;r<0;)r+=2*To;for(;r>=2*To;)r-=2*To;return r>bo.n*bo.step?99:E0(r)-bo.thick}function P4(){let e=[],t=mm(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let f=e[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-i)<s+f[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-Ko.x,c=i-Ko.z,f=Math.cos(Ko.yaw),l=Math.sin(Ko.yaw),u=(f*s-l*c)/Ko.scale,h=(l*s+f*c)/Ko.scale;return u>-1.05&&u<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(jt-1.45),s=t()*2*To,c=Et.x+Math.cos(s)*i,f=Et.z+Math.sin(s)*i;if(!ks(c,f)||i>jt-.18||n(c,f)||R4(c,f)<.62||C4(c,f)<2.3||c<pn.x1+.9)continue;let l=.022+t()*.02;if(o(c,f,l))continue;let u=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,f,l,u,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*bo.step,f=Mr(c),l=bo.ri+.55+t()*(bo.ro-bo.ri-.75),u=.022+t()*.016;e.push([Et.x+Math.cos(f)*l,(a+1)*bo.rise,Et.z+Math.sin(f)*l,u,.05+t()*.14,t()*100])}}for(let a of Yu)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[pn.z0-.35,pn.z1+.35])for(let i=0;i<9;i++){let s=pn.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-Et.x,c-Et.z)>jt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function I4(e){let o=mm(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,f=1e9;n.forEach((l,u)=>{let h=(s[0]-l[0])**2+(s[1]-l[1])**2*4+(s[2]-l[2])**2;h<f&&(f=h,c=u)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var Ku=P4(),vm=I4(Ku.filter(e=>e[1]<2||e[1]>2.5)).concat(Yu.map(e=>[e[0],e[1]+.35,e[2],.035]));function gm(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${vm.map((t,o)=>`
		{
			vec3 d = ${N4(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Nn(5.3+o*.71)} + ${Nn(o*1.9)}) + 0.06 * sin(time * ${Nn(11.7+o*1.3)} + ${Nn(o*.7)});
			float w = ${Nn(t[3]*vm.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Nn(Zn)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Nn(Et.x)}, ${Nn(Zn)}, ${Nn(Et.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Nn(qc.stoolX)}, ${Nn(qc.keyFront+.1)})));
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
	}`}var Ft={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function xm(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),f=e.v(o,a,i,s&&s[1]),l=e.v(n,a,i,s&&s[2]),u=e.v(r,a,i,s&&s[3]);e.idx.push(c,f,l,c,l,u)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function O4(){let e=xm(),t=(n,r,a)=>[Et.x+Math.cos(n)*r,a,Et.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>pn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,f=a+.2;if(!(ks(i,c)||ks(s,c)||ks(i,f)||ks(s,f)||ks((i+s)/2,(c+f)/2)))continue;let l=c,u=f;i>k0(Ze.z0)-.3&&(l=Math.max(l,Ze.z0),u=Math.min(u,Ze.z1),u<=l)||e.quad([i,0,l],[i,0,u],[s,0,u],[s,0,l],[0,1,0],Ft.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*To,i=(r+1)/360*2*To,s=(a+i)/2,c=t(s,jt,0),f=0;c[0]>Et.x&&c[2]>Ze.z0-.02&&c[2]<Ze.z1+.02&&(f=Math.max(bf(Math.min(Math.max(t(a,jt,0)[2],Ze.z0),Ze.z1)),bf(Math.min(Math.max(t(i,jt,0)[2],Ze.z0),Ze.z1)))),c[0]<Et.x&&c[2]>pn.z0-.02&&c[2]<pn.z1+.02&&(f=pn.top);let l=a*jt,u=i*jt,h=o(a).map(v=>-v),d=o(i).map(v=>-v),p=[f];for(let v=Math.ceil(f/2.5)*2.5;v<Zn;v+=2.5)v>f+.01&&p.push(v);p.push(Zn);for(let v=0;v<p.length-1;v++){let m=p[v],g=p[v+1],y=e.v(t(a,jt,m),h,Ft.WALL,[l,m]),b=e.v(t(i,jt,m),d,Ft.WALL,[u,m]),k=e.v(t(i,jt,g),d,Ft.WALL,[u,g]),E=e.v(t(a,jt,g),h,Ft.WALL,[l,g]);e.idx.push(y,b,k,y,k,E)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*To,f=(s+1)/360*2*To,l=(c+f)/2,u=t(l,jt,0);if(r<1&&(u[0]>Et.x&&u[2]>Ze.z0&&u[2]<Ze.z1||u[0]<Et.x&&u[2]>pn.z0&&u[2]<pn.z1))continue;let h=jt-i;e.quad(t(c,h,r),t(f,h,r),t(f,h,r+a),t(c,h,r+a),o(l).map(d=>-d),Ft.WALL,[[c*jt,r+100],[f*jt,r+100],[f*jt,r+a+100],[c*jt,r+a+100]]),e.quad(t(c,h,r+a),t(f,h,r+a),t(f,jt,r+a),t(c,jt,r+a),[0,1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,jt,r),t(f,jt,r),t(f,h,r),t(c,h,r),[0,-1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=$a.x;for(let[a,i]of[[Ze.z0,1],[Ze.z1,-1]]){let s=k0(a);e.quad([n,0,a],[s,0,a],[s,Ze.spring,a],[n,Ze.spring,a],[0,0,i],Ft.WALL,[[n,0],[s,0],[s,Ze.spring],[n,Ze.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*To,s=(a+1)/r*To,c=Ze.zc-Math.cos(i)*Ze.r,f=Ze.zc-Math.cos(s)*Ze.r,l=Ze.spring+Math.sin(i)*Ze.r,u=Ze.spring+Math.sin(s)*Ze.r,h=[0,-Math.sin(i),Math.cos(i)],d=[0,-Math.sin(s),Math.cos(s)],p=e.v([n,l,c],h,Ft.WALL,[n,i*Ze.r]),v=e.v([k0(c),l,c],h,Ft.WALL,[k0(c),i*Ze.r]),m=e.v([k0(f),u,f],d,Ft.WALL,[k0(f),s*Ze.r]),g=e.v([n,u,f],d,Ft.WALL,[n,s*Ze.r]);e.idx.push(p,v,m,p,m,g)}}{let n=$a.x,r=.05;for(let f=$a.z0;f<$a.z1-1e-6;f+=r){let l=f,u=Math.min($a.z1,f+r),d=(p=>p>Ze.z0&&p<Ze.z1)((l+u)/2)?Math.max(bf(l),bf(u)):0;e.quad([n,d,l],[n,d,u],[n,$a.top,u],[n,$a.top,l],[1,0,0],Ft.HALLSTONE,[[l,d],[u,d],[u,$a.top],[l,$a.top]])}let a=.32,i=.06,s=n+i,c=36;for(let f=0;f<c;f++){let l=f/c*To,u=(f+1)/c*To,h=(g,y)=>[s,Ze.spring+Math.sin(g)*y,Ze.zc-Math.cos(g)*y],d=Ze.r,p=Ze.r+a;e.quad(h(l,d),h(u,d),h(u,p),h(l,p),[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let v=(g,y,b)=>[b,Ze.spring+Math.sin(g)*y,Ze.zc-Math.cos(g)*y],m=[0,Math.sin((l+u)/2),-Math.cos((l+u)/2)];e.quad(v(l,p,n),v(u,p,n),v(u,p,s),v(l,p,s),m,Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(v(l,d,n),v(u,d,n),v(u,d,s),v(l,d,s),m.map(g=>-g),Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,u]of[[Ze.z0-a,Ze.z0,-1],[Ze.z1,Ze.z1+a,1]]){e.quad([s,0,f],[s,0,l],[s,Ze.spring,l],[s,Ze.spring,f],[1,0,0],Ft.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=u<0?f:l,d=u<0?l:f;e.quad([n,0,h],[s,0,h],[s,Ze.spring,h],[n,Ze.spring,h],[0,0,u],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,d],[s,0,d],[s,Ze.spring,d],[n,Ze.spring,d],[0,0,-u],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let p=Ze.spring-.16,v=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;e.quad([n+m,p,g],[n+m,p,y],[n+m,p+v,y],[n+m,p+v,g],[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,p+v,g],[n+m,p+v,g],[n+m,p+v,y],[n,p+v,y],[0,1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,p,g],[n,p,y],[n+m,p,y],[n+m,p,g],[0,-1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,p,b],[n+m,p,b],[n+m,p+v,b],[n,p+v,b],[0,0,b===g?-1:1],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=Ze.spring+Ze.r-.05,l=Ze.spring+Ze.r+a+.12,u=.16,h=.22,d=s+.04;e.quad([d,f,Ze.zc-u],[d,f,Ze.zc+u],[d,l,Ze.zc+h],[d,l,Ze.zc-h],[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let p of[-1,1])e.quad([n,f,Ze.zc+p*u],[d,f,Ze.zc+p*u],[d,l,Ze.zc+p*h],[n,l,Ze.zc+p*h],[0,0,p],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,l,Ze.zc-h],[d,l,Ze.zc-h],[d,l,Ze.zc+h],[n,l,Ze.zc+h],[0,1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=pn;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],Ft.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[f,l]of[[a,1],[i,-1]]){let u=Et.x-Math.sqrt(jt*jt-(f-Et.z)*(f-Et.z));e.quad([n,0,f],[u,0,f],[u,s,f],[n,s,f],[0,0,l],Ft.WALL,[[n,0],[u,0],[u,s],[n,s]])}let c=24;for(let f=0;f<c;f++){let l=a+(i-a)*f/c,u=a+(i-a)*(f+1)/c,h=Et.x-Math.sqrt(jt*jt-(l-Et.z)**2),d=Et.x-Math.sqrt(jt*jt-(u-Et.z)**2);e.quad([n,s,l],[h,s,l],[d,s,u],[n,s,u],[0,-1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(i-a)*f/c,u=a+(i-a)*(f+1)/c,h=Et.x-Math.sqrt(jt*jt-(l-Et.z)**2)+.05,d=Et.x-Math.sqrt(jt*jt-(u-Et.z)**2)+.05;e.quad([h,s-.3,l],[d,s-.3,u],[d,s,u],[h,s,l],[1,0,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,jt];for(let a=0;a<120;a++){let i=a/120*2*To,s=(a+1)/120*2*To,c=(i+s)/2;c>To&&(c-=2*To);for(let f=0;f<r.length-1;f++){let l=r[f],u=r[f+1],h=c*180/To;l>=3.3&&h>8&&h<85||e.quad(t(i,l,Zn),t(i,u,Zn),t(s,u,Zn),t(s,l,Zn),[0,-1,0],Ft.CEIL,[[i*l,l],[i*u,u],[s*u,u],[s*l,l]])}e.quad(t(i,1.15,Zn),t(s,1.15,Zn),t(s,1.15,Zn+.7),t(i,1.15,Zn+.7),o(c).map(f=>-f),Ft.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([Et.x,Zn+.7,Et.z],t(s,1.15,Zn+.7),t(i,1.15,Zn+.7),[0,-1,0],Ft.OCULUS)}}{let n=bo.ri,r=bo.ro,a=bo.n*bo.step;for(let c=0;c<bo.n;c++){let f=c*bo.step,l=(c+1)*bo.step,u=Mr(f),h=Mr(l),d=(c+1)*bo.rise,p=c*bo.rise,v=2;for(let y=0;y<v;y++){let b=u+(h-u)*y/v-(y===0?.004:0),k=u+(h-u)*(y+1)/v;e.quad(t(b,n,d),t(b,r,d),t(k,r,d),t(k,n,d),[0,1,0],Ft.STEP,[[n*b,c],[r*b,c],[r*k,c],[n*k,c]])}let m=[-Math.sin(u),0,Math.cos(u)],g=u-.004;e.quad(t(g,n,p),t(g,r,p),t(g,r,d),t(g,n,d),m,Ft.STEP,[[n*u,c+.5],[r*u,c+.5],[r*u,c+.5],[n*u,c+.5]]),e.quad(t(u,n,E0(f)+.06),t(h,n,E0(l)+.06),t(h,n,d),t(g,n,d),o((u+h)/2).map(y=>-y),Ft.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*To/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let f=c/i*a,l=(c+1)/i*a,u=Mr(f),h=Mr(l),d=E0(f),p=E0(l),v=d-bo.thick,m=p-bo.thick,g=o(u).map(R=>-R),y=o(h).map(R=>-R),b=e.v(t(u,n,v),g,Ft.STRING,[f*n,0]),k=e.v(t(h,n,m),y,Ft.STRING,[l*n,0]),E=e.v(t(h,n,p+.06),y,Ft.STRING,[l*n,1]),L=e.v(t(u,n,d+.06),g,Ft.STRING,[f*n,1]);e.idx.push(b,k,E,b,E,L);for(let R=0;R<s.length-1;R++){let W=s[R],P=s[R+1],te=G=>{let ae=o(G);return[-ae[0]*.12,-.99,-ae[2]*.12]};e.quad(t(u,W,v),t(u,P,v),t(h,P,m),t(h,W,m),te((u+h)/2),Ft.SOFFIT,[[f*W,W],[f*P,P],[l*P,P],[l*W,W]])}}}return e}function F4(){let e=xm(),t=bo.ri+.045,o=bo.n*bo.step,n=Math.ceil(o/(.8*To/180)),r=.92,a=(c,f,l)=>[Et.x+Math.cos(c)*f,l,Et.z+Math.sin(c)*f],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,u=Mr(f),h=Mr(l),d=E0(f)+.06,p=E0(l)+.06,v=i(u).map(R=>-R),m=i(h).map(R=>-R),g=f*t,y=l*t,b=e.v(a(u,t,d),v,Ft.RAILING,[g,0]),k=e.v(a(h,t,p),m,Ft.RAILING,[y,0]),E=e.v(a(h,t,p+r),m,Ft.RAILING,[y,r]),L=e.v(a(u,t,d+r),v,Ft.RAILING,[g,r]);e.idx.push(b,k,E,b,E,L)}((c,f,l,u)=>{let d=v=>{let m=Mr(v),g=E0(v)+.06+f,y=a(m,t+c,g),b=i(m),k=[];for(let E=0;E<8;E++){let L=E/8*2*To,R=[b[0]*Math.cos(L),Math.sin(L),b[2]*Math.cos(L)];k.push([[y[0]+R[0]*l,y[1]+R[1]*l,y[2]+R[2]*l],R])}return k},p=d(0);for(let v=1;v<=n;v++){let m=d(v/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(p[g][0],p[g][1],u),k=e.v(m[g][0],m[g][1],u),E=e.v(m[y][0],m[y][1],u),L=e.v(p[y][0],p[y][1],u);e.idx.push(b,k,E,b,E,L)}p=m}})(0,r+.02,.028,Ft.IRON);for(let c of Yu){let f=Math.atan2(c[2]-Et.z,c[0]-Et.x),l=[Math.cos(f),0,Math.sin(f)],u=12;for(let v=0;v<u;v++){let m=v/u*2*To,g=(v+1)/u*2*To,y=(b,k,E)=>[c[0]+Math.cos(b)*k,E,c[2]+Math.sin(b)*k];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Ft.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Ft.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],d=[-l[2],0,l[0]],p=.018;e.quad([h[0]-d[0]*p,h[1],h[2]-d[2]*p],[h[0]+d[0]*p,h[1],h[2]+d[2]*p],[c[0]+d[0]*p,c[1]-.05,c[2]+d[2]*p],[c[0]-d[0]*p,c[1]-.05,c[2]-d[2]*p],[-l[0],.5,-l[2]],Ft.IRON)}{let c=Mr(0),f=a(c,t,0),l=10;for(let u=0;u<l;u++){let h=u/l*2*To,d=(u+1)/l*2*To,p=(v,m,g)=>[f[0]+Math.cos(v)*m,g,f[2]+Math.sin(v)*m];e.quad(p(h,.035,0),p(d,.035,0),p(d,.035,r+.1),p(h,.035,r+.1),[Math.cos((h+d)/2),0,Math.sin((h+d)/2)],Ft.IRON),e.quad(p(h,.06,r+.1),p(d,.06,r+.1),p(d,.03,r+.2),p(h,.03,r+.2),[Math.cos((h+d)/2)*.8,.6,Math.sin((h+d)/2)*.8],Ft.IRON)}}return e}function G4(){let e=[],t=[],o=[],n=[];for(let a of Ku){let[i,s,c,f,l,u]=a,h=e.length/3;for(let p=0;p<=7;p++){let v=p/7*2*To+u,m=Math.cos(v),g=Math.sin(v);e.push(i+m*f,s,c+g*f,i+m*f,s+l,c+g*f),t.push(m,0,g,m,0,g),o.push(0,l,u,1,l,u)}for(let p=0;p<7;p++){let v=h+p*2;n.push(v,v+2,v+3,v,v+3,v+1)}let d=e.length/3;e.push(i,s+l-.006,c),t.push(0,1,0),o.push(2,l,u);for(let p=0;p<7;p++){let v=p/7*2*To+u;e.push(i+Math.cos(v)*f,s+l,c+Math.sin(v)*f),t.push(0,1,0),o.push(1,l,u)}for(let p=0;p<7;p++)n.push(d,d+1+p,d+1+(p+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function $4(){let e=[],t=[],o=[],n=[];for(let r of Ku){let[a,i,s,,c,f]=r,l=e.length/3;for(let u of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(u[0],u[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:e,corner:t,ph:o,idx:n}}function D4(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let f=new Int8Array(e,i,o*3);i+=o*3;let l=new Uint8Array(e,i,o),u=new Float32Array(o*3),h=new Float32Array(o*3),d=new Float32Array(o),p=Math.cos(Ko.yaw),v=Math.sin(Ko.yaw),m=Ko.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,k=(r[2]+s[g*3+2]/65535*a[2])*m;u[g*3]=Ko.x+p*y+v*k,u[g*3+1]=b,u[g*3+2]=Ko.z-v*y+p*k;let E=f[g*3]/127,L=f[g*3+1]/127,R=f[g*3+2]/127;h[g*3]=p*E+v*R,h[g*3+1]=L,h[g*3+2]=-v*E+p*R,d[g]=l[g]}return{pos:u,nrm:h,mat:d,idx:new Uint32Array(c)}}function q4(){let e=[],t=(u,h)=>[Et.x+Math.cos(u)*h,Et.z+Math.sin(u)*h];e.push([[0,Ze.z0],[k0(Ze.z0),Ze.z0]]),e.push([[k0(Ze.z1),Ze.z1],[0,Ze.z1]]);let o=Math.asin((Ze.z1-Et.z)/jt),n=72;for(let u=0;u<n;u++){let h=o+u/n*(2*To-2*o),d=o+(u+1)/n*(2*To-2*o);e.push([t(h,jt-.25),t(d,jt-.25)])}let r=_f[0]-.55+.35;e.push([[r,pn.z0],[r,pn.z1]]);let a=2.4/bo.k,i=12;for(let u=0;u<i;u++){let h=Mr(u/i*a),d=Mr((u+1)/i*a);e.push([t(h,bo.ri-.2),t(d,bo.ri-.2)])}e.push([t(Mr(0),bo.ri-.2),t(Mr(0),jt)]),e.push([t(Mr(a),bo.ri-.2),t(Mr(a),jt)]);let s=Math.cos(Ko.yaw),c=Math.sin(Ko.yaw),f=Ko.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([u,h])=>[Ko.x+(s*u+c*h)*f,Ko.z+(-c*u+s*h)*f]);for(let u=0;u<4;u++)e.push([l[u],l[(u+1)%4]]);return e}Pr.exports=e=>{let t=O4(),o=F4(),n=G4(),r=$4(),a=M0(),i=`
	precision highp float;
	${z4.GLSL}
	uniform float time;
	${gm()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Nn(Zn)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Nn(Et.x)}, ${Nn(Et.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Nn((bo.ri+bo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Nn(Et.x)}, ${Nn(Et.z)});
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let d=(()=>{let m=[],g=[],y=[],b=[],E=[Et.x,Zn-.3,Et.z],L=[qc.stoolX,.02,qc.keyFront+.1],R=1.25,W=2.35;for(let P=0;P<=40;P++){let te=P/40*2*To,G=Math.cos(te),ae=Math.sin(te);m.push(E[0]+G*R,E[1],E[2]+ae*R,L[0]+G*W,L[1],L[2]+ae*W),g.push(G,.08,ae,G,.08,ae),y.push(1,0)}for(let P=0;P<40;P++){let te=P*2;b.push(te,te+1,te+3,te,te+3,te+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),p=e({vert:`
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
		}`,attributes:{position:d.pos,normal:d.nrm,hh:d.hh},elements:d.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function v(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(p(),u({halo:1}),u({halo:0}))}return v};Pr.exports.C=Et;Pr.exports.R=jt;Pr.exports.PASS=Ze;Pr.exports.SURR=$a;Pr.exports.OFF=_f;Pr.exports.BAY=pn;Pr.exports.PATH=wf;Pr.exports.PIANO=Ko;Pr.exports.PLAY=qc;Pr.exports.TOP=Zn;Pr.exports.roomGLSL=gm;Pr.exports.segments=q4});var Tm=ve((YE,Am)=>{"use strict";var H4=li(),{addFlutedColumn:ym,addStatue:B4,addPlant:U4}=Vv(),bm=b0(),j4=gs(),Ma=or(),W4=ia(),Ss=S0(),lo=14,mn=Ma.C.hallEnd+.35,Po=8,Mo=.35,Qu=1.15,Zu=1.15,Ju=[18,29,40],V4=[[[0,0],[0,Ss.PASS.z0]],[[0,Ss.PASS.z1],[0,mn]],[[lo,mn],[lo,0]],[[0,0],[lo,0]],[[lo,mn],[0,mn]]],km=[];for(let e of Ju)for(let t of[1.25,lo-1.25]){let o=Qu/2,n=Zu/2;km.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var kf=12,Em=2.95,Sm=.62,Af=Em+Sm,Ef=[{file:"venus.bin",x:1.85,z:mn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:lo-2.1,z:mn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Ma.NICHE_X[0],z:Ma.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Ma.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Ma.NICHE_X[1],z:Ma.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Ma.NICHE_PLINTH_TOP,mat:3}],X4={x0:Mo,x1:3.15,z0:3.6,z1:8.2,top:1},wm=.8,Tf=1.17,Hc=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{Hc.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),Hc.push({x:lo-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function e1(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var Lf=[];for(let e of[-1,1])Lf.push(...e1(lo/2+e*Af,kf,.85,.85));for(let e of Ef.filter(t=>t.pedestal))Lf.push(...e1(e.x,e.z,Tf*1.1,Tf*1.1));for(let e of Hc)Lf.push(...e1(e.x,e.z,.42,.42));var Y4=V4.concat(km,Lf,Ss.segments());function K4(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=i;f++)for(let l=s;l<=c;l++)n(f,l,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let u=o.get(i+f+":"+(s+l));u&&c.push(...u)}return[...new Set(c)]}}}var Sf=[],vn={curMat:[0,0,0]};function t1(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=vn.curMat;return Sf.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function wo(e,t,o,n,r,a,i,s,c){let f=(l,u,h,d,p)=>{o.push(...t1(e,t,l,u,h,d,p))};f([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),f([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function Es(e,t,o,n,r){let a=vn,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(i,s,c),a.tri(s,f,c)}function _m(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=Math.cos(c),u=Math.sin(c),h=Math.cos(f),d=Math.sin(f),p=[e+o*l,t+o*u],v=[e+o*h,t+o*d],m=[e+n*l,t+n*u],g=[e+n*h,t+n*d];Es([p[0],p[1],r],[v[0],v[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Es([p[0],p[1],a],[v[0],v[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;Es([p[0],p[1],r],[v[0],v[1],r],[p[0],p[1],a],[v[0],v[1],a],[-Math.cos(y),-Math.sin(y),0]),Es([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function Q4(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=e+o*Math.cos(c),u=t+o*Math.sin(c),h=e+o*Math.cos(f),d=t+o*Math.sin(f);Es([l,u,r],[h,d,r],[l,n,r],[h,n,r],[0,0,-1]),Es([l,u,a],[h,d,a],[l,n,a],[h,n,a],[0,0,1])}}function Z4(e,t,o,n){let r=lo/2,a=Em,i=3,s=a+.42,c=s+.15,f=Sm,l=Af,u=5.98,h=n-.45,d=n+.45,p=64,v=ym(vn,r-l,n,0,u,f);ym(vn,r+l,n,0,u,f),vn.curMat=[0,0,0],_m(r,i,a,s,h,d,p),_m(r,i,s,c,h-.07,d+.07,p),Q4(r,i,c,v+.05,h,d,p);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;wo(e,t,o,Math.min(y,b),i,h,Math.max(y,b),v+.05,d)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);wo(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=l+f*1.42+.45;wo(e,t,o,r-m,v,n-.7,r+m,v+.44,n+.7),wo(e,t,o,r-m+.12,v+.44,n-.62,r+m-.12,v+.7,n+.62),wo(e,t,o,r-m-.1,v+.7,n-.84,r+m+.1,v+.84,n+.84),wo(e,t,o,r-m-.22,v+.84,n-.96,r+m+.22,v+1,n+.96),wo(e,t,o,r-.3,i+a-.1,n-.56,r+.3,v,n+.56)}function Mm(e,t,o,n,r){wo(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),wo(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),wo(e,t,o,n-Qu/2,.4,r-Zu/2,n+Qu/2,Po-1.35,r+Zu/2),wo(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),wo(e,t,o,n-.67,Po-1.58,r-.67,n+.67,Po-1.35,r+.67),wo(e,t,o,n-.82,Po-1.35,r-.82,n+.82,Po-1.05,r+.82),wo(e,t,o,n-.66,Po-1.05,r-.66,n+.66,Po-.78,r+.66),wo(e,t,o,n-.92,Po-.78,r-.92,n+.92,Po-.55,r+.92),wo(e,t,o,n-.78,Po-.55,r-.78,n+.78,Po-.3,r+.78),wo(e,t,o,n-.92,Po-.3,r-.92,n+.92,Po-.1,r+.92)}function Mf(e,t,o,n,r){r==="left"?(wo(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),wo(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(wo(e,t,o,lo-.14,1,n-3.8/2,lo+.08,5.7,n+3.8/2),wo(e,t,o,lo-.18,1+.18,n-3.8/2+.18,lo+.08+.04,5.7-.18,n+3.8/2-.18))}function J4(e,t,o,n){wo(e,t,o,.65,Po-.16,n-1.65,.65+.22,Po,n+1.65),wo(e,t,o,lo-.65-.22,Po-.16,n-1.65,lo-.65,Po,n+1.65),wo(e,t,o,.65,Po-.16,n-1.65,lo-.65,Po,n-1.43),wo(e,t,o,.65,Po-.16,n+1.43,lo-.65,Po,n+1.65),o.push(...t1(e,t,[.65+.22,Po-.16,n-1.43],[lo-.65-.22,Po-.16,n-1.43],[.65+.22,Po-.16,n+1.43],[lo-.65-.22,Po-.16,n+1.43],[0,-1,0]))}Am.exports=function(){let e=[],t=[],o=[];Sf=[],vn=H4.createBuilder(e,t,o,Sf),o.push(...t1(e,t,[0,0,0],[lo,0,0],[0,0,mn],[lo,0,mn],[0,1,0])),j4.addSkylight(vn,[0,0,0],mn),vn.curMat=[0,0,0];{let c=Ss.SURR;wo(e,t,o,-Mo,0,0,Mo,Po,c.z0),wo(e,t,o,-Mo,0,c.z1,Mo,Po,mn),wo(e,t,o,-Mo,c.top,c.z0,Mo,Po,c.z1)}wo(e,t,o,lo-Mo,0,Ma.C.z1,lo+Mo,Po,mn-Mo),wo(e,t,o,lo-Mo-.12,0,Ma.C.z1+2*Mo,lo-Mo,.42,mn-Mo),wo(e,t,o,lo-Mo-.07,.42,Ma.C.z1+2*Mo,lo-Mo,.5,mn-Mo);for(let[c,f]of[[0,Ss.SURR.z0],[Ss.SURR.z1,mn-Mo]])wo(e,t,o,Mo,0,c,Mo+.12,.42,f),wo(e,t,o,Mo,.42,c,Mo+.07,.5,f);wo(e,t,o,Mo,0,mn-Mo-.12,lo-Mo,.42,mn-Mo),wo(e,t,o,Mo,.42,mn-Mo-.07,lo-Mo,.5,mn-Mo),bm.addEntranceWall(vn),bm.addFrames(vn),vn.curMat=[0,0,0],wo(e,t,o,-Mo,0,mn-Mo,lo+Mo,Po,mn+Mo),Z4(e,t,o,kf);for(let c of Ju)Mm(e,t,o,1.25,c),Mm(e,t,o,lo-1.25,c);Mf(e,t,o,22,"left"),Mf(e,t,o,25,"right"),Mf(e,t,o,33,"left"),Mf(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)J4(e,t,o,c);Ma.addWing(vn),vn.curMat=[0,0,0];for(let c of Ef.filter(f=>f.pedestal))B4(vn,c.x,c.z,Tf,wm);{let c=X4;vn.curMat=[0,0,0],vn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),vn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),vn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),vn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}W4.addAlcove(vn);for(let c of Hc)U4(vn,c.x,c.z,c.seed,1,c.away);vn.curMat=[0,0,0];let r=[[[lo,mn-.35],[0,mn-.35]],[[0,3],[0,10]],[[lo,15],[lo,22]],[[0,24],[0,31]],[[lo,33],[lo,40]],[[0,41],[0,46]]],a=K4(Y4),i=(c,f)=>{let l=0,u=1/0;return r.forEach((h,d)=>{let p=(h[0][0]+h[1][0])/2,v=(h[0][1]+h[1][1])/2,m=Math.hypot(c-p,f-v);m<u&&(u=m,l=d)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:Ef,occluders:[...Ju.flatMap(c=>[[1.25,c,.78],[lo-1.25,c,.78]]),[lo/2-Af,kf,.86],[lo/2+Af,kf,.86],...Ef.filter(c=>c.pedestal).map(c=>[c.x,c.z,Tf*1.12]),...Hc.map(c=>[c.x,c.z,.34])],pedestalTop:wm,mat:Sf,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:o}}});var o1=ve((KE,Lm)=>{"use strict";var{doorLightGLSL:e_}=b0(),{skylightGLSL:t_}=gs(),{windowLightGLSL:o_,C:jr}=or(),{alcoveLightGLSL:n_}=ia(),sa=e=>e.toFixed(4),r_=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();Lm.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([d,p,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${d.toFixed(3)}, ${p.toFixed(3)}), ${v.toFixed(3)}));`).join(`
      `),i={c:[0,0,0,0],d:[1,0,0,0]},s=-1,c=[],f=d=>{let p=d&&d.tick!==void 0?d.tick:0;if(p!==s||c.length===0){s=p;let v=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-v[0],m.c[2]-v[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(i)}return c},l={},u="",h="";for(let d=0;d<8;d++)l["lightC"+d]=p=>f(p)[d].c,l["lightD"+d]=p=>f(p)[d].d,u+="uniform vec4 lightC"+d+", lightD"+d+`;
`,h+="pic += pictureLight(lightC"+d+", lightD"+d+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${M0().lanternGLSL()}

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
        step(abs(v_pos.z - ${sa(jr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${sa((jr.z0+jr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${sa(jr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
        if (v_pos.x < 14.0) wallD = min(wallD, ${sa(jr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${sa(jr.z0)} || v_pos.z > ${sa(jr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${sa(jr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${sa(jr.z0)}), ${sa(jr.z1)} - v_pos.z), ${sa(jr.x1)} - v_pos.x);
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
        if (v_pos.z < ${sa(jr.z0+.3)} && v_pos.x > ${sa(jr.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var Nm=ve((QE,zm)=>{"strict mode";var a_="https://api.artic.edu/api/v1/artworks/search",i_=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,s_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",c_="&fields=image_id,title,artist_title",l_={low:400,mid:843,high:1686};zm.exports={fetchList:async function(e,t){let o=a_+s_+c_+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=i_(e,l_[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var Pm=ve((ZE,Cm)=>{"use strict";var f_=ku(),h_=na(),u_=e=>"images/web/"+e.slug+(h_.isPhone?"-1024":"")+".webp";async function Rm(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Cm.exports={fetchList:async function(e,t){return f_.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await Rm(u_(e))}catch(o){t=await Rm("images/"+e.file)}return{title:e.title,image:t}}}});var Om=ve((JE,Im)=>{"strict mode";Im.exports={default:"local",artic:Nm(),local:Pm()}});var r1=ve((eS,Gm)=>{"strict mode";var pi=document.createElement("canvas"),n1=pi.width=pi.height=1024,A0=pi.getContext("2d");A0.mozImageSmoothingEnabled=!1;A0.webkitImageSmoothingEnabled=!1;A0.font="32px Verdana";A0.textBaseline="bottom";A0.fillStyle="#aaa";function Fm(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(r).width>o&&f>1;){f--,r=a="";for(var u=0;u<l;u++)u<f?(r+=c[u],u+1<f&&(r+=" ")):(a+=c[u],u+1<l&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=Fm(e,a,o,n),i>s&&(s=i)),s}Gm.exports={init(e,t,o=n1){var n=[];Fm(A0,t,Math.min(o*n1,n1),n),A0.clearRect(0,0,pi.width,pi.height);for(var r=0;r<n.length;r++)A0.fillText(n[r],0,pi.height-(Math.max(n.length,3)-r)*32);return e({data:pi,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var qm=ve((tS,Dm)=>{"strict mode";var a1=Om(),d_=new URLSearchParams(window.location.search).get("api"),$m=a1[d_]||a1[a1.default],p_=r1(),i1={},Ts=[],v_=2;function m_(e){return(!navigator.connection||navigator.connection.downlink<v_)&&(e=e=="high"?"mid":"low"),e}var g_=na(),As=document.createElement("canvas");As.width=As.height=g_.isPhone?1024:2048;var l1=As.getContext("2d");l1.imageSmoothingEnabled=!0;l1.imageSmoothingQuality="high";var s1=!1,x_=e=>[(Ts.pop()||e.texture)([[[200,200,200]]]),t=>(Ts.pop()||e.texture)([[[0,0,0,0]]]),1];async function c1(e,t,o){s1===!1&&(s1=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await $m.fetchImage(t,m_(o));r=a.title,n=await createImageBitmap(a.image),l1.drawImage(n,0,0,As.width,As.height)}catch(a){return console.error(a),o=="high"?await c1(e,t,"low"):x_(e)}return[(Ts.pop()||e.texture)({data:As,min:"mipmap",mipmap:"nice",aniso:s1,flipY:!0}),a=>p_.init(Ts.pop()||e.texture,r,a),n.width/n.height]}Dm.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(i1).length;$m.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(i1[s.image_id]){--t===0&&r();return}i1[s.image_id]=s,c1(e,s,o).then(([c,f,l])=>{n({...s,tex:c,textGen:f,aspect:l}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,c1(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(Ts.push(e.tex),e.tex=void 0),e.text&&(Ts.push(e.text),e.text=void 0)}}});var Bm=ve((oS,Hm)=>{Hm.exports=y_;function y_(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var jm=ve((nS,Um)=>{Um.exports=b_;function b_(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Vm=ve((rS,Wm)=>{Wm.exports=w_;function w_(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var f1=ve((aS,Xm)=>{Xm.exports=__;function __(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Km=ve((iS,Ym)=>{Ym.exports=M_;function M_(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var Zm=ve((sS,Qm)=>{Qm.exports=k_;function k_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,k=o*f-a*i,E=n*c-r*s,L=n*f-a*s,R=r*f-a*c,W=l*v-u*p,P=l*m-h*p,te=l*g-d*p,G=u*m-h*v,ae=u*g-d*v,D=h*g-d*m,Y=y*D-b*ae+k*G+E*te-L*P+R*W;return Y?(Y=1/Y,e[0]=(s*D-c*ae+f*G)*Y,e[1]=(r*ae-n*D-a*G)*Y,e[2]=(v*R-m*L+g*E)*Y,e[3]=(h*L-u*R-d*E)*Y,e[4]=(c*te-i*D-f*P)*Y,e[5]=(o*D-r*te+a*P)*Y,e[6]=(m*k-p*R-g*b)*Y,e[7]=(l*R-h*k+d*b)*Y,e[8]=(i*ae-s*te+f*W)*Y,e[9]=(n*te-o*ae-a*W)*Y,e[10]=(p*L-v*k+g*y)*Y,e[11]=(u*k-l*L-d*y)*Y,e[12]=(s*P-i*G-c*W)*Y,e[13]=(o*G-n*P+r*W)*Y,e[14]=(v*b-p*E-m*y)*Y,e[15]=(l*E-u*b+h*y)*Y,e):null}});var e2=ve((cS,Jm)=>{Jm.exports=E_;function E_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-d*m)-u*(c*g-f*m)+v*(c*d-f*h),e[1]=-(n*(h*g-d*m)-u*(r*g-a*m)+v*(r*d-a*h)),e[2]=n*(c*g-f*m)-s*(r*g-a*m)+v*(r*f-a*c),e[3]=-(n*(c*d-f*h)-s*(r*d-a*h)+u*(r*f-a*c)),e[4]=-(i*(h*g-d*m)-l*(c*g-f*m)+p*(c*d-f*h)),e[5]=o*(h*g-d*m)-l*(r*g-a*m)+p*(r*d-a*h),e[6]=-(o*(c*g-f*m)-i*(r*g-a*m)+p*(r*f-a*c)),e[7]=o*(c*d-f*h)-i*(r*d-a*h)+l*(r*f-a*c),e[8]=i*(u*g-d*v)-l*(s*g-f*v)+p*(s*d-f*u),e[9]=-(o*(u*g-d*v)-l*(n*g-a*v)+p*(n*d-a*u)),e[10]=o*(s*g-f*v)-i*(n*g-a*v)+p*(n*f-a*s),e[11]=-(o*(s*d-f*u)-i*(n*d-a*u)+l*(n*f-a*s)),e[12]=-(i*(u*m-h*v)-l*(s*m-c*v)+p*(s*h-c*u)),e[13]=o*(u*m-h*v)-l*(n*m-r*v)+p*(n*h-r*u),e[14]=-(o*(s*m-c*v)-i*(n*m-r*v)+p*(n*c-r*s)),e[15]=o*(s*h-c*u)-i*(n*h-r*u)+l*(n*c-r*s),e}});var o2=ve((lS,t2)=>{t2.exports=S_;function S_(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],l=e[9],u=e[10],h=e[11],d=e[12],p=e[13],v=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,k=o*s-n*i,E=o*c-r*i,L=n*c-r*s,R=f*p-l*d,W=f*v-u*d,P=f*m-h*d,te=l*v-u*p,G=l*m-h*p,ae=u*m-h*v;return g*ae-y*G+b*te+k*P-E*W+L*R}});var r2=ve((fS,n2)=>{n2.exports=A_;function A_(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],v=t[12],m=t[13],g=t[14],y=t[15],b=o[0],k=o[1],E=o[2],L=o[3];return e[0]=b*n+k*s+E*u+L*v,e[1]=b*r+k*c+E*h+L*m,e[2]=b*a+k*f+E*d+L*g,e[3]=b*i+k*l+E*p+L*y,b=o[4],k=o[5],E=o[6],L=o[7],e[4]=b*n+k*s+E*u+L*v,e[5]=b*r+k*c+E*h+L*m,e[6]=b*a+k*f+E*d+L*g,e[7]=b*i+k*l+E*p+L*y,b=o[8],k=o[9],E=o[10],L=o[11],e[8]=b*n+k*s+E*u+L*v,e[9]=b*r+k*c+E*h+L*m,e[10]=b*a+k*f+E*d+L*g,e[11]=b*i+k*l+E*p+L*y,b=o[12],k=o[13],E=o[14],L=o[15],e[12]=b*n+k*s+E*u+L*v,e[13]=b*r+k*c+E*h+L*m,e[14]=b*a+k*f+E*d+L*g,e[15]=b*i+k*l+E*p+L*y,e}});var i2=ve((hS,a2)=>{a2.exports=T_;function T_(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,f,l,u,h,d,p,v,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],l=t[4],u=t[5],h=t[6],d=t[7],p=t[8],v=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=l,e[5]=u,e[6]=h,e[7]=d,e[8]=p,e[9]=v,e[10]=m,e[11]=g,e[12]=i*n+l*r+p*a+t[12],e[13]=s*n+u*r+v*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=f*n+d*r+g*a+t[15]),e}});var c2=ve((uS,s2)=>{s2.exports=L_;function L_(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var f2=ve((dS,l2)=>{l2.exports=z_;function z_(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,f,l,u,h,d,p,v,m,g,y,b,k,E,L,R,W,P,te,G,ae,D,Y,Le;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),f=Math.cos(o),l=1-f,u=t[0],h=t[1],d=t[2],p=t[3],v=t[4],m=t[5],g=t[6],y=t[7],b=t[8],k=t[9],E=t[10],L=t[11],R=r*r*l+f,W=a*r*l+i*c,P=i*r*l-a*c,te=r*a*l-i*c,G=a*a*l+f,ae=i*a*l+r*c,D=r*i*l+a*c,Y=a*i*l-r*c,Le=i*i*l+f,e[0]=u*R+v*W+b*P,e[1]=h*R+m*W+k*P,e[2]=d*R+g*W+E*P,e[3]=p*R+y*W+L*P,e[4]=u*te+v*G+b*ae,e[5]=h*te+m*G+k*ae,e[6]=d*te+g*G+E*ae,e[7]=p*te+y*G+L*ae,e[8]=u*D+v*Y+b*Le,e[9]=h*D+m*Y+k*Le,e[10]=d*D+g*Y+E*Le,e[11]=p*D+y*Y+L*Le,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var u2=ve((pS,h2)=>{h2.exports=N_;function N_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],l=t[9],u=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+f*n,e[5]=i*r+l*n,e[6]=s*r+u*n,e[7]=c*r+h*n,e[8]=f*r-a*n,e[9]=l*r-i*n,e[10]=u*r-s*n,e[11]=h*r-c*n,e}});var p2=ve((vS,d2)=>{d2.exports=R_;function R_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],l=t[9],u=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-f*n,e[1]=i*r-l*n,e[2]=s*r-u*n,e[3]=c*r-h*n,e[8]=a*n+f*r,e[9]=i*n+l*r,e[10]=s*n+u*r,e[11]=c*n+h*r,e}});var m2=ve((mS,v2)=>{v2.exports=C_;function C_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],l=t[5],u=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+f*n,e[1]=i*r+l*n,e[2]=s*r+u*n,e[3]=c*r+h*n,e[4]=f*r-a*n,e[5]=l*r-i*n,e[6]=u*r-s*n,e[7]=h*r-c*n,e}});var x2=ve((gS,g2)=>{g2.exports=P_;function P_(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var b2=ve((xS,y2)=>{y2.exports=I_;function I_(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,f=a+a,l=n*s,u=n*c,h=n*f,d=r*c,p=r*f,v=a*f,m=i*s,g=i*c,y=i*f;return e[0]=1-(d+v),e[1]=u+y,e[2]=h-g,e[3]=0,e[4]=u-y,e[5]=1-(l+v),e[6]=p+m,e[7]=0,e[8]=h+g,e[9]=p-m,e[10]=1-(l+d),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var _2=ve((yS,w2)=>{w2.exports=O_;function O_(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var k2=ve((bS,M2)=>{M2.exports=F_;function F_(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var S2=ve((wS,E2)=>{E2.exports=G_;function G_(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var T2=ve((_S,A2)=>{A2.exports=$_;function $_(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var z2=ve((MS,L2)=>{L2.exports=D_;function D_(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var R2=ve((kS,N2)=>{N2.exports=q_;function q_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,f=o*i,l=n*i,u=n*s,h=r*i,d=r*s,p=r*c,v=a*i,m=a*s,g=a*c;return e[0]=1-u-p,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-p,e[6]=d+v,e[7]=0,e[8]=h+m,e[9]=d-v,e[10]=1-f-u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var P2=ve((ES,C2)=>{C2.exports=H_;function H_(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var O2=ve((SS,I2)=>{I2.exports=B_;function B_(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var G2=ve((AS,F2)=>{F2.exports=U_;function U_(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*f*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var D2=ve((TS,$2)=>{$2.exports=j_;function j_(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var H2=ve((LS,q2)=>{var W_=f1();q2.exports=V_;function V_(e,t,o,n){var r,a,i,s,c,f,l,u,h,d,p=t[0],v=t[1],m=t[2],g=n[0],y=n[1],b=n[2],k=o[0],E=o[1],L=o[2];return Math.abs(p-k)<1e-6&&Math.abs(v-E)<1e-6&&Math.abs(m-L)<1e-6?W_(e):(l=p-k,u=v-E,h=m-L,d=1/Math.sqrt(l*l+u*u+h*h),l*=d,u*=d,h*=d,r=y*h-b*u,a=b*l-g*h,i=g*u-y*l,d=Math.sqrt(r*r+a*a+i*i),d?(d=1/d,r*=d,a*=d,i*=d):(r=0,a=0,i=0),s=u*i-h*a,c=h*r-l*i,f=l*a-u*r,d=Math.sqrt(s*s+c*c+f*f),d?(d=1/d,s*=d,c*=d,f*=d):(s=0,c=0,f=0),e[0]=r,e[1]=s,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=u,e[7]=0,e[8]=i,e[9]=f,e[10]=h,e[11]=0,e[12]=-(r*p+a*v+i*m),e[13]=-(s*p+c*v+f*m),e[14]=-(l*p+u*v+h*m),e[15]=1,e)}});var U2=ve((zS,B2)=>{B2.exports=X_;function X_(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var Ls=ve((NS,j2)=>{j2.exports={create:Bm(),clone:jm(),copy:Vm(),identity:f1(),transpose:Km(),invert:Zm(),adjoint:e2(),determinant:o2(),multiply:r2(),translate:i2(),scale:c2(),rotate:f2(),rotateX:u2(),rotateY:p2(),rotateZ:m2(),fromRotation:x2(),fromRotationTranslation:b2(),fromScaling:_2(),fromTranslation:k2(),fromXRotation:S2(),fromYRotation:T2(),fromZRotation:z2(),fromQuat:R2(),frustum:P2(),perspective:O2(),perspectiveFromFieldOfView:G2(),ortho:D2(),lookAt:H2(),str:U2()}});var X2=ve((RS,V2)=>{"use strict";var W2=qm(),an=Ls(),vi=or(),Y_=3e3,zf="high",h1,Uc=.36,jc=13.64,zs=vi.C.hallEnd-.01,Wc=vi.C.z0+.01,K_=.356,Q_=13.644,Z_=vi.C.hallEnd-.006,J_=vi.C.z0+.006,e6=.12,Rf=4,Ns=e=>rr[e]&&rr[e].cy||Rf,u1=.26,t6=5.6,o6=7,rr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:zs},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:vi.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:vi.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:vi.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function n6(e,t){let o=t&&t.maxH||t6,n=t&&t.maxW||o6,r=Math.min(o,n/e);return{width:r*e,height:r}}function r6(e,t,o){let n=rr[o],r=[],a=Ns(o)-t/2;return n.side==="left"?(an.fromTranslation(r,[Uc,a,n.z+e/2]),an.rotateY(r,r,Math.PI/2)):n.side==="right"?(an.fromTranslation(r,[jc,a,n.z-e/2]),an.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?an.fromTranslation(r,[n.x-e/2,a,Wc]):(an.fromTranslation(r,[7+e/2,a,zs]),an.rotateY(r,r,Math.PI)),an.scale(r,r,[e,t,e6]),r}function a6(e,t,o){let n=rr[o],r=[],a=Ns(o)-t/2;return n.side==="left"?(an.fromTranslation(r,[Uc,a,n.z+e/2]),an.rotateY(r,r,Math.PI/2)):n.side==="right"?(an.fromTranslation(r,[jc,a,n.z-e/2]),an.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?an.fromTranslation(r,[n.x-e/2,a,Wc]):(an.fromTranslation(r,[7+e/2,a,zs]),an.rotateY(r,r,Math.PI)),r}function i6(e,t,o){let n=rr[o],r=[],a=Ns(o)-t/2-u1-.38;return n.side==="left"?(an.fromTranslation(r,[K_,a,n.z+e/2]),an.rotateY(r,r,Math.PI/2)):n.side==="right"?(an.fromTranslation(r,[Q_,a,n.z-e/2]),an.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?an.fromTranslation(r,[n.x-e/2,a,J_]):(an.fromTranslation(r,[7+e/2,a,Z_]),an.rotateY(r,r,Math.PI)),an.scale(r,r,[2,2,2]),r}function s6(e,t,o){let n=rr[o],r=Ns(o)-t/2-u1-.38;return n.side==="left"?[Uc+.55,r,n.z]:n.side==="right"?[jc-.55,r,n.z]:n.side==="corridor"?[n.x,r,Wc+.55]:[7,r,zs-.55]}var Bc=.42;function Nf(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function c6(e,t,o){let n=rr[o],r,a,i;n.side==="left"?(r=[Uc,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[jc,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,Wc],a=[1,0,0],i=[0,0,1]):(r=[7,zs],a=[1,0,0],i=[0,0,-1]);let s=Ns(o)+t/2+u1+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(d,p)=>[r[0]+i[0]*d,p,r[1]+i[2]*d],l=[.075,.062,.05],u=[{fixmodel:Nf(f(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Nf(f(Bc/2,s),a,i,.02,.02,Bc),fixcol:l,fixglow:0},{fixmodel:Nf(f(Bc,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Nf(f(Bc-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(Bc,s-.02);return{fixtures:u,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}V2.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!rr[i])return;let{width:s,height:c}=n6(a.aspect,rr[i]),f=c6(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),o.push({...a,fixtures:f.fixtures,side:rr[i].side,model:r6(s,c,i),framemodel:a6(s,c,i),framesize:[s,c],textmodel:i6(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:s6(s,c,i),paintingPosition:rr[i].side==="left"?[Uc+.05,Rf,rr[i].z]:rr[i].side==="right"?[jc-.05,Rf,rr[i].z]:rr[i].side==="corridor"?[rr[i].x,Ns(i),Wc+.05]:[7,Rf,zs-.05],textGen:null})};return W2.fetch(e,rr.length,zf,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{W2.load(e,a,zf)}),zf="low",h1&&clearTimeout(h1),h1=setTimeout(()=>{zf="high"},Y_)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Z2=ve((CS,Q2)=>{"use strict";var l6=r1(),Y2=na(),K2=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function f6(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];K2.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<K2.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(i,s,f,i,f,c)}return{verts:t,elems:o}}var h6=`#extension GL_OES_standard_derivatives : enable
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
}`;Q2.exports=e=>{let t=l6.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${M0().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(Y2.isPhone?1024:2048),detail:()=>Y2.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=f6(),r=e({frag:h6,vert:u6,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Of=ve((PS,rg)=>{"use strict";var{A:Jn}=ia(),{C:_n}=or(),{DOOR:Rs}=b0(),Un=S0(),tg=_n.hallEnd+.35,og={arch:[13.6,0,Jn.zc-Jn.arch.r-.3,14.4,Jn.arch.spring+Jn.arch.r+.3,Jn.zc+Jn.arch.r+.3],mouth:[13.3,0,_n.z0-.3,14.3,8.2,_n.z1+.3],stair:[-.5,0,Un.SURR.z0-.2,.5,Un.SURR.top+.3,Un.SURR.z1+.2],door:[Rs.x0-.4,0,-.5,Rs.x1+.4,Rs.top+.4,.5],windows:[15.6,.4,_n.z1-.2,36.9,6.4,_n.z1+.9],farDoor:[_n.x1-.2,0,_n.zc-Rs.r-.4,_n.x1+.9,Rs.top+.4,_n.zc+Rs.r+.4]},a0={court:[Jn.x0-.4,0,Jn.z0-.3,Jn.x1+.3,Jn.domeTop+.5,Jn.z1+.3],stair:[Un.C.x-Un.R-2.6,0,Un.C.z-Un.R-1.5,.5,15.6,Un.C.z+Un.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,_n.z1,46,60,_n.z1+110],florence:[_n.x1,-1,_n.zc-30,_n.x1+80,60,_n.zc+30]},d6=[[0,0,0,14,0,tg],[13.6,0,_n.z0,_n.x1+.4,0,_n.z1],[Jn.x0-.4,0,Jn.z0,Jn.x1,0,Jn.z1],[Un.C.x-Un.R-2.6,0,Un.C.z-Un.R,.4,0,Un.C.z+Un.R]],p6={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Vc=new Float64Array(24),ka=[7,2,2],ng=0,mi="out",If=!0;try{/[?&]nocull\b/.test(location.search)&&(If=!1)}catch(e){}var Cf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},Pf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},J2=!0;function v6(e){let t=s=>[e[s],e[4+s],e[8+s],e[12+s]],o=t(0),n=t(1),r=t(2),a=t(3),i=(s,c,f,l)=>{for(let u=0;u<4;u++)Vc[s*4+u]=c[u]+f*l[u]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function T0(e,t){if(!If)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=Vc[r*4],i=Vc[r*4+1],s=Vc[r*4+2],c=Vc[r*4+3],f=a>0?e[3]:e[0],l=i>0?n:o,u=s>0?e[5]:e[2];if(a*f+i*l+s*u+c<0)return!1}return!0}var d1=(e,t)=>ka[0]>e[0]-t&&ka[0]<e[3]+t&&ka[2]>e[2]-t&&ka[2]<e[5]+t;function m6(e){if(d1(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-ka[0],a=(n&2?e[5]:e[2])-ka[2],i=Math.atan2(r,a)-ng;i-=Math.round(i/(2*Math.PI))*2*Math.PI,t=Math.min(t,i),o=Math.max(o,i)}return o-t>Math.PI?null:[t,o]}function eg(e,t,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=m6(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of e){let s=og[i];if(!d1(s,.6)&&(!T0(s,o)||!a(s)))return!1}return T0(t,o)&&a(t)}function g6(){let e=ka[0],t=ka[2];return e<0&&t>Un.C.z-Un.R-1.5&&e>Un.C.x-Un.R-2.6?"stair":e>14.1&&t>Jn.z0-.3&&t<Jn.z1+.3&&e<Jn.x1+.3?"court":e>13.9&&t>_n.z0-.4&&t<_n.z1+.1&&e<_n.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<tg?"hall":"out"}var x6={PORTAL:og,ROOM:a0,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*e[r*4+s];n[r*4+a]=i}v6(n),ka[0]=o[0],ka[1]=o[1],ka[2]=o[2],ng=Math.atan2(-e[2],-e[10]),mi=g6();for(let r in a0)if(!If||mi==="out"||mi===r||d1(a0[r],.3))Cf[r]=T0(a0[r],!1)||mi===r,Pf[r]=T0(a0[r],!0)||mi===r;else{let a=p6[mi][r];Cf[r]=a?eg(a,a0[r],!1):T0(a0[r],!1),Pf[r]=a?eg(a,a0[r],!0):T0(a0[r],!0)}J2=!If||d6.some(r=>T0(r,!1))},get zone(){return mi},room(e,t){return t?Pf[e]:Cf[e]},box(e,t,o){return o&&!(t?Pf[o]:Cf[o])?!1:T0(e,t)},get floor(){return J2}};rg.exports=x6});var ig=ve((IS,ag)=>{"use strict";var y6=o1(),b6=Of();function w6(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let u=0;u<3;u++)a.push(t.getFloat32(12+u*4,!0)),i.push(t.getFloat32(24+u*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,r);s+=r*2;let l=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:f,nrm:l}}ag.exports=(e,t)=>{let o=[],n=[],r=[],a=[],i=null,s=t.statues.length,c=[],f=(u,h)=>{let d=o.length/3,p=h.height*.75,v=h.base!==void 0?h.base:t.pedestalTop;c.push({offset:a.length,count:u.nI,box:[h.x-p,v-.1,h.z-p,h.x+p,v+h.height+.2,h.z+p]});let m=h.height,g=Math.cos(h.yaw),y=Math.sin(h.yaw),b=h.base!==void 0?h.base:t.pedestalTop;for(let k=0;k<u.nV;k++){let E=(u.mn[0]+u.pos[k*3]/65535*u.sz[0])*m,L=(u.mn[1]+u.pos[k*3+1]/65535*u.sz[1])*m,R=(u.mn[2]+u.pos[k*3+2]/65535*u.sz[2])*m;o.push(h.x+g*E+y*R,b+L,h.z-y*E+g*R);let W=u.nrm[k*3]/127,P=u.nrm[k*3+1]/127,te=u.nrm[k*3+2]/127;n.push(g*W+y*te,P,-y*W+g*te),r.push(h.mat||1,0,0)}for(let k=0;k<u.nI;k++)a.push(d+u.idx[k])},l=()=>{a.length!==0&&(i=y6(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1,!0))};return t.statues.forEach(u=>{fetch("res/"+u.file).then(h=>{if(!h.ok)throw new Error("Could not load "+u.file);return h.arrayBuffer()}).then(h=>f(w6(h),u)).catch(h=>console.error(h)).then(()=>{--s===0&&l()})}),function(u){if(!i)return;let h=!!(u&&u.reflected),d=c.filter(p=>b6.box(p.box,h));d.length&&i(d)}}});var gg=ve((OS,v1)=>{"use strict";var _6=li(),Rn=1.29032,xi=[9.2968,2,5.9],M6=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Ff=2147.64,sg=725,cg=1288,lg=1450,fg=2576,Ir=-5.197,bi=3.865,L0=10.135,wi=-14.679,Xc=-30.229,Yc=7.232,hg=-45.713,Cs=17.1*Rn,yi=16.6*Rn,Kc=16.6*Rn,ug=[6.9,17.1],Gf=[2.95,16.6],k6=1.6,E6=0,S6=1,dg=2,p1=3,pg=4,vg=5,A6=6;function T6(){let e=[],t=[],o=[],n=[],r=_6.createBuilder(e,t,o,n),a=(f,l,u,h,d,p,v=1,m=1)=>{let g=[];for(let y=0;y<=v;y++){let b=[];for(let k=0;k<=m;k++){let E=[f[0]+l[0]*y/v+u[0]*k/m,f[1]+l[1]*y/v+u[1]*k/m,f[2]+l[2]*y/v+u[2]*k/m],L=p(E);b.push(r.vert(E,h,[d,L[0],L[1]]))}g.push(b)}for(let y=0;y<v;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=f=>l=>[(xi[2]-l[2])/Rn-f,l[1]/Rn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],E6,f=>[f[0]/Rn,f[2]/Rn],13,14),a([bi,0,Ir],[0,0,wi-Ir],[0,Cs,0],[1,0,0],S6,i(8.6),6,6),a([-40,0,Ir],[bi+40,0,0],[0,Cs,0],[0,0,1],dg,f=>[(bi-f[0])/Rn,f[1]/Rn],8,4),a([-40,0,-.36],[0,0,Ir+.36],[0,Cs,0],[1,0,0],dg,f=>[-f[2]/Rn,f[1]/Rn]),a([L0,0,-80],[0,0,Ir+80],[0,yi,0],[-1,0,0],pg,i(8.6),12,6),a([L0,0,Ir],[60,0,0],[0,yi,0],[0,0,1],vg,f=>[(f[0]-L0)/Rn,f[1]/Rn],8,4),a([70,0,Ir],[0,0,-.36-Ir],[0,yi,0],[-1,0,0],vg,f=>[-f[2]/Rn,f[1]/Rn]);let s=f=>[(f[0]-xi[0])/Rn+4.18,f[1]/Rn];a([-20,0,Xc],[Yc+20,0,0],[0,Kc,0],[0,0,1],p1,s,8,6),a([Yc,0,Xc],[0,0,hg-Xc],[0,Kc,0],[1,0,0],p1,i(28),4,4),a([Yc,0,hg],[L0-Yc,0,0],[0,yi,0],[0,0,1],pg,f=>[(f[0]-xi[0])/Rn,f[1]/Rn],2,4),a([-20,0,wi],[0,0,Xc-wi],[0,Kc,0],[1,0,0],p1,i(16),4,4);let c=(f,l,u,h)=>a(f,l,u,h,A6,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function gi(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Ea=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",L6=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,wi],[bi,Cs,Ir]],[[L0,0,-80],[70,yi,Ir]],[[-20,0,-80],[Yc,Kc,Xc]],[[-40,0,-80],[-20,Kc,wi]]],z6=L6.map(e=>`if (hitBox(ro, rd, ${Ea(e[0])}, ${Ea(e[1])}, 1e4) ) return 0.0;`).join(`
		`),mg="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>M6[t][e].toFixed(6)).join(", ")).join(", ")+")",N6=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Ea([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	vec3 ro = ${Ea(xi)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Ea([-40,0,wi])}, ${Ea([bi-.02,Cs,Ir])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Ea([L0+.02,0,-80])}, ${Ea([70,yi,Ir])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${mg} * (p - ${Ea(xi)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${sg.toFixed(2)} + ${Ff.toFixed(3)} * pc.x / pc.z) / ${lg.toFixed(1)},
		(${cg.toFixed(2)} - ${Ff.toFixed(3)} * pc.y / pc.z) / ${fg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${mg} * (p - ${Ea(xi)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${sg.toFixed(2)} + ${Ff.toFixed(3)} * pc.x / pc.z) / ${lg.toFixed(1)},
		(${cg.toFixed(2)} - ${Ff.toFixed(3)} * pc.y / pc.z) / ${fg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Ea(xi)}), n));
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
		base = texture2D(cobbleTex, fuv / ${k6.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${ug[0].toFixed(2)}, 1.0 - fuv.y / ${ug[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Gf[0].toFixed(2)}, 1.0 - fuv.y / ${Gf[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Gf[0].toFixed(2)}, 1.0 - fuv.y / ${Gf[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(bi-.05).toFixed(3)} && v_pos.x < ${(L0+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${wi.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Ir+4.5).toFixed(3)};
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
}`,C6=nr();v1.exports=e=>{let t=T6(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=gi(e,"res/street/photo.jpg",o,[190,160,120]),i=gi(e,"res/street/photo_night.jpg",o,[12,14,22]),s=gi(e,"res/street/photo_mask.png",o,[255,255,255]),c=gi(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=gi(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=gi(e,"res/street/facade_cream.jpg",n,[215,200,175]),u=gi(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),d=e({frag:N6,vert:R6,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:u,photoNight:i,night:()=>C6.night,time:()=>(Date.now()-h)/1e3}});return function(){d()}};v1.exports.layout={MOUTH_Z:Ir,PINK_X:bi,RIGHT_X:L0,PINK_H:Cs,CREAM_H:yi,S:Rn}});var bg=ve((FS,yg)=>{"use strict";var P6=nr().GLSL,{glassPanes:I6}=b0(),xg=or();function O6(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(I6(),[0,0,1]),o(xg.windowGlass(),[0,0,1]),o(xg.farDoorGlass(),[1,0,0]),{position:e,normal:t}}yg.exports=e=>{let t=O6(),o=e({frag:`
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var Fg=ve((GS,b1)=>{"use strict";var Sg=nr().GLSL,F6=li(),m1=na(),{wallWithHoles:G6,C:R0}=or(),ot=.28,Z={westBack:14.4,westCol:15-ot,eastCol:37.4+ot,eastBack:41.8,south:R0.z1+.7,northCol:R0.z1+.7+16,northBack:R0.z1+.7+19,cx:(15+37.4)/2,cz:(R0.z1+.7+R0.z1+.7+16-ot)/2},Lo={x0:Z.westCol+ot,x1:Z.eastCol-ot,z0:Z.south,z1:Z.northCol-ot},lr=3.3,Jc=.92,C0=5.6,wg=6,ca=11.9,N0=9.6,no={x0:Z.cx-2.9,x1:Z.cx+2.9,top:14.4},jf=7,Ag=4,x1=(Z.eastCol-Z.westCol)/jf,$6=(Z.northCol-Z.south)/Ag,Tg=3,tl=.26,Ei=1.4,Mi=1.1,Df=3,Da=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),je={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},qa=[],Lg=(e,t,o)=>[Z.cx+e,t,Z.cz+o],qf=Lg(-5.9,0,3.4),P0=.85,z0={c:[qf[0],4.6*P0+.5,qf[2]],r:[5*P0,3.6*P0,4.5*P0]},zg=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[qf[0]+e.d[0]*P0,e.d[1]*P0+.5,qf[2]+e.d[2]*P0],r:e.r.map(t=>t*P0),n:e.n}));for(let e of zg)qa.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var D6=[3.6,6.3,9];for(let e of D6){let t=8.6+e%1.7*.6;qa.push({c:Lg(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var q6=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:Z.cx+e.d[0],z:Z.cz+e.d[1],bloom:e.bloom}));for(let e of q6)qa.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var y1=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[Z.cx+Math.cos(t)*2.3,Z.cz+Math.sin(t)*2.3]});for(let[e,t]of y1)qa.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Ng=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let u=l/f,h=o+(r-o)*u,d=n+(a-n)*u;i!==void 0&&Math.abs((r!==o?h:d)-i)<s||Ng.push([h,d])}};e(Lo.x0+.45,Lo.z0+1.2,Lo.x0+.45,Lo.z1-.45,Z.cz,1),e(Lo.x1-.45,Lo.z0+1.2,Lo.x1-.45,Lo.z1-.45,Z.cz,1),e(Lo.x0+.45,Lo.z1-.45,Lo.x1-.45,Lo.z1-.45,Z.cx,1.9)}var H6=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Hf=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function Is(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Cn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function B6(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var U6={north:[e=>[e[0],e[1],Z.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[Z.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[Z.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function Rg(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var j6=Rg(Z.westCol,x1,jf,ot+tl,ot+tl),_g=Rg(Z.south,$6,Ag,.32,ot+tl),Ps=[Z.cx-32.35,Z.northCol-77],W6=Array.from({length:jf-1},(e,t)=>Z.westCol+(t+1)*x1),Cg=e=>(e[1]-e[0])/2-.2,el=e=>(e[0]+e[1])/2;function V6(e,t){let o=el(e),n=Cg(e);return{u0:e[0],u1:e[1],bottom:t?0:Jc,head:r=>{let a=Math.abs(r-o);return a<n?lr+Math.sqrt(n*n-a*a):lr},step:.05}}function X6(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[je.STONE,0,0]}}function Y6(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[je.STONE,0,0]}}function Mg(e,t,o){let[n,r]=U6[t],a=B6(e,n,r),i=[];o.arches.forEach((l,u)=>i.push(V6(l,u===o.open)));let s=[];for(let l of o.bays||o.arches){let u=el(l);o.oculi&&i.push(X6(u,6.85,.3)),s.push({c:u,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])s.push(l);for(let l of s)i.push(Y6(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])i.push(l);G6(a,{u0:o.u0,u1:o.u1,w0:-ot,w1:ot,top:o.top,holes:i,mat:[je.BRICK,0,0],revealMat:[je.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,u,h,d,p,v,m)=>{let g=n([l,u,h]),y=n([d,p,v]);Cn(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,u,h,d,p,v)=>Is(a,l,u,h,d,p,[v,0,0]);for(let l of o.arches){let u=el(l),h=Cg(l),d=28;for(let p of[ot,-ot]){let v=p>0?1:-1,m=p+v*.025;for(let g=0;g<d;g++){let y=Math.PI*g/d,b=Math.PI*(g+1)/d,k=(G,ae)=>[u+Math.cos(G)*ae,lr+Math.sin(G)*ae],E=k(y,h),L=k(b,h),R=k(y,h+.26),W=k(b,h+.26);f([E[0],E[1],m],[L[0],L[1],m],[W[0],W[1],m],[R[0],R[1],m],[0,0,v],je.STONE);let P=Math.cos((y+b)/2),te=Math.sin((y+b)/2);f([R[0],R[1],p],[W[0],W[1],p],[W[0],W[1],m],[R[0],R[1],m],[P,te,0],je.STONE)}}}if(o.arches.forEach((l,u)=>{u!==o.open&&c(l[0]-.02,Jc,-ot-.05,l[1]+.02,Jc+.09,ot+.05,je.STONE)}),c(o.u0,wg,-ot,o.u1,wg+.18,ot+.09,je.STONE),c(o.u0,o.win[0]-.12,ot-.01,o.u1,o.win[0],ot+.06,je.STONE),o.cornice)for(let[l,u,h]of o.cornice)c(l,h-.22,ot-.01,u,h,ot+.16,je.STONE),c(l,h,ot-.01,u,h+.16,ot+.42,je.STONE);for(let{c:l,y0:u,y1:h,w:d,door:p}of s){let v=d/2;if(f([l-v-.01,u,.06],[l+v+.01,u,.06],[l+v+.01,h,.06],[l-v-.01,h,.06],[0,0,1],p?je.DARK:je.PANE),p){c(l-v-.16,0,ot-.01,l-v,h+.16,ot+.07,je.STONE),c(l+v,0,ot-.01,l+v+.16,h+.16,ot+.07,je.STONE),c(l-v-.16,h,ot-.01,l+v+.16,h+.2,ot+.09,je.STONE),c(l-v,0,.07,l+v,h-.02,.12,je.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,je.DARK);continue}for(let m of[-1,1]){let g=l+m*v;c(g+m*.02,u+.02,ot+.02,g+m*(v+.025),h-.02,ot+.06,je.SHUTTER)}c(l-v-.09,h,ot-.01,l+v+.09,h+.16,ot+.05,je.STONE),c(l-v-.09,u-.1,ot-.01,l+v+.09,u,ot+.09,je.STONE),c(l-.015,u,.06,l+.015,h,.09,je.SHUTTER),c(l-v,(u+h)/2-.015,.06,l+v,(u+h)/2+.015,.09,je.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let u=el(l);f([u-.31,6.54,0],[u+.31,6.54,0],[u+.31,7.16,0],[u-.31,7.16,0],[0,0,1],je.DARK)}for(let l of o.cols){let u=Jc+.09,h=n([l,0,0]);Cn(e,h[0]-.24,u,h[2]-.24,h[0]+.24,u+.12,h[2]+.24,je.MARBLE),e.lathe([[.23,u+.12,1],[.24,u+.17],[.2,u+.24],[.215,u+.28],[.17,u+.34,1],[.165,u+.6],[.155,lr-.5],[.15,lr-.38,1],[.175,lr-.34,1],[.17,lr-.3],[.2,lr-.22],[.27,lr-.15],[.29,lr-.12,1]],h[0],h[2],18,{mat:()=>[je.MARBLE,0,0]}),Cn(e,h[0]-.29,lr-.12,h[2]-.29,h[0]+.29,lr+.01,h[2]+.29,je.STONE)}o.walk&&o.walk(e)}function K6(e){let t=[-1,0,1].map(r=>{let a=Z.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[je.STONE,0,0]}});Mg(e,"north",{u0:Z.westCol-ot,u1:Z.eastCol+ot,top:r=>r>no.x0+1e-6&&r<no.x1-1e-6?no.top:ca,cuts:[no.x0,no.x0+1e-5,no.x1-1e-5,no.x1],arches:j6,open:Tg,cols:W6,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[Z.westCol-ot-3.3,no.x0,ca],[no.x1,Z.eastCol+ot+3.3,ca],[no.x0-.2,no.x1+.2,no.top]],walk:r=>{Cn(r,Lo.x0,C0,Z.northCol+ot,Lo.x1,C0+.2,Z.northBack,je.PLASTER),Cn(r,Lo.x0,0,Z.northBack,Lo.x1,C0,Z.northBack+.3,je.PLASTER);for(let a of[Z.cx-7.2,Z.cx,Z.cx+7.2])Is(r,[a-.8,0,Z.northBack-.01],[a+.8,0,Z.northBack-.01],[a+.8,2.9,Z.northBack-.01],[a-.8,2.9,Z.northBack-.01],[0,0,-1],[je.DARK,0,0]),Cn(r,a-.98,0,Z.northBack-.06,a+.98,3.12,Z.northBack,je.STONE),Is(r,[a-.8,0,Z.northBack-.07],[a+.8,0,Z.northBack-.07],[a+.8,2.9,Z.northBack-.07],[a-.8,2.9,Z.northBack-.07],[0,0,-1],[je.DARK,0,0])}}),Is(e,[no.x0,11,Z.northCol+.2],[no.x1,11,Z.northCol+.2],[no.x1,13.6,Z.northCol+.2],[no.x0,13.6,Z.northCol+.2],[0,0,-1],[je.DARK,0,0]),Cn(e,no.x0+.3,10.88,Z.northCol-ot-.06,no.x1-.3,11,Z.northCol-ot+.1,je.STONE),Cn(e,Z.westBack,C0+.2,Z.northBack,Z.eastBack,ca,Z.northBack+3.4,je.BRICK),Cn(e,Z.westBack,N0,Z.northCol-ot,Z.westCol-ot,ca,Z.northCol+ot,je.BRICK),Cn(e,Z.eastCol+ot,N0,Z.northCol-ot,Z.eastBack,ca,Z.northCol+ot,je.BRICK),Cn(e,Z.westBack,C0+.2,Z.northCol+ot+.12,Z.eastBack,ca,Z.northBack,je.BRICK),Qc(e,[Z.westBack-.5,ca+.16,Z.northCol-ot-.42],[no.x0-Z.westBack+.5,0,0],[0,2.6,4.4],je.ROOF),Qc(e,[no.x1,ca+.16,Z.northCol-ot-.42],[Z.eastBack+.5-no.x1,0,0],[0,2.6,4.4],je.ROOF),Qc(e,[no.x0-.3,no.top+.16,Z.northCol-ot-.42],[no.x1-no.x0+.6,0,0],[0,1.4,3],je.ROOF),kg(e,[no.x0-.3,no.top+.16,Z.northCol-ot-.42],[no.x0-.3,no.top+1.56,Z.northCol-ot+2.58],[no.x0-.3,no.top+.16,Z.northCol-ot+2.58],[-1,0,0],je.BRICK),kg(e,[no.x1+.3,no.top+.16,Z.northCol-ot-.42],[no.x1+.3,no.top+1.56,Z.northCol-ot+2.58],[no.x1+.3,no.top+.16,Z.northCol-ot+2.58],[1,0,0],je.BRICK),Cn(e,no.x0,ca,Z.northCol+ot,no.x1,no.top,Z.northCol+2.6,je.BRICK);for(let[r,a]of[[Z.cx-9.8,Z.northBack+.6],[Z.cx+9.4,Z.northBack+.4],[Z.cx-4.6,Z.northBack+1]])Cn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,je.BRICK),Cn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,je.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];_g.forEach((u,h)=>{let d=el(u);h===1?c.push({c:d,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:d,y0:1,y1:2.75,w:1.05}),c.push({c:d,y0:3.85,y1:5.45,w:1.05})}),Mg(e,r,{u0:Z.south,u1:Z.northCol-ot,top:()=>N0,arches:[],bays:_g,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[Z.south,Z.northCol-ot,N0]]}),Cn(e,a,0,Z.south,i+s*(ot+.12),N0,Z.northBack+.3,je.BRICK);let f=i-s*ot;Cn(e,f,0,Z.south,f-s*.06,.55,Z.northCol-ot,je.STONE);let l=i-s*(ot+.42);Qc(e,[l,N0+.16,Z.south],[0,0,Z.northCol-ot-Z.south],[a-l+s*.4,1.9,0],je.ROOF)};o("west",Z.westBack,Z.westCol),o("east",Z.eastBack,Z.eastCol);let n=R0.x1+.7;Cn(e,13.65,7.4,Z.south-.02,n,7.62,Z.south+.14,je.STONE),Cn(e,13.65,10.4,Z.south-.02,n,10.6,Z.south+.38,je.STONE),Qc(e,[13.65,10.6,Z.south+.38],[n-13.65,0,0],[0,2.2,-5],je.ROOF)}function kg(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function Qc(e,t,o,n,r){let a=Hf([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,l)=>[t[0]+o[0]*f+n[0]*l,t[1]+o[1]*f+n[1]*l,t[2]+o[2]*f+n[2]*l];Is(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;Is(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],Hf([-n[0],0,-n[2]]),[r,0,0])}function Q6(e){let t=Z.westBack,o=Z.eastBack,n=Z.south,r=Z.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let l=[t+(o-t)*c/a,0,n+(r-n)*f/i];s[c].push(e.vert(l,[0,1,0],[je.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var Zc=.46,ki=.58,_i=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function Z6(e,t,o){let n=Mi+o,r=(e>0?Lo.x1-Z.cx:Z.cx-Lo.x0)-Ei-o,a=Mi+o,i=(t>0?Lo.z1-Z.cz:Z.cz-Lo.z0)-Ei-o,s=Df+o,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[r,i],[r,a],[f,a]],u=Math.atan2(a,f),h=Math.atan2(c,n);for(let d=1;d<10;d++){let p=u+(h-u)*d/10;l.push([Math.cos(p)*s,Math.sin(p)*s])}return l.map(([d,p])=>[Z.cx+e*d,Z.cz+t*p])}function J6(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,f=i,l=Zc*.5,u=-l,h=a+l,d=[],p=Math.max(1,Math.ceil((h-u)/1));for(let v=0;v<=p;v++){let m=u+(h-u)*v/p,g=[];for(let y=0;y<_i.length;y++){let[b,k]=_i[y],E=Math.min(_i.length-2,y),L=_i[Math.max(0,y-1)],R=_i[Math.min(_i.length-1,y+1)],W=(R[0]-L[0])*Zc,te=(R[1]-L[1])*ki,G=-W,ae=Math.hypot(te,G)||1,D=[t[0]+i*m+c*b*Zc,k*ki,t[1]+s*m+f*b*Zc],Y=[c*(-te/ae),-G/ae,f*(-te/ae)];g.push(e.vert(D,Y[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:Y,[je.HEDGE,0,0]))}d.push(g)}for(let v=0;v<p;v++)for(let m=0;m<_i.length-1;m++)e.tri(d[v][m],d[v+1][m],d[v+1][m+1]),e.tri(d[v][m],d[v+1][m+1],d[v][m+1]);for(let[v,m]of[[0,-1],[p,1]]){let g=d[v],y=e.vert([t[0]+i*(v?h:u),ki*.5,t[1]+s*(v?h:u)],[i*m,0,s*m],[je.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function eM(e){for(let t of[-1,1])for(let o of[-1,1]){let n=Z6(t,o,.3);for(let r=0;r<n.length;r++)J6(e,n[r],n[(r+1)%n.length])}}function tM(e){let t=Z.cx,o=Z.cz,n=()=>[je.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[je.DARK,0,0]});let r={mat:()=>[je.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*l*i*-1+0),1.95+Math.sin(f)*l,o])}e.tube(s,()=>.016,16,5,r)}}function oM(e){for(let[t,o]of y1)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[je.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[je.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[je.BARK,0,0]})}function nM(e){let[t,,o]=z0.c,n=Ig(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[je.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,u=[t+a*l,s*l,o+i*l],h=n()*Math.PI*2;e.tube([u,[u[0]+Math.cos(h)*1.3,u[1]+.9,u[2]+Math.sin(h)*1.3],[u[0]+Math.cos(h)*2.3,u[1]+1.4+n(),u[2]+Math.sin(h)*2.3]],d=>.08*(1-d*.7),8,6,{mat:()=>[je.BARK,0,0]})}}for(let a of qa.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[je.BARK,0,0]})}function rM(e){let t=()=>[je.FARBRICK,0,0],o=()=>[je.LEAD,0,0],n=(a,i,s,c,f,l)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let u=[];for(let d=0;d<=12;d++){let p=d/12*Math.PI/2,v=Math.cos(p)*s,m=Math.sin(p)*f;l&&(v*=1-.18*Math.sin(p*2)),u.push([Math.max(v,s*.12),c+m])}e.lathe(u,a,i,28,{mat:o});let h=c+f;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};Cn(e,14,0,104,52,26,150,je.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{Cn(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,je.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function aM(e){let o=[Z.cx,0,Z.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],u=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[i].push(e.vert(u,[-l[0],-l[1],-l[2]],[je.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function iM(){let e=[],t=[],o=[],n=[],r=F6.createBuilder(e,t,o,n);return Q6(r),K6(r),eM(r),tM(r),oM(r),nM(r),r.save(),r.translate(Ps[0],0,Ps[1]),rM(r),r.restore(),aM(r),{position:e,normal:t,elements:o,attr:n}}var Pg=[[[13.65,0,R0.z0-.7],[R0.x1+.7,10.6,Z.south]],[[Z.westBack,C0,Z.northCol-ot],[Z.eastBack,ca,Z.northBack+3.4]],[[no.x0,ca,Z.northCol-ot],[no.x1,no.top,Z.northCol+2.6]],[[Z.westBack,0,Z.south],[Z.westCol+ot,N0,Z.northBack+.3]],[[Z.eastCol-ot,0,Z.south],[Z.eastBack,N0,Z.northBack+.3]],[[14+Ps[0],0,104+Ps[1]],[52+Ps[0],26,150+Ps[1]]]];function sM(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function $f(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=s*s-i*c;if(f<=0)return 0;let l=Math.sqrt(f),u=Math.max(0,(-s-l)/i),h=(-s+l)/i;return Math.max(0,h-u)}function g1(e){for(let[t,o]of Pg)if(sM(e,Da,t,o))return 0;return 1}function Ig(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function cM(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=Ig(21),c=(p,v,m,g,y,b,k)=>{let E=e.length/3;for(let[L,R]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...p),t.push(L,R),o.push(v,m,g),n.push(...y),r.push(...b),a.push(...k);i.push(E,E+1,E+2,E,E+2,E+3)},f=(p,v)=>{let m=1;for(let g of qa){if(g===v||!g.shadow)continue;let y=$f(p,Da,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=qa.map(p=>({...p,pts:null}));for(let p of l)for(let v=0;v<p.n;v++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(p.spindle){let D=b[1],Y=Math.sqrt(Math.max(.02,1-D*D))*(D>0?1-D*.55:1+D*.25),Le=Math.hypot(b[0],b[2])||1,He=Y*Math.min(1,Le*1.4);b=[b[0]/Le*He,D,b[2]/Le*He]}p.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let k=[p.c[0]+b[0]*p.r[0],p.c[1]+b[1]*p.r[1],p.c[2]+b[2]*p.r[2]],E,L;if(p.magnolia){let D=0;for(let He of zg)D=Math.max(D,$f(k,Da,He.c,He.r));E=Math.exp(-D*1.1);let Y=1;for(let He of qa)if(!He.magnolia&&He.shadow){let fe=$f(k,Da,He.c,He.r);fe>0&&(Y*=Math.exp(-fe*.9))}E*=g1(k)*Y;let Le=H6(k,z0.c);L=Hf([Le[0]/z0.r[0]+b[0]*.5,Le[1]/z0.r[1]+b[1]*.5,Le[2]/z0.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(Le[0]/z0.r[0],Le[1]/z0.r[1],Le[2]/z0.r[2])*.6+y*.4)}else{let D=$f(k,Da,p.c,p.r);E=Math.exp(-D*(p.spindle?2.2:1.25)),E*=g1(k)*f(k,qa[l.indexOf(p)]),L=Hf([b[0]/p.r[0],b[1]/p.r[1],b[2]/p.r[2]])}let R=Math.max(0,L[0]*Da[0]+L[1]*Da[1]+L[2]*Da[2]),W=.25+.75*Math.pow(y,1.5)*(.65+.35*(L[1]*.5+.5)),P=p.size[0]+(p.size[1]-p.size[0])*s(),te=.85+s()*.3,G=p.leaf.map(D=>D*te),ae=p.cell;p.cell===3&&s()<.35&&(ae=2),c(k,P,ae,s()*Math.PI*2,[E,W,.35+.65*R],G,p.bloom)}for(let[p,v]of Ng){let m=s()<.5;for(let g=0;g<3;g++){let y=[p+(s()-.5)*.7,.28+s()*.22,v+(s()-.5)*.5],b=g1(y)*f(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let u=i.length/6,h=Array.from({length:u},(p,v)=>v);for(let p=u-1;p>0;p--){let v=Math.floor(s()*(p+1));[h[p],h[v]]=[h[v],h[p]]}let d=[];for(let p of h)for(let v=0;v<6;v++)d.push(i[p*6+v]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:d}}var Je=e=>e.toFixed(4),ol=e=>`vec3(${Je(e[0])}, ${Je(e[1])}, ${Je(e[2])})`,Og=`
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
`,lM=Pg.map(([e,t])=>`if (hitBox(ro, SUN, ${ol(e)}, ${ol(t)})) return 0.0;`).join(`
	`),fM=qa.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${ol(e.c)}, ${ol(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),hM=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${Je(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${Je(C0)} && u > ${Je(o-ot)} && u < ${Je(o+n*r+ot)}) {
				float k = floor((u - ${Je(o)}) / ${Je(n)});
				float a = ${Je(o)} + k * ${Je(n)} + (k < 0.5 ? ${Je(a)} : 0.02);
				float b = ${Je(o)} + (k + 1.0) * ${Je(n)} - (k > ${Je(r-1.5)} ? ${Je(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Je(s)}) < 0.5 ? 0.0 : ${Je(Jc+.09)};
				bool hole = (q.y > sill && q.y < ${Je(lr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Je(lr)} && d * d + (q.y - ${Je(lr)}) * (q.y - ${Je(lr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Bf=Mi+.3,Uf=Mi+.3,nl=Df+.3,Eg=Lo.x1-Z.cx-Ei-.3,uM=Lo.z1-Z.cz-Ei-.3,dM=Z.cz-Lo.z0-Ei-.3,pM=Math.sqrt(nl*nl-Bf*Bf),vM=Math.sqrt(nl*nl-Uf*Uf),mM=[[Z.cx,Z.cz,.86,1.18],[Z.cx,Z.cz,1.25,.3],...y1.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${Je(e)}, ${Je(t)}), ${Je(o)}, ${Je(n)})) return 0.0;`).join(`
	`),gM=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Je(Z.cx)}, ${Je(Z.cz)}));
	float b1 = xz.y > ${Je(Z.cz)} ? ${Je(uM)} : ${Je(dM)};
	vec2 A = vec2(${Je(Bf)}, ${Je(pM)}), Bp = vec2(${Je(Bf)}, b1), C = vec2(${Je(Eg)}, b1);
	vec2 D = vec2(${Je(Eg)}, ${Je(Uf)}), E = vec2(${Je(vM)}, ${Je(Uf)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Je(nl)}));
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
	${hM("z",Z.northCol,Z.westCol,x1,jf,ot+tl,ot+tl,Tg,"ro.z > "+Je(Z.northCol-ot))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${mM}
	if (ro.y < ${Je(ki)} && ro.x > ${Je(Lo.x0)} && ro.x < ${Je(Lo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Je(ki)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Je(Zc*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Je(ki)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${fM}
	return tr;
}
`,xM=`
precision highp float;
${Sg}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Og}
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

	if (kind == ${je.SKY}.0) {
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

	if (kind == ${je.GROUND}.0) {
		bool yard = P.x > ${Je(Lo.x0)} && P.x < ${Je(Lo.x1)} && P.z < ${Je(Lo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Je(Lo.x0)}, ${Je(Lo.x1)} - P.x);
			float ez = min(P.z - ${Je(Lo.z0)}, ${Je(Lo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Je(Z.cx)}), dz = abs(P.z - ${Je(Z.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Je(Ei)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Je(Ei)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Je(Df)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Je(Z.cz)}, P.x - ${Je(Z.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Je(Df)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Je(Mi)} || dz < ${Je(Mi)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Je(Mi)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Je(Z.cx)}, ${Je(Z.cz)})));
		}
	} else if (kind == ${je.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${je.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${je.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${je.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Je(ki)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${je.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${je.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${je.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${je.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${je.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${je.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${je.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${je.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${je.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${je.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${je.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Je(Z.westCol)} || P.x > ${Je(Z.eastCol)} || P.z > ${Je(Z.northCol)}) && P.y < ${Je(C0+.05)} && P.z > ${Je(Z.south-.1)} && P.z < ${Je(Z.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Je(Z.northCol)} ? P.z - ${Je(Z.northCol)} : (P.x < ${Je(Z.westCol)} ? ${Je(Z.westCol)} - P.x : P.x - ${Je(Z.eastCol)});
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
${Sg}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Og}
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
}`;function _M(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}b1.exports=e=>{let t=iM(),o=cM(),n=_M(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>m1.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:xM,vert:yM,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>m1.gardenDetail}}),s=e({frag:wM,vert:bM,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*m1.leafShare/6)*6});return function(){i(),s()}};b1.exports.layout={G:Z,YARD:Lo,SUN:Da}});var Hg=ve(($S,qg)=>{"use strict";var MM=nr().GLSL,kM=li(),{C:Dg}=or(),fr=Dg.x1+.35,k1=Dg.zc,w1=[fr-7.3,2,k1],Gg=5.2*Math.PI/180,$g=2100,EM=725,SM=1288,AM=1450,TM=2576,i0=k1-3.2,Xf=k1+3.3,_1=fr+5,M1=fr+11.7,Os=3.9,rl=fr+22.7,Wf=40;function LM(){let e=[],t=[],o=[],n=[],r=kM.createBuilder(e,t,o,n),a=(l,u,h,d,p,v)=>{let m=[];for(let g=0;g<=p;g++){m.push([]);for(let y=0;y<=v;y++){let b=[0,1,2].map(k=>l[k]+u[k]*g/p+h[k]*y/v);m[g].push(r.vert(b,d,[0,0,0]))}}for(let g=0;g<p;g++)for(let y=0;y<v;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=Xf-i0,s=.7;a([fr-s,0,i0],[_1-fr+s,0,0],[0,0,i],[0,1,0],6,4);let c=M1-_1,f=Math.hypot(c,Os);return a([_1,0,i0],[c,Os,0],[0,0,i],[-Os/f,c/f,0],6,4),a([M1,Os,i0],[rl-M1,0,0],[0,0,i],[0,1,0],6,4),a([fr-s,0,i0],[rl-fr+s,0,0],[0,Wf,0],[0,0,1],12,12),a([fr-s,0,Xf],[rl-fr+s,0,0],[0,Wf,0],[0,0,-1],12,12),a([rl,0,i0],[0,Wf,0],[0,0,i],[-1,0,0],8,4),a([fr-s,Wf,i0],[rl-fr+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var kr=e=>e.toFixed(5),Vf=[[fr+3.4,3.7,i0+.01,1],[fr+8.6,4.1,Xf-.01,-1],[fr+14.8,Os+3.3,i0+.01,1],[fr+19.6,Os+3.6,Xf-.01,-1]],zM=`
precision highp float;
${MM}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Vf.length};
vec4 LAMP[NLAMP];

void main() {
	${Vf.map((e,t)=>`LAMP[${t}] = vec4(${kr(e[0])}, ${kr(e[1])}, ${kr(e[2])}, ${kr(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${kr(w1[0])}, ${kr(w1[1])}, ${kr(w1[2])});
	float c = ${kr(Math.cos(Gg))}, s = ${kr(Math.sin(Gg))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${kr(EM)} + ${kr($g)} * d.z / fw, ${kr(SM)} - ${kr($g)} * up / fw);
	vec2 uv = px / vec2(${kr(AM)}, ${kr(TM)});
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
}`;qg.exports=e=>{let t=LM(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:zM,vert:NM,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,f)=>{let[l,u,h]=s,d=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[p,v,m]of d){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+p[0]*c[0]+v[0]*y*c[0]+m[0]*b*c[0],u+p[1]*c[1]+v[1]*y*c[1]+m[1]*b*c[1],h+p[2]*c[2]+v[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...p),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of Vf){let c=s[3],f=s[2]+c*.42;a([s[0],s[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let u of[-1,1])a([s[0]+l*.11,s[1],f+u*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,f],[.15,.03,.15],0),a([s[0],s[1]+.27,f],[.05,.05,.05],0),a([s[0],s[1]-.19,f],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var Vg=ve((DS,Wg)=>{"use strict";var RM=nr().GLSL,{A:Kf,BENCH:S1,SHAFT:E1,TREE:al,oculusGLSL:CM}=ia(),PM=na(),Yf=al.sxz,Bg=al.sy,Ug=al.yaw;function IM(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let f=new Uint16Array(e,s,o*2);s+=o*4;let l=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let u=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:f,nrm:l,idx:u}}function OM(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(Ug),i=Math.sin(Ug);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*Yf,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*Bg,l=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*Yf;t[s*3]=Kf.cx+a*c+i*l,t[s*3+1]=S1.soil+.02+f,t[s*3+2]=Kf.zc-i*c+a*l;let u=e.nrm[s*3]/127/Yf,h=e.nrm[s*3+1]/127/Bg,d=e.nrm[s*3+2]/127/Yf,p=Math.hypot(u,h,d)||1;u/=p,h/=p,d/=p,o[s*3]=a*u+i*d,o[s*3+1]=h,o[s*3+2]=-i*u+a*d,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function jg(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var jn=e=>e.toFixed(4),Fs=al.crownC,Gs=al.crownR,FM=`
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

const vec3 SHAFT = vec3(${jn(E1[0])}, ${jn(E1[1])}, ${jn(E1[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${jn(Kf.cx)}, ${jn(Kf.zc)});
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
	vec3 cc = vec3(${jn(Fs[0])}, ${jn(Fs[1])}, ${jn(Fs[2])});
	vec3 cr = vec3(${jn(Gs[0])}, ${jn(Gs[1])}, ${jn(Gs[2])});
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
}`,I0=M0(),GM=`
precision highp float;
${RM}
uniform float time;
${I0.lanternGLSL(I0.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${I0.LANTERNS[I0.TREE_LANTERN[0]].x.toFixed(3)}, ${I0.LANTERNS[I0.TREE_LANTERN[0]].y.toFixed(3)}, ${I0.LANTERNS[I0.TREE_LANTERN[0]].z.toFixed(3)});
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
	vec3 rel = (v_pos - vec3(${jn(Fs[0])}, ${jn(Fs[1])}, ${jn(Fs[2])})) / vec3(${jn(Gs[0])}, ${jn(Gs[1])}, ${jn(Gs[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${jn(S1.soil)}, ${jn(S1.soil+.5)}, v_pos.y);

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
}`;Wg.exports=e=>{let t=null,o=jg(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=jg(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=OM(IM(a));t=e({vert:FM,frag:GM,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>PM.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var eh=ve((qS,Qg)=>{"use strict";var $s=S0(),$M="res/audio/go-tomorrow.mp3",DM="res/audio/go-tomorrow.json",Yg="gallery-sound",Qf=[$s.PIANO.x,1,$s.PIANO.z],qM=$s.R,Or=!0;try{localStorage.getItem(Yg)==="off"&&(Or=!1)}catch(e){}var gn=null,ar=null,il=null,sl=null,O0=null,s0=null,Si=!1,Zf=null,Xg=[],HM=(typeof performance!="undefined"?performance.now():0)/1e3;function BM(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let i=o.getChannelData(a),s=0;for(let c=0;c<t;c++){let f=c/e.sampleRate,l=.25+.6*Math.exp(-f*2.2);s+=(r()-s)*l,i[c]=s*Math.pow(1-c/t,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function UM(){if(gn)return;gn=new Audio,gn.src=$M,gn.loop=!0,gn.preload="auto",gn.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){gn.volume=.2;return}try{ar=new e;let t=ar.createMediaElementSource(gn);O0=ar.createBiquadFilter(),O0.type="lowpass",O0.frequency.value=1500,O0.Q.value=.4,il=ar.createGain(),il.gain.value=0,sl=ar.createGain(),sl.gain.value=0;let o=ar.createConvolver();o.buffer=BM(ar),s0=ar.createGain(),s0.gain.value=Or?1:0,t.connect(O0),O0.connect(il),il.connect(s0),O0.connect(o),o.connect(sl),sl.connect(s0),s0.connect(ar.destination)}catch(t){ar=null,gn.volume=.2}}function Kg(){if(Si||!Or)return;UM();let e=()=>gn.play().then(()=>{Si=!0}).catch(()=>{});ar&&ar.state==="suspended"?ar.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,Kg,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!gn||!Si||(document.hidden?gn.pause():Or&&gn.play().catch(()=>{}))}),fetch(DM).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(i=>i[2]).sort((i,s)=>i-s),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(i=>({t:i[0],w:i[1],x:Math.max(0,Math.min(1,(i[2]-r)/Math.max(a-r,.001)))}))};Zf={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var Jf={AT:Qf,listen(e){if(!ar||!Si)return;let t=e[0]-Qf[0],o=e[2]-Qf[2],n=Math.hypot(t,o,(e[1]-Qf[1])*.5),r=Math.hypot(e[0]-$s.C.x,e[2]-$s.C.z)<qM+.4||e[0]<-.2&&Math.abs(e[2]-$s.C.z)<4,a,i,s;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,i=.22+.16*f,s=16e3}else{let f=5.5/Math.max(n,5.5),l=e[0]>14.2&&e[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,i=.34*Math.pow(f,.95)*l,s=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=ar.currentTime;il.gain.setTargetAtTime(a,c,.35),sl.gain.setTargetAtTime(i,c,.35),O0.frequency.setTargetAtTime(s,c,.35)},time(){let e=Zf&&Zf.dur||158;return gn&&Si&&!gn.paused||gn&&Si?gn.currentTime%e:((performance.now()/1e3-HM)%e+e)%e},get cues(){return Zf},get on(){return Or},set(e){Or=!!e;try{localStorage.setItem(Yg,Or?"on":"off")}catch(t){}Or?(Kg(),gn&&Si&&gn.play().catch(()=>{}),s0&&s0.gain.setTargetAtTime(1,ar.currentTime,.2)):s0?s0.gain.setTargetAtTime(0,ar.currentTime,.15):gn&&gn.pause(),Xg.forEach(t=>t(Or))},toggle(){Jf.set(!Or)},onChange(e){Xg.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=Or?t:o,n.setAttribute("aria-label",Or?"Turn the music off":"Turn the music on"),n.title=Or?"Music on":"Music off",n.setAttribute("aria-pressed",Or?"true":"false")};return r(),Jf.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,i=>i.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Jf.toggle()}),n}};Qg.exports=Jf});var cx=ve((HS,N1)=>{"use strict";var L1=nr().GLSL,{A:Zg,BENCH:rx,oculusGLSL:ax}=ia(),Jg=na(),ix=S0(),ex=eh(),jM=1.74,WM=1.877,hr=jM/WM,Ti={x:Zg.cx-1.22,z:Zg.zc+.02,hipY:rx.seat+.115},qo=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Sa=e=>[-e[0],-e[1],-e[2],e[3]],G0=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},th=(e,t,o)=>qo(G0([0,0,1],o*Math.PI/180),qo(G0([0,1,0],t*Math.PI/180),G0([1,0,0],e*Math.PI/180))),z1=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},Ha=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],ll=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],F0=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],T1=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],nh=e=>Math.hypot(e[0],e[1],e[2]),cl=e=>{let t=nh(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},ah=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],VM=(e,t)=>{let o=[e[0],e[1],e[2]],n=F0(ah(o,t),2);return ll(ll(t,F0(n,e[3])),ah(o,n))},XM=(e,t)=>{let o=ah(e,t),n=1+T1(e,t);return n<1e-6?[0,0,1,0]:z1([o[0],o[1],o[2],n])};function Wr(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,f=a*a,l=n*r,u=n*a,h=r*a,d=i*n,p=i*r,v=i*a;return[(1-2*(c+f))*o[0],2*(l+v)*o[0],2*(u-p)*o[0],0,2*(l-v)*o[1],(1-2*(s+f))*o[1],2*(h+d)*o[1],0,2*(u+p)*o[2],2*(h-d)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function Pn(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function A1(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,f=e[6]/o,l=e[8]/n,u=e[9]/n,h=e[10]/n,d=r+c+h,p;if(d>0){let v=Math.sqrt(d+1)*2;p=[(f-u)/v,(l-i)/v,(a-s)/v,v/4]}else if(r>c&&r>h){let v=Math.sqrt(1+r-c-h)*2;p=[v/4,(s+a)/v,(l+i)/v,(f-u)/v]}else if(c>h){let v=Math.sqrt(1+c-r-h)*2;p=[(s+a)/v,v/4,(u+f)/v,(l-i)/v]}else{let v=Math.sqrt(1+h-r-c)*2;p=[(l+i)/v,(u+f)/v,v/4,(a-s)/v]}return z1(p)}var rh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{rh[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],rh[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],rh[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function Ai(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function tx(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*Ai(e,.14,.07)+57*Ai(e,.72,.12),n=5*Ai(e,.06,.04)-9*Ai(e,.42,.12)+17*Ai(e,.62,.05)-3*Ai(e,.85,.1),r=-26*Ai(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function YM(e){let t=(e%1+1)%1,o=tx(t),n=tx(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var ox=`
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
}`,ih=M0(),nx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${L1}
uniform float time;
${ix.roomGLSL()}
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
${ax()}
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
}`;function KM(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var sx={w:.13,h:.2},oh=e=>.011*(1-Math.pow(1-e,3));function QM(){let e=[],t=[],o=[],n=[],r=[],a=(v,m,g,y,b,k,E)=>{let L=e.length/3;[v,m,g,y].forEach((R,W)=>{e.push(...R),t.push(...b),o.push(...E[W]),n.push(k)}),r.push(L,L+1,L+2,L,L+2,L+3)},{w:i,h:s}=sx,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,u=i+.001,h=c+.001;a([0,l,-h],[u,l,-h],[u,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[u,l+.001,h],[u,l+.001,-h],[0,1,0],2,f),a([-u,l,-h],[0,l,-h],[0,l,h],[-u,l,h],[0,-1,0],2,f),a([-u,l+.001,-h],[-u,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let d=8;for(let v of[1,-1]){for(let g=0;g<d;g++){let y=g/d,b=(g+1)/d,k=(.002+y*(i-.002))*v,E=(.002+b*(i-.002))*v,L=oh(y),R=oh(b),W=v>0?y:1-y,P=v>0?b:1-b,te=1,G=-(R-L)/(E-k);a([k,L,-c],[E,R,-c],[E,R,c],[k,L,c],[G,te,0],3,[[W,1],[P,1],[P,0],[W,0]]),a([k,l+.001,c],[E,l+.001,c],[E,R,c],[k,L,c],[0,0,1],4,f),a([k,L,-c],[E,R,-c],[E,l+.001,-c],[k,l+.001,-c],[0,0,-1],4,f)}let m=i*v;a([m,l+.001,-c],[m,oh(1),-c],[m,oh(1),c],[m,l+.001,c],[v,0,0],4,f)}let p=10;for(let v=0;v<p;v++){let m=v/p,g=(v+1)/p,y=e.length/3;for(let[b,k]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,k),t.push(0,1,0),o.push(b,(k+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function ZM(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,f,l,u,h)=>{for(let d=0;d<u;d++){let p=i+(n()-.5)*c*2,v=s+(n()-.5)*f*2,m=20+n()*60,g=t.createRadialGradient(p,v,0,p,v,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),t.fillStyle=g,t.fillRect(p-m,v-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var JM=`
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
}`,ek=`
precision highp float;
${L1}
uniform float time;
${ih.lanternGLSL(ih.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${ax()}
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
}`;function tk(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],u=16;for(let h=0;h<l.length;h++){let[d,p,v,m]=l[h],g=m===2?.45:1;for(let y=0;y<=u;y++){let b=y/u*Math.PI*2;e.push(Math.cos(b)*d,p,Math.sin(b)*d*g);let k=Math.max(h-1,0),E=Math.min(h+1,l.length-1),L=l[E][0]-l[k][0],R=l[E][1]-l[k][1],W=Math.hypot(L,R)||1;t.push(Math.cos(b)*R/W,-L/W,Math.sin(b)*R/W/g),o.push(...v),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let d=0;d<u;d++){let p=h*(u+1)+d,v=p+u+1;r.push(p,v,p+1,p+1,v,v+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var ok=`
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
}`,nk=`
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
}`,rk=`
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
}`,ak=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;N1.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Ti.x,1.9,Ti.z],glow:0};Promise.all([fetch(t+"avatar.json").then(P=>P.json()),fetch(t+"avatar.bin").then(P=>P.arrayBuffer())]).then(([P,te])=>{o=f(P,te)}).catch(P=>console.error(P));let i=null;Promise.all([fetch(t+"motion.json").then(P=>P.ok?P.json():null),fetch(t+"motion.bin").then(P=>P.ok?P.arrayBuffer():null)]).then(([P,te])=>{if(!P||!te)return;let G={};for(let ae in P.clips){let D=P.clips[ae],Y=D.bones.length,Le=new Float32Array(te,D.mean,Y*4),He={};D.bones.forEach((fe,ie)=>{He[fe]=[Le[ie*4],Le[ie*4+1],Le[ie*4+2],Le[ie*4+3]]}),G[ae]=Object.assign({},D,{Q:new Int16Array(te,D.q,D.frames*Y*4),H:new Float32Array(te,D.hips,D.frames*3),meanQ:He})}i=G}).catch(()=>{});function s(P,te){let G=P.frames,ae=P.bones.length,D=(te%G+G)%G,Y=Math.floor(D)%G,Le=(Y+1)%G,He=D-Math.floor(D),fe={};for(let ft=0;ft<ae;ft++){let Nt=(Y*ae+ft)*4,Mt=(Le*ae+ft)*4,ro=P.Q[Nt],St=P.Q[Nt+1],qt=P.Q[Nt+2],ko=P.Q[Nt+3],Fn=P.Q[Mt],Xe=P.Q[Mt+1],ut=P.Q[Mt+2],At=P.Q[Mt+3];ro*Fn+St*Xe+qt*ut+ko*At<0&&(Fn=-Fn,Xe=-Xe,ut=-ut,At=-At),fe[P.bones[ft]]=z1([ro+(Fn-ro)*He,St+(Xe-St)*He,qt+(ut-qt)*He,ko+(At-ko)*He])}let ie=Y*3,Ae=Le*3;return{q:fe,hips:[P.H[ie]+(P.H[Ae]-P.H[ie])*He,P.H[ie+1]+(P.H[Ae+1]-P.H[ie+1])*He,P.H[ie+2]+(P.H[Ae+2]-P.H[ie+2])*He]}}let c=e.texture({data:[[[255,255,255,255]]]});function f(P,te){let G=(K,Re)=>new Float32Array(te,K,Re),ae=P.bones,D=ae.length,Y={};ae.forEach((K,Re)=>{Y[K.name]=Re});let Le=[];for(let K=0;K<D;K++)Le.push(Array.from(G(P.ibm+K*64,16)));let He=ae.map(K=>Wr(K.t,K.r,K.s)),fe=[];for(let K=0;K<D;K++){let Re=ae[K].parent;fe[K]=Re<0?He[K]:Pn(fe[Re],He[K])}let ie=fe.map(A1),Ae=P.meshes.map(K=>{let Re=G(K.pos,K.n*3),Oe=G(K.nrm,K.n*3),ze=G(K.uv,K.n*2),nt=new Uint8Array(te,K.jnt,K.n*4),bt=G(K.wgt,K.n*4),gt=new Uint16Array(te,K.idx,K.ni),ct={};for(let vt in K.morphs){let Co=K.morphs[vt];ct[vt]={idx:new Uint16Array(te,Co.idx,Co.n),d:G(Co.d,Co.n*3)}}let Rt=new Float32Array(K.n*3),pt=new Float32Array(K.n*3),Ht=new Float32Array(K.n*3),yt=e.buffer({data:Rt,usage:"dynamic"}),wt=e.buffer({data:pt,usage:"dynamic"}),Ut=/avaturn_hair/.test(K.name),lt=/EyeAO|Eyelash/.test(K.name),oo=/Body|Head/.test(K.name),_o=K.kind||0;return{m:K,pos:Re,nrm:Oe,uv:ze,jnt:nt,wgt:bt,idx:gt,morphs:ct,outP:Rt,outN:pt,work:Ht,pb:yt,nbuf:wt,tex:K.tex?KM(e,t+K.tex):c,kind:_o,alphaScale:/EyeAO/.test(K.name)?.25:1,blend:K.blend||Ut,alphaCut:Ut?.35:lt?.02:0,skin:oo?1:0}}),ft=e({vert:ox,frag:nx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!R?L.lamp:[0,0,0,0],court:()=>L||R?0:1,candle:()=>R?1:0},cull:{enable:!1}}),Nt=e({vert:ox,frag:nx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!R?L.lamp:[0,0,0,0],court:()=>L||R?0:1,candle:()=>R?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Mt=.3;for(let K of Ae)if(K.uvBuf=e.buffer(K.uv),/Body/.test(K.m.name)){let Re=[],Oe=[];for(let ze=0;ze<K.idx.length;ze+=3){let nt=K.idx[ze],bt=K.idx[ze+1],gt=K.idx[ze+2];(K.pos[nt*3+1]<Mt&&K.pos[bt*3+1]<Mt&&K.pos[gt*3+1]<Mt?Oe:Re).push(nt,bt,gt)}K.el=e.elements({data:new Uint16Array(Re),type:"uint16"}),Oe.length&&(K.sockEl=e.elements({data:new Uint16Array(Oe),type:"uint16"}))}else K.el=e.elements({data:K.idx,type:"uint16"});let ro=fe[Y.Hips],St=G0([1,0,0],-Math.PI/2),qt=Pn(Wr([Ti.x-ro[12]*hr,Ti.hipY-ro[14]*hr,Ti.z+ro[13]*hr],St,[1,1,1]),Wr([0,0,0],[0,0,0,1],[hr,hr,hr])),ko=new Array(D),Fn=-1,Xe=(K,Re,Oe)=>Pn(Wr([K,0,Re],G0([0,1,0],Oe),[1,1,1]),Wr([0,0,0],[0,0,0,1],[hr,hr,hr])),ut=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(K=>Y[K]),At=ut.map(K=>fe[K][13]*hr);function Zt(K){if(i&&i.walk)return uo(K);let Re=YM(K.phase),Oe={},ze=pt=>{for(let Ht in pt){let yt=pt[Ht],wt=th(yt[0],yt[1],yt[2]);Oe[Ht]=Oe[Ht]?qo(Oe[Ht],wt):wt}};ze(Re.swing),ze(Re.pose);let nt=Math.cos(K.heading),bt=-Math.sin(K.heading),gt=Xe(K.x+nt*Re.sway,K.z+bt*Re.sway,K.heading),ct=new Array(D);for(let pt=0;pt<D;pt++){let Ht=ae[pt],yt=He[pt],wt=Oe[Ht.name];if(wt){let Ut=ie[pt],lt=qo(Sa(Ut),qo(wt,Ut));yt=Wr(Ht.t,qo(Ht.r,lt),Ht.s)}ct[pt]=Ht.parent<0?Pn(gt,yt):Pn(ct[Ht.parent],yt)}let Rt=1/0;ut.forEach((pt,Ht)=>{Rt=Math.min(Rt,ct[pt][13]-At[Ht])});for(let pt=0;pt<D;pt++)ct[pt]=ct[pt].slice(),ct[pt][13]-=Rt,ko[pt]=Pn(ct[pt],Le[pt]);return{blink:0}}function uo(K){let Re=i.walk,Oe=s(Re,(K.phase+Re.phase0)*Re.frames),ze=Xe(K.x,K.z,K.heading),nt=new Array(D),bt=Y.Hips;for(let ct=0;ct<D;ct++){let Rt=ae[ct],pt=He[ct],Ht=Oe.q[Rt.name];if(Ht){let yt=ie[ct],wt=qo(Sa(yt),qo(Ht,yt)),Ut=ct===bt?[Rt.t[0]+Oe.hips[0],Rt.t[1]+Oe.hips[1],Rt.t[2]+Oe.hips[2]]:Rt.t;pt=Wr(Ut,qo(Rt.r,wt),Rt.s)}nt[ct]=Rt.parent<0?Pn(ze,pt):Pn(nt[Rt.parent],pt)}let gt=1/0;ut.forEach((ct,Rt)=>{gt=Math.min(gt,nt[ct][13]-At[Rt])});for(let ct=0;ct<D;ct++)nt[ct]=nt[ct].slice(),nt[ct][13]-=gt,ko[ct]=Pn(nt[ct],Le[ct]);return{blink:0}}function Tt(K,Re){let Oe=Math.sin(K*2*Math.PI/4.6),ze=Math.sin(K*.37)*.6+Math.sin(K*.83+1)*.4,nt={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Oe*.8,0,0],Spine2:[4+Oe*.6,0,0],Neck:[10,0,0],Head:[12+ze*2,ze*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},bt={};for(let yt in nt){let wt=nt[yt];bt[yt]=th(wt[0],wt[1],wt[2])}let gt=Xe(Re.x,Re.z,Re.heading),ct=new Array(D);for(let yt=0;yt<D;yt++){let wt=ae[yt],Ut=He[yt],lt=bt[wt.name];if(lt){let oo=ie[yt],_o=qo(Sa(oo),qo(lt,oo));Ut=Wr(wt.t,qo(wt.r,_o),wt.s)}ct[yt]=wt.parent<0?Pn(gt,Ut):Pn(ct[wt.parent],Ut)}let pt=ct[Y.Hips][13]-(Re.y+.1);for(let yt=0;yt<D;yt++)ct[yt]=ct[yt].slice(),ct[yt][13]-=pt,ko[yt]=Pn(ct[yt],Le[yt]);let Ht=K%4.1;return{blink:Ht<.16?Math.sin(Ht/.16*Math.PI):0}}let dt=K=>[fe[K][12],fe[K][13],fe[K][14]],ge=(K,Re)=>{let Oe=cl(K),ze=cl(Ha(Re,F0(Oe,T1(Re,Oe)))),nt=ah(Oe,ze);return A1([Oe[0],Oe[1],Oe[2],0,ze[0],ze[1],ze[2],0,nt[0],nt[1],nt[2],0,0,0,0,1])},et={};for(let K of["Left","Right"]){let Re=Y[K+"Arm"],Oe=Y[K+"ForeArm"],ze=Y[K+"Hand"],nt=Y[K+"HandMiddle1"];et[K]={a:Re,f:Oe,h:ze,upper:nh(Ha(dt(Oe),dt(Re)))*hr,fore:nh(Ha(dt(ze),dt(Oe)))*hr,dir0:cl(Ha(dt(Oe),dt(Re))),qf0:ge(Ha(dt(ze),dt(Oe)),[0,1,0]),qh0:ge(Ha(dt(nt),dt(ze)),[0,1,0])}}let Lt={};for(let K of["Left","Right"])Lt[et[K].a]={side:K,part:0},Lt[et[K].f]={side:K,part:1},Lt[et[K].h]={side:K,part:2};function st(K,Re,Oe){if(!K||!K.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let ze=0,nt=K.length-1,bt=-1;for(;ze<=nt;){let Co=ze+nt>>1;K[Co].t<=Re?(bt=Co,ze=Co+1):nt=Co-1}let gt=K[K.length-1],ct=K[0],Rt=bt>=0?K[bt]:{t:gt.t-Oe,x:gt.x,w:gt.w},pt=bt+1<K.length?K[bt+1]:{t:ct.t+Oe,x:ct.x,w:ct.w},Ht=Math.max(.05,pt.t-Rt.t),yt=Math.min(.14,Ht*.45),wt=Math.max(0,Math.min(1,(Re-Rt.t-yt)/Math.max(Ht-yt-.03,.02))),Ut=wt*wt*(3-2*wt),lt=Re-Rt.t,oo=(.55+.45*Rt.w)*Math.exp(-lt/.11),_o=pt.t-Re,vt=_o<.05?(.55+.45*pt.w)*(1-_o/.05):0;return{x:Rt.x+(pt.x-Rt.x)*Ut,lift:Math.sin(Math.PI*wt)*Math.min(.05,.012+Ht*.03)*(Ht>2.5?.4:1),press:Math.max(oo,vt),finger:vt>oo?((bt+1)*7+3)%4:(Math.max(bt,0)*7+3)%4,busy:Math.exp(-lt/.9)}}let We={lean:0,turn:0,nod:0,pedal:0,last:-1},mo=["Index","Middle","Ring","Pinky"];function _(K){let Re=ix.PLAY,Oe=ex.cues,ze=ex.time(),nt=Oe&&Oe.dur||158,bt={Left:st(Oe&&Oe.left,ze,nt),Right:st(Oe&&Oe.right,ze,nt)},gt=.35;if(Oe&&Oe.level&&Oe.level.length){let Kt=ze*8,so=Math.floor(Kt)%Oe.level.length,Sn=(so+1)%Oe.level.length;gt=Oe.level[so]+(Oe.level[Sn]-Oe.level[so])*(Kt-Math.floor(Kt))}let ct=We.last<0?0:Math.min(.1,Math.max(0,K-We.last));We.last=K;let Rt=Kt=>Math.min(1,ct*Kt);We.lean+=(gt-We.lean)*Rt(1.2),We.turn+=(bt.Right.busy-bt.Left.busy-We.turn)*Rt(1.5),We.nod+=(Math.max(bt.Right.press,bt.Left.press*.7)-We.nod)*Rt(6),We.pedal+=((bt.Left.busy>.35?1:.15)-We.pedal)*Rt(5);let pt=Math.sin(K*2*Math.PI/4.6),Ht=Math.sin(ze*.41)*.6+Math.sin(ze*.17+1)*.4,yt={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*We.pedal,0,0],Spine:[9+3.5*We.lean+Ht*1.6,We.turn*2.5,-We.turn*1.6],Spine1:[7+pt*.8+2.5*We.lean,We.turn*2.5,-We.turn*1.2],Spine2:[6+pt*.6+Ht*.8,We.turn*1.5,0],Neck:[13+3*We.lean,We.turn*3,0],Head:[15+We.nod*3.5+Ht*1.5,We.turn*5,Ht*1.5]};for(let Kt of["Left","Right"]){let so=Kt==="Left"?-1:1,Sn=bt[Kt];mo.forEach((B,he)=>{let Be=he===Sn.finger?Sn.press:Sn.press*.2;yt[Kt+"Hand"+B+"1"]=[0,0,so*(20+3*he+20*Be)],yt[Kt+"Hand"+B+"2"]=[0,0,so*(26+4*he-6*Be)],yt[Kt+"Hand"+B+"3"]=[0,0,so*14]}),yt[Kt+"HandThumb1"]=[0,so*-18,so*10]}let wt={};for(let Kt in yt){let so=yt[Kt];wt[Kt]=th(so[0],so[1],so[2])}let Ut=fe[Y.Hips][13]*hr,lt=Pn(Wr([Re.stoolX,Re.stoolTop+.1-Ut,Re.stoolFront+.15],G0([0,1,0],Re.heading),[1,1,1]),Wr([0,0,0],[0,0,0,1],[hr,hr,hr])),oo=(Re.keyX0+Re.keyX1)/2,_o={};for(let Kt of["Left","Right"]){let so=bt[Kt],Sn=Kt==="Left"?oo-.4+.33*so.x:oo+.07+.33*so.x;_o[Kt]=[Sn,Re.keyTop+.062+so.lift-so.press*.012,Re.keyFront+.075]}let vt=new Array(D),Co={},Zr=[0,1,0];for(let Kt=0;Kt<D;Kt++){let so=ae[Kt],Sn=He[Kt],B=wt[so.name],he=Lt[Kt];if(he){let Be=et[he.side];if(he.part===0){let tt=vt[so.parent],rt=Pn(tt,He[Kt]),Wo=[rt[12],rt[13],rt[14]],Vn=qo(A1(tt),Sa(ie[so.parent])),vr=Ha(_o[he.side],Wo),Vo=nh(vr),sr=(Be.upper+Be.fore)*.995;Vo>sr&&(vr=F0(vr,sr/Vo),Vo=sr);let Xo=F0(vr,1/Vo),ao=(Be.upper*Be.upper-Be.fore*Be.fore+Vo*Vo)/(2*Vo),$n=Math.sqrt(Math.max(0,Be.upper*Be.upper-ao*ao)),Fo=[he.side==="Left"?-.6:.6,-.8,.3];Fo=cl(Ha(Fo,F0(Xo,T1(Fo,Xo))));let An=ll(Wo,ll(F0(Xo,ao),F0(Fo,$n)));Be.T=ll(Wo,vr),Be.elbow=An;let Lr=cl(Ha(An,Wo)),zr=qo(XM(VM(Vn,Be.dir0),Lr),Vn);Co[Kt]=zr,B=qo(Sa(Vn),zr)}else if(he.part===1){let tt=qo(ge(Ha(Be.T,Be.elbow),Zr),Sa(Be.qf0));Co[Kt]=tt,B=qo(Sa(Co[so.parent]),tt)}else{let tt=bt[he.side],rt=qo(ge([he.side==="Left"?.12:-.12,-.2-.1*tt.press,-1],Zr),Sa(Be.qh0));Co[Kt]=rt,B=qo(Sa(Co[so.parent]),rt)}}if(B){let Be=ie[Kt],tt=qo(Sa(Be),qo(B,Be));Sn=Wr(so.t,qo(so.r,tt),so.s)}vt[Kt]=so.parent<0?Pn(lt,Sn):Pn(vt[so.parent],Sn)}for(let Kt=0;Kt<D;Kt++)ko[Kt]=Pn(vt[Kt],Le[Kt]);a.pianist={head:[vt[Y.Head][12],vt[Y.Head][13],vt[Y.Head][14]]};let Wa=K%4.3;return{blink:Wa<.16?Math.sin(Wa/.16*Math.PI):0}}function to(K,Re){if(R)return _(K);if(L)return Tt(K,L);if(Re)return Zt(Re);let Oe=Math.sin(K*2*Math.PI/4.2),ze=K%3.7,nt=ze<.16?Math.sin(ze/.16*Math.PI):0,bt=Math.sin(K*.45),gt=Math.sin(K*.31+.8),ct=Math.max(0,Math.sin(K*.085)-.75)*4,Rt={RightArm:[0,-22*ct,11*bt],RightForeArm:[0,8+26*ct,0],RightHand:[38*gt,0,6*Math.sin(K*.7)],LeftUpLeg:[0,0,3.2*Math.sin(K*.36)],RightFoot:[5*Math.sin(K*.52+.4),0,0],Head:[0,1.6*Math.sin(K*.21),0]};["Index","Middle","Ring","Pinky"].forEach((lt,oo)=>{let _o=Math.sin(K*1.1-oo*.5);Rt["RightHand"+lt+"1"]=[0,0,8+12*_o],Rt["RightHand"+lt+"2"]=[0,0,6+10*_o]});let pt={},Ht=(lt,oo)=>{for(let _o in lt){let vt=lt[_o],Co=th(vt[0]*oo,vt[1]*oo,vt[2]*oo);pt[_o]=pt[_o]?qo(pt[_o],Co):Co}};Ht(rh,1),Ht({Spine1:[Oe*.8,0,0],Spine2:[Oe*.6,0,0]},1),Ht(Rt,1);let yt=new Array(D),wt=new Array(D);for(let lt=0;lt<D;lt++){let oo=ae[lt],_o=He[lt],vt=pt[oo.name];if(vt){let Co=ie[lt],Zr=qo(Sa(Co),qo(vt,Co));_o=Wr(oo.t,qo(oo.r,Zr),oo.s)}yt[lt]=oo.parent<0?Pn(qt,_o):Pn(yt[oo.parent],_o),wt[lt]=null}for(let lt=0;lt<D;lt++)ko[lt]=Pn(yt[lt],Le[lt]);let Ut=lt=>[lt[12],lt[13],lt[14]];return a.headPos=Ut(yt[Y.Head]),a.hipsPos=Ut(yt[Y.Hips]),a.headM=yt[Y.Head],{blink:nt}}function Wt(K,Re){let{pos:Oe,nrm:ze,jnt:nt,wgt:bt,outP:gt,outN:ct,work:Rt,m:pt}=K,Ht=pt.n,yt=Oe;if(Re){Rt.set(Oe);for(let wt in K.morphs){let Ut=Re[wt]||0;if(Ut<=0)continue;let lt=K.morphs[wt];for(let oo=0;oo<lt.idx.length;oo++){let _o=lt.idx[oo]*3;Rt[_o]+=lt.d[oo*3]*Ut,Rt[_o+1]+=lt.d[oo*3+1]*Ut,Rt[_o+2]+=lt.d[oo*3+2]*Ut}}yt=Rt}for(let wt=0;wt<Ht;wt++){let Ut=yt[wt*3],lt=yt[wt*3+1],oo=yt[wt*3+2],_o=ze[wt*3],vt=ze[wt*3+1],Co=ze[wt*3+2],Zr=0,Wa=0,Kt=0,so=0,Sn=0,B=0;for(let Be=0;Be<4;Be++){let tt=bt[wt*4+Be];if(tt===0)continue;let rt=ko[nt[wt*4+Be]];Zr+=tt*(rt[0]*Ut+rt[4]*lt+rt[8]*oo+rt[12]),Wa+=tt*(rt[1]*Ut+rt[5]*lt+rt[9]*oo+rt[13]),Kt+=tt*(rt[2]*Ut+rt[6]*lt+rt[10]*oo+rt[14]),so+=tt*(rt[0]*_o+rt[4]*vt+rt[8]*Co),Sn+=tt*(rt[1]*_o+rt[5]*vt+rt[9]*Co),B+=tt*(rt[2]*_o+rt[6]*vt+rt[10]*Co)}gt[wt*3]=Zr,gt[wt*3+1]=Wa,gt[wt*3+2]=Kt;let he=Math.hypot(so,Sn,B)||1;ct[wt*3]=so/he,ct[wt*3+1]=Sn/he,ct[wt*3+2]=B/he}pt.grid&&!So&&!L&&!R&&go(K),K.sway&&h0(K),K.pb.subdata(gt),K.nbuf.subdata(ct)}function go(K){let[Re,Oe]=K.m.grid,ze=K.outP,nt=K.outN,bt=rx.seat+.012;for(let gt=1;gt<Re;gt++){let ct=Math.pow(1-gt/(Re-1),1.5);for(let Rt=0;Rt<Oe;Rt++){let pt=(gt*Oe+Rt)*3;ze[pt+1]>bt?ze[pt+1]=bt+(ze[pt+1]-bt)*Math.max(ct,.15):ze[pt+1]=bt}}for(let gt=0;gt<nt.length;gt+=3)nt[gt]=0,nt[gt+1]=1,nt[gt+2]=0}let So=!1,ln=(K,Re,Oe,ze,nt)=>({bone:Y[K],rate:Re,damp:Oe,drag:ze,most:nt,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),pr={head:ln("Head",15,.32,.012,.035),chest:ln("Spine2",9,.38,.03,.1),hips:ln("Hips",7,.42,.045,.16)},Gn=-1;function Ca(K){let Re=Gn<0?0:K-Gn;Gn=K;for(let Oe in pr){let ze=pr[Oe],nt=ko[ze.bone],bt=fe[ze.bone],gt=bt[12],ct=bt[13],Rt=bt[14],pt=[nt[0]*gt+nt[4]*ct+nt[8]*Rt+nt[12],nt[1]*gt+nt[5]*ct+nt[9]*Rt+nt[13],nt[2]*gt+nt[6]*ct+nt[10]*Rt+nt[14]];if(!ze.p||!(Re>0)||Re>.25||Math.hypot(pt[0]-ze.p[0],pt[1]-ze.p[1],pt[2]-ze.p[2])>.5){ze.p=pt,ze.x=[0,0,0],ze.v=[0,0,0],ze.vel=[0,0,0];continue}let Ht=[(pt[0]-ze.p[0])/Re,(pt[1]-ze.p[1])/Re,(pt[2]-ze.p[2])/Re],yt=Math.max(1,Math.ceil(Re/.016)),wt=Re/yt;for(let lt=0;lt<3;lt++){let oo=Math.max(-30,Math.min(30,(Ht[lt]-ze.vel[lt])/Re)),_o=-Ht[lt]*ze.drag;for(let vt=0;vt<yt;vt++)ze.v[lt]+=((_o-ze.x[lt])*ze.rate*ze.rate-2*ze.damp*ze.rate*ze.v[lt]-oo)*wt,ze.x[lt]+=ze.v[lt]*wt}let Ut=Math.hypot(ze.x[0],ze.x[1],ze.x[2]);if(Ut>ze.most){let lt=ze.most/Ut;ze.x=[ze.x[0]*lt,ze.x[1]*lt,ze.x[2]*lt]}ze.p=pt,ze.vel=Ht}}for(let K of Ae){let Re=K.m,Oe=Re.n,ze=null,nt=null;if(Re.kind===9){nt="head",ze=new Float32Array(Oe);for(let bt=0;bt<Oe;bt++){let gt=K.uv[bt*2]<-.5?0:K.uv[bt*2+1];ze[bt]=gt*gt}}else if(Re.name==="scarf"){nt="chest",ze=new Float32Array(Oe);for(let bt=0;bt<Oe;bt++)ze[bt]=l(1.52,1.12,K.pos[bt*3+1])}else if(Re.grid){nt="hips",ze=new Float32Array(Oe);let bt=Re.grid[0],gt=Re.grid[1];for(let ct=0;ct<Oe;ct++)ze[ct]=Math.pow(Math.floor(ct/gt)/(bt-1),1.6)}ze&&(K.sway=ze,K.spring=pr[nt],K.loose=nt)}function h0(K){if(!So&&!R&&!L)return;let Re=K.spring.x,Oe=K.sway,ze=K.outP;if(!(Math.abs(Re[0])+Math.abs(Re[1])+Math.abs(Re[2])<1e-5))for(let nt=0,bt=Oe.length;nt<bt;nt++){let gt=Oe[nt];gt>0&&(ze[nt*3]+=Re[0]*gt,ze[nt*3+1]+=Re[1]*gt,ze[nt*3+2]+=Re[2]*gt)}}function Bi(K,Re){So=!!Re;let Oe=to(K,Re);Ca(K);let ze={eyeBlinkLeft:Oe.blink,eyeBlinkRight:Oe.blink};for(let nt of Ae)Wt(nt,Object.keys(nt.morphs).length?ze:null);a.pose=Oe}return{parts:Ae,update:Bi,drawOpaque:ft,drawBlend:Nt,state:a}}function l(P,te,G){let ae=Math.min(1,Math.max(0,(G-P)/(te-P)));return ae*ae*(3-2*ae)}let u=QM(),h=ZM(),d=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,p=e({vert:JM,frag:ek,attributes:{position:u.pos,normal:u.nrm,uv:u.uv,kind:u.kind},elements:new Uint16Array(u.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:d},cull:{enable:!1}}),v=tk(),m=e({vert:ok,frag:nk,attributes:{position:v.pos,normal:v.nrm,color:v.col,mat:v.mat},elements:new Uint16Array(v.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),g=e({vert:rk,frag:ak,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(P){let te=P.headM,G=Ae=>{let ft=Math.hypot(...Ae)||1;return Ae.map(Nt=>Nt/ft)},ae=G([te[4],te[5],te[6]]),D=G([te[8],te[9],te[10]]),Y=ae,Le=D.map(Ae=>-Ae),He=[Le[1]*Y[2]-Le[2]*Y[1],Le[2]*Y[0]-Le[0]*Y[2],Le[0]*Y[1]-Le[1]*Y[0]],fe=P.headPos,ie=[0,1,2].map(Ae=>fe[Ae]+ae[Ae]*.06+D[Ae]*.185);return[He[0],He[1],He[2],0,Le[0],Le[1],Le[2],0,Y[0],Y[1],Y[2],0,ie[0],ie[1],ie[2],1]}let b=-1,k="",E=null,L=null,R=!1;function W(P){if(!o)return;let te=(Jg.motion,r()),G=E?[E.x,E.z,E.heading,E.phase].map(D=>D.toFixed(4)).join():"";(L||R||G!==k||!E&&Math.abs(te-b)>(Jg.isPhone?1/30:0))&&(o.update(te,E),b=te,k=G);for(let D of o.parts)D.blend||(o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale}),D.sockEl&&o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let ae=o.state;if(ae.headM&&!E&&!L&&!R){p({model:y(ae)});let D=ae.headPos,Y=Math.sin(te*1.3)*.02,Le=[D[0],D[1]+.62+Y,D[2]+.05],He=te*.6,fe=Wr(Le,qo(G0([0,1,0],He),G0([0,0,1],.18)),[1.2,1.2,1.2]),ie=.5+.5*Math.sin(te*2);m({model:fe,pulse:ie}),a.glowPos=Le,a.glow=.06+.03*ie,g({center:[Le[0],Le[1]-.12,Le[2]],size:.1,pulse:ie})}for(let D of o.parts)D.blend&&o.drawBlend({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale})}return W.state=a,W.place=Ti,W.setWalk=P=>{E=P||null,E&&(a.glow=0)},W.setSeat=P=>{L=P||null,a.glow=L?0:a.glow,b=-1},W.setPiano=P=>{P=!!P,P!==R&&(R=P,R&&(a.glow=0),b=-1)},W};N1.exports.PLACE=Ti});var R1=ve((BS,lx)=>{"use strict";lx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var P1=ve((US,vx)=>{"use strict";var dx=na(),fx=zc(),$0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function C1(){return dx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var ik=`
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
`,hx=!1;function px(){if(hx)return;hx=!0;let e=document.createElement("style");e.textContent=ik,document.head.appendChild(e)}var sk='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function ck(e){return!e||!e.visit||!C1()?"":(px(),`<button type="button" class="visit-btn" data-visit="${$0(e.slug||"")}" aria-label="Visit what remained: watch ${$0(e.title)} come to life">${sk}<span>Visit what remained</span></button>`)}function lk(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var fl=null;function fk(e){if(fl||!e||!e.visit)return;px();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(dx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${$0(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${$0(e.title)}, ${$0(fx(e))}" src="${$0(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${$0(e.title)}</span>
			<span class="visit-meta">${$0(fx(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=lk(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),v()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),d()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let u=m=>m.stopImmediatePropagation();window.addEventListener("keyup",u,!0);let h=!1;function d(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function p(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>d()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&d()}),r.addEventListener("ended",d),r.addEventListener("error",d);function v(){if(fl){fl=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",u,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",v),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}d()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&v(),g.dataset.act==="again"&&(s.forEach(clearTimeout),p()))}),r.src=e.visit.video,fl={close:v},requestAnimationFrame(()=>{n.classList.add("on"),c(p,1300)})}var ux={};function hk(e){if(!e||!e.visit||ux[e.visit.video]||!C1())return;ux[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}vx.exports={available:C1,button:ck,open:fk,warm:hk,get active(){return!!fl}}});var xx=ve((jS,gx)=>{"use strict";var uk=na(),Us=[0,0],Ds=[0,0],c0=null,O1=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(Us[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),Us[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),O1=performance.now())},{passive:!0});let e=()=>{O1=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(c0||(c0=[t.gamma,t.beta]),c0[0]+=(t.gamma-c0[0])*.01,c0[1]+=(t.beta-c0[1])*.01,Us[0]=Math.max(-1,Math.min(1,(t.gamma-c0[0])/14)),Us[1]=Math.max(-1,Math.min(1,(t.beta-c0[1])/14)))},{passive:!0})}var mx=0,qs=null,sh=null,Ba=[0,0,0],I1=0,Hs=null,Bs=0,Li={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},dk={apply(e,t){let o=Math.min(.1,Math.max(0,t-mx));mx=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let f=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],l=!qs;if(qs&&o>0){let b=[n[0]-qs[0],n[1]-qs[1],n[2]-qs[2]],k=Math.hypot(b[0],b[1],b[2]);if(k>2.5)l=!0;else{let L=Math.min(1,o*5);for(let R=0;R<3;R++)Ba[R]+=(b[R]/o-Ba[R])*L}let E=Math.hypot(r[0]-sh[0],r[1]-sh[1],r[2]-sh[2]);Bs=k/o<.12&&E/o<.2?Bs+o:0}l&&(Ba[0]=Ba[1]=Ba[2]=0,Bs=0),qs=n.slice(),sh=r.slice(),I1=Math.hypot(Ba[0],Ba[1],Ba[2]);let u=Math.min(1,o*2.6);Ds[0]+=(Us[0]-Ds[0])*u,Ds[1]+=(Us[1]-Ds[1])*u;let h=Math.max(.03,Math.min(.32,i*.05)),d=(uk.isPhone&&!c0?1.5:1)*Math.min(1,Bs/2.5),p=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*d,v=Math.sin(t*.097+.6)*h*.16*d,m=Ds[0]*h+p,g=-Ds[1]*h*.45+v;for(let b=0;b<3;b++)Li.eye[b]=n[b]+s[b]*m+f[b]*g,Li.target[b]=r[b]+(s[b]*m+f[b]*g)*.12;n[1]>.05&&(Li.eye[1]=Math.max(.05,Li.eye[1]));let y=Ba[0]*s[0]+Ba[2]*s[2];return Li.fov=e.fov+Math.min(3.5,I1*.55),Li.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),Li},pull(e,t){(Hs===null||!(Math.abs(e.focus-Hs)<40))&&(Hs=e.focus);let o=1/60;Hs+=(e.focus-Hs)*Math.min(1,o*3.2),e.focus=Hs,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,Bs/3))},get speed(){return I1},get resting(){return Bs>2&&performance.now()-O1>2e3}};gx.exports=dk});var F1=ve((WS,yx)=>{yx.exports=1e-6});var G1=ve((VS,bx)=>{bx.exports=pk;function pk(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var _x=ve((XS,wx)=>{wx.exports=vk;function vk(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var $1=ve((YS,Mx)=>{Mx.exports=mk;function mk(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var D1=ve((KS,kx)=>{kx.exports=gk;function gk(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var q1=ve((QS,Ex)=>{Ex.exports=xk;function xk(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Lx=ve((ZS,Tx)=>{Tx.exports=bk;var Sx=$1(),Ax=D1(),yk=q1();function bk(e,t){var o=Sx(e[0],e[1],e[2]),n=Sx(t[0],t[1],t[2]);Ax(o,o),Ax(n,n);var r=yk(o,n);return r>1?0:Math.acos(r)}});var Nx=ve((JS,zx)=>{zx.exports=wk;function wk(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Cx=ve((eA,Rx)=>{Rx.exports=_k;function _k(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var Ix=ve((tA,Px)=>{Px.exports=Mk;var H1=F1();function Mk(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=H1*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=H1*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=H1*Math.max(1,Math.abs(r),Math.abs(s))}});var Fx=ve((oA,Ox)=>{Ox.exports=kk;function kk(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var $x=ve((nA,Gx)=>{Gx.exports=Ek;function Ek(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var B1=ve((rA,Dx)=>{Dx.exports=Sk;function Sk(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var Hx=ve((aA,qx)=>{qx.exports=B1()});var U1=ve((iA,Bx)=>{Bx.exports=Ak;function Ak(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var jx=ve((sA,Ux)=>{Ux.exports=U1()});var j1=ve((cA,Wx)=>{Wx.exports=Tk;function Tk(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var Xx=ve((lA,Vx)=>{Vx.exports=j1()});var Kx=ve((fA,Yx)=>{Yx.exports=Lk;function Lk(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var Zx=ve((hA,Qx)=>{Qx.exports=zk;function zk(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var e3=ve((uA,Jx)=>{Jx.exports=Nk;function Nk(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var o3=ve((dA,t3)=>{t3.exports=Rk;function Rk(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var r3=ve((pA,n3)=>{n3.exports=Ck;function Ck(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var i3=ve((vA,a3)=>{a3.exports=Pk;function Pk(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var c3=ve((mA,s3)=>{s3.exports=Ik;function Ik(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var W1=ve((gA,l3)=>{l3.exports=Ok;function Ok(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var h3=ve((xA,f3)=>{f3.exports=W1()});var V1=ve((yA,u3)=>{u3.exports=Fk;function Fk(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var p3=ve((bA,d3)=>{d3.exports=V1()});var X1=ve((wA,v3)=>{v3.exports=Gk;function Gk(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var g3=ve((_A,m3)=>{m3.exports=X1()});var Y1=ve((MA,x3)=>{x3.exports=$k;function $k(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var b3=ve((kA,y3)=>{y3.exports=Y1()});var _3=ve((EA,w3)=>{w3.exports=Dk;function Dk(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var k3=ve((SA,M3)=>{M3.exports=qk;function qk(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var S3=ve((AA,E3)=>{E3.exports=Hk;function Hk(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var T3=ve((TA,A3)=>{A3.exports=Bk;function Bk(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var z3=ve((LA,L3)=>{L3.exports=Uk;function Uk(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var R3=ve((zA,N3)=>{N3.exports=jk;function jk(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var P3=ve((NA,C3)=>{C3.exports=Wk;function Wk(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var O3=ve((RA,I3)=>{I3.exports=Vk;function Vk(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],f=o[3],l=f*n+s*a-c*r,u=f*r+c*n-i*a,h=f*a+i*r-s*n,d=-i*n-s*r-c*a;return e[0]=l*f+d*-i+u*-c-h*-s,e[1]=u*f+d*-s+h*-i-l*-c,e[2]=h*f+d*-c+l*-s-u*-i,e}});var G3=ve((CA,F3)=>{F3.exports=Xk;function Xk(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=r+i*f-s*c,e[2]=a+i*c+s*f,e}});var D3=ve((PA,$3)=>{$3.exports=Yk;function Yk(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var H3=ve((IA,q3)=>{q3.exports=Kk;function Kk(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var U3=ve((OA,B3)=>{B3.exports=Qk;var D0=G1()();function Qk(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)D0[0]=e[i],D0[1]=e[i+1],D0[2]=e[i+2],r(D0,D0,a),e[i]=D0[0],e[i+1]=D0[1],e[i+2]=D0[2];return e}});var W3=ve((FA,j3)=>{j3.exports={EPSILON:F1(),create:G1(),clone:_x(),angle:Lx(),fromValues:$1(),copy:Nx(),set:Cx(),equals:Ix(),exactEquals:Fx(),add:$x(),subtract:B1(),sub:Hx(),multiply:U1(),mul:jx(),divide:j1(),div:Xx(),min:Kx(),max:Zx(),floor:e3(),ceil:o3(),round:r3(),scale:i3(),scaleAndAdd:c3(),distance:W1(),dist:h3(),squaredDistance:V1(),sqrDist:p3(),length:X1(),len:g3(),squaredLength:Y1(),sqrLen:b3(),negate:_3(),inverse:k3(),normalize:D1(),dot:q1(),cross:S3(),lerp:T3(),random:z3(),transformMat4:R3(),transformMat3:P3(),transformQuat:O3(),rotateX:G3(),rotateY:D3(),rotateZ:H3(),forEach:U3()}});var Y3=ve((GA,X3)=>{"use strict";function V3(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}X3.exports=function(t){let o=t.ownerDocument||document,n=V3(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let u=l.call(t);u&&u.catch&&u.catch(()=>{})}catch(u){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=V3(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var ey=ve((qA,J3)=>{"use strict";var zi=Ls(),Ni=W3(),Zk=Y3(),$A=Math.PI/4,DA=Math.PI/6,K3=2,Jk=1,e8=2.4,t8=2.4,o8=1e3,n8=5,r8=7,K1=or().C,hl=[[7,1.6],[7,K1.zc],[K1.x1-2.95,K1.zc]],q0=hl.slice(1).map((e,t)=>{let o=hl[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Q1=q0.reduce((e,t)=>e+t.len,0);function Q3(e){let t=Math.max(0,Math.min(Q1,e));for(let n of q0){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=hl[hl.length-1];return[o[0],o[1]]}function a8(e){let t=0;for(let n=0;n<q0.length;n++){let r=q0[n],a=t+r.len;if(e<a-1e-4||n===q0.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?q0[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=q0[q0.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var i8=Math.PI/4,s8=7,c8=140,l8=70,Z3=(e,t,o)=>(1-e)*t+e*o,f8=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;J3.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[r8,K3,hl[0][1]],c=0,f=1,l=0,u=[.707,0,.707],h=[0,1,0],d=[0,0,0],p=.5,v=zi.identity([]),m=zi.identity([]),g=!1,y=[0,0,0],b=[0,0,0],k=1,E=!1;let L=Xe=>{n[1]+=Xe*i8},R=(Xe,ut,At)=>{if(Xe=Math.max(Math.min(Xe,100),-100),ut=Math.max(Math.min(ut,100),-100),n[0]=0,E){a=0;return}for(a+=Xe;a>=At;)L(1),a-=At;for(;a<=-At;)L(-1),a+=At};Zk(document.body).on("attain",Xe=>{Xe.on("data",ut=>{R(ut.dx,ut.dy,c8)})});let P=null,te=null,G=0,ae={x:0,y:0},D=58,Y=document.createElement("div");Y.id="museum-mobile-controls",Y.innerHTML=`

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
	`,document.body.appendChild(Y);let Le=Y.querySelector("#museum-joystick"),He=Y.querySelector("#museum-joystick-knob"),fe=()=>{He.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},ie=Xe=>{let ut=Xe.clientX-ae.x,At=Xe.clientY-ae.y,Zt=Math.hypot(ut,At);if(Zt>D&&(ut=ut/Zt*D,At=At/Zt*D),He.style.transform=`translate(
				calc(-50% + ${ut}px),
				calc(-50% + ${At}px)
			)`,Zt<10){i[0]=0,i[2]=0;return}let Tt=ut/D,dt=At/D;i[0]=0,i[2]=Math.abs(dt)>.15?dt:0},Ae=(Xe,ut)=>{for(let At=0;At<Xe.length;At++)if(Xe[At].identifier===ut)return Xe[At];return null},ft=Xe=>!!(Xe&&Xe.closest&&Xe.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Nt=Xe=>{if(!ft(Xe.target)&&(Xe.cancelable&&Xe.preventDefault(),!E))for(let ut=0;ut<Xe.changedTouches.length;ut++){let At=Xe.changedTouches[ut];if(P===null&&At.clientX<window.innerWidth*.48){P=At.identifier;let Zt=Le.getBoundingClientRect();ae.x=Zt.left+Zt.width/2,ae.y=Zt.top+Zt.height/2,ie(At)}else te===null&&At.clientX>=window.innerWidth*.48&&(te=At.identifier,G=At.clientX,a=0)}},Mt=Xe=>{if(ft(Xe.target)||(Xe.cancelable&&Xe.preventDefault(),E))return;let ut=P===null?null:Ae(Xe.touches,P);ut&&ie(ut);let At=te===null?null:Ae(Xe.touches,te);if(At){let Zt=At.clientX-G;G=At.clientX,R(Zt,0,l8)}},ro=Xe=>{if(!ft(Xe.target)){Xe.cancelable&&Xe.preventDefault();for(let ut=0;ut<Xe.changedTouches.length;ut++){let At=Xe.changedTouches[ut];At.identifier===P&&(P=null,fe()),At.identifier===te&&(te=null)}}};document.addEventListener("touchstart",Nt,{passive:!1}),document.addEventListener("touchmove",Mt,{passive:!1}),document.addEventListener("touchend",ro,{passive:!1}),document.addEventListener("touchcancel",ro,{passive:!1});let St=document.createElement("style");St.textContent=`

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
	`,document.head.appendChild(St);var qt={};let ko=Xe=>{if(Xe.defaultPrevented||Xe.ctrlKey||Xe.altKey||Xe.metaKey)return;let ut=Xe.type==="keydown";qt[Xe.code]=ut,ut&&!Xe.repeat&&!E&&((Xe.code==="KeyA"||Xe.code==="ArrowLeft")&&L(-1),(Xe.code==="KeyD"||Xe.code==="ArrowRight")&&L(1)),g=!1;let At=qt.KeyW||qt.ArrowUp?1:0;i=[0,0,(qt.KeyS||qt.ArrowDown?1:0)-At],Xe.preventDefault()};window.addEventListener("keydown",ko),window.addEventListener("keyup",ko);var Fn=0;return{pos:s,fmouse:r,forward:u,up:h,setPaused:Xe=>{E=!!Xe,E&&(i[0]=0,i[2]=0,fe())},place:(Xe,ut)=>{c=Math.max(0,Math.min(Q1,Xe));let At=Q3(c);s[0]=At[0],s[2]=At[1],n[1]=ut,r[1]=ut,a=0,f=1},view:()=>v,proj:()=>(zi.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Xe})=>{let ut=Xe-Fn;Fn=Xe;let At=[0,0,0],Zt=[];Ni.set(u,Math.sin(r[1]),0,-Math.cos(r[1])),Ni.set(h,0,1,0);let uo=g?t8:e8,Tt=Math.sin(n[1]),dt=-Math.cos(n[1]),ge=a8(c),et=Tt*ge.ahead[0]+dt*ge.ahead[1],Lt=Tt*ge.back[0]+dt*ge.back[1],st=f;Math.max(et,Lt)>.3&&(st=et>=Lt?1:-1);let We=E?0:-i[2]*uo;l+=(We-l)*(1-Math.exp(-Math.min(ut,.1)*5.5)),We===0&&Math.abs(l)<.01&&(l=0);let mo=l*st*Math.min(ut,.1);E&&(i[0]=0,i[2]=0,mo=0,l=0),mo!==0&&(f=Math.sign(mo)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(Q1,c+mo));let _=Q3(c);Ni.set(d,_[0]-s[0],0,_[1]-s[2]);let to=Ni.len(d);to===0&&p!==.25&&(p=(Math.abs((p+.5)%1-.5)-.25)*.8+.25,(p+.01)%.25<.02&&(p=.25));let Wt=p;if(p+=to/(g?n8:o8),s[1]=K3,Ni.add(s,s,d),k<1){k+=ut/Jk,k=Math.min(k,1);let go=f8(k);Ni.set(s,Z3(go,y[0],b[0]),s[1],Z3(go,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(ut,.1)*s8),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),zi.identity(v),zi.rotateX(v,v,0),zi.rotateY(v,v,r[1]),zi.translate(v,v,Ni.scale(At,s,-1))}}}});var oy=ve((HA,ty)=>{"use strict";var{skylightGLSL:h8,Z_START:u8,Z_END:d8,GLASS_Y:p8}=gs(),{oculusGLSL:v8,A:Ri}=ia(),{windowLightGLSL:m8,C:ch}=or(),{doorLightGLSL:g8}=b0(),lh=nr(),fh=Of(),la=e=>e.toFixed(4),Z1=.1,J1=700,js={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function x8(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,k=o*f-a*i,E=n*c-r*s,L=n*f-a*s,R=r*f-a*c,W=l*v-u*p,P=l*m-h*p,te=l*g-d*p,G=u*m-h*v,ae=u*g-d*v,D=h*g-d*m,Y=y*D-b*ae+k*G+E*te-L*P+R*W;return Y?(Y=1/Y,e[0]=(s*D-c*ae+f*G)*Y,e[1]=(r*ae-n*D-a*G)*Y,e[2]=(v*R-m*L+g*E)*Y,e[3]=(h*L-u*R-d*E)*Y,e[4]=(c*te-i*D-f*P)*Y,e[5]=(o*D-r*te+a*P)*Y,e[6]=(m*k-p*R-g*b)*Y,e[7]=(l*R-h*k+d*b)*Y,e[8]=(i*ae-s*te+f*W)*Y,e[9]=(n*te-o*ae-a*W)*Y,e[10]=(p*L-v*k+g*y)*Y,e[11]=(u*k-l*L-d*y)*Y,e[12]=(s*P-i*G-c*W)*Y,e[13]=(o*G-n*P+r*W)*Y,e[14]=(v*b-p*E-m*y)*Y,e[15]=(l*E-u*b+h*y)*Y,e):null}function y8(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var b8=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;ty.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>t.post>=2?2:4,i=fe=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},fe||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=e.framebuffer({color:c,depth:f||!0}),u=[s(),s()],h=[s(),s()],d=[s(),s()],p=[s(),s()],v=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},k=(fe,ie,Ae)=>e(Object.assign({vert:b8,frag:fe,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:ie,framebuffer:e.prop("out")},Ae||{})),E=[2.6,0,u8-3.2,12.6,p8,d8+.4],L=[Ri.x0-.2,0,Ri.z0,Ri.x1,Ri.domeTop,Ri.z1],R=[ch.x0,0,ch.z0,ch.x1,7.6,ch.z1],W=[.35,0,.35,13.65,7.6,9],P=fe=>`vec3(${la(fe[0])}, ${la(fe[1])}, ${la(fe[2])}), vec3(${la(fe[3])}, ${la(fe[4])}, ${la(fe[5])})`,te=k(`
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
			vec2 t = hitBox(eye, rd, ${P(E)});
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
			vec2 t = hitBox(eye, rd, ${P(L)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${la(Ri.dome.base)} && p.x > ${la(Ri.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${P(R)});
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
			vec2 t = hitBox(eye, rd, ${P(W)});
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
	}`,{depthTex:()=>f,invVP:()=>v,eye:()=>g,time:e.context("time"),night:()=>lh.night,strength:()=>G}),G=[0,0,0,0];function ae(){let fe=js.shafts*y.shafts,ie=lh.night;return G[0]=fh.box(E)?.06*fe*(1+.9*ie):0,G[1]=fh.box(L,!1,"court")?.1*fe*(1+.9*ie):0,G[2]=fh.box(R)?.07*fe*(1+.4*ie):0,G[3]=fh.box(W)?.04*fe*(1-.75*ie):0,G[0]+G[1]+G[2]+G[3]>5e-4}let D=k(`
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
	}`,{src:e.prop("src"),dir:(fe,ie)=>[ie.dir[0]/ie.size[0],ie.dir[1]/ie.size[1]]}),Y=k(`
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
	}`,{src:e.prop("src"),texel:(fe,ie)=>[.5/ie.size[0],.5/ie.size[1]],threshold:e.prop("threshold")}),Le=k(`
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
		return 2.0 * ${la(Z1)} * ${la(J1)} / (${la(J1+Z1)} - z * ${la(J1-Z1)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>u[0],bloomA:()=>h[0],bloomB:()=>d[0],shafts:()=>p[0],res:()=>[l.width,l.height],time:e.context("time"),exposure:()=>js.exposure*y.exposure,vignette:()=>Math.min(1,js.vignette+y.vignette+.22*lh.night),night:()=>lh.night,grain:()=>js.grain,bloomK:()=>js.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>t.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),He=e({framebuffer:()=>l});return{shot:y,look:js,hasDepth:n,capture(fe,ie,Ae){let ft=Math.max(.4,Math.min(1,t.scale||1)),Nt=Math.max(2,Math.round(fe.drawingBufferWidth*ft/2)*2),Mt=Math.max(2,Math.round(fe.drawingBufferHeight*ft/2)*2);(l.width!==Nt||l.height!==Mt)&&l.resize(Nt,Mt);let ro=Math.max(1,Math.ceil(Nt/2)),St=Math.max(1,Math.ceil(Mt/2));u.forEach(qt=>qt.resize(ro,St)),h.forEach(qt=>qt.resize(Math.max(1,Math.ceil(Nt/4)),Math.max(1,Math.ceil(Mt/4)))),d.forEach(qt=>qt.resize(Math.max(1,Math.ceil(Nt/8)),Math.max(1,Math.ceil(Mt/8)))),p.forEach(qt=>qt.resize(Math.max(1,Math.ceil(Nt/a())),Math.max(1,Math.ceil(Mt/a())))),y8(m,ie.proj,ie.view),x8(v,m),g[0]=ie.eye[0],g[1]=ie.eye[1],g[2]=ie.eye[2],He(()=>{e.clear({color:[0,0,0,1],depth:1}),Ae()})},present(){let fe=ie=>[ie.width,ie.height];n&&t.post>=1&&ae()?(te({out:p[0]}),D({out:p[1],src:p[0],dir:[1,0],size:fe(p[0])}),D({out:p[0],src:p[1],dir:[0,1],size:fe(p[0])})):e.clear({color:[0,0,0,1],framebuffer:p[0]}),Y({out:u[0],src:c,size:[l.width,l.height],threshold:0}),D({out:u[1],src:u[0],dir:[1,0],size:fe(u[0])}),D({out:u[0],src:u[1],dir:[0,1],size:fe(u[0])}),Y({out:h[0],src:u[0],size:fe(u[0]),threshold:.42}),D({out:h[1],src:h[0],dir:[1,0],size:fe(h[0])}),D({out:h[0],src:h[1],dir:[0,1],size:fe(h[0])}),Y({out:d[0],src:h[0],size:fe(h[0]),threshold:0}),D({out:d[1],src:d[0],dir:[1.5,0],size:fe(d[0])}),D({out:d[0],src:d[1],dir:[0,1.5],size:fe(d[0])}),Le({out:null})}}}});var sy=ve((BA,iy)=>{"use strict";var ny=nr().GLSL,w8=li(),ed=b0(),{C:_8,FAR_DOOR:M8}=or(),k8=100*Math.PI/180,ry=e=>[M8.x-e[2],e[1],_8.zc-7+e[0]],ay=e=>[-e[2],e[1],e[0]];function E8(e){let t=[],o=[],n=[],r=[],a=w8.createBuilder(t,o,n,r);ed.addFrames(a,e);let i=ed.glassPanes(e),s=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:s(t),normal:s(o),elements:n,glass:i}}iy.exports=e=>{let t=ed.DOOR,o=["left","right"].map(l=>{let u=E8(l),h=u.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:u.position.map(d=>d.slice()),srcN:u.normal.map(d=>d.slice()),srcG:u.glass.map(d=>d.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(u.elements),type:"uint32"}),glassCount:u.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(u.glass.length*3),outGN:new Float32Array(u.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let u of o){let h=u.sign*l,d=Math.cos(h),p=Math.sin(h),v=y=>{let b=y[0]-u.hinge,k=y[2];return[u.hinge+b*d+k*p,y[1],-b*p+k*d]},m=y=>[y[0]*d+y[2]*p,y[1],-y[0]*p+y[2]*d];u.src.forEach((y,b)=>{let k=ry(v(y));u.outP.set(k,b*3),u.outN.set(ay(m(u.srcN[b])),b*3)});let g=ay(m([0,0,1]));u.srcG.forEach((y,b)=>{u.outG.set(ry(v(y)),b*3),u.outGN.set(g,b*3)}),u.pos.subdata(u.outP),u.nrm.subdata(u.outN),u.gpos.subdata(u.outG),u.gnrm.subdata(u.outGN)}}}r(0);let a=`
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
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*k8);for(let l of o)i({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var ly=ve((UA,cy)=>{"use strict";var S8=nr().GLSL,{skylightGLSL:A8}=gs(),{oculusGLSL:T8}=ia(),{windowLightGLSL:L8}=or(),Aa=.22;function z8(){let e=[],t=[],o=[],n=[],i=(l,u)=>{let h=Aa*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(u>0?1.06:.94),d=l*Aa-Aa*.12,p=u*h,v=Math.abs(u)*h*.42-.14*l*l*Aa;v+=Math.sin(l*17+(u>0?0:2.1))*.012*Aa*u*u;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=v*g-p*y,k=v*y+p*g;return[d,b,k+.05*Aa*l*l]},s=(l,u)=>{let d=i(Math.min(1,l+.01),u),p=i(Math.max(0,l-.01),u),v=i(l,Math.min(1,u+.01)),m=i(l,Math.max(-1,u-.01)),g=[d[0]-p[0],d[1]-p[1],d[2]-p[2]],y=[v[0]-m[0],v[1]-m[1],v[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],k=Math.hypot(b[0],b[1],b[2])||1,E=b[1]<0?-1:1;return[b[0]/k*E,b[1]/k*E,b[2]/k*E]};for(let l=0;l<=18;l++){let u=l/18;for(let h=0;h<=5*2;h++){let d=h/5-1;e.push(i(u,d)),t.push(s(Math.min(.97,Math.max(.03,u)),d)),o.push([u,d])}}let c=5*2+1;for(let l=0;l<18;l++)for(let u=0;u<c-1;u++){let h=l*c+u,d=h+1,p=h+c,v=p+1;n.push([h,p,d],[d,p,v])}let f=e.length;return e.push([-Aa*.12,0,-.003],[-Aa*.12,0,.003],[-Aa*.24,-.01,.0015],[-Aa*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:e,nrm:t,uv:o,idx:n}}cy.exports=e=>{let t=z8(),o=e({vert:`
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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=nr(),r=e({vert:`
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var uy=ve((jA,hy)=>{"use strict";var{skylightGLSL:N8,Z_START:fy,Z_END:R8}=gs(),{oculusGLSL:C8,A:Ws}=ia(),{windowLightGLSL:P8,C:Ci}=or();hy.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=Ci.x0+.6,f=Ci.x1-.3,l=[];for(let p=0;p<o;p++)l.push([2.5+s()*10.5,.3+s()*8,fy-3.5+s()*(R8-fy+4.5),s()]);for(let p=0;p<n;p++)l.push([Ws.x0+.3+s()*(Ws.x1-Ws.x0-.6),.3+s()*7.5,Ws.z0+.3+s()*(Ws.z1-Ws.z0-.6),s()]);for(let p=0;p<r;p++)l.push([c+s()*(f-c),.2+s()*5.6,Ci.z0+.25+s()*(Ci.z1-Ci.z0-.5),s()]);let u=p=>p.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],d=e({vert:`
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
				p.z = clamp(p.z, ${u(Ci.z0+.1)}, ${u(Ci.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:p=>p.viewportHeight*.006,focus:(p,v)=>v&&v.focus||6,aperture:(p,v)=>v&&v.aperture||0,wake0:(p,v)=>(v&&v.wake||h)[0],wake1:(p,v)=>(v&&v.wake||h)[1],wake2:(p,v)=>(v&&v.wake||h)[2],wake3:(p,v)=>(v&&v.wake||h)[3],wakeDir:(p,v)=>v&&v.wakeDir||[0,0,1],gust:(p,v)=>v&&v.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return p=>d(p||{})}});var xy=ve((WA,gy)=>{"use strict";var{C:my}=or(),dy=nr(),py=15.3,I8=37.1,vy=my.z1+.9,O8=my.z1+.7+16-.6;gy.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([py+r()*(I8-py),l,vy+r()*(O8-vy),r()])}let i=[],s=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>dy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){dy.night>.01&&c()}}});var dh=ve((VA,Yr)=>{"use strict";var yy=nr(),Ua=S0(),F8=Ls(),B0=Math.PI,it=e=>(+e).toFixed(4),Ta=e=>`vec3(${it(e[0])}, ${it(e[1])}, ${it(e[2])})`,$o={x0:-2.05,z0:41.45,z1:47.55,top:5.1},vo=-.55,On=-2,Jo=42.25,kn=43.65,ua=45.35,Er=46.75,Wn=2.75,Vr=.12,G8=(vo+On)/2,zo={x:-1.3,y:1.42,w:.42,h:.52,z:kn,cell:.026},Ot={x0:-1.85,x1:-.75,top:.98,z0:kn-.3,z1:kn-.02},fa={x0:-1.44,x1:-1.16,y0:Ot.top-.002,y1:Ot.top+.018},Xr={cx:-1.3,cz:kn-.165,w:.2,d:.255,y:Ot.top+.0012},er={x:-1.03,z:kn-.14,r:.042,h:.075},Ho={x:-.86,z:kn-.12,h:.085,r:.019};Ho.flame=[Ho.x,Ot.top+.012+Ho.h+.028,Ho.z];var uh={a:[er.x-.004,Ot.top+.03,er.z+.004],b:[er.x-.13,Ot.top+.34,er.z-.12]},en=[-1.5,2.42,44.66],Mn=[-1.78,1.95,Jo+.09],ha={x:-1.32,z:44.08,y:.64,heading:.32},_y={window:{eye:[-1.3,1.33,42.8],target:[zo.x,1.37,kn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[Xr.cx,Ot.top,Xr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},ur={z0:(Jo+kn)/2+.03,z1:(Jo+kn)/2+.56,y0:.98,y1:1.78,x:vo+.03,cell:.047};_y.peek={eye:[-1.2,1.42,42.95],target:[Ua.PLAY.stoolX-Ua.OFF[0],.85,Ua.PLAY.keyFront+.2],fov:30};var H0={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function by(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${it(zo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Ta(en)};
		if (d.z > -0.001) return 0.0;
		float t = (${it(zo.z)} - ${it(en[2])}) / d.z;
		vec2 g = (${Ta(en)} + d * t).xy - vec2(${it(zo.x)}, ${it(zo.y)});
		float inWin = (1.0 - smoothstep(${it(zo.w/2-.01)}, ${it(zo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${it(zo.h/2-.01)}, ${it(zo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${it(zo.z)}) / abs(${it(zo.z)} - ${it(en[2])}) / ${it(zo.cell)};
		vec2 qc = fract(g / ${it(zo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Ta(Ho.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${it(er.x)}, ${it(er.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${it(er.x)}, ${it(er.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${it(er.r*.7)}, ${it(er.r*1.6)}, r)) * (1.0 - smoothstep(${it(Ot.top+er.h*.8)}, ${it(Ot.top+er.h*1.3)}, y)));
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
		bool inB1 = p.z < ${it(kn)} && p.z > ${it(Jo-.04)} && p.x < ${it(vo+.02)};
		bool inPriest = p.z >= ${it(kn)} && p.z < ${it(ua)} && p.x < ${it(vo)};
		bool inB2 = p.z >= ${it(ua)} && p.z < ${it(Er+.04)} && p.x < ${it(vo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${it(On)}, ${it(vo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${it($o.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Ta(Ua.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Ta(en)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Ta(Mn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Ta(Ho.flame)} - p;
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
	}`}var In={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function My(){let e=[],t=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],i=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],s=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(f,l,u,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),o.push(u),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,u,h,d,p)=>{let v=s(i(a(l,f),a(h,f)));p=p||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,v,d,p[0]),g=c.v(l,v,d,p[1]),y=c.v(u,v,d,p[2]),b=c.v(h,v,d,p[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,u,h,d,p,v)=>{let m=(g,y,b,k,E,L,R,W)=>c.quad(g,y,b,k,v,[[E,R],[L,R],[L,W],[E,W]]);m([h,l,u],[h,l,p],[h,d,p],[h,d,u],u,p,l,d),m([f,l,p],[f,l,u],[f,d,u],[f,d,p],p,u,l,d),m([f,d,u],[h,d,u],[h,d,p],[f,d,p],f,h,u,p),m([f,l,p],[h,l,p],[h,l,u],[f,l,u],f,h,p,u),m([f,l,p],[h,l,p],[h,d,p],[f,d,p],f,h,l,d),m([h,l,u],[f,l,u],[f,d,u],[h,d,u],h,f,l,d)},c.tube=(f,l,u,h)=>{h=h||6;let d=e.length/3;for(let p=0;p<f.length;p++){let v=f[Math.max(0,p-1)],m=f[Math.min(f.length-1,p+1)],g=s(a(m,v)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),k=i(b,g),E=typeof l=="function"?l(p/(f.length-1)):l;for(let L=0;L<=h;L++){let R=L/h*B0*2,W=Math.cos(R),P=Math.sin(R),te=[b[0]*W+k[0]*P,b[1]*W+k[1]*P,b[2]*W+k[2]*P];c.v([f[p][0]+te[0]*E,f[p][1]+te[1]*E,f[p][2]+te[2]*E],te,u,[p/(f.length-1),L/h])}}for(let p=0;p<f.length-1;p++)for(let v=0;v<h;v++){let m=d+p*(h+1)+v,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,u,h,d)=>{d=d||20;let p=e.length/3;for(let v=0;v<u.length;v++){let[m,g]=u[v],y=u[Math.max(0,v-1)],b=u[Math.min(u.length-1,v+1)],k=b[0]-y[0],E=b[1]-y[1];for(let L=0;L<=d;L++){let R=L/d*B0*2,W=Math.cos(R),P=Math.sin(R),te=s([E*W,-k,E*P]);c.v([f+W*m,g,l+P*m],te,h,[L/d,v/(u.length-1)])}}for(let v=0;v<u.length-1;v++)for(let m=0;m<d;m++){let g=p+v*(d+1)+m,y=g+d+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,u,h,d,p)=>{let v=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=v[m],y=v[(m+1)%4],b=[f+g[0],u,l+g[1]],k=[f+y[0],u,l+y[1]],E=[f,d,l],L=s(i(a(E,b),a(k,b))),R=c.v(b,L,p,[0,0]),W=c.v(k,L,p,[1,0]),P=c.v(E,L,p,[.5,1]);r.push(R,P,W)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,u,h]=[r[f],r[f+1],r[f+2]],d=m=>[e[m*3],e[m*3+1],e[m*3+2]],p=i(a(d(u),d(l)),a(d(h),d(l))),v=[0,1,2].map(m=>t[l*3+m]+t[u*3+m]+t[h*3+m]);p[0]*v[0]+p[1]*v[1]+p[2]*v[2]<0&&(r[f+1]=h,r[f+2]=u)}return c},c}function hh(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var Qo={ys:1.78,a:.56,r:.78};Qo.apex=Qo.ys+Math.sqrt(Qo.r*Qo.r-(Qo.r-Qo.a)*(Qo.r-Qo.a));function $8(){let e=My(),t=In.WOOD,o=In.CARVED,n=In.DARKWOOD,r=.06;e.box(On,0,Jo,vo+.08,Vr,Er,n),e.box(On,Wn-.06,Jo-.04,vo+.1,Wn,Er+.04,t),e.box(vo,Wn-.2,Jo-.06,vo+.12,Wn-.06,Er+.06,t),e.box(vo+.02,Wn,Jo-.08,vo+.14,Wn+.07,Er+.08,n),e.box(On,Vr,Jo,On+.04,Wn-.06,Er,t);for(let[l,u,h]of[[Jo-r,Jo,-1],[Er,Er+r,1]]){e.box(On,0,l,vo+.08,Wn,u,t);let d=h<0?l-.018:u;e.box(On+.18,.45,Math.min(d,d+.018),vo-.12,2.35,Math.max(d,d+.018),n),e.box(On+.26,.55,Math.min(d,d+.03*h),vo-.2,2.25,Math.max(d,d+.03*h),t)}{let l=kn-.02,u=kn+.02,h=zo.x-zo.w/2,d=zo.x+zo.w/2,p=zo.y-zo.h/2,v=zo.y+zo.h/2;e.box(On,Vr,l,vo,fa.y0,u,t),e.box(On,fa.y0,l,fa.x0,fa.y1,u,t),e.box(fa.x1,fa.y0,l,vo,fa.y1,u,t),e.box(On,fa.y1,l,vo,p,u,t),e.box(On,p,l,h,v,u,t),e.box(d,p,l,vo,v,u,t),e.box(On,v,l,vo,Wn-.06,u,t);let m=.05,g=l-.025;e.box(h-m,p-m,g,d+m,p,l,n),e.box(h-m,v,g,d+m,v+m,l,n),e.box(h-m,p,g,h,v,l,n),e.box(d,p,g,d+m,v,l,n),e.box(h-m-.02,v+m,g-.015,d+m+.02,v+m+.03,l,t),e.box(fa.x0-.01,fa.y1,l-.006,fa.x1+.01,fa.y1+.008,l,In.BRASS)}{let l=ur,u=vo+.008,h=vo+.052;e.box(u,l.y0,l.z0-.035,h,l.y1,l.z0,n),e.box(u,l.y0,l.z0,h,l.y0+.04,l.z1,n),e.box(u,l.y1-.04,l.z0,h,l.y1,l.z1,n),e.box(u+.008,Vr,l.z0-.035,h-.008,l.y0,l.z1,t),e.box(h-.008,Vr+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),e.box(u-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,In.BRASS)}e.box(On,Vr,ua-.02,vo,Wn-.06,ua+.02,t),e.box(Ot.x0,Ot.top-.035,Ot.z0,Ot.x1,Ot.top,Ot.z1,t),e.tube([[Ot.x0,Ot.top-.018,Ot.z0],[Ot.x1,Ot.top-.018,Ot.z0]],.02,t,8);for(let l of[Ot.x0+.1,Ot.x1-.1]){let u=[];for(let h=0;h<=8;h++){let d=h/8;u.push([l,Ot.top-.04-.22*d,Ot.z1-.02-.22*Math.cos(d*B0/2)])}e.tube(u,.018,n,6)}e.box(On+.06,.12,Jo,vo-.1,.44,Jo+.42,n),e.box(On+.08,.44,Jo+.01,vo-.12,.52,Jo+.41,In.CUSHION),e.box(On+.06,.12,Er-.42,vo-.1,.44,Er,n),e.box(Mn[0]-.05,Mn[1]-.16,Jo,Mn[0]+.05,Mn[1]-.02,Jo+.012,In.BRASS),e.tube([[Mn[0],Mn[1]-.09,Jo+.012],[Mn[0],Mn[1]-.09,Mn[2]-.01],[Mn[0],Mn[1]-.05,Mn[2]]],.006,In.BRASS,6),e.lathe(Mn[0],Mn[2],[[0,Mn[1]-.05],[.028,Mn[1]-.035],[.034,Mn[1]+.01],[.024,Mn[1]+.06],[.026,Mn[1]+.065]],In.LAMPGLASS,16),e.box(ha.x-.22,.12,ha.z-.24,ha.x+.22,ha.y-.05,ha.z+.16,n),e.box(ha.x-.24,ha.y-.05,ha.z-.26,ha.x+.24,ha.y,ha.z+.18,In.CUSHION),e.tube([[en[0],Wn-.06,en[2]],[en[0],en[1]+.07,en[2]]],.005,In.BRASS,5),e.lathe(en[0],en[2],[[0,en[1]+.09],[.03,en[1]+.08],[.02,en[1]+.06]],In.BRASS,12),e.lathe(en[0],en[2],[[0,en[1]-.06],[.035,en[1]-.04],[.045,en[1]],[.035,en[1]+.05],[.018,en[1]+.07]],In.LAMPGLASS,16);let a=vo,i=vo+r;function s(l,u,h){let d=(l+u)/2,p=40,v=[];for(let g=0;g<=p;g++)v.push(Vr+(Wn-.2-Vr)*g/p);let m=[];v.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(Qo.ys+(Qo.apex-Qo.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let k=h?hh(y,Qo.ys,Qo.a,Qo.r):0,E=h?hh(b,Qo.ys,Qo.a,Qo.r):0,L=(R,W)=>[R,W];e.quad([i,y,d-k],[i,y,l],[i,b,l],[i,b,d-E],t,[L(d-k,y),L(l,y),L(l,b),L(d-E,b)]),e.quad([i,y,u],[i,y,d+k],[i,b,d+E],[i,b,u],t,[L(u,y),L(d+k,y),L(d+E,b),L(u,b)]),(k>0||E>0)&&(e.quad([a,y,d-k],[i,y,d-k],[i,b,d-E],[a,b,d-E],n),e.quad([i,y,d+k],[a,y,d+k],[a,b,d+E],[i,b,d+E],n),e.quad([a,y,l],[a,y,d-k],[a,b,d-E],[a,b,l],t),e.quad([a,y,d+k],[a,y,u],[a,b,u],[a,b,d+E],t))}if(e.box(a,Wn-.2,l,i,Wn-.06,u,t),e.box(i,Wn-.42,l+.05,i+.012,Wn-.24,u-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,k=b<.5?Vr+(Qo.apex-Vr)*(b*2):Qo.apex-(Qo.apex-Vr)*((b-.5)*2),E=b<.5?-1:1;g.push([i+.01,Math.min(k,Qo.apex-.002),d+E*(hh(k,Qo.ys,Qo.a,Qo.r)+.03)])}e.tube(g,.022,n,6)}}s(Jo,kn,!0),s(ua,Er,!0);{let l=kn,u=ua,h=(l+u)/2;e.box(a,Vr,l,i,Wn-.06,u,t);let d={ys:1.85,a:.55,r:.8},p=[];for(let v=0;v<=40;v++){let m=v/40,g=d.ys+Math.sqrt(d.r*d.r-(d.r-d.a)*(d.r-d.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;p.push([i+.012,Math.min(y,g-.002),h+b*hh(y,d.ys,d.a,d.r)])}p.push(p[0]),e.tube(p,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,u-.13],[i+.06,1.12,u-.13],[i+.06,1.12,u-.2]],.009,In.BRASS,6)}[Jo-.02,kn,ua,Er+.02].forEach((l,u)=>{let h=u===1||u===2,d=.075,p=Wn+(h?.62:.4);e.box(vo+.06,0,l-d,vo+.06+2*d,p,l+d,t),e.box(vo+.04,p-.04,l-d-.02,vo+.08+2*d,p,l+d+.02,n);let v=vo+.06+d,m=h?.62:.5;e.spire(v,l,p,d*.95,p+m,t);for(let g=1;g<=3;g++){let y=p+m*g/4.2,b=d*.95*(1-g/4.2)+.02;for(let[k,E]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[v+k*(b-.02),y-.02,l+E*(b-.02)],[v+k*(b+.015),y+.03,l+E*(b+.015)]],.008,n,4)}e.lathe(v,l,[[0,p+m-.02],[.03,p+m+.03],[.022,p+m+.07],[0,p+m+.1]],t,10)});let f=(l,u,h)=>{let d=(l+u)/2,p=vo+.075,v=Wn+.07,m=v+h,g=[1,0,0],y=e.v([p,v,l],g,o,[l,v]),b=e.v([p,v,u],g,o,[u,v]),k=e.v([p,m,d],g,o,[d,m]);e.idx.push(y,b,k);let E=e.v([p-.04,v,l],[-1,0,0],t),L=e.v([p-.04,v,u],[-1,0,0],t),R=e.v([p-.04,m,d],[-1,0,0],t);e.idx.push(E,R,L);let W=[],P=[];for(let D=0;D<=10;D++){let Y=D/10;W.push([p+.02,v+h*Y,l+(d-l)*Y]),P.push([p+.02,v+h*Y,u+(d-u)*Y])}e.tube(W,.022,n,6),e.tube(P,.022,n,6);for(let D=2;D<=8;D+=2)for(let Y of[W[D],P[D]])e.tube([Y,[Y[0]+.01,Y[1]+.06,Y[2]+(Y===W[D]?-.02:.02)]],.01,n,4);e.lathe(p,d,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([D,Y])=>[D,Y]),t,10);let te=Math.min(.17,h*.32),G=v+h*.38,ae=[];for(let D=0;D<=24;D++){let Y=D/24*B0*2;ae.push([p+.012,G+Math.sin(Y)*te,d+Math.cos(Y)*te])}e.tube(ae,.012,n,5)};f(Jo-.02,kn,.52),f(kn,ua,.82),f(ua,Er+.02,.52),e.lathe(er.x,er.z,[[0,Ot.top],[.036,Ot.top+.001],[er.r,Ot.top+.012],[er.r*1.02,Ot.top+.035],[.036,Ot.top+.052],[.02,Ot.top+.062],[.016,Ot.top+.068]],In.INKGLASS,24),e.lathe(er.x,er.z,[[.016,Ot.top+.064],[.021,Ot.top+.066],[.022,Ot.top+.075],[.016,Ot.top+.076],[0,Ot.top+.072]],In.BRASS,20);{let l=uh.a,u=uh.b,h=26,d=y=>{let b=Math.sin(y*B0)*.025;return[l[0]+(u[0]-l[0])*y+b*.6,l[1]+(u[1]-l[1])*y+b*.4,l[2]+(u[2]-l[2])*y+b]},p=[];for(let y=0;y<=h;y++)p.push(d(y/h));e.tube(p,y=>.0028*(1-.7*y)+6e-4,In.QUILL,5);let v=e.norm(e.sub(u,l)),m=e.norm(e.cross(v,[.2,1,.1])),g=e.cross(m,v);for(let y of[-1,1]){let b=e.pos.length/3;for(let k=0;k<=h;k++){let E=k/h,L=d(E),R=E<.28?0:(y>0?.03:.02)*Math.sin(B0*Math.pow((E-.28)/.72,.75)),W=R*.25,P=[L[0]+m[0]*y*R-g[0]*W,L[1]+m[1]*y*R-g[1]*W,L[2]+m[2]*y*R-g[2]*W];e.v(L,g,In.QUILL,[E,0]),e.v(P,g,In.QUILL,[E,y])}for(let k=0;k<h;k++){let E=b+k*2;e.idx.push(E,E+2,E+1,E+1,E+2,E+3)}}}return e.orient()}function D8(e,t){let n=$o.top,r=$o.x0;e(r-.35,0,$o.z0-.35,r,n+.35,$o.z1+.35),e(r,0,$o.z0-.35,-.35,n,$o.z0),e(r,0,$o.z1,-.35,n,$o.z1+.35),e(r,n,$o.z0,-.35,n+.35,$o.z1),e(.35,0,$o.z0-.42,.35+.16,n,$o.z0),e(.35,0,$o.z1,.35+.16,n,$o.z1+.42),e(.35,n,$o.z0-.5,.35+.18,n+.42,$o.z1+.5),e(.35,n+.42,$o.z0-.6,.35+.26,n+.52,$o.z1+.6),e(.35,0,$o.z0-.5,.35+.22,.42,$o.z0),e(.35,0,$o.z1,.35+.22,.42,$o.z1+.5),e(-.35-.01,0,$o.z0,.35+.12,.02,$o.z1),t(r,$o.z0,-.35,$o.z1)}Yr.exports=e=>{let t=M0(),o=yy.GLSL,n=$8(),r=`
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(fe,ie,Ae,ft){let Nt=[],Mt=[],ro=[],St=[],qt=[],Xe=vo-.02,ut=Qo.apex+.08,At=Vr+.015;for(let Zt=0;Zt<=40;Zt++){let uo=Zt/40,Tt=ut+(At-ut)*uo;for(let dt=0;dt<=90;dt++){let ge=dt/90,et=Ae?.2+.13*uo*uo:ie-fe,Lt=fe+ge*et,st=Ae?.05+.02*uo:.035+.01*Math.sin(ge*7),We=ge*ft*B0*2+Math.sin(uo*2+ge*5)*.6,mo=Xe-st*(.5+.5*Math.sin(We))-(Ae?.02*uo:0),to=[1,0,-(-st*.5*Math.cos(We)*ft*B0*2/et)],Wt=Math.hypot(to[0],to[1],to[2]);Nt.push(mo,Tt,Lt),Mt.push(to[0]/Wt,0,to[2]/Wt),ro.push(2),St.push(Math.sin(We),uo)}}for(let Zt=0;Zt<40;Zt++)for(let uo=0;uo<90;uo++){let Tt=Zt*91+uo,dt=Tt+90+1;qt.push(Tt,dt,Tt+1,Tt+1,dt,dt+1)}for(let Zt=0;Zt<qt.length;Zt+=3){let[uo,Tt,dt]=[qt[Zt],qt[Zt+1],qt[Zt+2]],ge=We=>[Nt[We*3],Nt[We*3+1],Nt[We*3+2]],et=[0,1,2].map(We=>ge(Tt)[We]-ge(uo)[We]),Lt=[0,1,2].map(We=>ge(dt)[We]-ge(uo)[We]);et[1]*Lt[2]-et[2]*Lt[1]<0&&(qt[Zt+1]=dt,qt[Zt+2]=Tt)}return{pos:Nt,nrm:Mt,kind:ro,uv:St,idx:qt}}let c=s(Jo+.02,Jo+.4,!0,6),f=s(ua+.04,Er-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(fe=>fe+c.pos.length/3))},u=e({vert:`
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
			vec3 p = vec3(${it(zo.x)} + corner.x * ${it(zo.w/2)}, ${it(zo.y)} + corner.y * ${it(zo.h/2)}, ${it(zo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${it(zo.x)}, ${it(zo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${it(zo.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${it(ur.x)}, ${it((ur.y0+ur.y1)/2)} + corner.y * ${it((ur.y1-ur.y0)/2-.04)}, ${it((ur.z0+ur.z1)/2)} + corner.x * ${it((ur.z1-ur.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${it((ur.z0+ur.z1)/2)}, ${it((ur.y0+ur.y1)/2)})) * ${it(zo.cell/ur.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${it(ur.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${it(zo.x)} + corner.x * 0.75, ${it(zo.y)} + corner.y * 0.9, ${it(ua-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),v=14,m=[];for(let fe=0;fe<v;fe++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(ie=>m.push(ie[0],ie[1],(fe+.5)/v));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${it(G8)} + c.x * ${it((vo-On)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${it(kn-.03)} - c.z * 1.25);
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
			float d = length(v_pos - ${Ta(en)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let fe=document.createElement("canvas");fe.width=512,fe.height=652;let ie=fe.getContext("2d");ie.fillStyle="#cdb38a",ie.fillRect(0,0,fe.width,fe.height);let Ae=7,ft=()=>(Ae=Ae*1664525+1013904223>>>0,Ae/4294967296);for(let Mt=0;Mt<2400;Mt++){ie.fillStyle=`rgba(${ft()<.5?"90,62,30":"245,230,200"},${.03+ft()*.05})`;let ro=ft()*fe.width,St=ft()*fe.height;ie.fillRect(ro,St,1+ft()*14,1)}for(let Mt=0;Mt<26;Mt++){let ro=ft()*fe.width,St=ft()*fe.height,qt=20+ft()*90,ko=ie.createRadialGradient(ro,St,0,ro,St,qt);ko.addColorStop(0,`rgba(120,80,35,${.04+ft()*.06})`),ko.addColorStop(1,"rgba(120,80,35,0)"),ie.fillStyle=ko,ie.fillRect(ro-qt,St-qt,qt*2,qt*2)}let Nt=ie.createRadialGradient(fe.width/2,fe.height/2,fe.width*.3,fe.width/2,fe.height/2,fe.height*.72);return Nt.addColorStop(0,"rgba(110,70,30,0)"),Nt.addColorStop(1,"rgba(110,70,30,0.38)"),ie.fillStyle=Nt,ie.fillRect(0,0,fe.width,fe.height),fe})(),b=y?e.texture({data:y,min:"linear",mag:"linear",flipY:!1}):e.texture(),k=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),E=[18,24],L=[],R=[];for(let fe=0;fe<=E[1];fe++)for(let ie=0;ie<=E[0];ie++)L.push(ie/E[0],fe/E[1]);for(let fe=0;fe<E[1];fe++)for(let ie=0;ie<E[0];ie++){let Ae=fe*(E[0]+1)+ie,ft=Ae+E[0]+1;R.push(Ae,Ae+1,ft,Ae+1,ft+1,ft)}let W=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${it(Xr.cx+Xr.w/2)} - s * ${it(Xr.w)};
			float zNear = ${it(Xr.cz-Xr.d/2)};
			vec3 p = vec3(x, ${it(Xr.y)}, zNear + t * ${it(Xr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${it(Xr.d)};
				float zf = zNear + 0.5 * ${it(Xr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${it(Xr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${it(kn+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(L),size:2}},elements:R,uniforms:{fold:()=>H0.fold,slide:()=>H0.slide,paperTex:b,inkTex:k},cull:{enable:!1}}),P=My();P.lathe(Ho.x,Ho.z,[[0,Ot.top],[.048,Ot.top+.002],[.052,Ot.top+.012],[.046,Ot.top+.014],[.022,Ot.top+.012],[0,Ot.top+.012]],In.BRASS,24),P.lathe(Ho.x,Ho.z,[[0,Ot.top+.012],[Ho.r,Ot.top+.012],[Ho.r*1.02,Ot.top+.012+Ho.h*.6],[Ho.r,Ot.top+.012+Ho.h],[Ho.r*.75,Ot.top+.012+Ho.h-.004],[0,Ot.top+.012+Ho.h-.008]],9,20),P.tube([[Ho.x,Ot.top+.012+Ho.h-.008,Ho.z],[Ho.x+.001,Ot.top+.012+Ho.h+.012,Ho.z]],.0012,8,4),P.orient();let te=e({vert:a,frag:`${r}
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
				float up = smoothstep(${it(Ot.top+Ho.h*.4)}, ${it(Ot.top+.012+Ho.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:P.pos,normal:P.nrm,kind:P.kind,uv:P.uv},elements:P.idx}),G=e({vert:`
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
			vec3 p = ${Ta(Ho.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),ae=[0,0],D=e({uniforms:{view:e.prop("view")}}),Y=new Float32Array(16);function Le(fe){F8.translate(Y,fe.view,Ua.OFF),D({view:Y},()=>He(fe))}function He(fe){let ie=fe&&fe.reflected;if(i(),u(),h(),d(),H0.ink&&H0.inkDirty){let Ae=H0.ink;ae[0]!==Ae.width||ae[1]!==Ae.height?(k({data:Ae,min:"linear",mag:"linear",flipY:!1}),ae=[Ae.width,Ae.height]):k.subimage(Ae),H0.inkDirty=!1}H0.shown&&W(),yy.night>.01&&(te(),ie||(G({halo:1}),G({halo:0}))),ie||(p(),g())}return Le};Yr.exports.addBay=D8;Yr.exports.BAY=$o;Yr.exports.OFF=Ua.OFF;Yr.exports.STATE=H0;var wy=e=>[e[0]+Ua.OFF[0],e[1]+Ua.OFF[1],e[2]+Ua.OFF[2]];Yr.exports.SHOTS=Object.fromEntries(Object.entries(_y).map(([e,t])=>[e,Object.assign({},t,{eye:wy(t.eye),target:wy(t.target)})]));Yr.exports.SEAT=ha;Yr.exports.LAMP=en;Yr.exports.SCONCE=Mn;Yr.exports.GRILLE=zo;Yr.exports.PAPER=Xr;Yr.exports.ZONE={FRONT:vo,BACK:On,ZA:Jo,ZB:kn,ZC:ua,ZD:Er}});var td=ve((XA,Ey)=>{"use strict";function q8(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var ky={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},H8=["th","ng","er"];function B8(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(ky).forEach(v=>{r[v]=ky[v]*o.pace});let a=[],i=0,s=0,c=0,f=[];function l(v,m){let g=q8(o.seed),y=o.xh,b={},k=Y=>{let Le=t[Y];if(!Le)return null;let He=Math.floor(g()*Le.length);return Le.length>1&&He===b[Y]&&(He=(He+1)%Le.length),b[Y]=He,Le[He]},E=Y=>{if(t[Y])return{g:k(Y),sc:1};let Le=Y.toLowerCase();return t[Le]?{g:k(Le),sc:/[A-Z]/.test(Y)?1.32:1}:null},L=[],R=.15,W=0,P=0,te=(g()-.5)*.02,G=m/y,ae=v.split(/\n\s*\n/);ae.forEach((Y,Le)=>{Y.replace(/\s+/g," ").trim().split(" ").forEach(fe=>{let ie=[];for(let Mt=0;Mt<fe.length;Mt++){let ro=fe.substr(Mt,2).toLowerCase();if(H8.indexOf(ro)>=0&&t[ro]&&g()<.55&&fe[Mt]===fe[Mt].toLowerCase()){ie.push({ch:ro,gl:{g:k(ro),sc:1}}),Mt++;continue}let St=E(fe[Mt]);St&&St.g&&ie.push({ch:fe[Mt],gl:St})}let Ae=ie.map(()=>.17+g()*.07),ft=ie.reduce((Mt,ro,St)=>Mt+ro.gl.g.w*ro.gl.sc+Ae[St],0);W>0&&W+ft>G&&(W=0,P++,R+=r.line,te=(g()-.5)*.02),ie.forEach((Mt,ro)=>{let St=Mt.gl.g,qt=Mt.gl.sc*(.95+g()*.1),ko=(g()-.5)*.06,Fn=(g()-.5)*.08+te*W,Xe=W,ut=P*o.lineHeight+1.9+Fn,At=Math.cos(ko),Zt=Math.sin(ko),uo=dt=>[(Xe+(dt[0]*At-dt[1]*Zt)*qt)*y,(ut+(dt[0]*Zt+dt[1]*At)*qt)*y],Tt=(dt,ge)=>{let et=0;for(let st=1;st<dt.length;st++)et+=Math.hypot(dt[st][0]-dt[st-1][0],dt[st][1]-dt[st-1][1]);let Lt=Math.max(o.minDur||(ge?.06:.07),et/(o.speed*y));L.push({pts:dt,L:et,start:R,dur:Lt,dot:ge}),R+=Lt};if(St.s.forEach((dt,ge)=>{ge>0&&(R+=r.stroke),Tt(dt.map(uo),!1)}),St.dot){let dt=St.s[0][0];St.s.forEach(et=>et.forEach(Lt=>{Lt[1]<dt[1]&&(dt=Lt)}));let ge=uo([dt[0]+.1,-1.36]);R+=r.stroke*1.4,Tt([ge,[ge[0]+y*.05,ge[1]+y*.03]],!0)}R+=r.letter*(.6+g()*.8),W+=St.w*qt+Ae[ro]});let Nt=fe[fe.length-1];R+=/[.!?]/.test(Nt)?r.stop:/[,;:]/.test(Nt)?r.comma:r.word,W+=.55+g()*.2}),Le<ae.length-1&&(W=0,P+=1.6,R+=r.para)});let D=(P+1)*o.lineHeight*y+y*1.55;return{strokes:L,total:R,height:D}}function u(v,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(v*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=v+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,v,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=v=>v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;function d(v,m){let g=f[v.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let k=1;k<v.pts.length;k++){let E=v.pts[k-1],L=v.pts[k],R=Math.hypot(L[0]-E[0],L[1]-E[1]),W=b,P=b+R;if(b=P,P<=g||R===0)continue;if(W>=m)break;let te=Math.max(0,(g-W)/R),G=Math.min(1,(m-W)/R),ae=[E[0]+(L[0]-E[0])*te,E[1]+(L[1]-E[1])*te],D=[E[0]+(L[0]-E[0])*G,E[1]+(L[1]-E[1])*G],Y=(W+P)/2/(v.L||1),Le=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,Y)));n.lineWidth=y*Le,n.globalAlpha=.86+.14*Le,n.beginPath(),n.moveTo(ae[0],ae[1]),n.lineTo(D[0],D[1]),n.stroke()}v.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(v.pts[0][0],v.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[v.i]=m}function p(v){let m=(v-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);d(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(p):o.onDone&&o.onDone()}return{write(v,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=l(v,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(v):o.maxTime;if(b&&i>b){let E=b/i;a.forEach(L=>{L.start*=E,L.dur*=E}),i=b}a.forEach((E,L)=>{E.i=L}),f=[],u(g,y.height);let k=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||k){a.forEach(E=>d(E,E.L));return}return c=performance.now(),s=requestAnimationFrame(p),i},finish(){cancelAnimationFrame(s),a.forEach(v=>d(v,v.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}Ey.exports=B8});var nd=ve((YA,Sy)=>{"use strict";var od=nr(),U8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',j8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Sy.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=od.isNight;o.innerHTML=r?U8:j8,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),od.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),od.toggle()}),o}});var zy=ve((KA,Ly)=>{"use strict";var En=dh(),W8=S0(),V8=td(),X8="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Ay=100,l0=e=>Math.max(0,Math.min(1,e)),Fr=(e,t,o)=>{let n=l0((o-e)/(t-e));return n*n*(3-2*n)},La=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,da=(e,t,o)=>e+(t-e)*o,dl=(e,t,o)=>[da(e[0],t[0],o),da(e[1],t[1],o),da(e[2],t[2],o)];function Pi(e,t){let o=e.length-1,n=l0(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-f[l])*a*a+(-i[l]+3*s[l]-3*c[l]+f[l])*a*a*a))}var ph=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function rd(e,t,o){return{eye:dl(e.eye,t.eye,o),target:dl(e.target,t.target,o),fov:da(e.fov,t.fov,o),roll:da(e.roll||0,t.roll||0,o)}}var pl=W8.PLAY,za=[pl.stoolX,1,pl.keyFront+.25],vh=[pl.stoolX,pl.keyTop+.03,pl.keyFront-.05],id=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[za[0]+Math.cos(t)*o,1.15+.4*e,za[2]+Math.sin(t)*o]},Vs=[{eye:id(1),target:[za[0],.92,za[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:vh},{eye:[za[0]+1,1.14,za[2]+1.72],target:[vh[0]+.05,.8,vh[2]+.05],fov:40,aperture:1,to:vh}],Ty=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),mh=e=>({fade:0,letterbox:.55,exposure:1.3,focus:Ty(e.eye,e.to||za),aperture:e.aperture,vignette:.42,shafts:0}),ad={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Xs={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},ul={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},Y8=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),u=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,d=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let ge=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Ay-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>Ay&&ge&&(s.value=ge[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(ge=>s.addEventListener(ge,et=>et.stopPropagation())),a.addEventListener("pointerdown",ge=>ge.stopPropagation()),a.addEventListener("click",ge=>{let et=ge.target.closest("button");et&&(ge.stopPropagation(),et.dataset.act==="send"&&Le(),et.dataset.act==="leave"&&ie())});let p=!1,v="",m=0,g=null,y=null,b="",k=null,E=0,L="",R=document.createElement("canvas");R.width=512,R.height=652;function W(ge){ge!==L&&(L=ge,i.classList.toggle("on",ge==="write"),f.classList.toggle("on",ge==="hint"),l.classList.toggle("on",p&&ge==="hint"&&(v==="room"||v==="peek")),u.classList.toggle("on",ge==="final"),ge==="write"&&setTimeout(()=>{if(v==="write")try{s.focus({preventScroll:!0})}catch(et){}},900))}function P(ge){v=ge,m=0}function te(ge,et){if(p)return;p=!0,g={eye:ge.eye.slice(),target:ge.target.slice(),fov:ge.fov,roll:ge.roll||0},y=Object.assign({},et),b="",s.value="",c.disabled=!0,En.STATE.fold=0,En.STATE.slide=0,En.STATE.shown=!0,En.STATE.active=!0;let Lt=R.getContext("2d");Lt.setTransform(1,0,0,1,0,0),Lt.clearRect(0,0,R.width,R.height),En.STATE.ink=R,En.STATE.inkDirty=!0,document.body.classList.add("confessing");let st=Vs[0],We=d?.3:5.5,mo=d?.3:3.6;G.i=0,G.u=0,G.T=We+mo,G.moving=!0,G.rest=0,G.raw=!0,G.lookFrom=y,G.lookTo=mh(st);let _=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],id(0)],to=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[za[0],1,za[2]-.1],st.target];G.path=Wt=>{let go=Wt*(We+mo);if(go<We){let pr=go/We,Gn=1-Math.cos(pr*Math.PI/2);return{eye:Pi(_,Gn),target:Pi(to,Fr(0,1,Gn*1.05)),fov:da(g.fov,52,Fr(.4,1,Gn)),roll:(g.roll||0)*(1-Gn)}}let So=(go-We)/mo,ln=1-Math.pow(1-So,2.4);return{eye:id(ln),target:st.target,fov:da(52,st.fov,ln),roll:.05*Math.sin(Math.PI*ln)}},P("room"),W("")}let G={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},ae=()=>h?"Scroll on":"Swipe up";function D(ge){let et=Nt,Lt=Vs[ge],st={eye:et.eye.slice(),target:et.target.slice(),fov:et.fov,roll:et.roll||0},We=dl(st.eye,Lt.eye,.5),mo=[We[0]-za[0],0,We[2]-za[2]],_=Math.hypot(mo[0],mo[2])||1,to=[We[0]+mo[0]/_*.6,We[1]+.3,We[2]+mo[2]/_*.6];G.path=Wt=>{let go=1-Wt;return{eye:[0,1,2].map(So=>go*go*st.eye[So]+2*go*Wt*to[So]+Wt*Wt*Lt.eye[So]),target:dl(st.target,Lt.target,Fr(0,1,Wt)),fov:da(st.fov,Lt.fov,Wt),roll:st.roll*go}},G.lookFrom=Y||mh(Vs[G.i]),G.lookTo=mh(Lt),G.i=ge,G.u=0,G.moving=!0,G.rest=0,G.raw=!1,G.T=d?.4:Math.max(2.8,Math.min(4.4,Ty(st.eye,Lt.eye)*1+1.6)),W("")}let Y=null;function Le(){if(v!=="write"||(b=s.value.trim(),!b))return;s.blur(),W("");let ge=Math.max(10,Math.min(22,24-b.length/28));k=V8(R,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:ge,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:et=>2.4+et.length/160,fixed:{mx:46,my:40},onPen:()=>{En.STATE.inkDirty=!0},onDone:()=>{En.STATE.inkDirty=!0}}),P("down")}function He(){try{let ge={access_key:X8,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(ge),keepalive:!0}).catch(()=>{})}catch(ge){}}function fe(){v==="ready"&&(He(),P("fold"),W(""))}function ie(){!p||v==="leave"||(W(""),s.blur(),Ae=Nt,ft=Y,P("leave"))}let Ae=null,ft=null,Nt=null,Mt=En.SHOTS.window,ro=En.OFF,St=ge=>[ge[0]+ro[0],ge[1],ge[2]],qt=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],St([1.25,1.5,43.25]),St([-.55,1.36,42.92])],ko=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],St([-1,1.55,43.6]),St([-1.4,1.35,43.1]),St([-1.5,1.33,43.3])];function Fn(ge){let et=La(l0(ge)),Lt=[g.eye,...qt,Mt.eye],st=[g.target,...ko,Mt.target];return{eye:Pi(Lt,et),target:Pi(st,Fr(0,1,et*1.03)),fov:da(g.fov,Mt.fov,Fr(.6,.97,et)),roll:(g.roll||0)*(1-et)}}function Xe(ge,et){if(d)return ge;let Lt=performance.now()/1e3,st=.004*et,We=Math.sin(Lt*.61)*.6+Math.sin(Lt*1.37+1.3)*.4,mo=Math.sin(Lt*.47+2.1)*.6+Math.sin(Lt*1.13+.4)*.4;return{eye:[ge.eye[0]+We*st,ge.eye[1]+mo*st*.7,ge.eye[2]],target:[ge.target[0]+mo*st*1.5,ge.target[1]+We*st,ge.target[2]],fov:ge.fov,roll:ge.roll}}function ut(ge,et,Lt){let st={};for(let We in et)st[We]=typeof et[We]=="number"&&typeof ge[We]=="number"?da(ge[We],et[We],Lt):et[We];return st}function At(ge){ge*=window.__confSpeed||1,m+=ge;let et=ph(Mt),Lt=ph(En.SHOTS.paper),st,We,mo=ph(En.SHOTS.peek);if(v==="room")G.moving?(G.u=Math.min(1,G.u+ge/G.T),st=G.path(G.raw?G.u:La(G.u)),We=ut(G.lookFrom,G.lookTo,Fr(.1,.9,G.u)),G.raw&&(We.fade=(y.fade||0)*(1-Fr(0,.12,G.u))),G.u>=1&&(G.moving=!1,G.rest=0,f.textContent=ae(),W("hint"))):(G.rest+=ge,st=Xe(ph(Vs[G.i]),2.5),We=mh(Vs[G.i]));else if(v==="enter"){let to=l0(m/(d?.6:9)),Wt=La(to),go=[Zt.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],St([.75,1.5,42.95]),St([-.25,1.42,42.82]),St([-.9,1.42,42.82]),mo.eye];st={eye:Pi(go,Wt),target:dl(Zt.target,mo.target,Fr(0,.35,Wt)),fov:da(Zt.fov,mo.fov,Fr(.3,1,Wt)),roll:0},We=ut(uo,ad,Fr(.2,.9,to)),to>=1&&P("peek")}else if(v==="peek")st=Xe(mo,1.5),We=ad,m>(d?.5:3.2)&&P("turn");else if(v==="turn"){let _=l0(m/(d?.4:3.2));st=rd(mo,et,La(_)),We=ut(ad,Xs,La(_)),_>=1&&(P("write"),W("write"))}else if(v==="write")st=Xe(et,1),We=Xs;else if(v==="down"){let _=l0(m/(d?.4:2));st=rd(et,Lt,La(_)),We=ut(Xs,ul,La(_)),_>=1&&(E=k.write(b,d)||0,En.STATE.inkDirty=!0,P("writing"))}else if(v==="writing")st=Xe(Lt,.6),We=ul,m>E+.8&&(P("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",W("hint"));else if(v==="ready")st=Xe(Lt,.6),We=ul;else if(v==="fold"){let _=l0(m/(d?.3:1.5));En.STATE.fold=La(_),st=Xe(Lt,.6),We=ul,_>=1&&P("slide")}else if(v==="slide"){let to=l0(m/(d?.6:3.4));En.STATE.slide=La(Fr(0,.7,to));let Wt=La(Fr(.35,1,to));st=rd(Lt,et,Wt),We=ut(ul,Xs,Wt),to>=1&&(En.STATE.shown=!1,P("final"),W("final"))}else if(v==="final")st=Xe(et,1),We=Xs;else if(v==="leave"){let _=d?.6:Ae.eye[0]<ro[0]-.3?12:7,to=l0(m/_),Wt={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},go=La(to),So=Ae.eye[0]<ro[0]-.3,ln=So?[Ae.eye,St([-.55,1.4,42.8]),St([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Wt.eye]:[Ae.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Wt.eye],pr=So?[Ae.target,St([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Wt.target]:[Ae.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Wt.target];if(st={eye:Pi(ln,go),target:Pi(pr,go),fov:da(Ae.fov,Wt.fov,go),roll:Wt.roll*go},We=ut(ft||Xs,y,Fr(.1,.7,to)),We.fade=(y.fade||0)*Fr(.82,1,to),to>=1){p=!1,En.STATE.active=!1,En.STATE.shown=!0,En.STATE.fold=0,En.STATE.slide=0;let Gn=R.getContext("2d");Gn.setTransform(1,0,0,1,0,0),Gn.clearRect(0,0,R.width,R.height),En.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return Nt=st,Y=We,{camera:st,look:We}}let Zt=null,uo=null;function Tt(){if(v==="room"){if(G.moving||G.rest<.4)return;G.i<Vs.length-1?D(G.i+1):(Zt=Nt,uo=Y,W(""),P("enter"));return}if(v==="peek"){m>.4&&P("turn");return}v==="ready"?fe():v==="writing"&&k&&(k.finish(),m=Math.max(m,E))}function dt(){v==="room"&&!G.moving&&G.rest>.4&&G.i>0&&D(G.i-1)}return{start:te,update:At,leave:ie,get active(){return p},get stage(){return v},wheel(ge){ge>8?Tt():ge<-8&&dt()},swipe(ge){ge>0?Tt():ge<0&&dt()},tap(){Tt()},key(ge){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ge)>=0?(Tt(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(ge)>=0?(dt(),!0):ge==="Escape"?(ie(),!0):!1},_setNote(ge){s.value=ge,s.dispatchEvent(new Event("input"))}}}});var $y=ve((QA,Gy)=>{"use strict";var Ys=Ls(),gh=R1(),sd=nf(),K8=zc(),cd=P1(),Q8=na(),xh=!Q8.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Kr}=ia(),{C:tr,PAINTING_X:Js}=or(),$r=e=>Math.max(0,Math.min(1,e)),$e=(e,t,o)=>e+(t-e)*o,Oo=(e,t,o)=>[$e(e[0],t[0],o),$e(e[1],t[1],o),$e(e[2],t[2],o)],eo=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ld=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Sr=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Ie=(e,t,o)=>{let n=$r((o-e)/(t-e));return n*n*(3-2*n)};function Z8(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,l=Math.max(-f,Math.min(f,e-t)),u=e-l,h=(o+i*l)*r,d=(o-i*h)*c,p=u+(l+h)*c;return t-e>0==p>t&&(p=t,d=0),[p,d]}var Ny=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,J8=e=>e*e*e,fd=e=>1-Math.pow(1-e,3),sn=e=>-(Math.cos(Math.PI*e)-1)/2;function xn(e,t){let o=e.length-1,n=$r(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=a*a,u=l*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-f[h])*l+(-i[h]+3*s[h]-3*c[h]+f[h])*u))}var Yt=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function $i(e,t,o){return Yt(Oo(e.eye,t.eye,o),Oo(e.target,t.target,o),$e(e.fov,t.fov,o),$e(e.roll,t.roll,o))}var vd=()=>Ie(.75,1.3,window.innerWidth/window.innerHeight),Ar=(e,t)=>$i(e,t,vd()),yh=[7,3.95,tr.hallEnd-.05],eE=[tr.x1,2.9,tr.zc],Qs=[16.75,4.55,6.75],md=[6.92,2.72,14.5],Na=[7.3,.015,47.1],tE=[Qs,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],md],oE=[md,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Na],Oi=[Js[0],3,tr.z0],Fi=[Js[1],3,tr.z0],ud=47.45,Fy=4.6,nE=13.2,rE=1.57,vl=[7.55,1.25,46.75],gd=[17.25,2.42,46],xd=[26.05,1.95,46],ml=[36.15,.015,44],Mh=()=>$e(6.8,6.15,vd()),aE=[vl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],gd],iE=[gd,[20.2,2.05,45.6],[23.2,1.8,45],xd],Gi=[Js[2],3,tr.z0],dd=[34.8,1.35,46],j0=[7.89,.03,19.03],Ry=.36,Cy=13.64,ir=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function pa(e){let t=e.side==="left"?1:-1;return Oo([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],vd())}function sE(e){return e.side==="left"?Ar(Yt([8.6,3.9,e.z],[Ry,1.45,e.z],76),Yt([8,3.6,e.z+.7],[Ry,3.95,e.z-2],46,-.008)):Ar(Yt([5.4,3.9,e.z],[Cy,1.45,e.z],76),Yt([6,3.6,e.z-.7],[Cy,3.95,e.z+2],46,-.008))}var cE=()=>[ml,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],pa(ir[0])],lE=()=>[pa(ir[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],pa(ir[3])],fE=()=>[pa(ir[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],j0],Py={2:{pos:()=>md,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>vl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>gd,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>xd,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>dd,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>pa(ir[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>pa(ir[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>pa(ir[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>pa(ir[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>pa(ir[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>pa(ir[5]),amp:[.12,.08,.1],tumble:.5}},U0=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Ar(Yt([tr.x0+.9,1.85,tr.zc+.25],[tr.x1,2.85,tr.zc-.1],64),Yt([tr.x0+1.2,2,tr.zc+.35],[tr.x1,2.6,tr.zc-.15],50));return n.eye=eo(eo(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Ar(Yt([16.6,1.9,9.2],[17.3,.4,5.6],64),Yt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=eo(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Ar(Yt([7,1.35,13],[7.2,7.6,20.4],74,.05),Yt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=eo(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Ar(Yt([7,3.6,43.7],[7,3.85,yh[2]],74),Yt([7,3.6,41.3],[7,3.95,yh[2]],46));return o.eye=eo(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Ar(Yt([7,3.9,40.3],[7,1.35,yh[2]],76),Yt([6.3,3.6,41.2],[3.7,3.95,yh[2]],46,-.008));return o.eye=eo(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Ar(Yt([7.15,.15,46],[7.3,.04,Na[2]],50),Yt([7.05,.14,45.9],[7.25,.05,Na[2]],32));return o.eye=eo(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Ar(Yt([7.15,.1,46.3],[7.05,.1,ud],50),Yt([7.1,.12,45.85],[7,.2,ud],30));return o.eye=eo(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Ar(Yt([7.3,.85,45.65],[7.6,1.38,47.1],64),Yt([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=eo(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Ar(Yt([Oi[0],2.3,46.85],[Oi[0],1.25,Oi[2]],74),Yt([Oi[0]-.6,2.55,46.85],[Oi[0]+1.9,2.9,Oi[2]],46,.008));return o.eye=eo(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Ar(Yt([Fi[0],1.95,46.85],[Fi[0],1,Fi[2]],74),Yt([Fi[0]-.6,2.1,46.85],[Fi[0]+1.9,2.75,Fi[2]],46,.008));return o.eye=eo(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Ar(Yt([Gi[0],1.4,46.85],[Gi[0],.6,Gi[2]],74),Yt([Gi[0]-.6,1.45,46.85],[Gi[0]+1.9,2,Gi[2]],46,.008));return o.eye=eo(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Ar(Yt([34.75,.5,44.15],[tr.x1,.8,43.95],66),Yt([34.75,.45,44.3],[tr.x1,.35,43.95],50));return o.eye=eo(o.eye,t),o}},...ir.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=sE(e);return r.eye=eo(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Ar(Yt([7.75,2.6,18.6],[7.89,0,19.08],60),Yt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-j0[0],r=o.eye[2]-j0[2];return o.eye=[j0[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],j0[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],hE=[1,.96,.88];function Iy(e,t){return{dur:t,cam(o,n,r){let a=sn(o),i=$i(n,r,a),s=ir[e].side==="left"?1:-1;return i.eye=eo(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=$e(n[i],r[i],o));return a.aperture=$e(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=sn(o),r=pa(ir[e]),a=pa(ir[e+1]),i=ir[e].side==="left"?1:-1,s=eo(Oo(r,a,.5),[i*1.2,.5,0]),c=xn([r,Oo(r,s,.6),s,Oo(a,s,.6),a],n);return{phase:"fly",pos:eo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var hd=[{dur:6.2,cam(e,t,o){if(e<.5){let s=J8(e/.5),c=Oo(t.eye,[tr.x1-3.2,2.6,tr.zc],s),f=Oo(t.target,eE,Ie(0,.6,e/.5));return Yt(c,f,$e(t.fov,t.fov-8,s),$e(t.roll,.04,s))}let n=fd((e-.5)/.5),r=[[Kr.cx+.4,10.4,Kr.zc+.6],[Kr.cx-.6,7.6,Kr.zc+1.3],[Kr.cx-1.9,4.6,Kr.zc+1.75],o.eye],a=[[Kr.cx-.1,0,Kr.zc-.2],[Kr.cx-1,.4,Kr.zc-.1],[Kr.cx-1.1,.8,Kr.zc-.2],o.target];return Yt(xn(r,n),xn(a,n),$e(o.fov+14,o.fov,n),$e(-.25,o.roll,n))},look(e,t,o){let n=Ie(.22,.5,e),r=1-Ie(.5,.74,e);return{fade:e<.5?n:r,fadeColor:hE,exposure:$e(t.exposure,o.exposure,Ie(.5,.9,e))*(1+2.2*(e<.5?Ie(.15,.5,e):1-Ie(.5,.8,e))),letterbox:$e(t.letterbox,o.letterbox,Ie(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Ie(.6,1,e),focus:$e(4,o.focus,Ie(.5,1,e)),shafts:$e(t.shafts,o.shafts,Ie(.4,.6,e)),vignette:$e(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=xn(r,sn(e)),i=Ie(0,.12,e)*(1-Ie(.82,1,e)),s=Oo(Oo(t.target,o.target,Ie(.55,1,e)),n.pos,i),c=$e(t.fov,o.fov,Ie(.3,1,e))-6*Math.sin(Math.PI*e),f=$e(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return Yt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:$e(t.exposure,o.exposure,Ie(.25,.75,e)),letterbox:$e(t.letterbox,o.letterbox,e),focus:$e(a,o.focus,Ie(.8,1,e)),aperture:$e(.7,o.aperture,Ie(.8,1,e)),shafts:$e(t.shafts,o.shafts,Ie(.3,.8,e)),vignette:$e(t.vignette,o.vignette,e)}},leaf(e){let t=Ny(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:eo(xn(tE,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Ie(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=xn([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Ie(0,.8,e)*.6+sn($r(e/.8))*.4),a=xn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],sn(Ie(.8,1,e))),i=e<.8?r:a,s=Oo(Oo(t.target,n.pos,Ie(.03,.22,e)),o.target,Ie(.82,1,e)),c=$e(t.fov,o.fov,Ie(.15,.7,e))-6*Ie(.6,.8,e)*(1-Ie(.85,1,e)),f=$e(t.roll,o.roll,Ie(0,.6,e))-.04*Math.sin(Math.PI*e);return Yt(i,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:$e(t.exposure,o.exposure,Ie(.5,1,e)),letterbox:$e(t.letterbox,o.letterbox,e),focus:$e(a,o.focus,Ie(.84,1,e)),aperture:$e(1.1,o.aperture,Ie(.84,1,e)),shafts:$e(t.shafts,o.shafts,Ie(.2,.9,e)),vignette:$e(t.vignette,o.vignette,Ie(.5,1,e))}},leaf(e){let t=$e(Ny(e),e,.35),o=xn(oE,Ie(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Ie(.55,.76,e)),r=Ie(.7,.8,e);return{phase:"fly",pos:eo(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=sn(e),r=$i(t,o,n);return r.eye=eo(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=sn(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=$e(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=sn(e),r=xn([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Oo(t.target,o.target,Ie(.1,.85,e));return Yt(r,a,$e(t.fov,o.fov,Ie(.2,1,e)),$e(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=$e(t[r],o[r],Ie(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(e,t,o){return $i(t,o,sn(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=$e(t[r],o[r],sn(e)));return n},leaf(){return{phase:"floor"}},walker(e){return $e(Fy,Mh(),e)}},{dur:11,kick:e=>$r((e-Ks())/(1-Ks())),cam(e,t,o,n){let r=Ks(),a=Ie(0,r,e)*(1-Ie(r+.12,r+.35,e)),i=Oy(Math.min(e,Zs)),s=eo(t.target,[(i-t.target[0])*.15*a,0,0]),c=Ie(r+.12,1,e),f=xn([t.eye,t.eye,eo(t.eye,[0,.12,-.3]),o.eye],c);return s=Oo(s,n.pos,Ie(r+.06,r+.24,e)*(1-Ie(.9,1,e))),s=Oo(s,o.target,Ie(.88,1,e)),Yt(f,s,$e(t.fov,o.fov,c),$e(t.roll,o.roll,c))},look(e,t,o,n,r){let a=Ks(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Ie(0,.12,e)*(1-Ie(a+.25,a+.5,e));return{letterbox:$e($e(t.letterbox,o.letterbox,Ie(a,1,e)),1.75,s),exposure:$e(t.exposure,o.exposure,Ie(a,1,e)),focus:e<a?t.focus:$e(t.focus,i,Ie(a,a+.2,e)),aperture:$e(t.aperture,o.aperture,Ie(a,1,e)),vignette:$e(t.vignette,o.vignette,e),shafts:$e(t.shafts,o.shafts,e)}},leaf(e){let t=$r((e-Ks())/(1-Ks()));if(t<=0)return{phase:"floor"};let o=Ie(0,.85,t)*.85+fd(Ie(0,.15,t))*.15;return{phase:"fly",pos:eo(Na,[(vl[0]-Na[0])*o+Math.sin(t*9)*.08*(1-t),(vl[1]-Na[1])*o,(vl[2]-Na[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?Oy(e):null}},{dur:9,cam(e,t,o,n){let r=sn(e),a=xn([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Ie(.6,.92,e),s=Oo(Oo(t.target,n.pos,Ie(0,.15,e)),o.target,1-i),c=$e(t.fov,o.fov,Ie(.3,1,e)),f=$e(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return Yt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:$e(t.letterbox,o.letterbox,e),exposure:$e(t.exposure,o.exposure,Ie(.3,.8,e)),focus:$e(a,o.focus,Ie(.6,.95,e)),aperture:$e(t.aperture,o.aperture,Ie(.6,1,e)),vignette:$e(t.vignette,o.vignette,e),shafts:$e(t.shafts,o.shafts,Ie(.3,.8,e))}},leaf(e){let t=sn(e);return{phase:"fly",pos:eo(xn(aE,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=sn(e),r=$i(t,o,n);return r.eye=eo(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=$e(t[r],o[r],e));return n.aperture=$e(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=sn(e);return{phase:"fly",pos:eo(xn(iE,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=sn(e),r=$i(t,o,n);return r.eye=eo(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=$e(t[r],o[r],e));return n.aperture=$e(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=sn(e);return{phase:"fly",pos:eo(xn([xd,[29.2,1.75,45.5],[32.2,1.5,45.4],dd],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=sn(e),a=xn([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Ie(.05,.3,e)*(1-Ie(.8,1,e)),s=Oo(Oo(t.target,o.target,Ie(.6,1,e)),n.pos,i);return Yt(a,s,$e(t.fov,o.fov,Ie(.2,1,e)),$e(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:$e(t.letterbox,o.letterbox,e),exposure:$e(t.exposure,o.exposure,e),focus:$e(a,o.focus,Ie(.8,1,e)),aperture:$e(.9,o.aperture,Ie(.8,1,e)),vignette:$e(t.vignette,o.vignette,e),shafts:$e(t.shafts,o.shafts,e)}},leaf(e){let t=xn([dd,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],ml],Ie(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Ie(.35,.82,e)),n=Ie(.78,.88,e);return{phase:"fly",pos:eo(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=$r((e-.02)/.09);return fd(t)+.07*Math.sin($r((e-.08)/.18)*Math.PI)*(1-$r((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Ie(.02,.05,e)*(1-Ie(.08,.16,e)),a=Ie(.06,1,e),i=xn([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+sn(a)*.45),s=eo(n.pos,[1,-.2,-1.45]);i=Oo(i,s,Ie(.1,.22,e)*(1-Ie(.52,.72,e)));let c=Ie(.06,.16,e)*(1-Ie(.86,1,e)),f=Oo(t.target,n.pos,c);f=Oo(f,o.target,Ie(.86,1,e));let l=$e(t.fov,o.fov,Ie(.1,1,e))+6*Math.sin(Math.PI*Ie(.08,.9,e)),u=$e(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Ie(.1,.9,e))+r;return Yt(eo(i,[0,r,0]),f,l,u)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Ie(.02,.06,e)*(1-Ie(.08,.3,e));return{letterbox:$e(t.letterbox,o.letterbox,Ie(.1,.4,e)),exposure:$e(t.exposure,o.exposure,e)*(1+.8*i),focus:$e(a,o.focus,Ie(.86,1,e)),aperture:$e(.8,o.aperture,Ie(.86,1,e)),vignette:$e(t.vignette,o.vignette,e),shafts:$e(t.shafts,o.shafts,e)+i}},leaf(e){let t=$r((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=xn(cE(),t*.6+sn(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:eo(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>Iy(e,7.5)),{dur:10,cam(e,t,o,n){let r=sn(e),a=xn([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Ie(0,.15,e)*(1-Ie(.85,1,e)),s=Oo(Oo(t.target,o.target,Ie(.5,1,e)),n.pos,i);return Yt(a,s,$e(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),$e(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:$e(t.letterbox,o.letterbox,e),exposure:$e(t.exposure,o.exposure,e),focus:$e(a,o.focus,Ie(.85,1,e)),aperture:$e(.6,o.aperture,Ie(.85,1,e)),vignette:$e(t.vignette,o.vignette,e),shafts:$e(t.shafts,o.shafts,e)}},leaf(e){let t=sn(e),o=xn(lE(),t);return{phase:"fly",pos:eo(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>Iy(e,7.5)),{dur:10,cam(e,t,o,n){let r=sn(e),a=xn([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Ie(0,.2,e)*(1-Ie(.9,1,e)),s=Oo(Oo(t.target,o.target,Ie(.5,1,e)),n.pos,i);return Yt(a,s,$e(t.fov,o.fov,r),$e(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:$e(t.letterbox,o.letterbox,e),exposure:$e(t.exposure,o.exposure,e),focus:$e(a,o.focus,Ie(.85,1,e)),aperture:$e(.7,o.aperture,Ie(.85,1,e)),vignette:$e(t.vignette,o.vignette,e),shafts:$e(t.shafts,o.shafts,e)}},leaf(e){let t=xn(fE(),Ie(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Ie(.4,.84,e)),n=Ie(.8,.9,e);return{phase:"fly",pos:eo(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],pd=9.2,Zs=.72;function Oy(e){return e<Zs?$e(Mh(),pd,e/Zs):$e(pd,nE,(e-Zs)/(1-Zs))}function Ks(){return Zs*$r((Na[0]+.15-Mh())/(pd-Mh()))}var _h={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},bh=e=>Object.assign({},_h,U0[e].look),uE=`
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
`;function Gr(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var Ii=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function wh(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}Gy.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let B=document.createElement("link");B.rel="stylesheet",B.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",B.setAttribute("data-tour-font",""),document.head.appendChild(B)}let r=td(),a=null;fetch("res/hand.json").then(B=>B.ok?B.json():null).then(B=>{a=B}).catch(()=>{});let i=document.createElement("style");i.textContent=uE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=Gr("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Gr("div","tour-mark",Ii(gh.name)),f=Gr("button","tour-free","Explore freely");f.type="button";let l=Gr("div","tour-links",sd.icons("tour-icon"));l.insertBefore(nd()("tour-icon"),l.firstChild),l.insertBefore(eh().button("tour-icon"),l.firstChild.nextSibling);let u=Gr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');u.type="button",u.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(u),xh&&l.appendChild(f);let h=Gr("div","tour-progress",U0.map(()=>"<i></i>").join("")),d=Gr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=d.querySelector("span"),v=Gr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Ii(gh.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);wh(v,.4,.35);let m=gh.text.split(/\n\s*\n/).map(B=>`<p class="tour-line">${Ii(B.trim())}</p>`).join(""),g=Gr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Ii(gh.title)}</h2>
		<span class="tour-rule"></span>
		${sd.line("tour-line tour-contact")}
		${m}`);wh(g,.25,.28);let y=Gr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);wh(y,.6,.3);let b=Gr("div","tour-card tour-master","");function k(B){let he=Gr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Be=he.querySelector(".tour-title"),tt=he.querySelector(".tour-body");return he.filled=!1,he.body=tt,he.fill=()=>{let rt=B();if(!rt||he.filled)return;he.filled=!0;let Wo=rt.title||"";he.querySelector(".tour-kicker").textContent=K8(rt)||"Oil on canvas";let Vn=he.querySelector(".visit-row");Vn.innerHTML=cd.button(rt),Vn.hidden=!Vn.innerHTML;let vr=Vn.querySelector(".visit-btn");vr&&(vr.addEventListener("click",ao=>{ao.stopPropagation(),cd.open(rt)}),he.warm=()=>cd.warm(rt));let Vo=0;Be.innerHTML=Wo.split(" ").map(ao=>'<span class="tour-word">'+ao.split("").map($n=>`<span style="transition-delay:${(.35+Vo++*.045).toFixed(3)}s">${Ii($n)}</span>`).join("")+"</span>").join(" "),Be.setAttribute("aria-label",Wo);let sr=.35+Wo.length*.045+.2;he.querySelector(".tour-rule").style.transitionDelay=sr.toFixed(2)+"s";let Xo=String(rt.description||"").split(/\n\s*\n/).filter(ao=>ao.trim());if(he.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&Xo.length){tt.innerHTML=Xo.map(fn=>`<p class="hand-text">${Ii(fn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let ao=tt.querySelector("canvas"),$n=Xo.map(fn=>fn.trim()).join(`

`),Fo=!1,An=!1,Lr=0;tt.addEventListener("wheel",()=>{Fo=!0},{passive:!0}),tt.addEventListener("touchmove",()=>{Fo=!0},{passive:!0});let zr=parseFloat(getComputedStyle(tt).fontSize)||17,Io=r(ao,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,zr*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:fn=>3.5+fn.length/420,seed:3+Wo.length,onPen:fn=>{if(Fo)return;let ga=fn-tt.clientHeight*.55;ga>tt.scrollTop+4&&(tt.scrollTop+=Math.min(16,ga-tt.scrollTop))}});ao.addEventListener("click",fn=>{fn.stopPropagation(),clearTimeout(Lr),An?Io.finish():(An=!0,Io.write($n,!0))}),he.write=()=>{if(clearTimeout(Lr),Fo=!1,An){Io.write($n,!0);return}Io.write("",!0),Lr=setTimeout(()=>{An=!0,Io.write($n)},sr*.6*1e3)},he.stopWrite=()=>{clearTimeout(Lr),Io.stop()};let Jr=0;window.addEventListener("resize",()=>{clearTimeout(Jr),Jr=setTimeout(()=>{An&&he.classList.contains("on")&&Io.write($n,!0)},250)})}else tt.innerHTML=Xo.map(ao=>`<p class="tour-line">${Ii(ao.trim())}</p>`).join(""),tt.querySelectorAll(".tour-line").forEach((ao,$n)=>{ao.style.transitionDelay=(sr+.3+Math.min($n,6)*.35).toFixed(2)+"s"})},he}let E=()=>t.paintings?t.paintings():[],L=B=>E().find(he=>he.side==="corridor"&&Math.abs(he.paintingPosition[0]-B)<.5),R=k(()=>E().find(B=>B.side==="end")),W=()=>Gr("div","tour-card",""),P=k(()=>L(Oi[0])),te=k(()=>L(Fi[0])),G=k(()=>L(Gi[0])),ae=ir.map(B=>k(()=>E().find(he=>he.side===B.side&&Math.abs(he.paintingPosition[2]-B.z)<.5))),D=Gr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${xh?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${sd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${xh?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);wh(D,.5,.35);let Y=[v,g,y,b,R,W(),W(),W(),P,te,G,W(),...ae,D];s.append(...Y,c,l,h,d),document.body.appendChild(s);let Le=zy()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{st=-1,ct&&(lt={start:_},ct=!1)}});document.body.classList.add("touring");let He=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,fe=He?"Scroll":"Swipe",ie=U0.map((B,he)=>he===0?He?"Scroll to begin":"Swipe up to begin":he===1?fe+" to follow the leaf":he===2?fe+" to follow the light":he===3?fe+" for its story":he===6||he===7||he===U0.length-1?"":fe+" on"),Ae=[0];hd.forEach(B=>Ae.push(Ae[Ae.length-1]+B.dur));let ft=Ae[Ae.length-1],Nt=210,Mt=95,ro=.35,St=1.4,qt=.32,ko=1,Fn=1.3,Xe=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ut=2.2,At=.7,Zt=.9,uo=!0,Tt=0,dt=0,ge=0,et=-10,Lt=!1,st=-1,We=0,mo=0,_=0,to=null,Wt=Object.assign({},bh(0)),go=U0[0].cam(0),So={phase:"home",pos:Qs.slice(),tumble:0},ln=0,pr=B=>{let he=0;for(let Be=1;Be<Ae.length;Be++)Math.abs(Ae[Be]-B)<Math.abs(Ae[he]-B)&&(he=Be);return he};function Gn(B){let he=Y[B];he&&he.fill&&(he.fill(),he.body.scrollTop=0,he.offsetWidth),Y.forEach((Be,tt)=>{let rt=Be.classList.contains("on");Be.classList.toggle("on",tt===B),tt===B&&!rt&&Be.write&&Be.write(),tt!==B&&rt&&Be.stopWrite&&Be.stopWrite()}),he&&he.warm&&he.warm(),p.textContent=ie[B]||"",d.classList.toggle("on",!!ie[B])}function Ca(){Y.forEach(B=>{B.stopWrite&&B.classList.contains("on")&&B.stopWrite(),B.classList.remove("on")}),d.classList.remove("on")}let h0=null,Bi=-1;function K(B){if(Le.active||!uo||to)return;let he=_-et>ro;if(et=_,he||!h0){let Be=0,tt=ft;for(let rt=0;rt<Ae.length;rt++)if(Ae[rt]<=Tt-.02&&(Be=Ae[rt]),Ae[rt]>=Tt+.02){tt=Ae[rt];break}h0={lo:Be,hi:tt}}_<Bi||(Lt=!1,ge=Math.max(h0.lo,Math.min(h0.hi,ge+B)),ge=Math.max(Tt-ut,Math.min(Tt+ut,ge)))}function Re(B){if(Le.active||!uo||to)return;let he=Lt?ge:Tt,Be;if(B>0)Be=Ae.findIndex(tt=>tt>he+.05);else{Be=-1;for(let tt=Ae.length-1;tt>=0;tt--)if(Ae[tt]<he-.05){Be=tt;break}}Be<0||(ge=Ae[Be],Lt=!0,et=_)}let Oe=null,ze=B=>B.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(B=>s.addEventListener(B,ze)),s.addEventListener("pointerdown",B=>{if(B.stopPropagation(),!(B.target.closest("button, a")||B.target.closest(".tour-body"))){Oe={x:B.clientX,y:B.clientY,lx:B.clientX,ly:B.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(B.pointerId)}catch(he){}}}),s.addEventListener("pointermove",B=>{if(!Oe)return;let he=B.clientX-Oe.lx,Be=B.clientY-Oe.ly;Oe.lx=B.clientX,Oe.ly=B.clientY;let tt=Math.abs(Be)>=Math.abs(he)?-Be:-he;Oe.moved+=Math.abs(tt);let rt=performance.now(),Wo=tt/Mt;Oe.v=Oe.v*.6+Wo/Math.max(.008,(rt-Oe.lt)/1e3)*.4,Oe.lt=rt,Oe.moved>6&&K(Wo)});let nt=B=>{let he=Oe;if(Oe=null,!!he){if(Le.active){he.moved<10&&performance.now()-he.t<500?Le.tap():he.y-(B?B.clientY:he.ly)>30&&Le.swipe(1);return}he.moved<10&&performance.now()-he.t<500?Re(1):performance.now()-he.lt<120&&K(Math.max(-1.6,Math.min(1.6,he.v*.22)))}};s.addEventListener("pointerup",B=>{B.stopPropagation(),nt(B)}),s.addEventListener("pointercancel",()=>{Oe=null}),s.addEventListener("wheel",B=>{if(Le.active){if(B.target.closest(".conf-ui"))return;B.preventDefault(),Le.wheel(B.deltaY);return}if(B.target.closest(".tour-body")){let Be=B.target.closest(".tour-body"),tt=Be.scrollTop+Be.clientHeight>=Be.scrollHeight-2&&B.deltaY>0,rt=Be.scrollTop<=0&&B.deltaY<0;if(!tt&&!rt)return}B.preventDefault();let he=B.deltaMode===1?B.deltaY*16:B.deltaMode===2?B.deltaY*window.innerHeight:B.deltaY;K(he/Nt)},{passive:!1}),window.addEventListener("keydown",B=>{if(!uo||to||document.body.classList.contains("visiting"))return;if(Le.active){if(B.stopImmediatePropagation(),B.target&&/TEXTAREA|INPUT|BUTTON/.test(B.target.tagName))return;Le.key(B.key)&&B.preventDefault();return}let he=B.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(he)>=0){if((he==="Enter"||he===" ")&&B.target&&B.target.tagName==="BUTTON")return;B.preventDefault(),B.stopImmediatePropagation(),Re(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(he)>=0?(B.preventDefault(),B.stopImmediatePropagation(),Re(-1)):he==="Escape"?(B.preventDefault(),wt()):/^[wasdzq]$/i.test(he)&&B.stopImmediatePropagation()},!0),window.addEventListener("keyup",B=>{uo&&!to&&/^(Arrow|[wasdzq]$)/i.test(B.key)&&B.stopImmediatePropagation()},!0),f.addEventListener("click",B=>{B.stopPropagation(),wt()}),["mousedown","pointerdown"].forEach(B=>u.addEventListener(B,he=>he.stopPropagation())),u.addEventListener("click",B=>{B.stopPropagation(),Rt()});let bt=Yt([8.6,1.75,44.3],[-3,1.85,44.5],55,0),gt=null,ct=!1;function Rt(){if(!uo||to||Le.active||gt)return;Ca(),st=-2;let B=go.eye;if(B[0]>.5&&B[0]<13.5&&B[2]>36&&B[2]<50){ct=!1,Le.start(go,Wt);return}gt={t:0}}D.addEventListener("click",B=>{let he=B.target.closest("button");he&&(B.stopPropagation(),he.dataset.act==="free"&&wt(),he.dataset.act==="replay"&&Ut(),he.dataset.act==="list"&&Eu().show(!1),he.dataset.act==="confess"&&(Ca(),st=-2,Le.start(go,Wt)))});let pt=[null,[Kr.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Js[0]-7,0],[42.5+Js[1]-7,0],[42.5+Js[2]-7,0],[1e3,Math.PI/2],...ir.map(B=>[B.z-1.6,B.side==="left"?-Math.PI/2:Math.PI/2]),[j0[2]-1.6,Math.PI]],Ht=null,yt=0;function wt(){if(!uo||to||!xh)return;let B=pr(Tt),he=pt[B];Ht=B<=1?{phase:"home",pos:Qs.slice()}:B>=3&&B<=6?{phase:"floor",pos:Na.slice()}:B===11?{phase:"floor",pos:ml.slice()}:B===18?{phase:"floor",pos:j0.slice()}:null,yt=B>=12?1:0,he&&n.place&&n.place(he[0],he[1]),to={start:_,fromCam:go,fromLook:Object.assign({},Wt)},Ca(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Ut(){Tt=ge=0,dt=0,Lt=!1,st=-1,We=0,mo=0,So={phase:"home",pos:Qs.slice(),tumble:0},lt={start:_}}let lt={start:-1},oo=!1,_o=[],vt={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Co(B){ln+=B*(So.phase==="floor"?0:1);let he=So.tumble===void 0?0:So.tumble,Be=Ys.fromTranslation(_o,So.pos);if(So.phase==="home")Be=Ys.rotateY(Be,Be,2.2+Math.sin(ln*.9)*.15),Be=Ys.rotateZ(Be,Be,-1+Math.sin(ln*1.3)*.12),Be=Ys.rotateX(Be,Be,.4);else if(So.phase==="floor")Be=Ys.rotateY(Be,Be,.65),Be=Ys.rotateX(Be,Be,.16);else{let tt=So.pos;if(vt.prev&&B>0){let cr=[tt[0]-vt.prev[0],tt[1]-vt.prev[1],tt[2]-vt.prev[2]];if(Math.hypot(cr[0],cr[1],cr[2])<1.5){let cc=Math.min(1,B*6);for(let Q0=0;Q0<3;Q0++)vt.vel[Q0]+=(cr[Q0]/B-vt.vel[Q0])*cc}else vt.vel=[0,0,0]}vt.prev=tt.slice();let rt=vt.vel,Wo=Math.hypot(rt[0],rt[1],rt[2]),Vn=Ie(.25,1.4,Wo),vr=Ie(.5,2,-rt[1]),Vo=ln*.35*(.3+he)+.65,sr=[Math.cos(Vo),0,Math.sin(Vo)];Wo>.001&&(sr=Oo(sr,Sr(rt,-1/Wo),Vn));let Xo=Math.min(1,B*4);vt.axis=Oo(vt.axis,sr,vt.fresh?1:Xo);let ao=vt.axis,$n=Math.hypot(ao[0],ao[1],ao[2])||1;ao=Sr(ao,1/$n);let Fo=go.eye,An=[Fo[0]-tt[0],Fo[1]-tt[1],Fo[2]-tt[2]],Lr=Math.hypot(An[0],An[1],An[2])||1,zr=$e(.6,.22,Vn),Io=[An[0]/Lr*zr,1+An[1]/Lr*zr,An[2]/Lr*zr],Jr=ao[0]*Io[0]+ao[1]*Io[1]+ao[2]*Io[2];Io=ld(Io,Sr(ao,Jr));let fn=Math.hypot(Io[0],Io[1],Io[2])||1;Io=Sr(Io,1/fn);let ga=[ao[1]*Io[2]-ao[2]*Io[1],ao[2]*Io[0]-ao[0]*Io[2],ao[0]*Io[1]-ao[1]*Io[0]],xo=Math.hypot(rt[0],rt[2]),Yo=0;if(xo>.15&&vt.dir&&B>0){let cr=[rt[0]/xo,rt[2]/xo];Yo=(vt.dir[0]*cr[1]-vt.dir[1]*cr[0])/B,vt.dir=cr}else xo>.15&&(vt.dir=[rt[0]/xo,rt[2]/xo]);vt.bank+=(Math.max(-.8,Math.min(.8,Yo*.3))*Vn-vt.bank)*Math.min(1,B*3),vt.rock+=B*(1.5+2.4*Vn),vt.spin+=B*vr*7*(.4+he);let ea=Math.sin(vt.rock)*(.26+.45*he)*(1-.5*vr)+vt.bank+vt.spin,Y0=Math.sin(vt.rock*.63+1)*(.16+.3*he)+(So.swing||0)*.9,Pa=Math.cos(ea),K0=Math.sin(ea),Ml=eo(Sr(Io,Pa),Sr(ga,K0)),u0=eo(Sr(ga,Pa),Sr(Io,-K0));Pa=Math.cos(Y0),K0=Math.sin(Y0);let Ui=eo(Sr(ao,Pa),Sr(Ml,K0)),ic=eo(Sr(Ml,Pa),Sr(ao,-K0)),Ah=Math.sin(vt.rock+1.5708)*.035*(.3+he)*(1-.5*Vn),Va=eo(tt,Sr(ga,Ah)),sc=[Ui[0],Ui[1],Ui[2],0,ic[0],ic[1],ic[2],0,u0[0],u0[1],u0[2],0,Va[0],Va[1],Va[2],1];for(let cr=0;cr<16;cr++)Be[cr]=sc[cr];vt.fresh=!1}return So.phase!=="fly"&&(vt.prev=null,vt.vel=[0,0,0],vt.fresh=!0,vt.spin=0,vt.bank=0,vt.dir=null),{visible:!0,model:Be}}function Zr(B){for(let he in _h)Wt[he]=B[he]!==void 0?B[he]:_h[he]}function Wa(B,he){if(B<=1)return{phase:"home",pos:Qs.slice(),tumble:0};let Be=Py[B];if(Be){let tt=Be.amp;return{phase:"fly",pos:eo(Be.pos(),[Math.sin(he*.55)*tt[0],Math.sin(he*.8)*tt[1],(1-Math.cos(he*.45))*tt[2]]),tumble:Be.tumble}}return{phase:"floor",pos:(B>=18?j0:B>=10?ml:Na).slice(),tumble:0}}let Kt=0,so=null;function Sn(B){let he=Math.min(.1,Math.max(0,B-Kt));if(Kt=B,_=B,oo||(oo=!0,lt.start=B),to)return null;if(gt&&(gt.t+=he,gt.t>=.7&&(gt=null,ct=!0,Le.start(bt,Object.assign({},_h,{fade:1,fadeColor:[0,0,0]})))),Le.active){let xo=Le.update(he);return go=xo.camera,Zr(xo.look),o&&window.__camOverride&&(go=window.__camOverride),o&&window.__lookOverride&&Object.assign(Wt,window.__lookOverride),{camera:go,walker:null,door:1,look:Wt,leaf:Co(he)}}if(!Lt&&!Oe&&_-et>At){let xo=pr(ge);Math.abs(Ae[xo]-ge)<Zt&&(ge=Ae[xo])}let Be=ge-Tt;if(Lt){let Yo=Math.sign(Be)*Math.min(ko,Math.sqrt(2*Fn*Math.abs(Be)))-dt;dt+=Math.sign(Yo)*Math.min(Math.abs(Yo),Fn*he),Tt+=dt*he,(Be>0&&Tt>=ge||Be<0&&Tt<=ge||Math.abs(ge-Tt)<1e-4)&&(Tt=ge,dt=0,Lt=!1)}else{let xo=Z8(Tt,ge,dt,qt,he,3);Tt=xo[0],dt=xo[1],Math.abs(ge-Tt)<1e-4&&Math.abs(dt)<.001&&(Tt=ge,dt=0)}let tt=0;for(;tt<hd.length-1&&Tt>=Ae[tt+1];)tt++;let rt=hd[tt],Wo=$r((Tt-Ae[tt])/rt.dur),Vn=U0[tt],vr=U0[tt+1],Vo=pr(Tt);Vo!==We&&(We=Vo,mo=0);let sr=Math.abs(Tt-Ae[Vo])<.02;sr&&(mo+=he);let Xo=1-Ie(0,1.2,Math.abs(Tt-Ae[Vo])),ao=rt.leaf(Wo);if(ao.pos?So=Object.assign({},ao):So=Object.assign({},ao,{pos:ao.phase==="home"?Qs.slice():(tt>=10?ml:Na).slice()}),Py[Vo]&&Xo>0){let xo=Wa(Vo,mo);So.pos=Oo(So.pos,xo.pos,Xo)}let $n=rt.walker&&(Wo>.01||tt===6)?rt.walker(Wo):null;so=$n==null?null:{x:$n,z:ud,heading:Math.PI/2,phase:($n-Fy)/rE};let Fo=rt.cam(Wo,Vn.cam(0),vr.cam(0),So);if(Xo>0&&mo>0){let xo=U0[Vo],Yo=xo.cam(0),ea=xo.cam(mo);Fo=Yt(eo(Fo.eye,Sr(ld(ea.eye,Yo.eye),Xo)),eo(Fo.target,Sr(ld(ea.target,Yo.target),Xo)),Fo.fov+(ea.fov-Yo.fov)*Xo,Fo.roll+(ea.roll-Yo.roll)*Xo)}if(Xo>0&&!Xe){let xo=_,Yo=.006*Xo,ea=Math.sin(xo*.61)*.6+Math.sin(xo*1.37+1.3)*.4,Y0=Math.sin(xo*.47+2.1)*.6+Math.sin(xo*1.13+.4)*.4,Pa=Math.sin(xo*.53+4)*.5+Math.sin(xo*.97+2.6)*.5;Fo=Yt(eo(Fo.eye,[ea*Yo,Y0*Yo*.7,Pa*Yo]),eo(Fo.target,[Y0*Yo*1.8,ea*Yo*1.4,0]),Fo.fov,Fo.roll+Pa*.0012*Xo)}go=Fo;let An=bh(tt),Lr=bh(tt+1),zr=Object.assign({},An,rt.look(Wo,An,Lr,So,Fo.eye));if(Xo>0){let xo=bh(Vo);for(let Yo in xo)typeof xo[Yo]=="number"&&(zr[Yo]=$e(zr[Yo],xo[Yo],Xo))}Zr(zr);let Jr=sr&&Math.abs(ge-Tt)<.02?Vo:-1;Jr!==st&&(Jr>=0&&(Bi=_+St),st=Jr,Jr>=0?Gn(Jr):Ca()),h.querySelectorAll("i").forEach((xo,Yo)=>xo.classList.toggle("on",Yo===Vo));let fn=st>=0?Y[st]:null;fn&&fn.fill&&!fn.filled&&(fn.fill(),fn.filled&&(fn.classList.remove("on"),fn.offsetWidth,fn.classList.add("on")));let ga=$r((B-lt.start)/2.6);return ga<1&&(Wt.fade=Math.max(Wt.fade,1-Ie(0,1,ga)),Wt.fadeColor=[0,0,0]),o&&window.__camOverride&&(go=window.__camOverride),o&&window.__lookOverride&&Object.assign(Wt,window.__lookOverride),{camera:go,walker:so,door:rt.door?rt.door(Wo):tt>=12?1:0,look:gt?Object.assign(Wt,{fade:Math.max(Wt.fade||0,$r(gt.t/.6)),fadeColor:[0,0,0]}):Wt,leaf:Co(he)}}return o&&(window.__tour={go:Re,exit:wt,wind:K,confess(){Ca(),st=-2,Le.start(go,Wt)},note:()=>Rt(),conf:Le,paper:dh().STATE,seek(B,he){Tt=ge=Ae[B]+(Ae[B+1]-Ae[B])*he,dt=0,Lt=!1,et=_+1e6,lt.start=_-10,oo=!0},jump(B){Tt=ge=Ae[B],dt=0,Lt=!1,mo=0,et=_,lt.start=_-10,oo=!0},state:()=>({current:pr(Tt),scroll:+Tt.toFixed(3),target:+ge.toFixed(3),shown:st,move:Math.abs(ge-Tt)>.02?{p:Tt}:null,camNow:go,leaf:So,look:Wt})}),{update:Sn,get active(){return uo&&!to},handover(B){if(!to)return null;let he=$r((B-to.start)/1.8);return he>=1?(uo=!1,null):{from:to.fromCam,fromLook:to.fromLook,k:sn(he)}},restingDoor:()=>yt,restingLeaf(){return Ht?(So=Ht,Co(0)):null},mix:$i,cam:Yt}}});var dE=Tv(),Ra=na(),Ld=Eu(),Sh=Ra.reflection,pE=!1,tb=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),zd=()=>tb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(zd=()=>tb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var ob=()=>2*Math.atan(Math.tan(zd()*.5)*window.innerHeight/window.innerWidth),vE=qv(),bl=new vE;bl.showPanel(0);pE&&document.body.appendChild(bl.dom);var cn,ac,_d,nc,Md,tn;function mE(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!mE())throw dE.finish(),Ld.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");cn=Hv()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Ra.pixelRatio});location.hash==="#list"&&Ld.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Ld.show(!1)});ac=Tm()();var gE=o1();_d=gE(cn,ac,Sh);nc=X2()(cn,ac);Md=Z2()(cn);var Dy=ig()(cn,ac),qy=gg()(cn),Hy=bg()(cn),By=Fg()(cn),Uy=Hg()(cn),jy=Vg()(cn),V0=cx()(cn),kd=R1(),nb=nf(),xE=zc(),Ed=P1(),Sd=nr(),dr=Of(),Ad=xx(),rb=eh(),{A:oc}=ia();tn=ey()(ac,ob);var rc=oy()(cn,Ra),W0=sy()(cn),Wy=ly()(cn),yE=uy()(cn,Ra),bE=xy()(cn,Ra),Vy=M0()(cn),Xy=dh()(cn),Yy=S0()(cn),ja=$y()({fps:tn,paintings:()=>nc.interactables(),avatar:V0,onExit:()=>tn.setPaused(!1)});tn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=rc);var Di=[],_l=[],va=[7,2,1.6];ac.viewer=va;var wE=cn({cull:{enable:!0,face:"back"},uniforms:{view:()=>Di,proj:()=>_l,yScale:1,mirrorOn:()=>Sh?1:0,night:()=>Sd.night,time:cn.context("time")}}),_E=cn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),ab=document.createElement("style");ab.textContent=`

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
`;document.head.appendChild(ab);var ma=document.createElement("button");ma.className="painting-plaque";ma.type="button";ma.setAttribute("aria-label","Read painting");document.body.appendChild(ma);var Tr=document.createElement("div");Tr.className="story-overlay";Tr.innerHTML=`

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
`;document.body.appendChild(Tr);var X0=document.createElement("div");X0.className="museum-links";X0.innerHTML=nb.icons("museum-link");X0.insertBefore(nd()("museum-link"),X0.firstChild);X0.insertBefore(rb.button("museum-link"),X0.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>X0.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(X0);var ME=Tr.querySelector("#story-title"),kE=Tr.querySelector("#story-body"),Ky=Tr.querySelector("#story-meta"),EE=Tr.querySelector(".story-contact"),yl=Tr.querySelector(".story-visit");yl.addEventListener("click",e=>{e.target.closest(".visit-btn")&&Hi&&Ed.open(Hi)});var SE=Tr.querySelector(".story-close"),Hi=null,Dr={p:0,target:0,last:0},ib={title:kd.title,description:kd.text,isAbout:!0},f0=null;function Nd(e){e&&(Hi=e,ME.textContent=e.title||"",kE.textContent=e.description||"",Ky.textContent=e.isAbout?"":xE(e),Ky.hidden=!!e.isAbout,EE.hidden=!e.isAbout,yl.innerHTML=e.isAbout?"":Ed.button(e),yl.hidden=!yl.innerHTML,yl.hidden||Ed.warm(e),Tr.classList.toggle("about-mode",!!e.isAbout),Tr.classList.add("open"),Dr.target=e.isAbout?1:0,f0=e,ma.classList.remove("visible"),tn.setPaused(!0))}function Rd(){Tr.classList.remove("open"),Dr.target=0,Hi=null,f0=null,tn.setPaused(!1)}function sb(e){e&&(e.preventDefault(),e.stopPropagation()),f0&&Nd(f0)}ma.addEventListener("pointerup",sb,!0);ma.addEventListener("touchend",sb,{passive:!1,capture:!0});ma.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),Hi===null&&f0&&Nd(f0)},!0);SE.addEventListener("click",Rd);Tr.addEventListener("click",e=>{e.target===Tr&&Rd()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Tr.classList.contains("open")&&Rd()});function Qy(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function AE(){if(Hi)return;if(ja.active){f0=null,ma.classList.remove("visible");return}let e=nc.interactables(),t=tn.forward[0],o=tn.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let l=s[0]-tn.pos[0],u=s[2]-tn.pos[2],h=-(l*c+u*f),d=Math.abs(l*f-u*c),p=-(t*c+o*f)/n,v=i.side==="end"?11:8,m=(i.width||2)/2;p>.9&&h>.5&&h<v&&d<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=tn.pos[0],s=tn.pos[2];t/n>.85&&i<13.6&&s>oc.z0-.5&&s<oc.z1+.5&&(r=Object.assign({},ib,{plaqueTitle:kd.name}))}r?(f0=r,ma.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,ma.classList.add("visible")):(f0=null,ma.classList.remove("visible"))}var Cd=Ls();function TE(){let e=V0.state;if(!e||!e.glowPos)return null;let t=Qy(tn.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=Qy(tn.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Td=null;window.addEventListener("pointerdown",e=>{Td={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Td;if(Td=null,!t||Hi||ja.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=TE();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),Nd(ib))},!0);function LE(e){let t=Math.min(Math.max(e-Dr.last,0),.1);Dr.last=e;let o=t/1.6;if(Dr.p=Dr.target>Dr.p?Math.min(1,Dr.p+o):Math.max(0,Dr.p-o),Dr.p<=0)return;let n=Dr.p<.5?2*Dr.p*Dr.p:1-Math.pow(-2*Dr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=V0.state,i=a&&a.hipsPos?a.hipsPos[0]:oc.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:oc.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=tn.pos,u=tn.forward,h=[l[0],l[1],l[2]],d=[l[0]+u[0],l[1]+u[1],l[2]+u[2]],p=(y,b)=>y.map((k,E)=>k+(b[E]-k)*n),v=[oc.cx-6.2,1.7,oc.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*v[b]+n*n*c[b]);Cd.lookAt(tn.view(),g,p(d,f),[0,1,0])}var ec={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},qi=null,wl=!1,kh=!1;function zE(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Cd.lookAt(e,t,o,[i[0]*f,c,i[2]*f])}function NE(e){let t=window.innerWidth/window.innerHeight,o=rc.shot,n=ja.active?ja.update(e):null,r=n?null:ja.handover(e),a=null,i=ec;if(n){a=n.camera,i=n.look,qi=n.leaf;let s=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;V0.setWalk(s),wl=!!s,W0.setOpen(n.door||0)}else qi=ja.restingLeaf(),V0.setWalk(null),wl=!1,W0.setOpen(ja.restingDoor());if(r){let s=tn.pos,c=tn.forward,f=ja.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],ob()*180/Math.PI,0);a=ja.mix(r.from,f,r.k),i={};for(let l in ec)i[l]=Array.isArray(ec[l])?ec[l]:r.fromLook[l]+(ec[l]-r.fromLook[l])*r.k}if(a&&n&&(a=Ad.apply(a,e)),a)zE(Di,a.eye,a.target,a.roll||0),Cd.perspective(_l,a.fov*Math.PI/180,t,.1,700),va[0]=a.eye[0],va[1]=a.eye[1],va[2]=a.eye[2];else{let s=tn.view(),c=tn.proj();for(let h=0;h<16;h++)Di[h]=s[h],_l[h]=c[h];let f=s[12],l=s[13],u=s[14];va[0]=-(s[0]*f+s[1]*l+s[2]*u),va[1]=-(s[4]*f+s[5]*l+s[6]*u),va[2]=-(s[8]*f+s[9]*l+s[10]*u)}for(let s in ec)o[s]=i[s];n&&Ad.pull(o,e)}var Qr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},yd=[9,9,9,9],Zy=[0,0,0,0],gl=0,bd=0,tc=null,Jy=0,eb=0,xl=0;function RE(e){let t=Math.min(.1,Math.max(0,e-Jy));Jy=e,Qr.focus=rc.shot.focus,Qr.aperture=Ra.post>=2?rc.shot.aperture:0;for(let i=0;i<4;i++)yd[i]+=t,Qr.wake[i][3]=Zy[i]*Math.exp(-yd[i]/1.1);let o=qi&&qi.visible?qi.model:null;if(o&&t>0){let i=[o[12],o[13],o[14]];if(tc){let s=[i[0]-tc[0],i[1]-tc[1],i[2]-tc[2]],c=Math.hypot(s[0],s[1],s[2]),f=c/t;if(c<1.5&&f>.12){let l=Math.min(1,t*8);for(let h=0;h<3;h++)Qr.wakeDir[h]+=(s[h]/c-Qr.wakeDir[h])*l;let u=Math.hypot(Qr.wakeDir[0],Qr.wakeDir[1],Qr.wakeDir[2])||1;for(let h=0;h<3;h++)Qr.wakeDir[h]/=u;if(bd+=t,bd>.14){bd=0;let h=Qr.wake[gl];h[0]=i[0],h[1]=i[1],h[2]=i[2],Zy[gl]=Math.min(1,(f-.12)/1.6)*.5,yd[gl]=0,gl=(gl+1)%4}}}tc=i}else o||(tc=null);let n=W0.openNow?W0.openNow():0,r=t>0?(n-eb)/t:0;eb=n;let a=Math.max(-1,Math.min(1,r*1.2));xl+=(a-xl)*Math.min(1,t*(Math.abs(a)>Math.abs(xl)?6:.7)),Qr.gust[0]+=xl*5.5*t,Qr.gust[1]=Math.abs(xl)}var wd=0,Eh=!1;cn.frame(function({time:e}){if(document.body.classList.contains("visiting")){wd=0;return}bl.begin(),Sd.tick(e);let t=ja.active&&Ad.resting&&Sd.settled&&(Ra.isPhone||Ra.scale<1||Ra.level>0);if(t){if(Eh=!Eh,Eh){bl.end();return}}else Eh=!1;let o=e-wd;wd=e,Ra.frame(t?o/2:o),Sh=Ra.reflection,tn.tick({time:e}),LE(e),nc.update(tn.pos,tn.fmouse[1],zd()),AE(),NE(e),dr.update(Di,_l,va),rb.listen(va),kh=!wl&&dr.room("stair")&&(!dr.room("court")||va[0]<.5||va[2]>30),V0.setPiano(kh),RE(e),rc.capture(arguments[0],{view:Di,proj:_l,eye:va},()=>{wE(()=>{Sh&&dr.floor&&_E(()=>{_d(),Dy({reflected:!0}),Vy(),dr.room("stair",!0)&&(Yy({reflected:!0}),Xy({reflected:!0,view:Di})),dr.room("court",!0)&&jy(),(kh||dr.room("court",!0)||wl)&&V0(),Md(nc.batch()),dr.room("street",!0)&&qy(),dr.room("garden",!0)&&By(),dr.room("florence",!0)&&Uy(),Wy(qi),W0(),Hy(),W0.glass()}),_d(),Dy(),Vy(),dr.room("stair")&&(Yy(),Xy({view:Di})),dr.room("court")&&jy(),(kh||dr.room("court")||wl)&&V0(),Md(nc.batch()),dr.room("street")&&qy(),dr.room("garden")&&(By(),bE()),dr.room("florence")&&Uy(),Wy(qi),W0(),yE(Qr),Hy(),W0.glass()})}),rc.present(),bl.end()});})();
