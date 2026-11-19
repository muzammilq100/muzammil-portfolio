"use strict";(()=>{var Kw=(e,t)=>()=>(e&&(t=e(e=0)),t);var ve=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ue,R=Kw(()=>{ue={"images/IMG_20250717_102753.jpg":"30e8c5a4","images/between-grief-and-acceptance.jpg":"4703d242","images/but-i-gave-you-comfort.jpg":"343315c5","images/everything-else-was-easier-to-perform.jpg":"2e916641","images/holding-on-to-what-never-was.jpg":"1e2bf96b","images/longing.jpg":"49393080","images/lv_0_20260707024023.jpg":"64e5ea9b","images/lv_0_20260914002544.jpg":"63be82fc","images/the-hardest-gift-i-gave.jpg":"71e841fc","images/uncertainty.jpg":"1dbae14f","images/web/a-private-eulogy-1024.webp":"5fb85ea5","images/web/a-private-eulogy.webp":"1e02f0ce","images/web/between-grief-and-acceptance-1024.webp":"69086872","images/web/between-grief-and-acceptance.webp":"bc1c0806","images/web/but-i-gave-you-comfort-1024.webp":"db698a04","images/web/but-i-gave-you-comfort.webp":"6b01949b","images/web/everything-else-was-easier-to-perform-1024.webp":"e6c47671","images/web/everything-else-was-easier-to-perform.webp":"e7e16269","images/web/holding-on-to-what-never-was-1024.webp":"c5a80eba","images/web/holding-on-to-what-never-was.webp":"d3eae437","images/web/longing-1024.webp":"545b2e26","images/web/longing.webp":"510185b3","images/web/love-me-like-i-am-already-dead-1024.webp":"307f321a","images/web/love-me-like-i-am-already-dead.webp":"b5f906ee","images/web/the-guardians-i-built-to-defend-1024.webp":"119df698","images/web/the-guardians-i-built-to-defend.webp":"c957ab6a","images/web/the-hardest-gift-i-gave-1024.webp":"1704bc67","images/web/the-hardest-gift-i-gave.webp":"e547b4bf","images/web/uncertainty-1024.webp":"4d505fcf","images/web/uncertainty.webp":"a02e413e"}});var Du=ve((lS,Yv)=>{"use strict";R();var Zw=[{name:"court",test:/res\/(tree\.bin|tree\/|avatar\/(?!motion\.))/},{name:"hall",test:/res\/(pieta\.bin|venus\.bin|david\.bin|avatar\/motion\.)/},{name:"rest",test:/res\/(piano\.bin|audio\/|street\/photo_night)/}],bs=document.getElementById("loader"),ys=bs&&bs.querySelector(".loader-name"),Dc=0,uf=0,df=!1,Jw=performance.now(),ws=.06,xs=0,Iu=0,Hv=!1,e4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function t4(e){if(!ys)return;let t=ys.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";ys.style.webkitMaskPosition=n,ys.style.maskPosition=n}function Wv(e){let t=Math.min(.05,Iu?(e-Iu)/1e3:.016);Iu=e;let o=df?.75:.22+(ws-xs)*1.2;if(xs=Math.min(ws,xs+Math.max(0,o)*t),e4&&(xs=ws),t4(xs),df&&xs>=.999){Hv||(Hv=!0,setTimeout(Vv,650));return}requestAnimationFrame(Wv)}ys&&requestAnimationFrame(Wv);function Bv(){let e=Dc?uf/Math.max(Dc,24):0;ws=Math.max(ws,Math.min(.9,.06+e*.84))}function Vv(){bs&&(bs.classList.add("done"),setTimeout(()=>bs.remove(),1400))}function Fu(){df||(df=!0,Gu=!0,$u(),window.__galleryReady=!0,bs&&(ws=1,ys||Vv()))}var Uv=null;function o4(){clearTimeout(Uv),uf>=Dc&&performance.now()-Jw>600&&(Uv=setTimeout(()=>{uf>=Dc&&Fu()},450))}setTimeout(Fu,2e4);var n4=e=>/(^|\/)(res|images)\//.test(e),pf=window.fetch.bind(window);async function r4(e,t){let o=await pf(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}var y0=Zw.map(e=>({name:e.name,test:e.test,waiting:[],asked:0,done:0,open:!1,cbs:[]})),a4=e=>y0.find(t=>t.test.test(e)),Gu=!1;function Ou(e){return e.open&&e.done>=e.asked&&e.waiting.length===0}function $u(){for(let e=0;e<y0.length;e++){let t=y0[e],o=e===0?Gu:Ou(y0[e-1]);!t.open&&o&&(t.open=!0,t.waiting.splice(0).forEach(n=>n())),Ou(t)&&t.cbs.splice(0).forEach(n=>{try{n()}catch(r){console.error(r)}})}}function jv(e,t,o){return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r4(o,t).catch(()=>pf(e,t)):pf(e,t)}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!n4(o))return pf(e,t);let n=a4(o);if(n){n.asked++;let a=()=>{n.done++,$u()},i=c=>c.blob().then(f=>new Response(f,{status:c.status,statusText:c.statusText,headers:c.headers})),s=()=>jv(e,t,o).then(i).then(c=>(a(),c),c=>{throw a(),c});return n.open?s():new Promise((c,f)=>{n.waiting.push(()=>s().then(c,f))})}Dc++,Bv();let r=a=>(uf++,Bv(),o4(),a);return jv(e,t,o).then(r,a=>{throw r(),a})};function i4(){Gu&&(y0.forEach(e=>{e.open||(e.open=!0,e.waiting.splice(0).forEach(t=>t()))}),$u())}function Xv(e){let t=y0.find(o=>o.name===e);return!t||Ou(t)}function s4(e,t){if(Xv(e)){t();return}y0.find(o=>o.name===e).cbs.push(t)}Yv.exports={finish:Fu,ready:Xv,onReady:s4,hurry:i4}});var pa=ve((hS,Jv)=>{"use strict";R();var Kv=typeof navigator!="undefined"&&navigator.userAgent||"",c4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,ii=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Kv)||/Macintosh/.test(Kv)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||c4,Qv=typeof window!="undefined"&&window.devicePixelRatio||1,yo={isPhone:ii,pixelRatio:ii?Math.min(Qv,1.5):Math.min(Qv,2),reflection:!ii,gardenDetail:ii?0:1,leafShare:ii?.65:1,motion:!ii,post:ii?1:2,level:ii?1:0};yo.scale=1;var l4=ii?.55:.6,qc=0,vf=0,Hc=0,Bc=0,_s=1,Uc=0,mf=48,Ms=null,qu=0;function f4(e){Ms={fps:e,scale:yo.scale},yo.scale>.86?yo.scale=.85:yo.reflection?yo.stepDown():yo.scale>.71?yo.scale=.7:yo.stepDown()||(yo.scale=Math.max(l4,yo.scale-.1))}var Zv=!0;try{/[?&]noadapt\b/.test(location.search)&&(Zv=!1)}catch(e){}yo.frame=e=>{if(!Zv)return;if(!(e>0)||e>1){qc=0,vf=0;return}if(qc+=e,vf++,qc<.75)return;let t=vf/qc;if(qc=0,vf=0,Uc>0&&(Uc-=.75,Uc<=0&&(_s=1)),Ms){if(t<Ms.fps*1.08&&Ms.scale>yo.scale){if(++qu>=2){yo.scale=1,_s=1,Uc=0,mf=Math.min(mf,t*.85),qu=0,Hc=0,Ms=null;return}}else qu=0;Ms=null}if(t<mf){if(Bc=0,++Hc>=2){if(Hc=0,yo.scale>.61&&yo.climbed){_s=yo.scale-.05,Uc=40,yo.scale=_s,yo.climbed=!1;return}f4(t)}}else t>Math.max(mf*1.15,55)?(Hc=0,++Bc>=6&&yo.scale<_s-.001?(yo.scale=Math.min(_s,yo.scale+.05),yo.climbed=!0,Bc=0):Bc>=6&&(yo.climbed=!1)):(Hc=0,Bc=0)};yo.stepDown=()=>{if(yo.reflection)yo.reflection=!1;else if(yo.gardenDetail>0||yo.motion)yo.gardenDetail=0,yo.motion=!1,yo.leafShare=Math.min(yo.leafShare,.65);else if(yo.post>0)yo.post--;else return!1;return yo.level++,!0};Jv.exports=yo});var Hu=ve((dS,em)=>{"use strict";R();em.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var gf=ve((vS,nm)=>{"use strict";R();var Sr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},tm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',om='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Sr.instagramUrl="https://instagram.com/"+Sr.instagram;Sr.mailUrl="mailto:"+Sr.email+"?subject="+encodeURIComponent("Your paintings");Sr.icons=e=>`
	<a class="${e}" href="${Sr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Sr.instagram}" title="Instagram">${tm}</a>
	<a class="${e}" href="${Sr.mailUrl}" aria-label="Email ${Sr.email}" title="Email">${om}</a>`;Sr.line=e=>`
	<span class="${e}">
		<a href="${Sr.instagramUrl}" target="_blank" rel="noopener">${tm}<span>@${Sr.instagram}</span></a>
		<a href="${Sr.mailUrl}">${om}<span>${Sr.email}</span></a>
	</span>`;nm.exports=Sr});var jc=ve((gS,rm)=>{"use strict";R();rm.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var xf=ve((yS,im)=>{"use strict";R();var am=typeof ue!="undefined"?ue:{};im.exports=e=>am[e]?e+"?v="+am[e]:e});var Bu=ve((wS,fm)=>{"use strict";R();var h4=Hu(),u4=gf(),sm=jc(),d4=pa(),cm=xf(),Li=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),p4=`
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
`,Ar=null;function v4(e){if(Ar){Ar.hidden=!1,requestAnimationFrame(()=>Ar.classList.add("on"));return}let t=document.createElement("style");t.textContent=p4,document.head.appendChild(t);let o=!d4.isPhone;Ar=document.createElement("div"),Ar.className="plist",Ar.setAttribute("role","region"),Ar.setAttribute("aria-label","All paintings"),Ar.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">Every canvas holds<br>what I could not say aloud.</p>
			${u4.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${h4.map(r=>`
			<article class="plist-item" id="${Li(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Li(r.title)}, ${Li(sm(r))}"
					src="${Li(cm("images/web/"+r.slug+(o?"":"-1024")+".webp"))}"
					onerror="this.onerror=null;this.src='${Li(cm("images/"+r.file))}'">
				<p class="plist-meta">${Li(sm(r))}</p>
				<h2>${Li(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Li(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Ar.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Ar.querySelector(".plist-close");n&&n.addEventListener("click",lm),document.body.appendChild(Ar),requestAnimationFrame(()=>Ar.classList.add("on"))}function lm(){Ar&&(Ar.classList.remove("on"),setTimeout(()=>{Ar.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}fm.exports={show:v4,hide:lm}});var hm=ve((Uu,ju)=>{R();(function(e,t){typeof Uu=="object"&&typeof ju!="undefined"?ju.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Uu,function(){var e=function(){function t(p){return r.appendChild(p.dom),p}function o(p){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===p?"block":"none";n=p}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(p){p.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var p=(performance||Date).now();if(f.update(p-a,200),p>i+1e3&&(c.update(1e3*s/(p-i),100),i=p,s=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,l=3*s,p=2*s,h=3*s,u=15*s,v=74*s,d=30*s,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(t,l,p),g.fillRect(h,u,v,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,u,v,d),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,u),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",l,p),g.drawImage(m,h+s,u,v-s,d,h,u,v-s,d),g.fillRect(h+v-s,u,s,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+v-s,u,s,i((1-y/b)*d))}}},e})});var um=ve((Wu,Vu)=>{R();(function(e,t){typeof Wu=="object"&&typeof Vu!="undefined"?Vu.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(Wu,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,M){for(var N=Object.keys(M),ee=0;ee<N.length;++ee)x[N[ee]]=M[N[ee]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var M=new Error("(regl) "+x);throw console.error(M),M}function a(x,M){x||r(M)}function i(x){return x?": "+x:""}function s(x,M,N){x in M||r("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(M).join())}function c(x,M){e(x)||r("invalid parameter type"+i(M)+". must be a typed array")}function f(x,M){switch(M){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,M,N){f(x,M)||r("invalid parameter type"+i(N)+". expected "+M+", got "+typeof x)}function p(x,M){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(M)+". must be a nonnegative integer")}function h(x,M,N){M.indexOf(x)<0&&r("invalid value"+i(N)+". must be one of: "+M)}var u=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function v(x){Object.keys(x).forEach(function(M){u.indexOf(M)<0&&r('invalid regl constructor argument "'+M+'". must be one of '+u)})}function d(x,M){for(x=x+"";x.length<M;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,M){this.number=x,this.line=M,this.errors=[]}function y(x,M,N){this.file=x,this.line=M,this.message=N}function b(){var x=new Error,M=(x.stack||x).toString(),N=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(M);if(N)return N[1];var ee=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(M);return ee?ee[1]:"unknown"}function E(){var x=new Error,M=(x.stack||x).toString(),N=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(M);if(N)return N[1];var ee=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(M);return ee?ee[1]:"unknown"}function k(x,M){var N=x.split(`
`),ee=1,ce=0,Q={unknown:new m,0:new m};Q.unknown.name=Q[0].name=M||b(),Q.unknown.lines.push(new g(0,""));for(var re=0;re<N.length;++re){var xe=N[re],we=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(xe);if(we)switch(we[1]){case"line":var Se=/(\d+)(\s+\d+)?/.exec(we[2]);Se&&(ee=Se[1]|0,Se[2]&&(ce=Se[2]|0,ce in Q||(Q[ce]=new m)));break;case"define":var _e=/SHADER_NAME(_B64)?\s+(.*)$/.exec(we[2]);_e&&(Q[ce].name=_e[1]?n(_e[2]):_e[2]);break}Q[ce].lines.push(new g(ee++,xe))}return Object.keys(Q).forEach(function(Ne){var $e=Q[Ne];$e.lines.forEach(function(ye){$e.index[ye.number]=ye})}),Q}function L(x){var M=[];return x.split(`
`).forEach(function(N){if(!(N.length<5)){var ee=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(N);ee?M.push(new y(ee[1]|0,ee[2]|0,ee[3].trim())):N.length>0&&M.push(new y("unknown",0,N))}}),M}function C(x,M){M.forEach(function(N){var ee=x[N.file];if(ee){var ce=ee.index[N.line];if(ce){ce.errors.push(N),ee.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(N)})}function Y(x,M,N,ee,ce){if(!x.getShaderParameter(M,x.COMPILE_STATUS)){var Q=x.getShaderInfoLog(M),re=ee===x.FRAGMENT_SHADER?"fragment":"vertex";Le(N,"string",re+" shader source must be a string",ce);var xe=k(N,ce),we=L(Q);C(xe,we),Object.keys(xe).forEach(function(Se){var _e=xe[Se];if(!_e.hasErrors)return;var Ne=[""],$e=[""];function ye(Ce,U){Ne.push(Ce),$e.push(U||"")}ye("file number "+Se+": "+_e.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),_e.lines.forEach(function(Ce){if(Ce.errors.length>0){ye(d(Ce.number,4)+"|  ","background-color:yellow; font-weight:bold"),ye(Ce.line+o,"color:red; background-color:yellow; font-weight:bold");var U=0;Ce.errors.forEach(function(ae){var Ee=ae.message,Be=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Ee);if(Be){var de=Be[1];switch(Ee=Be[2],de){case"assign":de="=";break}U=Math.max(Ce.line.indexOf(de,U),0)}else U=0;ye(d("| ",6)),ye(d("^^^",U+3)+o,"font-weight:bold"),ye(d("| ",6)),ye(Ee+o,"font-weight:bold")}),ye(d("| ",6)+o)}else ye(d(Ce.number,4)+"|  "),ye(Ce.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?($e[0]=Ne.join("%c"),console.log.apply(console,$e)):console.log(Ne.join(""))}),a.raise("Error compiling "+re+" shader, "+xe[0].name)}}function F(x,M,N,ee,ce){if(!x.getProgramParameter(M,x.LINK_STATUS)){var Q=x.getProgramInfoLog(M),re=k(N,ce),xe=k(ee,ce),we='Error linking program with vertex shader, "'+xe[0].name+'", and fragment shader "'+re[0].name+'"';typeof document!="undefined"?console.log("%c"+we+o+"%c"+Q,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(we+o+Q),a.raise(we)}}function oe(x){x._commandRef=b()}function D(x,M,N,ee){oe(x);function ce(we){return we?ee.id(we):0}x._fragId=ce(x.static.frag),x._vertId=ce(x.static.vert);function Q(we,Se){Object.keys(Se).forEach(function(_e){we[ee.id(_e)]=!0})}var re=x._uniformSet={};Q(re,M.static),Q(re,M.dynamic);var xe=x._attributeSet={};Q(xe,N.static),Q(xe,N.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function ne(x,M){var N=E();r(x+" in command "+(M||b())+(N==="unknown"?"":" called from "+N))}function q(x,M,N){x||ne(M,N||b())}function V(x,M,N,ee){x in M||ne("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(M).join(),ee||b())}function Le(x,M,N,ee){f(x,M)||ne("invalid parameter type"+i(N)+". expected "+M+", got "+typeof x,ee||b())}function je(x){x()}function ze(x,M,N){x.texture?h(x.texture._texture.internalformat,M,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,N,"unsupported renderbuffer format for attachment")}var me=33071,ke=9728,dt=9984,Gt=9985,Ue=9986,st=9987,kt=5120,to=5121,io=5122,on=5123,Ke=5124,pt=5125,vt=5126,Kt=32819,Go=32820,Uo=33635,Rt=34042,Te=36193,Oe={};Oe[kt]=Oe[to]=1,Oe[io]=Oe[on]=Oe[Te]=Oe[Uo]=Oe[Kt]=Oe[Go]=2,Oe[Ke]=Oe[pt]=Oe[vt]=Oe[Rt]=4;function Et(x,M){return x===Go||x===Kt||x===Uo?2:x===Rt?4:Oe[x]*M}function Ve(x){return!(x&x-1)&&!!x}function We(x,M,N){var ee,ce=M.width,Q=M.height,re=M.channels;a(ce>0&&ce<=N.maxTextureSize&&Q>0&&Q<=N.maxTextureSize,"invalid texture shape"),(x.wrapS!==me||x.wrapT!==me)&&a(Ve(ce)&&Ve(Q),"incompatible wrap mode for texture, both width and height must be power of 2"),M.mipmask===1?ce!==1&&Q!==1&&a(x.minFilter!==dt&&x.minFilter!==Ue&&x.minFilter!==Gt&&x.minFilter!==st,"min filter requires mipmap"):(a(Ve(ce)&&Ve(Q),"texture must be a square power of 2 to support mipmapping"),a(M.mipmask===(ce<<1)-1,"missing or incomplete mipmap data")),M.type===vt&&(N.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===ke&&x.magFilter===ke,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var xe=M.images;for(ee=0;ee<16;++ee)if(xe[ee]){var we=ce>>ee,Se=Q>>ee;a(M.mipmask&1<<ee,"missing mipmap data");var _e=xe[ee];if(a(_e.width===we&&_e.height===Se,"invalid shape for mip images"),a(_e.format===M.format&&_e.internalformat===M.internalformat&&_e.type===M.type,"incompatible type for mip image"),!_e.compressed)if(_e.data){var Ne=Math.ceil(Et(_e.type,re)*we/_e.unpackAlignment)*_e.unpackAlignment;a(_e.data.byteLength===Ne*Se,"invalid data for image, buffer size is inconsistent with image format")}else _e.element||_e.copy}else x.genMipmaps||a((M.mipmask&1<<ee)===0,"extra mipmap data");M.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function lo(x,M,N,ee){var ce=x.width,Q=x.height,re=x.channels;a(ce>0&&ce<=ee.maxTextureSize&&Q>0&&Q<=ee.maxTextureSize,"invalid texture shape"),a(ce===Q,"cube map must be square"),a(M.wrapS===me&&M.wrapT===me,"wrap mode not supported by cube map");for(var xe=0;xe<N.length;++xe){var we=N[xe];a(we.width===ce&&we.height===Q,"inconsistent cube map face shape"),M.genMipmaps&&(a(!we.compressed,"can not generate mipmap for compressed textures"),a(we.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Se=we.images,_e=0;_e<16;++_e){var Ne=Se[_e];if(Ne){var $e=ce>>_e,ye=Q>>_e;a(we.mipmask&1<<_e,"missing mipmap data"),a(Ne.width===$e&&Ne.height===ye,"invalid shape for mip images"),a(Ne.format===x.format&&Ne.internalformat===x.internalformat&&Ne.type===x.type,"incompatible type for mip image"),Ne.compressed||(Ne.data?a(Ne.data.byteLength===$e*ye*Math.max(Et(Ne.type,re),Ne.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Ne.element||Ne.copy)}}}}var _=t(a,{optional:je,raise:r,commandRaise:ne,command:q,parameter:s,commandParameter:V,constructor:v,type:l,commandType:Le,isTypedArray:c,nni:p,oneOf:h,shaderError:Y,linkError:F,callSite:E,saveCommandRef:oe,saveDrawInfo:D,framebufferFormat:ze,guessCommand:b,texture2D:We,textureCube:lo}),Ao=0,fo=0,so=5,jo=6;function To(x,M){this.id=Ao++,this.type=x,this.data=M}function an(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function wo(x){if(x.length===0)return[];var M=x.charAt(0),N=x.charAt(x.length-1);if(x.length>1&&M===N&&(M==='"'||M==="'"))return['"'+an(x.substr(1,x.length-2))+'"'];var ee=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(ee)return wo(x.substr(0,ee.index)).concat(wo(ee[1])).concat(wo(x.substr(ee.index+ee[0].length)));var ce=x.split(".");if(ce.length===1)return['"'+an(x)+'"'];for(var Q=[],re=0;re<ce.length;++re)Q=Q.concat(wo(ce[re]));return Q}function ti(x){return"["+wo(x).join("][")+"]"}function bi(x,M){return new To(x,ti(M+""))}function wi(x){return typeof x=="function"&&!x._reglType||x instanceof To}function Z(x,M){if(typeof x=="function")return new To(fo,x);if(typeof x=="number"||typeof x=="boolean")return new To(so,x);if(Array.isArray(x))return new To(jo,x.map((N,ee)=>Z(N,M+"["+ee+"]")));if(x instanceof To)return x;_(!1,"invalid option type in uniform "+M)}var Fe={DynamicVariable:To,define:bi,isDynamic:wi,unbox:Z,accessor:ti},Qe={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},Re=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function it(){var x={"":0},M=[""];return{id:function(N){var ee=x[N];return ee||(ee=x[N]=M.length,M.push(N),ee)},str:function(N){return M[N]}}}function xt(x,M,N){var ee=document.createElement("canvas");t(ee.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(ee),x===document.body&&(ee.style.position="absolute",t(x.style,{margin:0,padding:0}));function ce(){var xe=window.innerWidth,we=window.innerHeight;if(x!==document.body){var Se=x.getBoundingClientRect();xe=Se.right-Se.left,we=Se.bottom-Se.top}ee.width=N*xe,ee.height=N*we,t(ee.style,{width:xe+"px",height:we+"px"})}var Q;x!==document.body&&typeof ResizeObserver=="function"?(Q=new ResizeObserver(function(){setTimeout(ce)}),Q.observe(x)):window.addEventListener("resize",ce,!1);function re(){Q?Q.disconnect():window.removeEventListener("resize",ce),x.removeChild(ee)}return ce(),{canvas:ee,onDestroy:re}}function At(x,M){function N(ee){try{return x.getContext(ee,M)}catch(ce){return null}}return N("webgl")||N("experimental-webgl")||N("webgl-experimental")}function ut(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function zt(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function mt(x){return typeof x=="string"?x.split():(_(Array.isArray(x),"invalid extension array"),x)}function wt(x){return typeof x=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function _t(x){var M=x||{},N,ee,ce,Q,re={},xe=[],we=[],Se=typeof window=="undefined"?1:window.devicePixelRatio,_e=!1,Ne=function(Ce){Ce&&_.raise(Ce)},$e=function(){};if(typeof M=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),N=document.querySelector(M),_(N,"invalid query string for element")):typeof M=="object"?ut(M)?N=M:zt(M)?(Q=M,ce=Q.canvas):(_.constructor(M),"gl"in M?Q=M.gl:"canvas"in M?ce=wt(M.canvas):"container"in M&&(ee=wt(M.container)),"attributes"in M&&(re=M.attributes,_.type(re,"object","invalid context attributes")),"extensions"in M&&(xe=mt(M.extensions)),"optionalExtensions"in M&&(we=mt(M.optionalExtensions)),"onDone"in M&&(_.type(M.onDone,"function","invalid or missing onDone callback"),Ne=M.onDone),"profile"in M&&(_e=!!M.profile),"pixelRatio"in M&&(Se=+M.pixelRatio,_(Se>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),N&&(N.nodeName.toLowerCase()==="canvas"?ce=N:ee=N),!Q){if(!ce){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var ye=xt(ee||document.body,Ne,Se);if(!ye)return null;ce=ye.canvas,$e=ye.onDestroy}re.premultipliedAlpha===void 0&&(re.premultipliedAlpha=!0),Q=At(ce,re)}return Q?{gl:Q,canvas:ce,container:ee,extensions:xe,optionalExtensions:we,pixelRatio:Se,profile:_e,onDone:Ne,onDestroy:$e}:($e(),Ne("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Lt(x,M){var N={};function ee(re){_.type(re,"string","extension name must be string");var xe=re.toLowerCase(),we;try{we=N[xe]=x.getExtension(xe)}catch(Se){}return!!we}for(var ce=0;ce<M.extensions.length;++ce){var Q=M.extensions[ce];if(!ee(Q))return M.onDestroy(),M.onDone('"'+Q+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return M.optionalExtensions.forEach(ee),{extensions:N,restore:function(){Object.keys(N).forEach(function(re){if(N[re]&&!ee(re))throw new Error("(regl): error restoring extension "+re)})}}}function Ut(x,M){for(var N=Array(x),ee=0;ee<x;++ee)N[ee]=M(ee);return N}var ct=5120,oo=5121,go=5122,$o=5123,Do=5124,aa=5125,ia=5126;function Qt(x){for(var M=16;M<=1<<28;M*=16)if(x<=M)return M;return 0}function Zt(x){var M,N;return M=(x>65535)<<4,x>>>=M,N=(x>255)<<3,x>>>=N,M|=N,N=(x>15)<<2,x>>>=N,M|=N,N=(x>3)<<1,x>>>=N,M|=N,M|x>>1}function hn(){var x=Ut(8,function(){return[]});function M(Q){var re=Qt(Q),xe=x[Zt(re)>>2];return xe.length>0?xe.pop():new ArrayBuffer(re)}function N(Q){x[Zt(Q.byteLength)>>2].push(Q)}function ee(Q,re){var xe=null;switch(Q){case ct:xe=new Int8Array(M(re),0,re);break;case oo:xe=new Uint8Array(M(re),0,re);break;case go:xe=new Int16Array(M(2*re),0,re);break;case $o:xe=new Uint16Array(M(2*re),0,re);break;case Do:xe=new Int32Array(M(4*re),0,re);break;case aa:xe=new Uint32Array(M(4*re),0,re);break;case ia:xe=new Float32Array(M(4*re),0,re);break;default:return null}return xe.length!==re?xe.subarray(0,re):xe}function ce(Q){N(Q.buffer)}return{alloc:M,free:N,allocType:ee,freeType:ce}}var po=hn();po.zero=hn();var Pt=3408,Co=3410,yn=3411,Po=3412,oi=3413,_i=3414,ni=3415,W=33901,fe=33902,Je=3379,ht=3386,no=34921,Io=36347,fr=36348,Aa=35661,On=35660,sa=34930,Tn=36349,xo=34076,hr=34024,un=7936,ur=7937,ca=7938,Ta=35724,Ho=34047,la=36063,bn=34852,Gr=3553,ro=34067,Wo=34069,fa=33984,La=6408,ha=5126,Mi=5121,ts=36160,wc=36053,_c=36064,Mc=16384,Dh=function(x,M){var N=1;M.ext_texture_filter_anisotropic&&(N=x.getParameter(Ho));var ee=1,ce=1;M.webgl_draw_buffers&&(ee=x.getParameter(bn),ce=x.getParameter(la));var Q=!!M.oes_texture_float;if(Q){var re=x.createTexture();x.bindTexture(Gr,re),x.texImage2D(Gr,0,La,1,1,0,La,ha,null);var xe=x.createFramebuffer();if(x.bindFramebuffer(ts,xe),x.framebufferTexture2D(ts,_c,Gr,re,0),x.bindTexture(Gr,null),x.checkFramebufferStatus(ts)!==wc)Q=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(Mc);var we=po.allocType(ha,4);x.readPixels(0,0,1,1,La,ha,we),x.getError()?Q=!1:(x.deleteFramebuffer(xe),x.deleteTexture(re),Q=we[0]===1),po.freeType(we)}}var Se=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),_e=!0;if(!Se){var Ne=x.createTexture(),$e=po.allocType(Mi,36);x.activeTexture(fa),x.bindTexture(ro,Ne),x.texImage2D(Wo,0,La,3,3,0,La,Mi,$e),po.freeType($e),x.bindTexture(ro,null),x.deleteTexture(Ne),_e=!x.getError()}return{colorBits:[x.getParameter(Co),x.getParameter(yn),x.getParameter(Po),x.getParameter(oi)],depthBits:x.getParameter(_i),stencilBits:x.getParameter(ni),subpixelBits:x.getParameter(Pt),extensions:Object.keys(M).filter(function(ye){return!!M[ye]}),maxAnisotropic:N,maxDrawbuffers:ee,maxColorAttachments:ce,pointSizeDims:x.getParameter(W),lineWidthDims:x.getParameter(fe),maxViewportDims:x.getParameter(ht),maxCombinedTextureUnits:x.getParameter(Aa),maxCubeMapSize:x.getParameter(xo),maxRenderbufferSize:x.getParameter(hr),maxTextureUnits:x.getParameter(sa),maxTextureSize:x.getParameter(Je),maxAttributes:x.getParameter(no),maxVertexUniforms:x.getParameter(Io),maxVertexTextureUnits:x.getParameter(On),maxVaryingVectors:x.getParameter(fr),maxFragmentUniforms:x.getParameter(Tn),glsl:x.getParameter(Ta),renderer:x.getParameter(ur),vendor:x.getParameter(un),version:x.getParameter(ca),readFloat:Q,npotTextureCube:_e}};function _r(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var Mr=function(x){return Object.keys(x).map(function(M){return x[M]})},tr={shape:Gb,flatten:Fb};function qh(x,M,N){for(var ee=0;ee<M;++ee)N[ee]=x[ee]}function s0(x,M,N,ee){for(var ce=0,Q=0;Q<M;++Q)for(var re=x[Q],xe=0;xe<N;++xe)ee[ce++]=re[xe]}function ep(x,M,N,ee,ce,Q){for(var re=Q,xe=0;xe<M;++xe)for(var we=x[xe],Se=0;Se<N;++Se)for(var _e=we[Se],Ne=0;Ne<ee;++Ne)ce[re++]=_e[Ne]}function tp(x,M,N,ee,ce){for(var Q=1,re=N+1;re<M.length;++re)Q*=M[re];var xe=M[N];if(M.length-N===4){var we=M[N+1],Se=M[N+2],_e=M[N+3];for(re=0;re<xe;++re)ep(x[re],we,Se,_e,ee,ce),ce+=Q}else for(re=0;re<xe;++re)tp(x[re],M,N+1,ee,ce),ce+=Q}function Fb(x,M,N,ee){var ce=1;if(M.length)for(var Q=0;Q<M.length;++Q)ce*=M[Q];else ce=0;var re=ee||po.allocType(N,ce);switch(M.length){case 0:break;case 1:qh(x,M[0],re);break;case 2:s0(x,M[0],M[1],re);break;case 3:ep(x,M[0],M[1],M[2],re,0);break;default:tp(x,M,0,re,0)}return re}function Gb(x){for(var M=[],N=x;N.length;N=N[0])M.push(N.length);return M}var Hh={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},$b=5120,Db=5122,qb=5124,Hb=5121,Bb=5123,Ub=5125,jb=5126,Wb=5126,c0={int8:$b,int16:Db,int32:qb,uint8:Hb,uint16:Bb,uint32:Ub,float:jb,float32:Wb},Vb=35048,Xb=35040,Gl={dynamic:Vb,stream:Xb,static:35044},Bh=tr.flatten,op=tr.shape,np=35044,Yb=35040,Uh=5121,jh=5126,ki=[];ki[5120]=1,ki[5122]=2,ki[5124]=4,ki[5121]=1,ki[5123]=2,ki[5125]=4,ki[5126]=4;function $l(x){return Hh[Object.prototype.toString.call(x)]|0}function rp(x,M){for(var N=0;N<M.length;++N)x[N]=M[N]}function ap(x,M,N,ee,ce,Q,re){for(var xe=0,we=0;we<N;++we)for(var Se=0;Se<ee;++Se)x[xe++]=M[ce*we+Q*Se+re]}function Kb(x,M,N,ee){var ce=0,Q={};function re(U){this.id=ce++,this.buffer=x.createBuffer(),this.type=U,this.usage=np,this.byteLength=0,this.dimension=1,this.dtype=Uh,this.persistentData=null,N.profile&&(this.stats={size:0})}re.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},re.prototype.destroy=function(){$e(this)};var xe=[];function we(U,ae){var Ee=xe.pop();return Ee||(Ee=new re(U)),Ee.bind(),Ne(Ee,ae,Yb,0,1,!1),Ee}function Se(U){xe.push(U)}function _e(U,ae,Ee){U.byteLength=ae.byteLength,x.bufferData(U.type,ae,Ee)}function Ne(U,ae,Ee,Be,de,Xe){var ge;if(U.usage=Ee,Array.isArray(ae)){if(U.dtype=Be||jh,ae.length>0){var Pe;if(Array.isArray(ae[0])){ge=op(ae);for(var pe=1,Ie=1;Ie<ge.length;++Ie)pe*=ge[Ie];U.dimension=pe,Pe=Bh(ae,ge,U.dtype),_e(U,Pe,Ee),Xe?U.persistentData=Pe:po.freeType(Pe)}else if(typeof ae[0]=="number"){U.dimension=de;var gt=po.allocType(U.dtype,ae.length);rp(gt,ae),_e(U,gt,Ee),Xe?U.persistentData=gt:po.freeType(gt)}else e(ae[0])?(U.dimension=ae[0].length,U.dtype=Be||$l(ae[0])||jh,Pe=Bh(ae,[ae.length,ae[0].length],U.dtype),_e(U,Pe,Ee),Xe?U.persistentData=Pe:po.freeType(Pe)):_.raise("invalid buffer data")}}else if(e(ae))U.dtype=Be||$l(ae),U.dimension=de,_e(U,ae,Ee),Xe&&(U.persistentData=new Uint8Array(new Uint8Array(ae.buffer)));else if(_r(ae)){ge=ae.shape;var Nt=ae.stride,De=ae.offset,Ae=0,he=0,St=0,Dt=0;ge.length===1?(Ae=ge[0],he=1,St=Nt[0],Dt=0):ge.length===2?(Ae=ge[0],he=ge[1],St=Nt[0],Dt=Nt[1]):_.raise("invalid shape"),U.dtype=Be||$l(ae.data)||jh,U.dimension=he;var tt=po.allocType(U.dtype,Ae*he);ap(tt,ae.data,Ae,he,St,Dt,De),_e(U,tt,Ee),Xe?U.persistentData=tt:po.freeType(tt)}else ae instanceof ArrayBuffer?(U.dtype=Uh,U.dimension=de,_e(U,ae,Ee),Xe&&(U.persistentData=new Uint8Array(new Uint8Array(ae)))):_.raise("invalid buffer data")}function $e(U){M.bufferCount--,ee(U);var ae=U.buffer;_(ae,"buffer must not be deleted already"),x.deleteBuffer(ae),U.buffer=null,delete Q[U.id]}function ye(U,ae,Ee,Be){M.bufferCount++;var de=new re(ae);Q[de.id]=de;function Xe(pe){var Ie=np,gt=null,Nt=0,De=0,Ae=1;return Array.isArray(pe)||e(pe)||_r(pe)||pe instanceof ArrayBuffer?gt=pe:typeof pe=="number"?Nt=pe|0:pe&&(_.type(pe,"object","buffer arguments must be an object, a number or an array"),"data"in pe&&(_(gt===null||Array.isArray(gt)||e(gt)||_r(gt),"invalid data for buffer"),gt=pe.data),"usage"in pe&&(_.parameter(pe.usage,Gl,"invalid buffer usage"),Ie=Gl[pe.usage]),"type"in pe&&(_.parameter(pe.type,c0,"invalid buffer type"),De=c0[pe.type]),"dimension"in pe&&(_.type(pe.dimension,"number","invalid dimension"),Ae=pe.dimension|0),"length"in pe&&(_.nni(Nt,"buffer length must be a nonnegative integer"),Nt=pe.length|0)),de.bind(),gt?Ne(de,gt,Ie,De,Ae,Be):(Nt&&x.bufferData(de.type,Nt,Ie),de.dtype=De||Uh,de.usage=Ie,de.dimension=Ae,de.byteLength=Nt),N.profile&&(de.stats.size=de.byteLength*ki[de.dtype]),Xe}function ge(pe,Ie){_(Ie+pe.byteLength<=de.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+pe.byteLength+" starting from offset "+Ie+" to a buffer of size "+de.byteLength),x.bufferSubData(de.type,Ie,pe)}function Pe(pe,Ie){var gt=(Ie||0)|0,Nt;if(de.bind(),e(pe)||pe instanceof ArrayBuffer)ge(pe,gt);else if(Array.isArray(pe)){if(pe.length>0)if(typeof pe[0]=="number"){var De=po.allocType(de.dtype,pe.length);rp(De,pe),ge(De,gt),po.freeType(De)}else if(Array.isArray(pe[0])||e(pe[0])){Nt=op(pe);var Ae=Bh(pe,Nt,de.dtype);ge(Ae,gt),po.freeType(Ae)}else _.raise("invalid buffer data")}else if(_r(pe)){Nt=pe.shape;var he=pe.stride,St=0,Dt=0,tt=0,Wt=0;Nt.length===1?(St=Nt[0],Dt=1,tt=he[0],Wt=0):Nt.length===2?(St=Nt[0],Dt=Nt[1],tt=he[0],Wt=he[1]):_.raise("invalid shape");var Ct=Array.isArray(pe.data)?de.dtype:$l(pe.data),Bt=po.allocType(Ct,St*Dt);ap(Bt,pe.data,St,Dt,tt,Wt,pe.offset),ge(Bt,gt),po.freeType(Bt)}else _.raise("invalid data for buffer subdata");return Xe}return Ee||Xe(U),Xe._reglType="buffer",Xe._buffer=de,Xe.subdata=Pe,N.profile&&(Xe.stats=de.stats),Xe.destroy=function(){$e(de)},Xe}function Ce(){Mr(Q).forEach(function(U){U.buffer=x.createBuffer(),x.bindBuffer(U.type,U.buffer),x.bufferData(U.type,U.persistentData||U.byteLength,U.usage)})}return N.profile&&(M.getTotalBufferSize=function(){var U=0;return Object.keys(Q).forEach(function(ae){U+=Q[ae].stats.size}),U}),{create:ye,createStream:we,destroyStream:Se,clear:function(){Mr(Q).forEach($e),xe.forEach($e)},getBuffer:function(U){return U&&U._buffer instanceof re?U._buffer:null},restore:Ce,_initBuffer:Ne}}var Qb=0,Zb=0,Jb=1,e5=1,t5=4,o5=4,os={points:Qb,point:Zb,lines:Jb,line:e5,triangles:t5,triangle:o5,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},n5=0,r5=1,kc=4,a5=5120,ns=5121,ip=5122,rs=5123,sp=5124,l0=5125,Wh=34963,i5=35040,s5=35044;function c5(x,M,N,ee){var ce={},Q=0,re={uint8:ns,uint16:rs};M.oes_element_index_uint&&(re.uint32=l0);function xe(Ce){this.id=Q++,ce[this.id]=this,this.buffer=Ce,this.primType=kc,this.vertCount=0,this.type=0}xe.prototype.bind=function(){this.buffer.bind()};var we=[];function Se(Ce){var U=we.pop();return U||(U=new xe(N.create(null,Wh,!0,!1)._buffer)),Ne(U,Ce,i5,-1,-1,0,0),U}function _e(Ce){we.push(Ce)}function Ne(Ce,U,ae,Ee,Be,de,Xe){Ce.buffer.bind();var ge;if(U){var Pe=Xe;!Xe&&(!e(U)||_r(U)&&!e(U.data))&&(Pe=M.oes_element_index_uint?l0:rs),N._initBuffer(Ce.buffer,U,ae,Pe,3)}else x.bufferData(Wh,de,ae),Ce.buffer.dtype=ge||ns,Ce.buffer.usage=ae,Ce.buffer.dimension=3,Ce.buffer.byteLength=de;if(ge=Xe,!Xe){switch(Ce.buffer.dtype){case ns:case a5:ge=ns;break;case rs:case ip:ge=rs;break;case l0:case sp:ge=l0;break;default:_.raise("unsupported type for element array")}Ce.buffer.dtype=ge}Ce.type=ge,_(ge!==l0||!!M.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var pe=Be;pe<0&&(pe=Ce.buffer.byteLength,ge===rs?pe>>=1:ge===l0&&(pe>>=2)),Ce.vertCount=pe;var Ie=Ee;if(Ee<0){Ie=kc;var gt=Ce.buffer.dimension;gt===1&&(Ie=n5),gt===2&&(Ie=r5),gt===3&&(Ie=kc)}Ce.primType=Ie}function $e(Ce){ee.elementsCount--,_(Ce.buffer!==null,"must not double destroy elements"),delete ce[Ce.id],Ce.buffer.destroy(),Ce.buffer=null}function ye(Ce,U){var ae=N.create(null,Wh,!0),Ee=new xe(ae._buffer);ee.elementsCount++;function Be(de){if(!de)ae(),Ee.primType=kc,Ee.vertCount=0,Ee.type=ns;else if(typeof de=="number")ae(de),Ee.primType=kc,Ee.vertCount=de|0,Ee.type=ns;else{var Xe=null,ge=s5,Pe=-1,pe=-1,Ie=0,gt=0;Array.isArray(de)||e(de)||_r(de)?Xe=de:(_.type(de,"object","invalid arguments for elements"),"data"in de&&(Xe=de.data,_(Array.isArray(Xe)||e(Xe)||_r(Xe),"invalid data for element buffer")),"usage"in de&&(_.parameter(de.usage,Gl,"invalid element buffer usage"),ge=Gl[de.usage]),"primitive"in de&&(_.parameter(de.primitive,os,"invalid element buffer primitive"),Pe=os[de.primitive]),"count"in de&&(_(typeof de.count=="number"&&de.count>=0,"invalid vertex count for elements"),pe=de.count|0),"type"in de&&(_.parameter(de.type,re,"invalid buffer type"),gt=re[de.type]),"length"in de?Ie=de.length|0:(Ie=pe,gt===rs||gt===ip?Ie*=2:(gt===l0||gt===sp)&&(Ie*=4))),Ne(Ee,Xe,ge,Pe,pe,Ie,gt)}return Be}return Be(Ce),Be._reglType="elements",Be._elements=Ee,Be.subdata=function(de,Xe){return ae.subdata(de,Xe),Be},Be.destroy=function(){$e(Ee)},Be}return{create:ye,createStream:Se,destroyStream:_e,getElements:function(Ce){return typeof Ce=="function"&&Ce._elements instanceof xe?Ce._elements:null},clear:function(){Mr(ce).forEach($e)}}}var cp=new Float32Array(1),l5=new Uint32Array(cp.buffer),f5=5123;function lp(x){for(var M=po.allocType(f5,x.length),N=0;N<x.length;++N)if(isNaN(x[N]))M[N]=65535;else if(x[N]===1/0)M[N]=31744;else if(x[N]===-1/0)M[N]=64512;else{cp[0]=x[N];var ee=l5[0],ce=ee>>>31<<15,Q=(ee<<1>>>24)-127,re=ee>>13&1023;if(Q<-24)M[N]=ce;else if(Q<-14){var xe=-14-Q;M[N]=ce+(re+1024>>xe)}else Q>15?M[N]=ce+31744:M[N]=ce+(Q+15<<10)+re}return M}function dn(x){return Array.isArray(x)||e(x)}var fp=function(x){return!(x&x-1)&&!!x},h5=34467,Ua=3553,Vh=34067,Dl=34069,f0=6408,Xh=6406,ql=6407,Ec=6409,Hl=6410,hp=32854,Yh=32855,up=36194,u5=32819,d5=32820,p5=33635,v5=34042,Kh=6402,Bl=34041,Qh=35904,Zh=35906,as=36193,Jh=33776,eu=33777,tu=33778,ou=33779,dp=35986,pp=35987,vp=34798,mp=35840,gp=35841,xp=35842,yp=35843,bp=36196,is=5121,nu=5123,ru=5125,Sc=5126,m5=10242,g5=10243,x5=10497,au=33071,y5=33648,b5=10240,w5=10241,iu=9728,_5=9729,su=9984,wp=9985,_p=9986,cu=9987,M5=33170,Ul=4352,k5=4353,E5=4354,S5=34046,A5=3317,T5=37440,L5=37441,z5=37443,Mp=37444,Ac=33984,N5=[su,_p,wp,cu],jl=[0,Ec,Hl,ql,f0],ua={};ua[Ec]=ua[Xh]=ua[Kh]=1,ua[Bl]=ua[Hl]=2,ua[ql]=ua[Qh]=3,ua[f0]=ua[Zh]=4;function ss(x){return"[object "+x+"]"}var kp=ss("HTMLCanvasElement"),Ep=ss("OffscreenCanvas"),Sp=ss("CanvasRenderingContext2D"),Ap=ss("ImageBitmap"),Tp=ss("HTMLImageElement"),Lp=ss("HTMLVideoElement"),R5=Object.keys(Hh).concat([kp,Ep,Sp,Ap,Tp,Lp]),cs=[];cs[is]=1,cs[Sc]=4,cs[as]=2,cs[nu]=2,cs[ru]=4;var or=[];or[hp]=2,or[Yh]=2,or[up]=2,or[Bl]=4,or[Jh]=.5,or[eu]=.5,or[tu]=1,or[ou]=1,or[dp]=.5,or[pp]=1,or[vp]=1,or[mp]=.5,or[gp]=.25,or[xp]=.5,or[yp]=.25,or[bp]=.5;function zp(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function Np(x){if(!Array.isArray(x))return!1;var M=x.length;return!(M===0||!dn(x[0]))}function h0(x){return Object.prototype.toString.call(x)}function Rp(x){return h0(x)===kp}function Cp(x){return h0(x)===Ep}function C5(x){return h0(x)===Sp}function P5(x){return h0(x)===Ap}function I5(x){return h0(x)===Tp}function O5(x){return h0(x)===Lp}function lu(x){if(!x)return!1;var M=h0(x);return R5.indexOf(M)>=0?!0:zp(x)||Np(x)||_r(x)}function Pp(x){return Hh[Object.prototype.toString.call(x)]|0}function F5(x,M){var N=M.length;switch(x.type){case is:case nu:case ru:case Sc:var ee=po.allocType(x.type,N);ee.set(M),x.data=ee;break;case as:x.data=lp(M);break;default:_.raise("unsupported texture type, must specify a typed array")}}function Ip(x,M){return po.allocType(x.type===as?Sc:x.type,M)}function Op(x,M){x.type===as?(x.data=lp(M),po.freeType(M)):x.data=M}function G5(x,M,N,ee,ce,Q){for(var re=x.width,xe=x.height,we=x.channels,Se=re*xe*we,_e=Ip(x,Se),Ne=0,$e=0;$e<xe;++$e)for(var ye=0;ye<re;++ye)for(var Ce=0;Ce<we;++Ce)_e[Ne++]=M[N*ye+ee*$e+ce*Ce+Q];Op(x,_e)}function Wl(x,M,N,ee,ce,Q){var re;if(typeof or[x]!="undefined"?re=or[x]:re=ua[x]*cs[M],Q&&(re*=6),ce){for(var xe=0,we=N;we>=1;)xe+=re*we*we,we/=2;return xe}else return re*N*ee}function $5(x,M,N,ee,ce,Q,re){var xe={"don't care":Ul,"dont care":Ul,nice:E5,fast:k5},we={repeat:x5,clamp:au,mirror:y5},Se={nearest:iu,linear:_5},_e=t({mipmap:cu,"nearest mipmap nearest":su,"linear mipmap nearest":wp,"nearest mipmap linear":_p,"linear mipmap linear":cu},Se),Ne={none:0,browser:Mp},$e={uint8:is,rgba4:u5,rgb565:p5,"rgb5 a1":d5},ye={alpha:Xh,luminance:Ec,"luminance alpha":Hl,rgb:ql,rgba:f0,rgba4:hp,"rgb5 a1":Yh,rgb565:up},Ce={};M.ext_srgb&&(ye.srgb=Qh,ye.srgba=Zh),M.oes_texture_float&&($e.float32=$e.float=Sc),M.oes_texture_half_float&&($e.float16=$e["half float"]=as),M.webgl_depth_texture&&(t(ye,{depth:Kh,"depth stencil":Bl}),t($e,{uint16:nu,uint32:ru,"depth stencil":v5})),M.webgl_compressed_texture_s3tc&&t(Ce,{"rgb s3tc dxt1":Jh,"rgba s3tc dxt1":eu,"rgba s3tc dxt3":tu,"rgba s3tc dxt5":ou}),M.webgl_compressed_texture_atc&&t(Ce,{"rgb atc":dp,"rgba atc explicit alpha":pp,"rgba atc interpolated alpha":vp}),M.webgl_compressed_texture_pvrtc&&t(Ce,{"rgb pvrtc 4bppv1":mp,"rgb pvrtc 2bppv1":gp,"rgba pvrtc 4bppv1":xp,"rgba pvrtc 2bppv1":yp}),M.webgl_compressed_texture_etc1&&(Ce["rgb etc1"]=bp);var U=Array.prototype.slice.call(x.getParameter(h5));Object.keys(Ce).forEach(function(z){var te=Ce[z];U.indexOf(te)>=0&&(ye[z]=te)});var ae=Object.keys(ye);N.textureFormats=ae;var Ee=[];Object.keys(ye).forEach(function(z){var te=ye[z];Ee[te]=z});var Be=[];Object.keys($e).forEach(function(z){var te=$e[z];Be[te]=z});var de=[];Object.keys(Se).forEach(function(z){var te=Se[z];de[te]=z});var Xe=[];Object.keys(_e).forEach(function(z){var te=_e[z];Xe[te]=z});var ge=[];Object.keys(we).forEach(function(z){var te=we[z];ge[te]=z});var Pe=ae.reduce(function(z,te){var K=ye[te];return K===Ec||K===Xh||K===Ec||K===Hl||K===Kh||K===Bl||M.ext_srgb&&(K===Qh||K===Zh)?z[K]=K:K===Yh||te.indexOf("rgba")>=0?z[K]=f0:z[K]=ql,z},{});function pe(){this.internalformat=f0,this.format=f0,this.type=is,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Mp,this.width=0,this.height=0,this.channels=0}function Ie(z,te){z.internalformat=te.internalformat,z.format=te.format,z.type=te.type,z.compressed=te.compressed,z.premultiplyAlpha=te.premultiplyAlpha,z.flipY=te.flipY,z.unpackAlignment=te.unpackAlignment,z.colorSpace=te.colorSpace,z.width=te.width,z.height=te.height,z.channels=te.channels}function gt(z,te){if(!(typeof te!="object"||!te)){if("premultiplyAlpha"in te&&(_.type(te.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),z.premultiplyAlpha=te.premultiplyAlpha),"flipY"in te&&(_.type(te.flipY,"boolean","invalid texture flip"),z.flipY=te.flipY),"alignment"in te&&(_.oneOf(te.alignment,[1,2,4,8],"invalid texture unpack alignment"),z.unpackAlignment=te.alignment),"colorSpace"in te&&(_.parameter(te.colorSpace,Ne,"invalid colorSpace"),z.colorSpace=Ne[te.colorSpace]),"type"in te){var K=te.type;_(M.oes_texture_float||!(K==="float"||K==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(M.oes_texture_half_float||!(K==="half float"||K==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(M.webgl_depth_texture||!(K==="uint16"||K==="uint32"||K==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(K,$e,"invalid texture type"),z.type=$e[K]}var Ze=z.width,Vt=z.height,A=z.channels,w=!1;"shape"in te?(_(Array.isArray(te.shape)&&te.shape.length>=2,"shape must be an array"),Ze=te.shape[0],Vt=te.shape[1],te.shape.length===3&&(A=te.shape[2],_(A>0&&A<=4,"invalid number of channels"),w=!0),_(Ze>=0&&Ze<=N.maxTextureSize,"invalid width"),_(Vt>=0&&Vt<=N.maxTextureSize,"invalid height")):("radius"in te&&(Ze=Vt=te.radius,_(Ze>=0&&Ze<=N.maxTextureSize,"invalid radius")),"width"in te&&(Ze=te.width,_(Ze>=0&&Ze<=N.maxTextureSize,"invalid width")),"height"in te&&(Vt=te.height,_(Vt>=0&&Vt<=N.maxTextureSize,"invalid height")),"channels"in te&&(A=te.channels,_(A>0&&A<=4,"invalid number of channels"),w=!0)),z.width=Ze|0,z.height=Vt|0,z.channels=A|0;var I=!1;if("format"in te){var B=te.format;_(M.webgl_depth_texture||!(B==="depth"||B==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(B,ye,"invalid texture format");var j=z.internalformat=ye[B];z.format=Pe[j],B in $e&&("type"in te||(z.type=$e[B])),B in Ce&&(z.compressed=!0),I=!0}!w&&I?z.channels=ua[z.format]:w&&!I?z.channels!==jl[z.format]&&(z.format=z.internalformat=jl[z.channels]):I&&w&&_(z.channels===ua[z.format],"number of channels inconsistent with specified format")}}function Nt(z){x.pixelStorei(T5,z.flipY),x.pixelStorei(L5,z.premultiplyAlpha),x.pixelStorei(z5,z.colorSpace),x.pixelStorei(A5,z.unpackAlignment)}function De(){pe.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Ae(z,te){var K=null;if(lu(te)?K=te:te&&(_.type(te,"object","invalid pixel data type"),gt(z,te),"x"in te&&(z.xOffset=te.x|0),"y"in te&&(z.yOffset=te.y|0),lu(te.data)&&(K=te.data)),_(!z.compressed||K instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),te.copy){_(!K,"can not specify copy and data field for the same texture");var Ze=ce.viewportWidth,Vt=ce.viewportHeight;z.width=z.width||Ze-z.xOffset,z.height=z.height||Vt-z.yOffset,z.needsCopy=!0,_(z.xOffset>=0&&z.xOffset<Ze&&z.yOffset>=0&&z.yOffset<Vt&&z.width>0&&z.width<=Ze&&z.height>0&&z.height<=Vt,"copy texture read out of bounds")}else if(!K)z.width=z.width||1,z.height=z.height||1,z.channels=z.channels||4;else if(e(K))z.channels=z.channels||4,z.data=K,!("type"in te)&&z.type===is&&(z.type=Pp(K));else if(zp(K))z.channels=z.channels||4,F5(z,K),z.alignment=1,z.needsFree=!0;else if(_r(K)){var A=K.data;!Array.isArray(A)&&z.type===is&&(z.type=Pp(A));var w=K.shape,I=K.stride,B,j,G,O,$,T;w.length===3?(G=w[2],T=I[2]):(_(w.length===2,"invalid ndarray pixel data, must be 2 or 3D"),G=1,T=1),B=w[0],j=w[1],O=I[0],$=I[1],z.alignment=1,z.width=B,z.height=j,z.channels=G,z.format=z.internalformat=jl[G],z.needsFree=!0,G5(z,A,O,$,T,K.offset)}else if(Rp(K)||Cp(K)||C5(K))Rp(K)||Cp(K)?z.element=K:z.element=K.canvas,z.width=z.element.width,z.height=z.element.height,z.channels=4;else if(P5(K))z.element=K,z.width=K.width,z.height=K.height,z.channels=4;else if(I5(K))z.element=K,z.width=K.naturalWidth,z.height=K.naturalHeight,z.channels=4;else if(O5(K))z.element=K,z.width=K.videoWidth,z.height=K.videoHeight,z.channels=4;else if(Np(K)){var P=z.width||K[0].length,S=z.height||K.length,H=z.channels;dn(K[0][0])?H=H||K[0][0].length:H=H||1;for(var X=tr.shape(K),se=1,le=0;le<X.length;++le)se*=X[le];var ie=Ip(z,se);tr.flatten(K,X,"",ie),Op(z,ie),z.alignment=1,z.width=P,z.height=S,z.channels=H,z.format=z.internalformat=jl[H],z.needsFree=!0}z.type===Sc?_(N.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):z.type===as&&_(N.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function he(z,te,K){var Ze=z.element,Vt=z.data,A=z.internalformat,w=z.format,I=z.type,B=z.width,j=z.height;Nt(z),Ze?x.texImage2D(te,K,w,w,I,Ze):z.compressed?x.compressedTexImage2D(te,K,A,B,j,0,Vt):z.needsCopy?(ee(),x.copyTexImage2D(te,K,w,z.xOffset,z.yOffset,B,j,0)):x.texImage2D(te,K,w,B,j,0,w,I,Vt||null)}function St(z,te,K,Ze,Vt){var A=z.element,w=z.data,I=z.internalformat,B=z.format,j=z.type,G=z.width,O=z.height;Nt(z),A?x.texSubImage2D(te,Vt,K,Ze,B,j,A):z.compressed?x.compressedTexSubImage2D(te,Vt,K,Ze,I,G,O,w):z.needsCopy?(ee(),x.copyTexSubImage2D(te,Vt,K,Ze,z.xOffset,z.yOffset,G,O)):x.texSubImage2D(te,Vt,K,Ze,G,O,B,j,w)}var Dt=[];function tt(){return Dt.pop()||new De}function Wt(z){z.needsFree&&po.freeType(z.data),De.call(z),Dt.push(z)}function Ct(){pe.call(this),this.genMipmaps=!1,this.mipmapHint=Ul,this.mipmask=0,this.images=Array(16)}function Bt(z,te,K){var Ze=z.images[0]=tt();z.mipmask=1,Ze.width=z.width=te,Ze.height=z.height=K,Ze.channels=z.channels=4}function vo(z,te){var K=null;if(lu(te))K=z.images[0]=tt(),Ie(K,z),Ae(K,te),z.mipmask=1;else if(gt(z,te),Array.isArray(te.mipmap))for(var Ze=te.mipmap,Vt=0;Vt<Ze.length;++Vt)K=z.images[Vt]=tt(),Ie(K,z),K.width>>=Vt,K.height>>=Vt,Ae(K,Ze[Vt]),z.mipmask|=1<<Vt;else K=z.images[0]=tt(),Ie(K,z),Ae(K,te),z.mipmask=1;Ie(z,z.images[0]),z.compressed&&(z.internalformat===Jh||z.internalformat===eu||z.internalformat===tu||z.internalformat===ou)&&_(z.width%4===0&&z.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function _n(z,te){for(var K=z.images,Ze=0;Ze<K.length;++Ze){if(!K[Ze])return;he(K[Ze],te,Ze)}}var Fn=[];function Jt(){var z=Fn.pop()||new Ct;pe.call(z),z.mipmask=0;for(var te=0;te<16;++te)z.images[te]=null;return z}function Ln(z){for(var te=z.images,K=0;K<te.length;++K)te[K]&&Wt(te[K]),te[K]=null;Fn.push(z)}function Vo(){this.minFilter=iu,this.magFilter=iu,this.wrapS=au,this.wrapT=au,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Ul}function Mn(z,te){if("min"in te){var K=te.min;_.parameter(K,_e),z.minFilter=_e[K],N5.indexOf(z.minFilter)>=0&&!("faces"in te)&&(z.genMipmaps=!0)}if("mag"in te){var Ze=te.mag;_.parameter(Ze,Se),z.magFilter=Se[Ze]}var Vt=z.wrapS,A=z.wrapT;if("wrap"in te){var w=te.wrap;typeof w=="string"?(_.parameter(w,we),Vt=A=we[w]):Array.isArray(w)&&(_.parameter(w[0],we),_.parameter(w[1],we),Vt=we[w[0]],A=we[w[1]])}else{if("wrapS"in te){var I=te.wrapS;_.parameter(I,we),Vt=we[I]}if("wrapT"in te){var B=te.wrapT;_.parameter(B,we),A=we[B]}}if(z.wrapS=Vt,z.wrapT=A,"anisotropic"in te){var j=te.anisotropic;_(typeof j=="number"&&j>=1&&j<=N.maxAnisotropic,"aniso samples must be between 1 and "),z.anisotropic=te.anisotropic}if("mipmap"in te){var G=!1;switch(typeof te.mipmap){case"string":_.parameter(te.mipmap,xe,"invalid mipmap hint"),z.mipmapHint=xe[te.mipmap],z.genMipmaps=!0,G=!0;break;case"boolean":G=z.genMipmaps=te.mipmap;break;case"object":_(Array.isArray(te.mipmap),"invalid mipmap type"),z.genMipmaps=!1,G=!0;break;default:_.raise("invalid mipmap type")}G&&!("min"in te)&&(z.minFilter=su)}}function zn(z,te){x.texParameteri(te,w5,z.minFilter),x.texParameteri(te,b5,z.magFilter),x.texParameteri(te,m5,z.wrapS),x.texParameteri(te,g5,z.wrapT),M.ext_texture_filter_anisotropic&&x.texParameteri(te,S5,z.anisotropic),z.genMipmaps&&(x.hint(M5,z.mipmapHint),x.generateMipmap(te))}var Nn=0,Wn={},nr=N.maxTextureUnits,pn=Array(nr).map(function(){return null});function qt(z){pe.call(this),this.mipmask=0,this.internalformat=f0,this.id=Nn++,this.refCount=1,this.target=z,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Vo,re.profile&&(this.stats={size:0})}function rr(z){x.activeTexture(Ac),x.bindTexture(z.target,z.texture)}function _o(){var z=pn[0];z?x.bindTexture(z.target,z.texture):x.bindTexture(Ua,null)}function yt(z){var te=z.texture;_(te,"must not double destroy texture");var K=z.unit,Ze=z.target;K>=0&&(x.activeTexture(Ac+K),x.bindTexture(Ze,null),pn[K]=null),x.deleteTexture(te),z.texture=null,z.params=null,z.pixels=null,z.refCount=0,delete Wn[z.id],Q.textureCount--}t(qt.prototype,{bind:function(){var z=this;z.bindCount+=1;var te=z.unit;if(te<0){for(var K=0;K<nr;++K){var Ze=pn[K];if(Ze){if(Ze.bindCount>0)continue;Ze.unit=-1}pn[K]=z,te=K;break}te>=nr&&_.raise("insufficient number of texture units"),re.profile&&Q.maxTextureUnits<te+1&&(Q.maxTextureUnits=te+1),z.unit=te,x.activeTexture(Ac+te),x.bindTexture(z.target,z.texture)}return te},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&yt(this)}});function Yt(z,te){var K=new qt(Ua);Wn[K.id]=K,Q.textureCount++;function Ze(w,I){var B=K.texInfo;Vo.call(B);var j=Jt();return typeof w=="number"?typeof I=="number"?Bt(j,w|0,I|0):Bt(j,w|0,w|0):w?(_.type(w,"object","invalid arguments to regl.texture"),Mn(B,w),vo(j,w)):Bt(j,1,1),B.genMipmaps&&(j.mipmask=(j.width<<1)-1),K.mipmask=j.mipmask,Ie(K,j),_.texture2D(B,j,N),K.internalformat=j.internalformat,Ze.width=j.width,Ze.height=j.height,rr(K),_n(j,Ua),zn(B,Ua),_o(),Ln(j),re.profile&&(K.stats.size=Wl(K.internalformat,K.type,j.width,j.height,B.genMipmaps,!1)),Ze.format=Ee[K.internalformat],Ze.type=Be[K.type],Ze.mag=de[B.magFilter],Ze.min=Xe[B.minFilter],Ze.wrapS=ge[B.wrapS],Ze.wrapT=ge[B.wrapT],Ze}function Vt(w,I,B,j){_(!!w,"must specify image data");var G=I|0,O=B|0,$=j|0,T=tt();return Ie(T,K),T.width=0,T.height=0,Ae(T,w),T.width=T.width||(K.width>>$)-G,T.height=T.height||(K.height>>$)-O,_(K.type===T.type&&K.format===T.format&&K.internalformat===T.internalformat,"incompatible format for texture.subimage"),_(G>=0&&O>=0&&G+T.width<=K.width&&O+T.height<=K.height,"texture.subimage write out of bounds"),_(K.mipmask&1<<$,"missing mipmap data"),_(T.data||T.element||T.needsCopy,"missing image data"),rr(K),St(T,Ua,G,O,$),_o(),Wt(T),Ze}function A(w,I){var B=w|0,j=I|0||B;if(B===K.width&&j===K.height)return Ze;Ze.width=K.width=B,Ze.height=K.height=j,rr(K);for(var G=0;K.mipmask>>G;++G){var O=B>>G,$=j>>G;if(!O||!$)break;x.texImage2D(Ua,G,K.format,O,$,0,K.format,K.type,null)}return _o(),re.profile&&(K.stats.size=Wl(K.internalformat,K.type,B,j,!1,!1)),Ze}return Ze(z,te),Ze.subimage=Vt,Ze.resize=A,Ze._reglType="texture2d",Ze._texture=K,re.profile&&(Ze.stats=K.stats),Ze.destroy=function(){K.decRef()},Ze}function co(z,te,K,Ze,Vt,A){var w=new qt(Vh);Wn[w.id]=w,Q.cubeCount++;var I=new Array(6);function B(O,$,T,P,S,H){var X,se=w.texInfo;for(Vo.call(se),X=0;X<6;++X)I[X]=Jt();if(typeof O=="number"||!O){var le=O|0||1;for(X=0;X<6;++X)Bt(I[X],le,le)}else if(typeof O=="object")if($)vo(I[0],O),vo(I[1],$),vo(I[2],T),vo(I[3],P),vo(I[4],S),vo(I[5],H);else if(Mn(se,O),gt(w,O),"faces"in O){var ie=O.faces;for(_(Array.isArray(ie)&&ie.length===6,"cube faces must be a length 6 array"),X=0;X<6;++X)_(typeof ie[X]=="object"&&!!ie[X],"invalid input for cube map face"),Ie(I[X],w),vo(I[X],ie[X])}else for(X=0;X<6;++X)vo(I[X],O);else _.raise("invalid arguments to cube map");for(Ie(w,I[0]),N.npotTextureCube||_(fp(w.width)&&fp(w.height),"your browser does not support non power or two texture dimensions"),se.genMipmaps?w.mipmask=(I[0].width<<1)-1:w.mipmask=I[0].mipmask,_.textureCube(w,se,I,N),w.internalformat=I[0].internalformat,B.width=I[0].width,B.height=I[0].height,rr(w),X=0;X<6;++X)_n(I[X],Dl+X);for(zn(se,Vh),_o(),re.profile&&(w.stats.size=Wl(w.internalformat,w.type,B.width,B.height,se.genMipmaps,!0)),B.format=Ee[w.internalformat],B.type=Be[w.type],B.mag=de[se.magFilter],B.min=Xe[se.minFilter],B.wrapS=ge[se.wrapS],B.wrapT=ge[se.wrapT],X=0;X<6;++X)Ln(I[X]);return B}function j(O,$,T,P,S){_(!!$,"must specify image data"),_(typeof O=="number"&&O===(O|0)&&O>=0&&O<6,"invalid face");var H=T|0,X=P|0,se=S|0,le=tt();return Ie(le,w),le.width=0,le.height=0,Ae(le,$),le.width=le.width||(w.width>>se)-H,le.height=le.height||(w.height>>se)-X,_(w.type===le.type&&w.format===le.format&&w.internalformat===le.internalformat,"incompatible format for texture.subimage"),_(H>=0&&X>=0&&H+le.width<=w.width&&X+le.height<=w.height,"texture.subimage write out of bounds"),_(w.mipmask&1<<se,"missing mipmap data"),_(le.data||le.element||le.needsCopy,"missing image data"),rr(w),St(le,Dl+O,H,X,se),_o(),Wt(le),B}function G(O){var $=O|0;if($!==w.width){B.width=w.width=$,B.height=w.height=$,rr(w);for(var T=0;T<6;++T)for(var P=0;w.mipmask>>P;++P)x.texImage2D(Dl+T,P,w.format,$>>P,$>>P,0,w.format,w.type,null);return _o(),re.profile&&(w.stats.size=Wl(w.internalformat,w.type,B.width,B.height,!1,!0)),B}}return B(z,te,K,Ze,Vt,A),B.subimage=j,B.resize=G,B._reglType="textureCube",B._texture=w,re.profile&&(B.stats=w.stats),B.destroy=function(){w.decRef()},B}function vn(){for(var z=0;z<nr;++z)x.activeTexture(Ac+z),x.bindTexture(Ua,null),pn[z]=null;Mr(Wn).forEach(yt),Q.cubeCount=0,Q.textureCount=0}re.profile&&(Q.getTotalTextureSize=function(){var z=0;return Object.keys(Wn).forEach(function(te){z+=Wn[te].stats.size}),z});function Wa(){for(var z=0;z<nr;++z){var te=pn[z];te&&(te.bindCount=0,te.unit=-1,pn[z]=null)}Mr(Wn).forEach(function(K){K.texture=x.createTexture(),x.bindTexture(K.target,K.texture);for(var Ze=0;Ze<32;++Ze)if(K.mipmask&1<<Ze)if(K.target===Ua)x.texImage2D(Ua,Ze,K.internalformat,K.width>>Ze,K.height>>Ze,0,K.internalformat,K.type,null);else for(var Vt=0;Vt<6;++Vt)x.texImage2D(Dl+Vt,Ze,K.internalformat,K.width>>Ze,K.height>>Ze,0,K.internalformat,K.type,null);zn(K.texInfo,K.target)})}function x0(){for(var z=0;z<nr;++z){var te=pn[z];te&&(te.bindCount=0,te.unit=-1,pn[z]=null),x.activeTexture(Ac+z),x.bindTexture(Ua,null),x.bindTexture(Vh,null)}}return{create2D:Yt,createCube:co,clear:vn,getTexture:function(z){return null},restore:Wa,refresh:x0}}var Ei=36161,Vl=32854,Fp=32855,Gp=36194,$p=33189,Dp=36168,qp=34041,Hp=35907,Bp=34836,Up=34842,jp=34843,za=[];za[Vl]=2,za[Fp]=2,za[Gp]=2,za[$p]=2,za[Dp]=1,za[qp]=4,za[Hp]=4,za[Bp]=16,za[Up]=8,za[jp]=6;function Wp(x,M,N){return za[x]*M*N}var D5=function(x,M,N,ee,ce){var Q={rgba4:Vl,rgb565:Gp,"rgb5 a1":Fp,depth:$p,stencil:Dp,"depth stencil":qp};M.ext_srgb&&(Q.srgba=Hp),M.ext_color_buffer_half_float&&(Q.rgba16f=Up,Q.rgb16f=jp),M.webgl_color_buffer_float&&(Q.rgba32f=Bp);var re=[];Object.keys(Q).forEach(function(ye){var Ce=Q[ye];re[Ce]=ye});var xe=0,we={};function Se(ye){this.id=xe++,this.refCount=1,this.renderbuffer=ye,this.format=Vl,this.width=0,this.height=0,ce.profile&&(this.stats={size:0})}Se.prototype.decRef=function(){--this.refCount<=0&&_e(this)};function _e(ye){var Ce=ye.renderbuffer;_(Ce,"must not double destroy renderbuffer"),x.bindRenderbuffer(Ei,null),x.deleteRenderbuffer(Ce),ye.renderbuffer=null,ye.refCount=0,delete we[ye.id],ee.renderbufferCount--}function Ne(ye,Ce){var U=new Se(x.createRenderbuffer());we[U.id]=U,ee.renderbufferCount++;function ae(Be,de){var Xe=0,ge=0,Pe=Vl;if(typeof Be=="object"&&Be){var pe=Be;if("shape"in pe){var Ie=pe.shape;_(Array.isArray(Ie)&&Ie.length>=2,"invalid renderbuffer shape"),Xe=Ie[0]|0,ge=Ie[1]|0}else"radius"in pe&&(Xe=ge=pe.radius|0),"width"in pe&&(Xe=pe.width|0),"height"in pe&&(ge=pe.height|0);"format"in pe&&(_.parameter(pe.format,Q,"invalid renderbuffer format"),Pe=Q[pe.format])}else typeof Be=="number"?(Xe=Be|0,typeof de=="number"?ge=de|0:ge=Xe):Be?_.raise("invalid arguments to renderbuffer constructor"):Xe=ge=1;if(_(Xe>0&&ge>0&&Xe<=N.maxRenderbufferSize&&ge<=N.maxRenderbufferSize,"invalid renderbuffer size"),!(Xe===U.width&&ge===U.height&&Pe===U.format))return ae.width=U.width=Xe,ae.height=U.height=ge,U.format=Pe,x.bindRenderbuffer(Ei,U.renderbuffer),x.renderbufferStorage(Ei,Pe,Xe,ge),_(x.getError()===0,"invalid render buffer format"),ce.profile&&(U.stats.size=Wp(U.format,U.width,U.height)),ae.format=re[U.format],ae}function Ee(Be,de){var Xe=Be|0,ge=de|0||Xe;return Xe===U.width&&ge===U.height||(_(Xe>0&&ge>0&&Xe<=N.maxRenderbufferSize&&ge<=N.maxRenderbufferSize,"invalid renderbuffer size"),ae.width=U.width=Xe,ae.height=U.height=ge,x.bindRenderbuffer(Ei,U.renderbuffer),x.renderbufferStorage(Ei,U.format,Xe,ge),_(x.getError()===0,"invalid render buffer format"),ce.profile&&(U.stats.size=Wp(U.format,U.width,U.height))),ae}return ae(ye,Ce),ae.resize=Ee,ae._reglType="renderbuffer",ae._renderbuffer=U,ce.profile&&(ae.stats=U.stats),ae.destroy=function(){U.decRef()},ae}ce.profile&&(ee.getTotalRenderbufferSize=function(){var ye=0;return Object.keys(we).forEach(function(Ce){ye+=we[Ce].stats.size}),ye});function $e(){Mr(we).forEach(function(ye){ye.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(Ei,ye.renderbuffer),x.renderbufferStorage(Ei,ye.format,ye.width,ye.height)}),x.bindRenderbuffer(Ei,null)}return{create:Ne,clear:function(){Mr(we).forEach(_e)},restore:$e}},ri=36160,fu=36161,u0=3553,Xl=34069,Vp=36064,Xp=36096,Yp=36128,Kp=33306,Qp=36053,q5=36054,H5=36055,B5=36057,U5=36061,j5=36193,W5=5121,V5=5126,Zp=6407,Jp=6408,X5=6402,Y5=[Zp,Jp],hu=[];hu[Jp]=4,hu[Zp]=3;var Yl=[];Yl[W5]=1,Yl[V5]=4,Yl[j5]=2;var K5=32854,Q5=32855,Z5=36194,J5=33189,ew=36168,ev=34041,tw=35907,ow=34836,nw=34842,rw=34843,aw=[K5,Q5,Z5,tw,nw,rw,ow],ls={};ls[Qp]="complete",ls[q5]="incomplete attachment",ls[B5]="incomplete dimensions",ls[H5]="incomplete, missing attachment",ls[U5]="unsupported";function iw(x,M,N,ee,ce,Q){var re={cur:null,next:null,dirty:!1,setFBO:null},xe=["rgba"],we=["rgba4","rgb565","rgb5 a1"];M.ext_srgb&&we.push("srgba"),M.ext_color_buffer_half_float&&we.push("rgba16f","rgb16f"),M.webgl_color_buffer_float&&we.push("rgba32f");var Se=["uint8"];M.oes_texture_half_float&&Se.push("half float","float16"),M.oes_texture_float&&Se.push("float","float32");function _e(De,Ae,he){this.target=De,this.texture=Ae,this.renderbuffer=he;var St=0,Dt=0;Ae?(St=Ae.width,Dt=Ae.height):he&&(St=he.width,Dt=he.height),this.width=St,this.height=Dt}function Ne(De){De&&(De.texture&&De.texture._texture.decRef(),De.renderbuffer&&De.renderbuffer._renderbuffer.decRef())}function $e(De,Ae,he){if(De)if(De.texture){var St=De.texture._texture,Dt=Math.max(1,St.width),tt=Math.max(1,St.height);_(Dt===Ae&&tt===he,"inconsistent width/height for supplied texture"),St.refCount+=1}else{var Wt=De.renderbuffer._renderbuffer;_(Wt.width===Ae&&Wt.height===he,"inconsistent width/height for renderbuffer"),Wt.refCount+=1}}function ye(De,Ae){Ae&&(Ae.texture?x.framebufferTexture2D(ri,De,Ae.target,Ae.texture._texture.texture,0):x.framebufferRenderbuffer(ri,De,fu,Ae.renderbuffer._renderbuffer.renderbuffer))}function Ce(De){var Ae=u0,he=null,St=null,Dt=De;typeof De=="object"&&(Dt=De.data,"target"in De&&(Ae=De.target|0)),_.type(Dt,"function","invalid attachment data");var tt=Dt._reglType;return tt==="texture2d"?(he=Dt,_(Ae===u0)):tt==="textureCube"?(he=Dt,_(Ae>=Xl&&Ae<Xl+6,"invalid cube map target")):tt==="renderbuffer"?(St=Dt,Ae=fu):_.raise("invalid regl object for attachment"),new _e(Ae,he,St)}function U(De,Ae,he,St,Dt){if(he){var tt=ee.create2D({width:De,height:Ae,format:St,type:Dt});return tt._texture.refCount=0,new _e(u0,tt,null)}else{var Wt=ce.create({width:De,height:Ae,format:St});return Wt._renderbuffer.refCount=0,new _e(fu,null,Wt)}}function ae(De){return De&&(De.texture||De.renderbuffer)}function Ee(De,Ae,he){De&&(De.texture?De.texture.resize(Ae,he):De.renderbuffer&&De.renderbuffer.resize(Ae,he),De.width=Ae,De.height=he)}var Be=0,de={};function Xe(){this.id=Be++,de[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ge(De){De.colorAttachments.forEach(Ne),Ne(De.depthAttachment),Ne(De.stencilAttachment),Ne(De.depthStencilAttachment)}function Pe(De){var Ae=De.framebuffer;_(Ae,"must not double destroy framebuffer"),x.deleteFramebuffer(Ae),De.framebuffer=null,Q.framebufferCount--,delete de[De.id]}function pe(De){var Ae;x.bindFramebuffer(ri,De.framebuffer);var he=De.colorAttachments;for(Ae=0;Ae<he.length;++Ae)ye(Vp+Ae,he[Ae]);for(Ae=he.length;Ae<N.maxColorAttachments;++Ae)x.framebufferTexture2D(ri,Vp+Ae,u0,null,0);x.framebufferTexture2D(ri,Kp,u0,null,0),x.framebufferTexture2D(ri,Xp,u0,null,0),x.framebufferTexture2D(ri,Yp,u0,null,0),ye(Xp,De.depthAttachment),ye(Yp,De.stencilAttachment),ye(Kp,De.depthStencilAttachment);var St=x.checkFramebufferStatus(ri);!x.isContextLost()&&St!==Qp&&_.raise("framebuffer configuration not supported, status = "+ls[St]),x.bindFramebuffer(ri,re.next?re.next.framebuffer:null),re.cur=re.next,x.getError()}function Ie(De,Ae){var he=new Xe;Q.framebufferCount++;function St(tt,Wt){var Ct;_(re.next!==he,"can not update framebuffer which is currently in use");var Bt=0,vo=0,_n=!0,Fn=!0,Jt=null,Ln=!0,Vo="rgba",Mn="uint8",zn=1,Nn=null,Wn=null,nr=null,pn=!1;if(typeof tt=="number")Bt=tt|0,vo=Wt|0||Bt;else if(!tt)Bt=vo=1;else{_.type(tt,"object","invalid arguments for framebuffer");var qt=tt;if("shape"in qt){var rr=qt.shape;_(Array.isArray(rr)&&rr.length>=2,"invalid shape for framebuffer"),Bt=rr[0],vo=rr[1]}else"radius"in qt&&(Bt=vo=qt.radius),"width"in qt&&(Bt=qt.width),"height"in qt&&(vo=qt.height);("color"in qt||"colors"in qt)&&(Jt=qt.color||qt.colors,Array.isArray(Jt)&&_(Jt.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),Jt||("colorCount"in qt&&(zn=qt.colorCount|0,_(zn>0,"invalid color buffer count")),"colorTexture"in qt&&(Ln=!!qt.colorTexture,Vo="rgba4"),"colorType"in qt&&(Mn=qt.colorType,Ln?(_(M.oes_texture_float||!(Mn==="float"||Mn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(M.oes_texture_half_float||!(Mn==="half float"||Mn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Mn==="half float"||Mn==="float16"?(_(M.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Vo="rgba16f"):(Mn==="float"||Mn==="float32")&&(_(M.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Vo="rgba32f"),_.oneOf(Mn,Se,"invalid color type")),"colorFormat"in qt&&(Vo=qt.colorFormat,xe.indexOf(Vo)>=0?Ln=!0:we.indexOf(Vo)>=0?Ln=!1:Ln?_.oneOf(qt.colorFormat,xe,"invalid color format for texture"):_.oneOf(qt.colorFormat,we,"invalid color format for renderbuffer"))),("depthTexture"in qt||"depthStencilTexture"in qt)&&(pn=!!(qt.depthTexture||qt.depthStencilTexture),_(!pn||M.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in qt&&(typeof qt.depth=="boolean"?_n=qt.depth:(Nn=qt.depth,Fn=!1)),"stencil"in qt&&(typeof qt.stencil=="boolean"?Fn=qt.stencil:(Wn=qt.stencil,_n=!1)),"depthStencil"in qt&&(typeof qt.depthStencil=="boolean"?_n=Fn=qt.depthStencil:(nr=qt.depthStencil,_n=!1,Fn=!1))}var _o=null,yt=null,Yt=null,co=null;if(Array.isArray(Jt))_o=Jt.map(Ce);else if(Jt)_o=[Ce(Jt)];else for(_o=new Array(zn),Ct=0;Ct<zn;++Ct)_o[Ct]=U(Bt,vo,Ln,Vo,Mn);_(M.webgl_draw_buffers||_o.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(_o.length<=N.maxColorAttachments,"too many color attachments, not supported"),Bt=Bt||_o[0].width,vo=vo||_o[0].height,Nn?yt=Ce(Nn):_n&&!Fn&&(yt=U(Bt,vo,pn,"depth","uint32")),Wn?Yt=Ce(Wn):Fn&&!_n&&(Yt=U(Bt,vo,!1,"stencil","uint8")),nr?co=Ce(nr):!Nn&&!Wn&&Fn&&_n&&(co=U(Bt,vo,pn,"depth stencil","depth stencil")),_(!!Nn+!!Wn+!!nr<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var vn=null;for(Ct=0;Ct<_o.length;++Ct)if($e(_o[Ct],Bt,vo),_(!_o[Ct]||_o[Ct].texture&&Y5.indexOf(_o[Ct].texture._texture.format)>=0||_o[Ct].renderbuffer&&aw.indexOf(_o[Ct].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Ct+" is invalid"),_o[Ct]&&_o[Ct].texture){var Wa=hu[_o[Ct].texture._texture.format]*Yl[_o[Ct].texture._texture.type];vn===null?vn=Wa:_(vn===Wa,"all color attachments much have the same number of bits per pixel.")}return $e(yt,Bt,vo),_(!yt||yt.texture&&yt.texture._texture.format===X5||yt.renderbuffer&&yt.renderbuffer._renderbuffer.format===J5,"invalid depth attachment for framebuffer object"),$e(Yt,Bt,vo),_(!Yt||Yt.renderbuffer&&Yt.renderbuffer._renderbuffer.format===ew,"invalid stencil attachment for framebuffer object"),$e(co,Bt,vo),_(!co||co.texture&&co.texture._texture.format===ev||co.renderbuffer&&co.renderbuffer._renderbuffer.format===ev,"invalid depth-stencil attachment for framebuffer object"),ge(he),he.width=Bt,he.height=vo,he.colorAttachments=_o,he.depthAttachment=yt,he.stencilAttachment=Yt,he.depthStencilAttachment=co,St.color=_o.map(ae),St.depth=ae(yt),St.stencil=ae(Yt),St.depthStencil=ae(co),St.width=he.width,St.height=he.height,pe(he),St}function Dt(tt,Wt){_(re.next!==he,"can not resize a framebuffer which is currently in use");var Ct=Math.max(tt|0,1),Bt=Math.max(Wt|0||Ct,1);if(Ct===he.width&&Bt===he.height)return St;for(var vo=he.colorAttachments,_n=0;_n<vo.length;++_n)Ee(vo[_n],Ct,Bt);return Ee(he.depthAttachment,Ct,Bt),Ee(he.stencilAttachment,Ct,Bt),Ee(he.depthStencilAttachment,Ct,Bt),he.width=St.width=Ct,he.height=St.height=Bt,pe(he),St}return St(De,Ae),t(St,{resize:Dt,_reglType:"framebuffer",_framebuffer:he,destroy:function(){Pe(he),ge(he)},use:function(tt){re.setFBO({framebuffer:St},tt)}})}function gt(De){var Ae=Array(6);function he(Dt){var tt;_(Ae.indexOf(re.next)<0,"can not update framebuffer which is currently in use");var Wt={color:null},Ct=0,Bt=null,vo="rgba",_n="uint8",Fn=1;if(typeof Dt=="number")Ct=Dt|0;else if(!Dt)Ct=1;else{_.type(Dt,"object","invalid arguments for framebuffer");var Jt=Dt;if("shape"in Jt){var Ln=Jt.shape;_(Array.isArray(Ln)&&Ln.length>=2,"invalid shape for framebuffer"),_(Ln[0]===Ln[1],"cube framebuffer must be square"),Ct=Ln[0]}else"radius"in Jt&&(Ct=Jt.radius|0),"width"in Jt?(Ct=Jt.width|0,"height"in Jt&&_(Jt.height===Ct,"must be square")):"height"in Jt&&(Ct=Jt.height|0);("color"in Jt||"colors"in Jt)&&(Bt=Jt.color||Jt.colors,Array.isArray(Bt)&&_(Bt.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),Bt||("colorCount"in Jt&&(Fn=Jt.colorCount|0,_(Fn>0,"invalid color buffer count")),"colorType"in Jt&&(_.oneOf(Jt.colorType,Se,"invalid color type"),_n=Jt.colorType),"colorFormat"in Jt&&(vo=Jt.colorFormat,_.oneOf(Jt.colorFormat,xe,"invalid color format for texture"))),"depth"in Jt&&(Wt.depth=Jt.depth),"stencil"in Jt&&(Wt.stencil=Jt.stencil),"depthStencil"in Jt&&(Wt.depthStencil=Jt.depthStencil)}var Vo;if(Bt)if(Array.isArray(Bt))for(Vo=[],tt=0;tt<Bt.length;++tt)Vo[tt]=Bt[tt];else Vo=[Bt];else{Vo=Array(Fn);var Mn={radius:Ct,format:vo,type:_n};for(tt=0;tt<Fn;++tt)Vo[tt]=ee.createCube(Mn)}for(Wt.color=Array(Vo.length),tt=0;tt<Vo.length;++tt){var zn=Vo[tt];_(typeof zn=="function"&&zn._reglType==="textureCube","invalid cube map"),Ct=Ct||zn.width,_(zn.width===Ct&&zn.height===Ct,"invalid cube map shape"),Wt.color[tt]={target:Xl,data:Vo[tt]}}for(tt=0;tt<6;++tt){for(var Nn=0;Nn<Vo.length;++Nn)Wt.color[Nn].target=Xl+tt;tt>0&&(Wt.depth=Ae[0].depth,Wt.stencil=Ae[0].stencil,Wt.depthStencil=Ae[0].depthStencil),Ae[tt]?Ae[tt](Wt):Ae[tt]=Ie(Wt)}return t(he,{width:Ct,height:Ct,color:Vo})}function St(Dt){var tt,Wt=Dt|0;if(_(Wt>0&&Wt<=N.maxCubeMapSize,"invalid radius for cube fbo"),Wt===he.width)return he;var Ct=he.color;for(tt=0;tt<Ct.length;++tt)Ct[tt].resize(Wt);for(tt=0;tt<6;++tt)Ae[tt].resize(Wt);return he.width=he.height=Wt,he}return he(De),t(he,{faces:Ae,resize:St,_reglType:"framebufferCube",destroy:function(){Ae.forEach(function(Dt){Dt.destroy()})}})}function Nt(){re.cur=null,re.next=null,re.dirty=!0,Mr(de).forEach(function(De){De.framebuffer=x.createFramebuffer(),pe(De)})}return t(re,{getFramebuffer:function(De){if(typeof De=="function"&&De._reglType==="framebuffer"){var Ae=De._framebuffer;if(Ae instanceof Xe)return Ae}return null},create:Ie,createCube:gt,clear:function(){Mr(de).forEach(Pe)},restore:Nt})}var sw=5126,tv=34962;function uu(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=sw,this.offset=0,this.stride=0,this.divisor=0}function cw(x,M,N,ee,ce){for(var Q=N.maxAttributes,re=new Array(Q),xe=0;xe<Q;++xe)re[xe]=new uu;var we=0,Se={},_e={Record:uu,scope:{},state:re,currentVAO:null,targetVAO:null,restore:$e()?de:function(){},createVAO:Xe,getVAO:Ce,destroyBuffer:Ne,setVAO:$e()?U:ae,clear:$e()?Ee:function(){}};function Ne(ge){for(var Pe=0;Pe<re.length;++Pe){var pe=re[Pe];pe.buffer===ge&&(x.disableVertexAttribArray(Pe),pe.buffer=null)}}function $e(){return M.oes_vertex_array_object}function ye(){return M.angle_instanced_arrays}function Ce(ge){return typeof ge=="function"&&ge._vao?ge._vao:null}function U(ge){if(ge!==_e.currentVAO){var Pe=$e();ge?Pe.bindVertexArrayOES(ge.vao):Pe.bindVertexArrayOES(null),_e.currentVAO=ge}}function ae(ge){if(ge!==_e.currentVAO){if(ge)ge.bindAttrs();else for(var Pe=ye(),pe=0;pe<re.length;++pe){var Ie=re[pe];Ie.buffer?(x.enableVertexAttribArray(pe),x.vertexAttribPointer(pe,Ie.size,Ie.type,Ie.normalized,Ie.stride,Ie.offfset),Pe&&Ie.divisor&&Pe.vertexAttribDivisorANGLE(pe,Ie.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,Ie.x,Ie.y,Ie.z,Ie.w))}_e.currentVAO=ge}}function Ee(){Mr(Se).forEach(function(ge){ge.destroy()})}function Be(){this.id=++we,this.attributes=[];var ge=$e();ge?this.vao=ge.createVertexArrayOES():this.vao=null,Se[this.id]=this,this.buffers=[]}Be.prototype.bindAttrs=function(){for(var ge=ye(),Pe=this.attributes,pe=0;pe<Pe.length;++pe){var Ie=Pe[pe];Ie.buffer?(x.enableVertexAttribArray(pe),x.bindBuffer(tv,Ie.buffer.buffer),x.vertexAttribPointer(pe,Ie.size,Ie.type,Ie.normalized,Ie.stride,Ie.offset),ge&&Ie.divisor&&ge.vertexAttribDivisorANGLE(pe,Ie.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,Ie.x,Ie.y,Ie.z,Ie.w))}for(var gt=Pe.length;gt<Q;++gt)x.disableVertexAttribArray(gt)},Be.prototype.refresh=function(){var ge=$e();ge&&(ge.bindVertexArrayOES(this.vao),this.bindAttrs(),_e.currentVAO=this)},Be.prototype.destroy=function(){if(this.vao){var ge=$e();this===_e.currentVAO&&(_e.currentVAO=null,ge.bindVertexArrayOES(null)),ge.deleteVertexArrayOES(this.vao),this.vao=null}Se[this.id]&&(delete Se[this.id],ee.vaoCount-=1)};function de(){var ge=$e();ge&&Mr(Se).forEach(function(Pe){Pe.refresh()})}function Xe(ge){var Pe=new Be;ee.vaoCount+=1;function pe(Ie){_(Array.isArray(Ie),"arguments to vertex array constructor must be an array"),_(Ie.length<Q,"too many attributes"),_(Ie.length>0,"must specify at least one attribute");var gt={},Nt=Pe.attributes;Nt.length=Ie.length;for(var De=0;De<Ie.length;++De){var Ae=Ie[De],he=Nt[De]=new uu,St=Ae.data||Ae;if(Array.isArray(St)||e(St)||_r(St)){var Dt;Pe.buffers[De]&&(Dt=Pe.buffers[De],e(St)&&Dt._buffer.byteLength>=St.byteLength?Dt.subdata(St):(Dt.destroy(),Pe.buffers[De]=null)),Pe.buffers[De]||(Dt=Pe.buffers[De]=ce.create(Ae,tv,!1,!0)),he.buffer=ce.getBuffer(Dt),he.size=he.buffer.dimension|0,he.normalized=!1,he.type=he.buffer.dtype,he.offset=0,he.stride=0,he.divisor=0,he.state=1,gt[De]=1}else ce.getBuffer(Ae)?(he.buffer=ce.getBuffer(Ae),he.size=he.buffer.dimension|0,he.normalized=!1,he.type=he.buffer.dtype,he.offset=0,he.stride=0,he.divisor=0,he.state=1):ce.getBuffer(Ae.buffer)?(he.buffer=ce.getBuffer(Ae.buffer),he.size=(+Ae.size||he.buffer.dimension)|0,he.normalized=!!Ae.normalized||!1,"type"in Ae?(_.parameter(Ae.type,c0,"invalid buffer type"),he.type=c0[Ae.type]):he.type=he.buffer.dtype,he.offset=(Ae.offset||0)|0,he.stride=(Ae.stride||0)|0,he.divisor=(Ae.divisor||0)|0,he.state=1,_(he.size>=1&&he.size<=4,"size must be between 1 and 4"),_(he.offset>=0,"invalid offset"),_(he.stride>=0&&he.stride<=255,"stride must be between 0 and 255"),_(he.divisor>=0,"divisor must be positive"),_(!he.divisor||!!M.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Ae?(_(De>0,"first attribute must not be a constant"),he.x=+Ae.x||0,he.y=+Ae.y||0,he.z=+Ae.z||0,he.w=+Ae.w||0,he.state=2):_(!1,"invalid attribute spec for location "+De)}for(var tt=0;tt<Pe.buffers.length;++tt)!gt[tt]&&Pe.buffers[tt]&&(Pe.buffers[tt].destroy(),Pe.buffers[tt]=null);return Pe.refresh(),pe}return pe.destroy=function(){for(var Ie=0;Ie<Pe.buffers.length;++Ie)Pe.buffers[Ie]&&Pe.buffers[Ie].destroy();Pe.buffers.length=0,Pe.destroy()},pe._vao=Pe,pe._reglType="vao",pe(ge)}return _e}var ov=35632,lw=35633,fw=35718,hw=35721;function uw(x,M,N,ee){var ce={},Q={};function re(U,ae,Ee,Be){this.name=U,this.id=ae,this.location=Ee,this.info=Be}function xe(U,ae){for(var Ee=0;Ee<U.length;++Ee)if(U[Ee].id===ae.id){U[Ee].location=ae.location;return}U.push(ae)}function we(U,ae,Ee){var Be=U===ov?ce:Q,de=Be[ae];if(!de){var Xe=M.str(ae);de=x.createShader(U),x.shaderSource(de,Xe),x.compileShader(de),_.shaderError(x,de,Xe,U,Ee),Be[ae]=de}return de}var Se={},_e=[],Ne=0;function $e(U,ae){this.id=Ne++,this.fragId=U,this.vertId=ae,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,ee.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function ye(U,ae,Ee){var Be,de,Xe=we(ov,U.fragId),ge=we(lw,U.vertId),Pe=U.program=x.createProgram();if(x.attachShader(Pe,Xe),x.attachShader(Pe,ge),Ee)for(Be=0;Be<Ee.length;++Be){var pe=Ee[Be];x.bindAttribLocation(Pe,pe[0],pe[1])}x.linkProgram(Pe),_.linkError(x,Pe,M.str(U.fragId),M.str(U.vertId),ae);var Ie=x.getProgramParameter(Pe,fw);ee.profile&&(U.stats.uniformsCount=Ie);var gt=U.uniforms;for(Be=0;Be<Ie;++Be)if(de=x.getActiveUniform(Pe,Be),de)if(de.size>1)for(var Nt=0;Nt<de.size;++Nt){var De=de.name.replace("[0]","["+Nt+"]");xe(gt,new re(De,M.id(De),x.getUniformLocation(Pe,De),de))}else xe(gt,new re(de.name,M.id(de.name),x.getUniformLocation(Pe,de.name),de));var Ae=x.getProgramParameter(Pe,hw);ee.profile&&(U.stats.attributesCount=Ae);var he=U.attributes;for(Be=0;Be<Ae;++Be)de=x.getActiveAttrib(Pe,Be),de&&xe(he,new re(de.name,M.id(de.name),x.getAttribLocation(Pe,de.name),de))}ee.profile&&(N.getMaxUniformsCount=function(){var U=0;return _e.forEach(function(ae){ae.stats.uniformsCount>U&&(U=ae.stats.uniformsCount)}),U},N.getMaxAttributesCount=function(){var U=0;return _e.forEach(function(ae){ae.stats.attributesCount>U&&(U=ae.stats.attributesCount)}),U});function Ce(){ce={},Q={};for(var U=0;U<_e.length;++U)ye(_e[U],null,_e[U].attributes.map(function(ae){return[ae.location,ae.name]}))}return{clear:function(){var U=x.deleteShader.bind(x);Mr(ce).forEach(U),ce={},Mr(Q).forEach(U),Q={},_e.forEach(function(ae){x.deleteProgram(ae.program)}),_e.length=0,Se={},N.shaderCount=0},program:function(U,ae,Ee,Be){_.command(U>=0,"missing vertex shader",Ee),_.command(ae>=0,"missing fragment shader",Ee);var de=Se[ae];de||(de=Se[ae]={});var Xe=de[U];if(Xe&&(Xe.refCount++,!Be))return Xe;var ge=new $e(ae,U);return N.shaderCount++,ye(ge,Ee,Be),Xe||(de[U]=ge),_e.push(ge),t(ge,{destroy:function(){if(ge.refCount--,ge.refCount<=0){x.deleteProgram(ge.program);var Pe=_e.indexOf(ge);_e.splice(Pe,1),N.shaderCount--}de[ge.vertId].refCount<=0&&(x.deleteShader(Q[ge.vertId]),delete Q[ge.vertId],delete Se[ge.fragId][ge.vertId]),Object.keys(Se[ge.fragId]).length||(x.deleteShader(ce[ge.fragId]),delete ce[ge.fragId],delete Se[ge.fragId])}})},restore:Ce,shader:we,frag:-1,vert:-1}}var dw=6408,Tc=5121,pw=3333,Kl=5126;function vw(x,M,N,ee,ce,Q,re){function xe(_e){var Ne;M.next===null?(_(ce.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Ne=Tc):(_(M.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Ne=M.next.colorAttachments[0].texture._texture.type,Q.oes_texture_float?(_(Ne===Tc||Ne===Kl,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Ne===Kl&&_(re.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(Ne===Tc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var $e=0,ye=0,Ce=ee.framebufferWidth,U=ee.framebufferHeight,ae=null;e(_e)?ae=_e:_e&&(_.type(_e,"object","invalid arguments to regl.read()"),$e=_e.x|0,ye=_e.y|0,_($e>=0&&$e<ee.framebufferWidth,"invalid x offset for regl.read"),_(ye>=0&&ye<ee.framebufferHeight,"invalid y offset for regl.read"),Ce=(_e.width||ee.framebufferWidth-$e)|0,U=(_e.height||ee.framebufferHeight-ye)|0,ae=_e.data||null),ae&&(Ne===Tc?_(ae instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Ne===Kl&&_(ae instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(Ce>0&&Ce+$e<=ee.framebufferWidth,"invalid width for read pixels"),_(U>0&&U+ye<=ee.framebufferHeight,"invalid height for read pixels"),N();var Ee=Ce*U*4;return ae||(Ne===Tc?ae=new Uint8Array(Ee):Ne===Kl&&(ae=ae||new Float32Array(Ee))),_.isTypedArray(ae,"data buffer for regl.read() must be a typedarray"),_(ae.byteLength>=Ee,"data buffer for regl.read() too small"),x.pixelStorei(pw,4),x.readPixels($e,ye,Ce,U,dw,Ne,ae),ae}function we(_e){var Ne;return M.setFBO({framebuffer:_e.framebuffer},function(){Ne=xe(_e)}),Ne}function Se(_e){return!_e||!("framebuffer"in _e)?xe(_e):we(_e)}return Se}function fs(x){return Array.prototype.slice.call(x)}function hs(x){return fs(x).join("")}function mw(){var x=0,M=[],N=[];function ee(Ne){for(var $e=0;$e<N.length;++$e)if(N[$e]===Ne)return M[$e];var ye="g"+x++;return M.push(ye),N.push(Ne),ye}function ce(){var Ne=[];function $e(){Ne.push.apply(Ne,fs(arguments))}var ye=[];function Ce(){var U="v"+x++;return ye.push(U),arguments.length>0&&(Ne.push(U,"="),Ne.push.apply(Ne,fs(arguments)),Ne.push(";")),U}return t($e,{def:Ce,toString:function(){return hs([ye.length>0?"var "+ye.join(",")+";":"",hs(Ne)])}})}function Q(){var Ne=ce(),$e=ce(),ye=Ne.toString,Ce=$e.toString;function U(ae,Ee){$e(ae,Ee,"=",Ne.def(ae,Ee),";")}return t(function(){Ne.apply(Ne,fs(arguments))},{def:Ne.def,entry:Ne,exit:$e,save:U,set:function(ae,Ee,Be){U(ae,Ee),Ne(ae,Ee,"=",Be,";")},toString:function(){return ye()+Ce()}})}function re(){var Ne=hs(arguments),$e=Q(),ye=Q(),Ce=$e.toString,U=ye.toString;return t($e,{then:function(){return $e.apply($e,fs(arguments)),this},else:function(){return ye.apply(ye,fs(arguments)),this},toString:function(){var ae=U();return ae&&(ae="else{"+ae+"}"),hs(["if(",Ne,"){",Ce(),"}",ae])}})}var xe=ce(),we={};function Se(Ne,$e){var ye=[];function Ce(){var de="a"+ye.length;return ye.push(de),de}$e=$e||0;for(var U=0;U<$e;++U)Ce();var ae=Q(),Ee=ae.toString,Be=we[Ne]=t(ae,{arg:Ce,toString:function(){return hs(["function(",ye.join(),"){",Ee(),"}"])}});return Be}function _e(){var Ne=['"use strict";',xe,"return {"];Object.keys(we).forEach(function(Ce){Ne.push('"',Ce,'":',we[Ce].toString(),",")}),Ne.push("}");var $e=hs(Ne).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),ye=Function.apply(null,M.concat($e));return ye.apply(null,N)}return{global:xe,link:ee,block:ce,proc:Se,scope:Q,cond:re,compile:_e}}var us="xyzw".split(""),nv=5121,ds=1,du=2,pu=0,vu=1,mu=2,gu=3,Ql=4,rv=5,av=6,iv="dither",sv="blend.enable",cv="blend.color",xu="blend.equation",yu="blend.func",lv="depth.enable",fv="depth.func",hv="depth.range",uv="depth.mask",bu="colorMask",dv="cull.enable",pv="cull.face",wu="frontFace",_u="lineWidth",vv="polygonOffset.enable",Mu="polygonOffset.offset",mv="sample.alpha",gv="sample.enable",ku="sample.coverage",xv="stencil.enable",yv="stencil.mask",Eu="stencil.func",Su="stencil.opFront",Lc="stencil.opBack",bv="scissor.enable",Zl="scissor.box",ai="viewport",zc="profile",d0="framebuffer",Nc="vert",Rc="frag",p0="elements",v0="primitive",m0="count",Jl="offset",ef="instances",Cc="vao",Au="Width",Tu="Height",ps=d0+Au,vs=d0+Tu,gw=ai+Au,xw=ai+Tu,wv="drawingBuffer",_v=wv+Au,Mv=wv+Tu,yw=[yu,xu,Eu,Su,Lc,ku,ai,Zl,Mu],ms=34962,bw=34963,ww=35632,_w=35633,kv=3553,Mw=34067,kw=2884,Ew=3042,Sw=3024,Aw=2960,Tw=2929,Lw=3089,zw=32823,Nw=32926,Rw=32928,Lu=5126,tf=35664,of=35665,nf=35666,zu=5124,rf=35667,af=35668,sf=35669,Nu=35670,cf=35671,lf=35672,ff=35673,Pc=35674,Ic=35675,Oc=35676,Fc=35678,Gc=35680,Ev=4,$c=1028,g0=1029,Sv=2304,Ru=2305,Cw=32775,Pw=32776,Iw=519,Si=7680,Av=0,Tv=1,Lv=32774,Ow=513,zv=36160,Fw=36064,ja={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Nv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],gs={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ai={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Rv={frag:ww,vert:_w},Cu={cw:Sv,ccw:Ru};function hf(x){return Array.isArray(x)||e(x)||_r(x)}function Cv(x){return x.sort(function(M,N){return M===ai?-1:N===ai?1:M<N?-1:1})}function kr(x,M,N,ee){this.thisDep=x,this.contextDep=M,this.propDep=N,this.append=ee}function Ti(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function wn(x){return new kr(!1,!1,!1,x)}function $r(x,M){var N=x.type;if(N===pu){var ee=x.data.length;return new kr(!0,ee>=1,ee>=2,M)}else if(N===Ql){var ce=x.data;return new kr(ce.thisDep,ce.contextDep,ce.propDep,M)}else{if(N===rv)return new kr(!1,!1,!1,M);if(N===av){for(var Q=!1,re=!1,xe=!1,we=0;we<x.data.length;++we){var Se=x.data[we];if(Se.type===vu)xe=!0;else if(Se.type===mu)re=!0;else if(Se.type===gu)Q=!0;else if(Se.type===pu){Q=!0;var _e=Se.data;_e>=1&&(re=!0),_e>=2&&(xe=!0)}else Se.type===Ql&&(Q=Q||Se.data.thisDep,re=re||Se.data.contextDep,xe=xe||Se.data.propDep)}return new kr(Q,re,xe,M)}else return new kr(N===gu,N===mu,N===vu,M)}}var Pv=new kr(!1,!1,!1,function(){});function Gw(x,M,N,ee,ce,Q,re,xe,we,Se,_e,Ne,$e,ye,Ce){var U=Se.Record,ae={add:32774,subtract:32778,"reverse subtract":32779};N.ext_blend_minmax&&(ae.min=Cw,ae.max=Pw);var Ee=N.angle_instanced_arrays,Be=N.webgl_draw_buffers,de={dirty:!0,profile:Ce.profile},Xe={},ge=[],Pe={},pe={};function Ie(A){return A.replace(".","_")}function gt(A,w,I){var B=Ie(A);ge.push(A),Xe[B]=de[B]=!!I,Pe[B]=w}function Nt(A,w,I){var B=Ie(A);ge.push(A),Array.isArray(I)?(de[B]=I.slice(),Xe[B]=I.slice()):de[B]=Xe[B]=I,pe[B]=w}gt(iv,Sw),gt(sv,Ew),Nt(cv,"blendColor",[0,0,0,0]),Nt(xu,"blendEquationSeparate",[Lv,Lv]),Nt(yu,"blendFuncSeparate",[Tv,Av,Tv,Av]),gt(lv,Tw,!0),Nt(fv,"depthFunc",Ow),Nt(hv,"depthRange",[0,1]),Nt(uv,"depthMask",!0),Nt(bu,bu,[!0,!0,!0,!0]),gt(dv,kw),Nt(pv,"cullFace",g0),Nt(wu,wu,Ru),Nt(_u,_u,1),gt(vv,zw),Nt(Mu,"polygonOffset",[0,0]),gt(mv,Nw),gt(gv,Rw),Nt(ku,"sampleCoverage",[1,!1]),gt(xv,Aw),Nt(yv,"stencilMask",-1),Nt(Eu,"stencilFunc",[Iw,0,-1]),Nt(Su,"stencilOpSeparate",[$c,Si,Si,Si]),Nt(Lc,"stencilOpSeparate",[g0,Si,Si,Si]),gt(bv,Lw),Nt(Zl,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Nt(ai,ai,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var De={gl:x,context:$e,strings:M,next:Xe,current:de,draw:Ne,elements:Q,buffer:ce,shader:_e,attributes:Se.state,vao:Se,uniforms:we,framebuffer:xe,extensions:N,timer:ye,isBufferArgs:hf},Ae={primTypes:os,compareFuncs:gs,blendFuncs:ja,blendEquations:ae,stencilOps:Ai,glTypes:c0,orientationType:Cu};_.optional(function(){De.isArrayLike=dn}),Be&&(Ae.backBuffer=[g0],Ae.drawBuffer=Ut(ee.maxDrawbuffers,function(A){return A===0?[0]:Ut(A,function(w){return Fw+w})}));var he=0;function St(){var A=mw(),w=A.link,I=A.global;A.id=he++,A.batchId="0";var B=w(De),j=A.shared={props:"a0"};Object.keys(De).forEach(function(P){j[P]=I.def(B,".",P)}),_.optional(function(){A.CHECK=w(_),A.commandStr=_.guessCommand(),A.command=w(A.commandStr),A.assert=function(P,S,H){P("if(!(",S,"))",this.CHECK,".commandRaise(",w(H),",",this.command,");")},Ae.invalidBlendCombinations=Nv});var G=A.next={},O=A.current={};Object.keys(pe).forEach(function(P){Array.isArray(de[P])&&(G[P]=I.def(j.next,".",P),O[P]=I.def(j.current,".",P))});var $=A.constants={};Object.keys(Ae).forEach(function(P){$[P]=I.def(JSON.stringify(Ae[P]))}),A.invoke=function(P,S){switch(S.type){case pu:var H=["this",j.context,j.props,A.batchId];return P.def(w(S.data),".call(",H.slice(0,Math.max(S.data.length+1,4)),")");case vu:return P.def(j.props,S.data);case mu:return P.def(j.context,S.data);case gu:return P.def("this",S.data);case Ql:return S.data.append(A,P),S.data.ref;case rv:return S.data.toString();case av:return S.data.map(function(X){return A.invoke(P,X)})}},A.attribCache={};var T={};return A.scopeAttrib=function(P){var S=M.id(P);if(S in T)return T[S];var H=Se.scope[S];H||(H=Se.scope[S]=new U);var X=T[S]=w(H);return X},A}function Dt(A){var w=A.static,I=A.dynamic,B;if(zc in w){var j=!!w[zc];B=wn(function(O,$){return j}),B.enable=j}else if(zc in I){var G=I[zc];B=$r(G,function(O,$){return O.invoke($,G)})}return B}function tt(A,w){var I=A.static,B=A.dynamic;if(d0 in I){var j=I[d0];return j?(j=xe.getFramebuffer(j),_.command(j,"invalid framebuffer object"),wn(function(O,$){var T=O.link(j),P=O.shared;$.set(P.framebuffer,".next",T);var S=P.context;return $.set(S,"."+ps,T+".width"),$.set(S,"."+vs,T+".height"),T})):wn(function(O,$){var T=O.shared;$.set(T.framebuffer,".next","null");var P=T.context;return $.set(P,"."+ps,P+"."+_v),$.set(P,"."+vs,P+"."+Mv),"null"})}else if(d0 in B){var G=B[d0];return $r(G,function(O,$){var T=O.invoke($,G),P=O.shared,S=P.framebuffer,H=$.def(S,".getFramebuffer(",T,")");_.optional(function(){O.assert($,"!"+T+"||"+H,"invalid framebuffer object")}),$.set(S,".next",H);var X=P.context;return $.set(X,"."+ps,H+"?"+H+".width:"+X+"."+_v),$.set(X,"."+vs,H+"?"+H+".height:"+X+"."+Mv),H})}else return null}function Wt(A,w,I){var B=A.static,j=A.dynamic;function G(T){if(T in B){var P=B[T];_.commandType(P,"object","invalid "+T,I.commandStr);var S=!0,H=P.x|0,X=P.y|0,se,le;return"width"in P?(se=P.width|0,_.command(se>=0,"invalid "+T,I.commandStr)):S=!1,"height"in P?(le=P.height|0,_.command(le>=0,"invalid "+T,I.commandStr)):S=!1,new kr(!S&&w&&w.thisDep,!S&&w&&w.contextDep,!S&&w&&w.propDep,function(lt,Ht){var ot=lt.shared.context,bt=se;"width"in P||(bt=Ht.def(ot,".",ps,"-",H));var It=le;return"height"in P||(It=Ht.def(ot,".",vs,"-",X)),[H,X,bt,It]})}else if(T in j){var ie=j[T],Me=$r(ie,function(lt,Ht){var ot=lt.invoke(Ht,ie);_.optional(function(){lt.assert(Ht,ot+"&&typeof "+ot+'==="object"',"invalid "+T)});var bt=lt.shared.context,It=Ht.def(ot,".x|0"),mo=Ht.def(ot,".y|0"),sn=Ht.def('"width" in ',ot,"?",ot,".width|0:","(",bt,".",ps,"-",It,")"),Er=Ht.def('"height" in ',ot,"?",ot,".height|0:","(",bt,".",vs,"-",mo,")");return _.optional(function(){lt.assert(Ht,sn+">=0&&"+Er+">=0","invalid "+T)}),[It,mo,sn,Er]});return w&&(Me.thisDep=Me.thisDep||w.thisDep,Me.contextDep=Me.contextDep||w.contextDep,Me.propDep=Me.propDep||w.propDep),Me}else return w?new kr(w.thisDep,w.contextDep,w.propDep,function(lt,Ht){var ot=lt.shared.context;return[0,0,Ht.def(ot,".",ps),Ht.def(ot,".",vs)]}):null}var O=G(ai);if(O){var $=O;O=new kr(O.thisDep,O.contextDep,O.propDep,function(T,P){var S=$.append(T,P),H=T.shared.context;return P.set(H,"."+gw,S[2]),P.set(H,"."+xw,S[3]),S})}return{viewport:O,scissor_box:G(Zl)}}function Ct(A,w){var I=A.static,B=typeof I[Rc]=="string"&&typeof I[Nc]=="string";if(B){if(Object.keys(w.dynamic).length>0)return null;var j=w.static,G=Object.keys(j);if(G.length>0&&typeof j[G[0]]=="number"){for(var O=[],$=0;$<G.length;++$)_(typeof j[G[$]]=="number","must specify all vertex attribute locations when using vaos"),O.push([j[G[$]]|0,G[$]]);return O}}return null}function Bt(A,w,I){var B=A.static,j=A.dynamic;function G(S){if(S in B){var H=M.id(B[S]);_.optional(function(){_e.shader(Rv[S],H,_.guessCommand())});var X=wn(function(){return H});return X.id=H,X}else if(S in j){var se=j[S];return $r(se,function(le,ie){var Me=le.invoke(ie,se),lt=ie.def(le.shared.strings,".id(",Me,")");return _.optional(function(){ie(le.shared.shader,".shader(",Rv[S],",",lt,",",le.command,");")}),lt})}return null}var O=G(Rc),$=G(Nc),T=null,P;return Ti(O)&&Ti($)?(T=_e.program($.id,O.id,null,I),P=wn(function(S,H){return S.link(T)})):P=new kr(O&&O.thisDep||$&&$.thisDep,O&&O.contextDep||$&&$.contextDep,O&&O.propDep||$&&$.propDep,function(S,H){var X=S.shared.shader,se;O?se=O.append(S,H):se=H.def(X,".",Rc);var le;$?le=$.append(S,H):le=H.def(X,".",Nc);var ie=X+".program("+le+","+se;return _.optional(function(){ie+=","+S.command}),H.def(ie+")")}),{frag:O,vert:$,progVar:P,program:T}}function vo(A,w){var I=A.static,B=A.dynamic;function j(){if(p0 in I){var S=I[p0];hf(S)?S=Q.getElements(Q.create(S,!0)):S&&(S=Q.getElements(S),_.command(S,"invalid elements",w.commandStr));var H=wn(function(se,le){if(S){var ie=se.link(S);return se.ELEMENTS=ie,ie}return se.ELEMENTS=null,null});return H.value=S,H}else if(p0 in B){var X=B[p0];return $r(X,function(se,le){var ie=se.shared,Me=ie.isBufferArgs,lt=ie.elements,Ht=se.invoke(le,X),ot=le.def("null"),bt=le.def(Me,"(",Ht,")"),It=se.cond(bt).then(ot,"=",lt,".createStream(",Ht,");").else(ot,"=",lt,".getElements(",Ht,");");return _.optional(function(){se.assert(It.else,"!"+Ht+"||"+ot,"invalid elements")}),le.entry(It),le.exit(se.cond(bt).then(lt,".destroyStream(",ot,");")),se.ELEMENTS=ot,ot})}return null}var G=j();function O(){if(v0 in I){var S=I[v0];return _.commandParameter(S,os,"invalid primitve",w.commandStr),wn(function(X,se){return os[S]})}else if(v0 in B){var H=B[v0];return $r(H,function(X,se){var le=X.constants.primTypes,ie=X.invoke(se,H);return _.optional(function(){X.assert(se,ie+" in "+le,"invalid primitive, must be one of "+Object.keys(os))}),se.def(le,"[",ie,"]")})}else if(G)return Ti(G)?G.value?wn(function(X,se){return se.def(X.ELEMENTS,".primType")}):wn(function(){return Ev}):new kr(G.thisDep,G.contextDep,G.propDep,function(X,se){var le=X.ELEMENTS;return se.def(le,"?",le,".primType:",Ev)});return null}function $(S,H){if(S in I){var X=I[S]|0;return _.command(!H||X>=0,"invalid "+S,w.commandStr),wn(function(le,ie){return H&&(le.OFFSET=X),X})}else if(S in B){var se=B[S];return $r(se,function(le,ie){var Me=le.invoke(ie,se);return H&&(le.OFFSET=Me,_.optional(function(){le.assert(ie,Me+">=0","invalid "+S)})),Me})}else if(H&&G)return wn(function(le,ie){return le.OFFSET="0",0});return null}var T=$(Jl,!0);function P(){if(m0 in I){var S=I[m0]|0;return _.command(typeof S=="number"&&S>=0,"invalid vertex count",w.commandStr),wn(function(){return S})}else if(m0 in B){var H=B[m0];return $r(H,function(le,ie){var Me=le.invoke(ie,H);return _.optional(function(){le.assert(ie,"typeof "+Me+'==="number"&&'+Me+">=0&&"+Me+"===("+Me+"|0)","invalid vertex count")}),Me})}else if(G)if(Ti(G)){if(G)return T?new kr(T.thisDep,T.contextDep,T.propDep,function(le,ie){var Me=ie.def(le.ELEMENTS,".vertCount-",le.OFFSET);return _.optional(function(){le.assert(ie,Me+">=0","invalid vertex offset/element buffer too small")}),Me}):wn(function(le,ie){return ie.def(le.ELEMENTS,".vertCount")});var X=wn(function(){return-1});return _.optional(function(){X.MISSING=!0}),X}else{var se=new kr(G.thisDep||T.thisDep,G.contextDep||T.contextDep,G.propDep||T.propDep,function(le,ie){var Me=le.ELEMENTS;return le.OFFSET?ie.def(Me,"?",Me,".vertCount-",le.OFFSET,":-1"):ie.def(Me,"?",Me,".vertCount:-1")});return _.optional(function(){se.DYNAMIC=!0}),se}return null}return{elements:G,primitive:O(),count:P(),instances:$(ef,!1),offset:T}}function _n(A,w){var I=A.static,B=A.dynamic,j={};return ge.forEach(function(G){var O=Ie(G);function $(T,P){if(G in I){var S=T(I[G]);j[O]=wn(function(){return S})}else if(G in B){var H=B[G];j[O]=$r(H,function(X,se){return P(X,se,X.invoke(se,H))})}}switch(G){case dv:case sv:case iv:case xv:case lv:case bv:case vv:case mv:case gv:case uv:return $(function(T){return _.commandType(T,"boolean",G,w.commandStr),T},function(T,P,S){return _.optional(function(){T.assert(P,"typeof "+S+'==="boolean"',"invalid flag "+G,T.commandStr)}),S});case fv:return $(function(T){return _.commandParameter(T,gs,"invalid "+G,w.commandStr),gs[T]},function(T,P,S){var H=T.constants.compareFuncs;return _.optional(function(){T.assert(P,S+" in "+H,"invalid "+G+", must be one of "+Object.keys(gs))}),P.def(H,"[",S,"]")});case hv:return $(function(T){return _.command(dn(T)&&T.length===2&&typeof T[0]=="number"&&typeof T[1]=="number"&&T[0]<=T[1],"depth range is 2d array",w.commandStr),T},function(T,P,S){_.optional(function(){T.assert(P,T.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var H=P.def("+",S,"[0]"),X=P.def("+",S,"[1]");return[H,X]});case yu:return $(function(T){_.commandType(T,"object","blend.func",w.commandStr);var P="srcRGB"in T?T.srcRGB:T.src,S="srcAlpha"in T?T.srcAlpha:T.src,H="dstRGB"in T?T.dstRGB:T.dst,X="dstAlpha"in T?T.dstAlpha:T.dst;return _.commandParameter(P,ja,O+".srcRGB",w.commandStr),_.commandParameter(S,ja,O+".srcAlpha",w.commandStr),_.commandParameter(H,ja,O+".dstRGB",w.commandStr),_.commandParameter(X,ja,O+".dstAlpha",w.commandStr),_.command(Nv.indexOf(P+", "+H)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+P+", "+H+")",w.commandStr),[ja[P],ja[H],ja[S],ja[X]]},function(T,P,S){var H=T.constants.blendFuncs;_.optional(function(){T.assert(P,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function X(ot,bt){var It=P.def('"',ot,bt,'" in ',S,"?",S,".",ot,bt,":",S,".",ot);return _.optional(function(){T.assert(P,It+" in "+H,"invalid "+G+"."+ot+bt+", must be one of "+Object.keys(ja))}),It}var se=X("src","RGB"),le=X("dst","RGB");_.optional(function(){var ot=T.constants.invalidBlendCombinations;T.assert(P,ot+".indexOf("+se+'+", "+'+le+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ie=P.def(H,"[",se,"]"),Me=P.def(H,"[",X("src","Alpha"),"]"),lt=P.def(H,"[",le,"]"),Ht=P.def(H,"[",X("dst","Alpha"),"]");return[ie,lt,Me,Ht]});case xu:return $(function(T){if(typeof T=="string")return _.commandParameter(T,ae,"invalid "+G,w.commandStr),[ae[T],ae[T]];if(typeof T=="object")return _.commandParameter(T.rgb,ae,G+".rgb",w.commandStr),_.commandParameter(T.alpha,ae,G+".alpha",w.commandStr),[ae[T.rgb],ae[T.alpha]];_.commandRaise("invalid blend.equation",w.commandStr)},function(T,P,S){var H=T.constants.blendEquations,X=P.def(),se=P.def(),le=T.cond("typeof ",S,'==="string"');return _.optional(function(){function ie(Me,lt,Ht){T.assert(Me,Ht+" in "+H,"invalid "+lt+", must be one of "+Object.keys(ae))}ie(le.then,G,S),T.assert(le.else,S+"&&typeof "+S+'==="object"',"invalid "+G),ie(le.else,G+".rgb",S+".rgb"),ie(le.else,G+".alpha",S+".alpha")}),le.then(X,"=",se,"=",H,"[",S,"];"),le.else(X,"=",H,"[",S,".rgb];",se,"=",H,"[",S,".alpha];"),P(le),[X,se]});case cv:return $(function(T){return _.command(dn(T)&&T.length===4,"blend.color must be a 4d array",w.commandStr),Ut(4,function(P){return+T[P]})},function(T,P,S){return _.optional(function(){T.assert(P,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),Ut(4,function(H){return P.def("+",S,"[",H,"]")})});case yv:return $(function(T){return _.commandType(T,"number",O,w.commandStr),T|0},function(T,P,S){return _.optional(function(){T.assert(P,"typeof "+S+'==="number"',"invalid stencil.mask")}),P.def(S,"|0")});case Eu:return $(function(T){_.commandType(T,"object",O,w.commandStr);var P=T.cmp||"keep",S=T.ref||0,H="mask"in T?T.mask:-1;return _.commandParameter(P,gs,G+".cmp",w.commandStr),_.commandType(S,"number",G+".ref",w.commandStr),_.commandType(H,"number",G+".mask",w.commandStr),[gs[P],S,H]},function(T,P,S){var H=T.constants.compareFuncs;_.optional(function(){function ie(){T.assert(P,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ie(S+"&&typeof ",S,'==="object"'),ie('!("cmp" in ',S,")||(",S,".cmp in ",H,")")});var X=P.def('"cmp" in ',S,"?",H,"[",S,".cmp]",":",Si),se=P.def(S,".ref|0"),le=P.def('"mask" in ',S,"?",S,".mask|0:-1");return[X,se,le]});case Su:case Lc:return $(function(T){_.commandType(T,"object",O,w.commandStr);var P=T.fail||"keep",S=T.zfail||"keep",H=T.zpass||"keep";return _.commandParameter(P,Ai,G+".fail",w.commandStr),_.commandParameter(S,Ai,G+".zfail",w.commandStr),_.commandParameter(H,Ai,G+".zpass",w.commandStr),[G===Lc?g0:$c,Ai[P],Ai[S],Ai[H]]},function(T,P,S){var H=T.constants.stencilOps;_.optional(function(){T.assert(P,S+"&&typeof "+S+'==="object"',"invalid "+G)});function X(se){return _.optional(function(){T.assert(P,'!("'+se+'" in '+S+")||("+S+"."+se+" in "+H+")","invalid "+G+"."+se+", must be one of "+Object.keys(Ai))}),P.def('"',se,'" in ',S,"?",H,"[",S,".",se,"]:",Si)}return[G===Lc?g0:$c,X("fail"),X("zfail"),X("zpass")]});case Mu:return $(function(T){_.commandType(T,"object",O,w.commandStr);var P=T.factor|0,S=T.units|0;return _.commandType(P,"number",O+".factor",w.commandStr),_.commandType(S,"number",O+".units",w.commandStr),[P,S]},function(T,P,S){_.optional(function(){T.assert(P,S+"&&typeof "+S+'==="object"',"invalid "+G)});var H=P.def(S,".factor|0"),X=P.def(S,".units|0");return[H,X]});case pv:return $(function(T){var P=0;return T==="front"?P=$c:T==="back"&&(P=g0),_.command(!!P,O,w.commandStr),P},function(T,P,S){return _.optional(function(){T.assert(P,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),P.def(S,'==="front"?',$c,":",g0)});case _u:return $(function(T){return _.command(typeof T=="number"&&T>=ee.lineWidthDims[0]&&T<=ee.lineWidthDims[1],"invalid line width, must be a positive number between "+ee.lineWidthDims[0]+" and "+ee.lineWidthDims[1],w.commandStr),T},function(T,P,S){return _.optional(function(){T.assert(P,"typeof "+S+'==="number"&&'+S+">="+ee.lineWidthDims[0]+"&&"+S+"<="+ee.lineWidthDims[1],"invalid line width")}),S});case wu:return $(function(T){return _.commandParameter(T,Cu,O,w.commandStr),Cu[T]},function(T,P,S){return _.optional(function(){T.assert(P,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),P.def(S+'==="cw"?'+Sv+":"+Ru)});case bu:return $(function(T){return _.command(dn(T)&&T.length===4,"color.mask must be length 4 array",w.commandStr),T.map(function(P){return!!P})},function(T,P,S){return _.optional(function(){T.assert(P,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),Ut(4,function(H){return"!!"+S+"["+H+"]"})});case ku:return $(function(T){_.command(typeof T=="object"&&T,O,w.commandStr);var P="value"in T?T.value:1,S=!!T.invert;return _.command(typeof P=="number"&&P>=0&&P<=1,"sample.coverage.value must be a number between 0 and 1",w.commandStr),[P,S]},function(T,P,S){_.optional(function(){T.assert(P,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var H=P.def('"value" in ',S,"?+",S,".value:1"),X=P.def("!!",S,".invert");return[H,X]})}}),j}function Fn(A,w){var I=A.static,B=A.dynamic,j={};return Object.keys(I).forEach(function(G){var O=I[G],$;if(typeof O=="number"||typeof O=="boolean")$=wn(function(){return O});else if(typeof O=="function"){var T=O._reglType;T==="texture2d"||T==="textureCube"?$=wn(function(P){return P.link(O)}):T==="framebuffer"||T==="framebufferCube"?(_.command(O.color.length>0,'missing color attachment for framebuffer sent to uniform "'+G+'"',w.commandStr),$=wn(function(P){return P.link(O.color[0])})):_.commandRaise('invalid data for uniform "'+G+'"',w.commandStr)}else dn(O)?$=wn(function(P){var S=P.global.def("[",Ut(O.length,function(H){return _.command(typeof O[H]=="number"||typeof O[H]=="boolean","invalid uniform "+G,P.commandStr),O[H]}),"]");return S}):_.commandRaise('invalid or missing data for uniform "'+G+'"',w.commandStr);$.value=O,j[G]=$}),Object.keys(B).forEach(function(G){var O=B[G];j[G]=$r(O,function($,T){return $.invoke(T,O)})}),j}function Jt(A,w){var I=A.static,B=A.dynamic,j={};return Object.keys(I).forEach(function(G){var O=I[G],$=M.id(G),T=new U;if(hf(O))T.state=ds,T.buffer=ce.getBuffer(ce.create(O,ms,!1,!0)),T.type=0;else{var P=ce.getBuffer(O);if(P)T.state=ds,T.buffer=P,T.type=0;else if(_.command(typeof O=="object"&&O,"invalid data for attribute "+G,w.commandStr),"constant"in O){var S=O.constant;T.buffer="null",T.state=du,typeof S=="number"?T.x=S:(_.command(dn(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+G,w.commandStr),us.forEach(function(lt,Ht){Ht<S.length&&(T[lt]=S[Ht])}))}else{hf(O.buffer)?P=ce.getBuffer(ce.create(O.buffer,ms,!1,!0)):P=ce.getBuffer(O.buffer),_.command(!!P,'missing buffer for attribute "'+G+'"',w.commandStr);var H=O.offset|0;_.command(H>=0,'invalid offset for attribute "'+G+'"',w.commandStr);var X=O.stride|0;_.command(X>=0&&X<256,'invalid stride for attribute "'+G+'", must be integer betweeen [0, 255]',w.commandStr);var se=O.size|0;_.command(!("size"in O)||se>0&&se<=4,'invalid size for attribute "'+G+'", must be 1,2,3,4',w.commandStr);var le=!!O.normalized,ie=0;"type"in O&&(_.commandParameter(O.type,c0,"invalid type for attribute "+G,w.commandStr),ie=c0[O.type]);var Me=O.divisor|0;"divisor"in O&&(_.command(Me===0||Ee,'cannot specify divisor for attribute "'+G+'", instancing not supported',w.commandStr),_.command(Me>=0,'invalid divisor for attribute "'+G+'"',w.commandStr)),_.optional(function(){var lt=w.commandStr,Ht=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(O).forEach(function(ot){_.command(Ht.indexOf(ot)>=0,'unknown parameter "'+ot+'" for attribute pointer "'+G+'" (valid parameters are '+Ht+")",lt)})}),T.buffer=P,T.state=ds,T.size=se,T.normalized=le,T.type=ie||P.dtype,T.offset=H,T.stride=X,T.divisor=Me}}j[G]=wn(function(lt,Ht){var ot=lt.attribCache;if($ in ot)return ot[$];var bt={isStream:!1};return Object.keys(T).forEach(function(It){bt[It]=T[It]}),T.buffer&&(bt.buffer=lt.link(T.buffer),bt.type=bt.type||bt.buffer+".dtype"),ot[$]=bt,bt})}),Object.keys(B).forEach(function(G){var O=B[G];function $(T,P){var S=T.invoke(P,O),H=T.shared,X=T.constants,se=H.isBufferArgs,le=H.buffer;_.optional(function(){T.assert(P,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+se+"("+S+")||"+le+".getBuffer("+S+")||"+le+".getBuffer("+S+".buffer)||"+se+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+H.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+G+'"')});var ie={isStream:P.def(!1)},Me=new U;Me.state=ds,Object.keys(Me).forEach(function(bt){ie[bt]=P.def(""+Me[bt])});var lt=ie.buffer,Ht=ie.type;P("if(",se,"(",S,")){",ie.isStream,"=true;",lt,"=",le,".createStream(",ms,",",S,");",Ht,"=",lt,".dtype;","}else{",lt,"=",le,".getBuffer(",S,");","if(",lt,"){",Ht,"=",lt,".dtype;",'}else if("constant" in ',S,"){",ie.state,"=",du,";","if(typeof "+S+'.constant === "number"){',ie[us[0]],"=",S,".constant;",us.slice(1).map(function(bt){return ie[bt]}).join("="),"=0;","}else{",us.map(function(bt,It){return ie[bt]+"="+S+".constant.length>"+It+"?"+S+".constant["+It+"]:0;"}).join(""),"}}else{","if(",se,"(",S,".buffer)){",lt,"=",le,".createStream(",ms,",",S,".buffer);","}else{",lt,"=",le,".getBuffer(",S,".buffer);","}",Ht,'="type" in ',S,"?",X.glTypes,"[",S,".type]:",lt,".dtype;",ie.normalized,"=!!",S,".normalized;");function ot(bt){P(ie[bt],"=",S,".",bt,"|0;")}return ot("size"),ot("offset"),ot("stride"),ot("divisor"),P("}}"),P.exit("if(",ie.isStream,"){",le,".destroyStream(",lt,");","}"),ie}j[G]=$r(O,$)}),j}function Ln(A,w){var I=A.static,B=A.dynamic;if(Cc in I){var j=I[Cc];return j!==null&&Se.getVAO(j)===null&&(j=Se.createVAO(j)),wn(function(O){return O.link(Se.getVAO(j))})}else if(Cc in B){var G=B[Cc];return $r(G,function(O,$){var T=O.invoke($,G);return $.def(O.shared.vao+".getVAO("+T+")")})}return null}function Vo(A){var w=A.static,I=A.dynamic,B={};return Object.keys(w).forEach(function(j){var G=w[j];B[j]=wn(function(O,$){return typeof G=="number"||typeof G=="boolean"?""+G:O.link(G)})}),Object.keys(I).forEach(function(j){var G=I[j];B[j]=$r(G,function(O,$){return O.invoke($,G)})}),B}function Mn(A,w,I,B,j){var G=A.static,O=A.dynamic;_.optional(function(){var ot=[d0,Nc,Rc,p0,v0,Jl,m0,ef,zc,Cc].concat(ge);function bt(It){Object.keys(It).forEach(function(mo){_.command(ot.indexOf(mo)>=0,'unknown parameter "'+mo+'"',j.commandStr)})}bt(G),bt(O)});var $=Ct(A,w),T=tt(A,j),P=Wt(A,T,j),S=vo(A,j),H=_n(A,j),X=Bt(A,j,$);function se(ot){var bt=P[ot];bt&&(H[ot]=bt)}se(ai),se(Ie(Zl));var le=Object.keys(H).length>0,ie={framebuffer:T,draw:S,shader:X,state:H,dirty:le,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ie.profile=Dt(A,j),ie.uniforms=Fn(I,j),ie.drawVAO=ie.scopeVAO=Ln(A,j),!ie.drawVAO&&X.program&&!$&&N.angle_instanced_arrays){var Me=!0,lt=X.program.attributes.map(function(ot){var bt=w.static[ot];return Me=Me&&!!bt,bt});if(Me&&lt.length>0){var Ht=Se.getVAO(Se.createVAO(lt));ie.drawVAO=new kr(null,null,null,function(ot,bt){return ot.link(Ht)}),ie.useVAO=!0}}return $?ie.useVAO=!0:ie.attributes=Jt(w,j),ie.context=Vo(B,j),ie}function zn(A,w,I){var B=A.shared,j=B.context,G=A.scope();Object.keys(I).forEach(function(O){w.save(j,"."+O);var $=I[O],T=$.append(A,w);Array.isArray(T)?G(j,".",O,"=[",T.join(),"];"):G(j,".",O,"=",T,";")}),w(G)}function Nn(A,w,I,B){var j=A.shared,G=j.gl,O=j.framebuffer,$;Be&&($=w.def(j.extensions,".webgl_draw_buffers"));var T=A.constants,P=T.drawBuffer,S=T.backBuffer,H;I?H=I.append(A,w):H=w.def(O,".next"),B||w("if(",H,"!==",O,".cur){"),w("if(",H,"){",G,".bindFramebuffer(",zv,",",H,".framebuffer);"),Be&&w($,".drawBuffersWEBGL(",P,"[",H,".colorAttachments.length]);"),w("}else{",G,".bindFramebuffer(",zv,",null);"),Be&&w($,".drawBuffersWEBGL(",S,");"),w("}",O,".cur=",H,";"),B||w("}")}function Wn(A,w,I){var B=A.shared,j=B.gl,G=A.current,O=A.next,$=B.current,T=B.next,P=A.cond($,".dirty");ge.forEach(function(S){var H=Ie(S);if(!(H in I.state)){var X,se;if(H in O){X=O[H],se=G[H];var le=Ut(de[H].length,function(Me){return P.def(X,"[",Me,"]")});P(A.cond(le.map(function(Me,lt){return Me+"!=="+se+"["+lt+"]"}).join("||")).then(j,".",pe[H],"(",le,");",le.map(function(Me,lt){return se+"["+lt+"]="+Me}).join(";"),";"))}else{X=P.def(T,".",H);var ie=A.cond(X,"!==",$,".",H);P(ie),H in Pe?ie(A.cond(X).then(j,".enable(",Pe[H],");").else(j,".disable(",Pe[H],");"),$,".",H,"=",X,";"):ie(j,".",pe[H],"(",X,");",$,".",H,"=",X,";")}}}),Object.keys(I.state).length===0&&P($,".dirty=false;"),w(P)}function nr(A,w,I,B){var j=A.shared,G=A.current,O=j.current,$=j.gl;Cv(Object.keys(I)).forEach(function(T){var P=I[T];if(!(B&&!B(P))){var S=P.append(A,w);if(Pe[T]){var H=Pe[T];Ti(P)?S?w($,".enable(",H,");"):w($,".disable(",H,");"):w(A.cond(S).then($,".enable(",H,");").else($,".disable(",H,");")),w(O,".",T,"=",S,";")}else if(dn(S)){var X=G[T];w($,".",pe[T],"(",S,");",S.map(function(se,le){return X+"["+le+"]="+se}).join(";"),";")}else w($,".",pe[T],"(",S,");",O,".",T,"=",S,";")}})}function pn(A,w){Ee&&(A.instancing=w.def(A.shared.extensions,".angle_instanced_arrays"))}function qt(A,w,I,B,j){var G=A.shared,O=A.stats,$=G.current,T=G.timer,P=I.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var H,X;function se(ot){H=w.def(),ot(H,"=",S(),";"),typeof j=="string"?ot(O,".count+=",j,";"):ot(O,".count++;"),ye&&(B?(X=w.def(),ot(X,"=",T,".getNumPendingQueries();")):ot(T,".beginQuery(",O,");"))}function le(ot){ot(O,".cpuTime+=",S(),"-",H,";"),ye&&(B?ot(T,".pushScopeStats(",X,",",T,".getNumPendingQueries(),",O,");"):ot(T,".endQuery();"))}function ie(ot){var bt=w.def($,".profile");w($,".profile=",ot,";"),w.exit($,".profile=",bt,";")}var Me;if(P){if(Ti(P)){P.enable?(se(w),le(w.exit),ie("true")):ie("false");return}Me=P.append(A,w),ie(Me)}else Me=w.def($,".profile");var lt=A.block();se(lt),w("if(",Me,"){",lt,"}");var Ht=A.block();le(Ht),w.exit("if(",Me,"){",Ht,"}")}function rr(A,w,I,B,j){var G=A.shared;function O(T){switch(T){case tf:case rf:case cf:return 2;case of:case af:case lf:return 3;case nf:case sf:case ff:return 4;default:return 1}}function $(T,P,S){var H=G.gl,X=w.def(T,".location"),se=w.def(G.attributes,"[",X,"]"),le=S.state,ie=S.buffer,Me=[S.x,S.y,S.z,S.w],lt=["buffer","normalized","offset","stride"];function Ht(){w("if(!",se,".buffer){",H,".enableVertexAttribArray(",X,");}");var bt=S.type,It;if(S.size?It=w.def(S.size,"||",P):It=P,w("if(",se,".type!==",bt,"||",se,".size!==",It,"||",lt.map(function(sn){return se+"."+sn+"!=="+S[sn]}).join("||"),"){",H,".bindBuffer(",ms,",",ie,".buffer);",H,".vertexAttribPointer(",[X,It,bt,S.normalized,S.stride,S.offset],");",se,".type=",bt,";",se,".size=",It,";",lt.map(function(sn){return se+"."+sn+"="+S[sn]+";"}).join(""),"}"),Ee){var mo=S.divisor;w("if(",se,".divisor!==",mo,"){",A.instancing,".vertexAttribDivisorANGLE(",[X,mo],");",se,".divisor=",mo,";}")}}function ot(){w("if(",se,".buffer){",H,".disableVertexAttribArray(",X,");",se,".buffer=null;","}if(",us.map(function(bt,It){return se+"."+bt+"!=="+Me[It]}).join("||"),"){",H,".vertexAttrib4f(",X,",",Me,");",us.map(function(bt,It){return se+"."+bt+"="+Me[It]+";"}).join(""),"}")}le===ds?Ht():le===du?ot():(w("if(",le,"===",ds,"){"),Ht(),w("}else{"),ot(),w("}"))}B.forEach(function(T){var P=T.name,S=I.attributes[P],H;if(S){if(!j(S))return;H=S.append(A,w)}else{if(!j(Pv))return;var X=A.scopeAttrib(P);_.optional(function(){A.assert(w,X+".state","missing attribute "+P)}),H={},Object.keys(new U).forEach(function(se){H[se]=w.def(X,".",se)})}$(A.link(T),O(T.info.type),H)})}function _o(A,w,I,B,j){for(var G=A.shared,O=G.gl,$,T=0;T<B.length;++T){var P=B[T],S=P.name,H=P.info.type,X=I.uniforms[S],se=A.link(P),le=se+".location",ie;if(X){if(!j(X))continue;if(Ti(X)){var Me=X.value;if(_.command(Me!==null&&typeof Me!="undefined",'missing uniform "'+S+'"',A.commandStr),H===Fc||H===Gc){_.command(typeof Me=="function"&&(H===Fc&&(Me._reglType==="texture2d"||Me._reglType==="framebuffer")||H===Gc&&(Me._reglType==="textureCube"||Me._reglType==="framebufferCube")),"invalid texture for uniform "+S,A.commandStr);var lt=A.link(Me._texture||Me.color[0]._texture);w(O,".uniform1i(",le,",",lt+".bind());"),w.exit(lt,".unbind();")}else if(H===Pc||H===Ic||H===Oc){_.optional(function(){_.command(dn(Me),"invalid matrix for uniform "+S,A.commandStr),_.command(H===Pc&&Me.length===4||H===Ic&&Me.length===9||H===Oc&&Me.length===16,"invalid length for matrix uniform "+S,A.commandStr)});var Ht=A.global.def("new Float32Array(["+Array.prototype.slice.call(Me)+"])"),ot=2;H===Ic?ot=3:H===Oc&&(ot=4),w(O,".uniformMatrix",ot,"fv(",le,",false,",Ht,");")}else{switch(H){case Lu:_.commandType(Me,"number","uniform "+S,A.commandStr),$="1f";break;case tf:_.command(dn(Me)&&Me.length===2,"uniform "+S,A.commandStr),$="2f";break;case of:_.command(dn(Me)&&Me.length===3,"uniform "+S,A.commandStr),$="3f";break;case nf:_.command(dn(Me)&&Me.length===4,"uniform "+S,A.commandStr),$="4f";break;case Nu:_.commandType(Me,"boolean","uniform "+S,A.commandStr),$="1i";break;case zu:_.commandType(Me,"number","uniform "+S,A.commandStr),$="1i";break;case cf:_.command(dn(Me)&&Me.length===2,"uniform "+S,A.commandStr),$="2i";break;case rf:_.command(dn(Me)&&Me.length===2,"uniform "+S,A.commandStr),$="2i";break;case lf:_.command(dn(Me)&&Me.length===3,"uniform "+S,A.commandStr),$="3i";break;case af:_.command(dn(Me)&&Me.length===3,"uniform "+S,A.commandStr),$="3i";break;case ff:_.command(dn(Me)&&Me.length===4,"uniform "+S,A.commandStr),$="4i";break;case sf:_.command(dn(Me)&&Me.length===4,"uniform "+S,A.commandStr),$="4i";break}w(O,".uniform",$,"(",le,",",dn(Me)?Array.prototype.slice.call(Me):Me,");")}continue}else ie=X.append(A,w)}else{if(!j(Pv))continue;ie=w.def(G.uniforms,"[",M.id(S),"]")}H===Fc?(_(!Array.isArray(ie),"must specify a scalar prop for textures"),w("if(",ie,"&&",ie,'._reglType==="framebuffer"){',ie,"=",ie,".color[0];","}")):H===Gc&&(_(!Array.isArray(ie),"must specify a scalar prop for cube maps"),w("if(",ie,"&&",ie,'._reglType==="framebufferCube"){',ie,"=",ie,".color[0];","}")),_.optional(function(){function Er(Na,qv){A.assert(w,Na,'bad data or missing for uniform "'+S+'".  '+qv)}function Pu(Na){_(!Array.isArray(ie),"must not specify an array type for uniform"),Er("typeof "+ie+'==="'+Na+'"',"invalid type, expected "+Na)}function da(Na,qv){Array.isArray(ie)?_(ie.length===Na,"must have length "+Na):Er(G.isArrayLike+"("+ie+")&&"+ie+".length==="+Na,"invalid vector, should have length "+Na,A.commandStr)}function Dv(Na){_(!Array.isArray(ie),"must not specify a value type"),Er("typeof "+ie+'==="function"&&'+ie+'._reglType==="texture'+(Na===kv?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch(H){case zu:Pu("number");break;case rf:da(2,"number");break;case af:da(3,"number");break;case sf:da(4,"number");break;case Lu:Pu("number");break;case tf:da(2,"number");break;case of:da(3,"number");break;case nf:da(4,"number");break;case Nu:Pu("boolean");break;case cf:da(2,"boolean");break;case lf:da(3,"boolean");break;case ff:da(4,"boolean");break;case Pc:da(4,"number");break;case Ic:da(9,"number");break;case Oc:da(16,"number");break;case Fc:Dv(kv);break;case Gc:Dv(Mw);break}});var bt=1;switch(H){case Fc:case Gc:var It=w.def(ie,"._texture");w(O,".uniform1i(",le,",",It,".bind());"),w.exit(It,".unbind();");continue;case zu:case Nu:$="1i";break;case rf:case cf:$="2i",bt=2;break;case af:case lf:$="3i",bt=3;break;case sf:case ff:$="4i",bt=4;break;case Lu:$="1f";break;case tf:$="2f",bt=2;break;case of:$="3f",bt=3;break;case nf:$="4f",bt=4;break;case Pc:$="Matrix2fv";break;case Ic:$="Matrix3fv";break;case Oc:$="Matrix4fv";break}if(w(O,".uniform",$,"(",le,","),$.charAt(0)==="M"){var mo=Math.pow(H-Pc+2,2),sn=A.global.def("new Float32Array(",mo,")");Array.isArray(ie)?w("false,(",Ut(mo,function(Er){return sn+"["+Er+"]="+ie[Er]}),",",sn,")"):w("false,(Array.isArray(",ie,")||",ie," instanceof Float32Array)?",ie,":(",Ut(mo,function(Er){return sn+"["+Er+"]="+ie+"["+Er+"]"}),",",sn,")")}else bt>1?w(Ut(bt,function(Er){return Array.isArray(ie)?ie[Er]:ie+"["+Er+"]"})):(_(!Array.isArray(ie),"uniform value must not be an array"),w(ie));w(");")}}function yt(A,w,I,B){var j=A.shared,G=j.gl,O=j.draw,$=B.draw;function T(){var It=$.elements,mo,sn=w;return It?((It.contextDep&&B.contextDynamic||It.propDep)&&(sn=I),mo=It.append(A,sn)):mo=sn.def(O,".",p0),mo&&sn("if("+mo+")"+G+".bindBuffer("+bw+","+mo+".buffer.buffer);"),mo}function P(){var It=$.count,mo,sn=w;return It?((It.contextDep&&B.contextDynamic||It.propDep)&&(sn=I),mo=It.append(A,sn),_.optional(function(){It.MISSING&&A.assert(w,"false","missing vertex count"),It.DYNAMIC&&A.assert(sn,mo+">=0","missing vertex count")})):(mo=sn.def(O,".",m0),_.optional(function(){A.assert(sn,mo+">=0","missing vertex count")})),mo}var S=T();function H(It){var mo=$[It];return mo?mo.contextDep&&B.contextDynamic||mo.propDep?mo.append(A,I):mo.append(A,w):w.def(O,".",It)}var X=H(v0),se=H(Jl),le=P();if(typeof le=="number"){if(le===0)return}else I("if(",le,"){"),I.exit("}");var ie,Me;Ee&&(ie=H(ef),Me=A.instancing);var lt=S+".type",Ht=$.elements&&Ti($.elements);function ot(){function It(){I(Me,".drawElementsInstancedANGLE(",[X,le,lt,se+"<<(("+lt+"-"+nv+")>>1)",ie],");")}function mo(){I(Me,".drawArraysInstancedANGLE(",[X,se,le,ie],");")}S?Ht?It():(I("if(",S,"){"),It(),I("}else{"),mo(),I("}")):mo()}function bt(){function It(){I(G+".drawElements("+[X,le,lt,se+"<<(("+lt+"-"+nv+")>>1)"]+");")}function mo(){I(G+".drawArrays("+[X,se,le]+");")}S?Ht?It():(I("if(",S,"){"),It(),I("}else{"),mo(),I("}")):mo()}Ee&&(typeof ie!="number"||ie>=0)?typeof ie=="string"?(I("if(",ie,">0){"),ot(),I("}else if(",ie,"<0){"),bt(),I("}")):ot():bt()}function Yt(A,w,I,B,j){var G=St(),O=G.proc("body",j);return _.optional(function(){G.commandStr=w.commandStr,G.command=G.link(w.commandStr)}),Ee&&(G.instancing=O.def(G.shared.extensions,".angle_instanced_arrays")),A(G,O,I,B),G.compile().body}function co(A,w,I,B){pn(A,w),I.useVAO?I.drawVAO?w(A.shared.vao,".setVAO(",I.drawVAO.append(A,w),");"):w(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(w(A.shared.vao,".setVAO(null);"),rr(A,w,I,B.attributes,function(){return!0})),_o(A,w,I,B.uniforms,function(){return!0}),yt(A,w,w,I)}function vn(A,w){var I=A.proc("draw",1);pn(A,I),zn(A,I,w.context),Nn(A,I,w.framebuffer),Wn(A,I,w),nr(A,I,w.state),qt(A,I,w,!1,!0);var B=w.shader.progVar.append(A,I);if(I(A.shared.gl,".useProgram(",B,".program);"),w.shader.program)co(A,I,w,w.shader.program);else{I(A.shared.vao,".setVAO(null);");var j=A.global.def("{}"),G=I.def(B,".id"),O=I.def(j,"[",G,"]");I(A.cond(O).then(O,".call(this,a0);").else(O,"=",j,"[",G,"]=",A.link(function($){return Yt(co,A,w,$,1)}),"(",B,");",O,".call(this,a0);"))}Object.keys(w.state).length>0&&I(A.shared.current,".dirty=true;")}function Wa(A,w,I,B){A.batchId="a1",pn(A,w);function j(){return!0}rr(A,w,I,B.attributes,j),_o(A,w,I,B.uniforms,j),yt(A,w,w,I)}function x0(A,w,I,B){pn(A,w);var j=I.contextDep,G=w.def(),O="a0",$="a1",T=w.def();A.shared.props=T,A.batchId=G;var P=A.scope(),S=A.scope();w(P.entry,"for(",G,"=0;",G,"<",$,";++",G,"){",T,"=",O,"[",G,"];",S,"}",P.exit);function H(lt){return lt.contextDep&&j||lt.propDep}function X(lt){return!H(lt)}if(I.needsContext&&zn(A,S,I.context),I.needsFramebuffer&&Nn(A,S,I.framebuffer),nr(A,S,I.state,H),I.profile&&H(I.profile)&&qt(A,S,I,!1,!0),B)I.useVAO?I.drawVAO?H(I.drawVAO)?S(A.shared.vao,".setVAO(",I.drawVAO.append(A,S),");"):P(A.shared.vao,".setVAO(",I.drawVAO.append(A,P),");"):P(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(P(A.shared.vao,".setVAO(null);"),rr(A,P,I,B.attributes,X),rr(A,S,I,B.attributes,H)),_o(A,P,I,B.uniforms,X),_o(A,S,I,B.uniforms,H),yt(A,P,S,I);else{var se=A.global.def("{}"),le=I.shader.progVar.append(A,S),ie=S.def(le,".id"),Me=S.def(se,"[",ie,"]");S(A.shared.gl,".useProgram(",le,".program);","if(!",Me,"){",Me,"=",se,"[",ie,"]=",A.link(function(lt){return Yt(Wa,A,I,lt,2)}),"(",le,");}",Me,".call(this,a0[",G,"],",G,");")}}function z(A,w){var I=A.proc("batch",2);A.batchId="0",pn(A,I);var B=!1,j=!0;Object.keys(w.context).forEach(function(se){B=B||w.context[se].propDep}),B||(zn(A,I,w.context),j=!1);var G=w.framebuffer,O=!1;G?(G.propDep?B=O=!0:G.contextDep&&B&&(O=!0),O||Nn(A,I,G)):Nn(A,I,null),w.state.viewport&&w.state.viewport.propDep&&(B=!0);function $(se){return se.contextDep&&B||se.propDep}Wn(A,I,w),nr(A,I,w.state,function(se){return!$(se)}),(!w.profile||!$(w.profile))&&qt(A,I,w,!1,"a1"),w.contextDep=B,w.needsContext=j,w.needsFramebuffer=O;var T=w.shader.progVar;if(T.contextDep&&B||T.propDep)x0(A,I,w,null);else{var P=T.append(A,I);if(I(A.shared.gl,".useProgram(",P,".program);"),w.shader.program)x0(A,I,w,w.shader.program);else{I(A.shared.vao,".setVAO(null);");var S=A.global.def("{}"),H=I.def(P,".id"),X=I.def(S,"[",H,"]");I(A.cond(X).then(X,".call(this,a0,a1);").else(X,"=",S,"[",H,"]=",A.link(function(se){return Yt(x0,A,w,se,2)}),"(",P,");",X,".call(this,a0,a1);"))}}Object.keys(w.state).length>0&&I(A.shared.current,".dirty=true;")}function te(A,w){var I=A.proc("scope",3);A.batchId="a2";var B=A.shared,j=B.current;zn(A,I,w.context),w.framebuffer&&w.framebuffer.append(A,I),Cv(Object.keys(w.state)).forEach(function(O){var $=w.state[O],T=$.append(A,I);dn(T)?T.forEach(function(P,S){I.set(A.next[O],"["+S+"]",P)}):I.set(B.next,"."+O,T)}),qt(A,I,w,!0,!0),[p0,Jl,m0,ef,v0].forEach(function(O){var $=w.draw[O];$&&I.set(B.draw,"."+O,""+$.append(A,I))}),Object.keys(w.uniforms).forEach(function(O){var $=w.uniforms[O].append(A,I);Array.isArray($)&&($="["+$.join()+"]"),I.set(B.uniforms,"["+M.id(O)+"]",$)}),Object.keys(w.attributes).forEach(function(O){var $=w.attributes[O].append(A,I),T=A.scopeAttrib(O);Object.keys(new U).forEach(function(P){I.set(T,"."+P,$[P])})}),w.scopeVAO&&I.set(B.vao,".targetVAO",w.scopeVAO.append(A,I));function G(O){var $=w.shader[O];$&&I.set(B.shader,"."+O,$.append(A,I))}G(Nc),G(Rc),Object.keys(w.state).length>0&&(I(j,".dirty=true;"),I.exit(j,".dirty=true;")),I("a1(",A.shared.context,",a0,",A.batchId,");")}function K(A){if(!(typeof A!="object"||dn(A))){for(var w=Object.keys(A),I=0;I<w.length;++I)if(Fe.isDynamic(A[w[I]]))return!0;return!1}}function Ze(A,w,I){var B=w.static[I];if(!B||!K(B))return;var j=A.global,G=Object.keys(B),O=!1,$=!1,T=!1,P=A.global.def("{}");G.forEach(function(H){var X=B[H];if(Fe.isDynamic(X)){typeof X=="function"&&(X=B[H]=Fe.unbox(X));var se=$r(X,null);O=O||se.thisDep,T=T||se.propDep,$=$||se.contextDep}else{switch(j(P,".",H,"="),typeof X){case"number":j(X);break;case"string":j('"',X,'"');break;case"object":Array.isArray(X)&&j("[",X.join(),"]");break;default:j(A.link(X));break}j(";")}});function S(H,X){G.forEach(function(se){var le=B[se];if(Fe.isDynamic(le)){var ie=H.invoke(X,le);X(P,".",se,"=",ie,";")}})}w.dynamic[I]=new Fe.DynamicVariable(Ql,{thisDep:O,contextDep:$,propDep:T,ref:P,append:S}),delete w.static[I]}function Vt(A,w,I,B,j){var G=St();G.stats=G.link(j),Object.keys(w.static).forEach(function($){Ze(G,w,$)}),yw.forEach(function($){Ze(G,A,$)});var O=Mn(A,w,I,B,G);return vn(G,O),te(G,O),z(G,O),t(G.compile(),{destroy:function(){O.shader.program.destroy()}})}return{next:Xe,current:de,procs:function(){var A=St(),w=A.proc("poll"),I=A.proc("refresh"),B=A.block();w(B),I(B);var j=A.shared,G=j.gl,O=j.next,$=j.current;B($,".dirty=false;"),Nn(A,w),Nn(A,I,null,!0);var T;Ee&&(T=A.link(Ee)),N.oes_vertex_array_object&&I(A.link(N.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var P=0;P<ee.maxAttributes;++P){var S=I.def(j.attributes,"[",P,"]"),H=A.cond(S,".buffer");H.then(G,".enableVertexAttribArray(",P,");",G,".bindBuffer(",ms,",",S,".buffer.buffer);",G,".vertexAttribPointer(",P,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(G,".disableVertexAttribArray(",P,");",G,".vertexAttrib4f(",P,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),I(H),Ee&&I(T,".vertexAttribDivisorANGLE(",P,",",S,".divisor);")}return I(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Pe).forEach(function(X){var se=Pe[X],le=B.def(O,".",X),ie=A.block();ie("if(",le,"){",G,".enable(",se,")}else{",G,".disable(",se,")}",$,".",X,"=",le,";"),I(ie),w("if(",le,"!==",$,".",X,"){",ie,"}")}),Object.keys(pe).forEach(function(X){var se=pe[X],le=de[X],ie,Me,lt=A.block();if(lt(G,".",se,"("),dn(le)){var Ht=le.length;ie=A.global.def(O,".",X),Me=A.global.def($,".",X),lt(Ut(Ht,function(ot){return ie+"["+ot+"]"}),");",Ut(Ht,function(ot){return Me+"["+ot+"]="+ie+"["+ot+"];"}).join("")),w("if(",Ut(Ht,function(ot){return ie+"["+ot+"]!=="+Me+"["+ot+"]"}).join("||"),"){",lt,"}")}else ie=B.def(O,".",X),Me=B.def($,".",X),lt(ie,");",$,".",X,"=",ie,";"),w("if(",ie,"!==",Me,"){",lt,"}");I(lt)}),A.compile()}(),compile:Vt}}function $w(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var Dw=34918,qw=34919,Iv=35007,Hw=function(x,M){if(!M.ext_disjoint_timer_query)return null;var N=[];function ee(){return N.pop()||M.ext_disjoint_timer_query.createQueryEXT()}function ce(Ee){N.push(Ee)}var Q=[];function re(Ee){var Be=ee();M.ext_disjoint_timer_query.beginQueryEXT(Iv,Be),Q.push(Be),ye(Q.length-1,Q.length,Ee)}function xe(){M.ext_disjoint_timer_query.endQueryEXT(Iv)}function we(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Se=[];function _e(){return Se.pop()||new we}function Ne(Ee){Se.push(Ee)}var $e=[];function ye(Ee,Be,de){var Xe=_e();Xe.startQueryIndex=Ee,Xe.endQueryIndex=Be,Xe.sum=0,Xe.stats=de,$e.push(Xe)}var Ce=[],U=[];function ae(){var Ee,Be,de=Q.length;if(de!==0){U.length=Math.max(U.length,de+1),Ce.length=Math.max(Ce.length,de+1),Ce[0]=0,U[0]=0;var Xe=0;for(Ee=0,Be=0;Be<Q.length;++Be){var ge=Q[Be];M.ext_disjoint_timer_query.getQueryObjectEXT(ge,qw)?(Xe+=M.ext_disjoint_timer_query.getQueryObjectEXT(ge,Dw),ce(ge)):Q[Ee++]=ge,Ce[Be+1]=Xe,U[Be+1]=Ee}for(Q.length=Ee,Ee=0,Be=0;Be<$e.length;++Be){var Pe=$e[Be],pe=Pe.startQueryIndex,Ie=Pe.endQueryIndex;Pe.sum+=Ce[Ie]-Ce[pe];var gt=U[pe],Nt=U[Ie];Nt===gt?(Pe.stats.gpuTime+=Pe.sum/1e6,Ne(Pe)):(Pe.startQueryIndex=gt,Pe.endQueryIndex=Nt,$e[Ee++]=Pe)}$e.length=Ee}}return{beginQuery:re,endQuery:xe,pushScopeStats:ye,update:ae,getNumPendingQueries:function(){return Q.length},clear:function(){N.push.apply(N,Q);for(var Ee=0;Ee<N.length;Ee++)M.ext_disjoint_timer_query.deleteQueryEXT(N[Ee]);Q.length=0,N.length=0},restore:function(){Q.length=0,N.length=0}}},Bw=16384,Uw=256,jw=1024,Ww=34962,Ov="webglcontextlost",Fv="webglcontextrestored",Gv=1,Vw=2,Xw=3;function $v(x,M){for(var N=0;N<x.length;++N)if(x[N]===M)return N;return-1}function Yw(x){var M=_t(x);if(!M)return null;var N=M.gl,ee=N.getContextAttributes(),ce=N.isContextLost(),Q=Lt(N,M);if(!Q)return null;var re=it(),xe=$w(),we=Q.extensions,Se=Hw(N,we),_e=Re(),Ne=N.drawingBufferWidth,$e=N.drawingBufferHeight,ye={tick:0,time:0,viewportWidth:Ne,viewportHeight:$e,framebufferWidth:Ne,framebufferHeight:$e,drawingBufferWidth:Ne,drawingBufferHeight:$e,pixelRatio:M.pixelRatio},Ce={},U={elements:null,primitive:4,count:-1,offset:0,instances:-1},ae=Dh(N,we),Ee=Kb(N,xe,M,de),Be=cw(N,we,ae,xe,Ee);function de(yt){return Be.destroyBuffer(yt)}var Xe=c5(N,we,Ee,xe),ge=uw(N,re,xe,M),Pe=$5(N,we,ae,function(){gt.procs.poll()},ye,xe,M),pe=D5(N,we,ae,xe,M),Ie=iw(N,we,ae,Pe,pe,xe),gt=Gw(N,re,we,ae,Ee,Xe,Pe,Ie,Ce,Be,ge,U,ye,Se,M),Nt=vw(N,Ie,gt.procs.poll,ye,ee,we,ae),De=gt.next,Ae=N.canvas,he=[],St=[],Dt=[],tt=[M.onDestroy],Wt=null;function Ct(){if(he.length===0){Se&&Se.update(),Wt=null;return}Wt=Qe.next(Ct),nr();for(var yt=he.length-1;yt>=0;--yt){var Yt=he[yt];Yt&&Yt(ye,null,0)}N.flush(),Se&&Se.update()}function Bt(){!Wt&&he.length>0&&(Wt=Qe.next(Ct))}function vo(){Wt&&(Qe.cancel(Ct),Wt=null)}function _n(yt){yt.preventDefault(),ce=!0,vo(),St.forEach(function(Yt){Yt()})}function Fn(yt){N.getError(),ce=!1,Q.restore(),ge.restore(),Ee.restore(),Pe.restore(),pe.restore(),Ie.restore(),Be.restore(),Se&&Se.restore(),gt.procs.refresh(),Bt(),Dt.forEach(function(Yt){Yt()})}Ae&&(Ae.addEventListener(Ov,_n,!1),Ae.addEventListener(Fv,Fn,!1));function Jt(){he.length=0,vo(),Ae&&(Ae.removeEventListener(Ov,_n),Ae.removeEventListener(Fv,Fn)),ge.clear(),Ie.clear(),pe.clear(),Pe.clear(),Xe.clear(),Ee.clear(),Be.clear(),Se&&Se.clear(),tt.forEach(function(yt){yt()})}function Ln(yt){_(!!yt,"invalid args to regl({...})"),_.type(yt,"object","invalid args to regl({...})");function Yt(j){var G=t({},j);delete G.uniforms,delete G.attributes,delete G.context,delete G.vao,"stencil"in G&&G.stencil.op&&(G.stencil.opBack=G.stencil.opFront=G.stencil.op,delete G.stencil.op);function O($){if($ in G){var T=G[$];delete G[$],Object.keys(T).forEach(function(P){G[$+"."+P]=T[P]})}}return O("blend"),O("depth"),O("cull"),O("stencil"),O("polygonOffset"),O("scissor"),O("sample"),"vao"in j&&(G.vao=j.vao),G}function co(j,G){var O={},$={};return Object.keys(j).forEach(function(T){var P=j[T];if(Fe.isDynamic(P)){$[T]=Fe.unbox(P,T);return}else if(G&&Array.isArray(P)){for(var S=0;S<P.length;++S)if(Fe.isDynamic(P[S])){$[T]=Fe.unbox(P,T);return}}O[T]=P}),{dynamic:$,static:O}}var vn=co(yt.context||{},!0),Wa=co(yt.uniforms||{},!0),x0=co(yt.attributes||{},!1),z=co(Yt(yt),!1),te={gpuTime:0,cpuTime:0,count:0},K=gt.compile(z,x0,Wa,vn,te),Ze=K.draw,Vt=K.batch,A=K.scope,w=[];function I(j){for(;w.length<j;)w.push(null);return w}function B(j,G){var O;if(ce&&_.raise("context lost"),typeof j=="function")return A.call(this,null,j,0);if(typeof G=="function")if(typeof j=="number")for(O=0;O<j;++O)A.call(this,null,G,O);else if(Array.isArray(j))for(O=0;O<j.length;++O)A.call(this,j[O],G,O);else return A.call(this,j,G,0);else if(typeof j=="number"){if(j>0)return Vt.call(this,I(j|0),j|0)}else if(Array.isArray(j)){if(j.length)return Vt.call(this,j,j.length)}else return Ze.call(this,j)}return t(B,{stats:te,destroy:function(){K.destroy()}})}var Vo=Ie.setFBO=Ln({framebuffer:Fe.define.call(null,Gv,"framebuffer")});function Mn(yt,Yt){var co=0;gt.procs.poll();var vn=Yt.color;vn&&(N.clearColor(+vn[0]||0,+vn[1]||0,+vn[2]||0,+vn[3]||0),co|=Bw),"depth"in Yt&&(N.clearDepth(+Yt.depth),co|=Uw),"stencil"in Yt&&(N.clearStencil(Yt.stencil|0),co|=jw),_(!!co,"called regl.clear with no buffer specified"),N.clear(co)}function zn(yt){if(_(typeof yt=="object"&&yt,"regl.clear() takes an object as input"),"framebuffer"in yt)if(yt.framebuffer&&yt.framebuffer_reglType==="framebufferCube")for(var Yt=0;Yt<6;++Yt)Vo(t({framebuffer:yt.framebuffer.faces[Yt]},yt),Mn);else Vo(yt,Mn);else Mn(null,yt)}function Nn(yt){_.type(yt,"function","regl.frame() callback must be a function"),he.push(yt);function Yt(){var co=$v(he,yt);_(co>=0,"cannot cancel a frame twice");function vn(){var Wa=$v(he,vn);he[Wa]=he[he.length-1],he.length-=1,he.length<=0&&vo()}he[co]=vn}return Bt(),{cancel:Yt}}function Wn(){var yt=De.viewport,Yt=De.scissor_box;yt[0]=yt[1]=Yt[0]=Yt[1]=0,ye.viewportWidth=ye.framebufferWidth=ye.drawingBufferWidth=yt[2]=Yt[2]=N.drawingBufferWidth,ye.viewportHeight=ye.framebufferHeight=ye.drawingBufferHeight=yt[3]=Yt[3]=N.drawingBufferHeight}function nr(){ye.tick+=1,ye.time=qt(),Wn(),gt.procs.poll()}function pn(){Pe.refresh(),Wn(),gt.procs.refresh(),Se&&Se.update()}function qt(){return(Re()-_e)/1e3}pn();function rr(yt,Yt){_.type(Yt,"function","listener callback must be a function");var co;switch(yt){case"frame":return Nn(Yt);case"lost":co=St;break;case"restore":co=Dt;break;case"destroy":co=tt;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return co.push(Yt),{cancel:function(){for(var vn=0;vn<co.length;++vn)if(co[vn]===Yt){co[vn]=co[co.length-1],co.pop();return}}}}var _o=t(Ln,{clear:zn,prop:Fe.define.bind(null,Gv),context:Fe.define.bind(null,Vw),this:Fe.define.bind(null,Xw),draw:Ln({}),buffer:function(yt){return Ee.create(yt,Ww,!1,!1)},elements:function(yt){return Xe.create(yt,!1)},texture:Pe.create2D,cube:Pe.createCube,renderbuffer:pe.create,framebuffer:Ie.create,framebufferCube:Ie.createCube,vao:Be.createVAO,attributes:ee,frame:Nn,on:rr,limits:ae,hasExtension:function(yt){return ae.extensions.indexOf(yt.toLowerCase())>=0},read:Nt,destroy:Jt,_gl:N,_refresh:pn,poll:function(){nr(),Se&&Se.update()},now:qt,stats:xe});return M.onDone(null,_o),_o}return Yw})});var b0=ve((ES,dm)=>{"use strict";R();var si=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],ci=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Va=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],yf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Wc=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Xu=e=>Math.hypot(e[0],e[1],e[2]),va=e=>{let t=Xu(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function ks(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=[0,0,0];for(let p=0;p<3;p++)l[p]=.5*(2*s[p]+(-i[p]+c[p])*a+(2*i[p]-5*s[p]+4*c[p]-f[p])*a*a+(-i[p]+3*s[p]-3*c[p]+f[p])*a*a*a);return l}function m4(e,t){return ks(e.map(o=>[o,0,0]),t)[0]}function g4(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,u)=>{let v=new Array(9);for(let d=0;d<3;d++)for(let m=0;m<3;m++)v[d*3+m]=h[d*3]*u[m]+h[d*3+1]*u[3+m]+h[d*3+2]*u[6+m];return v},f=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,u,v)=>{let d=f([h,u,v]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let u=Math.cos(h),v=Math.sin(h);i.r=c(i.r,[u,0,v,0,1,0,-v,0,u])},r.vert=(h,u,v)=>{let d=v||r.curMat,m=f(h),g=va(f(u));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],p=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,u,v)=>{let d=l(h),m=Wc(si(l(u),d),si(l(v),d)),g=ci(ci(p(h),p(u)),p(v));yf(m,g)<0?o.push(h,v,u):o.push(h,u,v)},r.box=(h,u,v,d,m,g,y)=>{let b=[[[h,u,v],[d,u,v],[h,m,v],[d,m,v],[0,0,-1]],[[d,u,g],[h,u,g],[d,m,g],[h,m,g],[0,0,1]],[[h,u,g],[h,u,v],[h,m,g],[h,m,v],[-1,0,0]],[[d,u,v],[d,u,g],[d,m,v],[d,m,g],[1,0,0]],[[h,m,v],[d,m,v],[h,m,g],[d,m,g],[0,1,0]],[[h,u,g],[d,u,g],[h,u,v],[d,u,v],[0,-1,0]]];for(let E of b){let k=r.vert(E[0],E[4],y),L=r.vert(E[1],E[4],y),C=r.vert(E[2],E[4],y),Y=r.vert(E[3],E[4],y);r.tri(k,L,C),r.tri(L,Y,C)}},r.surface=(h,u,v,d)=>{d=d||{};let m=.001,g=k=>Math.min(1,Math.max(0,k)),y=[],b=[];for(let k=0;k<=u;k++){let L=[],C=[];for(let Y=0;Y<=v;Y++){let F=k/u,oe=Y/v,D=h(F,oe),ne=Math.min(1-m,Math.max(m,F)),q=d.wrapV?oe:Math.min(1-m,Math.max(m,oe)),V=si(h(g(ne+m),q),h(g(ne-m),q)),Le=d.wrapV?q+m:g(q+m),je=d.wrapV?q-m:g(q-m),ze=si(h(ne,Le),h(ne,je)),me=Wc(V,ze);Xu(me)<1e-14&&(me=d.inside?si(D,d.inside(F,oe)):[0,1,0]),me=va(me),d.inside&&yf(me,si(D,d.inside(F,oe)))<0&&(me=Va(me,-1));let ke=d.mat?d.mat(F,oe,D):null;L.push(r.vert(D,me,ke)),d.double&&C.push(r.vert(D,Va(me,-1),ke))}y.push(L),b.push(C)}let E=k=>{for(let L=0;L<u;L++)for(let C=0;C<v;C++){let Y=k[L][C],F=k[L+1][C],oe=k[L][C+1],D=k[L+1][C+1];r.tri(Y,F,oe),r.tri(F,D,oe)}};E(y),d.double&&E(b)},r.ellipsoid=(h,u,v,d,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let E=y*Math.PI,k=b*Math.PI*2,L=g?g(y,b):1;return[h[0]+u[0]*L*Math.sin(E)*Math.cos(k),h[1]+u[1]*L*Math.cos(E),h[2]+u[2]*L*Math.sin(E)*Math.sin(k)]},v||10,d||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,u,v,d,m)=>{m=m||{};let g=40,y=[],b=null;for(let L=0;L<=g;L++){let C=L/g,Y=ks(h,Math.max(0,C-.01)),F=ks(h,Math.min(1,C+.01)),oe=va(si(F,Y)),D;if(b)D=va(si(b,Va(oe,yf(b,oe))));else{let ne=Math.abs(oe[1])<.9?[0,1,0]:[1,0,0];D=va(Wc(oe,ne))}y.push({N:D,B:va(Wc(oe,D))}),b=D}let E=L=>{let C=Math.min(Math.max(L,0),1)*g,Y=Math.min(g-1,Math.floor(C)),F=C-Y,oe=y[Y],D=y[Y+1];return{N:va(ci(Va(oe.N,1-F),Va(D.N,F))),B:va(ci(Va(oe.B,1-F),Va(D.B,F)))}},k=m.squash||[1,1];r.surface((L,C)=>{let Y=ks(h,L),F=E(L),oe=u(L),D=C*Math.PI*2;return ci(Y,ci(Va(F.N,Math.cos(D)*oe*k[0]),Va(F.B,Math.sin(D)*oe*k[1])))},v||12,d||8,{wrapV:!0,inside:L=>ks(h,L),mat:m.mat})},r.lathe=(h,u,v,d,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],E=h[y+1][1]-h[y][1];g.push(va([E,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],E=h[y+1],k=y===0||b[2]===1,L=y===h.length-2||E[2]===1,C=k?g[y]:va(ci(g[y-1],g[y])),Y=L?g[y]:va(ci(g[y],g[y+1])),F=[],oe=[];for(let D=0;D<=d;D++){let ne=D/d*Math.PI*2,q=Math.cos(ne),V=Math.sin(ne),Le=m.mat?m.mat(ne,b[1]):null,je=m.mat?m.mat(ne,E[1]):null;F.push(r.vert([u+b[0]*q,b[1],v+b[0]*V],[C[0]*q,C[1],C[0]*V],Le)),oe.push(r.vert([u+E[0]*q,E[1],v+E[0]*V],[Y[0]*q,Y[1],Y[0]*V],je))}for(let D=0;D<d;D++)r.tri(F[D],F[D+1],oe[D]),r.tri(F[D+1],oe[D+1],oe[D])}},r}dm.exports={createBuilder:g4,catmull:ks,curve1:m4,sub:si,add:ci,mul:Va,dot:yf,cross:Wc,norm:va,len:Xu}});var gm=ve((AS,mm)=>{"use strict";R();var{norm:bf,add:wf,mul:zi,sub:x4,cross:pm}=b0(),vm=Math.PI*2,y4=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function b4(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function w4(e,t,o,n,r,a){let i=(h,u)=>[7,h*a,u];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,f=20,l=6,p=a*.075;return e.surface((h,u)=>{let v=s+h*c,d=a*(.96-.12*h),m=u*vm,g=u*f%1,y=d-p*4*g*(1-g);return[t+y*Math.cos(m),v,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,u)=>[7,u*vm*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function _4(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function M4(e,t,o,n,r){e.save(),e.translate(t,0,o),_4(e,n,r),e.restore()}function k4(e,t,o,n,r,a){let i=b4(n),s=a?bf([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let p=l>=c-2,h=l*2.399963+i()*.5,u=[Math.cos(h),0,Math.sin(h)],v=[-Math.sin(h),0,Math.cos(h)],d=l*.618%1,m=p?.06+i()*.06:.12+.62*d,g=1;if(s){let me=u[0]*s[0]+u[2]*s[2];g=.25+.75*y4(-.7,.5,me),m*=g}let y=p?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,b=p?1+i()*.2:.95+i()*.28,E=p?.055:.215+i()*.05,k=.04+i()*.05,L=[u[0]*k,f,u[2]*k],C=[L[0]+u[0]*Math.sin(m)*y*.92,L[1]+Math.cos(m)*y,L[2]+u[2]*Math.sin(m)*y*.92],Y=[L[0]+u[0]*Math.sin(m*.5)*y*.45,L[1]+y*.5,L[2]+u[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([L,Y,C],me=>.02-.008*me,8,7);let F=24,oe=m*.9+.05,D=m+(p?.12:(.95+.45*d)*(.35+.65*g)),ne=[C],q=[],V=C;for(let me=0;me<F;me++){let ke=me/F,dt=oe+(D-oe)*ke*ke,Gt=[u[0]*Math.sin(dt),Math.cos(dt),u[2]*Math.sin(dt)];q.push(Gt),V=wf(V,zi(Gt,b/F)),ne.push(V)}q.push(q[q.length-1]);let Le=me=>{let ke=me*F,dt=Math.min(F-1,Math.floor(ke)),Gt=ke-dt;return wf(zi(ne[dt],1-Gt),zi(ne[dt+1],Gt))},je=me=>{let ke=me*F,dt=Math.min(F,Math.floor(ke)),Gt=Math.min(F,dt+1),Ue=ke-dt;return bf(wf(zi(q[dt],1-Ue),zi(q[Gt],Ue)))},ze=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((me,ke)=>{let dt=ke*2-1,Gt=Le(me),Ue=je(me),st=ze*me,kt=wf(zi(v,Math.cos(st)),zi(pm(Ue,v),Math.sin(st)));kt=bf(x4(kt,zi(Ue,kt[0]*Ue[0]+kt[1]*Ue[1]+kt[2]*Ue[2])));let to=bf(pm(kt,Ue)),io=E*Math.pow(Math.sin(Math.PI*Math.pow(me,.72)),.85),on=.3*io*Math.abs(dt)+.012*Math.sin(me*40+dt*2)*Math.abs(dt)*(p?0:1),Ke=-.1*io*dt*dt*dt*dt,pt=on+Ke;return[Gt[0]+kt[0]*dt*io+to[0]*pt,Gt[1]+kt[1]*dt*io+to[1]*pt,Gt[2]+kt[2]*dt*io+to[2]*pt]},14,8,{double:!0,mat:(me,ke)=>[2,ke*2-1,me]})}e.restore()}mm.exports={addFlutedColumn:w4,addStatue:M4,addPlant:k4}});var Ni=ve((LS,wm)=>{"use strict";R();var be={xc:7,r:2.5,spring:4.7};be.x0=be.xc-be.r;be.x1=be.xc+be.r;be.top=be.spring+be.r;var Tr=.06,Jo=.1,xm=.08,_f=be.r,Mf=[be.x0+_f/3,be.x0+2*_f/3,be.xc+_f/3,be.xc+2*_f/3],Es=.28,Yu=[.95,1.65,2.35,3.05,3.75],ym=[1.05,1.8],Vc=[8,0,0],Yr=[0,0,0];function ma(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function Ss(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function kf(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let f=(l,p,h)=>[be.xc+p*Math.cos(l),be.spring+p*Math.sin(l),h];for(let l=0;l<i;l++){let p=s+(c-s)*l/i,h=s+(c-s)*(l+1)/i,u=(p+h)/2;Ss(e,f(p,t,r),f(h,t,r),f(h,o,r),f(p,o,r),[0,0,1],a),Ss(e,f(p,o,n),f(h,o,n),f(h,t,n),f(p,t,n),[0,0,-1],a),Ss(e,f(p,t,n),f(h,t,n),f(h,t,r),f(p,t,r),[-Math.cos(u),-Math.sin(u),0],a),Ss(e,f(h,o,n),f(p,o,n),f(p,o,r),f(h,o,r),[Math.cos(u),Math.sin(u),0],a)}}function E4(e){let n=a=>[be.xc+be.r*Math.cos(a),be.spring+be.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?be.r/Math.abs(i):1/0,f=s>1e-6?(8-be.spring)/s:1/0,l=Math.min(c,f);return[Math.min(be.x1,Math.max(be.x0,be.xc+i*l)),Math.min(8,be.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),l=r(i),p=r(s);for(let[u,v]of[[.35,1],[-.35,-1]])Ss(e,[c[0],c[1],u],[f[0],f[1],u],[p[0],p[1],u],[l[0],l[1],u],[0,0,v],Yr);let h=(i+s)/2;Ss(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Yr)}}function S4(e){ma(e,-.35,0,-.35,be.x0,8,.35,Yr),ma(e,be.x1,0,-.35,14+.35,8,.35,Yr),E4(e),bm(e)}function bm(e){ma(e,be.x0-.32,.3,.35,be.x0,be.spring,.35+.07,Yr),ma(e,be.x1,.3,.35,be.x1+.32,be.spring,.35+.07,Yr),ma(e,be.x0-.32-.05,0,.35,be.x0,.3,.35+.07+.04,Yr),ma(e,be.x1,0,.35,be.x1+.32+.05,.3,.35+.07+.04,Yr),ma(e,be.x0-.32-.06,be.spring-.12,.35,be.x0,be.spring,.35+.07+.05,Yr),ma(e,be.x1,be.spring-.12,.35,be.x1+.32+.06,be.spring,.35+.07+.05,Yr),kf(e,be.r,be.r+.32,.35,.35+.07,Yr),kf(e,be.r+.32,be.r+.32+.06,.35,.35+.07+.03,Yr),ma(e,be.xc-.22,be.top-.08,.35,be.xc+.22,be.top+.32+.12,.35+.07+.06,Yr)}function A4(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-xm/2,a=xm/2,i=(h,u,v,d,m=0)=>ma(e,h-m,u,r,v+m,d,a,Vc),s=h=>be.spring+Math.sqrt(Math.max(0,be.r*be.r-(h-be.xc)*(h-be.xc))),c=t==="right"?be.xc:be.x0,f=t==="left"?be.xc:be.x1,l=h=>o||t==="left"&&h<be.xc||t==="right"&&h>be.xc,p=o?null:be.spring-.06;if(n){i(be.x0,0,be.x0+Jo,be.spring),i(be.x1-Jo,0,be.x1,be.spring),kf(e,be.r-Jo,be.r,r,a,Vc,64),i(be.x0,0,be.x1,.05),i(be.x0,be.spring-.06,be.x1,be.spring+.06);for(let h of ym)kf(e,h-Tr/2,h+Tr/2,r,a,Vc,48)}if(o){i(be.x0,0,be.x1,Es),i(be.xc-Jo/2,0,be.xc+Jo/2,be.top-Jo*.5);for(let h of Mf)i(h-Tr/2,Es,h+Tr/2,s(h)-Jo*.5);for(let h of Yu)i(be.x0,h-Tr/2,be.x1,h+Tr/2)}else if(t==="fixed"){i(be.xc-Jo/2,be.spring+.06,be.xc+Jo/2,be.top-Jo*.5);for(let h of Mf)i(h-Tr/2,be.spring+.06,h+Tr/2,s(h)-Jo*.5)}else{let h=t==="left"?be.x0+Jo:be.x1-Jo;i(Math.min(h,h+(t==="left"?Jo*.8:-Jo*.8)),.05,Math.max(h,h+(t==="left"?Jo*.8:-Jo*.8)),p),i(c,.05,f,Es),i(c,p-.07,f,p);let u=t==="left"?be.xc-Jo/2:be.xc;i(u,.05,u+Jo/2,p);for(let v of Mf)l(v)&&i(v-Tr/2,Es,v+Tr/2,p-.07);for(let v of Yu)i(c,v-Tr/2,f,v+Tr/2)}for(let h of[-1,1]){let u=be.xc+h*.16;l(u)&&(ma(e,u-.02,1.05,a,u+.02,1.13,a+.06,Vc),ma(e,u-(h>0?0:.14),1.07,a+.05,u+(h>0?.14:0),1.11,a+.08,Vc))}}function T4(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=be;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:r;if(t.push([f,0,o],[l,0,o],[l,s,o],[f,0,o],[l,s,o],[f,s,o]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,p=Math.PI*(f+1)/c;t.push([a,s,o],[a+i*Math.cos(l),s+i*Math.sin(l),o],[a+i*Math.cos(p),s+i*Math.sin(p),o])}return t}var Lo=e=>e.toFixed(4);function L4(){let e=Mf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Lo(n)}), ${Lo(Tr/2)}, soft));`).join(`
		`),t=Yu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Lo(n)}), ${Lo(Tr/2)}, soft));`).join(`
		`),o=ym.map(n=>`ab = max(ab, barCover(abs(rr - ${Lo(n)}), ${Lo(Tr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Lo(be.x0)} - soft, ${Lo(be.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Lo(be.x1)} - soft, ${Lo(be.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Lo(be.xc)}, ${Lo(be.spring)}));
		float arch = q.y < ${Lo(be.spring)} ? 1.0 : 1.0 - smoothstep(${Lo(be.r)} - soft, ${Lo(be.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Lo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Lo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Lo(be.xc)}, ${Lo(be.spring)}));
		float vb = barCover(abs(q.x - ${Lo(be.xc)}), ${Lo(Jo/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Lo(be.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Lo(Es)} - soft, ${Lo(Es)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Lo(be.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Lo(be.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Lo(be.x0+Jo/2)}), ${Lo(Jo/2)}, soft),
			barCover(abs(q.x - ${Lo(be.x1-Jo/2)}), ${Lo(Jo/2)}, soft));
		frame = q.y < ${Lo(be.spring)} ? frame : barCover(abs(rr - ${Lo(be.r-Jo/2)}), ${Lo(Jo/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}wm.exports={addEntranceWall:S4,addSurround:bm,addFrames:A4,glassPanes:T4,doorLightGLSL:L4,DOOR:be,WALL:.35}});var Ts=ve((NS,Am)=>{"use strict";R();var _0=1.1583333333333334,M0=(13.05-8*.16)/9,Qu=_0+.16,Zu=M0+.16,fi=14/2-7.75/2,Kr=15,Xc=fi+7.75,li=Kr+13.05,Qr=.3,hi={y:8+.18,inset:.15},w0={y:8+.36,inset:Qr},Ju=8+.2,Yc=8+.62,e1=8+.9,t1=.016,Em=.28,Sm=.66,z4=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),N4=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),R4=[9,0,0],ar=[10,0,0];function As(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Lr(e,t,o,n,r,a,i){As(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function Ku(e,t,o,n,r,a,i,s){As(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),As(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),As(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),As(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function _m(e,t,o,n,r){Lr(e,t[0],t[1],t[2],o[1],n,r),Lr(e,t[0],o[3],t[2],t[3],n,r),Lr(e,t[0],o[1],o[0],o[3],n,r),Lr(e,o[2],o[1],t[2],o[3],n,r)}var Mm=e=>fi+e*Qu,km=e=>Kr+e*Zu;function C4(e,t,o=48){let n=[fi-Qr,Kr-Qr,Xc+Qr,li+Qr],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,hi.inset),i=r(n,w0.inset);Lr(e,0,0,14,n[1],8,t),Lr(e,0,n[3],14,o,8,t),Lr(e,0,n[1],n[0],n[3],8,t),Lr(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],ar),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,ar),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],ar),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],ar),Ku(e,...n.slice(0,2),...n.slice(2),8,hi.y,ar),_m(e,n,a,hi.y,ar),Ku(e,...a.slice(0,2),...a.slice(2),hi.y,w0.y,ar),_m(e,a,i,w0.y,ar);for(let f=1;f<6;f++){let l=Mm(f)-.16;e.box(l,Ju,Kr,l+.16,w0.y,li,ar)}for(let f=1;f<9;f++){let l=km(f)-.16;e.box(fi,Ju,l,Xc,w0.y,l+.16,ar)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let p=Mm(l),h=km(f);Ku(e,p,h,p+_0,h+M0,w0.y,e1,ar),Lr(e,p,h,p+_0,h+M0,e1,R4),P4(e,p+_0/2,h+M0/2,_0/2,M0/2)}}function P4(e,t,o,n,r){let a=Yc,i=t1;Lr(e,t-n,o-i,t+n,o+i,a,ar),Lr(e,t-i,o-r,t+i,o+r,a,ar);for(let s of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=s*r/c,p=-l*i,h=f*i;As(e,[t-f*c+p,a,o-l*c+h],[t+f*c+p,a,o+l*c+h],[t+f*c-p,a,o+l*c-h],[t-f*c-p,a,o-l*c-h],[0,-1,0],ar)}for(let s of[Em,Sm]){let c=s*n,f=s*r;Lr(e,t-c-i,o-f-i,t+c+i,o-f+i,a,ar),Lr(e,t-c-i,o+f-i,t+c+i,o+f+i,a,ar),Lr(e,t-c-i,o-f+i,t-c+i,o+f-i,a,ar),Lr(e,t+c-i,o-f+i,t+c+i,o+f-i,a,ar)}}var Ot=e=>e.toFixed(4);function I4(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${z4.map(Ot).join(", ")});
	const vec3 SKY_MOON = vec3(${N4.map(Ot).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Ot(fi)}, ${Ot(Kr)});
		vec2 pitch = vec2(${Ot(Qu)}, ${Ot(Zu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Ot(5)} || cell.y > ${Ot(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Ot(_0)}, ${Ot(M0)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Ot(t1)} - soft, ${Ot(t1)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Ot(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Ot(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Ot(hi.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Ot(Ju)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Ot(w0.y)} - p.y) / L.y)).xz;
		float tG = (${Ot(Yc)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Ot(e1)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Ot(fi-Qr)}, ${Ot(Kr-Qr)}, ${Ot(Xc+Qr)}, ${Ot(li+Qr)}), soft)
		           * rectOpen(q1, vec4(${Ot(fi-Qr+hi.inset)}, ${Ot(Kr-Qr+hi.inset)}, ${Ot(Xc+Qr-hi.inset)}, ${Ot(li+Qr-hi.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Ot(fi)}, ${Ot(Kr)});
		vec2 pitch = vec2(${Ot(Qu)}, ${Ot(Zu)});
		vec2 paneHalf = vec2(${Ot(_0/2)}, ${Ot(M0/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Ot(Em)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Ot(Sm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Ot(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Ot(Yc)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Ot(fi)}, ${Ot(Kr)}, ${Ot(Xc)}, ${Ot(li)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Ot(14/2)}, ${Ot((Kr+li)/2)}) - L.xz * (${Ot(Yc)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Ot(7.75/2)}, ${Ot(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Ot(Kr-3)}, ${Ot(Kr+2)}, p.z)
		        * (1.0 - smoothstep(${Ot(li-2)}, ${Ot(li+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Ot(7.75/2)}, ${Ot(14/2)}, abs(p.x - ${Ot(14/2)}));
		return z * x;
	}`}Am.exports={addSkylight:C4,skylightGLSL:I4,Z_START:Kr,Z_END:li,GLASS_Y:Yc,HEIGHT:8}});var dr=ve((CS,Rm)=>{"use strict";R();var zs=Ni(),a1=8,en=.35,He={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:a1},Tm=(He.z1-He.z0)/2,o1=He.crown-He.spring,r1=(o1*o1+Tm*Tm)/(2*o1),i1=He.crown-r1;function Ls(e){let t=e-He.zc;return i1+Math.sqrt(Math.max(0,r1*r1-t*t))}var Mt={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Ra=Array.from({length:Mt.count},(e,t)=>Mt.first+t*Mt.pitch),zm=Ra.slice(1).map(e=>e-Mt.pitch/2),O4=[Ra[0],Ra[2],Ra[4]],Sf=[Ra[1],Ra[3]],Dr={r:1.3,sill:.62,spring:3.3},Oo=[0,0,0],Kc=[11,0,0],Ri=[10,0,0],Qc=[8,0,0];function Vn(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function qr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function Zc(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,f=new Set([o,n]);for(let d of s){f.add(d.u0),f.add(d.u1);let m=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let g=1;g<m;g++)f.add(d.u0+(d.u1-d.u0)*g/m)}for(let d of t.cuts||[])f.add(d);let l=t.topStep||.5;for(let d=o;d<n;d+=l)f.add(d);let p=[...f].filter(d=>d>=o-1e-9&&d<=n+1e-9).sort((d,m)=>d-m),h=(d,m)=>d.bot?d.bot(m):d.bottom,u=(d,m)=>{let g=i(d),y=m.map(k=>[Math.max(0,h(k,d)),Math.min(k.head(d),g)]).filter(k=>k[1]>k[0]).sort((k,L)=>k[0]-L[0]),b=[],E=0;for(let k of y)k[0]>E+1e-6&&b.push([E,k[0]]),E=Math.max(E,k[1]);return g>E+1e-6&&b.push([E,g]),b},v=(d,m,g)=>[d,m,g];for(let d=0;d<p.length-1;d++){let m=p[d],g=p[d+1],y=(m+g)/2,b=s.filter(F=>y>F.u0&&y<F.u1),E=b.length?Math.max(m,Math.max(...b.map(F=>F.u0))+1e-7):m,k=b.length?Math.min(g,Math.min(...b.map(F=>F.u1))-1e-7):g,L=u(E,b),C=u(k,b),Y=Math.min(L.length,C.length);for(let F=0;F<Y;F++){let[oe,D]=L[F],[ne,q]=C[F];D-oe<1e-6&&q-ne<1e-6||(Vn(e,v(m,oe,a),v(g,ne,a),v(g,q,a),v(m,D,a),[0,0,1],c),t.frontOnly||Vn(e,v(g,ne,r),v(m,oe,r),v(m,D,r),v(g,q,r),[0,0,-1],c))}}t.noEnds||(Vn(e,v(o,0,r),v(o,0,a),v(o,i(o),a),v(o,i(o),r),[-1,0,0],c),Vn(e,v(n,0,a),v(n,0,r),v(n,i(n),r),v(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let m=d.mat||t.revealMat||c,g=Math.max(0,h(d,d.u0+1e-7)),y=Math.max(0,h(d,d.u1-1e-7)),b=Math.min(d.head(d.u0+1e-7),i(d.u0)),E=Math.min(d.head(d.u1-1e-7),i(d.u1));b>g+1e-6&&Vn(e,v(d.u0,g,a),v(d.u0,g,r),v(d.u0,b,r),v(d.u0,b,a),[1,0,0],m),E>y+1e-6&&Vn(e,v(d.u1,y,r),v(d.u1,y,a),v(d.u1,E,a),v(d.u1,E,r),[-1,0,0],m);let k=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let L=0;L<k;L++){let C=d.u0+(d.u1-d.u0)*L/k,Y=d.u0+(d.u1-d.u0)*(L+1)/k,F=Math.max(C,d.u0+1e-7),oe=Math.min(Y,d.u1-1e-7),D=Math.min(d.head(F),i(C)),ne=Math.min(d.head(oe),i(Y));if(!(D>=i(C)-1e-6&&ne>=i(Y)-1e-6)){let Le=Y-C,je=ne-D,ze=Math.hypot(Le,je)||1;Vn(e,v(C,D,r),v(Y,ne,r),v(Y,ne,a),v(C,D,a),[je/ze,-Le/ze,0],m)}let q=h(d,F),V=h(d,oe);if(q>1e-6||V>1e-6){let Le=Y-C,je=V-q,ze=Math.hypot(Le,je)||1;Vn(e,v(Y,V,r),v(C,q,r),v(C,q,a),v(Y,V,a),[-je/ze,Le/ze,0],m)}}}}var n1=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function F4(e,t){let o=Dr.r,n=Dr.sill,r=Dr.spring,a=He.z0,i=24,s=(u,v,d)=>[t+Math.cos(u)*v,d,a-Math.sin(u)*v];for(let u=0;u<i;u++){let v=Math.PI*u/i,d=Math.PI*(u+1)/i,m=[-Math.cos(v),0,Math.sin(v)],g=[-Math.cos(d),0,Math.sin(d)],y=[e.vert(s(v,o,n),m,Oo),e.vert(s(d,o,n),g,Oo),e.vert(s(d,o,r),g,Oo),e.vert(s(v,o,r),m,Oo)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,f=(u,v)=>[t+Math.cos(u)*Math.cos(v)*o,r+Math.sin(v)*o,a-Math.sin(u)*Math.cos(v)*o],l=(u,v)=>[-Math.cos(u)*Math.cos(v),-Math.sin(v),Math.sin(u)*Math.cos(v)];for(let u=0;u<i;u++)for(let v=0;v<c;v++){let d=Math.PI*u/i,m=Math.PI*(u+1)/i,g=Math.PI/2*v/c,y=Math.PI/2*(v+1)/c,b=[e.vert(f(d,g),l(d,g),Ri),e.vert(f(m,g),l(m,g),Ri),e.vert(f(m,y),l(m,y),Ri),e.vert(f(d,y),l(d,y),Ri)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let u=1;u<8;u++){let v=Math.PI*u/8,d=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;d.push(f(v,g).map((y,b)=>y-l(v,g)[b]*.02))}e.tube(d,m=>.035*(1-m*.6),12,6,{mat:()=>Ri})}let p=e.vert([t,n,a],[0,1,0],Oo);for(let u=0;u<i;u++){let v=Math.PI*u/i,d=Math.PI*(u+1)/i;e.tri(p,e.vert(s(v,o,n),[0,1,0],Oo),e.vert(s(d,o,n),[0,1,0],Oo))}qr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,Oo),qr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,Oo);let h=.16;for(let u=0;u<i;u++){let v=Math.PI*u/i,d=Math.PI*(u+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];Vn(e,m(v,o,a+.05),m(d,o,a+.05),m(d,o+h,a+.05),m(v,o+h,a+.05),[0,0,1],Oo),Vn(e,m(v,o+h,a),m(d,o+h,a),m(d,o+h,a+.05),m(v,o+h,a+.05),[Math.cos((v+d)/2),Math.sin((v+d)/2),0],Oo),Vn(e,m(v,o,a),m(d,o,a),m(d,o,a+.05),m(v,o,a+.05),[-Math.cos((v+d)/2),-Math.sin((v+d)/2),0],Oo)}for(let u of[-1,1]){let v=t+u*o,d=t+u*(o+h);qr(e,v,n,a,d,r,a+.05,Oo),qr(e,v-u*.02,r-.12,a,d+u*.06,r,a+.09,Oo)}qr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,Oo),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>Oo})}var G4=Dr.sill+.4,$4=He.z0-.62;function D4(e){Vn(e,[14,0,He.z0-en],[He.x1+en,0,He.z0-en],[He.x1+en,0,He.z1+en],[14,0,He.z1+en],[0,1,0],Oo),e.curMat=Kc,Zc(e,{u0:14+en,u1:He.x1+2*en,w0:He.z0-2*en,w1:He.z0,top:()=>He.spring,holes:Sf.map(f=>({u0:f-Dr.r,u1:f+Dr.r,bottom:Dr.sill,head:n1(f,Dr.r,Dr.spring),noReveal:!0})),mat:Kc,cuts:[He.x1]});for(let f of Sf)F4(e,f);e.save(),e.translate(0,0,He.z1),e.rotateY(Math.PI),e.translate(-(He.x1+2*en),0,-2*en);let t=f=>He.x1+2*en-f;Zc(e,{u0:t(He.x1+2*en),u1:t(13.65),w0:0,w1:2*en,top:()=>He.spring,holes:Ra.map(f=>({u0:t(f+Mt.halfW),u1:t(f-Mt.halfW),bottom:Mt.sill,head:n1(t(f),Mt.halfW,Mt.spring)})),mat:Kc,revealMat:Oo}),e.restore(),e.save(),e.translate(He.x1,0,0),e.rotateY(-Math.PI/2);let o=zs.DOOR,n=He.zc,r=o.r;Zc(e,{u0:He.z0-2*en,u1:He.z1+2*en,w0:-2*en,w1:0,top:f=>f<He.z0||f>He.z1?He.spring:Ls(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:n1(n,r,o.spring)}],mat:Kc,revealMat:Oo}),e.restore(),e.save(),e.translate(14+en,0,0),e.rotateY(-Math.PI/2),Zc(e,{u0:He.z0,u1:He.z1,w0:-0,w1:2*en,top:()=>a1,topStep:.15,holes:[{u0:He.z0,u1:He.z1,bottom:0,head:f=>Ls(f)}],mat:Kc,revealMat:Oo}),e.restore();let a=14+en,i=Math.ceil((He.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let l=a+(He.x1-a)*f/i,p=[];for(let h=0;h<=s;h++){let u=He.z0+(He.z1-He.z0)*h/s,v=Ls(u),d=[0,i1-v,He.zc-u],m=Math.hypot(d[1],d[2]);p.push(e.vert([l,v,u],[0,d[1]/m,d[2]/m],Ri))}c.push(p)}for(let f=0;f<i;f++)for(let l=0;l<s;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Lm(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=He.z0+(He.z1-He.z0)*i/32,c=Ls(s),f=i1-c,l=He.zc-s,p=Math.hypot(f,l),h=[c+f/p*n,s+l/p*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,f/p,l/p]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Vn(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,Oo),Vn(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],Oo),Vn(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],Oo)}}function Ef(e,t,o,n){let i=o,s=o+n*.16;qr(e,t-.28,0,i,t+.28,He.spring-.3,s,Oo),qr(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),Oo),qr(e,t-.28-.05,He.spring-.3,i,t+.28+.05,He.spring-.1,o+n*(.16+.05),Oo),qr(e,t-.28-.1,He.spring-.1,i,t+.28+.1,He.spring,o+n*(.16+.1),Oo)}function q4(e,t){let o=Ls(He.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,He.zc,48,{mat:()=>Ri});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=He.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=Ri,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function H4(e){e.curMat=Oo;for(let[t,o]of[[He.z0,1],[He.z1,-1]])qr(e,14.35,He.spring-.12,t,He.x1,He.spring,t+o*.1,Oo),qr(e,14.35,He.spring-.04,t,He.x1,He.spring+.05,t+o*.18,Oo);for(let[t,o]of[[He.z0,1],[He.z1,-1]])qr(e,14.35,0,t,He.x1,.42,t+o*.12,Oo),qr(e,14.35,.42,t,He.x1,.5,t+o*.07,Oo);for(let t of zm)Lm(e,t,.24,.16),Ef(e,t,He.z0,1),Ef(e,t,He.z1,-1);for(let t of[14.35+.28,He.x1-.28])Lm(e,t,.28,.22),Ef(e,t,He.z0,1),Ef(e,t,He.z1,-1);for(let t of Ra)q4(e,t)}function B4(e){let t=He.z1+en,o=t-.04,n=t+.04,r=(s,c,f,l)=>qr(e,s,c,o,f,l,n,Qc),a=Mt.halfW,i=(s,c,f,l,p,h)=>{let u=(v,d,m)=>[s+d*Math.cos(v),Mt.spring+d*Math.sin(v),m];for(let v=0;v<h;v++){let d=l+(p-l)*v/h,m=l+(p-l)*(v+1)/h;Vn(e,u(d,c,o),u(m,c,o),u(m,f,o),u(d,f,o),[0,0,-1],Qc),Vn(e,u(d,f,n),u(m,f,n),u(m,c,n),u(d,c,n),[0,0,1],Qc)}};for(let s of Ra){let c=s-a,f=s+a;r(c,Mt.sill,c+.07,Mt.spring),r(f-.07,Mt.sill,f,Mt.spring),r(c,Mt.sill,f,Mt.sill+.07),r(c,Mt.spring-.04,f,Mt.spring+.04);for(let p of[-.5,0,.5])r(s+p*a-.022,Mt.sill,s+p*a+.022,Mt.spring);let l=6;for(let p=1;p<l;p++){let h=Mt.sill+(Mt.spring-Mt.sill)*p/l;r(c,h-.02,f,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let p=1;p<6;p++){let h=Math.PI*p/6,u=Math.cos(h),v=Math.sin(h),d=.02,m=(g,y)=>[s+u*g-v*d*y,Mt.spring+v*g+u*d*y];Vn(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],Qc),Vn(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],Qc)}}}function U4(){let e=[],t=He.z1+en;for(let o of Ra){let n=o-Mt.halfW,r=o+Mt.halfW;e.push([n,Mt.sill,t],[r,Mt.sill,t],[r,Mt.spring,t],[n,Mt.sill,t],[r,Mt.spring,t],[n,Mt.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,Mt.spring,t],[o+Mt.halfW*Math.cos(i),Mt.spring+Mt.halfW*Math.sin(i),t],[o+Mt.halfW*Math.cos(s),Mt.spring+Mt.halfW*Math.sin(s),t])}}return e}function Nm(e,t){e.save(),e.translate(He.x1+en,0,He.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function j4(e){Nm(e,()=>{zs.addSurround(e),zs.addFrames(e,"fixed")})}function W4(e){return zs.glassPanes(e||"fixed").map(([o,n,r])=>[He.x1+en-r,n,He.zc-7+o])}function V4(e){D4(e),H4(e),B4(e),j4(e),e.curMat=[0,0,0]}var X4={x:He.x1+en,zLo:He.zc-zs.DOOR.r,zHi:He.zc+zs.DOOR.r},ho=e=>e.toFixed(4);function Y4(){return`
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
		float k = floor((q.x - ${ho(Mt.first)}) / ${ho(Mt.pitch)} + 0.5);
		if (k < 0.0 || k > ${ho(Mt.count-1)}) return 0.0;
		float dx = q.x - (${ho(Mt.first)} + k * ${ho(Mt.pitch)});
		float side = 1.0 - smoothstep(${ho(Mt.halfW)} - soft, ${ho(Mt.halfW)} + soft, abs(dx));
		float sill = smoothstep(${ho(Mt.sill)} - soft, ${ho(Mt.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${ho(Mt.spring)}));
		float head = q.y < ${ho(Mt.spring)} ? 1.0 : 1.0 - smoothstep(${ho(Mt.halfW)} - soft, ${ho(Mt.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${ho(Mt.halfW*.5)}), 0.022, soft));
		float rowH = ${ho((Mt.spring-Mt.sill)/6)};
		float ry = (q.y - ${ho(Mt.sill)}) / rowH;
		cover = max(cover, q.y < ${ho(Mt.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${ho(Mt.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${ho(He.x0)} || p.z < ${ho(He.z0-.1)} || p.z > ${ho(He.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${ho(He.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${ho(He.z1+2*en)} - p.z) / WIN_SKY.z;
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
		${Sf.map(e=>`{ float d = abs(p.x - ${ho(e)}); if (d < best) { best = d; lamp = vec3(${ho(e)}, ${ho(Dr.spring+.55)}, ${ho(He.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${ho(He.z0+1.6)} || p.z < ${ho(He.z0-Dr.r-.1)} || p.x < ${ho(He.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${ho(Dr.r)}, ${ho(Dr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${ho(He.x0-1)}) return 0.0;
		float inC = smoothstep(${ho(He.z0-1.5)}, ${ho(He.z0)}, p.z) * smoothstep(${ho(He.x0-1)}, ${ho(He.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${ho(He.z0)}, ${ho(He.z1)}, p.z);
		return inC * near;
	}`}Rm.exports={wallWithHoles:Zc,windowLightGLSL:Y4,addWing:V4,windowGlass:U4,farDoorGlass:W4,atFarDoor:Nm,FAR_DOOR:X4,vaultY:Ls,C:He,NICHE_X:Sf,NICHE:Dr,NICHE_PLINTH_TOP:G4,NICHE_STATUE_Z:$4,WIN:Mt,winCentres:Ra,piers:zm,PAINTING_X:O4,HEIGHT:a1}});var ga=ve((IS,Im)=>{"use strict";R();var s1=dr(),Yo=8,Cs=.35,k0=14,Rs=4,et={x0:k0+Cs,x1:k0+Cs+2*Rs,z0:5.9-Rs,z1:5.9+Rs,zc:5.9,cx:k0+Cs+Rs,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Yo},oculus:3.3};et.domeTop=et.dome.base+et.dome.r;var Ps={spokes:16,ringE:[.42,.95],bar:.035},Gn={sxz:1.32,sy:1.6,yaw:.6};Gn.crownC=[et.cx,.4+3.4*Gn.sy,et.zc];Gn.crownR=[2.3*Gn.sxz,1.9*Gn.sy,2.3*Gn.sxz];Gn.trunkR=.26*Gn.sxz;Gn.trunkTop=.4+2.2*Gn.sy;var Cm={inner:1.05,outer:1.62,seat:.48,soil:.4},Lf=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),Xn=[0,0,0],Ns=[11,0,0],Af=[10,0,0],Tf=[9,0,0],K4=[5,0,0],c1=[3,0,0];function ui(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function zr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var Q4=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function Z4(e){e.save(),e.translate(k0+Cs,0,0),e.rotateY(-Math.PI/2),s1.wallWithHoles(e,{u0:0,u1:s1.C.z0,w0:0,w1:2*Cs,top:()=>Yo,holes:[{u0:et.zc-et.arch.r,u1:et.zc+et.arch.r,bottom:0,head:Q4(et.zc,et.arch.r,et.arch.spring),step:.05}],mat:Ns,revealMat:Xn,topStep:1}),e.restore();let t=k0-Cs;for(let[i,s]of[[0,et.zc-et.arch.r],[et.zc+et.arch.r,s1.C.z0]])zr(e,t-.12,0,i,t,.42,s,Xn),zr(e,t-.07,.42,i,t,.5,s,Xn);let o=t,n=.24,r=40,a=(i,s,c)=>[c,et.arch.spring+Math.sin(i)*s,et.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;ui(e,a(s,et.arch.r,o-.07),a(c,et.arch.r,o-.07),a(c,et.arch.r+n,o-.07),a(s,et.arch.r+n,o-.07),[-1,0,0],Xn),ui(e,a(s,et.arch.r+n,o),a(c,et.arch.r+n,o),a(c,et.arch.r+n,o-.07),a(s,et.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Xn),ui(e,a(s,et.arch.r,o),a(c,et.arch.r,o),a(c,et.arch.r,o-.07),a(s,et.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Xn)}zr(e,o-.12,et.arch.spring+et.arch.r-.06,et.zc-.17,o,et.arch.spring+et.arch.r+n+.16,et.zc+.17,Xn);for(let i of[-1,1]){let s=et.zc+i*et.arch.r,c=et.zc+i*(et.arch.r+n);zr(e,o-.07,0,s,o,et.arch.spring,c,Xn),zr(e,o-.13,et.arch.spring-.16,s-i*.03,o,et.arch.spring,c+i*.08,Xn),zr(e,o-.12,0,s-i*.03,o,.5,c+i*.06,Xn)}}function J4(e){let{x0:t,x1:o,z0:n,z1:r}=et;ui(e,[k0,0,n],[o,0,n],[o,0,r],[k0,0,r],[0,1,0],Xn),e.curMat=Ns,ui(e,[o,0,n],[o,0,r],[o,Yo,r],[o,Yo,n],[-1,0,0],Ns),ui(e,[t,0,n],[o,0,n],[o,Yo,n],[t,Yo,n],[0,0,1],Ns),ui(e,[o,0,r],[t,0,r],[t,Yo,r],[o,Yo,r],[0,0,-1],Ns),ui(e,[t,0,r],[t,0,n],[t,Yo,n],[t,Yo,r],[1,0,0],Ns),zr(e,o-.12,0,n,o,.42,r,Xn),zr(e,t,0,n,o,.42,n+.12,Xn),zr(e,t,0,r-.12,o,.42,r,Xn),zr(e,o-.2,Yo-.3,n,o,Yo,r,Xn),zr(e,t,Yo-.3,n,o,Yo,n+.2,Xn),zr(e,t,Yo-.3,r-.2,o,Yo,r,Xn),zr(e,t,Yo-.3,n,t+.2,Yo,r,Xn);let a=et.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([et.cx+Math.cos(y)*a,et.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(Rs/Math.max(y,1e-6),Rs/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,E=c(y),k=c(b),L=[et.cx+Math.cos(y)*E,Yo,et.zc+Math.sin(y)*E],C=[et.cx+Math.cos(b)*k,Yo,et.zc+Math.sin(b)*k];ui(e,[s[g][0],Yo,s[g][1]],[s[g+1][0],Yo,s[g+1][1]],C,L,[0,-1,0],Af)}e.lathe([[a+.02,Yo-.18,1],[a-.12,Yo-.18,1],[a-.12,Yo-.06,1],[a-.05,Yo,1],[a,Yo+.02]],et.cx,et.zc,i,{mat:()=>Xn});let f=16,l=(g,y,b)=>[et.cx+Math.cos(g)*Math.cos(y)*b,et.dome.base+Math.sin(y)*b,et.zc+Math.sin(g)*Math.cos(y)*b],p=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/i,E=Math.PI*2*(g+1)/i,k=p*y/f,L=p*(y+1)/f,C=(F,oe)=>[-Math.cos(F)*Math.cos(oe),-Math.sin(oe),-Math.sin(F)*Math.cos(oe)],Y=[e.vert(l(b,k,a),C(b,k),Tf),e.vert(l(E,k,a),C(E,k),Tf),e.vert(l(E,L,a),C(E,L),Tf),e.vert(l(b,L,a),C(b,L),Tf)];e.tri(Y[0],Y[1],Y[2]),e.tri(Y[0],Y[2],Y[3])}for(let g=0;g<Ps.spokes;g++){let y=Math.PI*2*g/Ps.spokes,b=[];for(let E=0;E<=14;E++)b.push(l(y,(p-.06)*E/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>Af})}for(let g of Ps.ringE){let y=Math.cos(g)*(a-.04),b=et.dome.base+Math.sin(g)*(a-.04),E=[];for(let k=0;k<=72;k++){let L=Math.PI*2*k/72;E.push([et.cx+Math.cos(L)*y,b,et.zc+Math.sin(L)*y])}e.tube(E,()=>.035,72,6,{mat:()=>Af})}e.ellipsoid([et.cx,et.dome.base+a-.06,et.zc],[.16,.08,.16],6,12,{mat:()=>Af});let h=.46,u=.55,v=.12,d=(g,y,b,E)=>{zr(e,g,h-.08,y,b,h,E,c1);let k=b-g>E-y?[g+.25,b-.25]:[g+.06,b-.06],L=b-g>E-y?[y+.06,E-.06]:[y+.25,E-.25];zr(e,k[0],0,L[0],k[1],h-.08,L[1],c1)};d(o-v-u,n+1.1,o-v,r-1.1),d(t+1,n+v,o-1.1,n+v+u),d(t+1,r-v-u,o-1.1,r-v);let m=Cm;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],et.cx,et.zc,64,{mat:()=>c1}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],et.cx,et.zc,48,{mat:()=>K4})}function e_(e){Z4(e),J4(e),e.curMat=[0,0,0]}var Fo=e=>e.toFixed(4);function Pm(){let e=et.dome.r,t=Ps.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${Fo(Lf[0])}, ${Fo(Lf[1])}, ${Fo(Lf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Fo(et.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Fo(et.cx)}, ${Fo(et.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Fo(e-.15)} - soft, ${Fo(e-.15)} + soft, d);
		float hw = ${Fo(Ps.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Fo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Fo(Math.PI*2/Ps.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Fo(Gn.crownC[0])}, ${Fo(Gn.crownC[1])}, ${Fo(Gn.crownC[2])});
		vec3 r = vec3(${Fo(Gn.crownR[0])}, ${Fo(Gn.crownR[1])}, ${Fo(Gn.crownR[2])});
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
		float tt = (${Fo(Gn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Fo(et.cx)}, ${Fo(et.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Fo(Gn.trunkR*.7)}, ${Fo(Gn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function t_(){return`
	${Pm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Fo(et.x0-.75)} || p.z < ${Fo(et.z0-.5)} || p.z > ${Fo(et.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Fo(et.x0-1.5)} || p.z < ${Fo(et.z0-1.5)} || p.z > ${Fo(et.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Fo(et.x0-1.2)}, ${Fo(et.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Fo(et.cx)}, ${Fo(et.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Im.exports={addAlcove:e_,alcoveLightGLSL:t_,oculusGLSL:Pm,A:et,BENCH:Cm,SHAFT:Lf,TREE:Gn}});var pr=ve((FS,Fm)=>{"use strict";R();var Ca=0;try{let e=location.search;/[?&]night\b/.test(e)&&(Ca=1)}catch(e){}var di=Ca,l1=0,Om=[],zf={tick(e){let t=l1?Math.min(.1,e-l1):0;if(l1=e,di!==Ca){let o=t/2.4;di=Ca>di?Math.min(Ca,di+o):Math.max(Ca,di-o)}return zf.night},get night(){return di*di*(3-2*di)},get isNight(){return Ca===1},get settled(){return di===Ca},set(e){Ca=e?1:0,Om.forEach(t=>t(Ca))},toggle(){zf.set(!Ca)},onChange(e){Om.push(e)}};zf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;Fm.exports=zf});var Pi=ve(($S,tl)=>{"use strict";R();var f1=pr(),{C:h1}=dr(),{A:Nf,BENCH:Jc}=ga(),$n=Math.PI,o_=[18,29,40],Rf=.575,Ci=[],el=(e,t,o,n,r,a,i)=>Ci.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));o_.forEach(e=>{el(1.25+Rf+.48,3.25,e,[1,0],.48,Rf,{s:1.2}),el(12.75-Rf-.48,3.25,e,[-1,0],.48,Rf,{s:1.2})});[3,11].forEach(e=>el(e,3.45,h1.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var n_=[14.63,19.63,24.03,28.43,32.83,h1.x1-.28];n_.forEach(e=>el(e,3.15,h1.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>el(.35+.44,2.75,e,[1,0],.44,99));{let e=(Jc.inner+Jc.outer)/2,t=Math.atan2(-1.12,-.98);Ci.push({x:Nf.cx+Math.cos(t)*e,y:Jc.seat+.155,z:Nf.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[Nf.cx,Nf.zc,Jc.outer+.07,Jc.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var u1=.13,Cf=.21,Yn=u1/Math.cos($n/6),So=e=>e.toFixed(4);function Gm(e){let o=(e||Ci.map((n,r)=>r)).map(n=>{let r=Ci[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${So(r.ring[3]-.03)}) {
					float tt = ${So(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${So(r.x)}, ${So(r.z)}) + D.xz * tt - vec2(${So(r.ring[0])}, ${So(r.ring[1])});
					T *= smoothstep(${So(r.ring[2]-.02)}, ${So(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${So(r.o[0])}, ${So(r.o[1])}));
					if (behind > ${So(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${So(a)}, ${So(i)}))) * ${So(r.back)} / behind;
						T *= smoothstep(${So(r.hw-.04)}, ${So(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${So(r.x)}, ${So(r.y)}, ${So(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${So(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${So(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${So(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${So(n*1.7)}) + 0.04 * sin(time * 15.3 + ${So(n*2.9)}) * sin(time * 1.9 + ${So(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${So(1/(r.s*r.s))}) * (1.0 - smoothstep(${So(r.range*.6)}, ${So(r.range)}, d));
					sum += ${So(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${So($n/6)}, ${So($n/3)}) - ${So($n/6)};
		float U = tan(t) / ${So(Math.tan($n/6))};
		float V = (q.y / h) * (${So(u1/Cf)} / cos(t));
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
	}`}var tn=0,r_=1;function a_(){let e=[],t=[],o=[],n=[],r=[],a=(u,v,d,m)=>(e.push(u[0],u[1],u[2]),t.push(v[0],v[1],v[2]),o.push(d),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(u,v)=>[u[0]-v[0],u[1]-v[1],u[2]-v[2]],s=(u,v)=>[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],c=u=>{let v=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/v,u[1]/v,u[2]/v]};function f(u,v,d,m,g,y){let b=c(s(i(v,u),i(m,u))),E=a(u,b,g,[0,0]),k=a(v,b,g,[1,0]),L=a(d,b,g,[1,1]),C=a(m,b,g,[0,1]);r.push(E,k,L,E,L,C),y&&r.push(E,L,k,E,C,L)}function l(u,v,d){for(let y=0;y<u.length;y++){let b=u[Math.max(0,y-1)],E=u[Math.min(u.length-1,y+1)],k=c(i(E,b)),L=Math.abs(k[1])>.9?[1,0,0]:[0,1,0],C=c(s(k,L)),Y=s(C,k),F=typeof v=="function"?v(y/(u.length-1)):v;for(let oe=0;oe<=6;oe++){let D=oe/6*$n*2,ne=Math.cos(D),q=Math.sin(D),V=[C[0]*ne+Y[0]*q,C[1]*ne+Y[1]*q,C[2]*ne+Y[2]*q];a([u[y][0]+V[0]*F,u[y][1]+V[1]*F,u[y][2]+V[2]*F],V,d)}}let g=e.length/3-u.length*7;for(let y=0;y<u.length-1;y++)for(let b=0;b<6;b++){let E=g+y*7+b,k=E+6+1;r.push(E,k,E+1,E+1,k,k+1)}}function p(u,v,d,m,g,y,b,E,k){let L=(C,Y,F)=>{let oe=y+$n/6+F*$n/3;return[u[0]+Math.cos(oe)*C,Y,u[2]+Math.sin(oe)*C]};for(let C=0;C<6;C++)f(L(m,v,C+1),L(m,v,C),L(g,d,C),L(g,d,C+1),b);if(E&&g>0)for(let C=0;C<6;C++){let Y=a([u[0],d,u[2]],[0,1,0],b),F=a(L(g,d,C),[0,1,0],b),oe=a(L(g,d,C+1),[0,1,0],b);r.push(Y,oe,F)}if(k&&m>0)for(let C=0;C<6;C++){let Y=a([u[0],v,u[2]],[0,-1,0],b),F=a(L(m,v,C),[0,-1,0],b),oe=a(L(m,v,C+1),[0,-1,0],b);r.push(Y,F,oe)}}function h(u,v,d,m,g,y,b){let E=[];for(let L=0;L<=18;L++){let C=L/18,Y=(b||0)+C*m*$n*2,F=d*(1-.75*C);E.push([u[0]+v[0]*Math.cos(Y)*F,u[1]+Math.sin(Y)*F,u[2]+v[2]*Math.cos(Y)*F])}l(E,g,y)}return Ci.forEach(u=>{let v=u.s,d=Math.atan2(u.o[1],u.o[0]),m=[u.x,u.y,u.z],g=(E,k,L)=>[u.x+u.o[0]*E-u.o[1]*(L||0),u.y+k,u.z+u.o[1]*E+u.o[0]*(L||0)],y=u.y-Cf*v,b=u.y+Cf*v;for(let E=0;E<6;E++){let k=d+$n/6+E*$n/3,L=k+$n/3,C=Yn*v*.97,Y=[u.x+Math.cos(k)*C,y,u.z+Math.sin(k)*C],F=[u.x+Math.cos(L)*C,y,u.z+Math.sin(L)*C];f(F,Y,[Y[0],b,Y[2]],[F[0],b,F[2]],r_,!0)}for(let E=0;E<6;E++){let k=d+$n/6+E*$n/3,L=Yn*v;l([[u.x+Math.cos(k)*L,y-.02*v,u.z+Math.sin(k)*L],[u.x+Math.cos(k)*L,b+.02*v,u.z+Math.sin(k)*L]],.011*v,tn)}p(m,y-.035*v,y,Yn*v*1.12,Yn*v*1.12,d,tn,!0,!0),p(m,y-.1*v,y-.035*v,Yn*v*.55,Yn*v*1,d,tn,!1,!0),p(m,y-.17*v,y-.1*v,0,Yn*v*.55,d,tn,!1,!1);for(let E=0;E<6;E++){let k=d+E*$n/3,L=u1*v*1.06,C=[u.x+Math.cos(k)*L,y-.06*v,u.z+Math.sin(k)*L];h(C,[-Math.sin(k),0,Math.cos(k)],.03*v,.85,.004*v,tn,.3)}p(m,b,b+.03*v,Yn*v*1.14,Yn*v*1.14,d,tn,!1,!0),p(m,b+.03*v,b+.2*v,Yn*v*1.14,Yn*v*.32,d,tn,!1,!1),p(m,b+.2*v,b+.27*v,Yn*v*.34,Yn*v*.34,d,tn,!1,!1),p(m,b+.27*v,b+.37*v,Yn*v*.42,0,d,tn,!1,!0),l([[u.x,b+.36*v,u.z],[u.x,b+.47*v,u.z]],E=>.01*v*(1-.7*E),tn),p([u.x,0,u.z],b+.44*v,b+.47*v,.018*v,0,d,tn,!1,!0);for(let E=0;E<6;E++){let k=d+$n/6+E*$n/3,L=Yn*v*1.14,C=[u.x+Math.cos(k)*L,b+.03*v,u.z+Math.sin(k)*L];l([C,[C[0],C[1]+.09*v,C[2]]],Y=>.008*v*(1-.8*Y),tn),p([C[0],0,C[2]],C[1]+.035*v,C[1]+.06*v,.014*v,.014*v,k,tn,!0,!0)}if(u.mount==="wall"){let E=u.back,k=y-.32,L=g(-E,0,0);((D,ne,q)=>{let V=[u.o[0],0,u.o[1]],Le=[-u.o[1],0,u.o[0]],je=(ke,dt,Gt)=>[L[0]+Le[0]*ke+V[0]*Gt,dt,L[2]+Le[2]*ke+V[2]*Gt],ze=.03,me=.065;f(je(-q,D,me),je(q,D,me),je(q,ne,me),je(-q,ne,me),tn,!0),f(je(q,D,ze),je(q,D,me),je(q,ne,me),je(q,ne,ze),tn,!0),f(je(-q,D,me),je(-q,D,ze),je(-q,ne,ze),je(-q,ne,me),tn,!0),f(je(-q,ne,me),je(q,ne,me),je(q,ne,ze),je(-q,ne,ze),tn,!0),f(je(-q,D,ze),je(q,D,ze),je(q,D,me),je(-q,D,me),tn,!0),p([L[0]+V[0]*me,0,L[2]+V[2]*me],ne,ne+.05,q*.6,0,d,tn,!1,!0),p([L[0]+V[0]*me,0,L[2]+V[2]*me],D-.05,D,0,q*.6,d,tn,!1,!1)})(k-.2,k+.2,.07);let Y=[];for(let D=0;D<=14;D++){let ne=D/14,q=-E+.05+ne*(E-.05),V=k+.04+(y-.17*v-k-.04)*Math.pow(ne,2.2);Y.push(g(q,V-u.y,0))}l(Y,D=>.022*(1-.3*D),tn);let F=[];for(let D=0;D<=10;D++){let ne=D/10;F.push(g(-E+.05+ne*E*.6,k-.14+ne*.16+.05*Math.sin(ne*$n)-u.y,0))}l(F,.009,tn);let oe=F[F.length-1];h([oe[0]-u.o[0]*.03,oe[1]+.02,oe[2]-u.o[1]*.03],[u.o[0],0,u.o[1]],.045,1.1,.007,tn,-.4),[.3,.55].forEach(D=>{let ne=Y[Math.round(D*14)],q=F[Math.round(D/.62*10)]||F[10];l([ne,q],.006,tn)}),[-1,1].forEach(D=>{let ne=g(-.05,-Cf*v-.2*v,0);h([ne[0]-u.o[1]*D*.05,ne[1],ne[2]+u.o[0]*D*.05],[-u.o[1]*D,0,u.o[0]*D],.05*v,.9,.006,tn,$n)})}else for(let E=0;E<3;E++){let k=d+E*$n*2/3,L=[u.x+Math.cos(k)*Yn*v*.7,y-.035*v,u.z+Math.sin(k)*Yn*v*.7],C=[u.x+Math.cos(k)*Yn*v*1.25,y-.17*v,u.z+Math.sin(k)*Yn*v*1.25];l([L,C],.012*v,tn)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}tl.exports=e=>{let t=a_(),o=e({vert:`
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
		${Gm()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>f1.night}}),n=[],r=[];Ci.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>f1.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),f1.night>.01&&a()}};tl.exports.lanternGLSL=Gm;tl.exports.LANTERNS=Ci;tl.exports.TREE_LANTERN=[Ci.length-1]});var Fi=ve((qS,Hr)=>{"use strict";R();var i_=pr(),zo=Math.PI,Dn=e=>(+e).toFixed(4),s_=e=>`vec3(${Dn(e[0])}, ${Dn(e[1])}, ${Dn(e[2])})`,Tt={x:-7,z:44.5},jt=5.2,ir=15,nt={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},Xa={z0:42.2,z1:46.8,top:6.3,x:.35},Of=[Tt.x-Math.sqrt(jt*jt-3.05*3.05),0,0],kn={x0:-2.05+Of[0],x1:Of[0],z0:41.45,z1:47.55,top:4.3},d1=[[kn.x1+.05,2.35,kn.z0-.45],[kn.x1+.05,2.35,kn.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-Tt.z,e-Tt.x);return[Tt.x+Math.cos(n)*(jt-.16),t,Tt.z+Math.sin(n)*(jt-.16)]}),Mo={ri:3.4,ro:jt,a0:-35*zo/180,rise:.1836,step:3.6*zo/180,n:88,thick:.36};Mo.k=Mo.rise/Mo.step;var Nr=e=>Mo.a0-e,Oi=e=>e*Mo.k,nn={x:Tt.x+.1,z:Tt.z-.15,yaw:-zo/2,scale:1.3},pi=nn.scale/1.1,ol={keyX0:nn.x-.524*pi,keyX1:nn.x+.491*pi,keyTop:.647*pi,keyFront:nn.z+.808*pi,keyBack:nn.z+.72*pi,stoolX:nn.x-.041*pi,stoolZ:nn.z+1.122*pi,stoolFront:nn.z+.96*pi,stoolTop:.37*pi,heading:zo},If=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function Dm(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function c_(e,t){let o=1e9;for(let n=0;n<If.length-1;n++){let[r,a]=If[n],[i,s]=If[n+1],c=i-r,f=s-a,l=Math.max(0,Math.min(1,((e-r)*c+(t-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(e-r-c*l,t-a-f*l))}return o}var Pf=e=>nt.spring+Math.sqrt(Math.max(0,nt.r*nt.r-(e-nt.zc)*(e-nt.zc))),Ii=e=>Tt.x+Math.sqrt(Math.max(0,jt*jt-(e-Tt.z)*(e-Tt.z)));function Is(e,t){return Math.hypot(e-Tt.x,t-Tt.z)<jt||e<=0&&e>Tt.x&&t>nt.z0&&t<nt.z1||e>kn.x0&&e<kn.x1&&t>kn.z0&&t<kn.z1}function l_(e,t){if(Math.hypot(e-Tt.x,t-Tt.z)<Mo.ri-.05)return 99;let n=Math.atan2(t-Tt.z,e-Tt.x),r=Mo.a0-n;for(;r<0;)r+=2*zo;for(;r>=2*zo;)r-=2*zo;return r>Mo.n*Mo.step?99:Oi(r)-Mo.thick}function f_(){let e=[],t=Dm(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let f=e[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-i)<s+f[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-nn.x,c=i-nn.z,f=Math.cos(nn.yaw),l=Math.sin(nn.yaw),p=(f*s-l*c)/nn.scale,h=(l*s+f*c)/nn.scale;return p>-1.05&&p<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(jt-1.45),s=t()*2*zo,c=Tt.x+Math.cos(s)*i,f=Tt.z+Math.sin(s)*i;if(!Is(c,f)||i>jt-.18||n(c,f)||c_(c,f)<.62||l_(c,f)<2.3||c<kn.x1+.9)continue;let l=.022+t()*.02;if(o(c,f,l))continue;let p=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,f,l,p,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*Mo.step,f=Nr(c),l=Mo.ri+.55+t()*(Mo.ro-Mo.ri-.75),p=.022+t()*.016;e.push([Tt.x+Math.cos(f)*l,(a+1)*Mo.rise,Tt.z+Math.sin(f)*l,p,.05+t()*.14,t()*100])}}for(let a of d1)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[kn.z0-.35,kn.z1+.35])for(let i=0;i<9;i++){let s=kn.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-Tt.x,c-Tt.z)>jt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function h_(e){let o=Dm(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,f=1e9;n.forEach((l,p)=>{let h=(s[0]-l[0])**2+(s[1]-l[1])**2*4+(s[2]-l[2])**2;h<f&&(f=h,c=p)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var p1=f_(),$m=h_(p1.filter(e=>e[1]<2||e[1]>2.5)).concat(d1.map(e=>[e[0],e[1]+.35,e[2],.035]));function qm(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${$m.map((t,o)=>`
		{
			vec3 d = ${s_(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Dn(5.3+o*.71)} + ${Dn(o*1.9)}) + 0.06 * sin(time * ${Dn(11.7+o*1.3)} + ${Dn(o*.7)});
			float w = ${Dn(t[3]*$m.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Dn(ir)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Dn(Tt.x)}, ${Dn(ir)}, ${Dn(Tt.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Dn(ol.stoolX)}, ${Dn(ol.keyFront+.1)})));
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
	}`}var $t={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function Hm(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),f=e.v(o,a,i,s&&s[1]),l=e.v(n,a,i,s&&s[2]),p=e.v(r,a,i,s&&s[3]);e.idx.push(c,f,l,c,l,p)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function u_(){let e=Hm(),t=(n,r,a)=>[Tt.x+Math.cos(n)*r,a,Tt.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>kn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,f=a+.2;if(!(Is(i,c)||Is(s,c)||Is(i,f)||Is(s,f)||Is((i+s)/2,(c+f)/2)))continue;let l=c,p=f;i>Ii(nt.z0)-.3&&(l=Math.max(l,nt.z0),p=Math.min(p,nt.z1),p<=l)||e.quad([i,0,l],[i,0,p],[s,0,p],[s,0,l],[0,1,0],$t.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*zo,i=(r+1)/360*2*zo,s=(a+i)/2,c=t(s,jt,0),f=0;c[0]>Tt.x&&c[2]>nt.z0-.02&&c[2]<nt.z1+.02&&(f=Math.max(Pf(Math.min(Math.max(t(a,jt,0)[2],nt.z0),nt.z1)),Pf(Math.min(Math.max(t(i,jt,0)[2],nt.z0),nt.z1)))),c[0]<Tt.x&&c[2]>kn.z0-.02&&c[2]<kn.z1+.02&&(f=kn.top);let l=a*jt,p=i*jt,h=o(a).map(d=>-d),u=o(i).map(d=>-d),v=[f];for(let d=Math.ceil(f/2.5)*2.5;d<ir;d+=2.5)d>f+.01&&v.push(d);v.push(ir);for(let d=0;d<v.length-1;d++){let m=v[d],g=v[d+1],y=e.v(t(a,jt,m),h,$t.WALL,[l,m]),b=e.v(t(i,jt,m),u,$t.WALL,[p,m]),E=e.v(t(i,jt,g),u,$t.WALL,[p,g]),k=e.v(t(a,jt,g),h,$t.WALL,[l,g]);e.idx.push(y,b,E,y,E,k)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*zo,f=(s+1)/360*2*zo,l=(c+f)/2,p=t(l,jt,0);if(r<1&&(p[0]>Tt.x&&p[2]>nt.z0&&p[2]<nt.z1||p[0]<Tt.x&&p[2]>kn.z0&&p[2]<kn.z1))continue;let h=jt-i;e.quad(t(c,h,r),t(f,h,r),t(f,h,r+a),t(c,h,r+a),o(l).map(u=>-u),$t.WALL,[[c*jt,r+100],[f*jt,r+100],[f*jt,r+a+100],[c*jt,r+a+100]]),e.quad(t(c,h,r+a),t(f,h,r+a),t(f,jt,r+a),t(c,jt,r+a),[0,1,0],$t.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,jt,r),t(f,jt,r),t(f,h,r),t(c,h,r),[0,-1,0],$t.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=Xa.x;for(let[a,i]of[[nt.z0,1],[nt.z1,-1]]){let s=Ii(a);e.quad([n,0,a],[s,0,a],[s,nt.spring,a],[n,nt.spring,a],[0,0,i],$t.WALL,[[n,0],[s,0],[s,nt.spring],[n,nt.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*zo,s=(a+1)/r*zo,c=nt.zc-Math.cos(i)*nt.r,f=nt.zc-Math.cos(s)*nt.r,l=nt.spring+Math.sin(i)*nt.r,p=nt.spring+Math.sin(s)*nt.r,h=[0,-Math.sin(i),Math.cos(i)],u=[0,-Math.sin(s),Math.cos(s)],v=e.v([n,l,c],h,$t.WALL,[n,i*nt.r]),d=e.v([Ii(c),l,c],h,$t.WALL,[Ii(c),i*nt.r]),m=e.v([Ii(f),p,f],u,$t.WALL,[Ii(f),s*nt.r]),g=e.v([n,p,f],u,$t.WALL,[n,s*nt.r]);e.idx.push(v,d,m,v,m,g)}}{let n=Xa.x,r=.05;for(let f=Xa.z0;f<Xa.z1-1e-6;f+=r){let l=f,p=Math.min(Xa.z1,f+r),u=(v=>v>nt.z0&&v<nt.z1)((l+p)/2)?Math.max(Pf(l),Pf(p)):0;e.quad([n,u,l],[n,u,p],[n,Xa.top,p],[n,Xa.top,l],[1,0,0],$t.HALLSTONE,[[l,u],[p,u],[p,Xa.top],[l,Xa.top]])}let a=.32,i=.06,s=n+i,c=36;for(let f=0;f<c;f++){let l=f/c*zo,p=(f+1)/c*zo,h=(g,y)=>[s,nt.spring+Math.sin(g)*y,nt.zc-Math.cos(g)*y],u=nt.r,v=nt.r+a;e.quad(h(l,u),h(p,u),h(p,v),h(l,v),[1,0,0],$t.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let d=(g,y,b)=>[b,nt.spring+Math.sin(g)*y,nt.zc-Math.cos(g)*y],m=[0,Math.sin((l+p)/2),-Math.cos((l+p)/2)];e.quad(d(l,v,n),d(p,v,n),d(p,v,s),d(l,v,s),m,$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(d(l,u,n),d(p,u,n),d(p,u,s),d(l,u,s),m.map(g=>-g),$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,p]of[[nt.z0-a,nt.z0,-1],[nt.z1,nt.z1+a,1]]){e.quad([s,0,f],[s,0,l],[s,nt.spring,l],[s,nt.spring,f],[1,0,0],$t.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=p<0?f:l,u=p<0?l:f;e.quad([n,0,h],[s,0,h],[s,nt.spring,h],[n,nt.spring,h],[0,0,p],$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,u],[s,0,u],[s,nt.spring,u],[n,nt.spring,u],[0,0,-p],$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let v=nt.spring-.16,d=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;e.quad([n+m,v,g],[n+m,v,y],[n+m,v+d,y],[n+m,v+d,g],[1,0,0],$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v+d,g],[n+m,v+d,g],[n+m,v+d,y],[n,v+d,y],[0,1,0],$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v,g],[n,v,y],[n+m,v,y],[n+m,v,g],[0,-1,0],$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,v,b],[n+m,v,b],[n+m,v+d,b],[n,v+d,b],[0,0,b===g?-1:1],$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=nt.spring+nt.r-.05,l=nt.spring+nt.r+a+.12,p=.16,h=.22,u=s+.04;e.quad([u,f,nt.zc-p],[u,f,nt.zc+p],[u,l,nt.zc+h],[u,l,nt.zc-h],[1,0,0],$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let v of[-1,1])e.quad([n,f,nt.zc+v*p],[u,f,nt.zc+v*p],[u,l,nt.zc+v*h],[n,l,nt.zc+v*h],[0,0,v],$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,l,nt.zc-h],[u,l,nt.zc-h],[u,l,nt.zc+h],[n,l,nt.zc+h],[0,1,0],$t.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=kn;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],$t.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[f,l]of[[a,1],[i,-1]]){let p=Tt.x-Math.sqrt(jt*jt-(f-Tt.z)*(f-Tt.z));e.quad([n,0,f],[p,0,f],[p,s,f],[n,s,f],[0,0,l],$t.WALL,[[n,0],[p,0],[p,s],[n,s]])}let c=24;for(let f=0;f<c;f++){let l=a+(i-a)*f/c,p=a+(i-a)*(f+1)/c,h=Tt.x-Math.sqrt(jt*jt-(l-Tt.z)**2),u=Tt.x-Math.sqrt(jt*jt-(p-Tt.z)**2);e.quad([n,s,l],[h,s,l],[u,s,p],[n,s,p],[0,-1,0],$t.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(i-a)*f/c,p=a+(i-a)*(f+1)/c,h=Tt.x-Math.sqrt(jt*jt-(l-Tt.z)**2)+.05,u=Tt.x-Math.sqrt(jt*jt-(p-Tt.z)**2)+.05;e.quad([h,s-.3,l],[u,s-.3,p],[u,s,p],[h,s,l],[1,0,0],$t.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,jt];for(let a=0;a<120;a++){let i=a/120*2*zo,s=(a+1)/120*2*zo,c=(i+s)/2;c>zo&&(c-=2*zo);for(let f=0;f<r.length-1;f++){let l=r[f],p=r[f+1],h=c*180/zo;l>=3.3&&h>8&&h<85||e.quad(t(i,l,ir),t(i,p,ir),t(s,p,ir),t(s,l,ir),[0,-1,0],$t.CEIL,[[i*l,l],[i*p,p],[s*p,p],[s*l,l]])}e.quad(t(i,1.15,ir),t(s,1.15,ir),t(s,1.15,ir+.7),t(i,1.15,ir+.7),o(c).map(f=>-f),$t.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([Tt.x,ir+.7,Tt.z],t(s,1.15,ir+.7),t(i,1.15,ir+.7),[0,-1,0],$t.OCULUS)}}{let n=Mo.ri,r=Mo.ro,a=Mo.n*Mo.step;for(let c=0;c<Mo.n;c++){let f=c*Mo.step,l=(c+1)*Mo.step,p=Nr(f),h=Nr(l),u=(c+1)*Mo.rise,v=c*Mo.rise,d=2;for(let y=0;y<d;y++){let b=p+(h-p)*y/d-(y===0?.004:0),E=p+(h-p)*(y+1)/d;e.quad(t(b,n,u),t(b,r,u),t(E,r,u),t(E,n,u),[0,1,0],$t.STEP,[[n*b,c],[r*b,c],[r*E,c],[n*E,c]])}let m=[-Math.sin(p),0,Math.cos(p)],g=p-.004;e.quad(t(g,n,v),t(g,r,v),t(g,r,u),t(g,n,u),m,$t.STEP,[[n*p,c+.5],[r*p,c+.5],[r*p,c+.5],[n*p,c+.5]]),e.quad(t(p,n,Oi(f)+.06),t(h,n,Oi(l)+.06),t(h,n,u),t(g,n,u),o((p+h)/2).map(y=>-y),$t.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*zo/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let f=c/i*a,l=(c+1)/i*a,p=Nr(f),h=Nr(l),u=Oi(f),v=Oi(l),d=u-Mo.thick,m=v-Mo.thick,g=o(p).map(C=>-C),y=o(h).map(C=>-C),b=e.v(t(p,n,d),g,$t.STRING,[f*n,0]),E=e.v(t(h,n,m),y,$t.STRING,[l*n,0]),k=e.v(t(h,n,v+.06),y,$t.STRING,[l*n,1]),L=e.v(t(p,n,u+.06),g,$t.STRING,[f*n,1]);e.idx.push(b,E,k,b,k,L);for(let C=0;C<s.length-1;C++){let Y=s[C],F=s[C+1],oe=D=>{let ne=o(D);return[-ne[0]*.12,-.99,-ne[2]*.12]};e.quad(t(p,Y,d),t(p,F,d),t(h,F,m),t(h,Y,m),oe((p+h)/2),$t.SOFFIT,[[f*Y,Y],[f*F,F],[l*F,F],[l*Y,Y]])}}}return e}function d_(){let e=Hm(),t=Mo.ri+.045,o=Mo.n*Mo.step,n=Math.ceil(o/(.8*zo/180)),r=.92,a=(c,f,l)=>[Tt.x+Math.cos(c)*f,l,Tt.z+Math.sin(c)*f],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,p=Nr(f),h=Nr(l),u=Oi(f)+.06,v=Oi(l)+.06,d=i(p).map(C=>-C),m=i(h).map(C=>-C),g=f*t,y=l*t,b=e.v(a(p,t,u),d,$t.RAILING,[g,0]),E=e.v(a(h,t,v),m,$t.RAILING,[y,0]),k=e.v(a(h,t,v+r),m,$t.RAILING,[y,r]),L=e.v(a(p,t,u+r),d,$t.RAILING,[g,r]);e.idx.push(b,E,k,b,k,L)}((c,f,l,p)=>{let u=d=>{let m=Nr(d),g=Oi(d)+.06+f,y=a(m,t+c,g),b=i(m),E=[];for(let k=0;k<8;k++){let L=k/8*2*zo,C=[b[0]*Math.cos(L),Math.sin(L),b[2]*Math.cos(L)];E.push([[y[0]+C[0]*l,y[1]+C[1]*l,y[2]+C[2]*l],C])}return E},v=u(0);for(let d=1;d<=n;d++){let m=u(d/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(v[g][0],v[g][1],p),E=e.v(m[g][0],m[g][1],p),k=e.v(m[y][0],m[y][1],p),L=e.v(v[y][0],v[y][1],p);e.idx.push(b,E,k,b,k,L)}v=m}})(0,r+.02,.028,$t.IRON);for(let c of d1){let f=Math.atan2(c[2]-Tt.z,c[0]-Tt.x),l=[Math.cos(f),0,Math.sin(f)],p=12;for(let d=0;d<p;d++){let m=d/p*2*zo,g=(d+1)/p*2*zo,y=(b,E,k)=>[c[0]+Math.cos(b)*E,k,c[2]+Math.sin(b)*E];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],$t.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],$t.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],u=[-l[2],0,l[0]],v=.018;e.quad([h[0]-u[0]*v,h[1],h[2]-u[2]*v],[h[0]+u[0]*v,h[1],h[2]+u[2]*v],[c[0]+u[0]*v,c[1]-.05,c[2]+u[2]*v],[c[0]-u[0]*v,c[1]-.05,c[2]-u[2]*v],[-l[0],.5,-l[2]],$t.IRON)}{let c=Nr(0),f=a(c,t,0),l=10;for(let p=0;p<l;p++){let h=p/l*2*zo,u=(p+1)/l*2*zo,v=(d,m,g)=>[f[0]+Math.cos(d)*m,g,f[2]+Math.sin(d)*m];e.quad(v(h,.035,0),v(u,.035,0),v(u,.035,r+.1),v(h,.035,r+.1),[Math.cos((h+u)/2),0,Math.sin((h+u)/2)],$t.IRON),e.quad(v(h,.06,r+.1),v(u,.06,r+.1),v(u,.03,r+.2),v(h,.03,r+.2),[Math.cos((h+u)/2)*.8,.6,Math.sin((h+u)/2)*.8],$t.IRON)}}return e}function p_(){let e=[],t=[],o=[],n=[];for(let a of p1){let[i,s,c,f,l,p]=a,h=e.length/3;for(let v=0;v<=7;v++){let d=v/7*2*zo+p,m=Math.cos(d),g=Math.sin(d);e.push(i+m*f,s,c+g*f,i+m*f,s+l,c+g*f),t.push(m,0,g,m,0,g),o.push(0,l,p,1,l,p)}for(let v=0;v<7;v++){let d=h+v*2;n.push(d,d+2,d+3,d,d+3,d+1)}let u=e.length/3;e.push(i,s+l-.006,c),t.push(0,1,0),o.push(2,l,p);for(let v=0;v<7;v++){let d=v/7*2*zo+p;e.push(i+Math.cos(d)*f,s+l,c+Math.sin(d)*f),t.push(0,1,0),o.push(1,l,p)}for(let v=0;v<7;v++)n.push(u,u+1+v,u+1+(v+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function v_(){let e=[],t=[],o=[],n=[];for(let r of p1){let[a,i,s,,c,f]=r,l=e.length/3;for(let p of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(p[0],p[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:e,corner:t,ph:o,idx:n}}function m_(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let f=new Int8Array(e,i,o*3);i+=o*3;let l=new Uint8Array(e,i,o),p=new Float32Array(o*3),h=new Float32Array(o*3),u=new Float32Array(o),v=Math.cos(nn.yaw),d=Math.sin(nn.yaw),m=nn.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,E=(r[2]+s[g*3+2]/65535*a[2])*m;p[g*3]=nn.x+v*y+d*E,p[g*3+1]=b,p[g*3+2]=nn.z-d*y+v*E;let k=f[g*3]/127,L=f[g*3+1]/127,C=f[g*3+2]/127;h[g*3]=v*k+d*C,h[g*3+1]=L,h[g*3+2]=-d*k+v*C,u[g]=l[g]}return{pos:p,nrm:h,mat:u,idx:new Uint32Array(c)}}function g_(){let e=[],t=(p,h)=>[Tt.x+Math.cos(p)*h,Tt.z+Math.sin(p)*h];e.push([[0,nt.z0],[Ii(nt.z0),nt.z0]]),e.push([[Ii(nt.z1),nt.z1],[0,nt.z1]]);let o=Math.asin((nt.z1-Tt.z)/jt),n=72;for(let p=0;p<n;p++){let h=o+p/n*(2*zo-2*o),u=o+(p+1)/n*(2*zo-2*o);e.push([t(h,jt-.25),t(u,jt-.25)])}let r=Of[0]-.55+.35;e.push([[r,kn.z0],[r,kn.z1]]);let a=2.4/Mo.k,i=12;for(let p=0;p<i;p++){let h=Nr(p/i*a),u=Nr((p+1)/i*a);e.push([t(h,Mo.ri-.2),t(u,Mo.ri-.2)])}e.push([t(Nr(0),Mo.ri-.2),t(Nr(0),jt)]),e.push([t(Nr(a),Mo.ri-.2),t(Nr(a),jt)]);let s=Math.cos(nn.yaw),c=Math.sin(nn.yaw),f=nn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([p,h])=>[nn.x+(s*p+c*h)*f,nn.z+(-c*p+s*h)*f]);for(let p=0;p<4;p++)e.push([l[p],l[(p+1)%4]]);return e}Hr.exports=e=>{let t=u_(),o=d_(),n=p_(),r=v_(),a=Pi(),i=`
	precision highp float;
	${i_.GLSL}
	uniform float time;
	${qm()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Dn(ir)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Dn(Tt.x)}, ${Dn(Tt.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Dn((Mo.ri+Mo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Dn(Tt.x)}, ${Dn(Tt.z)});
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=m_(m);h=e({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let u=(()=>{let m=[],g=[],y=[],b=[],k=[Tt.x,ir-.3,Tt.z],L=[ol.stoolX,.02,ol.keyFront+.1],C=1.25,Y=2.35;for(let F=0;F<=40;F++){let oe=F/40*2*zo,D=Math.cos(oe),ne=Math.sin(oe);m.push(k[0]+D*C,k[1],k[2]+ne*C,L[0]+D*Y,L[1],L[2]+ne*Y),g.push(D,.08,ne,D,.08,ne),y.push(1,0)}for(let F=0;F<40;F++){let oe=F*2;b.push(oe,oe+1,oe+3,oe,oe+3,oe+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),v=e({vert:`
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
		}`,attributes:{position:u.pos,normal:u.nrm,hh:u.hh},elements:u.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function d(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(v(),p({halo:1}),p({halo:0}))}return d};Hr.exports.C=Tt;Hr.exports.R=jt;Hr.exports.PASS=nt;Hr.exports.SURR=Xa;Hr.exports.OFF=Of;Hr.exports.BAY=kn;Hr.exports.PATH=If;Hr.exports.PIANO=nn;Hr.exports.PLAY=ol;Hr.exports.TOP=ir;Hr.exports.roomGLSL=qm;Hr.exports.segments=g_});var Zm=ve((BS,Qm)=>{"use strict";R();var x_=b0(),{addFlutedColumn:Bm,addStatue:y_,addPlant:b_}=gm(),Um=Ni(),w_=Ts(),Pa=dr(),__=ga(),Fs=Fi(),uo=14,Sn=Pa.C.hallEnd+.35,qo=8,Eo=.35,v1=1.15,m1=1.15,g1=[18,29,40],M_=[[[0,0],[0,Fs.PASS.z0]],[[0,Fs.PASS.z1],[0,Sn]],[[uo,Sn],[uo,0]],[[0,0],[uo,0]],[[uo,Sn],[0,Sn]]],Xm=[];for(let e of g1)for(let t of[1.25,uo-1.25]){let o=v1/2,n=m1/2;Xm.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var Gf=12,Ym=2.95,Km=.62,qf=Ym+Km,$f=[{file:"venus.bin",x:1.85,z:Sn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:uo-2.1,z:Sn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Pa.NICHE_X[0],z:Pa.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Pa.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Pa.NICHE_X[1],z:Pa.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Pa.NICHE_PLINTH_TOP,mat:3}],k_={x0:Eo,x1:3.15,z0:3.6,z1:8.2,top:1},jm=.8,Hf=1.17,nl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{nl.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),nl.push({x:uo-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function x1(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var Bf=[];for(let e of[-1,1])Bf.push(...x1(uo/2+e*qf,Gf,.85,.85));for(let e of $f.filter(t=>t.pedestal))Bf.push(...x1(e.x,e.z,Hf*1.1,Hf*1.1));for(let e of nl)Bf.push(...x1(e.x,e.z,.42,.42));var E_=M_.concat(Xm,Bf,Fs.segments());function S_(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=i;f++)for(let l=s;l<=c;l++)n(f,l,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let p=o.get(i+f+":"+(s+l));p&&c.push(...p)}return[...new Set(c)]}}}var Df=[],En={curMat:[0,0,0]};function y1(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=En.curMat;return Df.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function ko(e,t,o,n,r,a,i,s,c){let f=(l,p,h,u,v)=>{o.push(...y1(e,t,l,p,h,u,v))};f([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),f([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function Os(e,t,o,n,r){let a=En,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(i,s,c),a.tri(s,f,c)}function Wm(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=Math.cos(c),p=Math.sin(c),h=Math.cos(f),u=Math.sin(f),v=[e+o*l,t+o*p],d=[e+o*h,t+o*u],m=[e+n*l,t+n*p],g=[e+n*h,t+n*u];Os([v[0],v[1],r],[d[0],d[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Os([v[0],v[1],a],[d[0],d[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;Os([v[0],v[1],r],[d[0],d[1],r],[v[0],v[1],a],[d[0],d[1],a],[-Math.cos(y),-Math.sin(y),0]),Os([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function A_(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=e+o*Math.cos(c),p=t+o*Math.sin(c),h=e+o*Math.cos(f),u=t+o*Math.sin(f);Os([l,p,r],[h,u,r],[l,n,r],[h,n,r],[0,0,-1]),Os([l,p,a],[h,u,a],[l,n,a],[h,n,a],[0,0,1])}}function T_(e,t,o,n){let r=uo/2,a=Ym,i=3,s=a+.42,c=s+.15,f=Km,l=qf,p=5.98,h=n-.45,u=n+.45,v=64,d=Bm(En,r-l,n,0,p,f);Bm(En,r+l,n,0,p,f),En.curMat=[0,0,0],Wm(r,i,a,s,h,u,v),Wm(r,i,s,c,h-.07,u+.07,v),A_(r,i,c,d+.05,h,u,v);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;ko(e,t,o,Math.min(y,b),i,h,Math.max(y,b),d+.05,u)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);ko(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=l+f*1.42+.45;ko(e,t,o,r-m,d,n-.7,r+m,d+.44,n+.7),ko(e,t,o,r-m+.12,d+.44,n-.62,r+m-.12,d+.7,n+.62),ko(e,t,o,r-m-.1,d+.7,n-.84,r+m+.1,d+.84,n+.84),ko(e,t,o,r-m-.22,d+.84,n-.96,r+m+.22,d+1,n+.96),ko(e,t,o,r-.3,i+a-.1,n-.56,r+.3,d,n+.56)}function Vm(e,t,o,n,r){ko(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),ko(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),ko(e,t,o,n-v1/2,.4,r-m1/2,n+v1/2,qo-1.35,r+m1/2),ko(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),ko(e,t,o,n-.67,qo-1.58,r-.67,n+.67,qo-1.35,r+.67),ko(e,t,o,n-.82,qo-1.35,r-.82,n+.82,qo-1.05,r+.82),ko(e,t,o,n-.66,qo-1.05,r-.66,n+.66,qo-.78,r+.66),ko(e,t,o,n-.92,qo-.78,r-.92,n+.92,qo-.55,r+.92),ko(e,t,o,n-.78,qo-.55,r-.78,n+.78,qo-.3,r+.78),ko(e,t,o,n-.92,qo-.3,r-.92,n+.92,qo-.1,r+.92)}function Ff(e,t,o,n,r){r==="left"?(ko(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),ko(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(ko(e,t,o,uo-.14,1,n-3.8/2,uo+.08,5.7,n+3.8/2),ko(e,t,o,uo-.18,1+.18,n-3.8/2+.18,uo+.08+.04,5.7-.18,n+3.8/2-.18))}function L_(e,t,o,n){ko(e,t,o,.65,qo-.16,n-1.65,.65+.22,qo,n+1.65),ko(e,t,o,uo-.65-.22,qo-.16,n-1.65,uo-.65,qo,n+1.65),ko(e,t,o,.65,qo-.16,n-1.65,uo-.65,qo,n-1.43),ko(e,t,o,.65,qo-.16,n+1.43,uo-.65,qo,n+1.65),o.push(...y1(e,t,[.65+.22,qo-.16,n-1.43],[uo-.65-.22,qo-.16,n-1.43],[.65+.22,qo-.16,n+1.43],[uo-.65-.22,qo-.16,n+1.43],[0,-1,0]))}Qm.exports=function(){let e=[],t=[],o=[];Df=[],En=x_.createBuilder(e,t,o,Df),o.push(...y1(e,t,[0,0,0],[uo,0,0],[0,0,Sn],[uo,0,Sn],[0,1,0])),w_.addSkylight(En,[0,0,0],Sn),En.curMat=[0,0,0];{let c=Fs.SURR;ko(e,t,o,-Eo,0,0,Eo,qo,c.z0),ko(e,t,o,-Eo,0,c.z1,Eo,qo,Sn),ko(e,t,o,-Eo,c.top,c.z0,Eo,qo,c.z1)}ko(e,t,o,uo-Eo,0,Pa.C.z1,uo+Eo,qo,Sn-Eo),ko(e,t,o,uo-Eo-.12,0,Pa.C.z1+2*Eo,uo-Eo,.42,Sn-Eo),ko(e,t,o,uo-Eo-.07,.42,Pa.C.z1+2*Eo,uo-Eo,.5,Sn-Eo);for(let[c,f]of[[0,Fs.SURR.z0],[Fs.SURR.z1,Sn-Eo]])ko(e,t,o,Eo,0,c,Eo+.12,.42,f),ko(e,t,o,Eo,.42,c,Eo+.07,.5,f);ko(e,t,o,Eo,0,Sn-Eo-.12,uo-Eo,.42,Sn-Eo),ko(e,t,o,Eo,.42,Sn-Eo-.07,uo-Eo,.5,Sn-Eo),Um.addEntranceWall(En),Um.addFrames(En),En.curMat=[0,0,0],ko(e,t,o,-Eo,0,Sn-Eo,uo+Eo,qo,Sn+Eo),T_(e,t,o,Gf);for(let c of g1)Vm(e,t,o,1.25,c),Vm(e,t,o,uo-1.25,c);Ff(e,t,o,22,"left"),Ff(e,t,o,25,"right"),Ff(e,t,o,33,"left"),Ff(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)L_(e,t,o,c);Pa.addWing(En),En.curMat=[0,0,0];for(let c of $f.filter(f=>f.pedestal))y_(En,c.x,c.z,Hf,jm);{let c=k_;En.curMat=[0,0,0],En.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),En.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),En.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),En.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}__.addAlcove(En);for(let c of nl)b_(En,c.x,c.z,c.seed,1,c.away);En.curMat=[0,0,0];let r=[[[uo,Sn-.35],[0,Sn-.35]],[[0,3],[0,10]],[[uo,15],[uo,22]],[[0,24],[0,31]],[[uo,33],[uo,40]],[[0,41],[0,46]]],a=S_(E_),i=(c,f)=>{let l=0,p=1/0;return r.forEach((h,u)=>{let v=(h[0][0]+h[1][0])/2,d=(h[0][1]+h[1][1])/2,m=Math.hypot(c-v,f-d);m<p&&(p=m,l=u)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:$f,occluders:[...g1.flatMap(c=>[[1.25,c,.78],[uo-1.25,c,.78]]),[uo/2-qf,Gf,.86],[uo/2+qf,Gf,.86],...$f.filter(c=>c.pedestal).map(c=>[c.x,c.z,Hf*1.12]),...nl.map(c=>[c.x,c.z,.34])],pedestalTop:jm,mat:Df,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:o}}});var b1=ve((jS,Jm)=>{"use strict";R();var{doorLightGLSL:z_}=Ni(),{skylightGLSL:N_}=Ts(),{windowLightGLSL:R_,C:Zr}=dr(),{alcoveLightGLSL:C_}=ga(),xa=e=>e.toFixed(4),P_=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();Jm.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([u,v,d])=>`ao = min(ao, contact(v_pos.xz, vec2(${u.toFixed(3)}, ${v.toFixed(3)}), ${d.toFixed(3)}));`).join(`
      `),i={c:[0,0,0,0],d:[1,0,0,0]},s=-1,c=[],f=u=>{let v=u&&u.tick!==void 0?u.tick:0;if(v!==s||c.length===0){s=v;let d=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-d[0],m.c[2]-d[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(i)}return c},l={},p="",h="";for(let u=0;u<8;u++)l["lightC"+u]=v=>f(v)[u].c,l["lightD"+u]=v=>f(v)[u].d,p+="uniform vec4 lightC"+u+", lightD"+u+`;
`,h+="pic += pictureLight(lightC"+u+", lightD"+u+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Pi().lanternGLSL()}

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

    ${z_()}

    ${N_()}

    ${R_()}

    ${C_()}

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
        step(abs(v_pos.z - ${xa(Zr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${xa((Zr.z0+Zr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      float isBronze = isPot * step(v_pos.z, ${xa(Zr.z0+.3)}) * step(${xa(Zr.x0)}, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${xa(Zr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${P_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${xa(Zr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${xa(Zr.z0)} || v_pos.z > ${xa(Zr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${xa(Zr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${xa(Zr.z0)}), ${xa(Zr.z1)} - v_pos.z), ${xa(Zr.x1)} - v_pos.x);
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var t2=ve((VS,e2)=>{"strict mode";R();var I_="https://api.artic.edu/api/v1/artworks/search",O_=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,F_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",G_="&fields=image_id,title,artist_title",$_={low:400,mid:843,high:1686};e2.exports={fetchList:async function(e,t){let o=I_+F_+G_+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=O_(e,$_[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var a2=ve((YS,r2)=>{"use strict";R();var D_=Hu(),q_=pa(),n2=xf(),H_=e=>n2("images/web/"+e.slug+(q_.isPhone?"-1024":"")+".webp");async function o2(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}r2.exports={fetchList:async function(e,t){return D_.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await o2(H_(e))}catch(o){t=await o2(n2("images/"+e.file))}return{title:e.title,image:t}}}});var s2=ve((QS,i2)=>{"strict mode";R();i2.exports={default:"local",artic:t2(),local:a2()}});var _1=ve((JS,l2)=>{"strict mode";R();var E0=document.createElement("canvas"),w1=E0.width=E0.height=1024,Gi=E0.getContext("2d");Gi.mozImageSmoothingEnabled=!1;Gi.webkitImageSmoothingEnabled=!1;Gi.font="32px Verdana";Gi.textBaseline="bottom";Gi.fillStyle="#aaa";function c2(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(r).width>o&&f>1;){f--,r=a="";for(var p=0;p<l;p++)p<f?(r+=c[p],p+1<f&&(r+=" ")):(a+=c[p],p+1<l&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=c2(e,a,o,n),i>s&&(s=i)),s}l2.exports={init(e,t,o=w1){var n=[];c2(Gi,t,Math.min(o*w1,w1),n),Gi.clearRect(0,0,E0.width,E0.height);for(var r=0;r<n.length;r++)Gi.fillText(n[r],0,E0.height-(Math.max(n.length,3)-r)*32);return e({data:E0,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var u2=ve((tA,h2)=>{"strict mode";R();var M1=s2(),B_=new URLSearchParams(window.location.search).get("api"),f2=M1[B_]||M1[M1.default],U_=_1(),k1={},$s=[],j_=2;function W_(e){return(!navigator.connection||navigator.connection.downlink<j_)&&(e=e=="high"?"mid":"low"),e}var V_=pa(),Gs=document.createElement("canvas");Gs.width=Gs.height=V_.isPhone?1024:2048;var A1=Gs.getContext("2d");A1.imageSmoothingEnabled=!0;A1.imageSmoothingQuality="high";var E1=!1,X_=e=>[($s.pop()||e.texture)([[[200,200,200]]]),t=>($s.pop()||e.texture)([[[0,0,0,0]]]),1];async function S1(e,t,o){E1===!1&&(E1=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await f2.fetchImage(t,W_(o));r=a.title,n=await createImageBitmap(a.image),A1.drawImage(n,0,0,Gs.width,Gs.height)}catch(a){return console.error(a),o=="high"?await S1(e,t,"low"):X_(e)}return[($s.pop()||e.texture)({data:Gs,min:"mipmap",mipmap:"nice",aniso:E1,flipY:!0}),a=>U_.init($s.pop()||e.texture,r,a),n.width/n.height]}h2.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(k1).length;f2.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(k1[s.image_id]){--t===0&&r();return}k1[s.image_id]=s,S1(e,s,o).then(([c,f,l])=>{n({...s,tex:c,textGen:f,aspect:l}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,S1(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&($s.push(e.tex),e.tex=void 0),e.text&&($s.push(e.text),e.text=void 0)}}});var p2=ve((nA,d2)=>{R();d2.exports=Y_;function Y_(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var m2=ve((aA,v2)=>{R();v2.exports=K_;function K_(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var x2=ve((sA,g2)=>{R();g2.exports=Q_;function Q_(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var T1=ve((lA,y2)=>{R();y2.exports=Z_;function Z_(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var w2=ve((hA,b2)=>{R();b2.exports=J_;function J_(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var M2=ve((dA,_2)=>{R();_2.exports=e6;function e6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],p=t[9],h=t[10],u=t[11],v=t[12],d=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,E=o*f-a*i,k=n*c-r*s,L=n*f-a*s,C=r*f-a*c,Y=l*d-p*v,F=l*m-h*v,oe=l*g-u*v,D=p*m-h*d,ne=p*g-u*d,q=h*g-u*m,V=y*q-b*ne+E*D+k*oe-L*F+C*Y;return V?(V=1/V,e[0]=(s*q-c*ne+f*D)*V,e[1]=(r*ne-n*q-a*D)*V,e[2]=(d*C-m*L+g*k)*V,e[3]=(h*L-p*C-u*k)*V,e[4]=(c*oe-i*q-f*F)*V,e[5]=(o*q-r*oe+a*F)*V,e[6]=(m*E-v*C-g*b)*V,e[7]=(l*C-h*E+u*b)*V,e[8]=(i*ne-s*oe+f*Y)*V,e[9]=(n*oe-o*ne-a*Y)*V,e[10]=(v*L-d*E+g*y)*V,e[11]=(p*E-l*L-u*y)*V,e[12]=(s*F-i*D-c*Y)*V,e[13]=(o*D-n*F+r*Y)*V,e[14]=(d*b-v*k-m*y)*V,e[15]=(l*k-p*b+h*y)*V,e):null}});var E2=ve((vA,k2)=>{R();k2.exports=t6;function t6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],p=t[9],h=t[10],u=t[11],v=t[12],d=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-u*m)-p*(c*g-f*m)+d*(c*u-f*h),e[1]=-(n*(h*g-u*m)-p*(r*g-a*m)+d*(r*u-a*h)),e[2]=n*(c*g-f*m)-s*(r*g-a*m)+d*(r*f-a*c),e[3]=-(n*(c*u-f*h)-s*(r*u-a*h)+p*(r*f-a*c)),e[4]=-(i*(h*g-u*m)-l*(c*g-f*m)+v*(c*u-f*h)),e[5]=o*(h*g-u*m)-l*(r*g-a*m)+v*(r*u-a*h),e[6]=-(o*(c*g-f*m)-i*(r*g-a*m)+v*(r*f-a*c)),e[7]=o*(c*u-f*h)-i*(r*u-a*h)+l*(r*f-a*c),e[8]=i*(p*g-u*d)-l*(s*g-f*d)+v*(s*u-f*p),e[9]=-(o*(p*g-u*d)-l*(n*g-a*d)+v*(n*u-a*p)),e[10]=o*(s*g-f*d)-i*(n*g-a*d)+v*(n*f-a*s),e[11]=-(o*(s*u-f*p)-i*(n*u-a*p)+l*(n*f-a*s)),e[12]=-(i*(p*m-h*d)-l*(s*m-c*d)+v*(s*h-c*p)),e[13]=o*(p*m-h*d)-l*(n*m-r*d)+v*(n*h-r*p),e[14]=-(o*(s*m-c*d)-i*(n*m-r*d)+v*(n*c-r*s)),e[15]=o*(s*h-c*p)-i*(n*h-r*p)+l*(n*c-r*s),e}});var A2=ve((gA,S2)=>{R();S2.exports=o6;function o6(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],l=e[9],p=e[10],h=e[11],u=e[12],v=e[13],d=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,E=o*s-n*i,k=o*c-r*i,L=n*c-r*s,C=f*v-l*u,Y=f*d-p*u,F=f*m-h*u,oe=l*d-p*v,D=l*m-h*v,ne=p*m-h*d;return g*ne-y*D+b*oe+E*F-k*Y+L*C}});var L2=ve((yA,T2)=>{R();T2.exports=n6;function n6(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],l=t[7],p=t[8],h=t[9],u=t[10],v=t[11],d=t[12],m=t[13],g=t[14],y=t[15],b=o[0],E=o[1],k=o[2],L=o[3];return e[0]=b*n+E*s+k*p+L*d,e[1]=b*r+E*c+k*h+L*m,e[2]=b*a+E*f+k*u+L*g,e[3]=b*i+E*l+k*v+L*y,b=o[4],E=o[5],k=o[6],L=o[7],e[4]=b*n+E*s+k*p+L*d,e[5]=b*r+E*c+k*h+L*m,e[6]=b*a+E*f+k*u+L*g,e[7]=b*i+E*l+k*v+L*y,b=o[8],E=o[9],k=o[10],L=o[11],e[8]=b*n+E*s+k*p+L*d,e[9]=b*r+E*c+k*h+L*m,e[10]=b*a+E*f+k*u+L*g,e[11]=b*i+E*l+k*v+L*y,b=o[12],E=o[13],k=o[14],L=o[15],e[12]=b*n+E*s+k*p+L*d,e[13]=b*r+E*c+k*h+L*m,e[14]=b*a+E*f+k*u+L*g,e[15]=b*i+E*l+k*v+L*y,e}});var N2=ve((wA,z2)=>{R();z2.exports=r6;function r6(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,f,l,p,h,u,v,d,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],l=t[4],p=t[5],h=t[6],u=t[7],v=t[8],d=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=l,e[5]=p,e[6]=h,e[7]=u,e[8]=v,e[9]=d,e[10]=m,e[11]=g,e[12]=i*n+l*r+v*a+t[12],e[13]=s*n+p*r+d*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=f*n+u*r+g*a+t[15]),e}});var C2=ve((MA,R2)=>{R();R2.exports=a6;function a6(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var I2=ve((EA,P2)=>{R();P2.exports=i6;function i6(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,f,l,p,h,u,v,d,m,g,y,b,E,k,L,C,Y,F,oe,D,ne,q,V,Le;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),f=Math.cos(o),l=1-f,p=t[0],h=t[1],u=t[2],v=t[3],d=t[4],m=t[5],g=t[6],y=t[7],b=t[8],E=t[9],k=t[10],L=t[11],C=r*r*l+f,Y=a*r*l+i*c,F=i*r*l-a*c,oe=r*a*l-i*c,D=a*a*l+f,ne=i*a*l+r*c,q=r*i*l+a*c,V=a*i*l-r*c,Le=i*i*l+f,e[0]=p*C+d*Y+b*F,e[1]=h*C+m*Y+E*F,e[2]=u*C+g*Y+k*F,e[3]=v*C+y*Y+L*F,e[4]=p*oe+d*D+b*ne,e[5]=h*oe+m*D+E*ne,e[6]=u*oe+g*D+k*ne,e[7]=v*oe+y*D+L*ne,e[8]=p*q+d*V+b*Le,e[9]=h*q+m*V+E*Le,e[10]=u*q+g*V+k*Le,e[11]=v*q+y*V+L*Le,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var F2=ve((AA,O2)=>{R();O2.exports=s6;function s6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],l=t[9],p=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+f*n,e[5]=i*r+l*n,e[6]=s*r+p*n,e[7]=c*r+h*n,e[8]=f*r-a*n,e[9]=l*r-i*n,e[10]=p*r-s*n,e[11]=h*r-c*n,e}});var $2=ve((LA,G2)=>{R();G2.exports=c6;function c6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],l=t[9],p=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-f*n,e[1]=i*r-l*n,e[2]=s*r-p*n,e[3]=c*r-h*n,e[8]=a*n+f*r,e[9]=i*n+l*r,e[10]=s*n+p*r,e[11]=c*n+h*r,e}});var q2=ve((NA,D2)=>{R();D2.exports=l6;function l6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],l=t[5],p=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+f*n,e[1]=i*r+l*n,e[2]=s*r+p*n,e[3]=c*r+h*n,e[4]=f*r-a*n,e[5]=l*r-i*n,e[6]=p*r-s*n,e[7]=h*r-c*n,e}});var B2=ve((CA,H2)=>{R();H2.exports=f6;function f6(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var j2=ve((IA,U2)=>{R();U2.exports=h6;function h6(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,f=a+a,l=n*s,p=n*c,h=n*f,u=r*c,v=r*f,d=a*f,m=i*s,g=i*c,y=i*f;return e[0]=1-(u+d),e[1]=p+y,e[2]=h-g,e[3]=0,e[4]=p-y,e[5]=1-(l+d),e[6]=v+m,e[7]=0,e[8]=h+g,e[9]=v-m,e[10]=1-(l+u),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var V2=ve((FA,W2)=>{R();W2.exports=u6;function u6(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Y2=ve(($A,X2)=>{R();X2.exports=d6;function d6(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var Q2=ve((qA,K2)=>{R();K2.exports=p6;function p6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var J2=ve((BA,Z2)=>{R();Z2.exports=v6;function v6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var tg=ve((jA,eg)=>{R();eg.exports=m6;function m6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var ng=ve((VA,og)=>{R();og.exports=g6;function g6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,f=o*i,l=n*i,p=n*s,h=r*i,u=r*s,v=r*c,d=a*i,m=a*s,g=a*c;return e[0]=1-p-v,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-v,e[6]=u+d,e[7]=0,e[8]=h+m,e[9]=u-d,e[10]=1-f-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var ag=ve((YA,rg)=>{R();rg.exports=x6;function x6(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var sg=ve((QA,ig)=>{R();ig.exports=y6;function y6(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var lg=ve((JA,cg)=>{R();cg.exports=b6;function b6(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*f*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var hg=ve((tT,fg)=>{R();fg.exports=w6;function w6(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var dg=ve((nT,ug)=>{R();var _6=T1();ug.exports=M6;function M6(e,t,o,n){var r,a,i,s,c,f,l,p,h,u,v=t[0],d=t[1],m=t[2],g=n[0],y=n[1],b=n[2],E=o[0],k=o[1],L=o[2];return Math.abs(v-E)<1e-6&&Math.abs(d-k)<1e-6&&Math.abs(m-L)<1e-6?_6(e):(l=v-E,p=d-k,h=m-L,u=1/Math.sqrt(l*l+p*p+h*h),l*=u,p*=u,h*=u,r=y*h-b*p,a=b*l-g*h,i=g*p-y*l,u=Math.sqrt(r*r+a*a+i*i),u?(u=1/u,r*=u,a*=u,i*=u):(r=0,a=0,i=0),s=p*i-h*a,c=h*r-l*i,f=l*a-p*r,u=Math.sqrt(s*s+c*c+f*f),u?(u=1/u,s*=u,c*=u,f*=u):(s=0,c=0,f=0),e[0]=r,e[1]=s,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=p,e[7]=0,e[8]=i,e[9]=f,e[10]=h,e[11]=0,e[12]=-(r*v+a*d+i*m),e[13]=-(s*v+c*d+f*m),e[14]=-(l*v+p*d+h*m),e[15]=1,e)}});var vg=ve((aT,pg)=>{R();pg.exports=k6;function k6(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var Ds=ve((sT,mg)=>{R();mg.exports={create:p2(),clone:m2(),copy:x2(),identity:T1(),transpose:w2(),invert:M2(),adjoint:E2(),determinant:A2(),multiply:L2(),translate:N2(),scale:C2(),rotate:I2(),rotateX:F2(),rotateY:$2(),rotateZ:q2(),fromRotation:B2(),fromRotationTranslation:j2(),fromScaling:V2(),fromTranslation:Y2(),fromXRotation:Q2(),fromYRotation:J2(),fromZRotation:tg(),fromQuat:ng(),frustum:ag(),perspective:sg(),perspectiveFromFieldOfView:lg(),ortho:hg(),lookAt:dg(),str:vg()}});var yg=ve((lT,xg)=>{"use strict";R();var gg=u2(),mn=Ds(),S0=dr(),E6=3e3,Uf="high",L1,al=.36,il=13.64,qs=S0.C.hallEnd-.01,sl=S0.C.z0+.01,S6=.356,A6=13.644,T6=S0.C.hallEnd-.006,L6=S0.C.z0+.006,z6=.12,Wf=4,Hs=e=>vr[e]&&vr[e].cy||Wf,z1=.26,N6=5.6,R6=7,vr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:qs},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:S0.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:S0.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:S0.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function C6(e,t){let o=t&&t.maxH||N6,n=t&&t.maxW||R6,r=Math.min(o,n/e);return{width:r*e,height:r}}function P6(e,t,o){let n=vr[o],r=[],a=Hs(o)-t/2;return n.side==="left"?(mn.fromTranslation(r,[al,a,n.z+e/2]),mn.rotateY(r,r,Math.PI/2)):n.side==="right"?(mn.fromTranslation(r,[il,a,n.z-e/2]),mn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?mn.fromTranslation(r,[n.x-e/2,a,sl]):(mn.fromTranslation(r,[7+e/2,a,qs]),mn.rotateY(r,r,Math.PI)),mn.scale(r,r,[e,t,z6]),r}function I6(e,t,o){let n=vr[o],r=[],a=Hs(o)-t/2;return n.side==="left"?(mn.fromTranslation(r,[al,a,n.z+e/2]),mn.rotateY(r,r,Math.PI/2)):n.side==="right"?(mn.fromTranslation(r,[il,a,n.z-e/2]),mn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?mn.fromTranslation(r,[n.x-e/2,a,sl]):(mn.fromTranslation(r,[7+e/2,a,qs]),mn.rotateY(r,r,Math.PI)),r}function O6(e,t,o){let n=vr[o],r=[],a=Hs(o)-t/2-z1-.38;return n.side==="left"?(mn.fromTranslation(r,[S6,a,n.z+e/2]),mn.rotateY(r,r,Math.PI/2)):n.side==="right"?(mn.fromTranslation(r,[A6,a,n.z-e/2]),mn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?mn.fromTranslation(r,[n.x-e/2,a,L6]):(mn.fromTranslation(r,[7+e/2,a,T6]),mn.rotateY(r,r,Math.PI)),mn.scale(r,r,[2,2,2]),r}function F6(e,t,o){let n=vr[o],r=Hs(o)-t/2-z1-.38;return n.side==="left"?[al+.55,r,n.z]:n.side==="right"?[il-.55,r,n.z]:n.side==="corridor"?[n.x,r,sl+.55]:[7,r,qs-.55]}var rl=.42;function jf(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function G6(e,t,o){let n=vr[o],r,a,i;n.side==="left"?(r=[al,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[il,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,sl],a=[1,0,0],i=[0,0,1]):(r=[7,qs],a=[1,0,0],i=[0,0,-1]);let s=Hs(o)+t/2+z1+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(u,v)=>[r[0]+i[0]*u,v,r[1]+i[2]*u],l=[.075,.062,.05],p=[{fixmodel:jf(f(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:jf(f(rl/2,s),a,i,.02,.02,rl),fixcol:l,fixglow:0},{fixmodel:jf(f(rl,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:jf(f(rl-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(rl,s-.02);return{fixtures:p,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}xg.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!vr[i])return;let{width:s,height:c}=C6(a.aspect,vr[i]),f=G6(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),o.push({...a,fixtures:f.fixtures,side:vr[i].side,model:P6(s,c,i),framemodel:I6(s,c,i),framesize:[s,c],textmodel:O6(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:F6(s,c,i),paintingPosition:vr[i].side==="left"?[al+.05,Wf,vr[i].z]:vr[i].side==="right"?[il-.05,Wf,vr[i].z]:vr[i].side==="corridor"?[vr[i].x,Hs(i),sl+.05]:[7,Wf,qs-.05],textGen:null})};return gg.fetch(e,vr.length,Uf,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{gg.load(e,a,Uf)}),Uf="low",L1&&clearTimeout(L1),L1=setTimeout(()=>{Uf="high"},E6)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Mg=ve((hT,_g)=>{"use strict";R();var $6=_1(),bg=pa(),wg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function D6(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];wg.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<wg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(i,s,f,i,f,c)}return{verts:t,elems:o}}var q6=`#extension GL_OES_standard_derivatives : enable
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
}`,H6=`
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
}`;_g.exports=e=>{let t=$6.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Pi().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(bg.isPhone?1024:2048),detail:()=>bg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=D6(),r=e({frag:q6,vert:H6,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Kf=ve((dT,Lg)=>{"use strict";R();var{A:sr}=ga(),{C:Rn}=dr(),{DOOR:Bs}=Ni(),Kn=Fi(),Sg=Rn.hallEnd+.35,Ag={arch:[13.6,0,sr.zc-sr.arch.r-.3,14.4,sr.arch.spring+sr.arch.r+.3,sr.zc+sr.arch.r+.3],mouth:[13.3,0,Rn.z0-.3,14.3,8.2,Rn.z1+.3],stair:[-.5,0,Kn.SURR.z0-.2,.5,Kn.SURR.top+.3,Kn.SURR.z1+.2],door:[Bs.x0-.4,0,-.5,Bs.x1+.4,Bs.top+.4,.5],windows:[15.6,.4,Rn.z1-.2,36.9,6.4,Rn.z1+.9],farDoor:[Rn.x1-.2,0,Rn.zc-Bs.r-.4,Rn.x1+.9,Bs.top+.4,Rn.zc+Bs.r+.4]},vi={court:[sr.x0-.4,0,sr.z0-.3,sr.x1+.3,sr.domeTop+.5,sr.z1+.3],stair:[Kn.C.x-Kn.R-2.6,0,Kn.C.z-Kn.R-1.5,.5,15.6,Kn.C.z+Kn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Rn.z1,46,60,Rn.z1+110],florence:[Rn.x1,-1,Rn.zc-30,Rn.x1+80,60,Rn.zc+30]},B6=[[0,0,0,14,0,Sg],[13.6,0,Rn.z0,Rn.x1+.4,0,Rn.z1],[sr.x0-.4,0,sr.z0,sr.x1,0,sr.z1],[Kn.C.x-Kn.R-2.6,0,Kn.C.z-Kn.R,.4,0,Kn.C.z+Kn.R]],U6={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},cl=new Float64Array(24),Ia=[7,2,2],Tg=0,A0="out",Yf=!0;try{/[?&]nocull\b/.test(location.search)&&(Yf=!1)}catch(e){}var Vf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},Xf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},kg=!0;function j6(e){let t=s=>[e[s],e[4+s],e[8+s],e[12+s]],o=t(0),n=t(1),r=t(2),a=t(3),i=(s,c,f,l)=>{for(let p=0;p<4;p++)cl[s*4+p]=c[p]+f*l[p]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function $i(e,t){if(!Yf)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=cl[r*4],i=cl[r*4+1],s=cl[r*4+2],c=cl[r*4+3],f=a>0?e[3]:e[0],l=i>0?n:o,p=s>0?e[5]:e[2];if(a*f+i*l+s*p+c<0)return!1}return!0}var N1=(e,t)=>Ia[0]>e[0]-t&&Ia[0]<e[3]+t&&Ia[2]>e[2]-t&&Ia[2]<e[5]+t;function W6(e){if(N1(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-Ia[0],a=(n&2?e[5]:e[2])-Ia[2],i=Math.atan2(r,a)-Tg;i-=Math.round(i/(2*Math.PI))*2*Math.PI,t=Math.min(t,i),o=Math.max(o,i)}return o-t>Math.PI?null:[t,o]}function Eg(e,t,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=W6(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of e){let s=Ag[i];if(!N1(s,.6)&&(!$i(s,o)||!a(s)))return!1}return $i(t,o)&&a(t)}function V6(){let e=Ia[0],t=Ia[2];return e<0&&t>Kn.C.z-Kn.R-1.5&&e>Kn.C.x-Kn.R-2.6?"stair":e>14.1&&t>sr.z0-.3&&t<sr.z1+.3&&e<sr.x1+.3?"court":e>13.9&&t>Rn.z0-.4&&t<Rn.z1+.1&&e<Rn.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<Sg?"hall":"out"}var X6={PORTAL:Ag,ROOM:vi,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*e[r*4+s];n[r*4+a]=i}j6(n),Ia[0]=o[0],Ia[1]=o[1],Ia[2]=o[2],Tg=Math.atan2(-e[2],-e[10]),A0=V6();for(let r in vi)if(!Yf||A0==="out"||A0===r||N1(vi[r],.3))Vf[r]=$i(vi[r],!1)||A0===r,Xf[r]=$i(vi[r],!0)||A0===r;else{let a=U6[A0][r];Vf[r]=a?Eg(a,vi[r],!1):$i(vi[r],!1),Xf[r]=a?Eg(a,vi[r],!0):$i(vi[r],!0)}kg=!Yf||B6.some(r=>$i(r,!1))},get zone(){return A0},room(e,t){return t?Xf[e]:Vf[e]},box(e,t,o){return o&&!(t?Xf[o]:Vf[o])?!1:$i(e,t)},get floor(){return kg}};Lg.exports=X6});var Ng=ve((vT,zg)=>{"use strict";R();var Y6=b1(),K6=Kf();function Q6(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let p=0;p<3;p++)a.push(t.getFloat32(12+p*4,!0)),i.push(t.getFloat32(24+p*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,r);s+=r*2;let l=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:f,nrm:l}}zg.exports=(e,t)=>{let o=[],n=(r,a)=>{let i=[],s=[],c=[],f=[],l=a.height*.75,p=a.base!==void 0?a.base:t.pedestalTop,h={offset:0,count:r.nI,box:[a.x-l,p-.1,a.z-l,a.x+l,p+a.height+.2,a.z+l]},u=a.height,v=Math.cos(a.yaw),d=Math.sin(a.yaw),m=p;for(let g=0;g<r.nV;g++){let y=(r.mn[0]+r.pos[g*3]/65535*r.sz[0])*u,b=(r.mn[1]+r.pos[g*3+1]/65535*r.sz[1])*u,E=(r.mn[2]+r.pos[g*3+2]/65535*r.sz[2])*u;i.push(a.x+v*y+d*E,m+b,a.z-d*y+v*E);let k=r.nrm[g*3]/127,L=r.nrm[g*3+1]/127,C=r.nrm[g*3+2]/127;s.push(v*k+d*C,L,-d*k+v*C),c.push(a.mat||1,0,0)}for(let g=0;g<r.nI;g++)f.push(r.idx[g]);f.length!==0&&o.push({range:h,draw:Y6(e,{position:i,normal:s,mat:c,elements:f,lights:t.lights,get viewer(){return t.viewer}},!1,!0)})};return t.statues.forEach(r=>{fetch("res/"+r.file).then(a=>{if(!a.ok)throw new Error("Could not load "+r.file);return a.arrayBuffer()}).then(a=>n(Q6(a),r)).catch(a=>console.error(a))}),function(r){let a=!!(r&&r.reflected);for(let i=0;i<o.length;i++){let s=o[i];K6.box(s.range.box,a)&&s.draw([s.range])}}}});var Hg=ve((gT,C1)=>{"use strict";R();var Z6=b0(),qn=1.29032,L0=[9.2968,2,5.9],J6=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Qf=2147.64,Rg=725,Cg=1288,Pg=1450,Ig=2576,Br=-5.197,N0=3.865,Di=10.135,R0=-14.679,ll=-30.229,fl=7.232,Og=-45.713,Us=17.1*qn,z0=16.6*qn,hl=16.6*qn,Fg=[6.9,17.1],Zf=[2.95,16.6],eM=1.6,tM=0,oM=1,Gg=2,R1=3,$g=4,Dg=5,nM=6;function rM(){let e=[],t=[],o=[],n=[],r=Z6.createBuilder(e,t,o,n),a=(f,l,p,h,u,v,d=1,m=1)=>{let g=[];for(let y=0;y<=d;y++){let b=[];for(let E=0;E<=m;E++){let k=[f[0]+l[0]*y/d+p[0]*E/m,f[1]+l[1]*y/d+p[1]*E/m,f[2]+l[2]*y/d+p[2]*E/m],L=v(k);b.push(r.vert(k,h,[u,L[0],L[1]]))}g.push(b)}for(let y=0;y<d;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=f=>l=>[(L0[2]-l[2])/qn-f,l[1]/qn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],tM,f=>[f[0]/qn,f[2]/qn],13,14),a([N0,0,Br],[0,0,R0-Br],[0,Us,0],[1,0,0],oM,i(8.6),6,6),a([-40,0,Br],[N0+40,0,0],[0,Us,0],[0,0,1],Gg,f=>[(N0-f[0])/qn,f[1]/qn],8,4),a([-40,0,-.36],[0,0,Br+.36],[0,Us,0],[1,0,0],Gg,f=>[-f[2]/qn,f[1]/qn]),a([Di,0,-80],[0,0,Br+80],[0,z0,0],[-1,0,0],$g,i(8.6),12,6),a([Di,0,Br],[60,0,0],[0,z0,0],[0,0,1],Dg,f=>[(f[0]-Di)/qn,f[1]/qn],8,4),a([70,0,Br],[0,0,-.36-Br],[0,z0,0],[-1,0,0],Dg,f=>[-f[2]/qn,f[1]/qn]);let s=f=>[(f[0]-L0[0])/qn+4.18,f[1]/qn];a([-20,0,ll],[fl+20,0,0],[0,hl,0],[0,0,1],R1,s,8,6),a([fl,0,ll],[0,0,Og-ll],[0,hl,0],[1,0,0],R1,i(28),4,4),a([fl,0,Og],[Di-fl,0,0],[0,z0,0],[0,0,1],$g,f=>[(f[0]-L0[0])/qn,f[1]/qn],2,4),a([-20,0,R0],[0,0,ll-R0],[0,hl,0],[1,0,0],R1,i(16),4,4);let c=(f,l,p,h)=>a(f,l,p,h,nM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function T0(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Oa=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",aM=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,R0],[N0,Us,Br]],[[Di,0,-80],[70,z0,Br]],[[-20,0,-80],[fl,hl,ll]],[[-40,0,-80],[-20,hl,R0]]],iM=aM.map(e=>`if (hitBox(ro, rd, ${Oa(e[0])}, ${Oa(e[1])}, 1e4) ) return 0.0;`).join(`
		`),qg="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>J6[t][e].toFixed(6)).join(", ")).join(", ")+")",sM=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Oa([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${iM}
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
	vec3 ro = ${Oa(L0)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Oa([-40,0,R0])}, ${Oa([N0-.02,Us,Br])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Oa([Di+.02,0,-80])}, ${Oa([70,z0,Br])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${qg} * (p - ${Oa(L0)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Rg.toFixed(2)} + ${Qf.toFixed(3)} * pc.x / pc.z) / ${Pg.toFixed(1)},
		(${Cg.toFixed(2)} - ${Qf.toFixed(3)} * pc.y / pc.z) / ${Ig.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${qg} * (p - ${Oa(L0)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Rg.toFixed(2)} + ${Qf.toFixed(3)} * pc.x / pc.z) / ${Pg.toFixed(1)},
		(${Cg.toFixed(2)} - ${Qf.toFixed(3)} * pc.y / pc.z) / ${Ig.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Oa(L0)}), n));
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
		base = texture2D(cobbleTex, fuv / ${eM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Fg[0].toFixed(2)}, 1.0 - fuv.y / ${Fg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Zf[0].toFixed(2)}, 1.0 - fuv.y / ${Zf[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Zf[0].toFixed(2)}, 1.0 - fuv.y / ${Zf[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(N0-.05).toFixed(3)} && v_pos.x < ${(Di+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${R0.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Br+4.5).toFixed(3)};
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
}`,cM=`
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
}`,lM=pr();C1.exports=e=>{let t=rM(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=T0(e,"res/street/photo.jpg",o,[190,160,120]),i=T0(e,"res/street/photo_night.jpg",o,[12,14,22]),s=T0(e,"res/street/photo_mask.png",o,[255,255,255]),c=T0(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=T0(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=T0(e,"res/street/facade_cream.jpg",n,[215,200,175]),p=T0(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),u=e({frag:sM,vert:cM,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:p,photoNight:i,night:()=>lM.night,time:()=>(Date.now()-h)/1e3}});return function(){u()}};C1.exports.layout={MOUTH_Z:Br,PINK_X:N0,RIGHT_X:Di,PINK_H:Us,CREAM_H:z0,S:qn}});var jg=ve((yT,Ug)=>{"use strict";R();var fM=pr().GLSL,{glassPanes:hM}=Ni(),Bg=dr();function uM(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(hM(),[0,0,1]),o(Bg.windowGlass(),[0,0,1]),o(Bg.farDoorGlass(),[1,0,0]),{position:e,normal:t}}Ug.exports=e=>{let t=uM(),o=e({frag:`
		precision highp float;
		${fM}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var cx=ve((wT,G1)=>{"use strict";R();var Qg=pr().GLSL,dM=b0(),P1=pa(),{wallWithHoles:pM,C:Bi}=dr(),at=.28,J={westBack:14.4,westCol:15-at,eastCol:37.4+at,eastBack:41.8,south:Bi.z1+.7,northCol:Bi.z1+.7+16,northBack:Bi.z1+.7+19,cx:(15+37.4)/2,cz:(Bi.z1+.7+Bi.z1+.7+16-at)/2},No={x0:J.westCol+at,x1:J.eastCol-at,z0:J.south,z1:J.northCol-at},gr=3.3,pl=.92,Ui=5.6,Wg=6,ya=11.9,Hi=9.6,ao={x0:J.cx-2.9,x1:J.cx+2.9,top:14.4},ah=7,Zg=4,O1=(J.eastCol-J.westCol)/ah,vM=(J.northCol-J.south)/Zg,Jg=3,ml=.26,O0=1.4,P0=1.1,eh=3,Ya=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),Ye={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},Ka=[],ex=(e,t,o)=>[J.cx+e,t,J.cz+o],th=ex(-5.9,0,3.4),ji=.85,qi={c:[th[0],4.6*ji+.5,th[2]],r:[5*ji,3.6*ji,4.5*ji]},tx=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[th[0]+e.d[0]*ji,e.d[1]*ji+.5,th[2]+e.d[2]*ji],r:e.r.map(t=>t*ji),n:e.n}));for(let e of tx)Ka.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var mM=[3.6,6.3,9];for(let e of mM){let t=8.6+e%1.7*.6;Ka.push({c:ex(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var gM=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:J.cx+e.d[0],z:J.cz+e.d[1],bloom:e.bloom}));for(let e of gM)Ka.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var F1=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[J.cx+Math.cos(t)*2.3,J.cz+Math.sin(t)*2.3]});for(let[e,t]of F1)Ka.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var ox=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let p=l/f,h=o+(r-o)*p,u=n+(a-n)*p;i!==void 0&&Math.abs((r!==o?h:u)-i)<s||ox.push([h,u])}};e(No.x0+.45,No.z0+1.2,No.x0+.45,No.z1-.45,J.cz,1),e(No.x1-.45,No.z0+1.2,No.x1-.45,No.z1-.45,J.cz,1),e(No.x0+.45,No.z1-.45,No.x1-.45,No.z1-.45,J.cx,1.9)}var xM=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],oh=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function Ws(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Hn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function yM(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var bM={north:[e=>[e[0],e[1],J.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[J.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[J.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function nx(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var wM=nx(J.westCol,O1,ah,at+ml,at+ml),Vg=nx(J.south,vM,Zg,.32,at+ml),js=[J.cx-32.35,J.northCol-77],_M=Array.from({length:ah-1},(e,t)=>J.westCol+(t+1)*O1),rx=e=>(e[1]-e[0])/2-.2,vl=e=>(e[0]+e[1])/2;function MM(e,t){let o=vl(e),n=rx(e);return{u0:e[0],u1:e[1],bottom:t?0:pl,head:r=>{let a=Math.abs(r-o);return a<n?gr+Math.sqrt(n*n-a*a):gr},step:.05}}function kM(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[Ye.STONE,0,0]}}function EM(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[Ye.STONE,0,0]}}function Xg(e,t,o){let[n,r]=bM[t],a=yM(e,n,r),i=[];o.arches.forEach((l,p)=>i.push(MM(l,p===o.open)));let s=[];for(let l of o.bays||o.arches){let p=vl(l);o.oculi&&i.push(kM(p,6.85,.3)),s.push({c:p,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])s.push(l);for(let l of s)i.push(EM(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])i.push(l);pM(a,{u0:o.u0,u1:o.u1,w0:-at,w1:at,top:o.top,holes:i,mat:[Ye.BRICK,0,0],revealMat:[Ye.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,p,h,u,v,d,m)=>{let g=n([l,p,h]),y=n([u,v,d]);Hn(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,p,h,u,v,d)=>Ws(a,l,p,h,u,v,[d,0,0]);for(let l of o.arches){let p=vl(l),h=rx(l),u=28;for(let v of[at,-at]){let d=v>0?1:-1,m=v+d*.025;for(let g=0;g<u;g++){let y=Math.PI*g/u,b=Math.PI*(g+1)/u,E=(D,ne)=>[p+Math.cos(D)*ne,gr+Math.sin(D)*ne],k=E(y,h),L=E(b,h),C=E(y,h+.26),Y=E(b,h+.26);f([k[0],k[1],m],[L[0],L[1],m],[Y[0],Y[1],m],[C[0],C[1],m],[0,0,d],Ye.STONE);let F=Math.cos((y+b)/2),oe=Math.sin((y+b)/2);f([C[0],C[1],v],[Y[0],Y[1],v],[Y[0],Y[1],m],[C[0],C[1],m],[F,oe,0],Ye.STONE)}}}if(o.arches.forEach((l,p)=>{p!==o.open&&c(l[0]-.02,pl,-at-.05,l[1]+.02,pl+.09,at+.05,Ye.STONE)}),c(o.u0,Wg,-at,o.u1,Wg+.18,at+.09,Ye.STONE),c(o.u0,o.win[0]-.12,at-.01,o.u1,o.win[0],at+.06,Ye.STONE),o.cornice)for(let[l,p,h]of o.cornice)c(l,h-.22,at-.01,p,h,at+.16,Ye.STONE),c(l,h,at-.01,p,h+.16,at+.42,Ye.STONE);for(let{c:l,y0:p,y1:h,w:u,door:v}of s){let d=u/2;if(f([l-d-.01,p,.06],[l+d+.01,p,.06],[l+d+.01,h,.06],[l-d-.01,h,.06],[0,0,1],v?Ye.DARK:Ye.PANE),v){c(l-d-.16,0,at-.01,l-d,h+.16,at+.07,Ye.STONE),c(l+d,0,at-.01,l+d+.16,h+.16,at+.07,Ye.STONE),c(l-d-.16,h,at-.01,l+d+.16,h+.2,at+.09,Ye.STONE),c(l-d,0,.07,l+d,h-.02,.12,Ye.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,Ye.DARK);continue}for(let m of[-1,1]){let g=l+m*d;c(g+m*.02,p+.02,at+.02,g+m*(d+.025),h-.02,at+.06,Ye.SHUTTER)}c(l-d-.09,h,at-.01,l+d+.09,h+.16,at+.05,Ye.STONE),c(l-d-.09,p-.1,at-.01,l+d+.09,p,at+.09,Ye.STONE),c(l-.015,p,.06,l+.015,h,.09,Ye.SHUTTER),c(l-d,(p+h)/2-.015,.06,l+d,(p+h)/2+.015,.09,Ye.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let p=vl(l);f([p-.31,6.54,0],[p+.31,6.54,0],[p+.31,7.16,0],[p-.31,7.16,0],[0,0,1],Ye.DARK)}for(let l of o.cols){let p=pl+.09,h=n([l,0,0]);Hn(e,h[0]-.24,p,h[2]-.24,h[0]+.24,p+.12,h[2]+.24,Ye.MARBLE),e.lathe([[.23,p+.12,1],[.24,p+.17],[.2,p+.24],[.215,p+.28],[.17,p+.34,1],[.165,p+.6],[.155,gr-.5],[.15,gr-.38,1],[.175,gr-.34,1],[.17,gr-.3],[.2,gr-.22],[.27,gr-.15],[.29,gr-.12,1]],h[0],h[2],18,{mat:()=>[Ye.MARBLE,0,0]}),Hn(e,h[0]-.29,gr-.12,h[2]-.29,h[0]+.29,gr+.01,h[2]+.29,Ye.STONE)}o.walk&&o.walk(e)}function SM(e){let t=[-1,0,1].map(r=>{let a=J.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Ye.STONE,0,0]}});Xg(e,"north",{u0:J.westCol-at,u1:J.eastCol+at,top:r=>r>ao.x0+1e-6&&r<ao.x1-1e-6?ao.top:ya,cuts:[ao.x0,ao.x0+1e-5,ao.x1-1e-5,ao.x1],arches:wM,open:Jg,cols:_M,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[J.westCol-at-3.3,ao.x0,ya],[ao.x1,J.eastCol+at+3.3,ya],[ao.x0-.2,ao.x1+.2,ao.top]],walk:r=>{Hn(r,No.x0,Ui,J.northCol+at,No.x1,Ui+.2,J.northBack,Ye.PLASTER),Hn(r,No.x0,0,J.northBack,No.x1,Ui,J.northBack+.3,Ye.PLASTER);for(let a of[J.cx-7.2,J.cx,J.cx+7.2])Ws(r,[a-.8,0,J.northBack-.01],[a+.8,0,J.northBack-.01],[a+.8,2.9,J.northBack-.01],[a-.8,2.9,J.northBack-.01],[0,0,-1],[Ye.DARK,0,0]),Hn(r,a-.98,0,J.northBack-.06,a+.98,3.12,J.northBack,Ye.STONE),Ws(r,[a-.8,0,J.northBack-.07],[a+.8,0,J.northBack-.07],[a+.8,2.9,J.northBack-.07],[a-.8,2.9,J.northBack-.07],[0,0,-1],[Ye.DARK,0,0])}}),Ws(e,[ao.x0,11,J.northCol+.2],[ao.x1,11,J.northCol+.2],[ao.x1,13.6,J.northCol+.2],[ao.x0,13.6,J.northCol+.2],[0,0,-1],[Ye.DARK,0,0]),Hn(e,ao.x0+.3,10.88,J.northCol-at-.06,ao.x1-.3,11,J.northCol-at+.1,Ye.STONE),Hn(e,J.westBack,Ui+.2,J.northBack,J.eastBack,ya,J.northBack+3.4,Ye.BRICK),Hn(e,J.westBack,Hi,J.northCol-at,J.westCol-at,ya,J.northCol+at,Ye.BRICK),Hn(e,J.eastCol+at,Hi,J.northCol-at,J.eastBack,ya,J.northCol+at,Ye.BRICK),Hn(e,J.westBack,Ui+.2,J.northCol+at+.12,J.eastBack,ya,J.northBack,Ye.BRICK),ul(e,[J.westBack-.5,ya+.16,J.northCol-at-.42],[ao.x0-J.westBack+.5,0,0],[0,2.6,4.4],Ye.ROOF),ul(e,[ao.x1,ya+.16,J.northCol-at-.42],[J.eastBack+.5-ao.x1,0,0],[0,2.6,4.4],Ye.ROOF),ul(e,[ao.x0-.3,ao.top+.16,J.northCol-at-.42],[ao.x1-ao.x0+.6,0,0],[0,1.4,3],Ye.ROOF),Yg(e,[ao.x0-.3,ao.top+.16,J.northCol-at-.42],[ao.x0-.3,ao.top+1.56,J.northCol-at+2.58],[ao.x0-.3,ao.top+.16,J.northCol-at+2.58],[-1,0,0],Ye.BRICK),Yg(e,[ao.x1+.3,ao.top+.16,J.northCol-at-.42],[ao.x1+.3,ao.top+1.56,J.northCol-at+2.58],[ao.x1+.3,ao.top+.16,J.northCol-at+2.58],[1,0,0],Ye.BRICK),Hn(e,ao.x0,ya,J.northCol+at,ao.x1,ao.top,J.northCol+2.6,Ye.BRICK);for(let[r,a]of[[J.cx-9.8,J.northBack+.6],[J.cx+9.4,J.northBack+.4],[J.cx-4.6,J.northBack+1]])Hn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,Ye.BRICK),Hn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,Ye.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];Vg.forEach((p,h)=>{let u=vl(p);h===1?c.push({c:u,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:u,y0:1,y1:2.75,w:1.05}),c.push({c:u,y0:3.85,y1:5.45,w:1.05})}),Xg(e,r,{u0:J.south,u1:J.northCol-at,top:()=>Hi,arches:[],bays:Vg,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[J.south,J.northCol-at,Hi]]}),Hn(e,a,0,J.south,i+s*(at+.12),Hi,J.northBack+.3,Ye.BRICK);let f=i-s*at;Hn(e,f,0,J.south,f-s*.06,.55,J.northCol-at,Ye.STONE);let l=i-s*(at+.42);ul(e,[l,Hi+.16,J.south],[0,0,J.northCol-at-J.south],[a-l+s*.4,1.9,0],Ye.ROOF)};o("west",J.westBack,J.westCol),o("east",J.eastBack,J.eastCol);let n=Bi.x1+.7;Hn(e,13.65,7.4,J.south-.02,n,7.62,J.south+.14,Ye.STONE),Hn(e,13.65,10.4,J.south-.02,n,10.6,J.south+.38,Ye.STONE),ul(e,[13.65,10.6,J.south+.38],[n-13.65,0,0],[0,2.2,-5],Ye.ROOF)}function Yg(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function ul(e,t,o,n,r){let a=oh([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,l)=>[t[0]+o[0]*f+n[0]*l,t[1]+o[1]*f+n[1]*l,t[2]+o[2]*f+n[2]*l];Ws(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;Ws(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],oh([-n[0],0,-n[2]]),[r,0,0])}function AM(e){let t=J.westBack,o=J.eastBack,n=J.south,r=J.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let l=[t+(o-t)*c/a,0,n+(r-n)*f/i];s[c].push(e.vert(l,[0,1,0],[Ye.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var dl=.46,I0=.58,C0=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function TM(e,t,o){let n=P0+o,r=(e>0?No.x1-J.cx:J.cx-No.x0)-O0-o,a=P0+o,i=(t>0?No.z1-J.cz:J.cz-No.z0)-O0-o,s=eh+o,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[r,i],[r,a],[f,a]],p=Math.atan2(a,f),h=Math.atan2(c,n);for(let u=1;u<10;u++){let v=p+(h-p)*u/10;l.push([Math.cos(v)*s,Math.sin(v)*s])}return l.map(([u,v])=>[J.cx+e*u,J.cz+t*v])}function LM(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,f=i,l=dl*.5,p=-l,h=a+l,u=[],v=Math.max(1,Math.ceil((h-p)/1));for(let d=0;d<=v;d++){let m=p+(h-p)*d/v,g=[];for(let y=0;y<C0.length;y++){let[b,E]=C0[y],k=Math.min(C0.length-2,y),L=C0[Math.max(0,y-1)],C=C0[Math.min(C0.length-1,y+1)],Y=(C[0]-L[0])*dl,oe=(C[1]-L[1])*I0,D=-Y,ne=Math.hypot(oe,D)||1,q=[t[0]+i*m+c*b*dl,E*I0,t[1]+s*m+f*b*dl],V=[c*(-oe/ne),-D/ne,f*(-oe/ne)];g.push(e.vert(q,V[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:V,[Ye.HEDGE,0,0]))}u.push(g)}for(let d=0;d<v;d++)for(let m=0;m<C0.length-1;m++)e.tri(u[d][m],u[d+1][m],u[d+1][m+1]),e.tri(u[d][m],u[d+1][m+1],u[d][m+1]);for(let[d,m]of[[0,-1],[v,1]]){let g=u[d],y=e.vert([t[0]+i*(d?h:p),I0*.5,t[1]+s*(d?h:p)],[i*m,0,s*m],[Ye.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function zM(e){for(let t of[-1,1])for(let o of[-1,1]){let n=TM(t,o,.3);for(let r=0;r<n.length;r++)LM(e,n[r],n[(r+1)%n.length])}}function NM(e){let t=J.cx,o=J.cz,n=()=>[Ye.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[Ye.DARK,0,0]});let r={mat:()=>[Ye.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*l*i*-1+0),1.95+Math.sin(f)*l,o])}e.tube(s,()=>.016,16,5,r)}}function RM(e){for(let[t,o]of F1)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[Ye.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[Ye.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[Ye.BARK,0,0]})}function CM(e){let[t,,o]=qi.c,n=ix(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Ye.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,p=[t+a*l,s*l,o+i*l],h=n()*Math.PI*2;e.tube([p,[p[0]+Math.cos(h)*1.3,p[1]+.9,p[2]+Math.sin(h)*1.3],[p[0]+Math.cos(h)*2.3,p[1]+1.4+n(),p[2]+Math.sin(h)*2.3]],u=>.08*(1-u*.7),8,6,{mat:()=>[Ye.BARK,0,0]})}}for(let a of Ka.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Ye.BARK,0,0]})}function PM(e){let t=()=>[Ye.FARBRICK,0,0],o=()=>[Ye.LEAD,0,0],n=(a,i,s,c,f,l)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let p=[];for(let u=0;u<=12;u++){let v=u/12*Math.PI/2,d=Math.cos(v)*s,m=Math.sin(v)*f;l&&(d*=1-.18*Math.sin(v*2)),p.push([Math.max(d,s*.12),c+m])}e.lathe(p,a,i,28,{mat:o});let h=c+f;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};Hn(e,14,0,104,52,26,150,Ye.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{Hn(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Ye.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function IM(e){let o=[J.cx,0,J.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],p=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[i].push(e.vert(p,[-l[0],-l[1],-l[2]],[Ye.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function OM(){let e=[],t=[],o=[],n=[],r=dM.createBuilder(e,t,o,n);return AM(r),SM(r),zM(r),NM(r),RM(r),CM(r),r.save(),r.translate(js[0],0,js[1]),PM(r),r.restore(),IM(r),{position:e,normal:t,elements:o,attr:n}}var ax=[[[13.65,0,Bi.z0-.7],[Bi.x1+.7,10.6,J.south]],[[J.westBack,Ui,J.northCol-at],[J.eastBack,ya,J.northBack+3.4]],[[ao.x0,ya,J.northCol-at],[ao.x1,ao.top,J.northCol+2.6]],[[J.westBack,0,J.south],[J.westCol+at,Hi,J.northBack+.3]],[[J.eastCol-at,0,J.south],[J.eastBack,Hi,J.northBack+.3]],[[14+js[0],0,104+js[1]],[52+js[0],26,150+js[1]]]];function FM(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function Jf(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=s*s-i*c;if(f<=0)return 0;let l=Math.sqrt(f),p=Math.max(0,(-s-l)/i),h=(-s+l)/i;return Math.max(0,h-p)}function I1(e){for(let[t,o]of ax)if(FM(e,Ya,t,o))return 0;return 1}function ix(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function GM(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=ix(21),c=(v,d,m,g,y,b,E)=>{let k=e.length/3;for(let[L,C]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...v),t.push(L,C),o.push(d,m,g),n.push(...y),r.push(...b),a.push(...E);i.push(k,k+1,k+2,k,k+2,k+3)},f=(v,d)=>{let m=1;for(let g of Ka){if(g===d||!g.shadow)continue;let y=Jf(v,Ya,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=Ka.map(v=>({...v,pts:null}));for(let v of l)for(let d=0;d<v.n;d++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(v.spindle){let q=b[1],V=Math.sqrt(Math.max(.02,1-q*q))*(q>0?1-q*.55:1+q*.25),Le=Math.hypot(b[0],b[2])||1,je=V*Math.min(1,Le*1.4);b=[b[0]/Le*je,q,b[2]/Le*je]}v.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let E=[v.c[0]+b[0]*v.r[0],v.c[1]+b[1]*v.r[1],v.c[2]+b[2]*v.r[2]],k,L;if(v.magnolia){let q=0;for(let je of tx)q=Math.max(q,Jf(E,Ya,je.c,je.r));k=Math.exp(-q*1.1);let V=1;for(let je of Ka)if(!je.magnolia&&je.shadow){let ze=Jf(E,Ya,je.c,je.r);ze>0&&(V*=Math.exp(-ze*.9))}k*=I1(E)*V;let Le=xM(E,qi.c);L=oh([Le[0]/qi.r[0]+b[0]*.5,Le[1]/qi.r[1]+b[1]*.5,Le[2]/qi.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(Le[0]/qi.r[0],Le[1]/qi.r[1],Le[2]/qi.r[2])*.6+y*.4)}else{let q=Jf(E,Ya,v.c,v.r);k=Math.exp(-q*(v.spindle?2.2:1.25)),k*=I1(E)*f(E,Ka[l.indexOf(v)]),L=oh([b[0]/v.r[0],b[1]/v.r[1],b[2]/v.r[2]])}let C=Math.max(0,L[0]*Ya[0]+L[1]*Ya[1]+L[2]*Ya[2]),Y=.25+.75*Math.pow(y,1.5)*(.65+.35*(L[1]*.5+.5)),F=v.size[0]+(v.size[1]-v.size[0])*s(),oe=.85+s()*.3,D=v.leaf.map(q=>q*oe),ne=v.cell;v.cell===3&&s()<.35&&(ne=2),c(E,F,ne,s()*Math.PI*2,[k,Y,.35+.65*C],D,v.bloom)}for(let[v,d]of ox){let m=s()<.5;for(let g=0;g<3;g++){let y=[v+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],b=I1(y)*f(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let p=i.length/6,h=Array.from({length:p},(v,d)=>d);for(let v=p-1;v>0;v--){let d=Math.floor(s()*(v+1));[h[v],h[d]]=[h[d],h[v]]}let u=[];for(let v of h)for(let d=0;d<6;d++)u.push(i[v*6+d]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:u}}var rt=e=>e.toFixed(4),gl=e=>`vec3(${rt(e[0])}, ${rt(e[1])}, ${rt(e[2])})`,sx=`
const vec3 SUN = ${gl(Ya)};
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
`,$M=ax.map(([e,t])=>`if (hitBox(ro, SUN, ${gl(e)}, ${gl(t)})) return 0.0;`).join(`
	`),DM=Ka.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${gl(e.c)}, ${gl(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),qM=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${rt(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${rt(Ui)} && u > ${rt(o-at)} && u < ${rt(o+n*r+at)}) {
				float k = floor((u - ${rt(o)}) / ${rt(n)});
				float a = ${rt(o)} + k * ${rt(n)} + (k < 0.5 ? ${rt(a)} : 0.02);
				float b = ${rt(o)} + (k + 1.0) * ${rt(n)} - (k > ${rt(r-1.5)} ? ${rt(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${rt(s)}) < 0.5 ? 0.0 : ${rt(pl+.09)};
				bool hole = (q.y > sill && q.y < ${rt(gr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${rt(gr)} && d * d + (q.y - ${rt(gr)}) * (q.y - ${rt(gr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,nh=P0+.3,rh=P0+.3,xl=eh+.3,Kg=No.x1-J.cx-O0-.3,HM=No.z1-J.cz-O0-.3,BM=J.cz-No.z0-O0-.3,UM=Math.sqrt(xl*xl-nh*nh),jM=Math.sqrt(xl*xl-rh*rh),WM=[[J.cx,J.cz,.86,1.18],[J.cx,J.cz,1.25,.3],...F1.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${rt(e)}, ${rt(t)}), ${rt(o)}, ${rt(n)})) return 0.0;`).join(`
	`),VM=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${rt(J.cx)}, ${rt(J.cz)}));
	float b1 = xz.y > ${rt(J.cz)} ? ${rt(HM)} : ${rt(BM)};
	vec2 A = vec2(${rt(nh)}, ${rt(UM)}), Bp = vec2(${rt(nh)}, b1), C = vec2(${rt(Kg)}, b1);
	vec2 D = vec2(${rt(Kg)}, ${rt(rh)}), E = vec2(${rt(jM)}, ${rt(rh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${rt(xl)}));
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
	${$M}
	${qM("z",J.northCol,J.westCol,O1,ah,at+ml,at+ml,Jg,"ro.z > "+rt(J.northCol-at))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${WM}
	if (ro.y < ${rt(I0)} && ro.x > ${rt(No.x0)} && ro.x < ${rt(No.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${rt(I0)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${rt(dl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${rt(I0)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${DM}
	return tr;
}
`,XM=`
precision highp float;
${Qg}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${sx}
${VM}

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

	if (kind == ${Ye.SKY}.0) {
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

	if (kind == ${Ye.GROUND}.0) {
		bool yard = P.x > ${rt(No.x0)} && P.x < ${rt(No.x1)} && P.z < ${rt(No.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${rt(No.x0)}, ${rt(No.x1)} - P.x);
			float ez = min(P.z - ${rt(No.z0)}, ${rt(No.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${rt(J.cx)}), dz = abs(P.z - ${rt(J.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${rt(O0)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${rt(O0)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${rt(eh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${rt(J.cz)}, P.x - ${rt(J.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${rt(eh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${rt(P0)} || dz < ${rt(P0)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${rt(P0)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${rt(J.cx)}, ${rt(J.cz)})));
		}
	} else if (kind == ${Ye.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${Ye.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${Ye.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${Ye.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${rt(I0)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${Ye.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${Ye.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${Ye.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${Ye.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${Ye.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${Ye.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${Ye.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${Ye.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${Ye.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${Ye.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${Ye.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${rt(J.westCol)} || P.x > ${rt(J.eastCol)} || P.z > ${rt(J.northCol)}) && P.y < ${rt(Ui+.05)} && P.z > ${rt(J.south-.1)} && P.z < ${rt(J.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${rt(J.northCol)} ? P.z - ${rt(J.northCol)} : (P.x < ${rt(J.westCol)} ? ${rt(J.westCol)} - P.x : P.x - ${rt(J.eastCol)});
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
}`,YM=`
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
}`,KM=`
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
}`,QM=`
precision highp float;
${Qg}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${sx}
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
}`;function ZM(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}G1.exports=e=>{let t=OM(),o=GM(),n=ZM(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>P1.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:XM,vert:YM,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>P1.gardenDetail}}),s=e({frag:QM,vert:KM,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*P1.leafShare/6)*6});return function(){i(),s()}};G1.exports.layout={G:J,YARD:No,SUN:Ya}});var dx=ve((MT,ux)=>{"use strict";R();var JM=pr().GLSL,ek=b0(),{C:hx}=dr(),xr=hx.x1+.35,H1=hx.zc,$1=[xr-7.3,2,H1],lx=5.2*Math.PI/180,fx=2100,tk=725,ok=1288,nk=1450,rk=2576,mi=H1-3.2,ch=H1+3.3,D1=xr+5,q1=xr+11.7,Vs=3.9,yl=xr+22.7,ih=40;function ak(){let e=[],t=[],o=[],n=[],r=ek.createBuilder(e,t,o,n),a=(l,p,h,u,v,d)=>{let m=[];for(let g=0;g<=v;g++){m.push([]);for(let y=0;y<=d;y++){let b=[0,1,2].map(E=>l[E]+p[E]*g/v+h[E]*y/d);m[g].push(r.vert(b,u,[0,0,0]))}}for(let g=0;g<v;g++)for(let y=0;y<d;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=ch-mi,s=.7;a([xr-s,0,mi],[D1-xr+s,0,0],[0,0,i],[0,1,0],6,4);let c=q1-D1,f=Math.hypot(c,Vs);return a([D1,0,mi],[c,Vs,0],[0,0,i],[-Vs/f,c/f,0],6,4),a([q1,Vs,mi],[yl-q1,0,0],[0,0,i],[0,1,0],6,4),a([xr-s,0,mi],[yl-xr+s,0,0],[0,ih,0],[0,0,1],12,12),a([xr-s,0,ch],[yl-xr+s,0,0],[0,ih,0],[0,0,-1],12,12),a([yl,0,mi],[0,ih,0],[0,0,i],[-1,0,0],8,4),a([xr-s,ih,mi],[yl-xr+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var Rr=e=>e.toFixed(5),sh=[[xr+3.4,3.7,mi+.01,1],[xr+8.6,4.1,ch-.01,-1],[xr+14.8,Vs+3.3,mi+.01,1],[xr+19.6,Vs+3.6,ch-.01,-1]],ik=`
precision highp float;
${JM}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${sh.length};
vec4 LAMP[NLAMP];

void main() {
	${sh.map((e,t)=>`LAMP[${t}] = vec4(${Rr(e[0])}, ${Rr(e[1])}, ${Rr(e[2])}, ${Rr(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Rr($1[0])}, ${Rr($1[1])}, ${Rr($1[2])});
	float c = ${Rr(Math.cos(lx))}, s = ${Rr(Math.sin(lx))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Rr(tk)} + ${Rr(fx)} * d.z / fw, ${Rr(ok)} - ${Rr(fx)} * up / fw);
	vec2 uv = px / vec2(${Rr(nk)}, ${Rr(rk)});
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
	for (int i = 0; i < ${sh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,sk=`
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
}`;ux.exports=e=>{let t=ak(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:ik,vert:sk,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,f)=>{let[l,p,h]=s,u=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[v,d,m]of u){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+v[0]*c[0]+d[0]*y*c[0]+m[0]*b*c[0],p+v[1]*c[1]+d[1]*y*c[1]+m[1]*b*c[1],h+v[2]*c[2]+d[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...v),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of sh){let c=s[3],f=s[2]+c*.42;a([s[0],s[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let p of[-1,1])a([s[0]+l*.11,s[1],f+p*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,f],[.15,.03,.15],0),a([s[0],s[1]+.27,f],[.05,.05,.05],0),a([s[0],s[1]-.19,f],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var xx=ve((ET,gx)=>{"use strict";R();var ck=pr().GLSL,{A:fh,BENCH:U1,SHAFT:B1,TREE:bl,oculusGLSL:lk}=ga(),fk=pa(),lh=bl.sxz,px=bl.sy,vx=bl.yaw;function hk(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let f=new Uint16Array(e,s,o*2);s+=o*4;let l=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let p=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:f,nrm:l,idx:p}}function uk(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(vx),i=Math.sin(vx);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*lh,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*px,l=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*lh;t[s*3]=fh.cx+a*c+i*l,t[s*3+1]=U1.soil+.02+f,t[s*3+2]=fh.zc-i*c+a*l;let p=e.nrm[s*3]/127/lh,h=e.nrm[s*3+1]/127/px,u=e.nrm[s*3+2]/127/lh,v=Math.hypot(p,h,u)||1;p/=v,h/=v,u/=v,o[s*3]=a*p+i*u,o[s*3+1]=h,o[s*3+2]=-i*p+a*u,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function mx(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var Qn=e=>e.toFixed(4),Xs=bl.crownC,Ys=bl.crownR,dk=`
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

const vec3 SHAFT = vec3(${Qn(B1[0])}, ${Qn(B1[1])}, ${Qn(B1[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${Qn(fh.cx)}, ${Qn(fh.zc)});
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
	vec3 cc = vec3(${Qn(Xs[0])}, ${Qn(Xs[1])}, ${Qn(Xs[2])});
	vec3 cr = vec3(${Qn(Ys[0])}, ${Qn(Ys[1])}, ${Qn(Ys[2])});
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
}`,Wi=Pi(),pk=`
precision highp float;
${ck}
uniform float time;
${Wi.lanternGLSL(Wi.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Wi.LANTERNS[Wi.TREE_LANTERN[0]].x.toFixed(3)}, ${Wi.LANTERNS[Wi.TREE_LANTERN[0]].y.toFixed(3)}, ${Wi.LANTERNS[Wi.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${lk()}

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
	vec3 rel = (v_pos - vec3(${Qn(Xs[0])}, ${Qn(Xs[1])}, ${Qn(Xs[2])})) / vec3(${Qn(Ys[0])}, ${Qn(Ys[1])}, ${Qn(Ys[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${Qn(U1.soil)}, ${Qn(U1.soil+.5)}, v_pos.y);

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
}`;gx.exports=e=>{let t=null,o=mx(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=mx(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=uk(hk(a));t=e({vert:dk,frag:pk,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>fk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Zs=ve((AT,kx)=>{"use strict";R();var Qs=Fi(),vk="res/audio/go-tomorrow.mp3",mk="res/audio/go-tomorrow.json",wx="gallery-sound",hh=[Qs.PIANO.x,1,Qs.PIANO.z],gk=Qs.R,Cr=!0;try{localStorage.getItem(wx)==="off"&&(Cr=!1)}catch(e){}var Ko=null,Zn=null,wl=null,_l=null,Vi=null,Ur=null,G0=!1,F0=!1,Ks=null,dh=null,yx=[],X1=(typeof performance!="undefined"?performance.now():0)/1e3;function xk(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let i=o.getChannelData(a),s=0;for(let c=0;c<t;c++){let f=c/e.sampleRate,l=.25+.6*Math.exp(-f*2.2);s+=(r()-s)*l,i[c]=s*Math.pow(1-c/t,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function yk(){if(Ko)return;Ko=new Audio,Ko.src=vk,Ko.loop=!0,Ko.preload="auto",Ko.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){Ko.volume=.2;return}try{Zn=new e;let t=Zn.createMediaElementSource(Ko);Vi=Zn.createBiquadFilter(),Vi.type="lowpass",Vi.frequency.value=1500,Vi.Q.value=.4,wl=Zn.createGain(),wl.gain.value=0,_l=Zn.createGain(),_l.gain.value=0;let o=Zn.createConvolver();o.buffer=xk(Zn),Ur=Zn.createGain(),Ur.gain.value=Cr?1:0,t.connect(Vi),Vi.connect(wl),wl.connect(Ur),Vi.connect(o),o.connect(_l),_l.connect(Ur),Ur.connect(Zn.destination)}catch(t){Zn=null,Ko.volume=.2}}var _x=0,Mx=performance.now()/1e3-X1,j1=()=>dh&&dh.dur||158,W1=()=>_x+(performance.now()/1e3-X1-Mx),bx=()=>Ko&&G0&&!Ko.paused&&F0;function V1(){if(G0||!Cr||!F0)return;yk();let e=()=>{try{Ko.currentTime=W1()%j1()}catch(t){}Ko.play().then(()=>{G0=!0}).catch(()=>{})};Zn&&Zn.state==="suspended"?Zn.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,V1,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Ko||!G0||(document.hidden?Ko.pause():Cr&&F0&&Ko.play().catch(()=>{}))}),fetch(mk).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(i=>i[2]).sort((i,s)=>i-s),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(i=>({t:i[0],w:i[1],x:Math.max(0,Math.min(1,(i[2]-r)/Math.max(a-r,.001)))}))};dh={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var uh={AT:hh,listen(e){if(!Zn||!G0)return;let t=e[0]-hh[0],o=e[2]-hh[2],n=Math.hypot(t,o,(e[1]-hh[1])*.5),r=Math.hypot(e[0]-Qs.C.x,e[2]-Qs.C.z)<gk+.4||e[0]<-.2&&Math.abs(e[2]-Qs.C.z)<4,a,i,s;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,i=.22+.16*f,s=16e3}else a=0,i=0,s=1500;let c=Zn.currentTime;wl.gain.setTargetAtTime(a,c,.35),_l.gain.setTargetAtTime(i,c,.35),Vi.frequency.setTargetAtTime(s,c,.35)},time(){let e=j1();return bx()?Ko.currentTime%e:(W1()%e+e)%e},enter(){if(F0=!0,Ks&&(clearTimeout(Ks),Ks=null),!!Cr){if(!G0)V1();else if(Ur&&Ur.gain.setTargetAtTime(1,Zn.currentTime,.2),Ko.paused){try{Ko.currentTime=W1()%j1()}catch(e){}Ko.play().catch(()=>{})}}},exit(){bx()&&(_x=Ko.currentTime,Mx=performance.now()/1e3-X1),F0=!1,Ko&&(Ur&&Ur.gain.setTargetAtTime(0,Zn.currentTime,.3),clearTimeout(Ks),Ks=setTimeout(()=>{Ks=null,F0||Ko.pause()},Ur?1500:0))},get cues(){return dh},get on(){return Cr},set(e){Cr=!!e;try{localStorage.setItem(wx,Cr?"on":"off")}catch(t){}Cr?F0&&(V1(),Ko&&G0&&Ko.play().catch(()=>{}),Ur&&Ur.gain.setTargetAtTime(1,Zn.currentTime,.2)):Ur?Ur.gain.setTargetAtTime(0,Zn.currentTime,.15):Ko&&Ko.pause(),yx.forEach(t=>t(Cr))},toggle(){uh.set(!Cr)},onChange(e){yx.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=Cr?t:o,n.setAttribute("aria-label",Cr?"Turn the piano off":"Turn the piano on"),n.title=Cr?"Piano on (heard in the piano room, while you leave a note)":"Piano off",n.setAttribute("aria-pressed",Cr?"true":"false")};return r(),uh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,i=>i.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),uh.toggle()}),n}};kx.exports=uh});var Ix=ve((LT,J1)=>{"use strict";R();var Q1=pr().GLSL,{A:Ex,BENCH:Nx,oculusGLSL:Rx}=ga(),Sx=pa(),Cx=Fi(),Ax=Zs(),bk=1.74,wk=1.877,yr=bk/wk,D0={x:Ex.cx-1.22,z:Ex.zc+.02,hipY:Nx.seat+.115},Qo=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Fa=e=>[-e[0],-e[1],-e[2],e[3]],Yi=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},ph=(e,t,o)=>Qo(Yi([0,0,1],o*Math.PI/180),Qo(Yi([0,1,0],t*Math.PI/180),Yi([1,0,0],e*Math.PI/180))),Z1=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},Qa=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],kl=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Xi=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],K1=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],mh=e=>Math.hypot(e[0],e[1],e[2]),Ml=e=>{let t=mh(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},xh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],_k=(e,t)=>{let o=[e[0],e[1],e[2]],n=Xi(xh(o,t),2);return kl(kl(t,Xi(n,e[3])),xh(o,n))},Mk=(e,t)=>{let o=xh(e,t),n=1+K1(e,t);return n<1e-6?[0,0,1,0]:Z1([o[0],o[1],o[2],n])};function Jr(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,f=a*a,l=n*r,p=n*a,h=r*a,u=i*n,v=i*r,d=i*a;return[(1-2*(c+f))*o[0],2*(l+d)*o[0],2*(p-v)*o[0],0,2*(l-d)*o[1],(1-2*(s+f))*o[1],2*(h+u)*o[1],0,2*(p+v)*o[2],2*(h-u)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function Bn(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function Y1(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,f=e[6]/o,l=e[8]/n,p=e[9]/n,h=e[10]/n,u=r+c+h,v;if(u>0){let d=Math.sqrt(u+1)*2;v=[(f-p)/d,(l-i)/d,(a-s)/d,d/4]}else if(r>c&&r>h){let d=Math.sqrt(1+r-c-h)*2;v=[d/4,(s+a)/d,(l+i)/d,(f-p)/d]}else if(c>h){let d=Math.sqrt(1+c-r-h)*2;v=[(s+a)/d,d/4,(p+f)/d,(l-i)/d]}else{let d=Math.sqrt(1+h-r-c)*2;v=[(l+i)/d,(p+f)/d,d/4,(a-s)/d]}return Z1(v)}var gh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{gh[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],gh[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],gh[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function $0(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function Tx(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*$0(e,.14,.07)+57*$0(e,.72,.12),n=5*$0(e,.06,.04)-9*$0(e,.42,.12)+17*$0(e,.62,.05)-3*$0(e,.85,.1),r=-26*$0(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function kk(e){let t=(e%1+1)%1,o=Tx(t),n=Tx(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var Lx=`
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
}`,yh=Pi(),zx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${Q1}
uniform float time;
${Cx.roomGLSL()}
${yh.lanternGLSL(yh.TREE_LANTERN)}
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
${Rx()}
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
}`;function Ek(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var Px={w:.13,h:.2},vh=e=>.011*(1-Math.pow(1-e,3));function Sk(){let e=[],t=[],o=[],n=[],r=[],a=(d,m,g,y,b,E,k)=>{let L=e.length/3;[d,m,g,y].forEach((C,Y)=>{e.push(...C),t.push(...b),o.push(...k[Y]),n.push(E)}),r.push(L,L+1,L+2,L,L+2,L+3)},{w:i,h:s}=Px,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,p=i+.001,h=c+.001;a([0,l,-h],[p,l,-h],[p,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[p,l+.001,h],[p,l+.001,-h],[0,1,0],2,f),a([-p,l,-h],[0,l,-h],[0,l,h],[-p,l,h],[0,-1,0],2,f),a([-p,l+.001,-h],[-p,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let u=8;for(let d of[1,-1]){for(let g=0;g<u;g++){let y=g/u,b=(g+1)/u,E=(.002+y*(i-.002))*d,k=(.002+b*(i-.002))*d,L=vh(y),C=vh(b),Y=d>0?y:1-y,F=d>0?b:1-b,oe=1,D=-(C-L)/(k-E);a([E,L,-c],[k,C,-c],[k,C,c],[E,L,c],[D,oe,0],3,[[Y,1],[F,1],[F,0],[Y,0]]),a([E,l+.001,c],[k,l+.001,c],[k,C,c],[E,L,c],[0,0,1],4,f),a([E,L,-c],[k,C,-c],[k,l+.001,-c],[E,l+.001,-c],[0,0,-1],4,f)}let m=i*d;a([m,l+.001,-c],[m,vh(1),-c],[m,vh(1),c],[m,l+.001,c],[d,0,0],4,f)}let v=10;for(let d=0;d<v;d++){let m=d/v,g=(d+1)/v,y=e.length/3;for(let[b,E]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,E),t.push(0,1,0),o.push(b,(E+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function Ak(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,f,l,p,h)=>{for(let u=0;u<p;u++){let v=i+(n()-.5)*c*2,d=s+(n()-.5)*f*2,m=20+n()*60,g=t.createRadialGradient(v,d,0,v,d,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),t.fillStyle=g,t.fillRect(v-m,d-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var Tk=`
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
		float r = u * ${Px.w.toFixed(3)};
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
}`,Lk=`
precision highp float;
${Q1}
uniform float time;
${yh.lanternGLSL(yh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Rx()}
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
}`;function zk(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],p=16;for(let h=0;h<l.length;h++){let[u,v,d,m]=l[h],g=m===2?.45:1;for(let y=0;y<=p;y++){let b=y/p*Math.PI*2;e.push(Math.cos(b)*u,v,Math.sin(b)*u*g);let E=Math.max(h-1,0),k=Math.min(h+1,l.length-1),L=l[k][0]-l[E][0],C=l[k][1]-l[E][1],Y=Math.hypot(L,C)||1;t.push(Math.cos(b)*C/Y,-L/Y,Math.sin(b)*C/Y/g),o.push(...d),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let u=0;u<p;u++){let v=h*(p+1)+u,d=v+p+1;r.push(v,d,v+1,v+1,d,d+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var Nk=`
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
}`,Rk=`
precision highp float;
${Q1}
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
}`,Ck=`
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
}`,Pk=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;J1.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[D0.x,1.9,D0.z],glow:0};Promise.all([fetch(t+"avatar.json").then(F=>F.json()),fetch(t+"avatar.bin").then(F=>F.arrayBuffer())]).then(([F,oe])=>{o=f(F,oe)}).catch(F=>console.error(F));let i=null;Promise.all([fetch(t+"motion.json").then(F=>F.ok?F.json():null),fetch(t+"motion.bin").then(F=>F.ok?F.arrayBuffer():null)]).then(([F,oe])=>{if(!F||!oe)return;let D={};for(let ne in F.clips){let q=F.clips[ne],V=q.bones.length,Le=new Float32Array(oe,q.mean,V*4),je={};q.bones.forEach((ze,me)=>{je[ze]=[Le[me*4],Le[me*4+1],Le[me*4+2],Le[me*4+3]]}),D[ne]=Object.assign({},q,{Q:new Int16Array(oe,q.q,q.frames*V*4),H:new Float32Array(oe,q.hips,q.frames*3),meanQ:je})}i=D}).catch(()=>{});function s(F,oe){let D=F.frames,ne=F.bones.length,q=(oe%D+D)%D,V=Math.floor(q)%D,Le=(V+1)%D,je=q-Math.floor(q),ze={};for(let dt=0;dt<ne;dt++){let Gt=(V*ne+dt)*4,Ue=(Le*ne+dt)*4,st=F.Q[Gt],kt=F.Q[Gt+1],to=F.Q[Gt+2],io=F.Q[Gt+3],on=F.Q[Ue],Ke=F.Q[Ue+1],pt=F.Q[Ue+2],vt=F.Q[Ue+3];st*on+kt*Ke+to*pt+io*vt<0&&(on=-on,Ke=-Ke,pt=-pt,vt=-vt),ze[F.bones[dt]]=Z1([st+(on-st)*je,kt+(Ke-kt)*je,to+(pt-to)*je,io+(vt-io)*je])}let me=V*3,ke=Le*3;return{q:ze,hips:[F.H[me]+(F.H[ke]-F.H[me])*je,F.H[me+1]+(F.H[ke+1]-F.H[me+1])*je,F.H[me+2]+(F.H[ke+2]-F.H[me+2])*je]}}let c=e.texture({data:[[[255,255,255,255]]]});function f(F,oe){let D=(Z,Fe)=>new Float32Array(oe,Z,Fe),ne=F.bones,q=ne.length,V={};ne.forEach((Z,Fe)=>{V[Z.name]=Fe});let Le=[];for(let Z=0;Z<q;Z++)Le.push(Array.from(D(F.ibm+Z*64,16)));let je=ne.map(Z=>Jr(Z.t,Z.r,Z.s)),ze=[];for(let Z=0;Z<q;Z++){let Fe=ne[Z].parent;ze[Z]=Fe<0?je[Z]:Bn(ze[Fe],je[Z])}let me=ze.map(Y1),ke=F.meshes.map(Z=>{let Fe=D(Z.pos,Z.n*3),Qe=D(Z.nrm,Z.n*3),Re=D(Z.uv,Z.n*2),it=new Uint8Array(oe,Z.jnt,Z.n*4),xt=D(Z.wgt,Z.n*4),At=new Uint16Array(oe,Z.idx,Z.ni),ut={};for(let $o in Z.morphs){let Do=Z.morphs[$o];ut[$o]={idx:new Uint16Array(oe,Do.idx,Do.n),d:D(Do.d,Do.n*3)}}let zt=new Float32Array(Z.n*3),mt=new Float32Array(Z.n*3),wt=new Float32Array(Z.n*3),_t=e.buffer({data:zt,usage:"dynamic"}),Lt=e.buffer({data:mt,usage:"dynamic"}),Ut=/avaturn_hair/.test(Z.name),ct=/EyeAO|Eyelash/.test(Z.name),oo=/Body|Head/.test(Z.name),go=Z.kind||0;return{m:Z,pos:Fe,nrm:Qe,uv:Re,jnt:it,wgt:xt,idx:At,morphs:ut,outP:zt,outN:mt,work:wt,pb:_t,nbuf:Lt,tex:Z.tex?Ek(e,t+Z.tex):c,kind:go,alphaScale:/EyeAO/.test(Z.name)?.25:1,blend:Z.blend||Ut,alphaCut:Ut?.35:ct?.02:0,skin:oo?1:0}}),dt=e({vert:Lx,frag:zx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!C?L.lamp:[0,0,0,0],court:()=>L||C?0:1,candle:()=>C?1:0},cull:{enable:!1}}),Gt=e({vert:Lx,frag:zx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!C?L.lamp:[0,0,0,0],court:()=>L||C?0:1,candle:()=>C?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Ue=.3;for(let Z of ke)if(Z.uvBuf=e.buffer(Z.uv),/Body/.test(Z.m.name)){let Fe=[],Qe=[];for(let Re=0;Re<Z.idx.length;Re+=3){let it=Z.idx[Re],xt=Z.idx[Re+1],At=Z.idx[Re+2];(Z.pos[it*3+1]<Ue&&Z.pos[xt*3+1]<Ue&&Z.pos[At*3+1]<Ue?Qe:Fe).push(it,xt,At)}Z.el=e.elements({data:new Uint16Array(Fe),type:"uint16"}),Qe.length&&(Z.sockEl=e.elements({data:new Uint16Array(Qe),type:"uint16"}))}else Z.el=e.elements({data:Z.idx,type:"uint16"});let st=ze[V.Hips],kt=Yi([1,0,0],-Math.PI/2),to=Bn(Jr([D0.x-st[12]*yr,D0.hipY-st[14]*yr,D0.z+st[13]*yr],kt,[1,1,1]),Jr([0,0,0],[0,0,0,1],[yr,yr,yr])),io=new Array(q),on=-1,Ke=(Z,Fe,Qe)=>Bn(Jr([Z,0,Fe],Yi([0,1,0],Qe),[1,1,1]),Jr([0,0,0],[0,0,0,1],[yr,yr,yr])),pt=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Z=>V[Z]),vt=pt.map(Z=>ze[Z][13]*yr);function Kt(Z){if(i&&i.walk)return Go(Z);let Fe=kk(Z.phase),Qe={},Re=mt=>{for(let wt in mt){let _t=mt[wt],Lt=ph(_t[0],_t[1],_t[2]);Qe[wt]=Qe[wt]?Qo(Qe[wt],Lt):Lt}};Re(Fe.swing),Re(Fe.pose);let it=Math.cos(Z.heading),xt=-Math.sin(Z.heading),At=Ke(Z.x+it*Fe.sway,Z.z+xt*Fe.sway,Z.heading),ut=new Array(q);for(let mt=0;mt<q;mt++){let wt=ne[mt],_t=je[mt],Lt=Qe[wt.name];if(Lt){let Ut=me[mt],ct=Qo(Fa(Ut),Qo(Lt,Ut));_t=Jr(wt.t,Qo(wt.r,ct),wt.s)}ut[mt]=wt.parent<0?Bn(At,_t):Bn(ut[wt.parent],_t)}let zt=1/0;pt.forEach((mt,wt)=>{zt=Math.min(zt,ut[mt][13]-vt[wt])});for(let mt=0;mt<q;mt++)ut[mt]=ut[mt].slice(),ut[mt][13]-=zt,io[mt]=Bn(ut[mt],Le[mt]);return{blink:0}}function Go(Z){let Fe=i.walk,Qe=s(Fe,(Z.phase+Fe.phase0)*Fe.frames),Re=Ke(Z.x,Z.z,Z.heading),it=new Array(q),xt=V.Hips;for(let ut=0;ut<q;ut++){let zt=ne[ut],mt=je[ut],wt=Qe.q[zt.name];if(wt){let _t=me[ut],Lt=Qo(Fa(_t),Qo(wt,_t)),Ut=ut===xt?[zt.t[0]+Qe.hips[0],zt.t[1]+Qe.hips[1],zt.t[2]+Qe.hips[2]]:zt.t;mt=Jr(Ut,Qo(zt.r,Lt),zt.s)}it[ut]=zt.parent<0?Bn(Re,mt):Bn(it[zt.parent],mt)}let At=1/0;pt.forEach((ut,zt)=>{At=Math.min(At,it[ut][13]-vt[zt])});for(let ut=0;ut<q;ut++)it[ut]=it[ut].slice(),it[ut][13]-=At,io[ut]=Bn(it[ut],Le[ut]);return{blink:0}}function Uo(Z,Fe){let Qe=Math.sin(Z*2*Math.PI/4.6),Re=Math.sin(Z*.37)*.6+Math.sin(Z*.83+1)*.4,it={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Qe*.8,0,0],Spine2:[4+Qe*.6,0,0],Neck:[10,0,0],Head:[12+Re*2,Re*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},xt={};for(let _t in it){let Lt=it[_t];xt[_t]=ph(Lt[0],Lt[1],Lt[2])}let At=Ke(Fe.x,Fe.z,Fe.heading),ut=new Array(q);for(let _t=0;_t<q;_t++){let Lt=ne[_t],Ut=je[_t],ct=xt[Lt.name];if(ct){let oo=me[_t],go=Qo(Fa(oo),Qo(ct,oo));Ut=Jr(Lt.t,Qo(Lt.r,go),Lt.s)}ut[_t]=Lt.parent<0?Bn(At,Ut):Bn(ut[Lt.parent],Ut)}let mt=ut[V.Hips][13]-(Fe.y+.1);for(let _t=0;_t<q;_t++)ut[_t]=ut[_t].slice(),ut[_t][13]-=mt,io[_t]=Bn(ut[_t],Le[_t]);let wt=Z%4.1;return{blink:wt<.16?Math.sin(wt/.16*Math.PI):0}}let Rt=Z=>[ze[Z][12],ze[Z][13],ze[Z][14]],Te=(Z,Fe)=>{let Qe=Ml(Z),Re=Ml(Qa(Fe,Xi(Qe,K1(Fe,Qe)))),it=xh(Qe,Re);return Y1([Qe[0],Qe[1],Qe[2],0,Re[0],Re[1],Re[2],0,it[0],it[1],it[2],0,0,0,0,1])},Oe={};for(let Z of["Left","Right"]){let Fe=V[Z+"Arm"],Qe=V[Z+"ForeArm"],Re=V[Z+"Hand"],it=V[Z+"HandMiddle1"];Oe[Z]={a:Fe,f:Qe,h:Re,upper:mh(Qa(Rt(Qe),Rt(Fe)))*yr,fore:mh(Qa(Rt(Re),Rt(Qe)))*yr,dir0:Ml(Qa(Rt(Qe),Rt(Fe))),qf0:Te(Qa(Rt(Re),Rt(Qe)),[0,1,0]),qh0:Te(Qa(Rt(it),Rt(Re)),[0,1,0])}}let Et={};for(let Z of["Left","Right"])Et[Oe[Z].a]={side:Z,part:0},Et[Oe[Z].f]={side:Z,part:1},Et[Oe[Z].h]={side:Z,part:2};function Ve(Z,Fe,Qe){if(!Z||!Z.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Re=0,it=Z.length-1,xt=-1;for(;Re<=it;){let Do=Re+it>>1;Z[Do].t<=Fe?(xt=Do,Re=Do+1):it=Do-1}let At=Z[Z.length-1],ut=Z[0],zt=xt>=0?Z[xt]:{t:At.t-Qe,x:At.x,w:At.w},mt=xt+1<Z.length?Z[xt+1]:{t:ut.t+Qe,x:ut.x,w:ut.w},wt=Math.max(.05,mt.t-zt.t),_t=Math.min(.14,wt*.45),Lt=Math.max(0,Math.min(1,(Fe-zt.t-_t)/Math.max(wt-_t-.03,.02))),Ut=Lt*Lt*(3-2*Lt),ct=Fe-zt.t,oo=(.55+.45*zt.w)*Math.exp(-ct/.11),go=mt.t-Fe,$o=go<.05?(.55+.45*mt.w)*(1-go/.05):0;return{x:zt.x+(mt.x-zt.x)*Ut,lift:Math.sin(Math.PI*Lt)*Math.min(.05,.012+wt*.03)*(wt>2.5?.4:1),press:Math.max(oo,$o),finger:$o>oo?((xt+1)*7+3)%4:(Math.max(xt,0)*7+3)%4,busy:Math.exp(-ct/.9)}}let We={lean:0,turn:0,nod:0,pedal:0,last:-1},lo=["Index","Middle","Ring","Pinky"];function _(Z){let Fe=Cx.PLAY,Qe=Ax.cues,Re=Ax.time(),it=Qe&&Qe.dur||158,xt={Left:Ve(Qe&&Qe.left,Re,it),Right:Ve(Qe&&Qe.right,Re,it)},At=.35;if(Qe&&Qe.level&&Qe.level.length){let Qt=Re*8,Zt=Math.floor(Qt)%Qe.level.length,hn=(Zt+1)%Qe.level.length;At=Qe.level[Zt]+(Qe.level[hn]-Qe.level[Zt])*(Qt-Math.floor(Qt))}let ut=We.last<0?0:Math.min(.1,Math.max(0,Z-We.last));We.last=Z;let zt=Qt=>Math.min(1,ut*Qt);We.lean+=(At-We.lean)*zt(1.2),We.turn+=(xt.Right.busy-xt.Left.busy-We.turn)*zt(1.5),We.nod+=(Math.max(xt.Right.press,xt.Left.press*.7)-We.nod)*zt(6),We.pedal+=((xt.Left.busy>.35?1:.15)-We.pedal)*zt(5);let mt=Math.sin(Z*2*Math.PI/4.6),wt=Math.sin(Re*.41)*.6+Math.sin(Re*.17+1)*.4,_t={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*We.pedal,0,0],Spine:[9+3.5*We.lean+wt*1.6,We.turn*2.5,-We.turn*1.6],Spine1:[7+mt*.8+2.5*We.lean,We.turn*2.5,-We.turn*1.2],Spine2:[6+mt*.6+wt*.8,We.turn*1.5,0],Neck:[13+3*We.lean,We.turn*3,0],Head:[15+We.nod*3.5+wt*1.5,We.turn*5,wt*1.5]};for(let Qt of["Left","Right"]){let Zt=Qt==="Left"?-1:1,hn=xt[Qt];lo.forEach((po,Pt)=>{let Co=Pt===hn.finger?hn.press:hn.press*.2;_t[Qt+"Hand"+po+"1"]=[0,0,Zt*(20+3*Pt+20*Co)],_t[Qt+"Hand"+po+"2"]=[0,0,Zt*(26+4*Pt-6*Co)],_t[Qt+"Hand"+po+"3"]=[0,0,Zt*14]}),_t[Qt+"HandThumb1"]=[0,Zt*-18,Zt*10]}let Lt={};for(let Qt in _t){let Zt=_t[Qt];Lt[Qt]=ph(Zt[0],Zt[1],Zt[2])}let Ut=ze[V.Hips][13]*yr,ct=Bn(Jr([Fe.stoolX,Fe.stoolTop+.1-Ut,Fe.stoolFront+.15],Yi([0,1,0],Fe.heading),[1,1,1]),Jr([0,0,0],[0,0,0,1],[yr,yr,yr])),oo=(Fe.keyX0+Fe.keyX1)/2,go={};for(let Qt of["Left","Right"]){let Zt=xt[Qt],hn=Qt==="Left"?oo-.4+.33*Zt.x:oo+.07+.33*Zt.x;go[Qt]=[hn,Fe.keyTop+.062+Zt.lift-Zt.press*.012,Fe.keyFront+.075]}let $o=new Array(q),Do={},aa=[0,1,0];for(let Qt=0;Qt<q;Qt++){let Zt=ne[Qt],hn=je[Qt],po=Lt[Zt.name],Pt=Et[Qt];if(Pt){let Co=Oe[Pt.side];if(Pt.part===0){let yn=$o[Zt.parent],Po=Bn(yn,je[Qt]),oi=[Po[12],Po[13],Po[14]],_i=Qo(Y1(yn),Fa(me[Zt.parent])),ni=Qa(go[Pt.side],oi),W=mh(ni),fe=(Co.upper+Co.fore)*.995;W>fe&&(ni=Xi(ni,fe/W),W=fe);let Je=Xi(ni,1/W),ht=(Co.upper*Co.upper-Co.fore*Co.fore+W*W)/(2*W),no=Math.sqrt(Math.max(0,Co.upper*Co.upper-ht*ht)),Io=[Pt.side==="Left"?-.6:.6,-.8,.3];Io=Ml(Qa(Io,Xi(Je,K1(Io,Je))));let fr=kl(oi,kl(Xi(Je,ht),Xi(Io,no)));Co.T=kl(oi,ni),Co.elbow=fr;let Aa=Ml(Qa(fr,oi)),On=Qo(Mk(_k(_i,Co.dir0),Aa),_i);Do[Qt]=On,po=Qo(Fa(_i),On)}else if(Pt.part===1){let yn=Qo(Te(Qa(Co.T,Co.elbow),aa),Fa(Co.qf0));Do[Qt]=yn,po=Qo(Fa(Do[Zt.parent]),yn)}else{let yn=xt[Pt.side],Po=Qo(Te([Pt.side==="Left"?.12:-.12,-.2-.1*yn.press,-1],aa),Fa(Co.qh0));Do[Qt]=Po,po=Qo(Fa(Do[Zt.parent]),Po)}}if(po){let Co=me[Qt],yn=Qo(Fa(Co),Qo(po,Co));hn=Jr(Zt.t,Qo(Zt.r,yn),Zt.s)}$o[Qt]=Zt.parent<0?Bn(ct,hn):Bn($o[Zt.parent],hn)}for(let Qt=0;Qt<q;Qt++)io[Qt]=Bn($o[Qt],Le[Qt]);a.pianist={head:[$o[V.Head][12],$o[V.Head][13],$o[V.Head][14]]};let ia=Z%4.3;return{blink:ia<.16?Math.sin(ia/.16*Math.PI):0}}function Ao(Z,Fe){if(C)return _(Z);if(L)return Uo(Z,L);if(Fe)return Kt(Fe);let Qe=Math.sin(Z*2*Math.PI/4.2),Re=Z%3.7,it=Re<.16?Math.sin(Re/.16*Math.PI):0,xt=Math.sin(Z*.45),At=Math.sin(Z*.31+.8),ut=Math.max(0,Math.sin(Z*.085)-.75)*4,zt={RightArm:[0,-22*ut,11*xt],RightForeArm:[0,8+26*ut,0],RightHand:[38*At,0,6*Math.sin(Z*.7)],LeftUpLeg:[0,0,3.2*Math.sin(Z*.36)],RightFoot:[5*Math.sin(Z*.52+.4),0,0],Head:[0,1.6*Math.sin(Z*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ct,oo)=>{let go=Math.sin(Z*1.1-oo*.5);zt["RightHand"+ct+"1"]=[0,0,8+12*go],zt["RightHand"+ct+"2"]=[0,0,6+10*go]});let mt={},wt=(ct,oo)=>{for(let go in ct){let $o=ct[go],Do=ph($o[0]*oo,$o[1]*oo,$o[2]*oo);mt[go]=mt[go]?Qo(mt[go],Do):Do}};wt(gh,1),wt({Spine1:[Qe*.8,0,0],Spine2:[Qe*.6,0,0]},1),wt(zt,1);let _t=new Array(q),Lt=new Array(q);for(let ct=0;ct<q;ct++){let oo=ne[ct],go=je[ct],$o=mt[oo.name];if($o){let Do=me[ct],aa=Qo(Fa(Do),Qo($o,Do));go=Jr(oo.t,Qo(oo.r,aa),oo.s)}_t[ct]=oo.parent<0?Bn(to,go):Bn(_t[oo.parent],go),Lt[ct]=null}for(let ct=0;ct<q;ct++)io[ct]=Bn(_t[ct],Le[ct]);let Ut=ct=>[ct[12],ct[13],ct[14]];return a.headPos=Ut(_t[V.Head]),a.hipsPos=Ut(_t[V.Hips]),a.headM=_t[V.Head],{blink:it}}function fo(Z,Fe){let{pos:Qe,nrm:Re,jnt:it,wgt:xt,outP:At,outN:ut,work:zt,m:mt}=Z,wt=mt.n,_t=Qe;if(Fe){zt.set(Qe);for(let Lt in Z.morphs){let Ut=Fe[Lt]||0;if(Ut<=0)continue;let ct=Z.morphs[Lt];for(let oo=0;oo<ct.idx.length;oo++){let go=ct.idx[oo]*3;zt[go]+=ct.d[oo*3]*Ut,zt[go+1]+=ct.d[oo*3+1]*Ut,zt[go+2]+=ct.d[oo*3+2]*Ut}}_t=zt}for(let Lt=0;Lt<wt;Lt++){let Ut=_t[Lt*3],ct=_t[Lt*3+1],oo=_t[Lt*3+2],go=Re[Lt*3],$o=Re[Lt*3+1],Do=Re[Lt*3+2],aa=0,ia=0,Qt=0,Zt=0,hn=0,po=0;for(let Co=0;Co<4;Co++){let yn=xt[Lt*4+Co];if(yn===0)continue;let Po=io[it[Lt*4+Co]];aa+=yn*(Po[0]*Ut+Po[4]*ct+Po[8]*oo+Po[12]),ia+=yn*(Po[1]*Ut+Po[5]*ct+Po[9]*oo+Po[13]),Qt+=yn*(Po[2]*Ut+Po[6]*ct+Po[10]*oo+Po[14]),Zt+=yn*(Po[0]*go+Po[4]*$o+Po[8]*Do),hn+=yn*(Po[1]*go+Po[5]*$o+Po[9]*Do),po+=yn*(Po[2]*go+Po[6]*$o+Po[10]*Do)}At[Lt*3]=aa,At[Lt*3+1]=ia,At[Lt*3+2]=Qt;let Pt=Math.hypot(Zt,hn,po)||1;ut[Lt*3]=Zt/Pt,ut[Lt*3+1]=hn/Pt,ut[Lt*3+2]=po/Pt}mt.grid&&!jo&&!L&&!C&&so(Z),Z.sway&&bi(Z),Z.pb.subdata(At),Z.nbuf.subdata(ut)}function so(Z){let[Fe,Qe]=Z.m.grid,Re=Z.outP,it=Z.outN,xt=Nx.seat+.012;for(let At=1;At<Fe;At++){let ut=Math.pow(1-At/(Fe-1),1.5);for(let zt=0;zt<Qe;zt++){let mt=(At*Qe+zt)*3;Re[mt+1]>xt?Re[mt+1]=xt+(Re[mt+1]-xt)*Math.max(ut,.15):Re[mt+1]=xt}}for(let At=0;At<it.length;At+=3)it[At]=0,it[At+1]=1,it[At+2]=0}let jo=!1,To=(Z,Fe,Qe,Re,it)=>({bone:V[Z],rate:Fe,damp:Qe,drag:Re,most:it,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),an={head:To("Head",15,.32,.012,.035),chest:To("Spine2",9,.38,.03,.1),hips:To("Hips",7,.42,.045,.16)},wo=-1;function ti(Z){let Fe=wo<0?0:Z-wo;wo=Z;for(let Qe in an){let Re=an[Qe],it=io[Re.bone],xt=ze[Re.bone],At=xt[12],ut=xt[13],zt=xt[14],mt=[it[0]*At+it[4]*ut+it[8]*zt+it[12],it[1]*At+it[5]*ut+it[9]*zt+it[13],it[2]*At+it[6]*ut+it[10]*zt+it[14]];if(!Re.p||!(Fe>0)||Fe>.25||Math.hypot(mt[0]-Re.p[0],mt[1]-Re.p[1],mt[2]-Re.p[2])>.5){Re.p=mt,Re.x=[0,0,0],Re.v=[0,0,0],Re.vel=[0,0,0];continue}let wt=[(mt[0]-Re.p[0])/Fe,(mt[1]-Re.p[1])/Fe,(mt[2]-Re.p[2])/Fe],_t=Math.max(1,Math.ceil(Fe/.016)),Lt=Fe/_t;for(let ct=0;ct<3;ct++){let oo=Math.max(-30,Math.min(30,(wt[ct]-Re.vel[ct])/Fe)),go=-wt[ct]*Re.drag;for(let $o=0;$o<_t;$o++)Re.v[ct]+=((go-Re.x[ct])*Re.rate*Re.rate-2*Re.damp*Re.rate*Re.v[ct]-oo)*Lt,Re.x[ct]+=Re.v[ct]*Lt}let Ut=Math.hypot(Re.x[0],Re.x[1],Re.x[2]);if(Ut>Re.most){let ct=Re.most/Ut;Re.x=[Re.x[0]*ct,Re.x[1]*ct,Re.x[2]*ct]}Re.p=mt,Re.vel=wt}}for(let Z of ke){let Fe=Z.m,Qe=Fe.n,Re=null,it=null;if(Fe.kind===9){it="head",Re=new Float32Array(Qe);for(let xt=0;xt<Qe;xt++){let At=Z.uv[xt*2]<-.5?0:Z.uv[xt*2+1];Re[xt]=At*At}}else if(Fe.name==="scarf"){it="chest",Re=new Float32Array(Qe);for(let xt=0;xt<Qe;xt++)Re[xt]=l(1.52,1.12,Z.pos[xt*3+1])}else if(Fe.grid){it="hips",Re=new Float32Array(Qe);let xt=Fe.grid[0],At=Fe.grid[1];for(let ut=0;ut<Qe;ut++)Re[ut]=Math.pow(Math.floor(ut/At)/(xt-1),1.6)}Re&&(Z.sway=Re,Z.spring=an[it],Z.loose=it)}function bi(Z){if(!jo&&!C&&!L)return;let Fe=Z.spring.x,Qe=Z.sway,Re=Z.outP;if(!(Math.abs(Fe[0])+Math.abs(Fe[1])+Math.abs(Fe[2])<1e-5))for(let it=0,xt=Qe.length;it<xt;it++){let At=Qe[it];At>0&&(Re[it*3]+=Fe[0]*At,Re[it*3+1]+=Fe[1]*At,Re[it*3+2]+=Fe[2]*At)}}function wi(Z,Fe){jo=!!Fe;let Qe=Ao(Z,Fe);ti(Z);let Re={eyeBlinkLeft:Qe.blink,eyeBlinkRight:Qe.blink};for(let it of ke)fo(it,Object.keys(it.morphs).length?Re:null);a.pose=Qe}return{parts:ke,update:wi,drawOpaque:dt,drawBlend:Gt,state:a}}function l(F,oe,D){let ne=Math.min(1,Math.max(0,(D-F)/(oe-F)));return ne*ne*(3-2*ne)}let p=Sk(),h=Ak(),u=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,v=e({vert:Tk,frag:Lk,attributes:{position:p.pos,normal:p.nrm,uv:p.uv,kind:p.kind},elements:new Uint16Array(p.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:u},cull:{enable:!1}}),d=zk(),m=e({vert:Nk,frag:Rk,attributes:{position:d.pos,normal:d.nrm,color:d.col,mat:d.mat},elements:new Uint16Array(d.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),g=e({vert:Ck,frag:Pk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(F){let oe=F.headM,D=ke=>{let dt=Math.hypot(...ke)||1;return ke.map(Gt=>Gt/dt)},ne=D([oe[4],oe[5],oe[6]]),q=D([oe[8],oe[9],oe[10]]),V=ne,Le=q.map(ke=>-ke),je=[Le[1]*V[2]-Le[2]*V[1],Le[2]*V[0]-Le[0]*V[2],Le[0]*V[1]-Le[1]*V[0]],ze=F.headPos,me=[0,1,2].map(ke=>ze[ke]+ne[ke]*.06+q[ke]*.185);return[je[0],je[1],je[2],0,Le[0],Le[1],Le[2],0,V[0],V[1],V[2],0,me[0],me[1],me[2],1]}let b=-1,E="",k=null,L=null,C=!1;function Y(F){if(!o)return;let oe=(Sx.motion,r()),D=k?[k.x,k.z,k.heading,k.phase].map(q=>q.toFixed(4)).join():"";(L||C||D!==E||!k&&Math.abs(oe-b)>(Sx.isPhone?1/30:0))&&(o.update(oe,k),b=oe,E=D);for(let q of o.parts)q.blend||(o.drawOpaque({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.el,tex:q.tex,alphaCut:q.alphaCut,skin:q.skin,kind:q.kind,alphaScale:q.alphaScale}),q.sockEl&&o.drawOpaque({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let ne=o.state;if(ne.headM&&!k&&!L&&!C){v({model:y(ne)});let q=ne.headPos,V=Math.sin(oe*1.3)*.02,Le=[q[0],q[1]+.62+V,q[2]+.05],je=oe*.6,ze=Jr(Le,Qo(Yi([0,1,0],je),Yi([0,0,1],.18)),[1.2,1.2,1.2]),me=.5+.5*Math.sin(oe*2);m({model:ze,pulse:me}),a.glowPos=Le,a.glow=.06+.03*me,g({center:[Le[0],Le[1]-.12,Le[2]],size:.1,pulse:me})}for(let q of o.parts)q.blend&&o.drawBlend({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.el,tex:q.tex,alphaCut:q.alphaCut,skin:q.skin,kind:q.kind,alphaScale:q.alphaScale})}return Y.state=a,Y.place=D0,Y.setWalk=F=>{k=F||null,k&&(a.glow=0)},Y.setSeat=F=>{L=F||null,a.glow=L?0:a.glow,b=-1},Y.setPiano=F=>{F=!!F,F!==C&&(C=F,C&&(a.glow=0),b=-1)},Y};J1.exports.PLACE=D0});var ed=ve((NT,Ox)=>{"use strict";R();Ox.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var od=ve((CT,Hx)=>{"use strict";R();var Dx=pa(),Fx=jc(),Ki=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function td(){return Dx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Ik=`
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
`,Gx=!1;function qx(){if(Gx)return;Gx=!0;let e=document.createElement("style");e.textContent=Ik,document.head.appendChild(e)}var Ok='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Fk(e){return!e||!e.visit||!td()?"":(qx(),`<button type="button" class="visit-btn" data-visit="${Ki(e.slug||"")}" aria-label="Visit what remained: watch ${Ki(e.title)} come to life">${Ok}<span>Visit what remained</span></button>`)}function Gk(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var El=null;function $k(e){if(El||!e||!e.visit)return;qx();let t=document.activeElement;document.body.classList.add("visiting");let o=xf()("images/web/"+e.slug+(Dx.isPhone?"-1024":"")+".webp"),n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${Ki(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Ki(e.title)}, ${Ki(Fx(e))}" src="${Ki(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Ki(e.title)}</span>
			<span class="visit-meta">${Ki(Fx(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=Gk(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),d()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),u()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let p=m=>m.stopImmediatePropagation();window.addEventListener("keyup",p,!0);let h=!1;function u(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function v(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>u()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&u()}),r.addEventListener("ended",u),r.addEventListener("error",u);function d(){if(El){El=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",p,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",d),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}u()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&d(),g.dataset.act==="again"&&(s.forEach(clearTimeout),v()))}),r.src=e.visit.video,El={close:d},requestAnimationFrame(()=>{n.classList.add("on"),c(v,1300)})}var $x={};function Dk(e){if(!e||!e.visit||$x[e.visit.video]||!td())return;$x[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}Hx.exports={available:td,button:Fk,open:$k,warm:Dk,get active(){return!!El}}});var jx=ve((IT,Ux)=>{"use strict";R();var qk=pa(),nc=[0,0],Js=[0,0],gi=null,rd=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(nc[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),nc[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),rd=performance.now())},{passive:!0});let e=()=>{rd=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(gi||(gi=[t.gamma,t.beta]),gi[0]+=(t.gamma-gi[0])*.01,gi[1]+=(t.beta-gi[1])*.01,nc[0]=Math.max(-1,Math.min(1,(t.gamma-gi[0])/14)),nc[1]=Math.max(-1,Math.min(1,(t.beta-gi[1])/14)))},{passive:!0})}var Bx=0,ec=null,bh=null,Za=[0,0,0],nd=0,tc=null,oc=0,q0={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Hk={apply(e,t){let o=Math.min(.1,Math.max(0,t-Bx));Bx=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let f=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],l=!ec;if(ec&&o>0){let b=[n[0]-ec[0],n[1]-ec[1],n[2]-ec[2]],E=Math.hypot(b[0],b[1],b[2]);if(E>2.5)l=!0;else{let L=Math.min(1,o*5);for(let C=0;C<3;C++)Za[C]+=(b[C]/o-Za[C])*L}let k=Math.hypot(r[0]-bh[0],r[1]-bh[1],r[2]-bh[2]);oc=E/o<.12&&k/o<.2?oc+o:0}l&&(Za[0]=Za[1]=Za[2]=0,oc=0),ec=n.slice(),bh=r.slice(),nd=Math.hypot(Za[0],Za[1],Za[2]);let p=Math.min(1,o*2.6);Js[0]+=(nc[0]-Js[0])*p,Js[1]+=(nc[1]-Js[1])*p;let h=Math.max(.03,Math.min(.32,i*.05)),u=(qk.isPhone&&!gi?1.5:1)*Math.min(1,oc/2.5),v=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*u,d=Math.sin(t*.097+.6)*h*.16*u,m=Js[0]*h+v,g=-Js[1]*h*.45+d;for(let b=0;b<3;b++)q0.eye[b]=n[b]+s[b]*m+f[b]*g,q0.target[b]=r[b]+(s[b]*m+f[b]*g)*.12;n[1]>.05&&(q0.eye[1]=Math.max(.05,q0.eye[1]));let y=Za[0]*s[0]+Za[2]*s[2];return q0.fov=e.fov+Math.min(3.5,nd*.55),q0.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),q0},pull(e,t){(tc===null||!(Math.abs(e.focus-tc)<40))&&(tc=e.focus);let o=1/60;tc+=(e.focus-tc)*Math.min(1,o*3.2),e.focus=tc,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,oc/3))},get speed(){return nd},get resting(){return oc>2&&performance.now()-rd>2e3}};Ux.exports=Hk});var ad=ve((FT,Wx)=>{R();Wx.exports=1e-6});var id=ve(($T,Vx)=>{R();Vx.exports=Bk;function Bk(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var Yx=ve((qT,Xx)=>{R();Xx.exports=Uk;function Uk(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var sd=ve((BT,Kx)=>{R();Kx.exports=jk;function jk(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var cd=ve((jT,Qx)=>{R();Qx.exports=Wk;function Wk(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var ld=ve((VT,Zx)=>{R();Zx.exports=Vk;function Vk(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var o3=ve((YT,t3)=>{R();t3.exports=Yk;var Jx=sd(),e3=cd(),Xk=ld();function Yk(e,t){var o=Jx(e[0],e[1],e[2]),n=Jx(t[0],t[1],t[2]);e3(o,o),e3(n,n);var r=Xk(o,n);return r>1?0:Math.acos(r)}});var r3=ve((QT,n3)=>{R();n3.exports=Kk;function Kk(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var i3=ve((JT,a3)=>{R();a3.exports=Qk;function Qk(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var c3=ve((tL,s3)=>{R();s3.exports=Zk;var fd=ad();function Zk(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=fd*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=fd*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=fd*Math.max(1,Math.abs(r),Math.abs(s))}});var f3=ve((nL,l3)=>{R();l3.exports=Jk;function Jk(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var u3=ve((aL,h3)=>{R();h3.exports=eE;function eE(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var hd=ve((sL,d3)=>{R();d3.exports=tE;function tE(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var v3=ve((lL,p3)=>{R();p3.exports=hd()});var ud=ve((hL,m3)=>{R();m3.exports=oE;function oE(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var x3=ve((dL,g3)=>{R();g3.exports=ud()});var dd=ve((vL,y3)=>{R();y3.exports=nE;function nE(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var w3=ve((gL,b3)=>{R();b3.exports=dd()});var M3=ve((yL,_3)=>{R();_3.exports=rE;function rE(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var E3=ve((wL,k3)=>{R();k3.exports=aE;function aE(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var A3=ve((ML,S3)=>{R();S3.exports=iE;function iE(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var L3=ve((EL,T3)=>{R();T3.exports=sE;function sE(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var N3=ve((AL,z3)=>{R();z3.exports=cE;function cE(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var C3=ve((LL,R3)=>{R();R3.exports=lE;function lE(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var I3=ve((NL,P3)=>{R();P3.exports=fE;function fE(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var pd=ve((CL,O3)=>{R();O3.exports=hE;function hE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var G3=ve((IL,F3)=>{R();F3.exports=pd()});var vd=ve((FL,$3)=>{R();$3.exports=uE;function uE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var q3=ve(($L,D3)=>{R();D3.exports=vd()});var md=ve((qL,H3)=>{R();H3.exports=dE;function dE(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var U3=ve((BL,B3)=>{R();B3.exports=md()});var gd=ve((jL,j3)=>{R();j3.exports=pE;function pE(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var V3=ve((VL,W3)=>{R();W3.exports=gd()});var Y3=ve((YL,X3)=>{R();X3.exports=vE;function vE(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var Q3=ve((QL,K3)=>{R();K3.exports=mE;function mE(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var J3=ve((JL,Z3)=>{R();Z3.exports=gE;function gE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var ty=ve((tz,ey)=>{R();ey.exports=xE;function xE(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var ny=ve((nz,oy)=>{R();oy.exports=yE;function yE(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var ay=ve((az,ry)=>{R();ry.exports=bE;function bE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var sy=ve((sz,iy)=>{R();iy.exports=wE;function wE(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var ly=ve((lz,cy)=>{R();cy.exports=_E;function _E(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],f=o[3],l=f*n+s*a-c*r,p=f*r+c*n-i*a,h=f*a+i*r-s*n,u=-i*n-s*r-c*a;return e[0]=l*f+u*-i+p*-c-h*-s,e[1]=p*f+u*-s+h*-i-l*-c,e[2]=h*f+u*-c+l*-s-p*-i,e}});var hy=ve((hz,fy)=>{R();fy.exports=ME;function ME(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=r+i*f-s*c,e[2]=a+i*c+s*f,e}});var dy=ve((dz,uy)=>{R();uy.exports=kE;function kE(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var vy=ve((vz,py)=>{R();py.exports=EE;function EE(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var gy=ve((gz,my)=>{R();my.exports=SE;var Qi=id()();function SE(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)Qi[0]=e[i],Qi[1]=e[i+1],Qi[2]=e[i+2],r(Qi,Qi,a),e[i]=Qi[0],e[i+1]=Qi[1],e[i+2]=Qi[2];return e}});var yy=ve((yz,xy)=>{R();xy.exports={EPSILON:ad(),create:id(),clone:Yx(),angle:o3(),fromValues:sd(),copy:r3(),set:i3(),equals:c3(),exactEquals:f3(),add:u3(),subtract:hd(),sub:v3(),multiply:ud(),mul:x3(),divide:dd(),div:w3(),min:M3(),max:E3(),floor:A3(),ceil:L3(),round:N3(),scale:C3(),scaleAndAdd:I3(),distance:pd(),dist:G3(),squaredDistance:vd(),sqrDist:q3(),length:md(),len:U3(),squaredLength:gd(),sqrLen:V3(),negate:Y3(),inverse:Q3(),normalize:cd(),dot:ld(),cross:J3(),lerp:ty(),random:ny(),transformMat4:ay(),transformMat3:sy(),transformQuat:ly(),rotateX:hy(),rotateY:dy(),rotateZ:vy(),forEach:gy()}});var _y=ve((wz,wy)=>{"use strict";R();function by(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}wy.exports=function(t){let o=t.ownerDocument||document,n=by(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let p=l.call(t);p&&p.catch&&p.catch(()=>{})}catch(p){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=by(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var Ay=ve((Ez,Sy)=>{"use strict";R();var H0=Ds(),B0=yy(),AE=_y(),Mz=Math.PI/4,kz=Math.PI/6,My=2,TE=1,LE=2.4,zE=2.4,NE=1e3,RE=5,CE=7,xd=dr().C,Sl=[[7,1.6],[7,xd.zc],[xd.x1-2.95,xd.zc]],Zi=Sl.slice(1).map((e,t)=>{let o=Sl[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),yd=Zi.reduce((e,t)=>e+t.len,0);function ky(e){let t=Math.max(0,Math.min(yd,e));for(let n of Zi){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=Sl[Sl.length-1];return[o[0],o[1]]}function PE(e){let t=0;for(let n=0;n<Zi.length;n++){let r=Zi[n],a=t+r.len;if(e<a-1e-4||n===Zi.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?Zi[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=Zi[Zi.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var IE=Math.PI/4,OE=7,FE=140,GE=70,Ey=(e,t,o)=>(1-e)*t+e*o,$E=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Sy.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[CE,My,Sl[0][1]],c=0,f=1,l=0,p=[.707,0,.707],h=[0,1,0],u=[0,0,0],v=.5,d=H0.identity([]),m=H0.identity([]),g=!1,y=[0,0,0],b=[0,0,0],E=1,k=!1;let L=Ke=>{n[1]+=Ke*IE},C=(Ke,pt,vt)=>{if(Ke=Math.max(Math.min(Ke,100),-100),pt=Math.max(Math.min(pt,100),-100),n[0]=0,k){a=0;return}for(a+=Ke;a>=vt;)L(1),a-=vt;for(;a<=-vt;)L(-1),a+=vt};AE(document.body).on("attain",Ke=>{Ke.on("data",pt=>{C(pt.dx,pt.dy,FE)})});let F=null,oe=null,D=0,ne={x:0,y:0},q=58,V=document.createElement("div");V.id="museum-mobile-controls",V.innerHTML=`

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
	`,document.body.appendChild(V);let Le=V.querySelector("#museum-joystick"),je=V.querySelector("#museum-joystick-knob"),ze=()=>{je.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},me=Ke=>{let pt=Ke.clientX-ne.x,vt=Ke.clientY-ne.y,Kt=Math.hypot(pt,vt);if(Kt>q&&(pt=pt/Kt*q,vt=vt/Kt*q),je.style.transform=`translate(
				calc(-50% + ${pt}px),
				calc(-50% + ${vt}px)
			)`,Kt<10){i[0]=0,i[2]=0;return}let Uo=pt/q,Rt=vt/q;i[0]=0,i[2]=Math.abs(Rt)>.15?Rt:0},ke=(Ke,pt)=>{for(let vt=0;vt<Ke.length;vt++)if(Ke[vt].identifier===pt)return Ke[vt];return null},dt=Ke=>!!(Ke&&Ke.closest&&Ke.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Gt=Ke=>{if(!dt(Ke.target)&&(Ke.cancelable&&Ke.preventDefault(),!k))for(let pt=0;pt<Ke.changedTouches.length;pt++){let vt=Ke.changedTouches[pt];if(F===null&&vt.clientX<window.innerWidth*.48){F=vt.identifier;let Kt=Le.getBoundingClientRect();ne.x=Kt.left+Kt.width/2,ne.y=Kt.top+Kt.height/2,me(vt)}else oe===null&&vt.clientX>=window.innerWidth*.48&&(oe=vt.identifier,D=vt.clientX,a=0)}},Ue=Ke=>{if(dt(Ke.target)||(Ke.cancelable&&Ke.preventDefault(),k))return;let pt=F===null?null:ke(Ke.touches,F);pt&&me(pt);let vt=oe===null?null:ke(Ke.touches,oe);if(vt){let Kt=vt.clientX-D;D=vt.clientX,C(Kt,0,GE)}},st=Ke=>{if(!dt(Ke.target)){Ke.cancelable&&Ke.preventDefault();for(let pt=0;pt<Ke.changedTouches.length;pt++){let vt=Ke.changedTouches[pt];vt.identifier===F&&(F=null,ze()),vt.identifier===oe&&(oe=null)}}};document.addEventListener("touchstart",Gt,{passive:!1}),document.addEventListener("touchmove",Ue,{passive:!1}),document.addEventListener("touchend",st,{passive:!1}),document.addEventListener("touchcancel",st,{passive:!1});let kt=document.createElement("style");kt.textContent=`

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
	`,document.head.appendChild(kt);var to={};let io=Ke=>{if(Ke.defaultPrevented||Ke.ctrlKey||Ke.altKey||Ke.metaKey)return;let pt=Ke.type==="keydown";to[Ke.code]=pt,pt&&!Ke.repeat&&!k&&((Ke.code==="KeyA"||Ke.code==="ArrowLeft")&&L(-1),(Ke.code==="KeyD"||Ke.code==="ArrowRight")&&L(1)),g=!1;let vt=to.KeyW||to.ArrowUp?1:0;i=[0,0,(to.KeyS||to.ArrowDown?1:0)-vt],Ke.preventDefault()};window.addEventListener("keydown",io),window.addEventListener("keyup",io);var on=0;return{pos:s,fmouse:r,forward:p,up:h,setPaused:Ke=>{k=!!Ke,k&&(i[0]=0,i[2]=0,ze())},place:(Ke,pt)=>{c=Math.max(0,Math.min(yd,Ke));let vt=ky(c);s[0]=vt[0],s[2]=vt[1],n[1]=pt,r[1]=pt,a=0,f=1},view:()=>d,proj:()=>(H0.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Ke})=>{let pt=Ke-on;on=Ke;let vt=[0,0,0],Kt=[];B0.set(p,Math.sin(r[1]),0,-Math.cos(r[1])),B0.set(h,0,1,0);let Go=g?zE:LE,Uo=Math.sin(n[1]),Rt=-Math.cos(n[1]),Te=PE(c),Oe=Uo*Te.ahead[0]+Rt*Te.ahead[1],Et=Uo*Te.back[0]+Rt*Te.back[1],Ve=f;Math.max(Oe,Et)>.3&&(Ve=Oe>=Et?1:-1);let We=k?0:-i[2]*Go;l+=(We-l)*(1-Math.exp(-Math.min(pt,.1)*5.5)),We===0&&Math.abs(l)<.01&&(l=0);let lo=l*Ve*Math.min(pt,.1);k&&(i[0]=0,i[2]=0,lo=0,l=0),lo!==0&&(f=Math.sign(lo)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(yd,c+lo));let _=ky(c);B0.set(u,_[0]-s[0],0,_[1]-s[2]);let Ao=B0.len(u);Ao===0&&v!==.25&&(v=(Math.abs((v+.5)%1-.5)-.25)*.8+.25,(v+.01)%.25<.02&&(v=.25));let fo=v;if(v+=Ao/(g?RE:NE),s[1]=My,B0.add(s,s,u),E<1){E+=pt/TE,E=Math.min(E,1);let so=$E(E);B0.set(s,Ey(so,y[0],b[0]),s[1],Ey(so,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(pt,.1)*OE),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),H0.identity(d),H0.rotateX(d,d,0),H0.rotateY(d,d,r[1]),H0.translate(d,d,B0.scale(vt,s,-1))}}}});var Ly=ve((Az,Ty)=>{"use strict";R();var{skylightGLSL:DE,Z_START:qE,Z_END:HE,GLASS_Y:BE}=Ts(),{oculusGLSL:UE,A:U0}=ga(),{windowLightGLSL:jE,C:wh}=dr(),{doorLightGLSL:WE}=Ni(),_h=pr(),Mh=Kf(),Jn=e=>e.toFixed(4),rc=.1,ac=700,j0={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032,ao:.75};function VE(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],p=t[9],h=t[10],u=t[11],v=t[12],d=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,E=o*f-a*i,k=n*c-r*s,L=n*f-a*s,C=r*f-a*c,Y=l*d-p*v,F=l*m-h*v,oe=l*g-u*v,D=p*m-h*d,ne=p*g-u*d,q=h*g-u*m,V=y*q-b*ne+E*D+k*oe-L*F+C*Y;return V?(V=1/V,e[0]=(s*q-c*ne+f*D)*V,e[1]=(r*ne-n*q-a*D)*V,e[2]=(d*C-m*L+g*k)*V,e[3]=(h*L-p*C-u*k)*V,e[4]=(c*oe-i*q-f*F)*V,e[5]=(o*q-r*oe+a*F)*V,e[6]=(m*E-v*C-g*b)*V,e[7]=(l*C-h*E+u*b)*V,e[8]=(i*ne-s*oe+f*Y)*V,e[9]=(n*oe-o*ne-a*Y)*V,e[10]=(v*L-d*E+g*y)*V,e[11]=(p*E-l*L-u*y)*V,e[12]=(s*F-i*D-c*Y)*V,e[13]=(o*D-n*F+r*Y)*V,e[14]=(d*b-v*k-m*y)*V,e[15]=(l*k-p*b+h*y)*V,e):null}function XE(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var YE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Ty.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>t.post>=2?2:4,i=Ue=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},Ue||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=e.framebuffer({color:c,depth:f||!0}),p=[s(),s()],h=[s(),s()],u=[s(),s()],v=[s(),s()],d=[s(),s()],m=new Array(16).fill(0),g=new Array(16).fill(0),y=[0,0,0],b={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},E={position:[-1,-1,3,-1,-1,3]},k=(Ue,st,kt)=>e(Object.assign({vert:YE,frag:Ue,attributes:E,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:st,framebuffer:e.prop("out")},kt||{})),L=[2.6,0,qE-3.2,12.6,BE,HE+.4],C=[U0.x0-.2,0,U0.z0,U0.x1,U0.domeTop,U0.z1],Y=[wh.x0,0,wh.z0,wh.x1,7.6,wh.z1],F=[.35,0,.35,13.65,7.6,9],oe=Ue=>`vec3(${Jn(Ue[0])}, ${Jn(Ue[1])}, ${Jn(Ue[2])}), vec3(${Jn(Ue[3])}, ${Jn(Ue[4])}, ${Jn(Ue[5])})`,D=k(`
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

	${DE()}
	${UE()}
	${jE()}
	${WE()}

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
			vec2 t = hitBox(eye, rd, ${oe(L)});
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
			vec2 t = hitBox(eye, rd, ${oe(C)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Jn(U0.dome.base)} && p.x > ${Jn(U0.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${oe(Y)});
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
			vec2 t = hitBox(eye, rd, ${oe(F)});
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
	}`,{depthTex:()=>f,invVP:()=>m,eye:()=>y,time:e.context("time"),night:()=>_h.night,strength:()=>ne}),ne=[0,0,0,0];function q(){let Ue=j0.shafts*b.shafts,st=_h.night;return ne[0]=Mh.box(L)?.06*Ue*(1+.9*st):0,ne[1]=Mh.box(C,!1,"court")?.1*Ue*(1+.9*st):0,ne[2]=Mh.box(Y)?.07*Ue*(1+.4*st):0,ne[3]=Mh.box(F)?.04*Ue*(1-.75*st):0,ne[0]+ne[1]+ne[2]+ne[3]>5e-4}let V=k(`
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
	}`,{src:e.prop("src"),dir:(Ue,st)=>[st.dir[0]/st.size[0],st.dir[1]/st.size[1]]}),Le=k(`
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
	}`,{src:e.prop("src"),texel:(Ue,st)=>[.5/st.size[0],.5/st.size[1]],threshold:e.prop("threshold")}),je=k(`
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
		return 2.0 * ${Jn(rc)} * ${Jn(ac)} / (${Jn(ac+rc)} - z * ${Jn(ac-rc)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>p[0],bloomA:()=>h[0],bloomB:()=>u[0],shafts:()=>v[0],occlTex:()=>d[0],aoK:()=>j0.ao,res:()=>[l.width,l.height],time:e.context("time"),exposure:()=>j0.exposure*b.exposure,vignette:()=>Math.min(1,j0.vignette+b.vignette+.22*_h.night),night:()=>_h.night,grain:()=>j0.grain,bloomK:()=>j0.bloom,letterbox:()=>b.letterbox,fade:()=>b.fade,fadeColor:()=>b.fadeColor,aperture:()=>t.post>=2?b.aperture:0,focus:()=>b.focus,hasDepth:n?1:0},{framebuffer:null}),ze=e({framebuffer:()=>l}),me=.55,ke=12,dt=k(`
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

		float R = ${Jn(me)};
		float a0 = hash12(gl_FragCoord.xy) * 6.2832;
		float occ = 0.0;
		for (int i = 0; i < ${ke}; i++) {
			float fi = float(i);
			float r = (fi + 0.5) / ${Jn(ke)};
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
		float ao = 1.0 - occ / ${Jn(ke)};
		// (far away it fades: the probes would be smaller than a pixel)
		ao = mix(ao, 1.0, smoothstep(18.0, 40.0, dist));
		gl_FragColor = vec4(vec3(ao), 1.0);
	}`,{depthTex:()=>f,invVP:()=>m,vp:()=>g,eye:()=>y,res:(Ue,st)=>[st.size[0],st.size[1]]}),Gt=k(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D src, depthTex;
	uniform vec2 dir;
	float lin(float d) {
		float z = d * 2.0 - 1.0;
		return 2.0 * ${Jn(rc)} * ${Jn(ac)} / (${Jn(ac+rc)} - z * ${Jn(ac-rc)});
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
	}`,{src:e.prop("src"),depthTex:()=>f,dir:(Ue,st)=>[st.dir[0]/st.size[0],st.dir[1]/st.size[1]]});return{shot:b,look:j0,hasDepth:n,capture(Ue,st,kt){let to=Math.max(.4,Math.min(1,t.scale||1)),io=Math.max(2,Math.round(Ue.drawingBufferWidth*to/2)*2),on=Math.max(2,Math.round(Ue.drawingBufferHeight*to/2)*2);(l.width!==io||l.height!==on)&&l.resize(io,on);let Ke=Math.max(1,Math.ceil(io/2)),pt=Math.max(1,Math.ceil(on/2));p.forEach(vt=>vt.resize(Ke,pt)),h.forEach(vt=>vt.resize(Math.max(1,Math.ceil(io/4)),Math.max(1,Math.ceil(on/4)))),u.forEach(vt=>vt.resize(Math.max(1,Math.ceil(io/8)),Math.max(1,Math.ceil(on/8)))),v.forEach(vt=>vt.resize(Math.max(1,Math.ceil(io/a())),Math.max(1,Math.ceil(on/a())))),d.forEach(vt=>vt.resize(Ke,pt)),XE(g,st.proj,st.view),VE(m,g),y[0]=st.eye[0],y[1]=st.eye[1],y[2]=st.eye[2],ze(()=>{e.clear({color:[0,0,0,1],depth:1}),kt()})},present(){let Ue=st=>[st.width,st.height];n&&t.post>=1&&q()?(D({out:v[0]}),V({out:v[1],src:v[0],dir:[1,0],size:Ue(v[0])}),V({out:v[0],src:v[1],dir:[0,1],size:Ue(v[0])})):e.clear({color:[0,0,0,1],framebuffer:v[0]}),n&&t.post>=2?(dt({out:d[0],size:Ue(d[0])}),Gt({out:d[1],src:d[0],dir:[1,0],size:Ue(d[0])}),Gt({out:d[0],src:d[1],dir:[0,1],size:Ue(d[0])})):e.clear({color:[1,1,1,1],framebuffer:d[0]}),Le({out:p[0],src:c,size:[l.width,l.height],threshold:0}),V({out:p[1],src:p[0],dir:[1,0],size:Ue(p[0])}),V({out:p[0],src:p[1],dir:[0,1],size:Ue(p[0])}),Le({out:h[0],src:p[0],size:Ue(p[0]),threshold:.42}),V({out:h[1],src:h[0],dir:[1,0],size:Ue(h[0])}),V({out:h[0],src:h[1],dir:[0,1],size:Ue(h[0])}),Le({out:u[0],src:h[0],size:Ue(h[0]),threshold:0}),V({out:u[1],src:u[0],dir:[1.5,0],size:Ue(u[0])}),V({out:u[0],src:u[1],dir:[0,1.5],size:Ue(u[0])}),je({out:null})}}}});var Py=ve((Lz,Cy)=>{"use strict";R();var zy=pr().GLSL,KE=b0(),bd=Ni(),{C:QE,FAR_DOOR:ZE}=dr(),JE=100*Math.PI/180,Ny=e=>[ZE.x-e[2],e[1],QE.zc-7+e[0]],Ry=e=>[-e[2],e[1],e[0]];function e8(e){let t=[],o=[],n=[],r=[],a=KE.createBuilder(t,o,n,r);bd.addFrames(a,e);let i=bd.glassPanes(e),s=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:s(t),normal:s(o),elements:n,glass:i}}Cy.exports=e=>{let t=bd.DOOR,o=["left","right"].map(l=>{let p=e8(l),h=p.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:p.position.map(u=>u.slice()),srcN:p.normal.map(u=>u.slice()),srcG:p.glass.map(u=>u.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(p.elements),type:"uint32"}),glassCount:p.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(p.glass.length*3),outGN:new Float32Array(p.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let p of o){let h=p.sign*l,u=Math.cos(h),v=Math.sin(h),d=y=>{let b=y[0]-p.hinge,E=y[2];return[p.hinge+b*u+E*v,y[1],-b*v+E*u]},m=y=>[y[0]*u+y[2]*v,y[1],-y[0]*v+y[2]*u];p.src.forEach((y,b)=>{let E=Ny(d(y));p.outP.set(E,b*3),p.outN.set(Ry(m(p.srcN[b])),b*3)});let g=Ry(m([0,0,1]));p.srcG.forEach((y,b)=>{p.outG.set(Ny(d(y)),b*3),p.outGN.set(g,b*3)}),p.pos.subdata(p.outP),p.nrm.subdata(p.outN),p.gpos.subdata(p.outG),p.gnrm.subdata(p.outGN)}}}r(0);let a=`
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
		${zy}
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
		${zy}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*JE);for(let l of o)i({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var Oy=ve((Nz,Iy)=>{"use strict";R();var t8=pr().GLSL,{skylightGLSL:o8}=Ts(),{oculusGLSL:n8}=ga(),{windowLightGLSL:r8}=dr(),Ga=.22;function a8(){let e=[],t=[],o=[],n=[],i=(l,p)=>{let h=Ga*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(p>0?1.06:.94),u=l*Ga-Ga*.12,v=p*h,d=Math.abs(p)*h*.42-.14*l*l*Ga;d+=Math.sin(l*17+(p>0?0:2.1))*.012*Ga*p*p;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=d*g-v*y,E=d*y+v*g;return[u,b,E+.05*Ga*l*l]},s=(l,p)=>{let u=i(Math.min(1,l+.01),p),v=i(Math.max(0,l-.01),p),d=i(l,Math.min(1,p+.01)),m=i(l,Math.max(-1,p-.01)),g=[u[0]-v[0],u[1]-v[1],u[2]-v[2]],y=[d[0]-m[0],d[1]-m[1],d[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],E=Math.hypot(b[0],b[1],b[2])||1,k=b[1]<0?-1:1;return[b[0]/E*k,b[1]/E*k,b[2]/E*k]};for(let l=0;l<=18;l++){let p=l/18;for(let h=0;h<=5*2;h++){let u=h/5-1;e.push(i(p,u)),t.push(s(Math.min(.97,Math.max(.03,p)),u)),o.push([p,u])}}let c=5*2+1;for(let l=0;l<18;l++)for(let p=0;p<c-1;p++){let h=l*c+p,u=h+1,v=h+c,d=v+1;n.push([h,v,u],[u,v,d])}let f=e.length;return e.push([-Ga*.12,0,-.003],[-Ga*.12,0,.003],[-Ga*.24,-.01,.0015],[-Ga*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:e,nrm:t,uv:o,idx:n}}Iy.exports=e=>{let t=a8(),o=e({vert:`
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
		${t8}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${o8()}
		${n8()}
		${r8()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=pr(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Ga*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var $y=ve((Cz,Gy)=>{"use strict";R();var{skylightGLSL:i8,Z_START:Fy,Z_END:s8}=Ts(),{oculusGLSL:c8,A:ic}=ga(),{windowLightGLSL:l8,C:W0}=dr();Gy.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=W0.x0+.6,f=W0.x1-.3,l=[];for(let v=0;v<o;v++)l.push([2.5+s()*10.5,.3+s()*8,Fy-3.5+s()*(s8-Fy+4.5),s()]);for(let v=0;v<n;v++)l.push([ic.x0+.3+s()*(ic.x1-ic.x0-.6),.3+s()*7.5,ic.z0+.3+s()*(ic.z1-ic.z0-.6),s()]);for(let v=0;v<r;v++)l.push([c+s()*(f-c),.2+s()*5.6,W0.z0+.25+s()*(W0.z1-W0.z0-.5),s()]);let p=v=>v.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],u=e({vert:`
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

		${i8()}
		${c8()}
		${l8()}

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
				p.z = clamp(p.z, ${p(W0.z0+.1)}, ${p(W0.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:v=>v.viewportHeight*.006,focus:(v,d)=>d&&d.focus||6,aperture:(v,d)=>d&&d.aperture||0,wake0:(v,d)=>(d&&d.wake||h)[0],wake1:(v,d)=>(d&&d.wake||h)[1],wake2:(v,d)=>(d&&d.wake||h)[2],wake3:(v,d)=>(d&&d.wake||h)[3],wakeDir:(v,d)=>d&&d.wakeDir||[0,0,1],gust:(v,d)=>d&&d.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return v=>u(v||{})}});var jy=ve((Iz,Uy)=>{"use strict";R();var{C:By}=dr(),Dy=pr(),qy=15.3,f8=37.1,Hy=By.z1+.9,h8=By.z1+.7+16-.6;Uy.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([qy+r()*(f8-qy),l,Hy+r()*(h8-Hy),r()])}let i=[],s=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>Dy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Dy.night>.01&&c()}}});var Sh=ve((Fz,oa)=>{"use strict";R();var Wy=pr(),Ja=Fi(),u8=Ds(),e0=Math.PI,ft=e=>(+e).toFixed(4),$a=e=>`vec3(${ft(e[0])}, ${ft(e[1])}, ${ft(e[2])})`,Xo={x0:-2.05,z0:41.45,z1:47.55,top:5.1},bo=-.55,jn=-2,cn=42.25,Pn=43.65,_a=45.35,Pr=46.75,er=2.75,ea=.12,d8=(bo+jn)/2,Ro={x:-1.3,y:1.42,w:.42,h:.52,z:Pn,cell:.026},Ft={x0:-1.85,x1:-.75,top:.98,z0:Pn-.3,z1:Pn-.02},ba={x0:-1.44,x1:-1.16,y0:Ft.top-.002,y1:Ft.top+.018},ta={cx:-1.3,cz:Pn-.165,w:.2,d:.255,y:Ft.top+.0012},cr={x:-1.03,z:Pn-.14,r:.042,h:.075},Zo={x:-.86,z:Pn-.12,h:.085,r:.019};Zo.flame=[Zo.x,Ft.top+.012+Zo.h+.028,Zo.z];var Eh={a:[cr.x-.004,Ft.top+.03,cr.z+.004],b:[cr.x-.13,Ft.top+.34,cr.z-.12]},ln=[-1.5,2.42,44.66],Cn=[-1.78,1.95,cn+.09],wa={x:-1.32,z:44.08,y:.64,heading:.32},Yy={window:{eye:[-1.3,1.33,42.8],target:[Ro.x,1.37,Pn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[ta.cx,Ft.top,ta.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},br={z0:(cn+Pn)/2+.03,z1:(cn+Pn)/2+.56,y0:.98,y1:1.78,x:bo+.03,cell:.047};Yy.peek={eye:[-1.2,1.42,42.95],target:[Ja.PLAY.stoolX-Ja.OFF[0],.85,Ja.PLAY.keyFront+.2],fov:30};var Ji={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function Vy(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${ft(Ro.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${$a(ln)};
		if (d.z > -0.001) return 0.0;
		float t = (${ft(Ro.z)} - ${ft(ln[2])}) / d.z;
		vec2 g = (${$a(ln)} + d * t).xy - vec2(${ft(Ro.x)}, ${ft(Ro.y)});
		float inWin = (1.0 - smoothstep(${ft(Ro.w/2-.01)}, ${ft(Ro.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${ft(Ro.h/2-.01)}, ${ft(Ro.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${ft(Ro.z)}) / abs(${ft(Ro.z)} - ${ft(ln[2])}) / ${ft(Ro.cell)};
		vec2 qc = fract(g / ${ft(Ro.cell)} + 0.5) - 0.5;
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
		vec3 c = ${$a(Zo.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${ft(cr.x)}, ${ft(cr.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${ft(cr.x)}, ${ft(cr.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${ft(cr.r*.7)}, ${ft(cr.r*1.6)}, r)) * (1.0 - smoothstep(${ft(Ft.top+cr.h*.8)}, ${ft(Ft.top+cr.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${$a(Eh.a)}, qb = ${$a(Eh.b)};
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
		bool inB1 = p.z < ${ft(Pn)} && p.z > ${ft(cn-.04)} && p.x < ${ft(bo+.02)};
		bool inPriest = p.z >= ${ft(Pn)} && p.z < ${ft(_a)} && p.x < ${ft(bo)};
		bool inB2 = p.z >= ${ft(_a)} && p.z < ${ft(Pr+.04)} && p.x < ${ft(bo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${ft(jn)}, ${ft(bo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${ft(Xo.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${$a(Ja.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${$a(ln)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${$a(Cn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${$a(Zo.flame)} - p;
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
	}`}var Un={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function Ky(){let e=[],t=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],i=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],s=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(f,l,p,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),o.push(p),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,p,h,u,v)=>{let d=s(i(a(l,f),a(h,f)));v=v||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,d,u,v[0]),g=c.v(l,d,u,v[1]),y=c.v(p,d,u,v[2]),b=c.v(h,d,u,v[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,p,h,u,v,d)=>{let m=(g,y,b,E,k,L,C,Y)=>c.quad(g,y,b,E,d,[[k,C],[L,C],[L,Y],[k,Y]]);m([h,l,p],[h,l,v],[h,u,v],[h,u,p],p,v,l,u),m([f,l,v],[f,l,p],[f,u,p],[f,u,v],v,p,l,u),m([f,u,p],[h,u,p],[h,u,v],[f,u,v],f,h,p,v),m([f,l,v],[h,l,v],[h,l,p],[f,l,p],f,h,v,p),m([f,l,v],[h,l,v],[h,u,v],[f,u,v],f,h,l,u),m([h,l,p],[f,l,p],[f,u,p],[h,u,p],h,f,l,u)},c.tube=(f,l,p,h)=>{h=h||6;let u=e.length/3;for(let v=0;v<f.length;v++){let d=f[Math.max(0,v-1)],m=f[Math.min(f.length-1,v+1)],g=s(a(m,d)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),E=i(b,g),k=typeof l=="function"?l(v/(f.length-1)):l;for(let L=0;L<=h;L++){let C=L/h*e0*2,Y=Math.cos(C),F=Math.sin(C),oe=[b[0]*Y+E[0]*F,b[1]*Y+E[1]*F,b[2]*Y+E[2]*F];c.v([f[v][0]+oe[0]*k,f[v][1]+oe[1]*k,f[v][2]+oe[2]*k],oe,p,[v/(f.length-1),L/h])}}for(let v=0;v<f.length-1;v++)for(let d=0;d<h;d++){let m=u+v*(h+1)+d,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,p,h,u)=>{u=u||20;let v=e.length/3;for(let d=0;d<p.length;d++){let[m,g]=p[d],y=p[Math.max(0,d-1)],b=p[Math.min(p.length-1,d+1)],E=b[0]-y[0],k=b[1]-y[1];for(let L=0;L<=u;L++){let C=L/u*e0*2,Y=Math.cos(C),F=Math.sin(C),oe=s([k*Y,-E,k*F]);c.v([f+Y*m,g,l+F*m],oe,h,[L/u,d/(p.length-1)])}}for(let d=0;d<p.length-1;d++)for(let m=0;m<u;m++){let g=v+d*(u+1)+m,y=g+u+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,p,h,u,v)=>{let d=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=d[m],y=d[(m+1)%4],b=[f+g[0],p,l+g[1]],E=[f+y[0],p,l+y[1]],k=[f,u,l],L=s(i(a(k,b),a(E,b))),C=c.v(b,L,v,[0,0]),Y=c.v(E,L,v,[1,0]),F=c.v(k,L,v,[.5,1]);r.push(C,F,Y)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,p,h]=[r[f],r[f+1],r[f+2]],u=m=>[e[m*3],e[m*3+1],e[m*3+2]],v=i(a(u(p),u(l)),a(u(h),u(l))),d=[0,1,2].map(m=>t[l*3+m]+t[p*3+m]+t[h*3+m]);v[0]*d[0]+v[1]*d[1]+v[2]*d[2]<0&&(r[f+1]=h,r[f+2]=p)}return c},c}function kh(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var rn={ys:1.78,a:.56,r:.78};rn.apex=rn.ys+Math.sqrt(rn.r*rn.r-(rn.r-rn.a)*(rn.r-rn.a));function p8(){let e=Ky(),t=Un.WOOD,o=Un.CARVED,n=Un.DARKWOOD,r=.06;e.box(jn,0,cn,bo+.08,ea,Pr,n),e.box(jn,er-.06,cn-.04,bo+.1,er,Pr+.04,t),e.box(bo,er-.2,cn-.06,bo+.12,er-.06,Pr+.06,t),e.box(bo+.02,er,cn-.08,bo+.14,er+.07,Pr+.08,n),e.box(jn,ea,cn,jn+.04,er-.06,Pr,t);for(let[l,p,h]of[[cn-r,cn,-1],[Pr,Pr+r,1]]){e.box(jn,0,l,bo+.08,er,p,t);let u=h<0?l-.018:p;e.box(jn+.18,.45,Math.min(u,u+.018),bo-.12,2.35,Math.max(u,u+.018),n),e.box(jn+.26,.55,Math.min(u,u+.03*h),bo-.2,2.25,Math.max(u,u+.03*h),t)}{let l=Pn-.02,p=Pn+.02,h=Ro.x-Ro.w/2,u=Ro.x+Ro.w/2,v=Ro.y-Ro.h/2,d=Ro.y+Ro.h/2;e.box(jn,ea,l,bo,ba.y0,p,t),e.box(jn,ba.y0,l,ba.x0,ba.y1,p,t),e.box(ba.x1,ba.y0,l,bo,ba.y1,p,t),e.box(jn,ba.y1,l,bo,v,p,t),e.box(jn,v,l,h,d,p,t),e.box(u,v,l,bo,d,p,t),e.box(jn,d,l,bo,er-.06,p,t);let m=.05,g=l-.025;e.box(h-m,v-m,g,u+m,v,l,n),e.box(h-m,d,g,u+m,d+m,l,n),e.box(h-m,v,g,h,d,l,n),e.box(u,v,g,u+m,d,l,n),e.box(h-m-.02,d+m,g-.015,u+m+.02,d+m+.03,l,t),e.box(ba.x0-.01,ba.y1,l-.006,ba.x1+.01,ba.y1+.008,l,Un.BRASS)}{let l=br,p=bo+.008,h=bo+.052;e.box(p,l.y0,l.z0-.035,h,l.y1,l.z0,n),e.box(p,l.y0,l.z0,h,l.y0+.04,l.z1,n),e.box(p,l.y1-.04,l.z0,h,l.y1,l.z1,n),e.box(p+.008,ea,l.z0-.035,h-.008,l.y0,l.z1,t),e.box(h-.008,ea+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),e.box(p-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,Un.BRASS)}e.box(jn,ea,_a-.02,bo,er-.06,_a+.02,t),e.box(Ft.x0,Ft.top-.035,Ft.z0,Ft.x1,Ft.top,Ft.z1,t),e.tube([[Ft.x0,Ft.top-.018,Ft.z0],[Ft.x1,Ft.top-.018,Ft.z0]],.02,t,8);for(let l of[Ft.x0+.1,Ft.x1-.1]){let p=[];for(let h=0;h<=8;h++){let u=h/8;p.push([l,Ft.top-.04-.22*u,Ft.z1-.02-.22*Math.cos(u*e0/2)])}e.tube(p,.018,n,6)}e.box(jn+.06,.12,cn,bo-.1,.44,cn+.42,n),e.box(jn+.08,.44,cn+.01,bo-.12,.52,cn+.41,Un.CUSHION),e.box(jn+.06,.12,Pr-.42,bo-.1,.44,Pr,n),e.box(Cn[0]-.05,Cn[1]-.16,cn,Cn[0]+.05,Cn[1]-.02,cn+.012,Un.BRASS),e.tube([[Cn[0],Cn[1]-.09,cn+.012],[Cn[0],Cn[1]-.09,Cn[2]-.01],[Cn[0],Cn[1]-.05,Cn[2]]],.006,Un.BRASS,6),e.lathe(Cn[0],Cn[2],[[0,Cn[1]-.05],[.028,Cn[1]-.035],[.034,Cn[1]+.01],[.024,Cn[1]+.06],[.026,Cn[1]+.065]],Un.LAMPGLASS,16),e.box(wa.x-.22,.12,wa.z-.24,wa.x+.22,wa.y-.05,wa.z+.16,n),e.box(wa.x-.24,wa.y-.05,wa.z-.26,wa.x+.24,wa.y,wa.z+.18,Un.CUSHION),e.tube([[ln[0],er-.06,ln[2]],[ln[0],ln[1]+.07,ln[2]]],.005,Un.BRASS,5),e.lathe(ln[0],ln[2],[[0,ln[1]+.09],[.03,ln[1]+.08],[.02,ln[1]+.06]],Un.BRASS,12),e.lathe(ln[0],ln[2],[[0,ln[1]-.06],[.035,ln[1]-.04],[.045,ln[1]],[.035,ln[1]+.05],[.018,ln[1]+.07]],Un.LAMPGLASS,16);let a=bo,i=bo+r;function s(l,p,h){let u=(l+p)/2,v=40,d=[];for(let g=0;g<=v;g++)d.push(ea+(er-.2-ea)*g/v);let m=[];d.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(rn.ys+(rn.apex-rn.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let E=h?kh(y,rn.ys,rn.a,rn.r):0,k=h?kh(b,rn.ys,rn.a,rn.r):0,L=(C,Y)=>[C,Y];e.quad([i,y,u-E],[i,y,l],[i,b,l],[i,b,u-k],t,[L(u-E,y),L(l,y),L(l,b),L(u-k,b)]),e.quad([i,y,p],[i,y,u+E],[i,b,u+k],[i,b,p],t,[L(p,y),L(u+E,y),L(u+k,b),L(p,b)]),(E>0||k>0)&&(e.quad([a,y,u-E],[i,y,u-E],[i,b,u-k],[a,b,u-k],n),e.quad([i,y,u+E],[a,y,u+E],[a,b,u+k],[i,b,u+k],n),e.quad([a,y,l],[a,y,u-E],[a,b,u-k],[a,b,l],t),e.quad([a,y,u+E],[a,y,p],[a,b,p],[a,b,u+k],t))}if(e.box(a,er-.2,l,i,er-.06,p,t),e.box(i,er-.42,l+.05,i+.012,er-.24,p-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,E=b<.5?ea+(rn.apex-ea)*(b*2):rn.apex-(rn.apex-ea)*((b-.5)*2),k=b<.5?-1:1;g.push([i+.01,Math.min(E,rn.apex-.002),u+k*(kh(E,rn.ys,rn.a,rn.r)+.03)])}e.tube(g,.022,n,6)}}s(cn,Pn,!0),s(_a,Pr,!0);{let l=Pn,p=_a,h=(l+p)/2;e.box(a,ea,l,i,er-.06,p,t);let u={ys:1.85,a:.55,r:.8},v=[];for(let d=0;d<=40;d++){let m=d/40,g=u.ys+Math.sqrt(u.r*u.r-(u.r-u.a)*(u.r-u.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;v.push([i+.012,Math.min(y,g-.002),h+b*kh(y,u.ys,u.a,u.r)])}v.push(v[0]),e.tube(v,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,p-.13],[i+.06,1.12,p-.13],[i+.06,1.12,p-.2]],.009,Un.BRASS,6)}[cn-.02,Pn,_a,Pr+.02].forEach((l,p)=>{let h=p===1||p===2,u=.075,v=er+(h?.62:.4);e.box(bo+.06,0,l-u,bo+.06+2*u,v,l+u,t),e.box(bo+.04,v-.04,l-u-.02,bo+.08+2*u,v,l+u+.02,n);let d=bo+.06+u,m=h?.62:.5;e.spire(d,l,v,u*.95,v+m,t);for(let g=1;g<=3;g++){let y=v+m*g/4.2,b=u*.95*(1-g/4.2)+.02;for(let[E,k]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[d+E*(b-.02),y-.02,l+k*(b-.02)],[d+E*(b+.015),y+.03,l+k*(b+.015)]],.008,n,4)}e.lathe(d,l,[[0,v+m-.02],[.03,v+m+.03],[.022,v+m+.07],[0,v+m+.1]],t,10)});let f=(l,p,h)=>{let u=(l+p)/2,v=bo+.075,d=er+.07,m=d+h,g=[1,0,0],y=e.v([v,d,l],g,o,[l,d]),b=e.v([v,d,p],g,o,[p,d]),E=e.v([v,m,u],g,o,[u,m]);e.idx.push(y,b,E);let k=e.v([v-.04,d,l],[-1,0,0],t),L=e.v([v-.04,d,p],[-1,0,0],t),C=e.v([v-.04,m,u],[-1,0,0],t);e.idx.push(k,C,L);let Y=[],F=[];for(let q=0;q<=10;q++){let V=q/10;Y.push([v+.02,d+h*V,l+(u-l)*V]),F.push([v+.02,d+h*V,p+(u-p)*V])}e.tube(Y,.022,n,6),e.tube(F,.022,n,6);for(let q=2;q<=8;q+=2)for(let V of[Y[q],F[q]])e.tube([V,[V[0]+.01,V[1]+.06,V[2]+(V===Y[q]?-.02:.02)]],.01,n,4);e.lathe(v,u,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([q,V])=>[q,V]),t,10);let oe=Math.min(.17,h*.32),D=d+h*.38,ne=[];for(let q=0;q<=24;q++){let V=q/24*e0*2;ne.push([v+.012,D+Math.sin(V)*oe,u+Math.cos(V)*oe])}e.tube(ne,.012,n,5)};f(cn-.02,Pn,.52),f(Pn,_a,.82),f(_a,Pr+.02,.52),e.lathe(cr.x,cr.z,[[0,Ft.top],[.036,Ft.top+.001],[cr.r,Ft.top+.012],[cr.r*1.02,Ft.top+.035],[.036,Ft.top+.052],[.02,Ft.top+.062],[.016,Ft.top+.068]],Un.INKGLASS,24),e.lathe(cr.x,cr.z,[[.016,Ft.top+.064],[.021,Ft.top+.066],[.022,Ft.top+.075],[.016,Ft.top+.076],[0,Ft.top+.072]],Un.BRASS,20);{let l=Eh.a,p=Eh.b,h=26,u=y=>{let b=Math.sin(y*e0)*.025;return[l[0]+(p[0]-l[0])*y+b*.6,l[1]+(p[1]-l[1])*y+b*.4,l[2]+(p[2]-l[2])*y+b]},v=[];for(let y=0;y<=h;y++)v.push(u(y/h));e.tube(v,y=>.0028*(1-.7*y)+6e-4,Un.QUILL,5);let d=e.norm(e.sub(p,l)),m=e.norm(e.cross(d,[.2,1,.1])),g=e.cross(m,d);for(let y of[-1,1]){let b=e.pos.length/3;for(let E=0;E<=h;E++){let k=E/h,L=u(k),C=k<.28?0:(y>0?.03:.02)*Math.sin(e0*Math.pow((k-.28)/.72,.75)),Y=C*.25,F=[L[0]+m[0]*y*C-g[0]*Y,L[1]+m[1]*y*C-g[1]*Y,L[2]+m[2]*y*C-g[2]*Y];e.v(L,g,Un.QUILL,[k,0]),e.v(F,g,Un.QUILL,[k,y])}for(let E=0;E<h;E++){let k=b+E*2;e.idx.push(k,k+2,k+1,k+1,k+2,k+3)}}}return e.orient()}function v8(e,t){let n=Xo.top,r=Xo.x0;e(r-.35,0,Xo.z0-.35,r,n+.35,Xo.z1+.35),e(r,0,Xo.z0-.35,-.35,n,Xo.z0),e(r,0,Xo.z1,-.35,n,Xo.z1+.35),e(r,n,Xo.z0,-.35,n+.35,Xo.z1),e(.35,0,Xo.z0-.42,.35+.16,n,Xo.z0),e(.35,0,Xo.z1,.35+.16,n,Xo.z1+.42),e(.35,n,Xo.z0-.5,.35+.18,n+.42,Xo.z1+.5),e(.35,n+.42,Xo.z0-.6,.35+.26,n+.52,Xo.z1+.6),e(.35,0,Xo.z0-.5,.35+.22,.42,Xo.z0),e(.35,0,Xo.z1,.35+.22,.42,Xo.z1+.5),e(-.35-.01,0,Xo.z0,.35+.12,.02,Xo.z1),t(r,Xo.z0,-.35,Xo.z1)}oa.exports=e=>{let t=Pi(),o=Wy.GLSL,n=p8(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${Ja.roomGLSL()}
	${Vy()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(ze,me,ke,dt){let Gt=[],Ue=[],st=[],kt=[],to=[],Ke=bo-.02,pt=rn.apex+.08,vt=ea+.015;for(let Kt=0;Kt<=40;Kt++){let Go=Kt/40,Uo=pt+(vt-pt)*Go;for(let Rt=0;Rt<=90;Rt++){let Te=Rt/90,Oe=ke?.2+.13*Go*Go:me-ze,Et=ze+Te*Oe,Ve=ke?.05+.02*Go:.035+.01*Math.sin(Te*7),We=Te*dt*e0*2+Math.sin(Go*2+Te*5)*.6,lo=Ke-Ve*(.5+.5*Math.sin(We))-(ke?.02*Go:0),Ao=[1,0,-(-Ve*.5*Math.cos(We)*dt*e0*2/Oe)],fo=Math.hypot(Ao[0],Ao[1],Ao[2]);Gt.push(lo,Uo,Et),Ue.push(Ao[0]/fo,0,Ao[2]/fo),st.push(2),kt.push(Math.sin(We),Go)}}for(let Kt=0;Kt<40;Kt++)for(let Go=0;Go<90;Go++){let Uo=Kt*91+Go,Rt=Uo+90+1;to.push(Uo,Rt,Uo+1,Uo+1,Rt,Rt+1)}for(let Kt=0;Kt<to.length;Kt+=3){let[Go,Uo,Rt]=[to[Kt],to[Kt+1],to[Kt+2]],Te=We=>[Gt[We*3],Gt[We*3+1],Gt[We*3+2]],Oe=[0,1,2].map(We=>Te(Uo)[We]-Te(Go)[We]),Et=[0,1,2].map(We=>Te(Rt)[We]-Te(Go)[We]);Oe[1]*Et[2]-Oe[2]*Et[1]<0&&(to[Kt+1]=Rt,to[Kt+2]=Uo)}return{pos:Gt,nrm:Ue,kind:st,uv:kt,idx:to}}let c=s(cn+.02,cn+.4,!0,6),f=s(_a+.04,Pr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(ze=>ze+c.pos.length/3))},p=e({vert:`
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
			vec3 p = vec3(${ft(Ro.x)} + corner.x * ${ft(Ro.w/2)}, ${ft(Ro.y)} + corner.y * ${ft(Ro.h/2)}, ${ft(Ro.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${ft(Ro.x)}, ${ft(Ro.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${ft(Ro.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${ft(br.x)}, ${ft((br.y0+br.y1)/2)} + corner.y * ${ft((br.y1-br.y0)/2-.04)}, ${ft((br.z0+br.z1)/2)} + corner.x * ${ft((br.z1-br.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${ft((br.z0+br.z1)/2)}, ${ft((br.y0+br.y1)/2)})) * ${ft(Ro.cell/br.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${ft(br.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${ft(Ro.x)} + corner.x * 0.75, ${ft(Ro.y)} + corner.y * 0.9, ${ft(_a-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=14,m=[];for(let ze=0;ze<d;ze++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(me=>m.push(me[0],me[1],(ze+.5)/d));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${ft(d8)} + c.x * ${ft((bo-jn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${ft(Pn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${Vy().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${$a(ln)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let ze=document.createElement("canvas");ze.width=512,ze.height=652;let me=ze.getContext("2d");me.fillStyle="#cdb38a",me.fillRect(0,0,ze.width,ze.height);let ke=7,dt=()=>(ke=ke*1664525+1013904223>>>0,ke/4294967296);for(let Ue=0;Ue<2400;Ue++){me.fillStyle=`rgba(${dt()<.5?"90,62,30":"245,230,200"},${.03+dt()*.05})`;let st=dt()*ze.width,kt=dt()*ze.height;me.fillRect(st,kt,1+dt()*14,1)}for(let Ue=0;Ue<26;Ue++){let st=dt()*ze.width,kt=dt()*ze.height,to=20+dt()*90,io=me.createRadialGradient(st,kt,0,st,kt,to);io.addColorStop(0,`rgba(120,80,35,${.04+dt()*.06})`),io.addColorStop(1,"rgba(120,80,35,0)"),me.fillStyle=io,me.fillRect(st-to,kt-to,to*2,to*2)}let Gt=me.createRadialGradient(ze.width/2,ze.height/2,ze.width*.3,ze.width/2,ze.height/2,ze.height*.72);return Gt.addColorStop(0,"rgba(110,70,30,0)"),Gt.addColorStop(1,"rgba(110,70,30,0.38)"),me.fillStyle=Gt,me.fillRect(0,0,ze.width,ze.height),ze})(),b=y?e.texture({data:y,min:"linear",mag:"linear",flipY:!1}):e.texture(),E=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),k=[18,24],L=[],C=[];for(let ze=0;ze<=k[1];ze++)for(let me=0;me<=k[0];me++)L.push(me/k[0],ze/k[1]);for(let ze=0;ze<k[1];ze++)for(let me=0;me<k[0];me++){let ke=ze*(k[0]+1)+me,dt=ke+k[0]+1;C.push(ke,ke+1,dt,ke+1,dt+1,dt)}let Y=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${ft(ta.cx+ta.w/2)} - s * ${ft(ta.w)};
			float zNear = ${ft(ta.cz-ta.d/2)};
			vec3 p = vec3(x, ${ft(ta.y)}, zNear + t * ${ft(ta.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${ft(ta.d)};
				float zf = zNear + 0.5 * ${ft(ta.d)};
				p.z = zf - dd * cos(a);
				p.y = ${ft(ta.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${ft(Pn+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(L),size:2}},elements:C,uniforms:{fold:()=>Ji.fold,slide:()=>Ji.slide,paperTex:b,inkTex:E},cull:{enable:!1}}),F=Ky();F.lathe(Zo.x,Zo.z,[[0,Ft.top],[.048,Ft.top+.002],[.052,Ft.top+.012],[.046,Ft.top+.014],[.022,Ft.top+.012],[0,Ft.top+.012]],Un.BRASS,24),F.lathe(Zo.x,Zo.z,[[0,Ft.top+.012],[Zo.r,Ft.top+.012],[Zo.r*1.02,Ft.top+.012+Zo.h*.6],[Zo.r,Ft.top+.012+Zo.h],[Zo.r*.75,Ft.top+.012+Zo.h-.004],[0,Ft.top+.012+Zo.h-.008]],9,20),F.tube([[Zo.x,Ft.top+.012+Zo.h-.008,Zo.z],[Zo.x+.001,Ft.top+.012+Zo.h+.012,Zo.z]],.0012,8,4),F.orient();let oe=e({vert:a,frag:`${r}
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
				float up = smoothstep(${ft(Ft.top+Zo.h*.4)}, ${ft(Ft.top+.012+Zo.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:F.pos,normal:F.nrm,kind:F.kind,uv:F.uv},elements:F.idx}),D=e({vert:`
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
			vec3 p = ${$a(Zo.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),ne=[0,0],q=e({uniforms:{view:e.prop("view")}}),V=new Float32Array(16);function Le(ze){u8.translate(V,ze.view,Ja.OFF),q({view:V},()=>je(ze))}function je(ze){let me=ze&&ze.reflected;if(i(),p(),h(),u(),Ji.ink&&Ji.inkDirty){let ke=Ji.ink;ne[0]!==ke.width||ne[1]!==ke.height?(E({data:ke,min:"linear",mag:"linear",flipY:!1}),ne=[ke.width,ke.height]):E.subimage(ke),Ji.inkDirty=!1}Ji.shown&&Y(),Wy.night>.01&&(oe(),me||(D({halo:1}),D({halo:0}))),me||(v(),g())}return Le};oa.exports.addBay=v8;oa.exports.BAY=Xo;oa.exports.OFF=Ja.OFF;oa.exports.STATE=Ji;var Xy=e=>[e[0]+Ja.OFF[0],e[1]+Ja.OFF[1],e[2]+Ja.OFF[2]];oa.exports.SHOTS=Object.fromEntries(Object.entries(Yy).map(([e,t])=>[e,Object.assign({},t,{eye:Xy(t.eye),target:Xy(t.target)})]));oa.exports.SEAT=wa;oa.exports.LAMP=ln;oa.exports.SCONCE=Cn;oa.exports.GRILLE=Ro;oa.exports.PAPER=ta;oa.exports.ZONE={FRONT:bo,BACK:jn,ZA:cn,ZB:Pn,ZC:_a,ZD:Pr}});var wd=ve(($z,Zy)=>{"use strict";R();function m8(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var Qy={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},g8=["th","ng","er"];function x8(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(Qy).forEach(d=>{r[d]=Qy[d]*o.pace});let a=[],i=0,s=0,c=0,f=[];function l(d,m){let g=m8(o.seed),y=o.xh,b={},E=V=>{let Le=t[V];if(!Le)return null;let je=Math.floor(g()*Le.length);return Le.length>1&&je===b[V]&&(je=(je+1)%Le.length),b[V]=je,Le[je]},k=V=>{if(t[V])return{g:E(V),sc:1};let Le=V.toLowerCase();return t[Le]?{g:E(Le),sc:/[A-Z]/.test(V)?1.32:1}:null},L=[],C=.15,Y=0,F=0,oe=(g()-.5)*.02,D=m/y,ne=d.split(/\n\s*\n/);ne.forEach((V,Le)=>{V.replace(/\s+/g," ").trim().split(" ").forEach(ze=>{let me=[];for(let Ue=0;Ue<ze.length;Ue++){let st=ze.substr(Ue,2).toLowerCase();if(g8.indexOf(st)>=0&&t[st]&&g()<.55&&ze[Ue]===ze[Ue].toLowerCase()){me.push({ch:st,gl:{g:E(st),sc:1}}),Ue++;continue}let kt=k(ze[Ue]);kt&&kt.g&&me.push({ch:ze[Ue],gl:kt})}let ke=me.map(()=>.17+g()*.07),dt=me.reduce((Ue,st,kt)=>Ue+st.gl.g.w*st.gl.sc+ke[kt],0);Y>0&&Y+dt>D&&(Y=0,F++,C+=r.line,oe=(g()-.5)*.02),me.forEach((Ue,st)=>{let kt=Ue.gl.g,to=Ue.gl.sc*(.95+g()*.1),io=(g()-.5)*.06,on=(g()-.5)*.08+oe*Y,Ke=Y,pt=F*o.lineHeight+1.9+on,vt=Math.cos(io),Kt=Math.sin(io),Go=Rt=>[(Ke+(Rt[0]*vt-Rt[1]*Kt)*to)*y,(pt+(Rt[0]*Kt+Rt[1]*vt)*to)*y],Uo=(Rt,Te)=>{let Oe=0;for(let Ve=1;Ve<Rt.length;Ve++)Oe+=Math.hypot(Rt[Ve][0]-Rt[Ve-1][0],Rt[Ve][1]-Rt[Ve-1][1]);let Et=Math.max(o.minDur||(Te?.06:.07),Oe/(o.speed*y));L.push({pts:Rt,L:Oe,start:C,dur:Et,dot:Te}),C+=Et};if(kt.s.forEach((Rt,Te)=>{Te>0&&(C+=r.stroke),Uo(Rt.map(Go),!1)}),kt.dot){let Rt=kt.s[0][0];kt.s.forEach(Oe=>Oe.forEach(Et=>{Et[1]<Rt[1]&&(Rt=Et)}));let Te=Go([Rt[0]+.1,-1.36]);C+=r.stroke*1.4,Uo([Te,[Te[0]+y*.05,Te[1]+y*.03]],!0)}C+=r.letter*(.6+g()*.8),Y+=kt.w*to+ke[st]});let Gt=ze[ze.length-1];C+=/[.!?]/.test(Gt)?r.stop:/[,;:]/.test(Gt)?r.comma:r.word,Y+=.55+g()*.2}),Le<ne.length-1&&(Y=0,F+=1.6,C+=r.para)});let q=(F+1)*o.lineHeight*y+y*1.55;return{strokes:L,total:C,height:q}}function p(d,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(d*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=d+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,d,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;function u(d,m){let g=f[d.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let E=1;E<d.pts.length;E++){let k=d.pts[E-1],L=d.pts[E],C=Math.hypot(L[0]-k[0],L[1]-k[1]),Y=b,F=b+C;if(b=F,F<=g||C===0)continue;if(Y>=m)break;let oe=Math.max(0,(g-Y)/C),D=Math.min(1,(m-Y)/C),ne=[k[0]+(L[0]-k[0])*oe,k[1]+(L[1]-k[1])*oe],q=[k[0]+(L[0]-k[0])*D,k[1]+(L[1]-k[1])*D],V=(Y+F)/2/(d.L||1),Le=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,V)));n.lineWidth=y*Le,n.globalAlpha=.86+.14*Le,n.beginPath(),n.moveTo(ne[0],ne[1]),n.lineTo(q[0],q[1]),n.stroke()}d.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(d.pts[0][0],d.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[d.i]=m}function v(d){let m=(d-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);u(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(v):o.onDone&&o.onDone()}return{write(d,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=l(d,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(d):o.maxTime;if(b&&i>b){let k=b/i;a.forEach(L=>{L.start*=k,L.dur*=k}),i=b}a.forEach((k,L)=>{k.i=L}),f=[],p(g,y.height);let E=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||E){a.forEach(k=>u(k,k.L));return}return c=performance.now(),s=requestAnimationFrame(v),i},finish(){cancelAnimationFrame(s),a.forEach(d=>u(d,d.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}Zy.exports=x8});var Md=ve((qz,Jy)=>{"use strict";R();var _d=pr(),y8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',b8='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Jy.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=_d.isNight;o.innerHTML=r?y8:b8,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),_d.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),_d.toggle()}),o}});var rb=ve((Bz,nb)=>{"use strict";R();var In=Sh(),w8=Fi(),_8=wd(),eb=Zs(),M8="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",tb=100,xi=e=>Math.max(0,Math.min(1,e)),jr=(e,t,o)=>{let n=xi((o-e)/(t-e));return n*n*(3-2*n)},Da=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Ma=(e,t,o)=>e+(t-e)*o,Tl=(e,t,o)=>[Ma(e[0],t[0],o),Ma(e[1],t[1],o),Ma(e[2],t[2],o)];function V0(e,t){let o=e.length-1,n=xi(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-f[l])*a*a+(-i[l]+3*s[l]-3*c[l]+f[l])*a*a*a))}var Ah=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function kd(e,t,o){return{eye:Tl(e.eye,t.eye,o),target:Tl(e.target,t.target,o),fov:Ma(e.fov,t.fov,o),roll:Ma(e.roll||0,t.roll||0,o)}}var Ll=w8.PLAY,qa=[Ll.stoolX,1,Ll.keyFront+.25],Th=[Ll.stoolX,Ll.keyTop+.03,Ll.keyFront-.05],Sd=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[qa[0]+Math.cos(t)*o,1.15+.4*e,qa[2]+Math.sin(t)*o]},sc=[{eye:Sd(1),target:[qa[0],.92,qa[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:Th},{eye:[qa[0]+1,1.14,qa[2]+1.72],target:[Th[0]+.05,.8,Th[2]+.05],fov:40,aperture:1,to:Th}],ob=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),Lh=e=>({fade:0,letterbox:.55,exposure:1.3,focus:ob(e.eye,e.to||qa),aperture:e.aperture,vignette:.42,shafts:0}),Ed={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},cc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Al={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},k8=`
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
`;nb.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=k8,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),p=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,u=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let Te=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(tb-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>tb&&Te&&(s.value=Te[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(Te=>s.addEventListener(Te,Oe=>Oe.stopPropagation())),a.addEventListener("pointerdown",Te=>Te.stopPropagation()),a.addEventListener("click",Te=>{let Oe=Te.target.closest("button");Oe&&(Te.stopPropagation(),Oe.dataset.act==="send"&&Le(),Oe.dataset.act==="leave"&&me())});let v=!1,d="",m=0,g=null,y=null,b="",E=null,k=0,L="",C=document.createElement("canvas");C.width=512,C.height=652;function Y(Te){Te!==L&&(L=Te,i.classList.toggle("on",Te==="write"),f.classList.toggle("on",Te==="hint"),l.classList.toggle("on",v&&Te==="hint"&&(d==="room"||d==="peek")),p.classList.toggle("on",Te==="final"),Te==="write"&&setTimeout(()=>{if(d==="write")try{s.focus({preventScroll:!0})}catch(Oe){}},900))}function F(Te){d=Te,m=0}function oe(Te,Oe){if(v)return;v=!0,g={eye:Te.eye.slice(),target:Te.target.slice(),fov:Te.fov,roll:Te.roll||0},y=Object.assign({},Oe),b="",s.value="",c.disabled=!0,In.STATE.fold=0,In.STATE.slide=0,In.STATE.shown=!0,In.STATE.active=!0;let Et=C.getContext("2d");Et.setTransform(1,0,0,1,0,0),Et.clearRect(0,0,C.width,C.height),In.STATE.ink=C,In.STATE.inkDirty=!0,document.body.classList.add("confessing"),eb.enter();let Ve=sc[0],We=u?.3:5.5,lo=u?.3:3.6;D.i=0,D.u=0,D.T=We+lo,D.moving=!0,D.rest=0,D.raw=!0,D.lookFrom=y,D.lookTo=Lh(Ve);let _=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Sd(0)],Ao=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[qa[0],1,qa[2]-.1],Ve.target];D.path=fo=>{let so=fo*(We+lo);if(so<We){let an=so/We,wo=1-Math.cos(an*Math.PI/2);return{eye:V0(_,wo),target:V0(Ao,jr(0,1,wo*1.05)),fov:Ma(g.fov,52,jr(.4,1,wo)),roll:(g.roll||0)*(1-wo)}}let jo=(so-We)/lo,To=1-Math.pow(1-jo,2.4);return{eye:Sd(To),target:Ve.target,fov:Ma(52,Ve.fov,To),roll:.05*Math.sin(Math.PI*To)}},F("room"),Y("")}let D={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},ne=()=>h?"Scroll on":"Swipe up";function q(Te){let Oe=Gt,Et=sc[Te],Ve={eye:Oe.eye.slice(),target:Oe.target.slice(),fov:Oe.fov,roll:Oe.roll||0},We=Tl(Ve.eye,Et.eye,.5),lo=[We[0]-qa[0],0,We[2]-qa[2]],_=Math.hypot(lo[0],lo[2])||1,Ao=[We[0]+lo[0]/_*.6,We[1]+.3,We[2]+lo[2]/_*.6];D.path=fo=>{let so=1-fo;return{eye:[0,1,2].map(jo=>so*so*Ve.eye[jo]+2*so*fo*Ao[jo]+fo*fo*Et.eye[jo]),target:Tl(Ve.target,Et.target,jr(0,1,fo)),fov:Ma(Ve.fov,Et.fov,fo),roll:Ve.roll*so}},D.lookFrom=V||Lh(sc[D.i]),D.lookTo=Lh(Et),D.i=Te,D.u=0,D.moving=!0,D.rest=0,D.raw=!1,D.T=u?.4:Math.max(2.8,Math.min(4.4,ob(Ve.eye,Et.eye)*1+1.6)),Y("")}let V=null;function Le(){if(d!=="write"||(b=s.value.trim(),!b))return;s.blur(),Y("");let Te=Math.max(10,Math.min(22,24-b.length/28));E=_8(C,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:Te,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:Oe=>2.4+Oe.length/160,fixed:{mx:46,my:40},onPen:()=>{In.STATE.inkDirty=!0},onDone:()=>{In.STATE.inkDirty=!0}}),F("down")}function je(){try{let Te={access_key:M8,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Te),keepalive:!0}).catch(()=>{})}catch(Te){}}function ze(){d==="ready"&&(je(),F("fold"),Y(""))}function me(){!v||d==="leave"||(Y(""),s.blur(),ke=Gt,dt=V,F("leave"))}let ke=null,dt=null,Gt=null,Ue=In.SHOTS.window,st=In.OFF,kt=Te=>[Te[0]+st[0],Te[1],Te[2]],to=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],kt([1.25,1.5,43.25]),kt([-.55,1.36,42.92])],io=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],kt([-1,1.55,43.6]),kt([-1.4,1.35,43.1]),kt([-1.5,1.33,43.3])];function on(Te){let Oe=Da(xi(Te)),Et=[g.eye,...to,Ue.eye],Ve=[g.target,...io,Ue.target];return{eye:V0(Et,Oe),target:V0(Ve,jr(0,1,Oe*1.03)),fov:Ma(g.fov,Ue.fov,jr(.6,.97,Oe)),roll:(g.roll||0)*(1-Oe)}}function Ke(Te,Oe){if(u)return Te;let Et=performance.now()/1e3,Ve=.004*Oe,We=Math.sin(Et*.61)*.6+Math.sin(Et*1.37+1.3)*.4,lo=Math.sin(Et*.47+2.1)*.6+Math.sin(Et*1.13+.4)*.4;return{eye:[Te.eye[0]+We*Ve,Te.eye[1]+lo*Ve*.7,Te.eye[2]],target:[Te.target[0]+lo*Ve*1.5,Te.target[1]+We*Ve,Te.target[2]],fov:Te.fov,roll:Te.roll}}function pt(Te,Oe,Et){let Ve={};for(let We in Oe)Ve[We]=typeof Oe[We]=="number"&&typeof Te[We]=="number"?Ma(Te[We],Oe[We],Et):Oe[We];return Ve}function vt(Te){Te*=window.__confSpeed||1,m+=Te;let Oe=Ah(Ue),Et=Ah(In.SHOTS.paper),Ve,We,lo=Ah(In.SHOTS.peek);if(d==="room")D.moving?(D.u=Math.min(1,D.u+Te/D.T),Ve=D.path(D.raw?D.u:Da(D.u)),We=pt(D.lookFrom,D.lookTo,jr(.1,.9,D.u)),D.raw&&(We.fade=(y.fade||0)*(1-jr(0,.12,D.u))),D.u>=1&&(D.moving=!1,D.rest=0,f.textContent=ne(),Y("hint"))):(D.rest+=Te,Ve=Ke(Ah(sc[D.i]),2.5),We=Lh(sc[D.i]));else if(d==="enter"){let Ao=xi(m/(u?.6:9)),fo=Da(Ao),so=[Kt.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],kt([.75,1.5,42.95]),kt([-.25,1.42,42.82]),kt([-.9,1.42,42.82]),lo.eye];Ve={eye:V0(so,fo),target:Tl(Kt.target,lo.target,jr(0,.35,fo)),fov:Ma(Kt.fov,lo.fov,jr(.3,1,fo)),roll:0},We=pt(Go,Ed,jr(.2,.9,Ao)),Ao>=1&&F("peek")}else if(d==="peek")Ve=Ke(lo,1.5),We=Ed,m>(u?.5:3.2)&&F("turn");else if(d==="turn"){let _=xi(m/(u?.4:3.2));Ve=kd(lo,Oe,Da(_)),We=pt(Ed,cc,Da(_)),_>=1&&(F("write"),Y("write"))}else if(d==="write")Ve=Ke(Oe,1),We=cc;else if(d==="down"){let _=xi(m/(u?.4:2));Ve=kd(Oe,Et,Da(_)),We=pt(cc,Al,Da(_)),_>=1&&(k=E.write(b,u)||0,In.STATE.inkDirty=!0,F("writing"))}else if(d==="writing")Ve=Ke(Et,.6),We=Al,m>k+.8&&(F("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",Y("hint"));else if(d==="ready")Ve=Ke(Et,.6),We=Al;else if(d==="fold"){let _=xi(m/(u?.3:1.5));In.STATE.fold=Da(_),Ve=Ke(Et,.6),We=Al,_>=1&&F("slide")}else if(d==="slide"){let Ao=xi(m/(u?.6:3.4));In.STATE.slide=Da(jr(0,.7,Ao));let fo=Da(jr(.35,1,Ao));Ve=kd(Et,Oe,fo),We=pt(Al,cc,fo),Ao>=1&&(In.STATE.shown=!1,F("final"),Y("final"))}else if(d==="final")Ve=Ke(Oe,1),We=cc;else if(d==="leave"){let _=u?.6:ke.eye[0]<st[0]-.3?12:7,Ao=xi(m/_),fo={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},so=Da(Ao),jo=ke.eye[0]<st[0]-.3,To=jo?[ke.eye,kt([-.55,1.4,42.8]),kt([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],fo.eye]:[ke.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],fo.eye],an=jo?[ke.target,kt([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],fo.target]:[ke.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],fo.target];if(Ve={eye:V0(To,so),target:V0(an,so),fov:Ma(ke.fov,fo.fov,so),roll:fo.roll*so},We=pt(dt||cc,y,jr(.1,.7,Ao)),We.fade=(y.fade||0)*jr(.82,1,Ao),Ao>=1){v=!1,In.STATE.active=!1,eb.exit(),In.STATE.shown=!0,In.STATE.fold=0,In.STATE.slide=0;let wo=C.getContext("2d");wo.setTransform(1,0,0,1,0,0),wo.clearRect(0,0,C.width,C.height),In.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return Gt=Ve,V=We,{camera:Ve,look:We}}let Kt=null,Go=null;function Uo(){if(d==="room"){if(D.moving||D.rest<.4)return;D.i<sc.length-1?q(D.i+1):(Kt=Gt,Go=V,Y(""),F("enter"));return}if(d==="peek"){m>.4&&F("turn");return}d==="ready"?ze():d==="writing"&&E&&(E.finish(),m=Math.max(m,k))}function Rt(){d==="room"&&!D.moving&&D.rest>.4&&D.i>0&&q(D.i-1)}return{start:oe,update:vt,leave:me,get active(){return v},get stage(){return d},wheel(Te){Te>8?Uo():Te<-8&&Rt()},swipe(Te){Te>0?Uo():Te<0&&Rt()},tap(){Uo()},key(Te){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(Te)>=0?(Uo(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(Te)>=0?(Rt(),!0):Te==="Escape"?(me(),!0):!1},_setNote(Te){s.value=Te,s.dispatchEvent(new Event("input"))}}}});var pb=ve((Wz,db)=>{"use strict";R();var lc=Ds(),zh=ed(),Ad=gf(),E8=jc(),Td=od(),jz=pa(),fc=Du(),ab=Zs(),Nh=!1,{A:na}=ga(),{C:lr,PAINTING_X:pc}=dr(),Vr=e=>Math.max(0,Math.min(1,e)),qe=(e,t,o)=>e+(t-e)*o,Bo=(e,t,o)=>[qe(e[0],t[0],o),qe(e[1],t[1],o),qe(e[2],t[2],o)],eo=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Ld=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Ir=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Ge=(e,t,o)=>{let n=Vr((o-e)/(t-e));return n*n*(3-2*n)};function S8(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,l=Math.max(-f,Math.min(f,e-t)),p=e-l,h=(o+i*l)*r,u=(o-i*h)*c,v=p+(l+h)*c;return t-e>0==v>t&&(v=t,u=0),[v,u]}var ib=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,A8=e=>e*e*e,zd=e=>1-Math.pow(1-e,3),gn=e=>-(Math.cos(Math.PI*e)-1)/2;function An(e,t){let o=e.length-1,n=Vr(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=a*a,p=l*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-f[h])*l+(-i[h]+3*s[h]-3*c[h]+f[h])*p))}var Xt=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function Q0(e,t,o){return Xt(Bo(e.eye,t.eye,o),Bo(e.target,t.target,o),qe(e.fov,t.fov,o),qe(e.roll,t.roll,o))}var Id=()=>Ge(.75,1.3,window.innerWidth/window.innerHeight),Or=(e,t)=>Q0(e,t,Id()),Rh=[7,3.95,lr.hallEnd-.05],T8=[lr.x1,2.9,lr.zc],uc=[16.75,4.55,6.75],Od=[6.92,2.72,14.5],Ha=[7.3,.015,47.1],L8=[uc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Od],z8=[Od,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Ha],X0=[pc[0],3,lr.z0],Y0=[pc[1],3,lr.z0],Rd=47.45,ub=4.6,N8=13.2,R8=1.57,zl=[7.55,1.25,46.75],Fd=[17.25,2.42,46],Gd=[26.05,1.95,46],Nl=[36.15,.015,44],Oh=()=>qe(6.8,6.15,Id()),C8=[zl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Fd],P8=[Fd,[20.2,2.05,45.6],[23.2,1.8,45],Gd],K0=[pc[2],3,lr.z0],Cd=[34.8,1.35,46],n0=[7.89,.03,19.03],sb=.36,cb=13.64,mr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function ka(e){let t=e.side==="left"?1:-1;return Bo([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],Id())}function I8(e){return e.side==="left"?Or(Xt([8.6,3.9,e.z],[sb,1.45,e.z],76),Xt([8,3.6,e.z+.7],[sb,3.95,e.z-2],46,-.008)):Or(Xt([5.4,3.9,e.z],[cb,1.45,e.z],76),Xt([6,3.6,e.z-.7],[cb,3.95,e.z+2],46,-.008))}var O8=()=>[Nl,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],ka(mr[0])],F8=()=>[ka(mr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],ka(mr[3])],G8=()=>[ka(mr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],n0],lb={2:{pos:()=>Od,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>zl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Fd,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Gd,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Cd,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>ka(mr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>ka(mr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>ka(mr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>ka(mr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>ka(mr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>ka(mr[5]),amp:[.12,.08,.1],tumble:.5}},o0=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:9,aperture:.08,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Or(Xt([lr.x0+.9,1.85,lr.zc+.25],[lr.x1,2.85,lr.zc-.1],64),Xt([lr.x0+1.2,2,lr.zc+.35],[lr.x1,2.6,lr.zc-.15],50));return n.eye=eo(eo(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Or(Xt([16.6,1.9,9.2],[17.3,.4,5.6],64),Xt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=eo(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Or(Xt([7,1.35,13],[7.2,7.6,20.4],74,.05),Xt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=eo(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Or(Xt([7,3.6,43.7],[7,3.85,Rh[2]],74),Xt([7,3.6,41.3],[7,3.95,Rh[2]],46));return o.eye=eo(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Or(Xt([7,3.9,40.3],[7,1.35,Rh[2]],76),Xt([6.3,3.6,41.2],[3.7,3.95,Rh[2]],46,-.008));return o.eye=eo(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Or(Xt([7.15,.15,46],[7.3,.04,Ha[2]],50),Xt([7.05,.14,45.9],[7.25,.05,Ha[2]],32));return o.eye=eo(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Or(Xt([7.15,.1,46.3],[7.05,.1,Rd],50),Xt([7.1,.12,45.85],[7,.2,Rd],30));return o.eye=eo(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Or(Xt([7.3,.85,45.65],[7.6,1.38,47.1],64),Xt([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=eo(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Or(Xt([X0[0],2.3,46.85],[X0[0],1.25,X0[2]],74),Xt([X0[0]-.6,2.55,46.85],[X0[0]+1.9,2.9,X0[2]],46,.008));return o.eye=eo(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Or(Xt([Y0[0],1.95,46.85],[Y0[0],1,Y0[2]],74),Xt([Y0[0]-.6,2.1,46.85],[Y0[0]+1.9,2.75,Y0[2]],46,.008));return o.eye=eo(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Or(Xt([K0[0],1.4,46.85],[K0[0],.6,K0[2]],74),Xt([K0[0]-.6,1.45,46.85],[K0[0]+1.9,2,K0[2]],46,.008));return o.eye=eo(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Or(Xt([34.75,.5,44.15],[lr.x1,.8,43.95],66),Xt([34.75,.45,44.3],[lr.x1,.35,43.95],50));return o.eye=eo(o.eye,t),o}},...mr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=I8(e);return r.eye=eo(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Or(Xt([7.75,2.6,18.6],[7.89,0,19.08],60),Xt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-n0[0],r=o.eye[2]-n0[2];return o.eye=[n0[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],n0[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],$8=[1,.96,.88];function fb(e,t){return{dur:t,cam(o,n,r){let a=gn(o),i=Q0(n,r,a),s=mr[e].side==="left"?1:-1;return i.eye=eo(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=qe(n[i],r[i],o));return a.aperture=qe(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=gn(o),r=ka(mr[e]),a=ka(mr[e+1]),i=mr[e].side==="left"?1:-1,s=eo(Bo(r,a,.5),[i*1.2,.5,0]),c=An([r,Bo(r,s,.6),s,Bo(a,s,.6),a],n);return{phase:"fly",pos:eo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Nd=[{dur:6.2,cam(e,t,o){if(e<.5){let s=A8(e/.5),c=Bo(t.eye,[lr.x1-3.2,2.6,lr.zc],s),f=Bo(t.target,T8,Ge(0,.6,e/.5));return Xt(c,f,qe(t.fov,t.fov-8,s),qe(t.roll,.04,s))}let n=zd((e-.5)/.5),r=[[na.cx+.4,10.4,na.zc+.6],[na.cx-.6,7.6,na.zc+1.3],[na.cx-1.9,4.6,na.zc+1.75],o.eye],a=[[na.cx-.1,0,na.zc-.2],[na.cx-1,.4,na.zc-.1],[na.cx-1.1,.8,na.zc-.2],o.target];return Xt(An(r,n),An(a,n),qe(o.fov+14,o.fov,n),qe(-.25,o.roll,n))},look(e,t,o){let n=Ge(.22,.5,e),r=1-Ge(.5,.74,e);return{fade:e<.5?n:r,fadeColor:$8,exposure:qe(t.exposure,o.exposure,Ge(.5,.9,e))*(1+2.2*(e<.5?Ge(.15,.5,e):1-Ge(.5,.8,e))),letterbox:qe(t.letterbox,o.letterbox,Ge(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Ge(.6,1,e),focus:qe(4,o.focus,Ge(.5,1,e)),shafts:qe(t.shafts,o.shafts,Ge(.4,.6,e)),vignette:qe(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=An(r,gn(e)),i=Ge(0,.12,e)*(1-Ge(.82,1,e)),s=Bo(Bo(t.target,o.target,Ge(.55,1,e)),n.pos,i),c=qe(t.fov,o.fov,Ge(.3,1,e))-6*Math.sin(Math.PI*e),f=qe(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return Xt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:qe(t.exposure,o.exposure,Ge(.25,.75,e)),letterbox:qe(t.letterbox,o.letterbox,e),focus:qe(a,o.focus,Ge(.8,1,e)),aperture:qe(.7,o.aperture,Ge(.8,1,e)),shafts:qe(t.shafts,o.shafts,Ge(.3,.8,e)),vignette:qe(t.vignette,o.vignette,e)}},leaf(e){let t=ib(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:eo(An(L8,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Ge(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=An([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Ge(0,.8,e)*.6+gn(Vr(e/.8))*.4),a=An([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],gn(Ge(.8,1,e))),i=e<.8?r:a,s=Bo(Bo(t.target,n.pos,Ge(.03,.22,e)),o.target,Ge(.82,1,e)),c=qe(t.fov,o.fov,Ge(.15,.7,e))-6*Ge(.6,.8,e)*(1-Ge(.85,1,e)),f=qe(t.roll,o.roll,Ge(0,.6,e))-.04*Math.sin(Math.PI*e);return Xt(i,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:qe(t.exposure,o.exposure,Ge(.5,1,e)),letterbox:qe(t.letterbox,o.letterbox,e),focus:qe(a,o.focus,Ge(.84,1,e)),aperture:qe(1.1,o.aperture,Ge(.84,1,e)),shafts:qe(t.shafts,o.shafts,Ge(.2,.9,e)),vignette:qe(t.vignette,o.vignette,Ge(.5,1,e))}},leaf(e){let t=qe(ib(e),e,.35),o=An(z8,Ge(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Ge(.55,.76,e)),r=Ge(.7,.8,e);return{phase:"fly",pos:eo(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=gn(e),r=Q0(t,o,n);return r.eye=eo(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=gn(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=qe(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=gn(e),r=An([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Bo(t.target,o.target,Ge(.1,.85,e));return Xt(r,a,qe(t.fov,o.fov,Ge(.2,1,e)),qe(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=qe(t[r],o[r],Ge(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(e,t,o){return Q0(t,o,gn(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=qe(t[r],o[r],gn(e)));return n},leaf(){return{phase:"floor"}},walker(e){return qe(ub,Oh(),e)}},{dur:11,kick:e=>Vr((e-hc())/(1-hc())),cam(e,t,o,n){let r=hc(),a=Ge(0,r,e)*(1-Ge(r+.12,r+.35,e)),i=hb(Math.min(e,dc)),s=eo(t.target,[(i-t.target[0])*.15*a,0,0]),c=Ge(r+.12,1,e),f=An([t.eye,t.eye,eo(t.eye,[0,.12,-.3]),o.eye],c);return s=Bo(s,n.pos,Ge(r+.06,r+.24,e)*(1-Ge(.9,1,e))),s=Bo(s,o.target,Ge(.88,1,e)),Xt(f,s,qe(t.fov,o.fov,c),qe(t.roll,o.roll,c))},look(e,t,o,n,r){let a=hc(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Ge(0,.12,e)*(1-Ge(a+.25,a+.5,e));return{letterbox:qe(qe(t.letterbox,o.letterbox,Ge(a,1,e)),1.75,s),exposure:qe(t.exposure,o.exposure,Ge(a,1,e)),focus:e<a?t.focus:qe(t.focus,i,Ge(a,a+.2,e)),aperture:qe(t.aperture,o.aperture,Ge(a,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)}},leaf(e){let t=Vr((e-hc())/(1-hc()));if(t<=0)return{phase:"floor"};let o=Ge(0,.85,t)*.85+zd(Ge(0,.15,t))*.15;return{phase:"fly",pos:eo(Ha,[(zl[0]-Ha[0])*o+Math.sin(t*9)*.08*(1-t),(zl[1]-Ha[1])*o,(zl[2]-Ha[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?hb(e):null}},{dur:9,cam(e,t,o,n){let r=gn(e),a=An([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Ge(.6,.92,e),s=Bo(Bo(t.target,n.pos,Ge(0,.15,e)),o.target,1-i),c=qe(t.fov,o.fov,Ge(.3,1,e)),f=qe(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return Xt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:qe(t.letterbox,o.letterbox,e),exposure:qe(t.exposure,o.exposure,Ge(.3,.8,e)),focus:qe(a,o.focus,Ge(.6,.95,e)),aperture:qe(t.aperture,o.aperture,Ge(.6,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,Ge(.3,.8,e))}},leaf(e){let t=gn(e);return{phase:"fly",pos:eo(An(C8,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=gn(e),r=Q0(t,o,n);return r.eye=eo(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=qe(t[r],o[r],e));return n.aperture=qe(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=gn(e);return{phase:"fly",pos:eo(An(P8,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=gn(e),r=Q0(t,o,n);return r.eye=eo(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=qe(t[r],o[r],e));return n.aperture=qe(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=gn(e);return{phase:"fly",pos:eo(An([Gd,[29.2,1.75,45.5],[32.2,1.5,45.4],Cd],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=gn(e),a=An([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Ge(.05,.3,e)*(1-Ge(.8,1,e)),s=Bo(Bo(t.target,o.target,Ge(.6,1,e)),n.pos,i);return Xt(a,s,qe(t.fov,o.fov,Ge(.2,1,e)),qe(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:qe(t.letterbox,o.letterbox,e),exposure:qe(t.exposure,o.exposure,e),focus:qe(a,o.focus,Ge(.8,1,e)),aperture:qe(.9,o.aperture,Ge(.8,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)}},leaf(e){let t=An([Cd,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Nl],Ge(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Ge(.35,.82,e)),n=Ge(.78,.88,e);return{phase:"fly",pos:eo(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=Vr((e-.02)/.09);return zd(t)+.07*Math.sin(Vr((e-.08)/.18)*Math.PI)*(1-Vr((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Ge(.02,.05,e)*(1-Ge(.08,.16,e)),a=Ge(.06,1,e),i=An([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+gn(a)*.45),s=eo(n.pos,[1,-.2,-1.45]);i=Bo(i,s,Ge(.1,.22,e)*(1-Ge(.52,.72,e)));let c=Ge(.06,.16,e)*(1-Ge(.86,1,e)),f=Bo(t.target,n.pos,c);f=Bo(f,o.target,Ge(.86,1,e));let l=qe(t.fov,o.fov,Ge(.1,1,e))+6*Math.sin(Math.PI*Ge(.08,.9,e)),p=qe(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Ge(.1,.9,e))+r;return Xt(eo(i,[0,r,0]),f,l,p)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Ge(.02,.06,e)*(1-Ge(.08,.3,e));return{letterbox:qe(t.letterbox,o.letterbox,Ge(.1,.4,e)),exposure:qe(t.exposure,o.exposure,e)*(1+.8*i),focus:qe(a,o.focus,Ge(.86,1,e)),aperture:qe(.8,o.aperture,Ge(.86,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)+i}},leaf(e){let t=Vr((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=An(O8(),t*.6+gn(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:eo(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>fb(e,7.5)),{dur:10,cam(e,t,o,n){let r=gn(e),a=An([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Ge(0,.15,e)*(1-Ge(.85,1,e)),s=Bo(Bo(t.target,o.target,Ge(.5,1,e)),n.pos,i);return Xt(a,s,qe(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),qe(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:qe(t.letterbox,o.letterbox,e),exposure:qe(t.exposure,o.exposure,e),focus:qe(a,o.focus,Ge(.85,1,e)),aperture:qe(.6,o.aperture,Ge(.85,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)}},leaf(e){let t=gn(e),o=An(F8(),t);return{phase:"fly",pos:eo(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>fb(e,7.5)),{dur:10,cam(e,t,o,n){let r=gn(e),a=An([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Ge(0,.2,e)*(1-Ge(.9,1,e)),s=Bo(Bo(t.target,o.target,Ge(.5,1,e)),n.pos,i);return Xt(a,s,qe(t.fov,o.fov,r),qe(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:qe(t.letterbox,o.letterbox,e),exposure:qe(t.exposure,o.exposure,e),focus:qe(a,o.focus,Ge(.85,1,e)),aperture:qe(.7,o.aperture,Ge(.85,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)}},leaf(e){let t=An(G8(),Ge(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Ge(.4,.84,e)),n=Ge(.8,.9,e);return{phase:"fly",pos:eo(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],Pd=9.2,dc=.72;function hb(e){return e<dc?qe(Oh(),Pd,e/dc):qe(Pd,N8,(e-dc)/(1-dc))}function hc(){return dc*Vr((Ha[0]+.15-Oh())/(Pd-Oh()))}var Ih={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Ch=e=>Object.assign({},Ih,o0[e].look),D8=`
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
`;function Wr(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var t0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Ph(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}db.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let W=document.createElement("link");W.rel="stylesheet",W.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",W.setAttribute("data-tour-font",""),document.head.appendChild(W)}let r=wd(),a=null;fetch("res/hand.json").then(W=>W.ok?W.json():null).then(W=>{a=W}).catch(()=>{});let i=document.createElement("style");i.textContent=D8+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=Wr("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Wr("div","tour-mark",t0(zh.name)),f=Wr("button","tour-free","Explore freely");f.type="button";let l=Wr("div","tour-links",Ad.icons("tour-icon"));l.insertBefore(Md()("tour-icon"),l.firstChild),l.insertBefore(Zs().button("tour-icon"),l.firstChild.nextSibling);let p=Wr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');p.type="button",p.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(p),Nh&&l.appendChild(f);let h=Wr("div","tour-progress",o0.map(()=>"<i></i>").join("")),u=Wr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),v=u.querySelector("span"),d=Wr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">My Portfolio</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${t0(zh.name)}</h1>
		<span class="tour-line tour-sub tour-motto">Every canvas holds<br>what I could not say aloud.</span>`);Ph(d,.4,.35);let m=zh.text.split(/\n\s*\n/).map(W=>`<p class="tour-line">${t0(W.trim())}</p>`).join(""),g=Wr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${t0(zh.title)}</h2>
		<span class="tour-rule"></span>
		${Ad.line("tour-line tour-contact")}
		${m}`);Ph(g,.25,.28);let y=Wr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here is waiting.<br>The leaf will guide you.</span>`);Ph(y,.6,.3);let b=Wr("div","tour-card tour-master","");function E(W){let fe=Wr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Je=fe.querySelector(".tour-title"),ht=fe.querySelector(".tour-body");return fe.filled=!1,fe.body=ht,fe.find=W,fe.fill=()=>{let no=W();if(!no||fe.filled)return;fe.filled=!0;let Io=no.title||"";fe.querySelector(".tour-kicker").textContent=E8(no)||"Oil on canvas";let fr=fe.querySelector(".visit-row");fr.innerHTML=Td.button(no),fr.hidden=!fr.innerHTML;let Aa=fr.querySelector(".visit-btn");Aa&&(Aa.addEventListener("click",xo=>{xo.stopPropagation(),Td.open(no)}),fe.warm=()=>Td.warm(no));let On=0;Je.innerHTML=Io.split(" ").map(xo=>'<span class="tour-word">'+xo.split("").map(hr=>`<span style="transition-delay:${(.35+On++*.045).toFixed(3)}s">${t0(hr)}</span>`).join("")+"</span>").join(" "),Je.setAttribute("aria-label",Io);let sa=.35+Io.length*.045+.2;fe.querySelector(".tour-rule").style.transitionDelay=sa.toFixed(2)+"s";let Tn=String(no.description||"").split(/\n\s*\n/).filter(xo=>xo.trim());if(fe.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&Tn.length){ht.innerHTML=Tn.map(bn=>`<p class="hand-text">${t0(bn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let xo=ht.querySelector("canvas"),hr=Tn.map(bn=>bn.trim()).join(`

`),un=!1,ur=!1,ca=0;ht.addEventListener("wheel",()=>{un=!0},{passive:!0}),ht.addEventListener("touchmove",()=>{un=!0},{passive:!0});let Ta=parseFloat(getComputedStyle(ht).fontSize)||17,Ho=r(xo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Ta*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:bn=>3.5+bn.length/420,seed:3+Io.length,onPen:bn=>{if(un)return;let Gr=bn-ht.clientHeight*.55;Gr>ht.scrollTop+4&&(ht.scrollTop+=Math.min(16,Gr-ht.scrollTop))}});xo.addEventListener("click",bn=>{bn.stopPropagation(),clearTimeout(ca),ur?Ho.finish():(ur=!0,Ho.write(hr,!0))}),fe.write=()=>{if(clearTimeout(ca),un=!1,ur){Ho.write(hr,!0);return}Ho.write("",!0),ca=setTimeout(()=>{ur=!0,Ho.write(hr)},sa*.6*1e3)},fe.stopWrite=()=>{clearTimeout(ca),Ho.stop()};let la=0;window.addEventListener("resize",()=>{clearTimeout(la),la=setTimeout(()=>{ur&&fe.classList.contains("on")&&Ho.write(hr,!0)},250)})}else ht.innerHTML=Tn.map(xo=>`<p class="tour-line">${t0(xo.trim())}</p>`).join(""),ht.querySelectorAll(".tour-line").forEach((xo,hr)=>{xo.style.transitionDelay=(sa+.3+Math.min(hr,6)*.35).toFixed(2)+"s"})},fe}let k=()=>t.paintings?t.paintings():[],L=W=>k().find(fe=>fe.side==="corridor"&&Math.abs(fe.paintingPosition[0]-W)<.5),C=E(()=>k().find(W=>W.side==="end"));b.find=C.find;let Y=()=>Wr("div","tour-card",""),F=E(()=>L(X0[0])),oe=E(()=>L(Y0[0])),D=E(()=>L(K0[0])),ne=mr.map(W=>E(()=>k().find(fe=>fe.side===W.side&&Math.abs(fe.paintingPosition[2]-W.z)<.5))),q=Wr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub tour-remember" hidden></span>
		<span class="tour-line tour-sub">${Nh?"The rest of the gallery is yours to wander.":(window.matchMedia&&window.matchMedia("(pointer: fine)").matches?"Scroll back":"Swipe back")+" to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Ad.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Nh?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Ph(q,.5,.35);let V=[d,g,y,b,C,Y(),Y(),Y(),F,oe,D,Y(),...ne,q];s.append(...V,c,l,h,u),document.body.appendChild(s);let Le=rb()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{_=-1,oo&&(Zt={start:so},oo=!1)}});document.body.classList.add("touring");let je=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,ze=je?"Scroll":"Swipe",me=o0.map((W,fe)=>fe===0?je?"Scroll to begin":"Swipe up to begin":fe===1?ze+" to follow the leaf":fe===2?"":fe===3?ze+" for its story":fe===6||fe===7||fe===o0.length-1?"":ze+" on"),ke=[0];Nd.forEach(W=>ke.push(ke[ke.length-1]+W.dur));let dt=ke[ke.length-1];function Gt(){return fc.ready("court")?fc.ready("hall")?dt:ke[1]:ke[0]}let Ue=null;function st(W){if(v.textContent="The next room is still arriving\u2026",u.classList.add("on","waiting"),Ue===W)return;Ue=W;let fe=W===ke[0]?"court":"hall";fc.onReady(fe,()=>{if(Ue!==W)return;Ue=null,u.classList.remove("waiting");let Je=ke.indexOf(W);v.textContent=me[Je]||"",u.classList.toggle("on",!!me[Je]&&_===Je)})}let kt=210,to=95,io=.35,on=1.4,Ke=.32,pt=1,vt=1.3,Kt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Go=2.2,Uo=.7,Rt=.9,Te=!0,Oe=0,Et=0,Ve=0,We=-10,lo=!1,_=-1,Ao=0,fo=0,so=0,jo=null,To=Object.assign({},Ch(0)),an=o0[0].cam(0),wo={phase:"home",pos:uc.slice(),tumble:0},ti=0,bi=W=>{let fe=0;for(let Je=1;Je<ke.length;Je++)Math.abs(ke[Je]-W)<Math.abs(ke[fe]-W)&&(fe=Je);return fe},wi=new Map,Z=4;function Fe(){let W=null,fe=0;return wi.forEach(Je=>{Je.secs>fe&&(W=Je.p,fe=Je.secs)}),fe>=Z?W:null}function Qe(){let W=q.querySelector(".tour-remember"),fe=Fe();if(!fe||!fe.title){W.hidden=!0;return}W.hidden=!1,W.innerHTML="The leaf remembers: you stayed longest with <em>"+t0(fe.title)+'</em>.<br><button type="button" class="tour-btn quiet" data-act="remember">Return to it</button>'}function Re(W){let fe=ht=>ht&&ht.title===W.title,Je=V.findIndex(ht=>ht.find&&ht!==b&&fe(ht.find()));Je<0&&(Je=V.indexOf(b)),!(Je<0)&&(xt(),Oe=Ve=ke[Je],Et=0,lo=!1,_=-1,fo=0,We=so,Zt={start:so})}function it(W){V[W]===q&&Qe();let fe=V[W];fe&&fe.fill&&(fe.fill(),fe.body.scrollTop=0,fe.offsetWidth),V.forEach((Je,ht)=>{let no=Je.classList.contains("on");Je.classList.toggle("on",ht===W),ht===W&&!no&&Je.write&&Je.write(),ht!==W&&no&&Je.stopWrite&&Je.stopWrite()}),fe&&fe.warm&&fe.warm(),v.textContent=me[W]||"",u.classList.toggle("on",!!me[W])}function xt(){V.forEach(W=>{W.stopWrite&&W.classList.contains("on")&&W.stopWrite(),W.classList.remove("on")}),u.classList.remove("on")}let At=null,ut=-1;function zt(W){if(Le.active||!Te||jo)return;let fe=so-We>io;if(We=so,fe||!At){let ht=0,no=dt;for(let Io=0;Io<ke.length;Io++)if(ke[Io]<=Oe-.02&&(ht=ke[Io]),ke[Io]>=Oe+.02){no=ke[Io];break}At={lo:ht,hi:no}}if(so<ut)return;lo=!1,Ve=Math.max(At.lo,Math.min(At.hi,Ve+W)),Ve=Math.max(Oe-Go,Math.min(Oe+Go,Ve));let Je=Gt();Ve>Je&&(Ve=Math.max(Je,Math.min(Ve,Oe)),W>0&&st(Je))}function mt(W){if(Le.active||!Te||jo)return;let fe=lo?Ve:Oe,Je;if(W>0)Je=ke.findIndex(ht=>ht>fe+.05);else{Je=-1;for(let ht=ke.length-1;ht>=0;ht--)if(ke[ht]<fe-.05){Je=ht;break}}if(!(Je<0)){if(ke[Je]>Gt()){st(Gt());return}Ve=ke[Je],lo=!0,We=so}}let wt=null,_t=W=>W.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(W=>s.addEventListener(W,_t)),s.addEventListener("pointerdown",W=>{if(W.stopPropagation(),!(W.target.closest("button, a")||W.target.closest(".tour-body"))){wt={x:W.clientX,y:W.clientY,lx:W.clientX,ly:W.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(W.pointerId)}catch(fe){}}}),s.addEventListener("pointermove",W=>{if(!wt)return;let fe=W.clientX-wt.lx,Je=W.clientY-wt.ly;wt.lx=W.clientX,wt.ly=W.clientY;let ht=Math.abs(Je)>=Math.abs(fe)?-Je:-fe;wt.moved+=Math.abs(ht);let no=performance.now(),Io=ht/to;wt.v=wt.v*.6+Io/Math.max(.008,(no-wt.lt)/1e3)*.4,wt.lt=no,wt.moved>6&&zt(Io)});let Lt=W=>{let fe=wt;if(wt=null,!!fe){if(Le.active){fe.moved<10&&performance.now()-fe.t<500?Le.tap():fe.y-(W?W.clientY:fe.ly)>30&&Le.swipe(1);return}fe.moved<10&&performance.now()-fe.t<500?mt(1):performance.now()-fe.lt<120&&zt(Math.max(-1.6,Math.min(1.6,fe.v*.22)))}};s.addEventListener("pointerup",W=>{W.stopPropagation(),Lt(W)}),s.addEventListener("pointercancel",()=>{wt=null}),s.addEventListener("wheel",W=>{if(Le.active){if(W.target.closest(".conf-ui"))return;W.preventDefault(),Le.wheel(W.deltaY);return}if(W.target.closest(".tour-body")){let Je=W.target.closest(".tour-body"),ht=Je.scrollTop+Je.clientHeight>=Je.scrollHeight-2&&W.deltaY>0,no=Je.scrollTop<=0&&W.deltaY<0;if(!ht&&!no)return}W.preventDefault();let fe=W.deltaMode===1?W.deltaY*16:W.deltaMode===2?W.deltaY*window.innerHeight:W.deltaY;zt(fe/kt)},{passive:!1}),window.addEventListener("keydown",W=>{if(!Te||jo||document.body.classList.contains("visiting"))return;if(Le.active){if(W.stopImmediatePropagation(),W.target&&/TEXTAREA|INPUT|BUTTON/.test(W.target.tagName))return;Le.key(W.key)&&W.preventDefault();return}let fe=W.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(fe)>=0){if((fe==="Enter"||fe===" ")&&W.target&&W.target.tagName==="BUTTON")return;W.preventDefault(),W.stopImmediatePropagation(),mt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(fe)>=0?(W.preventDefault(),W.stopImmediatePropagation(),mt(-1)):fe==="Escape"?(W.preventDefault(),ia()):/^[wasdzq]$/i.test(fe)&&W.stopImmediatePropagation()},!0),window.addEventListener("keyup",W=>{Te&&!jo&&/^(Arrow|[wasdzq]$)/i.test(W.key)&&W.stopImmediatePropagation()},!0),f.addEventListener("click",W=>{W.stopPropagation(),ia()}),["mousedown","pointerdown"].forEach(W=>p.addEventListener(W,fe=>fe.stopPropagation())),p.addEventListener("click",W=>{W.stopPropagation(),go()});let Ut=Xt([8.6,1.75,44.3],[-3,1.85,44.5],55,0),ct=null,oo=!1;function go(){if(!Te||jo||Le.active||ct)return;if(ab.enter(),!fc.ready("rest")){fc.hurry(),v.textContent="Opening the piano room\u2026",u.classList.add("on","waiting"),fc.onReady("rest",()=>{u.classList.remove("waiting","on"),go()});return}xt(),_=-2;let W=an.eye;if(W[0]>.5&&W[0]<13.5&&W[2]>36&&W[2]<50){oo=!1,Le.start(an,To);return}ct={t:0}}q.addEventListener("click",W=>{let fe=W.target.closest("button");if(fe){if(W.stopPropagation(),fe.dataset.act==="free"&&ia(),fe.dataset.act==="replay"&&Qt(),fe.dataset.act==="remember"){let Je=Fe();Je&&Re(Je)}fe.dataset.act==="list"&&Bu().show(!1),fe.dataset.act==="confess"&&(ab.enter(),xt(),_=-2,Le.start(an,To))}});let $o=[null,[na.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+pc[0]-7,0],[42.5+pc[1]-7,0],[42.5+pc[2]-7,0],[1e3,Math.PI/2],...mr.map(W=>[W.z-1.6,W.side==="left"?-Math.PI/2:Math.PI/2]),[n0[2]-1.6,Math.PI]],Do=null,aa=0;function ia(){if(!Te||jo||!Nh)return;let W=bi(Oe),fe=$o[W];Do=W<=1?{phase:"home",pos:uc.slice()}:W>=3&&W<=6?{phase:"floor",pos:Ha.slice()}:W===11?{phase:"floor",pos:Nl.slice()}:W===18?{phase:"floor",pos:n0.slice()}:null,aa=W>=12?1:0,fe&&n.place&&n.place(fe[0],fe[1]),jo={start:so,fromCam:an,fromLook:Object.assign({},To)},xt(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Qt(){Oe=Ve=0,Et=0,lo=!1,_=-1,Ao=0,fo=0,wo={phase:"home",pos:uc.slice(),tumble:0},Zt={start:so}}let Zt={start:-1},hn=!1,po=[],Pt={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Co(W){ti+=W*(wo.phase==="floor"?0:1);let fe=wo.tumble===void 0?0:wo.tumble,Je=lc.fromTranslation(po,wo.pos);if(wo.phase==="home")Je=lc.rotateY(Je,Je,2.2+Math.sin(ti*.9)*.15),Je=lc.rotateZ(Je,Je,-1+Math.sin(ti*1.3)*.12),Je=lc.rotateX(Je,Je,.4);else if(wo.phase==="floor")Je=lc.rotateY(Je,Je,.65),Je=lc.rotateX(Je,Je,.16);else{let ht=wo.pos;if(Pt.prev&&W>0){let tr=[ht[0]-Pt.prev[0],ht[1]-Pt.prev[1],ht[2]-Pt.prev[2]];if(Math.hypot(tr[0],tr[1],tr[2])<1.5){let qh=Math.min(1,W*6);for(let s0=0;s0<3;s0++)Pt.vel[s0]+=(tr[s0]/W-Pt.vel[s0])*qh}else Pt.vel=[0,0,0]}Pt.prev=ht.slice();let no=Pt.vel,Io=Math.hypot(no[0],no[1],no[2]),fr=Ge(.25,1.4,Io),Aa=Ge(.5,2,-no[1]),On=ti*.35*(.3+fe)+.65,sa=[Math.cos(On),0,Math.sin(On)];Io>.001&&(sa=Bo(sa,Ir(no,-1/Io),fr));let Tn=Math.min(1,W*4);Pt.axis=Bo(Pt.axis,sa,Pt.fresh?1:Tn);let xo=Pt.axis,hr=Math.hypot(xo[0],xo[1],xo[2])||1;xo=Ir(xo,1/hr);let un=an.eye,ur=[un[0]-ht[0],un[1]-ht[1],un[2]-ht[2]],ca=Math.hypot(ur[0],ur[1],ur[2])||1,Ta=qe(.6,.22,fr),Ho=[ur[0]/ca*Ta,1+ur[1]/ca*Ta,ur[2]/ca*Ta],la=xo[0]*Ho[0]+xo[1]*Ho[1]+xo[2]*Ho[2];Ho=Ld(Ho,Ir(xo,la));let bn=Math.hypot(Ho[0],Ho[1],Ho[2])||1;Ho=Ir(Ho,1/bn);let Gr=[xo[1]*Ho[2]-xo[2]*Ho[1],xo[2]*Ho[0]-xo[0]*Ho[2],xo[0]*Ho[1]-xo[1]*Ho[0]],ro=Math.hypot(no[0],no[2]),Wo=0;if(ro>.15&&Pt.dir&&W>0){let tr=[no[0]/ro,no[2]/ro];Wo=(Pt.dir[0]*tr[1]-Pt.dir[1]*tr[0])/W,Pt.dir=tr}else ro>.15&&(Pt.dir=[no[0]/ro,no[2]/ro]);Pt.bank+=(Math.max(-.8,Math.min(.8,Wo*.3))*fr-Pt.bank)*Math.min(1,W*3),Pt.rock+=W*(1.5+2.4*fr),Pt.spin+=W*Aa*7*(.4+fe);let fa=Math.sin(Pt.rock)*(.26+.45*fe)*(1-.5*Aa)+Pt.bank+Pt.spin,La=Math.sin(Pt.rock*.63+1)*(.16+.3*fe)+(wo.swing||0)*.9,ha=Math.cos(fa),Mi=Math.sin(fa),ts=eo(Ir(Ho,ha),Ir(Gr,Mi)),wc=eo(Ir(Gr,ha),Ir(Ho,-Mi));ha=Math.cos(La),Mi=Math.sin(La);let _c=eo(Ir(xo,ha),Ir(ts,Mi)),Mc=eo(Ir(ts,ha),Ir(xo,-Mi)),Dh=Math.sin(Pt.rock+1.5708)*.035*(.3+fe)*(1-.5*fr),_r=eo(ht,Ir(Gr,Dh)),Mr=[_c[0],_c[1],_c[2],0,Mc[0],Mc[1],Mc[2],0,wc[0],wc[1],wc[2],0,_r[0],_r[1],_r[2],1];for(let tr=0;tr<16;tr++)Je[tr]=Mr[tr];Pt.fresh=!1}return wo.phase!=="fly"&&(Pt.prev=null,Pt.vel=[0,0,0],Pt.fresh=!0,Pt.spin=0,Pt.bank=0,Pt.dir=null),{visible:!0,model:Je}}function yn(W){for(let fe in Ih)To[fe]=W[fe]!==void 0?W[fe]:Ih[fe]}function Po(W,fe){if(W<=1)return{phase:"home",pos:uc.slice(),tumble:0};let Je=lb[W];if(Je){let ht=Je.amp;return{phase:"fly",pos:eo(Je.pos(),[Math.sin(fe*.55)*ht[0],Math.sin(fe*.8)*ht[1],(1-Math.cos(fe*.45))*ht[2]]),tumble:Je.tumble}}return{phase:"floor",pos:(W>=18?n0:W>=10?Nl:Ha).slice(),tumble:0}}let oi=0,_i=null;function ni(W){let fe=Math.min(.1,Math.max(0,W-oi));if(oi=W,so=W,hn||(hn=!0,Zt.start=W),jo)return null;if(ct&&(ct.t+=fe,ct.t>=.7&&(ct=null,oo=!0,Le.start(Ut,Object.assign({},Ih,{fade:1,fadeColor:[0,0,0]})))),Le.active){let ro=Le.update(fe);return an=ro.camera,yn(ro.look),o&&window.__camOverride&&(an=window.__camOverride),o&&window.__lookOverride&&Object.assign(To,window.__lookOverride),{camera:an,walker:null,door:1,look:To,leaf:Co(fe)}}if(!lo&&!wt&&so-We>Uo){let ro=bi(Ve);Math.abs(ke[ro]-Ve)<Rt&&(Ve=ke[ro])}let Je=Ve-Oe;if(lo){let Wo=Math.sign(Je)*Math.min(pt,Math.sqrt(2*vt*Math.abs(Je)))-Et;Et+=Math.sign(Wo)*Math.min(Math.abs(Wo),vt*fe),Oe+=Et*fe,(Je>0&&Oe>=Ve||Je<0&&Oe<=Ve||Math.abs(Ve-Oe)<1e-4)&&(Oe=Ve,Et=0,lo=!1)}else{let ro=S8(Oe,Ve,Et,Ke,fe,3);Oe=ro[0],Et=ro[1],Math.abs(Ve-Oe)<1e-4&&Math.abs(Et)<.001&&(Oe=Ve,Et=0)}let ht=0;for(;ht<Nd.length-1&&Oe>=ke[ht+1];)ht++;let no=Nd[ht],Io=Vr((Oe-ke[ht])/no.dur),fr=o0[ht],Aa=o0[ht+1],On=bi(Oe);On!==Ao&&(Ao=On,fo=0);let sa=Math.abs(Oe-ke[On])<.02;sa&&(fo+=fe);let Tn=1-Ge(0,1.2,Math.abs(Oe-ke[On])),xo=no.leaf(Io);if(xo.pos?wo=Object.assign({},xo):wo=Object.assign({},xo,{pos:xo.phase==="home"?uc.slice():(ht>=10?Nl:Ha).slice()}),lb[On]&&Tn>0){let ro=Po(On,fo);wo.pos=Bo(wo.pos,ro.pos,Tn)}let hr=no.walker&&(Io>.01||ht===6)?no.walker(Io):null;_i=hr==null?null:{x:hr,z:Rd,heading:Math.PI/2,phase:(hr-ub)/R8};let un=no.cam(Io,fr.cam(0),Aa.cam(0),wo);if(Tn>0&&fo>0){let ro=o0[On],Wo=ro.cam(0),fa=ro.cam(fo);un=Xt(eo(un.eye,Ir(Ld(fa.eye,Wo.eye),Tn)),eo(un.target,Ir(Ld(fa.target,Wo.target),Tn)),un.fov+(fa.fov-Wo.fov)*Tn,un.roll+(fa.roll-Wo.roll)*Tn)}if(Tn>0&&!Kt){let ro=so,Wo=.006*Tn,fa=Math.sin(ro*.61)*.6+Math.sin(ro*1.37+1.3)*.4,La=Math.sin(ro*.47+2.1)*.6+Math.sin(ro*1.13+.4)*.4,ha=Math.sin(ro*.53+4)*.5+Math.sin(ro*.97+2.6)*.5;un=Xt(eo(un.eye,[fa*Wo,La*Wo*.7,ha*Wo]),eo(un.target,[La*Wo*1.8,fa*Wo*1.4,0]),un.fov,un.roll+ha*.0012*Tn)}an=un;let ur=Ch(ht),ca=Ch(ht+1),Ta=Object.assign({},ur,no.look(Io,ur,ca,wo,un.eye));if(Tn>0){let ro=Ch(On);for(let Wo in ro)typeof ro[Wo]=="number"&&(Ta[Wo]=qe(Ta[Wo],ro[Wo],Tn))}yn(Ta);let la=sa&&Math.abs(Ve-Oe)<.02?On:-1;if(la!==_&&(la>=0&&(ut=so+on),_=la,la>=0?it(la):xt()),h.querySelectorAll("i").forEach((ro,Wo)=>ro.classList.toggle("on",Wo===On)),_>=0&&V[_].find&&!document.hidden){let ro=V[_].find();if(ro&&ro.title){let Wo=wi.get(ro.title)||{p:ro,secs:0};Wo.secs+=fe,wi.set(ro.title,Wo)}}let bn=_>=0?V[_]:null;bn&&bn.fill&&!bn.filled&&(bn.fill(),bn.filled&&(bn.classList.remove("on"),bn.offsetWidth,bn.classList.add("on")));let Gr=Vr((W-Zt.start)/2.6);return Gr<1&&(To.fade=Math.max(To.fade,1-Ge(0,1,Gr)),To.fadeColor=[0,0,0]),o&&window.__camOverride&&(an=window.__camOverride),o&&window.__lookOverride&&Object.assign(To,window.__lookOverride),{camera:an,walker:_i,door:no.door?no.door(Io):ht>=12?1:0,look:ct?Object.assign(To,{fade:Math.max(To.fade||0,Vr(ct.t/.6)),fadeColor:[0,0,0]}):To,leaf:Co(fe)}}return o&&(window.__tour={go:mt,exit:ia,wind:zt,linger:()=>[...wi].map(([W,fe])=>[W,+fe.secs.toFixed(1)]),confess(){xt(),_=-2,Le.start(an,To)},note:()=>go(),conf:Le,paper:Sh().STATE,seek(W,fe){Oe=Ve=ke[W]+(ke[W+1]-ke[W])*fe,Et=0,lo=!1,We=so+1e6,Zt.start=so-10,hn=!0},jump(W){Oe=Ve=ke[W],Et=0,lo=!1,fo=0,We=so,Zt.start=so-10,hn=!0},state:()=>({current:bi(Oe),scroll:+Oe.toFixed(3),target:+Ve.toFixed(3),shown:_,move:Math.abs(Ve-Oe)>.02?{p:Oe}:null,camNow:an,leaf:wo,look:To})}),{update:ni,get active(){return Te&&!jo},handover(W){if(!jo)return null;let fe=Vr((W-jo.start)/1.8);return fe>=1?(Te=!1,null):{from:jo.fromCam,fromLook:jo.fromLook,k:gn(fe)}},restingDoor:()=>aa,restingLeaf(){return Do?(wo=Do,Co(0)):null},mix:Q0,cam:Xt}}});R();var q8=Du(),Ba=pa(),Yd=Bu(),$h=Ba.reflection,H8=!1,zb=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),Kd=()=>zb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Kd=()=>zb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var Nb=()=>2*Math.atan(Math.tan(Kd()*.5)*window.innerHeight/window.innerWidth),B8=hm(),Il=new B8;Il.showPanel(0);H8&&document.body.appendChild(Il.dom);var xn,bc,Hd,xc,Bd,fn;function U8(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!U8())throw q8.finish(),Yd.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");xn=um()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Ba.pixelRatio});location.hash==="#list"&&Yd.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Yd.show(!1)});bc=Zm()();var j8=b1();Hd=j8(xn,bc,$h);xc=yg()(xn,bc);Bd=Mg()(xn);var vb=Ng()(xn,bc),mb=Hg()(xn),gb=jg()(xn),xb=cx()(xn),yb=dx()(xn),bb=xx()(xn),a0=Ix()(xn),Ud=ed(),Rb=gf(),W8=jc(),jd=od(),Wd=pr(),wr=Kf(),Vd=jx(),Cb=Zs(),{A:gc}=ga();fn=Ay()(bc,Nb);var yc=Ly()(xn,Ba),r0=Py()(xn),wb=Oy()(xn),V8=$y()(xn,Ba),X8=jy()(xn,Ba),_b=Pi()(xn),Mb=Sh()(xn),kb=Fi()(xn),ei=pb()({fps:fn,paintings:()=>xc.interactables(),avatar:a0,onExit:()=>fn.setPaused(!1)});fn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=yc);var Z0=[],Fl=[],Ea=[7,2,1.6];bc.viewer=Ea;var Y8=xn({cull:{enable:!0,face:"back"},uniforms:{view:()=>Z0,proj:()=>Fl,yScale:1,mirrorOn:()=>$h?1:0,night:()=>Wd.night,time:xn.context("time")}}),K8=xn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),Pb=document.createElement("style");Pb.textContent=`

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
`;document.head.appendChild(Pb);var Sa=document.createElement("button");Sa.className="painting-plaque";Sa.type="button";Sa.setAttribute("aria-label","Read painting");document.body.appendChild(Sa);var Fr=document.createElement("div");Fr.className="story-overlay";Fr.innerHTML=`

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

		${Rb.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Fr);var i0=document.createElement("div");i0.className="museum-links";i0.innerHTML=Rb.icons("museum-link");i0.insertBefore(Md()("museum-link"),i0.firstChild);i0.insertBefore(Cb.button("museum-link"),i0.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>i0.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(i0);var Q8=Fr.querySelector("#story-title"),Z8=Fr.querySelector("#story-body"),Eb=Fr.querySelector("#story-meta"),J8=Fr.querySelector(".story-contact"),Pl=Fr.querySelector(".story-visit");Pl.addEventListener("click",e=>{e.target.closest(".visit-btn")&&es&&jd.open(es)});var eS=Fr.querySelector(".story-close"),es=null,Xr={p:0,target:0,last:0},Ib={title:Ud.title,description:Ud.text,isAbout:!0},yi=null;function Qd(e){e&&(es=e,Q8.textContent=e.title||"",Z8.textContent=e.description||"",Eb.textContent=e.isAbout?"":W8(e),Eb.hidden=!!e.isAbout,J8.hidden=!e.isAbout,Pl.innerHTML=e.isAbout?"":jd.button(e),Pl.hidden=!Pl.innerHTML,Pl.hidden||jd.warm(e),Fr.classList.toggle("about-mode",!!e.isAbout),Fr.classList.add("open"),Xr.target=e.isAbout?1:0,yi=e,Sa.classList.remove("visible"),fn.setPaused(!0))}function Zd(){Fr.classList.remove("open"),Xr.target=0,es=null,yi=null,fn.setPaused(!1)}function Ob(e){e&&(e.preventDefault(),e.stopPropagation()),yi&&Qd(yi)}Sa.addEventListener("pointerup",Ob,!0);Sa.addEventListener("touchend",Ob,{passive:!1,capture:!0});Sa.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),es===null&&yi&&Qd(yi)},!0);eS.addEventListener("click",Zd);Fr.addEventListener("click",e=>{e.target===Fr&&Zd()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Fr.classList.contains("open")&&Zd()});function Sb(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function tS(){if(es)return;if(ei.active){yi=null,Sa.classList.remove("visible");return}let e=xc.interactables(),t=fn.forward[0],o=fn.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let l=s[0]-fn.pos[0],p=s[2]-fn.pos[2],h=-(l*c+p*f),u=Math.abs(l*f-p*c),v=-(t*c+o*f)/n,d=i.side==="end"?11:8,m=(i.width||2)/2;v>.9&&h>.5&&h<d&&u<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=fn.pos[0],s=fn.pos[2];t/n>.85&&i<13.6&&s>gc.z0-.5&&s<gc.z1+.5&&(r=Object.assign({},Ib,{plaqueTitle:Ud.name}))}r?(yi=r,Sa.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,Sa.classList.add("visible")):(yi=null,Sa.classList.remove("visible"))}var Jd=Ds();function oS(){let e=a0.state;if(!e||!e.glowPos)return null;let t=Sb(fn.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=Sb(fn.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Xd=null;window.addEventListener("pointerdown",e=>{Xd={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Xd;if(Xd=null,!t||es||ei.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=oS();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),Qd(Ib))},!0);function nS(e){let t=Math.min(Math.max(e-Xr.last,0),.1);Xr.last=e;let o=t/1.6;if(Xr.p=Xr.target>Xr.p?Math.min(1,Xr.p+o):Math.max(0,Xr.p-o),Xr.p<=0)return;let n=Xr.p<.5?2*Xr.p*Xr.p:1-Math.pow(-2*Xr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=a0.state,i=a&&a.hipsPos?a.hipsPos[0]:gc.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:gc.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=fn.pos,p=fn.forward,h=[l[0],l[1],l[2]],u=[l[0]+p[0],l[1]+p[1],l[2]+p[2]],v=(y,b)=>y.map((E,k)=>E+(b[k]-E)*n),d=[gc.cx-6.2,1.7,gc.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*d[b]+n*n*c[b]);Jd.lookAt(fn.view(),g,v(u,f),[0,1,0])}var vc={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},J0=null,Ol=!1,Fh=!1;function rS(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Jd.lookAt(e,t,o,[i[0]*f,c,i[2]*f])}function aS(e){let t=window.innerWidth/window.innerHeight,o=yc.shot,n=ei.active?ei.update(e):null,r=n?null:ei.handover(e),a=null,i=vc;if(n){a=n.camera,i=n.look,J0=n.leaf;let s=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;a0.setWalk(s),Ol=!!s,r0.setOpen(n.door||0)}else J0=ei.restingLeaf(),a0.setWalk(null),Ol=!1,r0.setOpen(ei.restingDoor());if(r){let s=fn.pos,c=fn.forward,f=ei.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],Nb()*180/Math.PI,0);a=ei.mix(r.from,f,r.k),i={};for(let l in vc)i[l]=Array.isArray(vc[l])?vc[l]:r.fromLook[l]+(vc[l]-r.fromLook[l])*r.k}if(a&&n&&(a=Vd.apply(a,e)),a)rS(Z0,a.eye,a.target,a.roll||0),Jd.perspective(Fl,a.fov*Math.PI/180,t,.1,700),Ea[0]=a.eye[0],Ea[1]=a.eye[1],Ea[2]=a.eye[2];else{let s=fn.view(),c=fn.proj();for(let h=0;h<16;h++)Z0[h]=s[h],Fl[h]=c[h];let f=s[12],l=s[13],p=s[14];Ea[0]=-(s[0]*f+s[1]*l+s[2]*p),Ea[1]=-(s[4]*f+s[5]*l+s[6]*p),Ea[2]=-(s[8]*f+s[9]*l+s[10]*p)}for(let s in vc)o[s]=i[s];n&&Vd.pull(o,e)}var ra={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},$d=[9,9,9,9],Ab=[0,0,0,0],Rl=0,Dd=0,mc=null,Tb=0,Lb=0,Cl=0;function iS(e){let t=Math.min(.1,Math.max(0,e-Tb));Tb=e,ra.focus=yc.shot.focus,ra.aperture=Ba.post>=2?yc.shot.aperture:0;for(let i=0;i<4;i++)$d[i]+=t,ra.wake[i][3]=Ab[i]*Math.exp(-$d[i]/1.1);let o=J0&&J0.visible?J0.model:null;if(o&&t>0){let i=[o[12],o[13],o[14]];if(mc){let s=[i[0]-mc[0],i[1]-mc[1],i[2]-mc[2]],c=Math.hypot(s[0],s[1],s[2]),f=c/t;if(c<1.5&&f>.12){let l=Math.min(1,t*8);for(let h=0;h<3;h++)ra.wakeDir[h]+=(s[h]/c-ra.wakeDir[h])*l;let p=Math.hypot(ra.wakeDir[0],ra.wakeDir[1],ra.wakeDir[2])||1;for(let h=0;h<3;h++)ra.wakeDir[h]/=p;if(Dd+=t,Dd>.14){Dd=0;let h=ra.wake[Rl];h[0]=i[0],h[1]=i[1],h[2]=i[2],Ab[Rl]=Math.min(1,(f-.12)/1.6)*.5,$d[Rl]=0,Rl=(Rl+1)%4}}}mc=i}else o||(mc=null);let n=r0.openNow?r0.openNow():0,r=t>0?(n-Lb)/t:0;Lb=n;let a=Math.max(-1,Math.min(1,r*1.2));Cl+=(a-Cl)*Math.min(1,t*(Math.abs(a)>Math.abs(Cl)?6:.7)),ra.gust[0]+=Cl*5.5*t,ra.gust[1]=Math.abs(Cl)}var qd=0,Gh=!1;xn.frame(function({time:e}){if(document.body.classList.contains("visiting")){qd=0;return}Il.begin(),Wd.tick(e);let t=ei.active&&Vd.resting&&Wd.settled&&(Ba.isPhone||Ba.scale<1||Ba.level>0);if(t){if(Gh=!Gh,Gh){Il.end();return}}else Gh=!1;let o=e-qd;qd=e,Ba.frame(t?o/2:o),$h=Ba.reflection,fn.tick({time:e}),nS(e),xc.update(fn.pos,fn.fmouse[1],Kd()),tS(),aS(e),wr.update(Z0,Fl,Ea),Cb.listen(Ea),Fh=!Ol&&wr.room("stair")&&(!wr.room("court")||Ea[0]<.5||Ea[2]>30),a0.setPiano(Fh),iS(e),yc.capture(arguments[0],{view:Z0,proj:Fl,eye:Ea},()=>{Y8(()=>{$h&&wr.floor&&K8(()=>{Hd(),vb({reflected:!0}),_b(),wr.room("stair",!0)&&(kb({reflected:!0}),Mb({reflected:!0,view:Z0})),wr.room("court",!0)&&bb(),(Fh||wr.room("court",!0)||Ol)&&a0(),Bd(xc.batch()),wr.room("street",!0)&&mb(),wr.room("garden",!0)&&xb(),wr.room("florence",!0)&&yb(),wb(J0),r0(),gb(),r0.glass()}),Hd(),vb(),_b(),wr.room("stair")&&(kb(),Mb({view:Z0})),wr.room("court")&&bb(),(Fh||wr.room("court")||Ol)&&a0(),Bd(xc.batch()),wr.room("street")&&mb(),wr.room("garden")&&(xb(),X8()),wr.room("florence")&&yb(),wb(J0),r0(),V8(ra),gb(),r0.glass()})}),yc.present(),Il.end()});})();
