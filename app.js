"use strict";(()=>{var ve=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Sv=ve((Pk,kv)=>{"use strict";var os=document.getElementById("loader"),ts=os&&os.querySelector(".loader-name"),bc=0,Xl=0,Yl=!1,Sw=performance.now(),ns=.06,es=0,xu=0,bv=!1,Aw=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Tw(e){if(!ts)return;let t=ts.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";ts.style.webkitMaskPosition=n,ts.style.maskPosition=n}function Mv(e){let t=Math.min(.05,xu?(e-xu)/1e3:.016);xu=e;let o=Yl?.75:.22+(ns-es)*1.2;if(es=Math.min(ns,es+Math.max(0,o)*t),Aw&&(es=ns),Tw(es),Yl&&es>=.999){bv||(bv=!0,setTimeout(Ev,650));return}requestAnimationFrame(Mv)}ts&&requestAnimationFrame(Mv);function wv(){let e=bc?Xl/Math.max(bc,24):0;ns=Math.max(ns,Math.min(.9,.06+e*.84))}function Ev(){os&&(os.classList.add("done"),setTimeout(()=>os.remove(),1400))}function yu(){Yl||(Yl=!0,window.__galleryReady=!0,os&&(ns=1,ts||Ev()))}var _v=null;function Lw(){clearTimeout(_v),Xl>=bc&&performance.now()-Sw>600&&(_v=setTimeout(()=>{Xl>=bc&&yu()},450))}setTimeout(yu,2e4);var zw=e=>/(^|\/)(res|images)\//.test(e),Vl=window.fetch.bind(window);async function Nw(e,t){let o=await Vl(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!zw(o))return Vl(e,t);bc++,wv();let n=a=>(Xl++,wv(),Lw(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=Nw(o,t).catch(()=>Vl(e,t)):r=Vl(e,t),r.then(n,a=>{throw n(),a})};kv.exports={finish:yu}});var Zr=ve((Ik,zv)=>{"use strict";var Av=typeof navigator!="undefined"&&navigator.userAgent||"",Rw=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Wa=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Av)||/Macintosh/.test(Av)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||Rw,Tv=typeof window!="undefined"&&window.devicePixelRatio||1,po={isPhone:Wa,pixelRatio:Wa?Math.min(Tv,1.5):Math.min(Tv,2),reflection:!Wa,gardenDetail:Wa?0:1,leafShare:Wa?.65:1,motion:!Wa,post:Wa?1:2,level:Wa?1:0};po.scale=1;var Cw=Wa?.55:.6,wc=0,Kl=0,_c=0,Mc=0,rs=1,Ec=0,Ql=48,as=null,bu=0;function Pw(e){as={fps:e,scale:po.scale},po.scale>.86?po.scale=.85:po.reflection?po.stepDown():po.scale>.71?po.scale=.7:po.stepDown()||(po.scale=Math.max(Cw,po.scale-.1))}var Lv=!0;try{/[?&]noadapt\b/.test(location.search)&&(Lv=!1)}catch(e){}po.frame=e=>{if(!Lv)return;if(!(e>0)||e>1){wc=0,Kl=0;return}if(wc+=e,Kl++,wc<.75)return;let t=Kl/wc;if(wc=0,Kl=0,Ec>0&&(Ec-=.75,Ec<=0&&(rs=1)),as){if(t<as.fps*1.08&&as.scale>po.scale){if(++bu>=2){po.scale=1,rs=1,Ec=0,Ql=Math.min(Ql,t*.85),bu=0,_c=0,as=null;return}}else bu=0;as=null}if(t<Ql){if(Mc=0,++_c>=2){if(_c=0,po.scale>.61&&po.climbed){rs=po.scale-.05,Ec=40,po.scale=rs,po.climbed=!1;return}Pw(t)}}else t>Math.max(Ql*1.15,55)?(_c=0,++Mc>=6&&po.scale<rs-.001?(po.scale=Math.min(rs,po.scale+.05),po.climbed=!0,Mc=0):Mc>=6&&(po.climbed=!1)):(_c=0,Mc=0)};po.stepDown=()=>{if(po.reflection)po.reflection=!1;else if(po.gardenDetail>0||po.motion)po.gardenDetail=0,po.motion=!1,po.leafShare=Math.min(po.leafShare,.65);else if(po.post>0)po.post--;else return!1;return po.level++,!0};zv.exports=po});var wu=ve((Ok,Nv)=>{"use strict";Nv.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Zl=ve((Fk,Pv)=>{"use strict";var vr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Rv='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Cv='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';vr.instagramUrl="https://instagram.com/"+vr.instagram;vr.mailUrl="mailto:"+vr.email+"?subject="+encodeURIComponent("Your paintings");vr.icons=e=>`
	<a class="${e}" href="${vr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${vr.instagram}" title="Instagram">${Rv}</a>
	<a class="${e}" href="${vr.mailUrl}" aria-label="Email ${vr.email}" title="Email">${Cv}</a>`;vr.line=e=>`
	<span class="${e}">
		<a href="${vr.instagramUrl}" target="_blank" rel="noopener">${Rv}<span>@${vr.instagram}</span></a>
		<a href="${vr.mailUrl}">${Cv}<span>${vr.email}</span></a>
	</span>`;Pv.exports=vr});var kc=ve(($k,Iv)=>{"use strict";Iv.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var _u=ve((Gk,$v)=>{"use strict";var Iw=wu(),Ow=Zl(),Ov=kc(),Fw=Zr(),ui=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),$w=`
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
`,mr=null;function Gw(e){if(mr){mr.hidden=!1,requestAnimationFrame(()=>mr.classList.add("on"));return}let t=document.createElement("style");t.textContent=$w,document.head.appendChild(t);let o=!Fw.isPhone;mr=document.createElement("div"),mr.className="plist",mr.setAttribute("role","region"),mr.setAttribute("aria-label","All paintings"),mr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${Ow.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${Iw.map(r=>`
			<article class="plist-item" id="${ui(r.slug)}">
				<img loading="lazy" decoding="async" alt="${ui(r.title)}, ${ui(Ov(r))}"
					src="images/web/${ui(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${ui(r.file)}'">
				<p class="plist-meta">${ui(Ov(r))}</p>
				<h2>${ui(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${ui(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>mr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=mr.querySelector(".plist-close");n&&n.addEventListener("click",Fv),document.body.appendChild(mr),requestAnimationFrame(()=>mr.classList.add("on"))}function Fv(){mr&&(mr.classList.remove("on"),setTimeout(()=>{mr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}$v.exports={show:Gw,hide:Fv}});var Gv=ve((Mu,Eu)=>{(function(e,t){typeof Mu=="object"&&typeof Eu!="undefined"?Eu.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Mu,function(){var e=function(){function t(u){return r.appendChild(u.dom),u}function o(u){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===u?"block":"none";n=u}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(u){u.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var u=(performance||Date).now();if(f.update(u-a,200),u>i+1e3&&(c.update(1e3*s/(u-i),100),i=u,s=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,l=3*s,u=2*s,h=3*s,d=15*s,p=74*s,v=30*s,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(t,l,u),g.fillRect(h,d,p,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,d,p,v),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,d),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",l,u),g.drawImage(m,h+s,d,p-s,v,h,d,p-s,v),g.fillRect(h+p-s,d,s,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+p-s,d,s,i((1-y/b)*v))}}},e})});var Dv=ve((ku,Su)=>{(function(e,t){typeof ku=="object"&&typeof Su!="undefined"?Su.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(ku,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,E){for(var R=Object.keys(E),K=0;K<R.length;++K)x[R[K]]=E[R[K]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var E=new Error("(regl) "+x);throw console.error(E),E}function a(x,E){x||r(E)}function i(x){return x?": "+x:""}function s(x,E,R){x in E||r("unknown parameter ("+x+")"+i(R)+". possible values: "+Object.keys(E).join())}function c(x,E){e(x)||r("invalid parameter type"+i(E)+". must be a typed array")}function f(x,E){switch(E){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,E,R){f(x,E)||r("invalid parameter type"+i(R)+". expected "+E+", got "+typeof x)}function u(x,E){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(E)+". must be a nonnegative integer")}function h(x,E,R){E.indexOf(x)<0&&r("invalid value"+i(R)+". must be one of: "+E)}var d=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function p(x){Object.keys(x).forEach(function(E){d.indexOf(E)<0&&r('invalid regl constructor argument "'+E+'". must be one of '+d)})}function v(x,E){for(x=x+"";x.length<E;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,E){this.number=x,this.line=E,this.errors=[]}function y(x,E,R){this.file=x,this.line=E,this.message=R}function b(){var x=new Error,E=(x.stack||x).toString(),R=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(E);if(R)return R[1];var K=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(E);return K?K[1]:"unknown"}function M(){var x=new Error,E=(x.stack||x).toString(),R=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(E);if(R)return R[1];var K=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(E);return K?K[1]:"unknown"}function k(x,E){var R=x.split(`
`),K=1,le=0,X={unknown:new m,0:new m};X.unknown.name=X[0].name=E||b(),X.unknown.lines.push(new g(0,""));for(var te=0;te<R.length;++te){var ge=R[te],be=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(ge);if(be)switch(be[1]){case"line":var Ee=/(\d+)(\s+\d+)?/.exec(be[2]);Ee&&(K=Ee[1]|0,Ee[2]&&(le=Ee[2]|0,le in X||(X[le]=new m)));break;case"define":var we=/SHADER_NAME(_B64)?\s+(.*)$/.exec(be[2]);we&&(X[le].name=we[1]?n(we[2]):we[2]);break}X[le].lines.push(new g(K++,ge))}return Object.keys(X).forEach(function(Se){var Re=X[Se];Re.lines.forEach(function(xe){Re.index[xe.number]=xe})}),X}function z(x){var E=[];return x.split(`
`).forEach(function(R){if(!(R.length<5)){var K=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(R);K?E.push(new y(K[1]|0,K[2]|0,K[3].trim())):R.length>0&&E.push(new y("unknown",0,R))}}),E}function N(x,E){E.forEach(function(R){var K=x[R.file];if(K){var le=K.index[R.line];if(le){le.errors.push(R),K.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(R)})}function q(x,E,R,K,le){if(!x.getShaderParameter(E,x.COMPILE_STATUS)){var X=x.getShaderInfoLog(E),te=K===x.FRAGMENT_SHADER?"fragment":"vertex";Qe(R,"string",te+" shader source must be a string",le);var ge=k(R,le),be=z(X);N(ge,be),Object.keys(ge).forEach(function(Ee){var we=ge[Ee];if(!we.hasErrors)return;var Se=[""],Re=[""];function xe(Te,j){Se.push(Te),Re.push(j||"")}xe("file number "+Ee+": "+we.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),we.lines.forEach(function(Te){if(Te.errors.length>0){xe(v(Te.number,4)+"|  ","background-color:yellow; font-weight:bold"),xe(Te.line+o,"color:red; background-color:yellow; font-weight:bold");var j=0;Te.errors.forEach(function(oe){var Me=oe.message,Fe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Me);if(Fe){var ue=Fe[1];switch(Me=Fe[2],ue){case"assign":ue="=";break}j=Math.max(Te.line.indexOf(ue,j),0)}else j=0;xe(v("| ",6)),xe(v("^^^",j+3)+o,"font-weight:bold"),xe(v("| ",6)),xe(Me+o,"font-weight:bold")}),xe(v("| ",6)+o)}else xe(v(Te.number,4)+"|  "),xe(Te.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Re[0]=Se.join("%c"),console.log.apply(console,Re)):console.log(Se.join(""))}),a.raise("Error compiling "+te+" shader, "+ge[0].name)}}function D(x,E,R,K,le){if(!x.getProgramParameter(E,x.LINK_STATUS)){var X=x.getProgramInfoLog(E),te=k(R,le),ge=k(K,le),be='Error linking program with vertex shader, "'+ge[0].name+'", and fragment shader "'+te[0].name+'"';typeof document!="undefined"?console.log("%c"+be+o+"%c"+X,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(be+o+X),a.raise(be)}}function ne(x){x._commandRef=b()}function O(x,E,R,K){ne(x);function le(be){return be?K.id(be):0}x._fragId=le(x.static.frag),x._vertId=le(x.static.vert);function X(be,Ee){Object.keys(Ee).forEach(function(we){be[K.id(we)]=!0})}var te=x._uniformSet={};X(te,E.static),X(te,E.dynamic);var ge=x._attributeSet={};X(ge,R.static),X(ge,R.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function re(x,E){var R=M();r(x+" in command "+(E||b())+(R==="unknown"?"":" called from "+R))}function J(x,E,R){x||re(E,R||b())}function ee(x,E,R,K){x in E||re("unknown parameter ("+x+")"+i(R)+". possible values: "+Object.keys(E).join(),K||b())}function Qe(x,E,R,K){f(x,E)||re("invalid parameter type"+i(R)+". expected "+E+", got "+typeof x,K||b())}function He(x){x()}function de(x,E,R){x.texture?h(x.texture._texture.internalformat,E,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,R,"unsupported renderbuffer format for attachment")}var ie=33071,ot=9728,ht=9984,Ft=9985,Tt=9986,mo=9987,gt=5120,Vt=5121,qo=5122,ur=5123,Xe=5124,xt=5125,Rt=5126,pt=32819,ut=32820,Qt=33635,tt=34042,Ae=36193,Pe={};Pe[gt]=Pe[Vt]=1,Pe[qo]=Pe[ur]=Pe[Ae]=Pe[Qt]=Pe[pt]=Pe[ut]=2,Pe[Xe]=Pe[xt]=Pe[Rt]=Pe[tt]=4;function Mt(x,E){return x===ut||x===pt||x===Qt?2:x===tt?4:Pe[x]*E}function lt(x){return!(x&x-1)&&!!x}function rt(x,E,R){var K,le=E.width,X=E.height,te=E.channels;a(le>0&&le<=R.maxTextureSize&&X>0&&X<=R.maxTextureSize,"invalid texture shape"),(x.wrapS!==ie||x.wrapT!==ie)&&a(lt(le)&&lt(X),"incompatible wrap mode for texture, both width and height must be power of 2"),E.mipmask===1?le!==1&&X!==1&&a(x.minFilter!==ht&&x.minFilter!==Tt&&x.minFilter!==Ft&&x.minFilter!==mo,"min filter requires mipmap"):(a(lt(le)&&lt(X),"texture must be a square power of 2 to support mipmapping"),a(E.mipmask===(le<<1)-1,"missing or incomplete mipmap data")),E.type===Rt&&(R.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===ot&&x.magFilter===ot,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var ge=E.images;for(K=0;K<16;++K)if(ge[K]){var be=le>>K,Ee=X>>K;a(E.mipmask&1<<K,"missing mipmap data");var we=ge[K];if(a(we.width===be&&we.height===Ee,"invalid shape for mip images"),a(we.format===E.format&&we.internalformat===E.internalformat&&we.type===E.type,"incompatible type for mip image"),!we.compressed)if(we.data){var Se=Math.ceil(Mt(we.type,te)*be/we.unpackAlignment)*we.unpackAlignment;a(we.data.byteLength===Se*Ee,"invalid data for image, buffer size is inconsistent with image format")}else we.element||we.copy}else x.genMipmaps||a((E.mipmask&1<<K)===0,"extra mipmap data");E.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function Xt(x,E,R,K){var le=x.width,X=x.height,te=x.channels;a(le>0&&le<=K.maxTextureSize&&X>0&&X<=K.maxTextureSize,"invalid texture shape"),a(le===X,"cube map must be square"),a(E.wrapS===ie&&E.wrapT===ie,"wrap mode not supported by cube map");for(var ge=0;ge<R.length;++ge){var be=R[ge];a(be.width===le&&be.height===X,"inconsistent cube map face shape"),E.genMipmaps&&(a(!be.compressed,"can not generate mipmap for compressed textures"),a(be.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Ee=be.images,we=0;we<16;++we){var Se=Ee[we];if(Se){var Re=le>>we,xe=X>>we;a(be.mipmask&1<<we,"missing mipmap data"),a(Se.width===Re&&Se.height===xe,"invalid shape for mip images"),a(Se.format===x.format&&Se.internalformat===x.internalformat&&Se.type===x.type,"incompatible type for mip image"),Se.compressed||(Se.data?a(Se.data.byteLength===Re*xe*Math.max(Mt(Se.type,te),Se.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Se.element||Se.copy)}}}}var _=t(a,{optional:He,raise:r,commandRaise:re,command:J,parameter:s,commandParameter:ee,constructor:p,type:l,commandType:Qe,isTypedArray:c,nni:u,oneOf:h,shaderError:q,linkError:D,callSite:M,saveCommandRef:ne,saveDrawInfo:O,framebufferFormat:de,guessCommand:b,texture2D:rt,textureCube:Xt}),Zt=0,Jt=0,W=5,Ze=6;function Ve(x,E){this.id=Zt++,this.type=x,this.data=E}function yt(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Et(x){if(x.length===0)return[];var E=x.charAt(0),R=x.charAt(x.length-1);if(x.length>1&&E===R&&(E==='"'||E==="'"))return['"'+yt(x.substr(1,x.length-2))+'"'];var K=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(K)return Et(x.substr(0,K.index)).concat(Et(K[1])).concat(Et(x.substr(K.index+K[0].length)));var le=x.split(".");if(le.length===1)return['"'+yt(x)+'"'];for(var X=[],te=0;te<le.length;++te)X=X.concat(Et(le[te]));return X}function Yt(x){return"["+Et(x).join("][")+"]"}function lo(x,E){return new Ve(x,Yt(E+""))}function eo(x){return typeof x=="function"&&!x._reglType||x instanceof Ve}function oo(x,E){if(typeof x=="function")return new Ve(Jt,x);if(typeof x=="number"||typeof x=="boolean")return new Ve(W,x);if(Array.isArray(x))return new Ve(Ze,x.map((R,K)=>oo(R,E+"["+K+"]")));if(x instanceof Ve)return x;_(!1,"invalid option type in uniform "+E)}var Ye={DynamicVariable:Ve,define:lo,isDynamic:eo,unbox:oo,accessor:Yt},ro={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},bt=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Lt(){var x={"":0},E=[""];return{id:function(R){var K=x[R];return K||(K=x[R]=E.length,E.push(R),K)},str:function(R){return E[R]}}}function Ro(x,E,R){var K=document.createElement("canvas");t(K.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(K),x===document.body&&(K.style.position="absolute",t(x.style,{margin:0,padding:0}));function le(){var ge=window.innerWidth,be=window.innerHeight;if(x!==document.body){var Ee=x.getBoundingClientRect();ge=Ee.right-Ee.left,be=Ee.bottom-Ee.top}K.width=R*ge,K.height=R*be,t(K.style,{width:ge+"px",height:be+"px"})}var X;x!==document.body&&typeof ResizeObserver=="function"?(X=new ResizeObserver(function(){setTimeout(le)}),X.observe(x)):window.addEventListener("resize",le,!1);function te(){X?X.disconnect():window.removeEventListener("resize",le),x.removeChild(K)}return le(),{canvas:K,onDestroy:te}}function Ct(x,E){function R(K){try{return x.getContext(K,E)}catch(le){return null}}return R("webgl")||R("experimental-webgl")||R("webgl-experimental")}function no(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function Mo(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function Eo(x){return typeof x=="string"?x.split():(_(Array.isArray(x),"invalid extension array"),x)}function ko(x){return typeof x=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function pa(x){var E=x||{},R,K,le,X,te={},ge=[],be=[],Ee=typeof window=="undefined"?1:window.devicePixelRatio,we=!1,Se=function(Te){Te&&_.raise(Te)},Re=function(){};if(typeof E=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),R=document.querySelector(E),_(R,"invalid query string for element")):typeof E=="object"?no(E)?R=E:Mo(E)?(X=E,le=X.canvas):(_.constructor(E),"gl"in E?X=E.gl:"canvas"in E?le=ko(E.canvas):"container"in E&&(K=ko(E.container)),"attributes"in E&&(te=E.attributes,_.type(te,"object","invalid context attributes")),"extensions"in E&&(ge=Eo(E.extensions)),"optionalExtensions"in E&&(be=Eo(E.optionalExtensions)),"onDone"in E&&(_.type(E.onDone,"function","invalid or missing onDone callback"),Se=E.onDone),"profile"in E&&(we=!!E.profile),"pixelRatio"in E&&(Ee=+E.pixelRatio,_(Ee>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),R&&(R.nodeName.toLowerCase()==="canvas"?le=R:K=R),!X){if(!le){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var xe=Ro(K||document.body,Se,Ee);if(!xe)return null;le=xe.canvas,Re=xe.onDestroy}te.premultipliedAlpha===void 0&&(te.premultipliedAlpha=!0),X=Ct(le,te)}return X?{gl:X,canvas:le,container:K,extensions:ge,optionalExtensions:be,pixelRatio:Ee,profile:we,onDone:Se,onDestroy:Re}:(Re(),Se("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function to(x,E){var R={};function K(te){_.type(te,"string","extension name must be string");var ge=te.toLowerCase(),be;try{be=R[ge]=x.getExtension(ge)}catch(Ee){}return!!be}for(var le=0;le<E.extensions.length;++le){var X=E.extensions[le];if(!K(X))return E.onDestroy(),E.onDone('"'+X+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return E.optionalExtensions.forEach(K),{extensions:R,restore:function(){Object.keys(R).forEach(function(te){if(R[te]&&!K(te))throw new Error("(regl): error restoring extension "+te)})}}}function vt(x,E){for(var R=Array(x),K=0;K<x;++K)R[K]=E(K);return R}var fo=5120,Pn=5121,jn=5122,xn=5123,Co=5124,Q=5125,ce=5126;function at(x){for(var E=16;E<=1<<28;E*=16)if(x<=E)return E;return 0}function it(x){var E,R;return E=(x>65535)<<4,x>>>=E,R=(x>255)<<3,x>>>=R,E|=R,R=(x>15)<<2,x>>>=R,E|=R,R=(x>3)<<1,x>>>=R,E|=R,E|x>>1}function zt(){var x=vt(8,function(){return[]});function E(X){var te=at(X),ge=x[it(te)>>2];return ge.length>0?ge.pop():new ArrayBuffer(te)}function R(X){x[it(X.byteLength)>>2].push(X)}function K(X,te){var ge=null;switch(X){case fo:ge=new Int8Array(E(te),0,te);break;case Pn:ge=new Uint8Array(E(te),0,te);break;case jn:ge=new Int16Array(E(2*te),0,te);break;case xn:ge=new Uint16Array(E(2*te),0,te);break;case Co:ge=new Int32Array(E(4*te),0,te);break;case Q:ge=new Uint32Array(E(4*te),0,te);break;case ce:ge=new Float32Array(E(4*te),0,te);break;default:return null}return ge.length!==te?ge.subarray(0,te):ge}function le(X){R(X.buffer)}return{alloc:E,free:R,allocType:K,freeType:le}}var $t=zt();$t.zero=zt();var Bn=3408,Pr=3410,yn=3411,Sr=3412,Ho=3413,ao=3414,In=3415,jo=33901,Jn=33902,Vr=3379,va=3386,Io=34921,Xr=36347,ln=36348,ma=35661,go=35660,Vo=34930,Yr=36349,ji=34076,Na=34024,Bi=7936,xl=7937,Js=7938,ec=35724,tc=34047,wh=36063,oc=34852,F0=3553,ir=34067,_h=34069,Ui=33984,nc=6408,Mh=5126,Nd=5121,Eh=36160,sb=36053,cb=36064,lb=16384,fb=function(x,E){var R=1;E.ext_texture_filter_anisotropic&&(R=x.getParameter(tc));var K=1,le=1;E.webgl_draw_buffers&&(K=x.getParameter(oc),le=x.getParameter(wh));var X=!!E.oes_texture_float;if(X){var te=x.createTexture();x.bindTexture(F0,te),x.texImage2D(F0,0,nc,1,1,0,nc,Mh,null);var ge=x.createFramebuffer();if(x.bindFramebuffer(Eh,ge),x.framebufferTexture2D(Eh,cb,F0,te,0),x.bindTexture(F0,null),x.checkFramebufferStatus(Eh)!==sb)X=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(lb);var be=$t.allocType(Mh,4);x.readPixels(0,0,1,1,nc,Mh,be),x.getError()?X=!1:(x.deleteFramebuffer(ge),x.deleteTexture(te),X=be[0]===1),$t.freeType(be)}}var Ee=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),we=!0;if(!Ee){var Se=x.createTexture(),Re=$t.allocType(Nd,36);x.activeTexture(Ui),x.bindTexture(ir,Se),x.texImage2D(_h,0,nc,3,3,0,nc,Nd,Re),$t.freeType(Re),x.bindTexture(ir,null),x.deleteTexture(Se),we=!x.getError()}return{colorBits:[x.getParameter(Pr),x.getParameter(yn),x.getParameter(Sr),x.getParameter(Ho)],depthBits:x.getParameter(ao),stencilBits:x.getParameter(In),subpixelBits:x.getParameter(Bn),extensions:Object.keys(E).filter(function(xe){return!!E[xe]}),maxAnisotropic:R,maxDrawbuffers:K,maxColorAttachments:le,pointSizeDims:x.getParameter(jo),lineWidthDims:x.getParameter(Jn),maxViewportDims:x.getParameter(va),maxCombinedTextureUnits:x.getParameter(ma),maxCubeMapSize:x.getParameter(ji),maxRenderbufferSize:x.getParameter(Na),maxTextureUnits:x.getParameter(Vo),maxTextureSize:x.getParameter(Vr),maxAttributes:x.getParameter(Io),maxVertexUniforms:x.getParameter(Xr),maxVertexTextureUnits:x.getParameter(go),maxVaryingVectors:x.getParameter(ln),maxFragmentUniforms:x.getParameter(Yr),glsl:x.getParameter(ec),renderer:x.getParameter(xl),vendor:x.getParameter(Bi),version:x.getParameter(Js),readFloat:X,npotTextureCube:we}};function ga(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var Ir=function(x){return Object.keys(x).map(function(E){return x[E]})},yl={shape:pb,flatten:db};function hb(x,E,R){for(var K=0;K<E;++K)R[K]=x[K]}function ub(x,E,R,K){for(var le=0,X=0;X<E;++X)for(var te=x[X],ge=0;ge<R;++ge)K[le++]=te[ge]}function Rd(x,E,R,K,le,X){for(var te=X,ge=0;ge<E;++ge)for(var be=x[ge],Ee=0;Ee<R;++Ee)for(var we=be[Ee],Se=0;Se<K;++Se)le[te++]=we[Se]}function Cd(x,E,R,K,le){for(var X=1,te=R+1;te<E.length;++te)X*=E[te];var ge=E[R];if(E.length-R===4){var be=E[R+1],Ee=E[R+2],we=E[R+3];for(te=0;te<ge;++te)Rd(x[te],be,Ee,we,K,le),le+=X}else for(te=0;te<ge;++te)Cd(x[te],E,R+1,K,le),le+=X}function db(x,E,R,K){var le=1;if(E.length)for(var X=0;X<E.length;++X)le*=E[X];else le=0;var te=K||$t.allocType(R,le);switch(E.length){case 0:break;case 1:hb(x,E[0],te);break;case 2:ub(x,E[0],E[1],te);break;case 3:Rd(x,E[0],E[1],E[2],te,0);break;default:Cd(x,E,0,te,0)}return te}function pb(x){for(var E=[],R=x;R.length;R=R[0])E.push(R.length);return E}var kh={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},vb=5120,mb=5122,gb=5124,xb=5121,yb=5123,bb=5125,wb=5126,_b=5126,Wi={int8:vb,int16:mb,int32:gb,uint8:xb,uint16:yb,uint32:bb,float:wb,float32:_b},Mb=35048,Eb=35040,bl={dynamic:Mb,stream:Eb,static:35044},Sh=yl.flatten,Pd=yl.shape,Id=35044,kb=35040,Ah=5121,Th=5126,si=[];si[5120]=1,si[5122]=2,si[5124]=4,si[5121]=1,si[5123]=2,si[5125]=4,si[5126]=4;function wl(x){return kh[Object.prototype.toString.call(x)]|0}function Od(x,E){for(var R=0;R<E.length;++R)x[R]=E[R]}function Fd(x,E,R,K,le,X,te){for(var ge=0,be=0;be<R;++be)for(var Ee=0;Ee<K;++Ee)x[ge++]=E[le*be+X*Ee+te]}function Sb(x,E,R,K){var le=0,X={};function te(j){this.id=le++,this.buffer=x.createBuffer(),this.type=j,this.usage=Id,this.byteLength=0,this.dimension=1,this.dtype=Ah,this.persistentData=null,R.profile&&(this.stats={size:0})}te.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},te.prototype.destroy=function(){Re(this)};var ge=[];function be(j,oe){var Me=ge.pop();return Me||(Me=new te(j)),Me.bind(),Se(Me,oe,kb,0,1,!1),Me}function Ee(j){ge.push(j)}function we(j,oe,Me){j.byteLength=oe.byteLength,x.bufferData(j.type,oe,Me)}function Se(j,oe,Me,Fe,ue,$e){var me;if(j.usage=Me,Array.isArray(oe)){if(j.dtype=Fe||Th,oe.length>0){var Le;if(Array.isArray(oe[0])){me=Pd(oe);for(var pe=1,ze=1;ze<me.length;++ze)pe*=me[ze];j.dimension=pe,Le=Sh(oe,me,j.dtype),we(j,Le,Me),$e?j.persistentData=Le:$t.freeType(Le)}else if(typeof oe[0]=="number"){j.dimension=ue;var nt=$t.allocType(j.dtype,oe.length);Od(nt,oe),we(j,nt,Me),$e?j.persistentData=nt:$t.freeType(nt)}else e(oe[0])?(j.dimension=oe[0].length,j.dtype=Fe||wl(oe[0])||Th,Le=Sh(oe,[oe.length,oe[0].length],j.dtype),we(j,Le,Me),$e?j.persistentData=Le:$t.freeType(Le)):_.raise("invalid buffer data")}}else if(e(oe))j.dtype=Fe||wl(oe),j.dimension=ue,we(j,oe,Me),$e&&(j.persistentData=new Uint8Array(new Uint8Array(oe.buffer)));else if(ga(oe)){me=oe.shape;var wt=oe.stride,Ce=oe.offset,ke=0,he=0,mt=0,Pt=0;me.length===1?(ke=me[0],he=1,mt=wt[0],Pt=0):me.length===2?(ke=me[0],he=me[1],mt=wt[0],Pt=wt[1]):_.raise("invalid shape"),j.dtype=Fe||wl(oe.data)||Th,j.dimension=he;var je=$t.allocType(j.dtype,ke*he);Fd(je,oe.data,ke,he,mt,Pt,Ce),we(j,je,Me),$e?j.persistentData=je:$t.freeType(je)}else oe instanceof ArrayBuffer?(j.dtype=Ah,j.dimension=ue,we(j,oe,Me),$e&&(j.persistentData=new Uint8Array(new Uint8Array(oe)))):_.raise("invalid buffer data")}function Re(j){E.bufferCount--,K(j);var oe=j.buffer;_(oe,"buffer must not be deleted already"),x.deleteBuffer(oe),j.buffer=null,delete X[j.id]}function xe(j,oe,Me,Fe){E.bufferCount++;var ue=new te(oe);X[ue.id]=ue;function $e(pe){var ze=Id,nt=null,wt=0,Ce=0,ke=1;return Array.isArray(pe)||e(pe)||ga(pe)||pe instanceof ArrayBuffer?nt=pe:typeof pe=="number"?wt=pe|0:pe&&(_.type(pe,"object","buffer arguments must be an object, a number or an array"),"data"in pe&&(_(nt===null||Array.isArray(nt)||e(nt)||ga(nt),"invalid data for buffer"),nt=pe.data),"usage"in pe&&(_.parameter(pe.usage,bl,"invalid buffer usage"),ze=bl[pe.usage]),"type"in pe&&(_.parameter(pe.type,Wi,"invalid buffer type"),Ce=Wi[pe.type]),"dimension"in pe&&(_.type(pe.dimension,"number","invalid dimension"),ke=pe.dimension|0),"length"in pe&&(_.nni(wt,"buffer length must be a nonnegative integer"),wt=pe.length|0)),ue.bind(),nt?Se(ue,nt,ze,Ce,ke,Fe):(wt&&x.bufferData(ue.type,wt,ze),ue.dtype=Ce||Ah,ue.usage=ze,ue.dimension=ke,ue.byteLength=wt),R.profile&&(ue.stats.size=ue.byteLength*si[ue.dtype]),$e}function me(pe,ze){_(ze+pe.byteLength<=ue.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+pe.byteLength+" starting from offset "+ze+" to a buffer of size "+ue.byteLength),x.bufferSubData(ue.type,ze,pe)}function Le(pe,ze){var nt=(ze||0)|0,wt;if(ue.bind(),e(pe)||pe instanceof ArrayBuffer)me(pe,nt);else if(Array.isArray(pe)){if(pe.length>0)if(typeof pe[0]=="number"){var Ce=$t.allocType(ue.dtype,pe.length);Od(Ce,pe),me(Ce,nt),$t.freeType(Ce)}else if(Array.isArray(pe[0])||e(pe[0])){wt=Pd(pe);var ke=Sh(pe,wt,ue.dtype);me(ke,nt),$t.freeType(ke)}else _.raise("invalid buffer data")}else if(ga(pe)){wt=pe.shape;var he=pe.stride,mt=0,Pt=0,je=0,qt=0;wt.length===1?(mt=wt[0],Pt=1,je=he[0],qt=0):wt.length===2?(mt=wt[0],Pt=wt[1],je=he[0],qt=he[1]):_.raise("invalid shape");var _t=Array.isArray(pe.data)?ue.dtype:wl(pe.data),Gt=$t.allocType(_t,mt*Pt);Fd(Gt,pe.data,mt,Pt,je,qt,pe.offset),me(Gt,nt),$t.freeType(Gt)}else _.raise("invalid data for buffer subdata");return $e}return Me||$e(j),$e._reglType="buffer",$e._buffer=ue,$e.subdata=Le,R.profile&&($e.stats=ue.stats),$e.destroy=function(){Re(ue)},$e}function Te(){Ir(X).forEach(function(j){j.buffer=x.createBuffer(),x.bindBuffer(j.type,j.buffer),x.bufferData(j.type,j.persistentData||j.byteLength,j.usage)})}return R.profile&&(E.getTotalBufferSize=function(){var j=0;return Object.keys(X).forEach(function(oe){j+=X[oe].stats.size}),j}),{create:xe,createStream:be,destroyStream:Ee,clear:function(){Ir(X).forEach(Re),ge.forEach(Re)},getBuffer:function(j){return j&&j._buffer instanceof te?j._buffer:null},restore:Te,_initBuffer:Se}}var Ab=0,Tb=0,Lb=1,zb=1,Nb=4,Rb=4,$0={points:Ab,point:Tb,lines:Lb,line:zb,triangles:Nb,triangle:Rb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Cb=0,Pb=1,rc=4,Ib=5120,G0=5121,$d=5122,D0=5123,Gd=5124,Vi=5125,Lh=34963,Ob=35040,Fb=35044;function $b(x,E,R,K){var le={},X=0,te={uint8:G0,uint16:D0};E.oes_element_index_uint&&(te.uint32=Vi);function ge(Te){this.id=X++,le[this.id]=this,this.buffer=Te,this.primType=rc,this.vertCount=0,this.type=0}ge.prototype.bind=function(){this.buffer.bind()};var be=[];function Ee(Te){var j=be.pop();return j||(j=new ge(R.create(null,Lh,!0,!1)._buffer)),Se(j,Te,Ob,-1,-1,0,0),j}function we(Te){be.push(Te)}function Se(Te,j,oe,Me,Fe,ue,$e){Te.buffer.bind();var me;if(j){var Le=$e;!$e&&(!e(j)||ga(j)&&!e(j.data))&&(Le=E.oes_element_index_uint?Vi:D0),R._initBuffer(Te.buffer,j,oe,Le,3)}else x.bufferData(Lh,ue,oe),Te.buffer.dtype=me||G0,Te.buffer.usage=oe,Te.buffer.dimension=3,Te.buffer.byteLength=ue;if(me=$e,!$e){switch(Te.buffer.dtype){case G0:case Ib:me=G0;break;case D0:case $d:me=D0;break;case Vi:case Gd:me=Vi;break;default:_.raise("unsupported type for element array")}Te.buffer.dtype=me}Te.type=me,_(me!==Vi||!!E.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var pe=Fe;pe<0&&(pe=Te.buffer.byteLength,me===D0?pe>>=1:me===Vi&&(pe>>=2)),Te.vertCount=pe;var ze=Me;if(Me<0){ze=rc;var nt=Te.buffer.dimension;nt===1&&(ze=Cb),nt===2&&(ze=Pb),nt===3&&(ze=rc)}Te.primType=ze}function Re(Te){K.elementsCount--,_(Te.buffer!==null,"must not double destroy elements"),delete le[Te.id],Te.buffer.destroy(),Te.buffer=null}function xe(Te,j){var oe=R.create(null,Lh,!0),Me=new ge(oe._buffer);K.elementsCount++;function Fe(ue){if(!ue)oe(),Me.primType=rc,Me.vertCount=0,Me.type=G0;else if(typeof ue=="number")oe(ue),Me.primType=rc,Me.vertCount=ue|0,Me.type=G0;else{var $e=null,me=Fb,Le=-1,pe=-1,ze=0,nt=0;Array.isArray(ue)||e(ue)||ga(ue)?$e=ue:(_.type(ue,"object","invalid arguments for elements"),"data"in ue&&($e=ue.data,_(Array.isArray($e)||e($e)||ga($e),"invalid data for element buffer")),"usage"in ue&&(_.parameter(ue.usage,bl,"invalid element buffer usage"),me=bl[ue.usage]),"primitive"in ue&&(_.parameter(ue.primitive,$0,"invalid element buffer primitive"),Le=$0[ue.primitive]),"count"in ue&&(_(typeof ue.count=="number"&&ue.count>=0,"invalid vertex count for elements"),pe=ue.count|0),"type"in ue&&(_.parameter(ue.type,te,"invalid buffer type"),nt=te[ue.type]),"length"in ue?ze=ue.length|0:(ze=pe,nt===D0||nt===$d?ze*=2:(nt===Vi||nt===Gd)&&(ze*=4))),Se(Me,$e,me,Le,pe,ze,nt)}return Fe}return Fe(Te),Fe._reglType="elements",Fe._elements=Me,Fe.subdata=function(ue,$e){return oe.subdata(ue,$e),Fe},Fe.destroy=function(){Re(Me)},Fe}return{create:xe,createStream:Ee,destroyStream:we,getElements:function(Te){return typeof Te=="function"&&Te._elements instanceof ge?Te._elements:null},clear:function(){Ir(le).forEach(Re)}}}var Dd=new Float32Array(1),Gb=new Uint32Array(Dd.buffer),Db=5123;function qd(x){for(var E=$t.allocType(Db,x.length),R=0;R<x.length;++R)if(isNaN(x[R]))E[R]=65535;else if(x[R]===1/0)E[R]=31744;else if(x[R]===-1/0)E[R]=64512;else{Dd[0]=x[R];var K=Gb[0],le=K>>>31<<15,X=(K<<1>>>24)-127,te=K>>13&1023;if(X<-24)E[R]=le;else if(X<-14){var ge=-14-X;E[R]=le+(te+1024>>ge)}else X>15?E[R]=le+31744:E[R]=le+(X+15<<10)+te}return E}function on(x){return Array.isArray(x)||e(x)}var Hd=function(x){return!(x&x-1)&&!!x},qb=34467,Ra=3553,zh=34067,_l=34069,Xi=6408,Nh=6406,Ml=6407,ac=6409,El=6410,jd=32854,Rh=32855,Bd=36194,Hb=32819,jb=32820,Bb=33635,Ub=34042,Ch=6402,kl=34041,Ph=35904,Ih=35906,q0=36193,Oh=33776,Fh=33777,$h=33778,Gh=33779,Ud=35986,Wd=35987,Vd=34798,Xd=35840,Yd=35841,Kd=35842,Qd=35843,Zd=36196,H0=5121,Dh=5123,qh=5125,ic=5126,Wb=10242,Vb=10243,Xb=10497,Hh=33071,Yb=33648,Kb=10240,Qb=10241,jh=9728,Zb=9729,Bh=9984,Jd=9985,ep=9986,Uh=9987,Jb=33170,Sl=4352,e5=4353,t5=4354,o5=34046,n5=3317,r5=37440,a5=37441,i5=37443,tp=37444,sc=33984,s5=[Bh,ep,Jd,Uh],Al=[0,ac,El,Ml,Xi],Kr={};Kr[ac]=Kr[Nh]=Kr[Ch]=1,Kr[kl]=Kr[El]=2,Kr[Ml]=Kr[Ph]=3,Kr[Xi]=Kr[Ih]=4;function j0(x){return"[object "+x+"]"}var op=j0("HTMLCanvasElement"),np=j0("OffscreenCanvas"),rp=j0("CanvasRenderingContext2D"),ap=j0("ImageBitmap"),ip=j0("HTMLImageElement"),sp=j0("HTMLVideoElement"),c5=Object.keys(kh).concat([op,np,rp,ap,ip,sp]),B0=[];B0[H0]=1,B0[ic]=4,B0[q0]=2,B0[Dh]=2,B0[qh]=4;var Un=[];Un[jd]=2,Un[Rh]=2,Un[Bd]=2,Un[kl]=4,Un[Oh]=.5,Un[Fh]=.5,Un[$h]=1,Un[Gh]=1,Un[Ud]=.5,Un[Wd]=1,Un[Vd]=1,Un[Xd]=.5,Un[Yd]=.25,Un[Kd]=.5,Un[Qd]=.25,Un[Zd]=.5;function cp(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function lp(x){if(!Array.isArray(x))return!1;var E=x.length;return!(E===0||!on(x[0]))}function Yi(x){return Object.prototype.toString.call(x)}function fp(x){return Yi(x)===op}function hp(x){return Yi(x)===np}function l5(x){return Yi(x)===rp}function f5(x){return Yi(x)===ap}function h5(x){return Yi(x)===ip}function u5(x){return Yi(x)===sp}function Wh(x){if(!x)return!1;var E=Yi(x);return c5.indexOf(E)>=0?!0:cp(x)||lp(x)||ga(x)}function up(x){return kh[Object.prototype.toString.call(x)]|0}function d5(x,E){var R=E.length;switch(x.type){case H0:case Dh:case qh:case ic:var K=$t.allocType(x.type,R);K.set(E),x.data=K;break;case q0:x.data=qd(E);break;default:_.raise("unsupported texture type, must specify a typed array")}}function dp(x,E){return $t.allocType(x.type===q0?ic:x.type,E)}function pp(x,E){x.type===q0?(x.data=qd(E),$t.freeType(E)):x.data=E}function p5(x,E,R,K,le,X){for(var te=x.width,ge=x.height,be=x.channels,Ee=te*ge*be,we=dp(x,Ee),Se=0,Re=0;Re<ge;++Re)for(var xe=0;xe<te;++xe)for(var Te=0;Te<be;++Te)we[Se++]=E[R*xe+K*Re+le*Te+X];pp(x,we)}function Tl(x,E,R,K,le,X){var te;if(typeof Un[x]!="undefined"?te=Un[x]:te=Kr[x]*B0[E],X&&(te*=6),le){for(var ge=0,be=R;be>=1;)ge+=te*be*be,be/=2;return ge}else return te*R*K}function v5(x,E,R,K,le,X,te){var ge={"don't care":Sl,"dont care":Sl,nice:t5,fast:e5},be={repeat:Xb,clamp:Hh,mirror:Yb},Ee={nearest:jh,linear:Zb},we=t({mipmap:Uh,"nearest mipmap nearest":Bh,"linear mipmap nearest":Jd,"nearest mipmap linear":ep,"linear mipmap linear":Uh},Ee),Se={none:0,browser:tp},Re={uint8:H0,rgba4:Hb,rgb565:Bb,"rgb5 a1":jb},xe={alpha:Nh,luminance:ac,"luminance alpha":El,rgb:Ml,rgba:Xi,rgba4:jd,"rgb5 a1":Rh,rgb565:Bd},Te={};E.ext_srgb&&(xe.srgb=Ph,xe.srgba=Ih),E.oes_texture_float&&(Re.float32=Re.float=ic),E.oes_texture_half_float&&(Re.float16=Re["half float"]=q0),E.webgl_depth_texture&&(t(xe,{depth:Ch,"depth stencil":kl}),t(Re,{uint16:Dh,uint32:qh,"depth stencil":Ub})),E.webgl_compressed_texture_s3tc&&t(Te,{"rgb s3tc dxt1":Oh,"rgba s3tc dxt1":Fh,"rgba s3tc dxt3":$h,"rgba s3tc dxt5":Gh}),E.webgl_compressed_texture_atc&&t(Te,{"rgb atc":Ud,"rgba atc explicit alpha":Wd,"rgba atc interpolated alpha":Vd}),E.webgl_compressed_texture_pvrtc&&t(Te,{"rgb pvrtc 4bppv1":Xd,"rgb pvrtc 2bppv1":Yd,"rgba pvrtc 4bppv1":Kd,"rgba pvrtc 2bppv1":Qd}),E.webgl_compressed_texture_etc1&&(Te["rgb etc1"]=Zd);var j=Array.prototype.slice.call(x.getParameter(qb));Object.keys(Te).forEach(function(L){var Z=Te[L];j.indexOf(Z)>=0&&(xe[L]=Z)});var oe=Object.keys(xe);R.textureFormats=oe;var Me=[];Object.keys(xe).forEach(function(L){var Z=xe[L];Me[Z]=L});var Fe=[];Object.keys(Re).forEach(function(L){var Z=Re[L];Fe[Z]=L});var ue=[];Object.keys(Ee).forEach(function(L){var Z=Ee[L];ue[Z]=L});var $e=[];Object.keys(we).forEach(function(L){var Z=we[L];$e[Z]=L});var me=[];Object.keys(be).forEach(function(L){var Z=be[L];me[Z]=L});var Le=oe.reduce(function(L,Z){var V=xe[Z];return V===ac||V===Nh||V===ac||V===El||V===Ch||V===kl||E.ext_srgb&&(V===Ph||V===Ih)?L[V]=V:V===Rh||Z.indexOf("rgba")>=0?L[V]=Xi:L[V]=Ml,L},{});function pe(){this.internalformat=Xi,this.format=Xi,this.type=H0,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=tp,this.width=0,this.height=0,this.channels=0}function ze(L,Z){L.internalformat=Z.internalformat,L.format=Z.format,L.type=Z.type,L.compressed=Z.compressed,L.premultiplyAlpha=Z.premultiplyAlpha,L.flipY=Z.flipY,L.unpackAlignment=Z.unpackAlignment,L.colorSpace=Z.colorSpace,L.width=Z.width,L.height=Z.height,L.channels=Z.channels}function nt(L,Z){if(!(typeof Z!="object"||!Z)){if("premultiplyAlpha"in Z&&(_.type(Z.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),L.premultiplyAlpha=Z.premultiplyAlpha),"flipY"in Z&&(_.type(Z.flipY,"boolean","invalid texture flip"),L.flipY=Z.flipY),"alignment"in Z&&(_.oneOf(Z.alignment,[1,2,4,8],"invalid texture unpack alignment"),L.unpackAlignment=Z.alignment),"colorSpace"in Z&&(_.parameter(Z.colorSpace,Se,"invalid colorSpace"),L.colorSpace=Se[Z.colorSpace]),"type"in Z){var V=Z.type;_(E.oes_texture_float||!(V==="float"||V==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(E.oes_texture_half_float||!(V==="half float"||V==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(E.webgl_depth_texture||!(V==="uint16"||V==="uint32"||V==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(V,Re,"invalid texture type"),L.type=Re[V]}var De=L.width,Ht=L.height,A=L.channels,w=!1;"shape"in Z?(_(Array.isArray(Z.shape)&&Z.shape.length>=2,"shape must be an array"),De=Z.shape[0],Ht=Z.shape[1],Z.shape.length===3&&(A=Z.shape[2],_(A>0&&A<=4,"invalid number of channels"),w=!0),_(De>=0&&De<=R.maxTextureSize,"invalid width"),_(Ht>=0&&Ht<=R.maxTextureSize,"invalid height")):("radius"in Z&&(De=Ht=Z.radius,_(De>=0&&De<=R.maxTextureSize,"invalid radius")),"width"in Z&&(De=Z.width,_(De>=0&&De<=R.maxTextureSize,"invalid width")),"height"in Z&&(Ht=Z.height,_(Ht>=0&&Ht<=R.maxTextureSize,"invalid height")),"channels"in Z&&(A=Z.channels,_(A>0&&A<=4,"invalid number of channels"),w=!0)),L.width=De|0,L.height=Ht|0,L.channels=A|0;var P=!1;if("format"in Z){var H=Z.format;_(E.webgl_depth_texture||!(H==="depth"||H==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(H,xe,"invalid texture format");var B=L.internalformat=xe[H];L.format=Le[B],H in Re&&("type"in Z||(L.type=Re[H])),H in Te&&(L.compressed=!0),P=!0}!w&&P?L.channels=Kr[L.format]:w&&!P?L.channels!==Al[L.format]&&(L.format=L.internalformat=Al[L.channels]):P&&w&&_(L.channels===Kr[L.format],"number of channels inconsistent with specified format")}}function wt(L){x.pixelStorei(r5,L.flipY),x.pixelStorei(a5,L.premultiplyAlpha),x.pixelStorei(i5,L.colorSpace),x.pixelStorei(n5,L.unpackAlignment)}function Ce(){pe.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function ke(L,Z){var V=null;if(Wh(Z)?V=Z:Z&&(_.type(Z,"object","invalid pixel data type"),nt(L,Z),"x"in Z&&(L.xOffset=Z.x|0),"y"in Z&&(L.yOffset=Z.y|0),Wh(Z.data)&&(V=Z.data)),_(!L.compressed||V instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),Z.copy){_(!V,"can not specify copy and data field for the same texture");var De=le.viewportWidth,Ht=le.viewportHeight;L.width=L.width||De-L.xOffset,L.height=L.height||Ht-L.yOffset,L.needsCopy=!0,_(L.xOffset>=0&&L.xOffset<De&&L.yOffset>=0&&L.yOffset<Ht&&L.width>0&&L.width<=De&&L.height>0&&L.height<=Ht,"copy texture read out of bounds")}else if(!V)L.width=L.width||1,L.height=L.height||1,L.channels=L.channels||4;else if(e(V))L.channels=L.channels||4,L.data=V,!("type"in Z)&&L.type===H0&&(L.type=up(V));else if(cp(V))L.channels=L.channels||4,d5(L,V),L.alignment=1,L.needsFree=!0;else if(ga(V)){var A=V.data;!Array.isArray(A)&&L.type===H0&&(L.type=up(A));var w=V.shape,P=V.stride,H,B,F,I,$,T;w.length===3?(F=w[2],T=P[2]):(_(w.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,T=1),H=w[0],B=w[1],I=P[0],$=P[1],L.alignment=1,L.width=H,L.height=B,L.channels=F,L.format=L.internalformat=Al[F],L.needsFree=!0,p5(L,A,I,$,T,V.offset)}else if(fp(V)||hp(V)||l5(V))fp(V)||hp(V)?L.element=V:L.element=V.canvas,L.width=L.element.width,L.height=L.element.height,L.channels=4;else if(f5(V))L.element=V,L.width=V.width,L.height=V.height,L.channels=4;else if(h5(V))L.element=V,L.width=V.naturalWidth,L.height=V.naturalHeight,L.channels=4;else if(u5(V))L.element=V,L.width=V.videoWidth,L.height=V.videoHeight,L.channels=4;else if(lp(V)){var C=L.width||V[0].length,S=L.height||V.length,G=L.channels;on(V[0][0])?G=G||V[0][0].length:G=G||1;for(var U=yl.shape(V),se=1,fe=0;fe<U.length;++fe)se*=U[fe];var ae=dp(L,se);yl.flatten(V,U,"",ae),pp(L,ae),L.alignment=1,L.width=C,L.height=S,L.channels=G,L.format=L.internalformat=Al[G],L.needsFree=!0}L.type===ic?_(R.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):L.type===q0&&_(R.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function he(L,Z,V){var De=L.element,Ht=L.data,A=L.internalformat,w=L.format,P=L.type,H=L.width,B=L.height;wt(L),De?x.texImage2D(Z,V,w,w,P,De):L.compressed?x.compressedTexImage2D(Z,V,A,H,B,0,Ht):L.needsCopy?(K(),x.copyTexImage2D(Z,V,w,L.xOffset,L.yOffset,H,B,0)):x.texImage2D(Z,V,w,H,B,0,w,P,Ht||null)}function mt(L,Z,V,De,Ht){var A=L.element,w=L.data,P=L.internalformat,H=L.format,B=L.type,F=L.width,I=L.height;wt(L),A?x.texSubImage2D(Z,Ht,V,De,H,B,A):L.compressed?x.compressedTexSubImage2D(Z,Ht,V,De,P,F,I,w):L.needsCopy?(K(),x.copyTexSubImage2D(Z,Ht,V,De,L.xOffset,L.yOffset,F,I)):x.texSubImage2D(Z,Ht,V,De,F,I,H,B,w)}var Pt=[];function je(){return Pt.pop()||new Ce}function qt(L){L.needsFree&&$t.freeType(L.data),Ce.call(L),Pt.push(L)}function _t(){pe.call(this),this.genMipmaps=!1,this.mipmapHint=Sl,this.mipmask=0,this.images=Array(16)}function Gt(L,Z,V){var De=L.images[0]=je();L.mipmask=1,De.width=L.width=Z,De.height=L.height=V,De.channels=L.channels=4}function ho(L,Z){var V=null;if(Wh(Z))V=L.images[0]=je(),ze(V,L),ke(V,Z),L.mipmask=1;else if(nt(L,Z),Array.isArray(Z.mipmap))for(var De=Z.mipmap,Ht=0;Ht<De.length;++Ht)V=L.images[Ht]=je(),ze(V,L),V.width>>=Ht,V.height>>=Ht,ke(V,De[Ht]),L.mipmask|=1<<Ht;else V=L.images[0]=je(),ze(V,L),ke(V,Z),L.mipmask=1;ze(L,L.images[0]),L.compressed&&(L.internalformat===Oh||L.internalformat===Fh||L.internalformat===$h||L.internalformat===Gh)&&_(L.width%4===0&&L.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function hn(L,Z){for(var V=L.images,De=0;De<V.length;++De){if(!V[De])return;he(V[De],Z,De)}}var An=[];function Ut(){var L=An.pop()||new _t;pe.call(L),L.mipmask=0;for(var Z=0;Z<16;++Z)L.images[Z]=null;return L}function bn(L){for(var Z=L.images,V=0;V<Z.length;++V)Z[V]&&qt(Z[V]),Z[V]=null;An.push(L)}function Fo(){this.minFilter=jh,this.magFilter=jh,this.wrapS=Hh,this.wrapT=Hh,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Sl}function un(L,Z){if("min"in Z){var V=Z.min;_.parameter(V,we),L.minFilter=we[V],s5.indexOf(L.minFilter)>=0&&!("faces"in Z)&&(L.genMipmaps=!0)}if("mag"in Z){var De=Z.mag;_.parameter(De,Ee),L.magFilter=Ee[De]}var Ht=L.wrapS,A=L.wrapT;if("wrap"in Z){var w=Z.wrap;typeof w=="string"?(_.parameter(w,be),Ht=A=be[w]):Array.isArray(w)&&(_.parameter(w[0],be),_.parameter(w[1],be),Ht=be[w[0]],A=be[w[1]])}else{if("wrapS"in Z){var P=Z.wrapS;_.parameter(P,be),Ht=be[P]}if("wrapT"in Z){var H=Z.wrapT;_.parameter(H,be),A=be[H]}}if(L.wrapS=Ht,L.wrapT=A,"anisotropic"in Z){var B=Z.anisotropic;_(typeof B=="number"&&B>=1&&B<=R.maxAnisotropic,"aniso samples must be between 1 and "),L.anisotropic=Z.anisotropic}if("mipmap"in Z){var F=!1;switch(typeof Z.mipmap){case"string":_.parameter(Z.mipmap,ge,"invalid mipmap hint"),L.mipmapHint=ge[Z.mipmap],L.genMipmaps=!0,F=!0;break;case"boolean":F=L.genMipmaps=Z.mipmap;break;case"object":_(Array.isArray(Z.mipmap),"invalid mipmap type"),L.genMipmaps=!1,F=!0;break;default:_.raise("invalid mipmap type")}F&&!("min"in Z)&&(L.minFilter=Bh)}}function wn(L,Z){x.texParameteri(Z,Qb,L.minFilter),x.texParameteri(Z,Kb,L.magFilter),x.texParameteri(Z,Wb,L.wrapS),x.texParameteri(Z,Vb,L.wrapT),E.ext_texture_filter_anisotropic&&x.texParameteri(Z,o5,L.anisotropic),L.genMipmaps&&(x.hint(Jb,L.mipmapHint),x.generateMipmap(Z))}var _n=0,On={},Wn=R.maxTextureUnits,nn=Array(Wn).map(function(){return null});function It(L){pe.call(this),this.mipmask=0,this.internalformat=Xi,this.id=_n++,this.refCount=1,this.target=L,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Fo,te.profile&&(this.stats={size:0})}function Vn(L){x.activeTexture(sc),x.bindTexture(L.target,L.texture)}function xo(){var L=nn[0];L?x.bindTexture(L.target,L.texture):x.bindTexture(Ra,null)}function st(L){var Z=L.texture;_(Z,"must not double destroy texture");var V=L.unit,De=L.target;V>=0&&(x.activeTexture(sc+V),x.bindTexture(De,null),nn[V]=null),x.deleteTexture(Z),L.texture=null,L.params=null,L.pixels=null,L.refCount=0,delete On[L.id],X.textureCount--}t(It.prototype,{bind:function(){var L=this;L.bindCount+=1;var Z=L.unit;if(Z<0){for(var V=0;V<Wn;++V){var De=nn[V];if(De){if(De.bindCount>0)continue;De.unit=-1}nn[V]=L,Z=V;break}Z>=Wn&&_.raise("insufficient number of texture units"),te.profile&&X.maxTextureUnits<Z+1&&(X.maxTextureUnits=Z+1),L.unit=Z,x.activeTexture(sc+Z),x.bindTexture(L.target,L.texture)}return Z},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&st(this)}});function jt(L,Z){var V=new It(Ra);On[V.id]=V,X.textureCount++;function De(w,P){var H=V.texInfo;Fo.call(H);var B=Ut();return typeof w=="number"?typeof P=="number"?Gt(B,w|0,P|0):Gt(B,w|0,w|0):w?(_.type(w,"object","invalid arguments to regl.texture"),un(H,w),ho(B,w)):Gt(B,1,1),H.genMipmaps&&(B.mipmask=(B.width<<1)-1),V.mipmask=B.mipmask,ze(V,B),_.texture2D(H,B,R),V.internalformat=B.internalformat,De.width=B.width,De.height=B.height,Vn(V),hn(B,Ra),wn(H,Ra),xo(),bn(B),te.profile&&(V.stats.size=Tl(V.internalformat,V.type,B.width,B.height,H.genMipmaps,!1)),De.format=Me[V.internalformat],De.type=Fe[V.type],De.mag=ue[H.magFilter],De.min=$e[H.minFilter],De.wrapS=me[H.wrapS],De.wrapT=me[H.wrapT],De}function Ht(w,P,H,B){_(!!w,"must specify image data");var F=P|0,I=H|0,$=B|0,T=je();return ze(T,V),T.width=0,T.height=0,ke(T,w),T.width=T.width||(V.width>>$)-F,T.height=T.height||(V.height>>$)-I,_(V.type===T.type&&V.format===T.format&&V.internalformat===T.internalformat,"incompatible format for texture.subimage"),_(F>=0&&I>=0&&F+T.width<=V.width&&I+T.height<=V.height,"texture.subimage write out of bounds"),_(V.mipmask&1<<$,"missing mipmap data"),_(T.data||T.element||T.needsCopy,"missing image data"),Vn(V),mt(T,Ra,F,I,$),xo(),qt(T),De}function A(w,P){var H=w|0,B=P|0||H;if(H===V.width&&B===V.height)return De;De.width=V.width=H,De.height=V.height=B,Vn(V);for(var F=0;V.mipmask>>F;++F){var I=H>>F,$=B>>F;if(!I||!$)break;x.texImage2D(Ra,F,V.format,I,$,0,V.format,V.type,null)}return xo(),te.profile&&(V.stats.size=Tl(V.internalformat,V.type,H,B,!1,!1)),De}return De(L,Z),De.subimage=Ht,De.resize=A,De._reglType="texture2d",De._texture=V,te.profile&&(De.stats=V.stats),De.destroy=function(){V.decRef()},De}function io(L,Z,V,De,Ht,A){var w=new It(zh);On[w.id]=w,X.cubeCount++;var P=new Array(6);function H(I,$,T,C,S,G){var U,se=w.texInfo;for(Fo.call(se),U=0;U<6;++U)P[U]=Ut();if(typeof I=="number"||!I){var fe=I|0||1;for(U=0;U<6;++U)Gt(P[U],fe,fe)}else if(typeof I=="object")if($)ho(P[0],I),ho(P[1],$),ho(P[2],T),ho(P[3],C),ho(P[4],S),ho(P[5],G);else if(un(se,I),nt(w,I),"faces"in I){var ae=I.faces;for(_(Array.isArray(ae)&&ae.length===6,"cube faces must be a length 6 array"),U=0;U<6;++U)_(typeof ae[U]=="object"&&!!ae[U],"invalid input for cube map face"),ze(P[U],w),ho(P[U],ae[U])}else for(U=0;U<6;++U)ho(P[U],I);else _.raise("invalid arguments to cube map");for(ze(w,P[0]),R.npotTextureCube||_(Hd(w.width)&&Hd(w.height),"your browser does not support non power or two texture dimensions"),se.genMipmaps?w.mipmask=(P[0].width<<1)-1:w.mipmask=P[0].mipmask,_.textureCube(w,se,P,R),w.internalformat=P[0].internalformat,H.width=P[0].width,H.height=P[0].height,Vn(w),U=0;U<6;++U)hn(P[U],_l+U);for(wn(se,zh),xo(),te.profile&&(w.stats.size=Tl(w.internalformat,w.type,H.width,H.height,se.genMipmaps,!0)),H.format=Me[w.internalformat],H.type=Fe[w.type],H.mag=ue[se.magFilter],H.min=$e[se.minFilter],H.wrapS=me[se.wrapS],H.wrapT=me[se.wrapT],U=0;U<6;++U)bn(P[U]);return H}function B(I,$,T,C,S){_(!!$,"must specify image data"),_(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var G=T|0,U=C|0,se=S|0,fe=je();return ze(fe,w),fe.width=0,fe.height=0,ke(fe,$),fe.width=fe.width||(w.width>>se)-G,fe.height=fe.height||(w.height>>se)-U,_(w.type===fe.type&&w.format===fe.format&&w.internalformat===fe.internalformat,"incompatible format for texture.subimage"),_(G>=0&&U>=0&&G+fe.width<=w.width&&U+fe.height<=w.height,"texture.subimage write out of bounds"),_(w.mipmask&1<<se,"missing mipmap data"),_(fe.data||fe.element||fe.needsCopy,"missing image data"),Vn(w),mt(fe,_l+I,G,U,se),xo(),qt(fe),H}function F(I){var $=I|0;if($!==w.width){H.width=w.width=$,H.height=w.height=$,Vn(w);for(var T=0;T<6;++T)for(var C=0;w.mipmask>>C;++C)x.texImage2D(_l+T,C,w.format,$>>C,$>>C,0,w.format,w.type,null);return xo(),te.profile&&(w.stats.size=Tl(w.internalformat,w.type,H.width,H.height,!1,!0)),H}}return H(L,Z,V,De,Ht,A),H.subimage=B,H.resize=F,H._reglType="textureCube",H._texture=w,te.profile&&(H.stats=w.stats),H.destroy=function(){w.decRef()},H}function rn(){for(var L=0;L<Wn;++L)x.activeTexture(sc+L),x.bindTexture(Ra,null),nn[L]=null;Ir(On).forEach(st),X.cubeCount=0,X.textureCount=0}te.profile&&(X.getTotalTextureSize=function(){var L=0;return Object.keys(On).forEach(function(Z){L+=On[Z].stats.size}),L});function Pa(){for(var L=0;L<Wn;++L){var Z=nn[L];Z&&(Z.bindCount=0,Z.unit=-1,nn[L]=null)}Ir(On).forEach(function(V){V.texture=x.createTexture(),x.bindTexture(V.target,V.texture);for(var De=0;De<32;++De)if(V.mipmask&1<<De)if(V.target===Ra)x.texImage2D(Ra,De,V.internalformat,V.width>>De,V.height>>De,0,V.internalformat,V.type,null);else for(var Ht=0;Ht<6;++Ht)x.texImage2D(_l+Ht,De,V.internalformat,V.width>>De,V.height>>De,0,V.internalformat,V.type,null);wn(V.texInfo,V.target)})}function o0(){for(var L=0;L<Wn;++L){var Z=nn[L];Z&&(Z.bindCount=0,Z.unit=-1,nn[L]=null),x.activeTexture(sc+L),x.bindTexture(Ra,null),x.bindTexture(zh,null)}}return{create2D:jt,createCube:io,clear:rn,getTexture:function(L){return null},restore:Pa,refresh:o0}}var ci=36161,Ll=32854,vp=32855,mp=36194,gp=33189,xp=36168,yp=34041,bp=35907,wp=34836,_p=34842,Mp=34843,xa=[];xa[Ll]=2,xa[vp]=2,xa[mp]=2,xa[gp]=2,xa[xp]=1,xa[yp]=4,xa[bp]=4,xa[wp]=16,xa[_p]=8,xa[Mp]=6;function Ep(x,E,R){return xa[x]*E*R}var m5=function(x,E,R,K,le){var X={rgba4:Ll,rgb565:mp,"rgb5 a1":vp,depth:gp,stencil:xp,"depth stencil":yp};E.ext_srgb&&(X.srgba=bp),E.ext_color_buffer_half_float&&(X.rgba16f=_p,X.rgb16f=Mp),E.webgl_color_buffer_float&&(X.rgba32f=wp);var te=[];Object.keys(X).forEach(function(xe){var Te=X[xe];te[Te]=xe});var ge=0,be={};function Ee(xe){this.id=ge++,this.refCount=1,this.renderbuffer=xe,this.format=Ll,this.width=0,this.height=0,le.profile&&(this.stats={size:0})}Ee.prototype.decRef=function(){--this.refCount<=0&&we(this)};function we(xe){var Te=xe.renderbuffer;_(Te,"must not double destroy renderbuffer"),x.bindRenderbuffer(ci,null),x.deleteRenderbuffer(Te),xe.renderbuffer=null,xe.refCount=0,delete be[xe.id],K.renderbufferCount--}function Se(xe,Te){var j=new Ee(x.createRenderbuffer());be[j.id]=j,K.renderbufferCount++;function oe(Fe,ue){var $e=0,me=0,Le=Ll;if(typeof Fe=="object"&&Fe){var pe=Fe;if("shape"in pe){var ze=pe.shape;_(Array.isArray(ze)&&ze.length>=2,"invalid renderbuffer shape"),$e=ze[0]|0,me=ze[1]|0}else"radius"in pe&&($e=me=pe.radius|0),"width"in pe&&($e=pe.width|0),"height"in pe&&(me=pe.height|0);"format"in pe&&(_.parameter(pe.format,X,"invalid renderbuffer format"),Le=X[pe.format])}else typeof Fe=="number"?($e=Fe|0,typeof ue=="number"?me=ue|0:me=$e):Fe?_.raise("invalid arguments to renderbuffer constructor"):$e=me=1;if(_($e>0&&me>0&&$e<=R.maxRenderbufferSize&&me<=R.maxRenderbufferSize,"invalid renderbuffer size"),!($e===j.width&&me===j.height&&Le===j.format))return oe.width=j.width=$e,oe.height=j.height=me,j.format=Le,x.bindRenderbuffer(ci,j.renderbuffer),x.renderbufferStorage(ci,Le,$e,me),_(x.getError()===0,"invalid render buffer format"),le.profile&&(j.stats.size=Ep(j.format,j.width,j.height)),oe.format=te[j.format],oe}function Me(Fe,ue){var $e=Fe|0,me=ue|0||$e;return $e===j.width&&me===j.height||(_($e>0&&me>0&&$e<=R.maxRenderbufferSize&&me<=R.maxRenderbufferSize,"invalid renderbuffer size"),oe.width=j.width=$e,oe.height=j.height=me,x.bindRenderbuffer(ci,j.renderbuffer),x.renderbufferStorage(ci,j.format,$e,me),_(x.getError()===0,"invalid render buffer format"),le.profile&&(j.stats.size=Ep(j.format,j.width,j.height))),oe}return oe(xe,Te),oe.resize=Me,oe._reglType="renderbuffer",oe._renderbuffer=j,le.profile&&(oe.stats=j.stats),oe.destroy=function(){j.decRef()},oe}le.profile&&(K.getTotalRenderbufferSize=function(){var xe=0;return Object.keys(be).forEach(function(Te){xe+=be[Te].stats.size}),xe});function Re(){Ir(be).forEach(function(xe){xe.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(ci,xe.renderbuffer),x.renderbufferStorage(ci,xe.format,xe.width,xe.height)}),x.bindRenderbuffer(ci,null)}return{create:Se,clear:function(){Ir(be).forEach(we)},restore:Re}},Ba=36160,Vh=36161,Ki=3553,zl=34069,kp=36064,Sp=36096,Ap=36128,Tp=33306,Lp=36053,g5=36054,x5=36055,y5=36057,b5=36061,w5=36193,_5=5121,M5=5126,zp=6407,Np=6408,E5=6402,k5=[zp,Np],Xh=[];Xh[Np]=4,Xh[zp]=3;var Nl=[];Nl[_5]=1,Nl[M5]=4,Nl[w5]=2;var S5=32854,A5=32855,T5=36194,L5=33189,z5=36168,Rp=34041,N5=35907,R5=34836,C5=34842,P5=34843,I5=[S5,A5,T5,N5,C5,P5,R5],U0={};U0[Lp]="complete",U0[g5]="incomplete attachment",U0[y5]="incomplete dimensions",U0[x5]="incomplete, missing attachment",U0[b5]="unsupported";function O5(x,E,R,K,le,X){var te={cur:null,next:null,dirty:!1,setFBO:null},ge=["rgba"],be=["rgba4","rgb565","rgb5 a1"];E.ext_srgb&&be.push("srgba"),E.ext_color_buffer_half_float&&be.push("rgba16f","rgb16f"),E.webgl_color_buffer_float&&be.push("rgba32f");var Ee=["uint8"];E.oes_texture_half_float&&Ee.push("half float","float16"),E.oes_texture_float&&Ee.push("float","float32");function we(Ce,ke,he){this.target=Ce,this.texture=ke,this.renderbuffer=he;var mt=0,Pt=0;ke?(mt=ke.width,Pt=ke.height):he&&(mt=he.width,Pt=he.height),this.width=mt,this.height=Pt}function Se(Ce){Ce&&(Ce.texture&&Ce.texture._texture.decRef(),Ce.renderbuffer&&Ce.renderbuffer._renderbuffer.decRef())}function Re(Ce,ke,he){if(Ce)if(Ce.texture){var mt=Ce.texture._texture,Pt=Math.max(1,mt.width),je=Math.max(1,mt.height);_(Pt===ke&&je===he,"inconsistent width/height for supplied texture"),mt.refCount+=1}else{var qt=Ce.renderbuffer._renderbuffer;_(qt.width===ke&&qt.height===he,"inconsistent width/height for renderbuffer"),qt.refCount+=1}}function xe(Ce,ke){ke&&(ke.texture?x.framebufferTexture2D(Ba,Ce,ke.target,ke.texture._texture.texture,0):x.framebufferRenderbuffer(Ba,Ce,Vh,ke.renderbuffer._renderbuffer.renderbuffer))}function Te(Ce){var ke=Ki,he=null,mt=null,Pt=Ce;typeof Ce=="object"&&(Pt=Ce.data,"target"in Ce&&(ke=Ce.target|0)),_.type(Pt,"function","invalid attachment data");var je=Pt._reglType;return je==="texture2d"?(he=Pt,_(ke===Ki)):je==="textureCube"?(he=Pt,_(ke>=zl&&ke<zl+6,"invalid cube map target")):je==="renderbuffer"?(mt=Pt,ke=Vh):_.raise("invalid regl object for attachment"),new we(ke,he,mt)}function j(Ce,ke,he,mt,Pt){if(he){var je=K.create2D({width:Ce,height:ke,format:mt,type:Pt});return je._texture.refCount=0,new we(Ki,je,null)}else{var qt=le.create({width:Ce,height:ke,format:mt});return qt._renderbuffer.refCount=0,new we(Vh,null,qt)}}function oe(Ce){return Ce&&(Ce.texture||Ce.renderbuffer)}function Me(Ce,ke,he){Ce&&(Ce.texture?Ce.texture.resize(ke,he):Ce.renderbuffer&&Ce.renderbuffer.resize(ke,he),Ce.width=ke,Ce.height=he)}var Fe=0,ue={};function $e(){this.id=Fe++,ue[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function me(Ce){Ce.colorAttachments.forEach(Se),Se(Ce.depthAttachment),Se(Ce.stencilAttachment),Se(Ce.depthStencilAttachment)}function Le(Ce){var ke=Ce.framebuffer;_(ke,"must not double destroy framebuffer"),x.deleteFramebuffer(ke),Ce.framebuffer=null,X.framebufferCount--,delete ue[Ce.id]}function pe(Ce){var ke;x.bindFramebuffer(Ba,Ce.framebuffer);var he=Ce.colorAttachments;for(ke=0;ke<he.length;++ke)xe(kp+ke,he[ke]);for(ke=he.length;ke<R.maxColorAttachments;++ke)x.framebufferTexture2D(Ba,kp+ke,Ki,null,0);x.framebufferTexture2D(Ba,Tp,Ki,null,0),x.framebufferTexture2D(Ba,Sp,Ki,null,0),x.framebufferTexture2D(Ba,Ap,Ki,null,0),xe(Sp,Ce.depthAttachment),xe(Ap,Ce.stencilAttachment),xe(Tp,Ce.depthStencilAttachment);var mt=x.checkFramebufferStatus(Ba);!x.isContextLost()&&mt!==Lp&&_.raise("framebuffer configuration not supported, status = "+U0[mt]),x.bindFramebuffer(Ba,te.next?te.next.framebuffer:null),te.cur=te.next,x.getError()}function ze(Ce,ke){var he=new $e;X.framebufferCount++;function mt(je,qt){var _t;_(te.next!==he,"can not update framebuffer which is currently in use");var Gt=0,ho=0,hn=!0,An=!0,Ut=null,bn=!0,Fo="rgba",un="uint8",wn=1,_n=null,On=null,Wn=null,nn=!1;if(typeof je=="number")Gt=je|0,ho=qt|0||Gt;else if(!je)Gt=ho=1;else{_.type(je,"object","invalid arguments for framebuffer");var It=je;if("shape"in It){var Vn=It.shape;_(Array.isArray(Vn)&&Vn.length>=2,"invalid shape for framebuffer"),Gt=Vn[0],ho=Vn[1]}else"radius"in It&&(Gt=ho=It.radius),"width"in It&&(Gt=It.width),"height"in It&&(ho=It.height);("color"in It||"colors"in It)&&(Ut=It.color||It.colors,Array.isArray(Ut)&&_(Ut.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),Ut||("colorCount"in It&&(wn=It.colorCount|0,_(wn>0,"invalid color buffer count")),"colorTexture"in It&&(bn=!!It.colorTexture,Fo="rgba4"),"colorType"in It&&(un=It.colorType,bn?(_(E.oes_texture_float||!(un==="float"||un==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(E.oes_texture_half_float||!(un==="half float"||un==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):un==="half float"||un==="float16"?(_(E.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Fo="rgba16f"):(un==="float"||un==="float32")&&(_(E.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Fo="rgba32f"),_.oneOf(un,Ee,"invalid color type")),"colorFormat"in It&&(Fo=It.colorFormat,ge.indexOf(Fo)>=0?bn=!0:be.indexOf(Fo)>=0?bn=!1:bn?_.oneOf(It.colorFormat,ge,"invalid color format for texture"):_.oneOf(It.colorFormat,be,"invalid color format for renderbuffer"))),("depthTexture"in It||"depthStencilTexture"in It)&&(nn=!!(It.depthTexture||It.depthStencilTexture),_(!nn||E.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in It&&(typeof It.depth=="boolean"?hn=It.depth:(_n=It.depth,An=!1)),"stencil"in It&&(typeof It.stencil=="boolean"?An=It.stencil:(On=It.stencil,hn=!1)),"depthStencil"in It&&(typeof It.depthStencil=="boolean"?hn=An=It.depthStencil:(Wn=It.depthStencil,hn=!1,An=!1))}var xo=null,st=null,jt=null,io=null;if(Array.isArray(Ut))xo=Ut.map(Te);else if(Ut)xo=[Te(Ut)];else for(xo=new Array(wn),_t=0;_t<wn;++_t)xo[_t]=j(Gt,ho,bn,Fo,un);_(E.webgl_draw_buffers||xo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(xo.length<=R.maxColorAttachments,"too many color attachments, not supported"),Gt=Gt||xo[0].width,ho=ho||xo[0].height,_n?st=Te(_n):hn&&!An&&(st=j(Gt,ho,nn,"depth","uint32")),On?jt=Te(On):An&&!hn&&(jt=j(Gt,ho,!1,"stencil","uint8")),Wn?io=Te(Wn):!_n&&!On&&An&&hn&&(io=j(Gt,ho,nn,"depth stencil","depth stencil")),_(!!_n+!!On+!!Wn<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var rn=null;for(_t=0;_t<xo.length;++_t)if(Re(xo[_t],Gt,ho),_(!xo[_t]||xo[_t].texture&&k5.indexOf(xo[_t].texture._texture.format)>=0||xo[_t].renderbuffer&&I5.indexOf(xo[_t].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+_t+" is invalid"),xo[_t]&&xo[_t].texture){var Pa=Xh[xo[_t].texture._texture.format]*Nl[xo[_t].texture._texture.type];rn===null?rn=Pa:_(rn===Pa,"all color attachments much have the same number of bits per pixel.")}return Re(st,Gt,ho),_(!st||st.texture&&st.texture._texture.format===E5||st.renderbuffer&&st.renderbuffer._renderbuffer.format===L5,"invalid depth attachment for framebuffer object"),Re(jt,Gt,ho),_(!jt||jt.renderbuffer&&jt.renderbuffer._renderbuffer.format===z5,"invalid stencil attachment for framebuffer object"),Re(io,Gt,ho),_(!io||io.texture&&io.texture._texture.format===Rp||io.renderbuffer&&io.renderbuffer._renderbuffer.format===Rp,"invalid depth-stencil attachment for framebuffer object"),me(he),he.width=Gt,he.height=ho,he.colorAttachments=xo,he.depthAttachment=st,he.stencilAttachment=jt,he.depthStencilAttachment=io,mt.color=xo.map(oe),mt.depth=oe(st),mt.stencil=oe(jt),mt.depthStencil=oe(io),mt.width=he.width,mt.height=he.height,pe(he),mt}function Pt(je,qt){_(te.next!==he,"can not resize a framebuffer which is currently in use");var _t=Math.max(je|0,1),Gt=Math.max(qt|0||_t,1);if(_t===he.width&&Gt===he.height)return mt;for(var ho=he.colorAttachments,hn=0;hn<ho.length;++hn)Me(ho[hn],_t,Gt);return Me(he.depthAttachment,_t,Gt),Me(he.stencilAttachment,_t,Gt),Me(he.depthStencilAttachment,_t,Gt),he.width=mt.width=_t,he.height=mt.height=Gt,pe(he),mt}return mt(Ce,ke),t(mt,{resize:Pt,_reglType:"framebuffer",_framebuffer:he,destroy:function(){Le(he),me(he)},use:function(je){te.setFBO({framebuffer:mt},je)}})}function nt(Ce){var ke=Array(6);function he(Pt){var je;_(ke.indexOf(te.next)<0,"can not update framebuffer which is currently in use");var qt={color:null},_t=0,Gt=null,ho="rgba",hn="uint8",An=1;if(typeof Pt=="number")_t=Pt|0;else if(!Pt)_t=1;else{_.type(Pt,"object","invalid arguments for framebuffer");var Ut=Pt;if("shape"in Ut){var bn=Ut.shape;_(Array.isArray(bn)&&bn.length>=2,"invalid shape for framebuffer"),_(bn[0]===bn[1],"cube framebuffer must be square"),_t=bn[0]}else"radius"in Ut&&(_t=Ut.radius|0),"width"in Ut?(_t=Ut.width|0,"height"in Ut&&_(Ut.height===_t,"must be square")):"height"in Ut&&(_t=Ut.height|0);("color"in Ut||"colors"in Ut)&&(Gt=Ut.color||Ut.colors,Array.isArray(Gt)&&_(Gt.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),Gt||("colorCount"in Ut&&(An=Ut.colorCount|0,_(An>0,"invalid color buffer count")),"colorType"in Ut&&(_.oneOf(Ut.colorType,Ee,"invalid color type"),hn=Ut.colorType),"colorFormat"in Ut&&(ho=Ut.colorFormat,_.oneOf(Ut.colorFormat,ge,"invalid color format for texture"))),"depth"in Ut&&(qt.depth=Ut.depth),"stencil"in Ut&&(qt.stencil=Ut.stencil),"depthStencil"in Ut&&(qt.depthStencil=Ut.depthStencil)}var Fo;if(Gt)if(Array.isArray(Gt))for(Fo=[],je=0;je<Gt.length;++je)Fo[je]=Gt[je];else Fo=[Gt];else{Fo=Array(An);var un={radius:_t,format:ho,type:hn};for(je=0;je<An;++je)Fo[je]=K.createCube(un)}for(qt.color=Array(Fo.length),je=0;je<Fo.length;++je){var wn=Fo[je];_(typeof wn=="function"&&wn._reglType==="textureCube","invalid cube map"),_t=_t||wn.width,_(wn.width===_t&&wn.height===_t,"invalid cube map shape"),qt.color[je]={target:zl,data:Fo[je]}}for(je=0;je<6;++je){for(var _n=0;_n<Fo.length;++_n)qt.color[_n].target=zl+je;je>0&&(qt.depth=ke[0].depth,qt.stencil=ke[0].stencil,qt.depthStencil=ke[0].depthStencil),ke[je]?ke[je](qt):ke[je]=ze(qt)}return t(he,{width:_t,height:_t,color:Fo})}function mt(Pt){var je,qt=Pt|0;if(_(qt>0&&qt<=R.maxCubeMapSize,"invalid radius for cube fbo"),qt===he.width)return he;var _t=he.color;for(je=0;je<_t.length;++je)_t[je].resize(qt);for(je=0;je<6;++je)ke[je].resize(qt);return he.width=he.height=qt,he}return he(Ce),t(he,{faces:ke,resize:mt,_reglType:"framebufferCube",destroy:function(){ke.forEach(function(Pt){Pt.destroy()})}})}function wt(){te.cur=null,te.next=null,te.dirty=!0,Ir(ue).forEach(function(Ce){Ce.framebuffer=x.createFramebuffer(),pe(Ce)})}return t(te,{getFramebuffer:function(Ce){if(typeof Ce=="function"&&Ce._reglType==="framebuffer"){var ke=Ce._framebuffer;if(ke instanceof $e)return ke}return null},create:ze,createCube:nt,clear:function(){Ir(ue).forEach(Le)},restore:wt})}var F5=5126,Cp=34962;function Yh(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=F5,this.offset=0,this.stride=0,this.divisor=0}function $5(x,E,R,K,le){for(var X=R.maxAttributes,te=new Array(X),ge=0;ge<X;++ge)te[ge]=new Yh;var be=0,Ee={},we={Record:Yh,scope:{},state:te,currentVAO:null,targetVAO:null,restore:Re()?ue:function(){},createVAO:$e,getVAO:Te,destroyBuffer:Se,setVAO:Re()?j:oe,clear:Re()?Me:function(){}};function Se(me){for(var Le=0;Le<te.length;++Le){var pe=te[Le];pe.buffer===me&&(x.disableVertexAttribArray(Le),pe.buffer=null)}}function Re(){return E.oes_vertex_array_object}function xe(){return E.angle_instanced_arrays}function Te(me){return typeof me=="function"&&me._vao?me._vao:null}function j(me){if(me!==we.currentVAO){var Le=Re();me?Le.bindVertexArrayOES(me.vao):Le.bindVertexArrayOES(null),we.currentVAO=me}}function oe(me){if(me!==we.currentVAO){if(me)me.bindAttrs();else for(var Le=xe(),pe=0;pe<te.length;++pe){var ze=te[pe];ze.buffer?(x.enableVertexAttribArray(pe),x.vertexAttribPointer(pe,ze.size,ze.type,ze.normalized,ze.stride,ze.offfset),Le&&ze.divisor&&Le.vertexAttribDivisorANGLE(pe,ze.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,ze.x,ze.y,ze.z,ze.w))}we.currentVAO=me}}function Me(){Ir(Ee).forEach(function(me){me.destroy()})}function Fe(){this.id=++be,this.attributes=[];var me=Re();me?this.vao=me.createVertexArrayOES():this.vao=null,Ee[this.id]=this,this.buffers=[]}Fe.prototype.bindAttrs=function(){for(var me=xe(),Le=this.attributes,pe=0;pe<Le.length;++pe){var ze=Le[pe];ze.buffer?(x.enableVertexAttribArray(pe),x.bindBuffer(Cp,ze.buffer.buffer),x.vertexAttribPointer(pe,ze.size,ze.type,ze.normalized,ze.stride,ze.offset),me&&ze.divisor&&me.vertexAttribDivisorANGLE(pe,ze.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,ze.x,ze.y,ze.z,ze.w))}for(var nt=Le.length;nt<X;++nt)x.disableVertexAttribArray(nt)},Fe.prototype.refresh=function(){var me=Re();me&&(me.bindVertexArrayOES(this.vao),this.bindAttrs(),we.currentVAO=this)},Fe.prototype.destroy=function(){if(this.vao){var me=Re();this===we.currentVAO&&(we.currentVAO=null,me.bindVertexArrayOES(null)),me.deleteVertexArrayOES(this.vao),this.vao=null}Ee[this.id]&&(delete Ee[this.id],K.vaoCount-=1)};function ue(){var me=Re();me&&Ir(Ee).forEach(function(Le){Le.refresh()})}function $e(me){var Le=new Fe;K.vaoCount+=1;function pe(ze){_(Array.isArray(ze),"arguments to vertex array constructor must be an array"),_(ze.length<X,"too many attributes"),_(ze.length>0,"must specify at least one attribute");var nt={},wt=Le.attributes;wt.length=ze.length;for(var Ce=0;Ce<ze.length;++Ce){var ke=ze[Ce],he=wt[Ce]=new Yh,mt=ke.data||ke;if(Array.isArray(mt)||e(mt)||ga(mt)){var Pt;Le.buffers[Ce]&&(Pt=Le.buffers[Ce],e(mt)&&Pt._buffer.byteLength>=mt.byteLength?Pt.subdata(mt):(Pt.destroy(),Le.buffers[Ce]=null)),Le.buffers[Ce]||(Pt=Le.buffers[Ce]=le.create(ke,Cp,!1,!0)),he.buffer=le.getBuffer(Pt),he.size=he.buffer.dimension|0,he.normalized=!1,he.type=he.buffer.dtype,he.offset=0,he.stride=0,he.divisor=0,he.state=1,nt[Ce]=1}else le.getBuffer(ke)?(he.buffer=le.getBuffer(ke),he.size=he.buffer.dimension|0,he.normalized=!1,he.type=he.buffer.dtype,he.offset=0,he.stride=0,he.divisor=0,he.state=1):le.getBuffer(ke.buffer)?(he.buffer=le.getBuffer(ke.buffer),he.size=(+ke.size||he.buffer.dimension)|0,he.normalized=!!ke.normalized||!1,"type"in ke?(_.parameter(ke.type,Wi,"invalid buffer type"),he.type=Wi[ke.type]):he.type=he.buffer.dtype,he.offset=(ke.offset||0)|0,he.stride=(ke.stride||0)|0,he.divisor=(ke.divisor||0)|0,he.state=1,_(he.size>=1&&he.size<=4,"size must be between 1 and 4"),_(he.offset>=0,"invalid offset"),_(he.stride>=0&&he.stride<=255,"stride must be between 0 and 255"),_(he.divisor>=0,"divisor must be positive"),_(!he.divisor||!!E.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in ke?(_(Ce>0,"first attribute must not be a constant"),he.x=+ke.x||0,he.y=+ke.y||0,he.z=+ke.z||0,he.w=+ke.w||0,he.state=2):_(!1,"invalid attribute spec for location "+Ce)}for(var je=0;je<Le.buffers.length;++je)!nt[je]&&Le.buffers[je]&&(Le.buffers[je].destroy(),Le.buffers[je]=null);return Le.refresh(),pe}return pe.destroy=function(){for(var ze=0;ze<Le.buffers.length;++ze)Le.buffers[ze]&&Le.buffers[ze].destroy();Le.buffers.length=0,Le.destroy()},pe._vao=Le,pe._reglType="vao",pe(me)}return we}var Pp=35632,G5=35633,D5=35718,q5=35721;function H5(x,E,R,K){var le={},X={};function te(j,oe,Me,Fe){this.name=j,this.id=oe,this.location=Me,this.info=Fe}function ge(j,oe){for(var Me=0;Me<j.length;++Me)if(j[Me].id===oe.id){j[Me].location=oe.location;return}j.push(oe)}function be(j,oe,Me){var Fe=j===Pp?le:X,ue=Fe[oe];if(!ue){var $e=E.str(oe);ue=x.createShader(j),x.shaderSource(ue,$e),x.compileShader(ue),_.shaderError(x,ue,$e,j,Me),Fe[oe]=ue}return ue}var Ee={},we=[],Se=0;function Re(j,oe){this.id=Se++,this.fragId=j,this.vertId=oe,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,K.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function xe(j,oe,Me){var Fe,ue,$e=be(Pp,j.fragId),me=be(G5,j.vertId),Le=j.program=x.createProgram();if(x.attachShader(Le,$e),x.attachShader(Le,me),Me)for(Fe=0;Fe<Me.length;++Fe){var pe=Me[Fe];x.bindAttribLocation(Le,pe[0],pe[1])}x.linkProgram(Le),_.linkError(x,Le,E.str(j.fragId),E.str(j.vertId),oe);var ze=x.getProgramParameter(Le,D5);K.profile&&(j.stats.uniformsCount=ze);var nt=j.uniforms;for(Fe=0;Fe<ze;++Fe)if(ue=x.getActiveUniform(Le,Fe),ue)if(ue.size>1)for(var wt=0;wt<ue.size;++wt){var Ce=ue.name.replace("[0]","["+wt+"]");ge(nt,new te(Ce,E.id(Ce),x.getUniformLocation(Le,Ce),ue))}else ge(nt,new te(ue.name,E.id(ue.name),x.getUniformLocation(Le,ue.name),ue));var ke=x.getProgramParameter(Le,q5);K.profile&&(j.stats.attributesCount=ke);var he=j.attributes;for(Fe=0;Fe<ke;++Fe)ue=x.getActiveAttrib(Le,Fe),ue&&ge(he,new te(ue.name,E.id(ue.name),x.getAttribLocation(Le,ue.name),ue))}K.profile&&(R.getMaxUniformsCount=function(){var j=0;return we.forEach(function(oe){oe.stats.uniformsCount>j&&(j=oe.stats.uniformsCount)}),j},R.getMaxAttributesCount=function(){var j=0;return we.forEach(function(oe){oe.stats.attributesCount>j&&(j=oe.stats.attributesCount)}),j});function Te(){le={},X={};for(var j=0;j<we.length;++j)xe(we[j],null,we[j].attributes.map(function(oe){return[oe.location,oe.name]}))}return{clear:function(){var j=x.deleteShader.bind(x);Ir(le).forEach(j),le={},Ir(X).forEach(j),X={},we.forEach(function(oe){x.deleteProgram(oe.program)}),we.length=0,Ee={},R.shaderCount=0},program:function(j,oe,Me,Fe){_.command(j>=0,"missing vertex shader",Me),_.command(oe>=0,"missing fragment shader",Me);var ue=Ee[oe];ue||(ue=Ee[oe]={});var $e=ue[j];if($e&&($e.refCount++,!Fe))return $e;var me=new Re(oe,j);return R.shaderCount++,xe(me,Me,Fe),$e||(ue[j]=me),we.push(me),t(me,{destroy:function(){if(me.refCount--,me.refCount<=0){x.deleteProgram(me.program);var Le=we.indexOf(me);we.splice(Le,1),R.shaderCount--}ue[me.vertId].refCount<=0&&(x.deleteShader(X[me.vertId]),delete X[me.vertId],delete Ee[me.fragId][me.vertId]),Object.keys(Ee[me.fragId]).length||(x.deleteShader(le[me.fragId]),delete le[me.fragId],delete Ee[me.fragId])}})},restore:Te,shader:be,frag:-1,vert:-1}}var j5=6408,cc=5121,B5=3333,Rl=5126;function U5(x,E,R,K,le,X,te){function ge(we){var Se;E.next===null?(_(le.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Se=cc):(_(E.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Se=E.next.colorAttachments[0].texture._texture.type,X.oes_texture_float?(_(Se===cc||Se===Rl,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Se===Rl&&_(te.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(Se===cc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Re=0,xe=0,Te=K.framebufferWidth,j=K.framebufferHeight,oe=null;e(we)?oe=we:we&&(_.type(we,"object","invalid arguments to regl.read()"),Re=we.x|0,xe=we.y|0,_(Re>=0&&Re<K.framebufferWidth,"invalid x offset for regl.read"),_(xe>=0&&xe<K.framebufferHeight,"invalid y offset for regl.read"),Te=(we.width||K.framebufferWidth-Re)|0,j=(we.height||K.framebufferHeight-xe)|0,oe=we.data||null),oe&&(Se===cc?_(oe instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Se===Rl&&_(oe instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(Te>0&&Te+Re<=K.framebufferWidth,"invalid width for read pixels"),_(j>0&&j+xe<=K.framebufferHeight,"invalid height for read pixels"),R();var Me=Te*j*4;return oe||(Se===cc?oe=new Uint8Array(Me):Se===Rl&&(oe=oe||new Float32Array(Me))),_.isTypedArray(oe,"data buffer for regl.read() must be a typedarray"),_(oe.byteLength>=Me,"data buffer for regl.read() too small"),x.pixelStorei(B5,4),x.readPixels(Re,xe,Te,j,j5,Se,oe),oe}function be(we){var Se;return E.setFBO({framebuffer:we.framebuffer},function(){Se=ge(we)}),Se}function Ee(we){return!we||!("framebuffer"in we)?ge(we):be(we)}return Ee}function W0(x){return Array.prototype.slice.call(x)}function V0(x){return W0(x).join("")}function W5(){var x=0,E=[],R=[];function K(Se){for(var Re=0;Re<R.length;++Re)if(R[Re]===Se)return E[Re];var xe="g"+x++;return E.push(xe),R.push(Se),xe}function le(){var Se=[];function Re(){Se.push.apply(Se,W0(arguments))}var xe=[];function Te(){var j="v"+x++;return xe.push(j),arguments.length>0&&(Se.push(j,"="),Se.push.apply(Se,W0(arguments)),Se.push(";")),j}return t(Re,{def:Te,toString:function(){return V0([xe.length>0?"var "+xe.join(",")+";":"",V0(Se)])}})}function X(){var Se=le(),Re=le(),xe=Se.toString,Te=Re.toString;function j(oe,Me){Re(oe,Me,"=",Se.def(oe,Me),";")}return t(function(){Se.apply(Se,W0(arguments))},{def:Se.def,entry:Se,exit:Re,save:j,set:function(oe,Me,Fe){j(oe,Me),Se(oe,Me,"=",Fe,";")},toString:function(){return xe()+Te()}})}function te(){var Se=V0(arguments),Re=X(),xe=X(),Te=Re.toString,j=xe.toString;return t(Re,{then:function(){return Re.apply(Re,W0(arguments)),this},else:function(){return xe.apply(xe,W0(arguments)),this},toString:function(){var oe=j();return oe&&(oe="else{"+oe+"}"),V0(["if(",Se,"){",Te(),"}",oe])}})}var ge=le(),be={};function Ee(Se,Re){var xe=[];function Te(){var ue="a"+xe.length;return xe.push(ue),ue}Re=Re||0;for(var j=0;j<Re;++j)Te();var oe=X(),Me=oe.toString,Fe=be[Se]=t(oe,{arg:Te,toString:function(){return V0(["function(",xe.join(),"){",Me(),"}"])}});return Fe}function we(){var Se=['"use strict";',ge,"return {"];Object.keys(be).forEach(function(Te){Se.push('"',Te,'":',be[Te].toString(),",")}),Se.push("}");var Re=V0(Se).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),xe=Function.apply(null,E.concat(Re));return xe.apply(null,R)}return{global:ge,link:K,block:le,proc:Ee,scope:X,cond:te,compile:we}}var X0="xyzw".split(""),Ip=5121,Y0=1,Kh=2,Qh=0,Zh=1,Jh=2,eu=3,Cl=4,Op=5,Fp=6,$p="dither",Gp="blend.enable",Dp="blend.color",tu="blend.equation",ou="blend.func",qp="depth.enable",Hp="depth.func",jp="depth.range",Bp="depth.mask",nu="colorMask",Up="cull.enable",Wp="cull.face",ru="frontFace",au="lineWidth",Vp="polygonOffset.enable",iu="polygonOffset.offset",Xp="sample.alpha",Yp="sample.enable",su="sample.coverage",Kp="stencil.enable",Qp="stencil.mask",cu="stencil.func",lu="stencil.opFront",lc="stencil.opBack",Zp="scissor.enable",Pl="scissor.box",Ua="viewport",fc="profile",Qi="framebuffer",hc="vert",uc="frag",Zi="elements",Ji="primitive",e0="count",Il="offset",Ol="instances",dc="vao",fu="Width",hu="Height",K0=Qi+fu,Q0=Qi+hu,V5=Ua+fu,X5=Ua+hu,Jp="drawingBuffer",ev=Jp+fu,tv=Jp+hu,Y5=[ou,tu,cu,lu,lc,su,Ua,Pl,iu],Z0=34962,K5=34963,Q5=35632,Z5=35633,ov=3553,J5=34067,ew=2884,tw=3042,ow=3024,nw=2960,rw=2929,aw=3089,iw=32823,sw=32926,cw=32928,uu=5126,Fl=35664,$l=35665,Gl=35666,du=5124,Dl=35667,ql=35668,Hl=35669,pu=35670,jl=35671,Bl=35672,Ul=35673,pc=35674,vc=35675,mc=35676,gc=35678,xc=35680,nv=4,yc=1028,t0=1029,rv=2304,vu=2305,lw=32775,fw=32776,hw=519,li=7680,av=0,iv=1,sv=32774,uw=513,cv=36160,dw=36064,Ca={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},lv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],J0={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},fi={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},fv={frag:Q5,vert:Z5},mu={cw:rv,ccw:vu};function Wl(x){return Array.isArray(x)||e(x)||ga(x)}function hv(x){return x.sort(function(E,R){return E===Ua?-1:R===Ua?1:E<R?-1:1})}function dr(x,E,R,K){this.thisDep=x,this.contextDep=E,this.propDep=R,this.append=K}function hi(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function fn(x){return new dr(!1,!1,!1,x)}function Ar(x,E){var R=x.type;if(R===Qh){var K=x.data.length;return new dr(!0,K>=1,K>=2,E)}else if(R===Cl){var le=x.data;return new dr(le.thisDep,le.contextDep,le.propDep,E)}else{if(R===Op)return new dr(!1,!1,!1,E);if(R===Fp){for(var X=!1,te=!1,ge=!1,be=0;be<x.data.length;++be){var Ee=x.data[be];if(Ee.type===Zh)ge=!0;else if(Ee.type===Jh)te=!0;else if(Ee.type===eu)X=!0;else if(Ee.type===Qh){X=!0;var we=Ee.data;we>=1&&(te=!0),we>=2&&(ge=!0)}else Ee.type===Cl&&(X=X||Ee.data.thisDep,te=te||Ee.data.contextDep,ge=ge||Ee.data.propDep)}return new dr(X,te,ge,E)}else return new dr(R===eu,R===Jh,R===Zh,E)}}var uv=new dr(!1,!1,!1,function(){});function pw(x,E,R,K,le,X,te,ge,be,Ee,we,Se,Re,xe,Te){var j=Ee.Record,oe={add:32774,subtract:32778,"reverse subtract":32779};R.ext_blend_minmax&&(oe.min=lw,oe.max=fw);var Me=R.angle_instanced_arrays,Fe=R.webgl_draw_buffers,ue={dirty:!0,profile:Te.profile},$e={},me=[],Le={},pe={};function ze(A){return A.replace(".","_")}function nt(A,w,P){var H=ze(A);me.push(A),$e[H]=ue[H]=!!P,Le[H]=w}function wt(A,w,P){var H=ze(A);me.push(A),Array.isArray(P)?(ue[H]=P.slice(),$e[H]=P.slice()):ue[H]=$e[H]=P,pe[H]=w}nt($p,ow),nt(Gp,tw),wt(Dp,"blendColor",[0,0,0,0]),wt(tu,"blendEquationSeparate",[sv,sv]),wt(ou,"blendFuncSeparate",[iv,av,iv,av]),nt(qp,rw,!0),wt(Hp,"depthFunc",uw),wt(jp,"depthRange",[0,1]),wt(Bp,"depthMask",!0),wt(nu,nu,[!0,!0,!0,!0]),nt(Up,ew),wt(Wp,"cullFace",t0),wt(ru,ru,vu),wt(au,au,1),nt(Vp,iw),wt(iu,"polygonOffset",[0,0]),nt(Xp,sw),nt(Yp,cw),wt(su,"sampleCoverage",[1,!1]),nt(Kp,nw),wt(Qp,"stencilMask",-1),wt(cu,"stencilFunc",[hw,0,-1]),wt(lu,"stencilOpSeparate",[yc,li,li,li]),wt(lc,"stencilOpSeparate",[t0,li,li,li]),nt(Zp,aw),wt(Pl,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),wt(Ua,Ua,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Ce={gl:x,context:Re,strings:E,next:$e,current:ue,draw:Se,elements:X,buffer:le,shader:we,attributes:Ee.state,vao:Ee,uniforms:be,framebuffer:ge,extensions:R,timer:xe,isBufferArgs:Wl},ke={primTypes:$0,compareFuncs:J0,blendFuncs:Ca,blendEquations:oe,stencilOps:fi,glTypes:Wi,orientationType:mu};_.optional(function(){Ce.isArrayLike=on}),Fe&&(ke.backBuffer=[t0],ke.drawBuffer=vt(K.maxDrawbuffers,function(A){return A===0?[0]:vt(A,function(w){return dw+w})}));var he=0;function mt(){var A=W5(),w=A.link,P=A.global;A.id=he++,A.batchId="0";var H=w(Ce),B=A.shared={props:"a0"};Object.keys(Ce).forEach(function(C){B[C]=P.def(H,".",C)}),_.optional(function(){A.CHECK=w(_),A.commandStr=_.guessCommand(),A.command=w(A.commandStr),A.assert=function(C,S,G){C("if(!(",S,"))",this.CHECK,".commandRaise(",w(G),",",this.command,");")},ke.invalidBlendCombinations=lv});var F=A.next={},I=A.current={};Object.keys(pe).forEach(function(C){Array.isArray(ue[C])&&(F[C]=P.def(B.next,".",C),I[C]=P.def(B.current,".",C))});var $=A.constants={};Object.keys(ke).forEach(function(C){$[C]=P.def(JSON.stringify(ke[C]))}),A.invoke=function(C,S){switch(S.type){case Qh:var G=["this",B.context,B.props,A.batchId];return C.def(w(S.data),".call(",G.slice(0,Math.max(S.data.length+1,4)),")");case Zh:return C.def(B.props,S.data);case Jh:return C.def(B.context,S.data);case eu:return C.def("this",S.data);case Cl:return S.data.append(A,C),S.data.ref;case Op:return S.data.toString();case Fp:return S.data.map(function(U){return A.invoke(C,U)})}},A.attribCache={};var T={};return A.scopeAttrib=function(C){var S=E.id(C);if(S in T)return T[S];var G=Ee.scope[S];G||(G=Ee.scope[S]=new j);var U=T[S]=w(G);return U},A}function Pt(A){var w=A.static,P=A.dynamic,H;if(fc in w){var B=!!w[fc];H=fn(function(I,$){return B}),H.enable=B}else if(fc in P){var F=P[fc];H=Ar(F,function(I,$){return I.invoke($,F)})}return H}function je(A,w){var P=A.static,H=A.dynamic;if(Qi in P){var B=P[Qi];return B?(B=ge.getFramebuffer(B),_.command(B,"invalid framebuffer object"),fn(function(I,$){var T=I.link(B),C=I.shared;$.set(C.framebuffer,".next",T);var S=C.context;return $.set(S,"."+K0,T+".width"),$.set(S,"."+Q0,T+".height"),T})):fn(function(I,$){var T=I.shared;$.set(T.framebuffer,".next","null");var C=T.context;return $.set(C,"."+K0,C+"."+ev),$.set(C,"."+Q0,C+"."+tv),"null"})}else if(Qi in H){var F=H[Qi];return Ar(F,function(I,$){var T=I.invoke($,F),C=I.shared,S=C.framebuffer,G=$.def(S,".getFramebuffer(",T,")");_.optional(function(){I.assert($,"!"+T+"||"+G,"invalid framebuffer object")}),$.set(S,".next",G);var U=C.context;return $.set(U,"."+K0,G+"?"+G+".width:"+U+"."+ev),$.set(U,"."+Q0,G+"?"+G+".height:"+U+"."+tv),G})}else return null}function qt(A,w,P){var H=A.static,B=A.dynamic;function F(T){if(T in H){var C=H[T];_.commandType(C,"object","invalid "+T,P.commandStr);var S=!0,G=C.x|0,U=C.y|0,se,fe;return"width"in C?(se=C.width|0,_.command(se>=0,"invalid "+T,P.commandStr)):S=!1,"height"in C?(fe=C.height|0,_.command(fe>=0,"invalid "+T,P.commandStr)):S=!1,new dr(!S&&w&&w.thisDep,!S&&w&&w.contextDep,!S&&w&&w.propDep,function(Je,Ot){var Be=Je.shared.context,ft=se;"width"in C||(ft=Ot.def(Be,".",K0,"-",G));var kt=fe;return"height"in C||(kt=Ot.def(Be,".",Q0,"-",U)),[G,U,ft,kt]})}else if(T in B){var ae=B[T],_e=Ar(ae,function(Je,Ot){var Be=Je.invoke(Ot,ae);_.optional(function(){Je.assert(Ot,Be+"&&typeof "+Be+'==="object"',"invalid "+T)});var ft=Je.shared.context,kt=Ot.def(Be,".x|0"),uo=Ot.def(Be,".y|0"),Qo=Ot.def('"width" in ',Be,"?",Be,".width|0:","(",ft,".",K0,"-",kt,")"),pr=Ot.def('"height" in ',Be,"?",Be,".height|0:","(",ft,".",Q0,"-",uo,")");return _.optional(function(){Je.assert(Ot,Qo+">=0&&"+pr+">=0","invalid "+T)}),[kt,uo,Qo,pr]});return w&&(_e.thisDep=_e.thisDep||w.thisDep,_e.contextDep=_e.contextDep||w.contextDep,_e.propDep=_e.propDep||w.propDep),_e}else return w?new dr(w.thisDep,w.contextDep,w.propDep,function(Je,Ot){var Be=Je.shared.context;return[0,0,Ot.def(Be,".",K0),Ot.def(Be,".",Q0)]}):null}var I=F(Ua);if(I){var $=I;I=new dr(I.thisDep,I.contextDep,I.propDep,function(T,C){var S=$.append(T,C),G=T.shared.context;return C.set(G,"."+V5,S[2]),C.set(G,"."+X5,S[3]),S})}return{viewport:I,scissor_box:F(Pl)}}function _t(A,w){var P=A.static,H=typeof P[uc]=="string"&&typeof P[hc]=="string";if(H){if(Object.keys(w.dynamic).length>0)return null;var B=w.static,F=Object.keys(B);if(F.length>0&&typeof B[F[0]]=="number"){for(var I=[],$=0;$<F.length;++$)_(typeof B[F[$]]=="number","must specify all vertex attribute locations when using vaos"),I.push([B[F[$]]|0,F[$]]);return I}}return null}function Gt(A,w,P){var H=A.static,B=A.dynamic;function F(S){if(S in H){var G=E.id(H[S]);_.optional(function(){we.shader(fv[S],G,_.guessCommand())});var U=fn(function(){return G});return U.id=G,U}else if(S in B){var se=B[S];return Ar(se,function(fe,ae){var _e=fe.invoke(ae,se),Je=ae.def(fe.shared.strings,".id(",_e,")");return _.optional(function(){ae(fe.shared.shader,".shader(",fv[S],",",Je,",",fe.command,");")}),Je})}return null}var I=F(uc),$=F(hc),T=null,C;return hi(I)&&hi($)?(T=we.program($.id,I.id,null,P),C=fn(function(S,G){return S.link(T)})):C=new dr(I&&I.thisDep||$&&$.thisDep,I&&I.contextDep||$&&$.contextDep,I&&I.propDep||$&&$.propDep,function(S,G){var U=S.shared.shader,se;I?se=I.append(S,G):se=G.def(U,".",uc);var fe;$?fe=$.append(S,G):fe=G.def(U,".",hc);var ae=U+".program("+fe+","+se;return _.optional(function(){ae+=","+S.command}),G.def(ae+")")}),{frag:I,vert:$,progVar:C,program:T}}function ho(A,w){var P=A.static,H=A.dynamic;function B(){if(Zi in P){var S=P[Zi];Wl(S)?S=X.getElements(X.create(S,!0)):S&&(S=X.getElements(S),_.command(S,"invalid elements",w.commandStr));var G=fn(function(se,fe){if(S){var ae=se.link(S);return se.ELEMENTS=ae,ae}return se.ELEMENTS=null,null});return G.value=S,G}else if(Zi in H){var U=H[Zi];return Ar(U,function(se,fe){var ae=se.shared,_e=ae.isBufferArgs,Je=ae.elements,Ot=se.invoke(fe,U),Be=fe.def("null"),ft=fe.def(_e,"(",Ot,")"),kt=se.cond(ft).then(Be,"=",Je,".createStream(",Ot,");").else(Be,"=",Je,".getElements(",Ot,");");return _.optional(function(){se.assert(kt.else,"!"+Ot+"||"+Be,"invalid elements")}),fe.entry(kt),fe.exit(se.cond(ft).then(Je,".destroyStream(",Be,");")),se.ELEMENTS=Be,Be})}return null}var F=B();function I(){if(Ji in P){var S=P[Ji];return _.commandParameter(S,$0,"invalid primitve",w.commandStr),fn(function(U,se){return $0[S]})}else if(Ji in H){var G=H[Ji];return Ar(G,function(U,se){var fe=U.constants.primTypes,ae=U.invoke(se,G);return _.optional(function(){U.assert(se,ae+" in "+fe,"invalid primitive, must be one of "+Object.keys($0))}),se.def(fe,"[",ae,"]")})}else if(F)return hi(F)?F.value?fn(function(U,se){return se.def(U.ELEMENTS,".primType")}):fn(function(){return nv}):new dr(F.thisDep,F.contextDep,F.propDep,function(U,se){var fe=U.ELEMENTS;return se.def(fe,"?",fe,".primType:",nv)});return null}function $(S,G){if(S in P){var U=P[S]|0;return _.command(!G||U>=0,"invalid "+S,w.commandStr),fn(function(fe,ae){return G&&(fe.OFFSET=U),U})}else if(S in H){var se=H[S];return Ar(se,function(fe,ae){var _e=fe.invoke(ae,se);return G&&(fe.OFFSET=_e,_.optional(function(){fe.assert(ae,_e+">=0","invalid "+S)})),_e})}else if(G&&F)return fn(function(fe,ae){return fe.OFFSET="0",0});return null}var T=$(Il,!0);function C(){if(e0 in P){var S=P[e0]|0;return _.command(typeof S=="number"&&S>=0,"invalid vertex count",w.commandStr),fn(function(){return S})}else if(e0 in H){var G=H[e0];return Ar(G,function(fe,ae){var _e=fe.invoke(ae,G);return _.optional(function(){fe.assert(ae,"typeof "+_e+'==="number"&&'+_e+">=0&&"+_e+"===("+_e+"|0)","invalid vertex count")}),_e})}else if(F)if(hi(F)){if(F)return T?new dr(T.thisDep,T.contextDep,T.propDep,function(fe,ae){var _e=ae.def(fe.ELEMENTS,".vertCount-",fe.OFFSET);return _.optional(function(){fe.assert(ae,_e+">=0","invalid vertex offset/element buffer too small")}),_e}):fn(function(fe,ae){return ae.def(fe.ELEMENTS,".vertCount")});var U=fn(function(){return-1});return _.optional(function(){U.MISSING=!0}),U}else{var se=new dr(F.thisDep||T.thisDep,F.contextDep||T.contextDep,F.propDep||T.propDep,function(fe,ae){var _e=fe.ELEMENTS;return fe.OFFSET?ae.def(_e,"?",_e,".vertCount-",fe.OFFSET,":-1"):ae.def(_e,"?",_e,".vertCount:-1")});return _.optional(function(){se.DYNAMIC=!0}),se}return null}return{elements:F,primitive:I(),count:C(),instances:$(Ol,!1),offset:T}}function hn(A,w){var P=A.static,H=A.dynamic,B={};return me.forEach(function(F){var I=ze(F);function $(T,C){if(F in P){var S=T(P[F]);B[I]=fn(function(){return S})}else if(F in H){var G=H[F];B[I]=Ar(G,function(U,se){return C(U,se,U.invoke(se,G))})}}switch(F){case Up:case Gp:case $p:case Kp:case qp:case Zp:case Vp:case Xp:case Yp:case Bp:return $(function(T){return _.commandType(T,"boolean",F,w.commandStr),T},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="boolean"',"invalid flag "+F,T.commandStr)}),S});case Hp:return $(function(T){return _.commandParameter(T,J0,"invalid "+F,w.commandStr),J0[T]},function(T,C,S){var G=T.constants.compareFuncs;return _.optional(function(){T.assert(C,S+" in "+G,"invalid "+F+", must be one of "+Object.keys(J0))}),C.def(G,"[",S,"]")});case jp:return $(function(T){return _.command(on(T)&&T.length===2&&typeof T[0]=="number"&&typeof T[1]=="number"&&T[0]<=T[1],"depth range is 2d array",w.commandStr),T},function(T,C,S){_.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var G=C.def("+",S,"[0]"),U=C.def("+",S,"[1]");return[G,U]});case ou:return $(function(T){_.commandType(T,"object","blend.func",w.commandStr);var C="srcRGB"in T?T.srcRGB:T.src,S="srcAlpha"in T?T.srcAlpha:T.src,G="dstRGB"in T?T.dstRGB:T.dst,U="dstAlpha"in T?T.dstAlpha:T.dst;return _.commandParameter(C,Ca,I+".srcRGB",w.commandStr),_.commandParameter(S,Ca,I+".srcAlpha",w.commandStr),_.commandParameter(G,Ca,I+".dstRGB",w.commandStr),_.commandParameter(U,Ca,I+".dstAlpha",w.commandStr),_.command(lv.indexOf(C+", "+G)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+C+", "+G+")",w.commandStr),[Ca[C],Ca[G],Ca[S],Ca[U]]},function(T,C,S){var G=T.constants.blendFuncs;_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function U(Be,ft){var kt=C.def('"',Be,ft,'" in ',S,"?",S,".",Be,ft,":",S,".",Be);return _.optional(function(){T.assert(C,kt+" in "+G,"invalid "+F+"."+Be+ft+", must be one of "+Object.keys(Ca))}),kt}var se=U("src","RGB"),fe=U("dst","RGB");_.optional(function(){var Be=T.constants.invalidBlendCombinations;T.assert(C,Be+".indexOf("+se+'+", "+'+fe+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ae=C.def(G,"[",se,"]"),_e=C.def(G,"[",U("src","Alpha"),"]"),Je=C.def(G,"[",fe,"]"),Ot=C.def(G,"[",U("dst","Alpha"),"]");return[ae,Je,_e,Ot]});case tu:return $(function(T){if(typeof T=="string")return _.commandParameter(T,oe,"invalid "+F,w.commandStr),[oe[T],oe[T]];if(typeof T=="object")return _.commandParameter(T.rgb,oe,F+".rgb",w.commandStr),_.commandParameter(T.alpha,oe,F+".alpha",w.commandStr),[oe[T.rgb],oe[T.alpha]];_.commandRaise("invalid blend.equation",w.commandStr)},function(T,C,S){var G=T.constants.blendEquations,U=C.def(),se=C.def(),fe=T.cond("typeof ",S,'==="string"');return _.optional(function(){function ae(_e,Je,Ot){T.assert(_e,Ot+" in "+G,"invalid "+Je+", must be one of "+Object.keys(oe))}ae(fe.then,F,S),T.assert(fe.else,S+"&&typeof "+S+'==="object"',"invalid "+F),ae(fe.else,F+".rgb",S+".rgb"),ae(fe.else,F+".alpha",S+".alpha")}),fe.then(U,"=",se,"=",G,"[",S,"];"),fe.else(U,"=",G,"[",S,".rgb];",se,"=",G,"[",S,".alpha];"),C(fe),[U,se]});case Dp:return $(function(T){return _.command(on(T)&&T.length===4,"blend.color must be a 4d array",w.commandStr),vt(4,function(C){return+T[C]})},function(T,C,S){return _.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),vt(4,function(G){return C.def("+",S,"[",G,"]")})});case Qp:return $(function(T){return _.commandType(T,"number",I,w.commandStr),T|0},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="number"',"invalid stencil.mask")}),C.def(S,"|0")});case cu:return $(function(T){_.commandType(T,"object",I,w.commandStr);var C=T.cmp||"keep",S=T.ref||0,G="mask"in T?T.mask:-1;return _.commandParameter(C,J0,F+".cmp",w.commandStr),_.commandType(S,"number",F+".ref",w.commandStr),_.commandType(G,"number",F+".mask",w.commandStr),[J0[C],S,G]},function(T,C,S){var G=T.constants.compareFuncs;_.optional(function(){function ae(){T.assert(C,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ae(S+"&&typeof ",S,'==="object"'),ae('!("cmp" in ',S,")||(",S,".cmp in ",G,")")});var U=C.def('"cmp" in ',S,"?",G,"[",S,".cmp]",":",li),se=C.def(S,".ref|0"),fe=C.def('"mask" in ',S,"?",S,".mask|0:-1");return[U,se,fe]});case lu:case lc:return $(function(T){_.commandType(T,"object",I,w.commandStr);var C=T.fail||"keep",S=T.zfail||"keep",G=T.zpass||"keep";return _.commandParameter(C,fi,F+".fail",w.commandStr),_.commandParameter(S,fi,F+".zfail",w.commandStr),_.commandParameter(G,fi,F+".zpass",w.commandStr),[F===lc?t0:yc,fi[C],fi[S],fi[G]]},function(T,C,S){var G=T.constants.stencilOps;_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid "+F)});function U(se){return _.optional(function(){T.assert(C,'!("'+se+'" in '+S+")||("+S+"."+se+" in "+G+")","invalid "+F+"."+se+", must be one of "+Object.keys(fi))}),C.def('"',se,'" in ',S,"?",G,"[",S,".",se,"]:",li)}return[F===lc?t0:yc,U("fail"),U("zfail"),U("zpass")]});case iu:return $(function(T){_.commandType(T,"object",I,w.commandStr);var C=T.factor|0,S=T.units|0;return _.commandType(C,"number",I+".factor",w.commandStr),_.commandType(S,"number",I+".units",w.commandStr),[C,S]},function(T,C,S){_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid "+F)});var G=C.def(S,".factor|0"),U=C.def(S,".units|0");return[G,U]});case Wp:return $(function(T){var C=0;return T==="front"?C=yc:T==="back"&&(C=t0),_.command(!!C,I,w.commandStr),C},function(T,C,S){return _.optional(function(){T.assert(C,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),C.def(S,'==="front"?',yc,":",t0)});case au:return $(function(T){return _.command(typeof T=="number"&&T>=K.lineWidthDims[0]&&T<=K.lineWidthDims[1],"invalid line width, must be a positive number between "+K.lineWidthDims[0]+" and "+K.lineWidthDims[1],w.commandStr),T},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="number"&&'+S+">="+K.lineWidthDims[0]+"&&"+S+"<="+K.lineWidthDims[1],"invalid line width")}),S});case ru:return $(function(T){return _.commandParameter(T,mu,I,w.commandStr),mu[T]},function(T,C,S){return _.optional(function(){T.assert(C,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),C.def(S+'==="cw"?'+rv+":"+vu)});case nu:return $(function(T){return _.command(on(T)&&T.length===4,"color.mask must be length 4 array",w.commandStr),T.map(function(C){return!!C})},function(T,C,S){return _.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),vt(4,function(G){return"!!"+S+"["+G+"]"})});case su:return $(function(T){_.command(typeof T=="object"&&T,I,w.commandStr);var C="value"in T?T.value:1,S=!!T.invert;return _.command(typeof C=="number"&&C>=0&&C<=1,"sample.coverage.value must be a number between 0 and 1",w.commandStr),[C,S]},function(T,C,S){_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var G=C.def('"value" in ',S,"?+",S,".value:1"),U=C.def("!!",S,".invert");return[G,U]})}}),B}function An(A,w){var P=A.static,H=A.dynamic,B={};return Object.keys(P).forEach(function(F){var I=P[F],$;if(typeof I=="number"||typeof I=="boolean")$=fn(function(){return I});else if(typeof I=="function"){var T=I._reglType;T==="texture2d"||T==="textureCube"?$=fn(function(C){return C.link(I)}):T==="framebuffer"||T==="framebufferCube"?(_.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',w.commandStr),$=fn(function(C){return C.link(I.color[0])})):_.commandRaise('invalid data for uniform "'+F+'"',w.commandStr)}else on(I)?$=fn(function(C){var S=C.global.def("[",vt(I.length,function(G){return _.command(typeof I[G]=="number"||typeof I[G]=="boolean","invalid uniform "+F,C.commandStr),I[G]}),"]");return S}):_.commandRaise('invalid or missing data for uniform "'+F+'"',w.commandStr);$.value=I,B[F]=$}),Object.keys(H).forEach(function(F){var I=H[F];B[F]=Ar(I,function($,T){return $.invoke(T,I)})}),B}function Ut(A,w){var P=A.static,H=A.dynamic,B={};return Object.keys(P).forEach(function(F){var I=P[F],$=E.id(F),T=new j;if(Wl(I))T.state=Y0,T.buffer=le.getBuffer(le.create(I,Z0,!1,!0)),T.type=0;else{var C=le.getBuffer(I);if(C)T.state=Y0,T.buffer=C,T.type=0;else if(_.command(typeof I=="object"&&I,"invalid data for attribute "+F,w.commandStr),"constant"in I){var S=I.constant;T.buffer="null",T.state=Kh,typeof S=="number"?T.x=S:(_.command(on(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+F,w.commandStr),X0.forEach(function(Je,Ot){Ot<S.length&&(T[Je]=S[Ot])}))}else{Wl(I.buffer)?C=le.getBuffer(le.create(I.buffer,Z0,!1,!0)):C=le.getBuffer(I.buffer),_.command(!!C,'missing buffer for attribute "'+F+'"',w.commandStr);var G=I.offset|0;_.command(G>=0,'invalid offset for attribute "'+F+'"',w.commandStr);var U=I.stride|0;_.command(U>=0&&U<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',w.commandStr);var se=I.size|0;_.command(!("size"in I)||se>0&&se<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',w.commandStr);var fe=!!I.normalized,ae=0;"type"in I&&(_.commandParameter(I.type,Wi,"invalid type for attribute "+F,w.commandStr),ae=Wi[I.type]);var _e=I.divisor|0;"divisor"in I&&(_.command(_e===0||Me,'cannot specify divisor for attribute "'+F+'", instancing not supported',w.commandStr),_.command(_e>=0,'invalid divisor for attribute "'+F+'"',w.commandStr)),_.optional(function(){var Je=w.commandStr,Ot=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(Be){_.command(Ot.indexOf(Be)>=0,'unknown parameter "'+Be+'" for attribute pointer "'+F+'" (valid parameters are '+Ot+")",Je)})}),T.buffer=C,T.state=Y0,T.size=se,T.normalized=fe,T.type=ae||C.dtype,T.offset=G,T.stride=U,T.divisor=_e}}B[F]=fn(function(Je,Ot){var Be=Je.attribCache;if($ in Be)return Be[$];var ft={isStream:!1};return Object.keys(T).forEach(function(kt){ft[kt]=T[kt]}),T.buffer&&(ft.buffer=Je.link(T.buffer),ft.type=ft.type||ft.buffer+".dtype"),Be[$]=ft,ft})}),Object.keys(H).forEach(function(F){var I=H[F];function $(T,C){var S=T.invoke(C,I),G=T.shared,U=T.constants,se=G.isBufferArgs,fe=G.buffer;_.optional(function(){T.assert(C,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+se+"("+S+")||"+fe+".getBuffer("+S+")||"+fe+".getBuffer("+S+".buffer)||"+se+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+G.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+F+'"')});var ae={isStream:C.def(!1)},_e=new j;_e.state=Y0,Object.keys(_e).forEach(function(ft){ae[ft]=C.def(""+_e[ft])});var Je=ae.buffer,Ot=ae.type;C("if(",se,"(",S,")){",ae.isStream,"=true;",Je,"=",fe,".createStream(",Z0,",",S,");",Ot,"=",Je,".dtype;","}else{",Je,"=",fe,".getBuffer(",S,");","if(",Je,"){",Ot,"=",Je,".dtype;",'}else if("constant" in ',S,"){",ae.state,"=",Kh,";","if(typeof "+S+'.constant === "number"){',ae[X0[0]],"=",S,".constant;",X0.slice(1).map(function(ft){return ae[ft]}).join("="),"=0;","}else{",X0.map(function(ft,kt){return ae[ft]+"="+S+".constant.length>"+kt+"?"+S+".constant["+kt+"]:0;"}).join(""),"}}else{","if(",se,"(",S,".buffer)){",Je,"=",fe,".createStream(",Z0,",",S,".buffer);","}else{",Je,"=",fe,".getBuffer(",S,".buffer);","}",Ot,'="type" in ',S,"?",U.glTypes,"[",S,".type]:",Je,".dtype;",ae.normalized,"=!!",S,".normalized;");function Be(ft){C(ae[ft],"=",S,".",ft,"|0;")}return Be("size"),Be("offset"),Be("stride"),Be("divisor"),C("}}"),C.exit("if(",ae.isStream,"){",fe,".destroyStream(",Je,");","}"),ae}B[F]=Ar(I,$)}),B}function bn(A,w){var P=A.static,H=A.dynamic;if(dc in P){var B=P[dc];return B!==null&&Ee.getVAO(B)===null&&(B=Ee.createVAO(B)),fn(function(I){return I.link(Ee.getVAO(B))})}else if(dc in H){var F=H[dc];return Ar(F,function(I,$){var T=I.invoke($,F);return $.def(I.shared.vao+".getVAO("+T+")")})}return null}function Fo(A){var w=A.static,P=A.dynamic,H={};return Object.keys(w).forEach(function(B){var F=w[B];H[B]=fn(function(I,$){return typeof F=="number"||typeof F=="boolean"?""+F:I.link(F)})}),Object.keys(P).forEach(function(B){var F=P[B];H[B]=Ar(F,function(I,$){return I.invoke($,F)})}),H}function un(A,w,P,H,B){var F=A.static,I=A.dynamic;_.optional(function(){var Be=[Qi,hc,uc,Zi,Ji,Il,e0,Ol,fc,dc].concat(me);function ft(kt){Object.keys(kt).forEach(function(uo){_.command(Be.indexOf(uo)>=0,'unknown parameter "'+uo+'"',B.commandStr)})}ft(F),ft(I)});var $=_t(A,w),T=je(A,B),C=qt(A,T,B),S=ho(A,B),G=hn(A,B),U=Gt(A,B,$);function se(Be){var ft=C[Be];ft&&(G[Be]=ft)}se(Ua),se(ze(Pl));var fe=Object.keys(G).length>0,ae={framebuffer:T,draw:S,shader:U,state:G,dirty:fe,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ae.profile=Pt(A,B),ae.uniforms=An(P,B),ae.drawVAO=ae.scopeVAO=bn(A,B),!ae.drawVAO&&U.program&&!$&&R.angle_instanced_arrays){var _e=!0,Je=U.program.attributes.map(function(Be){var ft=w.static[Be];return _e=_e&&!!ft,ft});if(_e&&Je.length>0){var Ot=Ee.getVAO(Ee.createVAO(Je));ae.drawVAO=new dr(null,null,null,function(Be,ft){return Be.link(Ot)}),ae.useVAO=!0}}return $?ae.useVAO=!0:ae.attributes=Ut(w,B),ae.context=Fo(H,B),ae}function wn(A,w,P){var H=A.shared,B=H.context,F=A.scope();Object.keys(P).forEach(function(I){w.save(B,"."+I);var $=P[I],T=$.append(A,w);Array.isArray(T)?F(B,".",I,"=[",T.join(),"];"):F(B,".",I,"=",T,";")}),w(F)}function _n(A,w,P,H){var B=A.shared,F=B.gl,I=B.framebuffer,$;Fe&&($=w.def(B.extensions,".webgl_draw_buffers"));var T=A.constants,C=T.drawBuffer,S=T.backBuffer,G;P?G=P.append(A,w):G=w.def(I,".next"),H||w("if(",G,"!==",I,".cur){"),w("if(",G,"){",F,".bindFramebuffer(",cv,",",G,".framebuffer);"),Fe&&w($,".drawBuffersWEBGL(",C,"[",G,".colorAttachments.length]);"),w("}else{",F,".bindFramebuffer(",cv,",null);"),Fe&&w($,".drawBuffersWEBGL(",S,");"),w("}",I,".cur=",G,";"),H||w("}")}function On(A,w,P){var H=A.shared,B=H.gl,F=A.current,I=A.next,$=H.current,T=H.next,C=A.cond($,".dirty");me.forEach(function(S){var G=ze(S);if(!(G in P.state)){var U,se;if(G in I){U=I[G],se=F[G];var fe=vt(ue[G].length,function(_e){return C.def(U,"[",_e,"]")});C(A.cond(fe.map(function(_e,Je){return _e+"!=="+se+"["+Je+"]"}).join("||")).then(B,".",pe[G],"(",fe,");",fe.map(function(_e,Je){return se+"["+Je+"]="+_e}).join(";"),";"))}else{U=C.def(T,".",G);var ae=A.cond(U,"!==",$,".",G);C(ae),G in Le?ae(A.cond(U).then(B,".enable(",Le[G],");").else(B,".disable(",Le[G],");"),$,".",G,"=",U,";"):ae(B,".",pe[G],"(",U,");",$,".",G,"=",U,";")}}}),Object.keys(P.state).length===0&&C($,".dirty=false;"),w(C)}function Wn(A,w,P,H){var B=A.shared,F=A.current,I=B.current,$=B.gl;hv(Object.keys(P)).forEach(function(T){var C=P[T];if(!(H&&!H(C))){var S=C.append(A,w);if(Le[T]){var G=Le[T];hi(C)?S?w($,".enable(",G,");"):w($,".disable(",G,");"):w(A.cond(S).then($,".enable(",G,");").else($,".disable(",G,");")),w(I,".",T,"=",S,";")}else if(on(S)){var U=F[T];w($,".",pe[T],"(",S,");",S.map(function(se,fe){return U+"["+fe+"]="+se}).join(";"),";")}else w($,".",pe[T],"(",S,");",I,".",T,"=",S,";")}})}function nn(A,w){Me&&(A.instancing=w.def(A.shared.extensions,".angle_instanced_arrays"))}function It(A,w,P,H,B){var F=A.shared,I=A.stats,$=F.current,T=F.timer,C=P.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var G,U;function se(Be){G=w.def(),Be(G,"=",S(),";"),typeof B=="string"?Be(I,".count+=",B,";"):Be(I,".count++;"),xe&&(H?(U=w.def(),Be(U,"=",T,".getNumPendingQueries();")):Be(T,".beginQuery(",I,");"))}function fe(Be){Be(I,".cpuTime+=",S(),"-",G,";"),xe&&(H?Be(T,".pushScopeStats(",U,",",T,".getNumPendingQueries(),",I,");"):Be(T,".endQuery();"))}function ae(Be){var ft=w.def($,".profile");w($,".profile=",Be,";"),w.exit($,".profile=",ft,";")}var _e;if(C){if(hi(C)){C.enable?(se(w),fe(w.exit),ae("true")):ae("false");return}_e=C.append(A,w),ae(_e)}else _e=w.def($,".profile");var Je=A.block();se(Je),w("if(",_e,"){",Je,"}");var Ot=A.block();fe(Ot),w.exit("if(",_e,"){",Ot,"}")}function Vn(A,w,P,H,B){var F=A.shared;function I(T){switch(T){case Fl:case Dl:case jl:return 2;case $l:case ql:case Bl:return 3;case Gl:case Hl:case Ul:return 4;default:return 1}}function $(T,C,S){var G=F.gl,U=w.def(T,".location"),se=w.def(F.attributes,"[",U,"]"),fe=S.state,ae=S.buffer,_e=[S.x,S.y,S.z,S.w],Je=["buffer","normalized","offset","stride"];function Ot(){w("if(!",se,".buffer){",G,".enableVertexAttribArray(",U,");}");var ft=S.type,kt;if(S.size?kt=w.def(S.size,"||",C):kt=C,w("if(",se,".type!==",ft,"||",se,".size!==",kt,"||",Je.map(function(Qo){return se+"."+Qo+"!=="+S[Qo]}).join("||"),"){",G,".bindBuffer(",Z0,",",ae,".buffer);",G,".vertexAttribPointer(",[U,kt,ft,S.normalized,S.stride,S.offset],");",se,".type=",ft,";",se,".size=",kt,";",Je.map(function(Qo){return se+"."+Qo+"="+S[Qo]+";"}).join(""),"}"),Me){var uo=S.divisor;w("if(",se,".divisor!==",uo,"){",A.instancing,".vertexAttribDivisorANGLE(",[U,uo],");",se,".divisor=",uo,";}")}}function Be(){w("if(",se,".buffer){",G,".disableVertexAttribArray(",U,");",se,".buffer=null;","}if(",X0.map(function(ft,kt){return se+"."+ft+"!=="+_e[kt]}).join("||"),"){",G,".vertexAttrib4f(",U,",",_e,");",X0.map(function(ft,kt){return se+"."+ft+"="+_e[kt]+";"}).join(""),"}")}fe===Y0?Ot():fe===Kh?Be():(w("if(",fe,"===",Y0,"){"),Ot(),w("}else{"),Be(),w("}"))}H.forEach(function(T){var C=T.name,S=P.attributes[C],G;if(S){if(!B(S))return;G=S.append(A,w)}else{if(!B(uv))return;var U=A.scopeAttrib(C);_.optional(function(){A.assert(w,U+".state","missing attribute "+C)}),G={},Object.keys(new j).forEach(function(se){G[se]=w.def(U,".",se)})}$(A.link(T),I(T.info.type),G)})}function xo(A,w,P,H,B){for(var F=A.shared,I=F.gl,$,T=0;T<H.length;++T){var C=H[T],S=C.name,G=C.info.type,U=P.uniforms[S],se=A.link(C),fe=se+".location",ae;if(U){if(!B(U))continue;if(hi(U)){var _e=U.value;if(_.command(_e!==null&&typeof _e!="undefined",'missing uniform "'+S+'"',A.commandStr),G===gc||G===xc){_.command(typeof _e=="function"&&(G===gc&&(_e._reglType==="texture2d"||_e._reglType==="framebuffer")||G===xc&&(_e._reglType==="textureCube"||_e._reglType==="framebufferCube")),"invalid texture for uniform "+S,A.commandStr);var Je=A.link(_e._texture||_e.color[0]._texture);w(I,".uniform1i(",fe,",",Je+".bind());"),w.exit(Je,".unbind();")}else if(G===pc||G===vc||G===mc){_.optional(function(){_.command(on(_e),"invalid matrix for uniform "+S,A.commandStr),_.command(G===pc&&_e.length===4||G===vc&&_e.length===9||G===mc&&_e.length===16,"invalid length for matrix uniform "+S,A.commandStr)});var Ot=A.global.def("new Float32Array(["+Array.prototype.slice.call(_e)+"])"),Be=2;G===vc?Be=3:G===mc&&(Be=4),w(I,".uniformMatrix",Be,"fv(",fe,",false,",Ot,");")}else{switch(G){case uu:_.commandType(_e,"number","uniform "+S,A.commandStr),$="1f";break;case Fl:_.command(on(_e)&&_e.length===2,"uniform "+S,A.commandStr),$="2f";break;case $l:_.command(on(_e)&&_e.length===3,"uniform "+S,A.commandStr),$="3f";break;case Gl:_.command(on(_e)&&_e.length===4,"uniform "+S,A.commandStr),$="4f";break;case pu:_.commandType(_e,"boolean","uniform "+S,A.commandStr),$="1i";break;case du:_.commandType(_e,"number","uniform "+S,A.commandStr),$="1i";break;case jl:_.command(on(_e)&&_e.length===2,"uniform "+S,A.commandStr),$="2i";break;case Dl:_.command(on(_e)&&_e.length===2,"uniform "+S,A.commandStr),$="2i";break;case Bl:_.command(on(_e)&&_e.length===3,"uniform "+S,A.commandStr),$="3i";break;case ql:_.command(on(_e)&&_e.length===3,"uniform "+S,A.commandStr),$="3i";break;case Ul:_.command(on(_e)&&_e.length===4,"uniform "+S,A.commandStr),$="4i";break;case Hl:_.command(on(_e)&&_e.length===4,"uniform "+S,A.commandStr),$="4i";break}w(I,".uniform",$,"(",fe,",",on(_e)?Array.prototype.slice.call(_e):_e,");")}continue}else ae=U.append(A,w)}else{if(!B(uv))continue;ae=w.def(F.uniforms,"[",E.id(S),"]")}G===gc?(_(!Array.isArray(ae),"must specify a scalar prop for textures"),w("if(",ae,"&&",ae,'._reglType==="framebuffer"){',ae,"=",ae,".color[0];","}")):G===xc&&(_(!Array.isArray(ae),"must specify a scalar prop for cube maps"),w("if(",ae,"&&",ae,'._reglType==="framebufferCube"){',ae,"=",ae,".color[0];","}")),_.optional(function(){function pr(ya,yv){A.assert(w,ya,'bad data or missing for uniform "'+S+'".  '+yv)}function gu(ya){_(!Array.isArray(ae),"must not specify an array type for uniform"),pr("typeof "+ae+'==="'+ya+'"',"invalid type, expected "+ya)}function Qr(ya,yv){Array.isArray(ae)?_(ae.length===ya,"must have length "+ya):pr(F.isArrayLike+"("+ae+")&&"+ae+".length==="+ya,"invalid vector, should have length "+ya,A.commandStr)}function xv(ya){_(!Array.isArray(ae),"must not specify a value type"),pr("typeof "+ae+'==="function"&&'+ae+'._reglType==="texture'+(ya===ov?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch(G){case du:gu("number");break;case Dl:Qr(2,"number");break;case ql:Qr(3,"number");break;case Hl:Qr(4,"number");break;case uu:gu("number");break;case Fl:Qr(2,"number");break;case $l:Qr(3,"number");break;case Gl:Qr(4,"number");break;case pu:gu("boolean");break;case jl:Qr(2,"boolean");break;case Bl:Qr(3,"boolean");break;case Ul:Qr(4,"boolean");break;case pc:Qr(4,"number");break;case vc:Qr(9,"number");break;case mc:Qr(16,"number");break;case gc:xv(ov);break;case xc:xv(J5);break}});var ft=1;switch(G){case gc:case xc:var kt=w.def(ae,"._texture");w(I,".uniform1i(",fe,",",kt,".bind());"),w.exit(kt,".unbind();");continue;case du:case pu:$="1i";break;case Dl:case jl:$="2i",ft=2;break;case ql:case Bl:$="3i",ft=3;break;case Hl:case Ul:$="4i",ft=4;break;case uu:$="1f";break;case Fl:$="2f",ft=2;break;case $l:$="3f",ft=3;break;case Gl:$="4f",ft=4;break;case pc:$="Matrix2fv";break;case vc:$="Matrix3fv";break;case mc:$="Matrix4fv";break}if(w(I,".uniform",$,"(",fe,","),$.charAt(0)==="M"){var uo=Math.pow(G-pc+2,2),Qo=A.global.def("new Float32Array(",uo,")");Array.isArray(ae)?w("false,(",vt(uo,function(pr){return Qo+"["+pr+"]="+ae[pr]}),",",Qo,")"):w("false,(Array.isArray(",ae,")||",ae," instanceof Float32Array)?",ae,":(",vt(uo,function(pr){return Qo+"["+pr+"]="+ae+"["+pr+"]"}),",",Qo,")")}else ft>1?w(vt(ft,function(pr){return Array.isArray(ae)?ae[pr]:ae+"["+pr+"]"})):(_(!Array.isArray(ae),"uniform value must not be an array"),w(ae));w(");")}}function st(A,w,P,H){var B=A.shared,F=B.gl,I=B.draw,$=H.draw;function T(){var kt=$.elements,uo,Qo=w;return kt?((kt.contextDep&&H.contextDynamic||kt.propDep)&&(Qo=P),uo=kt.append(A,Qo)):uo=Qo.def(I,".",Zi),uo&&Qo("if("+uo+")"+F+".bindBuffer("+K5+","+uo+".buffer.buffer);"),uo}function C(){var kt=$.count,uo,Qo=w;return kt?((kt.contextDep&&H.contextDynamic||kt.propDep)&&(Qo=P),uo=kt.append(A,Qo),_.optional(function(){kt.MISSING&&A.assert(w,"false","missing vertex count"),kt.DYNAMIC&&A.assert(Qo,uo+">=0","missing vertex count")})):(uo=Qo.def(I,".",e0),_.optional(function(){A.assert(Qo,uo+">=0","missing vertex count")})),uo}var S=T();function G(kt){var uo=$[kt];return uo?uo.contextDep&&H.contextDynamic||uo.propDep?uo.append(A,P):uo.append(A,w):w.def(I,".",kt)}var U=G(Ji),se=G(Il),fe=C();if(typeof fe=="number"){if(fe===0)return}else P("if(",fe,"){"),P.exit("}");var ae,_e;Me&&(ae=G(Ol),_e=A.instancing);var Je=S+".type",Ot=$.elements&&hi($.elements);function Be(){function kt(){P(_e,".drawElementsInstancedANGLE(",[U,fe,Je,se+"<<(("+Je+"-"+Ip+")>>1)",ae],");")}function uo(){P(_e,".drawArraysInstancedANGLE(",[U,se,fe,ae],");")}S?Ot?kt():(P("if(",S,"){"),kt(),P("}else{"),uo(),P("}")):uo()}function ft(){function kt(){P(F+".drawElements("+[U,fe,Je,se+"<<(("+Je+"-"+Ip+")>>1)"]+");")}function uo(){P(F+".drawArrays("+[U,se,fe]+");")}S?Ot?kt():(P("if(",S,"){"),kt(),P("}else{"),uo(),P("}")):uo()}Me&&(typeof ae!="number"||ae>=0)?typeof ae=="string"?(P("if(",ae,">0){"),Be(),P("}else if(",ae,"<0){"),ft(),P("}")):Be():ft()}function jt(A,w,P,H,B){var F=mt(),I=F.proc("body",B);return _.optional(function(){F.commandStr=w.commandStr,F.command=F.link(w.commandStr)}),Me&&(F.instancing=I.def(F.shared.extensions,".angle_instanced_arrays")),A(F,I,P,H),F.compile().body}function io(A,w,P,H){nn(A,w),P.useVAO?P.drawVAO?w(A.shared.vao,".setVAO(",P.drawVAO.append(A,w),");"):w(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(w(A.shared.vao,".setVAO(null);"),Vn(A,w,P,H.attributes,function(){return!0})),xo(A,w,P,H.uniforms,function(){return!0}),st(A,w,w,P)}function rn(A,w){var P=A.proc("draw",1);nn(A,P),wn(A,P,w.context),_n(A,P,w.framebuffer),On(A,P,w),Wn(A,P,w.state),It(A,P,w,!1,!0);var H=w.shader.progVar.append(A,P);if(P(A.shared.gl,".useProgram(",H,".program);"),w.shader.program)io(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var B=A.global.def("{}"),F=P.def(H,".id"),I=P.def(B,"[",F,"]");P(A.cond(I).then(I,".call(this,a0);").else(I,"=",B,"[",F,"]=",A.link(function($){return jt(io,A,w,$,1)}),"(",H,");",I,".call(this,a0);"))}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function Pa(A,w,P,H){A.batchId="a1",nn(A,w);function B(){return!0}Vn(A,w,P,H.attributes,B),xo(A,w,P,H.uniforms,B),st(A,w,w,P)}function o0(A,w,P,H){nn(A,w);var B=P.contextDep,F=w.def(),I="a0",$="a1",T=w.def();A.shared.props=T,A.batchId=F;var C=A.scope(),S=A.scope();w(C.entry,"for(",F,"=0;",F,"<",$,";++",F,"){",T,"=",I,"[",F,"];",S,"}",C.exit);function G(Je){return Je.contextDep&&B||Je.propDep}function U(Je){return!G(Je)}if(P.needsContext&&wn(A,S,P.context),P.needsFramebuffer&&_n(A,S,P.framebuffer),Wn(A,S,P.state,G),P.profile&&G(P.profile)&&It(A,S,P,!1,!0),H)P.useVAO?P.drawVAO?G(P.drawVAO)?S(A.shared.vao,".setVAO(",P.drawVAO.append(A,S),");"):C(A.shared.vao,".setVAO(",P.drawVAO.append(A,C),");"):C(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(C(A.shared.vao,".setVAO(null);"),Vn(A,C,P,H.attributes,U),Vn(A,S,P,H.attributes,G)),xo(A,C,P,H.uniforms,U),xo(A,S,P,H.uniforms,G),st(A,C,S,P);else{var se=A.global.def("{}"),fe=P.shader.progVar.append(A,S),ae=S.def(fe,".id"),_e=S.def(se,"[",ae,"]");S(A.shared.gl,".useProgram(",fe,".program);","if(!",_e,"){",_e,"=",se,"[",ae,"]=",A.link(function(Je){return jt(Pa,A,P,Je,2)}),"(",fe,");}",_e,".call(this,a0[",F,"],",F,");")}}function L(A,w){var P=A.proc("batch",2);A.batchId="0",nn(A,P);var H=!1,B=!0;Object.keys(w.context).forEach(function(se){H=H||w.context[se].propDep}),H||(wn(A,P,w.context),B=!1);var F=w.framebuffer,I=!1;F?(F.propDep?H=I=!0:F.contextDep&&H&&(I=!0),I||_n(A,P,F)):_n(A,P,null),w.state.viewport&&w.state.viewport.propDep&&(H=!0);function $(se){return se.contextDep&&H||se.propDep}On(A,P,w),Wn(A,P,w.state,function(se){return!$(se)}),(!w.profile||!$(w.profile))&&It(A,P,w,!1,"a1"),w.contextDep=H,w.needsContext=B,w.needsFramebuffer=I;var T=w.shader.progVar;if(T.contextDep&&H||T.propDep)o0(A,P,w,null);else{var C=T.append(A,P);if(P(A.shared.gl,".useProgram(",C,".program);"),w.shader.program)o0(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var S=A.global.def("{}"),G=P.def(C,".id"),U=P.def(S,"[",G,"]");P(A.cond(U).then(U,".call(this,a0,a1);").else(U,"=",S,"[",G,"]=",A.link(function(se){return jt(o0,A,w,se,2)}),"(",C,");",U,".call(this,a0,a1);"))}}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function Z(A,w){var P=A.proc("scope",3);A.batchId="a2";var H=A.shared,B=H.current;wn(A,P,w.context),w.framebuffer&&w.framebuffer.append(A,P),hv(Object.keys(w.state)).forEach(function(I){var $=w.state[I],T=$.append(A,P);on(T)?T.forEach(function(C,S){P.set(A.next[I],"["+S+"]",C)}):P.set(H.next,"."+I,T)}),It(A,P,w,!0,!0),[Zi,Il,e0,Ol,Ji].forEach(function(I){var $=w.draw[I];$&&P.set(H.draw,"."+I,""+$.append(A,P))}),Object.keys(w.uniforms).forEach(function(I){var $=w.uniforms[I].append(A,P);Array.isArray($)&&($="["+$.join()+"]"),P.set(H.uniforms,"["+E.id(I)+"]",$)}),Object.keys(w.attributes).forEach(function(I){var $=w.attributes[I].append(A,P),T=A.scopeAttrib(I);Object.keys(new j).forEach(function(C){P.set(T,"."+C,$[C])})}),w.scopeVAO&&P.set(H.vao,".targetVAO",w.scopeVAO.append(A,P));function F(I){var $=w.shader[I];$&&P.set(H.shader,"."+I,$.append(A,P))}F(hc),F(uc),Object.keys(w.state).length>0&&(P(B,".dirty=true;"),P.exit(B,".dirty=true;")),P("a1(",A.shared.context,",a0,",A.batchId,");")}function V(A){if(!(typeof A!="object"||on(A))){for(var w=Object.keys(A),P=0;P<w.length;++P)if(Ye.isDynamic(A[w[P]]))return!0;return!1}}function De(A,w,P){var H=w.static[P];if(!H||!V(H))return;var B=A.global,F=Object.keys(H),I=!1,$=!1,T=!1,C=A.global.def("{}");F.forEach(function(G){var U=H[G];if(Ye.isDynamic(U)){typeof U=="function"&&(U=H[G]=Ye.unbox(U));var se=Ar(U,null);I=I||se.thisDep,T=T||se.propDep,$=$||se.contextDep}else{switch(B(C,".",G,"="),typeof U){case"number":B(U);break;case"string":B('"',U,'"');break;case"object":Array.isArray(U)&&B("[",U.join(),"]");break;default:B(A.link(U));break}B(";")}});function S(G,U){F.forEach(function(se){var fe=H[se];if(Ye.isDynamic(fe)){var ae=G.invoke(U,fe);U(C,".",se,"=",ae,";")}})}w.dynamic[P]=new Ye.DynamicVariable(Cl,{thisDep:I,contextDep:$,propDep:T,ref:C,append:S}),delete w.static[P]}function Ht(A,w,P,H,B){var F=mt();F.stats=F.link(B),Object.keys(w.static).forEach(function($){De(F,w,$)}),Y5.forEach(function($){De(F,A,$)});var I=un(A,w,P,H,F);return rn(F,I),Z(F,I),L(F,I),t(F.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:$e,current:ue,procs:function(){var A=mt(),w=A.proc("poll"),P=A.proc("refresh"),H=A.block();w(H),P(H);var B=A.shared,F=B.gl,I=B.next,$=B.current;H($,".dirty=false;"),_n(A,w),_n(A,P,null,!0);var T;Me&&(T=A.link(Me)),R.oes_vertex_array_object&&P(A.link(R.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var C=0;C<K.maxAttributes;++C){var S=P.def(B.attributes,"[",C,"]"),G=A.cond(S,".buffer");G.then(F,".enableVertexAttribArray(",C,");",F,".bindBuffer(",Z0,",",S,".buffer.buffer);",F,".vertexAttribPointer(",C,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(F,".disableVertexAttribArray(",C,");",F,".vertexAttrib4f(",C,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),P(G),Me&&P(T,".vertexAttribDivisorANGLE(",C,",",S,".divisor);")}return P(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Le).forEach(function(U){var se=Le[U],fe=H.def(I,".",U),ae=A.block();ae("if(",fe,"){",F,".enable(",se,")}else{",F,".disable(",se,")}",$,".",U,"=",fe,";"),P(ae),w("if(",fe,"!==",$,".",U,"){",ae,"}")}),Object.keys(pe).forEach(function(U){var se=pe[U],fe=ue[U],ae,_e,Je=A.block();if(Je(F,".",se,"("),on(fe)){var Ot=fe.length;ae=A.global.def(I,".",U),_e=A.global.def($,".",U),Je(vt(Ot,function(Be){return ae+"["+Be+"]"}),");",vt(Ot,function(Be){return _e+"["+Be+"]="+ae+"["+Be+"];"}).join("")),w("if(",vt(Ot,function(Be){return ae+"["+Be+"]!=="+_e+"["+Be+"]"}).join("||"),"){",Je,"}")}else ae=H.def(I,".",U),_e=H.def($,".",U),Je(ae,");",$,".",U,"=",ae,";"),w("if(",ae,"!==",_e,"){",Je,"}");P(Je)}),A.compile()}(),compile:Ht}}function vw(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var mw=34918,gw=34919,dv=35007,xw=function(x,E){if(!E.ext_disjoint_timer_query)return null;var R=[];function K(){return R.pop()||E.ext_disjoint_timer_query.createQueryEXT()}function le(Me){R.push(Me)}var X=[];function te(Me){var Fe=K();E.ext_disjoint_timer_query.beginQueryEXT(dv,Fe),X.push(Fe),xe(X.length-1,X.length,Me)}function ge(){E.ext_disjoint_timer_query.endQueryEXT(dv)}function be(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Ee=[];function we(){return Ee.pop()||new be}function Se(Me){Ee.push(Me)}var Re=[];function xe(Me,Fe,ue){var $e=we();$e.startQueryIndex=Me,$e.endQueryIndex=Fe,$e.sum=0,$e.stats=ue,Re.push($e)}var Te=[],j=[];function oe(){var Me,Fe,ue=X.length;if(ue!==0){j.length=Math.max(j.length,ue+1),Te.length=Math.max(Te.length,ue+1),Te[0]=0,j[0]=0;var $e=0;for(Me=0,Fe=0;Fe<X.length;++Fe){var me=X[Fe];E.ext_disjoint_timer_query.getQueryObjectEXT(me,gw)?($e+=E.ext_disjoint_timer_query.getQueryObjectEXT(me,mw),le(me)):X[Me++]=me,Te[Fe+1]=$e,j[Fe+1]=Me}for(X.length=Me,Me=0,Fe=0;Fe<Re.length;++Fe){var Le=Re[Fe],pe=Le.startQueryIndex,ze=Le.endQueryIndex;Le.sum+=Te[ze]-Te[pe];var nt=j[pe],wt=j[ze];wt===nt?(Le.stats.gpuTime+=Le.sum/1e6,Se(Le)):(Le.startQueryIndex=nt,Le.endQueryIndex=wt,Re[Me++]=Le)}Re.length=Me}}return{beginQuery:te,endQuery:ge,pushScopeStats:xe,update:oe,getNumPendingQueries:function(){return X.length},clear:function(){R.push.apply(R,X);for(var Me=0;Me<R.length;Me++)E.ext_disjoint_timer_query.deleteQueryEXT(R[Me]);X.length=0,R.length=0},restore:function(){X.length=0,R.length=0}}},yw=16384,bw=256,ww=1024,_w=34962,pv="webglcontextlost",vv="webglcontextrestored",mv=1,Mw=2,Ew=3;function gv(x,E){for(var R=0;R<x.length;++R)if(x[R]===E)return R;return-1}function kw(x){var E=pa(x);if(!E)return null;var R=E.gl,K=R.getContextAttributes(),le=R.isContextLost(),X=to(R,E);if(!X)return null;var te=Lt(),ge=vw(),be=X.extensions,Ee=xw(R,be),we=bt(),Se=R.drawingBufferWidth,Re=R.drawingBufferHeight,xe={tick:0,time:0,viewportWidth:Se,viewportHeight:Re,framebufferWidth:Se,framebufferHeight:Re,drawingBufferWidth:Se,drawingBufferHeight:Re,pixelRatio:E.pixelRatio},Te={},j={elements:null,primitive:4,count:-1,offset:0,instances:-1},oe=fb(R,be),Me=Sb(R,ge,E,ue),Fe=$5(R,be,oe,ge,Me);function ue(st){return Fe.destroyBuffer(st)}var $e=$b(R,be,Me,ge),me=H5(R,te,ge,E),Le=v5(R,be,oe,function(){nt.procs.poll()},xe,ge,E),pe=m5(R,be,oe,ge,E),ze=O5(R,be,oe,Le,pe,ge),nt=pw(R,te,be,oe,Me,$e,Le,ze,Te,Fe,me,j,xe,Ee,E),wt=U5(R,ze,nt.procs.poll,xe,K,be,oe),Ce=nt.next,ke=R.canvas,he=[],mt=[],Pt=[],je=[E.onDestroy],qt=null;function _t(){if(he.length===0){Ee&&Ee.update(),qt=null;return}qt=ro.next(_t),Wn();for(var st=he.length-1;st>=0;--st){var jt=he[st];jt&&jt(xe,null,0)}R.flush(),Ee&&Ee.update()}function Gt(){!qt&&he.length>0&&(qt=ro.next(_t))}function ho(){qt&&(ro.cancel(_t),qt=null)}function hn(st){st.preventDefault(),le=!0,ho(),mt.forEach(function(jt){jt()})}function An(st){R.getError(),le=!1,X.restore(),me.restore(),Me.restore(),Le.restore(),pe.restore(),ze.restore(),Fe.restore(),Ee&&Ee.restore(),nt.procs.refresh(),Gt(),Pt.forEach(function(jt){jt()})}ke&&(ke.addEventListener(pv,hn,!1),ke.addEventListener(vv,An,!1));function Ut(){he.length=0,ho(),ke&&(ke.removeEventListener(pv,hn),ke.removeEventListener(vv,An)),me.clear(),ze.clear(),pe.clear(),Le.clear(),$e.clear(),Me.clear(),Fe.clear(),Ee&&Ee.clear(),je.forEach(function(st){st()})}function bn(st){_(!!st,"invalid args to regl({...})"),_.type(st,"object","invalid args to regl({...})");function jt(B){var F=t({},B);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function I($){if($ in F){var T=F[$];delete F[$],Object.keys(T).forEach(function(C){F[$+"."+C]=T[C]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in B&&(F.vao=B.vao),F}function io(B,F){var I={},$={};return Object.keys(B).forEach(function(T){var C=B[T];if(Ye.isDynamic(C)){$[T]=Ye.unbox(C,T);return}else if(F&&Array.isArray(C)){for(var S=0;S<C.length;++S)if(Ye.isDynamic(C[S])){$[T]=Ye.unbox(C,T);return}}I[T]=C}),{dynamic:$,static:I}}var rn=io(st.context||{},!0),Pa=io(st.uniforms||{},!0),o0=io(st.attributes||{},!1),L=io(jt(st),!1),Z={gpuTime:0,cpuTime:0,count:0},V=nt.compile(L,o0,Pa,rn,Z),De=V.draw,Ht=V.batch,A=V.scope,w=[];function P(B){for(;w.length<B;)w.push(null);return w}function H(B,F){var I;if(le&&_.raise("context lost"),typeof B=="function")return A.call(this,null,B,0);if(typeof F=="function")if(typeof B=="number")for(I=0;I<B;++I)A.call(this,null,F,I);else if(Array.isArray(B))for(I=0;I<B.length;++I)A.call(this,B[I],F,I);else return A.call(this,B,F,0);else if(typeof B=="number"){if(B>0)return Ht.call(this,P(B|0),B|0)}else if(Array.isArray(B)){if(B.length)return Ht.call(this,B,B.length)}else return De.call(this,B)}return t(H,{stats:Z,destroy:function(){V.destroy()}})}var Fo=ze.setFBO=bn({framebuffer:Ye.define.call(null,mv,"framebuffer")});function un(st,jt){var io=0;nt.procs.poll();var rn=jt.color;rn&&(R.clearColor(+rn[0]||0,+rn[1]||0,+rn[2]||0,+rn[3]||0),io|=yw),"depth"in jt&&(R.clearDepth(+jt.depth),io|=bw),"stencil"in jt&&(R.clearStencil(jt.stencil|0),io|=ww),_(!!io,"called regl.clear with no buffer specified"),R.clear(io)}function wn(st){if(_(typeof st=="object"&&st,"regl.clear() takes an object as input"),"framebuffer"in st)if(st.framebuffer&&st.framebuffer_reglType==="framebufferCube")for(var jt=0;jt<6;++jt)Fo(t({framebuffer:st.framebuffer.faces[jt]},st),un);else Fo(st,un);else un(null,st)}function _n(st){_.type(st,"function","regl.frame() callback must be a function"),he.push(st);function jt(){var io=gv(he,st);_(io>=0,"cannot cancel a frame twice");function rn(){var Pa=gv(he,rn);he[Pa]=he[he.length-1],he.length-=1,he.length<=0&&ho()}he[io]=rn}return Gt(),{cancel:jt}}function On(){var st=Ce.viewport,jt=Ce.scissor_box;st[0]=st[1]=jt[0]=jt[1]=0,xe.viewportWidth=xe.framebufferWidth=xe.drawingBufferWidth=st[2]=jt[2]=R.drawingBufferWidth,xe.viewportHeight=xe.framebufferHeight=xe.drawingBufferHeight=st[3]=jt[3]=R.drawingBufferHeight}function Wn(){xe.tick+=1,xe.time=It(),On(),nt.procs.poll()}function nn(){Le.refresh(),On(),nt.procs.refresh(),Ee&&Ee.update()}function It(){return(bt()-we)/1e3}nn();function Vn(st,jt){_.type(jt,"function","listener callback must be a function");var io;switch(st){case"frame":return _n(jt);case"lost":io=mt;break;case"restore":io=Pt;break;case"destroy":io=je;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return io.push(jt),{cancel:function(){for(var rn=0;rn<io.length;++rn)if(io[rn]===jt){io[rn]=io[io.length-1],io.pop();return}}}}var xo=t(bn,{clear:wn,prop:Ye.define.bind(null,mv),context:Ye.define.bind(null,Mw),this:Ye.define.bind(null,Ew),draw:bn({}),buffer:function(st){return Me.create(st,_w,!1,!1)},elements:function(st){return $e.create(st,!1)},texture:Le.create2D,cube:Le.createCube,renderbuffer:pe.create,framebuffer:ze.create,framebufferCube:ze.createCube,vao:Fe.createVAO,attributes:K,frame:_n,on:Vn,limits:oe,hasExtension:function(st){return oe.extensions.indexOf(st.toLowerCase())>=0},read:wt,destroy:Ut,_gl:R,_refresh:nn,poll:function(){Wn(),Ee&&Ee.update()},now:It,stats:ge});return E.onDone(null,xo),xo}return kw})});var n0=ve((Dk,qv)=>{"use strict";var Va=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Xa=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Ia=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Jl=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Sc=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Au=e=>Math.hypot(e[0],e[1],e[2]),Jr=e=>{let t=Au(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function is(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=[0,0,0];for(let u=0;u<3;u++)l[u]=.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-f[u])*a*a+(-i[u]+3*s[u]-3*c[u]+f[u])*a*a*a);return l}function Dw(e,t){return is(e.map(o=>[o,0,0]),t)[0]}function qw(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,d)=>{let p=new Array(9);for(let v=0;v<3;v++)for(let m=0;m<3;m++)p[v*3+m]=h[v*3]*d[m]+h[v*3+1]*d[3+m]+h[v*3+2]*d[6+m];return p},f=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,d,p)=>{let v=f([h,d,p]);i.t=[i.t[0]+v[0]*i.s,i.t[1]+v[1]*i.s,i.t[2]+v[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let d=Math.cos(h),p=Math.sin(h);i.r=c(i.r,[d,0,p,0,1,0,-p,0,d])},r.vert=(h,d,p)=>{let v=p||r.curMat,m=f(h),g=Jr(f(d));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(v[0],v[1],v[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],u=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,d,p)=>{let v=l(h),m=Sc(Va(l(d),v),Va(l(p),v)),g=Xa(Xa(u(h),u(d)),u(p));Jl(m,g)<0?o.push(h,p,d):o.push(h,d,p)},r.box=(h,d,p,v,m,g,y)=>{let b=[[[h,d,p],[v,d,p],[h,m,p],[v,m,p],[0,0,-1]],[[v,d,g],[h,d,g],[v,m,g],[h,m,g],[0,0,1]],[[h,d,g],[h,d,p],[h,m,g],[h,m,p],[-1,0,0]],[[v,d,p],[v,d,g],[v,m,p],[v,m,g],[1,0,0]],[[h,m,p],[v,m,p],[h,m,g],[v,m,g],[0,1,0]],[[h,d,g],[v,d,g],[h,d,p],[v,d,p],[0,-1,0]]];for(let M of b){let k=r.vert(M[0],M[4],y),z=r.vert(M[1],M[4],y),N=r.vert(M[2],M[4],y),q=r.vert(M[3],M[4],y);r.tri(k,z,N),r.tri(z,q,N)}},r.surface=(h,d,p,v)=>{v=v||{};let m=.001,g=k=>Math.min(1,Math.max(0,k)),y=[],b=[];for(let k=0;k<=d;k++){let z=[],N=[];for(let q=0;q<=p;q++){let D=k/d,ne=q/p,O=h(D,ne),re=Math.min(1-m,Math.max(m,D)),J=v.wrapV?ne:Math.min(1-m,Math.max(m,ne)),ee=Va(h(g(re+m),J),h(g(re-m),J)),Qe=v.wrapV?J+m:g(J+m),He=v.wrapV?J-m:g(J-m),de=Va(h(re,Qe),h(re,He)),ie=Sc(ee,de);Au(ie)<1e-14&&(ie=v.inside?Va(O,v.inside(D,ne)):[0,1,0]),ie=Jr(ie),v.inside&&Jl(ie,Va(O,v.inside(D,ne)))<0&&(ie=Ia(ie,-1));let ot=v.mat?v.mat(D,ne,O):null;z.push(r.vert(O,ie,ot)),v.double&&N.push(r.vert(O,Ia(ie,-1),ot))}y.push(z),b.push(N)}let M=k=>{for(let z=0;z<d;z++)for(let N=0;N<p;N++){let q=k[z][N],D=k[z+1][N],ne=k[z][N+1],O=k[z+1][N+1];r.tri(q,D,ne),r.tri(D,O,ne)}};M(y),v.double&&M(b)},r.ellipsoid=(h,d,p,v,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let M=y*Math.PI,k=b*Math.PI*2,z=g?g(y,b):1;return[h[0]+d[0]*z*Math.sin(M)*Math.cos(k),h[1]+d[1]*z*Math.cos(M),h[2]+d[2]*z*Math.sin(M)*Math.sin(k)]},p||10,v||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,d,p,v,m)=>{m=m||{};let g=40,y=[],b=null;for(let z=0;z<=g;z++){let N=z/g,q=is(h,Math.max(0,N-.01)),D=is(h,Math.min(1,N+.01)),ne=Jr(Va(D,q)),O;if(b)O=Jr(Va(b,Ia(ne,Jl(b,ne))));else{let re=Math.abs(ne[1])<.9?[0,1,0]:[1,0,0];O=Jr(Sc(ne,re))}y.push({N:O,B:Jr(Sc(ne,O))}),b=O}let M=z=>{let N=Math.min(Math.max(z,0),1)*g,q=Math.min(g-1,Math.floor(N)),D=N-q,ne=y[q],O=y[q+1];return{N:Jr(Xa(Ia(ne.N,1-D),Ia(O.N,D))),B:Jr(Xa(Ia(ne.B,1-D),Ia(O.B,D)))}},k=m.squash||[1,1];r.surface((z,N)=>{let q=is(h,z),D=M(z),ne=d(z),O=N*Math.PI*2;return Xa(q,Xa(Ia(D.N,Math.cos(O)*ne*k[0]),Ia(D.B,Math.sin(O)*ne*k[1])))},p||12,v||8,{wrapV:!0,inside:z=>is(h,z),mat:m.mat})},r.lathe=(h,d,p,v,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],M=h[y+1][1]-h[y][1];g.push(Jr([M,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],M=h[y+1],k=y===0||b[2]===1,z=y===h.length-2||M[2]===1,N=k?g[y]:Jr(Xa(g[y-1],g[y])),q=z?g[y]:Jr(Xa(g[y],g[y+1])),D=[],ne=[];for(let O=0;O<=v;O++){let re=O/v*Math.PI*2,J=Math.cos(re),ee=Math.sin(re),Qe=m.mat?m.mat(re,b[1]):null,He=m.mat?m.mat(re,M[1]):null;D.push(r.vert([d+b[0]*J,b[1],p+b[0]*ee],[N[0]*J,N[1],N[0]*ee],Qe)),ne.push(r.vert([d+M[0]*J,M[1],p+M[0]*ee],[q[0]*J,q[1],q[0]*ee],He))}for(let O=0;O<v;O++)r.tri(D[O],D[O+1],ne[O]),r.tri(D[O+1],ne[O+1],ne[O])}},r}qv.exports={createBuilder:qw,catmull:is,curve1:Dw,sub:Va,add:Xa,mul:Ia,dot:Jl,cross:Sc,norm:Jr,len:Au}});var Uv=ve((qk,Bv)=>{"use strict";var{norm:ef,add:tf,mul:di,sub:Hw,cross:Hv}=n0(),jv=Math.PI*2,jw=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function Bw(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function Uw(e,t,o,n,r,a){let i=(h,d)=>[7,h*a,d];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,f=20,l=6,u=a*.075;return e.surface((h,d)=>{let p=s+h*c,v=a*(.96-.12*h),m=d*jv,g=d*f%1,y=v-u*4*g*(1-g);return[t+y*Math.cos(m),p,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,d)=>[7,d*jv*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function Ww(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function Vw(e,t,o,n,r){e.save(),e.translate(t,0,o),Ww(e,n,r),e.restore()}function Xw(e,t,o,n,r,a){let i=Bw(n),s=a?ef([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let u=l>=c-2,h=l*2.399963+i()*.5,d=[Math.cos(h),0,Math.sin(h)],p=[-Math.sin(h),0,Math.cos(h)],v=l*.618%1,m=u?.06+i()*.06:.12+.62*v,g=1;if(s){let ie=d[0]*s[0]+d[2]*s[2];g=.25+.75*jw(-.7,.5,ie),m*=g}let y=u?1.1+i()*.25:.85+.55*(1-v*.55)+i()*.15,b=u?1+i()*.2:.95+i()*.28,M=u?.055:.215+i()*.05,k=.04+i()*.05,z=[d[0]*k,f,d[2]*k],N=[z[0]+d[0]*Math.sin(m)*y*.92,z[1]+Math.cos(m)*y,z[2]+d[2]*Math.sin(m)*y*.92],q=[z[0]+d[0]*Math.sin(m*.5)*y*.45,z[1]+y*.5,z[2]+d[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([z,q,N],ie=>.02-.008*ie,8,7);let D=24,ne=m*.9+.05,O=m+(u?.12:(.95+.45*v)*(.35+.65*g)),re=[N],J=[],ee=N;for(let ie=0;ie<D;ie++){let ot=ie/D,ht=ne+(O-ne)*ot*ot,Ft=[d[0]*Math.sin(ht),Math.cos(ht),d[2]*Math.sin(ht)];J.push(Ft),ee=tf(ee,di(Ft,b/D)),re.push(ee)}J.push(J[J.length-1]);let Qe=ie=>{let ot=ie*D,ht=Math.min(D-1,Math.floor(ot)),Ft=ot-ht;return tf(di(re[ht],1-Ft),di(re[ht+1],Ft))},He=ie=>{let ot=ie*D,ht=Math.min(D,Math.floor(ot)),Ft=Math.min(D,ht+1),Tt=ot-ht;return ef(tf(di(J[ht],1-Tt),di(J[Ft],Tt)))},de=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((ie,ot)=>{let ht=ot*2-1,Ft=Qe(ie),Tt=He(ie),mo=de*ie,gt=tf(di(p,Math.cos(mo)),di(Hv(Tt,p),Math.sin(mo)));gt=ef(Hw(gt,di(Tt,gt[0]*Tt[0]+gt[1]*Tt[1]+gt[2]*Tt[2])));let Vt=ef(Hv(gt,Tt)),qo=M*Math.pow(Math.sin(Math.PI*Math.pow(ie,.72)),.85),ur=.3*qo*Math.abs(ht)+.012*Math.sin(ie*40+ht*2)*Math.abs(ht)*(u?0:1),Xe=-.1*qo*ht*ht*ht*ht,xt=ur+Xe;return[Ft[0]+gt[0]*ht*qo+Vt[0]*xt,Ft[1]+gt[1]*ht*qo+Vt[1]*xt,Ft[2]+gt[2]*ht*qo+Vt[2]*xt]},14,8,{double:!0,mat:(ie,ot)=>[2,ot*2-1,ie]})}e.restore()}Bv.exports={addFlutedColumn:Uw,addStatue:Vw,addPlant:Xw}});var pi=ve((Hk,Yv)=>{"use strict";var ye={xc:7,r:2.5,spring:4.7};ye.x0=ye.xc-ye.r;ye.x1=ye.xc+ye.r;ye.top=ye.spring+ye.r;var gr=.06,Bo=.1,Wv=.08,of=ye.r,nf=[ye.x0+of/3,ye.x0+2*of/3,ye.xc+of/3,ye.xc+2*of/3],ss=.28,Tu=[.95,1.65,2.35,3.05,3.75],Vv=[1.05,1.8],Ac=[8,0,0],Or=[0,0,0];function ea(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function cs(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function rf(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let f=(l,u,h)=>[ye.xc+u*Math.cos(l),ye.spring+u*Math.sin(l),h];for(let l=0;l<i;l++){let u=s+(c-s)*l/i,h=s+(c-s)*(l+1)/i,d=(u+h)/2;cs(e,f(u,t,r),f(h,t,r),f(h,o,r),f(u,o,r),[0,0,1],a),cs(e,f(u,o,n),f(h,o,n),f(h,t,n),f(u,t,n),[0,0,-1],a),cs(e,f(u,t,n),f(h,t,n),f(h,t,r),f(u,t,r),[-Math.cos(d),-Math.sin(d),0],a),cs(e,f(h,o,n),f(u,o,n),f(u,o,r),f(h,o,r),[Math.cos(d),Math.sin(d),0],a)}}function Yw(e){let n=a=>[ye.xc+ye.r*Math.cos(a),ye.spring+ye.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?ye.r/Math.abs(i):1/0,f=s>1e-6?(8-ye.spring)/s:1/0,l=Math.min(c,f);return[Math.min(ye.x1,Math.max(ye.x0,ye.xc+i*l)),Math.min(8,ye.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),l=r(i),u=r(s);for(let[d,p]of[[.35,1],[-.35,-1]])cs(e,[c[0],c[1],d],[f[0],f[1],d],[u[0],u[1],d],[l[0],l[1],d],[0,0,p],Or);let h=(i+s)/2;cs(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Or)}}function Kw(e){ea(e,-.35,0,-.35,ye.x0,8,.35,Or),ea(e,ye.x1,0,-.35,14+.35,8,.35,Or),Yw(e),Xv(e)}function Xv(e){ea(e,ye.x0-.32,.3,.35,ye.x0,ye.spring,.35+.07,Or),ea(e,ye.x1,.3,.35,ye.x1+.32,ye.spring,.35+.07,Or),ea(e,ye.x0-.32-.05,0,.35,ye.x0,.3,.35+.07+.04,Or),ea(e,ye.x1,0,.35,ye.x1+.32+.05,.3,.35+.07+.04,Or),ea(e,ye.x0-.32-.06,ye.spring-.12,.35,ye.x0,ye.spring,.35+.07+.05,Or),ea(e,ye.x1,ye.spring-.12,.35,ye.x1+.32+.06,ye.spring,.35+.07+.05,Or),rf(e,ye.r,ye.r+.32,.35,.35+.07,Or),rf(e,ye.r+.32,ye.r+.32+.06,.35,.35+.07+.03,Or),ea(e,ye.xc-.22,ye.top-.08,.35,ye.xc+.22,ye.top+.32+.12,.35+.07+.06,Or)}function Qw(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-Wv/2,a=Wv/2,i=(h,d,p,v,m=0)=>ea(e,h-m,d,r,p+m,v,a,Ac),s=h=>ye.spring+Math.sqrt(Math.max(0,ye.r*ye.r-(h-ye.xc)*(h-ye.xc))),c=t==="right"?ye.xc:ye.x0,f=t==="left"?ye.xc:ye.x1,l=h=>o||t==="left"&&h<ye.xc||t==="right"&&h>ye.xc,u=o?null:ye.spring-.06;if(n){i(ye.x0,0,ye.x0+Bo,ye.spring),i(ye.x1-Bo,0,ye.x1,ye.spring),rf(e,ye.r-Bo,ye.r,r,a,Ac,64),i(ye.x0,0,ye.x1,.05),i(ye.x0,ye.spring-.06,ye.x1,ye.spring+.06);for(let h of Vv)rf(e,h-gr/2,h+gr/2,r,a,Ac,48)}if(o){i(ye.x0,0,ye.x1,ss),i(ye.xc-Bo/2,0,ye.xc+Bo/2,ye.top-Bo*.5);for(let h of nf)i(h-gr/2,ss,h+gr/2,s(h)-Bo*.5);for(let h of Tu)i(ye.x0,h-gr/2,ye.x1,h+gr/2)}else if(t==="fixed"){i(ye.xc-Bo/2,ye.spring+.06,ye.xc+Bo/2,ye.top-Bo*.5);for(let h of nf)i(h-gr/2,ye.spring+.06,h+gr/2,s(h)-Bo*.5)}else{let h=t==="left"?ye.x0+Bo:ye.x1-Bo;i(Math.min(h,h+(t==="left"?Bo*.8:-Bo*.8)),.05,Math.max(h,h+(t==="left"?Bo*.8:-Bo*.8)),u),i(c,.05,f,ss),i(c,u-.07,f,u);let d=t==="left"?ye.xc-Bo/2:ye.xc;i(d,.05,d+Bo/2,u);for(let p of nf)l(p)&&i(p-gr/2,ss,p+gr/2,u-.07);for(let p of Tu)i(c,p-gr/2,f,p+gr/2)}for(let h of[-1,1]){let d=ye.xc+h*.16;l(d)&&(ea(e,d-.02,1.05,a,d+.02,1.13,a+.06,Ac),ea(e,d-(h>0?0:.14),1.07,a+.05,d+(h>0?.14:0),1.11,a+.08,Ac))}}function Zw(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=ye;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:r;if(t.push([f,0,o],[l,0,o],[l,s,o],[f,0,o],[l,s,o],[f,s,o]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,u=Math.PI*(f+1)/c;t.push([a,s,o],[a+i*Math.cos(l),s+i*Math.sin(l),o],[a+i*Math.cos(u),s+i*Math.sin(u),o])}return t}var So=e=>e.toFixed(4);function Jw(){let e=nf.map(n=>`vb = max(vb, barCover(abs(q.x - ${So(n)}), ${So(gr/2)}, soft));`).join(`
		`),t=Tu.map(n=>`hb = max(hb, barCover(abs(q.y - ${So(n)}), ${So(gr/2)}, soft));`).join(`
		`),o=Vv.map(n=>`ab = max(ab, barCover(abs(rr - ${So(n)}), ${So(gr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${So(ye.x0)} - soft, ${So(ye.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${So(ye.x1)} - soft, ${So(ye.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${So(ye.xc)}, ${So(ye.spring)}));
		float arch = q.y < ${So(ye.spring)} ? 1.0 : 1.0 - smoothstep(${So(ye.r)} - soft, ${So(ye.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${So(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${So(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${So(ye.xc)}, ${So(ye.spring)}));
		float vb = barCover(abs(q.x - ${So(ye.xc)}), ${So(Bo/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${So(ye.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${So(ss)} - soft, ${So(ss)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${So(ye.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${So(ye.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${So(ye.x0+Bo/2)}), ${So(Bo/2)}, soft),
			barCover(abs(q.x - ${So(ye.x1-Bo/2)}), ${So(Bo/2)}, soft));
		frame = q.y < ${So(ye.spring)} ? frame : barCover(abs(rr - ${So(ye.r-Bo/2)}), ${So(Bo/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Yv.exports={addEntranceWall:Kw,addSurround:Xv,addFrames:Qw,glassPanes:Zw,doorLightGLSL:Jw,DOOR:ye,WALL:.35}});var fs=ve((jk,tm)=>{"use strict";var a0=1.1583333333333334,i0=(13.05-8*.16)/9,zu=a0+.16,Nu=i0+.16,Ka=14/2-7.75/2,Fr=15,Tc=Ka+7.75,Ya=Fr+13.05,$r=.3,Qa={y:8+.18,inset:.15},r0={y:8+.36,inset:$r},Ru=8+.2,Lc=8+.62,Cu=8+.9,Pu=.016,Jv=.28,em=.66,e4=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),t4=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),o4=[9,0,0],Xn=[10,0,0];function ls(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function xr(e,t,o,n,r,a,i){ls(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function Lu(e,t,o,n,r,a,i,s){ls(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),ls(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),ls(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),ls(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function Kv(e,t,o,n,r){xr(e,t[0],t[1],t[2],o[1],n,r),xr(e,t[0],o[3],t[2],t[3],n,r),xr(e,t[0],o[1],o[0],o[3],n,r),xr(e,o[2],o[1],t[2],o[3],n,r)}var Qv=e=>Ka+e*zu,Zv=e=>Fr+e*Nu;function n4(e,t,o=48){let n=[Ka-$r,Fr-$r,Tc+$r,Ya+$r],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,Qa.inset),i=r(n,r0.inset);xr(e,0,0,14,n[1],8,t),xr(e,0,n[3],14,o,8,t),xr(e,0,n[1],n[0],n[3],8,t),xr(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],Xn),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,Xn),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],Xn),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],Xn),Lu(e,...n.slice(0,2),...n.slice(2),8,Qa.y,Xn),Kv(e,n,a,Qa.y,Xn),Lu(e,...a.slice(0,2),...a.slice(2),Qa.y,r0.y,Xn),Kv(e,a,i,r0.y,Xn);for(let f=1;f<6;f++){let l=Qv(f)-.16;e.box(l,Ru,Fr,l+.16,r0.y,Ya,Xn)}for(let f=1;f<9;f++){let l=Zv(f)-.16;e.box(Ka,Ru,l,Tc,r0.y,l+.16,Xn)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let u=Qv(l),h=Zv(f);Lu(e,u,h,u+a0,h+i0,r0.y,Cu,Xn),xr(e,u,h,u+a0,h+i0,Cu,o4),r4(e,u+a0/2,h+i0/2,a0/2,i0/2)}}function r4(e,t,o,n,r){let a=Lc,i=Pu;xr(e,t-n,o-i,t+n,o+i,a,Xn),xr(e,t-i,o-r,t+i,o+r,a,Xn);for(let s of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=s*r/c,u=-l*i,h=f*i;ls(e,[t-f*c+u,a,o-l*c+h],[t+f*c+u,a,o+l*c+h],[t+f*c-u,a,o+l*c-h],[t-f*c-u,a,o-l*c-h],[0,-1,0],Xn)}for(let s of[Jv,em]){let c=s*n,f=s*r;xr(e,t-c-i,o-f-i,t+c+i,o-f+i,a,Xn),xr(e,t-c-i,o+f-i,t+c+i,o+f+i,a,Xn),xr(e,t-c-i,o-f+i,t-c+i,o+f-i,a,Xn),xr(e,t+c-i,o-f+i,t+c+i,o+f-i,a,Xn)}}var St=e=>e.toFixed(4);function a4(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${e4.map(St).join(", ")});
	const vec3 SKY_MOON = vec3(${t4.map(St).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${St(Ka)}, ${St(Fr)});
		vec2 pitch = vec2(${St(zu)}, ${St(Nu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${St(5)} || cell.y > ${St(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${St(a0)}, ${St(i0)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${St(Pu)} - soft, ${St(Pu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${St(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${St(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${St(Qa.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${St(Ru)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${St(r0.y)} - p.y) / L.y)).xz;
		float tG = (${St(Lc)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${St(Cu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${St(Ka-$r)}, ${St(Fr-$r)}, ${St(Tc+$r)}, ${St(Ya+$r)}), soft)
		           * rectOpen(q1, vec4(${St(Ka-$r+Qa.inset)}, ${St(Fr-$r+Qa.inset)}, ${St(Tc+$r-Qa.inset)}, ${St(Ya+$r-Qa.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${St(Ka)}, ${St(Fr)});
		vec2 pitch = vec2(${St(zu)}, ${St(Nu)});
		vec2 paneHalf = vec2(${St(a0/2)}, ${St(i0/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${St(Jv)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${St(em)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${St(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${St(Lc)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${St(Ka)}, ${St(Fr)}, ${St(Tc)}, ${St(Ya)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${St(14/2)}, ${St((Fr+Ya)/2)}) - L.xz * (${St(Lc)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${St(7.75/2)}, ${St(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${St(Fr-3)}, ${St(Fr+2)}, p.z)
		        * (1.0 - smoothstep(${St(Ya-2)}, ${St(Ya+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${St(7.75/2)}, ${St(14/2)}, abs(p.x - ${St(14/2)}));
		return z * x;
	}`}tm.exports={addSkylight:n4,skylightGLSL:a4,Z_START:Fr,Z_END:Ya,GLASS_Y:Lc,HEIGHT:8}});var er=ve((Bk,im)=>{"use strict";var us=pi(),$u=8,Uo=.35,Oe={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:$u},om=(Oe.z1-Oe.z0)/2,Iu=Oe.crown-Oe.spring,Fu=(Iu*Iu+om*om)/(2*Iu),Gu=Oe.crown-Fu;function hs(e){let t=e-Oe.zc;return Gu+Math.sqrt(Math.max(0,Fu*Fu-t*t))}var dt={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},ba=Array.from({length:dt.count},(e,t)=>dt.first+t*dt.pitch),rm=ba.slice(1).map(e=>e-dt.pitch/2),i4=[ba[0],ba[2],ba[4]],sf=[ba[1],ba[3]],Tr={r:1.3,sill:.62,spring:3.3},zo=[0,0,0],zc=[11,0,0],vi=[10,0,0],Nc=[8,0,0];function Fn(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Lr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function Rc(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,f=new Set([o,n]);for(let v of s){f.add(v.u0),f.add(v.u1);let m=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.08)));for(let g=1;g<m;g++)f.add(v.u0+(v.u1-v.u0)*g/m)}for(let v of t.cuts||[])f.add(v);let l=t.topStep||.5;for(let v=o;v<n;v+=l)f.add(v);let u=[...f].filter(v=>v>=o-1e-9&&v<=n+1e-9).sort((v,m)=>v-m),h=(v,m)=>v.bot?v.bot(m):v.bottom,d=(v,m)=>{let g=i(v),y=m.map(k=>[Math.max(0,h(k,v)),Math.min(k.head(v),g)]).filter(k=>k[1]>k[0]).sort((k,z)=>k[0]-z[0]),b=[],M=0;for(let k of y)k[0]>M+1e-6&&b.push([M,k[0]]),M=Math.max(M,k[1]);return g>M+1e-6&&b.push([M,g]),b},p=(v,m,g)=>[v,m,g];for(let v=0;v<u.length-1;v++){let m=u[v],g=u[v+1],y=(m+g)/2,b=s.filter(D=>y>D.u0&&y<D.u1),M=b.length?Math.max(m,Math.max(...b.map(D=>D.u0))+1e-7):m,k=b.length?Math.min(g,Math.min(...b.map(D=>D.u1))-1e-7):g,z=d(M,b),N=d(k,b),q=Math.min(z.length,N.length);for(let D=0;D<q;D++){let[ne,O]=z[D],[re,J]=N[D];O-ne<1e-6&&J-re<1e-6||(Fn(e,p(m,ne,a),p(g,re,a),p(g,J,a),p(m,O,a),[0,0,1],c),t.frontOnly||Fn(e,p(g,re,r),p(m,ne,r),p(m,O,r),p(g,J,r),[0,0,-1],c))}}t.noEnds||(Fn(e,p(o,0,r),p(o,0,a),p(o,i(o),a),p(o,i(o),r),[-1,0,0],c),Fn(e,p(n,0,a),p(n,0,r),p(n,i(n),r),p(n,i(n),a),[1,0,0],c));for(let v of s){if(v.noReveal)continue;let m=v.mat||t.revealMat||c,g=Math.max(0,h(v,v.u0+1e-7)),y=Math.max(0,h(v,v.u1-1e-7)),b=Math.min(v.head(v.u0+1e-7),i(v.u0)),M=Math.min(v.head(v.u1-1e-7),i(v.u1));b>g+1e-6&&Fn(e,p(v.u0,g,a),p(v.u0,g,r),p(v.u0,b,r),p(v.u0,b,a),[1,0,0],m),M>y+1e-6&&Fn(e,p(v.u1,y,r),p(v.u1,y,a),p(v.u1,M,a),p(v.u1,M,r),[-1,0,0],m);let k=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.06)));for(let z=0;z<k;z++){let N=v.u0+(v.u1-v.u0)*z/k,q=v.u0+(v.u1-v.u0)*(z+1)/k,D=Math.max(N,v.u0+1e-7),ne=Math.min(q,v.u1-1e-7),O=Math.min(v.head(D),i(N)),re=Math.min(v.head(ne),i(q));if(!(O>=i(N)-1e-6&&re>=i(q)-1e-6)){let Qe=q-N,He=re-O,de=Math.hypot(Qe,He)||1;Fn(e,p(N,O,r),p(q,re,r),p(q,re,a),p(N,O,a),[He/de,-Qe/de,0],m)}let J=h(v,D),ee=h(v,ne);if(J>1e-6||ee>1e-6){let Qe=q-N,He=ee-J,de=Math.hypot(Qe,He)||1;Fn(e,p(q,ee,r),p(N,J,r),p(N,J,a),p(q,ee,a),[-He/de,Qe/de,0],m)}}}}var Ou=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function s4(e,t){let o=Tr.r,n=Tr.sill,r=Tr.spring,a=Oe.z0,i=24,s=(d,p,v)=>[t+Math.cos(d)*p,v,a-Math.sin(d)*p];for(let d=0;d<i;d++){let p=Math.PI*d/i,v=Math.PI*(d+1)/i,m=[-Math.cos(p),0,Math.sin(p)],g=[-Math.cos(v),0,Math.sin(v)],y=[e.vert(s(p,o,n),m,zo),e.vert(s(v,o,n),g,zo),e.vert(s(v,o,r),g,zo),e.vert(s(p,o,r),m,zo)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,f=(d,p)=>[t+Math.cos(d)*Math.cos(p)*o,r+Math.sin(p)*o,a-Math.sin(d)*Math.cos(p)*o],l=(d,p)=>[-Math.cos(d)*Math.cos(p),-Math.sin(p),Math.sin(d)*Math.cos(p)];for(let d=0;d<i;d++)for(let p=0;p<c;p++){let v=Math.PI*d/i,m=Math.PI*(d+1)/i,g=Math.PI/2*p/c,y=Math.PI/2*(p+1)/c,b=[e.vert(f(v,g),l(v,g),vi),e.vert(f(m,g),l(m,g),vi),e.vert(f(m,y),l(m,y),vi),e.vert(f(v,y),l(v,y),vi)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let d=1;d<8;d++){let p=Math.PI*d/8,v=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;v.push(f(p,g).map((y,b)=>y-l(p,g)[b]*.02))}e.tube(v,m=>.035*(1-m*.6),12,6,{mat:()=>vi})}let u=e.vert([t,n,a],[0,1,0],zo);for(let d=0;d<i;d++){let p=Math.PI*d/i,v=Math.PI*(d+1)/i;e.tri(u,e.vert(s(p,o,n),[0,1,0],zo),e.vert(s(v,o,n),[0,1,0],zo))}Lr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,zo),Lr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,zo);let h=.16;for(let d=0;d<i;d++){let p=Math.PI*d/i,v=Math.PI*(d+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];Fn(e,m(p,o,a+.05),m(v,o,a+.05),m(v,o+h,a+.05),m(p,o+h,a+.05),[0,0,1],zo),Fn(e,m(p,o+h,a),m(v,o+h,a),m(v,o+h,a+.05),m(p,o+h,a+.05),[Math.cos((p+v)/2),Math.sin((p+v)/2),0],zo),Fn(e,m(p,o,a),m(v,o,a),m(v,o,a+.05),m(p,o,a+.05),[-Math.cos((p+v)/2),-Math.sin((p+v)/2),0],zo)}for(let d of[-1,1]){let p=t+d*o,v=t+d*(o+h);Lr(e,p,n,a,v,r,a+.05,zo),Lr(e,p-d*.02,r-.12,a,v+d*.06,r,a+.09,zo)}Lr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,zo),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>zo})}var c4=Tr.sill+.4,l4=Oe.z0-.62;function f4(e){Fn(e,[14,0,Oe.z0-Uo],[Oe.x1+Uo,0,Oe.z0-Uo],[Oe.x1+Uo,0,Oe.z1+Uo],[14,0,Oe.z1+Uo],[0,1,0],zo),e.curMat=zc,Rc(e,{u0:14+Uo,u1:Oe.x1+2*Uo,w0:Oe.z0-2*Uo,w1:Oe.z0,top:()=>Oe.spring,holes:sf.map(f=>({u0:f-Tr.r,u1:f+Tr.r,bottom:Tr.sill,head:Ou(f,Tr.r,Tr.spring),noReveal:!0})),mat:zc,cuts:[Oe.x1]});for(let f of sf)s4(e,f);e.save(),e.translate(0,0,Oe.z1),e.rotateY(Math.PI),e.translate(-(Oe.x1+2*Uo),0,-2*Uo);let t=f=>Oe.x1+2*Uo-f;Rc(e,{u0:t(Oe.x1+2*Uo),u1:t(13.65),w0:0,w1:2*Uo,top:()=>Oe.spring,holes:ba.map(f=>({u0:t(f+dt.halfW),u1:t(f-dt.halfW),bottom:dt.sill,head:Ou(t(f),dt.halfW,dt.spring)})),mat:zc,revealMat:zo}),e.restore(),e.save(),e.translate(Oe.x1,0,0),e.rotateY(-Math.PI/2);let o=us.DOOR,n=Oe.zc,r=o.r;Rc(e,{u0:Oe.z0-2*Uo,u1:Oe.z1+2*Uo,w0:-2*Uo,w1:0,top:f=>f<Oe.z0||f>Oe.z1?Oe.spring:hs(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:Ou(n,r,o.spring)}],mat:zc,revealMat:zo}),e.restore(),e.save(),e.translate(14+Uo,0,0),e.rotateY(-Math.PI/2),Rc(e,{u0:Oe.z0,u1:Oe.z1,w0:-0,w1:2*Uo,top:()=>$u,topStep:.15,holes:[{u0:Oe.z0,u1:Oe.z1,bottom:0,head:f=>hs(f)}],mat:zc,revealMat:zo}),e.restore();let a=14+Uo,i=Math.ceil((Oe.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let l=a+(Oe.x1-a)*f/i,u=[];for(let h=0;h<=s;h++){let d=Oe.z0+(Oe.z1-Oe.z0)*h/s,p=hs(d),v=[0,Gu-p,Oe.zc-d],m=Math.hypot(v[1],v[2]);u.push(e.vert([l,p,d],[0,v[1]/m,v[2]/m],vi))}c.push(u)}for(let f=0;f<i;f++)for(let l=0;l<s;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function nm(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=Oe.z0+(Oe.z1-Oe.z0)*i/32,c=hs(s),f=Gu-c,l=Oe.zc-s,u=Math.hypot(f,l),h=[c+f/u*n,s+l/u*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,f/u,l/u]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Fn(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,zo),Fn(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],zo),Fn(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],zo)}}function af(e,t,o,n){let i=o,s=o+n*.16;Lr(e,t-.28,0,i,t+.28,Oe.spring-.3,s,zo),Lr(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),zo),Lr(e,t-.28-.05,Oe.spring-.3,i,t+.28+.05,Oe.spring-.1,o+n*(.16+.05),zo),Lr(e,t-.28-.1,Oe.spring-.1,i,t+.28+.1,Oe.spring,o+n*(.16+.1),zo)}function h4(e,t){let o=hs(Oe.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,Oe.zc,48,{mat:()=>vi});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=Oe.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=vi,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function u4(e){e.curMat=zo;for(let[t,o]of[[Oe.z0,1],[Oe.z1,-1]])Lr(e,14.35,Oe.spring-.12,t,Oe.x1,Oe.spring,t+o*.1,zo),Lr(e,14.35,Oe.spring-.04,t,Oe.x1,Oe.spring+.05,t+o*.18,zo);for(let[t,o]of[[Oe.z0,1],[Oe.z1,-1]])Lr(e,14.35,0,t,Oe.x1,.42,t+o*.12,zo),Lr(e,14.35,.42,t,Oe.x1,.5,t+o*.07,zo);for(let t of rm)nm(e,t,.24,.16),af(e,t,Oe.z0,1),af(e,t,Oe.z1,-1);for(let t of[14.35+.28,Oe.x1-.28])nm(e,t,.28,.22),af(e,t,Oe.z0,1),af(e,t,Oe.z1,-1);for(let t of ba)h4(e,t)}function d4(e){let t=Oe.z1+Uo,o=t-.04,n=t+.04,r=(s,c,f,l)=>Lr(e,s,c,o,f,l,n,Nc),a=dt.halfW,i=(s,c,f,l,u,h)=>{let d=(p,v,m)=>[s+v*Math.cos(p),dt.spring+v*Math.sin(p),m];for(let p=0;p<h;p++){let v=l+(u-l)*p/h,m=l+(u-l)*(p+1)/h;Fn(e,d(v,c,o),d(m,c,o),d(m,f,o),d(v,f,o),[0,0,-1],Nc),Fn(e,d(v,f,n),d(m,f,n),d(m,c,n),d(v,c,n),[0,0,1],Nc)}};for(let s of ba){let c=s-a,f=s+a;r(c,dt.sill,c+.07,dt.spring),r(f-.07,dt.sill,f,dt.spring),r(c,dt.sill,f,dt.sill+.07),r(c,dt.spring-.04,f,dt.spring+.04);for(let u of[-.5,0,.5])r(s+u*a-.022,dt.sill,s+u*a+.022,dt.spring);let l=6;for(let u=1;u<l;u++){let h=dt.sill+(dt.spring-dt.sill)*u/l;r(c,h-.02,f,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let u=1;u<6;u++){let h=Math.PI*u/6,d=Math.cos(h),p=Math.sin(h),v=.02,m=(g,y)=>[s+d*g-p*v*y,dt.spring+p*g+d*v*y];Fn(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],Nc),Fn(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],Nc)}}}function p4(){let e=[],t=Oe.z1+Uo;for(let o of ba){let n=o-dt.halfW,r=o+dt.halfW;e.push([n,dt.sill,t],[r,dt.sill,t],[r,dt.spring,t],[n,dt.sill,t],[r,dt.spring,t],[n,dt.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,dt.spring,t],[o+dt.halfW*Math.cos(i),dt.spring+dt.halfW*Math.sin(i),t],[o+dt.halfW*Math.cos(s),dt.spring+dt.halfW*Math.sin(s),t])}}return e}function am(e,t){e.save(),e.translate(Oe.x1+Uo,0,Oe.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function v4(e){am(e,()=>{us.addSurround(e),us.addFrames(e,"fixed")})}function m4(e){return us.glassPanes(e||"fixed").map(([o,n,r])=>[Oe.x1+Uo-r,n,Oe.zc-7+o])}function g4(e){f4(e),u4(e),d4(e),v4(e),e.curMat=[0,0,0]}var x4={x:Oe.x1+Uo,zLo:Oe.zc-us.DOOR.r,zHi:Oe.zc+us.DOOR.r},so=e=>e.toFixed(4);function y4(){return`
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
		float k = floor((q.x - ${so(dt.first)}) / ${so(dt.pitch)} + 0.5);
		if (k < 0.0 || k > ${so(dt.count-1)}) return 0.0;
		float dx = q.x - (${so(dt.first)} + k * ${so(dt.pitch)});
		float side = 1.0 - smoothstep(${so(dt.halfW)} - soft, ${so(dt.halfW)} + soft, abs(dx));
		float sill = smoothstep(${so(dt.sill)} - soft, ${so(dt.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${so(dt.spring)}));
		float head = q.y < ${so(dt.spring)} ? 1.0 : 1.0 - smoothstep(${so(dt.halfW)} - soft, ${so(dt.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${so(dt.halfW*.5)}), 0.022, soft));
		float rowH = ${so((dt.spring-dt.sill)/6)};
		float ry = (q.y - ${so(dt.sill)}) / rowH;
		cover = max(cover, q.y < ${so(dt.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${so(dt.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${so(Oe.x0)} || p.z < ${so(Oe.z0-.1)} || p.z > ${so(Oe.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${so(Oe.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${so(Oe.z1+2*Uo)} - p.z) / WIN_SKY.z;
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
		${sf.map(e=>`{ float d = abs(p.x - ${so(e)}); if (d < best) { best = d; lamp = vec3(${so(e)}, ${so(Tr.spring+.55)}, ${so(Oe.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${so(Oe.z0+1.6)} || p.z < ${so(Oe.z0-Tr.r-.1)} || p.x < ${so(Oe.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${so(Tr.r)}, ${so(Tr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${so(Oe.x0-1)}) return 0.0;
		float inC = smoothstep(${so(Oe.z0-1.5)}, ${so(Oe.z0)}, p.z) * smoothstep(${so(Oe.x0-1)}, ${so(Oe.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${so(Oe.z0)}, ${so(Oe.z1)}, p.z);
		return inC * near;
	}`}im.exports={wallWithHoles:Rc,windowLightGLSL:y4,addWing:g4,windowGlass:p4,farDoorGlass:m4,atFarDoor:am,FAR_DOOR:x4,vaultY:hs,C:Oe,NICHE_X:sf,NICHE:Tr,NICHE_PLINTH_TOP:c4,NICHE_STATUE_Z:l4,WIN:dt,winCentres:ba,piers:rm,PAINTING_X:i4,HEIGHT:$u}});var ta=ve((Uk,lm)=>{"use strict";var Du=er(),Go=8,vs=.35,s0=14,ps=4,qe={x0:s0+vs,x1:s0+vs+2*ps,z0:5.9-ps,z1:5.9+ps,zc:5.9,cx:s0+vs+ps,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Go},oculus:3.3};qe.domeTop=qe.dome.base+qe.dome.r;var ms={spokes:16,ringE:[.42,.95],bar:.035},Tn={sxz:1.32,sy:1.6,yaw:.6};Tn.crownC=[qe.cx,.4+3.4*Tn.sy,qe.zc];Tn.crownR=[2.3*Tn.sxz,1.9*Tn.sy,2.3*Tn.sxz];Tn.trunkR=.26*Tn.sxz;Tn.trunkTop=.4+2.2*Tn.sy;var sm={inner:1.05,outer:1.62,seat:.48,soil:.4},ff=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),$n=[0,0,0],ds=[11,0,0],cf=[10,0,0],lf=[9,0,0],b4=[5,0,0],qu=[3,0,0];function Za(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function yr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var w4=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function _4(e){e.save(),e.translate(s0+vs,0,0),e.rotateY(-Math.PI/2),Du.wallWithHoles(e,{u0:0,u1:Du.C.z0,w0:0,w1:2*vs,top:()=>Go,holes:[{u0:qe.zc-qe.arch.r,u1:qe.zc+qe.arch.r,bottom:0,head:w4(qe.zc,qe.arch.r,qe.arch.spring),step:.05}],mat:ds,revealMat:$n,topStep:1}),e.restore();let t=s0-vs;for(let[i,s]of[[0,qe.zc-qe.arch.r],[qe.zc+qe.arch.r,Du.C.z0]])yr(e,t-.12,0,i,t,.42,s,$n),yr(e,t-.07,.42,i,t,.5,s,$n);let o=t,n=.24,r=40,a=(i,s,c)=>[c,qe.arch.spring+Math.sin(i)*s,qe.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;Za(e,a(s,qe.arch.r,o-.07),a(c,qe.arch.r,o-.07),a(c,qe.arch.r+n,o-.07),a(s,qe.arch.r+n,o-.07),[-1,0,0],$n),Za(e,a(s,qe.arch.r+n,o),a(c,qe.arch.r+n,o),a(c,qe.arch.r+n,o-.07),a(s,qe.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],$n),Za(e,a(s,qe.arch.r,o),a(c,qe.arch.r,o),a(c,qe.arch.r,o-.07),a(s,qe.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],$n)}yr(e,o-.12,qe.arch.spring+qe.arch.r-.06,qe.zc-.17,o,qe.arch.spring+qe.arch.r+n+.16,qe.zc+.17,$n);for(let i of[-1,1]){let s=qe.zc+i*qe.arch.r,c=qe.zc+i*(qe.arch.r+n);yr(e,o-.07,0,s,o,qe.arch.spring,c,$n),yr(e,o-.13,qe.arch.spring-.16,s-i*.03,o,qe.arch.spring,c+i*.08,$n),yr(e,o-.12,0,s-i*.03,o,.5,c+i*.06,$n)}}function M4(e){let{x0:t,x1:o,z0:n,z1:r}=qe;Za(e,[s0,0,n],[o,0,n],[o,0,r],[s0,0,r],[0,1,0],$n),e.curMat=ds,Za(e,[o,0,n],[o,0,r],[o,Go,r],[o,Go,n],[-1,0,0],ds),Za(e,[t,0,n],[o,0,n],[o,Go,n],[t,Go,n],[0,0,1],ds),Za(e,[o,0,r],[t,0,r],[t,Go,r],[o,Go,r],[0,0,-1],ds),Za(e,[t,0,r],[t,0,n],[t,Go,n],[t,Go,r],[1,0,0],ds),yr(e,o-.12,0,n,o,.42,r,$n),yr(e,t,0,n,o,.42,n+.12,$n),yr(e,t,0,r-.12,o,.42,r,$n),yr(e,o-.2,Go-.3,n,o,Go,r,$n),yr(e,t,Go-.3,n,o,Go,n+.2,$n),yr(e,t,Go-.3,r-.2,o,Go,r,$n),yr(e,t,Go-.3,n,t+.2,Go,r,$n);let a=qe.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([qe.cx+Math.cos(y)*a,qe.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(ps/Math.max(y,1e-6),ps/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,M=c(y),k=c(b),z=[qe.cx+Math.cos(y)*M,Go,qe.zc+Math.sin(y)*M],N=[qe.cx+Math.cos(b)*k,Go,qe.zc+Math.sin(b)*k];Za(e,[s[g][0],Go,s[g][1]],[s[g+1][0],Go,s[g+1][1]],N,z,[0,-1,0],cf)}e.lathe([[a+.02,Go-.18,1],[a-.12,Go-.18,1],[a-.12,Go-.06,1],[a-.05,Go,1],[a,Go+.02]],qe.cx,qe.zc,i,{mat:()=>$n});let f=16,l=(g,y,b)=>[qe.cx+Math.cos(g)*Math.cos(y)*b,qe.dome.base+Math.sin(y)*b,qe.zc+Math.sin(g)*Math.cos(y)*b],u=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/i,M=Math.PI*2*(g+1)/i,k=u*y/f,z=u*(y+1)/f,N=(D,ne)=>[-Math.cos(D)*Math.cos(ne),-Math.sin(ne),-Math.sin(D)*Math.cos(ne)],q=[e.vert(l(b,k,a),N(b,k),lf),e.vert(l(M,k,a),N(M,k),lf),e.vert(l(M,z,a),N(M,z),lf),e.vert(l(b,z,a),N(b,z),lf)];e.tri(q[0],q[1],q[2]),e.tri(q[0],q[2],q[3])}for(let g=0;g<ms.spokes;g++){let y=Math.PI*2*g/ms.spokes,b=[];for(let M=0;M<=14;M++)b.push(l(y,(u-.06)*M/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>cf})}for(let g of ms.ringE){let y=Math.cos(g)*(a-.04),b=qe.dome.base+Math.sin(g)*(a-.04),M=[];for(let k=0;k<=72;k++){let z=Math.PI*2*k/72;M.push([qe.cx+Math.cos(z)*y,b,qe.zc+Math.sin(z)*y])}e.tube(M,()=>.035,72,6,{mat:()=>cf})}e.ellipsoid([qe.cx,qe.dome.base+a-.06,qe.zc],[.16,.08,.16],6,12,{mat:()=>cf});let h=.46,d=.55,p=.12,v=(g,y,b,M)=>{yr(e,g,h-.08,y,b,h,M,qu);let k=b-g>M-y?[g+.25,b-.25]:[g+.06,b-.06],z=b-g>M-y?[y+.06,M-.06]:[y+.25,M-.25];yr(e,k[0],0,z[0],k[1],h-.08,z[1],qu)};v(o-p-d,n+1.1,o-p,r-1.1),v(t+1,n+p,o-1.1,n+p+d),v(t+1,r-p-d,o-1.1,r-p);let m=sm;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],qe.cx,qe.zc,64,{mat:()=>qu}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],qe.cx,qe.zc,48,{mat:()=>b4})}function E4(e){_4(e),M4(e),e.curMat=[0,0,0]}var No=e=>e.toFixed(4);function cm(){let e=qe.dome.r,t=ms.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${No(ff[0])}, ${No(ff[1])}, ${No(ff[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${No(qe.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${No(qe.cx)}, ${No(qe.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${No(e-.15)} - soft, ${No(e-.15)} + soft, d);
		float hw = ${No(ms.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${No(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${No(Math.PI*2/ms.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${No(Tn.crownC[0])}, ${No(Tn.crownC[1])}, ${No(Tn.crownC[2])});
		vec3 r = vec3(${No(Tn.crownR[0])}, ${No(Tn.crownR[1])}, ${No(Tn.crownR[2])});
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
		float tt = (${No(Tn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${No(qe.cx)}, ${No(qe.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${No(Tn.trunkR*.7)}, ${No(Tn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function k4(){return`
	${cm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${No(qe.x0-.75)} || p.z < ${No(qe.z0-.5)} || p.z > ${No(qe.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${No(qe.x0-1.5)} || p.z < ${No(qe.z0-1.5)} || p.z > ${No(qe.z1+1.5)}) return 0.0;
		float inside = smoothstep(${No(qe.x0-1.2)}, ${No(qe.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${No(qe.cx)}, ${No(qe.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}lm.exports={addAlcove:E4,alcoveLightGLSL:k4,oculusGLSL:cm,A:qe,BENCH:sm,SHAFT:ff,TREE:Tn}});var tr=ve((Wk,hm)=>{"use strict";var wa=0;try{let e=location.search;/[?&]night\b/.test(e)&&(wa=1)}catch(e){}var Ja=wa,Hu=0,fm=[],hf={tick(e){let t=Hu?Math.min(.1,e-Hu):0;if(Hu=e,Ja!==wa){let o=t/2.4;Ja=wa>Ja?Math.min(wa,Ja+o):Math.max(wa,Ja-o)}return hf.night},get night(){return Ja*Ja*(3-2*Ja)},get isNight(){return wa===1},get settled(){return Ja===wa},set(e){wa=e?1:0,fm.forEach(t=>t(wa))},toggle(){hf.set(!wa)},onChange(e){fm.push(e)}};hf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;hm.exports=hf});var gi=ve((Vk,Ic)=>{"use strict";var ju=tr(),{C:Bu}=er(),{A:uf,BENCH:Cc}=ta(),Ln=Math.PI,S4=[18,29,40],df=.575,mi=[],Pc=(e,t,o,n,r,a,i)=>mi.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));S4.forEach(e=>{Pc(1.25+df+.48,3.25,e,[1,0],.48,df,{s:1.2}),Pc(12.75-df-.48,3.25,e,[-1,0],.48,df,{s:1.2})});[3,11].forEach(e=>Pc(e,3.45,Bu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var A4=[14.63,19.63,24.03,28.43,32.83,Bu.x1-.28];A4.forEach(e=>Pc(e,3.15,Bu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>Pc(.35+.44,2.75,e,[1,0],.44,99));{let e=(Cc.inner+Cc.outer)/2,t=Math.atan2(-1.12,-.98);mi.push({x:uf.cx+Math.cos(t)*e,y:Cc.seat+.155,z:uf.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[uf.cx,uf.zc,Cc.outer+.07,Cc.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Uu=.13,pf=.21,Gn=Uu/Math.cos(Ln/6),_o=e=>e.toFixed(4);function um(e){let o=(e||mi.map((n,r)=>r)).map(n=>{let r=mi[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
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
		float t = mod(az + ${_o(Ln/6)}, ${_o(Ln/3)}) - ${_o(Ln/6)};
		float U = tan(t) / ${_o(Math.tan(Ln/6))};
		float V = (q.y / h) * (${_o(Uu/pf)} / cos(t));
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
	}`}var Wo=0,T4=1;function L4(){let e=[],t=[],o=[],n=[],r=[],a=(d,p,v,m)=>(e.push(d[0],d[1],d[2]),t.push(p[0],p[1],p[2]),o.push(v),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(d,p)=>[d[0]-p[0],d[1]-p[1],d[2]-p[2]],s=(d,p)=>[d[1]*p[2]-d[2]*p[1],d[2]*p[0]-d[0]*p[2],d[0]*p[1]-d[1]*p[0]],c=d=>{let p=Math.hypot(d[0],d[1],d[2])||1;return[d[0]/p,d[1]/p,d[2]/p]};function f(d,p,v,m,g,y){let b=c(s(i(p,d),i(m,d))),M=a(d,b,g,[0,0]),k=a(p,b,g,[1,0]),z=a(v,b,g,[1,1]),N=a(m,b,g,[0,1]);r.push(M,k,z,M,z,N),y&&r.push(M,z,k,M,N,z)}function l(d,p,v){for(let y=0;y<d.length;y++){let b=d[Math.max(0,y-1)],M=d[Math.min(d.length-1,y+1)],k=c(i(M,b)),z=Math.abs(k[1])>.9?[1,0,0]:[0,1,0],N=c(s(k,z)),q=s(N,k),D=typeof p=="function"?p(y/(d.length-1)):p;for(let ne=0;ne<=6;ne++){let O=ne/6*Ln*2,re=Math.cos(O),J=Math.sin(O),ee=[N[0]*re+q[0]*J,N[1]*re+q[1]*J,N[2]*re+q[2]*J];a([d[y][0]+ee[0]*D,d[y][1]+ee[1]*D,d[y][2]+ee[2]*D],ee,v)}}let g=e.length/3-d.length*7;for(let y=0;y<d.length-1;y++)for(let b=0;b<6;b++){let M=g+y*7+b,k=M+6+1;r.push(M,k,M+1,M+1,k,k+1)}}function u(d,p,v,m,g,y,b,M,k){let z=(N,q,D)=>{let ne=y+Ln/6+D*Ln/3;return[d[0]+Math.cos(ne)*N,q,d[2]+Math.sin(ne)*N]};for(let N=0;N<6;N++)f(z(m,p,N+1),z(m,p,N),z(g,v,N),z(g,v,N+1),b);if(M&&g>0)for(let N=0;N<6;N++){let q=a([d[0],v,d[2]],[0,1,0],b),D=a(z(g,v,N),[0,1,0],b),ne=a(z(g,v,N+1),[0,1,0],b);r.push(q,ne,D)}if(k&&m>0)for(let N=0;N<6;N++){let q=a([d[0],p,d[2]],[0,-1,0],b),D=a(z(m,p,N),[0,-1,0],b),ne=a(z(m,p,N+1),[0,-1,0],b);r.push(q,D,ne)}}function h(d,p,v,m,g,y,b){let M=[];for(let z=0;z<=18;z++){let N=z/18,q=(b||0)+N*m*Ln*2,D=v*(1-.75*N);M.push([d[0]+p[0]*Math.cos(q)*D,d[1]+Math.sin(q)*D,d[2]+p[2]*Math.cos(q)*D])}l(M,g,y)}return mi.forEach(d=>{let p=d.s,v=Math.atan2(d.o[1],d.o[0]),m=[d.x,d.y,d.z],g=(M,k,z)=>[d.x+d.o[0]*M-d.o[1]*(z||0),d.y+k,d.z+d.o[1]*M+d.o[0]*(z||0)],y=d.y-pf*p,b=d.y+pf*p;for(let M=0;M<6;M++){let k=v+Ln/6+M*Ln/3,z=k+Ln/3,N=Gn*p*.97,q=[d.x+Math.cos(k)*N,y,d.z+Math.sin(k)*N],D=[d.x+Math.cos(z)*N,y,d.z+Math.sin(z)*N];f(D,q,[q[0],b,q[2]],[D[0],b,D[2]],T4,!0)}for(let M=0;M<6;M++){let k=v+Ln/6+M*Ln/3,z=Gn*p;l([[d.x+Math.cos(k)*z,y-.02*p,d.z+Math.sin(k)*z],[d.x+Math.cos(k)*z,b+.02*p,d.z+Math.sin(k)*z]],.011*p,Wo)}u(m,y-.035*p,y,Gn*p*1.12,Gn*p*1.12,v,Wo,!0,!0),u(m,y-.1*p,y-.035*p,Gn*p*.55,Gn*p*1,v,Wo,!1,!0),u(m,y-.17*p,y-.1*p,0,Gn*p*.55,v,Wo,!1,!1);for(let M=0;M<6;M++){let k=v+M*Ln/3,z=Uu*p*1.06,N=[d.x+Math.cos(k)*z,y-.06*p,d.z+Math.sin(k)*z];h(N,[-Math.sin(k),0,Math.cos(k)],.03*p,.85,.004*p,Wo,.3)}u(m,b,b+.03*p,Gn*p*1.14,Gn*p*1.14,v,Wo,!1,!0),u(m,b+.03*p,b+.2*p,Gn*p*1.14,Gn*p*.32,v,Wo,!1,!1),u(m,b+.2*p,b+.27*p,Gn*p*.34,Gn*p*.34,v,Wo,!1,!1),u(m,b+.27*p,b+.37*p,Gn*p*.42,0,v,Wo,!1,!0),l([[d.x,b+.36*p,d.z],[d.x,b+.47*p,d.z]],M=>.01*p*(1-.7*M),Wo),u([d.x,0,d.z],b+.44*p,b+.47*p,.018*p,0,v,Wo,!1,!0);for(let M=0;M<6;M++){let k=v+Ln/6+M*Ln/3,z=Gn*p*1.14,N=[d.x+Math.cos(k)*z,b+.03*p,d.z+Math.sin(k)*z];l([N,[N[0],N[1]+.09*p,N[2]]],q=>.008*p*(1-.8*q),Wo),u([N[0],0,N[2]],N[1]+.035*p,N[1]+.06*p,.014*p,.014*p,k,Wo,!0,!0)}if(d.mount==="wall"){let M=d.back,k=y-.32,z=g(-M,0,0);((O,re,J)=>{let ee=[d.o[0],0,d.o[1]],Qe=[-d.o[1],0,d.o[0]],He=(ot,ht,Ft)=>[z[0]+Qe[0]*ot+ee[0]*Ft,ht,z[2]+Qe[2]*ot+ee[2]*Ft],de=.03,ie=.065;f(He(-J,O,ie),He(J,O,ie),He(J,re,ie),He(-J,re,ie),Wo,!0),f(He(J,O,de),He(J,O,ie),He(J,re,ie),He(J,re,de),Wo,!0),f(He(-J,O,ie),He(-J,O,de),He(-J,re,de),He(-J,re,ie),Wo,!0),f(He(-J,re,ie),He(J,re,ie),He(J,re,de),He(-J,re,de),Wo,!0),f(He(-J,O,de),He(J,O,de),He(J,O,ie),He(-J,O,ie),Wo,!0),u([z[0]+ee[0]*ie,0,z[2]+ee[2]*ie],re,re+.05,J*.6,0,v,Wo,!1,!0),u([z[0]+ee[0]*ie,0,z[2]+ee[2]*ie],O-.05,O,0,J*.6,v,Wo,!1,!1)})(k-.2,k+.2,.07);let q=[];for(let O=0;O<=14;O++){let re=O/14,J=-M+.05+re*(M-.05),ee=k+.04+(y-.17*p-k-.04)*Math.pow(re,2.2);q.push(g(J,ee-d.y,0))}l(q,O=>.022*(1-.3*O),Wo);let D=[];for(let O=0;O<=10;O++){let re=O/10;D.push(g(-M+.05+re*M*.6,k-.14+re*.16+.05*Math.sin(re*Ln)-d.y,0))}l(D,.009,Wo);let ne=D[D.length-1];h([ne[0]-d.o[0]*.03,ne[1]+.02,ne[2]-d.o[1]*.03],[d.o[0],0,d.o[1]],.045,1.1,.007,Wo,-.4),[.3,.55].forEach(O=>{let re=q[Math.round(O*14)],J=D[Math.round(O/.62*10)]||D[10];l([re,J],.006,Wo)}),[-1,1].forEach(O=>{let re=g(-.05,-pf*p-.2*p,0);h([re[0]-d.o[1]*O*.05,re[1],re[2]+d.o[0]*O*.05],[-d.o[1]*O,0,d.o[0]*O],.05*p,.9,.006,Wo,Ln)})}else for(let M=0;M<3;M++){let k=v+M*Ln*2/3,z=[d.x+Math.cos(k)*Gn*p*.7,y-.035*p,d.z+Math.sin(k)*Gn*p*.7],N=[d.x+Math.cos(k)*Gn*p*1.25,y-.17*p,d.z+Math.sin(k)*Gn*p*1.25];l([z,N],.012*p,Wo)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}Ic.exports=e=>{let t=L4(),o=e({vert:`
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
		${um()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>ju.night}}),n=[],r=[];mi.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>ju.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),ju.night>.01&&a()}};Ic.exports.lanternGLSL=um;Ic.exports.LANTERNS=mi;Ic.exports.TREE_LANTERN=[mi.length-1]});var bi=ve((Xk,zr)=>{"use strict";var z4=tr(),Ao=Math.PI,Xo=e=>(+e).toFixed(4),N4=e=>`vec3(${Xo(e[0])}, ${Xo(e[1])}, ${Xo(e[2])})`,ct={x:-7,z:44.5},Dt=5.2,Yn=15,Ue={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},Oa={z0:42.2,z1:46.8,top:6.3,x:.35},gf=[ct.x-Math.sqrt(Dt*Dt-3.05*3.05),0,0],dn={x0:-2.05+gf[0],x1:gf[0],z0:41.45,z1:47.55,top:4.3},Wu=[[dn.x1+.05,2.35,dn.z0-.45],[dn.x1+.05,2.35,dn.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-ct.z,e-ct.x);return[ct.x+Math.cos(n)*(Dt-.16),t,ct.z+Math.sin(n)*(Dt-.16)]}),yo={ri:3.4,ro:Dt,a0:-35*Ao/180,rise:.1836,step:3.6*Ao/180,n:88,thick:.36};yo.k=yo.rise/yo.step;var br=e=>yo.a0-e,yi=e=>e*yo.k,Yo={x:ct.x+.1,z:ct.z-.15,yaw:-Ao/2,scale:1.3},ei=Yo.scale/1.1,Oc={keyX0:Yo.x-.524*ei,keyX1:Yo.x+.491*ei,keyTop:.647*ei,keyFront:Yo.z+.808*ei,keyBack:Yo.z+.72*ei,stoolX:Yo.x-.041*ei,stoolZ:Yo.z+1.122*ei,stoolFront:Yo.z+.96*ei,stoolTop:.37*ei,heading:Ao},mf=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function pm(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function R4(e,t){let o=1e9;for(let n=0;n<mf.length-1;n++){let[r,a]=mf[n],[i,s]=mf[n+1],c=i-r,f=s-a,l=Math.max(0,Math.min(1,((e-r)*c+(t-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(e-r-c*l,t-a-f*l))}return o}var vf=e=>Ue.spring+Math.sqrt(Math.max(0,Ue.r*Ue.r-(e-Ue.zc)*(e-Ue.zc))),xi=e=>ct.x+Math.sqrt(Math.max(0,Dt*Dt-(e-ct.z)*(e-ct.z)));function gs(e,t){return Math.hypot(e-ct.x,t-ct.z)<Dt||e<=0&&e>ct.x&&t>Ue.z0&&t<Ue.z1||e>dn.x0&&e<dn.x1&&t>dn.z0&&t<dn.z1}function C4(e,t){if(Math.hypot(e-ct.x,t-ct.z)<yo.ri-.05)return 99;let n=Math.atan2(t-ct.z,e-ct.x),r=yo.a0-n;for(;r<0;)r+=2*Ao;for(;r>=2*Ao;)r-=2*Ao;return r>yo.n*yo.step?99:yi(r)-yo.thick}function P4(){let e=[],t=pm(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let f=e[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-i)<s+f[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-Yo.x,c=i-Yo.z,f=Math.cos(Yo.yaw),l=Math.sin(Yo.yaw),u=(f*s-l*c)/Yo.scale,h=(l*s+f*c)/Yo.scale;return u>-1.05&&u<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(Dt-1.45),s=t()*2*Ao,c=ct.x+Math.cos(s)*i,f=ct.z+Math.sin(s)*i;if(!gs(c,f)||i>Dt-.18||n(c,f)||R4(c,f)<.62||C4(c,f)<2.3||c<dn.x1+.9)continue;let l=.022+t()*.02;if(o(c,f,l))continue;let u=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,f,l,u,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*yo.step,f=br(c),l=yo.ri+.55+t()*(yo.ro-yo.ri-.75),u=.022+t()*.016;e.push([ct.x+Math.cos(f)*l,(a+1)*yo.rise,ct.z+Math.sin(f)*l,u,.05+t()*.14,t()*100])}}for(let a of Wu)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[dn.z0-.35,dn.z1+.35])for(let i=0;i<9;i++){let s=dn.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-ct.x,c-ct.z)>Dt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function I4(e){let o=pm(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,f=1e9;n.forEach((l,u)=>{let h=(s[0]-l[0])**2+(s[1]-l[1])**2*4+(s[2]-l[2])**2;h<f&&(f=h,c=u)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var Vu=P4(),dm=I4(Vu.filter(e=>e[1]<2||e[1]>2.5)).concat(Wu.map(e=>[e[0],e[1]+.35,e[2],.035]));function vm(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${dm.map((t,o)=>`
		{
			vec3 d = ${N4(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Xo(5.3+o*.71)} + ${Xo(o*1.9)}) + 0.06 * sin(time * ${Xo(11.7+o*1.3)} + ${Xo(o*.7)});
			float w = ${Xo(t[3]*dm.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Xo(Yn)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Xo(ct.x)}, ${Xo(Yn)}, ${Xo(ct.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Xo(Oc.stoolX)}, ${Xo(Oc.keyFront+.1)})));
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
	}`}var Nt={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function mm(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),f=e.v(o,a,i,s&&s[1]),l=e.v(n,a,i,s&&s[2]),u=e.v(r,a,i,s&&s[3]);e.idx.push(c,f,l,c,l,u)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function O4(){let e=mm(),t=(n,r,a)=>[ct.x+Math.cos(n)*r,a,ct.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>dn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,f=a+.2;if(!(gs(i,c)||gs(s,c)||gs(i,f)||gs(s,f)||gs((i+s)/2,(c+f)/2)))continue;let l=c,u=f;i>xi(Ue.z0)-.3&&(l=Math.max(l,Ue.z0),u=Math.min(u,Ue.z1),u<=l)||e.quad([i,0,l],[i,0,u],[s,0,u],[s,0,l],[0,1,0],Nt.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*Ao,i=(r+1)/360*2*Ao,s=(a+i)/2,c=t(s,Dt,0),f=0;c[0]>ct.x&&c[2]>Ue.z0-.02&&c[2]<Ue.z1+.02&&(f=Math.max(vf(Math.min(Math.max(t(a,Dt,0)[2],Ue.z0),Ue.z1)),vf(Math.min(Math.max(t(i,Dt,0)[2],Ue.z0),Ue.z1)))),c[0]<ct.x&&c[2]>dn.z0-.02&&c[2]<dn.z1+.02&&(f=dn.top);let l=a*Dt,u=i*Dt,h=o(a).map(v=>-v),d=o(i).map(v=>-v),p=[f];for(let v=Math.ceil(f/2.5)*2.5;v<Yn;v+=2.5)v>f+.01&&p.push(v);p.push(Yn);for(let v=0;v<p.length-1;v++){let m=p[v],g=p[v+1],y=e.v(t(a,Dt,m),h,Nt.WALL,[l,m]),b=e.v(t(i,Dt,m),d,Nt.WALL,[u,m]),M=e.v(t(i,Dt,g),d,Nt.WALL,[u,g]),k=e.v(t(a,Dt,g),h,Nt.WALL,[l,g]);e.idx.push(y,b,M,y,M,k)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*Ao,f=(s+1)/360*2*Ao,l=(c+f)/2,u=t(l,Dt,0);if(r<1&&(u[0]>ct.x&&u[2]>Ue.z0&&u[2]<Ue.z1||u[0]<ct.x&&u[2]>dn.z0&&u[2]<dn.z1))continue;let h=Dt-i;e.quad(t(c,h,r),t(f,h,r),t(f,h,r+a),t(c,h,r+a),o(l).map(d=>-d),Nt.WALL,[[c*Dt,r+100],[f*Dt,r+100],[f*Dt,r+a+100],[c*Dt,r+a+100]]),e.quad(t(c,h,r+a),t(f,h,r+a),t(f,Dt,r+a),t(c,Dt,r+a),[0,1,0],Nt.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,Dt,r),t(f,Dt,r),t(f,h,r),t(c,h,r),[0,-1,0],Nt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=Oa.x;for(let[a,i]of[[Ue.z0,1],[Ue.z1,-1]]){let s=xi(a);e.quad([n,0,a],[s,0,a],[s,Ue.spring,a],[n,Ue.spring,a],[0,0,i],Nt.WALL,[[n,0],[s,0],[s,Ue.spring],[n,Ue.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*Ao,s=(a+1)/r*Ao,c=Ue.zc-Math.cos(i)*Ue.r,f=Ue.zc-Math.cos(s)*Ue.r,l=Ue.spring+Math.sin(i)*Ue.r,u=Ue.spring+Math.sin(s)*Ue.r,h=[0,-Math.sin(i),Math.cos(i)],d=[0,-Math.sin(s),Math.cos(s)],p=e.v([n,l,c],h,Nt.WALL,[n,i*Ue.r]),v=e.v([xi(c),l,c],h,Nt.WALL,[xi(c),i*Ue.r]),m=e.v([xi(f),u,f],d,Nt.WALL,[xi(f),s*Ue.r]),g=e.v([n,u,f],d,Nt.WALL,[n,s*Ue.r]);e.idx.push(p,v,m,p,m,g)}}{let n=Oa.x,r=.05;for(let f=Oa.z0;f<Oa.z1-1e-6;f+=r){let l=f,u=Math.min(Oa.z1,f+r),d=(p=>p>Ue.z0&&p<Ue.z1)((l+u)/2)?Math.max(vf(l),vf(u)):0;e.quad([n,d,l],[n,d,u],[n,Oa.top,u],[n,Oa.top,l],[1,0,0],Nt.HALLSTONE,[[l,d],[u,d],[u,Oa.top],[l,Oa.top]])}let a=.32,i=.06,s=n+i,c=36;for(let f=0;f<c;f++){let l=f/c*Ao,u=(f+1)/c*Ao,h=(g,y)=>[s,Ue.spring+Math.sin(g)*y,Ue.zc-Math.cos(g)*y],d=Ue.r,p=Ue.r+a;e.quad(h(l,d),h(u,d),h(u,p),h(l,p),[1,0,0],Nt.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let v=(g,y,b)=>[b,Ue.spring+Math.sin(g)*y,Ue.zc-Math.cos(g)*y],m=[0,Math.sin((l+u)/2),-Math.cos((l+u)/2)];e.quad(v(l,p,n),v(u,p,n),v(u,p,s),v(l,p,s),m,Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(v(l,d,n),v(u,d,n),v(u,d,s),v(l,d,s),m.map(g=>-g),Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,u]of[[Ue.z0-a,Ue.z0,-1],[Ue.z1,Ue.z1+a,1]]){e.quad([s,0,f],[s,0,l],[s,Ue.spring,l],[s,Ue.spring,f],[1,0,0],Nt.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=u<0?f:l,d=u<0?l:f;e.quad([n,0,h],[s,0,h],[s,Ue.spring,h],[n,Ue.spring,h],[0,0,u],Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,d],[s,0,d],[s,Ue.spring,d],[n,Ue.spring,d],[0,0,-u],Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let p=Ue.spring-.16,v=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;e.quad([n+m,p,g],[n+m,p,y],[n+m,p+v,y],[n+m,p+v,g],[1,0,0],Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,p+v,g],[n+m,p+v,g],[n+m,p+v,y],[n,p+v,y],[0,1,0],Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,p,g],[n,p,y],[n+m,p,y],[n+m,p,g],[0,-1,0],Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,p,b],[n+m,p,b],[n+m,p+v,b],[n,p+v,b],[0,0,b===g?-1:1],Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=Ue.spring+Ue.r-.05,l=Ue.spring+Ue.r+a+.12,u=.16,h=.22,d=s+.04;e.quad([d,f,Ue.zc-u],[d,f,Ue.zc+u],[d,l,Ue.zc+h],[d,l,Ue.zc-h],[1,0,0],Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let p of[-1,1])e.quad([n,f,Ue.zc+p*u],[d,f,Ue.zc+p*u],[d,l,Ue.zc+p*h],[n,l,Ue.zc+p*h],[0,0,p],Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,l,Ue.zc-h],[d,l,Ue.zc-h],[d,l,Ue.zc+h],[n,l,Ue.zc+h],[0,1,0],Nt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=dn;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],Nt.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[f,l]of[[a,1],[i,-1]]){let u=ct.x-Math.sqrt(Dt*Dt-(f-ct.z)*(f-ct.z));e.quad([n,0,f],[u,0,f],[u,s,f],[n,s,f],[0,0,l],Nt.WALL,[[n,0],[u,0],[u,s],[n,s]])}let c=24;for(let f=0;f<c;f++){let l=a+(i-a)*f/c,u=a+(i-a)*(f+1)/c,h=ct.x-Math.sqrt(Dt*Dt-(l-ct.z)**2),d=ct.x-Math.sqrt(Dt*Dt-(u-ct.z)**2);e.quad([n,s,l],[h,s,l],[d,s,u],[n,s,u],[0,-1,0],Nt.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(i-a)*f/c,u=a+(i-a)*(f+1)/c,h=ct.x-Math.sqrt(Dt*Dt-(l-ct.z)**2)+.05,d=ct.x-Math.sqrt(Dt*Dt-(u-ct.z)**2)+.05;e.quad([h,s-.3,l],[d,s-.3,u],[d,s,u],[h,s,l],[1,0,0],Nt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Dt];for(let a=0;a<120;a++){let i=a/120*2*Ao,s=(a+1)/120*2*Ao,c=(i+s)/2;c>Ao&&(c-=2*Ao);for(let f=0;f<r.length-1;f++){let l=r[f],u=r[f+1],h=c*180/Ao;l>=3.3&&h>8&&h<85||e.quad(t(i,l,Yn),t(i,u,Yn),t(s,u,Yn),t(s,l,Yn),[0,-1,0],Nt.CEIL,[[i*l,l],[i*u,u],[s*u,u],[s*l,l]])}e.quad(t(i,1.15,Yn),t(s,1.15,Yn),t(s,1.15,Yn+.7),t(i,1.15,Yn+.7),o(c).map(f=>-f),Nt.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([ct.x,Yn+.7,ct.z],t(s,1.15,Yn+.7),t(i,1.15,Yn+.7),[0,-1,0],Nt.OCULUS)}}{let n=yo.ri,r=yo.ro,a=yo.n*yo.step;for(let c=0;c<yo.n;c++){let f=c*yo.step,l=(c+1)*yo.step,u=br(f),h=br(l),d=(c+1)*yo.rise,p=c*yo.rise,v=2;for(let y=0;y<v;y++){let b=u+(h-u)*y/v-(y===0?.004:0),M=u+(h-u)*(y+1)/v;e.quad(t(b,n,d),t(b,r,d),t(M,r,d),t(M,n,d),[0,1,0],Nt.STEP,[[n*b,c],[r*b,c],[r*M,c],[n*M,c]])}let m=[-Math.sin(u),0,Math.cos(u)],g=u-.004;e.quad(t(g,n,p),t(g,r,p),t(g,r,d),t(g,n,d),m,Nt.STEP,[[n*u,c+.5],[r*u,c+.5],[r*u,c+.5],[n*u,c+.5]]),e.quad(t(u,n,yi(f)+.06),t(h,n,yi(l)+.06),t(h,n,d),t(g,n,d),o((u+h)/2).map(y=>-y),Nt.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*Ao/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let f=c/i*a,l=(c+1)/i*a,u=br(f),h=br(l),d=yi(f),p=yi(l),v=d-yo.thick,m=p-yo.thick,g=o(u).map(N=>-N),y=o(h).map(N=>-N),b=e.v(t(u,n,v),g,Nt.STRING,[f*n,0]),M=e.v(t(h,n,m),y,Nt.STRING,[l*n,0]),k=e.v(t(h,n,p+.06),y,Nt.STRING,[l*n,1]),z=e.v(t(u,n,d+.06),g,Nt.STRING,[f*n,1]);e.idx.push(b,M,k,b,k,z);for(let N=0;N<s.length-1;N++){let q=s[N],D=s[N+1],ne=O=>{let re=o(O);return[-re[0]*.12,-.99,-re[2]*.12]};e.quad(t(u,q,v),t(u,D,v),t(h,D,m),t(h,q,m),ne((u+h)/2),Nt.SOFFIT,[[f*q,q],[f*D,D],[l*D,D],[l*q,q]])}}}return e}function F4(){let e=mm(),t=yo.ri+.045,o=yo.n*yo.step,n=Math.ceil(o/(.8*Ao/180)),r=.92,a=(c,f,l)=>[ct.x+Math.cos(c)*f,l,ct.z+Math.sin(c)*f],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,u=br(f),h=br(l),d=yi(f)+.06,p=yi(l)+.06,v=i(u).map(N=>-N),m=i(h).map(N=>-N),g=f*t,y=l*t,b=e.v(a(u,t,d),v,Nt.RAILING,[g,0]),M=e.v(a(h,t,p),m,Nt.RAILING,[y,0]),k=e.v(a(h,t,p+r),m,Nt.RAILING,[y,r]),z=e.v(a(u,t,d+r),v,Nt.RAILING,[g,r]);e.idx.push(b,M,k,b,k,z)}((c,f,l,u)=>{let d=v=>{let m=br(v),g=yi(v)+.06+f,y=a(m,t+c,g),b=i(m),M=[];for(let k=0;k<8;k++){let z=k/8*2*Ao,N=[b[0]*Math.cos(z),Math.sin(z),b[2]*Math.cos(z)];M.push([[y[0]+N[0]*l,y[1]+N[1]*l,y[2]+N[2]*l],N])}return M},p=d(0);for(let v=1;v<=n;v++){let m=d(v/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(p[g][0],p[g][1],u),M=e.v(m[g][0],m[g][1],u),k=e.v(m[y][0],m[y][1],u),z=e.v(p[y][0],p[y][1],u);e.idx.push(b,M,k,b,k,z)}p=m}})(0,r+.02,.028,Nt.IRON);for(let c of Wu){let f=Math.atan2(c[2]-ct.z,c[0]-ct.x),l=[Math.cos(f),0,Math.sin(f)],u=12;for(let v=0;v<u;v++){let m=v/u*2*Ao,g=(v+1)/u*2*Ao,y=(b,M,k)=>[c[0]+Math.cos(b)*M,k,c[2]+Math.sin(b)*M];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Nt.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Nt.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],d=[-l[2],0,l[0]],p=.018;e.quad([h[0]-d[0]*p,h[1],h[2]-d[2]*p],[h[0]+d[0]*p,h[1],h[2]+d[2]*p],[c[0]+d[0]*p,c[1]-.05,c[2]+d[2]*p],[c[0]-d[0]*p,c[1]-.05,c[2]-d[2]*p],[-l[0],.5,-l[2]],Nt.IRON)}{let c=br(0),f=a(c,t,0),l=10;for(let u=0;u<l;u++){let h=u/l*2*Ao,d=(u+1)/l*2*Ao,p=(v,m,g)=>[f[0]+Math.cos(v)*m,g,f[2]+Math.sin(v)*m];e.quad(p(h,.035,0),p(d,.035,0),p(d,.035,r+.1),p(h,.035,r+.1),[Math.cos((h+d)/2),0,Math.sin((h+d)/2)],Nt.IRON),e.quad(p(h,.06,r+.1),p(d,.06,r+.1),p(d,.03,r+.2),p(h,.03,r+.2),[Math.cos((h+d)/2)*.8,.6,Math.sin((h+d)/2)*.8],Nt.IRON)}}return e}function $4(){let e=[],t=[],o=[],n=[];for(let a of Vu){let[i,s,c,f,l,u]=a,h=e.length/3;for(let p=0;p<=7;p++){let v=p/7*2*Ao+u,m=Math.cos(v),g=Math.sin(v);e.push(i+m*f,s,c+g*f,i+m*f,s+l,c+g*f),t.push(m,0,g,m,0,g),o.push(0,l,u,1,l,u)}for(let p=0;p<7;p++){let v=h+p*2;n.push(v,v+2,v+3,v,v+3,v+1)}let d=e.length/3;e.push(i,s+l-.006,c),t.push(0,1,0),o.push(2,l,u);for(let p=0;p<7;p++){let v=p/7*2*Ao+u;e.push(i+Math.cos(v)*f,s+l,c+Math.sin(v)*f),t.push(0,1,0),o.push(1,l,u)}for(let p=0;p<7;p++)n.push(d,d+1+p,d+1+(p+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function G4(){let e=[],t=[],o=[],n=[];for(let r of Vu){let[a,i,s,,c,f]=r,l=e.length/3;for(let u of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(u[0],u[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:e,corner:t,ph:o,idx:n}}function D4(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let f=new Int8Array(e,i,o*3);i+=o*3;let l=new Uint8Array(e,i,o),u=new Float32Array(o*3),h=new Float32Array(o*3),d=new Float32Array(o),p=Math.cos(Yo.yaw),v=Math.sin(Yo.yaw),m=Yo.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,M=(r[2]+s[g*3+2]/65535*a[2])*m;u[g*3]=Yo.x+p*y+v*M,u[g*3+1]=b,u[g*3+2]=Yo.z-v*y+p*M;let k=f[g*3]/127,z=f[g*3+1]/127,N=f[g*3+2]/127;h[g*3]=p*k+v*N,h[g*3+1]=z,h[g*3+2]=-v*k+p*N,d[g]=l[g]}return{pos:u,nrm:h,mat:d,idx:new Uint32Array(c)}}function q4(){let e=[],t=(u,h)=>[ct.x+Math.cos(u)*h,ct.z+Math.sin(u)*h];e.push([[0,Ue.z0],[xi(Ue.z0),Ue.z0]]),e.push([[xi(Ue.z1),Ue.z1],[0,Ue.z1]]);let o=Math.asin((Ue.z1-ct.z)/Dt),n=72;for(let u=0;u<n;u++){let h=o+u/n*(2*Ao-2*o),d=o+(u+1)/n*(2*Ao-2*o);e.push([t(h,Dt-.25),t(d,Dt-.25)])}let r=gf[0]-.55+.35;e.push([[r,dn.z0],[r,dn.z1]]);let a=2.4/yo.k,i=12;for(let u=0;u<i;u++){let h=br(u/i*a),d=br((u+1)/i*a);e.push([t(h,yo.ri-.2),t(d,yo.ri-.2)])}e.push([t(br(0),yo.ri-.2),t(br(0),Dt)]),e.push([t(br(a),yo.ri-.2),t(br(a),Dt)]);let s=Math.cos(Yo.yaw),c=Math.sin(Yo.yaw),f=Yo.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([u,h])=>[Yo.x+(s*u+c*h)*f,Yo.z+(-c*u+s*h)*f]);for(let u=0;u<4;u++)e.push([l[u],l[(u+1)%4]]);return e}zr.exports=e=>{let t=O4(),o=F4(),n=$4(),r=G4(),a=gi(),i=`
	precision highp float;
	${z4.GLSL}
	uniform float time;
	${vm()}
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
				float r = length(q - vec2(${Xo(ct.x)}, ${Xo(ct.z)}));
				float a = atan(q.y - ${Xo(ct.z)}, q.x - ${Xo(ct.x)});
				float ring = floor(r / 0.9);
				float cnt = max(1.0, floor(6.2831 * (ring + 0.5) * 0.9 / 0.95));
				float seg = a / 6.2831 * cnt + hash(vec2(ring, 3.0)) * 7.0;
				float jr = abs(fract(r / 0.9) - 0.5), ja = abs(fract(seg) - 0.5);
				float joint = smoothstep(0.485, 0.497, max(jr, ja * (r < 0.5 ? 0.0 : 1.0)));
				if (v_pos.x > ${Xo(ct.x+Dt-.4)}) {
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Xo(Yn)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Xo(ct.x)}, ${Xo(ct.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Xo((yo.ri+yo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Xo(ct.x)}, ${Xo(ct.z)});
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let d=(()=>{let m=[],g=[],y=[],b=[],k=[ct.x,Yn-.3,ct.z],z=[Oc.stoolX,.02,Oc.keyFront+.1],N=1.25,q=2.35;for(let D=0;D<=40;D++){let ne=D/40*2*Ao,O=Math.cos(ne),re=Math.sin(ne);m.push(k[0]+O*N,k[1],k[2]+re*N,z[0]+O*q,z[1],z[2]+re*q),g.push(O,.08,re,O,.08,re),y.push(1,0)}for(let D=0;D<40;D++){let ne=D*2;b.push(ne,ne+1,ne+3,ne,ne+3,ne+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),p=e({vert:`
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
		}`,attributes:{position:d.pos,normal:d.nrm,hh:d.hh},elements:d.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function v(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(p(),u({halo:1}),u({halo:0}))}return v};zr.exports.C=ct;zr.exports.R=Dt;zr.exports.PASS=Ue;zr.exports.SURR=Oa;zr.exports.OFF=gf;zr.exports.BAY=dn;zr.exports.PATH=mf;zr.exports.PIANO=Yo;zr.exports.PLAY=Oc;zr.exports.TOP=Yn;zr.exports.roomGLSL=vm;zr.exports.segments=q4});var Sm=ve((Yk,km)=>{"use strict";var H4=n0(),{addFlutedColumn:gm,addStatue:j4,addPlant:B4}=Uv(),xm=pi(),U4=fs(),_a=er(),W4=ta(),ys=bi(),co=14,vn=_a.C.hallEnd+.35,Po=8,wo=.35,Xu=1.15,Yu=1.15,Ku=[18,29,40],V4=[[[0,0],[0,ys.PASS.z0]],[[0,ys.PASS.z1],[0,vn]],[[co,vn],[co,0]],[[0,0],[co,0]],[[co,vn],[0,vn]]],_m=[];for(let e of Ku)for(let t of[1.25,co-1.25]){let o=Xu/2,n=Yu/2;_m.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var yf=12,Mm=2.95,Em=.62,_f=Mm+Em,bf=[{file:"venus.bin",x:1.85,z:vn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:co-2.1,z:vn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:_a.NICHE_X[0],z:_a.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:_a.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:_a.NICHE_X[1],z:_a.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:_a.NICHE_PLINTH_TOP,mat:3}],X4={x0:wo,x1:3.15,z0:3.6,z1:8.2,top:1},ym=.8,Mf=1.17,Fc=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{Fc.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),Fc.push({x:co-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function Qu(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var Ef=[];for(let e of[-1,1])Ef.push(...Qu(co/2+e*_f,yf,.85,.85));for(let e of bf.filter(t=>t.pedestal))Ef.push(...Qu(e.x,e.z,Mf*1.1,Mf*1.1));for(let e of Fc)Ef.push(...Qu(e.x,e.z,.42,.42));var Y4=V4.concat(_m,Ef,ys.segments());function K4(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=i;f++)for(let l=s;l<=c;l++)n(f,l,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let u=o.get(i+f+":"+(s+l));u&&c.push(...u)}return[...new Set(c)]}}}var wf=[],pn={curMat:[0,0,0]};function Zu(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=pn.curMat;return wf.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function bo(e,t,o,n,r,a,i,s,c){let f=(l,u,h,d,p)=>{o.push(...Zu(e,t,l,u,h,d,p))};f([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),f([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function xs(e,t,o,n,r){let a=pn,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(i,s,c),a.tri(s,f,c)}function bm(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=Math.cos(c),u=Math.sin(c),h=Math.cos(f),d=Math.sin(f),p=[e+o*l,t+o*u],v=[e+o*h,t+o*d],m=[e+n*l,t+n*u],g=[e+n*h,t+n*d];xs([p[0],p[1],r],[v[0],v[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),xs([p[0],p[1],a],[v[0],v[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;xs([p[0],p[1],r],[v[0],v[1],r],[p[0],p[1],a],[v[0],v[1],a],[-Math.cos(y),-Math.sin(y),0]),xs([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function Q4(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=e+o*Math.cos(c),u=t+o*Math.sin(c),h=e+o*Math.cos(f),d=t+o*Math.sin(f);xs([l,u,r],[h,d,r],[l,n,r],[h,n,r],[0,0,-1]),xs([l,u,a],[h,d,a],[l,n,a],[h,n,a],[0,0,1])}}function Z4(e,t,o,n){let r=co/2,a=Mm,i=3,s=a+.42,c=s+.15,f=Em,l=_f,u=5.98,h=n-.45,d=n+.45,p=64,v=gm(pn,r-l,n,0,u,f);gm(pn,r+l,n,0,u,f),pn.curMat=[0,0,0],bm(r,i,a,s,h,d,p),bm(r,i,s,c,h-.07,d+.07,p),Q4(r,i,c,v+.05,h,d,p);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;bo(e,t,o,Math.min(y,b),i,h,Math.max(y,b),v+.05,d)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);bo(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=l+f*1.42+.45;bo(e,t,o,r-m,v,n-.7,r+m,v+.44,n+.7),bo(e,t,o,r-m+.12,v+.44,n-.62,r+m-.12,v+.7,n+.62),bo(e,t,o,r-m-.1,v+.7,n-.84,r+m+.1,v+.84,n+.84),bo(e,t,o,r-m-.22,v+.84,n-.96,r+m+.22,v+1,n+.96),bo(e,t,o,r-.3,i+a-.1,n-.56,r+.3,v,n+.56)}function wm(e,t,o,n,r){bo(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),bo(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),bo(e,t,o,n-Xu/2,.4,r-Yu/2,n+Xu/2,Po-1.35,r+Yu/2),bo(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),bo(e,t,o,n-.67,Po-1.58,r-.67,n+.67,Po-1.35,r+.67),bo(e,t,o,n-.82,Po-1.35,r-.82,n+.82,Po-1.05,r+.82),bo(e,t,o,n-.66,Po-1.05,r-.66,n+.66,Po-.78,r+.66),bo(e,t,o,n-.92,Po-.78,r-.92,n+.92,Po-.55,r+.92),bo(e,t,o,n-.78,Po-.55,r-.78,n+.78,Po-.3,r+.78),bo(e,t,o,n-.92,Po-.3,r-.92,n+.92,Po-.1,r+.92)}function xf(e,t,o,n,r){r==="left"?(bo(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),bo(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(bo(e,t,o,co-.14,1,n-3.8/2,co+.08,5.7,n+3.8/2),bo(e,t,o,co-.18,1+.18,n-3.8/2+.18,co+.08+.04,5.7-.18,n+3.8/2-.18))}function J4(e,t,o,n){bo(e,t,o,.65,Po-.16,n-1.65,.65+.22,Po,n+1.65),bo(e,t,o,co-.65-.22,Po-.16,n-1.65,co-.65,Po,n+1.65),bo(e,t,o,.65,Po-.16,n-1.65,co-.65,Po,n-1.43),bo(e,t,o,.65,Po-.16,n+1.43,co-.65,Po,n+1.65),o.push(...Zu(e,t,[.65+.22,Po-.16,n-1.43],[co-.65-.22,Po-.16,n-1.43],[.65+.22,Po-.16,n+1.43],[co-.65-.22,Po-.16,n+1.43],[0,-1,0]))}km.exports=function(){let e=[],t=[],o=[];wf=[],pn=H4.createBuilder(e,t,o,wf),o.push(...Zu(e,t,[0,0,0],[co,0,0],[0,0,vn],[co,0,vn],[0,1,0])),U4.addSkylight(pn,[0,0,0],vn),pn.curMat=[0,0,0];{let c=ys.SURR;bo(e,t,o,-wo,0,0,wo,Po,c.z0),bo(e,t,o,-wo,0,c.z1,wo,Po,vn),bo(e,t,o,-wo,c.top,c.z0,wo,Po,c.z1)}bo(e,t,o,co-wo,0,_a.C.z1,co+wo,Po,vn-wo),bo(e,t,o,co-wo-.12,0,_a.C.z1+2*wo,co-wo,.42,vn-wo),bo(e,t,o,co-wo-.07,.42,_a.C.z1+2*wo,co-wo,.5,vn-wo);for(let[c,f]of[[0,ys.SURR.z0],[ys.SURR.z1,vn-wo]])bo(e,t,o,wo,0,c,wo+.12,.42,f),bo(e,t,o,wo,.42,c,wo+.07,.5,f);bo(e,t,o,wo,0,vn-wo-.12,co-wo,.42,vn-wo),bo(e,t,o,wo,.42,vn-wo-.07,co-wo,.5,vn-wo),xm.addEntranceWall(pn),xm.addFrames(pn),pn.curMat=[0,0,0],bo(e,t,o,-wo,0,vn-wo,co+wo,Po,vn+wo),Z4(e,t,o,yf);for(let c of Ku)wm(e,t,o,1.25,c),wm(e,t,o,co-1.25,c);xf(e,t,o,22,"left"),xf(e,t,o,25,"right"),xf(e,t,o,33,"left"),xf(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)J4(e,t,o,c);_a.addWing(pn),pn.curMat=[0,0,0];for(let c of bf.filter(f=>f.pedestal))j4(pn,c.x,c.z,Mf,ym);{let c=X4;pn.curMat=[0,0,0],pn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),pn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),pn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),pn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}W4.addAlcove(pn);for(let c of Fc)B4(pn,c.x,c.z,c.seed,1,c.away);pn.curMat=[0,0,0];let r=[[[co,vn-.35],[0,vn-.35]],[[0,3],[0,10]],[[co,15],[co,22]],[[0,24],[0,31]],[[co,33],[co,40]],[[0,41],[0,46]]],a=K4(Y4),i=(c,f)=>{let l=0,u=1/0;return r.forEach((h,d)=>{let p=(h[0][0]+h[1][0])/2,v=(h[0][1]+h[1][1])/2,m=Math.hypot(c-p,f-v);m<u&&(u=m,l=d)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:bf,occluders:[...Ku.flatMap(c=>[[1.25,c,.78],[co-1.25,c,.78]]),[co/2-_f,yf,.86],[co/2+_f,yf,.86],...bf.filter(c=>c.pedestal).map(c=>[c.x,c.z,Mf*1.12]),...Fc.map(c=>[c.x,c.z,.34])],pedestalTop:ym,mat:wf,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:o}}});var Ju=ve((Kk,Am)=>{"use strict";var{doorLightGLSL:e_}=pi(),{skylightGLSL:t_}=fs(),{windowLightGLSL:o_,C:Gr}=er(),{alcoveLightGLSL:n_}=ta(),oa=e=>e.toFixed(4),r_=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();Am.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([d,p,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${d.toFixed(3)}, ${p.toFixed(3)}), ${v.toFixed(3)}));`).join(`
      `),i={c:[0,0,0,0],d:[1,0,0,0]},s=-1,c=[],f=d=>{let p=d&&d.tick!==void 0?d.tick:0;if(p!==s||c.length===0){s=p;let v=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-v[0],m.c[2]-v[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(i)}return c},l={},u="",h="";for(let d=0;d<8;d++)l["lightC"+d]=p=>f(p)[d].c,l["lightD"+d]=p=>f(p)[d].d,u+="uniform vec4 lightC"+d+", lightD"+d+`;
`,h+="pic += pictureLight(lightC"+d+", lightD"+d+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${gi().lanternGLSL()}

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
        step(abs(v_pos.z - ${oa(Gr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${oa((Gr.z0+Gr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${oa(Gr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
        if (v_pos.x < 14.0) wallD = min(wallD, ${oa(Gr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${oa(Gr.z0)} || v_pos.z > ${oa(Gr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${oa(Gr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${oa(Gr.z0)}), ${oa(Gr.z1)} - v_pos.z), ${oa(Gr.x1)} - v_pos.x);
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
        if (v_pos.z < ${oa(Gr.z0+.3)} && v_pos.x > ${oa(Gr.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var Lm=ve((Qk,Tm)=>{"strict mode";var a_="https://api.artic.edu/api/v1/artworks/search",i_=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,s_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",c_="&fields=image_id,title,artist_title",l_={low:400,mid:843,high:1686};Tm.exports={fetchList:async function(e,t){let o=a_+s_+c_+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=i_(e,l_[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var Rm=ve((Zk,Nm)=>{"use strict";var f_=wu(),h_=Zr(),u_=e=>"images/web/"+e.slug+(h_.isPhone?"-1024":"")+".webp";async function zm(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Nm.exports={fetchList:async function(e,t){return f_.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await zm(u_(e))}catch(o){t=await zm("images/"+e.file)}return{title:e.title,image:t}}}});var Pm=ve((Jk,Cm)=>{"strict mode";Cm.exports={default:"local",artic:Lm(),local:Rm()}});var t1=ve((eS,Om)=>{"strict mode";var c0=document.createElement("canvas"),e1=c0.width=c0.height=1024,wi=c0.getContext("2d");wi.mozImageSmoothingEnabled=!1;wi.webkitImageSmoothingEnabled=!1;wi.font="32px Verdana";wi.textBaseline="bottom";wi.fillStyle="#aaa";function Im(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(r).width>o&&f>1;){f--,r=a="";for(var u=0;u<l;u++)u<f?(r+=c[u],u+1<f&&(r+=" ")):(a+=c[u],u+1<l&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=Im(e,a,o,n),i>s&&(s=i)),s}Om.exports={init(e,t,o=e1){var n=[];Im(wi,t,Math.min(o*e1,e1),n),wi.clearRect(0,0,c0.width,c0.height);for(var r=0;r<n.length;r++)wi.fillText(n[r],0,c0.height-(Math.max(n.length,3)-r)*32);return e({data:c0,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var Gm=ve((tS,$m)=>{"strict mode";var o1=Pm(),d_=new URLSearchParams(window.location.search).get("api"),Fm=o1[d_]||o1[o1.default],p_=t1(),n1={},ws=[],v_=2;function m_(e){return(!navigator.connection||navigator.connection.downlink<v_)&&(e=e=="high"?"mid":"low"),e}var g_=Zr(),bs=document.createElement("canvas");bs.width=bs.height=g_.isPhone?1024:2048;var i1=bs.getContext("2d");i1.imageSmoothingEnabled=!0;i1.imageSmoothingQuality="high";var r1=!1,x_=e=>[(ws.pop()||e.texture)([[[200,200,200]]]),t=>(ws.pop()||e.texture)([[[0,0,0,0]]]),1];async function a1(e,t,o){r1===!1&&(r1=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await Fm.fetchImage(t,m_(o));r=a.title,n=await createImageBitmap(a.image),i1.drawImage(n,0,0,bs.width,bs.height)}catch(a){return console.error(a),o=="high"?await a1(e,t,"low"):x_(e)}return[(ws.pop()||e.texture)({data:bs,min:"mipmap",mipmap:"nice",aniso:r1,flipY:!0}),a=>p_.init(ws.pop()||e.texture,r,a),n.width/n.height]}$m.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(n1).length;Fm.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(n1[s.image_id]){--t===0&&r();return}n1[s.image_id]=s,a1(e,s,o).then(([c,f,l])=>{n({...s,tex:c,textGen:f,aspect:l}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,a1(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(ws.push(e.tex),e.tex=void 0),e.text&&(ws.push(e.text),e.text=void 0)}}});var qm=ve((oS,Dm)=>{Dm.exports=y_;function y_(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var jm=ve((nS,Hm)=>{Hm.exports=b_;function b_(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Um=ve((rS,Bm)=>{Bm.exports=w_;function w_(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var s1=ve((aS,Wm)=>{Wm.exports=__;function __(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Xm=ve((iS,Vm)=>{Vm.exports=M_;function M_(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var Km=ve((sS,Ym)=>{Ym.exports=E_;function E_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,M=o*f-a*i,k=n*c-r*s,z=n*f-a*s,N=r*f-a*c,q=l*v-u*p,D=l*m-h*p,ne=l*g-d*p,O=u*m-h*v,re=u*g-d*v,J=h*g-d*m,ee=y*J-b*re+M*O+k*ne-z*D+N*q;return ee?(ee=1/ee,e[0]=(s*J-c*re+f*O)*ee,e[1]=(r*re-n*J-a*O)*ee,e[2]=(v*N-m*z+g*k)*ee,e[3]=(h*z-u*N-d*k)*ee,e[4]=(c*ne-i*J-f*D)*ee,e[5]=(o*J-r*ne+a*D)*ee,e[6]=(m*M-p*N-g*b)*ee,e[7]=(l*N-h*M+d*b)*ee,e[8]=(i*re-s*ne+f*q)*ee,e[9]=(n*ne-o*re-a*q)*ee,e[10]=(p*z-v*M+g*y)*ee,e[11]=(u*M-l*z-d*y)*ee,e[12]=(s*D-i*O-c*q)*ee,e[13]=(o*O-n*D+r*q)*ee,e[14]=(v*b-p*k-m*y)*ee,e[15]=(l*k-u*b+h*y)*ee,e):null}});var Zm=ve((cS,Qm)=>{Qm.exports=k_;function k_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-d*m)-u*(c*g-f*m)+v*(c*d-f*h),e[1]=-(n*(h*g-d*m)-u*(r*g-a*m)+v*(r*d-a*h)),e[2]=n*(c*g-f*m)-s*(r*g-a*m)+v*(r*f-a*c),e[3]=-(n*(c*d-f*h)-s*(r*d-a*h)+u*(r*f-a*c)),e[4]=-(i*(h*g-d*m)-l*(c*g-f*m)+p*(c*d-f*h)),e[5]=o*(h*g-d*m)-l*(r*g-a*m)+p*(r*d-a*h),e[6]=-(o*(c*g-f*m)-i*(r*g-a*m)+p*(r*f-a*c)),e[7]=o*(c*d-f*h)-i*(r*d-a*h)+l*(r*f-a*c),e[8]=i*(u*g-d*v)-l*(s*g-f*v)+p*(s*d-f*u),e[9]=-(o*(u*g-d*v)-l*(n*g-a*v)+p*(n*d-a*u)),e[10]=o*(s*g-f*v)-i*(n*g-a*v)+p*(n*f-a*s),e[11]=-(o*(s*d-f*u)-i*(n*d-a*u)+l*(n*f-a*s)),e[12]=-(i*(u*m-h*v)-l*(s*m-c*v)+p*(s*h-c*u)),e[13]=o*(u*m-h*v)-l*(n*m-r*v)+p*(n*h-r*u),e[14]=-(o*(s*m-c*v)-i*(n*m-r*v)+p*(n*c-r*s)),e[15]=o*(s*h-c*u)-i*(n*h-r*u)+l*(n*c-r*s),e}});var e2=ve((lS,Jm)=>{Jm.exports=S_;function S_(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],l=e[9],u=e[10],h=e[11],d=e[12],p=e[13],v=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,M=o*s-n*i,k=o*c-r*i,z=n*c-r*s,N=f*p-l*d,q=f*v-u*d,D=f*m-h*d,ne=l*v-u*p,O=l*m-h*p,re=u*m-h*v;return g*re-y*O+b*ne+M*D-k*q+z*N}});var o2=ve((fS,t2)=>{t2.exports=A_;function A_(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],v=t[12],m=t[13],g=t[14],y=t[15],b=o[0],M=o[1],k=o[2],z=o[3];return e[0]=b*n+M*s+k*u+z*v,e[1]=b*r+M*c+k*h+z*m,e[2]=b*a+M*f+k*d+z*g,e[3]=b*i+M*l+k*p+z*y,b=o[4],M=o[5],k=o[6],z=o[7],e[4]=b*n+M*s+k*u+z*v,e[5]=b*r+M*c+k*h+z*m,e[6]=b*a+M*f+k*d+z*g,e[7]=b*i+M*l+k*p+z*y,b=o[8],M=o[9],k=o[10],z=o[11],e[8]=b*n+M*s+k*u+z*v,e[9]=b*r+M*c+k*h+z*m,e[10]=b*a+M*f+k*d+z*g,e[11]=b*i+M*l+k*p+z*y,b=o[12],M=o[13],k=o[14],z=o[15],e[12]=b*n+M*s+k*u+z*v,e[13]=b*r+M*c+k*h+z*m,e[14]=b*a+M*f+k*d+z*g,e[15]=b*i+M*l+k*p+z*y,e}});var r2=ve((hS,n2)=>{n2.exports=T_;function T_(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,f,l,u,h,d,p,v,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],l=t[4],u=t[5],h=t[6],d=t[7],p=t[8],v=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=l,e[5]=u,e[6]=h,e[7]=d,e[8]=p,e[9]=v,e[10]=m,e[11]=g,e[12]=i*n+l*r+p*a+t[12],e[13]=s*n+u*r+v*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=f*n+d*r+g*a+t[15]),e}});var i2=ve((uS,a2)=>{a2.exports=L_;function L_(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var c2=ve((dS,s2)=>{s2.exports=z_;function z_(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,f,l,u,h,d,p,v,m,g,y,b,M,k,z,N,q,D,ne,O,re,J,ee,Qe;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),f=Math.cos(o),l=1-f,u=t[0],h=t[1],d=t[2],p=t[3],v=t[4],m=t[5],g=t[6],y=t[7],b=t[8],M=t[9],k=t[10],z=t[11],N=r*r*l+f,q=a*r*l+i*c,D=i*r*l-a*c,ne=r*a*l-i*c,O=a*a*l+f,re=i*a*l+r*c,J=r*i*l+a*c,ee=a*i*l-r*c,Qe=i*i*l+f,e[0]=u*N+v*q+b*D,e[1]=h*N+m*q+M*D,e[2]=d*N+g*q+k*D,e[3]=p*N+y*q+z*D,e[4]=u*ne+v*O+b*re,e[5]=h*ne+m*O+M*re,e[6]=d*ne+g*O+k*re,e[7]=p*ne+y*O+z*re,e[8]=u*J+v*ee+b*Qe,e[9]=h*J+m*ee+M*Qe,e[10]=d*J+g*ee+k*Qe,e[11]=p*J+y*ee+z*Qe,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var f2=ve((pS,l2)=>{l2.exports=N_;function N_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],l=t[9],u=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+f*n,e[5]=i*r+l*n,e[6]=s*r+u*n,e[7]=c*r+h*n,e[8]=f*r-a*n,e[9]=l*r-i*n,e[10]=u*r-s*n,e[11]=h*r-c*n,e}});var u2=ve((vS,h2)=>{h2.exports=R_;function R_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],l=t[9],u=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-f*n,e[1]=i*r-l*n,e[2]=s*r-u*n,e[3]=c*r-h*n,e[8]=a*n+f*r,e[9]=i*n+l*r,e[10]=s*n+u*r,e[11]=c*n+h*r,e}});var p2=ve((mS,d2)=>{d2.exports=C_;function C_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],l=t[5],u=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+f*n,e[1]=i*r+l*n,e[2]=s*r+u*n,e[3]=c*r+h*n,e[4]=f*r-a*n,e[5]=l*r-i*n,e[6]=u*r-s*n,e[7]=h*r-c*n,e}});var m2=ve((gS,v2)=>{v2.exports=P_;function P_(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var x2=ve((xS,g2)=>{g2.exports=I_;function I_(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,f=a+a,l=n*s,u=n*c,h=n*f,d=r*c,p=r*f,v=a*f,m=i*s,g=i*c,y=i*f;return e[0]=1-(d+v),e[1]=u+y,e[2]=h-g,e[3]=0,e[4]=u-y,e[5]=1-(l+v),e[6]=p+m,e[7]=0,e[8]=h+g,e[9]=p-m,e[10]=1-(l+d),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var b2=ve((yS,y2)=>{y2.exports=O_;function O_(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var _2=ve((bS,w2)=>{w2.exports=F_;function F_(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var E2=ve((wS,M2)=>{M2.exports=$_;function $_(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var S2=ve((_S,k2)=>{k2.exports=G_;function G_(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var T2=ve((MS,A2)=>{A2.exports=D_;function D_(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var z2=ve((ES,L2)=>{L2.exports=q_;function q_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,f=o*i,l=n*i,u=n*s,h=r*i,d=r*s,p=r*c,v=a*i,m=a*s,g=a*c;return e[0]=1-u-p,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-p,e[6]=d+v,e[7]=0,e[8]=h+m,e[9]=d-v,e[10]=1-f-u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var R2=ve((kS,N2)=>{N2.exports=H_;function H_(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var P2=ve((SS,C2)=>{C2.exports=j_;function j_(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var O2=ve((AS,I2)=>{I2.exports=B_;function B_(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*f*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var $2=ve((TS,F2)=>{F2.exports=U_;function U_(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var D2=ve((LS,G2)=>{var W_=s1();G2.exports=V_;function V_(e,t,o,n){var r,a,i,s,c,f,l,u,h,d,p=t[0],v=t[1],m=t[2],g=n[0],y=n[1],b=n[2],M=o[0],k=o[1],z=o[2];return Math.abs(p-M)<1e-6&&Math.abs(v-k)<1e-6&&Math.abs(m-z)<1e-6?W_(e):(l=p-M,u=v-k,h=m-z,d=1/Math.sqrt(l*l+u*u+h*h),l*=d,u*=d,h*=d,r=y*h-b*u,a=b*l-g*h,i=g*u-y*l,d=Math.sqrt(r*r+a*a+i*i),d?(d=1/d,r*=d,a*=d,i*=d):(r=0,a=0,i=0),s=u*i-h*a,c=h*r-l*i,f=l*a-u*r,d=Math.sqrt(s*s+c*c+f*f),d?(d=1/d,s*=d,c*=d,f*=d):(s=0,c=0,f=0),e[0]=r,e[1]=s,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=u,e[7]=0,e[8]=i,e[9]=f,e[10]=h,e[11]=0,e[12]=-(r*p+a*v+i*m),e[13]=-(s*p+c*v+f*m),e[14]=-(l*p+u*v+h*m),e[15]=1,e)}});var H2=ve((zS,q2)=>{q2.exports=X_;function X_(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var _s=ve((NS,j2)=>{j2.exports={create:qm(),clone:jm(),copy:Um(),identity:s1(),transpose:Xm(),invert:Km(),adjoint:Zm(),determinant:e2(),multiply:o2(),translate:r2(),scale:i2(),rotate:c2(),rotateX:f2(),rotateY:u2(),rotateZ:p2(),fromRotation:m2(),fromRotationTranslation:x2(),fromScaling:b2(),fromTranslation:_2(),fromXRotation:E2(),fromYRotation:S2(),fromZRotation:T2(),fromQuat:z2(),frustum:R2(),perspective:P2(),perspectiveFromFieldOfView:O2(),ortho:$2(),lookAt:D2(),str:H2()}});var W2=ve((RS,U2)=>{"use strict";var B2=Gm(),an=_s(),l0=er(),Y_=3e3,kf="high",c1,Gc=.36,Dc=13.64,Ms=l0.C.hallEnd-.01,qc=l0.C.z0+.01,K_=.356,Q_=13.644,Z_=l0.C.hallEnd-.006,J_=l0.C.z0+.006,e6=.12,Af=4,Es=e=>or[e]&&or[e].cy||Af,l1=.26,t6=5.6,o6=7,or=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Ms},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:l0.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:l0.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:l0.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function n6(e,t){let o=t&&t.maxH||t6,n=t&&t.maxW||o6,r=Math.min(o,n/e);return{width:r*e,height:r}}function r6(e,t,o){let n=or[o],r=[],a=Es(o)-t/2;return n.side==="left"?(an.fromTranslation(r,[Gc,a,n.z+e/2]),an.rotateY(r,r,Math.PI/2)):n.side==="right"?(an.fromTranslation(r,[Dc,a,n.z-e/2]),an.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?an.fromTranslation(r,[n.x-e/2,a,qc]):(an.fromTranslation(r,[7+e/2,a,Ms]),an.rotateY(r,r,Math.PI)),an.scale(r,r,[e,t,e6]),r}function a6(e,t,o){let n=or[o],r=[],a=Es(o)-t/2;return n.side==="left"?(an.fromTranslation(r,[Gc,a,n.z+e/2]),an.rotateY(r,r,Math.PI/2)):n.side==="right"?(an.fromTranslation(r,[Dc,a,n.z-e/2]),an.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?an.fromTranslation(r,[n.x-e/2,a,qc]):(an.fromTranslation(r,[7+e/2,a,Ms]),an.rotateY(r,r,Math.PI)),r}function i6(e,t,o){let n=or[o],r=[],a=Es(o)-t/2-l1-.38;return n.side==="left"?(an.fromTranslation(r,[K_,a,n.z+e/2]),an.rotateY(r,r,Math.PI/2)):n.side==="right"?(an.fromTranslation(r,[Q_,a,n.z-e/2]),an.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?an.fromTranslation(r,[n.x-e/2,a,J_]):(an.fromTranslation(r,[7+e/2,a,Z_]),an.rotateY(r,r,Math.PI)),an.scale(r,r,[2,2,2]),r}function s6(e,t,o){let n=or[o],r=Es(o)-t/2-l1-.38;return n.side==="left"?[Gc+.55,r,n.z]:n.side==="right"?[Dc-.55,r,n.z]:n.side==="corridor"?[n.x,r,qc+.55]:[7,r,Ms-.55]}var $c=.42;function Sf(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function c6(e,t,o){let n=or[o],r,a,i;n.side==="left"?(r=[Gc,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[Dc,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,qc],a=[1,0,0],i=[0,0,1]):(r=[7,Ms],a=[1,0,0],i=[0,0,-1]);let s=Es(o)+t/2+l1+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(d,p)=>[r[0]+i[0]*d,p,r[1]+i[2]*d],l=[.075,.062,.05],u=[{fixmodel:Sf(f(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Sf(f($c/2,s),a,i,.02,.02,$c),fixcol:l,fixglow:0},{fixmodel:Sf(f($c,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Sf(f($c-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f($c,s-.02);return{fixtures:u,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}U2.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!or[i])return;let{width:s,height:c}=n6(a.aspect,or[i]),f=c6(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),o.push({...a,fixtures:f.fixtures,side:or[i].side,model:r6(s,c,i),framemodel:a6(s,c,i),framesize:[s,c],textmodel:i6(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:s6(s,c,i),paintingPosition:or[i].side==="left"?[Gc+.05,Af,or[i].z]:or[i].side==="right"?[Dc-.05,Af,or[i].z]:or[i].side==="corridor"?[or[i].x,Es(i),qc+.05]:[7,Af,Ms-.05],textGen:null})};return B2.fetch(e,or.length,kf,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{B2.load(e,a,kf)}),kf="low",c1&&clearTimeout(c1),c1=setTimeout(()=>{kf="high"},Y_)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var K2=ve((CS,Y2)=>{"use strict";var l6=t1(),V2=Zr(),X2=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function f6(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];X2.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<X2.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(i,s,f,i,f,c)}return{verts:t,elems:o}}var h6=`#extension GL_OES_standard_derivatives : enable
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
}`;Y2.exports=e=>{let t=l6.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${gi().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(V2.isPhone?1024:2048),detail:()=>V2.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=f6(),r=e({frag:h6,vert:u6,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Nf=ve((PS,og)=>{"use strict";var{A:Kn}=ta(),{C:Mn}=er(),{DOOR:ks}=pi(),Dn=bi(),J2=Mn.hallEnd+.35,eg={arch:[13.6,0,Kn.zc-Kn.arch.r-.3,14.4,Kn.arch.spring+Kn.arch.r+.3,Kn.zc+Kn.arch.r+.3],mouth:[13.3,0,Mn.z0-.3,14.3,8.2,Mn.z1+.3],stair:[-.5,0,Dn.SURR.z0-.2,.5,Dn.SURR.top+.3,Dn.SURR.z1+.2],door:[ks.x0-.4,0,-.5,ks.x1+.4,ks.top+.4,.5],windows:[15.6,.4,Mn.z1-.2,36.9,6.4,Mn.z1+.9],farDoor:[Mn.x1-.2,0,Mn.zc-ks.r-.4,Mn.x1+.9,ks.top+.4,Mn.zc+ks.r+.4]},ti={court:[Kn.x0-.4,0,Kn.z0-.3,Kn.x1+.3,Kn.domeTop+.5,Kn.z1+.3],stair:[Dn.C.x-Dn.R-2.6,0,Dn.C.z-Dn.R-1.5,.5,15.6,Dn.C.z+Dn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Mn.z1,46,60,Mn.z1+110],florence:[Mn.x1,-1,Mn.zc-30,Mn.x1+80,60,Mn.zc+30]},d6=[[0,0,0,14,0,J2],[13.6,0,Mn.z0,Mn.x1+.4,0,Mn.z1],[Kn.x0-.4,0,Kn.z0,Kn.x1,0,Kn.z1],[Dn.C.x-Dn.R-2.6,0,Dn.C.z-Dn.R,.4,0,Dn.C.z+Dn.R]],p6={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Hc=new Float64Array(24),Ma=[7,2,2],tg=0,f0="out",zf=!0;try{/[?&]nocull\b/.test(location.search)&&(zf=!1)}catch(e){}var Tf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},Lf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},Q2=!0;function v6(e){let t=s=>[e[s],e[4+s],e[8+s],e[12+s]],o=t(0),n=t(1),r=t(2),a=t(3),i=(s,c,f,l)=>{for(let u=0;u<4;u++)Hc[s*4+u]=c[u]+f*l[u]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function _i(e,t){if(!zf)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=Hc[r*4],i=Hc[r*4+1],s=Hc[r*4+2],c=Hc[r*4+3],f=a>0?e[3]:e[0],l=i>0?n:o,u=s>0?e[5]:e[2];if(a*f+i*l+s*u+c<0)return!1}return!0}var f1=(e,t)=>Ma[0]>e[0]-t&&Ma[0]<e[3]+t&&Ma[2]>e[2]-t&&Ma[2]<e[5]+t;function m6(e){if(f1(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-Ma[0],a=(n&2?e[5]:e[2])-Ma[2],i=Math.atan2(r,a)-tg;i-=Math.round(i/(2*Math.PI))*2*Math.PI,t=Math.min(t,i),o=Math.max(o,i)}return o-t>Math.PI?null:[t,o]}function Z2(e,t,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=m6(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of e){let s=eg[i];if(!f1(s,.6)&&(!_i(s,o)||!a(s)))return!1}return _i(t,o)&&a(t)}function g6(){let e=Ma[0],t=Ma[2];return e<0&&t>Dn.C.z-Dn.R-1.5&&e>Dn.C.x-Dn.R-2.6?"stair":e>14.1&&t>Kn.z0-.3&&t<Kn.z1+.3&&e<Kn.x1+.3?"court":e>13.9&&t>Mn.z0-.4&&t<Mn.z1+.1&&e<Mn.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<J2?"hall":"out"}var x6={PORTAL:eg,ROOM:ti,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*e[r*4+s];n[r*4+a]=i}v6(n),Ma[0]=o[0],Ma[1]=o[1],Ma[2]=o[2],tg=Math.atan2(-e[2],-e[10]),f0=g6();for(let r in ti)if(!zf||f0==="out"||f0===r||f1(ti[r],.3))Tf[r]=_i(ti[r],!1)||f0===r,Lf[r]=_i(ti[r],!0)||f0===r;else{let a=p6[f0][r];Tf[r]=a?Z2(a,ti[r],!1):_i(ti[r],!1),Lf[r]=a?Z2(a,ti[r],!0):_i(ti[r],!0)}Q2=!zf||d6.some(r=>_i(r,!1))},get zone(){return f0},room(e,t){return t?Lf[e]:Tf[e]},box(e,t,o){return o&&!(t?Lf[o]:Tf[o])?!1:_i(e,t)},get floor(){return Q2}};og.exports=x6});var rg=ve((IS,ng)=>{"use strict";var y6=Ju(),b6=Nf();function w6(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let u=0;u<3;u++)a.push(t.getFloat32(12+u*4,!0)),i.push(t.getFloat32(24+u*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,r);s+=r*2;let l=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:f,nrm:l}}ng.exports=(e,t)=>{let o=[],n=[],r=[],a=[],i=null,s=t.statues.length,c=[],f=(u,h)=>{let d=o.length/3,p=h.height*.75,v=h.base!==void 0?h.base:t.pedestalTop;c.push({offset:a.length,count:u.nI,box:[h.x-p,v-.1,h.z-p,h.x+p,v+h.height+.2,h.z+p]});let m=h.height,g=Math.cos(h.yaw),y=Math.sin(h.yaw),b=h.base!==void 0?h.base:t.pedestalTop;for(let M=0;M<u.nV;M++){let k=(u.mn[0]+u.pos[M*3]/65535*u.sz[0])*m,z=(u.mn[1]+u.pos[M*3+1]/65535*u.sz[1])*m,N=(u.mn[2]+u.pos[M*3+2]/65535*u.sz[2])*m;o.push(h.x+g*k+y*N,b+z,h.z-y*k+g*N);let q=u.nrm[M*3]/127,D=u.nrm[M*3+1]/127,ne=u.nrm[M*3+2]/127;n.push(g*q+y*ne,D,-y*q+g*ne),r.push(h.mat||1,0,0)}for(let M=0;M<u.nI;M++)a.push(d+u.idx[M])},l=()=>{a.length!==0&&(i=y6(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1,!0))};return t.statues.forEach(u=>{fetch("res/"+u.file).then(h=>{if(!h.ok)throw new Error("Could not load "+u.file);return h.arrayBuffer()}).then(h=>f(w6(h),u)).catch(h=>console.error(h)).then(()=>{--s===0&&l()})}),function(u){if(!i)return;let h=!!(u&&u.reflected),d=c.filter(p=>b6.box(p.box,h));d.length&&i(d)}}});var vg=ve((OS,u1)=>{"use strict";var _6=n0(),zn=1.29032,u0=[9.2968,2,5.9],M6=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Rf=2147.64,ag=725,ig=1288,sg=1450,cg=2576,Nr=-5.197,p0=3.865,Mi=10.135,v0=-14.679,jc=-30.229,Bc=7.232,lg=-45.713,Ss=17.1*zn,d0=16.6*zn,Uc=16.6*zn,fg=[6.9,17.1],Cf=[2.95,16.6],E6=1.6,k6=0,S6=1,hg=2,h1=3,ug=4,dg=5,A6=6;function T6(){let e=[],t=[],o=[],n=[],r=_6.createBuilder(e,t,o,n),a=(f,l,u,h,d,p,v=1,m=1)=>{let g=[];for(let y=0;y<=v;y++){let b=[];for(let M=0;M<=m;M++){let k=[f[0]+l[0]*y/v+u[0]*M/m,f[1]+l[1]*y/v+u[1]*M/m,f[2]+l[2]*y/v+u[2]*M/m],z=p(k);b.push(r.vert(k,h,[d,z[0],z[1]]))}g.push(b)}for(let y=0;y<v;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=f=>l=>[(u0[2]-l[2])/zn-f,l[1]/zn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],k6,f=>[f[0]/zn,f[2]/zn],13,14),a([p0,0,Nr],[0,0,v0-Nr],[0,Ss,0],[1,0,0],S6,i(8.6),6,6),a([-40,0,Nr],[p0+40,0,0],[0,Ss,0],[0,0,1],hg,f=>[(p0-f[0])/zn,f[1]/zn],8,4),a([-40,0,-.36],[0,0,Nr+.36],[0,Ss,0],[1,0,0],hg,f=>[-f[2]/zn,f[1]/zn]),a([Mi,0,-80],[0,0,Nr+80],[0,d0,0],[-1,0,0],ug,i(8.6),12,6),a([Mi,0,Nr],[60,0,0],[0,d0,0],[0,0,1],dg,f=>[(f[0]-Mi)/zn,f[1]/zn],8,4),a([70,0,Nr],[0,0,-.36-Nr],[0,d0,0],[-1,0,0],dg,f=>[-f[2]/zn,f[1]/zn]);let s=f=>[(f[0]-u0[0])/zn+4.18,f[1]/zn];a([-20,0,jc],[Bc+20,0,0],[0,Uc,0],[0,0,1],h1,s,8,6),a([Bc,0,jc],[0,0,lg-jc],[0,Uc,0],[1,0,0],h1,i(28),4,4),a([Bc,0,lg],[Mi-Bc,0,0],[0,d0,0],[0,0,1],ug,f=>[(f[0]-u0[0])/zn,f[1]/zn],2,4),a([-20,0,v0],[0,0,jc-v0],[0,Uc,0],[1,0,0],h1,i(16),4,4);let c=(f,l,u,h)=>a(f,l,u,h,A6,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function h0(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Ea=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",L6=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,v0],[p0,Ss,Nr]],[[Mi,0,-80],[70,d0,Nr]],[[-20,0,-80],[Bc,Uc,jc]],[[-40,0,-80],[-20,Uc,v0]]],z6=L6.map(e=>`if (hitBox(ro, rd, ${Ea(e[0])}, ${Ea(e[1])}, 1e4) ) return 0.0;`).join(`
		`),pg="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>M6[t][e].toFixed(6)).join(", ")).join(", ")+")",N6=`
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
	vec3 ro = ${Ea(u0)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Ea([-40,0,v0])}, ${Ea([p0-.02,Ss,Nr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Ea([Mi+.02,0,-80])}, ${Ea([70,d0,Nr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${pg} * (p - ${Ea(u0)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${ag.toFixed(2)} + ${Rf.toFixed(3)} * pc.x / pc.z) / ${sg.toFixed(1)},
		(${ig.toFixed(2)} - ${Rf.toFixed(3)} * pc.y / pc.z) / ${cg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${pg} * (p - ${Ea(u0)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${ag.toFixed(2)} + ${Rf.toFixed(3)} * pc.x / pc.z) / ${sg.toFixed(1)},
		(${ig.toFixed(2)} - ${Rf.toFixed(3)} * pc.y / pc.z) / ${cg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Ea(u0)}), n));
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
		base = texture2D(pinkTex, vec2(fuv.x / ${fg[0].toFixed(2)}, 1.0 - fuv.y / ${fg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Cf[0].toFixed(2)}, 1.0 - fuv.y / ${Cf[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Cf[0].toFixed(2)}, 1.0 - fuv.y / ${Cf[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(p0-.05).toFixed(3)} && v_pos.x < ${(Mi+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${v0.toFixed(3)};
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
}`,C6=tr();u1.exports=e=>{let t=T6(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=h0(e,"res/street/photo.jpg",o,[190,160,120]),i=h0(e,"res/street/photo_night.jpg",o,[12,14,22]),s=h0(e,"res/street/photo_mask.png",o,[255,255,255]),c=h0(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=h0(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=h0(e,"res/street/facade_cream.jpg",n,[215,200,175]),u=h0(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),d=e({frag:N6,vert:R6,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:u,photoNight:i,night:()=>C6.night,time:()=>(Date.now()-h)/1e3}});return function(){d()}};u1.exports.layout={MOUTH_Z:Nr,PINK_X:p0,RIGHT_X:Mi,PINK_H:Ss,CREAM_H:d0,S:zn}});var xg=ve((FS,gg)=>{"use strict";var P6=tr().GLSL,{glassPanes:I6}=pi(),mg=er();function O6(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(I6(),[0,0,1]),o(mg.windowGlass(),[0,0,1]),o(mg.farDoorGlass(),[1,0,0]),{position:e,normal:t}}gg.exports=e=>{let t=O6(),o=e({frag:`
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var Ig=ve(($S,g1)=>{"use strict";var Eg=tr().GLSL,F6=n0(),d1=Zr(),{wallWithHoles:$6,C:Si}=er(),Ke=.28,Y={westBack:14.4,westCol:15-Ke,eastCol:37.4+Ke,eastBack:41.8,south:Si.z1+.7,northCol:Si.z1+.7+16,northBack:Si.z1+.7+19,cx:(15+37.4)/2,cz:(Si.z1+.7+Si.z1+.7+16-Ke)/2},To={x0:Y.westCol+Ke,x1:Y.eastCol-Ke,z0:Y.south,z1:Y.northCol-Ke},sr=3.3,Xc=.92,Ai=5.6,yg=6,na=11.9,ki=9.6,Kt={x0:Y.cx-2.9,x1:Y.cx+2.9,top:14.4},Df=7,kg=4,v1=(Y.eastCol-Y.westCol)/Df,G6=(Y.northCol-Y.south)/kg,Sg=3,Kc=.26,y0=1.4,g0=1.1,If=3,Fa=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),Ge={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},$a=[],Ag=(e,t,o)=>[Y.cx+e,t,Y.cz+o],Of=Ag(-5.9,0,3.4),Ti=.85,Ei={c:[Of[0],4.6*Ti+.5,Of[2]],r:[5*Ti,3.6*Ti,4.5*Ti]},Tg=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[Of[0]+e.d[0]*Ti,e.d[1]*Ti+.5,Of[2]+e.d[2]*Ti],r:e.r.map(t=>t*Ti),n:e.n}));for(let e of Tg)$a.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var D6=[3.6,6.3,9];for(let e of D6){let t=8.6+e%1.7*.6;$a.push({c:Ag(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var q6=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:Y.cx+e.d[0],z:Y.cz+e.d[1],bloom:e.bloom}));for(let e of q6)$a.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var m1=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[Y.cx+Math.cos(t)*2.3,Y.cz+Math.sin(t)*2.3]});for(let[e,t]of m1)$a.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Lg=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let u=l/f,h=o+(r-o)*u,d=n+(a-n)*u;i!==void 0&&Math.abs((r!==o?h:d)-i)<s||Lg.push([h,d])}};e(To.x0+.45,To.z0+1.2,To.x0+.45,To.z1-.45,Y.cz,1),e(To.x1-.45,To.z0+1.2,To.x1-.45,To.z1-.45,Y.cz,1),e(To.x0+.45,To.z1-.45,To.x1-.45,To.z1-.45,Y.cx,1.9)}var H6=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Ff=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function Ts(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Nn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function j6(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var B6={north:[e=>[e[0],e[1],Y.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[Y.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[Y.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function zg(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var U6=zg(Y.westCol,v1,Df,Ke+Kc,Ke+Kc),bg=zg(Y.south,G6,kg,.32,Ke+Kc),As=[Y.cx-32.35,Y.northCol-77],W6=Array.from({length:Df-1},(e,t)=>Y.westCol+(t+1)*v1),Ng=e=>(e[1]-e[0])/2-.2,Yc=e=>(e[0]+e[1])/2;function V6(e,t){let o=Yc(e),n=Ng(e);return{u0:e[0],u1:e[1],bottom:t?0:Xc,head:r=>{let a=Math.abs(r-o);return a<n?sr+Math.sqrt(n*n-a*a):sr},step:.05}}function X6(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[Ge.STONE,0,0]}}function Y6(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[Ge.STONE,0,0]}}function wg(e,t,o){let[n,r]=B6[t],a=j6(e,n,r),i=[];o.arches.forEach((l,u)=>i.push(V6(l,u===o.open)));let s=[];for(let l of o.bays||o.arches){let u=Yc(l);o.oculi&&i.push(X6(u,6.85,.3)),s.push({c:u,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])s.push(l);for(let l of s)i.push(Y6(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])i.push(l);$6(a,{u0:o.u0,u1:o.u1,w0:-Ke,w1:Ke,top:o.top,holes:i,mat:[Ge.BRICK,0,0],revealMat:[Ge.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,u,h,d,p,v,m)=>{let g=n([l,u,h]),y=n([d,p,v]);Nn(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,u,h,d,p,v)=>Ts(a,l,u,h,d,p,[v,0,0]);for(let l of o.arches){let u=Yc(l),h=Ng(l),d=28;for(let p of[Ke,-Ke]){let v=p>0?1:-1,m=p+v*.025;for(let g=0;g<d;g++){let y=Math.PI*g/d,b=Math.PI*(g+1)/d,M=(O,re)=>[u+Math.cos(O)*re,sr+Math.sin(O)*re],k=M(y,h),z=M(b,h),N=M(y,h+.26),q=M(b,h+.26);f([k[0],k[1],m],[z[0],z[1],m],[q[0],q[1],m],[N[0],N[1],m],[0,0,v],Ge.STONE);let D=Math.cos((y+b)/2),ne=Math.sin((y+b)/2);f([N[0],N[1],p],[q[0],q[1],p],[q[0],q[1],m],[N[0],N[1],m],[D,ne,0],Ge.STONE)}}}if(o.arches.forEach((l,u)=>{u!==o.open&&c(l[0]-.02,Xc,-Ke-.05,l[1]+.02,Xc+.09,Ke+.05,Ge.STONE)}),c(o.u0,yg,-Ke,o.u1,yg+.18,Ke+.09,Ge.STONE),c(o.u0,o.win[0]-.12,Ke-.01,o.u1,o.win[0],Ke+.06,Ge.STONE),o.cornice)for(let[l,u,h]of o.cornice)c(l,h-.22,Ke-.01,u,h,Ke+.16,Ge.STONE),c(l,h,Ke-.01,u,h+.16,Ke+.42,Ge.STONE);for(let{c:l,y0:u,y1:h,w:d,door:p}of s){let v=d/2;if(f([l-v-.01,u,.06],[l+v+.01,u,.06],[l+v+.01,h,.06],[l-v-.01,h,.06],[0,0,1],p?Ge.DARK:Ge.PANE),p){c(l-v-.16,0,Ke-.01,l-v,h+.16,Ke+.07,Ge.STONE),c(l+v,0,Ke-.01,l+v+.16,h+.16,Ke+.07,Ge.STONE),c(l-v-.16,h,Ke-.01,l+v+.16,h+.2,Ke+.09,Ge.STONE),c(l-v,0,.07,l+v,h-.02,.12,Ge.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,Ge.DARK);continue}for(let m of[-1,1]){let g=l+m*v;c(g+m*.02,u+.02,Ke+.02,g+m*(v+.025),h-.02,Ke+.06,Ge.SHUTTER)}c(l-v-.09,h,Ke-.01,l+v+.09,h+.16,Ke+.05,Ge.STONE),c(l-v-.09,u-.1,Ke-.01,l+v+.09,u,Ke+.09,Ge.STONE),c(l-.015,u,.06,l+.015,h,.09,Ge.SHUTTER),c(l-v,(u+h)/2-.015,.06,l+v,(u+h)/2+.015,.09,Ge.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let u=Yc(l);f([u-.31,6.54,0],[u+.31,6.54,0],[u+.31,7.16,0],[u-.31,7.16,0],[0,0,1],Ge.DARK)}for(let l of o.cols){let u=Xc+.09,h=n([l,0,0]);Nn(e,h[0]-.24,u,h[2]-.24,h[0]+.24,u+.12,h[2]+.24,Ge.MARBLE),e.lathe([[.23,u+.12,1],[.24,u+.17],[.2,u+.24],[.215,u+.28],[.17,u+.34,1],[.165,u+.6],[.155,sr-.5],[.15,sr-.38,1],[.175,sr-.34,1],[.17,sr-.3],[.2,sr-.22],[.27,sr-.15],[.29,sr-.12,1]],h[0],h[2],18,{mat:()=>[Ge.MARBLE,0,0]}),Nn(e,h[0]-.29,sr-.12,h[2]-.29,h[0]+.29,sr+.01,h[2]+.29,Ge.STONE)}o.walk&&o.walk(e)}function K6(e){let t=[-1,0,1].map(r=>{let a=Y.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Ge.STONE,0,0]}});wg(e,"north",{u0:Y.westCol-Ke,u1:Y.eastCol+Ke,top:r=>r>Kt.x0+1e-6&&r<Kt.x1-1e-6?Kt.top:na,cuts:[Kt.x0,Kt.x0+1e-5,Kt.x1-1e-5,Kt.x1],arches:U6,open:Sg,cols:W6,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[Y.westCol-Ke-3.3,Kt.x0,na],[Kt.x1,Y.eastCol+Ke+3.3,na],[Kt.x0-.2,Kt.x1+.2,Kt.top]],walk:r=>{Nn(r,To.x0,Ai,Y.northCol+Ke,To.x1,Ai+.2,Y.northBack,Ge.PLASTER),Nn(r,To.x0,0,Y.northBack,To.x1,Ai,Y.northBack+.3,Ge.PLASTER);for(let a of[Y.cx-7.2,Y.cx,Y.cx+7.2])Ts(r,[a-.8,0,Y.northBack-.01],[a+.8,0,Y.northBack-.01],[a+.8,2.9,Y.northBack-.01],[a-.8,2.9,Y.northBack-.01],[0,0,-1],[Ge.DARK,0,0]),Nn(r,a-.98,0,Y.northBack-.06,a+.98,3.12,Y.northBack,Ge.STONE),Ts(r,[a-.8,0,Y.northBack-.07],[a+.8,0,Y.northBack-.07],[a+.8,2.9,Y.northBack-.07],[a-.8,2.9,Y.northBack-.07],[0,0,-1],[Ge.DARK,0,0])}}),Ts(e,[Kt.x0,11,Y.northCol+.2],[Kt.x1,11,Y.northCol+.2],[Kt.x1,13.6,Y.northCol+.2],[Kt.x0,13.6,Y.northCol+.2],[0,0,-1],[Ge.DARK,0,0]),Nn(e,Kt.x0+.3,10.88,Y.northCol-Ke-.06,Kt.x1-.3,11,Y.northCol-Ke+.1,Ge.STONE),Nn(e,Y.westBack,Ai+.2,Y.northBack,Y.eastBack,na,Y.northBack+3.4,Ge.BRICK),Nn(e,Y.westBack,ki,Y.northCol-Ke,Y.westCol-Ke,na,Y.northCol+Ke,Ge.BRICK),Nn(e,Y.eastCol+Ke,ki,Y.northCol-Ke,Y.eastBack,na,Y.northCol+Ke,Ge.BRICK),Nn(e,Y.westBack,Ai+.2,Y.northCol+Ke+.12,Y.eastBack,na,Y.northBack,Ge.BRICK),Wc(e,[Y.westBack-.5,na+.16,Y.northCol-Ke-.42],[Kt.x0-Y.westBack+.5,0,0],[0,2.6,4.4],Ge.ROOF),Wc(e,[Kt.x1,na+.16,Y.northCol-Ke-.42],[Y.eastBack+.5-Kt.x1,0,0],[0,2.6,4.4],Ge.ROOF),Wc(e,[Kt.x0-.3,Kt.top+.16,Y.northCol-Ke-.42],[Kt.x1-Kt.x0+.6,0,0],[0,1.4,3],Ge.ROOF),_g(e,[Kt.x0-.3,Kt.top+.16,Y.northCol-Ke-.42],[Kt.x0-.3,Kt.top+1.56,Y.northCol-Ke+2.58],[Kt.x0-.3,Kt.top+.16,Y.northCol-Ke+2.58],[-1,0,0],Ge.BRICK),_g(e,[Kt.x1+.3,Kt.top+.16,Y.northCol-Ke-.42],[Kt.x1+.3,Kt.top+1.56,Y.northCol-Ke+2.58],[Kt.x1+.3,Kt.top+.16,Y.northCol-Ke+2.58],[1,0,0],Ge.BRICK),Nn(e,Kt.x0,na,Y.northCol+Ke,Kt.x1,Kt.top,Y.northCol+2.6,Ge.BRICK);for(let[r,a]of[[Y.cx-9.8,Y.northBack+.6],[Y.cx+9.4,Y.northBack+.4],[Y.cx-4.6,Y.northBack+1]])Nn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,Ge.BRICK),Nn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,Ge.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];bg.forEach((u,h)=>{let d=Yc(u);h===1?c.push({c:d,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:d,y0:1,y1:2.75,w:1.05}),c.push({c:d,y0:3.85,y1:5.45,w:1.05})}),wg(e,r,{u0:Y.south,u1:Y.northCol-Ke,top:()=>ki,arches:[],bays:bg,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[Y.south,Y.northCol-Ke,ki]]}),Nn(e,a,0,Y.south,i+s*(Ke+.12),ki,Y.northBack+.3,Ge.BRICK);let f=i-s*Ke;Nn(e,f,0,Y.south,f-s*.06,.55,Y.northCol-Ke,Ge.STONE);let l=i-s*(Ke+.42);Wc(e,[l,ki+.16,Y.south],[0,0,Y.northCol-Ke-Y.south],[a-l+s*.4,1.9,0],Ge.ROOF)};o("west",Y.westBack,Y.westCol),o("east",Y.eastBack,Y.eastCol);let n=Si.x1+.7;Nn(e,13.65,7.4,Y.south-.02,n,7.62,Y.south+.14,Ge.STONE),Nn(e,13.65,10.4,Y.south-.02,n,10.6,Y.south+.38,Ge.STONE),Wc(e,[13.65,10.6,Y.south+.38],[n-13.65,0,0],[0,2.2,-5],Ge.ROOF)}function _g(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function Wc(e,t,o,n,r){let a=Ff([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,l)=>[t[0]+o[0]*f+n[0]*l,t[1]+o[1]*f+n[1]*l,t[2]+o[2]*f+n[2]*l];Ts(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;Ts(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],Ff([-n[0],0,-n[2]]),[r,0,0])}function Q6(e){let t=Y.westBack,o=Y.eastBack,n=Y.south,r=Y.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let l=[t+(o-t)*c/a,0,n+(r-n)*f/i];s[c].push(e.vert(l,[0,1,0],[Ge.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var Vc=.46,x0=.58,m0=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function Z6(e,t,o){let n=g0+o,r=(e>0?To.x1-Y.cx:Y.cx-To.x0)-y0-o,a=g0+o,i=(t>0?To.z1-Y.cz:Y.cz-To.z0)-y0-o,s=If+o,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[r,i],[r,a],[f,a]],u=Math.atan2(a,f),h=Math.atan2(c,n);for(let d=1;d<10;d++){let p=u+(h-u)*d/10;l.push([Math.cos(p)*s,Math.sin(p)*s])}return l.map(([d,p])=>[Y.cx+e*d,Y.cz+t*p])}function J6(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,f=i,l=Vc*.5,u=-l,h=a+l,d=[],p=Math.max(1,Math.ceil((h-u)/1));for(let v=0;v<=p;v++){let m=u+(h-u)*v/p,g=[];for(let y=0;y<m0.length;y++){let[b,M]=m0[y],k=Math.min(m0.length-2,y),z=m0[Math.max(0,y-1)],N=m0[Math.min(m0.length-1,y+1)],q=(N[0]-z[0])*Vc,ne=(N[1]-z[1])*x0,O=-q,re=Math.hypot(ne,O)||1,J=[t[0]+i*m+c*b*Vc,M*x0,t[1]+s*m+f*b*Vc],ee=[c*(-ne/re),-O/re,f*(-ne/re)];g.push(e.vert(J,ee[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:ee,[Ge.HEDGE,0,0]))}d.push(g)}for(let v=0;v<p;v++)for(let m=0;m<m0.length-1;m++)e.tri(d[v][m],d[v+1][m],d[v+1][m+1]),e.tri(d[v][m],d[v+1][m+1],d[v][m+1]);for(let[v,m]of[[0,-1],[p,1]]){let g=d[v],y=e.vert([t[0]+i*(v?h:u),x0*.5,t[1]+s*(v?h:u)],[i*m,0,s*m],[Ge.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function eM(e){for(let t of[-1,1])for(let o of[-1,1]){let n=Z6(t,o,.3);for(let r=0;r<n.length;r++)J6(e,n[r],n[(r+1)%n.length])}}function tM(e){let t=Y.cx,o=Y.cz,n=()=>[Ge.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[Ge.DARK,0,0]});let r={mat:()=>[Ge.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*l*i*-1+0),1.95+Math.sin(f)*l,o])}e.tube(s,()=>.016,16,5,r)}}function oM(e){for(let[t,o]of m1)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[Ge.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[Ge.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[Ge.BARK,0,0]})}function nM(e){let[t,,o]=Ei.c,n=Cg(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Ge.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,u=[t+a*l,s*l,o+i*l],h=n()*Math.PI*2;e.tube([u,[u[0]+Math.cos(h)*1.3,u[1]+.9,u[2]+Math.sin(h)*1.3],[u[0]+Math.cos(h)*2.3,u[1]+1.4+n(),u[2]+Math.sin(h)*2.3]],d=>.08*(1-d*.7),8,6,{mat:()=>[Ge.BARK,0,0]})}}for(let a of $a.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Ge.BARK,0,0]})}function rM(e){let t=()=>[Ge.FARBRICK,0,0],o=()=>[Ge.LEAD,0,0],n=(a,i,s,c,f,l)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let u=[];for(let d=0;d<=12;d++){let p=d/12*Math.PI/2,v=Math.cos(p)*s,m=Math.sin(p)*f;l&&(v*=1-.18*Math.sin(p*2)),u.push([Math.max(v,s*.12),c+m])}e.lathe(u,a,i,28,{mat:o});let h=c+f;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};Nn(e,14,0,104,52,26,150,Ge.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{Nn(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Ge.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function aM(e){let o=[Y.cx,0,Y.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],u=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[i].push(e.vert(u,[-l[0],-l[1],-l[2]],[Ge.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function iM(){let e=[],t=[],o=[],n=[],r=F6.createBuilder(e,t,o,n);return Q6(r),K6(r),eM(r),tM(r),oM(r),nM(r),r.save(),r.translate(As[0],0,As[1]),rM(r),r.restore(),aM(r),{position:e,normal:t,elements:o,attr:n}}var Rg=[[[13.65,0,Si.z0-.7],[Si.x1+.7,10.6,Y.south]],[[Y.westBack,Ai,Y.northCol-Ke],[Y.eastBack,na,Y.northBack+3.4]],[[Kt.x0,na,Y.northCol-Ke],[Kt.x1,Kt.top,Y.northCol+2.6]],[[Y.westBack,0,Y.south],[Y.westCol+Ke,ki,Y.northBack+.3]],[[Y.eastCol-Ke,0,Y.south],[Y.eastBack,ki,Y.northBack+.3]],[[14+As[0],0,104+As[1]],[52+As[0],26,150+As[1]]]];function sM(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function Pf(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=s*s-i*c;if(f<=0)return 0;let l=Math.sqrt(f),u=Math.max(0,(-s-l)/i),h=(-s+l)/i;return Math.max(0,h-u)}function p1(e){for(let[t,o]of Rg)if(sM(e,Fa,t,o))return 0;return 1}function Cg(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function cM(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=Cg(21),c=(p,v,m,g,y,b,M)=>{let k=e.length/3;for(let[z,N]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...p),t.push(z,N),o.push(v,m,g),n.push(...y),r.push(...b),a.push(...M);i.push(k,k+1,k+2,k,k+2,k+3)},f=(p,v)=>{let m=1;for(let g of $a){if(g===v||!g.shadow)continue;let y=Pf(p,Fa,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=$a.map(p=>({...p,pts:null}));for(let p of l)for(let v=0;v<p.n;v++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(p.spindle){let J=b[1],ee=Math.sqrt(Math.max(.02,1-J*J))*(J>0?1-J*.55:1+J*.25),Qe=Math.hypot(b[0],b[2])||1,He=ee*Math.min(1,Qe*1.4);b=[b[0]/Qe*He,J,b[2]/Qe*He]}p.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let M=[p.c[0]+b[0]*p.r[0],p.c[1]+b[1]*p.r[1],p.c[2]+b[2]*p.r[2]],k,z;if(p.magnolia){let J=0;for(let He of Tg)J=Math.max(J,Pf(M,Fa,He.c,He.r));k=Math.exp(-J*1.1);let ee=1;for(let He of $a)if(!He.magnolia&&He.shadow){let de=Pf(M,Fa,He.c,He.r);de>0&&(ee*=Math.exp(-de*.9))}k*=p1(M)*ee;let Qe=H6(M,Ei.c);z=Ff([Qe[0]/Ei.r[0]+b[0]*.5,Qe[1]/Ei.r[1]+b[1]*.5,Qe[2]/Ei.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(Qe[0]/Ei.r[0],Qe[1]/Ei.r[1],Qe[2]/Ei.r[2])*.6+y*.4)}else{let J=Pf(M,Fa,p.c,p.r);k=Math.exp(-J*(p.spindle?2.2:1.25)),k*=p1(M)*f(M,$a[l.indexOf(p)]),z=Ff([b[0]/p.r[0],b[1]/p.r[1],b[2]/p.r[2]])}let N=Math.max(0,z[0]*Fa[0]+z[1]*Fa[1]+z[2]*Fa[2]),q=.25+.75*Math.pow(y,1.5)*(.65+.35*(z[1]*.5+.5)),D=p.size[0]+(p.size[1]-p.size[0])*s(),ne=.85+s()*.3,O=p.leaf.map(J=>J*ne),re=p.cell;p.cell===3&&s()<.35&&(re=2),c(M,D,re,s()*Math.PI*2,[k,q,.35+.65*N],O,p.bloom)}for(let[p,v]of Lg){let m=s()<.5;for(let g=0;g<3;g++){let y=[p+(s()-.5)*.7,.28+s()*.22,v+(s()-.5)*.5],b=p1(y)*f(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let u=i.length/6,h=Array.from({length:u},(p,v)=>v);for(let p=u-1;p>0;p--){let v=Math.floor(s()*(p+1));[h[p],h[v]]=[h[v],h[p]]}let d=[];for(let p of h)for(let v=0;v<6;v++)d.push(i[p*6+v]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:d}}var We=e=>e.toFixed(4),Qc=e=>`vec3(${We(e[0])}, ${We(e[1])}, ${We(e[2])})`,Pg=`
const vec3 SUN = ${Qc(Fa)};
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
`,lM=Rg.map(([e,t])=>`if (hitBox(ro, SUN, ${Qc(e)}, ${Qc(t)})) return 0.0;`).join(`
	`),fM=$a.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${Qc(e.c)}, ${Qc(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),hM=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${We(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${We(Ai)} && u > ${We(o-Ke)} && u < ${We(o+n*r+Ke)}) {
				float k = floor((u - ${We(o)}) / ${We(n)});
				float a = ${We(o)} + k * ${We(n)} + (k < 0.5 ? ${We(a)} : 0.02);
				float b = ${We(o)} + (k + 1.0) * ${We(n)} - (k > ${We(r-1.5)} ? ${We(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${We(s)}) < 0.5 ? 0.0 : ${We(Xc+.09)};
				bool hole = (q.y > sill && q.y < ${We(sr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${We(sr)} && d * d + (q.y - ${We(sr)}) * (q.y - ${We(sr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,$f=g0+.3,Gf=g0+.3,Zc=If+.3,Mg=To.x1-Y.cx-y0-.3,uM=To.z1-Y.cz-y0-.3,dM=Y.cz-To.z0-y0-.3,pM=Math.sqrt(Zc*Zc-$f*$f),vM=Math.sqrt(Zc*Zc-Gf*Gf),mM=[[Y.cx,Y.cz,.86,1.18],[Y.cx,Y.cz,1.25,.3],...m1.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${We(e)}, ${We(t)}), ${We(o)}, ${We(n)})) return 0.0;`).join(`
	`),gM=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${We(Y.cx)}, ${We(Y.cz)}));
	float b1 = xz.y > ${We(Y.cz)} ? ${We(uM)} : ${We(dM)};
	vec2 A = vec2(${We($f)}, ${We(pM)}), Bp = vec2(${We($f)}, b1), C = vec2(${We(Mg)}, b1);
	vec2 D = vec2(${We(Mg)}, ${We(Gf)}), E = vec2(${We(vM)}, ${We(Gf)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${We(Zc)}));
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
	${hM("z",Y.northCol,Y.westCol,v1,Df,Ke+Kc,Ke+Kc,Sg,"ro.z > "+We(Y.northCol-Ke))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${mM}
	if (ro.y < ${We(x0)} && ro.x > ${We(To.x0)} && ro.x < ${We(To.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${We(x0)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${We(Vc*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${We(x0)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${fM}
	return tr;
}
`,xM=`
precision highp float;
${Eg}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Pg}
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

	if (kind == ${Ge.SKY}.0) {
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

	if (kind == ${Ge.GROUND}.0) {
		bool yard = P.x > ${We(To.x0)} && P.x < ${We(To.x1)} && P.z < ${We(To.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${We(To.x0)}, ${We(To.x1)} - P.x);
			float ez = min(P.z - ${We(To.z0)}, ${We(To.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${We(Y.cx)}), dz = abs(P.z - ${We(Y.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${We(y0)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${We(y0)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${We(If)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${We(Y.cz)}, P.x - ${We(Y.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${We(If)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${We(g0)} || dz < ${We(g0)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${We(g0)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${We(Y.cx)}, ${We(Y.cz)})));
		}
	} else if (kind == ${Ge.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${Ge.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${Ge.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${Ge.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${We(x0)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${Ge.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${Ge.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${Ge.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${Ge.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${Ge.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${Ge.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${Ge.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${Ge.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${Ge.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${Ge.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${Ge.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${We(Y.westCol)} || P.x > ${We(Y.eastCol)} || P.z > ${We(Y.northCol)}) && P.y < ${We(Ai+.05)} && P.z > ${We(Y.south-.1)} && P.z < ${We(Y.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${We(Y.northCol)} ? P.z - ${We(Y.northCol)} : (P.x < ${We(Y.westCol)} ? ${We(Y.westCol)} - P.x : P.x - ${We(Y.eastCol)});
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
${Eg}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Pg}
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
}`;function _M(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}g1.exports=e=>{let t=iM(),o=cM(),n=_M(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>d1.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:xM,vert:yM,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>d1.gardenDetail}}),s=e({frag:wM,vert:bM,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*d1.leafShare/6)*6});return function(){i(),s()}};g1.exports.layout={G:Y,YARD:To,SUN:Fa}});var Dg=ve((GS,Gg)=>{"use strict";var MM=tr().GLSL,EM=n0(),{C:$g}=er(),cr=$g.x1+.35,w1=$g.zc,x1=[cr-7.3,2,w1],Og=5.2*Math.PI/180,Fg=2100,kM=725,SM=1288,AM=1450,TM=2576,oi=w1-3.2,jf=w1+3.3,y1=cr+5,b1=cr+11.7,Ls=3.9,Jc=cr+22.7,qf=40;function LM(){let e=[],t=[],o=[],n=[],r=EM.createBuilder(e,t,o,n),a=(l,u,h,d,p,v)=>{let m=[];for(let g=0;g<=p;g++){m.push([]);for(let y=0;y<=v;y++){let b=[0,1,2].map(M=>l[M]+u[M]*g/p+h[M]*y/v);m[g].push(r.vert(b,d,[0,0,0]))}}for(let g=0;g<p;g++)for(let y=0;y<v;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=jf-oi,s=.7;a([cr-s,0,oi],[y1-cr+s,0,0],[0,0,i],[0,1,0],6,4);let c=b1-y1,f=Math.hypot(c,Ls);return a([y1,0,oi],[c,Ls,0],[0,0,i],[-Ls/f,c/f,0],6,4),a([b1,Ls,oi],[Jc-b1,0,0],[0,0,i],[0,1,0],6,4),a([cr-s,0,oi],[Jc-cr+s,0,0],[0,qf,0],[0,0,1],12,12),a([cr-s,0,jf],[Jc-cr+s,0,0],[0,qf,0],[0,0,-1],12,12),a([Jc,0,oi],[0,qf,0],[0,0,i],[-1,0,0],8,4),a([cr-s,qf,oi],[Jc-cr+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var wr=e=>e.toFixed(5),Hf=[[cr+3.4,3.7,oi+.01,1],[cr+8.6,4.1,jf-.01,-1],[cr+14.8,Ls+3.3,oi+.01,1],[cr+19.6,Ls+3.6,jf-.01,-1]],zM=`
precision highp float;
${MM}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Hf.length};
vec4 LAMP[NLAMP];

void main() {
	${Hf.map((e,t)=>`LAMP[${t}] = vec4(${wr(e[0])}, ${wr(e[1])}, ${wr(e[2])}, ${wr(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${wr(x1[0])}, ${wr(x1[1])}, ${wr(x1[2])});
	float c = ${wr(Math.cos(Og))}, s = ${wr(Math.sin(Og))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${wr(kM)} + ${wr(Fg)} * d.z / fw, ${wr(SM)} - ${wr(Fg)} * up / fw);
	vec2 uv = px / vec2(${wr(AM)}, ${wr(TM)});
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
	for (int i = 0; i < ${Hf.length}; i++) {
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
}`;Gg.exports=e=>{let t=LM(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:zM,vert:NM,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,f)=>{let[l,u,h]=s,d=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[p,v,m]of d){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+p[0]*c[0]+v[0]*y*c[0]+m[0]*b*c[0],u+p[1]*c[1]+v[1]*y*c[1]+m[1]*b*c[1],h+p[2]*c[2]+v[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...p),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of Hf){let c=s[3],f=s[2]+c*.42;a([s[0],s[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let u of[-1,1])a([s[0]+l*.11,s[1],f+u*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,f],[.15,.03,.15],0),a([s[0],s[1]+.27,f],[.05,.05,.05],0),a([s[0],s[1]-.19,f],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var Ug=ve((DS,Bg)=>{"use strict";var RM=tr().GLSL,{A:Uf,BENCH:M1,SHAFT:_1,TREE:el,oculusGLSL:CM}=ta(),PM=Zr(),Bf=el.sxz,qg=el.sy,Hg=el.yaw;function IM(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let f=new Uint16Array(e,s,o*2);s+=o*4;let l=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let u=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:f,nrm:l,idx:u}}function OM(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(Hg),i=Math.sin(Hg);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*Bf,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*qg,l=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*Bf;t[s*3]=Uf.cx+a*c+i*l,t[s*3+1]=M1.soil+.02+f,t[s*3+2]=Uf.zc-i*c+a*l;let u=e.nrm[s*3]/127/Bf,h=e.nrm[s*3+1]/127/qg,d=e.nrm[s*3+2]/127/Bf,p=Math.hypot(u,h,d)||1;u/=p,h/=p,d/=p,o[s*3]=a*u+i*d,o[s*3+1]=h,o[s*3+2]=-i*u+a*d,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function jg(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var qn=e=>e.toFixed(4),zs=el.crownC,Ns=el.crownR,FM=`
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

const vec3 SHAFT = vec3(${qn(_1[0])}, ${qn(_1[1])}, ${qn(_1[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${qn(Uf.cx)}, ${qn(Uf.zc)});
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
	vec3 cc = vec3(${qn(zs[0])}, ${qn(zs[1])}, ${qn(zs[2])});
	vec3 cr = vec3(${qn(Ns[0])}, ${qn(Ns[1])}, ${qn(Ns[2])});
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
}`,Li=gi(),$M=`
precision highp float;
${RM}
uniform float time;
${Li.lanternGLSL(Li.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Li.LANTERNS[Li.TREE_LANTERN[0]].x.toFixed(3)}, ${Li.LANTERNS[Li.TREE_LANTERN[0]].y.toFixed(3)}, ${Li.LANTERNS[Li.TREE_LANTERN[0]].z.toFixed(3)});
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
	vec3 rel = (v_pos - vec3(${qn(zs[0])}, ${qn(zs[1])}, ${qn(zs[2])})) / vec3(${qn(Ns[0])}, ${qn(Ns[1])}, ${qn(Ns[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${qn(M1.soil)}, ${qn(M1.soil+.5)}, v_pos.y);

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
}`;Bg.exports=e=>{let t=null,o=jg(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=jg(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=OM(IM(a));t=e({vert:FM,frag:$M,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>PM.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Yf=ve((qS,Yg)=>{"use strict";var Rs=bi(),GM="res/audio/go-tomorrow.mp3",DM="res/audio/go-tomorrow.json",Vg="gallery-sound",Wf=[Rs.PIANO.x,1,Rs.PIANO.z],qM=Rs.R,Rr=!0;try{localStorage.getItem(Vg)==="off"&&(Rr=!1)}catch(e){}var mn=null,nr=null,tl=null,ol=null,zi=null,ni=null,b0=!1,Vf=null,Wg=[],HM=(typeof performance!="undefined"?performance.now():0)/1e3;function jM(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let i=o.getChannelData(a),s=0;for(let c=0;c<t;c++){let f=c/e.sampleRate,l=.25+.6*Math.exp(-f*2.2);s+=(r()-s)*l,i[c]=s*Math.pow(1-c/t,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function BM(){if(mn)return;mn=new Audio,mn.src=GM,mn.loop=!0,mn.preload="auto",mn.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){mn.volume=.2;return}try{nr=new e;let t=nr.createMediaElementSource(mn);zi=nr.createBiquadFilter(),zi.type="lowpass",zi.frequency.value=1500,zi.Q.value=.4,tl=nr.createGain(),tl.gain.value=0,ol=nr.createGain(),ol.gain.value=0;let o=nr.createConvolver();o.buffer=jM(nr),ni=nr.createGain(),ni.gain.value=Rr?1:0,t.connect(zi),zi.connect(tl),tl.connect(ni),zi.connect(o),o.connect(ol),ol.connect(ni),ni.connect(nr.destination)}catch(t){nr=null,mn.volume=.2}}function Xg(){if(b0||!Rr)return;BM();let e=()=>mn.play().then(()=>{b0=!0}).catch(()=>{});nr&&nr.state==="suspended"?nr.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,Xg,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!mn||!b0||(document.hidden?mn.pause():Rr&&mn.play().catch(()=>{}))}),fetch(DM).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(i=>i[2]).sort((i,s)=>i-s),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(i=>({t:i[0],w:i[1],x:Math.max(0,Math.min(1,(i[2]-r)/Math.max(a-r,.001)))}))};Vf={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var Xf={AT:Wf,listen(e){if(!nr||!b0)return;let t=e[0]-Wf[0],o=e[2]-Wf[2],n=Math.hypot(t,o,(e[1]-Wf[1])*.5),r=Math.hypot(e[0]-Rs.C.x,e[2]-Rs.C.z)<qM+.4||e[0]<-.2&&Math.abs(e[2]-Rs.C.z)<4,a,i,s;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,i=.22+.16*f,s=16e3}else{let f=5.5/Math.max(n,5.5),l=e[0]>14.2&&e[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,i=.34*Math.pow(f,.95)*l,s=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=nr.currentTime;tl.gain.setTargetAtTime(a,c,.35),ol.gain.setTargetAtTime(i,c,.35),zi.frequency.setTargetAtTime(s,c,.35)},time(){let e=Vf&&Vf.dur||158;return mn&&b0&&!mn.paused||mn&&b0?mn.currentTime%e:((performance.now()/1e3-HM)%e+e)%e},get cues(){return Vf},get on(){return Rr},set(e){Rr=!!e;try{localStorage.setItem(Vg,Rr?"on":"off")}catch(t){}Rr?(Xg(),mn&&b0&&mn.play().catch(()=>{}),ni&&ni.gain.setTargetAtTime(1,nr.currentTime,.2)):ni?ni.gain.setTargetAtTime(0,nr.currentTime,.15):mn&&mn.pause(),Wg.forEach(t=>t(Rr))},toggle(){Xf.set(!Rr)},onChange(e){Wg.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=Rr?t:o,n.setAttribute("aria-label",Rr?"Turn the music off":"Turn the music on"),n.title=Rr?"Music on":"Music off",n.setAttribute("aria-pressed",Rr?"true":"false")};return r(),Xf.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,i=>i.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Xf.toggle()}),n}};Yg.exports=Xf});var sx=ve((HS,A1)=>{"use strict";var S1=tr().GLSL,{A:Kg,BENCH:ox,oculusGLSL:nx}=ta(),Qg=Zr(),rx=bi(),Zg=Yf(),UM=1.74,WM=1.877,lr=UM/WM,_0={x:Kg.cx-1.22,z:Kg.zc+.02,hipY:ox.seat+.115},Zo=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Ga=e=>[-e[0],-e[1],-e[2],e[3]],Ri=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},Kf=(e,t,o)=>Zo(Ri([0,0,1],o*Math.PI/180),Zo(Ri([0,1,0],t*Math.PI/180),Ri([1,0,0],e*Math.PI/180))),ax=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},Da=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],rl=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Ni=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],k1=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Zf=e=>Math.hypot(e[0],e[1],e[2]),nl=e=>{let t=Zf(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},eh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],VM=(e,t)=>{let o=[e[0],e[1],e[2]],n=Ni(eh(o,t),2);return rl(rl(t,Ni(n,e[3])),eh(o,n))},XM=(e,t)=>{let o=eh(e,t),n=1+k1(e,t);return n<1e-6?[0,0,1,0]:ax([o[0],o[1],o[2],n])};function ra(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,f=a*a,l=n*r,u=n*a,h=r*a,d=i*n,p=i*r,v=i*a;return[(1-2*(c+f))*o[0],2*(l+v)*o[0],2*(u-p)*o[0],0,2*(l-v)*o[1],(1-2*(s+f))*o[1],2*(h+d)*o[1],0,2*(u+p)*o[2],2*(h-d)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function rr(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function E1(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,f=e[6]/o,l=e[8]/n,u=e[9]/n,h=e[10]/n,d=r+c+h,p;if(d>0){let v=Math.sqrt(d+1)*2;p=[(f-u)/v,(l-i)/v,(a-s)/v,v/4]}else if(r>c&&r>h){let v=Math.sqrt(1+r-c-h)*2;p=[v/4,(s+a)/v,(l+i)/v,(f-u)/v]}else if(c>h){let v=Math.sqrt(1+c-r-h)*2;p=[(s+a)/v,v/4,(u+f)/v,(l-i)/v]}else{let v=Math.sqrt(1+h-r-c)*2;p=[(l+i)/v,(u+f)/v,v/4,(a-s)/v]}return ax(p)}var Jf={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Jf[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],Jf[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],Jf[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function w0(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function Jg(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*w0(e,.14,.07)+57*w0(e,.72,.12),n=5*w0(e,.06,.04)-9*w0(e,.42,.12)+17*w0(e,.62,.05)-3*w0(e,.85,.1),r=-26*w0(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function YM(e){let t=(e%1+1)%1,o=Jg(t),n=Jg(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var ex=`
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
}`,th=gi(),tx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${S1}
uniform float time;
${rx.roomGLSL()}
${th.lanternGLSL(th.TREE_LANTERN)}
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
${nx()}
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
			// his hair: near black, with the brown in it showing where the
			// light catches. uv is the bearing of each lock round the crown
			// (as sine and cosine), its length 1 at the hairline, 2 well inside
			float lon = atan(v_uv.x, v_uv.y);
			float edge = clamp(length(v_uv) - 1.0, 0.0, 1.0);
			float s1 = sin(lon * 37.0 + 1.3 * sin(lon * 5.0));
			float s2 = sin(lon * 91.0 + 2.0);
			float s3 = sin(lon * 173.0 + 4.0 * sin(lon * 11.0));
			hairStreak = 0.5 + 0.22 * s1 + 0.16 * s2 + 0.12 * s3;
			// the hairline is not a cut edge: it breaks up into the ends of locks
			if (edge < 0.10 + 0.20 * (0.5 + 0.5 * sin(lon * 29.0)) * (0.5 + 0.5 * s2)) discard;
			t.rgb = vec3(0.050, 0.037, 0.030) * (0.50 + 1.0 * hairStreak) * (0.75 + 0.25 * edge);
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
	if (isHair > 0.5) {
		// the strands run at right angles to the way the bearing changes
		// across the surface; each one tilts the light a little its own way
		vec2 q = v_uv / max(dot(v_uv, v_uv), 1e-4);
		vec3 dpx = dFdx(v_pos), dpy = dFdy(v_pos);
		float dlx = q.y * dFdx(v_uv.x) - q.x * dFdx(v_uv.y);
		float dly = q.y * dFdy(v_uv.x) - q.x * dFdy(v_uv.y);
		vec3 across = cross(dpy, N) * dlx + cross(N, dpx) * dly;
		float al = length(across);
		if (al > 1e-7) {
			across /= al;
			hairT = normalize(cross(N, across));
			N = normalize(N + across * (hairStreak - 0.5) * 0.7);
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
		col += (vec3(0.80, 0.76, 0.70) * band1 * 0.17 + vec3(0.36, 0.22, 0.12) * band2 * 0.11) * lit * (0.5 + hairStreak);
		// the locks sink into shadow between one another
		col *= 0.72 + 0.56 * smoothstep(0.25, 0.8, hairStreak);
	}
	vec3 lan = lanternLight(v_pos, N) * (1.0 - candle);
	col += t.rgb * lan * (1.3 + 1.2 * skin) + lan * gloss * 0.4;
	gl_FragColor = vec4(col, t.a);
}`;function KM(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var ix={w:.13,h:.2},Qf=e=>.011*(1-Math.pow(1-e,3));function QM(){let e=[],t=[],o=[],n=[],r=[],a=(v,m,g,y,b,M,k)=>{let z=e.length/3;[v,m,g,y].forEach((N,q)=>{e.push(...N),t.push(...b),o.push(...k[q]),n.push(M)}),r.push(z,z+1,z+2,z,z+2,z+3)},{w:i,h:s}=ix,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,u=i+.001,h=c+.001;a([0,l,-h],[u,l,-h],[u,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[u,l+.001,h],[u,l+.001,-h],[0,1,0],2,f),a([-u,l,-h],[0,l,-h],[0,l,h],[-u,l,h],[0,-1,0],2,f),a([-u,l+.001,-h],[-u,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let d=8;for(let v of[1,-1]){for(let g=0;g<d;g++){let y=g/d,b=(g+1)/d,M=(.002+y*(i-.002))*v,k=(.002+b*(i-.002))*v,z=Qf(y),N=Qf(b),q=v>0?y:1-y,D=v>0?b:1-b,ne=1,O=-(N-z)/(k-M);a([M,z,-c],[k,N,-c],[k,N,c],[M,z,c],[O,ne,0],3,[[q,1],[D,1],[D,0],[q,0]]),a([M,l+.001,c],[k,l+.001,c],[k,N,c],[M,z,c],[0,0,1],4,f),a([M,z,-c],[k,N,-c],[k,l+.001,-c],[M,l+.001,-c],[0,0,-1],4,f)}let m=i*v;a([m,l+.001,-c],[m,Qf(1),-c],[m,Qf(1),c],[m,l+.001,c],[v,0,0],4,f)}let p=10;for(let v=0;v<p;v++){let m=v/p,g=(v+1)/p,y=e.length/3;for(let[b,M]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,M),t.push(0,1,0),o.push(b,(M+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function ZM(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,f,l,u,h)=>{for(let d=0;d<u;d++){let p=i+(n()-.5)*c*2,v=s+(n()-.5)*f*2,m=20+n()*60,g=t.createRadialGradient(p,v,0,p,v,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),t.fillStyle=g,t.fillRect(p-m,v-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var JM=`
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
		float r = u * ${ix.w.toFixed(3)};
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
${S1}
uniform float time;
${th.lanternGLSL(th.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${nx()}
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
}`;function tE(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],u=16;for(let h=0;h<l.length;h++){let[d,p,v,m]=l[h],g=m===2?.45:1;for(let y=0;y<=u;y++){let b=y/u*Math.PI*2;e.push(Math.cos(b)*d,p,Math.sin(b)*d*g);let M=Math.max(h-1,0),k=Math.min(h+1,l.length-1),z=l[k][0]-l[M][0],N=l[k][1]-l[M][1],q=Math.hypot(z,N)||1;t.push(Math.cos(b)*N/q,-z/q,Math.sin(b)*N/q/g),o.push(...v),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let d=0;d<u;d++){let p=h*(u+1)+d,v=p+u+1;r.push(p,v,p+1,p+1,v,v+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var oE=`
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
${S1}
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
}`;A1.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[_0.x,1.9,_0.z],glow:0};Promise.all([fetch(t+"avatar.json").then(N=>N.json()),fetch(t+"avatar.bin").then(N=>N.arrayBuffer())]).then(([N,q])=>{o=s(N,q)}).catch(N=>console.error(N));let i=e.texture({data:[[[255,255,255,255]]]});function s(N,q){let D=(W,Ze)=>new Float32Array(q,W,Ze),ne=N.bones,O=ne.length,re={};ne.forEach((W,Ze)=>{re[W.name]=Ze});let J=[];for(let W=0;W<O;W++)J.push(Array.from(D(N.ibm+W*64,16)));let ee=ne.map(W=>ra(W.t,W.r,W.s)),Qe=[];for(let W=0;W<O;W++){let Ze=ne[W].parent;Qe[W]=Ze<0?ee[W]:rr(Qe[Ze],ee[W])}let He=Qe.map(E1),de=N.meshes.map(W=>{let Ze=D(W.pos,W.n*3),Ve=D(W.nrm,W.n*3),yt=D(W.uv,W.n*2),Et=new Uint8Array(q,W.jnt,W.n*4),Yt=D(W.wgt,W.n*4),lo=new Uint16Array(q,W.idx,W.ni),eo={};for(let Eo in W.morphs){let ko=W.morphs[Eo];eo[Eo]={idx:new Uint16Array(q,ko.idx,ko.n),d:D(ko.d,ko.n*3)}}let oo=new Float32Array(W.n*3),Ye=new Float32Array(W.n*3),ro=new Float32Array(W.n*3),bt=e.buffer({data:oo,usage:"dynamic"}),Lt=e.buffer({data:Ye,usage:"dynamic"}),Ro=/avaturn_hair/.test(W.name),Ct=/EyeAO|Eyelash/.test(W.name),no=/Body|Head/.test(W.name),Mo=W.kind||0;return{m:W,pos:Ze,nrm:Ve,uv:yt,jnt:Et,wgt:Yt,idx:lo,morphs:eo,outP:oo,outN:Ye,work:ro,pb:bt,nbuf:Lt,tex:W.tex?KM(e,t+W.tex):i,kind:Mo,alphaScale:/EyeAO/.test(W.name)?.25:1,blend:W.blend||Ro,alphaCut:Ro?.35:Ct?.02:0,skin:no?1:0}}),ie=e({vert:ex,frag:tx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!k?M.lamp:[0,0,0,0],court:()=>M||k?0:1,candle:()=>k?1:0},cull:{enable:!1}}),ot=e({vert:ex,frag:tx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!k?M.lamp:[0,0,0,0],court:()=>M||k?0:1,candle:()=>k?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),ht=.3;for(let W of de)if(W.uvBuf=e.buffer(W.uv),/Body/.test(W.m.name)){let Ze=[],Ve=[];for(let yt=0;yt<W.idx.length;yt+=3){let Et=W.idx[yt],Yt=W.idx[yt+1],lo=W.idx[yt+2];(W.pos[Et*3+1]<ht&&W.pos[Yt*3+1]<ht&&W.pos[lo*3+1]<ht?Ve:Ze).push(Et,Yt,lo)}W.el=e.elements({data:new Uint16Array(Ze),type:"uint16"}),Ve.length&&(W.sockEl=e.elements({data:new Uint16Array(Ve),type:"uint16"}))}else W.el=e.elements({data:W.idx,type:"uint16"});let Ft=Qe[re.Hips],Tt=Ri([1,0,0],-Math.PI/2),mo=rr(ra([_0.x-Ft[12]*lr,_0.hipY-Ft[14]*lr,_0.z+Ft[13]*lr],Tt,[1,1,1]),ra([0,0,0],[0,0,0,1],[lr,lr,lr])),gt=new Array(O),Vt=-1,qo=(W,Ze,Ve)=>rr(ra([W,0,Ze],Ri([0,1,0],Ve),[1,1,1]),ra([0,0,0],[0,0,0,1],[lr,lr,lr])),ur=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(W=>re[W]),Xe=ur.map(W=>Qe[W][13]*lr);function xt(W){let Ze=YM(W.phase),Ve={},yt=Ye=>{for(let ro in Ye){let bt=Ye[ro],Lt=Kf(bt[0],bt[1],bt[2]);Ve[ro]=Ve[ro]?Zo(Ve[ro],Lt):Lt}};yt(Ze.swing),yt(Ze.pose);let Et=Math.cos(W.heading),Yt=-Math.sin(W.heading),lo=qo(W.x+Et*Ze.sway,W.z+Yt*Ze.sway,W.heading),eo=new Array(O);for(let Ye=0;Ye<O;Ye++){let ro=ne[Ye],bt=ee[Ye],Lt=Ve[ro.name];if(Lt){let Ro=He[Ye],Ct=Zo(Ga(Ro),Zo(Lt,Ro));bt=ra(ro.t,Zo(ro.r,Ct),ro.s)}eo[Ye]=ro.parent<0?rr(lo,bt):rr(eo[ro.parent],bt)}let oo=1/0;ur.forEach((Ye,ro)=>{oo=Math.min(oo,eo[Ye][13]-Xe[ro])});for(let Ye=0;Ye<O;Ye++)eo[Ye]=eo[Ye].slice(),eo[Ye][13]-=oo,gt[Ye]=rr(eo[Ye],J[Ye]);return{blink:0}}function Rt(W,Ze){let Ve=Math.sin(W*2*Math.PI/4.6),yt=Math.sin(W*.37)*.6+Math.sin(W*.83+1)*.4,Et={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Ve*.8,0,0],Spine2:[4+Ve*.6,0,0],Neck:[10,0,0],Head:[12+yt*2,yt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Yt={};for(let bt in Et){let Lt=Et[bt];Yt[bt]=Kf(Lt[0],Lt[1],Lt[2])}let lo=qo(Ze.x,Ze.z,Ze.heading),eo=new Array(O);for(let bt=0;bt<O;bt++){let Lt=ne[bt],Ro=ee[bt],Ct=Yt[Lt.name];if(Ct){let no=He[bt],Mo=Zo(Ga(no),Zo(Ct,no));Ro=ra(Lt.t,Zo(Lt.r,Mo),Lt.s)}eo[bt]=Lt.parent<0?rr(lo,Ro):rr(eo[Lt.parent],Ro)}let Ye=eo[re.Hips][13]-(Ze.y+.1);for(let bt=0;bt<O;bt++)eo[bt]=eo[bt].slice(),eo[bt][13]-=Ye,gt[bt]=rr(eo[bt],J[bt]);let ro=W%4.1;return{blink:ro<.16?Math.sin(ro/.16*Math.PI):0}}let pt=W=>[Qe[W][12],Qe[W][13],Qe[W][14]],ut=(W,Ze)=>{let Ve=nl(W),yt=nl(Da(Ze,Ni(Ve,k1(Ze,Ve)))),Et=eh(Ve,yt);return E1([Ve[0],Ve[1],Ve[2],0,yt[0],yt[1],yt[2],0,Et[0],Et[1],Et[2],0,0,0,0,1])},Qt={};for(let W of["Left","Right"]){let Ze=re[W+"Arm"],Ve=re[W+"ForeArm"],yt=re[W+"Hand"],Et=re[W+"HandMiddle1"];Qt[W]={a:Ze,f:Ve,h:yt,upper:Zf(Da(pt(Ve),pt(Ze)))*lr,fore:Zf(Da(pt(yt),pt(Ve)))*lr,dir0:nl(Da(pt(Ve),pt(Ze))),qf0:ut(Da(pt(yt),pt(Ve)),[0,1,0]),qh0:ut(Da(pt(Et),pt(yt)),[0,1,0])}}let tt={};for(let W of["Left","Right"])tt[Qt[W].a]={side:W,part:0},tt[Qt[W].f]={side:W,part:1},tt[Qt[W].h]={side:W,part:2};function Ae(W,Ze,Ve){if(!W||!W.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let yt=0,Et=W.length-1,Yt=-1;for(;yt<=Et;){let ko=yt+Et>>1;W[ko].t<=Ze?(Yt=ko,yt=ko+1):Et=ko-1}let lo=W[W.length-1],eo=W[0],oo=Yt>=0?W[Yt]:{t:lo.t-Ve,x:lo.x,w:lo.w},Ye=Yt+1<W.length?W[Yt+1]:{t:eo.t+Ve,x:eo.x,w:eo.w},ro=Math.max(.05,Ye.t-oo.t),bt=Math.min(.14,ro*.45),Lt=Math.max(0,Math.min(1,(Ze-oo.t-bt)/Math.max(ro-bt-.03,.02))),Ro=Lt*Lt*(3-2*Lt),Ct=Ze-oo.t,no=(.55+.45*oo.w)*Math.exp(-Ct/.11),Mo=Ye.t-Ze,Eo=Mo<.05?(.55+.45*Ye.w)*(1-Mo/.05):0;return{x:oo.x+(Ye.x-oo.x)*Ro,lift:Math.sin(Math.PI*Lt)*Math.min(.05,.012+ro*.03)*(ro>2.5?.4:1),press:Math.max(no,Eo),finger:Eo>no?((Yt+1)*7+3)%4:(Math.max(Yt,0)*7+3)%4,busy:Math.exp(-Ct/.9)}}let Pe={lean:0,turn:0,nod:0,pedal:0,last:-1},Mt=["Index","Middle","Ring","Pinky"];function lt(W){let Ze=rx.PLAY,Ve=Zg.cues,yt=Zg.time(),Et=Ve&&Ve.dur||158,Yt={Left:Ae(Ve&&Ve.left,yt,Et),Right:Ae(Ve&&Ve.right,yt,Et)},lo=.35;if(Ve&&Ve.level&&Ve.level.length){let vt=yt*8,fo=Math.floor(vt)%Ve.level.length,Pn=(fo+1)%Ve.level.length;lo=Ve.level[fo]+(Ve.level[Pn]-Ve.level[fo])*(vt-Math.floor(vt))}let eo=Pe.last<0?0:Math.min(.1,Math.max(0,W-Pe.last));Pe.last=W;let oo=vt=>Math.min(1,eo*vt);Pe.lean+=(lo-Pe.lean)*oo(1.2),Pe.turn+=(Yt.Right.busy-Yt.Left.busy-Pe.turn)*oo(1.5),Pe.nod+=(Math.max(Yt.Right.press,Yt.Left.press*.7)-Pe.nod)*oo(6),Pe.pedal+=((Yt.Left.busy>.35?1:.15)-Pe.pedal)*oo(5);let Ye=Math.sin(W*2*Math.PI/4.6),ro=Math.sin(yt*.41)*.6+Math.sin(yt*.17+1)*.4,bt={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Pe.pedal,0,0],Spine:[9+3.5*Pe.lean+ro*1.6,Pe.turn*2.5,-Pe.turn*1.6],Spine1:[7+Ye*.8+2.5*Pe.lean,Pe.turn*2.5,-Pe.turn*1.2],Spine2:[6+Ye*.6+ro*.8,Pe.turn*1.5,0],Neck:[13+3*Pe.lean,Pe.turn*3,0],Head:[15+Pe.nod*3.5+ro*1.5,Pe.turn*5,ro*1.5]};for(let vt of["Left","Right"]){let fo=vt==="Left"?-1:1,Pn=Yt[vt];Mt.forEach((jn,xn)=>{let Co=xn===Pn.finger?Pn.press:Pn.press*.2;bt[vt+"Hand"+jn+"1"]=[0,0,fo*(20+3*xn+20*Co)],bt[vt+"Hand"+jn+"2"]=[0,0,fo*(26+4*xn-6*Co)],bt[vt+"Hand"+jn+"3"]=[0,0,fo*14]}),bt[vt+"HandThumb1"]=[0,fo*-18,fo*10]}let Lt={};for(let vt in bt){let fo=bt[vt];Lt[vt]=Kf(fo[0],fo[1],fo[2])}let Ro=Qe[re.Hips][13]*lr,Ct=rr(ra([Ze.stoolX,Ze.stoolTop+.1-Ro,Ze.stoolFront+.15],Ri([0,1,0],Ze.heading),[1,1,1]),ra([0,0,0],[0,0,0,1],[lr,lr,lr])),no=(Ze.keyX0+Ze.keyX1)/2,Mo={};for(let vt of["Left","Right"]){let fo=Yt[vt],Pn=vt==="Left"?no-.4+.33*fo.x:no+.07+.33*fo.x;Mo[vt]=[Pn,Ze.keyTop+.062+fo.lift-fo.press*.012,Ze.keyFront+.075]}let Eo=new Array(O),ko={},pa=[0,1,0];for(let vt=0;vt<O;vt++){let fo=ne[vt],Pn=ee[vt],jn=Lt[fo.name],xn=tt[vt];if(xn){let Co=Qt[xn.side];if(xn.part===0){let Q=Eo[fo.parent],ce=rr(Q,ee[vt]),at=[ce[12],ce[13],ce[14]],it=Zo(E1(Q),Ga(He[fo.parent])),zt=Da(Mo[xn.side],at),$t=Zf(zt),Bn=(Co.upper+Co.fore)*.995;$t>Bn&&(zt=Ni(zt,Bn/$t),$t=Bn);let Pr=Ni(zt,1/$t),yn=(Co.upper*Co.upper-Co.fore*Co.fore+$t*$t)/(2*$t),Sr=Math.sqrt(Math.max(0,Co.upper*Co.upper-yn*yn)),Ho=[xn.side==="Left"?-.6:.6,-.8,.3];Ho=nl(Da(Ho,Ni(Pr,k1(Ho,Pr))));let ao=rl(at,rl(Ni(Pr,yn),Ni(Ho,Sr)));Co.T=rl(at,zt),Co.elbow=ao;let In=nl(Da(ao,at)),jo=Zo(XM(VM(it,Co.dir0),In),it);ko[vt]=jo,jn=Zo(Ga(it),jo)}else if(xn.part===1){let Q=Zo(ut(Da(Co.T,Co.elbow),pa),Ga(Co.qf0));ko[vt]=Q,jn=Zo(Ga(ko[fo.parent]),Q)}else{let Q=Yt[xn.side],ce=Zo(ut([xn.side==="Left"?.12:-.12,-.2-.1*Q.press,-1],pa),Ga(Co.qh0));ko[vt]=ce,jn=Zo(Ga(ko[fo.parent]),ce)}}if(jn){let Co=He[vt],Q=Zo(Ga(Co),Zo(jn,Co));Pn=ra(fo.t,Zo(fo.r,Q),fo.s)}Eo[vt]=fo.parent<0?rr(Ct,Pn):rr(Eo[fo.parent],Pn)}for(let vt=0;vt<O;vt++)gt[vt]=rr(Eo[vt],J[vt]);a.pianist={head:[Eo[re.Head][12],Eo[re.Head][13],Eo[re.Head][14]]};let to=W%4.3;return{blink:to<.16?Math.sin(to/.16*Math.PI):0}}function rt(W,Ze){if(k)return lt(W);if(M)return Rt(W,M);if(Ze)return xt(Ze);let Ve=Math.sin(W*2*Math.PI/4.2),yt=W%3.7,Et=yt<.16?Math.sin(yt/.16*Math.PI):0,Yt=Math.sin(W*.45),lo=Math.sin(W*.31+.8),eo=Math.max(0,Math.sin(W*.085)-.75)*4,oo={RightArm:[0,-22*eo,11*Yt],RightForeArm:[0,8+26*eo,0],RightHand:[38*lo,0,6*Math.sin(W*.7)],LeftUpLeg:[0,0,3.2*Math.sin(W*.36)],RightFoot:[5*Math.sin(W*.52+.4),0,0],Head:[0,1.6*Math.sin(W*.21),0]};["Index","Middle","Ring","Pinky"].forEach((Ct,no)=>{let Mo=Math.sin(W*1.1-no*.5);oo["RightHand"+Ct+"1"]=[0,0,8+12*Mo],oo["RightHand"+Ct+"2"]=[0,0,6+10*Mo]});let Ye={},ro=(Ct,no)=>{for(let Mo in Ct){let Eo=Ct[Mo],ko=Kf(Eo[0]*no,Eo[1]*no,Eo[2]*no);Ye[Mo]=Ye[Mo]?Zo(Ye[Mo],ko):ko}};ro(Jf,1),ro({Spine1:[Ve*.8,0,0],Spine2:[Ve*.6,0,0]},1),ro(oo,1);let bt=new Array(O),Lt=new Array(O);for(let Ct=0;Ct<O;Ct++){let no=ne[Ct],Mo=ee[Ct],Eo=Ye[no.name];if(Eo){let ko=He[Ct],pa=Zo(Ga(ko),Zo(Eo,ko));Mo=ra(no.t,Zo(no.r,pa),no.s)}bt[Ct]=no.parent<0?rr(mo,Mo):rr(bt[no.parent],Mo),Lt[Ct]=null}for(let Ct=0;Ct<O;Ct++)gt[Ct]=rr(bt[Ct],J[Ct]);let Ro=Ct=>[Ct[12],Ct[13],Ct[14]];return a.headPos=Ro(bt[re.Head]),a.hipsPos=Ro(bt[re.Hips]),a.headM=bt[re.Head],{blink:Et}}function Xt(W,Ze){let{pos:Ve,nrm:yt,jnt:Et,wgt:Yt,outP:lo,outN:eo,work:oo,m:Ye}=W,ro=Ye.n,bt=Ve;if(Ze){oo.set(Ve);for(let Lt in W.morphs){let Ro=Ze[Lt]||0;if(Ro<=0)continue;let Ct=W.morphs[Lt];for(let no=0;no<Ct.idx.length;no++){let Mo=Ct.idx[no]*3;oo[Mo]+=Ct.d[no*3]*Ro,oo[Mo+1]+=Ct.d[no*3+1]*Ro,oo[Mo+2]+=Ct.d[no*3+2]*Ro}}bt=oo}for(let Lt=0;Lt<ro;Lt++){let Ro=bt[Lt*3],Ct=bt[Lt*3+1],no=bt[Lt*3+2],Mo=yt[Lt*3],Eo=yt[Lt*3+1],ko=yt[Lt*3+2],pa=0,to=0,vt=0,fo=0,Pn=0,jn=0;for(let Co=0;Co<4;Co++){let Q=Yt[Lt*4+Co];if(Q===0)continue;let ce=gt[Et[Lt*4+Co]];pa+=Q*(ce[0]*Ro+ce[4]*Ct+ce[8]*no+ce[12]),to+=Q*(ce[1]*Ro+ce[5]*Ct+ce[9]*no+ce[13]),vt+=Q*(ce[2]*Ro+ce[6]*Ct+ce[10]*no+ce[14]),fo+=Q*(ce[0]*Mo+ce[4]*Eo+ce[8]*ko),Pn+=Q*(ce[1]*Mo+ce[5]*Eo+ce[9]*ko),jn+=Q*(ce[2]*Mo+ce[6]*Eo+ce[10]*ko)}lo[Lt*3]=pa,lo[Lt*3+1]=to,lo[Lt*3+2]=vt;let xn=Math.hypot(fo,Pn,jn)||1;eo[Lt*3]=fo/xn,eo[Lt*3+1]=Pn/xn,eo[Lt*3+2]=jn/xn}Ye.grid&&!Zt&&!M&&!k&&_(W),W.pb.subdata(lo),W.nbuf.subdata(eo)}function _(W){let[Ze,Ve]=W.m.grid,yt=W.outP,Et=W.outN,Yt=ox.seat+.012;for(let lo=1;lo<Ze;lo++){let eo=Math.pow(1-lo/(Ze-1),1.5);for(let oo=0;oo<Ve;oo++){let Ye=(lo*Ve+oo)*3;yt[Ye+1]>Yt?yt[Ye+1]=Yt+(yt[Ye+1]-Yt)*Math.max(eo,.15):yt[Ye+1]=Yt}}for(let lo=0;lo<Et.length;lo+=3)Et[lo]=0,Et[lo+1]=1,Et[lo+2]=0}let Zt=!1;function Jt(W,Ze){Zt=!!Ze;let Ve=rt(W,Ze),yt={eyeBlinkLeft:Ve.blink,eyeBlinkRight:Ve.blink};for(let Et of de)Xt(Et,Object.keys(Et.morphs).length?yt:null);a.pose=Ve}return{parts:de,update:Jt,drawOpaque:ie,drawBlend:ot,state:a}}function c(N,q,D){let ne=Math.min(1,Math.max(0,(D-N)/(q-N)));return ne*ne*(3-2*ne)}let f=QM(),l=ZM(),u=l?e.texture({data:l,flipY:!1,min:"linear",mag:"linear"}):i,h=e({vert:JM,frag:eE,attributes:{position:f.pos,normal:f.nrm,uv:f.uv,kind:f.kind},elements:new Uint16Array(f.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:u},cull:{enable:!1}}),d=tE(),p=e({vert:oE,frag:nE,attributes:{position:d.pos,normal:d.nrm,color:d.col,mat:d.mat},elements:new Uint16Array(d.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),v=e({vert:rE,frag:aE,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function m(N){let q=N.headM,D=de=>{let ie=Math.hypot(...de)||1;return de.map(ot=>ot/ie)},ne=D([q[4],q[5],q[6]]),O=D([q[8],q[9],q[10]]),re=ne,J=O.map(de=>-de),ee=[J[1]*re[2]-J[2]*re[1],J[2]*re[0]-J[0]*re[2],J[0]*re[1]-J[1]*re[0]],Qe=N.headPos,He=[0,1,2].map(de=>Qe[de]+ne[de]*.06+O[de]*.185);return[ee[0],ee[1],ee[2],0,J[0],J[1],J[2],0,re[0],re[1],re[2],0,He[0],He[1],He[2],1]}let g=-1,y="",b=null,M=null,k=!1;function z(N){if(!o)return;let q=(Qg.motion,r()),D=b?[b.x,b.z,b.heading,b.phase].map(O=>O.toFixed(4)).join():"";(M||k||D!==y||!b&&Math.abs(q-g)>(Qg.isPhone?1/30:0))&&(o.update(q,b),g=q,y=D);for(let O of o.parts)O.blend||(o.drawOpaque({pb:O.pb,nb:O.nbuf,uv:O.uvBuf,el:O.el,tex:O.tex,alphaCut:O.alphaCut,skin:O.skin,kind:O.kind,alphaScale:O.alphaScale}),O.sockEl&&o.drawOpaque({pb:O.pb,nb:O.nbuf,uv:O.uvBuf,el:O.sockEl,tex:i,alphaCut:0,skin:0,kind:8,alphaScale:1}));let ne=o.state;if(ne.headM&&!b&&!M&&!k){h({model:m(ne)});let O=ne.headPos,re=Math.sin(q*1.3)*.02,J=[O[0],O[1]+.62+re,O[2]+.05],ee=q*.6,Qe=ra(J,Zo(Ri([0,1,0],ee),Ri([0,0,1],.18)),[1.2,1.2,1.2]),He=.5+.5*Math.sin(q*2);p({model:Qe,pulse:He}),a.glowPos=J,a.glow=.06+.03*He,v({center:[J[0],J[1]-.12,J[2]],size:.1,pulse:He})}for(let O of o.parts)O.blend&&o.drawBlend({pb:O.pb,nb:O.nbuf,uv:O.uvBuf,el:O.el,tex:O.tex,alphaCut:O.alphaCut,skin:O.skin,kind:O.kind,alphaScale:O.alphaScale})}return z.state=a,z.place=_0,z.setWalk=N=>{b=N||null,b&&(a.glow=0)},z.setSeat=N=>{M=N||null,a.glow=M?0:a.glow,g=-1},z.setPiano=N=>{N=!!N,N!==k&&(k=N,k&&(a.glow=0),g=-1)},z};A1.exports.PLACE=_0});var T1=ve((jS,cx)=>{"use strict";cx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var z1=ve((BS,px)=>{"use strict";var ux=Zr(),lx=kc(),Ci=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function L1(){return ux.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var iE=`
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
`,fx=!1;function dx(){if(fx)return;fx=!0;let e=document.createElement("style");e.textContent=iE,document.head.appendChild(e)}var sE='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function cE(e){return!e||!e.visit||!L1()?"":(dx(),`<button type="button" class="visit-btn" data-visit="${Ci(e.slug||"")}" aria-label="Visit what remained: watch ${Ci(e.title)} come to life">${sE}<span>Visit what remained</span></button>`)}function lE(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var al=null;function fE(e){if(al||!e||!e.visit)return;dx();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(ux.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${Ci(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Ci(e.title)}, ${Ci(lx(e))}" src="${Ci(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Ci(e.title)}</span>
			<span class="visit-meta">${Ci(lx(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=lE(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),v()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),d()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let u=m=>m.stopImmediatePropagation();window.addEventListener("keyup",u,!0);let h=!1;function d(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function p(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>d()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&d()}),r.addEventListener("ended",d),r.addEventListener("error",d);function v(){if(al){al=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",u,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",v),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}d()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&v(),g.dataset.act==="again"&&(s.forEach(clearTimeout),p()))}),r.src=e.visit.video,al={close:v},requestAnimationFrame(()=>{n.classList.add("on"),c(p,1300)})}var hx={};function hE(e){if(!e||!e.visit||hx[e.visit.video]||!L1())return;hx[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}px.exports={available:L1,button:cE,open:fE,warm:hE,get active(){return!!al}}});var gx=ve((US,mx)=>{"use strict";var uE=Zr(),Fs=[0,0],Cs=[0,0],ri=null,R1=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(Fs[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),Fs[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),R1=performance.now())},{passive:!0});let e=()=>{R1=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(ri||(ri=[t.gamma,t.beta]),ri[0]+=(t.gamma-ri[0])*.01,ri[1]+=(t.beta-ri[1])*.01,Fs[0]=Math.max(-1,Math.min(1,(t.gamma-ri[0])/14)),Fs[1]=Math.max(-1,Math.min(1,(t.beta-ri[1])/14)))},{passive:!0})}var vx=0,Ps=null,oh=null,qa=[0,0,0],N1=0,Is=null,Os=0,M0={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},dE={apply(e,t){let o=Math.min(.1,Math.max(0,t-vx));vx=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let f=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],l=!Ps;if(Ps&&o>0){let b=[n[0]-Ps[0],n[1]-Ps[1],n[2]-Ps[2]],M=Math.hypot(b[0],b[1],b[2]);if(M>2.5)l=!0;else{let z=Math.min(1,o*5);for(let N=0;N<3;N++)qa[N]+=(b[N]/o-qa[N])*z}let k=Math.hypot(r[0]-oh[0],r[1]-oh[1],r[2]-oh[2]);Os=M/o<.12&&k/o<.2?Os+o:0}l&&(qa[0]=qa[1]=qa[2]=0,Os=0),Ps=n.slice(),oh=r.slice(),N1=Math.hypot(qa[0],qa[1],qa[2]);let u=Math.min(1,o*2.6);Cs[0]+=(Fs[0]-Cs[0])*u,Cs[1]+=(Fs[1]-Cs[1])*u;let h=Math.max(.03,Math.min(.32,i*.05)),d=(uE.isPhone&&!ri?1.5:1)*Math.min(1,Os/2.5),p=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*d,v=Math.sin(t*.097+.6)*h*.16*d,m=Cs[0]*h+p,g=-Cs[1]*h*.45+v;for(let b=0;b<3;b++)M0.eye[b]=n[b]+s[b]*m+f[b]*g,M0.target[b]=r[b]+(s[b]*m+f[b]*g)*.12;n[1]>.05&&(M0.eye[1]=Math.max(.05,M0.eye[1]));let y=qa[0]*s[0]+qa[2]*s[2];return M0.fov=e.fov+Math.min(3.5,N1*.55),M0.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),M0},pull(e,t){(Is===null||!(Math.abs(e.focus-Is)<40))&&(Is=e.focus);let o=1/60;Is+=(e.focus-Is)*Math.min(1,o*3.2),e.focus=Is,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,Os/3))},get speed(){return N1},get resting(){return Os>2&&performance.now()-R1>2e3}};mx.exports=dE});var C1=ve((WS,xx)=>{xx.exports=1e-6});var P1=ve((VS,yx)=>{yx.exports=pE;function pE(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var wx=ve((XS,bx)=>{bx.exports=vE;function vE(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var I1=ve((YS,_x)=>{_x.exports=mE;function mE(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var O1=ve((KS,Mx)=>{Mx.exports=gE;function gE(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var F1=ve((QS,Ex)=>{Ex.exports=xE;function xE(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Tx=ve((ZS,Ax)=>{Ax.exports=bE;var kx=I1(),Sx=O1(),yE=F1();function bE(e,t){var o=kx(e[0],e[1],e[2]),n=kx(t[0],t[1],t[2]);Sx(o,o),Sx(n,n);var r=yE(o,n);return r>1?0:Math.acos(r)}});var zx=ve((JS,Lx)=>{Lx.exports=wE;function wE(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Rx=ve((eA,Nx)=>{Nx.exports=_E;function _E(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var Px=ve((tA,Cx)=>{Cx.exports=ME;var $1=C1();function ME(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=$1*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=$1*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=$1*Math.max(1,Math.abs(r),Math.abs(s))}});var Ox=ve((oA,Ix)=>{Ix.exports=EE;function EE(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var $x=ve((nA,Fx)=>{Fx.exports=kE;function kE(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var G1=ve((rA,Gx)=>{Gx.exports=SE;function SE(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var qx=ve((aA,Dx)=>{Dx.exports=G1()});var D1=ve((iA,Hx)=>{Hx.exports=AE;function AE(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var Bx=ve((sA,jx)=>{jx.exports=D1()});var q1=ve((cA,Ux)=>{Ux.exports=TE;function TE(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var Vx=ve((lA,Wx)=>{Wx.exports=q1()});var Yx=ve((fA,Xx)=>{Xx.exports=LE;function LE(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var Qx=ve((hA,Kx)=>{Kx.exports=zE;function zE(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var Jx=ve((uA,Zx)=>{Zx.exports=NE;function NE(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var t3=ve((dA,e3)=>{e3.exports=RE;function RE(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var n3=ve((pA,o3)=>{o3.exports=CE;function CE(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var a3=ve((vA,r3)=>{r3.exports=PE;function PE(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var s3=ve((mA,i3)=>{i3.exports=IE;function IE(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var H1=ve((gA,c3)=>{c3.exports=OE;function OE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var f3=ve((xA,l3)=>{l3.exports=H1()});var j1=ve((yA,h3)=>{h3.exports=FE;function FE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var d3=ve((bA,u3)=>{u3.exports=j1()});var B1=ve((wA,p3)=>{p3.exports=$E;function $E(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var m3=ve((_A,v3)=>{v3.exports=B1()});var U1=ve((MA,g3)=>{g3.exports=GE;function GE(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var y3=ve((EA,x3)=>{x3.exports=U1()});var w3=ve((kA,b3)=>{b3.exports=DE;function DE(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var M3=ve((SA,_3)=>{_3.exports=qE;function qE(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var k3=ve((AA,E3)=>{E3.exports=HE;function HE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var A3=ve((TA,S3)=>{S3.exports=jE;function jE(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var L3=ve((LA,T3)=>{T3.exports=BE;function BE(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var N3=ve((zA,z3)=>{z3.exports=UE;function UE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var C3=ve((NA,R3)=>{R3.exports=WE;function WE(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var I3=ve((RA,P3)=>{P3.exports=VE;function VE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],f=o[3],l=f*n+s*a-c*r,u=f*r+c*n-i*a,h=f*a+i*r-s*n,d=-i*n-s*r-c*a;return e[0]=l*f+d*-i+u*-c-h*-s,e[1]=u*f+d*-s+h*-i-l*-c,e[2]=h*f+d*-c+l*-s-u*-i,e}});var F3=ve((CA,O3)=>{O3.exports=XE;function XE(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=r+i*f-s*c,e[2]=a+i*c+s*f,e}});var G3=ve((PA,$3)=>{$3.exports=YE;function YE(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var q3=ve((IA,D3)=>{D3.exports=KE;function KE(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var j3=ve((OA,H3)=>{H3.exports=QE;var Pi=P1()();function QE(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)Pi[0]=e[i],Pi[1]=e[i+1],Pi[2]=e[i+2],r(Pi,Pi,a),e[i]=Pi[0],e[i+1]=Pi[1],e[i+2]=Pi[2];return e}});var U3=ve((FA,B3)=>{B3.exports={EPSILON:C1(),create:P1(),clone:wx(),angle:Tx(),fromValues:I1(),copy:zx(),set:Rx(),equals:Px(),exactEquals:Ox(),add:$x(),subtract:G1(),sub:qx(),multiply:D1(),mul:Bx(),divide:q1(),div:Vx(),min:Yx(),max:Qx(),floor:Jx(),ceil:t3(),round:n3(),scale:a3(),scaleAndAdd:s3(),distance:H1(),dist:f3(),squaredDistance:j1(),sqrDist:d3(),length:B1(),len:m3(),squaredLength:U1(),sqrLen:y3(),negate:w3(),inverse:M3(),normalize:O1(),dot:F1(),cross:k3(),lerp:A3(),random:L3(),transformMat4:N3(),transformMat3:C3(),transformQuat:I3(),rotateX:F3(),rotateY:G3(),rotateZ:q3(),forEach:j3()}});var X3=ve(($A,V3)=>{"use strict";function W3(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}V3.exports=function(t){let o=t.ownerDocument||document,n=W3(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let u=l.call(t);u&&u.catch&&u.catch(()=>{})}catch(u){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=W3(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var J3=ve((qA,Z3)=>{"use strict";var E0=_s(),k0=U3(),ZE=X3(),GA=Math.PI/4,DA=Math.PI/6,Y3=2,JE=1,e8=2.4,t8=2.4,o8=1e3,n8=5,r8=7,W1=er().C,il=[[7,1.6],[7,W1.zc],[W1.x1-2.95,W1.zc]],Ii=il.slice(1).map((e,t)=>{let o=il[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),V1=Ii.reduce((e,t)=>e+t.len,0);function K3(e){let t=Math.max(0,Math.min(V1,e));for(let n of Ii){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=il[il.length-1];return[o[0],o[1]]}function a8(e){let t=0;for(let n=0;n<Ii.length;n++){let r=Ii[n],a=t+r.len;if(e<a-1e-4||n===Ii.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?Ii[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=Ii[Ii.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var i8=Math.PI/4,s8=7,c8=140,l8=70,Q3=(e,t,o)=>(1-e)*t+e*o,f8=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Z3.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[r8,Y3,il[0][1]],c=0,f=1,l=0,u=[.707,0,.707],h=[0,1,0],d=[0,0,0],p=.5,v=E0.identity([]),m=E0.identity([]),g=!1,y=[0,0,0],b=[0,0,0],M=1,k=!1;let z=Xe=>{n[1]+=Xe*i8},N=(Xe,xt,Rt)=>{if(Xe=Math.max(Math.min(Xe,100),-100),xt=Math.max(Math.min(xt,100),-100),n[0]=0,k){a=0;return}for(a+=Xe;a>=Rt;)z(1),a-=Rt;for(;a<=-Rt;)z(-1),a+=Rt};ZE(document.body).on("attain",Xe=>{Xe.on("data",xt=>{N(xt.dx,xt.dy,c8)})});let D=null,ne=null,O=0,re={x:0,y:0},J=58,ee=document.createElement("div");ee.id="museum-mobile-controls",ee.innerHTML=`

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
	`,document.body.appendChild(ee);let Qe=ee.querySelector("#museum-joystick"),He=ee.querySelector("#museum-joystick-knob"),de=()=>{He.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},ie=Xe=>{let xt=Xe.clientX-re.x,Rt=Xe.clientY-re.y,pt=Math.hypot(xt,Rt);if(pt>J&&(xt=xt/pt*J,Rt=Rt/pt*J),He.style.transform=`translate(
				calc(-50% + ${xt}px),
				calc(-50% + ${Rt}px)
			)`,pt<10){i[0]=0,i[2]=0;return}let Qt=xt/J,tt=Rt/J;i[0]=0,i[2]=Math.abs(tt)>.15?tt:0},ot=(Xe,xt)=>{for(let Rt=0;Rt<Xe.length;Rt++)if(Xe[Rt].identifier===xt)return Xe[Rt];return null},ht=Xe=>!!(Xe&&Xe.closest&&Xe.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Ft=Xe=>{if(!ht(Xe.target)&&(Xe.cancelable&&Xe.preventDefault(),!k))for(let xt=0;xt<Xe.changedTouches.length;xt++){let Rt=Xe.changedTouches[xt];if(D===null&&Rt.clientX<window.innerWidth*.48){D=Rt.identifier;let pt=Qe.getBoundingClientRect();re.x=pt.left+pt.width/2,re.y=pt.top+pt.height/2,ie(Rt)}else ne===null&&Rt.clientX>=window.innerWidth*.48&&(ne=Rt.identifier,O=Rt.clientX,a=0)}},Tt=Xe=>{if(ht(Xe.target)||(Xe.cancelable&&Xe.preventDefault(),k))return;let xt=D===null?null:ot(Xe.touches,D);xt&&ie(xt);let Rt=ne===null?null:ot(Xe.touches,ne);if(Rt){let pt=Rt.clientX-O;O=Rt.clientX,N(pt,0,l8)}},mo=Xe=>{if(!ht(Xe.target)){Xe.cancelable&&Xe.preventDefault();for(let xt=0;xt<Xe.changedTouches.length;xt++){let Rt=Xe.changedTouches[xt];Rt.identifier===D&&(D=null,de()),Rt.identifier===ne&&(ne=null)}}};document.addEventListener("touchstart",Ft,{passive:!1}),document.addEventListener("touchmove",Tt,{passive:!1}),document.addEventListener("touchend",mo,{passive:!1}),document.addEventListener("touchcancel",mo,{passive:!1});let gt=document.createElement("style");gt.textContent=`

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
	`,document.head.appendChild(gt);var Vt={};let qo=Xe=>{if(Xe.defaultPrevented||Xe.ctrlKey||Xe.altKey||Xe.metaKey)return;let xt=Xe.type==="keydown";Vt[Xe.code]=xt,xt&&!Xe.repeat&&!k&&((Xe.code==="KeyA"||Xe.code==="ArrowLeft")&&z(-1),(Xe.code==="KeyD"||Xe.code==="ArrowRight")&&z(1)),g=!1;let Rt=Vt.KeyW||Vt.ArrowUp?1:0;i=[0,0,(Vt.KeyS||Vt.ArrowDown?1:0)-Rt],Xe.preventDefault()};window.addEventListener("keydown",qo),window.addEventListener("keyup",qo);var ur=0;return{pos:s,fmouse:r,forward:u,up:h,setPaused:Xe=>{k=!!Xe,k&&(i[0]=0,i[2]=0,de())},place:(Xe,xt)=>{c=Math.max(0,Math.min(V1,Xe));let Rt=K3(c);s[0]=Rt[0],s[2]=Rt[1],n[1]=xt,r[1]=xt,a=0,f=1},view:()=>v,proj:()=>(E0.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Xe})=>{let xt=Xe-ur;ur=Xe;let Rt=[0,0,0],pt=[];k0.set(u,Math.sin(r[1]),0,-Math.cos(r[1])),k0.set(h,0,1,0);let ut=g?t8:e8,Qt=Math.sin(n[1]),tt=-Math.cos(n[1]),Ae=a8(c),Pe=Qt*Ae.ahead[0]+tt*Ae.ahead[1],Mt=Qt*Ae.back[0]+tt*Ae.back[1],lt=f;Math.max(Pe,Mt)>.3&&(lt=Pe>=Mt?1:-1);let rt=k?0:-i[2]*ut;l+=(rt-l)*(1-Math.exp(-Math.min(xt,.1)*5.5)),rt===0&&Math.abs(l)<.01&&(l=0);let Xt=l*lt*Math.min(xt,.1);k&&(i[0]=0,i[2]=0,Xt=0,l=0),Xt!==0&&(f=Math.sign(Xt)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(V1,c+Xt));let _=K3(c);k0.set(d,_[0]-s[0],0,_[1]-s[2]);let Zt=k0.len(d);Zt===0&&p!==.25&&(p=(Math.abs((p+.5)%1-.5)-.25)*.8+.25,(p+.01)%.25<.02&&(p=.25));let Jt=p;if(p+=Zt/(g?n8:o8),s[1]=Y3,k0.add(s,s,d),M<1){M+=xt/JE,M=Math.min(M,1);let W=f8(M);k0.set(s,Q3(W,y[0],b[0]),s[1],Q3(W,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(xt,.1)*s8),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),E0.identity(v),E0.rotateX(v,v,0),E0.rotateY(v,v,r[1]),E0.translate(v,v,k0.scale(Rt,s,-1))}}}});var ty=ve((HA,ey)=>{"use strict";var{skylightGLSL:h8,Z_START:u8,Z_END:d8,GLASS_Y:p8}=fs(),{oculusGLSL:v8,A:S0}=ta(),{windowLightGLSL:m8,C:nh}=er(),{doorLightGLSL:g8}=pi(),rh=tr(),ah=Nf(),aa=e=>e.toFixed(4),X1=.1,Y1=700,$s={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function x8(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,M=o*f-a*i,k=n*c-r*s,z=n*f-a*s,N=r*f-a*c,q=l*v-u*p,D=l*m-h*p,ne=l*g-d*p,O=u*m-h*v,re=u*g-d*v,J=h*g-d*m,ee=y*J-b*re+M*O+k*ne-z*D+N*q;return ee?(ee=1/ee,e[0]=(s*J-c*re+f*O)*ee,e[1]=(r*re-n*J-a*O)*ee,e[2]=(v*N-m*z+g*k)*ee,e[3]=(h*z-u*N-d*k)*ee,e[4]=(c*ne-i*J-f*D)*ee,e[5]=(o*J-r*ne+a*D)*ee,e[6]=(m*M-p*N-g*b)*ee,e[7]=(l*N-h*M+d*b)*ee,e[8]=(i*re-s*ne+f*q)*ee,e[9]=(n*ne-o*re-a*q)*ee,e[10]=(p*z-v*M+g*y)*ee,e[11]=(u*M-l*z-d*y)*ee,e[12]=(s*D-i*O-c*q)*ee,e[13]=(o*O-n*D+r*q)*ee,e[14]=(v*b-p*k-m*y)*ee,e[15]=(l*k-u*b+h*y)*ee,e):null}function y8(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var b8=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;ey.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>t.post>=2?2:4,i=de=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},de||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=e.framebuffer({color:c,depth:f||!0}),u=[s(),s()],h=[s(),s()],d=[s(),s()],p=[s(),s()],v=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},M=(de,ie,ot)=>e(Object.assign({vert:b8,frag:de,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:ie,framebuffer:e.prop("out")},ot||{})),k=[2.6,0,u8-3.2,12.6,p8,d8+.4],z=[S0.x0-.2,0,S0.z0,S0.x1,S0.domeTop,S0.z1],N=[nh.x0,0,nh.z0,nh.x1,7.6,nh.z1],q=[.35,0,.35,13.65,7.6,9],D=de=>`vec3(${aa(de[0])}, ${aa(de[1])}, ${aa(de[2])}), vec3(${aa(de[3])}, ${aa(de[4])}, ${aa(de[5])})`,ne=M(`
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
			vec2 t = hitBox(eye, rd, ${D(k)});
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
			vec2 t = hitBox(eye, rd, ${D(z)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${aa(S0.dome.base)} && p.x > ${aa(S0.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${D(N)});
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
			vec2 t = hitBox(eye, rd, ${D(q)});
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
	}`,{depthTex:()=>f,invVP:()=>v,eye:()=>g,time:e.context("time"),night:()=>rh.night,strength:()=>O}),O=[0,0,0,0];function re(){let de=$s.shafts*y.shafts,ie=rh.night;return O[0]=ah.box(k)?.06*de*(1+.9*ie):0,O[1]=ah.box(z,!1,"court")?.1*de*(1+.9*ie):0,O[2]=ah.box(N)?.07*de*(1+.4*ie):0,O[3]=ah.box(q)?.04*de*(1-.75*ie):0,O[0]+O[1]+O[2]+O[3]>5e-4}let J=M(`
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
	}`,{src:e.prop("src"),dir:(de,ie)=>[ie.dir[0]/ie.size[0],ie.dir[1]/ie.size[1]]}),ee=M(`
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
	}`,{src:e.prop("src"),texel:(de,ie)=>[.5/ie.size[0],.5/ie.size[1]],threshold:e.prop("threshold")}),Qe=M(`
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
		return 2.0 * ${aa(X1)} * ${aa(Y1)} / (${aa(Y1+X1)} - z * ${aa(Y1-X1)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>u[0],bloomA:()=>h[0],bloomB:()=>d[0],shafts:()=>p[0],res:()=>[l.width,l.height],time:e.context("time"),exposure:()=>$s.exposure*y.exposure,vignette:()=>Math.min(1,$s.vignette+y.vignette+.22*rh.night),night:()=>rh.night,grain:()=>$s.grain,bloomK:()=>$s.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>t.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),He=e({framebuffer:()=>l});return{shot:y,look:$s,hasDepth:n,capture(de,ie,ot){let ht=Math.max(.4,Math.min(1,t.scale||1)),Ft=Math.max(2,Math.round(de.drawingBufferWidth*ht/2)*2),Tt=Math.max(2,Math.round(de.drawingBufferHeight*ht/2)*2);(l.width!==Ft||l.height!==Tt)&&l.resize(Ft,Tt);let mo=Math.max(1,Math.ceil(Ft/2)),gt=Math.max(1,Math.ceil(Tt/2));u.forEach(Vt=>Vt.resize(mo,gt)),h.forEach(Vt=>Vt.resize(Math.max(1,Math.ceil(Ft/4)),Math.max(1,Math.ceil(Tt/4)))),d.forEach(Vt=>Vt.resize(Math.max(1,Math.ceil(Ft/8)),Math.max(1,Math.ceil(Tt/8)))),p.forEach(Vt=>Vt.resize(Math.max(1,Math.ceil(Ft/a())),Math.max(1,Math.ceil(Tt/a())))),y8(m,ie.proj,ie.view),x8(v,m),g[0]=ie.eye[0],g[1]=ie.eye[1],g[2]=ie.eye[2],He(()=>{e.clear({color:[0,0,0,1],depth:1}),ot()})},present(){let de=ie=>[ie.width,ie.height];n&&t.post>=1&&re()?(ne({out:p[0]}),J({out:p[1],src:p[0],dir:[1,0],size:de(p[0])}),J({out:p[0],src:p[1],dir:[0,1],size:de(p[0])})):e.clear({color:[0,0,0,1],framebuffer:p[0]}),ee({out:u[0],src:c,size:[l.width,l.height],threshold:0}),J({out:u[1],src:u[0],dir:[1,0],size:de(u[0])}),J({out:u[0],src:u[1],dir:[0,1],size:de(u[0])}),ee({out:h[0],src:u[0],size:de(u[0]),threshold:.42}),J({out:h[1],src:h[0],dir:[1,0],size:de(h[0])}),J({out:h[0],src:h[1],dir:[0,1],size:de(h[0])}),ee({out:d[0],src:h[0],size:de(h[0]),threshold:0}),J({out:d[1],src:d[0],dir:[1.5,0],size:de(d[0])}),J({out:d[0],src:d[1],dir:[0,1.5],size:de(d[0])}),Qe({out:null})}}}});var iy=ve((jA,ay)=>{"use strict";var oy=tr().GLSL,w8=n0(),K1=pi(),{C:_8,FAR_DOOR:M8}=er(),E8=100*Math.PI/180,ny=e=>[M8.x-e[2],e[1],_8.zc-7+e[0]],ry=e=>[-e[2],e[1],e[0]];function k8(e){let t=[],o=[],n=[],r=[],a=w8.createBuilder(t,o,n,r);K1.addFrames(a,e);let i=K1.glassPanes(e),s=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:s(t),normal:s(o),elements:n,glass:i}}ay.exports=e=>{let t=K1.DOOR,o=["left","right"].map(l=>{let u=k8(l),h=u.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:u.position.map(d=>d.slice()),srcN:u.normal.map(d=>d.slice()),srcG:u.glass.map(d=>d.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(u.elements),type:"uint32"}),glassCount:u.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(u.glass.length*3),outGN:new Float32Array(u.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let u of o){let h=u.sign*l,d=Math.cos(h),p=Math.sin(h),v=y=>{let b=y[0]-u.hinge,M=y[2];return[u.hinge+b*d+M*p,y[1],-b*p+M*d]},m=y=>[y[0]*d+y[2]*p,y[1],-y[0]*p+y[2]*d];u.src.forEach((y,b)=>{let M=ny(v(y));u.outP.set(M,b*3),u.outN.set(ry(m(u.srcN[b])),b*3)});let g=ry(m([0,0,1]));u.srcG.forEach((y,b)=>{u.outG.set(ny(v(y)),b*3),u.outGN.set(g,b*3)}),u.pos.subdata(u.outP),u.nrm.subdata(u.outN),u.gpos.subdata(u.outG),u.gnrm.subdata(u.outGN)}}}r(0);let a=`
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
		${oy}
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
		${oy}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*E8);for(let l of o)i({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var cy=ve((BA,sy)=>{"use strict";var S8=tr().GLSL,{skylightGLSL:A8}=fs(),{oculusGLSL:T8}=ta(),{windowLightGLSL:L8}=er(),ka=.22;function z8(){let e=[],t=[],o=[],n=[],i=(l,u)=>{let h=ka*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(u>0?1.06:.94),d=l*ka-ka*.12,p=u*h,v=Math.abs(u)*h*.42-.14*l*l*ka;v+=Math.sin(l*17+(u>0?0:2.1))*.012*ka*u*u;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=v*g-p*y,M=v*y+p*g;return[d,b,M+.05*ka*l*l]},s=(l,u)=>{let d=i(Math.min(1,l+.01),u),p=i(Math.max(0,l-.01),u),v=i(l,Math.min(1,u+.01)),m=i(l,Math.max(-1,u-.01)),g=[d[0]-p[0],d[1]-p[1],d[2]-p[2]],y=[v[0]-m[0],v[1]-m[1],v[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],M=Math.hypot(b[0],b[1],b[2])||1,k=b[1]<0?-1:1;return[b[0]/M*k,b[1]/M*k,b[2]/M*k]};for(let l=0;l<=18;l++){let u=l/18;for(let h=0;h<=5*2;h++){let d=h/5-1;e.push(i(u,d)),t.push(s(Math.min(.97,Math.max(.03,u)),d)),o.push([u,d])}}let c=5*2+1;for(let l=0;l<18;l++)for(let u=0;u<c-1;u++){let h=l*c+u,d=h+1,p=h+c,v=p+1;n.push([h,p,d],[d,p,v])}let f=e.length;return e.push([-ka*.12,0,-.003],[-ka*.12,0,.003],[-ka*.24,-.01,.0015],[-ka*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:e,nrm:t,uv:o,idx:n}}sy.exports=e=>{let t=z8(),o=e({vert:`
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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=tr(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(ka*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var hy=ve((UA,fy)=>{"use strict";var{skylightGLSL:N8,Z_START:ly,Z_END:R8}=fs(),{oculusGLSL:C8,A:Gs}=ta(),{windowLightGLSL:P8,C:A0}=er();fy.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=A0.x0+.6,f=A0.x1-.3,l=[];for(let p=0;p<o;p++)l.push([2.5+s()*10.5,.3+s()*8,ly-3.5+s()*(R8-ly+4.5),s()]);for(let p=0;p<n;p++)l.push([Gs.x0+.3+s()*(Gs.x1-Gs.x0-.6),.3+s()*7.5,Gs.z0+.3+s()*(Gs.z1-Gs.z0-.6),s()]);for(let p=0;p<r;p++)l.push([c+s()*(f-c),.2+s()*5.6,A0.z0+.25+s()*(A0.z1-A0.z0-.5),s()]);let u=p=>p.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],d=e({vert:`
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
				p.z = clamp(p.z, ${u(A0.z0+.1)}, ${u(A0.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:p=>p.viewportHeight*.006,focus:(p,v)=>v&&v.focus||6,aperture:(p,v)=>v&&v.aperture||0,wake0:(p,v)=>(v&&v.wake||h)[0],wake1:(p,v)=>(v&&v.wake||h)[1],wake2:(p,v)=>(v&&v.wake||h)[2],wake3:(p,v)=>(v&&v.wake||h)[3],wakeDir:(p,v)=>v&&v.wakeDir||[0,0,1],gust:(p,v)=>v&&v.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return p=>d(p||{})}});var gy=ve((WA,my)=>{"use strict";var{C:vy}=er(),uy=tr(),dy=15.3,I8=37.1,py=vy.z1+.9,O8=vy.z1+.7+16-.6;my.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([dy+r()*(I8-dy),l,py+r()*(O8-py),r()])}let i=[],s=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>uy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){uy.night>.01&&c()}}});var ch=ve((VA,Hr)=>{"use strict";var xy=tr(),Ha=bi(),F8=_s(),Fi=Math.PI,et=e=>(+e).toFixed(4),Sa=e=>`vec3(${et(e[0])}, ${et(e[1])}, ${et(e[2])})`,$o={x0:-2.05,z0:41.45,z1:47.55,top:5.1},vo=-.55,Cn=-2,Jo=42.25,kn=43.65,ca=45.35,_r=46.75,Hn=2.75,Dr=.12,$8=(vo+Cn)/2,Lo={x:-1.3,y:1.42,w:.42,h:.52,z:kn,cell:.026},At={x0:-1.85,x1:-.75,top:.98,z0:kn-.3,z1:kn-.02},ia={x0:-1.44,x1:-1.16,y0:At.top-.002,y1:At.top+.018},qr={cx:-1.3,cz:kn-.165,w:.2,d:.255,y:At.top+.0012},Qn={x:-1.03,z:kn-.14,r:.042,h:.075},Do={x:-.86,z:kn-.12,h:.085,r:.019};Do.flame=[Do.x,At.top+.012+Do.h+.028,Do.z];var sh={a:[Qn.x-.004,At.top+.03,Qn.z+.004],b:[Qn.x-.13,At.top+.34,Qn.z-.12]},en=[-1.5,2.42,44.66],En=[-1.78,1.95,Jo+.09],sa={x:-1.32,z:44.08,y:.64,heading:.32},wy={window:{eye:[-1.3,1.33,42.8],target:[Lo.x,1.37,kn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[qr.cx,At.top,qr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},fr={z0:(Jo+kn)/2+.03,z1:(Jo+kn)/2+.56,y0:.98,y1:1.78,x:vo+.03,cell:.047};wy.peek={eye:[-1.2,1.42,42.95],target:[Ha.PLAY.stoolX-Ha.OFF[0],.85,Ha.PLAY.keyFront+.2],fov:30};var Oi={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function yy(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${et(Lo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Sa(en)};
		if (d.z > -0.001) return 0.0;
		float t = (${et(Lo.z)} - ${et(en[2])}) / d.z;
		vec2 g = (${Sa(en)} + d * t).xy - vec2(${et(Lo.x)}, ${et(Lo.y)});
		float inWin = (1.0 - smoothstep(${et(Lo.w/2-.01)}, ${et(Lo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${et(Lo.h/2-.01)}, ${et(Lo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${et(Lo.z)}) / abs(${et(Lo.z)} - ${et(en[2])}) / ${et(Lo.cell)};
		vec2 qc = fract(g / ${et(Lo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Sa(Do.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${et(Qn.x)}, ${et(Qn.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${et(Qn.x)}, ${et(Qn.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${et(Qn.r*.7)}, ${et(Qn.r*1.6)}, r)) * (1.0 - smoothstep(${et(At.top+Qn.h*.8)}, ${et(At.top+Qn.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Sa(sh.a)}, qb = ${Sa(sh.b)};
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
		bool inB1 = p.z < ${et(kn)} && p.z > ${et(Jo-.04)} && p.x < ${et(vo+.02)};
		bool inPriest = p.z >= ${et(kn)} && p.z < ${et(ca)} && p.x < ${et(vo)};
		bool inB2 = p.z >= ${et(ca)} && p.z < ${et(_r+.04)} && p.x < ${et(vo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${et(Cn)}, ${et(vo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${et($o.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Sa(Ha.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Sa(en)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Sa(En)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Sa(Do.flame)} - p;
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
	}`}var Rn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function _y(){let e=[],t=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],i=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],s=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(f,l,u,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),o.push(u),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,u,h,d,p)=>{let v=s(i(a(l,f),a(h,f)));p=p||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,v,d,p[0]),g=c.v(l,v,d,p[1]),y=c.v(u,v,d,p[2]),b=c.v(h,v,d,p[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,u,h,d,p,v)=>{let m=(g,y,b,M,k,z,N,q)=>c.quad(g,y,b,M,v,[[k,N],[z,N],[z,q],[k,q]]);m([h,l,u],[h,l,p],[h,d,p],[h,d,u],u,p,l,d),m([f,l,p],[f,l,u],[f,d,u],[f,d,p],p,u,l,d),m([f,d,u],[h,d,u],[h,d,p],[f,d,p],f,h,u,p),m([f,l,p],[h,l,p],[h,l,u],[f,l,u],f,h,p,u),m([f,l,p],[h,l,p],[h,d,p],[f,d,p],f,h,l,d),m([h,l,u],[f,l,u],[f,d,u],[h,d,u],h,f,l,d)},c.tube=(f,l,u,h)=>{h=h||6;let d=e.length/3;for(let p=0;p<f.length;p++){let v=f[Math.max(0,p-1)],m=f[Math.min(f.length-1,p+1)],g=s(a(m,v)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),M=i(b,g),k=typeof l=="function"?l(p/(f.length-1)):l;for(let z=0;z<=h;z++){let N=z/h*Fi*2,q=Math.cos(N),D=Math.sin(N),ne=[b[0]*q+M[0]*D,b[1]*q+M[1]*D,b[2]*q+M[2]*D];c.v([f[p][0]+ne[0]*k,f[p][1]+ne[1]*k,f[p][2]+ne[2]*k],ne,u,[p/(f.length-1),z/h])}}for(let p=0;p<f.length-1;p++)for(let v=0;v<h;v++){let m=d+p*(h+1)+v,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,u,h,d)=>{d=d||20;let p=e.length/3;for(let v=0;v<u.length;v++){let[m,g]=u[v],y=u[Math.max(0,v-1)],b=u[Math.min(u.length-1,v+1)],M=b[0]-y[0],k=b[1]-y[1];for(let z=0;z<=d;z++){let N=z/d*Fi*2,q=Math.cos(N),D=Math.sin(N),ne=s([k*q,-M,k*D]);c.v([f+q*m,g,l+D*m],ne,h,[z/d,v/(u.length-1)])}}for(let v=0;v<u.length-1;v++)for(let m=0;m<d;m++){let g=p+v*(d+1)+m,y=g+d+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,u,h,d,p)=>{let v=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=v[m],y=v[(m+1)%4],b=[f+g[0],u,l+g[1]],M=[f+y[0],u,l+y[1]],k=[f,d,l],z=s(i(a(k,b),a(M,b))),N=c.v(b,z,p,[0,0]),q=c.v(M,z,p,[1,0]),D=c.v(k,z,p,[.5,1]);r.push(N,D,q)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,u,h]=[r[f],r[f+1],r[f+2]],d=m=>[e[m*3],e[m*3+1],e[m*3+2]],p=i(a(d(u),d(l)),a(d(h),d(l))),v=[0,1,2].map(m=>t[l*3+m]+t[u*3+m]+t[h*3+m]);p[0]*v[0]+p[1]*v[1]+p[2]*v[2]<0&&(r[f+1]=h,r[f+2]=u)}return c},c}function ih(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var Ko={ys:1.78,a:.56,r:.78};Ko.apex=Ko.ys+Math.sqrt(Ko.r*Ko.r-(Ko.r-Ko.a)*(Ko.r-Ko.a));function G8(){let e=_y(),t=Rn.WOOD,o=Rn.CARVED,n=Rn.DARKWOOD,r=.06;e.box(Cn,0,Jo,vo+.08,Dr,_r,n),e.box(Cn,Hn-.06,Jo-.04,vo+.1,Hn,_r+.04,t),e.box(vo,Hn-.2,Jo-.06,vo+.12,Hn-.06,_r+.06,t),e.box(vo+.02,Hn,Jo-.08,vo+.14,Hn+.07,_r+.08,n),e.box(Cn,Dr,Jo,Cn+.04,Hn-.06,_r,t);for(let[l,u,h]of[[Jo-r,Jo,-1],[_r,_r+r,1]]){e.box(Cn,0,l,vo+.08,Hn,u,t);let d=h<0?l-.018:u;e.box(Cn+.18,.45,Math.min(d,d+.018),vo-.12,2.35,Math.max(d,d+.018),n),e.box(Cn+.26,.55,Math.min(d,d+.03*h),vo-.2,2.25,Math.max(d,d+.03*h),t)}{let l=kn-.02,u=kn+.02,h=Lo.x-Lo.w/2,d=Lo.x+Lo.w/2,p=Lo.y-Lo.h/2,v=Lo.y+Lo.h/2;e.box(Cn,Dr,l,vo,ia.y0,u,t),e.box(Cn,ia.y0,l,ia.x0,ia.y1,u,t),e.box(ia.x1,ia.y0,l,vo,ia.y1,u,t),e.box(Cn,ia.y1,l,vo,p,u,t),e.box(Cn,p,l,h,v,u,t),e.box(d,p,l,vo,v,u,t),e.box(Cn,v,l,vo,Hn-.06,u,t);let m=.05,g=l-.025;e.box(h-m,p-m,g,d+m,p,l,n),e.box(h-m,v,g,d+m,v+m,l,n),e.box(h-m,p,g,h,v,l,n),e.box(d,p,g,d+m,v,l,n),e.box(h-m-.02,v+m,g-.015,d+m+.02,v+m+.03,l,t),e.box(ia.x0-.01,ia.y1,l-.006,ia.x1+.01,ia.y1+.008,l,Rn.BRASS)}{let l=fr,u=vo+.008,h=vo+.052;e.box(u,l.y0,l.z0-.035,h,l.y1,l.z0,n),e.box(u,l.y0,l.z0,h,l.y0+.04,l.z1,n),e.box(u,l.y1-.04,l.z0,h,l.y1,l.z1,n),e.box(u+.008,Dr,l.z0-.035,h-.008,l.y0,l.z1,t),e.box(h-.008,Dr+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),e.box(u-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,Rn.BRASS)}e.box(Cn,Dr,ca-.02,vo,Hn-.06,ca+.02,t),e.box(At.x0,At.top-.035,At.z0,At.x1,At.top,At.z1,t),e.tube([[At.x0,At.top-.018,At.z0],[At.x1,At.top-.018,At.z0]],.02,t,8);for(let l of[At.x0+.1,At.x1-.1]){let u=[];for(let h=0;h<=8;h++){let d=h/8;u.push([l,At.top-.04-.22*d,At.z1-.02-.22*Math.cos(d*Fi/2)])}e.tube(u,.018,n,6)}e.box(Cn+.06,.12,Jo,vo-.1,.44,Jo+.42,n),e.box(Cn+.08,.44,Jo+.01,vo-.12,.52,Jo+.41,Rn.CUSHION),e.box(Cn+.06,.12,_r-.42,vo-.1,.44,_r,n),e.box(En[0]-.05,En[1]-.16,Jo,En[0]+.05,En[1]-.02,Jo+.012,Rn.BRASS),e.tube([[En[0],En[1]-.09,Jo+.012],[En[0],En[1]-.09,En[2]-.01],[En[0],En[1]-.05,En[2]]],.006,Rn.BRASS,6),e.lathe(En[0],En[2],[[0,En[1]-.05],[.028,En[1]-.035],[.034,En[1]+.01],[.024,En[1]+.06],[.026,En[1]+.065]],Rn.LAMPGLASS,16),e.box(sa.x-.22,.12,sa.z-.24,sa.x+.22,sa.y-.05,sa.z+.16,n),e.box(sa.x-.24,sa.y-.05,sa.z-.26,sa.x+.24,sa.y,sa.z+.18,Rn.CUSHION),e.tube([[en[0],Hn-.06,en[2]],[en[0],en[1]+.07,en[2]]],.005,Rn.BRASS,5),e.lathe(en[0],en[2],[[0,en[1]+.09],[.03,en[1]+.08],[.02,en[1]+.06]],Rn.BRASS,12),e.lathe(en[0],en[2],[[0,en[1]-.06],[.035,en[1]-.04],[.045,en[1]],[.035,en[1]+.05],[.018,en[1]+.07]],Rn.LAMPGLASS,16);let a=vo,i=vo+r;function s(l,u,h){let d=(l+u)/2,p=40,v=[];for(let g=0;g<=p;g++)v.push(Dr+(Hn-.2-Dr)*g/p);let m=[];v.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(Ko.ys+(Ko.apex-Ko.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let M=h?ih(y,Ko.ys,Ko.a,Ko.r):0,k=h?ih(b,Ko.ys,Ko.a,Ko.r):0,z=(N,q)=>[N,q];e.quad([i,y,d-M],[i,y,l],[i,b,l],[i,b,d-k],t,[z(d-M,y),z(l,y),z(l,b),z(d-k,b)]),e.quad([i,y,u],[i,y,d+M],[i,b,d+k],[i,b,u],t,[z(u,y),z(d+M,y),z(d+k,b),z(u,b)]),(M>0||k>0)&&(e.quad([a,y,d-M],[i,y,d-M],[i,b,d-k],[a,b,d-k],n),e.quad([i,y,d+M],[a,y,d+M],[a,b,d+k],[i,b,d+k],n),e.quad([a,y,l],[a,y,d-M],[a,b,d-k],[a,b,l],t),e.quad([a,y,d+M],[a,y,u],[a,b,u],[a,b,d+k],t))}if(e.box(a,Hn-.2,l,i,Hn-.06,u,t),e.box(i,Hn-.42,l+.05,i+.012,Hn-.24,u-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,M=b<.5?Dr+(Ko.apex-Dr)*(b*2):Ko.apex-(Ko.apex-Dr)*((b-.5)*2),k=b<.5?-1:1;g.push([i+.01,Math.min(M,Ko.apex-.002),d+k*(ih(M,Ko.ys,Ko.a,Ko.r)+.03)])}e.tube(g,.022,n,6)}}s(Jo,kn,!0),s(ca,_r,!0);{let l=kn,u=ca,h=(l+u)/2;e.box(a,Dr,l,i,Hn-.06,u,t);let d={ys:1.85,a:.55,r:.8},p=[];for(let v=0;v<=40;v++){let m=v/40,g=d.ys+Math.sqrt(d.r*d.r-(d.r-d.a)*(d.r-d.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;p.push([i+.012,Math.min(y,g-.002),h+b*ih(y,d.ys,d.a,d.r)])}p.push(p[0]),e.tube(p,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,u-.13],[i+.06,1.12,u-.13],[i+.06,1.12,u-.2]],.009,Rn.BRASS,6)}[Jo-.02,kn,ca,_r+.02].forEach((l,u)=>{let h=u===1||u===2,d=.075,p=Hn+(h?.62:.4);e.box(vo+.06,0,l-d,vo+.06+2*d,p,l+d,t),e.box(vo+.04,p-.04,l-d-.02,vo+.08+2*d,p,l+d+.02,n);let v=vo+.06+d,m=h?.62:.5;e.spire(v,l,p,d*.95,p+m,t);for(let g=1;g<=3;g++){let y=p+m*g/4.2,b=d*.95*(1-g/4.2)+.02;for(let[M,k]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[v+M*(b-.02),y-.02,l+k*(b-.02)],[v+M*(b+.015),y+.03,l+k*(b+.015)]],.008,n,4)}e.lathe(v,l,[[0,p+m-.02],[.03,p+m+.03],[.022,p+m+.07],[0,p+m+.1]],t,10)});let f=(l,u,h)=>{let d=(l+u)/2,p=vo+.075,v=Hn+.07,m=v+h,g=[1,0,0],y=e.v([p,v,l],g,o,[l,v]),b=e.v([p,v,u],g,o,[u,v]),M=e.v([p,m,d],g,o,[d,m]);e.idx.push(y,b,M);let k=e.v([p-.04,v,l],[-1,0,0],t),z=e.v([p-.04,v,u],[-1,0,0],t),N=e.v([p-.04,m,d],[-1,0,0],t);e.idx.push(k,N,z);let q=[],D=[];for(let J=0;J<=10;J++){let ee=J/10;q.push([p+.02,v+h*ee,l+(d-l)*ee]),D.push([p+.02,v+h*ee,u+(d-u)*ee])}e.tube(q,.022,n,6),e.tube(D,.022,n,6);for(let J=2;J<=8;J+=2)for(let ee of[q[J],D[J]])e.tube([ee,[ee[0]+.01,ee[1]+.06,ee[2]+(ee===q[J]?-.02:.02)]],.01,n,4);e.lathe(p,d,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([J,ee])=>[J,ee]),t,10);let ne=Math.min(.17,h*.32),O=v+h*.38,re=[];for(let J=0;J<=24;J++){let ee=J/24*Fi*2;re.push([p+.012,O+Math.sin(ee)*ne,d+Math.cos(ee)*ne])}e.tube(re,.012,n,5)};f(Jo-.02,kn,.52),f(kn,ca,.82),f(ca,_r+.02,.52),e.lathe(Qn.x,Qn.z,[[0,At.top],[.036,At.top+.001],[Qn.r,At.top+.012],[Qn.r*1.02,At.top+.035],[.036,At.top+.052],[.02,At.top+.062],[.016,At.top+.068]],Rn.INKGLASS,24),e.lathe(Qn.x,Qn.z,[[.016,At.top+.064],[.021,At.top+.066],[.022,At.top+.075],[.016,At.top+.076],[0,At.top+.072]],Rn.BRASS,20);{let l=sh.a,u=sh.b,h=26,d=y=>{let b=Math.sin(y*Fi)*.025;return[l[0]+(u[0]-l[0])*y+b*.6,l[1]+(u[1]-l[1])*y+b*.4,l[2]+(u[2]-l[2])*y+b]},p=[];for(let y=0;y<=h;y++)p.push(d(y/h));e.tube(p,y=>.0028*(1-.7*y)+6e-4,Rn.QUILL,5);let v=e.norm(e.sub(u,l)),m=e.norm(e.cross(v,[.2,1,.1])),g=e.cross(m,v);for(let y of[-1,1]){let b=e.pos.length/3;for(let M=0;M<=h;M++){let k=M/h,z=d(k),N=k<.28?0:(y>0?.03:.02)*Math.sin(Fi*Math.pow((k-.28)/.72,.75)),q=N*.25,D=[z[0]+m[0]*y*N-g[0]*q,z[1]+m[1]*y*N-g[1]*q,z[2]+m[2]*y*N-g[2]*q];e.v(z,g,Rn.QUILL,[k,0]),e.v(D,g,Rn.QUILL,[k,y])}for(let M=0;M<h;M++){let k=b+M*2;e.idx.push(k,k+2,k+1,k+1,k+2,k+3)}}}return e.orient()}function D8(e,t){let n=$o.top,r=$o.x0;e(r-.35,0,$o.z0-.35,r,n+.35,$o.z1+.35),e(r,0,$o.z0-.35,-.35,n,$o.z0),e(r,0,$o.z1,-.35,n,$o.z1+.35),e(r,n,$o.z0,-.35,n+.35,$o.z1),e(.35,0,$o.z0-.42,.35+.16,n,$o.z0),e(.35,0,$o.z1,.35+.16,n,$o.z1+.42),e(.35,n,$o.z0-.5,.35+.18,n+.42,$o.z1+.5),e(.35,n+.42,$o.z0-.6,.35+.26,n+.52,$o.z1+.6),e(.35,0,$o.z0-.5,.35+.22,.42,$o.z0),e(.35,0,$o.z1,.35+.22,.42,$o.z1+.5),e(-.35-.01,0,$o.z0,.35+.12,.02,$o.z1),t(r,$o.z0,-.35,$o.z1)}Hr.exports=e=>{let t=gi(),o=xy.GLSL,n=G8(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${Ha.roomGLSL()}
	${yy()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(de,ie,ot,ht){let Ft=[],Tt=[],mo=[],gt=[],Vt=[],Xe=vo-.02,xt=Ko.apex+.08,Rt=Dr+.015;for(let pt=0;pt<=40;pt++){let ut=pt/40,Qt=xt+(Rt-xt)*ut;for(let tt=0;tt<=90;tt++){let Ae=tt/90,Pe=ot?.2+.13*ut*ut:ie-de,Mt=de+Ae*Pe,lt=ot?.05+.02*ut:.035+.01*Math.sin(Ae*7),rt=Ae*ht*Fi*2+Math.sin(ut*2+Ae*5)*.6,Xt=Xe-lt*(.5+.5*Math.sin(rt))-(ot?.02*ut:0),Zt=[1,0,-(-lt*.5*Math.cos(rt)*ht*Fi*2/Pe)],Jt=Math.hypot(Zt[0],Zt[1],Zt[2]);Ft.push(Xt,Qt,Mt),Tt.push(Zt[0]/Jt,0,Zt[2]/Jt),mo.push(2),gt.push(Math.sin(rt),ut)}}for(let pt=0;pt<40;pt++)for(let ut=0;ut<90;ut++){let Qt=pt*91+ut,tt=Qt+90+1;Vt.push(Qt,tt,Qt+1,Qt+1,tt,tt+1)}for(let pt=0;pt<Vt.length;pt+=3){let[ut,Qt,tt]=[Vt[pt],Vt[pt+1],Vt[pt+2]],Ae=rt=>[Ft[rt*3],Ft[rt*3+1],Ft[rt*3+2]],Pe=[0,1,2].map(rt=>Ae(Qt)[rt]-Ae(ut)[rt]),Mt=[0,1,2].map(rt=>Ae(tt)[rt]-Ae(ut)[rt]);Pe[1]*Mt[2]-Pe[2]*Mt[1]<0&&(Vt[pt+1]=tt,Vt[pt+2]=Qt)}return{pos:Ft,nrm:Tt,kind:mo,uv:gt,idx:Vt}}let c=s(Jo+.02,Jo+.4,!0,6),f=s(ca+.04,_r-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(de=>de+c.pos.length/3))},u=e({vert:`
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
			vec3 p = vec3(${et(Lo.x)} + corner.x * ${et(Lo.w/2)}, ${et(Lo.y)} + corner.y * ${et(Lo.h/2)}, ${et(Lo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${et(Lo.x)}, ${et(Lo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${et(Lo.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${et(fr.x)}, ${et((fr.y0+fr.y1)/2)} + corner.y * ${et((fr.y1-fr.y0)/2-.04)}, ${et((fr.z0+fr.z1)/2)} + corner.x * ${et((fr.z1-fr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${et((fr.z0+fr.z1)/2)}, ${et((fr.y0+fr.y1)/2)})) * ${et(Lo.cell/fr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${et(fr.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${et(Lo.x)} + corner.x * 0.75, ${et(Lo.y)} + corner.y * 0.9, ${et(ca-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),v=14,m=[];for(let de=0;de<v;de++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(ie=>m.push(ie[0],ie[1],(de+.5)/v));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${et($8)} + c.x * ${et((vo-Cn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${et(kn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${yy().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Sa(en)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let de=document.createElement("canvas");de.width=512,de.height=652;let ie=de.getContext("2d");ie.fillStyle="#cdb38a",ie.fillRect(0,0,de.width,de.height);let ot=7,ht=()=>(ot=ot*1664525+1013904223>>>0,ot/4294967296);for(let Tt=0;Tt<2400;Tt++){ie.fillStyle=`rgba(${ht()<.5?"90,62,30":"245,230,200"},${.03+ht()*.05})`;let mo=ht()*de.width,gt=ht()*de.height;ie.fillRect(mo,gt,1+ht()*14,1)}for(let Tt=0;Tt<26;Tt++){let mo=ht()*de.width,gt=ht()*de.height,Vt=20+ht()*90,qo=ie.createRadialGradient(mo,gt,0,mo,gt,Vt);qo.addColorStop(0,`rgba(120,80,35,${.04+ht()*.06})`),qo.addColorStop(1,"rgba(120,80,35,0)"),ie.fillStyle=qo,ie.fillRect(mo-Vt,gt-Vt,Vt*2,Vt*2)}let Ft=ie.createRadialGradient(de.width/2,de.height/2,de.width*.3,de.width/2,de.height/2,de.height*.72);return Ft.addColorStop(0,"rgba(110,70,30,0)"),Ft.addColorStop(1,"rgba(110,70,30,0.38)"),ie.fillStyle=Ft,ie.fillRect(0,0,de.width,de.height),de})(),b=y?e.texture({data:y,min:"linear",mag:"linear",flipY:!1}):e.texture(),M=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),k=[18,24],z=[],N=[];for(let de=0;de<=k[1];de++)for(let ie=0;ie<=k[0];ie++)z.push(ie/k[0],de/k[1]);for(let de=0;de<k[1];de++)for(let ie=0;ie<k[0];ie++){let ot=de*(k[0]+1)+ie,ht=ot+k[0]+1;N.push(ot,ot+1,ht,ot+1,ht+1,ht)}let q=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${et(qr.cx+qr.w/2)} - s * ${et(qr.w)};
			float zNear = ${et(qr.cz-qr.d/2)};
			vec3 p = vec3(x, ${et(qr.y)}, zNear + t * ${et(qr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${et(qr.d)};
				float zf = zNear + 0.5 * ${et(qr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${et(qr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${et(kn+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(z),size:2}},elements:N,uniforms:{fold:()=>Oi.fold,slide:()=>Oi.slide,paperTex:b,inkTex:M},cull:{enable:!1}}),D=_y();D.lathe(Do.x,Do.z,[[0,At.top],[.048,At.top+.002],[.052,At.top+.012],[.046,At.top+.014],[.022,At.top+.012],[0,At.top+.012]],Rn.BRASS,24),D.lathe(Do.x,Do.z,[[0,At.top+.012],[Do.r,At.top+.012],[Do.r*1.02,At.top+.012+Do.h*.6],[Do.r,At.top+.012+Do.h],[Do.r*.75,At.top+.012+Do.h-.004],[0,At.top+.012+Do.h-.008]],9,20),D.tube([[Do.x,At.top+.012+Do.h-.008,Do.z],[Do.x+.001,At.top+.012+Do.h+.012,Do.z]],.0012,8,4),D.orient();let ne=e({vert:a,frag:`${r}
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
				float up = smoothstep(${et(At.top+Do.h*.4)}, ${et(At.top+.012+Do.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:D.pos,normal:D.nrm,kind:D.kind,uv:D.uv},elements:D.idx}),O=e({vert:`
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
			vec3 p = ${Sa(Do.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),re=[0,0],J=e({uniforms:{view:e.prop("view")}}),ee=new Float32Array(16);function Qe(de){F8.translate(ee,de.view,Ha.OFF),J({view:ee},()=>He(de))}function He(de){let ie=de&&de.reflected;if(i(),u(),h(),d(),Oi.ink&&Oi.inkDirty){let ot=Oi.ink;re[0]!==ot.width||re[1]!==ot.height?(M({data:ot,min:"linear",mag:"linear",flipY:!1}),re=[ot.width,ot.height]):M.subimage(ot),Oi.inkDirty=!1}Oi.shown&&q(),xy.night>.01&&(ne(),ie||(O({halo:1}),O({halo:0}))),ie||(p(),g())}return Qe};Hr.exports.addBay=D8;Hr.exports.BAY=$o;Hr.exports.OFF=Ha.OFF;Hr.exports.STATE=Oi;var by=e=>[e[0]+Ha.OFF[0],e[1]+Ha.OFF[1],e[2]+Ha.OFF[2]];Hr.exports.SHOTS=Object.fromEntries(Object.entries(wy).map(([e,t])=>[e,Object.assign({},t,{eye:by(t.eye),target:by(t.target)})]));Hr.exports.SEAT=sa;Hr.exports.LAMP=en;Hr.exports.SCONCE=En;Hr.exports.GRILLE=Lo;Hr.exports.PAPER=qr;Hr.exports.ZONE={FRONT:vo,BACK:Cn,ZA:Jo,ZB:kn,ZC:ca,ZD:_r}});var Q1=ve((XA,Ey)=>{"use strict";function q8(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var My={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},H8=["th","ng","er"];function j8(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(My).forEach(v=>{r[v]=My[v]*o.pace});let a=[],i=0,s=0,c=0,f=[];function l(v,m){let g=q8(o.seed),y=o.xh,b={},M=ee=>{let Qe=t[ee];if(!Qe)return null;let He=Math.floor(g()*Qe.length);return Qe.length>1&&He===b[ee]&&(He=(He+1)%Qe.length),b[ee]=He,Qe[He]},k=ee=>{if(t[ee])return{g:M(ee),sc:1};let Qe=ee.toLowerCase();return t[Qe]?{g:M(Qe),sc:/[A-Z]/.test(ee)?1.32:1}:null},z=[],N=.15,q=0,D=0,ne=(g()-.5)*.02,O=m/y,re=v.split(/\n\s*\n/);re.forEach((ee,Qe)=>{ee.replace(/\s+/g," ").trim().split(" ").forEach(de=>{let ie=[];for(let Tt=0;Tt<de.length;Tt++){let mo=de.substr(Tt,2).toLowerCase();if(H8.indexOf(mo)>=0&&t[mo]&&g()<.55&&de[Tt]===de[Tt].toLowerCase()){ie.push({ch:mo,gl:{g:M(mo),sc:1}}),Tt++;continue}let gt=k(de[Tt]);gt&&gt.g&&ie.push({ch:de[Tt],gl:gt})}let ot=ie.map(()=>.17+g()*.07),ht=ie.reduce((Tt,mo,gt)=>Tt+mo.gl.g.w*mo.gl.sc+ot[gt],0);q>0&&q+ht>O&&(q=0,D++,N+=r.line,ne=(g()-.5)*.02),ie.forEach((Tt,mo)=>{let gt=Tt.gl.g,Vt=Tt.gl.sc*(.95+g()*.1),qo=(g()-.5)*.06,ur=(g()-.5)*.08+ne*q,Xe=q,xt=D*o.lineHeight+1.9+ur,Rt=Math.cos(qo),pt=Math.sin(qo),ut=tt=>[(Xe+(tt[0]*Rt-tt[1]*pt)*Vt)*y,(xt+(tt[0]*pt+tt[1]*Rt)*Vt)*y],Qt=(tt,Ae)=>{let Pe=0;for(let lt=1;lt<tt.length;lt++)Pe+=Math.hypot(tt[lt][0]-tt[lt-1][0],tt[lt][1]-tt[lt-1][1]);let Mt=Math.max(o.minDur||(Ae?.06:.07),Pe/(o.speed*y));z.push({pts:tt,L:Pe,start:N,dur:Mt,dot:Ae}),N+=Mt};if(gt.s.forEach((tt,Ae)=>{Ae>0&&(N+=r.stroke),Qt(tt.map(ut),!1)}),gt.dot){let tt=gt.s[0][0];gt.s.forEach(Pe=>Pe.forEach(Mt=>{Mt[1]<tt[1]&&(tt=Mt)}));let Ae=ut([tt[0]+.1,-1.36]);N+=r.stroke*1.4,Qt([Ae,[Ae[0]+y*.05,Ae[1]+y*.03]],!0)}N+=r.letter*(.6+g()*.8),q+=gt.w*Vt+ot[mo]});let Ft=de[de.length-1];N+=/[.!?]/.test(Ft)?r.stop:/[,;:]/.test(Ft)?r.comma:r.word,q+=.55+g()*.2}),Qe<re.length-1&&(q=0,D+=1.6,N+=r.para)});let J=(D+1)*o.lineHeight*y+y*1.55;return{strokes:z,total:N,height:J}}function u(v,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(v*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=v+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,v,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=v=>v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;function d(v,m){let g=f[v.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let M=1;M<v.pts.length;M++){let k=v.pts[M-1],z=v.pts[M],N=Math.hypot(z[0]-k[0],z[1]-k[1]),q=b,D=b+N;if(b=D,D<=g||N===0)continue;if(q>=m)break;let ne=Math.max(0,(g-q)/N),O=Math.min(1,(m-q)/N),re=[k[0]+(z[0]-k[0])*ne,k[1]+(z[1]-k[1])*ne],J=[k[0]+(z[0]-k[0])*O,k[1]+(z[1]-k[1])*O],ee=(q+D)/2/(v.L||1),Qe=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,ee)));n.lineWidth=y*Qe,n.globalAlpha=.86+.14*Qe,n.beginPath(),n.moveTo(re[0],re[1]),n.lineTo(J[0],J[1]),n.stroke()}v.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(v.pts[0][0],v.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[v.i]=m}function p(v){let m=(v-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);d(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(p):o.onDone&&o.onDone()}return{write(v,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=l(v,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(v):o.maxTime;if(b&&i>b){let k=b/i;a.forEach(z=>{z.start*=k,z.dur*=k}),i=b}a.forEach((k,z)=>{k.i=z}),f=[],u(g,y.height);let M=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||M){a.forEach(k=>d(k,k.L));return}return c=performance.now(),s=requestAnimationFrame(p),i},finish(){cancelAnimationFrame(s),a.forEach(v=>d(v,v.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}Ey.exports=j8});var J1=ve((YA,ky)=>{"use strict";var Z1=tr(),B8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',U8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';ky.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=Z1.isNight;o.innerHTML=r?B8:U8,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Z1.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Z1.toggle()}),o}});var Ly=ve((KA,Ty)=>{"use strict";var Sn=ch(),W8=bi(),V8=Q1(),X8="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Sy=100,ai=e=>Math.max(0,Math.min(1,e)),la=(e,t,o)=>{let n=ai((o-e)/(t-e));return n*n*(3-2*n)},Aa=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,fa=(e,t,o)=>e+(t-e)*o,cl=(e,t,o)=>[fa(e[0],t[0],o),fa(e[1],t[1],o),fa(e[2],t[2],o)];function T0(e,t){let o=e.length-1,n=ai(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-f[l])*a*a+(-i[l]+3*s[l]-3*c[l]+f[l])*a*a*a))}var lh=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function ed(e,t,o){return{eye:cl(e.eye,t.eye,o),target:cl(e.target,t.target,o),fov:fa(e.fov,t.fov,o),roll:fa(e.roll||0,t.roll||0,o)}}var ll=W8.PLAY,Ta=[ll.stoolX,1,ll.keyFront+.25],fh=[ll.stoolX,ll.keyTop+.03,ll.keyFront-.05],od=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[Ta[0]+Math.cos(t)*o,1.15+.4*e,Ta[2]+Math.sin(t)*o]},Ds=[{eye:od(1),target:[Ta[0],.92,Ta[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:fh},{eye:[Ta[0]+1,1.14,Ta[2]+1.72],target:[fh[0]+.05,.8,fh[2]+.05],fov:40,aperture:1,to:fh}],Ay=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),hh=e=>({letterbox:.55,exposure:1.3,focus:Ay(e.eye,e.to||Ta),aperture:e.aperture,vignette:.42,shafts:0}),td={letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},qs={letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},sl={letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},Y8=`
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
`;Ty.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=Y8,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),u=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,d=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let Ae=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Sy-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>Sy&&Ae&&(s.value=Ae[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(Ae=>s.addEventListener(Ae,Pe=>Pe.stopPropagation())),a.addEventListener("pointerdown",Ae=>Ae.stopPropagation()),a.addEventListener("click",Ae=>{let Pe=Ae.target.closest("button");Pe&&(Ae.stopPropagation(),Pe.dataset.act==="send"&&Qe(),Pe.dataset.act==="leave"&&ie())});let p=!1,v="",m=0,g=null,y=null,b="",M=null,k=0,z="",N=document.createElement("canvas");N.width=512,N.height=652;function q(Ae){Ae!==z&&(z=Ae,i.classList.toggle("on",Ae==="write"),f.classList.toggle("on",Ae==="hint"),l.classList.toggle("on",p&&Ae==="hint"&&(v==="room"||v==="peek")),u.classList.toggle("on",Ae==="final"),Ae==="write"&&setTimeout(()=>{if(v==="write")try{s.focus({preventScroll:!0})}catch(Pe){}},900))}function D(Ae){v=Ae,m=0}function ne(Ae,Pe){if(p)return;p=!0,g={eye:Ae.eye.slice(),target:Ae.target.slice(),fov:Ae.fov,roll:Ae.roll||0},y=Object.assign({},Pe),b="",s.value="",c.disabled=!0,Sn.STATE.fold=0,Sn.STATE.slide=0,Sn.STATE.shown=!0,Sn.STATE.active=!0;let Mt=N.getContext("2d");Mt.setTransform(1,0,0,1,0,0),Mt.clearRect(0,0,N.width,N.height),Sn.STATE.ink=N,Sn.STATE.inkDirty=!0,document.body.classList.add("confessing");let lt=Ds[0],rt=d?.3:5.5,Xt=d?.3:3.6;O.i=0,O.u=0,O.T=rt+Xt,O.moving=!0,O.rest=0,O.raw=!0,O.lookFrom=y,O.lookTo=hh(lt);let _=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],od(0)],Zt=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Ta[0],1,Ta[2]-.1],lt.target];O.path=Jt=>{let W=Jt*(rt+Xt);if(W<rt){let yt=W/rt,Et=1-Math.cos(yt*Math.PI/2);return{eye:T0(_,Et),target:T0(Zt,la(0,1,Et*1.05)),fov:fa(g.fov,52,la(.4,1,Et)),roll:(g.roll||0)*(1-Et)}}let Ze=(W-rt)/Xt,Ve=1-Math.pow(1-Ze,2.4);return{eye:od(Ve),target:lt.target,fov:fa(52,lt.fov,Ve),roll:.05*Math.sin(Math.PI*Ve)}},D("room"),q("")}let O={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},re=()=>h?"Scroll on":"Swipe up";function J(Ae){let Pe=Ft,Mt=Ds[Ae],lt={eye:Pe.eye.slice(),target:Pe.target.slice(),fov:Pe.fov,roll:Pe.roll||0},rt=cl(lt.eye,Mt.eye,.5),Xt=[rt[0]-Ta[0],0,rt[2]-Ta[2]],_=Math.hypot(Xt[0],Xt[2])||1,Zt=[rt[0]+Xt[0]/_*.6,rt[1]+.3,rt[2]+Xt[2]/_*.6];O.path=Jt=>{let W=1-Jt;return{eye:[0,1,2].map(Ze=>W*W*lt.eye[Ze]+2*W*Jt*Zt[Ze]+Jt*Jt*Mt.eye[Ze]),target:cl(lt.target,Mt.target,la(0,1,Jt)),fov:fa(lt.fov,Mt.fov,Jt),roll:lt.roll*W}},O.lookFrom=ee||hh(Ds[O.i]),O.lookTo=hh(Mt),O.i=Ae,O.u=0,O.moving=!0,O.rest=0,O.raw=!1,O.T=d?.4:Math.max(2.8,Math.min(4.4,Ay(lt.eye,Mt.eye)*1+1.6)),q("")}let ee=null;function Qe(){if(v!=="write"||(b=s.value.trim(),!b))return;s.blur(),q("");let Ae=Math.max(10,Math.min(22,24-b.length/28));M=V8(N,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:Ae,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:Pe=>2.4+Pe.length/160,fixed:{mx:46,my:40},onPen:()=>{Sn.STATE.inkDirty=!0},onDone:()=>{Sn.STATE.inkDirty=!0}}),D("down")}function He(){try{let Ae={access_key:X8,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Ae),keepalive:!0}).catch(()=>{})}catch(Ae){}}function de(){v==="ready"&&(He(),D("fold"),q(""))}function ie(){!p||v==="leave"||(q(""),s.blur(),ot=Ft,ht=ee,D("leave"))}let ot=null,ht=null,Ft=null,Tt=Sn.SHOTS.window,mo=Sn.OFF,gt=Ae=>[Ae[0]+mo[0],Ae[1],Ae[2]],Vt=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],gt([1.25,1.5,43.25]),gt([-.55,1.36,42.92])],qo=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],gt([-1,1.55,43.6]),gt([-1.4,1.35,43.1]),gt([-1.5,1.33,43.3])];function ur(Ae){let Pe=Aa(ai(Ae)),Mt=[g.eye,...Vt,Tt.eye],lt=[g.target,...qo,Tt.target];return{eye:T0(Mt,Pe),target:T0(lt,la(0,1,Pe*1.03)),fov:fa(g.fov,Tt.fov,la(.6,.97,Pe)),roll:(g.roll||0)*(1-Pe)}}function Xe(Ae,Pe){if(d)return Ae;let Mt=performance.now()/1e3,lt=.004*Pe,rt=Math.sin(Mt*.61)*.6+Math.sin(Mt*1.37+1.3)*.4,Xt=Math.sin(Mt*.47+2.1)*.6+Math.sin(Mt*1.13+.4)*.4;return{eye:[Ae.eye[0]+rt*lt,Ae.eye[1]+Xt*lt*.7,Ae.eye[2]],target:[Ae.target[0]+Xt*lt*1.5,Ae.target[1]+rt*lt,Ae.target[2]],fov:Ae.fov,roll:Ae.roll}}function xt(Ae,Pe,Mt){let lt={};for(let rt in Pe)lt[rt]=typeof Pe[rt]=="number"&&typeof Ae[rt]=="number"?fa(Ae[rt],Pe[rt],Mt):Pe[rt];return lt}function Rt(Ae){Ae*=window.__confSpeed||1,m+=Ae;let Pe=lh(Tt),Mt=lh(Sn.SHOTS.paper),lt,rt,Xt=lh(Sn.SHOTS.peek);if(v==="room")O.moving?(O.u=Math.min(1,O.u+Ae/O.T),lt=O.path(O.raw?O.u:Aa(O.u)),rt=xt(O.lookFrom,O.lookTo,la(.1,.9,O.u)),O.u>=1&&(O.moving=!1,O.rest=0,f.textContent=re(),q("hint"))):(O.rest+=Ae,lt=Xe(lh(Ds[O.i]),2.5),rt=hh(Ds[O.i]));else if(v==="enter"){let Zt=ai(m/(d?.6:9)),Jt=Aa(Zt),W=[pt.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],gt([.75,1.5,42.95]),gt([-.25,1.42,42.82]),gt([-.9,1.42,42.82]),Xt.eye];lt={eye:T0(W,Jt),target:cl(pt.target,Xt.target,la(0,.35,Jt)),fov:fa(pt.fov,Xt.fov,la(.3,1,Jt)),roll:0},rt=xt(ut,td,la(.2,.9,Zt)),Zt>=1&&D("peek")}else if(v==="peek")lt=Xe(Xt,1.5),rt=td,m>(d?.5:3.2)&&D("turn");else if(v==="turn"){let _=ai(m/(d?.4:3.2));lt=ed(Xt,Pe,Aa(_)),rt=xt(td,qs,Aa(_)),_>=1&&(D("write"),q("write"))}else if(v==="write")lt=Xe(Pe,1),rt=qs;else if(v==="down"){let _=ai(m/(d?.4:2));lt=ed(Pe,Mt,Aa(_)),rt=xt(qs,sl,Aa(_)),_>=1&&(k=M.write(b,d)||0,Sn.STATE.inkDirty=!0,D("writing"))}else if(v==="writing")lt=Xe(Mt,.6),rt=sl,m>k+.8&&(D("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",q("hint"));else if(v==="ready")lt=Xe(Mt,.6),rt=sl;else if(v==="fold"){let _=ai(m/(d?.3:1.5));Sn.STATE.fold=Aa(_),lt=Xe(Mt,.6),rt=sl,_>=1&&D("slide")}else if(v==="slide"){let Zt=ai(m/(d?.6:3.4));Sn.STATE.slide=Aa(la(0,.7,Zt));let Jt=Aa(la(.35,1,Zt));lt=ed(Mt,Pe,Jt),rt=xt(sl,qs,Jt),Zt>=1&&(Sn.STATE.shown=!1,D("final"),q("final"))}else if(v==="final")lt=Xe(Pe,1),rt=qs;else if(v==="leave"){let _=d?.6:ot.eye[0]<mo[0]-.3?12:7,Zt=ai(m/_),Jt={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},W=Aa(Zt),Ze=ot.eye[0]<mo[0]-.3,Ve=Ze?[ot.eye,gt([-.55,1.4,42.8]),gt([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Jt.eye]:[ot.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Jt.eye],yt=Ze?[ot.target,gt([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Jt.target]:[ot.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Jt.target];if(lt={eye:T0(Ve,W),target:T0(yt,W),fov:fa(ot.fov,Jt.fov,W),roll:Jt.roll*W},rt=xt(ht||qs,y,la(.1,.7,Zt)),Zt>=1){p=!1,Sn.STATE.active=!1,Sn.STATE.shown=!0,Sn.STATE.fold=0,Sn.STATE.slide=0;let Et=N.getContext("2d");Et.setTransform(1,0,0,1,0,0),Et.clearRect(0,0,N.width,N.height),Sn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return Ft=lt,ee=rt,{camera:lt,look:rt}}let pt=null,ut=null;function Qt(){if(v==="room"){if(O.moving||O.rest<.4)return;O.i<Ds.length-1?J(O.i+1):(pt=Ft,ut=ee,q(""),D("enter"));return}if(v==="peek"){m>.4&&D("turn");return}v==="ready"?de():v==="writing"&&M&&(M.finish(),m=Math.max(m,k))}function tt(){v==="room"&&!O.moving&&O.rest>.4&&O.i>0&&J(O.i-1)}return{start:ne,update:Rt,leave:ie,get active(){return p},get stage(){return v},wheel(Ae){Ae>8?Qt():Ae<-8&&tt()},swipe(Ae){Ae>0?Qt():Ae<0&&tt()},tap(){Qt()},key(Ae){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(Ae)>=0?(Qt(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(Ae)>=0?(tt(),!0):Ae==="Escape"?(ie(),!0):!1},_setNote(Ae){s.value=Ae,s.dispatchEvent(new Event("input"))}}}});var $y=ve((QA,Fy)=>{"use strict";var Hs=_s(),uh=T1(),nd=Zl(),K8=kc(),rd=z1(),Q8=Zr(),dh=!Q8.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Br}=ta(),{C:Zn,PAINTING_X:Ws}=er(),Ur=e=>Math.max(0,Math.min(1,e)),Ie=(e,t,o)=>e+(t-e)*o,Oo=(e,t,o)=>[Ie(e[0],t[0],o),Ie(e[1],t[1],o),Ie(e[2],t[2],o)],Wt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ad=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Mr=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Ne=(e,t,o)=>{let n=Ur((o-e)/(t-e));return n*n*(3-2*n)};function Z8(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,l=Math.max(-f,Math.min(f,e-t)),u=e-l,h=(o+i*l)*r,d=(o-i*h)*c,p=u+(l+h)*c;return t-e>0==p>t&&(p=t,d=0),[p,d]}var zy=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,J8=e=>e*e*e,id=e=>1-Math.pow(1-e,3),sn=e=>-(Math.cos(Math.PI*e)-1)/2;function gn(e,t){let o=e.length-1,n=Ur(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=a*a,u=l*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-f[h])*l+(-i[h]+3*s[h]-3*c[h]+f[h])*u))}var Bt=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function C0(e,t,o){return Bt(Oo(e.eye,t.eye,o),Oo(e.target,t.target,o),Ie(e.fov,t.fov,o),Ie(e.roll,t.roll,o))}var ud=()=>Ne(.75,1.3,window.innerWidth/window.innerHeight),Er=(e,t)=>C0(e,t,ud()),ph=[7,3.95,Zn.hallEnd-.05],ek=[Zn.x1,2.9,Zn.zc],Bs=[16.75,4.55,6.75],dd=[6.92,2.72,14.5],La=[7.3,.015,47.1],tk=[Bs,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],dd],ok=[dd,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],La],z0=[Ws[0],3,Zn.z0],N0=[Ws[1],3,Zn.z0],cd=47.45,Oy=4.6,nk=13.2,rk=1.42,fl=[7.55,1.25,46.75],pd=[17.25,2.42,46],vd=[26.05,1.95,46],hl=[36.15,.015,44],gh=()=>Ie(6.8,6.15,ud()),ak=[fl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],pd],ik=[pd,[20.2,2.05,45.6],[23.2,1.8,45],vd],R0=[Ws[2],3,Zn.z0],ld=[34.8,1.35,46],Gi=[7.89,.03,19.03],Ny=.36,Ry=13.64,ar=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function ha(e){let t=e.side==="left"?1:-1;return Oo([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],ud())}function sk(e){return e.side==="left"?Er(Bt([8.6,3.9,e.z],[Ny,1.45,e.z],76),Bt([8,3.6,e.z+.7],[Ny,3.95,e.z-2],46,-.008)):Er(Bt([5.4,3.9,e.z],[Ry,1.45,e.z],76),Bt([6,3.6,e.z-.7],[Ry,3.95,e.z+2],46,-.008))}var ck=()=>[hl,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],ha(ar[0])],lk=()=>[ha(ar[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],ha(ar[3])],fk=()=>[ha(ar[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Gi],Cy={2:{pos:()=>dd,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>fl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>pd,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>vd,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>ld,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>ha(ar[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>ha(ar[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>ha(ar[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>ha(ar[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>ha(ar[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>ha(ar[5]),amp:[.12,.08,.1],tumble:.5}},$i=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Er(Bt([Zn.x0+.9,1.85,Zn.zc+.25],[Zn.x1,2.85,Zn.zc-.1],64),Bt([Zn.x0+1.2,2,Zn.zc+.35],[Zn.x1,2.6,Zn.zc-.15],50));return n.eye=Wt(Wt(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Er(Bt([16.6,1.9,9.2],[17.3,.4,5.6],64),Bt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Wt(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Er(Bt([7,1.35,13],[7.2,7.6,20.4],74,.05),Bt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Wt(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Er(Bt([7,3.6,43.7],[7,3.85,ph[2]],74),Bt([7,3.6,41.3],[7,3.95,ph[2]],46));return o.eye=Wt(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Er(Bt([7,3.9,40.3],[7,1.35,ph[2]],76),Bt([6.3,3.6,41.2],[3.7,3.95,ph[2]],46,-.008));return o.eye=Wt(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Er(Bt([7.15,.15,46],[7.3,.04,La[2]],50),Bt([7.05,.14,45.9],[7.25,.05,La[2]],32));return o.eye=Wt(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Er(Bt([7.15,.1,46.3],[7.05,.1,cd],50),Bt([7.1,.12,45.85],[7,.2,cd],30));return o.eye=Wt(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Er(Bt([7.3,.85,45.65],[7.6,1.38,47.1],64),Bt([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Wt(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Er(Bt([z0[0],2.3,46.85],[z0[0],1.25,z0[2]],74),Bt([z0[0]-.6,2.55,46.85],[z0[0]+1.9,2.9,z0[2]],46,.008));return o.eye=Wt(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Er(Bt([N0[0],1.95,46.85],[N0[0],1,N0[2]],74),Bt([N0[0]-.6,2.1,46.85],[N0[0]+1.9,2.75,N0[2]],46,.008));return o.eye=Wt(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Er(Bt([R0[0],1.4,46.85],[R0[0],.6,R0[2]],74),Bt([R0[0]-.6,1.45,46.85],[R0[0]+1.9,2,R0[2]],46,.008));return o.eye=Wt(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Er(Bt([34.75,.5,44.15],[Zn.x1,.8,43.95],66),Bt([34.75,.45,44.3],[Zn.x1,.35,43.95],50));return o.eye=Wt(o.eye,t),o}},...ar.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=sk(e);return r.eye=Wt(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Er(Bt([7.75,2.6,18.6],[7.89,0,19.08],60),Bt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-Gi[0],r=o.eye[2]-Gi[2];return o.eye=[Gi[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],Gi[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],hk=[1,.96,.88];function Py(e,t){return{dur:t,cam(o,n,r){let a=sn(o),i=C0(n,r,a),s=ar[e].side==="left"?1:-1;return i.eye=Wt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=Ie(n[i],r[i],o));return a.aperture=Ie(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=sn(o),r=ha(ar[e]),a=ha(ar[e+1]),i=ar[e].side==="left"?1:-1,s=Wt(Oo(r,a,.5),[i*1.2,.5,0]),c=gn([r,Oo(r,s,.6),s,Oo(a,s,.6),a],n);return{phase:"fly",pos:Wt(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var sd=[{dur:6.2,cam(e,t,o){if(e<.5){let s=J8(e/.5),c=Oo(t.eye,[Zn.x1-3.2,2.6,Zn.zc],s),f=Oo(t.target,ek,Ne(0,.6,e/.5));return Bt(c,f,Ie(t.fov,t.fov-8,s),Ie(t.roll,.04,s))}let n=id((e-.5)/.5),r=[[Br.cx+.4,10.4,Br.zc+.6],[Br.cx-.6,7.6,Br.zc+1.3],[Br.cx-1.9,4.6,Br.zc+1.75],o.eye],a=[[Br.cx-.1,0,Br.zc-.2],[Br.cx-1,.4,Br.zc-.1],[Br.cx-1.1,.8,Br.zc-.2],o.target];return Bt(gn(r,n),gn(a,n),Ie(o.fov+14,o.fov,n),Ie(-.25,o.roll,n))},look(e,t,o){let n=Ne(.22,.5,e),r=1-Ne(.5,.74,e);return{fade:e<.5?n:r,fadeColor:hk,exposure:Ie(t.exposure,o.exposure,Ne(.5,.9,e))*(1+2.2*(e<.5?Ne(.15,.5,e):1-Ne(.5,.8,e))),letterbox:Ie(t.letterbox,o.letterbox,Ne(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Ne(.6,1,e),focus:Ie(4,o.focus,Ne(.5,1,e)),shafts:Ie(t.shafts,o.shafts,Ne(.4,.6,e)),vignette:Ie(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=gn(r,sn(e)),i=Ne(0,.12,e)*(1-Ne(.82,1,e)),s=Oo(Oo(t.target,o.target,Ne(.55,1,e)),n.pos,i),c=Ie(t.fov,o.fov,Ne(.3,1,e))-6*Math.sin(Math.PI*e),f=Ie(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return Bt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ie(t.exposure,o.exposure,Ne(.25,.75,e)),letterbox:Ie(t.letterbox,o.letterbox,e),focus:Ie(a,o.focus,Ne(.8,1,e)),aperture:Ie(.7,o.aperture,Ne(.8,1,e)),shafts:Ie(t.shafts,o.shafts,Ne(.3,.8,e)),vignette:Ie(t.vignette,o.vignette,e)}},leaf(e){let t=zy(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:Wt(gn(tk,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Ne(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=gn([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Ne(0,.8,e)*.6+sn(Ur(e/.8))*.4),a=gn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],sn(Ne(.8,1,e))),i=e<.8?r:a,s=Oo(Oo(t.target,n.pos,Ne(.03,.22,e)),o.target,Ne(.82,1,e)),c=Ie(t.fov,o.fov,Ne(.15,.7,e))-6*Ne(.6,.8,e)*(1-Ne(.85,1,e)),f=Ie(t.roll,o.roll,Ne(0,.6,e))-.04*Math.sin(Math.PI*e);return Bt(i,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ie(t.exposure,o.exposure,Ne(.5,1,e)),letterbox:Ie(t.letterbox,o.letterbox,e),focus:Ie(a,o.focus,Ne(.84,1,e)),aperture:Ie(1.1,o.aperture,Ne(.84,1,e)),shafts:Ie(t.shafts,o.shafts,Ne(.2,.9,e)),vignette:Ie(t.vignette,o.vignette,Ne(.5,1,e))}},leaf(e){let t=Ie(zy(e),e,.35),o=gn(ok,Ne(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Ne(.55,.76,e)),r=Ne(.7,.8,e);return{phase:"fly",pos:Wt(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=sn(e),r=C0(t,o,n);return r.eye=Wt(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=sn(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ie(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=sn(e),r=gn([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Oo(t.target,o.target,Ne(.1,.85,e));return Bt(r,a,Ie(t.fov,o.fov,Ne(.2,1,e)),Ie(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],Ne(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,o){return C0(t,o,sn(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],sn(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Ie(Oy,gh(),e)}},{dur:7.5,kick:e=>Ur((e-js())/(1-js())),cam(e,t,o,n){let r=js(),a=Ne(0,r,e)*(1-Ne(r+.12,r+.35,e)),i=Iy(Math.min(e,Us)),s=Wt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Ne(r+.12,1,e),f=gn([t.eye,t.eye,Wt(t.eye,[0,.12,-.3]),o.eye],c);return s=Oo(s,n.pos,Ne(r+.06,r+.24,e)*(1-Ne(.9,1,e))),s=Oo(s,o.target,Ne(.88,1,e)),Bt(f,s,Ie(t.fov,o.fov,c),Ie(t.roll,o.roll,c))},look(e,t,o,n,r){let a=js(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Ne(0,.12,e)*(1-Ne(a+.25,a+.5,e));return{letterbox:Ie(Ie(t.letterbox,o.letterbox,Ne(a,1,e)),1.75,s),exposure:Ie(t.exposure,o.exposure,Ne(a,1,e)),focus:e<a?t.focus:Ie(t.focus,i,Ne(a,a+.2,e)),aperture:Ie(t.aperture,o.aperture,Ne(a,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=Ur((e-js())/(1-js()));if(t<=0)return{phase:"floor"};let o=Ne(0,.85,t)*.85+id(Ne(0,.15,t))*.15;return{phase:"fly",pos:Wt(La,[(fl[0]-La[0])*o+Math.sin(t*9)*.08*(1-t),(fl[1]-La[1])*o,(fl[2]-La[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?Iy(e):null}},{dur:9,cam(e,t,o,n){let r=sn(e),a=gn([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Ne(.6,.92,e),s=Oo(Oo(t.target,n.pos,Ne(0,.15,e)),o.target,1-i),c=Ie(t.fov,o.fov,Ne(.3,1,e)),f=Ie(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return Bt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,Ne(.3,.8,e)),focus:Ie(a,o.focus,Ne(.6,.95,e)),aperture:Ie(t.aperture,o.aperture,Ne(.6,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,Ne(.3,.8,e))}},leaf(e){let t=sn(e);return{phase:"fly",pos:Wt(gn(ak,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=sn(e),r=C0(t,o,n);return r.eye=Wt(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],e));return n.aperture=Ie(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=sn(e);return{phase:"fly",pos:Wt(gn(ik,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=sn(e),r=C0(t,o,n);return r.eye=Wt(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],e));return n.aperture=Ie(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=sn(e);return{phase:"fly",pos:Wt(gn([vd,[29.2,1.75,45.5],[32.2,1.5,45.4],ld],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=sn(e),a=gn([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Ne(.05,.3,e)*(1-Ne(.8,1,e)),s=Oo(Oo(t.target,o.target,Ne(.6,1,e)),n.pos,i);return Bt(a,s,Ie(t.fov,o.fov,Ne(.2,1,e)),Ie(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,e),focus:Ie(a,o.focus,Ne(.8,1,e)),aperture:Ie(.9,o.aperture,Ne(.8,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=gn([ld,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],hl],Ne(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Ne(.35,.82,e)),n=Ne(.78,.88,e);return{phase:"fly",pos:Wt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=Ur((e-.02)/.09);return id(t)+.07*Math.sin(Ur((e-.08)/.18)*Math.PI)*(1-Ur((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Ne(.02,.05,e)*(1-Ne(.08,.16,e)),a=Ne(.06,1,e),i=gn([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+sn(a)*.45),s=Wt(n.pos,[1,-.2,-1.45]);i=Oo(i,s,Ne(.1,.22,e)*(1-Ne(.52,.72,e)));let c=Ne(.06,.16,e)*(1-Ne(.86,1,e)),f=Oo(t.target,n.pos,c);f=Oo(f,o.target,Ne(.86,1,e));let l=Ie(t.fov,o.fov,Ne(.1,1,e))+6*Math.sin(Math.PI*Ne(.08,.9,e)),u=Ie(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Ne(.1,.9,e))+r;return Bt(Wt(i,[0,r,0]),f,l,u)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Ne(.02,.06,e)*(1-Ne(.08,.3,e));return{letterbox:Ie(t.letterbox,o.letterbox,Ne(.1,.4,e)),exposure:Ie(t.exposure,o.exposure,e)*(1+.8*i),focus:Ie(a,o.focus,Ne(.86,1,e)),aperture:Ie(.8,o.aperture,Ne(.86,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)+i}},leaf(e){let t=Ur((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=gn(ck(),t*.6+sn(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:Wt(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>Py(e,7.5)),{dur:10,cam(e,t,o,n){let r=sn(e),a=gn([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Ne(0,.15,e)*(1-Ne(.85,1,e)),s=Oo(Oo(t.target,o.target,Ne(.5,1,e)),n.pos,i);return Bt(a,s,Ie(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ie(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,e),focus:Ie(a,o.focus,Ne(.85,1,e)),aperture:Ie(.6,o.aperture,Ne(.85,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=sn(e),o=gn(lk(),t);return{phase:"fly",pos:Wt(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>Py(e,7.5)),{dur:10,cam(e,t,o,n){let r=sn(e),a=gn([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Ne(0,.2,e)*(1-Ne(.9,1,e)),s=Oo(Oo(t.target,o.target,Ne(.5,1,e)),n.pos,i);return Bt(a,s,Ie(t.fov,o.fov,r),Ie(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,e),focus:Ie(a,o.focus,Ne(.85,1,e)),aperture:Ie(.7,o.aperture,Ne(.85,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=gn(fk(),Ne(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Ne(.4,.84,e)),n=Ne(.8,.9,e);return{phase:"fly",pos:Wt(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],fd=9.2,Us=.6;function Iy(e){return e<Us?Ie(gh(),fd,e/Us):Ie(fd,nk,(e-Us)/(1-Us))}function js(){return Us*Ur((La[0]+.15-gh())/(fd-gh()))}var hd={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},vh=e=>Object.assign({},hd,$i[e].look),uk=`
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
`;function jr(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var L0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function mh(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}Fy.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let Q=document.createElement("link");Q.rel="stylesheet",Q.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",Q.setAttribute("data-tour-font",""),document.head.appendChild(Q)}let r=Q1(),a=null;fetch("res/hand.json").then(Q=>Q.ok?Q.json():null).then(Q=>{a=Q}).catch(()=>{});let i=document.createElement("style");i.textContent=uk+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=jr("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=jr("div","tour-mark",L0(uh.name)),f=jr("button","tour-free","Explore freely");f.type="button";let l=jr("div","tour-links",nd.icons("tour-icon"));l.insertBefore(J1()("tour-icon"),l.firstChild),l.insertBefore(Yf().button("tour-icon"),l.firstChild.nextSibling),dh&&l.appendChild(f);let u=jr("div","tour-progress",$i.map(()=>"<i></i>").join("")),h=jr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),d=h.querySelector("span"),p=jr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${L0(uh.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);mh(p,.4,.35);let v=uh.text.split(/\n\s*\n/).map(Q=>`<p class="tour-line">${L0(Q.trim())}</p>`).join(""),m=jr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${L0(uh.title)}</h2>
		<span class="tour-rule"></span>
		${nd.line("tour-line tour-contact")}
		${v}`);mh(m,.25,.28);let g=jr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);mh(g,.6,.3);let y=jr("div","tour-card tour-master","");function b(Q){let ce=jr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),at=ce.querySelector(".tour-title"),it=ce.querySelector(".tour-body");return ce.filled=!1,ce.body=it,ce.fill=()=>{let zt=Q();if(!zt||ce.filled)return;ce.filled=!0;let $t=zt.title||"";ce.querySelector(".tour-kicker").textContent=K8(zt)||"Oil on canvas";let Bn=ce.querySelector(".visit-row");Bn.innerHTML=rd.button(zt),Bn.hidden=!Bn.innerHTML;let Pr=Bn.querySelector(".visit-btn");Pr&&(Pr.addEventListener("click",ao=>{ao.stopPropagation(),rd.open(zt)}),ce.warm=()=>rd.warm(zt));let yn=0;at.innerHTML=$t.split(" ").map(ao=>'<span class="tour-word">'+ao.split("").map(In=>`<span style="transition-delay:${(.35+yn++*.045).toFixed(3)}s">${L0(In)}</span>`).join("")+"</span>").join(" "),at.setAttribute("aria-label",$t);let Sr=.35+$t.length*.045+.2;ce.querySelector(".tour-rule").style.transitionDelay=Sr.toFixed(2)+"s";let Ho=String(zt.description||"").split(/\n\s*\n/).filter(ao=>ao.trim());if(ce.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&Ho.length){it.innerHTML=Ho.map(ln=>`<p class="hand-text">${L0(ln.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let ao=it.querySelector("canvas"),In=Ho.map(ln=>ln.trim()).join(`

`),jo=!1,Jn=!1,Vr=0;it.addEventListener("wheel",()=>{jo=!0},{passive:!0}),it.addEventListener("touchmove",()=>{jo=!0},{passive:!0});let va=parseFloat(getComputedStyle(it).fontSize)||17,Io=r(ao,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,va*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:ln=>3.5+ln.length/420,seed:3+$t.length,onPen:ln=>{if(jo)return;let ma=ln-it.clientHeight*.55;ma>it.scrollTop+4&&(it.scrollTop+=Math.min(16,ma-it.scrollTop))}});ao.addEventListener("click",ln=>{ln.stopPropagation(),clearTimeout(Vr),Jn?Io.finish():(Jn=!0,Io.write(In,!0))}),ce.write=()=>{if(clearTimeout(Vr),jo=!1,Jn){Io.write(In,!0);return}Io.write("",!0),Vr=setTimeout(()=>{Jn=!0,Io.write(In)},Sr*.6*1e3)},ce.stopWrite=()=>{clearTimeout(Vr),Io.stop()};let Xr=0;window.addEventListener("resize",()=>{clearTimeout(Xr),Xr=setTimeout(()=>{Jn&&ce.classList.contains("on")&&Io.write(In,!0)},250)})}else it.innerHTML=Ho.map(ao=>`<p class="tour-line">${L0(ao.trim())}</p>`).join(""),it.querySelectorAll(".tour-line").forEach((ao,In)=>{ao.style.transitionDelay=(Sr+.3+Math.min(In,6)*.35).toFixed(2)+"s"})},ce}let M=()=>t.paintings?t.paintings():[],k=Q=>M().find(ce=>ce.side==="corridor"&&Math.abs(ce.paintingPosition[0]-Q)<.5),z=b(()=>M().find(Q=>Q.side==="end")),N=()=>jr("div","tour-card",""),q=b(()=>k(z0[0])),D=b(()=>k(N0[0])),ne=b(()=>k(R0[0])),O=ar.map(Q=>b(()=>M().find(ce=>ce.side===Q.side&&Math.abs(ce.paintingPosition[2]-Q.z)<.5))),re=jr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${dh?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${nd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${dh?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);mh(re,.5,.35);let J=[p,m,g,y,z,N(),N(),N(),q,D,ne,N(),...O,re];s.append(...J,c,l,u,h),document.body.appendChild(s);let ee=Ly()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{Mt=-1}});document.body.classList.add("touring");let Qe=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,He=Qe?"Scroll":"Swipe",de=$i.map((Q,ce)=>ce===0?Qe?"Scroll to begin":"Swipe up to begin":ce===1?He+" to follow the leaf":ce===2?He+" to follow the light":ce===3?He+" for its story":ce===6||ce===7||ce===$i.length-1?"":He+" on"),ie=[0];sd.forEach(Q=>ie.push(ie[ie.length-1]+Q.dur));let ot=ie[ie.length-1],ht=210,Ft=95,Tt=.35,mo=1.4,gt=.32,Vt=1,qo=1.3,ur=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Xe=2.2,xt=.7,Rt=.9,pt=!0,ut=0,Qt=0,tt=0,Ae=-10,Pe=!1,Mt=-1,lt=0,rt=0,Xt=0,_=null,Zt=Object.assign({},vh(0)),Jt=$i[0].cam(0),W={phase:"home",pos:Bs.slice(),tumble:0},Ze=0,Ve=Q=>{let ce=0;for(let at=1;at<ie.length;at++)Math.abs(ie[at]-Q)<Math.abs(ie[ce]-Q)&&(ce=at);return ce};function yt(Q){let ce=J[Q];ce&&ce.fill&&(ce.fill(),ce.body.scrollTop=0,ce.offsetWidth),J.forEach((at,it)=>{let zt=at.classList.contains("on");at.classList.toggle("on",it===Q),it===Q&&!zt&&at.write&&at.write(),it!==Q&&zt&&at.stopWrite&&at.stopWrite()}),ce&&ce.warm&&ce.warm(),d.textContent=de[Q]||"",h.classList.toggle("on",!!de[Q])}function Et(){J.forEach(Q=>{Q.stopWrite&&Q.classList.contains("on")&&Q.stopWrite(),Q.classList.remove("on")}),h.classList.remove("on")}let Yt=null,lo=-1;function eo(Q){if(ee.active||!pt||_)return;let ce=Xt-Ae>Tt;if(Ae=Xt,ce||!Yt){let at=0,it=ot;for(let zt=0;zt<ie.length;zt++)if(ie[zt]<=ut-.02&&(at=ie[zt]),ie[zt]>=ut+.02){it=ie[zt];break}Yt={lo:at,hi:it}}Xt<lo||(Pe=!1,tt=Math.max(Yt.lo,Math.min(Yt.hi,tt+Q)),tt=Math.max(ut-Xe,Math.min(ut+Xe,tt)))}function oo(Q){if(ee.active||!pt||_)return;let ce=Pe?tt:ut,at;if(Q>0)at=ie.findIndex(it=>it>ce+.05);else{at=-1;for(let it=ie.length-1;it>=0;it--)if(ie[it]<ce-.05){at=it;break}}at<0||(tt=ie[at],Pe=!0,Ae=Xt)}let Ye=null,ro=Q=>Q.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(Q=>s.addEventListener(Q,ro)),s.addEventListener("pointerdown",Q=>{if(Q.stopPropagation(),!(Q.target.closest("button, a")||Q.target.closest(".tour-body"))){Ye={x:Q.clientX,y:Q.clientY,lx:Q.clientX,ly:Q.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(Q.pointerId)}catch(ce){}}}),s.addEventListener("pointermove",Q=>{if(!Ye)return;let ce=Q.clientX-Ye.lx,at=Q.clientY-Ye.ly;Ye.lx=Q.clientX,Ye.ly=Q.clientY;let it=Math.abs(at)>=Math.abs(ce)?-at:-ce;Ye.moved+=Math.abs(it);let zt=performance.now(),$t=it/Ft;Ye.v=Ye.v*.6+$t/Math.max(.008,(zt-Ye.lt)/1e3)*.4,Ye.lt=zt,Ye.moved>6&&eo($t)});let bt=Q=>{let ce=Ye;if(Ye=null,!!ce){if(ee.active){ce.moved<10&&performance.now()-ce.t<500?ee.tap():ce.y-(Q?Q.clientY:ce.ly)>30&&ee.swipe(1);return}ce.moved<10&&performance.now()-ce.t<500?oo(1):performance.now()-ce.lt<120&&eo(Math.max(-1.6,Math.min(1.6,ce.v*.22)))}};s.addEventListener("pointerup",Q=>{Q.stopPropagation(),bt(Q)}),s.addEventListener("pointercancel",()=>{Ye=null}),s.addEventListener("wheel",Q=>{if(ee.active){if(Q.target.closest(".conf-ui"))return;Q.preventDefault(),ee.wheel(Q.deltaY);return}if(Q.target.closest(".tour-body")){let at=Q.target.closest(".tour-body"),it=at.scrollTop+at.clientHeight>=at.scrollHeight-2&&Q.deltaY>0,zt=at.scrollTop<=0&&Q.deltaY<0;if(!it&&!zt)return}Q.preventDefault();let ce=Q.deltaMode===1?Q.deltaY*16:Q.deltaMode===2?Q.deltaY*window.innerHeight:Q.deltaY;eo(ce/ht)},{passive:!1}),window.addEventListener("keydown",Q=>{if(!pt||_||document.body.classList.contains("visiting"))return;if(ee.active){if(Q.stopImmediatePropagation(),Q.target&&/TEXTAREA|INPUT|BUTTON/.test(Q.target.tagName))return;ee.key(Q.key)&&Q.preventDefault();return}let ce=Q.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ce)>=0){if((ce==="Enter"||ce===" ")&&Q.target&&Q.target.tagName==="BUTTON")return;Q.preventDefault(),Q.stopImmediatePropagation(),oo(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ce)>=0?(Q.preventDefault(),Q.stopImmediatePropagation(),oo(-1)):ce==="Escape"?(Q.preventDefault(),no()):/^[wasdzq]$/i.test(ce)&&Q.stopImmediatePropagation()},!0),window.addEventListener("keyup",Q=>{pt&&!_&&/^(Arrow|[wasdzq]$)/i.test(Q.key)&&Q.stopImmediatePropagation()},!0),f.addEventListener("click",Q=>{Q.stopPropagation(),no()}),re.addEventListener("click",Q=>{let ce=Q.target.closest("button");ce&&(Q.stopPropagation(),ce.dataset.act==="free"&&no(),ce.dataset.act==="replay"&&Mo(),ce.dataset.act==="list"&&_u().show(!1),ce.dataset.act==="confess"&&(Et(),Mt=-2,ee.start(Jt,Zt)))});let Lt=[null,[Br.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Ws[0]-7,0],[42.5+Ws[1]-7,0],[42.5+Ws[2]-7,0],[1e3,Math.PI/2],...ar.map(Q=>[Q.z-1.6,Q.side==="left"?-Math.PI/2:Math.PI/2]),[Gi[2]-1.6,Math.PI]],Ro=null,Ct=0;function no(){if(!pt||_||!dh)return;let Q=Ve(ut),ce=Lt[Q];Ro=Q<=1?{phase:"home",pos:Bs.slice()}:Q>=3&&Q<=6?{phase:"floor",pos:La.slice()}:Q===11?{phase:"floor",pos:hl.slice()}:Q===18?{phase:"floor",pos:Gi.slice()}:null,Ct=Q>=12?1:0,ce&&n.place&&n.place(ce[0],ce[1]),_={start:Xt,fromCam:Jt,fromLook:Object.assign({},Zt)},Et(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Mo(){ut=tt=0,Qt=0,Pe=!1,Mt=-1,lt=0,rt=0,W={phase:"home",pos:Bs.slice(),tumble:0},Eo={start:Xt}}let Eo={start:-1},ko=!1,pa=[],to={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function vt(Q){Ze+=Q*(W.phase==="floor"?0:1);let ce=W.tumble===void 0?0:W.tumble,at=Hs.fromTranslation(pa,W.pos);if(W.phase==="home")at=Hs.rotateY(at,at,2.2+Math.sin(Ze*.9)*.15),at=Hs.rotateZ(at,at,-1+Math.sin(Ze*1.3)*.12),at=Hs.rotateX(at,at,.4);else if(W.phase==="floor")at=Hs.rotateY(at,at,.65),at=Hs.rotateX(at,at,.16);else{let it=W.pos;if(to.prev&&Q>0){let ir=[it[0]-to.prev[0],it[1]-to.prev[1],it[2]-to.prev[2]];if(Math.hypot(ir[0],ir[1],ir[2])<1.5){let _h=Math.min(1,Q*6);for(let Ui=0;Ui<3;Ui++)to.vel[Ui]+=(ir[Ui]/Q-to.vel[Ui])*_h}else to.vel=[0,0,0]}to.prev=it.slice();let zt=to.vel,$t=Math.hypot(zt[0],zt[1],zt[2]),Bn=Ne(.25,1.4,$t),Pr=Ne(.5,2,-zt[1]),yn=Ze*.35*(.3+ce)+.65,Sr=[Math.cos(yn),0,Math.sin(yn)];$t>.001&&(Sr=Oo(Sr,Mr(zt,-1/$t),Bn));let Ho=Math.min(1,Q*4);to.axis=Oo(to.axis,Sr,to.fresh?1:Ho);let ao=to.axis,In=Math.hypot(ao[0],ao[1],ao[2])||1;ao=Mr(ao,1/In);let jo=Jt.eye,Jn=[jo[0]-it[0],jo[1]-it[1],jo[2]-it[2]],Vr=Math.hypot(Jn[0],Jn[1],Jn[2])||1,va=Ie(.6,.22,Bn),Io=[Jn[0]/Vr*va,1+Jn[1]/Vr*va,Jn[2]/Vr*va],Xr=ao[0]*Io[0]+ao[1]*Io[1]+ao[2]*Io[2];Io=ad(Io,Mr(ao,Xr));let ln=Math.hypot(Io[0],Io[1],Io[2])||1;Io=Mr(Io,1/ln);let ma=[ao[1]*Io[2]-ao[2]*Io[1],ao[2]*Io[0]-ao[0]*Io[2],ao[0]*Io[1]-ao[1]*Io[0]],go=Math.hypot(zt[0],zt[2]),Vo=0;if(go>.15&&to.dir&&Q>0){let ir=[zt[0]/go,zt[2]/go];Vo=(to.dir[0]*ir[1]-to.dir[1]*ir[0])/Q,to.dir=ir}else go>.15&&(to.dir=[zt[0]/go,zt[2]/go]);to.bank+=(Math.max(-.8,Math.min(.8,Vo*.3))*Bn-to.bank)*Math.min(1,Q*3),to.rock+=Q*(1.5+2.4*Bn),to.spin+=Q*Pr*7*(.4+ce);let Yr=Math.sin(to.rock)*(.26+.45*ce)*(1-.5*Pr)+to.bank+to.spin,ji=Math.sin(to.rock*.63+1)*(.16+.3*ce)+(W.swing||0)*.9,Na=Math.cos(Yr),Bi=Math.sin(Yr),xl=Wt(Mr(Io,Na),Mr(ma,Bi)),Js=Wt(Mr(ma,Na),Mr(Io,-Bi));Na=Math.cos(ji),Bi=Math.sin(ji);let ec=Wt(Mr(ao,Na),Mr(xl,Bi)),tc=Wt(Mr(xl,Na),Mr(ao,-Bi)),wh=Math.sin(to.rock+1.5708)*.035*(.3+ce)*(1-.5*Bn),oc=Wt(it,Mr(ma,wh)),F0=[ec[0],ec[1],ec[2],0,tc[0],tc[1],tc[2],0,Js[0],Js[1],Js[2],0,oc[0],oc[1],oc[2],1];for(let ir=0;ir<16;ir++)at[ir]=F0[ir];to.fresh=!1}return W.phase!=="fly"&&(to.prev=null,to.vel=[0,0,0],to.fresh=!0,to.spin=0,to.bank=0,to.dir=null),{visible:!0,model:at}}function fo(Q){for(let ce in hd)Zt[ce]=Q[ce]!==void 0?Q[ce]:hd[ce]}function Pn(Q,ce){if(Q<=1)return{phase:"home",pos:Bs.slice(),tumble:0};let at=Cy[Q];if(at){let it=at.amp;return{phase:"fly",pos:Wt(at.pos(),[Math.sin(ce*.55)*it[0],Math.sin(ce*.8)*it[1],(1-Math.cos(ce*.45))*it[2]]),tumble:at.tumble}}return{phase:"floor",pos:(Q>=18?Gi:Q>=10?hl:La).slice(),tumble:0}}let jn=0,xn=null;function Co(Q){let ce=Math.min(.1,Math.max(0,Q-jn));if(jn=Q,Xt=Q,ko||(ko=!0,Eo.start=Q),_)return null;if(ee.active){let go=ee.update(ce);return Jt=go.camera,fo(go.look),o&&window.__camOverride&&(Jt=window.__camOverride),o&&window.__lookOverride&&Object.assign(Zt,window.__lookOverride),{camera:Jt,walker:null,door:1,look:Zt,leaf:vt(ce)}}if(!Pe&&!Ye&&Xt-Ae>xt){let go=Ve(tt);Math.abs(ie[go]-tt)<Rt&&(tt=ie[go])}let at=tt-ut;if(Pe){let Vo=Math.sign(at)*Math.min(Vt,Math.sqrt(2*qo*Math.abs(at)))-Qt;Qt+=Math.sign(Vo)*Math.min(Math.abs(Vo),qo*ce),ut+=Qt*ce,(at>0&&ut>=tt||at<0&&ut<=tt||Math.abs(tt-ut)<1e-4)&&(ut=tt,Qt=0,Pe=!1)}else{let go=Z8(ut,tt,Qt,gt,ce,3);ut=go[0],Qt=go[1],Math.abs(tt-ut)<1e-4&&Math.abs(Qt)<.001&&(ut=tt,Qt=0)}let it=0;for(;it<sd.length-1&&ut>=ie[it+1];)it++;let zt=sd[it],$t=Ur((ut-ie[it])/zt.dur),Bn=$i[it],Pr=$i[it+1],yn=Ve(ut);yn!==lt&&(lt=yn,rt=0);let Sr=Math.abs(ut-ie[yn])<.02;Sr&&(rt+=ce);let Ho=1-Ne(0,1.2,Math.abs(ut-ie[yn])),ao=zt.leaf($t);if(ao.pos?W=Object.assign({},ao):W=Object.assign({},ao,{pos:ao.phase==="home"?Bs.slice():(it>=10?hl:La).slice()}),Cy[yn]&&Ho>0){let go=Pn(yn,rt);W.pos=Oo(W.pos,go.pos,Ho)}let In=zt.walker&&($t>.01||it===6)?zt.walker($t):null;xn=In==null?null:{x:In,z:cd,heading:Math.PI/2,phase:(In-Oy)/rk};let jo=zt.cam($t,Bn.cam(0),Pr.cam(0),W);if(Ho>0&&rt>0){let go=$i[yn],Vo=go.cam(0),Yr=go.cam(rt);jo=Bt(Wt(jo.eye,Mr(ad(Yr.eye,Vo.eye),Ho)),Wt(jo.target,Mr(ad(Yr.target,Vo.target),Ho)),jo.fov+(Yr.fov-Vo.fov)*Ho,jo.roll+(Yr.roll-Vo.roll)*Ho)}if(Ho>0&&!ur){let go=Xt,Vo=.006*Ho,Yr=Math.sin(go*.61)*.6+Math.sin(go*1.37+1.3)*.4,ji=Math.sin(go*.47+2.1)*.6+Math.sin(go*1.13+.4)*.4,Na=Math.sin(go*.53+4)*.5+Math.sin(go*.97+2.6)*.5;jo=Bt(Wt(jo.eye,[Yr*Vo,ji*Vo*.7,Na*Vo]),Wt(jo.target,[ji*Vo*1.8,Yr*Vo*1.4,0]),jo.fov,jo.roll+Na*.0012*Ho)}Jt=jo;let Jn=vh(it),Vr=vh(it+1),va=Object.assign({},Jn,zt.look($t,Jn,Vr,W,jo.eye));if(Ho>0){let go=vh(yn);for(let Vo in go)typeof go[Vo]=="number"&&(va[Vo]=Ie(va[Vo],go[Vo],Ho))}fo(va);let Xr=Sr&&Math.abs(tt-ut)<.02?yn:-1;Xr!==Mt&&(Xr>=0&&(lo=Xt+mo),Mt=Xr,Xr>=0?yt(Xr):Et()),u.querySelectorAll("i").forEach((go,Vo)=>go.classList.toggle("on",Vo===yn));let ln=Mt>=0?J[Mt]:null;ln&&ln.fill&&!ln.filled&&(ln.fill(),ln.filled&&(ln.classList.remove("on"),ln.offsetWidth,ln.classList.add("on")));let ma=Ur((Q-Eo.start)/2.6);return ma<1&&(Zt.fade=Math.max(Zt.fade,1-Ne(0,1,ma)),Zt.fadeColor=[0,0,0]),o&&window.__camOverride&&(Jt=window.__camOverride),o&&window.__lookOverride&&Object.assign(Zt,window.__lookOverride),{camera:Jt,walker:xn,door:zt.door?zt.door($t):it>=12?1:0,look:Zt,leaf:vt(ce)}}return o&&(window.__tour={go:oo,exit:no,wind:eo,confess(){Et(),Mt=-2,ee.start(Jt,Zt)},conf:ee,paper:ch().STATE,seek(Q,ce){ut=tt=ie[Q]+(ie[Q+1]-ie[Q])*ce,Qt=0,Pe=!1,Ae=Xt+1e6,Eo.start=Xt-10,ko=!0},jump(Q){ut=tt=ie[Q],Qt=0,Pe=!1,rt=0,Ae=Xt,Eo.start=Xt-10,ko=!0},state:()=>({current:Ve(ut),scroll:+ut.toFixed(3),target:+tt.toFixed(3),shown:Mt,move:Math.abs(tt-ut)>.02?{p:ut}:null,camNow:Jt,leaf:W,look:Zt})}),{update:Co,get active(){return pt&&!_},handover(Q){if(!_)return null;let ce=Ur((Q-_.start)/1.8);return ce>=1?(pt=!1,null):{from:_.fromCam,fromLook:_.fromLook,k:sn(ce)}},restingDoor:()=>Ct,restingLeaf(){return Ro?(W=Ro,vt(0)):null},mix:C0,cam:Bt}}});var dk=Sv(),za=Zr(),Sd=_u(),bh=za.reflection,pk=!1,eb=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),Ad=()=>eb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Ad=()=>eb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var tb=()=>2*Math.atan(Math.tan(Ad()*.5)*window.innerHeight/window.innerWidth),vk=Gv(),vl=new vk;vl.showPanel(0);pk&&document.body.appendChild(vl.dom);var cn,Zs,yd,Ks,bd,tn;function mk(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!mk())throw dk.finish(),Sd.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");cn=Dv()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:za.pixelRatio});location.hash==="#list"&&Sd.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Sd.show(!1)});Zs=Sm()();var gk=Ju();yd=gk(cn,Zs,bh);Ks=W2()(cn,Zs);bd=K2()(cn);var Gy=rg()(cn,Zs),Dy=vg()(cn),qy=xg()(cn),Hy=Ig()(cn),jy=Dg()(cn),By=Ug()(cn),qi=sx()(cn),wd=T1(),ob=Zl(),xk=kc(),_d=z1(),Md=tr(),hr=Nf(),Ed=gx(),nb=Yf(),{A:Ys}=ta();tn=J3()(Zs,tb);var Qs=ty()(cn,za),Di=iy()(cn),Uy=cy()(cn),yk=hy()(cn,za),bk=gy()(cn,za),Wy=gi()(cn),Vy=ch()(cn),Xy=bi()(cn),ja=$y()({fps:tn,paintings:()=>Ks.interactables(),avatar:qi,onExit:()=>tn.setPaused(!1)});tn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Qs);var P0=[],gl=[],ua=[7,2,1.6];Zs.viewer=ua;var wk=cn({cull:{enable:!0,face:"back"},uniforms:{view:()=>P0,proj:()=>gl,yScale:1,mirrorOn:()=>bh?1:0,night:()=>Md.night,time:cn.context("time")}}),_k=cn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),rb=document.createElement("style");rb.textContent=`

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
`;document.head.appendChild(rb);var da=document.createElement("button");da.className="painting-plaque";da.type="button";da.setAttribute("aria-label","Read painting");document.body.appendChild(da);var kr=document.createElement("div");kr.className="story-overlay";kr.innerHTML=`

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
`;document.body.appendChild(kr);var Hi=document.createElement("div");Hi.className="museum-links";Hi.innerHTML=ob.icons("museum-link");Hi.insertBefore(J1()("museum-link"),Hi.firstChild);Hi.insertBefore(nb.button("museum-link"),Hi.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>Hi.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(Hi);var Mk=kr.querySelector("#story-title"),Ek=kr.querySelector("#story-body"),Yy=kr.querySelector("#story-meta"),kk=kr.querySelector(".story-contact"),pl=kr.querySelector(".story-visit");pl.addEventListener("click",e=>{e.target.closest(".visit-btn")&&O0&&_d.open(O0)});var Sk=kr.querySelector(".story-close"),O0=null,Cr={p:0,target:0,last:0},ab={title:wd.title,description:wd.text,isAbout:!0},ii=null;function Td(e){e&&(O0=e,Mk.textContent=e.title||"",Ek.textContent=e.description||"",Yy.textContent=e.isAbout?"":xk(e),Yy.hidden=!!e.isAbout,kk.hidden=!e.isAbout,pl.innerHTML=e.isAbout?"":_d.button(e),pl.hidden=!pl.innerHTML,pl.hidden||_d.warm(e),kr.classList.toggle("about-mode",!!e.isAbout),kr.classList.add("open"),Cr.target=e.isAbout?1:0,ii=e,da.classList.remove("visible"),tn.setPaused(!0))}function Ld(){kr.classList.remove("open"),Cr.target=0,O0=null,ii=null,tn.setPaused(!1)}function ib(e){e&&(e.preventDefault(),e.stopPropagation()),ii&&Td(ii)}da.addEventListener("pointerup",ib,!0);da.addEventListener("touchend",ib,{passive:!1,capture:!0});da.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),O0===null&&ii&&Td(ii)},!0);Sk.addEventListener("click",Ld);kr.addEventListener("click",e=>{e.target===kr&&Ld()});window.addEventListener("keydown",e=>{e.code==="Escape"&&kr.classList.contains("open")&&Ld()});function Ky(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function Ak(){if(O0)return;if(ja.active){ii=null,da.classList.remove("visible");return}let e=Ks.interactables(),t=tn.forward[0],o=tn.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let l=s[0]-tn.pos[0],u=s[2]-tn.pos[2],h=-(l*c+u*f),d=Math.abs(l*f-u*c),p=-(t*c+o*f)/n,v=i.side==="end"?11:8,m=(i.width||2)/2;p>.9&&h>.5&&h<v&&d<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=tn.pos[0],s=tn.pos[2];t/n>.85&&i<13.6&&s>Ys.z0-.5&&s<Ys.z1+.5&&(r=Object.assign({},ab,{plaqueTitle:wd.name}))}r?(ii=r,da.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,da.classList.add("visible")):(ii=null,da.classList.remove("visible"))}var zd=_s();function Tk(){let e=qi.state;if(!e||!e.glowPos)return null;let t=Ky(tn.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=Ky(tn.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var kd=null;window.addEventListener("pointerdown",e=>{kd={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=kd;if(kd=null,!t||O0||ja.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=Tk();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),Td(ab))},!0);function Lk(e){let t=Math.min(Math.max(e-Cr.last,0),.1);Cr.last=e;let o=t/1.6;if(Cr.p=Cr.target>Cr.p?Math.min(1,Cr.p+o):Math.max(0,Cr.p-o),Cr.p<=0)return;let n=Cr.p<.5?2*Cr.p*Cr.p:1-Math.pow(-2*Cr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=qi.state,i=a&&a.hipsPos?a.hipsPos[0]:Ys.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Ys.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=tn.pos,u=tn.forward,h=[l[0],l[1],l[2]],d=[l[0]+u[0],l[1]+u[1],l[2]+u[2]],p=(y,b)=>y.map((M,k)=>M+(b[k]-M)*n),v=[Ys.cx-6.2,1.7,Ys.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*v[b]+n*n*c[b]);zd.lookAt(tn.view(),g,p(d,f),[0,1,0])}var Vs={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},I0=null,ml=!1,xh=!1;function zk(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return zd.lookAt(e,t,o,[i[0]*f,c,i[2]*f])}function Nk(e){let t=window.innerWidth/window.innerHeight,o=Qs.shot,n=ja.active?ja.update(e):null,r=n?null:ja.handover(e),a=null,i=Vs;if(n){a=n.camera,i=n.look,I0=n.leaf;let s=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;qi.setWalk(s),ml=!!s,Di.setOpen(n.door||0)}else I0=ja.restingLeaf(),qi.setWalk(null),ml=!1,Di.setOpen(ja.restingDoor());if(r){let s=tn.pos,c=tn.forward,f=ja.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],tb()*180/Math.PI,0);a=ja.mix(r.from,f,r.k),i={};for(let l in Vs)i[l]=Array.isArray(Vs[l])?Vs[l]:r.fromLook[l]+(Vs[l]-r.fromLook[l])*r.k}if(a&&n&&(a=Ed.apply(a,e)),a)zk(P0,a.eye,a.target,a.roll||0),zd.perspective(gl,a.fov*Math.PI/180,t,.1,700),ua[0]=a.eye[0],ua[1]=a.eye[1],ua[2]=a.eye[2];else{let s=tn.view(),c=tn.proj();for(let h=0;h<16;h++)P0[h]=s[h],gl[h]=c[h];let f=s[12],l=s[13],u=s[14];ua[0]=-(s[0]*f+s[1]*l+s[2]*u),ua[1]=-(s[4]*f+s[5]*l+s[6]*u),ua[2]=-(s[8]*f+s[9]*l+s[10]*u)}for(let s in Vs)o[s]=i[s];n&&Ed.pull(o,e)}var Wr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},md=[9,9,9,9],Qy=[0,0,0,0],ul=0,gd=0,Xs=null,Zy=0,Jy=0,dl=0;function Rk(e){let t=Math.min(.1,Math.max(0,e-Zy));Zy=e,Wr.focus=Qs.shot.focus,Wr.aperture=za.post>=2?Qs.shot.aperture:0;for(let i=0;i<4;i++)md[i]+=t,Wr.wake[i][3]=Qy[i]*Math.exp(-md[i]/1.1);let o=I0&&I0.visible?I0.model:null;if(o&&t>0){let i=[o[12],o[13],o[14]];if(Xs){let s=[i[0]-Xs[0],i[1]-Xs[1],i[2]-Xs[2]],c=Math.hypot(s[0],s[1],s[2]),f=c/t;if(c<1.5&&f>.12){let l=Math.min(1,t*8);for(let h=0;h<3;h++)Wr.wakeDir[h]+=(s[h]/c-Wr.wakeDir[h])*l;let u=Math.hypot(Wr.wakeDir[0],Wr.wakeDir[1],Wr.wakeDir[2])||1;for(let h=0;h<3;h++)Wr.wakeDir[h]/=u;if(gd+=t,gd>.14){gd=0;let h=Wr.wake[ul];h[0]=i[0],h[1]=i[1],h[2]=i[2],Qy[ul]=Math.min(1,(f-.12)/1.6)*.5,md[ul]=0,ul=(ul+1)%4}}}Xs=i}else o||(Xs=null);let n=Di.openNow?Di.openNow():0,r=t>0?(n-Jy)/t:0;Jy=n;let a=Math.max(-1,Math.min(1,r*1.2));dl+=(a-dl)*Math.min(1,t*(Math.abs(a)>Math.abs(dl)?6:.7)),Wr.gust[0]+=dl*5.5*t,Wr.gust[1]=Math.abs(dl)}var xd=0,yh=!1;cn.frame(function({time:e}){if(document.body.classList.contains("visiting")){xd=0;return}vl.begin(),Md.tick(e);let t=ja.active&&Ed.resting&&Md.settled&&(za.isPhone||za.scale<1||za.level>0);if(t){if(yh=!yh,yh){vl.end();return}}else yh=!1;let o=e-xd;xd=e,za.frame(t?o/2:o),bh=za.reflection,tn.tick({time:e}),Lk(e),Ks.update(tn.pos,tn.fmouse[1],Ad()),Ak(),Nk(e),hr.update(P0,gl,ua),nb.listen(ua),xh=!ml&&hr.room("stair")&&(!hr.room("court")||ua[0]<.5||ua[2]>30),qi.setPiano(xh),Rk(e),Qs.capture(arguments[0],{view:P0,proj:gl,eye:ua},()=>{wk(()=>{bh&&hr.floor&&_k(()=>{yd(),Gy({reflected:!0}),Wy(),hr.room("stair",!0)&&(Xy({reflected:!0}),Vy({reflected:!0,view:P0})),hr.room("court",!0)&&By(),(xh||hr.room("court",!0)||ml)&&qi(),bd(Ks.batch()),hr.room("street",!0)&&Dy(),hr.room("garden",!0)&&Hy(),hr.room("florence",!0)&&jy(),Uy(I0),Di(),qy(),Di.glass()}),yd(),Gy(),Wy(),hr.room("stair")&&(Xy(),Vy({view:P0})),hr.room("court")&&By(),(xh||hr.room("court")||ml)&&qi(),bd(Ks.batch()),hr.room("street")&&Dy(),hr.room("garden")&&(Hy(),bk()),hr.room("florence")&&jy(),Uy(I0),Di(),yk(Wr),qy(),Di.glass()})}),Qs.present(),vl.end()});})();
