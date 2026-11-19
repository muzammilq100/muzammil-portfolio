"use strict";(()=>{var de=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Fu=de((J8,Wv)=>{"use strict";var Bw=[{name:"court",test:/res\/(tree\.bin|tree\/|avatar\/(?!motion\.))/},{name:"hall",test:/res\/(pieta\.bin|venus\.bin|david\.bin|avatar\/motion\.)/},{name:"rest",test:/res\/(piano\.bin|audio\/|street\/photo_night)/}],xs=document.getElementById("loader"),gs=xs&&xs.querySelector(".loader-name"),$c=0,ff=0,hf=!1,Uw=performance.now(),ys=.06,ms=0,Ru=0,Gv=!1,jw=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Ww(e){if(!gs)return;let t=gs.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";gs.style.webkitMaskPosition=n,gs.style.maskPosition=n}function Bv(e){let t=Math.min(.05,Ru?(e-Ru)/1e3:.016);Ru=e;let o=hf?.75:.22+(ys-ms)*1.2;if(ms=Math.min(ys,ms+Math.max(0,o)*t),jw&&(ms=ys),Ww(ms),hf&&ms>=.999){Gv||(Gv=!0,setTimeout(Uv,650));return}requestAnimationFrame(Bv)}gs&&requestAnimationFrame(Bv);function Dv(){let e=$c?ff/Math.max($c,24):0;ys=Math.max(ys,Math.min(.9,.06+e*.84))}function Uv(){xs&&(xs.classList.add("done"),setTimeout(()=>xs.remove(),1400))}function Pu(){hf||(hf=!0,Iu=!0,Ou(),window.__galleryReady=!0,xs&&(ys=1,gs||Uv()))}var qv=null;function Vw(){clearTimeout(qv),ff>=$c&&performance.now()-Uw>600&&(qv=setTimeout(()=>{ff>=$c&&Pu()},450))}setTimeout(Pu,2e4);var Xw=e=>/(^|\/)(res|images)\//.test(e),uf=window.fetch.bind(window);async function Yw(e,t){let o=await uf(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}var g0=Bw.map(e=>({name:e.name,test:e.test,waiting:[],asked:0,done:0,open:!1,cbs:[]})),Kw=e=>g0.find(t=>t.test.test(e)),Iu=!1;function Cu(e){return e.open&&e.done>=e.asked&&e.waiting.length===0}function Ou(){for(let e=0;e<g0.length;e++){let t=g0[e],o=e===0?Iu:Cu(g0[e-1]);!t.open&&o&&(t.open=!0,t.waiting.splice(0).forEach(n=>n())),Cu(t)&&t.cbs.splice(0).forEach(n=>{try{n()}catch(r){console.error(r)}})}}function Hv(e,t,o){return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?Yw(o,t).catch(()=>uf(e,t)):uf(e,t)}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!Xw(o))return uf(e,t);let n=Kw(o);if(n){n.asked++;let a=()=>{n.done++,Ou()},i=c=>c.blob().then(f=>new Response(f,{status:c.status,statusText:c.statusText,headers:c.headers})),s=()=>Hv(e,t,o).then(i).then(c=>(a(),c),c=>{throw a(),c});return n.open?s():new Promise((c,f)=>{n.waiting.push(()=>s().then(c,f))})}$c++,Dv();let r=a=>(ff++,Dv(),Vw(),a);return Hv(e,t,o).then(r,a=>{throw r(),a})};function Qw(){Iu&&(g0.forEach(e=>{e.open||(e.open=!0,e.waiting.splice(0).forEach(t=>t()))}),Ou())}function jv(e){let t=g0.find(o=>o.name===e);return!t||Cu(t)}function Zw(e,t){if(jv(e)){t();return}g0.find(o=>o.name===e).cbs.push(t)}Wv.exports={finish:Pu,ready:jv,onReady:Zw,hurry:Qw}});var ua=de((eS,Kv)=>{"use strict";var Vv=typeof navigator!="undefined"&&navigator.userAgent||"",Jw=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,ri=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Vv)||/Macintosh/.test(Vv)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||Jw,Xv=typeof window!="undefined"&&window.devicePixelRatio||1,go={isPhone:ri,pixelRatio:ri?Math.min(Xv,1.5):Math.min(Xv,2),reflection:!ri,gardenDetail:ri?0:1,leafShare:ri?.65:1,motion:!ri,post:ri?1:2,level:ri?1:0};go.scale=1;var e4=ri?.55:.6,Gc=0,df=0,Dc=0,qc=0,bs=1,Hc=0,pf=48,ws=null,$u=0;function t4(e){ws={fps:e,scale:go.scale},go.scale>.86?go.scale=.85:go.reflection?go.stepDown():go.scale>.71?go.scale=.7:go.stepDown()||(go.scale=Math.max(e4,go.scale-.1))}var Yv=!0;try{/[?&]noadapt\b/.test(location.search)&&(Yv=!1)}catch(e){}go.frame=e=>{if(!Yv)return;if(!(e>0)||e>1){Gc=0,df=0;return}if(Gc+=e,df++,Gc<.75)return;let t=df/Gc;if(Gc=0,df=0,Hc>0&&(Hc-=.75,Hc<=0&&(bs=1)),ws){if(t<ws.fps*1.08&&ws.scale>go.scale){if(++$u>=2){go.scale=1,bs=1,Hc=0,pf=Math.min(pf,t*.85),$u=0,Dc=0,ws=null;return}}else $u=0;ws=null}if(t<pf){if(qc=0,++Dc>=2){if(Dc=0,go.scale>.61&&go.climbed){bs=go.scale-.05,Hc=40,go.scale=bs,go.climbed=!1;return}t4(t)}}else t>Math.max(pf*1.15,55)?(Dc=0,++qc>=6&&go.scale<bs-.001?(go.scale=Math.min(bs,go.scale+.05),go.climbed=!0,qc=0):qc>=6&&(go.climbed=!1)):(Dc=0,qc=0)};go.stepDown=()=>{if(go.reflection)go.reflection=!1;else if(go.gardenDetail>0||go.motion)go.gardenDetail=0,go.motion=!1,go.leafShare=Math.min(go.leafShare,.65);else if(go.post>0)go.post--;else return!1;return go.level++,!0};Kv.exports=go});var Gu=de((tS,Qv)=>{"use strict";Qv.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

Why?

Because the dead are easier to love. They don\u2019t talk back. They don\u2019t disappoint. They don\u2019t challenge your beliefs or make demands of your time or empathy. The dead become perfect in memory\u2014flaws forgotten, expectations erased. To love someone who\u2019s no longer here is safe. You get to shape them however you want. You don\u2019t have to face the complexity of who they really were, or who you failed to be for them.

And this is what I\u2019ve seen, over and over. People rarely offer love when it matters. Parents, siblings, friends, partners\u2014their love is often conditional. Measured. Dependent on how useful, agreeable, or flawless you are. You can pour yourself out for them, break yourself trying to be enough, and still fall short. You can live your whole life waiting for a kind word that never comes.

But when you die, everything changes.

Suddenly, you were \u201Cthe kindest soul,\u201D \u201Ctoo good for this world,\u201D \u201Csomeone we didn\u2019t deserve.\u201D The same people who made you feel small now speak of you with reverence. They bring flowers. They cry. They whisper prayers. But none of it is for you anymore. The flowers don\u2019t heal what they broke. The prayers don\u2019t reach ears that have gone silent. These gestures are not for the dead\u2014they\u2019re for the living. For their guilt. For their comfort. For their image.

\u201CYou brought me flowers when I could no longer smell them.
You reached for my hand when it was already cold.\u201D

This work is not just about death\u2014it\u2019s about being noticed only when you\u2019re gone. It\u2019s about how easily people forget your flaws once you\u2019re no longer around to inconvenience them. How we wait for silence to speak love. How we mourn more for our comfort than for the person who\u2019s passed.

It asks one question, quietly but sharply:

Why must someone die before we finally decide they were worthy of love?`},{file:"the-hardest-gift-i-gave.jpg",slug:"the-hardest-gift-i-gave",title:"The Hardest Gift I Gave",medium:"Oil on canvas",size:[91,61],description:`True love is an act of shelter, but it is incredibly easy for that shelter to quietly warp into a cage. We fall into the trap of believing that because we love someone deeply, they belong near us, that our affection is enough to justify keeping them close, even when their spirit is pulling toward a completely different horizon. But love isn't a possession. It isn't a debt or a contract of ownership. Realising that you are holding someone back against their will, and choosing to unlatch the door anyway, is perhaps the rawest, most devastating form of love there is. It is the moment you value their breathing room more than your own comfort.

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
but the loneliness of having no one willing to admit it happened.`}]});var vf=de((oS,em)=>{"use strict";var kr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Zv='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Jv='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';kr.instagramUrl="https://instagram.com/"+kr.instagram;kr.mailUrl="mailto:"+kr.email+"?subject="+encodeURIComponent("Your paintings");kr.icons=e=>`
	<a class="${e}" href="${kr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${kr.instagram}" title="Instagram">${Zv}</a>
	<a class="${e}" href="${kr.mailUrl}" aria-label="Email ${kr.email}" title="Email">${Jv}</a>`;kr.line=e=>`
	<span class="${e}">
		<a href="${kr.instagramUrl}" target="_blank" rel="noopener">${Zv}<span>@${kr.instagram}</span></a>
		<a href="${kr.mailUrl}">${Jv}<span>${kr.email}</span></a>
	</span>`;em.exports=kr});var Bc=de((nS,tm)=>{"use strict";tm.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var Du=de((rS,rm)=>{"use strict";var o4=Gu(),n4=vf(),om=Bc(),r4=ua(),Ai=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),a4=`
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
`,Er=null;function i4(e){if(Er){Er.hidden=!1,requestAnimationFrame(()=>Er.classList.add("on"));return}let t=document.createElement("style");t.textContent=a4,document.head.appendChild(t);let o=!r4.isPhone;Er=document.createElement("div"),Er.className="plist",Er.setAttribute("role","region"),Er.setAttribute("aria-label","All paintings"),Er.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">Every canvas holds<br>what I could not say aloud.</p>
			${n4.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${o4.map(r=>`
			<article class="plist-item" id="${Ai(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Ai(r.title)}, ${Ai(om(r))}"
					src="images/web/${Ai(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Ai(r.file)}'">
				<p class="plist-meta">${Ai(om(r))}</p>
				<h2>${Ai(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Ai(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Er.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Er.querySelector(".plist-close");n&&n.addEventListener("click",nm),document.body.appendChild(Er),requestAnimationFrame(()=>Er.classList.add("on"))}function nm(){Er&&(Er.classList.remove("on"),setTimeout(()=>{Er.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}rm.exports={show:i4,hide:nm}});var am=de((qu,Hu)=>{(function(e,t){typeof qu=="object"&&typeof Hu!="undefined"?Hu.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(qu,function(){var e=function(){function t(p){return r.appendChild(p.dom),p}function o(p){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===p?"block":"none";n=p}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(p){p.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var p=(performance||Date).now();if(f.update(p-a,200),p>i+1e3&&(c.update(1e3*s/(p-i),100),i=p,s=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,l=3*s,p=2*s,h=3*s,u=15*s,v=74*s,d=30*s,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(t,l,p),g.fillRect(h,u,v,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,u,v,d),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,u),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",l,p),g.drawImage(m,h+s,u,v-s,d,h,u,v-s,d),g.fillRect(h+v-s,u,s,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+v-s,u,s,i((1-y/b)*d))}}},e})});var im=de((Bu,Uu)=>{(function(e,t){typeof Bu=="object"&&typeof Uu!="undefined"?Uu.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(Bu,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,M){for(var N=Object.keys(M),J=0;J<N.length;++J)x[N[J]]=M[N[J]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var M=new Error("(regl) "+x);throw console.error(M),M}function a(x,M){x||r(M)}function i(x){return x?": "+x:""}function s(x,M,N){x in M||r("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(M).join())}function c(x,M){e(x)||r("invalid parameter type"+i(M)+". must be a typed array")}function f(x,M){switch(M){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,M,N){f(x,M)||r("invalid parameter type"+i(N)+". expected "+M+", got "+typeof x)}function p(x,M){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(M)+". must be a nonnegative integer")}function h(x,M,N){M.indexOf(x)<0&&r("invalid value"+i(N)+". must be one of: "+M)}var u=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function v(x){Object.keys(x).forEach(function(M){u.indexOf(M)<0&&r('invalid regl constructor argument "'+M+'". must be one of '+u)})}function d(x,M){for(x=x+"";x.length<M;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,M){this.number=x,this.line=M,this.errors=[]}function y(x,M,N){this.file=x,this.line=M,this.message=N}function b(){var x=new Error,M=(x.stack||x).toString(),N=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(M);if(N)return N[1];var J=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(M);return J?J[1]:"unknown"}function E(){var x=new Error,M=(x.stack||x).toString(),N=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(M);if(N)return N[1];var J=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(M);return J?J[1]:"unknown"}function k(x,M){var N=x.split(`
`),J=1,se=0,K={unknown:new m,0:new m};K.unknown.name=K[0].name=M||b(),K.unknown.lines.push(new g(0,""));for(var ne=0;ne<N.length;++ne){var me=N[ne],ye=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(me);if(ye)switch(ye[1]){case"line":var ke=/(\d+)(\s+\d+)?/.exec(ye[2]);ke&&(J=ke[1]|0,ke[2]&&(se=ke[2]|0,se in K||(K[se]=new m)));break;case"define":var be=/SHADER_NAME(_B64)?\s+(.*)$/.exec(ye[2]);be&&(K[se].name=be[1]?n(be[2]):be[2]);break}K[se].lines.push(new g(J++,me))}return Object.keys(K).forEach(function(Le){var Fe=K[Le];Fe.lines.forEach(function(ge){Fe.index[ge.number]=ge})}),K}function L(x){var M=[];return x.split(`
`).forEach(function(N){if(!(N.length<5)){var J=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(N);J?M.push(new y(J[1]|0,J[2]|0,J[3].trim())):N.length>0&&M.push(new y("unknown",0,N))}}),M}function R(x,M){M.forEach(function(N){var J=x[N.file];if(J){var se=J.index[N.line];if(se){se.errors.push(N),J.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(N)})}function X(x,M,N,J,se){if(!x.getShaderParameter(M,x.COMPILE_STATUS)){var K=x.getShaderInfoLog(M),ne=J===x.FRAGMENT_SHADER?"fragment":"vertex";Ae(N,"string",ne+" shader source must be a string",se);var me=k(N,se),ye=L(K);R(me,ye),Object.keys(me).forEach(function(ke){var be=me[ke];if(!be.hasErrors)return;var Le=[""],Fe=[""];function ge(Ne,B){Le.push(Ne),Fe.push(B||"")}ge("file number "+ke+": "+be.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),be.lines.forEach(function(Ne){if(Ne.errors.length>0){ge(d(Ne.number,4)+"|  ","background-color:yellow; font-weight:bold"),ge(Ne.line+o,"color:red; background-color:yellow; font-weight:bold");var B=0;Ne.errors.forEach(function(re){var Me=re.message,qe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Me);if(qe){var he=qe[1];switch(Me=qe[2],he){case"assign":he="=";break}B=Math.max(Ne.line.indexOf(he,B),0)}else B=0;ge(d("| ",6)),ge(d("^^^",B+3)+o,"font-weight:bold"),ge(d("| ",6)),ge(Me+o,"font-weight:bold")}),ge(d("| ",6)+o)}else ge(d(Ne.number,4)+"|  "),ge(Ne.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Fe[0]=Le.join("%c"),console.log.apply(console,Fe)):console.log(Le.join(""))}),a.raise("Error compiling "+ne+" shader, "+me[0].name)}}function O(x,M,N,J,se){if(!x.getProgramParameter(M,x.LINK_STATUS)){var K=x.getProgramInfoLog(M),ne=k(N,se),me=k(J,se),ye='Error linking program with vertex shader, "'+me[0].name+'", and fragment shader "'+ne[0].name+'"';typeof document!="undefined"?console.log("%c"+ye+o+"%c"+K,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(ye+o+K),a.raise(ye)}}function te(x){x._commandRef=b()}function G(x,M,N,J){te(x);function se(ye){return ye?J.id(ye):0}x._fragId=se(x.static.frag),x._vertId=se(x.static.vert);function K(ye,ke){Object.keys(ke).forEach(function(be){ye[J.id(be)]=!0})}var ne=x._uniformSet={};K(ne,M.static),K(ne,M.dynamic);var me=x._attributeSet={};K(me,N.static),K(me,N.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function oe(x,M){var N=E();r(x+" in command "+(M||b())+(N==="unknown"?"":" called from "+N))}function D(x,M,N){x||oe(M,N||b())}function W(x,M,N,J){x in M||oe("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(M).join(),J||b())}function Ae(x,M,N,J){f(x,M)||oe("invalid parameter type"+i(N)+". expected "+M+", got "+typeof x,J||b())}function Be(x){x()}function Te(x,M,N){x.texture?h(x.texture._texture.internalformat,M,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,N,"unsupported renderbuffer format for attachment")}var pe=33071,_e=9728,ht=9984,Ot=9985,He=9986,at=9987,_t=5120,Jt=5121,ro=5122,en=5123,Xe=5124,ut=5125,dt=5126,Xt=32819,Oo=32820,Ho=33635,zt=34042,Se=36193,Pe={};Pe[_t]=Pe[Jt]=1,Pe[ro]=Pe[en]=Pe[Se]=Pe[Ho]=Pe[Xt]=Pe[Oo]=2,Pe[Xe]=Pe[ut]=Pe[dt]=Pe[zt]=4;function Mt(x,M){return x===Oo||x===Xt||x===Ho?2:x===zt?4:Pe[x]*M}function je(x){return!(x&x-1)&&!!x}function Ue(x,M,N){var J,se=M.width,K=M.height,ne=M.channels;a(se>0&&se<=N.maxTextureSize&&K>0&&K<=N.maxTextureSize,"invalid texture shape"),(x.wrapS!==pe||x.wrapT!==pe)&&a(je(se)&&je(K),"incompatible wrap mode for texture, both width and height must be power of 2"),M.mipmask===1?se!==1&&K!==1&&a(x.minFilter!==ht&&x.minFilter!==He&&x.minFilter!==Ot&&x.minFilter!==at,"min filter requires mipmap"):(a(je(se)&&je(K),"texture must be a square power of 2 to support mipmapping"),a(M.mipmask===(se<<1)-1,"missing or incomplete mipmap data")),M.type===dt&&(N.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===_e&&x.magFilter===_e,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var me=M.images;for(J=0;J<16;++J)if(me[J]){var ye=se>>J,ke=K>>J;a(M.mipmask&1<<J,"missing mipmap data");var be=me[J];if(a(be.width===ye&&be.height===ke,"invalid shape for mip images"),a(be.format===M.format&&be.internalformat===M.internalformat&&be.type===M.type,"incompatible type for mip image"),!be.compressed)if(be.data){var Le=Math.ceil(Mt(be.type,ne)*ye/be.unpackAlignment)*be.unpackAlignment;a(be.data.byteLength===Le*ke,"invalid data for image, buffer size is inconsistent with image format")}else be.element||be.copy}else x.genMipmaps||a((M.mipmask&1<<J)===0,"extra mipmap data");M.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function so(x,M,N,J){var se=x.width,K=x.height,ne=x.channels;a(se>0&&se<=J.maxTextureSize&&K>0&&K<=J.maxTextureSize,"invalid texture shape"),a(se===K,"cube map must be square"),a(M.wrapS===pe&&M.wrapT===pe,"wrap mode not supported by cube map");for(var me=0;me<N.length;++me){var ye=N[me];a(ye.width===se&&ye.height===K,"inconsistent cube map face shape"),M.genMipmaps&&(a(!ye.compressed,"can not generate mipmap for compressed textures"),a(ye.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var ke=ye.images,be=0;be<16;++be){var Le=ke[be];if(Le){var Fe=se>>be,ge=K>>be;a(ye.mipmask&1<<be,"missing mipmap data"),a(Le.width===Fe&&Le.height===ge,"invalid shape for mip images"),a(Le.format===x.format&&Le.internalformat===x.internalformat&&Le.type===x.type,"incompatible type for mip image"),Le.compressed||(Le.data?a(Le.data.byteLength===Fe*ge*Math.max(Mt(Le.type,ne),Le.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Le.element||Le.copy)}}}}var _=t(a,{optional:Be,raise:r,commandRaise:oe,command:D,parameter:s,commandParameter:W,constructor:v,type:l,commandType:Ae,isTypedArray:c,nni:p,oneOf:h,shaderError:X,linkError:O,callSite:E,saveCommandRef:te,saveDrawInfo:G,framebufferFormat:Te,guessCommand:b,texture2D:Ue,textureCube:so}),Eo=0,co=0,ao=5,Bo=6;function So(x,M){this.id=Eo++,this.type=x,this.data=M}function nn(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function yo(x){if(x.length===0)return[];var M=x.charAt(0),N=x.charAt(x.length-1);if(x.length>1&&M===N&&(M==='"'||M==="'"))return['"'+nn(x.substr(1,x.length-2))+'"'];var J=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(J)return yo(x.substr(0,J.index)).concat(yo(J[1])).concat(yo(x.substr(J.index+J[0].length)));var se=x.split(".");if(se.length===1)return['"'+nn(x)+'"'];for(var K=[],ne=0;ne<se.length;++ne)K=K.concat(yo(se[ne]));return K}function Ja(x){return"["+yo(x).join("][")+"]"}function xi(x,M){return new So(x,Ja(M+""))}function yi(x){return typeof x=="function"&&!x._reglType||x instanceof So}function Q(x,M){if(typeof x=="function")return new So(co,x);if(typeof x=="number"||typeof x=="boolean")return new So(ao,x);if(Array.isArray(x))return new So(Bo,x.map((N,J)=>Q(N,M+"["+J+"]")));if(x instanceof So)return x;_(!1,"invalid option type in uniform "+M)}var Ie={DynamicVariable:So,define:xi,isDynamic:yi,unbox:Q,accessor:Ja},Ye={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},ze=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function rt(){var x={"":0},M=[""];return{id:function(N){var J=x[N];return J||(J=x[N]=M.length,M.push(N),J)},str:function(N){return M[N]}}}function mt(x,M,N){var J=document.createElement("canvas");t(J.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(J),x===document.body&&(J.style.position="absolute",t(x.style,{margin:0,padding:0}));function se(){var me=window.innerWidth,ye=window.innerHeight;if(x!==document.body){var ke=x.getBoundingClientRect();me=ke.right-ke.left,ye=ke.bottom-ke.top}J.width=N*me,J.height=N*ye,t(J.style,{width:me+"px",height:ye+"px"})}var K;x!==document.body&&typeof ResizeObserver=="function"?(K=new ResizeObserver(function(){setTimeout(se)}),K.observe(x)):window.addEventListener("resize",se,!1);function ne(){K?K.disconnect():window.removeEventListener("resize",se),x.removeChild(J)}return se(),{canvas:J,onDestroy:ne}}function Et(x,M){function N(J){try{return x.getContext(J,M)}catch(se){return null}}return N("webgl")||N("experimental-webgl")||N("webgl-experimental")}function ft(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function Tt(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function pt(x){return typeof x=="string"?x.split():(_(Array.isArray(x),"invalid extension array"),x)}function yt(x){return typeof x=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function bt(x){var M=x||{},N,J,se,K,ne={},me=[],ye=[],ke=typeof window=="undefined"?1:window.devicePixelRatio,be=!1,Le=function(Ne){Ne&&_.raise(Ne)},Fe=function(){};if(typeof M=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),N=document.querySelector(M),_(N,"invalid query string for element")):typeof M=="object"?ft(M)?N=M:Tt(M)?(K=M,se=K.canvas):(_.constructor(M),"gl"in M?K=M.gl:"canvas"in M?se=yt(M.canvas):"container"in M&&(J=yt(M.container)),"attributes"in M&&(ne=M.attributes,_.type(ne,"object","invalid context attributes")),"extensions"in M&&(me=pt(M.extensions)),"optionalExtensions"in M&&(ye=pt(M.optionalExtensions)),"onDone"in M&&(_.type(M.onDone,"function","invalid or missing onDone callback"),Le=M.onDone),"profile"in M&&(be=!!M.profile),"pixelRatio"in M&&(ke=+M.pixelRatio,_(ke>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),N&&(N.nodeName.toLowerCase()==="canvas"?se=N:J=N),!K){if(!se){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var ge=mt(J||document.body,Le,ke);if(!ge)return null;se=ge.canvas,Fe=ge.onDestroy}ne.premultipliedAlpha===void 0&&(ne.premultipliedAlpha=!0),K=Et(se,ne)}return K?{gl:K,canvas:se,container:J,extensions:me,optionalExtensions:ye,pixelRatio:ke,profile:be,onDone:Le,onDestroy:Fe}:(Fe(),Le("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function At(x,M){var N={};function J(ne){_.type(ne,"string","extension name must be string");var me=ne.toLowerCase(),ye;try{ye=N[me]=x.getExtension(me)}catch(ke){}return!!ye}for(var se=0;se<M.extensions.length;++se){var K=M.extensions[se];if(!J(K))return M.onDestroy(),M.onDone('"'+K+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return M.optionalExtensions.forEach(J),{extensions:N,restore:function(){Object.keys(N).forEach(function(ne){if(N[ne]&&!J(ne))throw new Error("(regl): error restoring extension "+ne)})}}}function Ht(x,M){for(var N=Array(x),J=0;J<x;++J)N[J]=M(J);return N}var it=5120,eo=5121,vo=5122,Fo=5123,$o=5124,na=5125,ra=5126;function Yt(x){for(var M=16;M<=1<<28;M*=16)if(x<=M)return M;return 0}function Kt(x){var M,N;return M=(x>65535)<<4,x>>>=M,N=(x>255)<<3,x>>>=N,M|=N,N=(x>15)<<2,x>>>=N,M|=N,N=(x>3)<<1,x>>>=N,M|=N,M|x>>1}function ln(){var x=Ht(8,function(){return[]});function M(K){var ne=Yt(K),me=x[Kt(ne)>>2];return me.length>0?me.pop():new ArrayBuffer(ne)}function N(K){x[Kt(K.byteLength)>>2].push(K)}function J(K,ne){var me=null;switch(K){case it:me=new Int8Array(M(ne),0,ne);break;case eo:me=new Uint8Array(M(ne),0,ne);break;case vo:me=new Int16Array(M(2*ne),0,ne);break;case Fo:me=new Uint16Array(M(2*ne),0,ne);break;case $o:me=new Int32Array(M(4*ne),0,ne);break;case na:me=new Uint32Array(M(4*ne),0,ne);break;case ra:me=new Float32Array(M(4*ne),0,ne);break;default:return null}return me.length!==ne?me.subarray(0,ne):me}function se(K){N(K.buffer)}return{alloc:M,free:N,allocType:J,freeType:se}}var ho=ln();ho.zero=ln();var Rt=3408,No=3410,gn=3411,Ro=3412,ei=3413,bi=3414,ti=3415,j=33901,le=33902,Qe=3379,lt=3386,to=34921,Co=36347,cr=36348,Ea=35661,Pn=35660,aa=34930,Sn=36349,mo=34076,lr=34024,fn=7936,fr=7937,ia=7938,Sa=35724,Do=34047,sa=36063,xn=34852,Or=3553,oo=34067,Uo=34069,ca=33984,Aa=6408,la=5126,wi=5121,J0=36160,yc=36053,bc=36064,wc=16384,Fh=function(x,M){var N=1;M.ext_texture_filter_anisotropic&&(N=x.getParameter(Do));var J=1,se=1;M.webgl_draw_buffers&&(J=x.getParameter(xn),se=x.getParameter(sa));var K=!!M.oes_texture_float;if(K){var ne=x.createTexture();x.bindTexture(Or,ne),x.texImage2D(Or,0,Aa,1,1,0,Aa,la,null);var me=x.createFramebuffer();if(x.bindFramebuffer(J0,me),x.framebufferTexture2D(J0,bc,Or,ne,0),x.bindTexture(Or,null),x.checkFramebufferStatus(J0)!==yc)K=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(wc);var ye=ho.allocType(la,4);x.readPixels(0,0,1,1,Aa,la,ye),x.getError()?K=!1:(x.deleteFramebuffer(me),x.deleteTexture(ne),K=ye[0]===1),ho.freeType(ye)}}var ke=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),be=!0;if(!ke){var Le=x.createTexture(),Fe=ho.allocType(wi,36);x.activeTexture(ca),x.bindTexture(oo,Le),x.texImage2D(Uo,0,Aa,3,3,0,Aa,wi,Fe),ho.freeType(Fe),x.bindTexture(oo,null),x.deleteTexture(Le),be=!x.getError()}return{colorBits:[x.getParameter(No),x.getParameter(gn),x.getParameter(Ro),x.getParameter(ei)],depthBits:x.getParameter(bi),stencilBits:x.getParameter(ti),subpixelBits:x.getParameter(Rt),extensions:Object.keys(M).filter(function(ge){return!!M[ge]}),maxAnisotropic:N,maxDrawbuffers:J,maxColorAttachments:se,pointSizeDims:x.getParameter(j),lineWidthDims:x.getParameter(le),maxViewportDims:x.getParameter(lt),maxCombinedTextureUnits:x.getParameter(Ea),maxCubeMapSize:x.getParameter(mo),maxRenderbufferSize:x.getParameter(lr),maxTextureUnits:x.getParameter(aa),maxTextureSize:x.getParameter(Qe),maxAttributes:x.getParameter(to),maxVertexUniforms:x.getParameter(Co),maxVertexTextureUnits:x.getParameter(Pn),maxVaryingVectors:x.getParameter(cr),maxFragmentUniforms:x.getParameter(Sn),glsl:x.getParameter(Sa),renderer:x.getParameter(fr),vendor:x.getParameter(fn),version:x.getParameter(ia),readFloat:K,npotTextureCube:be}};function br(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var wr=function(x){return Object.keys(x).map(function(M){return x[M]})},Jn={shape:Nb,flatten:zb};function $h(x,M,N){for(var J=0;J<M;++J)N[J]=x[J]}function a0(x,M,N,J){for(var se=0,K=0;K<M;++K)for(var ne=x[K],me=0;me<N;++me)J[se++]=ne[me]}function Qd(x,M,N,J,se,K){for(var ne=K,me=0;me<M;++me)for(var ye=x[me],ke=0;ke<N;++ke)for(var be=ye[ke],Le=0;Le<J;++Le)se[ne++]=be[Le]}function Zd(x,M,N,J,se){for(var K=1,ne=N+1;ne<M.length;++ne)K*=M[ne];var me=M[N];if(M.length-N===4){var ye=M[N+1],ke=M[N+2],be=M[N+3];for(ne=0;ne<me;++ne)Qd(x[ne],ye,ke,be,J,se),se+=K}else for(ne=0;ne<me;++ne)Zd(x[ne],M,N+1,J,se),se+=K}function zb(x,M,N,J){var se=1;if(M.length)for(var K=0;K<M.length;++K)se*=M[K];else se=0;var ne=J||ho.allocType(N,se);switch(M.length){case 0:break;case 1:$h(x,M[0],ne);break;case 2:a0(x,M[0],M[1],ne);break;case 3:Qd(x,M[0],M[1],M[2],ne,0);break;default:Zd(x,M,0,ne,0)}return ne}function Nb(x){for(var M=[],N=x;N.length;N=N[0])M.push(N.length);return M}var Gh={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Rb=5120,Cb=5122,Pb=5124,Ib=5121,Ob=5123,Fb=5125,$b=5126,Gb=5126,i0={int8:Rb,int16:Cb,int32:Pb,uint8:Ib,uint16:Ob,uint32:Fb,float:$b,float32:Gb},Db=35048,qb=35040,Ol={dynamic:Db,stream:qb,static:35044},Dh=Jn.flatten,Jd=Jn.shape,ep=35044,Hb=35040,qh=5121,Hh=5126,_i=[];_i[5120]=1,_i[5122]=2,_i[5124]=4,_i[5121]=1,_i[5123]=2,_i[5125]=4,_i[5126]=4;function Fl(x){return Gh[Object.prototype.toString.call(x)]|0}function tp(x,M){for(var N=0;N<M.length;++N)x[N]=M[N]}function op(x,M,N,J,se,K,ne){for(var me=0,ye=0;ye<N;++ye)for(var ke=0;ke<J;++ke)x[me++]=M[se*ye+K*ke+ne]}function Bb(x,M,N,J){var se=0,K={};function ne(B){this.id=se++,this.buffer=x.createBuffer(),this.type=B,this.usage=ep,this.byteLength=0,this.dimension=1,this.dtype=qh,this.persistentData=null,N.profile&&(this.stats={size:0})}ne.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},ne.prototype.destroy=function(){Fe(this)};var me=[];function ye(B,re){var Me=me.pop();return Me||(Me=new ne(B)),Me.bind(),Le(Me,re,Hb,0,1,!1),Me}function ke(B){me.push(B)}function be(B,re,Me){B.byteLength=re.byteLength,x.bufferData(B.type,re,Me)}function Le(B,re,Me,qe,he,We){var ve;if(B.usage=Me,Array.isArray(re)){if(B.dtype=qe||Hh,re.length>0){var Re;if(Array.isArray(re[0])){ve=Jd(re);for(var ue=1,Ce=1;Ce<ve.length;++Ce)ue*=ve[Ce];B.dimension=ue,Re=Dh(re,ve,B.dtype),be(B,Re,Me),We?B.persistentData=Re:ho.freeType(Re)}else if(typeof re[0]=="number"){B.dimension=he;var vt=ho.allocType(B.dtype,re.length);tp(vt,re),be(B,vt,Me),We?B.persistentData=vt:ho.freeType(vt)}else e(re[0])?(B.dimension=re[0].length,B.dtype=qe||Fl(re[0])||Hh,Re=Dh(re,[re.length,re[0].length],B.dtype),be(B,Re,Me),We?B.persistentData=Re:ho.freeType(Re)):_.raise("invalid buffer data")}}else if(e(re))B.dtype=qe||Fl(re),B.dimension=he,be(B,re,Me),We&&(B.persistentData=new Uint8Array(new Uint8Array(re.buffer)));else if(br(re)){ve=re.shape;var Lt=re.stride,$e=re.offset,Ee=0,fe=0,kt=0,$t=0;ve.length===1?(Ee=ve[0],fe=1,kt=Lt[0],$t=0):ve.length===2?(Ee=ve[0],fe=ve[1],kt=Lt[0],$t=Lt[1]):_.raise("invalid shape"),B.dtype=qe||Fl(re.data)||Hh,B.dimension=fe;var Je=ho.allocType(B.dtype,Ee*fe);op(Je,re.data,Ee,fe,kt,$t,$e),be(B,Je,Me),We?B.persistentData=Je:ho.freeType(Je)}else re instanceof ArrayBuffer?(B.dtype=qh,B.dimension=he,be(B,re,Me),We&&(B.persistentData=new Uint8Array(new Uint8Array(re)))):_.raise("invalid buffer data")}function Fe(B){M.bufferCount--,J(B);var re=B.buffer;_(re,"buffer must not be deleted already"),x.deleteBuffer(re),B.buffer=null,delete K[B.id]}function ge(B,re,Me,qe){M.bufferCount++;var he=new ne(re);K[he.id]=he;function We(ue){var Ce=ep,vt=null,Lt=0,$e=0,Ee=1;return Array.isArray(ue)||e(ue)||br(ue)||ue instanceof ArrayBuffer?vt=ue:typeof ue=="number"?Lt=ue|0:ue&&(_.type(ue,"object","buffer arguments must be an object, a number or an array"),"data"in ue&&(_(vt===null||Array.isArray(vt)||e(vt)||br(vt),"invalid data for buffer"),vt=ue.data),"usage"in ue&&(_.parameter(ue.usage,Ol,"invalid buffer usage"),Ce=Ol[ue.usage]),"type"in ue&&(_.parameter(ue.type,i0,"invalid buffer type"),$e=i0[ue.type]),"dimension"in ue&&(_.type(ue.dimension,"number","invalid dimension"),Ee=ue.dimension|0),"length"in ue&&(_.nni(Lt,"buffer length must be a nonnegative integer"),Lt=ue.length|0)),he.bind(),vt?Le(he,vt,Ce,$e,Ee,qe):(Lt&&x.bufferData(he.type,Lt,Ce),he.dtype=$e||qh,he.usage=Ce,he.dimension=Ee,he.byteLength=Lt),N.profile&&(he.stats.size=he.byteLength*_i[he.dtype]),We}function ve(ue,Ce){_(Ce+ue.byteLength<=he.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+ue.byteLength+" starting from offset "+Ce+" to a buffer of size "+he.byteLength),x.bufferSubData(he.type,Ce,ue)}function Re(ue,Ce){var vt=(Ce||0)|0,Lt;if(he.bind(),e(ue)||ue instanceof ArrayBuffer)ve(ue,vt);else if(Array.isArray(ue)){if(ue.length>0)if(typeof ue[0]=="number"){var $e=ho.allocType(he.dtype,ue.length);tp($e,ue),ve($e,vt),ho.freeType($e)}else if(Array.isArray(ue[0])||e(ue[0])){Lt=Jd(ue);var Ee=Dh(ue,Lt,he.dtype);ve(Ee,vt),ho.freeType(Ee)}else _.raise("invalid buffer data")}else if(br(ue)){Lt=ue.shape;var fe=ue.stride,kt=0,$t=0,Je=0,Ut=0;Lt.length===1?(kt=Lt[0],$t=1,Je=fe[0],Ut=0):Lt.length===2?(kt=Lt[0],$t=Lt[1],Je=fe[0],Ut=fe[1]):_.raise("invalid shape");var Nt=Array.isArray(ue.data)?he.dtype:Fl(ue.data),qt=ho.allocType(Nt,kt*$t);op(qt,ue.data,kt,$t,Je,Ut,ue.offset),ve(qt,vt),ho.freeType(qt)}else _.raise("invalid data for buffer subdata");return We}return Me||We(B),We._reglType="buffer",We._buffer=he,We.subdata=Re,N.profile&&(We.stats=he.stats),We.destroy=function(){Fe(he)},We}function Ne(){wr(K).forEach(function(B){B.buffer=x.createBuffer(),x.bindBuffer(B.type,B.buffer),x.bufferData(B.type,B.persistentData||B.byteLength,B.usage)})}return N.profile&&(M.getTotalBufferSize=function(){var B=0;return Object.keys(K).forEach(function(re){B+=K[re].stats.size}),B}),{create:ge,createStream:ye,destroyStream:ke,clear:function(){wr(K).forEach(Fe),me.forEach(Fe)},getBuffer:function(B){return B&&B._buffer instanceof ne?B._buffer:null},restore:Ne,_initBuffer:Le}}var Ub=0,jb=0,Wb=1,Vb=1,Xb=4,Yb=4,es={points:Ub,point:jb,lines:Wb,line:Vb,triangles:Xb,triangle:Yb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Kb=0,Qb=1,_c=4,Zb=5120,ts=5121,np=5122,os=5123,rp=5124,s0=5125,Bh=34963,Jb=35040,e5=35044;function t5(x,M,N,J){var se={},K=0,ne={uint8:ts,uint16:os};M.oes_element_index_uint&&(ne.uint32=s0);function me(Ne){this.id=K++,se[this.id]=this,this.buffer=Ne,this.primType=_c,this.vertCount=0,this.type=0}me.prototype.bind=function(){this.buffer.bind()};var ye=[];function ke(Ne){var B=ye.pop();return B||(B=new me(N.create(null,Bh,!0,!1)._buffer)),Le(B,Ne,Jb,-1,-1,0,0),B}function be(Ne){ye.push(Ne)}function Le(Ne,B,re,Me,qe,he,We){Ne.buffer.bind();var ve;if(B){var Re=We;!We&&(!e(B)||br(B)&&!e(B.data))&&(Re=M.oes_element_index_uint?s0:os),N._initBuffer(Ne.buffer,B,re,Re,3)}else x.bufferData(Bh,he,re),Ne.buffer.dtype=ve||ts,Ne.buffer.usage=re,Ne.buffer.dimension=3,Ne.buffer.byteLength=he;if(ve=We,!We){switch(Ne.buffer.dtype){case ts:case Zb:ve=ts;break;case os:case np:ve=os;break;case s0:case rp:ve=s0;break;default:_.raise("unsupported type for element array")}Ne.buffer.dtype=ve}Ne.type=ve,_(ve!==s0||!!M.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var ue=qe;ue<0&&(ue=Ne.buffer.byteLength,ve===os?ue>>=1:ve===s0&&(ue>>=2)),Ne.vertCount=ue;var Ce=Me;if(Me<0){Ce=_c;var vt=Ne.buffer.dimension;vt===1&&(Ce=Kb),vt===2&&(Ce=Qb),vt===3&&(Ce=_c)}Ne.primType=Ce}function Fe(Ne){J.elementsCount--,_(Ne.buffer!==null,"must not double destroy elements"),delete se[Ne.id],Ne.buffer.destroy(),Ne.buffer=null}function ge(Ne,B){var re=N.create(null,Bh,!0),Me=new me(re._buffer);J.elementsCount++;function qe(he){if(!he)re(),Me.primType=_c,Me.vertCount=0,Me.type=ts;else if(typeof he=="number")re(he),Me.primType=_c,Me.vertCount=he|0,Me.type=ts;else{var We=null,ve=e5,Re=-1,ue=-1,Ce=0,vt=0;Array.isArray(he)||e(he)||br(he)?We=he:(_.type(he,"object","invalid arguments for elements"),"data"in he&&(We=he.data,_(Array.isArray(We)||e(We)||br(We),"invalid data for element buffer")),"usage"in he&&(_.parameter(he.usage,Ol,"invalid element buffer usage"),ve=Ol[he.usage]),"primitive"in he&&(_.parameter(he.primitive,es,"invalid element buffer primitive"),Re=es[he.primitive]),"count"in he&&(_(typeof he.count=="number"&&he.count>=0,"invalid vertex count for elements"),ue=he.count|0),"type"in he&&(_.parameter(he.type,ne,"invalid buffer type"),vt=ne[he.type]),"length"in he?Ce=he.length|0:(Ce=ue,vt===os||vt===np?Ce*=2:(vt===s0||vt===rp)&&(Ce*=4))),Le(Me,We,ve,Re,ue,Ce,vt)}return qe}return qe(Ne),qe._reglType="elements",qe._elements=Me,qe.subdata=function(he,We){return re.subdata(he,We),qe},qe.destroy=function(){Fe(Me)},qe}return{create:ge,createStream:ke,destroyStream:be,getElements:function(Ne){return typeof Ne=="function"&&Ne._elements instanceof me?Ne._elements:null},clear:function(){wr(se).forEach(Fe)}}}var ap=new Float32Array(1),o5=new Uint32Array(ap.buffer),n5=5123;function ip(x){for(var M=ho.allocType(n5,x.length),N=0;N<x.length;++N)if(isNaN(x[N]))M[N]=65535;else if(x[N]===1/0)M[N]=31744;else if(x[N]===-1/0)M[N]=64512;else{ap[0]=x[N];var J=o5[0],se=J>>>31<<15,K=(J<<1>>>24)-127,ne=J>>13&1023;if(K<-24)M[N]=se;else if(K<-14){var me=-14-K;M[N]=se+(ne+1024>>me)}else K>15?M[N]=se+31744:M[N]=se+(K+15<<10)+ne}return M}function hn(x){return Array.isArray(x)||e(x)}var sp=function(x){return!(x&x-1)&&!!x},r5=34467,Ha=3553,Uh=34067,$l=34069,c0=6408,jh=6406,Gl=6407,Mc=6409,Dl=6410,cp=32854,Wh=32855,lp=36194,a5=32819,i5=32820,s5=33635,c5=34042,Vh=6402,ql=34041,Xh=35904,Yh=35906,ns=36193,Kh=33776,Qh=33777,Zh=33778,Jh=33779,fp=35986,hp=35987,up=34798,dp=35840,pp=35841,vp=35842,mp=35843,gp=36196,rs=5121,eu=5123,tu=5125,kc=5126,l5=10242,f5=10243,h5=10497,ou=33071,u5=33648,d5=10240,p5=10241,nu=9728,v5=9729,ru=9984,xp=9985,yp=9986,au=9987,m5=33170,Hl=4352,g5=4353,x5=4354,y5=34046,b5=3317,w5=37440,_5=37441,M5=37443,bp=37444,Ec=33984,k5=[ru,yp,xp,au],Bl=[0,Mc,Dl,Gl,c0],fa={};fa[Mc]=fa[jh]=fa[Vh]=1,fa[ql]=fa[Dl]=2,fa[Gl]=fa[Xh]=3,fa[c0]=fa[Yh]=4;function as(x){return"[object "+x+"]"}var wp=as("HTMLCanvasElement"),_p=as("OffscreenCanvas"),Mp=as("CanvasRenderingContext2D"),kp=as("ImageBitmap"),Ep=as("HTMLImageElement"),Sp=as("HTMLVideoElement"),E5=Object.keys(Gh).concat([wp,_p,Mp,kp,Ep,Sp]),is=[];is[rs]=1,is[kc]=4,is[ns]=2,is[eu]=2,is[tu]=4;var er=[];er[cp]=2,er[Wh]=2,er[lp]=2,er[ql]=4,er[Kh]=.5,er[Qh]=.5,er[Zh]=1,er[Jh]=1,er[fp]=.5,er[hp]=1,er[up]=1,er[dp]=.5,er[pp]=.25,er[vp]=.5,er[mp]=.25,er[gp]=.5;function Ap(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function Tp(x){if(!Array.isArray(x))return!1;var M=x.length;return!(M===0||!hn(x[0]))}function l0(x){return Object.prototype.toString.call(x)}function Lp(x){return l0(x)===wp}function zp(x){return l0(x)===_p}function S5(x){return l0(x)===Mp}function A5(x){return l0(x)===kp}function T5(x){return l0(x)===Ep}function L5(x){return l0(x)===Sp}function iu(x){if(!x)return!1;var M=l0(x);return E5.indexOf(M)>=0?!0:Ap(x)||Tp(x)||br(x)}function Np(x){return Gh[Object.prototype.toString.call(x)]|0}function z5(x,M){var N=M.length;switch(x.type){case rs:case eu:case tu:case kc:var J=ho.allocType(x.type,N);J.set(M),x.data=J;break;case ns:x.data=ip(M);break;default:_.raise("unsupported texture type, must specify a typed array")}}function Rp(x,M){return ho.allocType(x.type===ns?kc:x.type,M)}function Cp(x,M){x.type===ns?(x.data=ip(M),ho.freeType(M)):x.data=M}function N5(x,M,N,J,se,K){for(var ne=x.width,me=x.height,ye=x.channels,ke=ne*me*ye,be=Rp(x,ke),Le=0,Fe=0;Fe<me;++Fe)for(var ge=0;ge<ne;++ge)for(var Ne=0;Ne<ye;++Ne)be[Le++]=M[N*ge+J*Fe+se*Ne+K];Cp(x,be)}function Ul(x,M,N,J,se,K){var ne;if(typeof er[x]!="undefined"?ne=er[x]:ne=fa[x]*is[M],K&&(ne*=6),se){for(var me=0,ye=N;ye>=1;)me+=ne*ye*ye,ye/=2;return me}else return ne*N*J}function R5(x,M,N,J,se,K,ne){var me={"don't care":Hl,"dont care":Hl,nice:x5,fast:g5},ye={repeat:h5,clamp:ou,mirror:u5},ke={nearest:nu,linear:v5},be=t({mipmap:au,"nearest mipmap nearest":ru,"linear mipmap nearest":xp,"nearest mipmap linear":yp,"linear mipmap linear":au},ke),Le={none:0,browser:bp},Fe={uint8:rs,rgba4:a5,rgb565:s5,"rgb5 a1":i5},ge={alpha:jh,luminance:Mc,"luminance alpha":Dl,rgb:Gl,rgba:c0,rgba4:cp,"rgb5 a1":Wh,rgb565:lp},Ne={};M.ext_srgb&&(ge.srgb=Xh,ge.srgba=Yh),M.oes_texture_float&&(Fe.float32=Fe.float=kc),M.oes_texture_half_float&&(Fe.float16=Fe["half float"]=ns),M.webgl_depth_texture&&(t(ge,{depth:Vh,"depth stencil":ql}),t(Fe,{uint16:eu,uint32:tu,"depth stencil":c5})),M.webgl_compressed_texture_s3tc&&t(Ne,{"rgb s3tc dxt1":Kh,"rgba s3tc dxt1":Qh,"rgba s3tc dxt3":Zh,"rgba s3tc dxt5":Jh}),M.webgl_compressed_texture_atc&&t(Ne,{"rgb atc":fp,"rgba atc explicit alpha":hp,"rgba atc interpolated alpha":up}),M.webgl_compressed_texture_pvrtc&&t(Ne,{"rgb pvrtc 4bppv1":dp,"rgb pvrtc 2bppv1":pp,"rgba pvrtc 4bppv1":vp,"rgba pvrtc 2bppv1":mp}),M.webgl_compressed_texture_etc1&&(Ne["rgb etc1"]=gp);var B=Array.prototype.slice.call(x.getParameter(r5));Object.keys(Ne).forEach(function(z){var ee=Ne[z];B.indexOf(ee)>=0&&(ge[z]=ee)});var re=Object.keys(ge);N.textureFormats=re;var Me=[];Object.keys(ge).forEach(function(z){var ee=ge[z];Me[ee]=z});var qe=[];Object.keys(Fe).forEach(function(z){var ee=Fe[z];qe[ee]=z});var he=[];Object.keys(ke).forEach(function(z){var ee=ke[z];he[ee]=z});var We=[];Object.keys(be).forEach(function(z){var ee=be[z];We[ee]=z});var ve=[];Object.keys(ye).forEach(function(z){var ee=ye[z];ve[ee]=z});var Re=re.reduce(function(z,ee){var Y=ge[ee];return Y===Mc||Y===jh||Y===Mc||Y===Dl||Y===Vh||Y===ql||M.ext_srgb&&(Y===Xh||Y===Yh)?z[Y]=Y:Y===Wh||ee.indexOf("rgba")>=0?z[Y]=c0:z[Y]=Gl,z},{});function ue(){this.internalformat=c0,this.format=c0,this.type=rs,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=bp,this.width=0,this.height=0,this.channels=0}function Ce(z,ee){z.internalformat=ee.internalformat,z.format=ee.format,z.type=ee.type,z.compressed=ee.compressed,z.premultiplyAlpha=ee.premultiplyAlpha,z.flipY=ee.flipY,z.unpackAlignment=ee.unpackAlignment,z.colorSpace=ee.colorSpace,z.width=ee.width,z.height=ee.height,z.channels=ee.channels}function vt(z,ee){if(!(typeof ee!="object"||!ee)){if("premultiplyAlpha"in ee&&(_.type(ee.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),z.premultiplyAlpha=ee.premultiplyAlpha),"flipY"in ee&&(_.type(ee.flipY,"boolean","invalid texture flip"),z.flipY=ee.flipY),"alignment"in ee&&(_.oneOf(ee.alignment,[1,2,4,8],"invalid texture unpack alignment"),z.unpackAlignment=ee.alignment),"colorSpace"in ee&&(_.parameter(ee.colorSpace,Le,"invalid colorSpace"),z.colorSpace=Le[ee.colorSpace]),"type"in ee){var Y=ee.type;_(M.oes_texture_float||!(Y==="float"||Y==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(M.oes_texture_half_float||!(Y==="half float"||Y==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(M.webgl_depth_texture||!(Y==="uint16"||Y==="uint32"||Y==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(Y,Fe,"invalid texture type"),z.type=Fe[Y]}var Ke=z.width,jt=z.height,A=z.channels,w=!1;"shape"in ee?(_(Array.isArray(ee.shape)&&ee.shape.length>=2,"shape must be an array"),Ke=ee.shape[0],jt=ee.shape[1],ee.shape.length===3&&(A=ee.shape[2],_(A>0&&A<=4,"invalid number of channels"),w=!0),_(Ke>=0&&Ke<=N.maxTextureSize,"invalid width"),_(jt>=0&&jt<=N.maxTextureSize,"invalid height")):("radius"in ee&&(Ke=jt=ee.radius,_(Ke>=0&&Ke<=N.maxTextureSize,"invalid radius")),"width"in ee&&(Ke=ee.width,_(Ke>=0&&Ke<=N.maxTextureSize,"invalid width")),"height"in ee&&(jt=ee.height,_(jt>=0&&jt<=N.maxTextureSize,"invalid height")),"channels"in ee&&(A=ee.channels,_(A>0&&A<=4,"invalid number of channels"),w=!0)),z.width=Ke|0,z.height=jt|0,z.channels=A|0;var P=!1;if("format"in ee){var H=ee.format;_(M.webgl_depth_texture||!(H==="depth"||H==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(H,ge,"invalid texture format");var U=z.internalformat=ge[H];z.format=Re[U],H in Fe&&("type"in ee||(z.type=Fe[H])),H in Ne&&(z.compressed=!0),P=!0}!w&&P?z.channels=fa[z.format]:w&&!P?z.channels!==Bl[z.format]&&(z.format=z.internalformat=Bl[z.channels]):P&&w&&_(z.channels===fa[z.format],"number of channels inconsistent with specified format")}}function Lt(z){x.pixelStorei(w5,z.flipY),x.pixelStorei(_5,z.premultiplyAlpha),x.pixelStorei(M5,z.colorSpace),x.pixelStorei(b5,z.unpackAlignment)}function $e(){ue.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Ee(z,ee){var Y=null;if(iu(ee)?Y=ee:ee&&(_.type(ee,"object","invalid pixel data type"),vt(z,ee),"x"in ee&&(z.xOffset=ee.x|0),"y"in ee&&(z.yOffset=ee.y|0),iu(ee.data)&&(Y=ee.data)),_(!z.compressed||Y instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ee.copy){_(!Y,"can not specify copy and data field for the same texture");var Ke=se.viewportWidth,jt=se.viewportHeight;z.width=z.width||Ke-z.xOffset,z.height=z.height||jt-z.yOffset,z.needsCopy=!0,_(z.xOffset>=0&&z.xOffset<Ke&&z.yOffset>=0&&z.yOffset<jt&&z.width>0&&z.width<=Ke&&z.height>0&&z.height<=jt,"copy texture read out of bounds")}else if(!Y)z.width=z.width||1,z.height=z.height||1,z.channels=z.channels||4;else if(e(Y))z.channels=z.channels||4,z.data=Y,!("type"in ee)&&z.type===rs&&(z.type=Np(Y));else if(Ap(Y))z.channels=z.channels||4,z5(z,Y),z.alignment=1,z.needsFree=!0;else if(br(Y)){var A=Y.data;!Array.isArray(A)&&z.type===rs&&(z.type=Np(A));var w=Y.shape,P=Y.stride,H,U,F,I,$,T;w.length===3?(F=w[2],T=P[2]):(_(w.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,T=1),H=w[0],U=w[1],I=P[0],$=P[1],z.alignment=1,z.width=H,z.height=U,z.channels=F,z.format=z.internalformat=Bl[F],z.needsFree=!0,N5(z,A,I,$,T,Y.offset)}else if(Lp(Y)||zp(Y)||S5(Y))Lp(Y)||zp(Y)?z.element=Y:z.element=Y.canvas,z.width=z.element.width,z.height=z.element.height,z.channels=4;else if(A5(Y))z.element=Y,z.width=Y.width,z.height=Y.height,z.channels=4;else if(T5(Y))z.element=Y,z.width=Y.naturalWidth,z.height=Y.naturalHeight,z.channels=4;else if(L5(Y))z.element=Y,z.width=Y.videoWidth,z.height=Y.videoHeight,z.channels=4;else if(Tp(Y)){var C=z.width||Y[0].length,S=z.height||Y.length,q=z.channels;hn(Y[0][0])?q=q||Y[0][0].length:q=q||1;for(var V=Jn.shape(Y),ie=1,ce=0;ce<V.length;++ce)ie*=V[ce];var ae=Rp(z,ie);Jn.flatten(Y,V,"",ae),Cp(z,ae),z.alignment=1,z.width=C,z.height=S,z.channels=q,z.format=z.internalformat=Bl[q],z.needsFree=!0}z.type===kc?_(N.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):z.type===ns&&_(N.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function fe(z,ee,Y){var Ke=z.element,jt=z.data,A=z.internalformat,w=z.format,P=z.type,H=z.width,U=z.height;Lt(z),Ke?x.texImage2D(ee,Y,w,w,P,Ke):z.compressed?x.compressedTexImage2D(ee,Y,A,H,U,0,jt):z.needsCopy?(J(),x.copyTexImage2D(ee,Y,w,z.xOffset,z.yOffset,H,U,0)):x.texImage2D(ee,Y,w,H,U,0,w,P,jt||null)}function kt(z,ee,Y,Ke,jt){var A=z.element,w=z.data,P=z.internalformat,H=z.format,U=z.type,F=z.width,I=z.height;Lt(z),A?x.texSubImage2D(ee,jt,Y,Ke,H,U,A):z.compressed?x.compressedTexSubImage2D(ee,jt,Y,Ke,P,F,I,w):z.needsCopy?(J(),x.copyTexSubImage2D(ee,jt,Y,Ke,z.xOffset,z.yOffset,F,I)):x.texSubImage2D(ee,jt,Y,Ke,F,I,H,U,w)}var $t=[];function Je(){return $t.pop()||new $e}function Ut(z){z.needsFree&&ho.freeType(z.data),$e.call(z),$t.push(z)}function Nt(){ue.call(this),this.genMipmaps=!1,this.mipmapHint=Hl,this.mipmask=0,this.images=Array(16)}function qt(z,ee,Y){var Ke=z.images[0]=Je();z.mipmask=1,Ke.width=z.width=ee,Ke.height=z.height=Y,Ke.channels=z.channels=4}function uo(z,ee){var Y=null;if(iu(ee))Y=z.images[0]=Je(),Ce(Y,z),Ee(Y,ee),z.mipmask=1;else if(vt(z,ee),Array.isArray(ee.mipmap))for(var Ke=ee.mipmap,jt=0;jt<Ke.length;++jt)Y=z.images[jt]=Je(),Ce(Y,z),Y.width>>=jt,Y.height>>=jt,Ee(Y,Ke[jt]),z.mipmask|=1<<jt;else Y=z.images[0]=Je(),Ce(Y,z),Ee(Y,ee),z.mipmask=1;Ce(z,z.images[0]),z.compressed&&(z.internalformat===Kh||z.internalformat===Qh||z.internalformat===Zh||z.internalformat===Jh)&&_(z.width%4===0&&z.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function bn(z,ee){for(var Y=z.images,Ke=0;Ke<Y.length;++Ke){if(!Y[Ke])return;fe(Y[Ke],ee,Ke)}}var In=[];function Qt(){var z=In.pop()||new Nt;ue.call(z),z.mipmask=0;for(var ee=0;ee<16;++ee)z.images[ee]=null;return z}function An(z){for(var ee=z.images,Y=0;Y<ee.length;++Y)ee[Y]&&Ut(ee[Y]),ee[Y]=null;In.push(z)}function jo(){this.minFilter=nu,this.magFilter=nu,this.wrapS=ou,this.wrapT=ou,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Hl}function wn(z,ee){if("min"in ee){var Y=ee.min;_.parameter(Y,be),z.minFilter=be[Y],k5.indexOf(z.minFilter)>=0&&!("faces"in ee)&&(z.genMipmaps=!0)}if("mag"in ee){var Ke=ee.mag;_.parameter(Ke,ke),z.magFilter=ke[Ke]}var jt=z.wrapS,A=z.wrapT;if("wrap"in ee){var w=ee.wrap;typeof w=="string"?(_.parameter(w,ye),jt=A=ye[w]):Array.isArray(w)&&(_.parameter(w[0],ye),_.parameter(w[1],ye),jt=ye[w[0]],A=ye[w[1]])}else{if("wrapS"in ee){var P=ee.wrapS;_.parameter(P,ye),jt=ye[P]}if("wrapT"in ee){var H=ee.wrapT;_.parameter(H,ye),A=ye[H]}}if(z.wrapS=jt,z.wrapT=A,"anisotropic"in ee){var U=ee.anisotropic;_(typeof U=="number"&&U>=1&&U<=N.maxAnisotropic,"aniso samples must be between 1 and "),z.anisotropic=ee.anisotropic}if("mipmap"in ee){var F=!1;switch(typeof ee.mipmap){case"string":_.parameter(ee.mipmap,me,"invalid mipmap hint"),z.mipmapHint=me[ee.mipmap],z.genMipmaps=!0,F=!0;break;case"boolean":F=z.genMipmaps=ee.mipmap;break;case"object":_(Array.isArray(ee.mipmap),"invalid mipmap type"),z.genMipmaps=!1,F=!0;break;default:_.raise("invalid mipmap type")}F&&!("min"in ee)&&(z.minFilter=ru)}}function Tn(z,ee){x.texParameteri(ee,p5,z.minFilter),x.texParameteri(ee,d5,z.magFilter),x.texParameteri(ee,l5,z.wrapS),x.texParameteri(ee,f5,z.wrapT),M.ext_texture_filter_anisotropic&&x.texParameteri(ee,y5,z.anisotropic),z.genMipmaps&&(x.hint(m5,z.mipmapHint),x.generateMipmap(ee))}var Ln=0,Un={},tr=N.maxTextureUnits,un=Array(tr).map(function(){return null});function Gt(z){ue.call(this),this.mipmask=0,this.internalformat=c0,this.id=Ln++,this.refCount=1,this.target=z,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new jo,ne.profile&&(this.stats={size:0})}function or(z){x.activeTexture(Ec),x.bindTexture(z.target,z.texture)}function bo(){var z=un[0];z?x.bindTexture(z.target,z.texture):x.bindTexture(Ha,null)}function gt(z){var ee=z.texture;_(ee,"must not double destroy texture");var Y=z.unit,Ke=z.target;Y>=0&&(x.activeTexture(Ec+Y),x.bindTexture(Ke,null),un[Y]=null),x.deleteTexture(ee),z.texture=null,z.params=null,z.pixels=null,z.refCount=0,delete Un[z.id],K.textureCount--}t(Gt.prototype,{bind:function(){var z=this;z.bindCount+=1;var ee=z.unit;if(ee<0){for(var Y=0;Y<tr;++Y){var Ke=un[Y];if(Ke){if(Ke.bindCount>0)continue;Ke.unit=-1}un[Y]=z,ee=Y;break}ee>=tr&&_.raise("insufficient number of texture units"),ne.profile&&K.maxTextureUnits<ee+1&&(K.maxTextureUnits=ee+1),z.unit=ee,x.activeTexture(Ec+ee),x.bindTexture(z.target,z.texture)}return ee},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&gt(this)}});function Vt(z,ee){var Y=new Gt(Ha);Un[Y.id]=Y,K.textureCount++;function Ke(w,P){var H=Y.texInfo;jo.call(H);var U=Qt();return typeof w=="number"?typeof P=="number"?qt(U,w|0,P|0):qt(U,w|0,w|0):w?(_.type(w,"object","invalid arguments to regl.texture"),wn(H,w),uo(U,w)):qt(U,1,1),H.genMipmaps&&(U.mipmask=(U.width<<1)-1),Y.mipmask=U.mipmask,Ce(Y,U),_.texture2D(H,U,N),Y.internalformat=U.internalformat,Ke.width=U.width,Ke.height=U.height,or(Y),bn(U,Ha),Tn(H,Ha),bo(),An(U),ne.profile&&(Y.stats.size=Ul(Y.internalformat,Y.type,U.width,U.height,H.genMipmaps,!1)),Ke.format=Me[Y.internalformat],Ke.type=qe[Y.type],Ke.mag=he[H.magFilter],Ke.min=We[H.minFilter],Ke.wrapS=ve[H.wrapS],Ke.wrapT=ve[H.wrapT],Ke}function jt(w,P,H,U){_(!!w,"must specify image data");var F=P|0,I=H|0,$=U|0,T=Je();return Ce(T,Y),T.width=0,T.height=0,Ee(T,w),T.width=T.width||(Y.width>>$)-F,T.height=T.height||(Y.height>>$)-I,_(Y.type===T.type&&Y.format===T.format&&Y.internalformat===T.internalformat,"incompatible format for texture.subimage"),_(F>=0&&I>=0&&F+T.width<=Y.width&&I+T.height<=Y.height,"texture.subimage write out of bounds"),_(Y.mipmask&1<<$,"missing mipmap data"),_(T.data||T.element||T.needsCopy,"missing image data"),or(Y),kt(T,Ha,F,I,$),bo(),Ut(T),Ke}function A(w,P){var H=w|0,U=P|0||H;if(H===Y.width&&U===Y.height)return Ke;Ke.width=Y.width=H,Ke.height=Y.height=U,or(Y);for(var F=0;Y.mipmask>>F;++F){var I=H>>F,$=U>>F;if(!I||!$)break;x.texImage2D(Ha,F,Y.format,I,$,0,Y.format,Y.type,null)}return bo(),ne.profile&&(Y.stats.size=Ul(Y.internalformat,Y.type,H,U,!1,!1)),Ke}return Ke(z,ee),Ke.subimage=jt,Ke.resize=A,Ke._reglType="texture2d",Ke._texture=Y,ne.profile&&(Ke.stats=Y.stats),Ke.destroy=function(){Y.decRef()},Ke}function io(z,ee,Y,Ke,jt,A){var w=new Gt(Uh);Un[w.id]=w,K.cubeCount++;var P=new Array(6);function H(I,$,T,C,S,q){var V,ie=w.texInfo;for(jo.call(ie),V=0;V<6;++V)P[V]=Qt();if(typeof I=="number"||!I){var ce=I|0||1;for(V=0;V<6;++V)qt(P[V],ce,ce)}else if(typeof I=="object")if($)uo(P[0],I),uo(P[1],$),uo(P[2],T),uo(P[3],C),uo(P[4],S),uo(P[5],q);else if(wn(ie,I),vt(w,I),"faces"in I){var ae=I.faces;for(_(Array.isArray(ae)&&ae.length===6,"cube faces must be a length 6 array"),V=0;V<6;++V)_(typeof ae[V]=="object"&&!!ae[V],"invalid input for cube map face"),Ce(P[V],w),uo(P[V],ae[V])}else for(V=0;V<6;++V)uo(P[V],I);else _.raise("invalid arguments to cube map");for(Ce(w,P[0]),N.npotTextureCube||_(sp(w.width)&&sp(w.height),"your browser does not support non power or two texture dimensions"),ie.genMipmaps?w.mipmask=(P[0].width<<1)-1:w.mipmask=P[0].mipmask,_.textureCube(w,ie,P,N),w.internalformat=P[0].internalformat,H.width=P[0].width,H.height=P[0].height,or(w),V=0;V<6;++V)bn(P[V],$l+V);for(Tn(ie,Uh),bo(),ne.profile&&(w.stats.size=Ul(w.internalformat,w.type,H.width,H.height,ie.genMipmaps,!0)),H.format=Me[w.internalformat],H.type=qe[w.type],H.mag=he[ie.magFilter],H.min=We[ie.minFilter],H.wrapS=ve[ie.wrapS],H.wrapT=ve[ie.wrapT],V=0;V<6;++V)An(P[V]);return H}function U(I,$,T,C,S){_(!!$,"must specify image data"),_(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var q=T|0,V=C|0,ie=S|0,ce=Je();return Ce(ce,w),ce.width=0,ce.height=0,Ee(ce,$),ce.width=ce.width||(w.width>>ie)-q,ce.height=ce.height||(w.height>>ie)-V,_(w.type===ce.type&&w.format===ce.format&&w.internalformat===ce.internalformat,"incompatible format for texture.subimage"),_(q>=0&&V>=0&&q+ce.width<=w.width&&V+ce.height<=w.height,"texture.subimage write out of bounds"),_(w.mipmask&1<<ie,"missing mipmap data"),_(ce.data||ce.element||ce.needsCopy,"missing image data"),or(w),kt(ce,$l+I,q,V,ie),bo(),Ut(ce),H}function F(I){var $=I|0;if($!==w.width){H.width=w.width=$,H.height=w.height=$,or(w);for(var T=0;T<6;++T)for(var C=0;w.mipmask>>C;++C)x.texImage2D($l+T,C,w.format,$>>C,$>>C,0,w.format,w.type,null);return bo(),ne.profile&&(w.stats.size=Ul(w.internalformat,w.type,H.width,H.height,!1,!0)),H}}return H(z,ee,Y,Ke,jt,A),H.subimage=U,H.resize=F,H._reglType="textureCube",H._texture=w,ne.profile&&(H.stats=w.stats),H.destroy=function(){w.decRef()},H}function dn(){for(var z=0;z<tr;++z)x.activeTexture(Ec+z),x.bindTexture(Ha,null),un[z]=null;wr(Un).forEach(gt),K.cubeCount=0,K.textureCount=0}ne.profile&&(K.getTotalTextureSize=function(){var z=0;return Object.keys(Un).forEach(function(ee){z+=Un[ee].stats.size}),z});function Ua(){for(var z=0;z<tr;++z){var ee=un[z];ee&&(ee.bindCount=0,ee.unit=-1,un[z]=null)}wr(Un).forEach(function(Y){Y.texture=x.createTexture(),x.bindTexture(Y.target,Y.texture);for(var Ke=0;Ke<32;++Ke)if(Y.mipmask&1<<Ke)if(Y.target===Ha)x.texImage2D(Ha,Ke,Y.internalformat,Y.width>>Ke,Y.height>>Ke,0,Y.internalformat,Y.type,null);else for(var jt=0;jt<6;++jt)x.texImage2D($l+jt,Ke,Y.internalformat,Y.width>>Ke,Y.height>>Ke,0,Y.internalformat,Y.type,null);Tn(Y.texInfo,Y.target)})}function m0(){for(var z=0;z<tr;++z){var ee=un[z];ee&&(ee.bindCount=0,ee.unit=-1,un[z]=null),x.activeTexture(Ec+z),x.bindTexture(Ha,null),x.bindTexture(Uh,null)}}return{create2D:Vt,createCube:io,clear:dn,getTexture:function(z){return null},restore:Ua,refresh:m0}}var Mi=36161,jl=32854,Pp=32855,Ip=36194,Op=33189,Fp=36168,$p=34041,Gp=35907,Dp=34836,qp=34842,Hp=34843,Ta=[];Ta[jl]=2,Ta[Pp]=2,Ta[Ip]=2,Ta[Op]=2,Ta[Fp]=1,Ta[$p]=4,Ta[Gp]=4,Ta[Dp]=16,Ta[qp]=8,Ta[Hp]=6;function Bp(x,M,N){return Ta[x]*M*N}var C5=function(x,M,N,J,se){var K={rgba4:jl,rgb565:Ip,"rgb5 a1":Pp,depth:Op,stencil:Fp,"depth stencil":$p};M.ext_srgb&&(K.srgba=Gp),M.ext_color_buffer_half_float&&(K.rgba16f=qp,K.rgb16f=Hp),M.webgl_color_buffer_float&&(K.rgba32f=Dp);var ne=[];Object.keys(K).forEach(function(ge){var Ne=K[ge];ne[Ne]=ge});var me=0,ye={};function ke(ge){this.id=me++,this.refCount=1,this.renderbuffer=ge,this.format=jl,this.width=0,this.height=0,se.profile&&(this.stats={size:0})}ke.prototype.decRef=function(){--this.refCount<=0&&be(this)};function be(ge){var Ne=ge.renderbuffer;_(Ne,"must not double destroy renderbuffer"),x.bindRenderbuffer(Mi,null),x.deleteRenderbuffer(Ne),ge.renderbuffer=null,ge.refCount=0,delete ye[ge.id],J.renderbufferCount--}function Le(ge,Ne){var B=new ke(x.createRenderbuffer());ye[B.id]=B,J.renderbufferCount++;function re(qe,he){var We=0,ve=0,Re=jl;if(typeof qe=="object"&&qe){var ue=qe;if("shape"in ue){var Ce=ue.shape;_(Array.isArray(Ce)&&Ce.length>=2,"invalid renderbuffer shape"),We=Ce[0]|0,ve=Ce[1]|0}else"radius"in ue&&(We=ve=ue.radius|0),"width"in ue&&(We=ue.width|0),"height"in ue&&(ve=ue.height|0);"format"in ue&&(_.parameter(ue.format,K,"invalid renderbuffer format"),Re=K[ue.format])}else typeof qe=="number"?(We=qe|0,typeof he=="number"?ve=he|0:ve=We):qe?_.raise("invalid arguments to renderbuffer constructor"):We=ve=1;if(_(We>0&&ve>0&&We<=N.maxRenderbufferSize&&ve<=N.maxRenderbufferSize,"invalid renderbuffer size"),!(We===B.width&&ve===B.height&&Re===B.format))return re.width=B.width=We,re.height=B.height=ve,B.format=Re,x.bindRenderbuffer(Mi,B.renderbuffer),x.renderbufferStorage(Mi,Re,We,ve),_(x.getError()===0,"invalid render buffer format"),se.profile&&(B.stats.size=Bp(B.format,B.width,B.height)),re.format=ne[B.format],re}function Me(qe,he){var We=qe|0,ve=he|0||We;return We===B.width&&ve===B.height||(_(We>0&&ve>0&&We<=N.maxRenderbufferSize&&ve<=N.maxRenderbufferSize,"invalid renderbuffer size"),re.width=B.width=We,re.height=B.height=ve,x.bindRenderbuffer(Mi,B.renderbuffer),x.renderbufferStorage(Mi,B.format,We,ve),_(x.getError()===0,"invalid render buffer format"),se.profile&&(B.stats.size=Bp(B.format,B.width,B.height))),re}return re(ge,Ne),re.resize=Me,re._reglType="renderbuffer",re._renderbuffer=B,se.profile&&(re.stats=B.stats),re.destroy=function(){B.decRef()},re}se.profile&&(J.getTotalRenderbufferSize=function(){var ge=0;return Object.keys(ye).forEach(function(Ne){ge+=ye[Ne].stats.size}),ge});function Fe(){wr(ye).forEach(function(ge){ge.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(Mi,ge.renderbuffer),x.renderbufferStorage(Mi,ge.format,ge.width,ge.height)}),x.bindRenderbuffer(Mi,null)}return{create:Le,clear:function(){wr(ye).forEach(be)},restore:Fe}},oi=36160,su=36161,f0=3553,Wl=34069,Up=36064,jp=36096,Wp=36128,Vp=33306,Xp=36053,P5=36054,I5=36055,O5=36057,F5=36061,$5=36193,G5=5121,D5=5126,Yp=6407,Kp=6408,q5=6402,H5=[Yp,Kp],cu=[];cu[Kp]=4,cu[Yp]=3;var Vl=[];Vl[G5]=1,Vl[D5]=4,Vl[$5]=2;var B5=32854,U5=32855,j5=36194,W5=33189,V5=36168,Qp=34041,X5=35907,Y5=34836,K5=34842,Q5=34843,Z5=[B5,U5,j5,X5,K5,Q5,Y5],ss={};ss[Xp]="complete",ss[P5]="incomplete attachment",ss[O5]="incomplete dimensions",ss[I5]="incomplete, missing attachment",ss[F5]="unsupported";function J5(x,M,N,J,se,K){var ne={cur:null,next:null,dirty:!1,setFBO:null},me=["rgba"],ye=["rgba4","rgb565","rgb5 a1"];M.ext_srgb&&ye.push("srgba"),M.ext_color_buffer_half_float&&ye.push("rgba16f","rgb16f"),M.webgl_color_buffer_float&&ye.push("rgba32f");var ke=["uint8"];M.oes_texture_half_float&&ke.push("half float","float16"),M.oes_texture_float&&ke.push("float","float32");function be($e,Ee,fe){this.target=$e,this.texture=Ee,this.renderbuffer=fe;var kt=0,$t=0;Ee?(kt=Ee.width,$t=Ee.height):fe&&(kt=fe.width,$t=fe.height),this.width=kt,this.height=$t}function Le($e){$e&&($e.texture&&$e.texture._texture.decRef(),$e.renderbuffer&&$e.renderbuffer._renderbuffer.decRef())}function Fe($e,Ee,fe){if($e)if($e.texture){var kt=$e.texture._texture,$t=Math.max(1,kt.width),Je=Math.max(1,kt.height);_($t===Ee&&Je===fe,"inconsistent width/height for supplied texture"),kt.refCount+=1}else{var Ut=$e.renderbuffer._renderbuffer;_(Ut.width===Ee&&Ut.height===fe,"inconsistent width/height for renderbuffer"),Ut.refCount+=1}}function ge($e,Ee){Ee&&(Ee.texture?x.framebufferTexture2D(oi,$e,Ee.target,Ee.texture._texture.texture,0):x.framebufferRenderbuffer(oi,$e,su,Ee.renderbuffer._renderbuffer.renderbuffer))}function Ne($e){var Ee=f0,fe=null,kt=null,$t=$e;typeof $e=="object"&&($t=$e.data,"target"in $e&&(Ee=$e.target|0)),_.type($t,"function","invalid attachment data");var Je=$t._reglType;return Je==="texture2d"?(fe=$t,_(Ee===f0)):Je==="textureCube"?(fe=$t,_(Ee>=Wl&&Ee<Wl+6,"invalid cube map target")):Je==="renderbuffer"?(kt=$t,Ee=su):_.raise("invalid regl object for attachment"),new be(Ee,fe,kt)}function B($e,Ee,fe,kt,$t){if(fe){var Je=J.create2D({width:$e,height:Ee,format:kt,type:$t});return Je._texture.refCount=0,new be(f0,Je,null)}else{var Ut=se.create({width:$e,height:Ee,format:kt});return Ut._renderbuffer.refCount=0,new be(su,null,Ut)}}function re($e){return $e&&($e.texture||$e.renderbuffer)}function Me($e,Ee,fe){$e&&($e.texture?$e.texture.resize(Ee,fe):$e.renderbuffer&&$e.renderbuffer.resize(Ee,fe),$e.width=Ee,$e.height=fe)}var qe=0,he={};function We(){this.id=qe++,he[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ve($e){$e.colorAttachments.forEach(Le),Le($e.depthAttachment),Le($e.stencilAttachment),Le($e.depthStencilAttachment)}function Re($e){var Ee=$e.framebuffer;_(Ee,"must not double destroy framebuffer"),x.deleteFramebuffer(Ee),$e.framebuffer=null,K.framebufferCount--,delete he[$e.id]}function ue($e){var Ee;x.bindFramebuffer(oi,$e.framebuffer);var fe=$e.colorAttachments;for(Ee=0;Ee<fe.length;++Ee)ge(Up+Ee,fe[Ee]);for(Ee=fe.length;Ee<N.maxColorAttachments;++Ee)x.framebufferTexture2D(oi,Up+Ee,f0,null,0);x.framebufferTexture2D(oi,Vp,f0,null,0),x.framebufferTexture2D(oi,jp,f0,null,0),x.framebufferTexture2D(oi,Wp,f0,null,0),ge(jp,$e.depthAttachment),ge(Wp,$e.stencilAttachment),ge(Vp,$e.depthStencilAttachment);var kt=x.checkFramebufferStatus(oi);!x.isContextLost()&&kt!==Xp&&_.raise("framebuffer configuration not supported, status = "+ss[kt]),x.bindFramebuffer(oi,ne.next?ne.next.framebuffer:null),ne.cur=ne.next,x.getError()}function Ce($e,Ee){var fe=new We;K.framebufferCount++;function kt(Je,Ut){var Nt;_(ne.next!==fe,"can not update framebuffer which is currently in use");var qt=0,uo=0,bn=!0,In=!0,Qt=null,An=!0,jo="rgba",wn="uint8",Tn=1,Ln=null,Un=null,tr=null,un=!1;if(typeof Je=="number")qt=Je|0,uo=Ut|0||qt;else if(!Je)qt=uo=1;else{_.type(Je,"object","invalid arguments for framebuffer");var Gt=Je;if("shape"in Gt){var or=Gt.shape;_(Array.isArray(or)&&or.length>=2,"invalid shape for framebuffer"),qt=or[0],uo=or[1]}else"radius"in Gt&&(qt=uo=Gt.radius),"width"in Gt&&(qt=Gt.width),"height"in Gt&&(uo=Gt.height);("color"in Gt||"colors"in Gt)&&(Qt=Gt.color||Gt.colors,Array.isArray(Qt)&&_(Qt.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),Qt||("colorCount"in Gt&&(Tn=Gt.colorCount|0,_(Tn>0,"invalid color buffer count")),"colorTexture"in Gt&&(An=!!Gt.colorTexture,jo="rgba4"),"colorType"in Gt&&(wn=Gt.colorType,An?(_(M.oes_texture_float||!(wn==="float"||wn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(M.oes_texture_half_float||!(wn==="half float"||wn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):wn==="half float"||wn==="float16"?(_(M.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),jo="rgba16f"):(wn==="float"||wn==="float32")&&(_(M.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),jo="rgba32f"),_.oneOf(wn,ke,"invalid color type")),"colorFormat"in Gt&&(jo=Gt.colorFormat,me.indexOf(jo)>=0?An=!0:ye.indexOf(jo)>=0?An=!1:An?_.oneOf(Gt.colorFormat,me,"invalid color format for texture"):_.oneOf(Gt.colorFormat,ye,"invalid color format for renderbuffer"))),("depthTexture"in Gt||"depthStencilTexture"in Gt)&&(un=!!(Gt.depthTexture||Gt.depthStencilTexture),_(!un||M.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Gt&&(typeof Gt.depth=="boolean"?bn=Gt.depth:(Ln=Gt.depth,In=!1)),"stencil"in Gt&&(typeof Gt.stencil=="boolean"?In=Gt.stencil:(Un=Gt.stencil,bn=!1)),"depthStencil"in Gt&&(typeof Gt.depthStencil=="boolean"?bn=In=Gt.depthStencil:(tr=Gt.depthStencil,bn=!1,In=!1))}var bo=null,gt=null,Vt=null,io=null;if(Array.isArray(Qt))bo=Qt.map(Ne);else if(Qt)bo=[Ne(Qt)];else for(bo=new Array(Tn),Nt=0;Nt<Tn;++Nt)bo[Nt]=B(qt,uo,An,jo,wn);_(M.webgl_draw_buffers||bo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(bo.length<=N.maxColorAttachments,"too many color attachments, not supported"),qt=qt||bo[0].width,uo=uo||bo[0].height,Ln?gt=Ne(Ln):bn&&!In&&(gt=B(qt,uo,un,"depth","uint32")),Un?Vt=Ne(Un):In&&!bn&&(Vt=B(qt,uo,!1,"stencil","uint8")),tr?io=Ne(tr):!Ln&&!Un&&In&&bn&&(io=B(qt,uo,un,"depth stencil","depth stencil")),_(!!Ln+!!Un+!!tr<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var dn=null;for(Nt=0;Nt<bo.length;++Nt)if(Fe(bo[Nt],qt,uo),_(!bo[Nt]||bo[Nt].texture&&H5.indexOf(bo[Nt].texture._texture.format)>=0||bo[Nt].renderbuffer&&Z5.indexOf(bo[Nt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Nt+" is invalid"),bo[Nt]&&bo[Nt].texture){var Ua=cu[bo[Nt].texture._texture.format]*Vl[bo[Nt].texture._texture.type];dn===null?dn=Ua:_(dn===Ua,"all color attachments much have the same number of bits per pixel.")}return Fe(gt,qt,uo),_(!gt||gt.texture&&gt.texture._texture.format===q5||gt.renderbuffer&&gt.renderbuffer._renderbuffer.format===W5,"invalid depth attachment for framebuffer object"),Fe(Vt,qt,uo),_(!Vt||Vt.renderbuffer&&Vt.renderbuffer._renderbuffer.format===V5,"invalid stencil attachment for framebuffer object"),Fe(io,qt,uo),_(!io||io.texture&&io.texture._texture.format===Qp||io.renderbuffer&&io.renderbuffer._renderbuffer.format===Qp,"invalid depth-stencil attachment for framebuffer object"),ve(fe),fe.width=qt,fe.height=uo,fe.colorAttachments=bo,fe.depthAttachment=gt,fe.stencilAttachment=Vt,fe.depthStencilAttachment=io,kt.color=bo.map(re),kt.depth=re(gt),kt.stencil=re(Vt),kt.depthStencil=re(io),kt.width=fe.width,kt.height=fe.height,ue(fe),kt}function $t(Je,Ut){_(ne.next!==fe,"can not resize a framebuffer which is currently in use");var Nt=Math.max(Je|0,1),qt=Math.max(Ut|0||Nt,1);if(Nt===fe.width&&qt===fe.height)return kt;for(var uo=fe.colorAttachments,bn=0;bn<uo.length;++bn)Me(uo[bn],Nt,qt);return Me(fe.depthAttachment,Nt,qt),Me(fe.stencilAttachment,Nt,qt),Me(fe.depthStencilAttachment,Nt,qt),fe.width=kt.width=Nt,fe.height=kt.height=qt,ue(fe),kt}return kt($e,Ee),t(kt,{resize:$t,_reglType:"framebuffer",_framebuffer:fe,destroy:function(){Re(fe),ve(fe)},use:function(Je){ne.setFBO({framebuffer:kt},Je)}})}function vt($e){var Ee=Array(6);function fe($t){var Je;_(Ee.indexOf(ne.next)<0,"can not update framebuffer which is currently in use");var Ut={color:null},Nt=0,qt=null,uo="rgba",bn="uint8",In=1;if(typeof $t=="number")Nt=$t|0;else if(!$t)Nt=1;else{_.type($t,"object","invalid arguments for framebuffer");var Qt=$t;if("shape"in Qt){var An=Qt.shape;_(Array.isArray(An)&&An.length>=2,"invalid shape for framebuffer"),_(An[0]===An[1],"cube framebuffer must be square"),Nt=An[0]}else"radius"in Qt&&(Nt=Qt.radius|0),"width"in Qt?(Nt=Qt.width|0,"height"in Qt&&_(Qt.height===Nt,"must be square")):"height"in Qt&&(Nt=Qt.height|0);("color"in Qt||"colors"in Qt)&&(qt=Qt.color||Qt.colors,Array.isArray(qt)&&_(qt.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),qt||("colorCount"in Qt&&(In=Qt.colorCount|0,_(In>0,"invalid color buffer count")),"colorType"in Qt&&(_.oneOf(Qt.colorType,ke,"invalid color type"),bn=Qt.colorType),"colorFormat"in Qt&&(uo=Qt.colorFormat,_.oneOf(Qt.colorFormat,me,"invalid color format for texture"))),"depth"in Qt&&(Ut.depth=Qt.depth),"stencil"in Qt&&(Ut.stencil=Qt.stencil),"depthStencil"in Qt&&(Ut.depthStencil=Qt.depthStencil)}var jo;if(qt)if(Array.isArray(qt))for(jo=[],Je=0;Je<qt.length;++Je)jo[Je]=qt[Je];else jo=[qt];else{jo=Array(In);var wn={radius:Nt,format:uo,type:bn};for(Je=0;Je<In;++Je)jo[Je]=J.createCube(wn)}for(Ut.color=Array(jo.length),Je=0;Je<jo.length;++Je){var Tn=jo[Je];_(typeof Tn=="function"&&Tn._reglType==="textureCube","invalid cube map"),Nt=Nt||Tn.width,_(Tn.width===Nt&&Tn.height===Nt,"invalid cube map shape"),Ut.color[Je]={target:Wl,data:jo[Je]}}for(Je=0;Je<6;++Je){for(var Ln=0;Ln<jo.length;++Ln)Ut.color[Ln].target=Wl+Je;Je>0&&(Ut.depth=Ee[0].depth,Ut.stencil=Ee[0].stencil,Ut.depthStencil=Ee[0].depthStencil),Ee[Je]?Ee[Je](Ut):Ee[Je]=Ce(Ut)}return t(fe,{width:Nt,height:Nt,color:jo})}function kt($t){var Je,Ut=$t|0;if(_(Ut>0&&Ut<=N.maxCubeMapSize,"invalid radius for cube fbo"),Ut===fe.width)return fe;var Nt=fe.color;for(Je=0;Je<Nt.length;++Je)Nt[Je].resize(Ut);for(Je=0;Je<6;++Je)Ee[Je].resize(Ut);return fe.width=fe.height=Ut,fe}return fe($e),t(fe,{faces:Ee,resize:kt,_reglType:"framebufferCube",destroy:function(){Ee.forEach(function($t){$t.destroy()})}})}function Lt(){ne.cur=null,ne.next=null,ne.dirty=!0,wr(he).forEach(function($e){$e.framebuffer=x.createFramebuffer(),ue($e)})}return t(ne,{getFramebuffer:function($e){if(typeof $e=="function"&&$e._reglType==="framebuffer"){var Ee=$e._framebuffer;if(Ee instanceof We)return Ee}return null},create:Ce,createCube:vt,clear:function(){wr(he).forEach(Re)},restore:Lt})}var ew=5126,Zp=34962;function lu(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=ew,this.offset=0,this.stride=0,this.divisor=0}function tw(x,M,N,J,se){for(var K=N.maxAttributes,ne=new Array(K),me=0;me<K;++me)ne[me]=new lu;var ye=0,ke={},be={Record:lu,scope:{},state:ne,currentVAO:null,targetVAO:null,restore:Fe()?he:function(){},createVAO:We,getVAO:Ne,destroyBuffer:Le,setVAO:Fe()?B:re,clear:Fe()?Me:function(){}};function Le(ve){for(var Re=0;Re<ne.length;++Re){var ue=ne[Re];ue.buffer===ve&&(x.disableVertexAttribArray(Re),ue.buffer=null)}}function Fe(){return M.oes_vertex_array_object}function ge(){return M.angle_instanced_arrays}function Ne(ve){return typeof ve=="function"&&ve._vao?ve._vao:null}function B(ve){if(ve!==be.currentVAO){var Re=Fe();ve?Re.bindVertexArrayOES(ve.vao):Re.bindVertexArrayOES(null),be.currentVAO=ve}}function re(ve){if(ve!==be.currentVAO){if(ve)ve.bindAttrs();else for(var Re=ge(),ue=0;ue<ne.length;++ue){var Ce=ne[ue];Ce.buffer?(x.enableVertexAttribArray(ue),x.vertexAttribPointer(ue,Ce.size,Ce.type,Ce.normalized,Ce.stride,Ce.offfset),Re&&Ce.divisor&&Re.vertexAttribDivisorANGLE(ue,Ce.divisor)):(x.disableVertexAttribArray(ue),x.vertexAttrib4f(ue,Ce.x,Ce.y,Ce.z,Ce.w))}be.currentVAO=ve}}function Me(){wr(ke).forEach(function(ve){ve.destroy()})}function qe(){this.id=++ye,this.attributes=[];var ve=Fe();ve?this.vao=ve.createVertexArrayOES():this.vao=null,ke[this.id]=this,this.buffers=[]}qe.prototype.bindAttrs=function(){for(var ve=ge(),Re=this.attributes,ue=0;ue<Re.length;++ue){var Ce=Re[ue];Ce.buffer?(x.enableVertexAttribArray(ue),x.bindBuffer(Zp,Ce.buffer.buffer),x.vertexAttribPointer(ue,Ce.size,Ce.type,Ce.normalized,Ce.stride,Ce.offset),ve&&Ce.divisor&&ve.vertexAttribDivisorANGLE(ue,Ce.divisor)):(x.disableVertexAttribArray(ue),x.vertexAttrib4f(ue,Ce.x,Ce.y,Ce.z,Ce.w))}for(var vt=Re.length;vt<K;++vt)x.disableVertexAttribArray(vt)},qe.prototype.refresh=function(){var ve=Fe();ve&&(ve.bindVertexArrayOES(this.vao),this.bindAttrs(),be.currentVAO=this)},qe.prototype.destroy=function(){if(this.vao){var ve=Fe();this===be.currentVAO&&(be.currentVAO=null,ve.bindVertexArrayOES(null)),ve.deleteVertexArrayOES(this.vao),this.vao=null}ke[this.id]&&(delete ke[this.id],J.vaoCount-=1)};function he(){var ve=Fe();ve&&wr(ke).forEach(function(Re){Re.refresh()})}function We(ve){var Re=new qe;J.vaoCount+=1;function ue(Ce){_(Array.isArray(Ce),"arguments to vertex array constructor must be an array"),_(Ce.length<K,"too many attributes"),_(Ce.length>0,"must specify at least one attribute");var vt={},Lt=Re.attributes;Lt.length=Ce.length;for(var $e=0;$e<Ce.length;++$e){var Ee=Ce[$e],fe=Lt[$e]=new lu,kt=Ee.data||Ee;if(Array.isArray(kt)||e(kt)||br(kt)){var $t;Re.buffers[$e]&&($t=Re.buffers[$e],e(kt)&&$t._buffer.byteLength>=kt.byteLength?$t.subdata(kt):($t.destroy(),Re.buffers[$e]=null)),Re.buffers[$e]||($t=Re.buffers[$e]=se.create(Ee,Zp,!1,!0)),fe.buffer=se.getBuffer($t),fe.size=fe.buffer.dimension|0,fe.normalized=!1,fe.type=fe.buffer.dtype,fe.offset=0,fe.stride=0,fe.divisor=0,fe.state=1,vt[$e]=1}else se.getBuffer(Ee)?(fe.buffer=se.getBuffer(Ee),fe.size=fe.buffer.dimension|0,fe.normalized=!1,fe.type=fe.buffer.dtype,fe.offset=0,fe.stride=0,fe.divisor=0,fe.state=1):se.getBuffer(Ee.buffer)?(fe.buffer=se.getBuffer(Ee.buffer),fe.size=(+Ee.size||fe.buffer.dimension)|0,fe.normalized=!!Ee.normalized||!1,"type"in Ee?(_.parameter(Ee.type,i0,"invalid buffer type"),fe.type=i0[Ee.type]):fe.type=fe.buffer.dtype,fe.offset=(Ee.offset||0)|0,fe.stride=(Ee.stride||0)|0,fe.divisor=(Ee.divisor||0)|0,fe.state=1,_(fe.size>=1&&fe.size<=4,"size must be between 1 and 4"),_(fe.offset>=0,"invalid offset"),_(fe.stride>=0&&fe.stride<=255,"stride must be between 0 and 255"),_(fe.divisor>=0,"divisor must be positive"),_(!fe.divisor||!!M.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Ee?(_($e>0,"first attribute must not be a constant"),fe.x=+Ee.x||0,fe.y=+Ee.y||0,fe.z=+Ee.z||0,fe.w=+Ee.w||0,fe.state=2):_(!1,"invalid attribute spec for location "+$e)}for(var Je=0;Je<Re.buffers.length;++Je)!vt[Je]&&Re.buffers[Je]&&(Re.buffers[Je].destroy(),Re.buffers[Je]=null);return Re.refresh(),ue}return ue.destroy=function(){for(var Ce=0;Ce<Re.buffers.length;++Ce)Re.buffers[Ce]&&Re.buffers[Ce].destroy();Re.buffers.length=0,Re.destroy()},ue._vao=Re,ue._reglType="vao",ue(ve)}return be}var Jp=35632,ow=35633,nw=35718,rw=35721;function aw(x,M,N,J){var se={},K={};function ne(B,re,Me,qe){this.name=B,this.id=re,this.location=Me,this.info=qe}function me(B,re){for(var Me=0;Me<B.length;++Me)if(B[Me].id===re.id){B[Me].location=re.location;return}B.push(re)}function ye(B,re,Me){var qe=B===Jp?se:K,he=qe[re];if(!he){var We=M.str(re);he=x.createShader(B),x.shaderSource(he,We),x.compileShader(he),_.shaderError(x,he,We,B,Me),qe[re]=he}return he}var ke={},be=[],Le=0;function Fe(B,re){this.id=Le++,this.fragId=B,this.vertId=re,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,J.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function ge(B,re,Me){var qe,he,We=ye(Jp,B.fragId),ve=ye(ow,B.vertId),Re=B.program=x.createProgram();if(x.attachShader(Re,We),x.attachShader(Re,ve),Me)for(qe=0;qe<Me.length;++qe){var ue=Me[qe];x.bindAttribLocation(Re,ue[0],ue[1])}x.linkProgram(Re),_.linkError(x,Re,M.str(B.fragId),M.str(B.vertId),re);var Ce=x.getProgramParameter(Re,nw);J.profile&&(B.stats.uniformsCount=Ce);var vt=B.uniforms;for(qe=0;qe<Ce;++qe)if(he=x.getActiveUniform(Re,qe),he)if(he.size>1)for(var Lt=0;Lt<he.size;++Lt){var $e=he.name.replace("[0]","["+Lt+"]");me(vt,new ne($e,M.id($e),x.getUniformLocation(Re,$e),he))}else me(vt,new ne(he.name,M.id(he.name),x.getUniformLocation(Re,he.name),he));var Ee=x.getProgramParameter(Re,rw);J.profile&&(B.stats.attributesCount=Ee);var fe=B.attributes;for(qe=0;qe<Ee;++qe)he=x.getActiveAttrib(Re,qe),he&&me(fe,new ne(he.name,M.id(he.name),x.getAttribLocation(Re,he.name),he))}J.profile&&(N.getMaxUniformsCount=function(){var B=0;return be.forEach(function(re){re.stats.uniformsCount>B&&(B=re.stats.uniformsCount)}),B},N.getMaxAttributesCount=function(){var B=0;return be.forEach(function(re){re.stats.attributesCount>B&&(B=re.stats.attributesCount)}),B});function Ne(){se={},K={};for(var B=0;B<be.length;++B)ge(be[B],null,be[B].attributes.map(function(re){return[re.location,re.name]}))}return{clear:function(){var B=x.deleteShader.bind(x);wr(se).forEach(B),se={},wr(K).forEach(B),K={},be.forEach(function(re){x.deleteProgram(re.program)}),be.length=0,ke={},N.shaderCount=0},program:function(B,re,Me,qe){_.command(B>=0,"missing vertex shader",Me),_.command(re>=0,"missing fragment shader",Me);var he=ke[re];he||(he=ke[re]={});var We=he[B];if(We&&(We.refCount++,!qe))return We;var ve=new Fe(re,B);return N.shaderCount++,ge(ve,Me,qe),We||(he[B]=ve),be.push(ve),t(ve,{destroy:function(){if(ve.refCount--,ve.refCount<=0){x.deleteProgram(ve.program);var Re=be.indexOf(ve);be.splice(Re,1),N.shaderCount--}he[ve.vertId].refCount<=0&&(x.deleteShader(K[ve.vertId]),delete K[ve.vertId],delete ke[ve.fragId][ve.vertId]),Object.keys(ke[ve.fragId]).length||(x.deleteShader(se[ve.fragId]),delete se[ve.fragId],delete ke[ve.fragId])}})},restore:Ne,shader:ye,frag:-1,vert:-1}}var iw=6408,Sc=5121,sw=3333,Xl=5126;function cw(x,M,N,J,se,K,ne){function me(be){var Le;M.next===null?(_(se.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Le=Sc):(_(M.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Le=M.next.colorAttachments[0].texture._texture.type,K.oes_texture_float?(_(Le===Sc||Le===Xl,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Le===Xl&&_(ne.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(Le===Sc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Fe=0,ge=0,Ne=J.framebufferWidth,B=J.framebufferHeight,re=null;e(be)?re=be:be&&(_.type(be,"object","invalid arguments to regl.read()"),Fe=be.x|0,ge=be.y|0,_(Fe>=0&&Fe<J.framebufferWidth,"invalid x offset for regl.read"),_(ge>=0&&ge<J.framebufferHeight,"invalid y offset for regl.read"),Ne=(be.width||J.framebufferWidth-Fe)|0,B=(be.height||J.framebufferHeight-ge)|0,re=be.data||null),re&&(Le===Sc?_(re instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Le===Xl&&_(re instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(Ne>0&&Ne+Fe<=J.framebufferWidth,"invalid width for read pixels"),_(B>0&&B+ge<=J.framebufferHeight,"invalid height for read pixels"),N();var Me=Ne*B*4;return re||(Le===Sc?re=new Uint8Array(Me):Le===Xl&&(re=re||new Float32Array(Me))),_.isTypedArray(re,"data buffer for regl.read() must be a typedarray"),_(re.byteLength>=Me,"data buffer for regl.read() too small"),x.pixelStorei(sw,4),x.readPixels(Fe,ge,Ne,B,iw,Le,re),re}function ye(be){var Le;return M.setFBO({framebuffer:be.framebuffer},function(){Le=me(be)}),Le}function ke(be){return!be||!("framebuffer"in be)?me(be):ye(be)}return ke}function cs(x){return Array.prototype.slice.call(x)}function ls(x){return cs(x).join("")}function lw(){var x=0,M=[],N=[];function J(Le){for(var Fe=0;Fe<N.length;++Fe)if(N[Fe]===Le)return M[Fe];var ge="g"+x++;return M.push(ge),N.push(Le),ge}function se(){var Le=[];function Fe(){Le.push.apply(Le,cs(arguments))}var ge=[];function Ne(){var B="v"+x++;return ge.push(B),arguments.length>0&&(Le.push(B,"="),Le.push.apply(Le,cs(arguments)),Le.push(";")),B}return t(Fe,{def:Ne,toString:function(){return ls([ge.length>0?"var "+ge.join(",")+";":"",ls(Le)])}})}function K(){var Le=se(),Fe=se(),ge=Le.toString,Ne=Fe.toString;function B(re,Me){Fe(re,Me,"=",Le.def(re,Me),";")}return t(function(){Le.apply(Le,cs(arguments))},{def:Le.def,entry:Le,exit:Fe,save:B,set:function(re,Me,qe){B(re,Me),Le(re,Me,"=",qe,";")},toString:function(){return ge()+Ne()}})}function ne(){var Le=ls(arguments),Fe=K(),ge=K(),Ne=Fe.toString,B=ge.toString;return t(Fe,{then:function(){return Fe.apply(Fe,cs(arguments)),this},else:function(){return ge.apply(ge,cs(arguments)),this},toString:function(){var re=B();return re&&(re="else{"+re+"}"),ls(["if(",Le,"){",Ne(),"}",re])}})}var me=se(),ye={};function ke(Le,Fe){var ge=[];function Ne(){var he="a"+ge.length;return ge.push(he),he}Fe=Fe||0;for(var B=0;B<Fe;++B)Ne();var re=K(),Me=re.toString,qe=ye[Le]=t(re,{arg:Ne,toString:function(){return ls(["function(",ge.join(),"){",Me(),"}"])}});return qe}function be(){var Le=['"use strict";',me,"return {"];Object.keys(ye).forEach(function(Ne){Le.push('"',Ne,'":',ye[Ne].toString(),",")}),Le.push("}");var Fe=ls(Le).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),ge=Function.apply(null,M.concat(Fe));return ge.apply(null,N)}return{global:me,link:J,block:se,proc:ke,scope:K,cond:ne,compile:be}}var fs="xyzw".split(""),ev=5121,hs=1,fu=2,hu=0,uu=1,du=2,pu=3,Yl=4,tv=5,ov=6,nv="dither",rv="blend.enable",av="blend.color",vu="blend.equation",mu="blend.func",iv="depth.enable",sv="depth.func",cv="depth.range",lv="depth.mask",gu="colorMask",fv="cull.enable",hv="cull.face",xu="frontFace",yu="lineWidth",uv="polygonOffset.enable",bu="polygonOffset.offset",dv="sample.alpha",pv="sample.enable",wu="sample.coverage",vv="stencil.enable",mv="stencil.mask",_u="stencil.func",Mu="stencil.opFront",Ac="stencil.opBack",gv="scissor.enable",Kl="scissor.box",ni="viewport",Tc="profile",h0="framebuffer",Lc="vert",zc="frag",u0="elements",d0="primitive",p0="count",Ql="offset",Zl="instances",Nc="vao",ku="Width",Eu="Height",us=h0+ku,ds=h0+Eu,fw=ni+ku,hw=ni+Eu,xv="drawingBuffer",yv=xv+ku,bv=xv+Eu,uw=[mu,vu,_u,Mu,Ac,wu,ni,Kl,bu],ps=34962,dw=34963,pw=35632,vw=35633,wv=3553,mw=34067,gw=2884,xw=3042,yw=3024,bw=2960,ww=2929,_w=3089,Mw=32823,kw=32926,Ew=32928,Su=5126,Jl=35664,ef=35665,tf=35666,Au=5124,of=35667,nf=35668,rf=35669,Tu=35670,af=35671,sf=35672,cf=35673,Rc=35674,Cc=35675,Pc=35676,Ic=35678,Oc=35680,_v=4,Fc=1028,v0=1029,Mv=2304,Lu=2305,Sw=32775,Aw=32776,Tw=519,ki=7680,kv=0,Ev=1,Sv=32774,Lw=513,Av=36160,zw=36064,Ba={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Tv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],vs={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ei={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Lv={frag:pw,vert:vw},zu={cw:Mv,ccw:Lu};function lf(x){return Array.isArray(x)||e(x)||br(x)}function zv(x){return x.sort(function(M,N){return M===ni?-1:N===ni?1:M<N?-1:1})}function _r(x,M,N,J){this.thisDep=x,this.contextDep=M,this.propDep=N,this.append=J}function Si(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function yn(x){return new _r(!1,!1,!1,x)}function Fr(x,M){var N=x.type;if(N===hu){var J=x.data.length;return new _r(!0,J>=1,J>=2,M)}else if(N===Yl){var se=x.data;return new _r(se.thisDep,se.contextDep,se.propDep,M)}else{if(N===tv)return new _r(!1,!1,!1,M);if(N===ov){for(var K=!1,ne=!1,me=!1,ye=0;ye<x.data.length;++ye){var ke=x.data[ye];if(ke.type===uu)me=!0;else if(ke.type===du)ne=!0;else if(ke.type===pu)K=!0;else if(ke.type===hu){K=!0;var be=ke.data;be>=1&&(ne=!0),be>=2&&(me=!0)}else ke.type===Yl&&(K=K||ke.data.thisDep,ne=ne||ke.data.contextDep,me=me||ke.data.propDep)}return new _r(K,ne,me,M)}else return new _r(N===pu,N===du,N===uu,M)}}var Nv=new _r(!1,!1,!1,function(){});function Nw(x,M,N,J,se,K,ne,me,ye,ke,be,Le,Fe,ge,Ne){var B=ke.Record,re={add:32774,subtract:32778,"reverse subtract":32779};N.ext_blend_minmax&&(re.min=Sw,re.max=Aw);var Me=N.angle_instanced_arrays,qe=N.webgl_draw_buffers,he={dirty:!0,profile:Ne.profile},We={},ve=[],Re={},ue={};function Ce(A){return A.replace(".","_")}function vt(A,w,P){var H=Ce(A);ve.push(A),We[H]=he[H]=!!P,Re[H]=w}function Lt(A,w,P){var H=Ce(A);ve.push(A),Array.isArray(P)?(he[H]=P.slice(),We[H]=P.slice()):he[H]=We[H]=P,ue[H]=w}vt(nv,yw),vt(rv,xw),Lt(av,"blendColor",[0,0,0,0]),Lt(vu,"blendEquationSeparate",[Sv,Sv]),Lt(mu,"blendFuncSeparate",[Ev,kv,Ev,kv]),vt(iv,ww,!0),Lt(sv,"depthFunc",Lw),Lt(cv,"depthRange",[0,1]),Lt(lv,"depthMask",!0),Lt(gu,gu,[!0,!0,!0,!0]),vt(fv,gw),Lt(hv,"cullFace",v0),Lt(xu,xu,Lu),Lt(yu,yu,1),vt(uv,Mw),Lt(bu,"polygonOffset",[0,0]),vt(dv,kw),vt(pv,Ew),Lt(wu,"sampleCoverage",[1,!1]),vt(vv,bw),Lt(mv,"stencilMask",-1),Lt(_u,"stencilFunc",[Tw,0,-1]),Lt(Mu,"stencilOpSeparate",[Fc,ki,ki,ki]),Lt(Ac,"stencilOpSeparate",[v0,ki,ki,ki]),vt(gv,_w),Lt(Kl,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Lt(ni,ni,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var $e={gl:x,context:Fe,strings:M,next:We,current:he,draw:Le,elements:K,buffer:se,shader:be,attributes:ke.state,vao:ke,uniforms:ye,framebuffer:me,extensions:N,timer:ge,isBufferArgs:lf},Ee={primTypes:es,compareFuncs:vs,blendFuncs:Ba,blendEquations:re,stencilOps:Ei,glTypes:i0,orientationType:zu};_.optional(function(){$e.isArrayLike=hn}),qe&&(Ee.backBuffer=[v0],Ee.drawBuffer=Ht(J.maxDrawbuffers,function(A){return A===0?[0]:Ht(A,function(w){return zw+w})}));var fe=0;function kt(){var A=lw(),w=A.link,P=A.global;A.id=fe++,A.batchId="0";var H=w($e),U=A.shared={props:"a0"};Object.keys($e).forEach(function(C){U[C]=P.def(H,".",C)}),_.optional(function(){A.CHECK=w(_),A.commandStr=_.guessCommand(),A.command=w(A.commandStr),A.assert=function(C,S,q){C("if(!(",S,"))",this.CHECK,".commandRaise(",w(q),",",this.command,");")},Ee.invalidBlendCombinations=Tv});var F=A.next={},I=A.current={};Object.keys(ue).forEach(function(C){Array.isArray(he[C])&&(F[C]=P.def(U.next,".",C),I[C]=P.def(U.current,".",C))});var $=A.constants={};Object.keys(Ee).forEach(function(C){$[C]=P.def(JSON.stringify(Ee[C]))}),A.invoke=function(C,S){switch(S.type){case hu:var q=["this",U.context,U.props,A.batchId];return C.def(w(S.data),".call(",q.slice(0,Math.max(S.data.length+1,4)),")");case uu:return C.def(U.props,S.data);case du:return C.def(U.context,S.data);case pu:return C.def("this",S.data);case Yl:return S.data.append(A,C),S.data.ref;case tv:return S.data.toString();case ov:return S.data.map(function(V){return A.invoke(C,V)})}},A.attribCache={};var T={};return A.scopeAttrib=function(C){var S=M.id(C);if(S in T)return T[S];var q=ke.scope[S];q||(q=ke.scope[S]=new B);var V=T[S]=w(q);return V},A}function $t(A){var w=A.static,P=A.dynamic,H;if(Tc in w){var U=!!w[Tc];H=yn(function(I,$){return U}),H.enable=U}else if(Tc in P){var F=P[Tc];H=Fr(F,function(I,$){return I.invoke($,F)})}return H}function Je(A,w){var P=A.static,H=A.dynamic;if(h0 in P){var U=P[h0];return U?(U=me.getFramebuffer(U),_.command(U,"invalid framebuffer object"),yn(function(I,$){var T=I.link(U),C=I.shared;$.set(C.framebuffer,".next",T);var S=C.context;return $.set(S,"."+us,T+".width"),$.set(S,"."+ds,T+".height"),T})):yn(function(I,$){var T=I.shared;$.set(T.framebuffer,".next","null");var C=T.context;return $.set(C,"."+us,C+"."+yv),$.set(C,"."+ds,C+"."+bv),"null"})}else if(h0 in H){var F=H[h0];return Fr(F,function(I,$){var T=I.invoke($,F),C=I.shared,S=C.framebuffer,q=$.def(S,".getFramebuffer(",T,")");_.optional(function(){I.assert($,"!"+T+"||"+q,"invalid framebuffer object")}),$.set(S,".next",q);var V=C.context;return $.set(V,"."+us,q+"?"+q+".width:"+V+"."+yv),$.set(V,"."+ds,q+"?"+q+".height:"+V+"."+bv),q})}else return null}function Ut(A,w,P){var H=A.static,U=A.dynamic;function F(T){if(T in H){var C=H[T];_.commandType(C,"object","invalid "+T,P.commandStr);var S=!0,q=C.x|0,V=C.y|0,ie,ce;return"width"in C?(ie=C.width|0,_.command(ie>=0,"invalid "+T,P.commandStr)):S=!1,"height"in C?(ce=C.height|0,_.command(ce>=0,"invalid "+T,P.commandStr)):S=!1,new _r(!S&&w&&w.thisDep,!S&&w&&w.contextDep,!S&&w&&w.propDep,function(st,Dt){var et=st.shared.context,xt=ie;"width"in C||(xt=Dt.def(et,".",us,"-",q));var Ct=ce;return"height"in C||(Ct=Dt.def(et,".",ds,"-",V)),[q,V,xt,Ct]})}else if(T in U){var ae=U[T],we=Fr(ae,function(st,Dt){var et=st.invoke(Dt,ae);_.optional(function(){st.assert(Dt,et+"&&typeof "+et+'==="object"',"invalid "+T)});var xt=st.shared.context,Ct=Dt.def(et,".x|0"),po=Dt.def(et,".y|0"),rn=Dt.def('"width" in ',et,"?",et,".width|0:","(",xt,".",us,"-",Ct,")"),Mr=Dt.def('"height" in ',et,"?",et,".height|0:","(",xt,".",ds,"-",po,")");return _.optional(function(){st.assert(Dt,rn+">=0&&"+Mr+">=0","invalid "+T)}),[Ct,po,rn,Mr]});return w&&(we.thisDep=we.thisDep||w.thisDep,we.contextDep=we.contextDep||w.contextDep,we.propDep=we.propDep||w.propDep),we}else return w?new _r(w.thisDep,w.contextDep,w.propDep,function(st,Dt){var et=st.shared.context;return[0,0,Dt.def(et,".",us),Dt.def(et,".",ds)]}):null}var I=F(ni);if(I){var $=I;I=new _r(I.thisDep,I.contextDep,I.propDep,function(T,C){var S=$.append(T,C),q=T.shared.context;return C.set(q,"."+fw,S[2]),C.set(q,"."+hw,S[3]),S})}return{viewport:I,scissor_box:F(Kl)}}function Nt(A,w){var P=A.static,H=typeof P[zc]=="string"&&typeof P[Lc]=="string";if(H){if(Object.keys(w.dynamic).length>0)return null;var U=w.static,F=Object.keys(U);if(F.length>0&&typeof U[F[0]]=="number"){for(var I=[],$=0;$<F.length;++$)_(typeof U[F[$]]=="number","must specify all vertex attribute locations when using vaos"),I.push([U[F[$]]|0,F[$]]);return I}}return null}function qt(A,w,P){var H=A.static,U=A.dynamic;function F(S){if(S in H){var q=M.id(H[S]);_.optional(function(){be.shader(Lv[S],q,_.guessCommand())});var V=yn(function(){return q});return V.id=q,V}else if(S in U){var ie=U[S];return Fr(ie,function(ce,ae){var we=ce.invoke(ae,ie),st=ae.def(ce.shared.strings,".id(",we,")");return _.optional(function(){ae(ce.shared.shader,".shader(",Lv[S],",",st,",",ce.command,");")}),st})}return null}var I=F(zc),$=F(Lc),T=null,C;return Si(I)&&Si($)?(T=be.program($.id,I.id,null,P),C=yn(function(S,q){return S.link(T)})):C=new _r(I&&I.thisDep||$&&$.thisDep,I&&I.contextDep||$&&$.contextDep,I&&I.propDep||$&&$.propDep,function(S,q){var V=S.shared.shader,ie;I?ie=I.append(S,q):ie=q.def(V,".",zc);var ce;$?ce=$.append(S,q):ce=q.def(V,".",Lc);var ae=V+".program("+ce+","+ie;return _.optional(function(){ae+=","+S.command}),q.def(ae+")")}),{frag:I,vert:$,progVar:C,program:T}}function uo(A,w){var P=A.static,H=A.dynamic;function U(){if(u0 in P){var S=P[u0];lf(S)?S=K.getElements(K.create(S,!0)):S&&(S=K.getElements(S),_.command(S,"invalid elements",w.commandStr));var q=yn(function(ie,ce){if(S){var ae=ie.link(S);return ie.ELEMENTS=ae,ae}return ie.ELEMENTS=null,null});return q.value=S,q}else if(u0 in H){var V=H[u0];return Fr(V,function(ie,ce){var ae=ie.shared,we=ae.isBufferArgs,st=ae.elements,Dt=ie.invoke(ce,V),et=ce.def("null"),xt=ce.def(we,"(",Dt,")"),Ct=ie.cond(xt).then(et,"=",st,".createStream(",Dt,");").else(et,"=",st,".getElements(",Dt,");");return _.optional(function(){ie.assert(Ct.else,"!"+Dt+"||"+et,"invalid elements")}),ce.entry(Ct),ce.exit(ie.cond(xt).then(st,".destroyStream(",et,");")),ie.ELEMENTS=et,et})}return null}var F=U();function I(){if(d0 in P){var S=P[d0];return _.commandParameter(S,es,"invalid primitve",w.commandStr),yn(function(V,ie){return es[S]})}else if(d0 in H){var q=H[d0];return Fr(q,function(V,ie){var ce=V.constants.primTypes,ae=V.invoke(ie,q);return _.optional(function(){V.assert(ie,ae+" in "+ce,"invalid primitive, must be one of "+Object.keys(es))}),ie.def(ce,"[",ae,"]")})}else if(F)return Si(F)?F.value?yn(function(V,ie){return ie.def(V.ELEMENTS,".primType")}):yn(function(){return _v}):new _r(F.thisDep,F.contextDep,F.propDep,function(V,ie){var ce=V.ELEMENTS;return ie.def(ce,"?",ce,".primType:",_v)});return null}function $(S,q){if(S in P){var V=P[S]|0;return _.command(!q||V>=0,"invalid "+S,w.commandStr),yn(function(ce,ae){return q&&(ce.OFFSET=V),V})}else if(S in H){var ie=H[S];return Fr(ie,function(ce,ae){var we=ce.invoke(ae,ie);return q&&(ce.OFFSET=we,_.optional(function(){ce.assert(ae,we+">=0","invalid "+S)})),we})}else if(q&&F)return yn(function(ce,ae){return ce.OFFSET="0",0});return null}var T=$(Ql,!0);function C(){if(p0 in P){var S=P[p0]|0;return _.command(typeof S=="number"&&S>=0,"invalid vertex count",w.commandStr),yn(function(){return S})}else if(p0 in H){var q=H[p0];return Fr(q,function(ce,ae){var we=ce.invoke(ae,q);return _.optional(function(){ce.assert(ae,"typeof "+we+'==="number"&&'+we+">=0&&"+we+"===("+we+"|0)","invalid vertex count")}),we})}else if(F)if(Si(F)){if(F)return T?new _r(T.thisDep,T.contextDep,T.propDep,function(ce,ae){var we=ae.def(ce.ELEMENTS,".vertCount-",ce.OFFSET);return _.optional(function(){ce.assert(ae,we+">=0","invalid vertex offset/element buffer too small")}),we}):yn(function(ce,ae){return ae.def(ce.ELEMENTS,".vertCount")});var V=yn(function(){return-1});return _.optional(function(){V.MISSING=!0}),V}else{var ie=new _r(F.thisDep||T.thisDep,F.contextDep||T.contextDep,F.propDep||T.propDep,function(ce,ae){var we=ce.ELEMENTS;return ce.OFFSET?ae.def(we,"?",we,".vertCount-",ce.OFFSET,":-1"):ae.def(we,"?",we,".vertCount:-1")});return _.optional(function(){ie.DYNAMIC=!0}),ie}return null}return{elements:F,primitive:I(),count:C(),instances:$(Zl,!1),offset:T}}function bn(A,w){var P=A.static,H=A.dynamic,U={};return ve.forEach(function(F){var I=Ce(F);function $(T,C){if(F in P){var S=T(P[F]);U[I]=yn(function(){return S})}else if(F in H){var q=H[F];U[I]=Fr(q,function(V,ie){return C(V,ie,V.invoke(ie,q))})}}switch(F){case fv:case rv:case nv:case vv:case iv:case gv:case uv:case dv:case pv:case lv:return $(function(T){return _.commandType(T,"boolean",F,w.commandStr),T},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="boolean"',"invalid flag "+F,T.commandStr)}),S});case sv:return $(function(T){return _.commandParameter(T,vs,"invalid "+F,w.commandStr),vs[T]},function(T,C,S){var q=T.constants.compareFuncs;return _.optional(function(){T.assert(C,S+" in "+q,"invalid "+F+", must be one of "+Object.keys(vs))}),C.def(q,"[",S,"]")});case cv:return $(function(T){return _.command(hn(T)&&T.length===2&&typeof T[0]=="number"&&typeof T[1]=="number"&&T[0]<=T[1],"depth range is 2d array",w.commandStr),T},function(T,C,S){_.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var q=C.def("+",S,"[0]"),V=C.def("+",S,"[1]");return[q,V]});case mu:return $(function(T){_.commandType(T,"object","blend.func",w.commandStr);var C="srcRGB"in T?T.srcRGB:T.src,S="srcAlpha"in T?T.srcAlpha:T.src,q="dstRGB"in T?T.dstRGB:T.dst,V="dstAlpha"in T?T.dstAlpha:T.dst;return _.commandParameter(C,Ba,I+".srcRGB",w.commandStr),_.commandParameter(S,Ba,I+".srcAlpha",w.commandStr),_.commandParameter(q,Ba,I+".dstRGB",w.commandStr),_.commandParameter(V,Ba,I+".dstAlpha",w.commandStr),_.command(Tv.indexOf(C+", "+q)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+C+", "+q+")",w.commandStr),[Ba[C],Ba[q],Ba[S],Ba[V]]},function(T,C,S){var q=T.constants.blendFuncs;_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function V(et,xt){var Ct=C.def('"',et,xt,'" in ',S,"?",S,".",et,xt,":",S,".",et);return _.optional(function(){T.assert(C,Ct+" in "+q,"invalid "+F+"."+et+xt+", must be one of "+Object.keys(Ba))}),Ct}var ie=V("src","RGB"),ce=V("dst","RGB");_.optional(function(){var et=T.constants.invalidBlendCombinations;T.assert(C,et+".indexOf("+ie+'+", "+'+ce+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ae=C.def(q,"[",ie,"]"),we=C.def(q,"[",V("src","Alpha"),"]"),st=C.def(q,"[",ce,"]"),Dt=C.def(q,"[",V("dst","Alpha"),"]");return[ae,st,we,Dt]});case vu:return $(function(T){if(typeof T=="string")return _.commandParameter(T,re,"invalid "+F,w.commandStr),[re[T],re[T]];if(typeof T=="object")return _.commandParameter(T.rgb,re,F+".rgb",w.commandStr),_.commandParameter(T.alpha,re,F+".alpha",w.commandStr),[re[T.rgb],re[T.alpha]];_.commandRaise("invalid blend.equation",w.commandStr)},function(T,C,S){var q=T.constants.blendEquations,V=C.def(),ie=C.def(),ce=T.cond("typeof ",S,'==="string"');return _.optional(function(){function ae(we,st,Dt){T.assert(we,Dt+" in "+q,"invalid "+st+", must be one of "+Object.keys(re))}ae(ce.then,F,S),T.assert(ce.else,S+"&&typeof "+S+'==="object"',"invalid "+F),ae(ce.else,F+".rgb",S+".rgb"),ae(ce.else,F+".alpha",S+".alpha")}),ce.then(V,"=",ie,"=",q,"[",S,"];"),ce.else(V,"=",q,"[",S,".rgb];",ie,"=",q,"[",S,".alpha];"),C(ce),[V,ie]});case av:return $(function(T){return _.command(hn(T)&&T.length===4,"blend.color must be a 4d array",w.commandStr),Ht(4,function(C){return+T[C]})},function(T,C,S){return _.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),Ht(4,function(q){return C.def("+",S,"[",q,"]")})});case mv:return $(function(T){return _.commandType(T,"number",I,w.commandStr),T|0},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="number"',"invalid stencil.mask")}),C.def(S,"|0")});case _u:return $(function(T){_.commandType(T,"object",I,w.commandStr);var C=T.cmp||"keep",S=T.ref||0,q="mask"in T?T.mask:-1;return _.commandParameter(C,vs,F+".cmp",w.commandStr),_.commandType(S,"number",F+".ref",w.commandStr),_.commandType(q,"number",F+".mask",w.commandStr),[vs[C],S,q]},function(T,C,S){var q=T.constants.compareFuncs;_.optional(function(){function ae(){T.assert(C,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ae(S+"&&typeof ",S,'==="object"'),ae('!("cmp" in ',S,")||(",S,".cmp in ",q,")")});var V=C.def('"cmp" in ',S,"?",q,"[",S,".cmp]",":",ki),ie=C.def(S,".ref|0"),ce=C.def('"mask" in ',S,"?",S,".mask|0:-1");return[V,ie,ce]});case Mu:case Ac:return $(function(T){_.commandType(T,"object",I,w.commandStr);var C=T.fail||"keep",S=T.zfail||"keep",q=T.zpass||"keep";return _.commandParameter(C,Ei,F+".fail",w.commandStr),_.commandParameter(S,Ei,F+".zfail",w.commandStr),_.commandParameter(q,Ei,F+".zpass",w.commandStr),[F===Ac?v0:Fc,Ei[C],Ei[S],Ei[q]]},function(T,C,S){var q=T.constants.stencilOps;_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid "+F)});function V(ie){return _.optional(function(){T.assert(C,'!("'+ie+'" in '+S+")||("+S+"."+ie+" in "+q+")","invalid "+F+"."+ie+", must be one of "+Object.keys(Ei))}),C.def('"',ie,'" in ',S,"?",q,"[",S,".",ie,"]:",ki)}return[F===Ac?v0:Fc,V("fail"),V("zfail"),V("zpass")]});case bu:return $(function(T){_.commandType(T,"object",I,w.commandStr);var C=T.factor|0,S=T.units|0;return _.commandType(C,"number",I+".factor",w.commandStr),_.commandType(S,"number",I+".units",w.commandStr),[C,S]},function(T,C,S){_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid "+F)});var q=C.def(S,".factor|0"),V=C.def(S,".units|0");return[q,V]});case hv:return $(function(T){var C=0;return T==="front"?C=Fc:T==="back"&&(C=v0),_.command(!!C,I,w.commandStr),C},function(T,C,S){return _.optional(function(){T.assert(C,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),C.def(S,'==="front"?',Fc,":",v0)});case yu:return $(function(T){return _.command(typeof T=="number"&&T>=J.lineWidthDims[0]&&T<=J.lineWidthDims[1],"invalid line width, must be a positive number between "+J.lineWidthDims[0]+" and "+J.lineWidthDims[1],w.commandStr),T},function(T,C,S){return _.optional(function(){T.assert(C,"typeof "+S+'==="number"&&'+S+">="+J.lineWidthDims[0]+"&&"+S+"<="+J.lineWidthDims[1],"invalid line width")}),S});case xu:return $(function(T){return _.commandParameter(T,zu,I,w.commandStr),zu[T]},function(T,C,S){return _.optional(function(){T.assert(C,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),C.def(S+'==="cw"?'+Mv+":"+Lu)});case gu:return $(function(T){return _.command(hn(T)&&T.length===4,"color.mask must be length 4 array",w.commandStr),T.map(function(C){return!!C})},function(T,C,S){return _.optional(function(){T.assert(C,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),Ht(4,function(q){return"!!"+S+"["+q+"]"})});case wu:return $(function(T){_.command(typeof T=="object"&&T,I,w.commandStr);var C="value"in T?T.value:1,S=!!T.invert;return _.command(typeof C=="number"&&C>=0&&C<=1,"sample.coverage.value must be a number between 0 and 1",w.commandStr),[C,S]},function(T,C,S){_.optional(function(){T.assert(C,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var q=C.def('"value" in ',S,"?+",S,".value:1"),V=C.def("!!",S,".invert");return[q,V]})}}),U}function In(A,w){var P=A.static,H=A.dynamic,U={};return Object.keys(P).forEach(function(F){var I=P[F],$;if(typeof I=="number"||typeof I=="boolean")$=yn(function(){return I});else if(typeof I=="function"){var T=I._reglType;T==="texture2d"||T==="textureCube"?$=yn(function(C){return C.link(I)}):T==="framebuffer"||T==="framebufferCube"?(_.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',w.commandStr),$=yn(function(C){return C.link(I.color[0])})):_.commandRaise('invalid data for uniform "'+F+'"',w.commandStr)}else hn(I)?$=yn(function(C){var S=C.global.def("[",Ht(I.length,function(q){return _.command(typeof I[q]=="number"||typeof I[q]=="boolean","invalid uniform "+F,C.commandStr),I[q]}),"]");return S}):_.commandRaise('invalid or missing data for uniform "'+F+'"',w.commandStr);$.value=I,U[F]=$}),Object.keys(H).forEach(function(F){var I=H[F];U[F]=Fr(I,function($,T){return $.invoke(T,I)})}),U}function Qt(A,w){var P=A.static,H=A.dynamic,U={};return Object.keys(P).forEach(function(F){var I=P[F],$=M.id(F),T=new B;if(lf(I))T.state=hs,T.buffer=se.getBuffer(se.create(I,ps,!1,!0)),T.type=0;else{var C=se.getBuffer(I);if(C)T.state=hs,T.buffer=C,T.type=0;else if(_.command(typeof I=="object"&&I,"invalid data for attribute "+F,w.commandStr),"constant"in I){var S=I.constant;T.buffer="null",T.state=fu,typeof S=="number"?T.x=S:(_.command(hn(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+F,w.commandStr),fs.forEach(function(st,Dt){Dt<S.length&&(T[st]=S[Dt])}))}else{lf(I.buffer)?C=se.getBuffer(se.create(I.buffer,ps,!1,!0)):C=se.getBuffer(I.buffer),_.command(!!C,'missing buffer for attribute "'+F+'"',w.commandStr);var q=I.offset|0;_.command(q>=0,'invalid offset for attribute "'+F+'"',w.commandStr);var V=I.stride|0;_.command(V>=0&&V<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',w.commandStr);var ie=I.size|0;_.command(!("size"in I)||ie>0&&ie<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',w.commandStr);var ce=!!I.normalized,ae=0;"type"in I&&(_.commandParameter(I.type,i0,"invalid type for attribute "+F,w.commandStr),ae=i0[I.type]);var we=I.divisor|0;"divisor"in I&&(_.command(we===0||Me,'cannot specify divisor for attribute "'+F+'", instancing not supported',w.commandStr),_.command(we>=0,'invalid divisor for attribute "'+F+'"',w.commandStr)),_.optional(function(){var st=w.commandStr,Dt=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(et){_.command(Dt.indexOf(et)>=0,'unknown parameter "'+et+'" for attribute pointer "'+F+'" (valid parameters are '+Dt+")",st)})}),T.buffer=C,T.state=hs,T.size=ie,T.normalized=ce,T.type=ae||C.dtype,T.offset=q,T.stride=V,T.divisor=we}}U[F]=yn(function(st,Dt){var et=st.attribCache;if($ in et)return et[$];var xt={isStream:!1};return Object.keys(T).forEach(function(Ct){xt[Ct]=T[Ct]}),T.buffer&&(xt.buffer=st.link(T.buffer),xt.type=xt.type||xt.buffer+".dtype"),et[$]=xt,xt})}),Object.keys(H).forEach(function(F){var I=H[F];function $(T,C){var S=T.invoke(C,I),q=T.shared,V=T.constants,ie=q.isBufferArgs,ce=q.buffer;_.optional(function(){T.assert(C,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+ie+"("+S+")||"+ce+".getBuffer("+S+")||"+ce+".getBuffer("+S+".buffer)||"+ie+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+q.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+F+'"')});var ae={isStream:C.def(!1)},we=new B;we.state=hs,Object.keys(we).forEach(function(xt){ae[xt]=C.def(""+we[xt])});var st=ae.buffer,Dt=ae.type;C("if(",ie,"(",S,")){",ae.isStream,"=true;",st,"=",ce,".createStream(",ps,",",S,");",Dt,"=",st,".dtype;","}else{",st,"=",ce,".getBuffer(",S,");","if(",st,"){",Dt,"=",st,".dtype;",'}else if("constant" in ',S,"){",ae.state,"=",fu,";","if(typeof "+S+'.constant === "number"){',ae[fs[0]],"=",S,".constant;",fs.slice(1).map(function(xt){return ae[xt]}).join("="),"=0;","}else{",fs.map(function(xt,Ct){return ae[xt]+"="+S+".constant.length>"+Ct+"?"+S+".constant["+Ct+"]:0;"}).join(""),"}}else{","if(",ie,"(",S,".buffer)){",st,"=",ce,".createStream(",ps,",",S,".buffer);","}else{",st,"=",ce,".getBuffer(",S,".buffer);","}",Dt,'="type" in ',S,"?",V.glTypes,"[",S,".type]:",st,".dtype;",ae.normalized,"=!!",S,".normalized;");function et(xt){C(ae[xt],"=",S,".",xt,"|0;")}return et("size"),et("offset"),et("stride"),et("divisor"),C("}}"),C.exit("if(",ae.isStream,"){",ce,".destroyStream(",st,");","}"),ae}U[F]=Fr(I,$)}),U}function An(A,w){var P=A.static,H=A.dynamic;if(Nc in P){var U=P[Nc];return U!==null&&ke.getVAO(U)===null&&(U=ke.createVAO(U)),yn(function(I){return I.link(ke.getVAO(U))})}else if(Nc in H){var F=H[Nc];return Fr(F,function(I,$){var T=I.invoke($,F);return $.def(I.shared.vao+".getVAO("+T+")")})}return null}function jo(A){var w=A.static,P=A.dynamic,H={};return Object.keys(w).forEach(function(U){var F=w[U];H[U]=yn(function(I,$){return typeof F=="number"||typeof F=="boolean"?""+F:I.link(F)})}),Object.keys(P).forEach(function(U){var F=P[U];H[U]=Fr(F,function(I,$){return I.invoke($,F)})}),H}function wn(A,w,P,H,U){var F=A.static,I=A.dynamic;_.optional(function(){var et=[h0,Lc,zc,u0,d0,Ql,p0,Zl,Tc,Nc].concat(ve);function xt(Ct){Object.keys(Ct).forEach(function(po){_.command(et.indexOf(po)>=0,'unknown parameter "'+po+'"',U.commandStr)})}xt(F),xt(I)});var $=Nt(A,w),T=Je(A,U),C=Ut(A,T,U),S=uo(A,U),q=bn(A,U),V=qt(A,U,$);function ie(et){var xt=C[et];xt&&(q[et]=xt)}ie(ni),ie(Ce(Kl));var ce=Object.keys(q).length>0,ae={framebuffer:T,draw:S,shader:V,state:q,dirty:ce,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ae.profile=$t(A,U),ae.uniforms=In(P,U),ae.drawVAO=ae.scopeVAO=An(A,U),!ae.drawVAO&&V.program&&!$&&N.angle_instanced_arrays){var we=!0,st=V.program.attributes.map(function(et){var xt=w.static[et];return we=we&&!!xt,xt});if(we&&st.length>0){var Dt=ke.getVAO(ke.createVAO(st));ae.drawVAO=new _r(null,null,null,function(et,xt){return et.link(Dt)}),ae.useVAO=!0}}return $?ae.useVAO=!0:ae.attributes=Qt(w,U),ae.context=jo(H,U),ae}function Tn(A,w,P){var H=A.shared,U=H.context,F=A.scope();Object.keys(P).forEach(function(I){w.save(U,"."+I);var $=P[I],T=$.append(A,w);Array.isArray(T)?F(U,".",I,"=[",T.join(),"];"):F(U,".",I,"=",T,";")}),w(F)}function Ln(A,w,P,H){var U=A.shared,F=U.gl,I=U.framebuffer,$;qe&&($=w.def(U.extensions,".webgl_draw_buffers"));var T=A.constants,C=T.drawBuffer,S=T.backBuffer,q;P?q=P.append(A,w):q=w.def(I,".next"),H||w("if(",q,"!==",I,".cur){"),w("if(",q,"){",F,".bindFramebuffer(",Av,",",q,".framebuffer);"),qe&&w($,".drawBuffersWEBGL(",C,"[",q,".colorAttachments.length]);"),w("}else{",F,".bindFramebuffer(",Av,",null);"),qe&&w($,".drawBuffersWEBGL(",S,");"),w("}",I,".cur=",q,";"),H||w("}")}function Un(A,w,P){var H=A.shared,U=H.gl,F=A.current,I=A.next,$=H.current,T=H.next,C=A.cond($,".dirty");ve.forEach(function(S){var q=Ce(S);if(!(q in P.state)){var V,ie;if(q in I){V=I[q],ie=F[q];var ce=Ht(he[q].length,function(we){return C.def(V,"[",we,"]")});C(A.cond(ce.map(function(we,st){return we+"!=="+ie+"["+st+"]"}).join("||")).then(U,".",ue[q],"(",ce,");",ce.map(function(we,st){return ie+"["+st+"]="+we}).join(";"),";"))}else{V=C.def(T,".",q);var ae=A.cond(V,"!==",$,".",q);C(ae),q in Re?ae(A.cond(V).then(U,".enable(",Re[q],");").else(U,".disable(",Re[q],");"),$,".",q,"=",V,";"):ae(U,".",ue[q],"(",V,");",$,".",q,"=",V,";")}}}),Object.keys(P.state).length===0&&C($,".dirty=false;"),w(C)}function tr(A,w,P,H){var U=A.shared,F=A.current,I=U.current,$=U.gl;zv(Object.keys(P)).forEach(function(T){var C=P[T];if(!(H&&!H(C))){var S=C.append(A,w);if(Re[T]){var q=Re[T];Si(C)?S?w($,".enable(",q,");"):w($,".disable(",q,");"):w(A.cond(S).then($,".enable(",q,");").else($,".disable(",q,");")),w(I,".",T,"=",S,";")}else if(hn(S)){var V=F[T];w($,".",ue[T],"(",S,");",S.map(function(ie,ce){return V+"["+ce+"]="+ie}).join(";"),";")}else w($,".",ue[T],"(",S,");",I,".",T,"=",S,";")}})}function un(A,w){Me&&(A.instancing=w.def(A.shared.extensions,".angle_instanced_arrays"))}function Gt(A,w,P,H,U){var F=A.shared,I=A.stats,$=F.current,T=F.timer,C=P.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var q,V;function ie(et){q=w.def(),et(q,"=",S(),";"),typeof U=="string"?et(I,".count+=",U,";"):et(I,".count++;"),ge&&(H?(V=w.def(),et(V,"=",T,".getNumPendingQueries();")):et(T,".beginQuery(",I,");"))}function ce(et){et(I,".cpuTime+=",S(),"-",q,";"),ge&&(H?et(T,".pushScopeStats(",V,",",T,".getNumPendingQueries(),",I,");"):et(T,".endQuery();"))}function ae(et){var xt=w.def($,".profile");w($,".profile=",et,";"),w.exit($,".profile=",xt,";")}var we;if(C){if(Si(C)){C.enable?(ie(w),ce(w.exit),ae("true")):ae("false");return}we=C.append(A,w),ae(we)}else we=w.def($,".profile");var st=A.block();ie(st),w("if(",we,"){",st,"}");var Dt=A.block();ce(Dt),w.exit("if(",we,"){",Dt,"}")}function or(A,w,P,H,U){var F=A.shared;function I(T){switch(T){case Jl:case of:case af:return 2;case ef:case nf:case sf:return 3;case tf:case rf:case cf:return 4;default:return 1}}function $(T,C,S){var q=F.gl,V=w.def(T,".location"),ie=w.def(F.attributes,"[",V,"]"),ce=S.state,ae=S.buffer,we=[S.x,S.y,S.z,S.w],st=["buffer","normalized","offset","stride"];function Dt(){w("if(!",ie,".buffer){",q,".enableVertexAttribArray(",V,");}");var xt=S.type,Ct;if(S.size?Ct=w.def(S.size,"||",C):Ct=C,w("if(",ie,".type!==",xt,"||",ie,".size!==",Ct,"||",st.map(function(rn){return ie+"."+rn+"!=="+S[rn]}).join("||"),"){",q,".bindBuffer(",ps,",",ae,".buffer);",q,".vertexAttribPointer(",[V,Ct,xt,S.normalized,S.stride,S.offset],");",ie,".type=",xt,";",ie,".size=",Ct,";",st.map(function(rn){return ie+"."+rn+"="+S[rn]+";"}).join(""),"}"),Me){var po=S.divisor;w("if(",ie,".divisor!==",po,"){",A.instancing,".vertexAttribDivisorANGLE(",[V,po],");",ie,".divisor=",po,";}")}}function et(){w("if(",ie,".buffer){",q,".disableVertexAttribArray(",V,");",ie,".buffer=null;","}if(",fs.map(function(xt,Ct){return ie+"."+xt+"!=="+we[Ct]}).join("||"),"){",q,".vertexAttrib4f(",V,",",we,");",fs.map(function(xt,Ct){return ie+"."+xt+"="+we[Ct]+";"}).join(""),"}")}ce===hs?Dt():ce===fu?et():(w("if(",ce,"===",hs,"){"),Dt(),w("}else{"),et(),w("}"))}H.forEach(function(T){var C=T.name,S=P.attributes[C],q;if(S){if(!U(S))return;q=S.append(A,w)}else{if(!U(Nv))return;var V=A.scopeAttrib(C);_.optional(function(){A.assert(w,V+".state","missing attribute "+C)}),q={},Object.keys(new B).forEach(function(ie){q[ie]=w.def(V,".",ie)})}$(A.link(T),I(T.info.type),q)})}function bo(A,w,P,H,U){for(var F=A.shared,I=F.gl,$,T=0;T<H.length;++T){var C=H[T],S=C.name,q=C.info.type,V=P.uniforms[S],ie=A.link(C),ce=ie+".location",ae;if(V){if(!U(V))continue;if(Si(V)){var we=V.value;if(_.command(we!==null&&typeof we!="undefined",'missing uniform "'+S+'"',A.commandStr),q===Ic||q===Oc){_.command(typeof we=="function"&&(q===Ic&&(we._reglType==="texture2d"||we._reglType==="framebuffer")||q===Oc&&(we._reglType==="textureCube"||we._reglType==="framebufferCube")),"invalid texture for uniform "+S,A.commandStr);var st=A.link(we._texture||we.color[0]._texture);w(I,".uniform1i(",ce,",",st+".bind());"),w.exit(st,".unbind();")}else if(q===Rc||q===Cc||q===Pc){_.optional(function(){_.command(hn(we),"invalid matrix for uniform "+S,A.commandStr),_.command(q===Rc&&we.length===4||q===Cc&&we.length===9||q===Pc&&we.length===16,"invalid length for matrix uniform "+S,A.commandStr)});var Dt=A.global.def("new Float32Array(["+Array.prototype.slice.call(we)+"])"),et=2;q===Cc?et=3:q===Pc&&(et=4),w(I,".uniformMatrix",et,"fv(",ce,",false,",Dt,");")}else{switch(q){case Su:_.commandType(we,"number","uniform "+S,A.commandStr),$="1f";break;case Jl:_.command(hn(we)&&we.length===2,"uniform "+S,A.commandStr),$="2f";break;case ef:_.command(hn(we)&&we.length===3,"uniform "+S,A.commandStr),$="3f";break;case tf:_.command(hn(we)&&we.length===4,"uniform "+S,A.commandStr),$="4f";break;case Tu:_.commandType(we,"boolean","uniform "+S,A.commandStr),$="1i";break;case Au:_.commandType(we,"number","uniform "+S,A.commandStr),$="1i";break;case af:_.command(hn(we)&&we.length===2,"uniform "+S,A.commandStr),$="2i";break;case of:_.command(hn(we)&&we.length===2,"uniform "+S,A.commandStr),$="2i";break;case sf:_.command(hn(we)&&we.length===3,"uniform "+S,A.commandStr),$="3i";break;case nf:_.command(hn(we)&&we.length===3,"uniform "+S,A.commandStr),$="3i";break;case cf:_.command(hn(we)&&we.length===4,"uniform "+S,A.commandStr),$="4i";break;case rf:_.command(hn(we)&&we.length===4,"uniform "+S,A.commandStr),$="4i";break}w(I,".uniform",$,"(",ce,",",hn(we)?Array.prototype.slice.call(we):we,");")}continue}else ae=V.append(A,w)}else{if(!U(Nv))continue;ae=w.def(F.uniforms,"[",M.id(S),"]")}q===Ic?(_(!Array.isArray(ae),"must specify a scalar prop for textures"),w("if(",ae,"&&",ae,'._reglType==="framebuffer"){',ae,"=",ae,".color[0];","}")):q===Oc&&(_(!Array.isArray(ae),"must specify a scalar prop for cube maps"),w("if(",ae,"&&",ae,'._reglType==="framebufferCube"){',ae,"=",ae,".color[0];","}")),_.optional(function(){function Mr(La,$v){A.assert(w,La,'bad data or missing for uniform "'+S+'".  '+$v)}function Nu(La){_(!Array.isArray(ae),"must not specify an array type for uniform"),Mr("typeof "+ae+'==="'+La+'"',"invalid type, expected "+La)}function ha(La,$v){Array.isArray(ae)?_(ae.length===La,"must have length "+La):Mr(F.isArrayLike+"("+ae+")&&"+ae+".length==="+La,"invalid vector, should have length "+La,A.commandStr)}function Fv(La){_(!Array.isArray(ae),"must not specify a value type"),Mr("typeof "+ae+'==="function"&&'+ae+'._reglType==="texture'+(La===wv?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch(q){case Au:Nu("number");break;case of:ha(2,"number");break;case nf:ha(3,"number");break;case rf:ha(4,"number");break;case Su:Nu("number");break;case Jl:ha(2,"number");break;case ef:ha(3,"number");break;case tf:ha(4,"number");break;case Tu:Nu("boolean");break;case af:ha(2,"boolean");break;case sf:ha(3,"boolean");break;case cf:ha(4,"boolean");break;case Rc:ha(4,"number");break;case Cc:ha(9,"number");break;case Pc:ha(16,"number");break;case Ic:Fv(wv);break;case Oc:Fv(mw);break}});var xt=1;switch(q){case Ic:case Oc:var Ct=w.def(ae,"._texture");w(I,".uniform1i(",ce,",",Ct,".bind());"),w.exit(Ct,".unbind();");continue;case Au:case Tu:$="1i";break;case of:case af:$="2i",xt=2;break;case nf:case sf:$="3i",xt=3;break;case rf:case cf:$="4i",xt=4;break;case Su:$="1f";break;case Jl:$="2f",xt=2;break;case ef:$="3f",xt=3;break;case tf:$="4f",xt=4;break;case Rc:$="Matrix2fv";break;case Cc:$="Matrix3fv";break;case Pc:$="Matrix4fv";break}if(w(I,".uniform",$,"(",ce,","),$.charAt(0)==="M"){var po=Math.pow(q-Rc+2,2),rn=A.global.def("new Float32Array(",po,")");Array.isArray(ae)?w("false,(",Ht(po,function(Mr){return rn+"["+Mr+"]="+ae[Mr]}),",",rn,")"):w("false,(Array.isArray(",ae,")||",ae," instanceof Float32Array)?",ae,":(",Ht(po,function(Mr){return rn+"["+Mr+"]="+ae+"["+Mr+"]"}),",",rn,")")}else xt>1?w(Ht(xt,function(Mr){return Array.isArray(ae)?ae[Mr]:ae+"["+Mr+"]"})):(_(!Array.isArray(ae),"uniform value must not be an array"),w(ae));w(");")}}function gt(A,w,P,H){var U=A.shared,F=U.gl,I=U.draw,$=H.draw;function T(){var Ct=$.elements,po,rn=w;return Ct?((Ct.contextDep&&H.contextDynamic||Ct.propDep)&&(rn=P),po=Ct.append(A,rn)):po=rn.def(I,".",u0),po&&rn("if("+po+")"+F+".bindBuffer("+dw+","+po+".buffer.buffer);"),po}function C(){var Ct=$.count,po,rn=w;return Ct?((Ct.contextDep&&H.contextDynamic||Ct.propDep)&&(rn=P),po=Ct.append(A,rn),_.optional(function(){Ct.MISSING&&A.assert(w,"false","missing vertex count"),Ct.DYNAMIC&&A.assert(rn,po+">=0","missing vertex count")})):(po=rn.def(I,".",p0),_.optional(function(){A.assert(rn,po+">=0","missing vertex count")})),po}var S=T();function q(Ct){var po=$[Ct];return po?po.contextDep&&H.contextDynamic||po.propDep?po.append(A,P):po.append(A,w):w.def(I,".",Ct)}var V=q(d0),ie=q(Ql),ce=C();if(typeof ce=="number"){if(ce===0)return}else P("if(",ce,"){"),P.exit("}");var ae,we;Me&&(ae=q(Zl),we=A.instancing);var st=S+".type",Dt=$.elements&&Si($.elements);function et(){function Ct(){P(we,".drawElementsInstancedANGLE(",[V,ce,st,ie+"<<(("+st+"-"+ev+")>>1)",ae],");")}function po(){P(we,".drawArraysInstancedANGLE(",[V,ie,ce,ae],");")}S?Dt?Ct():(P("if(",S,"){"),Ct(),P("}else{"),po(),P("}")):po()}function xt(){function Ct(){P(F+".drawElements("+[V,ce,st,ie+"<<(("+st+"-"+ev+")>>1)"]+");")}function po(){P(F+".drawArrays("+[V,ie,ce]+");")}S?Dt?Ct():(P("if(",S,"){"),Ct(),P("}else{"),po(),P("}")):po()}Me&&(typeof ae!="number"||ae>=0)?typeof ae=="string"?(P("if(",ae,">0){"),et(),P("}else if(",ae,"<0){"),xt(),P("}")):et():xt()}function Vt(A,w,P,H,U){var F=kt(),I=F.proc("body",U);return _.optional(function(){F.commandStr=w.commandStr,F.command=F.link(w.commandStr)}),Me&&(F.instancing=I.def(F.shared.extensions,".angle_instanced_arrays")),A(F,I,P,H),F.compile().body}function io(A,w,P,H){un(A,w),P.useVAO?P.drawVAO?w(A.shared.vao,".setVAO(",P.drawVAO.append(A,w),");"):w(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(w(A.shared.vao,".setVAO(null);"),or(A,w,P,H.attributes,function(){return!0})),bo(A,w,P,H.uniforms,function(){return!0}),gt(A,w,w,P)}function dn(A,w){var P=A.proc("draw",1);un(A,P),Tn(A,P,w.context),Ln(A,P,w.framebuffer),Un(A,P,w),tr(A,P,w.state),Gt(A,P,w,!1,!0);var H=w.shader.progVar.append(A,P);if(P(A.shared.gl,".useProgram(",H,".program);"),w.shader.program)io(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var U=A.global.def("{}"),F=P.def(H,".id"),I=P.def(U,"[",F,"]");P(A.cond(I).then(I,".call(this,a0);").else(I,"=",U,"[",F,"]=",A.link(function($){return Vt(io,A,w,$,1)}),"(",H,");",I,".call(this,a0);"))}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function Ua(A,w,P,H){A.batchId="a1",un(A,w);function U(){return!0}or(A,w,P,H.attributes,U),bo(A,w,P,H.uniforms,U),gt(A,w,w,P)}function m0(A,w,P,H){un(A,w);var U=P.contextDep,F=w.def(),I="a0",$="a1",T=w.def();A.shared.props=T,A.batchId=F;var C=A.scope(),S=A.scope();w(C.entry,"for(",F,"=0;",F,"<",$,";++",F,"){",T,"=",I,"[",F,"];",S,"}",C.exit);function q(st){return st.contextDep&&U||st.propDep}function V(st){return!q(st)}if(P.needsContext&&Tn(A,S,P.context),P.needsFramebuffer&&Ln(A,S,P.framebuffer),tr(A,S,P.state,q),P.profile&&q(P.profile)&&Gt(A,S,P,!1,!0),H)P.useVAO?P.drawVAO?q(P.drawVAO)?S(A.shared.vao,".setVAO(",P.drawVAO.append(A,S),");"):C(A.shared.vao,".setVAO(",P.drawVAO.append(A,C),");"):C(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(C(A.shared.vao,".setVAO(null);"),or(A,C,P,H.attributes,V),or(A,S,P,H.attributes,q)),bo(A,C,P,H.uniforms,V),bo(A,S,P,H.uniforms,q),gt(A,C,S,P);else{var ie=A.global.def("{}"),ce=P.shader.progVar.append(A,S),ae=S.def(ce,".id"),we=S.def(ie,"[",ae,"]");S(A.shared.gl,".useProgram(",ce,".program);","if(!",we,"){",we,"=",ie,"[",ae,"]=",A.link(function(st){return Vt(Ua,A,P,st,2)}),"(",ce,");}",we,".call(this,a0[",F,"],",F,");")}}function z(A,w){var P=A.proc("batch",2);A.batchId="0",un(A,P);var H=!1,U=!0;Object.keys(w.context).forEach(function(ie){H=H||w.context[ie].propDep}),H||(Tn(A,P,w.context),U=!1);var F=w.framebuffer,I=!1;F?(F.propDep?H=I=!0:F.contextDep&&H&&(I=!0),I||Ln(A,P,F)):Ln(A,P,null),w.state.viewport&&w.state.viewport.propDep&&(H=!0);function $(ie){return ie.contextDep&&H||ie.propDep}Un(A,P,w),tr(A,P,w.state,function(ie){return!$(ie)}),(!w.profile||!$(w.profile))&&Gt(A,P,w,!1,"a1"),w.contextDep=H,w.needsContext=U,w.needsFramebuffer=I;var T=w.shader.progVar;if(T.contextDep&&H||T.propDep)m0(A,P,w,null);else{var C=T.append(A,P);if(P(A.shared.gl,".useProgram(",C,".program);"),w.shader.program)m0(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var S=A.global.def("{}"),q=P.def(C,".id"),V=P.def(S,"[",q,"]");P(A.cond(V).then(V,".call(this,a0,a1);").else(V,"=",S,"[",q,"]=",A.link(function(ie){return Vt(m0,A,w,ie,2)}),"(",C,");",V,".call(this,a0,a1);"))}}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function ee(A,w){var P=A.proc("scope",3);A.batchId="a2";var H=A.shared,U=H.current;Tn(A,P,w.context),w.framebuffer&&w.framebuffer.append(A,P),zv(Object.keys(w.state)).forEach(function(I){var $=w.state[I],T=$.append(A,P);hn(T)?T.forEach(function(C,S){P.set(A.next[I],"["+S+"]",C)}):P.set(H.next,"."+I,T)}),Gt(A,P,w,!0,!0),[u0,Ql,p0,Zl,d0].forEach(function(I){var $=w.draw[I];$&&P.set(H.draw,"."+I,""+$.append(A,P))}),Object.keys(w.uniforms).forEach(function(I){var $=w.uniforms[I].append(A,P);Array.isArray($)&&($="["+$.join()+"]"),P.set(H.uniforms,"["+M.id(I)+"]",$)}),Object.keys(w.attributes).forEach(function(I){var $=w.attributes[I].append(A,P),T=A.scopeAttrib(I);Object.keys(new B).forEach(function(C){P.set(T,"."+C,$[C])})}),w.scopeVAO&&P.set(H.vao,".targetVAO",w.scopeVAO.append(A,P));function F(I){var $=w.shader[I];$&&P.set(H.shader,"."+I,$.append(A,P))}F(Lc),F(zc),Object.keys(w.state).length>0&&(P(U,".dirty=true;"),P.exit(U,".dirty=true;")),P("a1(",A.shared.context,",a0,",A.batchId,");")}function Y(A){if(!(typeof A!="object"||hn(A))){for(var w=Object.keys(A),P=0;P<w.length;++P)if(Ie.isDynamic(A[w[P]]))return!0;return!1}}function Ke(A,w,P){var H=w.static[P];if(!H||!Y(H))return;var U=A.global,F=Object.keys(H),I=!1,$=!1,T=!1,C=A.global.def("{}");F.forEach(function(q){var V=H[q];if(Ie.isDynamic(V)){typeof V=="function"&&(V=H[q]=Ie.unbox(V));var ie=Fr(V,null);I=I||ie.thisDep,T=T||ie.propDep,$=$||ie.contextDep}else{switch(U(C,".",q,"="),typeof V){case"number":U(V);break;case"string":U('"',V,'"');break;case"object":Array.isArray(V)&&U("[",V.join(),"]");break;default:U(A.link(V));break}U(";")}});function S(q,V){F.forEach(function(ie){var ce=H[ie];if(Ie.isDynamic(ce)){var ae=q.invoke(V,ce);V(C,".",ie,"=",ae,";")}})}w.dynamic[P]=new Ie.DynamicVariable(Yl,{thisDep:I,contextDep:$,propDep:T,ref:C,append:S}),delete w.static[P]}function jt(A,w,P,H,U){var F=kt();F.stats=F.link(U),Object.keys(w.static).forEach(function($){Ke(F,w,$)}),uw.forEach(function($){Ke(F,A,$)});var I=wn(A,w,P,H,F);return dn(F,I),ee(F,I),z(F,I),t(F.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:We,current:he,procs:function(){var A=kt(),w=A.proc("poll"),P=A.proc("refresh"),H=A.block();w(H),P(H);var U=A.shared,F=U.gl,I=U.next,$=U.current;H($,".dirty=false;"),Ln(A,w),Ln(A,P,null,!0);var T;Me&&(T=A.link(Me)),N.oes_vertex_array_object&&P(A.link(N.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var C=0;C<J.maxAttributes;++C){var S=P.def(U.attributes,"[",C,"]"),q=A.cond(S,".buffer");q.then(F,".enableVertexAttribArray(",C,");",F,".bindBuffer(",ps,",",S,".buffer.buffer);",F,".vertexAttribPointer(",C,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(F,".disableVertexAttribArray(",C,");",F,".vertexAttrib4f(",C,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),P(q),Me&&P(T,".vertexAttribDivisorANGLE(",C,",",S,".divisor);")}return P(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Re).forEach(function(V){var ie=Re[V],ce=H.def(I,".",V),ae=A.block();ae("if(",ce,"){",F,".enable(",ie,")}else{",F,".disable(",ie,")}",$,".",V,"=",ce,";"),P(ae),w("if(",ce,"!==",$,".",V,"){",ae,"}")}),Object.keys(ue).forEach(function(V){var ie=ue[V],ce=he[V],ae,we,st=A.block();if(st(F,".",ie,"("),hn(ce)){var Dt=ce.length;ae=A.global.def(I,".",V),we=A.global.def($,".",V),st(Ht(Dt,function(et){return ae+"["+et+"]"}),");",Ht(Dt,function(et){return we+"["+et+"]="+ae+"["+et+"];"}).join("")),w("if(",Ht(Dt,function(et){return ae+"["+et+"]!=="+we+"["+et+"]"}).join("||"),"){",st,"}")}else ae=H.def(I,".",V),we=H.def($,".",V),st(ae,");",$,".",V,"=",ae,";"),w("if(",ae,"!==",we,"){",st,"}");P(st)}),A.compile()}(),compile:jt}}function Rw(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var Cw=34918,Pw=34919,Rv=35007,Iw=function(x,M){if(!M.ext_disjoint_timer_query)return null;var N=[];function J(){return N.pop()||M.ext_disjoint_timer_query.createQueryEXT()}function se(Me){N.push(Me)}var K=[];function ne(Me){var qe=J();M.ext_disjoint_timer_query.beginQueryEXT(Rv,qe),K.push(qe),ge(K.length-1,K.length,Me)}function me(){M.ext_disjoint_timer_query.endQueryEXT(Rv)}function ye(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var ke=[];function be(){return ke.pop()||new ye}function Le(Me){ke.push(Me)}var Fe=[];function ge(Me,qe,he){var We=be();We.startQueryIndex=Me,We.endQueryIndex=qe,We.sum=0,We.stats=he,Fe.push(We)}var Ne=[],B=[];function re(){var Me,qe,he=K.length;if(he!==0){B.length=Math.max(B.length,he+1),Ne.length=Math.max(Ne.length,he+1),Ne[0]=0,B[0]=0;var We=0;for(Me=0,qe=0;qe<K.length;++qe){var ve=K[qe];M.ext_disjoint_timer_query.getQueryObjectEXT(ve,Pw)?(We+=M.ext_disjoint_timer_query.getQueryObjectEXT(ve,Cw),se(ve)):K[Me++]=ve,Ne[qe+1]=We,B[qe+1]=Me}for(K.length=Me,Me=0,qe=0;qe<Fe.length;++qe){var Re=Fe[qe],ue=Re.startQueryIndex,Ce=Re.endQueryIndex;Re.sum+=Ne[Ce]-Ne[ue];var vt=B[ue],Lt=B[Ce];Lt===vt?(Re.stats.gpuTime+=Re.sum/1e6,Le(Re)):(Re.startQueryIndex=vt,Re.endQueryIndex=Lt,Fe[Me++]=Re)}Fe.length=Me}}return{beginQuery:ne,endQuery:me,pushScopeStats:ge,update:re,getNumPendingQueries:function(){return K.length},clear:function(){N.push.apply(N,K);for(var Me=0;Me<N.length;Me++)M.ext_disjoint_timer_query.deleteQueryEXT(N[Me]);K.length=0,N.length=0},restore:function(){K.length=0,N.length=0}}},Ow=16384,Fw=256,$w=1024,Gw=34962,Cv="webglcontextlost",Pv="webglcontextrestored",Iv=1,Dw=2,qw=3;function Ov(x,M){for(var N=0;N<x.length;++N)if(x[N]===M)return N;return-1}function Hw(x){var M=bt(x);if(!M)return null;var N=M.gl,J=N.getContextAttributes(),se=N.isContextLost(),K=At(N,M);if(!K)return null;var ne=rt(),me=Rw(),ye=K.extensions,ke=Iw(N,ye),be=ze(),Le=N.drawingBufferWidth,Fe=N.drawingBufferHeight,ge={tick:0,time:0,viewportWidth:Le,viewportHeight:Fe,framebufferWidth:Le,framebufferHeight:Fe,drawingBufferWidth:Le,drawingBufferHeight:Fe,pixelRatio:M.pixelRatio},Ne={},B={elements:null,primitive:4,count:-1,offset:0,instances:-1},re=Fh(N,ye),Me=Bb(N,me,M,he),qe=tw(N,ye,re,me,Me);function he(gt){return qe.destroyBuffer(gt)}var We=t5(N,ye,Me,me),ve=aw(N,ne,me,M),Re=R5(N,ye,re,function(){vt.procs.poll()},ge,me,M),ue=C5(N,ye,re,me,M),Ce=J5(N,ye,re,Re,ue,me),vt=Nw(N,ne,ye,re,Me,We,Re,Ce,Ne,qe,ve,B,ge,ke,M),Lt=cw(N,Ce,vt.procs.poll,ge,J,ye,re),$e=vt.next,Ee=N.canvas,fe=[],kt=[],$t=[],Je=[M.onDestroy],Ut=null;function Nt(){if(fe.length===0){ke&&ke.update(),Ut=null;return}Ut=Ye.next(Nt),tr();for(var gt=fe.length-1;gt>=0;--gt){var Vt=fe[gt];Vt&&Vt(ge,null,0)}N.flush(),ke&&ke.update()}function qt(){!Ut&&fe.length>0&&(Ut=Ye.next(Nt))}function uo(){Ut&&(Ye.cancel(Nt),Ut=null)}function bn(gt){gt.preventDefault(),se=!0,uo(),kt.forEach(function(Vt){Vt()})}function In(gt){N.getError(),se=!1,K.restore(),ve.restore(),Me.restore(),Re.restore(),ue.restore(),Ce.restore(),qe.restore(),ke&&ke.restore(),vt.procs.refresh(),qt(),$t.forEach(function(Vt){Vt()})}Ee&&(Ee.addEventListener(Cv,bn,!1),Ee.addEventListener(Pv,In,!1));function Qt(){fe.length=0,uo(),Ee&&(Ee.removeEventListener(Cv,bn),Ee.removeEventListener(Pv,In)),ve.clear(),Ce.clear(),ue.clear(),Re.clear(),We.clear(),Me.clear(),qe.clear(),ke&&ke.clear(),Je.forEach(function(gt){gt()})}function An(gt){_(!!gt,"invalid args to regl({...})"),_.type(gt,"object","invalid args to regl({...})");function Vt(U){var F=t({},U);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function I($){if($ in F){var T=F[$];delete F[$],Object.keys(T).forEach(function(C){F[$+"."+C]=T[C]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in U&&(F.vao=U.vao),F}function io(U,F){var I={},$={};return Object.keys(U).forEach(function(T){var C=U[T];if(Ie.isDynamic(C)){$[T]=Ie.unbox(C,T);return}else if(F&&Array.isArray(C)){for(var S=0;S<C.length;++S)if(Ie.isDynamic(C[S])){$[T]=Ie.unbox(C,T);return}}I[T]=C}),{dynamic:$,static:I}}var dn=io(gt.context||{},!0),Ua=io(gt.uniforms||{},!0),m0=io(gt.attributes||{},!1),z=io(Vt(gt),!1),ee={gpuTime:0,cpuTime:0,count:0},Y=vt.compile(z,m0,Ua,dn,ee),Ke=Y.draw,jt=Y.batch,A=Y.scope,w=[];function P(U){for(;w.length<U;)w.push(null);return w}function H(U,F){var I;if(se&&_.raise("context lost"),typeof U=="function")return A.call(this,null,U,0);if(typeof F=="function")if(typeof U=="number")for(I=0;I<U;++I)A.call(this,null,F,I);else if(Array.isArray(U))for(I=0;I<U.length;++I)A.call(this,U[I],F,I);else return A.call(this,U,F,0);else if(typeof U=="number"){if(U>0)return jt.call(this,P(U|0),U|0)}else if(Array.isArray(U)){if(U.length)return jt.call(this,U,U.length)}else return Ke.call(this,U)}return t(H,{stats:ee,destroy:function(){Y.destroy()}})}var jo=Ce.setFBO=An({framebuffer:Ie.define.call(null,Iv,"framebuffer")});function wn(gt,Vt){var io=0;vt.procs.poll();var dn=Vt.color;dn&&(N.clearColor(+dn[0]||0,+dn[1]||0,+dn[2]||0,+dn[3]||0),io|=Ow),"depth"in Vt&&(N.clearDepth(+Vt.depth),io|=Fw),"stencil"in Vt&&(N.clearStencil(Vt.stencil|0),io|=$w),_(!!io,"called regl.clear with no buffer specified"),N.clear(io)}function Tn(gt){if(_(typeof gt=="object"&&gt,"regl.clear() takes an object as input"),"framebuffer"in gt)if(gt.framebuffer&&gt.framebuffer_reglType==="framebufferCube")for(var Vt=0;Vt<6;++Vt)jo(t({framebuffer:gt.framebuffer.faces[Vt]},gt),wn);else jo(gt,wn);else wn(null,gt)}function Ln(gt){_.type(gt,"function","regl.frame() callback must be a function"),fe.push(gt);function Vt(){var io=Ov(fe,gt);_(io>=0,"cannot cancel a frame twice");function dn(){var Ua=Ov(fe,dn);fe[Ua]=fe[fe.length-1],fe.length-=1,fe.length<=0&&uo()}fe[io]=dn}return qt(),{cancel:Vt}}function Un(){var gt=$e.viewport,Vt=$e.scissor_box;gt[0]=gt[1]=Vt[0]=Vt[1]=0,ge.viewportWidth=ge.framebufferWidth=ge.drawingBufferWidth=gt[2]=Vt[2]=N.drawingBufferWidth,ge.viewportHeight=ge.framebufferHeight=ge.drawingBufferHeight=gt[3]=Vt[3]=N.drawingBufferHeight}function tr(){ge.tick+=1,ge.time=Gt(),Un(),vt.procs.poll()}function un(){Re.refresh(),Un(),vt.procs.refresh(),ke&&ke.update()}function Gt(){return(ze()-be)/1e3}un();function or(gt,Vt){_.type(Vt,"function","listener callback must be a function");var io;switch(gt){case"frame":return Ln(Vt);case"lost":io=kt;break;case"restore":io=$t;break;case"destroy":io=Je;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return io.push(Vt),{cancel:function(){for(var dn=0;dn<io.length;++dn)if(io[dn]===Vt){io[dn]=io[io.length-1],io.pop();return}}}}var bo=t(An,{clear:Tn,prop:Ie.define.bind(null,Iv),context:Ie.define.bind(null,Dw),this:Ie.define.bind(null,qw),draw:An({}),buffer:function(gt){return Me.create(gt,Gw,!1,!1)},elements:function(gt){return We.create(gt,!1)},texture:Re.create2D,cube:Re.createCube,renderbuffer:ue.create,framebuffer:Ce.create,framebufferCube:Ce.createCube,vao:qe.createVAO,attributes:J,frame:Ln,on:or,limits:re,hasExtension:function(gt){return re.extensions.indexOf(gt.toLowerCase())>=0},read:Lt,destroy:Qt,_gl:N,_refresh:un,poll:function(){tr(),ke&&ke.update()},now:Gt,stats:me});return M.onDone(null,bo),bo}return Hw})});var x0=de((aS,sm)=>{"use strict";var ai=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],ii=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ja=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],mf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Uc=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],ju=e=>Math.hypot(e[0],e[1],e[2]),da=e=>{let t=ju(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function _s(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=[0,0,0];for(let p=0;p<3;p++)l[p]=.5*(2*s[p]+(-i[p]+c[p])*a+(2*i[p]-5*s[p]+4*c[p]-f[p])*a*a+(-i[p]+3*s[p]-3*c[p]+f[p])*a*a*a);return l}function s4(e,t){return _s(e.map(o=>[o,0,0]),t)[0]}function c4(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,u)=>{let v=new Array(9);for(let d=0;d<3;d++)for(let m=0;m<3;m++)v[d*3+m]=h[d*3]*u[m]+h[d*3+1]*u[3+m]+h[d*3+2]*u[6+m];return v},f=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,u,v)=>{let d=f([h,u,v]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let u=Math.cos(h),v=Math.sin(h);i.r=c(i.r,[u,0,v,0,1,0,-v,0,u])},r.vert=(h,u,v)=>{let d=v||r.curMat,m=f(h),g=da(f(u));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],p=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,u,v)=>{let d=l(h),m=Uc(ai(l(u),d),ai(l(v),d)),g=ii(ii(p(h),p(u)),p(v));mf(m,g)<0?o.push(h,v,u):o.push(h,u,v)},r.box=(h,u,v,d,m,g,y)=>{let b=[[[h,u,v],[d,u,v],[h,m,v],[d,m,v],[0,0,-1]],[[d,u,g],[h,u,g],[d,m,g],[h,m,g],[0,0,1]],[[h,u,g],[h,u,v],[h,m,g],[h,m,v],[-1,0,0]],[[d,u,v],[d,u,g],[d,m,v],[d,m,g],[1,0,0]],[[h,m,v],[d,m,v],[h,m,g],[d,m,g],[0,1,0]],[[h,u,g],[d,u,g],[h,u,v],[d,u,v],[0,-1,0]]];for(let E of b){let k=r.vert(E[0],E[4],y),L=r.vert(E[1],E[4],y),R=r.vert(E[2],E[4],y),X=r.vert(E[3],E[4],y);r.tri(k,L,R),r.tri(L,X,R)}},r.surface=(h,u,v,d)=>{d=d||{};let m=.001,g=k=>Math.min(1,Math.max(0,k)),y=[],b=[];for(let k=0;k<=u;k++){let L=[],R=[];for(let X=0;X<=v;X++){let O=k/u,te=X/v,G=h(O,te),oe=Math.min(1-m,Math.max(m,O)),D=d.wrapV?te:Math.min(1-m,Math.max(m,te)),W=ai(h(g(oe+m),D),h(g(oe-m),D)),Ae=d.wrapV?D+m:g(D+m),Be=d.wrapV?D-m:g(D-m),Te=ai(h(oe,Ae),h(oe,Be)),pe=Uc(W,Te);ju(pe)<1e-14&&(pe=d.inside?ai(G,d.inside(O,te)):[0,1,0]),pe=da(pe),d.inside&&mf(pe,ai(G,d.inside(O,te)))<0&&(pe=ja(pe,-1));let _e=d.mat?d.mat(O,te,G):null;L.push(r.vert(G,pe,_e)),d.double&&R.push(r.vert(G,ja(pe,-1),_e))}y.push(L),b.push(R)}let E=k=>{for(let L=0;L<u;L++)for(let R=0;R<v;R++){let X=k[L][R],O=k[L+1][R],te=k[L][R+1],G=k[L+1][R+1];r.tri(X,O,te),r.tri(O,G,te)}};E(y),d.double&&E(b)},r.ellipsoid=(h,u,v,d,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let E=y*Math.PI,k=b*Math.PI*2,L=g?g(y,b):1;return[h[0]+u[0]*L*Math.sin(E)*Math.cos(k),h[1]+u[1]*L*Math.cos(E),h[2]+u[2]*L*Math.sin(E)*Math.sin(k)]},v||10,d||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,u,v,d,m)=>{m=m||{};let g=40,y=[],b=null;for(let L=0;L<=g;L++){let R=L/g,X=_s(h,Math.max(0,R-.01)),O=_s(h,Math.min(1,R+.01)),te=da(ai(O,X)),G;if(b)G=da(ai(b,ja(te,mf(b,te))));else{let oe=Math.abs(te[1])<.9?[0,1,0]:[1,0,0];G=da(Uc(te,oe))}y.push({N:G,B:da(Uc(te,G))}),b=G}let E=L=>{let R=Math.min(Math.max(L,0),1)*g,X=Math.min(g-1,Math.floor(R)),O=R-X,te=y[X],G=y[X+1];return{N:da(ii(ja(te.N,1-O),ja(G.N,O))),B:da(ii(ja(te.B,1-O),ja(G.B,O)))}},k=m.squash||[1,1];r.surface((L,R)=>{let X=_s(h,L),O=E(L),te=u(L),G=R*Math.PI*2;return ii(X,ii(ja(O.N,Math.cos(G)*te*k[0]),ja(O.B,Math.sin(G)*te*k[1])))},v||12,d||8,{wrapV:!0,inside:L=>_s(h,L),mat:m.mat})},r.lathe=(h,u,v,d,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],E=h[y+1][1]-h[y][1];g.push(da([E,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],E=h[y+1],k=y===0||b[2]===1,L=y===h.length-2||E[2]===1,R=k?g[y]:da(ii(g[y-1],g[y])),X=L?g[y]:da(ii(g[y],g[y+1])),O=[],te=[];for(let G=0;G<=d;G++){let oe=G/d*Math.PI*2,D=Math.cos(oe),W=Math.sin(oe),Ae=m.mat?m.mat(oe,b[1]):null,Be=m.mat?m.mat(oe,E[1]):null;O.push(r.vert([u+b[0]*D,b[1],v+b[0]*W],[R[0]*D,R[1],R[0]*W],Ae)),te.push(r.vert([u+E[0]*D,E[1],v+E[0]*W],[X[0]*D,X[1],X[0]*W],Be))}for(let G=0;G<d;G++)r.tri(O[G],O[G+1],te[G]),r.tri(O[G+1],te[G+1],te[G])}},r}sm.exports={createBuilder:c4,catmull:_s,curve1:s4,sub:ai,add:ii,mul:ja,dot:mf,cross:Uc,norm:da,len:ju}});var hm=de((iS,fm)=>{"use strict";var{norm:gf,add:xf,mul:Ti,sub:l4,cross:cm}=x0(),lm=Math.PI*2,f4=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function h4(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function u4(e,t,o,n,r,a){let i=(h,u)=>[7,h*a,u];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,f=20,l=6,p=a*.075;return e.surface((h,u)=>{let v=s+h*c,d=a*(.96-.12*h),m=u*lm,g=u*f%1,y=d-p*4*g*(1-g);return[t+y*Math.cos(m),v,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,u)=>[7,u*lm*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function d4(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function p4(e,t,o,n,r){e.save(),e.translate(t,0,o),d4(e,n,r),e.restore()}function v4(e,t,o,n,r,a){let i=h4(n),s=a?gf([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let p=l>=c-2,h=l*2.399963+i()*.5,u=[Math.cos(h),0,Math.sin(h)],v=[-Math.sin(h),0,Math.cos(h)],d=l*.618%1,m=p?.06+i()*.06:.12+.62*d,g=1;if(s){let pe=u[0]*s[0]+u[2]*s[2];g=.25+.75*f4(-.7,.5,pe),m*=g}let y=p?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,b=p?1+i()*.2:.95+i()*.28,E=p?.055:.215+i()*.05,k=.04+i()*.05,L=[u[0]*k,f,u[2]*k],R=[L[0]+u[0]*Math.sin(m)*y*.92,L[1]+Math.cos(m)*y,L[2]+u[2]*Math.sin(m)*y*.92],X=[L[0]+u[0]*Math.sin(m*.5)*y*.45,L[1]+y*.5,L[2]+u[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([L,X,R],pe=>.02-.008*pe,8,7);let O=24,te=m*.9+.05,G=m+(p?.12:(.95+.45*d)*(.35+.65*g)),oe=[R],D=[],W=R;for(let pe=0;pe<O;pe++){let _e=pe/O,ht=te+(G-te)*_e*_e,Ot=[u[0]*Math.sin(ht),Math.cos(ht),u[2]*Math.sin(ht)];D.push(Ot),W=xf(W,Ti(Ot,b/O)),oe.push(W)}D.push(D[D.length-1]);let Ae=pe=>{let _e=pe*O,ht=Math.min(O-1,Math.floor(_e)),Ot=_e-ht;return xf(Ti(oe[ht],1-Ot),Ti(oe[ht+1],Ot))},Be=pe=>{let _e=pe*O,ht=Math.min(O,Math.floor(_e)),Ot=Math.min(O,ht+1),He=_e-ht;return gf(xf(Ti(D[ht],1-He),Ti(D[Ot],He)))},Te=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((pe,_e)=>{let ht=_e*2-1,Ot=Ae(pe),He=Be(pe),at=Te*pe,_t=xf(Ti(v,Math.cos(at)),Ti(cm(He,v),Math.sin(at)));_t=gf(l4(_t,Ti(He,_t[0]*He[0]+_t[1]*He[1]+_t[2]*He[2])));let Jt=gf(cm(_t,He)),ro=E*Math.pow(Math.sin(Math.PI*Math.pow(pe,.72)),.85),en=.3*ro*Math.abs(ht)+.012*Math.sin(pe*40+ht*2)*Math.abs(ht)*(p?0:1),Xe=-.1*ro*ht*ht*ht*ht,ut=en+Xe;return[Ot[0]+_t[0]*ht*ro+Jt[0]*ut,Ot[1]+_t[1]*ht*ro+Jt[1]*ut,Ot[2]+_t[2]*ht*ro+Jt[2]*ut]},14,8,{double:!0,mat:(pe,_e)=>[2,_e*2-1,pe]})}e.restore()}fm.exports={addFlutedColumn:u4,addStatue:p4,addPlant:v4}});var Li=de((sS,vm)=>{"use strict";var xe={xc:7,r:2.5,spring:4.7};xe.x0=xe.xc-xe.r;xe.x1=xe.xc+xe.r;xe.top=xe.spring+xe.r;var Sr=.06,Qo=.1,um=.08,yf=xe.r,bf=[xe.x0+yf/3,xe.x0+2*yf/3,xe.xc+yf/3,xe.xc+2*yf/3],Ms=.28,Wu=[.95,1.65,2.35,3.05,3.75],dm=[1.05,1.8],jc=[8,0,0],Vr=[0,0,0];function pa(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function ks(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function wf(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let f=(l,p,h)=>[xe.xc+p*Math.cos(l),xe.spring+p*Math.sin(l),h];for(let l=0;l<i;l++){let p=s+(c-s)*l/i,h=s+(c-s)*(l+1)/i,u=(p+h)/2;ks(e,f(p,t,r),f(h,t,r),f(h,o,r),f(p,o,r),[0,0,1],a),ks(e,f(p,o,n),f(h,o,n),f(h,t,n),f(p,t,n),[0,0,-1],a),ks(e,f(p,t,n),f(h,t,n),f(h,t,r),f(p,t,r),[-Math.cos(u),-Math.sin(u),0],a),ks(e,f(h,o,n),f(p,o,n),f(p,o,r),f(h,o,r),[Math.cos(u),Math.sin(u),0],a)}}function m4(e){let n=a=>[xe.xc+xe.r*Math.cos(a),xe.spring+xe.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?xe.r/Math.abs(i):1/0,f=s>1e-6?(8-xe.spring)/s:1/0,l=Math.min(c,f);return[Math.min(xe.x1,Math.max(xe.x0,xe.xc+i*l)),Math.min(8,xe.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),l=r(i),p=r(s);for(let[u,v]of[[.35,1],[-.35,-1]])ks(e,[c[0],c[1],u],[f[0],f[1],u],[p[0],p[1],u],[l[0],l[1],u],[0,0,v],Vr);let h=(i+s)/2;ks(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Vr)}}function g4(e){pa(e,-.35,0,-.35,xe.x0,8,.35,Vr),pa(e,xe.x1,0,-.35,14+.35,8,.35,Vr),m4(e),pm(e)}function pm(e){pa(e,xe.x0-.32,.3,.35,xe.x0,xe.spring,.35+.07,Vr),pa(e,xe.x1,.3,.35,xe.x1+.32,xe.spring,.35+.07,Vr),pa(e,xe.x0-.32-.05,0,.35,xe.x0,.3,.35+.07+.04,Vr),pa(e,xe.x1,0,.35,xe.x1+.32+.05,.3,.35+.07+.04,Vr),pa(e,xe.x0-.32-.06,xe.spring-.12,.35,xe.x0,xe.spring,.35+.07+.05,Vr),pa(e,xe.x1,xe.spring-.12,.35,xe.x1+.32+.06,xe.spring,.35+.07+.05,Vr),wf(e,xe.r,xe.r+.32,.35,.35+.07,Vr),wf(e,xe.r+.32,xe.r+.32+.06,.35,.35+.07+.03,Vr),pa(e,xe.xc-.22,xe.top-.08,.35,xe.xc+.22,xe.top+.32+.12,.35+.07+.06,Vr)}function x4(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-um/2,a=um/2,i=(h,u,v,d,m=0)=>pa(e,h-m,u,r,v+m,d,a,jc),s=h=>xe.spring+Math.sqrt(Math.max(0,xe.r*xe.r-(h-xe.xc)*(h-xe.xc))),c=t==="right"?xe.xc:xe.x0,f=t==="left"?xe.xc:xe.x1,l=h=>o||t==="left"&&h<xe.xc||t==="right"&&h>xe.xc,p=o?null:xe.spring-.06;if(n){i(xe.x0,0,xe.x0+Qo,xe.spring),i(xe.x1-Qo,0,xe.x1,xe.spring),wf(e,xe.r-Qo,xe.r,r,a,jc,64),i(xe.x0,0,xe.x1,.05),i(xe.x0,xe.spring-.06,xe.x1,xe.spring+.06);for(let h of dm)wf(e,h-Sr/2,h+Sr/2,r,a,jc,48)}if(o){i(xe.x0,0,xe.x1,Ms),i(xe.xc-Qo/2,0,xe.xc+Qo/2,xe.top-Qo*.5);for(let h of bf)i(h-Sr/2,Ms,h+Sr/2,s(h)-Qo*.5);for(let h of Wu)i(xe.x0,h-Sr/2,xe.x1,h+Sr/2)}else if(t==="fixed"){i(xe.xc-Qo/2,xe.spring+.06,xe.xc+Qo/2,xe.top-Qo*.5);for(let h of bf)i(h-Sr/2,xe.spring+.06,h+Sr/2,s(h)-Qo*.5)}else{let h=t==="left"?xe.x0+Qo:xe.x1-Qo;i(Math.min(h,h+(t==="left"?Qo*.8:-Qo*.8)),.05,Math.max(h,h+(t==="left"?Qo*.8:-Qo*.8)),p),i(c,.05,f,Ms),i(c,p-.07,f,p);let u=t==="left"?xe.xc-Qo/2:xe.xc;i(u,.05,u+Qo/2,p);for(let v of bf)l(v)&&i(v-Sr/2,Ms,v+Sr/2,p-.07);for(let v of Wu)i(c,v-Sr/2,f,v+Sr/2)}for(let h of[-1,1]){let u=xe.xc+h*.16;l(u)&&(pa(e,u-.02,1.05,a,u+.02,1.13,a+.06,jc),pa(e,u-(h>0?0:.14),1.07,a+.05,u+(h>0?.14:0),1.11,a+.08,jc))}}function y4(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=xe;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:r;if(t.push([f,0,o],[l,0,o],[l,s,o],[f,0,o],[l,s,o],[f,s,o]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,p=Math.PI*(f+1)/c;t.push([a,s,o],[a+i*Math.cos(l),s+i*Math.sin(l),o],[a+i*Math.cos(p),s+i*Math.sin(p),o])}return t}var Ao=e=>e.toFixed(4);function b4(){let e=bf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Ao(n)}), ${Ao(Sr/2)}, soft));`).join(`
		`),t=Wu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Ao(n)}), ${Ao(Sr/2)}, soft));`).join(`
		`),o=dm.map(n=>`ab = max(ab, barCover(abs(rr - ${Ao(n)}), ${Ao(Sr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Ao(xe.x0)} - soft, ${Ao(xe.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Ao(xe.x1)} - soft, ${Ao(xe.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Ao(xe.xc)}, ${Ao(xe.spring)}));
		float arch = q.y < ${Ao(xe.spring)} ? 1.0 : 1.0 - smoothstep(${Ao(xe.r)} - soft, ${Ao(xe.r)} + soft, rr);
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
		float rr = length(q - vec2(${Ao(xe.xc)}, ${Ao(xe.spring)}));
		float vb = barCover(abs(q.x - ${Ao(xe.xc)}), ${Ao(Qo/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Ao(xe.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Ao(Ms)} - soft, ${Ao(Ms)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Ao(xe.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Ao(xe.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Ao(xe.x0+Qo/2)}), ${Ao(Qo/2)}, soft),
			barCover(abs(q.x - ${Ao(xe.x1-Qo/2)}), ${Ao(Qo/2)}, soft));
		frame = q.y < ${Ao(xe.spring)} ? frame : barCover(abs(rr - ${Ao(xe.r-Qo/2)}), ${Ao(Qo/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}vm.exports={addEntranceWall:g4,addSurround:pm,addFrames:x4,glassPanes:y4,doorLightGLSL:b4,DOOR:xe,WALL:.35}});var Ss=de((cS,wm)=>{"use strict";var b0=1.1583333333333334,w0=(13.05-8*.16)/9,Xu=b0+.16,Yu=w0+.16,ci=14/2-7.75/2,Xr=15,Wc=ci+7.75,si=Xr+13.05,Yr=.3,li={y:8+.18,inset:.15},y0={y:8+.36,inset:Yr},Ku=8+.2,Vc=8+.62,Qu=8+.9,Zu=.016,ym=.28,bm=.66,w4=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),_4=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),M4=[9,0,0],nr=[10,0,0];function Es(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Ar(e,t,o,n,r,a,i){Es(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function Vu(e,t,o,n,r,a,i,s){Es(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),Es(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),Es(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),Es(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function mm(e,t,o,n,r){Ar(e,t[0],t[1],t[2],o[1],n,r),Ar(e,t[0],o[3],t[2],t[3],n,r),Ar(e,t[0],o[1],o[0],o[3],n,r),Ar(e,o[2],o[1],t[2],o[3],n,r)}var gm=e=>ci+e*Xu,xm=e=>Xr+e*Yu;function k4(e,t,o=48){let n=[ci-Yr,Xr-Yr,Wc+Yr,si+Yr],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,li.inset),i=r(n,y0.inset);Ar(e,0,0,14,n[1],8,t),Ar(e,0,n[3],14,o,8,t),Ar(e,0,n[1],n[0],n[3],8,t),Ar(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],nr),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,nr),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],nr),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],nr),Vu(e,...n.slice(0,2),...n.slice(2),8,li.y,nr),mm(e,n,a,li.y,nr),Vu(e,...a.slice(0,2),...a.slice(2),li.y,y0.y,nr),mm(e,a,i,y0.y,nr);for(let f=1;f<6;f++){let l=gm(f)-.16;e.box(l,Ku,Xr,l+.16,y0.y,si,nr)}for(let f=1;f<9;f++){let l=xm(f)-.16;e.box(ci,Ku,l,Wc,y0.y,l+.16,nr)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let p=gm(l),h=xm(f);Vu(e,p,h,p+b0,h+w0,y0.y,Qu,nr),Ar(e,p,h,p+b0,h+w0,Qu,M4),E4(e,p+b0/2,h+w0/2,b0/2,w0/2)}}function E4(e,t,o,n,r){let a=Vc,i=Zu;Ar(e,t-n,o-i,t+n,o+i,a,nr),Ar(e,t-i,o-r,t+i,o+r,a,nr);for(let s of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=s*r/c,p=-l*i,h=f*i;Es(e,[t-f*c+p,a,o-l*c+h],[t+f*c+p,a,o+l*c+h],[t+f*c-p,a,o+l*c-h],[t-f*c-p,a,o-l*c-h],[0,-1,0],nr)}for(let s of[ym,bm]){let c=s*n,f=s*r;Ar(e,t-c-i,o-f-i,t+c+i,o-f+i,a,nr),Ar(e,t-c-i,o+f-i,t+c+i,o+f+i,a,nr),Ar(e,t-c-i,o-f+i,t-c+i,o+f-i,a,nr),Ar(e,t+c-i,o-f+i,t+c+i,o+f-i,a,nr)}}var Pt=e=>e.toFixed(4);function S4(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${w4.map(Pt).join(", ")});
	const vec3 SKY_MOON = vec3(${_4.map(Pt).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Pt(ci)}, ${Pt(Xr)});
		vec2 pitch = vec2(${Pt(Xu)}, ${Pt(Yu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Pt(5)} || cell.y > ${Pt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Pt(b0)}, ${Pt(w0)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Pt(Zu)} - soft, ${Pt(Zu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Pt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Pt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Pt(li.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Pt(Ku)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Pt(y0.y)} - p.y) / L.y)).xz;
		float tG = (${Pt(Vc)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Pt(Qu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Pt(ci-Yr)}, ${Pt(Xr-Yr)}, ${Pt(Wc+Yr)}, ${Pt(si+Yr)}), soft)
		           * rectOpen(q1, vec4(${Pt(ci-Yr+li.inset)}, ${Pt(Xr-Yr+li.inset)}, ${Pt(Wc+Yr-li.inset)}, ${Pt(si+Yr-li.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Pt(ci)}, ${Pt(Xr)});
		vec2 pitch = vec2(${Pt(Xu)}, ${Pt(Yu)});
		vec2 paneHalf = vec2(${Pt(b0/2)}, ${Pt(w0/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Pt(ym)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Pt(bm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Pt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Pt(Vc)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Pt(ci)}, ${Pt(Xr)}, ${Pt(Wc)}, ${Pt(si)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Pt(14/2)}, ${Pt((Xr+si)/2)}) - L.xz * (${Pt(Vc)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Pt(7.75/2)}, ${Pt(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Pt(Xr-3)}, ${Pt(Xr+2)}, p.z)
		        * (1.0 - smoothstep(${Pt(si-2)}, ${Pt(si+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Pt(7.75/2)}, ${Pt(14/2)}, abs(p.x - ${Pt(14/2)}));
		return z * x;
	}`}wm.exports={addSkylight:k4,skylightGLSL:S4,Z_START:Xr,Z_END:si,GLASS_Y:Vc,HEIGHT:8}});var hr=de((lS,Sm)=>{"use strict";var Ts=Li(),o1=8,Zo=.35,De={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:o1},_m=(De.z1-De.z0)/2,Ju=De.crown-De.spring,t1=(Ju*Ju+_m*_m)/(2*Ju),n1=De.crown-t1;function As(e){let t=e-De.zc;return n1+Math.sqrt(Math.max(0,t1*t1-t*t))}var wt={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},za=Array.from({length:wt.count},(e,t)=>wt.first+t*wt.pitch),km=za.slice(1).map(e=>e-wt.pitch/2),A4=[za[0],za[2],za[4]],Mf=[za[1],za[3]],$r={r:1.3,sill:.62,spring:3.3},Po=[0,0,0],Xc=[11,0,0],zi=[10,0,0],Yc=[8,0,0];function jn(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Gr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function Kc(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,f=new Set([o,n]);for(let d of s){f.add(d.u0),f.add(d.u1);let m=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let g=1;g<m;g++)f.add(d.u0+(d.u1-d.u0)*g/m)}for(let d of t.cuts||[])f.add(d);let l=t.topStep||.5;for(let d=o;d<n;d+=l)f.add(d);let p=[...f].filter(d=>d>=o-1e-9&&d<=n+1e-9).sort((d,m)=>d-m),h=(d,m)=>d.bot?d.bot(m):d.bottom,u=(d,m)=>{let g=i(d),y=m.map(k=>[Math.max(0,h(k,d)),Math.min(k.head(d),g)]).filter(k=>k[1]>k[0]).sort((k,L)=>k[0]-L[0]),b=[],E=0;for(let k of y)k[0]>E+1e-6&&b.push([E,k[0]]),E=Math.max(E,k[1]);return g>E+1e-6&&b.push([E,g]),b},v=(d,m,g)=>[d,m,g];for(let d=0;d<p.length-1;d++){let m=p[d],g=p[d+1],y=(m+g)/2,b=s.filter(O=>y>O.u0&&y<O.u1),E=b.length?Math.max(m,Math.max(...b.map(O=>O.u0))+1e-7):m,k=b.length?Math.min(g,Math.min(...b.map(O=>O.u1))-1e-7):g,L=u(E,b),R=u(k,b),X=Math.min(L.length,R.length);for(let O=0;O<X;O++){let[te,G]=L[O],[oe,D]=R[O];G-te<1e-6&&D-oe<1e-6||(jn(e,v(m,te,a),v(g,oe,a),v(g,D,a),v(m,G,a),[0,0,1],c),t.frontOnly||jn(e,v(g,oe,r),v(m,te,r),v(m,G,r),v(g,D,r),[0,0,-1],c))}}t.noEnds||(jn(e,v(o,0,r),v(o,0,a),v(o,i(o),a),v(o,i(o),r),[-1,0,0],c),jn(e,v(n,0,a),v(n,0,r),v(n,i(n),r),v(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let m=d.mat||t.revealMat||c,g=Math.max(0,h(d,d.u0+1e-7)),y=Math.max(0,h(d,d.u1-1e-7)),b=Math.min(d.head(d.u0+1e-7),i(d.u0)),E=Math.min(d.head(d.u1-1e-7),i(d.u1));b>g+1e-6&&jn(e,v(d.u0,g,a),v(d.u0,g,r),v(d.u0,b,r),v(d.u0,b,a),[1,0,0],m),E>y+1e-6&&jn(e,v(d.u1,y,r),v(d.u1,y,a),v(d.u1,E,a),v(d.u1,E,r),[-1,0,0],m);let k=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let L=0;L<k;L++){let R=d.u0+(d.u1-d.u0)*L/k,X=d.u0+(d.u1-d.u0)*(L+1)/k,O=Math.max(R,d.u0+1e-7),te=Math.min(X,d.u1-1e-7),G=Math.min(d.head(O),i(R)),oe=Math.min(d.head(te),i(X));if(!(G>=i(R)-1e-6&&oe>=i(X)-1e-6)){let Ae=X-R,Be=oe-G,Te=Math.hypot(Ae,Be)||1;jn(e,v(R,G,r),v(X,oe,r),v(X,oe,a),v(R,G,a),[Be/Te,-Ae/Te,0],m)}let D=h(d,O),W=h(d,te);if(D>1e-6||W>1e-6){let Ae=X-R,Be=W-D,Te=Math.hypot(Ae,Be)||1;jn(e,v(X,W,r),v(R,D,r),v(R,D,a),v(X,W,a),[-Be/Te,Ae/Te,0],m)}}}}var e1=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function T4(e,t){let o=$r.r,n=$r.sill,r=$r.spring,a=De.z0,i=24,s=(u,v,d)=>[t+Math.cos(u)*v,d,a-Math.sin(u)*v];for(let u=0;u<i;u++){let v=Math.PI*u/i,d=Math.PI*(u+1)/i,m=[-Math.cos(v),0,Math.sin(v)],g=[-Math.cos(d),0,Math.sin(d)],y=[e.vert(s(v,o,n),m,Po),e.vert(s(d,o,n),g,Po),e.vert(s(d,o,r),g,Po),e.vert(s(v,o,r),m,Po)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,f=(u,v)=>[t+Math.cos(u)*Math.cos(v)*o,r+Math.sin(v)*o,a-Math.sin(u)*Math.cos(v)*o],l=(u,v)=>[-Math.cos(u)*Math.cos(v),-Math.sin(v),Math.sin(u)*Math.cos(v)];for(let u=0;u<i;u++)for(let v=0;v<c;v++){let d=Math.PI*u/i,m=Math.PI*(u+1)/i,g=Math.PI/2*v/c,y=Math.PI/2*(v+1)/c,b=[e.vert(f(d,g),l(d,g),zi),e.vert(f(m,g),l(m,g),zi),e.vert(f(m,y),l(m,y),zi),e.vert(f(d,y),l(d,y),zi)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let u=1;u<8;u++){let v=Math.PI*u/8,d=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;d.push(f(v,g).map((y,b)=>y-l(v,g)[b]*.02))}e.tube(d,m=>.035*(1-m*.6),12,6,{mat:()=>zi})}let p=e.vert([t,n,a],[0,1,0],Po);for(let u=0;u<i;u++){let v=Math.PI*u/i,d=Math.PI*(u+1)/i;e.tri(p,e.vert(s(v,o,n),[0,1,0],Po),e.vert(s(d,o,n),[0,1,0],Po))}Gr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,Po),Gr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,Po);let h=.16;for(let u=0;u<i;u++){let v=Math.PI*u/i,d=Math.PI*(u+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];jn(e,m(v,o,a+.05),m(d,o,a+.05),m(d,o+h,a+.05),m(v,o+h,a+.05),[0,0,1],Po),jn(e,m(v,o+h,a),m(d,o+h,a),m(d,o+h,a+.05),m(v,o+h,a+.05),[Math.cos((v+d)/2),Math.sin((v+d)/2),0],Po),jn(e,m(v,o,a),m(d,o,a),m(d,o,a+.05),m(v,o,a+.05),[-Math.cos((v+d)/2),-Math.sin((v+d)/2),0],Po)}for(let u of[-1,1]){let v=t+u*o,d=t+u*(o+h);Gr(e,v,n,a,d,r,a+.05,Po),Gr(e,v-u*.02,r-.12,a,d+u*.06,r,a+.09,Po)}Gr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,Po),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>Po})}var L4=$r.sill+.4,z4=De.z0-.62;function N4(e){jn(e,[14,0,De.z0-Zo],[De.x1+Zo,0,De.z0-Zo],[De.x1+Zo,0,De.z1+Zo],[14,0,De.z1+Zo],[0,1,0],Po),e.curMat=Xc,Kc(e,{u0:14+Zo,u1:De.x1+2*Zo,w0:De.z0-2*Zo,w1:De.z0,top:()=>De.spring,holes:Mf.map(f=>({u0:f-$r.r,u1:f+$r.r,bottom:$r.sill,head:e1(f,$r.r,$r.spring),noReveal:!0})),mat:Xc,cuts:[De.x1]});for(let f of Mf)T4(e,f);e.save(),e.translate(0,0,De.z1),e.rotateY(Math.PI),e.translate(-(De.x1+2*Zo),0,-2*Zo);let t=f=>De.x1+2*Zo-f;Kc(e,{u0:t(De.x1+2*Zo),u1:t(13.65),w0:0,w1:2*Zo,top:()=>De.spring,holes:za.map(f=>({u0:t(f+wt.halfW),u1:t(f-wt.halfW),bottom:wt.sill,head:e1(t(f),wt.halfW,wt.spring)})),mat:Xc,revealMat:Po}),e.restore(),e.save(),e.translate(De.x1,0,0),e.rotateY(-Math.PI/2);let o=Ts.DOOR,n=De.zc,r=o.r;Kc(e,{u0:De.z0-2*Zo,u1:De.z1+2*Zo,w0:-2*Zo,w1:0,top:f=>f<De.z0||f>De.z1?De.spring:As(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:e1(n,r,o.spring)}],mat:Xc,revealMat:Po}),e.restore(),e.save(),e.translate(14+Zo,0,0),e.rotateY(-Math.PI/2),Kc(e,{u0:De.z0,u1:De.z1,w0:-0,w1:2*Zo,top:()=>o1,topStep:.15,holes:[{u0:De.z0,u1:De.z1,bottom:0,head:f=>As(f)}],mat:Xc,revealMat:Po}),e.restore();let a=14+Zo,i=Math.ceil((De.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let l=a+(De.x1-a)*f/i,p=[];for(let h=0;h<=s;h++){let u=De.z0+(De.z1-De.z0)*h/s,v=As(u),d=[0,n1-v,De.zc-u],m=Math.hypot(d[1],d[2]);p.push(e.vert([l,v,u],[0,d[1]/m,d[2]/m],zi))}c.push(p)}for(let f=0;f<i;f++)for(let l=0;l<s;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Mm(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=De.z0+(De.z1-De.z0)*i/32,c=As(s),f=n1-c,l=De.zc-s,p=Math.hypot(f,l),h=[c+f/p*n,s+l/p*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,f/p,l/p]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];jn(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,Po),jn(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],Po),jn(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],Po)}}function _f(e,t,o,n){let i=o,s=o+n*.16;Gr(e,t-.28,0,i,t+.28,De.spring-.3,s,Po),Gr(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),Po),Gr(e,t-.28-.05,De.spring-.3,i,t+.28+.05,De.spring-.1,o+n*(.16+.05),Po),Gr(e,t-.28-.1,De.spring-.1,i,t+.28+.1,De.spring,o+n*(.16+.1),Po)}function R4(e,t){let o=As(De.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,De.zc,48,{mat:()=>zi});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=De.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=zi,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function C4(e){e.curMat=Po;for(let[t,o]of[[De.z0,1],[De.z1,-1]])Gr(e,14.35,De.spring-.12,t,De.x1,De.spring,t+o*.1,Po),Gr(e,14.35,De.spring-.04,t,De.x1,De.spring+.05,t+o*.18,Po);for(let[t,o]of[[De.z0,1],[De.z1,-1]])Gr(e,14.35,0,t,De.x1,.42,t+o*.12,Po),Gr(e,14.35,.42,t,De.x1,.5,t+o*.07,Po);for(let t of km)Mm(e,t,.24,.16),_f(e,t,De.z0,1),_f(e,t,De.z1,-1);for(let t of[14.35+.28,De.x1-.28])Mm(e,t,.28,.22),_f(e,t,De.z0,1),_f(e,t,De.z1,-1);for(let t of za)R4(e,t)}function P4(e){let t=De.z1+Zo,o=t-.04,n=t+.04,r=(s,c,f,l)=>Gr(e,s,c,o,f,l,n,Yc),a=wt.halfW,i=(s,c,f,l,p,h)=>{let u=(v,d,m)=>[s+d*Math.cos(v),wt.spring+d*Math.sin(v),m];for(let v=0;v<h;v++){let d=l+(p-l)*v/h,m=l+(p-l)*(v+1)/h;jn(e,u(d,c,o),u(m,c,o),u(m,f,o),u(d,f,o),[0,0,-1],Yc),jn(e,u(d,f,n),u(m,f,n),u(m,c,n),u(d,c,n),[0,0,1],Yc)}};for(let s of za){let c=s-a,f=s+a;r(c,wt.sill,c+.07,wt.spring),r(f-.07,wt.sill,f,wt.spring),r(c,wt.sill,f,wt.sill+.07),r(c,wt.spring-.04,f,wt.spring+.04);for(let p of[-.5,0,.5])r(s+p*a-.022,wt.sill,s+p*a+.022,wt.spring);let l=6;for(let p=1;p<l;p++){let h=wt.sill+(wt.spring-wt.sill)*p/l;r(c,h-.02,f,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let p=1;p<6;p++){let h=Math.PI*p/6,u=Math.cos(h),v=Math.sin(h),d=.02,m=(g,y)=>[s+u*g-v*d*y,wt.spring+v*g+u*d*y];jn(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],Yc),jn(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],Yc)}}}function I4(){let e=[],t=De.z1+Zo;for(let o of za){let n=o-wt.halfW,r=o+wt.halfW;e.push([n,wt.sill,t],[r,wt.sill,t],[r,wt.spring,t],[n,wt.sill,t],[r,wt.spring,t],[n,wt.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,wt.spring,t],[o+wt.halfW*Math.cos(i),wt.spring+wt.halfW*Math.sin(i),t],[o+wt.halfW*Math.cos(s),wt.spring+wt.halfW*Math.sin(s),t])}}return e}function Em(e,t){e.save(),e.translate(De.x1+Zo,0,De.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function O4(e){Em(e,()=>{Ts.addSurround(e),Ts.addFrames(e,"fixed")})}function F4(e){return Ts.glassPanes(e||"fixed").map(([o,n,r])=>[De.x1+Zo-r,n,De.zc-7+o])}function $4(e){N4(e),C4(e),P4(e),O4(e),e.curMat=[0,0,0]}var G4={x:De.x1+Zo,zLo:De.zc-Ts.DOOR.r,zHi:De.zc+Ts.DOOR.r},lo=e=>e.toFixed(4);function D4(){return`
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
		float k = floor((q.x - ${lo(wt.first)}) / ${lo(wt.pitch)} + 0.5);
		if (k < 0.0 || k > ${lo(wt.count-1)}) return 0.0;
		float dx = q.x - (${lo(wt.first)} + k * ${lo(wt.pitch)});
		float side = 1.0 - smoothstep(${lo(wt.halfW)} - soft, ${lo(wt.halfW)} + soft, abs(dx));
		float sill = smoothstep(${lo(wt.sill)} - soft, ${lo(wt.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${lo(wt.spring)}));
		float head = q.y < ${lo(wt.spring)} ? 1.0 : 1.0 - smoothstep(${lo(wt.halfW)} - soft, ${lo(wt.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${lo(wt.halfW*.5)}), 0.022, soft));
		float rowH = ${lo((wt.spring-wt.sill)/6)};
		float ry = (q.y - ${lo(wt.sill)}) / rowH;
		cover = max(cover, q.y < ${lo(wt.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${lo(wt.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${lo(De.x0)} || p.z < ${lo(De.z0-.1)} || p.z > ${lo(De.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${lo(De.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${lo(De.z1+2*Zo)} - p.z) / WIN_SKY.z;
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
		${Mf.map(e=>`{ float d = abs(p.x - ${lo(e)}); if (d < best) { best = d; lamp = vec3(${lo(e)}, ${lo($r.spring+.55)}, ${lo(De.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${lo(De.z0+1.6)} || p.z < ${lo(De.z0-$r.r-.1)} || p.x < ${lo(De.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${lo($r.r)}, ${lo($r.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${lo(De.x0-1)}) return 0.0;
		float inC = smoothstep(${lo(De.z0-1.5)}, ${lo(De.z0)}, p.z) * smoothstep(${lo(De.x0-1)}, ${lo(De.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${lo(De.z0)}, ${lo(De.z1)}, p.z);
		return inC * near;
	}`}Sm.exports={wallWithHoles:Kc,windowLightGLSL:D4,addWing:$4,windowGlass:I4,farDoorGlass:F4,atFarDoor:Em,FAR_DOOR:G4,vaultY:As,C:De,NICHE_X:Mf,NICHE:$r,NICHE_PLINTH_TOP:L4,NICHE_STATUE_Z:z4,WIN:wt,winCentres:za,piers:km,PAINTING_X:A4,HEIGHT:o1}});var va=de((fS,Lm)=>{"use strict";var r1=hr(),Vo=8,Ns=.35,_0=14,zs=4,Ze={x0:_0+Ns,x1:_0+Ns+2*zs,z0:5.9-zs,z1:5.9+zs,zc:5.9,cx:_0+Ns+zs,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Vo},oculus:3.3};Ze.domeTop=Ze.dome.base+Ze.dome.r;var Rs={spokes:16,ringE:[.42,.95],bar:.035},On={sxz:1.32,sy:1.6,yaw:.6};On.crownC=[Ze.cx,.4+3.4*On.sy,Ze.zc];On.crownR=[2.3*On.sxz,1.9*On.sy,2.3*On.sxz];On.trunkR=.26*On.sxz;On.trunkTop=.4+2.2*On.sy;var Am={inner:1.05,outer:1.62,seat:.48,soil:.4},Sf=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),Wn=[0,0,0],Ls=[11,0,0],kf=[10,0,0],Ef=[9,0,0],q4=[5,0,0],a1=[3,0,0];function fi(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Tr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var H4=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function B4(e){e.save(),e.translate(_0+Ns,0,0),e.rotateY(-Math.PI/2),r1.wallWithHoles(e,{u0:0,u1:r1.C.z0,w0:0,w1:2*Ns,top:()=>Vo,holes:[{u0:Ze.zc-Ze.arch.r,u1:Ze.zc+Ze.arch.r,bottom:0,head:H4(Ze.zc,Ze.arch.r,Ze.arch.spring),step:.05}],mat:Ls,revealMat:Wn,topStep:1}),e.restore();let t=_0-Ns;for(let[i,s]of[[0,Ze.zc-Ze.arch.r],[Ze.zc+Ze.arch.r,r1.C.z0]])Tr(e,t-.12,0,i,t,.42,s,Wn),Tr(e,t-.07,.42,i,t,.5,s,Wn);let o=t,n=.24,r=40,a=(i,s,c)=>[c,Ze.arch.spring+Math.sin(i)*s,Ze.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;fi(e,a(s,Ze.arch.r,o-.07),a(c,Ze.arch.r,o-.07),a(c,Ze.arch.r+n,o-.07),a(s,Ze.arch.r+n,o-.07),[-1,0,0],Wn),fi(e,a(s,Ze.arch.r+n,o),a(c,Ze.arch.r+n,o),a(c,Ze.arch.r+n,o-.07),a(s,Ze.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Wn),fi(e,a(s,Ze.arch.r,o),a(c,Ze.arch.r,o),a(c,Ze.arch.r,o-.07),a(s,Ze.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Wn)}Tr(e,o-.12,Ze.arch.spring+Ze.arch.r-.06,Ze.zc-.17,o,Ze.arch.spring+Ze.arch.r+n+.16,Ze.zc+.17,Wn);for(let i of[-1,1]){let s=Ze.zc+i*Ze.arch.r,c=Ze.zc+i*(Ze.arch.r+n);Tr(e,o-.07,0,s,o,Ze.arch.spring,c,Wn),Tr(e,o-.13,Ze.arch.spring-.16,s-i*.03,o,Ze.arch.spring,c+i*.08,Wn),Tr(e,o-.12,0,s-i*.03,o,.5,c+i*.06,Wn)}}function U4(e){let{x0:t,x1:o,z0:n,z1:r}=Ze;fi(e,[_0,0,n],[o,0,n],[o,0,r],[_0,0,r],[0,1,0],Wn),e.curMat=Ls,fi(e,[o,0,n],[o,0,r],[o,Vo,r],[o,Vo,n],[-1,0,0],Ls),fi(e,[t,0,n],[o,0,n],[o,Vo,n],[t,Vo,n],[0,0,1],Ls),fi(e,[o,0,r],[t,0,r],[t,Vo,r],[o,Vo,r],[0,0,-1],Ls),fi(e,[t,0,r],[t,0,n],[t,Vo,n],[t,Vo,r],[1,0,0],Ls),Tr(e,o-.12,0,n,o,.42,r,Wn),Tr(e,t,0,n,o,.42,n+.12,Wn),Tr(e,t,0,r-.12,o,.42,r,Wn),Tr(e,o-.2,Vo-.3,n,o,Vo,r,Wn),Tr(e,t,Vo-.3,n,o,Vo,n+.2,Wn),Tr(e,t,Vo-.3,r-.2,o,Vo,r,Wn),Tr(e,t,Vo-.3,n,t+.2,Vo,r,Wn);let a=Ze.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([Ze.cx+Math.cos(y)*a,Ze.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(zs/Math.max(y,1e-6),zs/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,E=c(y),k=c(b),L=[Ze.cx+Math.cos(y)*E,Vo,Ze.zc+Math.sin(y)*E],R=[Ze.cx+Math.cos(b)*k,Vo,Ze.zc+Math.sin(b)*k];fi(e,[s[g][0],Vo,s[g][1]],[s[g+1][0],Vo,s[g+1][1]],R,L,[0,-1,0],kf)}e.lathe([[a+.02,Vo-.18,1],[a-.12,Vo-.18,1],[a-.12,Vo-.06,1],[a-.05,Vo,1],[a,Vo+.02]],Ze.cx,Ze.zc,i,{mat:()=>Wn});let f=16,l=(g,y,b)=>[Ze.cx+Math.cos(g)*Math.cos(y)*b,Ze.dome.base+Math.sin(y)*b,Ze.zc+Math.sin(g)*Math.cos(y)*b],p=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/i,E=Math.PI*2*(g+1)/i,k=p*y/f,L=p*(y+1)/f,R=(O,te)=>[-Math.cos(O)*Math.cos(te),-Math.sin(te),-Math.sin(O)*Math.cos(te)],X=[e.vert(l(b,k,a),R(b,k),Ef),e.vert(l(E,k,a),R(E,k),Ef),e.vert(l(E,L,a),R(E,L),Ef),e.vert(l(b,L,a),R(b,L),Ef)];e.tri(X[0],X[1],X[2]),e.tri(X[0],X[2],X[3])}for(let g=0;g<Rs.spokes;g++){let y=Math.PI*2*g/Rs.spokes,b=[];for(let E=0;E<=14;E++)b.push(l(y,(p-.06)*E/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>kf})}for(let g of Rs.ringE){let y=Math.cos(g)*(a-.04),b=Ze.dome.base+Math.sin(g)*(a-.04),E=[];for(let k=0;k<=72;k++){let L=Math.PI*2*k/72;E.push([Ze.cx+Math.cos(L)*y,b,Ze.zc+Math.sin(L)*y])}e.tube(E,()=>.035,72,6,{mat:()=>kf})}e.ellipsoid([Ze.cx,Ze.dome.base+a-.06,Ze.zc],[.16,.08,.16],6,12,{mat:()=>kf});let h=.46,u=.55,v=.12,d=(g,y,b,E)=>{Tr(e,g,h-.08,y,b,h,E,a1);let k=b-g>E-y?[g+.25,b-.25]:[g+.06,b-.06],L=b-g>E-y?[y+.06,E-.06]:[y+.25,E-.25];Tr(e,k[0],0,L[0],k[1],h-.08,L[1],a1)};d(o-v-u,n+1.1,o-v,r-1.1),d(t+1,n+v,o-1.1,n+v+u),d(t+1,r-v-u,o-1.1,r-v);let m=Am;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],Ze.cx,Ze.zc,64,{mat:()=>a1}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],Ze.cx,Ze.zc,48,{mat:()=>q4})}function j4(e){B4(e),U4(e),e.curMat=[0,0,0]}var Io=e=>e.toFixed(4);function Tm(){let e=Ze.dome.r,t=Rs.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${Io(Sf[0])}, ${Io(Sf[1])}, ${Io(Sf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Io(Ze.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Io(Ze.cx)}, ${Io(Ze.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Io(e-.15)} - soft, ${Io(e-.15)} + soft, d);
		float hw = ${Io(Rs.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Io(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Io(Math.PI*2/Rs.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Io(On.crownC[0])}, ${Io(On.crownC[1])}, ${Io(On.crownC[2])});
		vec3 r = vec3(${Io(On.crownR[0])}, ${Io(On.crownR[1])}, ${Io(On.crownR[2])});
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
		float tt = (${Io(On.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Io(Ze.cx)}, ${Io(Ze.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Io(On.trunkR*.7)}, ${Io(On.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function W4(){return`
	${Tm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Io(Ze.x0-.75)} || p.z < ${Io(Ze.z0-.5)} || p.z > ${Io(Ze.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Io(Ze.x0-1.5)} || p.z < ${Io(Ze.z0-1.5)} || p.z > ${Io(Ze.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Io(Ze.x0-1.2)}, ${Io(Ze.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Io(Ze.cx)}, ${Io(Ze.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Lm.exports={addAlcove:j4,alcoveLightGLSL:W4,oculusGLSL:Tm,A:Ze,BENCH:Am,SHAFT:Sf,TREE:On}});var ur=de((hS,Nm)=>{"use strict";var Na=0;try{let e=location.search;/[?&]night\b/.test(e)&&(Na=1)}catch(e){}var hi=Na,i1=0,zm=[],Af={tick(e){let t=i1?Math.min(.1,e-i1):0;if(i1=e,hi!==Na){let o=t/2.4;hi=Na>hi?Math.min(Na,hi+o):Math.max(Na,hi-o)}return Af.night},get night(){return hi*hi*(3-2*hi)},get isNight(){return Na===1},get settled(){return hi===Na},set(e){Na=e?1:0,zm.forEach(t=>t(Na))},toggle(){Af.set(!Na)},onChange(e){zm.push(e)}};Af.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;Nm.exports=Af});var Ri=de((uS,Jc)=>{"use strict";var s1=ur(),{C:c1}=hr(),{A:Tf,BENCH:Qc}=va(),Fn=Math.PI,V4=[18,29,40],Lf=.575,Ni=[],Zc=(e,t,o,n,r,a,i)=>Ni.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));V4.forEach(e=>{Zc(1.25+Lf+.48,3.25,e,[1,0],.48,Lf,{s:1.2}),Zc(12.75-Lf-.48,3.25,e,[-1,0],.48,Lf,{s:1.2})});[3,11].forEach(e=>Zc(e,3.45,c1.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var X4=[14.63,19.63,24.03,28.43,32.83,c1.x1-.28];X4.forEach(e=>Zc(e,3.15,c1.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>Zc(.35+.44,2.75,e,[1,0],.44,99));{let e=(Qc.inner+Qc.outer)/2,t=Math.atan2(-1.12,-.98);Ni.push({x:Tf.cx+Math.cos(t)*e,y:Qc.seat+.155,z:Tf.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[Tf.cx,Tf.zc,Qc.outer+.07,Qc.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var l1=.13,zf=.21,Vn=l1/Math.cos(Fn/6),ko=e=>e.toFixed(4);function Rm(e){let o=(e||Ni.map((n,r)=>r)).map(n=>{let r=Ni[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${ko(r.ring[3]-.03)}) {
					float tt = ${ko(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${ko(r.x)}, ${ko(r.z)}) + D.xz * tt - vec2(${ko(r.ring[0])}, ${ko(r.ring[1])});
					T *= smoothstep(${ko(r.ring[2]-.02)}, ${ko(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${ko(r.o[0])}, ${ko(r.o[1])}));
					if (behind > ${ko(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${ko(a)}, ${ko(i)}))) * ${ko(r.back)} / behind;
						T *= smoothstep(${ko(r.hw-.04)}, ${ko(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${ko(r.x)}, ${ko(r.y)}, ${ko(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${ko(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${ko(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${ko(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${ko(n*1.7)}) + 0.04 * sin(time * 15.3 + ${ko(n*2.9)}) * sin(time * 1.9 + ${ko(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${ko(1/(r.s*r.s))}) * (1.0 - smoothstep(${ko(r.range*.6)}, ${ko(r.range)}, d));
					sum += ${ko(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${ko(Fn/6)}, ${ko(Fn/3)}) - ${ko(Fn/6)};
		float U = tan(t) / ${ko(Math.tan(Fn/6))};
		float V = (q.y / h) * (${ko(l1/zf)} / cos(t));
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
	}`}var Jo=0,Y4=1;function K4(){let e=[],t=[],o=[],n=[],r=[],a=(u,v,d,m)=>(e.push(u[0],u[1],u[2]),t.push(v[0],v[1],v[2]),o.push(d),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(u,v)=>[u[0]-v[0],u[1]-v[1],u[2]-v[2]],s=(u,v)=>[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],c=u=>{let v=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/v,u[1]/v,u[2]/v]};function f(u,v,d,m,g,y){let b=c(s(i(v,u),i(m,u))),E=a(u,b,g,[0,0]),k=a(v,b,g,[1,0]),L=a(d,b,g,[1,1]),R=a(m,b,g,[0,1]);r.push(E,k,L,E,L,R),y&&r.push(E,L,k,E,R,L)}function l(u,v,d){for(let y=0;y<u.length;y++){let b=u[Math.max(0,y-1)],E=u[Math.min(u.length-1,y+1)],k=c(i(E,b)),L=Math.abs(k[1])>.9?[1,0,0]:[0,1,0],R=c(s(k,L)),X=s(R,k),O=typeof v=="function"?v(y/(u.length-1)):v;for(let te=0;te<=6;te++){let G=te/6*Fn*2,oe=Math.cos(G),D=Math.sin(G),W=[R[0]*oe+X[0]*D,R[1]*oe+X[1]*D,R[2]*oe+X[2]*D];a([u[y][0]+W[0]*O,u[y][1]+W[1]*O,u[y][2]+W[2]*O],W,d)}}let g=e.length/3-u.length*7;for(let y=0;y<u.length-1;y++)for(let b=0;b<6;b++){let E=g+y*7+b,k=E+6+1;r.push(E,k,E+1,E+1,k,k+1)}}function p(u,v,d,m,g,y,b,E,k){let L=(R,X,O)=>{let te=y+Fn/6+O*Fn/3;return[u[0]+Math.cos(te)*R,X,u[2]+Math.sin(te)*R]};for(let R=0;R<6;R++)f(L(m,v,R+1),L(m,v,R),L(g,d,R),L(g,d,R+1),b);if(E&&g>0)for(let R=0;R<6;R++){let X=a([u[0],d,u[2]],[0,1,0],b),O=a(L(g,d,R),[0,1,0],b),te=a(L(g,d,R+1),[0,1,0],b);r.push(X,te,O)}if(k&&m>0)for(let R=0;R<6;R++){let X=a([u[0],v,u[2]],[0,-1,0],b),O=a(L(m,v,R),[0,-1,0],b),te=a(L(m,v,R+1),[0,-1,0],b);r.push(X,O,te)}}function h(u,v,d,m,g,y,b){let E=[];for(let L=0;L<=18;L++){let R=L/18,X=(b||0)+R*m*Fn*2,O=d*(1-.75*R);E.push([u[0]+v[0]*Math.cos(X)*O,u[1]+Math.sin(X)*O,u[2]+v[2]*Math.cos(X)*O])}l(E,g,y)}return Ni.forEach(u=>{let v=u.s,d=Math.atan2(u.o[1],u.o[0]),m=[u.x,u.y,u.z],g=(E,k,L)=>[u.x+u.o[0]*E-u.o[1]*(L||0),u.y+k,u.z+u.o[1]*E+u.o[0]*(L||0)],y=u.y-zf*v,b=u.y+zf*v;for(let E=0;E<6;E++){let k=d+Fn/6+E*Fn/3,L=k+Fn/3,R=Vn*v*.97,X=[u.x+Math.cos(k)*R,y,u.z+Math.sin(k)*R],O=[u.x+Math.cos(L)*R,y,u.z+Math.sin(L)*R];f(O,X,[X[0],b,X[2]],[O[0],b,O[2]],Y4,!0)}for(let E=0;E<6;E++){let k=d+Fn/6+E*Fn/3,L=Vn*v;l([[u.x+Math.cos(k)*L,y-.02*v,u.z+Math.sin(k)*L],[u.x+Math.cos(k)*L,b+.02*v,u.z+Math.sin(k)*L]],.011*v,Jo)}p(m,y-.035*v,y,Vn*v*1.12,Vn*v*1.12,d,Jo,!0,!0),p(m,y-.1*v,y-.035*v,Vn*v*.55,Vn*v*1,d,Jo,!1,!0),p(m,y-.17*v,y-.1*v,0,Vn*v*.55,d,Jo,!1,!1);for(let E=0;E<6;E++){let k=d+E*Fn/3,L=l1*v*1.06,R=[u.x+Math.cos(k)*L,y-.06*v,u.z+Math.sin(k)*L];h(R,[-Math.sin(k),0,Math.cos(k)],.03*v,.85,.004*v,Jo,.3)}p(m,b,b+.03*v,Vn*v*1.14,Vn*v*1.14,d,Jo,!1,!0),p(m,b+.03*v,b+.2*v,Vn*v*1.14,Vn*v*.32,d,Jo,!1,!1),p(m,b+.2*v,b+.27*v,Vn*v*.34,Vn*v*.34,d,Jo,!1,!1),p(m,b+.27*v,b+.37*v,Vn*v*.42,0,d,Jo,!1,!0),l([[u.x,b+.36*v,u.z],[u.x,b+.47*v,u.z]],E=>.01*v*(1-.7*E),Jo),p([u.x,0,u.z],b+.44*v,b+.47*v,.018*v,0,d,Jo,!1,!0);for(let E=0;E<6;E++){let k=d+Fn/6+E*Fn/3,L=Vn*v*1.14,R=[u.x+Math.cos(k)*L,b+.03*v,u.z+Math.sin(k)*L];l([R,[R[0],R[1]+.09*v,R[2]]],X=>.008*v*(1-.8*X),Jo),p([R[0],0,R[2]],R[1]+.035*v,R[1]+.06*v,.014*v,.014*v,k,Jo,!0,!0)}if(u.mount==="wall"){let E=u.back,k=y-.32,L=g(-E,0,0);((G,oe,D)=>{let W=[u.o[0],0,u.o[1]],Ae=[-u.o[1],0,u.o[0]],Be=(_e,ht,Ot)=>[L[0]+Ae[0]*_e+W[0]*Ot,ht,L[2]+Ae[2]*_e+W[2]*Ot],Te=.03,pe=.065;f(Be(-D,G,pe),Be(D,G,pe),Be(D,oe,pe),Be(-D,oe,pe),Jo,!0),f(Be(D,G,Te),Be(D,G,pe),Be(D,oe,pe),Be(D,oe,Te),Jo,!0),f(Be(-D,G,pe),Be(-D,G,Te),Be(-D,oe,Te),Be(-D,oe,pe),Jo,!0),f(Be(-D,oe,pe),Be(D,oe,pe),Be(D,oe,Te),Be(-D,oe,Te),Jo,!0),f(Be(-D,G,Te),Be(D,G,Te),Be(D,G,pe),Be(-D,G,pe),Jo,!0),p([L[0]+W[0]*pe,0,L[2]+W[2]*pe],oe,oe+.05,D*.6,0,d,Jo,!1,!0),p([L[0]+W[0]*pe,0,L[2]+W[2]*pe],G-.05,G,0,D*.6,d,Jo,!1,!1)})(k-.2,k+.2,.07);let X=[];for(let G=0;G<=14;G++){let oe=G/14,D=-E+.05+oe*(E-.05),W=k+.04+(y-.17*v-k-.04)*Math.pow(oe,2.2);X.push(g(D,W-u.y,0))}l(X,G=>.022*(1-.3*G),Jo);let O=[];for(let G=0;G<=10;G++){let oe=G/10;O.push(g(-E+.05+oe*E*.6,k-.14+oe*.16+.05*Math.sin(oe*Fn)-u.y,0))}l(O,.009,Jo);let te=O[O.length-1];h([te[0]-u.o[0]*.03,te[1]+.02,te[2]-u.o[1]*.03],[u.o[0],0,u.o[1]],.045,1.1,.007,Jo,-.4),[.3,.55].forEach(G=>{let oe=X[Math.round(G*14)],D=O[Math.round(G/.62*10)]||O[10];l([oe,D],.006,Jo)}),[-1,1].forEach(G=>{let oe=g(-.05,-zf*v-.2*v,0);h([oe[0]-u.o[1]*G*.05,oe[1],oe[2]+u.o[0]*G*.05],[-u.o[1]*G,0,u.o[0]*G],.05*v,.9,.006,Jo,Fn)})}else for(let E=0;E<3;E++){let k=d+E*Fn*2/3,L=[u.x+Math.cos(k)*Vn*v*.7,y-.035*v,u.z+Math.sin(k)*Vn*v*.7],R=[u.x+Math.cos(k)*Vn*v*1.25,y-.17*v,u.z+Math.sin(k)*Vn*v*1.25];l([L,R],.012*v,Jo)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}Jc.exports=e=>{let t=K4(),o=e({vert:`
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
		${Rm()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>s1.night}}),n=[],r=[];Ni.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>s1.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),s1.night>.01&&a()}};Jc.exports.lanternGLSL=Rm;Jc.exports.LANTERNS=Ni;Jc.exports.TREE_LANTERN=[Ni.length-1]});var Ii=de((dS,Dr)=>{"use strict";var Q4=ur(),To=Math.PI,$n=e=>(+e).toFixed(4),Z4=e=>`vec3(${$n(e[0])}, ${$n(e[1])}, ${$n(e[2])})`,St={x:-7,z:44.5},Bt=5.2,rr=15,tt={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},Wa={z0:42.2,z1:46.8,top:6.3,x:.35},Cf=[St.x-Math.sqrt(Bt*Bt-3.05*3.05),0,0],_n={x0:-2.05+Cf[0],x1:Cf[0],z0:41.45,z1:47.55,top:4.3},f1=[[_n.x1+.05,2.35,_n.z0-.45],[_n.x1+.05,2.35,_n.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-St.z,e-St.x);return[St.x+Math.cos(n)*(Bt-.16),t,St.z+Math.sin(n)*(Bt-.16)]}),wo={ri:3.4,ro:Bt,a0:-35*To/180,rise:.1836,step:3.6*To/180,n:88,thick:.36};wo.k=wo.rise/wo.step;var Lr=e=>wo.a0-e,Pi=e=>e*wo.k,tn={x:St.x+.1,z:St.z-.15,yaw:-To/2,scale:1.3},ui=tn.scale/1.1,el={keyX0:tn.x-.524*ui,keyX1:tn.x+.491*ui,keyTop:.647*ui,keyFront:tn.z+.808*ui,keyBack:tn.z+.72*ui,stoolX:tn.x-.041*ui,stoolZ:tn.z+1.122*ui,stoolFront:tn.z+.96*ui,stoolTop:.37*ui,heading:To},Rf=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function Pm(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function J4(e,t){let o=1e9;for(let n=0;n<Rf.length-1;n++){let[r,a]=Rf[n],[i,s]=Rf[n+1],c=i-r,f=s-a,l=Math.max(0,Math.min(1,((e-r)*c+(t-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(e-r-c*l,t-a-f*l))}return o}var Nf=e=>tt.spring+Math.sqrt(Math.max(0,tt.r*tt.r-(e-tt.zc)*(e-tt.zc))),Ci=e=>St.x+Math.sqrt(Math.max(0,Bt*Bt-(e-St.z)*(e-St.z)));function Cs(e,t){return Math.hypot(e-St.x,t-St.z)<Bt||e<=0&&e>St.x&&t>tt.z0&&t<tt.z1||e>_n.x0&&e<_n.x1&&t>_n.z0&&t<_n.z1}function e_(e,t){if(Math.hypot(e-St.x,t-St.z)<wo.ri-.05)return 99;let n=Math.atan2(t-St.z,e-St.x),r=wo.a0-n;for(;r<0;)r+=2*To;for(;r>=2*To;)r-=2*To;return r>wo.n*wo.step?99:Pi(r)-wo.thick}function t_(){let e=[],t=Pm(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let f=e[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-i)<s+f[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-tn.x,c=i-tn.z,f=Math.cos(tn.yaw),l=Math.sin(tn.yaw),p=(f*s-l*c)/tn.scale,h=(l*s+f*c)/tn.scale;return p>-1.05&&p<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(Bt-1.45),s=t()*2*To,c=St.x+Math.cos(s)*i,f=St.z+Math.sin(s)*i;if(!Cs(c,f)||i>Bt-.18||n(c,f)||J4(c,f)<.62||e_(c,f)<2.3||c<_n.x1+.9)continue;let l=.022+t()*.02;if(o(c,f,l))continue;let p=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,f,l,p,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*wo.step,f=Lr(c),l=wo.ri+.55+t()*(wo.ro-wo.ri-.75),p=.022+t()*.016;e.push([St.x+Math.cos(f)*l,(a+1)*wo.rise,St.z+Math.sin(f)*l,p,.05+t()*.14,t()*100])}}for(let a of f1)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[_n.z0-.35,_n.z1+.35])for(let i=0;i<9;i++){let s=_n.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-St.x,c-St.z)>Bt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function o_(e){let o=Pm(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,f=1e9;n.forEach((l,p)=>{let h=(s[0]-l[0])**2+(s[1]-l[1])**2*4+(s[2]-l[2])**2;h<f&&(f=h,c=p)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var h1=t_(),Cm=o_(h1.filter(e=>e[1]<2||e[1]>2.5)).concat(f1.map(e=>[e[0],e[1]+.35,e[2],.035]));function Im(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${Cm.map((t,o)=>`
		{
			vec3 d = ${Z4(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${$n(5.3+o*.71)} + ${$n(o*1.9)}) + 0.06 * sin(time * ${$n(11.7+o*1.3)} + ${$n(o*.7)});
			float w = ${$n(t[3]*Cm.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${$n(rr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${$n(St.x)}, ${$n(rr)}, ${$n(St.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${$n(el.stoolX)}, ${$n(el.keyFront+.1)})));
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
	}`}var Ft={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function Om(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),f=e.v(o,a,i,s&&s[1]),l=e.v(n,a,i,s&&s[2]),p=e.v(r,a,i,s&&s[3]);e.idx.push(c,f,l,c,l,p)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function n_(){let e=Om(),t=(n,r,a)=>[St.x+Math.cos(n)*r,a,St.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>_n.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,f=a+.2;if(!(Cs(i,c)||Cs(s,c)||Cs(i,f)||Cs(s,f)||Cs((i+s)/2,(c+f)/2)))continue;let l=c,p=f;i>Ci(tt.z0)-.3&&(l=Math.max(l,tt.z0),p=Math.min(p,tt.z1),p<=l)||e.quad([i,0,l],[i,0,p],[s,0,p],[s,0,l],[0,1,0],Ft.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*To,i=(r+1)/360*2*To,s=(a+i)/2,c=t(s,Bt,0),f=0;c[0]>St.x&&c[2]>tt.z0-.02&&c[2]<tt.z1+.02&&(f=Math.max(Nf(Math.min(Math.max(t(a,Bt,0)[2],tt.z0),tt.z1)),Nf(Math.min(Math.max(t(i,Bt,0)[2],tt.z0),tt.z1)))),c[0]<St.x&&c[2]>_n.z0-.02&&c[2]<_n.z1+.02&&(f=_n.top);let l=a*Bt,p=i*Bt,h=o(a).map(d=>-d),u=o(i).map(d=>-d),v=[f];for(let d=Math.ceil(f/2.5)*2.5;d<rr;d+=2.5)d>f+.01&&v.push(d);v.push(rr);for(let d=0;d<v.length-1;d++){let m=v[d],g=v[d+1],y=e.v(t(a,Bt,m),h,Ft.WALL,[l,m]),b=e.v(t(i,Bt,m),u,Ft.WALL,[p,m]),E=e.v(t(i,Bt,g),u,Ft.WALL,[p,g]),k=e.v(t(a,Bt,g),h,Ft.WALL,[l,g]);e.idx.push(y,b,E,y,E,k)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*To,f=(s+1)/360*2*To,l=(c+f)/2,p=t(l,Bt,0);if(r<1&&(p[0]>St.x&&p[2]>tt.z0&&p[2]<tt.z1||p[0]<St.x&&p[2]>_n.z0&&p[2]<_n.z1))continue;let h=Bt-i;e.quad(t(c,h,r),t(f,h,r),t(f,h,r+a),t(c,h,r+a),o(l).map(u=>-u),Ft.WALL,[[c*Bt,r+100],[f*Bt,r+100],[f*Bt,r+a+100],[c*Bt,r+a+100]]),e.quad(t(c,h,r+a),t(f,h,r+a),t(f,Bt,r+a),t(c,Bt,r+a),[0,1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,Bt,r),t(f,Bt,r),t(f,h,r),t(c,h,r),[0,-1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=Wa.x;for(let[a,i]of[[tt.z0,1],[tt.z1,-1]]){let s=Ci(a);e.quad([n,0,a],[s,0,a],[s,tt.spring,a],[n,tt.spring,a],[0,0,i],Ft.WALL,[[n,0],[s,0],[s,tt.spring],[n,tt.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*To,s=(a+1)/r*To,c=tt.zc-Math.cos(i)*tt.r,f=tt.zc-Math.cos(s)*tt.r,l=tt.spring+Math.sin(i)*tt.r,p=tt.spring+Math.sin(s)*tt.r,h=[0,-Math.sin(i),Math.cos(i)],u=[0,-Math.sin(s),Math.cos(s)],v=e.v([n,l,c],h,Ft.WALL,[n,i*tt.r]),d=e.v([Ci(c),l,c],h,Ft.WALL,[Ci(c),i*tt.r]),m=e.v([Ci(f),p,f],u,Ft.WALL,[Ci(f),s*tt.r]),g=e.v([n,p,f],u,Ft.WALL,[n,s*tt.r]);e.idx.push(v,d,m,v,m,g)}}{let n=Wa.x,r=.05;for(let f=Wa.z0;f<Wa.z1-1e-6;f+=r){let l=f,p=Math.min(Wa.z1,f+r),u=(v=>v>tt.z0&&v<tt.z1)((l+p)/2)?Math.max(Nf(l),Nf(p)):0;e.quad([n,u,l],[n,u,p],[n,Wa.top,p],[n,Wa.top,l],[1,0,0],Ft.HALLSTONE,[[l,u],[p,u],[p,Wa.top],[l,Wa.top]])}let a=.32,i=.06,s=n+i,c=36;for(let f=0;f<c;f++){let l=f/c*To,p=(f+1)/c*To,h=(g,y)=>[s,tt.spring+Math.sin(g)*y,tt.zc-Math.cos(g)*y],u=tt.r,v=tt.r+a;e.quad(h(l,u),h(p,u),h(p,v),h(l,v),[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let d=(g,y,b)=>[b,tt.spring+Math.sin(g)*y,tt.zc-Math.cos(g)*y],m=[0,Math.sin((l+p)/2),-Math.cos((l+p)/2)];e.quad(d(l,v,n),d(p,v,n),d(p,v,s),d(l,v,s),m,Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(d(l,u,n),d(p,u,n),d(p,u,s),d(l,u,s),m.map(g=>-g),Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,p]of[[tt.z0-a,tt.z0,-1],[tt.z1,tt.z1+a,1]]){e.quad([s,0,f],[s,0,l],[s,tt.spring,l],[s,tt.spring,f],[1,0,0],Ft.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=p<0?f:l,u=p<0?l:f;e.quad([n,0,h],[s,0,h],[s,tt.spring,h],[n,tt.spring,h],[0,0,p],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,u],[s,0,u],[s,tt.spring,u],[n,tt.spring,u],[0,0,-p],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let v=tt.spring-.16,d=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;e.quad([n+m,v,g],[n+m,v,y],[n+m,v+d,y],[n+m,v+d,g],[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v+d,g],[n+m,v+d,g],[n+m,v+d,y],[n,v+d,y],[0,1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v,g],[n,v,y],[n+m,v,y],[n+m,v,g],[0,-1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,v,b],[n+m,v,b],[n+m,v+d,b],[n,v+d,b],[0,0,b===g?-1:1],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=tt.spring+tt.r-.05,l=tt.spring+tt.r+a+.12,p=.16,h=.22,u=s+.04;e.quad([u,f,tt.zc-p],[u,f,tt.zc+p],[u,l,tt.zc+h],[u,l,tt.zc-h],[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let v of[-1,1])e.quad([n,f,tt.zc+v*p],[u,f,tt.zc+v*p],[u,l,tt.zc+v*h],[n,l,tt.zc+v*h],[0,0,v],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,l,tt.zc-h],[u,l,tt.zc-h],[u,l,tt.zc+h],[n,l,tt.zc+h],[0,1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=_n;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],Ft.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[f,l]of[[a,1],[i,-1]]){let p=St.x-Math.sqrt(Bt*Bt-(f-St.z)*(f-St.z));e.quad([n,0,f],[p,0,f],[p,s,f],[n,s,f],[0,0,l],Ft.WALL,[[n,0],[p,0],[p,s],[n,s]])}let c=24;for(let f=0;f<c;f++){let l=a+(i-a)*f/c,p=a+(i-a)*(f+1)/c,h=St.x-Math.sqrt(Bt*Bt-(l-St.z)**2),u=St.x-Math.sqrt(Bt*Bt-(p-St.z)**2);e.quad([n,s,l],[h,s,l],[u,s,p],[n,s,p],[0,-1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(i-a)*f/c,p=a+(i-a)*(f+1)/c,h=St.x-Math.sqrt(Bt*Bt-(l-St.z)**2)+.05,u=St.x-Math.sqrt(Bt*Bt-(p-St.z)**2)+.05;e.quad([h,s-.3,l],[u,s-.3,p],[u,s,p],[h,s,l],[1,0,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Bt];for(let a=0;a<120;a++){let i=a/120*2*To,s=(a+1)/120*2*To,c=(i+s)/2;c>To&&(c-=2*To);for(let f=0;f<r.length-1;f++){let l=r[f],p=r[f+1],h=c*180/To;l>=3.3&&h>8&&h<85||e.quad(t(i,l,rr),t(i,p,rr),t(s,p,rr),t(s,l,rr),[0,-1,0],Ft.CEIL,[[i*l,l],[i*p,p],[s*p,p],[s*l,l]])}e.quad(t(i,1.15,rr),t(s,1.15,rr),t(s,1.15,rr+.7),t(i,1.15,rr+.7),o(c).map(f=>-f),Ft.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([St.x,rr+.7,St.z],t(s,1.15,rr+.7),t(i,1.15,rr+.7),[0,-1,0],Ft.OCULUS)}}{let n=wo.ri,r=wo.ro,a=wo.n*wo.step;for(let c=0;c<wo.n;c++){let f=c*wo.step,l=(c+1)*wo.step,p=Lr(f),h=Lr(l),u=(c+1)*wo.rise,v=c*wo.rise,d=2;for(let y=0;y<d;y++){let b=p+(h-p)*y/d-(y===0?.004:0),E=p+(h-p)*(y+1)/d;e.quad(t(b,n,u),t(b,r,u),t(E,r,u),t(E,n,u),[0,1,0],Ft.STEP,[[n*b,c],[r*b,c],[r*E,c],[n*E,c]])}let m=[-Math.sin(p),0,Math.cos(p)],g=p-.004;e.quad(t(g,n,v),t(g,r,v),t(g,r,u),t(g,n,u),m,Ft.STEP,[[n*p,c+.5],[r*p,c+.5],[r*p,c+.5],[n*p,c+.5]]),e.quad(t(p,n,Pi(f)+.06),t(h,n,Pi(l)+.06),t(h,n,u),t(g,n,u),o((p+h)/2).map(y=>-y),Ft.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*To/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let f=c/i*a,l=(c+1)/i*a,p=Lr(f),h=Lr(l),u=Pi(f),v=Pi(l),d=u-wo.thick,m=v-wo.thick,g=o(p).map(R=>-R),y=o(h).map(R=>-R),b=e.v(t(p,n,d),g,Ft.STRING,[f*n,0]),E=e.v(t(h,n,m),y,Ft.STRING,[l*n,0]),k=e.v(t(h,n,v+.06),y,Ft.STRING,[l*n,1]),L=e.v(t(p,n,u+.06),g,Ft.STRING,[f*n,1]);e.idx.push(b,E,k,b,k,L);for(let R=0;R<s.length-1;R++){let X=s[R],O=s[R+1],te=G=>{let oe=o(G);return[-oe[0]*.12,-.99,-oe[2]*.12]};e.quad(t(p,X,d),t(p,O,d),t(h,O,m),t(h,X,m),te((p+h)/2),Ft.SOFFIT,[[f*X,X],[f*O,O],[l*O,O],[l*X,X]])}}}return e}function r_(){let e=Om(),t=wo.ri+.045,o=wo.n*wo.step,n=Math.ceil(o/(.8*To/180)),r=.92,a=(c,f,l)=>[St.x+Math.cos(c)*f,l,St.z+Math.sin(c)*f],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,p=Lr(f),h=Lr(l),u=Pi(f)+.06,v=Pi(l)+.06,d=i(p).map(R=>-R),m=i(h).map(R=>-R),g=f*t,y=l*t,b=e.v(a(p,t,u),d,Ft.RAILING,[g,0]),E=e.v(a(h,t,v),m,Ft.RAILING,[y,0]),k=e.v(a(h,t,v+r),m,Ft.RAILING,[y,r]),L=e.v(a(p,t,u+r),d,Ft.RAILING,[g,r]);e.idx.push(b,E,k,b,k,L)}((c,f,l,p)=>{let u=d=>{let m=Lr(d),g=Pi(d)+.06+f,y=a(m,t+c,g),b=i(m),E=[];for(let k=0;k<8;k++){let L=k/8*2*To,R=[b[0]*Math.cos(L),Math.sin(L),b[2]*Math.cos(L)];E.push([[y[0]+R[0]*l,y[1]+R[1]*l,y[2]+R[2]*l],R])}return E},v=u(0);for(let d=1;d<=n;d++){let m=u(d/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(v[g][0],v[g][1],p),E=e.v(m[g][0],m[g][1],p),k=e.v(m[y][0],m[y][1],p),L=e.v(v[y][0],v[y][1],p);e.idx.push(b,E,k,b,k,L)}v=m}})(0,r+.02,.028,Ft.IRON);for(let c of f1){let f=Math.atan2(c[2]-St.z,c[0]-St.x),l=[Math.cos(f),0,Math.sin(f)],p=12;for(let d=0;d<p;d++){let m=d/p*2*To,g=(d+1)/p*2*To,y=(b,E,k)=>[c[0]+Math.cos(b)*E,k,c[2]+Math.sin(b)*E];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Ft.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Ft.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],u=[-l[2],0,l[0]],v=.018;e.quad([h[0]-u[0]*v,h[1],h[2]-u[2]*v],[h[0]+u[0]*v,h[1],h[2]+u[2]*v],[c[0]+u[0]*v,c[1]-.05,c[2]+u[2]*v],[c[0]-u[0]*v,c[1]-.05,c[2]-u[2]*v],[-l[0],.5,-l[2]],Ft.IRON)}{let c=Lr(0),f=a(c,t,0),l=10;for(let p=0;p<l;p++){let h=p/l*2*To,u=(p+1)/l*2*To,v=(d,m,g)=>[f[0]+Math.cos(d)*m,g,f[2]+Math.sin(d)*m];e.quad(v(h,.035,0),v(u,.035,0),v(u,.035,r+.1),v(h,.035,r+.1),[Math.cos((h+u)/2),0,Math.sin((h+u)/2)],Ft.IRON),e.quad(v(h,.06,r+.1),v(u,.06,r+.1),v(u,.03,r+.2),v(h,.03,r+.2),[Math.cos((h+u)/2)*.8,.6,Math.sin((h+u)/2)*.8],Ft.IRON)}}return e}function a_(){let e=[],t=[],o=[],n=[];for(let a of h1){let[i,s,c,f,l,p]=a,h=e.length/3;for(let v=0;v<=7;v++){let d=v/7*2*To+p,m=Math.cos(d),g=Math.sin(d);e.push(i+m*f,s,c+g*f,i+m*f,s+l,c+g*f),t.push(m,0,g,m,0,g),o.push(0,l,p,1,l,p)}for(let v=0;v<7;v++){let d=h+v*2;n.push(d,d+2,d+3,d,d+3,d+1)}let u=e.length/3;e.push(i,s+l-.006,c),t.push(0,1,0),o.push(2,l,p);for(let v=0;v<7;v++){let d=v/7*2*To+p;e.push(i+Math.cos(d)*f,s+l,c+Math.sin(d)*f),t.push(0,1,0),o.push(1,l,p)}for(let v=0;v<7;v++)n.push(u,u+1+v,u+1+(v+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function i_(){let e=[],t=[],o=[],n=[];for(let r of h1){let[a,i,s,,c,f]=r,l=e.length/3;for(let p of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(p[0],p[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:e,corner:t,ph:o,idx:n}}function s_(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let f=new Int8Array(e,i,o*3);i+=o*3;let l=new Uint8Array(e,i,o),p=new Float32Array(o*3),h=new Float32Array(o*3),u=new Float32Array(o),v=Math.cos(tn.yaw),d=Math.sin(tn.yaw),m=tn.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,E=(r[2]+s[g*3+2]/65535*a[2])*m;p[g*3]=tn.x+v*y+d*E,p[g*3+1]=b,p[g*3+2]=tn.z-d*y+v*E;let k=f[g*3]/127,L=f[g*3+1]/127,R=f[g*3+2]/127;h[g*3]=v*k+d*R,h[g*3+1]=L,h[g*3+2]=-d*k+v*R,u[g]=l[g]}return{pos:p,nrm:h,mat:u,idx:new Uint32Array(c)}}function c_(){let e=[],t=(p,h)=>[St.x+Math.cos(p)*h,St.z+Math.sin(p)*h];e.push([[0,tt.z0],[Ci(tt.z0),tt.z0]]),e.push([[Ci(tt.z1),tt.z1],[0,tt.z1]]);let o=Math.asin((tt.z1-St.z)/Bt),n=72;for(let p=0;p<n;p++){let h=o+p/n*(2*To-2*o),u=o+(p+1)/n*(2*To-2*o);e.push([t(h,Bt-.25),t(u,Bt-.25)])}let r=Cf[0]-.55+.35;e.push([[r,_n.z0],[r,_n.z1]]);let a=2.4/wo.k,i=12;for(let p=0;p<i;p++){let h=Lr(p/i*a),u=Lr((p+1)/i*a);e.push([t(h,wo.ri-.2),t(u,wo.ri-.2)])}e.push([t(Lr(0),wo.ri-.2),t(Lr(0),Bt)]),e.push([t(Lr(a),wo.ri-.2),t(Lr(a),Bt)]);let s=Math.cos(tn.yaw),c=Math.sin(tn.yaw),f=tn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([p,h])=>[tn.x+(s*p+c*h)*f,tn.z+(-c*p+s*h)*f]);for(let p=0;p<4;p++)e.push([l[p],l[(p+1)%4]]);return e}Dr.exports=e=>{let t=n_(),o=r_(),n=a_(),r=i_(),a=Ri(),i=`
	precision highp float;
	${Q4.GLSL}
	uniform float time;
	${Im()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${$n(rr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${$n(St.x)}, ${$n(St.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${$n((wo.ri+wo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${$n(St.x)}, ${$n(St.z)});
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),p=e({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=s_(m);h=e({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let u=(()=>{let m=[],g=[],y=[],b=[],k=[St.x,rr-.3,St.z],L=[el.stoolX,.02,el.keyFront+.1],R=1.25,X=2.35;for(let O=0;O<=40;O++){let te=O/40*2*To,G=Math.cos(te),oe=Math.sin(te);m.push(k[0]+G*R,k[1],k[2]+oe*R,L[0]+G*X,L[1],L[2]+oe*X),g.push(G,.08,oe,G,.08,oe),y.push(1,0)}for(let O=0;O<40;O++){let te=O*2;b.push(te,te+1,te+3,te,te+3,te+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),v=e({vert:`
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
		}`,attributes:{position:u.pos,normal:u.nrm,hh:u.hh},elements:u.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function d(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(v(),p({halo:1}),p({halo:0}))}return d};Dr.exports.C=St;Dr.exports.R=Bt;Dr.exports.PASS=tt;Dr.exports.SURR=Wa;Dr.exports.OFF=Cf;Dr.exports.BAY=_n;Dr.exports.PATH=Rf;Dr.exports.PIANO=tn;Dr.exports.PLAY=el;Dr.exports.TOP=rr;Dr.exports.roomGLSL=Im;Dr.exports.segments=c_});var Wm=de((pS,jm)=>{"use strict";var l_=x0(),{addFlutedColumn:Fm,addStatue:f_,addPlant:h_}=hm(),$m=Li(),u_=Ss(),Ra=hr(),d_=va(),Is=Ii(),fo=14,kn=Ra.C.hallEnd+.35,Go=8,Mo=.35,u1=1.15,d1=1.15,p1=[18,29,40],p_=[[[0,0],[0,Is.PASS.z0]],[[0,Is.PASS.z1],[0,kn]],[[fo,kn],[fo,0]],[[0,0],[fo,0]],[[fo,kn],[0,kn]]],Hm=[];for(let e of p1)for(let t of[1.25,fo-1.25]){let o=u1/2,n=d1/2;Hm.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var If=12,Bm=2.95,Um=.62,$f=Bm+Um,Of=[{file:"venus.bin",x:1.85,z:kn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:fo-2.1,z:kn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Ra.NICHE_X[0],z:Ra.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Ra.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Ra.NICHE_X[1],z:Ra.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Ra.NICHE_PLINTH_TOP,mat:3}],v_={x0:Mo,x1:3.15,z0:3.6,z1:8.2,top:1},Gm=.8,Gf=1.17,tl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{tl.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),tl.push({x:fo-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function v1(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var Df=[];for(let e of[-1,1])Df.push(...v1(fo/2+e*$f,If,.85,.85));for(let e of Of.filter(t=>t.pedestal))Df.push(...v1(e.x,e.z,Gf*1.1,Gf*1.1));for(let e of tl)Df.push(...v1(e.x,e.z,.42,.42));var m_=p_.concat(Hm,Df,Is.segments());function g_(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=i;f++)for(let l=s;l<=c;l++)n(f,l,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let p=o.get(i+f+":"+(s+l));p&&c.push(...p)}return[...new Set(c)]}}}var Ff=[],Mn={curMat:[0,0,0]};function m1(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=Mn.curMat;return Ff.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function _o(e,t,o,n,r,a,i,s,c){let f=(l,p,h,u,v)=>{o.push(...m1(e,t,l,p,h,u,v))};f([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),f([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function Ps(e,t,o,n,r){let a=Mn,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(i,s,c),a.tri(s,f,c)}function Dm(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=Math.cos(c),p=Math.sin(c),h=Math.cos(f),u=Math.sin(f),v=[e+o*l,t+o*p],d=[e+o*h,t+o*u],m=[e+n*l,t+n*p],g=[e+n*h,t+n*u];Ps([v[0],v[1],r],[d[0],d[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Ps([v[0],v[1],a],[d[0],d[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;Ps([v[0],v[1],r],[d[0],d[1],r],[v[0],v[1],a],[d[0],d[1],a],[-Math.cos(y),-Math.sin(y),0]),Ps([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function x_(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=e+o*Math.cos(c),p=t+o*Math.sin(c),h=e+o*Math.cos(f),u=t+o*Math.sin(f);Ps([l,p,r],[h,u,r],[l,n,r],[h,n,r],[0,0,-1]),Ps([l,p,a],[h,u,a],[l,n,a],[h,n,a],[0,0,1])}}function y_(e,t,o,n){let r=fo/2,a=Bm,i=3,s=a+.42,c=s+.15,f=Um,l=$f,p=5.98,h=n-.45,u=n+.45,v=64,d=Fm(Mn,r-l,n,0,p,f);Fm(Mn,r+l,n,0,p,f),Mn.curMat=[0,0,0],Dm(r,i,a,s,h,u,v),Dm(r,i,s,c,h-.07,u+.07,v),x_(r,i,c,d+.05,h,u,v);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;_o(e,t,o,Math.min(y,b),i,h,Math.max(y,b),d+.05,u)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);_o(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=l+f*1.42+.45;_o(e,t,o,r-m,d,n-.7,r+m,d+.44,n+.7),_o(e,t,o,r-m+.12,d+.44,n-.62,r+m-.12,d+.7,n+.62),_o(e,t,o,r-m-.1,d+.7,n-.84,r+m+.1,d+.84,n+.84),_o(e,t,o,r-m-.22,d+.84,n-.96,r+m+.22,d+1,n+.96),_o(e,t,o,r-.3,i+a-.1,n-.56,r+.3,d,n+.56)}function qm(e,t,o,n,r){_o(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),_o(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),_o(e,t,o,n-u1/2,.4,r-d1/2,n+u1/2,Go-1.35,r+d1/2),_o(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),_o(e,t,o,n-.67,Go-1.58,r-.67,n+.67,Go-1.35,r+.67),_o(e,t,o,n-.82,Go-1.35,r-.82,n+.82,Go-1.05,r+.82),_o(e,t,o,n-.66,Go-1.05,r-.66,n+.66,Go-.78,r+.66),_o(e,t,o,n-.92,Go-.78,r-.92,n+.92,Go-.55,r+.92),_o(e,t,o,n-.78,Go-.55,r-.78,n+.78,Go-.3,r+.78),_o(e,t,o,n-.92,Go-.3,r-.92,n+.92,Go-.1,r+.92)}function Pf(e,t,o,n,r){r==="left"?(_o(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),_o(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(_o(e,t,o,fo-.14,1,n-3.8/2,fo+.08,5.7,n+3.8/2),_o(e,t,o,fo-.18,1+.18,n-3.8/2+.18,fo+.08+.04,5.7-.18,n+3.8/2-.18))}function b_(e,t,o,n){_o(e,t,o,.65,Go-.16,n-1.65,.65+.22,Go,n+1.65),_o(e,t,o,fo-.65-.22,Go-.16,n-1.65,fo-.65,Go,n+1.65),_o(e,t,o,.65,Go-.16,n-1.65,fo-.65,Go,n-1.43),_o(e,t,o,.65,Go-.16,n+1.43,fo-.65,Go,n+1.65),o.push(...m1(e,t,[.65+.22,Go-.16,n-1.43],[fo-.65-.22,Go-.16,n-1.43],[.65+.22,Go-.16,n+1.43],[fo-.65-.22,Go-.16,n+1.43],[0,-1,0]))}jm.exports=function(){let e=[],t=[],o=[];Ff=[],Mn=l_.createBuilder(e,t,o,Ff),o.push(...m1(e,t,[0,0,0],[fo,0,0],[0,0,kn],[fo,0,kn],[0,1,0])),u_.addSkylight(Mn,[0,0,0],kn),Mn.curMat=[0,0,0];{let c=Is.SURR;_o(e,t,o,-Mo,0,0,Mo,Go,c.z0),_o(e,t,o,-Mo,0,c.z1,Mo,Go,kn),_o(e,t,o,-Mo,c.top,c.z0,Mo,Go,c.z1)}_o(e,t,o,fo-Mo,0,Ra.C.z1,fo+Mo,Go,kn-Mo),_o(e,t,o,fo-Mo-.12,0,Ra.C.z1+2*Mo,fo-Mo,.42,kn-Mo),_o(e,t,o,fo-Mo-.07,.42,Ra.C.z1+2*Mo,fo-Mo,.5,kn-Mo);for(let[c,f]of[[0,Is.SURR.z0],[Is.SURR.z1,kn-Mo]])_o(e,t,o,Mo,0,c,Mo+.12,.42,f),_o(e,t,o,Mo,.42,c,Mo+.07,.5,f);_o(e,t,o,Mo,0,kn-Mo-.12,fo-Mo,.42,kn-Mo),_o(e,t,o,Mo,.42,kn-Mo-.07,fo-Mo,.5,kn-Mo),$m.addEntranceWall(Mn),$m.addFrames(Mn),Mn.curMat=[0,0,0],_o(e,t,o,-Mo,0,kn-Mo,fo+Mo,Go,kn+Mo),y_(e,t,o,If);for(let c of p1)qm(e,t,o,1.25,c),qm(e,t,o,fo-1.25,c);Pf(e,t,o,22,"left"),Pf(e,t,o,25,"right"),Pf(e,t,o,33,"left"),Pf(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)b_(e,t,o,c);Ra.addWing(Mn),Mn.curMat=[0,0,0];for(let c of Of.filter(f=>f.pedestal))f_(Mn,c.x,c.z,Gf,Gm);{let c=v_;Mn.curMat=[0,0,0],Mn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Mn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Mn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Mn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}d_.addAlcove(Mn);for(let c of tl)h_(Mn,c.x,c.z,c.seed,1,c.away);Mn.curMat=[0,0,0];let r=[[[fo,kn-.35],[0,kn-.35]],[[0,3],[0,10]],[[fo,15],[fo,22]],[[0,24],[0,31]],[[fo,33],[fo,40]],[[0,41],[0,46]]],a=g_(m_),i=(c,f)=>{let l=0,p=1/0;return r.forEach((h,u)=>{let v=(h[0][0]+h[1][0])/2,d=(h[0][1]+h[1][1])/2,m=Math.hypot(c-v,f-d);m<p&&(p=m,l=u)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:Of,occluders:[...p1.flatMap(c=>[[1.25,c,.78],[fo-1.25,c,.78]]),[fo/2-$f,If,.86],[fo/2+$f,If,.86],...Of.filter(c=>c.pedestal).map(c=>[c.x,c.z,Gf*1.12]),...tl.map(c=>[c.x,c.z,.34])],pedestalTop:Gm,mat:Ff,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:o}}});var g1=de((vS,Vm)=>{"use strict";var{doorLightGLSL:w_}=Li(),{skylightGLSL:__}=Ss(),{windowLightGLSL:M_,C:Kr}=hr(),{alcoveLightGLSL:k_}=va(),ma=e=>e.toFixed(4),E_=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();Vm.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([u,v,d])=>`ao = min(ao, contact(v_pos.xz, vec2(${u.toFixed(3)}, ${v.toFixed(3)}), ${d.toFixed(3)}));`).join(`
      `),i={c:[0,0,0,0],d:[1,0,0,0]},s=-1,c=[],f=u=>{let v=u&&u.tick!==void 0?u.tick:0;if(v!==s||c.length===0){s=v;let d=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-d[0],m.c[2]-d[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(i)}return c},l={},p="",h="";for(let u=0;u<8;u++)l["lightC"+u]=v=>f(v)[u].c,l["lightD"+u]=v=>f(v)[u].d,p+="uniform vec4 lightC"+u+", lightD"+u+`;
`,h+="pic += pictureLight(lightC"+u+", lightD"+u+`, v_pos, N);
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

    ${p}

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

    ${w_()}

    ${__()}

    ${M_()}

    ${k_()}

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
        step(abs(v_pos.z - ${ma(Kr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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

      // Botticino cream and Nero Marquina: a real marble pair, the dark
      // a deep grey-black rather than a hole, so the floor does not
      // shout louder than the paintings
      vec3 tileLight    = vec3(0.76, 0.71, 0.60);
      vec3 tileDark     = vec3(0.058, 0.056, 0.054);


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
        // the veins gather in drifts and vanish between them, as in a real block
        float drift = smoothstep(0.35, 0.75, vnoise(m * 0.45 + 2.0));
        marbleMaterial = mix(marbleMaterial, marbleVein, clamp(line1 * 0.11 + halo1 * 0.10 + line2 * 0.035, 0.0, 1.0) * drift * fadeFar(6.0, 26.0, dist * 0.8));
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

      // each tile is cut from its own part of the block: its veins run
      // their own way, wander, branch and fade (no repeating stripes)
      float va = rnd * 6.2832;
      vec2 vq = mat2(cos(va), sin(va), -sin(va), cos(va)) * tq * 1.6 + rnd * 37.0;
      // (the fine stone detail only near the eye: far tiles cannot show
      // it, and it is the floor's most expensive part)
      bool nearEye = detail && dist < 18.0;
      float vw = nearEye ? fbm(vq * 0.9) : 0.5;
      float vein = abs(sin(vq.x * 1.7 + vq.y * 0.6 + vw * 6.0));
      float veinFine = abs(sin(vq.x * 3.9 - vq.y * 1.2 + vw * 8.0 + 1.3));
      // the veins come and go across a tile
      float veinMask = nearEye ? smoothstep(0.25, 0.60, vnoise(vq * 0.5 + 4.0)) * fadeFar(12.0, 18.0, dist) : 0.0;
      // a vein is a soft cloud of mineral round a thin bright core, not a
      // drawn line
      vein = ((1.0 - smoothstep(0.0, 0.32, vein)) * 0.45 + (1.0 - smoothstep(0.0, 0.05, vein)) * 0.55) * veinMask
           + (1.0 - smoothstep(0.0, 0.03, veinFine)) * veinMask * 0.22;
      float cloudF = nearEye ? fbm(vq * 0.35 + 9.0) : 0.5;

      vec3 floorMaterial = mix(lightTile, darkTile, checker);
      floorMaterial *= 0.93 + 0.14 * mix(0.5, cloudF, fadeFar(12.0, 18.0, dist));
      // grey veins in the cream; white calcite veins in the black
      floorMaterial = mix(floorMaterial, vec3(0.55, 0.51, 0.45), clamp(vein, 0.0, 1.0) * 0.22 * (1.0 - checker));
      floorMaterial = mix(floorMaterial, vec3(0.62, 0.60, 0.57), clamp(vein, 0.0, 1.0) * 0.38 * checker);

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
                 + exp(-pow((v_pos.z - ${ma((Kr.z0+Kr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      float isBronze = isPot * step(v_pos.z, ${ma(Kr.z0+.3)}) * step(${ma(Kr.x0)}, v_pos.x);
      if (isBronze > 0.5) {
        float pat = detail ? fbm(vec2(v_pos.x * 7.0 + v_pos.z * 5.0, v_pos.y * 6.0)) : 0.5;
        // the patina sits where the hand and the weather do not reach: in
        // the downward-facing hollows
        float hollow = smoothstep(0.2, -0.6, N.y) * 0.6 + smoothstep(0.45, 0.75, pat) * 0.5;
        vec3 bronze = mix(vec3(0.115, 0.072, 0.040), vec3(0.060, 0.082, 0.062), clamp(hollow, 0.0, 1.0));
        material = bronze * (0.85 + 0.3 * pat);
      }
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${ma(Kr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${E_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${ma(Kr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${ma(Kr.z0)} || v_pos.z > ${ma(Kr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${ma(Kr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${ma(Kr.z0)}), ${ma(Kr.z1)} - v_pos.z), ${ma(Kr.x1)} - v_pos.x);
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
        if (isBronze > 0.5) {
          // bronze: the reflection takes the metal's own warm colour, the
          // highlights are wider and softer, and the patina dulls them
          finalColour -= (env * fres * 0.70 + vec3(1.0, 0.97, 0.92) * hot * 0.80) * ${.6.toFixed(3)} * 0.75;
          vec3 metal = vec3(0.95, 0.66, 0.40);
          float rubbed = detail ? smoothstep(0.35, 0.65, fbm(vec2(v_pos.y * 9.0, v_pos.x * 9.0 + v_pos.z * 7.0))) : 0.5;
          vec3 Lp = normalize(nicheLamp(v_pos) - v_pos);
          float spec = pow(max(dot(R, Lp), 0.0), mix(18.0, 48.0, rubbed));
          float sheen = pow(max(dot(R, Lp), 0.0), 5.0);
          float lit = max(dot(N, Lp), 0.0);
          finalColour += material * vec3(1.0, 0.86, 0.66) * lit * 0.9;
          finalColour += metal * (spec * mix(0.35, 0.9, rubbed) + sheen * 0.10) + metal * env * fres * 0.18;
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var Ym=de((mS,Xm)=>{"strict mode";var S_="https://api.artic.edu/api/v1/artworks/search",A_=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,T_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",L_="&fields=image_id,title,artist_title",z_={low:400,mid:843,high:1686};Xm.exports={fetchList:async function(e,t){let o=S_+T_+L_+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=A_(e,z_[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var Zm=de((gS,Qm)=>{"use strict";var N_=Gu(),R_=ua(),C_=e=>"images/web/"+e.slug+(R_.isPhone?"-1024":"")+".webp";async function Km(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Qm.exports={fetchList:async function(e,t){return N_.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await Km(C_(e))}catch(o){t=await Km("images/"+e.file)}return{title:e.title,image:t}}}});var e2=de((xS,Jm)=>{"strict mode";Jm.exports={default:"local",artic:Ym(),local:Zm()}});var y1=de((yS,o2)=>{"strict mode";var M0=document.createElement("canvas"),x1=M0.width=M0.height=1024,Oi=M0.getContext("2d");Oi.mozImageSmoothingEnabled=!1;Oi.webkitImageSmoothingEnabled=!1;Oi.font="32px Verdana";Oi.textBaseline="bottom";Oi.fillStyle="#aaa";function t2(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(r).width>o&&f>1;){f--,r=a="";for(var p=0;p<l;p++)p<f?(r+=c[p],p+1<f&&(r+=" ")):(a+=c[p],p+1<l&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=t2(e,a,o,n),i>s&&(s=i)),s}o2.exports={init(e,t,o=x1){var n=[];t2(Oi,t,Math.min(o*x1,x1),n),Oi.clearRect(0,0,M0.width,M0.height);for(var r=0;r<n.length;r++)Oi.fillText(n[r],0,M0.height-(Math.max(n.length,3)-r)*32);return e({data:M0,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var a2=de((bS,r2)=>{"strict mode";var b1=e2(),P_=new URLSearchParams(window.location.search).get("api"),n2=b1[P_]||b1[b1.default],I_=y1(),w1={},Fs=[],O_=2;function F_(e){return(!navigator.connection||navigator.connection.downlink<O_)&&(e=e=="high"?"mid":"low"),e}var $_=ua(),Os=document.createElement("canvas");Os.width=Os.height=$_.isPhone?1024:2048;var k1=Os.getContext("2d");k1.imageSmoothingEnabled=!0;k1.imageSmoothingQuality="high";var _1=!1,G_=e=>[(Fs.pop()||e.texture)([[[200,200,200]]]),t=>(Fs.pop()||e.texture)([[[0,0,0,0]]]),1];async function M1(e,t,o){_1===!1&&(_1=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await n2.fetchImage(t,F_(o));r=a.title,n=await createImageBitmap(a.image),k1.drawImage(n,0,0,Os.width,Os.height)}catch(a){return console.error(a),o=="high"?await M1(e,t,"low"):G_(e)}return[(Fs.pop()||e.texture)({data:Os,min:"mipmap",mipmap:"nice",aniso:_1,flipY:!0}),a=>I_.init(Fs.pop()||e.texture,r,a),n.width/n.height]}r2.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(w1).length;n2.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(w1[s.image_id]){--t===0&&r();return}w1[s.image_id]=s,M1(e,s,o).then(([c,f,l])=>{n({...s,tex:c,textGen:f,aspect:l}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,M1(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(Fs.push(e.tex),e.tex=void 0),e.text&&(Fs.push(e.text),e.text=void 0)}}});var s2=de((wS,i2)=>{i2.exports=D_;function D_(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var l2=de((_S,c2)=>{c2.exports=q_;function q_(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var h2=de((MS,f2)=>{f2.exports=H_;function H_(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var E1=de((kS,u2)=>{u2.exports=B_;function B_(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var p2=de((ES,d2)=>{d2.exports=U_;function U_(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var m2=de((SS,v2)=>{v2.exports=j_;function j_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],p=t[9],h=t[10],u=t[11],v=t[12],d=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,E=o*f-a*i,k=n*c-r*s,L=n*f-a*s,R=r*f-a*c,X=l*d-p*v,O=l*m-h*v,te=l*g-u*v,G=p*m-h*d,oe=p*g-u*d,D=h*g-u*m,W=y*D-b*oe+E*G+k*te-L*O+R*X;return W?(W=1/W,e[0]=(s*D-c*oe+f*G)*W,e[1]=(r*oe-n*D-a*G)*W,e[2]=(d*R-m*L+g*k)*W,e[3]=(h*L-p*R-u*k)*W,e[4]=(c*te-i*D-f*O)*W,e[5]=(o*D-r*te+a*O)*W,e[6]=(m*E-v*R-g*b)*W,e[7]=(l*R-h*E+u*b)*W,e[8]=(i*oe-s*te+f*X)*W,e[9]=(n*te-o*oe-a*X)*W,e[10]=(v*L-d*E+g*y)*W,e[11]=(p*E-l*L-u*y)*W,e[12]=(s*O-i*G-c*X)*W,e[13]=(o*G-n*O+r*X)*W,e[14]=(d*b-v*k-m*y)*W,e[15]=(l*k-p*b+h*y)*W,e):null}});var x2=de((AS,g2)=>{g2.exports=W_;function W_(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],p=t[9],h=t[10],u=t[11],v=t[12],d=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-u*m)-p*(c*g-f*m)+d*(c*u-f*h),e[1]=-(n*(h*g-u*m)-p*(r*g-a*m)+d*(r*u-a*h)),e[2]=n*(c*g-f*m)-s*(r*g-a*m)+d*(r*f-a*c),e[3]=-(n*(c*u-f*h)-s*(r*u-a*h)+p*(r*f-a*c)),e[4]=-(i*(h*g-u*m)-l*(c*g-f*m)+v*(c*u-f*h)),e[5]=o*(h*g-u*m)-l*(r*g-a*m)+v*(r*u-a*h),e[6]=-(o*(c*g-f*m)-i*(r*g-a*m)+v*(r*f-a*c)),e[7]=o*(c*u-f*h)-i*(r*u-a*h)+l*(r*f-a*c),e[8]=i*(p*g-u*d)-l*(s*g-f*d)+v*(s*u-f*p),e[9]=-(o*(p*g-u*d)-l*(n*g-a*d)+v*(n*u-a*p)),e[10]=o*(s*g-f*d)-i*(n*g-a*d)+v*(n*f-a*s),e[11]=-(o*(s*u-f*p)-i*(n*u-a*p)+l*(n*f-a*s)),e[12]=-(i*(p*m-h*d)-l*(s*m-c*d)+v*(s*h-c*p)),e[13]=o*(p*m-h*d)-l*(n*m-r*d)+v*(n*h-r*p),e[14]=-(o*(s*m-c*d)-i*(n*m-r*d)+v*(n*c-r*s)),e[15]=o*(s*h-c*p)-i*(n*h-r*p)+l*(n*c-r*s),e}});var b2=de((TS,y2)=>{y2.exports=V_;function V_(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],l=e[9],p=e[10],h=e[11],u=e[12],v=e[13],d=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,E=o*s-n*i,k=o*c-r*i,L=n*c-r*s,R=f*v-l*u,X=f*d-p*u,O=f*m-h*u,te=l*d-p*v,G=l*m-h*v,oe=p*m-h*d;return g*oe-y*G+b*te+E*O-k*X+L*R}});var _2=de((LS,w2)=>{w2.exports=X_;function X_(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],l=t[7],p=t[8],h=t[9],u=t[10],v=t[11],d=t[12],m=t[13],g=t[14],y=t[15],b=o[0],E=o[1],k=o[2],L=o[3];return e[0]=b*n+E*s+k*p+L*d,e[1]=b*r+E*c+k*h+L*m,e[2]=b*a+E*f+k*u+L*g,e[3]=b*i+E*l+k*v+L*y,b=o[4],E=o[5],k=o[6],L=o[7],e[4]=b*n+E*s+k*p+L*d,e[5]=b*r+E*c+k*h+L*m,e[6]=b*a+E*f+k*u+L*g,e[7]=b*i+E*l+k*v+L*y,b=o[8],E=o[9],k=o[10],L=o[11],e[8]=b*n+E*s+k*p+L*d,e[9]=b*r+E*c+k*h+L*m,e[10]=b*a+E*f+k*u+L*g,e[11]=b*i+E*l+k*v+L*y,b=o[12],E=o[13],k=o[14],L=o[15],e[12]=b*n+E*s+k*p+L*d,e[13]=b*r+E*c+k*h+L*m,e[14]=b*a+E*f+k*u+L*g,e[15]=b*i+E*l+k*v+L*y,e}});var k2=de((zS,M2)=>{M2.exports=Y_;function Y_(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,f,l,p,h,u,v,d,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],l=t[4],p=t[5],h=t[6],u=t[7],v=t[8],d=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=l,e[5]=p,e[6]=h,e[7]=u,e[8]=v,e[9]=d,e[10]=m,e[11]=g,e[12]=i*n+l*r+v*a+t[12],e[13]=s*n+p*r+d*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=f*n+u*r+g*a+t[15]),e}});var S2=de((NS,E2)=>{E2.exports=K_;function K_(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var T2=de((RS,A2)=>{A2.exports=Q_;function Q_(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,f,l,p,h,u,v,d,m,g,y,b,E,k,L,R,X,O,te,G,oe,D,W,Ae;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),f=Math.cos(o),l=1-f,p=t[0],h=t[1],u=t[2],v=t[3],d=t[4],m=t[5],g=t[6],y=t[7],b=t[8],E=t[9],k=t[10],L=t[11],R=r*r*l+f,X=a*r*l+i*c,O=i*r*l-a*c,te=r*a*l-i*c,G=a*a*l+f,oe=i*a*l+r*c,D=r*i*l+a*c,W=a*i*l-r*c,Ae=i*i*l+f,e[0]=p*R+d*X+b*O,e[1]=h*R+m*X+E*O,e[2]=u*R+g*X+k*O,e[3]=v*R+y*X+L*O,e[4]=p*te+d*G+b*oe,e[5]=h*te+m*G+E*oe,e[6]=u*te+g*G+k*oe,e[7]=v*te+y*G+L*oe,e[8]=p*D+d*W+b*Ae,e[9]=h*D+m*W+E*Ae,e[10]=u*D+g*W+k*Ae,e[11]=v*D+y*W+L*Ae,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var z2=de((CS,L2)=>{L2.exports=Z_;function Z_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],l=t[9],p=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+f*n,e[5]=i*r+l*n,e[6]=s*r+p*n,e[7]=c*r+h*n,e[8]=f*r-a*n,e[9]=l*r-i*n,e[10]=p*r-s*n,e[11]=h*r-c*n,e}});var R2=de((PS,N2)=>{N2.exports=J_;function J_(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],l=t[9],p=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-f*n,e[1]=i*r-l*n,e[2]=s*r-p*n,e[3]=c*r-h*n,e[8]=a*n+f*r,e[9]=i*n+l*r,e[10]=s*n+p*r,e[11]=c*n+h*r,e}});var P2=de((IS,C2)=>{C2.exports=e6;function e6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],l=t[5],p=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+f*n,e[1]=i*r+l*n,e[2]=s*r+p*n,e[3]=c*r+h*n,e[4]=f*r-a*n,e[5]=l*r-i*n,e[6]=p*r-s*n,e[7]=h*r-c*n,e}});var O2=de((OS,I2)=>{I2.exports=t6;function t6(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var $2=de((FS,F2)=>{F2.exports=o6;function o6(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,f=a+a,l=n*s,p=n*c,h=n*f,u=r*c,v=r*f,d=a*f,m=i*s,g=i*c,y=i*f;return e[0]=1-(u+d),e[1]=p+y,e[2]=h-g,e[3]=0,e[4]=p-y,e[5]=1-(l+d),e[6]=v+m,e[7]=0,e[8]=h+g,e[9]=v-m,e[10]=1-(l+u),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var D2=de(($S,G2)=>{G2.exports=n6;function n6(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var H2=de((GS,q2)=>{q2.exports=r6;function r6(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var U2=de((DS,B2)=>{B2.exports=a6;function a6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var W2=de((qS,j2)=>{j2.exports=i6;function i6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var X2=de((HS,V2)=>{V2.exports=s6;function s6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var K2=de((BS,Y2)=>{Y2.exports=c6;function c6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,f=o*i,l=n*i,p=n*s,h=r*i,u=r*s,v=r*c,d=a*i,m=a*s,g=a*c;return e[0]=1-p-v,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-v,e[6]=u+d,e[7]=0,e[8]=h+m,e[9]=u-d,e[10]=1-f-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Z2=de((US,Q2)=>{Q2.exports=l6;function l6(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var eg=de((jS,J2)=>{J2.exports=f6;function f6(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var og=de((WS,tg)=>{tg.exports=h6;function h6(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*f*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var rg=de((VS,ng)=>{ng.exports=u6;function u6(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var ig=de((XS,ag)=>{var d6=E1();ag.exports=p6;function p6(e,t,o,n){var r,a,i,s,c,f,l,p,h,u,v=t[0],d=t[1],m=t[2],g=n[0],y=n[1],b=n[2],E=o[0],k=o[1],L=o[2];return Math.abs(v-E)<1e-6&&Math.abs(d-k)<1e-6&&Math.abs(m-L)<1e-6?d6(e):(l=v-E,p=d-k,h=m-L,u=1/Math.sqrt(l*l+p*p+h*h),l*=u,p*=u,h*=u,r=y*h-b*p,a=b*l-g*h,i=g*p-y*l,u=Math.sqrt(r*r+a*a+i*i),u?(u=1/u,r*=u,a*=u,i*=u):(r=0,a=0,i=0),s=p*i-h*a,c=h*r-l*i,f=l*a-p*r,u=Math.sqrt(s*s+c*c+f*f),u?(u=1/u,s*=u,c*=u,f*=u):(s=0,c=0,f=0),e[0]=r,e[1]=s,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=p,e[7]=0,e[8]=i,e[9]=f,e[10]=h,e[11]=0,e[12]=-(r*v+a*d+i*m),e[13]=-(s*v+c*d+f*m),e[14]=-(l*v+p*d+h*m),e[15]=1,e)}});var cg=de((YS,sg)=>{sg.exports=v6;function v6(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var $s=de((KS,lg)=>{lg.exports={create:s2(),clone:l2(),copy:h2(),identity:E1(),transpose:p2(),invert:m2(),adjoint:x2(),determinant:b2(),multiply:_2(),translate:k2(),scale:S2(),rotate:T2(),rotateX:z2(),rotateY:R2(),rotateZ:P2(),fromRotation:O2(),fromRotationTranslation:$2(),fromScaling:D2(),fromTranslation:H2(),fromXRotation:U2(),fromYRotation:W2(),fromZRotation:X2(),fromQuat:K2(),frustum:Z2(),perspective:eg(),perspectiveFromFieldOfView:og(),ortho:rg(),lookAt:ig(),str:cg()}});var ug=de((QS,hg)=>{"use strict";var fg=a2(),pn=$s(),k0=hr(),m6=3e3,qf="high",S1,nl=.36,rl=13.64,Gs=k0.C.hallEnd-.01,al=k0.C.z0+.01,g6=.356,x6=13.644,y6=k0.C.hallEnd-.006,b6=k0.C.z0+.006,w6=.12,Bf=4,Ds=e=>dr[e]&&dr[e].cy||Bf,A1=.26,_6=5.6,M6=7,dr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Gs},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:k0.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:k0.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:k0.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function k6(e,t){let o=t&&t.maxH||_6,n=t&&t.maxW||M6,r=Math.min(o,n/e);return{width:r*e,height:r}}function E6(e,t,o){let n=dr[o],r=[],a=Ds(o)-t/2;return n.side==="left"?(pn.fromTranslation(r,[nl,a,n.z+e/2]),pn.rotateY(r,r,Math.PI/2)):n.side==="right"?(pn.fromTranslation(r,[rl,a,n.z-e/2]),pn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?pn.fromTranslation(r,[n.x-e/2,a,al]):(pn.fromTranslation(r,[7+e/2,a,Gs]),pn.rotateY(r,r,Math.PI)),pn.scale(r,r,[e,t,w6]),r}function S6(e,t,o){let n=dr[o],r=[],a=Ds(o)-t/2;return n.side==="left"?(pn.fromTranslation(r,[nl,a,n.z+e/2]),pn.rotateY(r,r,Math.PI/2)):n.side==="right"?(pn.fromTranslation(r,[rl,a,n.z-e/2]),pn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?pn.fromTranslation(r,[n.x-e/2,a,al]):(pn.fromTranslation(r,[7+e/2,a,Gs]),pn.rotateY(r,r,Math.PI)),r}function A6(e,t,o){let n=dr[o],r=[],a=Ds(o)-t/2-A1-.38;return n.side==="left"?(pn.fromTranslation(r,[g6,a,n.z+e/2]),pn.rotateY(r,r,Math.PI/2)):n.side==="right"?(pn.fromTranslation(r,[x6,a,n.z-e/2]),pn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?pn.fromTranslation(r,[n.x-e/2,a,b6]):(pn.fromTranslation(r,[7+e/2,a,y6]),pn.rotateY(r,r,Math.PI)),pn.scale(r,r,[2,2,2]),r}function T6(e,t,o){let n=dr[o],r=Ds(o)-t/2-A1-.38;return n.side==="left"?[nl+.55,r,n.z]:n.side==="right"?[rl-.55,r,n.z]:n.side==="corridor"?[n.x,r,al+.55]:[7,r,Gs-.55]}var ol=.42;function Hf(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function L6(e,t,o){let n=dr[o],r,a,i;n.side==="left"?(r=[nl,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[rl,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,al],a=[1,0,0],i=[0,0,1]):(r=[7,Gs],a=[1,0,0],i=[0,0,-1]);let s=Ds(o)+t/2+A1+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(u,v)=>[r[0]+i[0]*u,v,r[1]+i[2]*u],l=[.075,.062,.05],p=[{fixmodel:Hf(f(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Hf(f(ol/2,s),a,i,.02,.02,ol),fixcol:l,fixglow:0},{fixmodel:Hf(f(ol,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Hf(f(ol-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(ol,s-.02);return{fixtures:p,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}hg.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!dr[i])return;let{width:s,height:c}=k6(a.aspect,dr[i]),f=L6(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),o.push({...a,fixtures:f.fixtures,side:dr[i].side,model:E6(s,c,i),framemodel:S6(s,c,i),framesize:[s,c],textmodel:A6(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:T6(s,c,i),paintingPosition:dr[i].side==="left"?[nl+.05,Bf,dr[i].z]:dr[i].side==="right"?[rl-.05,Bf,dr[i].z]:dr[i].side==="corridor"?[dr[i].x,Ds(i),al+.05]:[7,Bf,Gs-.05],textGen:null})};return fg.fetch(e,dr.length,qf,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{fg.load(e,a,qf)}),qf="low",S1&&clearTimeout(S1),S1=setTimeout(()=>{qf="high"},m6)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var mg=de((ZS,vg)=>{"use strict";var z6=y1(),dg=ua(),pg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function N6(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];pg.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<pg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(i,s,f,i,f,c)}return{verts:t,elems:o}}var R6=`#extension GL_OES_standard_derivatives : enable
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
}`,C6=`
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
}`;vg.exports=e=>{let t=z6.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
			// (a gallery lights its paintings almost evenly: only a gentle
			// fall-off from top to bottom, never a hot spot at the top)
			pool = clamp(pool, 0.0, 1.3);
			float lamp = 0.93 + 0.14 * pow(pool, 0.5);

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
				sheen = (pow(nh, 90.0) * 0.055 * gloss + pow(nh, 18.0) * 0.016) * min(pool, 1.1) + fres * (0.03 + 0.03 * gloss);
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(dg.isPhone?1024:2048),detail:()=>dg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=N6(),r=e({frag:R6,vert:C6,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Vf=de((JS,_g)=>{"use strict";var{A:ar}=va(),{C:zn}=hr(),{DOOR:qs}=Li(),Xn=Ii(),yg=zn.hallEnd+.35,bg={arch:[13.6,0,ar.zc-ar.arch.r-.3,14.4,ar.arch.spring+ar.arch.r+.3,ar.zc+ar.arch.r+.3],mouth:[13.3,0,zn.z0-.3,14.3,8.2,zn.z1+.3],stair:[-.5,0,Xn.SURR.z0-.2,.5,Xn.SURR.top+.3,Xn.SURR.z1+.2],door:[qs.x0-.4,0,-.5,qs.x1+.4,qs.top+.4,.5],windows:[15.6,.4,zn.z1-.2,36.9,6.4,zn.z1+.9],farDoor:[zn.x1-.2,0,zn.zc-qs.r-.4,zn.x1+.9,qs.top+.4,zn.zc+qs.r+.4]},di={court:[ar.x0-.4,0,ar.z0-.3,ar.x1+.3,ar.domeTop+.5,ar.z1+.3],stair:[Xn.C.x-Xn.R-2.6,0,Xn.C.z-Xn.R-1.5,.5,15.6,Xn.C.z+Xn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,zn.z1,46,60,zn.z1+110],florence:[zn.x1,-1,zn.zc-30,zn.x1+80,60,zn.zc+30]},P6=[[0,0,0,14,0,yg],[13.6,0,zn.z0,zn.x1+.4,0,zn.z1],[ar.x0-.4,0,ar.z0,ar.x1,0,ar.z1],[Xn.C.x-Xn.R-2.6,0,Xn.C.z-Xn.R,.4,0,Xn.C.z+Xn.R]],I6={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},il=new Float64Array(24),Ca=[7,2,2],wg=0,E0="out",Wf=!0;try{/[?&]nocull\b/.test(location.search)&&(Wf=!1)}catch(e){}var Uf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},jf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},gg=!0;function O6(e){let t=s=>[e[s],e[4+s],e[8+s],e[12+s]],o=t(0),n=t(1),r=t(2),a=t(3),i=(s,c,f,l)=>{for(let p=0;p<4;p++)il[s*4+p]=c[p]+f*l[p]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function Fi(e,t){if(!Wf)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=il[r*4],i=il[r*4+1],s=il[r*4+2],c=il[r*4+3],f=a>0?e[3]:e[0],l=i>0?n:o,p=s>0?e[5]:e[2];if(a*f+i*l+s*p+c<0)return!1}return!0}var T1=(e,t)=>Ca[0]>e[0]-t&&Ca[0]<e[3]+t&&Ca[2]>e[2]-t&&Ca[2]<e[5]+t;function F6(e){if(T1(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-Ca[0],a=(n&2?e[5]:e[2])-Ca[2],i=Math.atan2(r,a)-wg;i-=Math.round(i/(2*Math.PI))*2*Math.PI,t=Math.min(t,i),o=Math.max(o,i)}return o-t>Math.PI?null:[t,o]}function xg(e,t,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=F6(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of e){let s=bg[i];if(!T1(s,.6)&&(!Fi(s,o)||!a(s)))return!1}return Fi(t,o)&&a(t)}function $6(){let e=Ca[0],t=Ca[2];return e<0&&t>Xn.C.z-Xn.R-1.5&&e>Xn.C.x-Xn.R-2.6?"stair":e>14.1&&t>ar.z0-.3&&t<ar.z1+.3&&e<ar.x1+.3?"court":e>13.9&&t>zn.z0-.4&&t<zn.z1+.1&&e<zn.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<yg?"hall":"out"}var G6={PORTAL:bg,ROOM:di,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*e[r*4+s];n[r*4+a]=i}O6(n),Ca[0]=o[0],Ca[1]=o[1],Ca[2]=o[2],wg=Math.atan2(-e[2],-e[10]),E0=$6();for(let r in di)if(!Wf||E0==="out"||E0===r||T1(di[r],.3))Uf[r]=Fi(di[r],!1)||E0===r,jf[r]=Fi(di[r],!0)||E0===r;else{let a=I6[E0][r];Uf[r]=a?xg(a,di[r],!1):Fi(di[r],!1),jf[r]=a?xg(a,di[r],!0):Fi(di[r],!0)}gg=!Wf||P6.some(r=>Fi(r,!1))},get zone(){return E0},room(e,t){return t?jf[e]:Uf[e]},box(e,t,o){return o&&!(t?jf[o]:Uf[o])?!1:Fi(e,t)},get floor(){return gg}};_g.exports=G6});var kg=de((eA,Mg)=>{"use strict";var D6=g1(),q6=Vf();function H6(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let p=0;p<3;p++)a.push(t.getFloat32(12+p*4,!0)),i.push(t.getFloat32(24+p*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,r);s+=r*2;let l=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:f,nrm:l}}Mg.exports=(e,t)=>{let o=[],n=(r,a)=>{let i=[],s=[],c=[],f=[],l=a.height*.75,p=a.base!==void 0?a.base:t.pedestalTop,h={offset:0,count:r.nI,box:[a.x-l,p-.1,a.z-l,a.x+l,p+a.height+.2,a.z+l]},u=a.height,v=Math.cos(a.yaw),d=Math.sin(a.yaw),m=p;for(let g=0;g<r.nV;g++){let y=(r.mn[0]+r.pos[g*3]/65535*r.sz[0])*u,b=(r.mn[1]+r.pos[g*3+1]/65535*r.sz[1])*u,E=(r.mn[2]+r.pos[g*3+2]/65535*r.sz[2])*u;i.push(a.x+v*y+d*E,m+b,a.z-d*y+v*E);let k=r.nrm[g*3]/127,L=r.nrm[g*3+1]/127,R=r.nrm[g*3+2]/127;s.push(v*k+d*R,L,-d*k+v*R),c.push(a.mat||1,0,0)}for(let g=0;g<r.nI;g++)f.push(r.idx[g]);f.length!==0&&o.push({range:h,draw:D6(e,{position:i,normal:s,mat:c,elements:f,lights:t.lights,get viewer(){return t.viewer}},!1,!0)})};return t.statues.forEach(r=>{fetch("res/"+r.file).then(a=>{if(!a.ok)throw new Error("Could not load "+r.file);return a.arrayBuffer()}).then(a=>n(H6(a),r)).catch(a=>console.error(a))}),function(r){let a=!!(r&&r.reflected);for(let i=0;i<o.length;i++){let s=o[i];q6.box(s.range.box,a)&&s.draw([s.range])}}}});var Ig=de((tA,z1)=>{"use strict";var B6=x0(),Gn=1.29032,A0=[9.2968,2,5.9],U6=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Xf=2147.64,Eg=725,Sg=1288,Ag=1450,Tg=2576,qr=-5.197,L0=3.865,$i=10.135,z0=-14.679,sl=-30.229,cl=7.232,Lg=-45.713,Hs=17.1*Gn,T0=16.6*Gn,ll=16.6*Gn,zg=[6.9,17.1],Yf=[2.95,16.6],j6=1.6,W6=0,V6=1,Ng=2,L1=3,Rg=4,Cg=5,X6=6;function Y6(){let e=[],t=[],o=[],n=[],r=B6.createBuilder(e,t,o,n),a=(f,l,p,h,u,v,d=1,m=1)=>{let g=[];for(let y=0;y<=d;y++){let b=[];for(let E=0;E<=m;E++){let k=[f[0]+l[0]*y/d+p[0]*E/m,f[1]+l[1]*y/d+p[1]*E/m,f[2]+l[2]*y/d+p[2]*E/m],L=v(k);b.push(r.vert(k,h,[u,L[0],L[1]]))}g.push(b)}for(let y=0;y<d;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=f=>l=>[(A0[2]-l[2])/Gn-f,l[1]/Gn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],W6,f=>[f[0]/Gn,f[2]/Gn],13,14),a([L0,0,qr],[0,0,z0-qr],[0,Hs,0],[1,0,0],V6,i(8.6),6,6),a([-40,0,qr],[L0+40,0,0],[0,Hs,0],[0,0,1],Ng,f=>[(L0-f[0])/Gn,f[1]/Gn],8,4),a([-40,0,-.36],[0,0,qr+.36],[0,Hs,0],[1,0,0],Ng,f=>[-f[2]/Gn,f[1]/Gn]),a([$i,0,-80],[0,0,qr+80],[0,T0,0],[-1,0,0],Rg,i(8.6),12,6),a([$i,0,qr],[60,0,0],[0,T0,0],[0,0,1],Cg,f=>[(f[0]-$i)/Gn,f[1]/Gn],8,4),a([70,0,qr],[0,0,-.36-qr],[0,T0,0],[-1,0,0],Cg,f=>[-f[2]/Gn,f[1]/Gn]);let s=f=>[(f[0]-A0[0])/Gn+4.18,f[1]/Gn];a([-20,0,sl],[cl+20,0,0],[0,ll,0],[0,0,1],L1,s,8,6),a([cl,0,sl],[0,0,Lg-sl],[0,ll,0],[1,0,0],L1,i(28),4,4),a([cl,0,Lg],[$i-cl,0,0],[0,T0,0],[0,0,1],Rg,f=>[(f[0]-A0[0])/Gn,f[1]/Gn],2,4),a([-20,0,z0],[0,0,sl-z0],[0,ll,0],[1,0,0],L1,i(16),4,4);let c=(f,l,p,h)=>a(f,l,p,h,X6,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function S0(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Pa=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",K6=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,z0],[L0,Hs,qr]],[[$i,0,-80],[70,T0,qr]],[[-20,0,-80],[cl,ll,sl]],[[-40,0,-80],[-20,ll,z0]]],Q6=K6.map(e=>`if (hitBox(ro, rd, ${Pa(e[0])}, ${Pa(e[1])}, 1e4) ) return 0.0;`).join(`
		`),Pg="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>U6[t][e].toFixed(6)).join(", ")).join(", ")+")",Z6=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Pa([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${Q6}
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
	vec3 ro = ${Pa(A0)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Pa([-40,0,z0])}, ${Pa([L0-.02,Hs,qr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Pa([$i+.02,0,-80])}, ${Pa([70,T0,qr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${Pg} * (p - ${Pa(A0)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Eg.toFixed(2)} + ${Xf.toFixed(3)} * pc.x / pc.z) / ${Ag.toFixed(1)},
		(${Sg.toFixed(2)} - ${Xf.toFixed(3)} * pc.y / pc.z) / ${Tg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${Pg} * (p - ${Pa(A0)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Eg.toFixed(2)} + ${Xf.toFixed(3)} * pc.x / pc.z) / ${Ag.toFixed(1)},
		(${Sg.toFixed(2)} - ${Xf.toFixed(3)} * pc.y / pc.z) / ${Tg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Pa(A0)}), n));
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
		base = texture2D(cobbleTex, fuv / ${j6.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${zg[0].toFixed(2)}, 1.0 - fuv.y / ${zg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Yf[0].toFixed(2)}, 1.0 - fuv.y / ${Yf[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Yf[0].toFixed(2)}, 1.0 - fuv.y / ${Yf[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(L0-.05).toFixed(3)} && v_pos.x < ${($i+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${z0.toFixed(3)};
		projectable = projectable && v_pos.z < ${(qr+4.5).toFixed(3)};
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
}`,J6=`
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
}`,eM=ur();z1.exports=e=>{let t=Y6(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=S0(e,"res/street/photo.jpg",o,[190,160,120]),i=S0(e,"res/street/photo_night.jpg",o,[12,14,22]),s=S0(e,"res/street/photo_mask.png",o,[255,255,255]),c=S0(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=S0(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=S0(e,"res/street/facade_cream.jpg",n,[215,200,175]),p=S0(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),u=e({frag:Z6,vert:J6,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:p,photoNight:i,night:()=>eM.night,time:()=>(Date.now()-h)/1e3}});return function(){u()}};z1.exports.layout={MOUTH_Z:qr,PINK_X:L0,RIGHT_X:$i,PINK_H:Hs,CREAM_H:T0,S:Gn}});var $g=de((oA,Fg)=>{"use strict";var tM=ur().GLSL,{glassPanes:oM}=Li(),Og=hr();function nM(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(oM(),[0,0,1]),o(Og.windowGlass(),[0,0,1]),o(Og.farDoorGlass(),[1,0,0]),{position:e,normal:t}}Fg.exports=e=>{let t=nM(),o=e({frag:`
		precision highp float;
		${tM}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var tx=de((nA,I1)=>{"use strict";var Ug=ur().GLSL,rM=x0(),N1=ua(),{wallWithHoles:aM,C:qi}=hr(),nt=.28,Z={westBack:14.4,westCol:15-nt,eastCol:37.4+nt,eastBack:41.8,south:qi.z1+.7,northCol:qi.z1+.7+16,northBack:qi.z1+.7+19,cx:(15+37.4)/2,cz:(qi.z1+.7+qi.z1+.7+16-nt)/2},Lo={x0:Z.westCol+nt,x1:Z.eastCol-nt,z0:Z.south,z1:Z.northCol-nt},vr=3.3,ul=.92,Hi=5.6,Gg=6,ga=11.9,Di=9.6,no={x0:Z.cx-2.9,x1:Z.cx+2.9,top:14.4},oh=7,jg=4,C1=(Z.eastCol-Z.westCol)/oh,iM=(Z.northCol-Z.south)/jg,Wg=3,pl=.26,P0=1.4,R0=1.1,Qf=3,Va=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),Ve={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},Xa=[],Vg=(e,t,o)=>[Z.cx+e,t,Z.cz+o],Zf=Vg(-5.9,0,3.4),Bi=.85,Gi={c:[Zf[0],4.6*Bi+.5,Zf[2]],r:[5*Bi,3.6*Bi,4.5*Bi]},Xg=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[Zf[0]+e.d[0]*Bi,e.d[1]*Bi+.5,Zf[2]+e.d[2]*Bi],r:e.r.map(t=>t*Bi),n:e.n}));for(let e of Xg)Xa.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var sM=[3.6,6.3,9];for(let e of sM){let t=8.6+e%1.7*.6;Xa.push({c:Vg(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var cM=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:Z.cx+e.d[0],z:Z.cz+e.d[1],bloom:e.bloom}));for(let e of cM)Xa.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var P1=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[Z.cx+Math.cos(t)*2.3,Z.cz+Math.sin(t)*2.3]});for(let[e,t]of P1)Xa.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Yg=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let p=l/f,h=o+(r-o)*p,u=n+(a-n)*p;i!==void 0&&Math.abs((r!==o?h:u)-i)<s||Yg.push([h,u])}};e(Lo.x0+.45,Lo.z0+1.2,Lo.x0+.45,Lo.z1-.45,Z.cz,1),e(Lo.x1-.45,Lo.z0+1.2,Lo.x1-.45,Lo.z1-.45,Z.cz,1),e(Lo.x0+.45,Lo.z1-.45,Lo.x1-.45,Lo.z1-.45,Z.cx,1.9)}var lM=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Jf=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function Us(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Dn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function fM(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var hM={north:[e=>[e[0],e[1],Z.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[Z.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[Z.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function Kg(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var uM=Kg(Z.westCol,C1,oh,nt+pl,nt+pl),Dg=Kg(Z.south,iM,jg,.32,nt+pl),Bs=[Z.cx-32.35,Z.northCol-77],dM=Array.from({length:oh-1},(e,t)=>Z.westCol+(t+1)*C1),Qg=e=>(e[1]-e[0])/2-.2,dl=e=>(e[0]+e[1])/2;function pM(e,t){let o=dl(e),n=Qg(e);return{u0:e[0],u1:e[1],bottom:t?0:ul,head:r=>{let a=Math.abs(r-o);return a<n?vr+Math.sqrt(n*n-a*a):vr},step:.05}}function vM(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[Ve.STONE,0,0]}}function mM(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[Ve.STONE,0,0]}}function qg(e,t,o){let[n,r]=hM[t],a=fM(e,n,r),i=[];o.arches.forEach((l,p)=>i.push(pM(l,p===o.open)));let s=[];for(let l of o.bays||o.arches){let p=dl(l);o.oculi&&i.push(vM(p,6.85,.3)),s.push({c:p,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])s.push(l);for(let l of s)i.push(mM(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])i.push(l);aM(a,{u0:o.u0,u1:o.u1,w0:-nt,w1:nt,top:o.top,holes:i,mat:[Ve.BRICK,0,0],revealMat:[Ve.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,p,h,u,v,d,m)=>{let g=n([l,p,h]),y=n([u,v,d]);Dn(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,p,h,u,v,d)=>Us(a,l,p,h,u,v,[d,0,0]);for(let l of o.arches){let p=dl(l),h=Qg(l),u=28;for(let v of[nt,-nt]){let d=v>0?1:-1,m=v+d*.025;for(let g=0;g<u;g++){let y=Math.PI*g/u,b=Math.PI*(g+1)/u,E=(G,oe)=>[p+Math.cos(G)*oe,vr+Math.sin(G)*oe],k=E(y,h),L=E(b,h),R=E(y,h+.26),X=E(b,h+.26);f([k[0],k[1],m],[L[0],L[1],m],[X[0],X[1],m],[R[0],R[1],m],[0,0,d],Ve.STONE);let O=Math.cos((y+b)/2),te=Math.sin((y+b)/2);f([R[0],R[1],v],[X[0],X[1],v],[X[0],X[1],m],[R[0],R[1],m],[O,te,0],Ve.STONE)}}}if(o.arches.forEach((l,p)=>{p!==o.open&&c(l[0]-.02,ul,-nt-.05,l[1]+.02,ul+.09,nt+.05,Ve.STONE)}),c(o.u0,Gg,-nt,o.u1,Gg+.18,nt+.09,Ve.STONE),c(o.u0,o.win[0]-.12,nt-.01,o.u1,o.win[0],nt+.06,Ve.STONE),o.cornice)for(let[l,p,h]of o.cornice)c(l,h-.22,nt-.01,p,h,nt+.16,Ve.STONE),c(l,h,nt-.01,p,h+.16,nt+.42,Ve.STONE);for(let{c:l,y0:p,y1:h,w:u,door:v}of s){let d=u/2;if(f([l-d-.01,p,.06],[l+d+.01,p,.06],[l+d+.01,h,.06],[l-d-.01,h,.06],[0,0,1],v?Ve.DARK:Ve.PANE),v){c(l-d-.16,0,nt-.01,l-d,h+.16,nt+.07,Ve.STONE),c(l+d,0,nt-.01,l+d+.16,h+.16,nt+.07,Ve.STONE),c(l-d-.16,h,nt-.01,l+d+.16,h+.2,nt+.09,Ve.STONE),c(l-d,0,.07,l+d,h-.02,.12,Ve.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,Ve.DARK);continue}for(let m of[-1,1]){let g=l+m*d;c(g+m*.02,p+.02,nt+.02,g+m*(d+.025),h-.02,nt+.06,Ve.SHUTTER)}c(l-d-.09,h,nt-.01,l+d+.09,h+.16,nt+.05,Ve.STONE),c(l-d-.09,p-.1,nt-.01,l+d+.09,p,nt+.09,Ve.STONE),c(l-.015,p,.06,l+.015,h,.09,Ve.SHUTTER),c(l-d,(p+h)/2-.015,.06,l+d,(p+h)/2+.015,.09,Ve.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let p=dl(l);f([p-.31,6.54,0],[p+.31,6.54,0],[p+.31,7.16,0],[p-.31,7.16,0],[0,0,1],Ve.DARK)}for(let l of o.cols){let p=ul+.09,h=n([l,0,0]);Dn(e,h[0]-.24,p,h[2]-.24,h[0]+.24,p+.12,h[2]+.24,Ve.MARBLE),e.lathe([[.23,p+.12,1],[.24,p+.17],[.2,p+.24],[.215,p+.28],[.17,p+.34,1],[.165,p+.6],[.155,vr-.5],[.15,vr-.38,1],[.175,vr-.34,1],[.17,vr-.3],[.2,vr-.22],[.27,vr-.15],[.29,vr-.12,1]],h[0],h[2],18,{mat:()=>[Ve.MARBLE,0,0]}),Dn(e,h[0]-.29,vr-.12,h[2]-.29,h[0]+.29,vr+.01,h[2]+.29,Ve.STONE)}o.walk&&o.walk(e)}function gM(e){let t=[-1,0,1].map(r=>{let a=Z.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Ve.STONE,0,0]}});qg(e,"north",{u0:Z.westCol-nt,u1:Z.eastCol+nt,top:r=>r>no.x0+1e-6&&r<no.x1-1e-6?no.top:ga,cuts:[no.x0,no.x0+1e-5,no.x1-1e-5,no.x1],arches:uM,open:Wg,cols:dM,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[Z.westCol-nt-3.3,no.x0,ga],[no.x1,Z.eastCol+nt+3.3,ga],[no.x0-.2,no.x1+.2,no.top]],walk:r=>{Dn(r,Lo.x0,Hi,Z.northCol+nt,Lo.x1,Hi+.2,Z.northBack,Ve.PLASTER),Dn(r,Lo.x0,0,Z.northBack,Lo.x1,Hi,Z.northBack+.3,Ve.PLASTER);for(let a of[Z.cx-7.2,Z.cx,Z.cx+7.2])Us(r,[a-.8,0,Z.northBack-.01],[a+.8,0,Z.northBack-.01],[a+.8,2.9,Z.northBack-.01],[a-.8,2.9,Z.northBack-.01],[0,0,-1],[Ve.DARK,0,0]),Dn(r,a-.98,0,Z.northBack-.06,a+.98,3.12,Z.northBack,Ve.STONE),Us(r,[a-.8,0,Z.northBack-.07],[a+.8,0,Z.northBack-.07],[a+.8,2.9,Z.northBack-.07],[a-.8,2.9,Z.northBack-.07],[0,0,-1],[Ve.DARK,0,0])}}),Us(e,[no.x0,11,Z.northCol+.2],[no.x1,11,Z.northCol+.2],[no.x1,13.6,Z.northCol+.2],[no.x0,13.6,Z.northCol+.2],[0,0,-1],[Ve.DARK,0,0]),Dn(e,no.x0+.3,10.88,Z.northCol-nt-.06,no.x1-.3,11,Z.northCol-nt+.1,Ve.STONE),Dn(e,Z.westBack,Hi+.2,Z.northBack,Z.eastBack,ga,Z.northBack+3.4,Ve.BRICK),Dn(e,Z.westBack,Di,Z.northCol-nt,Z.westCol-nt,ga,Z.northCol+nt,Ve.BRICK),Dn(e,Z.eastCol+nt,Di,Z.northCol-nt,Z.eastBack,ga,Z.northCol+nt,Ve.BRICK),Dn(e,Z.westBack,Hi+.2,Z.northCol+nt+.12,Z.eastBack,ga,Z.northBack,Ve.BRICK),fl(e,[Z.westBack-.5,ga+.16,Z.northCol-nt-.42],[no.x0-Z.westBack+.5,0,0],[0,2.6,4.4],Ve.ROOF),fl(e,[no.x1,ga+.16,Z.northCol-nt-.42],[Z.eastBack+.5-no.x1,0,0],[0,2.6,4.4],Ve.ROOF),fl(e,[no.x0-.3,no.top+.16,Z.northCol-nt-.42],[no.x1-no.x0+.6,0,0],[0,1.4,3],Ve.ROOF),Hg(e,[no.x0-.3,no.top+.16,Z.northCol-nt-.42],[no.x0-.3,no.top+1.56,Z.northCol-nt+2.58],[no.x0-.3,no.top+.16,Z.northCol-nt+2.58],[-1,0,0],Ve.BRICK),Hg(e,[no.x1+.3,no.top+.16,Z.northCol-nt-.42],[no.x1+.3,no.top+1.56,Z.northCol-nt+2.58],[no.x1+.3,no.top+.16,Z.northCol-nt+2.58],[1,0,0],Ve.BRICK),Dn(e,no.x0,ga,Z.northCol+nt,no.x1,no.top,Z.northCol+2.6,Ve.BRICK);for(let[r,a]of[[Z.cx-9.8,Z.northBack+.6],[Z.cx+9.4,Z.northBack+.4],[Z.cx-4.6,Z.northBack+1]])Dn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,Ve.BRICK),Dn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,Ve.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];Dg.forEach((p,h)=>{let u=dl(p);h===1?c.push({c:u,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:u,y0:1,y1:2.75,w:1.05}),c.push({c:u,y0:3.85,y1:5.45,w:1.05})}),qg(e,r,{u0:Z.south,u1:Z.northCol-nt,top:()=>Di,arches:[],bays:Dg,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[Z.south,Z.northCol-nt,Di]]}),Dn(e,a,0,Z.south,i+s*(nt+.12),Di,Z.northBack+.3,Ve.BRICK);let f=i-s*nt;Dn(e,f,0,Z.south,f-s*.06,.55,Z.northCol-nt,Ve.STONE);let l=i-s*(nt+.42);fl(e,[l,Di+.16,Z.south],[0,0,Z.northCol-nt-Z.south],[a-l+s*.4,1.9,0],Ve.ROOF)};o("west",Z.westBack,Z.westCol),o("east",Z.eastBack,Z.eastCol);let n=qi.x1+.7;Dn(e,13.65,7.4,Z.south-.02,n,7.62,Z.south+.14,Ve.STONE),Dn(e,13.65,10.4,Z.south-.02,n,10.6,Z.south+.38,Ve.STONE),fl(e,[13.65,10.6,Z.south+.38],[n-13.65,0,0],[0,2.2,-5],Ve.ROOF)}function Hg(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function fl(e,t,o,n,r){let a=Jf([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,l)=>[t[0]+o[0]*f+n[0]*l,t[1]+o[1]*f+n[1]*l,t[2]+o[2]*f+n[2]*l];Us(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;Us(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],Jf([-n[0],0,-n[2]]),[r,0,0])}function xM(e){let t=Z.westBack,o=Z.eastBack,n=Z.south,r=Z.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let l=[t+(o-t)*c/a,0,n+(r-n)*f/i];s[c].push(e.vert(l,[0,1,0],[Ve.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var hl=.46,C0=.58,N0=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function yM(e,t,o){let n=R0+o,r=(e>0?Lo.x1-Z.cx:Z.cx-Lo.x0)-P0-o,a=R0+o,i=(t>0?Lo.z1-Z.cz:Z.cz-Lo.z0)-P0-o,s=Qf+o,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[r,i],[r,a],[f,a]],p=Math.atan2(a,f),h=Math.atan2(c,n);for(let u=1;u<10;u++){let v=p+(h-p)*u/10;l.push([Math.cos(v)*s,Math.sin(v)*s])}return l.map(([u,v])=>[Z.cx+e*u,Z.cz+t*v])}function bM(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,f=i,l=hl*.5,p=-l,h=a+l,u=[],v=Math.max(1,Math.ceil((h-p)/1));for(let d=0;d<=v;d++){let m=p+(h-p)*d/v,g=[];for(let y=0;y<N0.length;y++){let[b,E]=N0[y],k=Math.min(N0.length-2,y),L=N0[Math.max(0,y-1)],R=N0[Math.min(N0.length-1,y+1)],X=(R[0]-L[0])*hl,te=(R[1]-L[1])*C0,G=-X,oe=Math.hypot(te,G)||1,D=[t[0]+i*m+c*b*hl,E*C0,t[1]+s*m+f*b*hl],W=[c*(-te/oe),-G/oe,f*(-te/oe)];g.push(e.vert(D,W[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:W,[Ve.HEDGE,0,0]))}u.push(g)}for(let d=0;d<v;d++)for(let m=0;m<N0.length-1;m++)e.tri(u[d][m],u[d+1][m],u[d+1][m+1]),e.tri(u[d][m],u[d+1][m+1],u[d][m+1]);for(let[d,m]of[[0,-1],[v,1]]){let g=u[d],y=e.vert([t[0]+i*(d?h:p),C0*.5,t[1]+s*(d?h:p)],[i*m,0,s*m],[Ve.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function wM(e){for(let t of[-1,1])for(let o of[-1,1]){let n=yM(t,o,.3);for(let r=0;r<n.length;r++)bM(e,n[r],n[(r+1)%n.length])}}function _M(e){let t=Z.cx,o=Z.cz,n=()=>[Ve.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[Ve.DARK,0,0]});let r={mat:()=>[Ve.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*l*i*-1+0),1.95+Math.sin(f)*l,o])}e.tube(s,()=>.016,16,5,r)}}function MM(e){for(let[t,o]of P1)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[Ve.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[Ve.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[Ve.BARK,0,0]})}function kM(e){let[t,,o]=Gi.c,n=Jg(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Ve.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,p=[t+a*l,s*l,o+i*l],h=n()*Math.PI*2;e.tube([p,[p[0]+Math.cos(h)*1.3,p[1]+.9,p[2]+Math.sin(h)*1.3],[p[0]+Math.cos(h)*2.3,p[1]+1.4+n(),p[2]+Math.sin(h)*2.3]],u=>.08*(1-u*.7),8,6,{mat:()=>[Ve.BARK,0,0]})}}for(let a of Xa.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Ve.BARK,0,0]})}function EM(e){let t=()=>[Ve.FARBRICK,0,0],o=()=>[Ve.LEAD,0,0],n=(a,i,s,c,f,l)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let p=[];for(let u=0;u<=12;u++){let v=u/12*Math.PI/2,d=Math.cos(v)*s,m=Math.sin(v)*f;l&&(d*=1-.18*Math.sin(v*2)),p.push([Math.max(d,s*.12),c+m])}e.lathe(p,a,i,28,{mat:o});let h=c+f;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};Dn(e,14,0,104,52,26,150,Ve.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{Dn(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Ve.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function SM(e){let o=[Z.cx,0,Z.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],p=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[i].push(e.vert(p,[-l[0],-l[1],-l[2]],[Ve.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function AM(){let e=[],t=[],o=[],n=[],r=rM.createBuilder(e,t,o,n);return xM(r),gM(r),wM(r),_M(r),MM(r),kM(r),r.save(),r.translate(Bs[0],0,Bs[1]),EM(r),r.restore(),SM(r),{position:e,normal:t,elements:o,attr:n}}var Zg=[[[13.65,0,qi.z0-.7],[qi.x1+.7,10.6,Z.south]],[[Z.westBack,Hi,Z.northCol-nt],[Z.eastBack,ga,Z.northBack+3.4]],[[no.x0,ga,Z.northCol-nt],[no.x1,no.top,Z.northCol+2.6]],[[Z.westBack,0,Z.south],[Z.westCol+nt,Di,Z.northBack+.3]],[[Z.eastCol-nt,0,Z.south],[Z.eastBack,Di,Z.northBack+.3]],[[14+Bs[0],0,104+Bs[1]],[52+Bs[0],26,150+Bs[1]]]];function TM(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function Kf(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=s*s-i*c;if(f<=0)return 0;let l=Math.sqrt(f),p=Math.max(0,(-s-l)/i),h=(-s+l)/i;return Math.max(0,h-p)}function R1(e){for(let[t,o]of Zg)if(TM(e,Va,t,o))return 0;return 1}function Jg(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function LM(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=Jg(21),c=(v,d,m,g,y,b,E)=>{let k=e.length/3;for(let[L,R]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...v),t.push(L,R),o.push(d,m,g),n.push(...y),r.push(...b),a.push(...E);i.push(k,k+1,k+2,k,k+2,k+3)},f=(v,d)=>{let m=1;for(let g of Xa){if(g===d||!g.shadow)continue;let y=Kf(v,Va,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=Xa.map(v=>({...v,pts:null}));for(let v of l)for(let d=0;d<v.n;d++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(v.spindle){let D=b[1],W=Math.sqrt(Math.max(.02,1-D*D))*(D>0?1-D*.55:1+D*.25),Ae=Math.hypot(b[0],b[2])||1,Be=W*Math.min(1,Ae*1.4);b=[b[0]/Ae*Be,D,b[2]/Ae*Be]}v.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let E=[v.c[0]+b[0]*v.r[0],v.c[1]+b[1]*v.r[1],v.c[2]+b[2]*v.r[2]],k,L;if(v.magnolia){let D=0;for(let Be of Xg)D=Math.max(D,Kf(E,Va,Be.c,Be.r));k=Math.exp(-D*1.1);let W=1;for(let Be of Xa)if(!Be.magnolia&&Be.shadow){let Te=Kf(E,Va,Be.c,Be.r);Te>0&&(W*=Math.exp(-Te*.9))}k*=R1(E)*W;let Ae=lM(E,Gi.c);L=Jf([Ae[0]/Gi.r[0]+b[0]*.5,Ae[1]/Gi.r[1]+b[1]*.5,Ae[2]/Gi.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(Ae[0]/Gi.r[0],Ae[1]/Gi.r[1],Ae[2]/Gi.r[2])*.6+y*.4)}else{let D=Kf(E,Va,v.c,v.r);k=Math.exp(-D*(v.spindle?2.2:1.25)),k*=R1(E)*f(E,Xa[l.indexOf(v)]),L=Jf([b[0]/v.r[0],b[1]/v.r[1],b[2]/v.r[2]])}let R=Math.max(0,L[0]*Va[0]+L[1]*Va[1]+L[2]*Va[2]),X=.25+.75*Math.pow(y,1.5)*(.65+.35*(L[1]*.5+.5)),O=v.size[0]+(v.size[1]-v.size[0])*s(),te=.85+s()*.3,G=v.leaf.map(D=>D*te),oe=v.cell;v.cell===3&&s()<.35&&(oe=2),c(E,O,oe,s()*Math.PI*2,[k,X,.35+.65*R],G,v.bloom)}for(let[v,d]of Yg){let m=s()<.5;for(let g=0;g<3;g++){let y=[v+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],b=R1(y)*f(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let p=i.length/6,h=Array.from({length:p},(v,d)=>d);for(let v=p-1;v>0;v--){let d=Math.floor(s()*(v+1));[h[v],h[d]]=[h[d],h[v]]}let u=[];for(let v of h)for(let d=0;d<6;d++)u.push(i[v*6+d]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:u}}var ot=e=>e.toFixed(4),vl=e=>`vec3(${ot(e[0])}, ${ot(e[1])}, ${ot(e[2])})`,ex=`
const vec3 SUN = ${vl(Va)};
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
`,zM=Zg.map(([e,t])=>`if (hitBox(ro, SUN, ${vl(e)}, ${vl(t)})) return 0.0;`).join(`
	`),NM=Xa.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${vl(e.c)}, ${vl(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),RM=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${ot(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${ot(Hi)} && u > ${ot(o-nt)} && u < ${ot(o+n*r+nt)}) {
				float k = floor((u - ${ot(o)}) / ${ot(n)});
				float a = ${ot(o)} + k * ${ot(n)} + (k < 0.5 ? ${ot(a)} : 0.02);
				float b = ${ot(o)} + (k + 1.0) * ${ot(n)} - (k > ${ot(r-1.5)} ? ${ot(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${ot(s)}) < 0.5 ? 0.0 : ${ot(ul+.09)};
				bool hole = (q.y > sill && q.y < ${ot(vr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${ot(vr)} && d * d + (q.y - ${ot(vr)}) * (q.y - ${ot(vr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,eh=R0+.3,th=R0+.3,ml=Qf+.3,Bg=Lo.x1-Z.cx-P0-.3,CM=Lo.z1-Z.cz-P0-.3,PM=Z.cz-Lo.z0-P0-.3,IM=Math.sqrt(ml*ml-eh*eh),OM=Math.sqrt(ml*ml-th*th),FM=[[Z.cx,Z.cz,.86,1.18],[Z.cx,Z.cz,1.25,.3],...P1.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${ot(e)}, ${ot(t)}), ${ot(o)}, ${ot(n)})) return 0.0;`).join(`
	`),$M=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${ot(Z.cx)}, ${ot(Z.cz)}));
	float b1 = xz.y > ${ot(Z.cz)} ? ${ot(CM)} : ${ot(PM)};
	vec2 A = vec2(${ot(eh)}, ${ot(IM)}), Bp = vec2(${ot(eh)}, b1), C = vec2(${ot(Bg)}, b1);
	vec2 D = vec2(${ot(Bg)}, ${ot(th)}), E = vec2(${ot(OM)}, ${ot(th)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${ot(ml)}));
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
	${zM}
	${RM("z",Z.northCol,Z.westCol,C1,oh,nt+pl,nt+pl,Wg,"ro.z > "+ot(Z.northCol-nt))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${FM}
	if (ro.y < ${ot(C0)} && ro.x > ${ot(Lo.x0)} && ro.x < ${ot(Lo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${ot(C0)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${ot(hl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${ot(C0)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${NM}
	return tr;
}
`,GM=`
precision highp float;
${Ug}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${ex}
${$M}

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

	if (kind == ${Ve.SKY}.0) {
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

	if (kind == ${Ve.GROUND}.0) {
		bool yard = P.x > ${ot(Lo.x0)} && P.x < ${ot(Lo.x1)} && P.z < ${ot(Lo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${ot(Lo.x0)}, ${ot(Lo.x1)} - P.x);
			float ez = min(P.z - ${ot(Lo.z0)}, ${ot(Lo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${ot(Z.cx)}), dz = abs(P.z - ${ot(Z.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${ot(P0)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${ot(P0)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${ot(Qf)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${ot(Z.cz)}, P.x - ${ot(Z.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${ot(Qf)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${ot(R0)} || dz < ${ot(R0)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${ot(R0)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${ot(Z.cx)}, ${ot(Z.cz)})));
		}
	} else if (kind == ${Ve.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${Ve.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${Ve.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${Ve.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${ot(C0)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${Ve.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${Ve.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${Ve.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${Ve.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${Ve.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${Ve.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${Ve.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${Ve.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${Ve.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${Ve.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${Ve.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${ot(Z.westCol)} || P.x > ${ot(Z.eastCol)} || P.z > ${ot(Z.northCol)}) && P.y < ${ot(Hi+.05)} && P.z > ${ot(Z.south-.1)} && P.z < ${ot(Z.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${ot(Z.northCol)} ? P.z - ${ot(Z.northCol)} : (P.x < ${ot(Z.westCol)} ? ${ot(Z.westCol)} - P.x : P.x - ${ot(Z.eastCol)});
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
}`,DM=`
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
}`,qM=`
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
}`,HM=`
precision highp float;
${Ug}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${ex}
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
}`;function BM(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}I1.exports=e=>{let t=AM(),o=LM(),n=BM(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>N1.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:GM,vert:DM,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>N1.gardenDetail}}),s=e({frag:HM,vert:qM,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*N1.leafShare/6)*6});return function(){i(),s()}};I1.exports.layout={G:Z,YARD:Lo,SUN:Va}});var ix=de((rA,ax)=>{"use strict";var UM=ur().GLSL,jM=x0(),{C:rx}=hr(),mr=rx.x1+.35,G1=rx.zc,O1=[mr-7.3,2,G1],ox=5.2*Math.PI/180,nx=2100,WM=725,VM=1288,XM=1450,YM=2576,pi=G1-3.2,ah=G1+3.3,F1=mr+5,$1=mr+11.7,js=3.9,gl=mr+22.7,nh=40;function KM(){let e=[],t=[],o=[],n=[],r=jM.createBuilder(e,t,o,n),a=(l,p,h,u,v,d)=>{let m=[];for(let g=0;g<=v;g++){m.push([]);for(let y=0;y<=d;y++){let b=[0,1,2].map(E=>l[E]+p[E]*g/v+h[E]*y/d);m[g].push(r.vert(b,u,[0,0,0]))}}for(let g=0;g<v;g++)for(let y=0;y<d;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=ah-pi,s=.7;a([mr-s,0,pi],[F1-mr+s,0,0],[0,0,i],[0,1,0],6,4);let c=$1-F1,f=Math.hypot(c,js);return a([F1,0,pi],[c,js,0],[0,0,i],[-js/f,c/f,0],6,4),a([$1,js,pi],[gl-$1,0,0],[0,0,i],[0,1,0],6,4),a([mr-s,0,pi],[gl-mr+s,0,0],[0,nh,0],[0,0,1],12,12),a([mr-s,0,ah],[gl-mr+s,0,0],[0,nh,0],[0,0,-1],12,12),a([gl,0,pi],[0,nh,0],[0,0,i],[-1,0,0],8,4),a([mr-s,nh,pi],[gl-mr+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var zr=e=>e.toFixed(5),rh=[[mr+3.4,3.7,pi+.01,1],[mr+8.6,4.1,ah-.01,-1],[mr+14.8,js+3.3,pi+.01,1],[mr+19.6,js+3.6,ah-.01,-1]],QM=`
precision highp float;
${UM}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${rh.length};
vec4 LAMP[NLAMP];

void main() {
	${rh.map((e,t)=>`LAMP[${t}] = vec4(${zr(e[0])}, ${zr(e[1])}, ${zr(e[2])}, ${zr(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${zr(O1[0])}, ${zr(O1[1])}, ${zr(O1[2])});
	float c = ${zr(Math.cos(ox))}, s = ${zr(Math.sin(ox))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${zr(WM)} + ${zr(nx)} * d.z / fw, ${zr(VM)} - ${zr(nx)} * up / fw);
	vec2 uv = px / vec2(${zr(XM)}, ${zr(YM)});
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
	for (int i = 0; i < ${rh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,ZM=`
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
}`;ax.exports=e=>{let t=KM(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:QM,vert:ZM,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,f)=>{let[l,p,h]=s,u=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[v,d,m]of u){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+v[0]*c[0]+d[0]*y*c[0]+m[0]*b*c[0],p+v[1]*c[1]+d[1]*y*c[1]+m[1]*b*c[1],h+v[2]*c[2]+d[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...v),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of rh){let c=s[3],f=s[2]+c*.42;a([s[0],s[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let p of[-1,1])a([s[0]+l*.11,s[1],f+p*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,f],[.15,.03,.15],0),a([s[0],s[1]+.27,f],[.05,.05,.05],0),a([s[0],s[1]-.19,f],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var hx=de((aA,fx)=>{"use strict";var JM=ur().GLSL,{A:sh,BENCH:q1,SHAFT:D1,TREE:xl,oculusGLSL:ek}=va(),tk=ua(),ih=xl.sxz,sx=xl.sy,cx=xl.yaw;function ok(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let f=new Uint16Array(e,s,o*2);s+=o*4;let l=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let p=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:f,nrm:l,idx:p}}function nk(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(cx),i=Math.sin(cx);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*ih,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*sx,l=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*ih;t[s*3]=sh.cx+a*c+i*l,t[s*3+1]=q1.soil+.02+f,t[s*3+2]=sh.zc-i*c+a*l;let p=e.nrm[s*3]/127/ih,h=e.nrm[s*3+1]/127/sx,u=e.nrm[s*3+2]/127/ih,v=Math.hypot(p,h,u)||1;p/=v,h/=v,u/=v,o[s*3]=a*p+i*u,o[s*3+1]=h,o[s*3+2]=-i*p+a*u,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function lx(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var Yn=e=>e.toFixed(4),Ws=xl.crownC,Vs=xl.crownR,rk=`
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

const vec3 SHAFT = vec3(${Yn(D1[0])}, ${Yn(D1[1])}, ${Yn(D1[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${Yn(sh.cx)}, ${Yn(sh.zc)});
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
	vec3 cc = vec3(${Yn(Ws[0])}, ${Yn(Ws[1])}, ${Yn(Ws[2])});
	vec3 cr = vec3(${Yn(Vs[0])}, ${Yn(Vs[1])}, ${Yn(Vs[2])});
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
}`,Ui=Ri(),ak=`
precision highp float;
${JM}
uniform float time;
${Ui.lanternGLSL(Ui.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Ui.LANTERNS[Ui.TREE_LANTERN[0]].x.toFixed(3)}, ${Ui.LANTERNS[Ui.TREE_LANTERN[0]].y.toFixed(3)}, ${Ui.LANTERNS[Ui.TREE_LANTERN[0]].z.toFixed(3)});
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
	vec3 rel = (v_pos - vec3(${Yn(Ws[0])}, ${Yn(Ws[1])}, ${Yn(Ws[2])})) / vec3(${Yn(Vs[0])}, ${Yn(Vs[1])}, ${Yn(Vs[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${Yn(q1.soil)}, ${Yn(q1.soil+.5)}, v_pos.y);

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
}`;fx.exports=e=>{let t=null,o=lx(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=lx(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=nk(ok(a));t=e({vert:rk,frag:ak,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>tk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Ks=de((iA,gx)=>{"use strict";var Ys=Ii(),ik="res/audio/go-tomorrow.mp3",sk="res/audio/go-tomorrow.json",px="gallery-sound",ch=[Ys.PIANO.x,1,Ys.PIANO.z],ck=Ys.R,Nr=!0;try{localStorage.getItem(px)==="off"&&(Nr=!1)}catch(e){}var Xo=null,Kn=null,yl=null,bl=null,ji=null,Hr=null,O0=!1,I0=!1,Xs=null,fh=null,ux=[],j1=(typeof performance!="undefined"?performance.now():0)/1e3;function lk(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let i=o.getChannelData(a),s=0;for(let c=0;c<t;c++){let f=c/e.sampleRate,l=.25+.6*Math.exp(-f*2.2);s+=(r()-s)*l,i[c]=s*Math.pow(1-c/t,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function fk(){if(Xo)return;Xo=new Audio,Xo.src=ik,Xo.loop=!0,Xo.preload="auto",Xo.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){Xo.volume=.2;return}try{Kn=new e;let t=Kn.createMediaElementSource(Xo);ji=Kn.createBiquadFilter(),ji.type="lowpass",ji.frequency.value=1500,ji.Q.value=.4,yl=Kn.createGain(),yl.gain.value=0,bl=Kn.createGain(),bl.gain.value=0;let o=Kn.createConvolver();o.buffer=lk(Kn),Hr=Kn.createGain(),Hr.gain.value=Nr?1:0,t.connect(ji),ji.connect(yl),yl.connect(Hr),ji.connect(o),o.connect(bl),bl.connect(Hr),Hr.connect(Kn.destination)}catch(t){Kn=null,Xo.volume=.2}}var vx=0,mx=performance.now()/1e3-j1,H1=()=>fh&&fh.dur||158,B1=()=>vx+(performance.now()/1e3-j1-mx),dx=()=>Xo&&O0&&!Xo.paused&&I0;function U1(){if(O0||!Nr||!I0)return;fk();let e=()=>{try{Xo.currentTime=B1()%H1()}catch(t){}Xo.play().then(()=>{O0=!0}).catch(()=>{})};Kn&&Kn.state==="suspended"?Kn.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,U1,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Xo||!O0||(document.hidden?Xo.pause():Nr&&I0&&Xo.play().catch(()=>{}))}),fetch(sk).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(i=>i[2]).sort((i,s)=>i-s),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(i=>({t:i[0],w:i[1],x:Math.max(0,Math.min(1,(i[2]-r)/Math.max(a-r,.001)))}))};fh={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var lh={AT:ch,listen(e){if(!Kn||!O0)return;let t=e[0]-ch[0],o=e[2]-ch[2],n=Math.hypot(t,o,(e[1]-ch[1])*.5),r=Math.hypot(e[0]-Ys.C.x,e[2]-Ys.C.z)<ck+.4||e[0]<-.2&&Math.abs(e[2]-Ys.C.z)<4,a,i,s;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,i=.22+.16*f,s=16e3}else a=0,i=0,s=1500;let c=Kn.currentTime;yl.gain.setTargetAtTime(a,c,.35),bl.gain.setTargetAtTime(i,c,.35),ji.frequency.setTargetAtTime(s,c,.35)},time(){let e=H1();return dx()?Xo.currentTime%e:(B1()%e+e)%e},enter(){if(I0=!0,Xs&&(clearTimeout(Xs),Xs=null),!!Nr){if(!O0)U1();else if(Hr&&Hr.gain.setTargetAtTime(1,Kn.currentTime,.2),Xo.paused){try{Xo.currentTime=B1()%H1()}catch(e){}Xo.play().catch(()=>{})}}},exit(){dx()&&(vx=Xo.currentTime,mx=performance.now()/1e3-j1),I0=!1,Xo&&(Hr&&Hr.gain.setTargetAtTime(0,Kn.currentTime,.3),clearTimeout(Xs),Xs=setTimeout(()=>{Xs=null,I0||Xo.pause()},Hr?1500:0))},get cues(){return fh},get on(){return Nr},set(e){Nr=!!e;try{localStorage.setItem(px,Nr?"on":"off")}catch(t){}Nr?I0&&(U1(),Xo&&O0&&Xo.play().catch(()=>{}),Hr&&Hr.gain.setTargetAtTime(1,Kn.currentTime,.2)):Hr?Hr.gain.setTargetAtTime(0,Kn.currentTime,.15):Xo&&Xo.pause(),ux.forEach(t=>t(Nr))},toggle(){lh.set(!Nr)},onChange(e){ux.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=Nr?t:o,n.setAttribute("aria-label",Nr?"Turn the piano off":"Turn the piano on"),n.title=Nr?"Piano on (heard in the piano room, while you leave a note)":"Piano off",n.setAttribute("aria-pressed",Nr?"true":"false")};return r(),lh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,i=>i.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),lh.toggle()}),n}};gx.exports=lh});var Tx=de((sA,K1)=>{"use strict";var X1=ur().GLSL,{A:xx,BENCH:kx,oculusGLSL:Ex}=va(),yx=ua(),Sx=Ii(),bx=Ks(),hk=1.74,uk=1.877,gr=hk/uk,$0={x:xx.cx-1.22,z:xx.zc+.02,hipY:kx.seat+.115},Yo=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Ia=e=>[-e[0],-e[1],-e[2],e[3]],Vi=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},hh=(e,t,o)=>Yo(Vi([0,0,1],o*Math.PI/180),Yo(Vi([0,1,0],t*Math.PI/180),Vi([1,0,0],e*Math.PI/180))),Y1=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},Ya=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],_l=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Wi=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],V1=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],dh=e=>Math.hypot(e[0],e[1],e[2]),wl=e=>{let t=dh(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},vh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],dk=(e,t)=>{let o=[e[0],e[1],e[2]],n=Wi(vh(o,t),2);return _l(_l(t,Wi(n,e[3])),vh(o,n))},pk=(e,t)=>{let o=vh(e,t),n=1+V1(e,t);return n<1e-6?[0,0,1,0]:Y1([o[0],o[1],o[2],n])};function Qr(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,f=a*a,l=n*r,p=n*a,h=r*a,u=i*n,v=i*r,d=i*a;return[(1-2*(c+f))*o[0],2*(l+d)*o[0],2*(p-v)*o[0],0,2*(l-d)*o[1],(1-2*(s+f))*o[1],2*(h+u)*o[1],0,2*(p+v)*o[2],2*(h-u)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function qn(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function W1(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,f=e[6]/o,l=e[8]/n,p=e[9]/n,h=e[10]/n,u=r+c+h,v;if(u>0){let d=Math.sqrt(u+1)*2;v=[(f-p)/d,(l-i)/d,(a-s)/d,d/4]}else if(r>c&&r>h){let d=Math.sqrt(1+r-c-h)*2;v=[d/4,(s+a)/d,(l+i)/d,(f-p)/d]}else if(c>h){let d=Math.sqrt(1+c-r-h)*2;v=[(s+a)/d,d/4,(p+f)/d,(l-i)/d]}else{let d=Math.sqrt(1+h-r-c)*2;v=[(l+i)/d,(p+f)/d,d/4,(a-s)/d]}return Y1(v)}var ph={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{ph[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],ph[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],ph[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function F0(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function wx(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*F0(e,.14,.07)+57*F0(e,.72,.12),n=5*F0(e,.06,.04)-9*F0(e,.42,.12)+17*F0(e,.62,.05)-3*F0(e,.85,.1),r=-26*F0(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function vk(e){let t=(e%1+1)%1,o=wx(t),n=wx(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var _x=`
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
}`,mh=Ri(),Mx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${X1}
uniform float time;
${Sx.roomGLSL()}
${mh.lanternGLSL(mh.TREE_LANTERN)}
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
${Ex()}
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
}`;function mk(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var Ax={w:.13,h:.2},uh=e=>.011*(1-Math.pow(1-e,3));function gk(){let e=[],t=[],o=[],n=[],r=[],a=(d,m,g,y,b,E,k)=>{let L=e.length/3;[d,m,g,y].forEach((R,X)=>{e.push(...R),t.push(...b),o.push(...k[X]),n.push(E)}),r.push(L,L+1,L+2,L,L+2,L+3)},{w:i,h:s}=Ax,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,p=i+.001,h=c+.001;a([0,l,-h],[p,l,-h],[p,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[p,l+.001,h],[p,l+.001,-h],[0,1,0],2,f),a([-p,l,-h],[0,l,-h],[0,l,h],[-p,l,h],[0,-1,0],2,f),a([-p,l+.001,-h],[-p,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let u=8;for(let d of[1,-1]){for(let g=0;g<u;g++){let y=g/u,b=(g+1)/u,E=(.002+y*(i-.002))*d,k=(.002+b*(i-.002))*d,L=uh(y),R=uh(b),X=d>0?y:1-y,O=d>0?b:1-b,te=1,G=-(R-L)/(k-E);a([E,L,-c],[k,R,-c],[k,R,c],[E,L,c],[G,te,0],3,[[X,1],[O,1],[O,0],[X,0]]),a([E,l+.001,c],[k,l+.001,c],[k,R,c],[E,L,c],[0,0,1],4,f),a([E,L,-c],[k,R,-c],[k,l+.001,-c],[E,l+.001,-c],[0,0,-1],4,f)}let m=i*d;a([m,l+.001,-c],[m,uh(1),-c],[m,uh(1),c],[m,l+.001,c],[d,0,0],4,f)}let v=10;for(let d=0;d<v;d++){let m=d/v,g=(d+1)/v,y=e.length/3;for(let[b,E]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,E),t.push(0,1,0),o.push(b,(E+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function xk(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,f,l,p,h)=>{for(let u=0;u<p;u++){let v=i+(n()-.5)*c*2,d=s+(n()-.5)*f*2,m=20+n()*60,g=t.createRadialGradient(v,d,0,v,d,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),t.fillStyle=g,t.fillRect(v-m,d-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var yk=`
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
		float r = u * ${Ax.w.toFixed(3)};
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
${X1}
uniform float time;
${mh.lanternGLSL(mh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Ex()}
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
}`;function wk(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],p=16;for(let h=0;h<l.length;h++){let[u,v,d,m]=l[h],g=m===2?.45:1;for(let y=0;y<=p;y++){let b=y/p*Math.PI*2;e.push(Math.cos(b)*u,v,Math.sin(b)*u*g);let E=Math.max(h-1,0),k=Math.min(h+1,l.length-1),L=l[k][0]-l[E][0],R=l[k][1]-l[E][1],X=Math.hypot(L,R)||1;t.push(Math.cos(b)*R/X,-L/X,Math.sin(b)*R/X/g),o.push(...d),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let u=0;u<p;u++){let v=h*(p+1)+u,d=v+p+1;r.push(v,d,v+1,v+1,d,d+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var _k=`
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
${X1}
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
}`,Ek=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;K1.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[$0.x,1.9,$0.z],glow:0};Promise.all([fetch(t+"avatar.json").then(O=>O.json()),fetch(t+"avatar.bin").then(O=>O.arrayBuffer())]).then(([O,te])=>{o=f(O,te)}).catch(O=>console.error(O));let i=null;Promise.all([fetch(t+"motion.json").then(O=>O.ok?O.json():null),fetch(t+"motion.bin").then(O=>O.ok?O.arrayBuffer():null)]).then(([O,te])=>{if(!O||!te)return;let G={};for(let oe in O.clips){let D=O.clips[oe],W=D.bones.length,Ae=new Float32Array(te,D.mean,W*4),Be={};D.bones.forEach((Te,pe)=>{Be[Te]=[Ae[pe*4],Ae[pe*4+1],Ae[pe*4+2],Ae[pe*4+3]]}),G[oe]=Object.assign({},D,{Q:new Int16Array(te,D.q,D.frames*W*4),H:new Float32Array(te,D.hips,D.frames*3),meanQ:Be})}i=G}).catch(()=>{});function s(O,te){let G=O.frames,oe=O.bones.length,D=(te%G+G)%G,W=Math.floor(D)%G,Ae=(W+1)%G,Be=D-Math.floor(D),Te={};for(let ht=0;ht<oe;ht++){let Ot=(W*oe+ht)*4,He=(Ae*oe+ht)*4,at=O.Q[Ot],_t=O.Q[Ot+1],Jt=O.Q[Ot+2],ro=O.Q[Ot+3],en=O.Q[He],Xe=O.Q[He+1],ut=O.Q[He+2],dt=O.Q[He+3];at*en+_t*Xe+Jt*ut+ro*dt<0&&(en=-en,Xe=-Xe,ut=-ut,dt=-dt),Te[O.bones[ht]]=Y1([at+(en-at)*Be,_t+(Xe-_t)*Be,Jt+(ut-Jt)*Be,ro+(dt-ro)*Be])}let pe=W*3,_e=Ae*3;return{q:Te,hips:[O.H[pe]+(O.H[_e]-O.H[pe])*Be,O.H[pe+1]+(O.H[_e+1]-O.H[pe+1])*Be,O.H[pe+2]+(O.H[_e+2]-O.H[pe+2])*Be]}}let c=e.texture({data:[[[255,255,255,255]]]});function f(O,te){let G=(Q,Ie)=>new Float32Array(te,Q,Ie),oe=O.bones,D=oe.length,W={};oe.forEach((Q,Ie)=>{W[Q.name]=Ie});let Ae=[];for(let Q=0;Q<D;Q++)Ae.push(Array.from(G(O.ibm+Q*64,16)));let Be=oe.map(Q=>Qr(Q.t,Q.r,Q.s)),Te=[];for(let Q=0;Q<D;Q++){let Ie=oe[Q].parent;Te[Q]=Ie<0?Be[Q]:qn(Te[Ie],Be[Q])}let pe=Te.map(W1),_e=O.meshes.map(Q=>{let Ie=G(Q.pos,Q.n*3),Ye=G(Q.nrm,Q.n*3),ze=G(Q.uv,Q.n*2),rt=new Uint8Array(te,Q.jnt,Q.n*4),mt=G(Q.wgt,Q.n*4),Et=new Uint16Array(te,Q.idx,Q.ni),ft={};for(let Fo in Q.morphs){let $o=Q.morphs[Fo];ft[Fo]={idx:new Uint16Array(te,$o.idx,$o.n),d:G($o.d,$o.n*3)}}let Tt=new Float32Array(Q.n*3),pt=new Float32Array(Q.n*3),yt=new Float32Array(Q.n*3),bt=e.buffer({data:Tt,usage:"dynamic"}),At=e.buffer({data:pt,usage:"dynamic"}),Ht=/avaturn_hair/.test(Q.name),it=/EyeAO|Eyelash/.test(Q.name),eo=/Body|Head/.test(Q.name),vo=Q.kind||0;return{m:Q,pos:Ie,nrm:Ye,uv:ze,jnt:rt,wgt:mt,idx:Et,morphs:ft,outP:Tt,outN:pt,work:yt,pb:bt,nbuf:At,tex:Q.tex?mk(e,t+Q.tex):c,kind:vo,alphaScale:/EyeAO/.test(Q.name)?.25:1,blend:Q.blend||Ht,alphaCut:Ht?.35:it?.02:0,skin:eo?1:0}}),ht=e({vert:_x,frag:Mx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!R?L.lamp:[0,0,0,0],court:()=>L||R?0:1,candle:()=>R?1:0},cull:{enable:!1}}),Ot=e({vert:_x,frag:Mx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!R?L.lamp:[0,0,0,0],court:()=>L||R?0:1,candle:()=>R?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),He=.3;for(let Q of _e)if(Q.uvBuf=e.buffer(Q.uv),/Body/.test(Q.m.name)){let Ie=[],Ye=[];for(let ze=0;ze<Q.idx.length;ze+=3){let rt=Q.idx[ze],mt=Q.idx[ze+1],Et=Q.idx[ze+2];(Q.pos[rt*3+1]<He&&Q.pos[mt*3+1]<He&&Q.pos[Et*3+1]<He?Ye:Ie).push(rt,mt,Et)}Q.el=e.elements({data:new Uint16Array(Ie),type:"uint16"}),Ye.length&&(Q.sockEl=e.elements({data:new Uint16Array(Ye),type:"uint16"}))}else Q.el=e.elements({data:Q.idx,type:"uint16"});let at=Te[W.Hips],_t=Vi([1,0,0],-Math.PI/2),Jt=qn(Qr([$0.x-at[12]*gr,$0.hipY-at[14]*gr,$0.z+at[13]*gr],_t,[1,1,1]),Qr([0,0,0],[0,0,0,1],[gr,gr,gr])),ro=new Array(D),en=-1,Xe=(Q,Ie,Ye)=>qn(Qr([Q,0,Ie],Vi([0,1,0],Ye),[1,1,1]),Qr([0,0,0],[0,0,0,1],[gr,gr,gr])),ut=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Q=>W[Q]),dt=ut.map(Q=>Te[Q][13]*gr);function Xt(Q){if(i&&i.walk)return Oo(Q);let Ie=vk(Q.phase),Ye={},ze=pt=>{for(let yt in pt){let bt=pt[yt],At=hh(bt[0],bt[1],bt[2]);Ye[yt]=Ye[yt]?Yo(Ye[yt],At):At}};ze(Ie.swing),ze(Ie.pose);let rt=Math.cos(Q.heading),mt=-Math.sin(Q.heading),Et=Xe(Q.x+rt*Ie.sway,Q.z+mt*Ie.sway,Q.heading),ft=new Array(D);for(let pt=0;pt<D;pt++){let yt=oe[pt],bt=Be[pt],At=Ye[yt.name];if(At){let Ht=pe[pt],it=Yo(Ia(Ht),Yo(At,Ht));bt=Qr(yt.t,Yo(yt.r,it),yt.s)}ft[pt]=yt.parent<0?qn(Et,bt):qn(ft[yt.parent],bt)}let Tt=1/0;ut.forEach((pt,yt)=>{Tt=Math.min(Tt,ft[pt][13]-dt[yt])});for(let pt=0;pt<D;pt++)ft[pt]=ft[pt].slice(),ft[pt][13]-=Tt,ro[pt]=qn(ft[pt],Ae[pt]);return{blink:0}}function Oo(Q){let Ie=i.walk,Ye=s(Ie,(Q.phase+Ie.phase0)*Ie.frames),ze=Xe(Q.x,Q.z,Q.heading),rt=new Array(D),mt=W.Hips;for(let ft=0;ft<D;ft++){let Tt=oe[ft],pt=Be[ft],yt=Ye.q[Tt.name];if(yt){let bt=pe[ft],At=Yo(Ia(bt),Yo(yt,bt)),Ht=ft===mt?[Tt.t[0]+Ye.hips[0],Tt.t[1]+Ye.hips[1],Tt.t[2]+Ye.hips[2]]:Tt.t;pt=Qr(Ht,Yo(Tt.r,At),Tt.s)}rt[ft]=Tt.parent<0?qn(ze,pt):qn(rt[Tt.parent],pt)}let Et=1/0;ut.forEach((ft,Tt)=>{Et=Math.min(Et,rt[ft][13]-dt[Tt])});for(let ft=0;ft<D;ft++)rt[ft]=rt[ft].slice(),rt[ft][13]-=Et,ro[ft]=qn(rt[ft],Ae[ft]);return{blink:0}}function Ho(Q,Ie){let Ye=Math.sin(Q*2*Math.PI/4.6),ze=Math.sin(Q*.37)*.6+Math.sin(Q*.83+1)*.4,rt={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Ye*.8,0,0],Spine2:[4+Ye*.6,0,0],Neck:[10,0,0],Head:[12+ze*2,ze*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},mt={};for(let bt in rt){let At=rt[bt];mt[bt]=hh(At[0],At[1],At[2])}let Et=Xe(Ie.x,Ie.z,Ie.heading),ft=new Array(D);for(let bt=0;bt<D;bt++){let At=oe[bt],Ht=Be[bt],it=mt[At.name];if(it){let eo=pe[bt],vo=Yo(Ia(eo),Yo(it,eo));Ht=Qr(At.t,Yo(At.r,vo),At.s)}ft[bt]=At.parent<0?qn(Et,Ht):qn(ft[At.parent],Ht)}let pt=ft[W.Hips][13]-(Ie.y+.1);for(let bt=0;bt<D;bt++)ft[bt]=ft[bt].slice(),ft[bt][13]-=pt,ro[bt]=qn(ft[bt],Ae[bt]);let yt=Q%4.1;return{blink:yt<.16?Math.sin(yt/.16*Math.PI):0}}let zt=Q=>[Te[Q][12],Te[Q][13],Te[Q][14]],Se=(Q,Ie)=>{let Ye=wl(Q),ze=wl(Ya(Ie,Wi(Ye,V1(Ie,Ye)))),rt=vh(Ye,ze);return W1([Ye[0],Ye[1],Ye[2],0,ze[0],ze[1],ze[2],0,rt[0],rt[1],rt[2],0,0,0,0,1])},Pe={};for(let Q of["Left","Right"]){let Ie=W[Q+"Arm"],Ye=W[Q+"ForeArm"],ze=W[Q+"Hand"],rt=W[Q+"HandMiddle1"];Pe[Q]={a:Ie,f:Ye,h:ze,upper:dh(Ya(zt(Ye),zt(Ie)))*gr,fore:dh(Ya(zt(ze),zt(Ye)))*gr,dir0:wl(Ya(zt(Ye),zt(Ie))),qf0:Se(Ya(zt(ze),zt(Ye)),[0,1,0]),qh0:Se(Ya(zt(rt),zt(ze)),[0,1,0])}}let Mt={};for(let Q of["Left","Right"])Mt[Pe[Q].a]={side:Q,part:0},Mt[Pe[Q].f]={side:Q,part:1},Mt[Pe[Q].h]={side:Q,part:2};function je(Q,Ie,Ye){if(!Q||!Q.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let ze=0,rt=Q.length-1,mt=-1;for(;ze<=rt;){let $o=ze+rt>>1;Q[$o].t<=Ie?(mt=$o,ze=$o+1):rt=$o-1}let Et=Q[Q.length-1],ft=Q[0],Tt=mt>=0?Q[mt]:{t:Et.t-Ye,x:Et.x,w:Et.w},pt=mt+1<Q.length?Q[mt+1]:{t:ft.t+Ye,x:ft.x,w:ft.w},yt=Math.max(.05,pt.t-Tt.t),bt=Math.min(.14,yt*.45),At=Math.max(0,Math.min(1,(Ie-Tt.t-bt)/Math.max(yt-bt-.03,.02))),Ht=At*At*(3-2*At),it=Ie-Tt.t,eo=(.55+.45*Tt.w)*Math.exp(-it/.11),vo=pt.t-Ie,Fo=vo<.05?(.55+.45*pt.w)*(1-vo/.05):0;return{x:Tt.x+(pt.x-Tt.x)*Ht,lift:Math.sin(Math.PI*At)*Math.min(.05,.012+yt*.03)*(yt>2.5?.4:1),press:Math.max(eo,Fo),finger:Fo>eo?((mt+1)*7+3)%4:(Math.max(mt,0)*7+3)%4,busy:Math.exp(-it/.9)}}let Ue={lean:0,turn:0,nod:0,pedal:0,last:-1},so=["Index","Middle","Ring","Pinky"];function _(Q){let Ie=Sx.PLAY,Ye=bx.cues,ze=bx.time(),rt=Ye&&Ye.dur||158,mt={Left:je(Ye&&Ye.left,ze,rt),Right:je(Ye&&Ye.right,ze,rt)},Et=.35;if(Ye&&Ye.level&&Ye.level.length){let Yt=ze*8,Kt=Math.floor(Yt)%Ye.level.length,ln=(Kt+1)%Ye.level.length;Et=Ye.level[Kt]+(Ye.level[ln]-Ye.level[Kt])*(Yt-Math.floor(Yt))}let ft=Ue.last<0?0:Math.min(.1,Math.max(0,Q-Ue.last));Ue.last=Q;let Tt=Yt=>Math.min(1,ft*Yt);Ue.lean+=(Et-Ue.lean)*Tt(1.2),Ue.turn+=(mt.Right.busy-mt.Left.busy-Ue.turn)*Tt(1.5),Ue.nod+=(Math.max(mt.Right.press,mt.Left.press*.7)-Ue.nod)*Tt(6),Ue.pedal+=((mt.Left.busy>.35?1:.15)-Ue.pedal)*Tt(5);let pt=Math.sin(Q*2*Math.PI/4.6),yt=Math.sin(ze*.41)*.6+Math.sin(ze*.17+1)*.4,bt={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Ue.pedal,0,0],Spine:[9+3.5*Ue.lean+yt*1.6,Ue.turn*2.5,-Ue.turn*1.6],Spine1:[7+pt*.8+2.5*Ue.lean,Ue.turn*2.5,-Ue.turn*1.2],Spine2:[6+pt*.6+yt*.8,Ue.turn*1.5,0],Neck:[13+3*Ue.lean,Ue.turn*3,0],Head:[15+Ue.nod*3.5+yt*1.5,Ue.turn*5,yt*1.5]};for(let Yt of["Left","Right"]){let Kt=Yt==="Left"?-1:1,ln=mt[Yt];so.forEach((ho,Rt)=>{let No=Rt===ln.finger?ln.press:ln.press*.2;bt[Yt+"Hand"+ho+"1"]=[0,0,Kt*(20+3*Rt+20*No)],bt[Yt+"Hand"+ho+"2"]=[0,0,Kt*(26+4*Rt-6*No)],bt[Yt+"Hand"+ho+"3"]=[0,0,Kt*14]}),bt[Yt+"HandThumb1"]=[0,Kt*-18,Kt*10]}let At={};for(let Yt in bt){let Kt=bt[Yt];At[Yt]=hh(Kt[0],Kt[1],Kt[2])}let Ht=Te[W.Hips][13]*gr,it=qn(Qr([Ie.stoolX,Ie.stoolTop+.1-Ht,Ie.stoolFront+.15],Vi([0,1,0],Ie.heading),[1,1,1]),Qr([0,0,0],[0,0,0,1],[gr,gr,gr])),eo=(Ie.keyX0+Ie.keyX1)/2,vo={};for(let Yt of["Left","Right"]){let Kt=mt[Yt],ln=Yt==="Left"?eo-.4+.33*Kt.x:eo+.07+.33*Kt.x;vo[Yt]=[ln,Ie.keyTop+.062+Kt.lift-Kt.press*.012,Ie.keyFront+.075]}let Fo=new Array(D),$o={},na=[0,1,0];for(let Yt=0;Yt<D;Yt++){let Kt=oe[Yt],ln=Be[Yt],ho=At[Kt.name],Rt=Mt[Yt];if(Rt){let No=Pe[Rt.side];if(Rt.part===0){let gn=Fo[Kt.parent],Ro=qn(gn,Be[Yt]),ei=[Ro[12],Ro[13],Ro[14]],bi=Yo(W1(gn),Ia(pe[Kt.parent])),ti=Ya(vo[Rt.side],ei),j=dh(ti),le=(No.upper+No.fore)*.995;j>le&&(ti=Wi(ti,le/j),j=le);let Qe=Wi(ti,1/j),lt=(No.upper*No.upper-No.fore*No.fore+j*j)/(2*j),to=Math.sqrt(Math.max(0,No.upper*No.upper-lt*lt)),Co=[Rt.side==="Left"?-.6:.6,-.8,.3];Co=wl(Ya(Co,Wi(Qe,V1(Co,Qe))));let cr=_l(ei,_l(Wi(Qe,lt),Wi(Co,to)));No.T=_l(ei,ti),No.elbow=cr;let Ea=wl(Ya(cr,ei)),Pn=Yo(pk(dk(bi,No.dir0),Ea),bi);$o[Yt]=Pn,ho=Yo(Ia(bi),Pn)}else if(Rt.part===1){let gn=Yo(Se(Ya(No.T,No.elbow),na),Ia(No.qf0));$o[Yt]=gn,ho=Yo(Ia($o[Kt.parent]),gn)}else{let gn=mt[Rt.side],Ro=Yo(Se([Rt.side==="Left"?.12:-.12,-.2-.1*gn.press,-1],na),Ia(No.qh0));$o[Yt]=Ro,ho=Yo(Ia($o[Kt.parent]),Ro)}}if(ho){let No=pe[Yt],gn=Yo(Ia(No),Yo(ho,No));ln=Qr(Kt.t,Yo(Kt.r,gn),Kt.s)}Fo[Yt]=Kt.parent<0?qn(it,ln):qn(Fo[Kt.parent],ln)}for(let Yt=0;Yt<D;Yt++)ro[Yt]=qn(Fo[Yt],Ae[Yt]);a.pianist={head:[Fo[W.Head][12],Fo[W.Head][13],Fo[W.Head][14]]};let ra=Q%4.3;return{blink:ra<.16?Math.sin(ra/.16*Math.PI):0}}function Eo(Q,Ie){if(R)return _(Q);if(L)return Ho(Q,L);if(Ie)return Xt(Ie);let Ye=Math.sin(Q*2*Math.PI/4.2),ze=Q%3.7,rt=ze<.16?Math.sin(ze/.16*Math.PI):0,mt=Math.sin(Q*.45),Et=Math.sin(Q*.31+.8),ft=Math.max(0,Math.sin(Q*.085)-.75)*4,Tt={RightArm:[0,-22*ft,11*mt],RightForeArm:[0,8+26*ft,0],RightHand:[38*Et,0,6*Math.sin(Q*.7)],LeftUpLeg:[0,0,3.2*Math.sin(Q*.36)],RightFoot:[5*Math.sin(Q*.52+.4),0,0],Head:[0,1.6*Math.sin(Q*.21),0]};["Index","Middle","Ring","Pinky"].forEach((it,eo)=>{let vo=Math.sin(Q*1.1-eo*.5);Tt["RightHand"+it+"1"]=[0,0,8+12*vo],Tt["RightHand"+it+"2"]=[0,0,6+10*vo]});let pt={},yt=(it,eo)=>{for(let vo in it){let Fo=it[vo],$o=hh(Fo[0]*eo,Fo[1]*eo,Fo[2]*eo);pt[vo]=pt[vo]?Yo(pt[vo],$o):$o}};yt(ph,1),yt({Spine1:[Ye*.8,0,0],Spine2:[Ye*.6,0,0]},1),yt(Tt,1);let bt=new Array(D),At=new Array(D);for(let it=0;it<D;it++){let eo=oe[it],vo=Be[it],Fo=pt[eo.name];if(Fo){let $o=pe[it],na=Yo(Ia($o),Yo(Fo,$o));vo=Qr(eo.t,Yo(eo.r,na),eo.s)}bt[it]=eo.parent<0?qn(Jt,vo):qn(bt[eo.parent],vo),At[it]=null}for(let it=0;it<D;it++)ro[it]=qn(bt[it],Ae[it]);let Ht=it=>[it[12],it[13],it[14]];return a.headPos=Ht(bt[W.Head]),a.hipsPos=Ht(bt[W.Hips]),a.headM=bt[W.Head],{blink:rt}}function co(Q,Ie){let{pos:Ye,nrm:ze,jnt:rt,wgt:mt,outP:Et,outN:ft,work:Tt,m:pt}=Q,yt=pt.n,bt=Ye;if(Ie){Tt.set(Ye);for(let At in Q.morphs){let Ht=Ie[At]||0;if(Ht<=0)continue;let it=Q.morphs[At];for(let eo=0;eo<it.idx.length;eo++){let vo=it.idx[eo]*3;Tt[vo]+=it.d[eo*3]*Ht,Tt[vo+1]+=it.d[eo*3+1]*Ht,Tt[vo+2]+=it.d[eo*3+2]*Ht}}bt=Tt}for(let At=0;At<yt;At++){let Ht=bt[At*3],it=bt[At*3+1],eo=bt[At*3+2],vo=ze[At*3],Fo=ze[At*3+1],$o=ze[At*3+2],na=0,ra=0,Yt=0,Kt=0,ln=0,ho=0;for(let No=0;No<4;No++){let gn=mt[At*4+No];if(gn===0)continue;let Ro=ro[rt[At*4+No]];na+=gn*(Ro[0]*Ht+Ro[4]*it+Ro[8]*eo+Ro[12]),ra+=gn*(Ro[1]*Ht+Ro[5]*it+Ro[9]*eo+Ro[13]),Yt+=gn*(Ro[2]*Ht+Ro[6]*it+Ro[10]*eo+Ro[14]),Kt+=gn*(Ro[0]*vo+Ro[4]*Fo+Ro[8]*$o),ln+=gn*(Ro[1]*vo+Ro[5]*Fo+Ro[9]*$o),ho+=gn*(Ro[2]*vo+Ro[6]*Fo+Ro[10]*$o)}Et[At*3]=na,Et[At*3+1]=ra,Et[At*3+2]=Yt;let Rt=Math.hypot(Kt,ln,ho)||1;ft[At*3]=Kt/Rt,ft[At*3+1]=ln/Rt,ft[At*3+2]=ho/Rt}pt.grid&&!Bo&&!L&&!R&&ao(Q),Q.sway&&xi(Q),Q.pb.subdata(Et),Q.nbuf.subdata(ft)}function ao(Q){let[Ie,Ye]=Q.m.grid,ze=Q.outP,rt=Q.outN,mt=kx.seat+.012;for(let Et=1;Et<Ie;Et++){let ft=Math.pow(1-Et/(Ie-1),1.5);for(let Tt=0;Tt<Ye;Tt++){let pt=(Et*Ye+Tt)*3;ze[pt+1]>mt?ze[pt+1]=mt+(ze[pt+1]-mt)*Math.max(ft,.15):ze[pt+1]=mt}}for(let Et=0;Et<rt.length;Et+=3)rt[Et]=0,rt[Et+1]=1,rt[Et+2]=0}let Bo=!1,So=(Q,Ie,Ye,ze,rt)=>({bone:W[Q],rate:Ie,damp:Ye,drag:ze,most:rt,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),nn={head:So("Head",15,.32,.012,.035),chest:So("Spine2",9,.38,.03,.1),hips:So("Hips",7,.42,.045,.16)},yo=-1;function Ja(Q){let Ie=yo<0?0:Q-yo;yo=Q;for(let Ye in nn){let ze=nn[Ye],rt=ro[ze.bone],mt=Te[ze.bone],Et=mt[12],ft=mt[13],Tt=mt[14],pt=[rt[0]*Et+rt[4]*ft+rt[8]*Tt+rt[12],rt[1]*Et+rt[5]*ft+rt[9]*Tt+rt[13],rt[2]*Et+rt[6]*ft+rt[10]*Tt+rt[14]];if(!ze.p||!(Ie>0)||Ie>.25||Math.hypot(pt[0]-ze.p[0],pt[1]-ze.p[1],pt[2]-ze.p[2])>.5){ze.p=pt,ze.x=[0,0,0],ze.v=[0,0,0],ze.vel=[0,0,0];continue}let yt=[(pt[0]-ze.p[0])/Ie,(pt[1]-ze.p[1])/Ie,(pt[2]-ze.p[2])/Ie],bt=Math.max(1,Math.ceil(Ie/.016)),At=Ie/bt;for(let it=0;it<3;it++){let eo=Math.max(-30,Math.min(30,(yt[it]-ze.vel[it])/Ie)),vo=-yt[it]*ze.drag;for(let Fo=0;Fo<bt;Fo++)ze.v[it]+=((vo-ze.x[it])*ze.rate*ze.rate-2*ze.damp*ze.rate*ze.v[it]-eo)*At,ze.x[it]+=ze.v[it]*At}let Ht=Math.hypot(ze.x[0],ze.x[1],ze.x[2]);if(Ht>ze.most){let it=ze.most/Ht;ze.x=[ze.x[0]*it,ze.x[1]*it,ze.x[2]*it]}ze.p=pt,ze.vel=yt}}for(let Q of _e){let Ie=Q.m,Ye=Ie.n,ze=null,rt=null;if(Ie.kind===9){rt="head",ze=new Float32Array(Ye);for(let mt=0;mt<Ye;mt++){let Et=Q.uv[mt*2]<-.5?0:Q.uv[mt*2+1];ze[mt]=Et*Et}}else if(Ie.name==="scarf"){rt="chest",ze=new Float32Array(Ye);for(let mt=0;mt<Ye;mt++)ze[mt]=l(1.52,1.12,Q.pos[mt*3+1])}else if(Ie.grid){rt="hips",ze=new Float32Array(Ye);let mt=Ie.grid[0],Et=Ie.grid[1];for(let ft=0;ft<Ye;ft++)ze[ft]=Math.pow(Math.floor(ft/Et)/(mt-1),1.6)}ze&&(Q.sway=ze,Q.spring=nn[rt],Q.loose=rt)}function xi(Q){if(!Bo&&!R&&!L)return;let Ie=Q.spring.x,Ye=Q.sway,ze=Q.outP;if(!(Math.abs(Ie[0])+Math.abs(Ie[1])+Math.abs(Ie[2])<1e-5))for(let rt=0,mt=Ye.length;rt<mt;rt++){let Et=Ye[rt];Et>0&&(ze[rt*3]+=Ie[0]*Et,ze[rt*3+1]+=Ie[1]*Et,ze[rt*3+2]+=Ie[2]*Et)}}function yi(Q,Ie){Bo=!!Ie;let Ye=Eo(Q,Ie);Ja(Q);let ze={eyeBlinkLeft:Ye.blink,eyeBlinkRight:Ye.blink};for(let rt of _e)co(rt,Object.keys(rt.morphs).length?ze:null);a.pose=Ye}return{parts:_e,update:yi,drawOpaque:ht,drawBlend:Ot,state:a}}function l(O,te,G){let oe=Math.min(1,Math.max(0,(G-O)/(te-O)));return oe*oe*(3-2*oe)}let p=gk(),h=xk(),u=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,v=e({vert:yk,frag:bk,attributes:{position:p.pos,normal:p.nrm,uv:p.uv,kind:p.kind},elements:new Uint16Array(p.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:u},cull:{enable:!1}}),d=wk(),m=e({vert:_k,frag:Mk,attributes:{position:d.pos,normal:d.nrm,color:d.col,mat:d.mat},elements:new Uint16Array(d.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),g=e({vert:kk,frag:Ek,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(O){let te=O.headM,G=_e=>{let ht=Math.hypot(..._e)||1;return _e.map(Ot=>Ot/ht)},oe=G([te[4],te[5],te[6]]),D=G([te[8],te[9],te[10]]),W=oe,Ae=D.map(_e=>-_e),Be=[Ae[1]*W[2]-Ae[2]*W[1],Ae[2]*W[0]-Ae[0]*W[2],Ae[0]*W[1]-Ae[1]*W[0]],Te=O.headPos,pe=[0,1,2].map(_e=>Te[_e]+oe[_e]*.06+D[_e]*.185);return[Be[0],Be[1],Be[2],0,Ae[0],Ae[1],Ae[2],0,W[0],W[1],W[2],0,pe[0],pe[1],pe[2],1]}let b=-1,E="",k=null,L=null,R=!1;function X(O){if(!o)return;let te=(yx.motion,r()),G=k?[k.x,k.z,k.heading,k.phase].map(D=>D.toFixed(4)).join():"";(L||R||G!==E||!k&&Math.abs(te-b)>(yx.isPhone?1/30:0))&&(o.update(te,k),b=te,E=G);for(let D of o.parts)D.blend||(o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale}),D.sockEl&&o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let oe=o.state;if(oe.headM&&!k&&!L&&!R){v({model:y(oe)});let D=oe.headPos,W=Math.sin(te*1.3)*.02,Ae=[D[0],D[1]+.62+W,D[2]+.05],Be=te*.6,Te=Qr(Ae,Yo(Vi([0,1,0],Be),Vi([0,0,1],.18)),[1.2,1.2,1.2]),pe=.5+.5*Math.sin(te*2);m({model:Te,pulse:pe}),a.glowPos=Ae,a.glow=.06+.03*pe,g({center:[Ae[0],Ae[1]-.12,Ae[2]],size:.1,pulse:pe})}for(let D of o.parts)D.blend&&o.drawBlend({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale})}return X.state=a,X.place=$0,X.setWalk=O=>{k=O||null,k&&(a.glow=0)},X.setSeat=O=>{L=O||null,a.glow=L?0:a.glow,b=-1},X.setPiano=O=>{O=!!O,O!==R&&(R=O,R&&(a.glow=0),b=-1)},X};K1.exports.PLACE=$0});var Q1=de((cA,Lx)=>{"use strict";Lx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var J1=de((lA,Ix)=>{"use strict";var Cx=ua(),zx=Bc(),Xi=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Z1(){return Cx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Sk=`
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
`,Nx=!1;function Px(){if(Nx)return;Nx=!0;let e=document.createElement("style");e.textContent=Sk,document.head.appendChild(e)}var Ak='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Tk(e){return!e||!e.visit||!Z1()?"":(Px(),`<button type="button" class="visit-btn" data-visit="${Xi(e.slug||"")}" aria-label="Visit what remained: watch ${Xi(e.title)} come to life">${Ak}<span>Visit what remained</span></button>`)}function Lk(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Ml=null;function zk(e){if(Ml||!e||!e.visit)return;Px();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(Cx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${Xi(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Xi(e.title)}, ${Xi(zx(e))}" src="${Xi(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Xi(e.title)}</span>
			<span class="visit-meta">${Xi(zx(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=Lk(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),d()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),u()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let p=m=>m.stopImmediatePropagation();window.addEventListener("keyup",p,!0);let h=!1;function u(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function v(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>u()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&u()}),r.addEventListener("ended",u),r.addEventListener("error",u);function d(){if(Ml){Ml=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",p,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",d),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}u()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&d(),g.dataset.act==="again"&&(s.forEach(clearTimeout),v()))}),r.src=e.visit.video,Ml={close:d},requestAnimationFrame(()=>{n.classList.add("on"),c(v,1300)})}var Rx={};function Nk(e){if(!e||!e.visit||Rx[e.visit.video]||!Z1())return;Rx[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}Ix.exports={available:Z1,button:Tk,open:zk,warm:Nk,get active(){return!!Ml}}});var $x=de((fA,Fx)=>{"use strict";var Rk=ua(),tc=[0,0],Qs=[0,0],vi=null,td=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(tc[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),tc[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),td=performance.now())},{passive:!0});let e=()=>{td=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(vi||(vi=[t.gamma,t.beta]),vi[0]+=(t.gamma-vi[0])*.01,vi[1]+=(t.beta-vi[1])*.01,tc[0]=Math.max(-1,Math.min(1,(t.gamma-vi[0])/14)),tc[1]=Math.max(-1,Math.min(1,(t.beta-vi[1])/14)))},{passive:!0})}var Ox=0,Zs=null,gh=null,Ka=[0,0,0],ed=0,Js=null,ec=0,G0={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Ck={apply(e,t){let o=Math.min(.1,Math.max(0,t-Ox));Ox=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let f=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],l=!Zs;if(Zs&&o>0){let b=[n[0]-Zs[0],n[1]-Zs[1],n[2]-Zs[2]],E=Math.hypot(b[0],b[1],b[2]);if(E>2.5)l=!0;else{let L=Math.min(1,o*5);for(let R=0;R<3;R++)Ka[R]+=(b[R]/o-Ka[R])*L}let k=Math.hypot(r[0]-gh[0],r[1]-gh[1],r[2]-gh[2]);ec=E/o<.12&&k/o<.2?ec+o:0}l&&(Ka[0]=Ka[1]=Ka[2]=0,ec=0),Zs=n.slice(),gh=r.slice(),ed=Math.hypot(Ka[0],Ka[1],Ka[2]);let p=Math.min(1,o*2.6);Qs[0]+=(tc[0]-Qs[0])*p,Qs[1]+=(tc[1]-Qs[1])*p;let h=Math.max(.03,Math.min(.32,i*.05)),u=(Rk.isPhone&&!vi?1.5:1)*Math.min(1,ec/2.5),v=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*u,d=Math.sin(t*.097+.6)*h*.16*u,m=Qs[0]*h+v,g=-Qs[1]*h*.45+d;for(let b=0;b<3;b++)G0.eye[b]=n[b]+s[b]*m+f[b]*g,G0.target[b]=r[b]+(s[b]*m+f[b]*g)*.12;n[1]>.05&&(G0.eye[1]=Math.max(.05,G0.eye[1]));let y=Ka[0]*s[0]+Ka[2]*s[2];return G0.fov=e.fov+Math.min(3.5,ed*.55),G0.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),G0},pull(e,t){(Js===null||!(Math.abs(e.focus-Js)<40))&&(Js=e.focus);let o=1/60;Js+=(e.focus-Js)*Math.min(1,o*3.2),e.focus=Js,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,ec/3))},get speed(){return ed},get resting(){return ec>2&&performance.now()-td>2e3}};Fx.exports=Ck});var od=de((hA,Gx)=>{Gx.exports=1e-6});var nd=de((uA,Dx)=>{Dx.exports=Pk;function Pk(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var Hx=de((dA,qx)=>{qx.exports=Ik;function Ik(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var rd=de((pA,Bx)=>{Bx.exports=Ok;function Ok(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var ad=de((vA,Ux)=>{Ux.exports=Fk;function Fk(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var id=de((mA,jx)=>{jx.exports=$k;function $k(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Yx=de((gA,Xx)=>{Xx.exports=Dk;var Wx=rd(),Vx=ad(),Gk=id();function Dk(e,t){var o=Wx(e[0],e[1],e[2]),n=Wx(t[0],t[1],t[2]);Vx(o,o),Vx(n,n);var r=Gk(o,n);return r>1?0:Math.acos(r)}});var Qx=de((xA,Kx)=>{Kx.exports=qk;function qk(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Jx=de((yA,Zx)=>{Zx.exports=Hk;function Hk(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var t3=de((bA,e3)=>{e3.exports=Bk;var sd=od();function Bk(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=sd*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=sd*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=sd*Math.max(1,Math.abs(r),Math.abs(s))}});var n3=de((wA,o3)=>{o3.exports=Uk;function Uk(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var a3=de((_A,r3)=>{r3.exports=jk;function jk(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var cd=de((MA,i3)=>{i3.exports=Wk;function Wk(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var c3=de((kA,s3)=>{s3.exports=cd()});var ld=de((EA,l3)=>{l3.exports=Vk;function Vk(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var h3=de((SA,f3)=>{f3.exports=ld()});var fd=de((AA,u3)=>{u3.exports=Xk;function Xk(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var p3=de((TA,d3)=>{d3.exports=fd()});var m3=de((LA,v3)=>{v3.exports=Yk;function Yk(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var x3=de((zA,g3)=>{g3.exports=Kk;function Kk(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var b3=de((NA,y3)=>{y3.exports=Qk;function Qk(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var _3=de((RA,w3)=>{w3.exports=Zk;function Zk(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var k3=de((CA,M3)=>{M3.exports=Jk;function Jk(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var S3=de((PA,E3)=>{E3.exports=eE;function eE(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var T3=de((IA,A3)=>{A3.exports=tE;function tE(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var hd=de((OA,L3)=>{L3.exports=oE;function oE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var N3=de((FA,z3)=>{z3.exports=hd()});var ud=de(($A,R3)=>{R3.exports=nE;function nE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var P3=de((GA,C3)=>{C3.exports=ud()});var dd=de((DA,I3)=>{I3.exports=rE;function rE(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var F3=de((qA,O3)=>{O3.exports=dd()});var pd=de((HA,$3)=>{$3.exports=aE;function aE(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var D3=de((BA,G3)=>{G3.exports=pd()});var H3=de((UA,q3)=>{q3.exports=iE;function iE(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var U3=de((jA,B3)=>{B3.exports=sE;function sE(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var W3=de((WA,j3)=>{j3.exports=cE;function cE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var X3=de((VA,V3)=>{V3.exports=lE;function lE(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var K3=de((XA,Y3)=>{Y3.exports=fE;function fE(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var Z3=de((YA,Q3)=>{Q3.exports=hE;function hE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var ey=de((KA,J3)=>{J3.exports=uE;function uE(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var oy=de((QA,ty)=>{ty.exports=dE;function dE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],f=o[3],l=f*n+s*a-c*r,p=f*r+c*n-i*a,h=f*a+i*r-s*n,u=-i*n-s*r-c*a;return e[0]=l*f+u*-i+p*-c-h*-s,e[1]=p*f+u*-s+h*-i-l*-c,e[2]=h*f+u*-c+l*-s-p*-i,e}});var ry=de((ZA,ny)=>{ny.exports=pE;function pE(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=r+i*f-s*c,e[2]=a+i*c+s*f,e}});var iy=de((JA,ay)=>{ay.exports=vE;function vE(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var cy=de((eT,sy)=>{sy.exports=mE;function mE(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var fy=de((tT,ly)=>{ly.exports=gE;var Yi=nd()();function gE(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)Yi[0]=e[i],Yi[1]=e[i+1],Yi[2]=e[i+2],r(Yi,Yi,a),e[i]=Yi[0],e[i+1]=Yi[1],e[i+2]=Yi[2];return e}});var uy=de((oT,hy)=>{hy.exports={EPSILON:od(),create:nd(),clone:Hx(),angle:Yx(),fromValues:rd(),copy:Qx(),set:Jx(),equals:t3(),exactEquals:n3(),add:a3(),subtract:cd(),sub:c3(),multiply:ld(),mul:h3(),divide:fd(),div:p3(),min:m3(),max:x3(),floor:b3(),ceil:_3(),round:k3(),scale:S3(),scaleAndAdd:T3(),distance:hd(),dist:N3(),squaredDistance:ud(),sqrDist:P3(),length:dd(),len:F3(),squaredLength:pd(),sqrLen:D3(),negate:H3(),inverse:U3(),normalize:ad(),dot:id(),cross:W3(),lerp:X3(),random:K3(),transformMat4:Z3(),transformMat3:ey(),transformQuat:oy(),rotateX:ry(),rotateY:iy(),rotateZ:cy(),forEach:fy()}});var vy=de((nT,py)=>{"use strict";function dy(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}py.exports=function(t){let o=t.ownerDocument||document,n=dy(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let p=l.call(t);p&&p.catch&&p.catch(()=>{})}catch(p){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=dy(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var by=de((iT,yy)=>{"use strict";var D0=$s(),q0=uy(),xE=vy(),rT=Math.PI/4,aT=Math.PI/6,my=2,yE=1,bE=2.4,wE=2.4,_E=1e3,ME=5,kE=7,vd=hr().C,kl=[[7,1.6],[7,vd.zc],[vd.x1-2.95,vd.zc]],Ki=kl.slice(1).map((e,t)=>{let o=kl[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),md=Ki.reduce((e,t)=>e+t.len,0);function gy(e){let t=Math.max(0,Math.min(md,e));for(let n of Ki){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=kl[kl.length-1];return[o[0],o[1]]}function EE(e){let t=0;for(let n=0;n<Ki.length;n++){let r=Ki[n],a=t+r.len;if(e<a-1e-4||n===Ki.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?Ki[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=Ki[Ki.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var SE=Math.PI/4,AE=7,TE=140,LE=70,xy=(e,t,o)=>(1-e)*t+e*o,zE=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;yy.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[kE,my,kl[0][1]],c=0,f=1,l=0,p=[.707,0,.707],h=[0,1,0],u=[0,0,0],v=.5,d=D0.identity([]),m=D0.identity([]),g=!1,y=[0,0,0],b=[0,0,0],E=1,k=!1;let L=Xe=>{n[1]+=Xe*SE},R=(Xe,ut,dt)=>{if(Xe=Math.max(Math.min(Xe,100),-100),ut=Math.max(Math.min(ut,100),-100),n[0]=0,k){a=0;return}for(a+=Xe;a>=dt;)L(1),a-=dt;for(;a<=-dt;)L(-1),a+=dt};xE(document.body).on("attain",Xe=>{Xe.on("data",ut=>{R(ut.dx,ut.dy,TE)})});let O=null,te=null,G=0,oe={x:0,y:0},D=58,W=document.createElement("div");W.id="museum-mobile-controls",W.innerHTML=`

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
	`,document.body.appendChild(W);let Ae=W.querySelector("#museum-joystick"),Be=W.querySelector("#museum-joystick-knob"),Te=()=>{Be.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},pe=Xe=>{let ut=Xe.clientX-oe.x,dt=Xe.clientY-oe.y,Xt=Math.hypot(ut,dt);if(Xt>D&&(ut=ut/Xt*D,dt=dt/Xt*D),Be.style.transform=`translate(
				calc(-50% + ${ut}px),
				calc(-50% + ${dt}px)
			)`,Xt<10){i[0]=0,i[2]=0;return}let Ho=ut/D,zt=dt/D;i[0]=0,i[2]=Math.abs(zt)>.15?zt:0},_e=(Xe,ut)=>{for(let dt=0;dt<Xe.length;dt++)if(Xe[dt].identifier===ut)return Xe[dt];return null},ht=Xe=>!!(Xe&&Xe.closest&&Xe.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Ot=Xe=>{if(!ht(Xe.target)&&(Xe.cancelable&&Xe.preventDefault(),!k))for(let ut=0;ut<Xe.changedTouches.length;ut++){let dt=Xe.changedTouches[ut];if(O===null&&dt.clientX<window.innerWidth*.48){O=dt.identifier;let Xt=Ae.getBoundingClientRect();oe.x=Xt.left+Xt.width/2,oe.y=Xt.top+Xt.height/2,pe(dt)}else te===null&&dt.clientX>=window.innerWidth*.48&&(te=dt.identifier,G=dt.clientX,a=0)}},He=Xe=>{if(ht(Xe.target)||(Xe.cancelable&&Xe.preventDefault(),k))return;let ut=O===null?null:_e(Xe.touches,O);ut&&pe(ut);let dt=te===null?null:_e(Xe.touches,te);if(dt){let Xt=dt.clientX-G;G=dt.clientX,R(Xt,0,LE)}},at=Xe=>{if(!ht(Xe.target)){Xe.cancelable&&Xe.preventDefault();for(let ut=0;ut<Xe.changedTouches.length;ut++){let dt=Xe.changedTouches[ut];dt.identifier===O&&(O=null,Te()),dt.identifier===te&&(te=null)}}};document.addEventListener("touchstart",Ot,{passive:!1}),document.addEventListener("touchmove",He,{passive:!1}),document.addEventListener("touchend",at,{passive:!1}),document.addEventListener("touchcancel",at,{passive:!1});let _t=document.createElement("style");_t.textContent=`

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
	`,document.head.appendChild(_t);var Jt={};let ro=Xe=>{if(Xe.defaultPrevented||Xe.ctrlKey||Xe.altKey||Xe.metaKey)return;let ut=Xe.type==="keydown";Jt[Xe.code]=ut,ut&&!Xe.repeat&&!k&&((Xe.code==="KeyA"||Xe.code==="ArrowLeft")&&L(-1),(Xe.code==="KeyD"||Xe.code==="ArrowRight")&&L(1)),g=!1;let dt=Jt.KeyW||Jt.ArrowUp?1:0;i=[0,0,(Jt.KeyS||Jt.ArrowDown?1:0)-dt],Xe.preventDefault()};window.addEventListener("keydown",ro),window.addEventListener("keyup",ro);var en=0;return{pos:s,fmouse:r,forward:p,up:h,setPaused:Xe=>{k=!!Xe,k&&(i[0]=0,i[2]=0,Te())},place:(Xe,ut)=>{c=Math.max(0,Math.min(md,Xe));let dt=gy(c);s[0]=dt[0],s[2]=dt[1],n[1]=ut,r[1]=ut,a=0,f=1},view:()=>d,proj:()=>(D0.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Xe})=>{let ut=Xe-en;en=Xe;let dt=[0,0,0],Xt=[];q0.set(p,Math.sin(r[1]),0,-Math.cos(r[1])),q0.set(h,0,1,0);let Oo=g?wE:bE,Ho=Math.sin(n[1]),zt=-Math.cos(n[1]),Se=EE(c),Pe=Ho*Se.ahead[0]+zt*Se.ahead[1],Mt=Ho*Se.back[0]+zt*Se.back[1],je=f;Math.max(Pe,Mt)>.3&&(je=Pe>=Mt?1:-1);let Ue=k?0:-i[2]*Oo;l+=(Ue-l)*(1-Math.exp(-Math.min(ut,.1)*5.5)),Ue===0&&Math.abs(l)<.01&&(l=0);let so=l*je*Math.min(ut,.1);k&&(i[0]=0,i[2]=0,so=0,l=0),so!==0&&(f=Math.sign(so)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(md,c+so));let _=gy(c);q0.set(u,_[0]-s[0],0,_[1]-s[2]);let Eo=q0.len(u);Eo===0&&v!==.25&&(v=(Math.abs((v+.5)%1-.5)-.25)*.8+.25,(v+.01)%.25<.02&&(v=.25));let co=v;if(v+=Eo/(g?ME:_E),s[1]=my,q0.add(s,s,u),E<1){E+=ut/yE,E=Math.min(E,1);let ao=zE(E);q0.set(s,xy(ao,y[0],b[0]),s[1],xy(ao,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(ut,.1)*AE),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),D0.identity(d),D0.rotateX(d,d,0),D0.rotateY(d,d,r[1]),D0.translate(d,d,q0.scale(dt,s,-1))}}}});var _y=de((sT,wy)=>{"use strict";var{skylightGLSL:NE,Z_START:RE,Z_END:CE,GLASS_Y:PE}=Ss(),{oculusGLSL:IE,A:H0}=va(),{windowLightGLSL:OE,C:xh}=hr(),{doorLightGLSL:FE}=Li(),yh=ur(),bh=Vf(),Qn=e=>e.toFixed(4),oc=.1,nc=700,B0={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032,ao:.75};function $E(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],p=t[9],h=t[10],u=t[11],v=t[12],d=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,E=o*f-a*i,k=n*c-r*s,L=n*f-a*s,R=r*f-a*c,X=l*d-p*v,O=l*m-h*v,te=l*g-u*v,G=p*m-h*d,oe=p*g-u*d,D=h*g-u*m,W=y*D-b*oe+E*G+k*te-L*O+R*X;return W?(W=1/W,e[0]=(s*D-c*oe+f*G)*W,e[1]=(r*oe-n*D-a*G)*W,e[2]=(d*R-m*L+g*k)*W,e[3]=(h*L-p*R-u*k)*W,e[4]=(c*te-i*D-f*O)*W,e[5]=(o*D-r*te+a*O)*W,e[6]=(m*E-v*R-g*b)*W,e[7]=(l*R-h*E+u*b)*W,e[8]=(i*oe-s*te+f*X)*W,e[9]=(n*te-o*oe-a*X)*W,e[10]=(v*L-d*E+g*y)*W,e[11]=(p*E-l*L-u*y)*W,e[12]=(s*O-i*G-c*X)*W,e[13]=(o*G-n*O+r*X)*W,e[14]=(d*b-v*k-m*y)*W,e[15]=(l*k-p*b+h*y)*W,e):null}function GE(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var DE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;wy.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>t.post>=2?2:4,i=He=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},He||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=e.framebuffer({color:c,depth:f||!0}),p=[s(),s()],h=[s(),s()],u=[s(),s()],v=[s(),s()],d=[s(),s()],m=new Array(16).fill(0),g=new Array(16).fill(0),y=[0,0,0],b={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},E={position:[-1,-1,3,-1,-1,3]},k=(He,at,_t)=>e(Object.assign({vert:DE,frag:He,attributes:E,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:at,framebuffer:e.prop("out")},_t||{})),L=[2.6,0,RE-3.2,12.6,PE,CE+.4],R=[H0.x0-.2,0,H0.z0,H0.x1,H0.domeTop,H0.z1],X=[xh.x0,0,xh.z0,xh.x1,7.6,xh.z1],O=[.35,0,.35,13.65,7.6,9],te=He=>`vec3(${Qn(He[0])}, ${Qn(He[1])}, ${Qn(He[2])}), vec3(${Qn(He[3])}, ${Qn(He[4])}, ${Qn(He[5])})`,G=k(`
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

	${NE()}
	${IE()}
	${OE()}
	${FE()}

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
			vec2 t = hitBox(eye, rd, ${te(L)});
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
			vec2 t = hitBox(eye, rd, ${te(R)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Qn(H0.dome.base)} && p.x > ${Qn(H0.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${te(X)});
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
			vec2 t = hitBox(eye, rd, ${te(O)});
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
	}`,{depthTex:()=>f,invVP:()=>m,eye:()=>y,time:e.context("time"),night:()=>yh.night,strength:()=>oe}),oe=[0,0,0,0];function D(){let He=B0.shafts*b.shafts,at=yh.night;return oe[0]=bh.box(L)?.06*He*(1+.9*at):0,oe[1]=bh.box(R,!1,"court")?.1*He*(1+.9*at):0,oe[2]=bh.box(X)?.07*He*(1+.4*at):0,oe[3]=bh.box(O)?.04*He*(1-.75*at):0,oe[0]+oe[1]+oe[2]+oe[3]>5e-4}let W=k(`
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
	}`,{src:e.prop("src"),dir:(He,at)=>[at.dir[0]/at.size[0],at.dir[1]/at.size[1]]}),Ae=k(`
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
	}`,{src:e.prop("src"),texel:(He,at)=>[.5/at.size[0],.5/at.size[1]],threshold:e.prop("threshold")}),Be=k(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D scene, depthTex, soft, bloomA, bloomB, shafts, occlTex;
	uniform float aoK;
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
		return 2.0 * ${Qn(oc)} * ${Qn(nc)} / (${Qn(nc+oc)} - z * ${Qn(nc-oc)});
	}

	// a filmic curve (ACES, fitted): soft shoulder, rich toe
	vec3 aces(vec3 x) {
		return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
	}

	void main() {
		vec2 p = uv;

		// letterbox: the picture is framed by black bars top and bottom
		// (slim, so the room keeps most of the screen)
		float bar = letterbox * 0.07;
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

		// the soft shadow where things meet (it takes away ambient light,
		// so it is gentler on what is brightly lit)
		float occ = texture2D(occlTex, p).r;
		float Lc = dot(lin, vec3(0.2126, 0.7152, 0.0722));
		lin *= mix(1.0, occ, aoK * (1.0 - 0.6 * smoothstep(0.25, 0.9, Lc)));

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

		// an S-curve with real blacks, then the classic film split: the
		// shadows a little cool, the lamp-lit highlights warm, and a touch
		// less saturation overall
		col = col * col * (3.0 - 2.0 * col) * (0.48 + 0.02 * night) + col * (0.52 - 0.02 * night);
		float l2 = luma(col);
		// by day the shadows lean cool; by night cold and blue-green, like moonlit film
		col = mix(col, col * mix(vec3(0.95, 0.99, 1.05), vec3(0.86, 0.97, 1.10), night), (1.0 - smoothstep(0.0, 0.45, l2)) * 0.7);
		col *= mix(vec3(1.0), vec3(1.045, 1.0, 0.93), smoothstep(0.35, 0.9, l2) * (1.0 - night));
		col = mix(vec3(l2), col, 0.92 - 0.12 * night);
		// the darkest blacks stay just off pure black, like a print
		col = max(col, vec3(0.012, 0.011, 0.010));

		// vignette
		vec2 q = (p - 0.5) * vec2(res.x / res.y, 1.0);
		float vig = 1.0 - smoothstep(0.35, 1.25, length(q * vec2(0.82, 1.0)) * 1.15) * vignette;
		col *= vig;

		// film grain, stronger in the shadows
		float n = hash12(gl_FragCoord.xy + fract(time * 13.37) * 113.0) - 0.5;
		col += n * grain * (1.0 - 0.6 * luma(col));

		col = mix(col, fadeColor, fade);
		gl_FragColor = vec4(col, 1.0);
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>p[0],bloomA:()=>h[0],bloomB:()=>u[0],shafts:()=>v[0],occlTex:()=>d[0],aoK:()=>B0.ao,res:()=>[l.width,l.height],time:e.context("time"),exposure:()=>B0.exposure*b.exposure,vignette:()=>Math.min(1,B0.vignette+b.vignette+.22*yh.night),night:()=>yh.night,grain:()=>B0.grain,bloomK:()=>B0.bloom,letterbox:()=>b.letterbox,fade:()=>b.fade,fadeColor:()=>b.fadeColor,aperture:()=>t.post>=2?b.aperture:0,focus:()=>b.focus,hasDepth:n?1:0},{framebuffer:null}),Te=e({framebuffer:()=>l}),pe=.55,_e=12,ht=k(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D depthTex;
	uniform mat4 invVP, vp;
	uniform vec3 eye;
	uniform vec2 res;

	vec3 world(vec2 p) {
		float d = texture2D(depthTex, p).r;
		vec4 w = invVP * vec4(p * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
		return w.xyz / w.w;
	}
	float hash12(vec2 p) {
		vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
		p3 += dot(p3, p3.yzx + 33.33);
		return fract((p3.x + p3.y) * p3.z);
	}

	void main() {
		float d = texture2D(depthTex, uv).r;
		if (d > 0.99999) { gl_FragColor = vec4(1.0); return; }
		vec3 P = world(uv);
		float dist = length(P - eye);

		// the surface's facing, from its neighbours (the nearer one on
		// each side, so an edge does not bend it)
		vec2 px = 1.0 / res;
		vec3 dx1 = world(uv + vec2(px.x, 0.0)) - P, dx0 = P - world(uv - vec2(px.x, 0.0));
		vec3 dy1 = world(uv + vec2(0.0, px.y)) - P, dy0 = P - world(uv - vec2(0.0, px.y));
		vec3 dx = dot(dx1, dx1) < dot(dx0, dx0) ? dx1 : dx0;
		vec3 dy = dot(dy1, dy1) < dot(dy0, dy0) ? dy1 : dy0;
		vec3 N = normalize(cross(dx, dy));
		if (dot(N, eye - P) < 0.0) N = -N;
		vec3 T = normalize(cross(N, abs(N.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
		vec3 B = cross(N, T);

		float R = ${Qn(pe)};
		float a0 = hash12(gl_FragCoord.xy) * 6.2832;
		float occ = 0.0;
		for (int i = 0; i < ${_e}; i++) {
			float fi = float(i);
			float r = (fi + 0.5) / ${Qn(_e)};
			float ang = a0 + fi * 2.39996;
			vec2 dk = vec2(cos(ang), sin(ang)) * sqrt(r);
			vec3 dir = T * dk.x + B * dk.y + N * sqrt(max(0.0, 1.0 - dot(dk, dk)));
			// more probes close in, where the shadow is deepest
			vec3 S = P + dir * R * mix(0.12, 1.0, r * r) + N * 0.015;
			vec4 c = vp * vec4(S, 1.0);
			vec2 suv = c.xy / c.w * 0.5 + 0.5;
			if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) continue;
			float dQ = length(world(suv) - eye);
			float dS = length(S - eye);
			// buried, and by something nearby (not a wall far behind it)
			float range = smoothstep(0.0, 1.0, R / max(abs(dist - dQ), 1e-3));
			occ += step(dQ, dS - 0.02) * range;
		}
		float ao = 1.0 - occ / ${Qn(_e)};
		// (far away it fades: the probes would be smaller than a pixel)
		ao = mix(ao, 1.0, smoothstep(18.0, 40.0, dist));
		gl_FragColor = vec4(vec3(ao), 1.0);
	}`,{depthTex:()=>f,invVP:()=>m,vp:()=>g,eye:()=>y,res:(He,at)=>[at.size[0],at.size[1]]}),Ot=k(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D src, depthTex;
	uniform vec2 dir;
	float lin(float d) {
		float z = d * 2.0 - 1.0;
		return 2.0 * ${Qn(oc)} * ${Qn(nc)} / (${Qn(nc+oc)} - z * ${Qn(nc-oc)});
	}
	void main() {
		float z0 = lin(texture2D(depthTex, uv).r);
		float sum = 0.0, wsum = 0.0;
		for (int i = -3; i <= 3; i++) {
			vec2 q = uv + dir * float(i);
			float z = lin(texture2D(depthTex, q).r);
			float w = (1.0 - abs(float(i)) / 4.5) * (1.0 - smoothstep(0.0, 0.06 * z0, abs(z - z0)));
			sum += texture2D(src, q).r * w;
			wsum += w;
		}
		gl_FragColor = vec4(vec3(sum / max(wsum, 1e-4)), 1.0);
	}`,{src:e.prop("src"),depthTex:()=>f,dir:(He,at)=>[at.dir[0]/at.size[0],at.dir[1]/at.size[1]]});return{shot:b,look:B0,hasDepth:n,capture(He,at,_t){let Jt=Math.max(.4,Math.min(1,t.scale||1)),ro=Math.max(2,Math.round(He.drawingBufferWidth*Jt/2)*2),en=Math.max(2,Math.round(He.drawingBufferHeight*Jt/2)*2);(l.width!==ro||l.height!==en)&&l.resize(ro,en);let Xe=Math.max(1,Math.ceil(ro/2)),ut=Math.max(1,Math.ceil(en/2));p.forEach(dt=>dt.resize(Xe,ut)),h.forEach(dt=>dt.resize(Math.max(1,Math.ceil(ro/4)),Math.max(1,Math.ceil(en/4)))),u.forEach(dt=>dt.resize(Math.max(1,Math.ceil(ro/8)),Math.max(1,Math.ceil(en/8)))),v.forEach(dt=>dt.resize(Math.max(1,Math.ceil(ro/a())),Math.max(1,Math.ceil(en/a())))),d.forEach(dt=>dt.resize(Xe,ut)),GE(g,at.proj,at.view),$E(m,g),y[0]=at.eye[0],y[1]=at.eye[1],y[2]=at.eye[2],Te(()=>{e.clear({color:[0,0,0,1],depth:1}),_t()})},present(){let He=at=>[at.width,at.height];n&&t.post>=1&&D()?(G({out:v[0]}),W({out:v[1],src:v[0],dir:[1,0],size:He(v[0])}),W({out:v[0],src:v[1],dir:[0,1],size:He(v[0])})):e.clear({color:[0,0,0,1],framebuffer:v[0]}),n&&t.post>=2?(ht({out:d[0],size:He(d[0])}),Ot({out:d[1],src:d[0],dir:[1,0],size:He(d[0])}),Ot({out:d[0],src:d[1],dir:[0,1],size:He(d[0])})):e.clear({color:[1,1,1,1],framebuffer:d[0]}),Ae({out:p[0],src:c,size:[l.width,l.height],threshold:0}),W({out:p[1],src:p[0],dir:[1,0],size:He(p[0])}),W({out:p[0],src:p[1],dir:[0,1],size:He(p[0])}),Ae({out:h[0],src:p[0],size:He(p[0]),threshold:.42}),W({out:h[1],src:h[0],dir:[1,0],size:He(h[0])}),W({out:h[0],src:h[1],dir:[0,1],size:He(h[0])}),Ae({out:u[0],src:h[0],size:He(h[0]),threshold:0}),W({out:u[1],src:u[0],dir:[1.5,0],size:He(u[0])}),W({out:u[0],src:u[1],dir:[0,1.5],size:He(u[0])}),Be({out:null})}}}});var Ay=de((cT,Sy)=>{"use strict";var My=ur().GLSL,qE=x0(),gd=Li(),{C:HE,FAR_DOOR:BE}=hr(),UE=100*Math.PI/180,ky=e=>[BE.x-e[2],e[1],HE.zc-7+e[0]],Ey=e=>[-e[2],e[1],e[0]];function jE(e){let t=[],o=[],n=[],r=[],a=qE.createBuilder(t,o,n,r);gd.addFrames(a,e);let i=gd.glassPanes(e),s=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:s(t),normal:s(o),elements:n,glass:i}}Sy.exports=e=>{let t=gd.DOOR,o=["left","right"].map(l=>{let p=jE(l),h=p.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:p.position.map(u=>u.slice()),srcN:p.normal.map(u=>u.slice()),srcG:p.glass.map(u=>u.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(p.elements),type:"uint32"}),glassCount:p.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(p.glass.length*3),outGN:new Float32Array(p.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let p of o){let h=p.sign*l,u=Math.cos(h),v=Math.sin(h),d=y=>{let b=y[0]-p.hinge,E=y[2];return[p.hinge+b*u+E*v,y[1],-b*v+E*u]},m=y=>[y[0]*u+y[2]*v,y[1],-y[0]*v+y[2]*u];p.src.forEach((y,b)=>{let E=ky(d(y));p.outP.set(E,b*3),p.outN.set(Ey(m(p.srcN[b])),b*3)});let g=Ey(m([0,0,1]));p.srcG.forEach((y,b)=>{p.outG.set(ky(d(y)),b*3),p.outGN.set(g,b*3)}),p.pos.subdata(p.outP),p.nrm.subdata(p.outN),p.gpos.subdata(p.outG),p.gnrm.subdata(p.outGN)}}}r(0);let a=`
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
		${My}
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
		${My}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*UE);for(let l of o)i({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var Ly=de((lT,Ty)=>{"use strict";var WE=ur().GLSL,{skylightGLSL:VE}=Ss(),{oculusGLSL:XE}=va(),{windowLightGLSL:YE}=hr(),Oa=.22;function KE(){let e=[],t=[],o=[],n=[],i=(l,p)=>{let h=Oa*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(p>0?1.06:.94),u=l*Oa-Oa*.12,v=p*h,d=Math.abs(p)*h*.42-.14*l*l*Oa;d+=Math.sin(l*17+(p>0?0:2.1))*.012*Oa*p*p;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=d*g-v*y,E=d*y+v*g;return[u,b,E+.05*Oa*l*l]},s=(l,p)=>{let u=i(Math.min(1,l+.01),p),v=i(Math.max(0,l-.01),p),d=i(l,Math.min(1,p+.01)),m=i(l,Math.max(-1,p-.01)),g=[u[0]-v[0],u[1]-v[1],u[2]-v[2]],y=[d[0]-m[0],d[1]-m[1],d[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],E=Math.hypot(b[0],b[1],b[2])||1,k=b[1]<0?-1:1;return[b[0]/E*k,b[1]/E*k,b[2]/E*k]};for(let l=0;l<=18;l++){let p=l/18;for(let h=0;h<=5*2;h++){let u=h/5-1;e.push(i(p,u)),t.push(s(Math.min(.97,Math.max(.03,p)),u)),o.push([p,u])}}let c=5*2+1;for(let l=0;l<18;l++)for(let p=0;p<c-1;p++){let h=l*c+p,u=h+1,v=h+c,d=v+1;n.push([h,v,u],[u,v,d])}let f=e.length;return e.push([-Oa*.12,0,-.003],[-Oa*.12,0,.003],[-Oa*.24,-.01,.0015],[-Oa*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:e,nrm:t,uv:o,idx:n}}Ty.exports=e=>{let t=KE(),o=e({vert:`
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
		${WE}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${VE()}
		${XE()}
		${YE()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=ur(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Oa*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var Ry=de((fT,Ny)=>{"use strict";var{skylightGLSL:QE,Z_START:zy,Z_END:ZE}=Ss(),{oculusGLSL:JE,A:rc}=va(),{windowLightGLSL:e8,C:U0}=hr();Ny.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=U0.x0+.6,f=U0.x1-.3,l=[];for(let v=0;v<o;v++)l.push([2.5+s()*10.5,.3+s()*8,zy-3.5+s()*(ZE-zy+4.5),s()]);for(let v=0;v<n;v++)l.push([rc.x0+.3+s()*(rc.x1-rc.x0-.6),.3+s()*7.5,rc.z0+.3+s()*(rc.z1-rc.z0-.6),s()]);for(let v=0;v<r;v++)l.push([c+s()*(f-c),.2+s()*5.6,U0.z0+.25+s()*(U0.z1-U0.z0-.5),s()]);let p=v=>v.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],u=e({vert:`
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

		${QE()}
		${JE()}
		${e8()}

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
				p.x = ${p(c)} + mod(p.x - ${p(c)} - gust.x * (0.55 + 0.9 * seed.w), ${p(f-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${p(U0.z0+.1)}, ${p(U0.z1-.1)});
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
			float size = sharp + blur * ${p(a)} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:v=>v.viewportHeight*.006,focus:(v,d)=>d&&d.focus||6,aperture:(v,d)=>d&&d.aperture||0,wake0:(v,d)=>(d&&d.wake||h)[0],wake1:(v,d)=>(d&&d.wake||h)[1],wake2:(v,d)=>(d&&d.wake||h)[2],wake3:(v,d)=>(d&&d.wake||h)[3],wakeDir:(v,d)=>d&&d.wakeDir||[0,0,1],gust:(v,d)=>d&&d.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return v=>u(v||{})}});var $y=de((hT,Fy)=>{"use strict";var{C:Oy}=hr(),Cy=ur(),Py=15.3,t8=37.1,Iy=Oy.z1+.9,o8=Oy.z1+.7+16-.6;Fy.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([Py+r()*(t8-Py),l,Iy+r()*(o8-Iy),r()])}let i=[],s=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>Cy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Cy.night>.01&&c()}}});var Mh=de((uT,ea)=>{"use strict";var Gy=ur(),Qa=Ii(),n8=$s(),Zi=Math.PI,ct=e=>(+e).toFixed(4),Fa=e=>`vec3(${ct(e[0])}, ${ct(e[1])}, ${ct(e[2])})`,Wo={x0:-2.05,z0:41.45,z1:47.55,top:5.1},xo=-.55,Bn=-2,an=42.25,Rn=43.65,ba=45.35,Rr=46.75,Zn=2.75,Zr=.12,r8=(xo+Bn)/2,zo={x:-1.3,y:1.42,w:.42,h:.52,z:Rn,cell:.026},It={x0:-1.85,x1:-.75,top:.98,z0:Rn-.3,z1:Rn-.02},xa={x0:-1.44,x1:-1.16,y0:It.top-.002,y1:It.top+.018},Jr={cx:-1.3,cz:Rn-.165,w:.2,d:.255,y:It.top+.0012},ir={x:-1.03,z:Rn-.14,r:.042,h:.075},Ko={x:-.86,z:Rn-.12,h:.085,r:.019};Ko.flame=[Ko.x,It.top+.012+Ko.h+.028,Ko.z];var _h={a:[ir.x-.004,It.top+.03,ir.z+.004],b:[ir.x-.13,It.top+.34,ir.z-.12]},sn=[-1.5,2.42,44.66],Nn=[-1.78,1.95,an+.09],ya={x:-1.32,z:44.08,y:.64,heading:.32},Hy={window:{eye:[-1.3,1.33,42.8],target:[zo.x,1.37,Rn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[Jr.cx,It.top,Jr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},xr={z0:(an+Rn)/2+.03,z1:(an+Rn)/2+.56,y0:.98,y1:1.78,x:xo+.03,cell:.047};Hy.peek={eye:[-1.2,1.42,42.95],target:[Qa.PLAY.stoolX-Qa.OFF[0],.85,Qa.PLAY.keyFront+.2],fov:30};var Qi={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function Dy(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${ct(zo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Fa(sn)};
		if (d.z > -0.001) return 0.0;
		float t = (${ct(zo.z)} - ${ct(sn[2])}) / d.z;
		vec2 g = (${Fa(sn)} + d * t).xy - vec2(${ct(zo.x)}, ${ct(zo.y)});
		float inWin = (1.0 - smoothstep(${ct(zo.w/2-.01)}, ${ct(zo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${ct(zo.h/2-.01)}, ${ct(zo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${ct(zo.z)}) / abs(${ct(zo.z)} - ${ct(sn[2])}) / ${ct(zo.cell)};
		vec2 qc = fract(g / ${ct(zo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Fa(Ko.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${ct(ir.x)}, ${ct(ir.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${ct(ir.x)}, ${ct(ir.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${ct(ir.r*.7)}, ${ct(ir.r*1.6)}, r)) * (1.0 - smoothstep(${ct(It.top+ir.h*.8)}, ${ct(It.top+ir.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Fa(_h.a)}, qb = ${Fa(_h.b)};
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
		bool inB1 = p.z < ${ct(Rn)} && p.z > ${ct(an-.04)} && p.x < ${ct(xo+.02)};
		bool inPriest = p.z >= ${ct(Rn)} && p.z < ${ct(ba)} && p.x < ${ct(xo)};
		bool inB2 = p.z >= ${ct(ba)} && p.z < ${ct(Rr+.04)} && p.x < ${ct(xo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${ct(Bn)}, ${ct(xo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${ct(Wo.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Fa(Qa.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Fa(sn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Fa(Nn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Fa(Ko.flame)} - p;
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
	}`}var Hn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function By(){let e=[],t=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],i=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],s=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(f,l,p,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),o.push(p),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,p,h,u,v)=>{let d=s(i(a(l,f),a(h,f)));v=v||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,d,u,v[0]),g=c.v(l,d,u,v[1]),y=c.v(p,d,u,v[2]),b=c.v(h,d,u,v[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,p,h,u,v,d)=>{let m=(g,y,b,E,k,L,R,X)=>c.quad(g,y,b,E,d,[[k,R],[L,R],[L,X],[k,X]]);m([h,l,p],[h,l,v],[h,u,v],[h,u,p],p,v,l,u),m([f,l,v],[f,l,p],[f,u,p],[f,u,v],v,p,l,u),m([f,u,p],[h,u,p],[h,u,v],[f,u,v],f,h,p,v),m([f,l,v],[h,l,v],[h,l,p],[f,l,p],f,h,v,p),m([f,l,v],[h,l,v],[h,u,v],[f,u,v],f,h,l,u),m([h,l,p],[f,l,p],[f,u,p],[h,u,p],h,f,l,u)},c.tube=(f,l,p,h)=>{h=h||6;let u=e.length/3;for(let v=0;v<f.length;v++){let d=f[Math.max(0,v-1)],m=f[Math.min(f.length-1,v+1)],g=s(a(m,d)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),E=i(b,g),k=typeof l=="function"?l(v/(f.length-1)):l;for(let L=0;L<=h;L++){let R=L/h*Zi*2,X=Math.cos(R),O=Math.sin(R),te=[b[0]*X+E[0]*O,b[1]*X+E[1]*O,b[2]*X+E[2]*O];c.v([f[v][0]+te[0]*k,f[v][1]+te[1]*k,f[v][2]+te[2]*k],te,p,[v/(f.length-1),L/h])}}for(let v=0;v<f.length-1;v++)for(let d=0;d<h;d++){let m=u+v*(h+1)+d,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,p,h,u)=>{u=u||20;let v=e.length/3;for(let d=0;d<p.length;d++){let[m,g]=p[d],y=p[Math.max(0,d-1)],b=p[Math.min(p.length-1,d+1)],E=b[0]-y[0],k=b[1]-y[1];for(let L=0;L<=u;L++){let R=L/u*Zi*2,X=Math.cos(R),O=Math.sin(R),te=s([k*X,-E,k*O]);c.v([f+X*m,g,l+O*m],te,h,[L/u,d/(p.length-1)])}}for(let d=0;d<p.length-1;d++)for(let m=0;m<u;m++){let g=v+d*(u+1)+m,y=g+u+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,p,h,u,v)=>{let d=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=d[m],y=d[(m+1)%4],b=[f+g[0],p,l+g[1]],E=[f+y[0],p,l+y[1]],k=[f,u,l],L=s(i(a(k,b),a(E,b))),R=c.v(b,L,v,[0,0]),X=c.v(E,L,v,[1,0]),O=c.v(k,L,v,[.5,1]);r.push(R,O,X)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,p,h]=[r[f],r[f+1],r[f+2]],u=m=>[e[m*3],e[m*3+1],e[m*3+2]],v=i(a(u(p),u(l)),a(u(h),u(l))),d=[0,1,2].map(m=>t[l*3+m]+t[p*3+m]+t[h*3+m]);v[0]*d[0]+v[1]*d[1]+v[2]*d[2]<0&&(r[f+1]=h,r[f+2]=p)}return c},c}function wh(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var on={ys:1.78,a:.56,r:.78};on.apex=on.ys+Math.sqrt(on.r*on.r-(on.r-on.a)*(on.r-on.a));function a8(){let e=By(),t=Hn.WOOD,o=Hn.CARVED,n=Hn.DARKWOOD,r=.06;e.box(Bn,0,an,xo+.08,Zr,Rr,n),e.box(Bn,Zn-.06,an-.04,xo+.1,Zn,Rr+.04,t),e.box(xo,Zn-.2,an-.06,xo+.12,Zn-.06,Rr+.06,t),e.box(xo+.02,Zn,an-.08,xo+.14,Zn+.07,Rr+.08,n),e.box(Bn,Zr,an,Bn+.04,Zn-.06,Rr,t);for(let[l,p,h]of[[an-r,an,-1],[Rr,Rr+r,1]]){e.box(Bn,0,l,xo+.08,Zn,p,t);let u=h<0?l-.018:p;e.box(Bn+.18,.45,Math.min(u,u+.018),xo-.12,2.35,Math.max(u,u+.018),n),e.box(Bn+.26,.55,Math.min(u,u+.03*h),xo-.2,2.25,Math.max(u,u+.03*h),t)}{let l=Rn-.02,p=Rn+.02,h=zo.x-zo.w/2,u=zo.x+zo.w/2,v=zo.y-zo.h/2,d=zo.y+zo.h/2;e.box(Bn,Zr,l,xo,xa.y0,p,t),e.box(Bn,xa.y0,l,xa.x0,xa.y1,p,t),e.box(xa.x1,xa.y0,l,xo,xa.y1,p,t),e.box(Bn,xa.y1,l,xo,v,p,t),e.box(Bn,v,l,h,d,p,t),e.box(u,v,l,xo,d,p,t),e.box(Bn,d,l,xo,Zn-.06,p,t);let m=.05,g=l-.025;e.box(h-m,v-m,g,u+m,v,l,n),e.box(h-m,d,g,u+m,d+m,l,n),e.box(h-m,v,g,h,d,l,n),e.box(u,v,g,u+m,d,l,n),e.box(h-m-.02,d+m,g-.015,u+m+.02,d+m+.03,l,t),e.box(xa.x0-.01,xa.y1,l-.006,xa.x1+.01,xa.y1+.008,l,Hn.BRASS)}{let l=xr,p=xo+.008,h=xo+.052;e.box(p,l.y0,l.z0-.035,h,l.y1,l.z0,n),e.box(p,l.y0,l.z0,h,l.y0+.04,l.z1,n),e.box(p,l.y1-.04,l.z0,h,l.y1,l.z1,n),e.box(p+.008,Zr,l.z0-.035,h-.008,l.y0,l.z1,t),e.box(h-.008,Zr+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),e.box(p-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,Hn.BRASS)}e.box(Bn,Zr,ba-.02,xo,Zn-.06,ba+.02,t),e.box(It.x0,It.top-.035,It.z0,It.x1,It.top,It.z1,t),e.tube([[It.x0,It.top-.018,It.z0],[It.x1,It.top-.018,It.z0]],.02,t,8);for(let l of[It.x0+.1,It.x1-.1]){let p=[];for(let h=0;h<=8;h++){let u=h/8;p.push([l,It.top-.04-.22*u,It.z1-.02-.22*Math.cos(u*Zi/2)])}e.tube(p,.018,n,6)}e.box(Bn+.06,.12,an,xo-.1,.44,an+.42,n),e.box(Bn+.08,.44,an+.01,xo-.12,.52,an+.41,Hn.CUSHION),e.box(Bn+.06,.12,Rr-.42,xo-.1,.44,Rr,n),e.box(Nn[0]-.05,Nn[1]-.16,an,Nn[0]+.05,Nn[1]-.02,an+.012,Hn.BRASS),e.tube([[Nn[0],Nn[1]-.09,an+.012],[Nn[0],Nn[1]-.09,Nn[2]-.01],[Nn[0],Nn[1]-.05,Nn[2]]],.006,Hn.BRASS,6),e.lathe(Nn[0],Nn[2],[[0,Nn[1]-.05],[.028,Nn[1]-.035],[.034,Nn[1]+.01],[.024,Nn[1]+.06],[.026,Nn[1]+.065]],Hn.LAMPGLASS,16),e.box(ya.x-.22,.12,ya.z-.24,ya.x+.22,ya.y-.05,ya.z+.16,n),e.box(ya.x-.24,ya.y-.05,ya.z-.26,ya.x+.24,ya.y,ya.z+.18,Hn.CUSHION),e.tube([[sn[0],Zn-.06,sn[2]],[sn[0],sn[1]+.07,sn[2]]],.005,Hn.BRASS,5),e.lathe(sn[0],sn[2],[[0,sn[1]+.09],[.03,sn[1]+.08],[.02,sn[1]+.06]],Hn.BRASS,12),e.lathe(sn[0],sn[2],[[0,sn[1]-.06],[.035,sn[1]-.04],[.045,sn[1]],[.035,sn[1]+.05],[.018,sn[1]+.07]],Hn.LAMPGLASS,16);let a=xo,i=xo+r;function s(l,p,h){let u=(l+p)/2,v=40,d=[];for(let g=0;g<=v;g++)d.push(Zr+(Zn-.2-Zr)*g/v);let m=[];d.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(on.ys+(on.apex-on.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let E=h?wh(y,on.ys,on.a,on.r):0,k=h?wh(b,on.ys,on.a,on.r):0,L=(R,X)=>[R,X];e.quad([i,y,u-E],[i,y,l],[i,b,l],[i,b,u-k],t,[L(u-E,y),L(l,y),L(l,b),L(u-k,b)]),e.quad([i,y,p],[i,y,u+E],[i,b,u+k],[i,b,p],t,[L(p,y),L(u+E,y),L(u+k,b),L(p,b)]),(E>0||k>0)&&(e.quad([a,y,u-E],[i,y,u-E],[i,b,u-k],[a,b,u-k],n),e.quad([i,y,u+E],[a,y,u+E],[a,b,u+k],[i,b,u+k],n),e.quad([a,y,l],[a,y,u-E],[a,b,u-k],[a,b,l],t),e.quad([a,y,u+E],[a,y,p],[a,b,p],[a,b,u+k],t))}if(e.box(a,Zn-.2,l,i,Zn-.06,p,t),e.box(i,Zn-.42,l+.05,i+.012,Zn-.24,p-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,E=b<.5?Zr+(on.apex-Zr)*(b*2):on.apex-(on.apex-Zr)*((b-.5)*2),k=b<.5?-1:1;g.push([i+.01,Math.min(E,on.apex-.002),u+k*(wh(E,on.ys,on.a,on.r)+.03)])}e.tube(g,.022,n,6)}}s(an,Rn,!0),s(ba,Rr,!0);{let l=Rn,p=ba,h=(l+p)/2;e.box(a,Zr,l,i,Zn-.06,p,t);let u={ys:1.85,a:.55,r:.8},v=[];for(let d=0;d<=40;d++){let m=d/40,g=u.ys+Math.sqrt(u.r*u.r-(u.r-u.a)*(u.r-u.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;v.push([i+.012,Math.min(y,g-.002),h+b*wh(y,u.ys,u.a,u.r)])}v.push(v[0]),e.tube(v,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,p-.13],[i+.06,1.12,p-.13],[i+.06,1.12,p-.2]],.009,Hn.BRASS,6)}[an-.02,Rn,ba,Rr+.02].forEach((l,p)=>{let h=p===1||p===2,u=.075,v=Zn+(h?.62:.4);e.box(xo+.06,0,l-u,xo+.06+2*u,v,l+u,t),e.box(xo+.04,v-.04,l-u-.02,xo+.08+2*u,v,l+u+.02,n);let d=xo+.06+u,m=h?.62:.5;e.spire(d,l,v,u*.95,v+m,t);for(let g=1;g<=3;g++){let y=v+m*g/4.2,b=u*.95*(1-g/4.2)+.02;for(let[E,k]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[d+E*(b-.02),y-.02,l+k*(b-.02)],[d+E*(b+.015),y+.03,l+k*(b+.015)]],.008,n,4)}e.lathe(d,l,[[0,v+m-.02],[.03,v+m+.03],[.022,v+m+.07],[0,v+m+.1]],t,10)});let f=(l,p,h)=>{let u=(l+p)/2,v=xo+.075,d=Zn+.07,m=d+h,g=[1,0,0],y=e.v([v,d,l],g,o,[l,d]),b=e.v([v,d,p],g,o,[p,d]),E=e.v([v,m,u],g,o,[u,m]);e.idx.push(y,b,E);let k=e.v([v-.04,d,l],[-1,0,0],t),L=e.v([v-.04,d,p],[-1,0,0],t),R=e.v([v-.04,m,u],[-1,0,0],t);e.idx.push(k,R,L);let X=[],O=[];for(let D=0;D<=10;D++){let W=D/10;X.push([v+.02,d+h*W,l+(u-l)*W]),O.push([v+.02,d+h*W,p+(u-p)*W])}e.tube(X,.022,n,6),e.tube(O,.022,n,6);for(let D=2;D<=8;D+=2)for(let W of[X[D],O[D]])e.tube([W,[W[0]+.01,W[1]+.06,W[2]+(W===X[D]?-.02:.02)]],.01,n,4);e.lathe(v,u,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([D,W])=>[D,W]),t,10);let te=Math.min(.17,h*.32),G=d+h*.38,oe=[];for(let D=0;D<=24;D++){let W=D/24*Zi*2;oe.push([v+.012,G+Math.sin(W)*te,u+Math.cos(W)*te])}e.tube(oe,.012,n,5)};f(an-.02,Rn,.52),f(Rn,ba,.82),f(ba,Rr+.02,.52),e.lathe(ir.x,ir.z,[[0,It.top],[.036,It.top+.001],[ir.r,It.top+.012],[ir.r*1.02,It.top+.035],[.036,It.top+.052],[.02,It.top+.062],[.016,It.top+.068]],Hn.INKGLASS,24),e.lathe(ir.x,ir.z,[[.016,It.top+.064],[.021,It.top+.066],[.022,It.top+.075],[.016,It.top+.076],[0,It.top+.072]],Hn.BRASS,20);{let l=_h.a,p=_h.b,h=26,u=y=>{let b=Math.sin(y*Zi)*.025;return[l[0]+(p[0]-l[0])*y+b*.6,l[1]+(p[1]-l[1])*y+b*.4,l[2]+(p[2]-l[2])*y+b]},v=[];for(let y=0;y<=h;y++)v.push(u(y/h));e.tube(v,y=>.0028*(1-.7*y)+6e-4,Hn.QUILL,5);let d=e.norm(e.sub(p,l)),m=e.norm(e.cross(d,[.2,1,.1])),g=e.cross(m,d);for(let y of[-1,1]){let b=e.pos.length/3;for(let E=0;E<=h;E++){let k=E/h,L=u(k),R=k<.28?0:(y>0?.03:.02)*Math.sin(Zi*Math.pow((k-.28)/.72,.75)),X=R*.25,O=[L[0]+m[0]*y*R-g[0]*X,L[1]+m[1]*y*R-g[1]*X,L[2]+m[2]*y*R-g[2]*X];e.v(L,g,Hn.QUILL,[k,0]),e.v(O,g,Hn.QUILL,[k,y])}for(let E=0;E<h;E++){let k=b+E*2;e.idx.push(k,k+2,k+1,k+1,k+2,k+3)}}}return e.orient()}function i8(e,t){let n=Wo.top,r=Wo.x0;e(r-.35,0,Wo.z0-.35,r,n+.35,Wo.z1+.35),e(r,0,Wo.z0-.35,-.35,n,Wo.z0),e(r,0,Wo.z1,-.35,n,Wo.z1+.35),e(r,n,Wo.z0,-.35,n+.35,Wo.z1),e(.35,0,Wo.z0-.42,.35+.16,n,Wo.z0),e(.35,0,Wo.z1,.35+.16,n,Wo.z1+.42),e(.35,n,Wo.z0-.5,.35+.18,n+.42,Wo.z1+.5),e(.35,n+.42,Wo.z0-.6,.35+.26,n+.52,Wo.z1+.6),e(.35,0,Wo.z0-.5,.35+.22,.42,Wo.z0),e(.35,0,Wo.z1,.35+.22,.42,Wo.z1+.5),e(-.35-.01,0,Wo.z0,.35+.12,.02,Wo.z1),t(r,Wo.z0,-.35,Wo.z1)}ea.exports=e=>{let t=Ri(),o=Gy.GLSL,n=a8(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${Qa.roomGLSL()}
	${Dy()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(Te,pe,_e,ht){let Ot=[],He=[],at=[],_t=[],Jt=[],Xe=xo-.02,ut=on.apex+.08,dt=Zr+.015;for(let Xt=0;Xt<=40;Xt++){let Oo=Xt/40,Ho=ut+(dt-ut)*Oo;for(let zt=0;zt<=90;zt++){let Se=zt/90,Pe=_e?.2+.13*Oo*Oo:pe-Te,Mt=Te+Se*Pe,je=_e?.05+.02*Oo:.035+.01*Math.sin(Se*7),Ue=Se*ht*Zi*2+Math.sin(Oo*2+Se*5)*.6,so=Xe-je*(.5+.5*Math.sin(Ue))-(_e?.02*Oo:0),Eo=[1,0,-(-je*.5*Math.cos(Ue)*ht*Zi*2/Pe)],co=Math.hypot(Eo[0],Eo[1],Eo[2]);Ot.push(so,Ho,Mt),He.push(Eo[0]/co,0,Eo[2]/co),at.push(2),_t.push(Math.sin(Ue),Oo)}}for(let Xt=0;Xt<40;Xt++)for(let Oo=0;Oo<90;Oo++){let Ho=Xt*91+Oo,zt=Ho+90+1;Jt.push(Ho,zt,Ho+1,Ho+1,zt,zt+1)}for(let Xt=0;Xt<Jt.length;Xt+=3){let[Oo,Ho,zt]=[Jt[Xt],Jt[Xt+1],Jt[Xt+2]],Se=Ue=>[Ot[Ue*3],Ot[Ue*3+1],Ot[Ue*3+2]],Pe=[0,1,2].map(Ue=>Se(Ho)[Ue]-Se(Oo)[Ue]),Mt=[0,1,2].map(Ue=>Se(zt)[Ue]-Se(Oo)[Ue]);Pe[1]*Mt[2]-Pe[2]*Mt[1]<0&&(Jt[Xt+1]=zt,Jt[Xt+2]=Ho)}return{pos:Ot,nrm:He,kind:at,uv:_t,idx:Jt}}let c=s(an+.02,an+.4,!0,6),f=s(ba+.04,Rr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(Te=>Te+c.pos.length/3))},p=e({vert:`
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
			vec3 p = vec3(${ct(zo.x)} + corner.x * ${ct(zo.w/2)}, ${ct(zo.y)} + corner.y * ${ct(zo.h/2)}, ${ct(zo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${ct(zo.x)}, ${ct(zo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${ct(zo.z)} ? -1.0 : 1.0);
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
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${ct(xr.x)}, ${ct((xr.y0+xr.y1)/2)} + corner.y * ${ct((xr.y1-xr.y0)/2-.04)}, ${ct((xr.z0+xr.z1)/2)} + corner.x * ${ct((xr.z1-xr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${ct((xr.z0+xr.z1)/2)}, ${ct((xr.y0+xr.y1)/2)})) * ${ct(zo.cell/xr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${ct(xr.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),v=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${ct(zo.x)} + corner.x * 0.75, ${ct(zo.y)} + corner.y * 0.9, ${ct(ba-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=14,m=[];for(let Te=0;Te<d;Te++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(pe=>m.push(pe[0],pe[1],(Te+.5)/d));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${ct(r8)} + c.x * ${ct((xo-Bn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${ct(Rn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${Dy().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Fa(sn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let Te=document.createElement("canvas");Te.width=512,Te.height=652;let pe=Te.getContext("2d");pe.fillStyle="#cdb38a",pe.fillRect(0,0,Te.width,Te.height);let _e=7,ht=()=>(_e=_e*1664525+1013904223>>>0,_e/4294967296);for(let He=0;He<2400;He++){pe.fillStyle=`rgba(${ht()<.5?"90,62,30":"245,230,200"},${.03+ht()*.05})`;let at=ht()*Te.width,_t=ht()*Te.height;pe.fillRect(at,_t,1+ht()*14,1)}for(let He=0;He<26;He++){let at=ht()*Te.width,_t=ht()*Te.height,Jt=20+ht()*90,ro=pe.createRadialGradient(at,_t,0,at,_t,Jt);ro.addColorStop(0,`rgba(120,80,35,${.04+ht()*.06})`),ro.addColorStop(1,"rgba(120,80,35,0)"),pe.fillStyle=ro,pe.fillRect(at-Jt,_t-Jt,Jt*2,Jt*2)}let Ot=pe.createRadialGradient(Te.width/2,Te.height/2,Te.width*.3,Te.width/2,Te.height/2,Te.height*.72);return Ot.addColorStop(0,"rgba(110,70,30,0)"),Ot.addColorStop(1,"rgba(110,70,30,0.38)"),pe.fillStyle=Ot,pe.fillRect(0,0,Te.width,Te.height),Te})(),b=y?e.texture({data:y,min:"linear",mag:"linear",flipY:!1}):e.texture(),E=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),k=[18,24],L=[],R=[];for(let Te=0;Te<=k[1];Te++)for(let pe=0;pe<=k[0];pe++)L.push(pe/k[0],Te/k[1]);for(let Te=0;Te<k[1];Te++)for(let pe=0;pe<k[0];pe++){let _e=Te*(k[0]+1)+pe,ht=_e+k[0]+1;R.push(_e,_e+1,ht,_e+1,ht+1,ht)}let X=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${ct(Jr.cx+Jr.w/2)} - s * ${ct(Jr.w)};
			float zNear = ${ct(Jr.cz-Jr.d/2)};
			vec3 p = vec3(x, ${ct(Jr.y)}, zNear + t * ${ct(Jr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${ct(Jr.d)};
				float zf = zNear + 0.5 * ${ct(Jr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${ct(Jr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${ct(Rn+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(L),size:2}},elements:R,uniforms:{fold:()=>Qi.fold,slide:()=>Qi.slide,paperTex:b,inkTex:E},cull:{enable:!1}}),O=By();O.lathe(Ko.x,Ko.z,[[0,It.top],[.048,It.top+.002],[.052,It.top+.012],[.046,It.top+.014],[.022,It.top+.012],[0,It.top+.012]],Hn.BRASS,24),O.lathe(Ko.x,Ko.z,[[0,It.top+.012],[Ko.r,It.top+.012],[Ko.r*1.02,It.top+.012+Ko.h*.6],[Ko.r,It.top+.012+Ko.h],[Ko.r*.75,It.top+.012+Ko.h-.004],[0,It.top+.012+Ko.h-.008]],9,20),O.tube([[Ko.x,It.top+.012+Ko.h-.008,Ko.z],[Ko.x+.001,It.top+.012+Ko.h+.012,Ko.z]],.0012,8,4),O.orient();let te=e({vert:a,frag:`${r}
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
				float up = smoothstep(${ct(It.top+Ko.h*.4)}, ${ct(It.top+.012+Ko.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:O.pos,normal:O.nrm,kind:O.kind,uv:O.uv},elements:O.idx}),G=e({vert:`
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
			vec3 p = ${Fa(Ko.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),oe=[0,0],D=e({uniforms:{view:e.prop("view")}}),W=new Float32Array(16);function Ae(Te){n8.translate(W,Te.view,Qa.OFF),D({view:W},()=>Be(Te))}function Be(Te){let pe=Te&&Te.reflected;if(i(),p(),h(),u(),Qi.ink&&Qi.inkDirty){let _e=Qi.ink;oe[0]!==_e.width||oe[1]!==_e.height?(E({data:_e,min:"linear",mag:"linear",flipY:!1}),oe=[_e.width,_e.height]):E.subimage(_e),Qi.inkDirty=!1}Qi.shown&&X(),Gy.night>.01&&(te(),pe||(G({halo:1}),G({halo:0}))),pe||(v(),g())}return Ae};ea.exports.addBay=i8;ea.exports.BAY=Wo;ea.exports.OFF=Qa.OFF;ea.exports.STATE=Qi;var qy=e=>[e[0]+Qa.OFF[0],e[1]+Qa.OFF[1],e[2]+Qa.OFF[2]];ea.exports.SHOTS=Object.fromEntries(Object.entries(Hy).map(([e,t])=>[e,Object.assign({},t,{eye:qy(t.eye),target:qy(t.target)})]));ea.exports.SEAT=ya;ea.exports.LAMP=sn;ea.exports.SCONCE=Nn;ea.exports.GRILLE=zo;ea.exports.PAPER=Jr;ea.exports.ZONE={FRONT:xo,BACK:Bn,ZA:an,ZB:Rn,ZC:ba,ZD:Rr}});var xd=de((dT,jy)=>{"use strict";function s8(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var Uy={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},c8=["th","ng","er"];function l8(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(Uy).forEach(d=>{r[d]=Uy[d]*o.pace});let a=[],i=0,s=0,c=0,f=[];function l(d,m){let g=s8(o.seed),y=o.xh,b={},E=W=>{let Ae=t[W];if(!Ae)return null;let Be=Math.floor(g()*Ae.length);return Ae.length>1&&Be===b[W]&&(Be=(Be+1)%Ae.length),b[W]=Be,Ae[Be]},k=W=>{if(t[W])return{g:E(W),sc:1};let Ae=W.toLowerCase();return t[Ae]?{g:E(Ae),sc:/[A-Z]/.test(W)?1.32:1}:null},L=[],R=.15,X=0,O=0,te=(g()-.5)*.02,G=m/y,oe=d.split(/\n\s*\n/);oe.forEach((W,Ae)=>{W.replace(/\s+/g," ").trim().split(" ").forEach(Te=>{let pe=[];for(let He=0;He<Te.length;He++){let at=Te.substr(He,2).toLowerCase();if(c8.indexOf(at)>=0&&t[at]&&g()<.55&&Te[He]===Te[He].toLowerCase()){pe.push({ch:at,gl:{g:E(at),sc:1}}),He++;continue}let _t=k(Te[He]);_t&&_t.g&&pe.push({ch:Te[He],gl:_t})}let _e=pe.map(()=>.17+g()*.07),ht=pe.reduce((He,at,_t)=>He+at.gl.g.w*at.gl.sc+_e[_t],0);X>0&&X+ht>G&&(X=0,O++,R+=r.line,te=(g()-.5)*.02),pe.forEach((He,at)=>{let _t=He.gl.g,Jt=He.gl.sc*(.95+g()*.1),ro=(g()-.5)*.06,en=(g()-.5)*.08+te*X,Xe=X,ut=O*o.lineHeight+1.9+en,dt=Math.cos(ro),Xt=Math.sin(ro),Oo=zt=>[(Xe+(zt[0]*dt-zt[1]*Xt)*Jt)*y,(ut+(zt[0]*Xt+zt[1]*dt)*Jt)*y],Ho=(zt,Se)=>{let Pe=0;for(let je=1;je<zt.length;je++)Pe+=Math.hypot(zt[je][0]-zt[je-1][0],zt[je][1]-zt[je-1][1]);let Mt=Math.max(o.minDur||(Se?.06:.07),Pe/(o.speed*y));L.push({pts:zt,L:Pe,start:R,dur:Mt,dot:Se}),R+=Mt};if(_t.s.forEach((zt,Se)=>{Se>0&&(R+=r.stroke),Ho(zt.map(Oo),!1)}),_t.dot){let zt=_t.s[0][0];_t.s.forEach(Pe=>Pe.forEach(Mt=>{Mt[1]<zt[1]&&(zt=Mt)}));let Se=Oo([zt[0]+.1,-1.36]);R+=r.stroke*1.4,Ho([Se,[Se[0]+y*.05,Se[1]+y*.03]],!0)}R+=r.letter*(.6+g()*.8),X+=_t.w*Jt+_e[at]});let Ot=Te[Te.length-1];R+=/[.!?]/.test(Ot)?r.stop:/[,;:]/.test(Ot)?r.comma:r.word,X+=.55+g()*.2}),Ae<oe.length-1&&(X=0,O+=1.6,R+=r.para)});let D=(O+1)*o.lineHeight*y+y*1.55;return{strokes:L,total:R,height:D}}function p(d,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(d*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=d+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,d,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;function u(d,m){let g=f[d.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let E=1;E<d.pts.length;E++){let k=d.pts[E-1],L=d.pts[E],R=Math.hypot(L[0]-k[0],L[1]-k[1]),X=b,O=b+R;if(b=O,O<=g||R===0)continue;if(X>=m)break;let te=Math.max(0,(g-X)/R),G=Math.min(1,(m-X)/R),oe=[k[0]+(L[0]-k[0])*te,k[1]+(L[1]-k[1])*te],D=[k[0]+(L[0]-k[0])*G,k[1]+(L[1]-k[1])*G],W=(X+O)/2/(d.L||1),Ae=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,W)));n.lineWidth=y*Ae,n.globalAlpha=.86+.14*Ae,n.beginPath(),n.moveTo(oe[0],oe[1]),n.lineTo(D[0],D[1]),n.stroke()}d.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(d.pts[0][0],d.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[d.i]=m}function v(d){let m=(d-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);u(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(v):o.onDone&&o.onDone()}return{write(d,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=l(d,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(d):o.maxTime;if(b&&i>b){let k=b/i;a.forEach(L=>{L.start*=k,L.dur*=k}),i=b}a.forEach((k,L)=>{k.i=L}),f=[],p(g,y.height);let E=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||E){a.forEach(k=>u(k,k.L));return}return c=performance.now(),s=requestAnimationFrame(v),i},finish(){cancelAnimationFrame(s),a.forEach(d=>u(d,d.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}jy.exports=l8});var bd=de((pT,Wy)=>{"use strict";var yd=ur(),f8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',h8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Wy.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=yd.isNight;o.innerHTML=r?f8:h8,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),yd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),yd.toggle()}),o}});var Qy=de((vT,Ky)=>{"use strict";var Cn=Mh(),u8=Ii(),d8=xd(),Vy=Ks(),p8="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Xy=100,mi=e=>Math.max(0,Math.min(1,e)),Br=(e,t,o)=>{let n=mi((o-e)/(t-e));return n*n*(3-2*n)},$a=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,wa=(e,t,o)=>e+(t-e)*o,Sl=(e,t,o)=>[wa(e[0],t[0],o),wa(e[1],t[1],o),wa(e[2],t[2],o)];function j0(e,t){let o=e.length-1,n=mi(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-f[l])*a*a+(-i[l]+3*s[l]-3*c[l]+f[l])*a*a*a))}var kh=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function wd(e,t,o){return{eye:Sl(e.eye,t.eye,o),target:Sl(e.target,t.target,o),fov:wa(e.fov,t.fov,o),roll:wa(e.roll||0,t.roll||0,o)}}var Al=u8.PLAY,Ga=[Al.stoolX,1,Al.keyFront+.25],Eh=[Al.stoolX,Al.keyTop+.03,Al.keyFront-.05],Md=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[Ga[0]+Math.cos(t)*o,1.15+.4*e,Ga[2]+Math.sin(t)*o]},ac=[{eye:Md(1),target:[Ga[0],.92,Ga[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:Eh},{eye:[Ga[0]+1,1.14,Ga[2]+1.72],target:[Eh[0]+.05,.8,Eh[2]+.05],fov:40,aperture:1,to:Eh}],Yy=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),Sh=e=>({fade:0,letterbox:.55,exposure:1.3,focus:Yy(e.eye,e.to||Ga),aperture:e.aperture,vignette:.42,shafts:0}),_d={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},ic={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},El={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},v8=`
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
`;Ky.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=v8,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),p=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,u=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let Se=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Xy-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>Xy&&Se&&(s.value=Se[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(Se=>s.addEventListener(Se,Pe=>Pe.stopPropagation())),a.addEventListener("pointerdown",Se=>Se.stopPropagation()),a.addEventListener("click",Se=>{let Pe=Se.target.closest("button");Pe&&(Se.stopPropagation(),Pe.dataset.act==="send"&&Ae(),Pe.dataset.act==="leave"&&pe())});let v=!1,d="",m=0,g=null,y=null,b="",E=null,k=0,L="",R=document.createElement("canvas");R.width=512,R.height=652;function X(Se){Se!==L&&(L=Se,i.classList.toggle("on",Se==="write"),f.classList.toggle("on",Se==="hint"),l.classList.toggle("on",v&&Se==="hint"&&(d==="room"||d==="peek")),p.classList.toggle("on",Se==="final"),Se==="write"&&setTimeout(()=>{if(d==="write")try{s.focus({preventScroll:!0})}catch(Pe){}},900))}function O(Se){d=Se,m=0}function te(Se,Pe){if(v)return;v=!0,g={eye:Se.eye.slice(),target:Se.target.slice(),fov:Se.fov,roll:Se.roll||0},y=Object.assign({},Pe),b="",s.value="",c.disabled=!0,Cn.STATE.fold=0,Cn.STATE.slide=0,Cn.STATE.shown=!0,Cn.STATE.active=!0;let Mt=R.getContext("2d");Mt.setTransform(1,0,0,1,0,0),Mt.clearRect(0,0,R.width,R.height),Cn.STATE.ink=R,Cn.STATE.inkDirty=!0,document.body.classList.add("confessing"),Vy.enter();let je=ac[0],Ue=u?.3:5.5,so=u?.3:3.6;G.i=0,G.u=0,G.T=Ue+so,G.moving=!0,G.rest=0,G.raw=!0,G.lookFrom=y,G.lookTo=Sh(je);let _=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Md(0)],Eo=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Ga[0],1,Ga[2]-.1],je.target];G.path=co=>{let ao=co*(Ue+so);if(ao<Ue){let nn=ao/Ue,yo=1-Math.cos(nn*Math.PI/2);return{eye:j0(_,yo),target:j0(Eo,Br(0,1,yo*1.05)),fov:wa(g.fov,52,Br(.4,1,yo)),roll:(g.roll||0)*(1-yo)}}let Bo=(ao-Ue)/so,So=1-Math.pow(1-Bo,2.4);return{eye:Md(So),target:je.target,fov:wa(52,je.fov,So),roll:.05*Math.sin(Math.PI*So)}},O("room"),X("")}let G={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},oe=()=>h?"Scroll on":"Swipe up";function D(Se){let Pe=Ot,Mt=ac[Se],je={eye:Pe.eye.slice(),target:Pe.target.slice(),fov:Pe.fov,roll:Pe.roll||0},Ue=Sl(je.eye,Mt.eye,.5),so=[Ue[0]-Ga[0],0,Ue[2]-Ga[2]],_=Math.hypot(so[0],so[2])||1,Eo=[Ue[0]+so[0]/_*.6,Ue[1]+.3,Ue[2]+so[2]/_*.6];G.path=co=>{let ao=1-co;return{eye:[0,1,2].map(Bo=>ao*ao*je.eye[Bo]+2*ao*co*Eo[Bo]+co*co*Mt.eye[Bo]),target:Sl(je.target,Mt.target,Br(0,1,co)),fov:wa(je.fov,Mt.fov,co),roll:je.roll*ao}},G.lookFrom=W||Sh(ac[G.i]),G.lookTo=Sh(Mt),G.i=Se,G.u=0,G.moving=!0,G.rest=0,G.raw=!1,G.T=u?.4:Math.max(2.8,Math.min(4.4,Yy(je.eye,Mt.eye)*1+1.6)),X("")}let W=null;function Ae(){if(d!=="write"||(b=s.value.trim(),!b))return;s.blur(),X("");let Se=Math.max(10,Math.min(22,24-b.length/28));E=d8(R,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:Se,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:Pe=>2.4+Pe.length/160,fixed:{mx:46,my:40},onPen:()=>{Cn.STATE.inkDirty=!0},onDone:()=>{Cn.STATE.inkDirty=!0}}),O("down")}function Be(){try{let Se={access_key:p8,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Se),keepalive:!0}).catch(()=>{})}catch(Se){}}function Te(){d==="ready"&&(Be(),O("fold"),X(""))}function pe(){!v||d==="leave"||(X(""),s.blur(),_e=Ot,ht=W,O("leave"))}let _e=null,ht=null,Ot=null,He=Cn.SHOTS.window,at=Cn.OFF,_t=Se=>[Se[0]+at[0],Se[1],Se[2]],Jt=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],_t([1.25,1.5,43.25]),_t([-.55,1.36,42.92])],ro=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],_t([-1,1.55,43.6]),_t([-1.4,1.35,43.1]),_t([-1.5,1.33,43.3])];function en(Se){let Pe=$a(mi(Se)),Mt=[g.eye,...Jt,He.eye],je=[g.target,...ro,He.target];return{eye:j0(Mt,Pe),target:j0(je,Br(0,1,Pe*1.03)),fov:wa(g.fov,He.fov,Br(.6,.97,Pe)),roll:(g.roll||0)*(1-Pe)}}function Xe(Se,Pe){if(u)return Se;let Mt=performance.now()/1e3,je=.004*Pe,Ue=Math.sin(Mt*.61)*.6+Math.sin(Mt*1.37+1.3)*.4,so=Math.sin(Mt*.47+2.1)*.6+Math.sin(Mt*1.13+.4)*.4;return{eye:[Se.eye[0]+Ue*je,Se.eye[1]+so*je*.7,Se.eye[2]],target:[Se.target[0]+so*je*1.5,Se.target[1]+Ue*je,Se.target[2]],fov:Se.fov,roll:Se.roll}}function ut(Se,Pe,Mt){let je={};for(let Ue in Pe)je[Ue]=typeof Pe[Ue]=="number"&&typeof Se[Ue]=="number"?wa(Se[Ue],Pe[Ue],Mt):Pe[Ue];return je}function dt(Se){Se*=window.__confSpeed||1,m+=Se;let Pe=kh(He),Mt=kh(Cn.SHOTS.paper),je,Ue,so=kh(Cn.SHOTS.peek);if(d==="room")G.moving?(G.u=Math.min(1,G.u+Se/G.T),je=G.path(G.raw?G.u:$a(G.u)),Ue=ut(G.lookFrom,G.lookTo,Br(.1,.9,G.u)),G.raw&&(Ue.fade=(y.fade||0)*(1-Br(0,.12,G.u))),G.u>=1&&(G.moving=!1,G.rest=0,f.textContent=oe(),X("hint"))):(G.rest+=Se,je=Xe(kh(ac[G.i]),2.5),Ue=Sh(ac[G.i]));else if(d==="enter"){let Eo=mi(m/(u?.6:9)),co=$a(Eo),ao=[Xt.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],_t([.75,1.5,42.95]),_t([-.25,1.42,42.82]),_t([-.9,1.42,42.82]),so.eye];je={eye:j0(ao,co),target:Sl(Xt.target,so.target,Br(0,.35,co)),fov:wa(Xt.fov,so.fov,Br(.3,1,co)),roll:0},Ue=ut(Oo,_d,Br(.2,.9,Eo)),Eo>=1&&O("peek")}else if(d==="peek")je=Xe(so,1.5),Ue=_d,m>(u?.5:3.2)&&O("turn");else if(d==="turn"){let _=mi(m/(u?.4:3.2));je=wd(so,Pe,$a(_)),Ue=ut(_d,ic,$a(_)),_>=1&&(O("write"),X("write"))}else if(d==="write")je=Xe(Pe,1),Ue=ic;else if(d==="down"){let _=mi(m/(u?.4:2));je=wd(Pe,Mt,$a(_)),Ue=ut(ic,El,$a(_)),_>=1&&(k=E.write(b,u)||0,Cn.STATE.inkDirty=!0,O("writing"))}else if(d==="writing")je=Xe(Mt,.6),Ue=El,m>k+.8&&(O("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",X("hint"));else if(d==="ready")je=Xe(Mt,.6),Ue=El;else if(d==="fold"){let _=mi(m/(u?.3:1.5));Cn.STATE.fold=$a(_),je=Xe(Mt,.6),Ue=El,_>=1&&O("slide")}else if(d==="slide"){let Eo=mi(m/(u?.6:3.4));Cn.STATE.slide=$a(Br(0,.7,Eo));let co=$a(Br(.35,1,Eo));je=wd(Mt,Pe,co),Ue=ut(El,ic,co),Eo>=1&&(Cn.STATE.shown=!1,O("final"),X("final"))}else if(d==="final")je=Xe(Pe,1),Ue=ic;else if(d==="leave"){let _=u?.6:_e.eye[0]<at[0]-.3?12:7,Eo=mi(m/_),co={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},ao=$a(Eo),Bo=_e.eye[0]<at[0]-.3,So=Bo?[_e.eye,_t([-.55,1.4,42.8]),_t([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],co.eye]:[_e.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],co.eye],nn=Bo?[_e.target,_t([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],co.target]:[_e.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],co.target];if(je={eye:j0(So,ao),target:j0(nn,ao),fov:wa(_e.fov,co.fov,ao),roll:co.roll*ao},Ue=ut(ht||ic,y,Br(.1,.7,Eo)),Ue.fade=(y.fade||0)*Br(.82,1,Eo),Eo>=1){v=!1,Cn.STATE.active=!1,Vy.exit(),Cn.STATE.shown=!0,Cn.STATE.fold=0,Cn.STATE.slide=0;let yo=R.getContext("2d");yo.setTransform(1,0,0,1,0,0),yo.clearRect(0,0,R.width,R.height),Cn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return Ot=je,W=Ue,{camera:je,look:Ue}}let Xt=null,Oo=null;function Ho(){if(d==="room"){if(G.moving||G.rest<.4)return;G.i<ac.length-1?D(G.i+1):(Xt=Ot,Oo=W,X(""),O("enter"));return}if(d==="peek"){m>.4&&O("turn");return}d==="ready"?Te():d==="writing"&&E&&(E.finish(),m=Math.max(m,k))}function zt(){d==="room"&&!G.moving&&G.rest>.4&&G.i>0&&D(G.i-1)}return{start:te,update:dt,leave:pe,get active(){return v},get stage(){return d},wheel(Se){Se>8?Ho():Se<-8&&zt()},swipe(Se){Se>0?Ho():Se<0&&zt()},tap(){Ho()},key(Se){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(Se)>=0?(Ho(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(Se)>=0?(zt(),!0):Se==="Escape"?(pe(),!0):!1},_setNote(Se){s.value=Se,s.dispatchEvent(new Event("input"))}}}});var sb=de((gT,ib)=>{"use strict";var sc=$s(),Ah=Q1(),kd=vf(),m8=Bc(),Ed=J1(),mT=ua(),cc=Fu(),Zy=Ks(),Th=!1,{A:ta}=va(),{C:sr,PAINTING_X:uc}=hr(),jr=e=>Math.max(0,Math.min(1,e)),Ge=(e,t,o)=>e+(t-e)*o,qo=(e,t,o)=>[Ge(e[0],t[0],o),Ge(e[1],t[1],o),Ge(e[2],t[2],o)],Zt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Sd=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Cr=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Oe=(e,t,o)=>{let n=jr((o-e)/(t-e));return n*n*(3-2*n)};function g8(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,l=Math.max(-f,Math.min(f,e-t)),p=e-l,h=(o+i*l)*r,u=(o-i*h)*c,v=p+(l+h)*c;return t-e>0==v>t&&(v=t,u=0),[v,u]}var Jy=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,x8=e=>e*e*e,Ad=e=>1-Math.pow(1-e,3),vn=e=>-(Math.cos(Math.PI*e)-1)/2;function En(e,t){let o=e.length-1,n=jr(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=a*a,p=l*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-f[h])*l+(-i[h]+3*s[h]-3*c[h]+f[h])*p))}var Wt=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function Y0(e,t,o){return Wt(qo(e.eye,t.eye,o),qo(e.target,t.target,o),Ge(e.fov,t.fov,o),Ge(e.roll,t.roll,o))}var Rd=()=>Oe(.75,1.3,window.innerWidth/window.innerHeight),Pr=(e,t)=>Y0(e,t,Rd()),Lh=[7,3.95,sr.hallEnd-.05],y8=[sr.x1,2.9,sr.zc],fc=[16.75,4.55,6.75],Cd=[6.92,2.72,14.5],Da=[7.3,.015,47.1],b8=[fc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Cd],w8=[Cd,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Da],W0=[uc[0],3,sr.z0],V0=[uc[1],3,sr.z0],Ld=47.45,ab=4.6,_8=13.2,M8=1.57,Tl=[7.55,1.25,46.75],Pd=[17.25,2.42,46],Id=[26.05,1.95,46],Ll=[36.15,.015,44],Ch=()=>Ge(6.8,6.15,Rd()),k8=[Tl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Pd],E8=[Pd,[20.2,2.05,45.6],[23.2,1.8,45],Id],X0=[uc[2],3,sr.z0],zd=[34.8,1.35,46],t0=[7.89,.03,19.03],eb=.36,tb=13.64,pr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function _a(e){let t=e.side==="left"?1:-1;return qo([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],Rd())}function S8(e){return e.side==="left"?Pr(Wt([8.6,3.9,e.z],[eb,1.45,e.z],76),Wt([8,3.6,e.z+.7],[eb,3.95,e.z-2],46,-.008)):Pr(Wt([5.4,3.9,e.z],[tb,1.45,e.z],76),Wt([6,3.6,e.z-.7],[tb,3.95,e.z+2],46,-.008))}var A8=()=>[Ll,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],_a(pr[0])],T8=()=>[_a(pr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],_a(pr[3])],L8=()=>[_a(pr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],t0],ob={2:{pos:()=>Cd,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Tl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Pd,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Id,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>zd,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>_a(pr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>_a(pr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>_a(pr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>_a(pr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>_a(pr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>_a(pr[5]),amp:[.12,.08,.1],tumble:.5}},e0=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:9,aperture:.08,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Pr(Wt([sr.x0+.9,1.85,sr.zc+.25],[sr.x1,2.85,sr.zc-.1],64),Wt([sr.x0+1.2,2,sr.zc+.35],[sr.x1,2.6,sr.zc-.15],50));return n.eye=Zt(Zt(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Pr(Wt([16.6,1.9,9.2],[17.3,.4,5.6],64),Wt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Zt(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Pr(Wt([7,1.35,13],[7.2,7.6,20.4],74,.05),Wt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Zt(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Pr(Wt([7,3.6,43.7],[7,3.85,Lh[2]],74),Wt([7,3.6,41.3],[7,3.95,Lh[2]],46));return o.eye=Zt(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Pr(Wt([7,3.9,40.3],[7,1.35,Lh[2]],76),Wt([6.3,3.6,41.2],[3.7,3.95,Lh[2]],46,-.008));return o.eye=Zt(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Pr(Wt([7.15,.15,46],[7.3,.04,Da[2]],50),Wt([7.05,.14,45.9],[7.25,.05,Da[2]],32));return o.eye=Zt(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Pr(Wt([7.15,.1,46.3],[7.05,.1,Ld],50),Wt([7.1,.12,45.85],[7,.2,Ld],30));return o.eye=Zt(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Pr(Wt([7.3,.85,45.65],[7.6,1.38,47.1],64),Wt([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Zt(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Pr(Wt([W0[0],2.3,46.85],[W0[0],1.25,W0[2]],74),Wt([W0[0]-.6,2.55,46.85],[W0[0]+1.9,2.9,W0[2]],46,.008));return o.eye=Zt(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Pr(Wt([V0[0],1.95,46.85],[V0[0],1,V0[2]],74),Wt([V0[0]-.6,2.1,46.85],[V0[0]+1.9,2.75,V0[2]],46,.008));return o.eye=Zt(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Pr(Wt([X0[0],1.4,46.85],[X0[0],.6,X0[2]],74),Wt([X0[0]-.6,1.45,46.85],[X0[0]+1.9,2,X0[2]],46,.008));return o.eye=Zt(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Pr(Wt([34.75,.5,44.15],[sr.x1,.8,43.95],66),Wt([34.75,.45,44.3],[sr.x1,.35,43.95],50));return o.eye=Zt(o.eye,t),o}},...pr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=S8(e);return r.eye=Zt(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Pr(Wt([7.75,2.6,18.6],[7.89,0,19.08],60),Wt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-t0[0],r=o.eye[2]-t0[2];return o.eye=[t0[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],t0[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],z8=[1,.96,.88];function nb(e,t){return{dur:t,cam(o,n,r){let a=vn(o),i=Y0(n,r,a),s=pr[e].side==="left"?1:-1;return i.eye=Zt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=Ge(n[i],r[i],o));return a.aperture=Ge(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=vn(o),r=_a(pr[e]),a=_a(pr[e+1]),i=pr[e].side==="left"?1:-1,s=Zt(qo(r,a,.5),[i*1.2,.5,0]),c=En([r,qo(r,s,.6),s,qo(a,s,.6),a],n);return{phase:"fly",pos:Zt(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Td=[{dur:6.2,cam(e,t,o){if(e<.5){let s=x8(e/.5),c=qo(t.eye,[sr.x1-3.2,2.6,sr.zc],s),f=qo(t.target,y8,Oe(0,.6,e/.5));return Wt(c,f,Ge(t.fov,t.fov-8,s),Ge(t.roll,.04,s))}let n=Ad((e-.5)/.5),r=[[ta.cx+.4,10.4,ta.zc+.6],[ta.cx-.6,7.6,ta.zc+1.3],[ta.cx-1.9,4.6,ta.zc+1.75],o.eye],a=[[ta.cx-.1,0,ta.zc-.2],[ta.cx-1,.4,ta.zc-.1],[ta.cx-1.1,.8,ta.zc-.2],o.target];return Wt(En(r,n),En(a,n),Ge(o.fov+14,o.fov,n),Ge(-.25,o.roll,n))},look(e,t,o){let n=Oe(.22,.5,e),r=1-Oe(.5,.74,e);return{fade:e<.5?n:r,fadeColor:z8,exposure:Ge(t.exposure,o.exposure,Oe(.5,.9,e))*(1+2.2*(e<.5?Oe(.15,.5,e):1-Oe(.5,.8,e))),letterbox:Ge(t.letterbox,o.letterbox,Oe(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Oe(.6,1,e),focus:Ge(4,o.focus,Oe(.5,1,e)),shafts:Ge(t.shafts,o.shafts,Oe(.4,.6,e)),vignette:Ge(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=En(r,vn(e)),i=Oe(0,.12,e)*(1-Oe(.82,1,e)),s=qo(qo(t.target,o.target,Oe(.55,1,e)),n.pos,i),c=Ge(t.fov,o.fov,Oe(.3,1,e))-6*Math.sin(Math.PI*e),f=Ge(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return Wt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ge(t.exposure,o.exposure,Oe(.25,.75,e)),letterbox:Ge(t.letterbox,o.letterbox,e),focus:Ge(a,o.focus,Oe(.8,1,e)),aperture:Ge(.7,o.aperture,Oe(.8,1,e)),shafts:Ge(t.shafts,o.shafts,Oe(.3,.8,e)),vignette:Ge(t.vignette,o.vignette,e)}},leaf(e){let t=Jy(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:Zt(En(b8,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Oe(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=En([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Oe(0,.8,e)*.6+vn(jr(e/.8))*.4),a=En([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],vn(Oe(.8,1,e))),i=e<.8?r:a,s=qo(qo(t.target,n.pos,Oe(.03,.22,e)),o.target,Oe(.82,1,e)),c=Ge(t.fov,o.fov,Oe(.15,.7,e))-6*Oe(.6,.8,e)*(1-Oe(.85,1,e)),f=Ge(t.roll,o.roll,Oe(0,.6,e))-.04*Math.sin(Math.PI*e);return Wt(i,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ge(t.exposure,o.exposure,Oe(.5,1,e)),letterbox:Ge(t.letterbox,o.letterbox,e),focus:Ge(a,o.focus,Oe(.84,1,e)),aperture:Ge(1.1,o.aperture,Oe(.84,1,e)),shafts:Ge(t.shafts,o.shafts,Oe(.2,.9,e)),vignette:Ge(t.vignette,o.vignette,Oe(.5,1,e))}},leaf(e){let t=Ge(Jy(e),e,.35),o=En(w8,Oe(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Oe(.55,.76,e)),r=Oe(.7,.8,e);return{phase:"fly",pos:Zt(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=vn(e),r=Y0(t,o,n);return r.eye=Zt(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=vn(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ge(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=vn(e),r=En([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=qo(t.target,o.target,Oe(.1,.85,e));return Wt(r,a,Ge(t.fov,o.fov,Oe(.2,1,e)),Ge(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ge(t[r],o[r],Oe(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(e,t,o){return Y0(t,o,vn(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ge(t[r],o[r],vn(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Ge(ab,Ch(),e)}},{dur:11,kick:e=>jr((e-lc())/(1-lc())),cam(e,t,o,n){let r=lc(),a=Oe(0,r,e)*(1-Oe(r+.12,r+.35,e)),i=rb(Math.min(e,hc)),s=Zt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Oe(r+.12,1,e),f=En([t.eye,t.eye,Zt(t.eye,[0,.12,-.3]),o.eye],c);return s=qo(s,n.pos,Oe(r+.06,r+.24,e)*(1-Oe(.9,1,e))),s=qo(s,o.target,Oe(.88,1,e)),Wt(f,s,Ge(t.fov,o.fov,c),Ge(t.roll,o.roll,c))},look(e,t,o,n,r){let a=lc(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Oe(0,.12,e)*(1-Oe(a+.25,a+.5,e));return{letterbox:Ge(Ge(t.letterbox,o.letterbox,Oe(a,1,e)),1.75,s),exposure:Ge(t.exposure,o.exposure,Oe(a,1,e)),focus:e<a?t.focus:Ge(t.focus,i,Oe(a,a+.2,e)),aperture:Ge(t.aperture,o.aperture,Oe(a,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)}},leaf(e){let t=jr((e-lc())/(1-lc()));if(t<=0)return{phase:"floor"};let o=Oe(0,.85,t)*.85+Ad(Oe(0,.15,t))*.15;return{phase:"fly",pos:Zt(Da,[(Tl[0]-Da[0])*o+Math.sin(t*9)*.08*(1-t),(Tl[1]-Da[1])*o,(Tl[2]-Da[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?rb(e):null}},{dur:9,cam(e,t,o,n){let r=vn(e),a=En([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Oe(.6,.92,e),s=qo(qo(t.target,n.pos,Oe(0,.15,e)),o.target,1-i),c=Ge(t.fov,o.fov,Oe(.3,1,e)),f=Ge(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return Wt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ge(t.letterbox,o.letterbox,e),exposure:Ge(t.exposure,o.exposure,Oe(.3,.8,e)),focus:Ge(a,o.focus,Oe(.6,.95,e)),aperture:Ge(t.aperture,o.aperture,Oe(.6,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,Oe(.3,.8,e))}},leaf(e){let t=vn(e);return{phase:"fly",pos:Zt(En(k8,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=vn(e),r=Y0(t,o,n);return r.eye=Zt(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ge(t[r],o[r],e));return n.aperture=Ge(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=vn(e);return{phase:"fly",pos:Zt(En(E8,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=vn(e),r=Y0(t,o,n);return r.eye=Zt(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ge(t[r],o[r],e));return n.aperture=Ge(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=vn(e);return{phase:"fly",pos:Zt(En([Id,[29.2,1.75,45.5],[32.2,1.5,45.4],zd],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=vn(e),a=En([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Oe(.05,.3,e)*(1-Oe(.8,1,e)),s=qo(qo(t.target,o.target,Oe(.6,1,e)),n.pos,i);return Wt(a,s,Ge(t.fov,o.fov,Oe(.2,1,e)),Ge(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ge(t.letterbox,o.letterbox,e),exposure:Ge(t.exposure,o.exposure,e),focus:Ge(a,o.focus,Oe(.8,1,e)),aperture:Ge(.9,o.aperture,Oe(.8,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)}},leaf(e){let t=En([zd,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ll],Oe(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Oe(.35,.82,e)),n=Oe(.78,.88,e);return{phase:"fly",pos:Zt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=jr((e-.02)/.09);return Ad(t)+.07*Math.sin(jr((e-.08)/.18)*Math.PI)*(1-jr((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Oe(.02,.05,e)*(1-Oe(.08,.16,e)),a=Oe(.06,1,e),i=En([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+vn(a)*.45),s=Zt(n.pos,[1,-.2,-1.45]);i=qo(i,s,Oe(.1,.22,e)*(1-Oe(.52,.72,e)));let c=Oe(.06,.16,e)*(1-Oe(.86,1,e)),f=qo(t.target,n.pos,c);f=qo(f,o.target,Oe(.86,1,e));let l=Ge(t.fov,o.fov,Oe(.1,1,e))+6*Math.sin(Math.PI*Oe(.08,.9,e)),p=Ge(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Oe(.1,.9,e))+r;return Wt(Zt(i,[0,r,0]),f,l,p)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Oe(.02,.06,e)*(1-Oe(.08,.3,e));return{letterbox:Ge(t.letterbox,o.letterbox,Oe(.1,.4,e)),exposure:Ge(t.exposure,o.exposure,e)*(1+.8*i),focus:Ge(a,o.focus,Oe(.86,1,e)),aperture:Ge(.8,o.aperture,Oe(.86,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)+i}},leaf(e){let t=jr((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=En(A8(),t*.6+vn(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:Zt(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>nb(e,7.5)),{dur:10,cam(e,t,o,n){let r=vn(e),a=En([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Oe(0,.15,e)*(1-Oe(.85,1,e)),s=qo(qo(t.target,o.target,Oe(.5,1,e)),n.pos,i);return Wt(a,s,Ge(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ge(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ge(t.letterbox,o.letterbox,e),exposure:Ge(t.exposure,o.exposure,e),focus:Ge(a,o.focus,Oe(.85,1,e)),aperture:Ge(.6,o.aperture,Oe(.85,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)}},leaf(e){let t=vn(e),o=En(T8(),t);return{phase:"fly",pos:Zt(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>nb(e,7.5)),{dur:10,cam(e,t,o,n){let r=vn(e),a=En([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Oe(0,.2,e)*(1-Oe(.9,1,e)),s=qo(qo(t.target,o.target,Oe(.5,1,e)),n.pos,i);return Wt(a,s,Ge(t.fov,o.fov,r),Ge(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ge(t.letterbox,o.letterbox,e),exposure:Ge(t.exposure,o.exposure,e),focus:Ge(a,o.focus,Oe(.85,1,e)),aperture:Ge(.7,o.aperture,Oe(.85,1,e)),vignette:Ge(t.vignette,o.vignette,e),shafts:Ge(t.shafts,o.shafts,e)}},leaf(e){let t=En(L8(),Oe(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Oe(.4,.84,e)),n=Oe(.8,.9,e);return{phase:"fly",pos:Zt(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],Nd=9.2,hc=.72;function rb(e){return e<hc?Ge(Ch(),Nd,e/hc):Ge(Nd,_8,(e-hc)/(1-hc))}function lc(){return hc*jr((Da[0]+.15-Ch())/(Nd-Ch()))}var Rh={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},zh=e=>Object.assign({},Rh,e0[e].look),N8=`
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
	/* on the same line as the buttons on the right */
	top: max(10px, env(safe-area-inset-top));
	left: 22px;
	font: 600 14px/44px 'Cormorant Garamond', Georgia, serif;
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
.tour-hint.waiting svg { visibility: hidden; }
/* the leaf remembers: the painting the visitor stayed with longest */
.tour-remember em { font-style: italic; color: #ecd4a4; }
.tour-remember .tour-btn { margin: 12px 0 14px; }
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
	font: 600 13px/1.4 'Cormorant Garamond', Georgia, serif;
	letter-spacing: .38em;
	text-transform: uppercase;
	color: #ecd4a4;
	/* (it often sits over the bright door glass) */
	text-shadow: 0 0 2px rgba(0,0,0,.55), 0 1px 14px rgba(0,0,0,.75);
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
`;function Ur(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var Ji=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Nh(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}ib.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let j=document.createElement("link");j.rel="stylesheet",j.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",j.setAttribute("data-tour-font",""),document.head.appendChild(j)}let r=xd(),a=null;fetch("res/hand.json").then(j=>j.ok?j.json():null).then(j=>{a=j}).catch(()=>{});let i=document.createElement("style");i.textContent=N8+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=Ur("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Ur("div","tour-mark",Ji(Ah.name)),f=Ur("button","tour-free","Explore freely");f.type="button";let l=Ur("div","tour-links",kd.icons("tour-icon"));l.insertBefore(bd()("tour-icon"),l.firstChild),l.insertBefore(Ks().button("tour-icon"),l.firstChild.nextSibling);let p=Ur("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');p.type="button",p.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(p),Th&&l.appendChild(f);let h=Ur("div","tour-progress",e0.map(()=>"<i></i>").join("")),u=Ur("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),v=u.querySelector("span"),d=Ur("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">My Portfolio</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Ji(Ah.name)}</h1>
		<span class="tour-line tour-sub tour-motto">Every canvas holds<br>what I could not say aloud.</span>`);Nh(d,.4,.35);let m=Ah.text.split(/\n\s*\n/).map(j=>`<p class="tour-line">${Ji(j.trim())}</p>`).join(""),g=Ur("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Ji(Ah.title)}</h2>
		<span class="tour-rule"></span>
		${kd.line("tour-line tour-contact")}
		${m}`);Nh(g,.25,.28);let y=Ur("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here is waiting.<br>The leaf will guide you.</span>`);Nh(y,.6,.3);let b=Ur("div","tour-card tour-master","");function E(j){let le=Ur("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Qe=le.querySelector(".tour-title"),lt=le.querySelector(".tour-body");return le.filled=!1,le.body=lt,le.find=j,le.fill=()=>{let to=j();if(!to||le.filled)return;le.filled=!0;let Co=to.title||"";le.querySelector(".tour-kicker").textContent=m8(to)||"Oil on canvas";let cr=le.querySelector(".visit-row");cr.innerHTML=Ed.button(to),cr.hidden=!cr.innerHTML;let Ea=cr.querySelector(".visit-btn");Ea&&(Ea.addEventListener("click",mo=>{mo.stopPropagation(),Ed.open(to)}),le.warm=()=>Ed.warm(to));let Pn=0;Qe.innerHTML=Co.split(" ").map(mo=>'<span class="tour-word">'+mo.split("").map(lr=>`<span style="transition-delay:${(.35+Pn++*.045).toFixed(3)}s">${Ji(lr)}</span>`).join("")+"</span>").join(" "),Qe.setAttribute("aria-label",Co);let aa=.35+Co.length*.045+.2;le.querySelector(".tour-rule").style.transitionDelay=aa.toFixed(2)+"s";let Sn=String(to.description||"").split(/\n\s*\n/).filter(mo=>mo.trim());if(le.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&Sn.length){lt.innerHTML=Sn.map(xn=>`<p class="hand-text">${Ji(xn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let mo=lt.querySelector("canvas"),lr=Sn.map(xn=>xn.trim()).join(`

`),fn=!1,fr=!1,ia=0;lt.addEventListener("wheel",()=>{fn=!0},{passive:!0}),lt.addEventListener("touchmove",()=>{fn=!0},{passive:!0});let Sa=parseFloat(getComputedStyle(lt).fontSize)||17,Do=r(mo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Sa*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:xn=>3.5+xn.length/420,seed:3+Co.length,onPen:xn=>{if(fn)return;let Or=xn-lt.clientHeight*.55;Or>lt.scrollTop+4&&(lt.scrollTop+=Math.min(16,Or-lt.scrollTop))}});mo.addEventListener("click",xn=>{xn.stopPropagation(),clearTimeout(ia),fr?Do.finish():(fr=!0,Do.write(lr,!0))}),le.write=()=>{if(clearTimeout(ia),fn=!1,fr){Do.write(lr,!0);return}Do.write("",!0),ia=setTimeout(()=>{fr=!0,Do.write(lr)},aa*.6*1e3)},le.stopWrite=()=>{clearTimeout(ia),Do.stop()};let sa=0;window.addEventListener("resize",()=>{clearTimeout(sa),sa=setTimeout(()=>{fr&&le.classList.contains("on")&&Do.write(lr,!0)},250)})}else lt.innerHTML=Sn.map(mo=>`<p class="tour-line">${Ji(mo.trim())}</p>`).join(""),lt.querySelectorAll(".tour-line").forEach((mo,lr)=>{mo.style.transitionDelay=(aa+.3+Math.min(lr,6)*.35).toFixed(2)+"s"})},le}let k=()=>t.paintings?t.paintings():[],L=j=>k().find(le=>le.side==="corridor"&&Math.abs(le.paintingPosition[0]-j)<.5),R=E(()=>k().find(j=>j.side==="end"));b.find=R.find;let X=()=>Ur("div","tour-card",""),O=E(()=>L(W0[0])),te=E(()=>L(V0[0])),G=E(()=>L(X0[0])),oe=pr.map(j=>E(()=>k().find(le=>le.side===j.side&&Math.abs(le.paintingPosition[2]-j.z)<.5))),D=Ur("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub tour-remember" hidden></span>
		<span class="tour-line tour-sub">${Th?"The rest of the gallery is yours to wander.":(window.matchMedia&&window.matchMedia("(pointer: fine)").matches?"Scroll back":"Swipe back")+" to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${kd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Th?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Nh(D,.5,.35);let W=[d,g,y,b,R,X(),X(),X(),O,te,G,X(),...oe,D];s.append(...W,c,l,h,u),document.body.appendChild(s);let Ae=Qy()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{_=-1,eo&&(Kt={start:ao},eo=!1)}});document.body.classList.add("touring");let Be=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Te=Be?"Scroll":"Swipe",pe=e0.map((j,le)=>le===0?Be?"Scroll to begin":"Swipe up to begin":le===1?Te+" to follow the leaf":le===2?"":le===3?Te+" for its story":le===6||le===7||le===e0.length-1?"":Te+" on"),_e=[0];Td.forEach(j=>_e.push(_e[_e.length-1]+j.dur));let ht=_e[_e.length-1];function Ot(){return cc.ready("court")?cc.ready("hall")?ht:_e[1]:_e[0]}let He=null;function at(j){if(v.textContent="The next room is still arriving\u2026",u.classList.add("on","waiting"),He===j)return;He=j;let le=j===_e[0]?"court":"hall";cc.onReady(le,()=>{if(He!==j)return;He=null,u.classList.remove("waiting");let Qe=_e.indexOf(j);v.textContent=pe[Qe]||"",u.classList.toggle("on",!!pe[Qe]&&_===Qe)})}let _t=210,Jt=95,ro=.35,en=1.4,Xe=.32,ut=1,dt=1.3,Xt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Oo=2.2,Ho=.7,zt=.9,Se=!0,Pe=0,Mt=0,je=0,Ue=-10,so=!1,_=-1,Eo=0,co=0,ao=0,Bo=null,So=Object.assign({},zh(0)),nn=e0[0].cam(0),yo={phase:"home",pos:fc.slice(),tumble:0},Ja=0,xi=j=>{let le=0;for(let Qe=1;Qe<_e.length;Qe++)Math.abs(_e[Qe]-j)<Math.abs(_e[le]-j)&&(le=Qe);return le},yi=new Map,Q=4;function Ie(){let j=null,le=0;return yi.forEach(Qe=>{Qe.secs>le&&(j=Qe.p,le=Qe.secs)}),le>=Q?j:null}function Ye(){let j=D.querySelector(".tour-remember"),le=Ie();if(!le||!le.title){j.hidden=!0;return}j.hidden=!1,j.innerHTML="The leaf remembers: you stayed longest with <em>"+Ji(le.title)+'</em>.<br><button type="button" class="tour-btn quiet" data-act="remember">Return to it</button>'}function ze(j){let le=lt=>lt&&lt.title===j.title,Qe=W.findIndex(lt=>lt.find&&lt!==b&&le(lt.find()));Qe<0&&(Qe=W.indexOf(b)),!(Qe<0)&&(mt(),Pe=je=_e[Qe],Mt=0,so=!1,_=-1,co=0,Ue=ao,Kt={start:ao})}function rt(j){W[j]===D&&Ye();let le=W[j];le&&le.fill&&(le.fill(),le.body.scrollTop=0,le.offsetWidth),W.forEach((Qe,lt)=>{let to=Qe.classList.contains("on");Qe.classList.toggle("on",lt===j),lt===j&&!to&&Qe.write&&Qe.write(),lt!==j&&to&&Qe.stopWrite&&Qe.stopWrite()}),le&&le.warm&&le.warm(),v.textContent=pe[j]||"",u.classList.toggle("on",!!pe[j])}function mt(){W.forEach(j=>{j.stopWrite&&j.classList.contains("on")&&j.stopWrite(),j.classList.remove("on")}),u.classList.remove("on")}let Et=null,ft=-1;function Tt(j){if(Ae.active||!Se||Bo)return;let le=ao-Ue>ro;if(Ue=ao,le||!Et){let lt=0,to=ht;for(let Co=0;Co<_e.length;Co++)if(_e[Co]<=Pe-.02&&(lt=_e[Co]),_e[Co]>=Pe+.02){to=_e[Co];break}Et={lo:lt,hi:to}}if(ao<ft)return;so=!1,je=Math.max(Et.lo,Math.min(Et.hi,je+j)),je=Math.max(Pe-Oo,Math.min(Pe+Oo,je));let Qe=Ot();je>Qe&&(je=Math.max(Qe,Math.min(je,Pe)),j>0&&at(Qe))}function pt(j){if(Ae.active||!Se||Bo)return;let le=so?je:Pe,Qe;if(j>0)Qe=_e.findIndex(lt=>lt>le+.05);else{Qe=-1;for(let lt=_e.length-1;lt>=0;lt--)if(_e[lt]<le-.05){Qe=lt;break}}if(!(Qe<0)){if(_e[Qe]>Ot()){at(Ot());return}je=_e[Qe],so=!0,Ue=ao}}let yt=null,bt=j=>j.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(j=>s.addEventListener(j,bt)),s.addEventListener("pointerdown",j=>{if(j.stopPropagation(),!(j.target.closest("button, a")||j.target.closest(".tour-body"))){yt={x:j.clientX,y:j.clientY,lx:j.clientX,ly:j.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(j.pointerId)}catch(le){}}}),s.addEventListener("pointermove",j=>{if(!yt)return;let le=j.clientX-yt.lx,Qe=j.clientY-yt.ly;yt.lx=j.clientX,yt.ly=j.clientY;let lt=Math.abs(Qe)>=Math.abs(le)?-Qe:-le;yt.moved+=Math.abs(lt);let to=performance.now(),Co=lt/Jt;yt.v=yt.v*.6+Co/Math.max(.008,(to-yt.lt)/1e3)*.4,yt.lt=to,yt.moved>6&&Tt(Co)});let At=j=>{let le=yt;if(yt=null,!!le){if(Ae.active){le.moved<10&&performance.now()-le.t<500?Ae.tap():le.y-(j?j.clientY:le.ly)>30&&Ae.swipe(1);return}le.moved<10&&performance.now()-le.t<500?pt(1):performance.now()-le.lt<120&&Tt(Math.max(-1.6,Math.min(1.6,le.v*.22)))}};s.addEventListener("pointerup",j=>{j.stopPropagation(),At(j)}),s.addEventListener("pointercancel",()=>{yt=null}),s.addEventListener("wheel",j=>{if(Ae.active){if(j.target.closest(".conf-ui"))return;j.preventDefault(),Ae.wheel(j.deltaY);return}if(j.target.closest(".tour-body")){let Qe=j.target.closest(".tour-body"),lt=Qe.scrollTop+Qe.clientHeight>=Qe.scrollHeight-2&&j.deltaY>0,to=Qe.scrollTop<=0&&j.deltaY<0;if(!lt&&!to)return}j.preventDefault();let le=j.deltaMode===1?j.deltaY*16:j.deltaMode===2?j.deltaY*window.innerHeight:j.deltaY;Tt(le/_t)},{passive:!1}),window.addEventListener("keydown",j=>{if(!Se||Bo||document.body.classList.contains("visiting"))return;if(Ae.active){if(j.stopImmediatePropagation(),j.target&&/TEXTAREA|INPUT|BUTTON/.test(j.target.tagName))return;Ae.key(j.key)&&j.preventDefault();return}let le=j.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(le)>=0){if((le==="Enter"||le===" ")&&j.target&&j.target.tagName==="BUTTON")return;j.preventDefault(),j.stopImmediatePropagation(),pt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(le)>=0?(j.preventDefault(),j.stopImmediatePropagation(),pt(-1)):le==="Escape"?(j.preventDefault(),ra()):/^[wasdzq]$/i.test(le)&&j.stopImmediatePropagation()},!0),window.addEventListener("keyup",j=>{Se&&!Bo&&/^(Arrow|[wasdzq]$)/i.test(j.key)&&j.stopImmediatePropagation()},!0),f.addEventListener("click",j=>{j.stopPropagation(),ra()}),["mousedown","pointerdown"].forEach(j=>p.addEventListener(j,le=>le.stopPropagation())),p.addEventListener("click",j=>{j.stopPropagation(),vo()});let Ht=Wt([8.6,1.75,44.3],[-3,1.85,44.5],55,0),it=null,eo=!1;function vo(){if(!Se||Bo||Ae.active||it)return;if(Zy.enter(),!cc.ready("rest")){cc.hurry(),v.textContent="Opening the piano room\u2026",u.classList.add("on","waiting"),cc.onReady("rest",()=>{u.classList.remove("waiting","on"),vo()});return}mt(),_=-2;let j=nn.eye;if(j[0]>.5&&j[0]<13.5&&j[2]>36&&j[2]<50){eo=!1,Ae.start(nn,So);return}it={t:0}}D.addEventListener("click",j=>{let le=j.target.closest("button");if(le){if(j.stopPropagation(),le.dataset.act==="free"&&ra(),le.dataset.act==="replay"&&Yt(),le.dataset.act==="remember"){let Qe=Ie();Qe&&ze(Qe)}le.dataset.act==="list"&&Du().show(!1),le.dataset.act==="confess"&&(Zy.enter(),mt(),_=-2,Ae.start(nn,So))}});let Fo=[null,[ta.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+uc[0]-7,0],[42.5+uc[1]-7,0],[42.5+uc[2]-7,0],[1e3,Math.PI/2],...pr.map(j=>[j.z-1.6,j.side==="left"?-Math.PI/2:Math.PI/2]),[t0[2]-1.6,Math.PI]],$o=null,na=0;function ra(){if(!Se||Bo||!Th)return;let j=xi(Pe),le=Fo[j];$o=j<=1?{phase:"home",pos:fc.slice()}:j>=3&&j<=6?{phase:"floor",pos:Da.slice()}:j===11?{phase:"floor",pos:Ll.slice()}:j===18?{phase:"floor",pos:t0.slice()}:null,na=j>=12?1:0,le&&n.place&&n.place(le[0],le[1]),Bo={start:ao,fromCam:nn,fromLook:Object.assign({},So)},mt(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Yt(){Pe=je=0,Mt=0,so=!1,_=-1,Eo=0,co=0,yo={phase:"home",pos:fc.slice(),tumble:0},Kt={start:ao}}let Kt={start:-1},ln=!1,ho=[],Rt={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function No(j){Ja+=j*(yo.phase==="floor"?0:1);let le=yo.tumble===void 0?0:yo.tumble,Qe=sc.fromTranslation(ho,yo.pos);if(yo.phase==="home")Qe=sc.rotateY(Qe,Qe,2.2+Math.sin(Ja*.9)*.15),Qe=sc.rotateZ(Qe,Qe,-1+Math.sin(Ja*1.3)*.12),Qe=sc.rotateX(Qe,Qe,.4);else if(yo.phase==="floor")Qe=sc.rotateY(Qe,Qe,.65),Qe=sc.rotateX(Qe,Qe,.16);else{let lt=yo.pos;if(Rt.prev&&j>0){let Jn=[lt[0]-Rt.prev[0],lt[1]-Rt.prev[1],lt[2]-Rt.prev[2]];if(Math.hypot(Jn[0],Jn[1],Jn[2])<1.5){let $h=Math.min(1,j*6);for(let a0=0;a0<3;a0++)Rt.vel[a0]+=(Jn[a0]/j-Rt.vel[a0])*$h}else Rt.vel=[0,0,0]}Rt.prev=lt.slice();let to=Rt.vel,Co=Math.hypot(to[0],to[1],to[2]),cr=Oe(.25,1.4,Co),Ea=Oe(.5,2,-to[1]),Pn=Ja*.35*(.3+le)+.65,aa=[Math.cos(Pn),0,Math.sin(Pn)];Co>.001&&(aa=qo(aa,Cr(to,-1/Co),cr));let Sn=Math.min(1,j*4);Rt.axis=qo(Rt.axis,aa,Rt.fresh?1:Sn);let mo=Rt.axis,lr=Math.hypot(mo[0],mo[1],mo[2])||1;mo=Cr(mo,1/lr);let fn=nn.eye,fr=[fn[0]-lt[0],fn[1]-lt[1],fn[2]-lt[2]],ia=Math.hypot(fr[0],fr[1],fr[2])||1,Sa=Ge(.6,.22,cr),Do=[fr[0]/ia*Sa,1+fr[1]/ia*Sa,fr[2]/ia*Sa],sa=mo[0]*Do[0]+mo[1]*Do[1]+mo[2]*Do[2];Do=Sd(Do,Cr(mo,sa));let xn=Math.hypot(Do[0],Do[1],Do[2])||1;Do=Cr(Do,1/xn);let Or=[mo[1]*Do[2]-mo[2]*Do[1],mo[2]*Do[0]-mo[0]*Do[2],mo[0]*Do[1]-mo[1]*Do[0]],oo=Math.hypot(to[0],to[2]),Uo=0;if(oo>.15&&Rt.dir&&j>0){let Jn=[to[0]/oo,to[2]/oo];Uo=(Rt.dir[0]*Jn[1]-Rt.dir[1]*Jn[0])/j,Rt.dir=Jn}else oo>.15&&(Rt.dir=[to[0]/oo,to[2]/oo]);Rt.bank+=(Math.max(-.8,Math.min(.8,Uo*.3))*cr-Rt.bank)*Math.min(1,j*3),Rt.rock+=j*(1.5+2.4*cr),Rt.spin+=j*Ea*7*(.4+le);let ca=Math.sin(Rt.rock)*(.26+.45*le)*(1-.5*Ea)+Rt.bank+Rt.spin,Aa=Math.sin(Rt.rock*.63+1)*(.16+.3*le)+(yo.swing||0)*.9,la=Math.cos(ca),wi=Math.sin(ca),J0=Zt(Cr(Do,la),Cr(Or,wi)),yc=Zt(Cr(Or,la),Cr(Do,-wi));la=Math.cos(Aa),wi=Math.sin(Aa);let bc=Zt(Cr(mo,la),Cr(J0,wi)),wc=Zt(Cr(J0,la),Cr(mo,-wi)),Fh=Math.sin(Rt.rock+1.5708)*.035*(.3+le)*(1-.5*cr),br=Zt(lt,Cr(Or,Fh)),wr=[bc[0],bc[1],bc[2],0,wc[0],wc[1],wc[2],0,yc[0],yc[1],yc[2],0,br[0],br[1],br[2],1];for(let Jn=0;Jn<16;Jn++)Qe[Jn]=wr[Jn];Rt.fresh=!1}return yo.phase!=="fly"&&(Rt.prev=null,Rt.vel=[0,0,0],Rt.fresh=!0,Rt.spin=0,Rt.bank=0,Rt.dir=null),{visible:!0,model:Qe}}function gn(j){for(let le in Rh)So[le]=j[le]!==void 0?j[le]:Rh[le]}function Ro(j,le){if(j<=1)return{phase:"home",pos:fc.slice(),tumble:0};let Qe=ob[j];if(Qe){let lt=Qe.amp;return{phase:"fly",pos:Zt(Qe.pos(),[Math.sin(le*.55)*lt[0],Math.sin(le*.8)*lt[1],(1-Math.cos(le*.45))*lt[2]]),tumble:Qe.tumble}}return{phase:"floor",pos:(j>=18?t0:j>=10?Ll:Da).slice(),tumble:0}}let ei=0,bi=null;function ti(j){let le=Math.min(.1,Math.max(0,j-ei));if(ei=j,ao=j,ln||(ln=!0,Kt.start=j),Bo)return null;if(it&&(it.t+=le,it.t>=.7&&(it=null,eo=!0,Ae.start(Ht,Object.assign({},Rh,{fade:1,fadeColor:[0,0,0]})))),Ae.active){let oo=Ae.update(le);return nn=oo.camera,gn(oo.look),o&&window.__camOverride&&(nn=window.__camOverride),o&&window.__lookOverride&&Object.assign(So,window.__lookOverride),{camera:nn,walker:null,door:1,look:So,leaf:No(le)}}if(!so&&!yt&&ao-Ue>Ho){let oo=xi(je);Math.abs(_e[oo]-je)<zt&&(je=_e[oo])}let Qe=je-Pe;if(so){let Uo=Math.sign(Qe)*Math.min(ut,Math.sqrt(2*dt*Math.abs(Qe)))-Mt;Mt+=Math.sign(Uo)*Math.min(Math.abs(Uo),dt*le),Pe+=Mt*le,(Qe>0&&Pe>=je||Qe<0&&Pe<=je||Math.abs(je-Pe)<1e-4)&&(Pe=je,Mt=0,so=!1)}else{let oo=g8(Pe,je,Mt,Xe,le,3);Pe=oo[0],Mt=oo[1],Math.abs(je-Pe)<1e-4&&Math.abs(Mt)<.001&&(Pe=je,Mt=0)}let lt=0;for(;lt<Td.length-1&&Pe>=_e[lt+1];)lt++;let to=Td[lt],Co=jr((Pe-_e[lt])/to.dur),cr=e0[lt],Ea=e0[lt+1],Pn=xi(Pe);Pn!==Eo&&(Eo=Pn,co=0);let aa=Math.abs(Pe-_e[Pn])<.02;aa&&(co+=le);let Sn=1-Oe(0,1.2,Math.abs(Pe-_e[Pn])),mo=to.leaf(Co);if(mo.pos?yo=Object.assign({},mo):yo=Object.assign({},mo,{pos:mo.phase==="home"?fc.slice():(lt>=10?Ll:Da).slice()}),ob[Pn]&&Sn>0){let oo=Ro(Pn,co);yo.pos=qo(yo.pos,oo.pos,Sn)}let lr=to.walker&&(Co>.01||lt===6)?to.walker(Co):null;bi=lr==null?null:{x:lr,z:Ld,heading:Math.PI/2,phase:(lr-ab)/M8};let fn=to.cam(Co,cr.cam(0),Ea.cam(0),yo);if(Sn>0&&co>0){let oo=e0[Pn],Uo=oo.cam(0),ca=oo.cam(co);fn=Wt(Zt(fn.eye,Cr(Sd(ca.eye,Uo.eye),Sn)),Zt(fn.target,Cr(Sd(ca.target,Uo.target),Sn)),fn.fov+(ca.fov-Uo.fov)*Sn,fn.roll+(ca.roll-Uo.roll)*Sn)}if(Sn>0&&!Xt){let oo=ao,Uo=.006*Sn,ca=Math.sin(oo*.61)*.6+Math.sin(oo*1.37+1.3)*.4,Aa=Math.sin(oo*.47+2.1)*.6+Math.sin(oo*1.13+.4)*.4,la=Math.sin(oo*.53+4)*.5+Math.sin(oo*.97+2.6)*.5;fn=Wt(Zt(fn.eye,[ca*Uo,Aa*Uo*.7,la*Uo]),Zt(fn.target,[Aa*Uo*1.8,ca*Uo*1.4,0]),fn.fov,fn.roll+la*.0012*Sn)}nn=fn;let fr=zh(lt),ia=zh(lt+1),Sa=Object.assign({},fr,to.look(Co,fr,ia,yo,fn.eye));if(Sn>0){let oo=zh(Pn);for(let Uo in oo)typeof oo[Uo]=="number"&&(Sa[Uo]=Ge(Sa[Uo],oo[Uo],Sn))}gn(Sa);let sa=aa&&Math.abs(je-Pe)<.02?Pn:-1;if(sa!==_&&(sa>=0&&(ft=ao+en),_=sa,sa>=0?rt(sa):mt()),h.querySelectorAll("i").forEach((oo,Uo)=>oo.classList.toggle("on",Uo===Pn)),_>=0&&W[_].find&&!document.hidden){let oo=W[_].find();if(oo&&oo.title){let Uo=yi.get(oo.title)||{p:oo,secs:0};Uo.secs+=le,yi.set(oo.title,Uo)}}let xn=_>=0?W[_]:null;xn&&xn.fill&&!xn.filled&&(xn.fill(),xn.filled&&(xn.classList.remove("on"),xn.offsetWidth,xn.classList.add("on")));let Or=jr((j-Kt.start)/2.6);return Or<1&&(So.fade=Math.max(So.fade,1-Oe(0,1,Or)),So.fadeColor=[0,0,0]),o&&window.__camOverride&&(nn=window.__camOverride),o&&window.__lookOverride&&Object.assign(So,window.__lookOverride),{camera:nn,walker:bi,door:to.door?to.door(Co):lt>=12?1:0,look:it?Object.assign(So,{fade:Math.max(So.fade||0,jr(it.t/.6)),fadeColor:[0,0,0]}):So,leaf:No(le)}}return o&&(window.__tour={go:pt,exit:ra,wind:Tt,linger:()=>[...yi].map(([j,le])=>[j,+le.secs.toFixed(1)]),confess(){mt(),_=-2,Ae.start(nn,So)},note:()=>vo(),conf:Ae,paper:Mh().STATE,seek(j,le){Pe=je=_e[j]+(_e[j+1]-_e[j])*le,Mt=0,so=!1,Ue=ao+1e6,Kt.start=ao-10,ln=!0},jump(j){Pe=je=_e[j],Mt=0,so=!1,co=0,Ue=ao,Kt.start=ao-10,ln=!0},state:()=>({current:xi(Pe),scroll:+Pe.toFixed(3),target:+je.toFixed(3),shown:_,move:Math.abs(je-Pe)>.02?{p:Pe}:null,camNow:nn,leaf:yo,look:So})}),{update:ti,get active(){return Se&&!Bo},handover(j){if(!Bo)return null;let le=jr((j-Bo.start)/1.8);return le>=1?(Se=!1,null):{from:Bo.fromCam,fromLook:Bo.fromLook,k:vn(le)}},restingDoor:()=>na,restingLeaf(){return $o?(yo=$o,No(0)):null},mix:Y0,cam:Wt}}});var R8=Fu(),qa=ua(),Wd=Du(),Oh=qa.reflection,C8=!1,Mb=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),Vd=()=>Mb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Vd=()=>Mb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var kb=()=>2*Math.atan(Math.tan(Vd()*.5)*window.innerHeight/window.innerWidth),P8=am(),Cl=new P8;Cl.showPanel(0);C8&&document.body.appendChild(Cl.dom);var mn,xc,Gd,mc,Dd,cn;function I8(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!I8())throw R8.finish(),Wd.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");mn=im()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:qa.pixelRatio});location.hash==="#list"&&Wd.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Wd.show(!1)});xc=Wm()();var O8=g1();Gd=O8(mn,xc,Oh);mc=ug()(mn,xc);Dd=mg()(mn);var cb=kg()(mn,xc),lb=Ig()(mn),fb=$g()(mn),hb=tx()(mn),ub=ix()(mn),db=hx()(mn),n0=Tx()(mn),qd=Q1(),Eb=vf(),F8=Bc(),Hd=J1(),Bd=ur(),yr=Vf(),Ud=$x(),Sb=Ks(),{A:vc}=va();cn=by()(xc,kb);var gc=_y()(mn,qa),o0=Ay()(mn),pb=Ly()(mn),$8=Ry()(mn,qa),G8=$y()(mn,qa),vb=Ri()(mn),mb=Mh()(mn),gb=Ii()(mn),Za=sb()({fps:cn,paintings:()=>mc.interactables(),avatar:n0,onExit:()=>cn.setPaused(!1)});cn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=gc);var K0=[],Il=[],Ma=[7,2,1.6];xc.viewer=Ma;var D8=mn({cull:{enable:!0,face:"back"},uniforms:{view:()=>K0,proj:()=>Il,yScale:1,mirrorOn:()=>Oh?1:0,night:()=>Bd.night,time:mn.context("time")}}),q8=mn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),Ab=document.createElement("style");Ab.textContent=`

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
`;document.head.appendChild(Ab);var ka=document.createElement("button");ka.className="painting-plaque";ka.type="button";ka.setAttribute("aria-label","Read painting");document.body.appendChild(ka);var Ir=document.createElement("div");Ir.className="story-overlay";Ir.innerHTML=`

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

		${Eb.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Ir);var r0=document.createElement("div");r0.className="museum-links";r0.innerHTML=Eb.icons("museum-link");r0.insertBefore(bd()("museum-link"),r0.firstChild);r0.insertBefore(Sb.button("museum-link"),r0.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>r0.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(r0);var H8=Ir.querySelector("#story-title"),B8=Ir.querySelector("#story-body"),xb=Ir.querySelector("#story-meta"),U8=Ir.querySelector(".story-contact"),Rl=Ir.querySelector(".story-visit");Rl.addEventListener("click",e=>{e.target.closest(".visit-btn")&&Z0&&Hd.open(Z0)});var j8=Ir.querySelector(".story-close"),Z0=null,Wr={p:0,target:0,last:0},Tb={title:qd.title,description:qd.text,isAbout:!0},gi=null;function Xd(e){e&&(Z0=e,H8.textContent=e.title||"",B8.textContent=e.description||"",xb.textContent=e.isAbout?"":F8(e),xb.hidden=!!e.isAbout,U8.hidden=!e.isAbout,Rl.innerHTML=e.isAbout?"":Hd.button(e),Rl.hidden=!Rl.innerHTML,Rl.hidden||Hd.warm(e),Ir.classList.toggle("about-mode",!!e.isAbout),Ir.classList.add("open"),Wr.target=e.isAbout?1:0,gi=e,ka.classList.remove("visible"),cn.setPaused(!0))}function Yd(){Ir.classList.remove("open"),Wr.target=0,Z0=null,gi=null,cn.setPaused(!1)}function Lb(e){e&&(e.preventDefault(),e.stopPropagation()),gi&&Xd(gi)}ka.addEventListener("pointerup",Lb,!0);ka.addEventListener("touchend",Lb,{passive:!1,capture:!0});ka.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),Z0===null&&gi&&Xd(gi)},!0);j8.addEventListener("click",Yd);Ir.addEventListener("click",e=>{e.target===Ir&&Yd()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Ir.classList.contains("open")&&Yd()});function yb(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function W8(){if(Z0)return;if(Za.active){gi=null,ka.classList.remove("visible");return}let e=mc.interactables(),t=cn.forward[0],o=cn.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let l=s[0]-cn.pos[0],p=s[2]-cn.pos[2],h=-(l*c+p*f),u=Math.abs(l*f-p*c),v=-(t*c+o*f)/n,d=i.side==="end"?11:8,m=(i.width||2)/2;v>.9&&h>.5&&h<d&&u<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=cn.pos[0],s=cn.pos[2];t/n>.85&&i<13.6&&s>vc.z0-.5&&s<vc.z1+.5&&(r=Object.assign({},Tb,{plaqueTitle:qd.name}))}r?(gi=r,ka.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,ka.classList.add("visible")):(gi=null,ka.classList.remove("visible"))}var Kd=$s();function V8(){let e=n0.state;if(!e||!e.glowPos)return null;let t=yb(cn.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=yb(cn.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var jd=null;window.addEventListener("pointerdown",e=>{jd={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=jd;if(jd=null,!t||Z0||Za.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=V8();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),Xd(Tb))},!0);function X8(e){let t=Math.min(Math.max(e-Wr.last,0),.1);Wr.last=e;let o=t/1.6;if(Wr.p=Wr.target>Wr.p?Math.min(1,Wr.p+o):Math.max(0,Wr.p-o),Wr.p<=0)return;let n=Wr.p<.5?2*Wr.p*Wr.p:1-Math.pow(-2*Wr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=n0.state,i=a&&a.hipsPos?a.hipsPos[0]:vc.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:vc.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=cn.pos,p=cn.forward,h=[l[0],l[1],l[2]],u=[l[0]+p[0],l[1]+p[1],l[2]+p[2]],v=(y,b)=>y.map((E,k)=>E+(b[k]-E)*n),d=[vc.cx-6.2,1.7,vc.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*d[b]+n*n*c[b]);Kd.lookAt(cn.view(),g,v(u,f),[0,1,0])}var dc={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Q0=null,Pl=!1,Ph=!1;function Y8(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Kd.lookAt(e,t,o,[i[0]*f,c,i[2]*f])}function K8(e){let t=window.innerWidth/window.innerHeight,o=gc.shot,n=Za.active?Za.update(e):null,r=n?null:Za.handover(e),a=null,i=dc;if(n){a=n.camera,i=n.look,Q0=n.leaf;let s=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;n0.setWalk(s),Pl=!!s,o0.setOpen(n.door||0)}else Q0=Za.restingLeaf(),n0.setWalk(null),Pl=!1,o0.setOpen(Za.restingDoor());if(r){let s=cn.pos,c=cn.forward,f=Za.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],kb()*180/Math.PI,0);a=Za.mix(r.from,f,r.k),i={};for(let l in dc)i[l]=Array.isArray(dc[l])?dc[l]:r.fromLook[l]+(dc[l]-r.fromLook[l])*r.k}if(a&&n&&(a=Ud.apply(a,e)),a)Y8(K0,a.eye,a.target,a.roll||0),Kd.perspective(Il,a.fov*Math.PI/180,t,.1,700),Ma[0]=a.eye[0],Ma[1]=a.eye[1],Ma[2]=a.eye[2];else{let s=cn.view(),c=cn.proj();for(let h=0;h<16;h++)K0[h]=s[h],Il[h]=c[h];let f=s[12],l=s[13],p=s[14];Ma[0]=-(s[0]*f+s[1]*l+s[2]*p),Ma[1]=-(s[4]*f+s[5]*l+s[6]*p),Ma[2]=-(s[8]*f+s[9]*l+s[10]*p)}for(let s in dc)o[s]=i[s];n&&Ud.pull(o,e)}var oa={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},Od=[9,9,9,9],bb=[0,0,0,0],zl=0,Fd=0,pc=null,wb=0,_b=0,Nl=0;function Q8(e){let t=Math.min(.1,Math.max(0,e-wb));wb=e,oa.focus=gc.shot.focus,oa.aperture=qa.post>=2?gc.shot.aperture:0;for(let i=0;i<4;i++)Od[i]+=t,oa.wake[i][3]=bb[i]*Math.exp(-Od[i]/1.1);let o=Q0&&Q0.visible?Q0.model:null;if(o&&t>0){let i=[o[12],o[13],o[14]];if(pc){let s=[i[0]-pc[0],i[1]-pc[1],i[2]-pc[2]],c=Math.hypot(s[0],s[1],s[2]),f=c/t;if(c<1.5&&f>.12){let l=Math.min(1,t*8);for(let h=0;h<3;h++)oa.wakeDir[h]+=(s[h]/c-oa.wakeDir[h])*l;let p=Math.hypot(oa.wakeDir[0],oa.wakeDir[1],oa.wakeDir[2])||1;for(let h=0;h<3;h++)oa.wakeDir[h]/=p;if(Fd+=t,Fd>.14){Fd=0;let h=oa.wake[zl];h[0]=i[0],h[1]=i[1],h[2]=i[2],bb[zl]=Math.min(1,(f-.12)/1.6)*.5,Od[zl]=0,zl=(zl+1)%4}}}pc=i}else o||(pc=null);let n=o0.openNow?o0.openNow():0,r=t>0?(n-_b)/t:0;_b=n;let a=Math.max(-1,Math.min(1,r*1.2));Nl+=(a-Nl)*Math.min(1,t*(Math.abs(a)>Math.abs(Nl)?6:.7)),oa.gust[0]+=Nl*5.5*t,oa.gust[1]=Math.abs(Nl)}var $d=0,Ih=!1;mn.frame(function({time:e}){if(document.body.classList.contains("visiting")){$d=0;return}Cl.begin(),Bd.tick(e);let t=Za.active&&Ud.resting&&Bd.settled&&(qa.isPhone||qa.scale<1||qa.level>0);if(t){if(Ih=!Ih,Ih){Cl.end();return}}else Ih=!1;let o=e-$d;$d=e,qa.frame(t?o/2:o),Oh=qa.reflection,cn.tick({time:e}),X8(e),mc.update(cn.pos,cn.fmouse[1],Vd()),W8(),K8(e),yr.update(K0,Il,Ma),Sb.listen(Ma),Ph=!Pl&&yr.room("stair")&&(!yr.room("court")||Ma[0]<.5||Ma[2]>30),n0.setPiano(Ph),Q8(e),gc.capture(arguments[0],{view:K0,proj:Il,eye:Ma},()=>{D8(()=>{Oh&&yr.floor&&q8(()=>{Gd(),cb({reflected:!0}),vb(),yr.room("stair",!0)&&(gb({reflected:!0}),mb({reflected:!0,view:K0})),yr.room("court",!0)&&db(),(Ph||yr.room("court",!0)||Pl)&&n0(),Dd(mc.batch()),yr.room("street",!0)&&lb(),yr.room("garden",!0)&&hb(),yr.room("florence",!0)&&ub(),pb(Q0),o0(),fb(),o0.glass()}),Gd(),cb(),vb(),yr.room("stair")&&(gb(),mb({view:K0})),yr.room("court")&&db(),(Ph||yr.room("court")||Pl)&&n0(),Dd(mc.batch()),yr.room("street")&&lb(),yr.room("garden")&&(hb(),G8()),yr.room("florence")&&ub(),pb(Q0),o0(),$8(oa),fb(),o0.glass()})}),gc.present(),Cl.end()});})();
